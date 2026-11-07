<template>
  <div class="qi-lesson">
    <header class="head">
      <div class="head-row">
        <div>
          <h1>第二课 · 气</h1>
          <p class="intro">“气”是指棋子在棋盘上与其有直线相连的交叉点，这也是棋子的出路。</p>
        </div>
        <button class="mute-btn" :class="{ off: muted }" :title="muted ? '打开声音' : '关闭声音'" @click="toggleMute">
          {{ muted ? '🔇' : '🔊' }}
        </button>
      </div>
    </header>

    <section class="card">
      <h2>图 1 · 单子的气</h2>
      <div class="boards">
        <figure v-for="b in fig1" :key="b.name" class="board-box">
          <GoBoard :stones="b.stones" show-liberties />
          <figcaption>{{ b.name }}：{{ b.count }} 口气</figcaption>
        </figure>
      </div>
      <p class="tip">角上一子两口气，边上一子三口气，中间一子四口气。</p>
    </section>

    <section class="card">
      <h2>图 2 · 连接起来气更多</h2>
      <div class="boards">
        <figure v-for="b in fig2" :key="b.name" class="board-box">
          <GoBoard :stones="b.stones" show-liberties />
          <figcaption>{{ b.name }}：{{ b.count }} 口气</figcaption>
        </figure>
      </div>
      <p class="tip">要想气多，连接起来。</p>
    </section>

    <section class="card">
      <div class="section-head">
        <div class="title-group">
          <h2>习题</h2>
          <span class="progress">已答对 {{ doneCount }} / {{ exercises.length }}</span>
        </div>
        <button class="btn refresh-btn" @click="refresh">换一批</button>
      </div>
      <p class="tip">
        请问图中黑子有几口气？点数字按钮填答案，棋盘上会用红色箭头实时指出每一口气，再点“看答案”检查。
      </p>
      <div class="exercises">
        <div
          v-for="(ex, i) in exercises"
          :key="i"
          class="exercise"
          :class="{ 'is-ok': ex.ok, 'is-bad': ex.revealed && !ex.ok }"
        >
          <div class="ex-title">
            <span class="ex-index">第 {{ i + 1 }} 题</span>
            <button class="zoom-btn" title="放大" @click="openFull(i)">
              <span class="zoom-icon">⤢</span> 放大
            </button>
          </div>
          <GoBoard
            :stones="ex.stones"
            :show-liberties="ex.input !== '' || ex.revealed"
            :arrow="ex.input !== ''"
          />
          <div class="pad">
            <button
              v-for="n in PAD_NUMBERS"
              :key="n"
              class="pad-btn"
              :class="{ active: ex.input === String(n) }"
              :disabled="ex.ok"
              @click="pick(ex, n, $event)"
            >
              {{ n }}
            </button>
          </div>
          <div class="answer-row">
            <span class="paren">（</span>
            <input
              v-model="ex.input"
              class="answer-input"
              inputmode="numeric"
              maxlength="2"
              placeholder="?"
              :disabled="ex.ok"
              @input="onInput(ex)"
              @keyup.enter="check(ex)"
            />
            <span class="paren">）口气</span>
            <button class="btn" :disabled="ex.ok" @click="check(ex)">看答案</button>
          </div>
          <transition name="pop">
            <div v-if="ex.revealed" class="result" :class="ex.ok ? 'ok' : 'bad'">
              {{ ex.ok ? '答对了' : '再数一数' }}，共 {{ libCount(ex.stones) }} 口气
            </div>
          </transition>
        </div>
      </div>
    </section>

    <teleport to="body">
      <div v-if="current" class="overlay" @click.self="closeFull">
        <div class="modal">
          <div class="modal-head">
            <span>第 {{ (fullIndex as number) + 1 }} 题</span>
            <span class="modal-progress">{{ doneCount }} / {{ exercises.length }}</span>
            <button class="close" @click="closeFull">✕</button>
          </div>
          <GoBoard
            :stones="current.stones"
            :show-liberties="current.input !== '' || current.revealed"
            :arrow="current.input !== ''"
            :cell="46"
          />
          <div class="pad pad-lg">
            <button
              v-for="n in PAD_NUMBERS"
              :key="n"
              class="pad-btn"
              :class="{ active: current.input === String(n) }"
              :disabled="current.ok"
              @click="pickFull(n, $event)"
            >
              {{ n }}
            </button>
          </div>
          <div class="answer-row">
            <span class="paren">（</span>
            <input
              v-model="current.input"
              class="answer-input"
              inputmode="numeric"
              maxlength="2"
              placeholder="?"
              :disabled="current.ok"
              @input="onInput(current)"
              @keyup.enter="checkAndNext(current)"
            />
            <span class="paren">）口气</span>
            <button class="btn" :disabled="current.ok" @click="checkAndNext(current)">看答案</button>
          </div>
          <div v-if="current.revealed" class="result" :class="current.ok ? 'ok' : 'bad'">
            {{ current.ok ? '答对了' : '再数一数' }}，共 {{ libCount(current.stones) }} 口气
          </div>
        </div>
      </div>
    </teleport>
  </div>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, reactive, ref } from 'vue'
import GoBoard from '../components/GoBoard.vue'
import {
  isMuted,
  playCorrect,
  playTap,
  playWrong,
  randomGuide,
  randomPraise,
  setMuted,
  speak,
  stopSpeak,
} from '../utils/kidFeedback'
import { burst, floatText } from '../utils/celebrate'

type Pt = { x: number; y: number }

const SIZE = 9
const PAD_NUMBERS = [1, 2, 3, 4, 5, 6, 7, 8]

// 计算一组棋子连成的各块的所有气
const libertiesOf = (stones: Pt[], size: number): Pt[] => {
  const occupied = new Set(stones.map((s) => s.x + ',' + s.y))
  const visited = new Set<string>()
  const libs = new Set<string>()
  const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]]
  for (const s of stones) {
    if (visited.has(s.x + ',' + s.y)) continue
    const stack: Pt[] = [s]
    while (stack.length) {
      const p = stack.pop() as Pt
      const key = p.x + ',' + p.y
      if (visited.has(key)) continue
      visited.add(key)
      for (const [dx, dy] of dirs) {
        const nx = p.x + dx
        const ny = p.y + dy
        if (nx < 0 || ny < 0 || nx >= size || ny >= size) continue
        const nk = nx + ',' + ny
        if (occupied.has(nk)) {
          if (!visited.has(nk)) stack.push({ x: nx, y: ny })
        } else {
          libs.add(nk)
        }
      }
    }
  }
  return [...libs].map((k) => {
    const [x, y] = k.split(',').map(Number)
    return { x, y }
  })
}

const libCount = (stones: Pt[]) => libertiesOf(stones, SIZE).length

const doneCount = computed(() => exercises.filter((e) => e.ok).length)

const fig1 = computed(() =>
  [
    { name: '中间一子', stones: [{ x: 4, y: 4 }] },
    { name: '边上一子', stones: [{ x: 4, y: 8 }] },
    { name: '角上一子', stones: [{ x: 0, y: 8 }] },
  ].map((b) => ({ ...b, count: libertiesOf(b.stones, SIZE).length }))
)

const fig2 = computed(() =>
  [
    { name: '中间两子', stones: [{ x: 4, y: 4 }, { x: 5, y: 4 }] },
    { name: '边上两子', stones: [{ x: 4, y: 8 }, { x: 5, y: 8 }] },
    { name: '角上两子', stones: [{ x: 0, y: 8 }, { x: 1, y: 8 }] },
  ].map((b) => ({ ...b, count: libertiesOf(b.stones, SIZE).length }))
)

type Exercise = { stones: Pt[]; input: string; revealed: boolean; ok: boolean }

// 音效开关
const muted = ref(isMuted())
const toggleMute = () => {
  muted.value = !muted.value
  setMuted(muted.value)
  if (!muted.value) {
    playTap()
    speak('声音打开啦')
  }
}

// 根据答题结果给出声音 + 撒花 + 夸奖/引导
const celebrate = (ex: Exercise, el?: HTMLElement | null) => {
  const rect = el?.getBoundingClientRect()
  const cx = rect ? rect.left + rect.width / 2 : window.innerWidth / 2
  const cy = rect ? rect.top + rect.height / 2 : window.innerHeight / 2
  if (ex.ok) {
    const praise = randomPraise()
    playCorrect()
    burst(cx, cy)
    burst(cx, Math.max(cy - 60, 40), 12)
    floatText(praise.replace(/[，！]/g, ' '), cx, cy - 40)
    speak(praise)
  } else {
    playWrong()
    speak(randomGuide())
  }
}

onBeforeUnmount(stopSpeak)

const exercises = reactive<Exercise[]>([
  { stones: [{ x: 3, y: 5 }], input: '', revealed: false, ok: false },
  { stones: [{ x: 8, y: 3 }], input: '', revealed: false, ok: false },
  { stones: [{ x: 8, y: 0 }], input: '', revealed: false, ok: false },
  { stones: [{ x: 3, y: 4 }, { x: 4, y: 4 }, { x: 5, y: 4 }], input: '', revealed: false, ok: false },
  { stones: [{ x: 8, y: 3 }, { x: 8, y: 4 }], input: '', revealed: false, ok: false },
  { stones: [{ x: 8, y: 0 }, { x: 7, y: 0 }, { x: 8, y: 1 }], input: '', revealed: false, ok: false },
])

const onInput = (ex: Exercise) => {
  // 只保留数字，改动答案后需要重新检查
  ex.input = ex.input.replace(/\D/g, '').slice(0, 2)
  ex.revealed = false
  ex.ok = false
}

const check = (ex: Exercise, e?: MouseEvent | KeyboardEvent) => {
  ex.revealed = true
  ex.ok = ex.input !== '' && Number(ex.input) === libCount(ex.stones)
  celebrate(ex, (e?.currentTarget as HTMLElement) || null)
}

// 随机生成 n 个相连的棋子（连通块）
const randomExercises = (): Exercise[] => {
  const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]]
  const generateGroup = (n: number): Pt[] => {
    const stones: Pt[] = [{ x: Math.floor(Math.random() * SIZE), y: Math.floor(Math.random() * SIZE) }]
    while (stones.length < n) {
      const candidates: Pt[] = []
      for (const base of stones) {
        for (const [dx, dy] of dirs) {
          const p = { x: base.x + dx, y: base.y + dy }
          if (p.x < 0 || p.y < 0 || p.x >= SIZE || p.y >= SIZE) continue
          if (stones.some((s) => s.x === p.x && s.y === p.y)) continue
          candidates.push(p)
        }
      }
      stones.push(candidates[Math.floor(Math.random() * candidates.length)])
    }
    return stones
  }
  return Array.from({ length: 6 }, () => ({
    stones: generateGroup(Math.floor(Math.random() * 3) + 1),
    input: '',
    revealed: false,
    ok: false,
  }))
}

const refresh = () => {
  exercises.splice(0, exercises.length, ...randomExercises())
}

// 放大全屏
const fullIndex = ref<number | null>(null)
const current = computed(() =>
  fullIndex.value === null ? null : exercises[fullIndex.value]
)
const openFull = (i: number) => {
  fullIndex.value = i
}
const closeFull = () => {
  fullIndex.value = null
}

// 点数字按钮：填入并立即校验
const pick = (ex: Exercise, n: number, e?: MouseEvent) => {
  if (ex.ok) return
  ex.input = String(n)
  check(ex, e)
}

// 放大后答对，先展示一下正确反馈，再自动切换到下一题；最后一题答对后关闭
const checkAndNext = (ex: Exercise, e?: MouseEvent | KeyboardEvent) => {
  check(ex, e)
  if (!ex.ok) return
  const next = (fullIndex.value as number) + 1
  setTimeout(() => {
    if (next < exercises.length) {
      fullIndex.value = next
    } else {
      // 全部答对：来一次大撒花，再自动换一批从第一题继续
      burst(window.innerWidth / 2, window.innerHeight / 2, 30)
      speak('全部答对啦，你太棒了！')
      refresh()
      fullIndex.value = 0
    }
  }, 1100)
}

// 放大视图里点数字：填入并校验，答对自动下一题
const pickFull = (n: number, e?: MouseEvent) => {
  if (!current.value || current.value.ok) return
  current.value.input = String(n)
  checkAndNext(current.value, e)
}
</script>

<style scoped lang="less">
.qi-lesson {
  --brand: #e0522f;
  --brand-dark: #bf3f1e;
  --ink: #2f2a24;
  --sub: #7a6f63;
  --line: #f0e6d8;
  --ok: #2e7d32;
  --bad: #c62828;

  min-height: 100vh;
  padding: 20px 16px 48px;
  background: radial-gradient(circle at 12% 0%, #fff6e4 0%, #fdf9f2 45%, #f7f1e6 100%);
  color: var(--ink);
  font-size: 14px;
  line-height: 1.6;
  -webkit-tap-highlight-color: transparent;
}

.head {
  max-width: 1080px;
  margin: 0 auto 18px;
  padding: 18px 20px;
  border-radius: 18px;
  background: linear-gradient(135deg, #ffffff 0%, #fff4e2 100%);
  box-shadow: 0 6px 20px rgba(196, 152, 92, 0.16);

  .head-row {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 12px;
  }

  .mute-btn {
    flex: none;
    width: 40px;
    height: 40px;
    font-size: 20px;
    line-height: 1;
    background: #fff;
    border: 1.5px solid #f3ddc0;
    border-radius: 12px;
    cursor: pointer;
    transition: transform 0.12s, background 0.2s;

    &:active {
      transform: scale(0.92);
    }

    &.off {
      opacity: 0.6;
    }
  }

  h1 {
    margin: 0 0 6px;
    font-size: 24px;
    font-weight: 800;
    letter-spacing: 0.5px;
    background: linear-gradient(120deg, var(--brand), #f0a13c);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}

.intro {
  margin: 0;
  color: var(--sub);
  font-size: 13.5px;
}

.card {
  max-width: 1080px;
  margin: 0 auto 18px;
  padding: 16px 18px 20px;
  background: #fff;
  border-radius: 18px;
  box-shadow: 0 4px 18px rgba(160, 128, 88, 0.12);

  h2 {
    margin: 0 0 12px;
    font-size: 16px;
    font-weight: 700;

    &::before {
      content: '';
      display: inline-block;
      width: 6px;
      height: 16px;
      margin-right: 8px;
      vertical-align: -2px;
      border-radius: 3px;
      background: linear-gradient(180deg, var(--brand), #f0a13c);
    }
  }
}

.boards {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
}

.board-box {
  margin: 0;
  flex: 1 1 200px;
  max-width: 260px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;

  figcaption {
    padding: 2px 10px;
    font-size: 12.5px;
    color: var(--sub);
    background: #fdf6ea;
    border-radius: 999px;
  }
}

.tip {
  margin: 12px 0 0;
  color: var(--sub);
  font-size: 13px;
}

.section-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;

  h2 {
    margin: 0;
  }
}

.title-group {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
}

.progress {
  padding: 2px 10px;
  font-size: 12px;
  color: var(--brand-dark);
  background: #ffefe8;
  border-radius: 999px;
}

.refresh-btn {
  flex: none;
  height: 34px;
  padding: 0 16px;
}

.exercises {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 14px;
  margin-top: 14px;
}

.exercise {
  padding: 12px;
  border: 1px solid var(--line);
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  background: linear-gradient(180deg, #fffdfa, #fdf8f0);
  transition: box-shadow 0.25s, border-color 0.25s, transform 0.25s;

  &.is-ok {
    border-color: #bfe3c1;
    box-shadow: 0 0 0 3px rgba(46, 125, 50, 0.08);
  }

  &.is-bad {
    border-color: #f3c0c0;
    box-shadow: 0 0 0 3px rgba(198, 40, 40, 0.07);
  }
}

.ex-title {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
}

.ex-index {
  font-size: 13px;
  font-weight: 700;
  color: var(--ink);
}

.zoom-btn {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  height: 30px;
  padding: 0 12px;
  font-size: 12.5px;
  color: var(--brand);
  background: #fff;
  border: 1px solid #f6c9bb;
  border-radius: 999px;
  cursor: pointer;
  transition: background 0.2s, transform 0.15s;

  &:hover {
    background: #fff4f0;
  }

  &:active {
    transform: scale(0.94);
  }
}

.zoom-icon {
  font-size: 14px;
  line-height: 1;
}

.pad {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
}

.pad-btn {
  width: 34px;
  height: 34px;
  font-size: 16px;
  font-weight: 700;
  color: var(--ink);
  background: #fff;
  border: 1.5px solid #ece2d4;
  border-radius: 12px;
  cursor: pointer;
  transition: transform 0.12s, background 0.2s, border-color 0.2s, color 0.2s;

  &:hover {
    border-color: var(--brand);
    color: var(--brand);
  }

  &:active {
    transform: scale(0.9);
  }

  &.active {
    color: var(--brand-dark);
    background: #ffe3d6;
    border-color: var(--brand);
    box-shadow: 0 0 0 3px rgba(224, 82, 47, 0.15);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.55;
  }
}

.pad-lg {
  gap: 10px;

  .pad-btn {
    width: 52px;
    height: 52px;
    font-size: 22px;
    border-radius: 14px;
  }
}

.answer-row {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 13px;
  color: var(--ink);
}

.paren {
  color: var(--sub);
}

.answer-input {
  width: 50px;
  height: 34px;
  padding: 0 6px;
  text-align: center;
  font-size: 17px;
  font-weight: 700;
  color: var(--ink);
  background: #fff;
  border: 1.5px solid #e6dbcb;
  border-radius: 10px;
  outline: none;
  transition: border-color 0.2s, box-shadow 0.2s;

  &:focus {
    border-color: var(--brand);
    box-shadow: 0 0 0 3px rgba(224, 82, 47, 0.12);
  }

  &:disabled {
    color: var(--sub);
    background: #f6f2ec;
    cursor: not-allowed;
  }
}

.btn {
  margin-left: 6px;
  height: 34px;
  padding: 0 14px;
  font-size: 13px;
  font-weight: 700;
  color: var(--brand-dark);
  background: #ffe3d6;
  border: 1.5px solid var(--brand);
  border-radius: 10px;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(224, 82, 47, 0.16);
  transition: transform 0.12s, box-shadow 0.2s, background 0.2s;

  &:hover {
    background: #ffd6c4;
  }

  &:active {
    transform: scale(0.96);
    box-shadow: 0 1px 4px rgba(224, 82, 47, 0.16);
  }

  &:disabled {
    color: var(--sub);
    background: #f6f2ec;
    border-color: #e6dbcb;
    box-shadow: none;
    cursor: not-allowed;
    transform: none;
  }
}

.result {
  padding: 4px 12px;
  font-size: 12.5px;
  font-weight: 600;
  border-radius: 999px;

  &.ok {
    color: var(--ok);
    background: #eaf6ea;
  }

  &.bad {
    color: var(--bad);
    background: #fdecec;
  }
}

.pop-enter-active {
  transition: opacity 0.2s, transform 0.2s;
}

.pop-enter-from {
  opacity: 0;
  transform: scale(0.85);
}

.overlay {
  position: fixed;
  inset: 0;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  background: rgba(35, 28, 20, 0.5);
  backdrop-filter: blur(3px);
}

.modal {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  width: min(100%, 480px);
  max-height: 100%;
  padding: 16px 18px 22px;
  overflow: auto;
  background: #fffdf9;
  border-radius: 20px;
  box-shadow: 0 18px 50px rgba(0, 0, 0, 0.28);
}

.modal-head {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 15px;
  font-weight: 700;

  .close {
    margin-left: auto;
  }
}

.modal-progress {
  padding: 2px 10px;
  font-size: 12px;
  font-weight: 500;
  color: var(--brand-dark);
  background: #ffefe8;
  border-radius: 999px;
}

.close {
  width: 34px;
  height: 34px;
  font-size: 14px;
  color: #7a6f63;
  background: #f4efe8;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  transition: background 0.2s, transform 0.12s;

  &:hover {
    background: #eae2d6;
  }

  &:active {
    transform: scale(0.9);
  }
}

/* ---------- 移动端适配 ---------- */
@media (max-width: 640px) {
  .qi-lesson {
    padding: 12px 10px 36px;
  }

  .head {
    margin-bottom: 12px;
    padding: 14px 16px;
    border-radius: 16px;

    h1 {
      font-size: 20px;
    }
  }

  .intro {
    font-size: 12.5px;
  }

  .card {
    margin-bottom: 12px;
    padding: 14px 12px 16px;
    border-radius: 16px;
  }

  .boards {
    gap: 10px;
  }

  .board-box {
    flex: 1 1 45%;
    max-width: 48%;
  }

  .exercises {
    grid-template-columns: 1fr;
    gap: 12px;
  }

  .refresh-btn {
    height: 36px;
    padding: 0 14px;
  }

  /* 数字键盘与按钮放大到适合儿童手指点击的尺寸 */
  .pad {
    gap: 10px;
  }

  .pad-btn {
    width: 44px;
    height: 44px;
    font-size: 19px;
    border-radius: 14px;
  }

  .answer-input {
    width: 56px;
    height: 42px;
    font-size: 20px;
    border-radius: 12px;
  }

  .btn {
    height: 42px;
    padding: 0 16px;
    font-size: 14px;
    border-radius: 12px;
  }

  .zoom-btn {
    height: 34px;
  }

  /* 全屏答题：铺满可视区域，避免滚动 */
  .overlay {
    align-items: stretch;
    padding: 0;
  }

  .modal {
    width: 100%;
    height: 100%;
    max-height: none;
    gap: 12px;
    padding: 12px 12px calc(12px + env(safe-area-inset-bottom));
    border-radius: 0;
    justify-content: center;
  }

  .pad-lg {
    gap: 10px;

    .pad-btn {
      width: 56px;
      height: 56px;
      font-size: 24px;
    }
  }
}

@media (max-width: 380px) {
  .pad-btn {
    width: 40px;
    height: 40px;
    font-size: 17px;
  }

  .pad-lg .pad-btn {
    width: 48px;
    height: 48px;
    font-size: 20px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .exercise,
  .pad-btn,
  .btn,
  .zoom-btn,
  .close {
    transition: none;
  }
}
</style>
