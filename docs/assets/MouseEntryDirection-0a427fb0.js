import{d as u,r as l,o as h,c as M,f as p,n as m,u as b,m as y,_ as x}from"./index-24f0a408.js";const g={class:"MouseEntryDirection"},w=y('<div class="content" data-v-79cff63a>判断鼠标进入方向</div><div class="top" data-v-79cff63a>top</div><div class="left" data-v-79cff63a>left</div><div class="right" data-v-79cff63a>right</div><div class="bottom" data-v-79cff63a>bottom</div>',5),E=[w],D=u({__name:"MouseEntryDirection",setup(k){const n=l(),a=l(),d=async({offsetX:f,offsetY:c})=>{const i=n.value.clientWidth,r=n.value.clientHeight,e=f-i/2,t=r/2-c,v=Math.sqrt(Math.pow(e,2)+Math.pow(t,2)),_=Math.sqrt(Math.pow(i,2)+Math.pow(r,2)),s=Math.abs(Math.round(Math.asin(t/v)*180)/Math.PI),o=Math.round(Math.asin(r/_)*180)/Math.PI;e>=0&&t>=0&&s<=o||e>=0&&t<0&&s<=o?a.value="right":e>=0&&t>=0&&s>o||e<0&&t>0&&s>o?a.value="top":e<0&&t>=0&&s<=o||e<0&&t<0&&s<=o?a.value="left":a.value="bottom"};return(f,c)=>(h(),M("div",g,[p("div",{class:m([b(a),"box"]),ref_key:"box",ref:n,onMouseenter:d,onMouseleave:c[0]||(c[0]=i=>a.value=null)},E,34)]))}});const I=x(D,[["__scopeId","data-v-79cff63a"]]);export{I as default};
