<template>
    <div class="aa">
        <div :class="`p-15 color-$AAA bg-['asdas']`" ref="a">asdasda</div>
    </div>
</template>

<script setup lang="ts">
const AAA = ref("#f00")
useCssVars(ctx => {
    return {
        AAA:AAA.value
    }
})
onMounted(()=>{
    setInterval(()=> {
        AAA.value = `#${new Array(6).fill(0).map(e=>Math.floor(Math.random()*9)).join('')}`
    }, 1000)
})
</script>

<style  lang="less">
.aa {
    //--AAA:#f00;
    background-image: ;
}
</style>
