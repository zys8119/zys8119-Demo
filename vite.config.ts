import {defineConfig, Plugin} from "vite"
import AutoImport from 'unplugin-auto-import/vite'
import Vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import AutoRoute from 'vitejs-plugin-vue-route-auto-import'
import AutoApi from 'vitejs-plugin-api-auto-import'
import AutoConfig from 'vitejs-plugin-config-auto-import/vite'
// vite.config.ts
import ReactivityTransform from '@vue-macros/reactivity-transform/vite'
import UnoCss from 'unocss/vite'

export default defineConfig({
    base:"",
    build:{
        outDir:'docs'
    },
    plugins:[
        UnoCss(),
        Vue(),
        vueJsx(),
        ReactivityTransform(),
        AutoImport({
            include:[
                /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
                /\.vue$/, /\.vue\?vue/, // .vue
                /\.md$/, // .md
            ],
            imports:[
                "vue",
                "vue-router",
                "@vueuse/core"
            ],
            dts:'auto-import.d.ts'
            // resolvers:[
            //     [
            //         (name)=>{
            //             if(name === '$apis'){
            //                 return {
            //                     name,
            //                     from:'@/api'
            //                 }
            //             }
            //         }
            //     ]
            // ],
        }),
        AutoApi({
            dir:"src/api"
        }),
        AutoRoute({
            views:'src/views',
            routes_extend:"./routes_extend.ts"
        }),
        AutoConfig({
            globalActive:'b',
            globalData:{
                'a':{
                    a:"asda",
                    b:'asda'
                },
                "b":"bbbb"
            }
        })
    ],
    resolve:{
        alias:{
            "@":process.cwd()
        }
    },
    server:{
        port:8899,
        strictPort:true
    },
})
