import {
    Scene,
    PerspectiveCamera,
    WebGLRenderer,
} from 'three';
import * as THREE from 'three';
import WebGL from 'three/examples/jsm/capabilities/WebGL';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';
import {VertexNormalsHelper} from 'three/examples/jsm/helpers/VertexNormalsHelper';
import {SetupContext, Prop} from "vue";
import cssRender from 'css-render'
import bem from '@css-render/plugin-bem'
import { useSsrAdapter } from '@css-render/vue3-ssr'
import {createCNode, CSelector} from "css-render/lib/types";
import {Vector3} from "three/src/math/Vector3";
import {Vector2} from "three/src/math/Vector2";
import {ColorRepresentation} from "three/src/utils";
const datatest = ref<any>({
    x:0,
    y:1,
    z:0,
    step:0.01
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
    controls:OrbitControls
    constructor(public props:PropsBase, public ctx:SetupContext<typeof emits>) {
    }

    /**
     * 设置视图
     */
    setScene(){
        this.scene = new Scene()
        this.scene.rotation.set(0, 1, 0)
        // watchEffect(()=>{
        //     const {x, y, z} = datatest.value
        //     this.scene.rotation.set(x, y, z)
        // })
    }

    /**
     * 设置相机
     */
    setCamera(){
        this.camera = new PerspectiveCamera(this.props.fov, this.props.aspect || innerWidth.value / innerHeight.value, this.props.near, this.props.far)
        // 设置相机位置
        this.camera.position.set( 400, 400, 400);
        // 查看相机具体位置
        this.camera.lookAt( 0, 0, 0 );
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
        let ambient = null;
        ambient= new THREE.AmbientLight(0xffffff);
        ambient = new THREE.DirectionalLight(0xffffff);
        ambient = new THREE.HemisphereLight(0x000000);
        this.scene.add(ambient); //将环境光添加到场景中

        // const light = new THREE.PointLight( 0xffffff, 1, 0 );
        // light.position.set( 0, 400, 0 );
        // light.castShadow = true;            // default false
        // this.scene.add( light );
        // const helper = new THREE.PointLightHelper(light)
        // this.scene.add(helper)

        const light = new THREE.DirectionalLight(0xffffff, 2)
        light.castShadow = true // 投射阴影
        light.position.set(400, 400, 400)
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
        const size = 1000
        const groundGeometry = new THREE.PlaneGeometry(size, size)
        const groundMaterial = new THREE.MeshPhongMaterial({ color: 0xcc8866, side: THREE.DoubleSide })
        const groundMesh = new THREE.Mesh(groundGeometry, groundMaterial)
        groundMesh.rotation.x = Math.PI * -0.5
        groundMesh.receiveShadow = true // 接受阴影
        this.scene.add(groundMesh)
    }

    /**
     * 重置
     */
    reset(){
        this.checkWebGL(()=>{
            this.setScene()
            this.setCamera()
            this.setRenderer()
            this.planeGeometry()
            this.setCoordinateLine()
            this.setLight()
            this.setMouseController()
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

        const geometry = new THREE.BoxGeometry( 10, 10, 10, 2, 2, 2 );
        const material = new THREE.MeshBasicMaterial( { color: 0xff0000 } );
        const box = new THREE.Mesh( geometry, material );
        const helper1 = new VertexNormalsHelper( box, 2, 0x00ff00 );
        this.scene.add( box );
        this.scene.add( helper1 );
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
