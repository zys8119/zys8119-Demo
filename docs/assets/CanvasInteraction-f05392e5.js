var lt=Object.defineProperty;var ht=(h,c,C)=>c in h?lt(h,c,{enumerable:!0,configurable:!0,writable:!0,value:C}):h[c]=C;var b=(h,c,C)=>(ht(h,typeof c!="symbol"?c+"":c,C),C);import{H as K}from"./hammer-fc5ab476.js";import{af as rt,U as ot,ag as ut,d as ct,r as P,g as H,s as vt,w as ft,h as gt,n as U,ah as dt}from"./index-71ff745c.js";import{d as wt,f as pt,u as mt}from"./index-710fd454.js";const D=ut(),G=rt({});D.use(G);const{cB:yt,cE:It}=G,{c:zt}=D,St=yt("CanvasInteraction",[zt("canvas",{cursor:"default",border:"1px ",position:"absolute",left:0,top:0,width:"100%",height:"100%"})]),kt=ot();St.mount({id:"CanvasInteraction",ssr:kt});const Bt=ct({emits:{load:()=>!0,pen:h=>!0,penStart:(h,c)=>!0,penMove:(h,c)=>!0,penEnd:(h,c)=>!0,leave:h=>!0,enter:h=>!0},props:{gap:{type:Number,default:10},gapLineWidth:{type:Number,default:2},showHelp:{type:Boolean,default:!0},width:{type:Number,default:null},height:{type:Number,default:null}},setup(h,{emit:c}){const C=dt(),N=P(),o=H(()=>N.value),u=H(()=>o.value.getContext("2d")),{width:O,height:V}=wt(),R=P([]),{x:F,y:T}=pt(o.value),{Shift:x,Alt:W,Shift_keyX:J,Space:$,Shift_keyY:Q}=mt({onEventFired(a){console.log(a.code,5555)}}),_=P([0,0]),M=P(1),L=P(!1),A=P(null);(async()=>{const e=`data:image/svg+xml;base64,${btoa(`<svg t="1682039044848" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2655" data-spm-anchor-id="a313x.7781069.0.i1" width="200" height="200">
                <path d="M924 192c-19.8 0-36 16.2-36 36v40.3c-17-26.2-36.8-50.6-59.2-73.1-41.1-41.1-89-73.4-142.4-96C631.1 75.9 572.5 64 512 64S392.9 75.9 337.6 99.2c-53.4 22.6-101.3 54.9-142.4 96s-73.4 89-96 142.4C75.9 392.9 64 451.5 64 512s11.9 119.1 35.2 174.4c22.6 53.4 54.9 101.3 96 142.4 41.1 41.1 89 73.4 142.4 96C392.9 948.1 451.5 960 512 960c76.4 0 151.9-19.6 218.2-56.6 64.3-35.9 119.3-87.6 159.1-149.6 10.3-16.1 5.7-37.5-10.4-47.8-16.1-10.3-37.5-5.7-47.8 10.4-33.7 52.5-80.2 96.2-134.6 126.6-56 31.3-119.8 47.8-184.4 47.8-51.2 0-100.8-10-147.4-29.8-45.1-19.1-85.6-46.4-120.4-81.2C209.4 745 182 704.5 163 659.4c-19.7-46.7-29.8-96.3-29.8-147.4 0-51.2 10-100.8 29.8-147.4 19.1-45.1 46.4-85.6 81.2-120.4C279 209.4 319.5 182 364.6 163c46.7-19.7 96.3-29.8 147.4-29.8 51.2 0 100.8 10 147.4 29.8 45.1 19.1 85.6 46.4 120.4 81.2C814.6 279 842 319.5 861 364.6c13.7 32.5 22.7 66.3 27 101.2V516c0 19.8 16.2 36 36 36s36-16.2 36-36V228c0-19.8-16.2-36-36-36z" fill="#ffffff" p-id="2656"></path>
<!--                <path d="M235.7 457.2c0-5.3 4.9-9.9 11.5-10.6 17.6-1.9 17.1-3 24.8-6.6 7.8-3.6 15.2-13 19.7-24.8 1.7-4.5 6.8-7.6 12.6-7.6h8.4c7.3 0 13.3 4.8 13.3 10.7v187.5c0 5.9-5.9 10.7-13.3 10.7h-14.4c-7.3 0-13.3-4.8-13.3-10.7V478.6c0-5.9-5.9-10.7-13.3-10.7H249c-7.3 0-13.3-4.8-13.3-10.7zM390.4 491.4c-7.7-7.8-11.6-18-11.6-30.5 0-15.6 5.7-29.1 17-40.3 11.3-11.2 27.4-16.8 48.1-16.8 20.1 0 35.8 5.3 47.3 15.9 11.4 10.6 17.1 23 17.1 37.1 0 13.1-3.3 23.7-10 31.8-3.7 4.6-9.5 9.1-17.3 13.5 8.7 4 15.6 8.6 20.6 13.8 9.3 9.8 14 22.5 14 38.1 0 18.5-6.2 34.1-18.6 46.9-12.4 12.8-29.9 19.3-52.6 19.3-20.4 0-37.7-5.5-51.8-16.6-14.1-11.1-21.2-27.2-21.2-48.3 0-12.4 3-23.1 9.1-32.2 6.1-9 15-15.9 27-20.7-7.3-3.1-13-6.8-17.1-11z m79.8 89.7c6.7-5.5 10.1-13.7 10.1-24.5 0-11.3-3.5-19.9-10.4-25.7-6.9-5.8-15.8-8.8-26.6-8.8-10.5 0-19 3-25.6 9-6.6 6-9.9 14.2-9.9 24.8 0 9.1 3 17 9.1 23.6 6 6.6 15.4 9.9 28.1 9.9 10 0 18.5-2.8 25.2-8.3zM463.9 477c4.9-4.9 7.4-10.8 7.4-17.5 0-5.9-2.4-11.3-7.1-16.3-4.7-4.9-11.9-7.4-21.5-7.4s-16.5 2.5-20.7 7.4c-4.3 4.9-6.4 10.7-6.4 17.4 0 7.5 2.8 13.3 8.3 17.5 5.5 4.2 12 6.3 19.5 6.3 8.7 0 15.6-2.5 20.5-7.4zM668.7 437.8c9.4 17.3 14.1 41 14.1 71 0 28.5-4.2 52.1-12.7 70.8-12.3 26.8-32.4 40.1-60.4 40.1-25.2 0-43.9-10.9-56.2-32.8-10.3-18.3-15.4-42.8-15.4-73.5 0-23.8 3.1-44.3 9.2-61.4 11.5-31.8 32.4-47.8 62.5-47.8 27.2 0.1 46.8 11.2 58.9 33.6z m-32.4 127.6c6.6-9.9 9.9-28.3 9.9-55.2 0-19.4-2.4-35.4-7.2-47.9-4.8-12.5-14.1-18.8-27.9-18.8-12.7 0-22 6-27.8 17.9-5.9 11.9-8.8 29.4-8.8 52.6 0 17.4 1.9 31.4 5.6 42 5.7 16.2 15.6 24.2 29.4 24.2 11.3 0 20.2-4.9 26.8-14.8zM787.5 417.2c8.5 8.5 12.7 19 12.7 31.3 0 12.7-4.4 23.3-13.3 31.7-8.8 8.4-19.1 12.7-30.8 12.7-13 0-23.6-4.4-31.9-13.2-8.3-8.8-12.5-19-12.5-30.8 0-12.5 4.4-23 13.1-31.6 8.7-8.6 19.2-12.9 31.3-12.9 12.5 0 22.9 4.3 31.4 12.8z m-45.3 45.2c3.9 3.9 8.5 5.8 13.9 5.8 5.2 0 9.8-1.9 13.6-5.7 3.9-3.8 5.8-8.5 5.8-13.9 0-5.3-1.9-9.8-5.7-13.7-3.8-3.9-8.4-5.8-13.7-5.8-5.3 0-10 1.9-13.8 5.7-3.9 3.8-5.8 8.5-5.8 13.9 0 5.3 1.9 9.9 5.7 13.7z" fill="#ffffff" p-id="2657"></path>-->
            </svg>`)}`,s=await new Promise(t=>{const i=new Image;i.src=e,i.onload=()=>{t(i)}});A.value=s})(),vt(()=>{o.value&&(o.value.width=h.width||O.value,o.value.height=h.height||V.value)});const Z=H(()=>({top_left:{cursor:"nwse-resize"},top_center:{cursor:"ns-resize"},top_right:{cursor:"nesw-resize"},bottom_left:{cursor:"nesw-resize"},bottom_center:{cursor:"ns-resize"},bottom_right:{cursor:"nwse-resize"},left_center:{cursor:"ew-resize"},right_center:{cursor:"ew-resize"},content:{cursor:W.value?"ns-resize":"move"},blank:{cursor:W.value?"ns-resize":"pointer"}}));class E{constructor(e=0,s=0,t,i){b(this,"visible",!0);b(this,"rotationAngle",0);this.x=e,this.y=s,this.w=t,this.h=i}mousePointCalc(e,s){const t=(F.value-_.value[0])/(o.value.width*M.value)*o.value.width,i=(T.value-_.value[1])/(o.value.height*M.value)*o.value.height,n=t-this.centerX,r=this.centerY-i,w=e*Math.PI/180,y=s?n*Math.cos(w)+r*Math.sin(w):n*Math.cos(w)-r*Math.sin(w),X=s?r*Math.cos(w)-n*Math.sin(w):r*Math.cos(w)+n*Math.sin(w);return[y+this.centerX,this.centerY-X]}get mousePoint(){return this.mousePointCalc(this.rotationAngle,!1)}isInside(){if(this.visible&&this.w&&this.h){const e=this.mousePoint[0]-this.x,s=this.mousePoint[1]-this.y;return e>-this.gapSizeBlank&&e<this.w+this.gapSizeBlank&&s>-this.gapSizeBlank&&s<this.h+this.gapSizeBlank}return!1}get gapSize(){return h.gap+h.gapLineWidth*2}get gapSizeBlank(){return this.gapSize*1.5}get width(){return this.w}get height(){return this.h}get left(){return this.x}get top(){return this.y}get centerX(){return this.x+this.w/2}get centerY(){return this.y+this.h/2}get position(){const e=this.mousePoint[0]-this.x,s=this.mousePoint[1]-this.y,t=s>=-this.gapSizeBlank&&s<=this.gapSize-this.gapSizeBlank,i=s>=this.height+this.gapSize*.5&&s<=this.height+this.gapSizeBlank,n=e>=-this.gapSizeBlank&&e<=this.gapSize-this.gapSizeBlank,r=e>=this.width+this.gapSize*.5&&e<=this.width+this.gapSize*1.5,w=e>=this.width/2-this.gapSize*.5&&e<=this.width/2+this.gapSize*.5,y=s>=this.height/2-this.gapSize*.5&&s<=this.height/2+this.gapSize*.5;return n&&t?"top_left":w&&t?"top_center":r&&t?"top_right":n&&i?"bottom_left":w&&i?"bottom_center":r&&i?"bottom_right":n&&y?"left_center":r&&y?"right_center":e>0&&e<this.w&&s>0&&s<this.h?"content":"blank"}async drawRotation(e,s){if(!A.value||!W.value)return;let t=this.width*.3;this.height<this.width&&(t=this.height*.3),e.drawImage(A.value,0,0,A.value.width,A.value.height,this.centerX-t/2,this.centerY-t/2,t,t),e.font=`${t*.3}px  bold`,e.textAlign="center",e.textBaseline="middle",e.save(),e.translate(this.centerX,this.centerY),e.rotate(-Math.PI/180*this.rotationAngle),e.translate(-this.centerX,-this.centerY),e.fillText(`${this.rotationAngle}°`,this.centerX,this.centerY),e.restore()}}class j extends E{constructor(s,t,i,n,r){super(t,i,n,r);b(this,"type","rect");this.color=s,this.x=t,this.y=i,this.w=n,this.h=r}async draw(s){s.fillStyle=this.color,s.fillRect(this.x,this.y,this.w,this.h)}}class tt extends E{constructor(s,t,i,n,r,w,y,X,v){super(t,i,n,r);b(this,"type","image");this.src=s,this.x=t,this.y=i,this.w=n,this.h=r,this.dx=w,this.dy=y,this.dw=X,this.dh=v}async draw(s,t){this.image||(typeof this.src=="string"?this.image=await new Promise((i,n)=>{const r=new Image;r.src=this.src,r.onload=()=>{i(r)},r.onerror=n}):this.image=this.src),this.w&&this.h&&this.dx&&this.dy&&this.dw&&this.dh?s.drawImage(this.image,this.x,this.y,this.w,this.h,this.dx,this.dy,this.dw,this.dh):this.w&&this.h?s.drawImage(this.image,this.x,this.y,this.w,this.h):s.drawImage(this.image,this.x,this.y)}isInside(){const s=this.mousePoint[0]-(this.dx||this.x),t=this.mousePoint[1]-(this.dy||this.y);return s>-this.gapSizeBlank&&s<(this.dw||this.w)+this.gapSizeBlank&&t>-this.gapSizeBlank&&t<(this.dh||this.h)+this.gapSizeBlank}panstart(s){return this.dx&&this.dy?["dx","dy"]:["x","y"]}panmove(s){return this.dx&&this.dy?["dx","dy"]:["x","y"]}}const et=async()=>{var a,e;await((e=(a=C.vnode.props).onLoad)==null?void 0:e.call(a,{ObjectsClass:{Rect:j,Image:tt},ObjectBase:E,scene:R.value,sceneRef:R,x:F,y:T,width:O,height:V,canvas:o.value,ctx:u.value,vm:C})),await it()},Y=H(()=>{let a=null;if(L.value)return Y.value;for(let e=R.value.length-1,s=e;s>=0;s--)if(R.value[s].isInside()){a=R.value[s];break}return a});ft(Y,(a,e)=>{a&&a!==e?(c("leave",e),c("enter",a)):c("leave",e)});const st=H(()=>{var a;return{cursor:h.showHelp&&Y.value?(a=Z.value[Y.value.position])==null?void 0:a.cursor:null}}),I=(a,e,s,t)=>{let i=1;return a>s?i=s/a:e>t?i=t/e:s>a?i=s/a:i=t/e,i},it=async()=>{const a=new K(o.value);let e=0,s=0,t=0,i=0,n=null,r=null,w=0,y=[0,0];K.on(o.value,"wheel, mousewheel",function(X){M.value+=X.deltaY*-.001,M.value=Math.min(Math.max(.125,M.value),4)}),a.get("pan").set({enable(X,v){var q;if(c("pen",v),v){const[p,f]=[v.deltaX/(M.value*o.value.width)*o.value.width,v.deltaY/(M.value*o.value.height)*o.value.height];if(v.isFirst){if(L.value=!0,n=Y.value,y=_.value,n){if(n!=null&&n.panstart){const[g,d]=(q=n.panstart)==null?void 0:q.call(n,v);e=n[g],s=n[d]}else e=n.x,s=n.y;t=n.w,i=n.h,w=n.rotationAngle,r=n.position}c("penStart",n,v)}else if(v.isFinal)n=null,r=null,L.value=!1,$.value&&(_.value=[y[0]+v.deltaX,y[1]+v.deltaY]),c("penEnd",n,v);else{if($.value)_.value=[y[0]+v.deltaX,y[1]+v.deltaY];else if(n){let g=t,d=i,z=e,S=s;switch(r){case"top_left":if(x.value){const l=I(t,i,t-p,i-f);g=t*l,d=i*l,z=e+t*(1-l),S=s+i*(1-l)}else z=e+p,S=s+f,g=t-p,d=i-f;break;case"top_center":if(x.value){const l=i-f,m=t*(l/i),k=I(t,i,m,l);g=t*k,d=i*k,z=e+(t-m)/2,S=s+i-l}else S=s+f,d=i-f;break;case"top_right":if(x.value){const l=I(t,i,t+p,i-f);g=t*l,d=i*l,S=s+i*(1-l)}else S=s+f,g=t+p,d=i-f;break;case"right_center":if(x.value){const l=t+p,m=i*(l/t),k=I(t,i,l,m);g=t*k,d=i*k,S=s+(i-m)/2}else g=t+p;break;case"bottom_right":if(x.value){const l=I(t,i,t+p,i+f);g=t*l,d=i*l}else g=t+p,d=i+f;break;case"bottom_center":if(x.value){const l=i+f,m=t*(l/i),k=I(t,i,m,l);g=t*k,d=i*k,z=e+(t-m)/2}else d=i+f;break;case"bottom_left":if(x.value){const l=I(t,i,t-p,i+f);g=t*l,d=i*l,z=e+t*(1-l)}else z=e+p,g=t-p,d=i+f;break;case"left_center":if(x.value){const l=t-p,m=i*(l/t),k=I(t,i,l,m);g=t*k,d=i*k,z=e+(t-l),S=s+(i-m)/2}else z=e+p,g=t-p;break;default:["blank","content"].includes(r)&&(W.value?x.value?n.rotationAngle=(w+(Math.fround(v.deltaY%50)+1)*15)%360:n.rotationAngle=(w+f)%360:J.value?z=e+p:(Q.value||(z=e+p),S=s+f));break}if(g>0&&d>0){if(n.panmove){const[l,m]=n.panmove(v);n[l]=z,n[m]=S}else n.x=z,n.y=S;n.w=g,n.h=d}}c("penMove",n,v)}}return!0}})},B=async(a,e)=>{const s=h.gap/2;u.value.fillStyle="#ffffff",u.value.fillRect(a-s,e-s,h.gap,h.gap),u.value.strokeRect(a-s,e-s,h.gap,h.gap)},at=async a=>{const e=h.gap+h.gapLineWidth;u.value.strokeStyle="#f00",u.value.lineWidth=h.gapLineWidth,u.value.strokeRect(a.left-e,a.top-e,a.width+e*2,a.height+e*2),await B(a.left-e,a.top-e),await B(a.left+a.width/2,a.top-e),await B(a.left+a.width+e,a.top-e),await B(a.left+a.width+e,a.top+a.height/2),await B(a.left+a.width+e,a.top+a.height+e),await B(a.left+a.width/2,a.top+a.height+e),await B(a.left-e,a.top+a.height+e),await B(a.left-e,a.top+a.height/2)},nt=async()=>{await et(),await async function a(){var s;u.value.save(),u.value.clearRect(0,0,o.value.width,o.value.height),u.value.translate(_.value[0],_.value[1]),u.value.scale(M.value,M.value);let e=0;for(;e<R.value.length;){const t=R.value[e];t&&t.visible&&(u.value.save(),u.value.translate(t.centerX,t.centerY),u.value.rotate(Math.PI/180*(t.rotationAngle||0)),u.value.translate(-t.centerX,-t.centerY),await t.draw(u.value,o.value),h.showHelp&&Y.value===t&&(await at(t),await((s=t.drawRotation)==null?void 0:s.call(t,u.value,o.value))),u.value.restore()),e+=1}u.value.translate(-_.value[0],-_.value[1]),u.value.restore(),requestAnimationFrame(a)}()};return gt(async()=>{await nt()}),()=>U("div",{class:"CanvasInteraction"},[U("canvas",{ref:N,style:st.value},null)])}});export{Bt as C};