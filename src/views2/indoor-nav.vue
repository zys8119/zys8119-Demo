<template>
    <div class='indoor-nav flex-center abs-content flex-col'>
        <div class="flex-center text-30px bold">室内导航演示</div>
        <div class="flex-1 w-100% abs-r">
            <canvas class="abs-center" ref="canvasRef"></canvas>
        </div>
        <div class="abs-end p-15px">
            <n-form>
                <n-form-item label="起点">
                    <n-select class="w-200px" placeholder="请选择起点" clearable filterable v-model:value="start"
                        :options="stations" @change="targetChange"></n-select>
                </n-form-item>
                <n-form-item label="目标点">
                    <n-select class="w-200px" placeholder="请选择目标点" clearable filterable v-model:value="end"
                        :options="stations" @change="targetChange"></n-select>
                </n-form-item>
                <n-grid :cols="3">
                    <n-grid-item>
                        <n-form-item label="网格">
                            <n-color-picker :render-label="renderColorPickerLabel" class="w-40px" placeholder="请选择目标点"
                                clearable filterable v-model:value="colors.gridColor"></n-color-picker>
                        </n-form-item>
                    </n-grid-item>
                    <n-grid-item>
                        <n-form-item label="工位">
                            <n-color-picker :render-label="renderColorPickerLabel" class="w-40px" placeholder="请选择目标点"
                                clearable filterable v-model:value="colors.workColor"></n-color-picker>
                        </n-form-item>
                    </n-grid-item>
                    <n-grid-item>
                        <n-form-item label="墙体">
                            <n-color-picker :render-label="renderColorPickerLabel" class="w-40px" placeholder="请选择目标点"
                                clearable filterable v-model:value="colors.wallColor"></n-color-picker>
                        </n-form-item>
                    </n-grid-item>
                    <n-grid-item>
                        <n-form-item label="boss区域">
                            <n-color-picker :render-label="renderColorPickerLabel" class="w-40px" placeholder="请选择"
                                clearable filterable v-model:value="colors.bossColor"></n-color-picker>
                        </n-form-item>
                    </n-grid-item>
                    <n-grid-item>
                        <n-form-item label="会议室区域">
                            <n-color-picker :render-label="renderColorPickerLabel" class="w-40px" placeholder="请选择"
                                clearable filterable v-model:value="colors.conferenceColor1"></n-color-picker>
                        </n-form-item>
                    </n-grid-item>
                    <n-grid-item>
                        <n-form-item label="大会议室区域">
                            <n-color-picker :render-label="renderColorPickerLabel" class="w-40px" placeholder="请选择"
                                clearable filterable v-model:value="colors.conferenceColor2"></n-color-picker>
                        </n-form-item>
                    </n-grid-item>
                    <n-grid-item>
                        <n-form-item label="人事区域">
                            <n-color-picker :render-label="renderColorPickerLabel" class="w-40px" placeholder="请选择"
                                clearable filterable v-model:value="colors.personnelColor"></n-color-picker>
                        </n-form-item>
                    </n-grid-item>
                    <n-grid-item>
                        <n-form-item label="神秘区域">
                            <n-color-picker :render-label="renderColorPickerLabel" class="w-40px" placeholder="请选择"
                                clearable filterable v-model:value="colors.mysteriousAreaColor"></n-color-picker>
                        </n-form-item>
                    </n-grid-item>
                    <n-grid-item>
                        <n-form-item label="洗手间区域">
                            <n-color-picker :render-label="renderColorPickerLabel" class="w-40px" placeholder="请选择"
                                clearable filterable v-model:value="colors.toiletColor"></n-color-picker>
                        </n-form-item>
                    </n-grid-item>
                    <n-grid-item>
                        <n-form-item label="电梯区域">
                            <n-color-picker :render-label="renderColorPickerLabel" class="w-40px" placeholder="请选择"
                                clearable filterable v-model:value="colors.liftColor"></n-color-picker>
                        </n-form-item>
                    </n-grid-item>
                    <n-grid-item>
                        <n-form-item label="文本区域">
                            <n-color-picker :render-label="renderColorPickerLabel" class="w-40px" placeholder="请选择"
                                clearable filterable v-model:value="colors.textAreaColor"></n-color-picker>
                        </n-form-item>
                    </n-grid-item>
                    <n-grid-item>
                        <n-form-item label="文本">
                            <n-color-picker :render-label="renderColorPickerLabel" class="w-40px" placeholder="请选择"
                                clearable filterable v-model:value="colors.textColor"></n-color-picker>
                        </n-form-item>
                    </n-grid-item>
                    <n-grid-item>
                        <n-form-item label="动画路径">
                            <n-color-picker :render-label="renderColorPickerLabel" class="w-40px" placeholder="请选择"
                                clearable filterable v-model:value="colors.lineActiveColor"></n-color-picker>
                        </n-form-item>
                    </n-grid-item>
                    <n-grid-item>
                        <n-form-item label="路径">
                            <n-color-picker :render-label="renderColorPickerLabel" class="w-40px" placeholder="请选择"
                                clearable filterable v-model:value="colors.lineColor"></n-color-picker>
                        </n-form-item>
                    </n-grid-item>
                    <n-grid-item>
                        <n-form-item label="目标点">
                            <n-color-picker :render-label="renderColorPickerLabel" class="w-40px" placeholder="请选择"
                                clearable filterable v-model:value="colors.endPointColor"></n-color-picker>
                        </n-form-item>
                    </n-grid-item>
                    <n-grid-item>
                        <n-form-item label="起点">
                            <n-color-picker :render-label="renderColorPickerLabel" class="w-40px" placeholder="请选择"
                                clearable filterable v-model:value="colors.startPointColor"></n-color-picker>
                        </n-form-item>
                    </n-grid-item>
                    <n-grid-item>
                        <n-form-item label="点位置">
                            <n-color-picker :render-label="renderColorPickerLabel" class="w-40px" placeholder="请选择"
                                clearable filterable v-model:value="colors.pointColor"></n-color-picker>
                        </n-form-item>
                    </n-grid-item>
                </n-grid>
            </n-form>
        </div>
    </div>
</template>
<script setup lang="ts">
import PF from 'pathfinding';
import winframe from 'winframe';
const canvasRef = ref<HTMLCanvasElement | null>(null);
const start = ref()
const end = ref()
const colors = ref({
    gridColor: "#f4f4f4",
    workColor: "#009dff",
    wallColor: "#009dff",
    bossColor: "#009dff",
    conferenceColor1: "#009dff",
    conferenceColor2: "#009dff",
    personnelColor: "#009dff",
    mysteriousAreaColor: "#009dff",
    toiletColor: "#009dff",
    liftColor: "#009dff",
    textAreaColor: "#ffffff",
    textColor: "#6d1b0d",
    pointColor: "#a0a0a0",
    startPointColor: '#47f900',
    endPointColor: "#f90047",
    lineColor: "#2e2bf7",
    lineActiveColor: '#ff0000',
})
const renderColorPickerLabel = () => null
const createStation = (title, points) => {
    return {
        title,
        points,
        enter: new Array(Math.abs(points[0][0] - points[1][0])).fill(0).reduce((a, b, i) => {
            if (i % 3 === 0) {
                a.push({
                    user: `${i + 1}`,
                    points: [points[0][0] + i, points[0][1] - 1]
                });
                a.push({
                    user: `${i + 1}`,
                    points: [points[0][0] + i, points[1][1]]
                });
            }
            return a
        }, []),
        color: colors.value.textAreaColor,
        backgroundColor: colors.value.workColor,
    }
}
const houses = computed(() => [
    {
        title: 'Boss办公室',
        points: [[0, 0], [25, 2]],
        enter: [
            {
                user: 'Boss门口',
                points: [3, 2]
            }
        ],
        color: colors.value.textAreaColor,
        backgroundColor: colors.value.bossColor,
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
        color: colors.value.textAreaColor,
        backgroundColor: colors.value.conferenceColor1,
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
                points: [30, 40]
            }
        ],
        color: colors.value.textAreaColor,
        backgroundColor: colors.value.liftColor,
    },
    {
        title: '墙体',
        points: [[25, 12], [33, 37]],
        enter: [],
        color: colors.value.textAreaColor,
        backgroundColor: colors.value.wallColor,
    },
    {
        title: '墙体2',
        points: [[25, 8], [33, 10]],
        enter: [],
        color: colors.value.textAreaColor,
        backgroundColor: colors.value.wallColor,
    },
    {
        title: '洗手间',
        points: [[25, 0], [33, 5]],
        enter: [
            {
                user: '门',
                points: [28, 5]
            },
        ],
        color: colors.value.textAreaColor,
        backgroundColor: colors.value.toiletColor,
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
        color: colors.value.textAreaColor,
        backgroundColor: colors.value.mysteriousAreaColor,
    },
    {
        title: '人事/行政',
        points: [[35, 25], [50, 27]],
        enter: [
            {
                user: '门',
                points: [35, 27]
            },
        ],
        color: colors.value.textAreaColor,
        backgroundColor: colors.value.personnelColor,
    },
    {
        title: '大会议室',
        points: [[35, 8], [50, 25]],
        enter: [
            {
                user: '门',
                points: [34, 23]
            },
        ],
        color: colors.value.textAreaColor,
        backgroundColor: colors.value.conferenceColor2,
    },
    {
        title: '立柱',
        points: [[21, 6], [23, 8]],
        enter: [
        ],
        color: colors.value.textAreaColor,
        backgroundColor: colors.value.wallColor,
    },
    {
        title: '立柱',
        points: [[21, 27], [23, 29]],
        enter: [
        ],
        color: colors.value.textAreaColor,
        backgroundColor: colors.value.wallColor,
    },
    {
        title: '茶水间/休息区域',
        points: [],
        enter: [
            {
                user: '饮水机',
                points: [33, 2]
            },
            {
                user: '咖啡',
                points: [36, 0]
            },
            {
                user: '冰箱',
                points: [46, 0]
            },
            {
                user: '休息区',
                points: [42, 5]
            },
        ],
        color: colors.value.textAreaColor,
        backgroundColor: '#009dff',
    },
]);
const housesPoints = computed(() => {
    return houses.value.reduce((acc, house) => {
        if (house.points.length >= 2) {
            acc.push(house.points);
        }
        return acc;
    }, [] as number[][][]);
});
const housesEnter = computed(() => {
    return houses.value.reduce((acc, house) => {
        return acc.concat(house.enter.map(e => e.points || []));
    }, [] as number[][]);
});
const stations = computed(() => {
    return houses.value.reduce((acc, house) => {
        return acc.concat(house.enter.map(e => {
            return {
                label: `${house.title}/${e.user}`,
                value: (e.points || []).join('-'),
                title: e.user,
                points: e.points || []
            }
        }));
    }, [] as number[][]);
})
const startPoint = computed<any>(() => {
    return stations.value.find((e: any) => e.value === start.value)?.points
})
const endPoint = computed(() => {
    return stations.value.find((e: any) => e.value === end.value)?.points
})
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
const newPath = ref([])
const originPath = ref([])
const isDone = ref(false)
const targetChange = () => {
    isDone.value = false
}
const drawAnimationRun = async (ctx: CanvasRenderingContext2D, isAnimation?: boolean, newPath?: number[][]) => {
    let index = 0
    let sp = newPath[index]
    while (index < newPath.length) {
        if (isAnimation && (newPath.length < 2 || isDone.value)) { break }
        const ep = newPath[index]
        const w = ep[0] - sp[0]
        const h = ep[1] - sp[1]
        if (isAnimation) {
            await winframe(p => {
                ctx.fillRect((sp[0] + w * p) * gridSize, (sp[1] + h * p) * gridSize, gridSize, gridSize);
            }, 1)
        } else {
            ctx.fillRect((sp[0] + w) * gridSize, (sp[1] + h) * gridSize, gridSize, gridSize);
        }
        sp = ep
        index++
    }
    isDone.value = true
}
const drawAnimation = async (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => {
    ctx.fillStyle = colors.value.lineActiveColor;
    if (isDone.value) {
        newPath.value.forEach(e => {
            ctx.fillRect(e[0] * gridSize, e[1] * gridSize, gridSize, gridSize);
        })
        return await drawAnimationRun(ctx, false, originPath.value)
    }
    if (newPath.value.length < 2 || isDone.value) { return }
    await drawAnimationRun(ctx, true, originPath.value)
}
const draw = async (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => {
    const offset = gridSize
    canvas.width = canvasBox + offset * 2;
    canvas.height = canvasBox + offset * 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#ffffffff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = colors.value.gridColor;
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
    // // 绘制xy轴序号
    // ctx.fillStyle = '#c1c1c1';
    // ctx.font = '12px Arial';
    // for (let i = 0; i < grids.value.length; i++) {
    //     ctx.fillText(i.toString(), 0 - offset, i * gridSize + gridSize / 2);
    // }

    // for (let j = 0; j < grids.value[0].length; j++) {
    //     ctx.fillText(j.toString(), j * gridSize + gridSize / 2, 10 - offset);
    // }

    //绘制房屋
    houses.value.forEach(({ points, backgroundColor, title, color }) => {
        if (points.length < 2) { return }
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
            ctx.fillStyle = colors.value.pointColor;
            ctx.beginPath();
            ctx.arc(x + gridSize / 2, y + gridSize / 2, 5, 0, Math.PI * 2);
            ctx.fill();
            ctx.fillStyle = colors.value.textColor;
            ctx.font = '12px Arial';
            ctx.fillText(user, x + gridSize / 2, y + gridSize / 2 - 10);
        });
    });
    // 寻址
    newPath.value = []
    originPath.value = []
    if (startPoint.value && endPoint.value) {
        const grid = new PF.Grid(grids.value);
        const finder = new PF.BiBreadthFirstFinder({
        });
        const path = finder.findPath(startPoint.value[0], startPoint.value[1], endPoint.value[0], endPoint.value[1], grid.clone());
        originPath.value = path
        const _newPath = PF.Util.compressPath(path);
        newPath.value = _newPath
        // 绘制寻址路径
        ctx.strokeStyle = colors.value.lineColor;
        ctx.lineWidth = 2;
        ctx.beginPath();
        _newPath.forEach((point, index) => {
            const x = point[0] * gridSize + gridSize / 2;
            const y = point[1] * gridSize + gridSize / 2;
            if (index === 0) {
                ctx.moveTo(x, y);
            } else {
                ctx.lineTo(x, y);
            }
        });
        ctx.stroke();
    }

    if (startPoint.value) {
        // 绘制起点
        ctx.fillStyle = colors.value.startPointColor;
        ctx.beginPath();
        ctx.arc(startPoint.value[0] * gridSize + gridSize / 2, startPoint.value[1] * gridSize + gridSize / 2, 5, 0, Math.PI * 2);
        ctx.fill();
    }
    if (endPoint.value) {
        // 绘制终点
        ctx.fillStyle = colors.value.endPointColor;
        ctx.beginPath();
        ctx.arc(endPoint.value[0] * gridSize + gridSize / 2, endPoint.value[1] * gridSize + gridSize / 2, 5, 0, Math.PI * 2);
        ctx.fill();
    }
    await drawAnimation(ctx, canvas)
    ctx.restore()
    requestAnimationFrame(async () => {
        await draw(ctx, canvas);
    })
};
</script>
<style scoped lang="less">
.indoor-nav {}
</style>