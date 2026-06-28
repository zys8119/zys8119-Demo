<template>
  <div class="scroll-up-wrap" ref="wrap">
    <div class="scroll-up-inner" :style="animStyle">
      <div v-for="(item, index) in doubled" :key="index">
        <slot :item="item" :index="index % list.length" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';

const props = withDefaults(defineProps<{
  list: any[];
  speed?: number; // px per second
}>(), {
  speed: 40,
});

const wrap = ref<HTMLElement>();
const itemHeight = ref(0);
const doubled = computed(() => [...props.list, ...props.list]);

const animStyle = computed(() => {
  const duration = (props.list.length * itemHeight.value) / props.speed;
  return {
    animation: `scroll-up-anim ${duration}s linear infinite`,
    '--scroll-h': `${props.list.length * itemHeight.value}px`,
  };
});

onMounted(() => {
  const firstChild = wrap.value?.querySelector('.scroll-up-inner > div');
  if (firstChild) itemHeight.value = (firstChild as HTMLElement).offsetHeight;
});
</script>

<style lang="less">
.scroll-up-wrap {
  overflow: hidden;
  height: 100%;

  .scroll-up-inner {
    @keyframes scroll-up-anim {
      from {
        transform: translateY(0);
      }

      to {
        transform: translateY(calc(-1 * var(--scroll-h)));
      }
    }

  }
}
</style>
