import{d as w,r as a,g as m,s as F,o as r,c as o,a as u,F as i,b as f,B as S,u as e,t as x,l as k,A as B,_ as N}from"./index-bfc7e514.js";import{s as D}from"./index-1159d8e2.js";import{l as _}from"./lodash-7072a007.js";import"./_commonjsHelpers-edff4021.js";const E={class:"flex gap-5px"},V=w({__name:"number",setup(A){B(t=>({"70f20c20":e(b)}));const v=a(),s=a(0),p=m(()=>s.value.toString().length),b=a(.2),l=a("0"),c=m(()=>l.value.toString().split("")),g=_.debounce(()=>{l.value="0",D(t=>{l.value=(t*s.value).toFixed(3).padStart(p.value,"0")},1e3)});F(()=>{s.value,g()}),setInterval(()=>{s.value=Number(_.random(0,10,!0).toFixed(3))},1500);const y=Date.now(),d=a("0");return function t(){d.value=((Date.now()-y)/1e3).toFixed(2),requestAnimationFrame(t)}(),(t,C)=>(r(),o("div",{class:"number w-500px m-x-auto m-t-15 b b-solid b-#d8d8d8 b-rd-15px p-15px",ref_key:"a",ref:v},[u("div",E,[(r(!0),o(i,null,f(e(p),n=>(r(),o("div",{class:"flex flex-col w-50px h-50px of-hidden",key:n},[u("div",{class:"aaa bg-#f00",style:S({transform:e(c)[n-1]==="."?null:`translateY(-${Number(e(c)[n-1])*50}px)`})},[(r(),o(i,null,f(10,h=>u("span",{class:"w-50px h-50px flex justify-center items-center text-30px text-#fff",key:h},x(e(c)[n-1]),1)),64))],4)]))),128))]),k(" "+x(e(d)),1)],512))}});const L=N(V,[["__scopeId","data-v-ac005a21"]]);export{L as default};