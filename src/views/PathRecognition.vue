<template>
    <div class="PathRecognition">
        <canvas ref="canvas" @click="aa"></canvas>
        <input type="number" v-model="offset">
    </div>
</template>

<script setup lang="ts" title="canvas 路径识别" content="可用于纯色图片的路径矢量图路径获取">
import useCanvasImage from "use-canvas-image"
import bj2 from "@/src/assets/house/aa.jpg"
const canvas = ref() as Ref<HTMLCanvasElement>
const {elementX, elementY, isOutside} = useMouseInElement(canvas)
const imageData = ref(new Map())
const ctx = ref() as Ref<CanvasRenderingContext2D>
onMounted(async ()=>{
    ctx.value = canvas.value.getContext('2d')
    await useCanvasImage(bj2, (e)=>{
        if(e.isStart){
            canvas.value.width = e.canvasWidth
            canvas.value.height = e.canvasHeight
        }
        imageData.value.set([e.x, e.y].map(e=>e.toFixed(0)).join(),e)
        ctx.value.fillStyle = e.rgba
        ctx.value.fillRect(e.x, e.y, 2,2)
    })
})
const offset = ref(0)
const aa = ()=>{
    const key = [elementX.value, elementY.value].map(e=>e.toFixed(0)).join()
    const info = imageData.value.get(key)
    for (const [k, v] of imageData.value){
        if(
            v.r <= info.r + offset.value && v.r > info.r - offset.value ||
            v.g <= info.g + offset.value && v.g > info.g - offset.value ||
            v.b <= info.b + offset.value && v.b > info.b - offset.value
        ){
            ctx.value.clearRect(v.x,v.y, 2, 2)
        }
    }
}
</script>

<style scoped lang="less">
.PathRecognition {
   background: #0d9dd3;
    input{
        position: absolute;
        left: 0;
        top: 0;
    }
}
</style>
