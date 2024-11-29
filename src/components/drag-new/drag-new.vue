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
        <div
            class="abs-content of-hidden"
            :class="{
                'cursor-grab': Alt
            }"
            @mousewheel="mousewheel"
            @mousedown="onMouseDown"
            ref="thumbnailToContentRef"
        >
            <dragNewContent
                :thumbnailTo="thumbnailToContentRef"
                v-model="elementsList"
                v-model:config="DragerCommonConfig"
                :grid="grid"
                :gridCount="gridCount"
                ref="contentRef"
                :style="{
                    transform: `scale(${scaleRatio}) translate(${offsetX}px, ${offsetY}px)`
                }"
            >
            </dragNewContent>
            <div class="abs-content" v-if="Alt && isMouseDown"></div>
        </div>
    </dragNewLayout>
</template>
<script setup lang="ts">
import { useElements } from './elements';
const contentRef = ref();
const grid = ref(10);
const gridCount = ref(5);
const scaleRatio = ref(1);
const DragerCommonConfig = computed(() => ({
    gridX: grid.value,
    gridY: grid.value,
    snapToGrid: true,
    snap: true,
    markline: true,
    rotatable: true,
    color: '#3a7afe',
    scaleRatio: scaleRatio.value
}));
const thumbnailToContentRef = ref();
const elements = useElements();
const elementsList = ref([]);
const activeElement = computed(() => {
    return elementsList.value.find((item: any) => item.selected);
});
const headerBtnsHandleClick = async (type: number) => {
    if (type === 3) {
        const data: Blob = await contentRef.value.save();
        const a = document.createElement('a');
        a.href = URL.createObjectURL(data);
        a.download = '排座.png';
        a.click();
        a.remove();
    }
};
const headerBtns = ref([
    { name: '保存', click: headerBtnsHandleClick.bind(null, 1) },
    { name: '导出', click: headerBtnsHandleClick.bind(null, 2) },
    { name: '预览', click: headerBtnsHandleClick.bind(null, 3) },
    { name: '返回后台', click: headerBtnsHandleClick.bind(null, 4) }
]);
const elementMouse = useMouseInElement(contentRef);
const { Alt } = useMagicKeys({
    passive: false,
    onEventFired(e) {
        if (e.key === 'Alt') {
            e.preventDefault();
        }
    }
});
const mousewheel = (e: any) => {
    if (!Alt.value) {
        return;
    }
    if (e.deltaY > 0) {
        if (scaleRatio.value >= 3) return (scaleRatio.value = 3);
        scaleRatio.value += 0.1;
    } else {
        if (scaleRatio.value <= 0.2) return (scaleRatio.value = 0.2);
        scaleRatio.value -= 0.1;
    }
};
const isMouseDown = ref(false);
const offsetXOrigin = ref(0);
const offsetYOrigin = ref(0);
const isMouseDownX = ref(0);
const isMouseDownY = ref(0);
const isMouseMoveX = computed(() => elementMouse.elementX.value - isMouseDownX.value);
const isMouseMoveY = computed(() => elementMouse.elementY.value - isMouseDownY.value);
const offsetX = computed(() =>
    Alt.value && isMouseDown.value ? offsetXOrigin.value + isMouseMoveX.value : offsetXOrigin.value
);
const offsetY = computed(() =>
    Alt.value && isMouseDown.value ? offsetYOrigin.value + isMouseMoveY.value : offsetYOrigin.value
);
const onMouseDown = () => {
    isMouseDownX.value = elementMouse.elementX.value;
    isMouseDownY.value = elementMouse.elementX.value;
    isMouseDown.value = true;
    const mouseup = () => {
        offsetXOrigin.value = offsetX.value;
        offsetYOrigin.value = offsetY.value;
        isMouseDown.value = false;
        isMouseDownX.value = 0;
        isMouseDownY.value = 0;
        window.removeEventListener('mouseup', mouseup);
    };
    window.addEventListener('mouseup', mouseup);
};
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
