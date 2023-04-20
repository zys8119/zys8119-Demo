<template>
    <div class="PathRecognition">
        <CanvasInteraction @load="load"></CanvasInteraction>
    </div>
</template>

<script setup lang="ts" title="canvas 交互">
import picture from "@/src/assets/picture.jpeg"
import CanvasInteraction from "../components/CanvasInteraction"
import winframe from "winframe"

const load = async ({ObjectsClass, scene, ObjectBase})=>{
    scene.push(new ObjectsClass.Rect("#f00", 50, 60, 100, 100))
    scene.push(new ObjectsClass.Rect("#0032ff", 500, 300, 500, 300))
    scene.push(new ObjectsClass.Rect("#f500d5", 90, 60, 200, 100))
    scene.push(new ObjectsClass.Image(picture, 100, 10, 100, 100))
}
</script>

<style scoped lang="less">
.PathRecognition {
}
</style>
