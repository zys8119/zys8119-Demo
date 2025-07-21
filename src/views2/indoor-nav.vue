<template>
    <div class='indoor-nav flex-center abs-content flex-col'>
        <div class="flex-center text-30px bold">室内导航演示</div>
        <canvas ref="canvasRef"></canvas>
    </div>
</template>
<script setup lang="ts">
import PF from 'pathfinding';
const canvasRef = ref<HTMLCanvasElement | null>(null);
const grids = ref(new Array(50).fill(0).map(() => new Array(50).fill(0)));
const gridSize = 16;
const canvasBox = 800
const houses = [
    {
        title: 'Boss办公室',
        points: [[0, 0], [20, 2]],
        enter: [
            {
                user: 'Boss',
                points: [3, 1]
            }
        ],
        color: '#fff',
        backgroundColor: '#009dff',
    },
    {
        title: '工位1',
        points: [[0, 5], [20, 7]],
        enter: [
            {
                user: 'user1',
                points: [2, 6]
            },
            {
                user: 'user1',
                points: [4, 6]
            }
        ],
        color: '#fff',
        backgroundColor: '#009dff',
    },
];

onMounted(async () => {
    const canvas = canvasRef.value as unknown as HTMLCanvasElement;
    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
    await draw(ctx, canvas);

})
const draw = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => {
    canvas.width = canvasBox;
    canvas.height = canvasBox;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#f0f0f0';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = '#ccc';
    ctx.lineWidth = 1;
    for (let i = 0; i < grids.value.length; i++) {
        for (let j = 0; j < grids.value[i].length; j++) {
            const x = j * gridSize;
            const y = i * gridSize;
            ctx.strokeRect(x, y, gridSize, gridSize);
            if (grids.value[i][j] === 1) {
                ctx.fillStyle = '#ff0000';
                ctx.fillRect(x + 1, y + 1, gridSize - 2, gridSize - 2);
            }
        }
    }

    // 绘制网格线
    // 绘制房屋
    houses.forEach(({ points, backgroundColor, title, color }) => {
        const startX = points[0][0] * gridSize;
        const startY = points[0][1] * gridSize;
        const endX = points[1][0] * gridSize;
        const endY = points[1][1] * gridSize;
        ctx.fillStyle = backgroundColor || '#009dff';
        ctx.fillRect(startX, startY, endX - startX, endY - startY);
        // 矩形中心绘制文字
        ctx.fillStyle = color || '#ffffff';
        ctx.font = '10px Arial';
        const textX = Math.abs((endX - startX) / 2) + startX;
        const textY = Math.abs((endY - startY) / 2) + startY;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(title, textX, textY);
    });
    // 绘制房屋入口
    houses.forEach(({ enter }) => {
        enter.forEach(({ user, points }) => {
            const x = points[0] * gridSize;
            const y = points[1] * gridSize;
            ctx.fillStyle = '#ff0000';
            ctx.beginPath();
            ctx.arc(x + gridSize / 2, y + gridSize / 2, 5, 0, Math.PI * 2);
            ctx.fill();
            ctx.fillStyle = '#000';
            ctx.font = '10px Arial';
            ctx.fillText(user, x + gridSize / 2, y + gridSize / 2 - 10);
        });
    });
    // 绘制xy轴序号
    ctx.fillStyle = '#000';
    ctx.font = '12px Arial';
    for (let i = 0; i < grids.value.length; i++) {
        ctx.fillText(i.toString(), 0, i * gridSize + gridSize / 2);
    }

    for (let j = 0; j < grids.value[0].length; j++) {
        ctx.fillText(j.toString(), j * gridSize + gridSize / 2, 10);
    }
    // 寻址
    const grid = new PF.Grid(grids.value);
    const finder = new PF.AStarFinder();
    const path = finder.findPath(3, 1, 4, 6, grid);
    // 绘制路径
    ctx.strokeStyle = '#00ff00';
    ctx.lineWidth = 2;
    ctx.beginPath();
    path.forEach((point, index) => {
        const x = point[0] * gridSize + gridSize / 2;
        const y = point[1] * gridSize + gridSize / 2;
        if (index === 0) {
            ctx.moveTo(x, y);
        } else {
            ctx.lineTo(x, y);
        }
    });
    ctx.stroke();
};
</script>
<style scoped lang="less">
.indoor-nav {}
</style>