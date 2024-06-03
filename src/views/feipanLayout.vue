<template>
  <div class="feipanLayout w-full h-full bg-#71b52c abs-f"  @touchstart="touchstart">
    <CanvasInteraction @load="load"
                       :gap="0"
                       @pen="pen"
                       @penStart="penStart"
                       @penMove="penMove"
                       @penEnd="penEnd"
    ></CanvasInteraction>
    <div class="abs w-full lef-0 bottom-10px flex justify-center items-center">
      <n-space class="flex-1 p-x-15px" justify="space-between" align="center">
        <n-popover trigger="click">
          <template #trigger>
            <div class="w-30px h-30px b-rd-100% b-#fff b-solid b-2px bg-$penColor"></div>
          </template>
          <div class="flex flex-col gap-5px">
            <div v-for="(item, i) in colors" :key="i" class="w-30px h-30px b-rd-100% bg-$color flex-center abs-r" :style="{'--color':item}" @click="config.color = item">
              <div class="w-20px h-20px  b-rd-100%  b-solid b-2px b-#fff abs-center" v-if="config.color === item"></div>
            </div>
          </div>
        </n-popover>
        <n-popover trigger="click">
          <template #trigger>
            <div class="text-#fff flex-center text-30px bold">
              <svg-icon name="pen"></svg-icon>
              <svg-icon name="shangla" class="text-10px"></svg-icon>
            </div>
          </template>
          <div class="flex flex-col gap-5px">
            <div v-for="(item, i) in penType" :key="i" @click="config.penType = item.value">
              <div v-if="config.penType === item.value"></div>
            </div>
          </div>
        </n-popover>
        <div>sada</div>
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
  {name:"实线", value:'solid-line', icon:'solid-line'},
  {name:"虚线", value:'dashed-line', icon:'dashed-line'},
])
const config = ref({
  color:"#f00",
  penType:"pen"
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
  // ev.preventDefault()
}
const penPointsHistorys = ref([])
const penPoints = ref([])
const penStart = (obj, ev)=>{
  if(!obj){
    penPoints.value = [{
      x:ev.center.x*window.devicePixelRatio,
      y:ev.center.y*window.devicePixelRatio,
      color: config.value.color
    }]
  }
}
const penMove = (obj, ev)=>{
  if(!obj){
    penPoints.value.push({
      x:ev.center.x*window.devicePixelRatio,
      y:ev.center.y*window.devicePixelRatio,
      color: config.value.color
    })
  }
}
const penEnd = ()=>{
  penPointsHistorys.value.push(penPoints.value)
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
      drawPoint(ctx: CanvasRenderingContext2D, penPoints:Array<{x:number, y:number, color:string}>){
        ctx.beginPath()
        ctx.lineWidth = 5
        penPoints.forEach((p, i) => {
          ctx.strokeStyle = p.color
          if (i === 0) {
            ctx.moveTo(p.x, p.y)
            return
          }
          ctx.lineTo(p.x, p.y)
        })
        ctx.stroke()
        ctx.closePath()
      }
      draw(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement): Promise<any> | void {
        penPointsHistorys.value.forEach((penPoints, i) => {
          this.drawPoint(ctx, penPoints)
        })
        this.drawPoint(ctx, penPoints.value)
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
