<template>
  <div class="apdf.vue">
      <pre>
<!--        {{raw}}-->
      </pre>
  </div>
</template>

<script setup lang="ts">
import url from "../../../UnityFront/public/a.pdf?url"
import axios from "axios"
import {inflate} from "pako"
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
function pdfHeaderParse (input:string){
  let index = 0
  const getKey = ()=>  {
    index += 1
    return `$${index}`
  }
  function parseString(input:string, result = {}) {
    input = input
        .replace(/(>)(<)|(\))(\()/g,'$1 $2')
        .replace(/(<<|<|\[)/g,' $1')
        .replace(/(>>|>|])/g,'$1 ').trim()
        .replace(/([^<])(<<[^<>]+>>)([^>])/g, (m, $1, $2, $3)=>{
          const key = getKey()
          const {input} = parseString($2, result)
          result[key] = input
          return $1+key+$3
        })
        .replace(/([^<])(<[^<>]+>)([^>])/g, (m, $1, $2, $3)=>{
          const key = getKey()
          result[key] = $2
          return $1+key+$3
        })
        .replace(/\[[^\[\]]+]/g, m=>{
          const key = getKey()
          result[key] = m
          return key
        })
        .replace(/([^(])(\([^()]+\))([^)])/g, (m, $1, $2, $3)=>{
          const key = getKey()
          result[key] = $2
          return $1+key+$3
        })
    if(/[^<]<<[^<>]+>>[^>]/.test(input)){
      input = parseString(input, result).input
    }
    return {
      result,
      input,
    }
  }
  const setValue = (val:any)=>{
    if(typeof val === 'string'){
      return val.replace(/^(<|\()([^<()>]*)(\)|>)$/g, '$2')
    }
    return val
  }
  const isArray = input=> /^\s*\[.+]\s*$/.test(input)
  const isObject = input=> /^\s*<<|>>\s*$/.test(input)
  function parseStringToObject({input, result}:{
    input:string
    result:Record<any, string>
  }, data:any = {}){
    if(isObject(input)){
      (input.match(/\/[^/<>]+/g) || []).forEach((e:string)=>{
        let [_,key,value] = e.match(/^\/([^\s\/]+)(.*)/) || []
        value = value ||''
        value = value.trim?.()
        value = result[value] || value
        if(/\$/.test(value) || isArray(value) || isObject(input)){
          value = parseStringToObject({
            input:value as string,
            result
          }) as any
        }
        data[key] = setValue(value)
      })
    }else
    if(isArray(input)){
      data = input.match(/[^\[\]|\s]+/g) || []
      data = data.map(e=>{
        if(/\$/.test(e)){
          return setValue(result[e] ?  parseStringToObject({
            input:result[e],
            result
          }) : e)
        }
        return setValue(e)
      })
    }else {
      return setValue(input)
    }
    return data
  }

  return parseStringToObject(parseString(input))
}
onMounted(async ()=>{
  const  {data} = await axios({
    url,
    method:'get',
    responseType:'arraybuffer'
  })
  const buff = new Uint8Array(data)
  const str = new TextDecoder().decode(buff)
  const objs = ([...new Set(str.match(/\d+ \d+ ?obj/ig).map(e=>parseInt(e.split(" ")[0])))] as any).sort((a:number, b:number)=>(a-b) < -1)
  const objects = objs.map(e=> {
    const header = str.match(new RegExp(`${e} 0 obj\r(<<.*)\r`))[1].replace(/>>[^>]*$/,'>>')
    return {
      obj:`${e} 0 obj`,
      header,
      headerInfo:pdfHeaderParse(header) ,
    }
  }).reduce((a,b)=>{
    a[b.obj] = b;
    return a
  }, {})
  console.log(objects)
  console.log(Object.fromEntries(Object.entries(objects).filter(e=>/BitsPerComponent/.test(e[1].header))))
  const objInfo = objects['173 0 obj']
  console.log(objInfo)
  if(objInfo){
    const stream = split(split(split(split(buff, objInfo.header).arr[1], "endstream").arr[0], 'stream').arr[1], '\r\n').arr.filter(e=>e.length > 0)
        .reduce((a,b, k)=>{
          return a.concat(k === 0 ? [] : [...new TextEncoder().encode('\r\n')]).concat(b)
        },[])
    console.log(stream)
    try {
      window.open(URL.createObjectURL(new Blob([new Uint8Array(stream)],{type:'image/jpg'})))
      console.log(new TextDecoder().decode(inflate(new Uint8Array(stream))))
    }catch (e) {
      console.log("解析失败", new TextDecoder().decode(new Uint8Array(stream)))
    }
  }

})
</script>

<style scoped lang="less">

</style>
