<template>
    <div class='Icon'>
        <svg-icon :name="name" />
    </div>
</template>
<script setup lang="ts">
import SvgIcon from '../svg-icon';
withDefaults(
    defineProps<{
        name: string;
    }>(),
    {
        name: ''
    }
)
</script>
<style scoped lang="less">
.Icon {}
</style>