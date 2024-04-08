import{_ as xe}from"./beta-webm-1fc2fde4.js";import{d as ye,r as f,g as we,s as he,B as be,h as ge,o as c,c as _,a as s,F as ke,b as Re,C as Ce,y as ne,n as k,u as l,t as V,k as h,q as j,D as le,E as Ue,G as R,l as ie,j as Le,p as Ie,e as ze,_ as De}from"./index-71ff745c.js";import{t as Ee,q as Ve,m as je}from"./ai-b-cf3f840e.js";import{m as Be,p as Fe}from"./pinyin-web-87845f0c.js";import{a as M}from"./axios-4a70c6fc.js";import{l as b}from"./lodash-d2667470.js";import{R as O}from"./mp3-engine-4f57b2c7.js";import{S as C}from"./svg-icon-4f457caa.js";import{H as Pe}from"./hammer-fc5ab476.js";import{b as Te}from"./index-710fd454.js";import{_ as Ae}from"./Button-03cf1ab5.js";import{_ as Ne}from"./Input-84b718ca.js";import"./_commonjsHelpers-87174ba5.js";import"./format-length-c9d165c6.js";import"./index-714b5119.js";const B=U=>(Ie("data-v-c38e2495"),U=U(),ze(),U),$e={class:"ai-voice bg-#e8e8e8 abs-content of-x-hidden"},He={class:"p-15px"},Me=["onClick"],Oe={key:0,class:"flex flex-col items-start"},We={class:"flex-center gap-10px"},qe=["id","src"],Se={key:0,class:"w-100% b-t-solid b-1px b-#fff m-t-10px"},Ge={key:1},Je={key:2},Ke=B(()=>s("div",{style:{color:"#ffffff"},class:"la-ball-spin-clockwise-fade-rotating la-sm"},[s("div"),s("div"),s("div"),s("div"),s("div"),s("div"),s("div"),s("div")],-1)),Qe=[Ke],Xe={class:"w-30px h-30px bg-$color flex text-12px b-rd-50% of-hidden flex-center text-#fff"},Ye={class:"p-x-15px flex items-center gap-10px"},Ze=["onClick"],et={class:"flex-center gap-10px"},tt={key:0,class:"abs-center bg-#38b06d p-15px b-rd-10px flex-center flex-col"},at=B(()=>s("div",{class:"la-line-scale"},[s("div"),s("div"),s("div"),s("div"),s("div")],-1)),st=B(()=>s("div",{class:"text-12px text-#fff"},"松开发送",-1)),ot=[at,st],nt=["src"],lt=B(()=>s("div",{class:"text-14px"},"打招呼",-1)),it=ye({__name:"ai-voice-digital-man",setup(U){const{toggle:W}=Te(),F=f(),x=f(!0),L=f(!1),r=f(!1),q=f(),y=f(""),ce=we(()=>y.value.length===0||r.value),w=f([]),d=f(),u=f(),re=()=>{r.value=!1,w.value.pop()},P=f(null),S=b.debounce(async()=>{const t=y.value;w.value.push({content:t,type:"text",isSelf:!0}),w.value.push({type:"loading",isSelf:!1}),y.value="";try{r.value=!0;const{data:e}=await M({method:"post",baseURL:P.value,url:"/v1/chat/completions",data:{model:"chatglm3-6b",messages:[{content:"你是智加信息科技有限公司的AI助手！",role:"system"},{content:t,role:"user"}]}});r.value&&(w.value.pop(),await Promise.all(b.get(e,"choices",[]).forEach(async a=>{w.value.push({content:b.get(a,"message.content"),type:"text",isSelf:!1}),await $(b.get(a,"message.content"),async i=>{var n,o;await((n=d.value)==null?void 0:n.call(d,1,11,i)),await((o=u.value)==null?void 0:o.call(u,2.9,null,0))})}))),r.value=!1}catch{r.value=!1}},300),de=async t=>{try{r.value=!0;const e=new FormData;e.append("model","large-v3");const a=new File([t.blob],"audio.mp3",{type:"audio/mp3"});e.append("file",a),t.url=URL.createObjectURL(a),w.value.push(t);const{data:i}=await M({method:"post",baseURL:P.value,url:"/v1/audio/transcriptions",data:e});console.clear();const n=Fe(i.text,{style:"NORMAL"}).map(v=>v[0]).join("");console.log(i.text,n);const o=/xiao(zhi|zi)/;r.value&&o.test(n)&&(y.value=i.text.substring(2),await S()),r.value=!1}catch(e){console.error(e),r.value=!1}};let p,I,G=performance.now(),z=!1,T=!1;const ue=t=>{p=O({type:"mp3",sampleRate:16e3,bitRate:16,onProcess:async function(e,a,i,n,o,v){I&&I.input(e[e.length-1],a,n),T||(!z&&Math.max.apply(null,e.at(-1))>1e3?(G=performance.now(),z=!0):z&&performance.now()-G>3e3&&(T=!0,await J(),await A(),T=!1,z=!1))}}),p.open(async function(){A(),O.WaveView&&(I=O.WaveView({elem:".recwave"})),t&&(t==null||t())},function(e,a){console.log((a?"UserNotAllow，":"")+"无法录音:"+e)})};async function A(){p.start()}async function J(){return new Promise(t=>{p.stop(async function(e,a){var i=(window.URL||webkitURL).createObjectURL(e);await de({url:i,time:a,blob:e,type:"audio",isSelf:!0}),t()},function(e){alert(e),console.log("录音失败:"+e),t()})})}const fe=async t=>{var e,a;(a=(e=document.getElementById(t))==null?void 0:e.play)==null||a.call(e)},g=f(),K=async()=>{F.value&&(g.value&&g.value.destroy(),g.value=new Pe(F.value),g.value.on("press",()=>{L.value=!0,A()}),g.value.on("pressup",()=>{L.value=!1,J()}))},Q=async()=>{await Ue(),ue(()=>{}),K()};he(()=>{!p&&x.value?Q():x.value&&K()}),be(()=>{var t;(t=p==null?void 0:p.close)==null||t.call(p),p=null,I=null,L.value=!1});const pe=Ee({similarity:.4,smoothness:.05,spill:.05}),X=async(t,e,a)=>{const i=await fetch(a||Be),n=new Ve(i.body);await n.ready;async function o(v=0,D,ve){const te=await n.getInfo(),me=Number((te.duration/te.timescale).toFixed(0));typeof D!="number"&&(D=me);const ae=D-v,_e=(ve||ae)*1e3,se=async H=>{const E=await n.getVideoFrame(v+ae*H);if(E){e.clearRect(0,0,e.canvas.width,e.canvas.height);const m=await pe(E);e.drawImage(m,0,0,m.codedWidth,m.codedHeight,(e.canvas.width-m.codedWidth)/2,e.canvas.height-m.codedHeight,m.codedWidth,m.codedHeight)}};return new Promise(H=>{const E=performance.now();(async function m(){const oe=(performance.now()-E)/_e;if(oe>1){await se(1),H();return}await se(oe),requestAnimationFrame(m)})()})}return o},Y=b.debounce(async(t,e)=>{var a;t.width=window.innerWidth*window.devicePixelRatio,t.height=window.innerHeight*window.devicePixelRatio,u.value=await X(t,e,je),d.value=await X(t,e),await((a=u.value)==null?void 0:a.call(u,2.9,null,0))},300),N=f([]),$=async(t,e)=>{N.value.forEach(n=>{n.pause(),n.remove()}),N.value=[];const a=document.createElement("audio");N.value.push(a),a.autoplay=!0,a.addEventListener("loadedmetadata",async()=>{var n;e?await e(a.duration,a):await((n=d.value)==null?void 0:n.call(d,null,null,a.duration))});const{data:i}=await M({baseURL:P.value,method:"post",url:"/v1/audio/speech",responseType:"blob",data:{input:t,voice:"3559"}});a.src=URL.createObjectURL(i)},Z=f(!1),ee=b.debounce(async()=>{await $("大家好；我是智加小智；很高兴与大家见面；大家可以叫我小智来与我对话；比如，小智介绍自己。",async t=>{var e,a;await((e=d.value)==null?void 0:e.call(d,12,17,t)),Z.value?await((a=u.value)==null?void 0:a.call(u,2.9,null,0)):await $("与此同时小智在此提前祝大家新年快乐",async i=>{var n,o;await((n=d.value)==null?void 0:n.call(d,18,21,i)),await((o=u.value)==null?void 0:o.call(u,2.9,null,0)),Z.value=!0})})},300);return ge(async()=>{Q();const t=q.value,e=t.getContext("2d");Y(t,e),window.addEventListener("resize",()=>{Y(t,e)})}),(t,e)=>{const a=Ae,i=Ne,n=xe;return c(),_("div",$e,[s("div",He,[(c(!0),_(ke,null,Re(l(w),(o,v)=>(c(),_("div",{key:v,style:Ce({"--color":o.isSelf?"#3ab370":"cadetblue"})},[s("div",{class:ne(["m-b-10px flex items-center gap-10px justify-end flex-shrink-0",{"flex-row-reverse":!o.isSelf}])},[s("div",{class:ne(["flex-1 flex justify-end",{"flex-row-reverse":!o.isSelf}])},[s("div",{class:"bg-$color b-rd-10px p-10px b-1px b-solid b-#fff text-#fff",onClick:D=>fe(`audio${v}`)},[o.type==="audio"?(c(),_("div",Oe,[s("div",We,[k(l(C),{name:"yuyin"}),s("audio",{controls:"",ref_for:!0,ref:"audio",id:`audio${v}`,hidden:"",src:o.url},null,8,qe),s("div",null,V((o.time/1e3).toFixed(1))+"s",1)]),o.content?(c(),_("div",Se,V(o.content),1)):h("",!0)])):h("",!0),o.type==="text"?(c(),_("div",Ge,[s("div",null,V(o.content),1)])):h("",!0),o.type==="loading"?(c(),_("div",Je,Qe)):h("",!0)],8,Me)],2),s("div",Xe,V(o.isSelf?"我":"对方"),1)],2)],4))),128))]),k(n,null,{default:j(()=>[s("div",Ye,[s("div",{onClick:e[0]||(e[0]=o=>x.value=!l(x)),class:"w-30px h-30px flex-center b-1px b-solid b-#38b06d text-#38b06d b-rd-50% text-18px flex-shrink-0"},[l(x)?(c(),R(l(C),{key:0,name:"jianpan"})):(c(),R(l(C),{key:1,name:"yuyin"}))]),l(x)?(c(),_("div",{key:0,ref_key:"voiceBtnRef",ref:F,class:"flex-1 touch-callout select-none",onClick:le(o=>{},["stop","prevent"])},[k(a,{class:"flex-1 w-100% select-none",disabled:l(r)},{default:j(()=>[ie("按住说话")]),_:1},8,["disabled"])],8,Ze)):(c(),R(i,{key:1,class:"flex-1",clearable:"",type:"textarea",autosize:"",value:l(y),"onUpdate:value":e[1]||(e[1]=o=>Le(y)?y.value=o:null),placeholder:"请输入"},null,8,["value"])),s("div",et,[!l(x)&&!l(r)?(c(),R(a,{key:0,type:"primary",onClick:l(S),disabled:l(ce)},{default:j(()=>[ie("发送")]),_:1},8,["onClick","disabled"])):h("",!0),l(r)?(c(),R(a,{key:1,class:"text-28px",type:"default",onClick:re},{default:j(()=>[k(l(C),{name:"stop"})]),_:1})):h("",!0)])])]),_:1}),l(L)?(c(),_("div",tt,ot)):h("",!0),s("div",{class:"abs-content z-1",onClick:e[3]||(e[3]=(...o)=>l(W)&&l(W)(...o))},[s("img",{class:"abs-content",src:"./ai-bg2.jpeg",alt:""},null,8,nt),s("canvas",{class:"abs-content",ref_key:"convasRef",ref:q},null,512),s("div",{class:"abs-end-bottom rigth-30px bottom-30px flex-center flex-col bg-#fff5 p-15px b-rd-y-10px cursor-pointer text-50px",onClick:e[2]||(e[2]=le((...o)=>l(ee)&&l(ee)(...o),["stop"]))},[k(l(C),{name:"dazhaohu","not-fill":""}),lt])])])}}});const kt=De(it,[["__scopeId","data-v-c38e2495"]]);export{kt as default};