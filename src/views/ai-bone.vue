<template>
  <div class="ai-digital-people" ref="elRef">
    <BaseThree
      @load="load"
      @animation="animation"
    ></BaseThree>
  </div>
</template>

<script setup lang="ts" title="3d地图">
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
import fk1 from "@/src/assets/ai-bone/fk1.png"
import fk2 from "@/src/assets/ai-bone/fk2.png"
import xuanzhuan from "@/src/assets/ai-bone/xuanzhuan.png"
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js'
import { geoMercator } from 'd3-geo'
import onEvent from "three-onevent-esm";
import {AnimationClip} from "three/src/animation/AnimationClip";
import {merge} from "lodash"
const elRef = ref()
const activeMixer = ref<AnimationMixer>()
const mixers:Array<AnimationMixer> = []
let animationClips:Array<AnimationClip> = []
const barAnimationClipAlls:AnimationClip =  new THREE.AnimationClip('全部柱子动画', 2, [])
const labelAnimationClipAlls:AnimationClip =  new THREE.AnimationClip('全部地图名称动画', 2, [])
const mapAnimationClipAlls:AnimationClip =  new THREE.AnimationClip('全部地图动画', 2, [])
const conferenceTextGroupAnimationClipAlls:AnimationClip =  new THREE.AnimationClip('地图数据动画', 2, [])
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
  const fk1Texture = await three.downloadImagesTexture(
      fk1,
      'fk1'
  )
  const fk2Texture = await three.downloadImagesTexture(
      fk2,
      'fk2'
  )
  const xuanzhuanTexture = await three.downloadImagesTexture(
      xuanzhuan,
      'xuanzhuan'
  )
  const map = new THREE.Group()
  map.name = 'mapGroup'
  await Promise.all(
      mapJson.features.map(async (elem, key: number) => {
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
              points.push(new THREE.Vector3(x, -y, depth.value + 0.002))
            }
            linGeometry.setFromPoints(points)
            // 边界线
            const line = new THREE.Line(linGeometry)
            coordinatesGroup.add(line)
            // 土地
            const geometry = new THREE.ExtrudeGeometry(shape, {
              bevelEnabled: false,
              bevelSegments: 1,
              depth: depth.value,
            })
            const mesh = new THREE.Mesh(geometry)
            mesh.name = 'map'
            coordinatesGroup.add(mesh)
          })
        })
        province.add(coordinatesGroup)
        // 将geojson的properties放到模型中，后面会用到
        province.properties = elem.properties
        if (elem.properties.centroid) {
          const [x, y] = projection(elem.properties.centroid as any) as number[]
          province.properties._centroid = [x, y]
        }
        // 文字
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
        const createText = (options:{
          text:string
          fontSize?:number
          pos:number[],
          name?:string,
          color?:string,
          showShadow?:boolean,
          fn?(data:{
            box:TextGeometry
            material:MeshPhongMaterial
            mesh:THREE.Mesh
          }):void
        })=>{
          const data = merge<Partial<typeof options>,typeof options>({
            name:`${elem.properties.name}.map.label.mesh`,
            showShadow:true
          }, options)
          const fontBox = new TextGeometry(data.text, {
            font: (three.fonts.get('font') as any).font,
            size: data.fontSize || 0.1,
            height: 0.01,
            curveSegments: 12,
          })
          const fontMaterial = new THREE.MeshPhongMaterial({
            flatShading: true,
            color: new THREE.Color(data.color || 0xffffff),
            transparent: true,
          })
          const fontMesh = new THREE.Mesh(fontBox, fontMaterial)
          ;(fontMesh.position.set as any)(...data.pos)
          fontMesh.rotation.x  = Math.PI/180*90
          if(data.showShadow){
            fontMesh.receiveShadow = true
            fontMesh.castShadow = true
          }
          fontMesh.name = data.name
          data?.fn?.({
            box:fontBox,
            material:fontMaterial,
            mesh:fontMesh
          })
          return fontMesh
        }
        const labelTtracks = [
          new THREE.VectorKeyframeTrack(
              `${elem.properties.name}.map.label.mesh.material.opacity`,
              [0,2],
              [0, 1],
          )
        ]
        labelAnimationClipAlls.tracks = labelAnimationClipAlls.tracks.concat(labelTtracks)
        province.add(createText({
          text:elem.properties.name,
          pos:[cx, cy, depth.value],
        }))
        coordinatesGroup.name = `${elem.properties.name}.map.mesh`
        const mapTtracks = [
          new THREE.VectorKeyframeTrack(
              `${elem.properties.name}.map.mesh.position`,
              [0,2],
              [
                new THREE.Vector3(0,0,0,),
                new THREE.Vector3(0,0,0.1),
              ].map(e=>e.toArray()).reduce((a,b)=>a.concat(b),[]),
          ),
          new THREE.VectorKeyframeTrack(
              `${elem.properties.name}.map.mesh.clone.position`,
              [0,2],
              [
                new THREE.Vector3(0,0,0,),
                new THREE.Vector3(0,0,0.1),
              ].map(e=>e.toArray()).reduce((a,b)=>a.concat(b),[]),
          ),
          new THREE.VectorKeyframeTrack(
              `${elem.properties.name}.map.label.mesh.position`,
              [0,2],
              [
                new THREE.Vector3(cx, cy, depth.value),
                new THREE.Vector3(cx, cy, depth.value+0.1),
              ].map(e=>e.toArray()).reduce((a,b)=>a.concat(b),[]),
          )
        ]
        mapAnimationClipAlls.tracks = mapAnimationClipAlls.tracks.concat(mapTtracks)
        // 会议文字
        const conferenceTextGroup = new THREE.Group()
        conferenceTextGroup.add(createText({
          text:"在线活跃次数",
          name:`${elem.properties.name}.conferenceText1`,
          fontSize:0.15,
          color:'#b600cb',
          showShadow:false,
          pos:[cx, cy, depth.value + 0.5],
          fn({material}){
            material.opacity = 0
          }
        }))
        conferenceTextGroup.add(createText({
          text:"56",
          name:`${elem.properties.name}.conferenceText2`,
          fontSize:0.15,
          pos:[cx, cy, depth.value + 0.3],
          color:'#ff0000',
          showShadow:false,
          fn({material}){
            material.opacity = 0
          }
        }))
        conferenceTextGroup.name = `${elem.properties.name}.conferenceTextGroup`
        const conferenceTextGroupTtracks = [
          new THREE.VectorKeyframeTrack(
              `${elem.properties.name}.conferenceText1.material.opacity`,
              [0,2],
              [0, 1],
          ),
          new THREE.VectorKeyframeTrack(
              `${elem.properties.name}.conferenceText2.material.opacity`,
              [0,2],
              [0, 1],
          )
        ]
        conferenceTextGroupAnimationClipAlls.tracks = conferenceTextGroupAnimationClipAlls.tracks.concat(conferenceTextGroupTtracks)
        province.add(conferenceTextGroup)
        // 柱子
        const barDepth = depth.value + Math.random()
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
        barMesh.name = `${elem.properties.name}.map.bar.mesh.line`
        barMesh.position.set(cx-0.1, cy+0.1, barDepth/2 + depth.value)
        province.add(barMesh)
        const barConterMesh = new THREE.Mesh(
            new THREE.BoxGeometry(0.05, 0.05, barDepth - 0.01),
            new THREE.MeshBasicMaterial({color: "#9dfbfe" })
        )
        barConterMesh.name = `${elem.properties.name}.map.bar.center.mesh`
        barConterMesh.position.set(cx-0.1, cy+0.1, barDepth/2 + depth.value)
        province.add(barConterMesh)
        map.add(province)
        const tracks = [
          new THREE.VectorKeyframeTrack(
              `${elem.properties.name}.map.bar.mesh.line.scale`,
              [0,2],
              [
                new THREE.Vector3(1,1,0,),
                new THREE.Vector3(1,1,1),
              ].map(e=>e.toArray()).reduce((a,b)=>a.concat(b),[]),
          ),
          new THREE.VectorKeyframeTrack(
              `${elem.properties.name}.map.bar.mesh.line.position`,
              [0,2],
              [
                new THREE.Vector3(cx-0.1, cy+0.1,0,),
                new THREE.Vector3(cx-0.1, cy+0.1, barDepth/2 + depth.value),
              ].map(e=>e.toArray()).reduce((a,b)=>a.concat(b),[]),
          ),
          new THREE.VectorKeyframeTrack(
              `${elem.properties.name}.map.bar.center.mesh.scale`,
              [0,2],
              [
                new THREE.Vector3(1,1,0,),
                new THREE.Vector3(1,1,1),
              ].map(e=>e.toArray()).reduce((a,b)=>a.concat(b),[]),
          ),
          new THREE.VectorKeyframeTrack(
              `${elem.properties.name}.map.bar.center.mesh.position`,
              [0,2],
              [
                new THREE.Vector3(cx-0.1, cy+0.1,0,),
                new THREE.Vector3(cx-0.1, cy+0.1, barDepth/2 + depth.value),
              ].map(e=>e.toArray()).reduce((a,b)=>a.concat(b),[]),
          )
        ]
        // 动画
        const animationClip = new THREE.AnimationClip('柱子动画', 2, tracks)
        animationClips.push(animationClip)
        barAnimationClipAlls.tracks = barAnimationClipAlls.tracks.concat(tracks)
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
    }
  })
  scene.add(map)
  const map2 = map.clone()
  map2.name = 'mapGroupClone'
  binjie = liuguanTexture.clone()
  binjie.repeat.set(1,3.5)
  binjie.offset.set(0,0.55)
  binjie.wrapS = THREE.RepeatWrapping
  binjie.wrapT = THREE.RepeatWrapping
  // binjie.rotation = Math.PI*0.5
  map2.traverse((object3d:THREE.Mesh)=>{
    if(object3d.name.endsWith('map.mesh')){
      object3d.name += '.clone'
    }
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
    }else {
      if(!object3d.isGroup){
        object3d.visible = false
      }
    }
  })
  scene.add(map2)
  console.log(three.scene)
  // 播放动画
  mixers.push((mixer=>{
    if(mixer && labelAnimationClipAlls){
      const action = mixer.clipAction(labelAnimationClipAlls)
      action.enabled = true
      action.clampWhenFinished = true
      action.loop = THREE.LoopOnce
      action
          .play()
    }
    return mixer
  })(new THREE.AnimationMixer(three.scene)))
  mixers.push((mixer=>{
    if(mixer && barAnimationClipAlls){
      const action = mixer.clipAction(barAnimationClipAlls)
      action.enabled = true
      action.clampWhenFinished = true
      action.loop = THREE.LoopOnce
      action
          .play()
    }
    return mixer
  })(new THREE.AnimationMixer(three.scene)))
  // 自动激活动画
  activeMixer.value = new THREE.AnimationMixer(three.scene)
  const labels = mapJson.features.map(e=>e.properties.name)
  let labelsIndex = 0
  setInterval(()=>{
    activeMixer.value.stopAllAction()
    const name = labels[labelsIndex]
    const animationClip = new THREE.AnimationClip('柱子动画', 2,
        []
        .concat(mapAnimationClipAlls.tracks.filter(e=>e.name.includes(name)))
        .concat(conferenceTextGroupAnimationClipAlls.tracks.filter(e=>e.name.includes(name)))
        .concat(barAnimationClipAlls.tracks.filter(e=>e.name.includes(name)))
    )
    const action = activeMixer.value.clipAction(animationClip)
    action.enabled = true
    action.clampWhenFinished = true
    action.loop = THREE.LoopOnce
    action
        .reset()
        .setEffectiveTimeScale(3)
        .play()
    labelsIndex += 1
    if(labelsIndex >=labels.length){
      labelsIndex = 0
    }
  }, 2000)

  mixers.push((mixer=>{
    if(mixer && barAnimationClipAlls){
      const values = [
        new THREE.Quaternion(
              -0.6569051704277281,
              0.13118209550159107,
              0.16132626237722864,
              0.7247349115038703
        ),
        new THREE.Quaternion(
            -0.6988647722795184,
            0.23856862747547736,
            0.2959179481940359,
            0.6058924062800226
        ),
      ].map(e=>e.toArray()).reduce((a,b)=>a.concat(b),[])
      const mapGroupValues = [
        new THREE.Vector3(
            76,
            76,
            76,
        ),
        new THREE.Vector3(
            100,
            100,
            100,
        ),
      ].map(e=>e.toArray()).reduce((a,b)=>a.concat(b),[])
      const tracks = [
        new THREE.VectorKeyframeTrack(
            `mapGroup.quaternion`,
            [0,2],
            values,
        ),
        new THREE.VectorKeyframeTrack(
            `mapGroupClone.quaternion`,
            [0,2],
            values,
        ),
        new THREE.VectorKeyframeTrack(
            `mapGroup.scale`,
            [0,2],
            mapGroupValues,
        ),
        new THREE.VectorKeyframeTrack(
            `mapGroupClone.scale`,
            [0,2],
            mapGroupValues,
        )
      ]
      const animationClip = new THREE.AnimationClip('全局场景动画', 2, tracks)
      const action = mixer.clipAction(animationClip)
      action.enabled = true
      action.clampWhenFinished = true
      action.loop = THREE.LoopOnce
      action
          .play()
    }
    return mixer
  })(new THREE.AnimationMixer(three.scene)))
  // three.transformControls().attach(ground).setMode('translate')
  // 颗粒动画
  const keluMaterialA = new Array(6).fill(new THREE.MeshBasicMaterial({
    color:new THREE.Color('#7ce5ef'),
    transparent:true,
    map:fk1Texture
  }))
  const keluMaterialB = new Array(6).fill(new THREE.MeshBasicMaterial({
    color:new THREE.Color('#7ce5ef'),
    transparent:true,
    opacity:0.9,
  }))
  const kelu = (mesh=>{
    // three.transformControls().attach(mesh).setMode('scale')
    return mesh
  })(new THREE.Mesh(new THREE.BoxGeometry(.2,.2,.2),keluMaterialA))
  // 获取圆弧上的点坐标
  function getPointOnArc(radius, angleInDegrees, centerX, centerY) {
    // 将角度转换为弧度
    var angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;

    // 计算点的坐标
    var x = centerX + radius * Math.cos(angleInRadians);
    var y = centerY + radius * Math.sin(angleInRadians);

    return { x: x, y: y };
  }

  mixers.push((mixer=>{
    const tracks = []
    const time = 2
    new Array(4).fill(0).map((e,index)=>{
      return new Array(50).fill(kelu).map((e,k)=>{
        const {x, y} = getPointOnArc(7, Math.random() * 360, 0, 0)
        const pos = {
          x,
          y,
          z:Math.random()
        }
        const mesh = kelu.clone()
        mesh.name = `keyli-${index}-${k}`
        if(k % 2){
          mesh.material = keluMaterialB
        }
        const keyframeArr = new Array(20).fill(0).map((a,b,c)=>time/c.length*b)
        mesh.position.set(0, 0, 0)
        tracks.push(new THREE.VectorKeyframeTrack(
            `${mesh.name}.position`,
            keyframeArr, keyframeArr.map(e=>new THREE.Vector3(
                pos.x*e,
                pos.y*e,
                pos.z*e,
            )).map(e=>e.toArray()).reduce((a,b)=>a.concat(b),[]),
        ))
        mesh.scale.set(0, 0, 0)
        tracks.push(new THREE.VectorKeyframeTrack(
            `${mesh.name}.scale`,
            keyframeArr, keyframeArr.map(e=>{
              const scale = [0,.2,.4,.6,.8,1][Math.floor(Math.random()*7)]
              return new THREE.Vector3(
                  scale,
                  scale,
                  scale,
              )
            }).map(e=>e.toArray()).reduce((a,b)=>a.concat(b),[]),
        ))
        tracks.push(new THREE.VectorKeyframeTrack(
            `${mesh.name}.quaternion`,
            keyframeArr, keyframeArr.map(e=>{
              return new THREE.Quaternion(
                  Math.random()/2,
                  Math.random()/2,
                  0,
                  1
              )
            }).map(e=>e.toArray()).reduce((a,b)=>a.concat(b),[]),
        ))
        map.add(mesh)
      })
    })
    const animationClip = new THREE.AnimationClip('颗粒动画', time, tracks)
    const action = mixer.clipAction(animationClip)
    action.enabled = true
    action.clampWhenFinished = true
    action.loop = THREE.LoopOnce
    action
        .setEffectiveTimeScale(0.5)
        .play()
    return mixer
  })(new THREE.AnimationMixer(three.scene)))
  // 背景旋转
  ;(()=>{
    const size = 8
    const box = new THREE.BoxGeometry(size,size,0)
    const material = new THREE.MeshBasicMaterial({
      map:xuanzhuanTexture,
      transparent:true
    })
    const mesh = new THREE.Mesh(box,[
        null,
        null,
        null,
        null,
        material,
    ])
    mesh.name = 'xuanzhuan.texture'
    map.add(mesh)
    // three.transformControls().attach(mesh).setMode("rotate")
    mesh.position.set(-0.00007450501024886719,0.00045044476074280007,-0.0029288844308935223)
  })()
  // map.add(kelu)
  window.map = map
}
const play = async (keyName:string)=>{

}
const animation = (three: BaseThreeClass)=>{
  if(binjie){
    binjie.offset.x += 0.01
  }
  mixers.forEach(mixer=>{
    if(mixer){
      mixer.update(three.clockTime)
    }
  })
  if(activeMixer.value){
    activeMixer.value.update(three.clockTime)
  }
  const xuanzhuan = three.scene.getObjectByName('xuanzhuan.texture')
  if(xuanzhuan){
    xuanzhuan.rotation.z += 0.001;
  }
}
</script>

<style scoped lang="less">
.ai-digital-people {
  .base-three{
    background-color: #0e1d33;
  }
}
</style>
