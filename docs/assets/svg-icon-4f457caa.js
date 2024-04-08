import{J as g,K as y,L as p,M as d,N as _,d as u,O as b,g as m,P as E,Q as P,R as c,S as D,x as a,T as R}from"./index-71ff745c.js";import{f as I}from"./format-length-c9d165c6.js";const O=e=>{const{textColorBase:o,opacity1:t,opacity2:i,opacity3:n,opacity4:s,opacity5:r}=e;return{color:o,opacity1Depth:t,opacity2Depth:i,opacity3Depth:n,opacity4Depth:s,opacity5Depth:r}},L={name:"Icon",common:g,self:O},T=L,C=y("icon",`
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
 transform: translateZ(0);
`,[p("color-transition",{transition:"color .3s var(--n-bezier)"}),p("depth",{color:"var(--n-color)"},[d("svg",{opacity:"var(--n-opacity)",transition:"opacity .3s var(--n-bezier)"})]),d("svg",{height:"1em",width:"1em"})]),S=Object.assign(Object.assign({},_.props),{depth:[String,Number],size:[Number,String],color:String,component:Object}),V=u({_n_icon__:!0,name:"Icon",inheritAttrs:!1,props:S,setup(e){const{mergedClsPrefixRef:o,inlineThemeDisabled:t}=b(e),i=_("Icon","-icon",C,T,e,o),n=m(()=>{const{depth:r}=e,{common:{cubicBezierEaseInOut:l},self:v}=i.value;if(r!==void 0){const{color:h,[`opacity${r}Depth`]:f}=v;return{"--n-bezier":l,"--n-color":h,"--n-opacity":f}}return{"--n-bezier":l,"--n-color":"","--n-opacity":""}}),s=t?E("icon",m(()=>`${e.depth||"d"}`),n,e):void 0;return{mergedClsPrefix:o,mergedStyle:m(()=>{const{size:r,color:l}=e;return{fontSize:I(r),color:l}}),cssVars:t?void 0:n,themeClass:s==null?void 0:s.themeClass,onRender:s==null?void 0:s.onRender}},render(){var e;const{$parent:o,depth:t,mergedClsPrefix:i,component:n,onRender:s,themeClass:r}=this;return!((e=o==null?void 0:o.$options)===null||e===void 0)&&e._n_icon__&&P("icon","don't wrap `n-icon` inside `n-icon`"),s==null||s(),c("i",D(this.$attrs,{role:"img",class:[`${i}-icon`,r,{[`${i}-icon--depth`]:t,[`${i}-icon--color-transition`]:t!==void 0}],style:[this.cssVars,this.mergedStyle]}),n?c(n):this.$slots)}}),$=(e,o)=>{const t=e[o];return t?typeof t=="function"?t():Promise.resolve(t):new Promise((i,n)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(n.bind(null,new Error("Unknown variable dynamic import: "+o)))})},w=u({inheritAttrs:!1,props:{name:{type:String},iconProps:{type:Object,default:()=>({})},notFill:{type:Boolean,default:!1}},setup({name:e,iconProps:o,notFill:t},{attrs:i}){return()=>c(R,c(u({async setup(){try{const n=(await $(Object.assign({"../assets/icons/bainian.svg":()=>a(()=>import("./bainian-1a7bb86f.js"),[],import.meta.url),"../assets/icons/dazhaohu.svg":()=>a(()=>import("./dazhaohu-04df8369.js"),[],import.meta.url),"../assets/icons/fu.svg":()=>a(()=>import("./fu-e88637f5.js"),[],import.meta.url),"../assets/icons/jianpan.svg":()=>a(()=>import("./jianpan-cb71557f.js"),[],import.meta.url),"../assets/icons/quanping.svg":()=>a(()=>import("./quanping-edd1e73b.js"),[],import.meta.url),"../assets/icons/stop.svg":()=>a(()=>import("./stop-3321de75.js"),[],import.meta.url),"../assets/icons/yinyue.svg":()=>a(()=>import("./yinyue-8fd466d3.js"),[],import.meta.url),"../assets/icons/yuyin.svg":()=>a(()=>import("./yuyin-0f903080.js"),[],import.meta.url)}),`../assets/icons/${e}.svg`)).default;return()=>c(V,{innerHTML:n,...i,...o,class:{flex:!0,"justify-center":!0,"items-center":!0,"svg-icon-fill":!t,...typeof i.class=="string"?{[i.class]:!0}:i.class}})}catch{return()=>{}}}})))}});export{w as S};