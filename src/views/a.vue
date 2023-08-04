<template>
    <div class="a">
        <div v-for="item, i in aa" :key="i">{{ i }}</div>
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
