import{d as m,o as f,c as g}from"./index-bfc7e514.js";const u={class:"1"},k=m({__name:"1",setup(_){console.log(`给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。


 示例 1：



 输入：height = [0,1,0,2,1,0,1,3,2,1,2,1]
 输出：6
 解释：上面是由数组 [0,1,0,2,1,0,1,3,2,1,2,1] 表示的高度图，在这种情况下，可以接 6 个单位的雨水（蓝色部分表示雨水）。
 示例 2：

 输入：height = [4,2,0,3,2,5]
 输出：9


 提示：

 n == height.length
 1 <= n <= 2 * 104
 0 <= height[i] <= 105`),console.log("开始执行=================================================================");let c=new Array(1e7).fill(0).map(()=>Math.round(Math.random()*100));console.log(c);const l=performance.now();var s=function(o){let t=0;const n=[],a=o.length;for(let e=0;e<a;++e){for(;n.length&&o[e]>o[n[n.length-1]];){const p=n.pop();if(!n.length)break;const r=n[n.length-1],i=e-r-1,h=Math.min(o[r],o[e])-o[p];t+=i*h}n.push(e)}return t};return console.log(s(c)),console.log("耗时：",performance.now()-l,"ms"),(o,t)=>(f(),g("div",u," 请打开控制台查看 "))}});export{k as default};
