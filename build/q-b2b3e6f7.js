import{$ as t,c as _,M as o,_ as p,l as m}from"./q-448d71e3.js";import{a as i,u as d}from"./q-c947d937.js";const u="_examples_1p13m_1",h="_cards_1p13m_5",y="_cardsContainer_1p13m_16",g="_card_1p13m_5",v="_cardImg_1p13m_50",T="_cardContent_1p13m_64",C="_photoTitle_1p13m_70",x="_photoType_1p13m_87",f="_photoName_1p13m_94",e={examples:u,cards:h,cardsContainer:y,card:g,cardImg:v,cardContent:T,photoTitle:C,photoType:x,photoName:f},I=n=>{const l=i(),s=d();return t("section",null,{class:e.examples},[t("h2",null,null,"案例分享",3,null),t("div",null,{class:e.cards},t("div",null,{class:e.cardsContainer},n.photos.map(a=>{var c;return(c=a.Highlight)==null?void 0:c.map(r=>t("div",{onClick$:_(()=>p(()=>Promise.resolve().then(()=>N),void 0),"s_ayOAyFQWvdU",[l,s,a])},{class:e.card},[t("img",{src:a.path+"/"+r},{class:e.cardImg},null,3,null),t("div",null,{class:e.cardContent},[a.type&&t("h3",null,{class:[e.photoType,e.photoTitle]},o(a,"type"),1,"ir_0"),a.data&&t("h3",null,{class:[e.photoData,e.photoTitle]},o(a,"data"),1,"ir_1"),a.name&&t("h3",null,{class:[e.photoName,e.photoTitle]},o(a,"name"),1,"ir_2")],1,null)],0,a.id))}),1,null),1,null)],1,"ir_3")},P=()=>{const[n,l,s]=m(),a=new URL(n.url.href);a.pathname="/Skylight_Engineering/example",a.searchParams.set("type",s.type),a.searchParams.set("name",s.name),l(a.href)},N=Object.freeze(Object.defineProperty({__proto__:null,s_ayOAyFQWvdU:P,s_jYyS9IWa9Yk:I},Symbol.toStringTag,{value:"Module"}));export{P as s_ayOAyFQWvdU,I as s_jYyS9IWa9Yk};