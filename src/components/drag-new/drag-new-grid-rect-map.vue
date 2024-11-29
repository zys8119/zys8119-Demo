<template>
    <div class="drag-new-grid-rect-map abs-content" :style="rectStyle">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <pattern
                    :id="smallGridId"
                    :width="grid"
                    :height="grid"
                    patternUnits="userSpaceOnUse"
                >
                    <path
                        :d="`M ${grid} 0 L 0 0 0 ${grid}`"
                        fill="none"
                        :stroke="color.grid"
                        stroke-width="0.5"
                    />
                </pattern>
                <pattern
                    :id="gridId"
                    :width="bigGrid"
                    :height="bigGrid"
                    patternUnits="userSpaceOnUse"
                >
                    <rect :width="bigGrid" :height="bigGrid" :fill="`url(#${smallGridId})`" />
                    <path
                        :d="`M ${bigGrid} 0 L 0 0 0 ${bigGrid}`"
                        fill="none"
                        :stroke="color.bigGrid"
                        stroke-width="1"
                    />
                </pattern>
            </defs>
            <rect width="100%" height="100%" :fill="`url(#${gridId})`" />
        </svg>
    </div>
</template>

<script setup lang="ts">
const props = withDefaults(
    defineProps<{
        grid?: number;
        gridCount?: number;
    }>(),
    {
        grid: 10,
        gridCount: 5
    }
);
// 小网格的大小
const grid = computed(() => props.grid);
// 小网格的数量，默认为5个
const gridCount = computed(() => props.gridCount);
// 生成唯一id
const smallGridId = computed(() => `${Date.now()}-smallGrid`);
const gridId = computed(() => `${Date.now()}-grid`);
// 计算大网格的大小
const bigGrid = computed(() => grid.value * gridCount.value);

// 处理颜色
const color = computed(() => {
    const [bigGrid, grid] = ['#3c3c3c1f', '#3c3c3c2f'];
    return { bigGrid, grid };
});

const rectStyle = computed(() => ({ '--border-color': color.value.bigGrid }));
</script>

<style scoped></style>
