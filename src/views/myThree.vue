<template>
    <div class="three">
        <BaseThree
            @load="load"
            @animation="animation"
            :near="0.1"
            :far="1000"
        ></BaseThree>
    </div>
</template>

<script setup lang="ts">
import BaseThree,{BaseThreeClass} from "./BaseThree"
const load = (myThree:BaseThreeClass)=>{
    const {THREE, camera, renderer, scene} = myThree
    const g = new THREE.BoxGeometry(100,100,100)
    const m = new THREE.MeshLambertMaterial({
        color:"#8ac",
        map:new THREE.TextureLoader().load("https://t7.baidu.com/it/u=4036010509,3445021118&fm=193&f=GIF"),
    })
    const c = new THREE.Mesh(g, m)
    c.position.set(0,50, 0)
    c.castShadow = true
    c.receiveShadow = true
    scene.add(c)
}
const animation = ({scene}:BaseThreeClass)=>{
}
</script>

<style scoped lang="less">
</style>
