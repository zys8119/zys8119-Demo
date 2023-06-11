<template>
  <div class="bb">
    <CanvasInteraction @load="load" @enter="enter" @leave="leave" :show-help="false"></CanvasInteraction>
  </div>
</template>

<script setup lang="ts">
import CanvasInteraction, {ObjectBaseType} from "../components/CanvasInteraction"
const node = ref<any>([
  {id:1, name:"1-1", type:1},
  {id:2, name:"1-2", type:1},
  {id:3, name:"2-1", type:2},
  {id:4, name:"2-2", type:2},
  {id:5, name:"3-1", type:3},
  {id:6, name:"3-3", type:3},
  {id:7, name:"4-1", type:4},
  {id:8, name:"4-2", type:4},
  {id:9, name:"3-2", type:3},
  {id:10, name:"3-3", type:3},
  {id:11, name:"3-4", type:3},
  {id:12, name:"3-5", type:3},
  {id:13, name:"5-1", type:5},
])

const lines = ref([
  {
    start:1,
    end:3
  },
  {
    start:3,
    end:12
  },
  {
    start:12,
    end:7
  },
  {
    start:2,
    end:4
  },
  {
    start:4,
    end:9
  },
  {
    start:9,
    end:8
  },
  {
    start:7,
    end:13
  }
])
const nodeMap = computed(()=>{
  return node.value.reduce((a, b) => {
    a[b.id] = b
    return a
  }, {})
})
const group = computed(()=>{
  return Object.entries(node.value.reduce((a, b) => {
    a[b.type] = a[b.type] || [];
    a[b.type].push(b)
    return a
  }, {})).map(([, v]) => v)
})
const groupMax = computed(()=>{
  return Math.max.apply(null, group.value.map((v: any) => v.length))
})
const highlightByNode = (data:any, cache = new WeakMap())=>{
  cache.set(data, true)
  data.strokeStyle = '#f00'
  lines.value.forEach((l:any)=>{
    if(l.end === data.id || l.start === data.id){
      l.strokeStyle = '#f00'
      let node = null
      if(l.end === data.id){
        node = nodeMap.value[l.start]
      }else
      if(l.start === data.id){
        node = nodeMap.value[l.end]
      }
      if(node && !cache.get(node)){
        highlightByNode(node, cache)
      }
    }
  })
}
const highlight = (data:any, isIn:boolean)=> {
  lines.value.forEach((l:any)=>{
    l.strokeStyle = '#000'
  })
  node.value.forEach((l:any)=>{
    l.strokeStyle = '#000'
  })
  if(!isIn){
    return
  }
  highlightByNode(data)
}
const enter = (o)=>{
  if(o){
    highlight(o.data, true)
  }
}
const leave = (o)=>{
  if(o){
    highlight(o.data, false)
  }
}
const load = async ({ scene, ObjectBase, width, height, ctx}) => {
  class Line extends ObjectBase implements ObjectBaseType {
    type = 'line'
    get strokeStyle(){
      return this.data.strokeStyle || '#000'
    }
    get xx(){
      return this.startN.x+this.startN.w
    }

    get yy(){
      return this.startN.y+this.startN.h/2
    }
    get ww(){
      return this.endN.x - this.startN.x - this.endN.w
    }
    get hh(){
      return this.endN.y - this.startN.y
    }
    constructor(public startN:NodeObject, public endN:NodeObject, public data:any) {
      super();
    }

    async draw(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) {
      ctx.beginPath()
      ctx.strokeStyle = this.strokeStyle
      ctx.lineWidth = 2
      ctx.moveTo(this.xx, this.yy)
      const [a, b, c, d] = [.18, .61, .84, .47]
      ctx.bezierCurveTo(this.xx + this.ww * a, this.yy + this.hh * b, this.xx + this.ww * c, this.yy + this.hh * d, this.xx + this.ww, this.yy + this.hh)
      ctx.stroke()
    }
  }



  class NodeObject extends ObjectBase implements ObjectBaseType{
    type = 'node'
    get strokeStyle(){
      return this.data?.strokeStyle || '#000'
    }
    constructor(public x:number, public y:number, public w, public h, public data:any) {
      super();
    }

    async draw(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement){
      ctx.beginPath()
      ctx.strokeStyle = this.strokeStyle
      ctx.lineWidth = 2
      ctx.rect(this.x, this.y, this.w, this.h)
      ctx.stroke()
      ctx.textAlign = 'center'
      ctx.font = '28px 微软雅黑'
      ctx.textBaseline = 'middle'
      ctx.fillText(`${this.data.name.toString()}(${this.data.id.toString()})`, this.x+this.w/2, this.y+this.h/2,this.w)
      ctx.closePath()
    }
  }

  const nw = 120
  const nh = 50
  const wOffset = 100
  const hOffset = 30
  const startX = 0
  const startY = 0

  group.value.forEach((e: any, cols:number) => {
    const offsetY = ((groupMax.value - e.length) * (nh +hOffset))/2
    e.forEach((item, k) => {
      scene.push(new NodeObject(startX + (nw + wOffset)*cols, startY + (nh +hOffset) *k + offsetY , nw, nh, item))
    })
  })
  lines.value.forEach(l=>{
    scene.push(new Line(
        scene.find(n=>n.data.id === l.start),
        scene.find(n=>n.data.id === l.end),
        l
    ))
  })
}


</script>

<style scoped lang="less">
.bb {

}
</style>
