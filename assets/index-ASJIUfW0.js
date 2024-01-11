import{_ as Ye,v as B,w as ie,y as Ze,A as et,C as tt,E as nt}from"./static-aza_T-_E.js";Intl.Segmenter===void 0&&Ye(()=>import("./intl_segmenter_polyfill_rs-KssUXeDx.js"),__vite__mapDeps([])).then(({Segmenter:e})=>{Object.defineProperty(Intl,"Segmenter",{value:e,configurable:!0,writable:!0})});function ne(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class rt extends Error{constructor(t,n,r,c){super(n),ne(this,"name",void 0),ne(this,"code",void 0),ne(this,"stack",void 0),this.name=t,this.code=r,this.stack=c}}const ot={},st={},xe={},Ve={},ct=[ot,st,xe,Ve],Ce=(e,t)=>{const n=ct.indexOf(e);return t.message+=`Error ${n}: https://github.com/Jack-Works/async-call-rpc/wiki/Errors#`+n,t},Pe={__proto__:null,Error,EvalError,RangeError,ReferenceError,SyntaxError,TypeError,URIError},ae="DOMException:",it=(e,t,n,r)=>{try{const c=Ne();if(e.startsWith(ae)&&c){const a=e.slice(ae.length);return new c(t,a)}else if(e in Pe){const a=new Pe[e](t);return a.stack=r,a.code=n,a}else return new rt(e,t,n,r)}catch{return new Error(`E${n} ${e}: ${t}
${r}`)}},Me=e=>String(e).replace(/^.+\n.+\n/,""),Ne=()=>{try{return DOMException}catch{}},F=e=>typeof e=="string",de=e=>typeof e=="boolean",q=e=>typeof e=="function",L=e=>typeof e=="object"&&e!==null,Q="Error",S=void 0,at=e=>Promise.resolve(e),G=Array.isArray,lt=()=>"() => replay()",X="2.0",ut=(e,t,n,r)=>{const c={jsonrpc:X,id:e,method:t,params:n,remoteStack:r};return pe(c,"id"),gt(c,"remoteStack"),c},dt=(e,t)=>{const n={jsonrpc:X,id:e,result:t};return pe(n,"id"),n},fe=(e,t,n,r)=>{e===S&&(e=null),t=Math.floor(t),Number.isNaN(t)&&(t=-1);const c={jsonrpc:X,id:e,error:{code:t,message:n,data:r}};return pe(c.error,"data"),c},ft=(e,t)=>{const n=Ue({},e,t),r=n.error;return r.code=-32700,r.message="Parse error",n},pt=e=>fe(e,-32600,"Invalid Request"),yt=e=>fe(e,-32601,"Method not found"),Ue=(e,t,n)=>{const{id:r}=e,{code:c,message:a,data:u}=n(t,e);return fe(r,c,a,u)},ke=(e="",t=-1)=>n=>{let r=Ie("",()=>n.message),c=Ie(Q,(f=n.constructor)=>q(f)&&f.name);const a=Ne();return a&&n instanceof a&&(c=ae+n.name),(F(n)||typeof n=="number"||de(n)||typeof n=="bigint")&&(c=Q,r=String(n)),{code:t,message:r,data:e?{stack:e,type:c}:{type:c}}},J=e=>{if(!L(e)||!("jsonrpc"in e)||e.jsonrpc!==X)return!1;if("params"in e){const t=e.params;if(!G(t)&&!L(t))return!1}return!0},Ie=(e,t)=>{try{const n=t();return n===S?e:String(n)}catch{return e}},pe=(e,t)=>{e[t]===S&&delete e[t]},gt=(e,t)=>{e[t]||delete e[t]},ye="AsyncCall/",ht=Symbol.for(ye+"ignored"),Re=Symbol.for(ye+"notify"),mt=Symbol.for(ye+"batch"),wt=()=>Math.random().toString(36).slice(2),re=e=>e===void 0?!0:e,bt=e=>{if(e==="all")return[!0,!0,!0,!0,!0,!0];if(!de(e)){const{beCalled:t,localError:n,remoteError:r,type:c,requestReplay:a,sendLocalStack:u}=e;return[re(t),re(n),re(r),c!=="basic",a,u]}return e?[!0,!0,!0,!0]:[]},Et=e=>{if(!de(e)){const{methodNotFound:t,unknownMessage:n}=e;return[t,n]}return[e,e]};function Ut(e,t){let n=!0,r,c,a,u;const f=async()=>{try{r=await e}catch(o){c=o,D("AsyncCall failed to start",o)}finally{n=!1}},y=o=>{if(a=o,St(o)&&o.setup(s=>he(s).then(me),s=>{const l=we(s);return J(l)?!0:at(l).then(J)}),_t(o)){const s=o;s.on&&s.on(l=>he(l).then(me).then(d=>d&&s.send(d)))}return o},{serializer:g,key:C="rpc",strict:j=!0,log:v=!0,parameterStructures:x="by-position",preferLocalImplementation:Y=!1,idGenerator:Z=wt,mapError:T,logger:z,channel:V,thenable:K}=t;e instanceof Promise?f():(r=e,n=!1);const[ee,H]=Et(j),[i,p,b,E,M,_]=bt(v),{log:h,error:D=h,debug:N=h,groupCollapsed:Ke=h,groupEnd:He=h,warn:Je=h}=z||console,U=new Map,Ge=async o=>{if(n)await f();else if(c)return be(c,"",o);let s="";try{const{params:l,method:d,id:m,remoteStack:k}=o,P=d.startsWith("rpc.")?Symbol.for(d):d,O=r&&r[P];if(!q(O)){if(ee)return yt(m);p&&N("Missing method",P,o);return}const I=G(l)?l:[l];s=Me(new Error().stack);const R=new Promise(W=>W(O.apply(r,I)));if(i)if(E){const W=[`${C}.%c${d}%c(${I.map(()=>"%o").join(", ")}%c)
%o %c@${m}`,"color: #d2c057","",...I,"",R,"color: gray; font-style: italic;"];if(M){const De=()=>{debugger;return O.apply(r,I)};De.toString=lt,W.push(De)}k?(Ke(...W),h(k),He()):h(...W)}else h(`${C}.${d}(${[...I].toString()}) @${m}`);const w=await R;return w===ht?void 0:dt(m,w)}catch(l){return be(l,s,o)}},Qe=async o=>{let s="",l="",d=0,m=Q;if("error"in o){const R=o.error;s=R.message,d=R.code;const w=R.data;L(w)&&"stack"in w&&F(w.stack)?l=w.stack:l="<remote stack not available>",L(w)&&"type"in w&&F(w.type)?m=w.type:m=Q,b&&(E?D(`${m}: ${s}(${d}) %c@${o.id}
%c${l}`,"color: gray",""):D(`${m}: ${s}(${d}) @${o.id}
${l}`))}const{id:k}=o;if(k===null||k===S||!U.has(k))return;const[P,O,I=""]=U.get(k);U.delete(k),"error"in o?O(it(m,s,d,l+`
    аt AsyncCall (rpc) 
`+I)):P(o.result)},he=async o=>{let s,l=S;try{if(s=await we(o),J(s))return l=await _e(s);if(G(s)&&s.every(J)&&s.length!==0)return Promise.all(s.map(_e));if(H){let d=s.id;return d===S&&(d=null),pt(d)}else return S}catch(d){return p&&D(d,s,l),ft(d,T||ke(d&&d.stack))}},me=async o=>{if(o)if(G(o)){const s=o.filter(l=>l&&"id"in l);return s.length===0?void 0:te(s)}else return te(o)},te=g?o=>g.serialization(o):Object,we=g?o=>g.deserialization(o):Object;V instanceof Promise?u=V.then(y):y(V);const be=(o,s,l)=>(L(o)&&"stack"in o&&(o.stack=s.split(`
`).reduce((d,m)=>d.replace(m+`
`,""),""+o.stack)),p&&D(o),Ue(l,o,T||ke(_?o.stack:S))),Ee=async(o,s=!1)=>{s&&(o=[...o]);const l=await te(o);return(a||await u).send(l)},Xe=(o,s)=>{for(const l of o)if("id"in l){const d=U.get(l.id);d&&d[1](s)}},_e=async o=>{if("method"in o){const s=Ge(o);if("id"in o)return s;try{await s}catch{}return S}return Qe(o)},Se=(o,s,l,d=!1)=>new Promise((m,k)=>{let P=S;if(o===mt&&(P=s.shift(),o=s.shift()),typeof o=="symbol"){const w=Symbol.keyFor(o)||o.description;if(w)if(w.startsWith("rpc."))o=w;else throw new TypeError("Not start with rpc.")}else if(o.startsWith("rpc."))throw Ce(xe,new TypeError);if(Y&&!n&&F(o)){const w=r&&r[o];if(q(w))return m(w(...s))}const O=Z();l=Me(l);const I=x==="by-name"&&s.length===1&&L(s[0])?s[0]:s,R=ut(d?S:O,o,I,_?l:S);if(P?(P.push(R),P.r||(P.r=[()=>Ee(P,!0),w=>Xe(P,w)])):Ee(R).catch(k),d)return m();U.set(O,[m,k,l])}),ve=(o,s)=>{const l={[s]:(...m)=>Se(s,m,new Error().stack)}[s],d={[s]:(...m)=>Se(s,m,new Error().stack,!0)}[s];return l[Re]=d[Re]=d,F(s)&&Object.defineProperty(A,s,{value:l,configurable:!0}),l},A={__proto__:new Proxy({},{get:ve})};return K===!1?A.then=S:K===S&&Object.defineProperty(A,"then",{configurable:!0,get(){Je(Ce(Ve,new TypeError("RPC used as Promise: ")))}}),new Proxy(A,{getPrototypeOf:()=>null,setPrototypeOf:(o,s)=>s===null,getOwnPropertyDescriptor(o,s){return s in A||ve(o,s),Object.getOwnPropertyDescriptor(A,s)}})}const _t=e=>"send"in e&&q(e.send),St=e=>"setup"in e&&q(e.setup),vt=(e,t)=>t.some(n=>e instanceof n);let Oe,$e;function Dt(){return Oe||(Oe=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ct(){return $e||($e=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const We=new WeakMap,le=new WeakMap,Fe=new WeakMap,oe=new WeakMap,ge=new WeakMap;function Pt(e){const t=new Promise((n,r)=>{const c=()=>{e.removeEventListener("success",a),e.removeEventListener("error",u)},a=()=>{n($(e.result)),c()},u=()=>{r(e.error),c()};e.addEventListener("success",a),e.addEventListener("error",u)});return t.then(n=>{n instanceof IDBCursor&&We.set(n,e)}).catch(()=>{}),ge.set(t,e),t}function Mt(e){if(le.has(e))return;const t=new Promise((n,r)=>{const c=()=>{e.removeEventListener("complete",a),e.removeEventListener("error",u),e.removeEventListener("abort",u)},a=()=>{n(),c()},u=()=>{r(e.error||new DOMException("AbortError","AbortError")),c()};e.addEventListener("complete",a),e.addEventListener("error",u),e.addEventListener("abort",u)});le.set(e,t)}let ue={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return le.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Fe.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return $(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function kt(e){ue=e(ue)}function It(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(se(this),t,...n);return Fe.set(r,t.sort?t.sort():[t]),$(r)}:Ct().includes(e)?function(...t){return e.apply(se(this),t),$(We.get(this))}:function(...t){return $(e.apply(se(this),t))}}function Rt(e){return typeof e=="function"?It(e):(e instanceof IDBTransaction&&Mt(e),vt(e,Dt())?new Proxy(e,ue):e)}function $(e){if(e instanceof IDBRequest)return Pt(e);if(oe.has(e))return oe.get(e);const t=Rt(e);return t!==e&&(oe.set(e,t),ge.set(t,e)),t}const se=e=>ge.get(e);function Ot(e,t,{blocked:n,upgrade:r,blocking:c,terminated:a}={}){const u=indexedDB.open(e,t),f=$(u);return r&&u.addEventListener("upgradeneeded",y=>{r($(u.result),y.oldVersion,y.newVersion,$(u.transaction),y)}),n&&u.addEventListener("blocked",y=>n(y.oldVersion,y.newVersion,y)),f.then(y=>{a&&y.addEventListener("close",()=>a()),c&&y.addEventListener("versionchange",g=>c(g.oldVersion,g.newVersion,g))}).catch(()=>{}),f}const $t=["get","getKey","getAll","getAllKeys","count"],jt=["put","add","delete","clear"],ce=new Map;function je(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(ce.get(t))return ce.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,c=jt.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(c||$t.includes(n)))return;const a=async function(u,...f){const y=this.transaction(u,c?"readwrite":"readonly");let g=y.store;return r&&(g=g.index(f.shift())),(await Promise.all([g[n](...f),c&&y.done]))[0]};return ce.set(t,a),a}kt(e=>({...e,get:(t,n,r)=>je(t,n)||e.get(t,n,r),has:(t,n)=>!!je(t,n)||e.has(t,n)}));function Te(e,t="val does not exist"){if(e==null)throw t instanceof Error?t:new Error(t)}function qe(e,t){if(e.guid===t)return e;for(const n of e.subdocs){const r=qe(n,t);if(r)return r}}const Tt=(e,t,n={})=>{let r=!1;const c=new Map,a=new Map,u=new Set;let f=null;const{origin:y="lazy-provider"}=n;let g={type:"idle"},C=0;const j=new Set,v=i=>{i.type==="syncing"?C++:(i.type==="synced"||i.type==="error")&&C--,C<0&&console.error("syncingStatus < 0, this should not happen",n.origin),C===0&&(g=i),i.type!=="synced"&&(g=i),C===0&&(r?g={type:"synced"}:g={type:"idle"}),j.forEach(p=>p())};async function x(i){const p=i.guid;{const E=p.startsWith("space:")?p.slice(6):p,M=`${e.guid}:space:${E}`,_=`space:${E}`,h=await t.queryDocState(M),D=await t.queryDocState(_);let N=!1;h&&h.missing.length!==2&&h.missing[0]!==0&&h.missing[1]!==0&&(B(i,h.missing,y),N=!0),D&&D.missing.length!==2&&D.missing[0]!==0&&D.missing[1]!==0&&(B(i,D.missing,y),N=!0),N&&await t.sendDocUpdate(p,ie(i,h?h.state:D?D.state:void 0))}if(!r)return;v({type:"syncing"});const b=await t.queryDocState(p,{stateVector:Ze(i)}).then(E=>(v({type:"synced"}),E)).catch(E=>{throw v({type:"error",error:E}),E});c.set(p,[]),b&&B(i,b.missing,y),r&&(await t.sendDocUpdate(p,ie(i,b?b.state:void 0)),i.emit("sync",[]))}function Y(i){const p=new Set;a.set(i.guid,p);const b=async(M,_)=>{y!==_&&(v({type:"syncing"}),t.sendDocUpdate(i.guid,M).then(()=>{v({type:"synced"})}).catch(h=>{v({type:"error",error:h}),console.error(h)}))},E=M=>{M.loaded.forEach(_=>{T(_).catch(console.error)}),M.removed.forEach(_=>{z(_)})};i.on("update",b),i.on("subdocs",E),p.add(()=>{i.off("update",b),i.off("subdocs",E)})}function Z(){var i;Te(f,"abortController should be defined");const p=(i=t.onDocUpdate)==null?void 0:i.call(t,(b,E)=>{var M;v({type:"syncing"});const _=qe(e,b);_?(B(_,E,y),c.has(b)&&((M=c.get(b))==null||M.forEach(h=>B(_,h,y)),c.delete(b))):(console.warn("doc not found",b),c.set(b,(c.get(b)??[]).concat(E))),v({type:"synced"})});f.signal.addEventListener("abort",()=>{p?.()})}async function T(i){u.has(i.guid)||(u.add(i.guid),Y(i),await x(i),await Promise.all([...i.subdocs].filter(p=>p.shouldLoad).map(p=>T(p))))}function z(i){u.delete(i.guid);const p=a.get(i.guid);p&&(p.forEach(b=>b()),a.delete(i.guid)),i.subdocs.forEach(z)}function V(){a.forEach(i=>{i.forEach(p=>p())}),a.clear(),u.clear()}function K(){r=!0,f=new AbortController,v({type:"syncing"}),T(e).then(()=>{v({type:"synced"})}).catch(i=>{v({type:"error",error:i}),console.error(i)}),Z()}async function ee(){r=!1,V(),Te(f,"abortController should be defined"),f.abort(),f=null}const H=async i=>{await x(i),await Promise.all([...i.subdocs.values()].map(p=>H(p)))};return{sync:async i=>{r=!0;try{i?await x(e):await H(e)}finally{r=!1}},get status(){return g},subscribeStatusChange(i){return j.add(i),()=>{j.delete(i)}},get connected(){return r},passive:!0,connect:K,disconnect:ee,datasource:t}},Ae=e=>(e.preventDefault(),e.returnValue="Data is not saved. Are you sure you want to leave?"),At=async e=>{window.addEventListener("beforeunload",Ae,{capture:!0}),await e,window.removeEventListener("beforeunload",Ae,{capture:!0})},Bt=1,ze="affine-local";function Lt(e){e.createObjectStore("workspace",{keyPath:"id"}),e.createObjectStore("milestone",{keyPath:"id"})}function Be(e,t="val does not exist"){if(e==null)throw t instanceof Error?t:new Error(t)}function Le(e){const t=new nt;return e.forEach(n=>{B(t,n)}),ie(t)}let xt=500;const Vt=({dbName:e=ze,mergeCount:t})=>{let n=null;const r=async()=>(n===null&&(n=Ot(e,Bt,{upgrade:Lt})),n);return{queryDocState:async(c,a)=>{var u;try{const f=await(await r()).transaction("workspace","readonly").objectStore("workspace").get(c);if(!f)return!1;const{updates:y}=f,g=Le(y.map(({update:C})=>C));return{missing:a!=null&&a.stateVector?et(g,a?.stateVector):g,state:tt(g)}}catch(f){if(!((u=f.message)!=null&&u.includes("The database connection is closing.")))throw f;return!1}},sendDocUpdate:async(c,a)=>{var u;try{const f=(await r()).transaction("workspace","readwrite").objectStore("workspace"),{updates:y}=await f.get(c)??{updates:[]};let g=[...y,{timestamp:Date.now(),update:a}];if(t&&g.length>=t){const C=Le(g.map(({update:j})=>j));g=[{timestamp:Date.now(),update:C}]}await At(f.put({id:c,updates:g}))}catch(f){if(!((u=f.message)!=null&&u.includes("The database connection is closing.")))throw f}},disconnect:()=>{r().then(c=>c.close()).then(()=>{n=null}).catch(console.error)},cleanup:async()=>{await(await r()).clear("workspace")}}},Wt=(e,t=ze)=>{const n=Vt({dbName:t,mergeCount:xt});let r=null;const c={get status(){return Be(r),r.status},subscribeStatusChange(a){return Be(r),r.subscribeStatusChange(a)},connect:()=>{c.connected&&c.disconnect(),r=Tt(e,n,{origin:"idb"}),r.connect()},disconnect:()=>{n?.disconnect(),r?.disconnect(),r=null},cleanup:async()=>{await n?.cleanup()},get connected(){return r?.connected||!1},datasource:n};return c};export{Ut as A,Wt as W};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
//# sourceMappingURL=index-ASJIUfW0.js.map
