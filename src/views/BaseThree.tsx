import {
    Scene,
    PerspectiveCamera,
    WebGLRenderer, Mesh, GridHelper, BoxGeometry, MeshLambertMaterial,
} from 'three';
import * as THREE from 'three';
import {merge} from 'lodash';
import WebGL from 'three/examples/jsm/capabilities/WebGL';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { TransformControls } from 'three/examples/jsm/controls/TransformControls.js';
import { VertexNormalsHelper } from 'three/examples/jsm/helpers/VertexNormalsHelper';
import { SetupContext, Prop } from "vue";
import cssRender from 'css-render'
import bem from '@css-render/plugin-bem'
import { useSsrAdapter } from '@css-render/vue3-ssr'
import {createCNode, CSelector} from "css-render/lib/types";
import {Vector3} from "three/src/math/Vector3";
import {Vector2} from "three/src/math/Vector2";
import {ColorRepresentation} from "three/src/utils";
const cssr = cssRender()
const plugin = bem({})
cssr.use(plugin) // bind the plugin with the cssr instance
const {
    cB, cE, cM
} = plugin
const { c }: { c:createCNode<CSelector> } = cssr
const canvas = ref<HTMLCanvasElement>()
const baseTheeEl = ref<HTMLDivElement>()
const {width:innerWidth, height:innerHeight} = useWindowSize()
export interface InitializationData {
    [key:string]:any
    camera?:Partial<{
        x:number
        y:number
        z:number
        step:number
    }>
}
const initializationData = ref<InitializationData>({
    camera:{
        x:400,
        y:400,
        z:400,
        step:10
    }
})
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
    controls:OrbitControls
    constructor(public props:PropsBase, public ctx:SetupContext<typeof emits>) {
    }

    /**
     * 设置视图
     */
    setScene(){
        this.scene = new Scene()
    }

    /**
     * 设置相机
     */
    setCamera(){
        this.camera = new PerspectiveCamera(this.props.fov, this.props.aspect || innerWidth.value / innerHeight.value, this.props.near, this.props.far)
        // 查看相机具体位置
        this.camera.lookAt( 0, 0, 0 );
        watchEffect(()=>{
            // 设置相机位置
            this.camera.position.set(initializationData.value.camera.x, initializationData.value.camera.y, initializationData.value.camera.z);
        })
    }

    /**
     * 设置渲染器
     */
    setRenderer(){
        this.renderer = new WebGLRenderer({
            canvas:canvas.value,
            alpha:true,
            antialias:true,
        })
        this.renderer.setSize(this.props.sizeWidth || innerWidth.value, this.props.sizeHeight || innerHeight.value)
        this.renderer.shadowMap.enabled = true
        this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    }

    /**
     * 设置灯光
     */
    setLight(){
        // 环境灯
        const light = new THREE.DirectionalLight(0xffffff, 2)
        light.castShadow = true // 投射阴影
        light.position.set(1000, 1000, 1000)
        light.target.position.set(-0, -0, -0)
        const d = 1000
        light.shadow.camera.left = -d
        light.shadow.camera.right = d
        light.shadow.camera.top = d
        light.shadow.camera.bottom = -d
        light.shadow.camera.near = 0.1
        light.shadow.camera.far = 10000
        this.scene.add(light)
        this.scene.add(light.target)
        // 灯光帮助
        const helper = new THREE.DirectionalLightHelper(light)
        this.scene.add(helper)

        const cameraHelper = new THREE.CameraHelper(light.shadow.camera)
        this.scene.add(cameraHelper)
    }

    /**
     * 鼠标控制器
     */
    setMouseController(){
        this.controls = new OrbitControls(this.camera,this.renderer.domElement)
        this.controls.update()
    }

    /**
     * 平面几何
     */
    planeGeometry(){
        const size = 1500
        const groundGeometry = new THREE.PlaneGeometry(size, size)
        const groundMaterial = new THREE.MeshPhongMaterial({ color: 0xcc8866, side: THREE.DoubleSide })
        const groundMesh = new THREE.Mesh(groundGeometry, groundMaterial)
        groundMesh.rotation.x = Math.PI * -0.5
        groundMesh.receiveShadow = true // 接受阴影
        this.scene.add(groundMesh)
        return {
            box:groundGeometry,
            material:groundMaterial,
            mesh:groundMesh
        }
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
        this.render()
        this.renderer.setAnimationLoop((...args)=>{
            this.ctx.emit('animation', this, ...args)
            this.render()
        })
    }

    render(){
        this.renderer.render( this.scene, this.camera );
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

        const geometry = new THREE.BoxGeometry( 10, 10, 10, 2, 2, 2 );
        const material = new THREE.MeshBasicMaterial( { color: 0xff0000 } );
        const box = new THREE.Mesh( geometry, material );
        const helper1 = new VertexNormalsHelper( box, 2, 0x00ff00 );
        this.scene.add( box );
        this.scene.add( helper1 );
    }

    /**
     * 添加几何体
     */
    addBoxGeometry():({
        mesh:Mesh,
        material:MeshLambertMaterial
        box:BoxGeometry
    }){
        const box = new THREE.BoxGeometry(100,100,100)
        const material = new THREE.MeshLambertMaterial({
            map:new THREE.TextureLoader().load("https://t7.baidu.com/it/u=4036010509,3445021118&fm=193&f=GIF"),
            transparent:true
        })
        const mesh = new THREE.Mesh(box, material)
        mesh.position.set(0,50, 0)
        mesh.castShadow = true
        mesh.receiveShadow = true
        this.scene.add(mesh)
        return {
            box,
            material,
            mesh
        }
    }

    /**
     * 网格帮助
     */
    gridHelper():GridHelper{
        const G = new THREE.GridHelper( 1000, 10, 0x888888, 0x444444 )
        this.scene.add(G);
        return G
    }

    /**
     * 变换控制
     * @constructor
     */
    transformControls():TransformControls{
        const control = new TransformControls( this.camera, this.renderer.domElement );
        control.addEventListener( 'change', (e)=>{
            this.render();
        });
        control.addEventListener( 'dragging-changed',  ( event )=> {
            this.controls.enabled = ! event.value;
        });
        this.scene.add(control)
        return control
    }

    /**
     * 重置
     */
    reset(){
        this.checkWebGL(()=>{
            this.setScene()
            this.setCamera()
            this.setRenderer()
            this.setMouseController()
            this.setLight()
            this.setCoordinateLine()
            this.initRender()
            this.planeGeometry()
        })
    }
}

export type PropsBase = {
    modelValue:BaseThreeClass
    fov:number
    near:number
    far:number
    aspect:number
    sizeWidth:number
    sizeHeight:number
    initializationData:Partial<InitializationData>
}
export const propsBaseThree:{
    [key in keyof PropsBase]:Prop<PropsBase[key]>
} = {
    modelValue: {} as Prop<BaseThreeClass>,
    fov:{} as Prop<number>,
    near:{} as Prop<number>,
    far:{} as Prop<number>,
    aspect:{} as Prop<number>,
    sizeWidth:{} as Prop<number>,
    sizeHeight:{} as Prop<number>,
    initializationData:{} as Prop<Partial<InitializationData>>,
}
export const emits = {
    load:(myThee:BaseThreeClass)=>true,
    animation:(myThee:BaseThreeClass, ...args:any[])=>true,
    ['update:modelValue']:(myThee:BaseThreeClass)=>true,
    ['update:initialization-data']:(data:InitializationData)=>true,
}
export const style = cB(
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
        alignItems:'center',
        backgroundColor:"#222222"
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
            background:"#202124",
            zIndex:3,
            minHeight:"50px",
            width:'100%',
            color:'#fff'
        })
    ]
)
export const ssr = useSsrAdapter()
style.mount({
    id:'BaseThree',
    ssr
})
export default defineComponent({
    props:propsBaseThree,
    emits,
    setup(props, ctx){
        const {slots} = ctx
        ctx.emit('update:initialization-data', initializationData.value)
        watch(props.initializationData, ()=>{
            initializationData.value = merge(initializationData.value, props.initializationData)
        })
        onMounted(()=>{
            const myThree =  new BaseThreeClass(props as any, ctx)
            ctx.emit('update:modelValue', myThree)
            watchEffect(()=>{
                myThree.reset()
            })
        })
        return ()=> (<div class="base-three" ref={baseTheeEl}>
            <canvas class={'base-three__canvas'} ref={canvas}></canvas>
            <div class={'base-three__panel'}>
                {slots.panel?.(initializationData.value)}
            </div>
        </div>)
    }
})
