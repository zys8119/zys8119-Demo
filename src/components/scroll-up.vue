<template>
  <div class="scroll-up-wrap" ref="wrap">
    <div class="scroll-up-inner" :style="animStyle">
      <div ref="rows" v-for="(item, index) in doubled" :key="index">
        <slot :item="item" :index="index % list.length" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

const props = withDefaults(defineProps<{
  list: any[];
  speed?: number; // px per second
}>(), {
  speed: 40,
});

const wrap = ref<HTMLElement>();
const rows = ref<HTMLElement[]>([]);
const doubled = computed(() => shouldScroll.value ? [...props.list, ...props.list] : props.list);

const itemHeight = computed(() => rows.value[0]?.offsetHeight ?? 0);
const totalH = computed(() => props.list.length * itemHeight.value);
const wrapParent = computed(() => wrap.value?.parentElement);
const { height: wrapParentHeight } = useElementSize(wrapParent);
const shouldScroll = computed(() => totalH.value > wrapParentHeight.value);

const animStyle = computed(() => {
  if (!shouldScroll.value) return {};
  const duration = (props.list.length * itemHeight.value) / props.speed;
  return {
    animation: `scroll-up-anim ${duration}s linear infinite`,
    '--scroll-h': `${props.list.length * itemHeight.value}px`,
  };
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
