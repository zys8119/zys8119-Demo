<template>
    <div class="WindiCSS">
        <div class="absolute w-1/1 h-1/1 box-border grid grid-cols-2 gap-10px">
            <div v-for="i in 3" :key="i" class="box !bg-$AAA flex justify-center items-center text-52 color-#fff" :class="{
                'row-span-2':i === 1,
                'flex-1':i !== 1
            }">1</div>
        </div>
    </div>
</template>

<script setup lang="ts" title="windicss" content="windicss 演示，用户class的快捷样式, vite建议使用 UnoCss">
const size = ref(0)
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

<style scoped lang="less">
.WindiCSS {
    .box {
        transition: all ease-in-out 1s;
    }
}
</style>
