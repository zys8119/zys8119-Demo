// 撒花 / 飘字等视觉奖励效果（纯 DOM 实现，不依赖三方库）

const STYLE_ID = '__kid_celebrate_style__'
const PARTICLES = ['🎉', '✨', '⭐', '🌟', '🎈', '🏆', '🎊', '💫', '🥳', '🎯', '🌈', '💛']
const COLORS = ['#e0522f', '#f0a13c', '#ffd166', '#06d6a0', '#118ab2', '#ef476f', '#a06cd5', '#ff8fab']

const ensureStyle = () => {
  if (typeof document === 'undefined' || document.getElementById(STYLE_ID)) return
  const style = document.createElement('style')
  style.id = STYLE_ID
  style.textContent = `
  .kc-particle{position:fixed;left:0;top:0;pointer-events:none;z-index:9999;will-change:transform,opacity;animation:kc-burst var(--dur) cubic-bezier(.15,.7,.25,1) forwards;}
  @keyframes kc-burst{
    0%{transform:translate3d(var(--x),var(--y),0) scale(.2) rotate(0deg);opacity:0}
    10%{opacity:1;transform:translate3d(var(--x),var(--y),0) scale(1.25) rotate(20deg)}
    100%{transform:translate3d(calc(var(--x) + var(--dx)),calc(var(--y) + var(--dy)),0) scale(.85) rotate(var(--rot));opacity:0}
  }
  .kc-rain{position:fixed;top:0;left:0;pointer-events:none;z-index:9999;will-change:transform,opacity;animation:kc-fall var(--dur) linear forwards;}
  @keyframes kc-fall{
    0%{transform:translate3d(var(--x),-14vh,0) rotate(0deg);opacity:0}
    8%{opacity:1}
    85%{opacity:1}
    100%{transform:translate3d(calc(var(--x) + var(--sway)),106vh,0) rotate(var(--rot));opacity:0}
  }
  .kc-ring{position:fixed;left:0;top:0;pointer-events:none;z-index:9998;border-radius:50%;
    border:6px solid rgba(255,255,255,.92);box-shadow:0 0 60px rgba(240,161,60,.95),inset 0 0 60px rgba(224,82,47,.6);
    animation:kc-ring .95s cubic-bezier(.15,.7,.25,1) forwards;}
  @keyframes kc-ring{
    0%{transform:translate(-50%,-50%) scale(.1);opacity:0}
    22%{opacity:1}
    100%{transform:translate(-50%,-50%) scale(1.7);opacity:0}
  }
  .kc-text{position:fixed;z-index:9999;pointer-events:none;font-size:34px;font-weight:900;white-space:nowrap;
    background:linear-gradient(120deg,#e0522f,#f0a13c,#ffd166);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;
    text-shadow:0 4px 18px rgba(255,255,255,.92);animation:kc-rise 1.4s cubic-bezier(.2,.7,.3,1) forwards;}
  @keyframes kc-rise{
    0%{transform:translate(-50%,0) scale(.4);opacity:0}
    18%{transform:translate(-50%,-20px) scale(1.25);opacity:1}
    70%{opacity:1}
    100%{transform:translate(-50%,-110px) scale(1);opacity:0}
  }
  @media (prefers-reduced-motion: reduce){
    .kc-particle,.kc-rain,.kc-ring,.kc-text{animation-duration:.01s}
  }
  `
  document.head.appendChild(style)
}

const rand = (min: number, max: number) => min + Math.random() * (max - min)
const pickOne = <T,>(arr: T[]) => arr[Math.floor(Math.random() * arr.length)]

const spawn = (
  cls: string,
  content: string,
  vars: Record<string, string>,
  extra: Partial<CSSStyleDeclaration> = {}
) => {
  const el = document.createElement('span')
  el.className = cls
  el.textContent = content
  Object.entries(vars).forEach(([k, v]) => el.style.setProperty(k, v))
  Object.assign(el.style, extra)
  document.body.appendChild(el)
  el.addEventListener('animationend', () => el.remove(), { once: true })
  setTimeout(() => el.remove(), 3200)
  return el
}

/** 在屏幕坐标 (x, y) 处放射状撒花 */
export const burst = (x: number, y: number, count = 26) => {
  if (typeof document === 'undefined') return
  ensureStyle()
  for (let i = 0; i < count; i++) {
    const angle = (Math.PI * 2 * i) / count + rand(-0.25, 0.25)
    const dist = rand(90, 260)
    spawn(
      'kc-particle',
      pickOne(PARTICLES),
      {
        '--x': `${x}px`,
        '--y': `${y}px`,
        '--dx': `${Math.cos(angle) * dist}px`,
        '--dy': `${Math.sin(angle) * dist - rand(20, 90)}px`,
        '--rot': `${rand(-540, 540)}deg`,
        '--dur': `${rand(0.9, 1.6)}s`,
      },
      {
        fontSize: `${rand(20, 40)}px`,
        animationDelay: `${rand(0, 0.12)}s`,
        filter: 'drop-shadow(0 2px 6px rgba(0,0,0,.18))',
      }
    )
  }
}

/** 全屏撒花雨：从顶部铺满整个屏幕宽度落下 */
export const rain = (count = 90) => {
  if (typeof document === 'undefined') return
  ensureStyle()
  const vw = window.innerWidth
  for (let i = 0; i < count; i++) {
    const isShape = Math.random() < 0.42
    const x = rand(0, vw)
    const vars = {
      '--x': `${x}px`,
      '--sway': `${rand(-140, 140)}px`,
      '--rot': `${rand(-900, 900)}deg`,
      '--dur': `${rand(1.7, 3)}s`,
    }
    if (isShape) {
      const w = rand(8, 16)
      spawn('kc-rain', '', vars, {
        width: `${w}px`,
        height: `${w * rand(1.2, 2.2)}px`,
        background: pickOne(COLORS),
        borderRadius: '3px',
        animationDelay: `${rand(0, 0.9)}s`,
      })
    } else {
      spawn('kc-rain', pickOne(PARTICLES), vars, {
        fontSize: `${rand(22, 46)}px`,
        animationDelay: `${rand(0, 0.9)}s`,
        filter: 'drop-shadow(0 2px 8px rgba(0,0,0,.16))',
      })
    }
  }
}

/** 答对时的炫酷全屏庆祝：光晕扩散 + 三处爆炸 + 全屏撒花雨 */
export const bigCelebrate = () => {
  if (typeof document === 'undefined') return
  ensureStyle()
  const w = window.innerWidth
  const h = window.innerHeight

  const ring = document.createElement('div')
  ring.className = 'kc-ring'
  ring.style.left = `${w / 2}px`
  ring.style.top = `${h * 0.42}px`
  const size = Math.min(w, h) * 0.85
  ring.style.width = `${size}px`
  ring.style.height = `${size}px`
  document.body.appendChild(ring)
  ring.addEventListener('animationend', () => ring.remove(), { once: true })
  setTimeout(() => ring.remove(), 2000)

  burst(w * 0.5, h * 0.36, 30)
  setTimeout(() => burst(w * 0.18, h * 0.5, 20), 90)
  setTimeout(() => burst(w * 0.82, h * 0.5, 20), 160)
  setTimeout(() => rain(90), 60)
}

/** 在屏幕坐标 (x, y) 处向上飘出一句夸奖文字 */
export const floatText = (text: string, x: number, y: number) => {
  if (typeof document === 'undefined') return
  ensureStyle()
  const el = document.createElement('div')
  el.className = 'kc-text'
  el.textContent = text
  el.style.left = `${x}px`
  el.style.top = `${y}px`
  document.body.appendChild(el)
  el.addEventListener('animationend', () => el.remove(), { once: true })
  setTimeout(() => el.remove(), 2400)
}
