<template>
    <div class="PathRecognition">
        <CanvasInteraction @load="load"></CanvasInteraction>
    </div>
</template>

<script setup lang="ts" title="canvas 交互">
import picture from "@/src/assets/house/bj2.png"
import CanvasInteraction from "../components/CanvasInteraction"
import useCanvasImage from "use-canvas-image"

const intersects = function (bodyA, bodyB) {
    return !(bodyA.x + bodyA.width < bodyB.x ||
        bodyB.x + bodyB.width < bodyA.x ||
        bodyA.y + bodyA.height < bodyB.y ||
        bodyB.y + bodyB.height < bodyA.y);
}
const containsPoint = function (body, x, y) {
    return !(x < body.x || x > (body.x + body.width)
        || y < body.y || y > (body.y + body.height));
}
const load = async ({ObjectsClass, scene, ObjectBase}) => {
    const a = new ObjectsClass.Rect("#f00", 50, 60, 100, 100)
    scene.push(a)
    const b = new ObjectsClass.Rect("#0032ff", 500, 500, 500, 500)
    scene.push(b)
    scene.push(new ObjectsClass.Rect("#f500d5", 90, 200, 200, 500))
    scene.push(new ObjectsClass.Rect("#f500d5", 500, 100, 200, 500))
    const sceneObjs = scene.filter(e => e.type !== 'line')
    const isInScene = ([x, y]:any)=> sceneObjs.find(e=> containsPoint(e, x, y))
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

        get width() {
            return Math.abs(this.sx - this.ex)
        }

        get height() {
            return Math.abs(this.sy - this.ey)
        }

        constructor() {
            super();
        }

        ctx: CanvasRenderingContext2D
        getDistance([x,y]:any){
            const a = Math.abs(x-this.ex);
            const b = Math.abs(y-this.ey);
            return Math.sqrt(Math.pow(a,2)+Math.pow(b,2));
        }
        async getPoint(sx, sy, index = 0) {
            const offset = 10
            const points = [
                [sx, sy - offset],
                [sx + offset, sy],
                [sx, sy+offset],
                [sx- offset, sy],
            ].filter(e=> !isInScene(e))
            const pointsLength = points.map(e=> this.getDistance(e))
            const {point} = pointsLength.reduce((a,b, index)=>{
                if(b < a.value){
                    return {index, value:b, point:points[index]}
                }else {
                    return a
                }
            }, {index:0, value:Infinity, point:null})
            if(index > 10 || !point){
                return
            }
            const [x, y]:any = point
            // let x = 0
            // let y = 0
            //
            // const [x, y] = .reduce((a:any, b:any)=>{
            //     const index = this.getDistance(b)
            //     if(!isInScene(b[0], b[1]) && index < a[2]){
            //         return [b[0], b[1], index]
            //     }else {
            //         return a
            //     }
            // }, [0, 0, Infinity])
            // if(Math.floor(this.getDistance([x,y])) <= offset+1){
            //     return
            // }
            this.ctx.lineTo(x, y)
            await this.getPoint(x,y, index + 1)
        }

        async draw(ctx: CanvasRenderingContext2D, canvas) {
            this.ctx = ctx
            ctx.beginPath()
            ctx.strokeStyle = "#00a6ff"
            ctx.lineJoin = "round"
            ctx.lineWidth = this.lineWidth
            this.sx = a.x + a.w / 2
            this.sy = a.y + a.h
            this.ex = a.x + a.w / 2
            this.ey = a.y
            ctx.moveTo(this.sx, this.sy)
            try {
                await this.getPoint(this.sx, this.sy)
            }catch (e) {
            }
            ctx.lineTo(this.ex, this.ey)
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
