<template>
    <div class="drag-new-panel b-l-solid b-1 b-$border-color h-100% bg-$bg2 w-$panel-width p-$gap select-none"
        @click.stop @keydown.stop>
        <n-collapse :default-expanded-names="['attribute', 'canvasAttribute']">
            <n-collapse-item v-if="modelValue" title="属性" name="attribute">
                <div class="flex flex-col gap-$gap">
                    <div class="flex-center-start">
                        <div class="flex-shrink-0">名称：</div>
                        <n-ellipsis class="flex-1">
                            <div class="flex-center-start gap-$gap">
                                {{ modelValue.name }}
                            </div>
                        </n-ellipsis>
                    </div>
                    <div class="flex-center-start">
                        <div class="flex-shrink-0">类型：</div>
                        <n-ellipsis class="b-1 b-solid b-#ffb500 text-#ffb500 b-rd-2px p-x-10px p-y-2px">{{
                            modelValue.elementYype }}</n-ellipsis>
                    </div>
                    <div class="flex-center-start">
                        <div class="flex-shrink-0">样式：</div>
                        <n-grid x-gap="12" :cols="3">
                            <n-gi v-for="(item, index) in images" :key="index">
                                <n-image @click.stop="modelValue.backgroundImage === item ? modelValue.backgroundImage = null : modelValue.backgroundImage = item" class="b-2 b-solid b-#0000 of-hidden cursor-pointer" :class="{
                                    ' b-#ffb500':modelValue.backgroundImage === item
                                }" width="50" preview-disabled height="50" object-fit="cover" :src="item"></n-image>
                            </n-gi>
                        </n-grid>
                    </div>
                    <div class="flex-center-start" v-for="(label, key) in NumberMap" :key="key">
                        <div class="flex-shrink-0">{{ label }}：</div>
                        <n-input-number v-model:value="modelValue[key]" clearable />
                    </div>
                    <div class="flex-center-start" v-for="(label, key) in ColorMap" :key="key">
                        <div class="flex-shrink-0">{{ label }}：</div>
                        <n-color-picker v-model:value="modelValue[key]" clearable :swatches="swatches" :to="false"
                            @click.stop />
                    </div>
                    <div class="flex-center-start">
                        <div class="flex-shrink-0">内容：</div>
                        <n-input type="textarea" v-model:value="modelValue.value" clearable placeholder="请输入内容" />
                    </div>
                </div>
            </n-collapse-item>
            <n-collapse-item v-else title="画布属性" name="canvasAttribute"> </n-collapse-item>
        </n-collapse>
    </div>
</template>
<script setup lang="ts">
import zuoweiImg from "@/src/assets/icons/座位.svg?url"
const imgs = import.meta.glob('@/src/assets/darg/*', {
    eager: true,
    import: 'default'
});
const images = ref(Object.values(imgs).concat([zuoweiImg]))
const props = withDefaults(
    defineProps<{
        modelValue?: any;
    }>(),
    {
        modelValue: () => null
    }
);
const emit = defineEmits(['update:modelValue']);
const { modelValue } = useVModels(props, emit);
watch(
    modelValue,
    () => {
        if (modelValue.value) {
            modelValue.value.borderWidth =
                typeof modelValue.value.borderWidth === 'number' ? modelValue.value.borderWidth : 1;
        }
    },
    { immediate: true }
);
const NumberMap = ref({
    left: 'X',
    top: 'Y',
    width: '宽度',
    height: '高度',
    borderWidth: '边框粗细',
    angle: '角度'
});
const ColorMap = ref({
    backgroundColor: '背景',
    color: '字体颜色',
    borderColor: '边框颜色'
});
const swatches = ref([
    '#00000000',
    '#FFFFFF',
    '#eeeeee',
    '#999999',
    '#666666',
    '#333333',
    '#000000',
    '#18A058',
    '#2080F0',
    '#F0A020',
    'rgba(208, 48, 80, 1)',
    '#fc3a13',
    '#fc831b',
    '#fcd628',
    '#85f089',
    '#1dc8ca',
    '#2d7dfb',
    '#be0078',
    '#b12d13'
]);
</script>
<style scoped lang="less">
.drag-new-panel {}
</style>
