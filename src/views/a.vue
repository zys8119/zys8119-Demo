<template>
    <div class="a">
        <div class="aa w-500px h-500px bg-#f00"></div>
    </div>
</template>

<script setup lang="ts">
onMounted(async ()=>{
    await fetch('https://www.baidu.com/asdasda')
})
</script>

<style scoped lang="less">
.a {
    .aa{
    }
}
</style>
