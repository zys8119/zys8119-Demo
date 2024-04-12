<template>
  <div class="test w-100%  h-500px flex abs-r text-#fff select-none" ref="el">
    <video class="abs-content" ref="video" @click="playing = !playing" muted autoplay></video>
    <div  class="abs-start-bottom w-100% flex-center gap-10px videoControls p-y-15px" @click.stop.prevent="void 0">
      <div class="w-20px h-20px flex-center m-l-15px text-30px" @click="playing = !playing">
        <svg-icon name="stopPlay" v-if="playing"></svg-icon>
        <svg-icon name="play" v-else></svg-icon>
      </div>
      <div class="flex-center min-w-80px">{{ _currentTime }}</div>
      <n-slider v-model:value="currentTime" :max="duration"  class="flex-1 n-slider" :tooltip="false"/>
      <div class="flex-center min-w-80px">{{ _duration }}</div>
      <div class="w-20px h-20px flex-center m-l-15px text-30px" @click.stop="volumeClick">
        <svg-icon name="stopVoice" v-if="volume === 0"></svg-icon>
        <svg-icon name="voice" v-else></svg-icon>
      </div>
      <n-slider v-model:value="volume" :min="0" :step="0.01" :max="1"  class="w-100px n-slider" :tooltip="false"/>
      <div class="w-20px h-20px flex-center m-l-15px text-30px" v-if="supportsPictureInPicture" @click="togglePictureInPicture">
        <svg-icon name="hzh"></svg-icon>
      </div>
      <div class="w-20px h-20px flex-center m-l-15px text-30px m-r-15px" @click="toggle">
        <svg-icon name="exitFull" v-if="isFullscreen"></svg-icon>
        <svg-icon name="full" v-else></svg-icon>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import * as dayjs from "dayjs"
import SvgIcon from "@/src/components/svg-icon";
const video = ref()
const volumeCache = ref(1)
const {
    currentTime,
    duration,
    playing,
    volume,
    supportsPictureInPicture,
  togglePictureInPicture
} = useMediaControls(video, {
  src: {
    src: 'http://192.168.110.186:3000/%E7%BB%99%E6%88%91%E6%9D%A5%E4%B8%AA%E5%B0%8F%E7%8B%90%E7%8B%B8_%E5%9B%BD%E5%88%9B_%E5%93%94%E5%93%A9%E5%93%94%E5%93%A9.mp4',
  },
})
const el = ref()
const {toggle, isFullscreen} = useFullscreen(el)
const _currentTime = computed(()=> dayjs('2023-01-01 00:00:00').set('milliseconds',currentTime.value*1000).format("HH:mm:ss"))
const _duration = computed(()=> dayjs('2023-01-01 00:00:00').set('milliseconds',duration.value*1000).format("HH:mm:ss"))
const volumeClick = ()=> {
  if (volume.value === 0) {
    volume.value = volumeCache.value
  }else {
    volumeCache.value = volume.value
    volume.value = 0
  }
}
onMounted(() => {
  // playing.value = true
})
</script>

<style scoped lang="less">
.test {
  background-color: #000000;
  .videoControls{
    transition: all ease-in-out 0.3s;
    opacity: 0;
    background: linear-gradient(0deg, #000000 0%, rgba(0, 0, 0, 0) 88%);
  }
  &:hover{
    .videoControls{
      display: flex;
      opacity: 1;
    }
  }
  :deep(.n-slider){
    --n-fill-color:#ffffff !important;
    --n-rail-color:#616161 !important;
    --n-rail-height:5px !important;
    .n-slider-handles{
      .n-slider-handle{
        display: none;
      }
    }
  }
}
</style>
