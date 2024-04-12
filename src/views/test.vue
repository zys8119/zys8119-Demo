<template>
  <div class="test  h-100px" ref="el">
    <video ref="video" @click="playing = !playing"></video>
    <div><span>{{ currentTime }} / {{ duration }}</span></div>
    <div><button @click="toggle">全屏</button></div>
    <input type="range" :max="duration" :min="0" v-model="currentTime">
  </div>
</template>

<script setup lang="ts">
const video = ref()
const {
    volume,
    currentTime,
    duration,
    playing
} = useMediaControls(video, {
  src: {
    src: 'http://localhost:3000/%E7%BB%99%E6%88%91%E6%9D%A5%E4%B8%AA%E5%B0%8F%E7%8B%90%E7%8B%B8_%E5%9B%BD%E5%88%9B_%E5%93%94%E5%93%A9%E5%93%94%E5%93%A9.mp4',
    type:"video/mp4"
  },
})
const el = ref()
const {toggle} = useFullscreen(el)
onMounted(() => {
  currentTime.value = 60
  playing.value = true
})
</script>

<style scoped lang="less">
.test {

}
</style>
