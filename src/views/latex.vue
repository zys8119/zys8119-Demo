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
function restoreHtmlEscapes(str) {
  // 使用正则表达式替换转义符号
  var map = {
    '&lt;': '<',
    '&gt;': '>',
    '&amp;': '&',
    '&quot;': '"',
    '&#39;': '\''
    // 添加其他需要恢复的转义符号和它们对应的实体字符
  };

  return str.replace(/&[a-zA-Z0-9]+;/g, function (match) {
    return map[match] || match;
  });
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
    console.log(clipboardData.types, clipboardData.files, items)
    for (const type of clipboardData.types){
      switch (type) {
        case "Files":
          for (const file of clipboardData.files){
            if(!file.type){
              console.log(file)
            }
            // await change({target:{files:[e]}})
          }
          break
      }
    }
    await Promise.all([...items].map(e=>e.getAsFile()).filter(e=>/image/.test(e?.type)).map(e=>{
      return change({target:{files:[e]}} as any)
    }))
  });

  //  katex.render('\\cfrac{\\vec{F}f\\lparen{n}\\rparen}{\\sqrt[1]{12}}1',render,{
  //   throwOnError: false,
  //   output:"html",
  // })

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
