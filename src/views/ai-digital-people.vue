<template>
  <div class="ai-digital-people">
    <BaseThree
      @load="load"
      @animation="animation"
    ></BaseThree>
    <n-space class="abs-content z-1 bg-#fff p-15px h-auto">
      <n-button @click="play('dzh')">打招呼</n-button>
      <n-button @click="play('map')">地图动画</n-button>
    </n-space>
  </div>
</template>

<script setup lang="ts" title="ai数字人">
import BaseThree, {BaseThreeClass, InitializationData} from "@/src/components/BaseThree"
import * as THREE from 'three';
import { AnimationMixer, AnimationAction,MeshPhongMaterial } from 'three';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js';
let mixers:Array<AnimationMixer> = []
let actionMap:Map<string,AnimationAction> = new Map()

const load = async (three: BaseThreeClass)=>{
  const {scene, lightHelper} = three
  // const gltf = await three.addGLTFLoader('http://127.0.0.1:3000/659e61dfedd978fd4b26aa29.glb')
  // console.log(gltf)
  // const scale2 = 150
  // gltf.scene.scale.set(scale2,scale2,scale2)
  // scene.add(gltf.scene)
  const loader = new FBXLoader();
  const fbx2 = await loader.loadAsync('http://localhost:3000/Idle%20To%20Braced%20Hang.fbx')
  const fbx = await loader.loadAsync('http://localhost:3000/Standing%20Arguing.fbx')
  const material = (fbx.children[2].material as MeshPhongMaterial)
  material.color = new THREE.Color("#ff7238")
  scene.add(fbx)
  const scale = 150
  fbx.parent.scale.set(scale,scale,scale)
  const mixer = new THREE.AnimationMixer(fbx.parent);
  mixers.push(mixer)
  const action = mixer.clipAction(fbx2.animations[0])
  actionMap.set('dzh',action)
  action.clampWhenFinished = true
  action.loop = THREE.LoopOnce
  // await play('dzh')
}
const play = async (keyName:string)=>{
  actionMap.get(keyName)?.reset()
  actionMap.get(keyName)?.play()
}
const animation = (three: BaseThreeClass)=>{
  mixers.forEach(mixer=>{
    mixer.update(three.clockTime)
  })
}
</script>

<style scoped lang="less">
.ai-digital-people {
  .base-three{
    //background-color: #;
  }
}
</style>
