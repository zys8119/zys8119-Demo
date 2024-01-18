<template>
  <div :style="style" class="footer-fixed">
    <div ref="contentRef" :style="contentStyle" class="footer-fixed-content">
      <div :class="`p-x-$gap p-y-10px ${className}`">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  position?: string;
  isTop?: boolean;
  zIndex?: number;
  color?: string;
  className?: string;
}>();
const contentRef = ref();
const { height } = useElementSize(contentRef);
const style = computed(
  () =>
    ({
      height: `${height.value}px`,
    }) as Record<string, any>,
);
const contentStyle = computed<any>(() => ({
  position: props.position,
  bottom: props.isTop ? "initial" : null,
  top: props.isTop ? 0 : null,
  zIndex: props.zIndex,
  backgroundColor: props.color || "#ffffff",
}));
</script>

<style lang="less" scoped>
.footer-fixed {
  .footer-fixed-content {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: #ffffff;
  }
}
</style>
