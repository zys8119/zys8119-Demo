<template>
  <div class="feipanLayout w-full h-full bg-#71b52c abs-f"  @touchstart="touchstart">
    <CanvasInteraction @load="load" :gap="0" @pen="pen"></CanvasInteraction>
    <div class="abs w-full lef-0 bottom-0 flex justify-center items-center">
      asdas
    </div>
  </div>
</template>

<script setup lang="ts" title="飞盘战术布局">
import CanvasInteraction, {ObjectBaseType} from "@/src/components/CanvasInteraction"
const pen = (ev:{srcEven: MouseEvent }) => {
  ev?.srcEven?.preventDefault?.()
}
const touchstart =(ev:TouchEvent) => {
  ev.preventDefault()
}
const load = async ({ scene, ObjectBase, width, height, ctx}:{
  [key:string]:any
  scene:Array<ObjectBaseType>
})=>{

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
  const xGap = 100
  const yGap = 200
  const winW = window.innerWidth*window.devicePixelRatio
  const winH = window.innerHeight*window.devicePixelRatio
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
