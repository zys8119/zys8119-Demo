<template>
    <div>
        {{ bb }}
        <canvas ref="canvas" width="300" height="300" class="bg-#e5e5e5"></canvas>
        {{ aa }}
        <button @click="aa++">点击-requestAnimationFrame</button>
    </div>
</template>
<script setup lang="ts" a="[1]" title="asdaSda" asdasdas=asda>
import { bb, arrs, sleep } from "./aa"
const aa = ref<any>(0)
const arr = [...arrs]
onMounted(async () => {
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
    let i = 0
    const update = () => {
        for (let j = 0; j < arr.length - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
                curr = j
            }
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            arr.forEach((r, index) => {
                ctx.beginPath()
                ctx.fillStyle = curr === index ? 'red' : 'blue'
                ctx.fillRect(index * (offset + w), height, w, -height / max * r)
            })
        }
        i++
        aa.value = i >= arr.length ? "完成" + Math.fround((performance.now() - start) / 1000).toFixed(3) : i
        return i >= arr.length
    }
    const start = performance.now()
    const run = async () => {
        if (update()) { return }
        await sleep
        requestIdleCallback(run)
    }
    run()
})
</script>
<style scoped lang="less">
.a {}
</style>·