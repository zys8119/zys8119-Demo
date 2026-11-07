import WebSocket from 'ws'
import fs from 'node:fs'
import crypto from 'node:crypto'

const TRUSTED = '6A5AA1D4EAFF4E9FB37E23D68491D6F4'

// 新版 Edge TTS 需要 Sec-MS-GEC 签名（Windows FILETIME 取整到 5 分钟 + token 的 SHA256）
const genSecMsGec = () => {
  const ticks = Math.floor(Date.now() / 1000) + 11644473600
  const rounded = ticks - (ticks % 300)
  const winTicks = String(rounded * 10000000)
  return crypto
    .createHash('sha256')
    .update(winTicks + TRUSTED, 'ascii')
    .digest('hex')
    .toUpperCase()
}

const url =
  'wss://speech.platform.bing.com/consumer/speech/synthesize/readaloud/edge/v1?TrustedClientToken=' +
  TRUSTED +
  '&Sec-MS-GEC=' +
  genSecMsGec() +
  '&Sec-MS-GEC-Version=1-130.0.2849.68'

const ws = new WebSocket(url, {
  headers: {
    Origin: 'chrome-extension://jdiccldimpdaibmpdkjnbmckianbfold',
    'User-Agent':
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36 Edg/130.0.0.0',
  },
})

let audio = Buffer.alloc(0)
const timer = setTimeout(() => {
  console.log('timeout, audio bytes =', audio.length)
  process.exit(1)
}, 20000)

ws.on('open', () => {
  console.log('connected')
  const now = new Date().toISOString()
  ws.send(
    'X-Timestamp:' + now + '\r\nContent-Type:application/json; charset=utf-8\r\nPath:speech.config\r\n\r\n' +
      JSON.stringify({
        context: {
          synthesis: {
            audio: {
              metadataoptions: { sentenceBoundaryEnabled: 'false', wordBoundaryEnabled: 'false' },
              outputFormat: 'audio-24khz-48kbitrate-mono-mp3',
            },
          },
        },
      }) +
      '\r\n'
  )
  const ssml =
    "<speak version='1.0' xmlns='http://www.w3.org/2001/10/synthesis' xml:lang='zh-CN'>" +
    "<voice name='zh-CN-XiaoxiaoNeural'>" +
    "<prosody rate='+8%' pitch='+12Hz'>太棒了，答对啦</prosody>" +
    '</voice></speak>'
  ws.send(
    'X-RequestId:' + crypto.randomUUID().replace(/-/g, '') + '\r\n' +
      'Content-Type:application/ssml+xml\r\nX-Timestamp:' + now + 'Z\r\nPath:ssml\r\n\r\n' +
      ssml
  )
})

ws.on('message', (data, isBinary) => {
  if (isBinary) {
    const buf = Buffer.from(data)
    const headerLen = buf.readUInt16BE(0)
    audio = Buffer.concat([audio, buf.subarray(headerLen + 2)])
  } else {
    const s = data.toString()
    if (s.includes('Path:turn.end')) {
      clearTimeout(timer)
      fs.writeFileSync('/tmp/edge.mp3', audio)
      console.log('OK audio bytes =', audio.length)
      ws.close()
      process.exit(0)
    }
  }
})

ws.on('error', (e) => {
  clearTimeout(timer)
  console.log('WS ERROR:', e.message)
  process.exit(1)
})
