<template>
  <div class="large-screen-map-animation">
    <BaseThree @load="load" @animation="animation"></BaseThree>
    <div id="aaa"></div>
  </div>
</template>

<script setup lang="ts" title="大屏地图动效">
import BaseThree from "@/src/components/BaseThree";
import {DirectionalLightHelper, CameraHelper, Scene, PerspectiveCamera, Light} from "three"
import * as THREE from "three"
import studio from "@theatre/studio"
import {getProject,types} from "@theatre/core"
import projectState from "./aaa.theatre-project-state.json"
if(import.meta.env.DEV){
  studio.initialize()
}
const project = getProject('大屏地图动效',{
  state:projectState,
  assets:{
    baseUrl:"./images/map"
  }
})
const sheet = project.sheet('地图')
const load = async (three:{
  lightHelper:DirectionalLightHelper
  cameraHelper:CameraHelper
  THREE:typeof THREE
  scene:Scene
  camera:PerspectiveCamera
  light:Light
})=>{
  await project.ready
  const {THREE,scene} = three
  // 关闭灯光帮助
  three.lightHelper.visible = false
  // 关闭相机帮助
  three.cameraHelper.visible = false
  scene.scale.set(147,147,147)
  three.light.visible = false
  // 全局配置
  sheet.object('全局配置',{
    zoom: types.number(147, {range: [-Infinity, Infinity]}),
  }).onValuesChange(({zoom})=>{
    scene.scale.set(zoom,zoom,zoom)
  })
  // 灯光
  const light = new THREE.HemisphereLight( 0xffffff, 262 );
  light.position.set( -423, 1186, -20 );
  light.castShadow = true; // default false
  scene.add( light );
  sheet.object("灯光", {
    x: types.number(0, {range: [-Infinity, Infinity]}),
    y: types.number(0, {range: [-Infinity, Infinity]}),
    z: types.number(0, {range: [-Infinity, Infinity]}),
    intensity: types.number(0, {range: [-Infinity, Infinity]}),
  }).onValuesChange(({x, y, z,intensity})=>{
    light.position.set(x, y, z)
    light.intensity = intensity
  })

  // 地球
  const geometry = new THREE.CapsuleGeometry( 2, 0, 50, 50 );
  const material = new THREE.MeshLambertMaterial( {
    color: 0x15204f,
    clipShadows: true,
  } );
  const capsule = new THREE.Mesh( geometry, material ); scene.add( capsule );
  scene.add(capsule)
  sheet.object('地球', {
    rotation: types.compound({
      x: types.number(capsule.rotation.x, { range: [-2, 2] }),
      y: types.number(capsule.rotation.y, { range: [-2, 2] }),
      z: types.number(capsule.rotation.z, { range: [-2, 2] }),
    }),
    texture: types.image('bayl.jpg', {
      label: 'Texture',
    }),
  },{
    reconfigure:true
  }).onValuesChange((values) => {
    const { x, y, z } = values.rotation
    capsule.rotation.set(x * Math.PI, y * Math.PI, z * Math.PI)
    material.setValues({
      map: new THREE.TextureLoader().load(project.getAssetUrl(values.texture)),
    })
  })
}
const animation = async ({scene}:{scene:Scene})=>{
}
</script>

<style scoped lang="less">
.large-screen-map-animation {

}
</style>
