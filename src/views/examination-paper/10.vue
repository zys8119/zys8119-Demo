<template>
    <div class="10">
        动态规划入门
    </div>
</template>

<script setup lang="ts">
// function maxPoints(points: number[][]): number {
//     const calc = (curr, row, col)=>{
//         const rowArr = points[row -1] ? points[row -1] : [...points[row]].fill(0)
//         const map = rowArr.map((e, k)=> {
//             return e + curr - Math.abs(k - col)
//         })
//         const max = Math.max.apply(null, map)
//         return max
//     }
//     points.forEach((e, row)=>{
//         e.forEach((v, col)=>{
//             points[row][col] = calc(v, row, col)
//         })
//     })
//     return Math.max.apply(null, points.at(-1))
// };
import a from "./a"
let points = [[1,2,4,4,3], [1,4,5,5,1], [5,2,3,5,5], [2,3,4,3,0]] // 17
// points = [[1,2,3],[1,5,1],[3,1,1]] // 9
// points = [[1,5],[2,3],[4,2]] // 11
// points = a // ?

console.table(points)
console.time()
let prevRowSum = []
const run = (row)=>{
    let max = 0
    const maxMap = {}
    points[row].forEach((e,k)=>{
        points[row].forEach((_, kk)=>{
            const pv = (prevRowSum[kk] || 0)
            const sum = e + pv - Math.abs(k - kk)
            maxMap[sum] = maxMap[sum] || []
            maxMap[sum].push({
                row:row,
                col:k,
                value:sum
            })
            if(sum > max){
                max = sum
            }
        })
    })
    prevRowSum = []
    const arr = maxMap[max] || []
    arr.forEach(e=>{
        points[e.row][e.col] = e.value
        prevRowSum[e.col] = e.value
    })
}
points.forEach((_, k)=>{
    run(k)
})

console.log(Math.max.apply(null, points.at(-1)))
console.timeEnd()
console.table(points)
</script>

<style scoped lang="less">
</style>
