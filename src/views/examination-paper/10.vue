<template>
    <div class="10">
        动态规划入门
    </div>
</template>

<script setup lang="ts">
// 输入：points = [[1,2,3],[1,5,1],[3,1,1]]
// 输出：9
// const points = [
//     [1,2,3],
//     [1,5,1],
//     [3,1,1]
// ]
// const points = [[1,5],[2,3],[4,2]]
const points = [[0,3,0,4,2],[5,4,2,4,1],[5,0,0,5,1],[2,0,1,0,3]]
const max = points[0].length
const arr = points.map((e, r)=>{
    return e.map((ee, c)=>{
        return new Array(max).fill(0).map((_, k)=> {
            const index = points[r+1]?.[k] || 0
            const differ = Math.abs(c - k)
            return {
                sum:index + ee - differ,
                differ,
                start:[r,c],
                end:[r+1,k],
                value:ee,
                endValue:index
            }
        })
    })
})
const calc = (index = 0, infoObj?:any , results = {
    value:0,
    points:[]
})=>{
    if(!points[index]){
        return  results
    }
    const res = []
    let sumsmax = 0
    const sumsCalc = (e, k)=>{
        const sumMax = Math.max.apply(null, arr[index][k].map(e=>e.sum))
        const sums = arr[index][k].filter(e=>e.sum === sumMax)
        sums.forEach(e=>{
            const value = e.value + (points[e.end[0]]?.[e.end[1]] || 0) - e.differ
            res.push({
                value,
                info:e
            })
            if(sumsmax < value){
                sumsmax = value
            }
        })
    }
    if(infoObj){
        sumsCalc(infoObj.endValue, infoObj.end[1])
    }else {
        const max = Math.max.apply(null,points[index])
        points[index].forEach((e, k)=>{
            if(e === max){
                sumsCalc(e, k)
            }
        })
    }

    const {info} = res.find(e=>e.value === sumsmax) || {}
    results.value += info.value - info.differ
    results.points.push({
        point:info.start,
        value:info.value,
        differ:info.differ,
        info
    })
    calc(index+1, info, results)
    return  results
}
console.log(calc());
</script>

<style scoped lang="less">
</style>
