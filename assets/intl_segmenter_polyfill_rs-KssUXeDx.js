const W="/assets/intl_segmenter_polyfill_rs_bg-0NCp0or_.wasm",B=async(e={},n)=>{let t;if(n.startsWith("data:")){const _=n.replace(/^data:.*?base64,/,"");let r;if(typeof Buffer=="function"&&typeof Buffer.from=="function")r=Buffer.from(_,"base64");else if(typeof atob=="function"){const f=atob(_);r=new Uint8Array(f.length);for(let i=0;i<f.length;i++)r[i]=f.charCodeAt(i)}else throw new Error("Cannot decode base64-encoded data URL");t=await WebAssembly.instantiate(r,e)}else{const _=await fetch(n),r=_.headers.get("Content-Type")||"";if("instantiateStreaming"in WebAssembly&&r.startsWith("application/wasm"))t=await WebAssembly.instantiateStreaming(_,e);else{const f=await _.arrayBuffer();t=await WebAssembly.instantiate(f,e)}}return t.instance.exports};let o;function $(e){o=e}const a=new Array(128).fill(void 0);a.push(void 0,null,!0,!1);function c(e){return a[e]}let m=a.length;function L(e){e<132||(a[e]=m,m=e)}function d(e){const n=c(e);return L(e),n}let w=0,p=null;function A(){return(p===null||p.byteLength===0)&&(p=new Uint8Array(o.memory.buffer)),p}const C=typeof TextEncoder>"u"?(0,module.require)("util").TextEncoder:TextEncoder;let O=new C("utf-8");const F=typeof O.encodeInto=="function"?function(e,n){return O.encodeInto(e,n)}:function(e,n){const t=O.encode(e);return n.set(t),{read:e.length,written:t.length}};function k(e,n,t){if(t===void 0){const u=O.encode(e),l=n(u.length,1)>>>0;return A().subarray(l,l+u.length).set(u),w=u.length,l}let _=e.length,r=n(_,1)>>>0;const f=A();let i=0;for(;i<_;i++){const u=e.charCodeAt(i);if(u>127)break;f[r+i]=u}if(i!==_){i!==0&&(e=e.slice(i)),r=t(r,_,_=i+e.length*3,1)>>>0;const u=A().subarray(r+i,r+_),l=F(e,u);i+=l.written}return w=i,r}function x(e){return e==null}let h=null;function g(){return(h===null||h.byteLength===0)&&(h=new Int32Array(o.memory.buffer)),h}const I=typeof TextDecoder>"u"?(0,module.require)("util").TextDecoder:TextDecoder;let U=new I("utf-8",{ignoreBOM:!0,fatal:!0});U.decode();function y(e,n){return e=e>>>0,U.decode(A().subarray(e,e+n))}function s(e){m===a.length&&a.push(a.length+1);const n=m;return m=a[n],a[n]=e,n}let j=null;function N(){return(j===null||j.byteLength===0)&&(j=new Float64Array(o.memory.buffer)),j}function S(e){const n=typeof e;if(n=="number"||n=="boolean"||e==null)return`${e}`;if(n=="string")return`"${e}"`;if(n=="symbol"){const r=e.description;return r==null?"Symbol":`Symbol(${r})`}if(n=="function"){const r=e.name;return typeof r=="string"&&r.length>0?`Function(${r})`:"Function"}if(Array.isArray(e)){const r=e.length;let f="[";r>0&&(f+=S(e[0]));for(let i=1;i<r;i++)f+=", "+S(e[i]);return f+="]",f}const t=/\[object ([^\]]+)\]/.exec(toString.call(e));let _;if(t.length>1)_=t[1];else return toString.call(e);if(_=="Object")try{return"Object("+JSON.stringify(e)+")"}catch{return"Object"}return e instanceof Error?`${e.name}: ${e.message}
${e.stack}`:_}function We(){o.start()}class E{static __wrap(n){n=n>>>0;const t=Object.create(E.prototype);return t.__wbg_ptr=n,t}__destroy_into_raw(){const n=this.__wbg_ptr;return this.__wbg_ptr=0,n}free(){const n=this.__destroy_into_raw();o.__wbg_segmenter_free(n)}static(){try{const _=o.__wbindgen_add_to_stack_pointer(-16);o.segmenter_(_);var n=g()[_/4+0],t=g()[_/4+1];if(t)throw d(n)}finally{o.__wbindgen_add_to_stack_pointer(16)}}constructor(n,t){const _=o.segmenter_new(s(n),s(t));return E.__wrap(_)}segment(n){const t=k(n,o.__wbindgen_malloc,o.__wbindgen_realloc),_=w,r=o.segmenter_segment(this.__wbg_ptr,t,_);return T.__wrap(r)}}class T{static __wrap(n){n=n>>>0;const t=Object.create(T.prototype);return t.__wbg_ptr=n,t}__destroy_into_raw(){const n=this.__wbg_ptr;return this.__wbg_ptr=0,n}free(){const n=this.__destroy_into_raw();o.__wbg_segments_free(n)}next(){try{const r=o.__wbindgen_add_to_stack_pointer(-16);o.segments_next(r,this.__wbg_ptr);var n=g()[r/4+0],t=g()[r/4+1],_=g()[r/4+2];if(_)throw d(t);return d(n)}finally{o.__wbindgen_add_to_stack_pointer(16)}}}function D(e){d(e)}function q(e){return c(e)===void 0}function P(e,n){return c(e)in c(n)}function R(e,n){const t=c(n),_=typeof t=="string"?t:void 0;var r=x(_)?0:k(_,o.__wbindgen_malloc,o.__wbindgen_realloc),f=w;g()[e/4+1]=f,g()[e/4+0]=r}function z(e){const n=c(e);return typeof n=="object"&&n!==null}function H(e,n){const t=y(e,n);return s(t)}function J(e){const n=T.__wrap(e);return s(n)}function V(e){me(c(e))}function v(){const e=new Error;return s(e)}function G(e,n){const t=c(n).stack,_=k(t,o.__wbindgen_malloc,o.__wbindgen_realloc),r=w;g()[e/4+1]=r,g()[e/4+0]=_}function K(e,n){let t,_;try{t=e,_=n,console.error(y(e,n))}finally{o.__wbindgen_free(t,_,1)}}function Q(e){const n=c(e);return s(n)}function X(e,n){return c(e)==c(n)}function Y(e){const n=c(e);return typeof n=="boolean"?n?1:0:2}function Z(e,n){const t=c(n),_=typeof t=="number"?t:void 0;N()[e/8+1]=x(_)?0:_,g()[e/4+0]=!x(_)}function ee(e,n){const t=new Error(y(e,n));return s(t)}function ne(e){return s(e)}function te(e){const n=BigInt.asUintN(64,e);return s(n)}function _e(e,n){const t=c(e)[c(n)];return s(t)}function re(e,n,t){c(e)[d(n)]=d(t)}function oe(){const e=new Object;return s(e)}function ce(e){let n;try{n=c(e)instanceof ArrayBuffer}catch{n=!1}return n}function ie(e){const n=Object.getPrototypeOf(c(e));return s(n)}function se(e,n){const t=new TypeError(y(e,n));return s(t)}function fe(e){const n=c(e).buffer;return s(n)}function be(e){const n=new Uint8Array(c(e));return s(n)}function ge(e,n,t){c(e).set(c(n),t>>>0)}function ue(e){return c(e).length}function ae(e){let n;try{n=c(e)instanceof Uint8Array}catch{n=!1}return n}function de(e,n){const t=S(c(n)),_=k(t,o.__wbindgen_malloc,o.__wbindgen_realloc),r=w;g()[e/4+1]=r,g()[e/4+0]=_}function we(e,n){throw new Error(y(e,n))}function le(){const e=o.memory;return s(e)}function me(e){e[Symbol.iterator]=function(){return this}}URL=globalThis.URL;const b=await B({"./intl_segmenter_polyfill_rs_bg.js":{__wbindgen_object_drop_ref:D,__wbindgen_is_undefined:q,__wbindgen_in:P,__wbindgen_string_get:R,__wbindgen_is_object:z,__wbindgen_string_new:H,__wbg_segments_new:J,__wbg_makeiter_508dd15b82dc98f9:V,__wbg_new_abda76e883ba8a5f:v,__wbg_stack_658279fe44541cf6:G,__wbg_error_f851667af71bcfc6:K,__wbindgen_object_clone_ref:Q,__wbindgen_jsval_loose_eq:X,__wbindgen_boolean_get:Y,__wbindgen_number_get:Z,__wbindgen_error_new:ee,__wbindgen_number_new:ne,__wbindgen_bigint_from_u64:te,__wbg_getwithrefkey_15c62c2b8546208d:_e,__wbg_set_20cbc34131e76824:re,__wbg_new_b51585de1b234aff:oe,__wbg_instanceof_ArrayBuffer_39ac22089b74fddb:ce,__wbg_getPrototypeOf_0953c64f6ba47b38:ie,__wbg_new_0d7da8e129c00c84:se,__wbg_buffer_085ec1f694018c4f:fe,__wbg_new_8125e318e6245eed:be,__wbg_set_5cf90238115182c3:ge,__wbg_length_72e2208bbc0efc61:ue,__wbg_instanceof_Uint8Array_d8d9cb2b8e8ac1d4:ae,__wbindgen_debug_string:de,__wbindgen_throw:we,__wbindgen_memory:le}},W),ye=b.memory,pe=b.__wbg_segmenter_free,he=b.segmenter_,je=b.segmenter_new,Ae=b.segmenter_segment,Oe=b.__wbg_segments_free,ke=b.segments_next,Te=b.start,xe=b.__wbindgen_malloc,Se=b.__wbindgen_realloc,Ee=b.__wbindgen_add_to_stack_pointer,Ue=b.__wbindgen_free,M=b.__wbindgen_start,Me=Object.freeze(Object.defineProperty({__proto__:null,__wbg_segmenter_free:pe,__wbg_segments_free:Oe,__wbindgen_add_to_stack_pointer:Ee,__wbindgen_free:Ue,__wbindgen_malloc:xe,__wbindgen_realloc:Se,__wbindgen_start:M,memory:ye,segmenter_:he,segmenter_new:je,segmenter_segment:Ae,segments_next:ke,start:Te},Symbol.toStringTag,{value:"Module"}));$(Me);M();export{E as Segmenter,T as Segments,fe as __wbg_buffer_085ec1f694018c4f,K as __wbg_error_f851667af71bcfc6,ie as __wbg_getPrototypeOf_0953c64f6ba47b38,_e as __wbg_getwithrefkey_15c62c2b8546208d,ce as __wbg_instanceof_ArrayBuffer_39ac22089b74fddb,ae as __wbg_instanceof_Uint8Array_d8d9cb2b8e8ac1d4,ue as __wbg_length_72e2208bbc0efc61,V as __wbg_makeiter_508dd15b82dc98f9,se as __wbg_new_0d7da8e129c00c84,be as __wbg_new_8125e318e6245eed,v as __wbg_new_abda76e883ba8a5f,oe as __wbg_new_b51585de1b234aff,J as __wbg_segments_new,re as __wbg_set_20cbc34131e76824,ge as __wbg_set_5cf90238115182c3,$ as __wbg_set_wasm,G as __wbg_stack_658279fe44541cf6,te as __wbindgen_bigint_from_u64,Y as __wbindgen_boolean_get,de as __wbindgen_debug_string,ee as __wbindgen_error_new,P as __wbindgen_in,z as __wbindgen_is_object,q as __wbindgen_is_undefined,X as __wbindgen_jsval_loose_eq,le as __wbindgen_memory,Z as __wbindgen_number_get,ne as __wbindgen_number_new,Q as __wbindgen_object_clone_ref,D as __wbindgen_object_drop_ref,R as __wbindgen_string_get,H as __wbindgen_string_new,we as __wbindgen_throw,We as start};
//# sourceMappingURL=intl_segmenter_polyfill_rs-KssUXeDx.js.map