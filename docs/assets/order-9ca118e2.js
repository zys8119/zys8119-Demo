var $=Object.defineProperty;var j=(l,i,h)=>i in l?$(l,i,{enumerable:!0,configurable:!0,writable:!0,value:h}):l[i]=h;var v=(l,i,h)=>(j(l,typeof i!="symbol"?i+"":i,h),h);import{C as z}from"./CanvasInteraction-6aadc7ff.js";import{d as A,r as E,b as w,o as V,c as X,m as q,u as D,p as F,_ as G}from"./index-2d70df5d.js";import"./index-c14f5fc3.js";import"./index-a625f457.js";const H={class:"bb"},J=A({__name:"order",setup(l){const i=E([{id:1,name:"1-1",type:1},{id:2,name:"1-2",type:1},{id:3,name:"2-1",type:2},{id:4,name:"2-2",type:2},{id:5,name:"3-1",type:3},{id:6,name:"3-3",type:3},{id:7,name:"4-1",type:4},{id:8,name:"4-2",type:4},{id:9,name:"3-2",type:3},{id:10,name:"3-3",type:3},{id:11,name:"3-4",type:3},{id:12,name:"3-5",type:3},{id:13,name:"5-1",type:5},{id:14,name:"6-1",type:6},{id:15,name:"6-2",type:6},{id:16,name:"7-1",type:7}]),h=E([{start:1,end:3},{start:3,end:12},{start:12,end:7},{start:2,end:4},{start:4,end:9},{start:9,end:8},{start:7,end:13},{start:13,end:15},{start:15,end:16}]),_=w(()=>i.value.reduce((t,s)=>(t[s.id]=s,t),{})),c=w(()=>Object.entries(i.value.reduce((t,s)=>(t[s.type]=t[s.type]||[],t[s.type].push(s),t),{})).map(([,t])=>t)),b=w(()=>Math.max.apply(null,c.value.map(t=>t.length))),g=(t,s=new WeakMap)=>{s.set(t,!0),t.strokeStyle="#f00",h.value.forEach(n=>{if(n.end===t.id||n.start===t.id){n.strokeStyle="#f00";let y=null;n.end===t.id?y=_.value[n.start]:n.start===t.id&&(y=_.value[n.end]),y&&!s.get(y)&&g(y,s)}})},x=(t,s)=>{h.value.forEach(n=>{n.strokeStyle="#000"}),i.value.forEach(n=>{n.strokeStyle="#000"}),s&&g(t)},M=t=>{t&&x(t.data,!0)},C=t=>{t&&x(t.data,!1)},L=async({scene:t,ObjectBase:s,width:n,height:y,ctx:K})=>{class B extends s{constructor(e,a,o){super();v(this,"type","line");this.startN=e,this.endN=a,this.data=o}get strokeStyle(){return this.data.strokeStyle||"#000"}get xx(){return this.startN.x+this.startN.w}get yy(){return this.startN.y+this.startN.h/2}get ww(){return this.endN.x-this.startN.x-this.endN.w}get hh(){return this.endN.y-this.startN.y}async draw(e,a){e.beginPath(),e.strokeStyle=this.strokeStyle,e.lineWidth=2,e.moveTo(this.xx,this.yy);const[o,f,m,Y]=[.18,.61,.84,.47];e.bezierCurveTo(this.xx+this.ww*o,this.yy+this.hh*f,this.xx+this.ww*m,this.yy+this.hh*Y,this.xx+this.ww,this.yy+this.hh),e.stroke()}}class O extends s{constructor(e,a,o,f,m){super();v(this,"type","node");this.x=e,this.y=a,this.w=o,this.h=f,this.data=m}get strokeStyle(){var e;return((e=this.data)==null?void 0:e.strokeStyle)||"#000"}async draw(e,a){e.beginPath(),e.strokeStyle=this.strokeStyle,e.lineWidth=2,e.rect(this.x,this.y,this.w,this.h),e.stroke(),e.textAlign="center",e.font="28px 微软雅黑",e.textBaseline="middle",e.fillText(`${this.data.name.toString()}(${this.data.id.toString()})`,this.x+this.w/2,this.y+this.h/2,this.w),e.closePath()}}const N=120,u=50,P=100,k=30,T=0,W=0;c.value.forEach((r,d)=>{const e=(b.value-r.length)*(u+k)/2;r.forEach((a,o)=>{t.push(new O(T+(N+P)*d,W+(u+k)*o+e,N,u,a))})}),h.value.forEach(r=>{const d=t.find(a=>a.data.id===r.start),e=t.find(a=>a.data.id===r.end);d&&e&&t.push(new B(d,e,r))});const S=c.value[Math.floor(c.value.length/2)],I=S[Math.floor(S.length/2)],p=t.find(r=>r.data.id===I.id);F(()=>{const[r,d]=[n.value/2-p.w/2,y.value/2-p.h/2],[e,a]=[r-p.x,d-p.y];t.forEach(o=>{o.x+=e,o.y+=a})})};return(t,s)=>(V(),X("div",H,[q(D(z),{onLoad:L,onEnter:M,onLeave:C,"show-help":!1})]))}});const et=G(J,[["__scopeId","data-v-14392bae"]]);export{et as default};
