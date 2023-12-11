<template>
  <div class="gsap container" >
    <div ref="els" v-for="i in arr" :style="{backgroundColor:`hsl(34.29deg 77.78% ${i*10}%)`}" class="item" @click="click">{{i}}</div>
  </div>
</template>

<script setup lang="ts" title="gsap 动画" content="js 动画">
import gsap from "gsap"
import {debounce} from "lodash"
const arr = ref([1,2,3,4,5,6])
const els = $ref([]) as HTMLDivElement[]

const click = debounce(async ()=>{
  const step = 30
  await Promise.all(els.map((el,k)=>{
    const {left, top} = el.getBoundingClientRect()
    if(k === arr.value.length-1){
      return gsap.to(el,{
        left:left+step,
        top:top+step,
        opacity:0,
        scale:1.5
      })
    }else {
      return gsap.to(el,{
        left:left+step,
        top:top+step,
        zIndex:k+2
      })
    }
  }))
  const {left, top} = els[0].getBoundingClientRect()
  await gsap.to(els.at(-1),{
    left:left-step,
    top:top-step,
    opacity:1,
    zIndex:1,
    duration:0,
    scale:1
  })
  arr.value = [arr.value.pop(), ...arr.value]
  await Promise.all(els.map((el,k)=>{
    return gsap.to(el,{
      duration:0,
      left:step*(k+1),
      top:step*(k+1),
      zIndex:k
    })
  }))
}, 250)
</script>

<style scoped lang="scss">
@use "sass:math";
.gsap {
 .item{
   width: 150px;
   height: 150px;
   background: #f00;
   position: absolute;
   left: 0;
   top: 0;
   font-size: 50px;
   justify-content: center;
   align-items: center;
   display: flex;
   user-select: none;
   @for $i from 1 through 6 {
     &:nth-child(#{$i}){
       left: $i*30px;
       top: $i*30px;
       z-index: $i;
     }
   }
 }
}
</style>
