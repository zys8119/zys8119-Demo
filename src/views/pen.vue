<template>
    <div class="pen">
        <CanvasInteraction @load="load" :gap="0" @penStart="penStart"></CanvasInteraction>
    </div>
</template>

<script setup lang="ts" title="钢笔贝塞尔曲线在线编辑">
import CanvasInteraction, {ObjectBaseType} from "../components/CanvasInteraction"
const points = ref([])
const w = 10
const h = 10
const lines = computed(()=>{
    if(points.value.length > 1){
        return new Array(points.value.length - 1).fill([]).map((e, k)=>{
            return {
                start:points.value[k],
                end: points.value[k+1],
            }
        })
    }else {
        return []
    }
})
const penStart = async (e, event)=>{
    if(!e){
        points.value = points.value.concat([{
            x:event.center.x,
            y: event.center.y,
            id:Date.now()
        }])
    }
}

const load = async ({sceneRef, ObjectBase}:any) => {
    class createRect extends ObjectBase implements ObjectBaseType{
        type = 'rect'
        offsetX = 0
        offsetY = 0
        constructor(public color: string,  public x1: number,  public y1: number, public w: number, public h: number, public id?:any) {
            super(x1, y1, w, h)
        }
        get x(){
            return this.x1 + this.offsetX
        }
        set x(v){
            this.x1 = v - this.offsetX
        }
        get y(){
            return this.y1 + this.offsetY
        }
        set y(v){
            this.y1 = v - this.offsetY
        }
        get position(){
            return 'content'
        }

        async draw(ctx:CanvasRenderingContext2D) {
            ctx.fillStyle = this.color
            ctx.fillRect(this.x, this.y, this.w, this.h)
        }
    }
    class Line  extends ObjectBase implements ObjectBaseType{
        type = 'line'
        startInitInfo = {
            x:0,
            y:0,
        }
        endInitInfo = {
            x:0,
            y:0,
        }
        constructor(public start:createRect, public p1:createRect, public p2:createRect, public end:createRect, public id?:any) {
            super();
            this.startInitInfo.x = start.x
            this.startInitInfo.y = start.y
            this.endInitInfo.x = end.x
            this.endInitInfo.y = end.y
        }
        get startInfo(){
            return {
                x:this.start.x+this.start.w*0.5,
                y:this.start.y+this.start.h*0.5
            }
        }
        get endInfo(){
            return {
                x:this.end.x+this.end.w*0.5,
                y:this.end.y+this.end.h*0.5
            }
        }
        get startMoveInfo(){
            this.p1.offsetX = this.start.x - this.startInitInfo.x
            this.p1.offsetY = this.start.y - this.startInitInfo.y
            return {
                x:this.p1.offsetX,
                y:this.p1.offsetY
            }
        }
        get endMoveInfo(){
            this.p2.offsetX = this.end.x - this.endInitInfo.x
            this.p2.offsetY = this.end.y - this.endInitInfo.y
            return {
                x:this.p2.offsetX,
                y:this.p2.offsetY
            }
        }
        get p1Info(){
            return {
                x:this.p1.x+this.p1.w*0.5+this.startMoveInfo.x,
                y:this.p1.y+this.p1.h*0.5+this.startMoveInfo.y
            }
        }
        get p2Info(){
            return {
                x:this.p2.x+this.p2.w*0.5+this.endMoveInfo.x,
                y:this.p2.y+this.p2.h*0.5+this.endMoveInfo.y
            }
        }

        toJson(){
            return {
                id:this.id,
                start:{
                    type:this.start.type,
                    id:this.start.id,
                    x:this.start.x,
                    y:this.start.y,
                    w:this.start.w,
                    z:this.start.h,
                },
                end:{
                    type:this.end.type,
                    id:this.end.id,
                    x:this.end.x,
                    y:this.end.y,
                    w:this.end.w,
                    z:this.end.h,
                },
                p1:{
                    type:this.p1.type,
                    id:this.p1.id,
                    x:this.p1.x,
                    y:this.p1.y,
                    w:this.p1.w,
                    z:this.p1.h,
                },
                p2:{
                    type:this.p2.type,
                    id:this.p2.id,
                    x:this.p2.x,
                    y:this.p2.y,
                    w:this.p2.w,
                    z:this.p2.h,
                }
            }
        }

        async draw(ctx:CanvasRenderingContext2D){
            ///**
            // line
            ctx.strokeStyle = '#000000'
            ctx.beginPath()
            ctx.moveTo(this.startInfo.x, this.startInfo.y)
            ctx.bezierCurveTo(
                this.p1Info.x - this.p1.offsetX, this.p1Info.y - this.p1.offsetY,
                this.p2Info.x - this.p2.offsetX, this.p2Info.y - this.p2.offsetY,
                this.endInfo.x, this.endInfo.y
            )
            ctx.stroke()
            // p1
            ctx.strokeStyle = '#0080ff'
            ctx.beginPath()
            ctx.moveTo(this.startInfo.x, this.startInfo.y)
            ctx.lineTo(this.p1Info.x - this.startMoveInfo.x, this.p1Info.y - this.startMoveInfo.y)
            ctx.stroke()
            // p2
            ctx.beginPath()
            ctx.moveTo(this.endInfo.x, this.endInfo.y)
            ctx.lineTo(this.p2Info.x - this.endMoveInfo.x, this.p2Info.y - this.endMoveInfo.y)
            ctx.stroke()
            // */


        }
    }
    watch(points, ()=>{
        const sceneRefMap = sceneRef.value.filter(e=>e.type === 'line').map(e=>e.toJson()).reduce((a, b)=>{
            a[b.id] = b
            return a
        }, {})
        sceneRef.value = []
        if(points.value.length === 1){
            sceneRef.value.push( new createRect('#f00', points.value[0].x, points.value[0].y, w, h))
        }
        let prev:Line = null
        lines.value.forEach(({start, end}, k)=>{
            const cache = sceneRefMap[start.id]
            if(k === 0){
                prev = new Line(
                    new createRect('#f00', cache?.start.x || start.x, cache?.start.y || start.y, w, h, start.id),
                    new createRect('#09f', cache?.p1.x || start.x, cache?.p1.y || start.y, w, h, start.id),
                    new createRect('#09f', cache?.p2.x || end.x, cache?.p2.y || end.y, w, h, end.id),
                    new createRect('#f00', cache?.end.x || end.x, cache?.end.y || end.y, w, h, end.id),
                    start.id,
                )
                sceneRef.value.push(prev.start)
            }else {
                prev = new Line(
                    prev.end,
                    new createRect('#09f', cache?.p1.x || start.x, cache?.p1.y || start.y, w, h, start.id),
                    new createRect('#09f', cache?.p2.x || end.x, cache?.p2.y || end.y, w, h, end.id),
                    new createRect('#f00', cache?.end.x || end.x, cache?.end.y || end.y, w, h, end.id),
                    start.id,
                )
            }
            sceneRef.value.push(prev.end)
            sceneRef.value.push(prev.p1)
            sceneRef.value.push(prev.p2)
            sceneRef.value.push(prev)
            prev.p1.visible = false
            prev.p2.visible = false
        })
    })

}

</script>

<style scoped lang="less">
.pen {

}
</style>
