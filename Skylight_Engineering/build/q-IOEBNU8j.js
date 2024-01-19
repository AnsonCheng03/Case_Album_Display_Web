import{V as _,y as e,a as s,o as p,W as d,j as a,K as r,z as g,l,i as E}from"./q-m2PSkFjv.js";import{a as O}from"./q-Fw8K92Nn.js";const v=_(e(()=>s(()=>import("./q-eqIJThcC.js"),__vite__mapDeps([])),"s_Oiogz3xVO64")),I=_(e(()=>s(()=>import("./q-OfB9RvZH.js"),__vite__mapDeps([])),"s_jYyS9IWa9Yk")),y=_(e(()=>s(()=>import("./q-QClOv6cT.js"),__vite__mapDeps([])),"s_c4GS49xCdTA")),P=()=>{const o=O(),t=p([[]]);return d(e(()=>s(()=>Promise.resolve().then(()=>i),void 0),"s_zqpXT8B27s0",[e(()=>s(()=>Promise.resolve().then(()=>i),void 0),"s_HOkCW92ocKc",[o]),t,o])),a(g,{children:[a(y,{photos:t,[r]:{photos:r}},3,"H1_0"),a(I,{photos:t,[r]:{photos:r}},3,"H1_1"),a(v,null,3,"H1_2")]},1,"H1_3")},S=()=>{const[o]=l();return fetch(o.url.origin+"/Skylight_Engineering/Images.json?t="+Date.now(),{cache:"no-store"})},f=async()=>{const[o,t,c]=l(),u=await o();try{const m=(await u.json()).map(n=>({...n,path:c.url.origin+"/"+n.path}));t.value=m}catch{t.value=[[]]}},i=Object.freeze(Object.defineProperty({__proto__:null,_hW:E,s_HOkCW92ocKc:S,s_xYL1qOwPyDI:P,s_zqpXT8B27s0:f},Symbol.toStringTag,{value:"Module"}));export{E as _hW,S as s_HOkCW92ocKc,P as s_xYL1qOwPyDI,f as s_zqpXT8B27s0};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
