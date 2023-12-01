<template>
  <div class="aaa">
    <canvas ref="canvasRef"></canvas>
  </div>
</template>

<script setup lang="ts">
import useCanvasImage from "use-canvas-image"
import img from "./15558.png?url"
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
  },{
  })
  const getZwPx = (x:number, y:number)=> [
    [x-1,y-1],
    [x,y-1],
    [x+1,y-1],
    [x-1,y],
    [x+1,y],
    [x-1,y+1],
    [x,y+1],
    [x+1,y+1],
  ]
  const isBJ = ({x, y, canvasWidth, canvasHeight, a}:any)=>{
    return getZwPx(x,y).some(e=>pxsMap.get(e.join())?.a === 0) || (a !== 0 && (y === 0 || x === 0 || x === canvasWidth-1 || y === canvasHeight-1))
  }
  const pxsResultsMap = new Map()
  const pxsResults =  pxs.filter(e=>{
    if(e.a !== 0 && isBJ(e)){
      pxsResultsMap.set([e.x, e.y].join(), e)
      return true
    }
  })
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
  const pxsLine = []
  const pxsLineMap = new Map()
  let curr = null
  const calcNextCurr = (e)=>{
    const {x, y} = e
    const ps = getZwPx(x,y).map(e=>pxsResultsMap.get(e.join())).filter(e=>e && !pxsLineMap.get([e.x, e.y].join()))
    return ps[0] || e
  }
  pxsResults.forEach((e,k)=>{
    ctx.beginPath()
    ctx.fillStyle = e.rgba;
    ctx.rect(e.x, e.y, 3,3)
    ctx.fill()
    if(k === 0){
      curr = e
    }else {
      curr = calcNextCurr(curr)
    }
    if(curr){
      pxsLine.push(curr)
      pxsLineMap.set([curr.x, curr.y].join(), curr)
    }
  })

  ctx.beginPath()
  ctx.strokeStyle = '#f00'
  pxsLine.forEach((e,k)=>{
    if(k === 0){
      ctx.moveTo(e.x, e.y)
    }else {
      ctx.lineTo(e.x, e.y)
    }
  })
  ctx.stroke()
})

</script>

<style scoped lang="less">
.aaa {

}
</style>
