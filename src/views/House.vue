<template>
    <div class="house">
        <BaseThree
            :plane-geometry="true"
            v-model:initialization-data="data"
            @load="load"
            :gui="true"
            @gui="gui"
        >
            <template #panel>{{data}}</template>
        </BaseThree>
        <img :src="bj" alt="">
    </div>
</template>

<script setup lang="ts" title="房子" content="房子3d效果">
import BaseThree, {BaseThreeClass, InitializationData} from "../components/BaseThree"
import bj from "@/src/assets/house/bj.jpeg"
import {BoxGeometry, Mesh} from "three"
const data = ref({
    box:{
        position:{
            x:0,
            y:0,
            z:0
        },
        size:{
            width:300,
            height:300,
            depth:300,
        }
    }
})
let testBox:Mesh = null as Mesh
let box:BoxGeometry = null as BoxGeometry
const load = async (three:BaseThreeClass)=>{
    const {THREE, planeGeometryMesh, scene} = three
    ;(planeGeometryMesh.material as any).map = three.downloadImagesTexture(bj)
    const b = new THREE.BoxGeometry(300, 10, 30)
    const m = new THREE.MeshLambertMaterial()
    const ms = new THREE.Mesh(b, m)
    ms.position.set(0,0,100)
    scene.add(ms)
    testBox = ms
    box = b
    // box.parameters.width = 500
}
const gui = ({ box:{position, size} }: typeof data.value, three: any) => {
    const cameraFolder = three.gui.addFolder('配置参数')
    cameraFolder.add(position, 'x', 1, 1000).step(0.01)
    cameraFolder.add(position, 'y', 1, 1000).step(0.01)
    cameraFolder.add(position, 'z', 1, 1000).step(0.01)
    cameraFolder.add(size, 'width', 1, 1000).step(0.01)
    cameraFolder.add(size, 'height', 1, 1000).step(0.01)
    cameraFolder.add(size, 'depth', 1, 1000).step(0.01)
    return () => {
        const {x, y, z} = position
        const {width, height, depth} = size
        if(testBox){
            testBox.position.set(x, y, z)
        }
        if(box){
            box.parameters.width = width
        }
    }
}
</script>

<style scoped lang="less">
.house {
}
</style>
