<template>
    <drag-new :config="DragerCommonConfig" :headerBtns="headerBtns" v-model="elementsList"
        v-model:active="activeElement" v-model:scaleRatio="scaleRatio" title="排座面板" subtitle="描述"
        ref="contentRef"></drag-new>
</template>

<script setup lang="ts" title="座位布局（拖拽布局）">
const router = useRouter();
const scaleRatio = ref(1);
const contentRef = ref();
const DragerCommonConfig = computed(() => ({
    snapToGrid: true,
    snap: true,
    markline: true,
    rotatable: true,
    color: '#3a7afe'
}));
const activeElement = ref(null);
const elementsList = ref([]);
const handleSave = () => {
    console.log('save');
    console.log(elementsList.value);
};
const headerBtnsHandleClick = async (type: number) => {
    if (type === 1) {
        handleSave();
    } else if (type === 2) {
        const data: Blob = await contentRef.value.save();
        const a = document.createElement('a');
        a.href = URL.createObjectURL(data);
        a.download = '排座.png';
        a.click();
        a.remove();
    } else if (type === 3) {
        router.back();
    }
};
const headerBtns = ref([
    { name: '保存', click: headerBtnsHandleClick.bind(null, 1) },
    { name: '导出图片', click: headerBtnsHandleClick.bind(null, 2) },
    { name: '返回后台', click: headerBtnsHandleClick.bind(null, 3) }
]);
onMounted(async () => {
    elementsList.value = [
        {
            "id": "1733134689831",
            "top": 264.015625,
            "icon": "圆角矩形",
            "left": 314,
            "name": "会议桌（圆形矩形）",
            "angle": 0,
            "value": "103会议室",
            "width": 790,
            "height": 180,
            "selected": false,
            "borderWidth": 1,
            "elementYype": "ConferenceRotundityAndRect",
            "contentProps": {},
            "backgroundColor": "rgba(252, 214, 40, 1)",
            "rectangleInSelectionLock": false
        },
        {
            "id": "1733187067188",
            "top": 190.015625,
            "icon": "座位",
            "left": 396,
            "name": "座位",
            "angle": 0,
            "value": "座位",
            "width": 40,
            "height": 40,
            "selected": false,
            "borderWidth": 1,
            "elementYype": "Seat",
            "contentProps": {},
            "backgroundColor": "rgba(252, 131, 27, 1)",
            "rectangleInSelectionLock": false
        },
        {
            "id": "1733187108960",
            "top": 190.015625,
            "icon": "座位",
            "left": 466,
            "name": "座位",
            "angle": 0,
            "value": "座位",
            "width": 40,
            "height": 40,
            "selected": false,
            "borderWidth": 1,
            "elementYype": "Seat",
            "contentProps": {},
            "backgroundColor": "rgba(252, 131, 27, 1)",
            "rectangleInSelectionLock": false
        },
        {
            "id": "1733187115577",
            "top": 190.015625,
            "icon": "座位",
            "left": 539,
            "name": "座位",
            "angle": 0,
            "value": "座位",
            "width": 40,
            "height": 40,
            "selected": false,
            "borderWidth": 1,
            "elementYype": "Seat",
            "contentProps": {},
            "backgroundColor": "rgba(252, 131, 27, 1)",
            "rectangleInSelectionLock": false
        },
        {
            "id": "1733187122616",
            "top": 190.015625,
            "icon": "座位",
            "left": 609,
            "name": "座位",
            "angle": 0,
            "value": "座位",
            "width": 40,
            "height": 40,
            "selected": false,
            "borderWidth": 1,
            "elementYype": "Seat",
            "contentProps": {},
            "backgroundColor": "rgba(252, 131, 27, 1)",
            "rectangleInSelectionLock": false
        },
        {
            "id": "1733187127439",
            "top": 190.015625,
            "icon": "座位",
            "left": 679,
            "name": "座位",
            "angle": 0,
            "value": "座位",
            "width": 40,
            "height": 40,
            "selected": false,
            "borderWidth": 1,
            "elementYype": "Seat",
            "contentProps": {},
            "backgroundColor": "rgba(252, 131, 27, 1)",
            "rectangleInSelectionLock": false
        },
        {
            "id": "1733187133603",
            "top": 190.015625,
            "icon": "座位",
            "left": 749,
            "name": "座位",
            "angle": 0,
            "value": "座位",
            "width": 40,
            "height": 40,
            "selected": false,
            "borderWidth": 1,
            "elementYype": "Seat",
            "contentProps": {},
            "backgroundColor": "rgba(252, 131, 27, 1)",
            "rectangleInSelectionLock": false
        },
        {
            "id": "1733187137663",
            "top": 190.015625,
            "icon": "座位",
            "left": 819,
            "name": "座位",
            "angle": 0,
            "value": "座位",
            "width": 40,
            "height": 40,
            "selected": false,
            "borderWidth": 1,
            "elementYype": "Seat",
            "contentProps": {},
            "backgroundColor": "rgba(252, 131, 27, 1)",
            "rectangleInSelectionLock": false
        },
        {
            "id": "1733187140863",
            "top": 190.015625,
            "icon": "座位",
            "left": 899,
            "name": "座位",
            "angle": 0,
            "value": "张三",
            "width": 40,
            "height": 40,
            "selected": false,
            "borderWidth": 1,
            "elementYype": "Seat",
            "contentProps": {},
            "backgroundColor": "rgba(252, 131, 27, 1)",
            "rectangleInSelectionLock": false
        },
        {
            "id": "1733187147064",
            "top": 190.015625,
            "icon": "座位",
            "left": 974,
            "name": "座位",
            "angle": 0,
            "value": "座位",
            "width": 40,
            "height": 40,
            "selected": false,
            "borderWidth": 1,
            "elementYype": "Seat",
            "contentProps": {},
            "backgroundColor": "rgba(252, 131, 27, 1)",
            "rectangleInSelectionLock": false
        },
        {
            "id": "1733187200912",
            "top": 484.015625,
            "icon": "座位",
            "left": 974,
            "name": "座位",
            "angle": 0,
            "value": "座位",
            "width": 40,
            "height": 40,
            "selected": false,
            "borderWidth": 1,
            "elementYype": "Seat",
            "contentProps": {},
            "backgroundColor": "rgba(252, 131, 27, 1)",
            "rectangleInSelectionLock": false
        },
        {
            "id": "1733187207087",
            "top": 334.015625,
            "icon": "座位",
            "left": 1144,
            "name": "座位",
            "angle": 0,
            "value": "座位",
            "width": 40,
            "height": 40,
            "selected": false,
            "borderWidth": 1,
            "elementYype": "Seat",
            "contentProps": {},
            "backgroundColor": "rgba(252, 131, 27, 1)",
            "rectangleInSelectionLock": false
        },
        {
            "id": "1733187211496",
            "top": 334.015625,
            "icon": "座位",
            "left": 244,
            "name": "座位",
            "angle": 0,
            "value": "座位",
            "width": 40,
            "height": 40,
            "selected": false,
            "borderWidth": 1,
            "elementYype": "Seat",
            "contentProps": {},
            "backgroundColor": "rgba(252, 131, 27, 1)",
            "rectangleInSelectionLock": false
        },
        {
            "id": "1733187225111",
            "top": 484.015625,
            "icon": "座位",
            "left": 899,
            "name": "座位",
            "angle": 0,
            "value": "座位",
            "width": 40,
            "height": 40,
            "selected": false,
            "borderWidth": 1,
            "elementYype": "Seat",
            "contentProps": {},
            "backgroundColor": "rgba(252, 131, 27, 1)",
            "rectangleInSelectionLock": false
        },
        {
            "id": "1733187240639",
            "top": 484.015625,
            "icon": "座位",
            "left": 819,
            "name": "座位",
            "angle": 0,
            "value": "座位",
            "width": 40,
            "height": 40,
            "selected": false,
            "borderWidth": 1,
            "elementYype": "Seat",
            "contentProps": {},
            "backgroundColor": "rgba(252, 131, 27, 1)",
            "rectangleInSelectionLock": false
        },
        {
            "id": "1733187245728",
            "top": 484.015625,
            "icon": "座位",
            "left": 749,
            "name": "座位",
            "angle": 0,
            "value": "座位",
            "width": 40,
            "height": 40,
            "selected": false,
            "borderWidth": 1,
            "elementYype": "Seat",
            "contentProps": {},
            "backgroundColor": "rgba(252, 131, 27, 1)",
            "rectangleInSelectionLock": false
        },
        {
            "id": "1733187249904",
            "top": 484.015625,
            "icon": "座位",
            "left": 679,
            "name": "座位",
            "angle": 0,
            "value": "座位",
            "width": 40,
            "height": 40,
            "selected": false,
            "borderWidth": 1,
            "elementYype": "Seat",
            "contentProps": {},
            "backgroundColor": "rgba(252, 131, 27, 1)",
            "rectangleInSelectionLock": false
        },
        {
            "id": "1733187254463",
            "top": 484.015625,
            "icon": "座位",
            "left": 609,
            "name": "座位",
            "angle": 0,
            "value": "座位",
            "width": 40,
            "height": 40,
            "selected": false,
            "borderWidth": 1,
            "elementYype": "Seat",
            "contentProps": {},
            "backgroundColor": "rgba(252, 131, 27, 1)",
            "rectangleInSelectionLock": false
        },
        {
            "id": "1733187258368",
            "top": 484.015625,
            "icon": "座位",
            "left": 539,
            "name": "座位",
            "angle": 0,
            "value": "座位",
            "width": 40,
            "height": 40,
            "selected": false,
            "borderWidth": 1,
            "elementYype": "Seat",
            "contentProps": {},
            "backgroundColor": "rgba(252, 131, 27, 1)",
            "rectangleInSelectionLock": false
        },
        {
            "id": "1733187263615",
            "top": 484.015625,
            "icon": "座位",
            "left": 466,
            "name": "座位",
            "angle": 0,
            "value": "座位",
            "width": 40,
            "height": 40,
            "selected": false,
            "borderWidth": 1,
            "elementYype": "Seat",
            "contentProps": {},
            "backgroundColor": "rgba(252, 131, 27, 1)",
            "rectangleInSelectionLock": false
        },
        {
            "id": "1733187267168",
            "top": 484.015625,
            "icon": "座位",
            "left": 396,
            "name": "座位",
            "angle": 0,
            "value": "座位",
            "width": 40,
            "height": 40,
            "selected": false,
            "borderWidth": 1,
            "elementYype": "Seat",
            "contentProps": {},
            "backgroundColor": "rgba(252, 131, 27, 1)",
            "rectangleInSelectionLock": false
        }
    ];
});
const { KeyS, Ctrl, Meta, Delete, Backspace } = useMagicKeys({
    passive: false,
    onEventFired(e) {
        if (e.key === 's' && ['Control', 'Meta'].includes(e.key)) {
            e.preventDefault();
        }
    }
});
watch([KeyS, Ctrl, Meta], () => {
    if (KeyS.value && (Ctrl.value || Meta.value)) {
        handleSave();
    }
});
watch([Delete, Backspace], () => {
    elementsList.value = elementsList.value.filter((item: any) => {
        return !item.selected;
    });
});
</script>

<style scoped></style>
