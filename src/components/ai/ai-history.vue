<template>
    <div
        class="ai-history bg-#fff shadow-lg pointer-events-initial h-100% select-none flex flex-col"
    >
        <div class="p-15px">
            <SvgIcon
                name="svgs-left-fold"
                class="text-20px cursor-pointer hover:text-#3a55fb"
                @click="$emit('showHistory')"
            ></SvgIcon>
        </div>
        <div class="p-x-15px p-b-15px ai-history-search">
            <n-input placeholder="搜索" v-model:value="search">
                <template #prefix>
                    <SvgIcon class="text-#999" name="svgs-search" />
                </template>
            </n-input>
        </div>
        <div class="flex-1 of-x-hidden p-15px">
            <div v-for="(item, key) in currList" :key="key">
                <div class="ai-history-list-tag text-12px text-#999 m-b-4px p-x-15px">
                    {{ key }}
                </div>
                <div
                    class="ai-history-list-label line-height-40px of-hidden m-b-10px p-x-15px b-rd-10px cursor-pointer hover:bg-#e8e8e8"
                    :class="{
                        '!bg-#3a55fb text-#ffffff': it.id === modelValue
                    }"
                    @click="modelValue = it.id"
                    v-for="(it, k) in item"
                    :key="k"
                >
                    <n-ellipsis :tooltip="false">{{ it.name }}</n-ellipsis>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
type ListItem = {
    name: any;
    tag: string;
    id: any;
};
const props = withDefaults(
    defineProps<{
        list?: Array<ListItem>;
        modelValue?: any;
        search?: any;
    }>(),
    {
        list: () => []
    }
);
const emits = defineEmits<{
    (e: 'showHistory'): void;
    (e: 'update:list'): void;
    (e: 'update:modelValue'): void;
    (e: 'update:search'): void;
}>();
const { search, list, modelValue } = useVModels(props, emits);
const currList = computed(() => {
    return list.value.reduce<Record<any, Array<ListItem>>>(
        (a, b: Pick<ListItem, keyof ListItem>) => {
            const key = b.tag || '其他';
            a[key] = a[key] || [];
            a[key].push(b);
            return a;
        },
        {}
    );
});
</script>
<style scoped lang="less">
.ai-history {
    transition: all ease-in-out 0.3ms;
    width: var(--menu-width);
    @media (max-width: 985px) {
        width: var(--min-menu-width);
        .ai-history-search {
            display: none;
        }
        .ai-history-list-tag {
            padding: 0;
        }
        .ai-history-list-label {
            padding: 0;
            border-radius: 100%;
        }
    }
}
</style>
