<template>
    <div class="three">
        <BaseThree
            @load="load"
            @animation="animation"
        ></BaseThree>
    </div>
</template>

<script setup lang="ts">
import BaseThree,{BaseThreeClass} from "./BaseThree"
const load = (myThree:BaseThreeClass)=>{
    const {THREE, camera, renderer, scene} = myThree
    myThree.setCoordinateLine()
    const g = new THREE.BoxGeometry(100,100,100)
    // const m = new THREE.MeshBasicMaterial({color:"#fff"})
    const m = new THREE.MeshBasicMaterial({
        map:new THREE.Texture((()=>{
            const img = new Image()
            img.src = "https://t7.baidu.com/it/u=4036010509,3445021118&fm=193&f=GIF"
            return img
        })())
    })
    const c = new THREE.Mesh(g, m)
    scene.add(c)
}
const animation = ({scene}:BaseThreeClass)=>{
    // scene.rotation.x += 0.02
    // console.log(scene.rotation.x)
}
</script>

<style scoped lang="less">
</style>
