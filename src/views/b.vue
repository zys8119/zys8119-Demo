<template>
  <div class="b">

  </div>
</template>

<script setup lang="ts">
console.log(await fetch('https://www.baidu.com/').then(res=>res.text()))
</script>

<style scoped lang="less">
.b {

}
</style>
