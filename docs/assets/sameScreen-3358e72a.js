import{d as _,r as p,h as f,aK as m,o as l,c as v,a as w,H as y,_ as S}from"./index-71ff745c.js";import{h as g}from"./index-710fd454.js";const h={class:"aaa"},R=_({__name:"sameScreen",setup(k){const{query:c}=y(),{send:i,ws:d}=g(c.wsUrl,{autoReconnect:!0}),s=p(),n={},u=async(t,a)=>{const e=new RTCPeerConnection({iceServers:[{urls:"stun:127.0.0.1:3478"}]});t.getTracks().forEach(r=>{e.addTrack(r,t)});let o=!1;return e.onicecandidate=r=>{r.candidate&&!o&&(o=!0,a==null||a(e))},await e.setLocalDescription(await e.createOffer()),e};return f(async()=>{const t=await navigator.mediaDevices.getUserMedia({video:!0});s.value.srcObject=t,s.value.onloadedmetadata=function(a){s.value.play()},d.value.addEventListener("message",async a=>{const e=JSON.parse(a.data)||{};switch(e.emit){case"webrtcLogin":n[e.userId]=await u(t,o=>{i(JSON.stringify({emit:"webrtcStart",data:o.localDescription,userId:e.userId}))});break;case"webrtcResponse":n[e.userId]&&await n[e.userId].setRemoteDescription(e.data);break}})}),m(t=>{console.log(t)}),(t,a)=>(l(),v("div",h,[w("video",{ref_key:"video",ref:s},null,512)]))}});const E=S(R,[["__scopeId","data-v-781e4148"]]);export{E as default};
