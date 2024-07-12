<template>
  <div class="large-screen-map-animation abs-content bg-#000" ref="elRef">
    <canvas  ref="canvas" class="abs-r b-1px b-solid b-#f00 bg-#0000"></canvas>
  </div>
</template>

<script lang="ts" setup>
console.log(import.meta.env)
const canvas = $ref() as HTMLCanvasElement
const el = useCurrentElement() as Ref<HTMLElement>
onMounted(async ()=>{
  const size = 300
  const color = "#ff0"
  canvas.width = size
  canvas.height = size
  const [x,y] = [canvas.width /2, canvas.height/2]
  const ctx = canvas.getContext('2d') as CanvasRenderingContext2D
  ctx.clearRect(0, 0, size, size)
  ctx.fillStyle = color
  ctx.beginPath()
  ctx.arc(x,y,  x*.05,0,Math.PI*2)
  ctx.closePath()
  ctx.fill()
  ctx.fillStyle = "#0000"
  ctx.strokeStyle = color
  ctx.lineWidth = 3
  ctx.beginPath()
  ctx.arc(x,y,  x*.2,0,Math.PI*2)
  ctx.closePath()
  ctx.stroke()
  ctx.fill()
  new Array(9).fill(0).forEach((_,i,array)=>{
    ctx.fillStyle = `#0000`
    ctx.strokeStyle = `rgba(255,255,255,${i})`
    ctx.lineWidth = 3
    ctx.globalAlpha = array.length - i / array.length
    console.log(ctx.globalAlpha,array.length-1,i/(array.length-1))
    ctx.beginPath()
    ctx.arc(x,y,  x*.5+x*.5/array.length*i,0,Math.PI*2)
    ctx.closePath()
    ctx.stroke()
    ctx.fill()
  })

})
</script>

<style scoped lang="less">
.large-screen-map-animation {

}
</style>
