import {
    Scene,
    PerspectiveCamera,
    WebGLRenderer, Color,
} from 'three';
import * as THREE from 'three';
import WebGL from 'three/examples/jsm/capabilities/WebGL';
import {SetupContext, Prop} from "vue";
import cssRender from 'css-render'
import bem from '@css-render/plugin-bem'
import { useSsrAdapter } from '@css-render/vue3-ssr'
import {createCNode, CSelector} from "css-render/lib/types";
import {Vector3} from "three/src/math/Vector3";
import {Vector2} from "three/src/math/Vector2";
import {ColorRepresentation} from "three/src/utils";
const datatest = ref<any>({
    x:-0.5,
    y:0.5,
    z:0,
    step:0.05
})
const cssr = cssRender()
const plugin = bem({
})
cssr.use(plugin) // bind the plugin with the cssr instance
const {
    cB, cE, cM
} = plugin
const { c }: { c:createCNode<CSelector> } = cssr
const canvas = ref<HTMLCanvasElement>()
const baseTheeEl = ref<HTMLDivElement>()
const {width:innerWidth, height:innerHeight} = useWindowSize()
export class BaseThreeClass {
    THREE:typeof THREE = THREE
    /**
     * 视图
     */
    scene:Scene
    /**
     * 相机
     */
    camera:PerspectiveCamera
    /**
     * 渲染器
     */
    renderer:WebGLRenderer
    constructor(public props:PropsBase, public ctx:SetupContext<typeof emits>) {
    }

    /**
     * 设置视图
     */
    setScene(){
        this.scene = new Scene()
        this.scene.rotation.set(-0.5, 0.5, 0)
    }

    /**
     * 设置相机
     */
    setCamera(){
        this.camera = new PerspectiveCamera(this.props.fov, this.props.aspect || innerWidth.value / innerHeight.value, this.props.near, this.props.far)
        this.camera.position.set( 0, 0, 1000);
        this.camera.lookAt( 0, 0, 0 );
    }

    /**
     * 设置渲染器
     */
    setRenderer(){
        this.renderer = new WebGLRenderer({
            canvas:canvas.value,
            antialias:true
        })
        this.renderer.setSize(this.props.sizeWidth || innerWidth.value, this.props.sizeHeight || innerHeight.value)
    }

    /**
     * 重置
     */
    reset(){
        this.checkWebGL(()=>{
            this.setScene()
            this.setCamera()
            this.setRenderer()
            this.initRender()
        })
    }

    /**
     * 检查是否支持webGL
     * @param callback
     */
    checkWebGL(callback:Function){
        if (WebGL.isWebGLAvailable()) {
            // Initiate function or other initializations here
            callback()
        } else {
            baseTheeEl.value.appendChild(WebGL.getWebGLErrorMessage())
        }
    }

    /**
     * 初始化渲染
     */
    initRender(){
        this.ctx.emit("load", this)
        this.renderer.render( this.scene, this.camera );
        this.renderer.setAnimationLoop((...args)=>{
            this.ctx.emit('animation', this, ...args)
            this.renderer.render( this.scene, this.camera );
        })
    }

    /**
     * 绘制线
     */
    drawLine(points: Vector3[] | Vector2[], color:ColorRepresentation = 0xffffff){
        const material = new THREE.LineBasicMaterial( { color, linewidth:50 } );
        const geometry = new THREE.BufferGeometry().setFromPoints(points);
        const line = new THREE.Line( geometry, material );
        this.scene.add( line );
    }

    /**
     * 设置坐标线
     */
    setCoordinateLine(lingMax:number = 100){
        // x
        this.drawLine([
            new THREE.Vector3( 0, 0, 0 ),
            new THREE.Vector3( lingMax, 0, 0 )
        ], "#ff0000")
        // y
        this.drawLine([
            new THREE.Vector3( 0, 0, 0 ),
            new THREE.Vector3( 0, lingMax, 0 )
        ], "#00ff3a")
        // z
        this.drawLine([
            new THREE.Vector3( 0, 0, 0 ),
            new THREE.Vector3( 0, 0, lingMax )
        ], "#250bc7")
    }
}
type PropsBase = {
    modelValue:BaseThreeClass
    fov:number
    near:number
    far:number
    aspect:number
    sizeWidth:number
    sizeHeight:number
}
const propsBaseThree:{
    [key in keyof PropsBase]:Prop<PropsBase[key]>
} = {
    modelValue: {} as Prop<BaseThreeClass>,
    fov:{} as Prop<number>,
    near:{} as Prop<number>,
    far:{} as Prop<number>,
    aspect:{} as Prop<number>,
    sizeWidth:{} as Prop<number>,
    sizeHeight:{} as Prop<number>,
}
const emits = {
    load:(myThee:BaseThreeClass)=>true,
    animation:(myThee:BaseThreeClass, ...args:any[])=>true,
    ['update:modelValue']:(myThee:BaseThreeClass)=>true,
}
const style = cB(
    'base-three',
    {
        position:"absolute",
        left:0,
        top:0,
        width:'100%',
        height:'100%',
        overflow:'hidden',
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    },
    [
        cE("canvas",{
            width: "100%",
            height: "100%",
            position: "absolute",
            left: 0,
            top: 0,
            zIndex:1,
        }),
        c("#webglmessage",{
            position:"absolute",
            top:"50%",
            left:"50%",
            transform:"translate(-50%, 50%)",
            zIndex:"1",
            margin:"0 !important",
        }),
        cE("panel", {
            position:"absolute",
            left:0,
            top:0,
            background:"#fff",
            zIndex:3
        })
    ]
)
const ssr = useSsrAdapter()
style.mount({
    id:'BaseThree',
    ssr
})
export default defineComponent({
    props:propsBaseThree,
    emits,
    setup(props, ctx){
        onMounted(()=>{
            const myThree =  new BaseThreeClass(props as any, ctx)
            ctx.emit('update:modelValue', myThree)
            watchEffect(()=>{
                myThree.reset()
            })
        })
        return ()=> (<div class="base-three" style={style.render()} ref={baseTheeEl}>
            <canvas class={'base-three__canvas'} ref={canvas}></canvas>
            <div class={'base-three__panel'}>
                <input placeholder={'x'} type={'number'} v-model={datatest.value.x} step={datatest.value.step}/>
                <input placeholder={'y'} type={'number'} v-model={datatest.value.y} step={datatest.value.step}/>
                <input placeholder={'z'} type={'number'} v-model={datatest.value.z} step={datatest.value.step}/>
            </div>
        </div>)
    }
})
