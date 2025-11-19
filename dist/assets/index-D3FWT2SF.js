(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();const XE="modulepreload",ZE=function(t){return"/"+t},sf={},Wp=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),c=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));s=Promise.allSettled(n.map(l=>{if(l=ZE(l),l in sf)return;sf[l]=!0;const h=l.endsWith(".css"),f=h?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${f}`))return;const p=document.createElement("link");if(p.rel=h?"stylesheet":XE,h||(p.as="script"),p.crossOrigin="",p.href=l,c&&p.setAttribute("nonce",c),document.head.appendChild(p),h)return new Promise((g,I)=>{p.addEventListener("load",g),p.addEventListener("error",()=>I(new Error(`Unable to preload CSS for ${l}`)))})}))}function i(o){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=o,window.dispatchEvent(c),!c.defaultPrevented)throw o}return s.then(o=>{for(const c of o||[])c.status==="rejected"&&i(c.reason);return e().catch(i)})},ev=()=>{};var of={};/**
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
 */const Kp=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},tv=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],c=t[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Gp={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,c=o?t[s+1]:0,l=s+2<t.length,h=l?t[s+2]:0,f=i>>2,p=(i&3)<<4|c>>4;let g=(c&15)<<2|h>>6,I=h&63;l||(I=64,o||(g=64)),r.push(n[f],n[p],n[g],n[I])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Kp(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):tv(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],c=s<t.length?n[t.charAt(s)]:0;++s;const h=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||c==null||h==null||p==null)throw new nv;const g=i<<2|c>>4;if(r.push(g),h!==64){const I=c<<4&240|h>>2;if(r.push(I),p!==64){const N=h<<6&192|p;r.push(N)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class nv extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const rv=function(t){const e=Kp(t);return Gp.encodeByteArray(e,!0)},ra=function(t){return rv(t).replace(/\./g,"")},Qp=function(t){try{return Gp.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function sv(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const iv=()=>sv().__FIREBASE_DEFAULTS__,ov=()=>{if(typeof process>"u"||typeof of>"u")return;const t=of.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},av=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Qp(t[1]);return e&&JSON.parse(e)},Ma=()=>{try{return ev()||iv()||ov()||av()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Jp=t=>{var e,n;return(n=(e=Ma())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},cv=t=>{const e=Jp(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Yp=()=>{var t;return(t=Ma())==null?void 0:t.config},Xp=t=>{var e;return(e=Ma())==null?void 0:e[`_${t}`]};/**
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
 */class lv{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function js(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Zp(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function uv(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...t};return[ra(JSON.stringify(n)),ra(JSON.stringify(o)),""].join(".")}const Si={};function hv(){const t={prod:[],emulator:[]};for(const e of Object.keys(Si))Si[e]?t.emulator.push(e):t.prod.push(e);return t}function fv(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let af=!1;function em(t,e){if(typeof window>"u"||typeof document>"u"||!js(window.location.host)||Si[t]===e||Si[t]||af)return;Si[t]=e;function n(g){return`__firebase__banner__${g}`}const r="__firebase__banner",i=hv().prod.length>0;function o(){const g=document.getElementById(r);g&&g.remove()}function c(g){g.style.display="flex",g.style.background="#7faaf0",g.style.position="fixed",g.style.bottom="5px",g.style.left="5px",g.style.padding=".5em",g.style.borderRadius="5px",g.style.alignItems="center"}function l(g,I){g.setAttribute("width","24"),g.setAttribute("id",I),g.setAttribute("height","24"),g.setAttribute("viewBox","0 0 24 24"),g.setAttribute("fill","none"),g.style.marginLeft="-6px"}function h(){const g=document.createElement("span");return g.style.cursor="pointer",g.style.marginLeft="16px",g.style.fontSize="24px",g.innerHTML=" &times;",g.onclick=()=>{af=!0,o()},g}function f(g,I){g.setAttribute("id",I),g.innerText="Learn more",g.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",g.setAttribute("target","__blank"),g.style.paddingLeft="5px",g.style.textDecoration="underline"}function p(){const g=fv(r),I=n("text"),N=document.getElementById(I)||document.createElement("span"),P=n("learnmore"),V=document.getElementById(P)||document.createElement("a"),$=n("preprendIcon"),K=document.getElementById($)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(g.created){const Q=g.element;c(Q),f(V,P);const z=h();l(K,$),Q.append(K,N,V,z),document.body.appendChild(Q)}i?(N.innerText="Preview backend disconnected.",K.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(K.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,N.innerText="Preview backend running in this workspace."),N.setAttribute("id",I)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
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
 */function pt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function dv(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(pt())}function pv(){var e;const t=(e=Ma())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function mv(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function gv(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function _v(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function yv(){const t=pt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Ev(){return!pv()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function vv(){try{return typeof indexedDB=="object"}catch{return!1}}function Tv(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)==null?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const Iv="FirebaseError";class Mn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Iv,Object.setPrototypeOf(this,Mn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,so.prototype.create)}}class so{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?wv(i,r):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new Mn(s,c,r)}}function wv(t,e){return t.replace(Av,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Av=/\{\$([^}]+)}/g;function bv(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function $r(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(cf(i)&&cf(o)){if(!$r(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function cf(t){return t!==null&&typeof t=="object"}/**
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
 */function io(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function yi(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Ei(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Sv(t,e){const n=new Cv(t,e);return n.subscribe.bind(n)}class Cv{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Rv(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Dc),s.error===void 0&&(s.error=Dc),s.complete===void 0&&(s.complete=Dc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Rv(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Dc(){}/**
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
 */function nt(t){return t&&t._delegate?t._delegate:t}class jr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Dr="[DEFAULT]";/**
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
 */class Pv{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new lv;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Nv(e))try{this.getOrInitializeService({instanceIdentifier:Dr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Dr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Dr){return this.instances.has(e)}getOptions(e=Dr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&o.resolve(s)}return s}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Ov(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Dr){return this.component?this.component.multipleInstances?e:Dr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Ov(t){return t===Dr?void 0:t}function Nv(t){return t.instantiationMode==="EAGER"}/**
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
 */class Vv{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Pv(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var he;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(he||(he={}));const Dv={debug:he.DEBUG,verbose:he.VERBOSE,info:he.INFO,warn:he.WARN,error:he.ERROR,silent:he.SILENT},kv=he.INFO,xv={[he.DEBUG]:"log",[he.VERBOSE]:"log",[he.INFO]:"info",[he.WARN]:"warn",[he.ERROR]:"error"},Lv=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=xv[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Kl{constructor(e){this.name=e,this._logLevel=kv,this._logHandler=Lv,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in he))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Dv[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,he.DEBUG,...e),this._logHandler(this,he.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,he.VERBOSE,...e),this._logHandler(this,he.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,he.INFO,...e),this._logHandler(this,he.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,he.WARN,...e),this._logHandler(this,he.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,he.ERROR,...e),this._logHandler(this,he.ERROR,...e)}}const Mv=(t,e)=>e.some(n=>t instanceof n);let lf,uf;function Fv(){return lf||(lf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Uv(){return uf||(uf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const tm=new WeakMap,il=new WeakMap,nm=new WeakMap,kc=new WeakMap,Gl=new WeakMap;function Bv(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(er(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&tm.set(n,t)}).catch(()=>{}),Gl.set(e,t),e}function $v(t){if(il.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});il.set(t,e)}let ol={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return il.get(t);if(e==="objectStoreNames")return t.objectStoreNames||nm.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return er(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function jv(t){ol=t(ol)}function qv(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(xc(this),e,...n);return nm.set(r,e.sort?e.sort():[e]),er(r)}:Uv().includes(t)?function(...e){return t.apply(xc(this),e),er(tm.get(this))}:function(...e){return er(t.apply(xc(this),e))}}function Hv(t){return typeof t=="function"?qv(t):(t instanceof IDBTransaction&&$v(t),Mv(t,Fv())?new Proxy(t,ol):t)}function er(t){if(t instanceof IDBRequest)return Bv(t);if(kc.has(t))return kc.get(t);const e=Hv(t);return e!==t&&(kc.set(t,e),Gl.set(e,t)),e}const xc=t=>Gl.get(t);function zv(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),c=er(o);return r&&o.addEventListener("upgradeneeded",l=>{r(er(o.result),l.oldVersion,l.newVersion,er(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),c}const Wv=["get","getKey","getAll","getAllKeys","count"],Kv=["put","add","delete","clear"],Lc=new Map;function hf(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Lc.get(e))return Lc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=Kv.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Wv.includes(n)))return;const i=async function(o,...c){const l=this.transaction(o,s?"readwrite":"readonly");let h=l.store;return r&&(h=h.index(c.shift())),(await Promise.all([h[n](...c),s&&l.done]))[0]};return Lc.set(e,i),i}jv(t=>({...t,get:(e,n,r)=>hf(e,n)||t.get(e,n,r),has:(e,n)=>!!hf(e,n)||t.has(e,n)}));/**
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
 */class Gv{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Qv(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Qv(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const al="@firebase/app",ff="0.14.6";/**
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
 */const Pn=new Kl("@firebase/app"),Jv="@firebase/app-compat",Yv="@firebase/analytics-compat",Xv="@firebase/analytics",Zv="@firebase/app-check-compat",eT="@firebase/app-check",tT="@firebase/auth",nT="@firebase/auth-compat",rT="@firebase/database",sT="@firebase/data-connect",iT="@firebase/database-compat",oT="@firebase/functions",aT="@firebase/functions-compat",cT="@firebase/installations",lT="@firebase/installations-compat",uT="@firebase/messaging",hT="@firebase/messaging-compat",fT="@firebase/performance",dT="@firebase/performance-compat",pT="@firebase/remote-config",mT="@firebase/remote-config-compat",gT="@firebase/storage",_T="@firebase/storage-compat",yT="@firebase/firestore",ET="@firebase/ai",vT="@firebase/firestore-compat",TT="firebase",IT="12.6.0";/**
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
 */const cl="[DEFAULT]",wT={[al]:"fire-core",[Jv]:"fire-core-compat",[Xv]:"fire-analytics",[Yv]:"fire-analytics-compat",[eT]:"fire-app-check",[Zv]:"fire-app-check-compat",[tT]:"fire-auth",[nT]:"fire-auth-compat",[rT]:"fire-rtdb",[sT]:"fire-data-connect",[iT]:"fire-rtdb-compat",[oT]:"fire-fn",[aT]:"fire-fn-compat",[cT]:"fire-iid",[lT]:"fire-iid-compat",[uT]:"fire-fcm",[hT]:"fire-fcm-compat",[fT]:"fire-perf",[dT]:"fire-perf-compat",[pT]:"fire-rc",[mT]:"fire-rc-compat",[gT]:"fire-gcs",[_T]:"fire-gcs-compat",[yT]:"fire-fst",[vT]:"fire-fst-compat",[ET]:"fire-vertex","fire-js":"fire-js",[TT]:"fire-js-all"};/**
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
 */const sa=new Map,AT=new Map,ll=new Map;function df(t,e){try{t.container.addComponent(e)}catch(n){Pn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ns(t){const e=t.name;if(ll.has(e))return Pn.debug(`There were multiple attempts to register component ${e}.`),!1;ll.set(e,t);for(const n of sa.values())df(n,t);for(const n of AT.values())df(n,t);return!0}function Ql(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Rt(t){return t==null?!1:t.settings!==void 0}/**
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
 */const bT={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},tr=new so("app","Firebase",bT);/**
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
 */class ST{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new jr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw tr.create("app-deleted",{appName:this._name})}}/**
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
 */const qs=IT;function rm(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:cl,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw tr.create("bad-app-name",{appName:String(s)});if(n||(n=Yp()),!n)throw tr.create("no-options");const i=sa.get(s);if(i){if($r(n,i.options)&&$r(r,i.config))return i;throw tr.create("duplicate-app",{appName:s})}const o=new Vv(s);for(const l of ll.values())o.addComponent(l);const c=new ST(n,r,o);return sa.set(s,c),c}function sm(t=cl){const e=sa.get(t);if(!e&&t===cl&&Yp())return rm();if(!e)throw tr.create("no-app",{appName:t});return e}function nr(t,e,n){let r=wT[t]??t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const o=[`Unable to register library "${r}" with version "${e}":`];s&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Pn.warn(o.join(" "));return}Ns(new jr(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const CT="firebase-heartbeat-database",RT=1,Bi="firebase-heartbeat-store";let Mc=null;function im(){return Mc||(Mc=zv(CT,RT,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Bi)}catch(n){console.warn(n)}}}}).catch(t=>{throw tr.create("idb-open",{originalErrorMessage:t.message})})),Mc}async function PT(t){try{const n=(await im()).transaction(Bi),r=await n.objectStore(Bi).get(om(t));return await n.done,r}catch(e){if(e instanceof Mn)Pn.warn(e.message);else{const n=tr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Pn.warn(n.message)}}}async function pf(t,e){try{const r=(await im()).transaction(Bi,"readwrite");await r.objectStore(Bi).put(e,om(t)),await r.done}catch(n){if(n instanceof Mn)Pn.warn(n.message);else{const r=tr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Pn.warn(r.message)}}}function om(t){return`${t.name}!${t.options.appId}`}/**
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
 */const OT=1024,NT=30;class VT{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new kT(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=mf();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>NT){const o=xT(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Pn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=mf(),{heartbeatsToSend:r,unsentEntries:s}=DT(this._heartbeatsCache.heartbeats),i=ra(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return Pn.warn(n),""}}}function mf(){return new Date().toISOString().substring(0,10)}function DT(t,e=OT){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),gf(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),gf(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class kT{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return vv()?Tv().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await PT(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return pf(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return pf(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function gf(t){return ra(JSON.stringify({version:2,heartbeats:t})).length}function xT(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function LT(t){Ns(new jr("platform-logger",e=>new Gv(e),"PRIVATE")),Ns(new jr("heartbeat",e=>new VT(e),"PRIVATE")),nr(al,ff,t),nr(al,ff,"esm2020"),nr("fire-js","")}LT("");var MT="firebase",FT="12.6.0";/**
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
 */nr(MT,FT,"app");var _f=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var rr,am;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(b,E){function _(){}_.prototype=E.prototype,b.F=E.prototype,b.prototype=new _,b.prototype.constructor=b,b.D=function(A,w,v){for(var y=Array(arguments.length-2),me=2;me<arguments.length;me++)y[me-2]=arguments[me];return E.prototype[w].apply(A,y)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(b,E,_){_||(_=0);const A=Array(16);if(typeof E=="string")for(var w=0;w<16;++w)A[w]=E.charCodeAt(_++)|E.charCodeAt(_++)<<8|E.charCodeAt(_++)<<16|E.charCodeAt(_++)<<24;else for(w=0;w<16;++w)A[w]=E[_++]|E[_++]<<8|E[_++]<<16|E[_++]<<24;E=b.g[0],_=b.g[1],w=b.g[2];let v=b.g[3],y;y=E+(v^_&(w^v))+A[0]+3614090360&4294967295,E=_+(y<<7&4294967295|y>>>25),y=v+(w^E&(_^w))+A[1]+3905402710&4294967295,v=E+(y<<12&4294967295|y>>>20),y=w+(_^v&(E^_))+A[2]+606105819&4294967295,w=v+(y<<17&4294967295|y>>>15),y=_+(E^w&(v^E))+A[3]+3250441966&4294967295,_=w+(y<<22&4294967295|y>>>10),y=E+(v^_&(w^v))+A[4]+4118548399&4294967295,E=_+(y<<7&4294967295|y>>>25),y=v+(w^E&(_^w))+A[5]+1200080426&4294967295,v=E+(y<<12&4294967295|y>>>20),y=w+(_^v&(E^_))+A[6]+2821735955&4294967295,w=v+(y<<17&4294967295|y>>>15),y=_+(E^w&(v^E))+A[7]+4249261313&4294967295,_=w+(y<<22&4294967295|y>>>10),y=E+(v^_&(w^v))+A[8]+1770035416&4294967295,E=_+(y<<7&4294967295|y>>>25),y=v+(w^E&(_^w))+A[9]+2336552879&4294967295,v=E+(y<<12&4294967295|y>>>20),y=w+(_^v&(E^_))+A[10]+4294925233&4294967295,w=v+(y<<17&4294967295|y>>>15),y=_+(E^w&(v^E))+A[11]+2304563134&4294967295,_=w+(y<<22&4294967295|y>>>10),y=E+(v^_&(w^v))+A[12]+1804603682&4294967295,E=_+(y<<7&4294967295|y>>>25),y=v+(w^E&(_^w))+A[13]+4254626195&4294967295,v=E+(y<<12&4294967295|y>>>20),y=w+(_^v&(E^_))+A[14]+2792965006&4294967295,w=v+(y<<17&4294967295|y>>>15),y=_+(E^w&(v^E))+A[15]+1236535329&4294967295,_=w+(y<<22&4294967295|y>>>10),y=E+(w^v&(_^w))+A[1]+4129170786&4294967295,E=_+(y<<5&4294967295|y>>>27),y=v+(_^w&(E^_))+A[6]+3225465664&4294967295,v=E+(y<<9&4294967295|y>>>23),y=w+(E^_&(v^E))+A[11]+643717713&4294967295,w=v+(y<<14&4294967295|y>>>18),y=_+(v^E&(w^v))+A[0]+3921069994&4294967295,_=w+(y<<20&4294967295|y>>>12),y=E+(w^v&(_^w))+A[5]+3593408605&4294967295,E=_+(y<<5&4294967295|y>>>27),y=v+(_^w&(E^_))+A[10]+38016083&4294967295,v=E+(y<<9&4294967295|y>>>23),y=w+(E^_&(v^E))+A[15]+3634488961&4294967295,w=v+(y<<14&4294967295|y>>>18),y=_+(v^E&(w^v))+A[4]+3889429448&4294967295,_=w+(y<<20&4294967295|y>>>12),y=E+(w^v&(_^w))+A[9]+568446438&4294967295,E=_+(y<<5&4294967295|y>>>27),y=v+(_^w&(E^_))+A[14]+3275163606&4294967295,v=E+(y<<9&4294967295|y>>>23),y=w+(E^_&(v^E))+A[3]+4107603335&4294967295,w=v+(y<<14&4294967295|y>>>18),y=_+(v^E&(w^v))+A[8]+1163531501&4294967295,_=w+(y<<20&4294967295|y>>>12),y=E+(w^v&(_^w))+A[13]+2850285829&4294967295,E=_+(y<<5&4294967295|y>>>27),y=v+(_^w&(E^_))+A[2]+4243563512&4294967295,v=E+(y<<9&4294967295|y>>>23),y=w+(E^_&(v^E))+A[7]+1735328473&4294967295,w=v+(y<<14&4294967295|y>>>18),y=_+(v^E&(w^v))+A[12]+2368359562&4294967295,_=w+(y<<20&4294967295|y>>>12),y=E+(_^w^v)+A[5]+4294588738&4294967295,E=_+(y<<4&4294967295|y>>>28),y=v+(E^_^w)+A[8]+2272392833&4294967295,v=E+(y<<11&4294967295|y>>>21),y=w+(v^E^_)+A[11]+1839030562&4294967295,w=v+(y<<16&4294967295|y>>>16),y=_+(w^v^E)+A[14]+4259657740&4294967295,_=w+(y<<23&4294967295|y>>>9),y=E+(_^w^v)+A[1]+2763975236&4294967295,E=_+(y<<4&4294967295|y>>>28),y=v+(E^_^w)+A[4]+1272893353&4294967295,v=E+(y<<11&4294967295|y>>>21),y=w+(v^E^_)+A[7]+4139469664&4294967295,w=v+(y<<16&4294967295|y>>>16),y=_+(w^v^E)+A[10]+3200236656&4294967295,_=w+(y<<23&4294967295|y>>>9),y=E+(_^w^v)+A[13]+681279174&4294967295,E=_+(y<<4&4294967295|y>>>28),y=v+(E^_^w)+A[0]+3936430074&4294967295,v=E+(y<<11&4294967295|y>>>21),y=w+(v^E^_)+A[3]+3572445317&4294967295,w=v+(y<<16&4294967295|y>>>16),y=_+(w^v^E)+A[6]+76029189&4294967295,_=w+(y<<23&4294967295|y>>>9),y=E+(_^w^v)+A[9]+3654602809&4294967295,E=_+(y<<4&4294967295|y>>>28),y=v+(E^_^w)+A[12]+3873151461&4294967295,v=E+(y<<11&4294967295|y>>>21),y=w+(v^E^_)+A[15]+530742520&4294967295,w=v+(y<<16&4294967295|y>>>16),y=_+(w^v^E)+A[2]+3299628645&4294967295,_=w+(y<<23&4294967295|y>>>9),y=E+(w^(_|~v))+A[0]+4096336452&4294967295,E=_+(y<<6&4294967295|y>>>26),y=v+(_^(E|~w))+A[7]+1126891415&4294967295,v=E+(y<<10&4294967295|y>>>22),y=w+(E^(v|~_))+A[14]+2878612391&4294967295,w=v+(y<<15&4294967295|y>>>17),y=_+(v^(w|~E))+A[5]+4237533241&4294967295,_=w+(y<<21&4294967295|y>>>11),y=E+(w^(_|~v))+A[12]+1700485571&4294967295,E=_+(y<<6&4294967295|y>>>26),y=v+(_^(E|~w))+A[3]+2399980690&4294967295,v=E+(y<<10&4294967295|y>>>22),y=w+(E^(v|~_))+A[10]+4293915773&4294967295,w=v+(y<<15&4294967295|y>>>17),y=_+(v^(w|~E))+A[1]+2240044497&4294967295,_=w+(y<<21&4294967295|y>>>11),y=E+(w^(_|~v))+A[8]+1873313359&4294967295,E=_+(y<<6&4294967295|y>>>26),y=v+(_^(E|~w))+A[15]+4264355552&4294967295,v=E+(y<<10&4294967295|y>>>22),y=w+(E^(v|~_))+A[6]+2734768916&4294967295,w=v+(y<<15&4294967295|y>>>17),y=_+(v^(w|~E))+A[13]+1309151649&4294967295,_=w+(y<<21&4294967295|y>>>11),y=E+(w^(_|~v))+A[4]+4149444226&4294967295,E=_+(y<<6&4294967295|y>>>26),y=v+(_^(E|~w))+A[11]+3174756917&4294967295,v=E+(y<<10&4294967295|y>>>22),y=w+(E^(v|~_))+A[2]+718787259&4294967295,w=v+(y<<15&4294967295|y>>>17),y=_+(v^(w|~E))+A[9]+3951481745&4294967295,b.g[0]=b.g[0]+E&4294967295,b.g[1]=b.g[1]+(w+(y<<21&4294967295|y>>>11))&4294967295,b.g[2]=b.g[2]+w&4294967295,b.g[3]=b.g[3]+v&4294967295}r.prototype.v=function(b,E){E===void 0&&(E=b.length);const _=E-this.blockSize,A=this.C;let w=this.h,v=0;for(;v<E;){if(w==0)for(;v<=_;)s(this,b,v),v+=this.blockSize;if(typeof b=="string"){for(;v<E;)if(A[w++]=b.charCodeAt(v++),w==this.blockSize){s(this,A),w=0;break}}else for(;v<E;)if(A[w++]=b[v++],w==this.blockSize){s(this,A),w=0;break}}this.h=w,this.o+=E},r.prototype.A=function(){var b=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);b[0]=128;for(var E=1;E<b.length-8;++E)b[E]=0;E=this.o*8;for(var _=b.length-8;_<b.length;++_)b[_]=E&255,E/=256;for(this.v(b),b=Array(16),E=0,_=0;_<4;++_)for(let A=0;A<32;A+=8)b[E++]=this.g[_]>>>A&255;return b};function i(b,E){var _=c;return Object.prototype.hasOwnProperty.call(_,b)?_[b]:_[b]=E(b)}function o(b,E){this.h=E;const _=[];let A=!0;for(let w=b.length-1;w>=0;w--){const v=b[w]|0;A&&v==E||(_[w]=v,A=!1)}this.g=_}var c={};function l(b){return-128<=b&&b<128?i(b,function(E){return new o([E|0],E<0?-1:0)}):new o([b|0],b<0?-1:0)}function h(b){if(isNaN(b)||!isFinite(b))return p;if(b<0)return V(h(-b));const E=[];let _=1;for(let A=0;b>=_;A++)E[A]=b/_|0,_*=4294967296;return new o(E,0)}function f(b,E){if(b.length==0)throw Error("number format error: empty string");if(E=E||10,E<2||36<E)throw Error("radix out of range: "+E);if(b.charAt(0)=="-")return V(f(b.substring(1),E));if(b.indexOf("-")>=0)throw Error('number format error: interior "-" character');const _=h(Math.pow(E,8));let A=p;for(let v=0;v<b.length;v+=8){var w=Math.min(8,b.length-v);const y=parseInt(b.substring(v,v+w),E);w<8?(w=h(Math.pow(E,w)),A=A.j(w).add(h(y))):(A=A.j(_),A=A.add(h(y)))}return A}var p=l(0),g=l(1),I=l(16777216);t=o.prototype,t.m=function(){if(P(this))return-V(this).m();let b=0,E=1;for(let _=0;_<this.g.length;_++){const A=this.i(_);b+=(A>=0?A:4294967296+A)*E,E*=4294967296}return b},t.toString=function(b){if(b=b||10,b<2||36<b)throw Error("radix out of range: "+b);if(N(this))return"0";if(P(this))return"-"+V(this).toString(b);const E=h(Math.pow(b,6));var _=this;let A="";for(;;){const w=z(_,E).g;_=$(_,w.j(E));let v=((_.g.length>0?_.g[0]:_.h)>>>0).toString(b);if(_=w,N(_))return v+A;for(;v.length<6;)v="0"+v;A=v+A}},t.i=function(b){return b<0?0:b<this.g.length?this.g[b]:this.h};function N(b){if(b.h!=0)return!1;for(let E=0;E<b.g.length;E++)if(b.g[E]!=0)return!1;return!0}function P(b){return b.h==-1}t.l=function(b){return b=$(this,b),P(b)?-1:N(b)?0:1};function V(b){const E=b.g.length,_=[];for(let A=0;A<E;A++)_[A]=~b.g[A];return new o(_,~b.h).add(g)}t.abs=function(){return P(this)?V(this):this},t.add=function(b){const E=Math.max(this.g.length,b.g.length),_=[];let A=0;for(let w=0;w<=E;w++){let v=A+(this.i(w)&65535)+(b.i(w)&65535),y=(v>>>16)+(this.i(w)>>>16)+(b.i(w)>>>16);A=y>>>16,v&=65535,y&=65535,_[w]=y<<16|v}return new o(_,_[_.length-1]&-2147483648?-1:0)};function $(b,E){return b.add(V(E))}t.j=function(b){if(N(this)||N(b))return p;if(P(this))return P(b)?V(this).j(V(b)):V(V(this).j(b));if(P(b))return V(this.j(V(b)));if(this.l(I)<0&&b.l(I)<0)return h(this.m()*b.m());const E=this.g.length+b.g.length,_=[];for(var A=0;A<2*E;A++)_[A]=0;for(A=0;A<this.g.length;A++)for(let w=0;w<b.g.length;w++){const v=this.i(A)>>>16,y=this.i(A)&65535,me=b.i(w)>>>16,Ke=b.i(w)&65535;_[2*A+2*w]+=y*Ke,K(_,2*A+2*w),_[2*A+2*w+1]+=v*Ke,K(_,2*A+2*w+1),_[2*A+2*w+1]+=y*me,K(_,2*A+2*w+1),_[2*A+2*w+2]+=v*me,K(_,2*A+2*w+2)}for(b=0;b<E;b++)_[b]=_[2*b+1]<<16|_[2*b];for(b=E;b<2*E;b++)_[b]=0;return new o(_,0)};function K(b,E){for(;(b[E]&65535)!=b[E];)b[E+1]+=b[E]>>>16,b[E]&=65535,E++}function Q(b,E){this.g=b,this.h=E}function z(b,E){if(N(E))throw Error("division by zero");if(N(b))return new Q(p,p);if(P(b))return E=z(V(b),E),new Q(V(E.g),V(E.h));if(P(E))return E=z(b,V(E)),new Q(V(E.g),E.h);if(b.g.length>30){if(P(b)||P(E))throw Error("slowDivide_ only works with positive integers.");for(var _=g,A=E;A.l(b)<=0;)_=ae(_),A=ae(A);var w=ce(_,1),v=ce(A,1);for(A=ce(A,2),_=ce(_,2);!N(A);){var y=v.add(A);y.l(b)<=0&&(w=w.add(_),v=y),A=ce(A,1),_=ce(_,1)}return E=$(b,w.j(E)),new Q(w,E)}for(w=p;b.l(E)>=0;){for(_=Math.max(1,Math.floor(b.m()/E.m())),A=Math.ceil(Math.log(_)/Math.LN2),A=A<=48?1:Math.pow(2,A-48),v=h(_),y=v.j(E);P(y)||y.l(b)>0;)_-=A,v=h(_),y=v.j(E);N(v)&&(v=g),w=w.add(v),b=$(b,y)}return new Q(w,b)}t.B=function(b){return z(this,b).h},t.and=function(b){const E=Math.max(this.g.length,b.g.length),_=[];for(let A=0;A<E;A++)_[A]=this.i(A)&b.i(A);return new o(_,this.h&b.h)},t.or=function(b){const E=Math.max(this.g.length,b.g.length),_=[];for(let A=0;A<E;A++)_[A]=this.i(A)|b.i(A);return new o(_,this.h|b.h)},t.xor=function(b){const E=Math.max(this.g.length,b.g.length),_=[];for(let A=0;A<E;A++)_[A]=this.i(A)^b.i(A);return new o(_,this.h^b.h)};function ae(b){const E=b.g.length+1,_=[];for(let A=0;A<E;A++)_[A]=b.i(A)<<1|b.i(A-1)>>>31;return new o(_,b.h)}function ce(b,E){const _=E>>5;E%=32;const A=b.g.length-_,w=[];for(let v=0;v<A;v++)w[v]=E>0?b.i(v+_)>>>E|b.i(v+_+1)<<32-E:b.i(v+_);return new o(w,b.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,am=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=f,rr=o}).apply(typeof _f<"u"?_f:typeof self<"u"?self:typeof window<"u"?window:{});var Oo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var cm,vi,lm,qo,ul,um,hm,fm;(function(){var t,e=Object.defineProperty;function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Oo=="object"&&Oo];for(var u=0;u<a.length;++u){var d=a[u];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function s(a,u){if(u)e:{var d=r;a=a.split(".");for(var m=0;m<a.length-1;m++){var C=a[m];if(!(C in d))break e;d=d[C]}a=a[a.length-1],m=d[a],u=u(m),u!=m&&u!=null&&e(d,a,{configurable:!0,writable:!0,value:u})}}s("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(a){return a||function(u){var d=[],m;for(m in u)Object.prototype.hasOwnProperty.call(u,m)&&d.push([m,u[m]]);return d}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},o=this||self;function c(a){var u=typeof a;return u=="object"&&a!=null||u=="function"}function l(a,u,d){return a.call.apply(a.bind,arguments)}function h(a,u,d){return h=l,h.apply(null,arguments)}function f(a,u){var d=Array.prototype.slice.call(arguments,1);return function(){var m=d.slice();return m.push.apply(m,arguments),a.apply(this,m)}}function p(a,u){function d(){}d.prototype=u.prototype,a.Z=u.prototype,a.prototype=new d,a.prototype.constructor=a,a.Ob=function(m,C,R){for(var j=Array(arguments.length-2),le=2;le<arguments.length;le++)j[le-2]=arguments[le];return u.prototype[C].apply(m,j)}}var g=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function I(a){const u=a.length;if(u>0){const d=Array(u);for(let m=0;m<u;m++)d[m]=a[m];return d}return[]}function N(a,u){for(let m=1;m<arguments.length;m++){const C=arguments[m];var d=typeof C;if(d=d!="object"?d:C?Array.isArray(C)?"array":d:"null",d=="array"||d=="object"&&typeof C.length=="number"){d=a.length||0;const R=C.length||0;a.length=d+R;for(let j=0;j<R;j++)a[d+j]=C[j]}else a.push(C)}}class P{constructor(u,d){this.i=u,this.j=d,this.h=0,this.g=null}get(){let u;return this.h>0?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function V(a){o.setTimeout(()=>{throw a},0)}function $(){var a=b;let u=null;return a.g&&(u=a.g,a.g=a.g.next,a.g||(a.h=null),u.next=null),u}class K{constructor(){this.h=this.g=null}add(u,d){const m=Q.get();m.set(u,d),this.h?this.h.next=m:this.g=m,this.h=m}}var Q=new P(()=>new z,a=>a.reset());class z{constructor(){this.next=this.g=this.h=null}set(u,d){this.h=u,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let ae,ce=!1,b=new K,E=()=>{const a=Promise.resolve(void 0);ae=()=>{a.then(_)}};function _(){for(var a;a=$();){try{a.h.call(a.g)}catch(d){V(d)}var u=Q;u.j(a),u.h<100&&(u.h++,a.next=u.g,u.g=a)}ce=!1}function A(){this.u=this.u,this.C=this.C}A.prototype.u=!1,A.prototype.dispose=function(){this.u||(this.u=!0,this.N())},A.prototype[Symbol.dispose]=function(){this.dispose()},A.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function w(a,u){this.type=a,this.g=this.target=u,this.defaultPrevented=!1}w.prototype.h=function(){this.defaultPrevented=!0};var v=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,u=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};o.addEventListener("test",d,u),o.removeEventListener("test",d,u)}catch{}return a}();function y(a){return/^[\s\xa0]*$/.test(a)}function me(a,u){w.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,u)}p(me,w),me.prototype.init=function(a,u){const d=this.type=a.type,m=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=u,u=a.relatedTarget,u||(d=="mouseover"?u=a.fromElement:d=="mouseout"&&(u=a.toElement)),this.relatedTarget=u,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&me.Z.h.call(this)},me.prototype.h=function(){me.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Ke="closure_listenable_"+(Math.random()*1e6|0),Le=0;function Re(a,u,d,m,C){this.listener=a,this.proxy=null,this.src=u,this.type=d,this.capture=!!m,this.ha=C,this.key=++Le,this.da=this.fa=!1}function ye(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Ot(a,u,d){for(const m in a)u.call(d,a[m],m,a)}function os(a,u){for(const d in a)u.call(void 0,a[d],d,a)}function Qt(a){const u={};for(const d in a)u[d]=a[d];return u}const wt="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Js(a,u){let d,m;for(let C=1;C<arguments.length;C++){m=arguments[C];for(d in m)a[d]=m[d];for(let R=0;R<wt.length;R++)d=wt[R],Object.prototype.hasOwnProperty.call(m,d)&&(a[d]=m[d])}}function as(a){this.src=a,this.g={},this.h=0}as.prototype.add=function(a,u,d,m,C){const R=a.toString();a=this.g[R],a||(a=this.g[R]=[],this.h++);const j=mn(a,u,m,C);return j>-1?(u=a[j],d||(u.fa=!1)):(u=new Re(u,this.src,R,!!m,C),u.fa=d,a.push(u)),u};function Ys(a,u){const d=u.type;if(d in a.g){var m=a.g[d],C=Array.prototype.indexOf.call(m,u,void 0),R;(R=C>=0)&&Array.prototype.splice.call(m,C,1),R&&(ye(u),a.g[d].length==0&&(delete a.g[d],a.h--))}}function mn(a,u,d,m){for(let C=0;C<a.length;++C){const R=a[C];if(!R.da&&R.listener==u&&R.capture==!!d&&R.ha==m)return C}return-1}var $n="closure_lm_"+(Math.random()*1e6|0),Tr={};function Xs(a,u,d,m,C){if(Array.isArray(u)){for(let R=0;R<u.length;R++)Xs(a,u[R],d,m,C);return null}return d=q(d),a&&a[Ke]?a.J(u,d,c(m)?!!m.capture:!1,C):Ir(a,u,d,!1,m,C)}function Ir(a,u,d,m,C,R){if(!u)throw Error("Invalid event type");const j=c(C)?!!C.capture:!!C;let le=x(a);if(le||(a[$n]=le=new as(a)),d=le.add(u,d,m,j,R),d.proxy)return d;if(m=mh(),d.proxy=m,m.src=a,m.listener=d,a.addEventListener)v||(C=j),C===void 0&&(C=!1),a.addEventListener(u.toString(),m,C);else if(a.attachEvent)a.attachEvent(O(u.toString()),m);else if(a.addListener&&a.removeListener)a.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return d}function mh(){function a(d){return u.call(a.src,a.listener,d)}const u=B;return a}function T(a,u,d,m,C){if(Array.isArray(u))for(var R=0;R<u.length;R++)T(a,u[R],d,m,C);else m=c(m)?!!m.capture:!!m,d=q(d),a&&a[Ke]?(a=a.i,R=String(u).toString(),R in a.g&&(u=a.g[R],d=mn(u,d,m,C),d>-1&&(ye(u[d]),Array.prototype.splice.call(u,d,1),u.length==0&&(delete a.g[R],a.h--)))):a&&(a=x(a))&&(u=a.g[u.toString()],a=-1,u&&(a=mn(u,d,m,C)),(d=a>-1?u[a]:null)&&S(d))}function S(a){if(typeof a!="number"&&a&&!a.da){var u=a.src;if(u&&u[Ke])Ys(u.i,a);else{var d=a.type,m=a.proxy;u.removeEventListener?u.removeEventListener(d,m,a.capture):u.detachEvent?u.detachEvent(O(d),m):u.addListener&&u.removeListener&&u.removeListener(m),(d=x(u))?(Ys(d,a),d.h==0&&(d.src=null,u[$n]=null)):ye(a)}}}function O(a){return a in Tr?Tr[a]:Tr[a]="on"+a}function B(a,u){if(a.da)a=!0;else{u=new me(u,this);const d=a.listener,m=a.ha||a.src;a.fa&&S(a),a=d.call(m,u)}return a}function x(a){return a=a[$n],a instanceof as?a:null}var L="__closure_events_fn_"+(Math.random()*1e9>>>0);function q(a){return typeof a=="function"?a:(a[L]||(a[L]=function(u){return a.handleEvent(u)}),a[L])}function U(){A.call(this),this.i=new as(this),this.M=this,this.G=null}p(U,A),U.prototype[Ke]=!0,U.prototype.removeEventListener=function(a,u,d,m){T(this,a,u,d,m)};function F(a,u){var d,m=a.G;if(m)for(d=[];m;m=m.G)d.push(m);if(a=a.M,m=u.type||u,typeof u=="string")u=new w(u,a);else if(u instanceof w)u.target=u.target||a;else{var C=u;u=new w(m,a),Js(u,C)}C=!0;let R,j;if(d)for(j=d.length-1;j>=0;j--)R=u.g=d[j],C=M(R,m,!0,u)&&C;if(R=u.g=a,C=M(R,m,!0,u)&&C,C=M(R,m,!1,u)&&C,d)for(j=0;j<d.length;j++)R=u.g=d[j],C=M(R,m,!1,u)&&C}U.prototype.N=function(){if(U.Z.N.call(this),this.i){var a=this.i;for(const u in a.g){const d=a.g[u];for(let m=0;m<d.length;m++)ye(d[m]);delete a.g[u],a.h--}}this.G=null},U.prototype.J=function(a,u,d,m){return this.i.add(String(a),u,!1,d,m)},U.prototype.K=function(a,u,d,m){return this.i.add(String(a),u,!0,d,m)};function M(a,u,d,m){if(u=a.i.g[String(u)],!u)return!0;u=u.concat();let C=!0;for(let R=0;R<u.length;++R){const j=u[R];if(j&&!j.da&&j.capture==d){const le=j.listener,Be=j.ha||j.src;j.fa&&Ys(a.i,j),C=le.call(Be,m)!==!1&&C}}return C&&!m.defaultPrevented}function X(a,u){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=h(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(u)>2147483647?-1:o.setTimeout(a,u||0)}function H(a){a.g=X(()=>{a.g=null,a.i&&(a.i=!1,H(a))},a.l);const u=a.h;a.h=null,a.m.apply(null,u)}class Y extends A{constructor(u,d){super(),this.m=u,this.l=d,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:H(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Z(a){A.call(this),this.h=a,this.g={}}p(Z,A);var ue=[];function Ie(a){Ot(a.g,function(u,d){this.g.hasOwnProperty(d)&&S(u)},a),a.g={}}Z.prototype.N=function(){Z.Z.N.call(this),Ie(this)},Z.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ge=o.JSON.stringify,st=o.JSON.parse,it=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function At(){}function bt(){}var Mt={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function cs(){w.call(this,"d")}p(cs,w);function Ge(){w.call(this,"c")}p(Ge,w);var je={},Zs=null;function wr(){return Zs=Zs||new U}je.Ia="serverreachability";function gh(a){w.call(this,je.Ia,a)}p(gh,w);function ei(a){const u=wr();F(u,new gh(u))}je.STAT_EVENT="statevent";function _h(a,u){w.call(this,je.STAT_EVENT,a),this.stat=u}p(_h,w);function mt(a){const u=wr();F(u,new _h(u,a))}je.Ja="timingevent";function yh(a,u){w.call(this,je.Ja,a),this.size=u}p(yh,w);function ti(a,u){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},u)}function ni(){this.g=!0}ni.prototype.ua=function(){this.g=!1};function OE(a,u,d,m,C,R){a.info(function(){if(a.g)if(R){var j="",le=R.split("&");for(let we=0;we<le.length;we++){var Be=le[we].split("=");if(Be.length>1){const qe=Be[0];Be=Be[1];const Yt=qe.split("_");j=Yt.length>=2&&Yt[1]=="type"?j+(qe+"="+Be+"&"):j+(qe+"=redacted&")}}}else j=null;else j=R;return"XMLHTTP REQ ("+m+") [attempt "+C+"]: "+u+`
`+d+`
`+j})}function NE(a,u,d,m,C,R,j){a.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+C+"]: "+u+`
`+d+`
`+R+" "+j})}function ls(a,u,d,m){a.info(function(){return"XMLHTTP TEXT ("+u+"): "+DE(a,d)+(m?" "+m:"")})}function VE(a,u){a.info(function(){return"TIMEOUT: "+u})}ni.prototype.info=function(){};function DE(a,u){if(!a.g)return u;if(!u)return null;try{const R=JSON.parse(u);if(R){for(a=0;a<R.length;a++)if(Array.isArray(R[a])){var d=R[a];if(!(d.length<2)){var m=d[1];if(Array.isArray(m)&&!(m.length<1)){var C=m[0];if(C!="noop"&&C!="stop"&&C!="close")for(let j=1;j<m.length;j++)m[j]=""}}}}return ge(R)}catch{return u}}var vo={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Eh={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},vh;function Ec(){}p(Ec,At),Ec.prototype.g=function(){return new XMLHttpRequest},vh=new Ec;function ri(a){return encodeURIComponent(String(a))}function kE(a){var u=1;a=a.split(":");const d=[];for(;u>0&&a.length;)d.push(a.shift()),u--;return a.length&&d.push(a.join(":")),d}function jn(a,u,d,m){this.j=a,this.i=u,this.l=d,this.S=m||1,this.V=new Z(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Th}function Th(){this.i=null,this.g="",this.h=!1}var Ih={},vc={};function Tc(a,u,d){a.M=1,a.A=Io(Jt(u)),a.u=d,a.R=!0,wh(a,null)}function wh(a,u){a.F=Date.now(),To(a),a.B=Jt(a.A);var d=a.B,m=a.S;Array.isArray(m)||(m=[String(m)]),Lh(d.i,"t",m),a.C=0,d=a.j.L,a.h=new Th,a.g=ef(a.j,d?u:null,!a.u),a.P>0&&(a.O=new Y(h(a.Y,a,a.g),a.P)),u=a.V,d=a.g,m=a.ba;var C="readystatechange";Array.isArray(C)||(C&&(ue[0]=C.toString()),C=ue);for(let R=0;R<C.length;R++){const j=Xs(d,C[R],m||u.handleEvent,!1,u.h||u);if(!j)break;u.g[j.key]=j}u=a.J?Qt(a.J):{},a.u?(a.v||(a.v="POST"),u["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,u)):(a.v="GET",a.g.ea(a.B,a.v,null,u)),ei(),OE(a.i,a.v,a.B,a.l,a.S,a.u)}jn.prototype.ba=function(a){a=a.target;const u=this.O;u&&zn(a)==3?u.j():this.Y(a)},jn.prototype.Y=function(a){try{if(a==this.g)e:{const le=zn(this.g),Be=this.g.ya(),we=this.g.ca();if(!(le<3)&&(le!=3||this.g&&(this.h.h||this.g.la()||qh(this.g)))){this.K||le!=4||Be==7||(Be==8||we<=0?ei(3):ei(2)),Ic(this);var u=this.g.ca();this.X=u;var d=xE(this);if(this.o=u==200,NE(this.i,this.v,this.B,this.l,this.S,le,u),this.o){if(this.U&&!this.L){t:{if(this.g){var m,C=this.g;if((m=C.g?C.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!y(m)){var R=m;break t}}R=null}if(a=R)ls(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,wc(this,a);else{this.o=!1,this.m=3,mt(12),Ar(this),si(this);break e}}if(this.R){a=!0;let qe;for(;!this.K&&this.C<d.length;)if(qe=LE(this,d),qe==vc){le==4&&(this.m=4,mt(14),a=!1),ls(this.i,this.l,null,"[Incomplete Response]");break}else if(qe==Ih){this.m=4,mt(15),ls(this.i,this.l,d,"[Invalid Chunk]"),a=!1;break}else ls(this.i,this.l,qe,null),wc(this,qe);if(Ah(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),le!=4||d.length!=0||this.h.h||(this.m=1,mt(16),a=!1),this.o=this.o&&a,!a)ls(this.i,this.l,d,"[Invalid Chunked Response]"),Ar(this),si(this);else if(d.length>0&&!this.W){this.W=!0;var j=this.j;j.g==this&&j.aa&&!j.P&&(j.j.info("Great, no buffering proxy detected. Bytes received: "+d.length),Nc(j),j.P=!0,mt(11))}}else ls(this.i,this.l,d,null),wc(this,d);le==4&&Ar(this),this.o&&!this.K&&(le==4?Jh(this.j,this):(this.o=!1,To(this)))}else JE(this.g),u==400&&d.indexOf("Unknown SID")>0?(this.m=3,mt(12)):(this.m=0,mt(13)),Ar(this),si(this)}}}catch{}finally{}};function xE(a){if(!Ah(a))return a.g.la();const u=qh(a.g);if(u==="")return"";let d="";const m=u.length,C=zn(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return Ar(a),si(a),"";a.h.i=new o.TextDecoder}for(let R=0;R<m;R++)a.h.h=!0,d+=a.h.i.decode(u[R],{stream:!(C&&R==m-1)});return u.length=0,a.h.g+=d,a.C=0,a.h.g}function Ah(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function LE(a,u){var d=a.C,m=u.indexOf(`
`,d);return m==-1?vc:(d=Number(u.substring(d,m)),isNaN(d)?Ih:(m+=1,m+d>u.length?vc:(u=u.slice(m,m+d),a.C=m+d,u)))}jn.prototype.cancel=function(){this.K=!0,Ar(this)};function To(a){a.T=Date.now()+a.H,bh(a,a.H)}function bh(a,u){if(a.D!=null)throw Error("WatchDog timer not null");a.D=ti(h(a.aa,a),u)}function Ic(a){a.D&&(o.clearTimeout(a.D),a.D=null)}jn.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(VE(this.i,this.B),this.M!=2&&(ei(),mt(17)),Ar(this),this.m=2,si(this)):bh(this,this.T-a)};function si(a){a.j.I==0||a.K||Jh(a.j,a)}function Ar(a){Ic(a);var u=a.O;u&&typeof u.dispose=="function"&&u.dispose(),a.O=null,Ie(a.V),a.g&&(u=a.g,a.g=null,u.abort(),u.dispose())}function wc(a,u){try{var d=a.j;if(d.I!=0&&(d.g==a||Ac(d.h,a))){if(!a.L&&Ac(d.h,a)&&d.I==3){try{var m=d.Ba.g.parse(u)}catch{m=null}if(Array.isArray(m)&&m.length==3){var C=m;if(C[0]==0){e:if(!d.v){if(d.g)if(d.g.F+3e3<a.F)Co(d),bo(d);else break e;Oc(d),mt(18)}}else d.xa=C[1],0<d.xa-d.K&&C[2]<37500&&d.F&&d.A==0&&!d.C&&(d.C=ti(h(d.Va,d),6e3));Rh(d.h)<=1&&d.ta&&(d.ta=void 0)}else Sr(d,11)}else if((a.L||d.g==a)&&Co(d),!y(u))for(C=d.Ba.g.parse(u),u=0;u<C.length;u++){let we=C[u];const qe=we[0];if(!(qe<=d.K))if(d.K=qe,we=we[1],d.I==2)if(we[0]=="c"){d.M=we[1],d.ba=we[2];const Yt=we[3];Yt!=null&&(d.ka=Yt,d.j.info("VER="+d.ka));const Cr=we[4];Cr!=null&&(d.za=Cr,d.j.info("SVER="+d.za));const Wn=we[5];Wn!=null&&typeof Wn=="number"&&Wn>0&&(m=1.5*Wn,d.O=m,d.j.info("backChannelRequestTimeoutMs_="+m)),m=d;const Kn=a.g;if(Kn){const Po=Kn.g?Kn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Po){var R=m.h;R.g||Po.indexOf("spdy")==-1&&Po.indexOf("quic")==-1&&Po.indexOf("h2")==-1||(R.j=R.l,R.g=new Set,R.h&&(bc(R,R.h),R.h=null))}if(m.G){const Vc=Kn.g?Kn.g.getResponseHeader("X-HTTP-Session-Id"):null;Vc&&(m.wa=Vc,Pe(m.J,m.G,Vc))}}d.I=3,d.l&&d.l.ra(),d.aa&&(d.T=Date.now()-a.F,d.j.info("Handshake RTT: "+d.T+"ms")),m=d;var j=a;if(m.na=Zh(m,m.L?m.ba:null,m.W),j.L){Ph(m.h,j);var le=j,Be=m.O;Be&&(le.H=Be),le.D&&(Ic(le),To(le)),m.g=j}else Gh(m);d.i.length>0&&So(d)}else we[0]!="stop"&&we[0]!="close"||Sr(d,7);else d.I==3&&(we[0]=="stop"||we[0]=="close"?we[0]=="stop"?Sr(d,7):Pc(d):we[0]!="noop"&&d.l&&d.l.qa(we),d.A=0)}}ei(4)}catch{}}var ME=class{constructor(a,u){this.g=a,this.map=u}};function Sh(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Ch(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Rh(a){return a.h?1:a.g?a.g.size:0}function Ac(a,u){return a.h?a.h==u:a.g?a.g.has(u):!1}function bc(a,u){a.g?a.g.add(u):a.h=u}function Ph(a,u){a.h&&a.h==u?a.h=null:a.g&&a.g.has(u)&&a.g.delete(u)}Sh.prototype.cancel=function(){if(this.i=Oh(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Oh(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let u=a.i;for(const d of a.g.values())u=u.concat(d.G);return u}return I(a.i)}var Nh=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function FE(a,u){if(a){a=a.split("&");for(let d=0;d<a.length;d++){const m=a[d].indexOf("=");let C,R=null;m>=0?(C=a[d].substring(0,m),R=a[d].substring(m+1)):C=a[d],u(C,R?decodeURIComponent(R.replace(/\+/g," ")):"")}}}function qn(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let u;a instanceof qn?(this.l=a.l,ii(this,a.j),this.o=a.o,this.g=a.g,oi(this,a.u),this.h=a.h,Sc(this,Mh(a.i)),this.m=a.m):a&&(u=String(a).match(Nh))?(this.l=!1,ii(this,u[1]||"",!0),this.o=ai(u[2]||""),this.g=ai(u[3]||"",!0),oi(this,u[4]),this.h=ai(u[5]||"",!0),Sc(this,u[6]||"",!0),this.m=ai(u[7]||"")):(this.l=!1,this.i=new li(null,this.l))}qn.prototype.toString=function(){const a=[];var u=this.j;u&&a.push(ci(u,Vh,!0),":");var d=this.g;return(d||u=="file")&&(a.push("//"),(u=this.o)&&a.push(ci(u,Vh,!0),"@"),a.push(ri(d).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.u,d!=null&&a.push(":",String(d))),(d=this.h)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(ci(d,d.charAt(0)=="/"?$E:BE,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",ci(d,qE)),a.join("")},qn.prototype.resolve=function(a){const u=Jt(this);let d=!!a.j;d?ii(u,a.j):d=!!a.o,d?u.o=a.o:d=!!a.g,d?u.g=a.g:d=a.u!=null;var m=a.h;if(d)oi(u,a.u);else if(d=!!a.h){if(m.charAt(0)!="/")if(this.g&&!this.h)m="/"+m;else{var C=u.h.lastIndexOf("/");C!=-1&&(m=u.h.slice(0,C+1)+m)}if(C=m,C==".."||C==".")m="";else if(C.indexOf("./")!=-1||C.indexOf("/.")!=-1){m=C.lastIndexOf("/",0)==0,C=C.split("/");const R=[];for(let j=0;j<C.length;){const le=C[j++];le=="."?m&&j==C.length&&R.push(""):le==".."?((R.length>1||R.length==1&&R[0]!="")&&R.pop(),m&&j==C.length&&R.push("")):(R.push(le),m=!0)}m=R.join("/")}else m=C}return d?u.h=m:d=a.i.toString()!=="",d?Sc(u,Mh(a.i)):d=!!a.m,d&&(u.m=a.m),u};function Jt(a){return new qn(a)}function ii(a,u,d){a.j=d?ai(u,!0):u,a.j&&(a.j=a.j.replace(/:$/,""))}function oi(a,u){if(u){if(u=Number(u),isNaN(u)||u<0)throw Error("Bad port number "+u);a.u=u}else a.u=null}function Sc(a,u,d){u instanceof li?(a.i=u,HE(a.i,a.l)):(d||(u=ci(u,jE)),a.i=new li(u,a.l))}function Pe(a,u,d){a.i.set(u,d)}function Io(a){return Pe(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function ai(a,u){return a?u?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function ci(a,u,d){return typeof a=="string"?(a=encodeURI(a).replace(u,UE),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function UE(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Vh=/[#\/\?@]/g,BE=/[#\?:]/g,$E=/[#\?]/g,jE=/[#\?@]/g,qE=/#/g;function li(a,u){this.h=this.g=null,this.i=a||null,this.j=!!u}function br(a){a.g||(a.g=new Map,a.h=0,a.i&&FE(a.i,function(u,d){a.add(decodeURIComponent(u.replace(/\+/g," ")),d)}))}t=li.prototype,t.add=function(a,u){br(this),this.i=null,a=us(this,a);let d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(u),this.h+=1,this};function Dh(a,u){br(a),u=us(a,u),a.g.has(u)&&(a.i=null,a.h-=a.g.get(u).length,a.g.delete(u))}function kh(a,u){return br(a),u=us(a,u),a.g.has(u)}t.forEach=function(a,u){br(this),this.g.forEach(function(d,m){d.forEach(function(C){a.call(u,C,m,this)},this)},this)};function xh(a,u){br(a);let d=[];if(typeof u=="string")kh(a,u)&&(d=d.concat(a.g.get(us(a,u))));else for(a=Array.from(a.g.values()),u=0;u<a.length;u++)d=d.concat(a[u]);return d}t.set=function(a,u){return br(this),this.i=null,a=us(this,a),kh(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[u]),this.h+=1,this},t.get=function(a,u){return a?(a=xh(this,a),a.length>0?String(a[0]):u):u};function Lh(a,u,d){Dh(a,u),d.length>0&&(a.i=null,a.g.set(us(a,u),I(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],u=Array.from(this.g.keys());for(let m=0;m<u.length;m++){var d=u[m];const C=ri(d);d=xh(this,d);for(let R=0;R<d.length;R++){let j=C;d[R]!==""&&(j+="="+ri(d[R])),a.push(j)}}return this.i=a.join("&")};function Mh(a){const u=new li;return u.i=a.i,a.g&&(u.g=new Map(a.g),u.h=a.h),u}function us(a,u){return u=String(u),a.j&&(u=u.toLowerCase()),u}function HE(a,u){u&&!a.j&&(br(a),a.i=null,a.g.forEach(function(d,m){const C=m.toLowerCase();m!=C&&(Dh(this,m),Lh(this,C,d))},a)),a.j=u}function zE(a,u){const d=new ni;if(o.Image){const m=new Image;m.onload=f(Hn,d,"TestLoadImage: loaded",!0,u,m),m.onerror=f(Hn,d,"TestLoadImage: error",!1,u,m),m.onabort=f(Hn,d,"TestLoadImage: abort",!1,u,m),m.ontimeout=f(Hn,d,"TestLoadImage: timeout",!1,u,m),o.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=a}else u(!1)}function WE(a,u){const d=new ni,m=new AbortController,C=setTimeout(()=>{m.abort(),Hn(d,"TestPingServer: timeout",!1,u)},1e4);fetch(a,{signal:m.signal}).then(R=>{clearTimeout(C),R.ok?Hn(d,"TestPingServer: ok",!0,u):Hn(d,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(C),Hn(d,"TestPingServer: error",!1,u)})}function Hn(a,u,d,m,C){try{C&&(C.onload=null,C.onerror=null,C.onabort=null,C.ontimeout=null),m(d)}catch{}}function KE(){this.g=new it}function Cc(a){this.i=a.Sb||null,this.h=a.ab||!1}p(Cc,At),Cc.prototype.g=function(){return new wo(this.i,this.h)};function wo(a,u){U.call(this),this.H=a,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}p(wo,U),t=wo.prototype,t.open=function(a,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=u,this.readyState=1,hi(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const u={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(u.body=a),(this.H||o).fetch(new Request(this.D,u)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,ui(this)),this.readyState=0},t.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,hi(this)),this.g&&(this.readyState=3,hi(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Fh(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function Fh(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}t.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var u=a.value?a.value:new Uint8Array(0);(u=this.B.decode(u,{stream:!a.done}))&&(this.response=this.responseText+=u)}a.done?ui(this):hi(this),this.readyState==3&&Fh(this)}},t.Oa=function(a){this.g&&(this.response=this.responseText=a,ui(this))},t.Na=function(a){this.g&&(this.response=a,ui(this))},t.ga=function(){this.g&&ui(this)};function ui(a){a.readyState=4,a.l=null,a.j=null,a.B=null,hi(a)}t.setRequestHeader=function(a,u){this.A.append(a,u)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],u=this.h.entries();for(var d=u.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=u.next();return a.join(`\r
`)};function hi(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(wo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Uh(a){let u="";return Ot(a,function(d,m){u+=m,u+=":",u+=d,u+=`\r
`}),u}function Rc(a,u,d){e:{for(m in d){var m=!1;break e}m=!0}m||(d=Uh(d),typeof a=="string"?d!=null&&ri(d):Pe(a,u,d))}function De(a){U.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}p(De,U);var GE=/^https?$/i,QE=["POST","PUT"];t=De.prototype,t.Fa=function(a){this.H=a},t.ea=function(a,u,d,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);u=u?u.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():vh.g(),this.g.onreadystatechange=g(h(this.Ca,this));try{this.B=!0,this.g.open(u,String(a),!0),this.B=!1}catch(R){Bh(this,R);return}if(a=d||"",d=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var C in m)d.set(C,m[C]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const R of m.keys())d.set(R,m.get(R));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(d.keys()).find(R=>R.toLowerCase()=="content-type"),C=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(QE,u,void 0)>=0)||m||C||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[R,j]of d)this.g.setRequestHeader(R,j);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(R){Bh(this,R)}};function Bh(a,u){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=u,a.o=5,$h(a),Ao(a)}function $h(a){a.A||(a.A=!0,F(a,"complete"),F(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,F(this,"complete"),F(this,"abort"),Ao(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ao(this,!0)),De.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?jh(this):this.Xa())},t.Xa=function(){jh(this)};function jh(a){if(a.h&&typeof i<"u"){if(a.v&&zn(a)==4)setTimeout(a.Ca.bind(a),0);else if(F(a,"readystatechange"),zn(a)==4){a.h=!1;try{const R=a.ca();e:switch(R){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var d;if(!(d=u)){var m;if(m=R===0){let j=String(a.D).match(Nh)[1]||null;!j&&o.self&&o.self.location&&(j=o.self.location.protocol.slice(0,-1)),m=!GE.test(j?j.toLowerCase():"")}d=m}if(d)F(a,"complete"),F(a,"success");else{a.o=6;try{var C=zn(a)>2?a.g.statusText:""}catch{C=""}a.l=C+" ["+a.ca()+"]",$h(a)}}finally{Ao(a)}}}}function Ao(a,u){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const d=a.g;a.g=null,u||F(a,"ready");try{d.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function zn(a){return a.g?a.g.readyState:0}t.ca=function(){try{return zn(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(a){if(this.g){var u=this.g.responseText;return a&&u.indexOf(a)==0&&(u=u.substring(a.length)),st(u)}};function qh(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function JE(a){const u={};a=(a.g&&zn(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<a.length;m++){if(y(a[m]))continue;var d=kE(a[m]);const C=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const R=u[C]||[];u[C]=R,R.push(d)}os(u,function(m){return m.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function fi(a,u,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||u}function Hh(a){this.za=0,this.i=[],this.j=new ni,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=fi("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=fi("baseRetryDelayMs",5e3,a),this.Za=fi("retryDelaySeedMs",1e4,a),this.Ta=fi("forwardChannelMaxRetries",2,a),this.va=fi("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new Sh(a&&a.concurrentRequestLimit),this.Ba=new KE,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=Hh.prototype,t.ka=8,t.I=1,t.connect=function(a,u,d,m){mt(0),this.W=a,this.H=u||{},d&&m!==void 0&&(this.H.OSID=d,this.H.OAID=m),this.F=this.X,this.J=Zh(this,null,this.W),So(this)};function Pc(a){if(zh(a),a.I==3){var u=a.V++,d=Jt(a.J);if(Pe(d,"SID",a.M),Pe(d,"RID",u),Pe(d,"TYPE","terminate"),di(a,d),u=new jn(a,a.j,u),u.M=2,u.A=Io(Jt(d)),d=!1,o.navigator&&o.navigator.sendBeacon)try{d=o.navigator.sendBeacon(u.A.toString(),"")}catch{}!d&&o.Image&&(new Image().src=u.A,d=!0),d||(u.g=ef(u.j,null),u.g.ea(u.A)),u.F=Date.now(),To(u)}Xh(a)}function bo(a){a.g&&(Nc(a),a.g.cancel(),a.g=null)}function zh(a){bo(a),a.v&&(o.clearTimeout(a.v),a.v=null),Co(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function So(a){if(!Ch(a.h)&&!a.m){a.m=!0;var u=a.Ea;ae||E(),ce||(ae(),ce=!0),b.add(u,a),a.D=0}}function YE(a,u){return Rh(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=u.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=ti(h(a.Ea,a,u),Yh(a,a.D)),a.D++,!0)}t.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const C=new jn(this,this.j,a);let R=this.o;if(this.U&&(R?(R=Qt(R),Js(R,this.U)):R=this.U),this.u!==null||this.R||(C.J=R,R=null),this.S)e:{for(var u=0,d=0;d<this.i.length;d++){t:{var m=this.i[d];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(u+=m,u>4096){u=d;break e}if(u===4096||d===this.i.length-1){u=d+1;break e}}u=1e3}else u=1e3;u=Kh(this,C,u),d=Jt(this.J),Pe(d,"RID",a),Pe(d,"CVER",22),this.G&&Pe(d,"X-HTTP-Session-Id",this.G),di(this,d),R&&(this.R?u="headers="+ri(Uh(R))+"&"+u:this.u&&Rc(d,this.u,R)),bc(this.h,C),this.Ra&&Pe(d,"TYPE","init"),this.S?(Pe(d,"$req",u),Pe(d,"SID","null"),C.U=!0,Tc(C,d,null)):Tc(C,d,u),this.I=2}}else this.I==3&&(a?Wh(this,a):this.i.length==0||Ch(this.h)||Wh(this))};function Wh(a,u){var d;u?d=u.l:d=a.V++;const m=Jt(a.J);Pe(m,"SID",a.M),Pe(m,"RID",d),Pe(m,"AID",a.K),di(a,m),a.u&&a.o&&Rc(m,a.u,a.o),d=new jn(a,a.j,d,a.D+1),a.u===null&&(d.J=a.o),u&&(a.i=u.G.concat(a.i)),u=Kh(a,d,1e3),d.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),bc(a.h,d),Tc(d,m,u)}function di(a,u){a.H&&Ot(a.H,function(d,m){Pe(u,m,d)}),a.l&&Ot({},function(d,m){Pe(u,m,d)})}function Kh(a,u,d){d=Math.min(a.i.length,d);const m=a.l?h(a.l.Ka,a.l,a):null;e:{var C=a.i;let le=-1;for(;;){const Be=["count="+d];le==-1?d>0?(le=C[0].g,Be.push("ofs="+le)):le=0:Be.push("ofs="+le);let we=!0;for(let qe=0;qe<d;qe++){var R=C[qe].g;const Yt=C[qe].map;if(R-=le,R<0)le=Math.max(0,C[qe].g-100),we=!1;else try{R="req"+R+"_"||"";try{var j=Yt instanceof Map?Yt:Object.entries(Yt);for(const[Cr,Wn]of j){let Kn=Wn;c(Wn)&&(Kn=ge(Wn)),Be.push(R+Cr+"="+encodeURIComponent(Kn))}}catch(Cr){throw Be.push(R+"type="+encodeURIComponent("_badmap")),Cr}}catch{m&&m(Yt)}}if(we){j=Be.join("&");break e}}j=void 0}return a=a.i.splice(0,d),u.G=a,j}function Gh(a){if(!a.g&&!a.v){a.Y=1;var u=a.Da;ae||E(),ce||(ae(),ce=!0),b.add(u,a),a.A=0}}function Oc(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=ti(h(a.Da,a),Yh(a,a.A)),a.A++,!0)}t.Da=function(){if(this.v=null,Qh(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=ti(h(this.Wa,this),a)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,mt(10),bo(this),Qh(this))};function Nc(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function Qh(a){a.g=new jn(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var u=Jt(a.na);Pe(u,"RID","rpc"),Pe(u,"SID",a.M),Pe(u,"AID",a.K),Pe(u,"CI",a.F?"0":"1"),!a.F&&a.ia&&Pe(u,"TO",a.ia),Pe(u,"TYPE","xmlhttp"),di(a,u),a.u&&a.o&&Rc(u,a.u,a.o),a.O&&(a.g.H=a.O);var d=a.g;a=a.ba,d.M=1,d.A=Io(Jt(u)),d.u=null,d.R=!0,wh(d,a)}t.Va=function(){this.C!=null&&(this.C=null,bo(this),Oc(this),mt(19))};function Co(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function Jh(a,u){var d=null;if(a.g==u){Co(a),Nc(a),a.g=null;var m=2}else if(Ac(a.h,u))d=u.G,Ph(a.h,u),m=1;else return;if(a.I!=0){if(u.o)if(m==1){d=u.u?u.u.length:0,u=Date.now()-u.F;var C=a.D;m=wr(),F(m,new yh(m,d)),So(a)}else Gh(a);else if(C=u.m,C==3||C==0&&u.X>0||!(m==1&&YE(a,u)||m==2&&Oc(a)))switch(d&&d.length>0&&(u=a.h,u.i=u.i.concat(d)),C){case 1:Sr(a,5);break;case 4:Sr(a,10);break;case 3:Sr(a,6);break;default:Sr(a,2)}}}function Yh(a,u){let d=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(d*=2),d*u}function Sr(a,u){if(a.j.info("Error code "+u),u==2){var d=h(a.bb,a),m=a.Ua;const C=!m;m=new qn(m||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||ii(m,"https"),Io(m),C?zE(m.toString(),d):WE(m.toString(),d)}else mt(2);a.I=0,a.l&&a.l.pa(u),Xh(a),zh(a)}t.bb=function(a){a?(this.j.info("Successfully pinged google.com"),mt(2)):(this.j.info("Failed to ping google.com"),mt(1))};function Xh(a){if(a.I=0,a.ja=[],a.l){const u=Oh(a.h);(u.length!=0||a.i.length!=0)&&(N(a.ja,u),N(a.ja,a.i),a.h.i.length=0,I(a.i),a.i.length=0),a.l.oa()}}function Zh(a,u,d){var m=d instanceof qn?Jt(d):new qn(d);if(m.g!="")u&&(m.g=u+"."+m.g),oi(m,m.u);else{var C=o.location;m=C.protocol,u=u?u+"."+C.hostname:C.hostname,C=+C.port;const R=new qn(null);m&&ii(R,m),u&&(R.g=u),C&&oi(R,C),d&&(R.h=d),m=R}return d=a.G,u=a.wa,d&&u&&Pe(m,d,u),Pe(m,"VER",a.ka),di(a,m),m}function ef(a,u,d){if(u&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return u=a.Aa&&!a.ma?new De(new Cc({ab:d})):new De(a.ma),u.Fa(a.L),u}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function tf(){}t=tf.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function Ro(){}Ro.prototype.g=function(a,u){return new St(a,u)};function St(a,u){U.call(this),this.g=new Hh(u),this.l=a,this.h=u&&u.messageUrlParams||null,a=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(a?a["X-WebChannel-Content-Type"]=u.messageContentType:a={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.sa&&(a?a["X-WebChannel-Client-Profile"]=u.sa:a={"X-WebChannel-Client-Profile":u.sa}),this.g.U=a,(a=u&&u.Qb)&&!y(a)&&(this.g.u=a),this.A=u&&u.supportsCrossDomainXhr||!1,this.v=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!y(u)&&(this.g.G=u,a=this.h,a!==null&&u in a&&(a=this.h,u in a&&delete a[u])),this.j=new hs(this)}p(St,U),St.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},St.prototype.close=function(){Pc(this.g)},St.prototype.o=function(a){var u=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.v&&(d={},d.__data__=ge(a),a=d);u.i.push(new ME(u.Ya++,a)),u.I==3&&So(u)},St.prototype.N=function(){this.g.l=null,delete this.j,Pc(this.g),delete this.g,St.Z.N.call(this)};function nf(a){cs.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var u=a.__sm__;if(u){e:{for(const d in u){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,u=u!==null&&a in u?u[a]:void 0),this.data=u}else this.data=a}p(nf,cs);function rf(){Ge.call(this),this.status=1}p(rf,Ge);function hs(a){this.g=a}p(hs,tf),hs.prototype.ra=function(){F(this.g,"a")},hs.prototype.qa=function(a){F(this.g,new nf(a))},hs.prototype.pa=function(a){F(this.g,new rf)},hs.prototype.oa=function(){F(this.g,"b")},Ro.prototype.createWebChannel=Ro.prototype.g,St.prototype.send=St.prototype.o,St.prototype.open=St.prototype.m,St.prototype.close=St.prototype.close,fm=function(){return new Ro},hm=function(){return wr()},um=je,ul={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},vo.NO_ERROR=0,vo.TIMEOUT=8,vo.HTTP_ERROR=6,qo=vo,Eh.COMPLETE="complete",lm=Eh,bt.EventType=Mt,Mt.OPEN="a",Mt.CLOSE="b",Mt.ERROR="c",Mt.MESSAGE="d",U.prototype.listen=U.prototype.J,vi=bt,De.prototype.listenOnce=De.prototype.K,De.prototype.getLastError=De.prototype.Ha,De.prototype.getLastErrorCode=De.prototype.ya,De.prototype.getStatus=De.prototype.ca,De.prototype.getResponseJson=De.prototype.La,De.prototype.getResponseText=De.prototype.la,De.prototype.send=De.prototype.ea,De.prototype.setWithCredentials=De.prototype.Fa,cm=De}).apply(typeof Oo<"u"?Oo:typeof self<"u"?self:typeof window<"u"?window:{});const yf="@firebase/firestore",Ef="4.9.2";/**
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
 */class lt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}lt.UNAUTHENTICATED=new lt(null),lt.GOOGLE_CREDENTIALS=new lt("google-credentials-uid"),lt.FIRST_PARTY=new lt("first-party-uid"),lt.MOCK_USER=new lt("mock-user");/**
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
 */let Hs="12.3.0";/**
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
 */const qr=new Kl("@firebase/firestore");function ds(){return qr.logLevel}function G(t,...e){if(qr.logLevel<=he.DEBUG){const n=e.map(Jl);qr.debug(`Firestore (${Hs}): ${t}`,...n)}}function On(t,...e){if(qr.logLevel<=he.ERROR){const n=e.map(Jl);qr.error(`Firestore (${Hs}): ${t}`,...n)}}function Vs(t,...e){if(qr.logLevel<=he.WARN){const n=e.map(Jl);qr.warn(`Firestore (${Hs}): ${t}`,...n)}}function Jl(t){if(typeof t=="string")return t;try{/**
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
 */function te(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,dm(t,r,n)}function dm(t,e,n){let r=`FIRESTORE (${Hs}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw On(r),new Error(r)}function Te(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||dm(e,s,r)}function oe(t,e){return t}/**
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
 */const D={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class W extends Mn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class sr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class pm{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class UT{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(lt.UNAUTHENTICATED))}shutdown(){}}class BT{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class $T{constructor(e){this.t=e,this.currentUser=lt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Te(this.o===void 0,42304);let r=this.i;const s=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let i=new sr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new sr,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},c=l=>{G("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(l=>c(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(G("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new sr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(G("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Te(typeof r.accessToken=="string",31837,{l:r}),new pm(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Te(e===null||typeof e=="string",2055,{h:e}),new lt(e)}}class jT{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=lt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class qT{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new jT(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(lt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class vf{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class HT{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Rt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){Te(this.o===void 0,3512);const r=i=>{i.error!=null&&G("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,G("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{G("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):G("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new vf(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Te(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new vf(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function zT(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class Yl{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=zT(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function fe(t,e){return t<e?-1:t>e?1:0}function hl(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const s=t.charAt(r),i=e.charAt(r);if(s!==i)return Fc(s)===Fc(i)?fe(s,i):Fc(s)?1:-1}return fe(t.length,e.length)}const WT=55296,KT=57343;function Fc(t){const e=t.charCodeAt(0);return e>=WT&&e<=KT}function Ds(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */const Tf="__name__";class en{constructor(e,n,r){n===void 0?n=0:n>e.length&&te(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&te(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return en.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof en?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=en.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return fe(e.length,n.length)}static compareSegments(e,n){const r=en.isNumericId(e),s=en.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?en.extractNumericId(e).compare(en.extractNumericId(n)):hl(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return rr.fromString(e.substring(4,e.length-2))}}class Ce extends en{construct(e,n,r){return new Ce(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new W(D.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Ce(n)}static emptyPath(){return new Ce([])}}const GT=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ye extends en{construct(e,n,r){return new Ye(e,n,r)}static isValidIdentifier(e){return GT.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ye.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Tf}static keyField(){return new Ye([Tf])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new W(D.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new W(D.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new W(D.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else c==="`"?(o=!o,s++):c!=="."||o?(r+=c,s++):(i(),s++)}if(i(),o)throw new W(D.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ye(n)}static emptyPath(){return new Ye([])}}/**
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
 */class J{constructor(e){this.path=e}static fromPath(e){return new J(Ce.fromString(e))}static fromName(e){return new J(Ce.fromString(e).popFirst(5))}static empty(){return new J(Ce.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ce.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ce.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new J(new Ce(e.slice()))}}/**
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
 */function mm(t,e,n){if(!n)throw new W(D.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function QT(t,e,n,r){if(e===!0&&r===!0)throw new W(D.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function If(t){if(!J.isDocumentKey(t))throw new W(D.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function wf(t){if(J.isDocumentKey(t))throw new W(D.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function gm(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function Fa(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":te(12329,{type:typeof t})}function Rn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new W(D.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Fa(t);throw new W(D.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */function Ue(t,e){const n={typeString:t};return e&&(n.value=e),n}function oo(t,e){if(!gm(t))throw new W(D.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(s&&typeof o!==s){n=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){n=`Expected '${r}' field to equal '${i.value}'`;break}}if(n)throw new W(D.INVALID_ARGUMENT,n);return!0}/**
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
 */const Af=-62135596800,bf=1e6;class Oe{static now(){return Oe.fromMillis(Date.now())}static fromDate(e){return Oe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*bf);return new Oe(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new W(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new W(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<Af)throw new W(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new W(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/bf}_compareTo(e){return this.seconds===e.seconds?fe(this.nanoseconds,e.nanoseconds):fe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Oe._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(oo(e,Oe._jsonSchema))return new Oe(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Af;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Oe._jsonSchemaVersion="firestore/timestamp/1.0",Oe._jsonSchema={type:Ue("string",Oe._jsonSchemaVersion),seconds:Ue("number"),nanoseconds:Ue("number")};/**
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
 */class se{static fromTimestamp(e){return new se(e)}static min(){return new se(new Oe(0,0))}static max(){return new se(new Oe(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const $i=-1;function JT(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=se.fromTimestamp(r===1e9?new Oe(n+1,0):new Oe(n,r));return new cr(s,J.empty(),e)}function YT(t){return new cr(t.readTime,t.key,$i)}class cr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new cr(se.min(),J.empty(),$i)}static max(){return new cr(se.max(),J.empty(),$i)}}function XT(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=J.comparator(t.documentKey,e.documentKey),n!==0?n:fe(t.largestBatchId,e.largestBatchId))}/**
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
 */const ZT="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class eI{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function zs(t){if(t.code!==D.FAILED_PRECONDITION||t.message!==ZT)throw t;G("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class k{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&te(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new k((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof k?n:k.resolve(n)}catch(n){return k.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):k.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):k.reject(n)}static resolve(e){return new k((n,r)=>{n(e)})}static reject(e){return new k((n,r)=>{r(e)})}static waitFor(e){return new k((n,r)=>{let s=0,i=0,o=!1;e.forEach(c=>{++s,c.next(()=>{++i,o&&i===s&&n()},l=>r(l))}),o=!0,i===s&&n()})}static or(e){let n=k.resolve(!1);for(const r of e)n=n.next(s=>s?k.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new k((r,s)=>{const i=e.length,o=new Array(i);let c=0;for(let l=0;l<i;l++){const h=l;n(e[h]).next(f=>{o[h]=f,++c,c===i&&r(o)},f=>s(f))}})}static doWhile(e,n){return new k((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function tI(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Ws(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Ua{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Ua.ce=-1;/**
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
 */const Xl=-1;function Ba(t){return t==null}function ia(t){return t===0&&1/t==-1/0}function nI(t){return typeof t=="number"&&Number.isInteger(t)&&!ia(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const _m="";function rI(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Sf(e)),e=sI(t.get(n),e);return Sf(e)}function sI(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case _m:n+="";break;default:n+=i}}return n}function Sf(t){return t+_m+""}/**
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
 */function Cf(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Yr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function ym(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Ve{constructor(e,n){this.comparator=e,this.root=n||Qe.EMPTY}insert(e,n){return new Ve(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Qe.BLACK,null,null))}remove(e){return new Ve(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Qe.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new No(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new No(this.root,e,this.comparator,!1)}getReverseIterator(){return new No(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new No(this.root,e,this.comparator,!0)}}class No{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Qe{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??Qe.RED,this.left=s??Qe.EMPTY,this.right=i??Qe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new Qe(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Qe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return Qe.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Qe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Qe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw te(43730,{key:this.key,value:this.value});if(this.right.isRed())throw te(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw te(27949);return e+(this.isRed()?0:1)}}Qe.EMPTY=null,Qe.RED=!0,Qe.BLACK=!1;Qe.EMPTY=new class{constructor(){this.size=0}get key(){throw te(57766)}get value(){throw te(16141)}get color(){throw te(16727)}get left(){throw te(29726)}get right(){throw te(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new Qe(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class $e{constructor(e){this.comparator=e,this.data=new Ve(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Rf(this.data.getIterator())}getIteratorFrom(e){return new Rf(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof $e)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new $e(this.comparator);return n.data=e,n}}class Rf{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Bt{constructor(e){this.fields=e,e.sort(Ye.comparator)}static empty(){return new Bt([])}unionWith(e){let n=new $e(Ye.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Bt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ds(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class Em extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class rt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Em("Invalid base64 string: "+i):i}}(e);return new rt(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new rt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return fe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}rt.EMPTY_BYTE_STRING=new rt("");const iI=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function lr(t){if(Te(!!t,39018),typeof t=="string"){let e=0;const n=iI.exec(t);if(Te(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ke(t.seconds),nanos:ke(t.nanos)}}function ke(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ur(t){return typeof t=="string"?rt.fromBase64String(t):rt.fromUint8Array(t)}/**
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
 */const vm="server_timestamp",Tm="__type__",Im="__previous_value__",wm="__local_write_time__";function Zl(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[Tm])==null?void 0:r.stringValue)===vm}function $a(t){const e=t.mapValue.fields[Im];return Zl(e)?$a(e):e}function ji(t){const e=lr(t.mapValue.fields[wm].timestampValue);return new Oe(e.seconds,e.nanos)}/**
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
 */class oI{constructor(e,n,r,s,i,o,c,l,h,f){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=h,this.isUsingEmulator=f}}const oa="(default)";class qi{constructor(e,n){this.projectId=e,this.database=n||oa}static empty(){return new qi("","")}get isDefaultDatabase(){return this.database===oa}isEqual(e){return e instanceof qi&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Am="__type__",aI="__max__",Vo={mapValue:{}},bm="__vector__",aa="value";function hr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Zl(t)?4:lI(t)?9007199254740991:cI(t)?10:11:te(28295,{value:t})}function dn(t,e){if(t===e)return!0;const n=hr(t);if(n!==hr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ji(t).isEqual(ji(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=lr(s.timestampValue),c=lr(i.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return ur(s.bytesValue).isEqual(ur(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return ke(s.geoPointValue.latitude)===ke(i.geoPointValue.latitude)&&ke(s.geoPointValue.longitude)===ke(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return ke(s.integerValue)===ke(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=ke(s.doubleValue),c=ke(i.doubleValue);return o===c?ia(o)===ia(c):isNaN(o)&&isNaN(c)}return!1}(t,e);case 9:return Ds(t.arrayValue.values||[],e.arrayValue.values||[],dn);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},c=i.mapValue.fields||{};if(Cf(o)!==Cf(c))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(c[l]===void 0||!dn(o[l],c[l])))return!1;return!0}(t,e);default:return te(52216,{left:t})}}function Hi(t,e){return(t.values||[]).find(n=>dn(n,e))!==void 0}function ks(t,e){if(t===e)return 0;const n=hr(t),r=hr(e);if(n!==r)return fe(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return fe(t.booleanValue,e.booleanValue);case 2:return function(i,o){const c=ke(i.integerValue||i.doubleValue),l=ke(o.integerValue||o.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1}(t,e);case 3:return Pf(t.timestampValue,e.timestampValue);case 4:return Pf(ji(t),ji(e));case 5:return hl(t.stringValue,e.stringValue);case 6:return function(i,o){const c=ur(i),l=ur(o);return c.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const c=i.split("/"),l=o.split("/");for(let h=0;h<c.length&&h<l.length;h++){const f=fe(c[h],l[h]);if(f!==0)return f}return fe(c.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const c=fe(ke(i.latitude),ke(o.latitude));return c!==0?c:fe(ke(i.longitude),ke(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Of(t.arrayValue,e.arrayValue);case 10:return function(i,o){var g,I,N,P;const c=i.fields||{},l=o.fields||{},h=(g=c[aa])==null?void 0:g.arrayValue,f=(I=l[aa])==null?void 0:I.arrayValue,p=fe(((N=h==null?void 0:h.values)==null?void 0:N.length)||0,((P=f==null?void 0:f.values)==null?void 0:P.length)||0);return p!==0?p:Of(h,f)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===Vo.mapValue&&o===Vo.mapValue)return 0;if(i===Vo.mapValue)return 1;if(o===Vo.mapValue)return-1;const c=i.fields||{},l=Object.keys(c),h=o.fields||{},f=Object.keys(h);l.sort(),f.sort();for(let p=0;p<l.length&&p<f.length;++p){const g=hl(l[p],f[p]);if(g!==0)return g;const I=ks(c[l[p]],h[f[p]]);if(I!==0)return I}return fe(l.length,f.length)}(t.mapValue,e.mapValue);default:throw te(23264,{he:n})}}function Pf(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return fe(t,e);const n=lr(t),r=lr(e),s=fe(n.seconds,r.seconds);return s!==0?s:fe(n.nanos,r.nanos)}function Of(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=ks(n[s],r[s]);if(i)return i}return fe(n.length,r.length)}function xs(t){return fl(t)}function fl(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=lr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return ur(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return J.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=fl(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${fl(n.fields[o])}`;return s+"}"}(t.mapValue):te(61005,{value:t})}function Ho(t){switch(hr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=$a(t);return e?16+Ho(e):16;case 5:return 2*t.stringValue.length;case 6:return ur(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+Ho(i),0)}(t.arrayValue);case 10:case 11:return function(r){let s=0;return Yr(r.fields,(i,o)=>{s+=i.length+Ho(o)}),s}(t.mapValue);default:throw te(13486,{value:t})}}function Nf(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function dl(t){return!!t&&"integerValue"in t}function eu(t){return!!t&&"arrayValue"in t}function Vf(t){return!!t&&"nullValue"in t}function Df(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function zo(t){return!!t&&"mapValue"in t}function cI(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[Am])==null?void 0:r.stringValue)===bm}function Ci(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return Yr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Ci(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ci(t.arrayValue.values[n]);return e}return{...t}}function lI(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===aI}/**
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
 */class Vt{constructor(e){this.value=e}static empty(){return new Vt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!zo(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ci(n)}setAll(e){let n=Ye.emptyPath(),r={},s=[];e.forEach((o,c)=>{if(!n.isImmediateParentOf(c)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=c.popLast()}o?r[c.lastSegment()]=Ci(o):s.push(c.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());zo(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return dn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];zo(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Yr(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Vt(Ci(this.value))}}function Sm(t){const e=[];return Yr(t.fields,(n,r)=>{const s=new Ye([n]);if(zo(r)){const i=Sm(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Bt(e)}/**
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
 */class ut{constructor(e,n,r,s,i,o,c){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=c}static newInvalidDocument(e){return new ut(e,0,se.min(),se.min(),se.min(),Vt.empty(),0)}static newFoundDocument(e,n,r,s){return new ut(e,1,n,se.min(),r,s,0)}static newNoDocument(e,n){return new ut(e,2,n,se.min(),se.min(),Vt.empty(),0)}static newUnknownDocument(e,n){return new ut(e,3,n,se.min(),se.min(),Vt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(se.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Vt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Vt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=se.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ut&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ut(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class ca{constructor(e,n){this.position=e,this.inclusive=n}}function kf(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=J.comparator(J.fromName(o.referenceValue),n.key):r=ks(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function xf(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!dn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class zi{constructor(e,n="asc"){this.field=e,this.dir=n}}function uI(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class Cm{}class Fe extends Cm{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new fI(e,n,r):n==="array-contains"?new mI(e,r):n==="in"?new gI(e,r):n==="not-in"?new _I(e,r):n==="array-contains-any"?new yI(e,r):new Fe(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new dI(e,r):new pI(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(ks(n,this.value)):n!==null&&hr(this.value)===hr(n)&&this.matchesComparison(ks(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return te(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class zt extends Cm{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new zt(e,n)}matches(e){return Rm(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Rm(t){return t.op==="and"}function Pm(t){return hI(t)&&Rm(t)}function hI(t){for(const e of t.filters)if(e instanceof zt)return!1;return!0}function pl(t){if(t instanceof Fe)return t.field.canonicalString()+t.op.toString()+xs(t.value);if(Pm(t))return t.filters.map(e=>pl(e)).join(",");{const e=t.filters.map(n=>pl(n)).join(",");return`${t.op}(${e})`}}function Om(t,e){return t instanceof Fe?function(r,s){return s instanceof Fe&&r.op===s.op&&r.field.isEqual(s.field)&&dn(r.value,s.value)}(t,e):t instanceof zt?function(r,s){return s instanceof zt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,c)=>i&&Om(o,s.filters[c]),!0):!1}(t,e):void te(19439)}function Nm(t){return t instanceof Fe?function(n){return`${n.field.canonicalString()} ${n.op} ${xs(n.value)}`}(t):t instanceof zt?function(n){return n.op.toString()+" {"+n.getFilters().map(Nm).join(" ,")+"}"}(t):"Filter"}class fI extends Fe{constructor(e,n,r){super(e,n,r),this.key=J.fromName(r.referenceValue)}matches(e){const n=J.comparator(e.key,this.key);return this.matchesComparison(n)}}class dI extends Fe{constructor(e,n){super(e,"in",n),this.keys=Vm("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class pI extends Fe{constructor(e,n){super(e,"not-in",n),this.keys=Vm("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Vm(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map(r=>J.fromName(r.referenceValue))}class mI extends Fe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return eu(n)&&Hi(n.arrayValue,this.value)}}class gI extends Fe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Hi(this.value.arrayValue,n)}}class _I extends Fe{constructor(e,n){super(e,"not-in",n)}matches(e){if(Hi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Hi(this.value.arrayValue,n)}}class yI extends Fe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!eu(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Hi(this.value.arrayValue,r))}}/**
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
 */class EI{constructor(e,n=null,r=[],s=[],i=null,o=null,c=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=c,this.Te=null}}function Lf(t,e=null,n=[],r=[],s=null,i=null,o=null){return new EI(t,e,n,r,s,i,o)}function tu(t){const e=oe(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>pl(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Ba(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>xs(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>xs(r)).join(",")),e.Te=n}return e.Te}function nu(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!uI(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Om(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!xf(t.startAt,e.startAt)&&xf(t.endAt,e.endAt)}function ml(t){return J.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Ks{constructor(e,n=null,r=[],s=[],i=null,o="F",c=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=c,this.endAt=l,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function vI(t,e,n,r,s,i,o,c){return new Ks(t,e,n,r,s,i,o,c)}function ja(t){return new Ks(t)}function Mf(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Dm(t){return t.collectionGroup!==null}function Ri(t){const e=oe(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new $e(Ye.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(h=>{h.isInequality()&&(c=c.add(h.field))})}),c})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new zi(i,r))}),n.has(Ye.keyField().canonicalString())||e.Ie.push(new zi(Ye.keyField(),r))}return e.Ie}function rn(t){const e=oe(t);return e.Ee||(e.Ee=TI(e,Ri(t))),e.Ee}function TI(t,e){if(t.limitType==="F")return Lf(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new zi(s.field,i)});const n=t.endAt?new ca(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new ca(t.startAt.position,t.startAt.inclusive):null;return Lf(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function gl(t,e){const n=t.filters.concat([e]);return new Ks(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function la(t,e,n){return new Ks(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function qa(t,e){return nu(rn(t),rn(e))&&t.limitType===e.limitType}function km(t){return`${tu(rn(t))}|lt:${t.limitType}`}function ps(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>Nm(s)).join(", ")}]`),Ba(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>xs(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>xs(s)).join(",")),`Target(${r})`}(rn(t))}; limitType=${t.limitType})`}function Ha(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):J.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of Ri(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,c,l){const h=kf(o,c,l);return o.inclusive?h<=0:h<0}(r.startAt,Ri(r),s)||r.endAt&&!function(o,c,l){const h=kf(o,c,l);return o.inclusive?h>=0:h>0}(r.endAt,Ri(r),s))}(t,e)}function II(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function xm(t){return(e,n)=>{let r=!1;for(const s of Ri(t)){const i=wI(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function wI(t,e,n){const r=t.field.isKeyField()?J.comparator(e.key,n.key):function(i,o,c){const l=o.data.field(i),h=c.data.field(i);return l!==null&&h!==null?ks(l,h):te(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return te(19790,{direction:t.dir})}}/**
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
 */class Xr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Yr(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return ym(this.inner)}size(){return this.innerSize}}/**
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
 */const AI=new Ve(J.comparator);function Nn(){return AI}const Lm=new Ve(J.comparator);function Ti(...t){let e=Lm;for(const n of t)e=e.insert(n.key,n);return e}function Mm(t){let e=Lm;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Lr(){return Pi()}function Fm(){return Pi()}function Pi(){return new Xr(t=>t.toString(),(t,e)=>t.isEqual(e))}const bI=new Ve(J.comparator),SI=new $e(J.comparator);function de(...t){let e=SI;for(const n of t)e=e.add(n);return e}const CI=new $e(fe);function RI(){return CI}/**
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
 */function ru(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ia(e)?"-0":e}}function Um(t){return{integerValue:""+t}}function PI(t,e){return nI(e)?Um(e):ru(t,e)}/**
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
 */class za{constructor(){this._=void 0}}function OI(t,e,n){return t instanceof Wi?function(s,i){const o={fields:{[Tm]:{stringValue:vm},[wm]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Zl(i)&&(i=$a(i)),i&&(o.fields[Im]=i),{mapValue:o}}(n,e):t instanceof Ki?$m(t,e):t instanceof Gi?jm(t,e):function(s,i){const o=Bm(s,i),c=Ff(o)+Ff(s.Ae);return dl(o)&&dl(s.Ae)?Um(c):ru(s.serializer,c)}(t,e)}function NI(t,e,n){return t instanceof Ki?$m(t,e):t instanceof Gi?jm(t,e):n}function Bm(t,e){return t instanceof ua?function(r){return dl(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Wi extends za{}class Ki extends za{constructor(e){super(),this.elements=e}}function $m(t,e){const n=qm(e);for(const r of t.elements)n.some(s=>dn(s,r))||n.push(r);return{arrayValue:{values:n}}}class Gi extends za{constructor(e){super(),this.elements=e}}function jm(t,e){let n=qm(e);for(const r of t.elements)n=n.filter(s=>!dn(s,r));return{arrayValue:{values:n}}}class ua extends za{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function Ff(t){return ke(t.integerValue||t.doubleValue)}function qm(t){return eu(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class VI{constructor(e,n){this.field=e,this.transform=n}}function DI(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof Ki&&s instanceof Ki||r instanceof Gi&&s instanceof Gi?Ds(r.elements,s.elements,dn):r instanceof ua&&s instanceof ua?dn(r.Ae,s.Ae):r instanceof Wi&&s instanceof Wi}(t.transform,e.transform)}class kI{constructor(e,n){this.version=e,this.transformResults=n}}class sn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new sn}static exists(e){return new sn(void 0,e)}static updateTime(e){return new sn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Wo(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Wa{}function Hm(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Wm(t.key,sn.none()):new ao(t.key,t.data,sn.none());{const n=t.data,r=Vt.empty();let s=new $e(Ye.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Zr(t.key,r,new Bt(s.toArray()),sn.none())}}function xI(t,e,n){t instanceof ao?function(s,i,o){const c=s.value.clone(),l=Bf(s.fieldTransforms,i,o.transformResults);c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):t instanceof Zr?function(s,i,o){if(!Wo(s.precondition,i))return void i.convertToUnknownDocument(o.version);const c=Bf(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(zm(s)),l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Oi(t,e,n,r){return t instanceof ao?function(i,o,c,l){if(!Wo(i.precondition,o))return c;const h=i.value.clone(),f=$f(i.fieldTransforms,l,o);return h.setAll(f),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof Zr?function(i,o,c,l){if(!Wo(i.precondition,o))return c;const h=$f(i.fieldTransforms,l,o),f=o.data;return f.setAll(zm(i)),f.setAll(h),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(i,o,c){return Wo(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c}(t,e,n)}function LI(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=Bm(r.transform,s||null);i!=null&&(n===null&&(n=Vt.empty()),n.set(r.field,i))}return n||null}function Uf(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Ds(r,s,(i,o)=>DI(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ao extends Wa{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Zr extends Wa{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function zm(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Bf(t,e,n){const r=new Map;Te(t.length===n.length,32656,{Re:n.length,Ve:t.length});for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,c=e.data.field(i.field);r.set(i.field,NI(o,c,n[s]))}return r}function $f(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,OI(i,o,e))}return r}class Wm extends Wa{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class MI extends Wa{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class FI{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&xI(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Oi(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Oi(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Fm();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let c=this.applyToLocalView(o,i.mutatedFields);c=n.has(s.key)?null:c;const l=Hm(o,c);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(se.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),de())}isEqual(e){return this.batchId===e.batchId&&Ds(this.mutations,e.mutations,(n,r)=>Uf(n,r))&&Ds(this.baseMutations,e.baseMutations,(n,r)=>Uf(n,r))}}class su{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Te(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=function(){return bI}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new su(e,n,r,s)}}/**
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
 */class UI{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class BI{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Me,pe;function $I(t){switch(t){case D.OK:return te(64938);case D.CANCELLED:case D.UNKNOWN:case D.DEADLINE_EXCEEDED:case D.RESOURCE_EXHAUSTED:case D.INTERNAL:case D.UNAVAILABLE:case D.UNAUTHENTICATED:return!1;case D.INVALID_ARGUMENT:case D.NOT_FOUND:case D.ALREADY_EXISTS:case D.PERMISSION_DENIED:case D.FAILED_PRECONDITION:case D.ABORTED:case D.OUT_OF_RANGE:case D.UNIMPLEMENTED:case D.DATA_LOSS:return!0;default:return te(15467,{code:t})}}function Km(t){if(t===void 0)return On("GRPC error has no .code"),D.UNKNOWN;switch(t){case Me.OK:return D.OK;case Me.CANCELLED:return D.CANCELLED;case Me.UNKNOWN:return D.UNKNOWN;case Me.DEADLINE_EXCEEDED:return D.DEADLINE_EXCEEDED;case Me.RESOURCE_EXHAUSTED:return D.RESOURCE_EXHAUSTED;case Me.INTERNAL:return D.INTERNAL;case Me.UNAVAILABLE:return D.UNAVAILABLE;case Me.UNAUTHENTICATED:return D.UNAUTHENTICATED;case Me.INVALID_ARGUMENT:return D.INVALID_ARGUMENT;case Me.NOT_FOUND:return D.NOT_FOUND;case Me.ALREADY_EXISTS:return D.ALREADY_EXISTS;case Me.PERMISSION_DENIED:return D.PERMISSION_DENIED;case Me.FAILED_PRECONDITION:return D.FAILED_PRECONDITION;case Me.ABORTED:return D.ABORTED;case Me.OUT_OF_RANGE:return D.OUT_OF_RANGE;case Me.UNIMPLEMENTED:return D.UNIMPLEMENTED;case Me.DATA_LOSS:return D.DATA_LOSS;default:return te(39323,{code:t})}}(pe=Me||(Me={}))[pe.OK=0]="OK",pe[pe.CANCELLED=1]="CANCELLED",pe[pe.UNKNOWN=2]="UNKNOWN",pe[pe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",pe[pe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",pe[pe.NOT_FOUND=5]="NOT_FOUND",pe[pe.ALREADY_EXISTS=6]="ALREADY_EXISTS",pe[pe.PERMISSION_DENIED=7]="PERMISSION_DENIED",pe[pe.UNAUTHENTICATED=16]="UNAUTHENTICATED",pe[pe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",pe[pe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",pe[pe.ABORTED=10]="ABORTED",pe[pe.OUT_OF_RANGE=11]="OUT_OF_RANGE",pe[pe.UNIMPLEMENTED=12]="UNIMPLEMENTED",pe[pe.INTERNAL=13]="INTERNAL",pe[pe.UNAVAILABLE=14]="UNAVAILABLE",pe[pe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function jI(){return new TextEncoder}/**
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
 */const qI=new rr([4294967295,4294967295],0);function jf(t){const e=jI().encode(t),n=new am;return n.update(e),new Uint8Array(n.digest())}function qf(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new rr([n,r],0),new rr([s,i],0)]}class iu{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Ii(`Invalid padding: ${n}`);if(r<0)throw new Ii(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Ii(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Ii(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=rr.fromNumber(this.ge)}ye(e,n,r){let s=e.add(n.multiply(rr.fromNumber(r)));return s.compare(qI)===1&&(s=new rr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=jf(e),[r,s]=qf(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);if(!this.we(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new iu(i,s,n);return r.forEach(c=>o.insert(c)),o}insert(e){if(this.ge===0)return;const n=jf(e),[r,s]=qf(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);this.Se(o)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Ii extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Ka{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,co.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Ka(se.min(),s,new Ve(fe),Nn(),de())}}class co{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new co(r,n,de(),de(),de())}}/**
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
 */class Ko{constructor(e,n,r,s){this.be=e,this.removedTargetIds=n,this.key=r,this.De=s}}class Gm{constructor(e,n){this.targetId=e,this.Ce=n}}class Qm{constructor(e,n,r=rt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Hf{constructor(){this.ve=0,this.Fe=zf(),this.Me=rt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=de(),n=de(),r=de();return this.Fe.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:te(38017,{changeType:i})}}),new co(this.Me,this.xe,e,n,r)}qe(){this.Oe=!1,this.Fe=zf()}Qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,Te(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class HI{constructor(e){this.Ge=e,this.ze=new Map,this.je=Nn(),this.Je=Do(),this.He=Do(),this.Ye=new Ve(fe)}Ze(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Xe(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.We(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:te(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((r,s)=>{this.rt(s)&&n(s)})}st(e){const n=e.targetId,r=e.Ce.count,s=this.ot(n);if(s){const i=s.target;if(ml(i))if(r===0){const o=new J(i.path);this.et(n,o,ut.newNoDocument(o,se.min()))}else Te(r===1,20013,{expectedCount:r});else{const o=this._t(n);if(o!==r){const c=this.ut(e),l=c?this.ct(c,e,o):1;if(l!==0){this.it(n);const h=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(n,h)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,c;try{o=ur(r).toUint8Array()}catch(l){if(l instanceof Em)return Vs("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new iu(o,s,i)}catch(l){return Vs(l instanceof Ii?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.ge===0?null:c}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Ge.ht(),c=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.et(n,i,null),s++)}),s}Tt(e){const n=new Map;this.ze.forEach((i,o)=>{const c=this.ot(o);if(c){if(i.current&&ml(c.target)){const l=new J(c.target.path);this.It(l).has(o)||this.Et(o,l)||this.et(o,l,ut.newNoDocument(l,e))}i.Be&&(n.set(o,i.ke()),i.qe())}});let r=de();this.He.forEach((i,o)=>{let c=!0;o.forEachWhile(l=>{const h=this.ot(l);return!h||h.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(i))}),this.je.forEach((i,o)=>o.setReadTime(e));const s=new Ka(e,n,this.Ye,this.je,r);return this.je=Nn(),this.Je=Do(),this.He=Do(),this.Ye=new Ve(fe),s}Xe(e,n){if(!this.rt(e))return;const r=this.Et(e,n.key)?2:0;this.nt(e).Qe(n.key,r),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(e)),this.He=this.He.insert(n.key,this.dt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,n)?s.Qe(n,1):s.$e(n),this.He=this.He.insert(n,this.dt(n).delete(e)),this.He=this.He.insert(n,this.dt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let n=this.ze.get(e);return n||(n=new Hf,this.ze.set(e,n)),n}dt(e){let n=this.He.get(e);return n||(n=new $e(fe),this.He=this.He.insert(e,n)),n}It(e){let n=this.Je.get(e);return n||(n=new $e(fe),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||G("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Hf),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function Do(){return new Ve(J.comparator)}function zf(){return new Ve(J.comparator)}const zI={asc:"ASCENDING",desc:"DESCENDING"},WI={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},KI={and:"AND",or:"OR"};class GI{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function _l(t,e){return t.useProto3Json||Ba(e)?e:{value:e}}function ha(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Jm(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function QI(t,e){return ha(t,e.toTimestamp())}function on(t){return Te(!!t,49232),se.fromTimestamp(function(n){const r=lr(n);return new Oe(r.seconds,r.nanos)}(t))}function ou(t,e){return yl(t,e).canonicalString()}function yl(t,e){const n=function(s){return new Ce(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function Ym(t){const e=Ce.fromString(t);return Te(ng(e),10190,{key:e.toString()}),e}function El(t,e){return ou(t.databaseId,e.path)}function Uc(t,e){const n=Ym(e);if(n.get(1)!==t.databaseId.projectId)throw new W(D.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new W(D.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new J(Zm(n))}function Xm(t,e){return ou(t.databaseId,e)}function JI(t){const e=Ym(t);return e.length===4?Ce.emptyPath():Zm(e)}function vl(t){return new Ce(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Zm(t){return Te(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function Wf(t,e,n){return{name:El(t,e),fields:n.value.mapValue.fields}}function YI(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:te(39313,{state:h})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(h,f){return h.useProto3Json?(Te(f===void 0||typeof f=="string",58123),rt.fromBase64String(f||"")):(Te(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),rt.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&function(h){const f=h.code===void 0?D.UNKNOWN:Km(h.code);return new W(f,h.message||"")}(o);n=new Qm(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Uc(t,r.document.name),i=on(r.document.updateTime),o=r.document.createTime?on(r.document.createTime):se.min(),c=new Vt({mapValue:{fields:r.document.fields}}),l=ut.newFoundDocument(s,i,o,c),h=r.targetIds||[],f=r.removedTargetIds||[];n=new Ko(h,f,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Uc(t,r.document),i=r.readTime?on(r.readTime):se.min(),o=ut.newNoDocument(s,i),c=r.removedTargetIds||[];n=new Ko([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Uc(t,r.document),i=r.removedTargetIds||[];n=new Ko([],i,s,null)}else{if(!("filter"in e))return te(11601,{Rt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new BI(s,i),c=r.targetId;n=new Gm(c,o)}}return n}function XI(t,e){let n;if(e instanceof ao)n={update:Wf(t,e.key,e.value)};else if(e instanceof Wm)n={delete:El(t,e.key)};else if(e instanceof Zr)n={update:Wf(t,e.key,e.data),updateMask:aw(e.fieldMask)};else{if(!(e instanceof MI))return te(16599,{Vt:e.type});n={verify:El(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const c=o.transform;if(c instanceof Wi)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof Ki)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof Gi)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof ua)return{fieldPath:o.field.canonicalString(),increment:c.Ae};throw te(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:QI(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:te(27497)}(t,e.precondition)),n}function ZI(t,e){return t&&t.length>0?(Te(e!==void 0,14353),t.map(n=>function(s,i){let o=s.updateTime?on(s.updateTime):on(i);return o.isEqual(se.min())&&(o=on(i)),new kI(o,s.transformResults||[])}(n,e))):[]}function ew(t,e){return{documents:[Xm(t,e.path)]}}function tw(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Xm(t,s);const i=function(h){if(h.length!==0)return tg(zt.create(h,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(h){if(h.length!==0)return h.map(f=>function(g){return{field:ms(g.field),direction:sw(g.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const c=_l(t,e.limit);return c!==null&&(n.structuredQuery.limit=c),e.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{ft:n,parent:s}}function nw(t){let e=JI(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Te(r===1,65062);const f=n.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];n.where&&(i=function(p){const g=eg(p);return g instanceof zt&&Pm(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(g=>function(N){return new zi(gs(N.field),function(V){switch(V){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(N.direction))}(g))}(n.orderBy));let c=null;n.limit&&(c=function(p){let g;return g=typeof p=="object"?p.value:p,Ba(g)?null:g}(n.limit));let l=null;n.startAt&&(l=function(p){const g=!!p.before,I=p.values||[];return new ca(I,g)}(n.startAt));let h=null;return n.endAt&&(h=function(p){const g=!p.before,I=p.values||[];return new ca(I,g)}(n.endAt)),vI(e,s,o,i,c,"F",l,h)}function rw(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return te(28987,{purpose:s})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function eg(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=gs(n.unaryFilter.field);return Fe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=gs(n.unaryFilter.field);return Fe.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=gs(n.unaryFilter.field);return Fe.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=gs(n.unaryFilter.field);return Fe.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return te(61313);default:return te(60726)}}(t):t.fieldFilter!==void 0?function(n){return Fe.create(gs(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return te(58110);default:return te(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return zt.create(n.compositeFilter.filters.map(r=>eg(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return te(1026)}}(n.compositeFilter.op))}(t):te(30097,{filter:t})}function sw(t){return zI[t]}function iw(t){return WI[t]}function ow(t){return KI[t]}function ms(t){return{fieldPath:t.canonicalString()}}function gs(t){return Ye.fromServerFormat(t.fieldPath)}function tg(t){return t instanceof Fe?function(n){if(n.op==="=="){if(Df(n.value))return{unaryFilter:{field:ms(n.field),op:"IS_NAN"}};if(Vf(n.value))return{unaryFilter:{field:ms(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Df(n.value))return{unaryFilter:{field:ms(n.field),op:"IS_NOT_NAN"}};if(Vf(n.value))return{unaryFilter:{field:ms(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ms(n.field),op:iw(n.op),value:n.value}}}(t):t instanceof zt?function(n){const r=n.getFilters().map(s=>tg(s));return r.length===1?r[0]:{compositeFilter:{op:ow(n.op),filters:r}}}(t):te(54877,{filter:t})}function aw(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function ng(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class Zn{constructor(e,n,r,s,i=se.min(),o=se.min(),c=rt.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new Zn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Zn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Zn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Zn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class cw{constructor(e){this.yt=e}}function lw(t){const e=nw({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?la(e,e.limit,"L"):e}/**
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
 */class uw{constructor(){this.Cn=new hw}addToCollectionParentIndex(e,n){return this.Cn.add(n),k.resolve()}getCollectionParents(e,n){return k.resolve(this.Cn.getEntries(n))}addFieldIndex(e,n){return k.resolve()}deleteFieldIndex(e,n){return k.resolve()}deleteAllFieldIndexes(e){return k.resolve()}createTargetIndexes(e,n){return k.resolve()}getDocumentsMatchingTarget(e,n){return k.resolve(null)}getIndexType(e,n){return k.resolve(0)}getFieldIndexes(e,n){return k.resolve([])}getNextCollectionGroupToUpdate(e){return k.resolve(null)}getMinOffset(e,n){return k.resolve(cr.min())}getMinOffsetFromCollectionGroup(e,n){return k.resolve(cr.min())}updateCollectionGroup(e,n,r){return k.resolve()}updateIndexEntries(e,n){return k.resolve()}}class hw{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new $e(Ce.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new $e(Ce.comparator)).toArray()}}/**
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
 */const Kf={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},rg=41943040;class It{static withCacheSize(e){return new It(e,It.DEFAULT_COLLECTION_PERCENTILE,It.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
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
 */It.DEFAULT_COLLECTION_PERCENTILE=10,It.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,It.DEFAULT=new It(rg,It.DEFAULT_COLLECTION_PERCENTILE,It.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),It.DISABLED=new It(-1,0,0);/**
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
 */class Ls{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new Ls(0)}static cr(){return new Ls(-1)}}/**
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
 */const Gf="LruGarbageCollector",fw=1048576;function Qf([t,e],[n,r]){const s=fe(t,n);return s===0?fe(e,r):s}class dw{constructor(e){this.Ir=e,this.buffer=new $e(Qf),this.Er=0}dr(){return++this.Er}Ar(e){const n=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();Qf(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class pw{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){G(Gf,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Ws(n)?G(Gf,"Ignoring IndexedDB error during garbage collection: ",n):await zs(n)}await this.Vr(3e5)})}}class mw{constructor(e,n){this.mr=e,this.params=n}calculateTargetCount(e,n){return this.mr.gr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return k.resolve(Ua.ce);const r=new dw(n);return this.mr.forEachTarget(e,s=>r.Ar(s.sequenceNumber)).next(()=>this.mr.pr(e,s=>r.Ar(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.mr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.mr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(G("LruGarbageCollector","Garbage collection skipped; disabled"),k.resolve(Kf)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(G("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Kf):this.yr(e,n))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,n){let r,s,i,o,c,l,h;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(G("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,o=Date.now(),this.nthSequenceNumber(e,s))).next(p=>(r=p,c=Date.now(),this.removeTargets(e,r,n))).next(p=>(i=p,l=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(h=Date.now(),ds()<=he.DEBUG&&G("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${s} in `+(c-o)+`ms
	Removed ${i} targets in `+(l-c)+`ms
	Removed ${p} documents in `+(h-l)+`ms
Total Duration: ${h-f}ms`),k.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p})))}}function gw(t,e){return new mw(t,e)}/**
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
 */class _w{constructor(){this.changes=new Xr(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ut.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?k.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class yw{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class Ew{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&Oi(r.mutation,s,Bt.empty(),Oe.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,de()).next(()=>r))}getLocalViewOfDocuments(e,n,r=de()){const s=Lr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=Ti();return i.forEach((c,l)=>{o=o.insert(c,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Lr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,de()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,c)=>{n.set(o,c)})})}computeViews(e,n,r,s){let i=Nn();const o=Pi(),c=function(){return Pi()}();return n.forEach((l,h)=>{const f=r.get(h.key);s.has(h.key)&&(f===void 0||f.mutation instanceof Zr)?i=i.insert(h.key,h):f!==void 0?(o.set(h.key,f.mutation.getFieldMask()),Oi(f.mutation,h,f.mutation.getFieldMask(),Oe.now())):o.set(h.key,Bt.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((h,f)=>o.set(h,f)),n.forEach((h,f)=>c.set(h,new yw(f,o.get(h)??null))),c))}recalculateAndSaveOverlays(e,n){const r=Pi();let s=new Ve((o,c)=>o-c),i=de();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const c of o)c.keys().forEach(l=>{const h=n.get(l);if(h===null)return;let f=r.get(l)||Bt.empty();f=c.applyToLocalView(h,f),r.set(l,f);const p=(s.get(c.batchId)||de()).add(l);s=s.insert(c.batchId,p)})}).next(()=>{const o=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),h=l.key,f=l.value,p=Fm();f.forEach(g=>{if(!i.has(g)){const I=Hm(n.get(g),r.get(g));I!==null&&p.set(g,I),i=i.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,p))}return k.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return J.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Dm(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):k.resolve(Lr());let c=$i,l=i;return o.next(h=>k.forEach(h,(f,p)=>(c<p.largestBatchId&&(c=p.largestBatchId),i.get(f)?k.resolve():this.remoteDocumentCache.getEntry(e,f).next(g=>{l=l.insert(f,g)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,l,h,de())).next(f=>({batchId:c,changes:Mm(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new J(n)).next(r=>{let s=Ti();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=Ti();return this.indexManager.getCollectionParents(e,i).next(c=>k.forEach(c,l=>{const h=function(p,g){return new Ks(g,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next(f=>{f.forEach((p,g)=>{o=o.insert(p,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((l,h)=>{const f=h.getKey();o.get(f)===null&&(o=o.insert(f,ut.newInvalidDocument(f)))});let c=Ti();return o.forEach((l,h)=>{const f=i.get(l);f!==void 0&&Oi(f.mutation,h,Bt.empty(),Oe.now()),Ha(n,h)&&(c=c.insert(l,h))}),c})}}/**
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
 */class vw{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,n){return k.resolve(this.Lr.get(n))}saveBundleMetadata(e,n){return this.Lr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:on(s.createTime)}}(n)),k.resolve()}getNamedQuery(e,n){return k.resolve(this.kr.get(n))}saveNamedQuery(e,n){return this.kr.set(n.name,function(s){return{name:s.name,query:lw(s.bundledQuery),readTime:on(s.readTime)}}(n)),k.resolve()}}/**
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
 */class Tw{constructor(){this.overlays=new Ve(J.comparator),this.qr=new Map}getOverlay(e,n){return k.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Lr();return k.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.St(e,n,i)}),k.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.qr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.qr.delete(r)),k.resolve()}getOverlaysForCollection(e,n,r){const s=Lr(),i=n.length+1,o=new J(n.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const l=c.getNext().value,h=l.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return k.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Ve((h,f)=>h-f);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let f=i.get(h.largestBatchId);f===null&&(f=Lr(),i=i.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const c=Lr(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((h,f)=>c.set(h,f)),!(c.size()>=s)););return k.resolve(c)}St(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.qr.get(s.largestBatchId).delete(r.key);this.qr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new UI(n,r));let i=this.qr.get(n);i===void 0&&(i=de(),this.qr.set(n,i)),this.qr.set(n,i.add(r.key))}}/**
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
 */class Iw{constructor(){this.sessionToken=rt.EMPTY_BYTE_STRING}getSessionToken(e){return k.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,k.resolve()}}/**
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
 */class au{constructor(){this.Qr=new $e(He.$r),this.Ur=new $e(He.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,n){const r=new He(e,n);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Gr(new He(e,n))}zr(e,n){e.forEach(r=>this.removeReference(r,n))}jr(e){const n=new J(new Ce([])),r=new He(n,e),s=new He(n,e+1),i=[];return this.Ur.forEachInRange([r,s],o=>{this.Gr(o),i.push(o.key)}),i}Jr(){this.Qr.forEach(e=>this.Gr(e))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const n=new J(new Ce([])),r=new He(n,e),s=new He(n,e+1);let i=de();return this.Ur.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new He(e,0),r=this.Qr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class He{constructor(e,n){this.key=e,this.Yr=n}static $r(e,n){return J.comparator(e.key,n.key)||fe(e.Yr,n.Yr)}static Kr(e,n){return fe(e.Yr,n.Yr)||J.comparator(e.key,n.key)}}/**
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
 */class ww{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.tr=1,this.Zr=new $e(He.$r)}checkEmpty(e){return k.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new FI(i,n,r,s);this.mutationQueue.push(o);for(const c of s)this.Zr=this.Zr.add(new He(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return k.resolve(o)}lookupMutationBatch(e,n){return k.resolve(this.Xr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.ei(r),i=s<0?0:s;return k.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return k.resolve(this.mutationQueue.length===0?Xl:this.tr-1)}getAllMutationBatches(e){return k.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new He(n,0),s=new He(n,Number.POSITIVE_INFINITY),i=[];return this.Zr.forEachInRange([r,s],o=>{const c=this.Xr(o.Yr);i.push(c)}),k.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new $e(fe);return n.forEach(s=>{const i=new He(s,0),o=new He(s,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([i,o],c=>{r=r.add(c.Yr)})}),k.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;J.isDocumentKey(i)||(i=i.child(""));const o=new He(new J(i),0);let c=new $e(fe);return this.Zr.forEachWhile(l=>{const h=l.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(c=c.add(l.Yr)),!0)},o),k.resolve(this.ti(c))}ti(e){const n=[];return e.forEach(r=>{const s=this.Xr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Te(this.ni(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return k.forEach(n.mutations,s=>{const i=new He(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Zr=r})}ir(e){}containsKey(e,n){const r=new He(n,0),s=this.Zr.firstAfterOrEqual(r);return k.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,k.resolve()}ni(e,n){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const n=this.ei(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class Aw{constructor(e){this.ri=e,this.docs=function(){return new Ve(J.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.ri(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return k.resolve(r?r.document.mutableCopy():ut.newInvalidDocument(n))}getEntries(e,n){let r=Nn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():ut.newInvalidDocument(s))}),k.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Nn();const o=n.path,c=new J(o.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:h,value:{document:f}}=l.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||XT(YT(f),r)<=0||(s.has(f.key)||Ha(n,f))&&(i=i.insert(f.key,f.mutableCopy()))}return k.resolve(i)}getAllFromCollectionGroup(e,n,r,s){te(9500)}ii(e,n){return k.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new bw(this)}getSize(e){return k.resolve(this.size)}}class bw extends _w{constructor(e){super(),this.Nr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.Nr.addEntry(e,s)):this.Nr.removeEntry(r)}),k.waitFor(n)}getFromCache(e,n){return this.Nr.getEntry(e,n)}getAllFromCache(e,n){return this.Nr.getEntries(e,n)}}/**
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
 */class Sw{constructor(e){this.persistence=e,this.si=new Xr(n=>tu(n),nu),this.lastRemoteSnapshotVersion=se.min(),this.highestTargetId=0,this.oi=0,this._i=new au,this.targetCount=0,this.ai=Ls.ur()}forEachTarget(e,n){return this.si.forEach((r,s)=>n(s)),k.resolve()}getLastRemoteSnapshotVersion(e){return k.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return k.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),k.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.oi&&(this.oi=n),k.resolve()}Pr(e){this.si.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ai=new Ls(n),this.highestTargetId=n),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,n){return this.Pr(n),this.targetCount+=1,k.resolve()}updateTargetData(e,n){return this.Pr(n),k.resolve()}removeTargetData(e,n){return this.si.delete(n.target),this._i.jr(n.targetId),this.targetCount-=1,k.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.si.forEach((o,c)=>{c.sequenceNumber<=n&&r.get(c.targetId)===null&&(this.si.delete(o),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)}),k.waitFor(i).next(()=>s)}getTargetCount(e){return k.resolve(this.targetCount)}getTargetData(e,n){const r=this.si.get(n)||null;return k.resolve(r)}addMatchingKeys(e,n,r){return this._i.Wr(n,r),k.resolve()}removeMatchingKeys(e,n,r){this._i.zr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),k.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this._i.jr(n),k.resolve()}getMatchingKeysForTargetId(e,n){const r=this._i.Hr(n);return k.resolve(r)}containsKey(e,n){return k.resolve(this._i.containsKey(n))}}/**
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
 */class sg{constructor(e,n){this.ui={},this.overlays={},this.ci=new Ua(0),this.li=!1,this.li=!0,this.hi=new Iw,this.referenceDelegate=e(this),this.Pi=new Sw(this),this.indexManager=new uw,this.remoteDocumentCache=function(s){return new Aw(s)}(r=>this.referenceDelegate.Ti(r)),this.serializer=new cw(n),this.Ii=new vw(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new Tw,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ui[e.toKey()];return r||(r=new ww(n,this.referenceDelegate),this.ui[e.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,n,r){G("MemoryPersistence","Starting transaction:",e);const s=new Cw(this.ci.next());return this.referenceDelegate.Ei(),r(s).next(i=>this.referenceDelegate.di(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ai(e,n){return k.or(Object.values(this.ui).map(r=>()=>r.containsKey(e,n)))}}class Cw extends eI{constructor(e){super(),this.currentSequenceNumber=e}}class cu{constructor(e){this.persistence=e,this.Ri=new au,this.Vi=null}static mi(e){return new cu(e)}get fi(){if(this.Vi)return this.Vi;throw te(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.fi.delete(r.toString()),k.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.fi.add(r.toString()),k.resolve()}markPotentiallyOrphaned(e,n){return this.fi.add(n.toString()),k.resolve()}removeTarget(e,n){this.Ri.jr(n.targetId).forEach(s=>this.fi.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.fi.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Ei(){this.Vi=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return k.forEach(this.fi,r=>{const s=J.fromPath(r);return this.gi(e,s).next(i=>{i||n.removeEntry(s,se.min())})}).next(()=>(this.Vi=null,n.apply(e)))}updateLimboDocument(e,n){return this.gi(e,n).next(r=>{r?this.fi.delete(n.toString()):this.fi.add(n.toString())})}Ti(e){return 0}gi(e,n){return k.or([()=>k.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ai(e,n)])}}class fa{constructor(e,n){this.persistence=e,this.pi=new Xr(r=>rI(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=gw(this,n)}static mi(e,n){return new fa(e,n)}Ei(){}di(e){return k.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}gr(e){const n=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}wr(e){let n=0;return this.pr(e,r=>{n++}).next(()=>n)}pr(e,n){return k.forEach(this.pi,(r,s)=>this.br(e,r,s).next(i=>i?k.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ii(e,o=>this.br(e,o,n).next(c=>{c||(r++,i.removeEntry(o,se.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.pi.set(n,e.currentSequenceNumber),k.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),k.resolve()}removeReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),k.resolve()}updateLimboDocument(e,n){return this.pi.set(n,e.currentSequenceNumber),k.resolve()}Ti(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Ho(e.data.value)),n}br(e,n,r){return k.or([()=>this.persistence.Ai(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.pi.get(n);return k.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class lu{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Es=r,this.ds=s}static As(e,n){let r=de(),s=de();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new lu(e,n.fromCache,r,s)}}/**
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
 */class Rw{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class Pw{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=function(){return Ev()?8:tI(pt())>0?6:4}()}initialize(e,n){this.ps=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.ys(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.ws(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new Rw;return this.Ss(e,n,o).next(c=>{if(i.result=c,this.Vs)return this.bs(e,n,o,c.size)})}).next(()=>i.result)}bs(e,n,r,s){return r.documentReadCount<this.fs?(ds()<=he.DEBUG&&G("QueryEngine","SDK will not create cache indexes for query:",ps(n),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),k.resolve()):(ds()<=he.DEBUG&&G("QueryEngine","Query:",ps(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.gs*s?(ds()<=he.DEBUG&&G("QueryEngine","The SDK decides to create cache indexes for query:",ps(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,rn(n))):k.resolve())}ys(e,n){if(Mf(n))return k.resolve(null);let r=rn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=la(n,null,"F"),r=rn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=de(...i);return this.ps.getDocuments(e,o).next(c=>this.indexManager.getMinOffset(e,r).next(l=>{const h=this.Ds(n,c);return this.Cs(n,h,o,l.readTime)?this.ys(e,la(n,null,"F")):this.vs(e,h,n,l)}))})))}ws(e,n,r,s){return Mf(n)||s.isEqual(se.min())?k.resolve(null):this.ps.getDocuments(e,r).next(i=>{const o=this.Ds(n,i);return this.Cs(n,o,r,s)?k.resolve(null):(ds()<=he.DEBUG&&G("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),ps(n)),this.vs(e,o,n,JT(s,$i)).next(c=>c))})}Ds(e,n){let r=new $e(xm(e));return n.forEach((s,i)=>{Ha(e,i)&&(r=r.add(i))}),r}Cs(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ss(e,n,r){return ds()<=he.DEBUG&&G("QueryEngine","Using full collection scan to execute query:",ps(n)),this.ps.getDocumentsMatchingQuery(e,n,cr.min(),r)}vs(e,n,r,s){return this.ps.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */const uu="LocalStore",Ow=3e8;class Nw{constructor(e,n,r,s){this.persistence=e,this.Fs=n,this.serializer=s,this.Ms=new Ve(fe),this.xs=new Xr(i=>tu(i),nu),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(r)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Ew(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ms))}}function Vw(t,e,n,r){return new Nw(t,e,n,r)}async function ig(t,e){const n=oe(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.Bs(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],c=[];let l=de();for(const h of s){o.push(h.batchId);for(const f of h.mutations)l=l.add(f.key)}for(const h of i){c.push(h.batchId);for(const f of h.mutations)l=l.add(f.key)}return n.localDocuments.getDocuments(r,l).next(h=>({Ls:h,removedBatchIds:o,addedBatchIds:c}))})})}function Dw(t,e){const n=oe(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.Ns.newChangeBuffer({trackRemovals:!0});return function(c,l,h,f){const p=h.batch,g=p.keys();let I=k.resolve();return g.forEach(N=>{I=I.next(()=>f.getEntry(l,N)).next(P=>{const V=h.docVersions.get(N);Te(V!==null,48541),P.version.compareTo(V)<0&&(p.applyToRemoteDocument(P,h),P.isValidDocument()&&(P.setReadTime(h.commitVersion),f.addEntry(P)))})}),I.next(()=>c.mutationQueue.removeMutationBatch(l,p))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let l=de();for(let h=0;h<c.mutationResults.length;++h)c.mutationResults[h].transformResults.length>0&&(l=l.add(c.batch.mutations[h].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function og(t){const e=oe(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Pi.getLastRemoteSnapshotVersion(n))}function kw(t,e){const n=oe(t),r=e.snapshotVersion;let s=n.Ms;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Ns.newChangeBuffer({trackRemovals:!0});s=n.Ms;const c=[];e.targetChanges.forEach((f,p)=>{const g=s.get(p);if(!g)return;c.push(n.Pi.removeMatchingKeys(i,f.removedDocuments,p).next(()=>n.Pi.addMatchingKeys(i,f.addedDocuments,p)));let I=g.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?I=I.withResumeToken(rt.EMPTY_BYTE_STRING,se.min()).withLastLimboFreeSnapshotVersion(se.min()):f.resumeToken.approximateByteSize()>0&&(I=I.withResumeToken(f.resumeToken,r)),s=s.insert(p,I),function(P,V,$){return P.resumeToken.approximateByteSize()===0||V.snapshotVersion.toMicroseconds()-P.snapshotVersion.toMicroseconds()>=Ow?!0:$.addedDocuments.size+$.modifiedDocuments.size+$.removedDocuments.size>0}(g,I,f)&&c.push(n.Pi.updateTargetData(i,I))});let l=Nn(),h=de();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&c.push(n.persistence.referenceDelegate.updateLimboDocument(i,f))}),c.push(xw(i,o,e.documentUpdates).next(f=>{l=f.ks,h=f.qs})),!r.isEqual(se.min())){const f=n.Pi.getLastRemoteSnapshotVersion(i).next(p=>n.Pi.setTargetsMetadata(i,i.currentSequenceNumber,r));c.push(f)}return k.waitFor(c).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,l,h)).next(()=>l)}).then(i=>(n.Ms=s,i))}function xw(t,e,n){let r=de(),s=de();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=Nn();return n.forEach((c,l)=>{const h=i.get(c);l.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(se.min())?(e.removeEntry(c,l.readTime),o=o.insert(c,l)):!h.isValidDocument()||l.version.compareTo(h.version)>0||l.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(l),o=o.insert(c,l)):G(uu,"Ignoring outdated watch update for ",c,". Current version:",h.version," Watch version:",l.version)}),{ks:o,qs:s}})}function Lw(t,e){const n=oe(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Xl),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Mw(t,e){const n=oe(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Pi.getTargetData(r,e).next(i=>i?(s=i,k.resolve(s)):n.Pi.allocateTargetId(r).next(o=>(s=new Zn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Pi.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.Ms.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(r.targetId,r),n.xs.set(e,r.targetId)),r})}async function Tl(t,e,n){const r=oe(t),s=r.Ms.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Ws(o))throw o;G(uu,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ms=r.Ms.remove(e),r.xs.delete(s.target)}function Jf(t,e,n){const r=oe(t);let s=se.min(),i=de();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,h,f){const p=oe(l),g=p.xs.get(f);return g!==void 0?k.resolve(p.Ms.get(g)):p.Pi.getTargetData(h,f)}(r,o,rn(e)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(o,c.targetId).next(l=>{i=l})}).next(()=>r.Fs.getDocumentsMatchingQuery(o,e,n?s:se.min(),n?i:de())).next(c=>(Fw(r,II(e),c),{documents:c,Qs:i})))}function Fw(t,e,n){let r=t.Os.get(e)||se.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.Os.set(e,r)}class Yf{constructor(){this.activeTargetIds=RI()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Uw{constructor(){this.Mo=new Yf,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,n,r){this.xo[e]=n}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new Yf,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class Bw{Oo(e){}shutdown(){}}/**
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
 */const Xf="ConnectivityMonitor";class Zf{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){G(Xf,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){G(Xf,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let ko=null;function Il(){return ko===null?ko=function(){return 268435456+Math.round(2147483648*Math.random())}():ko++,"0x"+ko.toString(16)}/**
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
 */const Bc="RestConnection",$w={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class jw{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Uo=n+"://"+e.host,this.Ko=`projects/${r}/databases/${s}`,this.Wo=this.databaseId.database===oa?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Go(e,n,r,s,i){const o=Il(),c=this.zo(e,n.toUriEncodedString());G(Bc,`Sending RPC '${e}' ${o}:`,c,r);const l={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(l,s,i);const{host:h}=new URL(c),f=js(h);return this.Jo(e,c,l,r,f).then(p=>(G(Bc,`Received RPC '${e}' ${o}: `,p),p),p=>{throw Vs(Bc,`RPC '${e}' ${o} failed with error: `,p,"url: ",c,"request:",r),p})}Ho(e,n,r,s,i,o){return this.Go(e,n,r,s,i)}jo(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Hs}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}zo(e,n){const r=$w[e];return`${this.Uo}/v1/${n}:${r}`}terminate(){}}/**
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
 */class qw{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
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
 */const ot="WebChannelConnection";class Hw extends jw{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,n,r,s,i){const o=Il();return new Promise((c,l)=>{const h=new cm;h.setWithCredentials(!0),h.listenOnce(lm.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case qo.NO_ERROR:const p=h.getResponseJson();G(ot,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),c(p);break;case qo.TIMEOUT:G(ot,`RPC '${e}' ${o} timed out`),l(new W(D.DEADLINE_EXCEEDED,"Request time out"));break;case qo.HTTP_ERROR:const g=h.getStatus();if(G(ot,`RPC '${e}' ${o} failed with status:`,g,"response text:",h.getResponseText()),g>0){let I=h.getResponseJson();Array.isArray(I)&&(I=I[0]);const N=I==null?void 0:I.error;if(N&&N.status&&N.message){const P=function($){const K=$.toLowerCase().replace(/_/g,"-");return Object.values(D).indexOf(K)>=0?K:D.UNKNOWN}(N.status);l(new W(P,N.message))}else l(new W(D.UNKNOWN,"Server responded with status "+h.getStatus()))}else l(new W(D.UNAVAILABLE,"Connection failed."));break;default:te(9055,{l_:e,streamId:o,h_:h.getLastErrorCode(),P_:h.getLastError()})}}finally{G(ot,`RPC '${e}' ${o} completed.`)}});const f=JSON.stringify(s);G(ot,`RPC '${e}' ${o} sending request:`,s),h.send(n,"POST",f,r,15)})}T_(e,n,r){const s=Il(),i=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=fm(),c=hm(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(l.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(l.useFetchStreams=!0),this.jo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const f=i.join("");G(ot,`Creating RPC '${e}' stream ${s}: ${f}`,l);const p=o.createWebChannel(f,l);this.I_(p);let g=!1,I=!1;const N=new qw({Yo:V=>{I?G(ot,`Not sending because RPC '${e}' stream ${s} is closed:`,V):(g||(G(ot,`Opening RPC '${e}' stream ${s} transport.`),p.open(),g=!0),G(ot,`RPC '${e}' stream ${s} sending:`,V),p.send(V))},Zo:()=>p.close()}),P=(V,$,K)=>{V.listen($,Q=>{try{K(Q)}catch(z){setTimeout(()=>{throw z},0)}})};return P(p,vi.EventType.OPEN,()=>{I||(G(ot,`RPC '${e}' stream ${s} transport opened.`),N.o_())}),P(p,vi.EventType.CLOSE,()=>{I||(I=!0,G(ot,`RPC '${e}' stream ${s} transport closed`),N.a_(),this.E_(p))}),P(p,vi.EventType.ERROR,V=>{I||(I=!0,Vs(ot,`RPC '${e}' stream ${s} transport errored. Name:`,V.name,"Message:",V.message),N.a_(new W(D.UNAVAILABLE,"The operation could not be completed")))}),P(p,vi.EventType.MESSAGE,V=>{var $;if(!I){const K=V.data[0];Te(!!K,16349);const Q=K,z=(Q==null?void 0:Q.error)||(($=Q[0])==null?void 0:$.error);if(z){G(ot,`RPC '${e}' stream ${s} received error:`,z);const ae=z.status;let ce=function(_){const A=Me[_];if(A!==void 0)return Km(A)}(ae),b=z.message;ce===void 0&&(ce=D.INTERNAL,b="Unknown error status: "+ae+" with message "+z.message),I=!0,N.a_(new W(ce,b)),p.close()}else G(ot,`RPC '${e}' stream ${s} received:`,K),N.u_(K)}}),P(c,um.STAT_EVENT,V=>{V.stat===ul.PROXY?G(ot,`RPC '${e}' stream ${s} detected buffering proxy`):V.stat===ul.NOPROXY&&G(ot,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{N.__()},0),N}terminate(){this.c_.forEach(e=>e.close()),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter(n=>n===e)}}function $c(){return typeof document<"u"?document:null}/**
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
 */function Ga(t){return new GI(t,!0)}/**
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
 */class ag{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Mi=e,this.timerId=n,this.d_=r,this.A_=s,this.R_=i,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const n=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,n-r);s>0&&G("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.V_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,s,()=>(this.f_=Date.now(),e())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
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
 */const ed="PersistentStream";class cg{constructor(e,n,r,s,i,o,c,l){this.Mi=e,this.S_=r,this.b_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new ag(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===D.RESOURCE_EXHAUSTED?(On(n.toString()),On("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===D.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(n)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.D_===n&&this.G_(r,s)},r=>{e(()=>{const s=new W(D.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)})})}G_(e,n){const r=this.W_(this.D_);this.stream=this.j_(e,n),this.stream.Xo(()=>{r(()=>this.listener.Xo())}),this.stream.t_(()=>{r(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(s=>{r(()=>this.z_(s))}),this.stream.onMessage(s=>{r(()=>++this.F_==1?this.J_(s):this.onNext(s))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return G(ed,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return n=>{this.Mi.enqueueAndForget(()=>this.D_===e?n():(G(ed,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class zw extends cg{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=YI(this.serializer,e),r=function(i){if(!("targetChange"in i))return se.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?se.min():o.readTime?on(o.readTime):se.min()}(e);return this.listener.H_(n,r)}Y_(e){const n={};n.database=vl(this.serializer),n.addTarget=function(i,o){let c;const l=o.target;if(c=ml(l)?{documents:ew(i,l)}:{query:tw(i,l).ft},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=Jm(i,o.resumeToken);const h=_l(i,o.expectedCount);h!==null&&(c.expectedCount=h)}else if(o.snapshotVersion.compareTo(se.min())>0){c.readTime=ha(i,o.snapshotVersion.toTimestamp());const h=_l(i,o.expectedCount);h!==null&&(c.expectedCount=h)}return c}(this.serializer,e);const r=rw(this.serializer,e);r&&(n.labels=r),this.q_(n)}Z_(e){const n={};n.database=vl(this.serializer),n.removeTarget=e,this.q_(n)}}class Ww extends cg{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return Te(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Te(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){Te(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=ZI(e.writeResults,e.commitTime),r=on(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=vl(this.serializer),this.q_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>XI(this.serializer,r))};this.q_(n)}}/**
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
 */class Kw{}class Gw extends Kw{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new W(D.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,n,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Go(e,yl(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new W(D.UNKNOWN,i.toString())})}Ho(e,n,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,c])=>this.connection.Ho(e,yl(n,r),s,o,c,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new W(D.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class Qw{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(On(n),this.aa=!1):G("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const Hr="RemoteStore";class Jw{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=i,this.Aa.Oo(o=>{r.enqueueAndForget(async()=>{es(this)&&(G(Hr,"Restarting streams for network reachability change."),await async function(l){const h=oe(l);h.Ea.add(4),await lo(h),h.Ra.set("Unknown"),h.Ea.delete(4),await Qa(h)}(this))})}),this.Ra=new Qw(r,s)}}async function Qa(t){if(es(t))for(const e of t.da)await e(!0)}async function lo(t){for(const e of t.da)await e(!1)}function lg(t,e){const n=oe(t);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),pu(n)?du(n):Gs(n).O_()&&fu(n,e))}function hu(t,e){const n=oe(t),r=Gs(n);n.Ia.delete(e),r.O_()&&ug(n,e),n.Ia.size===0&&(r.O_()?r.L_():es(n)&&n.Ra.set("Unknown"))}function fu(t,e){if(t.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(se.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Gs(t).Y_(e)}function ug(t,e){t.Va.Ue(e),Gs(t).Z_(e)}function du(t){t.Va=new HI({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),Gs(t).start(),t.Ra.ua()}function pu(t){return es(t)&&!Gs(t).x_()&&t.Ia.size>0}function es(t){return oe(t).Ea.size===0}function hg(t){t.Va=void 0}async function Yw(t){t.Ra.set("Online")}async function Xw(t){t.Ia.forEach((e,n)=>{fu(t,e)})}async function Zw(t,e){hg(t),pu(t)?(t.Ra.ha(e),du(t)):t.Ra.set("Unknown")}async function eA(t,e,n){if(t.Ra.set("Online"),e instanceof Qm&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const c of i.targetIds)s.Ia.has(c)&&(await s.remoteSyncer.rejectListen(c,o),s.Ia.delete(c),s.Va.removeTarget(c))}(t,e)}catch(r){G(Hr,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await da(t,r)}else if(e instanceof Ko?t.Va.Ze(e):e instanceof Gm?t.Va.st(e):t.Va.tt(e),!n.isEqual(se.min()))try{const r=await og(t.localStore);n.compareTo(r)>=0&&await function(i,o){const c=i.Va.Tt(o);return c.targetChanges.forEach((l,h)=>{if(l.resumeToken.approximateByteSize()>0){const f=i.Ia.get(h);f&&i.Ia.set(h,f.withResumeToken(l.resumeToken,o))}}),c.targetMismatches.forEach((l,h)=>{const f=i.Ia.get(l);if(!f)return;i.Ia.set(l,f.withResumeToken(rt.EMPTY_BYTE_STRING,f.snapshotVersion)),ug(i,l);const p=new Zn(f.target,l,h,f.sequenceNumber);fu(i,p)}),i.remoteSyncer.applyRemoteEvent(c)}(t,n)}catch(r){G(Hr,"Failed to raise snapshot:",r),await da(t,r)}}async function da(t,e,n){if(!Ws(e))throw e;t.Ea.add(1),await lo(t),t.Ra.set("Offline"),n||(n=()=>og(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{G(Hr,"Retrying IndexedDB access"),await n(),t.Ea.delete(1),await Qa(t)})}function fg(t,e){return e().catch(n=>da(t,n,e))}async function Ja(t){const e=oe(t),n=fr(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Xl;for(;tA(e);)try{const s=await Lw(e.localStore,r);if(s===null){e.Ta.length===0&&n.L_();break}r=s.batchId,nA(e,s)}catch(s){await da(e,s)}dg(e)&&pg(e)}function tA(t){return es(t)&&t.Ta.length<10}function nA(t,e){t.Ta.push(e);const n=fr(t);n.O_()&&n.X_&&n.ea(e.mutations)}function dg(t){return es(t)&&!fr(t).x_()&&t.Ta.length>0}function pg(t){fr(t).start()}async function rA(t){fr(t).ra()}async function sA(t){const e=fr(t);for(const n of t.Ta)e.ea(n.mutations)}async function iA(t,e,n){const r=t.Ta.shift(),s=su.from(r,e,n);await fg(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Ja(t)}async function oA(t,e){e&&fr(t).X_&&await async function(r,s){if(function(o){return $I(o)&&o!==D.ABORTED}(s.code)){const i=r.Ta.shift();fr(r).B_(),await fg(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Ja(r)}}(t,e),dg(t)&&pg(t)}async function td(t,e){const n=oe(t);n.asyncQueue.verifyOperationInProgress(),G(Hr,"RemoteStore received new credentials");const r=es(n);n.Ea.add(3),await lo(n),r&&n.Ra.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await Qa(n)}async function aA(t,e){const n=oe(t);e?(n.Ea.delete(2),await Qa(n)):e||(n.Ea.add(2),await lo(n),n.Ra.set("Unknown"))}function Gs(t){return t.ma||(t.ma=function(n,r,s){const i=oe(n);return i.sa(),new zw(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Xo:Yw.bind(null,t),t_:Xw.bind(null,t),r_:Zw.bind(null,t),H_:eA.bind(null,t)}),t.da.push(async e=>{e?(t.ma.B_(),pu(t)?du(t):t.Ra.set("Unknown")):(await t.ma.stop(),hg(t))})),t.ma}function fr(t){return t.fa||(t.fa=function(n,r,s){const i=oe(n);return i.sa(),new Ww(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Xo:()=>Promise.resolve(),t_:rA.bind(null,t),r_:oA.bind(null,t),ta:sA.bind(null,t),na:iA.bind(null,t)}),t.da.push(async e=>{e?(t.fa.B_(),await Ja(t)):(await t.fa.stop(),t.Ta.length>0&&(G(Hr,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.fa}/**
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
 */class mu{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new sr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,c=new mu(e,n,o,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new W(D.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function gu(t,e){if(On("AsyncQueue",`${e}: ${t}`),Ws(t))return new W(D.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Es{static emptySet(e){return new Es(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||J.comparator(n.key,r.key):(n,r)=>J.comparator(n.key,r.key),this.keyedMap=Ti(),this.sortedSet=new Ve(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Es)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Es;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class nd{constructor(){this.ga=new Ve(J.comparator)}track(e){const n=e.doc.key,r=this.ga.get(n);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(n,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(n):e.type===1&&r.type===2?this.ga=this.ga.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):te(63341,{Rt:e,pa:r}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal((n,r)=>{e.push(r)}),e}}class Ms{constructor(e,n,r,s,i,o,c,l,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(c=>{o.push({type:0,doc:c})}),new Ms(e,n,Es.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&qa(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class cA{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class lA{constructor(){this.queries=rd(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const s=oe(n),i=s.queries;s.queries=rd(),i.forEach((o,c)=>{for(const l of c.Sa)l.onError(r)})})(this,new W(D.ABORTED,"Firestore shutting down"))}}function rd(){return new Xr(t=>km(t),qa)}async function mg(t,e){const n=oe(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.ba()&&e.Da()&&(r=2):(i=new cA,r=e.Da()?0:1);try{switch(r){case 0:i.wa=await n.onListen(s,!0);break;case 1:i.wa=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const c=gu(o,`Initialization of query '${ps(e.query)}' failed`);return void e.onError(c)}n.queries.set(s,i),i.Sa.push(e),e.va(n.onlineState),i.wa&&e.Fa(i.wa)&&_u(n)}async function gg(t,e){const n=oe(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.Sa.indexOf(e);o>=0&&(i.Sa.splice(o,1),i.Sa.length===0?s=e.Da()?0:1:!i.ba()&&e.Da()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function uA(t,e){const n=oe(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const c of o.Sa)c.Fa(s)&&(r=!0);o.wa=s}}r&&_u(n)}function hA(t,e,n){const r=oe(t),s=r.queries.get(e);if(s)for(const i of s.Sa)i.onError(n);r.queries.delete(e)}function _u(t){t.Ca.forEach(e=>{e.next()})}var wl,sd;(sd=wl||(wl={})).Ma="default",sd.Cache="cache";class _g{constructor(e,n,r){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Ms(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const r=n!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=Ms.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==wl.Cache}}/**
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
 */class yg{constructor(e){this.key=e}}class Eg{constructor(e){this.key=e}}class fA{constructor(e,n){this.query=e,this.Ya=n,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=de(),this.mutatedKeys=de(),this.eu=xm(e),this.tu=new Es(this.eu)}get nu(){return this.Ya}ru(e,n){const r=n?n.iu:new nd,s=n?n.tu:this.tu;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,p)=>{const g=s.get(f),I=Ha(this.query,p)?p:null,N=!!g&&this.mutatedKeys.has(g.key),P=!!I&&(I.hasLocalMutations||this.mutatedKeys.has(I.key)&&I.hasCommittedMutations);let V=!1;g&&I?g.data.isEqual(I.data)?N!==P&&(r.track({type:3,doc:I}),V=!0):this.su(g,I)||(r.track({type:2,doc:I}),V=!0,(l&&this.eu(I,l)>0||h&&this.eu(I,h)<0)&&(c=!0)):!g&&I?(r.track({type:0,doc:I}),V=!0):g&&!I&&(r.track({type:1,doc:g}),V=!0,(l||h)&&(c=!0)),V&&(I?(o=o.add(I),i=P?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{tu:o,iu:r,Cs:c,mutatedKeys:i}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort((f,p)=>function(I,N){const P=V=>{switch(V){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return te(20277,{Rt:V})}};return P(I)-P(N)}(f.type,p.type)||this.eu(f.doc,p.doc)),this.ou(r),s=s??!1;const c=n&&!s?this._u():[],l=this.Xa.size===0&&this.current&&!s?1:0,h=l!==this.Za;return this.Za=l,o.length!==0||h?{snapshot:new Ms(this.query,e.tu,i,o,e.mutatedKeys,l===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:c}:{au:c}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new nd,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(n=>this.Ya=this.Ya.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ya=this.Ya.delete(n)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=de(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))});const n=[];return e.forEach(r=>{this.Xa.has(r)||n.push(new Eg(r))}),this.Xa.forEach(r=>{e.has(r)||n.push(new yg(r))}),n}cu(e){this.Ya=e.Qs,this.Xa=de();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return Ms.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const yu="SyncEngine";class dA{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class pA{constructor(e){this.key=e,this.hu=!1}}class mA{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new Xr(c=>km(c),qa),this.Iu=new Map,this.Eu=new Set,this.du=new Ve(J.comparator),this.Au=new Map,this.Ru=new au,this.Vu={},this.mu=new Map,this.fu=Ls.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function gA(t,e,n=!0){const r=bg(t);let s;const i=r.Tu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await vg(r,e,n,!0),s}async function _A(t,e){const n=bg(t);await vg(n,e,!0,!1)}async function vg(t,e,n,r){const s=await Mw(t.localStore,rn(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let c;return r&&(c=await yA(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&lg(t.remoteStore,s),c}async function yA(t,e,n,r,s){t.pu=(p,g,I)=>async function(P,V,$,K){let Q=V.view.ru($);Q.Cs&&(Q=await Jf(P.localStore,V.query,!1).then(({documents:b})=>V.view.ru(b,Q)));const z=K&&K.targetChanges.get(V.targetId),ae=K&&K.targetMismatches.get(V.targetId)!=null,ce=V.view.applyChanges(Q,P.isPrimaryClient,z,ae);return od(P,V.targetId,ce.au),ce.snapshot}(t,p,g,I);const i=await Jf(t.localStore,e,!0),o=new fA(e,i.Qs),c=o.ru(i.documents),l=co.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),h=o.applyChanges(c,t.isPrimaryClient,l);od(t,n,h.au);const f=new dA(e,n,o);return t.Tu.set(e,f),t.Iu.has(n)?t.Iu.get(n).push(e):t.Iu.set(n,[e]),h.snapshot}async function EA(t,e,n){const r=oe(t),s=r.Tu.get(e),i=r.Iu.get(s.targetId);if(i.length>1)return r.Iu.set(s.targetId,i.filter(o=>!qa(o,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Tl(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&hu(r.remoteStore,s.targetId),Al(r,s.targetId)}).catch(zs)):(Al(r,s.targetId),await Tl(r.localStore,s.targetId,!0))}async function vA(t,e){const n=oe(t),r=n.Tu.get(e),s=n.Iu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),hu(n.remoteStore,r.targetId))}async function TA(t,e,n){const r=RA(t);try{const s=await function(o,c){const l=oe(o),h=Oe.now(),f=c.reduce((I,N)=>I.add(N.key),de());let p,g;return l.persistence.runTransaction("Locally write mutations","readwrite",I=>{let N=Nn(),P=de();return l.Ns.getEntries(I,f).next(V=>{N=V,N.forEach(($,K)=>{K.isValidDocument()||(P=P.add($))})}).next(()=>l.localDocuments.getOverlayedDocuments(I,N)).next(V=>{p=V;const $=[];for(const K of c){const Q=LI(K,p.get(K.key).overlayedDocument);Q!=null&&$.push(new Zr(K.key,Q,Sm(Q.value.mapValue),sn.exists(!0)))}return l.mutationQueue.addMutationBatch(I,h,$,c)}).next(V=>{g=V;const $=V.applyToLocalDocumentSet(p,P);return l.documentOverlayCache.saveOverlays(I,V.batchId,$)})}).then(()=>({batchId:g.batchId,changes:Mm(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,c,l){let h=o.Vu[o.currentUser.toKey()];h||(h=new Ve(fe)),h=h.insert(c,l),o.Vu[o.currentUser.toKey()]=h}(r,s.batchId,n),await uo(r,s.changes),await Ja(r.remoteStore)}catch(s){const i=gu(s,"Failed to persist write");n.reject(i)}}async function Tg(t,e){const n=oe(t);try{const r=await kw(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Au.get(i);o&&(Te(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.hu=!0:s.modifiedDocuments.size>0?Te(o.hu,14607):s.removedDocuments.size>0&&(Te(o.hu,42227),o.hu=!1))}),await uo(n,r,e)}catch(r){await zs(r)}}function id(t,e,n){const r=oe(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Tu.forEach((i,o)=>{const c=o.view.va(e);c.snapshot&&s.push(c.snapshot)}),function(o,c){const l=oe(o);l.onlineState=c;let h=!1;l.queries.forEach((f,p)=>{for(const g of p.Sa)g.va(c)&&(h=!0)}),h&&_u(l)}(r.eventManager,e),s.length&&r.Pu.H_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function IA(t,e,n){const r=oe(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Au.get(e),i=s&&s.key;if(i){let o=new Ve(J.comparator);o=o.insert(i,ut.newNoDocument(i,se.min()));const c=de().add(i),l=new Ka(se.min(),new Map,new Ve(fe),o,c);await Tg(r,l),r.du=r.du.remove(i),r.Au.delete(e),Eu(r)}else await Tl(r.localStore,e,!1).then(()=>Al(r,e,n)).catch(zs)}async function wA(t,e){const n=oe(t),r=e.batch.batchId;try{const s=await Dw(n.localStore,e);wg(n,r,null),Ig(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await uo(n,s)}catch(s){await zs(s)}}async function AA(t,e,n){const r=oe(t);try{const s=await function(o,c){const l=oe(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return l.mutationQueue.lookupMutationBatch(h,c).next(p=>(Te(p!==null,37113),f=p.keys(),l.mutationQueue.removeMutationBatch(h,p))).next(()=>l.mutationQueue.performConsistencyCheck(h)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(h,f,c)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>l.localDocuments.getDocuments(h,f))})}(r.localStore,e);wg(r,e,n),Ig(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await uo(r,s)}catch(s){await zs(s)}}function Ig(t,e){(t.mu.get(e)||[]).forEach(n=>{n.resolve()}),t.mu.delete(e)}function wg(t,e,n){const r=oe(t);let s=r.Vu[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Vu[r.currentUser.toKey()]=s}}function Al(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Iu.get(e))t.Tu.delete(r),n&&t.Pu.yu(r,n);t.Iu.delete(e),t.isPrimaryClient&&t.Ru.jr(e).forEach(r=>{t.Ru.containsKey(r)||Ag(t,r)})}function Ag(t,e){t.Eu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&(hu(t.remoteStore,n),t.du=t.du.remove(e),t.Au.delete(n),Eu(t))}function od(t,e,n){for(const r of n)r instanceof yg?(t.Ru.addReference(r.key,e),bA(t,r)):r instanceof Eg?(G(yu,"Document no longer in limbo: "+r.key),t.Ru.removeReference(r.key,e),t.Ru.containsKey(r.key)||Ag(t,r.key)):te(19791,{wu:r})}function bA(t,e){const n=e.key,r=n.path.canonicalString();t.du.get(n)||t.Eu.has(r)||(G(yu,"New document in limbo: "+n),t.Eu.add(r),Eu(t))}function Eu(t){for(;t.Eu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Eu.values().next().value;t.Eu.delete(e);const n=new J(Ce.fromString(e)),r=t.fu.next();t.Au.set(r,new pA(n)),t.du=t.du.insert(n,r),lg(t.remoteStore,new Zn(rn(ja(n.path)),r,"TargetPurposeLimboResolution",Ua.ce))}}async function uo(t,e,n){const r=oe(t),s=[],i=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach((c,l)=>{o.push(r.pu(l,e,n).then(h=>{var f;if((h||n)&&r.isPrimaryClient){const p=h?!h.fromCache:(f=n==null?void 0:n.targetChanges.get(l.targetId))==null?void 0:f.current;r.sharedClientState.updateQueryState(l.targetId,p?"current":"not-current")}if(h){s.push(h);const p=lu.As(l.targetId,h);i.push(p)}}))}),await Promise.all(o),r.Pu.H_(s),await async function(l,h){const f=oe(l);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>k.forEach(h,g=>k.forEach(g.Es,I=>f.persistence.referenceDelegate.addReference(p,g.targetId,I)).next(()=>k.forEach(g.ds,I=>f.persistence.referenceDelegate.removeReference(p,g.targetId,I)))))}catch(p){if(!Ws(p))throw p;G(uu,"Failed to update sequence numbers: "+p)}for(const p of h){const g=p.targetId;if(!p.fromCache){const I=f.Ms.get(g),N=I.snapshotVersion,P=I.withLastLimboFreeSnapshotVersion(N);f.Ms=f.Ms.insert(g,P)}}}(r.localStore,i))}async function SA(t,e){const n=oe(t);if(!n.currentUser.isEqual(e)){G(yu,"User change. New user:",e.toKey());const r=await ig(n.localStore,e);n.currentUser=e,function(i,o){i.mu.forEach(c=>{c.forEach(l=>{l.reject(new W(D.CANCELLED,o))})}),i.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await uo(n,r.Ls)}}function CA(t,e){const n=oe(t),r=n.Au.get(e);if(r&&r.hu)return de().add(r.key);{let s=de();const i=n.Iu.get(e);if(!i)return s;for(const o of i){const c=n.Tu.get(o);s=s.unionWith(c.view.nu)}return s}}function bg(t){const e=oe(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Tg.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=CA.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=IA.bind(null,e),e.Pu.H_=uA.bind(null,e.eventManager),e.Pu.yu=hA.bind(null,e.eventManager),e}function RA(t){const e=oe(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=wA.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=AA.bind(null,e),e}class pa{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Ga(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return Vw(this.persistence,new Pw,e.initialUser,this.serializer)}Cu(e){return new sg(cu.mi,this.serializer)}Du(e){return new Uw}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}pa.provider={build:()=>new pa};class PA extends pa{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){Te(this.persistence.referenceDelegate instanceof fa,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new pw(r,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?It.withCacheSize(this.cacheSizeBytes):It.DEFAULT;return new sg(r=>fa.mi(r,n),this.serializer)}}class bl{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>id(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=SA.bind(null,this.syncEngine),await aA(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new lA}()}createDatastore(e){const n=Ga(e.databaseInfo.databaseId),r=function(i){return new Hw(i)}(e.databaseInfo);return function(i,o,c,l){return new Gw(i,o,c,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,c){return new Jw(r,s,i,o,c)}(this.localStore,this.datastore,e.asyncQueue,n=>id(this.syncEngine,n,0),function(){return Zf.v()?new Zf:new Bw}())}createSyncEngine(e,n){return function(s,i,o,c,l,h,f){const p=new mA(s,i,o,c,l,h);return f&&(p.gu=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=oe(s);G(Hr,"RemoteStore shutting down."),i.Ea.add(5),await lo(i),i.Aa.shutdown(),i.Ra.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}bl.provider={build:()=>new bl};/**
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
 */class Sg{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):On("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */const dr="FirestoreClient";class OA{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=lt.UNAUTHENTICATED,this.clientId=Yl.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{G(dr,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(G(dr,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new sr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=gu(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function jc(t,e){t.asyncQueue.verifyOperationInProgress(),G(dr,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await ig(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function ad(t,e){t.asyncQueue.verifyOperationInProgress();const n=await NA(t);G(dr,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>td(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>td(e.remoteStore,s)),t._onlineComponents=e}async function NA(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){G(dr,"Using user provided OfflineComponentProvider");try{await jc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===D.FAILED_PRECONDITION||s.code===D.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;Vs("Error using user provided cache. Falling back to memory cache: "+n),await jc(t,new pa)}}else G(dr,"Using default OfflineComponentProvider"),await jc(t,new PA(void 0));return t._offlineComponents}async function Cg(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(G(dr,"Using user provided OnlineComponentProvider"),await ad(t,t._uninitializedComponentsProvider._online)):(G(dr,"Using default OnlineComponentProvider"),await ad(t,new bl))),t._onlineComponents}function VA(t){return Cg(t).then(e=>e.syncEngine)}async function Sl(t){const e=await Cg(t),n=e.eventManager;return n.onListen=gA.bind(null,e.syncEngine),n.onUnlisten=EA.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=_A.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=vA.bind(null,e.syncEngine),n}function DA(t,e,n={}){const r=new sr;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,c,l,h){const f=new Sg({next:g=>{f.Nu(),o.enqueueAndForget(()=>gg(i,p));const I=g.docs.has(c);!I&&g.fromCache?h.reject(new W(D.UNAVAILABLE,"Failed to get document because the client is offline.")):I&&g.fromCache&&l&&l.source==="server"?h.reject(new W(D.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(g)},error:g=>h.reject(g)}),p=new _g(ja(c.path),f,{includeMetadataChanges:!0,qa:!0});return mg(i,p)}(await Sl(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function Rg(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const cd=new Map;/**
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
 */const Pg="firestore.googleapis.com",ld=!0;class ud{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new W(D.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Pg,this.ssl=ld}else this.host=e.host,this.ssl=e.ssl??ld;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=rg;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<fw)throw new W(D.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}QT("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Rg(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new W(D.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new W(D.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new W(D.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ya{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ud({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new W(D.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new W(D.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ud(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new UT;switch(r.type){case"firstParty":return new qT(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new W(D.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=cd.get(n);r&&(G("ComponentProvider","Removing Datastore"),cd.delete(n),r.terminate())}(this),Promise.resolve()}}function kA(t,e,n,r={}){var h;t=Rn(t,Ya);const s=js(e),i=t._getSettings(),o={...i,emulatorOptions:t._getEmulatorOptions()},c=`${e}:${n}`;s&&(Zp(`https://${c}`),em("Firestore",!0)),i.host!==Pg&&i.host!==c&&Vs("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const l={...i,host:c,ssl:s,emulatorOptions:r};if(!$r(l,o)&&(t._setSettings(l),r.mockUserToken)){let f,p;if(typeof r.mockUserToken=="string")f=r.mockUserToken,p=lt.MOCK_USER;else{f=uv(r.mockUserToken,(h=t._app)==null?void 0:h.options.projectId);const g=r.mockUserToken.sub||r.mockUserToken.user_id;if(!g)throw new W(D.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new lt(g)}t._authCredentials=new BT(new pm(f,p))}}/**
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
 */class _r{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new _r(this.firestore,e,this._query)}}class xe{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ir(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new xe(this.firestore,e,this._key)}toJSON(){return{type:xe._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(oo(n,xe._jsonSchema))return new xe(e,r||null,new J(Ce.fromString(n.referencePath)))}}xe._jsonSchemaVersion="firestore/documentReference/1.0",xe._jsonSchema={type:Ue("string",xe._jsonSchemaVersion),referencePath:Ue("string")};class ir extends _r{constructor(e,n,r){super(e,n,ja(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new xe(this.firestore,null,new J(e))}withConverter(e){return new ir(this.firestore,e,this._path)}}function Og(t,e,...n){if(t=nt(t),mm("collection","path",e),t instanceof Ya){const r=Ce.fromString(e,...n);return wf(r),new ir(t,null,r)}{if(!(t instanceof xe||t instanceof ir))throw new W(D.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ce.fromString(e,...n));return wf(r),new ir(t.firestore,null,r)}}function ts(t,e,...n){if(t=nt(t),arguments.length===1&&(e=Yl.newId()),mm("doc","path",e),t instanceof Ya){const r=Ce.fromString(e,...n);return If(r),new xe(t,null,new J(r))}{if(!(t instanceof xe||t instanceof ir))throw new W(D.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ce.fromString(e,...n));return If(r),new xe(t.firestore,t instanceof ir?t.converter:null,new J(r))}}/**
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
 */const hd="AsyncQueue";class fd{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new ag(this,"async_queue_retry"),this._c=()=>{const r=$c();r&&G(hd,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=$c();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=$c();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const n=new sr;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xu.push(e),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!Ws(e))throw e;G(hd,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const n=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,On("INTERNAL UNHANDLED ERROR: ",dd(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const s=mu.createAndSchedule(this,e,n,r,i=>this.hc(i));return this.tc.push(s),s}uc(){this.nc&&te(47125,{Pc:dd(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()})}dc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function dd(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
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
 */function pd(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}class Fs extends Ya{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new fd,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new fd(e),this._firestoreClient=void 0,await e}}}function xA(t,e){const n=typeof t=="object"?t:sm(),r=typeof t=="string"?t:oa,s=Ql(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=cv("firestore");i&&kA(s,...i)}return s}function vu(t){if(t._terminated)throw new W(D.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||LA(t),t._firestoreClient}function LA(t){var r,s,i;const e=t._freezeSettings(),n=function(c,l,h,f){return new oI(c,l,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,Rg(f.experimentalLongPollingOptions),f.useFetchStreams,f.isUsingEmulator)}(t._databaseId,((r=t._app)==null?void 0:r.options.appId)||"",t._persistenceKey,e);t._componentsProvider||(s=e.localCache)!=null&&s._offlineComponentProvider&&((i=e.localCache)!=null&&i._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new OA(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(c){const l=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(l),_online:l}}(t._componentsProvider))}/**
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
 */class Dt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Dt(rt.fromBase64String(e))}catch(n){throw new W(D.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Dt(rt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Dt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(oo(e,Dt._jsonSchema))return Dt.fromBase64String(e.bytes)}}Dt._jsonSchemaVersion="firestore/bytes/1.0",Dt._jsonSchema={type:Ue("string",Dt._jsonSchemaVersion),bytes:Ue("string")};/**
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
 */class Tu{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new W(D.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ye(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Iu{constructor(e){this._methodName=e}}/**
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
 */class an{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new W(D.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new W(D.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return fe(this._lat,e._lat)||fe(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:an._jsonSchemaVersion}}static fromJSON(e){if(oo(e,an._jsonSchema))return new an(e.latitude,e.longitude)}}an._jsonSchemaVersion="firestore/geoPoint/1.0",an._jsonSchema={type:Ue("string",an._jsonSchemaVersion),latitude:Ue("number"),longitude:Ue("number")};/**
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
 */class cn{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:cn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(oo(e,cn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new cn(e.vectorValues);throw new W(D.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}cn._jsonSchemaVersion="firestore/vectorValue/1.0",cn._jsonSchema={type:Ue("string",cn._jsonSchemaVersion),vectorValues:Ue("object")};/**
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
 */const MA=/^__.*__$/;class FA{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Zr(e,this.data,this.fieldMask,n,this.fieldTransforms):new ao(e,this.data,n,this.fieldTransforms)}}function Ng(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw te(40011,{Ac:t})}}class wu{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Rc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new wu({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){var s;const n=(s=this.path)==null?void 0:s.child(e),r=this.Vc({path:n,fc:!1});return r.gc(e),r}yc(e){var s;const n=(s=this.path)==null?void 0:s.child(e),r=this.Vc({path:n,fc:!1});return r.Rc(),r}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return ma(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(Ng(this.Ac)&&MA.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class UA{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Ga(e)}Cc(e,n,r,s=!1){return new wu({Ac:e,methodName:n,Dc:r,path:Ye.emptyPath(),fc:!1,bc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Au(t){const e=t._freezeSettings(),n=Ga(t._databaseId);return new UA(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Vg(t,e,n,r,s,i={}){const o=t.Cc(i.merge||i.mergeFields?2:0,e,n,s);xg("Data must be an object, but it was:",o,r);const c=Dg(r,o);let l,h;if(i.merge)l=new Bt(o.fieldMask),h=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const p of i.mergeFields){const g=$A(e,p,n);if(!o.contains(g))throw new W(D.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);qA(f,g)||f.push(g)}l=new Bt(f),h=o.fieldTransforms.filter(p=>l.covers(p.field))}else l=null,h=o.fieldTransforms;return new FA(new Vt(c),l,h)}class bu extends Iu{_toFieldTransform(e){return new VI(e.path,new Wi)}isEqual(e){return e instanceof bu}}function BA(t,e,n,r=!1){return Su(n,t.Cc(r?4:3,e))}function Su(t,e){if(kg(t=nt(t)))return xg("Unsupported field value:",e,t),Dg(t,e);if(t instanceof Iu)return function(r,s){if(!Ng(s.Ac))throw s.Sc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Sc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const c of r){let l=Su(c,s.wc(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=nt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return PI(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Oe.fromDate(r);return{timestampValue:ha(s.serializer,i)}}if(r instanceof Oe){const i=new Oe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ha(s.serializer,i)}}if(r instanceof an)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Dt)return{bytesValue:Jm(s.serializer,r._byteString)};if(r instanceof xe){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Sc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:ou(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof cn)return function(o,c){return{mapValue:{fields:{[Am]:{stringValue:bm},[aa]:{arrayValue:{values:o.toArray().map(h=>{if(typeof h!="number")throw c.Sc("VectorValues must only contain numeric values.");return ru(c.serializer,h)})}}}}}}(r,s);throw s.Sc(`Unsupported field value: ${Fa(r)}`)}(t,e)}function Dg(t,e){const n={};return ym(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Yr(t,(r,s)=>{const i=Su(s,e.mc(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function kg(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Oe||t instanceof an||t instanceof Dt||t instanceof xe||t instanceof Iu||t instanceof cn)}function xg(t,e,n){if(!kg(n)||!gm(n)){const r=Fa(n);throw r==="an object"?e.Sc(t+" a custom object"):e.Sc(t+" "+r)}}function $A(t,e,n){if((e=nt(e))instanceof Tu)return e._internalPath;if(typeof e=="string")return Lg(t,e);throw ma("Field path arguments must be of type string or ",t,!1,void 0,n)}const jA=new RegExp("[~\\*/\\[\\]]");function Lg(t,e,n){if(e.search(jA)>=0)throw ma(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Tu(...e.split("."))._internalPath}catch{throw ma(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function ma(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let c=`Function ${e}() called with invalid data`;n&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new W(D.INVALID_ARGUMENT,c+t+l)}function qA(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class Mg{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new xe(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new HA(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Xa("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class HA extends Mg{data(){return super.data()}}function Xa(t,e){return typeof e=="string"?Lg(t,e):e instanceof Tu?e._internalPath:e._delegate._internalPath}/**
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
 */function zA(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new W(D.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Cu{}class Ru extends Cu{}function md(t,e,...n){let r=[];e instanceof Cu&&r.push(e),r=r.concat(n),function(i){const o=i.filter(l=>l instanceof Pu).length,c=i.filter(l=>l instanceof Za).length;if(o>1||o>0&&c>0)throw new W(D.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class Za extends Ru{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Za(e,n,r)}_apply(e){const n=this._parse(e);return Fg(e._query,n),new _r(e.firestore,e.converter,gl(e._query,n))}_parse(e){const n=Au(e.firestore);return function(i,o,c,l,h,f,p){let g;if(h.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new W(D.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){Ed(p,f);const N=[];for(const P of p)N.push(yd(l,i,P));g={arrayValue:{values:N}}}else g=yd(l,i,p)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||Ed(p,f),g=BA(c,o,p,f==="in"||f==="not-in");return Fe.create(h,f,g)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function WA(t,e,n){const r=e,s=Xa("where",t);return Za._create(s,r,n)}class Pu extends Cu{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Pu(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:zt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const c=i.getFlattenedFilters();for(const l of c)Fg(o,l),o=gl(o,l)}(e._query,n),new _r(e.firestore,e.converter,gl(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Ou extends Ru{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Ou(e,n)}_apply(e){const n=function(s,i,o){if(s.startAt!==null)throw new W(D.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new W(D.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new zi(i,o)}(e._query,this._field,this._direction);return new _r(e.firestore,e.converter,function(s,i){const o=s.explicitOrderBy.concat([i]);return new Ks(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function gd(t,e="asc"){const n=e,r=Xa("orderBy",t);return Ou._create(r,n)}class Nu extends Ru{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new Nu(e,n,r)}_apply(e){return new _r(e.firestore,e.converter,la(e._query,this._limit,this._limitType))}}function _d(t){return Nu._create("limit",t,"F")}function yd(t,e,n){if(typeof(n=nt(n))=="string"){if(n==="")throw new W(D.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Dm(e)&&n.indexOf("/")!==-1)throw new W(D.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Ce.fromString(n));if(!J.isDocumentKey(r))throw new W(D.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Nf(t,new J(r))}if(n instanceof xe)return Nf(t,n._key);throw new W(D.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Fa(n)}.`)}function Ed(t,e){if(!Array.isArray(t)||t.length===0)throw new W(D.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Fg(t,e){const n=function(s,i){for(const o of s)for(const c of o.getFlattenedFilters())if(i.indexOf(c.op)>=0)return c.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new W(D.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new W(D.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class KA{convertValue(e,n="none"){switch(hr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ke(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ur(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw te(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Yr(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var r,s,i;const n=(i=(s=(r=e.fields)==null?void 0:r[aa].arrayValue)==null?void 0:s.values)==null?void 0:i.map(o=>ke(o.doubleValue));return new cn(n)}convertGeoPoint(e){return new an(ke(e.latitude),ke(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=$a(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(ji(e));default:return null}}convertTimestamp(e){const n=lr(e);return new Oe(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ce.fromString(e);Te(ng(r),9688,{name:e});const s=new qi(r.get(1),r.get(3)),i=new J(r.popFirst(5));return s.isEqual(n)||On(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function Ug(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class wi{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Fr extends Mg{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Go(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Xa("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new W(D.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=Fr._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Fr._jsonSchemaVersion="firestore/documentSnapshot/1.0",Fr._jsonSchema={type:Ue("string",Fr._jsonSchemaVersion),bundleSource:Ue("string","DocumentSnapshot"),bundleName:Ue("string"),bundle:Ue("string")};class Go extends Fr{data(e={}){return super.data(e)}}class vs{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new wi(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Go(this._firestore,this._userDataWriter,r.key,r,new wi(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new W(D.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(c=>{const l=new Go(s._firestore,s._userDataWriter,c.doc.key,c.doc,new wi(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>i||c.type!==3).map(c=>{const l=new Go(s._firestore,s._userDataWriter,c.doc.key,c.doc,new wi(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,f=-1;return c.type!==0&&(h=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),f=o.indexOf(c.doc.key)),{type:GA(c.type),doc:l,oldIndex:h,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new W(D.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=vs._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Yl.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(n.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function GA(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return te(61501,{type:t})}}/**
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
 */function ga(t){t=Rn(t,xe);const e=Rn(t.firestore,Fs);return DA(vu(e),t._key).then(n=>qg(e,t,n))}vs._jsonSchemaVersion="firestore/querySnapshot/1.0",vs._jsonSchema={type:Ue("string",vs._jsonSchemaVersion),bundleSource:Ue("string","QuerySnapshot"),bundleName:Ue("string"),bundle:Ue("string")};class Bg extends KA{constructor(e){super(),this.firestore=e}convertBytes(e){return new Dt(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new xe(this.firestore,null,n)}}function or(t,e,n){t=Rn(t,xe);const r=Rn(t.firestore,Fs),s=Ug(t.converter,e,n);return jg(r,[Vg(Au(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,sn.none())])}function QA(t,e){const n=Rn(t.firestore,Fs),r=ts(t),s=Ug(t.converter,e);return jg(n,[Vg(Au(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,sn.exists(!1))]).then(()=>r)}function $g(t,...e){var l,h,f;t=nt(t);let n={includeMetadataChanges:!1,source:"default"},r=0;typeof e[r]!="object"||pd(e[r])||(n=e[r++]);const s={includeMetadataChanges:n.includeMetadataChanges,source:n.source};if(pd(e[r])){const p=e[r];e[r]=(l=p.next)==null?void 0:l.bind(p),e[r+1]=(h=p.error)==null?void 0:h.bind(p),e[r+2]=(f=p.complete)==null?void 0:f.bind(p)}let i,o,c;if(t instanceof xe)o=Rn(t.firestore,Fs),c=ja(t._key.path),i={next:p=>{e[r]&&e[r](qg(o,t,p))},error:e[r+1],complete:e[r+2]};else{const p=Rn(t,_r);o=Rn(p.firestore,Fs),c=p._query;const g=new Bg(o);i={next:I=>{e[r]&&e[r](new vs(o,g,p,I))},error:e[r+1],complete:e[r+2]},zA(t._query)}return function(g,I,N,P){const V=new Sg(P),$=new _g(I,V,N);return g.asyncQueue.enqueueAndForget(async()=>mg(await Sl(g),$)),()=>{V.Nu(),g.asyncQueue.enqueueAndForget(async()=>gg(await Sl(g),$))}}(vu(o),c,s,i)}function jg(t,e){return function(r,s){const i=new sr;return r.asyncQueue.enqueueAndForget(async()=>TA(await VA(r),s,i)),i.promise}(vu(t),e)}function qg(t,e,n){const r=n.docs.get(e._key),s=new Bg(t);return new Fr(t,s,e._key,r,new wi(n.hasPendingWrites,n.fromCache),e.converter)}function Hg(){return new bu("serverTimestamp")}(function(e,n=!0){(function(s){Hs=s})(qs),Ns(new jr("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),c=new Fs(new $T(r.getProvider("auth-internal")),new HT(o,r.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new W(D.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new qi(h.options.projectId,f)}(o,s),o);return i={useFetchStreams:n,...i},c._setSettings(i),c},"PUBLIC").setMultipleInstances(!0)),nr(yf,Ef,e),nr(yf,Ef,"esm2020")})();function zg(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Wg=zg,Kg=new so("auth","Firebase",zg());/**
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
 */const _a=new Kl("@firebase/auth");function JA(t,...e){_a.logLevel<=he.WARN&&_a.warn(`Auth (${qs}): ${t}`,...e)}function Qo(t,...e){_a.logLevel<=he.ERROR&&_a.error(`Auth (${qs}): ${t}`,...e)}/**
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
 */function Wt(t,...e){throw Vu(t,...e)}function ln(t,...e){return Vu(t,...e)}function Gg(t,e,n){const r={...Wg(),[e]:n};return new so("auth","Firebase",r).create(e,{appName:t.name})}function un(t){return Gg(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Vu(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Kg.create(t,...e)}function ee(t,e,...n){if(!t)throw Vu(e,...n)}function Sn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Qo(e),new Error(e)}function Vn(t,e){t||Sn(e)}/**
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
 */function Cl(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function YA(){return vd()==="http:"||vd()==="https:"}function vd(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
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
 */function XA(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(YA()||gv()||"connection"in navigator)?navigator.onLine:!0}function ZA(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class ho{constructor(e,n){this.shortDelay=e,this.longDelay=n,Vn(n>e,"Short delay should be less than long delay!"),this.isMobile=dv()||_v()}get(){return XA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Du(t,e){Vn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Qg{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Sn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Sn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Sn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const eb={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const tb=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],nb=new ho(3e4,6e4);function yr(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function Fn(t,e,n,r,s={}){return Jg(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const c=io({key:t.config.apiKey,...o}).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const h={method:e,headers:l,...i};return mv()||(h.referrerPolicy="no-referrer"),t.emulatorConfig&&js(t.emulatorConfig.host)&&(h.credentials="include"),Qg.fetch()(await Yg(t,t.config.apiHost,n,c),h)})}async function Jg(t,e,n){t._canInitEmulator=!1;const r={...eb,...e};try{const s=new sb(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw xo(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[l,h]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw xo(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw xo(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw xo(t,"user-disabled",o);const f=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Gg(t,f,h);Wt(t,f)}}catch(s){if(s instanceof Mn)throw s;Wt(t,"network-request-failed",{message:String(s)})}}async function fo(t,e,n,r,s={}){const i=await Fn(t,e,n,r,s);return"mfaPendingCredential"in i&&Wt(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function Yg(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?Du(t.config,s):`${t.config.apiScheme}://${s}`;return tb.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function rb(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class sb{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(ln(this.auth,"network-request-failed")),nb.get())})}}function xo(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=ln(t,e,r);return s.customData._tokenResponse=n,s}function Td(t){return t!==void 0&&t.enterprise!==void 0}class ib{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return rb(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function ob(t,e){return Fn(t,"GET","/v2/recaptchaConfig",yr(t,e))}/**
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
 */async function ab(t,e){return Fn(t,"POST","/v1/accounts:delete",e)}async function ya(t,e){return Fn(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ni(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Xg(t,e=!1){const n=nt(t),r=await n.getIdToken(e),s=ku(r);ee(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Ni(qc(s.auth_time)),issuedAtTime:Ni(qc(s.iat)),expirationTime:Ni(qc(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function qc(t){return Number(t)*1e3}function ku(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Qo("JWT malformed, contained fewer than 3 sections"),null;try{const s=Qp(n);return s?JSON.parse(s):(Qo("Failed to decode base64 JWT payload"),null)}catch(s){return Qo("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Id(t){const e=ku(t);return ee(e,"internal-error"),ee(typeof e.exp<"u","internal-error"),ee(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Us(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Mn&&cb(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function cb({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class lb{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Rl{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ni(this.lastLoginAt),this.creationTime=Ni(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ea(t){var p;const e=t.auth,n=await t.getIdToken(),r=await Us(t,ya(e,{idToken:n}));ee(r==null?void 0:r.users.length,e,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const i=(p=s.providerUserInfo)!=null&&p.length?e_(s.providerUserInfo):[],o=ub(t.providerData,i),c=t.isAnonymous,l=!(t.email&&s.passwordHash)&&!(o!=null&&o.length),h=c?l:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new Rl(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(t,f)}async function Zg(t){const e=nt(t);await Ea(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function ub(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function e_(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function hb(t,e){const n=await Jg(t,{},async()=>{const r=io({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await Yg(t,s,"/v1/token",`key=${i}`),c=await t._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:c,body:r};return t.emulatorConfig&&js(t.emulatorConfig.host)&&(l.credentials="include"),Qg.fetch()(o,l)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function fb(t,e){return Fn(t,"POST","/v2/accounts:revokeToken",yr(t,e))}/**
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
 */class Ts{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ee(e.idToken,"internal-error"),ee(typeof e.idToken<"u","internal-error"),ee(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Id(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ee(e.length!==0,"internal-error");const n=Id(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ee(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await hb(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Ts;return r&&(ee(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(ee(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(ee(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ts,this.toJSON())}_performRefresh(){return Sn("not implemented")}}/**
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
 */function Gn(t,e){ee(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class $t{constructor({uid:e,auth:n,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new lb(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Rl(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Us(this,this.stsTokenManager.getToken(this.auth,e));return ee(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Xg(this,e)}reload(){return Zg(this)}_assign(e){this!==e&&(ee(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new $t({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){ee(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ea(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Rt(this.auth.app))return Promise.reject(un(this.auth));const e=await this.getIdToken();return await Us(this,ab(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,s=n.email??void 0,i=n.phoneNumber??void 0,o=n.photoURL??void 0,c=n.tenantId??void 0,l=n._redirectEventId??void 0,h=n.createdAt??void 0,f=n.lastLoginAt??void 0,{uid:p,emailVerified:g,isAnonymous:I,providerData:N,stsTokenManager:P}=n;ee(p&&P,e,"internal-error");const V=Ts.fromJSON(this.name,P);ee(typeof p=="string",e,"internal-error"),Gn(r,e.name),Gn(s,e.name),ee(typeof g=="boolean",e,"internal-error"),ee(typeof I=="boolean",e,"internal-error"),Gn(i,e.name),Gn(o,e.name),Gn(c,e.name),Gn(l,e.name),Gn(h,e.name),Gn(f,e.name);const $=new $t({uid:p,auth:e,email:s,emailVerified:g,displayName:r,isAnonymous:I,photoURL:o,phoneNumber:i,tenantId:c,stsTokenManager:V,createdAt:h,lastLoginAt:f});return N&&Array.isArray(N)&&($.providerData=N.map(K=>({...K}))),l&&($._redirectEventId=l),$}static async _fromIdTokenResponse(e,n,r=!1){const s=new Ts;s.updateFromServerResponse(n);const i=new $t({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Ea(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];ee(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?e_(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new Ts;c.updateFromIdToken(r);const l=new $t({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:o}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Rl(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,h),l}}/**
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
 */const wd=new Map;function Cn(t){Vn(t instanceof Function,"Expected a class definition");let e=wd.get(t);return e?(Vn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,wd.set(t,e),e)}/**
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
 */class t_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}t_.type="NONE";const Pl=t_;/**
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
 */function Jo(t,e,n){return`firebase:${t}:${e}:${n}`}class Is{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Jo(this.userKey,s.apiKey,i),this.fullPersistenceKey=Jo("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await ya(this.auth,{idToken:e}).catch(()=>{});return n?$t._fromGetAccountInfoResponse(this.auth,n,e):null}return $t._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Is(Cn(Pl),e,r);const s=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||Cn(Pl);const o=Jo(r,e.config.apiKey,e.name);let c=null;for(const h of n)try{const f=await h._get(o);if(f){let p;if(typeof f=="string"){const g=await ya(e,{idToken:f}).catch(()=>{});if(!g)break;p=await $t._fromGetAccountInfoResponse(e,g,f)}else p=$t._fromJSON(e,f);h!==i&&(c=p),i=h;break}}catch{}const l=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new Is(i,e,r):(i=l[0],c&&await i._set(o,c.toJSON()),await Promise.all(n.map(async h=>{if(h!==i)try{await h._remove(o)}catch{}})),new Is(i,e,r))}}/**
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
 */function Ad(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(i_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(n_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(a_(e))return"Blackberry";if(c_(e))return"Webos";if(r_(e))return"Safari";if((e.includes("chrome/")||s_(e))&&!e.includes("edge/"))return"Chrome";if(o_(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function n_(t=pt()){return/firefox\//i.test(t)}function r_(t=pt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function s_(t=pt()){return/crios\//i.test(t)}function i_(t=pt()){return/iemobile/i.test(t)}function o_(t=pt()){return/android/i.test(t)}function a_(t=pt()){return/blackberry/i.test(t)}function c_(t=pt()){return/webos/i.test(t)}function xu(t=pt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function db(t=pt()){var e;return xu(t)&&!!((e=window.navigator)!=null&&e.standalone)}function pb(){return yv()&&document.documentMode===10}function l_(t=pt()){return xu(t)||o_(t)||c_(t)||a_(t)||/windows phone/i.test(t)||i_(t)}/**
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
 */function u_(t,e=[]){let n;switch(t){case"Browser":n=Ad(pt());break;case"Worker":n=`${Ad(pt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${qs}/${r}`}/**
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
 */class mb{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,c)=>{try{const l=e(i);o(l)}catch(l){c(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function gb(t,e={}){return Fn(t,"GET","/v2/passwordPolicy",yr(t,e))}/**
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
 */const _b=6;class yb{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??_b,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class Eb{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new bd(this),this.idTokenSubscription=new bd(this),this.beforeStateQueue=new mb(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Kg,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Cn(n)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await Is.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await ya(this,{idToken:e}),r=await $t._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(Rt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(i=this.redirectUser)==null?void 0:i._redirectEventId,c=r==null?void 0:r._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===c)&&(l!=null&&l.user)&&(r=l.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return ee(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ea(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=ZA()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Rt(this.app))return Promise.reject(un(this));const n=e?nt(e):null;return n&&ee(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ee(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Rt(this.app)?Promise.reject(un(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Rt(this.app)?Promise.reject(un(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Cn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await gb(this),n=new yb(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new so("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await fb(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Cn(e)||this._popupRedirectResolver;ee(n,this,"argument-error"),this.redirectPersistenceManager=await Is.create(this,[Cn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(ee(c,this,"internal-error"),c.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ee(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=u_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(Rt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&JA(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Er(t){return nt(t)}class bd{constructor(e){this.auth=e,this.observer=null,this.addObserver=Sv(n=>this.observer=n)}get next(){return ee(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let ec={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function vb(t){ec=t}function h_(t){return ec.loadJS(t)}function Tb(){return ec.recaptchaEnterpriseScript}function Ib(){return ec.gapiScript}function wb(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class Ab{constructor(){this.enterprise=new bb}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class bb{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const Sb="recaptcha-enterprise",f_="NO_RECAPTCHA";class Cb{constructor(e){this.type=Sb,this.auth=Er(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,c)=>{ob(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const h=new ib(l);return i.tenantId==null?i._agentRecaptchaConfig=h:i._tenantRecaptchaConfigs[i.tenantId]=h,o(h.siteKey)}}).catch(l=>{c(l)})})}function s(i,o,c){const l=window.grecaptcha;Td(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(h=>{o(h)}).catch(()=>{o(f_)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Ab().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(c=>{if(!n&&Td(window.grecaptcha))s(c,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=Tb();l.length!==0&&(l+=c),h_(l).then(()=>{s(c,i,o)}).catch(h=>{o(h)})}}).catch(c=>{o(c)})})}}async function Sd(t,e,n,r=!1,s=!1){const i=new Cb(t);let o;if(s)o=f_;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const c={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){const l=c.phoneEnrollmentInfo.phoneNumber,h=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:h,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){const l=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return r?Object.assign(c,{captchaResp:o}):Object.assign(c,{captchaResponse:o}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function Ol(t,e,n,r,s){var i;if((i=t._getRecaptchaConfig())!=null&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Sd(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const c=await Sd(t,e,n,n==="getOobCode");return r(t,c)}else return Promise.reject(o)})}/**
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
 */function d_(t,e){const n=Ql(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if($r(i,e??{}))return s;Wt(s,"already-initialized")}return n.initialize({options:e})}function Rb(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Cn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function p_(t,e,n){const r=Er(t);ee(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=m_(e),{host:o,port:c}=Pb(e),l=c===null?"":`:${c}`,h={url:`${i}//${o}${l}/`},f=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){ee(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),ee($r(h,r.config.emulator)&&$r(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=h,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,js(o)?(Zp(`${i}//${o}${l}`),em("Auth",!0)):Ob()}function m_(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Pb(t){const e=m_(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Cd(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Cd(o)}}}function Cd(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Ob(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class tc{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Sn("not implemented")}_getIdTokenResponse(e){return Sn("not implemented")}_linkToIdToken(e,n){return Sn("not implemented")}_getReauthenticationResolver(e){return Sn("not implemented")}}async function Nb(t,e){return Fn(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function Vb(t,e){return fo(t,"POST","/v1/accounts:signInWithPassword",yr(t,e))}/**
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
 */async function Db(t,e){return fo(t,"POST","/v1/accounts:signInWithEmailLink",yr(t,e))}async function kb(t,e){return fo(t,"POST","/v1/accounts:signInWithEmailLink",yr(t,e))}/**
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
 */class Bs extends tc{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Bs(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Bs(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ol(e,n,"signInWithPassword",Vb);case"emailLink":return Db(e,{email:this._email,oobCode:this._password});default:Wt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ol(e,r,"signUpPassword",Nb);case"emailLink":return kb(e,{idToken:n,email:this._email,oobCode:this._password});default:Wt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function ws(t,e){return fo(t,"POST","/v1/accounts:signInWithIdp",yr(t,e))}/**
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
 */const xb="http://localhost";class pr extends tc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new pr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Wt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=n;if(!r||!s)return null;const o=new pr(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ws(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ws(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ws(e,n)}buildRequest(){const e={requestUri:xb,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=io(n)}return e}}/**
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
 */function Lb(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Mb(t){const e=yi(Ei(t)).link,n=e?yi(Ei(e)).deep_link_id:null,r=yi(Ei(t)).deep_link_id;return(r?yi(Ei(r)).link:null)||r||n||e||t}class nc{constructor(e){const n=yi(Ei(e)),r=n.apiKey??null,s=n.oobCode??null,i=Lb(n.mode??null);ee(r&&s&&i,"argument-error"),this.apiKey=r,this.operation=i,this.code=s,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=Mb(e);try{return new nc(n)}catch{return null}}}/**
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
 */class ns{constructor(){this.providerId=ns.PROVIDER_ID}static credential(e,n){return Bs._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=nc.parseLink(n);return ee(r,"argument-error"),Bs._fromEmailAndCode(e,r.code,r.tenantId)}}ns.PROVIDER_ID="password";ns.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ns.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class g_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class po extends g_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class vn extends po{constructor(){super("facebook.com")}static credential(e){return pr._fromParams({providerId:vn.PROVIDER_ID,signInMethod:vn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return vn.credentialFromTaggedObject(e)}static credentialFromError(e){return vn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return vn.credential(e.oauthAccessToken)}catch{return null}}}vn.FACEBOOK_SIGN_IN_METHOD="facebook.com";vn.PROVIDER_ID="facebook.com";/**
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
 */class Tn extends po{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return pr._fromParams({providerId:Tn.PROVIDER_ID,signInMethod:Tn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Tn.credentialFromTaggedObject(e)}static credentialFromError(e){return Tn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Tn.credential(n,r)}catch{return null}}}Tn.GOOGLE_SIGN_IN_METHOD="google.com";Tn.PROVIDER_ID="google.com";/**
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
 */class In extends po{constructor(){super("github.com")}static credential(e){return pr._fromParams({providerId:In.PROVIDER_ID,signInMethod:In.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return In.credentialFromTaggedObject(e)}static credentialFromError(e){return In.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return In.credential(e.oauthAccessToken)}catch{return null}}}In.GITHUB_SIGN_IN_METHOD="github.com";In.PROVIDER_ID="github.com";/**
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
 */class wn extends po{constructor(){super("twitter.com")}static credential(e,n){return pr._fromParams({providerId:wn.PROVIDER_ID,signInMethod:wn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return wn.credentialFromTaggedObject(e)}static credentialFromError(e){return wn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return wn.credential(n,r)}catch{return null}}}wn.TWITTER_SIGN_IN_METHOD="twitter.com";wn.PROVIDER_ID="twitter.com";/**
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
 */async function __(t,e){return fo(t,"POST","/v1/accounts:signUp",yr(t,e))}/**
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
 */class Dn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await $t._fromIdTokenResponse(e,r,s),o=Rd(r);return new Dn({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Rd(r);return new Dn({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Rd(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */async function y_(t){var s;if(Rt(t.app))return Promise.reject(un(t));const e=Er(t);if(await e._initializationPromise,(s=e.currentUser)!=null&&s.isAnonymous)return new Dn({user:e.currentUser,providerId:null,operationType:"signIn"});const n=await __(e,{returnSecureToken:!0}),r=await Dn._fromIdTokenResponse(e,"signIn",n,!0);return await e._updateCurrentUser(r.user),r}/**
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
 */class va extends Mn{constructor(e,n,r,s){super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,va.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new va(e,n,r,s)}}function E_(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?va._fromErrorAndOperation(t,i,e,r):i})}async function Fb(t,e,n=!1){const r=await Us(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Dn._forOperation(t,"link",r)}/**
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
 */async function Ub(t,e,n=!1){const{auth:r}=t;if(Rt(r.app))return Promise.reject(un(r));const s="reauthenticate";try{const i=await Us(t,E_(r,s,e,t),n);ee(i.idToken,r,"internal-error");const o=ku(i.idToken);ee(o,r,"internal-error");const{sub:c}=o;return ee(t.uid===c,r,"user-mismatch"),Dn._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Wt(r,"user-mismatch"),i}}/**
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
 */async function v_(t,e,n=!1){if(Rt(t.app))return Promise.reject(un(t));const r="signIn",s=await E_(t,r,e),i=await Dn._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function T_(t,e){return v_(Er(t),e)}/**
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
 */async function I_(t){const e=Er(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function w_(t,e,n){if(Rt(t.app))return Promise.reject(un(t));const r=Er(t),o=await Ol(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",__).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&I_(t),l}),c=await Dn._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(c.user),c}function A_(t,e,n){return Rt(t.app)?Promise.reject(un(t)):T_(nt(t),ns.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&I_(t),r})}/**
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
 */async function Bb(t,e){return Fn(t,"POST","/v1/accounts:update",e)}/**
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
 */async function b_(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=nt(t),i={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Us(r,Bb(r.auth,i));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const c=r.providerData.find(({providerId:l})=>l==="password");c&&(c.displayName=r.displayName,c.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function S_(t,e,n,r){return nt(t).onIdTokenChanged(e,n,r)}function C_(t,e,n){return nt(t).beforeAuthStateChanged(e,n)}function R_(t,e,n,r){return nt(t).onAuthStateChanged(e,n,r)}function P_(t){return nt(t).signOut()}const Ta="__sak";/**
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
 */class O_{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ta,"1"),this.storage.removeItem(Ta),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const $b=1e3,jb=10;class N_ extends O_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=l_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,c,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);pb()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,jb):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},$b)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}N_.type="LOCAL";const V_=N_;/**
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
 */class D_ extends O_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}D_.type="SESSION";const Lu=D_;/**
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
 */function qb(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class rc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new rc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(o).map(async h=>h(n.origin,i)),l=await qb(c);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}rc.receivers=[];/**
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
 */function Mu(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Hb{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((c,l)=>{const h=Mu("",20);s.port1.start();const f=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const g=p;if(g.data.eventId===h)switch(g.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(g.data.response);break;default:clearTimeout(f),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function hn(){return window}function zb(t){hn().location.href=t}/**
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
 */function k_(){return typeof hn().WorkerGlobalScope<"u"&&typeof hn().importScripts=="function"}async function Wb(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Kb(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function Gb(){return k_()?self:null}/**
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
 */const x_="firebaseLocalStorageDb",Qb=1,Ia="firebaseLocalStorage",L_="fbase_key";class mo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function sc(t,e){return t.transaction([Ia],e?"readwrite":"readonly").objectStore(Ia)}function Jb(){const t=indexedDB.deleteDatabase(x_);return new mo(t).toPromise()}function Nl(){const t=indexedDB.open(x_,Qb);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Ia,{keyPath:L_})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Ia)?e(r):(r.close(),await Jb(),e(await Nl()))})})}async function Pd(t,e,n){const r=sc(t,!0).put({[L_]:e,value:n});return new mo(r).toPromise()}async function Yb(t,e){const n=sc(t,!1).get(e),r=await new mo(n).toPromise();return r===void 0?null:r.value}function Od(t,e){const n=sc(t,!0).delete(e);return new mo(n).toPromise()}const Xb=800,Zb=3;class M_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Nl(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Zb)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return k_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=rc._getInstance(Gb()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await Wb(),!this.activeServiceWorker)return;this.sender=new Hb(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Kb()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Nl();return await Pd(e,Ta,"1"),await Od(e,Ta),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Pd(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Yb(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Od(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=sc(s,!1).getAll();return new mo(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Xb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}M_.type="LOCAL";const F_=M_;new ho(3e4,6e4);/**
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
 */function eS(t,e){return e?Cn(e):(ee(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Fu extends tc{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ws(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ws(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ws(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function tS(t){return v_(t.auth,new Fu(t),t.bypassAuthState)}function nS(t){const{auth:e,user:n}=t;return ee(n,e,"internal-error"),Ub(n,new Fu(t),t.bypassAuthState)}async function rS(t){const{auth:e,user:n}=t;return ee(n,e,"internal-error"),Fb(n,new Fu(t),t.bypassAuthState)}/**
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
 */class U_{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:c}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return tS;case"linkViaPopup":case"linkViaRedirect":return rS;case"reauthViaPopup":case"reauthViaRedirect":return nS;default:Wt(this.auth,"internal-error")}}resolve(e){Vn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Vn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const sS=new ho(2e3,1e4);class ys extends U_{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,ys.currentPopupAction&&ys.currentPopupAction.cancel(),ys.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ee(e,this.auth,"internal-error"),e}async onExecution(){Vn(this.filter.length===1,"Popup operations only handle one event");const e=Mu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(ln(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(ln(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ys.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ln(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,sS.get())};e()}}ys.currentPopupAction=null;/**
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
 */const iS="pendingRedirect",Yo=new Map;class oS extends U_{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Yo.get(this.auth._key());if(!e){try{const r=await aS(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Yo.set(this.auth._key(),e)}return this.bypassAuthState||Yo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function aS(t,e){const n=uS(e),r=lS(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function cS(t,e){Yo.set(t._key(),e)}function lS(t){return Cn(t._redirectPersistence)}function uS(t){return Jo(iS,t.config.apiKey,t.name)}async function hS(t,e,n=!1){if(Rt(t.app))return Promise.reject(un(t));const r=Er(t),s=eS(r,e),o=await new oS(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const fS=10*60*1e3;class dS{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!pS(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!B_(e)){const s=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(ln(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=fS&&this.cachedEventUids.clear(),this.cachedEventUids.has(Nd(e))}saveEventToCache(e){this.cachedEventUids.add(Nd(e)),this.lastProcessedEventTime=Date.now()}}function Nd(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function B_({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function pS(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return B_(t);default:return!1}}/**
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
 */async function mS(t,e={}){return Fn(t,"GET","/v1/projects",e)}/**
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
 */const gS=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,_S=/^https?/;async function yS(t){if(t.config.emulator)return;const{authorizedDomains:e}=await mS(t);for(const n of e)try{if(ES(n))return}catch{}Wt(t,"unauthorized-domain")}function ES(t){const e=Cl(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!_S.test(n))return!1;if(gS.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const vS=new ho(3e4,6e4);function Vd(){const t=hn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function TS(t){return new Promise((e,n)=>{var s,i,o;function r(){Vd(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Vd(),n(ln(t,"network-request-failed"))},timeout:vS.get()})}if((i=(s=hn().gapi)==null?void 0:s.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((o=hn().gapi)!=null&&o.load)r();else{const c=wb("iframefcb");return hn()[c]=()=>{gapi.load?r():n(ln(t,"network-request-failed"))},h_(`${Ib()}?onload=${c}`).catch(l=>n(l))}}).catch(e=>{throw Xo=null,e})}let Xo=null;function IS(t){return Xo=Xo||TS(t),Xo}/**
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
 */const wS=new ho(5e3,15e3),AS="__/auth/iframe",bS="emulator/auth/iframe",SS={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},CS=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function RS(t){const e=t.config;ee(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Du(e,bS):`https://${t.config.authDomain}/${AS}`,r={apiKey:e.apiKey,appName:t.name,v:qs},s=CS.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${io(r).slice(1)}`}async function PS(t){const e=await IS(t),n=hn().gapi;return ee(n,t,"internal-error"),e.open({where:document.body,url:RS(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:SS,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=ln(t,"network-request-failed"),c=hn().setTimeout(()=>{i(o)},wS.get());function l(){hn().clearTimeout(c),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
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
 */const OS={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},NS=500,VS=600,DS="_blank",kS="http://localhost";class Dd{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function xS(t,e,n,r=NS,s=VS){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l={...OS,width:r.toString(),height:s.toString(),top:i,left:o},h=pt().toLowerCase();n&&(c=s_(h)?DS:n),n_(h)&&(e=e||kS,l.scrollbars="yes");const f=Object.entries(l).reduce((g,[I,N])=>`${g}${I}=${N},`,"");if(db(h)&&c!=="_self")return LS(e||"",c),new Dd(null);const p=window.open(e||"",c,f);ee(p,t,"popup-blocked");try{p.focus()}catch{}return new Dd(p)}function LS(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const MS="__/auth/handler",FS="emulator/auth/handler",US=encodeURIComponent("fac");async function kd(t,e,n,r,s,i){ee(t.config.authDomain,t,"auth-domain-config-required"),ee(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:qs,eventId:s};if(e instanceof g_){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",bv(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))o[f]=p}if(e instanceof po){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const c=o;for(const f of Object.keys(c))c[f]===void 0&&delete c[f];const l=await t._getAppCheckToken(),h=l?`#${US}=${encodeURIComponent(l)}`:"";return`${BS(t)}?${io(c).slice(1)}${h}`}function BS({config:t}){return t.emulator?Du(t,FS):`https://${t.authDomain}/${MS}`}/**
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
 */const Hc="webStorageSupport";class $S{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Lu,this._completeRedirectFn=hS,this._overrideRedirectResult=cS}async _openPopup(e,n,r,s){var o;Vn((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const i=await kd(e,n,r,Cl(),s);return xS(e,i,Mu())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await kd(e,n,r,Cl(),s);return zb(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Vn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await PS(e),r=new dS(e);return n.register("authEvent",s=>(ee(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Hc,{type:Hc},s=>{var o;const i=(o=s==null?void 0:s[0])==null?void 0:o[Hc];i!==void 0&&n(!!i),Wt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=yS(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return l_()||r_()||xu()}}const $_=$S;var xd="@firebase/auth",Ld="1.11.1";/**
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
 */class jS{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ee(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function qS(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function HS(t){Ns(new jr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;ee(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:u_(t)},h=new Eb(r,s,i,l);return Rb(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Ns(new jr("auth-internal",e=>{const n=Er(e.getProvider("auth").getImmediate());return(r=>new jS(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),nr(xd,Ld,qS(t)),nr(xd,Ld,"esm2020")}/**
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
 */const zS=5*60,WS=Xp("authIdTokenMaxAge")||zS;let Md=null;const KS=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>WS)return;const s=n==null?void 0:n.token;Md!==s&&(Md=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function j_(t=sm()){const e=Ql(t,"auth");if(e.isInitialized())return e.getImmediate();const n=d_(t,{popupRedirectResolver:$_,persistence:[F_,V_,Lu]}),r=Xp("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=KS(i.toString());C_(n,o,()=>o(n.currentUser)),S_(n,c=>o(c))}}const s=Jp("auth");return s&&p_(n,`http://${s}`),n}function GS(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}vb({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=ln("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",GS().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});HS("Browser");const q_=Object.freeze(Object.defineProperty({__proto__:null,ActionCodeURL:nc,AuthCredential:tc,EmailAuthCredential:Bs,EmailAuthProvider:ns,FacebookAuthProvider:vn,GithubAuthProvider:In,GoogleAuthProvider:Tn,OAuthCredential:pr,TwitterAuthProvider:wn,beforeAuthStateChanged:C_,browserLocalPersistence:V_,browserPopupRedirectResolver:$_,browserSessionPersistence:Lu,connectAuthEmulator:p_,createUserWithEmailAndPassword:w_,getAuth:j_,getIdTokenResult:Xg,inMemoryPersistence:Pl,indexedDBLocalPersistence:F_,initializeAuth:d_,onAuthStateChanged:R_,onIdTokenChanged:S_,prodErrorMap:Wg,reload:Zg,signInAnonymously:y_,signInWithCredential:T_,signInWithEmailAndPassword:A_,signOut:P_,updateProfile:b_},Symbol.toStringTag,{value:"Module"})),QS={apiKey:"AIzaSyC356T4tkKUo4DUwmMmOJWPboFKlpOqDJM",authDomain:"my-firebase-12fb4.firebaseapp.com",projectId:"my-firebase-12fb4",storageBucket:"my-firebase-12fb4.firebasestorage.app",messagingSenderId:"251411595390",appId:"1:251411595390:web:d9396d5b8165079ecf182f"},H_=rm(QS),vr=xA(H_),ze=j_(H_);async function JS(){try{return(await y_(ze)).user}catch(t){throw console.error("匿名登入失敗:",t),t}}async function YS(t,e){try{return(await A_(ze,t,e)).user}catch(n){throw console.error("登入失敗:",n),n}}async function XS(t,e,n){try{const r=await w_(ze,t,e);return n&&r.user&&(await b_(r.user,{displayName:n}),await r.user.reload()),r.user}catch(r){throw console.error("註冊失敗:",r),r}}async function z_(){try{await P_(ze)}catch(t){throw console.error("登出失敗:",t),t}}function ZS(t){return R_(ze,t)}async function Fd(t){try{const e=ze.currentUser;if(!e)throw new Error("User not authenticated");await QA(Og(vr,"messages"),{text:t,userId:e.uid,userName:e.displayName||"匿名",timestamp:Hg()})}catch(e){console.error("發送訊息失敗",e)}}function e0(t,e){const n=Og(vr,"messages");let r=md(n,gd("timestamp","desc"),_d(50));return e&&(r=md(n,WA("timestamp",">=",e),gd("timestamp","desc"),_d(50))),$g(r,s=>{const i=[];s.forEach(o=>{i.push({id:o.id,...o.data()})}),t(i.reverse())})}/**
* @vue/shared v3.5.24
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Uu(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Ae={},As=[],xt=()=>{},W_=()=>!1,ic=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Bu=t=>t.startsWith("onUpdate:"),We=Object.assign,$u=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},t0=Object.prototype.hasOwnProperty,_e=(t,e)=>t0.call(t,e),re=Array.isArray,bs=t=>oc(t)==="[object Map]",K_=t=>oc(t)==="[object Set]",ne=t=>typeof t=="function",Ne=t=>typeof t=="string",Un=t=>typeof t=="symbol",be=t=>t!==null&&typeof t=="object",G_=t=>(be(t)||ne(t))&&ne(t.then)&&ne(t.catch),Q_=Object.prototype.toString,oc=t=>Q_.call(t),n0=t=>oc(t).slice(8,-1),J_=t=>oc(t)==="[object Object]",ju=t=>Ne(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Vi=Uu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ac=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},r0=/-\w/g,Lt=ac(t=>t.replace(r0,e=>e.slice(1).toUpperCase())),s0=/\B([A-Z])/g,rs=ac(t=>t.replace(s0,"-$1").toLowerCase()),cc=ac(t=>t.charAt(0).toUpperCase()+t.slice(1)),zc=ac(t=>t?`on${cc(t)}`:""),ar=(t,e)=>!Object.is(t,e),Wc=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},wa=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},i0=t=>{const e=parseFloat(t);return isNaN(e)?t:e},o0=t=>{const e=Ne(t)?Number(t):NaN;return isNaN(e)?t:e};let Ud;const Ur=()=>Ud||(Ud=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function go(t){if(re(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Ne(r)?u0(r):go(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(Ne(t)||be(t))return t}const a0=/;(?![^(]*\))/g,c0=/:([^]+)/,l0=/\/\*[^]*?\*\//g;function u0(t){const e={};return t.replace(l0,"").split(a0).forEach(n=>{if(n){const r=n.split(c0);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Ut(t){let e="";if(Ne(t))e=t;else if(re(t))for(let n=0;n<t.length;n++){const r=Ut(t[n]);r&&(e+=r+" ")}else if(be(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const h0="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",f0=Uu(h0);function Y_(t){return!!t||t===""}const X_=t=>!!(t&&t.__v_isRef===!0),qu=t=>Ne(t)?t:t==null?"":re(t)||be(t)&&(t.toString===Q_||!ne(t.toString))?X_(t)?qu(t.value):JSON.stringify(t,Z_,2):String(t),Z_=(t,e)=>X_(e)?Z_(t,e.value):bs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[Kc(r,i)+" =>"]=s,n),{})}:K_(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Kc(n))}:Un(e)?Kc(e):be(e)&&!re(e)&&!J_(e)?String(e):e,Kc=(t,e="")=>{var n;return Un(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.24
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ct;class d0{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=ct,!e&&ct&&(this.index=(ct.scopes||(ct.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=ct;try{return ct=this,e()}finally{ct=n}}}on(){++this._on===1&&(this.prevScope=ct,ct=this)}off(){this._on>0&&--this._on===0&&(ct=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function ey(){return ct}function p0(t,e=!1){ct&&ct.cleanups.push(t)}let Se;const Gc=new WeakSet;class ty{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,ct&&ct.active&&ct.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Gc.has(this)&&(Gc.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||ry(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Bd(this),sy(this);const e=Se,n=jt;Se=this,jt=!0;try{return this.fn()}finally{iy(this),Se=e,jt=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Wu(e);this.deps=this.depsTail=void 0,Bd(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Gc.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Vl(this)&&this.run()}get dirty(){return Vl(this)}}let ny=0,Di,ki;function ry(t,e=!1){if(t.flags|=8,e){t.next=ki,ki=t;return}t.next=Di,Di=t}function Hu(){ny++}function zu(){if(--ny>0)return;if(ki){let e=ki;for(ki=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Di;){let e=Di;for(Di=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function sy(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function iy(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),Wu(r),m0(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function Vl(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(oy(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function oy(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Qi)||(t.globalVersion=Qi,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!Vl(t))))return;t.flags|=2;const e=t.dep,n=Se,r=jt;Se=t,jt=!0;try{sy(t);const s=t.fn(t._value);(e.version===0||ar(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{Se=n,jt=r,iy(t),t.flags&=-3}}function Wu(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Wu(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function m0(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let jt=!0;const ay=[];function kn(){ay.push(jt),jt=!1}function xn(){const t=ay.pop();jt=t===void 0?!0:t}function Bd(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Se;Se=void 0;try{e()}finally{Se=n}}}let Qi=0;class g0{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Ku{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Se||!jt||Se===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Se)n=this.activeLink=new g0(Se,this),Se.deps?(n.prevDep=Se.depsTail,Se.depsTail.nextDep=n,Se.depsTail=n):Se.deps=Se.depsTail=n,cy(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Se.depsTail,n.nextDep=void 0,Se.depsTail.nextDep=n,Se.depsTail=n,Se.deps===n&&(Se.deps=r)}return n}trigger(e){this.version++,Qi++,this.notify(e)}notify(e){Hu();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{zu()}}}function cy(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)cy(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Dl=new WeakMap,Br=Symbol(""),kl=Symbol(""),Ji=Symbol("");function ht(t,e,n){if(jt&&Se){let r=Dl.get(t);r||Dl.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new Ku),s.map=r,s.key=n),s.track()}}function An(t,e,n,r,s,i){const o=Dl.get(t);if(!o){Qi++;return}const c=l=>{l&&l.trigger()};if(Hu(),e==="clear")o.forEach(c);else{const l=re(t),h=l&&ju(n);if(l&&n==="length"){const f=Number(r);o.forEach((p,g)=>{(g==="length"||g===Ji||!Un(g)&&g>=f)&&c(p)})}else switch((n!==void 0||o.has(void 0))&&c(o.get(n)),h&&c(o.get(Ji)),e){case"add":l?h&&c(o.get("length")):(c(o.get(Br)),bs(t)&&c(o.get(kl)));break;case"delete":l||(c(o.get(Br)),bs(t)&&c(o.get(kl)));break;case"set":bs(t)&&c(o.get(Br));break}}zu()}function fs(t){const e=Ee(t);return e===t?e:(ht(e,"iterate",Ji),qt(t)?e:e.map(Et))}function Gu(t){return ht(t=Ee(t),"iterate",Ji),t}const _0={__proto__:null,[Symbol.iterator](){return Qc(this,Symbol.iterator,Et)},concat(...t){return fs(this).concat(...t.map(e=>re(e)?fs(e):e))},entries(){return Qc(this,"entries",t=>(t[1]=Et(t[1]),t))},every(t,e){return gn(this,"every",t,e,void 0,arguments)},filter(t,e){return gn(this,"filter",t,e,n=>n.map(Et),arguments)},find(t,e){return gn(this,"find",t,e,Et,arguments)},findIndex(t,e){return gn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return gn(this,"findLast",t,e,Et,arguments)},findLastIndex(t,e){return gn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return gn(this,"forEach",t,e,void 0,arguments)},includes(...t){return Jc(this,"includes",t)},indexOf(...t){return Jc(this,"indexOf",t)},join(t){return fs(this).join(t)},lastIndexOf(...t){return Jc(this,"lastIndexOf",t)},map(t,e){return gn(this,"map",t,e,void 0,arguments)},pop(){return pi(this,"pop")},push(...t){return pi(this,"push",t)},reduce(t,...e){return $d(this,"reduce",t,e)},reduceRight(t,...e){return $d(this,"reduceRight",t,e)},shift(){return pi(this,"shift")},some(t,e){return gn(this,"some",t,e,void 0,arguments)},splice(...t){return pi(this,"splice",t)},toReversed(){return fs(this).toReversed()},toSorted(t){return fs(this).toSorted(t)},toSpliced(...t){return fs(this).toSpliced(...t)},unshift(...t){return pi(this,"unshift",t)},values(){return Qc(this,"values",Et)}};function Qc(t,e,n){const r=Gu(t),s=r[e]();return r!==t&&!qt(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.done||(i.value=n(i.value)),i}),s}const y0=Array.prototype;function gn(t,e,n,r,s,i){const o=Gu(t),c=o!==t&&!qt(t),l=o[e];if(l!==y0[e]){const p=l.apply(t,i);return c?Et(p):p}let h=n;o!==t&&(c?h=function(p,g){return n.call(this,Et(p),g,t)}:n.length>2&&(h=function(p,g){return n.call(this,p,g,t)}));const f=l.call(o,h,r);return c&&s?s(f):f}function $d(t,e,n,r){const s=Gu(t);let i=n;return s!==t&&(qt(t)?n.length>3&&(i=function(o,c,l){return n.call(this,o,c,l,t)}):i=function(o,c,l){return n.call(this,o,Et(c),l,t)}),s[e](i,...r)}function Jc(t,e,n){const r=Ee(t);ht(r,"iterate",Ji);const s=r[e](...n);return(s===-1||s===!1)&&Zu(n[0])?(n[0]=Ee(n[0]),r[e](...n)):s}function pi(t,e,n=[]){kn(),Hu();const r=Ee(t)[e].apply(t,n);return zu(),xn(),r}const E0=Uu("__proto__,__v_isRef,__isVue"),ly=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Un));function v0(t){Un(t)||(t=String(t));const e=Ee(this);return ht(e,"has",t),e.hasOwnProperty(t)}class uy{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?O0:py:i?dy:fy).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=re(e);if(!s){let l;if(o&&(l=_0[n]))return l;if(n==="hasOwnProperty")return v0}const c=Reflect.get(e,n,tt(e)?e:r);if((Un(n)?ly.has(n):E0(n))||(s||ht(e,"get",n),i))return c;if(tt(c)){const l=o&&ju(n)?c:c.value;return s&&be(l)?Aa(l):l}return be(c)?s?Aa(c):Ju(c):c}}class hy extends uy{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const l=zr(i);if(!qt(r)&&!zr(r)&&(i=Ee(i),r=Ee(r)),!re(e)&&tt(i)&&!tt(r))return l||(i.value=r),!0}const o=re(e)&&ju(n)?Number(n)<e.length:_e(e,n),c=Reflect.set(e,n,r,tt(e)?e:s);return e===Ee(s)&&(o?ar(r,i)&&An(e,"set",n,r):An(e,"add",n,r)),c}deleteProperty(e,n){const r=_e(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&An(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!Un(n)||!ly.has(n))&&ht(e,"has",n),r}ownKeys(e){return ht(e,"iterate",re(e)?"length":Br),Reflect.ownKeys(e)}}class T0 extends uy{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const I0=new hy,w0=new T0,A0=new hy(!0);const xl=t=>t,Lo=t=>Reflect.getPrototypeOf(t);function b0(t,e,n){return function(...r){const s=this.__v_raw,i=Ee(s),o=bs(i),c=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,h=s[t](...r),f=n?xl:e?Ll:Et;return!e&&ht(i,"iterate",l?kl:Br),{next(){const{value:p,done:g}=h.next();return g?{value:p,done:g}:{value:c?[f(p[0]),f(p[1])]:f(p),done:g}},[Symbol.iterator](){return this}}}}function Mo(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function S0(t,e){const n={get(s){const i=this.__v_raw,o=Ee(i),c=Ee(s);t||(ar(s,c)&&ht(o,"get",s),ht(o,"get",c));const{has:l}=Lo(o),h=e?xl:t?Ll:Et;if(l.call(o,s))return h(i.get(s));if(l.call(o,c))return h(i.get(c));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&ht(Ee(s),"iterate",Br),s.size},has(s){const i=this.__v_raw,o=Ee(i),c=Ee(s);return t||(ar(s,c)&&ht(o,"has",s),ht(o,"has",c)),s===c?i.has(s):i.has(s)||i.has(c)},forEach(s,i){const o=this,c=o.__v_raw,l=Ee(c),h=e?xl:t?Ll:Et;return!t&&ht(l,"iterate",Br),c.forEach((f,p)=>s.call(i,h(f),h(p),o))}};return We(n,t?{add:Mo("add"),set:Mo("set"),delete:Mo("delete"),clear:Mo("clear")}:{add(s){!e&&!qt(s)&&!zr(s)&&(s=Ee(s));const i=Ee(this);return Lo(i).has.call(i,s)||(i.add(s),An(i,"add",s,s)),this},set(s,i){!e&&!qt(i)&&!zr(i)&&(i=Ee(i));const o=Ee(this),{has:c,get:l}=Lo(o);let h=c.call(o,s);h||(s=Ee(s),h=c.call(o,s));const f=l.call(o,s);return o.set(s,i),h?ar(i,f)&&An(o,"set",s,i):An(o,"add",s,i),this},delete(s){const i=Ee(this),{has:o,get:c}=Lo(i);let l=o.call(i,s);l||(s=Ee(s),l=o.call(i,s)),c&&c.call(i,s);const h=i.delete(s);return l&&An(i,"delete",s,void 0),h},clear(){const s=Ee(this),i=s.size!==0,o=s.clear();return i&&An(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=b0(s,t,e)}),n}function Qu(t,e){const n=S0(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(_e(n,s)&&s in r?n:r,s,i)}const C0={get:Qu(!1,!1)},R0={get:Qu(!1,!0)},P0={get:Qu(!0,!1)};const fy=new WeakMap,dy=new WeakMap,py=new WeakMap,O0=new WeakMap;function N0(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function V0(t){return t.__v_skip||!Object.isExtensible(t)?0:N0(n0(t))}function Ju(t){return zr(t)?t:Xu(t,!1,I0,C0,fy)}function Yu(t){return Xu(t,!1,A0,R0,dy)}function Aa(t){return Xu(t,!0,w0,P0,py)}function Xu(t,e,n,r,s){if(!be(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=V0(t);if(i===0)return t;const o=s.get(t);if(o)return o;const c=new Proxy(t,i===2?r:n);return s.set(t,c),c}function xi(t){return zr(t)?xi(t.__v_raw):!!(t&&t.__v_isReactive)}function zr(t){return!!(t&&t.__v_isReadonly)}function qt(t){return!!(t&&t.__v_isShallow)}function Zu(t){return t?!!t.__v_raw:!1}function Ee(t){const e=t&&t.__v_raw;return e?Ee(e):t}function D0(t){return!_e(t,"__v_skip")&&Object.isExtensible(t)&&wa(t,"__v_skip",!0),t}const Et=t=>be(t)?Ju(t):t,Ll=t=>be(t)?Aa(t):t;function tt(t){return t?t.__v_isRef===!0:!1}function kt(t){return k0(t,!1)}function k0(t,e){return tt(t)?t:new x0(t,e)}class x0{constructor(e,n){this.dep=new Ku,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Ee(e),this._value=n?e:Et(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||qt(e)||zr(e);e=r?e:Ee(e),ar(e,n)&&(this._rawValue=e,this._value=r?e:Et(e),this.dep.trigger())}}function ie(t){return tt(t)?t.value:t}const L0={get:(t,e,n)=>e==="__v_raw"?t:ie(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return tt(s)&&!tt(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function my(t){return xi(t)?t:new Proxy(t,L0)}class M0{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Ku(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Qi-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Se!==this)return ry(this,!0),!0}get value(){const e=this.dep.track();return oy(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function F0(t,e,n=!1){let r,s;return ne(t)?r=t:(r=t.get,s=t.set),new M0(r,s,n)}const Fo={},ba=new WeakMap;let kr;function U0(t,e=!1,n=kr){if(n){let r=ba.get(n);r||ba.set(n,r=[]),r.push(t)}}function B0(t,e,n=Ae){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:c,call:l}=n,h=z=>s?z:qt(z)||s===!1||s===0?bn(z,1):bn(z);let f,p,g,I,N=!1,P=!1;if(tt(t)?(p=()=>t.value,N=qt(t)):xi(t)?(p=()=>h(t),N=!0):re(t)?(P=!0,N=t.some(z=>xi(z)||qt(z)),p=()=>t.map(z=>{if(tt(z))return z.value;if(xi(z))return h(z);if(ne(z))return l?l(z,2):z()})):ne(t)?e?p=l?()=>l(t,2):t:p=()=>{if(g){kn();try{g()}finally{xn()}}const z=kr;kr=f;try{return l?l(t,3,[I]):t(I)}finally{kr=z}}:p=xt,e&&s){const z=p,ae=s===!0?1/0:s;p=()=>bn(z(),ae)}const V=ey(),$=()=>{f.stop(),V&&V.active&&$u(V.effects,f)};if(i&&e){const z=e;e=(...ae)=>{z(...ae),$()}}let K=P?new Array(t.length).fill(Fo):Fo;const Q=z=>{if(!(!(f.flags&1)||!f.dirty&&!z))if(e){const ae=f.run();if(s||N||(P?ae.some((ce,b)=>ar(ce,K[b])):ar(ae,K))){g&&g();const ce=kr;kr=f;try{const b=[ae,K===Fo?void 0:P&&K[0]===Fo?[]:K,I];K=ae,l?l(e,3,b):e(...b)}finally{kr=ce}}}else f.run()};return c&&c(Q),f=new ty(p),f.scheduler=o?()=>o(Q,!1):Q,I=z=>U0(z,!1,f),g=f.onStop=()=>{const z=ba.get(f);if(z){if(l)l(z,4);else for(const ae of z)ae();ba.delete(f)}},e?r?Q(!0):K=f.run():o?o(Q.bind(null,!0),!0):f.run(),$.pause=f.pause.bind(f),$.resume=f.resume.bind(f),$.stop=$,$}function bn(t,e=1/0,n){if(e<=0||!be(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,tt(t))bn(t.value,e,n);else if(re(t))for(let r=0;r<t.length;r++)bn(t[r],e,n);else if(K_(t)||bs(t))t.forEach(r=>{bn(r,e,n)});else if(J_(t)){for(const r in t)bn(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&bn(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.24
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function _o(t,e,n,r){try{return r?t(...r):t()}catch(s){lc(s,e,n)}}function Kt(t,e,n,r){if(ne(t)){const s=_o(t,e,n,r);return s&&G_(s)&&s.catch(i=>{lc(i,e,n)}),s}if(re(t)){const s=[];for(let i=0;i<t.length;i++)s.push(Kt(t[i],e,n,r));return s}}function lc(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Ae;if(e){let c=e.parent;const l=e.proxy,h=`https://vuejs.org/error-reference/#runtime-${n}`;for(;c;){const f=c.ec;if(f){for(let p=0;p<f.length;p++)if(f[p](t,l,h)===!1)return}c=c.parent}if(i){kn(),_o(i,null,10,[t,l,h]),xn();return}}$0(t,n,s,r,o)}function $0(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const vt=[];let Zt=-1;const Ss=[];let Jn=null,_s=0;const gy=Promise.resolve();let Sa=null;function eh(t){const e=Sa||gy;return t?e.then(this?t.bind(this):t):e}function j0(t){let e=Zt+1,n=vt.length;for(;e<n;){const r=e+n>>>1,s=vt[r],i=Yi(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function th(t){if(!(t.flags&1)){const e=Yi(t),n=vt[vt.length-1];!n||!(t.flags&2)&&e>=Yi(n)?vt.push(t):vt.splice(j0(e),0,t),t.flags|=1,_y()}}function _y(){Sa||(Sa=gy.then(Ey))}function q0(t){re(t)?Ss.push(...t):Jn&&t.id===-1?Jn.splice(_s+1,0,t):t.flags&1||(Ss.push(t),t.flags|=1),_y()}function jd(t,e,n=Zt+1){for(;n<vt.length;n++){const r=vt[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;vt.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function yy(t){if(Ss.length){const e=[...new Set(Ss)].sort((n,r)=>Yi(n)-Yi(r));if(Ss.length=0,Jn){Jn.push(...e);return}for(Jn=e,_s=0;_s<Jn.length;_s++){const n=Jn[_s];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Jn=null,_s=0}}const Yi=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Ey(t){try{for(Zt=0;Zt<vt.length;Zt++){const e=vt[Zt];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),_o(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Zt<vt.length;Zt++){const e=vt[Zt];e&&(e.flags&=-2)}Zt=-1,vt.length=0,yy(),Sa=null,(vt.length||Ss.length)&&Ey()}}let nn,Ai=[],Ml=!1;function uc(t,...e){nn?nn.emit(t,...e):Ml||Ai.push({event:t,args:e})}function vy(t,e){var n,r;nn=t,nn?(nn.enabled=!0,Ai.forEach(({event:s,args:i})=>nn.emit(s,...i)),Ai=[]):typeof window<"u"&&window.HTMLElement&&!((r=(n=window.navigator)==null?void 0:n.userAgent)!=null&&r.includes("jsdom"))?((e.__VUE_DEVTOOLS_HOOK_REPLAY__=e.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(i=>{vy(i,e)}),setTimeout(()=>{nn||(e.__VUE_DEVTOOLS_HOOK_REPLAY__=null,Ml=!0,Ai=[])},3e3)):(Ml=!0,Ai=[])}function H0(t,e){uc("app:init",t,e,{Fragment:Tt,Text:yo,Comment:Xe,Static:Zo})}function z0(t){uc("app:unmount",t)}const W0=nh("component:added"),Ty=nh("component:updated"),K0=nh("component:removed"),G0=t=>{nn&&typeof nn.cleanupBuffer=="function"&&!nn.cleanupBuffer(t)&&K0(t)};function nh(t){return e=>{uc(t,e.appContext.app,e.uid,e.parent?e.parent.uid:void 0,e)}}function Q0(t,e,n){uc("component:emit",t.appContext.app,t,e,n)}let Ze=null,Iy=null;function Ca(t){const e=Ze;return Ze=t,Iy=t&&t.type.__scopeId||null,e}function Li(t,e=Ze,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Na(-1);const i=Ca(e);let o;try{o=t(...s)}finally{Ca(i),r._d&&Na(1)}return __VUE_PROD_DEVTOOLS__&&Ty(e),o};return r._n=!0,r._c=!0,r._d=!0,r}function wy(t,e){if(Ze===null)return t;const n=mc(Ze),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,c,l=Ae]=e[s];i&&(ne(i)&&(i={mounted:i,updated:i}),i.deep&&bn(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:c,modifiers:l}))}return t}function Rr(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const c=s[o];i&&(c.oldValue=i[o].value);let l=c.dir[r];l&&(kn(),Kt(l,n,8,[t.el,c,t,e]),xn())}}const J0=Symbol("_vte"),Ay=t=>t.__isTeleport,En=Symbol("_leaveCb"),Uo=Symbol("_enterCb");function Y0(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return dc(()=>{t.isMounted=!0}),Vy(()=>{t.isUnmounting=!0}),t}const Nt=[Function,Array],by={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Nt,onEnter:Nt,onAfterEnter:Nt,onEnterCancelled:Nt,onBeforeLeave:Nt,onLeave:Nt,onAfterLeave:Nt,onLeaveCancelled:Nt,onBeforeAppear:Nt,onAppear:Nt,onAfterAppear:Nt,onAppearCancelled:Nt},Sy=t=>{const e=t.subTree;return e.component?Sy(e.component):e},X0={name:"BaseTransition",props:by,setup(t,{slots:e}){const n=gr(),r=Y0();return()=>{const s=e.default&&Py(e.default(),!0);if(!s||!s.length)return;const i=Cy(s),o=Ee(t),{mode:c}=o;if(r.isLeaving)return Yc(i);const l=qd(i);if(!l)return Yc(i);let h=Fl(l,o,r,n,p=>h=p);l.type!==Xe&&Xi(l,h);let f=n.subTree&&qd(n.subTree);if(f&&f.type!==Xe&&!xr(f,l)&&Sy(n).type!==Xe){let p=Fl(f,o,r,n);if(Xi(f,p),c==="out-in"&&l.type!==Xe)return r.isLeaving=!0,p.afterLeave=()=>{r.isLeaving=!1,n.job.flags&8||n.update(),delete p.afterLeave,f=void 0},Yc(i);c==="in-out"&&l.type!==Xe?p.delayLeave=(g,I,N)=>{const P=Ry(r,f);P[String(f.key)]=f,g[En]=()=>{I(),g[En]=void 0,delete h.delayedLeave,f=void 0},h.delayedLeave=()=>{N(),delete h.delayedLeave,f=void 0}}:f=void 0}else f&&(f=void 0);return i}}};function Cy(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==Xe){e=n;break}}return e}const Z0=X0;function Ry(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function Fl(t,e,n,r,s){const{appear:i,mode:o,persisted:c=!1,onBeforeEnter:l,onEnter:h,onAfterEnter:f,onEnterCancelled:p,onBeforeLeave:g,onLeave:I,onAfterLeave:N,onLeaveCancelled:P,onBeforeAppear:V,onAppear:$,onAfterAppear:K,onAppearCancelled:Q}=e,z=String(t.key),ae=Ry(n,t),ce=(_,A)=>{_&&Kt(_,r,9,A)},b=(_,A)=>{const w=A[1];ce(_,A),re(_)?_.every(v=>v.length<=1)&&w():_.length<=1&&w()},E={mode:o,persisted:c,beforeEnter(_){let A=l;if(!n.isMounted)if(i)A=V||l;else return;_[En]&&_[En](!0);const w=ae[z];w&&xr(t,w)&&w.el[En]&&w.el[En](),ce(A,[_])},enter(_){let A=h,w=f,v=p;if(!n.isMounted)if(i)A=$||h,w=K||f,v=Q||p;else return;let y=!1;const me=_[Uo]=Ke=>{y||(y=!0,Ke?ce(v,[_]):ce(w,[_]),E.delayedLeave&&E.delayedLeave(),_[Uo]=void 0)};A?b(A,[_,me]):me()},leave(_,A){const w=String(t.key);if(_[Uo]&&_[Uo](!0),n.isUnmounting)return A();ce(g,[_]);let v=!1;const y=_[En]=me=>{v||(v=!0,A(),me?ce(P,[_]):ce(N,[_]),_[En]=void 0,ae[w]===t&&delete ae[w])};ae[w]=t,I?b(I,[_,y]):y()},clone(_){const A=Fl(_,e,n,r,s);return s&&s(A),A}};return E}function Yc(t){if(hc(t))return t=mr(t),t.children=null,t}function qd(t){if(!hc(t))return Ay(t.type)&&t.children?Cy(t.children):t;if(t.component)return t.component.subTree;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&ne(n.default))return n.default()}}function Xi(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Xi(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Py(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const c=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===Tt?(o.patchFlag&128&&s++,r=r.concat(Py(o.children,e,c))):(e||o.type!==Xe)&&r.push(c!=null?mr(o,{key:c}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}function Gt(t,e){return ne(t)?We({name:t.name},e,{setup:t}):t}function Oy(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}const Ra=new WeakMap;function Mi(t,e,n,r,s=!1){if(re(t)){t.forEach((N,P)=>Mi(N,e&&(re(e)?e[P]:e),n,r,s));return}if(Cs(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Mi(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?mc(r.component):r.el,o=s?null:i,{i:c,r:l}=t,h=e&&e.r,f=c.refs===Ae?c.refs={}:c.refs,p=c.setupState,g=Ee(p),I=p===Ae?W_:N=>_e(g,N);if(h!=null&&h!==l){if(Hd(e),Ne(h))f[h]=null,I(h)&&(p[h]=null);else if(tt(h)){h.value=null;const N=e;N.k&&(f[N.k]=null)}}if(ne(l))_o(l,c,12,[o,f]);else{const N=Ne(l),P=tt(l);if(N||P){const V=()=>{if(t.f){const $=N?I(l)?p[l]:f[l]:l.value;if(s)re($)&&$u($,i);else if(re($))$.includes(i)||$.push(i);else if(N)f[l]=[i],I(l)&&(p[l]=f[l]);else{const K=[i];l.value=K,t.k&&(f[t.k]=K)}}else N?(f[l]=o,I(l)&&(p[l]=o)):P&&(l.value=o,t.k&&(f[t.k]=o))};if(o){const $=()=>{V(),Ra.delete(t)};$.id=-1,Ra.set(t,$),Ct($,n)}else Hd(t),V()}}}function Hd(t){const e=Ra.get(t);e&&(e.flags|=8,Ra.delete(t))}Ur().requestIdleCallback;Ur().cancelIdleCallback;const Cs=t=>!!t.type.__asyncLoader,hc=t=>t.type.__isKeepAlive;function eC(t,e){Ny(t,"a",e)}function tC(t,e){Ny(t,"da",e)}function Ny(t,e,n=ft){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(fc(e,r,n),n){let s=n.parent;for(;s&&s.parent;)hc(s.parent.vnode)&&nC(r,e,n,s),s=s.parent}}function nC(t,e,n,r){const s=fc(e,t,r,!0);Dy(()=>{$u(r[e],s)},n)}function fc(t,e,n=ft,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{kn();const c=Eo(n),l=Kt(e,n,t,o);return c(),xn(),l});return r?s.unshift(i):s.push(i),i}}const Bn=t=>(e,n=ft)=>{(!eo||t==="sp")&&fc(t,(...r)=>e(...r),n)},rC=Bn("bm"),dc=Bn("m"),sC=Bn("bu"),iC=Bn("u"),Vy=Bn("bum"),Dy=Bn("um"),oC=Bn("sp"),aC=Bn("rtg"),cC=Bn("rtc");function lC(t,e=ft){fc("ec",t,e)}const uC="components",ky=Symbol.for("v-ndc");function hC(t){return Ne(t)?fC(uC,t,!1)||t:t||ky}function fC(t,e,n=!0,r=!1){const s=Ze||ft;if(s){const i=s.type;{const c=ZC(i,!1);if(c&&(c===e||c===Lt(e)||c===cc(Lt(e))))return i}const o=zd(s[t]||i[t],e)||zd(s.appContext[t],e);return!o&&r?i:o}}function zd(t,e){return t&&(t[e]||t[Lt(e)]||t[cc(Lt(e))])}function Pa(t,e,n={},r,s){if(Ze.ce||Ze.parent&&Cs(Ze.parent)&&Ze.parent.ce){const h=Object.keys(n).length>0;return e!=="default"&&(n.name=e),Je(),Xn(Tt,null,[et("slot",n,r&&r())],h?-2:64)}let i=t[e];i&&i._c&&(i._d=!1),Je();const o=i&&xy(i(n)),c=n.key||o&&o.key,l=Xn(Tt,{key:(c&&!Un(c)?c:`_${e}`)+(!o&&r?"_fb":"")},o||(r?r():[]),o&&t._===1?64:-2);return l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),i&&i._c&&(i._d=!0),l}function xy(t){return t.some(e=>Wr(e)?!(e.type===Xe||e.type===Tt&&!xy(e.children)):!0)?t:null}const Ul=t=>t?sE(t)?mc(t):Ul(t.parent):null,Fi=We(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Ul(t.parent),$root:t=>Ul(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>__VUE_OPTIONS_API__?My(t):t.type,$forceUpdate:t=>t.f||(t.f=()=>{th(t.update)}),$nextTick:t=>t.n||(t.n=eh.bind(t.proxy)),$watch:t=>__VUE_OPTIONS_API__?kC.bind(t):xt}),Xc=(t,e)=>t!==Ae&&!t.__isScriptSetup&&_e(t,e),dC={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:c,appContext:l}=t;let h;if(e[0]!=="$"){const I=o[e];if(I!==void 0)switch(I){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Xc(r,e))return o[e]=1,r[e];if(__VUE_OPTIONS_API__&&s!==Ae&&_e(s,e))return o[e]=2,s[e];if((h=t.propsOptions[0])&&_e(h,e))return o[e]=3,i[e];if(n!==Ae&&_e(n,e))return o[e]=4,n[e];(!__VUE_OPTIONS_API__||Bl)&&(o[e]=0)}}const f=Fi[e];let p,g;if(f)return e==="$attrs"&&ht(t.attrs,"get",""),f(t);if((p=c.__cssModules)&&(p=p[e]))return p;if(n!==Ae&&_e(n,e))return o[e]=4,n[e];if(g=l.config.globalProperties,_e(g,e))return g[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Xc(s,e)?(s[e]=n,!0):__VUE_OPTIONS_API__&&r!==Ae&&_e(r,e)?(r[e]=n,!0):_e(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i,type:o}},c){let l,h;return!!(n[c]||__VUE_OPTIONS_API__&&t!==Ae&&c[0]!=="$"&&_e(t,c)||Xc(e,c)||(l=i[0])&&_e(l,c)||_e(r,c)||_e(Fi,c)||_e(s.config.globalProperties,c)||(h=o.__cssModules)&&h[c])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:_e(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Wd(t){return re(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Bl=!0;function pC(t){const e=My(t),n=t.proxy,r=t.ctx;Bl=!1,e.beforeCreate&&Kd(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:c,provide:l,inject:h,created:f,beforeMount:p,mounted:g,beforeUpdate:I,updated:N,activated:P,deactivated:V,beforeDestroy:$,beforeUnmount:K,destroyed:Q,unmounted:z,render:ae,renderTracked:ce,renderTriggered:b,errorCaptured:E,serverPrefetch:_,expose:A,inheritAttrs:w,components:v,directives:y,filters:me}=e;if(h&&mC(h,r,null),o)for(const Re in o){const ye=o[Re];ne(ye)&&(r[Re]=ye.bind(n))}if(s){const Re=s.call(n,n);be(Re)&&(t.data=Ju(Re))}if(Bl=!0,i)for(const Re in i){const ye=i[Re],Ot=ne(ye)?ye.bind(n,n):ne(ye.get)?ye.get.bind(n,n):xt,os=!ne(ye)&&ne(ye.set)?ye.set.bind(n):xt,Qt=ve({get:Ot,set:os});Object.defineProperty(r,Re,{enumerable:!0,configurable:!0,get:()=>Qt.value,set:wt=>Qt.value=wt})}if(c)for(const Re in c)Ly(c[Re],r,n,Re);if(l){const Re=ne(l)?l.call(n):l;Reflect.ownKeys(Re).forEach(ye=>{Uy(ye,Re[ye])})}f&&Kd(f,t,"c");function Le(Re,ye){re(ye)?ye.forEach(Ot=>Re(Ot.bind(n))):ye&&Re(ye.bind(n))}if(Le(rC,p),Le(dc,g),Le(sC,I),Le(iC,N),Le(eC,P),Le(tC,V),Le(lC,E),Le(cC,ce),Le(aC,b),Le(Vy,K),Le(Dy,z),Le(oC,_),re(A))if(A.length){const Re=t.exposed||(t.exposed={});A.forEach(ye=>{Object.defineProperty(Re,ye,{get:()=>n[ye],set:Ot=>n[ye]=Ot,enumerable:!0})})}else t.exposed||(t.exposed={});ae&&t.render===xt&&(t.render=ae),w!=null&&(t.inheritAttrs=w),v&&(t.components=v),y&&(t.directives=y),_&&Oy(t)}function mC(t,e,n=xt){re(t)&&(t=$l(t));for(const r in t){const s=t[r];let i;be(s)?"default"in s?i=fn(s.from||r,s.default,!0):i=fn(s.from||r):i=fn(s),tt(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function Kd(t,e,n){Kt(re(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Ly(t,e,n,r){let s=r.includes(".")?Yy(n,r):()=>n[r];if(Ne(t)){const i=e[t];ne(i)&&Ps(s,i)}else if(ne(t))Ps(s,t.bind(n));else if(be(t))if(re(t))t.forEach(i=>Ly(i,e,n,r));else{const i=ne(t.handler)?t.handler.bind(n):e[t.handler];ne(i)&&Ps(s,i,t)}}function My(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,c=i.get(e);let l;return c?l=c:!s.length&&!n&&!r?l=e:(l={},s.length&&s.forEach(h=>Oa(l,h,o,!0)),Oa(l,e,o)),be(e)&&i.set(e,l),l}function Oa(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Oa(t,i,n,!0),s&&s.forEach(o=>Oa(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const c=gC[o]||n&&n[o];t[o]=c?c(t[o],e[o]):e[o]}return t}const gC={data:Gd,props:Qd,emits:Qd,methods:bi,computed:bi,beforeCreate:gt,created:gt,beforeMount:gt,mounted:gt,beforeUpdate:gt,updated:gt,beforeDestroy:gt,beforeUnmount:gt,destroyed:gt,unmounted:gt,activated:gt,deactivated:gt,errorCaptured:gt,serverPrefetch:gt,components:bi,directives:bi,watch:yC,provide:Gd,inject:_C};function Gd(t,e){return e?t?function(){return We(ne(t)?t.call(this,this):t,ne(e)?e.call(this,this):e)}:e:t}function _C(t,e){return bi($l(t),$l(e))}function $l(t){if(re(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function gt(t,e){return t?[...new Set([].concat(t,e))]:e}function bi(t,e){return t?We(Object.create(null),t,e):e}function Qd(t,e){return t?re(t)&&re(e)?[...new Set([...t,...e])]:We(Object.create(null),Wd(t),Wd(e??{})):e}function yC(t,e){if(!t)return e;if(!e)return t;const n=We(Object.create(null),t);for(const r in e)n[r]=gt(t[r],e[r]);return n}function Fy(){return{app:null,config:{isNativeTag:W_,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let EC=0;function vC(t,e){return function(r,s=null){ne(r)||(r=We({},r)),s!=null&&!be(s)&&(s=null);const i=Fy(),o=new WeakSet,c=[];let l=!1;const h=i.app={_uid:EC++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:np,get config(){return i.config},set config(f){},use(f,...p){return o.has(f)||(f&&ne(f.install)?(o.add(f),f.install(h,...p)):ne(f)&&(o.add(f),f(h,...p))),h},mixin(f){return __VUE_OPTIONS_API__&&(i.mixins.includes(f)||i.mixins.push(f)),h},component(f,p){return p?(i.components[f]=p,h):i.components[f]},directive(f,p){return p?(i.directives[f]=p,h):i.directives[f]},mount(f,p,g){if(!l){const I=h._ceVNode||et(r,s);return I.appContext=i,g===!0?g="svg":g===!1&&(g=void 0),t(I,f,g),l=!0,h._container=f,f.__vue_app__=h,__VUE_PROD_DEVTOOLS__&&(h._instance=I.component,H0(h,np)),mc(I.component)}},onUnmount(f){c.push(f)},unmount(){l&&(Kt(c,h._instance,16),t(null,h._container),__VUE_PROD_DEVTOOLS__&&(h._instance=null,z0(h)),delete h._container.__vue_app__)},provide(f,p){return i.provides[f]=p,h},runWithContext(f){const p=Rs;Rs=h;try{return f()}finally{Rs=p}}};return h}}let Rs=null;function Uy(t,e){if(ft){let n=ft.provides;const r=ft.parent&&ft.parent.provides;r===n&&(n=ft.provides=Object.create(r)),n[t]=e}}function fn(t,e,n=!1){const r=gr();if(r||Rs){let s=Rs?Rs._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&ne(e)?e.call(r&&r.proxy):e}}const By={},$y=()=>Object.create(By),jy=t=>Object.getPrototypeOf(t)===By;function TC(t,e,n,r=!1){const s={},i=$y();t.propsDefaults=Object.create(null),qy(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Yu(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function IC(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,c=Ee(s),[l]=t.propsOptions;let h=!1;if((r||o>0)&&!(o&16)){if(o&8){const f=t.vnode.dynamicProps;for(let p=0;p<f.length;p++){let g=f[p];if(pc(t.emitsOptions,g))continue;const I=e[g];if(l)if(_e(i,g))I!==i[g]&&(i[g]=I,h=!0);else{const N=Lt(g);s[N]=jl(l,c,N,I,t,!1)}else I!==i[g]&&(i[g]=I,h=!0)}}}else{qy(t,e,s,i)&&(h=!0);let f;for(const p in c)(!e||!_e(e,p)&&((f=rs(p))===p||!_e(e,f)))&&(l?n&&(n[p]!==void 0||n[f]!==void 0)&&(s[p]=jl(l,c,p,void 0,t,!0)):delete s[p]);if(i!==c)for(const p in i)(!e||!_e(e,p))&&(delete i[p],h=!0)}h&&An(t.attrs,"set","")}function qy(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,c;if(e)for(let l in e){if(Vi(l))continue;const h=e[l];let f;s&&_e(s,f=Lt(l))?!i||!i.includes(f)?n[f]=h:(c||(c={}))[f]=h:pc(t.emitsOptions,l)||(!(l in r)||h!==r[l])&&(r[l]=h,o=!0)}if(i){const l=Ee(n),h=c||Ae;for(let f=0;f<i.length;f++){const p=i[f];n[p]=jl(s,l,p,h[p],t,!_e(h,p))}}return o}function jl(t,e,n,r,s,i){const o=t[n];if(o!=null){const c=_e(o,"default");if(c&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&ne(l)){const{propsDefaults:h}=s;if(n in h)r=h[n];else{const f=Eo(s);r=h[n]=l.call(null,e),f()}}else r=l;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!c?r=!1:o[1]&&(r===""||r===rs(n))&&(r=!0))}return r}const wC=new WeakMap;function Hy(t,e,n=!1){const r=__VUE_OPTIONS_API__&&n?wC:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},c=[];let l=!1;if(__VUE_OPTIONS_API__&&!ne(t)){const f=p=>{l=!0;const[g,I]=Hy(p,e,!0);We(o,g),I&&c.push(...I)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!i&&!l)return be(t)&&r.set(t,As),As;if(re(i))for(let f=0;f<i.length;f++){const p=Lt(i[f]);Jd(p)&&(o[p]=Ae)}else if(i)for(const f in i){const p=Lt(f);if(Jd(p)){const g=i[f],I=o[p]=re(g)||ne(g)?{type:g}:We({},g),N=I.type;let P=!1,V=!0;if(re(N))for(let $=0;$<N.length;++$){const K=N[$],Q=ne(K)&&K.name;if(Q==="Boolean"){P=!0;break}else Q==="String"&&(V=!1)}else P=ne(N)&&N.name==="Boolean";I[0]=P,I[1]=V,(P||_e(I,"default"))&&c.push(p)}}const h=[o,c];return be(t)&&r.set(t,h),h}function Jd(t){return t[0]!=="$"&&!Vi(t)}const rh=t=>t==="_"||t==="_ctx"||t==="$stable",sh=t=>re(t)?t.map(tn):[tn(t)],AC=(t,e,n)=>{if(e._n)return e;const r=Li((...s)=>sh(e(...s)),n);return r._c=!1,r},zy=(t,e,n)=>{const r=t._ctx;for(const s in t){if(rh(s))continue;const i=t[s];if(ne(i))e[s]=AC(s,i,r);else if(i!=null){const o=sh(i);e[s]=()=>o}}},Wy=(t,e)=>{const n=sh(e);t.slots.default=()=>n},Ky=(t,e,n)=>{for(const r in e)(n||!rh(r))&&(t[r]=e[r])},bC=(t,e,n)=>{const r=t.slots=$y();if(t.vnode.shapeFlag&32){const s=e._;s?(Ky(r,e,n),n&&wa(r,"_",s,!0)):zy(e,r)}else e&&Wy(t,e)},SC=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Ae;if(r.shapeFlag&32){const c=e._;c?n&&c===1?i=!1:Ky(s,e,n):(i=!e.$stable,zy(e,s)),o=e}else e&&(Wy(t,e),o={default:1});if(i)for(const c in s)!rh(c)&&o[c]==null&&delete s[c]};function CC(){typeof __VUE_OPTIONS_API__!="boolean"&&(Ur().__VUE_OPTIONS_API__=!0),typeof __VUE_PROD_DEVTOOLS__!="boolean"&&(Ur().__VUE_PROD_DEVTOOLS__=!1),typeof __VUE_PROD_HYDRATION_MISMATCH_DETAILS__!="boolean"&&(Ur().__VUE_PROD_HYDRATION_MISMATCH_DETAILS__=!1)}const Ct=jC;function RC(t){return PC(t)}function PC(t,e){CC();const n=Ur();n.__VUE__=!0,__VUE_PROD_DEVTOOLS__&&vy(n.__VUE_DEVTOOLS_GLOBAL_HOOK__,n);const{insert:r,remove:s,patchProp:i,createElement:o,createText:c,createComment:l,setText:h,setElementText:f,parentNode:p,nextSibling:g,setScopeId:I=xt,insertStaticContent:N}=t,P=(T,S,O,B=null,x=null,L=null,q=void 0,U=null,F=!!S.dynamicChildren)=>{if(T===S)return;T&&!xr(T,S)&&(B=$n(T),wt(T,x,L,!0),T=null),S.patchFlag===-2&&(F=!1,S.dynamicChildren=null);const{type:M,ref:X,shapeFlag:H}=S;switch(M){case yo:V(T,S,O,B);break;case Xe:$(T,S,O,B);break;case Zo:T==null&&K(S,O,B,q);break;case Tt:v(T,S,O,B,x,L,q,U,F);break;default:H&1?ae(T,S,O,B,x,L,q,U,F):H&6?y(T,S,O,B,x,L,q,U,F):(H&64||H&128)&&M.process(T,S,O,B,x,L,q,U,F,Ir)}X!=null&&x?Mi(X,T&&T.ref,L,S||T,!S):X==null&&T&&T.ref!=null&&Mi(T.ref,null,L,T,!0)},V=(T,S,O,B)=>{if(T==null)r(S.el=c(S.children),O,B);else{const x=S.el=T.el;S.children!==T.children&&h(x,S.children)}},$=(T,S,O,B)=>{T==null?r(S.el=l(S.children||""),O,B):S.el=T.el},K=(T,S,O,B)=>{[T.el,T.anchor]=N(T.children,S,O,B,T.el,T.anchor)},Q=({el:T,anchor:S},O,B)=>{let x;for(;T&&T!==S;)x=g(T),r(T,O,B),T=x;r(S,O,B)},z=({el:T,anchor:S})=>{let O;for(;T&&T!==S;)O=g(T),s(T),T=O;s(S)},ae=(T,S,O,B,x,L,q,U,F)=>{if(S.type==="svg"?q="svg":S.type==="math"&&(q="mathml"),T==null)ce(S,O,B,x,L,q,U,F);else{const M=T.el&&T.el._isVueCE?T.el:null;try{M&&M._beginPatch(),_(T,S,x,L,q,U,F)}finally{M&&M._endPatch()}}},ce=(T,S,O,B,x,L,q,U)=>{let F,M;const{props:X,shapeFlag:H,transition:Y,dirs:Z}=T;if(F=T.el=o(T.type,L,X&&X.is,X),H&8?f(F,T.children):H&16&&E(T.children,F,null,B,x,Zc(T,L),q,U),Z&&Rr(T,null,B,"created"),b(F,T,T.scopeId,q,B),X){for(const Ie in X)Ie!=="value"&&!Vi(Ie)&&i(F,Ie,null,X[Ie],L,B);"value"in X&&i(F,"value",null,X.value,L),(M=X.onVnodeBeforeMount)&&Xt(M,B,T)}__VUE_PROD_DEVTOOLS__&&(wa(F,"__vnode",T,!0),wa(F,"__vueParentComponent",B,!0)),Z&&Rr(T,null,B,"beforeMount");const ue=OC(x,Y);ue&&Y.beforeEnter(F),r(F,S,O),((M=X&&X.onVnodeMounted)||ue||Z)&&Ct(()=>{M&&Xt(M,B,T),ue&&Y.enter(F),Z&&Rr(T,null,B,"mounted")},x)},b=(T,S,O,B,x)=>{if(O&&I(T,O),B)for(let L=0;L<B.length;L++)I(T,B[L]);if(x){let L=x.subTree;if(S===L||Zy(L.type)&&(L.ssContent===S||L.ssFallback===S)){const q=x.vnode;b(T,q,q.scopeId,q.slotScopeIds,x.parent)}}},E=(T,S,O,B,x,L,q,U,F=0)=>{for(let M=F;M<T.length;M++){const X=T[M]=U?Yn(T[M]):tn(T[M]);P(null,X,S,O,B,x,L,q,U)}},_=(T,S,O,B,x,L,q)=>{const U=S.el=T.el;__VUE_PROD_DEVTOOLS__&&(U.__vnode=S);let{patchFlag:F,dynamicChildren:M,dirs:X}=S;F|=T.patchFlag&16;const H=T.props||Ae,Y=S.props||Ae;let Z;if(O&&Pr(O,!1),(Z=Y.onVnodeBeforeUpdate)&&Xt(Z,O,S,T),X&&Rr(S,T,O,"beforeUpdate"),O&&Pr(O,!0),(H.innerHTML&&Y.innerHTML==null||H.textContent&&Y.textContent==null)&&f(U,""),M?A(T.dynamicChildren,M,U,O,B,Zc(S,x),L):q||ye(T,S,U,null,O,B,Zc(S,x),L,!1),F>0){if(F&16)w(U,H,Y,O,x);else if(F&2&&H.class!==Y.class&&i(U,"class",null,Y.class,x),F&4&&i(U,"style",H.style,Y.style,x),F&8){const ue=S.dynamicProps;for(let Ie=0;Ie<ue.length;Ie++){const ge=ue[Ie],st=H[ge],it=Y[ge];(it!==st||ge==="value")&&i(U,ge,st,it,x,O)}}F&1&&T.children!==S.children&&f(U,S.children)}else!q&&M==null&&w(U,H,Y,O,x);((Z=Y.onVnodeUpdated)||X)&&Ct(()=>{Z&&Xt(Z,O,S,T),X&&Rr(S,T,O,"updated")},B)},A=(T,S,O,B,x,L,q)=>{for(let U=0;U<S.length;U++){const F=T[U],M=S[U],X=F.el&&(F.type===Tt||!xr(F,M)||F.shapeFlag&198)?p(F.el):O;P(F,M,X,null,B,x,L,q,!0)}},w=(T,S,O,B,x)=>{if(S!==O){if(S!==Ae)for(const L in S)!Vi(L)&&!(L in O)&&i(T,L,S[L],null,x,B);for(const L in O){if(Vi(L))continue;const q=O[L],U=S[L];q!==U&&L!=="value"&&i(T,L,U,q,x,B)}"value"in O&&i(T,"value",S.value,O.value,x)}},v=(T,S,O,B,x,L,q,U,F)=>{const M=S.el=T?T.el:c(""),X=S.anchor=T?T.anchor:c("");let{patchFlag:H,dynamicChildren:Y,slotScopeIds:Z}=S;Z&&(U=U?U.concat(Z):Z),T==null?(r(M,O,B),r(X,O,B),E(S.children||[],O,X,x,L,q,U,F)):H>0&&H&64&&Y&&T.dynamicChildren?(A(T.dynamicChildren,Y,O,x,L,q,U),(S.key!=null||x&&S===x.subTree)&&Gy(T,S,!0)):ye(T,S,O,X,x,L,q,U,F)},y=(T,S,O,B,x,L,q,U,F)=>{S.slotScopeIds=U,T==null?S.shapeFlag&512?x.ctx.activate(S,O,B,q,F):me(S,O,B,x,L,q,F):Ke(T,S,F)},me=(T,S,O,B,x,L,q)=>{const U=T.component=GC(T,B,x);if(hc(T)&&(U.ctx.renderer=Ir),QC(U,!1,q),U.asyncDep){if(x&&x.registerDep(U,Le,q),!T.el){const F=U.subTree=et(Xe);$(null,F,S,O),T.placeholder=F.el}}else Le(U,T,S,O,x,L,q)},Ke=(T,S,O)=>{const B=S.component=T.component;if(BC(T,S,O))if(B.asyncDep&&!B.asyncResolved){Re(B,S,O);return}else B.next=S,B.update();else S.el=T.el,B.vnode=S},Le=(T,S,O,B,x,L,q)=>{const U=()=>{if(T.isMounted){let{next:H,bu:Y,u:Z,parent:ue,vnode:Ie}=T;{const bt=Qy(T);if(bt){H&&(H.el=Ie.el,Re(T,H,q)),bt.asyncDep.then(()=>{T.isUnmounted||U()});return}}let ge=H,st;Pr(T,!1),H?(H.el=Ie.el,Re(T,H,q)):H=Ie,Y&&Wc(Y),(st=H.props&&H.props.onVnodeBeforeUpdate)&&Xt(st,ue,H,Ie),Pr(T,!0);const it=Xd(T),At=T.subTree;T.subTree=it,P(At,it,p(At.el),$n(At),T,x,L),H.el=it.el,ge===null&&$C(T,it.el),Z&&Ct(Z,x),(st=H.props&&H.props.onVnodeUpdated)&&Ct(()=>Xt(st,ue,H,Ie),x),__VUE_PROD_DEVTOOLS__&&Ty(T)}else{let H;const{el:Y,props:Z}=S,{bm:ue,m:Ie,parent:ge,root:st,type:it}=T,At=Cs(S);Pr(T,!1),ue&&Wc(ue),!At&&(H=Z&&Z.onVnodeBeforeMount)&&Xt(H,ge,S),Pr(T,!0);{st.ce&&st.ce._def.shadowRoot!==!1&&st.ce._injectChildStyle(it);const bt=T.subTree=Xd(T);P(null,bt,O,B,T,x,L),S.el=bt.el}if(Ie&&Ct(Ie,x),!At&&(H=Z&&Z.onVnodeMounted)){const bt=S;Ct(()=>Xt(H,ge,bt),x)}(S.shapeFlag&256||ge&&Cs(ge.vnode)&&ge.vnode.shapeFlag&256)&&T.a&&Ct(T.a,x),T.isMounted=!0,__VUE_PROD_DEVTOOLS__&&W0(T),S=O=B=null}};T.scope.on();const F=T.effect=new ty(U);T.scope.off();const M=T.update=F.run.bind(F),X=T.job=F.runIfDirty.bind(F);X.i=T,X.id=T.uid,F.scheduler=()=>th(X),Pr(T,!0),M()},Re=(T,S,O)=>{S.component=T;const B=T.vnode.props;T.vnode=S,T.next=null,IC(T,S.props,B,O),SC(T,S.children,O),kn(),jd(T),xn()},ye=(T,S,O,B,x,L,q,U,F=!1)=>{const M=T&&T.children,X=T?T.shapeFlag:0,H=S.children,{patchFlag:Y,shapeFlag:Z}=S;if(Y>0){if(Y&128){os(M,H,O,B,x,L,q,U,F);return}else if(Y&256){Ot(M,H,O,B,x,L,q,U,F);return}}Z&8?(X&16&&mn(M,x,L),H!==M&&f(O,H)):X&16?Z&16?os(M,H,O,B,x,L,q,U,F):mn(M,x,L,!0):(X&8&&f(O,""),Z&16&&E(H,O,B,x,L,q,U,F))},Ot=(T,S,O,B,x,L,q,U,F)=>{T=T||As,S=S||As;const M=T.length,X=S.length,H=Math.min(M,X);let Y;for(Y=0;Y<H;Y++){const Z=S[Y]=F?Yn(S[Y]):tn(S[Y]);P(T[Y],Z,O,null,x,L,q,U,F)}M>X?mn(T,x,L,!0,!1,H):E(S,O,B,x,L,q,U,F,H)},os=(T,S,O,B,x,L,q,U,F)=>{let M=0;const X=S.length;let H=T.length-1,Y=X-1;for(;M<=H&&M<=Y;){const Z=T[M],ue=S[M]=F?Yn(S[M]):tn(S[M]);if(xr(Z,ue))P(Z,ue,O,null,x,L,q,U,F);else break;M++}for(;M<=H&&M<=Y;){const Z=T[H],ue=S[Y]=F?Yn(S[Y]):tn(S[Y]);if(xr(Z,ue))P(Z,ue,O,null,x,L,q,U,F);else break;H--,Y--}if(M>H){if(M<=Y){const Z=Y+1,ue=Z<X?S[Z].el:B;for(;M<=Y;)P(null,S[M]=F?Yn(S[M]):tn(S[M]),O,ue,x,L,q,U,F),M++}}else if(M>Y)for(;M<=H;)wt(T[M],x,L,!0),M++;else{const Z=M,ue=M,Ie=new Map;for(M=ue;M<=Y;M++){const Ge=S[M]=F?Yn(S[M]):tn(S[M]);Ge.key!=null&&Ie.set(Ge.key,M)}let ge,st=0;const it=Y-ue+1;let At=!1,bt=0;const Mt=new Array(it);for(M=0;M<it;M++)Mt[M]=0;for(M=Z;M<=H;M++){const Ge=T[M];if(st>=it){wt(Ge,x,L,!0);continue}let je;if(Ge.key!=null)je=Ie.get(Ge.key);else for(ge=ue;ge<=Y;ge++)if(Mt[ge-ue]===0&&xr(Ge,S[ge])){je=ge;break}je===void 0?wt(Ge,x,L,!0):(Mt[je-ue]=M+1,je>=bt?bt=je:At=!0,P(Ge,S[je],O,null,x,L,q,U,F),st++)}const cs=At?NC(Mt):As;for(ge=cs.length-1,M=it-1;M>=0;M--){const Ge=ue+M,je=S[Ge],Zs=S[Ge+1],wr=Ge+1<X?Zs.el||Zs.placeholder:B;Mt[M]===0?P(null,je,O,wr,x,L,q,U,F):At&&(ge<0||M!==cs[ge]?Qt(je,O,wr,2):ge--)}}},Qt=(T,S,O,B,x=null)=>{const{el:L,type:q,transition:U,children:F,shapeFlag:M}=T;if(M&6){Qt(T.component.subTree,S,O,B);return}if(M&128){T.suspense.move(S,O,B);return}if(M&64){q.move(T,S,O,Ir);return}if(q===Tt){r(L,S,O);for(let H=0;H<F.length;H++)Qt(F[H],S,O,B);r(T.anchor,S,O);return}if(q===Zo){Q(T,S,O);return}if(B!==2&&M&1&&U)if(B===0)U.beforeEnter(L),r(L,S,O),Ct(()=>U.enter(L),x);else{const{leave:H,delayLeave:Y,afterLeave:Z}=U,ue=()=>{T.ctx.isUnmounted?s(L):r(L,S,O)},Ie=()=>{L._isLeaving&&L[En](!0),H(L,()=>{ue(),Z&&Z()})};Y?Y(L,ue,Ie):Ie()}else r(L,S,O)},wt=(T,S,O,B=!1,x=!1)=>{const{type:L,props:q,ref:U,children:F,dynamicChildren:M,shapeFlag:X,patchFlag:H,dirs:Y,cacheIndex:Z}=T;if(H===-2&&(x=!1),U!=null&&(kn(),Mi(U,null,O,T,!0),xn()),Z!=null&&(S.renderCache[Z]=void 0),X&256){S.ctx.deactivate(T);return}const ue=X&1&&Y,Ie=!Cs(T);let ge;if(Ie&&(ge=q&&q.onVnodeBeforeUnmount)&&Xt(ge,S,T),X&6)Ys(T.component,O,B);else{if(X&128){T.suspense.unmount(O,B);return}ue&&Rr(T,null,S,"beforeUnmount"),X&64?T.type.remove(T,S,O,Ir,B):M&&!M.hasOnce&&(L!==Tt||H>0&&H&64)?mn(M,S,O,!1,!0):(L===Tt&&H&384||!x&&X&16)&&mn(F,S,O),B&&Js(T)}(Ie&&(ge=q&&q.onVnodeUnmounted)||ue)&&Ct(()=>{ge&&Xt(ge,S,T),ue&&Rr(T,null,S,"unmounted")},O)},Js=T=>{const{type:S,el:O,anchor:B,transition:x}=T;if(S===Tt){as(O,B);return}if(S===Zo){z(T);return}const L=()=>{s(O),x&&!x.persisted&&x.afterLeave&&x.afterLeave()};if(T.shapeFlag&1&&x&&!x.persisted){const{leave:q,delayLeave:U}=x,F=()=>q(O,L);U?U(T.el,L,F):F()}else L()},as=(T,S)=>{let O;for(;T!==S;)O=g(T),s(T),T=O;s(S)},Ys=(T,S,O)=>{const{bum:B,scope:x,job:L,subTree:q,um:U,m:F,a:M}=T;Yd(F),Yd(M),B&&Wc(B),x.stop(),L&&(L.flags|=8,wt(q,T,S,O)),U&&Ct(U,S),Ct(()=>{T.isUnmounted=!0},S),__VUE_PROD_DEVTOOLS__&&G0(T)},mn=(T,S,O,B=!1,x=!1,L=0)=>{for(let q=L;q<T.length;q++)wt(T[q],S,O,B,x)},$n=T=>{if(T.shapeFlag&6)return $n(T.component.subTree);if(T.shapeFlag&128)return T.suspense.next();const S=g(T.anchor||T.el),O=S&&S[J0];return O?g(O):S};let Tr=!1;const Xs=(T,S,O)=>{T==null?S._vnode&&wt(S._vnode,null,null,!0):P(S._vnode||null,T,S,null,null,null,O),S._vnode=T,Tr||(Tr=!0,jd(),yy(),Tr=!1)},Ir={p:P,um:wt,m:Qt,r:Js,mt:me,mc:E,pc:ye,pbc:A,n:$n,o:t};return{render:Xs,hydrate:void 0,createApp:vC(Xs)}}function Zc({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Pr({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function OC(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Gy(t,e,n=!1){const r=t.children,s=e.children;if(re(r)&&re(s))for(let i=0;i<r.length;i++){const o=r[i];let c=s[i];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=s[i]=Yn(s[i]),c.el=o.el),!n&&c.patchFlag!==-2&&Gy(o,c)),c.type===yo&&c.patchFlag!==-1&&(c.el=o.el),c.type===Xe&&!c.el&&(c.el=o.el)}}function NC(t){const e=t.slice(),n=[0];let r,s,i,o,c;const l=t.length;for(r=0;r<l;r++){const h=t[r];if(h!==0){if(s=n[n.length-1],t[s]<h){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)c=i+o>>1,t[n[c]]<h?i=c+1:o=c;h<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function Qy(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Qy(e)}function Yd(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const VC=Symbol.for("v-scx"),DC=()=>fn(VC);function Ps(t,e,n){return Jy(t,e,n)}function Jy(t,e,n=Ae){const{immediate:r,deep:s,flush:i,once:o}=n,c=We({},n),l=e&&r||!e&&i!=="post";let h;if(eo){if(i==="sync"){const I=DC();h=I.__watcherHandles||(I.__watcherHandles=[])}else if(!l){const I=()=>{};return I.stop=xt,I.resume=xt,I.pause=xt,I}}const f=ft;c.call=(I,N,P)=>Kt(I,f,N,P);let p=!1;i==="post"?c.scheduler=I=>{Ct(I,f&&f.suspense)}:i!=="sync"&&(p=!0,c.scheduler=(I,N)=>{N?I():th(I)}),c.augmentJob=I=>{e&&(I.flags|=4),p&&(I.flags|=2,f&&(I.id=f.uid,I.i=f))};const g=B0(t,e,c);return eo&&(h?h.push(g):l&&g()),g}function kC(t,e,n){const r=this.proxy,s=Ne(t)?t.includes(".")?Yy(r,t):()=>r[t]:t.bind(r,r);let i;ne(e)?i=e:(i=e.handler,n=e);const o=Eo(this),c=Jy(s,i.bind(r),n);return o(),c}function Yy(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const xC=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Lt(e)}Modifiers`]||t[`${rs(e)}Modifiers`];function LC(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Ae;let s=n;const i=e.startsWith("update:"),o=i&&xC(r,e.slice(7));o&&(o.trim&&(s=n.map(f=>Ne(f)?f.trim():f)),o.number&&(s=n.map(i0))),__VUE_PROD_DEVTOOLS__&&Q0(t,e,s);let c,l=r[c=zc(e)]||r[c=zc(Lt(e))];!l&&i&&(l=r[c=zc(rs(e))]),l&&Kt(l,t,6,s);const h=r[c+"Once"];if(h){if(!t.emitted)t.emitted={};else if(t.emitted[c])return;t.emitted[c]=!0,Kt(h,t,6,s)}}const MC=new WeakMap;function Xy(t,e,n=!1){const r=__VUE_OPTIONS_API__&&n?MC:e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},c=!1;if(__VUE_OPTIONS_API__&&!ne(t)){const l=h=>{const f=Xy(h,e,!0);f&&(c=!0,We(o,f))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!c?(be(t)&&r.set(t,null),null):(re(i)?i.forEach(l=>o[l]=null):We(o,i),be(t)&&r.set(t,o),o)}function pc(t,e){return!t||!ic(e)?!1:(e=e.slice(2).replace(/Once$/,""),_e(t,e[0].toLowerCase()+e.slice(1))||_e(t,rs(e))||_e(t,e))}function Xd(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:c,emit:l,render:h,renderCache:f,props:p,data:g,setupState:I,ctx:N,inheritAttrs:P}=t,V=Ca(t);let $,K;try{if(n.shapeFlag&4){const z=s||r,ae=z;$=tn(h.call(ae,z,f,p,I,g,N)),K=c}else{const z=e;$=tn(z.length>1?z(p,{attrs:c,slots:o,emit:l}):z(p,null)),K=e.props?c:FC(c)}}catch(z){Ui.length=0,lc(z,t,1),$=et(Xe)}let Q=$;if(K&&P!==!1){const z=Object.keys(K),{shapeFlag:ae}=Q;z.length&&ae&7&&(i&&z.some(Bu)&&(K=UC(K,i)),Q=mr(Q,K,!1,!0))}return n.dirs&&(Q=mr(Q,null,!1,!0),Q.dirs=Q.dirs?Q.dirs.concat(n.dirs):n.dirs),n.transition&&Xi(Q,n.transition),$=Q,Ca(V),$}const FC=t=>{let e;for(const n in t)(n==="class"||n==="style"||ic(n))&&((e||(e={}))[n]=t[n]);return e},UC=(t,e)=>{const n={};for(const r in t)(!Bu(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function BC(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:c,patchFlag:l}=e,h=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Zd(r,o,h):!!o;if(l&8){const f=e.dynamicProps;for(let p=0;p<f.length;p++){const g=f[p];if(o[g]!==r[g]&&!pc(h,g))return!0}}}else return(s||c)&&(!c||!c.$stable)?!0:r===o?!1:r?o?Zd(r,o,h):!0:!!o;return!1}function Zd(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!pc(n,i))return!0}return!1}function $C({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const Zy=t=>t.__isSuspense;function jC(t,e){e&&e.pendingBranch?re(t)?e.effects.push(...t):e.effects.push(t):q0(t)}const Tt=Symbol.for("v-fgt"),yo=Symbol.for("v-txt"),Xe=Symbol.for("v-cmt"),Zo=Symbol.for("v-stc"),Ui=[];let Pt=null;function Je(t=!1){Ui.push(Pt=t?null:[])}function qC(){Ui.pop(),Pt=Ui[Ui.length-1]||null}let Zi=1;function Na(t,e=!1){Zi+=t,t<0&&Pt&&e&&(Pt.hasOnce=!0)}function eE(t){return t.dynamicChildren=Zi>0?Pt||As:null,qC(),Zi>0&&Pt&&Pt.push(t),t}function Ln(t,e,n,r,s,i){return eE(pn(t,e,n,r,s,i,!0))}function Xn(t,e,n,r,s){return eE(et(t,e,n,r,s,!0))}function Wr(t){return t?t.__v_isVNode===!0:!1}function xr(t,e){return t.type===e.type&&t.key===e.key}const tE=({key:t})=>t??null,ea=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Ne(t)||tt(t)||ne(t)?{i:Ze,r:t,k:e,f:!!n}:t:null);function pn(t,e=null,n=null,r=0,s=null,i=t===Tt?0:1,o=!1,c=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&tE(e),ref:e&&ea(e),scopeId:Iy,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Ze};return c?(ih(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=Ne(n)?8:16),Zi>0&&!o&&Pt&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Pt.push(l),l}const et=HC;function HC(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===ky)&&(t=Xe),Wr(t)){const c=mr(t,e,!0);return n&&ih(c,n),Zi>0&&!i&&Pt&&(c.shapeFlag&6?Pt[Pt.indexOf(t)]=c:Pt.push(c)),c.patchFlag=-2,c}if(eR(t)&&(t=t.__vccOpts),e){e=zC(e);let{class:c,style:l}=e;c&&!Ne(c)&&(e.class=Ut(c)),be(l)&&(Zu(l)&&!re(l)&&(l=We({},l)),e.style=go(l))}const o=Ne(t)?1:Zy(t)?128:Ay(t)?64:be(t)?4:ne(t)?2:0;return pn(t,e,n,r,s,o,i,!0)}function zC(t){return t?Zu(t)||jy(t)?We({},t):t:null}function mr(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:c,transition:l}=t,h=e?rE(s||{},e):s,f={__v_isVNode:!0,__v_skip:!0,type:t.type,props:h,key:h&&tE(h),ref:e&&e.ref?n&&i?re(i)?i.concat(ea(e)):[i,ea(e)]:ea(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:c,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Tt?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&mr(t.ssContent),ssFallback:t.ssFallback&&mr(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&r&&Xi(f,l.clone(f)),f}function nE(t=" ",e=0){return et(yo,null,t,e)}function Bo(t="",e=!1){return e?(Je(),Xn(Xe,null,t)):et(Xe,null,t)}function tn(t){return t==null||typeof t=="boolean"?et(Xe):re(t)?et(Tt,null,t.slice()):Wr(t)?Yn(t):et(yo,null,String(t))}function Yn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:mr(t)}function ih(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(re(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),ih(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!jy(e)?e._ctx=Ze:s===3&&Ze&&(Ze.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ne(e)?(e={default:e,_ctx:Ze},n=32):(e=String(e),r&64?(n=16,e=[nE(e)]):n=8);t.children=e,t.shapeFlag|=n}function rE(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Ut([e.class,r.class]));else if(s==="style")e.style=go([e.style,r.style]);else if(ic(s)){const i=e[s],o=r[s];o&&i!==o&&!(re(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Xt(t,e,n,r=null){Kt(t,e,7,[n,r])}const WC=Fy();let KC=0;function GC(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||WC,i={uid:KC++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new d0(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Hy(r,s),emitsOptions:Xy(r,s),emit:null,emitted:null,propsDefaults:Ae,inheritAttrs:r.inheritAttrs,ctx:Ae,data:Ae,props:Ae,attrs:Ae,slots:Ae,refs:Ae,setupState:Ae,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=LC.bind(null,i),t.ce&&t.ce(i),i}let ft=null;const gr=()=>ft||Ze;let Va,ql;{const t=Ur(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};Va=e("__VUE_INSTANCE_SETTERS__",n=>ft=n),ql=e("__VUE_SSR_SETTERS__",n=>eo=n)}const Eo=t=>{const e=ft;return Va(t),t.scope.on(),()=>{t.scope.off(),Va(e)}},ep=()=>{ft&&ft.scope.off(),Va(null)};function sE(t){return t.vnode.shapeFlag&4}let eo=!1;function QC(t,e=!1,n=!1){e&&ql(e);const{props:r,children:s}=t.vnode,i=sE(t);TC(t,r,i,e),bC(t,s,n||e);const o=i?JC(t,e):void 0;return e&&ql(!1),o}function JC(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,dC);const{setup:r}=n;if(r){kn();const s=t.setupContext=r.length>1?XC(t):null,i=Eo(t),o=_o(r,t,0,[t.props,s]),c=G_(o);if(xn(),i(),(c||t.sp)&&!Cs(t)&&Oy(t),c){if(o.then(ep,ep),e)return o.then(l=>{tp(t,l)}).catch(l=>{lc(l,t,0)});t.asyncDep=o}else tp(t,o)}else iE(t)}function tp(t,e,n){ne(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:be(e)&&(__VUE_PROD_DEVTOOLS__&&(t.devtoolsRawSetupState=e),t.setupState=my(e)),iE(t)}function iE(t,e,n){const r=t.type;if(t.render||(t.render=r.render||xt),__VUE_OPTIONS_API__){const s=Eo(t);kn();try{pC(t)}finally{xn(),s()}}}const YC={get(t,e){return ht(t,"get",""),t[e]}};function XC(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,YC),slots:t.slots,emit:t.emit,expose:e}}function mc(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(my(D0(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Fi)return Fi[n](t)},has(e,n){return n in e||n in Fi}})):t.proxy}function ZC(t,e=!0){return ne(t)?t.displayName||t.name:t.name||e&&t.__name}function eR(t){return ne(t)&&"__vccOpts"in t}const ve=(t,e)=>F0(t,e,eo);function tR(t,e,n){try{Na(-1);const r=arguments.length;return r===2?be(e)&&!re(e)?Wr(e)?et(t,null,[e]):et(t,e):et(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Wr(n)&&(n=[n]),et(t,e,n))}finally{Na(1)}}const np="3.5.24",nR=xt;/**
* @vue/runtime-dom v3.5.24
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Hl;const rp=typeof window<"u"&&window.trustedTypes;if(rp)try{Hl=rp.createPolicy("vue",{createHTML:t=>t})}catch{}const oE=Hl?t=>Hl.createHTML(t):t=>t,rR="http://www.w3.org/2000/svg",sR="http://www.w3.org/1998/Math/MathML",yn=typeof document<"u"?document:null,sp=yn&&yn.createElement("template"),iR={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?yn.createElementNS(rR,t):e==="mathml"?yn.createElementNS(sR,t):n?yn.createElement(t,{is:n}):yn.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>yn.createTextNode(t),createComment:t=>yn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>yn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{sp.innerHTML=oE(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const c=sp.content;if(r==="svg"||r==="mathml"){const l=c.firstChild;for(;l.firstChild;)c.appendChild(l.firstChild);c.removeChild(l)}e.insertBefore(c,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Qn="transition",mi="animation",to=Symbol("_vtc"),aE={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},oR=We({},by,aE),aR=t=>(t.displayName="Transition",t.props=oR,t),cE=aR((t,{slots:e})=>tR(Z0,cR(t),e)),Or=(t,e=[])=>{re(t)?t.forEach(n=>n(...e)):t&&t(...e)},ip=t=>t?re(t)?t.some(e=>e.length>1):t.length>1:!1;function cR(t){const e={};for(const v in t)v in aE||(e[v]=t[v]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:c=`${n}-enter-to`,appearFromClass:l=i,appearActiveClass:h=o,appearToClass:f=c,leaveFromClass:p=`${n}-leave-from`,leaveActiveClass:g=`${n}-leave-active`,leaveToClass:I=`${n}-leave-to`}=t,N=lR(s),P=N&&N[0],V=N&&N[1],{onBeforeEnter:$,onEnter:K,onEnterCancelled:Q,onLeave:z,onLeaveCancelled:ae,onBeforeAppear:ce=$,onAppear:b=K,onAppearCancelled:E=Q}=e,_=(v,y,me,Ke)=>{v._enterCancelled=Ke,Nr(v,y?f:c),Nr(v,y?h:o),me&&me()},A=(v,y)=>{v._isLeaving=!1,Nr(v,p),Nr(v,I),Nr(v,g),y&&y()},w=v=>(y,me)=>{const Ke=v?b:K,Le=()=>_(y,v,me);Or(Ke,[y,Le]),op(()=>{Nr(y,v?l:i),_n(y,v?f:c),ip(Ke)||ap(y,r,P,Le)})};return We(e,{onBeforeEnter(v){Or($,[v]),_n(v,i),_n(v,o)},onBeforeAppear(v){Or(ce,[v]),_n(v,l),_n(v,h)},onEnter:w(!1),onAppear:w(!0),onLeave(v,y){v._isLeaving=!0;const me=()=>A(v,y);_n(v,p),v._enterCancelled?(_n(v,g),up(v)):(up(v),_n(v,g)),op(()=>{v._isLeaving&&(Nr(v,p),_n(v,I),ip(z)||ap(v,r,V,me))}),Or(z,[v,me])},onEnterCancelled(v){_(v,!1,void 0,!0),Or(Q,[v])},onAppearCancelled(v){_(v,!0,void 0,!0),Or(E,[v])},onLeaveCancelled(v){A(v),Or(ae,[v])}})}function lR(t){if(t==null)return null;if(be(t))return[el(t.enter),el(t.leave)];{const e=el(t);return[e,e]}}function el(t){return o0(t)}function _n(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[to]||(t[to]=new Set)).add(e)}function Nr(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const n=t[to];n&&(n.delete(e),n.size||(t[to]=void 0))}function op(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let uR=0;function ap(t,e,n,r){const s=t._endId=++uR,i=()=>{s===t._endId&&r()};if(n!=null)return setTimeout(i,n);const{type:o,timeout:c,propCount:l}=hR(t,e);if(!o)return r();const h=o+"end";let f=0;const p=()=>{t.removeEventListener(h,g),i()},g=I=>{I.target===t&&++f>=l&&p()};setTimeout(()=>{f<l&&p()},c+1),t.addEventListener(h,g)}function hR(t,e){const n=window.getComputedStyle(t),r=N=>(n[N]||"").split(", "),s=r(`${Qn}Delay`),i=r(`${Qn}Duration`),o=cp(s,i),c=r(`${mi}Delay`),l=r(`${mi}Duration`),h=cp(c,l);let f=null,p=0,g=0;e===Qn?o>0&&(f=Qn,p=o,g=i.length):e===mi?h>0&&(f=mi,p=h,g=l.length):(p=Math.max(o,h),f=p>0?o>h?Qn:mi:null,g=f?f===Qn?i.length:l.length:0);const I=f===Qn&&/\b(?:transform|all)(?:,|$)/.test(r(`${Qn}Property`).toString());return{type:f,timeout:p,propCount:g,hasTransform:I}}function cp(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>lp(n)+lp(t[r])))}function lp(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function up(t){return(t?t.ownerDocument:document).body.offsetHeight}function fR(t,e,n){const r=t[to];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Da=Symbol("_vod"),lE=Symbol("_vsh"),uE={name:"show",beforeMount(t,{value:e},{transition:n}){t[Da]=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):gi(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:r}){!e!=!n&&(r?e?(r.beforeEnter(t),gi(t,!0),r.enter(t)):r.leave(t,()=>{gi(t,!1)}):gi(t,e))},beforeUnmount(t,{value:e}){gi(t,e)}};function gi(t,e){t.style.display=e?t[Da]:"none",t[lE]=!e}const dR=Symbol(""),pR=/(?:^|;)\s*display\s*:/;function mR(t,e,n){const r=t.style,s=Ne(n);let i=!1;if(n&&!s){if(e)if(Ne(e))for(const o of e.split(";")){const c=o.slice(0,o.indexOf(":")).trim();n[c]==null&&ta(r,c,"")}else for(const o in e)n[o]==null&&ta(r,o,"");for(const o in n)o==="display"&&(i=!0),ta(r,o,n[o])}else if(s){if(e!==n){const o=r[dR];o&&(n+=";"+o),r.cssText=n,i=pR.test(n)}}else e&&t.removeAttribute("style");Da in t&&(t[Da]=i?r.display:"",t[lE]&&(r.display="none"))}const hp=/\s*!important$/;function ta(t,e,n){if(re(n))n.forEach(r=>ta(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=gR(t,e);hp.test(n)?t.setProperty(rs(r),n.replace(hp,""),"important"):t[r]=n}}const fp=["Webkit","Moz","ms"],tl={};function gR(t,e){const n=tl[e];if(n)return n;let r=Lt(e);if(r!=="filter"&&r in t)return tl[e]=r;r=cc(r);for(let s=0;s<fp.length;s++){const i=fp[s]+r;if(i in t)return tl[e]=i}return e}const dp="http://www.w3.org/1999/xlink";function pp(t,e,n,r,s,i=f0(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(dp,e.slice(6,e.length)):t.setAttributeNS(dp,e,n):n==null||i&&!Y_(n)?t.removeAttribute(e):t.setAttribute(e,i?"":Un(n)?String(n):n)}function mp(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?oE(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const c=i==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(c!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Y_(n):n==null&&c==="string"?(n="",o=!0):c==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function _R(t,e,n,r){t.addEventListener(e,n,r)}function yR(t,e,n,r){t.removeEventListener(e,n,r)}const gp=Symbol("_vei");function ER(t,e,n,r,s=null){const i=t[gp]||(t[gp]={}),o=i[e];if(r&&o)o.value=r;else{const[c,l]=vR(e);if(r){const h=i[e]=wR(r,s);_R(t,c,h,l)}else o&&(yR(t,c,o,l),i[e]=void 0)}}const _p=/(?:Once|Passive|Capture)$/;function vR(t){let e;if(_p.test(t)){e={};let r;for(;r=t.match(_p);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):rs(t.slice(2)),e]}let nl=0;const TR=Promise.resolve(),IR=()=>nl||(TR.then(()=>nl=0),nl=Date.now());function wR(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Kt(AR(r,n.value),e,5,[r])};return n.value=t,n.attached=IR(),n}function AR(t,e){if(re(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const yp=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,bR=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?fR(t,r,o):e==="style"?mR(t,n,r):ic(e)?Bu(e)||ER(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):SR(t,e,r,o))?(mp(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&pp(t,e,r,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!Ne(r))?mp(t,Lt(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),pp(t,e,r,o))};function SR(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&yp(e)&&ne(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&t.tagName==="IFRAME"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return yp(e)&&Ne(n)?!1:e in t}const CR=["ctrl","shift","alt","meta"],RR={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>CR.some(n=>t[`${n}Key`]&&!e.includes(n))},PR=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const c=RR[e[o]];if(c&&c(s,e))return}return t(s,...i)})},OR=We({patchProp:bR},iR);let Ep;function NR(){return Ep||(Ep=RC(OR))}const vp=(...t)=>{NR().render(...t)},hE=Symbol(),na="el",VR="is-",Vr=(t,e,n,r,s)=>{let i=`${t}-${e}`;return n&&(i+=`-${n}`),r&&(i+=`__${r}`),s&&(i+=`--${s}`),i},fE=Symbol("namespaceContextKey"),DR=t=>{const e=t||(gr()?fn(fE,kt(na)):kt(na));return ve(()=>ie(e)||na)},oh=(t,e)=>{const n=DR(e);return{namespace:n,b:(P="")=>Vr(n.value,t,P,"",""),e:P=>P?Vr(n.value,t,"",P,""):"",m:P=>P?Vr(n.value,t,"","",P):"",be:(P,V)=>P&&V?Vr(n.value,t,P,V,""):"",em:(P,V)=>P&&V?Vr(n.value,t,"",P,V):"",bm:(P,V)=>P&&V?Vr(n.value,t,P,"",V):"",bem:(P,V,$)=>P&&V&&$?Vr(n.value,t,P,V,$):"",is:(P,...V)=>{const $=V.length>=1?V[0]:!0;return P&&$?`${VR}${P}`:""},cssVar:P=>{const V={};for(const $ in P)P[$]&&(V[`--${n.value}-${$}`]=P[$]);return V},cssVarName:P=>`--${n.value}-${P}`,cssVarBlock:P=>{const V={};for(const $ in P)P[$]&&(V[`--${n.value}-${t}-${$}`]=P[$]);return V},cssVarBlockName:P=>`--${n.value}-${t}-${P}`}};var kR=typeof global=="object"&&global&&global.Object===Object&&global,xR=typeof self=="object"&&self&&self.Object===Object&&self,ah=kR||xR||Function("return this")(),$s=ah.Symbol,dE=Object.prototype,LR=dE.hasOwnProperty,MR=dE.toString,_i=$s?$s.toStringTag:void 0;function FR(t){var e=LR.call(t,_i),n=t[_i];try{t[_i]=void 0;var r=!0}catch{}var s=MR.call(t);return r&&(e?t[_i]=n:delete t[_i]),s}var UR=Object.prototype,BR=UR.toString;function $R(t){return BR.call(t)}var jR="[object Null]",qR="[object Undefined]",Tp=$s?$s.toStringTag:void 0;function pE(t){return t==null?t===void 0?qR:jR:Tp&&Tp in Object(t)?FR(t):$R(t)}function HR(t){return t!=null&&typeof t=="object"}var zR="[object Symbol]";function ch(t){return typeof t=="symbol"||HR(t)&&pE(t)==zR}function WR(t,e){for(var n=-1,r=t==null?0:t.length,s=Array(r);++n<r;)s[n]=e(t[n],n,t);return s}var lh=Array.isArray,Ip=$s?$s.prototype:void 0,wp=Ip?Ip.toString:void 0;function mE(t){if(typeof t=="string")return t;if(lh(t))return WR(t,mE)+"";if(ch(t))return wp?wp.call(t):"";var e=t+"";return e=="0"&&1/t==-1/0?"-0":e}function gE(t){var e=typeof t;return t!=null&&(e=="object"||e=="function")}var KR="[object AsyncFunction]",GR="[object Function]",QR="[object GeneratorFunction]",JR="[object Proxy]";function YR(t){if(!gE(t))return!1;var e=pE(t);return e==GR||e==QR||e==KR||e==JR}var rl=ah["__core-js_shared__"],Ap=function(){var t=/[^.]+$/.exec(rl&&rl.keys&&rl.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();function XR(t){return!!Ap&&Ap in t}var ZR=Function.prototype,eP=ZR.toString;function tP(t){if(t!=null){try{return eP.call(t)}catch{}try{return t+""}catch{}}return""}var nP=/[\\^$.*+?()[\]{}|]/g,rP=/^\[object .+?Constructor\]$/,sP=Function.prototype,iP=Object.prototype,oP=sP.toString,aP=iP.hasOwnProperty,cP=RegExp("^"+oP.call(aP).replace(nP,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function lP(t){if(!gE(t)||XR(t))return!1;var e=YR(t)?cP:rP;return e.test(tP(t))}function uP(t,e){return t==null?void 0:t[e]}function _E(t,e){var n=uP(t,e);return lP(n)?n:void 0}function hP(t,e){return t===e||t!==t&&e!==e}var fP=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,dP=/^\w*$/;function pP(t,e){if(lh(t))return!1;var n=typeof t;return n=="number"||n=="symbol"||n=="boolean"||t==null||ch(t)?!0:dP.test(t)||!fP.test(t)||e!=null&&t in Object(e)}var no=_E(Object,"create");function mP(){this.__data__=no?no(null):{},this.size=0}function gP(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}var _P="__lodash_hash_undefined__",yP=Object.prototype,EP=yP.hasOwnProperty;function vP(t){var e=this.__data__;if(no){var n=e[t];return n===_P?void 0:n}return EP.call(e,t)?e[t]:void 0}var TP=Object.prototype,IP=TP.hasOwnProperty;function wP(t){var e=this.__data__;return no?e[t]!==void 0:IP.call(e,t)}var AP="__lodash_hash_undefined__";function bP(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=no&&e===void 0?AP:e,this}function Kr(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}Kr.prototype.clear=mP;Kr.prototype.delete=gP;Kr.prototype.get=vP;Kr.prototype.has=wP;Kr.prototype.set=bP;function SP(){this.__data__=[],this.size=0}function gc(t,e){for(var n=t.length;n--;)if(hP(t[n][0],e))return n;return-1}var CP=Array.prototype,RP=CP.splice;function PP(t){var e=this.__data__,n=gc(e,t);if(n<0)return!1;var r=e.length-1;return n==r?e.pop():RP.call(e,n,1),--this.size,!0}function OP(t){var e=this.__data__,n=gc(e,t);return n<0?void 0:e[n][1]}function NP(t){return gc(this.__data__,t)>-1}function VP(t,e){var n=this.__data__,r=gc(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this}function Qs(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}Qs.prototype.clear=SP;Qs.prototype.delete=PP;Qs.prototype.get=OP;Qs.prototype.has=NP;Qs.prototype.set=VP;var DP=_E(ah,"Map");function kP(){this.size=0,this.__data__={hash:new Kr,map:new(DP||Qs),string:new Kr}}function xP(t){var e=typeof t;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?t!=="__proto__":t===null}function _c(t,e){var n=t.__data__;return xP(e)?n[typeof e=="string"?"string":"hash"]:n.map}function LP(t){var e=_c(this,t).delete(t);return this.size-=e?1:0,e}function MP(t){return _c(this,t).get(t)}function FP(t){return _c(this,t).has(t)}function UP(t,e){var n=_c(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this}function ss(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}ss.prototype.clear=kP;ss.prototype.delete=LP;ss.prototype.get=MP;ss.prototype.has=FP;ss.prototype.set=UP;var BP="Expected a function";function uh(t,e){if(typeof t!="function"||e!=null&&typeof e!="function")throw new TypeError(BP);var n=function(){var r=arguments,s=e?e.apply(this,r):r[0],i=n.cache;if(i.has(s))return i.get(s);var o=t.apply(this,r);return n.cache=i.set(s,o)||i,o};return n.cache=new(uh.Cache||ss),n}uh.Cache=ss;var $P=500;function jP(t){var e=uh(t,function(r){return n.size===$P&&n.clear(),r}),n=e.cache;return e}var qP=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,HP=/\\(\\)?/g,zP=jP(function(t){var e=[];return t.charCodeAt(0)===46&&e.push(""),t.replace(qP,function(n,r,s,i){e.push(s?i.replace(HP,"$1"):r||n)}),e});function WP(t){return t==null?"":mE(t)}function KP(t,e){return lh(t)?t:pP(t,e)?[t]:zP(WP(t))}function GP(t){if(typeof t=="string"||ch(t))return t;var e=t+"";return e=="0"&&1/t==-1/0?"-0":e}function QP(t,e){e=KP(e,t);for(var n=0,r=e.length;t!=null&&n<r;)t=t[GP(e[n++])];return n&&n==r?t:void 0}function JP(t,e,n){var r=t==null?void 0:QP(t,e);return r===void 0?n:r}function YP(t){for(var e=-1,n=t==null?0:t.length,r={};++e<n;){var s=t[e];r[s[0]]=s[1]}return r}const XP=t=>t===void 0,sl=t=>typeof t=="boolean",Gr=t=>typeof t=="number",ZP=t=>typeof Element>"u"?!1:t instanceof Element,e1=t=>Ne(t)?!Number.isNaN(Number(t)):!1;var bp;const is=typeof window<"u",t1=t=>typeof t=="string",n1=()=>{};is&&((bp=window==null?void 0:window.navigator)!=null&&bp.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function hh(t){return typeof t=="function"?t():ie(t)}function r1(t){return t}function fh(t){return ey()?(p0(t),!0):!1}function s1(t,e=!0){gr()?dc(t):e?t():eh(t)}function i1(t,e,n={}){const{immediate:r=!0}=n,s=kt(!1);let i=null;function o(){i&&(clearTimeout(i),i=null)}function c(){s.value=!1,o()}function l(...h){o(),s.value=!0,i=setTimeout(()=>{s.value=!1,i=null,t(...h)},hh(e))}return r&&(s.value=!0,is&&l()),fh(c),{isPending:Aa(s),start:l,stop:c}}function yE(t){var e;const n=hh(t);return(e=n==null?void 0:n.$el)!=null?e:n}const EE=is?window:void 0;function o1(...t){let e,n,r,s;if(t1(t[0])||Array.isArray(t[0])?([n,r,s]=t,e=EE):[e,n,r,s]=t,!e)return n1;Array.isArray(n)||(n=[n]),Array.isArray(r)||(r=[r]);const i=[],o=()=>{i.forEach(f=>f()),i.length=0},c=(f,p,g,I)=>(f.addEventListener(p,g,I),()=>f.removeEventListener(p,g,I)),l=Ps(()=>[yE(e),hh(s)],([f,p])=>{o(),f&&i.push(...n.flatMap(g=>r.map(I=>c(f,g,I,p))))},{immediate:!0,flush:"post"}),h=()=>{l(),o()};return fh(h),h}function a1(t,e=!1){const n=kt(),r=()=>n.value=!!t();return r(),s1(r,e),n}const Sp=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Cp="__vueuse_ssr_handlers__";Sp[Cp]=Sp[Cp]||{};var Rp=Object.getOwnPropertySymbols,c1=Object.prototype.hasOwnProperty,l1=Object.prototype.propertyIsEnumerable,u1=(t,e)=>{var n={};for(var r in t)c1.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&Rp)for(var r of Rp(t))e.indexOf(r)<0&&l1.call(t,r)&&(n[r]=t[r]);return n};function h1(t,e,n={}){const r=n,{window:s=EE}=r,i=u1(r,["window"]);let o;const c=a1(()=>s&&"ResizeObserver"in s),l=()=>{o&&(o.disconnect(),o=void 0)},h=Ps(()=>yE(t),p=>{l(),c.value&&s&&p&&(o=new ResizeObserver(e),o.observe(p,i))},{immediate:!0,flush:"post"}),f=()=>{l(),h()};return fh(f),{isSupported:c,stop:f}}var Pp;(function(t){t.UP="UP",t.RIGHT="RIGHT",t.DOWN="DOWN",t.LEFT="LEFT",t.NONE="NONE"})(Pp||(Pp={}));var f1=Object.defineProperty,Op=Object.getOwnPropertySymbols,d1=Object.prototype.hasOwnProperty,p1=Object.prototype.propertyIsEnumerable,Np=(t,e,n)=>e in t?f1(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,m1=(t,e)=>{for(var n in e||(e={}))d1.call(e,n)&&Np(t,n,e[n]);if(Op)for(var n of Op(e))p1.call(e,n)&&Np(t,n,e[n]);return t};const g1={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};m1({linear:r1},g1);const Vp={current:0},Dp=kt(0),vE=2e3,kp=Symbol("elZIndexContextKey"),TE=Symbol("zIndexContextKey"),_1=t=>{const e=gr()?fn(kp,Vp):Vp,n=t||(gr()?fn(TE,void 0):void 0),r=ve(()=>{const o=ie(n);return Gr(o)?o:vE}),s=ve(()=>r.value+Dp.value),i=()=>(e.current++,Dp.value=e.current,s.value);return!is&&fn(kp),{initialZIndex:r,currentZIndex:s,nextZIndex:i}};var y1={name:"en",el:{breadcrumb:{label:"Breadcrumb"},colorpicker:{confirm:"OK",clear:"Clear",defaultLabel:"color picker",description:"current color is {color}. press enter to select a new color.",alphaLabel:"pick alpha value",alphaDescription:"alpha {alpha}, current color is {color}",hueLabel:"pick hue value",hueDescription:"hue {hue}, current color is {color}",svLabel:"pick saturation and brightness value",svDescription:"saturation {saturation}, brightness {brightness}, current color is {color}",predefineDescription:"select {value} as the color"},datepicker:{now:"Now",today:"Today",cancel:"Cancel",clear:"Clear",confirm:"OK",dateTablePrompt:"Use the arrow keys and enter to select the day of the month",monthTablePrompt:"Use the arrow keys and enter to select the month",yearTablePrompt:"Use the arrow keys and enter to select the year",selectedDate:"Selected date",selectDate:"Select date",selectTime:"Select time",startDate:"Start Date",startTime:"Start Time",endDate:"End Date",endTime:"End Time",prevYear:"Previous Year",nextYear:"Next Year",prevMonth:"Previous Month",nextMonth:"Next Month",year:"",month1:"January",month2:"February",month3:"March",month4:"April",month5:"May",month6:"June",month7:"July",month8:"August",month9:"September",month10:"October",month11:"November",month12:"December",weeks:{sun:"Sun",mon:"Mon",tue:"Tue",wed:"Wed",thu:"Thu",fri:"Fri",sat:"Sat"},weeksFull:{sun:"Sunday",mon:"Monday",tue:"Tuesday",wed:"Wednesday",thu:"Thursday",fri:"Friday",sat:"Saturday"},months:{jan:"Jan",feb:"Feb",mar:"Mar",apr:"Apr",may:"May",jun:"Jun",jul:"Jul",aug:"Aug",sep:"Sep",oct:"Oct",nov:"Nov",dec:"Dec"}},inputNumber:{decrease:"decrease number",increase:"increase number"},select:{loading:"Loading",noMatch:"No matching data",noData:"No data",placeholder:"Select"},mention:{loading:"Loading"},dropdown:{toggleDropdown:"Toggle Dropdown"},cascader:{noMatch:"No matching data",loading:"Loading",placeholder:"Select",noData:"No data"},pagination:{goto:"Go to",pagesize:"/page",total:"Total {total}",pageClassifier:"",page:"Page",prev:"Go to previous page",next:"Go to next page",currentPage:"page {pager}",prevPages:"Previous {pager} pages",nextPages:"Next {pager} pages",deprecationWarning:"Deprecated usages detected, please refer to the el-pagination documentation for more details"},dialog:{close:"Close this dialog"},drawer:{close:"Close this dialog"},messagebox:{title:"Message",confirm:"OK",cancel:"Cancel",error:"Illegal input",close:"Close this dialog"},upload:{deleteTip:"press delete to remove",delete:"Delete",preview:"Preview",continue:"Continue"},slider:{defaultLabel:"slider between {min} and {max}",defaultRangeStartLabel:"pick start value",defaultRangeEndLabel:"pick end value"},table:{emptyText:"No Data",confirmFilter:"Confirm",resetFilter:"Reset",clearFilter:"All",sumText:"Sum"},tour:{next:"Next",previous:"Previous",finish:"Finish",close:"Close this dialog"},tree:{emptyText:"No Data"},transfer:{noMatch:"No matching data",noData:"No data",titles:["List 1","List 2"],filterPlaceholder:"Enter keyword",noCheckedFormat:"{total} items",hasCheckedFormat:"{checked}/{total} checked"},image:{error:"FAILED"},pageHeader:{title:"Back"},popconfirm:{confirmButtonText:"Yes",cancelButtonText:"No"},carousel:{leftArrow:"Carousel arrow left",rightArrow:"Carousel arrow right",indicator:"Carousel switch to index {index}"}}};const E1=t=>(e,n)=>v1(e,n,ie(t)),v1=(t,e,n)=>JP(n,t,t).replace(/\{(\w+)\}/g,(r,s)=>{var i;return`${(i=e==null?void 0:e[s])!=null?i:`{${s}}`}`}),T1=t=>{const e=ve(()=>ie(t).name),n=tt(t)?t:kt(t);return{lang:e,locale:n,t:E1(t)}},IE=Symbol("localeContextKey"),I1=t=>{const e=t||fn(IE,kt());return T1(ve(()=>e.value||y1))},wE="__epPropKey",Qr=t=>t,w1=t=>be(t)&&!!t[wE],AE=(t,e)=>{if(!be(t)||w1(t))return t;const{values:n,required:r,default:s,type:i,validator:o}=t,l={type:i,required:!!r,validator:n||o?h=>{let f=!1,p=[];if(n&&(p=Array.from(n),_e(t,"default")&&p.push(s),f||(f=p.includes(h))),o&&(f||(f=o(h))),!f&&p.length>0){const g=[...new Set(p)].map(I=>JSON.stringify(I)).join(", ");nR(`Invalid prop: validation failed${e?` for prop "${e}"`:""}. Expected one of [${g}], got value ${JSON.stringify(h)}.`)}return f}:void 0,[wE]:!0};return _e(t,"default")&&(l.default=s),l},yc=t=>YP(Object.entries(t).map(([e,n])=>[e,AE(n,e)])),A1=["","default","small","large"],AO=AE({type:String,values:A1,required:!1}),b1=Symbol("size"),S1=Symbol("emptyValuesContextKey"),bO=yc({emptyValues:Array,valueOnClear:{type:Qr([String,Number,Boolean,Function]),default:void 0,validator:t=>(t=ne(t)?t():t,re(t)?t.every(e=>!e):!t)}}),xp=t=>Object.keys(t),ka=kt();function bE(t,e=void 0){return gr()?fn(hE,ka):ka}function C1(t,e){const n=bE(),r=oh(t,ve(()=>{var c;return((c=n.value)==null?void 0:c.namespace)||na})),s=I1(ve(()=>{var c;return(c=n.value)==null?void 0:c.locale})),i=_1(ve(()=>{var c;return((c=n.value)==null?void 0:c.zIndex)||vE})),o=ve(()=>{var c;return ie(e)||((c=n.value)==null?void 0:c.size)||""});return R1(ve(()=>ie(n)||{})),{ns:r,locale:s,zIndex:i,size:o}}const R1=(t,e,n=!1)=>{var r;const s=!!gr(),i=s?bE():void 0,o=(r=void 0)!=null?r:s?Uy:void 0;if(!o)return;const c=ve(()=>{const l=ie(t);return i!=null&&i.value?P1(i.value,l):l});return o(hE,c),o(IE,ve(()=>c.value.locale)),o(fE,ve(()=>c.value.namespace)),o(TE,ve(()=>c.value.zIndex)),o(b1,{size:ve(()=>c.value.size||"")}),o(S1,ve(()=>({emptyValues:c.value.emptyValues,valueOnClear:c.value.valueOnClear}))),(n||!ka.value)&&(ka.value=c.value),c},P1=(t,e)=>{const n=[...new Set([...xp(t),...xp(e)])],r={};for(const s of n)r[s]=e[s]!==void 0?e[s]:t[s];return r};var dh=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n};function zl(t,e="px"){if(!t)return"";if(Gr(t)||e1(t))return`${t}${e}`;if(Ne(t))return t}const SE=(t,e)=>(t.install=n=>{for(const r of[t,...Object.values({})])n.component(r.name,r)},t),O1=(t,e)=>(t.install=n=>{t._context=n._context,n.config.globalProperties[e]=t},t),N1=yc({size:{type:Qr([Number,String])},color:{type:String}}),V1=Gt({name:"ElIcon",inheritAttrs:!1}),D1=Gt({...V1,props:N1,setup(t){const e=t,n=oh("icon"),r=ve(()=>{const{size:s,color:i}=e;return!s&&!i?{}:{fontSize:XP(s)?void 0:zl(s),"--color":i}});return(s,i)=>(Je(),Ln("i",rE({class:ie(n).b(),style:ie(r)},s.$attrs),[Pa(s.$slots,"default")],16))}});var k1=dh(D1,[["__file","icon.vue"]]);const Lp=SE(k1);/*! Element Plus Icons Vue v2.3.2 */var x1=Gt({name:"CircleCloseFilled",__name:"circle-close-filled",setup(t){return(e,n)=>(Je(),Ln("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},[pn("path",{fill:"currentColor",d:"M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336z"})]))}}),L1=x1,M1=Gt({name:"Close",__name:"close",setup(t){return(e,n)=>(Je(),Ln("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},[pn("path",{fill:"currentColor",d:"M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"})]))}}),F1=M1,U1=Gt({name:"InfoFilled",__name:"info-filled",setup(t){return(e,n)=>(Je(),Ln("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},[pn("path",{fill:"currentColor",d:"M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64m67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344M590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.99 12.99 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z"})]))}}),Mp=U1,B1=Gt({name:"SuccessFilled",__name:"success-filled",setup(t){return(e,n)=>(Je(),Ln("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},[pn("path",{fill:"currentColor",d:"M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.27 38.27 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336z"})]))}}),$1=B1,j1=Gt({name:"WarningFilled",__name:"warning-filled",setup(t){return(e,n)=>(Je(),Ln("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},[pn("path",{fill:"currentColor",d:"M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 192a58.43 58.43 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.43 58.43 0 0 0 512 256m0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4"})]))}}),q1=j1;const H1=Qr([String,Object,Function]),z1={Close:F1},Fp={primary:Mp,success:$1,warning:q1,error:L1,info:Mp},W1=()=>is&&/android/i.test(window.navigator.userAgent),K1=t=>t,Wl={tab:"Tab",enter:"Enter",space:"Space",left:"ArrowLeft",up:"ArrowUp",right:"ArrowRight",down:"ArrowDown",esc:"Escape",delete:"Delete",backspace:"Backspace",numpadEnter:"NumpadEnter",pageUp:"PageUp",pageDown:"PageDown",home:"Home",end:"End"},G1=t=>{if(t.code&&t.code!=="Unidentified")return t.code;const e=Q1(t);if(e){if(Object.values(Wl).includes(e))return e;switch(e){case" ":return Wl.space;default:return""}}return""},Q1=t=>{let e=t.key&&t.key!=="Unidentified"?t.key:"";if(!e&&t.type==="keyup"&&W1()){const n=t.target;e=n.value.charAt(n.selectionStart-1)}return e},J1=yc({value:{type:[String,Number],default:""},max:{type:Number,default:99},isDot:Boolean,hidden:Boolean,type:{type:String,values:["primary","success","warning","info","danger"],default:"danger"},showZero:{type:Boolean,default:!0},color:String,badgeStyle:{type:Qr([String,Object,Array])},offset:{type:Qr(Array),default:[0,0]},badgeClass:{type:String}}),Y1=Gt({name:"ElBadge"}),X1=Gt({...Y1,props:J1,setup(t,{expose:e}){const n=t,r=oh("badge"),s=ve(()=>n.isDot?"":Gr(n.value)&&Gr(n.max)?n.max<n.value?`${n.max}+`:`${n.value}`:`${n.value}`),i=ve(()=>{var o,c,l,h,f;return[{backgroundColor:n.color,marginRight:zl(-((c=(o=n.offset)==null?void 0:o[0])!=null?c:0)),marginTop:zl((h=(l=n.offset)==null?void 0:l[1])!=null?h:0)},(f=n.badgeStyle)!=null?f:{}]});return e({content:s}),(o,c)=>(Je(),Ln("div",{class:Ut(ie(r).b())},[Pa(o.$slots,"default"),et(cE,{name:`${ie(r).namespace.value}-zoom-in-center`,persisted:""},{default:Li(()=>[wy(pn("sup",{class:Ut([ie(r).e("content"),ie(r).em("content",o.type),ie(r).is("fixed",!!o.$slots.default),ie(r).is("dot",o.isDot),ie(r).is("hide-zero",!o.showZero&&o.value===0),o.badgeClass]),style:go(ie(i))},[Pa(o.$slots,"content",{value:ie(s)},()=>[nE(qu(ie(s)),1)])],6),[[uE,!o.hidden&&(ie(s)||o.isDot||o.$slots.content)]])]),_:3},8,["name"])],2))}});var Z1=dh(X1,[["__file","badge.vue"]]);const eO=SE(Z1),yt={placement:"top"},CE=["primary","success","info","warning","error"],RE=["top","top-left","top-right","bottom","bottom-left","bottom-right"],ro="top",at=K1({customClass:"",dangerouslyUseHTMLString:!1,duration:3e3,icon:void 0,id:"",message:"",onClose:void 0,showClose:!1,type:"info",plain:!1,offset:16,placement:void 0,zIndex:0,grouping:!1,repeatNum:1,appendTo:is?document.body:void 0}),tO=yc({customClass:{type:String,default:at.customClass},dangerouslyUseHTMLString:{type:Boolean,default:at.dangerouslyUseHTMLString},duration:{type:Number,default:at.duration},icon:{type:H1,default:at.icon},id:{type:String,default:at.id},message:{type:Qr([String,Object,Function]),default:at.message},onClose:{type:Qr(Function),default:at.onClose},showClose:{type:Boolean,default:at.showClose},type:{type:String,values:CE,default:at.type},plain:{type:Boolean,default:at.plain},offset:{type:Number,default:at.offset},placement:{type:String,values:RE,default:at.placement},zIndex:{type:Number,default:at.zIndex},grouping:{type:Boolean,default:at.grouping},repeatNum:{type:Number,default:at.repeatNum}}),nO={destroy:()=>!0},Ht=Yu({}),rO=t=>(Ht[t]||(Ht[t]=Yu([])),Ht[t]),sO=(t,e)=>{const n=Ht[e]||[],r=n.findIndex(o=>o.id===t),s=n[r];let i;return r>0&&(i=n[r-1]),{current:s,prev:i}},iO=(t,e)=>{const{prev:n}=sO(t,e);return n?n.vm.exposed.bottom.value:0},oO=(t,e,n)=>(Ht[n]||[]).findIndex(i=>i.id===t)>0?16:e,aO=Gt({name:"ElMessage"}),cO=Gt({...aO,props:tO,emits:nO,setup(t,{expose:e,emit:n}){const r=t,{Close:s}=z1,i=kt(!1),{ns:o,zIndex:c}=C1("message"),{currentZIndex:l,nextZIndex:h}=c,f=kt(),p=kt(!1),g=kt(0);let I;const N=ve(()=>r.type?r.type==="error"?"danger":r.type:"info"),P=ve(()=>{const v=r.type;return{[o.bm("icon",v)]:v&&Fp[v]}}),V=ve(()=>r.icon||Fp[r.type]||""),$=ve(()=>r.placement||ro),K=ve(()=>iO(r.id,$.value)),Q=ve(()=>oO(r.id,r.offset,$.value)+K.value),z=ve(()=>g.value+Q.value),ae=ve(()=>$.value.includes("left")?o.is("left"):$.value.includes("right")?o.is("right"):o.is("center")),ce=ve(()=>$.value.startsWith("top")?"top":"bottom"),b=ve(()=>({[ce.value]:`${Q.value}px`,zIndex:l.value}));function E(){r.duration!==0&&({stop:I}=i1(()=>{A()},r.duration))}function _(){I==null||I()}function A(){p.value=!1,eh(()=>{var v;i.value||((v=r.onClose)==null||v.call(r),n("destroy"))})}function w(v){G1(v)===Wl.esc&&A()}return dc(()=>{E(),h(),p.value=!0}),Ps(()=>r.repeatNum,()=>{_(),E()}),o1(document,"keydown",w),h1(f,()=>{g.value=f.value.getBoundingClientRect().height}),e({visible:p,bottom:z,close:A}),(v,y)=>(Je(),Xn(cE,{name:ie(o).b("fade"),onBeforeEnter:me=>i.value=!0,onBeforeLeave:v.onClose,onAfterLeave:me=>v.$emit("destroy"),persisted:""},{default:Li(()=>[wy(pn("div",{id:v.id,ref_key:"messageRef",ref:f,class:Ut([ie(o).b(),{[ie(o).m(v.type)]:v.type},ie(o).is("closable",v.showClose),ie(o).is("plain",v.plain),ie(o).is("bottom",ie(ce)==="bottom"),ie(ae),v.customClass]),style:go(ie(b)),role:"alert",onMouseenter:_,onMouseleave:E},[v.repeatNum>1?(Je(),Xn(ie(eO),{key:0,value:v.repeatNum,type:ie(N),class:Ut(ie(o).e("badge"))},null,8,["value","type","class"])):Bo("v-if",!0),ie(V)?(Je(),Xn(ie(Lp),{key:1,class:Ut([ie(o).e("icon"),ie(P)])},{default:Li(()=>[(Je(),Xn(hC(ie(V))))]),_:1},8,["class"])):Bo("v-if",!0),Pa(v.$slots,"default",{},()=>[v.dangerouslyUseHTMLString?(Je(),Ln(Tt,{key:1},[Bo(" Caution here, message could've been compromised, never use user's input as message "),pn("p",{class:Ut(ie(o).e("content")),innerHTML:v.message},null,10,["innerHTML"])],2112)):(Je(),Ln("p",{key:0,class:Ut(ie(o).e("content"))},qu(v.message),3))]),v.showClose?(Je(),Xn(ie(Lp),{key:2,class:Ut(ie(o).e("closeBtn")),onClick:PR(A,["stop"])},{default:Li(()=>[et(ie(s))]),_:1},8,["class","onClick"])):Bo("v-if",!0)],46,["id"]),[[uE,p.value]])]),_:3},8,["name","onBeforeEnter","onBeforeLeave","onAfterLeave"]))}});var lO=dh(cO,[["__file","message.vue"]]);let uO=1;const hO=t=>{if(!t.appendTo)t.appendTo=document.body;else if(Ne(t.appendTo)){let n=document.querySelector(t.appendTo);ZP(n)||(n=document.body),t.appendTo=n}},fO=t=>{!t.placement&&Ne(yt.placement)&&yt.placement&&(t.placement=yt.placement),t.placement||(t.placement=ro),RE.includes(t.placement)||(t.placement=ro)},PE=t=>{const e=!t||Ne(t)||Wr(t)||ne(t)?{message:t}:t,n={...at,...e};return hO(n),fO(n),sl(yt.grouping)&&!n.grouping&&(n.grouping=yt.grouping),Gr(yt.duration)&&n.duration===3e3&&(n.duration=yt.duration),Gr(yt.offset)&&n.offset===16&&(n.offset=yt.offset),sl(yt.showClose)&&!n.showClose&&(n.showClose=yt.showClose),sl(yt.plain)&&!n.plain&&(n.plain=yt.plain),n},dO=t=>{const e=t.props.placement||ro,n=Ht[e],r=n.indexOf(t);if(r===-1)return;n.splice(r,1);const{handler:s}=t;s.close()},pO=({appendTo:t,...e},n)=>{const r=`message_${uO++}`,s=e.onClose,i=document.createElement("div"),o={...e,id:r,onClose:()=>{s==null||s(),dO(f)},onDestroy:()=>{vp(null,i)}},c=et(lO,o,ne(o.message)||Wr(o.message)?{default:ne(o.message)?o.message:()=>o.message}:null);c.appContext=n||Jr._context,vp(c,i),t.appendChild(i.firstElementChild);const l=c.component,f={id:r,vnode:c,vm:l,handler:{close:()=>{l.exposed.close()}},props:c.component.props};return f},Jr=(t={},e)=>{if(!is)return{close:()=>{}};const n=PE(t),r=rO(n.placement||ro);if(n.grouping&&r.length){const i=r.find(({vnode:o})=>{var c;return((c=o.props)==null?void 0:c.message)===n.message});if(i)return i.props.repeatNum+=1,i.props.type=n.type,i.handler}if(Gr(yt.max)&&r.length>=yt.max)return{close:()=>{}};const s=pO(n,e);return r.push(s),s.handler};CE.forEach(t=>{Jr[t]=(e={},n)=>{const r=PE(e);return Jr({...r,type:t},n)}});function mO(t){for(const e in Ht)if(_e(Ht,e)){const n=[...Ht[e]];for(const r of n)(!t||t===r.props.type)&&r.handler.close()}}function gO(t){if(!Ht[t])return;[...Ht[t]].forEach(n=>n.handler.close())}Jr.closeAll=mO;Jr.closeAllByPlacement=gO;Jr._context=null;const dt=O1(Jr,"$message"),_O=["rock","paper","scissors"];function yO(t,e){return t===e?"draw":{rock:"scissors",paper:"rock",scissors:"paper"}[t]===e?"player1":"player2"}async function Up(t){try{const e=ze.currentUser;if(!e)throw new Error("User not authenticated");const n=ts(vr,"games",t);return await or(n,{player1:{userId:e.uid,userName:e.displayName||"匿名1",choice:null,ready:!1},player2:{userId:null,userName:null,choice:null,ready:!1},status:"waiting",winner:null,createAt:Hg()}),n}catch(e){console.error("建立遊戲房間失敗",e)}}async function Bp(t){try{const e=ze.currentUser;if(!e)throw new Error("User not authenticated");const n=ts(vr,"games",t),r=await ga(n);if(!r.exists())throw new Error("Game room not found");const s=r.data();if(s.player1.userId===e.uid||s.player2.userId===e.uid)return dt({message:"你已在此房間號",type:"warning",customClass:"custom-message"}),n;if(s.player2.userId)throw new Error("Game room is full");return await or(n,{player2:{userId:e.uid,userName:e.displayName||"匿名2",choice:null,ready:!1},status:"playing"},{merge:!0}),n}catch(e){console.error("加入遊戲房間失敗",e),dt({message:"房間號不存在",type:"error",customClass:"custom-message"})}}async function $p(t,e){try{const n=ze.currentUser;if(!n)throw new Error("User not authenticated");if(e!==null&&!_O.includes(e))throw new Error("Invalid choice");const r=ts(vr,"games",t),s=await ga(r);if(!s.exists())throw new Error("Game room not found");const i=s.data();if(!i)throw new Error("Game data not available");const c=i.player1.userId===n.uid?"player1":"player2";if(await or(r,{[c]:{...i[c],choice:e,ready:e!==null}},{merge:!0}),e===null)return;const l=await ga(r);if(l.exists()){const h=l.data();if(h&&h.player1.choice&&h.player2.choice){const f=yO(h.player1.choice,h.player2.choice);await or(r,{status:"finished",winner:f},{merge:!0})}}}catch(n){return console.error("出拳失敗",n),"error"}}function $o(t,e){const n=ts(vr,"games",t);return $g(n,r=>{r.exists()&&e({id:r.id,...r.data()})})}async function EO(t){try{const e=ts(vr,"games",t);await or(e,{player1:{choice:null,ready:!1},player2:{choice:null,ready:!1},status:"playing",winner:null},{merge:!0})}catch(e){console.error("重置遊戲失敗",e)}}async function vO(t){try{const e=ze.currentUser;if(!e)return;const n=ts(vr,"games",t),r=await ga(n);if(!r.exists())return;const s=r.data(),i={userId:null,userName:null,choice:null,ready:!1};s.player1.userId===e.uid?s.player2.userId?await or(n,{player1:{...s.player2,ready:!1,choice:null},player2:i,status:"waiting"},{merge:!0}):await or(n,{player1:i,status:"waiting"},{merge:!0}):s.player2.userId===e.uid&&await or(n,{player2:i,status:"waiting"},{merge:!0})}catch(e){console.error("離開遊戲房間失敗",e)}}let Mr=null,_t=null,Ft=null;z_().catch(console.error);function ph(){const t=document.getElementById("messages");t&&(t.innerHTML="");const e=document.getElementById("room-id");e&&(e.value="");const n=document.getElementById("game-status");n&&(n.innerHTML=""),document.querySelectorAll(".choice-btn").forEach(f=>{f.classList.remove("selected","opponent-choice")});const r=document.getElementById("choices");r&&(r.style.display="none");const s=document.getElementById("email"),i=document.getElementById("password"),o=document.getElementById("username");s&&(s.value=""),i&&(i.value=""),o&&(o.value="");const c=document.getElementById("game-result-overlay");c&&(c.style.display="none");const l=document.getElementById("onboarding-step-1"),h=document.getElementById("onboarding-step-2");l&&(l.style.display="none"),h&&(h.style.display="none")}ZS(t=>{if(t){const e=document.getElementById("login-section"),n=document.getElementById("user-info");e&&(e.style.display="none");const r=document.getElementById("onboarding-step-1");if(r){r.style.display="flex";const i=document.getElementById("onboarding-nickname");i&&t.displayName&&(i.value=t.displayName)}const s=ze.currentUser;n&&s&&(n.textContent=`使用者${s.displayName||"匿名用戶"}`),IO(),TO(new Date)}else{const e=document.getElementById("login-section"),n=document.getElementById("game-section");e&&(e.style.display="block"),n&&(n.style.display="none"),Mr&&(Mr(),Mr=null),_t&&(_t(),_t=null),Ft=null,ph()}});const jp=document.getElementById("anonymous-login");jp&&jp.addEventListener("click",async()=>{try{await JS()}catch(t){console.error("匿名登入失敗:",t),alert("匿名登入失敗，請確認 Firebase Console 中已啟用匿名認證功能")}});const qp=document.getElementById("login-btn"),Os=document.getElementById("username"),xa=document.getElementById("email"),La=document.getElementById("password");qp&&xa&&La&&qp.addEventListener("click",async()=>{const t=xa.value,e=La.value;if(t&&e)try{await YS(t,e);const n=Os==null?void 0:Os.value;if(n&&ze.currentUser){const{updateProfile:r}=await Wp(async()=>{const{updateProfile:s}=await Promise.resolve().then(()=>q_);return{updateProfile:s}},void 0);await r(ze.currentUser,{displayName:n})}}catch(n){console.error("登入失敗:",n),n.code==="auth/invalid-credential"?dt({message:"無效的 Email 或密碼",type:"error",customClass:"custom-message"}):n.code==="auth/user-not-found"?dt({message:"找不到此 Email 的帳號",type:"error",customClass:"custom-message"}):n.code==="auth/wrong-password"?dt({message:"密碼錯誤",type:"error",customClass:"custom-message"}):dt({message:"登入失敗，請檢查 Email 和密碼",type:"error",customClass:"custom-message"})}else dt({message:"請輸入信箱和密碼",type:"error",customClass:"custom-message"})});const Hp=document.getElementById("register-btn");Hp&&xa&&La&&Hp.addEventListener("click",async()=>{const t=xa.value,e=La.value,n=(Os==null?void 0:Os.value)||void 0;if(t&&e)try{await XS(t,e,n),setTimeout(()=>{ph();const r=ze.currentUser,s=document.getElementById("user-info");s&&r&&(s.textContent=`使用者${r.displayName||n||"匿名用戶"}`)},100),alert("註冊成功！")}catch(r){console.error("註冊失敗:",r),r.code==="auth/email-already-in-use"?dt.warning({message:"此 Email 已經被使用",type:"warning",customClass:"custom-message"}):r.code==="auth/invalid-email"?dt.error({message:"無效的 Email 格式",type:"error",customClass:"custom-message"}):r.code==="auth/weak-password"?dt.error({message:"密碼太弱，請使用更強的密碼",type:"error",customClass:"custom-message"}):dt.error({message:"請檢查 Email 格式和密碼長度（至少 6 個字元）",type:"error",customClass:"custom-message"})}else dt({message:"請輸入信箱和密碼",type:"error",customClass:"custom-message"})});const zp=document.getElementById("logout-btn");zp&&zp.addEventListener("click",async()=>{try{Ft&&(await vO(Ft),Ft=null),await z_()}catch(t){console.error("登出失敗:",t)}});function TO(t){const e=document.getElementById("messages");if(!e)return;Mr&&(Mr(),Mr=null),Mr=e0(s=>{e.innerHTML="";const i=ze.currentUser;s.forEach(o=>{const c=document.createElement("div"),l=i&&o.userId===i.uid;c.className=`message ${l?"self":"other"}`;const h=o.timestamp&&typeof o.timestamp.toDate=="function"?o.timestamp.toDate():o.timestamp,f=h?new Date(h).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}):"";c.innerHTML=`
                <strong>${o.userName}</strong>
                <span>${o.text}</span>
                <small>${f}</small>
            `,e.appendChild(c)}),e.scrollTop=e.scrollHeight},t);const n=document.getElementById("send-btn"),r=document.getElementById("message-text");n&&r&&(n.onclick=async()=>{const s=r.value;s.trim()&&(await Fd(s),r.value="")},r.onkeydown=async s=>{if(s.key==="Enter"){const i=r.value;i.trim()&&(await Fd(i),r.value="")}})}function IO(){const t=document.getElementById("create-room"),e=document.getElementById("room-id"),n=document.getElementById("copy-room-btn");n&&e&&(n.onclick=()=>{e.value&&(navigator.clipboard.writeText(e.value),dt.success({message:"房間 ID 已複製",offset:window.innerHeight-100,customClass:"bottom-message"}))});const r=document.getElementById("step-1-next"),s=document.getElementById("step-2-create"),i=document.getElementById("step-2-join"),o=document.getElementById("onboarding-step-1"),c=document.getElementById("onboarding-step-2"),l=document.getElementById("game-section"),h=document.getElementById("onboarding-nickname");r&&(r.onclick=async()=>{const p=h.value.trim();if(p){if(ze.currentUser){const{updateProfile:g}=await Wp(async()=>{const{updateProfile:N}=await Promise.resolve().then(()=>q_);return{updateProfile:N}},void 0);await g(ze.currentUser,{displayName:p});const I=document.getElementById("user-info");I&&(I.textContent=`使用者：${p}`)}o&&(o.style.display="none"),c&&(c.style.display="flex")}else dt({message:"請輸入暱稱",type:"warning",offset:window.innerHeight-100,customClass:"bottom-message"})}),s&&(s.onclick=async()=>{c&&(c.style.display="none"),l&&(l.style.display="block");const p=`room-${Date.now()}`;await Up(p),Ft=p,e&&(e.value=p),n&&(n.style.display="flex");const g=document.getElementById("choices");g&&(g.style.display="block"),_t&&_t(),_t=$o(p,I=>{jo(I)})}),i&&(i.onclick=async()=>{const p=document.getElementById("step-2-room-id"),g=p==null?void 0:p.value.trim();if(g)try{await Bp(g),Ft=g,c&&(c.style.display="none"),l&&(l.style.display="block"),n&&(n.style.display="none");const I=document.getElementById("choices");I&&(I.style.display="block"),_t&&_t(),_t=$o(g,N=>{jo(N)})}catch(I){console.error(I)}else dt({message:"請輸入房間 ID",type:"warning",offset:window.innerHeight-100,customClass:"bottom-message"})}),t&&e&&(t.onclick=async()=>{const p=`room-${Date.now()}`;await Up(p),Ft=p,e.value=p,n&&(n.style.display="flex");const g=document.getElementById("choices");g&&(g.style.display="block"),_t&&_t(),_t=$o(p,I=>{jo(I)})});const f=document.getElementById("join-room");f&&e&&(f.onclick=async()=>{const p=e.value;await Bp(p),Ft=p;const g=document.getElementById("choices");g&&(g.style.display="block"),_t&&_t(),_t=$o(p,I=>{jo(I)})}),document.querySelectorAll(".choice-btn").forEach(p=>{p.onclick=async()=>{if(Ft){const g=p.dataset.choice;if(g){const I=p.classList.contains("selected");document.querySelectorAll(".choice-btn").forEach(N=>N.classList.remove("selected")),I?await $p(Ft,null):(p.classList.add("selected"),await $p(Ft,g))}}}})}function jo(t){const e=document.getElementById("game-status");if(e){const n=ze.currentUser;if(!n)return;const r=t.player1.userId===n.uid,s=r?t.player1.choice:t.player2.choice,i=r?t.player2.choice:t.player1.choice;if(document.querySelectorAll(".choice-btn").forEach(I=>{I.classList.remove("selected","opponent-choice"),t.status==="finished"&&i&&I.dataset.choice===i&&I.classList.add("opponent-choice")}),s){const I=document.querySelector(`[data-choice="${s}"]`);I&&I.classList.add("selected")}let o="";const c=document.getElementById("game-result-overlay"),l=document.getElementById("result-message"),h=document.getElementById("overlay-play-again-btn");t.status==="finished"?(t.winner==="draw"?o='<p style="color: orange; font-weight: bold;">平手！</p>':t.winner==="player1"&&r||t.winner==="player2"&&!r?o='<p style="color: green; font-weight: bold;">🎉 你贏了！</p>':o='<p style="color: red; font-weight: bold;">😢 你輸了</p>',c&&l&&(l.innerHTML=o,c.style.display="flex")):c&&(c.style.display="none"),h&&(h.onclick=async()=>{t.id&&(await EO(t.id),c&&(c.style.display="none"))});const f=r?t.player2:t.player1;if(t.status!=="waiting"&&!f.userId){dt({message:"遊戲已結束，對手已離開",type:"warning",duration:3e3,offset:window.innerHeight-100,customClass:"bottom-message"}),c&&(c.style.display="none"),alert("遊戲已結束，對手已離開"),ph();return}let p=t.player1.userName||"等待中",g=t.player2.userName||"等待玩家";p==="匿名"&&g==="匿名"&&(g="匿名2"),e.innerHTML=`
            <p>玩家1 (房主): ${p} ${t.player1.choice?"已出拳":"等待中"}</p>
            <p>玩家2: ${g} ${t.player2.choice?"已出拳":"等待中"}</p>
            ${o}
        `}}
