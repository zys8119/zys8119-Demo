<template>
    <div class="1">
    </div>
</template>

<script setup lang="ts" title="接雨水">

/**
 给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。


 示例 1：



 输入：height = [0,1,0,2,1,0,1,3,2,1,2,1]
 输出：6
 解释：上面是由数组 [0,1,0,2,1,0,1,3,2,1,2,1] 表示的高度图，在这种情况下，可以接 6 个单位的雨水（蓝色部分表示雨水）。
 示例 2：

 输入：height = [4,2,0,3,2,5]
 输出：9


 提示：

 n == height.length
 1 <= n <= 2 * 104
 0 <= height[i] <= 105
 */
const time = performance.now()
//todo ================================
// 初始代码
function trap(height: number[]): number {
    const arr = height.map((e,k)=>{
        const start = Math.max.apply(null, height.slice(0, k))
        const end = Math.max.apply(null, height.slice(k+1))
        const min = start > end ? end : start
        if(start > e && e < end){
            return min - e
        }
        return  0
    })
    return arr.reduce((a,b)=>a+b, 0)
};
/// 优化后代码
// function trap(height: number[]): number {
//     const arr = height.map((e,k)=>{
//         const start = Math.max.apply(null, height.slice(0, k))
//         const end = Math.max.apply(null, height.slice(k+1))
//         const min = start > end ? end : start
//         if(start > e && e < end){
//             return min - e
//         }
//         return  0
//     })
//     return arr.reduce((a,b)=>a+b, 0)
// };
console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
console.log(trap([4,2,0,3,2,5]));
//todo ================================
console.log(performance.now() - time)
</script>

<style scoped lang="less">
</style>
