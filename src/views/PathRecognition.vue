<template>
    <div class="PathRecognition">
        <CanvasInteraction @load="load"></CanvasInteraction>
    </div>
</template>

<script setup lang="ts" title="canvas 交互">
import picture from "@/src/assets/house/bj2.png"
import CanvasInteraction from "../components/CanvasInteraction"

const load = async ({ObjectsClass, scene, ObjectBase})=>{
    scene.push(new ObjectsClass.Rect("#f00", 50, 60, 100, 100))
    scene.push(new ObjectsClass.Rect("#0032ff", 500, 300, 500, 300))
    scene.push(new ObjectsClass.Rect("#f500d5", 90, 60, 200, 100))
    scene.push(new ObjectsClass.Rect("#f500d5", 90, 300, 200, 500))
    scene.push(new ObjectsClass.Image(picture, 100, 10, 100, 100))
    class aa extends ObjectBase{
        x = 0
        y = 0
        w = 100
        h = 100
        draw(ctx:CanvasRenderingContext2D){
            // ctx.fillStyle = "#ff0"
            // ctx.fillRect(this.x, this.y, this.w, this.h)
        }
    }
    scene.push(new aa)
}

</script>

<style scoped lang="less">
.PathRecognition {
}
</style>
