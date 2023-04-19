<template>
    <div class="PathRecognition">
        <canvas ref="canvas" :style="canvasStyle"></canvas>
    </div>
</template>

<script setup lang="ts" title="canvas 路径识别" content="可用于纯色图片的路径矢量图路径获取">
import picture from "@/src/assets/picture.jpeg"
import Hammerjs from "hammerjs"
const canvas = $ref() as HTMLCanvasElement
const ctx = $computed(() => canvas.getContext('2d'))
const {width, height} = useWindowSize()
const objectCache = ref([])
const {x, y} = useMouseInElement(canvas)
const props = defineProps({
    gap:{
        type:Number,
        default:10
    },
    gapLineWidth:{
        type:Number,
        default:2
    },
})
watchEffect(()=>{
    if(canvas){
        canvas.width = width.value
        canvas.height = height.value
    }
})
interface ObjectBaseType {
    isInside?():boolean
    draw?(ctx:CanvasRenderingContext2D, canvas:HTMLCanvasElement):Promise<any> | void
    panstart?(event:any):[xName:string, yName:string]
    panmove?(event:any):[xName:string, yName:string]
}
class ObjectBase implements ObjectBaseType{
    constructor(public x: number, public y: number, public w?: number, public h?: number) {
    }
    isInside() {
        if(this.w && this.h){
            const sx = x.value - this.x
            const sy = y.value - this.y
            return sx > 0 && sx < this.w && sy > 0 && sy < this.h
        }
        return  false
    }
    get width(){
        return this.w
    }
    get height(){
        return this.h
    }
    get left(){
        return this.x
    }
    get top(){
        return this.y
    }
}
class createRect extends ObjectBase{
    constructor(public color: string, public x: number, public y: number, public w: number, public h: number) {
        super(x, y, w, h)
    }

    async draw(ctx) {
        ctx.fillStyle = this.color
        ctx.fillRect(this.x, this.y, this.w, this.h)
    }
}
class createImage extends ObjectBase{
    image:CanvasImageSource
    constructor(public src: string | CanvasImageSource, public x: number, public y: number, public w?: number, public h?: number, public dx?: number, public dy?: number, public dw?: number, public dh?: number) {
        super(x, y, w, h)
    }
    async draw(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement){
        if(!this.image){
            if(typeof this.src === 'string'){
                this.image = await new Promise<HTMLImageElement>((resolve, reject) => {
                    const img = new Image()
                    img.src = this.src as string
                    img.onload = ()=>{
                        resolve(img)
                    }
                    img.onerror = reject
                })
            }else {
                this.image = this.src
            }
        }
        if(this.w && this.h && this.dx && this.dy && this.dw && this.dh){
            ctx.drawImage(this.image, this.x, this.y, this.w, this.h, this.dx, this.dy, this.dw, this.dh)
        }else if(this.w && this.h){
            ctx.drawImage(this.image, this.x, this.y, this.w, this.h)
        }else {
            ctx.drawImage(this.image, this.x, this.y)
        }
    }
    override isInside(): boolean {
        const sx = x.value - (this.dx || this.x)
        const sy = y.value - (this.dy || this.y)
        return sx > 0 && sx < (this.dw || this.w) && sy > 0 && sy < (this.dh || this.h)
    }

    panstart(event: any): [xName: string, yName: string] {
        if(this.dx && this.dy){
            return ['dx', 'dy']
        }
        return ['x', 'y']
    }

    panmove(event: any): [xName: string, yName: string] {
        if(this.dx && this.dy){
            return ['dx', 'dy']
        }
        return ['x', 'y']
    }
}

const init = async ()=>{
    objectCache.value.push(new createRect("#f00", 50, 60, 100, 100))
    objectCache.value.push(new createRect("#0032ff", 500, 300, 500, 300))
    objectCache.value.push(new createRect("#f500d5", 90, 60, 200, 100))
    objectCache.value.push(new createImage(picture, 100, 10, 100, 100))
    await hammerInit()
}
const currObject = computed(()=>{
    let object = null
    for(let lng = objectCache.value.length - 1, k = lng; k >= 0; k--){
        if(objectCache.value[k].isInside()){
            object = objectCache.value[k]
            break
        }
    }
    return object
})

const canvasStyle = computed(()=>{
    return {
        cursor: currObject.value ? 'move' : 'pointer'
    }
})

const hammerInit = async ()=>{
    const hammer = new Hammerjs(canvas)
    let x = 0
    let y = 0
    let object = null
    hammer.on('panstart', (event)=>{
        object = currObject.value
        if(object){
            if(object.panstart){
                const [k1, k2] = object.panstart(event)
                x = object[k1]
                y = object[k2]
            }else {
                x = object.x
                y = object.y
            }
        }
    })
    hammer.on('panmove', (event)=>{
        if(object){
            if(object.panmove){
                const [k1, k2] = object.panmove(event)
                object[k1] = x + event.deltaX
                object[k2] = y + event.deltaY
            }else {
                object.x = x + event.deltaX
                object.y = y + event.deltaY
            }
        }
    })
}
const drawVertex = async (x, y)=>{
    const vertexOffset = props.gap/2;
    ctx.fillStyle = '#ffffff'
    ctx.fillRect(x - vertexOffset, y - vertexOffset, props.gap,props.gap)
    ctx.strokeRect(x - vertexOffset, y - vertexOffset, props.gap,props.gap)
}
const drawAuxiliaryLine = async (object:ObjectBase)=>{
    const mapOffset = props.gap + props.gapLineWidth;
    ctx.strokeStyle = '#f00'
    ctx.lineWidth = props.gapLineWidth
    ctx.strokeRect(object.left - mapOffset, object.top - mapOffset, object.width + mapOffset*2, object.height + mapOffset*2)
    // left_top
    await drawVertex(object.left - mapOffset, object.top - mapOffset)
    // top_center
    await drawVertex(object.left + object.width/ 2 , object.top - mapOffset)
    // right_top
    await drawVertex(object.left + object.width + mapOffset, object.top - mapOffset)
    // right_center
    await drawVertex(object.left + object.width + mapOffset, object.top - mapOffset + object.height / 2)
    // right_bottom
    await drawVertex(object.left + object.width + mapOffset, object.top + object.height + mapOffset)
    // bottom_center
    await drawVertex(object.left + object.width/ 2, object.top + object.height + mapOffset)
    // left_top
    await drawVertex(object.left - mapOffset, object.top + object.height + mapOffset)
    // left_center
    await drawVertex(object.left - mapOffset, object.top - mapOffset + object.height / 2)
}
const render = async ()=>{
    await init();
    await (async function _render(){
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        await Promise.all(objectCache.value.map((e)=>{
            return (async ()=>{
                await e.draw(ctx, canvas)
                if(currObject.value === e){
                    await drawAuxiliaryLine(e)
                }
            })()
        }))
        requestAnimationFrame(_render)
    })()
}

onMounted(async () => {
    await render()
})
</script>

<style scoped lang="less">
.PathRecognition {
    canvas {
        border: 1px;
        position: absolute;
        left: 0;
        top: 0;
    }
}
</style>
