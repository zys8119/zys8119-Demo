<template>
    <div class="a">
        <div>{{$config}}asdas</div>
        <div>{{$aaa.c}}</div>
    </div>
</template>

<script setup lang="ts">
onMounted(()=>{
    console.log($config.$type)
    console.log($aaa.c)
})
</script>

<style scoped lang="less">
.a {
}
</style>
