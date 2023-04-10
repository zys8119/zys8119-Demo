<template>
    <div class="threeMap">
        <BaseThree
            @load="load"
            @animation="animation"
            @gui="gui"
            :gui="false"
            v-model:initialization-data="data"
        ></BaseThree>
    </div>
</template>

<script setup lang="ts" title="threeMap立体地图" content="基于threejs的3d立体地图实现">
import BaseThree, {BaseThreeClass} from "../components/BaseThree"
import mapJson from "@/src/assets/map.json"
import {geoMercator} from "d3-geo"
import font from "@/src/assets/miaozidongmanti-regular.ttf?url"
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js'
import { Object3D, BoxGeometry, Mesh, MeshLambertMaterial} from 'three'
import onEvent from "three-onevent-esm"
import animationFun from "winframe"
const data = ref({
    box: {
        position: {
            x: 0,
            y: 0,
            z: 0
        },
        size: {
            width: 300,
            height: 10,
            depth: 30,
        },
        rotate: {
            rx: 0,
            ry: 0,
            rz: 0,
        },
    },
    mode: 'translate',
    camera: {
    }
})
const projectionScale = ref(200)
const projection = geoMercator()
    // 地图中心位置
    .center([
        121.539698,
        29.874452,
    ])
    // 地图缩放
    .scale(projectionScale.value)
    .translate([0, 0]);

const modes = ref(['translate', 'scale', 'rotate'])
const {a, s, d} = useMagicKeys()
// 地图立体深度
const depth = ref(0.3)
// 添加柱子
const pillars = ref([])
const addPillar = (THREE, province, x, y, z, size = 0.1,depth = 1, color = "#f00", offset = 0, delayTime = 0,runningTime = 1000)=>{
    const e = {
        // 高度
        depth,
        // 坐标位置
        x, y, z,
        // 集合
        province,
        // 正方形大小
        box2Size:size,
        // 颜射
        color,
        // 投影
        castShadow:true,
        receiveShadow:true,
        // 动画耗时
        runningTime,
        // 动画延时
        delayTime,
        // z轴位置位移
        offset,
    }
    const ms = new Mesh(
        new BoxGeometry(e.box2Size, e.box2Size, e.depth),
        new MeshLambertMaterial({color:e.color})
    )
    ms.castShadow = e.castShadow
    ms.receiveShadow = e.receiveShadow
    ms.position.set(e.x, e.y, 0)
    ms.scale.set(1, 1, 0)
    ms.on('hover', e=>{
        console.log(e)
    })
    e.province.add(ms)
    pillars.value.push({
        ...e,
        ms
    })
}
const load = async (three: BaseThreeClass) => {
    const {scene, THREE, planeGeometryMesh, camera} = three;
    new onEvent(scene, camera)
    pillars.value = []
    await three.downloadFonts(font, 'font');
    const map = new THREE.Object3D()
    await Promise.all(mapJson.features.map(async (elem, key) => {
        const province: any = new THREE.Object3D()
        const coordinates = elem.geometry.coordinates
        coordinates.forEach((multiPolygon) => {
            if(typeof multiPolygon[0][0] === 'number'){
                multiPolygon = [multiPolygon as any]
            }
            multiPolygon.forEach(polygon => {
                // 这里的坐标要做2次使用：1次用来构建模型，1次用来构建轮廓线
                const lineMaterial = new THREE.LineBasicMaterial({
                    color: 0xffffff,
                    // linewidth:200,
                    // linecap: 'round', //ignored by WebGLRenderer
                    // linejoin:  'round' //ig
                })
                const linGeometry = new THREE.BufferGeometry()
                const points = [];
                const shape = new THREE.Shape()
                for (let i = 0; i < polygon.length; i++) {
                    const [x, y] = projection(polygon[i] as any)
                    if (i === 0) {
                        shape.moveTo(x, -y)
                    }
                    shape.lineTo(x, -y);
                    points.push(new THREE.Vector3(x, -y, depth.value+0.002))
                }
                linGeometry.setFromPoints(points)
                // 边界线
                const line = new THREE.Line(linGeometry, lineMaterial)
                province.add(line)
                // 土地
                const geometry = new THREE.ExtrudeGeometry(shape, {
                    bevelEnabled: false,
                    depth:depth.value
                })
                const material = new THREE.MeshLambertMaterial({
                    color: '#005cb4',
                })
                const mesh = new THREE.Mesh(geometry, material)
                mesh.castShadow = true
                mesh.receiveShadow = true
                province.add(mesh)
            })
        })
        // 将geojson的properties放到模型中，后面会用到
        province.properties = elem.properties
        if (elem.properties.centroid) {
            const [x, y] = projection(elem.properties.centroid as any)
            province.properties._centroid = [x, y]
        }
        if(key == 0){
            // province.position.set(0, 0, 0.1)
            // province.children[1].material.setValues({
            //     color:'#0083ff'
            // })
        }
        const box = new TextGeometry(elem.properties.name, {
            font: (three.fonts.get('font') as any).font,
            size: 0.1,
            height: 0.001,
            curveSegments: 12,
            // bevelEnabled: true,
            // bevelThickness: 10,
            // bevelSize: 0,
            // bevelSegments: 5
        })
        const material = new THREE.MeshPhongMaterial({
            flatShading: true,
            color: 0xffffff,
        })
        // 文字
        const mesh = new THREE.Mesh(box, material)
        mesh.castShadow = true
        if(elem.properties.center){
            const [x, y] = projection(elem.properties.center as any)
            const [cx, cy] = [x-0.2, -y]
            mesh.position.set(cx, cy, depth.value+0.01)
            province.add(mesh)
            // 添加柱子
            addPillar(THREE, province, cx+0.2, cy+0.2, depth.value, 0.1, 1, "#f00", 0, 0, 1000)
            addPillar(THREE, province, cx+0.2, cy+0.2, depth.value, 0.1, 0.1, "#ff0", 1, 1000, 1000)
        }

        map.add(province)
    }))
    const scale = 100
    map.scale.set(scale, scale, scale)
    map.rotation.set(0, 0, 0)
    map.position.set(0, 100, 0)
    map.castShadow = true
    map.receiveShadow = true
    const tr = three.transformControls()
    watchEffect(() => {
        if (a.value) {
            tr.setMode(modes.value[0] as any)
        } else if (s.value) {
            tr.setMode(modes.value[1] as any)
        } else if (d.value) {
            tr.setMode(modes.value[2] as any)
        } else {
            tr.setMode(data.value.mode as any)
        }
    });
    // tr.attach(map)
    scene.rotation.set(-1.5, 0, 0)
    scene.add(map)
}
const gui = (d: typeof data.value, three: BaseThreeClass) => {
    const {THREE} = three
    const cameraFolder = three.gui.addFolder('配置参数')
    cameraFolder.add(d, 'mode', modes.value)
    return () => {
    }
}
// 柱子动画
watchEffect(async ()=>{
    pillars.value.forEach((e:{
        x:number
        y:number
        z:number
        depth:number
        province:Object3D
        box2Size:number
        color:any
        castShadow:boolean
        receiveShadow:boolean
        ms:Mesh
        runningTime:number
        delayTime:number
        offset:number
    })=>{
        const fn = (p)=>{
            e.ms.position.z = e.depth/2*p+depth.value+e.offset
            e.ms.scale.z = p
        }
        if(e.runningTime && e.runningTime > 0){
            setTimeout(()=>{
                animationFun(fn, e.runningTime)
            }, e.delayTime)
        }else {
            animationFun(fn, e.runningTime)
        }
    })
})
const animation = async (three: BaseThreeClass) => {
    const {scene, THREE, planeGeometryMesh, camera} = three;

}
</script>

<style scoped lang="less">

</style>
