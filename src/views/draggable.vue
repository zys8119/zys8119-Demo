<template>
    <div class="draggable">
      <div class="b-#d8d8d8 b-solid b-1px b-rd-5px p-y-15px" ref="ulRef" v-if="show" @dragenter.prevent="dragenter" @dragover.prevent="()=> void 0"  @drop.prevent="drop">
        <div data-target @dragstart="dragstart" :ref="el=> item.el = el" class="m-b-5px p-x-15px" draggable="true" v-for="(item,i) in list" :key="i">
          <slot :data="item" :index="i">
            {{item[fieldName || 'name']}}
          </slot>
        </div>
      </div>
    </div>
</template>

<script setup lang="ts">
import {debounce} from "lodash"
const props = defineProps<{
  modelValue:Array<any>
  // 单位秒
  time?:number
  await?:boolean
  fieldName?:boolean
}>()
const list = ref<Array<{
    name:string
    color?:string
    el:HTMLDivElement | null
}>>([])
watchEffect(async ()=>{
  list.value = props.modelValue
})
const emits = defineEmits<{
  (e:'update:modelValue', data:Array<any>):void
}>()
const ulRef = ref<HTMLDivElement>() as Ref<HTMLDivElement>
const time = computed(()=> props.time || 0.5)
const show = ref(true)
const isDropEnd = ref(true)
const dragstartIndex = ref(-1)
const dragenterIndex = ref(-1)
const _debounce = debounce((key)=>{
  reload(dragstartIndex.value, key)
})
const dragstart = (ev:DragEvent)=>{
  isDropEnd.value = false
  dragstartIndex.value = list.value.findIndex((e:any)=>e.el === ev.target)
}
const dragenter = (ev:DragEvent)=>{
  const height = ulRef.value.getBoundingClientRect().top
  const {key}  =list.value.map((e:any)=>e.el.getBoundingClientRect().height).reduce((a,b, key)=>{
    if(a.value+b <= ev.clientY - height){
      a.value += b
      a.key = key
    }
    return  a
  }, {key:0, value:0})
  dragenterIndex.value = key
  _debounce(dragenterIndex.value)
}
const drop = ()=>{
  isDropEnd.value = true
  _debounce(dragenterIndex.value)
}
const animation = (el:HTMLDivElement, index:number, isStart?:boolean)=>{
    el.style.transform = `translateY(${index}px)`
    if(isStart){
      el.style.background = "#e8e8e8"
    }
    requestAnimationFrame(()=>{
        el.style.transition = `transform ${time.value}s`
        el.style.transform = 'translateY(0px)'
        el.offsetTop;
        requestAnimationFrame(()=> {
          el.style.removeProperty('transform')
          setTimeout(() => {
            el.style.removeProperty('transition')
          }, time.value * 1000)
        })
    })
}
const updateSort = (map:any)=>{
    const newData:any = []
    list.value.forEach((e,k)=>{
        const Obj = map.find((e:any)=>e.start === k)
        if(Obj){
            newData[Obj.end] = list.value[k]
        }else {
            newData[k] = e
        }
    })
    list.value = newData
    emits('update:modelValue', list.value)
    show.value = false
    nextTick(()=>{
        show.value = true
    })
}
const endOld = ref(0)
const reload = (start:number, end:number)=>{
    const isOrder = start <= end
    const targets = list.value.reduce((a,b,k) => {
        const isDownToDownBool = end > endOld.value
        const isDownToDown = isDownToDownBool && k >= start && k <= end
        const isDownToUp = !isDownToDownBool && k >= start && k <= end || k === endOld.value
        const isUpToDown = !isDownToDownBool && k >= end && k <= start
        const isUpToUp = isDownToDownBool && k >= end && k <= start || k === endOld.value
        if(isOrder && (isDownToDown || isDownToUp) || !isOrder && (isUpToDown || isUpToUp)){
            a.push({
                name:b.name,
                el:b.el,
                start:k,
                end:k === start ? end : isOrder ? k-1 : k+1
            })
        }
        return a
    },[] as any)
    const startObj = isOrder ? targets[0] : targets[targets.length - 1]
    const el = list.value[startObj.start].el as HTMLDivElement
    const endEl = list.value[startObj.end+(isOrder ? 1 : 0)]?.el
    const startTops = targets.map((e:any) => {
        return e.el.getBoundingClientRect().top
    })
    ulRef.value.insertBefore(el, endEl)
    const endTops = targets.map((e:any) => {
        return e.el.getBoundingClientRect().top
    })
    startTops.forEach((e:any, k:number)=>{
        const obj = targets[k]
        animation(obj.el, e - endTops[k], obj.start === start)
    })
    endOld.value = end
    if(isDropEnd.value){
      if(props.await){
        setTimeout(()=>{
          updateSort(targets)
        }, time.value*1000)
      }else {
        updateSort(targets)
      }
    }
}

</script>

<style scoped lang="less">
.draggable{
  *{
    user-select: none;
    cursor: pointer;
  }
}
</style>
