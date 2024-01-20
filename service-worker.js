/* Qwik Service Worker */
const appBundles=[["q-2xLMbbgR.js",[23]],["q-2XVv4Bcy.js",[7,23],["wOIPfiQ04l4"]],["q-4GcWQOOT.js",[23]],["q-6-nUy7ng.js",[7,23],["8gdLBszqbaM","Osdg8FnYTw4","pIf0khHUxfY"]],["q-78Y688UL.js",[23]],["q-7nrAatKC.js",[7,23],["Nk9PlpjQm9Y","p9MSze0ojs4"]],["q-9rfj0Dsk.js",[7,23],["M0MhZOWBKK8"]],["q-By_1o8vi.js",[23]],["q-c4Ik9EHW.js",[7,23],["cpzMohpkFvA","Pij01qm0iSM","PZswLDq46H4"]],["q-dbybv1W_.js",[23,31],["H1P2Gw8FFKc"]],["q-EoLAf2n0.js",[],["DyVc0YBIqQU"]],["q-eqIJThcC.js",[23],["Oiogz3xVO64"]],["q-fibQ43AX.js",[23]],["q-fziW6KTG.js",[23,31]],["q-GciPLkDb.js",[23],["cBuMhsRv68k","Dkq0bJkbREM"]],["q-GvGjMMCp.js",[7,23],["ceU05TscGYE"]],["q-HSNV95DA.js",[23,37],["50HVq7I22aQ","gl0cK830bdA","iIbgm00PvWM","lByNi0Wsm1E","Li61ZAYm3n8","Xf5RAS97rZM","YV8yyzDG47s"]],["q-iogq4rCH.js",[7,23],["BUbtvTyvVRE","WmYC5H00wtI"]],["q-IzOTb6Ko.js",[],["B3zvmXwIClo"]],["q-JGBYg2Mt.js",[7,23],["HOkCW92ocKc","xYL1qOwPyDI","zqpXT8B27s0"]],["q-JRPjulIo.js",[],["PSIV9QhllZk"]],["q-kJHPxuT7.js",[23],["EtLAmXagu7I","FMO00A0rUWQ","HJhXJTxqNuM","IY5gY0QwJdY","zSiRmJ0LnEQ"]],["q-KJuNXCJV.js",[7,23],["e0ssiDXoeAM"]],["q-m2PSkFjv.js",[]],["q-nFJzFNmB.js",[7,23],["02wMImzEAbk","fX0bDjeJa0E","RPDJAz33WLA","TxCFOy819ag"]],["q-nLOuS4bw.js",[23]],["q-nSTpfyIR.js",[],["cZ1kFhYyIpE"]],["q-OG198wQg.js",[7,23],["dle9cTZNTpw"]],["q-QClOv6cT.js",[23,37],["BPhRZzC0M9U","c4GS49xCdTA","EVasqvu2VkQ","fBNGZ46JMLQ","K4z8nDmX6Us","KB6BiqC2icE","l6wsIrhHw4Q","nSS7s47PUtk","pZ6aYyi1UbY","Q6pH9Kv8TFg","qwiP7x4uvt0","w6kNbvlg4RM","WvVnaluU6nc","xBsGtxTpCBE","YlKKYEfWog0"]],["q-sEJPsozA.js",[7,23],["ayOAyFQWvdU","jYyS9IWa9Yk"]],["q-t7i9TJ_J.js",[],["JiY3vISMTlU"]],["q-trxcXflD.js",[23],["000GzeKFSMk","EpknaQ0Jdho"]],["q-vkP2JYAM.js",[23],["3lb9EjxI5sA"]],["q-vTq5evZ5.js",[]],["q-wJ99ifPG.js",[23]],["q-WtgEGFAh.js",[23],["A5bZC7WO00A"]],["q-xJLtWIt1.js",[23],["VkLNXphUh5s"]],["q-y-WLjL5-.js",[23]],["q-z4e-CG4N.js",[7,23],["3sccYCDd1Z0"]]];
const libraryBundleIds=[24];
const linkBundles=[[/^\/Skylight_Engineering\/$/,[0,36,2,19]],[/^\/Skylight_Engineering\/contact\/?$/,[0,36,4,6]],[/^\/Skylight_Engineering\/example\/?$/,[0,36,34,8]]];
const m="QwikBuild",k=new Set,g=new Map,u=[],L=(e,n)=>n.filter(s=>!e.some(i=>s.endsWith(i[0]))),q=(e,n)=>!!n&&!E(n),E=e=>{const n=e.headers.get("Cache-Control")||"";return n.includes("no-cache")||n.includes("max-age=0")},C=(e,n)=>e.some(s=>n.endsWith("/"+s[0])),U=(e,n)=>e.find(s=>s[0]===n),b=(e,n)=>n.map(s=>e[s]?e[s][0]:null),W=(e,n)=>n.map(s=>e.get(s)).filter(s=>s!=null),p=e=>{const n=new Map;for(const s of e){const i=s[2];if(i)for(const c of i)n.set(c,s[0])}return n},v=(e,n,s,i)=>new Promise((c,h)=>{const t=i.url,r=s.get(t);if(r)r.push([c,h]);else{const o=l=>{const a=s.get(t);if(a){s.delete(t);for(const[d]of a)d(l.clone())}else c(l.clone())},f=l=>{const a=s.get(t);if(a){s.delete(t);for(const[d,A]of a)A(l)}else h(l)};s.set(t,[[c,h]]),e.match(t).then(l=>{if(q(i,l))o(l);else return n(i).then(async a=>{a.ok&&await e.put(t,a.clone()),o(a)})}).catch(l=>e.match(t).then(a=>{a?o(a):f(l)}))}}),y=(e,n,s,i,c,h=!1)=>{const t=()=>{for(;u.length>0&&g.size<6;){const o=u.shift(),f=new Request(o);k.has(o)?t():(k.add(o),v(n,s,g,f).finally(t))}},r=o=>{try{const f=U(e,o);if(f){const l=b(e,f[1]),a=new URL(o,i).href,d=u.indexOf(a);d>-1?h&&(u.splice(d,1),u.unshift(a)):h?u.unshift(a):u.push(a),l.forEach(r)}}catch(f){console.error(f)}};Array.isArray(c)&&c.forEach(r),t()},w=(e,n,s,i,c,h,t)=>{try{y(e,i,c,h,b(e,n))}catch(r){console.error(r)}for(const r of t)try{for(const o of s){const[f,l]=o;if(f.test(r)){y(e,i,c,h,b(e,l));break}}}catch(o){console.error(o)}},B=(e,n,s,i)=>{try{const c=i.href.split("/"),h=c[c.length-1];c[c.length-1]="";const t=new URL(c.join("/"));y(e,n,s,t,[h],!0)}catch(c){console.error(c)}},N=(e,n,s,i)=>{const c=e.fetch.bind(e),h=p(n);e.addEventListener("fetch",t=>{const r=t.request;if(r.method==="GET"){const o=new URL(r.url);C(n,o.pathname)&&t.respondWith(e.caches.open(m).then(f=>(B(n,f,c,o),v(f,c,g,r))))}}),e.addEventListener("message",async({data:t})=>{if(t.type==="qprefetch"&&typeof t.base=="string"){const r=await e.caches.open(m),o=new URL(t.base,e.origin);Array.isArray(t.links)&&w(n,s,i,r,c,o,t.links),Array.isArray(t.bundles)&&y(n,r,c,o,t.bundles),Array.isArray(t.symbols)&&y(n,r,c,o,W(h,t.symbols))}}),e.addEventListener("activate",()=>{(async()=>{try{const t=await e.caches.open(m),o=(await t.keys()).map(l=>l.url),f=L(n,o);await Promise.all(f.map(l=>t.delete(l)))}catch(t){console.error(t)}})()})},x=()=>{typeof self<"u"&&typeof appBundles<"u"&&N(self,appBundles,libraryBundleIds,linkBundles)};x();addEventListener("install",()=>self.skipWaiting());addEventListener("activate",()=>self.clients.claim());
