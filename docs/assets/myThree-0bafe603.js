import E from"./BaseThree-f5fce46b.js";import{d as v,r as d,o as y,c as _,m as z,p as R,u as l,i as T,h as F,t as G}from"./index-1392aa06.js";const b=""+new URL("miaozidongmanti-regular-1b731fea.ttf",import.meta.url).href,L=""+new URL("RobotExpressive-047f5e5f.glb",import.meta.url).href,A={class:"three"},k=v({__name:"myThree",setup(D){const i=d({camera:{}}),c=d();d([]);const f=async e=>{const{THREE:t,camera:a,renderer:o,scene:s,controls:x,planeGeometryMesh:I}=e;x.maxPolarAngle=Math.PI*.49;const{mesh:g}=e.addBoxGeometry("https://t7.baidu.com/it/u=4036010509,3445021118&fm=193&f=GIF");e.transformControls().attach(g),await e.downloadFonts(b,"aaa"),await e.addText("智加科技","aaa");const n=await e.addGLTFLoader(L);n.scene.position.set(300,0,0),n.scene.scale.set(50,50,50);const m=r=>{r.castShadow=!0,(r.children||[]).forEach(w=>{m(w)})};m(n.scene),c.value=new t.AnimationMixer(n.scene);const p=c.value.clipAction(n.animations.find(r=>r.name==="Walking"));p.clampWhenFinished=!0,p.reset().setEffectiveTimeScale(1).setEffectiveWeight(1).fadeIn(.5).play(),s.add(n.scene)},u=({scene:e,THREE:t,clockTime:a})=>{var o,s;(s=(o=c.value)==null?void 0:o.update)==null||s.call(o,a)},h=({camera:e},t)=>{const a=t.gui.addFolder("相机");return a.add(e,"x",1,100).step(.01),a.add(e,"y",1,1e3).step(.01),a.add(e,"z",1,1e3).step(.01),()=>{t.camera.position.set(e.x,e.y,e.z)}};return(e,t)=>(y(),_("div",A,[z(l(E),{onLoad:f,onAnimation:u,onGui:h,near:.1,far:1e3,"initialization-data":l(i),"onUpdate:initializationData":t[0]||(t[0]=a=>T(i)?i.value=a:null),gui:!0,"plane-geometry":!0},{panel:R(()=>[F(G(l(i)),1)]),_:1},8,["near","initialization-data"])]))}});export{k as default};
