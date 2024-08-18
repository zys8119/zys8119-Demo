<template>
  <div class="earth-flyline abs-content">
    <Drager v-for="(item,key) in list"
            :key="key"
            v-bind="item"
            @change="e=> change(e,item)"
            rotatable
            boundary
            snap
            :markline="false"
    >
      <div :style="{
        width: `${item.width}px`,
        height: `${item.height}px`,
      }" class="w-50px h-50px bg-#f00"></div>
    </Drager>
  </div>
</template>

<script setup lang="ts">
import 'es-drager/lib/style.css'
import Drager from 'es-drager'
const list = ref<any>([
  {
    "width": 282,
    "height": 296,
    "left": 383,
    "top": 179,
    "angle": 0
  },
  {
    "width": 282,
    "height": 296,
    "left": 383,
    "top": 179,
    "angle": 0
  }
])
watchDeep(list, ()=>{
  console.log(list.value)
})
const change = (e,item)=>{
  console.log(e)
  for(let [k,v] of Object.entries(e)){
    item[k] = v
  }
}
</script>

<style scoped lang="less">
.earth-flyline {
    :deep(canvas){
      width: 100% !important;
      height: 100% !important;
    }
}
</style>
