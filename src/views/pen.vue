<template>
    <div class="pen">
        <CanvasInteraction @load="load" :gap="0" @penStart="penStart" @contextmenu="contextmenu"></CanvasInteraction>
        <div ref="contextmenuRef" class="absolute b-solid b b-#f00 shadow shadow-xl shadow-15px bg-#fff p-10px b-rd-10px cursor-pointer" :style="contextmenuStyle" v-if="contextmenuShow">
            <div @click="delNode">删除</div>
        </div>
    </div>
</template>

<script setup lang="ts" title="钢笔贝塞尔曲线在线编辑">
import CanvasInteraction, {ObjectBaseType} from "../components/CanvasInteraction"
import {get, difference} from "lodash"
const {x, y} = useMouseInElement()
const {KeyP, Space} = useMagicKeys()
const drawingBoardRef = ref({})
const scene = computed<any[]>(()=> get(drawingBoardRef.value, 'sceneRef', []))
const lineActives = computed(()=>{
    return scene.value.filter(e=>e.isMouseLineIn === true)
})
const points = ref([])
const currPoint = ref()
const currPointIndex = ref(-1)
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
const contextmenuRef = ref(null)
const { isOutside }= useMouseInElement(contextmenuRef)

const contextmenuShow = ref(false)
const contextmenuStyle = ref({
    left:'0px',
    top:'0px',
})
const contextmenu = (e:Event)=>{
    e.preventDefault()
    e.stopPropagation()
    const index = points.value.findIndex(ee=>ee.id === scene.value.find(e=>e.isInside())?.id) - 1
    const point = points.value[index]
    currPoint.value = point
    currPointIndex.value = index
    contextmenuStyle.value.left = `${x.value+5}px`
    contextmenuStyle.value.top = `${y.value+5}px`
    contextmenuShow.value = true
}
const delNode = () => {
    points.value.splice(currPointIndex.value, 1)
    contextmenuShow.value = false
}
watchEffect(()=>{
    if(!contextmenuShow.value){
        currPoint.value = null
        currPointIndex.value = -1
    }
})
const penStart = async (e, event)=>{
    contextmenuShow.value = !isOutside.value
    if(!e && !Space.value){
        const pointsInfoNew = {
            x:event.center.x,
            y: event.center.y,
            id:Date.now()
        }
        if(lineActives.value.length > 0){
            // 在线上插入节点
            lineActives.value.forEach(line=>{
                const index = points.value.findIndex(e=>e.id === line.start.id)
                points.value.splice(index+1, 0 ,pointsInfoNew)
            })
        }else {
            /// 添加新节点
            points.value = points.value.concat([pointsInfoNew])
        }

    }
}
const load = async (drawingBoard:any) => {
    drawingBoardRef.value = drawingBoard
    const {sceneRef, ObjectBase} = drawingBoard
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
        isMouseLineIn:boolean = false

        async draw(ctx:CanvasRenderingContext2D){
            ///**
            // line

            const x1 = this.startInfo.x
            const y1 = this.startInfo.y
            const x2 = this.endInfo.x
            const y2 = this.endInfo.y
            const m =  (y2 - y1) / (x2 - x1) //斜率 m = (y2 - y1) / (x2 - x1)
            const ly = Math.round(m * x.value + (y1 - m * x1))
            // 直线方程
            const lineWidth = 1
            const offset = 2
            ctx.lineWidth = lineWidth
            this.isMouseLineIn = y.value-lineWidth-offset <=  ly && ly <= y.value+lineWidth+offset
            ctx.strokeStyle = this.isMouseLineIn ? '#f00':'#eee'
            ctx.beginPath()
            ctx.moveTo(this.startInfo.x, this.startInfo.y)
            ctx.lineTo(this.endInfo.x, this.endInfo.y)
            ctx.stroke()
            ctx.strokeStyle = this.isMouseLineIn ? '#0080ff':'#000000'
            ctx.beginPath()
            ctx.moveTo(this.startInfo.x, this.startInfo.y)
            ctx.bezierCurveTo(
                this.p1Info.x - this.p1.offsetX, this.p1Info.y - this.p1.offsetY,
                this.p2Info.x - this.p2.offsetX, this.p2Info.y - this.p2.offsetY,
                this.endInfo.x, this.endInfo.y
            )
            ctx.stroke()
            if(this.isMouseLineIn){
                ctx.beginPath()
                ctx.fillStyle = '#f00'
                ctx.arc(x.value, y.value, lineWidth+4, 0, 2*Math.PI)
                ctx.fill()
                ctx.beginPath()
                ctx.strokeStyle = '#0080ff'
                ctx.arc(x.value, y.value, lineWidth+4, 0, 2*Math.PI)
                ctx.stroke()
            }
            if(KeyP.value){
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
            }

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
            // const cache = sceneRefMap[start.id]
            const cache = null
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
        })
    }, {deep:true})

    watchEffect(()=>{
        sceneRef.value.filter(e=>e.type === 'line').forEach(e=>{
            e.p1.visible = KeyP.value
            e.p2.visible = KeyP.value
        })
        // prev.p1.visible = Alt.value
        // prev.p2.visible = Alt.value
    })
}

</script>

<style scoped lang="less">
.pen {

}
</style>
