<template>
    <div class="7">
        使用代理拦截动态属性
    </div>
</template>

<script setup lang="ts">
const _porxy = (results:number[] = [])=>{
    return new Proxy({}, {
        get(t, p){
            if(p === Symbol.toPrimitive){
                return  ()=> results.reduce((a,b)=>a+b)
            }
            return _porxy([...results, Number(p)])
        }
    })
}
const add = _porxy()
const r1 = add[1][2][3] + 4 // 10
const r2 = add[10][20] + 30 // 60
const r3 = add[100][200][300] + 400 // 1000
console.log(r1, r2, r3)
console.log(++[[]][+[]] + [+[]])
</script>

<style scoped lang="less">
</style>
