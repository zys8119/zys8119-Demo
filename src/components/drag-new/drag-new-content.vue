<template>
    <div
        class="drag-new-content abs-content of-hidden bg-$bg2"
        :class="{
            'cursor-grab': Space
        }"
        @drop="drop"
        @dragover.prevent
        @contextmenu.stop.prevent
        @mousedown="onMouseDown"
    >
        <DragGridRectMap :grid="grid" :gridCount="gridCount"></DragGridRectMap>
        <div class="abs-content user-none" ref="dragNewContentContainer">
            <Drager
                @change="change($event, item)"
                @focus="focus($event, item)"
                @blur="blur($event, item)"
                @contextmenu.stop="onContextmenu($event, item)"
                @mousedown="onMouseDown"
                @click="dragerClick(item)"
                v-for="(item, key) in dragerList"
                :key="key"
                v-bind="{
                    ...DragerCommonConfig,
                    ...omit(item, ['content', 'contentProps', 'renderContent'])
                }"
            >
                <div class="abs-content z-1">
                    <component :is="renderContent(item)" v-bind="item.contentProps"></component>
                </div>
            </Drager>
            <div
                ref="contextmenuRef"
                v-if="showContextmenu"
                @contextmenu.stop="void 0"
                class="bg-$bg2 abs drag-new-content-contextmenu shadow-lg"
                :style="contextmenuStyle"
            >
                <div
                    @click="contextmenuClick(item)"
                    class="drag-new-content-contextmenu-item text-12px"
                    v-for="(item, key) in contextmenuBtnLists"
                    :key="key"
                >
                    {{ item.name }}
                </div>
            </div>
        </div>
        <div
            v-if="Ctrl"
            class="abs bg-$esDragerColorOp op-bg-10 b-1px b-dashed b-$esDragerColor"
            :style="boxSelectionInfoStyle"
        ></div>
        <Teleport :to="thumbnailCurrentTo">
            <div
                class="pointer-events-none abs-end-bottom w-200px h-100px b-1 b-solid b-#000 bg-#000 bg-op-10 of-hidden"
                ref="thumbnailRef"
            >
                <div class="abs-center">
                    <div
                        class="abs-r bg-#fff bg-op-100"
                        :style="{
                            width: thumbnailStyle.width + 'px',
                            height: thumbnailStyle.height + 'px',
                            transform: `scale(${thumbnailStyle.scale})`
                        }"
                    >
                        <div
                            class="abs"
                            :style="{
                                left: item.left - thumbnailStyle.left + 'px',
                                top: item.top - thumbnailStyle.top + 'px',
                                width: item.width + 'px',
                                height: item.height + 'px',
                                transform: `rotate(${item.angle}deg)`
                            }"
                            :class="{
                                'bg-#aaa': !item.isThumbnailDragerVisibleArea,
                                'bg-$esDragerColor op-30': item.isThumbnailDragerVisibleArea
                            }"
                            v-for="(item, key) in thumbnailDragerList"
                            :key="key"
                        ></div>
                    </div>
                </div>
            </div>
        </Teleport>
    </div>
</template>
<script setup lang="ts">
import Drager, { DragData, DragerProps } from 'es-drager';
import DragGridRectMap from './drag-new-grid-rect-map.vue';
import 'es-drager/lib/style.css';
import { ExtractDefaultPropTypes } from 'vue';
import { merge, get, omit, cloneDeep } from 'lodash';
import { elementsTypesMap } from './elements';
import html2canvas from 'html2canvas';
type DragerListType = Array<
    | (Partial<DragData> &
          Partial<ExtractDefaultPropTypes<typeof DragerProps>> &
          Partial<{
              id: string | number;
              [key: string]: any;
          }>)
    | any
>;
const el = useCurrentElement();
const props = withDefaults(
    defineProps<{
        modelValue?: DragerListType;
        config?: Record<string, any>;
        grid?: number;
        gridCount?: number;
        thumbnailTo?: any;
    }>(),
    {
        modelValue: () => [],
        config: () => ({}),
        grid: 10,
        gridCount: 5,
        thumbnailTo: null
    }
);
const thumbnailCurrentTo = computed(() => props.thumbnailTo || el.value || 'body');
const emit = defineEmits([
    'update:list',
    'update:config',
    'update:grid',
    'update:gridCount',
    'update:modelValue'
]);
const { modelValue: dragerList, config: DragerCommonConfig } = useVModels(props, emit);
const dragNewContentContainer = ref();
const { width: widthContainer, height: heightContainer } =
    useElementBounding(dragNewContentContainer);

const esDragerColor = computed(() => DragerCommonConfig.value.color);
useCssVars(() => ({
    esDragerColor: esDragerColor.value,
    esDragerColorOp: esDragerColor.value + '17'
}));
const isRenderThumbnailContainer = ref(true);
const thumbnailDragerList = computed<DragerListType>(() => {
    if (!isRenderThumbnailContainer.value) return dragerList.value;
    const results = [
        {
            id: 'thumbnail',
            left: 0,
            top: 0,
            width: widthContainer.value,
            height: heightContainer.value,
            isThumbnailDragerVisibleArea: true
        }
    ];
    return results.concat(dragerList.value);
});
const thumbnailRef = ref();
const { width: thumbnailWidth, height: thumbnailHeight } = useElementBounding(thumbnailRef);
const scaleCalc = (
    targetWidth: number,
    targetHeight: number,
    originalWidth: number,
    originalHeight: number
) => {
    // 计算宽高比例
    const targetAspect = targetWidth / targetHeight;
    const originalAspect = originalWidth / originalHeight;
    return originalAspect > targetAspect
        ? targetWidth / originalWidth
        : targetHeight / originalHeight;
};
const thumbnailStyle = computed(() => {
    let minLeft = Infinity;
    let minTop = Infinity;
    let maxRight = -Infinity;
    let maxBottom = -Infinity;
    // 遍历数组，计算最大宽高和最小位置
    for (const rect of thumbnailDragerList.value) {
        minLeft = Math.min(minLeft, rect.left);
        minTop = Math.min(minTop, rect.top);
        maxRight = Math.max(maxRight, rect.width + rect.left);
        maxBottom = Math.max(maxBottom, rect.height + rect.top);
    }
    const width = maxRight - minLeft;
    const height = maxBottom - minTop;
    return {
        left: minLeft,
        top: minTop,
        width,
        height,
        scale: scaleCalc(thumbnailWidth.value, thumbnailHeight.value, width, height)
    };
});

const dragerListSelectedCount = computed(() => {
    return dragerList.value.filter((item) => {
        return item.selected;
    }).length;
});
const { elementX, elementY } = useMouseInElement(dragNewContentContainer);
const contextmenuRef = ref();
const showContextmenu = ref(false);
const showContextmenuInfo = ref<any>(null);
const contextmenuStyle = ref<any>(null);
const setSelected = (id: string | number | Array<string | number>) => {
    dragerList.value.forEach((item) => {
        item.selected = typeof id === 'object' ? id.includes(item.id) : item.id === id;
    });
};
const contextmenuClick = async (item: any) => {
    await item?.click?.(item);
    showContextmenu.value = false;
    showContextmenuInfo.value = null;
    contextmenuStyle.value = null;
};
const { isOutside } = useMouseInElement(contextmenuRef);
const createElementId = () => Date.now().toString();
const contextmenuBtnLists = ref([
    {
        name: '删除',
        click() {
            dragerList.value.splice(
                dragerList.value.findIndex((item: any) => {
                    return item.id === showContextmenuInfo.value.id;
                }),
                1
            );
        }
    },
    {
        name: '复制',
        click() {
            const id = createElementId();
            const copyData = cloneDeep(showContextmenuInfo.value);
            const size = 10;
            copyData.left += size;
            copyData.top += size;
            copyData.id = id;
            dragerList.value.push(copyData);
            setSelected(id);
        }
    },
    {
        name: '置顶',
        click: () => {
            const target = dragerList.value.find(
                (item: any) => showContextmenuInfo.value.id === item.id
            );
            dragerList.value.splice(dragerList.value.indexOf(target), 1);
            dragerList.value.push(target);
        }
    },
    {
        name: '置底',
        click: () => {
            const target = dragerList.value.find(
                (item: any) => showContextmenuInfo.value.id === item.id
            );
            dragerList.value.splice(dragerList.value.indexOf(target), 1);
            dragerList.value.unshift(target);
        }
    },
    {
        name: '上移一层',
        click: () => {
            let targetIndex = dragerList.value.findIndex(
                (item) => item.id === showContextmenuInfo.value.id
            );
            if (targetIndex < dragerList.value.length - 1) {
                let target = dragerList.value.splice(targetIndex, 1)[0];
                dragerList.value.splice(targetIndex + 1, 0, target);
            }
        }
    },
    {
        name: '下移一层',
        click: () => {
            let targetIndex = dragerList.value.findIndex(
                (item) => item.id === showContextmenuInfo.value.id
            );
            if (targetIndex > 0) {
                let target = dragerList.value.splice(targetIndex, 1)[0];
                dragerList.value.splice(targetIndex - 1, 0, target);
            }
        }
    }
]);
const renderContent = (data: any) => {
    const content = elementsTypesMap[data.elementYype]?.content || get(data, 'content', data.name);
    if (typeof content === 'object') {
        return h(content, {
            data,
            config: DragerCommonConfig.value
        });
    } else {
        return h('div', {}, content);
    }
};
const dragNewAsideElement = (data: any) => {
    const id = createElementId();
    const newData = merge(
        {
            id,
            left: elementX.value,
            top: elementY.value,
            width: 150,
            height: 150,
            angle: 0,
            icon: get(data, 'icon', ''),
            name: get(data, 'name', ''),
            elementYype: get(data, 'elementYype', ''),
            value: get(data, 'name', '')
        },
        get(data, 'config', {}),
        {
            contentProps: get(data, 'contentProps', {})
        }
    );
    dragerList.value.push(newData);
    setSelected(id);
};
const drop = (e: DragEvent) => {
    let data: any = null;
    try {
        data = JSON.parse(e.dataTransfer?.getData('drag-new-aside-element') as any);
    } catch (e) {
        // error
        data = null;
    }
    dragNewAsideElement(data);
};

const onContextmenu = (e: MouseEvent, item: any) => {
    e.preventDefault();
    showContextmenuInfo.value = item;
    contextmenuStyle.value = {
        left: `${elementX.value}px`,
        top: `${elementY.value}px`
    };
    showContextmenu.value = true;
};

const boxSelectionInfo = ref<any>({
    x1: 0,
    y1: 0,
    x2: 0,
    y2: 0
});
const boxSelectionInfoStyle = computed(() => {
    const startX =
        boxSelectionInfo.value.x1 <= boxSelectionInfo.value.x2
            ? boxSelectionInfo.value.x1
            : boxSelectionInfo.value.x2;
    const startY =
        boxSelectionInfo.value.y1 <= boxSelectionInfo.value.y2
            ? boxSelectionInfo.value.y1
            : boxSelectionInfo.value.y2;
    const endX =
        boxSelectionInfo.value.x1 < boxSelectionInfo.value.x2
            ? boxSelectionInfo.value.x2
            : boxSelectionInfo.value.x1;
    const endY =
        boxSelectionInfo.value.y1 < boxSelectionInfo.value.y2
            ? boxSelectionInfo.value.y2
            : boxSelectionInfo.value.y1;
    const width = endX - startX;
    const height = endY - startY;
    return {
        left: `${startX}px`,
        top: `${startY}px`,
        width: `${width}px`,
        height: `${height}px`
    };
});
const isRectangleInSelection = (a: any, b: any, rect1: any, rect2: any) => {
    // 矩形的最小最大坐标
    const minX = Math.min(a.x, b.x);
    const maxX = Math.max(a.x, b.x);
    const minY = Math.min(a.y, b.y);
    const maxY = Math.max(a.y, b.y);

    // 框选区域的最小最大坐标
    const boxMinX = Math.min(rect1.x, rect2.x);
    const boxMaxX = Math.max(rect1.x, rect2.x);
    const boxMinY = Math.min(rect1.y, rect2.y);
    const boxMaxY = Math.max(rect1.y, rect2.y);

    // 判断矩形是否完全在框选区域内
    return minX >= boxMinX && maxX <= boxMaxX && minY >= boxMinY && maxY <= boxMaxY;
};
// 框选选择状态设置
const setRectangleInSelection = () => {
    setSelected(
        dragerList.value
            .filter((item) =>
                isRectangleInSelection(
                    {
                        x: item.left,
                        y: item.top
                    },
                    {
                        x: item.left + item.width,
                        y: item.top + item.height
                    },
                    {
                        x: boxSelectionInfo.value.x1,
                        y: boxSelectionInfo.value.y1
                    },
                    {
                        x: boxSelectionInfo.value.x2,
                        y: boxSelectionInfo.value.y2
                    }
                )
            )
            .map((item) => item.id)
    );
};
const { Ctrl, Shift, Space } = useMagicKeys();
watch([Ctrl], () => {
    if (Ctrl.value) {
        boxSelectionInfo.value.x1 = elementX.value;
        boxSelectionInfo.value.y1 = elementY.value;
        setRectangleInSelection();
    }
});
watch([Ctrl, elementX, elementY], () => {
    if (Ctrl.value) {
        boxSelectionInfo.value.x2 = elementX.value;
        boxSelectionInfo.value.y2 = elementY.value;
        setRectangleInSelection();
    }
});
const isMouseDown = ref(false);
const isMouseDownX = ref(0);
const isMouseDownY = ref(0);
const isMouseMoveX = computed(() => elementX.value - isMouseDownX.value);
const isMouseMoveY = computed(() => elementY.value - isMouseDownY.value);
const onMouseDown = () => {
    isMouseDownX.value = elementX.value;
    isMouseDownY.value = elementY.value;
    isMouseDown.value = true;
    if (isOutside.value) {
        showContextmenu.value = false;
    }
    const mouseup = () => {
        dragerList.value.forEach((item) => {
            item.rectangleInSelectionLock = false;
        });
        isMouseDown.value = false;
        isMouseDownX.value = 0;
        isMouseDownY.value = 0;
        window.removeEventListener('mouseup', mouseup);
    };
    window.addEventListener('mouseup', mouseup);
};
const globlaMoveBySpaceMouseDownCacheMap = ref<any>({});
watch([Space, isMouseDown, elementX, elementY, dragerListSelectedCount], () => {
    if (Space.value && dragerListSelectedCount.value === 0) {
        if (isMouseDown.value) {
            dragerList.value.forEach((item) => {
                const it = globlaMoveBySpaceMouseDownCacheMap.value[item.id];
                if (it) {
                    item.left = it.left + isMouseMoveX.value;
                    item.top = it.top + isMouseMoveY.value;
                }
            });
        }
    }
});
const isMouseDownSelectedListMap = ref<any>({});
watch(isMouseDown, () => {
    if (isMouseDown.value) {
        globlaMoveBySpaceMouseDownCacheMap.value = cloneDeep(
            dragerList.value.reduce((prev, cur) => {
                prev[cur.id] = cloneDeep(cur);
                return prev;
            }, {})
        );
        isMouseDownSelectedListMap.value = dragerList.value
            .filter((item) => {
                return item.selected;
            })
            .reduce((prev, cur) => {
                prev[cur.id] = cloneDeep(cur);
                return prev;
            }, {});
    } else {
        globlaMoveBySpaceMouseDownCacheMap.value = {};
        isMouseDownSelectedListMap.value = {};
    }
});
const change = (data: any, item: any) => {
    nextTick(() => {
        if (item.rectangleInSelectionLock) {
            return;
        }
        const obj = isMouseDownSelectedListMap.value[item.id];
        if (!obj) {
            return merge(item, data);
        }
        const x = data.left - obj.left;
        const y = data.top - obj.top;
        Object.keys(isMouseDownSelectedListMap.value).forEach((key) => {
            if (key === item.id) {
                merge(item, data);
            } else {
                const it = isMouseDownSelectedListMap.value[key];
                const itOrigin = dragerList.value.find((it: any) => it.id === key);
                itOrigin.left = it.left + x;
                itOrigin.top = it.top + y;
                itOrigin.rectangleInSelectionLock = true;
            }
        });
    });
};
const dragerClick = (item: any) => {
    if (Shift.value) {
        merge(item, { selected: !item.selected });
        return;
    }
};
const focus = (selected: any, item: any) => {
    if (Shift.value) {
        return;
    }
    if (Ctrl.value) {
        return;
    }
    merge(item, { selected });
    setSelected(item.id);
};
const blur = (selected: any, item: any) => {
    if (Ctrl.value) {
        return;
    }
    merge(item, { selected });
};
const save = async (
    options: Partial<{
        // 保存类型
        type: string;
        // 质量
        quality: any;
        // 是否只保存可视区域
        visibleArea: boolean;
        // 外边距
        margin: number;
    }> = {}
) => {
    const { type, quality, visibleArea, margin } = merge(
        {
            type: 'iamge/png',
            quality: 1,
            visibleArea: false,
            margin: 1
        },
        options
    );
    const el = document.createElement('div');
    document.body.appendChild(el);
    if (!visibleArea) {
        isRenderThumbnailContainer.value = false;
    }
    await nextTick();
    let index = 0;
    const app = createApp(
        defineComponent(() => {
            return () =>
                h(
                    'div',
                    {
                        class: 'abs-r',
                        style: {
                            width: thumbnailStyle.value.width + 'px',
                            height: thumbnailStyle.value.height + 'px'
                        }
                    },
                    dragerList.value.map((item) => {
                        return h(
                            'div',
                            {
                                class: 'abs',
                                ref: (el) => {
                                    // 延时的目的是等待元素渲染完成
                                    if (el) {
                                        nextTick(() => {
                                            setTimeout(() => {
                                                index += 1;
                                            }, 100);
                                        });
                                    }
                                },
                                style: {
                                    left: item.left - thumbnailStyle.value.left + margin + 'px',
                                    top: item.top - thumbnailStyle.value.top + margin + 'px',
                                    width: item.width + 'px',
                                    height: item.height + 'px',
                                    transform: `rotate(${item.angle}deg)`
                                }
                            },
                            [
                                h(
                                    renderContent(item),
                                    merge({}, item.contentProps, {
                                        // 是否是保存模式
                                        isSaveMode: true
                                    })
                                )
                            ]
                        );
                    })
                );
        })
    );
    app.mount(el);
    await new Promise((resolve) => {
        (function loop() {
            if (index === dragerList.value.length) {
                resolve(true);
                return;
            }
            requestAnimationFrame(loop);
        })();
    });
    const canvas = await html2canvas(
        el,
        thumbnailStyle.value.width > -Infinity
            ? {
                  width: thumbnailStyle.value.width + margin * 2,
                  height: thumbnailStyle.value.height + margin * 2
              }
            : {
                  width: widthContainer.value,
                  height: heightContainer.value
              }
    );
    app.unmount();
    el.remove();
    if (!visibleArea) {
        isRenderThumbnailContainer.value = true;
    }
    const blob = new Promise<Blob | null>((resolve) => {
        canvas.toBlob(
            (blob) => {
                resolve(blob);
            },
            type,
            quality
        );
    });
    canvas.remove();
    return blob;
};
defineExpose({
    el: dragNewContentContainer,
    save,
    elementX,
    elementY
});
</script>
<style scoped lang="less">
.drag-new-content {
    .drag-new-content-contextmenu {
        border-radius: 4px;

        &-item {
            padding: var(--gap);
            cursor: pointer;

            & + .drag-new-content-contextmenu-item {
                border-top: 1px solid var(--border-color);
            }

            &:hover {
                border-radius: 4px;
                background: #f5f5f5;
            }
        }
    }

    &:deep {
        .es-drager {
            border: none;
            --es-drager-color: v-bind(esDragerColor) !important;
        }

        &:has(.es-drager.selected) {
            .es-drager.selected {
                border: 1px solid var(--es-drager-color);
            }
        }
    }
}
</style>
