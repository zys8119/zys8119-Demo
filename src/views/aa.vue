<template>
    <div class="aa">
        <div :class="`p-15 text-hex-$a`">asdasda</div>
    </div>
</template>

<script setup lang="ts">
const a = ref('f00')
</script>

<style  lang="less">
.aa {
}
</style>
