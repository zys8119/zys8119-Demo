import Hammerjs from "hammerjs"
import cssRender from 'css-render'
import bem from '@css-render/plugin-bem'
import {useSsrAdapter} from '@css-render/vue3-ssr'
import {createCNode, CSelector} from 'css-render/lib/types'

const cssr = cssRender()
const plugin = bem({})
cssr.use(plugin) // bind the plugin with the cssr instance
const {cB, cE} = plugin
const {c}: { c: createCNode<CSelector> } = cssr
export const style = cB("CanvasInteraction", [
    c('canvas', {
        cursor: 'default',
        border:'1px '
    })
])
export const ssr: any = useSsrAdapter()
style.mount({
    id: 'CanvasInteraction',
    ssr
})

export interface ObjectBaseType {
    isInside?(): boolean

    draw?(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement): Promise<any> | void

    panstart?(event: any): [xName: string, yName: string]

    panmove?(event: any): [xName: string, yName: string]

    readonly width?: number
    readonly height?: number
    readonly left?: number
    readonly top?: number
    readonly gapSize?: number
    readonly gapSizeBlank?: number
    readonly position?: string | void
    readonly centerX?: number
    readonly centerY?: number
    x?: number
    y?: number
    w?: number
    h?: number
}

const CanvasInteraction = defineComponent({
    emits: {
        load: () => void 0,
        pen: (event:any) => void 0,
        penStart: (object:any, event:any) => void 0,
    },
    props: {
        gap: {
            type: Number,
            default: 10
        },
        gapLineWidth: {
            type: Number,
            default: 2
        },
        showHelp: {
            type: Boolean,
            default: true
        },
        width: {
            type: Number,
            default: null
        },
        height: {
            type: Number,
            default: null
        },
    },
    setup(props, {emit}) {
        const vm = getCurrentInstance()
        const canvasRef = ref()
        const canvas = $computed(() => canvasRef.value) as HTMLCanvasElement
        const ctx = $computed(() => canvas.getContext('2d'))
        const {width, height} = useWindowSize()
        const objectCache = ref([])
        const {x, y} = useMouseInElement(canvas)
        const {Shift} = useMagicKeys({
            onEventFired(e) {
                console.log(e.key)
            }
        })
        const isPan = ref(false)
        watchEffect(() => {
            if (canvas) {
                canvas.width = props.width || width.value
                canvas.height = props.height || height.value
            }
        })
        const positionMap = ref({
            top_left: {
                cursor: 'nw-resize'
            },
            top_center: {
                cursor: 'n-resize'
            },
            top_right: {
                cursor: 'ne-resize'
            },
            bottom_left: {
                cursor: 'sw-resize'
            },
            bottom_center: {
                cursor: 's-resize'
            },
            bottom_right: {
                cursor: 'se-resize'
            },
            left_center: {
                cursor: 'w-resize'
            },
            right_center: {
                cursor: 'e-resize'
            },
            content: {
                cursor: 'move'
            },
            blank: {
                cursor: 'pointer'
            },
        })

        class ObjectBase implements ObjectBaseType {
            constructor(public x: number = 0, public y: number = 0, public w?: number, public h?: number) {
            }

            isInside() {
                if (this.w && this.h) {
                    const sx = x.value - this.x
                    const sy = y.value - this.y
                    return sx > -this.gapSizeBlank && sx < this.w + this.gapSizeBlank && sy > -this.gapSizeBlank && sy < this.h + this.gapSizeBlank
                }
                return false
            }

            get gapSize() {
                return props.gap + props.gapLineWidth * 2
            }

            get gapSizeBlank() {
                return this.gapSize * 1.5
            }

            get width() {
                return this.w
            }

            get height() {
                return this.h
            }

            get left() {
                return this.x
            }

            get top() {
                return this.y
            }

            get centerX() {
                return this.x + this.w / 2
            }

            get centerY() {
                return this.y + this.h / 2
            }

            get position() {
                const sx = x.value - this.x
                const sy = y.value - this.y
                const isTop = sy >= -this.gapSizeBlank && sy <= this.gapSize - this.gapSizeBlank
                const isBottom = sy >= this.height + this.gapSize * 0.5 && sy <= this.height + this.gapSizeBlank
                const isLeft = sx >= -this.gapSizeBlank && sx <= this.gapSize - this.gapSizeBlank
                const isRight = sx >= this.width + this.gapSize * 0.5 && sx <= this.width + this.gapSize * 1.5
                const isWidthCenter = sx >= this.width / 2 - this.gapSize * 0.5 && sx <= this.width / 2 + this.gapSize * 0.5
                const isHeightCenter = sy >= this.height / 2 - this.gapSize * 0.5 && sy <= this.height / 2 + this.gapSize * 0.5
                if (isLeft && isTop) {
                    return 'top_left'
                }
                if (isWidthCenter && isTop) {
                    return 'top_center'
                }
                if (isRight && isTop) {
                    return 'top_right'
                }
                if (isLeft && isBottom) {
                    return 'bottom_left'
                }
                if (isWidthCenter && isBottom) {
                    return 'bottom_center'
                }
                if (isRight && isBottom) {
                    return 'bottom_right'
                }
                if (isLeft && isHeightCenter) {
                    return 'left_center'
                }
                if (isRight && isHeightCenter) {
                    return 'right_center'
                }
                return sx > 0 && sx < this.w && sy > 0 && sy < this.h ? 'content' : 'blank'
            }
        }

        class createRect extends ObjectBase {
            constructor(public color: string, public x: number, public y: number, public w: number, public h: number) {
                super(x, y, w, h)
            }

            async draw(ctx) {
                ctx.fillStyle = this.color
                ctx.fillRect(this.x, this.y, this.w, this.h)
            }
        }

        class createImage extends ObjectBase {
            image: CanvasImageSource

            constructor(public src: string | CanvasImageSource, public x: number, public y: number, public w?: number, public h?: number, public dx?: number, public dy?: number, public dw?: number, public dh?: number) {
                super(x, y, w, h)
            }

            async draw(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) {
                if (!this.image) {
                    if (typeof this.src === 'string') {
                        this.image = await new Promise<HTMLImageElement>((resolve, reject) => {
                            const img = new Image()
                            img.src = this.src as string
                            img.onload = () => {
                                resolve(img)
                            }
                            img.onerror = reject
                        })
                    } else {
                        this.image = this.src
                    }
                }
                if (this.w && this.h && this.dx && this.dy && this.dw && this.dh) {
                    ctx.drawImage(this.image, this.x, this.y, this.w, this.h, this.dx, this.dy, this.dw, this.dh)
                } else if (this.w && this.h) {
                    ctx.drawImage(this.image, this.x, this.y, this.w, this.h)
                } else {
                    ctx.drawImage(this.image, this.x, this.y)
                }
            }

            override isInside(): boolean {
                const sx = x.value - (this.dx || this.x)
                const sy = y.value - (this.dy || this.y)
                return sx > -this.gapSizeBlank && sx < (this.dw || this.w) + this.gapSizeBlank && sy > -this.gapSizeBlank && sy < (this.dh || this.h) + this.gapSizeBlank
            }

            panstart(event: any): [xName: string, yName: string] {
                if (this.dx && this.dy) {
                    return ['dx', 'dy']
                }
                return ['x', 'y']
            }

            panmove(event: any): [xName: string, yName: string] {
                if (this.dx && this.dy) {
                    return ['dx', 'dy']
                }
                return ['x', 'y']
            }
        }

        const init = async () => {
            await vm.vnode.props.onLoad?.({
                ObjectsClass: {
                    Rect: createRect,
                    Image: createImage,
                },
                ObjectBase,
                scene: objectCache.value,
                x,
                y,
                width,
                height,
                canvas,
                ctx,
                vm,
            })
            await hammerInit()
        }
        const currObject = computed(() => {
            let object =  null
            if(isPan.value){
                return  currObject.value
            }else {
                for (let lng = objectCache.value.length - 1, k = lng; k >= 0; k--) {
                    if (objectCache.value[k].isInside()) {
                        object = objectCache.value[k]
                        break
                    }
                }
                return object
            }
        })

        const canvasStyle = computed(() => {
            return {
                cursor: props.showHelp && currObject.value ? positionMap.value[currObject.value.position]?.cursor : null
            }
        })

        const getScaleRatio = (w: number, h: number, mw: number, mh: number) => {
            let ratio = 1
            if (w > mw) {
                ratio = mw / w
            } else if (h > mh) {
                ratio = mh / h
            } else if (mw > w) {
                ratio = mw / w
            } else {
                ratio = mh / h
            }
            return ratio
        }


        const hammerInit = async () => {
            const hammer = new Hammerjs(canvas)
            let x = 0
            let y = 0
            let w = 0
            let h = 0
            let object = null
            let position = null
            hammer.get('pan').set({
                enable(r, event) {
                    emit('pen', event)
                    if (event) {
                        if (event.isFirst) {
                            isPan.value = true
                            object = currObject.value
                            if (object) {
                                if (object?.panstart) {
                                    const [k1, k2] = object.panstart?.(event)
                                    x = object[k1]
                                    y = object[k2]
                                } else {
                                    x = object.x
                                    y = object.y
                                }
                                w = object.w
                                h = object.h
                                position = object.position
                            }
                            emit('penStart',object,  event)
                        } else if (event.isFinal) {
                            object = null
                            position = null
                            isPan.value = false
                        } else {
                            if (object) {
                                switch (position) {
                                    case 'top_left':
                                        if (Shift.value) {
                                            const ratio = getScaleRatio(w, h, w - event.deltaX, h - event.deltaY)
                                            object.w = w * ratio;
                                            object.h = h * ratio;
                                            object.x = x + w * (1-ratio)
                                            object.y = y + h * (1-ratio)
                                            return
                                        }
                                        object.x = x + event.deltaX
                                        object.y = y + event.deltaY
                                        object.w = w - event.deltaX
                                        object.h = h - event.deltaY
                                        break
                                    case 'top_center':
                                        if (Shift.value) {
                                            const ratio = getScaleRatio(w, h, w, h - event.deltaY)
                                            object.x = x + x * (1 - ratio) / 2
                                            object.w = w * ratio;
                                        }
                                        object.y = y + event.deltaY
                                        object.h = h - event.deltaY
                                        break
                                    case 'top_right':
                                        if (Shift.value) {
                                            const ratio = getScaleRatio(w, h, w + event.deltaX, h - event.deltaY)
                                            object.w = w * ratio;
                                            object.h = h * ratio;
                                            object.y = y + h * (1-ratio)
                                            return
                                        }
                                        object.y = y + event.deltaY
                                        object.w = w + event.deltaX
                                        object.h = h - event.deltaY
                                        break
                                    case 'right_center':
                                        if (Shift.value) {
                                            const ratio = getScaleRatio(w, h, w + event.deltaX, h)
                                            object.y = y + y * (1 - ratio) / 2
                                            object.h = h * ratio;
                                        }
                                        object.w = w + event.deltaX
                                        break
                                    case 'bottom_right':
                                        if (Shift.value) {
                                            const ratio = getScaleRatio(w, h, w + event.deltaX, h + event.deltaY)
                                            object.w = w * ratio;
                                            object.h = h * ratio;
                                            return
                                        }
                                        object.w = w + event.deltaX
                                        object.h = h + event.deltaY
                                        break
                                    case 'bottom_center':
                                        if (Shift.value) {
                                            const ratio = getScaleRatio(w, h, w, h + event.deltaY)
                                            object.x = x + x * (1 - ratio) / 2
                                            object.w = w * ratio;
                                        }
                                        object.h = h + event.deltaY
                                        break
                                    case 'bottom_left':
                                        if (Shift.value) {
                                            const ratio = getScaleRatio(w, h, w - event.deltaX, h + event.deltaY)
                                            object.w = w * ratio;
                                            object.h = h * ratio;
                                            object.x = x + x * (1 - ratio)
                                            return
                                        }
                                        object.x = x + event.deltaX
                                        object.w = w - event.deltaX
                                        object.h = h + event.deltaY
                                        break
                                    case 'left_center':
                                        if (Shift.value) {
                                            const ratio = getScaleRatio(w, h, w - event.deltaX, h)
                                            object.y = y + y * (1 - ratio) / 2
                                            object.h = h * ratio;
                                        }
                                        object.x = x + event.deltaX
                                        object.w = w - event.deltaX
                                        break
                                    default:
                                        if (object.panmove) {
                                            const [k1, k2] = object.panmove(event)
                                            object[k1] = x + event.deltaX
                                            object[k2] = y + event.deltaY
                                        } else {
                                            object.x = x + event.deltaX
                                            object.y = y + event.deltaY
                                        }
                                        break
                                }

                            }
                        }
                    }
                    return true
                }
            });
        }
        const drawVertex = async (x, y) => {
            const vertexOffset = props.gap / 2;
            ctx.fillStyle = '#ffffff'
            ctx.fillRect(x - vertexOffset, y - vertexOffset, props.gap, props.gap)
            ctx.strokeRect(x - vertexOffset, y - vertexOffset, props.gap, props.gap)
        }
        const drawAuxiliaryLine = async (object: ObjectBase) => {
            const mapOffset = props.gap + props.gapLineWidth;
            ctx.strokeStyle = '#f00'
            ctx.lineWidth = props.gapLineWidth
            ctx.strokeRect(object.left - mapOffset, object.top - mapOffset, object.width + mapOffset * 2, object.height + mapOffset * 2)
            // top_left
            await drawVertex(object.left - mapOffset, object.top - mapOffset)
            // top_center
            await drawVertex(object.left + object.width / 2, object.top - mapOffset)
            // top_right
            await drawVertex(object.left + object.width + mapOffset, object.top - mapOffset)
            // right_center
            await drawVertex(object.left + object.width + mapOffset, object.top + object.height / 2)
            // bottom_right
            await drawVertex(object.left + object.width + mapOffset, object.top + object.height + mapOffset)
            // bottom_center
            await drawVertex(object.left + object.width / 2, object.top + object.height + mapOffset)
            // bottom_left
            await drawVertex(object.left - mapOffset, object.top + object.height + mapOffset)
            // left_center
            await drawVertex(object.left - mapOffset, object.top + object.height / 2)
        }
        const render = async () => {
            await init();
            await (async function _render() {
                ctx.clearRect(0, 0, canvas.width, canvas.height)
                let k = 0;
                while (k < objectCache.value.length) {
                    const object = objectCache.value[k]
                    if (object) {
                        await object.draw(ctx, canvas)
                        if (props.showHelp && currObject.value === object) {
                            await drawAuxiliaryLine(object)
                        }
                    }
                    k += 1
                }
                requestAnimationFrame(_render)
            })()
        }
        const a = $ref()
        onMounted(async () => {
            await render()
        })
        return () => (<div class="CanvasInteraction">
            <canvas ref={canvasRef} style={canvasStyle.value}></canvas>
        </div>)
    }
})

export default CanvasInteraction

