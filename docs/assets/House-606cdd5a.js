import{d as W,r as T,o as S,c as Y,a as z,n as P,q as H,u as p,j as h,l as L,F as X,s as v,x as j,t as J,_ as k}from"./index-71ff745c.js";import{R as K,V as q,t as _}from"./BaseThree-d353de74.js";import{f as $}from"./miaozidongmanti-regular-c1fcdfef.js";import{M as y,O as V}from"./MTLLoader-39a0c19f.js";import{l as oo}from"./lodash-d2667470.js";import{u as to}from"./index-710fd454.js";import"./_commonjsHelpers-87174ba5.js";const ao="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKoAAACPCAYAAABqF0AHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFGmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDggNzkuMTY0MDM2LCAyMDE5LzA4LzEzLTAxOjA2OjU3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjEuMCAoTWFjaW50b3NoKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjMtMDMtMjdUMTQ6NTg6NDkrMDg6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDIzLTA0LTE0VDE0OjIyOjAxKzA4OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIzLTA0LTE0VDE0OjIyOjAxKzA4OjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9InNSR0IgSUVDNjE5NjYtMi4xIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjA2NWUwYTI0LTNhYzIt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",io=""+new URL("a-f27a7f2a.png",import.meta.url).href,so=""+new URL("file-b758a211.obj",import.meta.url).href,no="data:model/mtl;base64,77u/IyAzZHMgTWF4IFdhdmVmcm9udCBPQkogRXhwb3J0ZXIgdjAuOTdiIC0gKGMpMjAwNyBndXJ1d2FyZQ0KIyC0tL2otcTOxLz+OjE5LjExLjIwMTUgMjA6NDU6NTcNCg0KbmV3bXRsIHdpcmVfMTM1MDA2MDA2DQoJTnMgMzINCglkIDENCglUciAwDQoJVGYgMSAxIDENCglpbGx1bSAyDQoJS2EgMC41Mjk0IDAuMDIzNSAwLjAyMzUNCglLZCAwLjUyOTQgMC4wMjM1IDAuMDIzNQ0KCUtzIDAuMzUwMCAwLjM1MDAgMC4zNTAwDQoNCm5ld210bCB3aXJlXzE0NTAyODE3Nw0KCU5zIDMyDQoJZCAxDQoJVHIgMA0KCVRmIDEgMSAxDQoJaWxsdW0gMg0KCUthIDAuNTY4NiAwLjEwOTggMC42OTQxDQoJS2QgMC41Njg2IDAuMTA5OCAwLjY5NDENCglLcyAwLjM1MDAgMC4zNTAwIDAuMzUwMA0KDQpuZXdtdGwgd2lyZV8xMzUwNTkwMDgNCglOcyAzMg0KCWQgMQ0KCVRyIDANCglUZiAxIDEgMQ0KCWlsbHVtIDINCglLYSAwLjUyOTQgMC4yMzE0IDAuMDMxNA0KCUtkIDAuNTI5NCAwLjIzMTQgMC4wMzE0DQoJS3MgMC4zNTAwIDAuMzUwMCAwLjM1MDANCg0KbmV3bXRsIHdpcmVfMjI1MTQzMDg3DQoJTnMgMzINCglkIDENCglUciAwDQoJVGYgMSAxIDENCglpbGx1bSAyDQoJS2EgMC44ODI0IDAuNTYwOCAwLjM0MTINCglLZCAwLjg4MjQgMC41NjA4IDAuMzQxMg0KCUtzIDAuMzUwMCAwLjM1MDAgMC4zNTAwDQoNCm5ld210bCB3aXJlXzE1NDE1NDIyOQ0KCU5zIDMyDQoJZCAxDQoJVHIgMA0KCVRmIDEgMSAxDQoJaWxsdW0gMg0KCUthIDAuNjAzOSAwLjYwMzkgMC44OTgwDQoJS2QgMC42MDM5IDAuNjAzOSAwLjg5ODANCglLcyAwLjM1MDAgMC4zNTAwIDAuMzUwMA0KDQpuZXdtdGwgd2lyZV8xMDgwMDgxMzYNCglOcyAzMg0KCWQgMQ0KCVRyIDANCglUZiAxIDEgMQ0KCWlsbHVtIDINCglLYSAwLjQyMzUgMC4wMzE0IDAuNTMzMw0KCUtkIDAuNDIzNSAwLjAzMTQgMC41MzMzDQoJS3MgMC4zNTAwIDAuMzUwMCAwLjM1MDANCg==",R=""+new URL("wood_bumb-08506dcf.jpg",import.meta.url).href,eo={class:"house"},Mo=["src"],Ao=W({__name:"House",setup(co){const d=T({box:{position:{x:0,y:0,z:0},size:{width:300,height:10,depth:30},rotate:{rx:0,ry:0,rz:0}},mode:"translate"});new K,new q;const x=async o=>{},b={width:120,depth:5,position:[0,0],scale:[1,1,1],rotation:[0,0,0]},a=async(o,i,w,e)=>{const{scene:I,THREE:A}=o,M=70,c=M/2,{width:D,depth:N,position:[t,g,s],scale:[m,n,U],rotation:[Z,f,F]}=oo.merge(b,w),l=new A.Mesh(new A.BoxGeometry(D,M,N),new A.MeshLambertMaterial({map:o.imagesTexture.get("wall")})),C=s||c;if(l.position.set(t,C,g),l.scale.set(m,n,U),l.rotation.set(Z,f,F),l.castShadow=!0,l.receiveShadow=!0,I.add(l),e){const{mesh:u}=await o.addText(e,"font");u.position.set(t,Math.abs((M*n+2)/2+C),g),u.scale.set(.01594,.01594,.01594),u.rotation.set(-1.5,0,0),I.add(u)}},r=T(["translate","scale","rotate"]),{a:Q,s:E,d:B}=to(),G=async o=>{const{THREE:i,planeGeometryMesh:w,scene:e,camera:I,light:A}=o,M=await o.downloadImagesTexture("https://img0.baidu.com/it/u=1747596165,3790153622&fm=253&fmt=auto&app=138&f=JPG?w=667&h=500","wall");M.repeat.set(3,2),M.wrapS=i.RepeatWrapping,M.wrapT=i.MirroredRepeatWrapping;const c=o.downloadImagesTexture(io,"addBoxTexture");await o.downloadFonts($,"font"),c.repeat.set(20,20),c.wrapS=i.RepeatWrapping,c.wrapT=i.MirroredRepeatWrapping,A.intensity=1,A.color.set("#ffefd6");const D=new i.PointLight("#ffffff",.8);D.position.set(0,100,100),e.add(D);const N=new i.Mesh(new i.BoxGeometry(300,1,300),new i.MeshLambertMaterial({map:c}));e.add(N);const t=o.transformControls();v(()=>{Q.value?t.setMode(r.value[0]):E.value?t.setMode(r.value[1]):B.value?t.setMode(r.value[2]):t.setMode(d.value.mode)}),a(o,t,{position:[44.39,-147],scale:[.94]},"1"),a(o,t,{position:[98.03,-129.23],scale:[.32],rotation:[0,1.56]},"2"),a(o,t,{position:[-9.112,-76.06],scale:[.262,1,1.491],rotation:[0,1.56]},"3"),a(o,t,{position:[-6.75,-63.55],scale:[.2768,1,1.491],rotation:[0,0]},"4"),a(o,t,{position:[90.56,-63.55],scale:[.991,1,1.491],rotation:[0,0]},"5"),a(o,t,{position:[48.26,-74.505],scale:[.1689,1,1.491],rotation:[0,1.56]},"6"),a(o,t,{position:[59.56,-52.07],scale:[.1689,1,1.491],rotation:[0,1.56]},"7"),a(o,t,{position:[145.86,-14.966],scale:[.8604,1,1.491],rotation:[0,1.56]},"8"),a(o,t,{position:[139.567,-14.966],scale:[.1279,1,1.491],rotation:[0,0]},"9"),a(o,t,{position:[73.202,-14.966],scale:[.6837,1,1.491],rotation:[0,0]},"10"),a(o,t,{position:[110.912,-12.695],scale:[.098099,1,1.491],rotation:[0,1.56]},"11"),a(o,t,{position:[59.151,-4.766],scale:[.223091,1,1.491],rotation:[0,1.56]},"12"),a(o,t,{position:[35.846,-4.766],scale:[.1566,1,1.491],rotation:[0,1.56]},"13"),a(o,t,{position:[35.846,89.17919],scale:[1.0263,1,1.491],rotation:[0,1.56]},"14"),a(o,t,{position:[111.0753,73.2094],scale:[1.0263,1,1.491],rotation:[0,1.56]},"15"),a(o,t,{position:[87.0712,33.708],scale:[.467,1,1.491],rotation:[0,0]},"16"),a(o,t,{position:[59.151,33.09617],scale:[.07228,1,1.491],rotation:[0,1.56]},"17"),a(o,t,{position:[53.663,140.3025],scale:[.20416,1,1.491],rotation:[0,1.56]},"18"),a(o,t,{position:[93.745,140.3025],scale:[.20416,1,1.491],rotation:[0,1.56]},"19"),a(o,t,{position:[102.15,131.4817],scale:[.2016,1,1.491],rotation:[0,0]},"20"),a(o,t,{position:[40.621,131.4817],scale:[.2794,1,1.491],rotation:[0,0]},"21"),a(o,t,{position:[-47,131.4817],scale:[.2164,1,1.491],rotation:[0,0]},"22"),a(o,t,{position:[-107.44,131.4817],scale:[.1973,1,1.491],rotation:[0,0]},"23"),a(o,t,{position:[-46.8022,89.17919],scale:[1.0263,1,1.491],rotation:[0,1.56]},"24"),a(o,t,{position:[-115.813,89.17919],scale:[1.0263,1,1.491],rotation:[0,1.56]},"25"),a(o,t,{position:[-91.9445,31.39],scale:[.3718,1,1.491],rotation:[0,0]},"26"),a(o,t,{position:[-118.8577,51.203],scale:[.0756,1,1.491],rotation:[0,0]},"27"),a(o,t,{position:[-146.7509,8.384],scale:[1.2771,1,1.491],rotation:[0,1.56]},"28"),a(o,t,{position:[-83.8454,-31.301],scale:[.6195,1,1.491],rotation:[0,1.56]},"29"),a(o,t,{position:[-45.548,-31.301],scale:[.6195,1,1.491],rotation:[0,1.56]},"30"),a(o,t,{position:[-110.738,-64.833],scale:[.64934,1,1.491],rotation:[0,0]},"31"),a(o,t,{position:[-49.315,-64.833],scale:[.12904,1,1.491],rotation:[0,0]},"32"),a(o,t,{position:[-75.8735,2.14],scale:[.1619,1,1.491],rotation:[0,0]},"33"),a(o,t,{position:[-74.1106,5.48114],scale:[.04225,1,1.491],rotation:[0,1.56]},"34"),a(o,t,{position:[-32.7006,-63.7064,15.9614],scale:[.0635,.4445,3.8021],rotation:[0,1.56]},"35"),a(o,t,{position:[-32.7006,-63.7064,66.0017],scale:[.0635,.1139,3.8021],rotation:[0,1.56]},"36");const g=await new y().loadAsync(no);g.loadTexture(R);const s=await new V().setMaterials(g).loadAsync(so);s.scale.set(.2627,.3166,.2949),s.rotation.set(0,Math.PI,0),s.position.set(81.7755,0,49.5),s.castShadow=!0,s.receiveShadow=!0,s.children.forEach(U=>{U.material=new i.MeshLambertMaterial({map:new i.TextureLoader().load("https://img1.baidu.com/it/u=2177459011,1010874807&fm=253&fmt=auto&app=138&f=JPEG?w=749&h=500")})}),e.add(s);const m=await new y().loadAsync((await j(()=>import("./橙色大方床-dc554bd5.js"),[],import.meta.url)).default);m.loadTexture(R);const n=await new V().setMaterials(m).loadAsync((await j(()=>import("./橙色大方床-b192e7d3.js"),[],import.meta.url)).default);n.scale.set(.2627,.3166,.2949),n.position.set(81.7755,0,49.5),n.castShadow=!0,n.receiveShadow=!0,e.add(n)},O=(o,i)=>(i.gui.addFolder("配置参数").add(o,"mode",r.value),()=>{});return(o,i)=>(S(),Y(X,null,[z("div",eo,[P(p(_),{"initialization-data":p(d),"onUpdate:initializationData":i[0]||(i[0]=w=>h(d)?d.value=w:null),onLoad:G,gui:!0,coordinateLine:!1,onGui:O,onAnimation:x},{panel:H(()=>[L(J(p(d)),1)]),_:1},8,["initialization-data"]),z("img",{src:p(ao),alt:""},null,8,Mo)]),L(" ¡ ")],64))}});const po=k(Ao,[["__scopeId","data-v-ae73a219"]]);export{po as default};