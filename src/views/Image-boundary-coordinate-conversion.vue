<template>
  <div class="aaa">
    <canvas ref="canvasRef"></canvas>
  </div>
</template>

<script setup lang="ts" title="图形边界坐标生成转换算法" content="图形边界坐标生成转换算法">
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
  console.log(pxsLine.length)
  //todo 精简坐标-直线算法
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
  const newPxsLine = []
  let dots = []
  pxsLine.forEach((e,k)=>{
    if(dots.length < 3){
      dots.push(e)
    }else {
      if(arePointsCollinear(dots.map(e=>[e.x, e.y]))){
        dots.push(e)
      }else {
        newPxsLine.push.apply(newPxsLine, dots.slice(0,dots.length - 1))
        dots = [dots.pop()]
      }
    }
  })
  ctx.beginPath()
  ctx.strokeStyle = '#4800ff'
  newPxsLine.forEach((e,k)=>{
    if(k === 0){
      ctx.moveTo(e.x, e.y)
    }else {
      ctx.lineTo(e.x, e.y)
    }
  })
  ctx.stroke()
  console.log(newPxsLine.length)
  //todo 精简坐标 道格拉斯-普克算法
  function simplifyDouglasPeucker(points, tolerance) {
    if (points.length <= 2) {
      return points;
    }

    // Find the point with the maximum distance
    let maxDistance = 0;
    let maxIndex = 0;

    for (let i = 1; i < points.length - 1; i++) {
      const distance = perpendicularDistance(points[i], points[0], points[points.length - 1]);

      if (distance > maxDistance) {
        maxDistance = distance;
        maxIndex = i;
      }
    }

    // If the maximum distance is greater than the tolerance, recursively simplify
    if (maxDistance > tolerance) {
      const left = simplifyDouglasPeucker(points.slice(0, maxIndex + 1), tolerance);
      const right = simplifyDouglasPeucker(points.slice(maxIndex), tolerance);

      return left.slice(0, -1).concat(right);
    } else {
      // If the maximum distance is within tolerance, return the start and end points
      return [points[0], points[points.length - 1]];
    }
  }

  function perpendicularDistance(point, lineStart, lineEnd) {
    const { x: px, y: py } = point;
    const { x: sx, y: sy } = lineStart;
    const { x: ex, y: ey } = lineEnd;

    const numerator = Math.abs((ex - sx) * (sy - py) - (sx - px) * (ey - sy));
    const denominator = Math.sqrt(Math.pow(ex - sx, 2) + Math.pow(ey - sy, 2));

    return numerator / denominator;
  }

  const tolerance = 2;
  const simplifiedCoordinates = simplifyDouglasPeucker(newPxsLine, tolerance);


  ctx.beginPath()
  ctx.strokeStyle = '#208300'
  simplifiedCoordinates.slice(0, 50).forEach((e,k)=>{
    if(k === 0){
      ctx.moveTo(e.x, e.y)
    }else {
      ctx.lineTo(e.x, e.y)
    }
  })
  ctx.stroke()
  console.log(simplifiedCoordinates.length)
})

</script>

<style scoped lang="less">
.aaa {

}
</style>
