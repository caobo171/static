import{D as He,g as ze,h as qe,c as F,i as We,j as Ve,k as Ye,l as Ge,m as Je,n as Ke,f,W as E,s as Qe,e as ge,a as me,o as Xe,S as Ze,G as A,p as et,d as tt,q as ot,t as at,u as ye,B as nt,x as y,T as st,b as rt,_ as Me,J as it}from"../static-aza_T-_E.js";import{A as lt,W as ct}from"../index-ASJIUfW0.js";import{g as dt,n as pt,s as ut,t as ft,h as be,r as we,j as ve,l as ke,p as _e,k as Pe,m as xe,o as ht,q as gt,d as $e,_ as mt,f as oe,u as yt,v as bt,w as wt,x as vt,e as kt,C as Oe,S as _t,y as De,F as Ie,B as Te,a as Pt,b as xt,c as St,i as Bt,z as Ct,G as Et,T as Mt,H as $t}from"../affine-hYHTZtc7.js";import"../chunk.HB3GBEX5-GgPV6jEQ.js";import{s as Ot}from"../chunk.JHR6CYJZ-cu9OVhWa.js";import{i as P,s as Ue,c as Ae,t as x,r as S,n as b,W as ae,S as I,e as Dt,l as Se,o as It}from"../if-defined-pU-nnT_m.js";const Tt=Object.freeze(Object.defineProperty({__proto__:null,DisposableGroup:He,Slot:ze,assertEquals:qe,assertExists:F,assertInstanceOf:We,assertNotExists:Ve,assertType:Ye,debounce:dt,flattenDisposables:Ge,isEqual:Je,isPrimitive:Ke,noop:pt,sleep:ut,throttle:ft},Symbol.toStringTag,{value:"Module"})),L=async(e,o)=>{const t=e.createPage({id:o});t.awarenessStore.setFlag("enable_expand_database_block",!0),await t.load(async()=>{const n=t.addBlock("affine:page",{title:new f("BlockSuite Playground")});t.addBlock("affine:surface",{},n);const a=t.addBlock("affine:note",{},n),r=t.addBlock("affine:paragraph",{},a),s=t.getBlockById(r);F(s);const l=t.addBlock("affine:database",{columns:[],cells:{}},a);await new Promise(w=>requestAnimationFrame(w)),window.host.std.spec.getService("affine:database").initDatabaseBlock(t,s,l,"table",!0);const d=t.getBlockById(l);d.addColumn("end",be.create(be.name)),d.addColumn("end",we.create(we.name)),d.addColumn("end",ve.create(ve.name)),d.addColumn("end",ke.create(ke.name)),d.addColumn("end",_e.create(_e.name)),d.addColumn("end",Pe.create(Pe.name)),d.addColumn("end",xe.create(xe.name)),d.updateView(d.views[0].id,()=>({groupBy:{columnId:d.columns[1].id,type:"groupBy",name:"select"}})),["text","quote","h1","h2","h3","h4","h5","h6"].forEach(w=>{t.addBlock("affine:paragraph",{type:w,text:new f(`Paragraph type ${w}`)},l)}),["numbered","bulleted","todo","toggle"].forEach(w=>{t.addBlock("affine:list",{type:w,text:new f(`List type ${w}`)},l)}),t.addBlock("affine:paragraph",{},a),t.addBlock("affine:paragraph",{},a),t.addBlock("affine:paragraph",{},a),t.addBlock("affine:paragraph",{},a),t.addBlock("affine:paragraph",{},a),d.addView("kanban")}),t.resetHistory()};L.id="database";L.displayName="Database Example";L.description="Database block basic example";const N=async(e,o)=>{const t=e.getPage(o)??e.createPage({id:o});t.clear(),await t.load(()=>{const n=t.addBlock("affine:page",{title:new f}),a=t.addBlock("affine:surface",{},n),r=t.addBlock("affine:note",{},n);t.addBlock("affine:paragraph",{},r),t.addBlock("affine:embed-github",{owner:"toeverything",repo:"blocksuite"},r),t.addBlock("affine:embed-github",{owner:"toeverything",repo:"affine",xywh:"[0, 400, 400, 200]"},a),t.addBlock("affine:embed-github",{owner:"milkdown",repo:"milkdown",xywh:"[0, 700, 400, 200]"},a),t.addBlock("affine:paragraph",{},r)}),t.resetHistory()};N.id="embed";N.displayName="Example for embed blocks";N.description="Example for embed blocks";const H=async(e,o)=>{const t=e.getPage(o)??e.createPage({id:o});t.clear(),await t.load(()=>{const n=t.addBlock("affine:page",{title:new f});t.addBlock("affine:surface",{},n);const a=t.addBlock("affine:note",{},n);t.addBlock("affine:paragraph",{},a)}),t.resetHistory()};H.id="empty";H.displayName="Empty Editor";H.description="Start from empty editor";const C=E.Y,Ut=(e,o,t)=>(n,a,r)=>{const s=r.awareness,l=new Map,g=new Map,v=lt({queryDocState:async(i,p)=>{const c=l.get(i);return!c||p&&p!==c.clientID?!1:C.encodeStateAsUpdate(c)},sendDocUpdate:async(i,p)=>{const c=l.get(i);if(!c){g.has(i)?g.get(i).push(p):g.set(i,[p]);return}if(g.has(i)&&(g.get(i).forEach(k=>C.applyUpdate(c,k,o)),g.delete(i)),C.applyUpdate(c,p,o),c.store.pendingStructs)for(const m of c.store.pendingStructs.missing.keys()){const k=await v.queryDocState(c.guid,m);k&&C.applyUpdate(c,k,o)}},queryAwareness:async()=>ge(s,[s.clientID]),sendAwareness:async i=>{me(s,i,o)}},{channel:o,...Qe.merge(!0,{log:{beCalled:!1,localError:!0,remoteError:!0}},t.asyncCallOptions??{})}),_=new WeakMap,w=new WeakMap,K=new WeakMap,Q=i=>{if(_.has(i))return _.get(i);const p=(c,m)=>{m!==o&&v.sendDocUpdate(i.guid,c).catch(console.error)};return _.set(i,p),p},le=i=>{if(w.has(i))return w.get(i);const p=c=>{c.added.forEach(m=>l.set(m.guid,m)),c.added.forEach(m=>{v.queryDocState(m.guid).then(k=>{k&&(C.applyUpdate(m,k,o),m.emit("load",[]))}).catch(console.error),m.on("update",Q(m))}),c.removed.forEach(T)};return w.set(i,p),p},ce=i=>{if(K.has(i))return K.get(i);const p=()=>{T(i)};return K.set(i,p),p},de=(i,p)=>{if(p===o)return;const c=Object.values(i).reduce((k,Ne)=>[...k,...Ne]),m=ge(s,c);v.sendAwareness(m).catch(console.error)};function pe(i){fe(i),i.on("subdocs",le(i)),i.subdocs.forEach(pe),i.on("update",Q(i)),i.on("destroy",ce(i))}async function ue(i){const p=await v.queryDocState(i.guid);U&&(p!==!1&&C.applyUpdate(i,p,o),i.subdocs.forEach(c=>{ue(c).catch(console.error)}))}function T(i){l.delete(i.guid),i.subdocs.forEach(T),i.off("update",Q(i)),i.off("subdocs",le(i)),i.off("destroy",ce(i))}function fe(i){l.set(i.guid,i),i.subdocs.forEach(fe)}let U=!1;const he={flavour:e,passive:!0,connect(){U=!0,pe(a),ue(a).catch(console.error),v.queryAwareness().then(i=>me(s,i,o)).catch(console.error),s.on("update",de)},disconnect(){T(a),s.off("update",de),U=!1},get connected(){return U},cleanup:()=>{he.disconnect(),g.clear(),t.cleanup()}};return he},At=(...e)=>{class o extends BroadcastChannel{on(r){const s=l=>r(l.data);return this.addEventListener("message",s),()=>this.removeEventListener("message",s)}send(r){super.postMessage(r)}}const t=e[0],n=new o(t);return Ut("broadcast-channel",n,{cleanup:()=>{n.close()}})(...e)},B=new URLSearchParams(location.search),Fe=B.get("room")??Math.random().toString(16).slice(2,8),Be=(B.get("providers")??"bc").split(","),X=(B.get("blobStorage")??"memory").split(","),Ft=(B.get("features")??"").split(",");class Rt{constructor(o){this.flavour="blocksuite-indexeddb",this.passive=!0,this._connected=!1,this._provider=ct(o)}connect(){this._provider.connect(),this._connected=!0}disconnect(){this._provider.disconnect(),this._connected=!1}get connected(){return this._connected}}const jt=B.get("mode")==="edgeless"?"edgeless":"page",Ce=B.get("init"),ne=Fe.startsWith("playwright"),Re=e=>e(B);ne&&Object.defineProperty(window,"$blocksuite",{value:Object.freeze({store:Xe,blocks:ht,global:{utils:Tt},editor:gt})});function Lt(){const e=[],o=[],t=new Ze;t.register($e).register(mt);let n=A.AutoIncrement;return Be.includes("idb")&&(e.push((a,r)=>new Rt(r)),n=A.NanoID),Be.includes("bc")&&(e.push(At),n=A.NanoID),X.includes("memory")&&o.push(et),X.includes("idb")&&o.push(tt),X.includes("mock")&&o.push(ot),ne&&(n=A.AutoIncrement),{id:Fe,schema:t,providerCreators:e,idGenerator:n,blobStorages:o,defaultFlags:{enable_bultin_ledits:Ft.includes("ledits"),readonly:{"page:home":!1}}}}function se(e,o){const t=new oe;return t.page=e,o.append(t),t}function Z(e,o){return[["span",{style:"color: #c0c0c0"},` ${e}`],["span",{style:"color: #fff"},": "],["span",{style:"color: rgb(92, 213, 251)"},`${JSON.stringify(o)}`]]}const Nt=[{header:function(e){return"flavour"in e&&"yBlock"in e?["span",{style:"font-weight: bolder;"},["span",{style:"color: #fff"},"Block {"],...Z("flavour",e.flavour),["span",{style:"color: #fff"},","],...Z("id",e.id),["span",{style:"color: #fff"},"}"]]:null},hasBody:e=>"flavour"in e&&"yBlock"in e?!0:null,body:e=>{if("flavour"in e&&"yBlock"in e){const{props:o}=e.page._blockTree.getBlock(e.id)._parseYBlock(),t=Object.entries(o).flatMap(([n])=>[...Z(n,e[n]),["div",{},""]]);return["div",{style:"padding-left: 1em"},...t]}return null}}];window.devtoolsFormatters=Nt;const z=async(e,o)=>{const{count:t}=Re(a=>({count:Number(a.get("count"))||1e3})),n=e.createPage({id:o});await n.load(()=>{const a=n.addBlock("affine:page",{title:new f});n.addBlock("affine:surface",{},a);const r=n.addBlock("affine:note",{},a);for(let s=0;s<t;s++)n.addBlock("affine:paragraph",{text:new f("Hello, world! "+s)},r)})};z.id="heavy";z.displayName="Heavy Example";z.description="Heavy example on thousands of paragraph blocks";const Ht=["rect","triangle","ellipse","diamond"],q=async(e,o)=>{const{count:t}=Re(a=>({count:Number(a.get("count"))||100})),n=e.createPage({id:o});await n.load(()=>{const a=n.addBlock("affine:page",{title:new f}),r={};let s=0;for(;s<t;s++){const l=Math.random()*t*2,g=Math.random()*t*2,d=at("block");r[d]=ye({id:d,index:"a0",type:"shape",xywh:`[${l},${g},100,100]`,seed:Math.floor(Math.random()*2**31),shapeType:Ht[Math.floor(Math.random()*40)%4],radius:0,filled:!1,fillColor:"--affine-palette-shape-yellow",strokeWidth:4,strokeColor:"--affine-palette-line-yellow",strokeStyle:"solid",roughness:1.4},{deep:!1})}for(n.addBlock("affine:surface",{elements:new nt(ye(r,{deep:!1}))},a),s=0;s<t;s++){const l=Math.random()*-t*2-100,g=Math.random()*t*2,d=n.addBlock("affine:note",{xywh:`[${l}, ${g}, 100, 50]`},a);n.addBlock("affine:paragraph",{text:new f("Note #"+s)},d)}})};q.id="heavy-whiteboard";q.displayName="Heavy Whiteboard";q.description="Heavy Whiteboard on 200 elements by default";const W=async(e,o)=>{const t=e.getPage(o)??e.createPage({id:o}),n="page:page-linked",a=e.getPage("pageB")??e.createPage({id:n});t.clear(),a.clear(),await a.load(()=>{const r=a.addBlock("affine:page",{title:new f("Page B")});a.addBlock("affine:surface",{},r);const s=a.addBlock("affine:note",{},r);a.addBlock("affine:paragraph",{text:new f("This is page B")},s)}),await t.load(()=>{const r=t.addBlock("affine:page",{title:new f("Page A")});t.addBlock("affine:surface",{},r);const s=t.addBlock("affine:note",{},r);t.addBlock("affine:paragraph",{},s),t.addBlock("affine:embed-linked-page",{pageId:n},s)}),t.resetHistory(),a.resetHistory()};W.id="linked";W.displayName="Linked Page Editor";W.description="A demo with two linked pages";const V=async(e,o)=>{const t=e.createPage({id:o});await t.load(()=>{const a=t.addBlock("affine:page",{title:new f});t.addBlock("affine:surface",{},a);const r=t.addBlock("affine:note",{},a);t.addBlock("affine:paragraph",{},r)}),t.resetHistory();const n=document.getElementById("app");n&&(se(t,n),n.style.display="flex",n.childNodes.forEach(a=>{a instanceof oe&&(a.style.flex="1")}))};V.id="multiple-editor";V.displayName="Multiple Editor Example";V.description="Multiple Editor basic example";const Y=async(e,o)=>{const t=e.createPage({id:o});await t.load(()=>{const a=t.addBlock("affine:page",{title:new f});t.addBlock("affine:surface",{},a);const r=t.addBlock("affine:note",{},a);t.addBlock("affine:paragraph",{},r)}),t.resetHistory();const n=document.getElementById("app");n&&se(t,n)};Y.id="multiple-editor-vertical";Y.displayName="Vertical Multiple Editor Example";Y.description="Multiple Editor vertical layout example";const G=async(e,o)=>{const t=e.createPage({id:o}),n=e.createPage({id:"tempPage"});await t.load(),await n.load(()=>{const a=n.addBlock("affine:page",{title:new f("Pending Structs")}),r=E.Y.encodeStateVector(n.spaceDoc);n.addBlock("affine:surface",{},a);const s=n.addBlock("affine:note",{},a);n.addBlock("affine:paragraph",{text:new f("This is a paragraph block")},s);const l=E.Y.encodeStateAsUpdate(n.spaceDoc,r);E.Y.applyUpdate(t.spaceDoc,l)})};G.id="pending-structs";G.displayName="Pending Structs";G.description="Page doc with pending structs";const zt=`This playground is designed to:

* 📝 Test basic editing experience.
* ⚙️ Serve as E2E test entry.
* 🔗 Demonstrate how BlockSuite reconciles real-time collaboration with [local-first](https://martin.kleppmann.com/papers/local-first.pdf) data ownership.

## Controlling Playground Data Source
You might initially enter this page with the \`?init\` URL param. This is the default (opt-in) setup that automatically loads this built-in article. Meanwhile, you'll connect to a random single-user room via a broadcast channel provider by default. This is the "single-user mode" for local testing.

To test real-time collaboration, you can specify the room to join by adding the \`?room=foo\` config - Try opening this page with \`?room=foo\` in two different tabs and see what happens!

> Note that the second and subsequent users should not open the page with the \`?init\` param in this case.

If you are the only user in the room, your content will be lost after refresh. This is great for local debugging. But if you want local persistence, you can open this page with the \`?providers=idb&room=foo\` config, then click the init button in the bottom-left corner to initialize this default content.

As a pro tip, you can combine multiple providers! For example, feel free to open this page with \`?providers=idb,bc&room=hello\` params (IndexedDB + BroadcastChannel), and see if everything works as expected. Have fun!

For any feedback, please visit [BlockSuite issues](https://github.com/toeverything/blocksuite/issues) 📍`,J=async(e,o)=>{const t=e.createPage({id:o});await t.load(async()=>{const n=t.addBlock("affine:page",{title:new f("BlockSuite Playground")});t.addBlock("affine:surface",{},n);const a=t.addBlock("affine:note",{xywh:"[0, 100, 800, 640]"},n);await yt({page:t,noteId:a,markdown:zt}),t.resetHistory()})};J.id="preset";J.displayName="BlockSuite Starter";J.description="Start from friendly introduction";const je=Object.freeze(Object.defineProperty({__proto__:null,database:L,embed:N,empty:H,heavy:z,heavyWhiteboard:q,linked:W,multiEditor:V,multiEditorVertical:Y,pendingStructs:G,preset:J},Symbol.toStringTag,{value:"Module"}));var qt=Object.defineProperty,Wt=Object.getOwnPropertyDescriptor,Vt=(e,o,t,n)=>{for(var a=n>1?void 0:n?Wt(o,t):o,r=e.length-1,s;r>=0;r--)(s=e[r])&&(a=(n?s(o,t,a):s(a))||a);return n&&a&&qt(o,t,a),a};const Yt=Object.values(je);let ee=class extends Ue{render(){return y`
      <div class="container">
        ${Ae(Yt,e=>y`
            <sl-card
              class="card"
              @click=${()=>{const o=new URLSearchParams(window.location.search);o.set("init",e.id),window.location.search=o.toString()}}
            >
              <div slot="header">${e.displayName}</div>
              ${e.description}
            </sl-card>
          `)}
      </div>
    `}};ee.styles=P`
    .container {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      margin: 1rem;
      gap: 1rem;
    }

    .card {
      width: 300px;
      font-family: var(--sl-input-font-family);
      font-size: 14px;
      cursor: pointer;
    }
  `;ee=Vt([x("start-panel")],ee);var Gt=Object.defineProperty,Jt=Object.getOwnPropertyDescriptor,re=(e,o,t,n)=>{for(var a=n>1?void 0:n?Jt(o,t):o,r=e.length-1,s;r>=0;r--)(s=e[r])&&(a=(n?s(o,t,a):s(a))||a);return n&&a&&Gt(o,t,a),a};let M=class extends ae(I){constructor(){super(...arguments),this._show=!1}_renderPanel(){return y`<frame-panel .editor=${this.editor}></frame-panel>`}toggleDisplay(){this._show=!this._show}connectedCallback(){super.connectedCallback(),bt(e=>{Object.entries(e).forEach(([o,t])=>{customElements.define(o,t)})}),this.disposables.add(this.editor.slots.pageModeSwitched.on(()=>{this.editor.updateComplete.then(()=>this.requestUpdate()).catch(console.error)}))}render(){return y`
      ${this._show?y`<div class="custom-frame-container blocksuite-overlay">
            ${this._renderPanel()}
          </div>`:st}
    `}};M.styles=P`
    .custom-frame-container {
      position: absolute;
      top: 0;
      right: 0;
      border: 1px solid var(--affine-border-color, #e3e2e4);
      background-color: var(--affine-background-primary-color);
      height: 100vh;
      width: 320px;
      box-sizing: border-box;
      padding-top: 16px;
      z-index: 1;
    }
  `;re([S()],M.prototype,"_show",2);re([b({attribute:!1})],M.prototype,"editor",2);M=re([x("custom-frame-panel")],M);var Kt=Object.defineProperty,Qt=Object.getOwnPropertyDescriptor,ie=(e,o,t,n)=>{for(var a=n>1?void 0:n?Qt(o,t):o,r=e.length-1,s;r>=0;r--)(s=e[r])&&(a=(n?s(o,t,a):s(a))||a);return n&&a&&Kt(o,t,a),a};let $=class extends ae(Ue){constructor(){super(...arguments),this._show=!1}_renderPanel(){return y`<toc-panel
      .editor=${this.editor}
      .fitPadding=${[50,360,50,50]}
    ></toc-panel>`}toggleDisplay(){this._show=!this._show}connectedCallback(){super.connectedCallback(),wt(e=>{Object.entries(e).forEach(([o,t])=>{customElements.define(o,t)})})}render(){return y`
      ${this._show?y`
            <div class="custom-outline-container blocksuite-overlay">
              ${this._renderPanel()}
            </div>
          `:null}
    `}};$.styles=P`
    .custom-outline-container {
      position: absolute;
      top: 0;
      right: 0;
      border: 1px solid var(--affine-border-color, #e3e2e4);
      background: var(--affine-background-overlay-panel-color);
      height: 100vh;
      width: 320px;
      box-sizing: border-box;
      z-index: 1;
    }
  `;ie([S()],$.prototype,"_show",2);ie([b({attribute:!1})],$.prototype,"editor",2);$=ie([x("custom-outline-panel")],$);var Xt=Object.defineProperty,Zt=Object.getOwnPropertyDescriptor,eo=(e,o,t,n)=>{for(var a=n>1?void 0:n?Zt(o,t):o,r=e.length-1,s;r>=0;r--)(s=e[r])&&(a=(n?s(o,t,a):s(a))||a);return n&&a&&Xt(o,t,a),a};let R=class extends I{constructor(){super(...arguments),this.currentContent=null}showContent(e){this.currentContent&&this.currentContent.remove(),this.style.display="block",e.classList.add("blocksuite-overlay"),this.currentContent=e,this.append(e)}hideContent(){this.currentContent&&(this.style.display="none",this.currentContent.remove(),this.currentContent=null)}toggle(e){this.currentContent!==e?this.showContent(e):this.hideContent()}render(){return y``}};R.styles=P`
    left-side-panel {
      padding-top: 50px;
      width: 300px;
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      display: none;
    }
  `;R=eo([x("left-side-panel")],R);var to=Object.defineProperty,oo=Object.getOwnPropertyDescriptor,ao=(e,o,t,n)=>{for(var a=n>1?void 0:n?oo(o,t):o,r=e.length-1,s;r>=0;r--)(s=e[r])&&(a=(n?s(o,t,a):s(a))||a);return n&&a&&to(o,t,a),a};let j=class extends I{constructor(){super(...arguments),this.currentContent=null}showContent(e){this.currentContent&&this.currentContent.remove(),this.style.display="block",e.classList.add("blocksuite-overlay"),this.currentContent=e,this.append(e)}hideContent(){this.currentContent&&(this.style.display="none",this.currentContent.remove(),this.currentContent=null)}render(){return y``}toggle(e){this.currentContent!==e?this.showContent(e):this.hideContent()}};j.styles=P`
    side-panel {
      width: 300px;
      background-color: var(--affine-background-secondary-color);
      position: absolute;
      top: 0;
      right: 0;
      height: 100%;
      display: none;
    }
  `;j=ao([x("side-panel")],j);function no(){vt.customElements.add(e=>{const o=document.createElement("div");return o.textContent="❤️",o.setAttribute("data-testid","custom-format-bar-element"),o.addEventListener("click",()=>{const n=e.host.selection;console.log("selections",n.value)}),o})}var so=Object.defineProperty,ro=Object.getOwnPropertyDescriptor,h=(e,o,t,n)=>{for(var a=n>1?void 0:n?ro(o,t):o,r=e.length-1,s;r>=0;r--)(s=e[r])&&(a=(n?s(o,t,a):s(a))||a);return n&&a&&so(o,t,a),a};function io(e){const{page:o}=e,t=o.getBlockByFlavour("affine:surface")[0];F(t);const n=t.id,a=e.querySelector(`affine-surface[data-block-id="${n}"]`);return F(a),a}const O=kt(document.documentElement),te={};Oe.forEach(e=>{te[e]=O[e]});const lo=_t.filter(e=>!De.includes(e)&&!Oe.includes(e)&&!Ie.includes(e));let Ee=!1;const co="https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.11.2/dist";Ot(co);function po(e,o){const t=e.addFolder({title:"Size",expanded:!1}),n=e.addFolder({title:"Font Family",expanded:!1}),a=e.addFolder({title:"Color",expanded:!1}),r=e.addFolder({title:"Others",expanded:!1});De.forEach(s=>{t.addBinding({[s]:isNaN(parseFloat(O[s]))?0:parseFloat(O[s])},s,{min:0,max:100}).on("change",l=>{o.setProperty(s,`${Math.round(l.value)}px`)})}),Ie.forEach(s=>{n.addBinding({[s]:O[s]},s).on("change",l=>{o.setProperty(s,l.value)})}),lo.forEach(s=>{r.addBinding({[s]:O[s]},s).on("change",l=>{o.setProperty(s,l.value)})}),n.addBinding({"--affine-font-family":"Roboto Mono, apple-system, BlinkMacSystemFont,Helvetica Neue, Tahoma, PingFang SC, Microsoft Yahei, Arial,Hiragino Sans GB, sans-serif, Apple Color Emoji, Segoe UI Emoji,Segoe UI Symbol, Noto Color Emoji"},"--affine-font-family").on("change",s=>{o.setProperty("--affine-font-family",s.value)});for(const s in te)a.addBinding(te,s).on("change",l=>{o.setProperty(s,l.value)})}function uo(e){let o=[];return e.std.command.pipe().getBlockSelections().inline((t,n)=>{const a=t.currentBlockSelections;if(a)return o=a.map(r=>t.std.view.viewFromPath("block",r.path)).filter(r=>r!==null&&Te.matchFlavours(r.model,["affine:paragraph","affine:list","affine:code"])),n()}).run(),o}let u=class extends I{constructor(){super(...arguments),this._connected=!0,this._canUndo=!1,this._canRedo=!1,this.mode="page",this.readonly=!1,this._hasOffset=!1,this._showStyleDebugMenu=!1,this._dark=localStorage.getItem("blocksuite:dark")==="true",this._darkModeChange=e=>{this._setThemeMode(!!e.matches)}}get page(){return this.editor.page}get pageService(){return this.editor.host.spec.getService("affine:page")}createRenderRoot(){const e=window.matchMedia("(prefers-color-scheme: dark)");return this._setThemeMode(this._dark&&e.matches),e.addEventListener("change",this._darkModeChange),this}connectedCallback(){super.connectedCallback();const e=async()=>{const o=this.editor.host;if(!o){await new Promise(a=>{setTimeout(a,500)}),e().catch(console.error);return}const n=new URL(window.location.toString()).searchParams.get("sel");if(n)try{const a=JSON.parse(Se.decompressFromEncodedURIComponent(n));o.std.selection.fromJSON(a)}catch{return}};e().catch(console.error)}disconnectedCallback(){super.disconnectedCallback(),window.matchMedia("(prefers-color-scheme: dark)").removeEventListener("change",this._darkModeChange)}_toggleConnection(){this._connected?(this.workspace.providers.forEach(e=>{"passive"in e&&e.connected&&e.disconnect()}),this._connected=!1):(this.workspace.providers.forEach(e=>{"passive"in e&&!e.connected&&e.connect()}),this._connected=!0)}_switchEditorMode(){const e=document.querySelector("affine-editor-container");if(e instanceof oe){const o=e.mode==="page"?"edgeless":"page";e.mode=o}else{const o=this.editor.mode==="page"?"edgeless":"page";this.mode=o}}_toggleOutlinePanel(){this.outlinePanel.toggleDisplay()}_toggleFramePanel(){this.framePanel.toggleDisplay()}_toggleCopilotPanel(){this.sidePanel.toggle(this.copilotPanel)}_togglePagesPanel(){this.leftSidePanel.toggle(this.pagesPanel)}_createMindMap(){const e=uo(this.editor.host),o=n=>({text:n.text?.toString()??"",children:n.children.map(o)}),t={text:"Root",children:e.map(n=>o(n.model))};Te.mindMap.drawInEdgeless(io(this.editor),t)}_switchOffsetMode(){this._hasOffset=!this._hasOffset}_addNote(){const e=this.page.root;if(!e)return;const o=e.id;this.page.captureSync();const n=`[0,${e.children.length*60},800,95]`,a=this.page.addBlock("affine:note",{xywh:n},o);this.page.addBlock("affine:paragraph",{},a)}_exportPdf(){this.pageService.exportManager.exportPdf().catch(console.error)}_exportHtml(){Pt(this.page).catch(console.error)}async _exportMarkDown(){xt(this.page).catch(console.error)}_exportPng(){this.pageService.exportManager.exportPng().catch(console.error)}async _exportSnapshot(){const e=await St(this.workspace,[...this.workspace.pages.values()]),o=URL.createObjectURL(e),t=document.createElement("a");t.setAttribute("href",o),t.setAttribute("download",`${this.page.id}.bs.zip`),t.click(),t.remove(),URL.revokeObjectURL(o)}_importSnapshot(){const e=document.createElement("input");e.setAttribute("type","file"),e.setAttribute("accept",".zip"),e.multiple=!1,e.onchange=async()=>{const o=e.files?.item(0);if(o)try{await Bt(this.workspace,o),this.requestUpdate()}catch(t){console.error("Invalid snapshot."),console.error(t)}finally{e.remove()}},e.click()}_shareUrl(){const e=rt(this.workspace),o=new URL(window.location.toString());o.searchParams.set("init",e),window.history.pushState({},"",o)}async _toggleStyleDebugMenu(){if(!Ee){Ee=!0;const{Pane:e}=await Me(()=>import("../tweakpane-DZHmlJl5.js"),__vite__mapDeps([]));this._styleMenu=new e({title:"Waiting"}),this._styleMenu.hidden=!0,this._styleMenu.element.style.width="650",po(this._styleMenu,document.documentElement.style)}this._showStyleDebugMenu=!this._showStyleDebugMenu,this._showStyleDebugMenu?this._styleMenu.hidden=!1:this._styleMenu.hidden=!0}_toggleReadonly(){const e=this.page;e.awarenessStore.setReadonly(e,!e.readonly)}_shareSelection(){const e=this.editor.host?.selection.value;if(!e||e.length===0)return;const o=e.map(a=>a.toJSON()),t=Se.compressToEncodedURIComponent(JSON.stringify(o)),n=new URL(window.location.toString());n.searchParams.set("sel",t),window.history.pushState({},"",n)}_setThemeMode(e){const o=document.querySelector("html");this._dark=e,localStorage.setItem("blocksuite:dark",e?"true":"false"),o&&(o.setAttribute("data-theme",e?"dark":"light"),this._insertTransitionStyle("color-transition",0),e?(o.classList.add("dark"),o.classList.add("sl-theme-dark")):(o.classList.remove("dark"),o.classList.remove("sl-theme-dark")))}_insertTransitionStyle(e,o){const t=document.documentElement,n=document.createElement("style"),a=["sl-transition-x-fast"];n.innerHTML=`html.${e} * { transition: all ${o}ms 0ms linear !important; } :root { ${a.map(r=>`--${r}: ${o}ms`)} }`,t.appendChild(n),t.classList.add(e),setTimeout(()=>{n.remove(),t.classList.remove(e)},o)}_toggleDarkMode(){this._setThemeMode(!this._dark)}_extendFormatBar(){no()}firstUpdated(){this.page.slots.historyUpdated.on(()=>{this._canUndo=this.page.canUndo,this._canRedo=this.page.canRedo})}update(e){if(e.has("mode")){const o=this.mode;this.editor.mode=o}if(e.has("_hasOffset")){const o=document.getElementById("app");if(!o)return;const t=this._hasOffset?{margin:"60px 40px 240px 40px",overflow:"auto",height:"400px",boxShadow:"0 0 10px 0 rgba(0, 0, 0, 0.2)"}:{margin:"0",overflow:"initial",height:"100%",boxShadow:"initial"};Object.assign(o.style,t)}super.update(e)}render(){return y`
      <style>
        .debug-menu {
          display: flex;
          flex-wrap: nowrap;
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          overflow: auto;
          z-index: 1000; /* for debug visibility */
          pointer-events: none;
        }

        @media print {
          .debug-menu {
            display: none;
          }
        }

        .default-toolbar {
          display: flex;
          gap: 5px;
          padding: 8px;
          width: 100%;
          min-width: 390px;
        }

        .default-toolbar > * {
          pointer-events: auto;
        }

        .edgeless-toolbar {
          align-items: center;
          margin-right: 17px;
          pointer-events: auto;
        }

        .edgeless-toolbar sl-select,
        .edgeless-toolbar sl-color-picker,
        .edgeless-toolbar sl-button {
          margin-right: 4px;
        }
      </style>
      <div class="debug-menu default blocksuite-overlay">
        <div class="default-toolbar">
          <!-- undo/redo group -->
          <sl-button-group label="History">
            <!-- undo -->
            <sl-tooltip content="Undo" placement="bottom" hoist>
              <sl-button
                size="small"
                .disabled=${!this._canUndo}
                @click=${()=>this.page.undo()}
              >
                <sl-icon name="arrow-counterclockwise" label="Undo"></sl-icon>
              </sl-button>
            </sl-tooltip>
            <!-- redo -->
            <sl-tooltip content="Redo" placement="bottom" hoist>
              <sl-button
                size="small"
                .disabled=${!this._canRedo}
                @click=${()=>this.page.redo()}
              >
                <sl-icon name="arrow-clockwise" label="Redo"></sl-icon>
              </sl-button>
            </sl-tooltip>
          </sl-button-group>

          <!-- test operations -->
          <sl-dropdown id="test-operations-dropdown" placement="bottom" hoist>
            <sl-button size="small" slot="trigger" caret>
              Test Operations
            </sl-button>
            <sl-menu>
              <sl-menu-item @click=${this._toggleConnection}>
                ${this._connected?"Disconnect":"Connect"}
              </sl-menu-item>
              <sl-menu-item @click=${this._exportMarkDown}>
                Export Markdown
              </sl-menu-item>
              <sl-menu-item @click=${this._exportHtml}>
                Export HTML
              </sl-menu-item>
              <sl-menu-item @click=${this._exportPdf}>
                Export PDF
              </sl-menu-item>
              <sl-menu-item @click=${this._exportPng}>
                Export PNG
              </sl-menu-item>
              <sl-menu-item @click=${this._exportSnapshot}>
                Export Snapshot
              </sl-menu-item>
              <sl-menu-item @click=${this._importSnapshot}>
                Import Snapshot
              </sl-menu-item>
              <sl-menu-item @click=${this._shareUrl}>Share URL</sl-menu-item>
              <sl-menu-item @click=${this._toggleStyleDebugMenu}>
                Toggle CSS Debug Menu
              </sl-menu-item>
              <sl-menu-item @click=${this._toggleReadonly}>
                Toggle Readonly
              </sl-menu-item>
              <sl-menu-item @click=${this._shareSelection}>
                Share Selection
              </sl-menu-item>
              <sl-menu-item @click=${this._switchOffsetMode}>
                Switch Offset Mode
              </sl-menu-item>
              <sl-menu-item @click=${this._toggleOutlinePanel}>
                Toggle TOC Outline Panel
              </sl-menu-item>
              <sl-menu-item @click=${this._toggleFramePanel}>
                Toggle Frame Panel
              </sl-menu-item>
              <sl-menu-item @click=${this._extendFormatBar}>
                Extend Format Bar
              </sl-menu-item>
              <sl-menu-item @click=${this._createMindMap}>
                Create Mind Map
              </sl-menu-item>
              <sl-menu-item @click=${this._addNote}>Add Note</sl-menu-item>
            </sl-menu>
          </sl-dropdown>

          <sl-tooltip content="Switch Editor Mode" placement="bottom" hoist>
            <sl-button size="small" @click=${this._switchEditorMode}>
              <sl-icon name="repeat"></sl-icon>
            </sl-button>
          </sl-tooltip>

          <sl-tooltip content="Toggle Dark Mode" placement="bottom" hoist>
            <sl-button size="small" @click=${this._toggleDarkMode}>
              <sl-icon
                name=${this._dark?"moon":"brightness-high"}
              ></sl-icon>
            </sl-button>
          </sl-tooltip>

          <sl-tooltip
            content="🚧 Toggle Copilot Panel"
            placement="bottom"
            hoist
          >
            <sl-button size="small" @click=${this._toggleCopilotPanel}>
              <sl-icon name="stars"></sl-icon>
            </sl-button>
          </sl-tooltip>
          <sl-button
            data-testid="pages-button"
            size="small"
            @click=${this._togglePagesPanel}
          >
            Pages
          </sl-button>
        </div>
      </div>
    `}};u.styles=P`
    :root {
      --sl-font-size-medium: var(--affine-font-xs);
      --sl-input-font-size-small: var(--affine-font-xs);
    }

    .dg.ac {
      z-index: 1001 !important;
    }
  `;h([b({attribute:!1})],u.prototype,"workspace",2);h([b({attribute:!1})],u.prototype,"editor",2);h([b({attribute:!1})],u.prototype,"outlinePanel",2);h([b({attribute:!1})],u.prototype,"framePanel",2);h([b({attribute:!1})],u.prototype,"copilotPanel",2);h([b({attribute:!1})],u.prototype,"sidePanel",2);h([b({attribute:!1})],u.prototype,"leftSidePanel",2);h([b({attribute:!1})],u.prototype,"pagesPanel",2);h([S()],u.prototype,"_connected",2);h([S()],u.prototype,"_canUndo",2);h([S()],u.prototype,"_canRedo",2);h([b({attribute:!1})],u.prototype,"mode",2);h([b({attribute:!1})],u.prototype,"readonly",2);h([S()],u.prototype,"_hasOffset",2);h([Dt("#block-type-dropdown")],u.prototype,"blockTypeDropdown",2);h([S()],u.prototype,"_dark",2);u=h([x("debug-menu")],u);var fo=Object.defineProperty,ho=Object.getOwnPropertyDescriptor,Le=(e,o,t,n)=>{for(var a=n>1?void 0:n?ho(o,t):o,r=e.length-1,s;r>=0;r--)(s=e[r])&&(a=(n?s(o,t,a):s(a))||a);return n&&a&&fo(o,t,a),a};let D=class extends ae(I){constructor(){super(...arguments),this.createPage=()=>{go(this.editor.page.workspace)}}connectedCallback(){super.connectedCallback(),this.disposables.add(this.editor.page.workspace.slots.pagesUpdated.on(()=>{this.requestUpdate()}))}render(){const e=this.editor.page.workspace,o=[...e.pages.values()];return y`
      <div @click="${this.createPage}" class="new-page-button">New Page</div>
      ${Ae(o,t=>t.id,t=>{const n=It({backgroundColor:this.editor.page.id===t.id?"var(--affine-hover-color)":void 0,padding:"4px 4px 4px 8px",borderRadius:"4px",cursor:"pointer",display:"flex",justifyContent:"space-between"}),a=()=>{this.editor.page=t,this.requestUpdate()},r=()=>{e.removePage(t.id);const s=Array.from(e.pages.values());this.editor.page=s[0],this.requestUpdate()};return y`<div class="page-item" @click="${a}" style="${n}">
            ${t.meta.title||"Untitled"}
            <div @click="${r}" class="delete-page-icon">
              ${Ct}
            </div>
          </div>`})}
    `}};D.styles=P`
    pages-panel {
      display: flex;
      flex-direction: column;
      width: 100%;
      background-color: var(--affine-background-secondary-color);
      font-family: var(--affine-font-family);
      height: 100%;
      padding: 12px;
      gap: 4px;
    }
    .page-item:hover .delete-page-icon {
      display: flex;
    }
    .delete-page-icon {
      display: none;
      padding: 2px;
      border-radius: 4px;
    }
    .delete-page-icon:hover {
      background-color: var(--affine-hover-color);
    }
    .delete-page-icon svg {
      width: 14px;
      height: 14px;
      color: var(--affine-secondary-color);
      fill: var(--affine-secondary-color);
    }
    .new-page-button {
      margin-bottom: 16px;
      border: 1px solid var(--affine-border-color);
      border-radius: 4px;
      height: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }
    .new-page-button:hover {
      background-color: var(--affine-hover-color);
    }
  `;Le([b({attribute:!1})],D.prototype,"editor",2);D=Le([x("pages-panel")],D);function go(e){const o=e.idGenerator("page");Et(e,{id:o}).catch(console.error)}const mo=Lt();function yo(e){e.slots.pageAdded.once(o=>{if(typeof globalThis.targetPageId=="string"&&o!==globalThis.targetPageId)return;const t=document.getElementById("app");if(!t)return;const n=e.getPage(o),a=se(n,t),r=new u,s=new $,l=new M,g=new $t,d=new j,v=new R,_=new D;r.workspace=e,r.editor=a,r.mode=jt,r.outlinePanel=s,r.framePanel=l,r.copilotPanel=g,r.sidePanel=d,r.leftSidePanel=v,r.pagesPanel=_,s.editor=a,g.editor=a,l.editor=a,_.editor=a,document.body.appendChild(r),document.body.appendChild(s),document.body.appendChild(d),document.body.appendChild(v),document.body.appendChild(l),window.editor=a,window.page=n})}async function bo(e,o,t){const n=new Map;if(Object.values(await Me(()=>Promise.resolve().then(()=>je),void 0)).forEach(a=>n.set(a.id,a)),o===""&&(o="preset"),n.has(o)){n.get(o)?.(e,t);const a=e.getPage(t);await a?.load(),a?.resetHistory();return}}async function wo(){if(window.workspace)return;const e=new E(mo);if(window.workspace=e,window.job=new it({workspace:e}),window.blockSchemas=$e,window.Y=E.Y,Object.defineProperty(globalThis,"host",{get(){return document.querySelector("editor-host")}}),await(async n=>{for(const a of n)"active"in a?(a.sync(),await a.whenReady):"passive"in a&&a.connect()})(e.providers),e.slots.pageAdded.on(async n=>{await e.getPage(n).load()}),window.testUtils=new Mt,ne)return;if(yo(e),Ce!==null){await bo(e,Ce,"page:home");return}const t=document.createElement("start-panel");e.slots.pageAdded.once(()=>t.remove()),document.body.prepend(t)}wo().catch(console.error);
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
//# sourceMappingURL=-GulG4EOg.js.map
