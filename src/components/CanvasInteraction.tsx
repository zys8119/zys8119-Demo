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
        border:'1px ',
        position:'absolute',
        left:0,
        top:0,
        width:'100%',
        height:'100%',
    })
])
export const ssr: any = useSsrAdapter()
style.mount({
    id: 'CanvasInteraction',
    ssr
})

// 代码
class svgToBezierCurve {
    dArr = [];
    config:any = {
        fill:true,
        offsetX:0,
        offsetY:0,
    };
    /**
     * svg paths 转 canvas 贝塞曲线
     * @param d
     * @param w
     * @param h
     * @returns {*}
     */
    constructor(d, config) {
        this.config = Object.assign(this.config, config)
        this.dArr = d.match(/[a-z][^a-z]+/img);
        this.dArr = this.dArr.map(e=>e.match(/(\w|\.|-)*/img).filter(e=>e))
    }

    /**
     * 获取 贝塞曲线
     */
    getBezierCurve(){
        let result = this.dArr.map(e=>{
            const n = e.map(e=>Number(e.replace(/[^0-9.-]/img,""))).map((e,k)=>{
                const xs:any = Object.prototype.toString.call(this.config.offsetX === "[object String]") ? "+":0;
                const ys:any = Object.prototype.toString.call(this.config.offsetY === "[object String]") ? "+":0;
                return e+(k % 2 ? ys + this.config.offsetY :xs + this.config.offsetX)
            })
            const bstr = n.join(",")
            return (({
                m:()=>`ctx.moveTo(${bstr})`,
                c:()=>`ctx.bezierCurveTo(${bstr})`,
                q:()=>`ctx.quadraticCurveTo(${bstr})`,
                l:()=>`ctx.lineTo(${bstr})`,
            }[e[0].match(/^[a-z]/img)[0].toLowerCase()]) || ((e)=>e))(e);
        });
        result = ['ctx.beginPath()'].concat(result).concat(['ctx.closePath()'])
        if(this.config.fill){
            result = result.concat(["ctx.fill()"])
        }
        return result.join(";\n")
    }
}

export interface ObjectBaseType {
    type?:string
    isInside?(): boolean

    draw?(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement): Promise<any> | void

    drawRotation?(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement): Promise<any> | void

    panstart?(event: any): [xName: string, yName: string]

    panmove?(event: any): [xName: string, yName: string]

    mousePointCalc?(rotationAngle: number, isReverse?:boolean): number[]

    visible?: boolean
    readonly width?: number
    readonly height?: number
    readonly left?: number
    readonly top?: number
    readonly gapSize?: number
    readonly gapSizeBlank?: number
    readonly position?: string | void
    readonly centerX?: number
    readonly centerY?: number
    readonly mousePoint?: number[]
    x?: number
    y?: number
    w?: number
    h?: number
    rotationAngle?: number
}

const CanvasInteraction = defineComponent({
    emits: {
        load: () => true,
        pen: (event:any) => true,
        penStart: (object:any, event:any) => true,
        penMove: (object:any, event:any) => true,
        penEnd: (object:any, event:any) => true,
        leave: (object:any) => true,
        enter: (object:any) => true,
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
        const {Shift,
            Alt,
            Shift_keyX,
            Space,
            Shift_keyY
        } = useMagicKeys({
            onEventFired(e) {
                console.log(e.code, 5555)
            }
        })
        const ctxTranslate = ref([0,0])
        const ctxScale = ref(1)
        const isPan = ref(false)
        const iconRotationRef = ref<HTMLImageElement>(null)

        ;(async ()=>{
            const iconRotation = `<svg t="1682039044848" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2655" data-spm-anchor-id="a313x.7781069.0.i1" width="200" height="200">
                <path d="M924 192c-19.8 0-36 16.2-36 36v40.3c-17-26.2-36.8-50.6-59.2-73.1-41.1-41.1-89-73.4-142.4-96C631.1 75.9 572.5 64 512 64S392.9 75.9 337.6 99.2c-53.4 22.6-101.3 54.9-142.4 96s-73.4 89-96 142.4C75.9 392.9 64 451.5 64 512s11.9 119.1 35.2 174.4c22.6 53.4 54.9 101.3 96 142.4 41.1 41.1 89 73.4 142.4 96C392.9 948.1 451.5 960 512 960c76.4 0 151.9-19.6 218.2-56.6 64.3-35.9 119.3-87.6 159.1-149.6 10.3-16.1 5.7-37.5-10.4-47.8-16.1-10.3-37.5-5.7-47.8 10.4-33.7 52.5-80.2 96.2-134.6 126.6-56 31.3-119.8 47.8-184.4 47.8-51.2 0-100.8-10-147.4-29.8-45.1-19.1-85.6-46.4-120.4-81.2C209.4 745 182 704.5 163 659.4c-19.7-46.7-29.8-96.3-29.8-147.4 0-51.2 10-100.8 29.8-147.4 19.1-45.1 46.4-85.6 81.2-120.4C279 209.4 319.5 182 364.6 163c46.7-19.7 96.3-29.8 147.4-29.8 51.2 0 100.8 10 147.4 29.8 45.1 19.1 85.6 46.4 120.4 81.2C814.6 279 842 319.5 861 364.6c13.7 32.5 22.7 66.3 27 101.2V516c0 19.8 16.2 36 36 36s36-16.2 36-36V228c0-19.8-16.2-36-36-36z" fill="#ffffff" p-id="2656"></path>
<!--                <path d="M235.7 457.2c0-5.3 4.9-9.9 11.5-10.6 17.6-1.9 17.1-3 24.8-6.6 7.8-3.6 15.2-13 19.7-24.8 1.7-4.5 6.8-7.6 12.6-7.6h8.4c7.3 0 13.3 4.8 13.3 10.7v187.5c0 5.9-5.9 10.7-13.3 10.7h-14.4c-7.3 0-13.3-4.8-13.3-10.7V478.6c0-5.9-5.9-10.7-13.3-10.7H249c-7.3 0-13.3-4.8-13.3-10.7zM390.4 491.4c-7.7-7.8-11.6-18-11.6-30.5 0-15.6 5.7-29.1 17-40.3 11.3-11.2 27.4-16.8 48.1-16.8 20.1 0 35.8 5.3 47.3 15.9 11.4 10.6 17.1 23 17.1 37.1 0 13.1-3.3 23.7-10 31.8-3.7 4.6-9.5 9.1-17.3 13.5 8.7 4 15.6 8.6 20.6 13.8 9.3 9.8 14 22.5 14 38.1 0 18.5-6.2 34.1-18.6 46.9-12.4 12.8-29.9 19.3-52.6 19.3-20.4 0-37.7-5.5-51.8-16.6-14.1-11.1-21.2-27.2-21.2-48.3 0-12.4 3-23.1 9.1-32.2 6.1-9 15-15.9 27-20.7-7.3-3.1-13-6.8-17.1-11z m79.8 89.7c6.7-5.5 10.1-13.7 10.1-24.5 0-11.3-3.5-19.9-10.4-25.7-6.9-5.8-15.8-8.8-26.6-8.8-10.5 0-19 3-25.6 9-6.6 6-9.9 14.2-9.9 24.8 0 9.1 3 17 9.1 23.6 6 6.6 15.4 9.9 28.1 9.9 10 0 18.5-2.8 25.2-8.3zM463.9 477c4.9-4.9 7.4-10.8 7.4-17.5 0-5.9-2.4-11.3-7.1-16.3-4.7-4.9-11.9-7.4-21.5-7.4s-16.5 2.5-20.7 7.4c-4.3 4.9-6.4 10.7-6.4 17.4 0 7.5 2.8 13.3 8.3 17.5 5.5 4.2 12 6.3 19.5 6.3 8.7 0 15.6-2.5 20.5-7.4zM668.7 437.8c9.4 17.3 14.1 41 14.1 71 0 28.5-4.2 52.1-12.7 70.8-12.3 26.8-32.4 40.1-60.4 40.1-25.2 0-43.9-10.9-56.2-32.8-10.3-18.3-15.4-42.8-15.4-73.5 0-23.8 3.1-44.3 9.2-61.4 11.5-31.8 32.4-47.8 62.5-47.8 27.2 0.1 46.8 11.2 58.9 33.6z m-32.4 127.6c6.6-9.9 9.9-28.3 9.9-55.2 0-19.4-2.4-35.4-7.2-47.9-4.8-12.5-14.1-18.8-27.9-18.8-12.7 0-22 6-27.8 17.9-5.9 11.9-8.8 29.4-8.8 52.6 0 17.4 1.9 31.4 5.6 42 5.7 16.2 15.6 24.2 29.4 24.2 11.3 0 20.2-4.9 26.8-14.8zM787.5 417.2c8.5 8.5 12.7 19 12.7 31.3 0 12.7-4.4 23.3-13.3 31.7-8.8 8.4-19.1 12.7-30.8 12.7-13 0-23.6-4.4-31.9-13.2-8.3-8.8-12.5-19-12.5-30.8 0-12.5 4.4-23 13.1-31.6 8.7-8.6 19.2-12.9 31.3-12.9 12.5 0 22.9 4.3 31.4 12.8z m-45.3 45.2c3.9 3.9 8.5 5.8 13.9 5.8 5.2 0 9.8-1.9 13.6-5.7 3.9-3.8 5.8-8.5 5.8-13.9 0-5.3-1.9-9.8-5.7-13.7-3.8-3.9-8.4-5.8-13.7-5.8-5.3 0-10 1.9-13.8 5.7-3.9 3.8-5.8 8.5-5.8 13.9 0 5.3 1.9 9.9 5.7 13.7z" fill="#ffffff" p-id="2657"></path>-->
            </svg>`
            const iconRotationSrc = `data:image/svg+xml;base64,${btoa(iconRotation)}`
            const img:HTMLImageElement = await new Promise(resolve => {
                const img = new Image()
                img.src = iconRotationSrc
                img.onload = ()=>{
                    resolve(img)
                }
            })
            iconRotationRef.value = img
        })()

        watchEffect(() => {
            if (canvas) {
                canvas.width = (props.width || width.value)
                canvas.height = (props.height || height.value)
            }
        })
        const positionMap = computed(()=>({
            top_left: {
                cursor: 'nwse-resize'
            },
            top_center: {
                cursor: 'ns-resize'
            },
            top_right: {
                cursor: 'nesw-resize'
            },
            bottom_left: {
                cursor: 'nesw-resize'
            },
            bottom_center: {
                cursor: 'ns-resize'
            },
            bottom_right: {
                cursor: 'nwse-resize'
            },
            left_center: {
                cursor: 'ew-resize'
            },
            right_center: {
                cursor: 'ew-resize'
            },
            content: {
                cursor:Alt.value ? 'ns-resize' : 'move'
            },
            blank: {
                cursor:Alt.value ? 'ns-resize' :  'pointer'
            },
        }))

        class ObjectBase implements ObjectBaseType {
            visible = true
            rotationAngle = 0
            constructor(public x: number = 0, public y: number = 0, public w?: number, public h?: number) {
            }
            mousePointCalc(rotationAngle, isReverse?:boolean){
                const mx = (x.value - ctxTranslate.value[0]) / (canvas.width * ctxScale.value) * canvas.width
                const my = (y.value - ctxTranslate.value[1]) / (canvas.height * ctxScale.value) * canvas.height
                const a = mx - this.centerX
                const b = this.centerY - my
                const o = rotationAngle * Math.PI / 180
                const mouseX = isReverse ? a * Math.cos(o) + b * Math.sin(o) : a * Math.cos(o) - b * Math.sin(o)
                const mouseY = isReverse ? b * Math.cos(o) - a * Math.sin(o) : b * Math.cos(o) + a * Math.sin(o)
                return [
                    mouseX + this.centerX,
                    this.centerY - mouseY
                ]
            }
            get mousePoint(){
                return this.mousePointCalc(this.rotationAngle, false)
            }
            isInside() {
                if (this.w && this.h) {
                    const sx = this.mousePoint[0] - this.x
                    const sy = this.mousePoint[1] - this.y
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
                const sx = this.mousePoint[0] - this.x
                const sy = this.mousePoint[1] - this.y
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

            async drawRotation(ctx:CanvasRenderingContext2D, canvas:HTMLCanvasElement){
                if(!iconRotationRef.value || !Alt.value) {
                    return
                }
                let size = this.width * 0.3
                if(this.height < this.width){
                    size = this.height * 0.3
                }
                ctx.drawImage(
                    iconRotationRef.value,
                    0,
                    0,
                    iconRotationRef.value.width,
                    iconRotationRef.value.height,
                    this.centerX - size /2,
                    this.centerY - size /2,
                    size,
                    size
                )
                ctx.font = `${size * 0.3}px  bold`
                ctx.textAlign = "center"
                ctx.textBaseline = 'middle'
                ctx.save()
                ctx.translate(this.centerX, this.centerY)
                ctx.rotate(-Math.PI/180*this.rotationAngle)
                ctx.translate(-this.centerX,-this.centerY)
                ctx.fillText(
                    `${this.rotationAngle}°`,
                    this.centerX,
                    this.centerY,
                )
                ctx.restore()
            }
        }

        class createRect extends ObjectBase {
            type = 'rect'
            constructor(public color: string, public x: number, public y: number, public w: number, public h: number) {
                super(x, y, w, h)
            }

            async draw(ctx:CanvasRenderingContext2D) {
                ctx.fillStyle = this.color
                ctx.fillRect(this.x, this.y, this.w, this.h)
            }
        }

        class createImage extends ObjectBase {
            type = 'image'
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
                const sx = this.mousePoint[0] - (this.dx || this.x)
                const sy = this.mousePoint[1] - (this.dy || this.y)
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
                sceneRef: objectCache,
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
        watch(currObject,(a, b)=>{
            if(a){
                if(a !== b){
                    emit('leave', b)
                    emit('enter', a)
                }else {
                    emit('leave', b)
                }
            }else {
                emit('leave', b)
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
            let rotationAngle = 0
            let ctxTranslateCache = [0, 0]
            Hammerjs.on(canvas,"wheel, mousewheel", function(ev) {
                ctxScale.value +=  ev.deltaY * -0.001
                ctxScale.value = Math.min(Math.max(.125, ctxScale.value), 4);
            });
            hammer.get('pan').set({
                enable(r, event) {
                    emit('pen', event)
                    if (event) {
                        const [deltaX, deltaY] = [
                            event.deltaX/(ctxScale.value*canvas.width)*canvas.width,
                            event.deltaY/(ctxScale.value*canvas.height)*canvas.height
                        ]
                        if (event.isFirst) {
                            isPan.value = true
                            object = currObject.value
                            ctxTranslateCache = ctxTranslate.value
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
                                rotationAngle = object.rotationAngle
                                position = object.position
                            }
                            emit('penStart',object,  event)
                        } else if (event.isFinal) {
                            object = null
                            position = null
                            isPan.value = false
                            if(Space.value) {
                                ctxTranslate.value = [
                                    ctxTranslateCache[0] + event.deltaX,
                                    ctxTranslateCache[1] + event.deltaY,
                                ]
                            }
                            emit('penEnd',object,  event)
                        } else {
                            if(Space.value){
                                ctxTranslate.value = [
                                    ctxTranslateCache[0]+event.deltaX,
                                    ctxTranslateCache[1]+event.deltaY,
                                ]
                            }
                            else if (object) {
                                let moveW = w
                                let moveH = h
                                let moveX = x
                                let moveY = y
                                switch (position) {
                                    case 'top_left':
                                        if (Shift.value) {
                                            const ratio = getScaleRatio(w, h, w - deltaX, h - deltaY)
                                            moveW = w * ratio;
                                            moveH = h * ratio;
                                            moveX = x + w * (1-ratio)
                                            moveY = y + h * (1-ratio)
                                        }else {
                                            moveX = x + deltaX
                                            moveY = y + deltaY
                                            moveW = w - deltaX
                                            moveH = h - deltaY
                                        }
                                        break
                                    case 'top_center':
                                        if (Shift.value) {
                                            const mh = h - deltaY
                                            const mw = w * (mh / h)
                                            const ratio = getScaleRatio(w, h, mw, mh)
                                            moveW = w * ratio;
                                            moveH = h * ratio;
                                            moveX = x + (w - mw)/2
                                            moveY = y + h - mh
                                        }else {
                                            moveY = y + deltaY
                                            moveH = h - deltaY
                                        }
                                        break
                                    case 'top_right':
                                        if (Shift.value) {
                                            const ratio = getScaleRatio(w, h, w + deltaX, h - deltaY)
                                            moveW = w * ratio;
                                            moveH = h * ratio;
                                            moveY = y + h * (1-ratio)
                                        }else {
                                            moveY = y + deltaY
                                            moveW = w + deltaX
                                            moveH = h - deltaY
                                        }
                                        break
                                    case 'right_center':
                                        if (Shift.value) {
                                            const mw = w + deltaX
                                            const mh = h * (mw / w)
                                            const ratio = getScaleRatio(w, h, mw, mh)
                                            moveW = w * ratio;
                                            moveH = h * ratio;
                                            moveY = y + (h - mh)/2
                                        }else {
                                            moveW = w + deltaX
                                        }
                                        break
                                    case 'bottom_right':
                                        if (Shift.value) {
                                            const ratio = getScaleRatio(w, h, w + deltaX, h + deltaY)
                                            moveW = w * ratio;
                                            moveH = h * ratio;
                                        }else {
                                            moveW = w + deltaX
                                            moveH = h + deltaY
                                        }
                                        break
                                    case 'bottom_center':
                                        if (Shift.value) {
                                            const mh = h + deltaY
                                            const mw = w * (mh / h)
                                            const ratio = getScaleRatio(w, h, mw, mh)
                                            moveW = w * ratio;
                                            moveH = h * ratio;
                                            moveX = x + (w - mw)/2
                                        }else {
                                            moveH = h + deltaY
                                        }
                                        break
                                    case 'bottom_left':
                                        if (Shift.value) {
                                            const ratio = getScaleRatio(w, h, w - deltaX, h + deltaY)
                                            moveW = w * ratio;
                                            moveH = h * ratio;
                                            moveX = x + w * (1 - ratio)
                                        }else {
                                            moveX = x + deltaX
                                            moveW = w - deltaX
                                            moveH = h + deltaY
                                        }
                                        break
                                    case 'left_center':
                                        if (Shift.value) {
                                            const mw = w - deltaX
                                            const mh = h * (mw / w)
                                            const ratio = getScaleRatio(w, h, mw, mh)
                                            moveW = w * ratio;
                                            moveH = h * ratio;
                                            moveX = x + (w - mw)
                                            moveY = y + (h - mh)/2
                                        }else {
                                            moveX = x + deltaX
                                            moveW = w - deltaX
                                        }
                                        break
                                    default:
                                        if(['blank', 'content'].includes(position)){
                                            if(Alt.value){
                                                if(Shift.value){
                                                    object.rotationAngle = (rotationAngle + (Math.fround(event.deltaY % 50) + 1)*15) % 360
                                                }else {
                                                    object.rotationAngle = (rotationAngle + deltaY) % 360
                                                }
                                            }
                                            else
                                            if(Shift_keyX.value){
                                                moveX = x + deltaX
                                            }else if(Shift_keyY.value){
                                                moveY = y + deltaY
                                            }else {
                                                moveX = x + deltaX
                                                moveY = y + deltaY
                                            }
                                        }
                                        break
                                }
                                // 限制缩放最小值
                                if(moveW > 0 && moveH > 0){
                                    if (object.panmove) {
                                        const [k1, k2] = object.panmove(event)
                                        object[k1] = moveX
                                        object[k2] = moveY
                                    }else {
                                        object.x = moveX
                                        object.y = moveY
                                    }
                                    object.w = moveW
                                    object.h = moveH
                                }
                            }
                            emit('penMove',object,  event)
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
                ctx.save()
                ctx.clearRect(0, 0, canvas.width, canvas.height)
                ctx.translate(ctxTranslate.value[0],ctxTranslate.value[1])
                ctx.scale(ctxScale.value, ctxScale.value);
                let k = 0;
                while (k < objectCache.value.length) {
                    const object = objectCache.value[k]
                    if (object) {
                        if(object.visible){
                            ctx.save()
                            ctx.translate(object.centerX, object.centerY)
                            ctx.rotate(Math.PI/180*(object.rotationAngle || 0))
                            ctx.translate(-object.centerX, -object.centerY)
                            await object.draw(ctx, canvas)
                            if (props.showHelp && currObject.value === object) {
                                await drawAuxiliaryLine(object)
                                await object.drawRotation?.(ctx, canvas)
                            }
                            ctx.restore()
                        }
                    }
                    k += 1
                }
                ctx.translate(-ctxTranslate.value[0],-ctxTranslate.value[1])
                ctx.restore()
                requestAnimationFrame(_render)
            })()
        }
        onMounted(async () => {
            await render()
        })
        return () => (<div class="CanvasInteraction">
            <canvas ref={canvasRef} style={canvasStyle.value}></canvas>
        </div>)
    }
})

export default CanvasInteraction

