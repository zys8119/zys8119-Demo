<template>
    <div class="4">
        vue实现刷新排序动画
        <div class="m-t-15">
            <button class="w-20 m-b-15px" @click="refresh">点击刷新</button>
            <ul class="b-#f00 b-solid" ref="ulRef" v-if="show">
                <li :ref="el=> item.el = el" class="lh-50px m-b-5px" :style="{background:item.color}" v-for="(item,i) in list" :key="i">{{item.name}}</li>
            </ul>
            <pre>{{JSON.stringify(list, null, 4)}}</pre>
        </div>
    </div>
</template>

<script setup lang="ts" title="排序动画">
const list = ref<Array<{
    name:string
    color?:string
    el:HTMLDivElement | null
}>>([
    {name:'A', color:"#ff0000", el:null},
    {name:"B", color:"#e5e5e5", el:null},
    {name:"C", color:"#e5e5e5", el:null},
    {name:"D", color:"#e5e5e5", el:null},
    {name:"E", color:"#e5e5e5", el:null},
])
const ulRef = ref<HTMLDivElement>()
const time = ref(0.5)
const show = ref(true)
const animation = (el:HTMLDivElement, index:number)=>{
    el.style.transform = `translateY(${index}px)`
    requestAnimationFrame(()=>{
        el.style.transition = `transform ${time.value}s`
        el.style.transform = 'translateY(0px)'
        el.style.removeProperty('transform')
    })
}
const updateSort = (map)=>{
    const newData = []
    list.value.forEach((e,k)=>{
        const Obj = map.find(e=>e.start === k)
        if(Obj){
            newData[Obj.end] = list.value[k]
        }else {
            newData[k] = e
        }
    })
    list.value = newData
    show.value = false
    nextTick(()=>{
        show.value = true
    })
}
const reload = (start:number, end:number)=>{
    const isOrder = start <= end
    const targets = list.value.reduce((a,b,k) => {
        if(isOrder && k >= start && k <= end || !isOrder && k >= end && k <= start){
            a.push({
                name:b.name,
                el:b.el,
                start:k,
                end:k === start ? end : isOrder ? k-1 : k+1
            })
        }
        return a
    },[])
    const startObj = isOrder ? targets[0] : targets[targets.length - 1]
    const el = list.value[startObj.start].el
    const endEl = list.value[startObj.end+(isOrder ? 1 : 0)]?.el
    const startTops = targets.map(e => {
        return e.el.getBoundingClientRect().top
    })
    ulRef.value.insertBefore(el, endEl)
    const endTops = targets.map(e => {
        return e.el.getBoundingClientRect().top
    })
    startTops.forEach((e, k)=>{
        const obj = targets[k]
        animation(obj.el, e - endTops[k])
    })
    setTimeout(()=>{
        updateSort(targets)
    }, time.value*1000)
}
const refresh = ()=>{
    reload(Math.floor(Math.random()*list.value.length),Math.floor(Math.random()*list.value.length))
}

</script>

<style scoped lang="less">
</style>
