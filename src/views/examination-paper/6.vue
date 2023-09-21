<template>
    <div class="6">
        6. 利用位运算实现权限组合
    </div>
</template>

<script setup lang="ts" title="6. 利用位运算实现权限组合">
const read =  1
const write = 2
const admin = 4
const guest = 8
const user = 16
let permission = read | write | admin | guest
// 组合后的二进制
console.log(permission.toString(2))
// 添加
permission |= user
// 判断权限
console.log(permission & user)
// 删除权限
permission ^= write
console.log(permission & write)
// 仅保留此权限
permission &= guest
console.log(permission & read)
</script>

<style scoped lang="less">
</style>
