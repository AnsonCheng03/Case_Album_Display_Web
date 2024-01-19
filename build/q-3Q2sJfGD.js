import{V as _,y as e,a as s,o as p,W as d,j as a,K as r,z as O,l as u,i as g}from"./q-QMjOxZ4q.js";import{a as v}from"./q-0pfwP8-f.js";const E=_(e(()=>s(()=>import("./q-QNJHf7UM.js"),__vite__mapDeps([])),"s_Oiogz3xVO64")),I=_(e(()=>s(()=>import("./q-UnDkHcZa.js"),__vite__mapDeps([])),"s_jYyS9IWa9Yk")),P=_(e(()=>s(()=>import("./q-Mg-yfS12.js"),__vite__mapDeps([])),"s_c4GS49xCdTA")),f=()=>{const o=v(),t=p([[]]);return d(e(()=>s(()=>Promise.resolve().then(()=>i),void 0),"s_zqpXT8B27s0",[e(()=>s(()=>Promise.resolve().then(()=>i),void 0),"s_HOkCW92ocKc",[o]),t,o])),a(O,{children:[a(P,{photos:t,[r]:{photos:r}},3,"H1_0"),a(I,{photos:t,[r]:{photos:r}},3,"H1_1"),a(E,null,3,"H1_2")]},1,"H1_3")},y=()=>{const[o]=u();return fetch(o.url.origin+"/Images.json?t="+Date.now(),{cache:"no-store"})},S=async()=>{const[o,t,c]=u(),l=await o();try{const m=(await l.json()).map(n=>({...n,path:c.url.origin+"/"+n.path}));t.value=m}catch{t.value=[[]]}},i=Object.freeze(Object.defineProperty({__proto__:null,_hW:g,s_HOkCW92ocKc:y,s_xYL1qOwPyDI:f,s_zqpXT8B27s0:S},Symbol.toStringTag,{value:"Module"}));export{g as _hW,y as s_HOkCW92ocKc,f as s_xYL1qOwPyDI,S as s_zqpXT8B27s0};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
