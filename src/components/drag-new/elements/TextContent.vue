<template>
    <div
        class="Text abs-content text-#000 bg-$backgroundColor text-$color of-hidden"
        :class="{
            'b-solid b-width-$borderWidth b-color-$borderColor': !['Text'].includes(elementYype),
            'b-rd-50%': ['Rotundity', 'ConferenceRotundity'].includes(elementYype),
            'b-rd-$radius': ['ConferenceRotundityAndRect'].includes(elementYype),
            'select-none': !isEdit
        }"
        :style="dataStyle"
        @dblclick="dblclick"
    >
        <div class="abs-content transform translate-x-$fontX translate-y-$fontY">
            <div
            v-if="isSaveMode"
            class="abs-content flex-center text-center  text-$color text-size-$fontSize"
            v-html="saveValue(data.value)"
        ></div>
        <textarea
            v-else
            ref="inputRef"
            class="abs-content bg-#0000 text-center b-none cursor-move align-content-center  text-$color text-size-$fontSize"
            :class="{
                'pointer-events-none': !isEdit,
                'select-none': !isEdit
            }"
            @blur="isEdit = false"
            v-model="data.value"
            type="textarea"
        />
        </div>
    </div>
</template>
<script setup lang="ts">
import { bus } from '../elements';
import zuoweiImgRaw from "@/src/assets/icons/座位.svg?raw"
const props = withDefaults(
    defineProps<{
        data?: any;
        config?: any;
        isSaveMode?: boolean;
    }>(),
    {
        data: () => ({}),
        config: () => ({}),
        isSaveMode: false
    }
);

const emits = defineEmits(['update:data', 'update:config']);
const { data } = useVModels(props, emits);
const elementYype = computed(() => props.data.elementYype);
useCssVars(() => ({
    radius: `${props.data.height}px`,
    backgroundColor: props.data.backgroundColor,
    color: props.data.color,
    fontSize: `${props.data.fontSize}px`,
    fontX: `${props.data.fontX}px`,
    fontY: `${props.data.fontY}px`,
    borderColor: props.data.borderColor,
    borderWidth: `${isNaN(Number(props.data.borderWidth)) ? 1 : Number(props.data.borderWidth)}px`
}));
const dataStyle = computed(() => {
    let backgroundImage = data.value.backgroundImage;
    if(/座位\.svg$/.test(data.value.backgroundImage)){
        backgroundImage = `data:image/svg+xml;base64,${btoa(zuoweiImgRaw.replace('#888888',data.value.seatColor || '#888888'))}`
    }
    return Object.assign({
        backgroundImage: `url(${backgroundImage})`,
    }, elementYype.value === 'Seat' ? {
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
    }:{});
})
const isEdit = ref(false);
const inputRef = ref();
const dblclick = () => {
    isEdit.value = true;
    inputRef.value.focus();
};
const saveValue = (value = '') => {
    return (value || '').replace(/\n/g, '<br>');
};
watch(isEdit, () => {
    bus.emit({
        type: 'TextContentEdit',
        data: isEdit.value
    });
});
</script>
<style scoped lang="less">
.Text {
}
</style>
