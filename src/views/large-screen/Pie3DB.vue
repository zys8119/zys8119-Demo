<template>
    <div class="pie3D w-150px h-150px">
        <div class="abs-content canvas-box" ref="canvasBoxRef">
            <canvas class="w-150px h-150px" ref="canvasRef"></canvas>
        </div>
    </div>
</template>

<script setup lang="ts" title="大屏-圆环">
const props = withDefaults(defineProps<{
  value?: number;
  size?: number;
  radius?: number;
  background?: string;
  color?: string;
}>(),{
  value: 25,
  size:150,
  radius:60,
});
const canvasRef = ref();
const canvasBoxRef = ref();
// const {width, height} = useElementSize(canvasBoxRef)
const render = async () => {
    if (!canvasRef.value) {
        return;
    }
    const canvas = canvasRef.value as HTMLCanvasElement;
    canvas.width = props.size;
    canvas.height = props.size;
    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = props.radius;
    const numberOfRectangles = 25;
    const angleIncrement = (2 * Math.PI) / numberOfRectangles;
    for (let i = 0; i < numberOfRectangles; i++) {
        const angle = i * angleIncrement;
        // 使用圆的参数方程计算矩形的中心坐标
        const rectCenterX = centerX + radius * Math.cos(angle);
        const rectCenterY = centerY + radius * Math.sin(angle);

        // 绘制矩形
        const rectWidth = 15;
        const rectHeight = 20;
        const rotationAngle = angle + Math.PI / 2; // 旋转90度
        ctx.fillStyle =
            (i / numberOfRectangles) * 360 <= (props.value / 100) * 360
                ? props.color || '#40c9fd'
                : props.background || '#223b60';
        ctx.save();
        ctx.translate(rectCenterX, rectCenterY);
        ctx.rotate(rotationAngle);
        ctx.fillRect(-rectWidth / 2, -rectHeight / 2, rectWidth, rectHeight);
        ctx.restore();
    }
};
const time = ref()
const init = ()=>{
  time.value = requestAnimationFrame(()=>{
    render();
    init()
  })
}
onUnmounted(()=>{
  cancelAnimationFrame(time.value)
})
onMounted(async () => {
  init()
});
</script>

<style scoped lang="less">
.pie3D {
    .canvas-box {
        background: #0d0925;
    }
}
</style>
