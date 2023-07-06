<template>
    <div class="paper">
        <canvas ref="canvasRef" width="500" height="500" ></canvas>
    </div>
</template>

<script setup lang="ts" title="paper.js" ccontent="基于paper.js的canvas路径操作">
import paper, {Color} from "paper";

const canvasRef = ref()
onMounted(()=>{
    const p = new paper.PaperScope()
    p.setup(canvasRef.value)
    const path = new p.Path();
    path.fullySelected = true
    path.strokeColor = new Color('#000');
    path.strokeWidth = 5
    path.closed = true
    path.fillColor = new Color('#000')
    let segment = null
    path.onMouseDown = (ev)=>{
        const hitResult = p.project.hitTest(ev.point)
        segment = hitResult.segment
    }

    path.onMouseDrag = ev=>{
        if(segment){
            segment.point.x += ev.delta.x
            segment.point.y += ev.delta.y
            path.smooth()
        }
    }
    const start = new  p.Point(100, 100);
    path.moveTo(start);
    path.lineTo(start.add([ 200, -50 ]));
    path.lineTo(start.add([ 50, 50 ]));
    path.smooth()

})
</script>

<style scoped lang="less">
.paper {
    canvas{
        border: 1px solid #f00;
    }
}
</style>
