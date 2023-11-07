<template>
  <div class="feipan">
    <BaseThree @load="load" :gui="true" @gui="gui"></BaseThree>
  </div>
</template>

<script setup lang="ts">
import * as THREE from "three"
import BaseThree, {BaseThreeClass, InitializationData} from "../components/BaseThree"
const lathe = shallowRef<THREE.Mesh>()
const circle = shallowRef<THREE.Mesh>()
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader.js'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js'
const load = async (three:BaseThreeClass)=>{
  const {scene, imagesTexture} = three
  three.downloadImagesTexture('http://localhost:3000/%E5%9B%BE%E7%89%87:%E8%A7%86%E9%A2%91/1.png', 'a')
  three.downloadImagesTexture('http://localhost:3000/%E5%9B%BE%E7%89%87:%E8%A7%86%E9%A2%91/%E9%98%BF%E7%8B%B8%20cosplay%E7%BE%8E%E5%A5%B34k%E9%AB%98%E6%B8%85%E5%A3%81%E7%BA%B8_%E5%BD%BC%E5%B2%B8%E5%9B%BE%E7%BD%91.jpg', 'b')

  const obj = new MTLLoader()
  obj.resourcePath = "http://localhost:3000/Frisbee_v3_L3.123c04bb8c57-5f91-4538-9b0b-d6372307bfd4/"
  obj.path = "http://localhost:3000/Frisbee_v3_L3.123c04bb8c57-5f91-4538-9b0b-d6372307bfd4/"
  // obj.path = 'http://localhost:3000/Frisbee_v3_L3.123c04bb8c57-5f91-4538-9b0b-d6372307bfd4'
  // scene.add(obj)
  const aa = await obj.loadAsync('10505_Frisbee_v3_L3.mtl')
  var objLoader= new OBJLoader();
  objLoader.setMaterials(aa);
  objLoader.setPath(obj.path);
  const bb = await objLoader.loadAsync('10505_Frisbee_v3_L3.obj')
  const material = bb.children[0].material as THREE.MeshPhongMaterial
  material.setValues({
    color:new THREE.Color("#fff")
  })
  bb.scale.set(20,20,20)
  // bb.rotation.x = -Math.PI*0.5
  scene.add(bb)
  ;(function aa(){
    bb.rotation.y += 0.005
    requestAnimationFrame(aa)
  })()

}
const config = ref({
  x:Math.PI*0.5,
  y:0,
  z:0,
})
const gui = (_, b)=>{
  // const a = b.gui.addFolder("数据测试")
  // a.add(config.value, 'x', -1000, 1000).step(1)
  // a.add(config.value, 'y', -1000, 1000).step(1)
  // a.add(config.value, 'z', -1000, 1000).step(1)
  // return ()=>{
  //   if(circle.value){
  //     circle.value.position.setY( config.value.x)
  //   }
  // }
}
</script>

<style scoped lang="less">
.feipan {
  .base-three{
    background-color: transparent;
  }
}
</style>
