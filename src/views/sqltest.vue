<template>
  <div class="sqltest">
      <div v-for="i in $sql(`select * from user where id4=${a}`)">{{i}}</div>
    <div @click="$sql()"></div>
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
