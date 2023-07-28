<template>
    <div class="1">
    </div>
</template>

<script setup lang="ts" title="接雨水">

import {a} from "@/docs/assets/index-c5816990";

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
let arr = new Array(10000000).fill(0).map(()=> Math.round(Math.random()*100))
// arr = [0,1,0,2,1,0,1,3,2,1,2,1]
// arr = [4,2,0,3,2,5]
console.log(arr)
const time = performance.now()
//todo ================================
// 初始代码
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
/// 优化后代码
// function trap(height: number[]): number {
//     let start = 0
//     let starts = 0
//     let end = 0
//     let k = 0
//     let kk = height.length -1
//     let e = 0
//     let ee = 0
//     let result = 0
//     let maxMap = {}
//     while (kk > 0) {
//         ee = height[kk]
//         starts = ee < starts ? starts : ee
//         maxMap[kk] = starts
//         kk -= 1
//     }
//     while (k < height.length){
//         e = height[k]
//         k += 1
//         start = e > start ? e : start
//         end = maxMap[k]
//         const min = start > end ? end : start
//         if(start > e && e < end){
//             result +=  min - e
//         }
//     }
//     return result
// };
// 官方
var trap = function(height) {
    let ans = 0;
    const stack = [];
    const n = height.length;
    for (let i = 0; i < n; ++i) {
        while (stack.length && height[i] > height[stack[stack.length - 1]]) {
            const top = stack.pop();
            if (!stack.length) {
                break;
            }
            const left = stack[stack.length - 1];
            const currWidth = i - left - 1;
            const currHeight = Math.min(height[left], height[i]) - height[top];
            ans += currWidth * currHeight;
        }
        stack.push(i);
    }
    return ans;
};

console.log(trap(arr));
//todo ================================
console.log('耗时：', performance.now() - time,'ms')
</script>

<style scoped lang="less">
</style>
