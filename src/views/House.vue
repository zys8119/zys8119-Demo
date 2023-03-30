<template>
    <div class="house">
        <BaseThree
            v-model:initialization-data="data"
            @load="load"
            :gui="true"
            :coordinateLine="false"
            @gui="gui"
            @animation="animation"
        >
            <template #panel>{{ data }}</template>
        </BaseThree>
        <img :src="bj" alt="">
    </div>
    ¡
</template>

<script setup lang="ts" title="房子" content="房子3d效果">
import BaseThree, {BaseThreeClass, InitializationData} from "../components/BaseThree"
import bj from "@/src/assets/house/bj2.png"
import bjImg from "@/src/assets/house/a.png"
import font from "@/src/assets/miaozidongmanti-regular.ttf?url"
import yg from "@/src/assets/yg/file.obj?url"
import {BoxGeometry, Mesh, Vector2, Raycaster} from "three"
import {OBJLoader} from "three/examples/jsm/loaders/OBJLoader.js"
import {merge} from "lodash"
import {TransformControls} from "three/addons/controls/TransformControls.js";

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
const raycaster = new Raycaster();
const mouse = new Vector2();
let tr = null
const animation = async (three: BaseThreeClass) => {
    const {THREE, planeGeometryMesh, scene, camera} = three
}
const addBoxConfig = {
    width: 120,
    depth: 5,
    position: [0, 0],
    scale: [1, 1, 1],
    rotation: [0, 0, 0],
}
const changes = []
const addBox = async (three: BaseThreeClass, tr: TransformControls, data?: Partial<typeof addBoxConfig>, text?: string) => {
    const {scene, THREE} = three
    const height = 70
    const y = height / 2
    const {
        width,
        depth,
        position: [x, z, py],
        scale: [sx, sy, sz],
        rotation: [rx, ry, rz],
    } = merge(addBoxConfig, data)
    const m = new THREE.Mesh(
        new THREE.BoxGeometry(width, height, depth),
        new THREE.MeshLambertMaterial({
            // color:"#ffffff",
            map: three.imagesTexture.get('wall')
        })
    )
    const positionY = py || y
    m.position.set(x, positionY, z)
    m.scale.set(sx, sy, sz)
    m.rotation.set(rx, ry, rz)
    m.castShadow = true
    m.receiveShadow = true
    // tr.attach(m)
    // const change = () => {
    //     console.log("box", {
    //         position: m.position,
    //         parameters: m.geometry.parameters,
    //         rotation: m.rotation,
    //         scale: m.scale
    //     })
    // }
    // changes.forEach(c => {
    //     tr.removeEventListener('change', c)
    // })
    // tr.addEventListener('change', change)
    // changes.push(change)
    scene.add(m);
    if (text) {
        const {mesh} = await three.addText(text, 'font')
        mesh.position.set(x, Math.abs((height * sy + 2) / 2 + positionY), z)
        mesh.scale.set(0.01594, 0.01594, 0.01594)
        mesh.rotation.set(-1.5, 0, 0)
        scene.add(mesh)
    }
}
const modes = ref(['translate', 'scale', 'rotate'])
const {a, s, d} = useMagicKeys()
const load = async (three: BaseThreeClass) => {
    const {THREE, planeGeometryMesh, scene, camera, light} = three
    const wall = await three.downloadImagesTexture("https://img0.baidu.com/it/u=1747596165,3790153622&fm=253&fmt=auto&app=138&f=JPG?w=667&h=500", 'wall')
    wall.repeat.set(3, 2)
    wall.wrapS = THREE.RepeatWrapping // 水平重复
    wall.wrapT = THREE.MirroredRepeatWrapping // 垂直镜像重复
    const ground = three.downloadImagesTexture(bjImg, 'addBoxTexture')
    await three.downloadFonts(font, 'font')
    ground.repeat.set(20, 20)
    ground.wrapS = THREE.RepeatWrapping // 水平重复
    ground.wrapT = THREE.MirroredRepeatWrapping // 垂直镜像重复
    // light.position.set(500,500,1000)
    light.intensity = 1
    light.color.set("#ffefd6")
    const light2 = new THREE.PointLight("#ffffff", 0.8)
    light2.position.set(0, 100, 100)
    scene.add(light2)
    // 户型布局底图
    // const map = three.downloadImagesTexture(bj);
    // const sprite = new THREE.Mesh(new THREE.BoxGeometry(300, 1, 300), new THREE.MeshLambertMaterial({
    //     map,
    //     emissive:"#f00",
    //     transparent:true,
    // }));
    // scene.add( sprite );
    const sprite = new THREE.Mesh(new THREE.BoxGeometry(300, 1, 300), new THREE.MeshLambertMaterial({
        map: ground,
    }));
    scene.add(sprite);
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
    // 墙体
    (() => {
        addBox(three, tr, {
            position: [44.39, -147],
            scale: [0.94],
        }, '1')
        addBox(three, tr, {
            position: [98.03, -129.23],
            scale: [0.32],
            rotation: [0, 1.56],
        }, '2')
        addBox(three, tr, {
            position: [-9.112, -76.06],
            scale: [0.262, 1, 1.491],
            rotation: [0, 1.56],
        }, '3')
        addBox(three, tr, {
            position: [-6.75, -63.55],
            scale: [0.2768, 1, 1.491],
            rotation: [0, 0],
        }, '4')
        addBox(three, tr, {
            position: [90.56, -63.55],
            scale: [0.991, 1, 1.491],
            rotation: [0, 0],
        }, '5')
        addBox(three, tr, {
            position: [48.26, -74.505],
            scale: [0.1689, 1, 1.491],
            rotation: [0, 1.56],
        }, '6')
        addBox(three, tr, {
            position: [59.56, -52.07],
            scale: [0.1689, 1, 1.491],
            rotation: [0, 1.56],
        }, '7')
        addBox(three, tr, {
            position: [145.86, -14.966],
            scale: [0.8604, 1, 1.491],
            rotation: [0, 1.56],
        }, '8')
        addBox(three, tr, {
            position: [139.567, -14.966],
            scale: [0.1279, 1, 1.491],
            rotation: [0, 0],
        }, '9')
        addBox(three, tr, {
            position: [73.202, -14.966],
            scale: [0.6837, 1, 1.491],
            rotation: [0, 0],
        }, '10')
        addBox(three, tr, {
            position: [110.912, -12.695],
            scale: [0.098099, 1, 1.491],
            rotation: [0, 1.56],
        }, '11')
        addBox(three, tr, {
            position: [59.151, -4.766],
            scale: [0.223091, 1, 1.491],
            rotation: [0, 1.56],
        }, '12')
        addBox(three, tr, {
            position: [35.846, -4.766],
            scale: [0.1566, 1, 1.491],
            rotation: [0, 1.56],
        }, '13')
        addBox(three, tr, {
            position: [35.846, 89.17919],
            scale: [1.0263, 1, 1.491],
            rotation: [0, 1.56],
        }, '14')
        addBox(three, tr, {
            position: [111.0753, 73.2094],
            scale: [1.0263, 1, 1.491],
            rotation: [0, 1.56],
        }, '15')
        addBox(three, tr, {
            position: [87.0712, 33.708],
            scale: [0.467, 1, 1.491],
            rotation: [0, 0],
        }, '16')
        addBox(three, tr, {
            position: [59.151, 33.09617],
            scale: [0.07228, 1, 1.491],
            rotation: [0, 1.56],
        }, '17')
        addBox(three, tr, {
            position: [53.663, 140.3025],
            scale: [0.20416, 1, 1.491],
            rotation: [0, 1.56],
        }, '18')
        addBox(three, tr, {
            position: [93.745, 140.3025],
            scale: [0.20416, 1, 1.491],
            rotation: [0, 1.56],
        }, '19')
        addBox(three, tr, {
            position: [102.15, 131.4817],
            scale: [0.2016, 1, 1.491],
            rotation: [0, 0],
        }, '20')
        addBox(three, tr, {
            position: [40.621, 131.4817],
            scale: [0.2794, 1, 1.491],
            rotation: [0, 0],
        }, '21')
        addBox(three, tr, {
            position: [-47, 131.4817],
            scale: [0.2164, 1, 1.491],
            rotation: [0, 0],
        }, '22')
        addBox(three, tr, {
            position: [-107.44, 131.4817],
            scale: [0.1973, 1, 1.491],
            rotation: [0, 0],
        }, '23')
        addBox(three, tr, {
            position: [-46.8022, 89.17919],
            scale: [1.0263, 1, 1.491],
            rotation: [0, 1.56],
        }, '24')
        addBox(three, tr, {
            position: [-115.813, 89.17919],
            scale: [1.0263, 1, 1.491],
            rotation: [0, 1.56],
        }, '25')
        addBox(three, tr, {
            position: [-91.9445, 31.39],
            scale: [0.3718, 1, 1.491],
            rotation: [0, 0],
        }, '26')
        addBox(three, tr, {
            position: [-118.8577, 51.203],
            scale: [0.0756, 1, 1.491],
            rotation: [0, 0],
        }, '27')
        addBox(three, tr, {
            position: [-146.7509, 8.384],
            scale: [1.2771, 1, 1.491],
            rotation: [0, 1.56],
        }, '28')
        addBox(three, tr, {
            position: [-83.8454, -31.301],
            scale: [0.6195, 1, 1.491],
            rotation: [0, 1.56],
        }, '29')
        addBox(three, tr, {
            position: [-45.548, -31.301],
            scale: [0.6195, 1, 1.491],
            rotation: [0, 1.56],
        }, '30')
        addBox(three, tr, {
            position: [-110.738, -64.833],
            scale: [0.64934, 1, 1.491],
            rotation: [0, 0],
        }, '31')
        addBox(three, tr, {
            position: [-49.315, -64.833],
            scale: [0.12904, 1, 1.491],
            rotation: [0, 0],
        }, '32')
        addBox(three, tr, {
            position: [-75.8735, 2.14],
            scale: [0.1619, 1, 1.491],
            rotation: [0, 0],
        }, '33')
        addBox(three, tr, {
            position: [-74.1106, 5.48114],
            scale: [0.04225, 1, 1.491],
            rotation: [0, 1.56],
        }, '34')
        addBox(three, tr, {
            position: [-32.7006, -63.7064, 15.9614],
            scale: [0.0635, 0.4445, 3.8021],
            rotation: [0, 1.56],
        }, '35')
        addBox(three, tr, {
            position: [-32.7006, -63.7064, 66.0017],
            scale: [0.0635, 0.1139, 3.8021],
            rotation: [0, 1.56],
        }, '36')
    })()
    // three.controls.addEventListener('change', () => {
    //     console.log("camera", {
    //         position: camera.position,
    //         rotation: camera.rotation,
    //         scale: camera.scale,
    //     })
    // })
    // 衣柜
    const ygm = await new OBJLoader().loadAsync(yg)
    console.log(ygm);
    ygm.scale.set(0.2627, 0.3166, 0.2949)
    ygm.rotation.set(0, Math.PI, 0)
    ygm.position.set(81.7755, 0, 49.12)
    // tr.addEventListener('change', () => {
    //     console.log("ygm", {
    //         position: ygm.position,
    //         rotation: ygm.rotation,
    //         scale: ygm.scale
    //     })
    // })
    tr.attach(ygm)
    scene.add(ygm)
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
:global(body) {
    background: #0d9dd3;
}
</style>
