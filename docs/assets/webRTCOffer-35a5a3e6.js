import{d as r,r as i,h as d,o as l,c as _,a as f,_ as p}from"./index-71ff745c.js";const m={class:"aaa"},u=r({__name:"webRTCOffer",setup(v){const n=i(),c=new BroadcastChannel("myChannel");return d(async()=>{const o=await navigator.mediaDevices.getUserMedia({video:!0});n.value.srcObject=o,n.value.onloadedmetadata=function(a){n.value.play()};const e=new RTCPeerConnection,t=e.createDataChannel("chat");t.onmessage=a=>{console.log(a.data)},t.onopen=()=>{setInterval(()=>{t.send("Hi you!")},1e3)},console.log(t),o.getTracks().forEach(a=>e.addTrack(a,o)),e.onicecandidate=a=>{a.candidate&&s()},await e.setLocalDescription(await e.createOffer()),c.onmessage=async a=>{await e.setRemoteDescription(JSON.parse(a.data))};const s=async()=>{c.postMessage(JSON.stringify(e.localDescription))}}),(o,e)=>(l(),_("div",m,[f("video",{ref_key:"video",ref:n},null,512)]))}});const g=p(u,[["__scopeId","data-v-50100cac"]]);export{g as default};