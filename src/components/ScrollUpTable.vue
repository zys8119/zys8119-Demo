<template>
    <div class="ScrollUpTable abs-content p-x-10px flex flex-col gap-5px">
        <div class="flex gap-5px bg-#141754 flex-center-start p-y-10px b-rd-10px">
            <div :class="typeof item.className === 'function' ? item.className(item, null) : item.className"
                class="flex-center" v-for="(item, index) in columns" :key="index">{{
                    item.title }}</div>
        </div>
        <div class="flex-1 of-hidden mb-10px">
            <ScrollUp :list="data">
                <template #default="{ item: row, index }">
                    <div class="flex gap-5px  flex-center-start p-y-10px b-rd-10px">
                        <div :class="typeof col.className === 'function' ? col.className(col, row) : col.className"
                            class="flex-center" v-for="(col, index) in columns" :key="index">
                            <slot :row="row" :col="col" :name="col.key" :index="index">
                                {{ row[col.key] }}
                            </slot>
                        </div>
                    </div>
                </template>
            </ScrollUp>
        </div>
    </div>
</template>
<script setup lang="ts">
import ScrollUp from './scroll-up.vue'

const props = withDefaults(defineProps<{
    data: any[];
    columns: any[];
}>(), {
    data: () => [],
    columns: () => [],
})
</script>
<style scoped lang="less">
.ScrollUpTable {}
</style>