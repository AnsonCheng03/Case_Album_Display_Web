import{$ as e,c as t,_ as i,l as c,p as r}from"./q-448d71e3.js";const a="_fullScreenSlideshow_13f1j_2",u="_closeButton_13f1j_15",h="_slideshowContainer_13f1j_29",d="_slideshow_13f1j_29",S="_active_13f1j_82",w="_highlight_13f1j_102",s={fullScreenSlideshow:a,closeButton:u,slideshowContainer:h,slideshow:d,active:S,highlight:w},f=l=>{const _=t(()=>i(()=>Promise.resolve().then(()=>g),void 0),"s_000GzeKFSMk",[l]);return l.fullScreenSlideshow.value&&e("div",null,{class:s.fullScreenSlideshow},[e("div",null,{class:s.closeButton,onClick$:_},"×",3,null),e("div",null,{class:s.slideshowContainer},e("div",null,{class:s.slideshow},l.photos.map(o=>{if(o.name===l.fullScreenSlideshow.value)return o.Images.map(n=>e("img",{src:o.path+"/"+n},{onClick$:t(()=>i(()=>import("./q-fc467a78.js"),["build/q-fc467a78.js","build/q-448d71e3.js"]),"s_H1P2Gw8FFKc")},null,3,n))}),1,null),1,null)],1,"lS_0")},v=()=>{const[l]=c();l.fullScreenSlideshow.value=null},g=Object.freeze(Object.defineProperty({__proto__:null,_hW:r,s_000GzeKFSMk:v,s_EpknaQ0Jdho:f},Symbol.toStringTag,{value:"Module"}));export{f as a,v as b,s};