import{l as v,d as P,$ as a,f as q,I as S,i as D,w as A,h as g,x as I,c as h,M as V,_ as d,p as L}from"./q-6cecbc01.js";const T=()=>{var t,n;const[o]=v(),e=(t=document.querySelector(".hero-slideshow"))==null?void 0:t.firstElementChild;e&&((n=document.querySelector(".hero-slideshow"))==null||n.appendChild(e)),o()},B=o=>P("svg",{...o,children:a("path",null,{d:"M6 3.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5zm4 0a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5z"},null,3,null)},{xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",class:"bi bi-pause",viewBox:"0 0 16 16",width:"1em",height:"1em","data-qwikest-icon":!0},0,"L8_0"),O=o=>P("svg",{...o,children:a("path",null,{d:"M10.804 8 5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z"},null,3,null)},{xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",class:"bi bi-play",viewBox:"0 0 16 16",width:"1em",height:"1em","data-qwikest-icon":!0},0,"2h_0"),M="_hero_1qnyf_1",K="_heroSlideshow_1qnyf_19",R="_heroSlideshowControls_1qnyf_64",b="_heroSlideshowControlsDotsContainer_1qnyf_76",k="_heroSlideshowControlsDots_1qnyf_76",x="_dot_1qnyf_89",Q="_active_1qnyf_97",G="_heroSlideshowControlsPlayButton_1qnyf_101",W="_single_1qnyf_111",Y="_heroSlideshow_controls_1qnyf_133",l={hero:M,heroSlideshow:K,heroSlideshowControls:R,heroSlideshowControlsDotsContainer:b,heroSlideshowControlsDots:k,dot:x,active:Q,heroSlideshowControlsPlayButton:G,single:W,heroSlideshow_controls:Y},z=o=>{q();const e=S(!1),t=S(!1),n=S(void 0),r=S(1),s=o.photos.flatMap(i=>{var _;return(_=i.Slideshow)==null?void 0:_.map(m=>i.path+"/"+m)}),c=h(()=>d(()=>Promise.resolve().then(()=>u),void 0),"s_EVasqvu2VkQ"),p=h(()=>d(()=>Promise.resolve().then(()=>u),void 0),"s_YlKKYEfWog0",[c]),E=h(()=>d(()=>Promise.resolve().then(()=>u),void 0),"s_WvVnaluU6nc",[c]),w=h(()=>d(()=>Promise.resolve().then(()=>u),void 0),"s_nSS7s47PUtk",[t,n,p]),y=h(()=>d(()=>Promise.resolve().then(()=>u),void 0),"s_fBNGZ46JMLQ",[t,n]),f=h(()=>d(()=>Promise.resolve().then(()=>u),void 0),"s_KB6BiqC2icE",[t,e,p,E,w,y]);return D(h(()=>d(()=>Promise.resolve().then(()=>u),void 0),"s_l6wsIrhHw4Q",[r,s,w,c])),s.length>0?a("section",{class:s.length===1?[l.hero,l.single]:l.hero},null,[a("div",null,{class:[l.heroSlideshow,"hero-slideshow"],style:A(i=>({aspectRatio:i.value}),[r])},s.length===1?a("img",{alt:s[0],src:s[0]},null,null,3,"K7_0"):g(I,{children:[...Array(s.length<=4?Math.ceil(6/s.length):1)].map((i,_)=>s.map((m,C)=>a("img",{alt:m,id:C.toString(),src:m},{class:l.heroSlideshowSlide},null,3,_+C)))},1,"K7_1"),1,null),s.length>1&&a("div",null,{class:l.heroSlideshowControls},[a("div",null,{class:l.heroSlideshowControlsDotsContainer},a("div",null,{class:l.heroSlideshowControlsDots},s.map((i,_)=>a("div",{class:s.length===2?_===0?[l.dot,l.active,"dot"]:[l.dot,"dot"]:_===2?[l.dot,l.active,"dot"]:[l.dot,"dot"],id:_.toString()},{onClick$:h(()=>d(()=>Promise.resolve().then(()=>u),void 0),"s_YqTL6DElQ1I",[f])},null,3,_)),1,null),1,null),a("div",null,{class:l.heroSlideshowControlsPlayButton,onClick$:h(()=>d(()=>Promise.resolve().then(()=>u),void 0),"s_GFuo1Mik8bA",[t,w,y])},t.value===!0?g(B,null,3,"K7_2"):g(O,null,3,"K7_3"),1,null)],1,"K7_4")],1,"K7_5"):g(I,{children:V(s,"length")},1,"K7_6")},$=()=>{var n;const o=document.querySelectorAll(".dot"),e=(n=document.querySelector(".hero-slideshow"))==null?void 0:n.children[2],t=e==null?void 0:e.id;o.forEach(r=>{r.classList.remove(l.active)}),t&&o[parseInt(t)].classList.add(l.active)},N=o=>{const[e]=v();e(o.target)},U=()=>{var n,r,s;const[o]=v(),e=(n=document.querySelector(".hero-slideshow"))==null?void 0:n.firstElementChild,t=(r=document.querySelector(".hero-slideshow"))==null?void 0:r.lastElementChild;e&&t&&((s=document.querySelector(".hero-slideshow"))==null||s.insertBefore(t,e)),o()},F=()=>{const[o,e,t,n]=v(),r=window.setInterval(function(){},Number.MAX_SAFE_INTEGER);if(r)for(let c=1;c<r;c++)window.clearInterval(c);if(e[0]===void 0)return;const s=new Image;s.src=e[0],s.onload=()=>{o.value=s.width/s.height},e.length>1&&(n(),t())},j=()=>{const[o,e,t]=v();o.value===!1?e():t()},H=()=>{const[o,e]=v();o.value=!1,clearInterval(e.value)},J=o=>{const[e,t,n,r,s,c]=v();if(t.value===!0)return;t.value=!0;const p=e.value;c();const E=Array.from(o.parentElement.children).indexOf(o),w=document.querySelector(`.${l.active}`),y=Array.from(o.parentElement.children).indexOf(w),f=E-y;for(let i=0;i<Math.abs(f);i++)setTimeout(f>0?n:r,300*i);setTimeout(()=>{p&&s(),t.value=!1},300*Math.abs(f))},Z=()=>{const[o,e,t]=v();o.value=!0,typeof e.value<"u"&&clearInterval(e.value),e.value=setInterval(t,3500)},u=Object.freeze(Object.defineProperty({__proto__:null,_hW:L,s_EVasqvu2VkQ:$,s_GFuo1Mik8bA:j,s_KB6BiqC2icE:J,s_WvVnaluU6nc:U,s_YlKKYEfWog0:T,s_YqTL6DElQ1I:N,s_c4GS49xCdTA:z,s_fBNGZ46JMLQ:H,s_l6wsIrhHw4Q:F,s_nSS7s47PUtk:Z},Symbol.toStringTag,{value:"Module"}));export{L as _hW,$ as s_EVasqvu2VkQ,j as s_GFuo1Mik8bA,J as s_KB6BiqC2icE,U as s_WvVnaluU6nc,T as s_YlKKYEfWog0,N as s_YqTL6DElQ1I,z as s_c4GS49xCdTA,H as s_fBNGZ46JMLQ,F as s_l6wsIrhHw4Q,Z as s_nSS7s47PUtk};
