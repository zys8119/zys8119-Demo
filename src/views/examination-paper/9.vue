<template>
    <div class="9">
        9. 任务执行的洋葱模型
    </div>
</template>

<script setup lang="ts">
type Callback = (next:()=> void | Promise<void>)=> void | Promise<void>
class createTaskPro {
    tasks:Callback[] = []
    currIndex:number = 0
    constructor() {
    }
    addTask(callback:Callback){
        this.tasks.push(callback)
    }
    private getTask (){
        const task = this.tasks[this.currIndex]
        return task
    }
    private async reset(){
        this.tasks = []
        this.currIndex = 0
    }
    private async next(){
        this.currIndex ++
        await this.runTask()
    }
    private async runTask(){
        const currIndexStart = this.currIndex
        const task = this.getTask()
        if(!task || this.currIndex > this.tasks.length - 1){
            await this.reset()
            return
        }
        await task(this.next.bind(this))
        const currIndexEnd  = this.currIndex
        if(currIndexStart === currIndexEnd){
            await this.next()
        }
    }
    async run(){
        await this.runTask()
    }
}
const TaskPro = ()=>{
    return new createTaskPro()
}
const t = TaskPro()
t.addTask(async (next)=>{
    console.log(1, 'start')
    await next()
    console.log(1, 'end')
})
t.addTask(async ()=>{
    console.log(2)
})
t.addTask(async ()=>{
    console.log(3)
})
t.run(); // 1 start, 2, 3, 1 end
</script>

<style scoped lang="less">
</style>
