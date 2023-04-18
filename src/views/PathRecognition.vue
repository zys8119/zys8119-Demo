<template>
    <div class="PathRecognition">
        <canvas ref="canvas"></canvas>
    </div>
</template>

<script setup lang="ts" title="canvas 路径识别" content="可用于纯色图片的路径矢量图路径获取">
const canvas = $ref() as HTMLCanvasElement
const ctx = $computed(() => canvas.getContext('2d'))
const {width, height} = useWindowSize()
const rects = ref([])
const {x, y} = useMouseInElement(canvas)
watchEffect(() => {
    rects.value.filter(e => e.isInside()).forEach(e=>{
        e.x
    })
})

class Rect {
    constructor(public color: string, public x: number, public y: number, public w: number, public h: number) {
        this.draw()
    }

    draw() {
        ctx.fillStyle = this.color
        ctx.fillRect(this.x, this.y, this.w, this.h)
        rects.value.push(this)
    }

    isInside() {
        const sx = x.value - this.x
        const sy = y.value - this.y
        return sx > 0 && sx < this.w && sy > 0 && sy < this.h
    }
}
const render = ()=>{
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    rects.value = []
    new Rect("#f00", 50, 60, 100, 100)
    requestAnimationFrame(render)
}
onMounted(() => {
    canvas.width = width.value
    canvas.height = height.value


    render()
})
</script>

<style scoped lang="less">
.PathRecognition {
    canvas {
        //width: 100%;
        //height: 100%;
        border: 1px;
        position: absolute;
        left: 0;
        top: 0;
    }
}
</style>
