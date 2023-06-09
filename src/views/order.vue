<template>
    <div class="bb">
        <CanvasInteraction @load="load"></CanvasInteraction>
    </div>
</template>

<script setup lang="ts">
import CanvasInteraction,{ObjectBaseType} from "../components/CanvasInteraction"
const load = async ({ObjectsClass, scene, ObjectBase}) => {
    class Line extends ObjectBase implements ObjectBaseType{
        w = 300
        h = 300
        x = 500
        y = 500
        async draw(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement): Promise<any> | void {
            ctx.beginPath()
            ctx.lineWidth = 2
            ctx.moveTo(this.x, this.y)
            const [a,b,c,d] = [.18,.61,.84,.47]
            ctx.bezierCurveTo(this.x+this.w*a, this.y+this.h*b, this.x+this.w*c, this.y+this.h*d, this.x+this.w, this.y+this.h)
            ctx.stroke()
        }
    }
    scene.push(new Line())
}
const data = [
    {name:'11'}
]
</script>

<style scoped lang="less">
.bb {

}
</style>
