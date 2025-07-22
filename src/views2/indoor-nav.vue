<template>
    <div class='indoor-nav flex-center abs-content flex-col'>
        <div class="flex-center text-30px bold">室内导航演示</div>
        <div class="flex-1 w-100% abs-r">
            <canvas class="abs-center" ref="canvasRef"></canvas>
        </div>
    </div>
</template>
<script setup lang="ts">
import PF from 'pathfinding';
const canvasRef = ref<HTMLCanvasElement | null>(null);
const createStation = (title, points) => {
    return {
        title,
        points,
        enter: new Array(Math.abs(points[0][0] - points[1][0])).fill(0).reduce((a, b, i) => {
            if (i % 3 === 0) {
                a.push({
                    user: `工位-${i + 1}`,
                    points: [points[0][0] + i, points[0][1] - 1]
                });
                a.push({
                    user: `工位-${i + 1}`,
                    points: [points[0][0] + i, points[1][1]]
                });
            }
            return a
        }, []),
        color: '#fff',
        backgroundColor: '#009dff',
    }
}
const houses = ref([
    {
        title: 'Boss办公室',
        points: [[0, 0], [25, 2]],
        enter: [
            {
                user: 'Boss门口',
                points: [3, 2]
            }
        ],
        color: '#fff',
        backgroundColor: '#009dff',
    },
    ...new Array(5).fill(0).map((_, k) => {
        k = k + 1
        const gap = 7
        return createStation(`工位${k}`, [[0, k * gap], [20, k * gap + 2]])
    }),
    ...new Array(3).fill(0).map((_, k) => {
        k = k + 1
        const gap = 5
        const y = 25
        return createStation(`南面工位${k}`, [[35, k * gap + y], [50, k * gap + 2 + y]])
    }),
    {
        title: '会议室',
        points: [[0, 41], [20, 50]],
        enter: [
            {
                user: '门1',
                points: [0, 40]
            },
            {
                user: '门2',
                points: [10, 40]
            }
        ],
        color: '#fff',
        backgroundColor: '#009dff',
    },
    {
        title: '电梯/前台',
        points: [[25, 41], [33, 50]],
        enter: [
            {
                user: '入口1',
                points: [24, 48]
            },
            {
                user: '入口2',
                points: [10, 40]
            }
        ],
        color: '#fff',
        backgroundColor: '#009dff',
    },
    {
        title: '墙体',
        points: [[25, 12], [33, 37]],
        enter: [],
        color: '#fff',
        backgroundColor: '#009dff',
    },
    {
        title: '墙体',
        points: [[25, 0], [33, 10]],
        enter: [],
        color: '#fff',
        backgroundColor: '#009dff',
    },
    {
        title: '神秘区域',
        points: [[35, 45], [50, 50]],
        enter: [
            {
                user: '财务',
                points: [34, 48]
            },
            {
                user: '总经办',
                points: [38, 44]
            }
        ],
        color: '#fff',
        backgroundColor: '#009dff',
    },
]);
const housesPoints = computed(() => {
    return houses.value.reduce((acc, house) => {
        acc.push(house.points);
        return acc;
    }, [] as number[][][]);
});
const housesEnter = computed(() => {
    return houses.value.reduce((acc, house) => {
        return acc.concat(house.enter.map(e => e.points));
    }, [] as number[][]);
});
const isRectInside = (x: number, y: number) => {
    return housesPoints.value.some(points => {
        const [start, end] = points;
        return x >= start[0] && x < end[0] && y >= start[1] && y < end[1];
    });
};
const grids = ref(new Array(50).fill(0).map((_, y) => new Array(50).fill(0).map((_, x) => {
    return isRectInside(x, y) || housesEnter.value.some(e => x == e[0] && y === e[1]) ? 1 : 0;
})));
const gridSize = 17;
const canvasBox = gridSize * grids.value.length
onMounted(async () => {
    const canvas = canvasRef.value as unknown as HTMLCanvasElement;
    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
    await draw(ctx, canvas);

})
const draw = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => {
    const offset = gridSize
    canvas.width = canvasBox + offset * 2;
    canvas.height = canvasBox + offset * 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#f0f0f0';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = '#ccc';
    ctx.lineWidth = 1;
    ctx.save()
    ctx.translate(offset, offset)
    // 绘制网格线
    for (let i = 0; i < grids.value.length; i++) {
        for (let j = 0; j < grids.value[i].length; j++) {
            const x = j * gridSize;
            const y = i * gridSize;
            ctx.strokeRect(x, y, gridSize, gridSize);
        }
    }
    // 绘制xy轴序号
    ctx.fillStyle = '#c1c1c1';
    ctx.font = '12px Arial';
    for (let i = 0; i < grids.value.length; i++) {
        ctx.fillText(i.toString(), 0 - offset, i * gridSize + gridSize / 2);
    }

    for (let j = 0; j < grids.value[0].length; j++) {
        ctx.fillText(j.toString(), j * gridSize + gridSize / 2, 10 - offset);
    }

    //绘制房屋
    houses.value.forEach(({ points, backgroundColor, title, color }) => {
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
    houses.value.forEach(({ enter }) => {
        enter.forEach(({ user, points }) => {
            const x = points[0] * gridSize;
            const y = points[1] * gridSize;
            ctx.fillStyle = '#ff0000';
            ctx.beginPath();
            ctx.arc(x + gridSize / 2, y + gridSize / 2, 5, 0, Math.PI * 2);
            ctx.fill();
            ctx.fillStyle = '#6d1b0d';
            ctx.font = '12px Arial';
            ctx.fillText(user, x + gridSize / 2, y + gridSize / 2 - 10);
        });
    });
    // 寻址
    const grid = new PF.Grid(grids.value);
    const finder = new PF.BiBreadthFirstFinder({
    });
    const path = finder.findPath(3, 2, 4, 7, grid.clone());
    const newPath = PF.Util.compressPath(path);
    // 绘制路径
    ctx.strokeStyle = '#00ff00';
    ctx.lineWidth = 2;
    ctx.beginPath();
    newPath.forEach((point, index) => {
        const x = point[0] * gridSize + gridSize / 2;
        const y = point[1] * gridSize + gridSize / 2;
        if (index === 0) {
            ctx.moveTo(x, y);
        } else {
            ctx.lineTo(x, y);
        }
    });
    ctx.stroke();
    ctx.restore()
};
</script>
<style scoped lang="less">
.indoor-nav {}
</style>