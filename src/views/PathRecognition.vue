<template>
    <div class="PathRecognition">
        <CanvasInteraction @load="load"></CanvasInteraction>
    </div>
</template>

<script setup lang="ts" title="canvas 交互">
import picture from "@/src/assets/house/bj2.png"
import CanvasInteraction from "../components/CanvasInteraction"
const intersects = function(bodyA,bodyB){
    return !(bodyA.x + bodyA.width < bodyB.x ||
        bodyB.x + bodyB.width < bodyA.x ||
        bodyA.y + bodyA.height < bodyB.y ||
        bodyB.y + bodyB.height < bodyA.y);
}
const containsPoint = function(body, x, y){
    return !(x < body.x || x > (body.x + body.width)
        || y < body.y || y > (body.y + body.height));
}
const load = async ({ObjectsClass, scene, ObjectBase})=>{
    const a = new ObjectsClass.Rect("#f00", 50, 60, 100, 100)
    scene.push(a)
    const b = new ObjectsClass.Rect("#0032ff", 500, 500, 500, 500)
    scene.push(b)
    scene.push(new ObjectsClass.Rect("#f500d5", 90, 200, 200, 500))
    scene.push(new ObjectsClass.Rect("#f500d5", 500, 100, 200, 500))
    class Line extends ObjectBase {
        type = 'line'
        x = 0
        y = 0
        w = 0
        h = 0
        sx = 0
        sy = 0
        ex = 0
        ey = 0
        lineWidth = 2
        get width(){
            return Math.abs(this.sx - this.ex)
        }
        get height(){
            return Math.abs(this.sy - this.ey)
        }
        constructor() {
            super();
        }
        draw(ctx:CanvasRenderingContext2D){
            ctx.beginPath()
            ctx.strokeStyle = "#f00"
            ctx.lineJoin = "round"
            ctx.lineWidth = this.lineWidth
            this.sx = a.x + a.w /2
            this.sy = a.y + a.h
            this.ex = this.mousePoint[0]
            this.ey = this.mousePoint[1]
            ctx.moveTo(this.sx, this.sy)
            ctx.lineTo(this.mousePoint[0], this.mousePoint[1])
            ctx.stroke()
        }
    }
    scene.push(new Line())
}

</script>

<style scoped lang="less">
.PathRecognition {
}
</style>
