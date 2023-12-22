<template>
  <div class="nodejscan w-100% h-100% absolute">
    <img class="w-160px h-160px m-t-30px" :src="`./images/nodejsscan.png`" alt="">
    <div class="text-30px font-bold m-y-30px">nodeJsScan</div>
    <div class="flex justify-center items-center">
      <div class="w-50%">
        <input placeholder="git" class="repourl h-47px !p-0 !p-x-15px" type="text">
        <button class="clone h-47px">Clone</button>
      </div>
    </div>
    <div class="m-t-80px flex justify-center items-center">
      <div @click="showDir()" class="flex justify-center items-center flex-col">
        <span class="fileUpload btn-lg ">UPLOAD & SCAN</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import JSZip from "jszip"
import axios from "axios"

const readFile = async (
    dir:FileSystemDirectoryHandle,
    path:string,
    callback?:(path:string, fileName:string, file:File)=> void,
    excludeReg:(RegExp|((filePath:string)=> boolean)) = /\/(node_modules|\.(idea|git|vscode|husky))\//
)=>{
  const entries = dir.entries?.()
  let isDone = false
  while (!isDone){
    const {done, value} = await entries.next()
    isDone = done
    if(value){
      const [key, file] = value
      const file_path = path+'/'+key
      if(typeof excludeReg === 'function' && excludeReg(file_path) ||  Object.prototype.toString.call(excludeReg) === '[object RegExp]' &&  !excludeReg.test(file_path)){
        if(file.kind === 'directory'){
          await readFile(file, file_path,callback,excludeReg)
        }else {
          await callback?.(file_path, key, await file.getFile() as File)
        }
      }
    }
  }
}
const showDir = async (dir?:FileSystemDirectoryHandle,path:string = '.')=>{
  const zip = new JSZip();
  const fileMap = {}
  await readFile(await window.showDirectoryPicker(), path, async (path, fileName, file)=>{
    fileMap[path] = {
      path,
      fileName,
      file
    }
    zip.file(path, await file.arrayBuffer());
  },p=>/\/(node_modules|\.(idea|git|vscode|husky))\//.test(p) && /(\.(html|js)$)/.test(p))
  const content = await zip.generateAsync({type:"blob"})
  const pageJsonFile = fileMap['./package.json']?.file
  const formData = new FormData()
  formData.append('package', pageJsonFile)
  formData.append('dist', new File([content],'dist.zip', {type: content.type}))
  const {data} = await axios({
    url:'http://127.0.0.1:81/nodeJsScan',
    method: 'POST',
    data: formData,
  })
  console.log(data)
}
</script>

<style scoped lang="less">
.nodejscan {
  height: 100%;
  background: linear-gradient(to left, #ca1ee9, #3668f4f5);
  color: #fff;
  text-align: center;
  text-shadow: 0 1px 3px rgba(0,0,0,.5);
  .btn-lg {
    padding: 10px 20px;
    border: 1px solid #fff;
    font-weight: bold;
  }

  .fileUpload {
    position: relative;
    overflow: hidden;
    margin: 10px;
    background-color: #ffff;
    color: #5870b3f5;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    border-radius: 8px;
  }
  .repourl {
    background: rgba(0, 0, 0, 0.4);
    width: 50%;
    border: none;
    resize: none;
    -webkit-border-top-left-radius: 8px;
    -webkit-border-bottom-left-radius: 8px;
    -moz-border-radius-topleft: 8px;
    -moz-border-radius-bottomleft: 8px;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    padding: 15px;
    box-shadow: 0px 1px 0px rgba(225, 225, 225, 0.2), 0px 1px 0px rgba(0, 0, 0, 0.3) inset;
    outline: none;
    color: white;
    font-weight: bold;
    float: left;
    text-shadow: 1px 1px 0px black;
    transition: all .3s ease-in-out;
    width: 70%;
    transition: all .3s ease-in-out;
    -moz-transition: all .3s ease-in-out;
    -webkit-transition: all .3s ease-in-out;
  }
  .clone {
    float: left;
    -webkit-border-top-right-radius: 8px;
    -webkit-border-bottom-right-radius: 8px;
    -moz-border-radius-topright: 8px;
    -moz-border-radius-bottomright: 8px;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    border: none;
    background: #606c88;
    background: -moz-linear-gradient(top, #606c88 0%, #3f4c6b 100%);
    background: -webkit-linear-gradient(top, #606c88 0%, #3f4c6b 100%);
    background: -o-linear-gradient(top, #606c88 0%, #3f4c6b 100%);
    background: -ms-linear-gradient(top, #606c88 0%, #3f4c6b 100%);
    background: linear-gradient(to bottom, #606c88 0%, #3f4c6b 100%);
    padding: 15px;
    box-shadow: 0px 1px 0px rgba(225, 225, 225, 0.2), 0px 1px 0px rgba(0, 0, 0, 0.4) inset;
    outline: none;
    width: 20%;
    text-transform: uppercase;
    color: white;
    letter-spacing: 2px;
    text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.6);
    cursor: pointer;
  }
}
</style>
