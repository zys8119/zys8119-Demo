<template>
    <div class="a">
        asdas
    </div>
</template>

<script setup lang="ts">
const a = ()=> Promise.resolve(1)
const b = ()=> Promise.resolve(a)
const c = async ()=> {
    return await b()
}
onMounted(async ()=>{
    console.log(await c())
})
</script>

<style scoped lang="less">
.a {
}
</style>
