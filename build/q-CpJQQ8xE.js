import{n as c,q as s,_,c as h,o as E,E as a,K as r,l as P,$ as l,w as f}from"./q-WDKFMl5r.js";import{a as v}from"./q-CXRGPt1g.js";const I=c(s(()=>_(()=>import("./q-udm1TLCf.js"),__vite__mapDeps([])),"s_Oiogz3xVO64")),O=c(s(()=>_(()=>import("./q-2v3gcfA4.js"),__vite__mapDeps([])),"s_jYyS9IWa9Yk")),T=c(s(()=>_(()=>import("./q-B6XSkx27.js"),__vite__mapDeps([])),"s_c4GS49xCdTA"));var g={};const A=()=>{const e=v(),o=h([[]]),t=typeof process<"u"&&!0&&g.PUBLIC_BASE_URL||"";return E(s(()=>_(()=>Promise.resolve().then(()=>u),void 0),"s_zqpXT8B27s0",[t,s(()=>_(()=>Promise.resolve().then(()=>u),void 0),"s_HOkCW92ocKc",[t,e]),o,e])),a(P,{children:[a(T,{photos:o,[r]:{photos:r}},3,"H1_0"),a(O,{photos:o,[r]:{photos:r}},3,"H1_1"),a(I,null,3,"H1_2")]},1,"H1_3")},H=()=>{const[e,o]=l();return fetch(o.url.origin+`${e}/Images.json?t=`+Date.now(),{cache:"no-store"})},L=async()=>{const[e,o,t,n]=l(),p=await o();try{const m=(await p.json()).map(i=>({...i,path:n.url.origin+`${e}/`+i.path}));t.value=m}catch{t.value=[[]]}},u=Object.freeze(Object.defineProperty({__proto__:null,_hW:f,s_HOkCW92ocKc:H,s_xYL1qOwPyDI:A,s_zqpXT8B27s0:L},Symbol.toStringTag,{value:"Module"}));export{f as _hW,H as s_HOkCW92ocKc,A as s_xYL1qOwPyDI,L as s_zqpXT8B27s0};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}