<template>
    <div class="drag-new-header b-b-solid b-1 b-$border-color bg-$bg2 p-$gap">
        <n-space justify="space-between" align="center">
            <div class="flex-start-center">
                <div class="bold text-18px">{{ title }}</div>
                <div class="text-12px text-#999" v-if="subtitle">{{ subtitle }}</div>
            </div>
            <n-space align="center">
                <template v-for="(item, key) in btns" :key="key">
                    <component v-if="item.content" :is="item.content" />
                    <n-button v-else @click="item.click">{{ item.name }}</n-button>
                </template>
            </n-space>
        </n-space>
    </div>
</template>
<script setup lang="ts">
withDefaults(
    defineProps<{
        btns?: Array<{
            name?: string;
            content?: string;
            click(...arg: any[]): any;
        }>;
        title?: string;
        subtitle?: string;
    }>(),
    {
        btns: () => []
    }
);
</script>
<style scoped lang="less">
.drag-new-header {
}
</style>
