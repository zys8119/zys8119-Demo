<template>
    <div class='architecture abs-content'>
        <BaseThree @load="load"></BaseThree>
    </div>
</template>
<script setup lang="ts">
import BaseThree,{BaseThreeClass} from "@/src/components/BaseThree.tsx"
import { OBJLoader } from 'three/addons/loaders/OBJLoader.js';
import { MTLLoader } from 'three/addons/loaders/MTLLoader.js';
const load = async (three:BaseThreeClass)=>{
    const {scene, light, lightHelper, THREE} = three
    const objLoader = new OBJLoader();
    const mtlLoader = new MTLLoader();
    light.visible = false
    lightHelper.visible = false
    const light2 = new THREE.AmbientLight( 0x404040, 10); // 柔和的白光
    light2.position.set(1000, 1000, 1000)
    scene.add( light2 );
    mtlLoader.load('http://localhost:3000/%E5%85%A8%E6%81%AF%E6%A5%BC%E6%88%BF%EF%BC%881%E6%A0%8B-1%EF%BC%89.mtl', (materials) => {
        materials.preload();
        console.log(materials)
        objLoader.setMaterials(materials);
        objLoader.load('http://localhost:3000/%E5%85%A8%E6%81%AF%E6%A5%BC%E6%88%BF%EF%BC%881%E6%A0%8B-1%EF%BC%89.obj', e=>{
            
            e.traverse((child) => {
                console.log(child.name)
                if (/平面|立方体|楼宇|柱子|球体|floors|Areas|facade/.test(child.name)) {
                    child.material.setValues({
                        color: new THREE.Color('#f00')
                    });
                }
            });
            scene.add(e)
            
            console.log(e)
        })
    });
    
}
</script>
<style scoped lang="less">
.architecture{
}
</style>