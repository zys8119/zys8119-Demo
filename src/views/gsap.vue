<template>
  <div class="container">
    <div ref="box" class="box2 w-100px h-100px bg-#f00"></div>
    <div class="w-full h-$full"></div>
  </div>
</template>

<script setup lang="ts">
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const box = ref()
const {height:boxHeight} = useElementBounding(box)
const {height} = useWindowSize()
useCssVars(()=>({full:`${height.value-boxHeight.value}px`}))
onMounted(()=>{

  gsap.to('.box2', {
      scrollTrigger: {
        trigger: '.container',
        start:self=>{
          return `${window.innerHeight*0.5} 50%`
        },
        end:self=>{
          return `${window.innerHeight*0.5} 40%`
        },
        pin:true,
        scrub: true, // important!
        markers: true, // This is optional, it shows the start and end markers on the screen,
      },
        x: "50vw", // Move the box to the middle of the viewport
        rotation:360
      })

})
</script>

<style scoped lang="less">
.gasp {

}
</style>
