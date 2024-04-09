<template>
  <div class="card">
    {{test.a}}
    <input v-model="test.a">
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  test:any
}>()
</script>

<style scoped lang="less">
.card {
  border-bottom: 1px solid #f00;
}
</style>
