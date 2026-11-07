<template>
  <div class="go-board-wrap" :style="{ maxWidth: width + 'px' }">
    <svg class="go-board" :viewBox="`0 0 ${width} ${width}`" role="img" aria-label="围棋棋盘">
      <defs>
        <radialGradient :id="gid" cx="35%" cy="30%" r="75%">
          <stop offset="0%" stop-color="#5a5a5a" />
          <stop offset="55%" stop-color="#2a2a2a" />
          <stop offset="100%" stop-color="#0d0d0d" />
        </radialGradient>
        <linearGradient :id="bid" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#f3dcaa" />
          <stop offset="100%" stop-color="#dfba7c" />
        </linearGradient>
      </defs>

      <rect
        :x="0.5"
        :y="0.5"
        :width="width - 1"
        :height="width - 1"
        rx="10"
        :fill="`url(#${bid})`"
      />

      <line
        v-for="(l, i) in gridLines"
        :key="'g' + i"
        :x1="l.x1"
        :y1="l.y1"
        :x2="l.x2"
        :y2="l.y2"
        stroke="#9a7642"
        stroke-width="1"
      />

      <circle
        v-for="(s, i) in stars"
        :key="'s' + i"
        :cx="toPx(s[0])"
        :cy="toPx(s[1])"
        r="2.4"
        fill="#8b6b3a"
      />

      <g v-for="(p, i) in stones" :key="'p' + i" class="stone">
        <circle
          :cx="toPx(p.x) + cellSize * 0.05"
          :cy="toPx(p.y) + cellSize * 0.08"
          :r="cellSize * 0.46"
          fill="rgba(0,0,0,0.22)"
        />
        <circle :cx="toPx(p.x)" :cy="toPx(p.y)" :r="cellSize * 0.46" :fill="`url(#${gid})`" />
      </g>

      <g v-if="arrow" class="arrows">
        <template v-for="(a, i) in arrowList" :key="'a' + i">
          <line
            :x1="a.x1"
            :y1="a.y1"
            :x2="a.x2"
            :y2="a.y2"
            stroke="#fff"
            :stroke-width="Math.max(4, cellSize * 0.2)"
            stroke-linecap="round"
            opacity="0.85"
          />
          <line
            :x1="a.x1"
            :y1="a.y1"
            :x2="a.x2"
            :y2="a.y2"
            stroke="#e53935"
            :stroke-width="Math.max(2, cellSize * 0.11)"
            stroke-linecap="round"
          />
          <polyline
            :points="a.head"
            fill="none"
            stroke="#e53935"
            :stroke-width="Math.max(2, cellSize * 0.11)"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </template>
      </g>

      <g v-else class="libs">
        <template v-for="(p, i) in libs" :key="'l' + i">
          <circle :cx="toPx(p.x)" :cy="toPx(p.y)" :r="cellSize * 0.22" fill="#fff" opacity="0.9" />
          <line
            :x1="toPx(p.x) - cellSize * 0.13"
            :y1="toPx(p.y)"
            :x2="toPx(p.x) + cellSize * 0.13"
            :y2="toPx(p.y)"
            stroke="#e53935"
            :stroke-width="Math.max(2, cellSize * 0.09)"
            stroke-linecap="round"
          />
        </template>
      </g>
    </svg>
  </div>
</template>

<script setup lang="ts">
import { computed, useId } from 'vue'

export type Pt = { x: number; y: number }

const PAD = 16

const props = withDefaults(
  defineProps<{
    size?: number
    stones?: Pt[]
    showLiberties?: boolean
    arrow?: boolean
    cell?: number
  }>(),
  { size: 9, stones: () => [], showLiberties: false, arrow: false, cell: 26 }
)

const uid = useId()
const gid = 'stone-' + uid
const bid = 'board-' + uid

const cellSize = computed(() => props.cell)

// 计算所有棋子连成的各块的气
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

const width = computed(() => PAD * 2 + (props.size - 1) * cellSize.value)
const toPx = (n: number) => PAD + n * cellSize.value

const gridLines = computed(() => {
  const lines: { x1: number; y1: number; x2: number; y2: number }[] = []
  for (let i = 0; i < props.size; i++) {
    lines.push({ x1: toPx(0), y1: toPx(i), x2: toPx(props.size - 1), y2: toPx(i) })
    lines.push({ x1: toPx(i), y1: toPx(0), x2: toPx(i), y2: toPx(props.size - 1) })
  }
  return lines
})

const stars = computed(() =>
  props.size === 9 ? [[2, 2], [6, 2], [2, 6], [6, 6], [4, 4]] : []
)

const libs = computed(() =>
  props.showLiberties ? libertiesOf(props.stones, props.size) : []
)

// 每个气点画一个从相邻棋子指向该气点的箭头
const arrowList = computed(() => {
  if (!props.showLiberties || !props.arrow) return []
  const r = cellSize.value * 0.46
  return libs.value.map((p) => {
    const from = props.stones.find((s) => Math.abs(s.x - p.x) + Math.abs(s.y - p.y) === 1) || p
    const sx = toPx(from.x)
    const sy = toPx(from.y)
    const ex = toPx(p.x)
    const ey = toPx(p.y)
    let dx = ex - sx
    let dy = ey - sy
    const len = Math.hypot(dx, dy) || 1
    dx /= len
    dy /= len
    const x1 = sx + dx * (r + 2)
    const y1 = sy + dy * (r + 2)
    const x2 = ex - dx * (r * 0.35)
    const y2 = ey - dy * (r * 0.35)
    const headLen = cellSize.value * 0.34
    const ang = Math.atan2(dy, dx)
    const a1 = ang + Math.PI * 0.78
    const a2 = ang - Math.PI * 0.78
    const head =
      `${x2 + Math.cos(a1) * headLen},${y2 + Math.sin(a1) * headLen} ` +
      `${x2},${y2} ` +
      `${x2 + Math.cos(a2) * headLen},${y2 + Math.sin(a2) * headLen}`
    return { x1, y1, x2, y2, head }
  })
})
</script>

<style scoped>
.go-board-wrap {
  width: 100%;
  display: flex;
  justify-content: center;
}

.go-board {
  display: block;
  width: 100%;
  height: auto;
  filter: drop-shadow(0 2px 6px rgba(139, 107, 58, 0.28));
  border-radius: 10px;
}
</style>
