import{c as v,q as k,_ as b,n as H,u as p,a as m,b as B,d as E,e as K,w as P,f as Y,g as q}from"./root2.js";const Z='((i,a,r,s)=>{r=e=>{const t=document.querySelector("[q\\\\:base]");t&&a.active&&a.active.postMessage({type:"qprefetch",base:t.getAttribute("q:base"),...e})},document.addEventListener("qprefetch",e=>{const t=e.detail;a?r(t):i.push(t)}),navigator.serviceWorker.register("/Skylight_Engineering/service-worker.js").then(e=>{s=()=>{a=e,i.forEach(r),r({bundles:i})},e.installing?e.installing.addEventListener("statechange",t=>{t.target.state=="activated"&&s()}):e.active&&s()}).catch(e=>console.error(e))})([])',Ee=m("qc-s"),Ce=m("qc-c"),Se=m("qc-ic"),we=m("qc-h"),G=m("qc-l"),J=m("qc-n"),ke=m("qc-a"),be=m("qc-ir"),Ne=k(()=>b(()=>import("./spa_init_dyvc0ybiqqu.js"),__vite__mapDeps([])),"spa_init_DyVc0YBIqQU",{file:"/home/runner/work/Skylight_Engineering/Skylight_Engineering/node_modules/@builder.io/qwik-city/index.qwik.mjs",lo:1391,hi:6872,displayName:"spa_init"}),qe=()=>{},X=v(k(()=>b(()=>import("./routeroutlet_component_e0ssidxoeam.js"),__vite__mapDeps([])),"RouterOutlet_component_e0ssiDXoeAM",{file:"/home/runner/work/Skylight_Engineering/Skylight_Engineering/node_modules/@builder.io/qwik-city/index.qwik.mjs",lo:7931,hi:8645,displayName:"RouterOutlet_component"})),R=new WeakMap,C=new Map,L=new Set,$="qaction",w=e=>e.pathname+e.search+e.hash,y=(e,t)=>new URL(e,t.href),ee=(e,t)=>e.origin===t.origin,j=e=>e.endsWith("/")?e:e+"/",U=({pathname:e},{pathname:t})=>{const n=Math.abs(e.length-t.length);return n===0?e===t:n===1&&j(e)===j(t)},te=(e,t)=>e.search===t.search,D=(e,t)=>te(e,t)&&U(e,t),ne=(e,t,n)=>{let i=t??"";return n&&(i+=(i?"&":"?")+$+"="+encodeURIComponent(n.id)),e+(e.endsWith("/")?"":"/")+"q-data.json"+i},Ae=(e,t)=>{const n=e.href;if(typeof n=="string"&&typeof e.target!="string"&&!e.reload)try{const i=y(n.trim(),t.url),r=y("",t.url);if(ee(i,r))return w(i)}catch(i){console.error(i)}else if(e.reload)return w(y("",t.url));return null},ve=(e,t)=>{if(e){const n=y(e,t.url),i=y("",t.url);return!D(n,i)}return!1},De=(e,t)=>{if(e){const n=y(e,t.url),i=y("",t.url);return!U(n,i)}return!1},ie=e=>e&&typeof e.then=="function",Oe=(e,t,n,i)=>{const r=re(),s={head:r,withLocale:c=>P(i,c),resolveValue:c=>{const a=c.__id;if(c.__brand==="server_loader"&&!(a in e.loaders))throw new Error("You can not get the returned data of a loader that has not been executed for this request.");const l=e.loaders[a];if(ie(l))throw new Error("Loaders returning a promise can not be resolved for the head function.");return l},...t};for(let c=n.length-1;c>=0;c--){const a=n[c]&&n[c].head;a&&(typeof a=="function"?I(r,P(i,()=>a(s))):typeof a=="object"&&I(r,a))}return s.head},I=(e,t)=>{typeof t.title=="string"&&(e.title=t.title),S(e.meta,t.meta),S(e.links,t.links),S(e.styles,t.styles),S(e.scripts,t.scripts),Object.assign(e.frontmatter,t.frontmatter)},S=(e,t)=>{if(Array.isArray(t))for(const n of t){if(typeof n.key=="string"){const i=e.findIndex(r=>r.key===n.key);if(i>-1){e[i]=n;continue}}e.push(n)}},re=()=>({title:"",meta:[],links:[],styles:[],scripts:[],frontmatter:{}});function oe(e,t){const n=V(e),i=x(e),r=V(t),o=x(t);return F(e,n,i,t,r,o)}function F(e,t,n,i,r,o){let s=null;for(;t<n;){const c=e.charCodeAt(t++),a=i.charCodeAt(r++);if(c===91){const l=z(e,t),u=t+(l?3:0),d=A(e,u,n,93),f=e.substring(u,d),h=A(e,d+1,n,47),g=e.substring(d+1,h);t=d+1;const _=r-1;if(l){const T=ce(f,g,i,_,o,e,t+g.length+1,n);if(T)return Object.assign(s||(s={}),T)}const N=A(i,_,o,47,g);if(N==-1)return null;const O=i.substring(_,N);if(!l&&!g&&!O)return null;r=N,(s||(s={}))[f]=decodeURIComponent(O)}else if(c!==a&&!(isNaN(a)&&se(e,t)))return null}return W(e,t)&&W(i,r)?s||{}:null}function se(e,t){return e.charCodeAt(t)===91&&z(e,t+1)}function x(e){const t=e.length;return t>1&&e.charCodeAt(t-1)===47?t-1:t}function W(e,t){const n=e.length;return t>=n||t==n-1&&e.charCodeAt(t)===47}function V(e){return e.charCodeAt(0)===47?1:0}function z(e,t){return e.charCodeAt(t)===46&&e.charCodeAt(t+1)===46&&e.charCodeAt(t+2)===46}function A(e,t,n,i,r=""){for(;t<n&&e.charCodeAt(t)!==i;)t++;const o=r.length;for(let s=0;s<o;s++)if(e.charCodeAt(t-o+s)!==r.charCodeAt(s))return-1;return t-o}let M;(function(e){e[e.EOL=0]="EOL",e[e.OPEN_BRACKET=91]="OPEN_BRACKET",e[e.CLOSE_BRACKET=93]="CLOSE_BRACKET",e[e.DOT=46]="DOT",e[e.SLASH=47]="SLASH"})(M||(M={}));function ce(e,t,n,i,r,o,s,c){n.charCodeAt(i)===47&&i++;let a=r;const l=t+"/";let u=5;for(;a>=i&&u--;){const d=F(o,s,c,n,a,r);if(d){let f=n.substring(i,Math.min(a,r));return f.endsWith(l)&&(f=f.substring(0,f.length-l.length)),d[e]=decodeURIComponent(f),d}a=ae(n,i,l,a,i-1)+l.length}return null}function ae(e,t,n,i,r){let o=e.lastIndexOf(n,i);return o==i-n.length&&(o=e.lastIndexOf(n,i-n.length-1)),o>t?o:r}const Te=async(e,t,n,i)=>{if(Array.isArray(e))for(const r of e){const o=r[0],s=oe(o,i);if(s){const c=r[1],a=r[3],l=new Array(c.length),u=[],d=le(t,i);let f;return c.forEach((h,g)=>{Q(h,u,_=>l[g]=_,n)}),Q(d,u,h=>f=h==null?void 0:h.default,n),u.length>0&&await Promise.all(u),[o,s,l,f,a]}}return null},Q=(e,t,n,i)=>{if(typeof e=="function"){const r=R.get(e);if(r)n(r);else{const o=e();typeof o.then=="function"?t.push(o.then(s=>{i!==!1&&R.set(e,s),n(s)})):o&&n(o)}}},le=(e,t)=>{if(e){t=t.endsWith("/")?t:t+"/";const n=e.find(i=>i[0]===t||t.startsWith(i[0]+(t.endsWith("/")?"":"/")));if(n)return n[1]}},Pe=(e,t,n,i,r=!1)=>{if(t!=="popstate"){const o=D(n,i),s=n.hash===i.hash;if(!o||!s){const c={_qCityScroll:ue()};r?e.history.replaceState(c,"",w(i)):e.history.pushState(c,"",w(i))}}},ue=()=>({x:0,y:0,w:0,h:0}),fe=e=>{e=e.endsWith("/")?e:e+"/",L.has(e)||(L.add(e),document.dispatchEvent(new CustomEvent("qprefetch",{detail:{links:[e]}})))},Re=async(e,t,n)=>{const i=e.pathname,r=e.search,o=ne(i,r,n==null?void 0:n.action);let s;n!=null&&n.action||(s=C.get(o)),(n==null?void 0:n.prefetchSymbols)!==!1&&fe(i);let c;if(!s){const a=he(n==null?void 0:n.action);n!=null&&n.action&&(n.action.data=void 0),s=fetch(o,a).then(l=>{const u=new URL(l.url),d=u.pathname.endsWith("/q-data.json");if(u.origin!==location.origin||!d){location.href=u.href;return}if((l.headers.get("content-type")||"").includes("json"))return l.text().then(f=>{const h=Y(f,t);if(!h){location.href=e.href;return}if(n!=null&&n.clearCache&&C.delete(o),h.redirect)location.href=h.redirect;else if(n!=null&&n.action){const{action:g}=n,_=h.loaders[g.id];c=()=>{g.resolve({status:l.status,result:_})}}return h});location.href=e.href}),n!=null&&n.action||C.set(o,s)}return s.then(a=>(a||C.delete(o),c&&c(),a))},he=e=>{const t=e==null?void 0:e.data;if(t)return t instanceof FormData?{method:"POST",body:t}:{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json, charset=UTF-8"}}},Le=()=>B(G),je=()=>B(J),Ie=()=>H(p("qwikcity")),xe=(e,t,n,i)=>{e==="popstate"&&i?window.scrollTo(i.x,i.y):(e==="link"||e==="form")&&(de(t,n)||window.scrollTo(0,0))},de=(e,t)=>{const n=e.hash.slice(1),i=n&&document.getElementById(n);return i?(i.scrollIntoView(),!0):!!(!i&&e.hash&&D(e,t))},We=e=>({x:e.scrollLeft,y:e.scrollTop,w:Math.max(e.scrollWidth,e.clientWidth),h:Math.max(e.scrollHeight,e.clientHeight)}),Ve=()=>{const e=history.state;return e==null?void 0:e._qCityScroll},Me=e=>{const t=history.state||{};t._qCityScroll=e,history.replaceState(t,"")},ge=v(k(()=>b(()=>import("./qwikcityprovider_component_txcfoy819ag.js"),__vite__mapDeps([])),"QwikCityProvider_component_TxCFOy819ag",{file:"/home/runner/work/Skylight_Engineering/Skylight_Engineering/node_modules/@builder.io/qwik-city/index.qwik.mjs",lo:23780,hi:36508,displayName:"QwikCityProvider_component"}));function Qe(e){for(;e&&e.nodeType!==Node.ELEMENT_NODE;)e=e.parentElement;return e.closest("[q\\:container]")}const Be=v(k(()=>b(()=>import("./link_component_8gdlbszqbam.js"),__vite__mapDeps([])),"Link_component_8gdLBszqbaM",{file:"/home/runner/work/Skylight_Engineering/Skylight_Engineering/node_modules/@builder.io/qwik-city/index.qwik.mjs",lo:38174,hi:40818,displayName:"Link_component"})),me=e=>E("script",{nonce:K(e,"nonce")},{dangerouslySetInnerHTML:Z},null,3,"1Z_0"),_e=()=>q(ge,{children:[E("head",null,null,[E("meta",null,{charSet:"utf-8"},null,3,null,{fileName:"root.tsx",lineNumber:21,columnNumber:9}),E("link",null,{href:"/manifest.json",rel:"manifest"},null,3,null,{fileName:"root.tsx",lineNumber:22,columnNumber:9}),E("meta",null,{content:"width=device-width, initial-scale=1",name:"viewport"},null,3,null,{fileName:"root.tsx",lineNumber:23,columnNumber:9})],3,null),E("body",null,{lang:"en"},[q(X,null,3,"35_0",{fileName:"root.tsx",lineNumber:26,columnNumber:9}),q(me,null,3,"35_1",{fileName:"root.tsx",lineNumber:27,columnNumber:9})],1,null)]},1,"35_2"),Ue=Object.freeze(Object.defineProperty({__proto__:null,root_component_3sccYCDd1Z0:_e},Symbol.toStringTag,{value:"Module"}));export{Pe as A,Qe as B,Se as C,we as D,fe as E,Ue as F,Be as L,G as R,Ce as a,J as b,re as c,Ee as d,ke as e,be as f,je as g,Le as h,Ae as i,ve as j,De as k,ee as l,D as m,Ve as n,Re as o,Te as p,U as q,xe as r,qe as s,y as t,Ie as u,Oe as v,C as w,Me as x,We as y,Ne as z};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
