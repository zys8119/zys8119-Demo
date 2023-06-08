<template>
    <div class="growing-tree">
        <canvas ref="canvas" class="w-1/1 h-1/1 fixed"></canvas>
    </div>
</template>

<script setup lang="ts" title="growing-tree" content="生长树">
import winframe from "winframe"
const canvas = $ref() as HTMLCanvasElement
const ctx = $computed(()=> canvas.getContext('2d')) as CanvasRenderingContext2D
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //不含最大值，含最小值
}
onMounted(async ()=>{
    canvas.width = innerWidth*window.devicePixelRatio
    canvas.height = innerHeight*window.devicePixelRatio
    // 4:54 start
    ctx.lineWidth = 1
    ctx.strokeStyle = '#f00'
    ctx.lineJoin = 'round'
    const getOffsetX = ()=> getRandomInt(0,50)
    const getOffset = ()=> getRandomInt(50,100)
    const offset = 10
    const [cx,cy] = [innerWidth/2, innerHeight]
    const draw = async ([cx,cy], max = 10, index = 0)=>{
        const points = [[cx-getOffsetX()-offset,cy-getOffset()], [cx+getOffsetX()+offset,cy-getOffset()]]
        await Promise.all(points.map(async ([x,y])=>{
            return new Promise<void>(resolve => {
                winframe(p =>{
                    const pp = p
                    ctx.beginPath()
                    ctx.moveTo(cx,cy)
                    ctx.lineTo(cx + (x - cx)*pp, cy + (y - cy)*pp)
                    ctx.stroke()
                    ctx.closePath()
                    if(p >= 1){
                        resolve()
                    }
                }, getRandomInt(500, 1000))
            })
        }))
        if(index < max ){
            await Promise.all(points.map((p:any)=>{
                return draw(p, getRandomInt(0,max), index + 1)
            }))
        }
    }
    await draw([cx,cy], 20)

})
</script>

<style scoped lang="less">
.growing-tree {

}
</style>
