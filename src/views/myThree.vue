<template>
    <div class="three">
        <BaseThree
            @load="load"
            @animation="animation"
            @gui="gui"
            :near="0.1"
            :far="1000"
            v-model:initialization-data="initializationData"
            :gui="true"
            :plane-geometry="true"
        >
            <template #panel>{{initializationData}}</template>
        </BaseThree>
    </div>
</template>

<script setup lang="ts" title="three3D" content="three3D通用组件组件封装">
import BaseThree, {BaseThreeClass, InitializationData} from "../components/BaseThree"
import fontUrl from '@/src/assets/miaozidongmanti-regular.ttf';
import RobotExpressiveGlb from '@/src/assets/RobotExpressive.glb?url';
import {AnimationMixer} from 'three';
import {Object3D} from "three/src/core/Object3D";
const initializationData = ref<any>({
    camera:{

    }
})
const mixer = ref<AnimationMixer>()
const aa = ref<any>([])
const load = async (three:BaseThreeClass)=>{
    const {
        THREE,
        camera,
        renderer,
        scene,
        controls,
        planeGeometryMesh
    }:BaseThreeClass = three
    controls.maxPolarAngle = Math.PI*0.49
    // 正方形
    const {mesh} = three.addBoxGeometry("https://t7.baidu.com/it/u=4036010509,3445021118&fm=193&f=GIF")
    three.transformControls().attach(mesh)
    // 文字
    await three.downloadFonts(fontUrl, 'aaa')
    await three.addText('智加科技', 'aaa')
    // 3d模型
    const gltf = await three.addGLTFLoader(RobotExpressiveGlb)
    gltf.scene.position.set(300,0,0)
    gltf.scene.scale.set(50,50,50)
    const castShadowInit  = (obj:Object3D)=>{
        obj.castShadow =true
        ;(obj.children || []).forEach(e=>{
            castShadowInit(e)
        })
    }
    castShadowInit(gltf.scene)
    mixer.value = new THREE.AnimationMixer( gltf.scene );
    const action = mixer.value.clipAction(gltf.animations.find(e=>e.name === 'Walking'))
    action.clampWhenFinished = true
    // action.loop = THREE.LoopOnce
    action.reset()
        .setEffectiveTimeScale( 1 )
        .setEffectiveWeight( 1 )
        .fadeIn( 0.5 )
        .play();
    scene.add( gltf.scene );
}
const animation = ({scene, THREE, clockTime}:BaseThreeClass)=>{
    mixer.value?.update?.(clockTime)
}
const gui = ({camera}:InitializationData, three:BaseThreeClass)=>{
    const cameraFolder = three.gui.addFolder('相机')
    cameraFolder.add(camera, "x",1, 100).step(0.01)
    cameraFolder.add(camera, "y",1, 1000).step(0.01)
    cameraFolder.add(camera, "z",1, 1000).step(0.01)
    return ()=>{
        three.camera.position.set(camera.x, camera.y, camera.z)
    }
}
</script>

<style scoped lang="less">
</style>
