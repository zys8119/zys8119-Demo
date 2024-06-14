import {defineConfig, Plugin} from "vite"
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite';
import {
    NaiveUiResolver,
} from 'unplugin-vue-components/resolvers';
import Vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import AutoRoute from 'vitejs-plugin-vue-route-auto-import'
import AutoApi from 'vitejs-plugin-api-auto-import'
import AutoConfig from 'vitejs-plugin-config-auto-import/vite'
import VueSql from 'vitejs-plugin-vue-sql'

// vite.config.ts
import ReactivityTransform from '@vue-macros/reactivity-transform/vite'
import UnoCss from 'unocss/vite'
import VineBrowser from './vite/VineBrowser'
export default defineConfig({
    base:"",
    build:{
        outDir:'docs',
    },
    plugins:[
        VueSql({
            file: './src/sql/sql.ts',
        }),
        UnoCss(),
        Vue(),
        vueJsx(),
        ReactivityTransform(),
        Components({
            dts:"components.d.ts",
            resolvers:[
                NaiveUiResolver(),
            ]
        }),
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
            dts:'auto-import.d.ts',
            resolvers:[
                // [
                //     (name)=>{
                //         if(/vueSql/.test(name)) {
                //             console.log(name, 888)
                //         }
                //     }
                // ]
            ],
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
        }),
        VineBrowser(),
    ],
    resolve:{
        alias:{
            "@":process.cwd()
        }
    },
    server:{
        port:8899,
        strictPort:true,
        proxy:{
            '/api':{
                target:'https://szrd.nbyz.cn/',
                // rewrite:path => path.replace(/^\/api/,''),
                // changeOrigin:true,
                // configure(proxy, o){
                //     proxy.on('proxyReq', function(proxyReq, req, res, options) {
                //         proxyReq.setHeader('referer', 'http://szrd.nbyz.cn/');
                //     });
                // }
                // secure:false,
                // headers:{
                //     referer:"http://szrd.nbyz.cn/"
                // },
                // prependPath:false,
            },
            "/v1":{
                target:"http://192.168.110.46:8000"
            },
            "/bpm":{
                target:"http://c2b7a201a62f9c86.zhijiasoft.com",
                rewrite:path => path.replace(/^\/bpm/,''),
            }
        },
    },

    optimizeDeps:{
        exclude:['pdfjs-dist','@zys/wujue-vue/wujie-vue.vue'],
    },
})
