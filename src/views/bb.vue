<template>
    <div class="flex items-center justify-center w-full h-screen bg-white">
        <div
            class="relative w-[800px] h-[600px] bg-gray-100 border border-gray-300 rounded-md cursor-crosshair overflow-hidden select-none"
            @mousedown="onMouseDown"
            @mousemove="onMouseMove"
            @mouseup="onMouseUp"
            @mouseleave="onMouseUp"
        >
            <!-- 已保存的矩形 -->
            <div
                v-for="(rect, i) in rects"
                :key="i"
                class="absolute border-2 border-blue-500 pointer-events-none"
                :style="{
                    left: `${rect.x}px`,
                    top: `${rect.y}px`,
                    width: `${rect.width}px`,
                    height: `${rect.height}px`,
                }"
            />
            <!-- 预览中的矩形（拖拽时实时显示） -->
            <div
                v-if="isDrawing && preview"
                class="absolute border-2 border-red-500 border-dashed pointer-events-none"
                :style="{
                    left: `${preview.x}px`,
                    top: `${preview.y}px`,
                    width: `${preview.width}px`,
                    height: `${preview.height}px`,
                }"
            />
            <!-- 空状态提示 -->
            <span
                v-if="rects.length === 0 && !isDrawing"
                class="absolute inset-0 flex items-center justify-center text-gray-400 text-sm pointer-events-none"
            >
                按住鼠标拖拽绘制矩形
            </span>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

interface Rect {
    x: number
    y: number
    width: number
    height: number
}

const isDrawing = ref(false)
const startX = ref(0)
const startY = ref(0)
const currentX = ref(0)
const currentY = ref(0)
const rects = ref<Rect[]>([])

// 支持任意方向拖拽（左上、右下、左下、右上均可）
const preview = computed<Rect | null>(() => {
    if (!isDrawing.value) return null
    return {
        x: Math.min(startX.value, currentX.value),
        y: Math.min(startY.value, currentY.value),
        width: Math.abs(currentX.value - startX.value),
        height: Math.abs(currentY.value - startY.value),
    }
})

function getPos(e: MouseEvent): { x: number; y: number } {
    const el = e.currentTarget as HTMLElement
    const rect = el.getBoundingClientRect()
    return {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
    }
}

function onMouseDown(e: MouseEvent) {
    const { x, y } = getPos(e)
    startX.value = x
    startY.value = y
    currentX.value = x
    currentY.value = y
    isDrawing.value = true
}

function onMouseMove(e: MouseEvent) {
    if (!isDrawing.value) return
    const { x, y } = getPos(e)
    currentX.value = x
    currentY.value = y
}

function onMouseUp(_e?: MouseEvent) {
    if (!isDrawing.value) return
    isDrawing.value = false
    const w = Math.abs(currentX.value - startX.value)
    const h = Math.abs(currentY.value - startY.value)
    // 过滤误触
    if (w > 2 && h > 2) {
        rects.value.push({
            x: Math.min(startX.value, currentX.value),
            y: Math.min(startY.value, currentY.value),
            width: w,
            height: h,
        })
    }
}
</script>
