import{G as f,H as m}from"./q-0pfwP8-f.js";import{l as d,q as u,s as w,t as y}from"./q-QMjOxZ4q.js";const b=async function(...o){const[s]=d(),n=o.length>0&&o[0]instanceof AbortSignal?o.shift():void 0;{const i=u(),l=o.map(t=>t instanceof SubmitEvent&&t.target instanceof HTMLFormElement?new FormData(t.target):t instanceof Event||t instanceof Node?null:t),a=s.getHash(),e=await fetch(`?${f}=${a}`,{method:"POST",headers:{"Content-Type":"application/qwik-json","X-QRL":a},signal:n,body:await w([s,...l])}),c=e.headers.get("Content-Type");if(e.ok&&c==="text/qwik-json-stream"&&e.body)return async function*(){try{for await(const t of m(e.body,i??document.documentElement,n))yield t}finally{n!=null&&n.aborted||await e.body.cancel()}}();if(c==="application/qwik-json"){const t=await e.text(),r=await y(t,i??document.documentElement);if(e.status===500)throw r;return r}}};export{b as s_wOIPfiQ04l4};
