<template>
    <div class="house">
        <BaseThree
            v-model:initialization-data="data"
            @load="load"
            :gui="true"
            @gui="gui"
            @animation="animation"
        >
            <template #panel>{{data}}</template>
        </BaseThree>
        <img :src="bj" alt="">
    </div>
</template>

<script setup lang="ts" title="房子" content="房子3d效果">
import BaseThree, {BaseThreeClass, InitializationData} from "../components/BaseThree"
import bj from "@/src/assets/house/bj2.png"
import {BoxGeometry, Mesh, Vector2, Raycaster} from "three"
import {merge} from "lodash"
import {TransformControls} from "three/addons/controls/TransformControls.js";
const data = ref({
    box:{
        position:{
            x:0,
            y:0,
            z:0
        },
        size:{
            width:300,
            height:10,
            depth:30,
        },
        rotate:{
            rx:0,
            ry:0,
            rz:0,
        },
    },
    mode:'translate'
})
const raycaster = new Raycaster();
const mouse = new Vector2();
let tr = null
const animation = async (three:BaseThreeClass)=>{
    const {THREE, planeGeometryMesh,scene, camera} = three
}
const addBoxConfig = {
    width:120,
    depth:5,
    position:[0, 0],
    scale:[1, 1, 1],
    rotation:[0, 0, 0],
}
const changes = []
const addBox = (three:BaseThreeClass, tr:TransformControls, data?:Partial<typeof addBoxConfig>)=>{
    const {scene, THREE} = three
    const height = 80
    const y = height/2
    const {
        width,
        depth,
        position:[x, z],
        scale:[sx, sy, sz],
        rotation:[rx, ry, rz],
    } = merge(addBoxConfig, data)
    const map = three.downloadImagesTexture("https://img1.baidu.com/it/u=4165515568,3899639356&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500", 'addBoxTexture');
    const m = new THREE.Mesh(
        new THREE.BoxGeometry(width,height,depth),
        new THREE.MeshLambertMaterial({
            color:"#ffffff",
            map
        })
    )
    m.position.set(x,y ,z)
    m.scale.set(sx, sy, sz)
    m.rotation.set(rx, ry, rz)
    m.castShadow = true
    m.receiveShadow = true
    tr.attach(m)
    const change = ()=>{
        console.log("box", {
            position:m.position,
            parameters:m.geometry.parameters,
            rotation:m.rotation,
            scale:m.scale
        })
    }
    changes.forEach(c=>{
        tr.removeEventListener('change', c)
    })
    tr.addEventListener('change', change)
    changes.push(change)
    scene.add(m);
}
const load = async (three:BaseThreeClass)=>{
    const {THREE, planeGeometryMesh,scene, camera, light} = three
    light.position.set(0,500,200)
    const map = three.downloadImagesTexture(bj);
    const sprite = new THREE.Mesh(new THREE.BoxGeometry(300, 0, 300), new THREE.MeshLambertMaterial({
        map:map,
        emissive:"#f00",
        transparent:true,
    }));
    scene.add( sprite );
    const tr = three.transformControls()
    watchEffect(()=>{
        tr.setMode(data.value.mode as any)
    })
    addBox(three, tr, {
        position:[44.39, -147],
        scale: [0.94],
    })
    addBox(three, tr, {
        position:[98.03, -129.23],
        scale: [0.32],
        rotation: [0, 1.56],
    })
    addBox(three, tr, {
        position:[-9.112, -76.06],
        scale: [0.262, 1, 1.491],
        rotation: [0, 1.56],
    })
    addBox(three, tr, {
        position:[-6.75, -63.55],
        scale: [0.2768, 1, 1.491],
        rotation: [0, 0],
    })
    addBox(three, tr, {
        position:[90.56, -63.55],
        scale: [0.991, 1, 1.491],
        rotation: [0, 0],
    })
    addBox(three, tr, {
        position:[48.26, -74.505],
        scale: [0.1689, 1, 1.491],
        rotation: [0, 1.56],
    })
    addBox(three, tr, {
        position:[59.56, -52.07],
        scale: [0.1689, 1, 1.491],
        rotation: [0, 1.56],
    })
    addBox(three, tr, {
        position:[145.86, -14.966],
        scale: [0.8604, 1, 1.491],
        rotation: [0, 1.56],
    })
    addBox(three, tr, {
        position:[139.567, -14.966],
        scale: [0.1279, 1, 1.491],
        rotation: [0, 0],
    })
    addBox(three, tr, {
        position:[73.202, -14.966],
        scale: [0.6837, 1, 1.491],
        rotation: [0, 0],
    })
    addBox(three, tr, {
        position:[110.912, -12.695],
        scale: [0.098099, 1, 1.491],
        rotation: [0, 1.56],
    })
    addBox(three, tr, {
        position:[59.151, -4.766],
        scale: [0.223091, 1, 1.491],
        rotation: [0, 1.56],
    })
    addBox(three, tr, {
        position:[35.846, -4.766],
        scale: [0.1566, 1, 1.491],
        rotation: [0, 1.56],
    })
    addBox(three, tr, {
        position:[35.846, 89.17919],
        scale: [1.0263, 1, 1.491],
        rotation: [0, 1.56],
    })
    addBox(three, tr, {
        position:[111.0753, 73.2094],
        scale: [1.0263, 1, 1.491],
        rotation: [0, 1.56],
    })
    addBox(three, tr, {
        position:[87.0712, 33.708],
        scale: [0.467, 1, 1.491],
        rotation: [0, 0],
    })
    addBox(three, tr, {
        position:[59.151, 33.09617],
        scale: [0.07228, 1, 1.491],
        rotation: [0, 1.56],
    })
    three.controls.addEventListener('change', ()=>{
        console.log("camera", {
            position:camera.position,
            rotation:camera.rotation,
            scale:camera.scale,
        })
    })
    // camera.position.set(134.46, 5.5, -144.85)
    // camera.rotation.set(-2.33, 1.23, 2.36)
    // camera.scale.set(0.94, 1, 1)
}
const gui = (d: typeof data.value, three: BaseThreeClass) => {
    const {THREE} = three
    const cameraFolder = three.gui.addFolder('配置参数')
    cameraFolder.add(d, 'mode', ['translate', 'rotate', 'scale'])
    return () => {
    }
}
</script>

<style scoped lang="less">
:global(body){
    background: #0d9dd3;
}
</style>
