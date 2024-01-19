import{v as t}from"./root2.js";import{A as m}from"./root2.js";const i=e=>{const[n]=t(),r=window.location.href.split("?")[0],a={title:e.name,text:e.name+`

`+e.Text+`

按此查看更多：`,url:r+"?type="+e.type+"&name="+e.name};navigator.share&&navigator.canShare(a)?navigator.share(a):(window.alert("分享功能暫時未能使用，已為你複製連結。"),n(e.type,e.name,!1))};export{m as _hW,i as displayCase_component_shareLink_iIbgm00PvWM};
