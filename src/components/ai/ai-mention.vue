<template>
    <div
        class="ai-mention bg-#fff p-15px shadow-lg b-rd-5px flex-center flex-col m-b-15px gap-10px"
    >
        <div class="text-left w-100%">
            <n-space class="w-100%" wrap>
                <SvgIcon
                    @click="tags = []"
                    class="text-20px tr-y-5px cursor-pointer hover:text-#f00 text-#999"
                    v-if="tags.length > 0"
                    name="svgs-clear"
                ></SvgIcon>
                <n-tag
                    :bordered="false"
                    v-for="(item, key) in tags"
                    :key="key"
                    :type="tagsTypes[key % tagsTypes.length]"
                    closable
                    @close="tags.splice(key, 1)"
                >
                    <div class="max-w-500px">
                        <n-ellipsis :tooltip="false" class="max-w-100px overflow-hidden">{{
                            item.label
                        }}</n-ellipsis>
                    </div>
                </n-tag>
            </n-space>
        </div>

        <div class="w-100% flex-center gap-10px">
            <label>
                <SvgIcon class="cursor-pointer" name="svgs-add"></SvgIcon>
                <input type="file" hidden @change="uploadFile" />
            </label>
            <div class="flex-1 max-h-100px of-x-hidden">
                <n-mention
                    v-model:value="modelValue"
                    to=".ai-mention"
                    type="textarea"
                    :options="options"
                    autosize
                    prefix="/"
                    placeholder="请发送消息，输入‘/’可查看快捷指令"
                    @select="mentionSelect"
                />
            </div>
            <div class="flex-center">
                <div class="flex-center color-#fff s-30px b-rd-30px bg-#3d57fb">
                    <SvgIcon
                        class="cursor-pointer"
                        @click="isSend = false"
                        v-if="isSend"
                        name="svgs-stop"
                    ></SvgIcon>
                    <SvgIcon
                        class="cursor-pointer"
                        @click="isSend = true"
                        v-else
                        name="svgs-arrow-up-02"
                    ></SvgIcon>
                </div>
            </div>
        </div>
        <div class="flex-1 w-100% select-none">
            <n-space>
                <n-tag round :bordered="false" class="cursor-pointer" @click="$emit('showHistory')">
                    历史
                    <template #avatar>
                        <SvgIcon class="text-20px" name="svgs-history"></SvgIcon>
                    </template>
                </n-tag>
            </n-space>
        </div>
        <div class="text-#9ba1aa text-12px text-center m-t-5px">
            内客由AI大模型生成，请仔细甄别!
        </div>
    </div>
</template>
<script setup lang="ts">
const isSend = ref(false);
const props = withDefaults(
    defineProps<{
        modelValue?: string;
        tags?: any[];
    }>(),
    {
        modelValue: '',
        tags: () => []
    }
);
const emit = defineEmits<{
    (e: 'update:modelValue', value: string): void;
    (e: 'update:tags', value: string): void;
    (e: 'showHistory'): void;
}>();
const { modelValue, tags } = useVModels(props, emit);
const tagsTypes = ref<any[]>(['primary', 'info', 'success', 'warning', 'error', 'default']);
const options = ref([
    {
        label: '会议概要提取',
        value: '会议概要提取',
        prompt: '会议概要提取',
        type: 'quick'
    },
    {
        label: '会议议程及代办',
        value: '会议议程及代办',
        prompt: '会议概要提取',
        type: 'quick'
    }
]);
const mentionSelect = (e: any, p: any) => {
    nextTick(() => {
        if (typeof modelValue.value !== 'string') return;
        tags.value.push(e);
        modelValue.value = modelValue.value.replace(new RegExp('\\' + p + e.value + '\\s*$'), '');
    });
};
const uploadFile = (e: any) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
        const base64 = reader.result;
        tags.value.push({
            label: file.name,
            value: base64,
            type: 'file'
        });
    };
};
</script>
<style scoped lang="less">
.ai-mention {
    width: calc(100% - var(--menu-width) * 2 - 30px);
    @media (max-width: 985px) {
        width: calc(100% - var(--min-menu-width) * 2 - 30px);
    }
}
</style>
