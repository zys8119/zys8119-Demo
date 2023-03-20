<template>
    <div class="three">
        <BaseThree
            @load="load"
            @animation="animation"
            :near="0.1"
            :far="1000"
            v-model:initialization-data="initializationData"
        >
            <template #panel>
                <input placeholder='x' type='number' v-model="initializationData.camera.x" :step="initializationData.camera.step"/>
                <input placeholder='y' type='number' v-model="initializationData.camera.y" :step="initializationData.camera.step"/>
                <input placeholder='z' type='number' v-model="initializationData.camera.z" :step="initializationData.camera.step"/>
            </template>
        </BaseThree>
    </div>
</template>

<script setup lang="ts">
import BaseThree,{BaseThreeClass} from "./BaseThree"
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
const initializationData = ref<any>({
})
const load = (three:BaseThreeClass)=>{
    const {
        THREE,
        camera,
        renderer,
        scene,
        controls,
    }:BaseThreeClass = three
    three.planeGeometry()
    const {mesh} = three.addBoxGeometry()
    three.transformControls().attach(mesh)
    new FontLoader().load("https://threejs.org/examples/fonts/optimer_bold.typeface.json", font=>{
        const geometry = new TextGeometry( '张云山', {
                font,
                size: 80,
                height: 5,
                curveSegments: 12,
                bevelEnabled: true,
                bevelThickness: 10,
                bevelSize: 8,
                bevelSegments: 5
        } );
        scene.add(new THREE.Mesh(geometry, new THREE.MeshPhongMaterial( { color: 0xff0000, flatShading: true } )))

    })

}
const animation = ({scene}:BaseThreeClass)=>{
    scene.rotation.y += 0.005
}
</script>

<style scoped lang="less">
</style>
