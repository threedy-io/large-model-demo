var te=Object.defineProperty;var ne=(e,t,n)=>t in e?te(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var A=(e,t,n)=>(ne(e,typeof t!="symbol"?t+"":t,n),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function v(){}function V(e){return e()}function J(){return Object.create(null)}function N(e){e.forEach(V)}function H(e){return typeof e=="function"}function re(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function oe(e){return Object.keys(e).length===0}function h(e,t){e.appendChild(t)}function S(e,t,n){e.insertBefore(t,n||null)}function b(e){e.parentNode&&e.parentNode.removeChild(e)}function _(e){return document.createElement(e)}function G(e){return document.createTextNode(e)}function x(){return G(" ")}function I(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function p(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function ie(e,t,n){const r=t.toLowerCase();r in e?e[r]=typeof e[r]=="boolean"&&n===""?!0:n:t in e?e[t]=typeof e[t]=="boolean"&&n===""?!0:n:p(e,t,n)}function se(e){return Array.from(e.childNodes)}function le(e,t){t=""+t,e.data!==t&&(e.data=t)}let O;function E(e){O=e}function K(){if(!O)throw new Error("Function called outside component initialization");return O}function ce(e){K().$$.on_mount.push(e)}function ue(e){K().$$.on_destroy.push(e)}const y=[],C=[];let w=[];const M=[],fe=Promise.resolve();let T=!1;function ae(){T||(T=!0,fe.then(W))}function U(e){w.push(e)}const j=new Set;let g=0;function W(){if(g!==0)return;const e=O;do{try{for(;g<y.length;){const t=y[g];g++,E(t),de(t.$$)}}catch(t){throw y.length=0,g=0,t}for(E(null),y.length=0,g=0;C.length;)C.pop()();for(let t=0;t<w.length;t+=1){const n=w[t];j.has(n)||(j.add(n),n())}w.length=0}while(y.length);for(;M.length;)M.pop()();T=!1,j.clear(),E(e)}function de(e){if(e.fragment!==null){e.update(),N(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(U)}}function pe(e){const t=[],n=[];w.forEach(r=>e.indexOf(r)===-1?t.push(r):n.push(r)),n.forEach(r=>r()),w=t}const he=new Set;function _e(e,t){e&&e.i&&(he.delete(e),e.i(t))}function me(e,t,n){const{fragment:r,after_update:o}=e.$$;r&&r.m(t,n),U(()=>{const i=e.$$.on_mount.map(V).filter(H);e.$$.on_destroy?e.$$.on_destroy.push(...i):N(i),e.$$.on_mount=[]}),o.forEach(U)}function ge(e,t){const n=e.$$;n.fragment!==null&&(pe(n.after_update),N(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function ye(e,t){e.$$.dirty[0]===-1&&(y.push(e),ae(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function be(e,t,n,r,o,i,s=null,u=[-1]){const l=O;E(e);const c=e.$$={fragment:null,ctx:[],props:i,update:v,not_equal:o,bound:J(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(l?l.$$.context:[])),callbacks:J(),dirty:u,skip_bound:!1,root:t.target||l.$$.root};s&&s(c.root);let d=!1;if(c.ctx=n?n(e,t.props||{},(a,L,...m)=>{const k=m.length?m[0]:L;return c.ctx&&o(c.ctx[a],c.ctx[a]=k)&&(!c.skip_bound&&c.bound[a]&&c.bound[a](k),d&&ye(e,a)),L}):[],c.update(),d=!0,N(c.before_update),c.fragment=r?r(c.ctx):!1,t.target){if(t.hydrate){const a=se(t.target);c.fragment&&c.fragment.l(a),a.forEach(b)}else c.fragment&&c.fragment.c();t.intro&&_e(e.$$.fragment),me(e,t.target,t.anchor),W()}E(l)}class we{constructor(){A(this,"$$");A(this,"$$set")}$destroy(){ge(this,1),this.$destroy=v}$on(t,n){if(!H(n))return v;const r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(n),()=>{const o=r.indexOf(n);o!==-1&&r.splice(o,1)}}$set(t){this.$$set&&!oe(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const ve="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(ve);let $;async function $e(e,t,n){$=e,await $.remove(),$.getSnapshots().forEach(r=>{$.removeSnapshot(r)});try{$.importSession(n,"xscn")}catch(r){console.error("Error fetching JSON data:",r)}}function Se(e){const t=JSON.stringify(e),n=new Blob([t],{type:"application/json"}),r=document.createElement("a");r.href=URL.createObjectURL(n),r.download="output.json",document.body.appendChild(r),r.click(),document.body.removeChild(r)}function q(e){let t,n,r=e[3]?"◂":"▸",o,i,s,u,l=e[3]&&B(e);return{c(){t=_("div"),n=_("button"),o=G(r),i=x(),l&&l.c(),p(n,"class","text-2xl w-5 hover:border-none hover:bg-slate-300 svelte-19yzcia"),p(t,"class","panel svelte-19yzcia")},m(c,d){S(c,t,d),h(t,n),h(n,o),h(t,i),l&&l.m(t,null),s||(u=I(n,"click",e[6]),s=!0)},p(c,d){d&8&&r!==(r=c[3]?"◂":"▸")&&le(o,r),c[3]?l?l.p(c,d):(l=B(c),l.c(),l.m(t,null)):l&&(l.d(1),l=null)},d(c){c&&b(t),l&&l.d(),s=!1,u()}}}function B(e){let t,n,r,o,i,s;return{c(){t=_("div"),n=_("input"),r=x(),o=_("button"),o.textContent="Save",p(n,"type","file"),p(n,"accept",".json"),p(o,"class","p-2 svelte-19yzcia"),p(t,"class","uploader flex gap-5 items-center justify-center w-full ml-3")},m(u,l){S(u,t,l),h(t,n),h(t,r),h(t,o),i||(s=[I(n,"change",e[5]),I(o,"click",e[8])],i=!0)},p:v,d(u){u&&b(t),i=!1,N(s)}}}function Ee(e){let t,n,r,o,i,s=e[1]&&q(e);return{c(){t=_("div"),t.innerHTML='<h1 class="modal-header svelte-19yzcia">Processing...</h1>',n=x(),r=_("main"),s&&s.c(),o=x(),i=_("webvis-full"),p(t,"id","loading-screen"),p(t,"class","svelte-19yzcia"),ie(i,"class","svelte-19yzcia")},m(u,l){S(u,t,l),e[7](t),S(u,n,l),S(u,r,l),s&&s.m(r,null),h(r,o),h(r,i),e[9](i)},p(u,[l]){u[1]?s?s.p(u,l):(s=q(u),s.c(),s.m(r,o)):s&&(s.d(1),s=null)},i:v,o:v,d(u){u&&(b(t),b(n),b(r)),e[7](null),s&&s.d(),e[9](null)}}}function Oe(e,t,n){let r,o,i,s,u=null,l;ce(async()=>{await c(),l=o.registerListener([webvis.EventType.SELECTION_CHANGED],async f=>{o&&f.selectedNodes.length!=0&&f.selectedNodes})}),ue(()=>{o&&l&&o.unregisterListener(l)});async function c(){const f=await document.querySelector("webvis-full");o=await f.requestContext(),n(1,i=await f.requestViewer()),webvisUI.setSetting(webvisUI.UISetting.ALLOW_ANNOTATIONS_FROM_UNTRUSTED_SOURCE,!1),await o.remove()}async function d(f){try{await $e(o,i,f)}catch(z){console.error("An error occurred:",z)}}function a(){o&&(Se(o.exportSession()),console.log("Export successful!"))}async function L(f){var R;let P=(R=f.target.files)==null?void 0:R[0];if(P){let D=new FileReader;D.onload=async Z=>{var F;try{u=JSON.parse((F=Z.target)==null?void 0:F.result),await d(u)}catch(ee){console.error("Error parsing JSON:",ee)}},D.readAsText(P)}}let m=!0;function k(){n(3,m=!m)}function Q(f){C[f?"unshift":"push"](()=>{s=f,n(2,s)})}const X=()=>a();function Y(f){C[f?"unshift":"push"](()=>{r=f,n(0,r)})}return[r,i,s,m,a,L,k,Q,X,Y]}class Ne extends we{constructor(t){super(),be(this,t,Oe,Ee,re,{})}}new Ne({target:document.getElementById("app")});
