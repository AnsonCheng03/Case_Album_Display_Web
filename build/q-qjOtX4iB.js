import{l as d,V as S,y as l,a as _,o as g,W as P,j as i,p as u,C as f,K as s,z as v,i as b}from"./q-m2PSkFjv.js";import{a as y}from"./q-o25N8EUV.js";const E=()=>{const[e,t]=d();return fetch(t.url.origin+`${e}/Images.json?t=`+Date.now(),{cache:"no-store"})},w=S(l(()=>_(()=>import("./q-GciPLkDb.js"),__vite__mapDeps([])),"s_cBuMhsRv68k")),A=S(l(()=>_(()=>import("./q-fziW6KTG.js"),__vite__mapDeps([])),"s_EpknaQ0Jdho")),j="_banner_ug85d_2",I="_h2_ug85d_8",T="_tag_ug85d_17",h={banner:j,h2:I,tag:T},D=()=>{const e=y(),t=e.url.searchParams.get("type"),a=e.url.searchParams.get("name"),n=g(null),r=typeof process<"u"&&!0&&"/Skylight_Engineering"||"",o=g([]);return P(l(()=>_(()=>Promise.resolve().then(()=>m),void 0),"s_cpzMohpkFvA",[r,l(()=>_(()=>Promise.resolve().then(()=>m),void 0),"s_Pij01qm0iSM",[r,e]),o,e])),i(v,{children:[u("section",null,{class:h.banner},[u("h2",null,{class:h.h2},"裝修案例",3,null),u("p",null,{class:h.tag},f(c=>c.value.length,[o]),3,null)],3,null),i(w,{fullScreenSlideshow:n,name:a,photos:o,type:t,[s]:{fullScreenSlideshow:s,photos:s}},3,"0b_0"),i(A,{fullScreenSlideshow:n,photos:o,[s]:{fullScreenSlideshow:s,photos:s}},3,"0b_1")]},1,"0b_2")},L=async()=>{const[e,t,a,n]=d(),r=await t();try{const p=(await r.json()).map(c=>({...c,path:n.url.origin+`${e}/`+c.path}));a.value=p}catch{a.value=[]}},m=Object.freeze(Object.defineProperty({__proto__:null,_hW:b,s_PZswLDq46H4:D,s_Pij01qm0iSM:E,s_cpzMohpkFvA:L},Symbol.toStringTag,{value:"Module"}));export{b as _hW,D as s_PZswLDq46H4,E as s_Pij01qm0iSM,L as s_cpzMohpkFvA};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
