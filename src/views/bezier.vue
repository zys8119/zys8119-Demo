<template>
    <div class="a ">
        <div class="bg-#f00 w-10px h-10px b-rd-10px absolute" :style="{
            left:`${point.x}px`,
            top:`${point.y}px`,
        }"></div>
    </div>
</template>

<script setup lang="ts" title="贝塞尔曲线 bezier" content="贝塞尔曲线动画思路">
import winframe from "winframe"
import * as d3 from "d3"

const point = ref({x: 0, y: 0})
const getValue = (p, P0, P1, P2, P3)=>{
    return (1 - p)**3 * P0 + 3 * (1 - p)**2 * p * P1 + 3 * (1 - p) * p**2 * P2 + p**3 * P3
}
interface BesselCurveData {
    x:number
    y:number
}
interface BesselCurveData {
    x:number
    y:number
    p1?:{
        x:number
        y:number
    }
    p2?:{
        x:number
        y:number
    },
    type?:'L' | 'Q' | 'M' | 'C'
}
// 计算两点之间的欧几里德距离
function calculateDistance(point1, point2) {
    const dx = point2.x - point1.x;
    const dy = point2.y - point1.y;
    return Math.sqrt(dx * dx + dy * dy);
}

// 计算三次贝塞尔曲线上的点
function calculateBezierPoint(P0, P1, P2, P3, t) {
    const u = 1 - t;
    const uu = u * u;
    const uuu = uu * u;
    const tt = t * t;
    const ttt = tt * t;

    const x = uuu * P0.x + 3 * uu * t * P1.x + 3 * u * tt * P2.x + ttt * P3.x;
    const y = uuu * P0.y + 3 * uu * t * P1.y + 3 * u * tt * P2.y + ttt * P3.y;

    return { x, y };
}

// 计算三次贝塞尔曲线的近似长度
function calculateBezierLength(P0, P1, P2, P3, numSegments) {
    let totalLength = 0;
    let previousPoint = P0;

    for (let i = 1; i <= numSegments; i++) {
        const t = i / numSegments;
        const currentPoint = calculateBezierPoint(P0, P1, P2, P3, t);
        const segmentLength = calculateDistance(previousPoint, currentPoint);
        totalLength += segmentLength;
        previousPoint = currentPoint;
    }

    return totalLength;
}
class BesselCurve {
    constructor(public points:Array<BesselCurveData>) {
    }
    isType(e:BesselCurveData){
        return typeof e.type === 'string'
    }
    isM(e:BesselCurveData){
        return e.type === 'M'
    }
    isL(e:BesselCurveData){
        return e.type === 'L'
    }
    isQ(e:BesselCurveData){
        return e.type === 'Q'
    }
    isC(e:BesselCurveData){
        return e.type === 'C' || (e.p1 || e.p2)
    }
    toString(){
        let d = ''
        this.points.forEach((e, k)=>{
            const type = this.isC(e) ? 'C'  :
                this.isL(e) ? 'L' :
                    this.isQ(e) ? 'Q' :
                        this.isL(e) ? 'L' :
               !this.isType(e) &&  k === 0 ? 'M' : 'L'
            d += `${type}
             ${e?.p1?.x || ''}
             ${e?.p1?.y || ''}
             ${e?.p2?.x || ''}
             ${e?.p2?.y || ''}
             ${e.x} ${e.y} `

        })
        return d.replace(/\s+/g,' ').trim()
    }
    bezierLength(numSegments = 100){
        let length = 0
        let lengthArrs = []
        let previousPoint = null
        this.points.forEach((e)=>{
            if(previousPoint && this.isC(e)){
                const _length = calculateBezierLength(previousPoint, e.p1, e.p2, e, numSegments)
                length += _length;
                lengthArrs.push(_length)
            }
            previousPoint = e
        })
        return {
            length,
            lengthArrs
        }
    }
}
const init = async () => {
    const besselCurve = new BesselCurve([
        {x:0, y:0},
        {x:500, y:500, p1:{x:100, y:200}, p2:{x:300,y:300}},
        {x:100, y:100, p1:{x:500, y:500}, p2:{x:100,y:100}}
    ])
    const length = besselCurve.bezierLength()
    const lengthMap = length.lengthArrs.map(e=>e/length.length).map((e,k, arr)=>arr.slice(0, k).reduce((a,b)=>a+b, 0))
    const lengthMap2 = length.lengthArrs.map(e=>e/length.length)
    console.log(lengthMap)
    const svg = d3.select('body')
        .append('svg')
        .attr('width', 500)
        .attr('height', 500)
        .attr('class', 'w-500px h-500px b b-#f00 b-solid')
    svg.append('path')
        .attr('d', besselCurve.toString())
        .attr('fill', '#f000')
        .attr('stroke', '#f00')

    await winframe(p=>{
        const index = length.lengthArrs.findIndex((e,k, arr)=> {
            const sum = arr.slice(0, k+1).reduce((a,b)=>a+b, 0)
            return length.length * p <= sum
        })
        const cp =  1/lengthMap2[index]*(p - lengthMap[index])
        const previousPoint = besselCurve.points[index]
        const {x, y, p1, p2} = besselCurve.points[index + 1]
        point.value = {
            x:getValue(cp, previousPoint.x, p1.x, p2.x, x),
            y:getValue(cp, previousPoint.y, p1.y, p2.y, y),
        }
    }, 3000)
}
onMounted(async () => {
    await init()
})


</script>

<style scoped lang="less">
.a {
}
</style>
