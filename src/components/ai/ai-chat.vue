<template>
    <div class="ai-chat bg-#fff of-auto shadow-lg b-rd-5px" ref="aiChatRef">asdas</div>
</template>
<script setup lang="ts">
const props = withDefaults(
    defineProps<{
        mentionHeight: number;
    }>(),
    {
        mentionHeight: 0
    }
);
const aiChatRef = ref<HTMLElement>();
const { height: winH } = useWindowSize();
const { height: chatH } = useElementSize(aiChatRef);
const height = computed(() => winH.value - props.mentionHeight - 30 * 2);
const offsetHeight = computed(() => height.value - chatH.value + 'px');
</script>
<style scoped lang="less">
.ai-chat {
    max-height: calc(1px * v-bind(height) - 30px);
    width: calc(100% - var(--menu-width) * 2 - 30px);
    transform: translateY(calc(v-bind(offsetHeight) - 0px));
    @media (max-width: 985px) {
        width: calc(100% - var(--min-menu-width) * 2 - 30px);
    }
}
</style>
