import{l as r}from"./lodash-7072a007.js";import{a as m}from"./index-e06c0445.js";import{d as y,r as p,g as f,o as c,c as d,a as s,t as _,u,F as h,b as g,p as x,e as b,_ as k}from"./index-04c26d2f.js";import"./_commonjsHelpers-edff4021.js";const S=o=>(x("data-v-05af2755"),o=o(),b(),o),B={class:"a w-300px m-x-auto m-t-15 b b-solid b-#d8d8d8 b-rd-15px p-15px"},C=S(()=>s("div",null,"其他内容",-1)),I=y({__name:"a",setup(o){const e=p(null),t=p();m(e,r.debounce(n=>{t.value=e.value.style.display==="none"},100));const v=f(()=>t.value?"展开":"折叠"),i=r.throttle(async()=>{const n=parseFloat(getComputedStyle(e.value)["transition-duration"])*1e3;t.value&&(e.value.style.display="block",e.value.style.height="auto");const{height:a}=e.value.getBoundingClientRect();e.value.style.height=`${t.value?0:a}px`,e.value.clientTop,e.value.style.height=`${t.value?a:0}px`,setTimeout(()=>{e.value.style.display=t.value?"block":"none"},n)},300);return(n,a)=>(c(),d("div",B,[s("button",{onClick:a[0]||(a[0]=(...l)=>u(i)&&u(i)(...l)),class:"w-100%"},_(u(v)),1),s("div",{ref_key:"aa",ref:e,class:"aa"},[(c(),d(h,null,g(8,l=>s("div",{key:l},[s("div",null,_(l),1)])),64))],512),C]))}});const R=k(I,[["__scopeId","data-v-05af2755"]]);export{R as default};
