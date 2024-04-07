<template>
  <div class="latex">
      <input type="file" @change="change"/>
      <div ref="render" class="text-70px"></div>
  </div>
</template>

<script setup lang="ts" title="数学公式">
import axios from "axios"
import "katex/dist/katex.css"
import katex from "katex"
import Tesseract from "tesseract.js"
const render = $ref() as HTMLElement
const change = async (ev:{target:HTMLInputElement})=>{
  const file = ev.target.files[0]
  const fm = new FormData()
  fm.append("file", file)
  const res = await Tesseract.recognize(file,"chi_sim")
  console.log(res)
  const {data}= await axios({
    url:'http://192.168.110.84:3002/predict',
    method:"post",
    data:fm
  })
  console.log(data)
  katex.render(data, render,{})
}

onMounted(async ()=>{
  document.addEventListener('paste', async function(event) {
    const clipboardData = event.clipboardData || window.clipboardData;

    if (!clipboardData) {
      return;
    }

    const items = clipboardData.items;

    if (!items) {
      return;
    }
    // console.log(clipboardData.types, clipboardData.files, items)
    // const str = await Promise.all([...items].map(e=>{
    //   return new Promise(resolve => {
    //     e.getAsString(resolve)
    //   })
    // }))
    // console.log([...items])
    // console.log([...items].map(e=>e.getAsFile()).filter(e=>/image/.test(e?.type)))
    // render.innerHTML = str[1] as string
    await Promise.all([...items].map(e=>e.getAsFile()).filter(e=>/image/.test(e?.type)).map(e=>{
      return change({target:{files:[e]}} as any)
    }))
  });

})
</script>

<style scoped lang="less">
.latex {
  :deep(img){
    width: 50px !important;
    height: 50px !important;
    background-color: #f00;
  }
}
</style>
