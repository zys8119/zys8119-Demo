<template>
    <div class="WindiCSS">
        <div class="abs box-border grid grid-cols-2 gap-10px">
            <div class="box row-span-2">1</div>
            <div class="box flex-1">2</div>
            <div class="box flex-1">3</div>
        </div>
    </div>
</template>

<script setup lang="ts" title="windicss" content="windicss 演示，用户class的快捷样式">
const size = ref(0)
</script>

<style scoped lang="less">
.WindiCSS {
    .box {
        background-color: theme("colors.blue.800");
    }
}
</style>
