<template>
  <div class="large-screen-map-animation abs-content bg-#0e1018">
    <div class="abs-content" ref="elRef">
      <BaseThree
          @load="load"
          @animation="animation"
          ref="threeRef"
          v-model="myThree"
      ></BaseThree>
    </div>
    <div
        class="pointer-events-none abs-f z-1 b-3 b-t-solid b-#cead3e bg-#2b2615cc p-16px text-#fff transition-all transition-delay-75 min-w-200px backdrop-blur-sm"
        :style="styleCss"
        v-if="selectMapInfo.name"
    >
      <slot :data="selectMapInfo">
        <div class="text-20px bold m-b-16px">
          <template v-if="selectMapInfo.areaBlockName">
            ({{ selectMapInfo.areaBlockName }})</template
          >{{ selectMapInfo.name }}
        </div>
        <div class="flex flex-col gap-15px">
          <div class="flex justify-between items-center">
            <div class="text-#fffc">会议进行数：</div>
            <div>350</div>
          </div>
          <div class="flex justify-between items-center">
            <div class="text-#fffc">会议进行数：</div>
            <div>350asdas</div>
          </div>
        </div>
      </slot>
    </div>
    <div
        v-if="drillDownLevel > 0"
        @click.prevent.stop="backPrev"
        class="abs-end-bottom z-2 bg-#0003 cursor-pointer hover:bg-#101117 select-none text-#fff p-15px"
    >
      返回上一级
    </div>
    <div
        v-else
        @click.prevent.stop="switchQuKuai"
        class="abs-end-bottom z-2 right-30px cursor-pointer"
    >
      <img
          :style="{
                    filter: quKuaiShow ? 'drop-shadow(2px 4px 6px #f00)' : null
                }"
          class="w-148px h-148px"
          :src="'./images/earth/qukuai.png'"
      />
    </div>
  </div>
</template>

<script setup lang="ts" title="大屏地图动效">
import BaseThree, { BaseThreeClass } from '@/src/components/BaseThree';
import {
  getProject,
  ISheet,
  ISheetObject,
  types,
  UnknownShorthandCompoundProps
} from '@theatre/core';
import studio from '@theatre/studio';
import color from 'color';
import { geoMercator } from 'd3-geo';
import * as THREE from 'three';
import { BufferGeometry } from 'three';
import onEvent from 'three-onevent-esm';
import { Object3D } from 'three/src/core/Object3D';
import { Material } from 'three/src/materials/Material';
import theatreProjectStateJson from '../../public/images/earth/theatre-project-state.json';
import { get, merge, debounce, cloneDeep, set } from 'lodash';
const props = withDefaults(
    defineProps<{
      earthLevel: number;
      getData: () => Promise<any>;
      dataHandleInfeFilter: (info: any, data: Array<Record<any, any>>) => any;
    }>(),
    {
      earthLevel: 0,
      getData: () =>
          Promise.resolve({
            linesData: [],
            markingPointsData: []
          }),
      dataHandleInfeFilter: (info: any) => info
    }
);
const emits = defineEmits<{
  (e: 'update:earthLevel', value: number): void;
}>();
const { earthLevel } = useVModels(props, emits);
const elRef = ref();
const threeRef = ref();
const myThree = ref<BaseThreeClass>() as Ref<BaseThreeClass>;
const { x: mouseX, y: mouseY } = useMouse();
const styleCss = computed(() => {
  return {
    left: `${mouseX.value}px`,
    top: `${mouseY.value}px`
  };
});
studio.extend(
    {
      id: 'hello-world-extension',
      toolbars: {
        global(set: any) {
          set([
            {
              type: 'Icon',
              title: '清除本地缓存',
              svgSource: 'clear',
              onClick: () => localStorage.clear()
            }
          ]);
        }
      } as any
    },
    {
      __experimental_reconfigure: true
    }
);
studio.initialize();
studio.ui.hide();
const mapJson = ref<any>({});
/**
 * 地区分布
 */
const regionalDistributionMap = ref({
  东北: { color: '#f2c0de', data: ['黑龙江省', '吉林省', '辽宁省'] },
  华北: {
    color: '#9ade9f',
    data: ['北京市', '天津市', '河北省', '山西省', '内蒙古自治区']
  },
  西北: {
    color: '#f6df9b',
    data: [
      '陕西省',
      '甘肃省',
      '青海省',
      '宁夏回族自治区',
      '新疆维吾尔自治区'
    ]
  },
  华中: { color: '#f6aa5f', data: ['河南省', '湖北省', '湖南省'] },
  华东: {
    color: '#f6ff9a',
    data: [
      '山东省',
      '江苏省',
      '安徽省',
      '上海市',
      '浙江省',
      '江西省',
      '福建省',
      '台湾省'
    ]
  },
  华南: {
    color: '#bdcaf1',
    data: ['重庆市', '贵州省', '四川省', '云南省', '西藏自治区']
  },
  西南: {
    color: '#ddfdd6',
    data: [
      '广东省',
      '香港特别行政区',
      '澳门特别行政区',
      '海南省',
      '广西壮族自治区'
    ]
  }
});
const quKuaiShow = ref(false);
const switchQuKuai = async () => {
  quKuaiShow.value = !quKuaiShow.value;
};
const selectMap = ref<any>('浙江省');
/**
 * 飞线
 */
const lines = ref([]);
/**
 * 标记点
 */
const markingPoints = ref([]);

const selectMapInfo = computed<any>(() => {
  const pointInfo = markingPoints.value.find(
      (e: any) => e.name === selectMap.value
  );
  const features = get(mapJson.value, 'features', []);
  const areaBlockName = quKuaiShow.value
      ? get(
          Object.entries(regionalDistributionMap.value).find((e) =>
              e[1].data.includes(selectMap.value)
          ),
          '[0]'
      )
      : null;
  const regionalDistributionMapData = get(
      regionalDistributionMap.value,
      `${areaBlockName as any}.data`,
      []
  );
  const info = merge(
      get(
          features.find(
              (e: any) => get(e, 'properties.name') === selectMap.value
          ),
          'properties',
          {}
      ),
      pointInfo,
      {
        isAreaBlock: quKuaiShow.value,
        areaBlockName
      }
  );
  return (
      props.dataHandleInfeFilter?.(
          info,
          markingPoints.value.filter((e: any) =>
              regionalDistributionMapData.includes(e.name)
          )
      ) || {}
  );
});
const getRgba = (_color: string) => ({
  r: color(_color).object().r / 255,
  g: color(_color).object().g / 255,
  b: color(_color).object().b / 255,
  a: color(_color).alpha() / 255
});

/**
 * 切换自板块
 * @param mapName
 */
const url = ref('./images/earth/china.json');
const isRenderBaseThree = ref(true);
const drillDownLevel = ref(0);
const drillDownLevelCache = ref<any>([]);
const areaInfoCache = ref<any>([]);
const areaInfoCurr = computed(
    () => areaInfoCache.value[areaInfoCache.value.length - 1]
);
watchEffect(() => {
  earthLevel.value = drillDownLevel.value;
});
let myOnEvent:any = null
const isResetScene = ref(false)
const resetScene = async ()=>{
  isResetScene.value = true
  if(myOnEvent){
    myOnEvent.removeAll()
  }
  const {scene} = myThree.value
  const childs = scene.children.filter((e)=>/CameraHelper/.test(e.type) || /map-china/.test(e.name))
  childs.forEach((child:any)=>{
    scene.remove(child)
  })
  await load(myThree.value)
}
const switchSections = debounce(async () => {
  if (drillDownLevel.value >= 2) {
    return window.$message.warning('已达到最大层级');
  }
  if (selectMapInfo.value.adcode) {
    drillDownLevel.value += 1;
    drillDownLevelCache.value.push(url.value);
    areaInfoCache.value.push(cloneDeep(selectMapInfo.value));
    url.value = `https://geo.datav.aliyun.com/areas_v3/bound/${selectMapInfo.value.adcode}_full.json`;
    isRenderBaseThree.value = false;
    await nextTick();
    isRenderBaseThree.value = true;
  }
  await resetScene()
});
const backPrev = debounce(async () => {
  url.value = drillDownLevelCache.value.pop();
  areaInfoCache.value.pop();
  drillDownLevel.value -= 1;
  isRenderBaseThree.value = false;
  await nextTick();
  isRenderBaseThree.value = true;
  await resetScene()
});

const load = async (three: BaseThreeClass) => {
  // 获取数据
  const data = await props.getData();
  lines.value = data.linesData;
  markingPoints.value = data.markingPointsData;

  ///todo ===============动画数据配置开始
  localStorage.removeItem('theatre-0.4.persistent'); // 清除动画缓存
  const theatreProjectState = cloneDeep(theatreProjectStateJson);
  const capsuleRadius = 1; // 设置半径，根据需要调整
  const isFirstPlay = ref(false);
  const sheetsByIdMap: any = {
    省份: {
      data: markingPoints.value.map((e: any) => `${e.name}-城市数据`),
      getValue() {
        return {
          trackData: {
            T5fFAJ1r90: {
              type: 'BasicKeyframedTrack',
              __debugName: '浙江省-城市数据:["time"]',
              keyframes: [
                {
                  id: 'oWNx6nkMDw',
                  position: 0,
                  connectedRight: true,
                  handles: [0.5, 1, 0.42, 0],
                  type: 'bezier',
                  value: 0
                },
                {
                  id: '6OOfNGZSA1',
                  position: 2,
                  connectedRight: true,
                  handles: [0.58, 1, 0.5, 0],
                  type: 'bezier',
                  value: 1
                }
              ]
            }
          },
          trackIdByPropPath: {
            '["time"]': 'T5fFAJ1r90'
          }
        };
      }
    },
    飞线: {
      data: lines.value,
      getKey(b: string, k: number) {
        return `飞线-${k + 1}`;
      },
      getValue() {
        return {
          trackData: {
            WcXOY6YTWl: {
              type: 'BasicKeyframedTrack',
              __debugName: '飞线-1:["points"]',
              keyframes: [
                {
                  id: 'Xd62KIWFfX',
                  position: 0,
                  connectedRight: true,
                  handles: [0.5, 1, 0.5, 0],
                  type: 'bezier',
                  value: 0
                },
                {
                  id: 'px8c1jAHbj',
                  position: 2,
                  connectedRight: true,
                  handles: [0.5, 1, 0.5, 0],
                  type: 'bezier',
                  value: 100
                }
              ]
            }
          },
          trackIdByPropPath: {
            '["points"]': 'WcXOY6YTWl'
          }
        };
      }
    }
  };
  Object.keys(sheetsByIdMap).forEach((name: any) => {
    (theatreProjectState as any).sheetsById[name].sequence.tracksByObject =
        sheetsByIdMap[name]?.data.reduce((a: any, b: any, key: any) => {
          a[sheetsByIdMap[name]?.getKey?.(b, key, name) || b] =
              sheetsByIdMap[name]?.getValue?.call?.(
                  sheetsByIdMap[name],
                  b,
                  key,
                  name
              );
          return a;
        }, {});
  });

  // 下钻动画时间跨度
  const keyframes_time = ref(2);
  const sheetPlayMap = ref<any>(
      Object.fromEntries(
          Object.entries({
            浙江省: {
              x: 135.374,
              y: 221.349,
              z: 167.702
            },
            湖州市: {
              x: 130.617,
              y: 218.781,
              z: 156.745
            },
            杭州市: {
              x: 133.724,
              y: 220.799,
              z: 167.452
            },
            衢州市: {
              x: 131.574,
              y: 213.099,
              z: 131.574
            },
            嘉兴市: {
              x: 129.624,
              y: 222.099,
              z: 154.602
            },
            绍兴市: {
              x: 134.174,
              y: 219.799,
              z: 163.852
            },
            金华市: {
              x: 134.674,
              y: 218.199,
              z: 166.502
            },
            丽水市: {
              x: 134.774,
              y: 213.199,
              z: 164.852
            },
            温州市: {
              x: 138.074,
              y: 211.149,
              z: 161.052
            },
            台州市: {
              x: 138.574,
              y: 214.449,
              z: 155.752
            },
            舟山市: {
              x: 137.624,
              y: 219.299,
              z: 151.752
            },
            宁波市: {
              x: 131.3,
              y: 211.9,
              z: 144.95
            },
            北京市: {
              x: 90.7,
              y: 250.2,
              z: 141.45
            },
            新疆维吾尔自治区: {
              x: 30.65,
              y: 272.85,
              z: 274.75
            }
          }).map((e: any, k: number) => {
            e[1].play = async () => {
              await sheet.sequence.play({
                iterationCount: 1,
                range: [
                  2 + k * keyframes_time.value,
                  2 + (k + 1) * keyframes_time.value
                ]
              });
            };
            return e;
          })
      )
  );
  const keyframesMap = [
    {
      key: 'x',
      path: 'sheetsById.地图.sequence.tracksByObject.全局配置.trackData.l6X_xX1QC1.keyframes'
    },
    {
      key: 'y',
      path: 'sheetsById.地图.sequence.tracksByObject.全局配置.trackData.4yTuFWiktu.keyframes'
    },
    {
      key: 'z',
      path: 'sheetsById.地图.sequence.tracksByObject.全局配置.trackData.humIKbgW7m.keyframes'
    }
  ];
  const keyframes: any = keyframesMap.reduce((a: any, b: any) => {
    a[b.key] = get(theatreProjectState, b.path, []).slice(0, 2);
    return a;
  }, {});
  const keyframesKeys = keyframesMap.map((e) => e.key);
  const keyframes_id = ref(0);
  const keyframes_position = ref(4);
  let sheetPlayMapCount = 0;
  for (const [, v] of Object.entries(sheetPlayMap.value)) {
    sheetPlayMapCount += 1;
    keyframesKeys.forEach((k) => {
      keyframes_id.value += 1;
      keyframes[k].push({
        id: `MIy6AfPGjM_${keyframes_id.value}`,
        position: keyframes_position.value,
        connectedRight: true,
        handles: [0.5, 1, 0.5, 0],
        type: 'bezier',
        value: (v as any)[k]
      });
    });
    // 下钻动画时间跨度
    keyframes_position.value += keyframes_time.value;
  }
  keyframesMap.forEach((e) => {
    set(theatreProjectState, e.path, keyframes[e.key]);
  });
  set(
      theatreProjectState,
      'sheetsById.地图.sequence.length',
      10 + sheetPlayMapCount * keyframes_time.value
  );

  const project = getProject('大屏地图动效', {
    state: theatreProjectState,
    assets: {
      baseUrl: './images/earth'
    }
  });
  const autoRotateSheet = project.sheet('全局自动旋转');
  const sheet = project.sheet('地图');
  const starrySkySheet = project.sheet('星空背景');
  const provinceSheet = project.sheet('省份');
  const flywireSheet = project.sheet('飞线');
  ///todo ===============动画数据配置结束
  mapJson.value = await fetch(url.value).then((res) => res.json());
  const cityDataMeshCanvas = document.createElement('canvas');
  const cityDataMeshCanvas2 = document.createElement('canvas');
  three.controls.enablePan = false;
  three.controls.enableZoom = false;
  three.controls.enableRotate = false;
  if(!myOnEvent){
    myOnEvent = new onEvent(three.scene, three.camera, elRef.value);
  }
  await nextTick();
  const { THREE, scene } = three;

  const textures = {
    earth: await three.downloadImagesTexture(
        './images/earth/earth.jpg',
        'earth'
    ),
    china: await three.downloadImagesTexture(
        './images/earth/china.jpg',
        'china'
    ),
    jianbian: await three.downloadImagesTexture(
        './images/earth/jianbian.jpg',
        'jianbian'
    ),
    starryBackground: await three.downloadImagesTexture(
        './images/earth/starry-background.png',
        'starryBackground'
    ),
    earth2: await three.downloadImagesTexture(
        './images/earth/earth2.jpg',
        'earth2'
    ),

    earth2Gaodu: await three.downloadImagesTexture(
        './images/earth/earth2-gaodu.jpg',
        'earth2-gaodu'
    ),

    earth2Heibai: await three.downloadImagesTexture(
        './images/earth/earth2-heibai.jpg',
        'earth2-heibai'
    ),
    earth2Line: await three.downloadImagesTexture(
        './images/earth/earth2-line.jpg',
        'earth2-line'
    ),
    earth2Light: await three.downloadImagesTexture(
        './images/earth/earth2-light.jpg',
        'earth2-light'
    ),
    tm: await three.downloadImagesTexture('./images/earth/tm.png', 'tm'),
    earth2Wangge: await three.downloadImagesTexture(
        './images/earth/earth2-wangge.png',
        'earth2-wangge.png'
    ),
    earth2StarrySky: await three.downloadImagesTexture(
        './images/earth/earth2-starry-sky.jpg',
        'earth2-starry-sky.jpg'
    )
  };
  function createOBj<V extends UnknownShorthandCompoundProps>(
      key: string,
      config: {
        _geometry?: BufferGeometry;
        _material?: Material;
        _mesh?: Object3D;
        scene?: Object3D;
        sheet?: ISheet;
        geometry?(): Promise<BufferGeometry> | BufferGeometry;
        material?(): Promise<Material> | Material;
        mesh?(
            geometry: BufferGeometry,
            material: Material
        ): Promise<Object3D> | Object3D;
        beforeCreate?(data: {
          mesh: Object3D;
          material: Material;
          geometry: BufferGeometry;
        }): void;
        objectConfig?(data: {
          mesh: Object3D;
          material: Material;
          geometry: BufferGeometry;
        }): {
          values?: V;
          change?(
              values: any,
              data: {
                mesh: Object3D;
                material?: Material;
                geometry?: BufferGeometry;
              }
          ): void;
        };
      }
  ): Promise<{
    mesh: Object3D;
    material: Material;
    geometry: BufferGeometry;
    object: ISheetObject<V>;
  }>;
  // eslint-disable-next-line no-redeclare
  async function createOBj(key: string, config: any) {
    const geometry =
        config._geometry ||
        config._mesh?.geometry ||
        (await config.geometry?.());
    const material =
        config._material ||
        config._mesh?.material ||
        (await config.material?.());
    const mesh = config._mesh || (await config.mesh?.(geometry, material));
    const _scene: any = config.scene || scene;
    if (_scene && mesh) {
      _scene.add(mesh);
    }
    const exprotData: {
      mesh: Object3D;
      material: Material;
      geometry: BufferGeometry;
    } = {
      mesh,
      material,
      geometry
    };
    await config.beforeCreate?.(exprotData);
    const objectConfig = (await config.objectConfig?.(exprotData)) || {};
    const object = (config.sheet || sheet).object(
        key,
        objectConfig.values || {},
        {
          reconfigure: true
        }
    );
    object.onValuesChange((values: any) => {
      objectConfig.change?.(values, exprotData);
    });
    return {
      ...exprotData,
      object
    };
  }
  const envMaps = (function () {
    const cubeTextureLoader = new THREE.CubeTextureLoader();
    const path = './images/earth/';
    const format = '.jpg';
    const urls = [
      path + 'px' + format,
      path + 'nx' + format,
      path + 'py' + format,
      path + 'ny' + format,
      path + 'pz' + format,
      path + 'nz' + format
    ];

    const reflectionCube = cubeTextureLoader.load(urls);

    const refractionCube = cubeTextureLoader.load(urls);
    refractionCube.mapping = THREE.CubeRefractionMapping;

    return {
      none: null,
      reflection: reflectionCube
      // refraction: refractionCube
    };
  })();

  scene.environment = envMaps.reflection;

  await createOBj('星空背景', {
    sheet: starrySkySheet,
    material(): any {
      return ((texture: THREE.Texture) => {
        texture.wrapS = THREE.RepeatWrapping;
        texture.wrapT = THREE.RepeatWrapping;
        texture.repeat.set(10, 10);
        return texture;
      })(textures.earth2StarrySky.clone());
    },
    mesh(geometry, material): any {
      scene.background = material as unknown as THREE.Texture;
    },
    objectConfig() {
      return {
        values: {
          offset: types.compound({
            x: types.number(0, {
              nudgeMultiplier: 0.0001,
              range: [0, 1]
            }),
            y: types.number(0, {
              nudgeMultiplier: 0.0001,
              range: [0, 1]
            })
          }),
          rotation: types.number(0, { nudgeMultiplier: 0.00001 })
        },
        change(values, data: any) {
          data.material.offset.set(values.offset.x, values.offset.y);
          data.material.rotation = values.rotation;
        }
      };
    }
  });
  // 关闭灯光帮助
  three.lightHelper.visible = false;
  // 关闭相机帮助
  three.cameraHelper.visible = false;
  if (three.light) three.light.visible = false;
  // 全局配置
  await createOBj('全局配置', {
    objectConfig() {
      return {
        values: {
          zoom: types.number(291.2, { nudgeMultiplier: 0.05 }),
          camera: types.compound(
              {
                fov: types.number(50, { nudgeMultiplier: 0.05 }),
                x: types.number(343.8, { nudgeMultiplier: 0.05 }),
                y: types.number(379.15, { nudgeMultiplier: 0.05 }),
                z: types.number(397.4, { nudgeMultiplier: 0.05 })
              },
              { label: '相机' }
          ),
          scene: types.compound(
              {
                x: types.number(-0.84, { nudgeMultiplier: 0.005 }),
                y: types.number(2.215, { nudgeMultiplier: 0.005 }),
                z: types.number(0.3, { nudgeMultiplier: 0.005 })
              },
              { label: '场景旋转' }
          )
        },
        change(data) {
          scene.scale.set(data.zoom, data.zoom, data.zoom);
          three.camera.position.set(
              data.camera.x,
              data.camera.y,
              data.camera.z
          );
          three.scene.rotation.set(
              data.scene.x,
              data.scene.y,
              data.scene.z
          );
          three.camera.fov = data.camera.fov;
        }
      };
    }
  });
  await createOBj('全局自动旋转', {
    sheet: autoRotateSheet,
    objectConfig() {
      return {
        values: {
          x: types.number(0, { nudgeMultiplier: 0.0001 }),
          y: types.number(0, { nudgeMultiplier: 0.0001 }),
          z: types.number(0, { nudgeMultiplier: 0.0001 })
        },
        change(values) {
          three.scene.rotation.set(values.x, values.y, values.z);
        }
      };
    }
  });
  if(!isResetScene.value){
    await createOBj('平行灯光', {
      mesh() {
        const light = new THREE.DirectionalLight(0xff0000, 0);
        return light as any;
      },
      objectConfig() {
        return {
          values: {
            x: types.number(-79.325, { nudgeMultiplier: 0.1 }),
            y: types.number(858.94, { nudgeMultiplier: 0.1 }),
            z: types.number(-769.3, { nudgeMultiplier: 0.1 }),
            intensity: types.number(6.396, { nudgeMultiplier: 0.001 }),
            color: types.rgba(getRgba('#fff'))
          },
          change(
              values,
              data: {
                mesh: THREE.HemisphereLight;
              }
          ) {
            data.mesh.position.set(values.x, values.y, values.z);
            data.mesh.color.set(
                color(values.color.toString()).rgbNumber()
            );
            data.mesh.intensity = values.intensity;
          }
        };
      }
    });
    await createOBj('平行光1', {
      mesh() {
        const light = new THREE.DirectionalLight(
            new THREE.Color('#006da8'),
            1
        );
        return light as any;
      },
      objectConfig() {
        return {
          values: {
            color: types.rgba(getRgba('#00195a')),
            x: types.number(-303.55, { nudgeMultiplier: 0.05 }),
            y: types.number(366.8, { nudgeMultiplier: 0.05 }),
            z: types.number(-75.55, { nudgeMultiplier: 0.05 }),
            // width: types.number(697.67, { nudgeMultiplier: 0.05 }),
            // height: types.number(80.55, { nudgeMultiplier: 0.05 }),
            intensity: types.number(14.65, { nudgeMultiplier: 0.05 })
          },
          change(
              values,
              data: {
                mesh: THREE.RectAreaLight;
              }
          ) {
            // data.mesh.width = values.width;
            // data.mesh.height = values.height;
            data.mesh.position.set(values.x, values.y, values.z);
            data.mesh.intensity = values.intensity;
            data.mesh.color.set(
                color(values.color.toString()).rgbNumber()
            );
          }
        };
      }
    });
    // 地球
    const { mesh: earthMesh } = await createOBj('地球', {
      geometry() {
        return new THREE.CapsuleGeometry(1, 0, 50, 50);
      },
      async material() {
        return new THREE.MeshLambertMaterial({
          lightMap: await (async (texture: THREE.Texture) => {
            texture.matrixAutoUpdate = false;
            texture.needsUpdate = true;
            texture.wrapS = THREE.RepeatWrapping;
            return texture;
          })(textures.earth2Light.clone()),
          map: await (async (texture: THREE.Texture) => {
            texture.matrixAutoUpdate = false;
            texture.needsUpdate = true;
            texture.wrapS = THREE.RepeatWrapping;
            return texture;
          })(textures.earth2.clone()),
          normalMap: await (async (texture: THREE.Texture) => {
            texture.matrixAutoUpdate = false;
            texture.needsUpdate = true;
            texture.wrapS = THREE.RepeatWrapping;
            return texture;
          })(textures.earth2Gaodu.clone())
        });
      },
      mesh(geometry, material) {
        const box = new THREE.Mesh(geometry, material);
        box.castShadow = true;
        box.receiveShadow = true;
        return box;
      },
      objectConfig() {
        const mapMatrix = types.compound({
          n11: types.number(1.041, { nudgeMultiplier: 0.0001 }),
          n12: types.number(-0.026, { nudgeMultiplier: 0.0001 }),
          n13: types.number(0.501, { nudgeMultiplier: 0.0001 }),
          n21: types.number(0.033, { nudgeMultiplier: 0.0001 }),
          n22: types.number(0.946, { nudgeMultiplier: 0.0001 }),
          n23: types.number(0.018, { nudgeMultiplier: 0.0001 }),
          n31: types.number(0, { nudgeMultiplier: 0.0001 }),
          n32: types.number(0, { nudgeMultiplier: 0.0001 }),
          n33: types.number(0, { nudgeMultiplier: 0.0001 })
        });
        return {
          values: {
            rotation: types.compound({
              x: types.number(-0.364, { nudgeMultiplier: 0.001 }),
              y: types.number(2.755, { nudgeMultiplier: 0.001 }),
              z: types.number(-0.149, { nudgeMultiplier: 0.001 })
            }),
            color: types.rgba(getRgba('#fff')),
            map: mapMatrix,
            lightMap: mapMatrix,
            lightMapIntensity: types.number(1, {
              nudgeMultiplier: 0.001
            }),
            normalMap: mapMatrix,
            normalScale: types.number(-6, {
              nudgeMultiplier: 0.001
            }),
            scale: types.number(1, {
              nudgeMultiplier: 0.001
            })
          },
          change(
              values,
              data: {
                mesh: Object3D;
                material: THREE.MeshLambertMaterial & any;
                geometry: THREE.BoxGeometry;
              }
          ) {
            data.mesh.scale.set(
                values.scale,
                values.scale,
                values.scale
            );
            data.material.setValues({
              color: color(values.color.toString()).rgbNumber()
            });
            data.material.lightMap.matrix = new THREE.Matrix3().set(
                values.lightMap.n11,
                values.lightMap.n12,
                values.lightMap.n13,
                values.lightMap.n21,
                values.lightMap.n22,
                values.lightMap.n23,
                values.lightMap.n31,
                values.lightMap.n32,
                values.lightMap.n33
            );
            data.material.lightMapIntensity = values.lightMapIntensity;
            data.material.map.matrix = new THREE.Matrix3().set(
                values.map.n11,
                values.map.n12,
                values.map.n13,
                values.map.n21,
                values.map.n22,
                values.map.n23,
                values.map.n31,
                values.map.n32,
                values.map.n33
            );
            data.material.normalScale = new THREE.Vector2(
                values.normalScale,
                values.normalScale
            );
            data.material.normalMap.matrix = new THREE.Matrix3().set(
                values.normalMap.n11,
                values.normalMap.n12,
                values.normalMap.n13,
                values.normalMap.n21,
                values.normalMap.n22,
                values.normalMap.n23,
                values.normalMap.n31,
                values.normalMap.n32,
                values.normalMap.n33
            );
            data.mesh.rotation.set(
                values.rotation.x,
                values.rotation.y,
                values.rotation.z
            );
          }
        };
      }
    });
    await createOBj('世界地图线稿', {
      async material() {
        return new THREE.MeshLambertMaterial({
          alphaMap: await (async (texture: THREE.Texture) => {
            texture.matrixAutoUpdate = false;
            texture.needsUpdate = true;
            texture.wrapS = THREE.RepeatWrapping;
            return texture;
          })(textures.earth2Line.clone()),
          transparent: true
        });
      },
      mesh(geometry, material) {
        const mesh = earthMesh.clone() as any;
        mesh.material = material;
        return mesh;
      },
      objectConfig() {
        return {
          values: {
            alphaMap: types.compound({
              n11: types.number(1.098, { nudgeMultiplier: 0.0001 }),
              n12: types.number(-0.014, { nudgeMultiplier: 0.0001 }),
              n13: types.number(0.475, { nudgeMultiplier: 0.0001 }),
              n21: types.number(0.016, { nudgeMultiplier: 0.0001 }),
              n22: types.number(0.965, { nudgeMultiplier: 0.0001 }),
              n23: types.number(0.013, { nudgeMultiplier: 0.0001 }),
              n31: types.number(0, { nudgeMultiplier: 0.0001 }),
              n32: types.number(0, { nudgeMultiplier: 0.0001 }),
              n33: types.number(0, { nudgeMultiplier: 0.0001 })
            })
          },
          change(
              values,
              data: {
                material: THREE.MeshLambertMaterial & any;
                mesh: THREE.Mesh;
              }
          ) {
            data.material.alphaMap.matrix = new THREE.Matrix3().set(
                values.alphaMap.n11,
                values.alphaMap.n12,
                values.alphaMap.n13,
                values.alphaMap.n21,
                values.alphaMap.n22,
                values.alphaMap.n23,
                values.alphaMap.n31,
                values.alphaMap.n32,
                values.alphaMap.n33
            );
          }
        };
      }
    });
    await createOBj('世界地图网格', {
      async material() {
        return new THREE.MeshLambertMaterial({
          color: new THREE.Color('#3161a7'),
          alphaMap: await (async (texture: THREE.Texture) => {
            texture.matrixAutoUpdate = false;
            texture.needsUpdate = true;
            texture.wrapS = THREE.RepeatWrapping;
            return texture;
          })(textures.earth2Wangge.clone()),
          transparent: true
        });
      },
      mesh(geometry, material) {
        const mesh = earthMesh.clone() as any;
        mesh.material = material;
        return mesh;
      },
      objectConfig() {
        return {
          values: {
            alphaMap: types.compound({
              n11: types.number(1.098, { nudgeMultiplier: 0.0001 }),
              n12: types.number(-0.014, { nudgeMultiplier: 0.0001 }),
              n13: types.number(0.475, { nudgeMultiplier: 0.0001 }),
              n21: types.number(0.016, { nudgeMultiplier: 0.0001 }),
              n22: types.number(0.965, { nudgeMultiplier: 0.0001 }),
              n23: types.number(0.013, { nudgeMultiplier: 0.0001 }),
              n31: types.number(0, { nudgeMultiplier: 0.0001 }),
              n32: types.number(0, { nudgeMultiplier: 0.0001 }),
              n33: types.number(0, { nudgeMultiplier: 0.0001 })
            })
          },
          change(
              values,
              data: {
                material: THREE.MeshLambertMaterial & any;
                mesh: THREE.Mesh;
              }
          ) {
            data.material.alphaMap.matrix = new THREE.Matrix3().set(
                values.alphaMap.n11,
                values.alphaMap.n12,
                values.alphaMap.n13,
                values.alphaMap.n21,
                values.alphaMap.n22,
                values.alphaMap.n23,
                values.alphaMap.n31,
                values.alphaMap.n32,
                values.alphaMap.n33
            );
          }
        };
      }
    });
  }

  await createOBj('中国地图', {
    geometry() {
      return new THREE.CapsuleGeometry(1, 0, 50, 50);
    },
    material() {
      return new THREE.MeshLambertMaterial({
        transparent: true
      });
    },
    async mesh() {
      const mapDepth = 0.4;
      const mapGroup: any = new THREE.Group();
      mapGroup.name = 'map-china'
      const projection = geoMercator()
          // 地图中心位置
          .center([121.539698, 29.874452])
          // 地图缩放
          .scale(0.35)
          .translate([0, 0]);
      await Promise.all(
          mapJson.value.features.map(async (elem: any) => {
            const province: any = new THREE.Group();
            const coordinatesGroup: any = new THREE.Group();
            const coordinates = elem.geometry.coordinates;
            coordinates.forEach((multiPolygon: any) => {
              if (typeof multiPolygon[0][0] === 'number') {
                multiPolygon = [multiPolygon as any];
              }
              multiPolygon.forEach((polygon: any) => {
                // 这里的坐标要做2次使用：1次用来构建模型，1次用来构建轮廓线
                const linGeometry = new THREE.BufferGeometry();
                const points = [];
                const shape = new THREE.Shape();
                for (let i = 0; i < polygon.length; i++) {
                  const [x, y] = projection(
                      polygon[i] as any
                  ) as number[];
                  if (i === 0) {
                    shape.moveTo(x, -y);
                  }
                  shape.lineTo(x, -y);
                  points.push(
                      new THREE.Vector3(x, -y, mapDepth + 0.002)
                  );
                }
                linGeometry.setFromPoints(points);
                // 边界线
                const line = new THREE.Line(linGeometry);
                coordinatesGroup.add(line);
                // 土地
                const geometry = new THREE.ExtrudeGeometry(shape, {
                  bevelEnabled: false,
                  bevelSegments: 1,
                  depth: mapDepth
                });
                const mesh = new THREE.Mesh(geometry);
                mesh.name = `map-bankia-${elem.properties.name}`;
                coordinatesGroup.add(mesh);
              });
              province.add(coordinatesGroup);
            });
            mapGroup.add(province);
          })
      );
      const posZ = mapDepth + 0.005;
      await Promise.all(
          markingPoints.value.map(async (e: any) => {
            const [mpx, mpy] = projection(e.pos) as number[];
            const z = mapDepth;
            await createOBj(`${e.name}-城市数据`, {
              scene: mapGroup,
              sheet: provinceSheet,
              async material() {
                return new THREE.MeshBasicMaterial({
                  // color: new THREE.Color('#f0f'),
                  side: THREE.DoubleSide,
                  transparent: true,
                  map: textures.tm.clone()
                });
              },
              async geometry() {
                return new THREE.CircleGeometry(0.006, 32);
              },
              async mesh(geometry, material) {
                const mesh = new THREE.Mesh(geometry, material);
                mesh.name = 'city-data-mesh';
                return mesh;
              },
              objectConfig() {
                return {
                  values: {
                    radius: types.number(1, {
                      nudgeMultiplier: 0.001
                    }),
                    x: types.number(mpx, {
                      nudgeMultiplier: 0.001
                    }),
                    y: types.number(-mpy, {
                      nudgeMultiplier: 0.001
                    }),
                    z: types.number(z, {
                      nudgeMultiplier: 0.001
                    }),
                    scale: types.number(e.select ? 20 : 3.7, {
                      nudgeMultiplier: 0.001
                    }),
                    time: types.number(0, {
                      nudgeMultiplier: 0.001
                    }),
                    n11: types.number(1, {
                      nudgeMultiplier: 0.0001
                    }),
                    n12: types.number(0, {
                      nudgeMultiplier: 0.0001
                    }),
                    n13: types.number(0.5, {
                      nudgeMultiplier: 0.0001
                    }),
                    n21: types.number(0, {
                      nudgeMultiplier: 0.0001
                    }),
                    n22: types.number(1, {
                      nudgeMultiplier: 0.0001
                    }),
                    n23: types.number(0, {
                      nudgeMultiplier: 0.0001
                    }),
                    n31: types.number(0, {
                      nudgeMultiplier: 0.0001
                    }),
                    n32: types.number(0, {
                      nudgeMultiplier: 0.0001
                    }),
                    n33: types.number(0, {
                      nudgeMultiplier: 0.0001
                    })
                  },
                  change(
                      values,
                      data: { mesh: any; material: any }
                  ) {
                    const x = values.x;
                    const y = values.y;
                    const length = Math.sqrt(
                        x * x + y * y + z * z
                    );
                    data.mesh.position.set(
                        (x / length) * (capsuleRadius + 0.01),
                        (y / length) * (capsuleRadius + 0.01),
                        (z / length) * (capsuleRadius + 0.01)
                    );
                    // 下钻动态调整大小
                    const scale: number =
                        {
                          1: e.select ? 5 : 2.7,
                          2: e.select ? 2 : 0.7
                        }[drillDownLevel.value] || values.scale;
                    data.mesh.scale.set(scale, scale, scale);
                    const size = 500;
                    const color = '#fad04a';
                    if (e.select) {
                      data.mesh.material.map = (() => {
                        cityDataMeshCanvas2.width = size;
                        cityDataMeshCanvas2.height = size;
                        const ctx =
                            cityDataMeshCanvas2.getContext(
                                '2d'
                            ) as CanvasRenderingContext2D;
                        const [x, y] = [size / 2, size / 2];
                        ctx.beginPath();
                        ctx.clearRect(0, 0, size, size);
                        ctx.fillStyle = color;
                        ctx.beginPath();
                        ctx.arc(
                            x,
                            y,
                            x * 0.05,
                            0,
                            Math.PI * 2
                        );
                        ctx.closePath();
                        ctx.fill();
                        ctx.fillStyle = '#0000';
                        ctx.strokeStyle = color;
                        ctx.lineWidth = 4;
                        ctx.beginPath();
                        ctx.arc(
                            x,
                            y,
                            x * 0.2,
                            0,
                            Math.PI * 2
                        );
                        ctx.closePath();
                        ctx.stroke();
                        ctx.fill();
                        new Array(9)
                            .fill(0)
                            .forEach((_, i, array) => {
                              ctx.fillStyle = `#0000`;
                              ctx.strokeStyle = `#fff`;
                              ctx.lineWidth = 4;
                              ctx.globalAlpha =
                                  1 -
                                  i / (array.length - 1);
                              ctx.beginPath();
                              ctx.arc(
                                  x,
                                  y,
                                  x * 0.2 +
                                  ((x * 0.8) /
                                      array.length) *
                                  i *
                                  values.time,
                                  0,
                                  Math.PI * 2
                              );
                              ctx.closePath();
                              ctx.stroke();
                              ctx.fill();
                            });
                        const texture =
                            new THREE.CanvasTexture(
                                cityDataMeshCanvas2
                            );
                        texture.wrapS =
                            THREE.RepeatWrapping;
                        texture.matrix = new THREE.Matrix3(
                            values.n11,
                            values.n12,
                            values.n13,
                            values.n21,
                            values.n22,
                            values.n23,
                            values.n31,
                            values.n32,
                            values.n33
                        );
                        return texture;
                      })();
                      return;
                    }
                    data.mesh.material.map = (() => {
                      cityDataMeshCanvas.width = size;
                      cityDataMeshCanvas.height = size;
                      const context =
                          cityDataMeshCanvas.getContext(
                              '2d'
                          ) as CanvasRenderingContext2D;
                      context.clearRect(0, 0, size, size);
                      new Array(3).fill(0).forEach((_, k) => {
                        if (k === 2) {
                          context.save();
                          context.fillStyle = color;
                          context.globalAlpha =
                              1 - values.time;
                          context.arc(
                              size / 2,
                              size / 2,
                              (size / 2) * 0.2 +
                              (size / 2) *
                              0.8 *
                              values.time,
                              0,
                              Math.PI * 2
                          );
                          context.fill();
                          context.restore();
                        }
                        if (k == 1) {
                          context.save();
                          context.fillStyle = color;
                          context.globalAlpha =
                              1 - values.time;
                          context.arc(
                              size / 2,
                              size / 2,
                              (size / 2) * 0.2 +
                              (size / 2) *
                              0.4 *
                              values.time,
                              0,
                              Math.PI * 2
                          );
                          context.fill();
                          context.restore();
                        }
                        if (k === 0) {
                          context.save();
                          context.fillStyle = color;
                          context.globalAlpha = 1;
                          context.arc(
                              size / 2,
                              size / 2,
                              (size / 2) * 0.2,
                              0,
                              Math.PI * 2
                          );
                          context.fill();
                          context.restore();
                        }
                      });
                      const texture = new THREE.CanvasTexture(
                          cityDataMeshCanvas
                      );
                      texture.wrapS = THREE.RepeatWrapping;
                      texture.matrix = new THREE.Matrix3(
                          values.n11,
                          values.n12,
                          values.n13,
                          values.n21,
                          values.n22,
                          values.n23,
                          values.n31,
                          values.n32,
                          values.n33
                      );
                      return texture;
                    })();
                  }
                };
              }
            });
          })
      );
      await Promise.all(
          lines.value.map(async ([start, end]: any, k) => {
            const [sx, sy] = projection(start) as number[];
            const [ex, ey] = projection(end) as number[];
            await createOBj(`飞线-${k + 1}`, {
              sheet: flywireSheet,
              scene: mapGroup,
              geometry() {
                const curve = new THREE.QuadraticBezierCurve3(
                    new THREE.Vector3(ex, -ey, posZ),
                    new THREE.Vector3(
                        (ex + sx) / 2,
                        (-sy + -ey) / 2,
                        posZ + 0.1
                    ),
                    new THREE.Vector3(sx, -sy, posZ)
                );
                return new THREE.BufferGeometry().setFromPoints(
                    curve.getPoints(50)
                );
              },
              material() {
                return new THREE.LineBasicMaterial({
                  color: 0xfdd249,
                  linewidth: 3
                });
              },
              mesh(geometry, material) {
                const line = new THREE.Line(geometry, material);
                line.name = 'line-feixian-mesh';
                return line;
              },
              objectConfig() {
                return {
                  values: {
                    points: types.number(0, {
                      nudgeMultiplier: 0.01
                    })
                  },
                  change(values, data: { mesh: THREE.Mesh }) {
                    const z = 0.405;
                    const curve =
                        new THREE.QuadraticBezierCurve3(
                            new THREE.Vector3(ex, -ey, z),
                            new THREE.Vector3(
                                (ex + sx) / 2,
                                (-sy + -ey) / 2,
                                z + 0.1
                            ),
                            new THREE.Vector3(sx, -sy, z)
                        );
                    const pointsMax = 100;
                    const points = curve.getPoints(pointsMax);
                    const index = Math.ceil(values.points);
                    const currPoints =
                        index <= pointsMax
                            ? points.slice(0, index)
                            : points.slice(index - pointsMax);
                    data.mesh.geometry =
                        new THREE.BufferGeometry().setFromPoints(
                            currPoints.map((e) => {
                              const x = e.x;
                              const y = e.y;
                              const z = e.z;
                              const length = Math.sqrt(
                                  x * x + y * y + z * z
                              );
                              e.set(
                                  (e.x / length) *
                                  capsuleRadius,
                                  (e.y / length) *
                                  capsuleRadius,
                                  (e.z / length) *
                                  capsuleRadius
                              );
                              return e;
                            })
                        );
                  }
                };
              }
            });
          })
      );
      const chinaTexture = ((texture) => {
        texture.matrixAutoUpdate = false;
        texture.needsUpdate = true;
        return texture;
      })(textures.china.clone());
      await createOBj('中国地图贴图', {
        objectConfig() {
          return {
            values: {
              n11: types.number(0.768, {
                nudgeMultiplier: 0.001
              }),
              n12: types.number(0.143, {
                nudgeMultiplier: 0.001
              }),
              n13: types.number(0.599, {
                nudgeMultiplier: 0.001
              }),
              n21: types.number(0, { nudgeMultiplier: 0.001 }),
              n22: types.number(0.94, { nudgeMultiplier: 0.001 }),
              n23: types.number(0.457, {
                nudgeMultiplier: 0.001
              }),
              n31: types.number(0, { nudgeMultiplier: 0.001 }),
              n32: types.number(0, { nudgeMultiplier: 0.001 }),
              n33: types.number(0, { nudgeMultiplier: 0.001 })
            },
            change(values) {
              chinaTexture.matrix = new THREE.Matrix3().set(
                  values.n11,
                  values.n12,
                  values.n13,
                  values.n21,
                  values.n22,
                  values.n23,
                  values.n31,
                  values.n32,
                  values.n33
              );
            }
          };
        }
      });
      const chinaJianbianTexture = ((texture) => {
        texture.matrixAutoUpdate = false;
        texture.needsUpdate = true;
        texture.wrapS = THREE.RepeatWrapping;
        return texture;
      })(textures.jianbian.clone());
      await createOBj('中国地图渐变贴图', {
        objectConfig() {
          return {
            values: {
              n11: types.number(1, { nudgeMultiplier: 0.001 }),
              n12: types.number(0, { nudgeMultiplier: 0.001 }),
              n13: types.number(0.5, { nudgeMultiplier: 0.001 }),
              n21: types.number(0, { nudgeMultiplier: 0.001 }),
              n22: types.number(1, { nudgeMultiplier: 0.001 }),
              n23: types.number(0, { nudgeMultiplier: 0.001 }),
              n31: types.number(0, { nudgeMultiplier: 0.001 }),
              n32: types.number(0, { nudgeMultiplier: 0.001 }),
              n33: types.number(0, { nudgeMultiplier: 0.001 })
            },
            change(values) {
              requestAnimationFrame(function aa() {
                values.n12 += 0.01;
                chinaJianbianTexture.matrix =
                    new THREE.Matrix3().set(
                        values.n11,
                        values.n12,
                        values.n13,
                        values.n21,
                        values.n22,
                        values.n23,
                        values.n31,
                        values.n32,
                        values.n33
                    );
                requestAnimationFrame(aa);
              });
            }
          };
        }
      });
      let currObject3ds: Array<THREE.Mesh> = [];
      await createOBj('地图高亮-板块', {
        objectConfig() {
          return {
            values: {
              x: types.number(0, { nudgeMultiplier: 0.001 }),
              y: types.number(0, { nudgeMultiplier: 0.001 }),
              z: types.number(0.006, { nudgeMultiplier: 0.001 }),
              color: types.rgba(getRgba('#d58e1c'))
            },
            change(values) {
              currObject3ds.forEach((obj) => {
                if (obj) {
                  obj.material =
                      new THREE.MeshLambertMaterial({
                        color: color(
                            values.color.toString()
                        ).rgbNumber()
                      });
                  obj.position.set(
                      values.x,
                      values.y,
                      values.z
                  );
                }
              });
            }
          };
        }
      });

      const traverseMaps: Record<any, Object3D> = {};
      //todo 地图板块样式处理
      const traverse = (isInit?: boolean) => {
        mapGroup.traverse(async (object3d: THREE.Mesh) => {
          const [, mapType, mapName] =
          object3d.name.match(/^(map-bankia)-(.*)/) || [];
          if (mapType === 'map-bankia') {
            traverseMaps[mapName] = object3d;
            const mapBankiaColor = new THREE.Color('#0080ff');
            object3d.material = [
              new THREE.MeshStandardMaterial({
                transparent: true,
                color: mapBankiaColor,
                opacity: 0.4
              }),
              new THREE.MeshStandardMaterial({
                transparent: true,
                map: textures.tm
              })
            ];
            object3d.castShadow = true;
            object3d.receiveShadow = true;
            if (isInit) {
              if (mapName === selectMap.value) {
                const stopWatch = watch(
                    [selectMap, isFirstPlay],
                    () => {
                      if (
                          selectMap.value &&
                          isFirstPlay.value
                      ) {
                        stopWatch();
                      }
                    },
                    { immediate: true }
                );
              }
              object3d.on('click', () => {
                if (quKuaiShow.value) {
                  return;
                }
                switchSections();
              });

              object3d.on('hover', () => {
                selectMap.value = mapName;
                mapGroup.traverse(async (object3d: any) => {
                  const [, mapType, mapName2] =
                  object3d.name.match(
                      /^(map-bankia)-(.*)/
                  ) || [];
                  if (mapType === 'map-bankia') {
                    object3d?.material?.[0]?.setValues({
                      opacity: 0.4
                    });
                    if (quKuaiShow.value) {
                      const qukuaiInfo: any =
                          Object.entries(
                              regionalDistributionMap.value
                          ).find((e) =>
                              e[1].data.includes(mapName)
                          )?.[1];
                      if (
                          qukuaiInfo &&
                          qukuaiInfo.data &&
                          qukuaiInfo.data.includes(
                              mapName2
                          )
                      ) {
                        object3d?.material?.[0]?.setValues(
                            {
                              color: new THREE.Color(
                                  qukuaiInfo.color
                              ),
                              opacity: 1
                            }
                        );
                      } else {
                        object3d?.material?.[0]?.setValues(
                            {
                              color: mapBankiaColor
                            }
                        );
                      }
                    } else {
                      object3d?.material?.[0]?.setValues({
                        color: mapBankiaColor
                      });
                    }
                  }
                });
                (object3d as any)?.material?.[0].setValues({
                  opacity: 1
                });
              });
              watchEffect(() => {
                if (quKuaiShow.value) {
                  mapGroup.traverse(async (object3d: any) => {
                    const [, mapType, mapName] =
                    object3d.name.match(
                        /^(map-bankia)-(.*)/
                    ) || [];
                    if (mapType === 'map-bankia') {
                      const qukuaiInfo: any =
                          Object.entries(
                              regionalDistributionMap.value
                          ).find((e) =>
                              e[1].data.includes(mapName)
                          )?.[1];
                      if (qukuaiInfo) {
                        object3d?.material?.[0]?.setValues(
                            {
                              color: new THREE.Color(
                                  qukuaiInfo.color
                              )
                            }
                        );
                      } else {
                        object3d?.material?.[0]?.setValues(
                            {
                              color: mapBankiaColor
                            }
                        );
                      }
                    }
                  });
                } else {
                  mapGroup.traverse(async (object3d: any) => {
                    object3d?.material?.[0]?.setValues({
                      color: mapBankiaColor
                    });
                  });
                }
              });
            }
          }
          if (
              !/line-feixian-mesh|city-data-mesh/.test(
                  object3d.name
              ) &&
              object3d.geometry
          ) {
            const positionAttribute =
                object3d.geometry.getAttribute('position');
            for (let i = 0; i < positionAttribute.count; i++) {
              const x = positionAttribute.getX(i);
              const y = positionAttribute.getY(i);
              const z = positionAttribute.getZ(i);
              const length = Math.sqrt(x * x + y * y + z * z);
              const _x = (x / length) * capsuleRadius;
              const _y = (y / length) * capsuleRadius;
              const _z = (z / length) * capsuleRadius;
              if (isNaN(_x) || isNaN(_y) || isNaN(_z)) {
                continue;
              }
              positionAttribute.setXYZ(i, _x, _y, _z);
            }
            object3d.geometry.attributes.position.needsUpdate =
                true;
          }
        });
      };

      traverse(true);

      // sheet.sequence.play({range:[4,5]})
      return mapGroup;
    },
    objectConfig() {
      return {
        values: {
          scale: types.number(1.019, { nudgeMultiplier: 0.0001 }),
          rotation: types.compound({
            x: types.number(1.495, { nudgeMultiplier: 0.0001 }),
            y: types.number(4.295, { nudgeMultiplier: 0.0001 }),
            z: types.number(1.946, { nudgeMultiplier: 0.0001 })
          }),
          position: types.compound({
            x: types.number(0, { nudgeMultiplier: 0.0001 }),
            y: types.number(0, { nudgeMultiplier: 0.0001 }),
            z: types.number(0, { nudgeMultiplier: 0.0001 })
          })
        },
        change(
            values,
            data: {
              mesh: Object3D;
              material: THREE.MeshLambertMaterial;
              geometry: BufferGeometry;
            }
        ) {
          data.mesh.position.set(
              values.position.x,
              values.position.y,
              values.position.z
          );
          data.mesh.rotation.set(
              values.rotation.x,
              values.rotation.y,
              values.rotation.z
          );
          data.mesh.scale.set(
              values.scale,
              values.scale,
              values.scale
          );
        }
      };
    }
  });

  await new Promise((resolve) => setTimeout(resolve, 1000));
  await project.ready;
  autoRotateSheet.sequence.position = 0;
  autoRotateSheet.sequence.pause();
  starrySkySheet.sequence.play({
    iterationCount: Infinity,
    range: [0, 135],
    rate: 0.5
  });
  if (sheetPlayMap.value[areaInfoCurr.value?.name]?.play) {
    await sheetPlayMap.value[areaInfoCurr.value?.name]?.play?.();
  } else {
    await sheet.sequence.play({ iterationCount: 1, range: [0, 2] });
  }
  if (drillDownLevel.value === 0) {
    autoRotateSheet.sequence.play({
      iterationCount: Infinity,
      range: [0, 4],
      rate: 0.05
    });
  }
  provinceSheet.sequence.play({ iterationCount: Infinity, range: [0, 2] });
  flywireSheet.sequence.play({ iterationCount: Infinity, range: [0, 2] });
};
const animation = async () => {
  // code
};
</script>

<style scoped lang="less">
.large-screen-map-animation {
  :deep(.base-three) {
    background-color: transparent;
  }
}
</style>
