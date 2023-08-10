<template>
    <div class="a">
        {{$config}}asdas
    </div>
</template>

<script setup lang="ts">
onMounted(()=>{
    console.log($config)
})
</script>

<style scoped lang="less">
.a {
}
</style>
