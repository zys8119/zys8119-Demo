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
import {getProject, ISheetObject, types, UnknownShorthandCompoundProps} from "@theatre/core"
import projectState from "./aaa.theatre-project-state.json"
import {Material} from "three/src/materials/Material";
import {Object3D} from "three/src/core/Object3D";
import color from "color";

if (import.meta.env.DEV) {
  studio.extend({
    id: 'hello-world-extension',
    toolbars: {
      global(set, studio) {
        set([
          {
            type: 'Icon',
            title: '清除本地缓存',
            svgSource: 'clear',
            onClick: () => localStorage.clear(),
          },
        ])
      },
    },
    panes: [
      {
        class: 'example',
        mount({paneId, node}) {
          node.innerText = 'Hello World'
          return () => console.log('pane closed!')
        },
      },
    ],
  })
  studio.initialize()
}
const project = getProject('大屏地图动效', {
  state: projectState,
  assets: {
    baseUrl: "./images/map"
  }
})
const sheet = project.sheet('地图')
const getRgba = (_color:string)=>({
  r:color(_color).object().r/255,
  g:color(_color).object().g/255,
  b:color(_color).object().b/255,
  a:color(_color).alpha()/255
})
const load = async (three: {
  lightHelper: DirectionalLightHelper
  cameraHelper: CameraHelper
  THREE: typeof THREE
  scene: Scene
  camera: PerspectiveCamera
  light: Light
}) => {
  await project.ready
  const {THREE, scene} = three

  function createOBj<
      V extends UnknownShorthandCompoundProps,
  >(key: string, config: {
    _geometry?: BufferGeometry
    _material?: Material
    _mesh?: Object3D
    geometry?(): BufferGeometry
    material?(): Material
    mesh?(geometry: BufferGeometry, material: Material): Object3D
    beforeCreate?(data: {
      mesh: Object3D
      material: Material
      geometry: BufferGeometry
    }): void
    objectConfig?(data: {
      mesh: Object3D
      material: Material
      geometry: BufferGeometry
    }): {
      values?: V
      change?(values: any, data: {
        mesh: Object3D
        material: Material
        geometry: BufferGeometry
      }): void
    }
  }): Promise<{
    mesh: Object3D
    material: Material
    geometry: BufferGeometry
    object: ISheetObject<V>
  }>
  async function createOBj(key, config) {
    const geometry = config._geometry || config._mesh?.geometry || await config.geometry?.();
    const material = config._material || config._mesh?.material || await config.material?.();
    const mesh = config._mesh || await config.mesh?.(geometry, material);
    scene.add(mesh)
    const exprotData: {
      mesh: Object3D
      material: Material
      geometry: BufferGeometry
    } = {
      mesh,
      material,
      geometry,
    }
    await config.beforeCreate?.(exprotData)
    const objectConfig = await config.objectConfig?.(exprotData) || {}
    const object = sheet.object(key, objectConfig.values || {}, {
      reconfigure: true
    })
    object.onValuesChange(values => {
      objectConfig.change?.(values, exprotData)
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
  three.light.visible = false
  // 全局配置
  sheet.object('全局配置', {
    zoom: types.number(290, {range: [-Infinity, Infinity]}),
  }).onValuesChange(({zoom}) => {
    scene.scale.set(zoom, zoom, zoom)
  })
  // 灯光
  const light = new THREE.HemisphereLight(0xffffff, 262);
  scene.add(light);
  sheet.object("灯光", {
    x: types.number(61, {range: [-Infinity, Infinity]}),
    y: types.number(2315, {range: [-Infinity, Infinity]}),
    z: types.number(1734, {range: [-Infinity, Infinity]}),
    intensity: types.number(30, {range: [-Infinity, Infinity]}),
  }).onValuesChange(({x, y, z, intensity}) => {
    light.position.set(x, y, z)
    light.intensity = intensity
  })

  // 地球
  await createOBj("地球", {
    geometry() {
      return new THREE.CapsuleGeometry(1, 0, 50, 50)
    },
    material() {
      return new THREE.MeshLambertMaterial({})
    },
    mesh(geometry, material) {
      return new THREE.Mesh(geometry, material)
    },
    objectConfig() {
      return {
        values: {
          rotation: types.compound({
            x: types.number(0, {range: [-Infinity, Infinity]}),
            y: types.number(0, {range: [-Infinity, Infinity]}),
            z: types.number(0, {range: [-Infinity, Infinity]}),
          }),
          color:types.rgba(getRgba("#08113c"))
        },
        change(values, data:{
          mesh: Object3D,
          material: THREE.MeshLambertMaterial,
          geometry: THREE.BoxGeometry,
        }) {
          console.log(values.color)
          data.material.setValues({
            color:color(values.color.toString()).rgbNumber()
          })
          data.mesh.rotation.set(values.rotation.x, values.rotation.y, values.rotation.z)
        },
      }
    },
  })
  await createOBj("云层", {
    geometry() {
      return new THREE.CapsuleGeometry(1, 0, 50, 50)
    },
    material() {
      return new THREE.MeshLambertMaterial({
        transparent: true,
      })
    },
    mesh(geometry, material) {
      return new THREE.Mesh(geometry, material)
    },
    objectConfig() {
      return {
        values: {
          rotation: types.compound({
            x: types.number(0, {range: [-Infinity, Infinity]}),
            y: types.number(0, {range: [-Infinity, Infinity]}),
            z: types.number(0, {range: [-Infinity, Infinity]}),
          }),
          opacity: types.number(0.5, {range: [-Infinity, Infinity], nudgeMultiplier:0.01}),
          scale: types.number(1.01, {range: [-Infinity, Infinity], nudgeMultiplier:0.005}),
          image: types.image('yun.png', {label: 'Texture',}),
          repeat: types.number(3),
        },
        change(values, data:{
            mesh: Object3D
            material: THREE.MeshLambertMaterial
            geometry: BufferGeometry
        }) {
          data.mesh.rotation.set(values.rotation.x, values.rotation.y, values.rotation.z)
          data.mesh.scale.set(values.scale, values.scale, values.scale)
          const texture = new THREE.TextureLoader().load(project.getAssetUrl(values.image))
          texture.wrapS = THREE.MirroredRepeatWrapping
          texture.wrapT = THREE.MirroredRepeatWrapping
          texture.repeat = new THREE.Vector2(values.repeat, values.repeat)
          data.material.setValues({
            map:texture,
            opacity:values.opacity
          })
        },
      }
    },
  })
}
const animation = async ({scene}: { scene: Scene }) => {
}
</script>

<style scoped lang="less">
.large-screen-map-animation {

}
</style>
