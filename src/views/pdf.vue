<template>
  <div class="apdf.vue">
      <pre>
<!--        {{raw}}-->
      </pre>
  </div>
</template>

<script setup lang="ts">
import raw from "./a.pdf?raw"
import url from "./a.pdf?url"
import axios from "axios"

Object.prototype.arrayBufferSplit = function (search){
  let str = this;
  let index = 0;
  if(str.length <= search.length){
    return [str]
  }
  let item = []
  const results = []
  let offsetIndex =  Infinity
  while (index < str.length){
    let isBool = true
    let searchIndex = 0
    while (searchIndex < search.length){
      if(str[index + searchIndex] !== search[searchIndex]){
        isBool = false
        break
      }
      searchIndex += 1
    }
    if(isBool){
      results.push(item)
      item = []
      offsetIndex = 0
    }else {
      if(offsetIndex >= search.length){
        item.push(str[index])
      }
    }
    index += 1
    offsetIndex += 1
  }
  if(item.length > 0){
    results.push(item)
  }
  return results
}
const getSearch = (input:string)=>{
  return new TextEncoder().encode(input)
}
const split = (buff:any, search:string)=>{
  const arr = buff.arrayBufferSplit(getSearch(search))
  return {
    arr,
    str:arr.map(e=> new TextDecoder().decode(new Uint8Array(e)))
  }
}
onMounted(async ()=>{
  const  {data} = await axios({
    url,
    method:'get',
    responseType:'arraybuffer'
  })
  const buff = new Uint8Array(data)
  const buffArr = split(buff, "\r\n")
  const info:any = {
    objects:{}
  }
  buffArr.str.forEach((s,k)=>{
    if(/%PDF-\d\.\d/i.test(s)){
      info.versions = s.match(/%PDF-(\d\.\d)/)[1]
    }
    if(/\d+\s\d+\sobj/i.test(s)){
      const key = s.match(/\d+\s\d+\sobj/i)[0]
      info.objects[key] = info.objects[key] || {}
      if(/<<.+>>/.test(s)){
        let index = 0
        let start = false
        const result = {}
        let value = ''
        let key2 = ''
        let isKey = false
        let isArr = false
        let arr = []
        while (index < s.length){
          switch (s[index]){
            case '<':
              start = true
              break
            case '>':
              start = false
              break
            case '[':
              isArr = true
              break
            case ']':
              if (isArr && value){
                arr.push(value)
                value = ''
              }
              if(key2){
                result[key2] = arr
              }
              isArr = false
              arr = []
              break
            case '/':
              if(key2 && value){
                result[key2] = value
              }
              key2 = ''
              value = ''
              isKey = true
              break
            case ' ':
              if (isArr && value){
                arr.push(value)
                value = ''
              }else {
                isKey = false
              }
              break
            default:
              if(start){
                if(isKey){
                  key2 += s[index]
                }else {
                  value += s[index]
                }
              }
              break
          }
          index += 1
        }
        if(key2 && value){
          result[key2] = value
        }
        info.objects[key].info = result
      }
    }
    if(k == 2){
      console.log(s)

    }
  })
  console.log(info)
})
</script>

<style scoped lang="less">

</style>
