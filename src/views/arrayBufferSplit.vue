<template>
  <div class="bb">
asda
  </div>
</template>

<script setup lang="ts" title="arrayBufferSplit" content="缓冲数据分片截取">
    Object.prototype.arrayBufferSplit = function (search){
      let str = this;
      let index = 0;
      if(str.length <= search.length){
        return [str]
      }
      let item = []
      const results = []
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
        }else {
          item.push(str[index])
        }
        index += 1
      }
      if(item.length > 0){
        results.push(item)
      }
      return results
    }
    const arr = new Uint8Array([21,12,1,12,2,1,31,6,45,1,23,4,5,51,42,1,2,1,5,1,42,1,4,2,45,5,125,5,5,5,2])
    console.log(arr)
    console.log(arr.arrayBufferSplit([1, 2]))
</script>

<style scoped lang="less">
.bb {

}
</style>
