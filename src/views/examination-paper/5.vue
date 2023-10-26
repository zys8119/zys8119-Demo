<template>
    <div class="5">
        怎样使 const [a, b] = {a:1, b:2}
    </div>
</template>

<script setup lang="ts" title="怎样使 const [a, b] = {a:1, b:2}">
/**
 * 方案1
 * 怎样使 const [a, b] = {a:1, b:2}
 */
Object.prototype[Symbol.iterator] = function (){
    return Object.values(this)[Symbol.iterator]()
}
// 方案二
// Object.prototype[Symbol.iterator] = function *(){
//     for (let v of Object.values(this)){
//         yield v
//     }
// }
const [a, b] = {
    a:1,
    b:2,
} as any
console.log(a, b)


</script>

<style scoped lang="less">
</style>
