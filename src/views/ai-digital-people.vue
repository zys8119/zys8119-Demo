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
  const gltf = await three.addGLTFLoader('http://127.0.0.1:3000/65b73e7df509efbd8355deab.glb')
  console.log(gltf)
  const scale2 = 280
  gltf.scene.scale.set(scale2,scale2,scale2)
  gltf.scene.position.set(0,-280,0)
  gltf.scene.rotation.set(0,Math.PI/180*40,0)
  scene.add(gltf.scene)
  console.clear()
  console.log(gltf.scene,22)
  gltf.scene.traverse(object => {
    if(object.type === "Bone"){
      object.name = `mixamorig${object.name}`
    }
  })
  const loader = new FBXLoader();
  const fbx = await loader.loadAsync('http://localhost:3000/Catwalk%20Walk%20Start%20Backwards%20180R.fbx')
  console.log(fbx)
  console.log(fbx.animations[0])
  const mixer = new THREE.AnimationMixer(gltf.scene);
  mixers.push(mixer)
  const action = mixer.clipAction(fbx.animations[0])
  actionMap.set('dzh',action)
  action.reset()
  action.paused = false
  action.clampWhenFinished = true
  action.loop = THREE.LoopOnce
  play('dzh')
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
