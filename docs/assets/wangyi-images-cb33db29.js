import{d as x,r as E,g as P,s as R,h as V,o as O,c as A,a as D,B as L,u as T,x as n,_ as B}from"./index-ee812f84.js";import{s as b}from"./index-1159d8e2.js";import{h as k,i as C,b as z}from"./index-fc4fb02a.js";const M={class:"wangyi-images"},S=x({__name:"wangyi-images",setup(N){const u=E(),l=E("500px");k(()=>({index:l.value})),C(u,()=>{l.value=u.value.style.getPropertyValue("--index")},{attributes:!0});const I=P(()=>+l.value.replace("px","")),m=async(s,e,o,r,d,h,t,i,p=2e4)=>{await b(a=>{s.clearRect(0,0,e.width,e.height);const c=d*(1-a),_=h*(1-a),w=o.width*a+t*(1-a),g=o.height*a+i*(1-a);s.drawImage(o,c,_,w,g,0,0,e.width,e.height),s.drawImage(r,0,0,r.width,r.height,e.width/w*(d-c),e.height/g*(h-_),e.width/w*t,e.height/g*i)},p)},{width:v,height:f}=z(),y=async()=>{const[s,e,o,r,d,h]=await Promise.all([n(()=>import("./1-7524eeb5.js"),[],import.meta.url),n(()=>import("./2-91923a84.js"),[],import.meta.url),n(()=>import("./3-71c30c60.js"),[],import.meta.url),n(()=>import("./4-382e8c5e.js"),[],import.meta.url),n(()=>import("./5-ead18023.js"),[],import.meta.url),n(()=>import("./6-2d1e904b.js"),[],import.meta.url)]).then(p=>Promise.all(p.map(a=>new Promise(c=>{const _=new Image;_.src=a.default,_.onload=()=>{c(_)}})))),t=u.value;t.width=v.value,t.height=f.value;const i=t.getContext("2d");await m(i,t,r,d,370,1067,152,244),await m(i,t,o,r,1251,1048,599,898),await m(i,t,e,o,108,898,167,267),await m(i,t,s,e,83,1401,197,317)};return R(async()=>{v.value,f.value,await y()}),V(y),(s,e)=>(O(),A("div",M,[D("canvas",{ref_key:"canvasRef",ref:u,style:L({"--index":T(I)})},null,4)]))}});const F=B(S,[["__scopeId","data-v-4ac005a6"]]);export{F as default};