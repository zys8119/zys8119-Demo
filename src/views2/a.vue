<template>
    <div>
        {{ bb }}
        <canvas ref="canvas" width="300" height="300" class="bg-#e5e5e5"></canvas>
        {{ aa }}
        <button @click="aa++">点击-setTimeout</button>
    </div>
</template>
<script setup lang="ts" a="[1]" title="asdaSda" asdasdas=asda>
import { bb, arrs, sleep } from "./aa"
const aa = ref<any>(0)
const arr = [...arrs]
onMounted(async () => {
    console.log(arrs)
    const width = 600
    const height = 300
    const canvas = getVueRef("canvas") as HTMLCanvasElement
    canvas.width = width
    canvas.height = height
    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D
    const max = Math.max(...arr)
    const w = 5
    const offset = (width - arr.length * w) / (arr.length - 1)
    let curr = 0
    const start = performance.now()
    let i = 0
    async function mergeSort(arr) {
        if (arr.length <= 1) return arr;
        const mid = Math.floor(arr.length / 2);
        const left = await mergeSort(arr.slice(0, mid));
        const right = await mergeSort(arr.slice(mid));
        const _arr = await merge(left, right)
        i++
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        _arr.forEach((r, index) => {
            ctx.beginPath()
            ctx.fillStyle = curr === index ? 'red' : 'blue'
            ctx.fillRect(index * (offset + w), height, w, -height / max * r)
        })
        aa.value = i >= arr.length - 1 ? "完成" + Math.fround((performance.now() - start) / 1000).toFixed(3) : i
        await sleep(30)
        return _arr;
    }

    async function merge(left, right) {
        const result = [];
        while (left.length && right.length) {
            result.push(left[0] <= right[0] ? left.shift() : right.shift());
        }
        return [...result, ...left, ...right];
    }
    mergeSort(arr)
})
</script>
<style scoped lang="less">
.a {}
</style>·