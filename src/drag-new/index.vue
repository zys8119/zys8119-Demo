<template>
    <dragNewLayout class="drag-seat-arrangement-new">
        <template #header>
            <dragNewHeader
                :btns="headerBtns"
                title="排座面板"
                subtitle="(会议室：0001)"
            ></dragNewHeader>
        </template>
        <template #aside>
            <dragNewAside :elements="elements" class="w-$aside-width"></dragNewAside>
        </template>
        <template #panel>
            <dragNewPanel v-model="activeElement"> </dragNewPanel>
        </template>
        <dragNewContent
            v-model="elementsList"
            v-model:config="DragerCommonConfig"
            :grid="grid"
            :gridCount="gridCount"
            ref="contentRef"
        >
        </dragNewContent>
    </dragNewLayout>
</template>
<script setup lang="ts">
import { useElements } from './elements';
const contentRef = ref();
const grid = ref(10);
const gridCount = ref(5);
const DragerCommonConfig = computed(() => ({
    gridX: grid.value,
    gridY: grid.value,
    snapToGrid: true,
    snap: true,
    markline: true,
    rotatable: true,
    color: '#3a7afe'
}));
const elements = useElements();
const elementsList = ref([]);
const activeElement = computed(() => {
    return elementsList.value.find((item: any) => item.selected);
});
const headerBtnsHandleClick = async (type: number) => {
    if (type === 3) {
        const data = await contentRef.value.save();
        window.open(URL.createObjectURL(data));
    }
};
const headerBtns = ref([
    { name: '保存', click: headerBtnsHandleClick.bind(null, 1) },
    { name: '导出', click: headerBtnsHandleClick.bind(null, 2) },
    { name: '预览', click: headerBtnsHandleClick.bind(null, 3) },
    { name: '返回后台', click: headerBtnsHandleClick.bind(null, 4) }
]);
</script>
<style scoped lang="less">
.drag-seat-arrangement-new {
    --bg: #edf0f3;
    --bg2: #ffffff;
    --border-color: #efefef;
    --gap: 10px;
    --aside-width: 200px;
    --panel-width: 250px;
    background-color: var(--bg);
}
</style>
