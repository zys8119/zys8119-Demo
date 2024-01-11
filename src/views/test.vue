<template>
  <div class="test">
      sdaasd
    <button @click="send">send</button>
  </div>
</template>

<script setup lang="ts">
const {post, data} = useBroadcastChannel({name:'a'})
watchEffect(()=>{
  console.log(data.value)
})
const send = async ()=>{
  post('asdas'+Date.now())
}
</script>

<style scoped lang="less">
.test {

}
</style>
