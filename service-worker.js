/* Qwik Service Worker */
const appBundles=[["q-4VlOYQd9.js",[23,37],["3sccYCDd1Z0"]],["q-B0D3OKB6.js",[25,37],["50HVq7I22aQ","gl0cK830bdA","iIbgm00PvWM","lByNi0Wsm1E","Li61ZAYm3n8","Xf5RAS97rZM","YV8yyzDG47s"]],["q-B6XSkx27.js",[25,37],["BPhRZzC0M9U","c4GS49xCdTA","EVasqvu2VkQ","fBNGZ46JMLQ","K4z8nDmX6Us","KB6BiqC2icE","l6wsIrhHw4Q","nSS7s47PUtk","pZ6aYyi1UbY","Q6pH9Kv8TFg","qwiP7x4uvt0","w6kNbvlg4RM","WvVnaluU6nc","xBsGtxTpCBE","YlKKYEfWog0"]],["q-B9UKF93_.js",[37],["A5bZC7WO00A"]],["q-BDq5NfMY.js",[37]],["q-Bg703QPG.js",[23,37],["ayOAyFQWvdU","jYyS9IWa9Yk"]],["q-BIzAb7RS.js",[23,37],["wOIPfiQ04l4"]],["q-BnFTKj-s.js",[37],["VkLNXphUh5s"]],["q-Bq36Wx9q.js",[]],["q-Bw4Yx-6P.js",[37],["cBuMhsRv68k","Dkq0bJkbREM"]],["q-BwxGyBjg.js",[23,37],["Nk9PlpjQm9Y","p9MSze0ojs4"]],["q-Bxgy37tv.js",[23,37],["e0ssiDXoeAM"]],["q-CbpZ1Gwh.js",[23,37],["dle9cTZNTpw"]],["q-Ccj7Y9wz.js",[],["JiY3vISMTlU"]],["q-CDa8qmqM.js",[23,37],["BUbtvTyvVRE","WmYC5H00wtI"]],["q-CEq1Z-Cs.js",[37]],["q-ChIrpFO_.js",[37],["3lb9EjxI5sA"]],["q-CuC8_f7J.js",[37],["000GzeKFSMk","EpknaQ0Jdho"]],["q-D0-yle1d.js",[],["cZ1kFhYyIpE"]],["q-D7HhVXer.js",[23,37],["cpzMohpkFvA","Pij01qm0iSM","PZswLDq46H4"]],["q-D_BQMNfw.js",[],["PSIV9QhllZk"]],["q-DCjF-kb7.js",[23,37],["M0MhZOWBKK8"]],["q-DE00iwyo.js",[37]],["q-DOD78URD.js",[37]],["q-DOxZeRDv.js",[23,37],["ceU05TscGYE"]],["q-DQKoLzd1.js",[37]],["q-DryIYJXr.js",[23,37],["8gdLBszqbaM","Osdg8FnYTw4","pIf0khHUxfY"]],["q-fJkQnue_.js",[],["DyVc0YBIqQU"]],["q-I7jzIT-t.js",[37]],["q-ixSZXCEr.js",[17,37]],["q-r_RUMBZ6.js",[23,37],["HOkCW92ocKc","xYL1qOwPyDI","zqpXT8B27s0"]],["q-So8sqiAw.js",[17,37],["H1P2Gw8FFKc"]],["q-T4NZKkPy.js",[23,37],["02wMImzEAbk","fX0bDjeJa0E","RPDJAz33WLA","TxCFOy819ag"]],["q-tBR3ONeX.js",[37]],["q-U5IRGOcG.js",[37],["EtLAmXagu7I","FMO00A0rUWQ","GNm7b0MUsjg","IY5gY0QwJdY","lm95NVYLWfo"]],["q-udm1TLCf.js",[37],["Oiogz3xVO64"]],["q-UKuKCMOF.js",[37]],["q-WDKFMl5r.js",[]],["q-X2le2Wdx.js",[],["B3zvmXwIClo"]]];
const libraryBundleIds=[32];
const linkBundles=[[/^\/Skylight_Engineering\/$/,[36,7,22,30]],[/^\/Skylight_Engineering\/contact\/?$/,[36,7,33,21]],[/^\/Skylight_Engineering\/example\/?$/,[36,7,28,19]]];
const m="QwikBuild",k=new Set,g=new Map,u=[],L=(e,n)=>n.filter(s=>!e.some(i=>s.endsWith(i[0]))),q=(e,n)=>!!n&&!E(n),E=e=>{const n=e.headers.get("Cache-Control")||"";return n.includes("no-cache")||n.includes("max-age=0")},C=(e,n)=>e.some(s=>n.endsWith("/"+s[0])),U=(e,n)=>e.find(s=>s[0]===n),b=(e,n)=>n.map(s=>e[s]?e[s][0]:null),W=(e,n)=>n.map(s=>e.get(s)).filter(s=>s!=null),p=e=>{const n=new Map;for(const s of e){const i=s[2];if(i)for(const c of i)n.set(c,s[0])}return n},v=(e,n,s,i)=>new Promise((c,h)=>{const t=i.url,r=s.get(t);if(r)r.push([c,h]);else{const o=l=>{const a=s.get(t);if(a){s.delete(t);for(const[d]of a)d(l.clone())}else c(l.clone())},f=l=>{const a=s.get(t);if(a){s.delete(t);for(const[d,A]of a)A(l)}else h(l)};s.set(t,[[c,h]]),e.match(t).then(l=>{if(q(i,l))o(l);else return n(i).then(async a=>{a.ok&&await e.put(t,a.clone()),o(a)})}).catch(l=>e.match(t).then(a=>{a?o(a):f(l)}))}}),y=(e,n,s,i,c,h=!1)=>{const t=()=>{for(;u.length>0&&g.size<6;){const o=u.shift(),f=new Request(o);k.has(o)?t():(k.add(o),v(n,s,g,f).finally(t))}},r=o=>{try{const f=U(e,o);if(f){const l=b(e,f[1]),a=new URL(o,i).href,d=u.indexOf(a);d>-1?h&&(u.splice(d,1),u.unshift(a)):h?u.unshift(a):u.push(a),l.forEach(r)}}catch(f){console.error(f)}};Array.isArray(c)&&c.forEach(r),t()},w=(e,n,s,i,c,h,t)=>{try{y(e,i,c,h,b(e,n))}catch(r){console.error(r)}for(const r of t)try{for(const o of s){const[f,l]=o;if(f.test(r)){y(e,i,c,h,b(e,l));break}}}catch(o){console.error(o)}},B=(e,n,s,i)=>{try{const c=i.href.split("/"),h=c[c.length-1];c[c.length-1]="";const t=new URL(c.join("/"));y(e,n,s,t,[h],!0)}catch(c){console.error(c)}},N=(e,n,s,i)=>{const c=e.fetch.bind(e),h=p(n);e.addEventListener("fetch",t=>{const r=t.request;if(r.method==="GET"){const o=new URL(r.url);C(n,o.pathname)&&t.respondWith(e.caches.open(m).then(f=>(B(n,f,c,o),v(f,c,g,r))))}}),e.addEventListener("message",async({data:t})=>{if(t.type==="qprefetch"&&typeof t.base=="string"){const r=await e.caches.open(m),o=new URL(t.base,e.origin);Array.isArray(t.links)&&w(n,s,i,r,c,o,t.links),Array.isArray(t.bundles)&&y(n,r,c,o,t.bundles),Array.isArray(t.symbols)&&y(n,r,c,o,W(h,t.symbols))}}),e.addEventListener("activate",()=>{(async()=>{try{const t=await e.caches.open(m),o=(await t.keys()).map(l=>l.url),f=L(n,o);await Promise.all(f.map(l=>t.delete(l)))}catch(t){console.error(t)}})()})},x=()=>{typeof self<"u"&&typeof appBundles<"u"&&N(self,appBundles,libraryBundleIds,linkBundles)};x();addEventListener("install",()=>self.skipWaiting());addEventListener("activate",()=>self.clients.claim());
