<template>
    <n-collapse
        class="drag-new-aside b-r-solid b-1 b-$border-color h-100% bg-$bg2 p-$gap"
        :default-expanded-names="expandedNames"
    >
        <template v-for="(item, index) in elements" :key="index">
            <n-collapse-item v-if="item.children" :title="item.name" :name="item.name">
                <dragNewAside :elements="item.children"></dragNewAside>
            </n-collapse-item>
            <div
                v-else
                draggable="true"
                @dragstart="dragstart($event, item)"
                @dragover="dragover"
                @dragend="dragend"
                class="cursor-pointer drag-new-aside-node m-y-$gap abs-r"
            >
                <div
                    class="drag-new-aside-node-content b-solid b-1 b-$border-color flex-center gap-$gap p-$gap"
                >
                    <Icon :name="item.icon"></Icon>
                    {{ item.name }}
                </div>
                <div class="drag-new-aside-node-content-drag-style abs"></div>
            </div>
        </template>
    </n-collapse>
</template>
<script setup lang="ts">
type PropsElements = Array<{
    name: string;
    icon?: any;
    children?: PropsElements;
}>;
const props = withDefaults(
    defineProps<{
        elements: PropsElements;
    }>(),
    {
        elements: () => []
    }
);
const expandedNames = computed(() => {
    return props.elements.map((item) => item.name);
});
const dragElement = ref();
const dragstart = (e: DragEvent & { target: HTMLDivElement } & any, data: any) => {
    dragElement.value = e.target;
    e.target.classList.add('drag-new-aside-node-dragstart');
    e.dataTransfer?.setData('drag-new-aside-element', JSON.stringify(data));
};
const dragover = () => {
    if (!dragElement.value) {
        return;
    }
    dragElement.value.classList.remove('drag-new-aside-node-dragstart');
    dragElement.value.classList.add('drag-new-aside-node-draging');
};
const dragend = (e: DragEvent & { target: HTMLDivElement }) => {
    (e.target === dragElement.value ? e.target : e.target.parentElement)?.classList.remove(
        'drag-new-aside-node-draging'
    );
};
</script>
<style scoped lang="less">
.drag-new-aside {
    user-select: none;

    &:deep {
        .n-collapse-item {
            margin: 0;

            .n-collapse-item__header,
            .n-collapse-item__content-inner {
                padding: 0;
            }

            .n-collapse-item__header {
                margin-top: var(--gap);
            }
        }
    }

    .drag-new-aside {
        padding: 0;
        border: none;
    }

    .drag-new-aside-node {
        &-dragstart {
            .drag-new-aside-node-content {
            }
        }

        &-draging {
            .drag-new-aside-node-content {
                border-color: rgb(0, 55, 255);
                opacity: 1;
            }
        }
    }
}
</style>
