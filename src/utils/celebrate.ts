// 撒花 / 飘字等视觉奖励效果（纯 DOM 实现，不依赖三方库）

const STYLE_ID = '__kid_celebrate_style__'
const PARTICLES = ['🎉', '✨', '⭐', '🌟', '🎈', '🏆', '🎊', '💫']

const ensureStyle = () => {
  if (typeof document === 'undefined' || document.getElementById(STYLE_ID)) return
  const style = document.createElement('style')
  style.id = STYLE_ID
  style.textContent = `
  .kc-particle{position:fixed;left:0;top:0;font-size:22px;pointer-events:none;z-index:9999;will-change:transform,opacity;animation:kc-fly var(--dur) cubic-bezier(.2,.7,.3,1) forwards;}
  @keyframes kc-fly{
    0%{transform:translate3d(var(--x),var(--y),0) scale(.4) rotate(0deg);opacity:0}
    12%{opacity:1}
    100%{transform:translate3d(calc(var(--x) + var(--dx)),calc(var(--y) + var(--dy)),0) scale(1.1) rotate(var(--rot));opacity:0}
  }
  .kc-text{position:fixed;z-index:9999;pointer-events:none;font-size:26px;font-weight:800;white-space:nowrap;
    background:linear-gradient(120deg,#e0522f,#f0a13c);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;
    text-shadow:0 2px 10px rgba(255,255,255,.85);animation:kc-rise 1.2s cubic-bezier(.2,.7,.3,1) forwards;}
  @keyframes kc-rise{
    0%{transform:translate(-50%,0) scale(.5);opacity:0}
    20%{transform:translate(-50%,-16px) scale(1.15);opacity:1}
    70%{opacity:1}
    100%{transform:translate(-50%,-70px) scale(1);opacity:0}
  }
  @media (prefers-reduced-motion: reduce){
    .kc-particle,.kc-text{animation-duration:.01s}
  }
  `
  document.head.appendChild(style)
}

const rand = (min: number, max: number) => min + Math.random() * (max - min)

/** 在屏幕坐标 (x, y) 处撒花 */
export const burst = (x: number, y: number, count = 22) => {
  if (typeof document === 'undefined') return
  ensureStyle()
  for (let i = 0; i < count; i++) {
    const el = document.createElement('span')
    el.className = 'kc-particle'
    el.textContent = PARTICLES[Math.floor(Math.random() * PARTICLES.length)]
    const dx = rand(-160, 160)
    const dy = rand(-200, -60)
    el.style.setProperty('--x', `${x}px`)
    el.style.setProperty('--y', `${y}px`)
    el.style.setProperty('--dx', `${dx}px`)
    el.style.setProperty('--dy', `${dy}px`)
    el.style.setProperty('--rot', `${rand(-360, 360)}deg`)
    el.style.setProperty('--dur', `${rand(0.8, 1.4)}s`)
    el.style.fontSize = `${rand(16, 30)}px`
    el.style.animationDelay = `${rand(0, 0.15)}s`
    document.body.appendChild(el)
    el.addEventListener('animationend', () => el.remove(), { once: true })
    setTimeout(() => el.remove(), 2000)
  }
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
  setTimeout(() => el.remove(), 2000)
}
