import{p as l,y as t,a as i,l as _,i as c}from"./q-m2PSkFjv.js";const a="_fullScreenSlideshow_zvrer_2",u="_closeButton_zvrer_15",h="_slideshowContainer_zvrer_29",d="_slideshow_zvrer_29",v="_active_zvrer_84",S="_highlight_zvrer_104",s={fullScreenSlideshow:a,closeButton:u,slideshowContainer:h,slideshow:d,active:v,highlight:S},w=e=>{const r=t(()=>i(()=>Promise.resolve().then(()=>g),void 0),"s_000GzeKFSMk",[e]);return e.fullScreenSlideshow.value&&l("div",null,{class:s.fullScreenSlideshow},[l("div",null,{class:s.closeButton,onClick$:r},"×",3,null),l("div",null,{class:s.slideshowContainer},l("div",null,{class:s.slideshow},e.photos.value.map(o=>{if(o.name===e.fullScreenSlideshow.value)return o.Images.map(n=>l("img",{src:o.path+"/"+n},{onClick$:t(()=>i(()=>import("./q-dbybv1W_.js"),__vite__mapDeps([])),"s_H1P2Gw8FFKc")},null,3,n))}),1,null),1,null)],1,"lS_0")},f=()=>{const[e]=_();e.fullScreenSlideshow.value=null},g=Object.freeze(Object.defineProperty({__proto__:null,_hW:c,s_000GzeKFSMk:f,s_EpknaQ0Jdho:w},Symbol.toStringTag,{value:"Module"}));export{w as a,f as b,s};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
