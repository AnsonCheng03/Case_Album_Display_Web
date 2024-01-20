import{V as n,y as s,a,o as d,W as g,j as r,K as _,z as P,l,i as E}from"./q-m2PSkFjv.js";import{a as O}from"./q-ozLmVHdG.js";const T=n(s(()=>a(()=>import("./q-eqIJThcC.js"),__vite__mapDeps([])),"s_Oiogz3xVO64")),f=n(s(()=>a(()=>import("./q-OVsjke4k.js"),__vite__mapDeps([])),"s_jYyS9IWa9Yk")),v=n(s(()=>a(()=>import("./q-QClOv6cT.js"),__vite__mapDeps([])),"s_c4GS49xCdTA")),y=()=>{const e=O(),o=d([[]]),t=typeof process<"u"&&!0&&"/Skylight_Engineering"||"";return g(s(()=>a(()=>Promise.resolve().then(()=>u),void 0),"s_zqpXT8B27s0",[t,s(()=>a(()=>Promise.resolve().then(()=>u),void 0),"s_HOkCW92ocKc",[t,e]),o,e])),r(P,{children:[r(v,{photos:o,[_]:{photos:_}},3,"H1_0"),r(f,{photos:o,[_]:{photos:_}},3,"H1_1"),r(T,null,3,"H1_2")]},1,"H1_3")},I=()=>{const[e,o]=l();return fetch(o.url.origin+`${e}/Images.json?t=`+Date.now(),{cache:"no-store"})},A=async()=>{const[e,o,t,c]=l(),p=await o();try{const m=(await p.json()).map(i=>({...i,path:c.url.origin+`${e}/`+i.path}));t.value=m}catch{t.value=[[]]}},u=Object.freeze(Object.defineProperty({__proto__:null,_hW:E,s_HOkCW92ocKc:I,s_xYL1qOwPyDI:y,s_zqpXT8B27s0:A},Symbol.toStringTag,{value:"Module"}));export{E as _hW,I as s_HOkCW92ocKc,y as s_xYL1qOwPyDI,A as s_zqpXT8B27s0};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
