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
const addBox = ({scene, THREE}:BaseThreeClass, tr:TransformControls, data?:Partial<typeof addBoxConfig>)=>{
    const height = 80
    const y = height/2
    const {
        width,
        depth,
        position:[x, z],
        scale:[sx, sy, sz],
        rotation:[rx, ry, rz],
    } = merge(addBoxConfig, data)
    const m = new THREE.Mesh(
        new THREE.BoxGeometry(width,height,depth),
        new THREE.MeshLambertMaterial({
            color:"#ffffff"
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
    tr.removeEventListener('change', change)
    tr.addEventListener('change', change)
    scene.add(m);
}
const load = async (three:BaseThreeClass)=>{
    const {THREE, planeGeometryMesh,scene, camera} = three
    const map = three.downloadImagesTexture(bj);
    const sprite = new THREE.Mesh( new THREE.BoxGeometry(300, 0, 300), new THREE.MeshLambertMaterial({
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
        position:[66.70, -63.55],
        scale: [0.593, 1, 1.491],
        rotation: [0, 0],
    })
    addBox(three, tr, {
        position:[48.26, -74.505],
        scale: [0.1689, 1, 1.491],
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
