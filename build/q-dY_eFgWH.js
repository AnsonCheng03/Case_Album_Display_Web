import{l as r,p as a,m as d,r as v,y as l,j as m,a as c,K as _,i as y}from"./q-QMjOxZ4q.js";import{B as g,a as b,b as h}from"./q-L78m3EcI.js";const C=()=>{const[e]=r(),t=`https://api.whatsapp.com/send?phone=85290732506&text=${`你好，我想查詢${e.name}的報價。`}`;window.open(t,"_blank")},k=e=>{const[s]=r(),o=window.location.href.split("?")[0],t={title:e.name,text:e.name+`

`+e.Text+`

按此查看更多：`,url:o+"?type="+e.type+"&name="+e.name};navigator.share&&navigator.canShare(t)?navigator.share(t):(window.alert("分享功能暫時未能使用，已為你複製連結。"),s(e.type,e.name,!1))},I=()=>{const[e,s]=r();s(e)},P=(e,s,o=!0)=>{const t=document.createElement("input"),u=window.location.href.split("?")[0];t.value=u+"?type="+e+"&name="+s,document.body.appendChild(t),t.select(),t.setSelectionRange(0,99999),document.execCommand("copy"),document.body.removeChild(t),o&&window.alert("連結已複製到剪貼簿。")},T=()=>{const[e,s]=r();s.fullScreenSlideshow.value=e.name},B=()=>{const[e,s]=r();e(s.type,s.name)},E="_displayCase_3228t_2",L="_caseDetails_3228t_21",w="_photoSelector_3228t_25",D="_background_3228t_78",A="_cover_3228t_83",S="_buttonContainer_3228t_102",f="_sharingButton_3228t_109",W="_quotationButton_3228t_110",V="_buttonImage_3228t_132",R="_cases_3228t_143",O="_selectCase_3228t_147",G="_container_3228t_155",N="_caseType_3228t_163",$="_caseTypeNavigation_3228t_168",n={displayCase:E,case:"_case_3228t_7",caseDetails:L,photoSelector:w,background:D,cover:A,buttonContainer:S,sharingButton:f,quotationButton:W,buttonImage:V,cases:R,selectCase:O,container:G,caseType:N,caseTypeNavigation:$},q=e=>{const s=l(()=>c(()=>Promise.resolve().then(()=>i),void 0),"s_Xf5RAS97rZM"),o=l(()=>c(()=>Promise.resolve().then(()=>i),void 0),"s_iIbgm00PvWM",[s]);return a("section",null,{class:n.displayCase},e.photos.value.map(t=>{var u;return d(),t.type==e.activeType.value&&a("div",null,{class:[n.case,"case"]},[a("h3",null,null,v(t,"name"),1,null),a("div",null,{class:n.caseDetails},[a("div",{onClick$:l(()=>c(()=>Promise.resolve().then(()=>i),void 0),"s_50HVq7I22aQ",[t,e])},{class:n.photoSelector},[m(g,{get class(){return n.cover},[_]:{class:_}},3,"WG_0"),a("img",{src:t.path+"/"+t.Cover},{class:n.background},null,3,null)],0,null),a("div",null,{class:n.caseDescription},(u=t.Text)==null?void 0:u.split(`
`).map(p=>a("p",null,null,p,1,p)),1,null),a("div",null,{class:n.buttonContainer},[a("button",{onClick$:l(()=>c(()=>Promise.resolve().then(()=>i),void 0),"s_lByNi0Wsm1E",[t])},{class:n.quotationButton},"報價",2,null),a("button",{onClick$:l(()=>c(()=>Promise.resolve().then(()=>i),void 0),"s_YV8yyzDG47s",[s,t])},{class:n.sharingButton},m(b,{get class(){return n.buttonImage},[_]:{class:_}},3,"WG_1"),0,null),a("button",{onClick$:l(()=>c(()=>Promise.resolve().then(()=>i),void 0),"s_Li61ZAYm3n8",[t,o])},{class:n.sharingButton},m(h,{get class(){return n.buttonImage},[_]:{class:_}},3,"WG_2"),0,null)],1,null)],1,null)],1,"WG_3")}),1,"WG_4")},i=Object.freeze(Object.defineProperty({__proto__:null,_hW:y,s_50HVq7I22aQ:T,s_Li61ZAYm3n8:I,s_Xf5RAS97rZM:P,s_YV8yyzDG47s:B,s_gl0cK830bdA:q,s_iIbgm00PvWM:k,s_lByNi0Wsm1E:C},Symbol.toStringTag,{value:"Module"}));export{y as _hW,T as s_50HVq7I22aQ,I as s_Li61ZAYm3n8,P as s_Xf5RAS97rZM,B as s_YV8yyzDG47s,q as s_gl0cK830bdA,k as s_iIbgm00PvWM,C as s_lByNi0Wsm1E};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
