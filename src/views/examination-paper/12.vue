<template>
  <div class="a w-300px m-x-auto m-t-15 b b-solid b-#d8d8d8 b-rd-15px p-15px">
    <button @click="tags" class="w-100%">{{ str }}</button>
    <div ref="aa" class="aa">
      <div v-for="i in 8" :key="i">
        <div>{{i}}</div>
      </div>
    </div>
    <div>其他内容</div>
  </div>
</template>

<script setup lang="ts">
import {throttle, debounce} from "lodash"
const aa = ref(null) as Ref<HTMLDivElement>
const isNone = ref()
useResizeObserver(aa, debounce(entries => {
  isNone.value = aa.value.style.display === `none`
}, 100))
const str = computed(()=> isNone.value ? '展开' : '折叠')
const tags = throttle(async ()=>{
  const time = parseFloat(getComputedStyle(aa.value)['transition-duration'])*1000
  if(isNone.value){
    aa.value.style.display = 'block'
    aa.value.style.height = `auto`;
  }
  const {height} = aa.value.getBoundingClientRect()
  aa.value.style.height = `${isNone.value ? 0 : height}px`;
  aa.value.clientTop;
  aa.value.style.height = `${isNone.value ? height : 0}px`;
  setTimeout(()=>{
    aa.value.style.display = isNone.value ? 'block':`none`;
  }, time)
}, 300)
</script>

<style scoped lang="less">
.a {
  .aa{
    overflow: hidden;
    transition: all cubic-bezier(1, 0.08, 0, 0.95) 0.5s;
  }
}
</style>
