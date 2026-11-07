// 面向幼儿的反馈工具：音效、语音夸奖/引导

let ctx: AudioContext | null = null
let muted = false

export const setMuted = (v: boolean) => {
  muted = v
  if (v) stopSpeak()
}

export const isMuted = () => muted

const getCtx = (): AudioContext | null => {
  if (typeof window === 'undefined') return null
  if (!ctx) {
    const AC = window.AudioContext || (window as any).webkitAudioContext
    if (!AC) return null
    ctx = new AC()
  }
  if (ctx.state === 'suspended') ctx.resume()
  return ctx
}

// 播放一个音符
const tone = (
  freq: number,
  start: number,
  dur: number,
  type: OscillatorType = 'sine',
  gain = 0.16
) => {
  if (muted) return
  const ac = getCtx()
  if (!ac) return
  const t0 = ac.currentTime + start
  const osc = ac.createOscillator()
  const g = ac.createGain()
  osc.type = type
  osc.frequency.setValueAtTime(freq, t0)
  g.gain.setValueAtTime(0.0001, t0)
  g.gain.exponentialRampToValueAtTime(gain, t0 + 0.02)
  g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur)
  osc.connect(g)
  g.connect(ac.destination)
  osc.start(t0)
  osc.stop(t0 + dur + 0.05)
}

// 答对：轻快的上行琶音
export const playCorrect = () => {
  const notes = [523.25, 659.25, 783.99, 1046.5]
  notes.forEach((f, i) => tone(f, i * 0.09, 0.22, 'triangle', 0.14))
}

// 答错：温柔的两声下行，不刺耳
export const playWrong = () => {
  tone(392, 0, 0.18, 'sine', 0.1)
  tone(311.13, 0.16, 0.26, 'sine', 0.09)
}

// 点按反馈：短促轻响
export const playTap = () => {
  tone(880, 0, 0.06, 'sine', 0.05)
}

// ---------- 语音朗读 ----------
// 优先使用在线免费 TTS（音色自然），依次兜底，最后退回浏览器内置语音

let reqId = 0

// 本地预生成的微软「晓伊」活泼女声（由 tool/gen-tts.py 生成到 public/tts/）
// 固定话术优先用本地文件：音色最好、零网络延迟、离线可用
const LOCAL_VOICE: Record<string, string> = {
  '太棒了，答对啦！': '32756950a9',
  '真厉害，你数得真准！': '0ce946b4ce',
  '好样的，完全正确！': '0317193d95',
  '你真是小棋手！': '9dacd77d3f',
  '漂亮，一下就数对了！': '9b9605ecde',
  '真聪明，继续保持！': '96e80feec6',
  '再数一数，棋子旁边的空交叉点都算气哦': '8b959d8ea5',
  '别着急，看看棋子四周还有哪些空点': '52411e9601',
  '慢慢数，一个一个来': '1bf772c71c',
  '再仔细看看，气就在棋子旁边': 'e5c54d08fd',
  '全部答对啦，你太棒了！': 'dcedeb102e',
  '声音打开啦': 'c108bb1771',
}

// 在线免费 TTS 兜底资源（用于本地未收录的文本）
const BAIDU_QS = 'lan=zh&spd=5&source=web&text='

const PROVIDERS: Array<(text: string) => string> = [
  // 百度翻译 TTS（同源代理，避免跨域）
  (t) => '/tts/baidu?' + BAIDU_QS + encodeURIComponent(t),
  // 百度翻译 TTS（直连兜底）
  (t) => 'https://fanyi.baidu.com/gettts?' + BAIDU_QS + encodeURIComponent(t),
]


// 浏览器内置语音，尽量挑一个音色好听的中文女声
const speakLocal = (text: string) => {
  if (typeof window === 'undefined') return
  const synth = window.speechSynthesis
  if (!synth) return
  const u = new SpeechSynthesisUtterance(text)
  u.lang = 'zh-CN'
  const voices = synth.getVoices()
  const preferred = ['Xiaoxiao', 'Tingting', 'Ting-Ting', 'Yaoyao', 'Huihui', 'Google 普通话', 'Meijia']
  const zh = voices.filter((v) => /zh|Chinese|中文/i.test(v.lang + v.name))
  const picked =
    preferred.map((p) => zh.find((v) => v.name.includes(p))).find(Boolean) ||
    zh.find((v) => /female|女/i.test(v.name)) ||
    zh[0]
  if (picked) u.voice = picked
  u.rate = 0.98
  u.pitch = 1.12
  u.volume = 1
  synth.speak(u)
}

// 在用户手势里调用一次，激活音频上下文，避免后续播放被浏览器拦截
const unlock = () => {
  getCtx()
}

// 去掉中文标点：部分 TTS 接口遇到标点会直接报错
const SANITIZE_RE = /[，。！？、；：“”‘’（）【】《》…—·,.!?;:()"'[\]<>]/g
const sanitize = (t: string) => {
  const s = t.replace(SANITIZE_RE, ' ').replace(/\s+/g, ' ').trim()
  return s || t
}

// 当前正在播放的音频源，用于停止上一句
let currentSource: AudioBufferSourceNode | null = null

const stopCurrentSource = () => {
  if (!currentSource) return
  try {
    currentSource.onended = null
    currentSource.stop()
  } catch {
    // 已结束的音频源重复 stop 会报错，忽略
  }
  currentSource.disconnect()
  currentSource = null
}

// 用 Web Audio 播放音频数据：AudioContext 已在用户手势中解锁，不受 autoplay 限制
const playBuffer = (buffer: AudioBuffer): Promise<boolean> =>
  new Promise((resolve) => {
    const ac = getCtx()
    if (!ac) return resolve(false)
    try {
      const src = ac.createBufferSource()
      src.buffer = buffer
      src.connect(ac.destination)
      src.onended = () => {
        if (currentSource === src) currentSource = null
        resolve(true)
      }
      currentSource = src
      src.start()
      resolve(true)
    } catch {
      resolve(false)
    }
  })

// 拉取一个 TTS 地址并解码；失败返回 null
const fetchAudio = async (url: string, id: number): Promise<AudioBuffer | null> => {
  const ac = getCtx()
  if (!ac) return null
  try {
    const ctrl = new AbortController()
    const timer = setTimeout(() => ctrl.abort(), 6000)
    const res = await fetch(url, { signal: ctrl.signal })
    clearTimeout(timer)
    if (id !== reqId) return null
    if (!res.ok) return null
    const type = res.headers.get('content-type') || ''
    // 接口异常时会返回 JSON，直接跳过
    if (!/audio|octet-stream|mpeg|mp3/i.test(type)) return null
    const buf = await res.arrayBuffer()
    if (id !== reqId || buf.byteLength < 512) return null
    return await ac.decodeAudioData(buf)
  } catch {
    return null
  }
}

// 兜底播放器：WebView 中 fetch(file://) 不可用时，用 <audio> 直接播放本地文件
let htmlAudio: HTMLAudioElement | null = null

const playWithAudio = (url: string): Promise<boolean> =>
  new Promise((resolve) => {
    try {
      if (!htmlAudio) htmlAudio = new Audio()
      const audio = htmlAudio
      audio.src = url
      let settled = false
      let timer: ReturnType<typeof setTimeout> | undefined
      const done = (ok: boolean) => {
        if (settled) return
        settled = true
        if (timer) clearTimeout(timer)
        resolve(ok)
      }
      timer = setTimeout(() => done(false), 5000)
      audio.onerror = () => done(false)
      audio.onplaying = () => done(true)
      const p = audio.play()
      if (p && typeof p.catch === 'function') p.catch(() => done(false))
    } catch {
      resolve(false)
    }
  })

export const speak = async (text: string) => {
  if (muted || !text || typeof window === 'undefined') return

  // 必须在用户手势里同步解锁
  unlock()
  stopSpeak()
  const id = ++reqId

  // 1) 固定话术：优先播放本地微软女声，音色最好、零延迟
  const localKey = LOCAL_VOICE[text]
  if (localKey) {
    // 相对路径：web 下为 /tts/xxx.mp3，安卓离线包下为 file:///android_asset/www/tts/xxx.mp3
    const url = './tts/' + localKey + '.mp3'
    const buffer = await fetchAudio(url, id)
    if (id !== reqId) return
    if (buffer && (await playBuffer(buffer))) return
    // WebView 中 fetch(file://) 会被拒绝，退化为 <audio> 直接播放
    if (await playWithAudio(url)) return
  }

  const clean = sanitize(text)

  // 2) 在线音源兜底（离线包 file:// 下跳过，避免无谓等待）
  if (location.protocol !== 'file:') {
    for (const build of PROVIDERS) {
      if (id !== reqId) return
      const buffer = await fetchAudio(build(clean), id)
      if (id !== reqId) return
      if (!buffer) continue
      const ok = await playBuffer(buffer)
      if (ok) return
    }
  }

  // 3) 全部失败，退回浏览器内置语音
  if (id === reqId) speakLocal(clean)
}

export const stopSpeak = () => {
  if (typeof window === 'undefined') return
  reqId++
  stopCurrentSource()
  window.speechSynthesis?.cancel()
}

const PRAISES = [
  '太棒了，答对啦！',
  '真厉害，你数得真准！',
  '好样的，完全正确！',
  '你真是小棋手！',
  '漂亮，一下就数对了！',
  '真聪明，继续保持！',
]

const GUIDES = [
  '再数一数，棋子旁边的空交叉点都算气哦',
  '别着急，看看棋子四周还有哪些空点',
  '慢慢数，一个一个来',
  '再仔细看看，气就在棋子旁边',
]

const pick = (arr: string[]) => arr[Math.floor(Math.random() * arr.length)]

export const randomPraise = () => pick(PRAISES)
export const randomGuide = () => pick(GUIDES)
