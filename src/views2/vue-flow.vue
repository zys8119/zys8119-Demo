<template>
    <div class='a abs-content abs-f' ref="box" @dragover.prevent @drop="onDrop" oncontextmenu.prevent="">
        <VueFlow :nodes="nodes" :edges="edges">
            <MiniMap pannable zoomable />
            <Controls />
            <template #node-custom="{ data }">
                <div class="w-100px h-100px bg-#f00 flex-center">askj</div>
                <NodeToolbar :is-visible="data.toolbarVisible" :position="data.toolbarPosition">
                    <button>delete</button>
                    <button>copy</button>
                    <button>expand</button>
                </NodeToolbar>
                <Handle id="source" type="source" :position="Position.Right" />
                <Handle id="source3" class="top-30%" type="source" :position="Position.Right" />
                <Handle id="a" type="target" class="top-30%" :position="Position.Left" />
            </template>
            <Background />
            <div class="abs z-5 top-50% tr-y--50% left-10 bg-#f00" @dragover.stop.prevent @drop.stop.prevent>
                <div class="cursor-pointer" draggable="true" @dragstart="onDragStart($event, 'customNode')">判断条件</div>
            </div>
        </VueFlow>
    </div>
</template>
<script setup lang="ts">
import type { Node, Edge } from '@vue-flow/core'
import { VueFlow, Handle, Position, useVueFlow } from '@vue-flow/core'
import { MiniMap } from '@vue-flow/minimap'
import { Controls, ControlButton } from '@vue-flow/controls'
import { NodeToolbar } from '@vue-flow/node-toolbar'
import { Background } from '@vue-flow/background'
const box = ref<HTMLDivElement>()
const { x, y } = useMouseInElement(box)
const { selectNodesOnDrag,
    nodesConnectable,
    onConnect,
    addEdges,
    onSelectionContextMenu,
    getNodes,
    project,
    addNodes
} = useVueFlow({
    nodesConnectable: true,
})
// watchEffect(() => {
//     console.log(project({ x: x.value, y: y.value }), 'project')
// })
const onDragStart = (event: DragEvent, nodeType: string) => {
    event.dataTransfer.setData('node/type', nodeType)
    event.dataTransfer.effectAllowed = 'move'
}
const onDrop = (event: DragEvent) => {
    const type = event.dataTransfer?.getData('node/type')
    console.log(type)
    const id = Date.now().toString()
    addNodes({
        id,
        position: project({ x: x.value, y: y.value }),
        data: { label: `${type} node ${id}` },
    })
}
watch(getNodes, (edges) => {
    // console.log(edges.find(e => e.selected), 'edges')
}, { immediate: true, deep: true })
onConnect((params) => addEdges(params))
onMounted(() => {
    console.log(nodesConnectable.value, 'nodesConnectable')
})
onSelectionContextMenu((e) => {
    console.log(e, 'onSelectionContextMenu')
})
const nodes = ref<Node[]>([
    // an input node, specified by using `type: 'input'`
    {
        id: '1',
        type: 'input',
        position: { x: 250, y: 5 },
        targetPosition: Position.Left,
        sourcePosition: Position.Right,
        class: "bg-#f00",
        style: {
            backgroundColor: '#ff0'
        },
        // all nodes can have a data object containing any data you want to pass to the node
        // a label can property can be used for default nodes
        data: { label: 'Node 1' },
        selectable: true,
        events: {
            click: (e) => {
                console.log(e, 'contextmenu')
            }
        },

    },

    // default node, you can omit `type: 'default'` as it's the fallback type
    {
        id: '2',
        position: { x: 100, y: 100 },
        data: { label: 'Node 2' },
        ariaLabel: "asdas",
        connectable: 'single'
    },

    // An output node, specified by using `type: 'output'`
    {
        id: '3',
        type: 'output',
        position: { x: 400, y: 200 },
        data: { label: 'Node 3' },
    },

    // this is a custom node
    // we set it by using a custom type name we choose, in this example `special`
    // the name can be freely chosen, there are no restrictions as long as it's a string
    {
        id: '4',
        type: 'special', // <-- this is the custom node type name
        position: { x: 400, y: 200 },
        data: {
            label: 'Node 4',
            hello: 'world',
        },
    },
    {
        id: '5',
        type: 'custom', // <-- this is the custom node type name
        position: { x: 400, y: 200 },
        data: {
            label: 'Node 4',
            hello: 'world',
        },
    },
    {
        id: '6',
        position: { x: 0, y: 0 },
        data: {
            label: 'custom',
        },
    }
])

// these are our edges
const edges = ref<Edge[]>([
    {
        id: '1',
        source: '1',
        target: '2',
    }
])
</script>
<style scoped lang="less">
.a {}
</style>