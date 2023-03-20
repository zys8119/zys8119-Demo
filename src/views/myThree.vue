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
import fontUrl from '@/src/assets/miaozidongmanti-regular.ttf';
const initializationData = ref<any>({

})

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
    await three.addText('智加科技')
}
const animation = ({scene}:BaseThreeClass)=>{
    scene.rotation.y += 0.005
}
</script>

<style scoped lang="less">
</style>
