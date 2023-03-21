import {
    Scene,
    PerspectiveCamera,
    WebGLRenderer, Mesh, GridHelper, BoxGeometry, MeshLambertMaterial, Clock
} from 'three';
import * as THREE from 'three';
import {merge} from 'lodash';
import WebGL from 'three/examples/jsm/capabilities/WebGL';
import { GUI } from 'three/examples/jsm/libs/lil-gui.module.min.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { TransformControls } from 'three/examples/jsm/controls/TransformControls.js';
import { VertexNormalsHelper } from 'three/examples/jsm/helpers/VertexNormalsHelper';
import { FontLoader, Font as FontLoaderToFont } from 'three/examples/jsm/loaders/FontLoader.js';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import {parse as parseFont, Font, GlyphSet} from 'opentype.js';
import { SetupContext, Prop, getCurrentInstance } from "vue";
import cssRender from 'css-render'
import bem from '@css-render/plugin-bem'
import { useSsrAdapter } from '@css-render/vue3-ssr'
import {createCNode, CSelector} from "css-render/lib/types";
import {Vector3} from "three/src/math/Vector3";
import {Vector2} from "three/src/math/Vector2";
import {ColorRepresentation} from "three/src/utils";
import {Texture} from "three/src/textures/Texture";
import {ComponentInternalInstance} from "@vue/runtime-core";
import {GLTF} from "three/examples/jsm/loaders/GLTFLoader";

/***
 * 获取字体格式
 * @param font
 * @param text
 * @param outJs
 */
export const convertFont = function(font:Font, text?:string, outJs?:boolean){
    let scale = (1000 * 100) / ( (font.unitsPerEm || 2048) *72);
    let result:any = {};
    result.glyphs = {};

    let restriction = {
        range : null,
        set : null
    };

    if (text) {
        let restrictContent = text;
        let rangeSeparator = '-';
        if (restrictContent.indexOf (rangeSeparator) != -1) {
            let rangeParts:any = restrictContent.split (rangeSeparator);
            if (rangeParts.length === 2 && !isNaN (rangeParts[0]) && !isNaN (rangeParts[1])) {
                restriction.range = [parseInt (rangeParts[0]), parseInt (rangeParts[1])];
            }
        }
        if (restriction.range === null) {
            restriction.set = restrictContent;
        }
    }
    for(const [k , glyph] of Object.entries<GlyphSet>(font.glyphs.glyphs)){
        if (glyph.unicode !== undefined) {
            let glyphCharacter = String.fromCharCode (glyph.unicode);
            let needToExport = true;
            if (restriction.range !== null) {
                needToExport = (glyph.unicode >= restriction.range[0] && glyph.unicode <= restriction.range[1]);
            } else if (restriction.set !== null) {
                needToExport = (text.indexOf (glyphCharacter) != -1);
            }
            if (needToExport) {

                let token:any = {};
                token.ha = Math.round(glyph.advanceWidth * scale);
                token.x_min = Math.round(glyph.xMin * scale);
                token.x_max = Math.round(glyph.xMax * scale);
                token.o = ""
                glyph.path.commands.forEach(function(command,i){
                    if (command.type.toLowerCase() === "c") {command.type = "b";}
                    token.o += command.type.toLowerCase();
                    token.o += " "
                    if (command.x !== undefined && command.y !== undefined){
                        token.o += Math.round(command.x * scale);
                        token.o += " "
                        token.o += Math.round(command.y * scale);
                        token.o += " "
                    }
                    if (command.x1 !== undefined && command.y1 !== undefined){
                        token.o += Math.round(command.x1 * scale);
                        token.o += " "
                        token.o += Math.round(command.y1 * scale);
                        token.o += " "
                    }
                    if (command.x2 !== undefined && command.y2 !== undefined){
                        token.o += Math.round(command.x2 * scale);
                        token.o += " "
                        token.o += Math.round(command.y2 * scale);
                        token.o += " "
                    }
                });
                result.glyphs[String.fromCharCode(glyph.unicode)] = token;
            }
        }
    }
    result.ascender = Math.round(font.ascender * scale);
    result.descender = Math.round(font.descender * scale);
    result.underlinePosition = Math.round(font.tables.post.underlinePosition * scale);
    result.underlineThickness = Math.round(font.tables.post.underlineThickness * scale);
    result.boundingBox = {
        "yMin": Math.round(font.tables.head.yMin * scale),
        "xMin": Math.round(font.tables.head.xMin * scale),
        "yMax": Math.round(font.tables.head.yMax * scale),
        "xMax": Math.round(font.tables.head.xMax * scale)
    };
    result.resolution = 1000;
    try {
        result.familyName = font.names.fullName.en;
        result.original_font_information = font.tables.name;
        if (font.names.fullName.en.toLowerCase().indexOf("bold") > -1){
            result.cssFontWeight = "bold";
        } else {
            result.cssFontWeight = "normal";
        }

        if (font.names.fullName.en.toLowerCase().indexOf("italic") > -1){
            result.cssFontStyle = "italic";
        } else {
            result.cssFontStyle = "normal";
        }
    }catch (e) {

    }

    if(outJs) {
        return "if (_typeface_js && _typeface_js.loadFace) _typeface_js.loadFace("+ JSON.stringify(result) + ");"
    } else {
        return result;
    }
};
let vm:ComponentInternalInstance = getCurrentInstance()
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

/**
 * Three https://threejs.org/docs/index.html#api/zh
 */
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

    /**
     * 鼠标控制器
     */
    controls:OrbitControls

    /**
     * 下载的字体文件
     */
    fonts = new Map<string, {
        fontJson:Record<string, any>,
        font:FontLoaderToFont
    }>()

    /**
     * 下载的图片
     */
    imagesTexture = new Map<string, Texture>()

    /**
     * 是否渲染
     */
    isRender:boolean = false

    /**
     * gui
     * 开发文档：https://lil-gui.georgealways.com/
     */
    gui:GUI
    guiCallback:()=> void

    clock:Clock
    clockTime:number


    constructor(public props:PropsBase, public ctx:SetupContext<typeof emits>) {
        this.reset()
        this.watchUpDate()
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
        // 设置相机位置
        this.camera.position.set(initializationData.value.camera.x, initializationData.value.camera.y, initializationData.value.camera.z);
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
    private requestAnimationFrameIndex:number
    private requestAnimationFrame(fn:()=> void){
        cancelAnimationFrame(this.requestAnimationFrameIndex)
        this.requestAnimationFrameIndex = requestAnimationFrame(()=>{
            fn?.()
            this.requestAnimationFrame(fn)
        })
    }

    initRender(){
        this.clock = new Clock()
        this.ctx.emit("load", this)
        this.requestAnimationFrame(()=>{
            this.clockTime = this.clock.getDelta();
            this.ctx.emit("animation", this)
            this.render()
        })
        this.render()

    }

    render(){
        this.renderer.render( this.scene, this.camera );
        this.isRender = true
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
    addBoxGeometry(url?:string):({
        mesh:Mesh,
        material:MeshLambertMaterial
        box:BoxGeometry
    }){
        const box = new THREE.BoxGeometry(100,100,100)
        const material = new THREE.MeshLambertMaterial({
            map:url ? this.downloadImagesTexture(url) : null,
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
     * 添加文字
     */
    async addText(text:string, fontName:string, map?:Texture){
        const box = new TextGeometry( text, {
            font:this.fonts.get(fontName).font,
            size: 80,
            height: 5,
            curveSegments: 12,
            bevelEnabled: true,
            bevelThickness: 10,
            bevelSize: 0,
            bevelSegments: 5
        } );
        const material = new THREE.MeshPhongMaterial( {
            flatShading: true,
            color:"#00a6ff",
            map:map ? map : null
        })
        const mesh = new THREE.Mesh(box, material)
        mesh.castShadow = true
        mesh.position.set(-200,0,300)
        this.scene.add(mesh)
        return {
            mesh,
            material,
            box
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
     * 下载字体
     */
    async downloadFonts(fontUrl:string, familyName?:string){
        if(this.fonts.has(familyName)){
            return this.fonts.get(familyName)?.font
        }
        if(this.fonts.has(fontUrl)){
            return this.fonts.get(fontUrl)?.font
        }
        const fontArrayBuffer = parseFont(await fetch(fontUrl).then(res=>res.arrayBuffer()))
        const fontJson = convertFont(fontArrayBuffer)
        const fontInfo = {
            fontJson,
            font:new FontLoader().parse(fontJson)
        }
        this.fonts.set(familyName || fontJson.familyName || fontUrl, fontInfo)
        return fontInfo.font
    }
    /**
     * 下载字体
     */
    downloadImagesTexture(url:string, imageName?:string):Texture{
        if(this.imagesTexture.has(imageName)){
            return this.imagesTexture.get(imageName)
        }
        const texture = new THREE.TextureLoader().load(url)
        this.imagesTexture.set(imageName || url, new THREE.TextureLoader().load(url))
        return texture
    }


    /**
     * 监听数据
     */
    watchUpDate(){
        // 全局初始化数据监听
        watchEffect(()=>{
            initializationData.value = merge(initializationData.value, this.props.initializationData)
            // 更新gui数据
            this.addGUI()
        })
        this.ctx.emit('update:initialization-data', initializationData.value)
        watch(initializationData, ()=>{
            this.ctx.emit('update:initialization-data', initializationData.value)
        },{deep:true})
        /**
         * 更新具体数据
         */
        watchEffect(()=>{
            this.guiCallback?.()
            this.render()
        })
    }

    /**
     * 添加GUI
     * 开发文档：https://lil-gui.georgealways.com/
     */
    addGUI():GUI{
        if(this.gui){
            this.gui.destroy()
        }
        this.gui = new GUI()
        this.gui.title("全局数据配置")
        try {
            this.guiCallback = vm.vnode.props["onGui"]?.( initializationData.value, this)
        }catch (e) {}
        return this.gui
    }

    /**
     * addGLTFLoader
     */
    addGLTFLoader(url):Promise<GLTF>{
        return new GLTFLoader().loadAsync(url);
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
    animation:(myThee:BaseThreeClass)=>true,
    gui:(data:InitializationData, myThee:BaseThreeClass)=>true,
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
        onMounted(()=>{
            vm = getCurrentInstance()
            const myThree =  new BaseThreeClass(props as any, ctx)
            ctx.emit('update:modelValue', myThree)
            watch([
                innerWidth,
                innerHeight
            ], ()=>{
                myThree.reset()
            })
        })
        return ()=> (<div class="base-three" ref={baseTheeEl}>
            <canvas class={'base-three__canvas'} ref={canvas}></canvas>
            {slots.panel ? <div class={'base-three__panel'}>
                {slots.panel?.(initializationData.value)}
            </div> : null}
        </div>)
    }
})
