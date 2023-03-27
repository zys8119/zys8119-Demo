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
    scene.add((()=>{
        const a = new THREE.Mesh(
            new THREE.BoxGeometry(120,10,5),
            new THREE.MeshLambertMaterial({
                color:"#ffffff"
            })
        )
        a.position.set(44.39,4,-147)
        a.scale.set(0.94,1,1)
        tr.attach(a)
        tr.addEventListener('change', ()=>{
            console.log("box", {
                position:a.position,
                parameters:a.geometry.parameters,
                rotation:a.rotation,
                scale:a.scale
            })
        })
        return a
    })());
    scene.add((()=>{
        const a = new THREE.Mesh(
            new THREE.BoxGeometry(120,10,5),
            new THREE.MeshLambertMaterial({
                color:"#ffffff"
            })
        )
        a.position.set(98.19,4 ,-129.23)
        a.scale.set(0.32,1,1)
        a.rotation.set(0,1.56,0)
        tr.attach(a)
        tr.addEventListener('change', ()=>{
            console.log("box", {
                position:a.position,
                parameters:a.geometry.parameters,
                rotation:a.rotation,
                scale:a.scale
            })
        })
        return a
    })());
    three.controls.addEventListener('change', ()=>{
        console.log("camera", {
            position:camera.position,
            rotation:camera.rotation,
            scale:camera.scale,
        })
    })
    camera.position.set(134.46, 5.5, -144.85)
    camera.rotation.set(-2.33, 1.23, 2.36)
    camera.scale.set(0.94, 1, 1)
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
