<template>
    <div class='scroll of-hidden h-$height'>
        <div class="h-0px of-hidden">
            <div ref="refHidden">
                <slot></slot>
            </div>
        </div>
        <div class="scroll-content">
            <slot></slot>
            <slot></slot>
        </div>
    </div>
</template>
<script setup lang="ts">
const refHidden = ref<HTMLDivElement>()
const {height} = useElementBounding(refHidden)
const props = withDefaults(defineProps<Partial<{
    duration:number
    animationName:string
    createKeyframes:(data:{
        el:HTMLElement,
        index:number
        total:number
        list:HTMLDivElement[]
        keyframes:number
        props:Record<any,any>
        height:number
        rect:DOMRect
    })=>number
}>>(),{
    duration:8000,
    step:8000,
    animationName:"scroll-content-animation",
    createKeyframes:({rect}:any)=>{
        return -rect.top
    }
})
const children = ref<HTMLDivElement[]>([])
const animation = computed(()=>{
    return `${Math.ceil(height.value/50)*1000}ms infinite`
})
useCssVars(()=>{
    return {
        height:height.value+'px',
        animation:animation.value
    }
})
const css = computed(()=> `
@keyframes ${props.animationName} {\n${children.value.map((el, index)=>{
    const total = children.value.length
    const keyframes = index == total-1 ? 100 : Math.floor(index/total*100)
    return `${keyframes}%{
        transform:translateY(${props.createKeyframes({
            keyframes,
            el,
            index,
            total,
            list:children.value,
            props,
            height:height.value,
            rect:el.getBoundingClientRect(),
        })}px)
    }`
}).join("\n")}\n}
`)
// watchEffect(()=>{
//     console.log(css.value,children.value)
// })
// useStyleTag(css,{id:"scroll-content-animation"})
const addEventListenerChildList = ()=>{
    children.value = Array.from((refHidden.value.querySelectorAll("& > *") || []) as HTMLDivElement[])
}
useMutationObserver(refHidden,addEventListenerChildList,{
    childList:true,
})
onMounted(addEventListenerChildList)
</script>
<style scoped lang="less">

.scroll{
    @keyframes scroll-content-animation{
        form{
            transform: translateY(0);
        }
        to{
            transform: translateY(calc(var(--height) * -1));
        }
    }
    .scroll-content{
        animation: scroll-content-animation var(--animation);
    }
    // animation: name duration timing-function delay iteration-count direction fill-mode;
}
</style>