(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();const YT="modulepreload",JT=function(t){return"/"+t},Vf={},hu=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),c=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));s=Promise.allSettled(n.map(l=>{if(l=JT(l),l in Vf)return;Vf[l]=!0;const h=l.endsWith(".css"),f=h?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${f}`))return;const p=document.createElement("link");if(p.rel=h?"stylesheet":YT,h||(p.as="script"),p.crossOrigin="",p.href=l,c&&p.setAttribute("nonce",c),document.head.appendChild(p),h)return new Promise((g,I)=>{p.addEventListener("load",g),p.addEventListener("error",()=>I(new Error(`Unable to preload CSS for ${l}`)))})}))}function i(o){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=o,window.dispatchEvent(c),!c.defaultPrevented)throw o}return s.then(o=>{for(const c of o||[])c.status==="rejected"&&i(c.reason);return e().catch(i)})},XT=()=>{};var xf={};/**
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
 */const Rm=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},ZT=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],c=t[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Cm={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,c=o?t[s+1]:0,l=s+2<t.length,h=l?t[s+2]:0,f=i>>2,p=(i&3)<<4|c>>4;let g=(c&15)<<2|h>>6,I=h&63;l||(I=64,o||(g=64)),r.push(n[f],n[p],n[g],n[I])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Rm(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):ZT(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],c=s<t.length?n[t.charAt(s)]:0;++s;const h=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||c==null||h==null||p==null)throw new ev;const g=i<<2|c>>4;if(r.push(g),h!==64){const I=c<<4&240|h>>2;if(r.push(I),p!==64){const P=h<<6&192|p;r.push(P)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class ev extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const tv=function(t){const e=Rm(t);return Cm.encodeByteArray(e,!0)},_a=function(t){return tv(t).replace(/\./g,"")},Pm=function(t){try{return Cm.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function nv(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const rv=()=>nv().__FIREBASE_DEFAULTS__,sv=()=>{if(typeof process>"u"||typeof xf>"u")return;const t=xf.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},iv=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Pm(t[1]);return e&&JSON.parse(e)},Qa=()=>{try{return XT()||rv()||sv()||iv()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Om=t=>{var e,n;return(n=(e=Qa())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},Nm=t=>{const e=Om(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Dm=()=>{var t;return(t=Qa())==null?void 0:t.config},km=t=>{var e;return(e=Qa())==null?void 0:e[`_${t}`]};/**
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
 */class ov{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Sr(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function fu(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function Vm(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...t};return[_a(JSON.stringify(n)),_a(JSON.stringify(o)),""].join(".")}const Mi={};function av(){const t={prod:[],emulator:[]};for(const e of Object.keys(Mi))Mi[e]?t.emulator.push(e):t.prod.push(e);return t}function cv(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let Lf=!1;function du(t,e){if(typeof window>"u"||typeof document>"u"||!Sr(window.location.host)||Mi[t]===e||Mi[t]||Lf)return;Mi[t]=e;function n(g){return`__firebase__banner__${g}`}const r="__firebase__banner",i=av().prod.length>0;function o(){const g=document.getElementById(r);g&&g.remove()}function c(g){g.style.display="flex",g.style.background="#7faaf0",g.style.position="fixed",g.style.bottom="5px",g.style.left="5px",g.style.padding=".5em",g.style.borderRadius="5px",g.style.alignItems="center"}function l(g,I){g.setAttribute("width","24"),g.setAttribute("id",I),g.setAttribute("height","24"),g.setAttribute("viewBox","0 0 24 24"),g.setAttribute("fill","none"),g.style.marginLeft="-6px"}function h(){const g=document.createElement("span");return g.style.cursor="pointer",g.style.marginLeft="16px",g.style.fontSize="24px",g.innerHTML=" &times;",g.onclick=()=>{Lf=!0,o()},g}function f(g,I){g.setAttribute("id",I),g.innerText="Learn more",g.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",g.setAttribute("target","__blank"),g.style.paddingLeft="5px",g.style.textDecoration="underline"}function p(){const g=cv(r),I=n("text"),P=document.getElementById(I)||document.createElement("span"),R=n("learnmore"),O=document.getElementById(R)||document.createElement("a"),V=n("preprendIcon"),q=document.getElementById(V)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(g.created){const W=g.element;c(W),f(O,R);const j=h();l(q,V),W.append(q,P,O,j),document.body.appendChild(W)}i?(P.innerText="Preview backend disconnected.",q.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
</defs>`,P.innerText="Preview backend running in this workspace."),P.setAttribute("id",I)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
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
 */function _t(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function lv(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(_t())}function uv(){var e;const t=(e=Qa())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function hv(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function fv(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function dv(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function pv(){const t=_t();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function mv(){return!uv()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function gv(){try{return typeof indexedDB=="object"}catch{return!1}}function _v(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)==null?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const yv="FirebaseError";class wn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=yv,Object.setPrototypeOf(this,wn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,_o.prototype.create)}}class _o{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Ev(i,r):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new wn(s,c,r)}}function Ev(t,e){return t.replace(Tv,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Tv=/\{\$([^}]+)}/g;function vv(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Xr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Mf(i)&&Mf(o)){if(!Xr(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Mf(t){return t!==null&&typeof t=="object"}/**
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
 */function yo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Pi(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Oi(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Iv(t,e){const n=new wv(t,e);return n.subscribe.bind(n)}class wv{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Av(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Gc),s.error===void 0&&(s.error=Gc),s.complete===void 0&&(s.complete=Gc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Av(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Gc(){}/**
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
 */function Be(t){return t&&t._delegate?t._delegate:t}class gr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const jr="[DEFAULT]";/**
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
 */class bv{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new ov;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Rv(e))try{this.getOrInitializeService({instanceIdentifier:jr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=jr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=jr){return this.instances.has(e)}getOptions(e=jr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&o.resolve(s)}return s}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Sv(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=jr){return this.component?this.component.multipleInstances?e:jr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Sv(t){return t===jr?void 0:t}function Rv(t){return t.instantiationMode==="EAGER"}/**
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
 */class Cv{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new bv(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var he;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(he||(he={}));const Pv={debug:he.DEBUG,verbose:he.VERBOSE,info:he.INFO,warn:he.WARN,error:he.ERROR,silent:he.SILENT},Ov=he.INFO,Nv={[he.DEBUG]:"log",[he.VERBOSE]:"log",[he.INFO]:"info",[he.WARN]:"warn",[he.ERROR]:"error"},Dv=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=Nv[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class pu{constructor(e){this.name=e,this._logLevel=Ov,this._logHandler=Dv,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in he))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Pv[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,he.DEBUG,...e),this._logHandler(this,he.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,he.VERBOSE,...e),this._logHandler(this,he.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,he.INFO,...e),this._logHandler(this,he.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,he.WARN,...e),this._logHandler(this,he.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,he.ERROR,...e),this._logHandler(this,he.ERROR,...e)}}const kv=(t,e)=>e.some(n=>t instanceof n);let Uf,Ff;function Vv(){return Uf||(Uf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function xv(){return Ff||(Ff=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const xm=new WeakMap,vl=new WeakMap,Lm=new WeakMap,Kc=new WeakMap,mu=new WeakMap;function Lv(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(lr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&xm.set(n,t)}).catch(()=>{}),mu.set(e,t),e}function Mv(t){if(vl.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});vl.set(t,e)}let Il={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return vl.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Lm.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return lr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Uv(t){Il=t(Il)}function Fv(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Qc(this),e,...n);return Lm.set(r,e.sort?e.sort():[e]),lr(r)}:xv().includes(t)?function(...e){return t.apply(Qc(this),e),lr(xm.get(this))}:function(...e){return lr(t.apply(Qc(this),e))}}function Bv(t){return typeof t=="function"?Fv(t):(t instanceof IDBTransaction&&Mv(t),kv(t,Vv())?new Proxy(t,Il):t)}function lr(t){if(t instanceof IDBRequest)return Lv(t);if(Kc.has(t))return Kc.get(t);const e=Bv(t);return e!==t&&(Kc.set(t,e),mu.set(e,t)),e}const Qc=t=>mu.get(t);function $v(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),c=lr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(lr(o.result),l.oldVersion,l.newVersion,lr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),c}const jv=["get","getKey","getAll","getAllKeys","count"],Hv=["put","add","delete","clear"],Yc=new Map;function Bf(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Yc.get(e))return Yc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=Hv.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||jv.includes(n)))return;const i=async function(o,...c){const l=this.transaction(o,s?"readwrite":"readonly");let h=l.store;return r&&(h=h.index(c.shift())),(await Promise.all([h[n](...c),s&&l.done]))[0]};return Yc.set(e,i),i}Uv(t=>({...t,get:(e,n,r)=>Bf(e,n)||t.get(e,n,r),has:(e,n)=>!!Bf(e,n)||t.has(e,n)}));/**
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
 */class qv{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(zv(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function zv(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const wl="@firebase/app",$f="0.14.6";/**
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
 */const Mn=new pu("@firebase/app"),Wv="@firebase/app-compat",Gv="@firebase/analytics-compat",Kv="@firebase/analytics",Qv="@firebase/app-check-compat",Yv="@firebase/app-check",Jv="@firebase/auth",Xv="@firebase/auth-compat",Zv="@firebase/database",eI="@firebase/data-connect",tI="@firebase/database-compat",nI="@firebase/functions",rI="@firebase/functions-compat",sI="@firebase/installations",iI="@firebase/installations-compat",oI="@firebase/messaging",aI="@firebase/messaging-compat",cI="@firebase/performance",lI="@firebase/performance-compat",uI="@firebase/remote-config",hI="@firebase/remote-config-compat",fI="@firebase/storage",dI="@firebase/storage-compat",pI="@firebase/firestore",mI="@firebase/ai",gI="@firebase/firestore-compat",_I="firebase",yI="12.6.0";/**
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
 */const Al="[DEFAULT]",EI={[wl]:"fire-core",[Wv]:"fire-core-compat",[Kv]:"fire-analytics",[Gv]:"fire-analytics-compat",[Yv]:"fire-app-check",[Qv]:"fire-app-check-compat",[Jv]:"fire-auth",[Xv]:"fire-auth-compat",[Zv]:"fire-rtdb",[eI]:"fire-data-connect",[tI]:"fire-rtdb-compat",[nI]:"fire-fn",[rI]:"fire-fn-compat",[sI]:"fire-iid",[iI]:"fire-iid-compat",[oI]:"fire-fcm",[aI]:"fire-fcm-compat",[cI]:"fire-perf",[lI]:"fire-perf-compat",[uI]:"fire-rc",[hI]:"fire-rc-compat",[fI]:"fire-gcs",[dI]:"fire-gcs-compat",[pI]:"fire-fst",[gI]:"fire-fst-compat",[mI]:"fire-vertex","fire-js":"fire-js",[_I]:"fire-js-all"};/**
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
 */const ya=new Map,TI=new Map,bl=new Map;function jf(t,e){try{t.container.addComponent(e)}catch(n){Mn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Zr(t){const e=t.name;if(bl.has(e))return Mn.debug(`There were multiple attempts to register component ${e}.`),!1;bl.set(e,t);for(const n of ya.values())jf(n,t);for(const n of TI.values())jf(n,t);return!0}function Ya(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function mt(t){return t==null?!1:t.settings!==void 0}/**
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
 */const vI={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ur=new _o("app","Firebase",vI);/**
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
 */class II{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new gr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ur.create("app-deleted",{appName:this._name})}}/**
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
 */const ls=yI;function Mm(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:Al,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw ur.create("bad-app-name",{appName:String(s)});if(n||(n=Dm()),!n)throw ur.create("no-options");const i=ya.get(s);if(i){if(Xr(n,i.options)&&Xr(r,i.config))return i;throw ur.create("duplicate-app",{appName:s})}const o=new Cv(s);for(const l of bl.values())o.addComponent(l);const c=new II(n,r,o);return ya.set(s,c),c}function gu(t=Al){const e=ya.get(t);if(!e&&t===Al&&Dm())return Mm();if(!e)throw ur.create("no-app",{appName:t});return e}function dn(t,e,n){let r=EI[t]??t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const o=[`Unable to register library "${r}" with version "${e}":`];s&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Mn.warn(o.join(" "));return}Zr(new gr(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const wI="firebase-heartbeat-database",AI=1,Xi="firebase-heartbeat-store";let Jc=null;function Um(){return Jc||(Jc=$v(wI,AI,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Xi)}catch(n){console.warn(n)}}}}).catch(t=>{throw ur.create("idb-open",{originalErrorMessage:t.message})})),Jc}async function bI(t){try{const n=(await Um()).transaction(Xi),r=await n.objectStore(Xi).get(Fm(t));return await n.done,r}catch(e){if(e instanceof wn)Mn.warn(e.message);else{const n=ur.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Mn.warn(n.message)}}}async function Hf(t,e){try{const r=(await Um()).transaction(Xi,"readwrite");await r.objectStore(Xi).put(e,Fm(t)),await r.done}catch(n){if(n instanceof wn)Mn.warn(n.message);else{const r=ur.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Mn.warn(r.message)}}}function Fm(t){return`${t.name}!${t.options.appId}`}/**
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
 */const SI=1024,RI=30;class CI{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new OI(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=qf();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>RI){const o=NI(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Mn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=qf(),{heartbeatsToSend:r,unsentEntries:s}=PI(this._heartbeatsCache.heartbeats),i=_a(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return Mn.warn(n),""}}}function qf(){return new Date().toISOString().substring(0,10)}function PI(t,e=SI){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),zf(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),zf(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class OI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return gv()?_v().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await bI(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Hf(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Hf(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function zf(t){return _a(JSON.stringify({version:2,heartbeats:t})).length}function NI(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function DI(t){Zr(new gr("platform-logger",e=>new qv(e),"PRIVATE")),Zr(new gr("heartbeat",e=>new CI(e),"PRIVATE")),dn(wl,$f,t),dn(wl,$f,"esm2020"),dn("fire-js","")}DI("");function Bm(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const $m=Bm,jm=new _o("auth","Firebase",Bm());/**
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
 */const Ea=new pu("@firebase/auth");function kI(t,...e){Ea.logLevel<=he.WARN&&Ea.warn(`Auth (${ls}): ${t}`,...e)}function ra(t,...e){Ea.logLevel<=he.ERROR&&Ea.error(`Auth (${ls}): ${t}`,...e)}/**
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
 */function Bt(t,...e){throw yu(t,...e)}function Gt(t,...e){return yu(t,...e)}function _u(t,e,n){const r={...$m(),[e]:n};return new _o("auth","Firebase",r).create(e,{appName:t.name})}function Kt(t){return _u(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Hm(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Bt(t,"argument-error"),_u(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function yu(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return jm.create(t,...e)}function te(t,e,...n){if(!t)throw yu(e,...n)}function Vn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ra(e),new Error(e)}function Un(t,e){t||Vn(e)}/**
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
 */function Sl(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function VI(){return Wf()==="http:"||Wf()==="https:"}function Wf(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
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
 */function xI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(VI()||fv()||"connection"in navigator)?navigator.onLine:!0}function LI(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Eo{constructor(e,n){this.shortDelay=e,this.longDelay=n,Un(n>e,"Short delay should be less than long delay!"),this.isMobile=lv()||dv()}get(){return xI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Eu(t,e){Un(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class qm{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Vn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Vn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Vn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const MI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const UI=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],FI=new Eo(3e4,6e4);function Rr(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function zn(t,e,n,r,s={}){return zm(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const c=yo({key:t.config.apiKey,...o}).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const h={method:e,headers:l,...i};return hv()||(h.referrerPolicy="no-referrer"),t.emulatorConfig&&Sr(t.emulatorConfig.host)&&(h.credentials="include"),qm.fetch()(await Wm(t,t.config.apiHost,n,c),h)})}async function zm(t,e,n){t._canInitEmulator=!1;const r={...MI,...e};try{const s=new $I(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw jo(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[l,h]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw jo(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw jo(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw jo(t,"user-disabled",o);const f=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw _u(t,f,h);Bt(t,f)}}catch(s){if(s instanceof wn)throw s;Bt(t,"network-request-failed",{message:String(s)})}}async function To(t,e,n,r,s={}){const i=await zn(t,e,n,r,s);return"mfaPendingCredential"in i&&Bt(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function Wm(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?Eu(t.config,s):`${t.config.apiScheme}://${s}`;return UI.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function BI(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class $I{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Gt(this.auth,"network-request-failed")),FI.get())})}}function jo(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Gt(t,e,r);return s.customData._tokenResponse=n,s}function Gf(t){return t!==void 0&&t.enterprise!==void 0}class jI{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return BI(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function HI(t,e){return zn(t,"GET","/v2/recaptchaConfig",Rr(t,e))}/**
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
 */async function qI(t,e){return zn(t,"POST","/v1/accounts:delete",e)}async function Ta(t,e){return zn(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ui(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Gm(t,e=!1){const n=Be(t),r=await n.getIdToken(e),s=Tu(r);te(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Ui(Xc(s.auth_time)),issuedAtTime:Ui(Xc(s.iat)),expirationTime:Ui(Xc(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Xc(t){return Number(t)*1e3}function Tu(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return ra("JWT malformed, contained fewer than 3 sections"),null;try{const s=Pm(n);return s?JSON.parse(s):(ra("Failed to decode base64 JWT payload"),null)}catch(s){return ra("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Kf(t){const e=Tu(t);return te(e,"internal-error"),te(typeof e.exp<"u","internal-error"),te(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function qs(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof wn&&zI(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function zI({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class WI{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Rl{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ui(this.lastLoginAt),this.creationTime=Ui(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function va(t){var p;const e=t.auth,n=await t.getIdToken(),r=await qs(t,Ta(e,{idToken:n}));te(r==null?void 0:r.users.length,e,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const i=(p=s.providerUserInfo)!=null&&p.length?Qm(s.providerUserInfo):[],o=GI(t.providerData,i),c=t.isAnonymous,l=!(t.email&&s.passwordHash)&&!(o!=null&&o.length),h=c?l:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new Rl(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(t,f)}async function Km(t){const e=Be(t);await va(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function GI(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Qm(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function KI(t,e){const n=await zm(t,{},async()=>{const r=yo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await Wm(t,s,"/v1/token",`key=${i}`),c=await t._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:c,body:r};return t.emulatorConfig&&Sr(t.emulatorConfig.host)&&(l.credentials="include"),qm.fetch()(o,l)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function QI(t,e){return zn(t,"POST","/v2/accounts:revokeToken",Rr(t,e))}/**
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
 */class ks{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){te(e.idToken,"internal-error"),te(typeof e.idToken<"u","internal-error"),te(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Kf(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){te(e.length!==0,"internal-error");const n=Kf(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(te(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await KI(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new ks;return r&&(te(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(te(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(te(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ks,this.toJSON())}_performRefresh(){return Vn("not implemented")}}/**
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
 */function tr(t,e){te(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class zt{constructor({uid:e,auth:n,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new WI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Rl(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await qs(this,this.stsTokenManager.getToken(this.auth,e));return te(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Gm(this,e)}reload(){return Km(this)}_assign(e){this!==e&&(te(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new zt({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){te(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await va(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(mt(this.auth.app))return Promise.reject(Kt(this.auth));const e=await this.getIdToken();return await qs(this,qI(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,s=n.email??void 0,i=n.phoneNumber??void 0,o=n.photoURL??void 0,c=n.tenantId??void 0,l=n._redirectEventId??void 0,h=n.createdAt??void 0,f=n.lastLoginAt??void 0,{uid:p,emailVerified:g,isAnonymous:I,providerData:P,stsTokenManager:R}=n;te(p&&R,e,"internal-error");const O=ks.fromJSON(this.name,R);te(typeof p=="string",e,"internal-error"),tr(r,e.name),tr(s,e.name),te(typeof g=="boolean",e,"internal-error"),te(typeof I=="boolean",e,"internal-error"),tr(i,e.name),tr(o,e.name),tr(c,e.name),tr(l,e.name),tr(h,e.name),tr(f,e.name);const V=new zt({uid:p,auth:e,email:s,emailVerified:g,displayName:r,isAnonymous:I,photoURL:o,phoneNumber:i,tenantId:c,stsTokenManager:O,createdAt:h,lastLoginAt:f});return P&&Array.isArray(P)&&(V.providerData=P.map(q=>({...q}))),l&&(V._redirectEventId=l),V}static async _fromIdTokenResponse(e,n,r=!1){const s=new ks;s.updateFromServerResponse(n);const i=new zt({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await va(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];te(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Qm(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new ks;c.updateFromIdToken(r);const l=new zt({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:o}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Rl(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,h),l}}/**
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
 */const Qf=new Map;function xn(t){Un(t instanceof Function,"Expected a class definition");let e=Qf.get(t);return e?(Un(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Qf.set(t,e),e)}/**
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
 */class Ym{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Ym.type="NONE";const Cl=Ym;/**
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
 */function sa(t,e,n){return`firebase:${t}:${e}:${n}`}class Vs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=sa(this.userKey,s.apiKey,i),this.fullPersistenceKey=sa("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Ta(this.auth,{idToken:e}).catch(()=>{});return n?zt._fromGetAccountInfoResponse(this.auth,n,e):null}return zt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Vs(xn(Cl),e,r);const s=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||xn(Cl);const o=sa(r,e.config.apiKey,e.name);let c=null;for(const h of n)try{const f=await h._get(o);if(f){let p;if(typeof f=="string"){const g=await Ta(e,{idToken:f}).catch(()=>{});if(!g)break;p=await zt._fromGetAccountInfoResponse(e,g,f)}else p=zt._fromJSON(e,f);h!==i&&(c=p),i=h;break}}catch{}const l=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new Vs(i,e,r):(i=l[0],c&&await i._set(o,c.toJSON()),await Promise.all(n.map(async h=>{if(h!==i)try{await h._remove(o)}catch{}})),new Vs(i,e,r))}}/**
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
 */function Yf(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(eg(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Jm(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ng(e))return"Blackberry";if(rg(e))return"Webos";if(Xm(e))return"Safari";if((e.includes("chrome/")||Zm(e))&&!e.includes("edge/"))return"Chrome";if(tg(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Jm(t=_t()){return/firefox\//i.test(t)}function Xm(t=_t()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Zm(t=_t()){return/crios\//i.test(t)}function eg(t=_t()){return/iemobile/i.test(t)}function tg(t=_t()){return/android/i.test(t)}function ng(t=_t()){return/blackberry/i.test(t)}function rg(t=_t()){return/webos/i.test(t)}function vu(t=_t()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function YI(t=_t()){var e;return vu(t)&&!!((e=window.navigator)!=null&&e.standalone)}function JI(){return pv()&&document.documentMode===10}function sg(t=_t()){return vu(t)||tg(t)||rg(t)||ng(t)||/windows phone/i.test(t)||eg(t)}/**
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
 */function ig(t,e=[]){let n;switch(t){case"Browser":n=Yf(_t());break;case"Worker":n=`${Yf(_t())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ls}/${r}`}/**
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
 */class XI{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,c)=>{try{const l=e(i);o(l)}catch(l){c(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function ZI(t,e={}){return zn(t,"GET","/v2/passwordPolicy",Rr(t,e))}/**
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
 */const ew=6;class tw{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??ew,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class nw{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Jf(this),this.idTokenSubscription=new Jf(this),this.beforeStateQueue=new XI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=jm,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=xn(n)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await Vs.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Ta(this,{idToken:e}),r=await zt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(mt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(i=this.redirectUser)==null?void 0:i._redirectEventId,c=r==null?void 0:r._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===c)&&(l!=null&&l.user)&&(r=l.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return te(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await va(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=LI()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(mt(this.app))return Promise.reject(Kt(this));const n=e?Be(e):null;return n&&te(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&te(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return mt(this.app)?Promise.reject(Kt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return mt(this.app)?Promise.reject(Kt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(xn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await ZI(this),n=new tw(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new _o("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await QI(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&xn(e)||this._popupRedirectResolver;te(n,this,"argument-error"),this.redirectPersistenceManager=await Vs.create(this,[xn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(te(c,this,"internal-error"),c.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return te(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ig(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(mt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&kI(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function en(t){return Be(t)}class Jf{constructor(e){this.auth=e,this.observer=null,this.addObserver=Iv(n=>this.observer=n)}get next(){return te(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Ja={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function rw(t){Ja=t}function og(t){return Ja.loadJS(t)}function sw(){return Ja.recaptchaEnterpriseScript}function iw(){return Ja.gapiScript}function ow(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class aw{constructor(){this.enterprise=new cw}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class cw{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const lw="recaptcha-enterprise",ag="NO_RECAPTCHA";class uw{constructor(e){this.type=lw,this.auth=en(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,c)=>{HI(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const h=new jI(l);return i.tenantId==null?i._agentRecaptchaConfig=h:i._tenantRecaptchaConfigs[i.tenantId]=h,o(h.siteKey)}}).catch(l=>{c(l)})})}function s(i,o,c){const l=window.grecaptcha;Gf(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(h=>{o(h)}).catch(()=>{o(ag)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new aw().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(c=>{if(!n&&Gf(window.grecaptcha))s(c,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=sw();l.length!==0&&(l+=c),og(l).then(()=>{s(c,i,o)}).catch(h=>{o(h)})}}).catch(c=>{o(c)})})}}async function Xf(t,e,n,r=!1,s=!1){const i=new uw(t);let o;if(s)o=ag;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const c={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){const l=c.phoneEnrollmentInfo.phoneNumber,h=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:h,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){const l=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return r?Object.assign(c,{captchaResp:o}):Object.assign(c,{captchaResponse:o}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function Pl(t,e,n,r,s){var i;if((i=t._getRecaptchaConfig())!=null&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Xf(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const c=await Xf(t,e,n,n==="getOobCode");return r(t,c)}else return Promise.reject(o)})}/**
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
 */function cg(t,e){const n=Ya(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Xr(i,e??{}))return s;Bt(s,"already-initialized")}return n.initialize({options:e})}function hw(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(xn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function lg(t,e,n){const r=en(t);te(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=ug(e),{host:o,port:c}=fw(e),l=c===null?"":`:${c}`,h={url:`${i}//${o}${l}/`},f=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){te(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),te(Xr(h,r.config.emulator)&&Xr(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=h,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,Sr(o)?(fu(`${i}//${o}${l}`),du("Auth",!0)):dw()}function ug(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function fw(t){const e=ug(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Zf(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Zf(o)}}}function Zf(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function dw(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Xa{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Vn("not implemented")}_getIdTokenResponse(e){return Vn("not implemented")}_linkToIdToken(e,n){return Vn("not implemented")}_getReauthenticationResolver(e){return Vn("not implemented")}}async function pw(t,e){return zn(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function mw(t,e){return To(t,"POST","/v1/accounts:signInWithPassword",Rr(t,e))}/**
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
 */async function gw(t,e){return To(t,"POST","/v1/accounts:signInWithEmailLink",Rr(t,e))}async function _w(t,e){return To(t,"POST","/v1/accounts:signInWithEmailLink",Rr(t,e))}/**
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
 */class zs extends Xa{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new zs(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new zs(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Pl(e,n,"signInWithPassword",mw);case"emailLink":return gw(e,{email:this._email,oobCode:this._password});default:Bt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Pl(e,r,"signUpPassword",pw);case"emailLink":return _w(e,{idToken:n,email:this._email,oobCode:this._password});default:Bt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function xs(t,e){return To(t,"POST","/v1/accounts:signInWithIdp",Rr(t,e))}/**
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
 */const yw="http://localhost";class _r extends Xa{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new _r(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Bt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=n;if(!r||!s)return null;const o=new _r(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return xs(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,xs(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,xs(e,n)}buildRequest(){const e={requestUri:yw,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=yo(n)}return e}}/**
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
 */function Ew(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Tw(t){const e=Pi(Oi(t)).link,n=e?Pi(Oi(e)).deep_link_id:null,r=Pi(Oi(t)).deep_link_id;return(r?Pi(Oi(r)).link:null)||r||n||e||t}class Za{constructor(e){const n=Pi(Oi(e)),r=n.apiKey??null,s=n.oobCode??null,i=Ew(n.mode??null);te(r&&s&&i,"argument-error"),this.apiKey=r,this.operation=i,this.code=s,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=Tw(e);try{return new Za(n)}catch{return null}}}/**
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
 */class us{constructor(){this.providerId=us.PROVIDER_ID}static credential(e,n){return zs._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Za.parseLink(n);return te(r,"argument-error"),zs._fromEmailAndCode(e,r.code,r.tenantId)}}us.PROVIDER_ID="password";us.EMAIL_PASSWORD_SIGN_IN_METHOD="password";us.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class ec{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class vo extends ec{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Pn extends vo{constructor(){super("facebook.com")}static credential(e){return _r._fromParams({providerId:Pn.PROVIDER_ID,signInMethod:Pn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Pn.credentialFromTaggedObject(e)}static credentialFromError(e){return Pn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Pn.credential(e.oauthAccessToken)}catch{return null}}}Pn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Pn.PROVIDER_ID="facebook.com";/**
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
 */class un extends vo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return _r._fromParams({providerId:un.PROVIDER_ID,signInMethod:un.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return un.credentialFromTaggedObject(e)}static credentialFromError(e){return un.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return un.credential(n,r)}catch{return null}}}un.GOOGLE_SIGN_IN_METHOD="google.com";un.PROVIDER_ID="google.com";/**
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
 */class On extends vo{constructor(){super("github.com")}static credential(e){return _r._fromParams({providerId:On.PROVIDER_ID,signInMethod:On.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return On.credentialFromTaggedObject(e)}static credentialFromError(e){return On.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return On.credential(e.oauthAccessToken)}catch{return null}}}On.GITHUB_SIGN_IN_METHOD="github.com";On.PROVIDER_ID="github.com";/**
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
 */class Nn extends vo{constructor(){super("twitter.com")}static credential(e,n){return _r._fromParams({providerId:Nn.PROVIDER_ID,signInMethod:Nn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Nn.credentialFromTaggedObject(e)}static credentialFromError(e){return Nn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Nn.credential(n,r)}catch{return null}}}Nn.TWITTER_SIGN_IN_METHOD="twitter.com";Nn.PROVIDER_ID="twitter.com";/**
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
 */async function hg(t,e){return To(t,"POST","/v1/accounts:signUp",Rr(t,e))}/**
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
 */class Fn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await zt._fromIdTokenResponse(e,r,s),o=ed(r);return new Fn({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=ed(r);return new Fn({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function ed(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */async function fg(t){var s;if(mt(t.app))return Promise.reject(Kt(t));const e=en(t);if(await e._initializationPromise,(s=e.currentUser)!=null&&s.isAnonymous)return new Fn({user:e.currentUser,providerId:null,operationType:"signIn"});const n=await hg(e,{returnSecureToken:!0}),r=await Fn._fromIdTokenResponse(e,"signIn",n,!0);return await e._updateCurrentUser(r.user),r}/**
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
 */class Ia extends wn{constructor(e,n,r,s){super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Ia.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Ia(e,n,r,s)}}function dg(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Ia._fromErrorAndOperation(t,i,e,r):i})}async function vw(t,e,n=!1){const r=await qs(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Fn._forOperation(t,"link",r)}/**
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
 */async function Iw(t,e,n=!1){const{auth:r}=t;if(mt(r.app))return Promise.reject(Kt(r));const s="reauthenticate";try{const i=await qs(t,dg(r,s,e,t),n);te(i.idToken,r,"internal-error");const o=Tu(i.idToken);te(o,r,"internal-error");const{sub:c}=o;return te(t.uid===c,r,"user-mismatch"),Fn._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Bt(r,"user-mismatch"),i}}/**
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
 */async function pg(t,e,n=!1){if(mt(t.app))return Promise.reject(Kt(t));const r="signIn",s=await dg(t,r,e),i=await Fn._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function mg(t,e){return pg(en(t),e)}/**
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
 */async function gg(t){const e=en(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function _g(t,e,n){if(mt(t.app))return Promise.reject(Kt(t));const r=en(t),o=await Pl(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",hg).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&gg(t),l}),c=await Fn._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(c.user),c}function yg(t,e,n){return mt(t.app)?Promise.reject(Kt(t)):mg(Be(t),us.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&gg(t),r})}/**
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
 */async function ww(t,e){return zn(t,"POST","/v1/accounts:update",e)}/**
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
 */async function Eg(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=Be(t),i={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await qs(r,ww(r.auth,i));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const c=r.providerData.find(({providerId:l})=>l==="password");c&&(c.displayName=r.displayName,c.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function Tg(t,e,n,r){return Be(t).onIdTokenChanged(e,n,r)}function vg(t,e,n){return Be(t).beforeAuthStateChanged(e,n)}function Ig(t,e,n,r){return Be(t).onAuthStateChanged(e,n,r)}function wg(t){return Be(t).signOut()}const wa="__sak";/**
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
 */class Ag{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(wa,"1"),this.storage.removeItem(wa),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const Aw=1e3,bw=10;class bg extends Ag{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=sg(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,c,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);JI()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,bw):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Aw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}bg.type="LOCAL";const Sg=bg;/**
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
 */class Rg extends Ag{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Rg.type="SESSION";const Iu=Rg;/**
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
 */function Sw(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class tc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new tc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(o).map(async h=>h(n.origin,i)),l=await Sw(c);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}tc.receivers=[];/**
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
 */function wu(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Rw{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((c,l)=>{const h=wu("",20);s.port1.start();const f=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const g=p;if(g.data.eventId===h)switch(g.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(g.data.response);break;default:clearTimeout(f),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function pn(){return window}function Cw(t){pn().location.href=t}/**
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
 */function Cg(){return typeof pn().WorkerGlobalScope<"u"&&typeof pn().importScripts=="function"}async function Pw(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Ow(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function Nw(){return Cg()?self:null}/**
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
 */const Pg="firebaseLocalStorageDb",Dw=1,Aa="firebaseLocalStorage",Og="fbase_key";class Io{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function nc(t,e){return t.transaction([Aa],e?"readwrite":"readonly").objectStore(Aa)}function kw(){const t=indexedDB.deleteDatabase(Pg);return new Io(t).toPromise()}function Ol(){const t=indexedDB.open(Pg,Dw);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Aa,{keyPath:Og})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Aa)?e(r):(r.close(),await kw(),e(await Ol()))})})}async function td(t,e,n){const r=nc(t,!0).put({[Og]:e,value:n});return new Io(r).toPromise()}async function Vw(t,e){const n=nc(t,!1).get(e),r=await new Io(n).toPromise();return r===void 0?null:r.value}function nd(t,e){const n=nc(t,!0).delete(e);return new Io(n).toPromise()}const xw=800,Lw=3;class Ng{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ol(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Lw)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Cg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=tc._getInstance(Nw()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await Pw(),!this.activeServiceWorker)return;this.sender=new Rw(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Ow()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ol();return await td(e,wa,"1"),await nd(e,wa),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>td(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Vw(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>nd(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=nc(s,!1).getAll();return new Io(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),xw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Ng.type="LOCAL";const Dg=Ng;new Eo(3e4,6e4);/**
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
 */function Au(t,e){return e?xn(e):(te(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class bu extends Xa{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return xs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return xs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return xs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Mw(t){return pg(t.auth,new bu(t),t.bypassAuthState)}function Uw(t){const{auth:e,user:n}=t;return te(n,e,"internal-error"),Iw(n,new bu(t),t.bypassAuthState)}async function Fw(t){const{auth:e,user:n}=t;return te(n,e,"internal-error"),vw(n,new bu(t),t.bypassAuthState)}/**
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
 */class kg{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:c}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Mw;case"linkViaPopup":case"linkViaRedirect":return Fw;case"reauthViaPopup":case"reauthViaRedirect":return Uw;default:Bt(this.auth,"internal-error")}}resolve(e){Un(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Un(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Bw=new Eo(2e3,1e4);async function Vg(t,e,n){if(mt(t.app))return Promise.reject(Gt(t,"operation-not-supported-in-this-environment"));const r=en(t);Hm(t,e,ec);const s=Au(r,n);return new zr(r,"signInViaPopup",e,s).executeNotNull()}class zr extends kg{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,zr.currentPopupAction&&zr.currentPopupAction.cancel(),zr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return te(e,this.auth,"internal-error"),e}async onExecution(){Un(this.filter.length===1,"Popup operations only handle one event");const e=wu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Gt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(Gt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,zr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Gt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Bw.get())};e()}}zr.currentPopupAction=null;/**
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
 */const $w="pendingRedirect",ia=new Map;class jw extends kg{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ia.get(this.auth._key());if(!e){try{const r=await Hw(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ia.set(this.auth._key(),e)}return this.bypassAuthState||ia.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Hw(t,e){const n=Lg(e),r=xg(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}async function qw(t,e){return xg(t)._set(Lg(e),"true")}function zw(t,e){ia.set(t._key(),e)}function xg(t){return xn(t._redirectPersistence)}function Lg(t){return sa($w,t.config.apiKey,t.name)}/**
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
 */function Nl(t,e,n){return Ww(t,e,n)}async function Ww(t,e,n){if(mt(t.app))return Promise.reject(Kt(t));const r=en(t);Hm(t,e,ec),await r._initializationPromise;const s=Au(r,n);return await qw(s,r),s._openRedirect(r,e,"signInViaRedirect")}async function Mg(t,e){return await en(t)._initializationPromise,Ug(t,e,!1)}async function Ug(t,e,n=!1){if(mt(t.app))return Promise.reject(Kt(t));const r=en(t),s=Au(r,e),o=await new jw(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const Gw=10*60*1e3;class Kw{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Qw(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Fg(e)){const s=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(Gt(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Gw&&this.cachedEventUids.clear(),this.cachedEventUids.has(rd(e))}saveEventToCache(e){this.cachedEventUids.add(rd(e)),this.lastProcessedEventTime=Date.now()}}function rd(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Fg({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Qw(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Fg(t);default:return!1}}/**
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
 */async function Yw(t,e={}){return zn(t,"GET","/v1/projects",e)}/**
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
 */const Jw=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Xw=/^https?/;async function Zw(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Yw(t);for(const n of e)try{if(eA(n))return}catch{}Bt(t,"unauthorized-domain")}function eA(t){const e=Sl(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Xw.test(n))return!1;if(Jw.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const tA=new Eo(3e4,6e4);function sd(){const t=pn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function nA(t){return new Promise((e,n)=>{var s,i,o;function r(){sd(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{sd(),n(Gt(t,"network-request-failed"))},timeout:tA.get()})}if((i=(s=pn().gapi)==null?void 0:s.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((o=pn().gapi)!=null&&o.load)r();else{const c=ow("iframefcb");return pn()[c]=()=>{gapi.load?r():n(Gt(t,"network-request-failed"))},og(`${iw()}?onload=${c}`).catch(l=>n(l))}}).catch(e=>{throw oa=null,e})}let oa=null;function rA(t){return oa=oa||nA(t),oa}/**
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
 */const sA=new Eo(5e3,15e3),iA="__/auth/iframe",oA="emulator/auth/iframe",aA={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},cA=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function lA(t){const e=t.config;te(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Eu(e,oA):`https://${t.config.authDomain}/${iA}`,r={apiKey:e.apiKey,appName:t.name,v:ls},s=cA.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${yo(r).slice(1)}`}async function uA(t){const e=await rA(t),n=pn().gapi;return te(n,t,"internal-error"),e.open({where:document.body,url:lA(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:aA,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Gt(t,"network-request-failed"),c=pn().setTimeout(()=>{i(o)},sA.get());function l(){pn().clearTimeout(c),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
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
 */const hA={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},fA=500,dA=600,pA="_blank",mA="http://localhost";class id{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function gA(t,e,n,r=fA,s=dA){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l={...hA,width:r.toString(),height:s.toString(),top:i,left:o},h=_t().toLowerCase();n&&(c=Zm(h)?pA:n),Jm(h)&&(e=e||mA,l.scrollbars="yes");const f=Object.entries(l).reduce((g,[I,P])=>`${g}${I}=${P},`,"");if(YI(h)&&c!=="_self")return _A(e||"",c),new id(null);const p=window.open(e||"",c,f);te(p,t,"popup-blocked");try{p.focus()}catch{}return new id(p)}function _A(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const yA="__/auth/handler",EA="emulator/auth/handler",TA=encodeURIComponent("fac");async function od(t,e,n,r,s,i){te(t.config.authDomain,t,"auth-domain-config-required"),te(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ls,eventId:s};if(e instanceof ec){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",vv(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))o[f]=p}if(e instanceof vo){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const c=o;for(const f of Object.keys(c))c[f]===void 0&&delete c[f];const l=await t._getAppCheckToken(),h=l?`#${TA}=${encodeURIComponent(l)}`:"";return`${vA(t)}?${yo(c).slice(1)}${h}`}function vA({config:t}){return t.emulator?Eu(t,EA):`https://${t.authDomain}/${yA}`}/**
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
 */const Zc="webStorageSupport";class IA{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Iu,this._completeRedirectFn=Ug,this._overrideRedirectResult=zw}async _openPopup(e,n,r,s){var o;Un((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const i=await od(e,n,r,Sl(),s);return gA(e,i,wu())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await od(e,n,r,Sl(),s);return Cw(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Un(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await uA(e),r=new Kw(e);return n.register("authEvent",s=>(te(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Zc,{type:Zc},s=>{var o;const i=(o=s==null?void 0:s[0])==null?void 0:o[Zc];i!==void 0&&n(!!i),Bt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Zw(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return sg()||Xm()||vu()}}const Bg=IA;var ad="@firebase/auth",cd="1.11.1";/**
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
 */class wA{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){te(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function AA(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function bA(t){Zr(new gr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;te(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ig(t)},h=new nw(r,s,i,l);return hw(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Zr(new gr("auth-internal",e=>{const n=en(e.getProvider("auth").getImmediate());return(r=>new wA(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),dn(ad,cd,AA(t)),dn(ad,cd,"esm2020")}/**
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
 */const SA=5*60,RA=km("authIdTokenMaxAge")||SA;let ld=null;const CA=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>RA)return;const s=n==null?void 0:n.token;ld!==s&&(ld=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function $g(t=gu()){const e=Ya(t,"auth");if(e.isInitialized())return e.getImmediate();const n=cg(t,{popupRedirectResolver:Bg,persistence:[Dg,Sg,Iu]}),r=km("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=CA(i.toString());vg(n,o,()=>o(n.currentUser)),Tg(n,c=>o(c))}}const s=Om("auth");return s&&lg(n,`http://${s}`),n}function PA(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}rw({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Gt("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",PA().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});bA("Browser");const Su=Object.freeze(Object.defineProperty({__proto__:null,ActionCodeURL:Za,AuthCredential:Xa,EmailAuthCredential:zs,EmailAuthProvider:us,FacebookAuthProvider:Pn,GithubAuthProvider:On,GoogleAuthProvider:un,OAuthCredential:_r,TwitterAuthProvider:Nn,beforeAuthStateChanged:vg,browserLocalPersistence:Sg,browserPopupRedirectResolver:Bg,browserSessionPersistence:Iu,connectAuthEmulator:lg,createUserWithEmailAndPassword:_g,getAuth:$g,getIdTokenResult:Gm,getRedirectResult:Mg,inMemoryPersistence:Cl,indexedDBLocalPersistence:Dg,initializeAuth:cg,onAuthStateChanged:Ig,onIdTokenChanged:Tg,prodErrorMap:$m,reload:Km,signInAnonymously:fg,signInWithCredential:mg,signInWithEmailAndPassword:yg,signInWithPopup:Vg,signInWithRedirect:Nl,signOut:wg,updateProfile:Eg},Symbol.toStringTag,{value:"Module"}));var OA="firebase",NA="12.6.0";/**
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
 */dn(OA,NA,"app");var ud=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var hr,jg;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(b,y){function _(){}_.prototype=y.prototype,b.F=y.prototype,b.prototype=new _,b.prototype.constructor=b,b.D=function(A,w,T){for(var E=Array(arguments.length-2),me=2;me<arguments.length;me++)E[me-2]=arguments[me];return y.prototype[w].apply(A,E)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(b,y,_){_||(_=0);const A=Array(16);if(typeof y=="string")for(var w=0;w<16;++w)A[w]=y.charCodeAt(_++)|y.charCodeAt(_++)<<8|y.charCodeAt(_++)<<16|y.charCodeAt(_++)<<24;else for(w=0;w<16;++w)A[w]=y[_++]|y[_++]<<8|y[_++]<<16|y[_++]<<24;y=b.g[0],_=b.g[1],w=b.g[2];let T=b.g[3],E;E=y+(T^_&(w^T))+A[0]+3614090360&4294967295,y=_+(E<<7&4294967295|E>>>25),E=T+(w^y&(_^w))+A[1]+3905402710&4294967295,T=y+(E<<12&4294967295|E>>>20),E=w+(_^T&(y^_))+A[2]+606105819&4294967295,w=T+(E<<17&4294967295|E>>>15),E=_+(y^w&(T^y))+A[3]+3250441966&4294967295,_=w+(E<<22&4294967295|E>>>10),E=y+(T^_&(w^T))+A[4]+4118548399&4294967295,y=_+(E<<7&4294967295|E>>>25),E=T+(w^y&(_^w))+A[5]+1200080426&4294967295,T=y+(E<<12&4294967295|E>>>20),E=w+(_^T&(y^_))+A[6]+2821735955&4294967295,w=T+(E<<17&4294967295|E>>>15),E=_+(y^w&(T^y))+A[7]+4249261313&4294967295,_=w+(E<<22&4294967295|E>>>10),E=y+(T^_&(w^T))+A[8]+1770035416&4294967295,y=_+(E<<7&4294967295|E>>>25),E=T+(w^y&(_^w))+A[9]+2336552879&4294967295,T=y+(E<<12&4294967295|E>>>20),E=w+(_^T&(y^_))+A[10]+4294925233&4294967295,w=T+(E<<17&4294967295|E>>>15),E=_+(y^w&(T^y))+A[11]+2304563134&4294967295,_=w+(E<<22&4294967295|E>>>10),E=y+(T^_&(w^T))+A[12]+1804603682&4294967295,y=_+(E<<7&4294967295|E>>>25),E=T+(w^y&(_^w))+A[13]+4254626195&4294967295,T=y+(E<<12&4294967295|E>>>20),E=w+(_^T&(y^_))+A[14]+2792965006&4294967295,w=T+(E<<17&4294967295|E>>>15),E=_+(y^w&(T^y))+A[15]+1236535329&4294967295,_=w+(E<<22&4294967295|E>>>10),E=y+(w^T&(_^w))+A[1]+4129170786&4294967295,y=_+(E<<5&4294967295|E>>>27),E=T+(_^w&(y^_))+A[6]+3225465664&4294967295,T=y+(E<<9&4294967295|E>>>23),E=w+(y^_&(T^y))+A[11]+643717713&4294967295,w=T+(E<<14&4294967295|E>>>18),E=_+(T^y&(w^T))+A[0]+3921069994&4294967295,_=w+(E<<20&4294967295|E>>>12),E=y+(w^T&(_^w))+A[5]+3593408605&4294967295,y=_+(E<<5&4294967295|E>>>27),E=T+(_^w&(y^_))+A[10]+38016083&4294967295,T=y+(E<<9&4294967295|E>>>23),E=w+(y^_&(T^y))+A[15]+3634488961&4294967295,w=T+(E<<14&4294967295|E>>>18),E=_+(T^y&(w^T))+A[4]+3889429448&4294967295,_=w+(E<<20&4294967295|E>>>12),E=y+(w^T&(_^w))+A[9]+568446438&4294967295,y=_+(E<<5&4294967295|E>>>27),E=T+(_^w&(y^_))+A[14]+3275163606&4294967295,T=y+(E<<9&4294967295|E>>>23),E=w+(y^_&(T^y))+A[3]+4107603335&4294967295,w=T+(E<<14&4294967295|E>>>18),E=_+(T^y&(w^T))+A[8]+1163531501&4294967295,_=w+(E<<20&4294967295|E>>>12),E=y+(w^T&(_^w))+A[13]+2850285829&4294967295,y=_+(E<<5&4294967295|E>>>27),E=T+(_^w&(y^_))+A[2]+4243563512&4294967295,T=y+(E<<9&4294967295|E>>>23),E=w+(y^_&(T^y))+A[7]+1735328473&4294967295,w=T+(E<<14&4294967295|E>>>18),E=_+(T^y&(w^T))+A[12]+2368359562&4294967295,_=w+(E<<20&4294967295|E>>>12),E=y+(_^w^T)+A[5]+4294588738&4294967295,y=_+(E<<4&4294967295|E>>>28),E=T+(y^_^w)+A[8]+2272392833&4294967295,T=y+(E<<11&4294967295|E>>>21),E=w+(T^y^_)+A[11]+1839030562&4294967295,w=T+(E<<16&4294967295|E>>>16),E=_+(w^T^y)+A[14]+4259657740&4294967295,_=w+(E<<23&4294967295|E>>>9),E=y+(_^w^T)+A[1]+2763975236&4294967295,y=_+(E<<4&4294967295|E>>>28),E=T+(y^_^w)+A[4]+1272893353&4294967295,T=y+(E<<11&4294967295|E>>>21),E=w+(T^y^_)+A[7]+4139469664&4294967295,w=T+(E<<16&4294967295|E>>>16),E=_+(w^T^y)+A[10]+3200236656&4294967295,_=w+(E<<23&4294967295|E>>>9),E=y+(_^w^T)+A[13]+681279174&4294967295,y=_+(E<<4&4294967295|E>>>28),E=T+(y^_^w)+A[0]+3936430074&4294967295,T=y+(E<<11&4294967295|E>>>21),E=w+(T^y^_)+A[3]+3572445317&4294967295,w=T+(E<<16&4294967295|E>>>16),E=_+(w^T^y)+A[6]+76029189&4294967295,_=w+(E<<23&4294967295|E>>>9),E=y+(_^w^T)+A[9]+3654602809&4294967295,y=_+(E<<4&4294967295|E>>>28),E=T+(y^_^w)+A[12]+3873151461&4294967295,T=y+(E<<11&4294967295|E>>>21),E=w+(T^y^_)+A[15]+530742520&4294967295,w=T+(E<<16&4294967295|E>>>16),E=_+(w^T^y)+A[2]+3299628645&4294967295,_=w+(E<<23&4294967295|E>>>9),E=y+(w^(_|~T))+A[0]+4096336452&4294967295,y=_+(E<<6&4294967295|E>>>26),E=T+(_^(y|~w))+A[7]+1126891415&4294967295,T=y+(E<<10&4294967295|E>>>22),E=w+(y^(T|~_))+A[14]+2878612391&4294967295,w=T+(E<<15&4294967295|E>>>17),E=_+(T^(w|~y))+A[5]+4237533241&4294967295,_=w+(E<<21&4294967295|E>>>11),E=y+(w^(_|~T))+A[12]+1700485571&4294967295,y=_+(E<<6&4294967295|E>>>26),E=T+(_^(y|~w))+A[3]+2399980690&4294967295,T=y+(E<<10&4294967295|E>>>22),E=w+(y^(T|~_))+A[10]+4293915773&4294967295,w=T+(E<<15&4294967295|E>>>17),E=_+(T^(w|~y))+A[1]+2240044497&4294967295,_=w+(E<<21&4294967295|E>>>11),E=y+(w^(_|~T))+A[8]+1873313359&4294967295,y=_+(E<<6&4294967295|E>>>26),E=T+(_^(y|~w))+A[15]+4264355552&4294967295,T=y+(E<<10&4294967295|E>>>22),E=w+(y^(T|~_))+A[6]+2734768916&4294967295,w=T+(E<<15&4294967295|E>>>17),E=_+(T^(w|~y))+A[13]+1309151649&4294967295,_=w+(E<<21&4294967295|E>>>11),E=y+(w^(_|~T))+A[4]+4149444226&4294967295,y=_+(E<<6&4294967295|E>>>26),E=T+(_^(y|~w))+A[11]+3174756917&4294967295,T=y+(E<<10&4294967295|E>>>22),E=w+(y^(T|~_))+A[2]+718787259&4294967295,w=T+(E<<15&4294967295|E>>>17),E=_+(T^(w|~y))+A[9]+3951481745&4294967295,b.g[0]=b.g[0]+y&4294967295,b.g[1]=b.g[1]+(w+(E<<21&4294967295|E>>>11))&4294967295,b.g[2]=b.g[2]+w&4294967295,b.g[3]=b.g[3]+T&4294967295}r.prototype.v=function(b,y){y===void 0&&(y=b.length);const _=y-this.blockSize,A=this.C;let w=this.h,T=0;for(;T<y;){if(w==0)for(;T<=_;)s(this,b,T),T+=this.blockSize;if(typeof b=="string"){for(;T<y;)if(A[w++]=b.charCodeAt(T++),w==this.blockSize){s(this,A),w=0;break}}else for(;T<y;)if(A[w++]=b[T++],w==this.blockSize){s(this,A),w=0;break}}this.h=w,this.o+=y},r.prototype.A=function(){var b=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);b[0]=128;for(var y=1;y<b.length-8;++y)b[y]=0;y=this.o*8;for(var _=b.length-8;_<b.length;++_)b[_]=y&255,y/=256;for(this.v(b),b=Array(16),y=0,_=0;_<4;++_)for(let A=0;A<32;A+=8)b[y++]=this.g[_]>>>A&255;return b};function i(b,y){var _=c;return Object.prototype.hasOwnProperty.call(_,b)?_[b]:_[b]=y(b)}function o(b,y){this.h=y;const _=[];let A=!0;for(let w=b.length-1;w>=0;w--){const T=b[w]|0;A&&T==y||(_[w]=T,A=!1)}this.g=_}var c={};function l(b){return-128<=b&&b<128?i(b,function(y){return new o([y|0],y<0?-1:0)}):new o([b|0],b<0?-1:0)}function h(b){if(isNaN(b)||!isFinite(b))return p;if(b<0)return O(h(-b));const y=[];let _=1;for(let A=0;b>=_;A++)y[A]=b/_|0,_*=4294967296;return new o(y,0)}function f(b,y){if(b.length==0)throw Error("number format error: empty string");if(y=y||10,y<2||36<y)throw Error("radix out of range: "+y);if(b.charAt(0)=="-")return O(f(b.substring(1),y));if(b.indexOf("-")>=0)throw Error('number format error: interior "-" character');const _=h(Math.pow(y,8));let A=p;for(let T=0;T<b.length;T+=8){var w=Math.min(8,b.length-T);const E=parseInt(b.substring(T,T+w),y);w<8?(w=h(Math.pow(y,w)),A=A.j(w).add(h(E))):(A=A.j(_),A=A.add(h(E)))}return A}var p=l(0),g=l(1),I=l(16777216);t=o.prototype,t.m=function(){if(R(this))return-O(this).m();let b=0,y=1;for(let _=0;_<this.g.length;_++){const A=this.i(_);b+=(A>=0?A:4294967296+A)*y,y*=4294967296}return b},t.toString=function(b){if(b=b||10,b<2||36<b)throw Error("radix out of range: "+b);if(P(this))return"0";if(R(this))return"-"+O(this).toString(b);const y=h(Math.pow(b,6));var _=this;let A="";for(;;){const w=j(_,y).g;_=V(_,w.j(y));let T=((_.g.length>0?_.g[0]:_.h)>>>0).toString(b);if(_=w,P(_))return T+A;for(;T.length<6;)T="0"+T;A=T+A}},t.i=function(b){return b<0?0:b<this.g.length?this.g[b]:this.h};function P(b){if(b.h!=0)return!1;for(let y=0;y<b.g.length;y++)if(b.g[y]!=0)return!1;return!0}function R(b){return b.h==-1}t.l=function(b){return b=V(this,b),R(b)?-1:P(b)?0:1};function O(b){const y=b.g.length,_=[];for(let A=0;A<y;A++)_[A]=~b.g[A];return new o(_,~b.h).add(g)}t.abs=function(){return R(this)?O(this):this},t.add=function(b){const y=Math.max(this.g.length,b.g.length),_=[];let A=0;for(let w=0;w<=y;w++){let T=A+(this.i(w)&65535)+(b.i(w)&65535),E=(T>>>16)+(this.i(w)>>>16)+(b.i(w)>>>16);A=E>>>16,T&=65535,E&=65535,_[w]=E<<16|T}return new o(_,_[_.length-1]&-2147483648?-1:0)};function V(b,y){return b.add(O(y))}t.j=function(b){if(P(this)||P(b))return p;if(R(this))return R(b)?O(this).j(O(b)):O(O(this).j(b));if(R(b))return O(this.j(O(b)));if(this.l(I)<0&&b.l(I)<0)return h(this.m()*b.m());const y=this.g.length+b.g.length,_=[];for(var A=0;A<2*y;A++)_[A]=0;for(A=0;A<this.g.length;A++)for(let w=0;w<b.g.length;w++){const T=this.i(A)>>>16,E=this.i(A)&65535,me=b.i(w)>>>16,Je=b.i(w)&65535;_[2*A+2*w]+=E*Je,q(_,2*A+2*w),_[2*A+2*w+1]+=T*Je,q(_,2*A+2*w+1),_[2*A+2*w+1]+=E*me,q(_,2*A+2*w+1),_[2*A+2*w+2]+=T*me,q(_,2*A+2*w+2)}for(b=0;b<y;b++)_[b]=_[2*b+1]<<16|_[2*b];for(b=y;b<2*y;b++)_[b]=0;return new o(_,0)};function q(b,y){for(;(b[y]&65535)!=b[y];)b[y+1]+=b[y]>>>16,b[y]&=65535,y++}function W(b,y){this.g=b,this.h=y}function j(b,y){if(P(y))throw Error("division by zero");if(P(b))return new W(p,p);if(R(b))return y=j(O(b),y),new W(O(y.g),O(y.h));if(R(y))return y=j(b,O(y)),new W(O(y.g),y.h);if(b.g.length>30){if(R(b)||R(y))throw Error("slowDivide_ only works with positive integers.");for(var _=g,A=y;A.l(b)<=0;)_=ee(_),A=ee(A);var w=ie(_,1),T=ie(A,1);for(A=ie(A,2),_=ie(_,2);!P(A);){var E=T.add(A);E.l(b)<=0&&(w=w.add(_),T=E),A=ie(A,1),_=ie(_,1)}return y=V(b,w.j(y)),new W(w,y)}for(w=p;b.l(y)>=0;){for(_=Math.max(1,Math.floor(b.m()/y.m())),A=Math.ceil(Math.log(_)/Math.LN2),A=A<=48?1:Math.pow(2,A-48),T=h(_),E=T.j(y);R(E)||E.l(b)>0;)_-=A,T=h(_),E=T.j(y);P(T)&&(T=g),w=w.add(T),b=V(b,E)}return new W(w,b)}t.B=function(b){return j(this,b).h},t.and=function(b){const y=Math.max(this.g.length,b.g.length),_=[];for(let A=0;A<y;A++)_[A]=this.i(A)&b.i(A);return new o(_,this.h&b.h)},t.or=function(b){const y=Math.max(this.g.length,b.g.length),_=[];for(let A=0;A<y;A++)_[A]=this.i(A)|b.i(A);return new o(_,this.h|b.h)},t.xor=function(b){const y=Math.max(this.g.length,b.g.length),_=[];for(let A=0;A<y;A++)_[A]=this.i(A)^b.i(A);return new o(_,this.h^b.h)};function ee(b){const y=b.g.length+1,_=[];for(let A=0;A<y;A++)_[A]=b.i(A)<<1|b.i(A-1)>>>31;return new o(_,b.h)}function ie(b,y){const _=y>>5;y%=32;const A=b.g.length-_,w=[];for(let T=0;T<A;T++)w[T]=y>0?b.i(T+_)>>>y|b.i(T+_+1)<<32-y:b.i(T+_);return new o(w,b.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,jg=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=f,hr=o}).apply(typeof ud<"u"?ud:typeof self<"u"?self:typeof window<"u"?window:{});var Ho=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Hg,Ni,qg,aa,Dl,zg,Wg,Gg;(function(){var t,e=Object.defineProperty;function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ho=="object"&&Ho];for(var u=0;u<a.length;++u){var d=a[u];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function s(a,u){if(u)e:{var d=r;a=a.split(".");for(var m=0;m<a.length-1;m++){var C=a[m];if(!(C in d))break e;d=d[C]}a=a[a.length-1],m=d[a],u=u(m),u!=m&&u!=null&&e(d,a,{configurable:!0,writable:!0,value:u})}}s("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(a){return a||function(u){var d=[],m;for(m in u)Object.prototype.hasOwnProperty.call(u,m)&&d.push([m,u[m]]);return d}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},o=this||self;function c(a){var u=typeof a;return u=="object"&&a!=null||u=="function"}function l(a,u,d){return a.call.apply(a.bind,arguments)}function h(a,u,d){return h=l,h.apply(null,arguments)}function f(a,u){var d=Array.prototype.slice.call(arguments,1);return function(){var m=d.slice();return m.push.apply(m,arguments),a.apply(this,m)}}function p(a,u){function d(){}d.prototype=u.prototype,a.Z=u.prototype,a.prototype=new d,a.prototype.constructor=a,a.Ob=function(m,C,N){for(var H=Array(arguments.length-2),le=2;le<arguments.length;le++)H[le-2]=arguments[le];return u.prototype[C].apply(m,H)}}var g=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function I(a){const u=a.length;if(u>0){const d=Array(u);for(let m=0;m<u;m++)d[m]=a[m];return d}return[]}function P(a,u){for(let m=1;m<arguments.length;m++){const C=arguments[m];var d=typeof C;if(d=d!="object"?d:C?Array.isArray(C)?"array":d:"null",d=="array"||d=="object"&&typeof C.length=="number"){d=a.length||0;const N=C.length||0;a.length=d+N;for(let H=0;H<N;H++)a[d+H]=C[H]}else a.push(C)}}class R{constructor(u,d){this.i=u,this.j=d,this.h=0,this.g=null}get(){let u;return this.h>0?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function O(a){o.setTimeout(()=>{throw a},0)}function V(){var a=b;let u=null;return a.g&&(u=a.g,a.g=a.g.next,a.g||(a.h=null),u.next=null),u}class q{constructor(){this.h=this.g=null}add(u,d){const m=W.get();m.set(u,d),this.h?this.h.next=m:this.g=m,this.h=m}}var W=new R(()=>new j,a=>a.reset());class j{constructor(){this.next=this.g=this.h=null}set(u,d){this.h=u,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let ee,ie=!1,b=new q,y=()=>{const a=Promise.resolve(void 0);ee=()=>{a.then(_)}};function _(){for(var a;a=V();){try{a.h.call(a.g)}catch(d){O(d)}var u=W;u.j(a),u.h<100&&(u.h++,a.next=u.g,u.g=a)}ie=!1}function A(){this.u=this.u,this.C=this.C}A.prototype.u=!1,A.prototype.dispose=function(){this.u||(this.u=!0,this.N())},A.prototype[Symbol.dispose]=function(){this.dispose()},A.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function w(a,u){this.type=a,this.g=this.target=u,this.defaultPrevented=!1}w.prototype.h=function(){this.defaultPrevented=!0};var T=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,u=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};o.addEventListener("test",d,u),o.removeEventListener("test",d,u)}catch{}return a}();function E(a){return/^[\s\xa0]*$/.test(a)}function me(a,u){w.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,u)}p(me,w),me.prototype.init=function(a,u){const d=this.type=a.type,m=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=u,u=a.relatedTarget,u||(d=="mouseover"?u=a.fromElement:d=="mouseout"&&(u=a.toElement)),this.relatedTarget=u,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&me.Z.h.call(this)},me.prototype.h=function(){me.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Je="closure_listenable_"+(Math.random()*1e6|0),$e=0;function Pe(a,u,d,m,C){this.listener=a,this.proxy=null,this.src=u,this.type=d,this.capture=!!m,this.ha=C,this.key=++$e,this.da=this.fa=!1}function ye(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Vt(a,u,d){for(const m in a)u.call(d,a[m],m,a)}function Es(a,u){for(const d in a)u.call(void 0,a[d],d,a)}function nn(a){const u={};for(const d in a)u[d]=a[d];return u}const Rt="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function oi(a,u){let d,m;for(let C=1;C<arguments.length;C++){m=arguments[C];for(d in m)a[d]=m[d];for(let N=0;N<Rt.length;N++)d=Rt[N],Object.prototype.hasOwnProperty.call(m,d)&&(a[d]=m[d])}}function Ts(a){this.src=a,this.g={},this.h=0}Ts.prototype.add=function(a,u,d,m,C){const N=a.toString();a=this.g[N],a||(a=this.g[N]=[],this.h++);const H=An(a,u,m,C);return H>-1?(u=a[H],d||(u.fa=!1)):(u=new Pe(u,this.src,N,!!m,C),u.fa=d,a.push(u)),u};function ai(a,u){const d=u.type;if(d in a.g){var m=a.g[d],C=Array.prototype.indexOf.call(m,u,void 0),N;(N=C>=0)&&Array.prototype.splice.call(m,C,1),N&&(ye(u),a.g[d].length==0&&(delete a.g[d],a.h--))}}function An(a,u,d,m){for(let C=0;C<a.length;++C){const N=a[C];if(!N.da&&N.listener==u&&N.capture==!!d&&N.ha==m)return C}return-1}var Kn="closure_lm_"+(Math.random()*1e6|0),Or={};function ci(a,u,d,m,C){if(Array.isArray(u)){for(let N=0;N<u.length;N++)ci(a,u[N],d,m,C);return null}return d=z(d),a&&a[Je]?a.J(u,d,c(m)?!!m.capture:!1,C):Nr(a,u,d,!1,m,C)}function Nr(a,u,d,m,C,N){if(!u)throw Error("Invalid event type");const H=c(C)?!!C.capture:!!C;let le=L(a);if(le||(a[Kn]=le=new Ts(a)),d=le.add(u,d,m,H,N),d.proxy)return d;if(m=qh(),d.proxy=m,m.src=a,m.listener=d,a.addEventListener)T||(C=H),C===void 0&&(C=!1),a.addEventListener(u.toString(),m,C);else if(a.attachEvent)a.attachEvent(D(u.toString()),m);else if(a.addListener&&a.removeListener)a.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return d}function qh(){function a(d){return u.call(a.src,a.listener,d)}const u=$;return a}function v(a,u,d,m,C){if(Array.isArray(u))for(var N=0;N<u.length;N++)v(a,u[N],d,m,C);else m=c(m)?!!m.capture:!!m,d=z(d),a&&a[Je]?(a=a.i,N=String(u).toString(),N in a.g&&(u=a.g[N],d=An(u,d,m,C),d>-1&&(ye(u[d]),Array.prototype.splice.call(u,d,1),u.length==0&&(delete a.g[N],a.h--)))):a&&(a=L(a))&&(u=a.g[u.toString()],a=-1,u&&(a=An(u,d,m,C)),(d=a>-1?u[a]:null)&&S(d))}function S(a){if(typeof a!="number"&&a&&!a.da){var u=a.src;if(u&&u[Je])ai(u.i,a);else{var d=a.type,m=a.proxy;u.removeEventListener?u.removeEventListener(d,m,a.capture):u.detachEvent?u.detachEvent(D(d),m):u.addListener&&u.removeListener&&u.removeListener(m),(d=L(u))?(ai(d,a),d.h==0&&(d.src=null,u[Kn]=null)):ye(a)}}}function D(a){return a in Or?Or[a]:Or[a]="on"+a}function $(a,u){if(a.da)a=!0;else{u=new me(u,this);const d=a.listener,m=a.ha||a.src;a.fa&&S(a),a=d.call(m,u)}return a}function L(a){return a=a[Kn],a instanceof Ts?a:null}var M="__closure_events_fn_"+(Math.random()*1e9>>>0);function z(a){return typeof a=="function"?a:(a[M]||(a[M]=function(u){return a.handleEvent(u)}),a[M])}function B(){A.call(this),this.i=new Ts(this),this.M=this,this.G=null}p(B,A),B.prototype[Je]=!0,B.prototype.removeEventListener=function(a,u,d,m){v(this,a,u,d,m)};function F(a,u){var d,m=a.G;if(m)for(d=[];m;m=m.G)d.push(m);if(a=a.M,m=u.type||u,typeof u=="string")u=new w(u,a);else if(u instanceof w)u.target=u.target||a;else{var C=u;u=new w(m,a),oi(u,C)}C=!0;let N,H;if(d)for(H=d.length-1;H>=0;H--)N=u.g=d[H],C=U(N,m,!0,u)&&C;if(N=u.g=a,C=U(N,m,!0,u)&&C,C=U(N,m,!1,u)&&C,d)for(H=0;H<d.length;H++)N=u.g=d[H],C=U(N,m,!1,u)&&C}B.prototype.N=function(){if(B.Z.N.call(this),this.i){var a=this.i;for(const u in a.g){const d=a.g[u];for(let m=0;m<d.length;m++)ye(d[m]);delete a.g[u],a.h--}}this.G=null},B.prototype.J=function(a,u,d,m){return this.i.add(String(a),u,!1,d,m)},B.prototype.K=function(a,u,d,m){return this.i.add(String(a),u,!0,d,m)};function U(a,u,d,m){if(u=a.i.g[String(u)],!u)return!0;u=u.concat();let C=!0;for(let N=0;N<u.length;++N){const H=u[N];if(H&&!H.da&&H.capture==d){const le=H.listener,ze=H.ha||H.src;H.fa&&ai(a.i,H),C=le.call(ze,m)!==!1&&C}}return C&&!m.defaultPrevented}function X(a,u){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=h(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(u)>2147483647?-1:o.setTimeout(a,u||0)}function G(a){a.g=X(()=>{a.g=null,a.i&&(a.i=!1,G(a))},a.l);const u=a.h;a.h=null,a.m.apply(null,u)}class J extends A{constructor(u,d){super(),this.m=u,this.l=d,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:G(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Z(a){A.call(this),this.h=a,this.g={}}p(Z,A);var ue=[];function Ie(a){Vt(a.g,function(u,d){this.g.hasOwnProperty(d)&&S(u)},a),a.g={}}Z.prototype.N=function(){Z.Z.N.call(this),Ie(this)},Z.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ge=o.JSON.stringify,at=o.JSON.parse,ct=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function Ct(){}function Pt(){}var jt={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function vs(){w.call(this,"d")}p(vs,w);function Xe(){w.call(this,"c")}p(Xe,w);var Ge={},li=null;function Dr(){return li=li||new B}Ge.Ia="serverreachability";function zh(a){w.call(this,Ge.Ia,a)}p(zh,w);function ui(a){const u=Dr();F(u,new zh(u))}Ge.STAT_EVENT="statevent";function Wh(a,u){w.call(this,Ge.STAT_EVENT,a),this.stat=u}p(Wh,w);function yt(a){const u=Dr();F(u,new Wh(u,a))}Ge.Ja="timingevent";function Gh(a,u){w.call(this,Ge.Ja,a),this.size=u}p(Gh,w);function hi(a,u){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},u)}function fi(){this.g=!0}fi.prototype.ua=function(){this.g=!1};function CT(a,u,d,m,C,N){a.info(function(){if(a.g)if(N){var H="",le=N.split("&");for(let we=0;we<le.length;we++){var ze=le[we].split("=");if(ze.length>1){const Ke=ze[0];ze=ze[1];const sn=Ke.split("_");H=sn.length>=2&&sn[1]=="type"?H+(Ke+"="+ze+"&"):H+(Ke+"=redacted&")}}}else H=null;else H=N;return"XMLHTTP REQ ("+m+") [attempt "+C+"]: "+u+`
`+d+`
`+H})}function PT(a,u,d,m,C,N,H){a.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+C+"]: "+u+`
`+d+`
`+N+" "+H})}function Is(a,u,d,m){a.info(function(){return"XMLHTTP TEXT ("+u+"): "+NT(a,d)+(m?" "+m:"")})}function OT(a,u){a.info(function(){return"TIMEOUT: "+u})}fi.prototype.info=function(){};function NT(a,u){if(!a.g)return u;if(!u)return null;try{const N=JSON.parse(u);if(N){for(a=0;a<N.length;a++)if(Array.isArray(N[a])){var d=N[a];if(!(d.length<2)){var m=d[1];if(Array.isArray(m)&&!(m.length<1)){var C=m[0];if(C!="noop"&&C!="stop"&&C!="close")for(let H=1;H<m.length;H++)m[H]=""}}}}return ge(N)}catch{return u}}var Do={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Kh={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Qh;function kc(){}p(kc,Ct),kc.prototype.g=function(){return new XMLHttpRequest},Qh=new kc;function di(a){return encodeURIComponent(String(a))}function DT(a){var u=1;a=a.split(":");const d=[];for(;u>0&&a.length;)d.push(a.shift()),u--;return a.length&&d.push(a.join(":")),d}function Qn(a,u,d,m){this.j=a,this.i=u,this.l=d,this.S=m||1,this.V=new Z(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Yh}function Yh(){this.i=null,this.g="",this.h=!1}var Jh={},Vc={};function xc(a,u,d){a.M=1,a.A=Vo(rn(u)),a.u=d,a.R=!0,Xh(a,null)}function Xh(a,u){a.F=Date.now(),ko(a),a.B=rn(a.A);var d=a.B,m=a.S;Array.isArray(m)||(m=[String(m)]),ff(d.i,"t",m),a.C=0,d=a.j.L,a.h=new Yh,a.g=Of(a.j,d?u:null,!a.u),a.P>0&&(a.O=new J(h(a.Y,a,a.g),a.P)),u=a.V,d=a.g,m=a.ba;var C="readystatechange";Array.isArray(C)||(C&&(ue[0]=C.toString()),C=ue);for(let N=0;N<C.length;N++){const H=ci(d,C[N],m||u.handleEvent,!1,u.h||u);if(!H)break;u.g[H.key]=H}u=a.J?nn(a.J):{},a.u?(a.v||(a.v="POST"),u["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,u)):(a.v="GET",a.g.ea(a.B,a.v,null,u)),ui(),CT(a.i,a.v,a.B,a.l,a.S,a.u)}Qn.prototype.ba=function(a){a=a.target;const u=this.O;u&&Xn(a)==3?u.j():this.Y(a)},Qn.prototype.Y=function(a){try{if(a==this.g)e:{const le=Xn(this.g),ze=this.g.ya(),we=this.g.ca();if(!(le<3)&&(le!=3||this.g&&(this.h.h||this.g.la()||Ef(this.g)))){this.K||le!=4||ze==7||(ze==8||we<=0?ui(3):ui(2)),Lc(this);var u=this.g.ca();this.X=u;var d=kT(this);if(this.o=u==200,PT(this.i,this.v,this.B,this.l,this.S,le,u),this.o){if(this.U&&!this.L){t:{if(this.g){var m,C=this.g;if((m=C.g?C.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!E(m)){var N=m;break t}}N=null}if(a=N)Is(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Mc(this,a);else{this.o=!1,this.m=3,yt(12),kr(this),pi(this);break e}}if(this.R){a=!0;let Ke;for(;!this.K&&this.C<d.length;)if(Ke=VT(this,d),Ke==Vc){le==4&&(this.m=4,yt(14),a=!1),Is(this.i,this.l,null,"[Incomplete Response]");break}else if(Ke==Jh){this.m=4,yt(15),Is(this.i,this.l,d,"[Invalid Chunk]"),a=!1;break}else Is(this.i,this.l,Ke,null),Mc(this,Ke);if(Zh(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),le!=4||d.length!=0||this.h.h||(this.m=1,yt(16),a=!1),this.o=this.o&&a,!a)Is(this.i,this.l,d,"[Invalid Chunked Response]"),kr(this),pi(this);else if(d.length>0&&!this.W){this.W=!0;var H=this.j;H.g==this&&H.aa&&!H.P&&(H.j.info("Great, no buffering proxy detected. Bytes received: "+d.length),zc(H),H.P=!0,yt(11))}}else Is(this.i,this.l,d,null),Mc(this,d);le==4&&kr(this),this.o&&!this.K&&(le==4?Sf(this.j,this):(this.o=!1,ko(this)))}else KT(this.g),u==400&&d.indexOf("Unknown SID")>0?(this.m=3,yt(12)):(this.m=0,yt(13)),kr(this),pi(this)}}}catch{}finally{}};function kT(a){if(!Zh(a))return a.g.la();const u=Ef(a.g);if(u==="")return"";let d="";const m=u.length,C=Xn(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return kr(a),pi(a),"";a.h.i=new o.TextDecoder}for(let N=0;N<m;N++)a.h.h=!0,d+=a.h.i.decode(u[N],{stream:!(C&&N==m-1)});return u.length=0,a.h.g+=d,a.C=0,a.h.g}function Zh(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function VT(a,u){var d=a.C,m=u.indexOf(`
`,d);return m==-1?Vc:(d=Number(u.substring(d,m)),isNaN(d)?Jh:(m+=1,m+d>u.length?Vc:(u=u.slice(m,m+d),a.C=m+d,u)))}Qn.prototype.cancel=function(){this.K=!0,kr(this)};function ko(a){a.T=Date.now()+a.H,ef(a,a.H)}function ef(a,u){if(a.D!=null)throw Error("WatchDog timer not null");a.D=hi(h(a.aa,a),u)}function Lc(a){a.D&&(o.clearTimeout(a.D),a.D=null)}Qn.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(OT(this.i,this.B),this.M!=2&&(ui(),yt(17)),kr(this),this.m=2,pi(this)):ef(this,this.T-a)};function pi(a){a.j.I==0||a.K||Sf(a.j,a)}function kr(a){Lc(a);var u=a.O;u&&typeof u.dispose=="function"&&u.dispose(),a.O=null,Ie(a.V),a.g&&(u=a.g,a.g=null,u.abort(),u.dispose())}function Mc(a,u){try{var d=a.j;if(d.I!=0&&(d.g==a||Uc(d.h,a))){if(!a.L&&Uc(d.h,a)&&d.I==3){try{var m=d.Ba.g.parse(u)}catch{m=null}if(Array.isArray(m)&&m.length==3){var C=m;if(C[0]==0){e:if(!d.v){if(d.g)if(d.g.F+3e3<a.F)Fo(d),Mo(d);else break e;qc(d),yt(18)}}else d.xa=C[1],0<d.xa-d.K&&C[2]<37500&&d.F&&d.A==0&&!d.C&&(d.C=hi(h(d.Va,d),6e3));rf(d.h)<=1&&d.ta&&(d.ta=void 0)}else xr(d,11)}else if((a.L||d.g==a)&&Fo(d),!E(u))for(C=d.Ba.g.parse(u),u=0;u<C.length;u++){let we=C[u];const Ke=we[0];if(!(Ke<=d.K))if(d.K=Ke,we=we[1],d.I==2)if(we[0]=="c"){d.M=we[1],d.ba=we[2];const sn=we[3];sn!=null&&(d.ka=sn,d.j.info("VER="+d.ka));const Lr=we[4];Lr!=null&&(d.za=Lr,d.j.info("SVER="+d.za));const Zn=we[5];Zn!=null&&typeof Zn=="number"&&Zn>0&&(m=1.5*Zn,d.O=m,d.j.info("backChannelRequestTimeoutMs_="+m)),m=d;const er=a.g;if(er){const $o=er.g?er.g.getResponseHeader("X-Client-Wire-Protocol"):null;if($o){var N=m.h;N.g||$o.indexOf("spdy")==-1&&$o.indexOf("quic")==-1&&$o.indexOf("h2")==-1||(N.j=N.l,N.g=new Set,N.h&&(Fc(N,N.h),N.h=null))}if(m.G){const Wc=er.g?er.g.getResponseHeader("X-HTTP-Session-Id"):null;Wc&&(m.wa=Wc,Oe(m.J,m.G,Wc))}}d.I=3,d.l&&d.l.ra(),d.aa&&(d.T=Date.now()-a.F,d.j.info("Handshake RTT: "+d.T+"ms")),m=d;var H=a;if(m.na=Pf(m,m.L?m.ba:null,m.W),H.L){sf(m.h,H);var le=H,ze=m.O;ze&&(le.H=ze),le.D&&(Lc(le),ko(le)),m.g=H}else Af(m);d.i.length>0&&Uo(d)}else we[0]!="stop"&&we[0]!="close"||xr(d,7);else d.I==3&&(we[0]=="stop"||we[0]=="close"?we[0]=="stop"?xr(d,7):Hc(d):we[0]!="noop"&&d.l&&d.l.qa(we),d.A=0)}}ui(4)}catch{}}var xT=class{constructor(a,u){this.g=a,this.map=u}};function tf(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function nf(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function rf(a){return a.h?1:a.g?a.g.size:0}function Uc(a,u){return a.h?a.h==u:a.g?a.g.has(u):!1}function Fc(a,u){a.g?a.g.add(u):a.h=u}function sf(a,u){a.h&&a.h==u?a.h=null:a.g&&a.g.has(u)&&a.g.delete(u)}tf.prototype.cancel=function(){if(this.i=of(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function of(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let u=a.i;for(const d of a.g.values())u=u.concat(d.G);return u}return I(a.i)}var af=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function LT(a,u){if(a){a=a.split("&");for(let d=0;d<a.length;d++){const m=a[d].indexOf("=");let C,N=null;m>=0?(C=a[d].substring(0,m),N=a[d].substring(m+1)):C=a[d],u(C,N?decodeURIComponent(N.replace(/\+/g," ")):"")}}}function Yn(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let u;a instanceof Yn?(this.l=a.l,mi(this,a.j),this.o=a.o,this.g=a.g,gi(this,a.u),this.h=a.h,Bc(this,df(a.i)),this.m=a.m):a&&(u=String(a).match(af))?(this.l=!1,mi(this,u[1]||"",!0),this.o=_i(u[2]||""),this.g=_i(u[3]||"",!0),gi(this,u[4]),this.h=_i(u[5]||"",!0),Bc(this,u[6]||"",!0),this.m=_i(u[7]||"")):(this.l=!1,this.i=new Ei(null,this.l))}Yn.prototype.toString=function(){const a=[];var u=this.j;u&&a.push(yi(u,cf,!0),":");var d=this.g;return(d||u=="file")&&(a.push("//"),(u=this.o)&&a.push(yi(u,cf,!0),"@"),a.push(di(d).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.u,d!=null&&a.push(":",String(d))),(d=this.h)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(yi(d,d.charAt(0)=="/"?FT:UT,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",yi(d,$T)),a.join("")},Yn.prototype.resolve=function(a){const u=rn(this);let d=!!a.j;d?mi(u,a.j):d=!!a.o,d?u.o=a.o:d=!!a.g,d?u.g=a.g:d=a.u!=null;var m=a.h;if(d)gi(u,a.u);else if(d=!!a.h){if(m.charAt(0)!="/")if(this.g&&!this.h)m="/"+m;else{var C=u.h.lastIndexOf("/");C!=-1&&(m=u.h.slice(0,C+1)+m)}if(C=m,C==".."||C==".")m="";else if(C.indexOf("./")!=-1||C.indexOf("/.")!=-1){m=C.lastIndexOf("/",0)==0,C=C.split("/");const N=[];for(let H=0;H<C.length;){const le=C[H++];le=="."?m&&H==C.length&&N.push(""):le==".."?((N.length>1||N.length==1&&N[0]!="")&&N.pop(),m&&H==C.length&&N.push("")):(N.push(le),m=!0)}m=N.join("/")}else m=C}return d?u.h=m:d=a.i.toString()!=="",d?Bc(u,df(a.i)):d=!!a.m,d&&(u.m=a.m),u};function rn(a){return new Yn(a)}function mi(a,u,d){a.j=d?_i(u,!0):u,a.j&&(a.j=a.j.replace(/:$/,""))}function gi(a,u){if(u){if(u=Number(u),isNaN(u)||u<0)throw Error("Bad port number "+u);a.u=u}else a.u=null}function Bc(a,u,d){u instanceof Ei?(a.i=u,jT(a.i,a.l)):(d||(u=yi(u,BT)),a.i=new Ei(u,a.l))}function Oe(a,u,d){a.i.set(u,d)}function Vo(a){return Oe(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function _i(a,u){return a?u?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function yi(a,u,d){return typeof a=="string"?(a=encodeURI(a).replace(u,MT),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function MT(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var cf=/[#\/\?@]/g,UT=/[#\?:]/g,FT=/[#\?]/g,BT=/[#\?@]/g,$T=/#/g;function Ei(a,u){this.h=this.g=null,this.i=a||null,this.j=!!u}function Vr(a){a.g||(a.g=new Map,a.h=0,a.i&&LT(a.i,function(u,d){a.add(decodeURIComponent(u.replace(/\+/g," ")),d)}))}t=Ei.prototype,t.add=function(a,u){Vr(this),this.i=null,a=ws(this,a);let d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(u),this.h+=1,this};function lf(a,u){Vr(a),u=ws(a,u),a.g.has(u)&&(a.i=null,a.h-=a.g.get(u).length,a.g.delete(u))}function uf(a,u){return Vr(a),u=ws(a,u),a.g.has(u)}t.forEach=function(a,u){Vr(this),this.g.forEach(function(d,m){d.forEach(function(C){a.call(u,C,m,this)},this)},this)};function hf(a,u){Vr(a);let d=[];if(typeof u=="string")uf(a,u)&&(d=d.concat(a.g.get(ws(a,u))));else for(a=Array.from(a.g.values()),u=0;u<a.length;u++)d=d.concat(a[u]);return d}t.set=function(a,u){return Vr(this),this.i=null,a=ws(this,a),uf(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[u]),this.h+=1,this},t.get=function(a,u){return a?(a=hf(this,a),a.length>0?String(a[0]):u):u};function ff(a,u,d){lf(a,u),d.length>0&&(a.i=null,a.g.set(ws(a,u),I(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],u=Array.from(this.g.keys());for(let m=0;m<u.length;m++){var d=u[m];const C=di(d);d=hf(this,d);for(let N=0;N<d.length;N++){let H=C;d[N]!==""&&(H+="="+di(d[N])),a.push(H)}}return this.i=a.join("&")};function df(a){const u=new Ei;return u.i=a.i,a.g&&(u.g=new Map(a.g),u.h=a.h),u}function ws(a,u){return u=String(u),a.j&&(u=u.toLowerCase()),u}function jT(a,u){u&&!a.j&&(Vr(a),a.i=null,a.g.forEach(function(d,m){const C=m.toLowerCase();m!=C&&(lf(this,m),ff(this,C,d))},a)),a.j=u}function HT(a,u){const d=new fi;if(o.Image){const m=new Image;m.onload=f(Jn,d,"TestLoadImage: loaded",!0,u,m),m.onerror=f(Jn,d,"TestLoadImage: error",!1,u,m),m.onabort=f(Jn,d,"TestLoadImage: abort",!1,u,m),m.ontimeout=f(Jn,d,"TestLoadImage: timeout",!1,u,m),o.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=a}else u(!1)}function qT(a,u){const d=new fi,m=new AbortController,C=setTimeout(()=>{m.abort(),Jn(d,"TestPingServer: timeout",!1,u)},1e4);fetch(a,{signal:m.signal}).then(N=>{clearTimeout(C),N.ok?Jn(d,"TestPingServer: ok",!0,u):Jn(d,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(C),Jn(d,"TestPingServer: error",!1,u)})}function Jn(a,u,d,m,C){try{C&&(C.onload=null,C.onerror=null,C.onabort=null,C.ontimeout=null),m(d)}catch{}}function zT(){this.g=new ct}function $c(a){this.i=a.Sb||null,this.h=a.ab||!1}p($c,Ct),$c.prototype.g=function(){return new xo(this.i,this.h)};function xo(a,u){B.call(this),this.H=a,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}p(xo,B),t=xo.prototype,t.open=function(a,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=u,this.readyState=1,vi(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const u={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(u.body=a),(this.H||o).fetch(new Request(this.D,u)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Ti(this)),this.readyState=0},t.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,vi(this)),this.g&&(this.readyState=3,vi(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;pf(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function pf(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}t.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var u=a.value?a.value:new Uint8Array(0);(u=this.B.decode(u,{stream:!a.done}))&&(this.response=this.responseText+=u)}a.done?Ti(this):vi(this),this.readyState==3&&pf(this)}},t.Oa=function(a){this.g&&(this.response=this.responseText=a,Ti(this))},t.Na=function(a){this.g&&(this.response=a,Ti(this))},t.ga=function(){this.g&&Ti(this)};function Ti(a){a.readyState=4,a.l=null,a.j=null,a.B=null,vi(a)}t.setRequestHeader=function(a,u){this.A.append(a,u)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],u=this.h.entries();for(var d=u.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=u.next();return a.join(`\r
`)};function vi(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(xo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function mf(a){let u="";return Vt(a,function(d,m){u+=m,u+=":",u+=d,u+=`\r
`}),u}function jc(a,u,d){e:{for(m in d){var m=!1;break e}m=!0}m||(d=mf(d),typeof a=="string"?d!=null&&di(d):Oe(a,u,d))}function xe(a){B.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}p(xe,B);var WT=/^https?$/i,GT=["POST","PUT"];t=xe.prototype,t.Fa=function(a){this.H=a},t.ea=function(a,u,d,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);u=u?u.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Qh.g(),this.g.onreadystatechange=g(h(this.Ca,this));try{this.B=!0,this.g.open(u,String(a),!0),this.B=!1}catch(N){gf(this,N);return}if(a=d||"",d=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var C in m)d.set(C,m[C]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const N of m.keys())d.set(N,m.get(N));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(d.keys()).find(N=>N.toLowerCase()=="content-type"),C=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(GT,u,void 0)>=0)||m||C||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[N,H]of d)this.g.setRequestHeader(N,H);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(N){gf(this,N)}};function gf(a,u){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=u,a.o=5,_f(a),Lo(a)}function _f(a){a.A||(a.A=!0,F(a,"complete"),F(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,F(this,"complete"),F(this,"abort"),Lo(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Lo(this,!0)),xe.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?yf(this):this.Xa())},t.Xa=function(){yf(this)};function yf(a){if(a.h&&typeof i<"u"){if(a.v&&Xn(a)==4)setTimeout(a.Ca.bind(a),0);else if(F(a,"readystatechange"),Xn(a)==4){a.h=!1;try{const N=a.ca();e:switch(N){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var d;if(!(d=u)){var m;if(m=N===0){let H=String(a.D).match(af)[1]||null;!H&&o.self&&o.self.location&&(H=o.self.location.protocol.slice(0,-1)),m=!WT.test(H?H.toLowerCase():"")}d=m}if(d)F(a,"complete"),F(a,"success");else{a.o=6;try{var C=Xn(a)>2?a.g.statusText:""}catch{C=""}a.l=C+" ["+a.ca()+"]",_f(a)}}finally{Lo(a)}}}}function Lo(a,u){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const d=a.g;a.g=null,u||F(a,"ready");try{d.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function Xn(a){return a.g?a.g.readyState:0}t.ca=function(){try{return Xn(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(a){if(this.g){var u=this.g.responseText;return a&&u.indexOf(a)==0&&(u=u.substring(a.length)),at(u)}};function Ef(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function KT(a){const u={};a=(a.g&&Xn(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<a.length;m++){if(E(a[m]))continue;var d=DT(a[m]);const C=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const N=u[C]||[];u[C]=N,N.push(d)}Es(u,function(m){return m.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ii(a,u,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||u}function Tf(a){this.za=0,this.i=[],this.j=new fi,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Ii("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Ii("baseRetryDelayMs",5e3,a),this.Za=Ii("retryDelaySeedMs",1e4,a),this.Ta=Ii("forwardChannelMaxRetries",2,a),this.va=Ii("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new tf(a&&a.concurrentRequestLimit),this.Ba=new zT,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=Tf.prototype,t.ka=8,t.I=1,t.connect=function(a,u,d,m){yt(0),this.W=a,this.H=u||{},d&&m!==void 0&&(this.H.OSID=d,this.H.OAID=m),this.F=this.X,this.J=Pf(this,null,this.W),Uo(this)};function Hc(a){if(vf(a),a.I==3){var u=a.V++,d=rn(a.J);if(Oe(d,"SID",a.M),Oe(d,"RID",u),Oe(d,"TYPE","terminate"),wi(a,d),u=new Qn(a,a.j,u),u.M=2,u.A=Vo(rn(d)),d=!1,o.navigator&&o.navigator.sendBeacon)try{d=o.navigator.sendBeacon(u.A.toString(),"")}catch{}!d&&o.Image&&(new Image().src=u.A,d=!0),d||(u.g=Of(u.j,null),u.g.ea(u.A)),u.F=Date.now(),ko(u)}Cf(a)}function Mo(a){a.g&&(zc(a),a.g.cancel(),a.g=null)}function vf(a){Mo(a),a.v&&(o.clearTimeout(a.v),a.v=null),Fo(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function Uo(a){if(!nf(a.h)&&!a.m){a.m=!0;var u=a.Ea;ee||y(),ie||(ee(),ie=!0),b.add(u,a),a.D=0}}function QT(a,u){return rf(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=u.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=hi(h(a.Ea,a,u),Rf(a,a.D)),a.D++,!0)}t.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const C=new Qn(this,this.j,a);let N=this.o;if(this.U&&(N?(N=nn(N),oi(N,this.U)):N=this.U),this.u!==null||this.R||(C.J=N,N=null),this.S)e:{for(var u=0,d=0;d<this.i.length;d++){t:{var m=this.i[d];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(u+=m,u>4096){u=d;break e}if(u===4096||d===this.i.length-1){u=d+1;break e}}u=1e3}else u=1e3;u=wf(this,C,u),d=rn(this.J),Oe(d,"RID",a),Oe(d,"CVER",22),this.G&&Oe(d,"X-HTTP-Session-Id",this.G),wi(this,d),N&&(this.R?u="headers="+di(mf(N))+"&"+u:this.u&&jc(d,this.u,N)),Fc(this.h,C),this.Ra&&Oe(d,"TYPE","init"),this.S?(Oe(d,"$req",u),Oe(d,"SID","null"),C.U=!0,xc(C,d,null)):xc(C,d,u),this.I=2}}else this.I==3&&(a?If(this,a):this.i.length==0||nf(this.h)||If(this))};function If(a,u){var d;u?d=u.l:d=a.V++;const m=rn(a.J);Oe(m,"SID",a.M),Oe(m,"RID",d),Oe(m,"AID",a.K),wi(a,m),a.u&&a.o&&jc(m,a.u,a.o),d=new Qn(a,a.j,d,a.D+1),a.u===null&&(d.J=a.o),u&&(a.i=u.G.concat(a.i)),u=wf(a,d,1e3),d.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),Fc(a.h,d),xc(d,m,u)}function wi(a,u){a.H&&Vt(a.H,function(d,m){Oe(u,m,d)}),a.l&&Vt({},function(d,m){Oe(u,m,d)})}function wf(a,u,d){d=Math.min(a.i.length,d);const m=a.l?h(a.l.Ka,a.l,a):null;e:{var C=a.i;let le=-1;for(;;){const ze=["count="+d];le==-1?d>0?(le=C[0].g,ze.push("ofs="+le)):le=0:ze.push("ofs="+le);let we=!0;for(let Ke=0;Ke<d;Ke++){var N=C[Ke].g;const sn=C[Ke].map;if(N-=le,N<0)le=Math.max(0,C[Ke].g-100),we=!1;else try{N="req"+N+"_"||"";try{var H=sn instanceof Map?sn:Object.entries(sn);for(const[Lr,Zn]of H){let er=Zn;c(Zn)&&(er=ge(Zn)),ze.push(N+Lr+"="+encodeURIComponent(er))}}catch(Lr){throw ze.push(N+"type="+encodeURIComponent("_badmap")),Lr}}catch{m&&m(sn)}}if(we){H=ze.join("&");break e}}H=void 0}return a=a.i.splice(0,d),u.G=a,H}function Af(a){if(!a.g&&!a.v){a.Y=1;var u=a.Da;ee||y(),ie||(ee(),ie=!0),b.add(u,a),a.A=0}}function qc(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=hi(h(a.Da,a),Rf(a,a.A)),a.A++,!0)}t.Da=function(){if(this.v=null,bf(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=hi(h(this.Wa,this),a)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,yt(10),Mo(this),bf(this))};function zc(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function bf(a){a.g=new Qn(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var u=rn(a.na);Oe(u,"RID","rpc"),Oe(u,"SID",a.M),Oe(u,"AID",a.K),Oe(u,"CI",a.F?"0":"1"),!a.F&&a.ia&&Oe(u,"TO",a.ia),Oe(u,"TYPE","xmlhttp"),wi(a,u),a.u&&a.o&&jc(u,a.u,a.o),a.O&&(a.g.H=a.O);var d=a.g;a=a.ba,d.M=1,d.A=Vo(rn(u)),d.u=null,d.R=!0,Xh(d,a)}t.Va=function(){this.C!=null&&(this.C=null,Mo(this),qc(this),yt(19))};function Fo(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function Sf(a,u){var d=null;if(a.g==u){Fo(a),zc(a),a.g=null;var m=2}else if(Uc(a.h,u))d=u.G,sf(a.h,u),m=1;else return;if(a.I!=0){if(u.o)if(m==1){d=u.u?u.u.length:0,u=Date.now()-u.F;var C=a.D;m=Dr(),F(m,new Gh(m,d)),Uo(a)}else Af(a);else if(C=u.m,C==3||C==0&&u.X>0||!(m==1&&QT(a,u)||m==2&&qc(a)))switch(d&&d.length>0&&(u=a.h,u.i=u.i.concat(d)),C){case 1:xr(a,5);break;case 4:xr(a,10);break;case 3:xr(a,6);break;default:xr(a,2)}}}function Rf(a,u){let d=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(d*=2),d*u}function xr(a,u){if(a.j.info("Error code "+u),u==2){var d=h(a.bb,a),m=a.Ua;const C=!m;m=new Yn(m||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||mi(m,"https"),Vo(m),C?HT(m.toString(),d):qT(m.toString(),d)}else yt(2);a.I=0,a.l&&a.l.pa(u),Cf(a),vf(a)}t.bb=function(a){a?(this.j.info("Successfully pinged google.com"),yt(2)):(this.j.info("Failed to ping google.com"),yt(1))};function Cf(a){if(a.I=0,a.ja=[],a.l){const u=of(a.h);(u.length!=0||a.i.length!=0)&&(P(a.ja,u),P(a.ja,a.i),a.h.i.length=0,I(a.i),a.i.length=0),a.l.oa()}}function Pf(a,u,d){var m=d instanceof Yn?rn(d):new Yn(d);if(m.g!="")u&&(m.g=u+"."+m.g),gi(m,m.u);else{var C=o.location;m=C.protocol,u=u?u+"."+C.hostname:C.hostname,C=+C.port;const N=new Yn(null);m&&mi(N,m),u&&(N.g=u),C&&gi(N,C),d&&(N.h=d),m=N}return d=a.G,u=a.wa,d&&u&&Oe(m,d,u),Oe(m,"VER",a.ka),wi(a,m),m}function Of(a,u,d){if(u&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return u=a.Aa&&!a.ma?new xe(new $c({ab:d})):new xe(a.ma),u.Fa(a.L),u}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Nf(){}t=Nf.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function Bo(){}Bo.prototype.g=function(a,u){return new Ot(a,u)};function Ot(a,u){B.call(this),this.g=new Tf(u),this.l=a,this.h=u&&u.messageUrlParams||null,a=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(a?a["X-WebChannel-Content-Type"]=u.messageContentType:a={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.sa&&(a?a["X-WebChannel-Client-Profile"]=u.sa:a={"X-WebChannel-Client-Profile":u.sa}),this.g.U=a,(a=u&&u.Qb)&&!E(a)&&(this.g.u=a),this.A=u&&u.supportsCrossDomainXhr||!1,this.v=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!E(u)&&(this.g.G=u,a=this.h,a!==null&&u in a&&(a=this.h,u in a&&delete a[u])),this.j=new As(this)}p(Ot,B),Ot.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Ot.prototype.close=function(){Hc(this.g)},Ot.prototype.o=function(a){var u=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.v&&(d={},d.__data__=ge(a),a=d);u.i.push(new xT(u.Ya++,a)),u.I==3&&Uo(u)},Ot.prototype.N=function(){this.g.l=null,delete this.j,Hc(this.g),delete this.g,Ot.Z.N.call(this)};function Df(a){vs.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var u=a.__sm__;if(u){e:{for(const d in u){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,u=u!==null&&a in u?u[a]:void 0),this.data=u}else this.data=a}p(Df,vs);function kf(){Xe.call(this),this.status=1}p(kf,Xe);function As(a){this.g=a}p(As,Nf),As.prototype.ra=function(){F(this.g,"a")},As.prototype.qa=function(a){F(this.g,new Df(a))},As.prototype.pa=function(a){F(this.g,new kf)},As.prototype.oa=function(){F(this.g,"b")},Bo.prototype.createWebChannel=Bo.prototype.g,Ot.prototype.send=Ot.prototype.o,Ot.prototype.open=Ot.prototype.m,Ot.prototype.close=Ot.prototype.close,Gg=function(){return new Bo},Wg=function(){return Dr()},zg=Ge,Dl={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Do.NO_ERROR=0,Do.TIMEOUT=8,Do.HTTP_ERROR=6,aa=Do,Kh.COMPLETE="complete",qg=Kh,Pt.EventType=jt,jt.OPEN="a",jt.CLOSE="b",jt.ERROR="c",jt.MESSAGE="d",B.prototype.listen=B.prototype.J,Ni=Pt,xe.prototype.listenOnce=xe.prototype.K,xe.prototype.getLastError=xe.prototype.Ha,xe.prototype.getLastErrorCode=xe.prototype.ya,xe.prototype.getStatus=xe.prototype.ca,xe.prototype.getResponseJson=xe.prototype.La,xe.prototype.getResponseText=xe.prototype.la,xe.prototype.send=xe.prototype.ea,xe.prototype.setWithCredentials=xe.prototype.Fa,Hg=xe}).apply(typeof Ho<"u"?Ho:typeof self<"u"?self:typeof window<"u"?window:{});const hd="@firebase/firestore",fd="4.9.2";/**
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
 */class ft{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ft.UNAUTHENTICATED=new ft(null),ft.GOOGLE_CREDENTIALS=new ft("google-credentials-uid"),ft.FIRST_PARTY=new ft("first-party-uid"),ft.MOCK_USER=new ft("mock-user");/**
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
 */let ei="12.3.0";/**
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
 */const es=new pu("@firebase/firestore");function Ss(){return es.logLevel}function Q(t,...e){if(es.logLevel<=he.DEBUG){const n=e.map(Ru);es.debug(`Firestore (${ei}): ${t}`,...n)}}function Bn(t,...e){if(es.logLevel<=he.ERROR){const n=e.map(Ru);es.error(`Firestore (${ei}): ${t}`,...n)}}function Ws(t,...e){if(es.logLevel<=he.WARN){const n=e.map(Ru);es.warn(`Firestore (${ei}): ${t}`,...n)}}function Ru(t){if(typeof t=="string")return t;try{/**
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
 */function ne(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,Kg(t,r,n)}function Kg(t,e,n){let r=`FIRESTORE (${ei}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw Bn(r),new Error(r)}function ve(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||Kg(e,s,r)}function ce(t,e){return t}/**
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
 */const k={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class K extends wn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class fr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class Qg{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class DA{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ft.UNAUTHENTICATED))}shutdown(){}}class kA{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class VA{constructor(e){this.t=e,this.currentUser=ft.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){ve(this.o===void 0,42304);let r=this.i;const s=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let i=new fr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new fr,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},c=l=>{Q("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(l=>c(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(Q("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new fr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(Q("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ve(typeof r.accessToken=="string",31837,{l:r}),new Qg(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ve(e===null||typeof e=="string",2055,{h:e}),new ft(e)}}class xA{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=ft.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class LA{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new xA(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(ft.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class dd{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class MA{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,mt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){ve(this.o===void 0,3512);const r=i=>{i.error!=null&&Q("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,Q("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{Q("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):Q("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new dd(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ve(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new dd(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function UA(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class Cu{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=UA(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function fe(t,e){return t<e?-1:t>e?1:0}function kl(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const s=t.charAt(r),i=e.charAt(r);if(s!==i)return el(s)===el(i)?fe(s,i):el(s)?1:-1}return fe(t.length,e.length)}const FA=55296,BA=57343;function el(t){const e=t.charCodeAt(0);return e>=FA&&e<=BA}function Gs(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */const pd="__name__";class cn{constructor(e,n,r){n===void 0?n=0:n>e.length&&ne(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&ne(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return cn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof cn?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=cn.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return fe(e.length,n.length)}static compareSegments(e,n){const r=cn.isNumericId(e),s=cn.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?cn.extractNumericId(e).compare(cn.extractNumericId(n)):kl(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return hr.fromString(e.substring(4,e.length-2))}}class Ce extends cn{construct(e,n,r){return new Ce(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new K(k.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Ce(n)}static emptyPath(){return new Ce([])}}const $A=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class tt extends cn{construct(e,n,r){return new tt(e,n,r)}static isValidIdentifier(e){return $A.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),tt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===pd}static keyField(){return new tt([pd])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new K(k.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new K(k.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new K(k.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else c==="`"?(o=!o,s++):c!=="."||o?(r+=c,s++):(i(),s++)}if(i(),o)throw new K(k.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new tt(n)}static emptyPath(){return new tt([])}}/**
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
 */function Yg(t,e,n){if(!n)throw new K(k.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function jA(t,e,n,r){if(e===!0&&r===!0)throw new K(k.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function md(t){if(!Y.isDocumentKey(t))throw new K(k.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function gd(t){if(Y.isDocumentKey(t))throw new K(k.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Jg(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function rc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ne(12329,{type:typeof t})}function Ln(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new K(k.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=rc(t);throw new K(k.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */function qe(t,e){const n={typeString:t};return e&&(n.value=e),n}function wo(t,e){if(!Jg(t))throw new K(k.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(s&&typeof o!==s){n=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){n=`Expected '${r}' field to equal '${i.value}'`;break}}if(n)throw new K(k.INVALID_ARGUMENT,n);return!0}/**
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
 */const _d=-62135596800,yd=1e6;class Ne{static now(){return Ne.fromMillis(Date.now())}static fromDate(e){return Ne.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*yd);return new Ne(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new K(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new K(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<_d)throw new K(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new K(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/yd}_compareTo(e){return this.seconds===e.seconds?fe(this.nanoseconds,e.nanoseconds):fe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Ne._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(wo(e,Ne._jsonSchema))return new Ne(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-_d;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Ne._jsonSchemaVersion="firestore/timestamp/1.0",Ne._jsonSchema={type:qe("string",Ne._jsonSchemaVersion),seconds:qe("number"),nanoseconds:qe("number")};/**
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
 */class oe{static fromTimestamp(e){return new oe(e)}static min(){return new oe(new Ne(0,0))}static max(){return new oe(new Ne(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Zi=-1;function HA(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=oe.fromTimestamp(r===1e9?new Ne(n+1,0):new Ne(n,r));return new yr(s,Y.empty(),e)}function qA(t){return new yr(t.readTime,t.key,Zi)}class yr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new yr(oe.min(),Y.empty(),Zi)}static max(){return new yr(oe.max(),Y.empty(),Zi)}}function zA(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=Y.comparator(t.documentKey,e.documentKey),n!==0?n:fe(t.largestBatchId,e.largestBatchId))}/**
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
 */const WA="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class GA{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function ti(t){if(t.code!==k.FAILED_PRECONDITION||t.message!==WA)throw t;Q("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class x{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ne(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new x((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof x?n:x.resolve(n)}catch(n){return x.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):x.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):x.reject(n)}static resolve(e){return new x((n,r)=>{n(e)})}static reject(e){return new x((n,r)=>{r(e)})}static waitFor(e){return new x((n,r)=>{let s=0,i=0,o=!1;e.forEach(c=>{++s,c.next(()=>{++i,o&&i===s&&n()},l=>r(l))}),o=!0,i===s&&n()})}static or(e){let n=x.resolve(!1);for(const r of e)n=n.next(s=>s?x.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new x((r,s)=>{const i=e.length,o=new Array(i);let c=0;for(let l=0;l<i;l++){const h=l;n(e[h]).next(f=>{o[h]=f,++c,c===i&&r(o)},f=>s(f))}})}static doWhile(e,n){return new x((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function KA(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function ni(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class sc{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}sc.ce=-1;/**
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
 */const Pu=-1;function ic(t){return t==null}function ba(t){return t===0&&1/t==-1/0}function QA(t){return typeof t=="number"&&Number.isInteger(t)&&!ba(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const Xg="";function YA(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Ed(e)),e=JA(t.get(n),e);return Ed(e)}function JA(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case Xg:n+="";break;default:n+=i}}return n}function Ed(t){return t+Xg+""}/**
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
 */function Td(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function hs(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Zg(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Ve{constructor(e,n){this.comparator=e,this.root=n||Ze.EMPTY}insert(e,n){return new Ve(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ze.BLACK,null,null))}remove(e){return new Ve(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ze.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new qo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new qo(this.root,e,this.comparator,!1)}getReverseIterator(){return new qo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new qo(this.root,e,this.comparator,!0)}}class qo{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ze{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??Ze.RED,this.left=s??Ze.EMPTY,this.right=i??Ze.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new Ze(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Ze.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return Ze.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ze.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ze.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ne(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ne(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw ne(27949);return e+(this.isRed()?0:1)}}Ze.EMPTY=null,Ze.RED=!0,Ze.BLACK=!1;Ze.EMPTY=new class{constructor(){this.size=0}get key(){throw ne(57766)}get value(){throw ne(16141)}get color(){throw ne(16727)}get left(){throw ne(29726)}get right(){throw ne(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new Ze(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class We{constructor(e){this.comparator=e,this.data=new Ve(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new vd(this.data.getIterator())}getIteratorFrom(e){return new vd(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof We)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new We(this.comparator);return n.data=e,n}}class vd{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Wt{constructor(e){this.fields=e,e.sort(tt.comparator)}static empty(){return new Wt([])}unionWith(e){let n=new We(tt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Wt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Gs(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class e_ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class ot{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new e_("Invalid base64 string: "+i):i}}(e);return new ot(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new ot(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return fe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ot.EMPTY_BYTE_STRING=new ot("");const XA=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Er(t){if(ve(!!t,39018),typeof t=="string"){let e=0;const n=XA.exec(t);if(ve(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ue(t.seconds),nanos:Ue(t.nanos)}}function Ue(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Tr(t){return typeof t=="string"?ot.fromBase64String(t):ot.fromUint8Array(t)}/**
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
 */const t_="server_timestamp",n_="__type__",r_="__previous_value__",s_="__local_write_time__";function Ou(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[n_])==null?void 0:r.stringValue)===t_}function oc(t){const e=t.mapValue.fields[r_];return Ou(e)?oc(e):e}function eo(t){const e=Er(t.mapValue.fields[s_].timestampValue);return new Ne(e.seconds,e.nanos)}/**
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
 */class ZA{constructor(e,n,r,s,i,o,c,l,h,f){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=h,this.isUsingEmulator=f}}const Sa="(default)";class to{constructor(e,n){this.projectId=e,this.database=n||Sa}static empty(){return new to("","")}get isDefaultDatabase(){return this.database===Sa}isEqual(e){return e instanceof to&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const i_="__type__",eb="__max__",zo={mapValue:{}},o_="__vector__",Ra="value";function vr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Ou(t)?4:nb(t)?9007199254740991:tb(t)?10:11:ne(28295,{value:t})}function vn(t,e){if(t===e)return!0;const n=vr(t);if(n!==vr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return eo(t).isEqual(eo(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Er(s.timestampValue),c=Er(i.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Tr(s.bytesValue).isEqual(Tr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Ue(s.geoPointValue.latitude)===Ue(i.geoPointValue.latitude)&&Ue(s.geoPointValue.longitude)===Ue(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Ue(s.integerValue)===Ue(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Ue(s.doubleValue),c=Ue(i.doubleValue);return o===c?ba(o)===ba(c):isNaN(o)&&isNaN(c)}return!1}(t,e);case 9:return Gs(t.arrayValue.values||[],e.arrayValue.values||[],vn);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},c=i.mapValue.fields||{};if(Td(o)!==Td(c))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(c[l]===void 0||!vn(o[l],c[l])))return!1;return!0}(t,e);default:return ne(52216,{left:t})}}function no(t,e){return(t.values||[]).find(n=>vn(n,e))!==void 0}function Ks(t,e){if(t===e)return 0;const n=vr(t),r=vr(e);if(n!==r)return fe(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return fe(t.booleanValue,e.booleanValue);case 2:return function(i,o){const c=Ue(i.integerValue||i.doubleValue),l=Ue(o.integerValue||o.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1}(t,e);case 3:return Id(t.timestampValue,e.timestampValue);case 4:return Id(eo(t),eo(e));case 5:return kl(t.stringValue,e.stringValue);case 6:return function(i,o){const c=Tr(i),l=Tr(o);return c.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const c=i.split("/"),l=o.split("/");for(let h=0;h<c.length&&h<l.length;h++){const f=fe(c[h],l[h]);if(f!==0)return f}return fe(c.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const c=fe(Ue(i.latitude),Ue(o.latitude));return c!==0?c:fe(Ue(i.longitude),Ue(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return wd(t.arrayValue,e.arrayValue);case 10:return function(i,o){var g,I,P,R;const c=i.fields||{},l=o.fields||{},h=(g=c[Ra])==null?void 0:g.arrayValue,f=(I=l[Ra])==null?void 0:I.arrayValue,p=fe(((P=h==null?void 0:h.values)==null?void 0:P.length)||0,((R=f==null?void 0:f.values)==null?void 0:R.length)||0);return p!==0?p:wd(h,f)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===zo.mapValue&&o===zo.mapValue)return 0;if(i===zo.mapValue)return 1;if(o===zo.mapValue)return-1;const c=i.fields||{},l=Object.keys(c),h=o.fields||{},f=Object.keys(h);l.sort(),f.sort();for(let p=0;p<l.length&&p<f.length;++p){const g=kl(l[p],f[p]);if(g!==0)return g;const I=Ks(c[l[p]],h[f[p]]);if(I!==0)return I}return fe(l.length,f.length)}(t.mapValue,e.mapValue);default:throw ne(23264,{he:n})}}function Id(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return fe(t,e);const n=Er(t),r=Er(e),s=fe(n.seconds,r.seconds);return s!==0?s:fe(n.nanos,r.nanos)}function wd(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=Ks(n[s],r[s]);if(i)return i}return fe(n.length,r.length)}function Qs(t){return Vl(t)}function Vl(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Er(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Tr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return Y.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Vl(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Vl(n.fields[o])}`;return s+"}"}(t.mapValue):ne(61005,{value:t})}function ca(t){switch(vr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=oc(t);return e?16+ca(e):16;case 5:return 2*t.stringValue.length;case 6:return Tr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+ca(i),0)}(t.arrayValue);case 10:case 11:return function(r){let s=0;return hs(r.fields,(i,o)=>{s+=i.length+ca(o)}),s}(t.mapValue);default:throw ne(13486,{value:t})}}function Ad(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function xl(t){return!!t&&"integerValue"in t}function Nu(t){return!!t&&"arrayValue"in t}function bd(t){return!!t&&"nullValue"in t}function Sd(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function la(t){return!!t&&"mapValue"in t}function tb(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[i_])==null?void 0:r.stringValue)===o_}function Fi(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return hs(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Fi(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Fi(t.arrayValue.values[n]);return e}return{...t}}function nb(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===eb}/**
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
 */class Lt{constructor(e){this.value=e}static empty(){return new Lt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!la(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Fi(n)}setAll(e){let n=tt.emptyPath(),r={},s=[];e.forEach((o,c)=>{if(!n.isImmediateParentOf(c)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=c.popLast()}o?r[c.lastSegment()]=Fi(o):s.push(c.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());la(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return vn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];la(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){hs(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Lt(Fi(this.value))}}function a_(t){const e=[];return hs(t.fields,(n,r)=>{const s=new tt([n]);if(la(r)){const i=a_(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Wt(e)}/**
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
 */class dt{constructor(e,n,r,s,i,o,c){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=c}static newInvalidDocument(e){return new dt(e,0,oe.min(),oe.min(),oe.min(),Lt.empty(),0)}static newFoundDocument(e,n,r,s){return new dt(e,1,n,oe.min(),r,s,0)}static newNoDocument(e,n){return new dt(e,2,n,oe.min(),oe.min(),Lt.empty(),0)}static newUnknownDocument(e,n){return new dt(e,3,n,oe.min(),oe.min(),Lt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(oe.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Lt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Lt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=oe.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof dt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new dt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Ca{constructor(e,n){this.position=e,this.inclusive=n}}function Rd(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=Y.comparator(Y.fromName(o.referenceValue),n.key):r=Ks(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Cd(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!vn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class ro{constructor(e,n="asc"){this.field=e,this.dir=n}}function rb(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class c_{}class He extends c_{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new ib(e,n,r):n==="array-contains"?new cb(e,r):n==="in"?new lb(e,r):n==="not-in"?new ub(e,r):n==="array-contains-any"?new hb(e,r):new He(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new ob(e,r):new ab(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(Ks(n,this.value)):n!==null&&vr(this.value)===vr(n)&&this.matchesComparison(Ks(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ne(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Xt extends c_{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new Xt(e,n)}matches(e){return l_(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function l_(t){return t.op==="and"}function u_(t){return sb(t)&&l_(t)}function sb(t){for(const e of t.filters)if(e instanceof Xt)return!1;return!0}function Ll(t){if(t instanceof He)return t.field.canonicalString()+t.op.toString()+Qs(t.value);if(u_(t))return t.filters.map(e=>Ll(e)).join(",");{const e=t.filters.map(n=>Ll(n)).join(",");return`${t.op}(${e})`}}function h_(t,e){return t instanceof He?function(r,s){return s instanceof He&&r.op===s.op&&r.field.isEqual(s.field)&&vn(r.value,s.value)}(t,e):t instanceof Xt?function(r,s){return s instanceof Xt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,c)=>i&&h_(o,s.filters[c]),!0):!1}(t,e):void ne(19439)}function f_(t){return t instanceof He?function(n){return`${n.field.canonicalString()} ${n.op} ${Qs(n.value)}`}(t):t instanceof Xt?function(n){return n.op.toString()+" {"+n.getFilters().map(f_).join(" ,")+"}"}(t):"Filter"}class ib extends He{constructor(e,n,r){super(e,n,r),this.key=Y.fromName(r.referenceValue)}matches(e){const n=Y.comparator(e.key,this.key);return this.matchesComparison(n)}}class ob extends He{constructor(e,n){super(e,"in",n),this.keys=d_("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class ab extends He{constructor(e,n){super(e,"not-in",n),this.keys=d_("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function d_(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map(r=>Y.fromName(r.referenceValue))}class cb extends He{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Nu(n)&&no(n.arrayValue,this.value)}}class lb extends He{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&no(this.value.arrayValue,n)}}class ub extends He{constructor(e,n){super(e,"not-in",n)}matches(e){if(no(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!no(this.value.arrayValue,n)}}class hb extends He{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Nu(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>no(this.value.arrayValue,r))}}/**
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
 */class fb{constructor(e,n=null,r=[],s=[],i=null,o=null,c=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=c,this.Te=null}}function Pd(t,e=null,n=[],r=[],s=null,i=null,o=null){return new fb(t,e,n,r,s,i,o)}function Du(t){const e=ce(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Ll(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),ic(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Qs(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Qs(r)).join(",")),e.Te=n}return e.Te}function ku(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!rb(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!h_(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Cd(t.startAt,e.startAt)&&Cd(t.endAt,e.endAt)}function Ml(t){return Y.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class ri{constructor(e,n=null,r=[],s=[],i=null,o="F",c=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=c,this.endAt=l,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function db(t,e,n,r,s,i,o,c){return new ri(t,e,n,r,s,i,o,c)}function ac(t){return new ri(t)}function Od(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function p_(t){return t.collectionGroup!==null}function Bi(t){const e=ce(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new We(tt.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(h=>{h.isInequality()&&(c=c.add(h.field))})}),c})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new ro(i,r))}),n.has(tt.keyField().canonicalString())||e.Ie.push(new ro(tt.keyField(),r))}return e.Ie}function mn(t){const e=ce(t);return e.Ee||(e.Ee=pb(e,Bi(t))),e.Ee}function pb(t,e){if(t.limitType==="F")return Pd(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new ro(s.field,i)});const n=t.endAt?new Ca(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Ca(t.startAt.position,t.startAt.inclusive):null;return Pd(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Ul(t,e){const n=t.filters.concat([e]);return new ri(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Pa(t,e,n){return new ri(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function cc(t,e){return ku(mn(t),mn(e))&&t.limitType===e.limitType}function m_(t){return`${Du(mn(t))}|lt:${t.limitType}`}function Rs(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>f_(s)).join(", ")}]`),ic(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>Qs(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>Qs(s)).join(",")),`Target(${r})`}(mn(t))}; limitType=${t.limitType})`}function lc(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):Y.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of Bi(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,c,l){const h=Rd(o,c,l);return o.inclusive?h<=0:h<0}(r.startAt,Bi(r),s)||r.endAt&&!function(o,c,l){const h=Rd(o,c,l);return o.inclusive?h>=0:h>0}(r.endAt,Bi(r),s))}(t,e)}function mb(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function g_(t){return(e,n)=>{let r=!1;for(const s of Bi(t)){const i=gb(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function gb(t,e,n){const r=t.field.isKeyField()?Y.comparator(e.key,n.key):function(i,o,c){const l=o.data.field(i),h=c.data.field(i);return l!==null&&h!==null?Ks(l,h):ne(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ne(19790,{direction:t.dir})}}/**
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
 */class fs{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){hs(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return Zg(this.inner)}size(){return this.innerSize}}/**
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
 */const _b=new Ve(Y.comparator);function $n(){return _b}const __=new Ve(Y.comparator);function Di(...t){let e=__;for(const n of t)e=e.insert(n.key,n);return e}function y_(t){let e=__;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Wr(){return $i()}function E_(){return $i()}function $i(){return new fs(t=>t.toString(),(t,e)=>t.isEqual(e))}const yb=new Ve(Y.comparator),Eb=new We(Y.comparator);function de(...t){let e=Eb;for(const n of t)e=e.add(n);return e}const Tb=new We(fe);function vb(){return Tb}/**
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
 */function Vu(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ba(e)?"-0":e}}function T_(t){return{integerValue:""+t}}function Ib(t,e){return QA(e)?T_(e):Vu(t,e)}/**
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
 */class uc{constructor(){this._=void 0}}function wb(t,e,n){return t instanceof so?function(s,i){const o={fields:{[n_]:{stringValue:t_},[s_]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Ou(i)&&(i=oc(i)),i&&(o.fields[r_]=i),{mapValue:o}}(n,e):t instanceof io?I_(t,e):t instanceof oo?w_(t,e):function(s,i){const o=v_(s,i),c=Nd(o)+Nd(s.Ae);return xl(o)&&xl(s.Ae)?T_(c):Vu(s.serializer,c)}(t,e)}function Ab(t,e,n){return t instanceof io?I_(t,e):t instanceof oo?w_(t,e):n}function v_(t,e){return t instanceof Oa?function(r){return xl(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class so extends uc{}class io extends uc{constructor(e){super(),this.elements=e}}function I_(t,e){const n=A_(e);for(const r of t.elements)n.some(s=>vn(s,r))||n.push(r);return{arrayValue:{values:n}}}class oo extends uc{constructor(e){super(),this.elements=e}}function w_(t,e){let n=A_(e);for(const r of t.elements)n=n.filter(s=>!vn(s,r));return{arrayValue:{values:n}}}class Oa extends uc{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function Nd(t){return Ue(t.integerValue||t.doubleValue)}function A_(t){return Nu(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class bb{constructor(e,n){this.field=e,this.transform=n}}function Sb(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof io&&s instanceof io||r instanceof oo&&s instanceof oo?Gs(r.elements,s.elements,vn):r instanceof Oa&&s instanceof Oa?vn(r.Ae,s.Ae):r instanceof so&&s instanceof so}(t.transform,e.transform)}class Rb{constructor(e,n){this.version=e,this.transformResults=n}}class gn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new gn}static exists(e){return new gn(void 0,e)}static updateTime(e){return new gn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ua(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class hc{}function b_(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new R_(t.key,gn.none()):new Ao(t.key,t.data,gn.none());{const n=t.data,r=Lt.empty();let s=new We(tt.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new ds(t.key,r,new Wt(s.toArray()),gn.none())}}function Cb(t,e,n){t instanceof Ao?function(s,i,o){const c=s.value.clone(),l=kd(s.fieldTransforms,i,o.transformResults);c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):t instanceof ds?function(s,i,o){if(!ua(s.precondition,i))return void i.convertToUnknownDocument(o.version);const c=kd(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(S_(s)),l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function ji(t,e,n,r){return t instanceof Ao?function(i,o,c,l){if(!ua(i.precondition,o))return c;const h=i.value.clone(),f=Vd(i.fieldTransforms,l,o);return h.setAll(f),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof ds?function(i,o,c,l){if(!ua(i.precondition,o))return c;const h=Vd(i.fieldTransforms,l,o),f=o.data;return f.setAll(S_(i)),f.setAll(h),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(i,o,c){return ua(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c}(t,e,n)}function Pb(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=v_(r.transform,s||null);i!=null&&(n===null&&(n=Lt.empty()),n.set(r.field,i))}return n||null}function Dd(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Gs(r,s,(i,o)=>Sb(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ao extends hc{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class ds extends hc{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function S_(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function kd(t,e,n){const r=new Map;ve(t.length===n.length,32656,{Re:n.length,Ve:t.length});for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,c=e.data.field(i.field);r.set(i.field,Ab(o,c,n[s]))}return r}function Vd(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,wb(i,o,e))}return r}class R_ extends hc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Ob extends hc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Nb{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&Cb(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=ji(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=ji(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=E_();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let c=this.applyToLocalView(o,i.mutatedFields);c=n.has(s.key)?null:c;const l=b_(o,c);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(oe.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),de())}isEqual(e){return this.batchId===e.batchId&&Gs(this.mutations,e.mutations,(n,r)=>Dd(n,r))&&Gs(this.baseMutations,e.baseMutations,(n,r)=>Dd(n,r))}}class xu{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){ve(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=function(){return yb}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new xu(e,n,r,s)}}/**
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
 */class Db{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class kb{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var je,pe;function Vb(t){switch(t){case k.OK:return ne(64938);case k.CANCELLED:case k.UNKNOWN:case k.DEADLINE_EXCEEDED:case k.RESOURCE_EXHAUSTED:case k.INTERNAL:case k.UNAVAILABLE:case k.UNAUTHENTICATED:return!1;case k.INVALID_ARGUMENT:case k.NOT_FOUND:case k.ALREADY_EXISTS:case k.PERMISSION_DENIED:case k.FAILED_PRECONDITION:case k.ABORTED:case k.OUT_OF_RANGE:case k.UNIMPLEMENTED:case k.DATA_LOSS:return!0;default:return ne(15467,{code:t})}}function C_(t){if(t===void 0)return Bn("GRPC error has no .code"),k.UNKNOWN;switch(t){case je.OK:return k.OK;case je.CANCELLED:return k.CANCELLED;case je.UNKNOWN:return k.UNKNOWN;case je.DEADLINE_EXCEEDED:return k.DEADLINE_EXCEEDED;case je.RESOURCE_EXHAUSTED:return k.RESOURCE_EXHAUSTED;case je.INTERNAL:return k.INTERNAL;case je.UNAVAILABLE:return k.UNAVAILABLE;case je.UNAUTHENTICATED:return k.UNAUTHENTICATED;case je.INVALID_ARGUMENT:return k.INVALID_ARGUMENT;case je.NOT_FOUND:return k.NOT_FOUND;case je.ALREADY_EXISTS:return k.ALREADY_EXISTS;case je.PERMISSION_DENIED:return k.PERMISSION_DENIED;case je.FAILED_PRECONDITION:return k.FAILED_PRECONDITION;case je.ABORTED:return k.ABORTED;case je.OUT_OF_RANGE:return k.OUT_OF_RANGE;case je.UNIMPLEMENTED:return k.UNIMPLEMENTED;case je.DATA_LOSS:return k.DATA_LOSS;default:return ne(39323,{code:t})}}(pe=je||(je={}))[pe.OK=0]="OK",pe[pe.CANCELLED=1]="CANCELLED",pe[pe.UNKNOWN=2]="UNKNOWN",pe[pe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",pe[pe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",pe[pe.NOT_FOUND=5]="NOT_FOUND",pe[pe.ALREADY_EXISTS=6]="ALREADY_EXISTS",pe[pe.PERMISSION_DENIED=7]="PERMISSION_DENIED",pe[pe.UNAUTHENTICATED=16]="UNAUTHENTICATED",pe[pe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",pe[pe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",pe[pe.ABORTED=10]="ABORTED",pe[pe.OUT_OF_RANGE=11]="OUT_OF_RANGE",pe[pe.UNIMPLEMENTED=12]="UNIMPLEMENTED",pe[pe.INTERNAL=13]="INTERNAL",pe[pe.UNAVAILABLE=14]="UNAVAILABLE",pe[pe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function xb(){return new TextEncoder}/**
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
 */const Lb=new hr([4294967295,4294967295],0);function xd(t){const e=xb().encode(t),n=new jg;return n.update(e),new Uint8Array(n.digest())}function Ld(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new hr([n,r],0),new hr([s,i],0)]}class Lu{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new ki(`Invalid padding: ${n}`);if(r<0)throw new ki(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ki(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new ki(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=hr.fromNumber(this.ge)}ye(e,n,r){let s=e.add(n.multiply(hr.fromNumber(r)));return s.compare(Lb)===1&&(s=new hr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=xd(e),[r,s]=Ld(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);if(!this.we(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Lu(i,s,n);return r.forEach(c=>o.insert(c)),o}insert(e){if(this.ge===0)return;const n=xd(e),[r,s]=Ld(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);this.Se(o)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class ki extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class fc{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,bo.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new fc(oe.min(),s,new Ve(fe),$n(),de())}}class bo{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new bo(r,n,de(),de(),de())}}/**
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
 */class ha{constructor(e,n,r,s){this.be=e,this.removedTargetIds=n,this.key=r,this.De=s}}class P_{constructor(e,n){this.targetId=e,this.Ce=n}}class O_{constructor(e,n,r=ot.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Md{constructor(){this.ve=0,this.Fe=Ud(),this.Me=ot.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=de(),n=de(),r=de();return this.Fe.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:ne(38017,{changeType:i})}}),new bo(this.Me,this.xe,e,n,r)}qe(){this.Oe=!1,this.Fe=Ud()}Qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,ve(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class Mb{constructor(e){this.Ge=e,this.ze=new Map,this.je=$n(),this.Je=Wo(),this.He=Wo(),this.Ye=new Ve(fe)}Ze(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Xe(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.We(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:ne(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((r,s)=>{this.rt(s)&&n(s)})}st(e){const n=e.targetId,r=e.Ce.count,s=this.ot(n);if(s){const i=s.target;if(Ml(i))if(r===0){const o=new Y(i.path);this.et(n,o,dt.newNoDocument(o,oe.min()))}else ve(r===1,20013,{expectedCount:r});else{const o=this._t(n);if(o!==r){const c=this.ut(e),l=c?this.ct(c,e,o):1;if(l!==0){this.it(n);const h=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(n,h)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,c;try{o=Tr(r).toUint8Array()}catch(l){if(l instanceof e_)return Ws("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new Lu(o,s,i)}catch(l){return Ws(l instanceof ki?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.ge===0?null:c}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Ge.ht(),c=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.et(n,i,null),s++)}),s}Tt(e){const n=new Map;this.ze.forEach((i,o)=>{const c=this.ot(o);if(c){if(i.current&&Ml(c.target)){const l=new Y(c.target.path);this.It(l).has(o)||this.Et(o,l)||this.et(o,l,dt.newNoDocument(l,e))}i.Be&&(n.set(o,i.ke()),i.qe())}});let r=de();this.He.forEach((i,o)=>{let c=!0;o.forEachWhile(l=>{const h=this.ot(l);return!h||h.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(i))}),this.je.forEach((i,o)=>o.setReadTime(e));const s=new fc(e,n,this.Ye,this.je,r);return this.je=$n(),this.Je=Wo(),this.He=Wo(),this.Ye=new Ve(fe),s}Xe(e,n){if(!this.rt(e))return;const r=this.Et(e,n.key)?2:0;this.nt(e).Qe(n.key,r),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(e)),this.He=this.He.insert(n.key,this.dt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,n)?s.Qe(n,1):s.$e(n),this.He=this.He.insert(n,this.dt(n).delete(e)),this.He=this.He.insert(n,this.dt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let n=this.ze.get(e);return n||(n=new Md,this.ze.set(e,n)),n}dt(e){let n=this.He.get(e);return n||(n=new We(fe),this.He=this.He.insert(e,n)),n}It(e){let n=this.Je.get(e);return n||(n=new We(fe),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||Q("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Md),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function Wo(){return new Ve(Y.comparator)}function Ud(){return new Ve(Y.comparator)}const Ub={asc:"ASCENDING",desc:"DESCENDING"},Fb={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Bb={and:"AND",or:"OR"};class $b{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Fl(t,e){return t.useProto3Json||ic(e)?e:{value:e}}function Na(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function N_(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function jb(t,e){return Na(t,e.toTimestamp())}function _n(t){return ve(!!t,49232),oe.fromTimestamp(function(n){const r=Er(n);return new Ne(r.seconds,r.nanos)}(t))}function Mu(t,e){return Bl(t,e).canonicalString()}function Bl(t,e){const n=function(s){return new Ce(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function D_(t){const e=Ce.fromString(t);return ve(M_(e),10190,{key:e.toString()}),e}function $l(t,e){return Mu(t.databaseId,e.path)}function tl(t,e){const n=D_(e);if(n.get(1)!==t.databaseId.projectId)throw new K(k.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new K(k.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Y(V_(n))}function k_(t,e){return Mu(t.databaseId,e)}function Hb(t){const e=D_(t);return e.length===4?Ce.emptyPath():V_(e)}function jl(t){return new Ce(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function V_(t){return ve(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function Fd(t,e,n){return{name:$l(t,e),fields:n.value.mapValue.fields}}function qb(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:ne(39313,{state:h})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(h,f){return h.useProto3Json?(ve(f===void 0||typeof f=="string",58123),ot.fromBase64String(f||"")):(ve(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),ot.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&function(h){const f=h.code===void 0?k.UNKNOWN:C_(h.code);return new K(f,h.message||"")}(o);n=new O_(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=tl(t,r.document.name),i=_n(r.document.updateTime),o=r.document.createTime?_n(r.document.createTime):oe.min(),c=new Lt({mapValue:{fields:r.document.fields}}),l=dt.newFoundDocument(s,i,o,c),h=r.targetIds||[],f=r.removedTargetIds||[];n=new ha(h,f,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=tl(t,r.document),i=r.readTime?_n(r.readTime):oe.min(),o=dt.newNoDocument(s,i),c=r.removedTargetIds||[];n=new ha([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=tl(t,r.document),i=r.removedTargetIds||[];n=new ha([],i,s,null)}else{if(!("filter"in e))return ne(11601,{Rt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new kb(s,i),c=r.targetId;n=new P_(c,o)}}return n}function zb(t,e){let n;if(e instanceof Ao)n={update:Fd(t,e.key,e.value)};else if(e instanceof R_)n={delete:$l(t,e.key)};else if(e instanceof ds)n={update:Fd(t,e.key,e.data),updateMask:eS(e.fieldMask)};else{if(!(e instanceof Ob))return ne(16599,{Vt:e.type});n={verify:$l(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const c=o.transform;if(c instanceof so)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof io)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof oo)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof Oa)return{fieldPath:o.field.canonicalString(),increment:c.Ae};throw ne(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:jb(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ne(27497)}(t,e.precondition)),n}function Wb(t,e){return t&&t.length>0?(ve(e!==void 0,14353),t.map(n=>function(s,i){let o=s.updateTime?_n(s.updateTime):_n(i);return o.isEqual(oe.min())&&(o=_n(i)),new Rb(o,s.transformResults||[])}(n,e))):[]}function Gb(t,e){return{documents:[k_(t,e.path)]}}function Kb(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=k_(t,s);const i=function(h){if(h.length!==0)return L_(Xt.create(h,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(h){if(h.length!==0)return h.map(f=>function(g){return{field:Cs(g.field),direction:Jb(g.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const c=Fl(t,e.limit);return c!==null&&(n.structuredQuery.limit=c),e.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{ft:n,parent:s}}function Qb(t){let e=Hb(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){ve(r===1,65062);const f=n.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];n.where&&(i=function(p){const g=x_(p);return g instanceof Xt&&u_(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(g=>function(P){return new ro(Ps(P.field),function(O){switch(O){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(P.direction))}(g))}(n.orderBy));let c=null;n.limit&&(c=function(p){let g;return g=typeof p=="object"?p.value:p,ic(g)?null:g}(n.limit));let l=null;n.startAt&&(l=function(p){const g=!!p.before,I=p.values||[];return new Ca(I,g)}(n.startAt));let h=null;return n.endAt&&(h=function(p){const g=!p.before,I=p.values||[];return new Ca(I,g)}(n.endAt)),db(e,s,o,i,c,"F",l,h)}function Yb(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ne(28987,{purpose:s})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function x_(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Ps(n.unaryFilter.field);return He.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Ps(n.unaryFilter.field);return He.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Ps(n.unaryFilter.field);return He.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Ps(n.unaryFilter.field);return He.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ne(61313);default:return ne(60726)}}(t):t.fieldFilter!==void 0?function(n){return He.create(Ps(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ne(58110);default:return ne(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Xt.create(n.compositeFilter.filters.map(r=>x_(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return ne(1026)}}(n.compositeFilter.op))}(t):ne(30097,{filter:t})}function Jb(t){return Ub[t]}function Xb(t){return Fb[t]}function Zb(t){return Bb[t]}function Cs(t){return{fieldPath:t.canonicalString()}}function Ps(t){return tt.fromServerFormat(t.fieldPath)}function L_(t){return t instanceof He?function(n){if(n.op==="=="){if(Sd(n.value))return{unaryFilter:{field:Cs(n.field),op:"IS_NAN"}};if(bd(n.value))return{unaryFilter:{field:Cs(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Sd(n.value))return{unaryFilter:{field:Cs(n.field),op:"IS_NOT_NAN"}};if(bd(n.value))return{unaryFilter:{field:Cs(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Cs(n.field),op:Xb(n.op),value:n.value}}}(t):t instanceof Xt?function(n){const r=n.getFilters().map(s=>L_(s));return r.length===1?r[0]:{compositeFilter:{op:Zb(n.op),filters:r}}}(t):ne(54877,{filter:t})}function eS(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function M_(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class cr{constructor(e,n,r,s,i=oe.min(),o=oe.min(),c=ot.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new cr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new cr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new cr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new cr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class tS{constructor(e){this.yt=e}}function nS(t){const e=Qb({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Pa(e,e.limit,"L"):e}/**
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
 */class rS{constructor(){this.Cn=new sS}addToCollectionParentIndex(e,n){return this.Cn.add(n),x.resolve()}getCollectionParents(e,n){return x.resolve(this.Cn.getEntries(n))}addFieldIndex(e,n){return x.resolve()}deleteFieldIndex(e,n){return x.resolve()}deleteAllFieldIndexes(e){return x.resolve()}createTargetIndexes(e,n){return x.resolve()}getDocumentsMatchingTarget(e,n){return x.resolve(null)}getIndexType(e,n){return x.resolve(0)}getFieldIndexes(e,n){return x.resolve([])}getNextCollectionGroupToUpdate(e){return x.resolve(null)}getMinOffset(e,n){return x.resolve(yr.min())}getMinOffsetFromCollectionGroup(e,n){return x.resolve(yr.min())}updateCollectionGroup(e,n,r){return x.resolve()}updateIndexEntries(e,n){return x.resolve()}}class sS{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new We(Ce.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new We(Ce.comparator)).toArray()}}/**
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
 */const Bd={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},U_=41943040;class St{static withCacheSize(e){return new St(e,St.DEFAULT_COLLECTION_PERCENTILE,St.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
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
 */St.DEFAULT_COLLECTION_PERCENTILE=10,St.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,St.DEFAULT=new St(U_,St.DEFAULT_COLLECTION_PERCENTILE,St.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),St.DISABLED=new St(-1,0,0);/**
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
 */class Ys{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new Ys(0)}static cr(){return new Ys(-1)}}/**
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
 */const $d="LruGarbageCollector",iS=1048576;function jd([t,e],[n,r]){const s=fe(t,n);return s===0?fe(e,r):s}class oS{constructor(e){this.Ir=e,this.buffer=new We(jd),this.Er=0}dr(){return++this.Er}Ar(e){const n=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();jd(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class aS{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){Q($d,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){ni(n)?Q($d,"Ignoring IndexedDB error during garbage collection: ",n):await ti(n)}await this.Vr(3e5)})}}class cS{constructor(e,n){this.mr=e,this.params=n}calculateTargetCount(e,n){return this.mr.gr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return x.resolve(sc.ce);const r=new oS(n);return this.mr.forEachTarget(e,s=>r.Ar(s.sequenceNumber)).next(()=>this.mr.pr(e,s=>r.Ar(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.mr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.mr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(Q("LruGarbageCollector","Garbage collection skipped; disabled"),x.resolve(Bd)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(Q("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Bd):this.yr(e,n))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,n){let r,s,i,o,c,l,h;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(Q("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,o=Date.now(),this.nthSequenceNumber(e,s))).next(p=>(r=p,c=Date.now(),this.removeTargets(e,r,n))).next(p=>(i=p,l=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(h=Date.now(),Ss()<=he.DEBUG&&Q("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${s} in `+(c-o)+`ms
	Removed ${i} targets in `+(l-c)+`ms
	Removed ${p} documents in `+(h-l)+`ms
Total Duration: ${h-f}ms`),x.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p})))}}function lS(t,e){return new cS(t,e)}/**
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
 */class uS{constructor(){this.changes=new fs(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,dt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?x.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class hS{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class fS{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&ji(r.mutation,s,Wt.empty(),Ne.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,de()).next(()=>r))}getLocalViewOfDocuments(e,n,r=de()){const s=Wr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=Di();return i.forEach((c,l)=>{o=o.insert(c,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Wr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,de()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,c)=>{n.set(o,c)})})}computeViews(e,n,r,s){let i=$n();const o=$i(),c=function(){return $i()}();return n.forEach((l,h)=>{const f=r.get(h.key);s.has(h.key)&&(f===void 0||f.mutation instanceof ds)?i=i.insert(h.key,h):f!==void 0?(o.set(h.key,f.mutation.getFieldMask()),ji(f.mutation,h,f.mutation.getFieldMask(),Ne.now())):o.set(h.key,Wt.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((h,f)=>o.set(h,f)),n.forEach((h,f)=>c.set(h,new hS(f,o.get(h)??null))),c))}recalculateAndSaveOverlays(e,n){const r=$i();let s=new Ve((o,c)=>o-c),i=de();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const c of o)c.keys().forEach(l=>{const h=n.get(l);if(h===null)return;let f=r.get(l)||Wt.empty();f=c.applyToLocalView(h,f),r.set(l,f);const p=(s.get(c.batchId)||de()).add(l);s=s.insert(c.batchId,p)})}).next(()=>{const o=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),h=l.key,f=l.value,p=E_();f.forEach(g=>{if(!i.has(g)){const I=b_(n.get(g),r.get(g));I!==null&&p.set(g,I),i=i.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,p))}return x.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return Y.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):p_(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):x.resolve(Wr());let c=Zi,l=i;return o.next(h=>x.forEach(h,(f,p)=>(c<p.largestBatchId&&(c=p.largestBatchId),i.get(f)?x.resolve():this.remoteDocumentCache.getEntry(e,f).next(g=>{l=l.insert(f,g)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,l,h,de())).next(f=>({batchId:c,changes:y_(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new Y(n)).next(r=>{let s=Di();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=Di();return this.indexManager.getCollectionParents(e,i).next(c=>x.forEach(c,l=>{const h=function(p,g){return new ri(g,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next(f=>{f.forEach((p,g)=>{o=o.insert(p,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((l,h)=>{const f=h.getKey();o.get(f)===null&&(o=o.insert(f,dt.newInvalidDocument(f)))});let c=Di();return o.forEach((l,h)=>{const f=i.get(l);f!==void 0&&ji(f.mutation,h,Wt.empty(),Ne.now()),lc(n,h)&&(c=c.insert(l,h))}),c})}}/**
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
 */class dS{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,n){return x.resolve(this.Lr.get(n))}saveBundleMetadata(e,n){return this.Lr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:_n(s.createTime)}}(n)),x.resolve()}getNamedQuery(e,n){return x.resolve(this.kr.get(n))}saveNamedQuery(e,n){return this.kr.set(n.name,function(s){return{name:s.name,query:nS(s.bundledQuery),readTime:_n(s.readTime)}}(n)),x.resolve()}}/**
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
 */class pS{constructor(){this.overlays=new Ve(Y.comparator),this.qr=new Map}getOverlay(e,n){return x.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Wr();return x.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.St(e,n,i)}),x.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.qr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.qr.delete(r)),x.resolve()}getOverlaysForCollection(e,n,r){const s=Wr(),i=n.length+1,o=new Y(n.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const l=c.getNext().value,h=l.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return x.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Ve((h,f)=>h-f);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let f=i.get(h.largestBatchId);f===null&&(f=Wr(),i=i.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const c=Wr(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((h,f)=>c.set(h,f)),!(c.size()>=s)););return x.resolve(c)}St(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.qr.get(s.largestBatchId).delete(r.key);this.qr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Db(n,r));let i=this.qr.get(n);i===void 0&&(i=de(),this.qr.set(n,i)),this.qr.set(n,i.add(r.key))}}/**
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
 */class mS{constructor(){this.sessionToken=ot.EMPTY_BYTE_STRING}getSessionToken(e){return x.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,x.resolve()}}/**
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
 */class Uu{constructor(){this.Qr=new We(Qe.$r),this.Ur=new We(Qe.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,n){const r=new Qe(e,n);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Gr(new Qe(e,n))}zr(e,n){e.forEach(r=>this.removeReference(r,n))}jr(e){const n=new Y(new Ce([])),r=new Qe(n,e),s=new Qe(n,e+1),i=[];return this.Ur.forEachInRange([r,s],o=>{this.Gr(o),i.push(o.key)}),i}Jr(){this.Qr.forEach(e=>this.Gr(e))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const n=new Y(new Ce([])),r=new Qe(n,e),s=new Qe(n,e+1);let i=de();return this.Ur.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Qe(e,0),r=this.Qr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Qe{constructor(e,n){this.key=e,this.Yr=n}static $r(e,n){return Y.comparator(e.key,n.key)||fe(e.Yr,n.Yr)}static Kr(e,n){return fe(e.Yr,n.Yr)||Y.comparator(e.key,n.key)}}/**
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
 */class gS{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.tr=1,this.Zr=new We(Qe.$r)}checkEmpty(e){return x.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Nb(i,n,r,s);this.mutationQueue.push(o);for(const c of s)this.Zr=this.Zr.add(new Qe(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return x.resolve(o)}lookupMutationBatch(e,n){return x.resolve(this.Xr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.ei(r),i=s<0?0:s;return x.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return x.resolve(this.mutationQueue.length===0?Pu:this.tr-1)}getAllMutationBatches(e){return x.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Qe(n,0),s=new Qe(n,Number.POSITIVE_INFINITY),i=[];return this.Zr.forEachInRange([r,s],o=>{const c=this.Xr(o.Yr);i.push(c)}),x.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new We(fe);return n.forEach(s=>{const i=new Qe(s,0),o=new Qe(s,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([i,o],c=>{r=r.add(c.Yr)})}),x.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;Y.isDocumentKey(i)||(i=i.child(""));const o=new Qe(new Y(i),0);let c=new We(fe);return this.Zr.forEachWhile(l=>{const h=l.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(c=c.add(l.Yr)),!0)},o),x.resolve(this.ti(c))}ti(e){const n=[];return e.forEach(r=>{const s=this.Xr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){ve(this.ni(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return x.forEach(n.mutations,s=>{const i=new Qe(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Zr=r})}ir(e){}containsKey(e,n){const r=new Qe(n,0),s=this.Zr.firstAfterOrEqual(r);return x.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,x.resolve()}ni(e,n){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const n=this.ei(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class _S{constructor(e){this.ri=e,this.docs=function(){return new Ve(Y.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.ri(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return x.resolve(r?r.document.mutableCopy():dt.newInvalidDocument(n))}getEntries(e,n){let r=$n();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():dt.newInvalidDocument(s))}),x.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=$n();const o=n.path,c=new Y(o.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:h,value:{document:f}}=l.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||zA(qA(f),r)<=0||(s.has(f.key)||lc(n,f))&&(i=i.insert(f.key,f.mutableCopy()))}return x.resolve(i)}getAllFromCollectionGroup(e,n,r,s){ne(9500)}ii(e,n){return x.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new yS(this)}getSize(e){return x.resolve(this.size)}}class yS extends uS{constructor(e){super(),this.Nr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.Nr.addEntry(e,s)):this.Nr.removeEntry(r)}),x.waitFor(n)}getFromCache(e,n){return this.Nr.getEntry(e,n)}getAllFromCache(e,n){return this.Nr.getEntries(e,n)}}/**
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
 */class ES{constructor(e){this.persistence=e,this.si=new fs(n=>Du(n),ku),this.lastRemoteSnapshotVersion=oe.min(),this.highestTargetId=0,this.oi=0,this._i=new Uu,this.targetCount=0,this.ai=Ys.ur()}forEachTarget(e,n){return this.si.forEach((r,s)=>n(s)),x.resolve()}getLastRemoteSnapshotVersion(e){return x.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return x.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),x.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.oi&&(this.oi=n),x.resolve()}Pr(e){this.si.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ai=new Ys(n),this.highestTargetId=n),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,n){return this.Pr(n),this.targetCount+=1,x.resolve()}updateTargetData(e,n){return this.Pr(n),x.resolve()}removeTargetData(e,n){return this.si.delete(n.target),this._i.jr(n.targetId),this.targetCount-=1,x.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.si.forEach((o,c)=>{c.sequenceNumber<=n&&r.get(c.targetId)===null&&(this.si.delete(o),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)}),x.waitFor(i).next(()=>s)}getTargetCount(e){return x.resolve(this.targetCount)}getTargetData(e,n){const r=this.si.get(n)||null;return x.resolve(r)}addMatchingKeys(e,n,r){return this._i.Wr(n,r),x.resolve()}removeMatchingKeys(e,n,r){this._i.zr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),x.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this._i.jr(n),x.resolve()}getMatchingKeysForTargetId(e,n){const r=this._i.Hr(n);return x.resolve(r)}containsKey(e,n){return x.resolve(this._i.containsKey(n))}}/**
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
 */class F_{constructor(e,n){this.ui={},this.overlays={},this.ci=new sc(0),this.li=!1,this.li=!0,this.hi=new mS,this.referenceDelegate=e(this),this.Pi=new ES(this),this.indexManager=new rS,this.remoteDocumentCache=function(s){return new _S(s)}(r=>this.referenceDelegate.Ti(r)),this.serializer=new tS(n),this.Ii=new dS(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new pS,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ui[e.toKey()];return r||(r=new gS(n,this.referenceDelegate),this.ui[e.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,n,r){Q("MemoryPersistence","Starting transaction:",e);const s=new TS(this.ci.next());return this.referenceDelegate.Ei(),r(s).next(i=>this.referenceDelegate.di(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ai(e,n){return x.or(Object.values(this.ui).map(r=>()=>r.containsKey(e,n)))}}class TS extends GA{constructor(e){super(),this.currentSequenceNumber=e}}class Fu{constructor(e){this.persistence=e,this.Ri=new Uu,this.Vi=null}static mi(e){return new Fu(e)}get fi(){if(this.Vi)return this.Vi;throw ne(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.fi.delete(r.toString()),x.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.fi.add(r.toString()),x.resolve()}markPotentiallyOrphaned(e,n){return this.fi.add(n.toString()),x.resolve()}removeTarget(e,n){this.Ri.jr(n.targetId).forEach(s=>this.fi.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.fi.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Ei(){this.Vi=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return x.forEach(this.fi,r=>{const s=Y.fromPath(r);return this.gi(e,s).next(i=>{i||n.removeEntry(s,oe.min())})}).next(()=>(this.Vi=null,n.apply(e)))}updateLimboDocument(e,n){return this.gi(e,n).next(r=>{r?this.fi.delete(n.toString()):this.fi.add(n.toString())})}Ti(e){return 0}gi(e,n){return x.or([()=>x.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ai(e,n)])}}class Da{constructor(e,n){this.persistence=e,this.pi=new fs(r=>YA(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=lS(this,n)}static mi(e,n){return new Da(e,n)}Ei(){}di(e){return x.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}gr(e){const n=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}wr(e){let n=0;return this.pr(e,r=>{n++}).next(()=>n)}pr(e,n){return x.forEach(this.pi,(r,s)=>this.br(e,r,s).next(i=>i?x.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ii(e,o=>this.br(e,o,n).next(c=>{c||(r++,i.removeEntry(o,oe.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.pi.set(n,e.currentSequenceNumber),x.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),x.resolve()}removeReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),x.resolve()}updateLimboDocument(e,n){return this.pi.set(n,e.currentSequenceNumber),x.resolve()}Ti(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=ca(e.data.value)),n}br(e,n,r){return x.or([()=>this.persistence.Ai(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.pi.get(n);return x.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Bu{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Es=r,this.ds=s}static As(e,n){let r=de(),s=de();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Bu(e,n.fromCache,r,s)}}/**
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
 */class vS{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class IS{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=function(){return mv()?8:KA(_t())>0?6:4}()}initialize(e,n){this.ps=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.ys(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.ws(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new vS;return this.Ss(e,n,o).next(c=>{if(i.result=c,this.Vs)return this.bs(e,n,o,c.size)})}).next(()=>i.result)}bs(e,n,r,s){return r.documentReadCount<this.fs?(Ss()<=he.DEBUG&&Q("QueryEngine","SDK will not create cache indexes for query:",Rs(n),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),x.resolve()):(Ss()<=he.DEBUG&&Q("QueryEngine","Query:",Rs(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.gs*s?(Ss()<=he.DEBUG&&Q("QueryEngine","The SDK decides to create cache indexes for query:",Rs(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,mn(n))):x.resolve())}ys(e,n){if(Od(n))return x.resolve(null);let r=mn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Pa(n,null,"F"),r=mn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=de(...i);return this.ps.getDocuments(e,o).next(c=>this.indexManager.getMinOffset(e,r).next(l=>{const h=this.Ds(n,c);return this.Cs(n,h,o,l.readTime)?this.ys(e,Pa(n,null,"F")):this.vs(e,h,n,l)}))})))}ws(e,n,r,s){return Od(n)||s.isEqual(oe.min())?x.resolve(null):this.ps.getDocuments(e,r).next(i=>{const o=this.Ds(n,i);return this.Cs(n,o,r,s)?x.resolve(null):(Ss()<=he.DEBUG&&Q("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Rs(n)),this.vs(e,o,n,HA(s,Zi)).next(c=>c))})}Ds(e,n){let r=new We(g_(e));return n.forEach((s,i)=>{lc(e,i)&&(r=r.add(i))}),r}Cs(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ss(e,n,r){return Ss()<=he.DEBUG&&Q("QueryEngine","Using full collection scan to execute query:",Rs(n)),this.ps.getDocumentsMatchingQuery(e,n,yr.min(),r)}vs(e,n,r,s){return this.ps.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */const $u="LocalStore",wS=3e8;class AS{constructor(e,n,r,s){this.persistence=e,this.Fs=n,this.serializer=s,this.Ms=new Ve(fe),this.xs=new fs(i=>Du(i),ku),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(r)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new fS(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ms))}}function bS(t,e,n,r){return new AS(t,e,n,r)}async function B_(t,e){const n=ce(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.Bs(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],c=[];let l=de();for(const h of s){o.push(h.batchId);for(const f of h.mutations)l=l.add(f.key)}for(const h of i){c.push(h.batchId);for(const f of h.mutations)l=l.add(f.key)}return n.localDocuments.getDocuments(r,l).next(h=>({Ls:h,removedBatchIds:o,addedBatchIds:c}))})})}function SS(t,e){const n=ce(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.Ns.newChangeBuffer({trackRemovals:!0});return function(c,l,h,f){const p=h.batch,g=p.keys();let I=x.resolve();return g.forEach(P=>{I=I.next(()=>f.getEntry(l,P)).next(R=>{const O=h.docVersions.get(P);ve(O!==null,48541),R.version.compareTo(O)<0&&(p.applyToRemoteDocument(R,h),R.isValidDocument()&&(R.setReadTime(h.commitVersion),f.addEntry(R)))})}),I.next(()=>c.mutationQueue.removeMutationBatch(l,p))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let l=de();for(let h=0;h<c.mutationResults.length;++h)c.mutationResults[h].transformResults.length>0&&(l=l.add(c.batch.mutations[h].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function $_(t){const e=ce(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Pi.getLastRemoteSnapshotVersion(n))}function RS(t,e){const n=ce(t),r=e.snapshotVersion;let s=n.Ms;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Ns.newChangeBuffer({trackRemovals:!0});s=n.Ms;const c=[];e.targetChanges.forEach((f,p)=>{const g=s.get(p);if(!g)return;c.push(n.Pi.removeMatchingKeys(i,f.removedDocuments,p).next(()=>n.Pi.addMatchingKeys(i,f.addedDocuments,p)));let I=g.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?I=I.withResumeToken(ot.EMPTY_BYTE_STRING,oe.min()).withLastLimboFreeSnapshotVersion(oe.min()):f.resumeToken.approximateByteSize()>0&&(I=I.withResumeToken(f.resumeToken,r)),s=s.insert(p,I),function(R,O,V){return R.resumeToken.approximateByteSize()===0||O.snapshotVersion.toMicroseconds()-R.snapshotVersion.toMicroseconds()>=wS?!0:V.addedDocuments.size+V.modifiedDocuments.size+V.removedDocuments.size>0}(g,I,f)&&c.push(n.Pi.updateTargetData(i,I))});let l=$n(),h=de();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&c.push(n.persistence.referenceDelegate.updateLimboDocument(i,f))}),c.push(CS(i,o,e.documentUpdates).next(f=>{l=f.ks,h=f.qs})),!r.isEqual(oe.min())){const f=n.Pi.getLastRemoteSnapshotVersion(i).next(p=>n.Pi.setTargetsMetadata(i,i.currentSequenceNumber,r));c.push(f)}return x.waitFor(c).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,l,h)).next(()=>l)}).then(i=>(n.Ms=s,i))}function CS(t,e,n){let r=de(),s=de();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=$n();return n.forEach((c,l)=>{const h=i.get(c);l.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(oe.min())?(e.removeEntry(c,l.readTime),o=o.insert(c,l)):!h.isValidDocument()||l.version.compareTo(h.version)>0||l.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(l),o=o.insert(c,l)):Q($u,"Ignoring outdated watch update for ",c,". Current version:",h.version," Watch version:",l.version)}),{ks:o,qs:s}})}function PS(t,e){const n=ce(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Pu),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function OS(t,e){const n=ce(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Pi.getTargetData(r,e).next(i=>i?(s=i,x.resolve(s)):n.Pi.allocateTargetId(r).next(o=>(s=new cr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Pi.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.Ms.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(r.targetId,r),n.xs.set(e,r.targetId)),r})}async function Hl(t,e,n){const r=ce(t),s=r.Ms.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!ni(o))throw o;Q($u,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ms=r.Ms.remove(e),r.xs.delete(s.target)}function Hd(t,e,n){const r=ce(t);let s=oe.min(),i=de();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,h,f){const p=ce(l),g=p.xs.get(f);return g!==void 0?x.resolve(p.Ms.get(g)):p.Pi.getTargetData(h,f)}(r,o,mn(e)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(o,c.targetId).next(l=>{i=l})}).next(()=>r.Fs.getDocumentsMatchingQuery(o,e,n?s:oe.min(),n?i:de())).next(c=>(NS(r,mb(e),c),{documents:c,Qs:i})))}function NS(t,e,n){let r=t.Os.get(e)||oe.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.Os.set(e,r)}class qd{constructor(){this.activeTargetIds=vb()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class DS{constructor(){this.Mo=new qd,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,n,r){this.xo[e]=n}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new qd,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class kS{Oo(e){}shutdown(){}}/**
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
 */const zd="ConnectivityMonitor";class Wd{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){Q(zd,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){Q(zd,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Go=null;function ql(){return Go===null?Go=function(){return 268435456+Math.round(2147483648*Math.random())}():Go++,"0x"+Go.toString(16)}/**
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
 */const nl="RestConnection",VS={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class xS{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Uo=n+"://"+e.host,this.Ko=`projects/${r}/databases/${s}`,this.Wo=this.databaseId.database===Sa?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Go(e,n,r,s,i){const o=ql(),c=this.zo(e,n.toUriEncodedString());Q(nl,`Sending RPC '${e}' ${o}:`,c,r);const l={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(l,s,i);const{host:h}=new URL(c),f=Sr(h);return this.Jo(e,c,l,r,f).then(p=>(Q(nl,`Received RPC '${e}' ${o}: `,p),p),p=>{throw Ws(nl,`RPC '${e}' ${o} failed with error: `,p,"url: ",c,"request:",r),p})}Ho(e,n,r,s,i,o){return this.Go(e,n,r,s,i)}jo(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ei}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}zo(e,n){const r=VS[e];return`${this.Uo}/v1/${n}:${r}`}terminate(){}}/**
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
 */class LS{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
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
 */const lt="WebChannelConnection";class MS extends xS{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,n,r,s,i){const o=ql();return new Promise((c,l)=>{const h=new Hg;h.setWithCredentials(!0),h.listenOnce(qg.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case aa.NO_ERROR:const p=h.getResponseJson();Q(lt,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),c(p);break;case aa.TIMEOUT:Q(lt,`RPC '${e}' ${o} timed out`),l(new K(k.DEADLINE_EXCEEDED,"Request time out"));break;case aa.HTTP_ERROR:const g=h.getStatus();if(Q(lt,`RPC '${e}' ${o} failed with status:`,g,"response text:",h.getResponseText()),g>0){let I=h.getResponseJson();Array.isArray(I)&&(I=I[0]);const P=I==null?void 0:I.error;if(P&&P.status&&P.message){const R=function(V){const q=V.toLowerCase().replace(/_/g,"-");return Object.values(k).indexOf(q)>=0?q:k.UNKNOWN}(P.status);l(new K(R,P.message))}else l(new K(k.UNKNOWN,"Server responded with status "+h.getStatus()))}else l(new K(k.UNAVAILABLE,"Connection failed."));break;default:ne(9055,{l_:e,streamId:o,h_:h.getLastErrorCode(),P_:h.getLastError()})}}finally{Q(lt,`RPC '${e}' ${o} completed.`)}});const f=JSON.stringify(s);Q(lt,`RPC '${e}' ${o} sending request:`,s),h.send(n,"POST",f,r,15)})}T_(e,n,r){const s=ql(),i=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Gg(),c=Wg(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(l.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(l.useFetchStreams=!0),this.jo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const f=i.join("");Q(lt,`Creating RPC '${e}' stream ${s}: ${f}`,l);const p=o.createWebChannel(f,l);this.I_(p);let g=!1,I=!1;const P=new LS({Yo:O=>{I?Q(lt,`Not sending because RPC '${e}' stream ${s} is closed:`,O):(g||(Q(lt,`Opening RPC '${e}' stream ${s} transport.`),p.open(),g=!0),Q(lt,`RPC '${e}' stream ${s} sending:`,O),p.send(O))},Zo:()=>p.close()}),R=(O,V,q)=>{O.listen(V,W=>{try{q(W)}catch(j){setTimeout(()=>{throw j},0)}})};return R(p,Ni.EventType.OPEN,()=>{I||(Q(lt,`RPC '${e}' stream ${s} transport opened.`),P.o_())}),R(p,Ni.EventType.CLOSE,()=>{I||(I=!0,Q(lt,`RPC '${e}' stream ${s} transport closed`),P.a_(),this.E_(p))}),R(p,Ni.EventType.ERROR,O=>{I||(I=!0,Ws(lt,`RPC '${e}' stream ${s} transport errored. Name:`,O.name,"Message:",O.message),P.a_(new K(k.UNAVAILABLE,"The operation could not be completed")))}),R(p,Ni.EventType.MESSAGE,O=>{var V;if(!I){const q=O.data[0];ve(!!q,16349);const W=q,j=(W==null?void 0:W.error)||((V=W[0])==null?void 0:V.error);if(j){Q(lt,`RPC '${e}' stream ${s} received error:`,j);const ee=j.status;let ie=function(_){const A=je[_];if(A!==void 0)return C_(A)}(ee),b=j.message;ie===void 0&&(ie=k.INTERNAL,b="Unknown error status: "+ee+" with message "+j.message),I=!0,P.a_(new K(ie,b)),p.close()}else Q(lt,`RPC '${e}' stream ${s} received:`,q),P.u_(q)}}),R(c,zg.STAT_EVENT,O=>{O.stat===Dl.PROXY?Q(lt,`RPC '${e}' stream ${s} detected buffering proxy`):O.stat===Dl.NOPROXY&&Q(lt,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{P.__()},0),P}terminate(){this.c_.forEach(e=>e.close()),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter(n=>n===e)}}function rl(){return typeof document<"u"?document:null}/**
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
 */function dc(t){return new $b(t,!0)}/**
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
 */class j_{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Mi=e,this.timerId=n,this.d_=r,this.A_=s,this.R_=i,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const n=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,n-r);s>0&&Q("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.V_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,s,()=>(this.f_=Date.now(),e())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
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
 */const Gd="PersistentStream";class H_{constructor(e,n,r,s,i,o,c,l){this.Mi=e,this.S_=r,this.b_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new j_(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===k.RESOURCE_EXHAUSTED?(Bn(n.toString()),Bn("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===k.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(n)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.D_===n&&this.G_(r,s)},r=>{e(()=>{const s=new K(k.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)})})}G_(e,n){const r=this.W_(this.D_);this.stream=this.j_(e,n),this.stream.Xo(()=>{r(()=>this.listener.Xo())}),this.stream.t_(()=>{r(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(s=>{r(()=>this.z_(s))}),this.stream.onMessage(s=>{r(()=>++this.F_==1?this.J_(s):this.onNext(s))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return Q(Gd,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return n=>{this.Mi.enqueueAndForget(()=>this.D_===e?n():(Q(Gd,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class US extends H_{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=qb(this.serializer,e),r=function(i){if(!("targetChange"in i))return oe.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?oe.min():o.readTime?_n(o.readTime):oe.min()}(e);return this.listener.H_(n,r)}Y_(e){const n={};n.database=jl(this.serializer),n.addTarget=function(i,o){let c;const l=o.target;if(c=Ml(l)?{documents:Gb(i,l)}:{query:Kb(i,l).ft},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=N_(i,o.resumeToken);const h=Fl(i,o.expectedCount);h!==null&&(c.expectedCount=h)}else if(o.snapshotVersion.compareTo(oe.min())>0){c.readTime=Na(i,o.snapshotVersion.toTimestamp());const h=Fl(i,o.expectedCount);h!==null&&(c.expectedCount=h)}return c}(this.serializer,e);const r=Yb(this.serializer,e);r&&(n.labels=r),this.q_(n)}Z_(e){const n={};n.database=jl(this.serializer),n.removeTarget=e,this.q_(n)}}class FS extends H_{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return ve(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,ve(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){ve(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=Wb(e.writeResults,e.commitTime),r=_n(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=jl(this.serializer),this.q_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>zb(this.serializer,r))};this.q_(n)}}/**
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
 */class BS{}class $S extends BS{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new K(k.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,n,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Go(e,Bl(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new K(k.UNKNOWN,i.toString())})}Ho(e,n,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,c])=>this.connection.Ho(e,Bl(n,r),s,o,c,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new K(k.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class jS{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Bn(n),this.aa=!1):Q("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const ts="RemoteStore";class HS{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=i,this.Aa.Oo(o=>{r.enqueueAndForget(async()=>{ps(this)&&(Q(ts,"Restarting streams for network reachability change."),await async function(l){const h=ce(l);h.Ea.add(4),await So(h),h.Ra.set("Unknown"),h.Ea.delete(4),await pc(h)}(this))})}),this.Ra=new jS(r,s)}}async function pc(t){if(ps(t))for(const e of t.da)await e(!0)}async function So(t){for(const e of t.da)await e(!1)}function q_(t,e){const n=ce(t);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),zu(n)?qu(n):si(n).O_()&&Hu(n,e))}function ju(t,e){const n=ce(t),r=si(n);n.Ia.delete(e),r.O_()&&z_(n,e),n.Ia.size===0&&(r.O_()?r.L_():ps(n)&&n.Ra.set("Unknown"))}function Hu(t,e){if(t.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(oe.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}si(t).Y_(e)}function z_(t,e){t.Va.Ue(e),si(t).Z_(e)}function qu(t){t.Va=new Mb({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),si(t).start(),t.Ra.ua()}function zu(t){return ps(t)&&!si(t).x_()&&t.Ia.size>0}function ps(t){return ce(t).Ea.size===0}function W_(t){t.Va=void 0}async function qS(t){t.Ra.set("Online")}async function zS(t){t.Ia.forEach((e,n)=>{Hu(t,e)})}async function WS(t,e){W_(t),zu(t)?(t.Ra.ha(e),qu(t)):t.Ra.set("Unknown")}async function GS(t,e,n){if(t.Ra.set("Online"),e instanceof O_&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const c of i.targetIds)s.Ia.has(c)&&(await s.remoteSyncer.rejectListen(c,o),s.Ia.delete(c),s.Va.removeTarget(c))}(t,e)}catch(r){Q(ts,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await ka(t,r)}else if(e instanceof ha?t.Va.Ze(e):e instanceof P_?t.Va.st(e):t.Va.tt(e),!n.isEqual(oe.min()))try{const r=await $_(t.localStore);n.compareTo(r)>=0&&await function(i,o){const c=i.Va.Tt(o);return c.targetChanges.forEach((l,h)=>{if(l.resumeToken.approximateByteSize()>0){const f=i.Ia.get(h);f&&i.Ia.set(h,f.withResumeToken(l.resumeToken,o))}}),c.targetMismatches.forEach((l,h)=>{const f=i.Ia.get(l);if(!f)return;i.Ia.set(l,f.withResumeToken(ot.EMPTY_BYTE_STRING,f.snapshotVersion)),z_(i,l);const p=new cr(f.target,l,h,f.sequenceNumber);Hu(i,p)}),i.remoteSyncer.applyRemoteEvent(c)}(t,n)}catch(r){Q(ts,"Failed to raise snapshot:",r),await ka(t,r)}}async function ka(t,e,n){if(!ni(e))throw e;t.Ea.add(1),await So(t),t.Ra.set("Offline"),n||(n=()=>$_(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{Q(ts,"Retrying IndexedDB access"),await n(),t.Ea.delete(1),await pc(t)})}function G_(t,e){return e().catch(n=>ka(t,n,e))}async function mc(t){const e=ce(t),n=Ir(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Pu;for(;KS(e);)try{const s=await PS(e.localStore,r);if(s===null){e.Ta.length===0&&n.L_();break}r=s.batchId,QS(e,s)}catch(s){await ka(e,s)}K_(e)&&Q_(e)}function KS(t){return ps(t)&&t.Ta.length<10}function QS(t,e){t.Ta.push(e);const n=Ir(t);n.O_()&&n.X_&&n.ea(e.mutations)}function K_(t){return ps(t)&&!Ir(t).x_()&&t.Ta.length>0}function Q_(t){Ir(t).start()}async function YS(t){Ir(t).ra()}async function JS(t){const e=Ir(t);for(const n of t.Ta)e.ea(n.mutations)}async function XS(t,e,n){const r=t.Ta.shift(),s=xu.from(r,e,n);await G_(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await mc(t)}async function ZS(t,e){e&&Ir(t).X_&&await async function(r,s){if(function(o){return Vb(o)&&o!==k.ABORTED}(s.code)){const i=r.Ta.shift();Ir(r).B_(),await G_(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await mc(r)}}(t,e),K_(t)&&Q_(t)}async function Kd(t,e){const n=ce(t);n.asyncQueue.verifyOperationInProgress(),Q(ts,"RemoteStore received new credentials");const r=ps(n);n.Ea.add(3),await So(n),r&&n.Ra.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await pc(n)}async function eR(t,e){const n=ce(t);e?(n.Ea.delete(2),await pc(n)):e||(n.Ea.add(2),await So(n),n.Ra.set("Unknown"))}function si(t){return t.ma||(t.ma=function(n,r,s){const i=ce(n);return i.sa(),new US(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Xo:qS.bind(null,t),t_:zS.bind(null,t),r_:WS.bind(null,t),H_:GS.bind(null,t)}),t.da.push(async e=>{e?(t.ma.B_(),zu(t)?qu(t):t.Ra.set("Unknown")):(await t.ma.stop(),W_(t))})),t.ma}function Ir(t){return t.fa||(t.fa=function(n,r,s){const i=ce(n);return i.sa(),new FS(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Xo:()=>Promise.resolve(),t_:YS.bind(null,t),r_:ZS.bind(null,t),ta:JS.bind(null,t),na:XS.bind(null,t)}),t.da.push(async e=>{e?(t.fa.B_(),await mc(t)):(await t.fa.stop(),t.Ta.length>0&&(Q(ts,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.fa}/**
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
 */class Wu{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new fr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,c=new Wu(e,n,o,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new K(k.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Gu(t,e){if(Bn("AsyncQueue",`${e}: ${t}`),ni(t))return new K(k.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Ls{static emptySet(e){return new Ls(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||Y.comparator(n.key,r.key):(n,r)=>Y.comparator(n.key,r.key),this.keyedMap=Di(),this.sortedSet=new Ve(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ls)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Ls;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class Qd{constructor(){this.ga=new Ve(Y.comparator)}track(e){const n=e.doc.key,r=this.ga.get(n);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(n,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(n):e.type===1&&r.type===2?this.ga=this.ga.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):ne(63341,{Rt:e,pa:r}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal((n,r)=>{e.push(r)}),e}}class Js{constructor(e,n,r,s,i,o,c,l,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(c=>{o.push({type:0,doc:c})}),new Js(e,n,Ls.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&cc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class tR{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class nR{constructor(){this.queries=Yd(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const s=ce(n),i=s.queries;s.queries=Yd(),i.forEach((o,c)=>{for(const l of c.Sa)l.onError(r)})})(this,new K(k.ABORTED,"Firestore shutting down"))}}function Yd(){return new fs(t=>m_(t),cc)}async function Y_(t,e){const n=ce(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.ba()&&e.Da()&&(r=2):(i=new tR,r=e.Da()?0:1);try{switch(r){case 0:i.wa=await n.onListen(s,!0);break;case 1:i.wa=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const c=Gu(o,`Initialization of query '${Rs(e.query)}' failed`);return void e.onError(c)}n.queries.set(s,i),i.Sa.push(e),e.va(n.onlineState),i.wa&&e.Fa(i.wa)&&Ku(n)}async function J_(t,e){const n=ce(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.Sa.indexOf(e);o>=0&&(i.Sa.splice(o,1),i.Sa.length===0?s=e.Da()?0:1:!i.ba()&&e.Da()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function rR(t,e){const n=ce(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const c of o.Sa)c.Fa(s)&&(r=!0);o.wa=s}}r&&Ku(n)}function sR(t,e,n){const r=ce(t),s=r.queries.get(e);if(s)for(const i of s.Sa)i.onError(n);r.queries.delete(e)}function Ku(t){t.Ca.forEach(e=>{e.next()})}var zl,Jd;(Jd=zl||(zl={})).Ma="default",Jd.Cache="cache";class X_{constructor(e,n,r){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Js(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const r=n!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=Js.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==zl.Cache}}/**
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
 */class Z_{constructor(e){this.key=e}}class ey{constructor(e){this.key=e}}class iR{constructor(e,n){this.query=e,this.Ya=n,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=de(),this.mutatedKeys=de(),this.eu=g_(e),this.tu=new Ls(this.eu)}get nu(){return this.Ya}ru(e,n){const r=n?n.iu:new Qd,s=n?n.tu:this.tu;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,p)=>{const g=s.get(f),I=lc(this.query,p)?p:null,P=!!g&&this.mutatedKeys.has(g.key),R=!!I&&(I.hasLocalMutations||this.mutatedKeys.has(I.key)&&I.hasCommittedMutations);let O=!1;g&&I?g.data.isEqual(I.data)?P!==R&&(r.track({type:3,doc:I}),O=!0):this.su(g,I)||(r.track({type:2,doc:I}),O=!0,(l&&this.eu(I,l)>0||h&&this.eu(I,h)<0)&&(c=!0)):!g&&I?(r.track({type:0,doc:I}),O=!0):g&&!I&&(r.track({type:1,doc:g}),O=!0,(l||h)&&(c=!0)),O&&(I?(o=o.add(I),i=R?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{tu:o,iu:r,Cs:c,mutatedKeys:i}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort((f,p)=>function(I,P){const R=O=>{switch(O){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ne(20277,{Rt:O})}};return R(I)-R(P)}(f.type,p.type)||this.eu(f.doc,p.doc)),this.ou(r),s=s??!1;const c=n&&!s?this._u():[],l=this.Xa.size===0&&this.current&&!s?1:0,h=l!==this.Za;return this.Za=l,o.length!==0||h?{snapshot:new Js(this.query,e.tu,i,o,e.mutatedKeys,l===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:c}:{au:c}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Qd,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(n=>this.Ya=this.Ya.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ya=this.Ya.delete(n)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=de(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))});const n=[];return e.forEach(r=>{this.Xa.has(r)||n.push(new ey(r))}),this.Xa.forEach(r=>{e.has(r)||n.push(new Z_(r))}),n}cu(e){this.Ya=e.Qs,this.Xa=de();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return Js.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const Qu="SyncEngine";class oR{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class aR{constructor(e){this.key=e,this.hu=!1}}class cR{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new fs(c=>m_(c),cc),this.Iu=new Map,this.Eu=new Set,this.du=new Ve(Y.comparator),this.Au=new Map,this.Ru=new Uu,this.Vu={},this.mu=new Map,this.fu=Ys.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function lR(t,e,n=!0){const r=oy(t);let s;const i=r.Tu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await ty(r,e,n,!0),s}async function uR(t,e){const n=oy(t);await ty(n,e,!0,!1)}async function ty(t,e,n,r){const s=await OS(t.localStore,mn(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let c;return r&&(c=await hR(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&q_(t.remoteStore,s),c}async function hR(t,e,n,r,s){t.pu=(p,g,I)=>async function(R,O,V,q){let W=O.view.ru(V);W.Cs&&(W=await Hd(R.localStore,O.query,!1).then(({documents:b})=>O.view.ru(b,W)));const j=q&&q.targetChanges.get(O.targetId),ee=q&&q.targetMismatches.get(O.targetId)!=null,ie=O.view.applyChanges(W,R.isPrimaryClient,j,ee);return Zd(R,O.targetId,ie.au),ie.snapshot}(t,p,g,I);const i=await Hd(t.localStore,e,!0),o=new iR(e,i.Qs),c=o.ru(i.documents),l=bo.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),h=o.applyChanges(c,t.isPrimaryClient,l);Zd(t,n,h.au);const f=new oR(e,n,o);return t.Tu.set(e,f),t.Iu.has(n)?t.Iu.get(n).push(e):t.Iu.set(n,[e]),h.snapshot}async function fR(t,e,n){const r=ce(t),s=r.Tu.get(e),i=r.Iu.get(s.targetId);if(i.length>1)return r.Iu.set(s.targetId,i.filter(o=>!cc(o,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Hl(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&ju(r.remoteStore,s.targetId),Wl(r,s.targetId)}).catch(ti)):(Wl(r,s.targetId),await Hl(r.localStore,s.targetId,!0))}async function dR(t,e){const n=ce(t),r=n.Tu.get(e),s=n.Iu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),ju(n.remoteStore,r.targetId))}async function pR(t,e,n){const r=vR(t);try{const s=await function(o,c){const l=ce(o),h=Ne.now(),f=c.reduce((I,P)=>I.add(P.key),de());let p,g;return l.persistence.runTransaction("Locally write mutations","readwrite",I=>{let P=$n(),R=de();return l.Ns.getEntries(I,f).next(O=>{P=O,P.forEach((V,q)=>{q.isValidDocument()||(R=R.add(V))})}).next(()=>l.localDocuments.getOverlayedDocuments(I,P)).next(O=>{p=O;const V=[];for(const q of c){const W=Pb(q,p.get(q.key).overlayedDocument);W!=null&&V.push(new ds(q.key,W,a_(W.value.mapValue),gn.exists(!0)))}return l.mutationQueue.addMutationBatch(I,h,V,c)}).next(O=>{g=O;const V=O.applyToLocalDocumentSet(p,R);return l.documentOverlayCache.saveOverlays(I,O.batchId,V)})}).then(()=>({batchId:g.batchId,changes:y_(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,c,l){let h=o.Vu[o.currentUser.toKey()];h||(h=new Ve(fe)),h=h.insert(c,l),o.Vu[o.currentUser.toKey()]=h}(r,s.batchId,n),await Ro(r,s.changes),await mc(r.remoteStore)}catch(s){const i=Gu(s,"Failed to persist write");n.reject(i)}}async function ny(t,e){const n=ce(t);try{const r=await RS(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Au.get(i);o&&(ve(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.hu=!0:s.modifiedDocuments.size>0?ve(o.hu,14607):s.removedDocuments.size>0&&(ve(o.hu,42227),o.hu=!1))}),await Ro(n,r,e)}catch(r){await ti(r)}}function Xd(t,e,n){const r=ce(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Tu.forEach((i,o)=>{const c=o.view.va(e);c.snapshot&&s.push(c.snapshot)}),function(o,c){const l=ce(o);l.onlineState=c;let h=!1;l.queries.forEach((f,p)=>{for(const g of p.Sa)g.va(c)&&(h=!0)}),h&&Ku(l)}(r.eventManager,e),s.length&&r.Pu.H_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function mR(t,e,n){const r=ce(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Au.get(e),i=s&&s.key;if(i){let o=new Ve(Y.comparator);o=o.insert(i,dt.newNoDocument(i,oe.min()));const c=de().add(i),l=new fc(oe.min(),new Map,new Ve(fe),o,c);await ny(r,l),r.du=r.du.remove(i),r.Au.delete(e),Yu(r)}else await Hl(r.localStore,e,!1).then(()=>Wl(r,e,n)).catch(ti)}async function gR(t,e){const n=ce(t),r=e.batch.batchId;try{const s=await SS(n.localStore,e);sy(n,r,null),ry(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Ro(n,s)}catch(s){await ti(s)}}async function _R(t,e,n){const r=ce(t);try{const s=await function(o,c){const l=ce(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return l.mutationQueue.lookupMutationBatch(h,c).next(p=>(ve(p!==null,37113),f=p.keys(),l.mutationQueue.removeMutationBatch(h,p))).next(()=>l.mutationQueue.performConsistencyCheck(h)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(h,f,c)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>l.localDocuments.getDocuments(h,f))})}(r.localStore,e);sy(r,e,n),ry(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Ro(r,s)}catch(s){await ti(s)}}function ry(t,e){(t.mu.get(e)||[]).forEach(n=>{n.resolve()}),t.mu.delete(e)}function sy(t,e,n){const r=ce(t);let s=r.Vu[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Vu[r.currentUser.toKey()]=s}}function Wl(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Iu.get(e))t.Tu.delete(r),n&&t.Pu.yu(r,n);t.Iu.delete(e),t.isPrimaryClient&&t.Ru.jr(e).forEach(r=>{t.Ru.containsKey(r)||iy(t,r)})}function iy(t,e){t.Eu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&(ju(t.remoteStore,n),t.du=t.du.remove(e),t.Au.delete(n),Yu(t))}function Zd(t,e,n){for(const r of n)r instanceof Z_?(t.Ru.addReference(r.key,e),yR(t,r)):r instanceof ey?(Q(Qu,"Document no longer in limbo: "+r.key),t.Ru.removeReference(r.key,e),t.Ru.containsKey(r.key)||iy(t,r.key)):ne(19791,{wu:r})}function yR(t,e){const n=e.key,r=n.path.canonicalString();t.du.get(n)||t.Eu.has(r)||(Q(Qu,"New document in limbo: "+n),t.Eu.add(r),Yu(t))}function Yu(t){for(;t.Eu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Eu.values().next().value;t.Eu.delete(e);const n=new Y(Ce.fromString(e)),r=t.fu.next();t.Au.set(r,new aR(n)),t.du=t.du.insert(n,r),q_(t.remoteStore,new cr(mn(ac(n.path)),r,"TargetPurposeLimboResolution",sc.ce))}}async function Ro(t,e,n){const r=ce(t),s=[],i=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach((c,l)=>{o.push(r.pu(l,e,n).then(h=>{var f;if((h||n)&&r.isPrimaryClient){const p=h?!h.fromCache:(f=n==null?void 0:n.targetChanges.get(l.targetId))==null?void 0:f.current;r.sharedClientState.updateQueryState(l.targetId,p?"current":"not-current")}if(h){s.push(h);const p=Bu.As(l.targetId,h);i.push(p)}}))}),await Promise.all(o),r.Pu.H_(s),await async function(l,h){const f=ce(l);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>x.forEach(h,g=>x.forEach(g.Es,I=>f.persistence.referenceDelegate.addReference(p,g.targetId,I)).next(()=>x.forEach(g.ds,I=>f.persistence.referenceDelegate.removeReference(p,g.targetId,I)))))}catch(p){if(!ni(p))throw p;Q($u,"Failed to update sequence numbers: "+p)}for(const p of h){const g=p.targetId;if(!p.fromCache){const I=f.Ms.get(g),P=I.snapshotVersion,R=I.withLastLimboFreeSnapshotVersion(P);f.Ms=f.Ms.insert(g,R)}}}(r.localStore,i))}async function ER(t,e){const n=ce(t);if(!n.currentUser.isEqual(e)){Q(Qu,"User change. New user:",e.toKey());const r=await B_(n.localStore,e);n.currentUser=e,function(i,o){i.mu.forEach(c=>{c.forEach(l=>{l.reject(new K(k.CANCELLED,o))})}),i.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ro(n,r.Ls)}}function TR(t,e){const n=ce(t),r=n.Au.get(e);if(r&&r.hu)return de().add(r.key);{let s=de();const i=n.Iu.get(e);if(!i)return s;for(const o of i){const c=n.Tu.get(o);s=s.unionWith(c.view.nu)}return s}}function oy(t){const e=ce(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=ny.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=TR.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=mR.bind(null,e),e.Pu.H_=rR.bind(null,e.eventManager),e.Pu.yu=sR.bind(null,e.eventManager),e}function vR(t){const e=ce(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=gR.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=_R.bind(null,e),e}class Va{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=dc(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return bS(this.persistence,new IS,e.initialUser,this.serializer)}Cu(e){return new F_(Fu.mi,this.serializer)}Du(e){return new DS}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Va.provider={build:()=>new Va};class IR extends Va{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){ve(this.persistence.referenceDelegate instanceof Da,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new aS(r,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?St.withCacheSize(this.cacheSizeBytes):St.DEFAULT;return new F_(r=>Da.mi(r,n),this.serializer)}}class Gl{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Xd(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=ER.bind(null,this.syncEngine),await eR(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new nR}()}createDatastore(e){const n=dc(e.databaseInfo.databaseId),r=function(i){return new MS(i)}(e.databaseInfo);return function(i,o,c,l){return new $S(i,o,c,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,c){return new HS(r,s,i,o,c)}(this.localStore,this.datastore,e.asyncQueue,n=>Xd(this.syncEngine,n,0),function(){return Wd.v()?new Wd:new kS}())}createSyncEngine(e,n){return function(s,i,o,c,l,h,f){const p=new cR(s,i,o,c,l,h);return f&&(p.gu=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=ce(s);Q(ts,"RemoteStore shutting down."),i.Ea.add(5),await So(i),i.Aa.shutdown(),i.Ra.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}Gl.provider={build:()=>new Gl};/**
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
 */class ay{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Bn("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */const wr="FirestoreClient";class wR{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=ft.UNAUTHENTICATED,this.clientId=Cu.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{Q(wr,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(Q(wr,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new fr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Gu(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function sl(t,e){t.asyncQueue.verifyOperationInProgress(),Q(wr,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await B_(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function ep(t,e){t.asyncQueue.verifyOperationInProgress();const n=await AR(t);Q(wr,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Kd(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>Kd(e.remoteStore,s)),t._onlineComponents=e}async function AR(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){Q(wr,"Using user provided OfflineComponentProvider");try{await sl(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===k.FAILED_PRECONDITION||s.code===k.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;Ws("Error using user provided cache. Falling back to memory cache: "+n),await sl(t,new Va)}}else Q(wr,"Using default OfflineComponentProvider"),await sl(t,new IR(void 0));return t._offlineComponents}async function cy(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(Q(wr,"Using user provided OnlineComponentProvider"),await ep(t,t._uninitializedComponentsProvider._online)):(Q(wr,"Using default OnlineComponentProvider"),await ep(t,new Gl))),t._onlineComponents}function bR(t){return cy(t).then(e=>e.syncEngine)}async function Kl(t){const e=await cy(t),n=e.eventManager;return n.onListen=lR.bind(null,e.syncEngine),n.onUnlisten=fR.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=uR.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=dR.bind(null,e.syncEngine),n}function SR(t,e,n={}){const r=new fr;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,c,l,h){const f=new ay({next:g=>{f.Nu(),o.enqueueAndForget(()=>J_(i,p));const I=g.docs.has(c);!I&&g.fromCache?h.reject(new K(k.UNAVAILABLE,"Failed to get document because the client is offline.")):I&&g.fromCache&&l&&l.source==="server"?h.reject(new K(k.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(g)},error:g=>h.reject(g)}),p=new X_(ac(c.path),f,{includeMetadataChanges:!0,qa:!0});return Y_(i,p)}(await Kl(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function ly(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const tp=new Map;/**
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
 */const uy="firestore.googleapis.com",np=!0;class rp{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new K(k.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=uy,this.ssl=np}else this.host=e.host,this.ssl=e.ssl??np;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=U_;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<iS)throw new K(k.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}jA("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=ly(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new K(k.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new K(k.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new K(k.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class gc{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new rp({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new K(k.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new K(k.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new rp(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new DA;switch(r.type){case"firstParty":return new LA(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new K(k.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=tp.get(n);r&&(Q("ComponentProvider","Removing Datastore"),tp.delete(n),r.terminate())}(this),Promise.resolve()}}function RR(t,e,n,r={}){var h;t=Ln(t,gc);const s=Sr(e),i=t._getSettings(),o={...i,emulatorOptions:t._getEmulatorOptions()},c=`${e}:${n}`;s&&(fu(`https://${c}`),du("Firestore",!0)),i.host!==uy&&i.host!==c&&Ws("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const l={...i,host:c,ssl:s,emulatorOptions:r};if(!Xr(l,o)&&(t._setSettings(l),r.mockUserToken)){let f,p;if(typeof r.mockUserToken=="string")f=r.mockUserToken,p=ft.MOCK_USER;else{f=Vm(r.mockUserToken,(h=t._app)==null?void 0:h.options.projectId);const g=r.mockUserToken.sub||r.mockUserToken.user_id;if(!g)throw new K(k.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new ft(g)}t._authCredentials=new kA(new Qg(f,p))}}/**
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
 */class Cr{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Cr(this.firestore,e,this._query)}}class Fe{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new dr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Fe(this.firestore,e,this._key)}toJSON(){return{type:Fe._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(wo(n,Fe._jsonSchema))return new Fe(e,r||null,new Y(Ce.fromString(n.referencePath)))}}Fe._jsonSchemaVersion="firestore/documentReference/1.0",Fe._jsonSchema={type:qe("string",Fe._jsonSchemaVersion),referencePath:qe("string")};class dr extends Cr{constructor(e,n,r){super(e,n,ac(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Fe(this.firestore,null,new Y(e))}withConverter(e){return new dr(this.firestore,e,this._path)}}function hy(t,e,...n){if(t=Be(t),Yg("collection","path",e),t instanceof gc){const r=Ce.fromString(e,...n);return gd(r),new dr(t,null,r)}{if(!(t instanceof Fe||t instanceof dr))throw new K(k.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ce.fromString(e,...n));return gd(r),new dr(t.firestore,null,r)}}function ms(t,e,...n){if(t=Be(t),arguments.length===1&&(e=Cu.newId()),Yg("doc","path",e),t instanceof gc){const r=Ce.fromString(e,...n);return md(r),new Fe(t,null,new Y(r))}{if(!(t instanceof Fe||t instanceof dr))throw new K(k.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ce.fromString(e,...n));return md(r),new Fe(t.firestore,t instanceof dr?t.converter:null,new Y(r))}}/**
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
 */const sp="AsyncQueue";class ip{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new j_(this,"async_queue_retry"),this._c=()=>{const r=rl();r&&Q(sp,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=rl();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=rl();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const n=new fr;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xu.push(e),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!ni(e))throw e;Q(sp,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const n=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,Bn("INTERNAL UNHANDLED ERROR: ",op(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const s=Wu.createAndSchedule(this,e,n,r,i=>this.hc(i));return this.tc.push(s),s}uc(){this.nc&&ne(47125,{Pc:op(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()})}dc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function op(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
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
 */function ap(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}class Xs extends gc{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new ip,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new ip(e),this._firestoreClient=void 0,await e}}}function CR(t,e){const n=typeof t=="object"?t:gu(),r=typeof t=="string"?t:Sa,s=Ya(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=Nm("firestore");i&&RR(s,...i)}return s}function Ju(t){if(t._terminated)throw new K(k.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||PR(t),t._firestoreClient}function PR(t){var r,s,i;const e=t._freezeSettings(),n=function(c,l,h,f){return new ZA(c,l,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,ly(f.experimentalLongPollingOptions),f.useFetchStreams,f.isUsingEmulator)}(t._databaseId,((r=t._app)==null?void 0:r.options.appId)||"",t._persistenceKey,e);t._componentsProvider||(s=e.localCache)!=null&&s._offlineComponentProvider&&((i=e.localCache)!=null&&i._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new wR(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(c){const l=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(l),_online:l}}(t._componentsProvider))}/**
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
 */class Mt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Mt(ot.fromBase64String(e))}catch(n){throw new K(k.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Mt(ot.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Mt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(wo(e,Mt._jsonSchema))return Mt.fromBase64String(e.bytes)}}Mt._jsonSchemaVersion="firestore/bytes/1.0",Mt._jsonSchema={type:qe("string",Mt._jsonSchemaVersion),bytes:qe("string")};/**
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
 */class Xu{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new K(k.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new tt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Zu{constructor(e){this._methodName=e}}/**
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
 */class yn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new K(k.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new K(k.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return fe(this._lat,e._lat)||fe(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:yn._jsonSchemaVersion}}static fromJSON(e){if(wo(e,yn._jsonSchema))return new yn(e.latitude,e.longitude)}}yn._jsonSchemaVersion="firestore/geoPoint/1.0",yn._jsonSchema={type:qe("string",yn._jsonSchemaVersion),latitude:qe("number"),longitude:qe("number")};/**
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
 */class En{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:En._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(wo(e,En._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new En(e.vectorValues);throw new K(k.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}En._jsonSchemaVersion="firestore/vectorValue/1.0",En._jsonSchema={type:qe("string",En._jsonSchemaVersion),vectorValues:qe("object")};/**
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
 */const OR=/^__.*__$/;class NR{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new ds(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ao(e,this.data,n,this.fieldTransforms)}}function fy(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ne(40011,{Ac:t})}}class eh{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Rc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new eh({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){var s;const n=(s=this.path)==null?void 0:s.child(e),r=this.Vc({path:n,fc:!1});return r.gc(e),r}yc(e){var s;const n=(s=this.path)==null?void 0:s.child(e),r=this.Vc({path:n,fc:!1});return r.Rc(),r}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return xa(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(fy(this.Ac)&&OR.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class DR{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||dc(e)}Cc(e,n,r,s=!1){return new eh({Ac:e,methodName:n,Dc:r,path:tt.emptyPath(),fc:!1,bc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function th(t){const e=t._freezeSettings(),n=dc(t._databaseId);return new DR(t._databaseId,!!e.ignoreUndefinedProperties,n)}function dy(t,e,n,r,s,i={}){const o=t.Cc(i.merge||i.mergeFields?2:0,e,n,s);gy("Data must be an object, but it was:",o,r);const c=py(r,o);let l,h;if(i.merge)l=new Wt(o.fieldMask),h=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const p of i.mergeFields){const g=VR(e,p,n);if(!o.contains(g))throw new K(k.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);LR(f,g)||f.push(g)}l=new Wt(f),h=o.fieldTransforms.filter(p=>l.covers(p.field))}else l=null,h=o.fieldTransforms;return new NR(new Lt(c),l,h)}class nh extends Zu{_toFieldTransform(e){return new bb(e.path,new so)}isEqual(e){return e instanceof nh}}function kR(t,e,n,r=!1){return rh(n,t.Cc(r?4:3,e))}function rh(t,e){if(my(t=Be(t)))return gy("Unsupported field value:",e,t),py(t,e);if(t instanceof Zu)return function(r,s){if(!fy(s.Ac))throw s.Sc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Sc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const c of r){let l=rh(c,s.wc(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=Be(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Ib(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Ne.fromDate(r);return{timestampValue:Na(s.serializer,i)}}if(r instanceof Ne){const i=new Ne(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Na(s.serializer,i)}}if(r instanceof yn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Mt)return{bytesValue:N_(s.serializer,r._byteString)};if(r instanceof Fe){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Sc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Mu(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof En)return function(o,c){return{mapValue:{fields:{[i_]:{stringValue:o_},[Ra]:{arrayValue:{values:o.toArray().map(h=>{if(typeof h!="number")throw c.Sc("VectorValues must only contain numeric values.");return Vu(c.serializer,h)})}}}}}}(r,s);throw s.Sc(`Unsupported field value: ${rc(r)}`)}(t,e)}function py(t,e){const n={};return Zg(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):hs(t,(r,s)=>{const i=rh(s,e.mc(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function my(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ne||t instanceof yn||t instanceof Mt||t instanceof Fe||t instanceof Zu||t instanceof En)}function gy(t,e,n){if(!my(n)||!Jg(n)){const r=rc(n);throw r==="an object"?e.Sc(t+" a custom object"):e.Sc(t+" "+r)}}function VR(t,e,n){if((e=Be(e))instanceof Xu)return e._internalPath;if(typeof e=="string")return _y(t,e);throw xa("Field path arguments must be of type string or ",t,!1,void 0,n)}const xR=new RegExp("[~\\*/\\[\\]]");function _y(t,e,n){if(e.search(xR)>=0)throw xa(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Xu(...e.split("."))._internalPath}catch{throw xa(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function xa(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let c=`Function ${e}() called with invalid data`;n&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new K(k.INVALID_ARGUMENT,c+t+l)}function LR(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class yy{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Fe(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new MR(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(_c("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class MR extends yy{data(){return super.data()}}function _c(t,e){return typeof e=="string"?_y(t,e):e instanceof Xu?e._internalPath:e._delegate._internalPath}/**
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
 */function UR(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new K(k.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class sh{}class ih extends sh{}function cp(t,e,...n){let r=[];e instanceof sh&&r.push(e),r=r.concat(n),function(i){const o=i.filter(l=>l instanceof oh).length,c=i.filter(l=>l instanceof yc).length;if(o>1||o>0&&c>0)throw new K(k.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class yc extends ih{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new yc(e,n,r)}_apply(e){const n=this._parse(e);return Ey(e._query,n),new Cr(e.firestore,e.converter,Ul(e._query,n))}_parse(e){const n=th(e.firestore);return function(i,o,c,l,h,f,p){let g;if(h.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new K(k.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){fp(p,f);const P=[];for(const R of p)P.push(hp(l,i,R));g={arrayValue:{values:P}}}else g=hp(l,i,p)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||fp(p,f),g=kR(c,o,p,f==="in"||f==="not-in");return He.create(h,f,g)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function FR(t,e,n){const r=e,s=_c("where",t);return yc._create(s,r,n)}class oh extends sh{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new oh(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Xt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const c=i.getFlattenedFilters();for(const l of c)Ey(o,l),o=Ul(o,l)}(e._query,n),new Cr(e.firestore,e.converter,Ul(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class ah extends ih{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new ah(e,n)}_apply(e){const n=function(s,i,o){if(s.startAt!==null)throw new K(k.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new K(k.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new ro(i,o)}(e._query,this._field,this._direction);return new Cr(e.firestore,e.converter,function(s,i){const o=s.explicitOrderBy.concat([i]);return new ri(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function lp(t,e="asc"){const n=e,r=_c("orderBy",t);return ah._create(r,n)}class ch extends ih{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new ch(e,n,r)}_apply(e){return new Cr(e.firestore,e.converter,Pa(e._query,this._limit,this._limitType))}}function up(t){return ch._create("limit",t,"F")}function hp(t,e,n){if(typeof(n=Be(n))=="string"){if(n==="")throw new K(k.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!p_(e)&&n.indexOf("/")!==-1)throw new K(k.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Ce.fromString(n));if(!Y.isDocumentKey(r))throw new K(k.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Ad(t,new Y(r))}if(n instanceof Fe)return Ad(t,n._key);throw new K(k.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${rc(n)}.`)}function fp(t,e){if(!Array.isArray(t)||t.length===0)throw new K(k.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Ey(t,e){const n=function(s,i){for(const o of s)for(const c of o.getFlattenedFilters())if(i.indexOf(c.op)>=0)return c.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new K(k.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new K(k.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class BR{convertValue(e,n="none"){switch(vr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ue(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Tr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw ne(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return hs(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var r,s,i;const n=(i=(s=(r=e.fields)==null?void 0:r[Ra].arrayValue)==null?void 0:s.values)==null?void 0:i.map(o=>Ue(o.doubleValue));return new En(n)}convertGeoPoint(e){return new yn(Ue(e.latitude),Ue(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=oc(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(eo(e));default:return null}}convertTimestamp(e){const n=Er(e);return new Ne(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ce.fromString(e);ve(M_(r),9688,{name:e});const s=new to(r.get(1),r.get(3)),i=new Y(r.popFirst(5));return s.isEqual(n)||Bn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function Ty(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class Vi{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Kr extends yy{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new fa(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(_c("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new K(k.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=Kr._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Kr._jsonSchemaVersion="firestore/documentSnapshot/1.0",Kr._jsonSchema={type:qe("string",Kr._jsonSchemaVersion),bundleSource:qe("string","DocumentSnapshot"),bundleName:qe("string"),bundle:qe("string")};class fa extends Kr{data(e={}){return super.data(e)}}class Ms{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Vi(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new fa(this._firestore,this._userDataWriter,r.key,r,new Vi(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new K(k.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(c=>{const l=new fa(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Vi(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>i||c.type!==3).map(c=>{const l=new fa(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Vi(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,f=-1;return c.type!==0&&(h=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),f=o.indexOf(c.doc.key)),{type:$R(c.type),doc:l,oldIndex:h,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new K(k.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Ms._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Cu.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(n.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function $R(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ne(61501,{type:t})}}/**
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
 */function La(t){t=Ln(t,Fe);const e=Ln(t.firestore,Xs);return SR(Ju(e),t._key).then(n=>Ay(e,t,n))}Ms._jsonSchemaVersion="firestore/querySnapshot/1.0",Ms._jsonSchema={type:qe("string",Ms._jsonSchemaVersion),bundleSource:qe("string","QuerySnapshot"),bundleName:qe("string"),bundle:qe("string")};class vy extends BR{constructor(e){super(),this.firestore=e}convertBytes(e){return new Mt(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Fe(this.firestore,null,n)}}function pr(t,e,n){t=Ln(t,Fe);const r=Ln(t.firestore,Xs),s=Ty(t.converter,e,n);return wy(r,[dy(th(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,gn.none())])}function jR(t,e){const n=Ln(t.firestore,Xs),r=ms(t),s=Ty(t.converter,e);return wy(n,[dy(th(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,gn.exists(!1))]).then(()=>r)}function Iy(t,...e){var l,h,f;t=Be(t);let n={includeMetadataChanges:!1,source:"default"},r=0;typeof e[r]!="object"||ap(e[r])||(n=e[r++]);const s={includeMetadataChanges:n.includeMetadataChanges,source:n.source};if(ap(e[r])){const p=e[r];e[r]=(l=p.next)==null?void 0:l.bind(p),e[r+1]=(h=p.error)==null?void 0:h.bind(p),e[r+2]=(f=p.complete)==null?void 0:f.bind(p)}let i,o,c;if(t instanceof Fe)o=Ln(t.firestore,Xs),c=ac(t._key.path),i={next:p=>{e[r]&&e[r](Ay(o,t,p))},error:e[r+1],complete:e[r+2]};else{const p=Ln(t,Cr);o=Ln(p.firestore,Xs),c=p._query;const g=new vy(o);i={next:I=>{e[r]&&e[r](new Ms(o,g,p,I))},error:e[r+1],complete:e[r+2]},UR(t._query)}return function(g,I,P,R){const O=new ay(R),V=new X_(I,O,P);return g.asyncQueue.enqueueAndForget(async()=>Y_(await Kl(g),V)),()=>{O.Nu(),g.asyncQueue.enqueueAndForget(async()=>J_(await Kl(g),V))}}(Ju(o),c,s,i)}function wy(t,e){return function(r,s){const i=new fr;return r.asyncQueue.enqueueAndForget(async()=>pR(await bR(r),s,i)),i.promise}(Ju(t),e)}function Ay(t,e,n){const r=n.docs.get(e._key),s=new vy(t);return new Kr(t,s,e._key,r,new Vi(n.hasPendingWrites,n.fromCache),e.converter)}function by(){return new nh("serverTimestamp")}(function(e,n=!0){(function(s){ei=s})(ls),Zr(new gr("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),c=new Xs(new VA(r.getProvider("auth-internal")),new MA(o,r.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new K(k.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new to(h.options.projectId,f)}(o,s),o);return i={useFetchStreams:n,...i},c._setSettings(i),c},"PUBLIC").setMultipleInstances(!0)),dn(hd,fd,e),dn(hd,fd,"esm2020")})();/**
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
 */const Sy="firebasestorage.googleapis.com",Ry="storageBucket",HR=2*60*1e3,qR=10*60*1e3;/**
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
 */class Me extends wn{constructor(e,n,r=0){super(il(e),`Firebase Storage: ${n} (${il(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Me.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return il(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Le;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Le||(Le={}));function il(t){return"storage/"+t}function lh(){const t="An unknown error occurred, please check the error payload for server response.";return new Me(Le.UNKNOWN,t)}function zR(t){return new Me(Le.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function WR(t){return new Me(Le.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function GR(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Me(Le.UNAUTHENTICATED,t)}function KR(){return new Me(Le.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function QR(t){return new Me(Le.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function YR(){return new Me(Le.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function JR(){return new Me(Le.CANCELED,"User canceled the upload/download.")}function XR(t){return new Me(Le.INVALID_URL,"Invalid URL '"+t+"'.")}function ZR(t){return new Me(Le.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function e0(){return new Me(Le.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Ry+"' property when initializing the app?")}function t0(){return new Me(Le.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function n0(){return new Me(Le.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function r0(t){return new Me(Le.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Ql(t){return new Me(Le.INVALID_ARGUMENT,t)}function Cy(){return new Me(Le.APP_DELETED,"The Firebase app was deleted.")}function s0(t){return new Me(Le.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Hi(t,e){return new Me(Le.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Ai(t){throw new Me(Le.INTERNAL_ERROR,"Internal error: "+t)}/**
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
 */class Dt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Dt.makeFromUrl(e,n)}catch{return new Dt(e,"")}if(r.path==="")return r;throw ZR(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(j){j.path.charAt(j.path.length-1)==="/"&&(j.path_=j.path_.slice(0,-1))}const o="(/(.*))?$",c=new RegExp("^gs://"+s+o,"i"),l={bucket:1,path:3};function h(j){j.path_=decodeURIComponent(j.path)}const f="v[A-Za-z0-9_]+",p=n.replace(/[.]/g,"\\."),g="(/([^?#]*).*)?$",I=new RegExp(`^https?://${p}/${f}/b/${s}/o${g}`,"i"),P={bucket:1,path:3},R=n===Sy?"(?:storage.googleapis.com|storage.cloud.google.com)":n,O="([^?#]*)",V=new RegExp(`^https?://${R}/${s}/${O}`,"i"),W=[{regex:c,indices:l,postModify:i},{regex:I,indices:P,postModify:h},{regex:V,indices:{bucket:1,path:2},postModify:h}];for(let j=0;j<W.length;j++){const ee=W[j],ie=ee.regex.exec(e);if(ie){const b=ie[ee.indices.bucket];let y=ie[ee.indices.path];y||(y=""),r=new Dt(b,y),ee.postModify(r);break}}if(r==null)throw XR(e);return r}}class i0{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function o0(t,e,n){let r=1,s=null,i=null,o=!1,c=0;function l(){return c===2}let h=!1;function f(...O){h||(h=!0,e.apply(null,O))}function p(O){s=setTimeout(()=>{s=null,t(I,l())},O)}function g(){i&&clearTimeout(i)}function I(O,...V){if(h){g();return}if(O){g(),f.call(null,O,...V);return}if(l()||o){g(),f.call(null,O,...V);return}r<64&&(r*=2);let W;c===1?(c=2,W=0):W=(r+Math.random())*1e3,p(W)}let P=!1;function R(O){P||(P=!0,g(),!h&&(s!==null?(O||(c=2),clearTimeout(s),p(0)):O||(c=1)))}return p(0),i=setTimeout(()=>{o=!0,R(!0)},n),R}function a0(t){t(!1)}/**
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
 */function c0(t){return t!==void 0}function l0(t){return typeof t=="object"&&!Array.isArray(t)}function uh(t){return typeof t=="string"||t instanceof String}function dp(t){return hh()&&t instanceof Blob}function hh(){return typeof Blob<"u"}function pp(t,e,n,r){if(r<e)throw Ql(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Ql(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function fh(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function Py(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}var Qr;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Qr||(Qr={}));/**
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
 */function u0(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
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
 */class h0{constructor(e,n,r,s,i,o,c,l,h,f,p,g=!0,I=!1){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=c,this.errorCallback_=l,this.timeout_=h,this.progressCallback_=f,this.connectionFactory_=p,this.retry=g,this.isUsingEmulator=I,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((P,R)=>{this.resolve_=P,this.reject_=R,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new Ko(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=c=>{const l=c.loaded,h=c.lengthComputable?c.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,h)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const c=i.getErrorCode()===Qr.NO_ERROR,l=i.getStatus();if(!c||u0(l,this.additionalRetryCodes_)&&this.retry){const f=i.getErrorCode()===Qr.ABORT;r(!1,new Ko(!1,null,f));return}const h=this.successCodes_.indexOf(l)!==-1;r(!0,new Ko(h,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,c=s.connection;if(s.wasSuccessCode)try{const l=this.callback_(c,c.getResponse());c0(l)?i(l):i()}catch(l){o(l)}else if(c!==null){const l=lh();l.serverResponse=c.getErrorText(),this.errorCallback_?o(this.errorCallback_(c,l)):o(l)}else if(s.canceled){const l=this.appDelete_?Cy():JR();o(l)}else{const l=YR();o(l)}};this.canceled_?n(!1,new Ko(!1,null,!0)):this.backoffId_=o0(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&a0(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Ko{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function f0(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function d0(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function p0(t,e){e&&(t["X-Firebase-GMPID"]=e)}function m0(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function g0(t,e,n,r,s,i,o=!0,c=!1){const l=Py(t.urlParams),h=t.url+l,f=Object.assign({},t.headers);return p0(f,e),f0(f,n),d0(f,i),m0(f,r),new h0(h,t.method,f,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o,c)}/**
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
 */function _0(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function y0(...t){const e=_0();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(hh())return new Blob(t);throw new Me(Le.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function E0(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function T0(t){if(typeof atob>"u")throw r0("base-64");return atob(t)}/**
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
 */const fn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class ol{constructor(e,n){this.data=e,this.contentType=n||null}}function v0(t,e){switch(t){case fn.RAW:return new ol(Oy(e));case fn.BASE64:case fn.BASE64URL:return new ol(Ny(t,e));case fn.DATA_URL:return new ol(w0(e),A0(e))}throw lh()}function Oy(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=r,o=t.charCodeAt(++n);r=65536|(i&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function I0(t){let e;try{e=decodeURIComponent(t)}catch{throw Hi(fn.DATA_URL,"Malformed data URL.")}return Oy(e)}function Ny(t,e){switch(t){case fn.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw Hi(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case fn.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw Hi(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=T0(e)}catch(s){throw s.message.includes("polyfill")?s:Hi(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class Dy{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Hi(fn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=b0(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function w0(t){const e=new Dy(t);return e.base64?Ny(fn.BASE64,e.rest):I0(e.rest)}function A0(t){return new Dy(t).contentType}function b0(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class ir{constructor(e,n){let r=0,s="";dp(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,n){if(dp(this.data_)){const r=this.data_,s=E0(r,e,n);return s===null?null:new ir(s)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new ir(r,!0)}}static getBlob(...e){if(hh()){const n=e.map(r=>r instanceof ir?r.data_:r);return new ir(y0.apply(null,n))}else{const n=e.map(o=>uh(o)?v0(fn.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const s=new Uint8Array(r);let i=0;return n.forEach(o=>{for(let c=0;c<o.length;c++)s[i++]=o[c]}),new ir(s,!0)}}uploadData(){return this.data_}}/**
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
 */function ky(t){let e;try{e=JSON.parse(t)}catch{return null}return l0(e)?e:null}/**
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
 */function S0(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function R0(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function Vy(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function C0(t,e){return e}class Et{constructor(e,n,r,s){this.server=e,this.local=n||e,this.writable=!!r,this.xform=s||C0}}let Qo=null;function P0(t){return!uh(t)||t.length<2?t:Vy(t)}function xy(){if(Qo)return Qo;const t=[];t.push(new Et("bucket")),t.push(new Et("generation")),t.push(new Et("metageneration")),t.push(new Et("name","fullPath",!0));function e(i,o){return P0(o)}const n=new Et("name");n.xform=e,t.push(n);function r(i,o){return o!==void 0?Number(o):o}const s=new Et("size");return s.xform=r,t.push(s),t.push(new Et("timeCreated")),t.push(new Et("updated")),t.push(new Et("md5Hash",null,!0)),t.push(new Et("cacheControl",null,!0)),t.push(new Et("contentDisposition",null,!0)),t.push(new Et("contentEncoding",null,!0)),t.push(new Et("contentLanguage",null,!0)),t.push(new Et("contentType",null,!0)),t.push(new Et("metadata","customMetadata",!0)),Qo=t,Qo}function O0(t,e){function n(){const r=t.bucket,s=t.fullPath,i=new Dt(r,s);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function N0(t,e,n){const r={};r.type="file";const s=n.length;for(let i=0;i<s;i++){const o=n[i];r[o.local]=o.xform(r,e[o.server])}return O0(r,t),r}function Ly(t,e,n){const r=ky(e);return r===null?null:N0(t,r,n)}function D0(t,e,n,r){const s=ky(e);if(s===null||!uh(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(h=>{const f=t.bucket,p=t.fullPath,g="/b/"+o(f)+"/o/"+o(p),I=fh(g,n,r),P=Py({alt:"media",token:h});return I+P})[0]}function k0(t,e){const n={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}class My{constructor(e,n,r,s){this.url=e,this.method=n,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function Uy(t){if(!t)throw lh()}function V0(t,e){function n(r,s){const i=Ly(t,s,e);return Uy(i!==null),i}return n}function x0(t,e){function n(r,s){const i=Ly(t,s,e);return Uy(i!==null),D0(i,s,t.host,t._protocol)}return n}function Fy(t){function e(n,r){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=KR():s=GR():n.getStatus()===402?s=WR(t.bucket):n.getStatus()===403?s=QR(t.path):s=r,s.status=n.getStatus(),s.serverResponse=r.serverResponse,s}return e}function L0(t){const e=Fy(t);function n(r,s){let i=e(r,s);return r.getStatus()===404&&(i=zR(t.path)),i.serverResponse=s.serverResponse,i}return n}function M0(t,e,n){const r=e.fullServerUrl(),s=fh(r,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,c=new My(s,i,x0(t,n),o);return c.errorHandler=L0(e),c}function U0(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function F0(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=U0(null,e)),r}function B0(t,e,n,r,s){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function c(){let W="";for(let j=0;j<2;j++)W=W+Math.random().toString().slice(2);return W}const l=c();o["Content-Type"]="multipart/related; boundary="+l;const h=F0(e,r,s),f=k0(h,n),p="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+f+`\r
--`+l+`\r
Content-Type: `+h.contentType+`\r
\r
`,g=`\r
--`+l+"--",I=ir.getBlob(p,r,g);if(I===null)throw t0();const P={name:h.fullPath},R=fh(i,t.host,t._protocol),O="POST",V=t.maxUploadRetryTime,q=new My(R,O,V0(t,n),V);return q.urlParams=P,q.headers=o,q.body=I.uploadData(),q.errorHandler=Fy(e),q}class $0{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Qr.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Qr.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Qr.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,s,i){if(this.sent_)throw Ai("cannot .send() more than once");if(Sr(e)&&r&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const o in i)i.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,i[o].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Ai("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Ai("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Ai("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Ai("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class j0 extends $0{initXhr(){this.xhr_.responseType="text"}}function By(){return new j0}/**
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
 */class ns{constructor(e,n){this._service=e,n instanceof Dt?this._location=n:this._location=Dt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new ns(e,n)}get root(){const e=new Dt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Vy(this._location.path)}get storage(){return this._service}get parent(){const e=S0(this._location.path);if(e===null)return null;const n=new Dt(this._location.bucket,e);return new ns(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw s0(e)}}function H0(t,e,n){t._throwIfRoot("uploadBytes");const r=B0(t.storage,t._location,xy(),new ir(e,!0),n);return t.storage.makeRequestWithTokens(r,By).then(s=>({metadata:s,ref:t}))}function q0(t){t._throwIfRoot("getDownloadURL");const e=M0(t.storage,t._location,xy());return t.storage.makeRequestWithTokens(e,By).then(n=>{if(n===null)throw n0();return n})}function z0(t,e){const n=R0(t._location.path,e),r=new Dt(t._location.bucket,n);return new ns(t.storage,r)}/**
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
 */function W0(t){return/^[A-Za-z]+:\/\//.test(t)}function G0(t,e){return new ns(t,e)}function $y(t,e){if(t instanceof dh){const n=t;if(n._bucket==null)throw e0();const r=new ns(n,n._bucket);return e!=null?$y(r,e):r}else return e!==void 0?z0(t,e):t}function K0(t,e){if(e&&W0(e)){if(t instanceof dh)return G0(t,e);throw Ql("To use ref(service, url), the first argument must be a Storage instance.")}else return $y(t,e)}function mp(t,e){const n=e==null?void 0:e[Ry];return n==null?null:Dt.makeFromBucketSpec(n,t)}function Q0(t,e,n,r={}){t.host=`${e}:${n}`;const s=Sr(e);s&&(fu(`https://${t.host}/b`),du("Storage",!0)),t._isUsingEmulator=!0,t._protocol=s?"https":"http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:Vm(i,t.app.options.projectId))}class dh{constructor(e,n,r,s,i,o=!1){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._isUsingEmulator=o,this._bucket=null,this._host=Sy,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=HR,this._maxUploadRetryTime=qR,this._requests=new Set,s!=null?this._bucket=Dt.makeFromBucketSpec(s,this._host):this._bucket=mp(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Dt.makeFromBucketSpec(this._url,e):this._bucket=mp(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){pp("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){pp("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if(mt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new ns(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new i0(Cy());{const o=g0(e,this._appId,r,s,n,this._firebaseVersion,i,this._isUsingEmulator);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const gp="@firebase/storage",_p="0.14.0";/**
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
 */const jy="storage";function Y0(t,e,n){return t=Be(t),H0(t,e,n)}function J0(t){return t=Be(t),q0(t)}function X0(t,e){return t=Be(t),K0(t,e)}function Z0(t=gu(),e){t=Be(t);const r=Ya(t,jy).getImmediate({identifier:e}),s=Nm("storage");return s&&eC(r,...s),r}function eC(t,e,n,r={}){Q0(t,e,n,r)}function tC(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new dh(n,r,s,e,ls)}function nC(){Zr(new gr(jy,tC,"PUBLIC").setMultipleInstances(!0)),dn(gp,_p,""),dn(gp,_p,"esm2020")}nC();const rC={apiKey:"AIzaSyC356T4tkKUo4DUwmMmOJWPboFKlpOqDJM",authDomain:"my-firebase-12fb4.firebaseapp.com",projectId:"my-firebase-12fb4",storageBucket:"my-firebase-12fb4.firebasestorage.app",messagingSenderId:"251411595390",appId:"1:251411595390:web:d9396d5b8165079ecf182f"},ph=Mm(rC),Pr=CR(ph),De=$g(ph),sC=Z0(ph);function iC(){const t=navigator.userAgent.toLowerCase();return t.includes("line/")||t.includes("fban/")||t.includes("fbav/")||t.includes("micromessenger/")||t.includes("wechat/")||t.includes("qq/")||t.includes("yahoo/")||t.includes("weibo/")||t.includes("sinaweibo/")}async function oC(){try{return(await fg(De)).user}catch(t){throw console.error("匿名登入失敗:",t),t}}async function aC(t,e){try{return(await yg(De,t,e)).user}catch(n){throw console.error("登入失敗:",n),n}}async function cC(){var t,e;try{const n=new un;if(iC())return console.log("檢測到被阻擋的瀏覽器，使用 redirect 方式登入"),await Nl(De,n),null;try{return(await Vg(De,n)).user}catch(r){if(r.code==="auth/popup-blocked"||r.code==="auth/unauthorized-domain"||(t=r.message)!=null&&t.includes("disallowed_useragent")||(e=r.message)!=null&&e.includes("403")||r.code==="auth/popup-closed-by-user"){if(r.code==="auth/popup-closed-by-user")throw console.error("Google 登入被用戶關閉"),r;return console.log("Popup 被阻擋，改用 redirect 方式"),await Nl(De,n),null}throw r}}catch(n){throw console.error("Google 登入失敗:",n),n}}async function lC(){try{const t=await Mg(De);return t?t.user:null}catch(t){throw console.error("處理 redirect 結果失敗:",t),t}}async function uC(t,e,n){try{const r=await _g(De,t,e);return n&&r.user&&(await Eg(r.user,{displayName:n}),await r.user.reload()),r.user}catch(r){throw console.error("註冊失敗:",r),r}}async function hC(){try{await wg(De)}catch(t){throw console.error("登出失敗:",t),t}}function fC(t){return Ig(De,t)}async function yp(t){try{const e=De.currentUser;if(!e)throw new Error("User not authenticated");await jR(hy(Pr,"messages"),{text:t,userId:e.uid,userName:e.displayName||"匿名",timestamp:by()})}catch(e){console.error("發送訊息失敗",e)}}function dC(t,e){const n=hy(Pr,"messages");let r=cp(n,lp("timestamp","desc"),up(50));return e&&(r=cp(n,FR("timestamp",">=",e),lp("timestamp","desc"),up(50))),Iy(r,s=>{const i=[];s.forEach(o=>{i.push({id:o.id,...o.data()})}),t(i.reverse())})}/**
* @vue/shared v3.5.24
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function mh(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Ae={},Us=[],Ft=()=>{},Hy=()=>!1,Ec=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),gh=t=>t.startsWith("onUpdate:"),Ye=Object.assign,_h=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},pC=Object.prototype.hasOwnProperty,_e=(t,e)=>pC.call(t,e),se=Array.isArray,Fs=t=>Tc(t)==="[object Map]",qy=t=>Tc(t)==="[object Set]",re=t=>typeof t=="function",ke=t=>typeof t=="string",Wn=t=>typeof t=="symbol",Se=t=>t!==null&&typeof t=="object",zy=t=>(Se(t)||re(t))&&re(t.then)&&re(t.catch),Wy=Object.prototype.toString,Tc=t=>Wy.call(t),mC=t=>Tc(t).slice(8,-1),Gy=t=>Tc(t)==="[object Object]",yh=t=>ke(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,qi=mh(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),vc=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},gC=/-\w/g,$t=vc(t=>t.replace(gC,e=>e.slice(1).toUpperCase())),_C=/\B([A-Z])/g,gs=vc(t=>t.replace(_C,"-$1").toLowerCase()),Ic=vc(t=>t.charAt(0).toUpperCase()+t.slice(1)),al=vc(t=>t?`on${Ic(t)}`:""),mr=(t,e)=>!Object.is(t,e),cl=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Ma=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},yC=t=>{const e=parseFloat(t);return isNaN(e)?t:e},EC=t=>{const e=ke(t)?Number(t):NaN;return isNaN(e)?t:e};let Ep;const Yr=()=>Ep||(Ep=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Co(t){if(se(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=ke(r)?wC(r):Co(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(ke(t)||Se(t))return t}const TC=/;(?![^(]*\))/g,vC=/:([^]+)/,IC=/\/\*[^]*?\*\//g;function wC(t){const e={};return t.replace(IC,"").split(TC).forEach(n=>{if(n){const r=n.split(vC);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function qt(t){let e="";if(ke(t))e=t;else if(se(t))for(let n=0;n<t.length;n++){const r=qt(t[n]);r&&(e+=r+" ")}else if(Se(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const AC="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",bC=mh(AC);function Ky(t){return!!t||t===""}const Qy=t=>!!(t&&t.__v_isRef===!0),Eh=t=>ke(t)?t:t==null?"":se(t)||Se(t)&&(t.toString===Wy||!re(t.toString))?Qy(t)?Eh(t.value):JSON.stringify(t,Yy,2):String(t),Yy=(t,e)=>Qy(e)?Yy(t,e.value):Fs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[ll(r,i)+" =>"]=s,n),{})}:qy(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>ll(n))}:Wn(e)?ll(e):Se(e)&&!se(e)&&!Gy(e)?String(e):e,ll=(t,e="")=>{var n;return Wn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.24
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ht;class SC{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=ht,!e&&ht&&(this.index=(ht.scopes||(ht.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=ht;try{return ht=this,e()}finally{ht=n}}}on(){++this._on===1&&(this.prevScope=ht,ht=this)}off(){this._on>0&&--this._on===0&&(ht=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Jy(){return ht}function RC(t,e=!1){ht&&ht.cleanups.push(t)}let Re;const ul=new WeakSet;class Xy{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,ht&&ht.active&&ht.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,ul.has(this)&&(ul.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||eE(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Tp(this),tE(this);const e=Re,n=Qt;Re=this,Qt=!0;try{return this.fn()}finally{nE(this),Re=e,Qt=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Ih(e);this.deps=this.depsTail=void 0,Tp(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?ul.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Yl(this)&&this.run()}get dirty(){return Yl(this)}}let Zy=0,zi,Wi;function eE(t,e=!1){if(t.flags|=8,e){t.next=Wi,Wi=t;return}t.next=zi,zi=t}function Th(){Zy++}function vh(){if(--Zy>0)return;if(Wi){let e=Wi;for(Wi=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;zi;){let e=zi;for(zi=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function tE(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function nE(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),Ih(r),CC(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function Yl(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(rE(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function rE(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===ao)||(t.globalVersion=ao,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!Yl(t))))return;t.flags|=2;const e=t.dep,n=Re,r=Qt;Re=t,Qt=!0;try{tE(t);const s=t.fn(t._value);(e.version===0||mr(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{Re=n,Qt=r,nE(t),t.flags&=-3}}function Ih(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Ih(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function CC(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Qt=!0;const sE=[];function jn(){sE.push(Qt),Qt=!1}function Hn(){const t=sE.pop();Qt=t===void 0?!0:t}function Tp(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Re;Re=void 0;try{e()}finally{Re=n}}}let ao=0;class PC{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class wh{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Re||!Qt||Re===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Re)n=this.activeLink=new PC(Re,this),Re.deps?(n.prevDep=Re.depsTail,Re.depsTail.nextDep=n,Re.depsTail=n):Re.deps=Re.depsTail=n,iE(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Re.depsTail,n.nextDep=void 0,Re.depsTail.nextDep=n,Re.depsTail=n,Re.deps===n&&(Re.deps=r)}return n}trigger(e){this.version++,ao++,this.notify(e)}notify(e){Th();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{vh()}}}function iE(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)iE(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Jl=new WeakMap,Jr=Symbol(""),Xl=Symbol(""),co=Symbol("");function pt(t,e,n){if(Qt&&Re){let r=Jl.get(t);r||Jl.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new wh),s.map=r,s.key=n),s.track()}}function Dn(t,e,n,r,s,i){const o=Jl.get(t);if(!o){ao++;return}const c=l=>{l&&l.trigger()};if(Th(),e==="clear")o.forEach(c);else{const l=se(t),h=l&&yh(n);if(l&&n==="length"){const f=Number(r);o.forEach((p,g)=>{(g==="length"||g===co||!Wn(g)&&g>=f)&&c(p)})}else switch((n!==void 0||o.has(void 0))&&c(o.get(n)),h&&c(o.get(co)),e){case"add":l?h&&c(o.get("length")):(c(o.get(Jr)),Fs(t)&&c(o.get(Xl)));break;case"delete":l||(c(o.get(Jr)),Fs(t)&&c(o.get(Xl)));break;case"set":Fs(t)&&c(o.get(Jr));break}}vh()}function bs(t){const e=Ee(t);return e===t?e:(pt(e,"iterate",co),Yt(t)?e:e.map(wt))}function Ah(t){return pt(t=Ee(t),"iterate",co),t}const OC={__proto__:null,[Symbol.iterator](){return hl(this,Symbol.iterator,wt)},concat(...t){return bs(this).concat(...t.map(e=>se(e)?bs(e):e))},entries(){return hl(this,"entries",t=>(t[1]=wt(t[1]),t))},every(t,e){return bn(this,"every",t,e,void 0,arguments)},filter(t,e){return bn(this,"filter",t,e,n=>n.map(wt),arguments)},find(t,e){return bn(this,"find",t,e,wt,arguments)},findIndex(t,e){return bn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return bn(this,"findLast",t,e,wt,arguments)},findLastIndex(t,e){return bn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return bn(this,"forEach",t,e,void 0,arguments)},includes(...t){return fl(this,"includes",t)},indexOf(...t){return fl(this,"indexOf",t)},join(t){return bs(this).join(t)},lastIndexOf(...t){return fl(this,"lastIndexOf",t)},map(t,e){return bn(this,"map",t,e,void 0,arguments)},pop(){return bi(this,"pop")},push(...t){return bi(this,"push",t)},reduce(t,...e){return vp(this,"reduce",t,e)},reduceRight(t,...e){return vp(this,"reduceRight",t,e)},shift(){return bi(this,"shift")},some(t,e){return bn(this,"some",t,e,void 0,arguments)},splice(...t){return bi(this,"splice",t)},toReversed(){return bs(this).toReversed()},toSorted(t){return bs(this).toSorted(t)},toSpliced(...t){return bs(this).toSpliced(...t)},unshift(...t){return bi(this,"unshift",t)},values(){return hl(this,"values",wt)}};function hl(t,e,n){const r=Ah(t),s=r[e]();return r!==t&&!Yt(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.done||(i.value=n(i.value)),i}),s}const NC=Array.prototype;function bn(t,e,n,r,s,i){const o=Ah(t),c=o!==t&&!Yt(t),l=o[e];if(l!==NC[e]){const p=l.apply(t,i);return c?wt(p):p}let h=n;o!==t&&(c?h=function(p,g){return n.call(this,wt(p),g,t)}:n.length>2&&(h=function(p,g){return n.call(this,p,g,t)}));const f=l.call(o,h,r);return c&&s?s(f):f}function vp(t,e,n,r){const s=Ah(t);let i=n;return s!==t&&(Yt(t)?n.length>3&&(i=function(o,c,l){return n.call(this,o,c,l,t)}):i=function(o,c,l){return n.call(this,o,wt(c),l,t)}),s[e](i,...r)}function fl(t,e,n){const r=Ee(t);pt(r,"iterate",co);const s=r[e](...n);return(s===-1||s===!1)&&Ph(n[0])?(n[0]=Ee(n[0]),r[e](...n)):s}function bi(t,e,n=[]){jn(),Th();const r=Ee(t)[e].apply(t,n);return vh(),Hn(),r}const DC=mh("__proto__,__v_isRef,__isVue"),oE=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Wn));function kC(t){Wn(t)||(t=String(t));const e=Ee(this);return pt(e,"has",t),e.hasOwnProperty(t)}class aE{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?HC:hE:i?uE:lE).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=se(e);if(!s){let l;if(o&&(l=OC[n]))return l;if(n==="hasOwnProperty")return kC}const c=Reflect.get(e,n,it(e)?e:r);if((Wn(n)?oE.has(n):DC(n))||(s||pt(e,"get",n),i))return c;if(it(c)){const l=o&&yh(n)?c:c.value;return s&&Se(l)?Ua(l):l}return Se(c)?s?Ua(c):Sh(c):c}}class cE extends aE{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const l=rs(i);if(!Yt(r)&&!rs(r)&&(i=Ee(i),r=Ee(r)),!se(e)&&it(i)&&!it(r))return l||(i.value=r),!0}const o=se(e)&&yh(n)?Number(n)<e.length:_e(e,n),c=Reflect.set(e,n,r,it(e)?e:s);return e===Ee(s)&&(o?mr(r,i)&&Dn(e,"set",n,r):Dn(e,"add",n,r)),c}deleteProperty(e,n){const r=_e(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&Dn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!Wn(n)||!oE.has(n))&&pt(e,"has",n),r}ownKeys(e){return pt(e,"iterate",se(e)?"length":Jr),Reflect.ownKeys(e)}}class VC extends aE{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const xC=new cE,LC=new VC,MC=new cE(!0);const Zl=t=>t,Yo=t=>Reflect.getPrototypeOf(t);function UC(t,e,n){return function(...r){const s=this.__v_raw,i=Ee(s),o=Fs(i),c=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,h=s[t](...r),f=n?Zl:e?eu:wt;return!e&&pt(i,"iterate",l?Xl:Jr),{next(){const{value:p,done:g}=h.next();return g?{value:p,done:g}:{value:c?[f(p[0]),f(p[1])]:f(p),done:g}},[Symbol.iterator](){return this}}}}function Jo(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function FC(t,e){const n={get(s){const i=this.__v_raw,o=Ee(i),c=Ee(s);t||(mr(s,c)&&pt(o,"get",s),pt(o,"get",c));const{has:l}=Yo(o),h=e?Zl:t?eu:wt;if(l.call(o,s))return h(i.get(s));if(l.call(o,c))return h(i.get(c));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&pt(Ee(s),"iterate",Jr),s.size},has(s){const i=this.__v_raw,o=Ee(i),c=Ee(s);return t||(mr(s,c)&&pt(o,"has",s),pt(o,"has",c)),s===c?i.has(s):i.has(s)||i.has(c)},forEach(s,i){const o=this,c=o.__v_raw,l=Ee(c),h=e?Zl:t?eu:wt;return!t&&pt(l,"iterate",Jr),c.forEach((f,p)=>s.call(i,h(f),h(p),o))}};return Ye(n,t?{add:Jo("add"),set:Jo("set"),delete:Jo("delete"),clear:Jo("clear")}:{add(s){!e&&!Yt(s)&&!rs(s)&&(s=Ee(s));const i=Ee(this);return Yo(i).has.call(i,s)||(i.add(s),Dn(i,"add",s,s)),this},set(s,i){!e&&!Yt(i)&&!rs(i)&&(i=Ee(i));const o=Ee(this),{has:c,get:l}=Yo(o);let h=c.call(o,s);h||(s=Ee(s),h=c.call(o,s));const f=l.call(o,s);return o.set(s,i),h?mr(i,f)&&Dn(o,"set",s,i):Dn(o,"add",s,i),this},delete(s){const i=Ee(this),{has:o,get:c}=Yo(i);let l=o.call(i,s);l||(s=Ee(s),l=o.call(i,s)),c&&c.call(i,s);const h=i.delete(s);return l&&Dn(i,"delete",s,void 0),h},clear(){const s=Ee(this),i=s.size!==0,o=s.clear();return i&&Dn(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=UC(s,t,e)}),n}function bh(t,e){const n=FC(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(_e(n,s)&&s in r?n:r,s,i)}const BC={get:bh(!1,!1)},$C={get:bh(!1,!0)},jC={get:bh(!0,!1)};const lE=new WeakMap,uE=new WeakMap,hE=new WeakMap,HC=new WeakMap;function qC(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function zC(t){return t.__v_skip||!Object.isExtensible(t)?0:qC(mC(t))}function Sh(t){return rs(t)?t:Ch(t,!1,xC,BC,lE)}function Rh(t){return Ch(t,!1,MC,$C,uE)}function Ua(t){return Ch(t,!0,LC,jC,hE)}function Ch(t,e,n,r,s){if(!Se(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=zC(t);if(i===0)return t;const o=s.get(t);if(o)return o;const c=new Proxy(t,i===2?r:n);return s.set(t,c),c}function Gi(t){return rs(t)?Gi(t.__v_raw):!!(t&&t.__v_isReactive)}function rs(t){return!!(t&&t.__v_isReadonly)}function Yt(t){return!!(t&&t.__v_isShallow)}function Ph(t){return t?!!t.__v_raw:!1}function Ee(t){const e=t&&t.__v_raw;return e?Ee(e):t}function WC(t){return!_e(t,"__v_skip")&&Object.isExtensible(t)&&Ma(t,"__v_skip",!0),t}const wt=t=>Se(t)?Sh(t):t,eu=t=>Se(t)?Ua(t):t;function it(t){return t?t.__v_isRef===!0:!1}function Ut(t){return GC(t,!1)}function GC(t,e){return it(t)?t:new KC(t,e)}class KC{constructor(e,n){this.dep=new wh,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Ee(e),this._value=n?e:wt(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||Yt(e)||rs(e);e=r?e:Ee(e),mr(e,n)&&(this._rawValue=e,this._value=r?e:wt(e),this.dep.trigger())}}function ae(t){return it(t)?t.value:t}const QC={get:(t,e,n)=>e==="__v_raw"?t:ae(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return it(s)&&!it(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function fE(t){return Gi(t)?t:new Proxy(t,QC)}class YC{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new wh(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=ao-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Re!==this)return eE(this,!0),!0}get value(){const e=this.dep.track();return rE(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function JC(t,e,n=!1){let r,s;return re(t)?r=t:(r=t.get,s=t.set),new YC(r,s,n)}const Xo={},Fa=new WeakMap;let Hr;function XC(t,e=!1,n=Hr){if(n){let r=Fa.get(n);r||Fa.set(n,r=[]),r.push(t)}}function ZC(t,e,n=Ae){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:c,call:l}=n,h=j=>s?j:Yt(j)||s===!1||s===0?kn(j,1):kn(j);let f,p,g,I,P=!1,R=!1;if(it(t)?(p=()=>t.value,P=Yt(t)):Gi(t)?(p=()=>h(t),P=!0):se(t)?(R=!0,P=t.some(j=>Gi(j)||Yt(j)),p=()=>t.map(j=>{if(it(j))return j.value;if(Gi(j))return h(j);if(re(j))return l?l(j,2):j()})):re(t)?e?p=l?()=>l(t,2):t:p=()=>{if(g){jn();try{g()}finally{Hn()}}const j=Hr;Hr=f;try{return l?l(t,3,[I]):t(I)}finally{Hr=j}}:p=Ft,e&&s){const j=p,ee=s===!0?1/0:s;p=()=>kn(j(),ee)}const O=Jy(),V=()=>{f.stop(),O&&O.active&&_h(O.effects,f)};if(i&&e){const j=e;e=(...ee)=>{j(...ee),V()}}let q=R?new Array(t.length).fill(Xo):Xo;const W=j=>{if(!(!(f.flags&1)||!f.dirty&&!j))if(e){const ee=f.run();if(s||P||(R?ee.some((ie,b)=>mr(ie,q[b])):mr(ee,q))){g&&g();const ie=Hr;Hr=f;try{const b=[ee,q===Xo?void 0:R&&q[0]===Xo?[]:q,I];q=ee,l?l(e,3,b):e(...b)}finally{Hr=ie}}}else f.run()};return c&&c(W),f=new Xy(p),f.scheduler=o?()=>o(W,!1):W,I=j=>XC(j,!1,f),g=f.onStop=()=>{const j=Fa.get(f);if(j){if(l)l(j,4);else for(const ee of j)ee();Fa.delete(f)}},e?r?W(!0):q=f.run():o?o(W.bind(null,!0),!0):f.run(),V.pause=f.pause.bind(f),V.resume=f.resume.bind(f),V.stop=V,V}function kn(t,e=1/0,n){if(e<=0||!Se(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,it(t))kn(t.value,e,n);else if(se(t))for(let r=0;r<t.length;r++)kn(t[r],e,n);else if(qy(t)||Fs(t))t.forEach(r=>{kn(r,e,n)});else if(Gy(t)){for(const r in t)kn(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&kn(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.24
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Po(t,e,n,r){try{return r?t(...r):t()}catch(s){wc(s,e,n)}}function Zt(t,e,n,r){if(re(t)){const s=Po(t,e,n,r);return s&&zy(s)&&s.catch(i=>{wc(i,e,n)}),s}if(se(t)){const s=[];for(let i=0;i<t.length;i++)s.push(Zt(t[i],e,n,r));return s}}function wc(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Ae;if(e){let c=e.parent;const l=e.proxy,h=`https://vuejs.org/error-reference/#runtime-${n}`;for(;c;){const f=c.ec;if(f){for(let p=0;p<f.length;p++)if(f[p](t,l,h)===!1)return}c=c.parent}if(i){jn(),Po(i,null,10,[t,l,h]),Hn();return}}eP(t,n,s,r,o)}function eP(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const At=[];let an=-1;const Bs=[];let rr=null,Os=0;const dE=Promise.resolve();let Ba=null;function Oh(t){const e=Ba||dE;return t?e.then(this?t.bind(this):t):e}function tP(t){let e=an+1,n=At.length;for(;e<n;){const r=e+n>>>1,s=At[r],i=lo(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function Nh(t){if(!(t.flags&1)){const e=lo(t),n=At[At.length-1];!n||!(t.flags&2)&&e>=lo(n)?At.push(t):At.splice(tP(e),0,t),t.flags|=1,pE()}}function pE(){Ba||(Ba=dE.then(gE))}function nP(t){se(t)?Bs.push(...t):rr&&t.id===-1?rr.splice(Os+1,0,t):t.flags&1||(Bs.push(t),t.flags|=1),pE()}function Ip(t,e,n=an+1){for(;n<At.length;n++){const r=At[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;At.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function mE(t){if(Bs.length){const e=[...new Set(Bs)].sort((n,r)=>lo(n)-lo(r));if(Bs.length=0,rr){rr.push(...e);return}for(rr=e,Os=0;Os<rr.length;Os++){const n=rr[Os];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}rr=null,Os=0}}const lo=t=>t.id==null?t.flags&2?-1:1/0:t.id;function gE(t){try{for(an=0;an<At.length;an++){const e=At[an];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Po(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;an<At.length;an++){const e=At[an];e&&(e.flags&=-2)}an=-1,At.length=0,mE(),Ba=null,(At.length||Bs.length)&&gE()}}let hn,xi=[],tu=!1;function Ac(t,...e){hn?hn.emit(t,...e):tu||xi.push({event:t,args:e})}function _E(t,e){var n,r;hn=t,hn?(hn.enabled=!0,xi.forEach(({event:s,args:i})=>hn.emit(s,...i)),xi=[]):typeof window<"u"&&window.HTMLElement&&!((r=(n=window.navigator)==null?void 0:n.userAgent)!=null&&r.includes("jsdom"))?((e.__VUE_DEVTOOLS_HOOK_REPLAY__=e.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(i=>{_E(i,e)}),setTimeout(()=>{hn||(e.__VUE_DEVTOOLS_HOOK_REPLAY__=null,tu=!0,xi=[])},3e3)):(tu=!0,xi=[])}function rP(t,e){Ac("app:init",t,e,{Fragment:bt,Text:Oo,Comment:nt,Static:da})}function sP(t){Ac("app:unmount",t)}const iP=Dh("component:added"),yE=Dh("component:updated"),oP=Dh("component:removed"),aP=t=>{hn&&typeof hn.cleanupBuffer=="function"&&!hn.cleanupBuffer(t)&&oP(t)};function Dh(t){return e=>{Ac(t,e.appContext.app,e.uid,e.parent?e.parent.uid:void 0,e)}}function cP(t,e,n){Ac("component:emit",t.appContext.app,t,e,n)}let rt=null,EE=null;function $a(t){const e=rt;return rt=t,EE=t&&t.type.__scopeId||null,e}function Ki(t,e=rt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&za(-1);const i=$a(e);let o;try{o=t(...s)}finally{$a(i),r._d&&za(1)}return __VUE_PROD_DEVTOOLS__&&yE(e),o};return r._n=!0,r._c=!0,r._d=!0,r}function TE(t,e){if(rt===null)return t;const n=Pc(rt),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,c,l=Ae]=e[s];i&&(re(i)&&(i={mounted:i,updated:i}),i.deep&&kn(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:c,modifiers:l}))}return t}function Mr(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const c=s[o];i&&(c.oldValue=i[o].value);let l=c.dir[r];l&&(jn(),Zt(l,n,8,[t.el,c,t,e]),Hn())}}const lP=Symbol("_vte"),vE=t=>t.__isTeleport,Cn=Symbol("_leaveCb"),Zo=Symbol("_enterCb");function uP(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Rc(()=>{t.isMounted=!0}),PE(()=>{t.isUnmounting=!0}),t}const xt=[Function,Array],IE={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:xt,onEnter:xt,onAfterEnter:xt,onEnterCancelled:xt,onBeforeLeave:xt,onLeave:xt,onAfterLeave:xt,onLeaveCancelled:xt,onBeforeAppear:xt,onAppear:xt,onAfterAppear:xt,onAppearCancelled:xt},wE=t=>{const e=t.subTree;return e.component?wE(e.component):e},hP={name:"BaseTransition",props:IE,setup(t,{slots:e}){const n=br(),r=uP();return()=>{const s=e.default&&SE(e.default(),!0);if(!s||!s.length)return;const i=AE(s),o=Ee(t),{mode:c}=o;if(r.isLeaving)return dl(i);const l=wp(i);if(!l)return dl(i);let h=nu(l,o,r,n,p=>h=p);l.type!==nt&&uo(l,h);let f=n.subTree&&wp(n.subTree);if(f&&f.type!==nt&&!qr(f,l)&&wE(n).type!==nt){let p=nu(f,o,r,n);if(uo(f,p),c==="out-in"&&l.type!==nt)return r.isLeaving=!0,p.afterLeave=()=>{r.isLeaving=!1,n.job.flags&8||n.update(),delete p.afterLeave,f=void 0},dl(i);c==="in-out"&&l.type!==nt?p.delayLeave=(g,I,P)=>{const R=bE(r,f);R[String(f.key)]=f,g[Cn]=()=>{I(),g[Cn]=void 0,delete h.delayedLeave,f=void 0},h.delayedLeave=()=>{P(),delete h.delayedLeave,f=void 0}}:f=void 0}else f&&(f=void 0);return i}}};function AE(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==nt){e=n;break}}return e}const fP=hP;function bE(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function nu(t,e,n,r,s){const{appear:i,mode:o,persisted:c=!1,onBeforeEnter:l,onEnter:h,onAfterEnter:f,onEnterCancelled:p,onBeforeLeave:g,onLeave:I,onAfterLeave:P,onLeaveCancelled:R,onBeforeAppear:O,onAppear:V,onAfterAppear:q,onAppearCancelled:W}=e,j=String(t.key),ee=bE(n,t),ie=(_,A)=>{_&&Zt(_,r,9,A)},b=(_,A)=>{const w=A[1];ie(_,A),se(_)?_.every(T=>T.length<=1)&&w():_.length<=1&&w()},y={mode:o,persisted:c,beforeEnter(_){let A=l;if(!n.isMounted)if(i)A=O||l;else return;_[Cn]&&_[Cn](!0);const w=ee[j];w&&qr(t,w)&&w.el[Cn]&&w.el[Cn](),ie(A,[_])},enter(_){let A=h,w=f,T=p;if(!n.isMounted)if(i)A=V||h,w=q||f,T=W||p;else return;let E=!1;const me=_[Zo]=Je=>{E||(E=!0,Je?ie(T,[_]):ie(w,[_]),y.delayedLeave&&y.delayedLeave(),_[Zo]=void 0)};A?b(A,[_,me]):me()},leave(_,A){const w=String(t.key);if(_[Zo]&&_[Zo](!0),n.isUnmounting)return A();ie(g,[_]);let T=!1;const E=_[Cn]=me=>{T||(T=!0,A(),me?ie(R,[_]):ie(P,[_]),_[Cn]=void 0,ee[w]===t&&delete ee[w])};ee[w]=t,I?b(I,[_,E]):E()},clone(_){const A=nu(_,e,n,r,s);return s&&s(A),A}};return y}function dl(t){if(bc(t))return t=Ar(t),t.children=null,t}function wp(t){if(!bc(t))return vE(t.type)&&t.children?AE(t.children):t;if(t.component)return t.component.subTree;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&re(n.default))return n.default()}}function uo(t,e){t.shapeFlag&6&&t.component?(t.transition=e,uo(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function SE(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const c=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===bt?(o.patchFlag&128&&s++,r=r.concat(SE(o.children,e,c))):(e||o.type!==nt)&&r.push(c!=null?Ar(o,{key:c}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}function tn(t,e){return re(t)?Ye({name:t.name},e,{setup:t}):t}function RE(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}const ja=new WeakMap;function Qi(t,e,n,r,s=!1){if(se(t)){t.forEach((P,R)=>Qi(P,e&&(se(e)?e[R]:e),n,r,s));return}if($s(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Qi(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?Pc(r.component):r.el,o=s?null:i,{i:c,r:l}=t,h=e&&e.r,f=c.refs===Ae?c.refs={}:c.refs,p=c.setupState,g=Ee(p),I=p===Ae?Hy:P=>_e(g,P);if(h!=null&&h!==l){if(Ap(e),ke(h))f[h]=null,I(h)&&(p[h]=null);else if(it(h)){h.value=null;const P=e;P.k&&(f[P.k]=null)}}if(re(l))Po(l,c,12,[o,f]);else{const P=ke(l),R=it(l);if(P||R){const O=()=>{if(t.f){const V=P?I(l)?p[l]:f[l]:l.value;if(s)se(V)&&_h(V,i);else if(se(V))V.includes(i)||V.push(i);else if(P)f[l]=[i],I(l)&&(p[l]=f[l]);else{const q=[i];l.value=q,t.k&&(f[t.k]=q)}}else P?(f[l]=o,I(l)&&(p[l]=o)):R&&(l.value=o,t.k&&(f[t.k]=o))};if(o){const V=()=>{O(),ja.delete(t)};V.id=-1,ja.set(t,V),Nt(V,n)}else Ap(t),O()}}}function Ap(t){const e=ja.get(t);e&&(e.flags|=8,ja.delete(t))}Yr().requestIdleCallback;Yr().cancelIdleCallback;const $s=t=>!!t.type.__asyncLoader,bc=t=>t.type.__isKeepAlive;function dP(t,e){CE(t,"a",e)}function pP(t,e){CE(t,"da",e)}function CE(t,e,n=gt){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Sc(e,r,n),n){let s=n.parent;for(;s&&s.parent;)bc(s.parent.vnode)&&mP(r,e,n,s),s=s.parent}}function mP(t,e,n,r){const s=Sc(e,t,r,!0);OE(()=>{_h(r[e],s)},n)}function Sc(t,e,n=gt,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{jn();const c=No(n),l=Zt(e,n,t,o);return c(),Hn(),l});return r?s.unshift(i):s.push(i),i}}const Gn=t=>(e,n=gt)=>{(!fo||t==="sp")&&Sc(t,(...r)=>e(...r),n)},gP=Gn("bm"),Rc=Gn("m"),_P=Gn("bu"),yP=Gn("u"),PE=Gn("bum"),OE=Gn("um"),EP=Gn("sp"),TP=Gn("rtg"),vP=Gn("rtc");function IP(t,e=gt){Sc("ec",t,e)}const wP="components",NE=Symbol.for("v-ndc");function AP(t){return ke(t)?bP(wP,t,!1)||t:t||NE}function bP(t,e,n=!0,r=!1){const s=rt||gt;if(s){const i=s.type;{const c=f1(i,!1);if(c&&(c===e||c===$t(e)||c===Ic($t(e))))return i}const o=bp(s[t]||i[t],e)||bp(s.appContext[t],e);return!o&&r?i:o}}function bp(t,e){return t&&(t[e]||t[$t(e)]||t[Ic($t(e))])}function Ha(t,e,n={},r,s){if(rt.ce||rt.parent&&$s(rt.parent)&&rt.parent.ce){const h=Object.keys(n).length>0;return e!=="default"&&(n.name=e),et(),or(bt,null,[st("slot",n,r&&r())],h?-2:64)}let i=t[e];i&&i._c&&(i._d=!1),et();const o=i&&DE(i(n)),c=n.key||o&&o.key,l=or(bt,{key:(c&&!Wn(c)?c:`_${e}`)+(!o&&r?"_fb":"")},o||(r?r():[]),o&&t._===1?64:-2);return l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),i&&i._c&&(i._d=!0),l}function DE(t){return t.some(e=>ss(e)?!(e.type===nt||e.type===bt&&!DE(e.children)):!0)?t:null}const ru=t=>t?tT(t)?Pc(t):ru(t.parent):null,Yi=Ye(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>ru(t.parent),$root:t=>ru(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>__VUE_OPTIONS_API__?VE(t):t.type,$forceUpdate:t=>t.f||(t.f=()=>{Nh(t.update)}),$nextTick:t=>t.n||(t.n=Oh.bind(t.proxy)),$watch:t=>__VUE_OPTIONS_API__?GP.bind(t):Ft}),pl=(t,e)=>t!==Ae&&!t.__isScriptSetup&&_e(t,e),SP={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:c,appContext:l}=t;let h;if(e[0]!=="$"){const I=o[e];if(I!==void 0)switch(I){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(pl(r,e))return o[e]=1,r[e];if(__VUE_OPTIONS_API__&&s!==Ae&&_e(s,e))return o[e]=2,s[e];if((h=t.propsOptions[0])&&_e(h,e))return o[e]=3,i[e];if(n!==Ae&&_e(n,e))return o[e]=4,n[e];(!__VUE_OPTIONS_API__||su)&&(o[e]=0)}}const f=Yi[e];let p,g;if(f)return e==="$attrs"&&pt(t.attrs,"get",""),f(t);if((p=c.__cssModules)&&(p=p[e]))return p;if(n!==Ae&&_e(n,e))return o[e]=4,n[e];if(g=l.config.globalProperties,_e(g,e))return g[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return pl(s,e)?(s[e]=n,!0):__VUE_OPTIONS_API__&&r!==Ae&&_e(r,e)?(r[e]=n,!0):_e(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i,type:o}},c){let l,h;return!!(n[c]||__VUE_OPTIONS_API__&&t!==Ae&&c[0]!=="$"&&_e(t,c)||pl(e,c)||(l=i[0])&&_e(l,c)||_e(r,c)||_e(Yi,c)||_e(s.config.globalProperties,c)||(h=o.__cssModules)&&h[c])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:_e(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Sp(t){return se(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let su=!0;function RP(t){const e=VE(t),n=t.proxy,r=t.ctx;su=!1,e.beforeCreate&&Rp(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:c,provide:l,inject:h,created:f,beforeMount:p,mounted:g,beforeUpdate:I,updated:P,activated:R,deactivated:O,beforeDestroy:V,beforeUnmount:q,destroyed:W,unmounted:j,render:ee,renderTracked:ie,renderTriggered:b,errorCaptured:y,serverPrefetch:_,expose:A,inheritAttrs:w,components:T,directives:E,filters:me}=e;if(h&&CP(h,r,null),o)for(const Pe in o){const ye=o[Pe];re(ye)&&(r[Pe]=ye.bind(n))}if(s){const Pe=s.call(n,n);Se(Pe)&&(t.data=Sh(Pe))}if(su=!0,i)for(const Pe in i){const ye=i[Pe],Vt=re(ye)?ye.bind(n,n):re(ye.get)?ye.get.bind(n,n):Ft,Es=!re(ye)&&re(ye.set)?ye.set.bind(n):Ft,nn=Te({get:Vt,set:Es});Object.defineProperty(r,Pe,{enumerable:!0,configurable:!0,get:()=>nn.value,set:Rt=>nn.value=Rt})}if(c)for(const Pe in c)kE(c[Pe],r,n,Pe);if(l){const Pe=re(l)?l.call(n):l;Reflect.ownKeys(Pe).forEach(ye=>{LE(ye,Pe[ye])})}f&&Rp(f,t,"c");function $e(Pe,ye){se(ye)?ye.forEach(Vt=>Pe(Vt.bind(n))):ye&&Pe(ye.bind(n))}if($e(gP,p),$e(Rc,g),$e(_P,I),$e(yP,P),$e(dP,R),$e(pP,O),$e(IP,y),$e(vP,ie),$e(TP,b),$e(PE,q),$e(OE,j),$e(EP,_),se(A))if(A.length){const Pe=t.exposed||(t.exposed={});A.forEach(ye=>{Object.defineProperty(Pe,ye,{get:()=>n[ye],set:Vt=>n[ye]=Vt,enumerable:!0})})}else t.exposed||(t.exposed={});ee&&t.render===Ft&&(t.render=ee),w!=null&&(t.inheritAttrs=w),T&&(t.components=T),E&&(t.directives=E),_&&RE(t)}function CP(t,e,n=Ft){se(t)&&(t=iu(t));for(const r in t){const s=t[r];let i;Se(s)?"default"in s?i=Tn(s.from||r,s.default,!0):i=Tn(s.from||r):i=Tn(s),it(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function Rp(t,e,n){Zt(se(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function kE(t,e,n,r){let s=r.includes(".")?KE(n,r):()=>n[r];if(ke(t)){const i=e[t];re(i)&&Hs(s,i)}else if(re(t))Hs(s,t.bind(n));else if(Se(t))if(se(t))t.forEach(i=>kE(i,e,n,r));else{const i=re(t.handler)?t.handler.bind(n):e[t.handler];re(i)&&Hs(s,i,t)}}function VE(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,c=i.get(e);let l;return c?l=c:!s.length&&!n&&!r?l=e:(l={},s.length&&s.forEach(h=>qa(l,h,o,!0)),qa(l,e,o)),Se(e)&&i.set(e,l),l}function qa(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&qa(t,i,n,!0),s&&s.forEach(o=>qa(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const c=PP[o]||n&&n[o];t[o]=c?c(t[o],e[o]):e[o]}return t}const PP={data:Cp,props:Pp,emits:Pp,methods:Li,computed:Li,beforeCreate:Tt,created:Tt,beforeMount:Tt,mounted:Tt,beforeUpdate:Tt,updated:Tt,beforeDestroy:Tt,beforeUnmount:Tt,destroyed:Tt,unmounted:Tt,activated:Tt,deactivated:Tt,errorCaptured:Tt,serverPrefetch:Tt,components:Li,directives:Li,watch:NP,provide:Cp,inject:OP};function Cp(t,e){return e?t?function(){return Ye(re(t)?t.call(this,this):t,re(e)?e.call(this,this):e)}:e:t}function OP(t,e){return Li(iu(t),iu(e))}function iu(t){if(se(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Tt(t,e){return t?[...new Set([].concat(t,e))]:e}function Li(t,e){return t?Ye(Object.create(null),t,e):e}function Pp(t,e){return t?se(t)&&se(e)?[...new Set([...t,...e])]:Ye(Object.create(null),Sp(t),Sp(e??{})):e}function NP(t,e){if(!t)return e;if(!e)return t;const n=Ye(Object.create(null),t);for(const r in e)n[r]=Tt(t[r],e[r]);return n}function xE(){return{app:null,config:{isNativeTag:Hy,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let DP=0;function kP(t,e){return function(r,s=null){re(r)||(r=Ye({},r)),s!=null&&!Se(s)&&(s=null);const i=xE(),o=new WeakSet,c=[];let l=!1;const h=i.app={_uid:DP++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Lp,get config(){return i.config},set config(f){},use(f,...p){return o.has(f)||(f&&re(f.install)?(o.add(f),f.install(h,...p)):re(f)&&(o.add(f),f(h,...p))),h},mixin(f){return __VUE_OPTIONS_API__&&(i.mixins.includes(f)||i.mixins.push(f)),h},component(f,p){return p?(i.components[f]=p,h):i.components[f]},directive(f,p){return p?(i.directives[f]=p,h):i.directives[f]},mount(f,p,g){if(!l){const I=h._ceVNode||st(r,s);return I.appContext=i,g===!0?g="svg":g===!1&&(g=void 0),t(I,f,g),l=!0,h._container=f,f.__vue_app__=h,__VUE_PROD_DEVTOOLS__&&(h._instance=I.component,rP(h,Lp)),Pc(I.component)}},onUnmount(f){c.push(f)},unmount(){l&&(Zt(c,h._instance,16),t(null,h._container),__VUE_PROD_DEVTOOLS__&&(h._instance=null,sP(h)),delete h._container.__vue_app__)},provide(f,p){return i.provides[f]=p,h},runWithContext(f){const p=js;js=h;try{return f()}finally{js=p}}};return h}}let js=null;function LE(t,e){if(gt){let n=gt.provides;const r=gt.parent&&gt.parent.provides;r===n&&(n=gt.provides=Object.create(r)),n[t]=e}}function Tn(t,e,n=!1){const r=br();if(r||js){let s=js?js._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&re(e)?e.call(r&&r.proxy):e}}const ME={},UE=()=>Object.create(ME),FE=t=>Object.getPrototypeOf(t)===ME;function VP(t,e,n,r=!1){const s={},i=UE();t.propsDefaults=Object.create(null),BE(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Rh(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function xP(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,c=Ee(s),[l]=t.propsOptions;let h=!1;if((r||o>0)&&!(o&16)){if(o&8){const f=t.vnode.dynamicProps;for(let p=0;p<f.length;p++){let g=f[p];if(Cc(t.emitsOptions,g))continue;const I=e[g];if(l)if(_e(i,g))I!==i[g]&&(i[g]=I,h=!0);else{const P=$t(g);s[P]=ou(l,c,P,I,t,!1)}else I!==i[g]&&(i[g]=I,h=!0)}}}else{BE(t,e,s,i)&&(h=!0);let f;for(const p in c)(!e||!_e(e,p)&&((f=gs(p))===p||!_e(e,f)))&&(l?n&&(n[p]!==void 0||n[f]!==void 0)&&(s[p]=ou(l,c,p,void 0,t,!0)):delete s[p]);if(i!==c)for(const p in i)(!e||!_e(e,p))&&(delete i[p],h=!0)}h&&Dn(t.attrs,"set","")}function BE(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,c;if(e)for(let l in e){if(qi(l))continue;const h=e[l];let f;s&&_e(s,f=$t(l))?!i||!i.includes(f)?n[f]=h:(c||(c={}))[f]=h:Cc(t.emitsOptions,l)||(!(l in r)||h!==r[l])&&(r[l]=h,o=!0)}if(i){const l=Ee(n),h=c||Ae;for(let f=0;f<i.length;f++){const p=i[f];n[p]=ou(s,l,p,h[p],t,!_e(h,p))}}return o}function ou(t,e,n,r,s,i){const o=t[n];if(o!=null){const c=_e(o,"default");if(c&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&re(l)){const{propsDefaults:h}=s;if(n in h)r=h[n];else{const f=No(s);r=h[n]=l.call(null,e),f()}}else r=l;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!c?r=!1:o[1]&&(r===""||r===gs(n))&&(r=!0))}return r}const LP=new WeakMap;function $E(t,e,n=!1){const r=__VUE_OPTIONS_API__&&n?LP:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},c=[];let l=!1;if(__VUE_OPTIONS_API__&&!re(t)){const f=p=>{l=!0;const[g,I]=$E(p,e,!0);Ye(o,g),I&&c.push(...I)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!i&&!l)return Se(t)&&r.set(t,Us),Us;if(se(i))for(let f=0;f<i.length;f++){const p=$t(i[f]);Op(p)&&(o[p]=Ae)}else if(i)for(const f in i){const p=$t(f);if(Op(p)){const g=i[f],I=o[p]=se(g)||re(g)?{type:g}:Ye({},g),P=I.type;let R=!1,O=!0;if(se(P))for(let V=0;V<P.length;++V){const q=P[V],W=re(q)&&q.name;if(W==="Boolean"){R=!0;break}else W==="String"&&(O=!1)}else R=re(P)&&P.name==="Boolean";I[0]=R,I[1]=O,(R||_e(I,"default"))&&c.push(p)}}const h=[o,c];return Se(t)&&r.set(t,h),h}function Op(t){return t[0]!=="$"&&!qi(t)}const kh=t=>t==="_"||t==="_ctx"||t==="$stable",Vh=t=>se(t)?t.map(ln):[ln(t)],MP=(t,e,n)=>{if(e._n)return e;const r=Ki((...s)=>Vh(e(...s)),n);return r._c=!1,r},jE=(t,e,n)=>{const r=t._ctx;for(const s in t){if(kh(s))continue;const i=t[s];if(re(i))e[s]=MP(s,i,r);else if(i!=null){const o=Vh(i);e[s]=()=>o}}},HE=(t,e)=>{const n=Vh(e);t.slots.default=()=>n},qE=(t,e,n)=>{for(const r in e)(n||!kh(r))&&(t[r]=e[r])},UP=(t,e,n)=>{const r=t.slots=UE();if(t.vnode.shapeFlag&32){const s=e._;s?(qE(r,e,n),n&&Ma(r,"_",s,!0)):jE(e,r)}else e&&HE(t,e)},FP=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Ae;if(r.shapeFlag&32){const c=e._;c?n&&c===1?i=!1:qE(s,e,n):(i=!e.$stable,jE(e,s)),o=e}else e&&(HE(t,e),o={default:1});if(i)for(const c in s)!kh(c)&&o[c]==null&&delete s[c]};function BP(){typeof __VUE_OPTIONS_API__!="boolean"&&(Yr().__VUE_OPTIONS_API__=!0),typeof __VUE_PROD_DEVTOOLS__!="boolean"&&(Yr().__VUE_PROD_DEVTOOLS__=!1),typeof __VUE_PROD_HYDRATION_MISMATCH_DETAILS__!="boolean"&&(Yr().__VUE_PROD_HYDRATION_MISMATCH_DETAILS__=!1)}const Nt=t1;function $P(t){return jP(t)}function jP(t,e){BP();const n=Yr();n.__VUE__=!0,__VUE_PROD_DEVTOOLS__&&_E(n.__VUE_DEVTOOLS_GLOBAL_HOOK__,n);const{insert:r,remove:s,patchProp:i,createElement:o,createText:c,createComment:l,setText:h,setElementText:f,parentNode:p,nextSibling:g,setScopeId:I=Ft,insertStaticContent:P}=t,R=(v,S,D,$=null,L=null,M=null,z=void 0,B=null,F=!!S.dynamicChildren)=>{if(v===S)return;v&&!qr(v,S)&&($=Kn(v),Rt(v,L,M,!0),v=null),S.patchFlag===-2&&(F=!1,S.dynamicChildren=null);const{type:U,ref:X,shapeFlag:G}=S;switch(U){case Oo:O(v,S,D,$);break;case nt:V(v,S,D,$);break;case da:v==null&&q(S,D,$,z);break;case bt:T(v,S,D,$,L,M,z,B,F);break;default:G&1?ee(v,S,D,$,L,M,z,B,F):G&6?E(v,S,D,$,L,M,z,B,F):(G&64||G&128)&&U.process(v,S,D,$,L,M,z,B,F,Nr)}X!=null&&L?Qi(X,v&&v.ref,M,S||v,!S):X==null&&v&&v.ref!=null&&Qi(v.ref,null,M,v,!0)},O=(v,S,D,$)=>{if(v==null)r(S.el=c(S.children),D,$);else{const L=S.el=v.el;S.children!==v.children&&h(L,S.children)}},V=(v,S,D,$)=>{v==null?r(S.el=l(S.children||""),D,$):S.el=v.el},q=(v,S,D,$)=>{[v.el,v.anchor]=P(v.children,S,D,$,v.el,v.anchor)},W=({el:v,anchor:S},D,$)=>{let L;for(;v&&v!==S;)L=g(v),r(v,D,$),v=L;r(S,D,$)},j=({el:v,anchor:S})=>{let D;for(;v&&v!==S;)D=g(v),s(v),v=D;s(S)},ee=(v,S,D,$,L,M,z,B,F)=>{if(S.type==="svg"?z="svg":S.type==="math"&&(z="mathml"),v==null)ie(S,D,$,L,M,z,B,F);else{const U=v.el&&v.el._isVueCE?v.el:null;try{U&&U._beginPatch(),_(v,S,L,M,z,B,F)}finally{U&&U._endPatch()}}},ie=(v,S,D,$,L,M,z,B)=>{let F,U;const{props:X,shapeFlag:G,transition:J,dirs:Z}=v;if(F=v.el=o(v.type,M,X&&X.is,X),G&8?f(F,v.children):G&16&&y(v.children,F,null,$,L,ml(v,M),z,B),Z&&Mr(v,null,$,"created"),b(F,v,v.scopeId,z,$),X){for(const Ie in X)Ie!=="value"&&!qi(Ie)&&i(F,Ie,null,X[Ie],M,$);"value"in X&&i(F,"value",null,X.value,M),(U=X.onVnodeBeforeMount)&&on(U,$,v)}__VUE_PROD_DEVTOOLS__&&(Ma(F,"__vnode",v,!0),Ma(F,"__vueParentComponent",$,!0)),Z&&Mr(v,null,$,"beforeMount");const ue=HP(L,J);ue&&J.beforeEnter(F),r(F,S,D),((U=X&&X.onVnodeMounted)||ue||Z)&&Nt(()=>{U&&on(U,$,v),ue&&J.enter(F),Z&&Mr(v,null,$,"mounted")},L)},b=(v,S,D,$,L)=>{if(D&&I(v,D),$)for(let M=0;M<$.length;M++)I(v,$[M]);if(L){let M=L.subTree;if(S===M||YE(M.type)&&(M.ssContent===S||M.ssFallback===S)){const z=L.vnode;b(v,z,z.scopeId,z.slotScopeIds,L.parent)}}},y=(v,S,D,$,L,M,z,B,F=0)=>{for(let U=F;U<v.length;U++){const X=v[U]=B?sr(v[U]):ln(v[U]);R(null,X,S,D,$,L,M,z,B)}},_=(v,S,D,$,L,M,z)=>{const B=S.el=v.el;__VUE_PROD_DEVTOOLS__&&(B.__vnode=S);let{patchFlag:F,dynamicChildren:U,dirs:X}=S;F|=v.patchFlag&16;const G=v.props||Ae,J=S.props||Ae;let Z;if(D&&Ur(D,!1),(Z=J.onVnodeBeforeUpdate)&&on(Z,D,S,v),X&&Mr(S,v,D,"beforeUpdate"),D&&Ur(D,!0),(G.innerHTML&&J.innerHTML==null||G.textContent&&J.textContent==null)&&f(B,""),U?A(v.dynamicChildren,U,B,D,$,ml(S,L),M):z||ye(v,S,B,null,D,$,ml(S,L),M,!1),F>0){if(F&16)w(B,G,J,D,L);else if(F&2&&G.class!==J.class&&i(B,"class",null,J.class,L),F&4&&i(B,"style",G.style,J.style,L),F&8){const ue=S.dynamicProps;for(let Ie=0;Ie<ue.length;Ie++){const ge=ue[Ie],at=G[ge],ct=J[ge];(ct!==at||ge==="value")&&i(B,ge,at,ct,L,D)}}F&1&&v.children!==S.children&&f(B,S.children)}else!z&&U==null&&w(B,G,J,D,L);((Z=J.onVnodeUpdated)||X)&&Nt(()=>{Z&&on(Z,D,S,v),X&&Mr(S,v,D,"updated")},$)},A=(v,S,D,$,L,M,z)=>{for(let B=0;B<S.length;B++){const F=v[B],U=S[B],X=F.el&&(F.type===bt||!qr(F,U)||F.shapeFlag&198)?p(F.el):D;R(F,U,X,null,$,L,M,z,!0)}},w=(v,S,D,$,L)=>{if(S!==D){if(S!==Ae)for(const M in S)!qi(M)&&!(M in D)&&i(v,M,S[M],null,L,$);for(const M in D){if(qi(M))continue;const z=D[M],B=S[M];z!==B&&M!=="value"&&i(v,M,B,z,L,$)}"value"in D&&i(v,"value",S.value,D.value,L)}},T=(v,S,D,$,L,M,z,B,F)=>{const U=S.el=v?v.el:c(""),X=S.anchor=v?v.anchor:c("");let{patchFlag:G,dynamicChildren:J,slotScopeIds:Z}=S;Z&&(B=B?B.concat(Z):Z),v==null?(r(U,D,$),r(X,D,$),y(S.children||[],D,X,L,M,z,B,F)):G>0&&G&64&&J&&v.dynamicChildren?(A(v.dynamicChildren,J,D,L,M,z,B),(S.key!=null||L&&S===L.subTree)&&zE(v,S,!0)):ye(v,S,D,X,L,M,z,B,F)},E=(v,S,D,$,L,M,z,B,F)=>{S.slotScopeIds=B,v==null?S.shapeFlag&512?L.ctx.activate(S,D,$,z,F):me(S,D,$,L,M,z,F):Je(v,S,F)},me=(v,S,D,$,L,M,z)=>{const B=v.component=a1(v,$,L);if(bc(v)&&(B.ctx.renderer=Nr),c1(B,!1,z),B.asyncDep){if(L&&L.registerDep(B,$e,z),!v.el){const F=B.subTree=st(nt);V(null,F,S,D),v.placeholder=F.el}}else $e(B,v,S,D,L,M,z)},Je=(v,S,D)=>{const $=S.component=v.component;if(ZP(v,S,D))if($.asyncDep&&!$.asyncResolved){Pe($,S,D);return}else $.next=S,$.update();else S.el=v.el,$.vnode=S},$e=(v,S,D,$,L,M,z)=>{const B=()=>{if(v.isMounted){let{next:G,bu:J,u:Z,parent:ue,vnode:Ie}=v;{const Pt=WE(v);if(Pt){G&&(G.el=Ie.el,Pe(v,G,z)),Pt.asyncDep.then(()=>{v.isUnmounted||B()});return}}let ge=G,at;Ur(v,!1),G?(G.el=Ie.el,Pe(v,G,z)):G=Ie,J&&cl(J),(at=G.props&&G.props.onVnodeBeforeUpdate)&&on(at,ue,G,Ie),Ur(v,!0);const ct=Dp(v),Ct=v.subTree;v.subTree=ct,R(Ct,ct,p(Ct.el),Kn(Ct),v,L,M),G.el=ct.el,ge===null&&e1(v,ct.el),Z&&Nt(Z,L),(at=G.props&&G.props.onVnodeUpdated)&&Nt(()=>on(at,ue,G,Ie),L),__VUE_PROD_DEVTOOLS__&&yE(v)}else{let G;const{el:J,props:Z}=S,{bm:ue,m:Ie,parent:ge,root:at,type:ct}=v,Ct=$s(S);Ur(v,!1),ue&&cl(ue),!Ct&&(G=Z&&Z.onVnodeBeforeMount)&&on(G,ge,S),Ur(v,!0);{at.ce&&at.ce._def.shadowRoot!==!1&&at.ce._injectChildStyle(ct);const Pt=v.subTree=Dp(v);R(null,Pt,D,$,v,L,M),S.el=Pt.el}if(Ie&&Nt(Ie,L),!Ct&&(G=Z&&Z.onVnodeMounted)){const Pt=S;Nt(()=>on(G,ge,Pt),L)}(S.shapeFlag&256||ge&&$s(ge.vnode)&&ge.vnode.shapeFlag&256)&&v.a&&Nt(v.a,L),v.isMounted=!0,__VUE_PROD_DEVTOOLS__&&iP(v),S=D=$=null}};v.scope.on();const F=v.effect=new Xy(B);v.scope.off();const U=v.update=F.run.bind(F),X=v.job=F.runIfDirty.bind(F);X.i=v,X.id=v.uid,F.scheduler=()=>Nh(X),Ur(v,!0),U()},Pe=(v,S,D)=>{S.component=v;const $=v.vnode.props;v.vnode=S,v.next=null,xP(v,S.props,$,D),FP(v,S.children,D),jn(),Ip(v),Hn()},ye=(v,S,D,$,L,M,z,B,F=!1)=>{const U=v&&v.children,X=v?v.shapeFlag:0,G=S.children,{patchFlag:J,shapeFlag:Z}=S;if(J>0){if(J&128){Es(U,G,D,$,L,M,z,B,F);return}else if(J&256){Vt(U,G,D,$,L,M,z,B,F);return}}Z&8?(X&16&&An(U,L,M),G!==U&&f(D,G)):X&16?Z&16?Es(U,G,D,$,L,M,z,B,F):An(U,L,M,!0):(X&8&&f(D,""),Z&16&&y(G,D,$,L,M,z,B,F))},Vt=(v,S,D,$,L,M,z,B,F)=>{v=v||Us,S=S||Us;const U=v.length,X=S.length,G=Math.min(U,X);let J;for(J=0;J<G;J++){const Z=S[J]=F?sr(S[J]):ln(S[J]);R(v[J],Z,D,null,L,M,z,B,F)}U>X?An(v,L,M,!0,!1,G):y(S,D,$,L,M,z,B,F,G)},Es=(v,S,D,$,L,M,z,B,F)=>{let U=0;const X=S.length;let G=v.length-1,J=X-1;for(;U<=G&&U<=J;){const Z=v[U],ue=S[U]=F?sr(S[U]):ln(S[U]);if(qr(Z,ue))R(Z,ue,D,null,L,M,z,B,F);else break;U++}for(;U<=G&&U<=J;){const Z=v[G],ue=S[J]=F?sr(S[J]):ln(S[J]);if(qr(Z,ue))R(Z,ue,D,null,L,M,z,B,F);else break;G--,J--}if(U>G){if(U<=J){const Z=J+1,ue=Z<X?S[Z].el:$;for(;U<=J;)R(null,S[U]=F?sr(S[U]):ln(S[U]),D,ue,L,M,z,B,F),U++}}else if(U>J)for(;U<=G;)Rt(v[U],L,M,!0),U++;else{const Z=U,ue=U,Ie=new Map;for(U=ue;U<=J;U++){const Xe=S[U]=F?sr(S[U]):ln(S[U]);Xe.key!=null&&Ie.set(Xe.key,U)}let ge,at=0;const ct=J-ue+1;let Ct=!1,Pt=0;const jt=new Array(ct);for(U=0;U<ct;U++)jt[U]=0;for(U=Z;U<=G;U++){const Xe=v[U];if(at>=ct){Rt(Xe,L,M,!0);continue}let Ge;if(Xe.key!=null)Ge=Ie.get(Xe.key);else for(ge=ue;ge<=J;ge++)if(jt[ge-ue]===0&&qr(Xe,S[ge])){Ge=ge;break}Ge===void 0?Rt(Xe,L,M,!0):(jt[Ge-ue]=U+1,Ge>=Pt?Pt=Ge:Ct=!0,R(Xe,S[Ge],D,null,L,M,z,B,F),at++)}const vs=Ct?qP(jt):Us;for(ge=vs.length-1,U=ct-1;U>=0;U--){const Xe=ue+U,Ge=S[Xe],li=S[Xe+1],Dr=Xe+1<X?li.el||li.placeholder:$;jt[U]===0?R(null,Ge,D,Dr,L,M,z,B,F):Ct&&(ge<0||U!==vs[ge]?nn(Ge,D,Dr,2):ge--)}}},nn=(v,S,D,$,L=null)=>{const{el:M,type:z,transition:B,children:F,shapeFlag:U}=v;if(U&6){nn(v.component.subTree,S,D,$);return}if(U&128){v.suspense.move(S,D,$);return}if(U&64){z.move(v,S,D,Nr);return}if(z===bt){r(M,S,D);for(let G=0;G<F.length;G++)nn(F[G],S,D,$);r(v.anchor,S,D);return}if(z===da){W(v,S,D);return}if($!==2&&U&1&&B)if($===0)B.beforeEnter(M),r(M,S,D),Nt(()=>B.enter(M),L);else{const{leave:G,delayLeave:J,afterLeave:Z}=B,ue=()=>{v.ctx.isUnmounted?s(M):r(M,S,D)},Ie=()=>{M._isLeaving&&M[Cn](!0),G(M,()=>{ue(),Z&&Z()})};J?J(M,ue,Ie):Ie()}else r(M,S,D)},Rt=(v,S,D,$=!1,L=!1)=>{const{type:M,props:z,ref:B,children:F,dynamicChildren:U,shapeFlag:X,patchFlag:G,dirs:J,cacheIndex:Z}=v;if(G===-2&&(L=!1),B!=null&&(jn(),Qi(B,null,D,v,!0),Hn()),Z!=null&&(S.renderCache[Z]=void 0),X&256){S.ctx.deactivate(v);return}const ue=X&1&&J,Ie=!$s(v);let ge;if(Ie&&(ge=z&&z.onVnodeBeforeUnmount)&&on(ge,S,v),X&6)ai(v.component,D,$);else{if(X&128){v.suspense.unmount(D,$);return}ue&&Mr(v,null,S,"beforeUnmount"),X&64?v.type.remove(v,S,D,Nr,$):U&&!U.hasOnce&&(M!==bt||G>0&&G&64)?An(U,S,D,!1,!0):(M===bt&&G&384||!L&&X&16)&&An(F,S,D),$&&oi(v)}(Ie&&(ge=z&&z.onVnodeUnmounted)||ue)&&Nt(()=>{ge&&on(ge,S,v),ue&&Mr(v,null,S,"unmounted")},D)},oi=v=>{const{type:S,el:D,anchor:$,transition:L}=v;if(S===bt){Ts(D,$);return}if(S===da){j(v);return}const M=()=>{s(D),L&&!L.persisted&&L.afterLeave&&L.afterLeave()};if(v.shapeFlag&1&&L&&!L.persisted){const{leave:z,delayLeave:B}=L,F=()=>z(D,M);B?B(v.el,M,F):F()}else M()},Ts=(v,S)=>{let D;for(;v!==S;)D=g(v),s(v),v=D;s(S)},ai=(v,S,D)=>{const{bum:$,scope:L,job:M,subTree:z,um:B,m:F,a:U}=v;Np(F),Np(U),$&&cl($),L.stop(),M&&(M.flags|=8,Rt(z,v,S,D)),B&&Nt(B,S),Nt(()=>{v.isUnmounted=!0},S),__VUE_PROD_DEVTOOLS__&&aP(v)},An=(v,S,D,$=!1,L=!1,M=0)=>{for(let z=M;z<v.length;z++)Rt(v[z],S,D,$,L)},Kn=v=>{if(v.shapeFlag&6)return Kn(v.component.subTree);if(v.shapeFlag&128)return v.suspense.next();const S=g(v.anchor||v.el),D=S&&S[lP];return D?g(D):S};let Or=!1;const ci=(v,S,D)=>{v==null?S._vnode&&Rt(S._vnode,null,null,!0):R(S._vnode||null,v,S,null,null,null,D),S._vnode=v,Or||(Or=!0,Ip(),mE(),Or=!1)},Nr={p:R,um:Rt,m:nn,r:oi,mt:me,mc:y,pc:ye,pbc:A,n:Kn,o:t};return{render:ci,hydrate:void 0,createApp:kP(ci)}}function ml({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Ur({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function HP(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function zE(t,e,n=!1){const r=t.children,s=e.children;if(se(r)&&se(s))for(let i=0;i<r.length;i++){const o=r[i];let c=s[i];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=s[i]=sr(s[i]),c.el=o.el),!n&&c.patchFlag!==-2&&zE(o,c)),c.type===Oo&&c.patchFlag!==-1&&(c.el=o.el),c.type===nt&&!c.el&&(c.el=o.el)}}function qP(t){const e=t.slice(),n=[0];let r,s,i,o,c;const l=t.length;for(r=0;r<l;r++){const h=t[r];if(h!==0){if(s=n[n.length-1],t[s]<h){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)c=i+o>>1,t[n[c]]<h?i=c+1:o=c;h<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function WE(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:WE(e)}function Np(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const zP=Symbol.for("v-scx"),WP=()=>Tn(zP);function Hs(t,e,n){return GE(t,e,n)}function GE(t,e,n=Ae){const{immediate:r,deep:s,flush:i,once:o}=n,c=Ye({},n),l=e&&r||!e&&i!=="post";let h;if(fo){if(i==="sync"){const I=WP();h=I.__watcherHandles||(I.__watcherHandles=[])}else if(!l){const I=()=>{};return I.stop=Ft,I.resume=Ft,I.pause=Ft,I}}const f=gt;c.call=(I,P,R)=>Zt(I,f,P,R);let p=!1;i==="post"?c.scheduler=I=>{Nt(I,f&&f.suspense)}:i!=="sync"&&(p=!0,c.scheduler=(I,P)=>{P?I():Nh(I)}),c.augmentJob=I=>{e&&(I.flags|=4),p&&(I.flags|=2,f&&(I.id=f.uid,I.i=f))};const g=ZC(t,e,c);return fo&&(h?h.push(g):l&&g()),g}function GP(t,e,n){const r=this.proxy,s=ke(t)?t.includes(".")?KE(r,t):()=>r[t]:t.bind(r,r);let i;re(e)?i=e:(i=e.handler,n=e);const o=No(this),c=GE(s,i.bind(r),n);return o(),c}function KE(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const KP=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${$t(e)}Modifiers`]||t[`${gs(e)}Modifiers`];function QP(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Ae;let s=n;const i=e.startsWith("update:"),o=i&&KP(r,e.slice(7));o&&(o.trim&&(s=n.map(f=>ke(f)?f.trim():f)),o.number&&(s=n.map(yC))),__VUE_PROD_DEVTOOLS__&&cP(t,e,s);let c,l=r[c=al(e)]||r[c=al($t(e))];!l&&i&&(l=r[c=al(gs(e))]),l&&Zt(l,t,6,s);const h=r[c+"Once"];if(h){if(!t.emitted)t.emitted={};else if(t.emitted[c])return;t.emitted[c]=!0,Zt(h,t,6,s)}}const YP=new WeakMap;function QE(t,e,n=!1){const r=__VUE_OPTIONS_API__&&n?YP:e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},c=!1;if(__VUE_OPTIONS_API__&&!re(t)){const l=h=>{const f=QE(h,e,!0);f&&(c=!0,Ye(o,f))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!c?(Se(t)&&r.set(t,null),null):(se(i)?i.forEach(l=>o[l]=null):Ye(o,i),Se(t)&&r.set(t,o),o)}function Cc(t,e){return!t||!Ec(e)?!1:(e=e.slice(2).replace(/Once$/,""),_e(t,e[0].toLowerCase()+e.slice(1))||_e(t,gs(e))||_e(t,e))}function Dp(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:c,emit:l,render:h,renderCache:f,props:p,data:g,setupState:I,ctx:P,inheritAttrs:R}=t,O=$a(t);let V,q;try{if(n.shapeFlag&4){const j=s||r,ee=j;V=ln(h.call(ee,j,f,p,I,g,P)),q=c}else{const j=e;V=ln(j.length>1?j(p,{attrs:c,slots:o,emit:l}):j(p,null)),q=e.props?c:JP(c)}}catch(j){Ji.length=0,wc(j,t,1),V=st(nt)}let W=V;if(q&&R!==!1){const j=Object.keys(q),{shapeFlag:ee}=W;j.length&&ee&7&&(i&&j.some(gh)&&(q=XP(q,i)),W=Ar(W,q,!1,!0))}return n.dirs&&(W=Ar(W,null,!1,!0),W.dirs=W.dirs?W.dirs.concat(n.dirs):n.dirs),n.transition&&uo(W,n.transition),V=W,$a(O),V}const JP=t=>{let e;for(const n in t)(n==="class"||n==="style"||Ec(n))&&((e||(e={}))[n]=t[n]);return e},XP=(t,e)=>{const n={};for(const r in t)(!gh(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function ZP(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:c,patchFlag:l}=e,h=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?kp(r,o,h):!!o;if(l&8){const f=e.dynamicProps;for(let p=0;p<f.length;p++){const g=f[p];if(o[g]!==r[g]&&!Cc(h,g))return!0}}}else return(s||c)&&(!c||!c.$stable)?!0:r===o?!1:r?o?kp(r,o,h):!0:!!o;return!1}function kp(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Cc(n,i))return!0}return!1}function e1({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const YE=t=>t.__isSuspense;function t1(t,e){e&&e.pendingBranch?se(t)?e.effects.push(...t):e.effects.push(t):nP(t)}const bt=Symbol.for("v-fgt"),Oo=Symbol.for("v-txt"),nt=Symbol.for("v-cmt"),da=Symbol.for("v-stc"),Ji=[];let kt=null;function et(t=!1){Ji.push(kt=t?null:[])}function n1(){Ji.pop(),kt=Ji[Ji.length-1]||null}let ho=1;function za(t,e=!1){ho+=t,t<0&&kt&&e&&(kt.hasOnce=!0)}function JE(t){return t.dynamicChildren=ho>0?kt||Us:null,n1(),ho>0&&kt&&kt.push(t),t}function qn(t,e,n,r,s,i){return JE(In(t,e,n,r,s,i,!0))}function or(t,e,n,r,s){return JE(st(t,e,n,r,s,!0))}function ss(t){return t?t.__v_isVNode===!0:!1}function qr(t,e){return t.type===e.type&&t.key===e.key}const XE=({key:t})=>t??null,pa=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?ke(t)||it(t)||re(t)?{i:rt,r:t,k:e,f:!!n}:t:null);function In(t,e=null,n=null,r=0,s=null,i=t===bt?0:1,o=!1,c=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&XE(e),ref:e&&pa(e),scopeId:EE,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:rt};return c?(xh(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=ke(n)?8:16),ho>0&&!o&&kt&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&kt.push(l),l}const st=r1;function r1(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===NE)&&(t=nt),ss(t)){const c=Ar(t,e,!0);return n&&xh(c,n),ho>0&&!i&&kt&&(c.shapeFlag&6?kt[kt.indexOf(t)]=c:kt.push(c)),c.patchFlag=-2,c}if(d1(t)&&(t=t.__vccOpts),e){e=s1(e);let{class:c,style:l}=e;c&&!ke(c)&&(e.class=qt(c)),Se(l)&&(Ph(l)&&!se(l)&&(l=Ye({},l)),e.style=Co(l))}const o=ke(t)?1:YE(t)?128:vE(t)?64:Se(t)?4:re(t)?2:0;return In(t,e,n,r,s,o,i,!0)}function s1(t){return t?Ph(t)||FE(t)?Ye({},t):t:null}function Ar(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:c,transition:l}=t,h=e?eT(s||{},e):s,f={__v_isVNode:!0,__v_skip:!0,type:t.type,props:h,key:h&&XE(h),ref:e&&e.ref?n&&i?se(i)?i.concat(pa(e)):[i,pa(e)]:pa(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:c,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==bt?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Ar(t.ssContent),ssFallback:t.ssFallback&&Ar(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&r&&uo(f,l.clone(f)),f}function ZE(t=" ",e=0){return st(Oo,null,t,e)}function ea(t="",e=!1){return e?(et(),or(nt,null,t)):st(nt,null,t)}function ln(t){return t==null||typeof t=="boolean"?st(nt):se(t)?st(bt,null,t.slice()):ss(t)?sr(t):st(Oo,null,String(t))}function sr(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Ar(t)}function xh(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(se(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),xh(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!FE(e)?e._ctx=rt:s===3&&rt&&(rt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else re(e)?(e={default:e,_ctx:rt},n=32):(e=String(e),r&64?(n=16,e=[ZE(e)]):n=8);t.children=e,t.shapeFlag|=n}function eT(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=qt([e.class,r.class]));else if(s==="style")e.style=Co([e.style,r.style]);else if(Ec(s)){const i=e[s],o=r[s];o&&i!==o&&!(se(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function on(t,e,n,r=null){Zt(t,e,7,[n,r])}const i1=xE();let o1=0;function a1(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||i1,i={uid:o1++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new SC(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:$E(r,s),emitsOptions:QE(r,s),emit:null,emitted:null,propsDefaults:Ae,inheritAttrs:r.inheritAttrs,ctx:Ae,data:Ae,props:Ae,attrs:Ae,slots:Ae,refs:Ae,setupState:Ae,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=QP.bind(null,i),t.ce&&t.ce(i),i}let gt=null;const br=()=>gt||rt;let Wa,au;{const t=Yr(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};Wa=e("__VUE_INSTANCE_SETTERS__",n=>gt=n),au=e("__VUE_SSR_SETTERS__",n=>fo=n)}const No=t=>{const e=gt;return Wa(t),t.scope.on(),()=>{t.scope.off(),Wa(e)}},Vp=()=>{gt&&gt.scope.off(),Wa(null)};function tT(t){return t.vnode.shapeFlag&4}let fo=!1;function c1(t,e=!1,n=!1){e&&au(e);const{props:r,children:s}=t.vnode,i=tT(t);VP(t,r,i,e),UP(t,s,n||e);const o=i?l1(t,e):void 0;return e&&au(!1),o}function l1(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,SP);const{setup:r}=n;if(r){jn();const s=t.setupContext=r.length>1?h1(t):null,i=No(t),o=Po(r,t,0,[t.props,s]),c=zy(o);if(Hn(),i(),(c||t.sp)&&!$s(t)&&RE(t),c){if(o.then(Vp,Vp),e)return o.then(l=>{xp(t,l)}).catch(l=>{wc(l,t,0)});t.asyncDep=o}else xp(t,o)}else nT(t)}function xp(t,e,n){re(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Se(e)&&(__VUE_PROD_DEVTOOLS__&&(t.devtoolsRawSetupState=e),t.setupState=fE(e)),nT(t)}function nT(t,e,n){const r=t.type;if(t.render||(t.render=r.render||Ft),__VUE_OPTIONS_API__){const s=No(t);jn();try{RP(t)}finally{Hn(),s()}}}const u1={get(t,e){return pt(t,"get",""),t[e]}};function h1(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,u1),slots:t.slots,emit:t.emit,expose:e}}function Pc(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(fE(WC(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Yi)return Yi[n](t)},has(e,n){return n in e||n in Yi}})):t.proxy}function f1(t,e=!0){return re(t)?t.displayName||t.name:t.name||e&&t.__name}function d1(t){return re(t)&&"__vccOpts"in t}const Te=(t,e)=>JC(t,e,fo);function p1(t,e,n){try{za(-1);const r=arguments.length;return r===2?Se(e)&&!se(e)?ss(e)?st(t,null,[e]):st(t,e):st(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&ss(n)&&(n=[n]),st(t,e,n))}finally{za(1)}}const Lp="3.5.24",m1=Ft;/**
* @vue/runtime-dom v3.5.24
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let cu;const Mp=typeof window<"u"&&window.trustedTypes;if(Mp)try{cu=Mp.createPolicy("vue",{createHTML:t=>t})}catch{}const rT=cu?t=>cu.createHTML(t):t=>t,g1="http://www.w3.org/2000/svg",_1="http://www.w3.org/1998/Math/MathML",Rn=typeof document<"u"?document:null,Up=Rn&&Rn.createElement("template"),y1={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?Rn.createElementNS(g1,t):e==="mathml"?Rn.createElementNS(_1,t):n?Rn.createElement(t,{is:n}):Rn.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Rn.createTextNode(t),createComment:t=>Rn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Rn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Up.innerHTML=rT(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const c=Up.content;if(r==="svg"||r==="mathml"){const l=c.firstChild;for(;l.firstChild;)c.appendChild(l.firstChild);c.removeChild(l)}e.insertBefore(c,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},nr="transition",Si="animation",po=Symbol("_vtc"),sT={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},E1=Ye({},IE,sT),T1=t=>(t.displayName="Transition",t.props=E1,t),iT=T1((t,{slots:e})=>p1(fP,v1(t),e)),Fr=(t,e=[])=>{se(t)?t.forEach(n=>n(...e)):t&&t(...e)},Fp=t=>t?se(t)?t.some(e=>e.length>1):t.length>1:!1;function v1(t){const e={};for(const T in t)T in sT||(e[T]=t[T]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:c=`${n}-enter-to`,appearFromClass:l=i,appearActiveClass:h=o,appearToClass:f=c,leaveFromClass:p=`${n}-leave-from`,leaveActiveClass:g=`${n}-leave-active`,leaveToClass:I=`${n}-leave-to`}=t,P=I1(s),R=P&&P[0],O=P&&P[1],{onBeforeEnter:V,onEnter:q,onEnterCancelled:W,onLeave:j,onLeaveCancelled:ee,onBeforeAppear:ie=V,onAppear:b=q,onAppearCancelled:y=W}=e,_=(T,E,me,Je)=>{T._enterCancelled=Je,Br(T,E?f:c),Br(T,E?h:o),me&&me()},A=(T,E)=>{T._isLeaving=!1,Br(T,p),Br(T,I),Br(T,g),E&&E()},w=T=>(E,me)=>{const Je=T?b:q,$e=()=>_(E,T,me);Fr(Je,[E,$e]),Bp(()=>{Br(E,T?l:i),Sn(E,T?f:c),Fp(Je)||$p(E,r,R,$e)})};return Ye(e,{onBeforeEnter(T){Fr(V,[T]),Sn(T,i),Sn(T,o)},onBeforeAppear(T){Fr(ie,[T]),Sn(T,l),Sn(T,h)},onEnter:w(!1),onAppear:w(!0),onLeave(T,E){T._isLeaving=!0;const me=()=>A(T,E);Sn(T,p),T._enterCancelled?(Sn(T,g),qp(T)):(qp(T),Sn(T,g)),Bp(()=>{T._isLeaving&&(Br(T,p),Sn(T,I),Fp(j)||$p(T,r,O,me))}),Fr(j,[T,me])},onEnterCancelled(T){_(T,!1,void 0,!0),Fr(W,[T])},onAppearCancelled(T){_(T,!0,void 0,!0),Fr(y,[T])},onLeaveCancelled(T){A(T),Fr(ee,[T])}})}function I1(t){if(t==null)return null;if(Se(t))return[gl(t.enter),gl(t.leave)];{const e=gl(t);return[e,e]}}function gl(t){return EC(t)}function Sn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[po]||(t[po]=new Set)).add(e)}function Br(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const n=t[po];n&&(n.delete(e),n.size||(t[po]=void 0))}function Bp(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let w1=0;function $p(t,e,n,r){const s=t._endId=++w1,i=()=>{s===t._endId&&r()};if(n!=null)return setTimeout(i,n);const{type:o,timeout:c,propCount:l}=A1(t,e);if(!o)return r();const h=o+"end";let f=0;const p=()=>{t.removeEventListener(h,g),i()},g=I=>{I.target===t&&++f>=l&&p()};setTimeout(()=>{f<l&&p()},c+1),t.addEventListener(h,g)}function A1(t,e){const n=window.getComputedStyle(t),r=P=>(n[P]||"").split(", "),s=r(`${nr}Delay`),i=r(`${nr}Duration`),o=jp(s,i),c=r(`${Si}Delay`),l=r(`${Si}Duration`),h=jp(c,l);let f=null,p=0,g=0;e===nr?o>0&&(f=nr,p=o,g=i.length):e===Si?h>0&&(f=Si,p=h,g=l.length):(p=Math.max(o,h),f=p>0?o>h?nr:Si:null,g=f?f===nr?i.length:l.length:0);const I=f===nr&&/\b(?:transform|all)(?:,|$)/.test(r(`${nr}Property`).toString());return{type:f,timeout:p,propCount:g,hasTransform:I}}function jp(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>Hp(n)+Hp(t[r])))}function Hp(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function qp(t){return(t?t.ownerDocument:document).body.offsetHeight}function b1(t,e,n){const r=t[po];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Ga=Symbol("_vod"),oT=Symbol("_vsh"),aT={name:"show",beforeMount(t,{value:e},{transition:n}){t[Ga]=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):Ri(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:r}){!e!=!n&&(r?e?(r.beforeEnter(t),Ri(t,!0),r.enter(t)):r.leave(t,()=>{Ri(t,!1)}):Ri(t,e))},beforeUnmount(t,{value:e}){Ri(t,e)}};function Ri(t,e){t.style.display=e?t[Ga]:"none",t[oT]=!e}const S1=Symbol(""),R1=/(?:^|;)\s*display\s*:/;function C1(t,e,n){const r=t.style,s=ke(n);let i=!1;if(n&&!s){if(e)if(ke(e))for(const o of e.split(";")){const c=o.slice(0,o.indexOf(":")).trim();n[c]==null&&ma(r,c,"")}else for(const o in e)n[o]==null&&ma(r,o,"");for(const o in n)o==="display"&&(i=!0),ma(r,o,n[o])}else if(s){if(e!==n){const o=r[S1];o&&(n+=";"+o),r.cssText=n,i=R1.test(n)}}else e&&t.removeAttribute("style");Ga in t&&(t[Ga]=i?r.display:"",t[oT]&&(r.display="none"))}const zp=/\s*!important$/;function ma(t,e,n){if(se(n))n.forEach(r=>ma(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=P1(t,e);zp.test(n)?t.setProperty(gs(r),n.replace(zp,""),"important"):t[r]=n}}const Wp=["Webkit","Moz","ms"],_l={};function P1(t,e){const n=_l[e];if(n)return n;let r=$t(e);if(r!=="filter"&&r in t)return _l[e]=r;r=Ic(r);for(let s=0;s<Wp.length;s++){const i=Wp[s]+r;if(i in t)return _l[e]=i}return e}const Gp="http://www.w3.org/1999/xlink";function Kp(t,e,n,r,s,i=bC(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Gp,e.slice(6,e.length)):t.setAttributeNS(Gp,e,n):n==null||i&&!Ky(n)?t.removeAttribute(e):t.setAttribute(e,i?"":Wn(n)?String(n):n)}function Qp(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?rT(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const c=i==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(c!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Ky(n):n==null&&c==="string"?(n="",o=!0):c==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function O1(t,e,n,r){t.addEventListener(e,n,r)}function N1(t,e,n,r){t.removeEventListener(e,n,r)}const Yp=Symbol("_vei");function D1(t,e,n,r,s=null){const i=t[Yp]||(t[Yp]={}),o=i[e];if(r&&o)o.value=r;else{const[c,l]=k1(e);if(r){const h=i[e]=L1(r,s);O1(t,c,h,l)}else o&&(N1(t,c,o,l),i[e]=void 0)}}const Jp=/(?:Once|Passive|Capture)$/;function k1(t){let e;if(Jp.test(t)){e={};let r;for(;r=t.match(Jp);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):gs(t.slice(2)),e]}let yl=0;const V1=Promise.resolve(),x1=()=>yl||(V1.then(()=>yl=0),yl=Date.now());function L1(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Zt(M1(r,n.value),e,5,[r])};return n.value=t,n.attached=x1(),n}function M1(t,e){if(se(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Xp=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,U1=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?b1(t,r,o):e==="style"?C1(t,n,r):Ec(e)?gh(e)||D1(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):F1(t,e,r,o))?(Qp(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Kp(t,e,r,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!ke(r))?Qp(t,$t(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Kp(t,e,r,o))};function F1(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Xp(e)&&re(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&t.tagName==="IFRAME"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Xp(e)&&ke(n)?!1:e in t}const B1=["ctrl","shift","alt","meta"],$1={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>B1.some(n=>t[`${n}Key`]&&!e.includes(n))},j1=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const c=$1[e[o]];if(c&&c(s,e))return}return t(s,...i)})},H1=Ye({patchProp:U1},y1);let Zp;function q1(){return Zp||(Zp=$P(H1))}const em=(...t)=>{q1().render(...t)},cT=Symbol(),ga="el",z1="is-",$r=(t,e,n,r,s)=>{let i=`${t}-${e}`;return n&&(i+=`-${n}`),r&&(i+=`__${r}`),s&&(i+=`--${s}`),i},lT=Symbol("namespaceContextKey"),W1=t=>{const e=t||(br()?Tn(lT,Ut(ga)):Ut(ga));return Te(()=>ae(e)||ga)},Lh=(t,e)=>{const n=W1(e);return{namespace:n,b:(R="")=>$r(n.value,t,R,"",""),e:R=>R?$r(n.value,t,"",R,""):"",m:R=>R?$r(n.value,t,"","",R):"",be:(R,O)=>R&&O?$r(n.value,t,R,O,""):"",em:(R,O)=>R&&O?$r(n.value,t,"",R,O):"",bm:(R,O)=>R&&O?$r(n.value,t,R,"",O):"",bem:(R,O,V)=>R&&O&&V?$r(n.value,t,R,O,V):"",is:(R,...O)=>{const V=O.length>=1?O[0]:!0;return R&&V?`${z1}${R}`:""},cssVar:R=>{const O={};for(const V in R)R[V]&&(O[`--${n.value}-${V}`]=R[V]);return O},cssVarName:R=>`--${n.value}-${R}`,cssVarBlock:R=>{const O={};for(const V in R)R[V]&&(O[`--${n.value}-${t}-${V}`]=R[V]);return O},cssVarBlockName:R=>`--${n.value}-${t}-${R}`}};var G1=typeof global=="object"&&global&&global.Object===Object&&global,K1=typeof self=="object"&&self&&self.Object===Object&&self,Mh=G1||K1||Function("return this")(),Zs=Mh.Symbol,uT=Object.prototype,Q1=uT.hasOwnProperty,Y1=uT.toString,Ci=Zs?Zs.toStringTag:void 0;function J1(t){var e=Q1.call(t,Ci),n=t[Ci];try{t[Ci]=void 0;var r=!0}catch{}var s=Y1.call(t);return r&&(e?t[Ci]=n:delete t[Ci]),s}var X1=Object.prototype,Z1=X1.toString;function eO(t){return Z1.call(t)}var tO="[object Null]",nO="[object Undefined]",tm=Zs?Zs.toStringTag:void 0;function hT(t){return t==null?t===void 0?nO:tO:tm&&tm in Object(t)?J1(t):eO(t)}function rO(t){return t!=null&&typeof t=="object"}var sO="[object Symbol]";function Uh(t){return typeof t=="symbol"||rO(t)&&hT(t)==sO}function iO(t,e){for(var n=-1,r=t==null?0:t.length,s=Array(r);++n<r;)s[n]=e(t[n],n,t);return s}var Fh=Array.isArray,nm=Zs?Zs.prototype:void 0,rm=nm?nm.toString:void 0;function fT(t){if(typeof t=="string")return t;if(Fh(t))return iO(t,fT)+"";if(Uh(t))return rm?rm.call(t):"";var e=t+"";return e=="0"&&1/t==-1/0?"-0":e}function dT(t){var e=typeof t;return t!=null&&(e=="object"||e=="function")}var oO="[object AsyncFunction]",aO="[object Function]",cO="[object GeneratorFunction]",lO="[object Proxy]";function uO(t){if(!dT(t))return!1;var e=hT(t);return e==aO||e==cO||e==oO||e==lO}var El=Mh["__core-js_shared__"],sm=function(){var t=/[^.]+$/.exec(El&&El.keys&&El.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();function hO(t){return!!sm&&sm in t}var fO=Function.prototype,dO=fO.toString;function pO(t){if(t!=null){try{return dO.call(t)}catch{}try{return t+""}catch{}}return""}var mO=/[\\^$.*+?()[\]{}|]/g,gO=/^\[object .+?Constructor\]$/,_O=Function.prototype,yO=Object.prototype,EO=_O.toString,TO=yO.hasOwnProperty,vO=RegExp("^"+EO.call(TO).replace(mO,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function IO(t){if(!dT(t)||hO(t))return!1;var e=uO(t)?vO:gO;return e.test(pO(t))}function wO(t,e){return t==null?void 0:t[e]}function pT(t,e){var n=wO(t,e);return IO(n)?n:void 0}function AO(t,e){return t===e||t!==t&&e!==e}var bO=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,SO=/^\w*$/;function RO(t,e){if(Fh(t))return!1;var n=typeof t;return n=="number"||n=="symbol"||n=="boolean"||t==null||Uh(t)?!0:SO.test(t)||!bO.test(t)||e!=null&&t in Object(e)}var mo=pT(Object,"create");function CO(){this.__data__=mo?mo(null):{},this.size=0}function PO(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}var OO="__lodash_hash_undefined__",NO=Object.prototype,DO=NO.hasOwnProperty;function kO(t){var e=this.__data__;if(mo){var n=e[t];return n===OO?void 0:n}return DO.call(e,t)?e[t]:void 0}var VO=Object.prototype,xO=VO.hasOwnProperty;function LO(t){var e=this.__data__;return mo?e[t]!==void 0:xO.call(e,t)}var MO="__lodash_hash_undefined__";function UO(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=mo&&e===void 0?MO:e,this}function is(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}is.prototype.clear=CO;is.prototype.delete=PO;is.prototype.get=kO;is.prototype.has=LO;is.prototype.set=UO;function FO(){this.__data__=[],this.size=0}function Oc(t,e){for(var n=t.length;n--;)if(AO(t[n][0],e))return n;return-1}var BO=Array.prototype,$O=BO.splice;function jO(t){var e=this.__data__,n=Oc(e,t);if(n<0)return!1;var r=e.length-1;return n==r?e.pop():$O.call(e,n,1),--this.size,!0}function HO(t){var e=this.__data__,n=Oc(e,t);return n<0?void 0:e[n][1]}function qO(t){return Oc(this.__data__,t)>-1}function zO(t,e){var n=this.__data__,r=Oc(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this}function ii(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}ii.prototype.clear=FO;ii.prototype.delete=jO;ii.prototype.get=HO;ii.prototype.has=qO;ii.prototype.set=zO;var WO=pT(Mh,"Map");function GO(){this.size=0,this.__data__={hash:new is,map:new(WO||ii),string:new is}}function KO(t){var e=typeof t;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?t!=="__proto__":t===null}function Nc(t,e){var n=t.__data__;return KO(e)?n[typeof e=="string"?"string":"hash"]:n.map}function QO(t){var e=Nc(this,t).delete(t);return this.size-=e?1:0,e}function YO(t){return Nc(this,t).get(t)}function JO(t){return Nc(this,t).has(t)}function XO(t,e){var n=Nc(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this}function _s(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}_s.prototype.clear=GO;_s.prototype.delete=QO;_s.prototype.get=YO;_s.prototype.has=JO;_s.prototype.set=XO;var ZO="Expected a function";function Bh(t,e){if(typeof t!="function"||e!=null&&typeof e!="function")throw new TypeError(ZO);var n=function(){var r=arguments,s=e?e.apply(this,r):r[0],i=n.cache;if(i.has(s))return i.get(s);var o=t.apply(this,r);return n.cache=i.set(s,o)||i,o};return n.cache=new(Bh.Cache||_s),n}Bh.Cache=_s;var eN=500;function tN(t){var e=Bh(t,function(r){return n.size===eN&&n.clear(),r}),n=e.cache;return e}var nN=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,rN=/\\(\\)?/g,sN=tN(function(t){var e=[];return t.charCodeAt(0)===46&&e.push(""),t.replace(nN,function(n,r,s,i){e.push(s?i.replace(rN,"$1"):r||n)}),e});function iN(t){return t==null?"":fT(t)}function oN(t,e){return Fh(t)?t:RO(t,e)?[t]:sN(iN(t))}function aN(t){if(typeof t=="string"||Uh(t))return t;var e=t+"";return e=="0"&&1/t==-1/0?"-0":e}function cN(t,e){e=oN(e,t);for(var n=0,r=e.length;t!=null&&n<r;)t=t[aN(e[n++])];return n&&n==r?t:void 0}function lN(t,e,n){var r=t==null?void 0:cN(t,e);return r===void 0?n:r}function uN(t){for(var e=-1,n=t==null?0:t.length,r={};++e<n;){var s=t[e];r[s[0]]=s[1]}return r}const hN=t=>t===void 0,Tl=t=>typeof t=="boolean",os=t=>typeof t=="number",fN=t=>typeof Element>"u"?!1:t instanceof Element,dN=t=>ke(t)?!Number.isNaN(Number(t)):!1;var im;const ys=typeof window<"u",pN=t=>typeof t=="string",mN=()=>{};ys&&((im=window==null?void 0:window.navigator)!=null&&im.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function $h(t){return typeof t=="function"?t():ae(t)}function gN(t){return t}function jh(t){return Jy()?(RC(t),!0):!1}function _N(t,e=!0){br()?Rc(t):e?t():Oh(t)}function yN(t,e,n={}){const{immediate:r=!0}=n,s=Ut(!1);let i=null;function o(){i&&(clearTimeout(i),i=null)}function c(){s.value=!1,o()}function l(...h){o(),s.value=!0,i=setTimeout(()=>{s.value=!1,i=null,t(...h)},$h(e))}return r&&(s.value=!0,ys&&l()),jh(c),{isPending:Ua(s),start:l,stop:c}}function mT(t){var e;const n=$h(t);return(e=n==null?void 0:n.$el)!=null?e:n}const gT=ys?window:void 0;function EN(...t){let e,n,r,s;if(pN(t[0])||Array.isArray(t[0])?([n,r,s]=t,e=gT):[e,n,r,s]=t,!e)return mN;Array.isArray(n)||(n=[n]),Array.isArray(r)||(r=[r]);const i=[],o=()=>{i.forEach(f=>f()),i.length=0},c=(f,p,g,I)=>(f.addEventListener(p,g,I),()=>f.removeEventListener(p,g,I)),l=Hs(()=>[mT(e),$h(s)],([f,p])=>{o(),f&&i.push(...n.flatMap(g=>r.map(I=>c(f,g,I,p))))},{immediate:!0,flush:"post"}),h=()=>{l(),o()};return jh(h),h}function TN(t,e=!1){const n=Ut(),r=()=>n.value=!!t();return r(),_N(r,e),n}const om=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},am="__vueuse_ssr_handlers__";om[am]=om[am]||{};var cm=Object.getOwnPropertySymbols,vN=Object.prototype.hasOwnProperty,IN=Object.prototype.propertyIsEnumerable,wN=(t,e)=>{var n={};for(var r in t)vN.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&cm)for(var r of cm(t))e.indexOf(r)<0&&IN.call(t,r)&&(n[r]=t[r]);return n};function AN(t,e,n={}){const r=n,{window:s=gT}=r,i=wN(r,["window"]);let o;const c=TN(()=>s&&"ResizeObserver"in s),l=()=>{o&&(o.disconnect(),o=void 0)},h=Hs(()=>mT(t),p=>{l(),c.value&&s&&p&&(o=new ResizeObserver(e),o.observe(p,i))},{immediate:!0,flush:"post"}),f=()=>{l(),h()};return jh(f),{isSupported:c,stop:f}}var lm;(function(t){t.UP="UP",t.RIGHT="RIGHT",t.DOWN="DOWN",t.LEFT="LEFT",t.NONE="NONE"})(lm||(lm={}));var bN=Object.defineProperty,um=Object.getOwnPropertySymbols,SN=Object.prototype.hasOwnProperty,RN=Object.prototype.propertyIsEnumerable,hm=(t,e,n)=>e in t?bN(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,CN=(t,e)=>{for(var n in e||(e={}))SN.call(e,n)&&hm(t,n,e[n]);if(um)for(var n of um(e))RN.call(e,n)&&hm(t,n,e[n]);return t};const PN={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};CN({linear:gN},PN);const fm={current:0},dm=Ut(0),_T=2e3,pm=Symbol("elZIndexContextKey"),yT=Symbol("zIndexContextKey"),ON=t=>{const e=br()?Tn(pm,fm):fm,n=t||(br()?Tn(yT,void 0):void 0),r=Te(()=>{const o=ae(n);return os(o)?o:_T}),s=Te(()=>r.value+dm.value),i=()=>(e.current++,dm.value=e.current,s.value);return!ys&&Tn(pm),{initialZIndex:r,currentZIndex:s,nextZIndex:i}};var NN={name:"en",el:{breadcrumb:{label:"Breadcrumb"},colorpicker:{confirm:"OK",clear:"Clear",defaultLabel:"color picker",description:"current color is {color}. press enter to select a new color.",alphaLabel:"pick alpha value",alphaDescription:"alpha {alpha}, current color is {color}",hueLabel:"pick hue value",hueDescription:"hue {hue}, current color is {color}",svLabel:"pick saturation and brightness value",svDescription:"saturation {saturation}, brightness {brightness}, current color is {color}",predefineDescription:"select {value} as the color"},datepicker:{now:"Now",today:"Today",cancel:"Cancel",clear:"Clear",confirm:"OK",dateTablePrompt:"Use the arrow keys and enter to select the day of the month",monthTablePrompt:"Use the arrow keys and enter to select the month",yearTablePrompt:"Use the arrow keys and enter to select the year",selectedDate:"Selected date",selectDate:"Select date",selectTime:"Select time",startDate:"Start Date",startTime:"Start Time",endDate:"End Date",endTime:"End Time",prevYear:"Previous Year",nextYear:"Next Year",prevMonth:"Previous Month",nextMonth:"Next Month",year:"",month1:"January",month2:"February",month3:"March",month4:"April",month5:"May",month6:"June",month7:"July",month8:"August",month9:"September",month10:"October",month11:"November",month12:"December",weeks:{sun:"Sun",mon:"Mon",tue:"Tue",wed:"Wed",thu:"Thu",fri:"Fri",sat:"Sat"},weeksFull:{sun:"Sunday",mon:"Monday",tue:"Tuesday",wed:"Wednesday",thu:"Thursday",fri:"Friday",sat:"Saturday"},months:{jan:"Jan",feb:"Feb",mar:"Mar",apr:"Apr",may:"May",jun:"Jun",jul:"Jul",aug:"Aug",sep:"Sep",oct:"Oct",nov:"Nov",dec:"Dec"}},inputNumber:{decrease:"decrease number",increase:"increase number"},select:{loading:"Loading",noMatch:"No matching data",noData:"No data",placeholder:"Select"},mention:{loading:"Loading"},dropdown:{toggleDropdown:"Toggle Dropdown"},cascader:{noMatch:"No matching data",loading:"Loading",placeholder:"Select",noData:"No data"},pagination:{goto:"Go to",pagesize:"/page",total:"Total {total}",pageClassifier:"",page:"Page",prev:"Go to previous page",next:"Go to next page",currentPage:"page {pager}",prevPages:"Previous {pager} pages",nextPages:"Next {pager} pages",deprecationWarning:"Deprecated usages detected, please refer to the el-pagination documentation for more details"},dialog:{close:"Close this dialog"},drawer:{close:"Close this dialog"},messagebox:{title:"Message",confirm:"OK",cancel:"Cancel",error:"Illegal input",close:"Close this dialog"},upload:{deleteTip:"press delete to remove",delete:"Delete",preview:"Preview",continue:"Continue"},slider:{defaultLabel:"slider between {min} and {max}",defaultRangeStartLabel:"pick start value",defaultRangeEndLabel:"pick end value"},table:{emptyText:"No Data",confirmFilter:"Confirm",resetFilter:"Reset",clearFilter:"All",sumText:"Sum"},tour:{next:"Next",previous:"Previous",finish:"Finish",close:"Close this dialog"},tree:{emptyText:"No Data"},transfer:{noMatch:"No matching data",noData:"No data",titles:["List 1","List 2"],filterPlaceholder:"Enter keyword",noCheckedFormat:"{total} items",hasCheckedFormat:"{checked}/{total} checked"},image:{error:"FAILED"},pageHeader:{title:"Back"},popconfirm:{confirmButtonText:"Yes",cancelButtonText:"No"},carousel:{leftArrow:"Carousel arrow left",rightArrow:"Carousel arrow right",indicator:"Carousel switch to index {index}"}}};const DN=t=>(e,n)=>kN(e,n,ae(t)),kN=(t,e,n)=>lN(n,t,t).replace(/\{(\w+)\}/g,(r,s)=>{var i;return`${(i=e==null?void 0:e[s])!=null?i:`{${s}}`}`}),VN=t=>{const e=Te(()=>ae(t).name),n=it(t)?t:Ut(t);return{lang:e,locale:n,t:DN(t)}},ET=Symbol("localeContextKey"),xN=t=>{const e=t||Tn(ET,Ut());return VN(Te(()=>e.value||NN))},TT="__epPropKey",as=t=>t,LN=t=>Se(t)&&!!t[TT],vT=(t,e)=>{if(!Se(t)||LN(t))return t;const{values:n,required:r,default:s,type:i,validator:o}=t,l={type:i,required:!!r,validator:n||o?h=>{let f=!1,p=[];if(n&&(p=Array.from(n),_e(t,"default")&&p.push(s),f||(f=p.includes(h))),o&&(f||(f=o(h))),!f&&p.length>0){const g=[...new Set(p)].map(I=>JSON.stringify(I)).join(", ");m1(`Invalid prop: validation failed${e?` for prop "${e}"`:""}. Expected one of [${g}], got value ${JSON.stringify(h)}.`)}return f}:void 0,[TT]:!0};return _e(t,"default")&&(l.default=s),l},Dc=t=>uN(Object.entries(t).map(([e,n])=>[e,vT(n,e)])),MN=["","default","small","large"],FD=vT({type:String,values:MN,required:!1}),UN=Symbol("size"),FN=Symbol("emptyValuesContextKey"),BD=Dc({emptyValues:Array,valueOnClear:{type:as([String,Number,Boolean,Function]),default:void 0,validator:t=>(t=re(t)?t():t,se(t)?t.every(e=>!e):!t)}}),mm=t=>Object.keys(t),Ka=Ut();function IT(t,e=void 0){return br()?Tn(cT,Ka):Ka}function BN(t,e){const n=IT(),r=Lh(t,Te(()=>{var c;return((c=n.value)==null?void 0:c.namespace)||ga})),s=xN(Te(()=>{var c;return(c=n.value)==null?void 0:c.locale})),i=ON(Te(()=>{var c;return((c=n.value)==null?void 0:c.zIndex)||_T})),o=Te(()=>{var c;return ae(e)||((c=n.value)==null?void 0:c.size)||""});return $N(Te(()=>ae(n)||{})),{ns:r,locale:s,zIndex:i,size:o}}const $N=(t,e,n=!1)=>{var r;const s=!!br(),i=s?IT():void 0,o=(r=void 0)!=null?r:s?LE:void 0;if(!o)return;const c=Te(()=>{const l=ae(t);return i!=null&&i.value?jN(i.value,l):l});return o(cT,c),o(ET,Te(()=>c.value.locale)),o(lT,Te(()=>c.value.namespace)),o(yT,Te(()=>c.value.zIndex)),o(UN,{size:Te(()=>c.value.size||"")}),o(FN,Te(()=>({emptyValues:c.value.emptyValues,valueOnClear:c.value.valueOnClear}))),(n||!Ka.value)&&(Ka.value=c.value),c},jN=(t,e)=>{const n=[...new Set([...mm(t),...mm(e)])],r={};for(const s of n)r[s]=e[s]!==void 0?e[s]:t[s];return r};var Hh=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n};function lu(t,e="px"){if(!t)return"";if(os(t)||dN(t))return`${t}${e}`;if(ke(t))return t}const wT=(t,e)=>(t.install=n=>{for(const r of[t,...Object.values({})])n.component(r.name,r)},t),HN=(t,e)=>(t.install=n=>{t._context=n._context,n.config.globalProperties[e]=t},t),qN=Dc({size:{type:as([Number,String])},color:{type:String}}),zN=tn({name:"ElIcon",inheritAttrs:!1}),WN=tn({...zN,props:qN,setup(t){const e=t,n=Lh("icon"),r=Te(()=>{const{size:s,color:i}=e;return!s&&!i?{}:{fontSize:hN(s)?void 0:lu(s),"--color":i}});return(s,i)=>(et(),qn("i",eT({class:ae(n).b(),style:ae(r)},s.$attrs),[Ha(s.$slots,"default")],16))}});var GN=Hh(WN,[["__file","icon.vue"]]);const gm=wT(GN);/*! Element Plus Icons Vue v2.3.2 */var KN=tn({name:"CircleCloseFilled",__name:"circle-close-filled",setup(t){return(e,n)=>(et(),qn("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},[In("path",{fill:"currentColor",d:"M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336z"})]))}}),QN=KN,YN=tn({name:"Close",__name:"close",setup(t){return(e,n)=>(et(),qn("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},[In("path",{fill:"currentColor",d:"M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"})]))}}),JN=YN,XN=tn({name:"InfoFilled",__name:"info-filled",setup(t){return(e,n)=>(et(),qn("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},[In("path",{fill:"currentColor",d:"M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64m67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344M590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.99 12.99 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z"})]))}}),_m=XN,ZN=tn({name:"SuccessFilled",__name:"success-filled",setup(t){return(e,n)=>(et(),qn("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},[In("path",{fill:"currentColor",d:"M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.27 38.27 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336z"})]))}}),eD=ZN,tD=tn({name:"WarningFilled",__name:"warning-filled",setup(t){return(e,n)=>(et(),qn("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},[In("path",{fill:"currentColor",d:"M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 192a58.43 58.43 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.43 58.43 0 0 0 512 256m0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4"})]))}}),nD=tD;const rD=as([String,Object,Function]),sD={Close:JN},ym={primary:_m,success:eD,warning:nD,error:QN,info:_m},iD=()=>ys&&/android/i.test(window.navigator.userAgent),oD=t=>t,uu={tab:"Tab",enter:"Enter",space:"Space",left:"ArrowLeft",up:"ArrowUp",right:"ArrowRight",down:"ArrowDown",esc:"Escape",delete:"Delete",backspace:"Backspace",numpadEnter:"NumpadEnter",pageUp:"PageUp",pageDown:"PageDown",home:"Home",end:"End"},aD=t=>{if(t.code&&t.code!=="Unidentified")return t.code;const e=cD(t);if(e){if(Object.values(uu).includes(e))return e;switch(e){case" ":return uu.space;default:return""}}return""},cD=t=>{let e=t.key&&t.key!=="Unidentified"?t.key:"";if(!e&&t.type==="keyup"&&iD()){const n=t.target;e=n.value.charAt(n.selectionStart-1)}return e},lD=Dc({value:{type:[String,Number],default:""},max:{type:Number,default:99},isDot:Boolean,hidden:Boolean,type:{type:String,values:["primary","success","warning","info","danger"],default:"danger"},showZero:{type:Boolean,default:!0},color:String,badgeStyle:{type:as([String,Object,Array])},offset:{type:as(Array),default:[0,0]},badgeClass:{type:String}}),uD=tn({name:"ElBadge"}),hD=tn({...uD,props:lD,setup(t,{expose:e}){const n=t,r=Lh("badge"),s=Te(()=>n.isDot?"":os(n.value)&&os(n.max)?n.max<n.value?`${n.max}+`:`${n.value}`:`${n.value}`),i=Te(()=>{var o,c,l,h,f;return[{backgroundColor:n.color,marginRight:lu(-((c=(o=n.offset)==null?void 0:o[0])!=null?c:0)),marginTop:lu((h=(l=n.offset)==null?void 0:l[1])!=null?h:0)},(f=n.badgeStyle)!=null?f:{}]});return e({content:s}),(o,c)=>(et(),qn("div",{class:qt(ae(r).b())},[Ha(o.$slots,"default"),st(iT,{name:`${ae(r).namespace.value}-zoom-in-center`,persisted:""},{default:Ki(()=>[TE(In("sup",{class:qt([ae(r).e("content"),ae(r).em("content",o.type),ae(r).is("fixed",!!o.$slots.default),ae(r).is("dot",o.isDot),ae(r).is("hide-zero",!o.showZero&&o.value===0),o.badgeClass]),style:Co(ae(i))},[Ha(o.$slots,"content",{value:ae(s)},()=>[ZE(Eh(ae(s)),1)])],6),[[aT,!o.hidden&&(ae(s)||o.isDot||o.$slots.content)]])]),_:3},8,["name"])],2))}});var fD=Hh(hD,[["__file","badge.vue"]]);const dD=wT(fD),It={placement:"top"},AT=["primary","success","info","warning","error"],bT=["top","top-left","top-right","bottom","bottom-left","bottom-right"],go="top",ut=oD({customClass:"",dangerouslyUseHTMLString:!1,duration:3e3,icon:void 0,id:"",message:"",onClose:void 0,showClose:!1,type:"info",plain:!1,offset:16,placement:void 0,zIndex:0,grouping:!1,repeatNum:1,appendTo:ys?document.body:void 0}),pD=Dc({customClass:{type:String,default:ut.customClass},dangerouslyUseHTMLString:{type:Boolean,default:ut.dangerouslyUseHTMLString},duration:{type:Number,default:ut.duration},icon:{type:rD,default:ut.icon},id:{type:String,default:ut.id},message:{type:as([String,Object,Function]),default:ut.message},onClose:{type:as(Function),default:ut.onClose},showClose:{type:Boolean,default:ut.showClose},type:{type:String,values:AT,default:ut.type},plain:{type:Boolean,default:ut.plain},offset:{type:Number,default:ut.offset},placement:{type:String,values:bT,default:ut.placement},zIndex:{type:Number,default:ut.zIndex},grouping:{type:Boolean,default:ut.grouping},repeatNum:{type:Number,default:ut.repeatNum}}),mD={destroy:()=>!0},Jt=Rh({}),gD=t=>(Jt[t]||(Jt[t]=Rh([])),Jt[t]),_D=(t,e)=>{const n=Jt[e]||[],r=n.findIndex(o=>o.id===t),s=n[r];let i;return r>0&&(i=n[r-1]),{current:s,prev:i}},yD=(t,e)=>{const{prev:n}=_D(t,e);return n?n.vm.exposed.bottom.value:0},ED=(t,e,n)=>(Jt[n]||[]).findIndex(i=>i.id===t)>0?16:e,TD=tn({name:"ElMessage"}),vD=tn({...TD,props:pD,emits:mD,setup(t,{expose:e,emit:n}){const r=t,{Close:s}=sD,i=Ut(!1),{ns:o,zIndex:c}=BN("message"),{currentZIndex:l,nextZIndex:h}=c,f=Ut(),p=Ut(!1),g=Ut(0);let I;const P=Te(()=>r.type?r.type==="error"?"danger":r.type:"info"),R=Te(()=>{const T=r.type;return{[o.bm("icon",T)]:T&&ym[T]}}),O=Te(()=>r.icon||ym[r.type]||""),V=Te(()=>r.placement||go),q=Te(()=>yD(r.id,V.value)),W=Te(()=>ED(r.id,r.offset,V.value)+q.value),j=Te(()=>g.value+W.value),ee=Te(()=>V.value.includes("left")?o.is("left"):V.value.includes("right")?o.is("right"):o.is("center")),ie=Te(()=>V.value.startsWith("top")?"top":"bottom"),b=Te(()=>({[ie.value]:`${W.value}px`,zIndex:l.value}));function y(){r.duration!==0&&({stop:I}=yN(()=>{A()},r.duration))}function _(){I==null||I()}function A(){p.value=!1,Oh(()=>{var T;i.value||((T=r.onClose)==null||T.call(r),n("destroy"))})}function w(T){aD(T)===uu.esc&&A()}return Rc(()=>{y(),h(),p.value=!0}),Hs(()=>r.repeatNum,()=>{_(),y()}),EN(document,"keydown",w),AN(f,()=>{g.value=f.value.getBoundingClientRect().height}),e({visible:p,bottom:j,close:A}),(T,E)=>(et(),or(iT,{name:ae(o).b("fade"),onBeforeEnter:me=>i.value=!0,onBeforeLeave:T.onClose,onAfterLeave:me=>T.$emit("destroy"),persisted:""},{default:Ki(()=>[TE(In("div",{id:T.id,ref_key:"messageRef",ref:f,class:qt([ae(o).b(),{[ae(o).m(T.type)]:T.type},ae(o).is("closable",T.showClose),ae(o).is("plain",T.plain),ae(o).is("bottom",ae(ie)==="bottom"),ae(ee),T.customClass]),style:Co(ae(b)),role:"alert",onMouseenter:_,onMouseleave:y},[T.repeatNum>1?(et(),or(ae(dD),{key:0,value:T.repeatNum,type:ae(P),class:qt(ae(o).e("badge"))},null,8,["value","type","class"])):ea("v-if",!0),ae(O)?(et(),or(ae(gm),{key:1,class:qt([ae(o).e("icon"),ae(R)])},{default:Ki(()=>[(et(),or(AP(ae(O))))]),_:1},8,["class"])):ea("v-if",!0),Ha(T.$slots,"default",{},()=>[T.dangerouslyUseHTMLString?(et(),qn(bt,{key:1},[ea(" Caution here, message could've been compromised, never use user's input as message "),In("p",{class:qt(ae(o).e("content")),innerHTML:T.message},null,10,["innerHTML"])],2112)):(et(),qn("p",{key:0,class:qt(ae(o).e("content"))},Eh(T.message),3))]),T.showClose?(et(),or(ae(gm),{key:2,class:qt(ae(o).e("closeBtn")),onClick:j1(A,["stop"])},{default:Ki(()=>[st(ae(s))]),_:1},8,["class","onClick"])):ea("v-if",!0)],46,["id"]),[[aT,p.value]])]),_:3},8,["name","onBeforeEnter","onBeforeLeave","onAfterLeave"]))}});var ID=Hh(vD,[["__file","message.vue"]]);let wD=1;const AD=t=>{if(!t.appendTo)t.appendTo=document.body;else if(ke(t.appendTo)){let n=document.querySelector(t.appendTo);fN(n)||(n=document.body),t.appendTo=n}},bD=t=>{!t.placement&&ke(It.placement)&&It.placement&&(t.placement=It.placement),t.placement||(t.placement=go),bT.includes(t.placement)||(t.placement=go)},ST=t=>{const e=!t||ke(t)||ss(t)||re(t)?{message:t}:t,n={...ut,...e};return AD(n),bD(n),Tl(It.grouping)&&!n.grouping&&(n.grouping=It.grouping),os(It.duration)&&n.duration===3e3&&(n.duration=It.duration),os(It.offset)&&n.offset===16&&(n.offset=It.offset),Tl(It.showClose)&&!n.showClose&&(n.showClose=It.showClose),Tl(It.plain)&&!n.plain&&(n.plain=It.plain),n},SD=t=>{const e=t.props.placement||go,n=Jt[e],r=n.indexOf(t);if(r===-1)return;n.splice(r,1);const{handler:s}=t;s.close()},RD=({appendTo:t,...e},n)=>{const r=`message_${wD++}`,s=e.onClose,i=document.createElement("div"),o={...e,id:r,onClose:()=>{s==null||s(),SD(f)},onDestroy:()=>{em(null,i)}},c=st(ID,o,re(o.message)||ss(o.message)?{default:re(o.message)?o.message:()=>o.message}:null);c.appContext=n||cs._context,em(c,i),t.appendChild(i.firstElementChild);const l=c.component,f={id:r,vnode:c,vm:l,handler:{close:()=>{l.exposed.close()}},props:c.component.props};return f},cs=(t={},e)=>{if(!ys)return{close:()=>{}};const n=ST(t),r=gD(n.placement||go);if(n.grouping&&r.length){const i=r.find(({vnode:o})=>{var c;return((c=o.props)==null?void 0:c.message)===n.message});if(i)return i.props.repeatNum+=1,i.props.type=n.type,i.handler}if(os(It.max)&&r.length>=It.max)return{close:()=>{}};const s=RD(n,e);return r.push(s),s.handler};AT.forEach(t=>{cs[t]=(e={},n)=>{const r=ST(e);return cs({...r,type:t},n)}});function CD(t){for(const e in Jt)if(_e(Jt,e)){const n=[...Jt[e]];for(const r of n)(!t||t===r.props.type)&&r.handler.close()}}function PD(t){if(!Jt[t])return;[...Jt[t]].forEach(n=>n.handler.close())}cs.closeAll=CD;cs.closeAllByPlacement=PD;cs._context=null;const be=HN(cs,"$message"),OD=["rock","paper","scissors"];function ND(t,e){return t===e?"draw":{rock:"scissors",paper:"rock",scissors:"paper"}[t]===e?"player1":"player2"}async function Em(t){try{const e=De.currentUser;if(!e)throw new Error("User not authenticated");const n=ms(Pr,"games",t);return await pr(n,{player1:{userId:e.uid,userName:e.displayName||"匿名1",choice:null,ready:!1},player2:{userId:null,userName:null,choice:null,ready:!1},status:"waiting",winner:null,createAt:by()}),n}catch(e){console.error("建立遊戲房間失敗",e)}}async function Tm(t){try{const e=De.currentUser;if(!e)throw new Error("User not authenticated");const n=ms(Pr,"games",t),r=await La(n);if(!r.exists())throw new Error("Game room not found");const s=r.data();if(s.player1.userId===e.uid||s.player2.userId===e.uid)return be({message:"你已在此房間號",type:"warning",customClass:"custom-message"}),n;if(s.player2.userId)throw new Error("Game room is full");return await pr(n,{player2:{userId:e.uid,userName:e.displayName||"匿名2",choice:null,ready:!1},status:"playing"},{merge:!0}),n}catch(e){console.error("加入遊戲房間失敗",e),be({message:"房間號不存在",type:"error",customClass:"custom-message"})}}async function vm(t,e){try{const n=De.currentUser;if(!n)throw new Error("User not authenticated");if(e!==null&&!OD.includes(e))throw new Error("Invalid choice");const r=ms(Pr,"games",t),s=await La(r);if(!s.exists())throw new Error("Game room not found");const i=s.data();if(!i)throw new Error("Game data not available");const c=i.player1.userId===n.uid?"player1":"player2";if(await pr(r,{[c]:{...i[c],choice:e,ready:e!==null}},{merge:!0}),e===null)return;const l=await La(r);if(l.exists()){const h=l.data();if(h&&h.player1.choice&&h.player2.choice){const f=ND(h.player1.choice,h.player2.choice);await pr(r,{status:"finished",winner:f},{merge:!0})}}}catch(n){return console.error("出拳失敗",n),"error"}}function ta(t,e){const n=ms(Pr,"games",t);return Iy(n,r=>{r.exists()&&e({id:r.id,...r.data()})})}async function DD(t){try{const e=ms(Pr,"games",t);await pr(e,{player1:{choice:null,ready:!1},player2:{choice:null,ready:!1},status:"playing",winner:null},{merge:!0})}catch(e){console.error("重置遊戲失敗",e)}}async function kD(t){try{const e=De.currentUser;if(!e)return;const n=ms(Pr,"games",t),r=await La(n);if(!r.exists())return;const s=r.data(),i={userId:null,userName:null,choice:null,ready:!1};s.player1.userId===e.uid?s.player2.userId?await pr(n,{player1:{...s.player2,ready:!1,choice:null},player2:i,status:"waiting"},{merge:!0}):await pr(n,{player1:i,status:"waiting"},{merge:!0}):s.player2.userId===e.uid&&await pr(n,{player2:i,status:"waiting"},{merge:!0})}catch(e){console.error("離開遊戲房間失敗",e)}}let Gr=null,vt=null,Ht=null;lC().then(t=>{t&&(console.log("Google 登入成功 (redirect):",t),be({message:"Google 登入成功",type:"success",customClass:"custom-message"}))}).catch(t=>{t.code&&t.code!=="auth/popup-closed-by-user"&&(console.error("處理 redirect 登入失敗:",t),be({message:"Google 登入失敗",type:"error",customClass:"custom-message"}))});function RT(){const t=document.getElementById("messages");t&&(t.innerHTML="");const e=document.getElementById("room-id");e&&(e.value="");const n=document.getElementById("game-status");n&&(n.innerHTML=""),document.querySelectorAll(".choice-btn").forEach(f=>{f.classList.remove("selected","opponent-choice")});const r=document.getElementById("choices");r&&(r.style.display="none");const s=document.getElementById("email"),i=document.getElementById("password"),o=document.getElementById("username");s&&(s.value=""),i&&(i.value=""),o&&(o.value="");const c=document.getElementById("game-result-overlay");c&&(c.style.display="none");const l=document.getElementById("onboarding-step-1"),h=document.getElementById("onboarding-step-2");l&&(l.style.display="none"),h&&(h.style.display="none")}fC(t=>{if(t){const e=document.getElementById("login-section"),n=document.getElementById("user-name");e&&(e.style.display="none");const r=document.getElementById("onboarding-step-1");if(r){r.style.display="flex";const o=document.getElementById("onboarding-nickname");o&&t.displayName&&(o.value=t.displayName)}const s=De.currentUser;n&&s&&(n.textContent=`使用者：${s.displayName||"匿名用戶"}`);const i=document.getElementById("avatar-preview");i&&(s!=null&&s.photoURL)?i.src=s.photoURL:i&&(i.src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSI1MCIgZmlsbD0iI2RkZCIvPjx0ZXh0IHg9IjUwIiB5PSI1NSIgZm9udC1zaXplPSI0MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iIzk5OSI+77yBPC90ZXh0Pjwvc3ZnPg=="),LD(),xD(new Date)}else{const e=document.getElementById("login-section"),n=document.getElementById("game-section");e&&(e.style.display="block"),n&&(n.style.display="none"),Gr&&(Gr(),Gr=null),vt&&(vt(),vt=null),Ht=null,RT()}});const Im=document.getElementById("anonymous-login");Im&&Im.addEventListener("click",async()=>{try{await oC()}catch(t){console.error("匿名登入失敗:",t),be({message:"匿名登入失敗，請確認 Firebase Console 中已啟用匿名認證功能",type:"error",customClass:"custom-message"})}});const wm=document.getElementById("login-btn"),ar=document.getElementById("username"),Ns=document.getElementById("email"),Ds=document.getElementById("password");wm&&Ns&&Ds&&wm.addEventListener("click",async()=>{const t=Ns.value,e=Ds.value;if(t&&e)try{await aC(t,e);const n=ar==null?void 0:ar.value;if(n&&De.currentUser){const{updateProfile:r}=await hu(async()=>{const{updateProfile:s}=await Promise.resolve().then(()=>Su);return{updateProfile:s}},void 0);await r(De.currentUser,{displayName:n})}}catch(n){console.error("登入失敗:",n),n.code==="auth/invalid-credential"?be({message:"無效的 Email 或密碼",type:"error",customClass:"custom-message"}):n.code==="auth/user-not-found"?be({message:"找不到此 Email 的帳號",type:"error",customClass:"custom-message"}):n.code==="auth/wrong-password"?be({message:"密碼錯誤",type:"error",customClass:"custom-message"}):be({message:"登入失敗，請檢查 Email 和密碼",type:"error",customClass:"custom-message"})}else be({message:"請輸入信箱和密碼",type:"error",customClass:"custom-message"})});const Am=document.getElementById("google-login");Am&&Am.addEventListener("click",async()=>{await VD()});async function VD(){try{const t=await cC();t&&(console.log("Google 登入成功:",t),be({message:"Google 登入成功",type:"success",customClass:"custom-message"}))}catch(t){if(console.error("Google 登入失敗:",t),t.code==="auth/popup-closed-by-user")return;be({message:"Google 登入失敗，請檢查瀏覽器設定",type:"error",customClass:"custom-message"})}}const bm=document.getElementById("register-btn");bm&&Ns&&Ds&&bm.addEventListener("click",async()=>{const t=Ns.value,e=Ds.value,n=(ar==null?void 0:ar.value)||void 0;if(t&&e)try{await uC(t,e,n),setTimeout(()=>{Ns&&(Ns.value=""),Ds&&(Ds.value=""),ar&&(ar.value="");const r=De.currentUser,s=document.getElementById("user-name");s&&r&&(s.textContent=`使用者：${r.displayName||n||"匿名用戶"}`);const i=document.getElementById("onboarding-step-1");i&&(i.style.display="flex")},100),be({message:"註冊成功",type:"success",customClass:"custom-message"})}catch(r){console.error("註冊失敗:",r),r.code==="auth/email-already-in-use"?be.warning({message:"此 Email 已經被使用",type:"warning",customClass:"custom-message"}):r.code==="auth/invalid-email"?be.error({message:"無效的 Email 格式",type:"error",customClass:"custom-message"}):r.code==="auth/weak-password"?be.error({message:"密碼太弱，請使用更強的密碼",type:"error",customClass:"custom-message"}):be.error({message:"請檢查 Email 格式和密碼長度（至少 6 個字元）",type:"error",customClass:"custom-message"})}else be({message:"請輸入信箱和密碼",type:"error",customClass:"custom-message"})});const Sm=document.getElementById("logout-btn");Sm&&Sm.addEventListener("click",async()=>{try{Ht&&(await kD(Ht),Ht=null),await hC()}catch(t){console.error("登出失敗:",t)}});function xD(t){const e=document.getElementById("messages");if(!e)return;Gr&&(Gr(),Gr=null),Gr=dC(s=>{e.innerHTML="";const i=De.currentUser;s.forEach(o=>{const c=document.createElement("div"),l=i&&o.userId===i.uid;c.className=`message ${l?"self":"other"}`;const h=o.timestamp&&typeof o.timestamp.toDate=="function"?o.timestamp.toDate():o.timestamp,f=h?new Date(h).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}):"";c.innerHTML=`
                <strong>${o.userName}</strong>
                <span>${o.text}</span>
                <small>${f}</small>
            `,e.appendChild(c)}),e.scrollTop=e.scrollHeight},t);const n=document.getElementById("send-btn"),r=document.getElementById("message-text");n&&r&&(n.onclick=async()=>{const s=r.value;s.trim()&&(await yp(s),r.value="")},r.onkeydown=async s=>{if(s.key==="Enter"){const i=r.value;i.trim()&&(await yp(i),r.value="")}})}function LD(){const t=document.getElementById("create-room"),e=document.getElementById("room-id"),n=document.getElementById("copy-room-btn");n&&e&&(n.onclick=()=>{e.value&&(navigator.clipboard.writeText(e.value),be.success({message:"房間 ID 已複製",offset:window.innerHeight-100,customClass:"bottom-message"}))});const r=document.getElementById("step-1-next"),s=document.getElementById("step-2-create"),i=document.getElementById("step-2-join"),o=document.getElementById("onboarding-step-1"),c=document.getElementById("onboarding-step-2"),l=document.getElementById("game-section"),h=document.getElementById("onboarding-nickname");if(r&&h){const P=async()=>{const R=h.value.trim();if(R){if(De.currentUser){const{updateProfile:O}=await hu(async()=>{const{updateProfile:q}=await Promise.resolve().then(()=>Su);return{updateProfile:q}},void 0);await O(De.currentUser,{displayName:R});const V=document.getElementById("user-name");V&&(V.textContent=`使用者：${R}`)}o&&(o.style.display="none"),c&&(c.style.display="flex")}else be({message:"請輸入暱稱",type:"warning",offset:window.innerHeight-100,customClass:"bottom-message"})};r.onclick=P,h.onkeydown=async R=>{R.key==="Enter"&&await P()}}s&&(s.onclick=async()=>{c&&(c.style.display="none"),l&&(l.style.display="block");const P=`room-${Date.now()}`;await Em(P),Ht=P,e&&(e.value=P),n&&(n.style.display="flex");const R=document.getElementById("choices");R&&(R.style.display="block"),vt&&vt(),vt=ta(P,O=>{na(O)})}),i&&(i.onclick=async()=>{const P=document.getElementById("step-2-room-id"),R=P==null?void 0:P.value.trim();if(R)try{await Tm(R),Ht=R,c&&(c.style.display="none"),l&&(l.style.display="block"),n&&(n.style.display="none");const O=document.getElementById("choices");O&&(O.style.display="block"),vt&&vt(),vt=ta(R,V=>{na(V)})}catch(O){console.error(O)}else be({message:"請輸入房間 ID",type:"warning",offset:window.innerHeight-100,customClass:"bottom-message"})}),t&&e&&(t.onclick=async()=>{const P=`room-${Date.now()}`;await Em(P),Ht=P,e.value=P,n&&(n.style.display="flex");const R=document.getElementById("choices");R&&(R.style.display="block"),vt&&vt(),vt=ta(P,O=>{na(O)})});const f=document.getElementById("join-room");f&&e&&(f.onclick=async()=>{const P=e.value;await Tm(P),Ht=P;const R=document.getElementById("choices");R&&(R.style.display="block"),vt&&vt(),vt=ta(P,O=>{na(O)})});const p=document.getElementById("avatar-input"),g=document.getElementById("avatar-preview"),I=document.getElementById("upload-avatar-btn");p&&g&&I&&(I.onclick=()=>{p.click()},p.onchange=async P=>{var O;const R=(O=P.target.files)==null?void 0:O[0];if(R){if(!R.type.startsWith("image/")){be({message:"請選擇圖片檔案",type:"warning",offset:window.innerHeight-100,customClass:"bottom-message"});return}if(R.size>1024*1024*5){be({message:"檔案大小不能超過 5MB",type:"warning",offset:window.innerHeight-100,customClass:"bottom-message"});return}try{const V=new FileReader;V.onload=async j=>{var ee;g&&((ee=j.target)!=null&&ee.result)&&(g.src=j.target.result)},V.readAsDataURL(R);const q=await MD(R);g&&(g.src=q);const W=document.getElementById("user-name");W&&De.currentUser&&(W.textContent=`使用者：${De.currentUser.displayName||"匿名用戶"}`),be({message:"大頭貼上傳成功",type:"success",offset:window.innerHeight-100,customClass:"bottom-message"})}catch(V){console.log("上傳大頭貼失敗",V),be({message:"上傳大頭貼失敗",type:"error",offset:window.innerHeight-100,customClass:"bottom-message"})}}}),document.querySelectorAll(".choice-btn").forEach(P=>{P.onclick=async()=>{if(Ht){const R=P.dataset.choice;if(R){const O=P.classList.contains("selected");document.querySelectorAll(".choice-btn").forEach(V=>V.classList.remove("selected")),O?await vm(Ht,null):(P.classList.add("selected"),await vm(Ht,R))}}}})}function na(t){const e=document.getElementById("game-status");if(e){const n=De.currentUser;if(!n)return;const r=t.player1.userId===n.uid,s=r?t.player1.choice:t.player2.choice,i=r?t.player2.choice:t.player1.choice;if(document.querySelectorAll(".choice-btn").forEach(I=>{I.classList.remove("selected","opponent-choice"),t.status==="finished"&&i&&I.dataset.choice===i&&I.classList.add("opponent-choice")}),s){const I=document.querySelector(`[data-choice="${s}"]`);I&&I.classList.add("selected")}let o="";const c=document.getElementById("game-result-overlay"),l=document.getElementById("result-message"),h=document.getElementById("overlay-play-again-btn");t.status==="finished"?(t.winner==="draw"?o='<p style="color: orange; font-weight: bold;">平手！</p>':t.winner==="player1"&&r||t.winner==="player2"&&!r?o='<p style="color: green; font-weight: bold;">🎉 你贏了！</p>':o='<p style="color: red; font-weight: bold;">😢 你輸了</p>',c&&l&&(l.innerHTML=o,c.style.display="flex")):c&&(c.style.display="none"),h&&(h.onclick=async()=>{t.id&&(await DD(t.id),c&&(c.style.display="none"))});const f=r?t.player2:t.player1;if(t.status!=="waiting"&&!f.userId){be({message:"遊戲已結束，對手已離開",type:"warning",duration:3e3,offset:window.innerHeight-100,customClass:"bottom-message"}),c&&(c.style.display="none"),be({message:"遊戲已結束，對手已離開",type:"info",duration:3e3,offset:window.innerHeight-100,customClass:"bottom-message"}),RT();return}let p=t.player1.userName||"等待中",g=t.player2.userName||"等待玩家";p==="匿名"&&g==="匿名"&&(g="匿名2"),e.innerHTML=`
            <p>玩家1 (房主): ${p} ${t.player1.choice?"已出拳":"等待中"}</p>
            <p>玩家2: ${g} ${t.player2.choice?"已出拳":"等待中"}</p>
            ${o}
        `}}async function MD(t){try{const e=De.currentUser;if(!e)throw new Error("User not authenticated");const n=t.name.split(".").pop(),r=`avatar_${Date.now()}.${n}`,s=X0(sC,`avatars/${e.uid}/${r}`),i=await Y0(s,t),o=await J0(i.ref),{updateProfile:c}=await hu(async()=>{const{updateProfile:l}=await Promise.resolve().then(()=>Su);return{updateProfile:l}},void 0);return await c(e,{photoURL:o}),o}catch(e){throw console.log("上傳文件失敗",e),e}}
