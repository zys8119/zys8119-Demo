<template>
    <div class='xyflowNode text-#fff bg-#f00 h-300px'>{{ node.data.title }}</div>
</template>
<script setup lang="ts">
const props = defineProps({
    node: {
        type: Object,
        default: () => ({})
    }
})

</script>
<style scoped lang="less">
.xyflowNode {}
</style>