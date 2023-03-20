<template>
    <div class="three">
        <BaseThree
            @load="load"
            @animation="animation"
            @gui="gui"
            :near="0.1"
            :far="1000"
            v-model:initialization-data="initializationData"
        >
        </BaseThree>
    </div>
</template>

<script setup lang="ts">
import BaseThree, {BaseThreeClass, InitializationData} from "./BaseThree"
import fontUrl from '@/src/assets/miaozidongmanti-regular.ttf';
const initializationData = ref<any>({})

const load = async (three:BaseThreeClass)=>{
    const {
        THREE,
        camera,
        renderer,
        scene,
        controls,
    }:BaseThreeClass = three
    const {mesh} = three.addBoxGeometry("https://t7.baidu.com/it/u=4036010509,3445021118&fm=193&f=GIF")
    three.transformControls().attach(mesh)
    await three.downloadFonts(fontUrl, 'aaa')
    await three.addText('智加科技', 'aaa')
}
const animation = ({scene}:BaseThreeClass)=>{
    // scene.rotation.y += 0.005
}
const gui = ({camera}:InitializationData, three:BaseThreeClass)=>{
    const cameraFolder = three.gui.addFolder('相机')
    cameraFolder.add(camera, "x",1, 1000000).step(5)
    cameraFolder.add(camera, "y",1, 1000000).step(5)
    cameraFolder.add(camera, "z",1, 1000000).step(5)
    return ()=>{
        three.camera.position.set(camera.x, camera.y, camera.z)
    }
}
</script>

<style scoped lang="less">
</style>
