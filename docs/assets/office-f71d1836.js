import{d as c}from"./index-e06c0445.js";import{d as n,h as i,o as p,c as d,p as l,e as _,a as h,_ as r}from"./index-04c26d2f.js";const u=e=>(l("data-v-4a0c7e26"),e=e(),_(),e),f={class:"office w-100% h-100% absolute"},m=u(()=>h("div",{id:"placeholder"},null,-1)),g=[m],y=n({__name:"office",setup(e){const{load:o}=c("http://127.0.0.1/ds-vpath/web-apps/apps/api/documents/api.js");return i(async()=>{await o();const t=await fetch({url:"http://localhost:81/getToken",method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({document:{fileType:"docx",key:"test4",title:"Example Document Title.docx",url:"http://192.168.110.140:3000/1.docx"},documentType:"word",editorConfig:{mode:"view",lang:"zh",customization:{zoom:-2},uiTheme:{id:"theme-light",type:"light"},plugins:{autostart:["asc.{0616AE85-5DBE-4B6B-A0A9-455C4F1503AD}","asc.{FFE1F462-1EA2-4391-990D-4CC84940B754}"],pluginsData:["http://192.168.110.140:3000/config.json"]}}})}).then(s=>s.json());new DocsAPI.DocEditor("placeholder",t.data)}),(a,t)=>(p(),d("div",f,g))}});const x=r(y,[["__scopeId","data-v-4a0c7e26"]]);export{x as default};
