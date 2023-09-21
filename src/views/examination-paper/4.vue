<template>
    <div class="4">
        vue实现刷新排序动画
        <div class="m-t-15">
            <button class="w-20 m-b-15px" @click="refresh">点击刷新</button>
            <ul class="b-#f00 b-solid" ref="ulRef">
                <li :ref="el=> item.el = el" class="lh-50px m-b-5px" :style="{background:item.color}" v-for="(item,i) in list" :key="i">{{item.name}}</li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
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
const animation = (start:number, end:number)=>{
    const el = list.value[start].el
    const endEl = list.value[end]?.el
    const top = el.getBoundingClientRect().top
    // ulRef.value.insertBefore(el, endEl)
    // const top2 = el.getBoundingClientRect().top
    // el.style.transform = `translateY(${top - top2}px)`
    // requestAnimationFrame(()=>{
    //     el.style.transition = `transform 1s`
    //     el.style.transform = `translateY(0px)`
    // })
}
const reload = (start:number, end:number)=>{
    const targets = list.value.reduce((a,b,k) => {
        const isOrder = start <= end
        if(isOrder && k >= start && k <= end || !isOrder && k >= end && k <= start){
            a.push({
                name:b.name,
                start:k,
                end:k === start ? end : isOrder ? k-1 : k+1
            })
        }
        return a
    },[])
    console.table(targets)
    targets.forEach(({start, end})=>{
        animation(start, end)
    })
}
const refresh = ()=>{
    reload(0,3)
}
onMounted(()=>{
    reload(0,4)
    reload(4,0)
})

</script>

<style scoped lang="less">
</style>
