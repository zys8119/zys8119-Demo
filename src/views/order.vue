<template>
  <div class="bb">
    <CanvasInteraction @load="load" @enter="enter" @leave="leave" :show-help="false"></CanvasInteraction>
  </div>
</template>

<script setup lang="ts" title="canvas订单流转图" content="用于对订单分组流转走向的可视化图">
import CanvasInteraction, {ObjectBaseType} from "../components/CanvasInteraction"
// 节点分组数据
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
  {id:14, name:"6-1", type:6},
  {id:15, name:"6-2", type:6},
  {id:16, name:"7-1", type:7},
])
// 连线数据关系
const lines = ref([
  { start:1, end:3 },
  { start:3, end:12 },
  { start:12, end:7 },
  { start:2, end:4 },
  { start:4, end:9 },
  { start:9, end:8 },
  { start:7, end:13 },
  { start:13, end:15 },
  { start:15, end:16 },
])
// 节点id映射
const nodeMap = computed<any>(()=>{
  return node.value.reduce((a, b) => {
    a[b.id] = b
    return a
  }, {})
})
// 分组
const group = computed<any>(()=>{
  return Object.entries(node.value.reduce((a, b) => {
    a[b.type] = a[b.type] || [];
    a[b.type].push(b)
    return a
  }, {})).map(([, v]) => v)
})
// 最大的分组数量
const groupMax = computed<number>(()=>{
  return Math.max.apply(null, group.value.map((v: any) => v.length))
})
// 高亮节点递归查询
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
// 鼠标高亮处理
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
// 鼠标进入
const enter = (o)=>{
  if(o){
    highlight(o.data, true)
  }
}
// 鼠标离开
const leave = (o)=>{
  if(o){
    highlight(o.data, false)
  }
}
const load = async ({ scene, ObjectBase, width, height, ctx}) => {
  // 联线对象
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


  // 节点对象
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
  // 绘制
  const nw = 120 // 节点宽度
  const nh = 50 // 节点高度
  const wOffset = 100 // 节点水平间距
  const hOffset = 30 // 节点垂直间距
  const startX = 0 // 起始点
  const startY = 0 // 起始点
  // 绘制节点
  group.value.forEach((e: any, cols:number) => {
    const offsetY = ((groupMax.value - e.length) * (nh +hOffset))/2
    e.forEach((item, k) => {
      scene.push(new NodeObject(startX + (nw + wOffset)*cols, startY + (nh +hOffset) *k + offsetY , nw, nh, item))
    })
  })
  // 绘制连线
  lines.value.forEach(l=>{
    const startNode = scene.find(n=>n.data.id === l.start)
    const endNode = scene.find(n=>n.data.id === l.end)
    if(startNode && endNode){
      scene.push(new Line(startNode, endNode, l))
    }
  })
  // 中心点纠正
  // const maxNode = group.value.find((e:any)=>e.length === groupMax.value) // 以最大分组长度为中心点
  // const maxNodeCenter = maxNode[Math.floor(groupMax.value/2)]
  const maxNode = group.value[Math.floor(group.value.length/2)] // 以分组中心点
  const maxNodeCenter = maxNode[Math.floor(maxNode.length/2)]
  const centerNode = scene.find(e=>e.data.id === maxNodeCenter.id)
  watchEffect(()=>{
    const [cx,cy] = [ width.value/2 - centerNode.w / 2,  height.value/2 - centerNode.h / 2]
    const [cxLen, cyLen] = [ cx - centerNode.x,  cy - centerNode.y]
    scene.forEach(n=>{
      n.x += cxLen
      n.y += cyLen
    })
  })
}


</script>

<style scoped lang="less">
.bb {

}
</style>
