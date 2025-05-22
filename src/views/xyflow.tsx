import React from 'react';
import { ReactFlow, Background, BackgroundVariant, Controls, applyNodeChanges } from '@xyflow/react';
import ReactDOM from 'react-dom/client';
import '@xyflow/react/dist/style.css';
import xyflowNode from './xyflowNode.vue';
import { h as vH } from 'vue';
const h = React.createElement;
const index = ref(0);
const createKey = () => {
    return `xyflow_${index.value++}`;
}
export default defineComponent(() => {
    const initialNodes = [
        {
            id: '1', position: { x: 0, y: 0 }, data: {
                title: 1,
            }
        },
        { id: '2', position: { x: 0, y: 100 }, data: { title: '2' } },
    ].map((node: any) => {
        node.data.label = h('div', {
            ref(el: any) {
                if (!el) return
                el?.__vue_app__?.unmount?.()
                return createApp(defineComponent(() => {
                    return () => vH(xyflowNode, {
                        node
                    })
                })).mount(el)
            }
        })
        return node
    })
    const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }];
    class aaa extends React.Component {
        constructor(props: any) {
            super(props);
            this.state = {
                nodes: initialNodes,
                edges: initialEdges
            }
        }
        componentDidMount() {
            console.log('组件挂载完毕');
        }
        render(): React.ReactNode {
            return h(React.StrictMode, null, [
                h(ReactFlow, {
                    key: createKey(),
                    nodes: this.state.nodes,
                    edges: this.state.edges,
                    fitView: true,
                    onNodesChange: (changes) => {
                        this.setState((nds: any) => {
                            applyNodeChanges(changes, nds)
                        })
                    }
                }, [
                    h(Background, {
                        key: createKey(),
                        color: '#aaa',
                        gap: 20,
                        variant: BackgroundVariant.Dots
                    }),
                    h(Controls, {
                        key: createKey(),
                    }),
                ])
            ])
        }
    }
    const render = (el: HTMLElement) => {
        // const [nodes, setNodes] = React.useState(initialNodes.value);
        ReactDOM.createRoot(el).render(h(aaa));
    }

    return () => <div class="abs-content" id="root" ref={render}></div>
})