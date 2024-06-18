<template>
  <div class="sqltest">
      <input v-model="value">
      <input v-model="value2">
      <div v-for="i in list">{{i}}</div>
  </div>
</template>

<script setup lang="ts">
const a = ref(1)
const aa = $sql`asd``asdasda`(1,2)()
</script>
<style scoped lang="less">
.sqltest {

}
</style>
