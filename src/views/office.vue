<template>
    <div class="office w-100% h-100% absolute">
        <div id="placeholder"></div>
    </div>
</template>

<script setup lang="ts">
import {useStyleTag} from "@vueuse/core";

const {load} = useScriptTag("http://127.0.0.1/ds-vpath/web-apps/apps/api/documents/api.js")
onMounted(async ()=>{
    await load()
    const config = {
        "document": {
            "fileType": "docx",
            "key": "test4",
            "title": "Example Document Title.docx",
            // "url": "http://192.168.110.140:3000/%E5%8D%95%E4%BD%8D%E8%87%AA%E6%9F%A5(1).pdf"
            "url": "http://192.168.110.140:3000/1.docx"
        },
        "documentType": "word",
        "editorConfig": {
            mode:'edit',
            lang:'zh',
            "customization": {
                "zoom": -2
            },
           uiTheme:{
                id:"theme-light",
               type:'light'
           },
            "plugins": {
                "autostart": [
                    "asc.{0616AE85-5DBE-4B6B-A0A9-455C4F1503AD}",
                    "asc.{FFE1F462-1EA2-4391-990D-4CC84940B754}",
                ],
                "pluginsData": [
                    "http://192.168.110.140:3000/config.json",
                ]
            },
        },
    }
    const res = await fetch({
        url:"http://localhost:81/getToken",
        method:'POST',
        headers:{
            "Content-Type":'application/json'
        },
        body:JSON.stringify(config)
    }).then(res=>res.json())
    const docEditor = new DocsAPI.DocEditor("placeholder", res.data);
})
</script>

<style scoped lang="less">
.office {

}
</style>
