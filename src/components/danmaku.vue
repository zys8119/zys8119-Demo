<template>
  <div ref="container" class="danmaku-container" :style="{ height: height, width: width }">
    <span
      v-for="item in visibleMessages"
      :key="item._uid"
      class="danmaku-item"
      :style="{
        top: `${item.row * lineHeight}px`,
        left: `${item.x}px`,
        fontSize: `${item.size}px`,
        color: item.color,
        whiteSpace: 'nowrap',
      }"
    >
      {{ item.content }}
    </span>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch, nextTick } from 'vue';

interface DanmakuMessage {
  id: number | string;
  content: string;
  color?: string;
  size?: number;
  row?: number;
}

interface Props {
  list: DanmakuMessage[];
  speed?: number;
  row?: number;
  fontSize?: number;
  color?: string;
  height?: string;
  width?: string;
  interval?: number;
  lineHeight?: number;
}

const props = withDefaults(defineProps<Props>(), {
  list: () => [],
  speed: 2,
  row: 5,
  fontSize: 14,
  color: '#ffffff',
  height: '100%',
  width: '100%',
  interval: 600,
  lineHeight: 28,
});

const container = ref<HTMLDivElement>();
const visibleMessages = ref<Record<string, { _uid: string; x: number; row: number; content: string; size: number; color: string }>>({});
let rafId = 0;
let timerId: ReturnType<typeof setInterval> | null = null;
let nextUid = 0;

// Circular flattened + duplicated list for seamless loop
const pool: DanmakuMessage[] = [];
let poolIndex = 0;

function buildPool() {
  pool.length = 0;
  pool.push(...props.list, ...props.list);
  poolIndex = 0;
}

function enqueue() {
  if (!pool.length) return;
  const msg = pool[poolIndex % pool.length];
  poolIndex++;

  const uid = `d_${nextUid++}_${Date.now()}`;
  const el = document.createElement('span');
  el.textContent = msg.content;
  el.style.position = 'absolute';
  el.style.visibility = 'hidden';
  el.style.fontSize = `${msg.size || props.fontSize}px`;
  (container.value as HTMLDivElement).appendChild(el);

  const width = el.offsetWidth + 16;
  (container.value as HTMLDivElement).removeChild(el);

  const item = {
    _uid: uid,
    x: container.value!.clientWidth,
    row: msg.row ?? Math.floor(Math.random() * props.row),
    content: msg.content,
    size: msg.size || props.fontSize,
    color: msg.color || props.color,
  };

  visibleMessages.value[uid] = item;
}

function tick() {
  const cw = container.value?.clientWidth ?? 0;
  const entries = Object.values(visibleMessages.value);

  for (const item of entries) {
    item.x -= props.speed;
  }

  // Remove messages that have scrolled off screen
  const toRemove: string[] = [];
  for (const uid in visibleMessages.value) {
    if (visibleMessages.value[uid].x < -(visibleMessages.value[uid].content.length * (visibleMessages.value[uid].size || 14))) {
      toRemove.push(uid);
    }
  }
  for (const uid of toRemove) {
    delete visibleMessages.value[uid];
  }

  rafId = requestAnimationFrame(tick);
}

function startAnimation() {
  if (timerId) clearInterval(timerId);
  timerId = setInterval(enqueue, props.interval);
}

onMounted(async () => {
  await nextTick();
  buildPool();
  // Pre-populate lanes
  for (let i = 0; i < props.row * 2; i++) {
    setTimeout(enqueue, i * 100);
  }
  startAnimation();
  rafId = requestAnimationFrame(tick);
});

onUnmounted(() => {
  cancelAnimationFrame(rafId);
  if (timerId) clearInterval(timerId);
});

watch(() => props.list, buildPool, { deep: true });
</script>

<style scoped lang="less">
.danmaku-container {
  position: relative;
  overflow: hidden;
  pointer-events: none;
  user-select: none;
}

.danmaku-item {
  position: absolute;
  text-shadow: 0 0 4px rgba(0, 0, 0, 0.5);
  will-change: left;
}
</style>
