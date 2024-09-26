<template>
    <div
        class="pointer-events-none ai-assistant w-500px h-500px abs-f right-50px bottom-0px transform-translate-x-150px transform-translate-y-200px"
    >
        <n-three
            :class="{
                show: show,
                hide: !show
            }"
            class="bg-#0000 ai-helper-object3d"
            @load="load"
            :light="false"
        ></n-three>
        <div
            v-if="show"
            @mouseenter="showPage = false"
            @mouseleave="showPage = true"
            class="abs-f right-0 top-20 w-50% h-190px z-1 pointer-events-initial cursor-pointer"
        ></div>
    </div>
    <img
        @dblclick="show = !show"
        @mousedown.prevent="isMousedown = true"
        @mouseup="isMousedown = false"
        :class="{
            'op-20': show
        }"
        class="cursor-pointer select-none pointer-events-initial abs-f bottom--30px right-0 w-50px transform-translate-x-50% transform-translate-y-$y z-10000000"
        :src="`./ai/ai.png`"
        :title="show ? '再次双击可关闭AI模式！' : '双击我可开启Ai模式，试试看吧！'"
    />
    <Teleport to="body">
        <div class="pointer-events-none abs-content abs-f! z-100000000">
            <div
                class="abs-content ai-panel-history"
                :class="{
                    show: showPage && show && showHistory,
                    hide: !(showPage && show && showHistory)
                }"
            >
                <ai-history
                    @showHistory="showHistory = !showHistory"
                    v-model:list="historyList"
                    v-model:search="historySearch"
                    v-model="chatActiveId"
                ></ai-history>
            </div>
            <div class="abs-start w-100% flex-center">
                <ai-chat
                    class="pointer-events-initial ai-mention-chat"
                    :mention-height="aiMentionRefHeight"
                    :class="{
                        show: showPage && show,
                        hide: !showPage || !show
                    }"
                ></ai-chat>
            </div>
            <div class="abs-start-bottom flex-center w-100%">
                <ai-mention
                    v-model="mentionValue"
                    v-model:tags="mentionTags"
                    @showHistory="showHistory = !showHistory"
                    :class="{
                        show: showPage && show,
                        hide: !showPage || !show
                    }"
                    class="pointer-events-initial ai-mention"
                    ref="aiMentionRef"
                ></ai-mention>
            </div>
        </div>
        <div
            v-if="show && Ctrl"
            class="pointer-events-none abs-f! z-100000000 bg-#ebeeff33 b-1px b-solid b-green"
            :style="findChatStyle"
        ></div>
        <div
            @mousedown="aiClick"
            v-if="testSelectState.text.value && !/^\s*$/.test(testSelectState.text.value)"
            class="cursor-pointer abs-f! z-100000000 bg-lg-135deg--#09c4a8--#346eff--#ee0adf s-20px b-rd-100% text-12px text-#fff flex-center"
            :style="aIChatHelperStyle"
        >
            AI
        </div>
    </Teleport>
</template>
<script setup lang="ts">
import { BaseThreeClass } from 'naive-ui';
import { debounce } from 'lodash';
import { GLTFLoader } from '@/../node_modules/.pnpm/three@0.150.1/node_modules/three/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from '@/../node_modules/.pnpm/three@0.150.1/node_modules/three/examples/jsm/loaders/DRACOLoader.js';
const chatActiveId = ref(1);
const historySearch = ref('');
const historyList = computed<any>(() =>
    [
        { name: 'asdasda阿四大家卡上打上都阿四', tag: '今天', id: 1 },
        { name: 'asdasda', tag: '今天', id: 12 },
        { name: 'asdasda', tag: '今天', id: 123 },
        { name: 'asdasda', tag: '昨天', id: 2 },
        { name: 'asdasda', tag: '6天前', id: 3 },
        { name: '唯粉猪', id: 4 }
    ].filter((e) => e.name.includes(historySearch.value as any))
);
const showPage = ref(true);
const show = ref(false);
const showHistory = ref(false);
const object3d = ref<any>();
const aiMentionRef = ref();
watch(show, () => {
    if (!show.value) {
        showPage.value = true;
        showHistory.value = false;
    }
});
const { height: aiMentionRefHeight } = useElementSize(aiMentionRef);
const load = async (three: BaseThreeClass) => {
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath('/');
    const loader = new GLTFLoader();
    loader.setDRACOLoader(dracoLoader);
    const { scene, THREE } = three;
    const obj = await loader.loadAsync('@/../public/ai/ai.glb');
    ((s) => {
        object3d.value = obj.scene.children[0];
        object3d.value.scale.set(s, s, s);
        object3d.value.rotation.set(0, 0, 0);
    })(0.05);
    obj.scene.children[0].traverse((obj: any) => {
        obj.castShadow = true;
        obj.receiveShadow = true;
        obj.geometry?.translate(0, 0, 0);
        switch (obj.name) {
            case '图层_1_3':
                obj.material.color = new THREE.Color('##eef0f3');
                break;
        }
    });
    scene.rotation.set(0, 0.78, 0);

    three.scene.add(obj.scene.children[0]);
    (() => {
        const light = new THREE.AmbientLight(0x404040, 10); // 柔和的白光
        scene.add(light);
    })();
    (() => {
        const light = new THREE.PointLight(0xf00, 1, 0);
        light.position.set(100, 250, 300);
        scene.add(light);
    })();
};
const { tilt, roll } = useParallax(null);
watch([object3d, tilt, roll], () => {
    if (object3d.value) {
        object3d.value.rotation.set(-roll.value + 100, tilt.value - 0.5, 0);
    }
});
const { height, width } = useWindowSize();
const { y } = useMouse();
const yCssCalc = computed(() => -(height.value - (y.value < 150 ? 150 : y.value)) + 'px');
const yCss = ref(yCssCalc.value);
const isMousedown = ref(false);
watch([isMousedown, y], () => {
    if (isMousedown.value) {
        yCss.value = yCssCalc.value;
    }
});
useCssVars(() => ({
    y: yCss.value
}));
const mentionValue = ref('');
const mentionTags = ref<any[]>([]);
const escapeCall = debounce((e) => {
    if (show.value && e.code.toLowerCase() === 'escape') {
        showPage.value = !showPage.value;
    }
}, 300);
const { Ctrl, Alt } = useMagicKeys({
    onEventFired(e) {
        if (show.value && e.code.toLowerCase() === 'escape') {
            e.stopImmediatePropagation();
        }
        escapeCall(e);
    }
});
const elTargetRect = ref({
    top: 0,
    left: 0,
    width: 0,
    height: 0
});
const findChatStyle = computed<any>(() => ({
    top: (elTargetRect.value?.top || 0) + 'px',
    left: (elTargetRect.value?.left || 0) + 'px',
    width: (elTargetRect.value?.width || 0) + 'px',
    height: (elTargetRect.value?.height || 0) + 'px'
}));

const isAltTag = ref(false);
const mousemoveListener = (e: MouseEvent) => {
    const el = e?.target as HTMLElement & HTMLInputElement;
    if (!el || (isAltTag.value && (Ctrl.value || Alt.value))) {
        return;
    }
    if (show.value && Ctrl.value) {
        elTargetRect.value = el?.getBoundingClientRect?.();
        let value = el.value ?? el.innerText;
        if (Alt.value) {
            isAltTag.value = true;
            if (
                mentionTags.value.findIndex((e) => e.value === value && e.type === 'custom') === -1
            ) {
                mentionTags.value.push({
                    value: value,
                    label: value,
                    type: 'custom',
                    prompt: 'custom'
                });
            }
        } else {
            if (el.hasAttribute('ai-type')) {
                isAltTag.value = true;
                value = el.getAttribute('ai-value') || value;
                mentionTags.value.push({
                    value: value,
                    label: value,
                    type: el.hasAttribute('ai-type'),
                    prompt: el.hasAttribute('ai-prompt')
                });
            } else {
                mentionValue.value = value;
            }
        }
    }
};
const currTargetEvent = shallowRef();
watch([Ctrl, Alt], () => {
    if (!Ctrl.value && !Alt.value) {
        isAltTag.value = false;
    } else {
        mousemoveListener(currTargetEvent.value);
    }
});
const testSelectState = useTextSelection();
const aIChatHelperStyle = computed<any>(() => {
    let top = testSelectState.rects.value?.[0]?.y + testSelectState.rects.value?.[0]?.height || 0;
    let left = testSelectState.rects.value?.[0]?.x || 0;
    if (top === 0 && left === 0) {
        top = height.value - 30;
        left = width.value * 0.5;
    }
    return {
        top: top + 'px',
        left: left + 'px'
    };
});

const aiClick = () => {
    mentionValue.value += testSelectState.text.value;
    show.value = true;
};
onBeforeUnmount(() => {
    window.removeEventListener('mousemove', mousemoveListener);
});
onMounted(() => {
    window.addEventListener('mouseup', () => {
        isMousedown.value = false;
    });
    window.addEventListener('mousemove', (e) => {
        currTargetEvent.value = e;
        mousemoveListener(e);
    });
});
</script>
<style lang="less">
.ai-assistant {
}
#theatrejs-studio-root {
    z-index: 10000 !important;
}

.ai-helper-object3d {
    transform-origin: 500px 250px;
    @keyframes ai-helper-object3d-show {
        from {
            transform: scale(0);
        }
        to {
            transform: scale(1);
        }
    }
    @keyframes ai-helper-object3d-hide {
        from {
            transform: scale(1);
        }
        to {
            transform: scale(0);
        }
    }
    &.show {
        animation: ai-helper-object3d-show 0.3s ease-in-out forwards;
    }
    &.hide {
        animation: ai-helper-object3d-hide 0.3s ease-in-out forwards;
    }
}
.ai-mention {
    @keyframes ai-mention-show {
        from {
            transform: translateY(200%);
            opacity: 0;
        }
        to {
            transform: translateY(0%);
            opacity: 1;
        }
    }
    @keyframes ai-mention-hide {
        from {
            transform: translateY(0);
            opacity: 1;
        }
        to {
            transform: translateY(200%);
            opacity: 0;
        }
    }
    &.show {
        animation: ai-mention-show 0.3s ease-in-out forwards;
    }
    &.hide {
        animation: ai-mention-hide 0.3s ease-in-out forwards;
    }
}
.ai-mention-chat {
    @keyframes ai-mention-chat-show {
        from {
            opacity: 0;
        }
        99.99% {
            opacity: 1;
        }
        to {
            display: block;
            opacity: 1;
        }
    }
    @keyframes ai-mention-chat-hide {
        from {
            opacity: 1;
        }
        99.99% {
            opacity: 0;
        }
        to {
            display: none;
            opacity: 0;
        }
    }
    &.show {
        animation: ai-mention-chat-show 0.3s ease-in-out forwards;
    }
    &.hide {
        animation: ai-mention-chat-hide 0.3s ease-in-out forwards;
    }
}
.ai-panel-history {
    @keyframes ai-panel-history-show {
        from {
            opacity: 0;
            transform: translateX(-100%);
        }
        99.99% {
            opacity: 1;
            transform: translateX(0);
        }
        to {
            display: block;
            opacity: 1;
        }
    }
    @keyframes ai-panel-history-hide {
        from {
            opacity: 1;
            transform: translateX(0);
        }
        99.99% {
            opacity: 0;
            transform: translateX(-100%);
        }
        to {
            display: none;
            opacity: 0;
        }
    }
    &.show {
        animation: ai-panel-history-show 0.3s ease-in-out forwards;
    }
    &.hide {
        animation: ai-panel-history-hide 0.3s ease-in-out forwards;
    }
}
</style>
