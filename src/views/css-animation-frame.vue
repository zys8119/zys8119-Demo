<template>
    <div class="css-animation-frame">
        动画时间：{{range}}
        <div class="arc"></div>
        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" class="bi bi-arrow-down-up" viewBox="0 0 16 16">
            <path ref="path" d="M11.5 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L11 2.707V14.5a.5.5 0 0 0 .5.5zm-7-14a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V1.5a.5.5 0 0 1 .5-.5z"/>
        </svg>
    </div>
</template>

<script setup lang="ts" title="css 动画延时帧" content="介绍巧妙的使用动画延时技术:【animation: css-animation-frame 1s v-bind(rangeCalc) linear forwards paused;】">
import winframe from "winframe"
const range = ref(0)
const rangeCalc = computed(()=> `-${range.value}s`)
winframe((p)=>{
    range.value = p
}, 2000)
const path = ref()
/**
 * getTotalLength
 * 可以获取路径的总长度
 */
const pathOffset = computed(()=> path.value?.getTotalLength() || 0)
</script>

<style scoped lang="less">
@keyframes css-animation-frame {
    100%{
        transform: translateX(500px);
        background-color: #17b900;
    }
}
.css-animation-frame {
    @a: 1s v-bind(rangeCalc) linear forwards paused;
    .arc{
        background: #0d9dd3;
        width: 50px;
        height: 50px;
        border-radius: 100%;
        animation: css-animation-frame @a;
    }
    path {
        /**
         SVG中有个比较重要的属性分支，名为stroke, 中文软件中称之为“描边”。
         stroke除了自己，还有其他诸多兄弟姐妹，来，站起来给大家瞅瞅：
         stroke 表示描边颜色。这很有意思，名字不是stroke-color, 而就是单纯的stroke. 其值，官方称之为”paint“，我就不上梁小丑般翻译了。一般有如下类型值：none, currentColor, <color>. none表示没有颜色，<color>就是我们常规的颜色值。RGBA, HSBA都支持。currentColor略高深，我看了下官方文档，个人理解为：共享父级但不越过SVG元素的XML中color(style中的)值；可以让路径绘制的文字直接继承父标签的color颜色值。
         stroke-width 表示描边的粗细
         stroke-linecap 表示描边端点表现方式。可用值有：butt, round, square, inherit. 表现如下图：
         stroke-linejoin 表示描边转角的表现方式。可用值有：miter, round, bevel, inherit. 表现如下图：
         stroke-miterlimit 表示描边相交（锐角）的表现方式。默认大小是4. 什么斜角转斜面的角度损耗之类的意思，值越大，损耗越小。具体干嘛的，我自己也不确定。大家可查查其他资料。
         stroke-dasharray 表示虚线描边。可选值为：none, <dasharray>, inherit. 其中，none表示不是虚线；<dasharray>为一个逗号或空格分隔的数值列表。表示各个虚线端的长度。可以是固定的长度值，也可以是百分比值；inherit表继承。
         stroke-dashoffset 表示虚线的起始偏移。可选值为：<percentage>, <length>, inherit. 百分比值，长度值，继承。
         stroke-opacity 表示描边透明度。默认是1.
         而，与本文相关的动画效果相关的就是stroke-dasharray和stroke-dashoffset着两兄弟。
         */
        stroke-dasharray: v-bind(pathOffset);
        stroke-dashoffset: v-bind(pathOffset);
        stroke-width: 0.4;
        animation: dash @a;
        fill: transparent;
        stroke: #000000;
    }

    @keyframes dash {
        to {
            stroke-dashoffset: 0;
            fill: #0d9dd3;
        }
    }

}
</style>
