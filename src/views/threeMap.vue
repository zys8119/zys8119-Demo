<template>
    <div class="threeMap">
        <BaseThree
            @load="load"
            @gui="gui"
            :gui="true"
            :plane-geometry="true"
            v-model:initialization-data="data"
        ></BaseThree>
    </div>
</template>

<script setup lang="ts" title="threeMap立体地图" content="基于threejs的3d立体地图实现">
import BaseThree, {BaseThreeClass, InitializationData} from "../components/BaseThree"
import mapJson from "@/src/assets/map.json"
import {geoMercator} from "d3-geo"
import font from "@/src/assets/miaozidongmanti-regular.ttf?url"
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js'

console.log(mapJson)
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
    mode: 'translate'
})
const projection = geoMercator()
    .center([
        121.539698,
        29.874452
    ])
    // .scale(80)
    .translate([0, 0]);

const modes = ref(['translate', 'scale', 'rotate'])
const {a, s, d} = useMagicKeys()
const load = async (three: BaseThreeClass) => {
    const {scene, THREE, planeGeometryMesh} = three;
    await three.downloadFonts(font, 'font');
    // planeGeometryMesh.visible = false
    ;(planeGeometryMesh.material as THREE.MeshLambertMaterial).setValues({
        map:null,
        color:'#002854'
    })
    const map = new THREE.Object3D()
    await Promise.all(mapJson.features.map(async (elem, key) => {
        const province: any = new THREE.Object3D()
        const coordinates = elem.geometry.coordinates
        coordinates.forEach((multiPolygon) => {
            multiPolygon.forEach(polygon => {
                // 这里的坐标要做2次使用：1次用来构建模型，1次用来构建轮廓线
                const lineMaterial = new THREE.LineBasicMaterial({
                    color: 0xffffff,
                    linewidth:200,
                    // linecap: 'round', //ignored by WebGLRenderer
                    // linejoin:  'round' //ig
                })
                const linGeometry = new THREE.BufferGeometry()
                const points = [];
                const shape = new THREE.Shape()
                for (let i = 0; i < polygon.length; i++) {
                    const [x, y] = projection(polygon[i])
                    if (i === 0) {
                        shape.moveTo(x, -y)
                    }
                    shape.lineTo(x, -y);
                    points.push(new THREE.Vector3(x, -y, 1.01))
                }
                linGeometry.setFromPoints(points)

                const line = new THREE.Line(linGeometry, lineMaterial)
                province.add(line)

                const geometry = new THREE.ExtrudeGeometry(shape, {
                    bevelEnabled: false,
                    // depth:1
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
            const [x, y] = projection(elem.properties.centroid)
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
        const mesh = new THREE.Mesh(box, material)
        mesh.castShadow = true
        const [x, y] = projection(elem.properties.centroid)
        const [cx, cy] = [x-0.2, -y]
        mesh.position.set(cx, cy, 1)
        province.add(mesh)
        const box2Size = 0.1
        const box2 = new THREE.Mesh(
            new THREE.BoxGeometry(box2Size,box2Size,1),
            new THREE.MeshLambertMaterial({color:"#f00"})
        )
        box2.castShadow = true
        box2.receiveShadow = true
        box2.position.set(cx+0.2, cy+0.2, box2Size/2+1)
        province.add(box2)

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
    planeGeometryMesh.rotation.set(0,0,0)
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
</script>

<style scoped lang="less">

</style>
