<template>
    <dragNewLayout class="drag-seat-arrangement-new">
        <template #header>
            <dragNewHeader :btns="headerBtns" :title="title" :subtitle="subtitle"></dragNewHeader>
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
                v-model="modelValue"
                v-model:config="currConfig"
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
import { merge } from 'lodash';
const props = withDefaults(
    defineProps<{
        scaleRatio?: number;
        grid?: number;
        gridCount?: number;
        config?: Record<string, any>;
        modelValue?: any[];
        headerBtns?: any[];
        active?: any;
        title?: string;
        subtitle?: any;
    }>(),
    {
        scaleRatio: 1,
        grid: 10,
        gridCount: 5,
        config: () => ({}),
        modelValue: () => [],
        headerBtns: () => [],
        active: () => []
    }
);

const emits = defineEmits([
    'update:scaleRatio',
    'update:grid',
    'update:gridCount',
    'update:cofnig',
    'update:headerBtns',
    'update:active',
    'update:modelValue'
]);
const { scaleRatio, grid, gridCount, config, modelValue, headerBtns, active } = useVModels(
    props,
    emits
);
const currConfig = computed({
    get: () => {
        return merge(
            {
                gridX: grid.value,
                gridY: grid.value,
                scaleRatio: scaleRatio.value
            },
            config.value
        );
    },
    set(v) {
        config.value = v;
    }
});
const contentRef = ref();

const thumbnailToContentRef = ref();
const elements = useElements();

const activeElement = computed(() => {
    return modelValue.value.find((item: any) => item.selected);
});
watch(
    activeElement,
    (v) => {
        active.value = v;
    },
    {
        immediate: true,
        deep: true
    }
);
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
defineExpose({
    contentRef,
    thumbnailToContentRef,
    async save(...args: any[]) {
        return contentRef.value.save(...args);
    }
});
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
