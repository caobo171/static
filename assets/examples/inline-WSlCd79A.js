import{x as _,a0 as St,E as pt,v as ft,a7 as Qe,z as It,T as Tt}from"../static-aza_T-_E.js";import{S as At,c as D,a as ie,_ as i,d as Ke,w,b as I,F as Re,l as Se,e as mt,f as U,L as H,g as te,h as j,i as Q,j as Xe,k as be,m as Dt,n as et,H as we,o as gt,p as Ge,q as Et,r as Lt,t as Ft,v as Ot,u as Pt,x as Rt,y as Mt,z as ot,A as Bt,B as bt,C as Ee,D as Le,E as _e,G as Ut,I as vt}from"../chunk.JHR6CYJZ-MbxzvSsc.js";import{i as T,e as z,r as F,n as r,w as L,L as R,G as nt,o as me,X as Vt,K as ge,b as ze,t as tt,S as it,u as lt,H as Nt,a as Ht,v as qt}from"../if-defined-RE6KpHg7.js";import"../chunk.HB3GBEX5-N_doJH2f.js";import"../chunk.J7TQ3TIA-dYp83w7A.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function yt(e){return(t,s)=>{const a=typeof t=="function"?t:t[s];Object.assign(a,e)}}At.define("sl-visually-hidden");var Xt=T`
  ${D}

  :host {
    /*
     * These are actually used by tree item, but we define them here so they can more easily be set and all tree items
     * stay consistent.
     */
    --indent-guide-color: var(--sl-color-neutral-200);
    --indent-guide-offset: 0;
    --indent-guide-style: solid;
    --indent-guide-width: 0;
    --indent-size: var(--sl-spacing-large);

    display: block;
    isolation: isolate;

    /*
     * Tree item indentation uses the "em" unit to increment its width on each level, so setting the font size to zero
     * here removes the indentation for all the nodes on the first level.
     */
    font-size: 0;
  }
`,Kt=T`
  ${D}

  :host {
    display: block;
    outline: 0;
    z-index: 0;
  }

  :host(:focus) {
    outline: none;
  }

  slot:not([name])::slotted(sl-icon) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .tree-item {
    position: relative;
    display: flex;
    align-items: stretch;
    flex-direction: column;
    color: var(--sl-color-neutral-700);
    cursor: pointer;
    user-select: none;
    -webkit-user-select: none;
  }

  .tree-item__checkbox {
    pointer-events: none;
  }

  .tree-item__expand-button,
  .tree-item__checkbox,
  .tree-item__label {
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-dense);
    letter-spacing: var(--sl-letter-spacing-normal);
  }

  .tree-item__checkbox::part(base) {
    display: flex;
    align-items: center;
  }

  .tree-item__indentation {
    display: block;
    width: 1em;
    flex-shrink: 0;
  }

  .tree-item__expand-button {
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: content-box;
    color: var(--sl-color-neutral-500);
    padding: var(--sl-spacing-x-small);
    width: 1rem;
    height: 1rem;
    flex-shrink: 0;
    cursor: pointer;
  }

  .tree-item__expand-button {
    transition: var(--sl-transition-medium) rotate ease;
  }

  .tree-item--expanded .tree-item__expand-button {
    rotate: 90deg;
  }

  .tree-item--expanded.tree-item--rtl .tree-item__expand-button {
    rotate: -90deg;
  }

  .tree-item--expanded slot[name='expand-icon'],
  .tree-item:not(.tree-item--expanded) slot[name='collapse-icon'] {
    display: none;
  }

  .tree-item:not(.tree-item--has-expand-button) .tree-item__expand-icon-slot {
    display: none;
  }

  .tree-item__expand-button--visible {
    cursor: pointer;
  }

  .tree-item__item {
    display: flex;
    align-items: center;
    border-inline-start: solid 3px transparent;
  }

  .tree-item--disabled .tree-item__item {
    opacity: 0.5;
    outline: none;
    cursor: not-allowed;
  }

  :host(:focus-visible) .tree-item__item {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
    z-index: 2;
  }

  :host(:not([aria-disabled='true'])) .tree-item--selected .tree-item__item {
    background-color: var(--sl-color-neutral-100);
    border-inline-start-color: var(--sl-color-primary-600);
  }

  :host(:not([aria-disabled='true'])) .tree-item__expand-button {
    color: var(--sl-color-neutral-600);
  }

  .tree-item__label {
    display: flex;
    align-items: center;
    transition: var(--sl-transition-fast) color;
  }

  .tree-item__children {
    display: block;
    font-size: calc(1em + var(--indent-size, var(--sl-spacing-medium)));
  }

  /* Indentation lines */
  .tree-item__children {
    position: relative;
  }

  .tree-item__children::before {
    content: '';
    position: absolute;
    top: var(--indent-guide-offset);
    bottom: var(--indent-guide-offset);
    left: calc(1em - (var(--indent-guide-width) / 2) - 1px);
    border-inline-end: var(--indent-guide-width) var(--indent-guide-style) var(--indent-guide-color);
    z-index: 1;
  }

  .tree-item--rtl .tree-item__children::before {
    left: auto;
    right: 1em;
  }

  @media (forced-colors: active) {
    :host(:not([aria-disabled='true'])) .tree-item--selected .tree-item__item {
      outline: dashed 1px SelectedItem;
    }
  }
`,Yt=T`
  ${D}

  :host {
    display: inline-block;
  }

  .checkbox {
    position: relative;
    display: inline-flex;
    align-items: flex-start;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    color: var(--sl-input-label-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .checkbox--small {
    --toggle-size: var(--sl-toggle-size-small);
    font-size: var(--sl-input-font-size-small);
  }

  .checkbox--medium {
    --toggle-size: var(--sl-toggle-size-medium);
    font-size: var(--sl-input-font-size-medium);
  }

  .checkbox--large {
    --toggle-size: var(--sl-toggle-size-large);
    font-size: var(--sl-input-font-size-large);
  }

  .checkbox__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--toggle-size);
    height: var(--toggle-size);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
    border-radius: 2px;
    background-color: var(--sl-input-background-color);
    color: var(--sl-color-neutral-0);
    transition:
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) box-shadow;
  }

  .checkbox__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  .checkbox__checked-icon,
  .checkbox__indeterminate-icon {
    display: inline-flex;
    width: var(--toggle-size);
    height: var(--toggle-size);
  }

  /* Hover */
  .checkbox:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__control:hover {
    border-color: var(--sl-input-border-color-hover);
    background-color: var(--sl-input-background-color-hover);
  }

  /* Focus */
  .checkbox:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Checked/indeterminate */
  .checkbox--checked .checkbox__control,
  .checkbox--indeterminate .checkbox__control {
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
  }

  /* Checked/indeterminate + hover */
  .checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__control:hover,
  .checkbox.checkbox--indeterminate:not(.checkbox--disabled) .checkbox__control:hover {
    border-color: var(--sl-color-primary-500);
    background-color: var(--sl-color-primary-500);
  }

  /* Checked/indeterminate + focus */
  .checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control,
  .checkbox.checkbox--indeterminate:not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Disabled */
  .checkbox--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .checkbox__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    line-height: var(--toggle-size);
    margin-inline-start: 0.5em;
    user-select: none;
    -webkit-user-select: none;
  }

  :host([required]) .checkbox__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
  }
`,q=class extends I{constructor(){super(...arguments),this.formControlController=new Re(this,{value:e=>e.checked?e.value||"on":void 0,defaultValue:e=>e.defaultChecked,setValue:(e,t)=>e.checked=t}),this.hasFocus=!1,this.title="",this.name="",this.size="medium",this.disabled=!1,this.checked=!1,this.indeterminate=!1,this.defaultChecked=!1,this.form="",this.required=!1}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleClick(){this.checked=!this.checked,this.indeterminate=!1,this.emit("sl-change")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleInput(){this.emit("sl-input")}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStateChange(){this.input.checked=this.checked,this.input.indeterminate=this.indeterminate,this.formControlController.updateValidity()}click(){this.input.click()}focus(e){this.input.focus(e)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){return _`
      <label
        part="base"
        class=${L({checkbox:!0,"checkbox--checked":this.checked,"checkbox--disabled":this.disabled,"checkbox--focused":this.hasFocus,"checkbox--indeterminate":this.indeterminate,"checkbox--small":this.size==="small","checkbox--medium":this.size==="medium","checkbox--large":this.size==="large"})}
      >
        <input
          class="checkbox__input"
          type="checkbox"
          title=${this.title}
          name=${this.name}
          value=${R(this.value)}
          .indeterminate=${Se(this.indeterminate)}
          .checked=${Se(this.checked)}
          .disabled=${this.disabled}
          .required=${this.required}
          aria-checked=${this.checked?"true":"false"}
          @click=${this.handleClick}
          @input=${this.handleInput}
          @invalid=${this.handleInvalid}
          @blur=${this.handleBlur}
          @focus=${this.handleFocus}
        />

        <span
          part="control${this.checked?" control--checked":""}${this.indeterminate?" control--indeterminate":""}"
          class="checkbox__control"
        >
          ${this.checked?_`
                <sl-icon part="checked-icon" class="checkbox__checked-icon" library="system" name="check"></sl-icon>
              `:""}
          ${!this.checked&&this.indeterminate?_`
                <sl-icon
                  part="indeterminate-icon"
                  class="checkbox__indeterminate-icon"
                  library="system"
                  name="indeterminate"
                ></sl-icon>
              `:""}
        </span>

        <div part="label" class="checkbox__label">
          <slot></slot>
        </div>
      </label>
    `}};q.styles=Yt;q.dependencies={"sl-icon":ie};i([z('input[type="checkbox"]')],q.prototype,"input",2);i([F()],q.prototype,"hasFocus",2);i([r()],q.prototype,"title",2);i([r()],q.prototype,"name",2);i([r()],q.prototype,"value",2);i([r({reflect:!0})],q.prototype,"size",2);i([r({type:Boolean,reflect:!0})],q.prototype,"disabled",2);i([r({type:Boolean,reflect:!0})],q.prototype,"checked",2);i([r({type:Boolean,reflect:!0})],q.prototype,"indeterminate",2);i([Ke("checked")],q.prototype,"defaultChecked",2);i([r({reflect:!0})],q.prototype,"form",2);i([r({type:Boolean,reflect:!0})],q.prototype,"required",2);i([w("disabled",{waitUntilFirstUpdate:!0})],q.prototype,"handleDisabledChange",1);i([w(["checked","indeterminate"],{waitUntilFirstUpdate:!0})],q.prototype,"handleStateChange",1);var V=class Ze extends I{constructor(){super(...arguments),this.localize=new H(this),this.indeterminate=!1,this.isLeaf=!1,this.loading=!1,this.selectable=!1,this.expanded=!1,this.selected=!1,this.disabled=!1,this.lazy=!1}static isTreeItem(t){return t instanceof Element&&t.getAttribute("role")==="treeitem"}connectedCallback(){super.connectedCallback(),this.setAttribute("role","treeitem"),this.setAttribute("tabindex","-1"),this.isNestedItem()&&(this.slot="children")}firstUpdated(){this.childrenContainer.hidden=!this.expanded,this.childrenContainer.style.height=this.expanded?"auto":"0",this.isLeaf=!this.lazy&&this.getChildrenItems().length===0,this.handleExpandedChange()}async animateCollapse(){this.emit("sl-collapse"),await te(this.childrenContainer);const{keyframes:t,options:s}=j(this,"tree-item.collapse",{dir:this.localize.dir()});await Q(this.childrenContainer,Xe(t,this.childrenContainer.scrollHeight),s),this.childrenContainer.hidden=!0,this.emit("sl-after-collapse")}isNestedItem(){const t=this.parentElement;return!!t&&Ze.isTreeItem(t)}handleChildrenSlotChange(){this.loading=!1,this.isLeaf=!this.lazy&&this.getChildrenItems().length===0}willUpdate(t){t.has("selected")&&!t.has("indeterminate")&&(this.indeterminate=!1)}async animateExpand(){this.emit("sl-expand"),await te(this.childrenContainer),this.childrenContainer.hidden=!1;const{keyframes:t,options:s}=j(this,"tree-item.expand",{dir:this.localize.dir()});await Q(this.childrenContainer,Xe(t,this.childrenContainer.scrollHeight),s),this.childrenContainer.style.height="auto",this.emit("sl-after-expand")}handleLoadingChange(){this.setAttribute("aria-busy",this.loading?"true":"false"),this.loading||this.animateExpand()}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleSelectedChange(){this.setAttribute("aria-selected",this.selected?"true":"false")}handleExpandedChange(){this.isLeaf?this.removeAttribute("aria-expanded"):this.setAttribute("aria-expanded",this.expanded?"true":"false")}handleExpandAnimation(){this.expanded?this.lazy?(this.loading=!0,this.emit("sl-lazy-load")):this.animateExpand():this.animateCollapse()}handleLazyChange(){this.emit("sl-lazy-change")}getChildrenItems({includeDisabled:t=!0}={}){return this.childrenSlot?[...this.childrenSlot.assignedElements({flatten:!0})].filter(s=>Ze.isTreeItem(s)&&(t||!s.disabled)):[]}render(){const t=this.localize.dir()==="rtl",s=!this.loading&&(!this.isLeaf||this.lazy);return _`
      <div
        part="base"
        class="${L({"tree-item":!0,"tree-item--expanded":this.expanded,"tree-item--selected":this.selected,"tree-item--disabled":this.disabled,"tree-item--leaf":this.isLeaf,"tree-item--has-expand-button":s,"tree-item--rtl":this.localize.dir()==="rtl"})}"
      >
        <div
          class="tree-item__item"
          part="
            item
            ${this.disabled?"item--disabled":""}
            ${this.expanded?"item--expanded":""}
            ${this.indeterminate?"item--indeterminate":""}
            ${this.selected?"item--selected":""}
          "
        >
          <div class="tree-item__indentation" part="indentation"></div>

          <div
            part="expand-button"
            class=${L({"tree-item__expand-button":!0,"tree-item__expand-button--visible":s})}
            aria-hidden="true"
          >
            ${nt(this.loading,()=>_` <sl-spinner></sl-spinner> `)}
            <slot class="tree-item__expand-icon-slot" name="expand-icon">
              <sl-icon library="system" name=${t?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
            <slot class="tree-item__expand-icon-slot" name="collapse-icon">
              <sl-icon library="system" name=${t?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
          </div>

          ${nt(this.selectable,()=>_`
              <sl-checkbox
                part="checkbox"
                exportparts="
                    base:checkbox__base,
                    control:checkbox__control,
                    control--checked:checkbox__control--checked,
                    control--indeterminate:checkbox__control--indeterminate,
                    checked-icon:checkbox__checked-icon,
                    indeterminate-icon:checkbox__indeterminate-icon,
                    label:checkbox__label
                  "
                class="tree-item__checkbox"
                ?disabled="${this.disabled}"
                ?checked="${Se(this.selected)}"
                ?indeterminate="${this.indeterminate}"
                tabindex="-1"
              ></sl-checkbox>
            `)}

          <slot class="tree-item__label" part="label"></slot>
        </div>

        <div class="tree-item__children" part="children" role="group">
          <slot name="children" @slotchange="${this.handleChildrenSlotChange}"></slot>
        </div>
      </div>
    `}};V.styles=Kt;V.dependencies={"sl-checkbox":q,"sl-icon":ie,"sl-spinner":mt};i([F()],V.prototype,"indeterminate",2);i([F()],V.prototype,"isLeaf",2);i([F()],V.prototype,"loading",2);i([F()],V.prototype,"selectable",2);i([r({type:Boolean,reflect:!0})],V.prototype,"expanded",2);i([r({type:Boolean,reflect:!0})],V.prototype,"selected",2);i([r({type:Boolean,reflect:!0})],V.prototype,"disabled",2);i([r({type:Boolean,reflect:!0})],V.prototype,"lazy",2);i([z("slot:not([name])")],V.prototype,"defaultSlot",2);i([z("slot[name=children]")],V.prototype,"childrenSlot",2);i([z(".tree-item__item")],V.prototype,"itemElement",2);i([z(".tree-item__children")],V.prototype,"childrenContainer",2);i([z(".tree-item__expand-button slot")],V.prototype,"expandButtonSlot",2);i([w("loading",{waitUntilFirstUpdate:!0})],V.prototype,"handleLoadingChange",1);i([w("disabled")],V.prototype,"handleDisabledChange",1);i([w("selected")],V.prototype,"handleSelectedChange",1);i([w("expanded",{waitUntilFirstUpdate:!0})],V.prototype,"handleExpandedChange",1);i([w("expanded",{waitUntilFirstUpdate:!0})],V.prototype,"handleExpandAnimation",1);i([w("lazy",{waitUntilFirstUpdate:!0})],V.prototype,"handleLazyChange",1);var Fe=V;U("tree-item.expand",{keyframes:[{height:"0",opacity:"0",overflow:"hidden"},{height:"auto",opacity:"1",overflow:"hidden"}],options:{duration:250,easing:"cubic-bezier(0.4, 0.0, 0.2, 1)"}});U("tree-item.collapse",{keyframes:[{height:"auto",opacity:"1",overflow:"hidden"},{height:"0",opacity:"0",overflow:"hidden"}],options:{duration:200,easing:"cubic-bezier(0.4, 0.0, 0.2, 1)"}});function ct(e,t=!1){function s(c){const n=c.getChildrenItems({includeDisabled:!1});if(n.length){const u=n.every(p=>p.selected),h=n.every(p=>!p.selected&&!p.indeterminate);c.selected=u,c.indeterminate=!u&&!h}}function a(c){const n=c.parentElement;Fe.isTreeItem(n)&&(s(n),a(n))}function o(c){for(const n of c.getChildrenItems())n.selected=t?c.selected||n.selected:!n.disabled&&c.selected,o(n);t&&s(c)}o(e),a(e)}var ke=class extends I{constructor(){super(),this.selection="single",this.localize=new H(this),this.clickTarget=null,this.initTreeItem=e=>{e.selectable=this.selection==="multiple",["expand","collapse"].filter(t=>!!this.querySelector(`[slot="${t}-icon"]`)).forEach(t=>{const s=e.querySelector(`[slot="${t}-icon"]`);s===null?e.append(this.getExpandButtonIcon(t)):s.hasAttribute("data-default")&&s.replaceWith(this.getExpandButtonIcon(t))})},this.handleTreeChanged=e=>{for(const t of e){const s=[...t.addedNodes].filter(Fe.isTreeItem),a=[...t.removedNodes].filter(Fe.isTreeItem);s.forEach(this.initTreeItem),this.lastFocusedItem&&a.includes(this.lastFocusedItem)&&(this.lastFocusedItem=null)}},this.handleFocusOut=e=>{const t=e.relatedTarget;(!t||!this.contains(t))&&(this.tabIndex=0)},this.handleFocusIn=e=>{const t=e.target;e.target===this&&this.focusItem(this.lastFocusedItem||this.getAllTreeItems()[0]),Fe.isTreeItem(t)&&!t.disabled&&(this.lastFocusedItem&&(this.lastFocusedItem.tabIndex=-1),this.lastFocusedItem=t,this.tabIndex=-1,t.tabIndex=0)},this.addEventListener("focusin",this.handleFocusIn),this.addEventListener("focusout",this.handleFocusOut),this.addEventListener("sl-lazy-change",this.handleSlotChange)}async connectedCallback(){super.connectedCallback(),this.setAttribute("role","tree"),this.setAttribute("tabindex","0"),await this.updateComplete,this.mutationObserver=new MutationObserver(this.handleTreeChanged),this.mutationObserver.observe(this,{childList:!0,subtree:!0})}disconnectedCallback(){super.disconnectedCallback(),this.mutationObserver.disconnect()}getExpandButtonIcon(e){const s=(e==="expand"?this.expandedIconSlot:this.collapsedIconSlot).assignedElements({flatten:!0})[0];if(s){const a=s.cloneNode(!0);return[a,...a.querySelectorAll("[id]")].forEach(o=>o.removeAttribute("id")),a.setAttribute("data-default",""),a.slot=`${e}-icon`,a}return null}selectItem(e){const t=[...this.selectedItems];if(this.selection==="multiple")e.selected=!e.selected,e.lazy&&(e.expanded=!0),ct(e);else if(this.selection==="single"||e.isLeaf){const a=this.getAllTreeItems();for(const o of a)o.selected=o===e}else this.selection==="leaf"&&(e.expanded=!e.expanded);const s=this.selectedItems;(t.length!==s.length||s.some(a=>!t.includes(a)))&&Promise.all(s.map(a=>a.updateComplete)).then(()=>{this.emit("sl-selection-change",{detail:{selection:s}})})}getAllTreeItems(){return[...this.querySelectorAll("sl-tree-item")]}focusItem(e){e?.focus()}handleKeyDown(e){if(!["ArrowDown","ArrowUp","ArrowRight","ArrowLeft","Home","End","Enter"," "].includes(e.key)||e.composedPath().some(o=>{var c;return["input","textarea"].includes((c=o?.tagName)==null?void 0:c.toLowerCase())}))return;const t=this.getFocusableItems(),s=this.localize.dir()==="ltr",a=this.localize.dir()==="rtl";if(t.length>0){e.preventDefault();const o=t.findIndex(h=>h.matches(":focus")),c=t[o],n=h=>{const p=t[be(h,0,t.length-1)];this.focusItem(p)},u=h=>{c.expanded=h};e.key==="ArrowDown"?n(o+1):e.key==="ArrowUp"?n(o-1):s&&e.key==="ArrowRight"||a&&e.key==="ArrowLeft"?!c||c.disabled||c.expanded||c.isLeaf&&!c.lazy?n(o+1):u(!0):s&&e.key==="ArrowLeft"||a&&e.key==="ArrowRight"?!c||c.disabled||c.isLeaf||!c.expanded?n(o-1):u(!1):e.key==="Home"?n(0):e.key==="End"?n(t.length-1):(e.key==="Enter"||e.key===" ")&&(c.disabled||this.selectItem(c))}}handleClick(e){const t=e.target,s=t.closest("sl-tree-item"),a=e.composedPath().some(o=>{var c;return(c=o?.classList)==null?void 0:c.contains("tree-item__expand-button")});!s||s.disabled||t!==this.clickTarget||(a?s.expanded=!s.expanded:this.selectItem(s))}handleMouseDown(e){this.clickTarget=e.target}handleSlotChange(){this.getAllTreeItems().forEach(this.initTreeItem)}async handleSelectionChange(){const e=this.selection==="multiple",t=this.getAllTreeItems();this.setAttribute("aria-multiselectable",e?"true":"false");for(const s of t)s.selectable=e;e&&(await this.updateComplete,[...this.querySelectorAll(":scope > sl-tree-item")].forEach(s=>ct(s,!0)))}get selectedItems(){const e=this.getAllTreeItems(),t=s=>s.selected;return e.filter(t)}getFocusableItems(){const e=this.getAllTreeItems(),t=new Set;return e.filter(s=>{var a;if(s.disabled)return!1;const o=(a=s.parentElement)==null?void 0:a.closest("[role=treeitem]");return o&&(!o.expanded||o.loading||t.has(o))&&t.add(s),!t.has(s)})}render(){return _`
      <div
        part="base"
        class="tree"
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      >
        <slot @slotchange=${this.handleSlotChange}></slot>
        <span hidden aria-hidden="true"><slot name="expand-icon"></slot></span>
        <span hidden aria-hidden="true"><slot name="collapse-icon"></slot></span>
      </div>
    `}};ke.styles=Xt;i([z("slot:not([name])")],ke.prototype,"defaultSlot",2);i([z("slot[name=expand-icon]")],ke.prototype,"expandedIconSlot",2);i([z("slot[name=collapse-icon]")],ke.prototype,"collapsedIconSlot",2);i([r()],ke.prototype,"selection",2);i([w("selection")],ke.prototype,"handleSelectionChange",1);ke.define("sl-tree");Fe.define("sl-tree-item");var jt=T`
  ${D}

  :host {
    --padding: 0;

    display: none;
  }

  :host([active]) {
    display: block;
  }

  .tab-panel {
    display: block;
    padding: var(--padding);
  }
`,Gt=0,Me=class extends I{constructor(){super(...arguments),this.attrId=++Gt,this.componentId=`sl-tab-panel-${this.attrId}`,this.name="",this.active=!1}connectedCallback(){super.connectedCallback(),this.id=this.id.length>0?this.id:this.componentId,this.setAttribute("role","tabpanel")}handleActiveChange(){this.setAttribute("aria-hidden",this.active?"false":"true")}render(){return _`
      <slot
        part="base"
        class=${L({"tab-panel":!0,"tab-panel--active":this.active})}
      ></slot>
    `}};Me.styles=jt;i([r({reflect:!0})],Me.prototype,"name",2);i([r({type:Boolean,reflect:!0})],Me.prototype,"active",2);i([w("active")],Me.prototype,"handleActiveChange",1);Me.define("sl-tab-panel");Dt.define("sl-tag");var Wt=T`
  ${D}
  ${et}

  :host {
    display: block;
  }

  .textarea {
    display: flex;
    align-items: center;
    position: relative;
    width: 100%;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    transition:
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) border,
      var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
    cursor: text;
  }

  /* Standard textareas */
  .textarea--standard {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .textarea--standard:hover:not(.textarea--disabled) {
    background-color: var(--sl-input-background-color-hover);
    border-color: var(--sl-input-border-color-hover);
  }
  .textarea--standard:hover:not(.textarea--disabled) .textarea__control {
    color: var(--sl-input-color-hover);
  }

  .textarea--standard.textarea--focused:not(.textarea--disabled) {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    color: var(--sl-input-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  .textarea--standard.textarea--focused:not(.textarea--disabled) .textarea__control {
    color: var(--sl-input-color-focus);
  }

  .textarea--standard.textarea--disabled {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .textarea--standard.textarea--disabled .textarea__control {
    color: var(--sl-input-color-disabled);
  }

  .textarea--standard.textarea--disabled .textarea__control::placeholder {
    color: var(--sl-input-placeholder-color-disabled);
  }

  /* Filled textareas */
  .textarea--filled {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .textarea--filled:hover:not(.textarea--disabled) {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .textarea--filled.textarea--focused:not(.textarea--disabled) {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .textarea--filled.textarea--disabled {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .textarea__control {
    flex: 1 1 auto;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: 1.4;
    color: var(--sl-input-color);
    border: none;
    background: none;
    box-shadow: none;
    cursor: inherit;
    -webkit-appearance: none;
  }

  .textarea__control::-webkit-search-decoration,
  .textarea__control::-webkit-search-cancel-button,
  .textarea__control::-webkit-search-results-button,
  .textarea__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .textarea__control::placeholder {
    color: var(--sl-input-placeholder-color);
    user-select: none;
    -webkit-user-select: none;
  }

  .textarea__control:focus {
    outline: none;
  }

  /*
   * Size modifiers
   */

  .textarea--small {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
  }

  .textarea--small .textarea__control {
    padding: 0.5em var(--sl-input-spacing-small);
  }

  .textarea--medium {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
  }

  .textarea--medium .textarea__control {
    padding: 0.5em var(--sl-input-spacing-medium);
  }

  .textarea--large {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
  }

  .textarea--large .textarea__control {
    padding: 0.5em var(--sl-input-spacing-large);
  }

  /*
   * Resize types
   */

  .textarea--resize-none .textarea__control {
    resize: none;
  }

  .textarea--resize-vertical .textarea__control {
    resize: vertical;
  }

  .textarea--resize-auto .textarea__control {
    height: auto;
    resize: none;
    overflow-y: hidden;
  }
`,E=class extends I{constructor(){super(...arguments),this.formControlController=new Re(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new we(this,"help-text","label"),this.hasFocus=!1,this.title="",this.name="",this.value="",this.size="medium",this.filled=!1,this.label="",this.helpText="",this.placeholder="",this.rows=4,this.resize="vertical",this.disabled=!1,this.readonly=!1,this.form="",this.required=!1,this.spellcheck=!0,this.defaultValue=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.setTextareaHeight()),this.updateComplete.then(()=>{this.setTextareaHeight(),this.resizeObserver.observe(this.input)})}firstUpdated(){this.formControlController.updateValidity()}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver.unobserve(this.input)}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.setTextareaHeight(),this.emit("sl-change")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.emit("sl-input")}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}setTextareaHeight(){this.resize==="auto"?(this.input.style.height="auto",this.input.style.height=`${this.input.scrollHeight}px`):this.input.style.height=void 0}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleRowsChange(){this.setTextareaHeight()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity(),this.setTextareaHeight()}focus(e){this.input.focus(e)}blur(){this.input.blur()}select(){this.input.select()}scrollPosition(e){if(e){typeof e.top=="number"&&(this.input.scrollTop=e.top),typeof e.left=="number"&&(this.input.scrollLeft=e.left);return}return{top:this.input.scrollTop,left:this.input.scrollTop}}setSelectionRange(e,t,s="none"){this.input.setSelectionRange(e,t,s)}setRangeText(e,t,s,a){this.input.setRangeText(e,t,s,a),this.value!==this.input.value&&(this.value=this.input.value),this.value!==this.input.value&&(this.value=this.input.value,this.setTextareaHeight())}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),s=this.label?!0:!!e,a=this.helpText?!0:!!t;return _`
      <div
        part="form-control"
        class=${L({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":s,"form-control--has-help-text":a})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${s?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${L({textarea:!0,"textarea--small":this.size==="small","textarea--medium":this.size==="medium","textarea--large":this.size==="large","textarea--standard":!this.filled,"textarea--filled":this.filled,"textarea--disabled":this.disabled,"textarea--focused":this.hasFocus,"textarea--empty":!this.value,"textarea--resize-none":this.resize==="none","textarea--resize-vertical":this.resize==="vertical","textarea--resize-auto":this.resize==="auto"})}
          >
            <textarea
              part="textarea"
              id="input"
              class="textarea__control"
              title=${this.title}
              name=${R(this.name)}
              .value=${Se(this.value)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${R(this.placeholder)}
              rows=${R(this.rows)}
              minlength=${R(this.minlength)}
              maxlength=${R(this.maxlength)}
              autocapitalize=${R(this.autocapitalize)}
              autocorrect=${R(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${R(this.spellcheck)}
              enterkeyhint=${R(this.enterkeyhint)}
              inputmode=${R(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            ></textarea>
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${a?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};E.styles=Wt;i([z(".textarea__control")],E.prototype,"input",2);i([F()],E.prototype,"hasFocus",2);i([r()],E.prototype,"title",2);i([r()],E.prototype,"name",2);i([r()],E.prototype,"value",2);i([r({reflect:!0})],E.prototype,"size",2);i([r({type:Boolean,reflect:!0})],E.prototype,"filled",2);i([r()],E.prototype,"label",2);i([r({attribute:"help-text"})],E.prototype,"helpText",2);i([r()],E.prototype,"placeholder",2);i([r({type:Number})],E.prototype,"rows",2);i([r()],E.prototype,"resize",2);i([r({type:Boolean,reflect:!0})],E.prototype,"disabled",2);i([r({type:Boolean,reflect:!0})],E.prototype,"readonly",2);i([r({reflect:!0})],E.prototype,"form",2);i([r({type:Boolean,reflect:!0})],E.prototype,"required",2);i([r({type:Number})],E.prototype,"minlength",2);i([r({type:Number})],E.prototype,"maxlength",2);i([r()],E.prototype,"autocapitalize",2);i([r()],E.prototype,"autocorrect",2);i([r()],E.prototype,"autocomplete",2);i([r({type:Boolean})],E.prototype,"autofocus",2);i([r()],E.prototype,"enterkeyhint",2);i([r({type:Boolean,converter:{fromAttribute:e=>!(!e||e==="false"),toAttribute:e=>e?"true":"false"}})],E.prototype,"spellcheck",2);i([r()],E.prototype,"inputmode",2);i([Ke()],E.prototype,"defaultValue",2);i([w("disabled",{waitUntilFirstUpdate:!0})],E.prototype,"handleDisabledChange",1);i([w("rows",{waitUntilFirstUpdate:!0})],E.prototype,"handleRowsChange",1);i([w("value",{waitUntilFirstUpdate:!0})],E.prototype,"handleValueChange",1);E.define("sl-textarea");var Qt=T`
  ${D}

  :host {
    display: inline-block;
  }

  :host([size='small']) {
    --height: var(--sl-toggle-size-small);
    --thumb-size: calc(var(--sl-toggle-size-small) + 4px);
    --width: calc(var(--height) * 2);

    font-size: var(--sl-input-font-size-small);
  }

  :host([size='medium']) {
    --height: var(--sl-toggle-size-medium);
    --thumb-size: calc(var(--sl-toggle-size-medium) + 4px);
    --width: calc(var(--height) * 2);

    font-size: var(--sl-input-font-size-medium);
  }

  :host([size='large']) {
    --height: var(--sl-toggle-size-large);
    --thumb-size: calc(var(--sl-toggle-size-large) + 4px);
    --width: calc(var(--height) * 2);

    font-size: var(--sl-input-font-size-large);
  }

  .switch {
    position: relative;
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-input-font-family);
    font-size: inherit;
    font-weight: var(--sl-input-font-weight);
    color: var(--sl-input-label-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .switch__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--width);
    height: var(--height);
    background-color: var(--sl-color-neutral-400);
    border: solid var(--sl-input-border-width) var(--sl-color-neutral-400);
    border-radius: var(--height);
    transition:
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) background-color;
  }

  .switch__control .switch__thumb {
    width: var(--thumb-size);
    height: var(--thumb-size);
    background-color: var(--sl-color-neutral-0);
    border-radius: 50%;
    border: solid var(--sl-input-border-width) var(--sl-color-neutral-400);
    translate: calc((var(--width) - var(--height)) / -2);
    transition:
      var(--sl-transition-fast) translate ease,
      var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) box-shadow;
  }

  .switch__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  /* Hover */
  .switch:not(.switch--checked):not(.switch--disabled) .switch__control:hover {
    background-color: var(--sl-color-neutral-400);
    border-color: var(--sl-color-neutral-400);
  }

  .switch:not(.switch--checked):not(.switch--disabled) .switch__control:hover .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-neutral-400);
  }

  /* Focus */
  .switch:not(.switch--checked):not(.switch--disabled) .switch__input:focus-visible ~ .switch__control {
    background-color: var(--sl-color-neutral-400);
    border-color: var(--sl-color-neutral-400);
  }

  .switch:not(.switch--checked):not(.switch--disabled) .switch__input:focus-visible ~ .switch__control .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Checked */
  .switch--checked .switch__control {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
  }

  .switch--checked .switch__control .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    translate: calc((var(--width) - var(--height)) / 2);
  }

  /* Checked + hover */
  .switch.switch--checked:not(.switch--disabled) .switch__control:hover {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
  }

  .switch.switch--checked:not(.switch--disabled) .switch__control:hover .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
  }

  /* Checked + focus */
  .switch.switch--checked:not(.switch--disabled) .switch__input:focus-visible ~ .switch__control {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
  }

  .switch.switch--checked:not(.switch--disabled) .switch__input:focus-visible ~ .switch__control .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Disabled */
  .switch--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .switch__label {
    display: inline-block;
    line-height: var(--height);
    margin-inline-start: 0.5em;
    user-select: none;
    -webkit-user-select: none;
  }

  :host([required]) .switch__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
  }

  @media (forced-colors: active) {
    .switch.switch--checked:not(.switch--disabled) .switch__control:hover .switch__thumb,
    .switch--checked .switch__control .switch__thumb {
      background-color: ButtonText;
    }
  }
`,W=class extends I{constructor(){super(...arguments),this.formControlController=new Re(this,{value:e=>e.checked?e.value||"on":void 0,defaultValue:e=>e.defaultChecked,setValue:(e,t)=>e.checked=t}),this.hasFocus=!1,this.title="",this.name="",this.size="medium",this.disabled=!1,this.checked=!1,this.defaultChecked=!1,this.form="",this.required=!1}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleInput(){this.emit("sl-input")}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleClick(){this.checked=!this.checked,this.emit("sl-change")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleKeyDown(e){e.key==="ArrowLeft"&&(e.preventDefault(),this.checked=!1,this.emit("sl-change"),this.emit("sl-input")),e.key==="ArrowRight"&&(e.preventDefault(),this.checked=!0,this.emit("sl-change"),this.emit("sl-input"))}handleCheckedChange(){this.input.checked=this.checked,this.formControlController.updateValidity()}handleDisabledChange(){this.formControlController.setValidity(!0)}click(){this.input.click()}focus(e){this.input.focus(e)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){return _`
      <label
        part="base"
        class=${L({switch:!0,"switch--checked":this.checked,"switch--disabled":this.disabled,"switch--focused":this.hasFocus,"switch--small":this.size==="small","switch--medium":this.size==="medium","switch--large":this.size==="large"})}
      >
        <input
          class="switch__input"
          type="checkbox"
          title=${this.title}
          name=${this.name}
          value=${R(this.value)}
          .checked=${Se(this.checked)}
          .disabled=${this.disabled}
          .required=${this.required}
          role="switch"
          aria-checked=${this.checked?"true":"false"}
          @click=${this.handleClick}
          @input=${this.handleInput}
          @invalid=${this.handleInvalid}
          @blur=${this.handleBlur}
          @focus=${this.handleFocus}
          @keydown=${this.handleKeyDown}
        />

        <span part="control" class="switch__control">
          <span part="thumb" class="switch__thumb"></span>
        </span>

        <div part="label" class="switch__label">
          <slot></slot>
        </div>
      </label>
    `}};W.styles=Qt;i([z('input[type="checkbox"]')],W.prototype,"input",2);i([F()],W.prototype,"hasFocus",2);i([r()],W.prototype,"title",2);i([r()],W.prototype,"name",2);i([r()],W.prototype,"value",2);i([r({reflect:!0})],W.prototype,"size",2);i([r({type:Boolean,reflect:!0})],W.prototype,"disabled",2);i([r({type:Boolean,reflect:!0})],W.prototype,"checked",2);i([Ke("checked")],W.prototype,"defaultChecked",2);i([r({reflect:!0})],W.prototype,"form",2);i([r({type:Boolean,reflect:!0})],W.prototype,"required",2);i([w("checked",{waitUntilFirstUpdate:!0})],W.prototype,"handleCheckedChange",1);i([w("disabled",{waitUntilFirstUpdate:!0})],W.prototype,"handleDisabledChange",1);W.define("sl-switch");var Zt=T`
  ${D}

  :host {
    --border-radius: var(--sl-border-radius-pill);
    --color: var(--sl-color-neutral-200);
    --sheen-color: var(--sl-color-neutral-300);

    display: block;
    position: relative;
  }

  .skeleton {
    display: flex;
    width: 100%;
    height: 100%;
    min-height: 1rem;
  }

  .skeleton__indicator {
    flex: 1 1 auto;
    background: var(--color);
    border-radius: var(--border-radius);
  }

  .skeleton--sheen .skeleton__indicator {
    background: linear-gradient(270deg, var(--sheen-color), var(--color), var(--color), var(--sheen-color));
    background-size: 400% 100%;
    animation: sheen 8s ease-in-out infinite;
  }

  .skeleton--pulse .skeleton__indicator {
    animation: pulse 2s ease-in-out 0.5s infinite;
  }

  /* Forced colors mode */
  @media (forced-colors: active) {
    :host {
      --color: GrayText;
    }
  }

  @keyframes sheen {
    0% {
      background-position: 200% 0;
    }
    to {
      background-position: -200% 0;
    }
  }

  @keyframes pulse {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.4;
    }
    100% {
      opacity: 1;
    }
  }
`,st=class extends I{constructor(){super(...arguments),this.effect="none"}render(){return _`
      <div
        part="base"
        class=${L({skeleton:!0,"skeleton--pulse":this.effect==="pulse","skeleton--sheen":this.effect==="sheen"})}
      >
        <div part="indicator" class="skeleton__indicator"></div>
      </div>
    `}};st.styles=Zt;i([r()],st.prototype,"effect",2);st.define("sl-skeleton");var Jt=T`
  ${D}

  :host {
    --divider-width: 4px;
    --divider-hit-area: 12px;
    --min: 0%;
    --max: 100%;

    display: grid;
  }

  .start,
  .end {
    overflow: hidden;
  }

  .divider {
    flex: 0 0 var(--divider-width);
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    background-color: var(--sl-color-neutral-200);
    color: var(--sl-color-neutral-900);
    z-index: 1;
  }

  .divider:focus {
    outline: none;
  }

  :host(:not([disabled])) .divider:focus-visible {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  :host([disabled]) .divider {
    cursor: not-allowed;
  }

  /* Horizontal */
  :host(:not([vertical], [disabled])) .divider {
    cursor: col-resize;
  }

  :host(:not([vertical])) .divider::after {
    display: flex;
    content: '';
    position: absolute;
    height: 100%;
    left: calc(var(--divider-hit-area) / -2 + var(--divider-width) / 2);
    width: var(--divider-hit-area);
  }

  /* Vertical */
  :host([vertical]) {
    flex-direction: column;
  }

  :host([vertical]:not([disabled])) .divider {
    cursor: row-resize;
  }

  :host([vertical]) .divider::after {
    content: '';
    position: absolute;
    width: 100%;
    top: calc(var(--divider-hit-area) / -2 + var(--divider-width) / 2);
    height: var(--divider-hit-area);
  }

  @media (forced-colors: active) {
    .divider {
      outline: solid 1px transparent;
    }
  }
`,Z=class extends I{constructor(){super(...arguments),this.localize=new H(this),this.position=50,this.vertical=!1,this.disabled=!1,this.snapThreshold=12}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(e=>this.handleResize(e)),this.updateComplete.then(()=>this.resizeObserver.observe(this)),this.detectSize(),this.cachedPositionInPixels=this.percentageToPixels(this.position)}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver.unobserve(this)}detectSize(){const{width:e,height:t}=this.getBoundingClientRect();this.size=this.vertical?t:e}percentageToPixels(e){return this.size*(e/100)}pixelsToPercentage(e){return e/this.size*100}handleDrag(e){const t=this.localize.dir()==="rtl";this.disabled||(e.cancelable&&e.preventDefault(),gt(this,{onMove:(s,a)=>{let o=this.vertical?a:s;this.primary==="end"&&(o=this.size-o),this.snap&&this.snap.split(" ").forEach(n=>{let u;n.endsWith("%")?u=this.size*(parseFloat(n)/100):u=parseFloat(n),t&&!this.vertical&&(u=this.size-u),o>=u-this.snapThreshold&&o<=u+this.snapThreshold&&(o=u)}),this.position=be(this.pixelsToPercentage(o),0,100)},initialEvent:e}))}handleKeyDown(e){if(!this.disabled&&["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(e.key)){let t=this.position;const s=(e.shiftKey?10:1)*(this.primary==="end"?-1:1);e.preventDefault(),(e.key==="ArrowLeft"&&!this.vertical||e.key==="ArrowUp"&&this.vertical)&&(t-=s),(e.key==="ArrowRight"&&!this.vertical||e.key==="ArrowDown"&&this.vertical)&&(t+=s),e.key==="Home"&&(t=this.primary==="end"?100:0),e.key==="End"&&(t=this.primary==="end"?0:100),this.position=be(t,0,100)}}handleResize(e){const{width:t,height:s}=e[0].contentRect;this.size=this.vertical?s:t,this.primary&&(this.position=this.pixelsToPercentage(this.cachedPositionInPixels))}handlePositionChange(){this.cachedPositionInPixels=this.percentageToPixels(this.position),this.positionInPixels=this.percentageToPixels(this.position),this.emit("sl-reposition")}handlePositionInPixelsChange(){this.position=this.pixelsToPercentage(this.positionInPixels)}handleVerticalChange(){this.detectSize()}render(){const e=this.vertical?"gridTemplateRows":"gridTemplateColumns",t=this.vertical?"gridTemplateColumns":"gridTemplateRows",s=this.localize.dir()==="rtl",a=`
      clamp(
        0%,
        clamp(
          var(--min),
          ${this.position}% - var(--divider-width) / 2,
          var(--max)
        ),
        calc(100% - var(--divider-width))
      )
    `,o="auto";return this.primary==="end"?s&&!this.vertical?this.style[e]=`${a} var(--divider-width) ${o}`:this.style[e]=`${o} var(--divider-width) ${a}`:s&&!this.vertical?this.style[e]=`${o} var(--divider-width) ${a}`:this.style[e]=`${a} var(--divider-width) ${o}`,this.style[t]="",_`
      <slot name="start" part="panel start" class="start"></slot>

      <div
        part="divider"
        class="divider"
        tabindex=${R(this.disabled?void 0:"0")}
        role="separator"
        aria-valuenow=${this.position}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-label=${this.localize.term("resize")}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleDrag}
        @touchstart=${this.handleDrag}
      >
        <slot name="divider"></slot>
      </div>

      <slot name="end" part="panel end" class="end"></slot>
    `}};Z.styles=Jt;i([z(".divider")],Z.prototype,"divider",2);i([r({type:Number,reflect:!0})],Z.prototype,"position",2);i([r({attribute:"position-in-pixels",type:Number})],Z.prototype,"positionInPixels",2);i([r({type:Boolean,reflect:!0})],Z.prototype,"vertical",2);i([r({type:Boolean,reflect:!0})],Z.prototype,"disabled",2);i([r()],Z.prototype,"primary",2);i([r()],Z.prototype,"snap",2);i([r({type:Number,attribute:"snap-threshold"})],Z.prototype,"snapThreshold",2);i([w("position")],Z.prototype,"handlePositionChange",1);i([w("positionInPixels")],Z.prototype,"handlePositionInPixelsChange",1);i([w("vertical")],Z.prototype,"handleVerticalChange",1);Z.define("sl-split-panel");var ei=T`
  ${D}

  :host {
    --symbol-color: var(--sl-color-neutral-300);
    --symbol-color-active: var(--sl-color-amber-500);
    --symbol-size: 1.2rem;
    --symbol-spacing: var(--sl-spacing-3x-small);

    display: inline-flex;
  }

  .rating {
    position: relative;
    display: inline-flex;
    border-radius: var(--sl-border-radius-medium);
    vertical-align: middle;
  }

  .rating:focus {
    outline: none;
  }

  .rating:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .rating__symbols {
    display: inline-flex;
    position: relative;
    font-size: var(--symbol-size);
    line-height: 0;
    color: var(--symbol-color);
    white-space: nowrap;
    cursor: pointer;
  }

  .rating__symbols > * {
    padding: var(--symbol-spacing);
  }

  .rating__symbol--active,
  .rating__partial--filled {
    color: var(--symbol-color-active);
  }

  .rating__partial-symbol-container {
    position: relative;
  }

  .rating__partial--filled {
    position: absolute;
    top: var(--symbol-spacing);
    left: var(--symbol-spacing);
  }

  .rating__symbol {
    transition: var(--sl-transition-fast) scale;
  }

  .rating__symbol--hover {
    scale: 1.2;
  }

  .rating--disabled .rating__symbols,
  .rating--readonly .rating__symbols {
    cursor: default;
  }

  .rating--disabled .rating__symbol--hover,
  .rating--readonly .rating__symbol--hover {
    scale: none;
  }

  .rating--disabled {
    opacity: 0.5;
  }

  .rating--disabled .rating__symbols {
    cursor: not-allowed;
  }

  /* Forced colors mode */
  @media (forced-colors: active) {
    .rating__symbol--active {
      color: SelectedItem;
    }
  }
`,G=class extends I{constructor(){super(...arguments),this.localize=new H(this),this.hoverValue=0,this.isHovering=!1,this.label="",this.value=0,this.max=5,this.precision=1,this.readonly=!1,this.disabled=!1,this.getSymbol=()=>'<sl-icon name="star-fill" library="system"></sl-icon>'}getValueFromMousePosition(e){return this.getValueFromXCoordinate(e.clientX)}getValueFromTouchPosition(e){return this.getValueFromXCoordinate(e.touches[0].clientX)}getValueFromXCoordinate(e){const t=this.localize.dir()==="rtl",{left:s,right:a,width:o}=this.rating.getBoundingClientRect(),c=t?this.roundToPrecision((a-e)/o*this.max,this.precision):this.roundToPrecision((e-s)/o*this.max,this.precision);return be(c,0,this.max)}handleClick(e){this.disabled||(this.setValue(this.getValueFromMousePosition(e)),this.emit("sl-change"))}setValue(e){this.disabled||this.readonly||(this.value=e===this.value?0:e,this.isHovering=!1)}handleKeyDown(e){const t=this.localize.dir()==="ltr",s=this.localize.dir()==="rtl",a=this.value;if(!(this.disabled||this.readonly)){if(e.key==="ArrowDown"||t&&e.key==="ArrowLeft"||s&&e.key==="ArrowRight"){const o=e.shiftKey?1:this.precision;this.value=Math.max(0,this.value-o),e.preventDefault()}if(e.key==="ArrowUp"||t&&e.key==="ArrowRight"||s&&e.key==="ArrowLeft"){const o=e.shiftKey?1:this.precision;this.value=Math.min(this.max,this.value+o),e.preventDefault()}e.key==="Home"&&(this.value=0,e.preventDefault()),e.key==="End"&&(this.value=this.max,e.preventDefault()),this.value!==a&&this.emit("sl-change")}}handleMouseEnter(e){this.isHovering=!0,this.hoverValue=this.getValueFromMousePosition(e)}handleMouseMove(e){this.hoverValue=this.getValueFromMousePosition(e)}handleMouseLeave(){this.isHovering=!1}handleTouchStart(e){this.isHovering=!0,this.hoverValue=this.getValueFromTouchPosition(e),e.preventDefault()}handleTouchMove(e){this.hoverValue=this.getValueFromTouchPosition(e)}handleTouchEnd(e){this.isHovering=!1,this.setValue(this.hoverValue),this.emit("sl-change"),e.preventDefault()}roundToPrecision(e,t=.5){const s=1/t;return Math.ceil(e*s)/s}handleHoverValueChange(){this.emit("sl-hover",{detail:{phase:"move",value:this.hoverValue}})}handleIsHoveringChange(){this.emit("sl-hover",{detail:{phase:this.isHovering?"start":"end",value:this.hoverValue}})}focus(e){this.rating.focus(e)}blur(){this.rating.blur()}render(){const e=this.localize.dir()==="rtl",t=Array.from(Array(this.max).keys());let s=0;return this.disabled||this.readonly?s=this.value:s=this.isHovering?this.hoverValue:this.value,_`
      <div
        part="base"
        class=${L({rating:!0,"rating--readonly":this.readonly,"rating--disabled":this.disabled,"rating--rtl":e})}
        role="slider"
        aria-label=${this.label}
        aria-disabled=${this.disabled?"true":"false"}
        aria-readonly=${this.readonly?"true":"false"}
        aria-valuenow=${this.value}
        aria-valuemin=${0}
        aria-valuemax=${this.max}
        tabindex=${this.disabled?"-1":"0"}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mouseenter=${this.handleMouseEnter}
        @touchstart=${this.handleTouchStart}
        @mouseleave=${this.handleMouseLeave}
        @touchend=${this.handleTouchEnd}
        @mousemove=${this.handleMouseMove}
        @touchmove=${this.handleTouchMove}
      >
        <span class="rating__symbols">
          ${t.map(a=>s>a&&s<a+1?_`
                <span
                  class=${L({rating__symbol:!0,"rating__partial-symbol-container":!0,"rating__symbol--hover":this.isHovering&&Math.ceil(s)===a+1})}
                  role="presentation"
                  @mouseenter=${this.handleMouseEnter}
                >
                  <div
                    style=${me({clipPath:e?`inset(0 ${(s-a)*100}% 0 0)`:`inset(0 0 0 ${(s-a)*100}%)`})}
                  >
                    ${Ge(this.getSymbol(a+1))}
                  </div>
                  <div
                    class="rating__partial--filled"
                    style=${me({clipPath:e?`inset(0 0 0 ${100-(s-a)*100}%)`:`inset(0 ${100-(s-a)*100}% 0 0)`})}
                  >
                    ${Ge(this.getSymbol(a+1))}
                  </div>
                </span>
              `:_`
              <span
                class=${L({rating__symbol:!0,"rating__symbol--hover":this.isHovering&&Math.ceil(s)===a+1,"rating__symbol--active":s>=a+1})}
                role="presentation"
                @mouseenter=${this.handleMouseEnter}
              >
                ${Ge(this.getSymbol(a+1))}
              </span>
            `)}
        </span>
      </div>
    `}};G.styles=ei;G.dependencies={"sl-icon":ie};i([z(".rating")],G.prototype,"rating",2);i([F()],G.prototype,"hoverValue",2);i([F()],G.prototype,"isHovering",2);i([r()],G.prototype,"label",2);i([r({type:Number})],G.prototype,"value",2);i([r({type:Number})],G.prototype,"max",2);i([r({type:Number})],G.prototype,"precision",2);i([r({type:Boolean,reflect:!0})],G.prototype,"readonly",2);i([r({type:Boolean,reflect:!0})],G.prototype,"disabled",2);i([r()],G.prototype,"getSymbol",2);i([yt({passive:!0})],G.prototype,"handleTouchMove",1);i([w("hoverValue")],G.prototype,"handleHoverValueChange",1);i([w("isHovering")],G.prototype,"handleIsHoveringChange",1);G.define("sl-rating");mt.define("sl-spinner");var ti=[{max:276e4,value:6e4,unit:"minute"},{max:72e6,value:36e5,unit:"hour"},{max:5184e5,value:864e5,unit:"day"},{max:24192e5,value:6048e5,unit:"week"},{max:28512e6,value:2592e6,unit:"month"},{max:1/0,value:31536e6,unit:"year"}],ve=class extends I{constructor(){super(...arguments),this.localize=new H(this),this.isoTime="",this.relativeTime="",this.titleTime="",this.date=new Date,this.format="long",this.numeric="auto",this.sync=!1}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this.updateTimeout)}render(){const e=new Date,t=new Date(this.date);if(isNaN(t.getMilliseconds()))return this.relativeTime="",this.isoTime="","";const s=t.getTime()-e.getTime(),{unit:a,value:o}=ti.find(c=>Math.abs(s)<c.max);if(this.isoTime=t.toISOString(),this.titleTime=this.localize.date(t,{month:"long",year:"numeric",day:"numeric",hour:"numeric",minute:"numeric",timeZoneName:"short"}),this.relativeTime=this.localize.relativeTime(Math.round(s/o),a,{numeric:this.numeric,style:this.format}),clearTimeout(this.updateTimeout),this.sync){let c;a==="minute"?c=qe("second"):a==="hour"?c=qe("minute"):a==="day"?c=qe("hour"):c=qe("day"),this.updateTimeout=window.setTimeout(()=>this.requestUpdate(),c)}return _` <time datetime=${this.isoTime} title=${this.titleTime}>${this.relativeTime}</time> `}};i([F()],ve.prototype,"isoTime",2);i([F()],ve.prototype,"relativeTime",2);i([F()],ve.prototype,"titleTime",2);i([r()],ve.prototype,"date",2);i([r()],ve.prototype,"format",2);i([r()],ve.prototype,"numeric",2);i([r({type:Boolean})],ve.prototype,"sync",2);function qe(e){const s={second:1e3,minute:6e4,hour:36e5,day:864e5}[e];return s-Date.now()%s}ve.define("sl-relative-time");var ii=T`
  ${D}
  ${et}

  :host {
    --thumb-size: 20px;
    --tooltip-offset: 10px;
    --track-color-active: var(--sl-color-neutral-200);
    --track-color-inactive: var(--sl-color-neutral-200);
    --track-active-offset: 0%;
    --track-height: 6px;

    display: block;
  }

  .range {
    position: relative;
  }

  .range__control {
    --percent: 0%;
    -webkit-appearance: none;
    border-radius: 3px;
    width: 100%;
    height: var(--track-height);
    background: transparent;
    line-height: var(--sl-input-height-medium);
    vertical-align: middle;
    margin: 0;

    background-image: linear-gradient(
      to right,
      var(--track-color-inactive) 0%,
      var(--track-color-inactive) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) 100%
    );
  }

  .range--rtl .range__control {
    background-image: linear-gradient(
      to left,
      var(--track-color-inactive) 0%,
      var(--track-color-inactive) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) 100%
    );
  }

  /* Webkit */
  .range__control::-webkit-slider-runnable-track {
    width: 100%;
    height: var(--track-height);
    border-radius: 3px;
    border: none;
  }

  .range__control::-webkit-slider-thumb {
    border: none;
    width: var(--thumb-size);
    height: var(--thumb-size);
    border-radius: 50%;
    background-color: var(--sl-color-primary-600);
    border: solid var(--sl-input-border-width) var(--sl-color-primary-600);
    -webkit-appearance: none;
    margin-top: calc(var(--thumb-size) / -2 + var(--track-height) / 2);
    cursor: pointer;
  }

  .range__control:enabled::-webkit-slider-thumb:hover {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
  }

  .range__control:enabled:focus-visible::-webkit-slider-thumb {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .range__control:enabled::-webkit-slider-thumb:active {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    cursor: grabbing;
  }

  /* Firefox */
  .range__control::-moz-focus-outer {
    border: 0;
  }

  .range__control::-moz-range-progress {
    background-color: var(--track-color-active);
    border-radius: 3px;
    height: var(--track-height);
  }

  .range__control::-moz-range-track {
    width: 100%;
    height: var(--track-height);
    background-color: var(--track-color-inactive);
    border-radius: 3px;
    border: none;
  }

  .range__control::-moz-range-thumb {
    border: none;
    height: var(--thumb-size);
    width: var(--thumb-size);
    border-radius: 50%;
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    transition:
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) box-shadow;
    cursor: pointer;
  }

  .range__control:enabled::-moz-range-thumb:hover {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
  }

  .range__control:enabled:focus-visible::-moz-range-thumb {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .range__control:enabled::-moz-range-thumb:active {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    cursor: grabbing;
  }

  /* States */
  .range__control:focus-visible {
    outline: none;
  }

  .range__control:disabled {
    opacity: 0.5;
  }

  .range__control:disabled::-webkit-slider-thumb {
    cursor: not-allowed;
  }

  .range__control:disabled::-moz-range-thumb {
    cursor: not-allowed;
  }

  /* Tooltip output */
  .range__tooltip {
    position: absolute;
    z-index: var(--sl-z-index-tooltip);
    left: 0;
    border-radius: var(--sl-tooltip-border-radius);
    background-color: var(--sl-tooltip-background-color);
    font-family: var(--sl-tooltip-font-family);
    font-size: var(--sl-tooltip-font-size);
    font-weight: var(--sl-tooltip-font-weight);
    line-height: var(--sl-tooltip-line-height);
    color: var(--sl-tooltip-color);
    opacity: 0;
    padding: var(--sl-tooltip-padding);
    transition: var(--sl-transition-fast) opacity;
    pointer-events: none;
  }

  .range__tooltip:after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    left: 50%;
    translate: calc(-1 * var(--sl-tooltip-arrow-size));
  }

  .range--tooltip-visible .range__tooltip {
    opacity: 1;
  }

  /* Tooltip on top */
  .range--tooltip-top .range__tooltip {
    top: calc(-1 * var(--thumb-size) - var(--tooltip-offset));
  }

  .range--tooltip-top .range__tooltip:after {
    border-top: var(--sl-tooltip-arrow-size) solid var(--sl-tooltip-background-color);
    border-left: var(--sl-tooltip-arrow-size) solid transparent;
    border-right: var(--sl-tooltip-arrow-size) solid transparent;
    top: 100%;
  }

  /* Tooltip on bottom */
  .range--tooltip-bottom .range__tooltip {
    bottom: calc(-1 * var(--thumb-size) - var(--tooltip-offset));
  }

  .range--tooltip-bottom .range__tooltip:after {
    border-bottom: var(--sl-tooltip-arrow-size) solid var(--sl-tooltip-background-color);
    border-left: var(--sl-tooltip-arrow-size) solid transparent;
    border-right: var(--sl-tooltip-arrow-size) solid transparent;
    bottom: 100%;
  }

  @media (forced-colors: active) {
    .range__control,
    .range__tooltip {
      border: solid 1px transparent;
    }

    .range__control::-webkit-slider-thumb {
      border: solid 1px transparent;
    }

    .range__control::-moz-range-thumb {
      border: solid 1px transparent;
    }

    .range__tooltip:after {
      display: none;
    }
  }
`,M=class extends I{constructor(){super(...arguments),this.formControlController=new Re(this),this.hasSlotController=new we(this,"help-text","label"),this.localize=new H(this),this.hasFocus=!1,this.hasTooltip=!1,this.title="",this.name="",this.value=0,this.label="",this.helpText="",this.disabled=!1,this.min=0,this.max=100,this.step=1,this.tooltip="top",this.tooltipFormatter=e=>e.toString(),this.form="",this.defaultValue=0}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.syncRange()),this.value<this.min&&(this.value=this.min),this.value>this.max&&(this.value=this.max),this.updateComplete.then(()=>{this.syncRange(),this.resizeObserver.observe(this.input)})}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver.unobserve(this.input)}handleChange(){this.emit("sl-change")}handleInput(){this.value=parseFloat(this.input.value),this.emit("sl-input"),this.syncRange()}handleBlur(){this.hasFocus=!1,this.hasTooltip=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.hasTooltip=!0,this.emit("sl-focus")}handleThumbDragStart(){this.hasTooltip=!0}handleThumbDragEnd(){this.hasTooltip=!1}syncProgress(e){this.input.style.setProperty("--percent",`${e*100}%`)}syncTooltip(e){if(this.output!==null){const t=this.input.offsetWidth,s=this.output.offsetWidth,a=getComputedStyle(this.input).getPropertyValue("--thumb-size"),o=this.localize.dir()==="rtl",c=t*e;if(o){const n=`${t-c}px + ${e} * ${a}`;this.output.style.translate=`calc((${n} - ${s/2}px - ${a} / 2))`}else{const n=`${c}px - ${e} * ${a}`;this.output.style.translate=`calc(${n} - ${s/2}px + ${a} / 2)`}}}handleValueChange(){this.formControlController.updateValidity(),this.input.value=this.value.toString(),this.value=parseFloat(this.input.value),this.syncRange()}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}syncRange(){const e=Math.max(0,(this.value-this.min)/(this.max-this.min));this.syncProgress(e),this.tooltip!=="none"&&this.syncTooltip(e)}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}focus(e){this.input.focus(e)}blur(){this.input.blur()}stepUp(){this.input.stepUp(),this.value!==Number(this.input.value)&&(this.value=Number(this.input.value))}stepDown(){this.input.stepDown(),this.value!==Number(this.input.value)&&(this.value=Number(this.input.value))}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),s=this.label?!0:!!e,a=this.helpText?!0:!!t;return _`
      <div
        part="form-control"
        class=${L({"form-control":!0,"form-control--medium":!0,"form-control--has-label":s,"form-control--has-help-text":a})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${s?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${L({range:!0,"range--disabled":this.disabled,"range--focused":this.hasFocus,"range--rtl":this.localize.dir()==="rtl","range--tooltip-visible":this.hasTooltip,"range--tooltip-top":this.tooltip==="top","range--tooltip-bottom":this.tooltip==="bottom"})}
            @mousedown=${this.handleThumbDragStart}
            @mouseup=${this.handleThumbDragEnd}
            @touchstart=${this.handleThumbDragStart}
            @touchend=${this.handleThumbDragEnd}
          >
            <input
              part="input"
              id="input"
              class="range__control"
              title=${this.title}
              type="range"
              name=${R(this.name)}
              ?disabled=${this.disabled}
              min=${R(this.min)}
              max=${R(this.max)}
              step=${R(this.step)}
              .value=${Se(this.value.toString())}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @focus=${this.handleFocus}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @blur=${this.handleBlur}
            />
            ${this.tooltip!=="none"&&!this.disabled?_`
                  <output part="tooltip" class="range__tooltip">
                    ${typeof this.tooltipFormatter=="function"?this.tooltipFormatter(this.value):this.value}
                  </output>
                `:""}
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${a?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};M.styles=ii;i([z(".range__control")],M.prototype,"input",2);i([z(".range__tooltip")],M.prototype,"output",2);i([F()],M.prototype,"hasFocus",2);i([F()],M.prototype,"hasTooltip",2);i([r()],M.prototype,"title",2);i([r()],M.prototype,"name",2);i([r({type:Number})],M.prototype,"value",2);i([r()],M.prototype,"label",2);i([r({attribute:"help-text"})],M.prototype,"helpText",2);i([r({type:Boolean,reflect:!0})],M.prototype,"disabled",2);i([r({type:Number})],M.prototype,"min",2);i([r({type:Number})],M.prototype,"max",2);i([r({type:Number})],M.prototype,"step",2);i([r()],M.prototype,"tooltip",2);i([r({attribute:!1})],M.prototype,"tooltipFormatter",2);i([r({reflect:!0})],M.prototype,"form",2);i([Ke()],M.prototype,"defaultValue",2);i([yt({passive:!0})],M.prototype,"handleThumbDragStart",1);i([w("value",{waitUntilFirstUpdate:!0})],M.prototype,"handleValueChange",1);i([w("disabled",{waitUntilFirstUpdate:!0})],M.prototype,"handleDisabledChange",1);i([w("hasTooltip",{waitUntilFirstUpdate:!0})],M.prototype,"syncRange",1);M.define("sl-range");var si=T`
  ${D}

  :host {
    display: contents;
  }
`,Ye=class extends I{constructor(){super(...arguments),this.observedElements=[],this.disabled=!1}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(e=>{this.emit("sl-resize",{detail:{entries:e}})}),this.disabled||this.startObserver()}disconnectedCallback(){super.disconnectedCallback(),this.stopObserver()}handleSlotChange(){this.disabled||this.startObserver()}startObserver(){const e=this.shadowRoot.querySelector("slot");if(e!==null){const t=e.assignedElements({flatten:!0});this.observedElements.forEach(s=>this.resizeObserver.unobserve(s)),this.observedElements=[],t.forEach(s=>{this.resizeObserver.observe(s),this.observedElements.push(s)})}}stopObserver(){this.resizeObserver.disconnect()}handleDisabledChange(){this.disabled?this.stopObserver():this.startObserver()}render(){return _` <slot @slotchange=${this.handleSlotChange}></slot> `}};Ye.styles=si;i([r({type:Boolean,reflect:!0})],Ye.prototype,"disabled",2);i([w("disabled",{waitUntilFirstUpdate:!0})],Ye.prototype,"handleDisabledChange",1);Ye.define("sl-resize-observer");var ai=T`
  ${D}

  :host {
    display: block;
  }

  :host(:focus-visible) {
    outline: 0px;
  }

  .radio {
    display: inline-flex;
    align-items: top;
    font-family: var(--sl-input-font-family);
    font-size: var(--sl-input-font-size-medium);
    font-weight: var(--sl-input-font-weight);
    color: var(--sl-input-label-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .radio--small {
    --toggle-size: var(--sl-toggle-size-small);
    font-size: var(--sl-input-font-size-small);
  }

  .radio--medium {
    --toggle-size: var(--sl-toggle-size-medium);
    font-size: var(--sl-input-font-size-medium);
  }

  .radio--large {
    --toggle-size: var(--sl-toggle-size-large);
    font-size: var(--sl-input-font-size-large);
  }

  .radio__checked-icon {
    display: inline-flex;
    width: var(--toggle-size);
    height: var(--toggle-size);
  }

  .radio__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--toggle-size);
    height: var(--toggle-size);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
    border-radius: 50%;
    background-color: var(--sl-input-background-color);
    color: transparent;
    transition:
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) box-shadow;
  }

  .radio__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  /* Hover */
  .radio:not(.radio--checked):not(.radio--disabled) .radio__control:hover {
    border-color: var(--sl-input-border-color-hover);
    background-color: var(--sl-input-background-color-hover);
  }

  /* Checked */
  .radio--checked .radio__control {
    color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
  }

  /* Checked + hover */
  .radio.radio--checked:not(.radio--disabled) .radio__control:hover {
    border-color: var(--sl-color-primary-500);
    background-color: var(--sl-color-primary-500);
  }

  /* Checked + focus */
  :host(:focus-visible) .radio__control {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Disabled */
  .radio--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When the control isn't checked, hide the circle for Windows High Contrast mode a11y */
  .radio:not(.radio--checked) svg circle {
    opacity: 0;
  }

  .radio__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    line-height: var(--toggle-size);
    margin-inline-start: 0.5em;
    user-select: none;
    -webkit-user-select: none;
  }
`,de=class extends I{constructor(){super(),this.checked=!1,this.hasFocus=!1,this.size="medium",this.disabled=!1,this.handleBlur=()=>{this.hasFocus=!1,this.emit("sl-blur")},this.handleClick=()=>{this.disabled||(this.checked=!0)},this.handleFocus=()=>{this.hasFocus=!0,this.emit("sl-focus")},this.addEventListener("blur",this.handleBlur),this.addEventListener("click",this.handleClick),this.addEventListener("focus",this.handleFocus)}connectedCallback(){super.connectedCallback(),this.setInitialAttributes()}setInitialAttributes(){this.setAttribute("role","radio"),this.setAttribute("tabindex","-1"),this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleCheckedChange(){this.setAttribute("aria-checked",this.checked?"true":"false"),this.setAttribute("tabindex",this.checked?"0":"-1")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}render(){return _`
      <span
        part="base"
        class=${L({radio:!0,"radio--checked":this.checked,"radio--disabled":this.disabled,"radio--focused":this.hasFocus,"radio--small":this.size==="small","radio--medium":this.size==="medium","radio--large":this.size==="large"})}
      >
        <span part="${`control${this.checked?" control--checked":""}`}" class="radio__control">
          ${this.checked?_` <sl-icon part="checked-icon" class="radio__checked-icon" library="system" name="radio"></sl-icon> `:""}
        </span>

        <slot part="label" class="radio__label"></slot>
      </span>
    `}};de.styles=ai;de.dependencies={"sl-icon":ie};i([F()],de.prototype,"checked",2);i([F()],de.prototype,"hasFocus",2);i([r()],de.prototype,"value",2);i([r({reflect:!0})],de.prototype,"size",2);i([r({type:Boolean,reflect:!0})],de.prototype,"disabled",2);i([w("checked")],de.prototype,"handleCheckedChange",1);i([w("disabled",{waitUntilFirstUpdate:!0})],de.prototype,"handleDisabledChange",1);de.define("sl-radio");var ri=T`
  ${Et}

  .button__prefix,
  .button__suffix,
  .button__label {
    display: inline-flex;
    position: relative;
    align-items: center;
  }

  /* We use a hidden input so constraint validation errors work, since they don't appear to show when used with buttons.
    We can't actually hide it, though, otherwise the messages will be suppressed by the browser. */
  .hidden-input {
    all: unset;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    outline: dotted 1px red;
    opacity: 0;
    z-index: -1;
  }
`,ae=class extends I{constructor(){super(...arguments),this.hasSlotController=new we(this,"[default]","prefix","suffix"),this.hasFocus=!1,this.checked=!1,this.disabled=!1,this.size="medium",this.pill=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","presentation")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleClick(e){if(this.disabled){e.preventDefault(),e.stopPropagation();return}this.checked=!0}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}focus(e){this.input.focus(e)}blur(){this.input.blur()}render(){return St`
      <div part="base" role="presentation">
        <button
          part="${`button${this.checked?" button--checked":""}`}"
          role="radio"
          aria-checked="${this.checked}"
          class=${L({button:!0,"button--default":!0,"button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--checked":this.checked,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--outline":!0,"button--pill":this.pill,"button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
          aria-disabled=${this.disabled}
          type="button"
          value=${R(this.value)}
          tabindex="${this.checked?"0":"-1"}"
          @blur=${this.handleBlur}
          @focus=${this.handleFocus}
          @click=${this.handleClick}
        >
          <slot name="prefix" part="prefix" class="button__prefix"></slot>
          <slot part="label" class="button__label"></slot>
          <slot name="suffix" part="suffix" class="button__suffix"></slot>
        </button>
      </div>
    `}};ae.styles=ri;i([z(".button")],ae.prototype,"input",2);i([z(".hidden-input")],ae.prototype,"hiddenInput",2);i([F()],ae.prototype,"hasFocus",2);i([r({type:Boolean,reflect:!0})],ae.prototype,"checked",2);i([r()],ae.prototype,"value",2);i([r({type:Boolean,reflect:!0})],ae.prototype,"disabled",2);i([r({reflect:!0})],ae.prototype,"size",2);i([r({type:Boolean,reflect:!0})],ae.prototype,"pill",2);i([w("disabled",{waitUntilFirstUpdate:!0})],ae.prototype,"handleDisabledChange",1);ae.define("sl-radio-button");var oi=T`
  ${D}
  ${et}

  :host {
    display: block;
  }

  .form-control {
    position: relative;
    border: none;
    padding: 0;
    margin: 0;
  }

  .form-control__label {
    padding: 0;
  }

  .radio-group--required .radio-group__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
  }

  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
`,Y=class extends I{constructor(){super(...arguments),this.formControlController=new Re(this),this.hasSlotController=new we(this,"help-text","label"),this.customValidityMessage="",this.hasButtonGroup=!1,this.errorMessage="",this.defaultValue="",this.label="",this.helpText="",this.name="option",this.value="",this.size="medium",this.form="",this.required=!1}get validity(){const e=this.required&&!this.value;return this.customValidityMessage!==""?Ft:e?Ot:Pt}get validationMessage(){const e=this.required&&!this.value;return this.customValidityMessage!==""?this.customValidityMessage:e?this.validationInput.validationMessage:""}connectedCallback(){super.connectedCallback(),this.defaultValue=this.value}firstUpdated(){this.formControlController.updateValidity()}getAllRadios(){return[...this.querySelectorAll("sl-radio, sl-radio-button")]}handleRadioClick(e){const t=e.target.closest("sl-radio, sl-radio-button"),s=this.getAllRadios(),a=this.value;t.disabled||(this.value=t.value,s.forEach(o=>o.checked=o===t),this.value!==a&&(this.emit("sl-change"),this.emit("sl-input")))}handleKeyDown(e){var t;if(!["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"," "].includes(e.key))return;const s=this.getAllRadios().filter(u=>!u.disabled),a=(t=s.find(u=>u.checked))!=null?t:s[0],o=e.key===" "?0:["ArrowUp","ArrowLeft"].includes(e.key)?-1:1,c=this.value;let n=s.indexOf(a)+o;n<0&&(n=s.length-1),n>s.length-1&&(n=0),this.getAllRadios().forEach(u=>{u.checked=!1,this.hasButtonGroup||(u.tabIndex=-1)}),this.value=s[n].value,s[n].checked=!0,this.hasButtonGroup?s[n].shadowRoot.querySelector("button").focus():(s[n].tabIndex=0,s[n].focus()),this.value!==c&&(this.emit("sl-change"),this.emit("sl-input")),e.preventDefault()}handleLabelClick(){const e=this.getAllRadios(),s=e.find(a=>a.checked)||e[0];s&&s.focus()}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}async syncRadioElements(){var e,t;const s=this.getAllRadios();if(await Promise.all(s.map(async a=>{await a.updateComplete,a.checked=a.value===this.value,a.size=this.size})),this.hasButtonGroup=s.some(a=>a.tagName.toLowerCase()==="sl-radio-button"),!s.some(a=>a.checked))if(this.hasButtonGroup){const a=(e=s[0].shadowRoot)==null?void 0:e.querySelector("button");a&&(a.tabIndex=0)}else s[0].tabIndex=0;if(this.hasButtonGroup){const a=(t=this.shadowRoot)==null?void 0:t.querySelector("sl-button-group");a&&(a.disableRole=!0)}}syncRadios(){if(customElements.get("sl-radio")&&customElements.get("sl-radio-button")){this.syncRadioElements();return}customElements.get("sl-radio")?this.syncRadioElements():customElements.whenDefined("sl-radio").then(()=>this.syncRadios()),customElements.get("sl-radio-button")?this.syncRadioElements():customElements.whenDefined("sl-radio-button").then(()=>this.syncRadios())}updateCheckedRadio(){this.getAllRadios().forEach(t=>t.checked=t.value===this.value),this.formControlController.setValidity(this.validity.valid)}handleSizeChange(){this.syncRadios()}handleValueChange(){this.hasUpdated&&this.updateCheckedRadio()}checkValidity(){const e=this.required&&!this.value,t=this.customValidityMessage!=="";return e||t?(this.formControlController.emitInvalidEvent(),!1):!0}getForm(){return this.formControlController.getForm()}reportValidity(){const e=this.validity.valid;return this.errorMessage=this.customValidityMessage||e?"":this.validationInput.validationMessage,this.formControlController.setValidity(e),this.validationInput.hidden=!0,clearTimeout(this.validationTimeout),e||(this.validationInput.hidden=!1,this.validationInput.reportValidity(),this.validationTimeout=setTimeout(()=>this.validationInput.hidden=!0,1e4)),e}setCustomValidity(e=""){this.customValidityMessage=e,this.errorMessage=e,this.validationInput.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),s=this.label?!0:!!e,a=this.helpText?!0:!!t,o=_`
      <slot @slotchange=${this.syncRadios} @click=${this.handleRadioClick} @keydown=${this.handleKeyDown}></slot>
    `;return _`
      <fieldset
        part="form-control"
        class=${L({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--radio-group":!0,"form-control--has-label":s,"form-control--has-help-text":a})}
        role="radiogroup"
        aria-labelledby="label"
        aria-describedby="help-text"
        aria-errormessage="error-message"
      >
        <label
          part="form-control-label"
          id="label"
          class="form-control__label"
          aria-hidden=${s?"false":"true"}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div class="visually-hidden">
            <div id="error-message" aria-live="assertive">${this.errorMessage}</div>
            <label class="radio-group__validation">
              <input
                type="text"
                class="radio-group__validation-input"
                ?required=${this.required}
                tabindex="-1"
                hidden
                @invalid=${this.handleInvalid}
              />
            </label>
          </div>

          ${this.hasButtonGroup?_`
                <sl-button-group part="button-group" exportparts="base:button-group__base" role="presentation">
                  ${o}
                </sl-button-group>
              `:o}
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${a?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </fieldset>
    `}};Y.styles=oi;Y.dependencies={"sl-button-group":Lt};i([z("slot:not([name])")],Y.prototype,"defaultSlot",2);i([z(".radio-group__validation-input")],Y.prototype,"validationInput",2);i([F()],Y.prototype,"hasButtonGroup",2);i([F()],Y.prototype,"errorMessage",2);i([F()],Y.prototype,"defaultValue",2);i([r()],Y.prototype,"label",2);i([r({attribute:"help-text"})],Y.prototype,"helpText",2);i([r()],Y.prototype,"name",2);i([r({reflect:!0})],Y.prototype,"value",2);i([r({reflect:!0})],Y.prototype,"size",2);i([r({reflect:!0})],Y.prototype,"form",2);i([r({type:Boolean,reflect:!0})],Y.prototype,"required",2);i([w("size",{waitUntilFirstUpdate:!0})],Y.prototype,"handleSizeChange",1);i([w("value")],Y.prototype,"handleValueChange",1);Y.define("sl-radio-group");var ni=T`
  ${D}

  :host {
    --height: 1rem;
    --track-color: var(--sl-color-neutral-200);
    --indicator-color: var(--sl-color-primary-600);
    --label-color: var(--sl-color-neutral-0);

    display: block;
  }

  .progress-bar {
    position: relative;
    background-color: var(--track-color);
    height: var(--height);
    border-radius: var(--sl-border-radius-pill);
    box-shadow: inset var(--sl-shadow-small);
    overflow: hidden;
  }

  .progress-bar__indicator {
    height: 100%;
    font-family: var(--sl-font-sans);
    font-size: 12px;
    font-weight: var(--sl-font-weight-normal);
    background-color: var(--indicator-color);
    color: var(--label-color);
    text-align: center;
    line-height: var(--height);
    white-space: nowrap;
    overflow: hidden;
    transition:
      400ms width,
      400ms background-color;
    user-select: none;
    -webkit-user-select: none;
  }

  /* Indeterminate */
  .progress-bar--indeterminate .progress-bar__indicator {
    position: absolute;
    animation: indeterminate 2.5s infinite cubic-bezier(0.37, 0, 0.63, 1);
  }

  .progress-bar--indeterminate.progress-bar--rtl .progress-bar__indicator {
    animation-name: indeterminate-rtl;
  }

  @media (forced-colors: active) {
    .progress-bar {
      outline: solid 1px SelectedItem;
      background-color: var(--sl-color-neutral-0);
    }

    .progress-bar__indicator {
      outline: solid 1px SelectedItem;
      background-color: SelectedItem;
    }
  }

  @keyframes indeterminate {
    0% {
      left: -50%;
      width: 50%;
    }
    75%,
    100% {
      left: 100%;
      width: 50%;
    }
  }

  @keyframes indeterminate-rtl {
    0% {
      right: -50%;
      width: 50%;
    }
    75%,
    100% {
      right: 100%;
      width: 50%;
    }
  }
`,Be=class extends I{constructor(){super(...arguments),this.localize=new H(this),this.value=0,this.indeterminate=!1,this.label=""}render(){return _`
      <div
        part="base"
        class=${L({"progress-bar":!0,"progress-bar--indeterminate":this.indeterminate,"progress-bar--rtl":this.localize.dir()==="rtl"})}
        role="progressbar"
        title=${R(this.title)}
        aria-label=${this.label.length>0?this.label:this.localize.term("progress")}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow=${this.indeterminate?0:this.value}
      >
        <div part="indicator" class="progress-bar__indicator" style=${me({width:`${this.value}%`})}>
          ${this.indeterminate?"":_` <slot part="label" class="progress-bar__label"></slot> `}
        </div>
      </div>
    `}};Be.styles=ni;i([r({type:Number,reflect:!0})],Be.prototype,"value",2);i([r({type:Boolean,reflect:!0})],Be.prototype,"indeterminate",2);i([r()],Be.prototype,"label",2);Be.define("sl-progress-bar");var li=T`
  ${D}

  :host {
    display: inline-block;
  }
`;let xt=null;class _t{}_t.render=function(e,t){xt(e,t)};self.QrCreator=_t;(function(e){function t(u,h,p,v){var l={},d=e(p,h);d.u(u),d.J(),v=v||0;var g=d.h(),m=d.h()+2*v;return l.text=u,l.level=h,l.version=p,l.O=m,l.a=function(y,A){return y-=v,A-=v,0>y||y>=g||0>A||A>=g?!1:d.a(y,A)},l}function s(u,h,p,v,l,d,g,m,y,A){function B(x,k,f,b,$,O,P){x?(u.lineTo(k+O,f+P),u.arcTo(k,f,b,$,d)):u.lineTo(k,f)}g?u.moveTo(h+d,p):u.moveTo(h,p),B(m,v,p,v,l,-d,0),B(y,v,l,h,l,0,-d),B(A,h,l,h,p,d,0),B(g,h,p,v,p,0,d)}function a(u,h,p,v,l,d,g,m,y,A){function B(x,k,f,b){u.moveTo(x+f,k),u.lineTo(x,k),u.lineTo(x,k+b),u.arcTo(x,k,x+f,k,d)}g&&B(h,p,d,d),m&&B(v,p,-d,d),y&&B(v,l,-d,-d),A&&B(h,l,d,-d)}function o(u,h){var p=h.fill;if(typeof p=="string")u.fillStyle=p;else{var v=p.type,l=p.colorStops;if(p=p.position.map(g=>Math.round(g*h.size)),v==="linear-gradient")var d=u.createLinearGradient.apply(u,p);else if(v==="radial-gradient")d=u.createRadialGradient.apply(u,p);else throw Error("Unsupported fill");l.forEach(([g,m])=>{d.addColorStop(g,m)}),u.fillStyle=d}}function c(u,h){e:{var p=h.text,v=h.v,l=h.N,d=h.K,g=h.P;for(l=Math.max(1,l||1),d=Math.min(40,d||40);l<=d;l+=1)try{var m=t(p,v,l,g);break e}catch{}m=void 0}if(!m)return null;for(p=u.getContext("2d"),h.background&&(p.fillStyle=h.background,p.fillRect(h.left,h.top,h.size,h.size)),v=m.O,d=h.size/v,p.beginPath(),g=0;g<v;g+=1)for(l=0;l<v;l+=1){var y=p,A=h.left+l*d,B=h.top+g*d,x=g,k=l,f=m.a,b=A+d,$=B+d,O=x-1,P=x+1,S=k-1,C=k+1,ce=Math.floor(Math.min(.5,Math.max(0,h.R))*d),fe=f(x,k),xe=f(O,S),Ne=f(O,k);O=f(O,C);var He=f(x,C);C=f(P,C),k=f(P,k),P=f(P,S),x=f(x,S),A=Math.round(A),B=Math.round(B),b=Math.round(b),$=Math.round($),fe?s(y,A,B,b,$,ce,!Ne&&!x,!Ne&&!He,!k&&!He,!k&&!x):a(y,A,B,b,$,ce,Ne&&x&&xe,Ne&&He&&O,k&&He&&C,k&&x&&P)}return o(p,h),p.fill(),u}var n={minVersion:1,maxVersion:40,ecLevel:"L",left:0,top:0,size:200,fill:"#000",background:null,text:"no text",radius:.5,quiet:0};xt=function(u,h){var p={};Object.assign(p,n,u),p.N=p.minVersion,p.K=p.maxVersion,p.v=p.ecLevel,p.left=p.left,p.top=p.top,p.size=p.size,p.fill=p.fill,p.background=p.background,p.text=p.text,p.R=p.radius,p.P=p.quiet,h instanceof HTMLCanvasElement?((h.width!==p.size||h.height!==p.size)&&(h.width=p.size,h.height=p.size),h.getContext("2d").clearRect(0,0,h.width,h.height),c(h,p)):(u=document.createElement("canvas"),u.width=p.size,u.height=p.size,p=c(u,p),h.appendChild(p))}})(function(){function e(h){var p=s.s(h);return{S:function(){return 4},b:function(){return p.length},write:function(v){for(var l=0;l<p.length;l+=1)v.put(p[l],8)}}}function t(){var h=[],p=0,v={B:function(){return h},c:function(l){return(h[Math.floor(l/8)]>>>7-l%8&1)==1},put:function(l,d){for(var g=0;g<d;g+=1)v.m((l>>>d-g-1&1)==1)},f:function(){return p},m:function(l){var d=Math.floor(p/8);h.length<=d&&h.push(0),l&&(h[d]|=128>>>p%8),p+=1}};return v}function s(h,p){function v(x,k){for(var f=-1;7>=f;f+=1)if(!(-1>=x+f||m<=x+f))for(var b=-1;7>=b;b+=1)-1>=k+b||m<=k+b||(g[x+f][k+b]=0<=f&&6>=f&&(b==0||b==6)||0<=b&&6>=b&&(f==0||f==6)||2<=f&&4>=f&&2<=b&&4>=b)}function l(x,k){for(var f=m=4*h+17,b=Array(f),$=0;$<f;$+=1){b[$]=Array(f);for(var O=0;O<f;O+=1)b[$][O]=null}for(g=b,v(0,0),v(m-7,0),v(0,m-7),f=c.G(h),b=0;b<f.length;b+=1)for($=0;$<f.length;$+=1){O=f[b];var P=f[$];if(g[O][P]==null)for(var S=-2;2>=S;S+=1)for(var C=-2;2>=C;C+=1)g[O+S][P+C]=S==-2||S==2||C==-2||C==2||S==0&&C==0}for(f=8;f<m-8;f+=1)g[f][6]==null&&(g[f][6]=f%2==0);for(f=8;f<m-8;f+=1)g[6][f]==null&&(g[6][f]=f%2==0);for(f=c.w(d<<3|k),b=0;15>b;b+=1)$=!x&&(f>>b&1)==1,g[6>b?b:8>b?b+1:m-15+b][8]=$,g[8][8>b?m-b-1:9>b?15-b:14-b]=$;if(g[m-8][8]=!x,7<=h){for(f=c.A(h),b=0;18>b;b+=1)$=!x&&(f>>b&1)==1,g[Math.floor(b/3)][b%3+m-8-3]=$;for(b=0;18>b;b+=1)$=!x&&(f>>b&1)==1,g[b%3+m-8-3][Math.floor(b/3)]=$}if(y==null){for(x=u.I(h,d),f=t(),b=0;b<A.length;b+=1)$=A[b],f.put(4,4),f.put($.b(),c.f(4,h)),$.write(f);for(b=$=0;b<x.length;b+=1)$+=x[b].j;if(f.f()>8*$)throw Error("code length overflow. ("+f.f()+">"+8*$+")");for(f.f()+4<=8*$&&f.put(0,4);f.f()%8!=0;)f.m(!1);for(;!(f.f()>=8*$)&&(f.put(236,8),!(f.f()>=8*$));)f.put(17,8);var ce=0;for($=b=0,O=Array(x.length),P=Array(x.length),S=0;S<x.length;S+=1){var fe=x[S].j,xe=x[S].o-fe;for(b=Math.max(b,fe),$=Math.max($,xe),O[S]=Array(fe),C=0;C<O[S].length;C+=1)O[S][C]=255&f.B()[C+ce];for(ce+=fe,C=c.C(xe),fe=a(O[S],C.b()-1).l(C),P[S]=Array(C.b()-1),C=0;C<P[S].length;C+=1)xe=C+fe.b()-P[S].length,P[S][C]=0<=xe?fe.c(xe):0}for(C=f=0;C<x.length;C+=1)f+=x[C].o;for(f=Array(f),C=ce=0;C<b;C+=1)for(S=0;S<x.length;S+=1)C<O[S].length&&(f[ce]=O[S][C],ce+=1);for(C=0;C<$;C+=1)for(S=0;S<x.length;S+=1)C<P[S].length&&(f[ce]=P[S][C],ce+=1);y=f}for(x=y,f=-1,b=m-1,$=7,O=0,k=c.F(k),P=m-1;0<P;P-=2)for(P==6&&--P;;){for(S=0;2>S;S+=1)g[b][P-S]==null&&(C=!1,O<x.length&&(C=(x[O]>>>$&1)==1),k(b,P-S)&&(C=!C),g[b][P-S]=C,--$,$==-1&&(O+=1,$=7));if(b+=f,0>b||m<=b){b-=f,f=-f;break}}}var d=o[p],g=null,m=0,y=null,A=[],B={u:function(x){x=e(x),A.push(x),y=null},a:function(x,k){if(0>x||m<=x||0>k||m<=k)throw Error(x+","+k);return g[x][k]},h:function(){return m},J:function(){for(var x=0,k=0,f=0;8>f;f+=1){l(!0,f);var b=c.D(B);(f==0||x>b)&&(x=b,k=f)}l(!1,k)}};return B}function a(h,p){if(typeof h.length>"u")throw Error(h.length+"/"+p);var v=function(){for(var d=0;d<h.length&&h[d]==0;)d+=1;for(var g=Array(h.length-d+p),m=0;m<h.length-d;m+=1)g[m]=h[m+d];return g}(),l={c:function(d){return v[d]},b:function(){return v.length},multiply:function(d){for(var g=Array(l.b()+d.b()-1),m=0;m<l.b();m+=1)for(var y=0;y<d.b();y+=1)g[m+y]^=n.i(n.g(l.c(m))+n.g(d.c(y)));return a(g,0)},l:function(d){if(0>l.b()-d.b())return l;for(var g=n.g(l.c(0))-n.g(d.c(0)),m=Array(l.b()),y=0;y<l.b();y+=1)m[y]=l.c(y);for(y=0;y<d.b();y+=1)m[y]^=n.i(n.g(d.c(y))+g);return a(m,0).l(d)}};return l}s.s=function(h){for(var p=[],v=0;v<h.length;v++){var l=h.charCodeAt(v);128>l?p.push(l):2048>l?p.push(192|l>>6,128|l&63):55296>l||57344<=l?p.push(224|l>>12,128|l>>6&63,128|l&63):(v++,l=65536+((l&1023)<<10|h.charCodeAt(v)&1023),p.push(240|l>>18,128|l>>12&63,128|l>>6&63,128|l&63))}return p};var o={L:1,M:0,Q:3,H:2},c=function(){function h(l){for(var d=0;l!=0;)d+=1,l>>>=1;return d}var p=[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],v={w:function(l){for(var d=l<<10;0<=h(d)-h(1335);)d^=1335<<h(d)-h(1335);return(l<<10|d)^21522},A:function(l){for(var d=l<<12;0<=h(d)-h(7973);)d^=7973<<h(d)-h(7973);return l<<12|d},G:function(l){return p[l-1]},F:function(l){switch(l){case 0:return function(d,g){return(d+g)%2==0};case 1:return function(d){return d%2==0};case 2:return function(d,g){return g%3==0};case 3:return function(d,g){return(d+g)%3==0};case 4:return function(d,g){return(Math.floor(d/2)+Math.floor(g/3))%2==0};case 5:return function(d,g){return d*g%2+d*g%3==0};case 6:return function(d,g){return(d*g%2+d*g%3)%2==0};case 7:return function(d,g){return(d*g%3+(d+g)%2)%2==0};default:throw Error("bad maskPattern:"+l)}},C:function(l){for(var d=a([1],0),g=0;g<l;g+=1)d=d.multiply(a([1,n.i(g)],0));return d},f:function(l,d){if(l!=4||1>d||40<d)throw Error("mode: "+l+"; type: "+d);return 10>d?8:16},D:function(l){for(var d=l.h(),g=0,m=0;m<d;m+=1)for(var y=0;y<d;y+=1){for(var A=0,B=l.a(m,y),x=-1;1>=x;x+=1)if(!(0>m+x||d<=m+x))for(var k=-1;1>=k;k+=1)0>y+k||d<=y+k||(x!=0||k!=0)&&B==l.a(m+x,y+k)&&(A+=1);5<A&&(g+=3+A-5)}for(m=0;m<d-1;m+=1)for(y=0;y<d-1;y+=1)A=0,l.a(m,y)&&(A+=1),l.a(m+1,y)&&(A+=1),l.a(m,y+1)&&(A+=1),l.a(m+1,y+1)&&(A+=1),(A==0||A==4)&&(g+=3);for(m=0;m<d;m+=1)for(y=0;y<d-6;y+=1)l.a(m,y)&&!l.a(m,y+1)&&l.a(m,y+2)&&l.a(m,y+3)&&l.a(m,y+4)&&!l.a(m,y+5)&&l.a(m,y+6)&&(g+=40);for(y=0;y<d;y+=1)for(m=0;m<d-6;m+=1)l.a(m,y)&&!l.a(m+1,y)&&l.a(m+2,y)&&l.a(m+3,y)&&l.a(m+4,y)&&!l.a(m+5,y)&&l.a(m+6,y)&&(g+=40);for(y=A=0;y<d;y+=1)for(m=0;m<d;m+=1)l.a(m,y)&&(A+=1);return g+=Math.abs(100*A/d/d-50)/5*10}};return v}(),n=function(){for(var h=Array(256),p=Array(256),v=0;8>v;v+=1)h[v]=1<<v;for(v=8;256>v;v+=1)h[v]=h[v-4]^h[v-5]^h[v-6]^h[v-8];for(v=0;255>v;v+=1)p[h[v]]=v;return{g:function(l){if(1>l)throw Error("glog("+l+")");return p[l]},i:function(l){for(;0>l;)l+=255;for(;256<=l;)l-=255;return h[l]}}}(),u=function(){function h(l,d){switch(d){case o.L:return p[4*(l-1)];case o.M:return p[4*(l-1)+1];case o.Q:return p[4*(l-1)+2];case o.H:return p[4*(l-1)+3]}}var p=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12,7,37,13],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],v={I:function(l,d){var g=h(l,d);if(typeof g>"u")throw Error("bad rs block @ typeNumber:"+l+"/errorCorrectLevel:"+d);l=g.length/3,d=[];for(var m=0;m<l;m+=1)for(var y=g[3*m],A=g[3*m+1],B=g[3*m+2],x=0;x<y;x+=1){var k=B,f={};f.o=A,f.j=k,d.push(f)}return d}};return v}();return s}());const ci=QrCreator;var re=class extends I{constructor(){super(...arguments),this.value="",this.label="",this.size=128,this.fill="black",this.background="white",this.radius=0,this.errorCorrection="H"}firstUpdated(){this.generate()}generate(){this.hasUpdated&&ci.render({text:this.value,radius:this.radius,ecLevel:this.errorCorrection,fill:this.fill,background:this.background,size:this.size*2},this.canvas)}render(){var e;return _`
      <canvas
        part="base"
        class="qr-code"
        role="img"
        aria-label=${((e=this.label)==null?void 0:e.length)>0?this.label:this.value}
        style=${me({width:`${this.size}px`,height:`${this.size}px`})}
      ></canvas>
    `}};re.styles=li;i([z("canvas")],re.prototype,"canvas",2);i([r()],re.prototype,"value",2);i([r()],re.prototype,"label",2);i([r({type:Number})],re.prototype,"size",2);i([r()],re.prototype,"fill",2);i([r()],re.prototype,"background",2);i([r({type:Number})],re.prototype,"radius",2);i([r({attribute:"error-correction"})],re.prototype,"errorCorrection",2);i([w(["background","errorCorrection","fill","radius","size","value"])],re.prototype,"generate",1);re.define("sl-qr-code");var di=T`
  ${D}

  :host {
    display: contents;
  }
`,he=class extends I{constructor(){super(...arguments),this.attrOldValue=!1,this.charData=!1,this.charDataOldValue=!1,this.childList=!1,this.disabled=!1,this.handleMutation=e=>{this.emit("sl-mutation",{detail:{mutationList:e}})}}connectedCallback(){super.connectedCallback(),this.mutationObserver=new MutationObserver(this.handleMutation),this.disabled||this.startObserver()}disconnectedCallback(){super.disconnectedCallback(),this.stopObserver()}startObserver(){const e=typeof this.attr=="string"&&this.attr.length>0,t=e&&this.attr!=="*"?this.attr.split(" "):void 0;try{this.mutationObserver.observe(this,{subtree:!0,childList:this.childList,attributes:e,attributeFilter:t,attributeOldValue:this.attrOldValue,characterData:this.charData,characterDataOldValue:this.charDataOldValue})}catch{}}stopObserver(){this.mutationObserver.disconnect()}handleDisabledChange(){this.disabled?this.stopObserver():this.startObserver()}handleChange(){this.stopObserver(),this.startObserver()}render(){return _` <slot></slot> `}};he.styles=di;i([r({reflect:!0})],he.prototype,"attr",2);i([r({attribute:"attr-old-value",type:Boolean,reflect:!0})],he.prototype,"attrOldValue",2);i([r({attribute:"char-data",type:Boolean,reflect:!0})],he.prototype,"charData",2);i([r({attribute:"char-data-old-value",type:Boolean,reflect:!0})],he.prototype,"charDataOldValue",2);i([r({attribute:"child-list",type:Boolean,reflect:!0})],he.prototype,"childList",2);i([r({type:Boolean,reflect:!0})],he.prototype,"disabled",2);i([w("disabled")],he.prototype,"handleDisabledChange",1);i([w("attr",{waitUntilFirstUpdate:!0}),w("attr-old-value",{waitUntilFirstUpdate:!0}),w("char-data",{waitUntilFirstUpdate:!0}),w("char-data-old-value",{waitUntilFirstUpdate:!0}),w("childList",{waitUntilFirstUpdate:!0})],he.prototype,"handleChange",1);he.define("sl-mutation-observer");Rt.define("sl-popup");var hi=T`
  ${D}

  :host {
    --size: 128px;
    --track-width: 4px;
    --track-color: var(--sl-color-neutral-200);
    --indicator-width: var(--track-width);
    --indicator-color: var(--sl-color-primary-600);
    --indicator-transition-duration: 0.35s;

    display: inline-flex;
  }

  .progress-ring {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .progress-ring__image {
    width: var(--size);
    height: var(--size);
    rotate: -90deg;
    transform-origin: 50% 50%;
  }

  .progress-ring__track,
  .progress-ring__indicator {
    --radius: calc(var(--size) / 2 - max(var(--track-width), var(--indicator-width)) * 0.5);
    --circumference: calc(var(--radius) * 2 * 3.141592654);

    fill: none;
    r: var(--radius);
    cx: calc(var(--size) / 2);
    cy: calc(var(--size) / 2);
  }

  .progress-ring__track {
    stroke: var(--track-color);
    stroke-width: var(--track-width);
  }

  .progress-ring__indicator {
    stroke: var(--indicator-color);
    stroke-width: var(--indicator-width);
    stroke-linecap: round;
    transition-property: stroke-dashoffset;
    transition-duration: var(--indicator-transition-duration);
    stroke-dasharray: var(--circumference) var(--circumference);
    stroke-dashoffset: calc(var(--circumference) - var(--percentage) * var(--circumference));
  }

  .progress-ring__label {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    text-align: center;
    user-select: none;
    -webkit-user-select: none;
  }
`,Ie=class extends I{constructor(){super(...arguments),this.localize=new H(this),this.value=0,this.label=""}updated(e){if(super.updated(e),e.has("value")){const t=parseFloat(getComputedStyle(this.indicator).getPropertyValue("r")),s=2*Math.PI*t,a=s-this.value/100*s;this.indicatorOffset=`${a}px`}}render(){return _`
      <div
        part="base"
        class="progress-ring"
        role="progressbar"
        aria-label=${this.label.length>0?this.label:this.localize.term("progress")}
        aria-describedby="label"
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow="${this.value}"
        style="--percentage: ${this.value/100}"
      >
        <svg class="progress-ring__image">
          <circle class="progress-ring__track"></circle>
          <circle class="progress-ring__indicator" style="stroke-dashoffset: ${this.indicatorOffset}"></circle>
        </svg>

        <slot id="label" part="label" class="progress-ring__label"></slot>
      </div>
    `}};Ie.styles=hi;i([z(".progress-ring__indicator")],Ie.prototype,"indicator",2);i([F()],Ie.prototype,"indicatorOffset",2);i([r({type:Number,reflect:!0})],Ie.prototype,"value",2);i([r()],Ie.prototype,"label",2);Ie.define("sl-progress-ring");var ui=T`
  ${D}

  :host {
    display: block;
    user-select: none;
    -webkit-user-select: none;
  }

  :host(:focus) {
    outline: none;
  }

  .option {
    position: relative;
    display: flex;
    align-items: center;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-700);
    padding: var(--sl-spacing-x-small) var(--sl-spacing-medium) var(--sl-spacing-x-small) var(--sl-spacing-x-small);
    transition: var(--sl-transition-fast) fill;
    cursor: pointer;
  }

  .option--hover:not(.option--current):not(.option--disabled) {
    background-color: var(--sl-color-neutral-100);
    color: var(--sl-color-neutral-1000);
  }

  .option--current,
  .option--current.option--disabled {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
    opacity: 1;
  }

  .option--disabled {
    outline: none;
    opacity: 0.5;
    cursor: not-allowed;
  }

  .option__label {
    flex: 1 1 auto;
    display: inline-block;
    line-height: var(--sl-line-height-dense);
  }

  .option .option__check {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    visibility: hidden;
    padding-inline-end: var(--sl-spacing-2x-small);
  }

  .option--selected .option__check {
    visibility: visible;
  }

  .option__prefix,
  .option__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .option__prefix::slotted(*) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .option__suffix::slotted(*) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  @media (forced-colors: active) {
    :host(:hover:not([aria-disabled='true'])) .option {
      outline: dashed 1px SelectedItem;
      outline-offset: -1px;
    }
  }
`,se=class extends I{constructor(){super(...arguments),this.localize=new H(this),this.current=!1,this.selected=!1,this.hasHover=!1,this.value="",this.disabled=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option"),this.setAttribute("aria-selected","false")}handleDefaultSlotChange(){const e=this.getTextLabel();if(typeof this.cachedTextLabel>"u"){this.cachedTextLabel=e;return}e!==this.cachedTextLabel&&(this.cachedTextLabel=e,this.emit("slotchange",{bubbles:!0,composed:!1,cancelable:!1}))}handleMouseEnter(){this.hasHover=!0}handleMouseLeave(){this.hasHover=!1}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleSelectedChange(){this.setAttribute("aria-selected",this.selected?"true":"false")}handleValueChange(){typeof this.value!="string"&&(this.value=String(this.value)),this.value.includes(" ")&&(console.error("Option values cannot include a space. All spaces have been replaced with underscores.",this),this.value=this.value.replace(/ /g,"_"))}getTextLabel(){var e;return((e=this.textContent)!=null?e:"").trim()}render(){return _`
      <div
        part="base"
        class=${L({option:!0,"option--current":this.current,"option--disabled":this.disabled,"option--selected":this.selected,"option--hover":this.hasHover})}
        @mouseenter=${this.handleMouseEnter}
        @mouseleave=${this.handleMouseLeave}
      >
        <sl-icon part="checked-icon" class="option__check" name="check" library="system" aria-hidden="true"></sl-icon>
        <slot part="prefix" name="prefix" class="option__prefix"></slot>
        <slot part="label" class="option__label" @slotchange=${this.handleDefaultSlotChange}></slot>
        <slot part="suffix" name="suffix" class="option__suffix"></slot>
      </div>
    `}};se.styles=ui;se.dependencies={"sl-icon":ie};i([z(".option__label")],se.prototype,"defaultSlot",2);i([F()],se.prototype,"current",2);i([F()],se.prototype,"selected",2);i([F()],se.prototype,"hasHover",2);i([r({reflect:!0})],se.prototype,"value",2);i([r({type:Boolean,reflect:!0})],se.prototype,"disabled",2);i([w("disabled")],se.prototype,"handleDisabledChange",1);i([w("selected")],se.prototype,"handleSelectedChange",1);i([w("value")],se.prototype,"handleValueChange",1);se.define("sl-option");Mt.define("sl-input");var pi=T`
  ${D}

  :host {
    display: block;
  }

  .menu-label {
    display: inline-block;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-500);
    padding: var(--sl-spacing-2x-small) var(--sl-spacing-x-large);
    user-select: none;
    -webkit-user-select: none;
  }
`,wt=class extends I{render(){return _` <slot part="base" class="menu-label"></slot> `}};wt.styles=pi;wt.define("sl-menu-label");var fi=T`
  ${D}

  :host {
    --divider-width: 2px;
    --handle-size: 2.5rem;

    display: inline-block;
    position: relative;
  }

  .image-comparer {
    max-width: 100%;
    max-height: 100%;
    overflow: hidden;
  }

  .image-comparer__before,
  .image-comparer__after {
    display: block;
    pointer-events: none;
  }

  .image-comparer__before::slotted(img),
  .image-comparer__after::slotted(img),
  .image-comparer__before::slotted(svg),
  .image-comparer__after::slotted(svg) {
    display: block;
    max-width: 100% !important;
    height: auto;
  }

  .image-comparer__after {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }

  .image-comparer__divider {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    width: var(--divider-width);
    height: 100%;
    background-color: var(--sl-color-neutral-0);
    translate: calc(var(--divider-width) / -2);
    cursor: ew-resize;
  }

  .image-comparer__handle {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: calc(50% - (var(--handle-size) / 2));
    width: var(--handle-size);
    height: var(--handle-size);
    background-color: var(--sl-color-neutral-0);
    border-radius: var(--sl-border-radius-circle);
    font-size: calc(var(--handle-size) * 0.5);
    color: var(--sl-color-neutral-700);
    cursor: inherit;
    z-index: 10;
  }

  .image-comparer__handle:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }
`,Ce=class extends I{constructor(){super(...arguments),this.localize=new H(this),this.position=50}handleDrag(e){const{width:t}=this.base.getBoundingClientRect(),s=this.localize.dir()==="rtl";e.preventDefault(),gt(this.base,{onMove:a=>{this.position=parseFloat(be(a/t*100,0,100).toFixed(2)),s&&(this.position=100-this.position)},initialEvent:e})}handleKeyDown(e){const t=this.localize.dir()==="ltr",s=this.localize.dir()==="rtl";if(["ArrowLeft","ArrowRight","Home","End"].includes(e.key)){const a=e.shiftKey?10:1;let o=this.position;e.preventDefault(),(t&&e.key==="ArrowLeft"||s&&e.key==="ArrowRight")&&(o-=a),(t&&e.key==="ArrowRight"||s&&e.key==="ArrowLeft")&&(o+=a),e.key==="Home"&&(o=0),e.key==="End"&&(o=100),o=be(o,0,100),this.position=o}}handlePositionChange(){this.emit("sl-change")}render(){const e=this.localize.dir()==="rtl";return _`
      <div
        part="base"
        id="image-comparer"
        class=${L({"image-comparer":!0,"image-comparer--rtl":e})}
        @keydown=${this.handleKeyDown}
      >
        <div class="image-comparer__image">
          <div part="before" class="image-comparer__before">
            <slot name="before"></slot>
          </div>

          <div
            part="after"
            class="image-comparer__after"
            style=${me({clipPath:e?`inset(0 0 0 ${100-this.position}%)`:`inset(0 ${100-this.position}% 0 0)`})}
          >
            <slot name="after"></slot>
          </div>
        </div>

        <div
          part="divider"
          class="image-comparer__divider"
          style=${me({left:e?`${100-this.position}%`:`${this.position}%`})}
          @mousedown=${this.handleDrag}
          @touchstart=${this.handleDrag}
        >
          <div
            part="handle"
            class="image-comparer__handle"
            role="scrollbar"
            aria-valuenow=${this.position}
            aria-valuemin="0"
            aria-valuemax="100"
            aria-controls="image-comparer"
            tabindex="0"
          >
            <slot name="handle">
              <sl-icon library="system" name="grip-vertical"></sl-icon>
            </slot>
          </div>
        </div>
      </div>
    `}};Ce.styles=fi;Ce.scopedElement={"sl-icon":ie};i([z(".image-comparer")],Ce.prototype,"base",2);i([z(".image-comparer__handle")],Ce.prototype,"handle",2);i([r({type:Number,reflect:!0})],Ce.prototype,"position",2);i([w("position",{waitUntilFirstUpdate:!0})],Ce.prototype,"handlePositionChange",1);Ce.define("sl-image-comparer");var mi=T`
  ${D}

  :host {
    display: block;
  }
`,We=new Map;function gi(e,t="cors"){const s=We.get(e);if(s!==void 0)return Promise.resolve(s);const a=fetch(e,{mode:t}).then(async o=>{const c={ok:o.ok,status:o.status,html:await o.text()};return We.set(e,c),c});return We.set(e,a),a}var Te=class extends I{constructor(){super(...arguments),this.mode="cors",this.allowScripts=!1}executeScript(e){const t=document.createElement("script");[...e.attributes].forEach(s=>t.setAttribute(s.name,s.value)),t.textContent=e.textContent,e.parentNode.replaceChild(t,e)}async handleSrcChange(){try{const e=this.src,t=await gi(e,this.mode);if(e!==this.src)return;if(!t.ok){this.emit("sl-error",{detail:{status:t.status}});return}this.innerHTML=t.html,this.allowScripts&&[...this.querySelectorAll("script")].forEach(s=>this.executeScript(s)),this.emit("sl-load")}catch{this.emit("sl-error",{detail:{status:-1}})}}render(){return _`<slot></slot>`}};Te.styles=mi;i([r()],Te.prototype,"src",2);i([r()],Te.prototype,"mode",2);i([r({attribute:"allow-scripts",type:Boolean})],Te.prototype,"allowScripts",2);i([w("src")],Te.prototype,"handleSrcChange",1);Te.define("sl-include");var je=class extends I{constructor(){super(...arguments),this.localize=new H(this),this.value=0,this.unit="byte",this.display="short"}render(){if(isNaN(this.value))return"";const e=["","kilo","mega","giga","tera"],t=["","kilo","mega","giga","tera","peta"],s=this.unit==="bit"?e:t,a=Math.max(0,Math.min(Math.floor(Math.log10(this.value)/3),s.length-1)),o=s[a]+this.unit,c=parseFloat((this.value/Math.pow(1e3,a)).toPrecision(3));return this.localize.number(c,{style:"unit",unit:o,unitDisplay:this.display})}};i([r({type:Number})],je.prototype,"value",2);i([r()],je.prototype,"unit",2);i([r()],je.prototype,"display",2);je.define("sl-format-bytes");var J=class extends I{constructor(){super(...arguments),this.localize=new H(this),this.date=new Date,this.hourFormat="auto"}render(){const e=new Date(this.date),t=this.hourFormat==="auto"?void 0:this.hourFormat==="12";if(!isNaN(e.getMilliseconds()))return _`
      <time datetime=${e.toISOString()}>
        ${this.localize.date(e,{weekday:this.weekday,era:this.era,year:this.year,month:this.month,day:this.day,hour:this.hour,minute:this.minute,second:this.second,timeZoneName:this.timeZoneName,timeZone:this.timeZone,hour12:t})}
      </time>
    `}};i([r()],J.prototype,"date",2);i([r()],J.prototype,"weekday",2);i([r()],J.prototype,"era",2);i([r()],J.prototype,"year",2);i([r()],J.prototype,"month",2);i([r()],J.prototype,"day",2);i([r()],J.prototype,"hour",2);i([r()],J.prototype,"minute",2);i([r()],J.prototype,"second",2);i([r({attribute:"time-zone-name"})],J.prototype,"timeZoneName",2);i([r({attribute:"time-zone"})],J.prototype,"timeZone",2);i([r({attribute:"hour-format"})],J.prototype,"hourFormat",2);J.define("sl-format-date");var oe=class extends I{constructor(){super(...arguments),this.localize=new H(this),this.value=0,this.type="decimal",this.noGrouping=!1,this.currency="USD",this.currencyDisplay="symbol"}render(){return isNaN(this.value)?"":this.localize.number(this.value,{style:this.type,currency:this.currency,currencyDisplay:this.currencyDisplay,useGrouping:!this.noGrouping,minimumIntegerDigits:this.minimumIntegerDigits,minimumFractionDigits:this.minimumFractionDigits,maximumFractionDigits:this.maximumFractionDigits,minimumSignificantDigits:this.minimumSignificantDigits,maximumSignificantDigits:this.maximumSignificantDigits})}};i([r({type:Number})],oe.prototype,"value",2);i([r()],oe.prototype,"type",2);i([r({attribute:"no-grouping",type:Boolean})],oe.prototype,"noGrouping",2);i([r()],oe.prototype,"currency",2);i([r({attribute:"currency-display"})],oe.prototype,"currencyDisplay",2);i([r({attribute:"minimum-integer-digits",type:Number})],oe.prototype,"minimumIntegerDigits",2);i([r({attribute:"minimum-fraction-digits",type:Number})],oe.prototype,"minimumFractionDigits",2);i([r({attribute:"maximum-fraction-digits",type:Number})],oe.prototype,"maximumFractionDigits",2);i([r({attribute:"minimum-significant-digits",type:Number})],oe.prototype,"minimumSignificantDigits",2);i([r({attribute:"maximum-significant-digits",type:Number})],oe.prototype,"maximumSignificantDigits",2);oe.define("sl-format-number");var bi=T`
  ${D}

  :host {
    --size: 25rem;
    --header-spacing: var(--sl-spacing-large);
    --body-spacing: var(--sl-spacing-large);
    --footer-spacing: var(--sl-spacing-large);

    display: contents;
  }

  .drawer {
    top: 0;
    inset-inline-start: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    overflow: hidden;
  }

  .drawer--contained {
    position: absolute;
    z-index: initial;
  }

  .drawer--fixed {
    position: fixed;
    z-index: var(--sl-z-index-drawer);
  }

  .drawer__panel {
    position: absolute;
    display: flex;
    flex-direction: column;
    z-index: 2;
    max-width: 100%;
    max-height: 100%;
    background-color: var(--sl-panel-background-color);
    box-shadow: var(--sl-shadow-x-large);
    overflow: auto;
    pointer-events: all;
  }

  .drawer__panel:focus {
    outline: none;
  }

  .drawer--top .drawer__panel {
    top: 0;
    inset-inline-end: auto;
    bottom: auto;
    inset-inline-start: 0;
    width: 100%;
    height: var(--size);
  }

  .drawer--end .drawer__panel {
    top: 0;
    inset-inline-end: 0;
    bottom: auto;
    inset-inline-start: auto;
    width: var(--size);
    height: 100%;
  }

  .drawer--bottom .drawer__panel {
    top: auto;
    inset-inline-end: auto;
    bottom: 0;
    inset-inline-start: 0;
    width: 100%;
    height: var(--size);
  }

  .drawer--start .drawer__panel {
    top: 0;
    inset-inline-end: auto;
    bottom: auto;
    inset-inline-start: 0;
    width: var(--size);
    height: 100%;
  }

  .drawer__header {
    display: flex;
  }

  .drawer__title {
    flex: 1 1 auto;
    font: inherit;
    font-size: var(--sl-font-size-large);
    line-height: var(--sl-line-height-dense);
    padding: var(--header-spacing);
    margin: 0;
  }

  .drawer__header-actions {
    flex-shrink: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    gap: var(--sl-spacing-2x-small);
    padding: 0 var(--header-spacing);
  }

  .drawer__header-actions sl-icon-button,
  .drawer__header-actions ::slotted(sl-icon-button) {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
  }

  .drawer__body {
    flex: 1 1 auto;
    display: block;
    padding: var(--body-spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .drawer__footer {
    text-align: right;
    padding: var(--footer-spacing);
  }

  .drawer__footer ::slotted(sl-button:not(:last-of-type)) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .drawer:not(.drawer--has-footer) .drawer__footer {
    display: none;
  }

  .drawer__overlay {
    display: block;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--sl-overlay-background-color);
    pointer-events: all;
  }

  .drawer--contained .drawer__overlay {
    display: none;
  }

  @media (forced-colors: active) {
    .drawer__panel {
      border: solid 1px var(--sl-color-neutral-0);
    }
  }
`;function*kt(e=document.activeElement){e!=null&&(yield e,"shadowRoot"in e&&e.shadowRoot&&e.shadowRoot.mode!=="closed"&&(yield*Bt(kt(e.shadowRoot.activeElement))))}function vi(){return[...kt()].pop()}var De=[],Ct=class{constructor(e){this.tabDirection="forward",this.handleFocusIn=()=>{this.isActive()&&this.checkFocus()},this.handleKeyDown=t=>{var s,a;if(t.key!=="Tab"||this.isExternalActivated||!this.isActive())return;t.shiftKey?this.tabDirection="backward":this.tabDirection="forward",t.preventDefault();const o=ot(this.element),c=vi();let n=o.findIndex(h=>h===c);if(n===-1){this.currentFocus=o[0],(s=this.currentFocus)==null||s.focus({preventScroll:!0});return}const u=this.tabDirection==="forward"?1:-1;n+u>=o.length?n=0:n+u<0?n=o.length-1:n+=u,this.currentFocus=o[n],(a=this.currentFocus)==null||a.focus({preventScroll:!0}),setTimeout(()=>this.checkFocus())},this.handleKeyUp=()=>{this.tabDirection="forward"},this.element=e}activate(){De.push(this.element),document.addEventListener("focusin",this.handleFocusIn),document.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keyup",this.handleKeyUp)}deactivate(){De=De.filter(e=>e!==this.element),this.currentFocus=null,document.removeEventListener("focusin",this.handleFocusIn),document.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("keyup",this.handleKeyUp)}isActive(){return De[De.length-1]===this.element}activateExternal(){this.isExternalActivated=!0}deactivateExternal(){this.isExternalActivated=!1}checkFocus(){if(this.isActive()&&!this.isExternalActivated){const e=ot(this.element);if(!this.element.matches(":focus-within")){const t=e[0],s=e[e.length-1],a=this.tabDirection==="forward"?t:s;typeof a?.focus=="function"&&(this.currentFocus=a,a.focus({preventScroll:!0}))}}}};function dt(e){return e.charAt(0).toUpperCase()+e.slice(1)}var ee=class extends I{constructor(){super(...arguments),this.hasSlotController=new we(this,"footer"),this.localize=new H(this),this.modal=new Ct(this),this.open=!1,this.label="",this.placement="end",this.contained=!1,this.noHeader=!1,this.handleDocumentKeyDown=e=>{this.contained||e.key==="Escape"&&this.modal.isActive()&&this.open&&(e.stopImmediatePropagation(),this.requestClose("keyboard"))}}firstUpdated(){this.drawer.hidden=!this.open,this.open&&(this.addOpenListeners(),this.contained||(this.modal.activate(),Ee(this)))}disconnectedCallback(){super.disconnectedCallback(),Le(this)}requestClose(e){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:e}}).defaultPrevented){const s=j(this,"drawer.denyClose",{dir:this.localize.dir()});Q(this.panel,s.keyframes,s.options);return}this.hide()}addOpenListeners(){document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){document.removeEventListener("keydown",this.handleDocumentKeyDown)}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.contained||(this.modal.activate(),Ee(this));const e=this.querySelector("[autofocus]");e&&e.removeAttribute("autofocus"),await Promise.all([te(this.drawer),te(this.overlay)]),this.drawer.hidden=!1,requestAnimationFrame(()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(e?e.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),e&&e.setAttribute("autofocus","")});const t=j(this,`drawer.show${dt(this.placement)}`,{dir:this.localize.dir()}),s=j(this,"drawer.overlay.show",{dir:this.localize.dir()});await Promise.all([Q(this.panel,t.keyframes,t.options),Q(this.overlay,s.keyframes,s.options)]),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),this.contained||(this.modal.deactivate(),Le(this)),await Promise.all([te(this.drawer),te(this.overlay)]);const e=j(this,`drawer.hide${dt(this.placement)}`,{dir:this.localize.dir()}),t=j(this,"drawer.overlay.hide",{dir:this.localize.dir()});await Promise.all([Q(this.overlay,t.keyframes,t.options).then(()=>{this.overlay.hidden=!0}),Q(this.panel,e.keyframes,e.options).then(()=>{this.panel.hidden=!0})]),this.drawer.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1;const s=this.originalTrigger;typeof s?.focus=="function"&&setTimeout(()=>s.focus()),this.emit("sl-after-hide")}}handleNoModalChange(){this.open&&!this.contained&&(this.modal.activate(),Ee(this)),this.open&&this.contained&&(this.modal.deactivate(),Le(this))}async show(){if(!this.open)return this.open=!0,_e(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,_e(this,"sl-after-hide")}render(){return _`
      <div
        part="base"
        class=${L({drawer:!0,"drawer--open":this.open,"drawer--top":this.placement==="top","drawer--end":this.placement==="end","drawer--bottom":this.placement==="bottom","drawer--start":this.placement==="start","drawer--contained":this.contained,"drawer--fixed":!this.contained,"drawer--rtl":this.localize.dir()==="rtl","drawer--has-footer":this.hasSlotController.test("footer")})}
      >
        <div part="overlay" class="drawer__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="drawer__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${R(this.noHeader?this.label:void 0)}
          aria-labelledby=${R(this.noHeader?void 0:"title")}
          tabindex="0"
        >
          ${this.noHeader?"":_`
                <header part="header" class="drawer__header">
                  <h2 part="title" class="drawer__title" id="title">
                    <!-- If there's no label, use an invisible character to prevent the header from collapsing -->
                    <slot name="label"> ${this.label.length>0?this.label:"\uFEFF"} </slot>
                  </h2>
                  <div part="header-actions" class="drawer__header-actions">
                    <slot name="header-actions"></slot>
                    <sl-icon-button
                      part="close-button"
                      exportparts="base:close-button__base"
                      class="drawer__close"
                      name="x-lg"
                      label=${this.localize.term("close")}
                      library="system"
                      @click=${()=>this.requestClose("close-button")}
                    ></sl-icon-button>
                  </div>
                </header>
              `}

          <slot part="body" class="drawer__body"></slot>

          <footer part="footer" class="drawer__footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `}};ee.styles=bi;ee.dependencies={"sl-icon-button":bt};i([z(".drawer")],ee.prototype,"drawer",2);i([z(".drawer__panel")],ee.prototype,"panel",2);i([z(".drawer__overlay")],ee.prototype,"overlay",2);i([r({type:Boolean,reflect:!0})],ee.prototype,"open",2);i([r({reflect:!0})],ee.prototype,"label",2);i([r({reflect:!0})],ee.prototype,"placement",2);i([r({type:Boolean,reflect:!0})],ee.prototype,"contained",2);i([r({attribute:"no-header",type:Boolean,reflect:!0})],ee.prototype,"noHeader",2);i([w("open",{waitUntilFirstUpdate:!0})],ee.prototype,"handleOpenChange",1);i([w("contained",{waitUntilFirstUpdate:!0})],ee.prototype,"handleNoModalChange",1);U("drawer.showTop",{keyframes:[{opacity:0,translate:"0 -100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}});U("drawer.hideTop",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 -100%"}],options:{duration:250,easing:"ease"}});U("drawer.showEnd",{keyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}});U("drawer.hideEnd",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],options:{duration:250,easing:"ease"}});U("drawer.showBottom",{keyframes:[{opacity:0,translate:"0 100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}});U("drawer.hideBottom",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 100%"}],options:{duration:250,easing:"ease"}});U("drawer.showStart",{keyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}});U("drawer.hideStart",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],options:{duration:250,easing:"ease"}});U("drawer.denyClose",{keyframes:[{scale:1},{scale:1.01},{scale:1}],options:{duration:250}});U("drawer.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});U("drawer.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});ee.define("sl-drawer");var yi=T`
  ${D}

  :host {
    --error-color: var(--sl-color-danger-600);
    --success-color: var(--sl-color-success-600);

    display: inline-block;
  }

  .copy-button__button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    font-size: inherit;
    color: inherit;
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-x-fast) color;
  }

  .copy-button--success .copy-button__button {
    color: var(--success-color);
  }

  .copy-button--error .copy-button__button {
    color: var(--error-color);
  }

  .copy-button__button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .copy-button__button[disabled] {
    opacity: 0.5;
    cursor: not-allowed !important;
  }

  slot {
    display: inline-flex;
  }
`,X=class extends I{constructor(){super(...arguments),this.localize=new H(this),this.isCopying=!1,this.status="rest",this.value="",this.from="",this.disabled=!1,this.copyLabel="",this.successLabel="",this.errorLabel="",this.feedbackDuration=1e3,this.tooltipPlacement="top",this.hoist=!1}async handleCopy(){if(this.disabled||this.isCopying)return;this.isCopying=!0;let e=this.value;if(this.from){const t=this.getRootNode(),s=this.from.includes("."),a=this.from.includes("[")&&this.from.includes("]");let o=this.from,c="";s?[o,c]=this.from.trim().split("."):a&&([o,c]=this.from.trim().replace(/\]$/,"").split("["));const n="getElementById"in t?t.getElementById(o):null;n?a?e=n.getAttribute(c)||"":s?e=n[c]||"":e=n.textContent||"":(this.showStatus("error"),this.emit("sl-error"))}if(!e)this.showStatus("error"),this.emit("sl-error");else try{await navigator.clipboard.writeText(e),this.showStatus("success"),this.emit("sl-copy",{detail:{value:e}})}catch{this.showStatus("error"),this.emit("sl-error")}}async showStatus(e){const t=this.copyLabel||this.localize.term("copy"),s=this.successLabel||this.localize.term("copied"),a=this.errorLabel||this.localize.term("error"),o=e==="success"?this.successIcon:this.errorIcon,c=j(this,"copy.in",{dir:"ltr"}),n=j(this,"copy.out",{dir:"ltr"});this.tooltip.content=e==="success"?s:a,await this.copyIcon.animate(n.keyframes,n.options).finished,this.copyIcon.hidden=!0,this.status=e,o.hidden=!1,await o.animate(c.keyframes,c.options).finished,setTimeout(async()=>{await o.animate(n.keyframes,n.options).finished,o.hidden=!0,this.status="rest",this.copyIcon.hidden=!1,await this.copyIcon.animate(c.keyframes,c.options).finished,this.tooltip.content=t,this.isCopying=!1},this.feedbackDuration)}render(){const e=this.copyLabel||this.localize.term("copy");return _`
      <sl-tooltip
        class=${L({"copy-button":!0,"copy-button--success":this.status==="success","copy-button--error":this.status==="error"})}
        content=${e}
        placement=${this.tooltipPlacement}
        ?disabled=${this.disabled}
        ?hoist=${this.hoist}
        exportparts="
          base:tooltip__base,
          base__popup:tooltip__base__popup,
          base__arrow:tooltip__base__arrow,
          body:tooltip__body
        "
      >
        <button
          class="copy-button__button"
          part="button"
          type="button"
          ?disabled=${this.disabled}
          @click=${this.handleCopy}
        >
          <slot part="copy-icon" name="copy-icon">
            <sl-icon library="system" name="copy"></sl-icon>
          </slot>
          <slot part="success-icon" name="success-icon" hidden>
            <sl-icon library="system" name="check"></sl-icon>
          </slot>
          <slot part="error-icon" name="error-icon" hidden>
            <sl-icon library="system" name="x-lg"></sl-icon>
          </slot>
        </button>
      </sl-tooltip>
    `}};X.styles=yi;X.dependencies={"sl-icon":ie,"sl-tooltip":Ut};i([z('slot[name="copy-icon"]')],X.prototype,"copyIcon",2);i([z('slot[name="success-icon"]')],X.prototype,"successIcon",2);i([z('slot[name="error-icon"]')],X.prototype,"errorIcon",2);i([z("sl-tooltip")],X.prototype,"tooltip",2);i([F()],X.prototype,"isCopying",2);i([F()],X.prototype,"status",2);i([r()],X.prototype,"value",2);i([r()],X.prototype,"from",2);i([r({type:Boolean,reflect:!0})],X.prototype,"disabled",2);i([r({attribute:"copy-label"})],X.prototype,"copyLabel",2);i([r({attribute:"success-label"})],X.prototype,"successLabel",2);i([r({attribute:"error-label"})],X.prototype,"errorLabel",2);i([r({attribute:"feedback-duration",type:Number})],X.prototype,"feedbackDuration",2);i([r({attribute:"tooltip-placement"})],X.prototype,"tooltipPlacement",2);i([r({type:Boolean})],X.prototype,"hoist",2);U("copy.in",{keyframes:[{scale:".25",opacity:".25"},{scale:"1",opacity:"1"}],options:{duration:100}});U("copy.out",{keyframes:[{scale:"1",opacity:"1"},{scale:".25",opacity:"0"}],options:{duration:100}});X.define("sl-copy-button");var xi=T`
  ${D}

  :host {
    display: block;
  }

  .details {
    border: solid 1px var(--sl-color-neutral-200);
    border-radius: var(--sl-border-radius-medium);
    background-color: var(--sl-color-neutral-0);
    overflow-anchor: none;
  }

  .details--disabled {
    opacity: 0.5;
  }

  .details__header {
    display: flex;
    align-items: center;
    border-radius: inherit;
    padding: var(--sl-spacing-medium);
    user-select: none;
    -webkit-user-select: none;
    cursor: pointer;
  }

  .details__header::-webkit-details-marker {
    display: none;
  }

  .details__header:focus {
    outline: none;
  }

  .details__header:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: calc(1px + var(--sl-focus-ring-offset));
  }

  .details--disabled .details__header {
    cursor: not-allowed;
  }

  .details--disabled .details__header:focus-visible {
    outline: none;
    box-shadow: none;
  }

  .details__summary {
    flex: 1 1 auto;
    display: flex;
    align-items: center;
  }

  .details__summary-icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    transition: var(--sl-transition-medium) rotate ease;
  }

  .details--open .details__summary-icon {
    rotate: 90deg;
  }

  .details--open.details--rtl .details__summary-icon {
    rotate: -90deg;
  }

  .details--open slot[name='expand-icon'],
  .details:not(.details--open) slot[name='collapse-icon'] {
    display: none;
  }

  .details__body {
    overflow: hidden;
  }

  .details__content {
    display: block;
    padding: var(--sl-spacing-medium);
  }
`,ne=class extends I{constructor(){super(...arguments),this.localize=new H(this),this.open=!1,this.disabled=!1}firstUpdated(){this.body.style.height=this.open?"auto":"0",this.open&&(this.details.open=!0),this.detailsObserver=new MutationObserver(e=>{for(const t of e)t.type==="attributes"&&t.attributeName==="open"&&(this.details.open?this.show():this.hide())}),this.detailsObserver.observe(this.details,{attributes:!0})}disconnectedCallback(){super.disconnectedCallback(),this.detailsObserver.disconnect()}handleSummaryClick(e){e.preventDefault(),this.disabled||(this.open?this.hide():this.show(),this.header.focus())}handleSummaryKeyDown(e){(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),this.open?this.hide():this.show()),(e.key==="ArrowUp"||e.key==="ArrowLeft")&&(e.preventDefault(),this.hide()),(e.key==="ArrowDown"||e.key==="ArrowRight")&&(e.preventDefault(),this.show())}async handleOpenChange(){if(this.open){if(this.details.open=!0,this.emit("sl-show",{cancelable:!0}).defaultPrevented){this.open=!1,this.details.open=!1;return}await te(this.body);const{keyframes:t,options:s}=j(this,"details.show",{dir:this.localize.dir()});await Q(this.body,Xe(t,this.body.scrollHeight),s),this.body.style.height="auto",this.emit("sl-after-show")}else{if(this.emit("sl-hide",{cancelable:!0}).defaultPrevented){this.details.open=!0,this.open=!0;return}await te(this.body);const{keyframes:t,options:s}=j(this,"details.hide",{dir:this.localize.dir()});await Q(this.body,Xe(t,this.body.scrollHeight),s),this.body.style.height="auto",this.details.open=!1,this.emit("sl-after-hide")}}async show(){if(!(this.open||this.disabled))return this.open=!0,_e(this,"sl-after-show")}async hide(){if(!(!this.open||this.disabled))return this.open=!1,_e(this,"sl-after-hide")}render(){const e=this.localize.dir()==="rtl";return _`
      <details
        part="base"
        class=${L({details:!0,"details--open":this.open,"details--disabled":this.disabled,"details--rtl":e})}
      >
        <summary
          part="header"
          id="header"
          class="details__header"
          role="button"
          aria-expanded=${this.open?"true":"false"}
          aria-controls="content"
          aria-disabled=${this.disabled?"true":"false"}
          tabindex=${this.disabled?"-1":"0"}
          @click=${this.handleSummaryClick}
          @keydown=${this.handleSummaryKeyDown}
        >
          <slot name="summary" part="summary" class="details__summary">${this.summary}</slot>

          <span part="summary-icon" class="details__summary-icon">
            <slot name="expand-icon">
              <sl-icon library="system" name=${e?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
            <slot name="collapse-icon">
              <sl-icon library="system" name=${e?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
          </span>
        </summary>

        <div class="details__body" role="region" aria-labelledby="header">
          <slot part="content" id="content" class="details__content"></slot>
        </div>
      </details>
    `}};ne.styles=xi;ne.dependencies={"sl-icon":ie};i([z(".details")],ne.prototype,"details",2);i([z(".details__header")],ne.prototype,"header",2);i([z(".details__body")],ne.prototype,"body",2);i([z(".details__expand-icon-slot")],ne.prototype,"expandIconSlot",2);i([r({type:Boolean,reflect:!0})],ne.prototype,"open",2);i([r()],ne.prototype,"summary",2);i([r({type:Boolean,reflect:!0})],ne.prototype,"disabled",2);i([w("open",{waitUntilFirstUpdate:!0})],ne.prototype,"handleOpenChange",1);U("details.show",{keyframes:[{height:"0",opacity:"0"},{height:"auto",opacity:"1"}],options:{duration:250,easing:"linear"}});U("details.hide",{keyframes:[{height:"auto",opacity:"1"},{height:"0",opacity:"0"}],options:{duration:250,easing:"linear"}});ne.define("sl-details");var _i=T`
  ${D}

  :host {
    --width: 31rem;
    --header-spacing: var(--sl-spacing-large);
    --body-spacing: var(--sl-spacing-large);
    --footer-spacing: var(--sl-spacing-large);

    display: contents;
  }

  .dialog {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: var(--sl-z-index-dialog);
  }

  .dialog__panel {
    display: flex;
    flex-direction: column;
    z-index: 2;
    width: var(--width);
    max-width: calc(100% - var(--sl-spacing-2x-large));
    max-height: calc(100% - var(--sl-spacing-2x-large));
    background-color: var(--sl-panel-background-color);
    border-radius: var(--sl-border-radius-medium);
    box-shadow: var(--sl-shadow-x-large);
  }

  .dialog__panel:focus {
    outline: none;
  }

  /* Ensure there's enough vertical padding for phones that don't update vh when chrome appears (e.g. iPhone) */
  @media screen and (max-width: 420px) {
    .dialog__panel {
      max-height: 80vh;
    }
  }

  .dialog--open .dialog__panel {
    display: flex;
    opacity: 1;
  }

  .dialog__header {
    flex: 0 0 auto;
    display: flex;
  }

  .dialog__title {
    flex: 1 1 auto;
    font: inherit;
    font-size: var(--sl-font-size-large);
    line-height: var(--sl-line-height-dense);
    padding: var(--header-spacing);
    margin: 0;
  }

  .dialog__header-actions {
    flex-shrink: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    gap: var(--sl-spacing-2x-small);
    padding: 0 var(--header-spacing);
  }

  .dialog__header-actions sl-icon-button,
  .dialog__header-actions ::slotted(sl-icon-button) {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
  }

  .dialog__body {
    flex: 1 1 auto;
    display: block;
    padding: var(--body-spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .dialog__footer {
    flex: 0 0 auto;
    text-align: right;
    padding: var(--footer-spacing);
  }

  .dialog__footer ::slotted(sl-button:not(:first-of-type)) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  .dialog:not(.dialog--has-footer) .dialog__footer {
    display: none;
  }

  .dialog__overlay {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--sl-overlay-background-color);
  }

  @media (forced-colors: active) {
    .dialog__panel {
      border: solid 1px var(--sl-color-neutral-0);
    }
  }
`,ue=class extends I{constructor(){super(...arguments),this.hasSlotController=new we(this,"footer"),this.localize=new H(this),this.modal=new Ct(this),this.open=!1,this.label="",this.noHeader=!1,this.handleDocumentKeyDown=e=>{e.key==="Escape"&&this.modal.isActive()&&this.open&&(e.stopPropagation(),this.requestClose("keyboard"))}}firstUpdated(){this.dialog.hidden=!this.open,this.open&&(this.addOpenListeners(),this.modal.activate(),Ee(this))}disconnectedCallback(){super.disconnectedCallback(),this.modal.deactivate(),Le(this)}requestClose(e){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:e}}).defaultPrevented){const s=j(this,"dialog.denyClose",{dir:this.localize.dir()});Q(this.panel,s.keyframes,s.options);return}this.hide()}addOpenListeners(){document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){document.removeEventListener("keydown",this.handleDocumentKeyDown)}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.modal.activate(),Ee(this);const e=this.querySelector("[autofocus]");e&&e.removeAttribute("autofocus"),await Promise.all([te(this.dialog),te(this.overlay)]),this.dialog.hidden=!1,requestAnimationFrame(()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(e?e.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),e&&e.setAttribute("autofocus","")});const t=j(this,"dialog.show",{dir:this.localize.dir()}),s=j(this,"dialog.overlay.show",{dir:this.localize.dir()});await Promise.all([Q(this.panel,t.keyframes,t.options),Q(this.overlay,s.keyframes,s.options)]),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),this.modal.deactivate(),await Promise.all([te(this.dialog),te(this.overlay)]);const e=j(this,"dialog.hide",{dir:this.localize.dir()}),t=j(this,"dialog.overlay.hide",{dir:this.localize.dir()});await Promise.all([Q(this.overlay,t.keyframes,t.options).then(()=>{this.overlay.hidden=!0}),Q(this.panel,e.keyframes,e.options).then(()=>{this.panel.hidden=!0})]),this.dialog.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1,Le(this);const s=this.originalTrigger;typeof s?.focus=="function"&&setTimeout(()=>s.focus()),this.emit("sl-after-hide")}}async show(){if(!this.open)return this.open=!0,_e(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,_e(this,"sl-after-hide")}render(){return _`
      <div
        part="base"
        class=${L({dialog:!0,"dialog--open":this.open,"dialog--has-footer":this.hasSlotController.test("footer")})}
      >
        <div part="overlay" class="dialog__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="dialog__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${R(this.noHeader?this.label:void 0)}
          aria-labelledby=${R(this.noHeader?void 0:"title")}
          tabindex="-1"
        >
          ${this.noHeader?"":_`
                <header part="header" class="dialog__header">
                  <h2 part="title" class="dialog__title" id="title">
                    <slot name="label"> ${this.label.length>0?this.label:"\uFEFF"} </slot>
                  </h2>
                  <div part="header-actions" class="dialog__header-actions">
                    <slot name="header-actions"></slot>
                    <sl-icon-button
                      part="close-button"
                      exportparts="base:close-button__base"
                      class="dialog__close"
                      name="x-lg"
                      label=${this.localize.term("close")}
                      library="system"
                      @click="${()=>this.requestClose("close-button")}"
                    ></sl-icon-button>
                  </div>
                </header>
              `}
          ${""}
          <slot part="body" class="dialog__body" tabindex="-1"></slot>

          <footer part="footer" class="dialog__footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `}};ue.styles=_i;ue.dependencies={"sl-icon-button":bt};i([z(".dialog")],ue.prototype,"dialog",2);i([z(".dialog__panel")],ue.prototype,"panel",2);i([z(".dialog__overlay")],ue.prototype,"overlay",2);i([r({type:Boolean,reflect:!0})],ue.prototype,"open",2);i([r({reflect:!0})],ue.prototype,"label",2);i([r({attribute:"no-header",type:Boolean,reflect:!0})],ue.prototype,"noHeader",2);i([w("open",{waitUntilFirstUpdate:!0})],ue.prototype,"handleOpenChange",1);U("dialog.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});U("dialog.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});U("dialog.denyClose",{keyframes:[{scale:1},{scale:1.02},{scale:1}],options:{duration:250}});U("dialog.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});U("dialog.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});ue.define("sl-dialog");var wi=T`
  ${D}

  :host {
    --aspect-ratio: inherit;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    max-height: 100%;
    aspect-ratio: var(--aspect-ratio);
    scroll-snap-align: start;
    scroll-snap-stop: always;
  }

  ::slotted(img) {
    width: 100% !important;
    height: 100% !important;
    object-fit: cover;
  }
`,zt=class extends I{connectedCallback(){super.connectedCallback(),this.setAttribute("role","group")}render(){return _` <slot></slot> `}};zt.styles=wi;zt.define("sl-carousel-item");q.define("sl-checkbox");var ki=class{constructor(e,t){this.timerId=0,this.activeInteractions=0,this.paused=!1,this.stopped=!0,this.pause=()=>{this.activeInteractions++||(this.paused=!0,this.host.requestUpdate())},this.resume=()=>{--this.activeInteractions||(this.paused=!1,this.host.requestUpdate())},e.addController(this),this.host=e,this.tickCallback=t}hostConnected(){this.host.addEventListener("mouseenter",this.pause),this.host.addEventListener("mouseleave",this.resume),this.host.addEventListener("focusin",this.pause),this.host.addEventListener("focusout",this.resume),this.host.addEventListener("touchstart",this.pause,{passive:!0}),this.host.addEventListener("touchend",this.resume)}hostDisconnected(){this.stop(),this.host.removeEventListener("mouseenter",this.pause),this.host.removeEventListener("mouseleave",this.resume),this.host.removeEventListener("focusin",this.pause),this.host.removeEventListener("focusout",this.resume),this.host.removeEventListener("touchstart",this.pause),this.host.removeEventListener("touchend",this.resume)}start(e){this.stop(),this.stopped=!1,this.timerId=window.setInterval(()=>{this.paused||this.tickCallback()},e)}stop(){clearInterval(this.timerId),this.stopped=!0,this.host.requestUpdate()}},Ci=T`
  ${D}

  :host {
    --slide-gap: var(--sl-spacing-medium, 1rem);
    --aspect-ratio: 16 / 9;
    --scroll-hint: 0px;

    display: flex;
  }

  .carousel {
    display: grid;
    grid-template-columns: min-content 1fr min-content;
    grid-template-rows: 1fr min-content;
    grid-template-areas:
      '. slides .'
      '. pagination .';
    gap: var(--sl-spacing-medium);
    align-items: center;
    min-height: 100%;
    min-width: 100%;
    position: relative;
  }

  .carousel__pagination {
    grid-area: pagination;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: var(--sl-spacing-small);
  }

  .carousel__slides {
    grid-area: slides;

    display: grid;
    height: 100%;
    width: 100%;
    align-items: center;
    justify-items: center;
    overflow: auto;
    overscroll-behavior-x: contain;
    scrollbar-width: none;
    aspect-ratio: calc(var(--aspect-ratio) * var(--slides-per-page));
    border-radius: var(--sl-border-radius-small);

    --slide-size: calc((100% - (var(--slides-per-page) - 1) * var(--slide-gap)) / var(--slides-per-page));
  }

  @media (prefers-reduced-motion) {
    :where(.carousel__slides) {
      scroll-behavior: auto;
    }
  }

  .carousel__slides--horizontal {
    grid-auto-flow: column;
    grid-auto-columns: var(--slide-size);
    grid-auto-rows: 100%;
    column-gap: var(--slide-gap);
    scroll-snap-type: x mandatory;
    scroll-padding-inline: var(--scroll-hint);
    padding-inline: var(--scroll-hint);
    overflow-y: hidden;
  }

  .carousel__slides--vertical {
    grid-auto-flow: row;
    grid-auto-columns: 100%;
    grid-auto-rows: var(--slide-size);
    row-gap: var(--slide-gap);
    scroll-snap-type: y mandatory;
    scroll-padding-block: var(--scroll-hint);
    padding-block: var(--scroll-hint);
    overflow-x: hidden;
  }

  .carousel__slides--dragging,
  .carousel__slides--dropping {
    scroll-snap-type: unset;
  }

  :host([vertical]) ::slotted(sl-carousel-item) {
    height: 100%;
  }

  .carousel__slides::-webkit-scrollbar {
    display: none;
  }

  .carousel__navigation {
    grid-area: navigation;
    display: contents;
    font-size: var(--sl-font-size-x-large);
  }

  .carousel__navigation-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-small);
    font-size: inherit;
    color: var(--sl-color-neutral-600);
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-medium) color;
    appearance: none;
  }

  .carousel__navigation-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .carousel__navigation-button--disabled::part(base) {
    pointer-events: none;
  }

  .carousel__navigation-button--previous {
    grid-column: 1;
    grid-row: 1;
  }

  .carousel__navigation-button--next {
    grid-column: 3;
    grid-row: 1;
  }

  .carousel__pagination-item {
    display: block;
    cursor: pointer;
    background: none;
    border: 0;
    border-radius: var(--sl-border-radius-circle);
    width: var(--sl-spacing-small);
    height: var(--sl-spacing-small);
    background-color: var(--sl-color-neutral-300);
    padding: 0;
    margin: 0;
  }

  .carousel__pagination-item--active {
    background-color: var(--sl-color-neutral-700);
    transform: scale(1.2);
  }

  /* Focus styles */
  .carousel__slides:focus-visible,
  .carousel__navigation-button:focus-visible,
  .carousel__pagination-item:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }
`,zi=class{constructor(e){this.dragging=!1,this.scrolling=!1,this.mouseDragging=!1,this.handleScroll=()=>{this.scrolling||(this.scrolling=!0,this.host.requestUpdate())},this.handleScrollEnd=()=>{this.scrolling&&!this.dragging&&(this.scrolling=!1,this.host.requestUpdate())},this.handlePointerDown=t=>{if(t.pointerType==="touch")return;this.mouseDragging&&t.button===0&&(t.preventDefault(),this.host.scrollContainer.addEventListener("pointermove",this.handlePointerMove))},this.handlePointerMove=t=>{const s=this.host.scrollContainer,a=!!t.movementX||!!t.movementY;!this.dragging&&a?(s.setPointerCapture(t.pointerId),this.handleDragStart()):s.hasPointerCapture(t.pointerId)&&this.handleDrag(t)},this.handlePointerUp=t=>{this.host.scrollContainer.releasePointerCapture(t.pointerId),this.handleDragEnd()},this.host=e,e.addController(this)}async hostConnected(){const e=this.host;await e.updateComplete;const t=e.scrollContainer;t.addEventListener("scroll",this.handleScroll,{passive:!0}),t.addEventListener("scrollend",this.handleScrollEnd,!0),t.addEventListener("pointerdown",this.handlePointerDown),t.addEventListener("pointerup",this.handlePointerUp),t.addEventListener("pointercancel",this.handlePointerUp)}hostDisconnected(){const t=this.host.scrollContainer;t.removeEventListener("scroll",this.handleScroll),t.removeEventListener("scrollend",this.handleScrollEnd,!0),t.removeEventListener("pointerdown",this.handlePointerDown),t.removeEventListener("pointerup",this.handlePointerUp),t.removeEventListener("pointercancel",this.handlePointerUp)}handleDragStart(){const e=this.host;this.dragging=!0,e.scrollContainer.style.setProperty("scroll-snap-type","unset"),e.requestUpdate()}handleDrag(e){this.host.scrollContainer.scrollBy({left:-e.movementX,top:-e.movementY})}handleDragEnd(){const e=this.host,t=e.scrollContainer;t.removeEventListener("pointermove",this.handlePointerMove);const s=t.scrollLeft,a=t.scrollTop;t.style.removeProperty("scroll-snap-type");const o=t.scrollLeft,c=t.scrollTop;t.style.setProperty("scroll-snap-type","unset"),t.scrollTo({left:s,top:a,behavior:"auto"}),t.scrollTo({left:o,top:c,behavior:vt()?"auto":"smooth"}),requestAnimationFrame(async()=>{(s!==o||a!==c)&&await _e(t,"scrollend"),t.style.removeProperty("scroll-snap-type"),this.dragging=!1,e.requestUpdate()})}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*$i(e,t){if(e!==void 0){let s=0;for(const a of e)yield t(a,s++)}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*Si(e,t,s=1){const a=t===void 0?0:e;t??=e;for(let o=a;s>0?o<t:t<o;o+=s)yield o}var Ii=(e,t)=>{let s=0;return function(...a){window.clearTimeout(s),s=window.setTimeout(()=>{e.call(this,...a)},t)}},ht=(e,t,s)=>{const a=e[t];e[t]=function(...o){a.call(this,...o),s.call(this,a,...o)}},Ti="onscrollend"in window;if(!Ti){const e=new Set,t=new WeakMap,s=o=>{e.add(o.pointerId)},a=o=>{e.delete(o.pointerId)};document.addEventListener("pointerdown",s),document.addEventListener("pointerup",a),ht(EventTarget.prototype,"addEventListener",function(o,c){if(c!=="scroll")return;const n=Ii(()=>{e.size?n():this.dispatchEvent(new Event("scrollend"))},100);o.call(this,"scroll",n,{passive:!0}),t.set(this,n)}),ht(EventTarget.prototype,"removeEventListener",function(o,c){if(c!=="scroll")return;const n=t.get(this);n&&o.call(this,"scroll",n,{passive:!0})})}var N=class extends I{constructor(){super(...arguments),this.loop=!1,this.navigation=!1,this.pagination=!1,this.autoplay=!1,this.autoplayInterval=3e3,this.slidesPerPage=1,this.slidesPerMove=1,this.orientation="horizontal",this.mouseDragging=!1,this.activeSlide=0,this.autoplayController=new ki(this,()=>this.next()),this.scrollController=new zi(this),this.intersectionObserverEntries=new Map,this.localize=new H(this),this.handleSlotChange=e=>{e.some(s=>[...s.addedNodes,...s.removedNodes].some(a=>this.isCarouselItem(a)&&!a.hasAttribute("data-clone")))&&this.initializeSlides(),this.requestUpdate()}}connectedCallback(){super.connectedCallback(),this.setAttribute("role","region"),this.setAttribute("aria-label",this.localize.term("carousel"));const e=new IntersectionObserver(t=>{t.forEach(s=>{this.intersectionObserverEntries.set(s.target,s);const a=s.target;a.toggleAttribute("inert",!s.isIntersecting),a.classList.toggle("--in-view",s.isIntersecting),a.setAttribute("aria-hidden",s.isIntersecting?"false":"true")})},{root:this,threshold:.6});this.intersectionObserver=e,e.takeRecords().forEach(t=>{this.intersectionObserverEntries.set(t.target,t)})}disconnectedCallback(){super.disconnectedCallback(),this.intersectionObserver.disconnect(),this.mutationObserver.disconnect()}firstUpdated(){this.initializeSlides(),this.mutationObserver=new MutationObserver(this.handleSlotChange),this.mutationObserver.observe(this,{childList:!0,subtree:!0})}willUpdate(e){(e.has("slidesPerMove")||e.has("slidesPerPage"))&&(this.slidesPerMove=Math.min(this.slidesPerMove,this.slidesPerPage))}getPageCount(){const e=this.getSlides().length,{slidesPerPage:t,slidesPerMove:s,loop:a}=this,o=a?e/s:(e-t)/s+1;return Math.ceil(o)}getCurrentPage(){return Math.ceil(this.activeSlide/this.slidesPerMove)}canScrollNext(){return this.loop||this.getCurrentPage()<this.getPageCount()-1}canScrollPrev(){return this.loop||this.getCurrentPage()>0}getSlides({excludeClones:e=!0}={}){return[...this.children].filter(t=>this.isCarouselItem(t)&&(!e||!t.hasAttribute("data-clone")))}handleKeyDown(e){if(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(e.key)){const t=e.target,s=this.localize.dir()==="rtl",a=t.closest('[part~="pagination-item"]')!==null,o=e.key==="ArrowDown"||!s&&e.key==="ArrowRight"||s&&e.key==="ArrowLeft",c=e.key==="ArrowUp"||!s&&e.key==="ArrowLeft"||s&&e.key==="ArrowRight";e.preventDefault(),c&&this.previous(),o&&this.next(),e.key==="Home"&&this.goToSlide(0),e.key==="End"&&this.goToSlide(this.getSlides().length-1),a&&this.updateComplete.then(()=>{var n;const u=(n=this.shadowRoot)==null?void 0:n.querySelector('[part~="pagination-item--active"]');u&&u.focus()})}}handleScrollEnd(){const e=this.getSlides(),s=[...this.intersectionObserverEntries.values()].find(a=>a.isIntersecting);if(this.loop&&s?.target.hasAttribute("data-clone")){const a=Number(s.target.getAttribute("data-clone"));this.goToSlide(a,"auto")}else if(s){const a=e.indexOf(s.target);this.activeSlide=Math.ceil(a/this.slidesPerMove)*this.slidesPerMove}}isCarouselItem(e){return e instanceof Element&&e.tagName.toLowerCase()==="sl-carousel-item"}initializeSlides(){const e=this.intersectionObserver;this.intersectionObserverEntries.clear(),this.getSlides({excludeClones:!1}).forEach((t,s)=>{e.unobserve(t),t.classList.remove("--in-view"),t.classList.remove("--is-active"),t.setAttribute("aria-label",this.localize.term("slideNum",s+1)),t.hasAttribute("data-clone")&&t.remove()}),this.updateSlidesSnap(),this.loop&&this.createClones(),this.getSlides({excludeClones:!1}).forEach(t=>{e.observe(t)}),this.goToSlide(this.activeSlide,"auto")}createClones(){const e=this.getSlides(),t=this.slidesPerPage,s=e.slice(-t),a=e.slice(0,t);s.reverse().forEach((o,c)=>{const n=o.cloneNode(!0);n.setAttribute("data-clone",String(e.length-c-1)),this.prepend(n)}),a.forEach((o,c)=>{const n=o.cloneNode(!0);n.setAttribute("data-clone",String(c)),this.append(n)})}handelSlideChange(){const e=this.getSlides();e.forEach((t,s)=>{t.classList.toggle("--is-active",s===this.activeSlide)}),this.hasUpdated&&this.emit("sl-slide-change",{detail:{index:this.activeSlide,slide:e[this.activeSlide]}})}updateSlidesSnap(){const e=this.getSlides(),t=this.slidesPerMove;e.forEach((s,a)=>{(a+t)%t===0?s.style.removeProperty("scroll-snap-align"):s.style.setProperty("scroll-snap-align","none")})}handleAutoplayChange(){this.autoplayController.stop(),this.autoplay&&this.autoplayController.start(this.autoplayInterval)}handleMouseDraggingChange(){this.scrollController.mouseDragging=this.mouseDragging}previous(e="smooth"){this.goToSlide(this.activeSlide-this.slidesPerMove,e)}next(e="smooth"){this.goToSlide(this.activeSlide+this.slidesPerMove,e)}goToSlide(e,t="smooth"){const{slidesPerPage:s,loop:a,scrollContainer:o}=this,c=this.getSlides(),n=this.getSlides({excludeClones:!1});if(!c.length)return;const u=a?(e+c.length)%c.length:be(e,0,c.length-1);this.activeSlide=u;const h=be(e+(a?s:0),0,n.length-1),p=n[h],v=o.getBoundingClientRect(),l=p.getBoundingClientRect();o.scrollTo({left:l.left-v.left+o.scrollLeft,top:l.top-v.top+o.scrollTop,behavior:vt()?"auto":t})}render(){const{scrollController:e,slidesPerMove:t}=this,s=this.getPageCount(),a=this.getCurrentPage(),o=this.canScrollPrev(),c=this.canScrollNext(),n=this.localize.dir()==="ltr";return _`
      <div part="base" class="carousel">
        <div
          id="scroll-container"
          part="scroll-container"
          class="${L({carousel__slides:!0,"carousel__slides--horizontal":this.orientation==="horizontal","carousel__slides--vertical":this.orientation==="vertical"})}"
          style="--slides-per-page: ${this.slidesPerPage};"
          aria-busy="${e.scrolling?"true":"false"}"
          aria-atomic="true"
          tabindex="0"
          @keydown=${this.handleKeyDown}
          @scrollend=${this.handleScrollEnd}
        >
          <slot></slot>
        </div>

        ${this.navigation?_`
              <div part="navigation" class="carousel__navigation">
                <button
                  part="navigation-button navigation-button--previous"
                  class="${L({"carousel__navigation-button":!0,"carousel__navigation-button--previous":!0,"carousel__navigation-button--disabled":!o})}"
                  aria-label="${this.localize.term("previousSlide")}"
                  aria-controls="scroll-container"
                  aria-disabled="${o?"false":"true"}"
                  @click=${o?()=>this.previous():null}
                >
                  <slot name="previous-icon">
                    <sl-icon library="system" name="${n?"chevron-left":"chevron-right"}"></sl-icon>
                  </slot>
                </button>

                <button
                  part="navigation-button navigation-button--next"
                  class=${L({"carousel__navigation-button":!0,"carousel__navigation-button--next":!0,"carousel__navigation-button--disabled":!c})}
                  aria-label="${this.localize.term("nextSlide")}"
                  aria-controls="scroll-container"
                  aria-disabled="${c?"false":"true"}"
                  @click=${c?()=>this.next():null}
                >
                  <slot name="next-icon">
                    <sl-icon library="system" name="${n?"chevron-right":"chevron-left"}"></sl-icon>
                  </slot>
                </button>
              </div>
            `:""}
        ${this.pagination?_`
              <div part="pagination" role="tablist" class="carousel__pagination" aria-controls="scroll-container">
                ${$i(Si(s),u=>{const h=u===a;return _`
                    <button
                      part="pagination-item ${h?"pagination-item--active":""}"
                      class="${L({"carousel__pagination-item":!0,"carousel__pagination-item--active":h})}"
                      role="tab"
                      aria-selected="${h?"true":"false"}"
                      aria-label="${this.localize.term("goToSlide",u+1,s)}"
                      tabindex=${h?"0":"-1"}
                      @click=${()=>this.goToSlide(u*t)}
                      @keydown=${this.handleKeyDown}
                    ></button>
                  `})}
              </div>
            `:""}
      </div>
    `}};N.styles=Ci;N.dependencies={"sl-icon":ie};i([r({type:Boolean,reflect:!0})],N.prototype,"loop",2);i([r({type:Boolean,reflect:!0})],N.prototype,"navigation",2);i([r({type:Boolean,reflect:!0})],N.prototype,"pagination",2);i([r({type:Boolean,reflect:!0})],N.prototype,"autoplay",2);i([r({type:Number,attribute:"autoplay-interval"})],N.prototype,"autoplayInterval",2);i([r({type:Number,attribute:"slides-per-page"})],N.prototype,"slidesPerPage",2);i([r({type:Number,attribute:"slides-per-move"})],N.prototype,"slidesPerMove",2);i([r()],N.prototype,"orientation",2);i([r({type:Boolean,reflect:!0,attribute:"mouse-dragging"})],N.prototype,"mouseDragging",2);i([z(".carousel__slides")],N.prototype,"scrollContainer",2);i([z(".carousel__pagination")],N.prototype,"paginationContainer",2);i([F()],N.prototype,"activeSlide",2);i([w("loop",{waitUntilFirstUpdate:!0}),w("slidesPerPage",{waitUntilFirstUpdate:!0})],N.prototype,"initializeSlides",1);i([w("activeSlide")],N.prototype,"handelSlideChange",1);i([w("slidesPerMove")],N.prototype,"updateSlidesSnap",1);i([w("autoplay")],N.prototype,"handleAutoplayChange",1);i([w("mouseDragging")],N.prototype,"handleMouseDraggingChange",1);N.define("sl-carousel");var Ai=T`
  ${D}

  :host {
    display: inline-flex;
  }

  .badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: max(12px, 0.75em);
    font-weight: var(--sl-font-weight-semibold);
    letter-spacing: var(--sl-letter-spacing-normal);
    line-height: 1;
    border-radius: var(--sl-border-radius-small);
    border: solid 1px var(--sl-color-neutral-0);
    white-space: nowrap;
    padding: 0.35em 0.6em;
    user-select: none;
    -webkit-user-select: none;
    cursor: inherit;
  }

  /* Variant modifiers */
  .badge--primary {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--success {
    background-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--neutral {
    background-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--warning {
    background-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--danger {
    background-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  /* Pill modifier */
  .badge--pill {
    border-radius: var(--sl-border-radius-pill);
  }

  /* Pulse modifier */
  .badge--pulse {
    animation: pulse 1.5s infinite;
  }

  .badge--pulse.badge--primary {
    --pulse-color: var(--sl-color-primary-600);
  }

  .badge--pulse.badge--success {
    --pulse-color: var(--sl-color-success-600);
  }

  .badge--pulse.badge--neutral {
    --pulse-color: var(--sl-color-neutral-600);
  }

  .badge--pulse.badge--warning {
    --pulse-color: var(--sl-color-warning-600);
  }

  .badge--pulse.badge--danger {
    --pulse-color: var(--sl-color-danger-600);
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 var(--pulse-color);
    }
    70% {
      box-shadow: 0 0 0 0.5rem transparent;
    }
    100% {
      box-shadow: 0 0 0 0 transparent;
    }
  }
`,Ue=class extends I{constructor(){super(...arguments),this.variant="primary",this.pill=!1,this.pulse=!1}render(){return _`
      <span
        part="base"
        class=${L({badge:!0,"badge--primary":this.variant==="primary","badge--success":this.variant==="success","badge--neutral":this.variant==="neutral","badge--warning":this.variant==="warning","badge--danger":this.variant==="danger","badge--pill":this.pill,"badge--pulse":this.pulse})}
        role="status"
      >
        <slot></slot>
      </span>
    `}};Ue.styles=Ai;i([r({reflect:!0})],Ue.prototype,"variant",2);i([r({type:Boolean,reflect:!0})],Ue.prototype,"pill",2);i([r({type:Boolean,reflect:!0})],Ue.prototype,"pulse",2);Ue.define("sl-badge");var Di=T`
  ${D}

  :host {
    display: inline-flex;
  }

  .breadcrumb-item {
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    color: var(--sl-color-neutral-600);
    line-height: var(--sl-line-height-normal);
    white-space: nowrap;
  }

  .breadcrumb-item__label {
    display: inline-block;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: inherit;
    text-decoration: none;
    color: inherit;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    padding: 0;
    margin: 0;
    cursor: pointer;
    transition: var(--sl-transition-fast) --color;
  }

  :host(:not(:last-of-type)) .breadcrumb-item__label {
    color: var(--sl-color-primary-600);
  }

  :host(:not(:last-of-type)) .breadcrumb-item__label:hover {
    color: var(--sl-color-primary-500);
  }

  :host(:not(:last-of-type)) .breadcrumb-item__label:active {
    color: var(--sl-color-primary-600);
  }

  .breadcrumb-item__label:focus {
    outline: none;
  }

  .breadcrumb-item__label:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .breadcrumb-item__prefix,
  .breadcrumb-item__suffix {
    display: none;
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .breadcrumb-item--has-prefix .breadcrumb-item__prefix {
    display: inline-flex;
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .breadcrumb-item--has-suffix .breadcrumb-item__suffix {
    display: inline-flex;
    margin-inline-start: var(--sl-spacing-x-small);
  }

  :host(:last-of-type) .breadcrumb-item__separator {
    display: none;
  }

  .breadcrumb-item__separator {
    display: inline-flex;
    align-items: center;
    margin: 0 var(--sl-spacing-x-small);
    user-select: none;
    -webkit-user-select: none;
  }
`,Ve=class extends I{constructor(){super(...arguments),this.hasSlotController=new we(this,"prefix","suffix"),this.rel="noreferrer noopener"}render(){const e=!!this.href;return _`
      <div
        part="base"
        class=${L({"breadcrumb-item":!0,"breadcrumb-item--has-prefix":this.hasSlotController.test("prefix"),"breadcrumb-item--has-suffix":this.hasSlotController.test("suffix")})}
      >
        <span part="prefix" class="breadcrumb-item__prefix">
          <slot name="prefix"></slot>
        </span>

        ${e?_`
              <a
                part="label"
                class="breadcrumb-item__label breadcrumb-item__label--link"
                href="${this.href}"
                target="${R(this.target?this.target:void 0)}"
                rel=${R(this.target?this.rel:void 0)}
              >
                <slot></slot>
              </a>
            `:_`
              <button part="label" type="button" class="breadcrumb-item__label breadcrumb-item__label--button">
                <slot></slot>
              </button>
            `}

        <span part="suffix" class="breadcrumb-item__suffix">
          <slot name="suffix"></slot>
        </span>

        <span part="separator" class="breadcrumb-item__separator" aria-hidden="true">
          <slot name="separator"></slot>
        </span>
      </div>
    `}};Ve.styles=Di;i([r()],Ve.prototype,"href",2);i([r()],Ve.prototype,"target",2);i([r()],Ve.prototype,"rel",2);Ve.define("sl-breadcrumb-item");var Ei=T`
  ${D}

  .breadcrumb {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
`,Ae=class extends I{constructor(){super(...arguments),this.localize=new H(this),this.separatorDir=this.localize.dir(),this.label=""}getSeparator(){const t=this.separatorSlot.assignedElements({flatten:!0})[0].cloneNode(!0);return[t,...t.querySelectorAll("[id]")].forEach(s=>s.removeAttribute("id")),t.setAttribute("data-default",""),t.slot="separator",t}handleSlotChange(){const e=[...this.defaultSlot.assignedElements({flatten:!0})].filter(t=>t.tagName.toLowerCase()==="sl-breadcrumb-item");e.forEach((t,s)=>{const a=t.querySelector('[slot="separator"]');a===null?t.append(this.getSeparator()):a.hasAttribute("data-default")&&a.replaceWith(this.getSeparator()),s===e.length-1?t.setAttribute("aria-current","page"):t.removeAttribute("aria-current")})}render(){return this.separatorDir!==this.localize.dir()&&(this.separatorDir=this.localize.dir(),this.updateComplete.then(()=>this.handleSlotChange())),_`
      <nav part="base" class="breadcrumb" aria-label=${this.label}>
        <slot @slotchange=${this.handleSlotChange}></slot>
      </nav>

      <span hidden aria-hidden="true">
        <slot name="separator">
          <sl-icon name=${this.localize.dir()==="rtl"?"chevron-left":"chevron-right"} library="system"></sl-icon>
        </slot>
      </span>
    `}};Ae.styles=Ei;Ae.dependencies={"sl-icon":ie};i([z("slot")],Ae.prototype,"defaultSlot",2);i([z('slot[name="separator"]')],Ae.prototype,"separatorSlot",2);i([r()],Ae.prototype,"label",2);Ae.define("sl-breadcrumb");var Li=T`
  ${D}

  :host {
    display: inline-block;

    --size: 3rem;
  }

  .avatar {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: var(--size);
    height: var(--size);
    background-color: var(--sl-color-neutral-400);
    font-family: var(--sl-font-sans);
    font-size: calc(var(--size) * 0.5);
    font-weight: var(--sl-font-weight-normal);
    color: var(--sl-color-neutral-0);
    user-select: none;
    -webkit-user-select: none;
    vertical-align: middle;
  }

  .avatar--circle,
  .avatar--circle .avatar__image {
    border-radius: var(--sl-border-radius-circle);
  }

  .avatar--rounded,
  .avatar--rounded .avatar__image {
    border-radius: var(--sl-border-radius-medium);
  }

  .avatar--square {
    border-radius: 0;
  }

  .avatar__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .avatar__initials {
    line-height: 1;
    text-transform: uppercase;
  }

  .avatar__image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    overflow: hidden;
  }
`,pe=class extends I{constructor(){super(...arguments),this.hasError=!1,this.image="",this.label="",this.initials="",this.loading="eager",this.shape="circle"}handleImageChange(){this.hasError=!1}render(){const e=_`
      <img
        part="image"
        class="avatar__image"
        src="${this.image}"
        loading="${this.loading}"
        alt=""
        @error="${()=>this.hasError=!0}"
      />
    `;let t=_``;return this.initials?t=_`<div part="initials" class="avatar__initials">${this.initials}</div>`:t=_`
        <div part="icon" class="avatar__icon" aria-hidden="true">
          <slot name="icon">
            <sl-icon name="person-fill" library="system"></sl-icon>
          </slot>
        </div>
      `,_`
      <div
        part="base"
        class=${L({avatar:!0,"avatar--circle":this.shape==="circle","avatar--rounded":this.shape==="rounded","avatar--square":this.shape==="square"})}
        role="img"
        aria-label=${this.label}
      >
        ${this.image&&!this.hasError?e:t}
      </div>
    `}};pe.styles=Li;pe.dependencies={"sl-icon":ie};i([F()],pe.prototype,"hasError",2);i([r()],pe.prototype,"image",2);i([r()],pe.prototype,"label",2);i([r()],pe.prototype,"initials",2);i([r()],pe.prototype,"loading",2);i([r({reflect:!0})],pe.prototype,"shape",2);i([w("image")],pe.prototype,"handleImageChange",1);pe.define("sl-avatar");var Fi=T`
  ${D}

  :host {
    display: contents;
  }
`;const Oi=[{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.2,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.4,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -30px, 0) scaleY(1.1)"},{offset:.43,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -30px, 0) scaleY(1.1)"},{offset:.53,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.7,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -15px, 0) scaleY(1.05)"},{offset:.8,"transition-timing-function":"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0) scaleY(0.95)"},{offset:.9,transform:"translate3d(0, -4px, 0) scaleY(1.02)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"}],Pi=[{offset:0,opacity:"1"},{offset:.25,opacity:"0"},{offset:.5,opacity:"1"},{offset:.75,opacity:"0"},{offset:1,opacity:"1"}],Ri=[{offset:0,transform:"translateX(0)"},{offset:.065,transform:"translateX(-6px) rotateY(-9deg)"},{offset:.185,transform:"translateX(5px) rotateY(7deg)"},{offset:.315,transform:"translateX(-3px) rotateY(-5deg)"},{offset:.435,transform:"translateX(2px) rotateY(3deg)"},{offset:.5,transform:"translateX(0)"}],Mi=[{offset:0,transform:"scale(1)"},{offset:.14,transform:"scale(1.3)"},{offset:.28,transform:"scale(1)"},{offset:.42,transform:"scale(1.3)"},{offset:.7,transform:"scale(1)"}],Bi=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.111,transform:"translate3d(0, 0, 0)"},{offset:.222,transform:"skewX(-12.5deg) skewY(-12.5deg)"},{offset:.33299999999999996,transform:"skewX(6.25deg) skewY(6.25deg)"},{offset:.444,transform:"skewX(-3.125deg) skewY(-3.125deg)"},{offset:.555,transform:"skewX(1.5625deg) skewY(1.5625deg)"},{offset:.6659999999999999,transform:"skewX(-0.78125deg) skewY(-0.78125deg)"},{offset:.777,transform:"skewX(0.390625deg) skewY(0.390625deg)"},{offset:.888,transform:"skewX(-0.1953125deg) skewY(-0.1953125deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],Ui=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.5,transform:"scale3d(1.05, 1.05, 1.05)"},{offset:1,transform:"scale3d(1, 1, 1)"}],Vi=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.3,transform:"scale3d(1.25, 0.75, 1)"},{offset:.4,transform:"scale3d(0.75, 1.25, 1)"},{offset:.5,transform:"scale3d(1.15, 0.85, 1)"},{offset:.65,transform:"scale3d(0.95, 1.05, 1)"},{offset:.75,transform:"scale3d(1.05, 0.95, 1)"},{offset:1,transform:"scale3d(1, 1, 1)"}],Ni=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(-10px, 0, 0)"},{offset:.2,transform:"translate3d(10px, 0, 0)"},{offset:.3,transform:"translate3d(-10px, 0, 0)"},{offset:.4,transform:"translate3d(10px, 0, 0)"},{offset:.5,transform:"translate3d(-10px, 0, 0)"},{offset:.6,transform:"translate3d(10px, 0, 0)"},{offset:.7,transform:"translate3d(-10px, 0, 0)"},{offset:.8,transform:"translate3d(10px, 0, 0)"},{offset:.9,transform:"translate3d(-10px, 0, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}],Hi=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(-10px, 0, 0)"},{offset:.2,transform:"translate3d(10px, 0, 0)"},{offset:.3,transform:"translate3d(-10px, 0, 0)"},{offset:.4,transform:"translate3d(10px, 0, 0)"},{offset:.5,transform:"translate3d(-10px, 0, 0)"},{offset:.6,transform:"translate3d(10px, 0, 0)"},{offset:.7,transform:"translate3d(-10px, 0, 0)"},{offset:.8,transform:"translate3d(10px, 0, 0)"},{offset:.9,transform:"translate3d(-10px, 0, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}],qi=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(0, -10px, 0)"},{offset:.2,transform:"translate3d(0, 10px, 0)"},{offset:.3,transform:"translate3d(0, -10px, 0)"},{offset:.4,transform:"translate3d(0, 10px, 0)"},{offset:.5,transform:"translate3d(0, -10px, 0)"},{offset:.6,transform:"translate3d(0, 10px, 0)"},{offset:.7,transform:"translate3d(0, -10px, 0)"},{offset:.8,transform:"translate3d(0, 10px, 0)"},{offset:.9,transform:"translate3d(0, -10px, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}],Xi=[{offset:.2,transform:"rotate3d(0, 0, 1, 15deg)"},{offset:.4,transform:"rotate3d(0, 0, 1, -10deg)"},{offset:.6,transform:"rotate3d(0, 0, 1, 5deg)"},{offset:.8,transform:"rotate3d(0, 0, 1, -5deg)"},{offset:1,transform:"rotate3d(0, 0, 1, 0deg)"}],Ki=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.1,transform:"scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)"},{offset:.2,transform:"scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)"},{offset:.3,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.4,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.5,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.6,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.7,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.8,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.9,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:1,transform:"scale3d(1, 1, 1)"}],Yi=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.15,transform:"translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg)"},{offset:.3,transform:"translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg)"},{offset:.45,transform:"translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg)"},{offset:.6,transform:"translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg)"},{offset:.75,transform:"translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],ji=[{offset:0,transform:"translateY(-1200px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],Gi=[{offset:0,transform:"translateX(-2000px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],Wi=[{offset:0,transform:"translateX(2000px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],Qi=[{offset:0,transform:"translateY(1200px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],Zi=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateY(700px) scale(0.7)",opacity:"0.7"}],Ji=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateX(-2000px) scale(0.7)",opacity:"0.7"}],es=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateX(2000px) scale(0.7)",opacity:"0.7"}],ts=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateY(-700px) scale(0.7)",opacity:"0.7"}],is=[{offset:0,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.2,transform:"scale3d(1.1, 1.1, 1.1)"},{offset:.2,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.4,transform:"scale3d(0.9, 0.9, 0.9)"},{offset:.4,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"scale3d(1.03, 1.03, 1.03)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.8,transform:"scale3d(0.97, 0.97, 0.97)"},{offset:.8,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,opacity:"1",transform:"scale3d(1, 1, 1)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],ss=[{offset:0,opacity:"0",transform:"translate3d(0, -3000px, 0) scaleY(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(0, 25px, 0) scaleY(0.9)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(0, -10px, 0) scaleY(0.95)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(0, 5px, 0) scaleY(0.985)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],as=[{offset:0,opacity:"0",transform:"translate3d(-3000px, 0, 0) scaleX(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(25px, 0, 0) scaleX(1)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(-10px, 0, 0) scaleX(0.98)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(5px, 0, 0) scaleX(0.995)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],rs=[{offset:0,opacity:"0",transform:"translate3d(3000px, 0, 0) scaleX(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(-25px, 0, 0) scaleX(1)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(10px, 0, 0) scaleX(0.98)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(-5px, 0, 0) scaleX(0.995)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],os=[{offset:0,opacity:"0",transform:"translate3d(0, 3000px, 0) scaleY(5)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(0, 10px, 0) scaleY(0.95)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(0, -5px, 0) scaleY(0.985)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],ns=[{offset:.2,transform:"scale3d(0.9, 0.9, 0.9)"},{offset:.5,opacity:"1",transform:"scale3d(1.1, 1.1, 1.1)"},{offset:.55,opacity:"1",transform:"scale3d(1.1, 1.1, 1.1)"},{offset:1,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"}],ls=[{offset:.2,transform:"translate3d(0, 10px, 0) scaleY(0.985)"},{offset:.4,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:.45,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:1,opacity:"0",transform:"translate3d(0, 2000px, 0) scaleY(3)"}],cs=[{offset:.2,opacity:"1",transform:"translate3d(20px, 0, 0) scaleX(0.9)"},{offset:1,opacity:"0",transform:"translate3d(-2000px, 0, 0) scaleX(2)"}],ds=[{offset:.2,opacity:"1",transform:"translate3d(-20px, 0, 0) scaleX(0.9)"},{offset:1,opacity:"0",transform:"translate3d(2000px, 0, 0) scaleX(2)"}],hs=[{offset:.2,transform:"translate3d(0, -10px, 0) scaleY(0.985)"},{offset:.4,opacity:"1",transform:"translate3d(0, 20px, 0) scaleY(0.9)"},{offset:.45,opacity:"1",transform:"translate3d(0, 20px, 0) scaleY(0.9)"},{offset:1,opacity:"0",transform:"translate3d(0, -2000px, 0) scaleY(3)"}],us=[{offset:0,opacity:"0"},{offset:1,opacity:"1"}],ps=[{offset:0,opacity:"0",transform:"translate3d(-100%, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],fs=[{offset:0,opacity:"0",transform:"translate3d(100%, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],ms=[{offset:0,opacity:"0",transform:"translate3d(0, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],gs=[{offset:0,opacity:"0",transform:"translate3d(0, -2000px, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],bs=[{offset:0,opacity:"0",transform:"translate3d(-100%, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],vs=[{offset:0,opacity:"0",transform:"translate3d(-2000px, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],ys=[{offset:0,opacity:"0",transform:"translate3d(100%, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],xs=[{offset:0,opacity:"0",transform:"translate3d(2000px, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],_s=[{offset:0,opacity:"0",transform:"translate3d(-100%, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],ws=[{offset:0,opacity:"0",transform:"translate3d(100%, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],ks=[{offset:0,opacity:"0",transform:"translate3d(0, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],Cs=[{offset:0,opacity:"0",transform:"translate3d(0, 2000px, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],zs=[{offset:0,opacity:"1"},{offset:1,opacity:"0"}],$s=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(-100%, 100%, 0)"}],Ss=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(100%, 100%, 0)"}],Is=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, 100%, 0)"}],Ts=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, 2000px, 0)"}],As=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(-100%, 0, 0)"}],Ds=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(-2000px, 0, 0)"}],Es=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(100%, 0, 0)"}],Ls=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(2000px, 0, 0)"}],Fs=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(-100%, -100%, 0)"}],Os=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(100%, -100%, 0)"}],Ps=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, -100%, 0)"}],Rs=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, -2000px, 0)"}],Ms=[{offset:0,transform:"perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg)",easing:"ease-out"},{offset:.4,transform:`perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg)`,easing:"ease-out"},{offset:.5,transform:`perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg)`,easing:"ease-in"},{offset:.8,transform:`perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg)`,easing:"ease-in"},{offset:1,transform:"perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg)",easing:"ease-in"}],Bs=[{offset:0,transform:"perspective(400px) rotate3d(1, 0, 0, 90deg)",easing:"ease-in",opacity:"0"},{offset:.4,transform:"perspective(400px) rotate3d(1, 0, 0, -20deg)",easing:"ease-in"},{offset:.6,transform:"perspective(400px) rotate3d(1, 0, 0, 10deg)",opacity:"1"},{offset:.8,transform:"perspective(400px) rotate3d(1, 0, 0, -5deg)"},{offset:1,transform:"perspective(400px)"}],Us=[{offset:0,transform:"perspective(400px) rotate3d(0, 1, 0, 90deg)",easing:"ease-in",opacity:"0"},{offset:.4,transform:"perspective(400px) rotate3d(0, 1, 0, -20deg)",easing:"ease-in"},{offset:.6,transform:"perspective(400px) rotate3d(0, 1, 0, 10deg)",opacity:"1"},{offset:.8,transform:"perspective(400px) rotate3d(0, 1, 0, -5deg)"},{offset:1,transform:"perspective(400px)"}],Vs=[{offset:0,transform:"perspective(400px)"},{offset:.3,transform:"perspective(400px) rotate3d(1, 0, 0, -20deg)",opacity:"1"},{offset:1,transform:"perspective(400px) rotate3d(1, 0, 0, 90deg)",opacity:"0"}],Ns=[{offset:0,transform:"perspective(400px)"},{offset:.3,transform:"perspective(400px) rotate3d(0, 1, 0, -15deg)",opacity:"1"},{offset:1,transform:"perspective(400px) rotate3d(0, 1, 0, 90deg)",opacity:"0"}],Hs=[{offset:0,transform:"translate3d(-100%, 0, 0) skewX(30deg)",opacity:"0"},{offset:.6,transform:"skewX(-20deg)",opacity:"1"},{offset:.8,transform:"skewX(5deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],qs=[{offset:0,transform:"translate3d(100%, 0, 0) skewX(-30deg)",opacity:"0"},{offset:.6,transform:"skewX(20deg)",opacity:"1"},{offset:.8,transform:"skewX(-5deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],Xs=[{offset:0,opacity:"1"},{offset:1,transform:"translate3d(-100%, 0, 0) skewX(-30deg)",opacity:"0"}],Ks=[{offset:0,opacity:"1"},{offset:1,transform:"translate3d(100%, 0, 0) skewX(30deg)",opacity:"0"}],Ys=[{offset:0,transform:"rotate3d(0, 0, 1, -200deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],js=[{offset:0,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],Gs=[{offset:0,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],Ws=[{offset:0,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],Qs=[{offset:0,transform:"rotate3d(0, 0, 1, -90deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],Zs=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 200deg)",opacity:"0"}],Js=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"}],ea=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"}],ta=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"}],ia=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 90deg)",opacity:"0"}],sa=[{offset:0,transform:"translate3d(0, -100%, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],aa=[{offset:0,transform:"translate3d(-100%, 0, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],ra=[{offset:0,transform:"translate3d(100%, 0, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],oa=[{offset:0,transform:"translate3d(0, 100%, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],na=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(0, 100%, 0)"}],la=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(-100%, 0, 0)"}],ca=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(100%, 0, 0)"}],da=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(0, -100%, 0)"}],ha=[{offset:0,easing:"ease-in-out"},{offset:.2,transform:"rotate3d(0, 0, 1, 80deg)",easing:"ease-in-out"},{offset:.4,transform:"rotate3d(0, 0, 1, 60deg)",easing:"ease-in-out",opacity:"1"},{offset:.6,transform:"rotate3d(0, 0, 1, 80deg)",easing:"ease-in-out"},{offset:.8,transform:"rotate3d(0, 0, 1, 60deg)",easing:"ease-in-out",opacity:"1"},{offset:1,transform:"translate3d(0, 700px, 0)",opacity:"0"}],ua=[{offset:0,opacity:"0",transform:"scale(0.1) rotate(30deg)","transform-origin":"center bottom"},{offset:.5,transform:"rotate(-10deg)"},{offset:.7,transform:"rotate(3deg)"},{offset:1,opacity:"1",transform:"scale(1)"}],pa=[{offset:0,opacity:"0",transform:"translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],fa=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg)"}],ma=[{offset:0,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:.5,opacity:"1"}],ga=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],ba=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],va=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],ya=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],xa=[{offset:0,opacity:"1"},{offset:.5,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:1,opacity:"0"}],_a=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:1,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],wa=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0)"},{offset:1,opacity:"0",transform:"scale(0.1) translate3d(-2000px, 0, 0)"}],ka=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0)"},{offset:1,opacity:"0",transform:"scale(0.1) translate3d(2000px, 0, 0)"}],Ca=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:1,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],$t={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",easeInSine:"cubic-bezier(0.47, 0, 0.745, 0.715)",easeOutSine:"cubic-bezier(0.39, 0.575, 0.565, 1)",easeInOutSine:"cubic-bezier(0.445, 0.05, 0.55, 0.95)",easeInQuad:"cubic-bezier(0.55, 0.085, 0.68, 0.53)",easeOutQuad:"cubic-bezier(0.25, 0.46, 0.45, 0.94)",easeInOutQuad:"cubic-bezier(0.455, 0.03, 0.515, 0.955)",easeInCubic:"cubic-bezier(0.55, 0.055, 0.675, 0.19)",easeOutCubic:"cubic-bezier(0.215, 0.61, 0.355, 1)",easeInOutCubic:"cubic-bezier(0.645, 0.045, 0.355, 1)",easeInQuart:"cubic-bezier(0.895, 0.03, 0.685, 0.22)",easeOutQuart:"cubic-bezier(0.165, 0.84, 0.44, 1)",easeInOutQuart:"cubic-bezier(0.77, 0, 0.175, 1)",easeInQuint:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",easeOutQuint:"cubic-bezier(0.23, 1, 0.32, 1)",easeInOutQuint:"cubic-bezier(0.86, 0, 0.07, 1)",easeInExpo:"cubic-bezier(0.95, 0.05, 0.795, 0.035)",easeOutExpo:"cubic-bezier(0.19, 1, 0.22, 1)",easeInOutExpo:"cubic-bezier(1, 0, 0, 1)",easeInCirc:"cubic-bezier(0.6, 0.04, 0.98, 0.335)",easeOutCirc:"cubic-bezier(0.075, 0.82, 0.165, 1)",easeInOutCirc:"cubic-bezier(0.785, 0.135, 0.15, 0.86)",easeInBack:"cubic-bezier(0.6, -0.28, 0.735, 0.045)",easeOutBack:"cubic-bezier(0.175, 0.885, 0.32, 1.275)",easeInOutBack:"cubic-bezier(0.68, -0.55, 0.265, 1.55)"},za=Object.freeze(Object.defineProperty({__proto__:null,backInDown:ji,backInLeft:Gi,backInRight:Wi,backInUp:Qi,backOutDown:Zi,backOutLeft:Ji,backOutRight:es,backOutUp:ts,bounce:Oi,bounceIn:is,bounceInDown:ss,bounceInLeft:as,bounceInRight:rs,bounceInUp:os,bounceOut:ns,bounceOutDown:ls,bounceOutLeft:cs,bounceOutRight:ds,bounceOutUp:hs,easings:$t,fadeIn:us,fadeInBottomLeft:ps,fadeInBottomRight:fs,fadeInDown:ms,fadeInDownBig:gs,fadeInLeft:bs,fadeInLeftBig:vs,fadeInRight:ys,fadeInRightBig:xs,fadeInTopLeft:_s,fadeInTopRight:ws,fadeInUp:ks,fadeInUpBig:Cs,fadeOut:zs,fadeOutBottomLeft:$s,fadeOutBottomRight:Ss,fadeOutDown:Is,fadeOutDownBig:Ts,fadeOutLeft:As,fadeOutLeftBig:Ds,fadeOutRight:Es,fadeOutRightBig:Ls,fadeOutTopLeft:Fs,fadeOutTopRight:Os,fadeOutUp:Ps,fadeOutUpBig:Rs,flash:Pi,flip:Ms,flipInX:Bs,flipInY:Us,flipOutX:Vs,flipOutY:Ns,headShake:Ri,heartBeat:Mi,hinge:ha,jackInTheBox:ua,jello:Bi,lightSpeedInLeft:Hs,lightSpeedInRight:qs,lightSpeedOutLeft:Xs,lightSpeedOutRight:Ks,pulse:Ui,rollIn:pa,rollOut:fa,rotateIn:Ys,rotateInDownLeft:js,rotateInDownRight:Gs,rotateInUpLeft:Ws,rotateInUpRight:Qs,rotateOut:Zs,rotateOutDownLeft:Js,rotateOutDownRight:ea,rotateOutUpLeft:ta,rotateOutUpRight:ia,rubberBand:Vi,shake:Ni,shakeX:Hi,shakeY:qi,slideInDown:sa,slideInLeft:aa,slideInRight:ra,slideInUp:oa,slideOutDown:na,slideOutLeft:la,slideOutRight:ca,slideOutUp:da,swing:Xi,tada:Ki,wobble:Yi,zoomIn:ma,zoomInDown:ga,zoomInLeft:ba,zoomInRight:va,zoomInUp:ya,zoomOut:xa,zoomOutDown:_a,zoomOutLeft:wa,zoomOutRight:ka,zoomOutUp:Ca},Symbol.toStringTag,{value:"Module"}));var K=class extends I{constructor(){super(...arguments),this.hasStarted=!1,this.name="none",this.play=!1,this.delay=0,this.direction="normal",this.duration=1e3,this.easing="linear",this.endDelay=0,this.fill="auto",this.iterations=1/0,this.iterationStart=0,this.playbackRate=1,this.handleAnimationFinish=()=>{this.play=!1,this.hasStarted=!1,this.emit("sl-finish")},this.handleAnimationCancel=()=>{this.play=!1,this.hasStarted=!1,this.emit("sl-cancel")}}get currentTime(){var e,t;return(t=(e=this.animation)==null?void 0:e.currentTime)!=null?t:0}set currentTime(e){this.animation&&(this.animation.currentTime=e)}connectedCallback(){super.connectedCallback(),this.createAnimation()}disconnectedCallback(){super.disconnectedCallback(),this.destroyAnimation()}handleSlotChange(){this.destroyAnimation(),this.createAnimation()}async createAnimation(){var e,t;const s=(e=$t[this.easing])!=null?e:this.easing,a=(t=this.keyframes)!=null?t:za[this.name],c=(await this.defaultSlot).assignedElements()[0];return!c||!a?!1:(this.destroyAnimation(),this.animation=c.animate(a,{delay:this.delay,direction:this.direction,duration:this.duration,easing:s,endDelay:this.endDelay,fill:this.fill,iterationStart:this.iterationStart,iterations:this.iterations}),this.animation.playbackRate=this.playbackRate,this.animation.addEventListener("cancel",this.handleAnimationCancel),this.animation.addEventListener("finish",this.handleAnimationFinish),this.play?(this.hasStarted=!0,this.emit("sl-start")):this.animation.pause(),!0)}destroyAnimation(){this.animation&&(this.animation.cancel(),this.animation.removeEventListener("cancel",this.handleAnimationCancel),this.animation.removeEventListener("finish",this.handleAnimationFinish),this.hasStarted=!1)}handleAnimationChange(){this.hasUpdated&&this.createAnimation()}handlePlayChange(){return this.animation?(this.play&&!this.hasStarted&&(this.hasStarted=!0,this.emit("sl-start")),this.play?this.animation.play():this.animation.pause(),!0):!1}handlePlaybackRateChange(){this.animation&&(this.animation.playbackRate=this.playbackRate)}cancel(){var e;(e=this.animation)==null||e.cancel()}finish(){var e;(e=this.animation)==null||e.finish()}render(){return _` <slot @slotchange=${this.handleSlotChange}></slot> `}};K.styles=Fi;i([Vt("slot")],K.prototype,"defaultSlot",2);i([r()],K.prototype,"name",2);i([r({type:Boolean,reflect:!0})],K.prototype,"play",2);i([r({type:Number})],K.prototype,"delay",2);i([r()],K.prototype,"direction",2);i([r({type:Number})],K.prototype,"duration",2);i([r()],K.prototype,"easing",2);i([r({attribute:"end-delay",type:Number})],K.prototype,"endDelay",2);i([r()],K.prototype,"fill",2);i([r({type:Number})],K.prototype,"iterations",2);i([r({attribute:"iteration-start",type:Number})],K.prototype,"iterationStart",2);i([r({attribute:!1})],K.prototype,"keyframes",2);i([r({attribute:"playback-rate",type:Number})],K.prototype,"playbackRate",2);i([w(["name","delay","direction","duration","easing","endDelay","fill","iterations","iterationsStart","keyframes"])],K.prototype,"handleAnimationChange",1);i([w("play")],K.prototype,"handlePlayChange",1);i([w("playbackRate")],K.prototype,"handlePlaybackRateChange",1);K.define("sl-animation");var $a=T`
  ${D}

  :host {
    --control-box-size: 3rem;
    --icon-size: calc(var(--control-box-size) * 0.625);

    display: inline-flex;
    position: relative;
    cursor: pointer;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
  }

  img[aria-hidden='true'] {
    display: none;
  }

  .animated-image__control-box {
    display: flex;
    position: absolute;
    align-items: center;
    justify-content: center;
    top: calc(50% - var(--control-box-size) / 2);
    right: calc(50% - var(--control-box-size) / 2);
    width: var(--control-box-size);
    height: var(--control-box-size);
    font-size: var(--icon-size);
    background: none;
    border: solid 2px currentColor;
    background-color: rgb(0 0 0 /50%);
    border-radius: var(--sl-border-radius-circle);
    color: white;
    pointer-events: none;
    transition: var(--sl-transition-fast) opacity;
  }

  :host([play]:hover) .animated-image__control-box {
    opacity: 1;
  }

  :host([play]:not(:hover)) .animated-image__control-box {
    opacity: 0;
  }

  :host([play]) slot[name='play-icon'],
  :host(:not([play])) slot[name='pause-icon'] {
    display: none;
  }
`,le=class extends I{constructor(){super(...arguments),this.isLoaded=!1}handleClick(){this.play=!this.play}handleLoad(){const e=document.createElement("canvas"),{width:t,height:s}=this.animatedImage;e.width=t,e.height=s,e.getContext("2d").drawImage(this.animatedImage,0,0,t,s),this.frozenFrame=e.toDataURL("image/gif"),this.isLoaded||(this.emit("sl-load"),this.isLoaded=!0)}handleError(){this.emit("sl-error")}handlePlayChange(){this.play&&(this.animatedImage.src="",this.animatedImage.src=this.src)}handleSrcChange(){this.isLoaded=!1}render(){return _`
      <div class="animated-image">
        <img
          class="animated-image__animated"
          src=${this.src}
          alt=${this.alt}
          crossorigin="anonymous"
          aria-hidden=${this.play?"false":"true"}
          @click=${this.handleClick}
          @load=${this.handleLoad}
          @error=${this.handleError}
        />

        ${this.isLoaded?_`
              <img
                class="animated-image__frozen"
                src=${this.frozenFrame}
                alt=${this.alt}
                aria-hidden=${this.play?"true":"false"}
                @click=${this.handleClick}
              />

              <div part="control-box" class="animated-image__control-box">
                <slot name="play-icon"><sl-icon name="play-fill" library="system"></sl-icon></slot>
                <slot name="pause-icon"><sl-icon name="pause-fill" library="system"></sl-icon></slot>
              </div>
            `:""}
      </div>
    `}};le.styles=$a;le.dependencies={"sl-icon":ie};i([z(".animated-image__animated")],le.prototype,"animatedImage",2);i([F()],le.prototype,"frozenFrame",2);i([F()],le.prototype,"isLoaded",2);i([r()],le.prototype,"src",2);i([r()],le.prototype,"alt",2);i([r({type:Boolean,reflect:!0})],le.prototype,"play",2);i([w("play",{waitUntilFirstUpdate:!0})],le.prototype,"handlePlayChange",1);i([w("src")],le.prototype,"handleSrcChange",1);le.define("sl-animated-image");const Sa=[{name:"bolditalic",pattern:/(?:\*){3}([^* \n](.+?[^* \n])?)(?:\*){3}$/g,action:({inlineEditor:e,prefixText:t,inlineRange:s,pattern:a,undoManager:o})=>{const c=a.exec(t);if(!c)return ge;const n=c[0],u=s.index-n.length;return e.insertText({index:u+n.length,length:0}," "),o.stopCapturing(),e.formatText({index:u,length:n.length},{bold:!0,italic:!0}),e.deleteText({index:u+n.length,length:1}),e.deleteText({index:u+n.length-3,length:3}),e.deleteText({index:u,length:3}),e.setInlineRange({index:u+n.length-6,length:0}),ze}},{name:"bold",pattern:/(?:\*){2}([^* \n](.+?[^* \n])?)(?:\*){2}$/g,action:({inlineEditor:e,prefixText:t,inlineRange:s,pattern:a,undoManager:o})=>{const c=a.exec(t);if(!c)return ge;const n=c[0],u=s.index-n.length;return e.insertText({index:u+n.length,length:0}," "),o.stopCapturing(),e.formatText({index:u,length:n.length},{bold:!0}),e.deleteText({index:u+n.length,length:1}),e.deleteText({index:u+n.length-2,length:2}),e.deleteText({index:u,length:2}),e.setInlineRange({index:u+n.length-4,length:0}),ze}},{name:"italic",pattern:/(?:\*){1}([^* \n](.+?[^* \n])?)(?:\*){1}$/g,action:({inlineEditor:e,prefixText:t,inlineRange:s,pattern:a,undoManager:o})=>{const c=a.exec(t);if(!c)return ge;const n=c[0],u=s.index-n.length;return e.insertText({index:u+n.length,length:0}," "),o.stopCapturing(),e.formatText({index:u,length:n.length},{italic:!0}),e.deleteText({index:u+n.length,length:1}),e.deleteText({index:u+n.length-1,length:1}),e.deleteText({index:u,length:1}),e.setInlineRange({index:u+n.length-2,length:0}),ze}},{name:"strikethrough",pattern:/(?:~~)([^~ \n](.+?[^~ \n])?)(?:~~)$/g,action:({inlineEditor:e,prefixText:t,inlineRange:s,pattern:a,undoManager:o})=>{const c=a.exec(t);if(!c)return ge;const n=c[0],u=s.index-n.length;return e.insertText({index:u+n.length,length:0}," "),o.stopCapturing(),e.formatText({index:u,length:n.length},{strike:!0}),e.deleteText({index:u+n.length,length:1}),e.deleteText({index:u+n.length-2,length:2}),e.deleteText({index:u,length:2}),e.setInlineRange({index:u+n.length-4,length:0}),ze}},{name:"underthrough",pattern:/(?:~)([^~ \n](.+?[^~ \n])?)(?:~)$/g,action:({inlineEditor:e,prefixText:t,inlineRange:s,pattern:a,undoManager:o})=>{const c=a.exec(t);if(!c)return ge;const n=c[0],u=s.index-n.length;return e.insertText({index:u+n.length,length:0}," "),o.stopCapturing(),e.formatText({index:u,length:n.length},{underline:!0}),e.deleteText({index:u+n.length,length:1}),e.deleteText({index:s.index-1,length:1}),e.deleteText({index:u,length:1}),e.setInlineRange({index:u+n.length-2,length:0}),ze}},{name:"code",pattern:/(?:`)(`{2,}?|[^`]+)(?:`)$/g,action:({inlineEditor:e,prefixText:t,inlineRange:s,pattern:a,undoManager:o})=>{const c=a.exec(t);if(!c)return ge;const n=c[0],u=s.index-n.length;return t.match(/^([* \n]+)$/g)?ge:(e.insertText({index:u+n.length,length:0}," "),o.stopCapturing(),e.formatText({index:u,length:n.length},{code:!0}),e.deleteText({index:u+n.length,length:1}),e.deleteText({index:u+n.length-1,length:1}),e.deleteText({index:u,length:1}),e.setInlineRange({index:u+n.length-2,length:0}),ze)}}];var Ia=Object.defineProperty,Ta=Object.getOwnPropertyDescriptor,ye=(e,t,s,a)=>{for(var o=a>1?void 0:a?Ta(t,s):t,c=e.length-1,n;c>=0;c--)(n=e[c])&&(o=(a?n(t,s,o):n(o))||o);return a&&o&&Ia(t,s,o),o};function Aa(e){let t="";e.underline&&(t+="underline"),e.strike&&(t+=" line-through");let s={};return e.code&&(s={"font-family":'"SFMono-Regular", Menlo, Consolas, "PT Mono", "Liberation Mono", Courier, monospace',"line-height":"normal",background:"rgba(135,131,120,0.15)",color:"#EB5757","border-radius":"3px","font-size":"85%",padding:"0.2em 0.4em"}),me({"word-wrap":"break-word","white-space":"break-spaces","font-weight":e.bold?"bold":"normal","font-style":e.italic?"italic":"normal","text-decoration":t.length>0?t:"none",...s})}const Da=(e,t)=>{if(e.attributes?.embed)return _`<span
      style=${me({padding:"0 0.4em",border:t?"1px solid #eb763a":"",background:"rgba(135,131,120,0.15)"})}
      >@flrande<v-text .str=${Ht}></v-text
    ></span>`;const s=e.attributes?Aa(e.attributes):me({"white-space":"break-spaces","word-wrap":"break-word"});return _`<span style=${s}
    ><v-text .str=${e.insert}></v-text
  ></span>`};function $e(e,t){const s=e.getInlineRange();if(!s)return;const a=e.rootElement;if(!a)return;const o=e.getDeltasByInlineRange(s);let c={};for(const[u]of o){const h=u.attributes;h&&(c={...h})}const n=Object.fromEntries(Object.entries(t).map(([u,h])=>typeof h=="boolean"&&h===c[u]?[u,null]:[u,h]));e.formatText(s,n,{mode:"merge"}),a.blur(),e.setInlineRange(s)}let Oe=class extends it{firstUpdated(){this.contentEditable="true",this.style.outline="none",this.inlineEditor.mount(this._container,this);const e=qt(this.inlineEditor,{inputRule:{key:" ",handler:t=>{const{inlineEditor:s,prefixText:a,inlineRange:o}=t;for(const c of Sa)if(a.match(c.pattern))return c.action({inlineEditor:s,prefixText:a,inlineRange:o,pattern:c.pattern,undoManager:this.undoManager});return ge}}});this.addEventListener("keydown",e),this.inlineEditor.slots.textChange.on(()=>{const t=this.querySelector(".y-text");if(t){const s=this.inlineEditor.yText.toDelta(),a=document.createElement("span");a.innerHTML=JSON.stringify(s),t.replaceChildren(a)}}),this.inlineEditor.slots.inlineRangeUpdate.on(()=>{const t=this.querySelector(".v-range");if(t){const s=this.inlineEditor.getInlineRange();if(s){const a=document.createElement("span");a.innerHTML=JSON.stringify(s),t.replaceChildren(a)}}})}render(){return _`<style>
        test-rich-text {
          display: grid;
          grid-template-rows: minmax(0, 3fr) minmax(0, 1fr) minmax(0, 1fr);
          grid-template-columns: minmax(0, 1fr);
          width: 100%;
        }

        .rich-text-container {
          outline: none;
          word-break: break-word;
          white-space: break-spaces;
        }

        code {
          font-family: 'SFMono-Regular', Menlo, Consolas, 'PT Mono',
            'Liberation Mono', Courier, monospace;
          line-height: normal;
          background: rgba(135, 131, 120, 0.15);
          color: #eb5757;
          border-radius: 3px;
          font-size: 85%;
          padding: 0.2em 0.4em;
        }

        .v-range,
        .y-text {
          font-family: 'SFMono-Regular', Menlo, Consolas, 'PT Mono',
            'Liberation Mono', Courier, monospace;
          line-height: normal;
          background: rgba(135, 131, 120, 0.15);
        }

        .v-range,
        .y-text > span {
          display: block;
          word-wrap: break-word;
        }
      </style>
      <div class="rich-text-container"></div>
      <div contenteditable="false" class="v-range"></div>
      <div contenteditable="false" class="y-text"></div>`}};ye([z(".rich-text-container")],Oe.prototype,"_container",2);ye([r({attribute:!1})],Oe.prototype,"inlineEditor",2);ye([r({attribute:!1})],Oe.prototype,"undoManager",2);Oe=ye([tt("test-rich-text")],Oe);const ut="inline-editor",at=new pt,rt=new pt;at.on("update",e=>{ft(rt,e)});rt.on("update",e=>{ft(at,e)});let Pe=class extends it{firstUpdated(){const e=this.querySelector(".bold"),t=this.querySelector(".italic"),s=this.querySelector(".underline"),a=this.querySelector(".strike"),o=this.querySelector(".code"),c=this.querySelector(".embed"),n=this.querySelector(".reset"),u=this.querySelector(".undo"),h=this.querySelector(".redo");if(!e||!t||!s||!a||!o||!c||!n||!u||!h)throw new Error("Cannot find button");const p=new Qe(this.inlineEditor.yText,{trackedOrigins:new Set([this.inlineEditor.yText.doc?.clientID])});addEventListener("keydown",v=>{v instanceof KeyboardEvent&&(v.ctrlKey||v.metaKey)&&v.key==="z"&&(v.preventDefault(),v.shiftKey?p.redo():p.undo())}),u.addEventListener("click",()=>{p.undo()}),h.addEventListener("click",()=>{p.redo()}),e.addEventListener("click",()=>{p.stopCapturing(),$e(this.inlineEditor,{bold:!0})}),t.addEventListener("click",()=>{p.stopCapturing(),$e(this.inlineEditor,{italic:!0})}),s.addEventListener("click",()=>{p.stopCapturing(),$e(this.inlineEditor,{underline:!0})}),a.addEventListener("click",()=>{p.stopCapturing(),$e(this.inlineEditor,{strike:!0})}),o.addEventListener("click",()=>{p.stopCapturing(),$e(this.inlineEditor,{code:!0})}),c.addEventListener("click",()=>{p.stopCapturing(),$e(this.inlineEditor,{embed:!0})}),n.addEventListener("click",()=>{p.stopCapturing();const v=this.inlineEditor.getInlineRange();v&&this.inlineEditor.resetText(v)})}render(){return _`
      <div class="custom-toolbar">
        <sl-button class="bold">bold</sl-button>
        <sl-button class="italic">italic</sl-button>
        <sl-button class="underline">underline</sl-button>
        <sl-button class="strike">strike</sl-button>
        <sl-button class="code">code</sl-button>
        <sl-button class="embed">embed</sl-button>
        <sl-button class="reset">reset</sl-button>
        <sl-button class="undo">undo</sl-button>
        <sl-button class="redo">redo</sl-button>
      </div>
    `}};Pe.styles=T`
    .custom-toolbar {
      display: grid;
      grid-template-columns: repeat(4, minmax(0, 1fr));
      grid-template-rows: repeat(2, minmax(0, 1fr));
    }
  `;ye([r({attribute:!1})],Pe.prototype,"inlineEditor",2);ye([r({attribute:!1})],Pe.prototype,"undoManager",2);Pe=ye([tt("custom-toolbar")],Pe);let Je=class extends it{constructor(){super(...arguments),this._editorA=null,this._editorB=null,this._undoManagerA=null,this._undoManagerB=null}firstUpdated(){const e=at.getText(ut);this._editorA=new lt(e,{isEmbed:s=>!!s.attributes?.embed}),this._editorA.setAttributeSchema(Nt.extend({embed:It.literal(!0).optional().catch(void 0)})),this._editorA.setAttributeRenderer(Da),this._undoManagerA=new Qe(e,{trackedOrigins:new Set([e.doc?.clientID])});const t=rt.getText(ut);this._editorB=new lt(t),this._undoManagerB=new Qe(t,{trackedOrigins:new Set([t.doc?.clientID])}),this.requestUpdate()}render(){return this._editorA?_`
      <div class="container">
        <div class="editors">
          <div class="doc-a">
            <custom-toolbar
              .inlineEditor=${this._editorA}
              .undoManager=${this._undoManagerA}
            ></custom-toolbar>
            <test-rich-text
              .inlineEditor=${this._editorA}
              .undoManager=${this._undoManagerA}
            ></test-rich-text>
          </div>
          <div class="doc-b">
            <custom-toolbar
              .inlineEditor=${this._editorB}
              .undoManager=${this._undoManagerB}
            ></custom-toolbar>
            <test-rich-text
              .inlineEditor=${this._editorB}
              .undoManager=${this._undoManagerB}
            ></test-rich-text>
          </div>
        </div>
      </div>
    `:Tt}};Je.styles=T`
    .container {
      display: grid;
      height: 100vh;
      width: 100vw;
      justify-content: center;
      align-items: center;
    }

    .editors {
      display: grid;
      grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
      padding: 20px;
      background-color: #202124;
      border-radius: 10px;
      color: #fff;
      grid-gap: 20px;
    }

    .editors > div {
      height: 600px;
      max-width: 400px;
      display: grid;
      grid-template-rows: 150px minmax(0, 1fr);
      grid-template-columns: minmax(0, 1fr);
      overflow-y: scroll;
    }
  `;Je=ye([tt("test-page")],Je);
//# sourceMappingURL=inline-WSlCd79A.js.map
