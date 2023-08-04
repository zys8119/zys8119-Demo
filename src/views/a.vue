<template>
    <div class="a">asdas
    </div>
</template>

<script setup lang="ts">
// 数组去重复
const aa = ref<{
    a?:string
    b?:1222
    [k:string]:any
}[]>([
    {
        name:'asdas'
    }
])
</script>

<style scoped lang="less">
.a {

}
</style>
