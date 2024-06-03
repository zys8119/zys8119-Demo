<template>
  <div class="feipanLayout w-full h-full bg-#71b52c abs-f">
    <CanvasInteraction @load="load"
                       :gap="0"
                       @pen="pen"
                       @penStart="penStart"
                       @penMove="penMove"
                       @penEnd="penEnd"
                       @touchstart="touchstart"
                       @ontouchmove="touchstart"
    ></CanvasInteraction>
    <n-space class="abs w-full lef-0 top-10px text-#fff text-20px" justify="center">
      <svg-icon name="revoke" @click="revoke" :class="{
        '!opacity-50':penPointsHistorys.length === 0
      }"></svg-icon>
      <svg-icon name="redo" @click="redo" :class="{
        '!opacity-50':revokeCache.length === 0
      }"></svg-icon>
    </n-space>
    <div class="abs w-full lef-0 bottom-10px flex justify-center items-center">
      <n-space class="flex-1 p-x-15px" justify="space-between" align="center">
        <n-popover>
          <template #trigger>
            <div class="w-30px h-30px b-rd-100% b-#fff b-solid b-2px bg-$penColor"></div>
          </template>
          <div class="flex flex-col gap-5px">
            <div v-for="(item, i) in colors" :key="i" class="w-30px h-30px b-rd-100% bg-$color flex-center abs-r" :style="{'--color':item}" @click="config.color = item">
              <div class="w-20px h-20px  b-rd-100%  b-solid b-2px b-#fff abs-center" v-if="config.color === item"></div>
            </div>
          </div>
        </n-popover>
        <n-popover>
          <template #trigger>
            <div class="flex-center">
              <div v-for="(item, i) in penType" :key="i"  class="text-#fff flex-center text-30px bold" v-show="config.penType === item.value">
                <svg-icon :name="item.icon"></svg-icon>
                <svg-icon name="shangla" class="text-10px"></svg-icon>
              </div>
            </div>
          </template>
          <div class="flex flex-col gap-5px">
            <div class="flex-center !justify-start gap-5px text-#999" :class="{
              '!text-#f00':config.penType === item.value
            }" v-for="(item, i) in penType" :key="i" @click="config.penType = item.value">
              <svg-icon :name="item.icon"></svg-icon>
              <div>{{item.name}}</div>
            </div>
          </div>
        </n-popover>
        <div class="text-#fff" @click="clear"><svg-icon name="clear"></svg-icon></div>
        <div>sada</div>
      </n-space>
    </div>
  </div>
</template>

<script setup lang="ts" title="飞盘战术布局">
import CanvasInteraction, {ObjectBaseType} from "@/src/components/CanvasInteraction"
import SvgIcon from "@/src/components/svg-icon";
const colors = ref([
    "#f00",
    "#0f0",
    "#00f",
    "#ff0",
    "#0ff",
    "#f0f",
    "#000",
    "#fff",
    "#000",
    "#f00",
    "#0f0",
])
const penType = ref([
  {name:"铅笔", value:'pen', icon:'pen'},
  {name:"实线", value:'solid-line', icon:'solidLine'},
  {name:"虚线", value:'dashed-line', icon:'dashedLine'},
  {name:"矩形", value:'rect', icon:'rect'},
  {name:"箭头", value:'solid-arrow', icon:'solidArrow'},
  {name:"虚箭头", value:'dashed-arrow', icon:'dashedArrow'},
  {name:"橡皮擦", value:'eraser', icon:'eraser'},
])
const config = ref({
  color:"#f00",
  penType:"solid-arrow"
})
useCssVars(()=>{
  return {
    "penColor":config.value.color
  }
})
const pen = (ev:{srcEven: MouseEvent }) => {
  ev?.srcEven?.preventDefault?.()
}
const touchstart =(ev:TouchEvent) => {
  ev.preventDefault()
}
const penPointsHistorys = ref([])
const drawPenPointsHistorys = computed(()=>{
  const clearIndex = penPointsHistorys.value.findLastIndex(e=>e?.[0]?.type === 'clear')
  return clearIndex > -1 ? penPointsHistorys.value.slice(clearIndex  + 1) : penPointsHistorys.value
})
const penPoints = ref([])
const penStart = (obj, ev)=>{
  if(!obj){
    penPoints.value = [{
      x:ev.center.x*window.devicePixelRatio,
      y:ev.center.y*window.devicePixelRatio,
      color: config.value.color,
      type:config.value.penType,
    }]
  }
}
const penMove = (obj, ev)=>{
  if(!obj){
    penPoints.value.push({
      x:ev.center.x*window.devicePixelRatio,
      y:ev.center.y*window.devicePixelRatio,
      color: config.value.color,
      type:config.value.penType,
    })
  }
}
const penEnd = ()=>{
  if(['pen','eraser'].includes(config.value.penType)) {
    penPointsHistorys.value.push(penPoints.value)
  }else {
    if(penPoints.value.length < 2){return}
    penPointsHistorys.value.push([penPoints.value[0], penPoints.value[penPoints.value.length - 1]])
  }
  penPoints.value = []
}
const clear = ()=>{
  penPointsHistorys.value.push([{type:'clear'}])
}
const revokeCache = ref([])
const revoke = ()=>{
  if(penPointsHistorys.value.length === 0){return}
  revokeCache.value.push(penPointsHistorys.value.pop())
}
const redo = ()=>{
  if(revokeCache.value.length === 0){return}
  penPointsHistorys.value.push(revokeCache.value.pop())
}
const xGap = 100
const yGap = 200
const winW = window.innerWidth*window.devicePixelRatio
const winH = window.innerHeight*window.devicePixelRatio
const load = async ({ scene, ObjectBase, width, height, ctx}:{
  [key:string]:any
  scene:Array<ObjectBaseType>
})=>{
  class DrawPenPoints extends ObjectBase implements ObjectBaseType {
      type = "DrawPenPoints"
      constructor() {
        super();
      }
      drawArrow(ctx:CanvasRenderingContext2D, fromX:number, fromY:number, toX:number, toY:number,headLength = 30,offset = 10) {
        const dx = toX - fromX;
        const dy = toY - fromY;
        const angle = Math.atan2(dy, dx);

        // 计算箭头顶端的偏移位置
        const toXOffset = toX - offset * Math.cos(angle);
        const toYOffset = toY - offset * Math.sin(angle);

        // 绘制箭头的主线
        ctx.beginPath();
        ctx.moveTo(fromX, fromY);
        ctx.lineTo(toXOffset, toYOffset);
        ctx.stroke();

        // 计算箭头头部的两个点
        const arrowX1 = toX - headLength * Math.cos(angle - Math.PI / 6);
        const arrowY1 = toY - headLength * Math.sin(angle - Math.PI / 6);
        const arrowX2 = toX - headLength * Math.cos(angle + Math.PI / 6);
        const arrowY2 = toY - headLength * Math.sin(angle + Math.PI / 6);

        // 绘制箭头的两条边
        ctx.setLineDash([]);
        ctx.beginPath();
        ctx.moveTo(toX, toY);
        ctx.lineTo(arrowX1, arrowY1);
        ctx.lineTo(arrowX2, arrowY2);
        ctx.closePath();
        ctx.fill();
      }
      // 橡皮擦功能的具体实现
      erase(ctx: CanvasRenderingContext2D, mouseX:number,mouseY:number,eraserSize=20) {
        ctx.clearRect(mouseX - eraserSize / 2, mouseY - eraserSize / 2, eraserSize, eraserSize);
      }
      drawPoint(ctx: CanvasRenderingContext2D,canvas: HTMLCanvasElement, penPoints:Array<{x:number, y:number, color:string, type:string}>){
        if(penPoints.length < 2){
          return
        }
        ctx.beginPath()
        ctx.lineWidth = 5
        ctx.fillStyle = penPoints[0].color
        ctx.strokeStyle = penPoints[0].color
        const type = penPoints[0].type
        if(['dashed-arrow','dashed-line'].includes(type)){
          // 设置虚线
          ctx.setLineDash([10, 10]);
        }
        switch (type){
          case 'solid-arrow':
          case 'dashed-arrow':
            this.drawArrow(ctx, penPoints[0].x, penPoints[0].y, penPoints[penPoints.length - 1].x, penPoints[penPoints.length - 1].y)
            break
          case 'solid-line':
          case 'dashed-line':
            ctx.moveTo(penPoints[0].x, penPoints[0].y)
            ctx.lineTo(penPoints[penPoints.length - 1].x, penPoints[penPoints.length - 1].y)
            break
          case 'rect':
            ctx.rect(penPoints[0].x, penPoints[0].y, penPoints[penPoints.length - 1].x - penPoints[0].x, penPoints[penPoints.length - 1].y - penPoints[0].y)
            break
          default:
            penPoints.forEach((p, i) => {
              if(type === 'eraser'){
                this.erase(ctx, p.x, p.y,50)
                return;
              }
              if (i === 0) {
                ctx.moveTo(p.x, p.y)
                return
              }
              ctx.lineTo(p.x, p.y)
            })
            break
        }
        ctx.stroke()
        ctx.closePath()
      }
      draw(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement): Promise<any> | void {
        drawPenPointsHistorys.value.forEach((penPoints, i) => {
          this.drawPoint(ctx, canvas, penPoints)
        })
        this.drawPoint(ctx, canvas, penPoints.value)
      }
      isInside(): boolean {
        return  false
      }
  }
  class Line extends ObjectBase implements ObjectBaseType {
      type = "line"
      constructor(public x:number, public  y:number, public lineWidth:number, public horizontal:boolean = false) {
        super();
      }
      draw(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement): Promise<any> | void {
        ctx.beginPath()
        ctx.moveTo(this.x, this.y)
        if(this.horizontal){
            ctx.lineTo(this.x + this.lineWidth, this.y)
        }else {
          ctx.lineTo(this.x, this.lineWidth)
        }
        ctx.lineWidth = 1
        ctx.strokeStyle = "#fff"
        ctx.stroke()
        ctx.closePath()
      }
      isInside(): boolean {
        return  false
      }
  }
  class RectText extends ObjectBase implements ObjectBaseType {
      type = 'RectText'
      constructor(public x:number, public  y:number, public rectW: number, public rectH: number, public text: string, public horizontal:boolean = false) {
        super();
      }
      draw(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement): Promise<any> | void {
        ctx.save()
        ctx.beginPath()
        const x = this.rectW / 2 + this.x
        const y = this.rectH / 2 + this.y
        ctx.translate(x, y)
        if(this.horizontal){
          ctx.rotate(-Math.PI/2)
        }
        ctx.fillStyle = "#fff"
        ctx.textAlign = 'center'
        ctx.font = `40px Arial`
        ctx.textBaseline = "middle"
        ctx.fillText(this.text?.toUpperCase?.(), 0,0)
        ctx.closePath()
        ctx.restore()
      }
  }
  class disc extends ObjectBase implements ObjectBaseType {
    type = 'disc'
    size = 0
    constructor(public x:number, public y:number,public config?: Partial<{
      size:number
      color:string
      text:any,
    }>) {
      super();
      this.size = this.config?.size || 30
    }
    get w(){
      return this.size
    }
    set w(v){
      this.size = v
    }
    get h(){
      return this.size
    }
    set h(v){
      this.size = v
    }
    draw(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement): Promise<any> | void {
      ctx.beginPath()
      ctx.lineWidth = 3;
      ctx.strokeStyle = '#ffffff';
      ctx.fillStyle = this.config?.color || '#2866aa';
      const x = this.x + this.w / 2
      const y = this.y + this.h / 2
      ctx.arc(x, y, this.w / 2, 0, 2 * Math.PI)
      ctx.stroke()
      ctx.fill()
      if(this.config?.text){
        ctx.font = `${this.w*0.7}px Arial`
        ctx.fillStyle = '#ffffff';
        ctx.textAlign= "center"
        ctx.textBaseline = "middle"
        ctx.fillText(this.config?.text, x,y, this.w)
      }
      ctx.closePath()
    }
  }
  // 绘制笔记
  scene.push(new DrawPenPoints())
  // 布局线
  scene.push(new Line(xGap,0, winH))
  scene.push(new Line(winW - xGap,0, winH))
  scene.push(new Line(xGap,yGap, winW-xGap*2, true))
  scene.push(new Line(xGap,winH - yGap, winW-xGap*2, true))
  // 布局文字节点
  scene.push(new RectText(0,0,xGap,winH, "away side", true))
  scene.push(new RectText(winW - xGap,0,xGap,winH, "home Side", true))
  scene.push(new RectText(xGap,0,winW - xGap*2,yGap, "end zone"))
  scene.push(new RectText(xGap,winH - yGap,winW - xGap*2,yGap, "end zone"))
  // 飞盘占位
  const feipanSize = 50
  const feipanMax = new Array(7).fill(0)
  // 红方
  feipanMax.forEach((_,i,array)=> {
    const x = xGap + (winW - xGap * 2) / (array.length + 1) * (i+1) - feipanSize/2
    scene.push(new disc(x,yGap-feipanSize/2,{
      color: "#c8112a",
      text: i+1,
      size:feipanSize
    }))
  })
  // 蓝方
  feipanMax.forEach((_,i,array)=> {
    const x = xGap + (winW - xGap * 2) / (array.length + 1) * (i+1) - feipanSize/2
    scene.push(new disc(x,winH - yGap -feipanSize/2,{
      color: "#2866aa",
      text: i+1,
      size:feipanSize
    }))
  })
}
</script>

<style scoped lang="less">
.feipanLayout {

}
</style>
