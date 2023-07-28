<template>
    <div class="1">
        请打开控制台查看
        <div class="text-center text-20px fw-700 m-b-15px">数独({{cells}}*{{cells}})</div>
        <div v-for="(a, k) in arr" :key="k" class="flex justify-center items-center">
            <div v-for="(b, kk) in a" :key="kk" class="w-50px h-50px flex justify-center items-center b-l-solid b-t-solid b-#f00" :class="{
                'b-r-solid':kk === a.length - 1,
                'b-b-solid':k === arr.length - 1,
            }">{{b}}</div>
        </div>
    </div>
</template>

<script setup lang="ts" title="数独">
console.log(`
数独
 `)
console.log('开始执行=================================================================')


const time = performance.now()
//todo ================================
const cells = 9
const padEndIndex = cells.toString().length
const cellRow = new Array(cells).fill(0).map((_,k)=>k+1)
const arr = new Array(cells).fill(0).map(()=> new Array(cells).fill(0).map(()=> 0))
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //含最大值，含最小值
}
const calc = (x:number, y:number)=>{
    const xs = arr[x].slice(0, y)
    const ys = arr.reduce((a, b, index)=> {
        return index < x ? a.concat([b[y]]) : a
    }, [])
    const arrs =  xs.concat(ys).sort()
    const nums = cellRow.filter(e=>!arrs.includes(e))
    const numsIndex = getRandomIntInclusive(0, nums.length - 1)
    return nums[numsIndex]
}
const run = (item, x)=>{
    for(const [y] of Object.entries(item)){
        arr[x][y] = calc(x, Number(y))
        if(!arr[x][y]){
            return run(item, x)
        }
    }
}
arr.forEach((item, x)=>{
    run(item, x)
})
arr.forEach(e=>{
    console.log.apply(null,e.map(e=>e.toString().padStart(padEndIndex,' ')))
})

//todo ================================
console.log('耗时：', performance.now() - time,'ms')
</script>

<style scoped lang="less">
</style>
