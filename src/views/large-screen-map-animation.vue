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
import {getProject, ISheet, ISheetObject, types, UnknownShorthandCompoundProps} from "@theatre/core"
import {Material} from "three/src/materials/Material";
import {Object3D} from "three/src/core/Object3D";
import color from "color";
import {geoMercator} from "d3-geo";
import theatreProjectState from "../../public/images/map/theatre-project-state.json";
import {Texture} from "three/src/textures/Texture";

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
  })
  studio.initialize()
}

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
  downloadImagesTexture(url: string, imageName?: string): Texture
}) => {
  localStorage.clear()
  const lines = [
      [[116.405285, 39.904989],[120.153576, 30.287459]],
      [[87.617733, 43.792818],[120.153576, 30.287459]],
  ]
  const provinceNameMaps = [
    "浙江省",
    "北京市",
    "新疆维吾尔自治区"
  ]
  const sheetsByIdMap = {
    "省份": {
      data:provinceNameMaps,
      getValue(b:string){
        return {
          "trackData": {
            [`GS6wSiUxXx${b}`]: {
              "type": "BasicKeyframedTrack",
              "__debugName": `${b}:["rotation","x"]`,
              "keyframes": []
            },
            [`9XQa_whF4S${b}`]: {
              "type": "BasicKeyframedTrack",
              "__debugName": `"${b}:[\"rotation\",\"y\"]"`,
              "keyframes": [
                {
                  "id": `uKHxri1W6G${b}`,
                  "position": 0,
                  "connectedRight": true,
                  "handles": [
                    0.5,
                    1,
                    0.5,
                    0.5
                  ],
                  "type": "bezier",
                  "value": 0
                },
                {
                  "id": `XqSQhcSLb3${b}`,
                  "position": 6.1,
                  "connectedRight": true,
                  "handles": [
                    0.5,
                    0.5,
                    0.5,
                    0
                  ],
                  "type": "bezier",
                  "value": 6.2831
                }
              ]
            },
            [`hlldCXexxh${b}`]: {
              "type": "BasicKeyframedTrack",
              "__debugName": `"${b}:[\"rotation\",\"z\"]"`,
              "keyframes": []
            }
          },
          "trackIdByPropPath": {
            "[\"rotation\",\"x\"]": `GS6wSiUxXx${b}`,
            "[\"rotation\",\"y\"]": `9XQa_whF4S${b}`,
            "[\"rotation\",\"z\"]": `hlldCXexxh${b}`
          }
        }
  }
    },
    "飞线": {
      data: lines,
      getKey(b:string,k:number){
        return `飞线-${k+1}`
      },
      getValue(b:string,k:number){
        const key = this.getKey(b, k)
        return {
          "trackData": {
            [`cnw4ZkbgLM${key}`]: {
              "type": "BasicKeyframedTrack",
              "__debugName": `${key}:["points"]`,
              "keyframes": [
                {
                  "id": `EUnDAC-14I${key}`,
                  "position": 0,
                  "connectedRight": true,
                  "handles": [
                    0.5,
                    1,
                    0.5,
                    0
                  ],
                  "type": "bezier",
                  "value": 0
                },
                {
                  "id": `mLzXw9V18N${key}`,
                  "position": 1.967,
                  "connectedRight": true,
                  "handles": [
                    0.5,
                    1,
                    0.5,
                    0
                  ],
                  "type": "bezier",
                  "value": 200
                }
              ]
            }
          },
          "trackIdByPropPath": {
            "[\"points\"]": `cnw4ZkbgLM${key}`
          }
        }
      }
    }
  }
  Object.keys(sheetsByIdMap).forEach((name:any) => {
    ;(theatreProjectState as any).sheetsById[name].sequence.tracksByObject = sheetsByIdMap[name]?.data.reduce((a,b, key)=>{
      a[sheetsByIdMap[name]?.getKey?.(b,key,name) || b] = sheetsByIdMap[name]?.getValue?.call?.(sheetsByIdMap[name],b,key,name)
      return a
    },{})
  })

  const project = getProject('大屏地图动效', {
    state: theatreProjectState,
    assets: {
      baseUrl: "./images/map"
    }
  })
  const sheet = project.sheet('地图')
  const yunSheet = project.sheet('云层')
  const provinceSheet = project.sheet('省份')
  const flywireSheet = project.sheet('飞线')
  const {THREE, scene,camera} = three
  await project.ready
  sheet.sequence.play()
  yunSheet.sequence.play({iterationCount:Infinity})
  provinceSheet.sequence.play({iterationCount:Infinity, range:[0,6]})
  flywireSheet.sequence.play({iterationCount:Infinity, range:[0,2]})
  function createOBj<
      V extends UnknownShorthandCompoundProps,
  >(key: string, config: {
    _geometry?: BufferGeometry
    _material?: Material
    _mesh?: Object3D
    scene?: Object3D
    sheet?: ISheet
    geometry?(): Promise<BufferGeometry> | BufferGeometry
    material?(): Promise<Material> | Material
    mesh?(geometry: BufferGeometry, material: Material): Promise<Object3D> | Object3D
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
        material?: Material
        geometry?: BufferGeometry
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
    (config.scene || scene).add(mesh)
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
    const object = (config.sheet || sheet).object(key, objectConfig.values || {}, {
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
  const lineTexture = await three.downloadImagesTexture(
      "./images/map/line.png",
      'line'
  )
  const lineTexture2 = await three.downloadImagesTexture(
      "./images/map/line2.png",
      'line2'
  )
  const textures = {
    earth:await three.downloadImagesTexture(
        "./images/map/earth.jpg",
        'earth'
    )
  }
  const envMaps = ( function () {
    const cubeTextureLoader = new THREE.CubeTextureLoader();
    const path = './images/map/';
    const format = '.jpg';
    const urls = [
      path + 'px' + format, path + 'nx' + format,
      path + 'py' + format, path + 'ny' + format,
      path + 'pz' + format, path + 'nz' + format
    ];

    const reflectionCube = cubeTextureLoader.load( urls );

    const refractionCube = cubeTextureLoader.load( urls );
    refractionCube.mapping = THREE.CubeRefractionMapping;

    return {
      none: null,
      reflection: reflectionCube,
      // refraction: refractionCube
    };

  } )();
  scene.environment = envMaps.reflection
  // 关闭灯光帮助
  // three.lightHelper.visible = false
  // 关闭相机帮助
  // three.cameraHelper.visible = false
  three.light.visible = false
  // 全局配置
  sheet.object('全局配置', {
    zoom: types.number(290.45,{nudgeMultiplier:0.05}),
    camera:types.compound({
      fov: types.number(50,{nudgeMultiplier:0.05}),
      x: types.number(114.55,{nudgeMultiplier:0.05}),
      y: types.number(366.95,{nudgeMultiplier:0.05}),
      z: types.number(92.55,{nudgeMultiplier:0.05}),
    },{label:"相机"}),
    scene:types.compound({
      x: types.number(-0.645,{nudgeMultiplier:0.005}),
      y: types.number(1.76,{nudgeMultiplier:0.005}),
      z: types.number(-0.405,{nudgeMultiplier:0.005}),
    },{label:"场景旋转"})
  }).onValuesChange((data) => {
    scene.scale.set(data.zoom, data.zoom, data.zoom)
    three.camera.position.set(data.camera.x,data.camera.y,data.camera.z)
    three.scene.rotation.set(data.scene.x,data.scene.y,data.scene.z)
    three.camera.fov = data.camera.fov
  })
  await createOBj("半球灯光",{
    mesh() {
      const light = new THREE.HemisphereLight(0xffffff, 262);
      return light as any
    },
    objectConfig() {
        return {
          values:{
            x: types.number(61),
            y: types.number(2315),
            z: types.number(1734),
            intensity: types.number(10),
          },
          change(values, data:{
            mesh:THREE.HemisphereLight
          }) {
            data.mesh.position.set(values.x, values.y, values.z)
            data.mesh.intensity = values.intensity
          },
        }
    },
  })
  await createOBj("平行光1",{
    mesh() {
      const intensity = 1;
      const light = new THREE.RectAreaLight( 0xffffff, 1,  10, 10 );
      return light as any
    },
    objectConfig() {
        return {
          values:{
            x: types.number(0.2,{nudgeMultiplier:0.05}),
            y: types.number(1.05,{nudgeMultiplier:0.05}),
            z: types.number(0.2,{nudgeMultiplier:0.05}),
            width: types.number(697.67,{nudgeMultiplier:0.05}),
            height: types.number(80.55,{nudgeMultiplier:0.05}),
            intensity: types.number(14.65,{nudgeMultiplier:0.05}),
          },
          change(values, data:{
            mesh:THREE.RectAreaLight
          }) {
            data.mesh.width = values.width
            data.mesh.height = values.height
            data.mesh.position.set(values.x, values.y, values.z)
            data.mesh.intensity = values.intensity
          },
        }
    },
  })
  await createOBj("平行光2",{
    mesh() {
      const intensity = 1;
      const light = new THREE.RectAreaLight( 0xffffff, 1,  10, 10 );
      return light as any
    },
    objectConfig() {
        return {
          values:{
            x: types.number(0.2,{nudgeMultiplier:0.05}),
            y: types.number(1.05,{nudgeMultiplier:0.05}),
            z: types.number(0.2,{nudgeMultiplier:0.05}),
            width: types.number(697.67,{nudgeMultiplier:0.05}),
            height: types.number(80.55,{nudgeMultiplier:0.05}),
            intensity: types.number(14.65,{nudgeMultiplier:0.05}),
          },
          change(values, data:{
            mesh:THREE.RectAreaLight
          }) {
            data.mesh.width = values.width
            data.mesh.height = values.height
            data.mesh.position.set(values.x, values.y, values.z)
            data.mesh.intensity = values.intensity
          },
        }
    },
  })

  // 地球
  await createOBj("地球", {
    geometry() {
      return new THREE.CapsuleGeometry(1, 0, 50, 50)
    },
    material() {
      return new THREE.MeshBasicMaterial({})
    },
    mesh(geometry, material) {
      return new THREE.Mesh(geometry, material)
    },
    objectConfig() {
      return {
        values: {
          rotation: types.compound({
            x: types.number(0),
            y: types.number(0),
            z: types.number(0),
          }),
          color:types.rgba(getRgba("#230f80"))
        },
        change(values, data:{
          mesh: Object3D,
          material: THREE.MeshLambertMaterial,
          geometry: THREE.BoxGeometry,
        }) {
          data.material.setValues({
            color:color(values.color.toString()).rgbNumber(),
            alphaMap:textures.earth,
            bumpMap:textures.earth,
            aoMap:textures.earth,
          })
          data.mesh.rotation.set(values.rotation.x, values.rotation.y, values.rotation.z)
        },
      }
    },
  })
  await createOBj("云层", {
    sheet:yunSheet,
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
            x: types.number(0),
            y: types.number(0),
            z: types.number(0),
          }),
          opacity: types.number(0.3, { nudgeMultiplier:0.01}),
          scale: types.number(1.02, { nudgeMultiplier:0.005}),
          image: types.image('yun.png', {label: 'Texture',}),
          image2: types.image('yun2.png', {label: 'Texture',}),
          repeat: types.number(3),
        },
        change(values, data:{
          mesh: Object3D
          material: THREE.MeshLambertMaterial
          geometry: BufferGeometry
        }) {
          data.mesh.rotation.set(values.rotation.x, values.rotation.y, values.rotation.z)
          data.mesh.scale.set(values.scale, values.scale, values.scale)
          const texture = three.downloadImagesTexture(project.getAssetUrl(values.image2),project.getAssetUrl(values.image)).clone()
          texture.wrapS = THREE.MirroredRepeatWrapping
          texture.wrapT = THREE.MirroredRepeatWrapping
          texture.repeat = new THREE.Vector2(values.repeat, values.repeat)
          data.material.setValues({
            map:texture,
            alphaMap:texture,
            opacity:values.opacity,
            emissive:0
          })
        },
      }
    },
  })
  await createOBj("地球板块", {
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
            x: types.number(0,{nudgeMultiplier:0.05}),
            y: types.number(0,{nudgeMultiplier:0.05}),
            z: types.number(0,{nudgeMultiplier:0.05}),
          }),
          opacity: types.number(0.5, { nudgeMultiplier:0.01}),
          scale: types.number(1.01, { nudgeMultiplier:0.005}),
          image: types.image('map.png', {label: 'Texture',}),
          repeat: types.number(1),
        },
        change(values, data:{
            mesh: Object3D
            material: THREE.MeshLambertMaterial
            geometry: BufferGeometry
        }) {
          data.mesh.rotation.set(values.rotation.x, values.rotation.y, values.rotation.z)
          data.mesh.scale.set(values.scale, values.scale, values.scale)
          const texture = three.downloadImagesTexture(project.getAssetUrl(values.image),project.getAssetUrl(values.image)).clone()
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
  await createOBj("中国地图", {
    geometry() {
      return new THREE.CapsuleGeometry(1, 0, 50, 50)
    },
    material() {
      return new THREE.MeshLambertMaterial({
        transparent: true,
      })
    },
    async mesh() {
      const json = await fetch('./images/map/china.json').then(res => res.json())
      const mapDepth = 0.4
      const mapGroup: any = new THREE.Group()
      const projection = geoMercator()
          // 地图中心位置
          .center([121.539698, 29.874452])
          // 地图缩放
          .scale(1)
          .translate([0, 0])
      await Promise.all(json.features.map(async elem=>{
        const province: any = new THREE.Group()
        const coordinatesGroup: any = new THREE.Group()
        const coordinates = elem.geometry.coordinates
        coordinates.forEach((multiPolygon) => {
          if (typeof multiPolygon[0][0] === 'number') {
            multiPolygon = [multiPolygon as any]
          }
          multiPolygon.forEach((polygon) => {
            // 这里的坐标要做2次使用：1次用来构建模型，1次用来构建轮廓线
            const linGeometry = new THREE.BufferGeometry()
            const points = []
            const shape = new THREE.Shape()
            for (let i = 0; i < polygon.length; i++) {
              const [x, y] = projection(polygon[i] as any) as number[]
              if (i === 0) {
                shape.moveTo(x, -y)
              }
              shape.lineTo(x, -y)
              points.push(new THREE.Vector3(x, -y, mapDepth + 0.002))
            }
            linGeometry.setFromPoints(points)
            // 边界线
            const line = new THREE.Line(linGeometry)
            coordinatesGroup.add(line)
            // 土地
            const geometry = new THREE.ExtrudeGeometry(shape, {
              bevelEnabled: false,
              bevelSegments: 1,
              depth:mapDepth,
            })
            const mesh = new THREE.Mesh(geometry)
            mesh.name = 'map'
            coordinatesGroup.add(mesh)
          })
          province.add(coordinatesGroup)

        })
        if(elem.properties?.center && provinceNameMaps.includes(elem.properties?.name)){
          await createOBj(elem.properties?.name,{
            sheet:provinceSheet,
            scene:province,
            geometry() {
                return new THREE.ConeGeometry( 0.1, 0.16, 4 )
            },
            mesh(geometry, material) {
              const cone = new THREE.Mesh( geometry, [
                new THREE.MeshBasicMaterial( {
                  transparent:true,
                  side: THREE.DoubleSide,
                  map:(texture=>{
                    texture.wrapS = THREE.RepeatWrapping
                    return texture
                  })(lineTexture.clone()),
                }),
                null,
                new THREE.MeshBasicMaterial( {
                  transparent:true,
                  side: THREE.DoubleSide,
                  map:(texture=>{
                    texture.wrapS = THREE.RepeatWrapping
                    return texture
                  })(lineTexture2.clone()),
                }),
              ] );
              cone.receiveShadow = true
              cone.castShadow = true
              cone.rotation.x = -Math.PI/2
              const [px,py] = projection(elem.properties?.center)
              cone.position.set(px,-py, 0.405)
              return cone
            },
            objectConfig(data) {
                return {
                  values: {
                      position: types.compound({
                        x: types.number(data.mesh.position.x, {nudgeMultiplier: 0.001}),
                        y: types.number(data.mesh.position.y, {nudgeMultiplier: 0.001}),
                        z: types.number(data.mesh.position.z, {nudgeMultiplier: 0.001})
                      }),
                      rotation: types.compound({
                        x: types.number(data.mesh.rotation.x, {nudgeMultiplier: 0.001}),
                        y: types.number(data.mesh.rotation.y, {nudgeMultiplier: 0.001}),
                        z: types.number(data.mesh.rotation.z, {nudgeMultiplier: 0.001})
                      }),
                      scale: types.number(0.06, {nudgeMultiplier: 0.001}),
                      n11: types.number(4, {nudgeMultiplier: 0.001}),
                      n12: types.number(-0.5, {nudgeMultiplier: 0.001}),
                      n13: types.number(0, {nudgeMultiplier: 0.001}),
                      n21: types.number(0, {nudgeMultiplier: 0.001}),
                      n22: types.number(1, {nudgeMultiplier: 0.001}),
                      n23: types.number(0, {nudgeMultiplier: 0.001}),
                      n31: types.number(0, {nudgeMultiplier: 0.001}),
                      n32: types.number(0, {nudgeMultiplier: 0.001}),
                      n33: types.number(0, {nudgeMultiplier: 0.001}),
                  },
                  change(values, data) {
                    data.mesh.position.set(values.position.x, values.position.y,values.position.z)
                    data.mesh.rotation.set(values.rotation.x, values.rotation.y,values.rotation.z)
                    data.mesh.scale.set(values.scale,values.scale, values.scale)
                    data.mesh.material[0].map.matrixAutoUpdate = false
                    data.mesh.material[0].map.matrix = new THREE.Matrix3().set(
                        values.n11,
                        values.n12,
                        values.n13,
                        values.n21,
                        values.n22,
                        values.n23,
                        values.n31,
                        values.n32,
                        values.n33,
                    )
                  },
                }
            },
          })
        }

        mapGroup.add(province)
      }))
      await Promise.all(lines.map(async ([start,end]:any,k)=>{
        const [sx,sy] = projection(start)
        const [ex,ey] = projection(end)
        await createOBj(`飞线-${k+1}`,{
          sheet:flywireSheet,
          scene: mapGroup,
          geometry() {
            const z = 0.405
            const curve = new THREE.QuadraticBezierCurve3(
                new THREE.Vector3( ex,-ey, z ),
                new THREE.Vector3( (ex+sx)/2,(-sy+-ey)/2, z+0.1 ),
                new THREE.Vector3( sx,-sy, z),
            );
            return new THREE.BufferGeometry().setFromPoints( curve.getPoints( 50 ) );
          },
          material() {
              return new THREE.LineBasicMaterial( {
                color: 0xff0000,
                linewidth: 3,
              } )
          },
          mesh(geometry, material) {
              return new THREE.Line( geometry, material )
          },
          objectConfig(data) {
              return {
                values:{
                  points:types.number(0)
                },
                change(values, data) {
                  const z = 0.405
                  const curve = new THREE.QuadraticBezierCurve3(
                      new THREE.Vector3( ex,-ey, z ),
                      new THREE.Vector3( (ex+sx)/2,(-sy+-ey)/2, z+0.1 ),
                      new THREE.Vector3( sx,-sy, z),
                  );
                  const pointsMax = 100
                  const points = curve.getPoints( pointsMax )
                  const index = Math.ceil(values.points)
                  const currPoints = index <= pointsMax? points.slice(0,index) : points.slice(index-pointsMax)
                  data.mesh.geometry = new THREE.BufferGeometry().setFromPoints(currPoints)
                },
              }
          },
        })
      }))
      mapGroup.traverse((object3d:THREE.Mesh)=>{
        if(object3d.name === 'map'){
          object3d.material = new THREE.MeshStandardMaterial({
            color: 0x5e62da, // 纯色
            metalness: 0.0,  // 完全金属
            roughness: 0.0,  // 完全光滑
            envMap:envMaps.reflection
          });
          object3d.castShadow = true
          object3d.receiveShadow = true
        }
      })
      return mapGroup
    },
    objectConfig() {
      return {
        values: {
          scale: types.number(1.009, { nudgeMultiplier:0.0005}),
          rotation: types.compound({
            x: types.number(1.289, { nudgeMultiplier:0.0005}),
            y: types.number(4.09, { nudgeMultiplier:0.0005}),
            z: types.number(1.508, { nudgeMultiplier:0.0005}),
          }),
          position: types.compound({
            x: types.number(-0.661, { nudgeMultiplier:0.0005}),
            y: types.number(0.247, { nudgeMultiplier:0.0005}),
            z: types.number(0.229, { nudgeMultiplier:0.0005}),
          }),
        },
        change(values, data:{
            mesh: Object3D
            material: THREE.MeshLambertMaterial
            geometry: BufferGeometry
        }) {
          data.mesh.position.set(values.position.x, values.position.y, values.position.z)
          data.mesh.rotation.set(values.rotation.x, values.rotation.y, values.rotation.z)
          data.mesh.scale.set(values.scale, values.scale, values.scale)
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
