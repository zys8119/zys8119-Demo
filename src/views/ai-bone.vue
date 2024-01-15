<template>
  <div class="ai-digital-people" ref="elRef">
    <BaseThree
      @load="load"
      @animation="animation"
    ></BaseThree>
  </div>
</template>

<script setup lang="ts" title="ai数字人">
import BaseThree, {BaseThreeClass, InitializationData} from "@/src/components/BaseThree"
import * as THREE from 'three';
import {AnimationMixer, AnimationAction, MeshPhongMaterial, ExtrudeGeometry, Vector2} from 'three';
import mapJson from "@/src/assets/ai-bone/ningbo.json"
import weixingNb from "@/src/assets/ai-bone/nb.png"
import font from "@/src/assets/ai-bone/YouSheBiaoTiHei.ttf"
import line from "@/src/assets/ai-bone/line.png"
import lineTop from "@/src/assets/ai-bone/line-top.png"
import transparent from "@/src/assets/ai-bone/tm.png"
import liuguan from "@/src/assets/ai-bone/liuguang.png"
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js'
import { geoMercator } from 'd3-geo'
import onEvent from "three-onevent-esm";
import {AnimationClip} from "three/src/animation/AnimationClip";
import {AdditiveAnimationBlendMode, NormalAnimationBlendMode} from "three/src/constants";
const elRef = ref()
let mixer:AnimationMixer = null
let animationClips:Array<AnimationClip> = []
const projectionScale = ref(200)
// 地图立体深度
const depth = ref(0.3)
// 添加柱子
const pillars = ref<any>([])
const projection = geoMercator()
    // 地图中心位置
    .center([121.539698, 29.874452])
    // 地图缩放
    .scale(projectionScale.value)
    .translate([0, 0])
let binjie = null
const load = async (three: BaseThreeClass)=>{
  animationClips = []
  new onEvent(three.scene, three.camera , elRef.value)
  const {scene} = three
  await three.downloadFonts(
      font,
      'font'
  )
  const lineTexture = await three.downloadImagesTexture(
      line,
      'line'
  )
  const lineTopTexture = await three.downloadImagesTexture(
      lineTop,
      'line-top'
  )
  const transparentTexture = await three.downloadImagesTexture(
      transparent,
      'transparent'
  )
  const liuguanTexture = await three.downloadImagesTexture(
      liuguan,
      'liuguan'
  )
  const map = new THREE.Group()
  await Promise.all(
      mapJson.features.map(async (elem, key: number) => {
        const province: any = new THREE.Group()
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
              points.push(new THREE.Vector3(x, -y, depth.value + 0.002))
            }
            linGeometry.setFromPoints(points)
            // 边界线
            const line = new THREE.Line(linGeometry)
            province.add(line)
            // 土地
            const geometry = new THREE.ExtrudeGeometry(shape, {
              bevelEnabled: false,
              bevelSegments: 1,
              depth: depth.value,
            })
            const mesh = new THREE.Mesh(geometry)
            mesh.name = 'map'
            province.add(mesh)
          })
        })
        // 将geojson的properties放到模型中，后面会用到
        province.properties = elem.properties
        if (elem.properties.centroid) {
          const [x, y] = projection(elem.properties.centroid as any) as number[]
          province.properties._centroid = [x, y]
        }
        // 文字
        const fontBox = new TextGeometry(elem.properties.name, {
          font: (three.fonts.get('font') as any).font,
          size: 0.1,
          height: 0.01,
          curveSegments: 12,
        })
        const fontMaterial = new THREE.MeshPhongMaterial({
          flatShading: true,
          color: 0xffffff
        })
        const fontMesh = new THREE.Mesh(fontBox, fontMaterial)
        const [x, y] = projection(elem.properties.center as any) as number[]
        const offset = {
          "鄞州区":{x:0.5, y:-0.25},
          "海曙区":{x:-0.6, y:-0.25},
          "江北区":{x:-0.2, y:0.3},
          "镇海区":{x:-0.3, y:0.2},
          "北仑区":{x:0.3, y:-0.2},
          "慈溪市":{x:0.3, y:0},
        }[elem.properties.name]
        const [cx, cy] = [x - 0.2 + (offset?.x ?? 0), -y + (offset?.y ?? 0)]
        fontMesh.position.set(cx, cy, depth.value)
        fontMesh.rotation.x  = Math.PI/180*90
        fontMesh.receiveShadow = true
        fontMesh.castShadow = true
        province.add(fontMesh)
        // 柱子
        const barDepth = depth.value + 0.5
        const barBox = new THREE.BoxGeometry(0.1, 0.1, barDepth)
        const barMaterial = [
          new THREE.MeshBasicMaterial({
            transparent:true,
            map:lineTexture.clone(),
          }),
          new THREE.MeshBasicMaterial({
            transparent:true,
            map:lineTexture.clone()
          }),
          new THREE.MeshBasicMaterial({
            transparent:true,
            map:lineTexture.clone()
          }),
          new THREE.MeshBasicMaterial({
            transparent:true,
            map:lineTexture.clone()
          }),
          new THREE.MeshBasicMaterial({
            color:new THREE.Color("#ce00dd"),
            transparent:true,
            map:lineTopTexture.clone()
          }),
        ].map((v,i)=>{
          v.map?.center?.set?.(0.5,0.5)
          if(i === 0){
            v.map.rotation =  Math.PI / 2
          }else
          if(i === 1){
            v.map.rotation =  -Math.PI / 2
          }
          else if(i === 2){
            v.map.rotation = -Math.PI
          }
          return v
        })
        const barMesh = new THREE.Mesh(barBox, barMaterial)
        barMesh.name = 'map.bar.mesh'
        barMesh.position.set(cx-0.1, cy+0.1, barDepth/2 + depth.value)
        province.add(barMesh)
        const barConterMesh = new THREE.Mesh(
            new THREE.BoxGeometry(0.05, 0.05, barDepth - 0.001),
            new THREE.MeshBasicMaterial({color: "#9dfbfe" })
        )
        barConterMesh.position.set(cx-0.1, cy+0.1, barDepth/2 + depth.value)
        province.add(barConterMesh)
        map.add(province)
        // 动画
        const animationClip = new THREE.AnimationClip('柱子动画', 2, [
            new THREE.VectorKeyframeTrack(
                'map.bar.mesh.position',
                [0,1],
                [
                    new THREE.Vector3(0,0,0),
                    new THREE.Vector3(0,0,1000),
                ].map(e=>e.toArray()).reduce((a,b)=>a.concat(b),[]),
            )
        ])
        animationClips.push(animationClip)
      })
  )
  const scale = 100
  map.scale.set(scale, scale, scale)
  map.rotation.set(-1.5, 0, 0)
  map.position.set(0, 100, 0)
  // scene.rotation.set(-1.5, 0, 0)
  const mapTexture = three.downloadImagesTexture(weixingNb)
  mapTexture.repeat.set(0.2,0.2)
  mapTexture.offset.set(-0.5,0.8)
  mapTexture.wrapS = THREE.RepeatWrapping
  mapTexture.wrapT = THREE.RepeatWrapping
  map.traverse((object3d:THREE.Mesh)=>{
    if(object3d.name === 'map'){
      object3d.material = new THREE.MeshPhongMaterial({
        color:new THREE.Color("#969696"),
        bumpMap:mapTexture,
        bumpScale:5,
        combine:THREE.AddOperation,
        flatShading:true,
        map:mapTexture,
        emissiveMap:mapTexture,
        alphaMap:mapTexture,
      })
      object3d.castShadow = true
      object3d.receiveShadow = true
      object3d.on('hover', ev=>{
        // console.log(ev)
      })
    }
  })
  scene.add(map)
  const map2 = map.clone()
  binjie = liuguanTexture.clone()
  binjie.repeat.set(1,3.5)
  binjie.offset.set(0,0.55)
  binjie.wrapS = THREE.RepeatWrapping
  binjie.wrapT = THREE.RepeatWrapping
  // binjie.rotation = Math.PI*0.5
  map.traverse((object3d:THREE.Mesh)=>{
    if(object3d.name === 'map'){
      object3d.material = [
        new THREE.MeshBasicMaterial({
          transparent:true,
          map:transparentTexture
        }),
        new THREE.MeshPhongMaterial({
          color: "#fff",
          map:binjie
        }),
      ]
    }
  })
  scene.add(map2)
  console.log(three.scene)
  const b = new THREE.Mesh(
      new THREE.BoxGeometry(0.5,0.5,0.5),
      new THREE.MeshBasicMaterial({color:0x00ff00})
  )
  b.name = 'AAA'
  const obj = new THREE.AnimationObjectGroup()
  animationClips[0] = new THREE.AnimationClip('柱子动画2', 5, [
    new THREE.VectorKeyframeTrack(
        'AAA.position',
        [0,5],
        [
          new THREE.Vector3(0,0,0),
          new THREE.Vector3(0,0,300),
        ].map(e=>e.toArray()).reduce((a,b)=>a.concat(b),[]),
    )
  ])
  // b.scale.set(0.1,0.1,0.1)
  console.log(three.scene)
  three.scene.children[4].add(b)
  obj.add(b)
  obj.add(three.scene)
  // three.scene.add(b)
  mixer = new THREE.AnimationMixer(obj)
  if(mixer && animationClips[0]){
    console.log(animationClips[0])
    const action = mixer.clipAction(animationClips[0])
    action.enabled = true
    action.clampWhenFinished = true
    // action.loop = THREE.LoopOnce
    action
        .play()
  }
}
const play = async (keyName:string)=>{

}
const animation = (three: BaseThreeClass)=>{
  if(binjie){
    binjie.offset.x += 0.01
  }
  if(mixer){
    mixer.update(three.clockTime)
  }
}
</script>

<style scoped lang="less">
.ai-digital-people {
  .base-three{
    //background-color: #;
  }
}
</style>
