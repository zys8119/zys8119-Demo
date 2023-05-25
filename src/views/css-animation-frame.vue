<template>
    <div class="css-animation-frame">
        总时间：3000ms， 动画过度时间：{{range}}
        <div class="arc"></div>
        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" class="bi bi-arrow-down-up" viewBox="0 0 16 16">
            <path ref="path" d="M11.5 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L11 2.707V14.5a.5.5 0 0 0 .5.5zm-7-14a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V1.5a.5.5 0 0 1 .5-.5z"/>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" class="bi bi-arrow-up-square-fill" viewBox="0 0 16 16">
            <path d="M2 16a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2zm6.5-4.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 1 0z"/>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" class="bi bi-badge-8k" viewBox="0 0 16 16">
            <path d="M4.837 11.114c1.406 0 2.333-.725 2.333-1.766 0-.945-.712-1.38-1.256-1.49v-.053c.496-.15 1.02-.55 1.02-1.331 0-.914-.831-1.587-2.084-1.587-1.257 0-2.087.673-2.087 1.587 0 .773.51 1.177 1.02 1.331v.053c-.546.11-1.258.54-1.258 1.494 0 1.042.906 1.762 2.312 1.762zm.013-3.643c-.545 0-.95-.356-.95-.866s.405-.852.95-.852c.545 0 .945.343.945.852 0 .51-.4.866-.945.866zm0 2.786c-.65 0-1.142-.395-1.142-.984S4.2 8.28 4.85 8.28c.646 0 1.143.404 1.143.993s-.497.984-1.143.984zM13.408 5h-1.306L9.835 7.685h-.057V5H8.59v5.998h1.187V9.075l.615-.699 1.679 2.623H13.5l-2.232-3.414L13.408 5z"/>
            <path d="M14 3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12zM2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2z"/>
        </svg>
    </div>
</template>

<script setup lang="ts" title="css 动画延时帧" content="介绍巧妙的使用动画延时技术:【animation: css-animation-frame 1s v-bind(rangeCalc) linear forwards paused;】">
import winframe from "winframe"
const range = ref(0)
const rangeCalc = computed(()=> `-${range.value}s`)
winframe((p)=>{
    range.value = p
}, 3000)
const path = ref()
/**
 * getTotalLength
 * 可以获取路径的总长度
 */
const pathOffset = computed(()=> path.value?.getTotalLength() || 0)
</script>

<style scoped lang="less">
.css-animation-frame {
    @a: 1s v-bind(rangeCalc) linear forwards paused;
    .arc{
        background: #ff0000;
        width: 50px;
        height: 50px;
        border-radius: 100%;
        animation: css-animation-frame @a;
        @keyframes css-animation-frame {
            100%{
                transform: translateX(500px) scale(2);
                background-color: #17b900;
            }
        }
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
    svg{
        margin-right: 10px;
    }

    @keyframes dash {
        to {
            stroke-dashoffset: 0;
            fill: #ff00d3;
        }
    }

}
</style>
