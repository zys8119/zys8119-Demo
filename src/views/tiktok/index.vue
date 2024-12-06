<template>
    <div class='index'>

    </div>
</template>
<script setup lang="ts">

onMounted(async () => {
    console.log(await $apis.tiktok.qrcode())
})
</script>
<style scoped lang="less">
.index {}
</style>