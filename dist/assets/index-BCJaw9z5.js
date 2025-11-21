(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();const fw="modulepreload",dw=function(t){return"/"+t},qf={},wu=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),c=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));s=Promise.allSettled(n.map(l=>{if(l=dw(l),l in qf)return;qf[l]=!0;const h=l.endsWith(".css"),f=h?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${f}`))return;const p=document.createElement("link");if(p.rel=h?"stylesheet":fw,h||(p.as="script"),p.crossOrigin="",p.href=l,c&&p.setAttribute("nonce",c),document.head.appendChild(p),h)return new Promise((g,I)=>{p.addEventListener("load",g),p.addEventListener("error",()=>I(new Error(`Unable to preload CSS for ${l}`)))})}))}function i(o){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=o,window.dispatchEvent(c),!c.defaultPrevented)throw o}return s.then(o=>{for(const c of o||[])c.status==="rejected"&&i(c.reason);return e().catch(i)})},pw=()=>{};var zf={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bm=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},mw=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],c=t[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},$m={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,c=o?t[s+1]:0,l=s+2<t.length,h=l?t[s+2]:0,f=i>>2,p=(i&3)<<4|c>>4;let g=(c&15)<<2|h>>6,I=h&63;l||(I=64,o||(g=64)),r.push(n[f],n[p],n[g],n[I])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Bm(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):mw(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],c=s<t.length?n[t.charAt(s)]:0;++s;const h=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||c==null||h==null||p==null)throw new gw;const g=i<<2|c>>4;if(r.push(g),h!==64){const I=c<<4&240|h>>2;if(r.push(I),p!==64){const C=h<<6&192|p;r.push(C)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class gw extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const _w=function(t){const e=Bm(t);return $m.encodeByteArray(e,!0)},Ta=function(t){return _w(t).replace(/\./g,"")},jm=function(t){try{return $m.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yw(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ew=()=>yw().__FIREBASE_DEFAULTS__,Tw=()=>{if(typeof process>"u"||typeof zf>"u")return;const t=zf.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},ww=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&jm(t[1]);return e&&JSON.parse(e)},ec=()=>{try{return pw()||Ew()||Tw()||ww()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Hm=t=>{var e,n;return(n=(e=ec())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},Iu=t=>{const e=Hm(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},qm=()=>{var t;return(t=ec())==null?void 0:t.config},zm=t=>{var e;return(e=ec())==null?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iw{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bn(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function tc(t){return(await fetch(t,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wm(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...t};return[Ta(JSON.stringify(n)),Ta(JSON.stringify(o)),""].join(".")}const Fi={};function vw(){const t={prod:[],emulator:[]};for(const e of Object.keys(Fi))Fi[e]?t.emulator.push(e):t.prod.push(e);return t}function Aw(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let Wf=!1;function nc(t,e){if(typeof window>"u"||typeof document>"u"||!bn(window.location.host)||Fi[t]===e||Fi[t]||Wf)return;Fi[t]=e;function n(g){return`__firebase__banner__${g}`}const r="__firebase__banner",i=vw().prod.length>0;function o(){const g=document.getElementById(r);g&&g.remove()}function c(g){g.style.display="flex",g.style.background="#7faaf0",g.style.position="fixed",g.style.bottom="5px",g.style.left="5px",g.style.padding=".5em",g.style.borderRadius="5px",g.style.alignItems="center"}function l(g,I){g.setAttribute("width","24"),g.setAttribute("id",I),g.setAttribute("height","24"),g.setAttribute("viewBox","0 0 24 24"),g.setAttribute("fill","none"),g.style.marginLeft="-6px"}function h(){const g=document.createElement("span");return g.style.cursor="pointer",g.style.marginLeft="16px",g.style.fontSize="24px",g.innerHTML=" &times;",g.onclick=()=>{Wf=!0,o()},g}function f(g,I){g.setAttribute("id",I),g.innerText="Learn more",g.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",g.setAttribute("target","__blank"),g.style.paddingLeft="5px",g.style.textDecoration="underline"}function p(){const g=Aw(r),I=n("text"),C=document.getElementById(I)||document.createElement("span"),R=n("learnmore"),N=document.getElementById(R)||document.createElement("a"),V=n("preprendIcon"),q=document.getElementById(V)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(g.created){const W=g.element;c(W),f(N,R);const j=h();l(q,V),W.append(q,C,N,j),document.body.appendChild(W)}i?(C.innerText="Preview backend disconnected.",q.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(q.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,C.innerText="Preview backend running in this workspace."),C.setAttribute("id",I)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _t(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function bw(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(_t())}function Sw(){var e;const t=(e=ec())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Rw(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Cw(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Pw(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Nw(){const t=_t();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Ow(){return!Sw()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function kw(){try{return typeof indexedDB=="object"}catch{return!1}}function Dw(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)==null?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vw="FirebaseError";class nn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Vw,Object.setPrototypeOf(this,nn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Eo.prototype.create)}}class Eo{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?xw(i,r):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new nn(s,c,r)}}function xw(t,e){return t.replace(Lw,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Lw=/\{\$([^}]+)}/g;function Mw(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function es(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Gf(i)&&Gf(o)){if(!es(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Gf(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function To(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Oi(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function ki(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Uw(t,e){const n=new Fw(t,e);return n.subscribe.bind(n)}class Fw{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Bw(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=tl),s.error===void 0&&(s.error=tl),s.complete===void 0&&(s.complete=tl);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Bw(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function tl(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ve(t){return t&&t._delegate?t._delegate:t}class Fn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $w{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Iw;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Hw(e))try{this.getOrInitializeService({instanceIdentifier:qr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=qr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=qr){return this.instances.has(e)}getOptions(e=qr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&o.resolve(s)}return s}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:jw(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=qr){return this.component?this.component.multipleInstances?e:qr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function jw(t){return t===qr?void 0:t}function Hw(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qw{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new $w(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var he;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(he||(he={}));const zw={debug:he.DEBUG,verbose:he.VERBOSE,info:he.INFO,warn:he.WARN,error:he.ERROR,silent:he.SILENT},Ww=he.INFO,Gw={[he.DEBUG]:"log",[he.VERBOSE]:"log",[he.INFO]:"info",[he.WARN]:"warn",[he.ERROR]:"error"},Kw=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=Gw[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class vu{constructor(e){this.name=e,this._logLevel=Ww,this._logHandler=Kw,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in he))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?zw[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,he.DEBUG,...e),this._logHandler(this,he.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,he.VERBOSE,...e),this._logHandler(this,he.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,he.INFO,...e),this._logHandler(this,he.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,he.WARN,...e),this._logHandler(this,he.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,he.ERROR,...e),this._logHandler(this,he.ERROR,...e)}}const Qw=(t,e)=>e.some(n=>t instanceof n);let Kf,Qf;function Yw(){return Kf||(Kf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Jw(){return Qf||(Qf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Gm=new WeakMap,Pl=new WeakMap,Km=new WeakMap,nl=new WeakMap,Au=new WeakMap;function Xw(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(dr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Gm.set(n,t)}).catch(()=>{}),Au.set(e,t),e}function Zw(t){if(Pl.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Pl.set(t,e)}let Nl={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Pl.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Km.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return dr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function eI(t){Nl=t(Nl)}function tI(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(rl(this),e,...n);return Km.set(r,e.sort?e.sort():[e]),dr(r)}:Jw().includes(t)?function(...e){return t.apply(rl(this),e),dr(Gm.get(this))}:function(...e){return dr(t.apply(rl(this),e))}}function nI(t){return typeof t=="function"?tI(t):(t instanceof IDBTransaction&&Zw(t),Qw(t,Yw())?new Proxy(t,Nl):t)}function dr(t){if(t instanceof IDBRequest)return Xw(t);if(nl.has(t))return nl.get(t);const e=nI(t);return e!==t&&(nl.set(t,e),Au.set(e,t)),e}const rl=t=>Au.get(t);function rI(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),c=dr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(dr(o.result),l.oldVersion,l.newVersion,dr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),c}const sI=["get","getKey","getAll","getAllKeys","count"],iI=["put","add","delete","clear"],sl=new Map;function Yf(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(sl.get(e))return sl.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=iI.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||sI.includes(n)))return;const i=async function(o,...c){const l=this.transaction(o,s?"readwrite":"readonly");let h=l.store;return r&&(h=h.index(c.shift())),(await Promise.all([h[n](...c),s&&l.done]))[0]};return sl.set(e,i),i}eI(t=>({...t,get:(e,n,r)=>Yf(e,n)||t.get(e,n,r),has:(e,n)=>!!Yf(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(aI(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function aI(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ol="@firebase/app",Jf="0.14.6";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bn=new vu("@firebase/app"),cI="@firebase/app-compat",lI="@firebase/analytics-compat",uI="@firebase/analytics",hI="@firebase/app-check-compat",fI="@firebase/app-check",dI="@firebase/auth",pI="@firebase/auth-compat",mI="@firebase/database",gI="@firebase/data-connect",_I="@firebase/database-compat",yI="@firebase/functions",EI="@firebase/functions-compat",TI="@firebase/installations",wI="@firebase/installations-compat",II="@firebase/messaging",vI="@firebase/messaging-compat",AI="@firebase/performance",bI="@firebase/performance-compat",SI="@firebase/remote-config",RI="@firebase/remote-config-compat",CI="@firebase/storage",PI="@firebase/storage-compat",NI="@firebase/firestore",OI="@firebase/ai",kI="@firebase/firestore-compat",DI="firebase",VI="12.6.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kl="[DEFAULT]",xI={[Ol]:"fire-core",[cI]:"fire-core-compat",[uI]:"fire-analytics",[lI]:"fire-analytics-compat",[fI]:"fire-app-check",[hI]:"fire-app-check-compat",[dI]:"fire-auth",[pI]:"fire-auth-compat",[mI]:"fire-rtdb",[gI]:"fire-data-connect",[_I]:"fire-rtdb-compat",[yI]:"fire-fn",[EI]:"fire-fn-compat",[TI]:"fire-iid",[wI]:"fire-iid-compat",[II]:"fire-fcm",[vI]:"fire-fcm-compat",[AI]:"fire-perf",[bI]:"fire-perf-compat",[SI]:"fire-rc",[RI]:"fire-rc-compat",[CI]:"fire-gcs",[PI]:"fire-gcs-compat",[NI]:"fire-fst",[kI]:"fire-fst-compat",[OI]:"fire-vertex","fire-js":"fire-js",[DI]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wa=new Map,LI=new Map,Dl=new Map;function Xf(t,e){try{t.container.addComponent(e)}catch(n){Bn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Tr(t){const e=t.name;if(Dl.has(e))return Bn.debug(`There were multiple attempts to register component ${e}.`),!1;Dl.set(e,t);for(const n of wa.values())Xf(n,t);for(const n of LI.values())Xf(n,t);return!0}function wo(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function tt(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MI={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},pr=new Eo("app","Firebase",MI);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UI{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Fn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw pr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const us=VI;function Qm(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:kl,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw pr.create("bad-app-name",{appName:String(s)});if(n||(n=qm()),!n)throw pr.create("no-options");const i=wa.get(s);if(i){if(es(n,i.options)&&es(r,i.config))return i;throw pr.create("duplicate-app",{appName:s})}const o=new qw(s);for(const l of Dl.values())o.addComponent(l);const c=new UI(n,r,o);return wa.set(s,c),c}function rc(t=kl){const e=wa.get(t);if(!e&&t===kl&&qm())return Qm();if(!e)throw pr.create("no-app",{appName:t});return e}function Bt(t,e,n){let r=xI[t]??t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const o=[`Unable to register library "${r}" with version "${e}":`];s&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Bn.warn(o.join(" "));return}Tr(new Fn(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FI="firebase-heartbeat-database",BI=1,eo="firebase-heartbeat-store";let il=null;function Ym(){return il||(il=rI(FI,BI,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(eo)}catch(n){console.warn(n)}}}}).catch(t=>{throw pr.create("idb-open",{originalErrorMessage:t.message})})),il}async function $I(t){try{const n=(await Ym()).transaction(eo),r=await n.objectStore(eo).get(Jm(t));return await n.done,r}catch(e){if(e instanceof nn)Bn.warn(e.message);else{const n=pr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Bn.warn(n.message)}}}async function Zf(t,e){try{const r=(await Ym()).transaction(eo,"readwrite");await r.objectStore(eo).put(e,Jm(t)),await r.done}catch(n){if(n instanceof nn)Bn.warn(n.message);else{const r=pr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Bn.warn(r.message)}}}function Jm(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jI=1024,HI=30;class qI{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new WI(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=ed();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>HI){const o=GI(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Bn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=ed(),{heartbeatsToSend:r,unsentEntries:s}=zI(this._heartbeatsCache.heartbeats),i=Ta(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return Bn.warn(n),""}}}function ed(){return new Date().toISOString().substring(0,10)}function zI(t,e=jI){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),td(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),td(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class WI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return kw()?Dw().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await $I(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Zf(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Zf(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function td(t){return Ta(JSON.stringify({version:2,heartbeats:t})).length}function GI(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KI(t){Tr(new Fn("platform-logger",e=>new oI(e),"PRIVATE")),Tr(new Fn("heartbeat",e=>new qI(e),"PRIVATE")),Bt(Ol,Jf,t),Bt(Ol,Jf,"esm2020"),Bt("fire-js","")}KI("");function Xm(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Zm=Xm,eg=new Eo("auth","Firebase",Xm());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ia=new vu("@firebase/auth");function QI(t,...e){Ia.logLevel<=he.WARN&&Ia.warn(`Auth (${us}): ${t}`,...e)}function oa(t,...e){Ia.logLevel<=he.ERROR&&Ia.error(`Auth (${us}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jt(t,...e){throw Su(t,...e)}function Qt(t,...e){return Su(t,...e)}function bu(t,e,n){const r={...Zm(),[e]:n};return new Eo("auth","Firebase",r).create(e,{appName:t.name})}function Yt(t){return bu(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function tg(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&jt(t,"argument-error"),bu(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Su(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return eg.create(t,...e)}function te(t,e,...n){if(!t)throw Su(e,...n)}function Ln(t){const e="INTERNAL ASSERTION FAILED: "+t;throw oa(e),new Error(e)}function $n(t,e){t||Ln(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vl(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function YI(){return nd()==="http:"||nd()==="https:"}function nd(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(YI()||Cw()||"connection"in navigator)?navigator.onLine:!0}function XI(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Io{constructor(e,n){this.shortDelay=e,this.longDelay=n,$n(n>e,"Short delay should be less than long delay!"),this.isMobile=bw()||Pw()}get(){return JI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ru(t,e){$n(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ng{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ln("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ln("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ln("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ev=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],tv=new Io(3e4,6e4);function Nr(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function Kn(t,e,n,r,s={}){return rg(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const c=To({key:t.config.apiKey,...o}).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const h={method:e,headers:l,...i};return Rw()||(h.referrerPolicy="no-referrer"),t.emulatorConfig&&bn(t.emulatorConfig.host)&&(h.credentials="include"),ng.fetch()(await sg(t,t.config.apiHost,n,c),h)})}async function rg(t,e,n){t._canInitEmulator=!1;const r={...ZI,...e};try{const s=new rv(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw zo(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[l,h]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw zo(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw zo(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw zo(t,"user-disabled",o);const f=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw bu(t,f,h);jt(t,f)}}catch(s){if(s instanceof nn)throw s;jt(t,"network-request-failed",{message:String(s)})}}async function vo(t,e,n,r,s={}){const i=await Kn(t,e,n,r,s);return"mfaPendingCredential"in i&&jt(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function sg(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?Ru(t.config,s):`${t.config.apiScheme}://${s}`;return ev.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function nv(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class rv{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Qt(this.auth,"network-request-failed")),tv.get())})}}function zo(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Qt(t,e,r);return s.customData._tokenResponse=n,s}function rd(t){return t!==void 0&&t.enterprise!==void 0}class sv{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return nv(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function iv(t,e){return Kn(t,"GET","/v2/recaptchaConfig",Nr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ov(t,e){return Kn(t,"POST","/v1/accounts:delete",e)}async function va(t,e){return Kn(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bi(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function ig(t,e=!1){const n=Ve(t),r=await n.getIdToken(e),s=Cu(r);te(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Bi(ol(s.auth_time)),issuedAtTime:Bi(ol(s.iat)),expirationTime:Bi(ol(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function ol(t){return Number(t)*1e3}function Cu(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return oa("JWT malformed, contained fewer than 3 sections"),null;try{const s=jm(n);return s?JSON.parse(s):(oa("Failed to decode base64 JWT payload"),null)}catch(s){return oa("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function sd(t){const e=Cu(t);return te(e,"internal-error"),te(typeof e.exp<"u","internal-error"),te(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zs(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof nn&&av(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function av({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cv{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xl{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Bi(this.lastLoginAt),this.creationTime=Bi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Aa(t){var p;const e=t.auth,n=await t.getIdToken(),r=await zs(t,va(e,{idToken:n}));te(r==null?void 0:r.users.length,e,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const i=(p=s.providerUserInfo)!=null&&p.length?ag(s.providerUserInfo):[],o=lv(t.providerData,i),c=t.isAnonymous,l=!(t.email&&s.passwordHash)&&!(o!=null&&o.length),h=c?l:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new xl(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(t,f)}async function og(t){const e=Ve(t);await Aa(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function lv(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function ag(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uv(t,e){const n=await rg(t,{},async()=>{const r=To({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await sg(t,s,"/v1/token",`key=${i}`),c=await t._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:c,body:r};return t.emulatorConfig&&bn(t.emulatorConfig.host)&&(l.credentials="include"),ng.fetch()(o,l)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function hv(t,e){return Kn(t,"POST","/v2/accounts:revokeToken",Nr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){te(e.idToken,"internal-error"),te(typeof e.idToken<"u","internal-error"),te(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):sd(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){te(e.length!==0,"internal-error");const n=sd(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(te(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await uv(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Vs;return r&&(te(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(te(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(te(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Vs,this.toJSON())}_performRefresh(){return Ln("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ir(t,e){te(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Gt{constructor({uid:e,auth:n,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new cv(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new xl(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await zs(this,this.stsTokenManager.getToken(this.auth,e));return te(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return ig(this,e)}reload(){return og(this)}_assign(e){this!==e&&(te(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Gt({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){te(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Aa(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(tt(this.auth.app))return Promise.reject(Yt(this.auth));const e=await this.getIdToken();return await zs(this,ov(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,s=n.email??void 0,i=n.phoneNumber??void 0,o=n.photoURL??void 0,c=n.tenantId??void 0,l=n._redirectEventId??void 0,h=n.createdAt??void 0,f=n.lastLoginAt??void 0,{uid:p,emailVerified:g,isAnonymous:I,providerData:C,stsTokenManager:R}=n;te(p&&R,e,"internal-error");const N=Vs.fromJSON(this.name,R);te(typeof p=="string",e,"internal-error"),ir(r,e.name),ir(s,e.name),te(typeof g=="boolean",e,"internal-error"),te(typeof I=="boolean",e,"internal-error"),ir(i,e.name),ir(o,e.name),ir(c,e.name),ir(l,e.name),ir(h,e.name),ir(f,e.name);const V=new Gt({uid:p,auth:e,email:s,emailVerified:g,displayName:r,isAnonymous:I,photoURL:o,phoneNumber:i,tenantId:c,stsTokenManager:N,createdAt:h,lastLoginAt:f});return C&&Array.isArray(C)&&(V.providerData=C.map(q=>({...q}))),l&&(V._redirectEventId=l),V}static async _fromIdTokenResponse(e,n,r=!1){const s=new Vs;s.updateFromServerResponse(n);const i=new Gt({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Aa(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];te(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?ag(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new Vs;c.updateFromIdToken(r);const l=new Gt({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:o}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new xl(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,h),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const id=new Map;function Mn(t){$n(t instanceof Function,"Expected a class definition");let e=id.get(t);return e?($n(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,id.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cg{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}cg.type="NONE";const Ll=cg;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aa(t,e,n){return`firebase:${t}:${e}:${n}`}class xs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=aa(this.userKey,s.apiKey,i),this.fullPersistenceKey=aa("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await va(this.auth,{idToken:e}).catch(()=>{});return n?Gt._fromGetAccountInfoResponse(this.auth,n,e):null}return Gt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new xs(Mn(Ll),e,r);const s=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||Mn(Ll);const o=aa(r,e.config.apiKey,e.name);let c=null;for(const h of n)try{const f=await h._get(o);if(f){let p;if(typeof f=="string"){const g=await va(e,{idToken:f}).catch(()=>{});if(!g)break;p=await Gt._fromGetAccountInfoResponse(e,g,f)}else p=Gt._fromJSON(e,f);h!==i&&(c=p),i=h;break}}catch{}const l=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new xs(i,e,r):(i=l[0],c&&await i._set(o,c.toJSON()),await Promise.all(n.map(async h=>{if(h!==i)try{await h._remove(o)}catch{}})),new xs(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function od(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(fg(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(lg(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(pg(e))return"Blackberry";if(mg(e))return"Webos";if(ug(e))return"Safari";if((e.includes("chrome/")||hg(e))&&!e.includes("edge/"))return"Chrome";if(dg(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function lg(t=_t()){return/firefox\//i.test(t)}function ug(t=_t()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function hg(t=_t()){return/crios\//i.test(t)}function fg(t=_t()){return/iemobile/i.test(t)}function dg(t=_t()){return/android/i.test(t)}function pg(t=_t()){return/blackberry/i.test(t)}function mg(t=_t()){return/webos/i.test(t)}function Pu(t=_t()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function fv(t=_t()){var e;return Pu(t)&&!!((e=window.navigator)!=null&&e.standalone)}function dv(){return Nw()&&document.documentMode===10}function gg(t=_t()){return Pu(t)||dg(t)||mg(t)||pg(t)||/windows phone/i.test(t)||fg(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _g(t,e=[]){let n;switch(t){case"Browser":n=od(_t());break;case"Worker":n=`${od(_t())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${us}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pv{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,c)=>{try{const l=e(i);o(l)}catch(l){c(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mv(t,e={}){return Kn(t,"GET","/v2/passwordPolicy",Nr(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gv=6;class _v{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??gv,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yv{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ad(this),this.idTokenSubscription=new ad(this),this.beforeStateQueue=new pv(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=eg,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Mn(n)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await xs.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await va(this,{idToken:e}),r=await Gt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(tt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(i=this.redirectUser)==null?void 0:i._redirectEventId,c=r==null?void 0:r._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===c)&&(l!=null&&l.user)&&(r=l.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return te(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Aa(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=XI()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(tt(this.app))return Promise.reject(Yt(this));const n=e?Ve(e):null;return n&&te(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&te(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return tt(this.app)?Promise.reject(Yt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return tt(this.app)?Promise.reject(Yt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Mn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await mv(this),n=new _v(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Eo("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await hv(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Mn(e)||this._popupRedirectResolver;te(n,this,"argument-error"),this.redirectPersistenceManager=await xs.create(this,[Mn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(te(c,this,"internal-error"),c.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return te(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=_g(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(tt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&QI(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function rn(t){return Ve(t)}class ad{constructor(e){this.auth=e,this.observer=null,this.addObserver=Uw(n=>this.observer=n)}get next(){return te(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Ev(t){sc=t}function yg(t){return sc.loadJS(t)}function Tv(){return sc.recaptchaEnterpriseScript}function wv(){return sc.gapiScript}function Iv(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class vv{constructor(){this.enterprise=new Av}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class Av{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const bv="recaptcha-enterprise",Eg="NO_RECAPTCHA";class Sv{constructor(e){this.type=bv,this.auth=rn(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,c)=>{iv(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const h=new sv(l);return i.tenantId==null?i._agentRecaptchaConfig=h:i._tenantRecaptchaConfigs[i.tenantId]=h,o(h.siteKey)}}).catch(l=>{c(l)})})}function s(i,o,c){const l=window.grecaptcha;rd(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(h=>{o(h)}).catch(()=>{o(Eg)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new vv().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(c=>{if(!n&&rd(window.grecaptcha))s(c,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=Tv();l.length!==0&&(l+=c),yg(l).then(()=>{s(c,i,o)}).catch(h=>{o(h)})}}).catch(c=>{o(c)})})}}async function cd(t,e,n,r=!1,s=!1){const i=new Sv(t);let o;if(s)o=Eg;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const c={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){const l=c.phoneEnrollmentInfo.phoneNumber,h=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:h,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){const l=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return r?Object.assign(c,{captchaResp:o}):Object.assign(c,{captchaResponse:o}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function Ml(t,e,n,r,s){var i;if((i=t._getRecaptchaConfig())!=null&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await cd(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const c=await cd(t,e,n,n==="getOobCode");return r(t,c)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tg(t,e){const n=wo(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(es(i,e??{}))return s;jt(s,"already-initialized")}return n.initialize({options:e})}function Rv(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Mn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function wg(t,e,n){const r=rn(t);te(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Ig(e),{host:o,port:c}=Cv(e),l=c===null?"":`:${c}`,h={url:`${i}//${o}${l}/`},f=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){te(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),te(es(h,r.config.emulator)&&es(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=h,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,bn(o)?(tc(`${i}//${o}${l}`),nc("Auth",!0)):Pv()}function Ig(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Cv(t){const e=Ig(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:ld(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:ld(o)}}}function ld(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Pv(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ic{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Ln("not implemented")}_getIdTokenResponse(e){return Ln("not implemented")}_linkToIdToken(e,n){return Ln("not implemented")}_getReauthenticationResolver(e){return Ln("not implemented")}}async function Nv(t,e){return Kn(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ov(t,e){return vo(t,"POST","/v1/accounts:signInWithPassword",Nr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kv(t,e){return vo(t,"POST","/v1/accounts:signInWithEmailLink",Nr(t,e))}async function Dv(t,e){return vo(t,"POST","/v1/accounts:signInWithEmailLink",Nr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ws extends ic{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Ws(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Ws(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ml(e,n,"signInWithPassword",Ov);case"emailLink":return kv(e,{email:this._email,oobCode:this._password});default:jt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ml(e,r,"signUpPassword",Nv);case"emailLink":return Dv(e,{idToken:n,email:this._email,oobCode:this._password});default:jt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ls(t,e){return vo(t,"POST","/v1/accounts:signInWithIdp",Nr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vv="http://localhost";class wr extends ic{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new wr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):jt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=n;if(!r||!s)return null;const o=new wr(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ls(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ls(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ls(e,n)}buildRequest(){const e={requestUri:Vv,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=To(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xv(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Lv(t){const e=Oi(ki(t)).link,n=e?Oi(ki(e)).deep_link_id:null,r=Oi(ki(t)).deep_link_id;return(r?Oi(ki(r)).link:null)||r||n||e||t}class oc{constructor(e){const n=Oi(ki(e)),r=n.apiKey??null,s=n.oobCode??null,i=xv(n.mode??null);te(r&&s&&i,"argument-error"),this.apiKey=r,this.operation=i,this.code=s,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=Lv(e);try{return new oc(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs{constructor(){this.providerId=hs.PROVIDER_ID}static credential(e,n){return Ws._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=oc.parseLink(n);return te(r,"argument-error"),Ws._fromEmailAndCode(e,r.code,r.tenantId)}}hs.PROVIDER_ID="password";hs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";hs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ac{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao extends ac{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On extends Ao{constructor(){super("facebook.com")}static credential(e){return wr._fromParams({providerId:On.PROVIDER_ID,signInMethod:On.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return On.credentialFromTaggedObject(e)}static credentialFromError(e){return On.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return On.credential(e.oauthAccessToken)}catch{return null}}}On.FACEBOOK_SIGN_IN_METHOD="facebook.com";On.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn extends Ao{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return wr._fromParams({providerId:dn.PROVIDER_ID,signInMethod:dn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return dn.credentialFromTaggedObject(e)}static credentialFromError(e){return dn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return dn.credential(n,r)}catch{return null}}}dn.GOOGLE_SIGN_IN_METHOD="google.com";dn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn extends Ao{constructor(){super("github.com")}static credential(e){return wr._fromParams({providerId:kn.PROVIDER_ID,signInMethod:kn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return kn.credentialFromTaggedObject(e)}static credentialFromError(e){return kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return kn.credential(e.oauthAccessToken)}catch{return null}}}kn.GITHUB_SIGN_IN_METHOD="github.com";kn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn extends Ao{constructor(){super("twitter.com")}static credential(e,n){return wr._fromParams({providerId:Dn.PROVIDER_ID,signInMethod:Dn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Dn.credentialFromTaggedObject(e)}static credentialFromError(e){return Dn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Dn.credential(n,r)}catch{return null}}}Dn.TWITTER_SIGN_IN_METHOD="twitter.com";Dn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vg(t,e){return vo(t,"POST","/v1/accounts:signUp",Nr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Gt._fromIdTokenResponse(e,r,s),o=ud(r);return new jn({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=ud(r);return new jn({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function ud(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ag(t){var s;if(tt(t.app))return Promise.reject(Yt(t));const e=rn(t);if(await e._initializationPromise,(s=e.currentUser)!=null&&s.isAnonymous)return new jn({user:e.currentUser,providerId:null,operationType:"signIn"});const n=await vg(e,{returnSecureToken:!0}),r=await jn._fromIdTokenResponse(e,"signIn",n,!0);return await e._updateCurrentUser(r.user),r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ba extends nn{constructor(e,n,r,s){super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,ba.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new ba(e,n,r,s)}}function bg(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?ba._fromErrorAndOperation(t,i,e,r):i})}async function Mv(t,e,n=!1){const r=await zs(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return jn._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Uv(t,e,n=!1){const{auth:r}=t;if(tt(r.app))return Promise.reject(Yt(r));const s="reauthenticate";try{const i=await zs(t,bg(r,s,e,t),n);te(i.idToken,r,"internal-error");const o=Cu(i.idToken);te(o,r,"internal-error");const{sub:c}=o;return te(t.uid===c,r,"user-mismatch"),jn._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&jt(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sg(t,e,n=!1){if(tt(t.app))return Promise.reject(Yt(t));const r="signIn",s=await bg(t,r,e),i=await jn._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function Rg(t,e){return Sg(rn(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cg(t){const e=rn(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Pg(t,e,n){if(tt(t.app))return Promise.reject(Yt(t));const r=rn(t),o=await Ml(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",vg).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&Cg(t),l}),c=await jn._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(c.user),c}function Ng(t,e,n){return tt(t.app)?Promise.reject(Yt(t)):Rg(Ve(t),hs.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Cg(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fv(t,e){return Kn(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Og(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=Ve(t),i={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await zs(r,Fv(r.auth,i));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const c=r.providerData.find(({providerId:l})=>l==="password");c&&(c.displayName=r.displayName,c.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function kg(t,e,n,r){return Ve(t).onIdTokenChanged(e,n,r)}function Dg(t,e,n){return Ve(t).beforeAuthStateChanged(e,n)}function Vg(t,e,n,r){return Ve(t).onAuthStateChanged(e,n,r)}function xg(t){return Ve(t).signOut()}const Sa="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lg{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Sa,"1"),this.storage.removeItem(Sa),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bv=1e3,$v=10;class Mg extends Lg{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=gg(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,c,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);dv()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,$v):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Bv)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Mg.type="LOCAL";const Ug=Mg;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fg extends Lg{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Fg.type="SESSION";const Nu=Fg;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jv(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new cc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(o).map(async h=>h(n.origin,i)),l=await jv(c);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}cc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ou(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hv{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((c,l)=>{const h=Ou("",20);s.port1.start();const f=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const g=p;if(g.data.eventId===h)switch(g.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(g.data.response);break;default:clearTimeout(f),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gn(){return window}function qv(t){gn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bg(){return typeof gn().WorkerGlobalScope<"u"&&typeof gn().importScripts=="function"}async function zv(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Wv(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function Gv(){return Bg()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $g="firebaseLocalStorageDb",Kv=1,Ra="firebaseLocalStorage",jg="fbase_key";class bo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function lc(t,e){return t.transaction([Ra],e?"readwrite":"readonly").objectStore(Ra)}function Qv(){const t=indexedDB.deleteDatabase($g);return new bo(t).toPromise()}function Ul(){const t=indexedDB.open($g,Kv);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Ra,{keyPath:jg})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Ra)?e(r):(r.close(),await Qv(),e(await Ul()))})})}async function hd(t,e,n){const r=lc(t,!0).put({[jg]:e,value:n});return new bo(r).toPromise()}async function Yv(t,e){const n=lc(t,!1).get(e),r=await new bo(n).toPromise();return r===void 0?null:r.value}function fd(t,e){const n=lc(t,!0).delete(e);return new bo(n).toPromise()}const Jv=800,Xv=3;class Hg{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ul(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Xv)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Bg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=cc._getInstance(Gv()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await zv(),!this.activeServiceWorker)return;this.sender=new Hv(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Wv()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ul();return await hd(e,Sa,"1"),await fd(e,Sa),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>hd(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Yv(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>fd(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=lc(s,!1).getAll();return new bo(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Jv)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Hg.type="LOCAL";const qg=Hg;new Io(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ku(t,e){return e?Mn(e):(te(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Du extends ic{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ls(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ls(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ls(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Zv(t){return Sg(t.auth,new Du(t),t.bypassAuthState)}function eA(t){const{auth:e,user:n}=t;return te(n,e,"internal-error"),Uv(n,new Du(t),t.bypassAuthState)}async function tA(t){const{auth:e,user:n}=t;return te(n,e,"internal-error"),Mv(n,new Du(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zg{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:c}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Zv;case"linkViaPopup":case"linkViaRedirect":return tA;case"reauthViaPopup":case"reauthViaRedirect":return eA;default:jt(this.auth,"internal-error")}}resolve(e){$n(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){$n(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nA=new Io(2e3,1e4);async function Wg(t,e,n){if(tt(t.app))return Promise.reject(Qt(t,"operation-not-supported-in-this-environment"));const r=rn(t);tg(t,e,ac);const s=ku(r,n);return new Gr(r,"signInViaPopup",e,s).executeNotNull()}class Gr extends zg{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Gr.currentPopupAction&&Gr.currentPopupAction.cancel(),Gr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return te(e,this.auth,"internal-error"),e}async onExecution(){$n(this.filter.length===1,"Popup operations only handle one event");const e=Ou();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Qt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(Qt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Gr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Qt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,nA.get())};e()}}Gr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rA="pendingRedirect",ca=new Map;class sA extends zg{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ca.get(this.auth._key());if(!e){try{const r=await iA(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ca.set(this.auth._key(),e)}return this.bypassAuthState||ca.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function iA(t,e){const n=Kg(e),r=Gg(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}async function oA(t,e){return Gg(t)._set(Kg(e),"true")}function aA(t,e){ca.set(t._key(),e)}function Gg(t){return Mn(t._redirectPersistence)}function Kg(t){return aa(rA,t.config.apiKey,t.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fl(t,e,n){return cA(t,e,n)}async function cA(t,e,n){if(tt(t.app))return Promise.reject(Yt(t));const r=rn(t);tg(t,e,ac),await r._initializationPromise;const s=ku(r,n);return await oA(s,r),s._openRedirect(r,e,"signInViaRedirect")}async function Qg(t,e){return await rn(t)._initializationPromise,Yg(t,e,!1)}async function Yg(t,e,n=!1){if(tt(t.app))return Promise.reject(Yt(t));const r=rn(t),s=ku(r,e),o=await new sA(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lA=10*60*1e3;class uA{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!hA(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Jg(e)){const s=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(Qt(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=lA&&this.cachedEventUids.clear(),this.cachedEventUids.has(dd(e))}saveEventToCache(e){this.cachedEventUids.add(dd(e)),this.lastProcessedEventTime=Date.now()}}function dd(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Jg({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function hA(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Jg(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fA(t,e={}){return Kn(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dA=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,pA=/^https?/;async function mA(t){if(t.config.emulator)return;const{authorizedDomains:e}=await fA(t);for(const n of e)try{if(gA(n))return}catch{}jt(t,"unauthorized-domain")}function gA(t){const e=Vl(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!pA.test(n))return!1;if(dA.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _A=new Io(3e4,6e4);function pd(){const t=gn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function yA(t){return new Promise((e,n)=>{var s,i,o;function r(){pd(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{pd(),n(Qt(t,"network-request-failed"))},timeout:_A.get()})}if((i=(s=gn().gapi)==null?void 0:s.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((o=gn().gapi)!=null&&o.load)r();else{const c=Iv("iframefcb");return gn()[c]=()=>{gapi.load?r():n(Qt(t,"network-request-failed"))},yg(`${wv()}?onload=${c}`).catch(l=>n(l))}}).catch(e=>{throw la=null,e})}let la=null;function EA(t){return la=la||yA(t),la}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TA=new Io(5e3,15e3),wA="__/auth/iframe",IA="emulator/auth/iframe",vA={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},AA=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function bA(t){const e=t.config;te(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ru(e,IA):`https://${t.config.authDomain}/${wA}`,r={apiKey:e.apiKey,appName:t.name,v:us},s=AA.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${To(r).slice(1)}`}async function SA(t){const e=await EA(t),n=gn().gapi;return te(n,t,"internal-error"),e.open({where:document.body,url:bA(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:vA,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Qt(t,"network-request-failed"),c=gn().setTimeout(()=>{i(o)},TA.get());function l(){gn().clearTimeout(c),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RA={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},CA=500,PA=600,NA="_blank",OA="http://localhost";class md{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function kA(t,e,n,r=CA,s=PA){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l={...RA,width:r.toString(),height:s.toString(),top:i,left:o},h=_t().toLowerCase();n&&(c=hg(h)?NA:n),lg(h)&&(e=e||OA,l.scrollbars="yes");const f=Object.entries(l).reduce((g,[I,C])=>`${g}${I}=${C},`,"");if(fv(h)&&c!=="_self")return DA(e||"",c),new md(null);const p=window.open(e||"",c,f);te(p,t,"popup-blocked");try{p.focus()}catch{}return new md(p)}function DA(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VA="__/auth/handler",xA="emulator/auth/handler",LA=encodeURIComponent("fac");async function gd(t,e,n,r,s,i){te(t.config.authDomain,t,"auth-domain-config-required"),te(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:us,eventId:s};if(e instanceof ac){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Mw(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))o[f]=p}if(e instanceof Ao){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const c=o;for(const f of Object.keys(c))c[f]===void 0&&delete c[f];const l=await t._getAppCheckToken(),h=l?`#${LA}=${encodeURIComponent(l)}`:"";return`${MA(t)}?${To(c).slice(1)}${h}`}function MA({config:t}){return t.emulator?Ru(t,xA):`https://${t.authDomain}/${VA}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const al="webStorageSupport";class UA{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Nu,this._completeRedirectFn=Yg,this._overrideRedirectResult=aA}async _openPopup(e,n,r,s){var o;$n((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const i=await gd(e,n,r,Vl(),s);return kA(e,i,Ou())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await gd(e,n,r,Vl(),s);return qv(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):($n(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await SA(e),r=new uA(e);return n.register("authEvent",s=>(te(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(al,{type:al},s=>{var o;const i=(o=s==null?void 0:s[0])==null?void 0:o[al];i!==void 0&&n(!!i),jt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=mA(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return gg()||ug()||Pu()}}const Xg=UA;var _d="@firebase/auth",yd="1.11.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FA{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){te(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BA(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function $A(t){Tr(new Fn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;te(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:_g(t)},h=new yv(r,s,i,l);return Rv(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Tr(new Fn("auth-internal",e=>{const n=rn(e.getProvider("auth").getImmediate());return(r=>new FA(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Bt(_d,yd,BA(t)),Bt(_d,yd,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jA=5*60,HA=zm("authIdTokenMaxAge")||jA;let Ed=null;const qA=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>HA)return;const s=n==null?void 0:n.token;Ed!==s&&(Ed=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Zg(t=rc()){const e=wo(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Tg(t,{popupRedirectResolver:Xg,persistence:[qg,Ug,Nu]}),r=zm("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=qA(i.toString());Dg(n,o,()=>o(n.currentUser)),kg(n,c=>o(c))}}const s=Hm("auth");return s&&wg(n,`http://${s}`),n}function zA(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}Ev({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Qt("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",zA().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});$A("Browser");const Vu=Object.freeze(Object.defineProperty({__proto__:null,ActionCodeURL:oc,AuthCredential:ic,EmailAuthCredential:Ws,EmailAuthProvider:hs,FacebookAuthProvider:On,GithubAuthProvider:kn,GoogleAuthProvider:dn,OAuthCredential:wr,TwitterAuthProvider:Dn,beforeAuthStateChanged:Dg,browserLocalPersistence:Ug,browserPopupRedirectResolver:Xg,browserSessionPersistence:Nu,connectAuthEmulator:wg,createUserWithEmailAndPassword:Pg,getAuth:Zg,getIdTokenResult:ig,getRedirectResult:Qg,inMemoryPersistence:Ll,indexedDBLocalPersistence:qg,initializeAuth:Tg,onAuthStateChanged:Vg,onIdTokenChanged:kg,prodErrorMap:Zm,reload:og,signInAnonymously:Ag,signInWithCredential:Rg,signInWithEmailAndPassword:Ng,signInWithPopup:Wg,signInWithRedirect:Fl,signOut:xg,updateProfile:Og},Symbol.toStringTag,{value:"Module"}));var WA="firebase",GA="12.6.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Bt(WA,GA,"app");var Td=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var mr,e_;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(b,y){function _(){}_.prototype=y.prototype,b.F=y.prototype,b.prototype=new _,b.prototype.constructor=b,b.D=function(A,v,T){for(var E=Array(arguments.length-2),me=2;me<arguments.length;me++)E[me-2]=arguments[me];return y.prototype[v].apply(A,E)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(b,y,_){_||(_=0);const A=Array(16);if(typeof y=="string")for(var v=0;v<16;++v)A[v]=y.charCodeAt(_++)|y.charCodeAt(_++)<<8|y.charCodeAt(_++)<<16|y.charCodeAt(_++)<<24;else for(v=0;v<16;++v)A[v]=y[_++]|y[_++]<<8|y[_++]<<16|y[_++]<<24;y=b.g[0],_=b.g[1],v=b.g[2];let T=b.g[3],E;E=y+(T^_&(v^T))+A[0]+3614090360&4294967295,y=_+(E<<7&4294967295|E>>>25),E=T+(v^y&(_^v))+A[1]+3905402710&4294967295,T=y+(E<<12&4294967295|E>>>20),E=v+(_^T&(y^_))+A[2]+606105819&4294967295,v=T+(E<<17&4294967295|E>>>15),E=_+(y^v&(T^y))+A[3]+3250441966&4294967295,_=v+(E<<22&4294967295|E>>>10),E=y+(T^_&(v^T))+A[4]+4118548399&4294967295,y=_+(E<<7&4294967295|E>>>25),E=T+(v^y&(_^v))+A[5]+1200080426&4294967295,T=y+(E<<12&4294967295|E>>>20),E=v+(_^T&(y^_))+A[6]+2821735955&4294967295,v=T+(E<<17&4294967295|E>>>15),E=_+(y^v&(T^y))+A[7]+4249261313&4294967295,_=v+(E<<22&4294967295|E>>>10),E=y+(T^_&(v^T))+A[8]+1770035416&4294967295,y=_+(E<<7&4294967295|E>>>25),E=T+(v^y&(_^v))+A[9]+2336552879&4294967295,T=y+(E<<12&4294967295|E>>>20),E=v+(_^T&(y^_))+A[10]+4294925233&4294967295,v=T+(E<<17&4294967295|E>>>15),E=_+(y^v&(T^y))+A[11]+2304563134&4294967295,_=v+(E<<22&4294967295|E>>>10),E=y+(T^_&(v^T))+A[12]+1804603682&4294967295,y=_+(E<<7&4294967295|E>>>25),E=T+(v^y&(_^v))+A[13]+4254626195&4294967295,T=y+(E<<12&4294967295|E>>>20),E=v+(_^T&(y^_))+A[14]+2792965006&4294967295,v=T+(E<<17&4294967295|E>>>15),E=_+(y^v&(T^y))+A[15]+1236535329&4294967295,_=v+(E<<22&4294967295|E>>>10),E=y+(v^T&(_^v))+A[1]+4129170786&4294967295,y=_+(E<<5&4294967295|E>>>27),E=T+(_^v&(y^_))+A[6]+3225465664&4294967295,T=y+(E<<9&4294967295|E>>>23),E=v+(y^_&(T^y))+A[11]+643717713&4294967295,v=T+(E<<14&4294967295|E>>>18),E=_+(T^y&(v^T))+A[0]+3921069994&4294967295,_=v+(E<<20&4294967295|E>>>12),E=y+(v^T&(_^v))+A[5]+3593408605&4294967295,y=_+(E<<5&4294967295|E>>>27),E=T+(_^v&(y^_))+A[10]+38016083&4294967295,T=y+(E<<9&4294967295|E>>>23),E=v+(y^_&(T^y))+A[15]+3634488961&4294967295,v=T+(E<<14&4294967295|E>>>18),E=_+(T^y&(v^T))+A[4]+3889429448&4294967295,_=v+(E<<20&4294967295|E>>>12),E=y+(v^T&(_^v))+A[9]+568446438&4294967295,y=_+(E<<5&4294967295|E>>>27),E=T+(_^v&(y^_))+A[14]+3275163606&4294967295,T=y+(E<<9&4294967295|E>>>23),E=v+(y^_&(T^y))+A[3]+4107603335&4294967295,v=T+(E<<14&4294967295|E>>>18),E=_+(T^y&(v^T))+A[8]+1163531501&4294967295,_=v+(E<<20&4294967295|E>>>12),E=y+(v^T&(_^v))+A[13]+2850285829&4294967295,y=_+(E<<5&4294967295|E>>>27),E=T+(_^v&(y^_))+A[2]+4243563512&4294967295,T=y+(E<<9&4294967295|E>>>23),E=v+(y^_&(T^y))+A[7]+1735328473&4294967295,v=T+(E<<14&4294967295|E>>>18),E=_+(T^y&(v^T))+A[12]+2368359562&4294967295,_=v+(E<<20&4294967295|E>>>12),E=y+(_^v^T)+A[5]+4294588738&4294967295,y=_+(E<<4&4294967295|E>>>28),E=T+(y^_^v)+A[8]+2272392833&4294967295,T=y+(E<<11&4294967295|E>>>21),E=v+(T^y^_)+A[11]+1839030562&4294967295,v=T+(E<<16&4294967295|E>>>16),E=_+(v^T^y)+A[14]+4259657740&4294967295,_=v+(E<<23&4294967295|E>>>9),E=y+(_^v^T)+A[1]+2763975236&4294967295,y=_+(E<<4&4294967295|E>>>28),E=T+(y^_^v)+A[4]+1272893353&4294967295,T=y+(E<<11&4294967295|E>>>21),E=v+(T^y^_)+A[7]+4139469664&4294967295,v=T+(E<<16&4294967295|E>>>16),E=_+(v^T^y)+A[10]+3200236656&4294967295,_=v+(E<<23&4294967295|E>>>9),E=y+(_^v^T)+A[13]+681279174&4294967295,y=_+(E<<4&4294967295|E>>>28),E=T+(y^_^v)+A[0]+3936430074&4294967295,T=y+(E<<11&4294967295|E>>>21),E=v+(T^y^_)+A[3]+3572445317&4294967295,v=T+(E<<16&4294967295|E>>>16),E=_+(v^T^y)+A[6]+76029189&4294967295,_=v+(E<<23&4294967295|E>>>9),E=y+(_^v^T)+A[9]+3654602809&4294967295,y=_+(E<<4&4294967295|E>>>28),E=T+(y^_^v)+A[12]+3873151461&4294967295,T=y+(E<<11&4294967295|E>>>21),E=v+(T^y^_)+A[15]+530742520&4294967295,v=T+(E<<16&4294967295|E>>>16),E=_+(v^T^y)+A[2]+3299628645&4294967295,_=v+(E<<23&4294967295|E>>>9),E=y+(v^(_|~T))+A[0]+4096336452&4294967295,y=_+(E<<6&4294967295|E>>>26),E=T+(_^(y|~v))+A[7]+1126891415&4294967295,T=y+(E<<10&4294967295|E>>>22),E=v+(y^(T|~_))+A[14]+2878612391&4294967295,v=T+(E<<15&4294967295|E>>>17),E=_+(T^(v|~y))+A[5]+4237533241&4294967295,_=v+(E<<21&4294967295|E>>>11),E=y+(v^(_|~T))+A[12]+1700485571&4294967295,y=_+(E<<6&4294967295|E>>>26),E=T+(_^(y|~v))+A[3]+2399980690&4294967295,T=y+(E<<10&4294967295|E>>>22),E=v+(y^(T|~_))+A[10]+4293915773&4294967295,v=T+(E<<15&4294967295|E>>>17),E=_+(T^(v|~y))+A[1]+2240044497&4294967295,_=v+(E<<21&4294967295|E>>>11),E=y+(v^(_|~T))+A[8]+1873313359&4294967295,y=_+(E<<6&4294967295|E>>>26),E=T+(_^(y|~v))+A[15]+4264355552&4294967295,T=y+(E<<10&4294967295|E>>>22),E=v+(y^(T|~_))+A[6]+2734768916&4294967295,v=T+(E<<15&4294967295|E>>>17),E=_+(T^(v|~y))+A[13]+1309151649&4294967295,_=v+(E<<21&4294967295|E>>>11),E=y+(v^(_|~T))+A[4]+4149444226&4294967295,y=_+(E<<6&4294967295|E>>>26),E=T+(_^(y|~v))+A[11]+3174756917&4294967295,T=y+(E<<10&4294967295|E>>>22),E=v+(y^(T|~_))+A[2]+718787259&4294967295,v=T+(E<<15&4294967295|E>>>17),E=_+(T^(v|~y))+A[9]+3951481745&4294967295,b.g[0]=b.g[0]+y&4294967295,b.g[1]=b.g[1]+(v+(E<<21&4294967295|E>>>11))&4294967295,b.g[2]=b.g[2]+v&4294967295,b.g[3]=b.g[3]+T&4294967295}r.prototype.v=function(b,y){y===void 0&&(y=b.length);const _=y-this.blockSize,A=this.C;let v=this.h,T=0;for(;T<y;){if(v==0)for(;T<=_;)s(this,b,T),T+=this.blockSize;if(typeof b=="string"){for(;T<y;)if(A[v++]=b.charCodeAt(T++),v==this.blockSize){s(this,A),v=0;break}}else for(;T<y;)if(A[v++]=b[T++],v==this.blockSize){s(this,A),v=0;break}}this.h=v,this.o+=y},r.prototype.A=function(){var b=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);b[0]=128;for(var y=1;y<b.length-8;++y)b[y]=0;y=this.o*8;for(var _=b.length-8;_<b.length;++_)b[_]=y&255,y/=256;for(this.v(b),b=Array(16),y=0,_=0;_<4;++_)for(let A=0;A<32;A+=8)b[y++]=this.g[_]>>>A&255;return b};function i(b,y){var _=c;return Object.prototype.hasOwnProperty.call(_,b)?_[b]:_[b]=y(b)}function o(b,y){this.h=y;const _=[];let A=!0;for(let v=b.length-1;v>=0;v--){const T=b[v]|0;A&&T==y||(_[v]=T,A=!1)}this.g=_}var c={};function l(b){return-128<=b&&b<128?i(b,function(y){return new o([y|0],y<0?-1:0)}):new o([b|0],b<0?-1:0)}function h(b){if(isNaN(b)||!isFinite(b))return p;if(b<0)return N(h(-b));const y=[];let _=1;for(let A=0;b>=_;A++)y[A]=b/_|0,_*=4294967296;return new o(y,0)}function f(b,y){if(b.length==0)throw Error("number format error: empty string");if(y=y||10,y<2||36<y)throw Error("radix out of range: "+y);if(b.charAt(0)=="-")return N(f(b.substring(1),y));if(b.indexOf("-")>=0)throw Error('number format error: interior "-" character');const _=h(Math.pow(y,8));let A=p;for(let T=0;T<b.length;T+=8){var v=Math.min(8,b.length-T);const E=parseInt(b.substring(T,T+v),y);v<8?(v=h(Math.pow(y,v)),A=A.j(v).add(h(E))):(A=A.j(_),A=A.add(h(E)))}return A}var p=l(0),g=l(1),I=l(16777216);t=o.prototype,t.m=function(){if(R(this))return-N(this).m();let b=0,y=1;for(let _=0;_<this.g.length;_++){const A=this.i(_);b+=(A>=0?A:4294967296+A)*y,y*=4294967296}return b},t.toString=function(b){if(b=b||10,b<2||36<b)throw Error("radix out of range: "+b);if(C(this))return"0";if(R(this))return"-"+N(this).toString(b);const y=h(Math.pow(b,6));var _=this;let A="";for(;;){const v=j(_,y).g;_=V(_,v.j(y));let T=((_.g.length>0?_.g[0]:_.h)>>>0).toString(b);if(_=v,C(_))return T+A;for(;T.length<6;)T="0"+T;A=T+A}},t.i=function(b){return b<0?0:b<this.g.length?this.g[b]:this.h};function C(b){if(b.h!=0)return!1;for(let y=0;y<b.g.length;y++)if(b.g[y]!=0)return!1;return!0}function R(b){return b.h==-1}t.l=function(b){return b=V(this,b),R(b)?-1:C(b)?0:1};function N(b){const y=b.g.length,_=[];for(let A=0;A<y;A++)_[A]=~b.g[A];return new o(_,~b.h).add(g)}t.abs=function(){return R(this)?N(this):this},t.add=function(b){const y=Math.max(this.g.length,b.g.length),_=[];let A=0;for(let v=0;v<=y;v++){let T=A+(this.i(v)&65535)+(b.i(v)&65535),E=(T>>>16)+(this.i(v)>>>16)+(b.i(v)>>>16);A=E>>>16,T&=65535,E&=65535,_[v]=E<<16|T}return new o(_,_[_.length-1]&-2147483648?-1:0)};function V(b,y){return b.add(N(y))}t.j=function(b){if(C(this)||C(b))return p;if(R(this))return R(b)?N(this).j(N(b)):N(N(this).j(b));if(R(b))return N(this.j(N(b)));if(this.l(I)<0&&b.l(I)<0)return h(this.m()*b.m());const y=this.g.length+b.g.length,_=[];for(var A=0;A<2*y;A++)_[A]=0;for(A=0;A<this.g.length;A++)for(let v=0;v<b.g.length;v++){const T=this.i(A)>>>16,E=this.i(A)&65535,me=b.i(v)>>>16,Je=b.i(v)&65535;_[2*A+2*v]+=E*Je,q(_,2*A+2*v),_[2*A+2*v+1]+=T*Je,q(_,2*A+2*v+1),_[2*A+2*v+1]+=E*me,q(_,2*A+2*v+1),_[2*A+2*v+2]+=T*me,q(_,2*A+2*v+2)}for(b=0;b<y;b++)_[b]=_[2*b+1]<<16|_[2*b];for(b=y;b<2*y;b++)_[b]=0;return new o(_,0)};function q(b,y){for(;(b[y]&65535)!=b[y];)b[y+1]+=b[y]>>>16,b[y]&=65535,y++}function W(b,y){this.g=b,this.h=y}function j(b,y){if(C(y))throw Error("division by zero");if(C(b))return new W(p,p);if(R(b))return y=j(N(b),y),new W(N(y.g),N(y.h));if(R(y))return y=j(b,N(y)),new W(N(y.g),y.h);if(b.g.length>30){if(R(b)||R(y))throw Error("slowDivide_ only works with positive integers.");for(var _=g,A=y;A.l(b)<=0;)_=ee(_),A=ee(A);var v=ie(_,1),T=ie(A,1);for(A=ie(A,2),_=ie(_,2);!C(A);){var E=T.add(A);E.l(b)<=0&&(v=v.add(_),T=E),A=ie(A,1),_=ie(_,1)}return y=V(b,v.j(y)),new W(v,y)}for(v=p;b.l(y)>=0;){for(_=Math.max(1,Math.floor(b.m()/y.m())),A=Math.ceil(Math.log(_)/Math.LN2),A=A<=48?1:Math.pow(2,A-48),T=h(_),E=T.j(y);R(E)||E.l(b)>0;)_-=A,T=h(_),E=T.j(y);C(T)&&(T=g),v=v.add(T),b=V(b,E)}return new W(v,b)}t.B=function(b){return j(this,b).h},t.and=function(b){const y=Math.max(this.g.length,b.g.length),_=[];for(let A=0;A<y;A++)_[A]=this.i(A)&b.i(A);return new o(_,this.h&b.h)},t.or=function(b){const y=Math.max(this.g.length,b.g.length),_=[];for(let A=0;A<y;A++)_[A]=this.i(A)|b.i(A);return new o(_,this.h|b.h)},t.xor=function(b){const y=Math.max(this.g.length,b.g.length),_=[];for(let A=0;A<y;A++)_[A]=this.i(A)^b.i(A);return new o(_,this.h^b.h)};function ee(b){const y=b.g.length+1,_=[];for(let A=0;A<y;A++)_[A]=b.i(A)<<1|b.i(A-1)>>>31;return new o(_,b.h)}function ie(b,y){const _=y>>5;y%=32;const A=b.g.length-_,v=[];for(let T=0;T<A;T++)v[T]=y>0?b.i(T+_)>>>y|b.i(T+_+1)<<32-y:b.i(T+_);return new o(v,b.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,e_=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=f,mr=o}).apply(typeof Td<"u"?Td:typeof self<"u"?self:typeof window<"u"?window:{});var Wo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var t_,Di,n_,ua,Bl,r_,s_,i_;(function(){var t,e=Object.defineProperty;function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Wo=="object"&&Wo];for(var u=0;u<a.length;++u){var d=a[u];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function s(a,u){if(u)e:{var d=r;a=a.split(".");for(var m=0;m<a.length-1;m++){var P=a[m];if(!(P in d))break e;d=d[P]}a=a[a.length-1],m=d[a],u=u(m),u!=m&&u!=null&&e(d,a,{configurable:!0,writable:!0,value:u})}}s("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(a){return a||function(u){var d=[],m;for(m in u)Object.prototype.hasOwnProperty.call(u,m)&&d.push([m,u[m]]);return d}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},o=this||self;function c(a){var u=typeof a;return u=="object"&&a!=null||u=="function"}function l(a,u,d){return a.call.apply(a.bind,arguments)}function h(a,u,d){return h=l,h.apply(null,arguments)}function f(a,u){var d=Array.prototype.slice.call(arguments,1);return function(){var m=d.slice();return m.push.apply(m,arguments),a.apply(this,m)}}function p(a,u){function d(){}d.prototype=u.prototype,a.Z=u.prototype,a.prototype=new d,a.prototype.constructor=a,a.Ob=function(m,P,O){for(var H=Array(arguments.length-2),le=2;le<arguments.length;le++)H[le-2]=arguments[le];return u.prototype[P].apply(m,H)}}var g=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function I(a){const u=a.length;if(u>0){const d=Array(u);for(let m=0;m<u;m++)d[m]=a[m];return d}return[]}function C(a,u){for(let m=1;m<arguments.length;m++){const P=arguments[m];var d=typeof P;if(d=d!="object"?d:P?Array.isArray(P)?"array":d:"null",d=="array"||d=="object"&&typeof P.length=="number"){d=a.length||0;const O=P.length||0;a.length=d+O;for(let H=0;H<O;H++)a[d+H]=P[H]}else a.push(P)}}class R{constructor(u,d){this.i=u,this.j=d,this.h=0,this.g=null}get(){let u;return this.h>0?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function N(a){o.setTimeout(()=>{throw a},0)}function V(){var a=b;let u=null;return a.g&&(u=a.g,a.g=a.g.next,a.g||(a.h=null),u.next=null),u}class q{constructor(){this.h=this.g=null}add(u,d){const m=W.get();m.set(u,d),this.h?this.h.next=m:this.g=m,this.h=m}}var W=new R(()=>new j,a=>a.reset());class j{constructor(){this.next=this.g=this.h=null}set(u,d){this.h=u,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let ee,ie=!1,b=new q,y=()=>{const a=Promise.resolve(void 0);ee=()=>{a.then(_)}};function _(){for(var a;a=V();){try{a.h.call(a.g)}catch(d){N(d)}var u=W;u.j(a),u.h<100&&(u.h++,a.next=u.g,u.g=a)}ie=!1}function A(){this.u=this.u,this.C=this.C}A.prototype.u=!1,A.prototype.dispose=function(){this.u||(this.u=!0,this.N())},A.prototype[Symbol.dispose]=function(){this.dispose()},A.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function v(a,u){this.type=a,this.g=this.target=u,this.defaultPrevented=!1}v.prototype.h=function(){this.defaultPrevented=!0};var T=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,u=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};o.addEventListener("test",d,u),o.removeEventListener("test",d,u)}catch{}return a}();function E(a){return/^[\s\xa0]*$/.test(a)}function me(a,u){v.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,u)}p(me,v),me.prototype.init=function(a,u){const d=this.type=a.type,m=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=u,u=a.relatedTarget,u||(d=="mouseover"?u=a.fromElement:d=="mouseout"&&(u=a.toElement)),this.relatedTarget=u,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&me.Z.h.call(this)},me.prototype.h=function(){me.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Je="closure_listenable_"+(Math.random()*1e6|0),$e=0;function Ne(a,u,d,m,P){this.listener=a,this.proxy=null,this.src=u,this.type=d,this.capture=!!m,this.ha=P,this.key=++$e,this.da=this.fa=!1}function ye(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function xt(a,u,d){for(const m in a)u.call(d,a[m],m,a)}function Ts(a,u){for(const d in a)u.call(void 0,a[d],d,a)}function on(a){const u={};for(const d in a)u[d]=a[d];return u}const Ct="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ci(a,u){let d,m;for(let P=1;P<arguments.length;P++){m=arguments[P];for(d in m)a[d]=m[d];for(let O=0;O<Ct.length;O++)d=Ct[O],Object.prototype.hasOwnProperty.call(m,d)&&(a[d]=m[d])}}function ws(a){this.src=a,this.g={},this.h=0}ws.prototype.add=function(a,u,d,m,P){const O=a.toString();a=this.g[O],a||(a=this.g[O]=[],this.h++);const H=Sn(a,u,m,P);return H>-1?(u=a[H],d||(u.fa=!1)):(u=new Ne(u,this.src,O,!!m,P),u.fa=d,a.push(u)),u};function li(a,u){const d=u.type;if(d in a.g){var m=a.g[d],P=Array.prototype.indexOf.call(m,u,void 0),O;(O=P>=0)&&Array.prototype.splice.call(m,P,1),O&&(ye(u),a.g[d].length==0&&(delete a.g[d],a.h--))}}function Sn(a,u,d,m){for(let P=0;P<a.length;++P){const O=a[P];if(!O.da&&O.listener==u&&O.capture==!!d&&O.ha==m)return P}return-1}var Xn="closure_lm_"+(Math.random()*1e6|0),kr={};function ui(a,u,d,m,P){if(Array.isArray(u)){for(let O=0;O<u.length;O++)ui(a,u[O],d,m,P);return null}return d=z(d),a&&a[Je]?a.J(u,d,c(m)?!!m.capture:!1,P):Dr(a,u,d,!1,m,P)}function Dr(a,u,d,m,P,O){if(!u)throw Error("Invalid event type");const H=c(P)?!!P.capture:!!P;let le=L(a);if(le||(a[Xn]=le=new ws(a)),d=le.add(u,d,m,H,O),d.proxy)return d;if(m=ef(),d.proxy=m,m.src=a,m.listener=d,a.addEventListener)T||(P=H),P===void 0&&(P=!1),a.addEventListener(u.toString(),m,P);else if(a.attachEvent)a.attachEvent(k(u.toString()),m);else if(a.addListener&&a.removeListener)a.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return d}function ef(){function a(d){return u.call(a.src,a.listener,d)}const u=$;return a}function w(a,u,d,m,P){if(Array.isArray(u))for(var O=0;O<u.length;O++)w(a,u[O],d,m,P);else m=c(m)?!!m.capture:!!m,d=z(d),a&&a[Je]?(a=a.i,O=String(u).toString(),O in a.g&&(u=a.g[O],d=Sn(u,d,m,P),d>-1&&(ye(u[d]),Array.prototype.splice.call(u,d,1),u.length==0&&(delete a.g[O],a.h--)))):a&&(a=L(a))&&(u=a.g[u.toString()],a=-1,u&&(a=Sn(u,d,m,P)),(d=a>-1?u[a]:null)&&S(d))}function S(a){if(typeof a!="number"&&a&&!a.da){var u=a.src;if(u&&u[Je])li(u.i,a);else{var d=a.type,m=a.proxy;u.removeEventListener?u.removeEventListener(d,m,a.capture):u.detachEvent?u.detachEvent(k(d),m):u.addListener&&u.removeListener&&u.removeListener(m),(d=L(u))?(li(d,a),d.h==0&&(d.src=null,u[Xn]=null)):ye(a)}}}function k(a){return a in kr?kr[a]:kr[a]="on"+a}function $(a,u){if(a.da)a=!0;else{u=new me(u,this);const d=a.listener,m=a.ha||a.src;a.fa&&S(a),a=d.call(m,u)}return a}function L(a){return a=a[Xn],a instanceof ws?a:null}var M="__closure_events_fn_"+(Math.random()*1e9>>>0);function z(a){return typeof a=="function"?a:(a[M]||(a[M]=function(u){return a.handleEvent(u)}),a[M])}function B(){A.call(this),this.i=new ws(this),this.M=this,this.G=null}p(B,A),B.prototype[Je]=!0,B.prototype.removeEventListener=function(a,u,d,m){w(this,a,u,d,m)};function F(a,u){var d,m=a.G;if(m)for(d=[];m;m=m.G)d.push(m);if(a=a.M,m=u.type||u,typeof u=="string")u=new v(u,a);else if(u instanceof v)u.target=u.target||a;else{var P=u;u=new v(m,a),ci(u,P)}P=!0;let O,H;if(d)for(H=d.length-1;H>=0;H--)O=u.g=d[H],P=U(O,m,!0,u)&&P;if(O=u.g=a,P=U(O,m,!0,u)&&P,P=U(O,m,!1,u)&&P,d)for(H=0;H<d.length;H++)O=u.g=d[H],P=U(O,m,!1,u)&&P}B.prototype.N=function(){if(B.Z.N.call(this),this.i){var a=this.i;for(const u in a.g){const d=a.g[u];for(let m=0;m<d.length;m++)ye(d[m]);delete a.g[u],a.h--}}this.G=null},B.prototype.J=function(a,u,d,m){return this.i.add(String(a),u,!1,d,m)},B.prototype.K=function(a,u,d,m){return this.i.add(String(a),u,!0,d,m)};function U(a,u,d,m){if(u=a.i.g[String(u)],!u)return!0;u=u.concat();let P=!0;for(let O=0;O<u.length;++O){const H=u[O];if(H&&!H.da&&H.capture==d){const le=H.listener,ze=H.ha||H.src;H.fa&&li(a.i,H),P=le.call(ze,m)!==!1&&P}}return P&&!m.defaultPrevented}function X(a,u){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=h(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(u)>2147483647?-1:o.setTimeout(a,u||0)}function G(a){a.g=X(()=>{a.g=null,a.i&&(a.i=!1,G(a))},a.l);const u=a.h;a.h=null,a.m.apply(null,u)}class J extends A{constructor(u,d){super(),this.m=u,this.l=d,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:G(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Z(a){A.call(this),this.h=a,this.g={}}p(Z,A);var ue=[];function Ie(a){xt(a.g,function(u,d){this.g.hasOwnProperty(d)&&S(u)},a),a.g={}}Z.prototype.N=function(){Z.Z.N.call(this),Ie(this)},Z.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ge=o.JSON.stringify,ct=o.JSON.parse,lt=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function Pt(){}function Nt(){}var qt={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Is(){v.call(this,"d")}p(Is,v);function Xe(){v.call(this,"c")}p(Xe,v);var Ge={},hi=null;function Vr(){return hi=hi||new B}Ge.Ia="serverreachability";function tf(a){v.call(this,Ge.Ia,a)}p(tf,v);function fi(a){const u=Vr();F(u,new tf(u))}Ge.STAT_EVENT="statevent";function nf(a,u){v.call(this,Ge.STAT_EVENT,a),this.stat=u}p(nf,v);function yt(a){const u=Vr();F(u,new nf(u,a))}Ge.Ja="timingevent";function rf(a,u){v.call(this,Ge.Ja,a),this.size=u}p(rf,v);function di(a,u){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},u)}function pi(){this.g=!0}pi.prototype.ua=function(){this.g=!1};function qT(a,u,d,m,P,O){a.info(function(){if(a.g)if(O){var H="",le=O.split("&");for(let ve=0;ve<le.length;ve++){var ze=le[ve].split("=");if(ze.length>1){const Ke=ze[0];ze=ze[1];const cn=Ke.split("_");H=cn.length>=2&&cn[1]=="type"?H+(Ke+"="+ze+"&"):H+(Ke+"=redacted&")}}}else H=null;else H=O;return"XMLHTTP REQ ("+m+") [attempt "+P+"]: "+u+`
`+d+`
`+H})}function zT(a,u,d,m,P,O,H){a.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+P+"]: "+u+`
`+d+`
`+O+" "+H})}function vs(a,u,d,m){a.info(function(){return"XMLHTTP TEXT ("+u+"): "+GT(a,d)+(m?" "+m:"")})}function WT(a,u){a.info(function(){return"TIMEOUT: "+u})}pi.prototype.info=function(){};function GT(a,u){if(!a.g)return u;if(!u)return null;try{const O=JSON.parse(u);if(O){for(a=0;a<O.length;a++)if(Array.isArray(O[a])){var d=O[a];if(!(d.length<2)){var m=d[1];if(Array.isArray(m)&&!(m.length<1)){var P=m[0];if(P!="noop"&&P!="stop"&&P!="close")for(let H=1;H<m.length;H++)m[H]=""}}}}return ge(O)}catch{return u}}var xo={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},sf={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},of;function $c(){}p($c,Pt),$c.prototype.g=function(){return new XMLHttpRequest},of=new $c;function mi(a){return encodeURIComponent(String(a))}function KT(a){var u=1;a=a.split(":");const d=[];for(;u>0&&a.length;)d.push(a.shift()),u--;return a.length&&d.push(a.join(":")),d}function Zn(a,u,d,m){this.j=a,this.i=u,this.l=d,this.S=m||1,this.V=new Z(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new af}function af(){this.i=null,this.g="",this.h=!1}var cf={},jc={};function Hc(a,u,d){a.M=1,a.A=Mo(an(u)),a.u=d,a.R=!0,lf(a,null)}function lf(a,u){a.F=Date.now(),Lo(a),a.B=an(a.A);var d=a.B,m=a.S;Array.isArray(m)||(m=[String(m)]),If(d.i,"t",m),a.C=0,d=a.j.L,a.h=new af,a.g=Bf(a.j,d?u:null,!a.u),a.P>0&&(a.O=new J(h(a.Y,a,a.g),a.P)),u=a.V,d=a.g,m=a.ba;var P="readystatechange";Array.isArray(P)||(P&&(ue[0]=P.toString()),P=ue);for(let O=0;O<P.length;O++){const H=ui(d,P[O],m||u.handleEvent,!1,u.h||u);if(!H)break;u.g[H.key]=H}u=a.J?on(a.J):{},a.u?(a.v||(a.v="POST"),u["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,u)):(a.v="GET",a.g.ea(a.B,a.v,null,u)),fi(),qT(a.i,a.v,a.B,a.l,a.S,a.u)}Zn.prototype.ba=function(a){a=a.target;const u=this.O;u&&nr(a)==3?u.j():this.Y(a)},Zn.prototype.Y=function(a){try{if(a==this.g)e:{const le=nr(this.g),ze=this.g.ya(),ve=this.g.ca();if(!(le<3)&&(le!=3||this.g&&(this.h.h||this.g.la()||Pf(this.g)))){this.K||le!=4||ze==7||(ze==8||ve<=0?fi(3):fi(2)),qc(this);var u=this.g.ca();this.X=u;var d=QT(this);if(this.o=u==200,zT(this.i,this.v,this.B,this.l,this.S,le,u),this.o){if(this.U&&!this.L){t:{if(this.g){var m,P=this.g;if((m=P.g?P.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!E(m)){var O=m;break t}}O=null}if(a=O)vs(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,zc(this,a);else{this.o=!1,this.m=3,yt(12),xr(this),gi(this);break e}}if(this.R){a=!0;let Ke;for(;!this.K&&this.C<d.length;)if(Ke=YT(this,d),Ke==jc){le==4&&(this.m=4,yt(14),a=!1),vs(this.i,this.l,null,"[Incomplete Response]");break}else if(Ke==cf){this.m=4,yt(15),vs(this.i,this.l,d,"[Invalid Chunk]"),a=!1;break}else vs(this.i,this.l,Ke,null),zc(this,Ke);if(uf(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),le!=4||d.length!=0||this.h.h||(this.m=1,yt(16),a=!1),this.o=this.o&&a,!a)vs(this.i,this.l,d,"[Invalid Chunked Response]"),xr(this),gi(this);else if(d.length>0&&!this.W){this.W=!0;var H=this.j;H.g==this&&H.aa&&!H.P&&(H.j.info("Great, no buffering proxy detected. Bytes received: "+d.length),Zc(H),H.P=!0,yt(11))}}else vs(this.i,this.l,d,null),zc(this,d);le==4&&xr(this),this.o&&!this.K&&(le==4?Lf(this.j,this):(this.o=!1,Lo(this)))}else uw(this.g),u==400&&d.indexOf("Unknown SID")>0?(this.m=3,yt(12)):(this.m=0,yt(13)),xr(this),gi(this)}}}catch{}finally{}};function QT(a){if(!uf(a))return a.g.la();const u=Pf(a.g);if(u==="")return"";let d="";const m=u.length,P=nr(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return xr(a),gi(a),"";a.h.i=new o.TextDecoder}for(let O=0;O<m;O++)a.h.h=!0,d+=a.h.i.decode(u[O],{stream:!(P&&O==m-1)});return u.length=0,a.h.g+=d,a.C=0,a.h.g}function uf(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function YT(a,u){var d=a.C,m=u.indexOf(`
`,d);return m==-1?jc:(d=Number(u.substring(d,m)),isNaN(d)?cf:(m+=1,m+d>u.length?jc:(u=u.slice(m,m+d),a.C=m+d,u)))}Zn.prototype.cancel=function(){this.K=!0,xr(this)};function Lo(a){a.T=Date.now()+a.H,hf(a,a.H)}function hf(a,u){if(a.D!=null)throw Error("WatchDog timer not null");a.D=di(h(a.aa,a),u)}function qc(a){a.D&&(o.clearTimeout(a.D),a.D=null)}Zn.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(WT(this.i,this.B),this.M!=2&&(fi(),yt(17)),xr(this),this.m=2,gi(this)):hf(this,this.T-a)};function gi(a){a.j.I==0||a.K||Lf(a.j,a)}function xr(a){qc(a);var u=a.O;u&&typeof u.dispose=="function"&&u.dispose(),a.O=null,Ie(a.V),a.g&&(u=a.g,a.g=null,u.abort(),u.dispose())}function zc(a,u){try{var d=a.j;if(d.I!=0&&(d.g==a||Wc(d.h,a))){if(!a.L&&Wc(d.h,a)&&d.I==3){try{var m=d.Ba.g.parse(u)}catch{m=null}if(Array.isArray(m)&&m.length==3){var P=m;if(P[0]==0){e:if(!d.v){if(d.g)if(d.g.F+3e3<a.F)jo(d),Bo(d);else break e;Xc(d),yt(18)}}else d.xa=P[1],0<d.xa-d.K&&P[2]<37500&&d.F&&d.A==0&&!d.C&&(d.C=di(h(d.Va,d),6e3));pf(d.h)<=1&&d.ta&&(d.ta=void 0)}else Mr(d,11)}else if((a.L||d.g==a)&&jo(d),!E(u))for(P=d.Ba.g.parse(u),u=0;u<P.length;u++){let ve=P[u];const Ke=ve[0];if(!(Ke<=d.K))if(d.K=Ke,ve=ve[1],d.I==2)if(ve[0]=="c"){d.M=ve[1],d.ba=ve[2];const cn=ve[3];cn!=null&&(d.ka=cn,d.j.info("VER="+d.ka));const Ur=ve[4];Ur!=null&&(d.za=Ur,d.j.info("SVER="+d.za));const rr=ve[5];rr!=null&&typeof rr=="number"&&rr>0&&(m=1.5*rr,d.O=m,d.j.info("backChannelRequestTimeoutMs_="+m)),m=d;const sr=a.g;if(sr){const qo=sr.g?sr.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(qo){var O=m.h;O.g||qo.indexOf("spdy")==-1&&qo.indexOf("quic")==-1&&qo.indexOf("h2")==-1||(O.j=O.l,O.g=new Set,O.h&&(Gc(O,O.h),O.h=null))}if(m.G){const el=sr.g?sr.g.getResponseHeader("X-HTTP-Session-Id"):null;el&&(m.wa=el,Oe(m.J,m.G,el))}}d.I=3,d.l&&d.l.ra(),d.aa&&(d.T=Date.now()-a.F,d.j.info("Handshake RTT: "+d.T+"ms")),m=d;var H=a;if(m.na=Ff(m,m.L?m.ba:null,m.W),H.L){mf(m.h,H);var le=H,ze=m.O;ze&&(le.H=ze),le.D&&(qc(le),Lo(le)),m.g=H}else Vf(m);d.i.length>0&&$o(d)}else ve[0]!="stop"&&ve[0]!="close"||Mr(d,7);else d.I==3&&(ve[0]=="stop"||ve[0]=="close"?ve[0]=="stop"?Mr(d,7):Jc(d):ve[0]!="noop"&&d.l&&d.l.qa(ve),d.A=0)}}fi(4)}catch{}}var JT=class{constructor(a,u){this.g=a,this.map=u}};function ff(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function df(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function pf(a){return a.h?1:a.g?a.g.size:0}function Wc(a,u){return a.h?a.h==u:a.g?a.g.has(u):!1}function Gc(a,u){a.g?a.g.add(u):a.h=u}function mf(a,u){a.h&&a.h==u?a.h=null:a.g&&a.g.has(u)&&a.g.delete(u)}ff.prototype.cancel=function(){if(this.i=gf(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function gf(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let u=a.i;for(const d of a.g.values())u=u.concat(d.G);return u}return I(a.i)}var _f=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function XT(a,u){if(a){a=a.split("&");for(let d=0;d<a.length;d++){const m=a[d].indexOf("=");let P,O=null;m>=0?(P=a[d].substring(0,m),O=a[d].substring(m+1)):P=a[d],u(P,O?decodeURIComponent(O.replace(/\+/g," ")):"")}}}function er(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let u;a instanceof er?(this.l=a.l,_i(this,a.j),this.o=a.o,this.g=a.g,yi(this,a.u),this.h=a.h,Kc(this,vf(a.i)),this.m=a.m):a&&(u=String(a).match(_f))?(this.l=!1,_i(this,u[1]||"",!0),this.o=Ei(u[2]||""),this.g=Ei(u[3]||"",!0),yi(this,u[4]),this.h=Ei(u[5]||"",!0),Kc(this,u[6]||"",!0),this.m=Ei(u[7]||"")):(this.l=!1,this.i=new wi(null,this.l))}er.prototype.toString=function(){const a=[];var u=this.j;u&&a.push(Ti(u,yf,!0),":");var d=this.g;return(d||u=="file")&&(a.push("//"),(u=this.o)&&a.push(Ti(u,yf,!0),"@"),a.push(mi(d).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.u,d!=null&&a.push(":",String(d))),(d=this.h)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(Ti(d,d.charAt(0)=="/"?tw:ew,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",Ti(d,rw)),a.join("")},er.prototype.resolve=function(a){const u=an(this);let d=!!a.j;d?_i(u,a.j):d=!!a.o,d?u.o=a.o:d=!!a.g,d?u.g=a.g:d=a.u!=null;var m=a.h;if(d)yi(u,a.u);else if(d=!!a.h){if(m.charAt(0)!="/")if(this.g&&!this.h)m="/"+m;else{var P=u.h.lastIndexOf("/");P!=-1&&(m=u.h.slice(0,P+1)+m)}if(P=m,P==".."||P==".")m="";else if(P.indexOf("./")!=-1||P.indexOf("/.")!=-1){m=P.lastIndexOf("/",0)==0,P=P.split("/");const O=[];for(let H=0;H<P.length;){const le=P[H++];le=="."?m&&H==P.length&&O.push(""):le==".."?((O.length>1||O.length==1&&O[0]!="")&&O.pop(),m&&H==P.length&&O.push("")):(O.push(le),m=!0)}m=O.join("/")}else m=P}return d?u.h=m:d=a.i.toString()!=="",d?Kc(u,vf(a.i)):d=!!a.m,d&&(u.m=a.m),u};function an(a){return new er(a)}function _i(a,u,d){a.j=d?Ei(u,!0):u,a.j&&(a.j=a.j.replace(/:$/,""))}function yi(a,u){if(u){if(u=Number(u),isNaN(u)||u<0)throw Error("Bad port number "+u);a.u=u}else a.u=null}function Kc(a,u,d){u instanceof wi?(a.i=u,sw(a.i,a.l)):(d||(u=Ti(u,nw)),a.i=new wi(u,a.l))}function Oe(a,u,d){a.i.set(u,d)}function Mo(a){return Oe(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function Ei(a,u){return a?u?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Ti(a,u,d){return typeof a=="string"?(a=encodeURI(a).replace(u,ZT),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function ZT(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var yf=/[#\/\?@]/g,ew=/[#\?:]/g,tw=/[#\?]/g,nw=/[#\?@]/g,rw=/#/g;function wi(a,u){this.h=this.g=null,this.i=a||null,this.j=!!u}function Lr(a){a.g||(a.g=new Map,a.h=0,a.i&&XT(a.i,function(u,d){a.add(decodeURIComponent(u.replace(/\+/g," ")),d)}))}t=wi.prototype,t.add=function(a,u){Lr(this),this.i=null,a=As(this,a);let d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(u),this.h+=1,this};function Ef(a,u){Lr(a),u=As(a,u),a.g.has(u)&&(a.i=null,a.h-=a.g.get(u).length,a.g.delete(u))}function Tf(a,u){return Lr(a),u=As(a,u),a.g.has(u)}t.forEach=function(a,u){Lr(this),this.g.forEach(function(d,m){d.forEach(function(P){a.call(u,P,m,this)},this)},this)};function wf(a,u){Lr(a);let d=[];if(typeof u=="string")Tf(a,u)&&(d=d.concat(a.g.get(As(a,u))));else for(a=Array.from(a.g.values()),u=0;u<a.length;u++)d=d.concat(a[u]);return d}t.set=function(a,u){return Lr(this),this.i=null,a=As(this,a),Tf(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[u]),this.h+=1,this},t.get=function(a,u){return a?(a=wf(this,a),a.length>0?String(a[0]):u):u};function If(a,u,d){Ef(a,u),d.length>0&&(a.i=null,a.g.set(As(a,u),I(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],u=Array.from(this.g.keys());for(let m=0;m<u.length;m++){var d=u[m];const P=mi(d);d=wf(this,d);for(let O=0;O<d.length;O++){let H=P;d[O]!==""&&(H+="="+mi(d[O])),a.push(H)}}return this.i=a.join("&")};function vf(a){const u=new wi;return u.i=a.i,a.g&&(u.g=new Map(a.g),u.h=a.h),u}function As(a,u){return u=String(u),a.j&&(u=u.toLowerCase()),u}function sw(a,u){u&&!a.j&&(Lr(a),a.i=null,a.g.forEach(function(d,m){const P=m.toLowerCase();m!=P&&(Ef(this,m),If(this,P,d))},a)),a.j=u}function iw(a,u){const d=new pi;if(o.Image){const m=new Image;m.onload=f(tr,d,"TestLoadImage: loaded",!0,u,m),m.onerror=f(tr,d,"TestLoadImage: error",!1,u,m),m.onabort=f(tr,d,"TestLoadImage: abort",!1,u,m),m.ontimeout=f(tr,d,"TestLoadImage: timeout",!1,u,m),o.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=a}else u(!1)}function ow(a,u){const d=new pi,m=new AbortController,P=setTimeout(()=>{m.abort(),tr(d,"TestPingServer: timeout",!1,u)},1e4);fetch(a,{signal:m.signal}).then(O=>{clearTimeout(P),O.ok?tr(d,"TestPingServer: ok",!0,u):tr(d,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(P),tr(d,"TestPingServer: error",!1,u)})}function tr(a,u,d,m,P){try{P&&(P.onload=null,P.onerror=null,P.onabort=null,P.ontimeout=null),m(d)}catch{}}function aw(){this.g=new lt}function Qc(a){this.i=a.Sb||null,this.h=a.ab||!1}p(Qc,Pt),Qc.prototype.g=function(){return new Uo(this.i,this.h)};function Uo(a,u){B.call(this),this.H=a,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}p(Uo,B),t=Uo.prototype,t.open=function(a,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=u,this.readyState=1,vi(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const u={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(u.body=a),(this.H||o).fetch(new Request(this.D,u)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Ii(this)),this.readyState=0},t.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,vi(this)),this.g&&(this.readyState=3,vi(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Af(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function Af(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}t.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var u=a.value?a.value:new Uint8Array(0);(u=this.B.decode(u,{stream:!a.done}))&&(this.response=this.responseText+=u)}a.done?Ii(this):vi(this),this.readyState==3&&Af(this)}},t.Oa=function(a){this.g&&(this.response=this.responseText=a,Ii(this))},t.Na=function(a){this.g&&(this.response=a,Ii(this))},t.ga=function(){this.g&&Ii(this)};function Ii(a){a.readyState=4,a.l=null,a.j=null,a.B=null,vi(a)}t.setRequestHeader=function(a,u){this.A.append(a,u)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],u=this.h.entries();for(var d=u.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=u.next();return a.join(`\r
`)};function vi(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Uo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function bf(a){let u="";return xt(a,function(d,m){u+=m,u+=":",u+=d,u+=`\r
`}),u}function Yc(a,u,d){e:{for(m in d){var m=!1;break e}m=!0}m||(d=bf(d),typeof a=="string"?d!=null&&mi(d):Oe(a,u,d))}function Le(a){B.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}p(Le,B);var cw=/^https?$/i,lw=["POST","PUT"];t=Le.prototype,t.Fa=function(a){this.H=a},t.ea=function(a,u,d,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);u=u?u.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():of.g(),this.g.onreadystatechange=g(h(this.Ca,this));try{this.B=!0,this.g.open(u,String(a),!0),this.B=!1}catch(O){Sf(this,O);return}if(a=d||"",d=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var P in m)d.set(P,m[P]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const O of m.keys())d.set(O,m.get(O));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(d.keys()).find(O=>O.toLowerCase()=="content-type"),P=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(lw,u,void 0)>=0)||m||P||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[O,H]of d)this.g.setRequestHeader(O,H);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(O){Sf(this,O)}};function Sf(a,u){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=u,a.o=5,Rf(a),Fo(a)}function Rf(a){a.A||(a.A=!0,F(a,"complete"),F(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,F(this,"complete"),F(this,"abort"),Fo(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Fo(this,!0)),Le.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?Cf(this):this.Xa())},t.Xa=function(){Cf(this)};function Cf(a){if(a.h&&typeof i<"u"){if(a.v&&nr(a)==4)setTimeout(a.Ca.bind(a),0);else if(F(a,"readystatechange"),nr(a)==4){a.h=!1;try{const O=a.ca();e:switch(O){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var d;if(!(d=u)){var m;if(m=O===0){let H=String(a.D).match(_f)[1]||null;!H&&o.self&&o.self.location&&(H=o.self.location.protocol.slice(0,-1)),m=!cw.test(H?H.toLowerCase():"")}d=m}if(d)F(a,"complete"),F(a,"success");else{a.o=6;try{var P=nr(a)>2?a.g.statusText:""}catch{P=""}a.l=P+" ["+a.ca()+"]",Rf(a)}}finally{Fo(a)}}}}function Fo(a,u){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const d=a.g;a.g=null,u||F(a,"ready");try{d.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function nr(a){return a.g?a.g.readyState:0}t.ca=function(){try{return nr(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(a){if(this.g){var u=this.g.responseText;return a&&u.indexOf(a)==0&&(u=u.substring(a.length)),ct(u)}};function Pf(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function uw(a){const u={};a=(a.g&&nr(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<a.length;m++){if(E(a[m]))continue;var d=KT(a[m]);const P=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const O=u[P]||[];u[P]=O,O.push(d)}Ts(u,function(m){return m.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ai(a,u,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||u}function Nf(a){this.za=0,this.i=[],this.j=new pi,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Ai("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Ai("baseRetryDelayMs",5e3,a),this.Za=Ai("retryDelaySeedMs",1e4,a),this.Ta=Ai("forwardChannelMaxRetries",2,a),this.va=Ai("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new ff(a&&a.concurrentRequestLimit),this.Ba=new aw,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=Nf.prototype,t.ka=8,t.I=1,t.connect=function(a,u,d,m){yt(0),this.W=a,this.H=u||{},d&&m!==void 0&&(this.H.OSID=d,this.H.OAID=m),this.F=this.X,this.J=Ff(this,null,this.W),$o(this)};function Jc(a){if(Of(a),a.I==3){var u=a.V++,d=an(a.J);if(Oe(d,"SID",a.M),Oe(d,"RID",u),Oe(d,"TYPE","terminate"),bi(a,d),u=new Zn(a,a.j,u),u.M=2,u.A=Mo(an(d)),d=!1,o.navigator&&o.navigator.sendBeacon)try{d=o.navigator.sendBeacon(u.A.toString(),"")}catch{}!d&&o.Image&&(new Image().src=u.A,d=!0),d||(u.g=Bf(u.j,null),u.g.ea(u.A)),u.F=Date.now(),Lo(u)}Uf(a)}function Bo(a){a.g&&(Zc(a),a.g.cancel(),a.g=null)}function Of(a){Bo(a),a.v&&(o.clearTimeout(a.v),a.v=null),jo(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function $o(a){if(!df(a.h)&&!a.m){a.m=!0;var u=a.Ea;ee||y(),ie||(ee(),ie=!0),b.add(u,a),a.D=0}}function hw(a,u){return pf(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=u.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=di(h(a.Ea,a,u),Mf(a,a.D)),a.D++,!0)}t.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const P=new Zn(this,this.j,a);let O=this.o;if(this.U&&(O?(O=on(O),ci(O,this.U)):O=this.U),this.u!==null||this.R||(P.J=O,O=null),this.S)e:{for(var u=0,d=0;d<this.i.length;d++){t:{var m=this.i[d];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(u+=m,u>4096){u=d;break e}if(u===4096||d===this.i.length-1){u=d+1;break e}}u=1e3}else u=1e3;u=Df(this,P,u),d=an(this.J),Oe(d,"RID",a),Oe(d,"CVER",22),this.G&&Oe(d,"X-HTTP-Session-Id",this.G),bi(this,d),O&&(this.R?u="headers="+mi(bf(O))+"&"+u:this.u&&Yc(d,this.u,O)),Gc(this.h,P),this.Ra&&Oe(d,"TYPE","init"),this.S?(Oe(d,"$req",u),Oe(d,"SID","null"),P.U=!0,Hc(P,d,null)):Hc(P,d,u),this.I=2}}else this.I==3&&(a?kf(this,a):this.i.length==0||df(this.h)||kf(this))};function kf(a,u){var d;u?d=u.l:d=a.V++;const m=an(a.J);Oe(m,"SID",a.M),Oe(m,"RID",d),Oe(m,"AID",a.K),bi(a,m),a.u&&a.o&&Yc(m,a.u,a.o),d=new Zn(a,a.j,d,a.D+1),a.u===null&&(d.J=a.o),u&&(a.i=u.G.concat(a.i)),u=Df(a,d,1e3),d.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),Gc(a.h,d),Hc(d,m,u)}function bi(a,u){a.H&&xt(a.H,function(d,m){Oe(u,m,d)}),a.l&&xt({},function(d,m){Oe(u,m,d)})}function Df(a,u,d){d=Math.min(a.i.length,d);const m=a.l?h(a.l.Ka,a.l,a):null;e:{var P=a.i;let le=-1;for(;;){const ze=["count="+d];le==-1?d>0?(le=P[0].g,ze.push("ofs="+le)):le=0:ze.push("ofs="+le);let ve=!0;for(let Ke=0;Ke<d;Ke++){var O=P[Ke].g;const cn=P[Ke].map;if(O-=le,O<0)le=Math.max(0,P[Ke].g-100),ve=!1;else try{O="req"+O+"_"||"";try{var H=cn instanceof Map?cn:Object.entries(cn);for(const[Ur,rr]of H){let sr=rr;c(rr)&&(sr=ge(rr)),ze.push(O+Ur+"="+encodeURIComponent(sr))}}catch(Ur){throw ze.push(O+"type="+encodeURIComponent("_badmap")),Ur}}catch{m&&m(cn)}}if(ve){H=ze.join("&");break e}}H=void 0}return a=a.i.splice(0,d),u.G=a,H}function Vf(a){if(!a.g&&!a.v){a.Y=1;var u=a.Da;ee||y(),ie||(ee(),ie=!0),b.add(u,a),a.A=0}}function Xc(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=di(h(a.Da,a),Mf(a,a.A)),a.A++,!0)}t.Da=function(){if(this.v=null,xf(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=di(h(this.Wa,this),a)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,yt(10),Bo(this),xf(this))};function Zc(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function xf(a){a.g=new Zn(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var u=an(a.na);Oe(u,"RID","rpc"),Oe(u,"SID",a.M),Oe(u,"AID",a.K),Oe(u,"CI",a.F?"0":"1"),!a.F&&a.ia&&Oe(u,"TO",a.ia),Oe(u,"TYPE","xmlhttp"),bi(a,u),a.u&&a.o&&Yc(u,a.u,a.o),a.O&&(a.g.H=a.O);var d=a.g;a=a.ba,d.M=1,d.A=Mo(an(u)),d.u=null,d.R=!0,lf(d,a)}t.Va=function(){this.C!=null&&(this.C=null,Bo(this),Xc(this),yt(19))};function jo(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function Lf(a,u){var d=null;if(a.g==u){jo(a),Zc(a),a.g=null;var m=2}else if(Wc(a.h,u))d=u.G,mf(a.h,u),m=1;else return;if(a.I!=0){if(u.o)if(m==1){d=u.u?u.u.length:0,u=Date.now()-u.F;var P=a.D;m=Vr(),F(m,new rf(m,d)),$o(a)}else Vf(a);else if(P=u.m,P==3||P==0&&u.X>0||!(m==1&&hw(a,u)||m==2&&Xc(a)))switch(d&&d.length>0&&(u=a.h,u.i=u.i.concat(d)),P){case 1:Mr(a,5);break;case 4:Mr(a,10);break;case 3:Mr(a,6);break;default:Mr(a,2)}}}function Mf(a,u){let d=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(d*=2),d*u}function Mr(a,u){if(a.j.info("Error code "+u),u==2){var d=h(a.bb,a),m=a.Ua;const P=!m;m=new er(m||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||_i(m,"https"),Mo(m),P?iw(m.toString(),d):ow(m.toString(),d)}else yt(2);a.I=0,a.l&&a.l.pa(u),Uf(a),Of(a)}t.bb=function(a){a?(this.j.info("Successfully pinged google.com"),yt(2)):(this.j.info("Failed to ping google.com"),yt(1))};function Uf(a){if(a.I=0,a.ja=[],a.l){const u=gf(a.h);(u.length!=0||a.i.length!=0)&&(C(a.ja,u),C(a.ja,a.i),a.h.i.length=0,I(a.i),a.i.length=0),a.l.oa()}}function Ff(a,u,d){var m=d instanceof er?an(d):new er(d);if(m.g!="")u&&(m.g=u+"."+m.g),yi(m,m.u);else{var P=o.location;m=P.protocol,u=u?u+"."+P.hostname:P.hostname,P=+P.port;const O=new er(null);m&&_i(O,m),u&&(O.g=u),P&&yi(O,P),d&&(O.h=d),m=O}return d=a.G,u=a.wa,d&&u&&Oe(m,d,u),Oe(m,"VER",a.ka),bi(a,m),m}function Bf(a,u,d){if(u&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return u=a.Aa&&!a.ma?new Le(new Qc({ab:d})):new Le(a.ma),u.Fa(a.L),u}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function $f(){}t=$f.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function Ho(){}Ho.prototype.g=function(a,u){return new Ot(a,u)};function Ot(a,u){B.call(this),this.g=new Nf(u),this.l=a,this.h=u&&u.messageUrlParams||null,a=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(a?a["X-WebChannel-Content-Type"]=u.messageContentType:a={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.sa&&(a?a["X-WebChannel-Client-Profile"]=u.sa:a={"X-WebChannel-Client-Profile":u.sa}),this.g.U=a,(a=u&&u.Qb)&&!E(a)&&(this.g.u=a),this.A=u&&u.supportsCrossDomainXhr||!1,this.v=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!E(u)&&(this.g.G=u,a=this.h,a!==null&&u in a&&(a=this.h,u in a&&delete a[u])),this.j=new bs(this)}p(Ot,B),Ot.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Ot.prototype.close=function(){Jc(this.g)},Ot.prototype.o=function(a){var u=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.v&&(d={},d.__data__=ge(a),a=d);u.i.push(new JT(u.Ya++,a)),u.I==3&&$o(u)},Ot.prototype.N=function(){this.g.l=null,delete this.j,Jc(this.g),delete this.g,Ot.Z.N.call(this)};function jf(a){Is.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var u=a.__sm__;if(u){e:{for(const d in u){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,u=u!==null&&a in u?u[a]:void 0),this.data=u}else this.data=a}p(jf,Is);function Hf(){Xe.call(this),this.status=1}p(Hf,Xe);function bs(a){this.g=a}p(bs,$f),bs.prototype.ra=function(){F(this.g,"a")},bs.prototype.qa=function(a){F(this.g,new jf(a))},bs.prototype.pa=function(a){F(this.g,new Hf)},bs.prototype.oa=function(){F(this.g,"b")},Ho.prototype.createWebChannel=Ho.prototype.g,Ot.prototype.send=Ot.prototype.o,Ot.prototype.open=Ot.prototype.m,Ot.prototype.close=Ot.prototype.close,i_=function(){return new Ho},s_=function(){return Vr()},r_=Ge,Bl={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},xo.NO_ERROR=0,xo.TIMEOUT=8,xo.HTTP_ERROR=6,ua=xo,sf.COMPLETE="complete",n_=sf,Nt.EventType=qt,qt.OPEN="a",qt.CLOSE="b",qt.ERROR="c",qt.MESSAGE="d",B.prototype.listen=B.prototype.J,Di=Nt,Le.prototype.listenOnce=Le.prototype.K,Le.prototype.getLastError=Le.prototype.Ha,Le.prototype.getLastErrorCode=Le.prototype.ya,Le.prototype.getStatus=Le.prototype.ca,Le.prototype.getResponseJson=Le.prototype.La,Le.prototype.getResponseText=Le.prototype.la,Le.prototype.send=Le.prototype.ea,Le.prototype.setWithCredentials=Le.prototype.Fa,t_=Le}).apply(typeof Wo<"u"?Wo:typeof self<"u"?self:typeof window<"u"?window:{});const wd="@firebase/firestore",Id="4.9.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}dt.UNAUTHENTICATED=new dt(null),dt.GOOGLE_CREDENTIALS=new dt("google-credentials-uid"),dt.FIRST_PARTY=new dt("first-party-uid"),dt.MOCK_USER=new dt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ni="12.3.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ts=new vu("@firebase/firestore");function Rs(){return ts.logLevel}function Q(t,...e){if(ts.logLevel<=he.DEBUG){const n=e.map(xu);ts.debug(`Firestore (${ni}): ${t}`,...n)}}function Hn(t,...e){if(ts.logLevel<=he.ERROR){const n=e.map(xu);ts.error(`Firestore (${ni}): ${t}`,...n)}}function Gs(t,...e){if(ts.logLevel<=he.WARN){const n=e.map(xu);ts.warn(`Firestore (${ni}): ${t}`,...n)}}function xu(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ne(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,o_(t,r,n)}function o_(t,e,n){let r=`FIRESTORE (${ni}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw Hn(r),new Error(r)}function we(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||o_(e,s,r)}function ce(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class K extends nn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a_{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class KA{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(dt.UNAUTHENTICATED))}shutdown(){}}class QA{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class YA{constructor(e){this.t=e,this.currentUser=dt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){we(this.o===void 0,42304);let r=this.i;const s=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let i=new gr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new gr,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},c=l=>{Q("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(l=>c(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(Q("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new gr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(Q("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(we(typeof r.accessToken=="string",31837,{l:r}),new a_(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return we(e===null||typeof e=="string",2055,{h:e}),new dt(e)}}class JA{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=dt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class XA{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new JA(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(dt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class vd{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ZA{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,tt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){we(this.o===void 0,3512);const r=i=>{i.error!=null&&Q("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,Q("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{Q("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):Q("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new vd(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(we(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new vd(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eb(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lu{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=eb(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function fe(t,e){return t<e?-1:t>e?1:0}function $l(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const s=t.charAt(r),i=e.charAt(r);if(s!==i)return cl(s)===cl(i)?fe(s,i):cl(s)?1:-1}return fe(t.length,e.length)}const tb=55296,nb=57343;function cl(t){const e=t.charCodeAt(0);return e>=tb&&e<=nb}function Ks(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ad="__name__";class hn{constructor(e,n,r){n===void 0?n=0:n>e.length&&ne(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&ne(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return hn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof hn?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=hn.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return fe(e.length,n.length)}static compareSegments(e,n){const r=hn.isNumericId(e),s=hn.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?hn.extractNumericId(e).compare(hn.extractNumericId(n)):$l(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return mr.fromString(e.substring(4,e.length-2))}}class Ce extends hn{construct(e,n,r){return new Ce(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new K(D.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Ce(n)}static emptyPath(){return new Ce([])}}const rb=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class nt extends hn{construct(e,n,r){return new nt(e,n,r)}static isValidIdentifier(e){return rb.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),nt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Ad}static keyField(){return new nt([Ad])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new K(D.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new K(D.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new K(D.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else c==="`"?(o=!o,s++):c!=="."||o?(r+=c,s++):(i(),s++)}if(i(),o)throw new K(D.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new nt(n)}static emptyPath(){return new nt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(e){this.path=e}static fromPath(e){return new Y(Ce.fromString(e))}static fromName(e){return new Y(Ce.fromString(e).popFirst(5))}static empty(){return new Y(Ce.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ce.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ce.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Y(new Ce(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c_(t,e,n){if(!n)throw new K(D.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function sb(t,e,n,r){if(e===!0&&r===!0)throw new K(D.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function bd(t){if(!Y.isDocumentKey(t))throw new K(D.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Sd(t){if(Y.isDocumentKey(t))throw new K(D.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function l_(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function uc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ne(12329,{type:typeof t})}function Un(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new K(D.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=uc(t);throw new K(D.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qe(t,e){const n={typeString:t};return e&&(n.value=e),n}function So(t,e){if(!l_(t))throw new K(D.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(s&&typeof o!==s){n=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){n=`Expected '${r}' field to equal '${i.value}'`;break}}if(n)throw new K(D.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rd=-62135596800,Cd=1e6;class ke{static now(){return ke.fromMillis(Date.now())}static fromDate(e){return ke.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*Cd);return new ke(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new K(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new K(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<Rd)throw new K(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new K(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Cd}_compareTo(e){return this.seconds===e.seconds?fe(this.nanoseconds,e.nanoseconds):fe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ke._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(So(e,ke._jsonSchema))return new ke(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Rd;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ke._jsonSchemaVersion="firestore/timestamp/1.0",ke._jsonSchema={type:qe("string",ke._jsonSchemaVersion),seconds:qe("number"),nanoseconds:qe("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe{static fromTimestamp(e){return new oe(e)}static min(){return new oe(new ke(0,0))}static max(){return new oe(new ke(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const to=-1;function ib(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=oe.fromTimestamp(r===1e9?new ke(n+1,0):new ke(n,r));return new Ir(s,Y.empty(),e)}function ob(t){return new Ir(t.readTime,t.key,to)}class Ir{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Ir(oe.min(),Y.empty(),to)}static max(){return new Ir(oe.max(),Y.empty(),to)}}function ab(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=Y.comparator(t.documentKey,e.documentKey),n!==0?n:fe(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cb="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class lb{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ri(t){if(t.code!==D.FAILED_PRECONDITION||t.message!==cb)throw t;Q("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ne(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new x((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof x?n:x.resolve(n)}catch(n){return x.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):x.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):x.reject(n)}static resolve(e){return new x((n,r)=>{n(e)})}static reject(e){return new x((n,r)=>{r(e)})}static waitFor(e){return new x((n,r)=>{let s=0,i=0,o=!1;e.forEach(c=>{++s,c.next(()=>{++i,o&&i===s&&n()},l=>r(l))}),o=!0,i===s&&n()})}static or(e){let n=x.resolve(!1);for(const r of e)n=n.next(s=>s?x.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new x((r,s)=>{const i=e.length,o=new Array(i);let c=0;for(let l=0;l<i;l++){const h=l;n(e[h]).next(f=>{o[h]=f,++c,c===i&&r(o)},f=>s(f))}})}static doWhile(e,n){return new x((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function ub(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function si(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hc{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}hc.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mu=-1;function fc(t){return t==null}function Ca(t){return t===0&&1/t==-1/0}function hb(t){return typeof t=="number"&&Number.isInteger(t)&&!Ca(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u_="";function fb(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Pd(e)),e=db(t.get(n),e);return Pd(e)}function db(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case u_:n+="";break;default:n+=i}}return n}function Pd(t){return t+u_+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nd(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function fs(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function h_(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe{constructor(e,n){this.comparator=e,this.root=n||Ze.EMPTY}insert(e,n){return new xe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ze.BLACK,null,null))}remove(e){return new xe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ze.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Go(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Go(this.root,e,this.comparator,!1)}getReverseIterator(){return new Go(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Go(this.root,e,this.comparator,!0)}}class Go{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ze{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??Ze.RED,this.left=s??Ze.EMPTY,this.right=i??Ze.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new Ze(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Ze.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return Ze.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ze.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ze.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ne(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ne(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw ne(27949);return e+(this.isRed()?0:1)}}Ze.EMPTY=null,Ze.RED=!0,Ze.BLACK=!1;Ze.EMPTY=new class{constructor(){this.size=0}get key(){throw ne(57766)}get value(){throw ne(16141)}get color(){throw ne(16727)}get left(){throw ne(29726)}get right(){throw ne(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new Ze(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We{constructor(e){this.comparator=e,this.data=new xe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Od(this.data.getIterator())}getIteratorFrom(e){return new Od(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof We)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new We(this.comparator);return n.data=e,n}}class Od{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt{constructor(e){this.fields=e,e.sort(nt.comparator)}static empty(){return new Kt([])}unionWith(e){let n=new We(nt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Kt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ks(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f_ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new f_("Invalid base64 string: "+i):i}}(e);return new at(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new at(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return fe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}at.EMPTY_BYTE_STRING=new at("");const pb=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function vr(t){if(we(!!t,39018),typeof t=="string"){let e=0;const n=pb.exec(t);if(we(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Fe(t.seconds),nanos:Fe(t.nanos)}}function Fe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Ar(t){return typeof t=="string"?at.fromBase64String(t):at.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d_="server_timestamp",p_="__type__",m_="__previous_value__",g_="__local_write_time__";function Uu(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[p_])==null?void 0:r.stringValue)===d_}function dc(t){const e=t.mapValue.fields[m_];return Uu(e)?dc(e):e}function no(t){const e=vr(t.mapValue.fields[g_].timestampValue);return new ke(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mb{constructor(e,n,r,s,i,o,c,l,h,f){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=h,this.isUsingEmulator=f}}const Pa="(default)";class ro{constructor(e,n){this.projectId=e,this.database=n||Pa}static empty(){return new ro("","")}get isDefaultDatabase(){return this.database===Pa}isEqual(e){return e instanceof ro&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const __="__type__",gb="__max__",Ko={mapValue:{}},y_="__vector__",Na="value";function br(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Uu(t)?4:yb(t)?9007199254740991:_b(t)?10:11:ne(28295,{value:t})}function vn(t,e){if(t===e)return!0;const n=br(t);if(n!==br(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return no(t).isEqual(no(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=vr(s.timestampValue),c=vr(i.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Ar(s.bytesValue).isEqual(Ar(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Fe(s.geoPointValue.latitude)===Fe(i.geoPointValue.latitude)&&Fe(s.geoPointValue.longitude)===Fe(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Fe(s.integerValue)===Fe(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Fe(s.doubleValue),c=Fe(i.doubleValue);return o===c?Ca(o)===Ca(c):isNaN(o)&&isNaN(c)}return!1}(t,e);case 9:return Ks(t.arrayValue.values||[],e.arrayValue.values||[],vn);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},c=i.mapValue.fields||{};if(Nd(o)!==Nd(c))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(c[l]===void 0||!vn(o[l],c[l])))return!1;return!0}(t,e);default:return ne(52216,{left:t})}}function so(t,e){return(t.values||[]).find(n=>vn(n,e))!==void 0}function Qs(t,e){if(t===e)return 0;const n=br(t),r=br(e);if(n!==r)return fe(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return fe(t.booleanValue,e.booleanValue);case 2:return function(i,o){const c=Fe(i.integerValue||i.doubleValue),l=Fe(o.integerValue||o.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1}(t,e);case 3:return kd(t.timestampValue,e.timestampValue);case 4:return kd(no(t),no(e));case 5:return $l(t.stringValue,e.stringValue);case 6:return function(i,o){const c=Ar(i),l=Ar(o);return c.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const c=i.split("/"),l=o.split("/");for(let h=0;h<c.length&&h<l.length;h++){const f=fe(c[h],l[h]);if(f!==0)return f}return fe(c.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const c=fe(Fe(i.latitude),Fe(o.latitude));return c!==0?c:fe(Fe(i.longitude),Fe(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Dd(t.arrayValue,e.arrayValue);case 10:return function(i,o){var g,I,C,R;const c=i.fields||{},l=o.fields||{},h=(g=c[Na])==null?void 0:g.arrayValue,f=(I=l[Na])==null?void 0:I.arrayValue,p=fe(((C=h==null?void 0:h.values)==null?void 0:C.length)||0,((R=f==null?void 0:f.values)==null?void 0:R.length)||0);return p!==0?p:Dd(h,f)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===Ko.mapValue&&o===Ko.mapValue)return 0;if(i===Ko.mapValue)return 1;if(o===Ko.mapValue)return-1;const c=i.fields||{},l=Object.keys(c),h=o.fields||{},f=Object.keys(h);l.sort(),f.sort();for(let p=0;p<l.length&&p<f.length;++p){const g=$l(l[p],f[p]);if(g!==0)return g;const I=Qs(c[l[p]],h[f[p]]);if(I!==0)return I}return fe(l.length,f.length)}(t.mapValue,e.mapValue);default:throw ne(23264,{he:n})}}function kd(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return fe(t,e);const n=vr(t),r=vr(e),s=fe(n.seconds,r.seconds);return s!==0?s:fe(n.nanos,r.nanos)}function Dd(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=Qs(n[s],r[s]);if(i)return i}return fe(n.length,r.length)}function Ys(t){return jl(t)}function jl(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=vr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Ar(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return Y.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=jl(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${jl(n.fields[o])}`;return s+"}"}(t.mapValue):ne(61005,{value:t})}function ha(t){switch(br(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=dc(t);return e?16+ha(e):16;case 5:return 2*t.stringValue.length;case 6:return Ar(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+ha(i),0)}(t.arrayValue);case 10:case 11:return function(r){let s=0;return fs(r.fields,(i,o)=>{s+=i.length+ha(o)}),s}(t.mapValue);default:throw ne(13486,{value:t})}}function Vd(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Hl(t){return!!t&&"integerValue"in t}function Fu(t){return!!t&&"arrayValue"in t}function xd(t){return!!t&&"nullValue"in t}function Ld(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function fa(t){return!!t&&"mapValue"in t}function _b(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[__])==null?void 0:r.stringValue)===y_}function $i(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return fs(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=$i(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=$i(t.arrayValue.values[n]);return e}return{...t}}function yb(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===gb}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(e){this.value=e}static empty(){return new Mt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!fa(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=$i(n)}setAll(e){let n=nt.emptyPath(),r={},s=[];e.forEach((o,c)=>{if(!n.isImmediateParentOf(c)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=c.popLast()}o?r[c.lastSegment()]=$i(o):s.push(c.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());fa(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return vn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];fa(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){fs(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Mt($i(this.value))}}function E_(t){const e=[];return fs(t.fields,(n,r)=>{const s=new nt([n]);if(fa(r)){const i=E_(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Kt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(e,n,r,s,i,o,c){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=c}static newInvalidDocument(e){return new pt(e,0,oe.min(),oe.min(),oe.min(),Mt.empty(),0)}static newFoundDocument(e,n,r,s){return new pt(e,1,n,oe.min(),r,s,0)}static newNoDocument(e,n){return new pt(e,2,n,oe.min(),oe.min(),Mt.empty(),0)}static newUnknownDocument(e,n){return new pt(e,3,n,oe.min(),oe.min(),Mt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(oe.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Mt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Mt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=oe.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof pt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new pt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oa{constructor(e,n){this.position=e,this.inclusive=n}}function Md(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=Y.comparator(Y.fromName(o.referenceValue),n.key):r=Qs(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Ud(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!vn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class io{constructor(e,n="asc"){this.field=e,this.dir=n}}function Eb(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T_{}class He extends T_{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new wb(e,n,r):n==="array-contains"?new Ab(e,r):n==="in"?new bb(e,r):n==="not-in"?new Sb(e,r):n==="array-contains-any"?new Rb(e,r):new He(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new Ib(e,r):new vb(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(Qs(n,this.value)):n!==null&&br(this.value)===br(n)&&this.matchesComparison(Qs(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ne(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class en extends T_{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new en(e,n)}matches(e){return w_(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function w_(t){return t.op==="and"}function I_(t){return Tb(t)&&w_(t)}function Tb(t){for(const e of t.filters)if(e instanceof en)return!1;return!0}function ql(t){if(t instanceof He)return t.field.canonicalString()+t.op.toString()+Ys(t.value);if(I_(t))return t.filters.map(e=>ql(e)).join(",");{const e=t.filters.map(n=>ql(n)).join(",");return`${t.op}(${e})`}}function v_(t,e){return t instanceof He?function(r,s){return s instanceof He&&r.op===s.op&&r.field.isEqual(s.field)&&vn(r.value,s.value)}(t,e):t instanceof en?function(r,s){return s instanceof en&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,c)=>i&&v_(o,s.filters[c]),!0):!1}(t,e):void ne(19439)}function A_(t){return t instanceof He?function(n){return`${n.field.canonicalString()} ${n.op} ${Ys(n.value)}`}(t):t instanceof en?function(n){return n.op.toString()+" {"+n.getFilters().map(A_).join(" ,")+"}"}(t):"Filter"}class wb extends He{constructor(e,n,r){super(e,n,r),this.key=Y.fromName(r.referenceValue)}matches(e){const n=Y.comparator(e.key,this.key);return this.matchesComparison(n)}}class Ib extends He{constructor(e,n){super(e,"in",n),this.keys=b_("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class vb extends He{constructor(e,n){super(e,"not-in",n),this.keys=b_("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function b_(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map(r=>Y.fromName(r.referenceValue))}class Ab extends He{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Fu(n)&&so(n.arrayValue,this.value)}}class bb extends He{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&so(this.value.arrayValue,n)}}class Sb extends He{constructor(e,n){super(e,"not-in",n)}matches(e){if(so(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!so(this.value.arrayValue,n)}}class Rb extends He{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Fu(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>so(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cb{constructor(e,n=null,r=[],s=[],i=null,o=null,c=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=c,this.Te=null}}function Fd(t,e=null,n=[],r=[],s=null,i=null,o=null){return new Cb(t,e,n,r,s,i,o)}function Bu(t){const e=ce(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>ql(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),fc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Ys(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Ys(r)).join(",")),e.Te=n}return e.Te}function $u(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Eb(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!v_(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Ud(t.startAt,e.startAt)&&Ud(t.endAt,e.endAt)}function zl(t){return Y.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(e,n=null,r=[],s=[],i=null,o="F",c=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=c,this.endAt=l,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function Pb(t,e,n,r,s,i,o,c){return new ii(t,e,n,r,s,i,o,c)}function pc(t){return new ii(t)}function Bd(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function S_(t){return t.collectionGroup!==null}function ji(t){const e=ce(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new We(nt.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(h=>{h.isInequality()&&(c=c.add(h.field))})}),c})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new io(i,r))}),n.has(nt.keyField().canonicalString())||e.Ie.push(new io(nt.keyField(),r))}return e.Ie}function _n(t){const e=ce(t);return e.Ee||(e.Ee=Nb(e,ji(t))),e.Ee}function Nb(t,e){if(t.limitType==="F")return Fd(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new io(s.field,i)});const n=t.endAt?new Oa(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Oa(t.startAt.position,t.startAt.inclusive):null;return Fd(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Wl(t,e){const n=t.filters.concat([e]);return new ii(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function ka(t,e,n){return new ii(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function mc(t,e){return $u(_n(t),_n(e))&&t.limitType===e.limitType}function R_(t){return`${Bu(_n(t))}|lt:${t.limitType}`}function Cs(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>A_(s)).join(", ")}]`),fc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>Ys(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>Ys(s)).join(",")),`Target(${r})`}(_n(t))}; limitType=${t.limitType})`}function gc(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):Y.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of ji(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,c,l){const h=Md(o,c,l);return o.inclusive?h<=0:h<0}(r.startAt,ji(r),s)||r.endAt&&!function(o,c,l){const h=Md(o,c,l);return o.inclusive?h>=0:h>0}(r.endAt,ji(r),s))}(t,e)}function Ob(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function C_(t){return(e,n)=>{let r=!1;for(const s of ji(t)){const i=kb(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function kb(t,e,n){const r=t.field.isKeyField()?Y.comparator(e.key,n.key):function(i,o,c){const l=o.data.field(i),h=c.data.field(i);return l!==null&&h!==null?Qs(l,h):ne(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ne(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){fs(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return h_(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Db=new xe(Y.comparator);function qn(){return Db}const P_=new xe(Y.comparator);function Vi(...t){let e=P_;for(const n of t)e=e.insert(n.key,n);return e}function N_(t){let e=P_;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Kr(){return Hi()}function O_(){return Hi()}function Hi(){return new ds(t=>t.toString(),(t,e)=>t.isEqual(e))}const Vb=new xe(Y.comparator),xb=new We(Y.comparator);function de(...t){let e=xb;for(const n of t)e=e.add(n);return e}const Lb=new We(fe);function Mb(){return Lb}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ju(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ca(e)?"-0":e}}function k_(t){return{integerValue:""+t}}function Ub(t,e){return hb(e)?k_(e):ju(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _c{constructor(){this._=void 0}}function Fb(t,e,n){return t instanceof oo?function(s,i){const o={fields:{[p_]:{stringValue:d_},[g_]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Uu(i)&&(i=dc(i)),i&&(o.fields[m_]=i),{mapValue:o}}(n,e):t instanceof ao?V_(t,e):t instanceof co?x_(t,e):function(s,i){const o=D_(s,i),c=$d(o)+$d(s.Ae);return Hl(o)&&Hl(s.Ae)?k_(c):ju(s.serializer,c)}(t,e)}function Bb(t,e,n){return t instanceof ao?V_(t,e):t instanceof co?x_(t,e):n}function D_(t,e){return t instanceof Da?function(r){return Hl(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class oo extends _c{}class ao extends _c{constructor(e){super(),this.elements=e}}function V_(t,e){const n=L_(e);for(const r of t.elements)n.some(s=>vn(s,r))||n.push(r);return{arrayValue:{values:n}}}class co extends _c{constructor(e){super(),this.elements=e}}function x_(t,e){let n=L_(e);for(const r of t.elements)n=n.filter(s=>!vn(s,r));return{arrayValue:{values:n}}}class Da extends _c{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function $d(t){return Fe(t.integerValue||t.doubleValue)}function L_(t){return Fu(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $b{constructor(e,n){this.field=e,this.transform=n}}function jb(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof ao&&s instanceof ao||r instanceof co&&s instanceof co?Ks(r.elements,s.elements,vn):r instanceof Da&&s instanceof Da?vn(r.Ae,s.Ae):r instanceof oo&&s instanceof oo}(t.transform,e.transform)}class Hb{constructor(e,n){this.version=e,this.transformResults=n}}class yn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new yn}static exists(e){return new yn(void 0,e)}static updateTime(e){return new yn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function da(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class yc{}function M_(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new F_(t.key,yn.none()):new Ro(t.key,t.data,yn.none());{const n=t.data,r=Mt.empty();let s=new We(nt.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new ps(t.key,r,new Kt(s.toArray()),yn.none())}}function qb(t,e,n){t instanceof Ro?function(s,i,o){const c=s.value.clone(),l=Hd(s.fieldTransforms,i,o.transformResults);c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):t instanceof ps?function(s,i,o){if(!da(s.precondition,i))return void i.convertToUnknownDocument(o.version);const c=Hd(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(U_(s)),l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function qi(t,e,n,r){return t instanceof Ro?function(i,o,c,l){if(!da(i.precondition,o))return c;const h=i.value.clone(),f=qd(i.fieldTransforms,l,o);return h.setAll(f),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof ps?function(i,o,c,l){if(!da(i.precondition,o))return c;const h=qd(i.fieldTransforms,l,o),f=o.data;return f.setAll(U_(i)),f.setAll(h),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(i,o,c){return da(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c}(t,e,n)}function zb(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=D_(r.transform,s||null);i!=null&&(n===null&&(n=Mt.empty()),n.set(r.field,i))}return n||null}function jd(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Ks(r,s,(i,o)=>jb(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ro extends yc{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class ps extends yc{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function U_(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Hd(t,e,n){const r=new Map;we(t.length===n.length,32656,{Re:n.length,Ve:t.length});for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,c=e.data.field(i.field);r.set(i.field,Bb(o,c,n[s]))}return r}function qd(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,Fb(i,o,e))}return r}class F_ extends yc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Wb extends yc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gb{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&qb(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=qi(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=qi(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=O_();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let c=this.applyToLocalView(o,i.mutatedFields);c=n.has(s.key)?null:c;const l=M_(o,c);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(oe.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),de())}isEqual(e){return this.batchId===e.batchId&&Ks(this.mutations,e.mutations,(n,r)=>jd(n,r))&&Ks(this.baseMutations,e.baseMutations,(n,r)=>jd(n,r))}}class Hu{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){we(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=function(){return Vb}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Hu(e,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kb{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qb{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var je,pe;function Yb(t){switch(t){case D.OK:return ne(64938);case D.CANCELLED:case D.UNKNOWN:case D.DEADLINE_EXCEEDED:case D.RESOURCE_EXHAUSTED:case D.INTERNAL:case D.UNAVAILABLE:case D.UNAUTHENTICATED:return!1;case D.INVALID_ARGUMENT:case D.NOT_FOUND:case D.ALREADY_EXISTS:case D.PERMISSION_DENIED:case D.FAILED_PRECONDITION:case D.ABORTED:case D.OUT_OF_RANGE:case D.UNIMPLEMENTED:case D.DATA_LOSS:return!0;default:return ne(15467,{code:t})}}function B_(t){if(t===void 0)return Hn("GRPC error has no .code"),D.UNKNOWN;switch(t){case je.OK:return D.OK;case je.CANCELLED:return D.CANCELLED;case je.UNKNOWN:return D.UNKNOWN;case je.DEADLINE_EXCEEDED:return D.DEADLINE_EXCEEDED;case je.RESOURCE_EXHAUSTED:return D.RESOURCE_EXHAUSTED;case je.INTERNAL:return D.INTERNAL;case je.UNAVAILABLE:return D.UNAVAILABLE;case je.UNAUTHENTICATED:return D.UNAUTHENTICATED;case je.INVALID_ARGUMENT:return D.INVALID_ARGUMENT;case je.NOT_FOUND:return D.NOT_FOUND;case je.ALREADY_EXISTS:return D.ALREADY_EXISTS;case je.PERMISSION_DENIED:return D.PERMISSION_DENIED;case je.FAILED_PRECONDITION:return D.FAILED_PRECONDITION;case je.ABORTED:return D.ABORTED;case je.OUT_OF_RANGE:return D.OUT_OF_RANGE;case je.UNIMPLEMENTED:return D.UNIMPLEMENTED;case je.DATA_LOSS:return D.DATA_LOSS;default:return ne(39323,{code:t})}}(pe=je||(je={}))[pe.OK=0]="OK",pe[pe.CANCELLED=1]="CANCELLED",pe[pe.UNKNOWN=2]="UNKNOWN",pe[pe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",pe[pe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",pe[pe.NOT_FOUND=5]="NOT_FOUND",pe[pe.ALREADY_EXISTS=6]="ALREADY_EXISTS",pe[pe.PERMISSION_DENIED=7]="PERMISSION_DENIED",pe[pe.UNAUTHENTICATED=16]="UNAUTHENTICATED",pe[pe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",pe[pe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",pe[pe.ABORTED=10]="ABORTED",pe[pe.OUT_OF_RANGE=11]="OUT_OF_RANGE",pe[pe.UNIMPLEMENTED=12]="UNIMPLEMENTED",pe[pe.INTERNAL=13]="INTERNAL",pe[pe.UNAVAILABLE=14]="UNAVAILABLE",pe[pe.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jb(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xb=new mr([4294967295,4294967295],0);function zd(t){const e=Jb().encode(t),n=new e_;return n.update(e),new Uint8Array(n.digest())}function Wd(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new mr([n,r],0),new mr([s,i],0)]}class qu{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new xi(`Invalid padding: ${n}`);if(r<0)throw new xi(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new xi(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new xi(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=mr.fromNumber(this.ge)}ye(e,n,r){let s=e.add(n.multiply(mr.fromNumber(r)));return s.compare(Xb)===1&&(s=new mr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=zd(e),[r,s]=Wd(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);if(!this.we(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new qu(i,s,n);return r.forEach(c=>o.insert(c)),o}insert(e){if(this.ge===0)return;const n=zd(e),[r,s]=Wd(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);this.Se(o)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class xi extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ec{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Co.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Ec(oe.min(),s,new xe(fe),qn(),de())}}class Co{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Co(r,n,de(),de(),de())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pa{constructor(e,n,r,s){this.be=e,this.removedTargetIds=n,this.key=r,this.De=s}}class $_{constructor(e,n){this.targetId=e,this.Ce=n}}class j_{constructor(e,n,r=at.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Gd{constructor(){this.ve=0,this.Fe=Kd(),this.Me=at.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=de(),n=de(),r=de();return this.Fe.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:ne(38017,{changeType:i})}}),new Co(this.Me,this.xe,e,n,r)}qe(){this.Oe=!1,this.Fe=Kd()}Qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,we(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class Zb{constructor(e){this.Ge=e,this.ze=new Map,this.je=qn(),this.Je=Qo(),this.He=Qo(),this.Ye=new xe(fe)}Ze(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Xe(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.We(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:ne(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((r,s)=>{this.rt(s)&&n(s)})}st(e){const n=e.targetId,r=e.Ce.count,s=this.ot(n);if(s){const i=s.target;if(zl(i))if(r===0){const o=new Y(i.path);this.et(n,o,pt.newNoDocument(o,oe.min()))}else we(r===1,20013,{expectedCount:r});else{const o=this._t(n);if(o!==r){const c=this.ut(e),l=c?this.ct(c,e,o):1;if(l!==0){this.it(n);const h=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(n,h)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,c;try{o=Ar(r).toUint8Array()}catch(l){if(l instanceof f_)return Gs("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new qu(o,s,i)}catch(l){return Gs(l instanceof xi?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.ge===0?null:c}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Ge.ht(),c=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.et(n,i,null),s++)}),s}Tt(e){const n=new Map;this.ze.forEach((i,o)=>{const c=this.ot(o);if(c){if(i.current&&zl(c.target)){const l=new Y(c.target.path);this.It(l).has(o)||this.Et(o,l)||this.et(o,l,pt.newNoDocument(l,e))}i.Be&&(n.set(o,i.ke()),i.qe())}});let r=de();this.He.forEach((i,o)=>{let c=!0;o.forEachWhile(l=>{const h=this.ot(l);return!h||h.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(i))}),this.je.forEach((i,o)=>o.setReadTime(e));const s=new Ec(e,n,this.Ye,this.je,r);return this.je=qn(),this.Je=Qo(),this.He=Qo(),this.Ye=new xe(fe),s}Xe(e,n){if(!this.rt(e))return;const r=this.Et(e,n.key)?2:0;this.nt(e).Qe(n.key,r),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(e)),this.He=this.He.insert(n.key,this.dt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,n)?s.Qe(n,1):s.$e(n),this.He=this.He.insert(n,this.dt(n).delete(e)),this.He=this.He.insert(n,this.dt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let n=this.ze.get(e);return n||(n=new Gd,this.ze.set(e,n)),n}dt(e){let n=this.He.get(e);return n||(n=new We(fe),this.He=this.He.insert(e,n)),n}It(e){let n=this.Je.get(e);return n||(n=new We(fe),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||Q("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Gd),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function Qo(){return new xe(Y.comparator)}function Kd(){return new xe(Y.comparator)}const eS={asc:"ASCENDING",desc:"DESCENDING"},tS={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},nS={and:"AND",or:"OR"};class rS{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Gl(t,e){return t.useProto3Json||fc(e)?e:{value:e}}function Va(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function H_(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function sS(t,e){return Va(t,e.toTimestamp())}function En(t){return we(!!t,49232),oe.fromTimestamp(function(n){const r=vr(n);return new ke(r.seconds,r.nanos)}(t))}function zu(t,e){return Kl(t,e).canonicalString()}function Kl(t,e){const n=function(s){return new Ce(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function q_(t){const e=Ce.fromString(t);return we(Q_(e),10190,{key:e.toString()}),e}function Ql(t,e){return zu(t.databaseId,e.path)}function ll(t,e){const n=q_(e);if(n.get(1)!==t.databaseId.projectId)throw new K(D.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new K(D.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Y(W_(n))}function z_(t,e){return zu(t.databaseId,e)}function iS(t){const e=q_(t);return e.length===4?Ce.emptyPath():W_(e)}function Yl(t){return new Ce(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function W_(t){return we(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function Qd(t,e,n){return{name:Ql(t,e),fields:n.value.mapValue.fields}}function oS(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:ne(39313,{state:h})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(h,f){return h.useProto3Json?(we(f===void 0||typeof f=="string",58123),at.fromBase64String(f||"")):(we(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),at.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&function(h){const f=h.code===void 0?D.UNKNOWN:B_(h.code);return new K(f,h.message||"")}(o);n=new j_(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=ll(t,r.document.name),i=En(r.document.updateTime),o=r.document.createTime?En(r.document.createTime):oe.min(),c=new Mt({mapValue:{fields:r.document.fields}}),l=pt.newFoundDocument(s,i,o,c),h=r.targetIds||[],f=r.removedTargetIds||[];n=new pa(h,f,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=ll(t,r.document),i=r.readTime?En(r.readTime):oe.min(),o=pt.newNoDocument(s,i),c=r.removedTargetIds||[];n=new pa([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=ll(t,r.document),i=r.removedTargetIds||[];n=new pa([],i,s,null)}else{if(!("filter"in e))return ne(11601,{Rt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new Qb(s,i),c=r.targetId;n=new $_(c,o)}}return n}function aS(t,e){let n;if(e instanceof Ro)n={update:Qd(t,e.key,e.value)};else if(e instanceof F_)n={delete:Ql(t,e.key)};else if(e instanceof ps)n={update:Qd(t,e.key,e.data),updateMask:gS(e.fieldMask)};else{if(!(e instanceof Wb))return ne(16599,{Vt:e.type});n={verify:Ql(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const c=o.transform;if(c instanceof oo)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof ao)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof co)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof Da)return{fieldPath:o.field.canonicalString(),increment:c.Ae};throw ne(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:sS(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ne(27497)}(t,e.precondition)),n}function cS(t,e){return t&&t.length>0?(we(e!==void 0,14353),t.map(n=>function(s,i){let o=s.updateTime?En(s.updateTime):En(i);return o.isEqual(oe.min())&&(o=En(i)),new Hb(o,s.transformResults||[])}(n,e))):[]}function lS(t,e){return{documents:[z_(t,e.path)]}}function uS(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=z_(t,s);const i=function(h){if(h.length!==0)return K_(en.create(h,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(h){if(h.length!==0)return h.map(f=>function(g){return{field:Ps(g.field),direction:dS(g.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const c=Gl(t,e.limit);return c!==null&&(n.structuredQuery.limit=c),e.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{ft:n,parent:s}}function hS(t){let e=iS(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){we(r===1,65062);const f=n.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];n.where&&(i=function(p){const g=G_(p);return g instanceof en&&I_(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(g=>function(C){return new io(Ns(C.field),function(N){switch(N){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(C.direction))}(g))}(n.orderBy));let c=null;n.limit&&(c=function(p){let g;return g=typeof p=="object"?p.value:p,fc(g)?null:g}(n.limit));let l=null;n.startAt&&(l=function(p){const g=!!p.before,I=p.values||[];return new Oa(I,g)}(n.startAt));let h=null;return n.endAt&&(h=function(p){const g=!p.before,I=p.values||[];return new Oa(I,g)}(n.endAt)),Pb(e,s,o,i,c,"F",l,h)}function fS(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ne(28987,{purpose:s})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function G_(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Ns(n.unaryFilter.field);return He.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Ns(n.unaryFilter.field);return He.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Ns(n.unaryFilter.field);return He.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Ns(n.unaryFilter.field);return He.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ne(61313);default:return ne(60726)}}(t):t.fieldFilter!==void 0?function(n){return He.create(Ns(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ne(58110);default:return ne(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return en.create(n.compositeFilter.filters.map(r=>G_(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return ne(1026)}}(n.compositeFilter.op))}(t):ne(30097,{filter:t})}function dS(t){return eS[t]}function pS(t){return tS[t]}function mS(t){return nS[t]}function Ps(t){return{fieldPath:t.canonicalString()}}function Ns(t){return nt.fromServerFormat(t.fieldPath)}function K_(t){return t instanceof He?function(n){if(n.op==="=="){if(Ld(n.value))return{unaryFilter:{field:Ps(n.field),op:"IS_NAN"}};if(xd(n.value))return{unaryFilter:{field:Ps(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Ld(n.value))return{unaryFilter:{field:Ps(n.field),op:"IS_NOT_NAN"}};if(xd(n.value))return{unaryFilter:{field:Ps(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ps(n.field),op:pS(n.op),value:n.value}}}(t):t instanceof en?function(n){const r=n.getFilters().map(s=>K_(s));return r.length===1?r[0]:{compositeFilter:{op:mS(n.op),filters:r}}}(t):ne(54877,{filter:t})}function gS(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Q_(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr{constructor(e,n,r,s,i=oe.min(),o=oe.min(),c=at.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new fr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new fr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new fr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new fr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _S{constructor(e){this.yt=e}}function yS(t){const e=hS({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?ka(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ES{constructor(){this.Cn=new TS}addToCollectionParentIndex(e,n){return this.Cn.add(n),x.resolve()}getCollectionParents(e,n){return x.resolve(this.Cn.getEntries(n))}addFieldIndex(e,n){return x.resolve()}deleteFieldIndex(e,n){return x.resolve()}deleteAllFieldIndexes(e){return x.resolve()}createTargetIndexes(e,n){return x.resolve()}getDocumentsMatchingTarget(e,n){return x.resolve(null)}getIndexType(e,n){return x.resolve(0)}getFieldIndexes(e,n){return x.resolve([])}getNextCollectionGroupToUpdate(e){return x.resolve(null)}getMinOffset(e,n){return x.resolve(Ir.min())}getMinOffsetFromCollectionGroup(e,n){return x.resolve(Ir.min())}updateCollectionGroup(e,n,r){return x.resolve()}updateIndexEntries(e,n){return x.resolve()}}class TS{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new We(Ce.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new We(Ce.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yd={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Y_=41943040;class St{static withCacheSize(e){return new St(e,St.DEFAULT_COLLECTION_PERCENTILE,St.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */St.DEFAULT_COLLECTION_PERCENTILE=10,St.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,St.DEFAULT=new St(Y_,St.DEFAULT_COLLECTION_PERCENTILE,St.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),St.DISABLED=new St(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Js{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new Js(0)}static cr(){return new Js(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jd="LruGarbageCollector",wS=1048576;function Xd([t,e],[n,r]){const s=fe(t,n);return s===0?fe(e,r):s}class IS{constructor(e){this.Ir=e,this.buffer=new We(Xd),this.Er=0}dr(){return++this.Er}Ar(e){const n=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();Xd(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class vS{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){Q(Jd,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){si(n)?Q(Jd,"Ignoring IndexedDB error during garbage collection: ",n):await ri(n)}await this.Vr(3e5)})}}class AS{constructor(e,n){this.mr=e,this.params=n}calculateTargetCount(e,n){return this.mr.gr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return x.resolve(hc.ce);const r=new IS(n);return this.mr.forEachTarget(e,s=>r.Ar(s.sequenceNumber)).next(()=>this.mr.pr(e,s=>r.Ar(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.mr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.mr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(Q("LruGarbageCollector","Garbage collection skipped; disabled"),x.resolve(Yd)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(Q("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Yd):this.yr(e,n))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,n){let r,s,i,o,c,l,h;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(Q("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,o=Date.now(),this.nthSequenceNumber(e,s))).next(p=>(r=p,c=Date.now(),this.removeTargets(e,r,n))).next(p=>(i=p,l=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(h=Date.now(),Rs()<=he.DEBUG&&Q("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${s} in `+(c-o)+`ms
	Removed ${i} targets in `+(l-c)+`ms
	Removed ${p} documents in `+(h-l)+`ms
Total Duration: ${h-f}ms`),x.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p})))}}function bS(t,e){return new AS(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SS{constructor(){this.changes=new ds(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,pt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?x.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RS{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CS{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&qi(r.mutation,s,Kt.empty(),ke.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,de()).next(()=>r))}getLocalViewOfDocuments(e,n,r=de()){const s=Kr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=Vi();return i.forEach((c,l)=>{o=o.insert(c,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Kr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,de()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,c)=>{n.set(o,c)})})}computeViews(e,n,r,s){let i=qn();const o=Hi(),c=function(){return Hi()}();return n.forEach((l,h)=>{const f=r.get(h.key);s.has(h.key)&&(f===void 0||f.mutation instanceof ps)?i=i.insert(h.key,h):f!==void 0?(o.set(h.key,f.mutation.getFieldMask()),qi(f.mutation,h,f.mutation.getFieldMask(),ke.now())):o.set(h.key,Kt.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((h,f)=>o.set(h,f)),n.forEach((h,f)=>c.set(h,new RS(f,o.get(h)??null))),c))}recalculateAndSaveOverlays(e,n){const r=Hi();let s=new xe((o,c)=>o-c),i=de();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const c of o)c.keys().forEach(l=>{const h=n.get(l);if(h===null)return;let f=r.get(l)||Kt.empty();f=c.applyToLocalView(h,f),r.set(l,f);const p=(s.get(c.batchId)||de()).add(l);s=s.insert(c.batchId,p)})}).next(()=>{const o=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),h=l.key,f=l.value,p=O_();f.forEach(g=>{if(!i.has(g)){const I=M_(n.get(g),r.get(g));I!==null&&p.set(g,I),i=i.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,p))}return x.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return Y.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):S_(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):x.resolve(Kr());let c=to,l=i;return o.next(h=>x.forEach(h,(f,p)=>(c<p.largestBatchId&&(c=p.largestBatchId),i.get(f)?x.resolve():this.remoteDocumentCache.getEntry(e,f).next(g=>{l=l.insert(f,g)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,l,h,de())).next(f=>({batchId:c,changes:N_(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new Y(n)).next(r=>{let s=Vi();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=Vi();return this.indexManager.getCollectionParents(e,i).next(c=>x.forEach(c,l=>{const h=function(p,g){return new ii(g,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next(f=>{f.forEach((p,g)=>{o=o.insert(p,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((l,h)=>{const f=h.getKey();o.get(f)===null&&(o=o.insert(f,pt.newInvalidDocument(f)))});let c=Vi();return o.forEach((l,h)=>{const f=i.get(l);f!==void 0&&qi(f.mutation,h,Kt.empty(),ke.now()),gc(n,h)&&(c=c.insert(l,h))}),c})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PS{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,n){return x.resolve(this.Lr.get(n))}saveBundleMetadata(e,n){return this.Lr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:En(s.createTime)}}(n)),x.resolve()}getNamedQuery(e,n){return x.resolve(this.kr.get(n))}saveNamedQuery(e,n){return this.kr.set(n.name,function(s){return{name:s.name,query:yS(s.bundledQuery),readTime:En(s.readTime)}}(n)),x.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NS{constructor(){this.overlays=new xe(Y.comparator),this.qr=new Map}getOverlay(e,n){return x.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Kr();return x.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.St(e,n,i)}),x.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.qr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.qr.delete(r)),x.resolve()}getOverlaysForCollection(e,n,r){const s=Kr(),i=n.length+1,o=new Y(n.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const l=c.getNext().value,h=l.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return x.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new xe((h,f)=>h-f);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let f=i.get(h.largestBatchId);f===null&&(f=Kr(),i=i.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const c=Kr(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((h,f)=>c.set(h,f)),!(c.size()>=s)););return x.resolve(c)}St(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.qr.get(s.largestBatchId).delete(r.key);this.qr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Kb(n,r));let i=this.qr.get(n);i===void 0&&(i=de(),this.qr.set(n,i)),this.qr.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OS{constructor(){this.sessionToken=at.EMPTY_BYTE_STRING}getSessionToken(e){return x.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,x.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wu{constructor(){this.Qr=new We(Qe.$r),this.Ur=new We(Qe.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,n){const r=new Qe(e,n);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Gr(new Qe(e,n))}zr(e,n){e.forEach(r=>this.removeReference(r,n))}jr(e){const n=new Y(new Ce([])),r=new Qe(n,e),s=new Qe(n,e+1),i=[];return this.Ur.forEachInRange([r,s],o=>{this.Gr(o),i.push(o.key)}),i}Jr(){this.Qr.forEach(e=>this.Gr(e))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const n=new Y(new Ce([])),r=new Qe(n,e),s=new Qe(n,e+1);let i=de();return this.Ur.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Qe(e,0),r=this.Qr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Qe{constructor(e,n){this.key=e,this.Yr=n}static $r(e,n){return Y.comparator(e.key,n.key)||fe(e.Yr,n.Yr)}static Kr(e,n){return fe(e.Yr,n.Yr)||Y.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kS{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.tr=1,this.Zr=new We(Qe.$r)}checkEmpty(e){return x.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Gb(i,n,r,s);this.mutationQueue.push(o);for(const c of s)this.Zr=this.Zr.add(new Qe(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return x.resolve(o)}lookupMutationBatch(e,n){return x.resolve(this.Xr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.ei(r),i=s<0?0:s;return x.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return x.resolve(this.mutationQueue.length===0?Mu:this.tr-1)}getAllMutationBatches(e){return x.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Qe(n,0),s=new Qe(n,Number.POSITIVE_INFINITY),i=[];return this.Zr.forEachInRange([r,s],o=>{const c=this.Xr(o.Yr);i.push(c)}),x.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new We(fe);return n.forEach(s=>{const i=new Qe(s,0),o=new Qe(s,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([i,o],c=>{r=r.add(c.Yr)})}),x.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;Y.isDocumentKey(i)||(i=i.child(""));const o=new Qe(new Y(i),0);let c=new We(fe);return this.Zr.forEachWhile(l=>{const h=l.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(c=c.add(l.Yr)),!0)},o),x.resolve(this.ti(c))}ti(e){const n=[];return e.forEach(r=>{const s=this.Xr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){we(this.ni(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return x.forEach(n.mutations,s=>{const i=new Qe(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Zr=r})}ir(e){}containsKey(e,n){const r=new Qe(n,0),s=this.Zr.firstAfterOrEqual(r);return x.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,x.resolve()}ni(e,n){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const n=this.ei(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DS{constructor(e){this.ri=e,this.docs=function(){return new xe(Y.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.ri(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return x.resolve(r?r.document.mutableCopy():pt.newInvalidDocument(n))}getEntries(e,n){let r=qn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():pt.newInvalidDocument(s))}),x.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=qn();const o=n.path,c=new Y(o.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:h,value:{document:f}}=l.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||ab(ob(f),r)<=0||(s.has(f.key)||gc(n,f))&&(i=i.insert(f.key,f.mutableCopy()))}return x.resolve(i)}getAllFromCollectionGroup(e,n,r,s){ne(9500)}ii(e,n){return x.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new VS(this)}getSize(e){return x.resolve(this.size)}}class VS extends SS{constructor(e){super(),this.Nr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.Nr.addEntry(e,s)):this.Nr.removeEntry(r)}),x.waitFor(n)}getFromCache(e,n){return this.Nr.getEntry(e,n)}getAllFromCache(e,n){return this.Nr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xS{constructor(e){this.persistence=e,this.si=new ds(n=>Bu(n),$u),this.lastRemoteSnapshotVersion=oe.min(),this.highestTargetId=0,this.oi=0,this._i=new Wu,this.targetCount=0,this.ai=Js.ur()}forEachTarget(e,n){return this.si.forEach((r,s)=>n(s)),x.resolve()}getLastRemoteSnapshotVersion(e){return x.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return x.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),x.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.oi&&(this.oi=n),x.resolve()}Pr(e){this.si.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ai=new Js(n),this.highestTargetId=n),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,n){return this.Pr(n),this.targetCount+=1,x.resolve()}updateTargetData(e,n){return this.Pr(n),x.resolve()}removeTargetData(e,n){return this.si.delete(n.target),this._i.jr(n.targetId),this.targetCount-=1,x.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.si.forEach((o,c)=>{c.sequenceNumber<=n&&r.get(c.targetId)===null&&(this.si.delete(o),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)}),x.waitFor(i).next(()=>s)}getTargetCount(e){return x.resolve(this.targetCount)}getTargetData(e,n){const r=this.si.get(n)||null;return x.resolve(r)}addMatchingKeys(e,n,r){return this._i.Wr(n,r),x.resolve()}removeMatchingKeys(e,n,r){this._i.zr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),x.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this._i.jr(n),x.resolve()}getMatchingKeysForTargetId(e,n){const r=this._i.Hr(n);return x.resolve(r)}containsKey(e,n){return x.resolve(this._i.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J_{constructor(e,n){this.ui={},this.overlays={},this.ci=new hc(0),this.li=!1,this.li=!0,this.hi=new OS,this.referenceDelegate=e(this),this.Pi=new xS(this),this.indexManager=new ES,this.remoteDocumentCache=function(s){return new DS(s)}(r=>this.referenceDelegate.Ti(r)),this.serializer=new _S(n),this.Ii=new PS(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new NS,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ui[e.toKey()];return r||(r=new kS(n,this.referenceDelegate),this.ui[e.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,n,r){Q("MemoryPersistence","Starting transaction:",e);const s=new LS(this.ci.next());return this.referenceDelegate.Ei(),r(s).next(i=>this.referenceDelegate.di(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ai(e,n){return x.or(Object.values(this.ui).map(r=>()=>r.containsKey(e,n)))}}class LS extends lb{constructor(e){super(),this.currentSequenceNumber=e}}class Gu{constructor(e){this.persistence=e,this.Ri=new Wu,this.Vi=null}static mi(e){return new Gu(e)}get fi(){if(this.Vi)return this.Vi;throw ne(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.fi.delete(r.toString()),x.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.fi.add(r.toString()),x.resolve()}markPotentiallyOrphaned(e,n){return this.fi.add(n.toString()),x.resolve()}removeTarget(e,n){this.Ri.jr(n.targetId).forEach(s=>this.fi.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.fi.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Ei(){this.Vi=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return x.forEach(this.fi,r=>{const s=Y.fromPath(r);return this.gi(e,s).next(i=>{i||n.removeEntry(s,oe.min())})}).next(()=>(this.Vi=null,n.apply(e)))}updateLimboDocument(e,n){return this.gi(e,n).next(r=>{r?this.fi.delete(n.toString()):this.fi.add(n.toString())})}Ti(e){return 0}gi(e,n){return x.or([()=>x.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ai(e,n)])}}class xa{constructor(e,n){this.persistence=e,this.pi=new ds(r=>fb(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=bS(this,n)}static mi(e,n){return new xa(e,n)}Ei(){}di(e){return x.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}gr(e){const n=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}wr(e){let n=0;return this.pr(e,r=>{n++}).next(()=>n)}pr(e,n){return x.forEach(this.pi,(r,s)=>this.br(e,r,s).next(i=>i?x.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ii(e,o=>this.br(e,o,n).next(c=>{c||(r++,i.removeEntry(o,oe.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.pi.set(n,e.currentSequenceNumber),x.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),x.resolve()}removeReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),x.resolve()}updateLimboDocument(e,n){return this.pi.set(n,e.currentSequenceNumber),x.resolve()}Ti(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=ha(e.data.value)),n}br(e,n,r){return x.or([()=>this.persistence.Ai(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.pi.get(n);return x.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ku{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Es=r,this.ds=s}static As(e,n){let r=de(),s=de();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Ku(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MS{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class US{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=function(){return Ow()?8:ub(_t())>0?6:4}()}initialize(e,n){this.ps=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.ys(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.ws(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new MS;return this.Ss(e,n,o).next(c=>{if(i.result=c,this.Vs)return this.bs(e,n,o,c.size)})}).next(()=>i.result)}bs(e,n,r,s){return r.documentReadCount<this.fs?(Rs()<=he.DEBUG&&Q("QueryEngine","SDK will not create cache indexes for query:",Cs(n),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),x.resolve()):(Rs()<=he.DEBUG&&Q("QueryEngine","Query:",Cs(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.gs*s?(Rs()<=he.DEBUG&&Q("QueryEngine","The SDK decides to create cache indexes for query:",Cs(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,_n(n))):x.resolve())}ys(e,n){if(Bd(n))return x.resolve(null);let r=_n(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=ka(n,null,"F"),r=_n(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=de(...i);return this.ps.getDocuments(e,o).next(c=>this.indexManager.getMinOffset(e,r).next(l=>{const h=this.Ds(n,c);return this.Cs(n,h,o,l.readTime)?this.ys(e,ka(n,null,"F")):this.vs(e,h,n,l)}))})))}ws(e,n,r,s){return Bd(n)||s.isEqual(oe.min())?x.resolve(null):this.ps.getDocuments(e,r).next(i=>{const o=this.Ds(n,i);return this.Cs(n,o,r,s)?x.resolve(null):(Rs()<=he.DEBUG&&Q("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Cs(n)),this.vs(e,o,n,ib(s,to)).next(c=>c))})}Ds(e,n){let r=new We(C_(e));return n.forEach((s,i)=>{gc(e,i)&&(r=r.add(i))}),r}Cs(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ss(e,n,r){return Rs()<=he.DEBUG&&Q("QueryEngine","Using full collection scan to execute query:",Cs(n)),this.ps.getDocumentsMatchingQuery(e,n,Ir.min(),r)}vs(e,n,r,s){return this.ps.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qu="LocalStore",FS=3e8;class BS{constructor(e,n,r,s){this.persistence=e,this.Fs=n,this.serializer=s,this.Ms=new xe(fe),this.xs=new ds(i=>Bu(i),$u),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(r)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new CS(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ms))}}function $S(t,e,n,r){return new BS(t,e,n,r)}async function X_(t,e){const n=ce(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.Bs(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],c=[];let l=de();for(const h of s){o.push(h.batchId);for(const f of h.mutations)l=l.add(f.key)}for(const h of i){c.push(h.batchId);for(const f of h.mutations)l=l.add(f.key)}return n.localDocuments.getDocuments(r,l).next(h=>({Ls:h,removedBatchIds:o,addedBatchIds:c}))})})}function jS(t,e){const n=ce(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.Ns.newChangeBuffer({trackRemovals:!0});return function(c,l,h,f){const p=h.batch,g=p.keys();let I=x.resolve();return g.forEach(C=>{I=I.next(()=>f.getEntry(l,C)).next(R=>{const N=h.docVersions.get(C);we(N!==null,48541),R.version.compareTo(N)<0&&(p.applyToRemoteDocument(R,h),R.isValidDocument()&&(R.setReadTime(h.commitVersion),f.addEntry(R)))})}),I.next(()=>c.mutationQueue.removeMutationBatch(l,p))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let l=de();for(let h=0;h<c.mutationResults.length;++h)c.mutationResults[h].transformResults.length>0&&(l=l.add(c.batch.mutations[h].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function Z_(t){const e=ce(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Pi.getLastRemoteSnapshotVersion(n))}function HS(t,e){const n=ce(t),r=e.snapshotVersion;let s=n.Ms;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Ns.newChangeBuffer({trackRemovals:!0});s=n.Ms;const c=[];e.targetChanges.forEach((f,p)=>{const g=s.get(p);if(!g)return;c.push(n.Pi.removeMatchingKeys(i,f.removedDocuments,p).next(()=>n.Pi.addMatchingKeys(i,f.addedDocuments,p)));let I=g.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?I=I.withResumeToken(at.EMPTY_BYTE_STRING,oe.min()).withLastLimboFreeSnapshotVersion(oe.min()):f.resumeToken.approximateByteSize()>0&&(I=I.withResumeToken(f.resumeToken,r)),s=s.insert(p,I),function(R,N,V){return R.resumeToken.approximateByteSize()===0||N.snapshotVersion.toMicroseconds()-R.snapshotVersion.toMicroseconds()>=FS?!0:V.addedDocuments.size+V.modifiedDocuments.size+V.removedDocuments.size>0}(g,I,f)&&c.push(n.Pi.updateTargetData(i,I))});let l=qn(),h=de();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&c.push(n.persistence.referenceDelegate.updateLimboDocument(i,f))}),c.push(qS(i,o,e.documentUpdates).next(f=>{l=f.ks,h=f.qs})),!r.isEqual(oe.min())){const f=n.Pi.getLastRemoteSnapshotVersion(i).next(p=>n.Pi.setTargetsMetadata(i,i.currentSequenceNumber,r));c.push(f)}return x.waitFor(c).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,l,h)).next(()=>l)}).then(i=>(n.Ms=s,i))}function qS(t,e,n){let r=de(),s=de();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=qn();return n.forEach((c,l)=>{const h=i.get(c);l.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(oe.min())?(e.removeEntry(c,l.readTime),o=o.insert(c,l)):!h.isValidDocument()||l.version.compareTo(h.version)>0||l.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(l),o=o.insert(c,l)):Q(Qu,"Ignoring outdated watch update for ",c,". Current version:",h.version," Watch version:",l.version)}),{ks:o,qs:s}})}function zS(t,e){const n=ce(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Mu),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function WS(t,e){const n=ce(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Pi.getTargetData(r,e).next(i=>i?(s=i,x.resolve(s)):n.Pi.allocateTargetId(r).next(o=>(s=new fr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Pi.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.Ms.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(r.targetId,r),n.xs.set(e,r.targetId)),r})}async function Jl(t,e,n){const r=ce(t),s=r.Ms.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!si(o))throw o;Q(Qu,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ms=r.Ms.remove(e),r.xs.delete(s.target)}function Zd(t,e,n){const r=ce(t);let s=oe.min(),i=de();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,h,f){const p=ce(l),g=p.xs.get(f);return g!==void 0?x.resolve(p.Ms.get(g)):p.Pi.getTargetData(h,f)}(r,o,_n(e)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(o,c.targetId).next(l=>{i=l})}).next(()=>r.Fs.getDocumentsMatchingQuery(o,e,n?s:oe.min(),n?i:de())).next(c=>(GS(r,Ob(e),c),{documents:c,Qs:i})))}function GS(t,e,n){let r=t.Os.get(e)||oe.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.Os.set(e,r)}class ep{constructor(){this.activeTargetIds=Mb()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class KS{constructor(){this.Mo=new ep,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,n,r){this.xo[e]=n}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new ep,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QS{Oo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tp="ConnectivityMonitor";class np{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){Q(tp,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){Q(tp,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Yo=null;function Xl(){return Yo===null?Yo=function(){return 268435456+Math.round(2147483648*Math.random())}():Yo++,"0x"+Yo.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ul="RestConnection",YS={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class JS{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Uo=n+"://"+e.host,this.Ko=`projects/${r}/databases/${s}`,this.Wo=this.databaseId.database===Pa?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Go(e,n,r,s,i){const o=Xl(),c=this.zo(e,n.toUriEncodedString());Q(ul,`Sending RPC '${e}' ${o}:`,c,r);const l={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(l,s,i);const{host:h}=new URL(c),f=bn(h);return this.Jo(e,c,l,r,f).then(p=>(Q(ul,`Received RPC '${e}' ${o}: `,p),p),p=>{throw Gs(ul,`RPC '${e}' ${o} failed with error: `,p,"url: ",c,"request:",r),p})}Ho(e,n,r,s,i,o){return this.Go(e,n,r,s,i)}jo(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ni}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}zo(e,n){const r=YS[e];return`${this.Uo}/v1/${n}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XS{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ut="WebChannelConnection";class ZS extends JS{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,n,r,s,i){const o=Xl();return new Promise((c,l)=>{const h=new t_;h.setWithCredentials(!0),h.listenOnce(n_.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case ua.NO_ERROR:const p=h.getResponseJson();Q(ut,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),c(p);break;case ua.TIMEOUT:Q(ut,`RPC '${e}' ${o} timed out`),l(new K(D.DEADLINE_EXCEEDED,"Request time out"));break;case ua.HTTP_ERROR:const g=h.getStatus();if(Q(ut,`RPC '${e}' ${o} failed with status:`,g,"response text:",h.getResponseText()),g>0){let I=h.getResponseJson();Array.isArray(I)&&(I=I[0]);const C=I==null?void 0:I.error;if(C&&C.status&&C.message){const R=function(V){const q=V.toLowerCase().replace(/_/g,"-");return Object.values(D).indexOf(q)>=0?q:D.UNKNOWN}(C.status);l(new K(R,C.message))}else l(new K(D.UNKNOWN,"Server responded with status "+h.getStatus()))}else l(new K(D.UNAVAILABLE,"Connection failed."));break;default:ne(9055,{l_:e,streamId:o,h_:h.getLastErrorCode(),P_:h.getLastError()})}}finally{Q(ut,`RPC '${e}' ${o} completed.`)}});const f=JSON.stringify(s);Q(ut,`RPC '${e}' ${o} sending request:`,s),h.send(n,"POST",f,r,15)})}T_(e,n,r){const s=Xl(),i=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=i_(),c=s_(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(l.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(l.useFetchStreams=!0),this.jo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const f=i.join("");Q(ut,`Creating RPC '${e}' stream ${s}: ${f}`,l);const p=o.createWebChannel(f,l);this.I_(p);let g=!1,I=!1;const C=new XS({Yo:N=>{I?Q(ut,`Not sending because RPC '${e}' stream ${s} is closed:`,N):(g||(Q(ut,`Opening RPC '${e}' stream ${s} transport.`),p.open(),g=!0),Q(ut,`RPC '${e}' stream ${s} sending:`,N),p.send(N))},Zo:()=>p.close()}),R=(N,V,q)=>{N.listen(V,W=>{try{q(W)}catch(j){setTimeout(()=>{throw j},0)}})};return R(p,Di.EventType.OPEN,()=>{I||(Q(ut,`RPC '${e}' stream ${s} transport opened.`),C.o_())}),R(p,Di.EventType.CLOSE,()=>{I||(I=!0,Q(ut,`RPC '${e}' stream ${s} transport closed`),C.a_(),this.E_(p))}),R(p,Di.EventType.ERROR,N=>{I||(I=!0,Gs(ut,`RPC '${e}' stream ${s} transport errored. Name:`,N.name,"Message:",N.message),C.a_(new K(D.UNAVAILABLE,"The operation could not be completed")))}),R(p,Di.EventType.MESSAGE,N=>{var V;if(!I){const q=N.data[0];we(!!q,16349);const W=q,j=(W==null?void 0:W.error)||((V=W[0])==null?void 0:V.error);if(j){Q(ut,`RPC '${e}' stream ${s} received error:`,j);const ee=j.status;let ie=function(_){const A=je[_];if(A!==void 0)return B_(A)}(ee),b=j.message;ie===void 0&&(ie=D.INTERNAL,b="Unknown error status: "+ee+" with message "+j.message),I=!0,C.a_(new K(ie,b)),p.close()}else Q(ut,`RPC '${e}' stream ${s} received:`,q),C.u_(q)}}),R(c,r_.STAT_EVENT,N=>{N.stat===Bl.PROXY?Q(ut,`RPC '${e}' stream ${s} detected buffering proxy`):N.stat===Bl.NOPROXY&&Q(ut,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{C.__()},0),C}terminate(){this.c_.forEach(e=>e.close()),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter(n=>n===e)}}function hl(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tc(t){return new rS(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ey{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Mi=e,this.timerId=n,this.d_=r,this.A_=s,this.R_=i,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const n=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,n-r);s>0&&Q("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.V_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,s,()=>(this.f_=Date.now(),e())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rp="PersistentStream";class ty{constructor(e,n,r,s,i,o,c,l){this.Mi=e,this.S_=r,this.b_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new ey(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===D.RESOURCE_EXHAUSTED?(Hn(n.toString()),Hn("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===D.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(n)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.D_===n&&this.G_(r,s)},r=>{e(()=>{const s=new K(D.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)})})}G_(e,n){const r=this.W_(this.D_);this.stream=this.j_(e,n),this.stream.Xo(()=>{r(()=>this.listener.Xo())}),this.stream.t_(()=>{r(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(s=>{r(()=>this.z_(s))}),this.stream.onMessage(s=>{r(()=>++this.F_==1?this.J_(s):this.onNext(s))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return Q(rp,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return n=>{this.Mi.enqueueAndForget(()=>this.D_===e?n():(Q(rp,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class eR extends ty{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=oS(this.serializer,e),r=function(i){if(!("targetChange"in i))return oe.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?oe.min():o.readTime?En(o.readTime):oe.min()}(e);return this.listener.H_(n,r)}Y_(e){const n={};n.database=Yl(this.serializer),n.addTarget=function(i,o){let c;const l=o.target;if(c=zl(l)?{documents:lS(i,l)}:{query:uS(i,l).ft},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=H_(i,o.resumeToken);const h=Gl(i,o.expectedCount);h!==null&&(c.expectedCount=h)}else if(o.snapshotVersion.compareTo(oe.min())>0){c.readTime=Va(i,o.snapshotVersion.toTimestamp());const h=Gl(i,o.expectedCount);h!==null&&(c.expectedCount=h)}return c}(this.serializer,e);const r=fS(this.serializer,e);r&&(n.labels=r),this.q_(n)}Z_(e){const n={};n.database=Yl(this.serializer),n.removeTarget=e,this.q_(n)}}class tR extends ty{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return we(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,we(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){we(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=cS(e.writeResults,e.commitTime),r=En(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=Yl(this.serializer),this.q_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>aS(this.serializer,r))};this.q_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nR{}class rR extends nR{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new K(D.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,n,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Go(e,Kl(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new K(D.UNKNOWN,i.toString())})}Ho(e,n,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,c])=>this.connection.Ho(e,Kl(n,r),s,o,c,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new K(D.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class sR{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Hn(n),this.aa=!1):Q("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ns="RemoteStore";class iR{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=i,this.Aa.Oo(o=>{r.enqueueAndForget(async()=>{ms(this)&&(Q(ns,"Restarting streams for network reachability change."),await async function(l){const h=ce(l);h.Ea.add(4),await Po(h),h.Ra.set("Unknown"),h.Ea.delete(4),await wc(h)}(this))})}),this.Ra=new sR(r,s)}}async function wc(t){if(ms(t))for(const e of t.da)await e(!0)}async function Po(t){for(const e of t.da)await e(!1)}function ny(t,e){const n=ce(t);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),Zu(n)?Xu(n):oi(n).O_()&&Ju(n,e))}function Yu(t,e){const n=ce(t),r=oi(n);n.Ia.delete(e),r.O_()&&ry(n,e),n.Ia.size===0&&(r.O_()?r.L_():ms(n)&&n.Ra.set("Unknown"))}function Ju(t,e){if(t.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(oe.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}oi(t).Y_(e)}function ry(t,e){t.Va.Ue(e),oi(t).Z_(e)}function Xu(t){t.Va=new Zb({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),oi(t).start(),t.Ra.ua()}function Zu(t){return ms(t)&&!oi(t).x_()&&t.Ia.size>0}function ms(t){return ce(t).Ea.size===0}function sy(t){t.Va=void 0}async function oR(t){t.Ra.set("Online")}async function aR(t){t.Ia.forEach((e,n)=>{Ju(t,e)})}async function cR(t,e){sy(t),Zu(t)?(t.Ra.ha(e),Xu(t)):t.Ra.set("Unknown")}async function lR(t,e,n){if(t.Ra.set("Online"),e instanceof j_&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const c of i.targetIds)s.Ia.has(c)&&(await s.remoteSyncer.rejectListen(c,o),s.Ia.delete(c),s.Va.removeTarget(c))}(t,e)}catch(r){Q(ns,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await La(t,r)}else if(e instanceof pa?t.Va.Ze(e):e instanceof $_?t.Va.st(e):t.Va.tt(e),!n.isEqual(oe.min()))try{const r=await Z_(t.localStore);n.compareTo(r)>=0&&await function(i,o){const c=i.Va.Tt(o);return c.targetChanges.forEach((l,h)=>{if(l.resumeToken.approximateByteSize()>0){const f=i.Ia.get(h);f&&i.Ia.set(h,f.withResumeToken(l.resumeToken,o))}}),c.targetMismatches.forEach((l,h)=>{const f=i.Ia.get(l);if(!f)return;i.Ia.set(l,f.withResumeToken(at.EMPTY_BYTE_STRING,f.snapshotVersion)),ry(i,l);const p=new fr(f.target,l,h,f.sequenceNumber);Ju(i,p)}),i.remoteSyncer.applyRemoteEvent(c)}(t,n)}catch(r){Q(ns,"Failed to raise snapshot:",r),await La(t,r)}}async function La(t,e,n){if(!si(e))throw e;t.Ea.add(1),await Po(t),t.Ra.set("Offline"),n||(n=()=>Z_(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{Q(ns,"Retrying IndexedDB access"),await n(),t.Ea.delete(1),await wc(t)})}function iy(t,e){return e().catch(n=>La(t,n,e))}async function Ic(t){const e=ce(t),n=Sr(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Mu;for(;uR(e);)try{const s=await zS(e.localStore,r);if(s===null){e.Ta.length===0&&n.L_();break}r=s.batchId,hR(e,s)}catch(s){await La(e,s)}oy(e)&&ay(e)}function uR(t){return ms(t)&&t.Ta.length<10}function hR(t,e){t.Ta.push(e);const n=Sr(t);n.O_()&&n.X_&&n.ea(e.mutations)}function oy(t){return ms(t)&&!Sr(t).x_()&&t.Ta.length>0}function ay(t){Sr(t).start()}async function fR(t){Sr(t).ra()}async function dR(t){const e=Sr(t);for(const n of t.Ta)e.ea(n.mutations)}async function pR(t,e,n){const r=t.Ta.shift(),s=Hu.from(r,e,n);await iy(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Ic(t)}async function mR(t,e){e&&Sr(t).X_&&await async function(r,s){if(function(o){return Yb(o)&&o!==D.ABORTED}(s.code)){const i=r.Ta.shift();Sr(r).B_(),await iy(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Ic(r)}}(t,e),oy(t)&&ay(t)}async function sp(t,e){const n=ce(t);n.asyncQueue.verifyOperationInProgress(),Q(ns,"RemoteStore received new credentials");const r=ms(n);n.Ea.add(3),await Po(n),r&&n.Ra.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await wc(n)}async function gR(t,e){const n=ce(t);e?(n.Ea.delete(2),await wc(n)):e||(n.Ea.add(2),await Po(n),n.Ra.set("Unknown"))}function oi(t){return t.ma||(t.ma=function(n,r,s){const i=ce(n);return i.sa(),new eR(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Xo:oR.bind(null,t),t_:aR.bind(null,t),r_:cR.bind(null,t),H_:lR.bind(null,t)}),t.da.push(async e=>{e?(t.ma.B_(),Zu(t)?Xu(t):t.Ra.set("Unknown")):(await t.ma.stop(),sy(t))})),t.ma}function Sr(t){return t.fa||(t.fa=function(n,r,s){const i=ce(n);return i.sa(),new tR(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Xo:()=>Promise.resolve(),t_:fR.bind(null,t),r_:mR.bind(null,t),ta:dR.bind(null,t),na:pR.bind(null,t)}),t.da.push(async e=>{e?(t.fa.B_(),await Ic(t)):(await t.fa.stop(),t.Ta.length>0&&(Q(ns,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eh{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new gr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,c=new eh(e,n,o,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new K(D.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function th(t,e){if(Hn("AsyncQueue",`${e}: ${t}`),si(t))return new K(D.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ms{static emptySet(e){return new Ms(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||Y.comparator(n.key,r.key):(n,r)=>Y.comparator(n.key,r.key),this.keyedMap=Vi(),this.sortedSet=new xe(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ms)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Ms;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ip{constructor(){this.ga=new xe(Y.comparator)}track(e){const n=e.doc.key,r=this.ga.get(n);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(n,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(n):e.type===1&&r.type===2?this.ga=this.ga.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):ne(63341,{Rt:e,pa:r}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal((n,r)=>{e.push(r)}),e}}class Xs{constructor(e,n,r,s,i,o,c,l,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(c=>{o.push({type:0,doc:c})}),new Xs(e,n,Ms.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&mc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _R{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class yR{constructor(){this.queries=op(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const s=ce(n),i=s.queries;s.queries=op(),i.forEach((o,c)=>{for(const l of c.Sa)l.onError(r)})})(this,new K(D.ABORTED,"Firestore shutting down"))}}function op(){return new ds(t=>R_(t),mc)}async function cy(t,e){const n=ce(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.ba()&&e.Da()&&(r=2):(i=new _R,r=e.Da()?0:1);try{switch(r){case 0:i.wa=await n.onListen(s,!0);break;case 1:i.wa=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const c=th(o,`Initialization of query '${Cs(e.query)}' failed`);return void e.onError(c)}n.queries.set(s,i),i.Sa.push(e),e.va(n.onlineState),i.wa&&e.Fa(i.wa)&&nh(n)}async function ly(t,e){const n=ce(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.Sa.indexOf(e);o>=0&&(i.Sa.splice(o,1),i.Sa.length===0?s=e.Da()?0:1:!i.ba()&&e.Da()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function ER(t,e){const n=ce(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const c of o.Sa)c.Fa(s)&&(r=!0);o.wa=s}}r&&nh(n)}function TR(t,e,n){const r=ce(t),s=r.queries.get(e);if(s)for(const i of s.Sa)i.onError(n);r.queries.delete(e)}function nh(t){t.Ca.forEach(e=>{e.next()})}var Zl,ap;(ap=Zl||(Zl={})).Ma="default",ap.Cache="cache";class uy{constructor(e,n,r){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Xs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const r=n!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=Xs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Zl.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hy{constructor(e){this.key=e}}class fy{constructor(e){this.key=e}}class wR{constructor(e,n){this.query=e,this.Ya=n,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=de(),this.mutatedKeys=de(),this.eu=C_(e),this.tu=new Ms(this.eu)}get nu(){return this.Ya}ru(e,n){const r=n?n.iu:new ip,s=n?n.tu:this.tu;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,p)=>{const g=s.get(f),I=gc(this.query,p)?p:null,C=!!g&&this.mutatedKeys.has(g.key),R=!!I&&(I.hasLocalMutations||this.mutatedKeys.has(I.key)&&I.hasCommittedMutations);let N=!1;g&&I?g.data.isEqual(I.data)?C!==R&&(r.track({type:3,doc:I}),N=!0):this.su(g,I)||(r.track({type:2,doc:I}),N=!0,(l&&this.eu(I,l)>0||h&&this.eu(I,h)<0)&&(c=!0)):!g&&I?(r.track({type:0,doc:I}),N=!0):g&&!I&&(r.track({type:1,doc:g}),N=!0,(l||h)&&(c=!0)),N&&(I?(o=o.add(I),i=R?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{tu:o,iu:r,Cs:c,mutatedKeys:i}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort((f,p)=>function(I,C){const R=N=>{switch(N){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ne(20277,{Rt:N})}};return R(I)-R(C)}(f.type,p.type)||this.eu(f.doc,p.doc)),this.ou(r),s=s??!1;const c=n&&!s?this._u():[],l=this.Xa.size===0&&this.current&&!s?1:0,h=l!==this.Za;return this.Za=l,o.length!==0||h?{snapshot:new Xs(this.query,e.tu,i,o,e.mutatedKeys,l===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:c}:{au:c}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new ip,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(n=>this.Ya=this.Ya.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ya=this.Ya.delete(n)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=de(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))});const n=[];return e.forEach(r=>{this.Xa.has(r)||n.push(new fy(r))}),this.Xa.forEach(r=>{e.has(r)||n.push(new hy(r))}),n}cu(e){this.Ya=e.Qs,this.Xa=de();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return Xs.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const rh="SyncEngine";class IR{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class vR{constructor(e){this.key=e,this.hu=!1}}class AR{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new ds(c=>R_(c),mc),this.Iu=new Map,this.Eu=new Set,this.du=new xe(Y.comparator),this.Au=new Map,this.Ru=new Wu,this.Vu={},this.mu=new Map,this.fu=Js.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function bR(t,e,n=!0){const r=yy(t);let s;const i=r.Tu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await dy(r,e,n,!0),s}async function SR(t,e){const n=yy(t);await dy(n,e,!0,!1)}async function dy(t,e,n,r){const s=await WS(t.localStore,_n(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let c;return r&&(c=await RR(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&ny(t.remoteStore,s),c}async function RR(t,e,n,r,s){t.pu=(p,g,I)=>async function(R,N,V,q){let W=N.view.ru(V);W.Cs&&(W=await Zd(R.localStore,N.query,!1).then(({documents:b})=>N.view.ru(b,W)));const j=q&&q.targetChanges.get(N.targetId),ee=q&&q.targetMismatches.get(N.targetId)!=null,ie=N.view.applyChanges(W,R.isPrimaryClient,j,ee);return lp(R,N.targetId,ie.au),ie.snapshot}(t,p,g,I);const i=await Zd(t.localStore,e,!0),o=new wR(e,i.Qs),c=o.ru(i.documents),l=Co.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),h=o.applyChanges(c,t.isPrimaryClient,l);lp(t,n,h.au);const f=new IR(e,n,o);return t.Tu.set(e,f),t.Iu.has(n)?t.Iu.get(n).push(e):t.Iu.set(n,[e]),h.snapshot}async function CR(t,e,n){const r=ce(t),s=r.Tu.get(e),i=r.Iu.get(s.targetId);if(i.length>1)return r.Iu.set(s.targetId,i.filter(o=>!mc(o,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Jl(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Yu(r.remoteStore,s.targetId),eu(r,s.targetId)}).catch(ri)):(eu(r,s.targetId),await Jl(r.localStore,s.targetId,!0))}async function PR(t,e){const n=ce(t),r=n.Tu.get(e),s=n.Iu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Yu(n.remoteStore,r.targetId))}async function NR(t,e,n){const r=MR(t);try{const s=await function(o,c){const l=ce(o),h=ke.now(),f=c.reduce((I,C)=>I.add(C.key),de());let p,g;return l.persistence.runTransaction("Locally write mutations","readwrite",I=>{let C=qn(),R=de();return l.Ns.getEntries(I,f).next(N=>{C=N,C.forEach((V,q)=>{q.isValidDocument()||(R=R.add(V))})}).next(()=>l.localDocuments.getOverlayedDocuments(I,C)).next(N=>{p=N;const V=[];for(const q of c){const W=zb(q,p.get(q.key).overlayedDocument);W!=null&&V.push(new ps(q.key,W,E_(W.value.mapValue),yn.exists(!0)))}return l.mutationQueue.addMutationBatch(I,h,V,c)}).next(N=>{g=N;const V=N.applyToLocalDocumentSet(p,R);return l.documentOverlayCache.saveOverlays(I,N.batchId,V)})}).then(()=>({batchId:g.batchId,changes:N_(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,c,l){let h=o.Vu[o.currentUser.toKey()];h||(h=new xe(fe)),h=h.insert(c,l),o.Vu[o.currentUser.toKey()]=h}(r,s.batchId,n),await No(r,s.changes),await Ic(r.remoteStore)}catch(s){const i=th(s,"Failed to persist write");n.reject(i)}}async function py(t,e){const n=ce(t);try{const r=await HS(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Au.get(i);o&&(we(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.hu=!0:s.modifiedDocuments.size>0?we(o.hu,14607):s.removedDocuments.size>0&&(we(o.hu,42227),o.hu=!1))}),await No(n,r,e)}catch(r){await ri(r)}}function cp(t,e,n){const r=ce(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Tu.forEach((i,o)=>{const c=o.view.va(e);c.snapshot&&s.push(c.snapshot)}),function(o,c){const l=ce(o);l.onlineState=c;let h=!1;l.queries.forEach((f,p)=>{for(const g of p.Sa)g.va(c)&&(h=!0)}),h&&nh(l)}(r.eventManager,e),s.length&&r.Pu.H_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function OR(t,e,n){const r=ce(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Au.get(e),i=s&&s.key;if(i){let o=new xe(Y.comparator);o=o.insert(i,pt.newNoDocument(i,oe.min()));const c=de().add(i),l=new Ec(oe.min(),new Map,new xe(fe),o,c);await py(r,l),r.du=r.du.remove(i),r.Au.delete(e),sh(r)}else await Jl(r.localStore,e,!1).then(()=>eu(r,e,n)).catch(ri)}async function kR(t,e){const n=ce(t),r=e.batch.batchId;try{const s=await jS(n.localStore,e);gy(n,r,null),my(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await No(n,s)}catch(s){await ri(s)}}async function DR(t,e,n){const r=ce(t);try{const s=await function(o,c){const l=ce(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return l.mutationQueue.lookupMutationBatch(h,c).next(p=>(we(p!==null,37113),f=p.keys(),l.mutationQueue.removeMutationBatch(h,p))).next(()=>l.mutationQueue.performConsistencyCheck(h)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(h,f,c)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>l.localDocuments.getDocuments(h,f))})}(r.localStore,e);gy(r,e,n),my(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await No(r,s)}catch(s){await ri(s)}}function my(t,e){(t.mu.get(e)||[]).forEach(n=>{n.resolve()}),t.mu.delete(e)}function gy(t,e,n){const r=ce(t);let s=r.Vu[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Vu[r.currentUser.toKey()]=s}}function eu(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Iu.get(e))t.Tu.delete(r),n&&t.Pu.yu(r,n);t.Iu.delete(e),t.isPrimaryClient&&t.Ru.jr(e).forEach(r=>{t.Ru.containsKey(r)||_y(t,r)})}function _y(t,e){t.Eu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&(Yu(t.remoteStore,n),t.du=t.du.remove(e),t.Au.delete(n),sh(t))}function lp(t,e,n){for(const r of n)r instanceof hy?(t.Ru.addReference(r.key,e),VR(t,r)):r instanceof fy?(Q(rh,"Document no longer in limbo: "+r.key),t.Ru.removeReference(r.key,e),t.Ru.containsKey(r.key)||_y(t,r.key)):ne(19791,{wu:r})}function VR(t,e){const n=e.key,r=n.path.canonicalString();t.du.get(n)||t.Eu.has(r)||(Q(rh,"New document in limbo: "+n),t.Eu.add(r),sh(t))}function sh(t){for(;t.Eu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Eu.values().next().value;t.Eu.delete(e);const n=new Y(Ce.fromString(e)),r=t.fu.next();t.Au.set(r,new vR(n)),t.du=t.du.insert(n,r),ny(t.remoteStore,new fr(_n(pc(n.path)),r,"TargetPurposeLimboResolution",hc.ce))}}async function No(t,e,n){const r=ce(t),s=[],i=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach((c,l)=>{o.push(r.pu(l,e,n).then(h=>{var f;if((h||n)&&r.isPrimaryClient){const p=h?!h.fromCache:(f=n==null?void 0:n.targetChanges.get(l.targetId))==null?void 0:f.current;r.sharedClientState.updateQueryState(l.targetId,p?"current":"not-current")}if(h){s.push(h);const p=Ku.As(l.targetId,h);i.push(p)}}))}),await Promise.all(o),r.Pu.H_(s),await async function(l,h){const f=ce(l);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>x.forEach(h,g=>x.forEach(g.Es,I=>f.persistence.referenceDelegate.addReference(p,g.targetId,I)).next(()=>x.forEach(g.ds,I=>f.persistence.referenceDelegate.removeReference(p,g.targetId,I)))))}catch(p){if(!si(p))throw p;Q(Qu,"Failed to update sequence numbers: "+p)}for(const p of h){const g=p.targetId;if(!p.fromCache){const I=f.Ms.get(g),C=I.snapshotVersion,R=I.withLastLimboFreeSnapshotVersion(C);f.Ms=f.Ms.insert(g,R)}}}(r.localStore,i))}async function xR(t,e){const n=ce(t);if(!n.currentUser.isEqual(e)){Q(rh,"User change. New user:",e.toKey());const r=await X_(n.localStore,e);n.currentUser=e,function(i,o){i.mu.forEach(c=>{c.forEach(l=>{l.reject(new K(D.CANCELLED,o))})}),i.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await No(n,r.Ls)}}function LR(t,e){const n=ce(t),r=n.Au.get(e);if(r&&r.hu)return de().add(r.key);{let s=de();const i=n.Iu.get(e);if(!i)return s;for(const o of i){const c=n.Tu.get(o);s=s.unionWith(c.view.nu)}return s}}function yy(t){const e=ce(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=py.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=LR.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=OR.bind(null,e),e.Pu.H_=ER.bind(null,e.eventManager),e.Pu.yu=TR.bind(null,e.eventManager),e}function MR(t){const e=ce(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=kR.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=DR.bind(null,e),e}class Ma{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Tc(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return $S(this.persistence,new US,e.initialUser,this.serializer)}Cu(e){return new J_(Gu.mi,this.serializer)}Du(e){return new KS}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ma.provider={build:()=>new Ma};class UR extends Ma{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){we(this.persistence.referenceDelegate instanceof xa,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new vS(r,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?St.withCacheSize(this.cacheSizeBytes):St.DEFAULT;return new J_(r=>xa.mi(r,n),this.serializer)}}class tu{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>cp(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=xR.bind(null,this.syncEngine),await gR(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new yR}()}createDatastore(e){const n=Tc(e.databaseInfo.databaseId),r=function(i){return new ZS(i)}(e.databaseInfo);return function(i,o,c,l){return new rR(i,o,c,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,c){return new iR(r,s,i,o,c)}(this.localStore,this.datastore,e.asyncQueue,n=>cp(this.syncEngine,n,0),function(){return np.v()?new np:new QS}())}createSyncEngine(e,n){return function(s,i,o,c,l,h,f){const p=new AR(s,i,o,c,l,h);return f&&(p.gu=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=ce(s);Q(ns,"RemoteStore shutting down."),i.Ea.add(5),await Po(i),i.Aa.shutdown(),i.Ra.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}tu.provider={build:()=>new tu};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ey{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Hn("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rr="FirestoreClient";class FR{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=dt.UNAUTHENTICATED,this.clientId=Lu.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{Q(Rr,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(Q(Rr,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new gr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=th(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function fl(t,e){t.asyncQueue.verifyOperationInProgress(),Q(Rr,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await X_(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function up(t,e){t.asyncQueue.verifyOperationInProgress();const n=await BR(t);Q(Rr,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>sp(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>sp(e.remoteStore,s)),t._onlineComponents=e}async function BR(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){Q(Rr,"Using user provided OfflineComponentProvider");try{await fl(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===D.FAILED_PRECONDITION||s.code===D.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;Gs("Error using user provided cache. Falling back to memory cache: "+n),await fl(t,new Ma)}}else Q(Rr,"Using default OfflineComponentProvider"),await fl(t,new UR(void 0));return t._offlineComponents}async function Ty(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(Q(Rr,"Using user provided OnlineComponentProvider"),await up(t,t._uninitializedComponentsProvider._online)):(Q(Rr,"Using default OnlineComponentProvider"),await up(t,new tu))),t._onlineComponents}function $R(t){return Ty(t).then(e=>e.syncEngine)}async function nu(t){const e=await Ty(t),n=e.eventManager;return n.onListen=bR.bind(null,e.syncEngine),n.onUnlisten=CR.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=SR.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=PR.bind(null,e.syncEngine),n}function jR(t,e,n={}){const r=new gr;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,c,l,h){const f=new Ey({next:g=>{f.Nu(),o.enqueueAndForget(()=>ly(i,p));const I=g.docs.has(c);!I&&g.fromCache?h.reject(new K(D.UNAVAILABLE,"Failed to get document because the client is offline.")):I&&g.fromCache&&l&&l.source==="server"?h.reject(new K(D.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(g)},error:g=>h.reject(g)}),p=new uy(pc(c.path),f,{includeMetadataChanges:!0,qa:!0});return cy(i,p)}(await nu(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wy(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hp=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iy="firestore.googleapis.com",fp=!0;class dp{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new K(D.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Iy,this.ssl=fp}else this.host=e.host,this.ssl=e.ssl??fp;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Y_;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<wS)throw new K(D.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}sb("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=wy(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new K(D.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new K(D.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new K(D.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class vc{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new dp({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new K(D.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new K(D.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new dp(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new KA;switch(r.type){case"firstParty":return new XA(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new K(D.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=hp.get(n);r&&(Q("ComponentProvider","Removing Datastore"),hp.delete(n),r.terminate())}(this),Promise.resolve()}}function HR(t,e,n,r={}){var h;t=Un(t,vc);const s=bn(e),i=t._getSettings(),o={...i,emulatorOptions:t._getEmulatorOptions()},c=`${e}:${n}`;s&&(tc(`https://${c}`),nc("Firestore",!0)),i.host!==Iy&&i.host!==c&&Gs("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const l={...i,host:c,ssl:s,emulatorOptions:r};if(!es(l,o)&&(t._setSettings(l),r.mockUserToken)){let f,p;if(typeof r.mockUserToken=="string")f=r.mockUserToken,p=dt.MOCK_USER;else{f=Wm(r.mockUserToken,(h=t._app)==null?void 0:h.options.projectId);const g=r.mockUserToken.sub||r.mockUserToken.user_id;if(!g)throw new K(D.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new dt(g)}t._authCredentials=new QA(new a_(f,p))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Or(this.firestore,e,this._query)}}class Be{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new _r(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Be(this.firestore,e,this._key)}toJSON(){return{type:Be._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(So(n,Be._jsonSchema))return new Be(e,r||null,new Y(Ce.fromString(n.referencePath)))}}Be._jsonSchemaVersion="firestore/documentReference/1.0",Be._jsonSchema={type:qe("string",Be._jsonSchemaVersion),referencePath:qe("string")};class _r extends Or{constructor(e,n,r){super(e,n,pc(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Be(this.firestore,null,new Y(e))}withConverter(e){return new _r(this.firestore,e,this._path)}}function ih(t,e,...n){if(t=Ve(t),c_("collection","path",e),t instanceof vc){const r=Ce.fromString(e,...n);return Sd(r),new _r(t,null,r)}{if(!(t instanceof Be||t instanceof _r))throw new K(D.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ce.fromString(e,...n));return Sd(r),new _r(t.firestore,null,r)}}function gs(t,e,...n){if(t=Ve(t),arguments.length===1&&(e=Lu.newId()),c_("doc","path",e),t instanceof vc){const r=Ce.fromString(e,...n);return bd(r),new Be(t,null,new Y(r))}{if(!(t instanceof Be||t instanceof _r))throw new K(D.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ce.fromString(e,...n));return bd(r),new Be(t.firestore,t instanceof _r?t.converter:null,new Y(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pp="AsyncQueue";class mp{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new ey(this,"async_queue_retry"),this._c=()=>{const r=hl();r&&Q(pp,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=hl();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=hl();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const n=new gr;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xu.push(e),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!si(e))throw e;Q(pp,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const n=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,Hn("INTERNAL UNHANDLED ERROR: ",gp(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const s=eh.createAndSchedule(this,e,n,r,i=>this.hc(i));return this.tc.push(s),s}uc(){this.nc&&ne(47125,{Pc:gp(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()})}dc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function gp(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _p(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}class Zs extends vc{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new mp,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new mp(e),this._firestoreClient=void 0,await e}}}function qR(t,e){const n=typeof t=="object"?t:rc(),r=typeof t=="string"?t:Pa,s=wo(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=Iu("firestore");i&&HR(s,...i)}return s}function oh(t){if(t._terminated)throw new K(D.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||zR(t),t._firestoreClient}function zR(t){var r,s,i;const e=t._freezeSettings(),n=function(c,l,h,f){return new mb(c,l,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,wy(f.experimentalLongPollingOptions),f.useFetchStreams,f.isUsingEmulator)}(t._databaseId,((r=t._app)==null?void 0:r.options.appId)||"",t._persistenceKey,e);t._componentsProvider||(s=e.localCache)!=null&&s._offlineComponentProvider&&((i=e.localCache)!=null&&i._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new FR(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(c){const l=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(l),_online:l}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ut(at.fromBase64String(e))}catch(n){throw new K(D.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ut(at.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Ut._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(So(e,Ut._jsonSchema))return Ut.fromBase64String(e.bytes)}}Ut._jsonSchemaVersion="firestore/bytes/1.0",Ut._jsonSchema={type:qe("string",Ut._jsonSchemaVersion),bytes:qe("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ah{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new K(D.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new nt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ch{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new K(D.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new K(D.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return fe(this._lat,e._lat)||fe(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Tn._jsonSchemaVersion}}static fromJSON(e){if(So(e,Tn._jsonSchema))return new Tn(e.latitude,e.longitude)}}Tn._jsonSchemaVersion="firestore/geoPoint/1.0",Tn._jsonSchema={type:qe("string",Tn._jsonSchemaVersion),latitude:qe("number"),longitude:qe("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:wn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(So(e,wn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new wn(e.vectorValues);throw new K(D.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}wn._jsonSchemaVersion="firestore/vectorValue/1.0",wn._jsonSchema={type:qe("string",wn._jsonSchemaVersion),vectorValues:qe("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WR=/^__.*__$/;class GR{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new ps(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ro(e,this.data,n,this.fieldTransforms)}}function vy(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ne(40011,{Ac:t})}}class lh{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Rc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new lh({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){var s;const n=(s=this.path)==null?void 0:s.child(e),r=this.Vc({path:n,fc:!1});return r.gc(e),r}yc(e){var s;const n=(s=this.path)==null?void 0:s.child(e),r=this.Vc({path:n,fc:!1});return r.Rc(),r}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return Ua(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(vy(this.Ac)&&WR.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class KR{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Tc(e)}Cc(e,n,r,s=!1){return new lh({Ac:e,methodName:n,Dc:r,path:nt.emptyPath(),fc:!1,bc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function uh(t){const e=t._freezeSettings(),n=Tc(t._databaseId);return new KR(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Ay(t,e,n,r,s,i={}){const o=t.Cc(i.merge||i.mergeFields?2:0,e,n,s);Ry("Data must be an object, but it was:",o,r);const c=by(r,o);let l,h;if(i.merge)l=new Kt(o.fieldMask),h=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const p of i.mergeFields){const g=YR(e,p,n);if(!o.contains(g))throw new K(D.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);XR(f,g)||f.push(g)}l=new Kt(f),h=o.fieldTransforms.filter(p=>l.covers(p.field))}else l=null,h=o.fieldTransforms;return new GR(new Mt(c),l,h)}class hh extends ch{_toFieldTransform(e){return new $b(e.path,new oo)}isEqual(e){return e instanceof hh}}function QR(t,e,n,r=!1){return fh(n,t.Cc(r?4:3,e))}function fh(t,e){if(Sy(t=Ve(t)))return Ry("Unsupported field value:",e,t),by(t,e);if(t instanceof ch)return function(r,s){if(!vy(s.Ac))throw s.Sc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Sc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const c of r){let l=fh(c,s.wc(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=Ve(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Ub(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=ke.fromDate(r);return{timestampValue:Va(s.serializer,i)}}if(r instanceof ke){const i=new ke(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Va(s.serializer,i)}}if(r instanceof Tn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ut)return{bytesValue:H_(s.serializer,r._byteString)};if(r instanceof Be){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Sc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:zu(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof wn)return function(o,c){return{mapValue:{fields:{[__]:{stringValue:y_},[Na]:{arrayValue:{values:o.toArray().map(h=>{if(typeof h!="number")throw c.Sc("VectorValues must only contain numeric values.");return ju(c.serializer,h)})}}}}}}(r,s);throw s.Sc(`Unsupported field value: ${uc(r)}`)}(t,e)}function by(t,e){const n={};return h_(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):fs(t,(r,s)=>{const i=fh(s,e.mc(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function Sy(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ke||t instanceof Tn||t instanceof Ut||t instanceof Be||t instanceof ch||t instanceof wn)}function Ry(t,e,n){if(!Sy(n)||!l_(n)){const r=uc(n);throw r==="an object"?e.Sc(t+" a custom object"):e.Sc(t+" "+r)}}function YR(t,e,n){if((e=Ve(e))instanceof ah)return e._internalPath;if(typeof e=="string")return Cy(t,e);throw Ua("Field path arguments must be of type string or ",t,!1,void 0,n)}const JR=new RegExp("[~\\*/\\[\\]]");function Cy(t,e,n){if(e.search(JR)>=0)throw Ua(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new ah(...e.split("."))._internalPath}catch{throw Ua(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ua(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let c=`Function ${e}() called with invalid data`;n&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new K(D.INVALID_ARGUMENT,c+t+l)}function XR(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Py{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Be(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new ZR(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Ac("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class ZR extends Py{data(){return super.data()}}function Ac(t,e){return typeof e=="string"?Cy(t,e):e instanceof ah?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e0(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new K(D.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class dh{}class ph extends dh{}function yp(t,e,...n){let r=[];e instanceof dh&&r.push(e),r=r.concat(n),function(i){const o=i.filter(l=>l instanceof mh).length,c=i.filter(l=>l instanceof bc).length;if(o>1||o>0&&c>0)throw new K(D.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class bc extends ph{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new bc(e,n,r)}_apply(e){const n=this._parse(e);return Ny(e._query,n),new Or(e.firestore,e.converter,Wl(e._query,n))}_parse(e){const n=uh(e.firestore);return function(i,o,c,l,h,f,p){let g;if(h.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new K(D.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){Ip(p,f);const C=[];for(const R of p)C.push(wp(l,i,R));g={arrayValue:{values:C}}}else g=wp(l,i,p)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||Ip(p,f),g=QR(c,o,p,f==="in"||f==="not-in");return He.create(h,f,g)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function t0(t,e,n){const r=e,s=Ac("where",t);return bc._create(s,r,n)}class mh extends dh{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new mh(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:en.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const c=i.getFlattenedFilters();for(const l of c)Ny(o,l),o=Wl(o,l)}(e._query,n),new Or(e.firestore,e.converter,Wl(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class gh extends ph{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new gh(e,n)}_apply(e){const n=function(s,i,o){if(s.startAt!==null)throw new K(D.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new K(D.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new io(i,o)}(e._query,this._field,this._direction);return new Or(e.firestore,e.converter,function(s,i){const o=s.explicitOrderBy.concat([i]);return new ii(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function Ep(t,e="asc"){const n=e,r=Ac("orderBy",t);return gh._create(r,n)}class _h extends ph{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new _h(e,n,r)}_apply(e){return new Or(e.firestore,e.converter,ka(e._query,this._limit,this._limitType))}}function Tp(t){return _h._create("limit",t,"F")}function wp(t,e,n){if(typeof(n=Ve(n))=="string"){if(n==="")throw new K(D.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!S_(e)&&n.indexOf("/")!==-1)throw new K(D.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Ce.fromString(n));if(!Y.isDocumentKey(r))throw new K(D.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Vd(t,new Y(r))}if(n instanceof Be)return Vd(t,n._key);throw new K(D.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${uc(n)}.`)}function Ip(t,e){if(!Array.isArray(t)||t.length===0)throw new K(D.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Ny(t,e){const n=function(s,i){for(const o of s)for(const c of o.getFlattenedFilters())if(i.indexOf(c.op)>=0)return c.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new K(D.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new K(D.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class n0{convertValue(e,n="none"){switch(br(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Fe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Ar(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw ne(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return fs(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var r,s,i;const n=(i=(s=(r=e.fields)==null?void 0:r[Na].arrayValue)==null?void 0:s.values)==null?void 0:i.map(o=>Fe(o.doubleValue));return new wn(n)}convertGeoPoint(e){return new Tn(Fe(e.latitude),Fe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=dc(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(no(e));default:return null}}convertTimestamp(e){const n=vr(e);return new ke(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ce.fromString(e);we(Q_(r),9688,{name:e});const s=new ro(r.get(1),r.get(3)),i=new Y(r.popFirst(5));return s.isEqual(n)||Hn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oy(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class Li{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Yr extends Py{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new ma(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Ac("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new K(D.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=Yr._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Yr._jsonSchemaVersion="firestore/documentSnapshot/1.0",Yr._jsonSchema={type:qe("string",Yr._jsonSchemaVersion),bundleSource:qe("string","DocumentSnapshot"),bundleName:qe("string"),bundle:qe("string")};class ma extends Yr{data(e={}){return super.data(e)}}class Us{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Li(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new ma(this._firestore,this._userDataWriter,r.key,r,new Li(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new K(D.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(c=>{const l=new ma(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Li(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>i||c.type!==3).map(c=>{const l=new ma(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Li(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,f=-1;return c.type!==0&&(h=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),f=o.indexOf(c.doc.key)),{type:r0(c.type),doc:l,oldIndex:h,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new K(D.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Us._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Lu.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(n.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function r0(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ne(61501,{type:t})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fa(t){t=Un(t,Be);const e=Un(t.firestore,Zs);return jR(oh(e),t._key).then(n=>Ly(e,t,n))}Us._jsonSchemaVersion="firestore/querySnapshot/1.0",Us._jsonSchema={type:qe("string",Us._jsonSchemaVersion),bundleSource:qe("string","QuerySnapshot"),bundleName:qe("string"),bundle:qe("string")};class ky extends n0{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ut(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Be(this.firestore,null,n)}}function yr(t,e,n){t=Un(t,Be);const r=Un(t.firestore,Zs),s=Oy(t.converter,e,n);return xy(r,[Ay(uh(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,yn.none())])}function Dy(t,e){const n=Un(t.firestore,Zs),r=gs(t),s=Oy(t.converter,e);return xy(n,[Ay(uh(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,yn.exists(!1))]).then(()=>r)}function Vy(t,...e){var l,h,f;t=Ve(t);let n={includeMetadataChanges:!1,source:"default"},r=0;typeof e[r]!="object"||_p(e[r])||(n=e[r++]);const s={includeMetadataChanges:n.includeMetadataChanges,source:n.source};if(_p(e[r])){const p=e[r];e[r]=(l=p.next)==null?void 0:l.bind(p),e[r+1]=(h=p.error)==null?void 0:h.bind(p),e[r+2]=(f=p.complete)==null?void 0:f.bind(p)}let i,o,c;if(t instanceof Be)o=Un(t.firestore,Zs),c=pc(t._key.path),i={next:p=>{e[r]&&e[r](Ly(o,t,p))},error:e[r+1],complete:e[r+2]};else{const p=Un(t,Or);o=Un(p.firestore,Zs),c=p._query;const g=new ky(o);i={next:I=>{e[r]&&e[r](new Us(o,g,p,I))},error:e[r+1],complete:e[r+2]},e0(t._query)}return function(g,I,C,R){const N=new Ey(R),V=new uy(I,N,C);return g.asyncQueue.enqueueAndForget(async()=>cy(await nu(g),V)),()=>{N.Nu(),g.asyncQueue.enqueueAndForget(async()=>ly(await nu(g),V))}}(oh(o),c,s,i)}function xy(t,e){return function(r,s){const i=new gr;return r.asyncQueue.enqueueAndForget(async()=>NR(await $R(r),s,i)),i.promise}(oh(t),e)}function Ly(t,e,n){const r=n.docs.get(e._key),s=new ky(t);return new Yr(t,s,e._key,r,new Li(n.hasPendingWrites,n.fromCache),e.converter)}function yh(){return new hh("serverTimestamp")}(function(e,n=!0){(function(s){ni=s})(us),Tr(new Fn("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),c=new Zs(new YA(r.getProvider("auth-internal")),new ZA(o,r.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new K(D.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ro(h.options.projectId,f)}(o,s),o);return i={useFetchStreams:n,...i},c._setSettings(i),c},"PUBLIC").setMultipleInstances(!0)),Bt(wd,Id,e),Bt(wd,Id,"esm2020")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const My="firebasestorage.googleapis.com",Uy="storageBucket",s0=2*60*1e3,i0=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue extends nn{constructor(e,n,r=0){super(dl(e),`Firebase Storage: ${n} (${dl(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Ue.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return dl(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Me;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Me||(Me={}));function dl(t){return"storage/"+t}function Eh(){const t="An unknown error occurred, please check the error payload for server response.";return new Ue(Me.UNKNOWN,t)}function o0(t){return new Ue(Me.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function a0(t){return new Ue(Me.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function c0(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Ue(Me.UNAUTHENTICATED,t)}function l0(){return new Ue(Me.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function u0(t){return new Ue(Me.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function h0(){return new Ue(Me.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function f0(){return new Ue(Me.CANCELED,"User canceled the upload/download.")}function d0(t){return new Ue(Me.INVALID_URL,"Invalid URL '"+t+"'.")}function p0(t){return new Ue(Me.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function m0(){return new Ue(Me.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Uy+"' property when initializing the app?")}function g0(){return new Ue(Me.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function _0(){return new Ue(Me.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function y0(t){return new Ue(Me.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function ru(t){return new Ue(Me.INVALID_ARGUMENT,t)}function Fy(){return new Ue(Me.APP_DELETED,"The Firebase app was deleted.")}function E0(t){return new Ue(Me.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function zi(t,e){return new Ue(Me.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Si(t){throw new Ue(Me.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Dt.makeFromUrl(e,n)}catch{return new Dt(e,"")}if(r.path==="")return r;throw p0(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(j){j.path.charAt(j.path.length-1)==="/"&&(j.path_=j.path_.slice(0,-1))}const o="(/(.*))?$",c=new RegExp("^gs://"+s+o,"i"),l={bucket:1,path:3};function h(j){j.path_=decodeURIComponent(j.path)}const f="v[A-Za-z0-9_]+",p=n.replace(/[.]/g,"\\."),g="(/([^?#]*).*)?$",I=new RegExp(`^https?://${p}/${f}/b/${s}/o${g}`,"i"),C={bucket:1,path:3},R=n===My?"(?:storage.googleapis.com|storage.cloud.google.com)":n,N="([^?#]*)",V=new RegExp(`^https?://${R}/${s}/${N}`,"i"),W=[{regex:c,indices:l,postModify:i},{regex:I,indices:C,postModify:h},{regex:V,indices:{bucket:1,path:2},postModify:h}];for(let j=0;j<W.length;j++){const ee=W[j],ie=ee.regex.exec(e);if(ie){const b=ie[ee.indices.bucket];let y=ie[ee.indices.path];y||(y=""),r=new Dt(b,y),ee.postModify(r);break}}if(r==null)throw d0(e);return r}}class T0{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w0(t,e,n){let r=1,s=null,i=null,o=!1,c=0;function l(){return c===2}let h=!1;function f(...N){h||(h=!0,e.apply(null,N))}function p(N){s=setTimeout(()=>{s=null,t(I,l())},N)}function g(){i&&clearTimeout(i)}function I(N,...V){if(h){g();return}if(N){g(),f.call(null,N,...V);return}if(l()||o){g(),f.call(null,N,...V);return}r<64&&(r*=2);let W;c===1?(c=2,W=0):W=(r+Math.random())*1e3,p(W)}let C=!1;function R(N){C||(C=!0,g(),!h&&(s!==null?(N||(c=2),clearTimeout(s),p(0)):N||(c=1)))}return p(0),i=setTimeout(()=>{o=!0,R(!0)},n),R}function I0(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v0(t){return t!==void 0}function A0(t){return typeof t=="object"&&!Array.isArray(t)}function Th(t){return typeof t=="string"||t instanceof String}function vp(t){return wh()&&t instanceof Blob}function wh(){return typeof Blob<"u"}function Ap(t,e,n,r){if(r<e)throw ru(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw ru(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ih(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function By(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}var Jr;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Jr||(Jr={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b0(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S0{constructor(e,n,r,s,i,o,c,l,h,f,p,g=!0,I=!1){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=c,this.errorCallback_=l,this.timeout_=h,this.progressCallback_=f,this.connectionFactory_=p,this.retry=g,this.isUsingEmulator=I,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((C,R)=>{this.resolve_=C,this.reject_=R,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new Jo(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=c=>{const l=c.loaded,h=c.lengthComputable?c.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,h)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const c=i.getErrorCode()===Jr.NO_ERROR,l=i.getStatus();if(!c||b0(l,this.additionalRetryCodes_)&&this.retry){const f=i.getErrorCode()===Jr.ABORT;r(!1,new Jo(!1,null,f));return}const h=this.successCodes_.indexOf(l)!==-1;r(!0,new Jo(h,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,c=s.connection;if(s.wasSuccessCode)try{const l=this.callback_(c,c.getResponse());v0(l)?i(l):i()}catch(l){o(l)}else if(c!==null){const l=Eh();l.serverResponse=c.getErrorText(),this.errorCallback_?o(this.errorCallback_(c,l)):o(l)}else if(s.canceled){const l=this.appDelete_?Fy():f0();o(l)}else{const l=h0();o(l)}};this.canceled_?n(!1,new Jo(!1,null,!0)):this.backoffId_=w0(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&I0(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Jo{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function R0(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function C0(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function P0(t,e){e&&(t["X-Firebase-GMPID"]=e)}function N0(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function O0(t,e,n,r,s,i,o=!0,c=!1){const l=By(t.urlParams),h=t.url+l,f=Object.assign({},t.headers);return P0(f,e),R0(f,n),C0(f,i),N0(f,r),new S0(h,t.method,f,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o,c)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k0(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function D0(...t){const e=k0();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(wh())return new Blob(t);throw new Ue(Me.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function V0(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x0(t){if(typeof atob>"u")throw y0("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class pl{constructor(e,n){this.data=e,this.contentType=n||null}}function L0(t,e){switch(t){case mn.RAW:return new pl($y(e));case mn.BASE64:case mn.BASE64URL:return new pl(jy(t,e));case mn.DATA_URL:return new pl(U0(e),F0(e))}throw Eh()}function $y(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=r,o=t.charCodeAt(++n);r=65536|(i&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function M0(t){let e;try{e=decodeURIComponent(t)}catch{throw zi(mn.DATA_URL,"Malformed data URL.")}return $y(e)}function jy(t,e){switch(t){case mn.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw zi(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case mn.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw zi(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=x0(e)}catch(s){throw s.message.includes("polyfill")?s:zi(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class Hy{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw zi(mn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=B0(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function U0(t){const e=new Hy(t);return e.base64?jy(mn.BASE64,e.rest):M0(e.rest)}function F0(t){return new Hy(t).contentType}function B0(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr{constructor(e,n){let r=0,s="";vp(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,n){if(vp(this.data_)){const r=this.data_,s=V0(r,e,n);return s===null?null:new lr(s)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new lr(r,!0)}}static getBlob(...e){if(wh()){const n=e.map(r=>r instanceof lr?r.data_:r);return new lr(D0.apply(null,n))}else{const n=e.map(o=>Th(o)?L0(mn.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const s=new Uint8Array(r);let i=0;return n.forEach(o=>{for(let c=0;c<o.length;c++)s[i++]=o[c]}),new lr(s,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qy(t){let e;try{e=JSON.parse(t)}catch{return null}return A0(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $0(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function j0(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function zy(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H0(t,e){return e}class Et{constructor(e,n,r,s){this.server=e,this.local=n||e,this.writable=!!r,this.xform=s||H0}}let Xo=null;function q0(t){return!Th(t)||t.length<2?t:zy(t)}function Wy(){if(Xo)return Xo;const t=[];t.push(new Et("bucket")),t.push(new Et("generation")),t.push(new Et("metageneration")),t.push(new Et("name","fullPath",!0));function e(i,o){return q0(o)}const n=new Et("name");n.xform=e,t.push(n);function r(i,o){return o!==void 0?Number(o):o}const s=new Et("size");return s.xform=r,t.push(s),t.push(new Et("timeCreated")),t.push(new Et("updated")),t.push(new Et("md5Hash",null,!0)),t.push(new Et("cacheControl",null,!0)),t.push(new Et("contentDisposition",null,!0)),t.push(new Et("contentEncoding",null,!0)),t.push(new Et("contentLanguage",null,!0)),t.push(new Et("contentType",null,!0)),t.push(new Et("metadata","customMetadata",!0)),Xo=t,Xo}function z0(t,e){function n(){const r=t.bucket,s=t.fullPath,i=new Dt(r,s);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function W0(t,e,n){const r={};r.type="file";const s=n.length;for(let i=0;i<s;i++){const o=n[i];r[o.local]=o.xform(r,e[o.server])}return z0(r,t),r}function Gy(t,e,n){const r=qy(e);return r===null?null:W0(t,r,n)}function G0(t,e,n,r){const s=qy(e);if(s===null||!Th(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(h=>{const f=t.bucket,p=t.fullPath,g="/b/"+o(f)+"/o/"+o(p),I=Ih(g,n,r),C=By({alt:"media",token:h});return I+C})[0]}function K0(t,e){const n={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}class Ky{constructor(e,n,r,s){this.url=e,this.method=n,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qy(t){if(!t)throw Eh()}function Q0(t,e){function n(r,s){const i=Gy(t,s,e);return Qy(i!==null),i}return n}function Y0(t,e){function n(r,s){const i=Gy(t,s,e);return Qy(i!==null),G0(i,s,t.host,t._protocol)}return n}function Yy(t){function e(n,r){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=l0():s=c0():n.getStatus()===402?s=a0(t.bucket):n.getStatus()===403?s=u0(t.path):s=r,s.status=n.getStatus(),s.serverResponse=r.serverResponse,s}return e}function J0(t){const e=Yy(t);function n(r,s){let i=e(r,s);return r.getStatus()===404&&(i=o0(t.path)),i.serverResponse=s.serverResponse,i}return n}function X0(t,e,n){const r=e.fullServerUrl(),s=Ih(r,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,c=new Ky(s,i,Y0(t,n),o);return c.errorHandler=J0(e),c}function Z0(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function eC(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=Z0(null,e)),r}function tC(t,e,n,r,s){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function c(){let W="";for(let j=0;j<2;j++)W=W+Math.random().toString().slice(2);return W}const l=c();o["Content-Type"]="multipart/related; boundary="+l;const h=eC(e,r,s),f=K0(h,n),p="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+f+`\r
--`+l+`\r
Content-Type: `+h.contentType+`\r
\r
`,g=`\r
--`+l+"--",I=lr.getBlob(p,r,g);if(I===null)throw g0();const C={name:h.fullPath},R=Ih(i,t.host,t._protocol),N="POST",V=t.maxUploadRetryTime,q=new Ky(R,N,Q0(t,n),V);return q.urlParams=C,q.headers=o,q.body=I.uploadData(),q.errorHandler=Yy(e),q}class nC{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Jr.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Jr.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Jr.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,s,i){if(this.sent_)throw Si("cannot .send() more than once");if(bn(e)&&r&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const o in i)i.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,i[o].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Si("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Si("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Si("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Si("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class rC extends nC{initXhr(){this.xhr_.responseType="text"}}function Jy(){return new rC}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs{constructor(e,n){this._service=e,n instanceof Dt?this._location=n:this._location=Dt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new rs(e,n)}get root(){const e=new Dt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return zy(this._location.path)}get storage(){return this._service}get parent(){const e=$0(this._location.path);if(e===null)return null;const n=new Dt(this._location.bucket,e);return new rs(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw E0(e)}}function sC(t,e,n){t._throwIfRoot("uploadBytes");const r=tC(t.storage,t._location,Wy(),new lr(e,!0),n);return t.storage.makeRequestWithTokens(r,Jy).then(s=>({metadata:s,ref:t}))}function iC(t){t._throwIfRoot("getDownloadURL");const e=X0(t.storage,t._location,Wy());return t.storage.makeRequestWithTokens(e,Jy).then(n=>{if(n===null)throw _0();return n})}function oC(t,e){const n=j0(t._location.path,e),r=new Dt(t._location.bucket,n);return new rs(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aC(t){return/^[A-Za-z]+:\/\//.test(t)}function cC(t,e){return new rs(t,e)}function Xy(t,e){if(t instanceof vh){const n=t;if(n._bucket==null)throw m0();const r=new rs(n,n._bucket);return e!=null?Xy(r,e):r}else return e!==void 0?oC(t,e):t}function lC(t,e){if(e&&aC(e)){if(t instanceof vh)return cC(t,e);throw ru("To use ref(service, url), the first argument must be a Storage instance.")}else return Xy(t,e)}function bp(t,e){const n=e==null?void 0:e[Uy];return n==null?null:Dt.makeFromBucketSpec(n,t)}function uC(t,e,n,r={}){t.host=`${e}:${n}`;const s=bn(e);s&&(tc(`https://${t.host}/b`),nc("Storage",!0)),t._isUsingEmulator=!0,t._protocol=s?"https":"http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:Wm(i,t.app.options.projectId))}class vh{constructor(e,n,r,s,i,o=!1){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._isUsingEmulator=o,this._bucket=null,this._host=My,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=s0,this._maxUploadRetryTime=i0,this._requests=new Set,s!=null?this._bucket=Dt.makeFromBucketSpec(s,this._host):this._bucket=bp(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Dt.makeFromBucketSpec(this._url,e):this._bucket=bp(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Ap("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Ap("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if(tt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new rs(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new T0(Fy());{const o=O0(e,this._appId,r,s,n,this._firebaseVersion,i,this._isUsingEmulator);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const Sp="@firebase/storage",Rp="0.14.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zy="storage";function hC(t,e,n){return t=Ve(t),sC(t,e,n)}function fC(t){return t=Ve(t),iC(t)}function dC(t,e){return t=Ve(t),lC(t,e)}function pC(t=rc(),e){t=Ve(t);const r=wo(t,Zy).getImmediate({identifier:e}),s=Iu("storage");return s&&mC(r,...s),r}function mC(t,e,n,r={}){uC(t,e,n,r)}function gC(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new vh(n,r,s,e,us)}function _C(){Tr(new Fn(Zy,gC,"PUBLIC").setMultipleInstances(!0)),Bt(Sp,Rp,""),Bt(Sp,Rp,"esm2020")}_C();const yC={apiKey:"AIzaSyC356T4tkKUo4DUwmMmOJWPboFKlpOqDJM",authDomain:"my-firebase-12fb4.firebaseapp.com",projectId:"my-firebase-12fb4",storageBucket:"my-firebase-12fb4.firebasestorage.app",messagingSenderId:"251411595390",appId:"1:251411595390:web:d9396d5b8165079ecf182f"},Sc=Qm(yC),Qn=qR(Sc),Pe=Zg(Sc),EC=pC(Sc);function TC(){const t=navigator.userAgent.toLowerCase();return t.includes("line/")||t.includes("fban/")||t.includes("fbav/")||t.includes("micromessenger")||t.includes("wechat")||t.includes("qq/")||t.includes("yahoo/")||t.includes("weibo")||t.includes("sinaweibo")}function wC(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}async function IC(){try{return(await Ag(Pe)).user}catch(t){throw console.error("匿名登入失敗:",t),t}}async function vC(t,e){try{return(await Ng(Pe,t,e)).user}catch(n){throw console.error("登入失敗:",n),n}}async function AC(){var t,e,n;try{const r=new dn;if(TC()||wC())return console.log("檢測到需要使用 redirect 的環境，使用 redirect 方式登入"),await Fl(Pe,r),null;try{return(await Wg(Pe,r)).user}catch(i){if(console.error("Popup 登入失敗:",i),i.code==="auth/popup-closed-by-user")throw console.error("Google 登入被用戶關閉"),i;if(i.code==="auth/popup-blocked"||i.code==="auth/unauthorized-domain"||i.code==="auth/operation-not-allowed"||((t=i.message)==null?void 0:t.toLowerCase().includes("disallowed_useragent"))||((e=i.message)==null?void 0:e.includes("403"))||((n=i.message)==null?void 0:n.includes("forbidden"))||i.code&&i.code.includes("403")){console.log("Popup 被阻擋，改用 redirect 方式");try{return await Fl(Pe,r),null}catch(c){throw console.error("Redirect 也失敗:",c),{code:"auth/redirect-failed",message:"Google 登入失敗，請檢查 Firebase 配置或使用外部瀏覽器",originalError:c}}}throw i}}catch(r){throw console.error("Google 登入失敗:",r),r}}async function bC(){try{const t=await Qg(Pe);return t?t.user:null}catch(t){throw console.error("處理 redirect 結果失敗:",t),t}}async function SC(t,e,n){try{const r=await Pg(Pe,t,e);return n&&r.user&&(await Og(r.user,{displayName:n}),await r.user.reload()),r.user}catch(r){throw console.error("註冊失敗:",r),r}}async function eE(){try{await xg(Pe)}catch(t){throw console.error("登出失敗:",t),t}}function RC(t){return Vg(Pe,t)}async function Cp(t){try{const e=Pe.currentUser;if(!e)throw new Error("User not authenticated");await Dy(ih(Qn,"messages"),{text:t,userId:e.uid,userName:e.displayName||"匿名",timestamp:yh()})}catch(e){console.error("發送訊息失敗",e)}}function CC(t,e){const n=ih(Qn,"messages");let r=yp(n,Ep("timestamp","desc"),Tp(50));return e&&(r=yp(n,t0("timestamp",">=",e),Ep("timestamp","desc"),Tp(50))),Vy(r,s=>{const i=[];s.forEach(o=>{i.push({id:o.id,...o.data()})}),t(i.reverse())})}/**
* @vue/shared v3.5.24
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ah(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Ae={},Fs=[],$t=()=>{},tE=()=>!1,Rc=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),bh=t=>t.startsWith("onUpdate:"),Ye=Object.assign,Sh=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},PC=Object.prototype.hasOwnProperty,_e=(t,e)=>PC.call(t,e),se=Array.isArray,Bs=t=>Cc(t)==="[object Map]",nE=t=>Cc(t)==="[object Set]",re=t=>typeof t=="function",De=t=>typeof t=="string",Yn=t=>typeof t=="symbol",Se=t=>t!==null&&typeof t=="object",rE=t=>(Se(t)||re(t))&&re(t.then)&&re(t.catch),sE=Object.prototype.toString,Cc=t=>sE.call(t),NC=t=>Cc(t).slice(8,-1),iE=t=>Cc(t)==="[object Object]",Rh=t=>De(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Wi=Ah(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Pc=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},OC=/-\w/g,Ht=Pc(t=>t.replace(OC,e=>e.slice(1).toUpperCase())),kC=/\B([A-Z])/g,_s=Pc(t=>t.replace(kC,"-$1").toLowerCase()),Nc=Pc(t=>t.charAt(0).toUpperCase()+t.slice(1)),ml=Pc(t=>t?`on${Nc(t)}`:""),Er=(t,e)=>!Object.is(t,e),gl=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Ba=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},DC=t=>{const e=parseFloat(t);return isNaN(e)?t:e},VC=t=>{const e=De(t)?Number(t):NaN;return isNaN(e)?t:e};let Pp;const Xr=()=>Pp||(Pp=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Oo(t){if(se(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=De(r)?UC(r):Oo(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(De(t)||Se(t))return t}const xC=/;(?![^(]*\))/g,LC=/:([^]+)/,MC=/\/\*[^]*?\*\//g;function UC(t){const e={};return t.replace(MC,"").split(xC).forEach(n=>{if(n){const r=n.split(LC);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Wt(t){let e="";if(De(t))e=t;else if(se(t))for(let n=0;n<t.length;n++){const r=Wt(t[n]);r&&(e+=r+" ")}else if(Se(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const FC="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",BC=Ah(FC);function oE(t){return!!t||t===""}const aE=t=>!!(t&&t.__v_isRef===!0),Ch=t=>De(t)?t:t==null?"":se(t)||Se(t)&&(t.toString===sE||!re(t.toString))?aE(t)?Ch(t.value):JSON.stringify(t,cE,2):String(t),cE=(t,e)=>aE(e)?cE(t,e.value):Bs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[_l(r,i)+" =>"]=s,n),{})}:nE(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>_l(n))}:Yn(e)?_l(e):Se(e)&&!se(e)&&!iE(e)?String(e):e,_l=(t,e="")=>{var n;return Yn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.24
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ft;class $C{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=ft,!e&&ft&&(this.index=(ft.scopes||(ft.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=ft;try{return ft=this,e()}finally{ft=n}}}on(){++this._on===1&&(this.prevScope=ft,ft=this)}off(){this._on>0&&--this._on===0&&(ft=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function lE(){return ft}function jC(t,e=!1){ft&&ft.cleanups.push(t)}let Re;const yl=new WeakSet;class uE{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,ft&&ft.active&&ft.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,yl.has(this)&&(yl.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||fE(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Np(this),dE(this);const e=Re,n=Jt;Re=this,Jt=!0;try{return this.fn()}finally{pE(this),Re=e,Jt=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Oh(e);this.deps=this.depsTail=void 0,Np(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?yl.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){su(this)&&this.run()}get dirty(){return su(this)}}let hE=0,Gi,Ki;function fE(t,e=!1){if(t.flags|=8,e){t.next=Ki,Ki=t;return}t.next=Gi,Gi=t}function Ph(){hE++}function Nh(){if(--hE>0)return;if(Ki){let e=Ki;for(Ki=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Gi;){let e=Gi;for(Gi=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function dE(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function pE(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),Oh(r),HC(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function su(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(mE(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function mE(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===lo)||(t.globalVersion=lo,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!su(t))))return;t.flags|=2;const e=t.dep,n=Re,r=Jt;Re=t,Jt=!0;try{dE(t);const s=t.fn(t._value);(e.version===0||Er(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{Re=n,Jt=r,pE(t),t.flags&=-3}}function Oh(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Oh(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function HC(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Jt=!0;const gE=[];function zn(){gE.push(Jt),Jt=!1}function Wn(){const t=gE.pop();Jt=t===void 0?!0:t}function Np(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Re;Re=void 0;try{e()}finally{Re=n}}}let lo=0;class qC{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class kh{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Re||!Jt||Re===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Re)n=this.activeLink=new qC(Re,this),Re.deps?(n.prevDep=Re.depsTail,Re.depsTail.nextDep=n,Re.depsTail=n):Re.deps=Re.depsTail=n,_E(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Re.depsTail,n.nextDep=void 0,Re.depsTail.nextDep=n,Re.depsTail=n,Re.deps===n&&(Re.deps=r)}return n}trigger(e){this.version++,lo++,this.notify(e)}notify(e){Ph();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Nh()}}}function _E(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)_E(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const iu=new WeakMap,Zr=Symbol(""),ou=Symbol(""),uo=Symbol("");function mt(t,e,n){if(Jt&&Re){let r=iu.get(t);r||iu.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new kh),s.map=r,s.key=n),s.track()}}function Vn(t,e,n,r,s,i){const o=iu.get(t);if(!o){lo++;return}const c=l=>{l&&l.trigger()};if(Ph(),e==="clear")o.forEach(c);else{const l=se(t),h=l&&Rh(n);if(l&&n==="length"){const f=Number(r);o.forEach((p,g)=>{(g==="length"||g===uo||!Yn(g)&&g>=f)&&c(p)})}else switch((n!==void 0||o.has(void 0))&&c(o.get(n)),h&&c(o.get(uo)),e){case"add":l?h&&c(o.get("length")):(c(o.get(Zr)),Bs(t)&&c(o.get(ou)));break;case"delete":l||(c(o.get(Zr)),Bs(t)&&c(o.get(ou)));break;case"set":Bs(t)&&c(o.get(Zr));break}}Nh()}function Ss(t){const e=Ee(t);return e===t?e:(mt(e,"iterate",uo),Xt(t)?e:e.map(vt))}function Dh(t){return mt(t=Ee(t),"iterate",uo),t}const zC={__proto__:null,[Symbol.iterator](){return El(this,Symbol.iterator,vt)},concat(...t){return Ss(this).concat(...t.map(e=>se(e)?Ss(e):e))},entries(){return El(this,"entries",t=>(t[1]=vt(t[1]),t))},every(t,e){return Rn(this,"every",t,e,void 0,arguments)},filter(t,e){return Rn(this,"filter",t,e,n=>n.map(vt),arguments)},find(t,e){return Rn(this,"find",t,e,vt,arguments)},findIndex(t,e){return Rn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Rn(this,"findLast",t,e,vt,arguments)},findLastIndex(t,e){return Rn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Rn(this,"forEach",t,e,void 0,arguments)},includes(...t){return Tl(this,"includes",t)},indexOf(...t){return Tl(this,"indexOf",t)},join(t){return Ss(this).join(t)},lastIndexOf(...t){return Tl(this,"lastIndexOf",t)},map(t,e){return Rn(this,"map",t,e,void 0,arguments)},pop(){return Ri(this,"pop")},push(...t){return Ri(this,"push",t)},reduce(t,...e){return Op(this,"reduce",t,e)},reduceRight(t,...e){return Op(this,"reduceRight",t,e)},shift(){return Ri(this,"shift")},some(t,e){return Rn(this,"some",t,e,void 0,arguments)},splice(...t){return Ri(this,"splice",t)},toReversed(){return Ss(this).toReversed()},toSorted(t){return Ss(this).toSorted(t)},toSpliced(...t){return Ss(this).toSpliced(...t)},unshift(...t){return Ri(this,"unshift",t)},values(){return El(this,"values",vt)}};function El(t,e,n){const r=Dh(t),s=r[e]();return r!==t&&!Xt(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.done||(i.value=n(i.value)),i}),s}const WC=Array.prototype;function Rn(t,e,n,r,s,i){const o=Dh(t),c=o!==t&&!Xt(t),l=o[e];if(l!==WC[e]){const p=l.apply(t,i);return c?vt(p):p}let h=n;o!==t&&(c?h=function(p,g){return n.call(this,vt(p),g,t)}:n.length>2&&(h=function(p,g){return n.call(this,p,g,t)}));const f=l.call(o,h,r);return c&&s?s(f):f}function Op(t,e,n,r){const s=Dh(t);let i=n;return s!==t&&(Xt(t)?n.length>3&&(i=function(o,c,l){return n.call(this,o,c,l,t)}):i=function(o,c,l){return n.call(this,o,vt(c),l,t)}),s[e](i,...r)}function Tl(t,e,n){const r=Ee(t);mt(r,"iterate",uo);const s=r[e](...n);return(s===-1||s===!1)&&Uh(n[0])?(n[0]=Ee(n[0]),r[e](...n)):s}function Ri(t,e,n=[]){zn(),Ph();const r=Ee(t)[e].apply(t,n);return Nh(),Wn(),r}const GC=Ah("__proto__,__v_isRef,__isVue"),yE=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Yn));function KC(t){Yn(t)||(t=String(t));const e=Ee(this);return mt(e,"has",t),e.hasOwnProperty(t)}class EE{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?sP:vE:i?IE:wE).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=se(e);if(!s){let l;if(o&&(l=zC[n]))return l;if(n==="hasOwnProperty")return KC}const c=Reflect.get(e,n,ot(e)?e:r);if((Yn(n)?yE.has(n):GC(n))||(s||mt(e,"get",n),i))return c;if(ot(c)){const l=o&&Rh(n)?c:c.value;return s&&Se(l)?$a(l):l}return Se(c)?s?$a(c):xh(c):c}}class TE extends EE{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const l=ss(i);if(!Xt(r)&&!ss(r)&&(i=Ee(i),r=Ee(r)),!se(e)&&ot(i)&&!ot(r))return l||(i.value=r),!0}const o=se(e)&&Rh(n)?Number(n)<e.length:_e(e,n),c=Reflect.set(e,n,r,ot(e)?e:s);return e===Ee(s)&&(o?Er(r,i)&&Vn(e,"set",n,r):Vn(e,"add",n,r)),c}deleteProperty(e,n){const r=_e(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&Vn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!Yn(n)||!yE.has(n))&&mt(e,"has",n),r}ownKeys(e){return mt(e,"iterate",se(e)?"length":Zr),Reflect.ownKeys(e)}}class QC extends EE{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const YC=new TE,JC=new QC,XC=new TE(!0);const au=t=>t,Zo=t=>Reflect.getPrototypeOf(t);function ZC(t,e,n){return function(...r){const s=this.__v_raw,i=Ee(s),o=Bs(i),c=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,h=s[t](...r),f=n?au:e?cu:vt;return!e&&mt(i,"iterate",l?ou:Zr),{next(){const{value:p,done:g}=h.next();return g?{value:p,done:g}:{value:c?[f(p[0]),f(p[1])]:f(p),done:g}},[Symbol.iterator](){return this}}}}function ea(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function eP(t,e){const n={get(s){const i=this.__v_raw,o=Ee(i),c=Ee(s);t||(Er(s,c)&&mt(o,"get",s),mt(o,"get",c));const{has:l}=Zo(o),h=e?au:t?cu:vt;if(l.call(o,s))return h(i.get(s));if(l.call(o,c))return h(i.get(c));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&mt(Ee(s),"iterate",Zr),s.size},has(s){const i=this.__v_raw,o=Ee(i),c=Ee(s);return t||(Er(s,c)&&mt(o,"has",s),mt(o,"has",c)),s===c?i.has(s):i.has(s)||i.has(c)},forEach(s,i){const o=this,c=o.__v_raw,l=Ee(c),h=e?au:t?cu:vt;return!t&&mt(l,"iterate",Zr),c.forEach((f,p)=>s.call(i,h(f),h(p),o))}};return Ye(n,t?{add:ea("add"),set:ea("set"),delete:ea("delete"),clear:ea("clear")}:{add(s){!e&&!Xt(s)&&!ss(s)&&(s=Ee(s));const i=Ee(this);return Zo(i).has.call(i,s)||(i.add(s),Vn(i,"add",s,s)),this},set(s,i){!e&&!Xt(i)&&!ss(i)&&(i=Ee(i));const o=Ee(this),{has:c,get:l}=Zo(o);let h=c.call(o,s);h||(s=Ee(s),h=c.call(o,s));const f=l.call(o,s);return o.set(s,i),h?Er(i,f)&&Vn(o,"set",s,i):Vn(o,"add",s,i),this},delete(s){const i=Ee(this),{has:o,get:c}=Zo(i);let l=o.call(i,s);l||(s=Ee(s),l=o.call(i,s)),c&&c.call(i,s);const h=i.delete(s);return l&&Vn(i,"delete",s,void 0),h},clear(){const s=Ee(this),i=s.size!==0,o=s.clear();return i&&Vn(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=ZC(s,t,e)}),n}function Vh(t,e){const n=eP(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(_e(n,s)&&s in r?n:r,s,i)}const tP={get:Vh(!1,!1)},nP={get:Vh(!1,!0)},rP={get:Vh(!0,!1)};const wE=new WeakMap,IE=new WeakMap,vE=new WeakMap,sP=new WeakMap;function iP(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function oP(t){return t.__v_skip||!Object.isExtensible(t)?0:iP(NC(t))}function xh(t){return ss(t)?t:Mh(t,!1,YC,tP,wE)}function Lh(t){return Mh(t,!1,XC,nP,IE)}function $a(t){return Mh(t,!0,JC,rP,vE)}function Mh(t,e,n,r,s){if(!Se(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=oP(t);if(i===0)return t;const o=s.get(t);if(o)return o;const c=new Proxy(t,i===2?r:n);return s.set(t,c),c}function Qi(t){return ss(t)?Qi(t.__v_raw):!!(t&&t.__v_isReactive)}function ss(t){return!!(t&&t.__v_isReadonly)}function Xt(t){return!!(t&&t.__v_isShallow)}function Uh(t){return t?!!t.__v_raw:!1}function Ee(t){const e=t&&t.__v_raw;return e?Ee(e):t}function aP(t){return!_e(t,"__v_skip")&&Object.isExtensible(t)&&Ba(t,"__v_skip",!0),t}const vt=t=>Se(t)?xh(t):t,cu=t=>Se(t)?$a(t):t;function ot(t){return t?t.__v_isRef===!0:!1}function Ft(t){return cP(t,!1)}function cP(t,e){return ot(t)?t:new lP(t,e)}class lP{constructor(e,n){this.dep=new kh,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Ee(e),this._value=n?e:vt(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||Xt(e)||ss(e);e=r?e:Ee(e),Er(e,n)&&(this._rawValue=e,this._value=r?e:vt(e),this.dep.trigger())}}function ae(t){return ot(t)?t.value:t}const uP={get:(t,e,n)=>e==="__v_raw"?t:ae(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return ot(s)&&!ot(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function AE(t){return Qi(t)?t:new Proxy(t,uP)}class hP{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new kh(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=lo-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Re!==this)return fE(this,!0),!0}get value(){const e=this.dep.track();return mE(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function fP(t,e,n=!1){let r,s;return re(t)?r=t:(r=t.get,s=t.set),new hP(r,s,n)}const ta={},ja=new WeakMap;let zr;function dP(t,e=!1,n=zr){if(n){let r=ja.get(n);r||ja.set(n,r=[]),r.push(t)}}function pP(t,e,n=Ae){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:c,call:l}=n,h=j=>s?j:Xt(j)||s===!1||s===0?xn(j,1):xn(j);let f,p,g,I,C=!1,R=!1;if(ot(t)?(p=()=>t.value,C=Xt(t)):Qi(t)?(p=()=>h(t),C=!0):se(t)?(R=!0,C=t.some(j=>Qi(j)||Xt(j)),p=()=>t.map(j=>{if(ot(j))return j.value;if(Qi(j))return h(j);if(re(j))return l?l(j,2):j()})):re(t)?e?p=l?()=>l(t,2):t:p=()=>{if(g){zn();try{g()}finally{Wn()}}const j=zr;zr=f;try{return l?l(t,3,[I]):t(I)}finally{zr=j}}:p=$t,e&&s){const j=p,ee=s===!0?1/0:s;p=()=>xn(j(),ee)}const N=lE(),V=()=>{f.stop(),N&&N.active&&Sh(N.effects,f)};if(i&&e){const j=e;e=(...ee)=>{j(...ee),V()}}let q=R?new Array(t.length).fill(ta):ta;const W=j=>{if(!(!(f.flags&1)||!f.dirty&&!j))if(e){const ee=f.run();if(s||C||(R?ee.some((ie,b)=>Er(ie,q[b])):Er(ee,q))){g&&g();const ie=zr;zr=f;try{const b=[ee,q===ta?void 0:R&&q[0]===ta?[]:q,I];q=ee,l?l(e,3,b):e(...b)}finally{zr=ie}}}else f.run()};return c&&c(W),f=new uE(p),f.scheduler=o?()=>o(W,!1):W,I=j=>dP(j,!1,f),g=f.onStop=()=>{const j=ja.get(f);if(j){if(l)l(j,4);else for(const ee of j)ee();ja.delete(f)}},e?r?W(!0):q=f.run():o?o(W.bind(null,!0),!0):f.run(),V.pause=f.pause.bind(f),V.resume=f.resume.bind(f),V.stop=V,V}function xn(t,e=1/0,n){if(e<=0||!Se(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,ot(t))xn(t.value,e,n);else if(se(t))for(let r=0;r<t.length;r++)xn(t[r],e,n);else if(nE(t)||Bs(t))t.forEach(r=>{xn(r,e,n)});else if(iE(t)){for(const r in t)xn(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&xn(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.24
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ko(t,e,n,r){try{return r?t(...r):t()}catch(s){Oc(s,e,n)}}function tn(t,e,n,r){if(re(t)){const s=ko(t,e,n,r);return s&&rE(s)&&s.catch(i=>{Oc(i,e,n)}),s}if(se(t)){const s=[];for(let i=0;i<t.length;i++)s.push(tn(t[i],e,n,r));return s}}function Oc(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Ae;if(e){let c=e.parent;const l=e.proxy,h=`https://vuejs.org/error-reference/#runtime-${n}`;for(;c;){const f=c.ec;if(f){for(let p=0;p<f.length;p++)if(f[p](t,l,h)===!1)return}c=c.parent}if(i){zn(),ko(i,null,10,[t,l,h]),Wn();return}}mP(t,n,s,r,o)}function mP(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const At=[];let un=-1;const $s=[];let ar=null,Os=0;const bE=Promise.resolve();let Ha=null;function Fh(t){const e=Ha||bE;return t?e.then(this?t.bind(this):t):e}function gP(t){let e=un+1,n=At.length;for(;e<n;){const r=e+n>>>1,s=At[r],i=ho(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function Bh(t){if(!(t.flags&1)){const e=ho(t),n=At[At.length-1];!n||!(t.flags&2)&&e>=ho(n)?At.push(t):At.splice(gP(e),0,t),t.flags|=1,SE()}}function SE(){Ha||(Ha=bE.then(CE))}function _P(t){se(t)?$s.push(...t):ar&&t.id===-1?ar.splice(Os+1,0,t):t.flags&1||($s.push(t),t.flags|=1),SE()}function kp(t,e,n=un+1){for(;n<At.length;n++){const r=At[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;At.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function RE(t){if($s.length){const e=[...new Set($s)].sort((n,r)=>ho(n)-ho(r));if($s.length=0,ar){ar.push(...e);return}for(ar=e,Os=0;Os<ar.length;Os++){const n=ar[Os];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}ar=null,Os=0}}const ho=t=>t.id==null?t.flags&2?-1:1/0:t.id;function CE(t){try{for(un=0;un<At.length;un++){const e=At[un];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),ko(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;un<At.length;un++){const e=At[un];e&&(e.flags&=-2)}un=-1,At.length=0,RE(),Ha=null,(At.length||$s.length)&&CE()}}let pn,Mi=[],lu=!1;function kc(t,...e){pn?pn.emit(t,...e):lu||Mi.push({event:t,args:e})}function PE(t,e){var n,r;pn=t,pn?(pn.enabled=!0,Mi.forEach(({event:s,args:i})=>pn.emit(s,...i)),Mi=[]):typeof window<"u"&&window.HTMLElement&&!((r=(n=window.navigator)==null?void 0:n.userAgent)!=null&&r.includes("jsdom"))?((e.__VUE_DEVTOOLS_HOOK_REPLAY__=e.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(i=>{PE(i,e)}),setTimeout(()=>{pn||(e.__VUE_DEVTOOLS_HOOK_REPLAY__=null,lu=!0,Mi=[])},3e3)):(lu=!0,Mi=[])}function yP(t,e){kc("app:init",t,e,{Fragment:bt,Text:Do,Comment:rt,Static:ga})}function EP(t){kc("app:unmount",t)}const TP=$h("component:added"),NE=$h("component:updated"),wP=$h("component:removed"),IP=t=>{pn&&typeof pn.cleanupBuffer=="function"&&!pn.cleanupBuffer(t)&&wP(t)};function $h(t){return e=>{kc(t,e.appContext.app,e.uid,e.parent?e.parent.uid:void 0,e)}}function vP(t,e,n){kc("component:emit",t.appContext.app,t,e,n)}let st=null,OE=null;function qa(t){const e=st;return st=t,OE=t&&t.type.__scopeId||null,e}function Yi(t,e=st,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Ka(-1);const i=qa(e);let o;try{o=t(...s)}finally{qa(i),r._d&&Ka(1)}return __VUE_PROD_DEVTOOLS__&&NE(e),o};return r._n=!0,r._c=!0,r._d=!0,r}function kE(t,e){if(st===null)return t;const n=Mc(st),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,c,l=Ae]=e[s];i&&(re(i)&&(i={mounted:i,updated:i}),i.deep&&xn(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:c,modifiers:l}))}return t}function Fr(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const c=s[o];i&&(c.oldValue=i[o].value);let l=c.dir[r];l&&(zn(),tn(l,n,8,[t.el,c,t,e]),Wn())}}const AP=Symbol("_vte"),DE=t=>t.__isTeleport,Nn=Symbol("_leaveCb"),na=Symbol("_enterCb");function bP(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return xc(()=>{t.isMounted=!0}),$E(()=>{t.isUnmounting=!0}),t}const Lt=[Function,Array],VE={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Lt,onEnter:Lt,onAfterEnter:Lt,onEnterCancelled:Lt,onBeforeLeave:Lt,onLeave:Lt,onAfterLeave:Lt,onLeaveCancelled:Lt,onBeforeAppear:Lt,onAppear:Lt,onAfterAppear:Lt,onAppearCancelled:Lt},xE=t=>{const e=t.subTree;return e.component?xE(e.component):e},SP={name:"BaseTransition",props:VE,setup(t,{slots:e}){const n=Pr(),r=bP();return()=>{const s=e.default&&UE(e.default(),!0);if(!s||!s.length)return;const i=LE(s),o=Ee(t),{mode:c}=o;if(r.isLeaving)return wl(i);const l=Dp(i);if(!l)return wl(i);let h=uu(l,o,r,n,p=>h=p);l.type!==rt&&fo(l,h);let f=n.subTree&&Dp(n.subTree);if(f&&f.type!==rt&&!Wr(f,l)&&xE(n).type!==rt){let p=uu(f,o,r,n);if(fo(f,p),c==="out-in"&&l.type!==rt)return r.isLeaving=!0,p.afterLeave=()=>{r.isLeaving=!1,n.job.flags&8||n.update(),delete p.afterLeave,f=void 0},wl(i);c==="in-out"&&l.type!==rt?p.delayLeave=(g,I,C)=>{const R=ME(r,f);R[String(f.key)]=f,g[Nn]=()=>{I(),g[Nn]=void 0,delete h.delayedLeave,f=void 0},h.delayedLeave=()=>{C(),delete h.delayedLeave,f=void 0}}:f=void 0}else f&&(f=void 0);return i}}};function LE(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==rt){e=n;break}}return e}const RP=SP;function ME(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function uu(t,e,n,r,s){const{appear:i,mode:o,persisted:c=!1,onBeforeEnter:l,onEnter:h,onAfterEnter:f,onEnterCancelled:p,onBeforeLeave:g,onLeave:I,onAfterLeave:C,onLeaveCancelled:R,onBeforeAppear:N,onAppear:V,onAfterAppear:q,onAppearCancelled:W}=e,j=String(t.key),ee=ME(n,t),ie=(_,A)=>{_&&tn(_,r,9,A)},b=(_,A)=>{const v=A[1];ie(_,A),se(_)?_.every(T=>T.length<=1)&&v():_.length<=1&&v()},y={mode:o,persisted:c,beforeEnter(_){let A=l;if(!n.isMounted)if(i)A=N||l;else return;_[Nn]&&_[Nn](!0);const v=ee[j];v&&Wr(t,v)&&v.el[Nn]&&v.el[Nn](),ie(A,[_])},enter(_){let A=h,v=f,T=p;if(!n.isMounted)if(i)A=V||h,v=q||f,T=W||p;else return;let E=!1;const me=_[na]=Je=>{E||(E=!0,Je?ie(T,[_]):ie(v,[_]),y.delayedLeave&&y.delayedLeave(),_[na]=void 0)};A?b(A,[_,me]):me()},leave(_,A){const v=String(t.key);if(_[na]&&_[na](!0),n.isUnmounting)return A();ie(g,[_]);let T=!1;const E=_[Nn]=me=>{T||(T=!0,A(),me?ie(R,[_]):ie(C,[_]),_[Nn]=void 0,ee[v]===t&&delete ee[v])};ee[v]=t,I?b(I,[_,E]):E()},clone(_){const A=uu(_,e,n,r,s);return s&&s(A),A}};return y}function wl(t){if(Dc(t))return t=Cr(t),t.children=null,t}function Dp(t){if(!Dc(t))return DE(t.type)&&t.children?LE(t.children):t;if(t.component)return t.component.subTree;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&re(n.default))return n.default()}}function fo(t,e){t.shapeFlag&6&&t.component?(t.transition=e,fo(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function UE(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const c=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===bt?(o.patchFlag&128&&s++,r=r.concat(UE(o.children,e,c))):(e||o.type!==rt)&&r.push(c!=null?Cr(o,{key:c}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}function sn(t,e){return re(t)?Ye({name:t.name},e,{setup:t}):t}function FE(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}const za=new WeakMap;function Ji(t,e,n,r,s=!1){if(se(t)){t.forEach((C,R)=>Ji(C,e&&(se(e)?e[R]:e),n,r,s));return}if(js(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Ji(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?Mc(r.component):r.el,o=s?null:i,{i:c,r:l}=t,h=e&&e.r,f=c.refs===Ae?c.refs={}:c.refs,p=c.setupState,g=Ee(p),I=p===Ae?tE:C=>_e(g,C);if(h!=null&&h!==l){if(Vp(e),De(h))f[h]=null,I(h)&&(p[h]=null);else if(ot(h)){h.value=null;const C=e;C.k&&(f[C.k]=null)}}if(re(l))ko(l,c,12,[o,f]);else{const C=De(l),R=ot(l);if(C||R){const N=()=>{if(t.f){const V=C?I(l)?p[l]:f[l]:l.value;if(s)se(V)&&Sh(V,i);else if(se(V))V.includes(i)||V.push(i);else if(C)f[l]=[i],I(l)&&(p[l]=f[l]);else{const q=[i];l.value=q,t.k&&(f[t.k]=q)}}else C?(f[l]=o,I(l)&&(p[l]=o)):R&&(l.value=o,t.k&&(f[t.k]=o))};if(o){const V=()=>{N(),za.delete(t)};V.id=-1,za.set(t,V),kt(V,n)}else Vp(t),N()}}}function Vp(t){const e=za.get(t);e&&(e.flags|=8,za.delete(t))}Xr().requestIdleCallback;Xr().cancelIdleCallback;const js=t=>!!t.type.__asyncLoader,Dc=t=>t.type.__isKeepAlive;function CP(t,e){BE(t,"a",e)}function PP(t,e){BE(t,"da",e)}function BE(t,e,n=gt){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Vc(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Dc(s.parent.vnode)&&NP(r,e,n,s),s=s.parent}}function NP(t,e,n,r){const s=Vc(e,t,r,!0);jE(()=>{Sh(r[e],s)},n)}function Vc(t,e,n=gt,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{zn();const c=Vo(n),l=tn(e,n,t,o);return c(),Wn(),l});return r?s.unshift(i):s.push(i),i}}const Jn=t=>(e,n=gt)=>{(!mo||t==="sp")&&Vc(t,(...r)=>e(...r),n)},OP=Jn("bm"),xc=Jn("m"),kP=Jn("bu"),DP=Jn("u"),$E=Jn("bum"),jE=Jn("um"),VP=Jn("sp"),xP=Jn("rtg"),LP=Jn("rtc");function MP(t,e=gt){Vc("ec",t,e)}const UP="components",HE=Symbol.for("v-ndc");function FP(t){return De(t)?BP(UP,t,!1)||t:t||HE}function BP(t,e,n=!0,r=!1){const s=st||gt;if(s){const i=s.type;{const c=R1(i,!1);if(c&&(c===e||c===Ht(e)||c===Nc(Ht(e))))return i}const o=xp(s[t]||i[t],e)||xp(s.appContext[t],e);return!o&&r?i:o}}function xp(t,e){return t&&(t[e]||t[Ht(e)]||t[Nc(Ht(e))])}function Wa(t,e,n={},r,s){if(st.ce||st.parent&&js(st.parent)&&st.parent.ce){const h=Object.keys(n).length>0;return e!=="default"&&(n.name=e),et(),ur(bt,null,[it("slot",n,r&&r())],h?-2:64)}let i=t[e];i&&i._c&&(i._d=!1),et();const o=i&&qE(i(n)),c=n.key||o&&o.key,l=ur(bt,{key:(c&&!Yn(c)?c:`_${e}`)+(!o&&r?"_fb":"")},o||(r?r():[]),o&&t._===1?64:-2);return l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),i&&i._c&&(i._d=!0),l}function qE(t){return t.some(e=>is(e)?!(e.type===rt||e.type===bt&&!qE(e.children)):!0)?t:null}const hu=t=>t?dT(t)?Mc(t):hu(t.parent):null,Xi=Ye(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>hu(t.parent),$root:t=>hu(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>__VUE_OPTIONS_API__?WE(t):t.type,$forceUpdate:t=>t.f||(t.f=()=>{Bh(t.update)}),$nextTick:t=>t.n||(t.n=Fh.bind(t.proxy)),$watch:t=>__VUE_OPTIONS_API__?c1.bind(t):$t}),Il=(t,e)=>t!==Ae&&!t.__isScriptSetup&&_e(t,e),$P={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:c,appContext:l}=t;let h;if(e[0]!=="$"){const I=o[e];if(I!==void 0)switch(I){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Il(r,e))return o[e]=1,r[e];if(__VUE_OPTIONS_API__&&s!==Ae&&_e(s,e))return o[e]=2,s[e];if((h=t.propsOptions[0])&&_e(h,e))return o[e]=3,i[e];if(n!==Ae&&_e(n,e))return o[e]=4,n[e];(!__VUE_OPTIONS_API__||fu)&&(o[e]=0)}}const f=Xi[e];let p,g;if(f)return e==="$attrs"&&mt(t.attrs,"get",""),f(t);if((p=c.__cssModules)&&(p=p[e]))return p;if(n!==Ae&&_e(n,e))return o[e]=4,n[e];if(g=l.config.globalProperties,_e(g,e))return g[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Il(s,e)?(s[e]=n,!0):__VUE_OPTIONS_API__&&r!==Ae&&_e(r,e)?(r[e]=n,!0):_e(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i,type:o}},c){let l,h;return!!(n[c]||__VUE_OPTIONS_API__&&t!==Ae&&c[0]!=="$"&&_e(t,c)||Il(e,c)||(l=i[0])&&_e(l,c)||_e(r,c)||_e(Xi,c)||_e(s.config.globalProperties,c)||(h=o.__cssModules)&&h[c])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:_e(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Lp(t){return se(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let fu=!0;function jP(t){const e=WE(t),n=t.proxy,r=t.ctx;fu=!1,e.beforeCreate&&Mp(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:c,provide:l,inject:h,created:f,beforeMount:p,mounted:g,beforeUpdate:I,updated:C,activated:R,deactivated:N,beforeDestroy:V,beforeUnmount:q,destroyed:W,unmounted:j,render:ee,renderTracked:ie,renderTriggered:b,errorCaptured:y,serverPrefetch:_,expose:A,inheritAttrs:v,components:T,directives:E,filters:me}=e;if(h&&HP(h,r,null),o)for(const Ne in o){const ye=o[Ne];re(ye)&&(r[Ne]=ye.bind(n))}if(s){const Ne=s.call(n,n);Se(Ne)&&(t.data=xh(Ne))}if(fu=!0,i)for(const Ne in i){const ye=i[Ne],xt=re(ye)?ye.bind(n,n):re(ye.get)?ye.get.bind(n,n):$t,Ts=!re(ye)&&re(ye.set)?ye.set.bind(n):$t,on=Te({get:xt,set:Ts});Object.defineProperty(r,Ne,{enumerable:!0,configurable:!0,get:()=>on.value,set:Ct=>on.value=Ct})}if(c)for(const Ne in c)zE(c[Ne],r,n,Ne);if(l){const Ne=re(l)?l.call(n):l;Reflect.ownKeys(Ne).forEach(ye=>{KE(ye,Ne[ye])})}f&&Mp(f,t,"c");function $e(Ne,ye){se(ye)?ye.forEach(xt=>Ne(xt.bind(n))):ye&&Ne(ye.bind(n))}if($e(OP,p),$e(xc,g),$e(kP,I),$e(DP,C),$e(CP,R),$e(PP,N),$e(MP,y),$e(LP,ie),$e(xP,b),$e($E,q),$e(jE,j),$e(VP,_),se(A))if(A.length){const Ne=t.exposed||(t.exposed={});A.forEach(ye=>{Object.defineProperty(Ne,ye,{get:()=>n[ye],set:xt=>n[ye]=xt,enumerable:!0})})}else t.exposed||(t.exposed={});ee&&t.render===$t&&(t.render=ee),v!=null&&(t.inheritAttrs=v),T&&(t.components=T),E&&(t.directives=E),_&&FE(t)}function HP(t,e,n=$t){se(t)&&(t=du(t));for(const r in t){const s=t[r];let i;Se(s)?"default"in s?i=In(s.from||r,s.default,!0):i=In(s.from||r):i=In(s),ot(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function Mp(t,e,n){tn(se(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function zE(t,e,n,r){let s=r.includes(".")?oT(n,r):()=>n[r];if(De(t)){const i=e[t];re(i)&&qs(s,i)}else if(re(t))qs(s,t.bind(n));else if(Se(t))if(se(t))t.forEach(i=>zE(i,e,n,r));else{const i=re(t.handler)?t.handler.bind(n):e[t.handler];re(i)&&qs(s,i,t)}}function WE(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,c=i.get(e);let l;return c?l=c:!s.length&&!n&&!r?l=e:(l={},s.length&&s.forEach(h=>Ga(l,h,o,!0)),Ga(l,e,o)),Se(e)&&i.set(e,l),l}function Ga(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Ga(t,i,n,!0),s&&s.forEach(o=>Ga(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const c=qP[o]||n&&n[o];t[o]=c?c(t[o],e[o]):e[o]}return t}const qP={data:Up,props:Fp,emits:Fp,methods:Ui,computed:Ui,beforeCreate:Tt,created:Tt,beforeMount:Tt,mounted:Tt,beforeUpdate:Tt,updated:Tt,beforeDestroy:Tt,beforeUnmount:Tt,destroyed:Tt,unmounted:Tt,activated:Tt,deactivated:Tt,errorCaptured:Tt,serverPrefetch:Tt,components:Ui,directives:Ui,watch:WP,provide:Up,inject:zP};function Up(t,e){return e?t?function(){return Ye(re(t)?t.call(this,this):t,re(e)?e.call(this,this):e)}:e:t}function zP(t,e){return Ui(du(t),du(e))}function du(t){if(se(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Tt(t,e){return t?[...new Set([].concat(t,e))]:e}function Ui(t,e){return t?Ye(Object.create(null),t,e):e}function Fp(t,e){return t?se(t)&&se(e)?[...new Set([...t,...e])]:Ye(Object.create(null),Lp(t),Lp(e??{})):e}function WP(t,e){if(!t)return e;if(!e)return t;const n=Ye(Object.create(null),t);for(const r in e)n[r]=Tt(t[r],e[r]);return n}function GE(){return{app:null,config:{isNativeTag:tE,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let GP=0;function KP(t,e){return function(r,s=null){re(r)||(r=Ye({},r)),s!=null&&!Se(s)&&(s=null);const i=GE(),o=new WeakSet,c=[];let l=!1;const h=i.app={_uid:GP++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Wp,get config(){return i.config},set config(f){},use(f,...p){return o.has(f)||(f&&re(f.install)?(o.add(f),f.install(h,...p)):re(f)&&(o.add(f),f(h,...p))),h},mixin(f){return __VUE_OPTIONS_API__&&(i.mixins.includes(f)||i.mixins.push(f)),h},component(f,p){return p?(i.components[f]=p,h):i.components[f]},directive(f,p){return p?(i.directives[f]=p,h):i.directives[f]},mount(f,p,g){if(!l){const I=h._ceVNode||it(r,s);return I.appContext=i,g===!0?g="svg":g===!1&&(g=void 0),t(I,f,g),l=!0,h._container=f,f.__vue_app__=h,__VUE_PROD_DEVTOOLS__&&(h._instance=I.component,yP(h,Wp)),Mc(I.component)}},onUnmount(f){c.push(f)},unmount(){l&&(tn(c,h._instance,16),t(null,h._container),__VUE_PROD_DEVTOOLS__&&(h._instance=null,EP(h)),delete h._container.__vue_app__)},provide(f,p){return i.provides[f]=p,h},runWithContext(f){const p=Hs;Hs=h;try{return f()}finally{Hs=p}}};return h}}let Hs=null;function KE(t,e){if(gt){let n=gt.provides;const r=gt.parent&&gt.parent.provides;r===n&&(n=gt.provides=Object.create(r)),n[t]=e}}function In(t,e,n=!1){const r=Pr();if(r||Hs){let s=Hs?Hs._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&re(e)?e.call(r&&r.proxy):e}}const QE={},YE=()=>Object.create(QE),JE=t=>Object.getPrototypeOf(t)===QE;function QP(t,e,n,r=!1){const s={},i=YE();t.propsDefaults=Object.create(null),XE(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Lh(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function YP(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,c=Ee(s),[l]=t.propsOptions;let h=!1;if((r||o>0)&&!(o&16)){if(o&8){const f=t.vnode.dynamicProps;for(let p=0;p<f.length;p++){let g=f[p];if(Lc(t.emitsOptions,g))continue;const I=e[g];if(l)if(_e(i,g))I!==i[g]&&(i[g]=I,h=!0);else{const C=Ht(g);s[C]=pu(l,c,C,I,t,!1)}else I!==i[g]&&(i[g]=I,h=!0)}}}else{XE(t,e,s,i)&&(h=!0);let f;for(const p in c)(!e||!_e(e,p)&&((f=_s(p))===p||!_e(e,f)))&&(l?n&&(n[p]!==void 0||n[f]!==void 0)&&(s[p]=pu(l,c,p,void 0,t,!0)):delete s[p]);if(i!==c)for(const p in i)(!e||!_e(e,p))&&(delete i[p],h=!0)}h&&Vn(t.attrs,"set","")}function XE(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,c;if(e)for(let l in e){if(Wi(l))continue;const h=e[l];let f;s&&_e(s,f=Ht(l))?!i||!i.includes(f)?n[f]=h:(c||(c={}))[f]=h:Lc(t.emitsOptions,l)||(!(l in r)||h!==r[l])&&(r[l]=h,o=!0)}if(i){const l=Ee(n),h=c||Ae;for(let f=0;f<i.length;f++){const p=i[f];n[p]=pu(s,l,p,h[p],t,!_e(h,p))}}return o}function pu(t,e,n,r,s,i){const o=t[n];if(o!=null){const c=_e(o,"default");if(c&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&re(l)){const{propsDefaults:h}=s;if(n in h)r=h[n];else{const f=Vo(s);r=h[n]=l.call(null,e),f()}}else r=l;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!c?r=!1:o[1]&&(r===""||r===_s(n))&&(r=!0))}return r}const JP=new WeakMap;function ZE(t,e,n=!1){const r=__VUE_OPTIONS_API__&&n?JP:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},c=[];let l=!1;if(__VUE_OPTIONS_API__&&!re(t)){const f=p=>{l=!0;const[g,I]=ZE(p,e,!0);Ye(o,g),I&&c.push(...I)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!i&&!l)return Se(t)&&r.set(t,Fs),Fs;if(se(i))for(let f=0;f<i.length;f++){const p=Ht(i[f]);Bp(p)&&(o[p]=Ae)}else if(i)for(const f in i){const p=Ht(f);if(Bp(p)){const g=i[f],I=o[p]=se(g)||re(g)?{type:g}:Ye({},g),C=I.type;let R=!1,N=!0;if(se(C))for(let V=0;V<C.length;++V){const q=C[V],W=re(q)&&q.name;if(W==="Boolean"){R=!0;break}else W==="String"&&(N=!1)}else R=re(C)&&C.name==="Boolean";I[0]=R,I[1]=N,(R||_e(I,"default"))&&c.push(p)}}const h=[o,c];return Se(t)&&r.set(t,h),h}function Bp(t){return t[0]!=="$"&&!Wi(t)}const jh=t=>t==="_"||t==="_ctx"||t==="$stable",Hh=t=>se(t)?t.map(fn):[fn(t)],XP=(t,e,n)=>{if(e._n)return e;const r=Yi((...s)=>Hh(e(...s)),n);return r._c=!1,r},eT=(t,e,n)=>{const r=t._ctx;for(const s in t){if(jh(s))continue;const i=t[s];if(re(i))e[s]=XP(s,i,r);else if(i!=null){const o=Hh(i);e[s]=()=>o}}},tT=(t,e)=>{const n=Hh(e);t.slots.default=()=>n},nT=(t,e,n)=>{for(const r in e)(n||!jh(r))&&(t[r]=e[r])},ZP=(t,e,n)=>{const r=t.slots=YE();if(t.vnode.shapeFlag&32){const s=e._;s?(nT(r,e,n),n&&Ba(r,"_",s,!0)):eT(e,r)}else e&&tT(t,e)},e1=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Ae;if(r.shapeFlag&32){const c=e._;c?n&&c===1?i=!1:nT(s,e,n):(i=!e.$stable,eT(e,s)),o=e}else e&&(tT(t,e),o={default:1});if(i)for(const c in s)!jh(c)&&o[c]==null&&delete s[c]};function t1(){typeof __VUE_OPTIONS_API__!="boolean"&&(Xr().__VUE_OPTIONS_API__=!0),typeof __VUE_PROD_DEVTOOLS__!="boolean"&&(Xr().__VUE_PROD_DEVTOOLS__=!1),typeof __VUE_PROD_HYDRATION_MISMATCH_DETAILS__!="boolean"&&(Xr().__VUE_PROD_HYDRATION_MISMATCH_DETAILS__=!1)}const kt=g1;function n1(t){return r1(t)}function r1(t,e){t1();const n=Xr();n.__VUE__=!0,__VUE_PROD_DEVTOOLS__&&PE(n.__VUE_DEVTOOLS_GLOBAL_HOOK__,n);const{insert:r,remove:s,patchProp:i,createElement:o,createText:c,createComment:l,setText:h,setElementText:f,parentNode:p,nextSibling:g,setScopeId:I=$t,insertStaticContent:C}=t,R=(w,S,k,$=null,L=null,M=null,z=void 0,B=null,F=!!S.dynamicChildren)=>{if(w===S)return;w&&!Wr(w,S)&&($=Xn(w),Ct(w,L,M,!0),w=null),S.patchFlag===-2&&(F=!1,S.dynamicChildren=null);const{type:U,ref:X,shapeFlag:G}=S;switch(U){case Do:N(w,S,k,$);break;case rt:V(w,S,k,$);break;case ga:w==null&&q(S,k,$,z);break;case bt:T(w,S,k,$,L,M,z,B,F);break;default:G&1?ee(w,S,k,$,L,M,z,B,F):G&6?E(w,S,k,$,L,M,z,B,F):(G&64||G&128)&&U.process(w,S,k,$,L,M,z,B,F,Dr)}X!=null&&L?Ji(X,w&&w.ref,M,S||w,!S):X==null&&w&&w.ref!=null&&Ji(w.ref,null,M,w,!0)},N=(w,S,k,$)=>{if(w==null)r(S.el=c(S.children),k,$);else{const L=S.el=w.el;S.children!==w.children&&h(L,S.children)}},V=(w,S,k,$)=>{w==null?r(S.el=l(S.children||""),k,$):S.el=w.el},q=(w,S,k,$)=>{[w.el,w.anchor]=C(w.children,S,k,$,w.el,w.anchor)},W=({el:w,anchor:S},k,$)=>{let L;for(;w&&w!==S;)L=g(w),r(w,k,$),w=L;r(S,k,$)},j=({el:w,anchor:S})=>{let k;for(;w&&w!==S;)k=g(w),s(w),w=k;s(S)},ee=(w,S,k,$,L,M,z,B,F)=>{if(S.type==="svg"?z="svg":S.type==="math"&&(z="mathml"),w==null)ie(S,k,$,L,M,z,B,F);else{const U=w.el&&w.el._isVueCE?w.el:null;try{U&&U._beginPatch(),_(w,S,L,M,z,B,F)}finally{U&&U._endPatch()}}},ie=(w,S,k,$,L,M,z,B)=>{let F,U;const{props:X,shapeFlag:G,transition:J,dirs:Z}=w;if(F=w.el=o(w.type,M,X&&X.is,X),G&8?f(F,w.children):G&16&&y(w.children,F,null,$,L,vl(w,M),z,B),Z&&Fr(w,null,$,"created"),b(F,w,w.scopeId,z,$),X){for(const Ie in X)Ie!=="value"&&!Wi(Ie)&&i(F,Ie,null,X[Ie],M,$);"value"in X&&i(F,"value",null,X.value,M),(U=X.onVnodeBeforeMount)&&ln(U,$,w)}__VUE_PROD_DEVTOOLS__&&(Ba(F,"__vnode",w,!0),Ba(F,"__vueParentComponent",$,!0)),Z&&Fr(w,null,$,"beforeMount");const ue=s1(L,J);ue&&J.beforeEnter(F),r(F,S,k),((U=X&&X.onVnodeMounted)||ue||Z)&&kt(()=>{U&&ln(U,$,w),ue&&J.enter(F),Z&&Fr(w,null,$,"mounted")},L)},b=(w,S,k,$,L)=>{if(k&&I(w,k),$)for(let M=0;M<$.length;M++)I(w,$[M]);if(L){let M=L.subTree;if(S===M||cT(M.type)&&(M.ssContent===S||M.ssFallback===S)){const z=L.vnode;b(w,z,z.scopeId,z.slotScopeIds,L.parent)}}},y=(w,S,k,$,L,M,z,B,F=0)=>{for(let U=F;U<w.length;U++){const X=w[U]=B?cr(w[U]):fn(w[U]);R(null,X,S,k,$,L,M,z,B)}},_=(w,S,k,$,L,M,z)=>{const B=S.el=w.el;__VUE_PROD_DEVTOOLS__&&(B.__vnode=S);let{patchFlag:F,dynamicChildren:U,dirs:X}=S;F|=w.patchFlag&16;const G=w.props||Ae,J=S.props||Ae;let Z;if(k&&Br(k,!1),(Z=J.onVnodeBeforeUpdate)&&ln(Z,k,S,w),X&&Fr(S,w,k,"beforeUpdate"),k&&Br(k,!0),(G.innerHTML&&J.innerHTML==null||G.textContent&&J.textContent==null)&&f(B,""),U?A(w.dynamicChildren,U,B,k,$,vl(S,L),M):z||ye(w,S,B,null,k,$,vl(S,L),M,!1),F>0){if(F&16)v(B,G,J,k,L);else if(F&2&&G.class!==J.class&&i(B,"class",null,J.class,L),F&4&&i(B,"style",G.style,J.style,L),F&8){const ue=S.dynamicProps;for(let Ie=0;Ie<ue.length;Ie++){const ge=ue[Ie],ct=G[ge],lt=J[ge];(lt!==ct||ge==="value")&&i(B,ge,ct,lt,L,k)}}F&1&&w.children!==S.children&&f(B,S.children)}else!z&&U==null&&v(B,G,J,k,L);((Z=J.onVnodeUpdated)||X)&&kt(()=>{Z&&ln(Z,k,S,w),X&&Fr(S,w,k,"updated")},$)},A=(w,S,k,$,L,M,z)=>{for(let B=0;B<S.length;B++){const F=w[B],U=S[B],X=F.el&&(F.type===bt||!Wr(F,U)||F.shapeFlag&198)?p(F.el):k;R(F,U,X,null,$,L,M,z,!0)}},v=(w,S,k,$,L)=>{if(S!==k){if(S!==Ae)for(const M in S)!Wi(M)&&!(M in k)&&i(w,M,S[M],null,L,$);for(const M in k){if(Wi(M))continue;const z=k[M],B=S[M];z!==B&&M!=="value"&&i(w,M,B,z,L,$)}"value"in k&&i(w,"value",S.value,k.value,L)}},T=(w,S,k,$,L,M,z,B,F)=>{const U=S.el=w?w.el:c(""),X=S.anchor=w?w.anchor:c("");let{patchFlag:G,dynamicChildren:J,slotScopeIds:Z}=S;Z&&(B=B?B.concat(Z):Z),w==null?(r(U,k,$),r(X,k,$),y(S.children||[],k,X,L,M,z,B,F)):G>0&&G&64&&J&&w.dynamicChildren?(A(w.dynamicChildren,J,k,L,M,z,B),(S.key!=null||L&&S===L.subTree)&&rT(w,S,!0)):ye(w,S,k,X,L,M,z,B,F)},E=(w,S,k,$,L,M,z,B,F)=>{S.slotScopeIds=B,w==null?S.shapeFlag&512?L.ctx.activate(S,k,$,z,F):me(S,k,$,L,M,z,F):Je(w,S,F)},me=(w,S,k,$,L,M,z)=>{const B=w.component=I1(w,$,L);if(Dc(w)&&(B.ctx.renderer=Dr),v1(B,!1,z),B.asyncDep){if(L&&L.registerDep(B,$e,z),!w.el){const F=B.subTree=it(rt);V(null,F,S,k),w.placeholder=F.el}}else $e(B,w,S,k,L,M,z)},Je=(w,S,k)=>{const $=S.component=w.component;if(p1(w,S,k))if($.asyncDep&&!$.asyncResolved){Ne($,S,k);return}else $.next=S,$.update();else S.el=w.el,$.vnode=S},$e=(w,S,k,$,L,M,z)=>{const B=()=>{if(w.isMounted){let{next:G,bu:J,u:Z,parent:ue,vnode:Ie}=w;{const Nt=sT(w);if(Nt){G&&(G.el=Ie.el,Ne(w,G,z)),Nt.asyncDep.then(()=>{w.isUnmounted||B()});return}}let ge=G,ct;Br(w,!1),G?(G.el=Ie.el,Ne(w,G,z)):G=Ie,J&&gl(J),(ct=G.props&&G.props.onVnodeBeforeUpdate)&&ln(ct,ue,G,Ie),Br(w,!0);const lt=jp(w),Pt=w.subTree;w.subTree=lt,R(Pt,lt,p(Pt.el),Xn(Pt),w,L,M),G.el=lt.el,ge===null&&m1(w,lt.el),Z&&kt(Z,L),(ct=G.props&&G.props.onVnodeUpdated)&&kt(()=>ln(ct,ue,G,Ie),L),__VUE_PROD_DEVTOOLS__&&NE(w)}else{let G;const{el:J,props:Z}=S,{bm:ue,m:Ie,parent:ge,root:ct,type:lt}=w,Pt=js(S);Br(w,!1),ue&&gl(ue),!Pt&&(G=Z&&Z.onVnodeBeforeMount)&&ln(G,ge,S),Br(w,!0);{ct.ce&&ct.ce._def.shadowRoot!==!1&&ct.ce._injectChildStyle(lt);const Nt=w.subTree=jp(w);R(null,Nt,k,$,w,L,M),S.el=Nt.el}if(Ie&&kt(Ie,L),!Pt&&(G=Z&&Z.onVnodeMounted)){const Nt=S;kt(()=>ln(G,ge,Nt),L)}(S.shapeFlag&256||ge&&js(ge.vnode)&&ge.vnode.shapeFlag&256)&&w.a&&kt(w.a,L),w.isMounted=!0,__VUE_PROD_DEVTOOLS__&&TP(w),S=k=$=null}};w.scope.on();const F=w.effect=new uE(B);w.scope.off();const U=w.update=F.run.bind(F),X=w.job=F.runIfDirty.bind(F);X.i=w,X.id=w.uid,F.scheduler=()=>Bh(X),Br(w,!0),U()},Ne=(w,S,k)=>{S.component=w;const $=w.vnode.props;w.vnode=S,w.next=null,YP(w,S.props,$,k),e1(w,S.children,k),zn(),kp(w),Wn()},ye=(w,S,k,$,L,M,z,B,F=!1)=>{const U=w&&w.children,X=w?w.shapeFlag:0,G=S.children,{patchFlag:J,shapeFlag:Z}=S;if(J>0){if(J&128){Ts(U,G,k,$,L,M,z,B,F);return}else if(J&256){xt(U,G,k,$,L,M,z,B,F);return}}Z&8?(X&16&&Sn(U,L,M),G!==U&&f(k,G)):X&16?Z&16?Ts(U,G,k,$,L,M,z,B,F):Sn(U,L,M,!0):(X&8&&f(k,""),Z&16&&y(G,k,$,L,M,z,B,F))},xt=(w,S,k,$,L,M,z,B,F)=>{w=w||Fs,S=S||Fs;const U=w.length,X=S.length,G=Math.min(U,X);let J;for(J=0;J<G;J++){const Z=S[J]=F?cr(S[J]):fn(S[J]);R(w[J],Z,k,null,L,M,z,B,F)}U>X?Sn(w,L,M,!0,!1,G):y(S,k,$,L,M,z,B,F,G)},Ts=(w,S,k,$,L,M,z,B,F)=>{let U=0;const X=S.length;let G=w.length-1,J=X-1;for(;U<=G&&U<=J;){const Z=w[U],ue=S[U]=F?cr(S[U]):fn(S[U]);if(Wr(Z,ue))R(Z,ue,k,null,L,M,z,B,F);else break;U++}for(;U<=G&&U<=J;){const Z=w[G],ue=S[J]=F?cr(S[J]):fn(S[J]);if(Wr(Z,ue))R(Z,ue,k,null,L,M,z,B,F);else break;G--,J--}if(U>G){if(U<=J){const Z=J+1,ue=Z<X?S[Z].el:$;for(;U<=J;)R(null,S[U]=F?cr(S[U]):fn(S[U]),k,ue,L,M,z,B,F),U++}}else if(U>J)for(;U<=G;)Ct(w[U],L,M,!0),U++;else{const Z=U,ue=U,Ie=new Map;for(U=ue;U<=J;U++){const Xe=S[U]=F?cr(S[U]):fn(S[U]);Xe.key!=null&&Ie.set(Xe.key,U)}let ge,ct=0;const lt=J-ue+1;let Pt=!1,Nt=0;const qt=new Array(lt);for(U=0;U<lt;U++)qt[U]=0;for(U=Z;U<=G;U++){const Xe=w[U];if(ct>=lt){Ct(Xe,L,M,!0);continue}let Ge;if(Xe.key!=null)Ge=Ie.get(Xe.key);else for(ge=ue;ge<=J;ge++)if(qt[ge-ue]===0&&Wr(Xe,S[ge])){Ge=ge;break}Ge===void 0?Ct(Xe,L,M,!0):(qt[Ge-ue]=U+1,Ge>=Nt?Nt=Ge:Pt=!0,R(Xe,S[Ge],k,null,L,M,z,B,F),ct++)}const Is=Pt?i1(qt):Fs;for(ge=Is.length-1,U=lt-1;U>=0;U--){const Xe=ue+U,Ge=S[Xe],hi=S[Xe+1],Vr=Xe+1<X?hi.el||hi.placeholder:$;qt[U]===0?R(null,Ge,k,Vr,L,M,z,B,F):Pt&&(ge<0||U!==Is[ge]?on(Ge,k,Vr,2):ge--)}}},on=(w,S,k,$,L=null)=>{const{el:M,type:z,transition:B,children:F,shapeFlag:U}=w;if(U&6){on(w.component.subTree,S,k,$);return}if(U&128){w.suspense.move(S,k,$);return}if(U&64){z.move(w,S,k,Dr);return}if(z===bt){r(M,S,k);for(let G=0;G<F.length;G++)on(F[G],S,k,$);r(w.anchor,S,k);return}if(z===ga){W(w,S,k);return}if($!==2&&U&1&&B)if($===0)B.beforeEnter(M),r(M,S,k),kt(()=>B.enter(M),L);else{const{leave:G,delayLeave:J,afterLeave:Z}=B,ue=()=>{w.ctx.isUnmounted?s(M):r(M,S,k)},Ie=()=>{M._isLeaving&&M[Nn](!0),G(M,()=>{ue(),Z&&Z()})};J?J(M,ue,Ie):Ie()}else r(M,S,k)},Ct=(w,S,k,$=!1,L=!1)=>{const{type:M,props:z,ref:B,children:F,dynamicChildren:U,shapeFlag:X,patchFlag:G,dirs:J,cacheIndex:Z}=w;if(G===-2&&(L=!1),B!=null&&(zn(),Ji(B,null,k,w,!0),Wn()),Z!=null&&(S.renderCache[Z]=void 0),X&256){S.ctx.deactivate(w);return}const ue=X&1&&J,Ie=!js(w);let ge;if(Ie&&(ge=z&&z.onVnodeBeforeUnmount)&&ln(ge,S,w),X&6)li(w.component,k,$);else{if(X&128){w.suspense.unmount(k,$);return}ue&&Fr(w,null,S,"beforeUnmount"),X&64?w.type.remove(w,S,k,Dr,$):U&&!U.hasOnce&&(M!==bt||G>0&&G&64)?Sn(U,S,k,!1,!0):(M===bt&&G&384||!L&&X&16)&&Sn(F,S,k),$&&ci(w)}(Ie&&(ge=z&&z.onVnodeUnmounted)||ue)&&kt(()=>{ge&&ln(ge,S,w),ue&&Fr(w,null,S,"unmounted")},k)},ci=w=>{const{type:S,el:k,anchor:$,transition:L}=w;if(S===bt){ws(k,$);return}if(S===ga){j(w);return}const M=()=>{s(k),L&&!L.persisted&&L.afterLeave&&L.afterLeave()};if(w.shapeFlag&1&&L&&!L.persisted){const{leave:z,delayLeave:B}=L,F=()=>z(k,M);B?B(w.el,M,F):F()}else M()},ws=(w,S)=>{let k;for(;w!==S;)k=g(w),s(w),w=k;s(S)},li=(w,S,k)=>{const{bum:$,scope:L,job:M,subTree:z,um:B,m:F,a:U}=w;$p(F),$p(U),$&&gl($),L.stop(),M&&(M.flags|=8,Ct(z,w,S,k)),B&&kt(B,S),kt(()=>{w.isUnmounted=!0},S),__VUE_PROD_DEVTOOLS__&&IP(w)},Sn=(w,S,k,$=!1,L=!1,M=0)=>{for(let z=M;z<w.length;z++)Ct(w[z],S,k,$,L)},Xn=w=>{if(w.shapeFlag&6)return Xn(w.component.subTree);if(w.shapeFlag&128)return w.suspense.next();const S=g(w.anchor||w.el),k=S&&S[AP];return k?g(k):S};let kr=!1;const ui=(w,S,k)=>{w==null?S._vnode&&Ct(S._vnode,null,null,!0):R(S._vnode||null,w,S,null,null,null,k),S._vnode=w,kr||(kr=!0,kp(),RE(),kr=!1)},Dr={p:R,um:Ct,m:on,r:ci,mt:me,mc:y,pc:ye,pbc:A,n:Xn,o:t};return{render:ui,hydrate:void 0,createApp:KP(ui)}}function vl({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Br({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function s1(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function rT(t,e,n=!1){const r=t.children,s=e.children;if(se(r)&&se(s))for(let i=0;i<r.length;i++){const o=r[i];let c=s[i];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=s[i]=cr(s[i]),c.el=o.el),!n&&c.patchFlag!==-2&&rT(o,c)),c.type===Do&&c.patchFlag!==-1&&(c.el=o.el),c.type===rt&&!c.el&&(c.el=o.el)}}function i1(t){const e=t.slice(),n=[0];let r,s,i,o,c;const l=t.length;for(r=0;r<l;r++){const h=t[r];if(h!==0){if(s=n[n.length-1],t[s]<h){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)c=i+o>>1,t[n[c]]<h?i=c+1:o=c;h<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function sT(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:sT(e)}function $p(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const o1=Symbol.for("v-scx"),a1=()=>In(o1);function qs(t,e,n){return iT(t,e,n)}function iT(t,e,n=Ae){const{immediate:r,deep:s,flush:i,once:o}=n,c=Ye({},n),l=e&&r||!e&&i!=="post";let h;if(mo){if(i==="sync"){const I=a1();h=I.__watcherHandles||(I.__watcherHandles=[])}else if(!l){const I=()=>{};return I.stop=$t,I.resume=$t,I.pause=$t,I}}const f=gt;c.call=(I,C,R)=>tn(I,f,C,R);let p=!1;i==="post"?c.scheduler=I=>{kt(I,f&&f.suspense)}:i!=="sync"&&(p=!0,c.scheduler=(I,C)=>{C?I():Bh(I)}),c.augmentJob=I=>{e&&(I.flags|=4),p&&(I.flags|=2,f&&(I.id=f.uid,I.i=f))};const g=pP(t,e,c);return mo&&(h?h.push(g):l&&g()),g}function c1(t,e,n){const r=this.proxy,s=De(t)?t.includes(".")?oT(r,t):()=>r[t]:t.bind(r,r);let i;re(e)?i=e:(i=e.handler,n=e);const o=Vo(this),c=iT(s,i.bind(r),n);return o(),c}function oT(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const l1=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Ht(e)}Modifiers`]||t[`${_s(e)}Modifiers`];function u1(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Ae;let s=n;const i=e.startsWith("update:"),o=i&&l1(r,e.slice(7));o&&(o.trim&&(s=n.map(f=>De(f)?f.trim():f)),o.number&&(s=n.map(DC))),__VUE_PROD_DEVTOOLS__&&vP(t,e,s);let c,l=r[c=ml(e)]||r[c=ml(Ht(e))];!l&&i&&(l=r[c=ml(_s(e))]),l&&tn(l,t,6,s);const h=r[c+"Once"];if(h){if(!t.emitted)t.emitted={};else if(t.emitted[c])return;t.emitted[c]=!0,tn(h,t,6,s)}}const h1=new WeakMap;function aT(t,e,n=!1){const r=__VUE_OPTIONS_API__&&n?h1:e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},c=!1;if(__VUE_OPTIONS_API__&&!re(t)){const l=h=>{const f=aT(h,e,!0);f&&(c=!0,Ye(o,f))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!c?(Se(t)&&r.set(t,null),null):(se(i)?i.forEach(l=>o[l]=null):Ye(o,i),Se(t)&&r.set(t,o),o)}function Lc(t,e){return!t||!Rc(e)?!1:(e=e.slice(2).replace(/Once$/,""),_e(t,e[0].toLowerCase()+e.slice(1))||_e(t,_s(e))||_e(t,e))}function jp(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:c,emit:l,render:h,renderCache:f,props:p,data:g,setupState:I,ctx:C,inheritAttrs:R}=t,N=qa(t);let V,q;try{if(n.shapeFlag&4){const j=s||r,ee=j;V=fn(h.call(ee,j,f,p,I,g,C)),q=c}else{const j=e;V=fn(j.length>1?j(p,{attrs:c,slots:o,emit:l}):j(p,null)),q=e.props?c:f1(c)}}catch(j){Zi.length=0,Oc(j,t,1),V=it(rt)}let W=V;if(q&&R!==!1){const j=Object.keys(q),{shapeFlag:ee}=W;j.length&&ee&7&&(i&&j.some(bh)&&(q=d1(q,i)),W=Cr(W,q,!1,!0))}return n.dirs&&(W=Cr(W,null,!1,!0),W.dirs=W.dirs?W.dirs.concat(n.dirs):n.dirs),n.transition&&fo(W,n.transition),V=W,qa(N),V}const f1=t=>{let e;for(const n in t)(n==="class"||n==="style"||Rc(n))&&((e||(e={}))[n]=t[n]);return e},d1=(t,e)=>{const n={};for(const r in t)(!bh(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function p1(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:c,patchFlag:l}=e,h=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Hp(r,o,h):!!o;if(l&8){const f=e.dynamicProps;for(let p=0;p<f.length;p++){const g=f[p];if(o[g]!==r[g]&&!Lc(h,g))return!0}}}else return(s||c)&&(!c||!c.$stable)?!0:r===o?!1:r?o?Hp(r,o,h):!0:!!o;return!1}function Hp(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Lc(n,i))return!0}return!1}function m1({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const cT=t=>t.__isSuspense;function g1(t,e){e&&e.pendingBranch?se(t)?e.effects.push(...t):e.effects.push(t):_P(t)}const bt=Symbol.for("v-fgt"),Do=Symbol.for("v-txt"),rt=Symbol.for("v-cmt"),ga=Symbol.for("v-stc"),Zi=[];let Vt=null;function et(t=!1){Zi.push(Vt=t?null:[])}function _1(){Zi.pop(),Vt=Zi[Zi.length-1]||null}let po=1;function Ka(t,e=!1){po+=t,t<0&&Vt&&e&&(Vt.hasOnce=!0)}function lT(t){return t.dynamicChildren=po>0?Vt||Fs:null,_1(),po>0&&Vt&&Vt.push(t),t}function Gn(t,e,n,r,s,i){return lT(An(t,e,n,r,s,i,!0))}function ur(t,e,n,r,s){return lT(it(t,e,n,r,s,!0))}function is(t){return t?t.__v_isVNode===!0:!1}function Wr(t,e){return t.type===e.type&&t.key===e.key}const uT=({key:t})=>t??null,_a=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?De(t)||ot(t)||re(t)?{i:st,r:t,k:e,f:!!n}:t:null);function An(t,e=null,n=null,r=0,s=null,i=t===bt?0:1,o=!1,c=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&uT(e),ref:e&&_a(e),scopeId:OE,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:st};return c?(qh(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=De(n)?8:16),po>0&&!o&&Vt&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Vt.push(l),l}const it=y1;function y1(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===HE)&&(t=rt),is(t)){const c=Cr(t,e,!0);return n&&qh(c,n),po>0&&!i&&Vt&&(c.shapeFlag&6?Vt[Vt.indexOf(t)]=c:Vt.push(c)),c.patchFlag=-2,c}if(C1(t)&&(t=t.__vccOpts),e){e=E1(e);let{class:c,style:l}=e;c&&!De(c)&&(e.class=Wt(c)),Se(l)&&(Uh(l)&&!se(l)&&(l=Ye({},l)),e.style=Oo(l))}const o=De(t)?1:cT(t)?128:DE(t)?64:Se(t)?4:re(t)?2:0;return An(t,e,n,r,s,o,i,!0)}function E1(t){return t?Uh(t)||JE(t)?Ye({},t):t:null}function Cr(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:c,transition:l}=t,h=e?fT(s||{},e):s,f={__v_isVNode:!0,__v_skip:!0,type:t.type,props:h,key:h&&uT(h),ref:e&&e.ref?n&&i?se(i)?i.concat(_a(e)):[i,_a(e)]:_a(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:c,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==bt?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Cr(t.ssContent),ssFallback:t.ssFallback&&Cr(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&r&&fo(f,l.clone(f)),f}function hT(t=" ",e=0){return it(Do,null,t,e)}function ra(t="",e=!1){return e?(et(),ur(rt,null,t)):it(rt,null,t)}function fn(t){return t==null||typeof t=="boolean"?it(rt):se(t)?it(bt,null,t.slice()):is(t)?cr(t):it(Do,null,String(t))}function cr(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Cr(t)}function qh(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(se(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),qh(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!JE(e)?e._ctx=st:s===3&&st&&(st.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else re(e)?(e={default:e,_ctx:st},n=32):(e=String(e),r&64?(n=16,e=[hT(e)]):n=8);t.children=e,t.shapeFlag|=n}function fT(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Wt([e.class,r.class]));else if(s==="style")e.style=Oo([e.style,r.style]);else if(Rc(s)){const i=e[s],o=r[s];o&&i!==o&&!(se(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function ln(t,e,n,r=null){tn(t,e,7,[n,r])}const T1=GE();let w1=0;function I1(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||T1,i={uid:w1++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new $C(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ZE(r,s),emitsOptions:aT(r,s),emit:null,emitted:null,propsDefaults:Ae,inheritAttrs:r.inheritAttrs,ctx:Ae,data:Ae,props:Ae,attrs:Ae,slots:Ae,refs:Ae,setupState:Ae,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=u1.bind(null,i),t.ce&&t.ce(i),i}let gt=null;const Pr=()=>gt||st;let Qa,mu;{const t=Xr(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};Qa=e("__VUE_INSTANCE_SETTERS__",n=>gt=n),mu=e("__VUE_SSR_SETTERS__",n=>mo=n)}const Vo=t=>{const e=gt;return Qa(t),t.scope.on(),()=>{t.scope.off(),Qa(e)}},qp=()=>{gt&&gt.scope.off(),Qa(null)};function dT(t){return t.vnode.shapeFlag&4}let mo=!1;function v1(t,e=!1,n=!1){e&&mu(e);const{props:r,children:s}=t.vnode,i=dT(t);QP(t,r,i,e),ZP(t,s,n||e);const o=i?A1(t,e):void 0;return e&&mu(!1),o}function A1(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,$P);const{setup:r}=n;if(r){zn();const s=t.setupContext=r.length>1?S1(t):null,i=Vo(t),o=ko(r,t,0,[t.props,s]),c=rE(o);if(Wn(),i(),(c||t.sp)&&!js(t)&&FE(t),c){if(o.then(qp,qp),e)return o.then(l=>{zp(t,l)}).catch(l=>{Oc(l,t,0)});t.asyncDep=o}else zp(t,o)}else pT(t)}function zp(t,e,n){re(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Se(e)&&(__VUE_PROD_DEVTOOLS__&&(t.devtoolsRawSetupState=e),t.setupState=AE(e)),pT(t)}function pT(t,e,n){const r=t.type;if(t.render||(t.render=r.render||$t),__VUE_OPTIONS_API__){const s=Vo(t);zn();try{jP(t)}finally{Wn(),s()}}}const b1={get(t,e){return mt(t,"get",""),t[e]}};function S1(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,b1),slots:t.slots,emit:t.emit,expose:e}}function Mc(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(AE(aP(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Xi)return Xi[n](t)},has(e,n){return n in e||n in Xi}})):t.proxy}function R1(t,e=!0){return re(t)?t.displayName||t.name:t.name||e&&t.__name}function C1(t){return re(t)&&"__vccOpts"in t}const Te=(t,e)=>fP(t,e,mo);function P1(t,e,n){try{Ka(-1);const r=arguments.length;return r===2?Se(e)&&!se(e)?is(e)?it(t,null,[e]):it(t,e):it(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&is(n)&&(n=[n]),it(t,e,n))}finally{Ka(1)}}const Wp="3.5.24",N1=$t;/**
* @vue/runtime-dom v3.5.24
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let gu;const Gp=typeof window<"u"&&window.trustedTypes;if(Gp)try{gu=Gp.createPolicy("vue",{createHTML:t=>t})}catch{}const mT=gu?t=>gu.createHTML(t):t=>t,O1="http://www.w3.org/2000/svg",k1="http://www.w3.org/1998/Math/MathML",Pn=typeof document<"u"?document:null,Kp=Pn&&Pn.createElement("template"),D1={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?Pn.createElementNS(O1,t):e==="mathml"?Pn.createElementNS(k1,t):n?Pn.createElement(t,{is:n}):Pn.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Pn.createTextNode(t),createComment:t=>Pn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Pn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Kp.innerHTML=mT(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const c=Kp.content;if(r==="svg"||r==="mathml"){const l=c.firstChild;for(;l.firstChild;)c.appendChild(l.firstChild);c.removeChild(l)}e.insertBefore(c,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},or="transition",Ci="animation",go=Symbol("_vtc"),gT={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},V1=Ye({},VE,gT),x1=t=>(t.displayName="Transition",t.props=V1,t),_T=x1((t,{slots:e})=>P1(RP,L1(t),e)),$r=(t,e=[])=>{se(t)?t.forEach(n=>n(...e)):t&&t(...e)},Qp=t=>t?se(t)?t.some(e=>e.length>1):t.length>1:!1;function L1(t){const e={};for(const T in t)T in gT||(e[T]=t[T]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:c=`${n}-enter-to`,appearFromClass:l=i,appearActiveClass:h=o,appearToClass:f=c,leaveFromClass:p=`${n}-leave-from`,leaveActiveClass:g=`${n}-leave-active`,leaveToClass:I=`${n}-leave-to`}=t,C=M1(s),R=C&&C[0],N=C&&C[1],{onBeforeEnter:V,onEnter:q,onEnterCancelled:W,onLeave:j,onLeaveCancelled:ee,onBeforeAppear:ie=V,onAppear:b=q,onAppearCancelled:y=W}=e,_=(T,E,me,Je)=>{T._enterCancelled=Je,jr(T,E?f:c),jr(T,E?h:o),me&&me()},A=(T,E)=>{T._isLeaving=!1,jr(T,p),jr(T,I),jr(T,g),E&&E()},v=T=>(E,me)=>{const Je=T?b:q,$e=()=>_(E,T,me);$r(Je,[E,$e]),Yp(()=>{jr(E,T?l:i),Cn(E,T?f:c),Qp(Je)||Jp(E,r,R,$e)})};return Ye(e,{onBeforeEnter(T){$r(V,[T]),Cn(T,i),Cn(T,o)},onBeforeAppear(T){$r(ie,[T]),Cn(T,l),Cn(T,h)},onEnter:v(!1),onAppear:v(!0),onLeave(T,E){T._isLeaving=!0;const me=()=>A(T,E);Cn(T,p),T._enterCancelled?(Cn(T,g),em(T)):(em(T),Cn(T,g)),Yp(()=>{T._isLeaving&&(jr(T,p),Cn(T,I),Qp(j)||Jp(T,r,N,me))}),$r(j,[T,me])},onEnterCancelled(T){_(T,!1,void 0,!0),$r(W,[T])},onAppearCancelled(T){_(T,!0,void 0,!0),$r(y,[T])},onLeaveCancelled(T){A(T),$r(ee,[T])}})}function M1(t){if(t==null)return null;if(Se(t))return[Al(t.enter),Al(t.leave)];{const e=Al(t);return[e,e]}}function Al(t){return VC(t)}function Cn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[go]||(t[go]=new Set)).add(e)}function jr(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const n=t[go];n&&(n.delete(e),n.size||(t[go]=void 0))}function Yp(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let U1=0;function Jp(t,e,n,r){const s=t._endId=++U1,i=()=>{s===t._endId&&r()};if(n!=null)return setTimeout(i,n);const{type:o,timeout:c,propCount:l}=F1(t,e);if(!o)return r();const h=o+"end";let f=0;const p=()=>{t.removeEventListener(h,g),i()},g=I=>{I.target===t&&++f>=l&&p()};setTimeout(()=>{f<l&&p()},c+1),t.addEventListener(h,g)}function F1(t,e){const n=window.getComputedStyle(t),r=C=>(n[C]||"").split(", "),s=r(`${or}Delay`),i=r(`${or}Duration`),o=Xp(s,i),c=r(`${Ci}Delay`),l=r(`${Ci}Duration`),h=Xp(c,l);let f=null,p=0,g=0;e===or?o>0&&(f=or,p=o,g=i.length):e===Ci?h>0&&(f=Ci,p=h,g=l.length):(p=Math.max(o,h),f=p>0?o>h?or:Ci:null,g=f?f===or?i.length:l.length:0);const I=f===or&&/\b(?:transform|all)(?:,|$)/.test(r(`${or}Property`).toString());return{type:f,timeout:p,propCount:g,hasTransform:I}}function Xp(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>Zp(n)+Zp(t[r])))}function Zp(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function em(t){return(t?t.ownerDocument:document).body.offsetHeight}function B1(t,e,n){const r=t[go];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Ya=Symbol("_vod"),yT=Symbol("_vsh"),ET={name:"show",beforeMount(t,{value:e},{transition:n}){t[Ya]=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):Pi(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:r}){!e!=!n&&(r?e?(r.beforeEnter(t),Pi(t,!0),r.enter(t)):r.leave(t,()=>{Pi(t,!1)}):Pi(t,e))},beforeUnmount(t,{value:e}){Pi(t,e)}};function Pi(t,e){t.style.display=e?t[Ya]:"none",t[yT]=!e}const $1=Symbol(""),j1=/(?:^|;)\s*display\s*:/;function H1(t,e,n){const r=t.style,s=De(n);let i=!1;if(n&&!s){if(e)if(De(e))for(const o of e.split(";")){const c=o.slice(0,o.indexOf(":")).trim();n[c]==null&&ya(r,c,"")}else for(const o in e)n[o]==null&&ya(r,o,"");for(const o in n)o==="display"&&(i=!0),ya(r,o,n[o])}else if(s){if(e!==n){const o=r[$1];o&&(n+=";"+o),r.cssText=n,i=j1.test(n)}}else e&&t.removeAttribute("style");Ya in t&&(t[Ya]=i?r.display:"",t[yT]&&(r.display="none"))}const tm=/\s*!important$/;function ya(t,e,n){if(se(n))n.forEach(r=>ya(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=q1(t,e);tm.test(n)?t.setProperty(_s(r),n.replace(tm,""),"important"):t[r]=n}}const nm=["Webkit","Moz","ms"],bl={};function q1(t,e){const n=bl[e];if(n)return n;let r=Ht(e);if(r!=="filter"&&r in t)return bl[e]=r;r=Nc(r);for(let s=0;s<nm.length;s++){const i=nm[s]+r;if(i in t)return bl[e]=i}return e}const rm="http://www.w3.org/1999/xlink";function sm(t,e,n,r,s,i=BC(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(rm,e.slice(6,e.length)):t.setAttributeNS(rm,e,n):n==null||i&&!oE(n)?t.removeAttribute(e):t.setAttribute(e,i?"":Yn(n)?String(n):n)}function im(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?mT(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const c=i==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(c!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=oE(n):n==null&&c==="string"?(n="",o=!0):c==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function z1(t,e,n,r){t.addEventListener(e,n,r)}function W1(t,e,n,r){t.removeEventListener(e,n,r)}const om=Symbol("_vei");function G1(t,e,n,r,s=null){const i=t[om]||(t[om]={}),o=i[e];if(r&&o)o.value=r;else{const[c,l]=K1(e);if(r){const h=i[e]=J1(r,s);z1(t,c,h,l)}else o&&(W1(t,c,o,l),i[e]=void 0)}}const am=/(?:Once|Passive|Capture)$/;function K1(t){let e;if(am.test(t)){e={};let r;for(;r=t.match(am);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):_s(t.slice(2)),e]}let Sl=0;const Q1=Promise.resolve(),Y1=()=>Sl||(Q1.then(()=>Sl=0),Sl=Date.now());function J1(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;tn(X1(r,n.value),e,5,[r])};return n.value=t,n.attached=Y1(),n}function X1(t,e){if(se(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const cm=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Z1=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?B1(t,r,o):e==="style"?H1(t,n,r):Rc(e)?bh(e)||G1(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):eN(t,e,r,o))?(im(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&sm(t,e,r,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!De(r))?im(t,Ht(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),sm(t,e,r,o))};function eN(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&cm(e)&&re(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&t.tagName==="IFRAME"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return cm(e)&&De(n)?!1:e in t}const tN=["ctrl","shift","alt","meta"],nN={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>tN.some(n=>t[`${n}Key`]&&!e.includes(n))},rN=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const c=nN[e[o]];if(c&&c(s,e))return}return t(s,...i)})},sN=Ye({patchProp:Z1},D1);let lm;function iN(){return lm||(lm=n1(sN))}const um=(...t)=>{iN().render(...t)},TT=Symbol(),Ea="el",oN="is-",Hr=(t,e,n,r,s)=>{let i=`${t}-${e}`;return n&&(i+=`-${n}`),r&&(i+=`__${r}`),s&&(i+=`--${s}`),i},wT=Symbol("namespaceContextKey"),aN=t=>{const e=t||(Pr()?In(wT,Ft(Ea)):Ft(Ea));return Te(()=>ae(e)||Ea)},zh=(t,e)=>{const n=aN(e);return{namespace:n,b:(R="")=>Hr(n.value,t,R,"",""),e:R=>R?Hr(n.value,t,"",R,""):"",m:R=>R?Hr(n.value,t,"","",R):"",be:(R,N)=>R&&N?Hr(n.value,t,R,N,""):"",em:(R,N)=>R&&N?Hr(n.value,t,"",R,N):"",bm:(R,N)=>R&&N?Hr(n.value,t,R,"",N):"",bem:(R,N,V)=>R&&N&&V?Hr(n.value,t,R,N,V):"",is:(R,...N)=>{const V=N.length>=1?N[0]:!0;return R&&V?`${oN}${R}`:""},cssVar:R=>{const N={};for(const V in R)R[V]&&(N[`--${n.value}-${V}`]=R[V]);return N},cssVarName:R=>`--${n.value}-${R}`,cssVarBlock:R=>{const N={};for(const V in R)R[V]&&(N[`--${n.value}-${t}-${V}`]=R[V]);return N},cssVarBlockName:R=>`--${n.value}-${t}-${R}`}};var cN=typeof global=="object"&&global&&global.Object===Object&&global,lN=typeof self=="object"&&self&&self.Object===Object&&self,Wh=cN||lN||Function("return this")(),ei=Wh.Symbol,IT=Object.prototype,uN=IT.hasOwnProperty,hN=IT.toString,Ni=ei?ei.toStringTag:void 0;function fN(t){var e=uN.call(t,Ni),n=t[Ni];try{t[Ni]=void 0;var r=!0}catch{}var s=hN.call(t);return r&&(e?t[Ni]=n:delete t[Ni]),s}var dN=Object.prototype,pN=dN.toString;function mN(t){return pN.call(t)}var gN="[object Null]",_N="[object Undefined]",hm=ei?ei.toStringTag:void 0;function vT(t){return t==null?t===void 0?_N:gN:hm&&hm in Object(t)?fN(t):mN(t)}function yN(t){return t!=null&&typeof t=="object"}var EN="[object Symbol]";function Gh(t){return typeof t=="symbol"||yN(t)&&vT(t)==EN}function TN(t,e){for(var n=-1,r=t==null?0:t.length,s=Array(r);++n<r;)s[n]=e(t[n],n,t);return s}var Kh=Array.isArray,fm=ei?ei.prototype:void 0,dm=fm?fm.toString:void 0;function AT(t){if(typeof t=="string")return t;if(Kh(t))return TN(t,AT)+"";if(Gh(t))return dm?dm.call(t):"";var e=t+"";return e=="0"&&1/t==-1/0?"-0":e}function bT(t){var e=typeof t;return t!=null&&(e=="object"||e=="function")}var wN="[object AsyncFunction]",IN="[object Function]",vN="[object GeneratorFunction]",AN="[object Proxy]";function bN(t){if(!bT(t))return!1;var e=vT(t);return e==IN||e==vN||e==wN||e==AN}var Rl=Wh["__core-js_shared__"],pm=function(){var t=/[^.]+$/.exec(Rl&&Rl.keys&&Rl.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();function SN(t){return!!pm&&pm in t}var RN=Function.prototype,CN=RN.toString;function PN(t){if(t!=null){try{return CN.call(t)}catch{}try{return t+""}catch{}}return""}var NN=/[\\^$.*+?()[\]{}|]/g,ON=/^\[object .+?Constructor\]$/,kN=Function.prototype,DN=Object.prototype,VN=kN.toString,xN=DN.hasOwnProperty,LN=RegExp("^"+VN.call(xN).replace(NN,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function MN(t){if(!bT(t)||SN(t))return!1;var e=bN(t)?LN:ON;return e.test(PN(t))}function UN(t,e){return t==null?void 0:t[e]}function ST(t,e){var n=UN(t,e);return MN(n)?n:void 0}function FN(t,e){return t===e||t!==t&&e!==e}var BN=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,$N=/^\w*$/;function jN(t,e){if(Kh(t))return!1;var n=typeof t;return n=="number"||n=="symbol"||n=="boolean"||t==null||Gh(t)?!0:$N.test(t)||!BN.test(t)||e!=null&&t in Object(e)}var _o=ST(Object,"create");function HN(){this.__data__=_o?_o(null):{},this.size=0}function qN(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}var zN="__lodash_hash_undefined__",WN=Object.prototype,GN=WN.hasOwnProperty;function KN(t){var e=this.__data__;if(_o){var n=e[t];return n===zN?void 0:n}return GN.call(e,t)?e[t]:void 0}var QN=Object.prototype,YN=QN.hasOwnProperty;function JN(t){var e=this.__data__;return _o?e[t]!==void 0:YN.call(e,t)}var XN="__lodash_hash_undefined__";function ZN(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=_o&&e===void 0?XN:e,this}function os(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}os.prototype.clear=HN;os.prototype.delete=qN;os.prototype.get=KN;os.prototype.has=JN;os.prototype.set=ZN;function eO(){this.__data__=[],this.size=0}function Uc(t,e){for(var n=t.length;n--;)if(FN(t[n][0],e))return n;return-1}var tO=Array.prototype,nO=tO.splice;function rO(t){var e=this.__data__,n=Uc(e,t);if(n<0)return!1;var r=e.length-1;return n==r?e.pop():nO.call(e,n,1),--this.size,!0}function sO(t){var e=this.__data__,n=Uc(e,t);return n<0?void 0:e[n][1]}function iO(t){return Uc(this.__data__,t)>-1}function oO(t,e){var n=this.__data__,r=Uc(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this}function ai(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}ai.prototype.clear=eO;ai.prototype.delete=rO;ai.prototype.get=sO;ai.prototype.has=iO;ai.prototype.set=oO;var aO=ST(Wh,"Map");function cO(){this.size=0,this.__data__={hash:new os,map:new(aO||ai),string:new os}}function lO(t){var e=typeof t;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?t!=="__proto__":t===null}function Fc(t,e){var n=t.__data__;return lO(e)?n[typeof e=="string"?"string":"hash"]:n.map}function uO(t){var e=Fc(this,t).delete(t);return this.size-=e?1:0,e}function hO(t){return Fc(this,t).get(t)}function fO(t){return Fc(this,t).has(t)}function dO(t,e){var n=Fc(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this}function ys(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}ys.prototype.clear=cO;ys.prototype.delete=uO;ys.prototype.get=hO;ys.prototype.has=fO;ys.prototype.set=dO;var pO="Expected a function";function Qh(t,e){if(typeof t!="function"||e!=null&&typeof e!="function")throw new TypeError(pO);var n=function(){var r=arguments,s=e?e.apply(this,r):r[0],i=n.cache;if(i.has(s))return i.get(s);var o=t.apply(this,r);return n.cache=i.set(s,o)||i,o};return n.cache=new(Qh.Cache||ys),n}Qh.Cache=ys;var mO=500;function gO(t){var e=Qh(t,function(r){return n.size===mO&&n.clear(),r}),n=e.cache;return e}var _O=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,yO=/\\(\\)?/g,EO=gO(function(t){var e=[];return t.charCodeAt(0)===46&&e.push(""),t.replace(_O,function(n,r,s,i){e.push(s?i.replace(yO,"$1"):r||n)}),e});function TO(t){return t==null?"":AT(t)}function wO(t,e){return Kh(t)?t:jN(t,e)?[t]:EO(TO(t))}function IO(t){if(typeof t=="string"||Gh(t))return t;var e=t+"";return e=="0"&&1/t==-1/0?"-0":e}function vO(t,e){e=wO(e,t);for(var n=0,r=e.length;t!=null&&n<r;)t=t[IO(e[n++])];return n&&n==r?t:void 0}function AO(t,e,n){var r=t==null?void 0:vO(t,e);return r===void 0?n:r}function bO(t){for(var e=-1,n=t==null?0:t.length,r={};++e<n;){var s=t[e];r[s[0]]=s[1]}return r}const SO=t=>t===void 0,Cl=t=>typeof t=="boolean",as=t=>typeof t=="number",RO=t=>typeof Element>"u"?!1:t instanceof Element,CO=t=>De(t)?!Number.isNaN(Number(t)):!1;var mm;const Es=typeof window<"u",PO=t=>typeof t=="string",NO=()=>{};Es&&((mm=window==null?void 0:window.navigator)!=null&&mm.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function Yh(t){return typeof t=="function"?t():ae(t)}function OO(t){return t}function Jh(t){return lE()?(jC(t),!0):!1}function kO(t,e=!0){Pr()?xc(t):e?t():Fh(t)}function DO(t,e,n={}){const{immediate:r=!0}=n,s=Ft(!1);let i=null;function o(){i&&(clearTimeout(i),i=null)}function c(){s.value=!1,o()}function l(...h){o(),s.value=!0,i=setTimeout(()=>{s.value=!1,i=null,t(...h)},Yh(e))}return r&&(s.value=!0,Es&&l()),Jh(c),{isPending:$a(s),start:l,stop:c}}function RT(t){var e;const n=Yh(t);return(e=n==null?void 0:n.$el)!=null?e:n}const CT=Es?window:void 0;function VO(...t){let e,n,r,s;if(PO(t[0])||Array.isArray(t[0])?([n,r,s]=t,e=CT):[e,n,r,s]=t,!e)return NO;Array.isArray(n)||(n=[n]),Array.isArray(r)||(r=[r]);const i=[],o=()=>{i.forEach(f=>f()),i.length=0},c=(f,p,g,I)=>(f.addEventListener(p,g,I),()=>f.removeEventListener(p,g,I)),l=qs(()=>[RT(e),Yh(s)],([f,p])=>{o(),f&&i.push(...n.flatMap(g=>r.map(I=>c(f,g,I,p))))},{immediate:!0,flush:"post"}),h=()=>{l(),o()};return Jh(h),h}function xO(t,e=!1){const n=Ft(),r=()=>n.value=!!t();return r(),kO(r,e),n}const gm=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},_m="__vueuse_ssr_handlers__";gm[_m]=gm[_m]||{};var ym=Object.getOwnPropertySymbols,LO=Object.prototype.hasOwnProperty,MO=Object.prototype.propertyIsEnumerable,UO=(t,e)=>{var n={};for(var r in t)LO.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&ym)for(var r of ym(t))e.indexOf(r)<0&&MO.call(t,r)&&(n[r]=t[r]);return n};function FO(t,e,n={}){const r=n,{window:s=CT}=r,i=UO(r,["window"]);let o;const c=xO(()=>s&&"ResizeObserver"in s),l=()=>{o&&(o.disconnect(),o=void 0)},h=qs(()=>RT(t),p=>{l(),c.value&&s&&p&&(o=new ResizeObserver(e),o.observe(p,i))},{immediate:!0,flush:"post"}),f=()=>{l(),h()};return Jh(f),{isSupported:c,stop:f}}var Em;(function(t){t.UP="UP",t.RIGHT="RIGHT",t.DOWN="DOWN",t.LEFT="LEFT",t.NONE="NONE"})(Em||(Em={}));var BO=Object.defineProperty,Tm=Object.getOwnPropertySymbols,$O=Object.prototype.hasOwnProperty,jO=Object.prototype.propertyIsEnumerable,wm=(t,e,n)=>e in t?BO(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,HO=(t,e)=>{for(var n in e||(e={}))$O.call(e,n)&&wm(t,n,e[n]);if(Tm)for(var n of Tm(e))jO.call(e,n)&&wm(t,n,e[n]);return t};const qO={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};HO({linear:OO},qO);const Im={current:0},vm=Ft(0),PT=2e3,Am=Symbol("elZIndexContextKey"),NT=Symbol("zIndexContextKey"),zO=t=>{const e=Pr()?In(Am,Im):Im,n=t||(Pr()?In(NT,void 0):void 0),r=Te(()=>{const o=ae(n);return as(o)?o:PT}),s=Te(()=>r.value+vm.value),i=()=>(e.current++,vm.value=e.current,s.value);return!Es&&In(Am),{initialZIndex:r,currentZIndex:s,nextZIndex:i}};var WO={name:"en",el:{breadcrumb:{label:"Breadcrumb"},colorpicker:{confirm:"OK",clear:"Clear",defaultLabel:"color picker",description:"current color is {color}. press enter to select a new color.",alphaLabel:"pick alpha value",alphaDescription:"alpha {alpha}, current color is {color}",hueLabel:"pick hue value",hueDescription:"hue {hue}, current color is {color}",svLabel:"pick saturation and brightness value",svDescription:"saturation {saturation}, brightness {brightness}, current color is {color}",predefineDescription:"select {value} as the color"},datepicker:{now:"Now",today:"Today",cancel:"Cancel",clear:"Clear",confirm:"OK",dateTablePrompt:"Use the arrow keys and enter to select the day of the month",monthTablePrompt:"Use the arrow keys and enter to select the month",yearTablePrompt:"Use the arrow keys and enter to select the year",selectedDate:"Selected date",selectDate:"Select date",selectTime:"Select time",startDate:"Start Date",startTime:"Start Time",endDate:"End Date",endTime:"End Time",prevYear:"Previous Year",nextYear:"Next Year",prevMonth:"Previous Month",nextMonth:"Next Month",year:"",month1:"January",month2:"February",month3:"March",month4:"April",month5:"May",month6:"June",month7:"July",month8:"August",month9:"September",month10:"October",month11:"November",month12:"December",weeks:{sun:"Sun",mon:"Mon",tue:"Tue",wed:"Wed",thu:"Thu",fri:"Fri",sat:"Sat"},weeksFull:{sun:"Sunday",mon:"Monday",tue:"Tuesday",wed:"Wednesday",thu:"Thursday",fri:"Friday",sat:"Saturday"},months:{jan:"Jan",feb:"Feb",mar:"Mar",apr:"Apr",may:"May",jun:"Jun",jul:"Jul",aug:"Aug",sep:"Sep",oct:"Oct",nov:"Nov",dec:"Dec"}},inputNumber:{decrease:"decrease number",increase:"increase number"},select:{loading:"Loading",noMatch:"No matching data",noData:"No data",placeholder:"Select"},mention:{loading:"Loading"},dropdown:{toggleDropdown:"Toggle Dropdown"},cascader:{noMatch:"No matching data",loading:"Loading",placeholder:"Select",noData:"No data"},pagination:{goto:"Go to",pagesize:"/page",total:"Total {total}",pageClassifier:"",page:"Page",prev:"Go to previous page",next:"Go to next page",currentPage:"page {pager}",prevPages:"Previous {pager} pages",nextPages:"Next {pager} pages",deprecationWarning:"Deprecated usages detected, please refer to the el-pagination documentation for more details"},dialog:{close:"Close this dialog"},drawer:{close:"Close this dialog"},messagebox:{title:"Message",confirm:"OK",cancel:"Cancel",error:"Illegal input",close:"Close this dialog"},upload:{deleteTip:"press delete to remove",delete:"Delete",preview:"Preview",continue:"Continue"},slider:{defaultLabel:"slider between {min} and {max}",defaultRangeStartLabel:"pick start value",defaultRangeEndLabel:"pick end value"},table:{emptyText:"No Data",confirmFilter:"Confirm",resetFilter:"Reset",clearFilter:"All",sumText:"Sum"},tour:{next:"Next",previous:"Previous",finish:"Finish",close:"Close this dialog"},tree:{emptyText:"No Data"},transfer:{noMatch:"No matching data",noData:"No data",titles:["List 1","List 2"],filterPlaceholder:"Enter keyword",noCheckedFormat:"{total} items",hasCheckedFormat:"{checked}/{total} checked"},image:{error:"FAILED"},pageHeader:{title:"Back"},popconfirm:{confirmButtonText:"Yes",cancelButtonText:"No"},carousel:{leftArrow:"Carousel arrow left",rightArrow:"Carousel arrow right",indicator:"Carousel switch to index {index}"}}};const GO=t=>(e,n)=>KO(e,n,ae(t)),KO=(t,e,n)=>AO(n,t,t).replace(/\{(\w+)\}/g,(r,s)=>{var i;return`${(i=e==null?void 0:e[s])!=null?i:`{${s}}`}`}),QO=t=>{const e=Te(()=>ae(t).name),n=ot(t)?t:Ft(t);return{lang:e,locale:n,t:GO(t)}},OT=Symbol("localeContextKey"),YO=t=>{const e=t||In(OT,Ft());return QO(Te(()=>e.value||WO))},kT="__epPropKey",cs=t=>t,JO=t=>Se(t)&&!!t[kT],DT=(t,e)=>{if(!Se(t)||JO(t))return t;const{values:n,required:r,default:s,type:i,validator:o}=t,l={type:i,required:!!r,validator:n||o?h=>{let f=!1,p=[];if(n&&(p=Array.from(n),_e(t,"default")&&p.push(s),f||(f=p.includes(h))),o&&(f||(f=o(h))),!f&&p.length>0){const g=[...new Set(p)].map(I=>JSON.stringify(I)).join(", ");N1(`Invalid prop: validation failed${e?` for prop "${e}"`:""}. Expected one of [${g}], got value ${JSON.stringify(h)}.`)}return f}:void 0,[kT]:!0};return _e(t,"default")&&(l.default=s),l},Bc=t=>bO(Object.entries(t).map(([e,n])=>[e,DT(n,e)])),XO=["","default","small","large"],SD=DT({type:String,values:XO,required:!1}),ZO=Symbol("size"),ek=Symbol("emptyValuesContextKey"),RD=Bc({emptyValues:Array,valueOnClear:{type:cs([String,Number,Boolean,Function]),default:void 0,validator:t=>(t=re(t)?t():t,se(t)?t.every(e=>!e):!t)}}),bm=t=>Object.keys(t),Ja=Ft();function VT(t,e=void 0){return Pr()?In(TT,Ja):Ja}function tk(t,e){const n=VT(),r=zh(t,Te(()=>{var c;return((c=n.value)==null?void 0:c.namespace)||Ea})),s=YO(Te(()=>{var c;return(c=n.value)==null?void 0:c.locale})),i=zO(Te(()=>{var c;return((c=n.value)==null?void 0:c.zIndex)||PT})),o=Te(()=>{var c;return ae(e)||((c=n.value)==null?void 0:c.size)||""});return nk(Te(()=>ae(n)||{})),{ns:r,locale:s,zIndex:i,size:o}}const nk=(t,e,n=!1)=>{var r;const s=!!Pr(),i=s?VT():void 0,o=(r=void 0)!=null?r:s?KE:void 0;if(!o)return;const c=Te(()=>{const l=ae(t);return i!=null&&i.value?rk(i.value,l):l});return o(TT,c),o(OT,Te(()=>c.value.locale)),o(wT,Te(()=>c.value.namespace)),o(NT,Te(()=>c.value.zIndex)),o(ZO,{size:Te(()=>c.value.size||"")}),o(ek,Te(()=>({emptyValues:c.value.emptyValues,valueOnClear:c.value.valueOnClear}))),(n||!Ja.value)&&(Ja.value=c.value),c},rk=(t,e)=>{const n=[...new Set([...bm(t),...bm(e)])],r={};for(const s of n)r[s]=e[s]!==void 0?e[s]:t[s];return r};var Xh=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n};function _u(t,e="px"){if(!t)return"";if(as(t)||CO(t))return`${t}${e}`;if(De(t))return t}const xT=(t,e)=>(t.install=n=>{for(const r of[t,...Object.values({})])n.component(r.name,r)},t),sk=(t,e)=>(t.install=n=>{t._context=n._context,n.config.globalProperties[e]=t},t),ik=Bc({size:{type:cs([Number,String])},color:{type:String}}),ok=sn({name:"ElIcon",inheritAttrs:!1}),ak=sn({...ok,props:ik,setup(t){const e=t,n=zh("icon"),r=Te(()=>{const{size:s,color:i}=e;return!s&&!i?{}:{fontSize:SO(s)?void 0:_u(s),"--color":i}});return(s,i)=>(et(),Gn("i",fT({class:ae(n).b(),style:ae(r)},s.$attrs),[Wa(s.$slots,"default")],16))}});var ck=Xh(ak,[["__file","icon.vue"]]);const Sm=xT(ck);/*! Element Plus Icons Vue v2.3.2 */var lk=sn({name:"CircleCloseFilled",__name:"circle-close-filled",setup(t){return(e,n)=>(et(),Gn("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},[An("path",{fill:"currentColor",d:"M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336z"})]))}}),uk=lk,hk=sn({name:"Close",__name:"close",setup(t){return(e,n)=>(et(),Gn("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},[An("path",{fill:"currentColor",d:"M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"})]))}}),fk=hk,dk=sn({name:"InfoFilled",__name:"info-filled",setup(t){return(e,n)=>(et(),Gn("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},[An("path",{fill:"currentColor",d:"M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64m67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344M590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.99 12.99 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z"})]))}}),Rm=dk,pk=sn({name:"SuccessFilled",__name:"success-filled",setup(t){return(e,n)=>(et(),Gn("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},[An("path",{fill:"currentColor",d:"M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.27 38.27 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336z"})]))}}),mk=pk,gk=sn({name:"WarningFilled",__name:"warning-filled",setup(t){return(e,n)=>(et(),Gn("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},[An("path",{fill:"currentColor",d:"M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 192a58.43 58.43 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.43 58.43 0 0 0 512 256m0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4"})]))}}),_k=gk;const yk=cs([String,Object,Function]),Ek={Close:fk},Cm={primary:Rm,success:mk,warning:_k,error:uk,info:Rm},Tk=()=>Es&&/android/i.test(window.navigator.userAgent),wk=t=>t,yu={tab:"Tab",enter:"Enter",space:"Space",left:"ArrowLeft",up:"ArrowUp",right:"ArrowRight",down:"ArrowDown",esc:"Escape",delete:"Delete",backspace:"Backspace",numpadEnter:"NumpadEnter",pageUp:"PageUp",pageDown:"PageDown",home:"Home",end:"End"},Ik=t=>{if(t.code&&t.code!=="Unidentified")return t.code;const e=vk(t);if(e){if(Object.values(yu).includes(e))return e;switch(e){case" ":return yu.space;default:return""}}return""},vk=t=>{let e=t.key&&t.key!=="Unidentified"?t.key:"";if(!e&&t.type==="keyup"&&Tk()){const n=t.target;e=n.value.charAt(n.selectionStart-1)}return e},Ak=Bc({value:{type:[String,Number],default:""},max:{type:Number,default:99},isDot:Boolean,hidden:Boolean,type:{type:String,values:["primary","success","warning","info","danger"],default:"danger"},showZero:{type:Boolean,default:!0},color:String,badgeStyle:{type:cs([String,Object,Array])},offset:{type:cs(Array),default:[0,0]},badgeClass:{type:String}}),bk=sn({name:"ElBadge"}),Sk=sn({...bk,props:Ak,setup(t,{expose:e}){const n=t,r=zh("badge"),s=Te(()=>n.isDot?"":as(n.value)&&as(n.max)?n.max<n.value?`${n.max}+`:`${n.value}`:`${n.value}`),i=Te(()=>{var o,c,l,h,f;return[{backgroundColor:n.color,marginRight:_u(-((c=(o=n.offset)==null?void 0:o[0])!=null?c:0)),marginTop:_u((h=(l=n.offset)==null?void 0:l[1])!=null?h:0)},(f=n.badgeStyle)!=null?f:{}]});return e({content:s}),(o,c)=>(et(),Gn("div",{class:Wt(ae(r).b())},[Wa(o.$slots,"default"),it(_T,{name:`${ae(r).namespace.value}-zoom-in-center`,persisted:""},{default:Yi(()=>[kE(An("sup",{class:Wt([ae(r).e("content"),ae(r).em("content",o.type),ae(r).is("fixed",!!o.$slots.default),ae(r).is("dot",o.isDot),ae(r).is("hide-zero",!o.showZero&&o.value===0),o.badgeClass]),style:Oo(ae(i))},[Wa(o.$slots,"content",{value:ae(s)},()=>[hT(Ch(ae(s)),1)])],6),[[ET,!o.hidden&&(ae(s)||o.isDot||o.$slots.content)]])]),_:3},8,["name"])],2))}});var Rk=Xh(Sk,[["__file","badge.vue"]]);const Ck=xT(Rk),It={placement:"top"},LT=["primary","success","info","warning","error"],MT=["top","top-left","top-right","bottom","bottom-left","bottom-right"],yo="top",ht=wk({customClass:"",dangerouslyUseHTMLString:!1,duration:3e3,icon:void 0,id:"",message:"",onClose:void 0,showClose:!1,type:"info",plain:!1,offset:16,placement:void 0,zIndex:0,grouping:!1,repeatNum:1,appendTo:Es?document.body:void 0}),Pk=Bc({customClass:{type:String,default:ht.customClass},dangerouslyUseHTMLString:{type:Boolean,default:ht.dangerouslyUseHTMLString},duration:{type:Number,default:ht.duration},icon:{type:yk,default:ht.icon},id:{type:String,default:ht.id},message:{type:cs([String,Object,Function]),default:ht.message},onClose:{type:cs(Function),default:ht.onClose},showClose:{type:Boolean,default:ht.showClose},type:{type:String,values:LT,default:ht.type},plain:{type:Boolean,default:ht.plain},offset:{type:Number,default:ht.offset},placement:{type:String,values:MT,default:ht.placement},zIndex:{type:Number,default:ht.zIndex},grouping:{type:Boolean,default:ht.grouping},repeatNum:{type:Number,default:ht.repeatNum}}),Nk={destroy:()=>!0},Zt=Lh({}),Ok=t=>(Zt[t]||(Zt[t]=Lh([])),Zt[t]),kk=(t,e)=>{const n=Zt[e]||[],r=n.findIndex(o=>o.id===t),s=n[r];let i;return r>0&&(i=n[r-1]),{current:s,prev:i}},Dk=(t,e)=>{const{prev:n}=kk(t,e);return n?n.vm.exposed.bottom.value:0},Vk=(t,e,n)=>(Zt[n]||[]).findIndex(i=>i.id===t)>0?16:e,xk=sn({name:"ElMessage"}),Lk=sn({...xk,props:Pk,emits:Nk,setup(t,{expose:e,emit:n}){const r=t,{Close:s}=Ek,i=Ft(!1),{ns:o,zIndex:c}=tk("message"),{currentZIndex:l,nextZIndex:h}=c,f=Ft(),p=Ft(!1),g=Ft(0);let I;const C=Te(()=>r.type?r.type==="error"?"danger":r.type:"info"),R=Te(()=>{const T=r.type;return{[o.bm("icon",T)]:T&&Cm[T]}}),N=Te(()=>r.icon||Cm[r.type]||""),V=Te(()=>r.placement||yo),q=Te(()=>Dk(r.id,V.value)),W=Te(()=>Vk(r.id,r.offset,V.value)+q.value),j=Te(()=>g.value+W.value),ee=Te(()=>V.value.includes("left")?o.is("left"):V.value.includes("right")?o.is("right"):o.is("center")),ie=Te(()=>V.value.startsWith("top")?"top":"bottom"),b=Te(()=>({[ie.value]:`${W.value}px`,zIndex:l.value}));function y(){r.duration!==0&&({stop:I}=DO(()=>{A()},r.duration))}function _(){I==null||I()}function A(){p.value=!1,Fh(()=>{var T;i.value||((T=r.onClose)==null||T.call(r),n("destroy"))})}function v(T){Ik(T)===yu.esc&&A()}return xc(()=>{y(),h(),p.value=!0}),qs(()=>r.repeatNum,()=>{_(),y()}),VO(document,"keydown",v),FO(f,()=>{g.value=f.value.getBoundingClientRect().height}),e({visible:p,bottom:j,close:A}),(T,E)=>(et(),ur(_T,{name:ae(o).b("fade"),onBeforeEnter:me=>i.value=!0,onBeforeLeave:T.onClose,onAfterLeave:me=>T.$emit("destroy"),persisted:""},{default:Yi(()=>[kE(An("div",{id:T.id,ref_key:"messageRef",ref:f,class:Wt([ae(o).b(),{[ae(o).m(T.type)]:T.type},ae(o).is("closable",T.showClose),ae(o).is("plain",T.plain),ae(o).is("bottom",ae(ie)==="bottom"),ae(ee),T.customClass]),style:Oo(ae(b)),role:"alert",onMouseenter:_,onMouseleave:y},[T.repeatNum>1?(et(),ur(ae(Ck),{key:0,value:T.repeatNum,type:ae(C),class:Wt(ae(o).e("badge"))},null,8,["value","type","class"])):ra("v-if",!0),ae(N)?(et(),ur(ae(Sm),{key:1,class:Wt([ae(o).e("icon"),ae(R)])},{default:Yi(()=>[(et(),ur(FP(ae(N))))]),_:1},8,["class"])):ra("v-if",!0),Wa(T.$slots,"default",{},()=>[T.dangerouslyUseHTMLString?(et(),Gn(bt,{key:1},[ra(" Caution here, message could've been compromised, never use user's input as message "),An("p",{class:Wt(ae(o).e("content")),innerHTML:T.message},null,10,["innerHTML"])],2112)):(et(),Gn("p",{key:0,class:Wt(ae(o).e("content"))},Ch(T.message),3))]),T.showClose?(et(),ur(ae(Sm),{key:2,class:Wt(ae(o).e("closeBtn")),onClick:rN(A,["stop"])},{default:Yi(()=>[it(ae(s))]),_:1},8,["class","onClick"])):ra("v-if",!0)],46,["id"]),[[ET,p.value]])]),_:3},8,["name","onBeforeEnter","onBeforeLeave","onAfterLeave"]))}});var Mk=Xh(Lk,[["__file","message.vue"]]);let Uk=1;const Fk=t=>{if(!t.appendTo)t.appendTo=document.body;else if(De(t.appendTo)){let n=document.querySelector(t.appendTo);RO(n)||(n=document.body),t.appendTo=n}},Bk=t=>{!t.placement&&De(It.placement)&&It.placement&&(t.placement=It.placement),t.placement||(t.placement=yo),MT.includes(t.placement)||(t.placement=yo)},UT=t=>{const e=!t||De(t)||is(t)||re(t)?{message:t}:t,n={...ht,...e};return Fk(n),Bk(n),Cl(It.grouping)&&!n.grouping&&(n.grouping=It.grouping),as(It.duration)&&n.duration===3e3&&(n.duration=It.duration),as(It.offset)&&n.offset===16&&(n.offset=It.offset),Cl(It.showClose)&&!n.showClose&&(n.showClose=It.showClose),Cl(It.plain)&&!n.plain&&(n.plain=It.plain),n},$k=t=>{const e=t.props.placement||yo,n=Zt[e],r=n.indexOf(t);if(r===-1)return;n.splice(r,1);const{handler:s}=t;s.close()},jk=({appendTo:t,...e},n)=>{const r=`message_${Uk++}`,s=e.onClose,i=document.createElement("div"),o={...e,id:r,onClose:()=>{s==null||s(),$k(f)},onDestroy:()=>{um(null,i)}},c=it(Mk,o,re(o.message)||is(o.message)?{default:re(o.message)?o.message:()=>o.message}:null);c.appContext=n||ls._context,um(c,i),t.appendChild(i.firstElementChild);const l=c.component,f={id:r,vnode:c,vm:l,handler:{close:()=>{l.exposed.close()}},props:c.component.props};return f},ls=(t={},e)=>{if(!Es)return{close:()=>{}};const n=UT(t),r=Ok(n.placement||yo);if(n.grouping&&r.length){const i=r.find(({vnode:o})=>{var c;return((c=o.props)==null?void 0:c.message)===n.message});if(i)return i.props.repeatNum+=1,i.props.type=n.type,i.handler}if(as(It.max)&&r.length>=It.max)return{close:()=>{}};const s=jk(n,e);return r.push(s),s.handler};LT.forEach(t=>{ls[t]=(e={},n)=>{const r=UT(e);return ls({...r,type:t},n)}});function Hk(t){for(const e in Zt)if(_e(Zt,e)){const n=[...Zt[e]];for(const r of n)(!t||t===r.props.type)&&r.handler.close()}}function qk(t){if(!Zt[t])return;[...Zt[t]].forEach(n=>n.handler.close())}ls.closeAll=Hk;ls.closeAllByPlacement=qk;ls._context=null;const be=sk(ls,"$message"),zk=["rock","paper","scissors"];function Wk(t,e){return t===e?"draw":{rock:"scissors",paper:"rock",scissors:"paper"}[t]===e?"player1":"player2"}async function Pm(t){try{const e=Pe.currentUser;if(!e)throw new Error("User not authenticated");const n=gs(Qn,"games",t);return await yr(n,{player1:{userId:e.uid,userName:e.displayName||"匿名1",choice:null,ready:!1},player2:{userId:null,userName:null,choice:null,ready:!1},status:"waiting",winner:null,createAt:yh()}),n}catch(e){console.error("建立遊戲房間失敗",e)}}async function Nm(t){try{const e=Pe.currentUser;if(!e)throw new Error("User not authenticated");const n=gs(Qn,"games",t),r=await Fa(n);if(!r.exists())throw new Error("Game room not found");const s=r.data();if(s.player1.userId===e.uid||s.player2.userId===e.uid)return be({message:"你已在此房間號",type:"warning",customClass:"custom-message"}),n;if(s.player2.userId)throw new Error("Game room is full");return await yr(n,{player2:{userId:e.uid,userName:e.displayName||"匿名2",choice:null,ready:!1},status:"playing"},{merge:!0}),n}catch(e){console.error("加入遊戲房間失敗",e),be({message:"房間號不存在",type:"error",customClass:"custom-message"})}}async function Om(t,e){try{const n=Pe.currentUser;if(!n)throw new Error("User not authenticated");if(e!==null&&!zk.includes(e))throw new Error("Invalid choice");const r=gs(Qn,"games",t),s=await Fa(r);if(!s.exists())throw new Error("Game room not found");const i=s.data();if(!i)throw new Error("Game data not available");const c=i.player1.userId===n.uid?"player1":"player2";if(await yr(r,{[c]:{...i[c],choice:e,ready:e!==null}},{merge:!0}),e===null)return;const l=await Fa(r);if(l.exists()){const h=l.data();if(h&&h.player1.choice&&h.player2.choice){const f=Wk(h.player1.choice,h.player2.choice);await yr(r,{status:"finished",winner:f},{merge:!0})}}}catch(n){return console.error("出拳失敗",n),"error"}}function sa(t,e){const n=gs(Qn,"games",t);return Vy(n,r=>{r.exists()&&e({id:r.id,...r.data()})})}async function Gk(t){try{const e=gs(Qn,"games",t);await yr(e,{player1:{choice:null,ready:!1},player2:{choice:null,ready:!1},status:"playing",winner:null},{merge:!0})}catch(e){console.error("重置遊戲失敗",e)}}async function Kk(t){try{const e=Pe.currentUser;if(!e)return;const n=gs(Qn,"games",t),r=await Fa(n);if(!r.exists())return;const s=r.data(),i={userId:null,userName:null,choice:null,ready:!1};s.player1.userId===e.uid?s.player2.userId?await yr(n,{player1:{...s.player2,ready:!1,choice:null},player2:i,status:"waiting"},{merge:!0}):await yr(n,{player1:i,status:"waiting"},{merge:!0}):s.player2.userId===e.uid&&await yr(n,{player2:i,status:"waiting"},{merge:!0})}catch(e){console.error("離開遊戲房間失敗",e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qk="type.googleapis.com/google.protobuf.Int64Value",Yk="type.googleapis.com/google.protobuf.UInt64Value";function FT(t,e){const n={};for(const r in t)t.hasOwnProperty(r)&&(n[r]=e(t[r]));return n}function Xa(t){if(t==null)return null;if(t instanceof Number&&(t=t.valueOf()),typeof t=="number"&&isFinite(t)||t===!0||t===!1||Object.prototype.toString.call(t)==="[object String]")return t;if(t instanceof Date)return t.toISOString();if(Array.isArray(t))return t.map(e=>Xa(e));if(typeof t=="function"||typeof t=="object")return FT(t,e=>Xa(e));throw new Error("Data cannot be encoded in JSON: "+t)}function ti(t){if(t==null)return t;if(t["@type"])switch(t["@type"]){case Qk:case Yk:{const e=Number(t.value);if(isNaN(e))throw new Error("Data cannot be decoded from JSON: "+t);return e}default:throw new Error("Data cannot be decoded from JSON: "+t)}return Array.isArray(t)?t.map(e=>ti(e)):typeof t=="function"||typeof t=="object"?FT(t,e=>ti(e)):t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zh="functions";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const km={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Rt extends nn{constructor(e,n,r){super(`${Zh}/${e}`,n||""),this.details=r,Object.setPrototypeOf(this,Rt.prototype)}}function Jk(t){if(t>=200&&t<300)return"ok";switch(t){case 0:return"internal";case 400:return"invalid-argument";case 401:return"unauthenticated";case 403:return"permission-denied";case 404:return"not-found";case 409:return"aborted";case 429:return"resource-exhausted";case 499:return"cancelled";case 500:return"internal";case 501:return"unimplemented";case 503:return"unavailable";case 504:return"deadline-exceeded"}return"unknown"}function Za(t,e){let n=Jk(t),r=n,s;try{const i=e&&e.error;if(i){const o=i.status;if(typeof o=="string"){if(!km[o])return new Rt("internal","internal");n=km[o],r=o}const c=i.message;typeof c=="string"&&(r=c),s=i.details,s!==void 0&&(s=ti(s))}}catch{}return n==="ok"?null:new Rt(n,r,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xk{constructor(e,n,r,s){this.app=e,this.auth=null,this.messaging=null,this.appCheck=null,this.serverAppAppCheckToken=null,tt(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.auth=n.getImmediate({optional:!0}),this.messaging=r.getImmediate({optional:!0}),this.auth||n.get().then(i=>this.auth=i,()=>{}),this.messaging||r.get().then(i=>this.messaging=i,()=>{}),this.appCheck||s==null||s.get().then(i=>this.appCheck=i,()=>{})}async getAuthToken(){if(this.auth)try{const e=await this.auth.getToken();return e==null?void 0:e.accessToken}catch{return}}async getMessagingToken(){if(!(!this.messaging||!("Notification"in self)||Notification.permission!=="granted"))try{return await this.messaging.getToken()}catch{return}}async getAppCheckToken(e){if(this.serverAppAppCheckToken)return this.serverAppAppCheckToken;if(this.appCheck){const n=e?await this.appCheck.getLimitedUseToken():await this.appCheck.getToken();return n.error?null:n.token}return null}async getContext(e){const n=await this.getAuthToken(),r=await this.getMessagingToken(),s=await this.getAppCheckToken(e);return{authToken:n,messagingToken:r,appCheckToken:s}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eu="us-central1",Zk=/^data: (.*?)(?:\n|$)/;function eD(t){let e=null;return{promise:new Promise((n,r)=>{e=setTimeout(()=>{r(new Rt("deadline-exceeded","deadline-exceeded"))},t)}),cancel:()=>{e&&clearTimeout(e)}}}class tD{constructor(e,n,r,s,i=Eu,o=(...c)=>fetch(...c)){this.app=e,this.fetchImpl=o,this.emulatorOrigin=null,this.contextProvider=new Xk(e,n,r,s),this.cancelAllRequests=new Promise(c=>{this.deleteService=()=>Promise.resolve(c())});try{const c=new URL(i);this.customDomain=c.origin+(c.pathname==="/"?"":c.pathname),this.region=Eu}catch{this.customDomain=null,this.region=i}}_delete(){return this.deleteService()}_url(e){const n=this.app.options.projectId;return this.emulatorOrigin!==null?`${this.emulatorOrigin}/${n}/${this.region}/${e}`:this.customDomain!==null?`${this.customDomain}/${e}`:`https://${this.region}-${n}.cloudfunctions.net/${e}`}}function nD(t,e,n){const r=bn(e);t.emulatorOrigin=`http${r?"s":""}://${e}:${n}`,r&&(tc(t.emulatorOrigin+"/backends"),nc("Functions",!0))}function rD(t,e,n){const r=s=>iD(t,e,s,{});return r.stream=(s,i)=>aD(t,e,s,i),r}function BT(t){return t.emulatorOrigin&&bn(t.emulatorOrigin)?"include":void 0}async function sD(t,e,n,r,s){n["Content-Type"]="application/json";let i;try{i=await r(t,{method:"POST",body:JSON.stringify(e),headers:n,credentials:BT(s)})}catch{return{status:0,json:null}}let o=null;try{o=await i.json()}catch{}return{status:i.status,json:o}}async function $T(t,e){const n={},r=await t.contextProvider.getContext(e.limitedUseAppCheckTokens);return r.authToken&&(n.Authorization="Bearer "+r.authToken),r.messagingToken&&(n["Firebase-Instance-ID-Token"]=r.messagingToken),r.appCheckToken!==null&&(n["X-Firebase-AppCheck"]=r.appCheckToken),n}function iD(t,e,n,r){const s=t._url(e);return oD(t,s,n,r)}async function oD(t,e,n,r){n=Xa(n);const s={data:n},i=await $T(t,r),o=r.timeout||7e4,c=eD(o),l=await Promise.race([sD(e,s,i,t.fetchImpl,t),c.promise,t.cancelAllRequests]);if(c.cancel(),!l)throw new Rt("cancelled","Firebase Functions instance was deleted.");const h=Za(l.status,l.json);if(h)throw h;if(!l.json)throw new Rt("internal","Response is not valid JSON object.");let f=l.json.data;if(typeof f>"u"&&(f=l.json.result),typeof f>"u")throw new Rt("internal","Response is missing data field.");return{data:ti(f)}}function aD(t,e,n,r){const s=t._url(e);return cD(t,s,n,r||{})}async function cD(t,e,n,r){var g;n=Xa(n);const s={data:n},i=await $T(t,r);i["Content-Type"]="application/json",i.Accept="text/event-stream";let o;try{o=await t.fetchImpl(e,{method:"POST",body:JSON.stringify(s),headers:i,signal:r==null?void 0:r.signal,credentials:BT(t)})}catch(I){if(I instanceof Error&&I.name==="AbortError"){const R=new Rt("cancelled","Request was cancelled.");return{data:Promise.reject(R),stream:{[Symbol.asyncIterator](){return{next(){return Promise.reject(R)}}}}}}const C=Za(0,null);return{data:Promise.reject(C),stream:{[Symbol.asyncIterator](){return{next(){return Promise.reject(C)}}}}}}let c,l;const h=new Promise((I,C)=>{c=I,l=C});(g=r==null?void 0:r.signal)==null||g.addEventListener("abort",()=>{const I=new Rt("cancelled","Request was cancelled.");l(I)});const f=o.body.getReader(),p=lD(f,c,l,r==null?void 0:r.signal);return{stream:{[Symbol.asyncIterator](){const I=p.getReader();return{async next(){const{value:C,done:R}=await I.read();return{value:C,done:R}},async return(){return await I.cancel(),{done:!0,value:void 0}}}}},data:h}}function lD(t,e,n,r){const s=(o,c)=>{const l=o.match(Zk);if(!l)return;const h=l[1];try{const f=JSON.parse(h);if("result"in f){e(ti(f.result));return}if("message"in f){c.enqueue(ti(f.message));return}if("error"in f){const p=Za(0,f);c.error(p),n(p);return}}catch(f){if(f instanceof Rt){c.error(f),n(f);return}}},i=new TextDecoder;return new ReadableStream({start(o){let c="";return l();async function l(){if(r!=null&&r.aborted){const h=new Rt("cancelled","Request was cancelled");return o.error(h),n(h),Promise.resolve()}try{const{value:h,done:f}=await t.read();if(f){c.trim()&&s(c.trim(),o),o.close();return}if(r!=null&&r.aborted){const g=new Rt("cancelled","Request was cancelled");o.error(g),n(g),await t.cancel();return}c+=i.decode(h,{stream:!0});const p=c.split(`
`);c=p.pop()||"";for(const g of p)g.trim()&&s(g.trim(),o);return l()}catch(h){const f=h instanceof Rt?h:Za(0,null);o.error(f),n(f)}}},cancel(){return t.cancel()}})}const Dm="@firebase/functions",Vm="0.13.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uD="auth-internal",hD="app-check-internal",fD="messaging-internal";function dD(t){const e=(n,{instanceIdentifier:r})=>{const s=n.getProvider("app").getImmediate(),i=n.getProvider(uD),o=n.getProvider(fD),c=n.getProvider(hD);return new tD(s,i,o,c,r)};Tr(new Fn(Zh,e,"PUBLIC").setMultipleInstances(!0)),Bt(Dm,Vm,t),Bt(Dm,Vm,"esm2020")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pD(t=rc(),e=Eu){const r=wo(Ve(t),Zh).getImmediate({identifier:e}),s=Iu("functions");return s&&mD(r,...s),r}function mD(t,e,n){nD(Ve(t),e,n)}function gD(t,e,n){return rD(Ve(t),e)}dD();const _D=pD(Sc),Tu=new Map;async function yD(t,e,n){const r=gD(_D,"chatWithAI"),s=Tu.get(e)||[],o=(await r({message:t,conversationHistory:s})).data,l=[...s,{role:"user",parts:t},{role:"model",parts:o.response}].slice(-20);return Tu.set(e,l),o}function ED(t){Tu.delete(t)}let Qr=null,wt=null,zt=null;const jT=new URLSearchParams(window.location.search),TD=jT.has("__firebase_request_key")||window.location.hash.includes("__firebase_request_key");TD||eE().catch(()=>{});bC().then(t=>{if(t&&(console.log("Google 登入成功 (redirect):",t),be({message:"Google 登入成功",type:"success",customClass:"custom-message"}),jT.has("__firebase_request_key"))){const e=window.location.pathname;window.history.replaceState({},"",e)}}).catch(t=>{t.code&&t.code!=="auth/popup-closed-by-user"&&(console.error("處理 redirect 登入失敗:",t),be({message:"Google 登入失敗",type:"error",customClass:"custom-message"}))});function HT(){const t=document.getElementById("messages");t&&(t.innerHTML="");const e=document.getElementById("room-id");e&&(e.value="");const n=document.getElementById("game-status");n&&(n.innerHTML=""),document.querySelectorAll(".choice-btn").forEach(f=>{f.classList.remove("selected","opponent-choice")});const r=document.getElementById("choices");r&&(r.style.display="none");const s=document.getElementById("email"),i=document.getElementById("password"),o=document.getElementById("username");s&&(s.value=""),i&&(i.value=""),o&&(o.value="");const c=document.getElementById("game-result-overlay");c&&(c.style.display="none");const l=document.getElementById("onboarding-step-1"),h=document.getElementById("onboarding-step-2");l&&(l.style.display="none"),h&&(h.style.display="none")}RC(t=>{if(t){const e=document.getElementById("login-section"),n=document.getElementById("user-name");e&&(e.style.display="none");const r=document.getElementById("onboarding-step-1");if(r){r.style.display="flex";const o=document.getElementById("onboarding-nickname");o&&t.displayName&&(o.value=t.displayName)}const s=Pe.currentUser;n&&s&&(n.textContent=`使用者：${s.displayName||"匿名用戶"}`);const i=document.getElementById("avatar-preview");i&&(s!=null&&s.photoURL)?i.src=s.photoURL:i&&(i.src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSI1MCIgZmlsbD0iI2RkZCIvPjx0ZXh0IHg9IjUwIiB5PSI1NSIgZm9udC1zaXplPSI0MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iIzk5OSI+77yBPC90ZXh0Pjwvc3ZnPg=="),vD(),ID(new Date)}else{const e=document.getElementById("login-section"),n=document.getElementById("game-section");e&&(e.style.display="block"),n&&(n.style.display="none"),Qr&&(Qr(),Qr=null),wt&&(wt(),wt=null),zt=null,HT()}});const xm=document.getElementById("anonymous-login");xm&&xm.addEventListener("click",async()=>{try{await IC()}catch(t){console.error("匿名登入失敗:",t),be({message:"匿名登入失敗，請確認 Firebase Console 中已啟用匿名認證功能",type:"error",customClass:"custom-message"})}});const Lm=document.getElementById("login-btn"),hr=document.getElementById("username"),ks=document.getElementById("email"),Ds=document.getElementById("password");Lm&&ks&&Ds&&Lm.addEventListener("click",async()=>{const t=ks.value,e=Ds.value;if(t&&e)try{await vC(t,e);const n=hr==null?void 0:hr.value;if(n&&Pe.currentUser){const{updateProfile:r}=await wu(async()=>{const{updateProfile:s}=await Promise.resolve().then(()=>Vu);return{updateProfile:s}},void 0);await r(Pe.currentUser,{displayName:n})}}catch(n){console.error("登入失敗:",n),n.code==="auth/invalid-credential"?be({message:"無效的 Email 或密碼",type:"error",customClass:"custom-message"}):n.code==="auth/user-not-found"?be({message:"找不到此 Email 的帳號",type:"error",customClass:"custom-message"}):n.code==="auth/wrong-password"?be({message:"密碼錯誤",type:"error",customClass:"custom-message"}):be({message:"登入失敗，請檢查 Email 和密碼",type:"error",customClass:"custom-message"})}else be({message:"請輸入信箱和密碼",type:"error",customClass:"custom-message"})});const Mm=document.getElementById("google-login");Mm&&Mm.addEventListener("click",async()=>{await wD()});async function wD(){var t,e,n;try{const r=await AC();r&&(console.log("Google 登入成功:",r),be({message:"Google 登入成功",type:"success",customClass:"custom-message"}))}catch(r){if(console.error("Google 登入失敗:",r),r.code==="auth/popup-closed-by-user")return;let s="Google 登入失敗，請檢查瀏覽器設定";r.code==="auth/redirect-failed"||(t=r.message)!=null&&t.includes("403")||(e=r.message)!=null&&e.includes("forbidden")||(n=r.message)!=null&&n.includes("disallowed_useragent")?s="Line 內建瀏覽器不支援 Google 登入。請使用 Chrome 或 Safari 瀏覽器開啟此網站，或複製連結到外部瀏覽器開啟":r.code==="auth/popup-blocked"?s="彈窗被瀏覽器阻擋，請允許彈窗或使用外部瀏覽器":r.code==="auth/unauthorized-domain"&&(s="未授權的網域，請檢查 Firebase Console 中的授權域名設定"),be({message:s,type:"error",duration:6e3,customClass:"custom-message"})}}const Um=document.getElementById("register-btn");Um&&ks&&Ds&&Um.addEventListener("click",async()=>{const t=ks.value,e=Ds.value,n=(hr==null?void 0:hr.value)||void 0;if(t&&e)try{await SC(t,e,n),setTimeout(()=>{ks&&(ks.value=""),Ds&&(Ds.value=""),hr&&(hr.value="");const r=Pe.currentUser,s=document.getElementById("user-name");s&&r&&(s.textContent=`使用者：${r.displayName||n||"匿名用戶"}`);const i=document.getElementById("onboarding-step-1");i&&(i.style.display="flex")},100),be({message:"註冊成功",type:"success",customClass:"custom-message"})}catch(r){console.error("註冊失敗:",r),r.code==="auth/email-already-in-use"?be.warning({message:"此 Email 已經被使用",type:"warning",customClass:"custom-message"}):r.code==="auth/invalid-email"?be.error({message:"無效的 Email 格式",type:"error",customClass:"custom-message"}):r.code==="auth/weak-password"?be.error({message:"密碼太弱，請使用更強的密碼",type:"error",customClass:"custom-message"}):be.error({message:"請檢查 Email 格式和密碼長度（至少 6 個字元）",type:"error",customClass:"custom-message"})}else be({message:"請輸入信箱和密碼",type:"error",customClass:"custom-message"})});const Fm=document.getElementById("logout-btn");Fm&&Fm.addEventListener("click",async()=>{try{const t=Pe.currentUser;t&&ED(t.uid),zt&&(await Kk(zt),zt=null),await eE()}catch(t){console.error("登出失敗:",t)}});function ID(t){const e=document.getElementById("messages");if(!e)return;Qr&&(Qr(),Qr=null);const n="AI_ASSISTANT",r="🤖 客服小幫手";let s=null,i=!1;Qr=CC(async l=>{e.innerHTML="";const h=Pe.currentUser;if(l.forEach(f=>{const p=document.createElement("div"),g=h&&f.userId===h.uid,I=f.userId===n;p.className=`message ${g?"self":"other"} ${I?"ai-message":""}`;const C=f.timestamp&&typeof f.timestamp.toDate=="function"?f.timestamp.toDate():f.timestamp,R=C?new Date(C).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}):"";p.innerHTML=`
                <strong>${f.userName}</strong>
                <span>${f.text}</span>
                <small>${R}</small>
            `,e.appendChild(p)}),e.scrollTop=e.scrollHeight,h&&l.length>0&&!i){const f=l[l.length-1];f.id&&f.id!==s&&f.userId!==n&&f.userId!==h.uid&&(s=f.id,i=!0,setTimeout(async()=>{try{const p=await yD(f.text,h.uid);await Dy(ih(Qn,"messages"),{text:p.response,userId:n,userName:r,timestamp:yh()})}catch(p){console.error("AI 自動回覆失敗:",p)}finally{i=!1}},1e3+Math.random()*1e3))}},t);const o=document.getElementById("send-btn"),c=document.getElementById("message-text");o&&c&&(o.onclick=async()=>{const l=c.value;l.trim()&&(await Cp(l),c.value="")},c.onkeydown=async l=>{if(l.key==="Enter"){const h=c.value;h.trim()&&(await Cp(h),c.value="")}})}function vD(){const t=document.getElementById("create-room"),e=document.getElementById("room-id"),n=document.getElementById("copy-room-btn");n&&e&&(n.onclick=()=>{e.value&&(navigator.clipboard.writeText(e.value),be.success({message:"房間 ID 已複製",offset:window.innerHeight-100,customClass:"bottom-message"}))});const r=document.getElementById("step-1-next"),s=document.getElementById("step-2-create"),i=document.getElementById("step-2-join"),o=document.getElementById("onboarding-step-1"),c=document.getElementById("onboarding-step-2"),l=document.getElementById("game-section"),h=document.getElementById("onboarding-nickname");if(r&&h){const C=async()=>{const R=h.value.trim();if(R){if(Pe.currentUser){const{updateProfile:N}=await wu(async()=>{const{updateProfile:q}=await Promise.resolve().then(()=>Vu);return{updateProfile:q}},void 0);await N(Pe.currentUser,{displayName:R});const V=document.getElementById("user-name");V&&(V.textContent=`使用者：${R}`)}o&&(o.style.display="none"),c&&(c.style.display="flex")}else be({message:"請輸入暱稱",type:"warning",offset:window.innerHeight-100,customClass:"bottom-message"})};r.onclick=C,h.onkeydown=async R=>{R.key==="Enter"&&await C()}}s&&(s.onclick=async()=>{c&&(c.style.display="none"),l&&(l.style.display="block");const C=`room-${Date.now()}`;await Pm(C),zt=C,e&&(e.value=C),n&&(n.style.display="flex");const R=document.getElementById("choices");R&&(R.style.display="block"),wt&&wt(),wt=sa(C,N=>{ia(N)})}),i&&(i.onclick=async()=>{const C=document.getElementById("step-2-room-id"),R=C==null?void 0:C.value.trim();if(R)try{await Nm(R),zt=R,c&&(c.style.display="none"),l&&(l.style.display="block"),n&&(n.style.display="none");const N=document.getElementById("choices");N&&(N.style.display="block"),wt&&wt(),wt=sa(R,V=>{ia(V)})}catch(N){console.error(N)}else be({message:"請輸入房間 ID",type:"warning",offset:window.innerHeight-100,customClass:"bottom-message"})}),t&&e&&(t.onclick=async()=>{const C=`room-${Date.now()}`;await Pm(C),zt=C,e.value=C,n&&(n.style.display="flex");const R=document.getElementById("choices");R&&(R.style.display="block"),wt&&wt(),wt=sa(C,N=>{ia(N)})});const f=document.getElementById("join-room");f&&e&&(f.onclick=async()=>{const C=e.value;await Nm(C),zt=C;const R=document.getElementById("choices");R&&(R.style.display="block"),wt&&wt(),wt=sa(C,N=>{ia(N)})});const p=document.getElementById("avatar-input"),g=document.getElementById("avatar-preview"),I=document.getElementById("upload-avatar-btn");p&&g&&I&&(I.onclick=()=>{p.click()},p.onchange=async C=>{var N;const R=(N=C.target.files)==null?void 0:N[0];if(R){if(!R.type.startsWith("image/")){be({message:"請選擇圖片檔案",type:"warning",offset:window.innerHeight-100,customClass:"bottom-message"});return}if(R.size>1024*1024*5){be({message:"檔案大小不能超過 5MB",type:"warning",offset:window.innerHeight-100,customClass:"bottom-message"});return}try{const V=new FileReader;V.onload=async j=>{var ee;g&&((ee=j.target)!=null&&ee.result)&&(g.src=j.target.result,g.style.width="100px",g.style.height="100px",g.style.objectFit="cover",g.style.objectPosition="center",g.style.borderRadius="50%",g.style.display="block")},V.readAsDataURL(R);const q=await AD(R);g&&(g.src=q,g.style.width="100px",g.style.height="100px",g.style.objectFit="cover",g.style.objectPosition="center",g.style.borderRadius="50%",g.style.display="block");const W=document.getElementById("user-name");W&&Pe.currentUser&&(W.textContent=`使用者：${Pe.currentUser.displayName||"匿名用戶"}`),be({message:"大頭貼上傳成功",type:"success",offset:window.innerHeight-100,customClass:"bottom-message"})}catch(V){console.log("上傳大頭貼失敗",V),be({message:"上傳大頭貼失敗",type:"error",offset:window.innerHeight-100,customClass:"bottom-message"})}}}),document.querySelectorAll(".choice-btn").forEach(C=>{C.onclick=async()=>{if(zt){const R=C.dataset.choice;if(R){const N=C.classList.contains("selected");document.querySelectorAll(".choice-btn").forEach(V=>V.classList.remove("selected")),N?await Om(zt,null):(C.classList.add("selected"),await Om(zt,R))}}}})}function ia(t){const e=document.getElementById("game-status");if(e){const n=Pe.currentUser;if(!n)return;const r=t.player1.userId===n.uid,s=r?t.player1.choice:t.player2.choice,i=r?t.player2.choice:t.player1.choice;if(document.querySelectorAll(".choice-btn").forEach(I=>{I.classList.remove("selected","opponent-choice"),t.status==="finished"&&i&&I.dataset.choice===i&&I.classList.add("opponent-choice")}),s){const I=document.querySelector(`[data-choice="${s}"]`);I&&I.classList.add("selected")}let o="";const c=document.getElementById("game-result-overlay"),l=document.getElementById("result-message"),h=document.getElementById("overlay-play-again-btn");t.status==="finished"?(t.winner==="draw"?o='<p style="color: orange; font-weight: bold;">平手！</p>':t.winner==="player1"&&r||t.winner==="player2"&&!r?o='<p style="color: green; font-weight: bold;">You Win！</p>':o='<p style="color: red; font-weight: bold;">Loser！</p>',c&&l&&(l.innerHTML=o,c.style.display="flex")):c&&(c.style.display="none"),h&&(h.onclick=async()=>{t.id&&(await Gk(t.id),c&&(c.style.display="none"))});const f=r?t.player2:t.player1;if(t.status!=="waiting"&&!f.userId){be({message:"遊戲已結束，對手已離開",type:"warning",duration:3e3,offset:window.innerHeight-100,customClass:"bottom-message"}),c&&(c.style.display="none"),be({message:"遊戲已結束，對手已離開",type:"info",duration:3e3,offset:window.innerHeight-100,customClass:"bottom-message"}),HT();return}let p=t.player1.userName||"等待中",g=t.player2.userName||"等待玩家";p==="匿名"&&g==="匿名"&&(g="匿名2"),e.innerHTML=`
            <p>玩家1 (房主): ${p} ${t.player1.choice?"已出拳":"等待中"}</p>
            <p>玩家2: ${g} ${t.player2.choice?"已出拳":"等待中"}</p>
            ${o}
        `}}async function AD(t){try{const e=Pe.currentUser;if(!e)throw new Error("User not authenticated");const n=t.name.split(".").pop(),r=`avatar_${Date.now()}.${n}`,s=dC(EC,`avatars/${e.uid}/${r}`),i=await hC(s,t),o=await fC(i.ref),{updateProfile:c}=await wu(async()=>{const{updateProfile:l}=await Promise.resolve().then(()=>Vu);return{updateProfile:l}},void 0);return await c(e,{photoURL:o}),o}catch(e){throw console.log("上傳文件失敗",e),e}}
