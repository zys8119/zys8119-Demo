<template>
    <div class="8.vue">
        console.log(++[[]][+[]] + [+[]]) 输出多少？并按步骤解释其运算过程
    </div>
</template>

<script setup lang="ts">
//@ts-ignore
console.log(++[[]][+[]] + [+[]])
console.log("解题")
//@ts-ignore======================
// [].toString() // ''
console.log(++[''][+''] + [+''])
//@ts-ignore======================
// +'' // 0
console.log(++[''][0] + [0])
//@ts-ignore======================
console.log((++'') + [0])
//@ts-ignore======================
console.log((+0) + [0])
//@ts-ignore======================
console.log(1 + '0')
//@ts-ignore======================
console.log('10')
</script>

<style scoped lang="less">
.8
.vue {

}
</style>
