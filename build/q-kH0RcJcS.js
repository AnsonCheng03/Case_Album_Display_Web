import{j as J,l as G,k as st,r as it,m as K,n as H,o as $,q as lt,t as tt,v as D,w as g,x as ct,y as ut,z as dt,A as _t,B as mt,c as pt,C as vt,d as ft,D as yt,R as ht,e as St,f as Ct,h as Et,i as qt}from"./q-0pfwP8-f.js";import{a as S,l as et,u as wt,q as ot,e as bt,f as gt,Z as Lt,g as Rt,c as U,h as At,o as M,d as v,L as Pt,j as Dt,y as N,_ as It,i as kt}from"./q-QMjOxZ4q.js";const z=()=>S(()=>import("./q-w89CJl1w.js"),__vite__mapDeps([])),Q=[["/",[z,()=>S(()=>import("./q-QTxLp5Ab.js"),__vite__mapDeps([]))]],["contact/",[z,()=>S(()=>import("./q-BjSeB45s.js"),__vite__mapDeps([]))]],["example/",[z,()=>S(()=>import("./q-SCWOH3Us.js"),__vite__mapDeps([]))]]],B=[];const X=!0;const Tt=({track:f})=>{const[n,y,C,a,E,i,_,m,q,l,o]=et();async function w(){var Z;const[u,L]=f(()=>[l.value,n.value]),nt=wt(""),R=o.url,d=L?"form":u.type,rt=u.replaceState;let r,A,V=null,I;{r=new URL(u.dest,location),r.pathname.endsWith("/")||(r.pathname+="/");let k=J(Q,B,X,r.pathname);I=ot();const T=A=await G(r,I,{action:L,clearCache:!0});if(!T){l.untrackedValue={type:d,dest:r};return}const O=T.href,x=new URL(O,r);st(x,r)||(r=x,k=J(Q,B,X,r.pathname));try{V=await k}catch{window.location.href=O;return}}if(V){const[k,T,O,x]=V,P=O,at=P[P.length-1];o.prevUrl=R,o.url=r,o.params={...T},l.untrackedValue={type:d,dest:r};const b=it(A,o,P,nt);y.headings=at.headings,y.menu=x,C.value=bt(P),a.links=b.links,a.meta=b.meta,a.styles=b.styles,a.scripts=b.scripts,a.title=b.title,a.frontmatter=b.frontmatter;{q.viewTransition!==!1&&(document.__q_view_transition__=!0);let F;d==="popstate"&&(F=K()),(u.scroll&&(!u.forceReload||!H(r,R))&&(d==="link"||d==="popstate")||d==="form"&&!H(r,R))&&(document.__q_scroll_restore__=()=>$(d,r,R,F));const Y=A==null?void 0:A.loaders,t=window;if(Y&&Object.assign(_,Y),lt.clear(),!t._qCitySPA){if(t._qCitySPA=!0,history.scrollRestoration="manual",t.addEventListener("popstate",()=>{t._qCityScrollEnabled=!1,clearTimeout(t._qCityScrollDebounce),i(location.href,{type:"popstate"})}),t.removeEventListener("popstate",t._qCityInitPopstate),t._qCityInitPopstate=void 0,!t._qCityHistoryPatch){t._qCityHistoryPatch=!0;const s=history.pushState,p=history.replaceState,h=e=>(e===null||typeof e>"u"?e={}:(e==null?void 0:e.constructor)!==Object&&(e={_data:e}),e._qCityScroll=e._qCityScroll||g(document.documentElement),e);history.pushState=(e,c,j)=>(e=h(e),s.call(history,e,c,j)),history.replaceState=(e,c,j)=>(e=h(e),p.call(history,e,c,j))}document.body.addEventListener("click",s=>{if(s.defaultPrevented)return;const p=s.target.closest("a[href]");if(p&&!p.hasAttribute("preventdefault:click")){const h=p.getAttribute("href"),e=new URL(location.href),c=new URL(h,e);if(tt(c,e)&&H(c,e)){if(s.preventDefault(),!c.hash&&!c.href.endsWith("#")){c.href!==e.href&&history.pushState(null,"",c),t._qCityScrollEnabled=!1,clearTimeout(t._qCityScrollDebounce),D({...g(document.documentElement),x:0,y:0}),location.reload();return}i(p.getAttribute("href"))}}}),document.body.removeEventListener("click",t._qCityInitAnchors),t._qCityInitAnchors=void 0,window.navigation||(document.addEventListener("visibilitychange",()=>{if(t._qCityScrollEnabled&&document.visibilityState==="hidden"){const s=g(document.documentElement);D(s)}},{passive:!0}),document.removeEventListener("visibilitychange",t._qCityInitVisibility),t._qCityInitVisibility=void 0),t.addEventListener("scroll",()=>{t._qCityScrollEnabled&&(clearTimeout(t._qCityScrollDebounce),t._qCityScrollDebounce=setTimeout(()=>{const s=g(document.documentElement);D(s),t._qCityScrollDebounce=void 0},200))},{passive:!0}),removeEventListener("scroll",t._qCityInitScroll),t._qCityInitScroll=void 0,(Z=t._qCityBootstrap)==null||Z.remove(),t._qCityBootstrap=void 0,ct.resolve()}if(d!=="popstate"){t._qCityScrollEnabled=!1,clearTimeout(t._qCityScrollDebounce);const s=g(document.documentElement);D(s)}ut(window,d,R,r,rt),gt(I).then(()=>{var h;dt(I).setAttribute("q:route",k);const p=g(document.documentElement);D(p),t._qCityScrollEnabled=!0,o.isNavigating=!1,(h=m.r)==null||h.call(m)})}}}w()},Ot=":root{view-transition-name:none}",xt=async(f,n)=>{const[y,C,a,E]=et(),{type:i="link",forceReload:_=f===void 0,replaceState:m=!1,scroll:q=!0}=typeof n=="object"?n:{forceReload:n},l=a.value.dest,o=f===void 0?l:_t(f,E.url);if(!tt(o,l)){location.href=o.href;return}if(!_&&H(o,l)){i==="link"&&o.href!==location.href&&history.pushState(null,"",o),$(i,o,new URL(location.href),K()),i==="popstate"&&(window._qCityScrollEnabled=!0);return}return a.value={type:i,dest:o,forceReload:_,replaceState:m,scroll:q},G(o,ot()),J(Q,B,X,o.pathname),y.value=void 0,E.isNavigating=!0,new Promise(w=>{C.r=w})},Ut=f=>{Lt(N(()=>S(()=>Promise.resolve().then(()=>W),void 0),"s_RPDJAz33WLA"));const n=mt();if(!(n!=null&&n.params))throw new Error("Missing Qwik City Env Data");const y=Rt("url");if(!y)throw new Error("Missing Qwik URL Env Data");const C=new URL(y),a=U({url:C,params:n.params,isNavigating:!1,prevUrl:void 0},{deep:!1}),E={},i=At(U(n.response.loaders,{deep:!1})),_=M({type:"initial",dest:C,forceReload:!1,replaceState:!1,scroll:!0}),m=U(pt),q=U({headings:void 0,menu:void 0}),l=M(),o=n.response.action,w=o?n.response.loaders[o]:void 0,u=M(w?{id:o,data:n.response.formData,output:{result:w,status:n.response.status}}:void 0),L=N(()=>S(()=>Promise.resolve().then(()=>W),void 0),"s_fX0bDjeJa0E",[u,E,_,a]);return v(vt,q),v(ft,l),v(yt,m),v(ht,a),v(St,L),v(Ct,i),v(Et,u),v(qt,_),Pt(N(()=>S(()=>Promise.resolve().then(()=>W),void 0),"s_02wMImzEAbk",[u,q,l,m,n,L,i,E,f,_,a])),Dt(It,null,3,"qY_0")},W=Object.freeze(Object.defineProperty({__proto__:null,_hW:kt,s_02wMImzEAbk:Tt,s_RPDJAz33WLA:Ot,s_TxCFOy819ag:Ut,s_fX0bDjeJa0E:xt},Symbol.toStringTag,{value:"Module"}));export{kt as _hW,Tt as s_02wMImzEAbk,Ot as s_RPDJAz33WLA,Ut as s_TxCFOy819ag,xt as s_fX0bDjeJa0E};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
