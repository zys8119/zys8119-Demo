<template>
  <div class="large-screen-map-animation">
    <BaseThree @load="load" @animation="animation"></BaseThree>
    <div id="aaa"></div>
  </div>
</template>

<script setup lang="ts" title="大屏地图动效">
import BaseThree from "@/src/components/BaseThree";
import {DirectionalLightHelper, CameraHelper, Scene, PerspectiveCamera, Light, BufferGeometry} from "three"
import * as THREE from "three"
import studio from "@theatre/studio"
import {getProject, ISheetObject, types, UnknownShorthandCompoundProps,PropsValueTest} from "@theatre/core"
import projectState from "./aaa.theatre-project-state.json"
import {Material} from "three/src/materials/Material";
import {Object3D} from "three/src/core/Object3D";

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
  function createOBj<
      V extends UnknownShorthandCompoundProps,
  >(key:string, config:{
    _geometry?: BufferGeometry
    _material?: Material
    _mesh?: Object3D
    geometry(): BufferGeometry
    material(): Material
    mesh(geometry:BufferGeometry, material:Material): Object3D
    objectConfig:(data:{
      mesh: Object3D
      material: Material
      geometry: BufferGeometry
    })=>({
      values:V
      change(values:V, data:any):void
    })
  }):Promise<{
      mesh: Object3D
      material: Material
      geometry: BufferGeometry
      object: ISheetObject<V>
  }>
  async function createOBj (key,config){
    const geometry = config._geometry || await config.geometry?.();
    const material = config._material || await config.material?.();
    const mesh = config._mesh || await config.mesh?.(geometry, material);
    scene.add(mesh)
    const exprotData:{
      mesh: Object3D
      material: Material
      geometry: BufferGeometry
    } = {
      mesh,
      material,
      geometry,
    }
    const objectConfig = await config.objectConfig(exprotData)
    const object = sheet.object(key,objectConfig.values ,{
      reconfigure:true
    })
    object.onValuesChange(values=>{
      objectConfig.change(values, exprotData)
    })
    return {
      ...exprotData,
      object
    }
  }
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
  const {object} = await createOBj("地球",{
    geometry(){
      return new THREE.CapsuleGeometry( 2, 0, 50, 50 )
    },
    material(){
      return new THREE.MeshLambertMaterial( {
        color: 0x15204f,
        clipShadows: true,
        transparent:true,
      } )
    },
    mesh(geometry, material){
      return new THREE.Mesh( geometry, material )
    },
    objectConfig({mesh}){
      return {
        values:{
          rotation: types.compound({
            x: types.number(mesh.rotation.x, { range: [-2, 2] }),
            y: types.number(mesh.rotation.y, { range: [-2, 2] }),
            z: types.number(mesh.rotation.z, { range: [-2, 2] }),
          }),
          texture: types.image('yun.jpg', {
            label: 'Texture',
          }),
        },
        change(values,{material}){
          values
          // const { x, y, z } = values.rotation
          // mesh.rotation.set(x * Math.PI, y * Math.PI, z * Math.PI)
          // material.setValues({
          //   map: new THREE.TextureLoader().load(project.getAssetUrl(values.texture)),
          // })
        }
      }
    }
  })
  object.onValuesChange(values => {

  })
}
const animation = async ({scene}:{scene:Scene})=>{
}
</script>

<style scoped lang="less">
.large-screen-map-animation {

}
</style>
