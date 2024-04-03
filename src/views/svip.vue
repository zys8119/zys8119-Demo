<template>
  <div class="svip bg-#121833 abs-f w-100% h-100%">
    <n-input :style="{
    '--n-border':'none',
    '--n-height':'50px',
    '--n-text-color':'#fff',
    '--n-color-focus':'#fff2',
    }" class="bg-#fff2 b-rd-25px text-#fff !w-50% m-auto abs-x top-50px"
             clearable
             placeholder="请输入关键词" v-model:value="search" @keyup.enter="onSearch"></n-input>
  </div>
</template>

<script setup lang="ts">
const search = ref()
const onSearch = () => {
  console.log(search.value)
}
</script>

<style scoped lang="less">
.svip {

}
</style>
