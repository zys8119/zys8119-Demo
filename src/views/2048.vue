<template>
    <div class="a w-300px m-x-auto m-t-15 b b-solid b-#d8d8d8 b-rd-15px p-15px">
        <div>2048小游戏</div>
        <div class="m-t-15px flex flex-col gap-10px">
          <div class="flex gap-10px" v-for="(item, key) in data" :key="key">
            <div class="flex-1 bg-#eee h-50px justify-center items-center flex" v-for="(it, k) in item" :key="k">{{it || ''}}</div>
          </div>
        </div>
      <div class="flex m-t-15 gap-5px">
        <button class="flex-1" @click="run('top')">top</button>
        <button class="flex-1" @click="run('bottom')">bottom</button>
        <button class="flex-1" @click="run('left')">left</button>
        <button class="flex-1" @click="run('right')">right</button>
      </div>
    </div>
</template>

<script setup lang="ts">
const data = ref([
  [4,2,0,0],
  [0,2,0,2],
  [4,0,4,0],
  [4,2,0,0],
])
const calc = (origin:number[])=>{
  let curr = 0
  let sum = 0
  const result = []
  origin.forEach((e, k, arr)=>{
    if(curr === 0){
        sum += e
        curr = e
    }else if(curr === e || e === 0){
       sum += e
    }else {
      result.push(sum)
      sum = e
      curr = e
    }
    if(k === arr.length -1){
      result.push(sum)
    }
  })
  return origin.map((e, k)=> result[k] || 0)
}
const directionCalc = (data:number[][], direction:string)=>{
  const result = JSON.parse(JSON.stringify(data));
  return {
    top(){
        new Array(result[0].length).fill(0).forEach((e, k)=>{
          calc(result.map(ee=>ee[k])).forEach((e,kk)=>{
            result[kk][k] = e
          })
        })
        return result
    },
    bottom(){
      new Array(result[0].length).fill(0).forEach((e, k)=>{
        calc(result.map(ee=>ee[k]).reverse()).forEach((e,kk)=>{
          result[data.length - 1 -kk][k] = e
        })
      })
      return result
    },
    left(){
      return result.map(e=>calc(e))
    },
    right(){
      return result.map((e)=>{
        calc(e.reverse()).forEach((ee, kk)=>{
          e[e.length -1 - kk] = ee
        })
        return e
      })
    }
  }[direction]?.()
}
const run = (type:string)=>{
  data.value =  directionCalc(data.value, type).map((e,k)=>e.map((ee,kk)=>{
    if(k % 2 === 0 || kk % 2 === 0){
      return ee
    }
    let value = Math.floor(Math.random()*4)
    value = value % 2 === 0 ? value : value+1;
    return ee === 0 ? value : ee
  }))
}
</script>

<style scoped lang="less">
.a {
  .aa{
    overflow: hidden;
    transition: all cubic-bezier(1, 0.08, 0, 0.95) 0.5s;
  }
}
</style>
