<template>
  <div class="card">
    [{{ value}}]
    <n-button @click="aa">测试按钮asdas</n-button>
  </div>
</template>

<script setup lang="ts">
const value = ref(Date.now())
const aa =  async ()=>{
  console.log(111)
  value.value = Date.now()
}
</script>

<style scoped lang="less">
.card {

}
</style>
