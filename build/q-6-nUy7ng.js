import{b as f,X as b,k as P,j as g,y as p,a as d,_ as k,l as D}from"./q-m2PSkFjv.js";import{u as A,a as K,g as O,s as S,b as $,p as m,l as C}from"./q-By_1o8vi.js";const L=o=>{const e=A(),t=K(),{onClick$:r,prefetch:n,reload:c,replaceState:_,scroll:v,...s}=o,a=f(()=>O({...s,reload:c},t));s["link:app"]=!!a,s.href=a||o.href;const h=f(()=>!!a&&n!==!1&&n!=="js"&&S(a,t)||void 0),i=f(()=>h||!!a&&n!==!1&&$(a,t))?p(()=>d(()=>Promise.resolve().then(()=>u),void 0),"s_Osdg8FnYTw4"):void 0,y=a?b((l,F)=>{l.metaKey||l.ctrlKey||l.shiftKey||l.altKey||l.preventDefault()},"(event,target)=>{if(!(event.metaKey||event.ctrlKey||event.shiftKey||event.altKey)){event.preventDefault();}}"):void 0;return P("a",{...s,children:g(k,null,3,"AD_0"),"data-prefetch":h,onClick$:[y,r,a?p(()=>d(()=>Promise.resolve().then(()=>u),void 0),"s_pIf0khHUxfY",[e,c,_,v]):void 0],onFocus$:[s.onFocus$,i],onMouseOver$:[s.onMouseOver$,i],onQVisible$:[s.onQVisible$,i]},null,0,"AD_1")},j=async(o,e)=>{const[t,r,n,c]=D();o.defaultPrevented&&(e.hasAttribute("q:nbs")?await t(location.href,{type:"popstate"}):e.href&&(e.setAttribute("aria-pressed","true"),await t(e.href,{forceReload:r,replaceState:n,scroll:c}),e.removeAttribute("aria-pressed")))},w=(o,e)=>{var t;if(!((t=navigator.connection)!=null&&t.saveData)&&e&&e.href){const r=new URL(e.href);m(r.pathname),e.hasAttribute("data-prefetch")&&C(r,e,{prefetchSymbols:!1})}},u=Object.freeze(Object.defineProperty({__proto__:null,s_8gdLBszqbaM:L,s_Osdg8FnYTw4:w,s_pIf0khHUxfY:j},Symbol.toStringTag,{value:"Module"}));export{L as s_8gdLBszqbaM,w as s_Osdg8FnYTw4,j as s_pIf0khHUxfY};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}