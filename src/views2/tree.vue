<template>
    <div>
        <canvas ref="canvas" width="300" height="300" class="bg-#e5e5e5"></canvas>
    </div>
</template>
<script setup lang="ts" a="[1]" title="asdaSda" asdasdas=asda>
import winframe from 'winframe'

const { width, height } = useWindowSize()
onMounted(async () => {
    const canvas = getVueRef("canvas") as HTMLCanvasElement
    canvas.width = width.value
    canvas.height = height.value
    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D
    (function run() {
        draw(canvas, ctx)
        // requestAnimationFrame(run)
    })()
})
function degToRad(deg) {
    return deg * Math.PI / 180;
}

function getArcPoints(cx, cy, radius, deg) {
    const rad = degToRad(deg);
    const x = cx + radius * Math.cos(rad);
    const y = cy + radius * Math.sin(rad);
    return [x, y];
}

const deg = 35
const getOffset = () => Math.random() * 50 + 10
const lineWidth = 5
const drawTree = async (ctx: CanvasRenderingContext2D, sx: number, sy: number) => {
    const offset = getOffset()
    ctx.strokeStyle = '#000'
    const drawTreeBranchItem = async (level = 0, bool: boolean, offset: number) => {
        if (level > Math.random() * 17 + 3) return
        ctx.save()
        ctx.beginPath()
        ctx.translate(0, -offset)
        offset = getOffset()
        ctx.rotate(Math.PI / 180 * Math.random() * deg * (bool ? 1 : -1))
        ctx.lineWidth = lineWidth * (1 - 0.1 * level)
        await winframe((p: number) => {
            ctx.moveTo(0, 0)
            ctx.lineTo(0, -offset * p)
            ctx.stroke()
        }, 0.1)
        if (Math.floor(Math.random() * 2)) {
            ctx.save()
            ctx.beginPath()
            ctx.fillStyle = '#f00'
            ctx.globalAlpha = 1
            ctx.arc(0, -offset, Math.random() * 5, 0, Math.PI * 2)
            ctx.fill()
            const r = Math.random() * 5
            ctx.beginPath()
            const sizes = 5
            new Array(sizes).fill(0).forEach((_, k) => {
                ctx.globalAlpha = 0.5
                ctx.lineWidth = 0.1
                ctx.strokeStyle = "#fff"
                const [x, y] = getArcPoints(0, -offset, r, 360 / sizes * k)
                ctx.arc(x, y, r, 0, Math.PI * 2)
                ctx.stroke()
            })
            ctx.fill()
            ctx.restore()
        }
        await drawTreeBranch(level + 1, offset)
        ctx.restore()
    }
    const drawTreeBranch = async (level = 0, offset: number) => {

        await drawTreeBranchItem(level, false, offset),
            await drawTreeBranchItem(level, true, offset)

    }
    // main
    ctx.save()
    ctx.translate(sx, sy)
    ctx.beginPath()
    ctx.lineWidth = lineWidth
    await winframe((p: number) => {
        ctx.moveTo(0, 0)
        ctx.lineTo(0, -offset * p)
        ctx.stroke()
    }, 300)
    drawTreeBranch(0, offset)
    ctx.restore()
    ctx.save()
}
const draw = async (canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    const sx = width.value / 2
    const sy = height.value
    await drawTree(ctx, sx, sy)
}
</script>
<style scoped lang="less">
.a {}
</style>·