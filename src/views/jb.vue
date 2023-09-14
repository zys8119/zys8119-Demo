<template>
    <div class="jb">
        <canvas ref="canvasRef" class="b-solid b-1 b-#f00"/>
    </div>
</template>

<script setup lang="ts">
import {CreateDrawingFromSVG} from "svg2canvas"
import jb from "./jb.svg?raw"
const content = jb
const dp = new DOMParser()
const doc = dp.parseFromString(jb, "text/html")
const canvasRef = ref<HTMLCanvasElement>()
const ctx = $computed(()=> canvasRef.value?.getContext?.('2d'))
const init = ()=>{
    ctx.strokeStyle = "#f00"
    ctx.lineWidth = 1.5
    let x = 709
    let y = 628
    ctx.moveTo(x, y)
    x += 5.819
    y += 1.746
    ctx.lineTo(x, y)
    // a96.618,96.618,0,0,0-12.027,8.336
    // ctx.ellipse(96.618+x,96.618+x,0,0,0,-12.027,8.336)
    ctx.bezierCurveTo(686.848,651.088,688.9,681.414,673.883,695)
    x = 673.883
    y = 695
    ctx.bezierCurveTo(-15.116+x,-2.278+y,-32.408+x,-46.493+y,-52.833+x,-55.919+y)
    x += -52.833
    y += -55.919
    ctx.lineTo(x, y-4.993)
    y += -4.993
    x += -0.129
    y += -.009
    ctx.lineTo(x, y)
    x = 621
    y = 634
    ctx.lineTo(x, y)
    ctx.quadraticCurveTo(7.889+x,6.6+y,26+x,1+y)
    x += 26
    y += 1
    ctx.bezierCurveTo(-0+x,-0+y,4.925+x,-4.75+y,14+x,-3+y)
    x += 14
    y += -3
    ctx.lineTo(x+-0.93, y+-32.553)
    x += -0.93
    y += -32.553
    const arr = [
        [1.2,-.256,1.93,-0.447,1.93,-0.447],
        [14.831,-8.634,47,-2,47,-2],
        [0.381,0.167,.773,0.3,1.164,0.432],
        [0.381,0.167,.773,0.3,1.164,0.432],
        [3.891,4.645,9.345,12.89,3.836,17.568],
    ]
    arr.forEach(e=>{
        const d = e.map((e, k)=>k % 2 === 0 ? e+x : e+y)
        ctx.bezierCurveTo(...d)
        x = d.slice(-2)[0]
        y = d.slice(-2)[1]
    })
    ctx.bezierCurveTo(714,615,687.9,621.189,709,628)
    ctx.stroke()
}
onMounted(()=>{
    canvasRef.value.width = 968
    canvasRef.value.height = 738
    ctx.clearRect(0,0, canvasRef.value.width, canvasRef.value.height)
    init()
})

</script>

<style scoped lang="less">
.jb {

}
</style>
