<template>
    <div class="a">
        <div>{{$config}}asdas</div>
    </div>
</template>

<script setup lang="ts">
onMounted(()=>{
    console.log($config.value)
})
</script>

<style scoped lang="less">
.a {
}
</style>
