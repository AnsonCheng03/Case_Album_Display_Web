import{$ as l,c as t,_ as i,l as c,p as r}from"./q-448d71e3.js";const a="_fullScreenSlideshow_1tepn_2",u="_closeButton_1tepn_15",d="_slideshowContainer_1tepn_29",S="_slideshow_1tepn_29",h="_active_1tepn_82",s={fullScreenSlideshow:a,closeButton:u,slideshowContainer:d,slideshow:S,active:h},w=e=>{const _=t(()=>i(()=>Promise.resolve().then(()=>f),void 0),"s_000GzeKFSMk",[e]);return e.fullScreenSlideshow.value&&l("div",null,{class:s.fullScreenSlideshow},[l("div",null,{class:s.closeButton,onClick$:_},"×",3,null),l("div",null,{class:s.slideshowContainer},l("div",null,{class:s.slideshow},e.photos.map(o=>{if(o.name===e.fullScreenSlideshow.value)return o.Images.map(n=>l("img",{src:o.path+"/"+n},{onClick$:t(()=>i(()=>import("./q-250f4861.js"),["build/q-250f4861.js","build/q-448d71e3.js"]),"s_H1P2Gw8FFKc")},null,3,n))}),1,null),1,null)],1,"lS_0")},v=()=>{const[e]=c();e.fullScreenSlideshow.value=null},f=Object.freeze(Object.defineProperty({__proto__:null,_hW:r,s_000GzeKFSMk:v,s_EpknaQ0Jdho:w},Symbol.toStringTag,{value:"Module"}));export{w as a,v as b,s};
