<template>
  <div class="bb">
  </div>
</template>

<script setup lang="ts" title="pdf 头部信息解析" content="pdf 头部信息解析">
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

const origin = '<</name 1 /age/2 <test>/obj <</a (1222) /b [212  v, <asda> (asdas) [ 2 4 <</asd 张云山>>]]>> /bb [1212 666 [7 8] [<a> <</b as>> as] <asdasda> <</ccc asd/vv/ddd  sad>>]>>';

console.log(pdfHeaderParse(origin));
console.log(pdfHeaderParse("<</Count 2 /Kids [6 0 R 29 0 R] /Type /Pages>>"));
console.log(pdfHeaderParse("<</Size 32 /Root 1 0 R /Info 3 0 R /ID [<299aafec505449cfb4e97aa1822bcb89><a5c0046499c241f58f18cdd07b5c9479><5555>]>>"));
console.log(pdfHeaderParse("<</Names <</Dests 4 0 R>> /Outlines 5 0 R /Pages 2 0 R /Type /Catalog>>"));
console.log(pdfHeaderParse("<</Author (zjjcy) /Comments () /Company () /CreationDate (D:20231009112041+03'20') /Creator (�� W P S  e�[W) /Keywords () /ModDate (D:20231009112041+03'20') /Producer () /SourceModified (D:20231009112041+03'20') /Subject () /Title (��[�~�& �^t) /Trapped false>>"));

</script>

<style scoped lang="less">
.bb {

}
</style>
