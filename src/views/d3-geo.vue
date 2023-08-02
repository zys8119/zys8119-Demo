<template>
    <div class="d3-geo">
        <svg ref="svgRef" class="b b-#f00 b-solid w-100% h-100% fixed"></svg>
    </div>
</template>

<script setup lang="ts" title="d3-geo">
import * as d3 from "d3";
import {polygonCentroid, polygonHull} from "d3-polygon";
const svgRef = $ref() as HTMLElement
const {width, height} = useWindowSize()
const render = async ()=>{
    const svg = d3.select(svgRef)
    svg.selectAll('g').remove()
    const offset = 10
    const xIndex = 12
    const range = 1000
    const xAxisTop = height.value - 50
    const x = d3.scaleLinear()
        .domain([1,xIndex])
        .range([0, range])
    const xAxis = d3.axisBottom(x)
    xAxis.tickFormat((_)=>{
        return `${_}月`
    })
    const gx = svg.append('g')
        .attr("transform", `translate(${offset},${xAxisTop})`)
        .call(xAxis)
    gx.selectAll('.tick,.domain').attr('color', '#f00')
    const rectWidth = 50
    const data = [1,2,3,50]
    svg.append('g')
        .attr('fill', '#f00')
        .selectAll()
        .data(data)
        .join('rect')
        .attr('x', (d, index)=>{
            const gap = (range)/(xIndex-1)
            return gap/2 - rectWidth/2 + offset + gap*index
        })
        .attr('y', (d)=>{
            return xAxisTop - d
        })
        .attr('width', rectWidth)
        .attr('height', d=>d)


}
watch([width, height], render)
onMounted(render)

</script>

<style scoped lang="less">
.d3-geo {

}
</style>
