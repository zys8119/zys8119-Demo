import{d as lt,r as Q,o as ct,c as dt,f as S,m as ut,n as pt,u as z,i as mt,j as k,F as ht,p as ft,q as W,t as gt,_ as Mt}from"./index-c65d4f2e.js";import{V as U,C as R,L as st,F as ot,G as wt,B as Z,a as C,b as B,M as H,P as N,c as it,d as Y,e as E,f as J,g as At,h as bt,R as Dt,i as P,D as yt,T as It,s as xt,j as jt,t as Lt,l as Ct}from"./BaseThree-0818bd3c.js";import{f as Ut}from"./miaozidongmanti-regular-c1fcdfef.js";import{u as Vt}from"./index-2575843a.js";import"./index-e87fdb7b.js";const vt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKoAAACPCAYAAABqF0AHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFGmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDggNzkuMTY0MDM2LCAyMDE5LzA4LzEzLTAxOjA2OjU3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjEuMCAoTWFjaW50b3NoKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjMtMDMtMjdUMTQ6NTg6NDkrMDg6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDIzLTA0LTE0VDE0OjIyOjAxKzA4OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIzLTA0LTE0VDE0OjIyOjAxKzA4OjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9InNSR0IgSUVDNjE5NjYtMi4xIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjA2NWUwYTI0LTNhYzIt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",zt=""+new URL("a-f27a7f2a.png",import.meta.url).href,Nt=""+new URL("file-b758a211.obj",import.meta.url).href,Tt="data:model/mtl;base64,77u/IyAzZHMgTWF4IFdhdmVmcm9udCBPQkogRXhwb3J0ZXIgdjAuOTdiIC0gKGMpMjAwNyBndXJ1d2FyZQ0KIyC0tL2otcTOxLz+OjE5LjExLjIwMTUgMjA6NDU6NTcNCg0KbmV3bXRsIHdpcmVfMTM1MDA2MDA2DQoJTnMgMzINCglkIDENCglUciAwDQoJVGYgMSAxIDENCglpbGx1bSAyDQoJS2EgMC41Mjk0IDAuMDIzNSAwLjAyMzUNCglLZCAwLjUyOTQgMC4wMjM1IDAuMDIzNQ0KCUtzIDAuMzUwMCAwLjM1MDAgMC4zNTAwDQoNCm5ld210bCB3aXJlXzE0NTAyODE3Nw0KCU5zIDMyDQoJZCAxDQoJVHIgMA0KCVRmIDEgMSAxDQoJaWxsdW0gMg0KCUthIDAuNTY4NiAwLjEwOTggMC42OTQxDQoJS2QgMC41Njg2IDAuMTA5OCAwLjY5NDENCglLcyAwLjM1MDAgMC4zNTAwIDAuMzUwMA0KDQpuZXdtdGwgd2lyZV8xMzUwNTkwMDgNCglOcyAzMg0KCWQgMQ0KCVRyIDANCglUZiAxIDEgMQ0KCWlsbHVtIDINCglLYSAwLjUyOTQgMC4yMzE0IDAuMDMxNA0KCUtkIDAuNTI5NCAwLjIzMTQgMC4wMzE0DQoJS3MgMC4zNTAwIDAuMzUwMCAwLjM1MDANCg0KbmV3bXRsIHdpcmVfMjI1MTQzMDg3DQoJTnMgMzINCglkIDENCglUciAwDQoJVGYgMSAxIDENCglpbGx1bSAyDQoJS2EgMC44ODI0IDAuNTYwOCAwLjM0MTINCglLZCAwLjg4MjQgMC41NjA4IDAuMzQxMg0KCUtzIDAuMzUwMCAwLjM1MDAgMC4zNTAwDQoNCm5ld210bCB3aXJlXzE1NDE1NDIyOQ0KCU5zIDMyDQoJZCAxDQoJVHIgMA0KCVRmIDEgMSAxDQoJaWxsdW0gMg0KCUthIDAuNjAzOSAwLjYwMzkgMC44OTgwDQoJS2QgMC42MDM5IDAuNjAzOSAwLjg5ODANCglLcyAwLjM1MDAgMC4zNTAwIDAuMzUwMA0KDQpuZXdtdGwgd2lyZV8xMDgwMDgxMzYNCglOcyAzMg0KCWQgMQ0KCVRyIDANCglUZiAxIDEgMQ0KCWlsbHVtIDINCglLYSAwLjQyMzUgMC4wMzE0IDAuNTMzMw0KCUtkIDAuNDIzNSAwLjAzMTQgMC41MzMzDQoJS3MgMC4zNTAwIDAuMzUwMCAwLjM1MDANCg==",X=""+new URL("wood_bumb-08506dcf.jpg",import.meta.url).href,Rt=/^[og]\s*(.+)?/,Ft=/^mtllib /,Bt=/^usemtl /,Et=/^usemap /,_=/\s+/,K=new U,O=new U,q=new U,$=new U,y=new U,T=new R;function Ot(){const j={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(e,s){if(this.object&&this.object.fromDeclaration===!1){this.object.name=e,this.object.fromDeclaration=s!==!1;return}const a=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:e||"",fromDeclaration:s!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(t,i){const u=this._finalize(!1);u&&(u.inherited||u.groupCount<=0)&&this.materials.splice(u.index,1);const l={index:this.materials.length,name:t||"",mtllib:Array.isArray(i)&&i.length>0?i[i.length-1]:"",smooth:u!==void 0?u.smooth:this.smooth,groupStart:u!==void 0?u.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(r){const n={index:typeof r=="number"?r:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return n.clone=this.clone.bind(n),n}};return this.materials.push(l),l},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(t){const i=this.currentMaterial();if(i&&i.groupEnd===-1&&(i.groupEnd=this.geometry.vertices.length/3,i.groupCount=i.groupEnd-i.groupStart,i.inherited=!1),t&&this.materials.length>1)for(let u=this.materials.length-1;u>=0;u--)this.materials[u].groupCount<=0&&this.materials.splice(u,1);return t&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),i}},a&&a.name&&typeof a.clone=="function"){const t=a.clone(0);t.inherited=!0,this.object.materials.push(t)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(e,s){const a=parseInt(e,10);return(a>=0?a-1:a+s/3)*3},parseNormalIndex:function(e,s){const a=parseInt(e,10);return(a>=0?a-1:a+s/3)*3},parseUVIndex:function(e,s){const a=parseInt(e,10);return(a>=0?a-1:a+s/2)*2},addVertex:function(e,s,a){const t=this.vertices,i=this.object.geometry.vertices;i.push(t[e+0],t[e+1],t[e+2]),i.push(t[s+0],t[s+1],t[s+2]),i.push(t[a+0],t[a+1],t[a+2])},addVertexPoint:function(e){const s=this.vertices;this.object.geometry.vertices.push(s[e+0],s[e+1],s[e+2])},addVertexLine:function(e){const s=this.vertices;this.object.geometry.vertices.push(s[e+0],s[e+1],s[e+2])},addNormal:function(e,s,a){const t=this.normals,i=this.object.geometry.normals;i.push(t[e+0],t[e+1],t[e+2]),i.push(t[s+0],t[s+1],t[s+2]),i.push(t[a+0],t[a+1],t[a+2])},addFaceNormal:function(e,s,a){const t=this.vertices,i=this.object.geometry.normals;K.fromArray(t,e),O.fromArray(t,s),q.fromArray(t,a),y.subVectors(q,O),$.subVectors(K,O),y.cross($),y.normalize(),i.push(y.x,y.y,y.z),i.push(y.x,y.y,y.z),i.push(y.x,y.y,y.z)},addColor:function(e,s,a){const t=this.colors,i=this.object.geometry.colors;t[e]!==void 0&&i.push(t[e+0],t[e+1],t[e+2]),t[s]!==void 0&&i.push(t[s+0],t[s+1],t[s+2]),t[a]!==void 0&&i.push(t[a+0],t[a+1],t[a+2])},addUV:function(e,s,a){const t=this.uvs,i=this.object.geometry.uvs;i.push(t[e+0],t[e+1]),i.push(t[s+0],t[s+1]),i.push(t[a+0],t[a+1])},addDefaultUV:function(){const e=this.object.geometry.uvs;e.push(0,0),e.push(0,0),e.push(0,0)},addUVLine:function(e){const s=this.uvs;this.object.geometry.uvs.push(s[e+0],s[e+1])},addFace:function(e,s,a,t,i,u,l,r,n){const p=this.vertices.length;let o=this.parseVertexIndex(e,p),c=this.parseVertexIndex(s,p),m=this.parseVertexIndex(a,p);if(this.addVertex(o,c,m),this.addColor(o,c,m),l!==void 0&&l!==""){const h=this.normals.length;o=this.parseNormalIndex(l,h),c=this.parseNormalIndex(r,h),m=this.parseNormalIndex(n,h),this.addNormal(o,c,m)}else this.addFaceNormal(o,c,m);if(t!==void 0&&t!==""){const h=this.uvs.length;o=this.parseUVIndex(t,h),c=this.parseUVIndex(i,h),m=this.parseUVIndex(u,h),this.addUV(o,c,m),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(e){this.object.geometry.type="Points";const s=this.vertices.length;for(let a=0,t=e.length;a<t;a++){const i=this.parseVertexIndex(e[a],s);this.addVertexPoint(i),this.addColor(i)}},addLineGeometry:function(e,s){this.object.geometry.type="Line";const a=this.vertices.length,t=this.uvs.length;for(let i=0,u=e.length;i<u;i++)this.addVertexLine(this.parseVertexIndex(e[i],a));for(let i=0,u=s.length;i<u;i++)this.addUVLine(this.parseUVIndex(s[i],t))}};return j.startObject("",!1),j}class tt extends st{constructor(e){super(e),this.materials=null}load(e,s,a,t){const i=this,u=new ot(this.manager);u.setPath(this.path),u.setRequestHeader(this.requestHeader),u.setWithCredentials(this.withCredentials),u.load(e,function(l){try{s(i.parse(l))}catch(r){t?t(r):console.error(r),i.manager.itemError(e)}},a,t)}setMaterials(e){return this.materials=e,this}parse(e){const s=new Ot;e.indexOf(`\r
`)!==-1&&(e=e.replace(/\r\n/g,`
`)),e.indexOf(`\\
`)!==-1&&(e=e.replace(/\\\n/g,""));const a=e.split(`
`);let t=[];for(let l=0,r=a.length;l<r;l++){const n=a[l].trimStart();if(n.length===0)continue;const p=n.charAt(0);if(p!=="#")if(p==="v"){const o=n.split(_);switch(o[0]){case"v":s.vertices.push(parseFloat(o[1]),parseFloat(o[2]),parseFloat(o[3])),o.length>=7?(T.setRGB(parseFloat(o[4]),parseFloat(o[5]),parseFloat(o[6])).convertSRGBToLinear(),s.colors.push(T.r,T.g,T.b)):s.colors.push(void 0,void 0,void 0);break;case"vn":s.normals.push(parseFloat(o[1]),parseFloat(o[2]),parseFloat(o[3]));break;case"vt":s.uvs.push(parseFloat(o[1]),parseFloat(o[2]));break}}else if(p==="f"){const c=n.slice(1).trim().split(_),m=[];for(let g=0,M=c.length;g<M;g++){const w=c[g];if(w.length>0){const A=w.split("/");m.push(A)}}const h=m[0];for(let g=1,M=m.length-1;g<M;g++){const w=m[g],A=m[g+1];s.addFace(h[0],w[0],A[0],h[1],w[1],A[1],h[2],w[2],A[2])}}else if(p==="l"){const o=n.substring(1).trim().split(" ");let c=[];const m=[];if(n.indexOf("/")===-1)c=o;else for(let h=0,g=o.length;h<g;h++){const M=o[h].split("/");M[0]!==""&&c.push(M[0]),M[1]!==""&&m.push(M[1])}s.addLineGeometry(c,m)}else if(p==="p"){const c=n.slice(1).trim().split(" ");s.addPointGeometry(c)}else if((t=Rt.exec(n))!==null){const o=(" "+t[0].slice(1).trim()).slice(1);s.startObject(o)}else if(Bt.test(n))s.object.startMaterial(n.substring(7).trim(),s.materialLibraries);else if(Ft.test(n))s.materialLibraries.push(n.substring(7).trim());else if(Et.test(n))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(p==="s"){if(t=n.split(" "),t.length>1){const c=t[1].trim().toLowerCase();s.object.smooth=c!=="0"&&c!=="off"}else s.object.smooth=!0;const o=s.object.currentMaterial();o&&(o.smooth=s.object.smooth)}else{if(n==="\0")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+n+'"')}}s.finalize();const i=new wt;if(i.materialLibraries=[].concat(s.materialLibraries),!(s.objects.length===1&&s.objects[0].geometry.vertices.length===0)===!0)for(let l=0,r=s.objects.length;l<r;l++){const n=s.objects[l],p=n.geometry,o=n.materials,c=p.type==="Line",m=p.type==="Points";let h=!1;if(p.vertices.length===0)continue;const g=new Z;g.setAttribute("position",new C(p.vertices,3)),p.normals.length>0&&g.setAttribute("normal",new C(p.normals,3)),p.colors.length>0&&(h=!0,g.setAttribute("color",new C(p.colors,3))),p.hasUVIndices===!0&&g.setAttribute("uv",new C(p.uvs,2));const M=[];for(let A=0,I=o.length;A<I;A++){const D=o[A],d=D.name+"_"+D.smooth+"_"+h;let f=s.materials[d];if(this.materials!==null){if(f=this.materials.create(D.name),c&&f&&!(f instanceof B)){const b=new B;H.prototype.copy.call(b,f),b.color.copy(f.color),f=b}else if(m&&f&&!(f instanceof N)){const b=new N({size:10,sizeAttenuation:!1});H.prototype.copy.call(b,f),b.color.copy(f.color),b.map=f.map,f=b}}f===void 0&&(c?f=new B:m?f=new N({size:1,sizeAttenuation:!1}):f=new it,f.name=D.name,f.flatShading=!D.smooth,f.vertexColors=h,s.materials[d]=f),M.push(f)}let w;if(M.length>1){for(let A=0,I=o.length;A<I;A++){const D=o[A];g.addGroup(D.groupStart,D.groupCount,A)}c?w=new Y(g,M):m?w=new E(g,M):w=new J(g,M)}else c?w=new Y(g,M[0]):m?w=new E(g,M[0]):w=new J(g,M[0]);w.name=n.name,i.add(w)}else if(s.vertices.length>0){const l=new N({size:1,sizeAttenuation:!1}),r=new Z;r.setAttribute("position",new C(s.vertices,3)),s.colors.length>0&&s.colors[0]!==void 0&&(r.setAttribute("color",new C(s.colors,3)),l.vertexColors=!0);const n=new E(r,l);i.add(n)}return i}}class et extends st{constructor(e){super(e)}load(e,s,a,t){const i=this,u=this.path===""?At.extractUrlBase(e):this.path,l=new ot(this.manager);l.setPath(this.path),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(r){try{s(i.parse(r,u))}catch(n){t?t(n):console.error(n),i.manager.itemError(e)}},a,t)}setMaterialOptions(e){return this.materialOptions=e,this}parse(e,s){const a=e.split(`
`);let t={};const i=/\s+/,u={};for(let r=0;r<a.length;r++){let n=a[r];if(n=n.trim(),n.length===0||n.charAt(0)==="#")continue;const p=n.indexOf(" ");let o=p>=0?n.substring(0,p):n;o=o.toLowerCase();let c=p>=0?n.substring(p+1):"";if(c=c.trim(),o==="newmtl")t={name:c},u[c]=t;else if(o==="ka"||o==="kd"||o==="ks"||o==="ke"){const m=c.split(i,3);t[o]=[parseFloat(m[0]),parseFloat(m[1]),parseFloat(m[2])]}else t[o]=c}const l=new Pt(this.resourcePath||s,this.materialOptions);return l.setCrossOrigin(this.crossOrigin),l.setManager(this.manager),l.setMaterials(u),l}}class Pt{constructor(e="",s={}){this.baseUrl=e,this.options=s,this.materialsInfo={},this.materials={},this.materialsArray=[],this.nameLookup={},this.crossOrigin="anonymous",this.side=this.options.side!==void 0?this.options.side:bt,this.wrap=this.options.wrap!==void 0?this.options.wrap:Dt}setCrossOrigin(e){return this.crossOrigin=e,this}setManager(e){this.manager=e}setMaterials(e){this.materialsInfo=this.convert(e),this.materials={},this.materialsArray=[],this.nameLookup={}}convert(e){if(!this.options)return e;const s={};for(const a in e){const t=e[a],i={};s[a]=i;for(const u in t){let l=!0,r=t[u];const n=u.toLowerCase();switch(n){case"kd":case"ka":case"ks":this.options&&this.options.normalizeRGB&&(r=[r[0]/255,r[1]/255,r[2]/255]),this.options&&this.options.ignoreZeroRGBs&&r[0]===0&&r[1]===0&&r[2]===0&&(l=!1);break}l&&(i[n]=r)}}return s}preload(){for(const e in this.materialsInfo)this.create(e)}getIndex(e){return this.nameLookup[e]}getAsArray(){let e=0;for(const s in this.materialsInfo)this.materialsArray[e]=this.create(s),this.nameLookup[s]=e,e++;return this.materialsArray}create(e){return this.materials[e]===void 0&&this.createMaterial_(e),this.materials[e]}createMaterial_(e){const s=this,a=this.materialsInfo[e],t={name:e,side:this.side};function i(l,r){return typeof r!="string"||r===""?"":/^https?:\/\//i.test(r)?r:l+r}function u(l,r){if(t[l])return;const n=s.getTextureParams(r,t),p=s.loadTexture(i(s.baseUrl,n.url));p.repeat.copy(n.scale),p.offset.copy(n.offset),p.wrapS=s.wrap,p.wrapT=s.wrap,(l==="map"||l==="emissiveMap")&&(p.encoding=xt),t[l]=p}for(const l in a){const r=a[l];let n;if(r!=="")switch(l.toLowerCase()){case"kd":t.color=new R().fromArray(r).convertSRGBToLinear();break;case"ks":t.specular=new R().fromArray(r).convertSRGBToLinear();break;case"ke":t.emissive=new R().fromArray(r).convertSRGBToLinear();break;case"map_kd":u("map",r);break;case"map_ks":u("specularMap",r);break;case"map_ke":u("emissiveMap",r);break;case"norm":u("normalMap",r);break;case"map_bump":case"bump":u("bumpMap",r);break;case"map_d":u("alphaMap",r),t.transparent=!0;break;case"ns":t.shininess=parseFloat(r);break;case"d":n=parseFloat(r),n<1&&(t.opacity=n,t.transparent=!0);break;case"tr":n=parseFloat(r),this.options&&this.options.invertTrProperty&&(n=1-n),n>0&&(t.opacity=1-n,t.transparent=!0);break}}return this.materials[e]=new it(t),this.materials[e]}getTextureParams(e,s){const a={scale:new P(1,1),offset:new P(0,0)},t=e.split(/\s+/);let i;return i=t.indexOf("-bm"),i>=0&&(s.bumpScale=parseFloat(t[i+1]),t.splice(i,2)),i=t.indexOf("-s"),i>=0&&(a.scale.set(parseFloat(t[i+1]),parseFloat(t[i+2])),t.splice(i,4)),i=t.indexOf("-o"),i>=0&&(a.offset.set(parseFloat(t[i+1]),parseFloat(t[i+2])),t.splice(i,4)),a.url=t.join(" ").trim(),a}loadTexture(e,s,a,t,i){const u=this.manager!==void 0?this.manager:yt;let l=u.getHandler(e);l===null&&(l=new It(u)),l.setCrossOrigin&&l.setCrossOrigin(this.crossOrigin);const r=l.load(e,a,t,i);return s!==void 0&&(r.mapping=s),r}}const Gt={class:"house"},Qt=["src"],St=lt({__name:"House",setup(j){const e=Q({box:{position:{x:0,y:0,z:0},size:{width:300,height:10,depth:30},rotate:{rx:0,ry:0,rz:0}},mode:"translate"});new jt,new P;const s=async o=>{},a={width:120,depth:5,position:[0,0],scale:[1,1,1],rotation:[0,0,0]},t=async(o,c,m,h)=>{const{scene:g,THREE:M}=o,w=70,A=w/2,{width:I,depth:D,position:[d,f,b],scale:[V,x,F],rotation:[at,nt,rt]}=Ct.merge(a,m),L=new M.Mesh(new M.BoxGeometry(I,w,D),new M.MeshLambertMaterial({map:o.imagesTexture.get("wall")})),G=b||A;if(L.position.set(d,G,f),L.scale.set(V,x,F),L.rotation.set(at,nt,rt),L.castShadow=!0,L.receiveShadow=!0,g.add(L),h){const{mesh:v}=await o.addText(h,"font");v.position.set(d,Math.abs((w*x+2)/2+G),f),v.scale.set(.01594,.01594,.01594),v.rotation.set(-1.5,0,0),g.add(v)}},i=Q(["translate","scale","rotate"]),{a:u,s:l,d:r}=Vt(),n=async o=>{const{THREE:c,planeGeometryMesh:m,scene:h,camera:g,light:M}=o,w=await o.downloadImagesTexture("https://img0.baidu.com/it/u=1747596165,3790153622&fm=253&fmt=auto&app=138&f=JPG?w=667&h=500","wall");w.repeat.set(3,2),w.wrapS=c.RepeatWrapping,w.wrapT=c.MirroredRepeatWrapping;const A=o.downloadImagesTexture(zt,"addBoxTexture");await o.downloadFonts(Ut,"font"),A.repeat.set(20,20),A.wrapS=c.RepeatWrapping,A.wrapT=c.MirroredRepeatWrapping,M.intensity=1,M.color.set("#ffefd6");const I=new c.PointLight("#ffffff",.8);I.position.set(0,100,100),h.add(I);const D=new c.Mesh(new c.BoxGeometry(300,1,300),new c.MeshLambertMaterial({map:A}));h.add(D);const d=o.transformControls();ft(()=>{u.value?d.setMode(i.value[0]):l.value?d.setMode(i.value[1]):r.value?d.setMode(i.value[2]):d.setMode(e.value.mode)}),t(o,d,{position:[44.39,-147],scale:[.94]},"1"),t(o,d,{position:[98.03,-129.23],scale:[.32],rotation:[0,1.56]},"2"),t(o,d,{position:[-9.112,-76.06],scale:[.262,1,1.491],rotation:[0,1.56]},"3"),t(o,d,{position:[-6.75,-63.55],scale:[.2768,1,1.491],rotation:[0,0]},"4"),t(o,d,{position:[90.56,-63.55],scale:[.991,1,1.491],rotation:[0,0]},"5"),t(o,d,{position:[48.26,-74.505],scale:[.1689,1,1.491],rotation:[0,1.56]},"6"),t(o,d,{position:[59.56,-52.07],scale:[.1689,1,1.491],rotation:[0,1.56]},"7"),t(o,d,{position:[145.86,-14.966],scale:[.8604,1,1.491],rotation:[0,1.56]},"8"),t(o,d,{position:[139.567,-14.966],scale:[.1279,1,1.491],rotation:[0,0]},"9"),t(o,d,{position:[73.202,-14.966],scale:[.6837,1,1.491],rotation:[0,0]},"10"),t(o,d,{position:[110.912,-12.695],scale:[.098099,1,1.491],rotation:[0,1.56]},"11"),t(o,d,{position:[59.151,-4.766],scale:[.223091,1,1.491],rotation:[0,1.56]},"12"),t(o,d,{position:[35.846,-4.766],scale:[.1566,1,1.491],rotation:[0,1.56]},"13"),t(o,d,{position:[35.846,89.17919],scale:[1.0263,1,1.491],rotation:[0,1.56]},"14"),t(o,d,{position:[111.0753,73.2094],scale:[1.0263,1,1.491],rotation:[0,1.56]},"15"),t(o,d,{position:[87.0712,33.708],scale:[.467,1,1.491],rotation:[0,0]},"16"),t(o,d,{position:[59.151,33.09617],scale:[.07228,1,1.491],rotation:[0,1.56]},"17"),t(o,d,{position:[53.663,140.3025],scale:[.20416,1,1.491],rotation:[0,1.56]},"18"),t(o,d,{position:[93.745,140.3025],scale:[.20416,1,1.491],rotation:[0,1.56]},"19"),t(o,d,{position:[102.15,131.4817],scale:[.2016,1,1.491],rotation:[0,0]},"20"),t(o,d,{position:[40.621,131.4817],scale:[.2794,1,1.491],rotation:[0,0]},"21"),t(o,d,{position:[-47,131.4817],scale:[.2164,1,1.491],rotation:[0,0]},"22"),t(o,d,{position:[-107.44,131.4817],scale:[.1973,1,1.491],rotation:[0,0]},"23"),t(o,d,{position:[-46.8022,89.17919],scale:[1.0263,1,1.491],rotation:[0,1.56]},"24"),t(o,d,{position:[-115.813,89.17919],scale:[1.0263,1,1.491],rotation:[0,1.56]},"25"),t(o,d,{position:[-91.9445,31.39],scale:[.3718,1,1.491],rotation:[0,0]},"26"),t(o,d,{position:[-118.8577,51.203],scale:[.0756,1,1.491],rotation:[0,0]},"27"),t(o,d,{position:[-146.7509,8.384],scale:[1.2771,1,1.491],rotation:[0,1.56]},"28"),t(o,d,{position:[-83.8454,-31.301],scale:[.6195,1,1.491],rotation:[0,1.56]},"29"),t(o,d,{position:[-45.548,-31.301],scale:[.6195,1,1.491],rotation:[0,1.56]},"30"),t(o,d,{position:[-110.738,-64.833],scale:[.64934,1,1.491],rotation:[0,0]},"31"),t(o,d,{position:[-49.315,-64.833],scale:[.12904,1,1.491],rotation:[0,0]},"32"),t(o,d,{position:[-75.8735,2.14],scale:[.1619,1,1.491],rotation:[0,0]},"33"),t(o,d,{position:[-74.1106,5.48114],scale:[.04225,1,1.491],rotation:[0,1.56]},"34"),t(o,d,{position:[-32.7006,-63.7064,15.9614],scale:[.0635,.4445,3.8021],rotation:[0,1.56]},"35"),t(o,d,{position:[-32.7006,-63.7064,66.0017],scale:[.0635,.1139,3.8021],rotation:[0,1.56]},"36");const f=await new et().loadAsync(Tt);f.loadTexture(X);const b=await new tt().setMaterials(f).loadAsync(Nt);b.scale.set(.2627,.3166,.2949),b.rotation.set(0,Math.PI,0),b.position.set(81.7755,0,49.5),b.castShadow=!0,b.receiveShadow=!0,b.children.forEach(F=>{F.material=new c.MeshLambertMaterial({map:new c.TextureLoader().load("https://img1.baidu.com/it/u=2177459011,1010874807&fm=253&fmt=auto&app=138&f=JPEG?w=749&h=500")})}),h.add(b);const V=await new et().loadAsync((await W(()=>import("./橙色大方床-dc554bd5.js"),[],import.meta.url)).default);V.loadTexture(X);const x=await new tt().setMaterials(V).loadAsync((await W(()=>import("./橙色大方床-b192e7d3.js"),[],import.meta.url)).default);x.scale.set(.2627,.3166,.2949),x.position.set(81.7755,0,49.5),x.castShadow=!0,x.receiveShadow=!0,h.add(x)},p=(o,c)=>(c.gui.addFolder("配置参数").add(o,"mode",i.value),()=>{});return(o,c)=>(ct(),dt(ht,null,[S("div",Gt,[ut(z(Lt),{"initialization-data":z(e),"onUpdate:initializationData":c[0]||(c[0]=m=>mt(e)?e.value=m:null),onLoad:n,gui:!0,coordinateLine:!1,onGui:p,onAnimation:s},{panel:pt(()=>[k(gt(z(e)),1)]),_:1},8,["initialization-data"]),S("img",{src:z(vt),alt:""},null,8,Qt)]),k(" ¡ ")],64))}});const Jt=Mt(St,[["__scopeId","data-v-ae73a219"]]);export{Jt as default};
