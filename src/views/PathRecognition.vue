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
    scene.push(new ObjectsClass.Rect("#0032ff", 500, 300, 600, 800))
    scene.push(new ObjectsClass.Rect("#f500d5", 90, 60, 200, 100))
    scene.push(new ObjectsClass.Rect("#f500d5", 90, 300, 200, 500))
    scene.push(new ObjectsClass.Image(picture, 100, 10, 100, 100))
}

</script>

<style scoped lang="less">
.PathRecognition {
}
</style>
