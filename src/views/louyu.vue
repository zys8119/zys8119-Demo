<template>
    <div class="test1 abs-content">
        <BaseThree
            @load="load"
            :stats="isDev"
            @animation="animation"
        ></BaseThree>
    </div>
</template>
<script setup lang="ts" title="楼宇">
import BaseThree, { BaseThreeClass } from '@/src/components/BaseThree';
import studio from '@theatre/studio';
import {
    getProject,
    ISheet,
    ISheetObject,
    types,
    UnknownShorthandCompoundProps,
} from '@theatre/core';
import {
    Object3D,
    MaterialParameters,
    BufferGeometry,
    Material,
    Mesh,
} from 'three';
import * as THREE from 'three';
import { merge, omit } from 'lodash';
const isDev = import.meta.env.DEV;
const isShowHelper = isDev;
if (isDev) {
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
                            onClick: () => localStorage.clear(),
                        },
                    ]);
                },
            } as any,
        },
        {
            __experimental_reconfigure: true,
        }
    );
}
studio.initialize();
if (!isDev) {
    studio.ui.hide();
}
interface CreateOBJ<V extends UnknownShorthandCompoundProps> {
    (
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
}
const getColor = (color: string) => {
    return ((color.match(/(\w{2})/g) as any) || [])
        .map((e: any) => parseInt(e, 16) / 255)
        .reduce(
            (e: any, b: any, k: number) => {
                const kk = ['r', 'g', 'b', 'a'][k];
                e[kk] = typeof b === 'number' ? b : kk === 'a' ? 1 : 0;
                return e;
            },
            { a: 1 }
        );
};

const load = async (three: BaseThreeClass) => {
    const stateJson = await fetch('./louyu/theatre-project-state.json').then(
        (res) => res.json()
    );
    const project = getProject('楼宇动效', {
        state: stateJson,
        assets: {
            baseUrl: './images',
        },
    });
    const sheet = project.sheet('楼宇');
    await project.ready;
    sheet.sequence.play({
        iterationCount: Infinity,
        rate: 0.8,
    });
    const { scene, light, lightHelper, cameraHelper, controls } = three as any;
    // 垂直最大可视角度
    controls.maxPolarAngle = Math.PI * 0.49;
    light.visible = false;
    lightHelper.visible = false;
    cameraHelper.visible = false;
    const light2 = new THREE.AmbientLight(0x404040, 10); // 柔和的白光
    light2.position.set(1000, 1000, 1000);
    scene.add(light2);
    const createOBj: CreateOBJ<UnknownShorthandCompoundProps> = async (
        key: string,
        config: any
    ) => {
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
            geometry,
        };
        await config.beforeCreate?.(exprotData);
        const objectConfig = (await config.objectConfig?.(exprotData)) || {};
        const object = config.sheet.object(key, objectConfig.values || {}, {
            reconfigure: true,
        });
        object.onValuesChange((values: any) => {
            objectConfig.change?.(values, exprotData);
        });
        return {
            ...exprotData,
            object,
        };
    };
    const traverse = async (child: Mesh & any, data: any) => {
        await createOBj(`${child.name}${data.name ? ` ：${data.name}` : ''}`, {
            sheet,
            objectConfig() {
                return {
                    values: data.values || {},
                    change(values) {
                        child.material = child.material.clone();
                        if (data.values) {
                            child.material.setValues(
                                merge(
                                    values.glow
                                        ? {
                                              uniforms: {
                                                  viewVector: {
                                                      type: 'v3',
                                                      value: three.camera
                                                          .position,
                                                  },
                                                  glowColor: {
                                                      type: 'c',
                                                      value: new THREE.Color(
                                                          0xff0000
                                                      ),
                                                  }, // 发光颜色
                                                  intensity: {
                                                      type: 'f',
                                                      value: 0,
                                                  }, // 发光强度
                                                  radius: {
                                                      type: 'f',
                                                      value: 0,
                                                  }, // 发光半径
                                              },
                                              vertexShader: `
                                            varying vec3 vNormal;
                                            varying vec3 vPosition;
                                            void main() {
                                            vNormal = normalize(normalMatrix * normal);
                                            vPosition = vec3(modelViewMatrix * vec4(position, 1.0));
                                            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                                            }
                                        `,
                                              fragmentShader: `
                                            uniform vec3 viewVector;
                                            uniform vec3 glowColor;
                                            uniform float intensity;
                                            uniform float radius;

                                            varying vec3 vNormal;
                                            varying vec3 vPosition;

                                            void main() {
                                            // 计算光晕强度：根据视角和法线的夹角计算
                                            float glowFactor = dot(vNormal, normalize(vPosition - viewVector));
                                            
                                            // 控制发光强度和半径
                                            float distanceFactor = pow(radius - glowFactor, 2.0);
                                            float glow = intensity * distanceFactor;

                                            // 设置片元颜色
                                            gl_FragColor = vec4(glowColor, 1.0) * glow;
                                            }
                                        `,
                                              blending: THREE.AdditiveBlending,
                                              side: THREE.DoubleSide,
                                          }
                                        : {},
                                    omit(values, [
                                        'glow',
                                        'uniforms',
                                        'vertexShader',
                                        'fragmentShader',
                                    ]),
                                    values.color
                                        ? {
                                              color: new THREE.Color(
                                                  values.color.toString()
                                              ),
                                          }
                                        : {},
                                    values.emissive
                                        ? {
                                              emissive: new THREE.Color(
                                                  values.emissive.toString()
                                              ),
                                          }
                                        : {}
                                )
                            );
                        } else {
                            child.material.setValues({
                                color: new THREE.Color(data.color || '#f00'),
                            });
                        }
                        data?.change?.(child, data, values);
                    },
                };
            },
        });
        data?.change?.(child, data);
    };
    const map = [
        {
            test: /立方体00(2|4)/,
            name: '贯穿线-紫',
            traverse,
            values: {
                color: types.rgba(getColor('#5d4278')),
                opacity: types.number(1, { nudgeMultiplier: 0.01 }),
                transparent: types.boolean(true),
            } as { [key in keyof MaterialParameters]?: any },
            change(child: Mesh & any) {
                child.material.emissive = child.material.color;
            },
        },
        {
            test: /立方体00(1|3)/,
            name: '贯穿线-青',
            traverse,
            values: {
                color: types.rgba(getColor('#3585a6')),
                opacity: types.number(1, { nudgeMultiplier: 0.01 }),
                transparent: types.boolean(true),
            } as { [key in keyof MaterialParameters]?: any },
            change(child: Mesh & any) {
                child.material.emissive = child.material.color;
            },
        },
        {
            test: /球体/,
            traverse,
            values: {
                color: types.rgba(getColor('#121037')),
                opacity: types.number(1, { nudgeMultiplier: 0.01 }),
                transparent: types.boolean(true),
            } as { [key in keyof MaterialParameters]?: any },
        },
        {
            test: /^Areasbuilding00(1|2|3)$/,
            name: '远处房屋立柱',
            traverse,
            values: {
                color: types.rgba(getColor('#121037')),
                opacity: types.number(0.65, { nudgeMultiplier: 0.01 }),
                transparent: types.boolean(true),
            } as { [key in keyof MaterialParameters]?: any },
        },
        {
            test: /^平面$/,
            name: '平面陆地立柱',
            traverse,
            values: {
                color: types.rgba(getColor('#121037')),
                opacity: types.number(0.39, { nudgeMultiplier: 0.01 }),
                transparent: types.boolean(true),
            } as { [key in keyof MaterialParameters]?: any },
        },
        {
            test: /^平面002$/,
            name: '平面陆地立柱',
            traverse,
            values: {
                color: types.rgba(getColor('#121037')),
                opacity: types.number(0, { nudgeMultiplier: 0.01 }),
                transparent: types.boolean(true),
            } as { [key in keyof MaterialParameters]?: any },
        },
        {
            test: /楼宇/,
            name: '楼宇投射灯',
            traverse,
            values: {
                color: types.rgba(getColor('#000000')),
            },
        },
        {
            test: /^柱子$/,
            name: '房屋柱子',
            traverse,
            values: {
                color: types.rgba(getColor('#85b9c2')),
                opacity: types.number(1, { nudgeMultiplier: 0.01 }),
                transparent: types.boolean(true),
            } as { [key in keyof MaterialParameters]?: any },
            change(child: Mesh & any) {
                child.material.emissive = child.material.color;
            },
        },
        {
            test: /^floors$/,
            name: '房屋楼板',
            traverse,
            values: {
                color: types.rgba(getColor('#0047ff')),
                opacity: types.number(0.25, { nudgeMultiplier: 0.01 }),
                transparent: types.boolean(true),
                glow: types.boolean(true),
            } as { [key in keyof MaterialParameters]?: any },
        },
        {
            test: /^floors001$/,
            name: '房屋底座',
            traverse,
            values: {
                color: types.rgba(getColor('#008cff')),
                opacity: types.number(0.25, { nudgeMultiplier: 0.01 }),
                transparent: types.boolean(true),
            } as { [key in keyof MaterialParameters]?: any },
        },
        {
            test: /^facade$/,
            name: '房屋外网格',
            traverse,
            values: {
                color: types.rgba(getColor('#00a3ff')),
            },
            change(child: Mesh & any) {
                child.material.emissive = child.material.color;
            },
        },
        {
            test: /^facade003$/,
            name: '楼顶',
            traverse,
            values: {
                color: types.rgba(getColor('#00a3ff')),
                opacity: types.number(0.25, { nudgeMultiplier: 0.01 }),
                transparent: types.boolean(true),
            },
        },
        {
            test: /^floors00(5|4|7)$/,
            name: '楼顶2',
            traverse,
            values: {
                color: types.rgba(getColor('#168bf6')),
                emissive: types.rgba(getColor('#015180')),
                opacity: types.number(0.56, { nudgeMultiplier: 0.01 }),
                transparent: types.boolean(true),
            },
        },
        {
            test: /^(floors|facade)006$|^立方体$/,
            name: '玻璃',
            traverse,
            values: {
                color: types.rgba(getColor('#83b9ff')),
                opacity: types.number(0.6, { nudgeMultiplier: 0.01 }),
                transparent: types.boolean(true),
            },
            change(child: Mesh & any) {
                child.material.emissive = child.material.color;
            },
        },
    ];
    const gltf = await three.addGLTFLoader('./louyu/5.glb');
    // 设置模型大小
    scene.add(gltf.scene);
    gltf.scene.traverse((child: Object3D) => {
        child.receiveShadow = true;
        child.castShadow = true;
        const objMap = map.find((e) => e.test.test(child.name));
        if (objMap) {
            try {
                objMap.traverse?.(child, objMap);
            } catch (e) {
                console.log(e);
            }
        }
    });
    await createOBj('楼宇', {
        sheet,
        _mesh: gltf.scene,
        objectConfig() {
            return {
                values: {
                    rotation: {
                        x: types.number(0, { nudgeMultiplier: 0.1 }),
                        y: types.number(20, { nudgeMultiplier: 0.1 }),
                        z: types.number(0, { nudgeMultiplier: 0.1 }),
                    },
                    position: {
                        x: types.number(111.4, { nudgeMultiplier: 0.1 }),
                        y: types.number(-68.6, { nudgeMultiplier: 0.1 }),
                        z: types.number(152.2, { nudgeMultiplier: 0.1 }),
                    },
                    scale: types.number(39.4, { nudgeMultiplier: 0.1 }),
                },
                change({ position, scale, rotation }) {
                    gltf.scene.rotation.set(rotation.x, rotation.y, rotation.z);
                    gltf.scene.position.set(position.x, position.y, position.z);
                    gltf.scene.scale.set(scale, scale, scale);
                },
            };
        },
    });
    await createOBj('灯光', {
        sheet,
        mesh() {
            return new THREE.AmbientLight(0xffffff, 1);
        },
        objectConfig() {
            return {
                values: {
                    position: {
                        x: types.number(239.7, { nudgeMultiplier: 0.1 }),
                        y: types.number(50.4, { nudgeMultiplier: 0.1 }),
                        z: types.number(0, { nudgeMultiplier: 0.1 }),
                    },
                    intensity: types.number(1, { nudgeMultiplier: 0.1 }),
                    color: types.rgba(getColor('#ffffff')),
                },
                change(
                    { position, intensity, color },
                    { mesh }: { mesh: THREE.AmbientLight }
                ) {
                    mesh.color = new THREE.Color(color.toString());
                    mesh.position.set(position.x, position.y, position.z);
                    mesh.intensity = intensity;
                },
            };
        },
    });
    await createOBj('平行光', {
        sheet,
        mesh() {
            return ((light) => {
                if (isShowHelper) {
                    scene.add(new THREE.DirectionalLightHelper(light, 10));
                }
                return light;
            })(new THREE.DirectionalLight(new THREE.Color('#ffffff'), 1));
        },
        objectConfig() {
            return {
                values: {
                    position: {
                        x: types.number(175.52, { nudgeMultiplier: 0.01 }),
                        y: types.number(743.37, { nudgeMultiplier: 0.01 }),
                        z: types.number(-179.98, { nudgeMultiplier: 0.01 }),
                    },
                    intensity: types.number(4.42, { nudgeMultiplier: 0.01 }),
                    color: types.rgba(getColor('#ffffff')),
                },
                change(
                    { position, intensity, color },
                    { mesh }: { mesh: THREE.DirectionalLight }
                ) {
                    mesh.color = new THREE.Color(color.toString());
                    mesh.position.set(position.x, position.y, position.z);
                    mesh.intensity = intensity;
                },
            };
        },
    });
    await createOBj('聚光灯', {
        sheet,
        mesh() {
            return ((light) => {
                if (isShowHelper) {
                    const helper = new THREE.SpotLightHelper(light);
                    helper.name = '聚光灯.helper';
                    scene.add(helper);
                }
                return light;
            })(new THREE.SpotLight(0xffffff));
        },
        objectConfig() {
            return {
                values: {
                    intensity: types.number(0.62, { nudgeMultiplier: 0.01 }),
                    distance: types.number(436.79, { nudgeMultiplier: 0.01 }),
                    angle: types.number(1.571, {
                        nudgeMultiplier: 0.01,
                        range: [0, Math.PI / 2],
                    }),
                    decay: types.number(-10.86, { nudgeMultiplier: 0.01 }),
                    color: types.rgba(getColor('#004fff')),
                    castShadow: types.boolean(true),
                    position: {
                        x: types.number(117.61, { nudgeMultiplier: 0.01 }),
                        y: types.number(304.14, { nudgeMultiplier: 0.01 }),
                        z: types.number(1.39, { nudgeMultiplier: 0.01 }),
                    },
                },
                change(
                    {
                        angle,
                        position,
                        intensity,
                        color,
                        distance,
                        decay,
                        castShadow,
                    },
                    { mesh }: { mesh: THREE.SpotLight }
                ) {
                    mesh.color = new THREE.Color(color.toString());
                    mesh.position.set(position.x, position.y, position.z);
                    mesh.intensity = intensity;
                    mesh.distance = distance;
                    mesh.decay = decay;
                    mesh.castShadow = castShadow;
                    mesh.angle = angle;
                },
            };
        },
    });
};
const animation = async (three: BaseThreeClass) => {
    if (isShowHelper) {
        three.scene.getObjectByName('聚光灯.helper')?.update?.();
    }
};
</script>
<style scoped lang="less">
.test1 {
    &:deep {
        .base-three {
            background: #08001b;
            .base-three__stats {
                top: initial;
                bottom: 0;
            }
        }
    }
}
</style>
