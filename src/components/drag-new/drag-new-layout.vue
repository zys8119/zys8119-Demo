<template>
    <div class="drag-new-layout flex flex-col abs-content">
        <div>
            <slot name="header"></slot>
        </div>
        <div class="flex-1 flex of-x-hidden">
            <div class="h-100% of-x-hidden bg-$bg2">
                <slot name="aside"></slot>
            </div>
            <div class="flex-1 abs-r">
                <slot></slot>
            </div>
            <div class="h-100% of-x-hidden">
                <slot name="panel"></slot>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts"></script>
<style scoped lang="less">
.drag-new-layout {
}
</style>
