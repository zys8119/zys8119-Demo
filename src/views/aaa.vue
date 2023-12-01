<template>
  <div class="aaa">
    <canvas ref="canvasRef"></canvas>
  </div>
</template>

<script setup lang="ts">
import img from "./15558.png?url"
import imageGbc from "image-gbc"
import winframe from "winframe"
const canvasRef = ref()
onMounted(async ()=>{
  const results = await imageGbc(img)
  console.log(results)
  const canvas = canvasRef.value as HTMLCanvasElement
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
  const ctx = canvas.getContext('2d')
  winframe(p=>{
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.beginPath()
    ctx.strokeStyle = '#f00'
    results.slice(0, Math.floor((results.length)*p)).forEach((e,k)=>{
      if(k === 0){
        ctx.moveTo(e.x+100, e.y)
      }else {
        ctx.lineTo(e.x+100, e.y)
      }
    })
    ctx.stroke()
  }, 5000)
})
</script>

<style scoped lang="less">
.aaa {

}
</style>
