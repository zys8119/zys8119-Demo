<template>
  <div class="svip bg-#121833 abs-f w-100% h-100%">
    <n-input :style="{
    '--n-border':'none',
    '--n-height':'50px',
    '--n-text-color':'#fff',
    '--n-color-focus':'#fff2',
    }" class="bg-#fff2 b-rd-25px text-#fff !w-50% m-auto abs-x top-50px"
             clearable
             placeholder="请输入关键词" v-model:value="search" @keyup.enter="onSearch">
      <template #suffix>
        <n-button type="primary" @click="onSearch">搜索</n-button>
      </template>
    </n-input>
  </div>
</template>

<script setup lang="ts">
import axios from "axios"
const search = ref()
const onSearch = async () => {
  console.log(search.value)
  const res = await axios({
    url:"http://127.0.0.1:82/",
    method:"get",
    params:{
      search:search.value
    }
  })
  console.log(res.data)
}
</script>

<style scoped lang="less">
.svip {

}
</style>
