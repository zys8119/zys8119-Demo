<template>
  <div class="alert-content flex flex-col">
    <div class="alert-content-box p-$gap b-1px b-y-solid b-#edecf3">
      <slot></slot>
    </div>
    <div ref="footerRef" :class="$slots.footer ? 'p-$gap' : ''">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
const footerRef = ref();
const { height } = useElementSize(footerRef);
</script>

<style scoped>
.alert-content {
  max-height: var(--alert-dialog-custom-theme-content-height);

  .alert-content-box {
    height: calc(
      var(--alert-dialog-custom-theme-content-height) - v-bind(height)
    );
    overflow-x: hidden;
  }
}
</style>
