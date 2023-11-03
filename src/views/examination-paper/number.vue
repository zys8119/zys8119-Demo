<template>
  <div class="number w-500px m-x-auto m-t-15 b b-solid b-#d8d8d8 b-rd-15px p-15px" ref="a">
    <div class="flex gap-5px">
      <div class="flex flex-col w-50px h-50px of-hidden" v-for="i in lng"  :key="i">
        <div class="aaa bg-#f00" :style="{
            transform: numberStr[i-1] === '.' ? null : `translateY(-${Number(numberStr[i-1])*50}px)`
          }">
          <span class="w-50px h-50px flex justify-center items-center text-30px text-#fff" v-for="index in 10" :key="index">{{numberStr[i-1]}}</span>
        </div>
      </div>
    </div>
    {{time3}}
  </div>
</template>
<script setup lang="ts">
import winframe from "winframe"
import {debounce, random} from "lodash"
const a = ref() as Ref<HTMLDivElement>
const nb = ref(0)
const lng = computed(()=> nb.value.toString().length)
const time = ref(0.2)
const value = ref('0')
const numberStr = computed(()=> value.value.toString().split(''))
const start = debounce(()=>{
  value.value = '0';
  winframe((p)=>{
    value.value = (p*nb.value).toFixed(3).padStart(lng.value, '0')
  }, 1000)
})
watchEffect(()=>{
  nb.value;
  start()
})
setInterval(()=>{
  nb.value = Number(random(0, 10, true).toFixed(3))
}, 1500)
const time2 = Date.now()
const time3 = ref('0')
;(function aa(){
  time3.value = ((Date.now() - time2)/ 1000).toFixed(2)
  requestAnimationFrame(aa)
})()
</script>

<style scoped lang="less">
.number {
  .aaa{
    transition: all ease-in-out calc(1s * v-bind(time));
  }
}
</style>
