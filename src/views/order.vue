<template>
  <div class="bb">
    <CanvasInteraction @load="load"></CanvasInteraction>
  </div>
</template>

<script setup lang="ts">
import CanvasInteraction, {ObjectBaseType} from "../components/CanvasInteraction"

const load = async ({ObjectsClass, scene, ObjectBase}) => {
  class Line extends ObjectBase implements ObjectBaseType {
    type = 'line'
    constructor(public x:number, public y:number, public w, public h, public data:any) {
      super();
    }

    async draw(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement): Promise<any> | void {
      ctx.beginPath()
      ctx.lineWidth = 2
      ctx.moveTo(this.x, this.y)
      const [a, b, c, d] = [.18, .61, .84, .47]
      ctx.bezierCurveTo(this.x + this.w * a, this.y + this.h * b, this.x + this.w * c, this.y + this.h * d, this.x + this.w, this.y + this.h)
      ctx.stroke()
    }
  }



  class NodeObject extends ObjectBase implements ObjectBaseType{
    type = 'node'
    constructor(public x:number, public y:number, public w, public h, public data:any) {
      super();
    }
    async draw(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement){
      ctx.beginPath()
      ctx.strokeStyle = "#f00"
      ctx.lineWidth = 2
      ctx.rect(this.x, this.y, this.w, this.h)
      ctx.stroke()
      ctx.textAlign = 'center'
      ctx.font = '28px 微软雅黑'
      ctx.textBaseline = 'middle'
      ctx.fillText(this.data.name.toString(), this.x+this.w/2, this.y+this.h/2,this.w)
      ctx.closePath()
    }
  }
  const lines = [
    {
      start:1,
      end:3
    },
    {
      start:3,
      end:9
    },
    {
      start:9,
      end:7
    }
  ]
  const node = [
    {id:1, name:"1-1", type:1},
    {id:2, name:"1-2", type:1},
    {id:3, name:"2-1", type:2},
    {id:4, name:"2-2", type:2},
    {id:5, name:"3-1", type:3},
    {id:6, name:"3-3", type:3},
    {id:7, name:"4-1", type:4},
    {id:8, name:"4-2", type:4},
    {id:9, name:"3-2", type:3},
  ]
  const group = Object.entries(node.reduce((a, b) => {
    a[b.type] = a[b.type] || [];
    a[b.type].push(b)
    return a
  }, {})).map(([, v]) => v)
  const groupMax = Math.max.apply(null, group.map((v: any) => v.length))
  const nw = 120
  const nh = 50
  const wOffset = 100
  const hOffset = 30
  const startX = 200
  const startY = 10
  group.forEach((e: any, cols:number) => {
    const offsetY = ((groupMax - e.length) * (nh +hOffset))/2
    e.forEach((item, k) => {
      scene.push(new NodeObject(startX + (nw + wOffset)*cols, startY + (nh +hOffset) *k + offsetY , nw, nh, item))
    })
  })
  lines.forEach(l=>{
    const startN = scene.find(n=>n.data.id === l.start)
    const endN = scene.find(n=>n.data.id === l.end)
    scene.push(new Line(startN.x+startN.w, startN.y+startN.h/2, endN.x - startN.x - endN.w, endN.y - startN.y, l))
  })
}


</script>

<style scoped lang="less">
.bb {

}
</style>
