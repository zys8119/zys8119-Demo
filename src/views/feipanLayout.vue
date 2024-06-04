<template>
  <div class="feipanLayout w-full h-full bg-$canvasBg abs-f">
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
    <div class="abs w-full lef-0 bottom-10px flex justify-center items-center tools">
      <n-space class="flex-1 p-x-15px" justify="space-between" align="center">
        <n-popover trigger="click" :show="showColor">
          <template #trigger>
            <div class="w-30px h-30px b-rd-100% b-#fff b-solid b-2px bg-$penColor tools-item" @click="showColor = !showColor,showPen = false"></div>
          </template>
          <div class="flex flex-col gap-5px">
            <div v-for="(item, i) in colors" :key="i" class="w-30px h-30px b-rd-100% bg-$color flex-center abs-r" :style="{'--color':item}" @click="config.color = item, showColor = false">
              <div class="w-20px h-20px  b-rd-100%  b-solid b-2px b-#fff abs-center" v-if="config.color === item"></div>
            </div>
          </div>
        </n-popover>
        <n-popover trigger="click" :show="showPen">
          <template #trigger>
            <div class="flex-center tools-item" @click="showPen = !showPen, showColor = false">
              <div v-for="(item, i) in penType" :key="i"  class="text-#fff flex-center text-30px bold"  v-show="config.penType === item.value">
                <svg-icon :name="item.icon"></svg-icon>
                <svg-icon name="shangla" class="text-10px"></svg-icon>
              </div>
            </div>
          </template>
          <div class="flex gap-15px flex-col">
            <div class="flex-center !justify-start gap-5px text-#999" :class="{
              '!text-#f00':config.penType === item.value,
              'flex-row-reverse':horizontalLayout,
              'text-30px':horizontalLayout,
            }" v-for="(item, i) in penType" :key="i" @click="config.penType = item.value, showPen = false">
              <svg-icon :name="item.icon" :style="{transform:horizontalLayout ? 'rotate(90deg)' : null}"></svg-icon>
              <div v-if="!horizontalLayout">{{item.name}}</div>
            </div>
          </div>
        </n-popover>
        <div class="text-#fff text-20px tools-item" @click="clear"><svg-icon name="clear"></svg-icon></div>
        <div class="text-#fff text-25px tools-item" @click="addRoadblock"><svg-icon name="roadblock"></svg-icon></div>
        <div class="text-#fff text-25px tools-item" @click="addRoadblock"><svg-icon name="rotatingScreen"></svg-icon></div>
        <div class="text-#fff text-20px tools-item" @click="download"><svg-icon name="download"></svg-icon></div>
      </n-space>
    </div>
  </div>
</template>

<script setup lang="ts" title="飞盘战术布局">
import CanvasInteraction, {ObjectBaseType} from "@/src/components/CanvasInteraction"
import SvgIcon from "@/src/components/svg-icon";
import logo from "@/src/assets/logo.png";
import closeLogo from "@/src/assets/close.png";
import roadblockFill from "@/src/assets/roadblock.png";
import roadblockDelete from "@/src/assets/delete.png";
const config = ref({
  color:"#f00",
  penType:"pen",
  horizontal:true
})
const canvasBg = ref('#71b52c')
// 边界设置
const xGap = 100
const yGap = 300
const winW = window.innerWidth*window.devicePixelRatio
const winH = window.innerHeight*window.devicePixelRatio - 54*window.devicePixelRatio
const horizontalLayout = computed(()=> config.value.horizontal)
// 飞盘占位
const feipanSize = 80
const feipanMax = new Array(7).fill(0)
const feipanOffset = 100
const sceneObjects = ref([])
const canvas = ref()
const colors = ref([
    "#f00",
    "#0f0",
    "#00f",
    "#ff0",
    "#0ff",
    "#f0f",
    "#000",
    "#fff",
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
useCssVars(()=>{
  return {
    "penColor":config.value.color,
    "canvasBg":canvasBg.value,
    "horizontalLayoutRotate":horizontalLayout.value ? '90deg' : '0deg'
  }
})
const showColor = ref(false)
const showPen = ref(false)
const clearShowPopover = ()=>{
  showColor.value = false
  showPen.value = false
}
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
const isMove = ref(false)
const moveObject = ref(null)
const penPoints = ref([])
const penStart = (obj, ev)=>{
  clearShowPopover()
  isMove.value = false
  moveObject.value = null
  if(!obj){
    penPoints.value = [{
      x:ev.center.x*window.devicePixelRatio,
      y:ev.center.y*window.devicePixelRatio,
      color: config.value.color,
      type:config.value.penType,
    }]
  }
  if(obj){
    moveObject.value = obj
  }
}
const penMove = (obj, ev)=>{
  isMove.value = true
  if(!obj){
    penPoints.value.push({
      x:ev.center.x*window.devicePixelRatio,
      y:ev.center.y*window.devicePixelRatio,
      color: config.value.color,
      type:config.value.penType,
    })
  }
  if(obj){
    moveObject.value = obj
  }
}
const penEnd = (obj)=>{
  if(['pen','eraser'].includes(config.value.penType)) {
    penPointsHistorys.value.push(penPoints.value)
  }else {
    if(penPoints.value.length < 2){return}
    penPointsHistorys.value.push([penPoints.value[0], penPoints.value[penPoints.value.length - 1]])
  }
  penPoints.value = []
  deleteRoadblock()
  isMove.value = false
  moveObject.value = null
}
const clear = ()=>{
  if(penPointsHistorys.value.length === 0 || penPointsHistorys.value[penPointsHistorys.value.length - 1]?.[0]?.type === 'clear'){return}
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
const download = ()=>{
  const a = document.createElement('a')
  a.href = canvas.value.toDataURL()
  a.download = '飞盘战术图.png'
  a.click()
  a.remove()
}
// 路障集合
const roadblocks = ref<Array<{
  x:number,
  y:number,
  id:any
}>>([])
const roadblocksMapCache = new Map()
const addRoadblock = ()=>{
  const data = {
    x:(winW-feipanSize)/2,
    y:(winH-feipanSize)/2,
    id:Date.now().toString()
  }
  if(horizontalLayout.value){
      data.x += feipanSize+15
  }
  roadblocks.value.push(data)
}
const deleteRoadblock = ()=>{
  if(moveObject.value?.type === "roadblock" && sceneObjects.value.find(e=>e.type === 'RoadblockDelete').isDelete){
    const roadblock_id = moveObject.value.roadblock_id
    roadblocks.value.splice(roadblocks.value.findIndex(e=>e.id === roadblock_id),1)
    roadblocksMapCache.delete(roadblock_id)
    sceneObjects.value.splice(sceneObjects.value.findIndex(e=>e.roadblock_id === roadblock_id),1)
  }
}
const load = async ({ scene, ObjectBase, canvas:canvasObj}:{
  [key:string]:any
  scene:Array<ObjectBaseType>
})=>{
  sceneObjects.value = scene
  canvas.value = canvasObj
  class DrawCanvasInit extends ObjectBase implements ObjectBaseType {
    type:'DrawCanvasInit'
    constructor() {
      super();
    }
    draw(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement): Promise<any> | void {
      ctx.beginPath()
      ctx.fillStyle = canvasBg.value
      ctx.rect(0,0,canvas.width, canvas.height)
      ctx.fill()
      ctx.closePath()
    }

    isInside(): boolean {
      return  false
    }
  }
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
        }else {
          ctx.setLineDash([]);
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
        ctx.lineWidth = 3
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
          ctx.rotate(horizontalLayout.value ? Math.PI/2 :-Math.PI/2)
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
  class Disc extends ObjectBase implements ObjectBaseType {
    type = 'disc'
    size = 0
    logoOffset = [0,0]
    constructor(public x:number, public y:number,public config?: Partial<{
      size:number
      color:string
      strokeStyle:string
      text:any
      logo:any
      logoSize:number
      isInside:boolean
      lineWidth:number
      logoOffsetX:number
      logoOffsetY:number
      globalAlpha:number
    }>) {
      super();
      this.size = this.config?.size || 30
      this.logoOffset = [this.config?.logoOffsetX || 0,this.config?.logoOffsetY || 0]
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
    isInside(): boolean {
      if(typeof this.config?.isInside === 'boolean'){
        return this.config.isInside
      }
      return  super.isInside()
    }

    assetsMap = new Map()
    async loadImage(url){
      if(this.assetsMap.has(url)){
        return this.assetsMap.get(url)
      }
      return new Promise(resolve => {
        const img = new Image()
        this.assetsMap.set(url, img)
        img.src = url
        img.onload = () => {
            resolve(img)
        }
        img.onerror = ()=>{
          resolve(img)
        }
      })
    }
    async draw(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) {
      ctx.save()
      const lineWidth = typeof this.config?.lineWidth === 'number' ? this.config?.lineWidth : (this.config?.lineWidth || 4)
      ctx.globalAlpha = typeof this.config?.globalAlpha === 'number' ? this.config?.globalAlpha : (this.config?.globalAlpha || 1)
      ctx.beginPath()
      ctx.lineWidth = lineWidth;
      ctx.strokeStyle = this.config?.strokeStyle || '#ffffff';
      ctx.fillStyle = this.config?.color || '#2866aa';
      const x = this.x + this.w / 2
      const y = this.y + this.h / 2
      ctx.arc(x, y, this.w / 2, 0, 2 * Math.PI)
      if(typeof lineWidth === 'number' && lineWidth !== 0){
        ctx.stroke()
      }
      ctx.fill()
      if(this.config?.logo){
        const logo = await this.loadImage(this.config?.logo)
        const logoSize = this.config?.logoSize || 0.8
        const logoSizeMerge = 1 - logoSize
        const w = (this.w*logoSizeMerge)/2
        const h = (this.h*logoSizeMerge)/2
        if(horizontalLayout.value){
          ctx.translate(this.x+this.w*logoSize*0.5+w+this.logoOffset[0],this.y+this.h*logoSize*0.5+h+this.logoOffset[1])
          ctx.rotate(Math.PI/2)
          ctx.drawImage(logo as any,-this.w*logoSize*0.5,-this.h*logoSize*0.5,this.w*logoSize,this.h*logoSize)
        }else {
          ctx.drawImage(logo as any,this.x + w+this.logoOffset[0],this.y + h+this.logoOffset[1],this.w*logoSize,this.h*logoSize)
        }
      }
      if(this.config?.text){
        ctx.font = `${this.w*0.7}px Arial`
        ctx.fillStyle = '#ffffff';
        ctx.textAlign= "center"
        ctx.textBaseline = "middle"
        if(horizontalLayout.value){
          ctx.translate(x,y)
          ctx.rotate(Math.PI/2)
          ctx.fillText(this.config?.text, 0,0, this.w)
        }else {
          ctx.fillText(this.config?.text, x,y, this.w)
        }
      }
      ctx.closePath()
      ctx.globalAlpha = 1
      ctx.restore()
    }
  }
  class Roadblock extends ObjectBase implements ObjectBaseType {
    type = 'roadblock'
    constructor(public roadblocks:Array<{
      x:number,
      y:number,
      id:any
    }>) {
      super();
    }
    async draw(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement){
      ctx.beginPath()
      this.roadblocks.forEach(e=>{
        if(e.id && !roadblocksMapCache.has(e.id)) {
          const object = new Disc(e.x,e.y,{
            color: "#0000",
            logo: roadblockFill,
            size:feipanSize,
            lineWidth:0
          })
          object.type = 'roadblock'
          object.roadblock_id = e.id
          scene.push(object)
          roadblocksMapCache.set(e.id, object)
        }
      })
      ctx.closePath()
    }
  }
  class RoadblockDelete extends Disc implements ObjectBaseType {
    type = 'RoadblockDelete'
    isDelete = false
    isInside(){
      return false
    }
    isShowHelp(): boolean {
      return false
    }

    constructor(public x:number, public y:number,public config?:Record<any, any>) {
      super(x,y,config);
    }
    async draw(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) {
      this.isDelete = super.isInside()
      ctx.save()
      ctx.beginPath()
      this.config.globalAlpha = 0;
      if(moveObject.value && moveObject.value.type === 'roadblock'){
        this.config.globalAlpha = this.isDelete ? 1 : .5;
      }
      await super.draw(ctx, canvas);
      ctx.closePath()
      ctx.globalAlpha = 1.0;
      ctx.restore()
    }
  }
  // canvas 背景初始化
  scene.push(new DrawCanvasInit())
  scene.push(new Disc(winW/4,(winH -winW/2) /2,{
    color: "#548a2a",
    logo: logo,
    size:winW/2,
    isInside:false,
    lineWidth:0,
    globalAlpha:0.1
  }))
  // 绘制笔记
  scene.push(new DrawPenPoints())
  if(horizontalLayout.value){
    // 布局文字节点
    scene.push(new Line(winW/2,0, winH))
    scene.push(new Line(0,winH, winW, true))
    scene.push(new RectText(winW - xGap,0,xGap,winH, "home Side", true))
    // 红方
    feipanMax.forEach((_,i,array)=> {
      const y = xGap + (winH - xGap * 2) / (array.length + 1) * (i+1) - feipanSize/2
      scene.push(new Disc(winW/4*3, y, {
        color: "#c8112a",
        text: i + 1,
        size: feipanSize
      }))
    })
    // 蓝方
    feipanMax.forEach((_,i,array)=> {
      const y = xGap + (winH - xGap * 2) / (array.length + 1) * (i+1) - feipanSize/2
      scene.push(new Disc(winW/4,y,{
        color: "#2866aa",
        text: i+1,
        size:feipanSize
      }))
    })
    // 黄色主飞盘,logo
    scene.push(new Disc((winW - feipanSize)/2,(winH - feipanSize)/2,{
      color: "#fbff33",
      logo: logo,
      size:feipanSize,
      lineWidth:0,
      logoSize:0.7
    }))
    // 路障回收删除
    scene.push(new RoadblockDelete(winW - 150,-150,{
      color: "#f00",
      logo: roadblockDelete,
      size:300,
      lineWidth:0,
      logoSize:0.25,
      logoOffsetX:-55,
      logoOffsetY:55
    }))
    // 路障
    scene.push(new Roadblock(roadblocks.value))
    return
  }
  // 布局线
  scene.push(new Line(xGap,0, winH))
  scene.push(new Line(winW - xGap,0, winH))
  scene.push(new Line(xGap,yGap, winW-xGap*2, true))
  scene.push(new Line(xGap,winH - yGap, winW-xGap*2, true))
  scene.push(new Line(0,0, winH))
  scene.push(new Line(winW,0, winH))
  scene.push(new Line(0,0, winW, true))
  scene.push(new Line(0,winH, winW, true))
  // 布局文字节点
  scene.push(new RectText(0,0,xGap,winH, "away side", true))
  scene.push(new RectText(winW - xGap,0,xGap,winH, "home Side", true))
  scene.push(new RectText(xGap,0,winW - xGap*2,yGap, "end zone"))
  scene.push(new RectText(xGap,winH - yGap,winW - xGap*2,yGap, "end zone"))
  // 红方
  feipanMax.forEach((_,i,array)=> {
    const x = xGap + (winW - xGap * 2) / (array.length + 1) * (i+1) - feipanSize/2
    if(i === 3) {
      scene.push(new Disc(x,yGap-feipanSize/2 + feipanSize + feipanOffset,{
        color: "#0000",
        logo: closeLogo,
        size:feipanSize,
        isInside:false,
        lineWidth:0
      }))
    }
    setTimeout(()=> {
      scene.push(new Disc(x, yGap - feipanSize / 2, {
        color: "#c8112a",
        text: i + 1,
        size: feipanSize
      }))
    })
  })
  // 蓝方
  feipanMax.forEach((_,i,array)=> {
    const x = xGap + (winW - xGap * 2) / (array.length + 1) * (i+1) - feipanSize/2
    if(i === 3){
      // 黄色主飞盘,logo
      scene.push(new Disc(x,winH - yGap -feipanSize/2 - feipanSize - 30,{
        color: "#fbff33",
        logo: logo,
        size:feipanSize,
        lineWidth:0,
        logoSize:0.7
      }))
      scene.push(new Disc(x,winH - yGap -feipanSize/2 - feipanSize - 30 - feipanSize - feipanOffset,{
        color: "#0000",
        logo: closeLogo,
        size:feipanSize,
        isInside:false,
        lineWidth:0
      }))
    }
    setTimeout(()=>{
      scene.push(new Disc(x,winH - yGap -feipanSize/2,{
        color: "#2866aa",
        text: i+1,
        size:feipanSize
      }))
    })
  })
  // 路障回收删除
  scene.push(new RoadblockDelete(winW - 150,-150,{
    color: "#f00",
    logo: roadblockDelete,
    size:300,
    lineWidth:0,
    logoSize:0.25,
    logoOffsetX:-55,
    logoOffsetY:55
  }))
  // 路障
  scene.push(new Roadblock(roadblocks.value))
}
</script>

<style scoped lang="less">
.feipanLayout {
  .tools{
    .tools-item{
      transform: rotate(var(--horizontalLayoutRotate));
    }
  }
}
</style>
