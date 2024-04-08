import{l as R,F as G,ad as j,d as A,O as E,N as w,ae as L,g as M,R as b,a9 as T}from"./index-71ff745c.js";import{i as _}from"./Button-03cf1ab5.js";import{a as v,d as S}from"./index-714b5119.js";function F(t,r="default",a=[]){const s=t.$slots[r];return s===void 0?a:s()}function h(t,r=!0,a=[]){return t.forEach(e=>{if(e!==null){if(typeof e!="object"){(typeof e=="string"||typeof e=="number")&&a.push(R(String(e)));return}if(Array.isArray(e)){h(e,r,a);return}if(e.type===G){if(e.children===null)return;Array.isArray(e.children)&&h(e.children,r,a)}else e.type!==j&&a.push(e)}}),a}const I={gapSmall:"4px 8px",gapMedium:"8px 12px",gapLarge:"12px 16px"},O=()=>I,P={name:"Space",self:O},V=P;let y;const W=()=>{if(!_)return!0;if(y===void 0){const t=document.createElement("div");t.style.display="flex",t.style.flexDirection="column",t.style.rowGap="1px",t.appendChild(document.createElement("div")),t.appendChild(document.createElement("div")),document.body.appendChild(t);const r=t.scrollHeight===1;return document.body.removeChild(t),y=r}return y},D=Object.assign(Object.assign({},w.props),{align:String,justify:{type:String,default:"start"},inline:Boolean,vertical:Boolean,size:{type:[String,Number,Array],default:"medium"},wrapItem:{type:Boolean,default:!0},itemStyle:[String,Object],wrap:{type:Boolean,default:!0},internalUseGap:{type:Boolean,default:void 0}}),K=A({name:"Space",props:D,setup(t){const{mergedClsPrefixRef:r,mergedRtlRef:a}=E(t),e=w("Space","-space",void 0,V,t,r),s=L("Space",a,r);return{useGap:W(),rtlEnabled:s,mergedClsPrefix:r,margin:M(()=>{const{size:n}=t;if(Array.isArray(n))return{horizontal:n[0],vertical:n[1]};if(typeof n=="number")return{horizontal:n,vertical:n};const{self:{[T("gap",n)]:d}}=e.value,{row:c,col:u}=v(d);return{horizontal:S(u),vertical:S(c)}})}},render(){const{vertical:t,align:r,inline:a,justify:e,itemStyle:s,margin:n,wrap:d,mergedClsPrefix:c,rtlEnabled:u,useGap:o,wrapItem:$,internalUseGap:z}=this,f=h(F(this));if(!f.length)return null;const x=`${n.horizontal}px`,m=`${n.horizontal/2}px`,B=`${n.vertical}px`,l=`${n.vertical/2}px`,p=f.length-1,g=e.startsWith("space-");return b("div",{role:"none",class:[`${c}-space`,u&&`${c}-space--rtl`],style:{display:a?"inline-flex":"flex",flexDirection:t?"column":"row",justifyContent:["start","end"].includes(e)?"flex-"+e:e,flexWrap:!d||t?"nowrap":"wrap",marginTop:o||t?"":`-${l}`,marginBottom:o||t?"":`-${l}`,alignItems:r,gap:o?`${n.vertical}px ${n.horizontal}px`:""}},!$&&(o||z)?f:f.map((C,i)=>b("div",{role:"none",style:[s,{maxWidth:"100%"},o?"":t?{marginBottom:i!==p?B:""}:u?{marginLeft:g?e==="space-between"&&i===p?"":m:i!==p?x:"",marginRight:g?e==="space-between"&&i===0?"":m:"",paddingTop:l,paddingBottom:l}:{marginRight:g?e==="space-between"&&i===p?"":m:i!==p?x:"",marginLeft:g?e==="space-between"&&i===0?"":m:"",paddingTop:l,paddingBottom:l}]},C)))}});export{K as _,h as f};