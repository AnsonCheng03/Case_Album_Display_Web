import{v as i}from"./root2.js";import{A as l}from"./root2.js";const p=async()=>{const[t,a,e]=i(),s=await t();try{const r=(await s.json()).map(o=>({...o,path:e.url.origin+"/"+o.path}));a.value=r}catch{a.value=[[]]}};export{l as _hW,p as routes_component_useVisibleTask_zqpXT8B27s0};