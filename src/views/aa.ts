class Task {
    tasks = []

    constructor() {
    }

    addTask(task) {
        this.tasks.push(task)
    }

    run() {
        const next = () => {
            const task = this.tasks.shift()
            task && task(()=>Promise.resolve()) && next()
        }

        next()
    }


}
const TaskPro = function (){
    return new Task()
}
const t = TaskPro()
t.addTask(async (next)=>{
    console.log(1, 'start')
    await next()
    console.log(1, 'end')
})
t.addTask(async (next)=>{
    console.log(2333)
})
t.addTask(async (next)=>{
    console.log(3)
    await next()
    console.log(8888)
})
t.run(); // 1 start, 2, 3, 1 end

const vvv= (()=>{
    const obj = {
        a:1,
        b:2
    }
    return function (key:string){
        return obj[key]
    }
})()
;(function aa(){
    setTimeout(()=>{
        aa()
    },1000)
})()
