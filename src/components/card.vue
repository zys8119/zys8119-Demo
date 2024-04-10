<template>
  <n-space class="fillBlank text-#f00">
    {{value}}
    <n-input v-model:value="value"></n-input>
  </n-space>
</template>

<script setup lang="ts">
const value = ref('')
</script>

<style scoped>
.fillBlank {
  border-bottom: 1px solid #f00;
  display: inline-block !important;
}
</style>
