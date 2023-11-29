<template>
  <div class="aaa">
    <canvas ref="canvasRef"></canvas>
  </div>
</template>

<script setup lang="ts">
import useCanvasImage from "use-canvas-image"
import img from "./21155.png?url"
const canvasRef = ref()

onMounted(async ()=>{
  const canvas = canvasRef.value as HTMLCanvasElement
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
  const ctx = canvas.getContext('2d')
  const pxs = []
  const pxsMap = new Map()
  await useCanvasImage(img, e=>{
    pxs.push(e)
    pxsMap.set([e.x, e.y].join(), e)
  })
  const isBJ = ({x, y, canvasWidth, a}:any)=>{
    return [
      [x, y-1],
      [x, y+1],
      [x-1, y],
      [x+1, y],
    ].some(e=>pxsMap.get(e.join())?.a === 0) || (a !== 0 && (y-1 < 0 || x-1 < 0))
  }
  const pxsResultsMap = new Map()
  const pxsResultsLines = []
  const getNextPxs = ({x, y}:any)=>{
    const key = [
      [x+1, y],
      [x, y+1],
      [x, y-1],
      [x-1, y],
    ].filter(e=>!pxsResultsLines.find(ee=>ee.x === e[0] && ee.y === e[1]))
    .find(e=>pxsResultsMap.get(e.join())) || []
    return pxsResultsMap.get(key.join())
  }
  const pxsResults =  pxs.filter(e=>{
    if(e.a !== 0 && isBJ(e)){
      pxsResultsMap.set([e.x, e.y].join(), e)
      return true
    }
  })
  console.log(pxsResults.length)
  let curr = null
  const dots = []
  pxsResults.forEach((e,k)=>{
    ctx.beginPath()
    ctx.fillStyle = `rgba(${e.r}, ${e.g}, ${e.b}, ${e.a})`
    ctx.rect(e.x, e.y,1,1)
    ctx.fill()
    if(k === 0){
      curr = e;
    }
    curr = getNextPxs(curr || {})
    if(dots.length >= 3){
      dots.splice(0,1)
    }
    dots.push(e)
    if(dots.length === 3 && !arePointsCollinear(dots.map(e => [e.x, e.y]))){
      pxsResultsLines.push(e)
    }
    if(dots.length < 3){
      pxsResultsLines.push(e)
    }
  })

  ctx.lineWidth = 1
  ctx.beginPath()
  pxsResultsLines.forEach((e, k)=>{
    if(k === 0){
      ctx.moveTo(e.x, e.y)
    }else {
      ctx.lineTo(e.x, e.y)
    }
  })
  ctx.stroke()
  console.log(pxsResultsLines.length)
  function arePointsCollinear(points) {
    if (points.length < 3) {
      // 至少需要三个点才能形成一条直线
      return false;
    }
    // 计算前两个点的向量
    const vectorX = points[1][0] - points[0][0];
    const vectorY = points[1][1] - points[0][1];

    // 遍历后续的点，检查它们是否在同一直线上
    for (let i = 2; i < points.length; i++) {
      const currentVectorX = points[i][0] - points[0][0];
      const currentVectorY = points[i][1] - points[0][1];
      // 如果两个向量不成比例，说明点不共线
      if (vectorX * currentVectorY !== vectorY * currentVectorX) {
        return false;
      }
    }
    return true;
  }
})

</script>

<style scoped lang="less">
.aaa {

}
</style>
