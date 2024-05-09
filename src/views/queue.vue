<template>
  <div class="w-full coloe-#f00 text-50px">
    <h3>任务并发控制，请查看控制台</h3>
  </div>
</template>

<script setup lang="ts" title="任务并发">
/**
 * 并发执行任务队列中的任务,并在所有任务完成后返回结果数组.
 * @param queues 队列任务
 * @param taskIndex 任务并发数
 * @param callback 每个任务执行完成后的回调函数
 * @returns 返回一个Promise,resolve时返回所有任务的结果数组
 */
const queue = async (queues:Array<()=> any>, taskIndex:number, callback?:(result:any, taskIndex:number, task:any)=>void)=>{
  const results = []
  const map = new WeakMap()
  return new Promise<any[]>((resolve, reject) => {
    let index = 0
    let indexOrigin = 0
    const run = ()=>{
      while (queues.length > 0 && index < taskIndex) {
        const task = queues.shift()
        map.set(task, indexOrigin)
        indexOrigin += 1
        ;(async ()=>{
          try {
            const result = await task();
            results[map.get(task)] = result
            callback?.(result,indexOrigin, task)
            index -= 1;
            if(queues.length === 0 && index === 0){
              resolve(results);
            }else {
              run()
            }
          }catch (e) {
            reject(e)
          }
        })();
        index+=1;
      }
    }
    run()
  })
}
onMounted(async () =>{
  const fn = new Array(100).fill(0)
      .map((_,k)=>{
        return async ()=>{
          return await new Promise(resolve => {
            setTimeout(()=>{
              console.log(k)
              resolve(k)
            }, Math.random()*200)
          })
        }
      })
  console.time()
  const res = await queue([
    ()=>{
      return 1111
    }
  ], 10)
  console.timeEnd()
  console.log(res)
})
</script>

<style scoped lang="less">
.b {
}
</style>
