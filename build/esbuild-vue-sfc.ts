/**
 * vue文件编译代码
 */
import {context} from "esbuild"
import vue from 'unplugin-vue/esbuild'
(async ()=>{
    try {
        const ctx = await context({
            entryPoints:[
                "./aa.vue"
            ],
            define:{
                "__VUE_OPTIONS_API__":`''`,
                "__VUE_PROD_DEVTOOLS__":`''`,
            },
            loader: {
                '.ts': 'ts',
            },
            plugins:[
                vue(),
            ],
            bundle:true,
            outdir:'./dist',
            format:'esm',
            external:['vue',"vue-router"]
        })
        await ctx.watch()
    }catch (e){
        console.log(e)
    }
})()
