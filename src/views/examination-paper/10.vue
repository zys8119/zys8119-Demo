<template>
    <div class="10">
        动态规划入门
    </div>
</template>

<script setup lang="ts">
import a from "./a"
let points = [
    [1,2,4,4,3],
    [1,4,5,5,1],
    [5,2,3,5,5],
    [2,3,4,3,0]
] // 17
// points = [[1,2,3],[1,5,1],[3,1,1]] // 9
// points = [[1,5],[2,3],[4,2]] // 11
// points = a // ?

console.table(points)

function maxPoints(points: number[][]): number {
    const fn = (i, j, vv)=>(points[i -1] || []).reduce((a, b, j2)=>{
        const sum = b - Math.abs(j - j2)
        return sum > a ? sum : a
    }, 0) + vv
    const m = points.length - 1
    const n = points[0].length - 1
    for (let i = 0; i < m; i++){
        for (let j = 0; j < n; j++){
            points[i][j] = fn(i, j, points[i][j])
        }
    }
    return points.at(-1).reduce((a,b)=>a > b ? a : b,0)
};
onMounted(()=>{
    // fn[i][j] = Max{f[i-1][j2] - j + j2} + points[i][j]

    console.table(maxPoints([[1,2,3],[1,5,1],[3,1,1]]));
})

</script>

<style scoped lang="less">
</style>
