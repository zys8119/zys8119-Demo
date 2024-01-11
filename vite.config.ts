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
// vite.config.ts
import ReactivityTransform from '@vue-macros/reactivity-transform/vite'
import UnoCss from 'unocss/vite'
import VineBrowser from './vite/VineBrowser'
import axios from 'axios'
// curl 'https://szrd.nbyz.cn/' \
//   -H 'Cache-Control: no-cache' \
//   -H 'Connection: keep-alive' \
//   -H 'Cookie: acw_tc=2f624a4e17044354094257589e34f3ecfb46e7fdaa8394fdf2edc26bb8909c' \
//   -H 'Pragma: no-cache' \
//   -H 'Referer: https://szrd.nbyz.cn/' \
//   -H 'Sec-Fetch-Dest: empty' \
//   -H 'Sec-Fetch-Mode: cors' \
//   -H 'Sec-Fetch-Site: same-origin' \
//   -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36' \
//   -H 'accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7' \
//   -H 'accept-language: zh-CN,zh;q=0.9,en;q=0.8' \
//   -H 'sec-ch-ua: "Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"' \
//   -H 'sec-ch-ua-mobile: ?0' \
//   -H 'sec-ch-ua-platform: "macOS"' \
//   -H 'upgrade-insecure-requests: 1' \
//   --compressed
(async ()=>{
    console.log(await axios({
        url:'https://szrd.nbyz.cn/',
        "headers": {
            "cache-control": "no-cache",
            "Connection": "keep-alive",
            "cookie": "acw_tc=2f624a4e17044354094257589e34f3ecfb46e7fdaa8394fdf2edc26bb8909c",
            "pragma": "no-cache",
            "Referer": "https://szrd.nbyz.cn/",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin",
            "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
            "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
            "accept-language": "zh-CN,zh;q=0.9,en;q=0.8",
            "sec-ch-ua": "\"Not_A Brand\";v=\"8\", \"Chromium\";v=\"120\", \"Google Chrome\";v=\"120\"",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "\"macOS\"",
            // "Host": "szrd.nbyz.cn",
            "upgrade-insecure-requests": "1",
        },
        // "referrerPolicy": "strict-origin-when-cross-origin",
        // "body": null,
        "method": "GET"
    }).catch(err=>{
        console.log(err.message)
    }))
})()

export default defineConfig({
    base:"",
    build:{
        outDir:'docs',
    },
    plugins:[
        UnoCss(),
        Vue(),
        vueJsx(),
        ReactivityTransform(),
        Components({
            resolvers:[
                NaiveUiResolver()
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
        }),
        VineBrowser()
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
            }
        }
    },
    optimizeDeps:{
        exclude:['pdfjs-dist']
    }
})
