var Gc={exports:{}},K={};/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var Qm=Object.getOwnPropertySymbols,HT=Object.prototype.hasOwnProperty,KT=Object.prototype.propertyIsEnumerable;function GT(t){if(t==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}function QT(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de",Object.getOwnPropertyNames(t)[0]==="5")return!1;for(var e={},n=0;n<10;n++)e["_"+String.fromCharCode(n)]=n;var r=Object.getOwnPropertyNames(e).map(function(s){return e[s]});if(r.join("")!=="0123456789")return!1;var i={};return"abcdefghijklmnopqrst".split("").forEach(function(s){i[s]=s}),Object.keys(Object.assign({},i)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}var Ym=QT()?Object.assign:function(t,e){for(var n,r=GT(t),i,s=1;s<arguments.length;s++){n=Object(arguments[s]);for(var o in n)HT.call(n,o)&&(r[o]=n[o]);if(Qm){i=Qm(n);for(var a=0;a<i.length;a++)KT.call(n,i[a])&&(r[i[a]]=n[i[a]])}}return r};/** @license React v17.0.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qc=Ym,wi=60103,Jm=60106;K.Fragment=60107;K.StrictMode=60108;K.Profiler=60114;var Xm=60109,Zm=60110,eg=60112;K.Suspense=60113;var tg=60115,ng=60116;if(typeof Symbol=="function"&&Symbol.for){var Ut=Symbol.for;wi=Ut("react.element"),Jm=Ut("react.portal"),K.Fragment=Ut("react.fragment"),K.StrictMode=Ut("react.strict_mode"),K.Profiler=Ut("react.profiler"),Xm=Ut("react.provider"),Zm=Ut("react.context"),eg=Ut("react.forward_ref"),K.Suspense=Ut("react.suspense"),tg=Ut("react.memo"),ng=Ut("react.lazy")}var rg=typeof Symbol=="function"&&Symbol.iterator;function YT(t){return t===null||typeof t!="object"?null:(t=rg&&t[rg]||t["@@iterator"],typeof t=="function"?t:null)}function qs(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ig={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},sg={};function _i(t,e,n){this.props=t,this.context=e,this.refs=sg,this.updater=n||ig}_i.prototype.isReactComponent={};_i.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error(qs(85));this.updater.enqueueSetState(this,t,e,"setState")};_i.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function og(){}og.prototype=_i.prototype;function Yc(t,e,n){this.props=t,this.context=e,this.refs=sg,this.updater=n||ig}var Jc=Yc.prototype=new og;Jc.constructor=Yc;Qc(Jc,_i.prototype);Jc.isPureReactComponent=!0;var Xc={current:null},ag=Object.prototype.hasOwnProperty,ug={key:!0,ref:!0,__self:!0,__source:!0};function lg(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)ag.call(e,r)&&!ug.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var u=Array(a),l=0;l<a;l++)u[l]=arguments[l+2];i.children=u}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:wi,type:t,key:s,ref:o,props:i,_owner:Xc.current}}function JT(t,e){return{$$typeof:wi,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Zc(t){return typeof t=="object"&&t!==null&&t.$$typeof===wi}function XT(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var cg=/\/+/g;function eh(t,e){return typeof t=="object"&&t!==null&&t.key!=null?XT(""+t.key):e.toString(36)}function tu(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case wi:case Jm:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+eh(o,0):r,Array.isArray(i)?(n="",t!=null&&(n=t.replace(cg,"$&/")+"/"),tu(i,e,n,"",function(l){return l})):i!=null&&(Zc(i)&&(i=JT(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(cg,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Array.isArray(t))for(var a=0;a<t.length;a++){s=t[a];var u=r+eh(s,a);o+=tu(s,e,n,u,i)}else if(u=YT(t),typeof u=="function")for(t=u.call(t),a=0;!(s=t.next()).done;)s=s.value,u=r+eh(s,a++),o+=tu(s,e,n,u,i);else if(s==="object")throw e=""+t,Error(qs(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e));return o}function nu(t,e,n){if(t==null)return t;var r=[],i=0;return tu(t,r,"","",function(s){return e.call(n,s,i++)}),r}function ZT(t){if(t._status===-1){var e=t._result;e=e(),t._status=0,t._result=e,e.then(function(n){t._status===0&&(n=n.default,t._status=1,t._result=n)},function(n){t._status===0&&(t._status=2,t._result=n)})}if(t._status===1)return t._result;throw t._result}var hg={current:null};function hn(){var t=hg.current;if(t===null)throw Error(qs(321));return t}var e1={ReactCurrentDispatcher:hg,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:Xc,IsSomeRendererActing:{current:!1},assign:Qc};K.Children={map:nu,forEach:function(t,e,n){nu(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return nu(t,function(){e++}),e},toArray:function(t){return nu(t,function(e){return e})||[]},only:function(t){if(!Zc(t))throw Error(qs(143));return t}};K.Component=_i;K.PureComponent=Yc;K.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=e1;K.cloneElement=function(t,e,n){if(t==null)throw Error(qs(267,t));var r=Qc({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Xc.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(u in e)ag.call(e,u)&&!ug.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&a!==void 0?a[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var l=0;l<u;l++)a[l]=arguments[l+2];r.children=a}return{$$typeof:wi,type:t.type,key:i,ref:s,props:r,_owner:o}};K.createContext=function(t,e){return e===void 0&&(e=null),t={$$typeof:Zm,_calculateChangedBits:e,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null},t.Provider={$$typeof:Xm,_context:t},t.Consumer=t};K.createElement=lg;K.createFactory=function(t){var e=lg.bind(null,t);return e.type=t,e};K.createRef=function(){return{current:null}};K.forwardRef=function(t){return{$$typeof:eg,render:t}};K.isValidElement=Zc;K.lazy=function(t){return{$$typeof:ng,_payload:{_status:-1,_result:t},_init:ZT}};K.memo=function(t,e){return{$$typeof:tg,type:t,compare:e===void 0?null:e}};K.useCallback=function(t,e){return hn().useCallback(t,e)};K.useContext=function(t,e){return hn().useContext(t,e)};K.useDebugValue=function(){};K.useEffect=function(t,e){return hn().useEffect(t,e)};K.useImperativeHandle=function(t,e,n){return hn().useImperativeHandle(t,e,n)};K.useLayoutEffect=function(t,e){return hn().useLayoutEffect(t,e)};K.useMemo=function(t,e){return hn().useMemo(t,e)};K.useReducer=function(t,e,n){return hn().useReducer(t,e,n)};K.useRef=function(t){return hn().useRef(t)};K.useState=function(t){return hn().useState(t)};K.version="17.0.2";Gc.exports=K;var Er=Gc.exports,dg={exports:{}},At={},fg={exports:{}},pg={};/** @license React v0.20.2
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){var e,n,r,i;if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}if(typeof window=="undefined"||typeof MessageChannel!="function"){var u=null,l=null,c=function(){if(u!==null)try{var R=t.unstable_now();u(!0,R),u=null}catch(B){throw setTimeout(c,0),B}};e=function(R){u!==null?setTimeout(e,0,R):(u=R,setTimeout(c,0))},n=function(R,B){l=setTimeout(R,B)},r=function(){clearTimeout(l)},t.unstable_shouldYield=function(){return!1},i=t.unstable_forceFrameRate=function(){}}else{var h=window.setTimeout,d=window.clearTimeout;if(typeof console!="undefined"){var g=window.cancelAnimationFrame;typeof window.requestAnimationFrame!="function"&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"),typeof g!="function"&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills")}var y=!1,I=null,p=-1,f=5,m=0;t.unstable_shouldYield=function(){return t.unstable_now()>=m},i=function(){},t.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):f=0<R?Math.floor(1e3/R):5};var w=new MessageChannel,_=w.port2;w.port1.onmessage=function(){if(I!==null){var R=t.unstable_now();m=R+f;try{I(!0,R)?_.postMessage(null):(y=!1,I=null)}catch(B){throw _.postMessage(null),B}}else y=!1},e=function(R){I=R,y||(y=!0,_.postMessage(null))},n=function(R,B){p=h(function(){R(t.unstable_now())},B)},r=function(){d(p),p=-1}}function M(R,B){var q=R.length;R.push(B);e:for(;;){var he=q-1>>>1,Le=R[he];if(Le!==void 0&&0<V(Le,B))R[he]=B,R[q]=Le,q=he;else break e}}function C(R){return R=R[0],R===void 0?null:R}function $(R){var B=R[0];if(B!==void 0){var q=R.pop();if(q!==B){R[0]=q;e:for(var he=0,Le=R.length;he<Le;){var _r=2*(he+1)-1,Ir=R[_r],zs=_r+1,vi=R[zs];if(Ir!==void 0&&0>V(Ir,q))vi!==void 0&&0>V(vi,Ir)?(R[he]=vi,R[zs]=q,he=zs):(R[he]=Ir,R[_r]=q,he=_r);else if(vi!==void 0&&0>V(vi,q))R[he]=vi,R[zs]=q,he=zs;else break e}}return B}return null}function V(R,B){var q=R.sortIndex-B.sortIndex;return q!==0?q:R.id-B.id}var x=[],we=[],qc=1,Ct=null,Ge=3,eu=!1,wr=!1,js=!1;function Wc(R){for(var B=C(we);B!==null;){if(B.callback===null)$(we);else if(B.startTime<=R)$(we),B.sortIndex=B.expirationTime,M(x,B);else break;B=C(we)}}function Hc(R){if(js=!1,Wc(R),!wr)if(C(x)!==null)wr=!0,e(Kc);else{var B=C(we);B!==null&&n(Hc,B.startTime-R)}}function Kc(R,B){wr=!1,js&&(js=!1,r()),eu=!0;var q=Ge;try{for(Wc(B),Ct=C(x);Ct!==null&&(!(Ct.expirationTime>B)||R&&!t.unstable_shouldYield());){var he=Ct.callback;if(typeof he=="function"){Ct.callback=null,Ge=Ct.priorityLevel;var Le=he(Ct.expirationTime<=B);B=t.unstable_now(),typeof Le=="function"?Ct.callback=Le:Ct===C(x)&&$(x),Wc(B)}else $(x);Ct=C(x)}if(Ct!==null)var _r=!0;else{var Ir=C(we);Ir!==null&&n(Hc,Ir.startTime-B),_r=!1}return _r}finally{Ct=null,Ge=q,eu=!1}}var WT=i;t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(R){R.callback=null},t.unstable_continueExecution=function(){wr||eu||(wr=!0,e(Kc))},t.unstable_getCurrentPriorityLevel=function(){return Ge},t.unstable_getFirstCallbackNode=function(){return C(x)},t.unstable_next=function(R){switch(Ge){case 1:case 2:case 3:var B=3;break;default:B=Ge}var q=Ge;Ge=B;try{return R()}finally{Ge=q}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=WT,t.unstable_runWithPriority=function(R,B){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var q=Ge;Ge=R;try{return B()}finally{Ge=q}},t.unstable_scheduleCallback=function(R,B,q){var he=t.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?he+q:he):q=he,R){case 1:var Le=-1;break;case 2:Le=250;break;case 5:Le=1073741823;break;case 4:Le=1e4;break;default:Le=5e3}return Le=q+Le,R={id:qc++,callback:B,priorityLevel:R,startTime:q,expirationTime:Le,sortIndex:-1},q>he?(R.sortIndex=q,M(we,R),C(x)===null&&R===C(we)&&(js?r():js=!0,n(Hc,q-he))):(R.sortIndex=Le,M(x,R),wr||eu||(wr=!0,e(Kc))),R},t.unstable_wrapCallback=function(R){var B=Ge;return function(){var q=Ge;Ge=B;try{return R.apply(this,arguments)}finally{Ge=q}}}})(pg);fg.exports=pg;/** @license React v17.0.2
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ru=Gc.exports,ie=Ym,Se=fg.exports;function k(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}if(!ru)throw Error(k(227));var mg=new Set,Ws={};function Tr(t,e){Ii(t,e),Ii(t+"Capture",e)}function Ii(t,e){for(Ws[t]=e,t=0;t<e.length;t++)mg.add(e[t])}var dn=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"),t1=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,gg=Object.prototype.hasOwnProperty,yg={},vg={};function n1(t){return gg.call(vg,t)?!0:gg.call(yg,t)?!1:t1.test(t)?vg[t]=!0:(yg[t]=!0,!1)}function r1(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function i1(t,e,n,r){if(e===null||typeof e=="undefined"||r1(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function rt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Me={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Me[t]=new rt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Me[e]=new rt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Me[t]=new rt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Me[t]=new rt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Me[t]=new rt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Me[t]=new rt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Me[t]=new rt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Me[t]=new rt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Me[t]=new rt(t,5,!1,t.toLowerCase(),null,!1,!1)});var th=/[\-:]([a-z])/g;function nh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(th,nh);Me[e]=new rt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(th,nh);Me[e]=new rt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(th,nh);Me[e]=new rt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Me[t]=new rt(t,1,!1,t.toLowerCase(),null,!1,!1)});Me.xlinkHref=new rt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Me[t]=new rt(t,1,!1,t.toLowerCase(),null,!0,!0)});function rh(t,e,n,r){var i=Me.hasOwnProperty(e)?Me[e]:null,s=i!==null?i.type===0:r?!1:!(!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N");s||(i1(e,n,i,r)&&(n=null),r||i===null?n1(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Sr=ru.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Hs=60103,kr=60106,Dn=60107,ih=60108,Ks=60114,sh=60109,oh=60110,iu=60112,Gs=60113,su=60120,ou=60115,ah=60116,uh=60121,lh=60128,wg=60129,ch=60130,hh=60131;if(typeof Symbol=="function"&&Symbol.for){var ke=Symbol.for;Hs=ke("react.element"),kr=ke("react.portal"),Dn=ke("react.fragment"),ih=ke("react.strict_mode"),Ks=ke("react.profiler"),sh=ke("react.provider"),oh=ke("react.context"),iu=ke("react.forward_ref"),Gs=ke("react.suspense"),su=ke("react.suspense_list"),ou=ke("react.memo"),ah=ke("react.lazy"),uh=ke("react.block"),ke("react.scope"),lh=ke("react.opaque.id"),wg=ke("react.debug_trace_mode"),ch=ke("react.offscreen"),hh=ke("react.legacy_hidden")}var _g=typeof Symbol=="function"&&Symbol.iterator;function Qs(t){return t===null||typeof t!="object"?null:(t=_g&&t[_g]||t["@@iterator"],typeof t=="function"?t:null)}var dh;function Ys(t){if(dh===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);dh=e&&e[1]||""}return`
`+dh+t}var fh=!1;function au(t,e){if(!t||fh)return"";fh=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a])return`
`+i[o].replace(" at new "," at ");while(1<=o&&0<=a);break}}}finally{fh=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ys(t):""}function s1(t){switch(t.tag){case 5:return Ys(t.type);case 16:return Ys("Lazy");case 13:return Ys("Suspense");case 19:return Ys("SuspenseList");case 0:case 2:case 15:return t=au(t.type,!1),t;case 11:return t=au(t.type.render,!1),t;case 22:return t=au(t.type._render,!1),t;case 1:return t=au(t.type,!0),t;default:return""}}function Ei(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Dn:return"Fragment";case kr:return"Portal";case Ks:return"Profiler";case ih:return"StrictMode";case Gs:return"Suspense";case su:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case oh:return(t.displayName||"Context")+".Consumer";case sh:return(t._context.displayName||"Context")+".Provider";case iu:var e=t.render;return e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case ou:return Ei(t.type);case uh:return Ei(t._render);case ah:e=t._payload,t=t._init;try{return Ei(t(e))}catch{}}return null}function Pn(t){switch(typeof t){case"boolean":case"number":case"object":case"string":case"undefined":return t;default:return""}}function Ig(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function o1(t){var e=Ig(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n!="undefined"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function uu(t){t._valueTracker||(t._valueTracker=o1(t))}function Eg(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Ig(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function lu(t){if(t=t||(typeof document!="undefined"?document:void 0),typeof t=="undefined")return null;try{return t.activeElement||t.body}catch{return t.body}}function ph(t,e){var n=e.checked;return ie({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:t._wrapperState.initialChecked})}function Tg(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Pn(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Sg(t,e){e=e.checked,e!=null&&rh(t,"checked",e,!1)}function mh(t,e){Sg(t,e);var n=Pn(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?gh(t,e.type,n):e.hasOwnProperty("defaultValue")&&gh(t,e.type,Pn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function kg(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function gh(t,e,n){(e!=="number"||lu(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}function a1(t){var e="";return ru.Children.forEach(t,function(n){n!=null&&(e+=n)}),e}function yh(t,e){return t=ie({children:void 0},e),(e=a1(e.children))&&(t.children=e),t}function Ti(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Pn(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function vh(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(k(91));return ie({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Ng(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(k(92));if(Array.isArray(n)){if(!(1>=n.length))throw Error(k(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Pn(n)}}function Cg(t,e){var n=Pn(e.value),r=Pn(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Ag(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}var wh={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};function Rg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function _h(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Rg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var cu,bg=function(t){return typeof MSApp!="undefined"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!==wh.svg||"innerHTML"in t)t.innerHTML=e;else{for(cu=cu||document.createElement("div"),cu.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=cu.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Js(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Xs={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},u1=["Webkit","ms","Moz","O"];Object.keys(Xs).forEach(function(t){u1.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Xs[e]=Xs[t]})});function Dg(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Xs.hasOwnProperty(t)&&Xs[t]?(""+e).trim():e+"px"}function Pg(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Dg(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var l1=ie({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ih(t,e){if(e){if(l1[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(k(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(k(60));if(!(typeof e.dangerouslySetInnerHTML=="object"&&"__html"in e.dangerouslySetInnerHTML))throw Error(k(61))}if(e.style!=null&&typeof e.style!="object")throw Error(k(62))}}function Eh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}function Th(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Sh=null,Si=null,ki=null;function Og(t){if(t=vo(t)){if(typeof Sh!="function")throw Error(k(280));var e=t.stateNode;e&&(e=Au(e),Sh(t.stateNode,t.type,e))}}function xg(t){Si?ki?ki.push(t):ki=[t]:Si=t}function Lg(){if(Si){var t=Si,e=ki;if(ki=Si=null,Og(t),e)for(t=0;t<e.length;t++)Og(e[t])}}function kh(t,e){return t(e)}function Mg(t,e,n,r,i){return t(e,n,r,i)}function Nh(){}var $g=kh,Nr=!1,Ch=!1;function Ah(){(Si!==null||ki!==null)&&(Nh(),Lg())}function c1(t,e,n){if(Ch)return t(e,n);Ch=!0;try{return $g(t,e,n)}finally{Ch=!1,Ah()}}function Zs(t,e){var n=t.stateNode;if(n===null)return null;var r=Au(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(k(231,e,typeof n));return n}var Rh=!1;if(dn)try{var eo={};Object.defineProperty(eo,"passive",{get:function(){Rh=!0}}),window.addEventListener("test",eo,eo),window.removeEventListener("test",eo,eo)}catch{Rh=!1}function h1(t,e,n,r,i,s,o,a,u){var l=Array.prototype.slice.call(arguments,3);try{e.apply(n,l)}catch(c){this.onError(c)}}var to=!1,hu=null,du=!1,bh=null,d1={onError:function(t){to=!0,hu=t}};function f1(t,e,n,r,i,s,o,a,u){to=!1,hu=null,h1.apply(d1,arguments)}function p1(t,e,n,r,i,s,o,a,u){if(f1.apply(this,arguments),to){if(to){var l=hu;to=!1,hu=null}else throw Error(k(198));du||(du=!0,bh=l)}}function Cr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&1026)!=0&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Fg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Ug(t){if(Cr(t)!==t)throw Error(k(188))}function m1(t){var e=t.alternate;if(!e){if(e=Cr(t),e===null)throw Error(k(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Ug(i),t;if(s===r)return Ug(i),e;s=s.sibling}throw Error(k(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(k(189))}}if(n.alternate!==r)throw Error(k(190))}if(n.tag!==3)throw Error(k(188));return n.stateNode.current===n?t:e}function Vg(t){if(t=m1(t),!t)return null;for(var e=t;;){if(e.tag===5||e.tag===6)return e;if(e.child)e.child.return=e,e=e.child;else{if(e===t)break;for(;!e.sibling;){if(!e.return||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}}return null}function Bg(t,e){for(var n=t.alternate;e!==null;){if(e===t||e===n)return!0;e=e.return}return!1}var jg,Dh,zg,qg,Ph=!1,Ht=[],On=null,xn=null,Ln=null,no=new Map,ro=new Map,io=[],Wg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Oh(t,e,n,r,i){return{blockedOn:t,domEventName:e,eventSystemFlags:n|16,nativeEvent:i,targetContainers:[r]}}function Hg(t,e){switch(t){case"focusin":case"focusout":On=null;break;case"dragenter":case"dragleave":xn=null;break;case"mouseover":case"mouseout":Ln=null;break;case"pointerover":case"pointerout":no.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ro.delete(e.pointerId)}}function so(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t=Oh(e,n,r,i,s),e!==null&&(e=vo(e),e!==null&&Dh(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function g1(t,e,n,r,i){switch(e){case"focusin":return On=so(On,t,e,n,r,i),!0;case"dragenter":return xn=so(xn,t,e,n,r,i),!0;case"mouseover":return Ln=so(Ln,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return no.set(s,so(no.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,ro.set(s,so(ro.get(s)||null,t,e,n,r,i)),!0}return!1}function y1(t){var e=Ar(t.target);if(e!==null){var n=Cr(e);if(n!==null){if(e=n.tag,e===13){if(e=Fg(n),e!==null){t.blockedOn=e,qg(t.lanePriority,function(){Se.unstable_runWithPriority(t.priority,function(){zg(n)})});return}}else if(e===3&&n.stateNode.hydrate){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function fu(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Uh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n!==null)return e=vo(n),e!==null&&Dh(e),t.blockedOn=n,!1;e.shift()}return!0}function Kg(t,e,n){fu(t)&&n.delete(e)}function v1(){for(Ph=!1;0<Ht.length;){var t=Ht[0];if(t.blockedOn!==null){t=vo(t.blockedOn),t!==null&&jg(t);break}for(var e=t.targetContainers;0<e.length;){var n=Uh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n!==null){t.blockedOn=n;break}e.shift()}t.blockedOn===null&&Ht.shift()}On!==null&&fu(On)&&(On=null),xn!==null&&fu(xn)&&(xn=null),Ln!==null&&fu(Ln)&&(Ln=null),no.forEach(Kg),ro.forEach(Kg)}function oo(t,e){t.blockedOn===e&&(t.blockedOn=null,Ph||(Ph=!0,Se.unstable_scheduleCallback(Se.unstable_NormalPriority,v1)))}function Gg(t){function e(i){return oo(i,t)}if(0<Ht.length){oo(Ht[0],t);for(var n=1;n<Ht.length;n++){var r=Ht[n];r.blockedOn===t&&(r.blockedOn=null)}}for(On!==null&&oo(On,t),xn!==null&&oo(xn,t),Ln!==null&&oo(Ln,t),no.forEach(e),ro.forEach(e),n=0;n<io.length;n++)r=io[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<io.length&&(n=io[0],n.blockedOn===null);)y1(n),n.blockedOn===null&&io.shift()}function pu(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ni={animationend:pu("Animation","AnimationEnd"),animationiteration:pu("Animation","AnimationIteration"),animationstart:pu("Animation","AnimationStart"),transitionend:pu("Transition","TransitionEnd")},xh={},Qg={};dn&&(Qg=document.createElement("div").style,"AnimationEvent"in window||(delete Ni.animationend.animation,delete Ni.animationiteration.animation,delete Ni.animationstart.animation),"TransitionEvent"in window||delete Ni.transitionend.transition);function mu(t){if(xh[t])return xh[t];if(!Ni[t])return t;var e=Ni[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Qg)return xh[t]=e[n];return t}var Yg=mu("animationend"),Jg=mu("animationiteration"),Xg=mu("animationstart"),Zg=mu("transitionend"),ey=new Map,Lh=new Map,w1=["abort","abort",Yg,"animationEnd",Jg,"animationIteration",Xg,"animationStart","canplay","canPlay","canplaythrough","canPlayThrough","durationchange","durationChange","emptied","emptied","encrypted","encrypted","ended","ended","error","error","gotpointercapture","gotPointerCapture","load","load","loadeddata","loadedData","loadedmetadata","loadedMetadata","loadstart","loadStart","lostpointercapture","lostPointerCapture","playing","playing","progress","progress","seeking","seeking","stalled","stalled","suspend","suspend","timeupdate","timeUpdate",Zg,"transitionEnd","waiting","waiting"];function Mh(t,e){for(var n=0;n<t.length;n+=2){var r=t[n],i=t[n+1];i="on"+(i[0].toUpperCase()+i.slice(1)),Lh.set(r,e),ey.set(r,i),Tr(i,[r])}}var _1=Se.unstable_now;_1();var X=8;function Ci(t){if((1&t)!=0)return X=15,1;if((2&t)!=0)return X=14,2;if((4&t)!=0)return X=13,4;var e=24&t;return e!==0?(X=12,e):(t&32)!=0?(X=11,32):(e=192&t,e!==0?(X=10,e):(t&256)!=0?(X=9,256):(e=3584&t,e!==0?(X=8,e):(t&4096)!=0?(X=7,4096):(e=4186112&t,e!==0?(X=6,e):(e=62914560&t,e!==0?(X=5,e):t&67108864?(X=4,67108864):(t&134217728)!=0?(X=3,134217728):(e=805306368&t,e!==0?(X=2,e):(1073741824&t)!=0?(X=1,1073741824):(X=8,t))))))}function I1(t){switch(t){case 99:return 15;case 98:return 10;case 97:case 96:return 8;case 95:return 2;default:return 0}}function E1(t){switch(t){case 15:case 14:return 99;case 13:case 12:case 11:case 10:return 98;case 9:case 8:case 7:case 6:case 4:case 5:return 97;case 3:case 2:case 1:return 95;case 0:return 90;default:throw Error(k(358,t))}}function ao(t,e){var n=t.pendingLanes;if(n===0)return X=0;var r=0,i=0,s=t.expiredLanes,o=t.suspendedLanes,a=t.pingedLanes;if(s!==0)r=s,i=X=15;else if(s=n&134217727,s!==0){var u=s&~o;u!==0?(r=Ci(u),i=X):(a&=s,a!==0&&(r=Ci(a),i=X))}else s=n&~o,s!==0?(r=Ci(s),i=X):a!==0&&(r=Ci(a),i=X);if(r===0)return 0;if(r=31-Mn(r),r=n&((0>r?0:1<<r)<<1)-1,e!==0&&e!==r&&(e&o)==0){if(Ci(e),i<=X)return e;X=i}if(e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Mn(e),i=1<<n,r|=t[n],e&=~i;return r}function ty(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function gu(t,e){switch(t){case 15:return 1;case 14:return 2;case 12:return t=Ai(24&~e),t===0?gu(10,e):t;case 10:return t=Ai(192&~e),t===0?gu(8,e):t;case 8:return t=Ai(3584&~e),t===0&&(t=Ai(4186112&~e),t===0&&(t=512)),t;case 2:return e=Ai(805306368&~e),e===0&&(e=268435456),e}throw Error(k(358,t))}function Ai(t){return t&-t}function $h(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function yu(t,e,n){t.pendingLanes|=e;var r=e-1;t.suspendedLanes&=r,t.pingedLanes&=r,t=t.eventTimes,e=31-Mn(e),t[e]=n}var Mn=Math.clz32?Math.clz32:k1,T1=Math.log,S1=Math.LN2;function k1(t){return t===0?32:31-(T1(t)/S1|0)|0}var N1=Se.unstable_UserBlockingPriority,C1=Se.unstable_runWithPriority,vu=!0;function A1(t,e,n,r){Nr||Nh();var i=Fh,s=Nr;Nr=!0;try{Mg(i,t,e,n,r)}finally{(Nr=s)||Ah()}}function R1(t,e,n,r){C1(N1,Fh.bind(null,t,e,n,r))}function Fh(t,e,n,r){if(vu){var i;if((i=(e&4)==0)&&0<Ht.length&&-1<Wg.indexOf(t))t=Oh(null,t,e,n,r),Ht.push(t);else{var s=Uh(t,e,n,r);if(s===null)i&&Hg(t,r);else{if(i){if(-1<Wg.indexOf(t)){t=Oh(s,t,e,n,r),Ht.push(t);return}if(g1(s,t,e,n,r))return;Hg(t,r)}Dy(t,e,r,null,n)}}}}function Uh(t,e,n,r){var i=Th(r);if(i=Ar(i),i!==null){var s=Cr(i);if(s===null)i=null;else{var o=s.tag;if(o===13){if(i=Fg(s),i!==null)return i;i=null}else if(o===3){if(s.stateNode.hydrate)return s.tag===3?s.stateNode.containerInfo:null;i=null}else s!==i&&(i=null)}}return Dy(t,e,r,i,n),null}var $n=null,Vh=null,wu=null;function ny(){if(wu)return wu;var t,e=Vh,n=e.length,r,i="value"in $n?$n.value:$n.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return wu=i.slice(t,1<r?1-r:void 0)}function _u(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Iu(){return!0}function ry(){return!1}function wt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Iu:ry,this.isPropagationStopped=ry,this}return ie(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Iu)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Iu)},persist:function(){},isPersistent:Iu}),e}var Ri={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Bh=wt(Ri),uo=ie({},Ri,{view:0,detail:0}),b1=wt(uo),jh,zh,lo,Eu=ie({},uo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Wh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==lo&&(lo&&t.type==="mousemove"?(jh=t.screenX-lo.screenX,zh=t.screenY-lo.screenY):zh=jh=0,lo=t),jh)},movementY:function(t){return"movementY"in t?t.movementY:zh}}),iy=wt(Eu),D1=ie({},Eu,{dataTransfer:0}),P1=wt(D1),O1=ie({},uo,{relatedTarget:0}),qh=wt(O1),x1=ie({},Ri,{animationName:0,elapsedTime:0,pseudoElement:0}),L1=wt(x1),M1=ie({},Ri,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),$1=wt(M1),F1=ie({},Ri,{data:0}),sy=wt(F1),U1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},V1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},B1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function j1(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=B1[t])?!!e[t]:!1}function Wh(){return j1}var z1=ie({},uo,{key:function(t){if(t.key){var e=U1[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=_u(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?V1[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Wh,charCode:function(t){return t.type==="keypress"?_u(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?_u(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),q1=wt(z1),W1=ie({},Eu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),oy=wt(W1),H1=ie({},uo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Wh}),K1=wt(H1),G1=ie({},Ri,{propertyName:0,elapsedTime:0,pseudoElement:0}),Q1=wt(G1),Y1=ie({},Eu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),J1=wt(Y1),X1=[9,13,27,32],Hh=dn&&"CompositionEvent"in window,co=null;dn&&"documentMode"in document&&(co=document.documentMode);var Z1=dn&&"TextEvent"in window&&!co,ay=dn&&(!Hh||co&&8<co&&11>=co),uy=String.fromCharCode(32),ly=!1;function cy(t,e){switch(t){case"keyup":return X1.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function hy(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var bi=!1;function eS(t,e){switch(t){case"compositionend":return hy(e);case"keypress":return e.which!==32?null:(ly=!0,uy);case"textInput":return t=e.data,t===uy&&ly?null:t;default:return null}}function tS(t,e){if(bi)return t==="compositionend"||!Hh&&cy(t,e)?(t=ny(),wu=Vh=$n=null,bi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return ay&&e.locale!=="ko"?null:e.data;default:return null}}var nS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function dy(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!nS[t.type]:e==="textarea"}function fy(t,e,n,r){xg(r),e=Su(e,"onChange"),0<e.length&&(n=new Bh("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var ho=null,fo=null;function rS(t){Ny(t,0)}function Tu(t){var e=Li(t);if(Eg(e))return t}function iS(t,e){if(t==="change")return e}var py=!1;if(dn){var Kh;if(dn){var Gh="oninput"in document;if(!Gh){var my=document.createElement("div");my.setAttribute("oninput","return;"),Gh=typeof my.oninput=="function"}Kh=Gh}else Kh=!1;py=Kh&&(!document.documentMode||9<document.documentMode)}function gy(){ho&&(ho.detachEvent("onpropertychange",yy),fo=ho=null)}function yy(t){if(t.propertyName==="value"&&Tu(fo)){var e=[];if(fy(e,fo,t,Th(t)),t=rS,Nr)t(e);else{Nr=!0;try{kh(t,e)}finally{Nr=!1,Ah()}}}}function sS(t,e,n){t==="focusin"?(gy(),ho=e,fo=n,ho.attachEvent("onpropertychange",yy)):t==="focusout"&&gy()}function oS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Tu(fo)}function aS(t,e){if(t==="click")return Tu(e)}function uS(t,e){if(t==="input"||t==="change")return Tu(e)}function lS(t,e){return t===e&&(t!==0||1/t==1/e)||t!==t&&e!==e}var Rt=typeof Object.is=="function"?Object.is:lS,cS=Object.prototype.hasOwnProperty;function po(t,e){if(Rt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++)if(!cS.call(e,n[r])||!Rt(t[n[r]],e[n[r]]))return!1;return!0}function vy(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function wy(t,e){var n=vy(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=vy(n)}}function _y(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?_y(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Iy(){for(var t=window,e=lu();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=lu(t.document)}return e}function Qh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var hS=dn&&"documentMode"in document&&11>=document.documentMode,Di=null,Yh=null,mo=null,Jh=!1;function Ey(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Jh||Di==null||Di!==lu(r)||(r=Di,"selectionStart"in r&&Qh(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),mo&&po(mo,r)||(mo=r,r=Su(Yh,"onSelect"),0<r.length&&(e=new Bh("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Di)))}Mh("cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "),0);Mh("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "),1);Mh(w1,2);for(var Ty="change selectionchange textInput compositionstart compositionend compositionupdate".split(" "),Xh=0;Xh<Ty.length;Xh++)Lh.set(Ty[Xh],0);Ii("onMouseEnter",["mouseout","mouseover"]);Ii("onMouseLeave",["mouseout","mouseover"]);Ii("onPointerEnter",["pointerout","pointerover"]);Ii("onPointerLeave",["pointerout","pointerover"]);Tr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Tr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Tr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Tr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Tr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Tr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var go="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Sy=new Set("cancel close invalid load scroll toggle".split(" ").concat(go));function ky(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,p1(r,e,void 0,t),t.currentTarget=null}function Ny(t,e){e=(e&4)!=0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],u=a.instance,l=a.currentTarget;if(a=a.listener,u!==s&&i.isPropagationStopped())break e;ky(i,a,l),s=u}else for(o=0;o<r.length;o++){if(a=r[o],u=a.instance,l=a.currentTarget,a=a.listener,u!==s&&i.isPropagationStopped())break e;ky(i,a,l),s=u}}}if(du)throw t=bh,du=!1,bh=null,t}function Z(t,e){var n=$y(e),r=t+"__bubble";n.has(r)||(by(e,t,2,!1),n.add(r))}var Cy="_reactListening"+Math.random().toString(36).slice(2);function Ay(t){t[Cy]||(t[Cy]=!0,mg.forEach(function(e){Sy.has(e)||Ry(e,!1,t,null),Ry(e,!0,t,null)}))}function Ry(t,e,n,r){var i=4<arguments.length&&arguments[4]!==void 0?arguments[4]:0,s=n;if(t==="selectionchange"&&n.nodeType!==9&&(s=n.ownerDocument),r!==null&&!e&&Sy.has(t)){if(t!=="scroll")return;i|=2,s=r}var o=$y(s),a=t+"__"+(e?"capture":"bubble");o.has(a)||(e&&(i|=4),by(s,t,i,e),o.add(a))}function by(t,e,n,r){var i=Lh.get(e);switch(i===void 0?2:i){case 0:i=A1;break;case 1:i=R1;break;default:i=Fh}n=i.bind(null,e,n,t),i=void 0,!Rh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Dy(t,e,n,r,i){var s=r;if((e&1)==0&&(e&2)==0&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Ar(a),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}a=a.parentNode}}r=r.return}c1(function(){var l=s,c=Th(n),h=[];e:{var d=ey.get(t);if(d!==void 0){var g=Bh,y=t;switch(t){case"keypress":if(_u(n)===0)break e;case"keydown":case"keyup":g=q1;break;case"focusin":y="focus",g=qh;break;case"focusout":y="blur",g=qh;break;case"beforeblur":case"afterblur":g=qh;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=iy;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=P1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=K1;break;case Yg:case Jg:case Xg:g=L1;break;case Zg:g=Q1;break;case"scroll":g=b1;break;case"wheel":g=J1;break;case"copy":case"cut":case"paste":g=$1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=oy}var I=(e&4)!=0,p=!I&&t==="scroll",f=I?d!==null?d+"Capture":null:d;I=[];for(var m=l,w;m!==null;){w=m;var _=w.stateNode;if(w.tag===5&&_!==null&&(w=_,f!==null&&(_=Zs(m,f),_!=null&&I.push(yo(m,_,w)))),p)break;m=m.return}0<I.length&&(d=new g(d,y,null,n,c),h.push({event:d,listeners:I}))}}if((e&7)==0){e:{if(d=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",d&&(e&16)==0&&(y=n.relatedTarget||n.fromElement)&&(Ar(y)||y[xi]))break e;if((g||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,g?(y=n.relatedTarget||n.toElement,g=l,y=y?Ar(y):null,y!==null&&(p=Cr(y),y!==p||y.tag!==5&&y.tag!==6)&&(y=null)):(g=null,y=l),g!==y)){if(I=iy,_="onMouseLeave",f="onMouseEnter",m="mouse",(t==="pointerout"||t==="pointerover")&&(I=oy,_="onPointerLeave",f="onPointerEnter",m="pointer"),p=g==null?d:Li(g),w=y==null?d:Li(y),d=new I(_,m+"leave",g,n,c),d.target=p,d.relatedTarget=w,_=null,Ar(c)===l&&(I=new I(f,m+"enter",y,n,c),I.target=w,I.relatedTarget=p,_=I),p=_,g&&y)t:{for(I=g,f=y,m=0,w=I;w;w=Pi(w))m++;for(w=0,_=f;_;_=Pi(_))w++;for(;0<m-w;)I=Pi(I),m--;for(;0<w-m;)f=Pi(f),w--;for(;m--;){if(I===f||f!==null&&I===f.alternate)break t;I=Pi(I),f=Pi(f)}I=null}else I=null;g!==null&&Py(h,d,g,I,!1),y!==null&&p!==null&&Py(h,p,y,I,!0)}}e:{if(d=l?Li(l):window,g=d.nodeName&&d.nodeName.toLowerCase(),g==="select"||g==="input"&&d.type==="file")var M=iS;else if(dy(d))if(py)M=uS;else{M=oS;var C=sS}else(g=d.nodeName)&&g.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(M=aS);if(M&&(M=M(t,l))){fy(h,M,n,c);break e}C&&C(t,d,l),t==="focusout"&&(C=d._wrapperState)&&C.controlled&&d.type==="number"&&gh(d,"number",d.value)}switch(C=l?Li(l):window,t){case"focusin":(dy(C)||C.contentEditable==="true")&&(Di=C,Yh=l,mo=null);break;case"focusout":mo=Yh=Di=null;break;case"mousedown":Jh=!0;break;case"contextmenu":case"mouseup":case"dragend":Jh=!1,Ey(h,n,c);break;case"selectionchange":if(hS)break;case"keydown":case"keyup":Ey(h,n,c)}var $;if(Hh)e:{switch(t){case"compositionstart":var V="onCompositionStart";break e;case"compositionend":V="onCompositionEnd";break e;case"compositionupdate":V="onCompositionUpdate";break e}V=void 0}else bi?cy(t,n)&&(V="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(V="onCompositionStart");V&&(ay&&n.locale!=="ko"&&(bi||V!=="onCompositionStart"?V==="onCompositionEnd"&&bi&&($=ny()):($n=c,Vh="value"in $n?$n.value:$n.textContent,bi=!0)),C=Su(l,V),0<C.length&&(V=new sy(V,t,null,n,c),h.push({event:V,listeners:C}),$?V.data=$:($=hy(n),$!==null&&(V.data=$)))),($=Z1?eS(t,n):tS(t,n))&&(l=Su(l,"onBeforeInput"),0<l.length&&(c=new sy("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:l}),c.data=$))}Ny(h,e)})}function yo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Su(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Zs(t,n),s!=null&&r.unshift(yo(t,s,i)),s=Zs(t,e),s!=null&&r.push(yo(t,s,i))),t=t.return}return r}function Pi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Py(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,u=a.alternate,l=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&l!==null&&(a=l,i?(u=Zs(n,s),u!=null&&o.unshift(yo(n,u,a))):i||(u=Zs(n,s),u!=null&&o.push(yo(n,u,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}function ku(){}var Zh=null,ed=null;function Oy(t,e){switch(t){case"button":case"input":case"select":case"textarea":return!!e.autoFocus}return!1}function td(t,e){return t==="textarea"||t==="option"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var xy=typeof setTimeout=="function"?setTimeout:void 0,dS=typeof clearTimeout=="function"?clearTimeout:void 0;function nd(t){t.nodeType===1?t.textContent="":t.nodeType===9&&(t=t.body,t!=null&&(t.textContent=""))}function Oi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break}return t}function Ly(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var rd=0;function fS(t){return{$$typeof:lh,toString:t,valueOf:t}}var Nu=Math.random().toString(36).slice(2),Fn="__reactFiber$"+Nu,Cu="__reactProps$"+Nu,xi="__reactContainer$"+Nu,My="__reactEvents$"+Nu;function Ar(t){var e=t[Fn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[xi]||n[Fn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Ly(t);t!==null;){if(n=t[Fn])return n;t=Ly(t)}return e}t=n,n=t.parentNode}return null}function vo(t){return t=t[Fn]||t[xi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Li(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(k(33))}function Au(t){return t[Cu]||null}function $y(t){var e=t[My];return e===void 0&&(e=t[My]=new Set),e}var id=[],Mi=-1;function Un(t){return{current:t}}function ee(t){0>Mi||(t.current=id[Mi],id[Mi]=null,Mi--)}function ae(t,e){Mi++,id[Mi]=t.current,t.current=e}var Vn={},Qe=Un(Vn),ht=Un(!1),Rr=Vn;function $i(t,e){var n=t.type.contextTypes;if(!n)return Vn;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function dt(t){return t=t.childContextTypes,t!=null}function Ru(){ee(ht),ee(Qe)}function Fy(t,e,n){if(Qe.current!==Vn)throw Error(k(168));ae(Qe,e),ae(ht,n)}function Uy(t,e,n){var r=t.stateNode;if(t=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(k(108,Ei(e)||"Unknown",i));return ie({},n,r)}function bu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Vn,Rr=Qe.current,ae(Qe,t),ae(ht,ht.current),!0}function Vy(t,e,n){var r=t.stateNode;if(!r)throw Error(k(169));n?(t=Uy(t,e,Rr),r.__reactInternalMemoizedMergedChildContext=t,ee(ht),ee(Qe),ae(Qe,t)):ee(ht),ae(ht,n)}var sd=null,br=null,pS=Se.unstable_runWithPriority,od=Se.unstable_scheduleCallback,ad=Se.unstable_cancelCallback,mS=Se.unstable_shouldYield,By=Se.unstable_requestPaint,ud=Se.unstable_now,gS=Se.unstable_getCurrentPriorityLevel,Du=Se.unstable_ImmediatePriority,jy=Se.unstable_UserBlockingPriority,zy=Se.unstable_NormalPriority,qy=Se.unstable_LowPriority,Wy=Se.unstable_IdlePriority,ld={},yS=By!==void 0?By:function(){},fn=null,Pu=null,cd=!1,Hy=ud(),Ye=1e4>Hy?ud:function(){return ud()-Hy};function Fi(){switch(gS()){case Du:return 99;case jy:return 98;case zy:return 97;case qy:return 96;case Wy:return 95;default:throw Error(k(332))}}function Ky(t){switch(t){case 99:return Du;case 98:return jy;case 97:return zy;case 96:return qy;case 95:return Wy;default:throw Error(k(332))}}function Dr(t,e){return t=Ky(t),pS(t,e)}function wo(t,e,n){return t=Ky(t),od(t,e,n)}function Kt(){if(Pu!==null){var t=Pu;Pu=null,ad(t)}Gy()}function Gy(){if(!cd&&fn!==null){cd=!0;var t=0;try{var e=fn;Dr(99,function(){for(;t<e.length;t++){var n=e[t];do n=n(!0);while(n!==null)}}),fn=null}catch(n){throw fn!==null&&(fn=fn.slice(t+1)),od(Du,Kt),n}finally{cd=!1}}}var vS=Sr.ReactCurrentBatchConfig;function Vt(t,e){if(t&&t.defaultProps){e=ie({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Ou=Un(null),xu=null,Ui=null,Lu=null;function hd(){Lu=Ui=xu=null}function dd(t){var e=Ou.current;ee(Ou),t.type._context._currentValue=e}function Qy(t,e){for(;t!==null;){var n=t.alternate;if((t.childLanes&e)===e){if(n===null||(n.childLanes&e)===e)break;n.childLanes|=e}else t.childLanes|=e,n!==null&&(n.childLanes|=e);t=t.return}}function Vi(t,e){xu=t,Lu=Ui=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&e)!=0&&(Bt=!0),t.firstContext=null)}function bt(t,e){if(Lu!==t&&e!==!1&&e!==0)if((typeof e!="number"||e===1073741823)&&(Lu=t,e=1073741823),e={context:t,observedBits:e,next:null},Ui===null){if(xu===null)throw Error(k(308));Ui=e,xu.dependencies={lanes:0,firstContext:e,responders:null}}else Ui=Ui.next=e;return t._currentValue}var Bn=!1;function fd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null},effects:null}}function Yy(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function jn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function zn(t,e){if(t=t.updateQueue,t!==null){t=t.shared;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}}function Jy(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function _o(t,e,n,r){var i=t.updateQueue;Bn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var u=a,l=u.next;u.next=null,o===null?s=l:o.next=l,o=u;var c=t.alternate;if(c!==null){c=c.updateQueue;var h=c.lastBaseUpdate;h!==o&&(h===null?c.firstBaseUpdate=l:h.next=l,c.lastBaseUpdate=u)}}if(s!==null){h=i.baseState,o=0,c=l=u=null;do{a=s.lane;var d=s.eventTime;if((r&a)===a){c!==null&&(c=c.next={eventTime:d,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var g=t,y=s;switch(a=e,d=n,y.tag){case 1:if(g=y.payload,typeof g=="function"){h=g.call(d,h,a);break e}h=g;break e;case 3:g.flags=g.flags&-4097|64;case 0:if(g=y.payload,a=typeof g=="function"?g.call(d,h,a):g,a==null)break e;h=ie({},h,a);break e;case 2:Bn=!0}}s.callback!==null&&(t.flags|=32,a=i.effects,a===null?i.effects=[s]:a.push(s))}else d={eventTime:d,lane:a,tag:s.tag,payload:s.payload,callback:s.callback,next:null},c===null?(l=c=d,u=h):c=c.next=d,o|=a;if(s=s.next,s===null){if(a=i.shared.pending,a===null)break;s=a.next,a.next=null,i.lastBaseUpdate=a,i.shared.pending=null}}while(1);c===null&&(u=h),i.baseState=u,i.firstBaseUpdate=l,i.lastBaseUpdate=c,Po|=o,t.lanes=o,t.memoizedState=h}}function Xy(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(k(191,i));i.call(r)}}}var Zy=new ru.Component().refs;function Mu(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ie({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var $u={isMounted:function(t){return(t=t._reactInternals)?Cr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=_t(),i=Hn(t),s=jn(r,i);s.payload=e,n!=null&&(s.callback=n),zn(t,s),Kn(t,i,r)},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=_t(),i=Hn(t),s=jn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),zn(t,s),Kn(t,i,r)},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=_t(),r=Hn(t),i=jn(n,r);i.tag=2,e!=null&&(i.callback=e),zn(t,i),Kn(t,r,n)}};function ev(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!po(n,r)||!po(i,s):!0}function tv(t,e,n){var r=!1,i=Vn,s=e.contextType;return typeof s=="object"&&s!==null?s=bt(s):(i=dt(e)?Rr:Qe.current,r=e.contextTypes,s=(r=r!=null)?$i(t,i):Vn),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=$u,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function nv(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&$u.enqueueReplaceState(e,e.state,null)}function pd(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=Zy,fd(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=bt(s):(s=dt(e)?Rr:Qe.current,i.context=$i(t,s)),_o(t,n,i,r),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Mu(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&$u.enqueueReplaceState(i,i.state,null),_o(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4)}var Fu=Array.isArray;function Io(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(k(309));var r=n.stateNode}if(!r)throw Error(k(147,t));var i=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===i?e.ref:(e=function(s){var o=r.refs;o===Zy&&(o=r.refs={}),s===null?delete o[i]:o[i]=s},e._stringRef=i,e)}if(typeof t!="string")throw Error(k(284));if(!n._owner)throw Error(k(290,t))}return t}function Uu(t,e){if(t.type!=="textarea")throw Error(k(31,Object.prototype.toString.call(e)==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":e))}function rv(t){function e(p,f){if(t){var m=p.lastEffect;m!==null?(m.nextEffect=f,p.lastEffect=f):p.firstEffect=p.lastEffect=f,f.nextEffect=null,f.flags=8}}function n(p,f){if(!t)return null;for(;f!==null;)e(p,f),f=f.sibling;return null}function r(p,f){for(p=new Map;f!==null;)f.key!==null?p.set(f.key,f):p.set(f.index,f),f=f.sibling;return p}function i(p,f){return p=Yn(p,f),p.index=0,p.sibling=null,p}function s(p,f,m){return p.index=m,t?(m=p.alternate,m!==null?(m=m.index,m<f?(p.flags=2,f):m):(p.flags=2,f)):f}function o(p){return t&&p.alternate===null&&(p.flags=2),p}function a(p,f,m,w){return f===null||f.tag!==6?(f=Yd(m,p.mode,w),f.return=p,f):(f=i(f,m),f.return=p,f)}function u(p,f,m,w){return f!==null&&f.elementType===m.type?(w=i(f,m.props),w.ref=Io(p,f,m),w.return=p,w):(w=rl(m.type,m.key,m.props,null,p.mode,w),w.ref=Io(p,f,m),w.return=p,w)}function l(p,f,m,w){return f===null||f.tag!==4||f.stateNode.containerInfo!==m.containerInfo||f.stateNode.implementation!==m.implementation?(f=Jd(m,p.mode,w),f.return=p,f):(f=i(f,m.children||[]),f.return=p,f)}function c(p,f,m,w,_){return f===null||f.tag!==7?(f=Gi(m,p.mode,w,_),f.return=p,f):(f=i(f,m),f.return=p,f)}function h(p,f,m){if(typeof f=="string"||typeof f=="number")return f=Yd(""+f,p.mode,m),f.return=p,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Hs:return m=rl(f.type,f.key,f.props,null,p.mode,m),m.ref=Io(p,null,f),m.return=p,m;case kr:return f=Jd(f,p.mode,m),f.return=p,f}if(Fu(f)||Qs(f))return f=Gi(f,p.mode,m,null),f.return=p,f;Uu(p,f)}return null}function d(p,f,m,w){var _=f!==null?f.key:null;if(typeof m=="string"||typeof m=="number")return _!==null?null:a(p,f,""+m,w);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Hs:return m.key===_?m.type===Dn?c(p,f,m.props.children,w,_):u(p,f,m,w):null;case kr:return m.key===_?l(p,f,m,w):null}if(Fu(m)||Qs(m))return _!==null?null:c(p,f,m,w,null);Uu(p,m)}return null}function g(p,f,m,w,_){if(typeof w=="string"||typeof w=="number")return p=p.get(m)||null,a(f,p,""+w,_);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Hs:return p=p.get(w.key===null?m:w.key)||null,w.type===Dn?c(f,p,w.props.children,_,w.key):u(f,p,w,_);case kr:return p=p.get(w.key===null?m:w.key)||null,l(f,p,w,_)}if(Fu(w)||Qs(w))return p=p.get(m)||null,c(f,p,w,_,null);Uu(f,w)}return null}function y(p,f,m,w){for(var _=null,M=null,C=f,$=f=0,V=null;C!==null&&$<m.length;$++){C.index>$?(V=C,C=null):V=C.sibling;var x=d(p,C,m[$],w);if(x===null){C===null&&(C=V);break}t&&C&&x.alternate===null&&e(p,C),f=s(x,f,$),M===null?_=x:M.sibling=x,M=x,C=V}if($===m.length)return n(p,C),_;if(C===null){for(;$<m.length;$++)C=h(p,m[$],w),C!==null&&(f=s(C,f,$),M===null?_=C:M.sibling=C,M=C);return _}for(C=r(p,C);$<m.length;$++)V=g(C,p,$,m[$],w),V!==null&&(t&&V.alternate!==null&&C.delete(V.key===null?$:V.key),f=s(V,f,$),M===null?_=V:M.sibling=V,M=V);return t&&C.forEach(function(we){return e(p,we)}),_}function I(p,f,m,w){var _=Qs(m);if(typeof _!="function")throw Error(k(150));if(m=_.call(m),m==null)throw Error(k(151));for(var M=_=null,C=f,$=f=0,V=null,x=m.next();C!==null&&!x.done;$++,x=m.next()){C.index>$?(V=C,C=null):V=C.sibling;var we=d(p,C,x.value,w);if(we===null){C===null&&(C=V);break}t&&C&&we.alternate===null&&e(p,C),f=s(we,f,$),M===null?_=we:M.sibling=we,M=we,C=V}if(x.done)return n(p,C),_;if(C===null){for(;!x.done;$++,x=m.next())x=h(p,x.value,w),x!==null&&(f=s(x,f,$),M===null?_=x:M.sibling=x,M=x);return _}for(C=r(p,C);!x.done;$++,x=m.next())x=g(C,p,$,x.value,w),x!==null&&(t&&x.alternate!==null&&C.delete(x.key===null?$:x.key),f=s(x,f,$),M===null?_=x:M.sibling=x,M=x);return t&&C.forEach(function(qc){return e(p,qc)}),_}return function(p,f,m,w){var _=typeof m=="object"&&m!==null&&m.type===Dn&&m.key===null;_&&(m=m.props.children);var M=typeof m=="object"&&m!==null;if(M)switch(m.$$typeof){case Hs:e:{for(M=m.key,_=f;_!==null;){if(_.key===M){switch(_.tag){case 7:if(m.type===Dn){n(p,_.sibling),f=i(_,m.props.children),f.return=p,p=f;break e}break;default:if(_.elementType===m.type){n(p,_.sibling),f=i(_,m.props),f.ref=Io(p,_,m),f.return=p,p=f;break e}}n(p,_);break}else e(p,_);_=_.sibling}m.type===Dn?(f=Gi(m.props.children,p.mode,w,m.key),f.return=p,p=f):(w=rl(m.type,m.key,m.props,null,p.mode,w),w.ref=Io(p,f,m),w.return=p,p=w)}return o(p);case kr:e:{for(_=m.key;f!==null;){if(f.key===_)if(f.tag===4&&f.stateNode.containerInfo===m.containerInfo&&f.stateNode.implementation===m.implementation){n(p,f.sibling),f=i(f,m.children||[]),f.return=p,p=f;break e}else{n(p,f);break}else e(p,f);f=f.sibling}f=Jd(m,p.mode,w),f.return=p,p=f}return o(p)}if(typeof m=="string"||typeof m=="number")return m=""+m,f!==null&&f.tag===6?(n(p,f.sibling),f=i(f,m),f.return=p,p=f):(n(p,f),f=Yd(m,p.mode,w),f.return=p,p=f),o(p);if(Fu(m))return y(p,f,m,w);if(Qs(m))return I(p,f,m,w);if(M&&Uu(p,m),typeof m=="undefined"&&!_)switch(p.tag){case 1:case 22:case 0:case 11:case 15:throw Error(k(152,Ei(p.type)||"Component"))}return n(p,f)}}var Vu=rv(!0),iv=rv(!1),Eo={},Gt=Un(Eo),To=Un(Eo),So=Un(Eo);function Pr(t){if(t===Eo)throw Error(k(174));return t}function md(t,e){switch(ae(So,e),ae(To,t),ae(Gt,Eo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:_h(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=_h(e,t)}ee(Gt),ae(Gt,e)}function Bi(){ee(Gt),ee(To),ee(So)}function sv(t){Pr(So.current);var e=Pr(Gt.current),n=_h(e,t.type);e!==n&&(ae(To,t),ae(Gt,n))}function gd(t){To.current===t&&(ee(Gt),ee(To))}var ue=Un(0);function Bu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&64)!=0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var pn=null,qn=null,Qt=!1;function ov(t,e){var n=Ot(5,null,null,0);n.elementType="DELETED",n.type="DELETED",n.stateNode=e,n.return=t,n.flags=8,t.lastEffect!==null?(t.lastEffect.nextEffect=n,t.lastEffect=n):t.firstEffect=t.lastEffect=n}function av(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,!0):!1;case 13:return!1;default:return!1}}function yd(t){if(Qt){var e=qn;if(e){var n=e;if(!av(t,e)){if(e=Oi(n.nextSibling),!e||!av(t,e)){t.flags=t.flags&-1025|2,Qt=!1,pn=t;return}ov(pn,n)}pn=t,qn=Oi(e.firstChild)}else t.flags=t.flags&-1025|2,Qt=!1,pn=t}}function uv(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;pn=t}function ju(t){if(t!==pn)return!1;if(!Qt)return uv(t),Qt=!0,!1;var e=t.type;if(t.tag!==5||e!=="head"&&e!=="body"&&!td(e,t.memoizedProps))for(e=qn;e;)ov(t,e),e=Oi(e.nextSibling);if(uv(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(k(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){qn=Oi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}qn=null}}else qn=pn?Oi(t.stateNode.nextSibling):null;return!0}function vd(){qn=pn=null,Qt=!1}var ji=[];function wd(){for(var t=0;t<ji.length;t++)ji[t]._workInProgressVersionPrimary=null;ji.length=0}var ko=Sr.ReactCurrentDispatcher,Dt=Sr.ReactCurrentBatchConfig,No=0,de=null,Je=null,$e=null,zu=!1,Co=!1;function ft(){throw Error(k(321))}function _d(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Rt(t[n],e[n]))return!1;return!0}function Id(t,e,n,r,i,s){if(No=s,de=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ko.current=t===null||t.memoizedState===null?_S:IS,t=n(r,i),Co){s=0;do{if(Co=!1,!(25>s))throw Error(k(301));s+=1,$e=Je=null,e.updateQueue=null,ko.current=ES,t=n(r,i)}while(Co)}if(ko.current=Ku,e=Je!==null&&Je.next!==null,No=0,$e=Je=de=null,zu=!1,e)throw Error(k(300));return t}function Or(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return $e===null?de.memoizedState=$e=t:$e=$e.next=t,$e}function xr(){if(Je===null){var t=de.alternate;t=t!==null?t.memoizedState:null}else t=Je.next;var e=$e===null?de.memoizedState:$e.next;if(e!==null)$e=e,Je=t;else{if(t===null)throw Error(k(310));Je=t,t={memoizedState:Je.memoizedState,baseState:Je.baseState,baseQueue:Je.baseQueue,queue:Je.queue,next:null},$e===null?de.memoizedState=$e=t:$e=$e.next=t}return $e}function Yt(t,e){return typeof e=="function"?e(t):e}function Ao(t){var e=xr(),n=e.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=t;var r=Je,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){i=i.next,r=r.baseState;var a=o=s=null,u=i;do{var l=u.lane;if((No&l)===l)a!==null&&(a=a.next={lane:0,action:u.action,eagerReducer:u.eagerReducer,eagerState:u.eagerState,next:null}),r=u.eagerReducer===t?u.eagerState:t(r,u.action);else{var c={lane:l,action:u.action,eagerReducer:u.eagerReducer,eagerState:u.eagerState,next:null};a===null?(o=a=c,s=r):a=a.next=c,de.lanes|=l,Po|=l}u=u.next}while(u!==null&&u!==i);a===null?s=r:a.next=o,Rt(r,e.memoizedState)||(Bt=!0),e.memoizedState=r,e.baseState=s,e.baseQueue=a,n.lastRenderedState=r}return[e.memoizedState,n.dispatch]}function Ro(t){var e=xr(),n=e.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Rt(s,e.memoizedState)||(Bt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function lv(t,e,n){var r=e._getVersion;r=r(e._source);var i=e._workInProgressVersionPrimary;if(i!==null?t=i===r:(t=t.mutableReadLanes,(t=(No&t)===t)&&(e._workInProgressVersionPrimary=r,ji.push(e))),t)return n(e._source);throw ji.push(e),Error(k(350))}function cv(t,e,n,r){var i=it;if(i===null)throw Error(k(349));var s=e._getVersion,o=s(e._source),a=ko.current,u=a.useState(function(){return lv(i,e,n)}),l=u[1],c=u[0];u=$e;var h=t.memoizedState,d=h.refs,g=d.getSnapshot,y=h.source;h=h.subscribe;var I=de;return t.memoizedState={refs:d,source:e,subscribe:r},a.useEffect(function(){d.getSnapshot=n,d.setSnapshot=l;var p=s(e._source);if(!Rt(o,p)){p=n(e._source),Rt(c,p)||(l(p),p=Hn(I),i.mutableReadLanes|=p&i.pendingLanes),p=i.mutableReadLanes,i.entangledLanes|=p;for(var f=i.entanglements,m=p;0<m;){var w=31-Mn(m),_=1<<w;f[w]|=p,m&=~_}}},[n,e,r]),a.useEffect(function(){return r(e._source,function(){var p=d.getSnapshot,f=d.setSnapshot;try{f(p(e._source));var m=Hn(I);i.mutableReadLanes|=m&i.pendingLanes}catch(w){f(function(){throw w})}})},[e,r]),Rt(g,n)&&Rt(y,e)&&Rt(h,r)||(t={pending:null,dispatch:null,lastRenderedReducer:Yt,lastRenderedState:c},t.dispatch=l=kd.bind(null,de,t),u.queue=t,u.baseQueue=null,c=lv(i,e,n),u.memoizedState=u.baseState=c),c}function hv(t,e,n){var r=xr();return cv(r,t,e,n)}function bo(t){var e=Or();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t=e.queue={pending:null,dispatch:null,lastRenderedReducer:Yt,lastRenderedState:t},t=t.dispatch=kd.bind(null,de,t),[e.memoizedState,t]}function qu(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=de.updateQueue,e===null?(e={lastEffect:null},de.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function dv(t){var e=Or();return t={current:t},e.memoizedState=t}function Wu(){return xr().memoizedState}function Ed(t,e,n,r){var i=Or();de.flags|=t,i.memoizedState=qu(1|e,n,void 0,r===void 0?null:r)}function Td(t,e,n,r){var i=xr();r=r===void 0?null:r;var s=void 0;if(Je!==null){var o=Je.memoizedState;if(s=o.destroy,r!==null&&_d(r,o.deps)){qu(e,n,s,r);return}}de.flags|=t,i.memoizedState=qu(1|e,n,s,r)}function fv(t,e){return Ed(516,4,t,e)}function Hu(t,e){return Td(516,4,t,e)}function pv(t,e){return Td(4,2,t,e)}function mv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function gv(t,e,n){return n=n!=null?n.concat([t]):null,Td(4,2,mv.bind(null,e,t),n)}function Sd(){}function yv(t,e){var n=xr();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&_d(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function vv(t,e){var n=xr();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&_d(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function wS(t,e){var n=Fi();Dr(98>n?98:n,function(){t(!0)}),Dr(97<n?97:n,function(){var r=Dt.transition;Dt.transition=1;try{t(!1),e()}finally{Dt.transition=r}})}function kd(t,e,n){var r=_t(),i=Hn(t),s={lane:i,action:n,eagerReducer:null,eagerState:null,next:null},o=e.pending;if(o===null?s.next=s:(s.next=o.next,o.next=s),e.pending=s,o=t.alternate,t===de||o!==null&&o===de)Co=zu=!0;else{if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var a=e.lastRenderedState,u=o(a,n);if(s.eagerReducer=o,s.eagerState=u,Rt(u,a))return}catch{}finally{}Kn(t,i,r)}}var Ku={readContext:bt,useCallback:ft,useContext:ft,useEffect:ft,useImperativeHandle:ft,useLayoutEffect:ft,useMemo:ft,useReducer:ft,useRef:ft,useState:ft,useDebugValue:ft,useDeferredValue:ft,useTransition:ft,useMutableSource:ft,useOpaqueIdentifier:ft,unstable_isNewReconciler:!1},_S={readContext:bt,useCallback:function(t,e){return Or().memoizedState=[t,e===void 0?null:e],t},useContext:bt,useEffect:fv,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ed(4,2,mv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ed(4,2,t,e)},useMemo:function(t,e){var n=Or();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Or();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t=r.queue={pending:null,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},t=t.dispatch=kd.bind(null,de,t),[r.memoizedState,t]},useRef:dv,useState:bo,useDebugValue:Sd,useDeferredValue:function(t){var e=bo(t),n=e[0],r=e[1];return fv(function(){var i=Dt.transition;Dt.transition=1;try{r(t)}finally{Dt.transition=i}},[t]),n},useTransition:function(){var t=bo(!1),e=t[0];return t=wS.bind(null,t[1]),dv(t),[t,e]},useMutableSource:function(t,e,n){var r=Or();return r.memoizedState={refs:{getSnapshot:e,setSnapshot:null},source:t,subscribe:n},cv(r,t,e,n)},useOpaqueIdentifier:function(){if(Qt){var t=!1,e=fS(function(){throw t||(t=!0,n("r:"+(rd++).toString(36))),Error(k(355))}),n=bo(e)[1];return(de.mode&2)==0&&(de.flags|=516,qu(5,function(){n("r:"+(rd++).toString(36))},void 0,null)),e}return e="r:"+(rd++).toString(36),bo(e),e},unstable_isNewReconciler:!1},IS={readContext:bt,useCallback:yv,useContext:bt,useEffect:Hu,useImperativeHandle:gv,useLayoutEffect:pv,useMemo:vv,useReducer:Ao,useRef:Wu,useState:function(){return Ao(Yt)},useDebugValue:Sd,useDeferredValue:function(t){var e=Ao(Yt),n=e[0],r=e[1];return Hu(function(){var i=Dt.transition;Dt.transition=1;try{r(t)}finally{Dt.transition=i}},[t]),n},useTransition:function(){var t=Ao(Yt)[0];return[Wu().current,t]},useMutableSource:hv,useOpaqueIdentifier:function(){return Ao(Yt)[0]},unstable_isNewReconciler:!1},ES={readContext:bt,useCallback:yv,useContext:bt,useEffect:Hu,useImperativeHandle:gv,useLayoutEffect:pv,useMemo:vv,useReducer:Ro,useRef:Wu,useState:function(){return Ro(Yt)},useDebugValue:Sd,useDeferredValue:function(t){var e=Ro(Yt),n=e[0],r=e[1];return Hu(function(){var i=Dt.transition;Dt.transition=1;try{r(t)}finally{Dt.transition=i}},[t]),n},useTransition:function(){var t=Ro(Yt)[0];return[Wu().current,t]},useMutableSource:hv,useOpaqueIdentifier:function(){return Ro(Yt)[0]},unstable_isNewReconciler:!1},TS=Sr.ReactCurrentOwner,Bt=!1;function pt(t,e,n,r){e.child=t===null?iv(e,null,n,r):Vu(e,t.child,n,r)}function wv(t,e,n,r,i){n=n.render;var s=e.ref;return Vi(e,i),r=Id(t,e,n,r,s,i),t!==null&&!Bt?(e.updateQueue=t.updateQueue,e.flags&=-517,t.lanes&=~i,mn(t,e,i)):(e.flags|=1,pt(t,e,r,i),e.child)}function _v(t,e,n,r,i,s){if(t===null){var o=n.type;return typeof o=="function"&&!Gd(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=o,Iv(t,e,o,r,i,s)):(t=rl(n.type,null,r,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}return o=t.child,(i&s)==0&&(i=o.memoizedProps,n=n.compare,n=n!==null?n:po,n(i,r)&&t.ref===e.ref)?mn(t,e,s):(e.flags|=1,t=Yn(o,r),t.ref=e.ref,t.return=e,e.child=t)}function Iv(t,e,n,r,i,s){if(t!==null&&po(t.memoizedProps,r)&&t.ref===e.ref)if(Bt=!1,(s&i)!=0)(t.flags&16384)!=0&&(Bt=!0);else return e.lanes=t.lanes,mn(t,e,s);return Cd(t,e,n,r,s)}function Nd(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden"||r.mode==="unstable-defer-without-hiding")if((e.mode&4)==0)e.memoizedState={baseLanes:0},nl(e,n);else if((n&1073741824)!=0)e.memoizedState={baseLanes:0},nl(e,s!==null?s.baseLanes:n);else return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t},nl(e,t),null;else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,nl(e,r);return pt(t,e,i,n),e.child}function Ev(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=128)}function Cd(t,e,n,r,i){var s=dt(n)?Rr:Qe.current;return s=$i(e,s),Vi(e,i),n=Id(t,e,n,r,s,i),t!==null&&!Bt?(e.updateQueue=t.updateQueue,e.flags&=-517,t.lanes&=~i,mn(t,e,i)):(e.flags|=1,pt(t,e,n,i),e.child)}function Tv(t,e,n,r,i){if(dt(n)){var s=!0;bu(e)}else s=!1;if(Vi(e,i),e.stateNode===null)t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2),tv(e,n,r),pd(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var u=o.context,l=n.contextType;typeof l=="object"&&l!==null?l=bt(l):(l=dt(n)?Rr:Qe.current,l=$i(e,l));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||u!==l)&&nv(e,o,r,l),Bn=!1;var d=e.memoizedState;o.state=d,_o(e,r,o,i),u=e.memoizedState,a!==r||d!==u||ht.current||Bn?(typeof c=="function"&&(Mu(e,n,c,r),u=e.memoizedState),(a=Bn||ev(e,n,a,r,d,u,l))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4)):(typeof o.componentDidMount=="function"&&(e.flags|=4),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=l,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4),r=!1)}else{o=e.stateNode,Yy(t,e),a=e.memoizedProps,l=e.type===e.elementType?a:Vt(e.type,a),o.props=l,h=e.pendingProps,d=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=bt(u):(u=dt(n)?Rr:Qe.current,u=$i(e,u));var g=n.getDerivedStateFromProps;(c=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==u)&&nv(e,o,r,u),Bn=!1,d=e.memoizedState,o.state=d,_o(e,r,o,i);var y=e.memoizedState;a!==h||d!==y||ht.current||Bn?(typeof g=="function"&&(Mu(e,n,g,r),y=e.memoizedState),(l=Bn||ev(e,n,l,r,d,y,u))?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=256)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=256),e.memoizedProps=r,e.memoizedState=y),o.props=r,o.state=y,o.context=u,r=l):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=256),r=!1)}return Ad(t,e,n,r,s,i)}function Ad(t,e,n,r,i,s){Ev(t,e);var o=(e.flags&64)!=0;if(!r&&!o)return i&&Vy(e,n,!1),mn(t,e,s);r=e.stateNode,TS.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Vu(e,t.child,null,s),e.child=Vu(e,null,a,s)):pt(t,e,a,s),e.memoizedState=r.state,i&&Vy(e,n,!0),e.child}function Sv(t){var e=t.stateNode;e.pendingContext?Fy(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Fy(t,e.context,!1),md(t,e.containerInfo)}var Gu={dehydrated:null,retryLane:0};function kv(t,e,n){var r=e.pendingProps,i=ue.current,s=!1,o;return(o=(e.flags&64)!=0)||(o=t!==null&&t.memoizedState===null?!1:(i&2)!=0),o?(s=!0,e.flags&=-65):t!==null&&t.memoizedState===null||r.fallback===void 0||r.unstable_avoidThisFallback===!0||(i|=1),ae(ue,i&1),t===null?(r.fallback!==void 0&&yd(e),t=r.children,i=r.fallback,s?(t=Nv(e,t,i,n),e.child.memoizedState={baseLanes:n},e.memoizedState=Gu,t):typeof r.unstable_expectedLoadTime=="number"?(t=Nv(e,t,i,n),e.child.memoizedState={baseLanes:n},e.memoizedState=Gu,e.lanes=33554432,t):(n=Qd({mode:"visible",children:t},e.mode,n,null),n.return=e,e.child=n)):t.memoizedState!==null?s?(r=Av(t,e,r.children,r.fallback,n),s=e.child,i=t.child.memoizedState,s.memoizedState=i===null?{baseLanes:n}:{baseLanes:i.baseLanes|n},s.childLanes=t.childLanes&~n,e.memoizedState=Gu,r):(n=Cv(t,e,r.children,n),e.memoizedState=null,n):s?(r=Av(t,e,r.children,r.fallback,n),s=e.child,i=t.child.memoizedState,s.memoizedState=i===null?{baseLanes:n}:{baseLanes:i.baseLanes|n},s.childLanes=t.childLanes&~n,e.memoizedState=Gu,r):(n=Cv(t,e,r.children,n),e.memoizedState=null,n)}function Nv(t,e,n,r){var i=t.mode,s=t.child;return e={mode:"hidden",children:e},(i&2)==0&&s!==null?(s.childLanes=0,s.pendingProps=e):s=Qd(e,i,0,null),n=Gi(n,i,r,null),s.return=t,n.return=t,s.sibling=n,t.child=s,n}function Cv(t,e,n,r){var i=t.child;return t=i.sibling,n=Yn(i,{mode:"visible",children:n}),(e.mode&2)==0&&(n.lanes=r),n.return=e,n.sibling=null,t!==null&&(t.nextEffect=null,t.flags=8,e.firstEffect=e.lastEffect=t),e.child=n}function Av(t,e,n,r,i){var s=e.mode,o=t.child;t=o.sibling;var a={mode:"hidden",children:n};return(s&2)==0&&e.child!==o?(n=e.child,n.childLanes=0,n.pendingProps=a,o=n.lastEffect,o!==null?(e.firstEffect=n.firstEffect,e.lastEffect=o,o.nextEffect=null):e.firstEffect=e.lastEffect=null):n=Yn(o,a),t!==null?r=Yn(t,r):(r=Gi(r,s,i,null),r.flags|=2),r.return=e,n.return=e,n.sibling=r,e.child=n,r}function Rv(t,e){t.lanes|=e;var n=t.alternate;n!==null&&(n.lanes|=e),Qy(t.return,e)}function Rd(t,e,n,r,i,s){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,lastEffect:s}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.lastEffect=s)}function bv(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(pt(t,e,r.children,n),r=ue.current,(r&2)!=0)r=r&1|2,e.flags|=64;else{if(t!==null&&(t.flags&64)!=0)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Rv(t,n);else if(t.tag===19)Rv(t,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ae(ue,r),(e.mode&2)==0)e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Bu(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Rd(e,!1,i,n,s,e.lastEffect);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Bu(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Rd(e,!0,n,null,s,e.lastEffect);break;case"together":Rd(e,!1,null,null,void 0,e.lastEffect);break;default:e.memoizedState=null}return e.child}function mn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Po|=e.lanes,(n&e.childLanes)!=0){if(t!==null&&e.child!==t.child)throw Error(k(153));if(e.child!==null){for(t=e.child,n=Yn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Yn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}return null}var Dv,bd,Pv,Ov;Dv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};bd=function(){};Pv=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Pr(Gt.current);var s=null;switch(n){case"input":i=ph(t,i),r=ph(t,r),s=[];break;case"option":i=yh(t,i),r=yh(t,r),s=[];break;case"select":i=ie({},i,{value:void 0}),r=ie({},r,{value:void 0}),s=[];break;case"textarea":i=vh(t,i),r=vh(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=ku)}Ih(n,r);var o;n=null;for(l in i)if(!r.hasOwnProperty(l)&&i.hasOwnProperty(l)&&i[l]!=null)if(l==="style"){var a=i[l];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else l!=="dangerouslySetInnerHTML"&&l!=="children"&&l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(Ws.hasOwnProperty(l)?s||(s=[]):(s=s||[]).push(l,null));for(l in r){var u=r[l];if(a=i!=null?i[l]:void 0,r.hasOwnProperty(l)&&u!==a&&(u!=null||a!=null))if(l==="style")if(a){for(o in a)!a.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&a[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(l,n)),n=u;else l==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(s=s||[]).push(l,u)):l==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(l,""+u):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&(Ws.hasOwnProperty(l)?(u!=null&&l==="onScroll"&&Z("scroll",t),s||a===u||(s=[])):typeof u=="object"&&u!==null&&u.$$typeof===lh?u.toString():(s=s||[]).push(l,u))}n&&(s=s||[]).push("style",n);var l=s;(e.updateQueue=l)&&(e.flags|=4)}};Ov=function(t,e,n,r){n!==r&&(e.flags|=4)};function Do(t,e){if(!Qt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function SS(t,e,n){var r=e.pendingProps;switch(e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return null;case 1:return dt(e.type)&&Ru(),null;case 3:return Bi(),ee(ht),ee(Qe),wd(),r=e.stateNode,r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(ju(e)?e.flags|=4:r.hydrate||(e.flags|=256)),bd(e),null;case 5:gd(e);var i=Pr(So.current);if(n=e.type,t!==null&&e.stateNode!=null)Pv(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=128);else{if(!r){if(e.stateNode===null)throw Error(k(166));return null}if(t=Pr(Gt.current),ju(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Fn]=e,r[Cu]=s,n){case"dialog":Z("cancel",r),Z("close",r);break;case"iframe":case"object":case"embed":Z("load",r);break;case"video":case"audio":for(t=0;t<go.length;t++)Z(go[t],r);break;case"source":Z("error",r);break;case"img":case"image":case"link":Z("error",r),Z("load",r);break;case"details":Z("toggle",r);break;case"input":Tg(r,s),Z("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Z("invalid",r);break;case"textarea":Ng(r,s),Z("invalid",r)}Ih(n,s),t=null;for(var o in s)s.hasOwnProperty(o)&&(i=s[o],o==="children"?typeof i=="string"?r.textContent!==i&&(t=["children",i]):typeof i=="number"&&r.textContent!==""+i&&(t=["children",""+i]):Ws.hasOwnProperty(o)&&i!=null&&o==="onScroll"&&Z("scroll",r));switch(n){case"input":uu(r),kg(r,s,!0);break;case"textarea":uu(r),Ag(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=ku)}r=t,e.updateQueue=r,r!==null&&(e.flags|=4)}else{switch(o=i.nodeType===9?i:i.ownerDocument,t===wh.html&&(t=Rg(n)),t===wh.html?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Fn]=e,t[Cu]=r,Dv(t,e,!1,!1),e.stateNode=t,o=Eh(n,r),n){case"dialog":Z("cancel",t),Z("close",t),i=r;break;case"iframe":case"object":case"embed":Z("load",t),i=r;break;case"video":case"audio":for(i=0;i<go.length;i++)Z(go[i],t);i=r;break;case"source":Z("error",t),i=r;break;case"img":case"image":case"link":Z("error",t),Z("load",t),i=r;break;case"details":Z("toggle",t),i=r;break;case"input":Tg(t,r),i=ph(t,r),Z("invalid",t);break;case"option":i=yh(t,r);break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=ie({},r,{value:void 0}),Z("invalid",t);break;case"textarea":Ng(t,r),i=vh(t,r),Z("invalid",t);break;default:i=r}Ih(n,i);var a=i;for(s in a)if(a.hasOwnProperty(s)){var u=a[s];s==="style"?Pg(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&bg(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Js(t,u):typeof u=="number"&&Js(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ws.hasOwnProperty(s)?u!=null&&s==="onScroll"&&Z("scroll",t):u!=null&&rh(t,s,u,o))}switch(n){case"input":uu(t),kg(t,r,!1);break;case"textarea":uu(t),Ag(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Pn(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Ti(t,!!r.multiple,s,!1):r.defaultValue!=null&&Ti(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=ku)}Oy(n,r)&&(e.flags|=4)}e.ref!==null&&(e.flags|=128)}return null;case 6:if(t&&e.stateNode!=null)Ov(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(k(166));n=Pr(So.current),Pr(Gt.current),ju(e)?(r=e.stateNode,n=e.memoizedProps,r[Fn]=e,r.nodeValue!==n&&(e.flags|=4)):(r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Fn]=e,e.stateNode=r)}return null;case 13:return ee(ue),r=e.memoizedState,(e.flags&64)!=0?(e.lanes=n,e):(r=r!==null,n=!1,t===null?e.memoizedProps.fallback!==void 0&&ju(e):n=t.memoizedState!==null,r&&!n&&(e.mode&2)!=0&&(t===null&&e.memoizedProps.unstable_avoidThisFallback!==!0||(ue.current&1)!=0?Fe===0&&(Fe=3):((Fe===0||Fe===3)&&(Fe=4),it===null||(Po&134217727)==0&&(qi&134217727)==0||Hi(it,Xe))),(r||n)&&(e.flags|=4),null);case 4:return Bi(),bd(e),t===null&&Ay(e.stateNode.containerInfo),null;case 10:return dd(e),null;case 17:return dt(e.type)&&Ru(),null;case 19:if(ee(ue),r=e.memoizedState,r===null)return null;if(s=(e.flags&64)!=0,o=r.rendering,o===null)if(s)Do(r,!1);else{if(Fe!==0||t!==null&&(t.flags&64)!=0)for(t=e.child;t!==null;){if(o=Bu(t),o!==null){for(e.flags|=64,Do(r,!1),s=o.updateQueue,s!==null&&(e.updateQueue=s,e.flags|=4),r.lastEffect===null&&(e.firstEffect=null),e.lastEffect=r.lastEffect,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=2,s.nextEffect=null,s.firstEffect=null,s.lastEffect=null,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ae(ue,ue.current&1|2),e.child}t=t.sibling}r.tail!==null&&Ye()>Bd&&(e.flags|=64,s=!0,Do(r,!1),e.lanes=33554432)}else{if(!s)if(t=Bu(o),t!==null){if(e.flags|=64,s=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Do(r,!0),r.tail===null&&r.tailMode==="hidden"&&!o.alternate&&!Qt)return e=e.lastEffect=r.lastEffect,e!==null&&(e.nextEffect=null),null}else 2*Ye()-r.renderingStartTime>Bd&&n!==1073741824&&(e.flags|=64,s=!0,Do(r,!1),e.lanes=33554432);r.isBackwards?(o.sibling=e.child,e.child=o):(n=r.last,n!==null?n.sibling=o:e.child=o,r.last=o)}return r.tail!==null?(n=r.tail,r.rendering=n,r.tail=n.sibling,r.lastEffect=e.lastEffect,r.renderingStartTime=Ye(),n.sibling=null,e=ue.current,ae(ue,s?e&1|2:e&1),n):null;case 23:case 24:return Kd(),t!==null&&t.memoizedState!==null!=(e.memoizedState!==null)&&r.mode!=="unstable-defer-without-hiding"&&(e.flags|=4),null}throw Error(k(156,e.tag))}function kS(t){switch(t.tag){case 1:dt(t.type)&&Ru();var e=t.flags;return e&4096?(t.flags=e&-4097|64,t):null;case 3:if(Bi(),ee(ht),ee(Qe),wd(),e=t.flags,(e&64)!=0)throw Error(k(285));return t.flags=e&-4097|64,t;case 5:return gd(t),null;case 13:return ee(ue),e=t.flags,e&4096?(t.flags=e&-4097|64,t):null;case 19:return ee(ue),null;case 4:return Bi(),null;case 10:return dd(t),null;case 23:case 24:return Kd(),null;default:return null}}function Dd(t,e){try{var n="",r=e;do n+=s1(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i}}function Pd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var NS=typeof WeakMap=="function"?WeakMap:Map;function xv(t,e,n){n=jn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Ju||(Ju=!0,jd=r),Pd(t,e)},n}function Lv(t,e,n){n=jn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return Pd(t,e),r(i)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){typeof r!="function"&&(Jt===null?Jt=new Set([this]):Jt.add(this),Pd(t,e));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}var CS=typeof WeakSet=="function"?WeakSet:Set;function Mv(t){var e=t.ref;if(e!==null)if(typeof e=="function")try{e(null)}catch(n){Qn(t,n)}else e.current=null}function AS(t,e){switch(e.tag){case 0:case 11:case 15:case 22:return;case 1:if(e.flags&256&&t!==null){var n=t.memoizedProps,r=t.memoizedState;t=e.stateNode,e=t.getSnapshotBeforeUpdate(e.elementType===e.type?n:Vt(e.type,n),r),t.__reactInternalSnapshotBeforeUpdate=e}return;case 3:e.flags&256&&nd(e.stateNode.containerInfo);return;case 5:case 6:case 4:case 17:return}throw Error(k(163))}function RS(t,e,n){switch(n.tag){case 0:case 11:case 15:case 22:if(e=n.updateQueue,e=e!==null?e.lastEffect:null,e!==null){t=e=e.next;do{if((t.tag&3)==3){var r=t.create;t.destroy=r()}t=t.next}while(t!==e)}if(e=n.updateQueue,e=e!==null?e.lastEffect:null,e!==null){t=e=e.next;do{var i=t;r=i.next,i=i.tag,(i&4)!=0&&(i&1)!=0&&(Jv(n,t),$S(n,t)),t=r}while(t!==e)}return;case 1:t=n.stateNode,n.flags&4&&(e===null?t.componentDidMount():(r=n.elementType===n.type?e.memoizedProps:Vt(n.type,e.memoizedProps),t.componentDidUpdate(r,e.memoizedState,t.__reactInternalSnapshotBeforeUpdate))),e=n.updateQueue,e!==null&&Xy(n,e,t);return;case 3:if(e=n.updateQueue,e!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}Xy(n,e,t)}return;case 5:t=n.stateNode,e===null&&n.flags&4&&Oy(n.type,n.memoizedProps)&&t.focus();return;case 6:return;case 4:return;case 12:return;case 13:n.memoizedState===null&&(n=n.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&Gg(n))));return;case 19:case 17:case 20:case 21:case 23:case 24:return}throw Error(k(163))}function $v(t,e){for(var n=t;;){if(n.tag===5){var r=n.stateNode;if(e)r=r.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none";else{r=n.stateNode;var i=n.memoizedProps.style;i=i!=null&&i.hasOwnProperty("display")?i.display:null,r.style.display=Dg("display",i)}}else if(n.tag===6)n.stateNode.nodeValue=e?"":n.memoizedProps;else if((n.tag!==23&&n.tag!==24||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}}function Fv(t,e){if(br&&typeof br.onCommitFiberUnmount=="function")try{br.onCommitFiberUnmount(sd,e)}catch{}switch(e.tag){case 0:case 11:case 14:case 15:case 22:if(t=e.updateQueue,t!==null&&(t=t.lastEffect,t!==null)){var n=t=t.next;do{var r=n,i=r.destroy;if(r=r.tag,i!==void 0)if((r&4)!=0)Jv(e,n);else{r=e;try{i()}catch(s){Qn(r,s)}}n=n.next}while(n!==t)}break;case 1:if(Mv(e),t=e.stateNode,typeof t.componentWillUnmount=="function")try{t.props=e.memoizedProps,t.state=e.memoizedState,t.componentWillUnmount()}catch(s){Qn(e,s)}break;case 5:Mv(e);break;case 4:jv(t,e)}}function Uv(t){t.alternate=null,t.child=null,t.dependencies=null,t.firstEffect=null,t.lastEffect=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.return=null,t.updateQueue=null}function Vv(t){return t.tag===5||t.tag===3||t.tag===4}function Bv(t){e:{for(var e=t.return;e!==null;){if(Vv(e))break e;e=e.return}throw Error(k(160))}var n=e;switch(e=n.stateNode,n.tag){case 5:var r=!1;break;case 3:e=e.containerInfo,r=!0;break;case 4:e=e.containerInfo,r=!0;break;default:throw Error(k(161))}n.flags&16&&(Js(e,""),n.flags&=-17);e:t:for(n=t;;){for(;n.sibling===null;){if(n.return===null||Vv(n.return)){n=null;break e}n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue t;n.child.return=n,n=n.child}if(!(n.flags&2)){n=n.stateNode;break e}}r?Od(t,n,e):xd(t,n,e)}function Od(t,e,n){var r=t.tag,i=r===5||r===6;if(i)t=i?t.stateNode:t.stateNode.instance,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=ku));else if(r!==4&&(t=t.child,t!==null))for(Od(t,e,n),t=t.sibling;t!==null;)Od(t,e,n),t=t.sibling}function xd(t,e,n){var r=t.tag,i=r===5||r===6;if(i)t=i?t.stateNode:t.stateNode.instance,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(xd(t,e,n),t=t.sibling;t!==null;)xd(t,e,n),t=t.sibling}function jv(t,e){for(var n=e,r=!1,i,s;;){if(!r){r=n.return;e:for(;;){if(r===null)throw Error(k(160));switch(i=r.stateNode,r.tag){case 5:s=!1;break e;case 3:i=i.containerInfo,s=!0;break e;case 4:i=i.containerInfo,s=!0;break e}r=r.return}r=!0}if(n.tag===5||n.tag===6){e:for(var o=t,a=n,u=a;;)if(Fv(o,u),u.child!==null&&u.tag!==4)u.child.return=u,u=u.child;else{if(u===a)break e;for(;u.sibling===null;){if(u.return===null||u.return===a)break e;u=u.return}u.sibling.return=u.return,u=u.sibling}s?(o=i,a=n.stateNode,o.nodeType===8?o.parentNode.removeChild(a):o.removeChild(a)):i.removeChild(n.stateNode)}else if(n.tag===4){if(n.child!==null){i=n.stateNode.containerInfo,s=!0,n.child.return=n,n=n.child;continue}}else if(Fv(t,n),n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return,n.tag===4&&(r=!1)}n.sibling.return=n.return,n=n.sibling}}function Ld(t,e){switch(e.tag){case 0:case 11:case 14:case 15:case 22:var n=e.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var r=n=n.next;do(r.tag&3)==3&&(t=r.destroy,r.destroy=void 0,t!==void 0&&t()),r=r.next;while(r!==n)}return;case 1:return;case 5:if(n=e.stateNode,n!=null){r=e.memoizedProps;var i=t!==null?t.memoizedProps:r;t=e.type;var s=e.updateQueue;if(e.updateQueue=null,s!==null){for(n[Cu]=r,t==="input"&&r.type==="radio"&&r.name!=null&&Sg(n,r),Eh(t,i),e=Eh(t,r),i=0;i<s.length;i+=2){var o=s[i],a=s[i+1];o==="style"?Pg(n,a):o==="dangerouslySetInnerHTML"?bg(n,a):o==="children"?Js(n,a):rh(n,o,a,e)}switch(t){case"input":mh(n,r);break;case"textarea":Cg(n,r);break;case"select":t=n._wrapperState.wasMultiple,n._wrapperState.wasMultiple=!!r.multiple,s=r.value,s!=null?Ti(n,!!r.multiple,s,!1):t!==!!r.multiple&&(r.defaultValue!=null?Ti(n,!!r.multiple,r.defaultValue,!0):Ti(n,!!r.multiple,r.multiple?[]:"",!1))}}}return;case 6:if(e.stateNode===null)throw Error(k(162));e.stateNode.nodeValue=e.memoizedProps;return;case 3:n=e.stateNode,n.hydrate&&(n.hydrate=!1,Gg(n.containerInfo));return;case 12:return;case 13:e.memoizedState!==null&&(Vd=Ye(),$v(e.child,!0)),zv(e);return;case 19:zv(e);return;case 17:return;case 23:case 24:$v(e,e.memoizedState!==null);return}throw Error(k(163))}function zv(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new CS),e.forEach(function(r){var i=VS.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function bS(t,e){return t!==null&&(t=t.memoizedState,t===null||t.dehydrated!==null)?(e=e.memoizedState,e!==null&&e.dehydrated===null):!1}var DS=Math.ceil,Qu=Sr.ReactCurrentDispatcher,Md=Sr.ReactCurrentOwner,U=0,it=null,_e=null,Xe=0,Lr=0,$d=Un(0),Fe=0,Yu=null,zi=0,Po=0,qi=0,Fd=0,Ud=null,Vd=0,Bd=1/0;function Wi(){Bd=Ye()+500}var D=null,Ju=!1,jd=null,Jt=null,Wn=!1,Oo=null,xo=90,zd=[],qd=[],gn=null,Lo=0,Wd=null,Xu=-1,yn=0,Zu=0,Mo=null,el=!1;function _t(){return(U&48)!=0?Ye():Xu!==-1?Xu:Xu=Ye()}function Hn(t){if(t=t.mode,(t&2)==0)return 1;if((t&4)==0)return Fi()===99?1:2;if(yn===0&&(yn=zi),vS.transition!==0){Zu!==0&&(Zu=Ud!==null?Ud.pendingLanes:0),t=yn;var e=4186112&~Zu;return e&=-e,e===0&&(t=4186112&~t,e=t&-t,e===0&&(e=8192)),e}return t=Fi(),(U&4)!=0&&t===98?t=gu(12,yn):(t=I1(t),t=gu(t,yn)),t}function Kn(t,e,n){if(50<Lo)throw Lo=0,Wd=null,Error(k(185));if(t=tl(t,e),t===null)return null;yu(t,e,n),t===it&&(qi|=e,Fe===4&&Hi(t,Xe));var r=Fi();e===1?(U&8)!=0&&(U&48)==0?Hd(t):(Pt(t,n),U===0&&(Wi(),Kt())):((U&4)==0||r!==98&&r!==99||(gn===null?gn=new Set([t]):gn.add(t)),Pt(t,n)),Ud=t}function tl(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}function Pt(t,e){for(var n=t.callbackNode,r=t.suspendedLanes,i=t.pingedLanes,s=t.expirationTimes,o=t.pendingLanes;0<o;){var a=31-Mn(o),u=1<<a,l=s[a];if(l===-1){if((u&r)==0||(u&i)!=0){l=e,Ci(u);var c=X;s[a]=10<=c?l+250:6<=c?l+5e3:-1}}else l<=e&&(t.expiredLanes|=u);o&=~u}if(r=ao(t,t===it?Xe:0),e=X,r===0)n!==null&&(n!==ld&&ad(n),t.callbackNode=null,t.callbackPriority=0);else{if(n!==null){if(t.callbackPriority===e)return;n!==ld&&ad(n)}e===15?(n=Hd.bind(null,t),fn===null?(fn=[n],Pu=od(Du,Gy)):fn.push(n),n=ld):e===14?n=wo(99,Hd.bind(null,t)):(n=E1(e),n=wo(n,qv.bind(null,t))),t.callbackPriority=e,t.callbackNode=n}}function qv(t){if(Xu=-1,Zu=yn=0,(U&48)!=0)throw Error(k(327));var e=t.callbackNode;if(Gn()&&t.callbackNode!==e)return null;var n=ao(t,t===it?Xe:0);if(n===0)return null;var r=n,i=U;U|=16;var s=Gv();(it!==t||Xe!==r)&&(Wi(),Ki(t,r));do try{xS();break}catch(a){Kv(t,a)}while(1);if(hd(),Qu.current=s,U=i,_e!==null?r=0:(it=null,Xe=0,r=Fe),(zi&qi)!=0)Ki(t,0);else if(r!==0){if(r===2&&(U|=64,t.hydrate&&(t.hydrate=!1,nd(t.containerInfo)),n=ty(t),n!==0&&(r=$o(t,n))),r===1)throw e=Yu,Ki(t,0),Hi(t,n),Pt(t,Ye()),e;switch(t.finishedWork=t.current.alternate,t.finishedLanes=n,r){case 0:case 1:throw Error(k(345));case 2:Mr(t);break;case 3:if(Hi(t,n),(n&62914560)===n&&(r=Vd+500-Ye(),10<r)){if(ao(t,0)!==0)break;if(i=t.suspendedLanes,(i&n)!==n){_t(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=xy(Mr.bind(null,t),r);break}Mr(t);break;case 4:if(Hi(t,n),(n&4186112)===n)break;for(r=t.eventTimes,i=-1;0<n;){var o=31-Mn(n);s=1<<o,o=r[o],o>i&&(i=o),n&=~s}if(n=i,n=Ye()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*DS(n/1960))-n,10<n){t.timeoutHandle=xy(Mr.bind(null,t),n);break}Mr(t);break;case 5:Mr(t);break;default:throw Error(k(329))}}return Pt(t,Ye()),t.callbackNode===e?qv.bind(null,t):null}function Hi(t,e){for(e&=~Fd,e&=~qi,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Mn(e),r=1<<n;t[n]=-1,e&=~r}}function Hd(t){if((U&48)!=0)throw Error(k(327));if(Gn(),t===it&&(t.expiredLanes&Xe)!=0){var e=Xe,n=$o(t,e);(zi&qi)!=0&&(e=ao(t,e),n=$o(t,e))}else e=ao(t,0),n=$o(t,e);if(t.tag!==0&&n===2&&(U|=64,t.hydrate&&(t.hydrate=!1,nd(t.containerInfo)),e=ty(t),e!==0&&(n=$o(t,e))),n===1)throw n=Yu,Ki(t,0),Hi(t,e),Pt(t,Ye()),n;return t.finishedWork=t.current.alternate,t.finishedLanes=e,Mr(t),Pt(t,Ye()),null}function PS(){if(gn!==null){var t=gn;gn=null,t.forEach(function(e){e.expiredLanes|=24&e.pendingLanes,Pt(e,Ye())})}Kt()}function Wv(t,e){var n=U;U|=1;try{return t(e)}finally{U=n,U===0&&(Wi(),Kt())}}function Hv(t,e){var n=U;U&=-2,U|=8;try{return t(e)}finally{U=n,U===0&&(Wi(),Kt())}}function nl(t,e){ae($d,Lr),Lr|=e,zi|=e}function Kd(){Lr=$d.current,ee($d)}function Ki(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,dS(n)),_e!==null)for(n=_e.return;n!==null;){var r=n;switch(r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ru();break;case 3:Bi(),ee(ht),ee(Qe),wd();break;case 5:gd(r);break;case 4:Bi();break;case 13:ee(ue);break;case 19:ee(ue);break;case 10:dd(r);break;case 23:case 24:Kd()}n=n.return}it=t,_e=Yn(t.current,null),Xe=Lr=zi=e,Fe=0,Yu=null,Fd=qi=Po=0}function Kv(t,e){do{var n=_e;try{if(hd(),ko.current=Ku,zu){for(var r=de.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}zu=!1}if(No=0,$e=Je=de=null,Co=!1,Md.current=null,n===null||n.return===null){Fe=1,Yu=e,_e=null;break}e:{var s=t,o=n.return,a=n,u=e;if(e=Xe,a.flags|=2048,a.firstEffect=a.lastEffect=null,u!==null&&typeof u=="object"&&typeof u.then=="function"){var l=u;if((a.mode&2)==0){var c=a.alternate;c?(a.updateQueue=c.updateQueue,a.memoizedState=c.memoizedState,a.lanes=c.lanes):(a.updateQueue=null,a.memoizedState=null)}var h=(ue.current&1)!=0,d=o;do{var g;if(g=d.tag===13){var y=d.memoizedState;if(y!==null)g=y.dehydrated!==null;else{var I=d.memoizedProps;g=I.fallback===void 0?!1:I.unstable_avoidThisFallback!==!0?!0:!h}}if(g){var p=d.updateQueue;if(p===null){var f=new Set;f.add(l),d.updateQueue=f}else p.add(l);if((d.mode&2)==0){if(d.flags|=64,a.flags|=16384,a.flags&=-2981,a.tag===1)if(a.alternate===null)a.tag=17;else{var m=jn(-1,1);m.tag=2,zn(a,m)}a.lanes|=1;break e}u=void 0,a=e;var w=s.pingCache;if(w===null?(w=s.pingCache=new NS,u=new Set,w.set(l,u)):(u=w.get(l),u===void 0&&(u=new Set,w.set(l,u))),!u.has(a)){u.add(a);var _=US.bind(null,s,l,a);l.then(_,_)}d.flags|=4096,d.lanes=e;break e}d=d.return}while(d!==null);u=Error((Ei(a.type)||"A React component")+` suspended while rendering, but no fallback UI was specified.

Add a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.`)}Fe!==5&&(Fe=2),u=Dd(u,a),d=o;do{switch(d.tag){case 3:s=u,d.flags|=4096,e&=-e,d.lanes|=e;var M=xv(d,s,e);Jy(d,M);break e;case 1:s=u;var C=d.type,$=d.stateNode;if((d.flags&64)==0&&(typeof C.getDerivedStateFromError=="function"||$!==null&&typeof $.componentDidCatch=="function"&&(Jt===null||!Jt.has($)))){d.flags|=4096,e&=-e,d.lanes|=e;var V=Lv(d,s,e);Jy(d,V);break e}}d=d.return}while(d!==null)}Yv(n)}catch(x){e=x,_e===n&&n!==null&&(_e=n=n.return);continue}break}while(1)}function Gv(){var t=Qu.current;return Qu.current=Ku,t===null?Ku:t}function $o(t,e){var n=U;U|=16;var r=Gv();it===t&&Xe===e||Ki(t,e);do try{OS();break}catch(i){Kv(t,i)}while(1);if(hd(),U=n,Qu.current=r,_e!==null)throw Error(k(261));return it=null,Xe=0,Fe}function OS(){for(;_e!==null;)Qv(_e)}function xS(){for(;_e!==null&&!mS();)Qv(_e)}function Qv(t){var e=Zv(t.alternate,t,Lr);t.memoizedProps=t.pendingProps,e===null?Yv(t):_e=e,Md.current=null}function Yv(t){var e=t;do{var n=e.alternate;if(t=e.return,(e.flags&2048)==0){if(n=SS(n,e,Lr),n!==null){_e=n;return}if(n=e,n.tag!==24&&n.tag!==23||n.memoizedState===null||(Lr&1073741824)!=0||(n.mode&4)==0){for(var r=0,i=n.child;i!==null;)r|=i.lanes|i.childLanes,i=i.sibling;n.childLanes=r}t!==null&&(t.flags&2048)==0&&(t.firstEffect===null&&(t.firstEffect=e.firstEffect),e.lastEffect!==null&&(t.lastEffect!==null&&(t.lastEffect.nextEffect=e.firstEffect),t.lastEffect=e.lastEffect),1<e.flags&&(t.lastEffect!==null?t.lastEffect.nextEffect=e:t.firstEffect=e,t.lastEffect=e))}else{if(n=kS(e),n!==null){n.flags&=2047,_e=n;return}t!==null&&(t.firstEffect=t.lastEffect=null,t.flags|=2048)}if(e=e.sibling,e!==null){_e=e;return}_e=e=t}while(e!==null);Fe===0&&(Fe=5)}function Mr(t){var e=Fi();return Dr(99,LS.bind(null,t,e)),null}function LS(t,e){do Gn();while(Oo!==null);if((U&48)!=0)throw Error(k(327));var n=t.finishedWork;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(k(177));t.callbackNode=null;var r=n.lanes|n.childLanes,i=r,s=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;for(var o=t.eventTimes,a=t.expirationTimes;0<s;){var u=31-Mn(s),l=1<<u;i[u]=0,o[u]=-1,a[u]=-1,s&=~l}if(gn!==null&&(r&24)==0&&gn.has(t)&&gn.delete(t),t===it&&(_e=it=null,Xe=0),1<n.flags?n.lastEffect!==null?(n.lastEffect.nextEffect=n,r=n.firstEffect):r=n:r=n.firstEffect,r!==null){if(i=U,U|=32,Md.current=null,Zh=vu,o=Iy(),Qh(o)){if("selectionStart"in o)a={start:o.selectionStart,end:o.selectionEnd};else e:if(a=(a=o.ownerDocument)&&a.defaultView||window,(l=a.getSelection&&a.getSelection())&&l.rangeCount!==0){a=l.anchorNode,s=l.anchorOffset,u=l.focusNode,l=l.focusOffset;try{a.nodeType,u.nodeType}catch{a=null;break e}var c=0,h=-1,d=-1,g=0,y=0,I=o,p=null;t:for(;;){for(var f;I!==a||s!==0&&I.nodeType!==3||(h=c+s),I!==u||l!==0&&I.nodeType!==3||(d=c+l),I.nodeType===3&&(c+=I.nodeValue.length),(f=I.firstChild)!==null;)p=I,I=f;for(;;){if(I===o)break t;if(p===a&&++g===s&&(h=c),p===u&&++y===l&&(d=c),(f=I.nextSibling)!==null)break;I=p,p=I.parentNode}I=f}a=h===-1||d===-1?null:{start:h,end:d}}else a=null;a=a||{start:0,end:0}}else a=null;ed={focusedElem:o,selectionRange:a},vu=!1,Mo=null,el=!1,D=r;do try{MS()}catch(x){if(D===null)throw Error(k(330));Qn(D,x),D=D.nextEffect}while(D!==null);Mo=null,D=r;do try{for(o=t;D!==null;){var m=D.flags;if(m&16&&Js(D.stateNode,""),m&128){var w=D.alternate;if(w!==null){var _=w.ref;_!==null&&(typeof _=="function"?_(null):_.current=null)}}switch(m&1038){case 2:Bv(D),D.flags&=-3;break;case 6:Bv(D),D.flags&=-3,Ld(D.alternate,D);break;case 1024:D.flags&=-1025;break;case 1028:D.flags&=-1025,Ld(D.alternate,D);break;case 4:Ld(D.alternate,D);break;case 8:a=D,jv(o,a);var M=a.alternate;Uv(a),M!==null&&Uv(M)}D=D.nextEffect}}catch(x){if(D===null)throw Error(k(330));Qn(D,x),D=D.nextEffect}while(D!==null);if(_=ed,w=Iy(),m=_.focusedElem,o=_.selectionRange,w!==m&&m&&m.ownerDocument&&_y(m.ownerDocument.documentElement,m)){for(o!==null&&Qh(m)&&(w=o.start,_=o.end,_===void 0&&(_=w),"selectionStart"in m?(m.selectionStart=w,m.selectionEnd=Math.min(_,m.value.length)):(_=(w=m.ownerDocument||document)&&w.defaultView||window,_.getSelection&&(_=_.getSelection(),a=m.textContent.length,M=Math.min(o.start,a),o=o.end===void 0?M:Math.min(o.end,a),!_.extend&&M>o&&(a=o,o=M,M=a),a=wy(m,M),s=wy(m,o),a&&s&&(_.rangeCount!==1||_.anchorNode!==a.node||_.anchorOffset!==a.offset||_.focusNode!==s.node||_.focusOffset!==s.offset)&&(w=w.createRange(),w.setStart(a.node,a.offset),_.removeAllRanges(),M>o?(_.addRange(w),_.extend(s.node,s.offset)):(w.setEnd(s.node,s.offset),_.addRange(w)))))),w=[],_=m;_=_.parentNode;)_.nodeType===1&&w.push({element:_,left:_.scrollLeft,top:_.scrollTop});for(typeof m.focus=="function"&&m.focus(),m=0;m<w.length;m++)_=w[m],_.element.scrollLeft=_.left,_.element.scrollTop=_.top}vu=!!Zh,ed=Zh=null,t.current=n,D=r;do try{for(m=t;D!==null;){var C=D.flags;if(C&36&&RS(m,D.alternate,D),C&128){w=void 0;var $=D.ref;if($!==null){var V=D.stateNode;switch(D.tag){case 5:w=V;break;default:w=V}typeof $=="function"?$(w):$.current=w}}D=D.nextEffect}}catch(x){if(D===null)throw Error(k(330));Qn(D,x),D=D.nextEffect}while(D!==null);D=null,yS(),U=i}else t.current=n;if(Wn)Wn=!1,Oo=t,xo=e;else for(D=r;D!==null;)e=D.nextEffect,D.nextEffect=null,D.flags&8&&(C=D,C.sibling=null,C.stateNode=null),D=e;if(r=t.pendingLanes,r===0&&(Jt=null),r===1?t===Wd?Lo++:(Lo=0,Wd=t):Lo=0,n=n.stateNode,br&&typeof br.onCommitFiberRoot=="function")try{br.onCommitFiberRoot(sd,n,void 0,(n.current.flags&64)==64)}catch{}if(Pt(t,Ye()),Ju)throw Ju=!1,t=jd,jd=null,t;return(U&8)!=0||Kt(),null}function MS(){for(;D!==null;){var t=D.alternate;el||Mo===null||((D.flags&8)!=0?Bg(D,Mo)&&(el=!0):D.tag===13&&bS(t,D)&&Bg(D,Mo)&&(el=!0));var e=D.flags;(e&256)!=0&&AS(t,D),(e&512)==0||Wn||(Wn=!0,wo(97,function(){return Gn(),null})),D=D.nextEffect}}function Gn(){if(xo!==90){var t=97<xo?97:xo;return xo=90,Dr(t,FS)}return!1}function $S(t,e){zd.push(e,t),Wn||(Wn=!0,wo(97,function(){return Gn(),null}))}function Jv(t,e){qd.push(e,t),Wn||(Wn=!0,wo(97,function(){return Gn(),null}))}function FS(){if(Oo===null)return!1;var t=Oo;if(Oo=null,(U&48)!=0)throw Error(k(331));var e=U;U|=32;var n=qd;qd=[];for(var r=0;r<n.length;r+=2){var i=n[r],s=n[r+1],o=i.destroy;if(i.destroy=void 0,typeof o=="function")try{o()}catch(u){if(s===null)throw Error(k(330));Qn(s,u)}}for(n=zd,zd=[],r=0;r<n.length;r+=2){i=n[r],s=n[r+1];try{var a=i.create;i.destroy=a()}catch(u){if(s===null)throw Error(k(330));Qn(s,u)}}for(a=t.current.firstEffect;a!==null;)t=a.nextEffect,a.nextEffect=null,a.flags&8&&(a.sibling=null,a.stateNode=null),a=t;return U=e,Kt(),!0}function Xv(t,e,n){e=Dd(n,e),e=xv(t,e,1),zn(t,e),e=_t(),t=tl(t,1),t!==null&&(yu(t,1,e),Pt(t,e))}function Qn(t,e){if(t.tag===3)Xv(t,t,e);else for(var n=t.return;n!==null;){if(n.tag===3){Xv(n,t,e);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Jt===null||!Jt.has(r))){t=Dd(e,t);var i=Lv(n,t,1);if(zn(n,i),i=_t(),n=tl(n,1),n!==null)yu(n,1,i),Pt(n,i);else if(typeof r.componentDidCatch=="function"&&(Jt===null||!Jt.has(r)))try{r.componentDidCatch(e,t)}catch{}break}}n=n.return}}function US(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=_t(),t.pingedLanes|=t.suspendedLanes&n,it===t&&(Xe&n)===n&&(Fe===4||Fe===3&&(Xe&62914560)===Xe&&500>Ye()-Vd?Ki(t,0):Fd|=n),Pt(t,e)}function VS(t,e){var n=t.stateNode;n!==null&&n.delete(e),e=0,e===0&&(e=t.mode,(e&2)==0?e=1:(e&4)==0?e=Fi()===99?1:2:(yn===0&&(yn=zi),e=Ai(62914560&~yn),e===0&&(e=4194304))),n=_t(),t=tl(t,e),t!==null&&(yu(t,e,n),Pt(t,n))}var Zv;Zv=function(t,e,n){var r=e.lanes;if(t!==null)if(t.memoizedProps!==e.pendingProps||ht.current)Bt=!0;else if((n&r)!=0)Bt=(t.flags&16384)!=0;else{switch(Bt=!1,e.tag){case 3:Sv(e),vd();break;case 5:sv(e);break;case 1:dt(e.type)&&bu(e);break;case 4:md(e,e.stateNode.containerInfo);break;case 10:r=e.memoizedProps.value;var i=e.type._context;ae(Ou,i._currentValue),i._currentValue=r;break;case 13:if(e.memoizedState!==null)return(n&e.child.childLanes)!=0?kv(t,e,n):(ae(ue,ue.current&1),e=mn(t,e,n),e!==null?e.sibling:null);ae(ue,ue.current&1);break;case 19:if(r=(n&e.childLanes)!=0,(t.flags&64)!=0){if(r)return bv(t,e,n);e.flags|=64}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ae(ue,ue.current),r)break;return null;case 23:case 24:return e.lanes=0,Nd(t,e,n)}return mn(t,e,n)}else Bt=!1;switch(e.lanes=0,e.tag){case 2:if(r=e.type,t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2),t=e.pendingProps,i=$i(e,Qe.current),Vi(e,n),i=Id(null,e,r,t,i,n),e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0){if(e.tag=1,e.memoizedState=null,e.updateQueue=null,dt(r)){var s=!0;bu(e)}else s=!1;e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,fd(e);var o=r.getDerivedStateFromProps;typeof o=="function"&&Mu(e,r,o,t),i.updater=$u,e.stateNode=i,i._reactInternals=e,pd(e,r,t,n),e=Ad(null,e,r,!0,s,n)}else e.tag=0,pt(null,e,i,n),e=e.child;return e;case 16:i=e.elementType;e:{switch(t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2),t=e.pendingProps,s=i._init,i=s(i._payload),e.type=i,s=e.tag=jS(i),t=Vt(i,t),s){case 0:e=Cd(null,e,i,t,n);break e;case 1:e=Tv(null,e,i,t,n);break e;case 11:e=wv(null,e,i,t,n);break e;case 14:e=_v(null,e,i,Vt(i.type,t),r,n);break e}throw Error(k(306,i,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Vt(r,i),Cd(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Vt(r,i),Tv(t,e,r,i,n);case 3:if(Sv(e),r=e.updateQueue,t===null||r===null)throw Error(k(282));if(r=e.pendingProps,i=e.memoizedState,i=i!==null?i.element:null,Yy(t,e),_o(e,r,null,n),r=e.memoizedState.element,r===i)vd(),e=mn(t,e,n);else{if(i=e.stateNode,(s=i.hydrate)&&(qn=Oi(e.stateNode.containerInfo.firstChild),pn=e,s=Qt=!0),s){if(t=i.mutableSourceEagerHydrationData,t!=null)for(i=0;i<t.length;i+=2)s=t[i],s._workInProgressVersionPrimary=t[i+1],ji.push(s);for(n=iv(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|1024,n=n.sibling}else pt(t,e,r,n),vd();e=e.child}return e;case 5:return sv(e),t===null&&yd(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,td(r,i)?o=null:s!==null&&td(r,s)&&(e.flags|=16),Ev(t,e),pt(t,e,o,n),e.child;case 6:return t===null&&yd(e),null;case 13:return kv(t,e,n);case 4:return md(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Vu(e,null,r,n):pt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Vt(r,i),wv(t,e,r,i,n);case 7:return pt(t,e,e.pendingProps,n),e.child;case 8:return pt(t,e,e.pendingProps.children,n),e.child;case 12:return pt(t,e,e.pendingProps.children,n),e.child;case 10:e:{r=e.type._context,i=e.pendingProps,o=e.memoizedProps,s=i.value;var a=e.type._context;if(ae(Ou,a._currentValue),a._currentValue=s,o!==null)if(a=o.value,s=Rt(a,s)?0:(typeof r._calculateChangedBits=="function"?r._calculateChangedBits(a,s):1073741823)|0,s===0){if(o.children===i.children&&!ht.current){e=mn(t,e,n);break e}}else for(a=e.child,a!==null&&(a.return=e);a!==null;){var u=a.dependencies;if(u!==null){o=a.child;for(var l=u.firstContext;l!==null;){if(l.context===r&&(l.observedBits&s)!=0){a.tag===1&&(l=jn(-1,n&-n),l.tag=2,zn(a,l)),a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),Qy(a.return,n),u.lanes|=n;break}l=l.next}}else o=a.tag===10&&a.type===e.type?null:a.child;if(o!==null)o.return=a;else for(o=a;o!==null;){if(o===e){o=null;break}if(a=o.sibling,a!==null){a.return=o.return,o=a;break}o=o.return}a=o}pt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,s=e.pendingProps,r=s.children,Vi(e,n),i=bt(i,s.unstable_observedBits),r=r(i),e.flags|=1,pt(t,e,r,n),e.child;case 14:return i=e.type,s=Vt(i,e.pendingProps),s=Vt(i.type,s),_v(t,e,i,s,r,n);case 15:return Iv(t,e,e.type,e.pendingProps,r,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Vt(r,i),t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2),e.tag=1,dt(r)?(t=!0,bu(e)):t=!1,Vi(e,n),tv(e,r,i),pd(e,r,i,n),Ad(null,e,r,!0,t,n);case 19:return bv(t,e,n);case 23:return Nd(t,e,n);case 24:return Nd(t,e,n)}throw Error(k(156,e.tag))};function BS(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.flags=0,this.lastEffect=this.firstEffect=this.nextEffect=null,this.childLanes=this.lanes=0,this.alternate=null}function Ot(t,e,n,r){return new BS(t,e,n,r)}function Gd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function jS(t){if(typeof t=="function")return Gd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===iu)return 11;if(t===ou)return 14}return 2}function Yn(t,e){var n=t.alternate;return n===null?(n=Ot(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.nextEffect=null,n.firstEffect=null,n.lastEffect=null),n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function rl(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Gd(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Dn:return Gi(n.children,i,s,e);case wg:o=8,i|=16;break;case ih:o=8,i|=1;break;case Ks:return t=Ot(12,n,e,i|8),t.elementType=Ks,t.type=Ks,t.lanes=s,t;case Gs:return t=Ot(13,n,e,i),t.type=Gs,t.elementType=Gs,t.lanes=s,t;case su:return t=Ot(19,n,e,i),t.elementType=su,t.lanes=s,t;case ch:return Qd(n,i,s,e);case hh:return t=Ot(24,n,e,i),t.elementType=hh,t.lanes=s,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case sh:o=10;break e;case oh:o=9;break e;case iu:o=11;break e;case ou:o=14;break e;case ah:o=16,r=null;break e;case uh:o=22;break e}throw Error(k(130,t==null?t:typeof t,""))}return e=Ot(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Gi(t,e,n,r){return t=Ot(7,t,r,e),t.lanes=n,t}function Qd(t,e,n,r){return t=Ot(23,t,r,e),t.elementType=ch,t.lanes=n,t}function Yd(t,e,n){return t=Ot(6,t,null,e),t.lanes=n,t}function Jd(t,e,n){return e=Ot(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function zS(t,e,n){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.pendingContext=this.context=null,this.hydrate=n,this.callbackNode=null,this.callbackPriority=0,this.eventTimes=$h(0),this.expirationTimes=$h(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=$h(0),this.mutableSourceEagerHydrationData=null}function qS(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:kr,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function il(t,e,n,r){var i=e.current,s=_t(),o=Hn(i);e:if(n){n=n._reactInternals;t:{if(Cr(n)!==n||n.tag!==1)throw Error(k(170));var a=n;do{switch(a.tag){case 3:a=a.stateNode.context;break t;case 1:if(dt(a.type)){a=a.stateNode.__reactInternalMemoizedMergedChildContext;break t}}a=a.return}while(a!==null);throw Error(k(171))}if(n.tag===1){var u=n.type;if(dt(u)){n=Uy(n,u,a);break e}}n=a}else n=Vn;return e.context===null?e.context=n:e.pendingContext=n,e=jn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),zn(i,e),Kn(i,o,s),o}function Xd(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function ew(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Zd(t,e){ew(t,e),(t=t.alternate)&&ew(t,e)}function WS(){return null}function ef(t,e,n){var r=n!=null&&n.hydrationOptions!=null&&n.hydrationOptions.mutableSources||null;if(n=new zS(t,e,n!=null&&n.hydrate===!0),e=Ot(3,null,null,e===2?7:e===1?3:0),n.current=e,e.stateNode=n,fd(e),t[xi]=n.current,Ay(t.nodeType===8?t.parentNode:t),r)for(t=0;t<r.length;t++){e=r[t];var i=e._getVersion;i=i(e._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[e,i]:n.mutableSourceEagerHydrationData.push(e,i)}this._internalRoot=n}ef.prototype.render=function(t){il(t,this._internalRoot,null,null)};ef.prototype.unmount=function(){var t=this._internalRoot,e=t.containerInfo;il(null,t,null,function(){e[xi]=null})};function Fo(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function HS(t,e){if(e||(e=t?t.nodeType===9?t.documentElement:t.firstChild:null,e=!(!e||e.nodeType!==1||!e.hasAttribute("data-reactroot"))),!e)for(var n;n=t.lastChild;)t.removeChild(n);return new ef(t,0,e?{hydrate:!0}:void 0)}function sl(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s._internalRoot;if(typeof i=="function"){var a=i;i=function(){var l=Xd(o);a.call(l)}}il(e,o,t,i)}else{if(s=n._reactRootContainer=HS(n,r),o=s._internalRoot,typeof i=="function"){var u=i;i=function(){var l=Xd(o);u.call(l)}}Hv(function(){il(e,o,t,i)})}return Xd(o)}jg=function(t){if(t.tag===13){var e=_t();Kn(t,4,e),Zd(t,4)}};Dh=function(t){if(t.tag===13){var e=_t();Kn(t,67108864,e),Zd(t,67108864)}};zg=function(t){if(t.tag===13){var e=_t(),n=Hn(t);Kn(t,n,e),Zd(t,n)}};qg=function(t,e){return e()};Sh=function(t,e,n){switch(e){case"input":if(mh(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Au(r);if(!i)throw Error(k(90));Eg(r),mh(r,i)}}}break;case"textarea":Cg(t,n);break;case"select":e=n.value,e!=null&&Ti(t,!!n.multiple,e,!1)}};kh=Wv;Mg=function(t,e,n,r,i){var s=U;U|=4;try{return Dr(98,t.bind(null,e,n,r,i))}finally{U=s,U===0&&(Wi(),Kt())}};Nh=function(){(U&49)==0&&(PS(),Gn())};$g=function(t,e){var n=U;U|=2;try{return t(e)}finally{U=n,U===0&&(Wi(),Kt())}};function tw(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Fo(e))throw Error(k(200));return qS(t,e,null,n)}var KS={Events:[vo,Li,Au,xg,Lg,Gn,{current:!1}]},Uo={findFiberByHostInstance:Ar,bundleType:0,version:"17.0.2",rendererPackageName:"react-dom"},GS={bundleType:Uo.bundleType,version:Uo.version,rendererPackageName:Uo.rendererPackageName,rendererConfig:Uo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Sr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Vg(t),t===null?null:t.stateNode},findFiberByHostInstance:Uo.findFiberByHostInstance||WS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!="undefined"){var ol=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ol.isDisabled&&ol.supportsFiber)try{sd=ol.inject(GS),br=ol}catch{}}At.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=KS;At.createPortal=tw;At.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(k(188)):Error(k(268,Object.keys(t)));return t=Vg(e),t=t===null?null:t.stateNode,t};At.flushSync=function(t,e){var n=U;if((n&48)!=0)return t(e);U|=1;try{if(t)return Dr(99,t.bind(null,e))}finally{U=n,Kt()}};At.hydrate=function(t,e,n){if(!Fo(e))throw Error(k(200));return sl(null,t,e,!0,n)};At.render=function(t,e,n){if(!Fo(e))throw Error(k(200));return sl(null,t,e,!1,n)};At.unmountComponentAtNode=function(t){if(!Fo(t))throw Error(k(40));return t._reactRootContainer?(Hv(function(){sl(null,null,t,!1,function(){t._reactRootContainer=null,t[xi]=null})}),!0):!1};At.unstable_batchedUpdates=Wv;At.unstable_createPortal=function(t,e){return tw(t,e,2<arguments.length&&arguments[2]!==void 0?arguments[2]:null)};At.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Fo(n))throw Error(k(200));if(t==null||t._reactInternals===void 0)throw Error(k(38));return sl(t,e,n,!1,r)};At.version="17.0.2";function nw(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(nw)}catch(t){console.error(t)}}nw(),dg.exports=At;var Gx=dg.exports,rw={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},iw=Er.createContext&&Er.createContext(rw),Jn=function(){return Jn=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t},Jn.apply(this,arguments)},QS=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n};function sw(t){return t&&t.map(function(e,n){return Er.createElement(e.tag,Jn({key:n},e.attr),sw(e.child))})}function YS(t){return function(e){return Er.createElement(JS,Jn({attr:Jn({},t.attr)},e),sw(t.child))}}function JS(t){var e=function(n){var r=t.attr,i=t.size,s=t.title,o=QS(t,["attr","size","title"]),a=i||n.size||"1em",u;return n.className&&(u=n.className),t.className&&(u=(u?u+" ":"")+t.className),Er.createElement("svg",Jn({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,o,{className:u,style:Jn(Jn({color:t.color||n.color},n.style),t.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),s&&Er.createElement("title",null,s),t.children)};return iw!==void 0?Er.createElement(iw.Consumer,null,function(n){return e(n)}):e(rw)}function Qx(t){return YS({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M868 545.5L536.1 163a31.96 31.96 0 0 0-48.3 0L156 545.5a7.97 7.97 0 0 0 6 13.2h81c4.6 0 9-2 12.1-5.5L474 300.9V864c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V300.9l218.9 252.3c3 3.5 7.4 5.5 12.1 5.5h81c6.8 0 10.5-8 6-13.2z"}}]})(t)}/**
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
 */const ow=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)==55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)==56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},XS=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},aw={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,u=i+2<t.length,l=u?t[i+2]:0,c=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|l>>6,g=l&63;u||(g=64,o||(d=64)),r.push(n[c],n[h],n[d],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(ow(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):XS(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const l=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||l==null||h==null)throw Error();const d=s<<2|a>>4;if(r.push(d),l!==64){const g=a<<4&240|l>>2;if(r.push(g),h!==64){const y=l<<6&192|h;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},ZS=function(t){const e=ow(t);return aw.encodeByteArray(e,!0)},uw=function(t){return ZS(t).replace(/\./g,"")},ek=function(t){try{return aw.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function al(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!tk(n)||(t[n]=al(t[n],e[n]));return t}function tk(t){return t!=="__proto__"}/**
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
 */class nk{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function rk(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[uw(JSON.stringify(n)),uw(JSON.stringify(o)),a].join(".")}/**
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
 */function te(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function lw(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(te())}function tf(){try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function ik(){return typeof self=="object"&&self.self===self}function nf(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function ul(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function sk(){return te().indexOf("Electron/")>=0}function rf(){const t=te();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function ok(){return te().indexOf("MSAppHost/")>=0}function ak(){return!tf()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function ll(){return typeof indexedDB=="object"}/**
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
 */const uk="FirebaseError";class xt extends Error{constructor(e,n,r){super(n);this.code=e,this.customData=r,this.name=uk,Object.setPrototypeOf(this,xt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,$r.prototype.create)}}class $r{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?lk(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new xt(i,a,r)}}function lk(t,e){return t.replace(ck,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const ck=/\{\$([^}]+)}/g;/**
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
 */function cw(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function hk(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function sf(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(hw(s)&&hw(o)){if(!sf(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function hw(t){return t!==null&&typeof t=="object"}/**
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
 */function Qi(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Yi(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Vo(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function dw(t,e){const n=new dk(t,e);return n.subscribe.bind(n)}class dk{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");fk(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=of),i.error===void 0&&(i.error=of),i.complete===void 0&&(i.complete=of);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console!="undefined"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function fk(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function of(){}/**
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
 */function L(t){return t&&t._delegate?t._delegate:t}/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function af(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function pk(t,e,n,r){function i(s){return s instanceof n?s:new n(function(o){o(s)})}return new(n||(n=Promise))(function(s,o){function a(c){try{l(r.next(c))}catch(h){o(h)}}function u(c){try{l(r.throw(c))}catch(h){o(h)}}function l(c){c.done?s(c.value):i(c.value).then(a,u)}l((r=r.apply(t,e||[])).next())})}function mk(t,e){var n={label:0,sent:function(){if(s[0]&1)throw s[1];return s[1]},trys:[],ops:[]},r,i,s,o;return o={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function a(l){return function(c){return u([l,c])}}function u(l){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,i&&(s=l[0]&2?i.return:l[0]?i.throw||((s=i.return)&&s.call(i),0):i.next)&&!(s=s.call(i,l[1])).done)return s;switch(i=0,s&&(l=[l[0]&2,s.value]),l[0]){case 0:case 1:s=l;break;case 4:return n.label++,{value:l[1],done:!1};case 5:n.label++,i=l[1],l=[0];continue;case 7:l=n.ops.pop(),n.trys.pop();continue;default:if(s=n.trys,!(s=s.length>0&&s[s.length-1])&&(l[0]===6||l[0]===2)){n=0;continue}if(l[0]===3&&(!s||l[1]>s[0]&&l[1]<s[3])){n.label=l[1];break}if(l[0]===6&&n.label<s[1]){n.label=s[1],s=l;break}if(s&&n.label<s[2]){n.label=s[2],n.ops.push(l);break}s[2]&&n.ops.pop(),n.trys.pop();continue}l=e.call(t,n)}catch(c){l=[6,c],i=0}finally{r=s=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}}function uf(t){var e=typeof Symbol=="function"&&Symbol.iterator,n=e&&t[e],r=0;if(n)return n.call(t);if(t&&typeof t.length=="number")return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function cl(t,e){var n=typeof Symbol=="function"&&t[Symbol.iterator];if(!n)return t;var r=n.call(t),i,s=[],o;try{for(;(e===void 0||e-- >0)&&!(i=r.next()).done;)s.push(i.value)}catch(a){o={error:a}}finally{try{i&&!i.done&&(n=r.return)&&n.call(r)}finally{if(o)throw o.error}}return s}function fw(t,e,n){if(n||arguments.length===2)for(var r=0,i=e.length,s;r<i;r++)(s||!(r in e))&&(s||(s=Array.prototype.slice.call(e,0,r)),s[r]=e[r]);return t.concat(s||Array.prototype.slice.call(e))}var vn=function(){function t(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}return t.prototype.setInstantiationMode=function(e){return this.instantiationMode=e,this},t.prototype.setMultipleInstances=function(e){return this.multipleInstances=e,this},t.prototype.setServiceProps=function(e){return this.serviceProps=e,this},t.prototype.setInstanceCreatedCallback=function(e){return this.onInstanceCreated=e,this},t}();/**
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
 */var Fr="[DEFAULT]";/**
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
 */var gk=function(){function t(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}return t.prototype.get=function(e){var n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){var r=new nk;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{var i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise},t.prototype.getImmediate=function(e){var n,r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error("Service "+this.name+" is not available")}},t.prototype.getComponent=function(){return this.component},t.prototype.setComponent=function(e){var n,r;if(e.name!==this.name)throw Error("Mismatching Component "+e.name+" for Provider "+this.name+".");if(this.component)throw Error("Component for "+this.name+" has already been provided");if(this.component=e,!!this.shouldAutoInitialize()){if(vk(e))try{this.getOrInitializeService({instanceIdentifier:Fr})}catch{}try{for(var i=uf(this.instancesDeferred.entries()),s=i.next();!s.done;s=i.next()){var o=cl(s.value,2),a=o[0],u=o[1],l=this.normalizeInstanceIdentifier(a);try{var c=this.getOrInitializeService({instanceIdentifier:l});u.resolve(c)}catch{}}}catch(h){n={error:h}}finally{try{s&&!s.done&&(r=i.return)&&r.call(i)}finally{if(n)throw n.error}}}},t.prototype.clearInstance=function(e){e===void 0&&(e=Fr),this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)},t.prototype.delete=function(){return pk(this,void 0,void 0,function(){var e;return mk(this,function(n){switch(n.label){case 0:return e=Array.from(this.instances.values()),[4,Promise.all(fw(fw([],cl(e.filter(function(r){return"INTERNAL"in r}).map(function(r){return r.INTERNAL.delete()}))),cl(e.filter(function(r){return"_delete"in r}).map(function(r){return r._delete()}))))];case 1:return n.sent(),[2]}})})},t.prototype.isComponentSet=function(){return this.component!=null},t.prototype.isInitialized=function(e){return e===void 0&&(e=Fr),this.instances.has(e)},t.prototype.getOptions=function(e){return e===void 0&&(e=Fr),this.instancesOptions.get(e)||{}},t.prototype.initialize=function(e){var n,r;e===void 0&&(e={});var i=e.options,s=i===void 0?{}:i,o=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(o))throw Error(this.name+"("+o+") has already been initialized");if(!this.isComponentSet())throw Error("Component "+this.name+" has not been registered yet");var a=this.getOrInitializeService({instanceIdentifier:o,options:s});try{for(var u=uf(this.instancesDeferred.entries()),l=u.next();!l.done;l=u.next()){var c=cl(l.value,2),h=c[0],d=c[1],g=this.normalizeInstanceIdentifier(h);o===g&&d.resolve(a)}}catch(y){n={error:y}}finally{try{l&&!l.done&&(r=u.return)&&r.call(u)}finally{if(n)throw n.error}}return a},t.prototype.onInit=function(e,n){var r,i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);var o=this.instances.get(i);return o&&e(o,i),function(){s.delete(e)}},t.prototype.invokeOnInitCallbacks=function(e,n){var r,i,s=this.onInitCallbacks.get(n);if(!!s)try{for(var o=uf(s),a=o.next();!a.done;a=o.next()){var u=a.value;try{u(e,n)}catch{}}}catch(l){r={error:l}}finally{try{a&&!a.done&&(i=o.return)&&i.call(o)}finally{if(r)throw r.error}}},t.prototype.getOrInitializeService=function(e){var n=e.instanceIdentifier,r=e.options,i=r===void 0?{}:r,s=this.instances.get(n);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:yk(n),options:i}),this.instances.set(n,s),this.instancesOptions.set(n,i),this.invokeOnInitCallbacks(s,n),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,n,s)}catch{}return s||null},t.prototype.normalizeInstanceIdentifier=function(e){return e===void 0&&(e=Fr),this.component?this.component.multipleInstances?e:Fr:e},t.prototype.shouldAutoInitialize=function(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"},t}();function yk(t){return t===Fr?void 0:t}function vk(t){return t.instantiationMode==="EAGER"}/**
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
 */var wk=function(){function t(e){this.name=e,this.providers=new Map}return t.prototype.addComponent=function(e){var n=this.getProvider(e.name);if(n.isComponentSet())throw new Error("Component "+e.name+" has already been registered with "+this.name);n.setComponent(e)},t.prototype.addOrOverwriteComponent=function(e){var n=this.getProvider(e.name);n.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)},t.prototype.getProvider=function(e){if(this.providers.has(e))return this.providers.get(e);var n=new gk(e,this);return this.providers.set(e,n),n},t.prototype.getProviders=function(){return Array.from(this.providers.values())},t}();/**
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
 */const lf=[];var G;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(G||(G={}));const pw={debug:G.DEBUG,verbose:G.VERBOSE,info:G.INFO,warn:G.WARN,error:G.ERROR,silent:G.SILENT},_k=G.INFO,Ik={[G.DEBUG]:"log",[G.VERBOSE]:"log",[G.INFO]:"info",[G.WARN]:"warn",[G.ERROR]:"error"},Ek=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=Ik[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class hl{constructor(e){this.name=e,this._logLevel=_k,this._logHandler=Ek,this._userLogHandler=null,lf.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in G))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?pw[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,G.DEBUG,...e),this._logHandler(this,G.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,G.VERBOSE,...e),this._logHandler(this,G.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,G.INFO,...e),this._logHandler(this,G.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,G.WARN,...e),this._logHandler(this,G.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,G.ERROR,...e),this._logHandler(this,G.ERROR,...e)}}function Tk(t){lf.forEach(e=>{e.setLogLevel(t)})}function Sk(t,e){for(const n of lf){let r=null;e&&e.level&&(r=pw[e.level]),t===null?n.userLogHandler=null:n.userLogHandler=(i,s,...o)=>{const a=o.map(u=>{if(u==null)return null;if(typeof u=="string")return u;if(typeof u=="number"||typeof u=="boolean")return u.toString();if(u instanceof Error)return u.message;try{return JSON.stringify(u)}catch{return null}}).filter(u=>u).join(" ");s>=(r!=null?r:i.logLevel)&&t({level:G[s].toLowerCase(),message:a,args:o,type:i.name})}}}/**
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
 */class kk{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Nk(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Nk(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const cf="@firebase/app",mw="0.7.4";/**
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
 */const hf=new hl("@firebase/app"),Ck="@firebase/app-compat",Ak="@firebase/analytics-compat",Rk="@firebase/analytics",bk="@firebase/app-check-compat",Dk="@firebase/app-check",Pk="@firebase/auth",Ok="@firebase/auth-compat",xk="@firebase/database",Lk="@firebase/database-compat",Mk="@firebase/functions",$k="@firebase/functions-compat",Fk="@firebase/installations",Uk="@firebase/installations-compat",Vk="@firebase/messaging",Bk="@firebase/messaging-compat",jk="@firebase/performance",zk="@firebase/performance-compat",qk="@firebase/remote-config",Wk="@firebase/remote-config-compat",Hk="@firebase/storage",Kk="@firebase/storage-compat",Gk="@firebase/firestore",Qk="@firebase/firestore-compat",Yk="firebase",Jk="9.1.3";/**
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
 */const Ur="[DEFAULT]",Xk={[cf]:"fire-core",[Ck]:"fire-core-compat",[Rk]:"fire-analytics",[Ak]:"fire-analytics-compat",[Dk]:"fire-app-check",[bk]:"fire-app-check-compat",[Pk]:"fire-auth",[Ok]:"fire-auth-compat",[xk]:"fire-rtdb",[Lk]:"fire-rtdb-compat",[Mk]:"fire-fn",[$k]:"fire-fn-compat",[Fk]:"fire-iid",[Uk]:"fire-iid-compat",[Vk]:"fire-fcm",[Bk]:"fire-fcm-compat",[jk]:"fire-perf",[zk]:"fire-perf-compat",[qk]:"fire-rc",[Wk]:"fire-rc-compat",[Hk]:"fire-gcs",[Kk]:"fire-gcs-compat",[Gk]:"fire-fst",[Qk]:"fire-fst-compat","fire-js":"fire-js",[Yk]:"fire-js-all"};/**
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
 */const Xn=new Map,Bo=new Map;function dl(t,e){try{t.container.addComponent(e)}catch(n){hf.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function gw(t,e){t.container.addOrOverwriteComponent(e)}function Vr(t){const e=t.name;if(Bo.has(e))return hf.debug(`There were multiple attempts to register component ${e}.`),!1;Bo.set(e,t);for(const n of Xn.values())dl(n,t);return!0}function yw(t,e){return t.container.getProvider(e)}function Zk(t,e,n=Ur){yw(t,e).clearInstance(n)}function eN(){Bo.clear()}/**
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
 */const tN={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function."},jo=new $r("app","Firebase",tN);/**
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
 */class nN{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new vn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw jo.create("app-deleted",{appName:this._name})}}/**
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
 */const Br=Jk;function vw(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:Ur,automaticDataCollectionEnabled:!1},e),r=n.name;if(typeof r!="string"||!r)throw jo.create("bad-app-name",{appName:String(r)});const i=Xn.get(r);if(i){if(sf(t,i.options)&&sf(n,i.config))return i;throw jo.create("duplicate-app",{appName:r})}const s=new wk(r);for(const a of Bo.values())s.addComponent(a);const o=new nN(t,n,s);return Xn.set(r,o),o}function rN(t=Ur){const e=Xn.get(t);if(!e)throw jo.create("no-app",{appName:t});return e}function iN(){return Array.from(Xn.values())}async function ww(t){const e=t.name;Xn.has(e)&&(Xn.delete(e),await Promise.all(t.container.getProviders().map(n=>n.delete())),t.isDeleted=!0)}function Xt(t,e,n){var r;let i=(r=Xk[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),hf.warn(a.join(" "));return}Vr(new vn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}function _w(t,e){if(t!==null&&typeof t!="function")throw jo.create("invalid-log-argument");Sk(t,e)}function Iw(t){Tk(t)}/**
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
 */function sN(t){Vr(new vn("platform-logger",e=>new kk(e),"PRIVATE")),Xt(cf,mw,t),Xt(cf,mw,"esm2017"),Xt("fire-js","")}sN("");var oN=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",SDK_VERSION:Br,_DEFAULT_ENTRY_NAME:Ur,_addComponent:dl,_addOrOverwriteComponent:gw,_apps:Xn,_clearComponents:eN,_components:Bo,_getProvider:yw,_registerComponent:Vr,_removeServiceInstance:Zk,deleteApp:ww,getApp:rN,getApps:iN,initializeApp:vw,onLog:_w,registerVersion:Xt,setLogLevel:Iw,FirebaseError:xt});/**
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
 */class aN{constructor(e,n){this._delegate=e,this.firebase=n,dl(e,new vn("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),ww(this._delegate)))}_getService(e,n=Ur){var r;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(e);return!i.isInitialized()&&((r=i.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&i.initialize(),i.getImmediate({identifier:n})}_removeServiceInstance(e,n=Ur){this._delegate.container.getProvider(e).clearInstance(n)}_addComponent(e){dl(this._delegate,e)}_addOrOverwriteComponent(e){gw(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
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
 */const uN={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance."},Ew=new $r("app-compat","Firebase",uN);/**
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
 */function lN(t){const e={},n={__esModule:!0,initializeApp:s,app:i,registerVersion:Xt,setLogLevel:Iw,onLog:_w,apps:null,SDK_VERSION:Br,INTERNAL:{registerComponent:a,removeApp:r,useAsService:u,modularAPIs:oN}};n.default=n,Object.defineProperty(n,"apps",{get:o});function r(l){delete e[l]}function i(l){if(l=l||Ur,!cw(e,l))throw Ew.create("no-app",{appName:l});return e[l]}i.App=t;function s(l,c={}){const h=vw(l,c);if(cw(e,h.name))return e[h.name];const d=new t(h,n);return e[h.name]=d,d}function o(){return Object.keys(e).map(l=>e[l])}function a(l){const c=l.name,h=c.replace("-compat","");if(Vr(l)&&l.type==="PUBLIC"){const d=(g=i())=>{if(typeof g[h]!="function")throw Ew.create("invalid-app-argument",{appName:c});return g[h]()};l.serviceProps!==void 0&&al(d,l.serviceProps),n[h]=d,t.prototype[h]=function(...g){return this._getService.bind(this,c).apply(this,l.multipleInstances?g:[])}}return l.type==="PUBLIC"?n[h]:null}function u(l,c){return c==="serverAuth"?null:c}return n}/**
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
 */function Tw(){const t=lN(aN);t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:Tw,extendNamespace:e,createSubscribe:dw,ErrorFactory:$r,deepExtend:al});function e(n){al(t,n)}return t}const cN=Tw();/**
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
 */const Sw=new hl("@firebase/app-compat"),hN="@firebase/app-compat",dN="0.1.5";/**
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
 */function fN(t){Xt(hN,dN,t)}/**
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
 */if(ik()&&self.firebase!==void 0){Sw.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);const t=self.firebase.SDK_VERSION;t&&t.indexOf("LITE")>=0&&Sw.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}const zo=cN;fN();var pN="firebase",mN="9.1.3";/**
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
 */zo.registerVersion(pN,mN,"app-compat");const qo={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},Ji={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
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
 */function gN(){return{["admin-restricted-operation"]:"This operation is restricted to administrators only.",["argument-error"]:"",["app-not-authorized"]:"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",["app-not-installed"]:"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",["captcha-check-failed"]:"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",["code-expired"]:"The SMS code has expired. Please re-send the verification code to try again.",["cordova-not-ready"]:"Cordova framework is not ready.",["cors-unsupported"]:"This browser is not supported.",["credential-already-in-use"]:"This credential is already associated with a different user account.",["custom-token-mismatch"]:"The custom token corresponds to a different audience.",["requires-recent-login"]:"This operation is sensitive and requires recent authentication. Log in again before retrying this request.",["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",["dynamic-link-not-activated"]:"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",["email-change-needs-verification"]:"Multi-factor users must always have a verified email.",["email-already-in-use"]:"The email address is already in use by another account.",["emulator-config-failed"]:'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',["expired-action-code"]:"The action code has expired.",["cancelled-popup-request"]:"This operation has been cancelled due to another conflicting popup being opened.",["internal-error"]:"An internal AuthError has occurred.",["invalid-app-credential"]:"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",["invalid-app-id"]:"The mobile app identifier is not registed for the current project.",["invalid-user-token"]:"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",["invalid-auth-event"]:"An internal AuthError has occurred.",["invalid-verification-code"]:"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.",["invalid-continue-uri"]:"The continue URL provided in the request is invalid.",["invalid-cordova-configuration"]:"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",["invalid-custom-token"]:"The custom token format is incorrect. Please check the documentation.",["invalid-dynamic-link-domain"]:"The provided dynamic link domain is not configured or authorized for the current project.",["invalid-email"]:"The email address is badly formatted.",["invalid-emulator-scheme"]:"Emulator URL must start with a valid scheme (http:// or https://).",["invalid-api-key"]:"Your API key is invalid, please check you have copied it correctly.",["invalid-cert-hash"]:"The SHA-1 certificate hash provided is invalid.",["invalid-credential"]:"The supplied auth credential is malformed or has expired.",["invalid-message-payload"]:"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-multi-factor-session"]:"The request does not contain a valid proof of first factor successful sign-in.",["invalid-oauth-provider"]:"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",["invalid-oauth-client-id"]:"The OAuth client ID provided is either invalid or does not match the specified API key.",["unauthorized-domain"]:"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",["invalid-action-code"]:"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",["wrong-password"]:"The password is invalid or the user does not have a password.",["invalid-persistence-type"]:"The specified persistence type is invalid. It can only be local, session or none.",["invalid-phone-number"]:"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",["invalid-provider-id"]:"The specified provider ID is invalid.",["invalid-recipient-email"]:"The email corresponding to this action failed to send as the provided recipient email address is invalid.",["invalid-sender"]:"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-verification-id"]:"The verification ID used to create the phone auth credential is invalid.",["invalid-tenant-id"]:"The Auth instance's tenant ID is invalid.",["missing-android-pkg-name"]:"An Android Package Name must be provided if the Android App is required to be installed.",["auth-domain-config-required"]:"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",["missing-app-credential"]:"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",["missing-verification-code"]:"The phone auth credential was created with an empty SMS verification code.",["missing-continue-uri"]:"A continue URL must be provided in the request.",["missing-iframe-start"]:"An internal AuthError has occurred.",["missing-ios-bundle-id"]:"An iOS Bundle ID must be provided if an App Store ID is provided.",["missing-or-invalid-nonce"]:"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.",["missing-multi-factor-info"]:"No second factor identifier is provided.",["missing-multi-factor-session"]:"The request is missing proof of first factor successful sign-in.",["missing-phone-number"]:"To send verification codes, provide a phone number for the recipient.",["missing-verification-id"]:"The phone auth credential was created with an empty verification ID.",["app-deleted"]:"This instance of FirebaseApp has been deleted.",["multi-factor-info-not-found"]:"The user does not have a second factor matching the identifier provided.",["multi-factor-auth-required"]:"Proof of ownership of a second factor is required to complete sign-in.",["account-exists-with-different-credential"]:"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",["network-request-failed"]:"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.",["no-auth-event"]:"An internal AuthError has occurred.",["no-such-provider"]:"User was not linked to an account with the given provider.",["null-user"]:"A null user object was provided as the argument for an operation which requires a non-null user object.",["operation-not-allowed"]:"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",["operation-not-supported-in-this-environment"]:'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',["popup-blocked"]:"Unable to establish a connection with the popup. It may have been blocked by the browser.",["popup-closed-by-user"]:"The popup has been closed by the user before finalizing the operation.",["provider-already-linked"]:"User can only be linked to one identity for the given provider.",["quota-exceeded"]:"The project's quota for this operation has been exceeded.",["redirect-cancelled-by-user"]:"The redirect operation has been cancelled by the user before finalizing.",["redirect-operation-pending"]:"A redirect sign-in operation is already pending.",["rejected-credential"]:"The request contains malformed or mismatching credentials.",["second-factor-already-in-use"]:"The second factor is already enrolled on this account.",["maximum-second-factor-count-exceeded"]:"The maximum allowed number of second factors on a user has been exceeded.",["tenant-id-mismatch"]:"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.",["user-token-expired"]:"The user's credential is no longer valid. The user must sign in again.",["too-many-requests"]:"We have blocked all requests from this device due to unusual activity. Try again later.",["unauthorized-continue-uri"]:"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",["unsupported-first-factor"]:"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.",["unsupported-persistence-type"]:"The current environment does not support the specified persistence type.",["unsupported-tenant-operation"]:"This operation is not supported in a multi-tenant context.",["unverified-email"]:"The operation requires a verified email.",["user-cancelled"]:"The user did not grant your application the permissions it requested.",["user-not-found"]:"There is no user record corresponding to this identifier. The user may have been deleted.",["user-disabled"]:"The user account has been disabled by an administrator.",["user-mismatch"]:"The supplied credentials do not correspond to the previously signed in user.",["user-signed-out"]:"",["weak-password"]:"The password must be 6 characters long or more.",["web-storage-unsupported"]:"This browser is not supported or 3rd party cookies and data may be disabled.",["already-initialized"]:"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance."}}function kw(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const yN=gN,vN=kw,Nw=new $r("auth","Firebase",kw());/**
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
 */const Cw=new hl("@firebase/auth");function fl(t,...e){Cw.logLevel<=G.ERROR&&Cw.error(`Auth (${Br}): ${t}`,...e)}/**
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
 */function Ue(t,...e){throw df(t,...e)}function Ve(t,...e){return df(t,...e)}function Aw(t,e,n){const r=Object.assign(Object.assign({},vN()),{[e]:n});return new $r("auth","Firebase",r).create(e,{appName:t.name})}function Xi(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Ue(t,"argument-error"),Aw(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function df(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Nw.create(t,...e)}function S(t,e,...n){if(!t)throw df(e,...n)}function Zt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw fl(e),new Error(e)}function jt(t,e){t||Zt(e)}/**
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
 */const Rw=new Map;function It(t){jt(t instanceof Function,"Expected a class definition");let e=Rw.get(t);return e?(jt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Rw.set(t,e),e)}function wN(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(It);(e==null?void 0:e.errorMap)&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function Wo(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function ff(){return bw()==="http:"||bw()==="https:"}function bw(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function _N(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(ff()||nf()||"connection"in navigator)?navigator.onLine:!0}function IN(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Ho{constructor(e,n){this.shortDelay=e,this.longDelay=n,jt(n>e,"Short delay should be less than long delay!"),this.isMobile=lw()||ul()}get(){return _N()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function pf(t,e){jt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class mf{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;Zt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;Zt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;Zt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const EN={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const TN=new Ho(3e4,6e4);function Ie(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Ne(t,e,n,r,i={}){return Dw(t,i,()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Qi(Object.assign({key:t.config.apiKey},o)).slice(1),u=new(mf.headers());return u.set("Content-Type","application/json"),u.set("X-Client-Version",t._getSdkClientVersion()),t.languageCode&&u.set("X-Firebase-Locale",t.languageCode),mf.fetch()(Pw(t,t.config.apiHost,n,a),Object.assign({method:e,headers:u,referrerPolicy:"no-referrer"},s))})}async function Dw(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},EN),e);try{const i=new SN(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw pl(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[u,l]=a.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw pl(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw pl(t,"email-already-in-use",o);const c=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Aw(t,c,l);Ue(t,c)}}catch(i){if(i instanceof xt)throw i;Ue(t,"network-request-failed")}}async function wn(t,e,n,r,i={}){const s=await Ne(t,e,n,r,i);return"mfaPendingCredential"in s&&Ue(t,"multi-factor-auth-required",{serverResponse:s}),s}function Pw(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?pf(t.config,i):`${t.config.apiScheme}://${i}`}class SN{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Ve(this.auth,"timeout")),TN.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function pl(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Ve(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */async function kN(t,e){return Ne(t,"POST","/v1/accounts:delete",e)}async function NN(t,e){return Ne(t,"POST","/v1/accounts:update",e)}async function CN(t,e){return Ne(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ko(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function AN(t,e=!1){const n=L(t),r=await n.getIdToken(e),i=ml(r);S(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Ko(gf(i.auth_time)),issuedAtTime:Ko(gf(i.iat)),expirationTime:Ko(gf(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function gf(t){return Number(t)*1e3}function ml(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return fl("JWT malformed, contained fewer than 3 sections"),null;try{const i=ek(n);return i?JSON.parse(i):(fl("Failed to decode base64 JWT payload"),null)}catch(i){return fl("Caught error parsing JWT payload as JSON",i),null}}function RN(t){const e=ml(t);return S(e,"internal-error"),S(typeof e.exp!="undefined","internal-error"),S(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function _n(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof xt&&bN(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function bN({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class DN{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Ow{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ko(this.lastLoginAt),this.creationTime=Ko(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Go(t){var e;const n=t.auth,r=await t.getIdToken(),i=await _n(t,CN(n,{idToken:r}));S(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=((e=s.providerUserInfo)===null||e===void 0?void 0:e.length)?xN(s.providerUserInfo):[],a=ON(t.providerData,o),u=t.isAnonymous,l=!(t.email&&s.passwordHash)&&!(a==null?void 0:a.length),c=u?l:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Ow(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,h)}async function PN(t){const e=L(t);await Go(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function ON(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function xN(t){return t.map(e=>{var{providerId:n}=e,r=af(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function LN(t,e){const n=await Dw(t,{},()=>{const r=Qi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=Pw(t,i,"/v1/token",`key=${s}`);return mf.fetch()(o,{method:"POST",headers:{"X-Client-Version":t._getSdkClientVersion(),"Content-Type":"application/x-www-form-urlencoded"},body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class Qo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){S(e.idToken,"internal-error"),S(typeof e.idToken!="undefined","internal-error"),S(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):RN(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return S(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await LN(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Qo;return r&&(S(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(S(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(S(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Qo,this.toJSON())}_performRefresh(){return Zt("not implemented")}}/**
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
 */function Zn(t,e){S(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class jr{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=af(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.emailVerified=!1,this.isAnonymous=!1,this.tenantId=null,this.providerData=[],this.proactiveRefresh=new DN(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.metadata=new Ow(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await _n(this,this.stsTokenManager.getToken(this.auth,e));return S(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return AN(this,e)}reload(){return PN(this)}_assign(e){this!==e&&(S(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new jr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){S(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Go(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await _n(this,kN(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,u,l,c;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,g=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,I=(a=n.tenantId)!==null&&a!==void 0?a:void 0,p=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,f=(l=n.createdAt)!==null&&l!==void 0?l:void 0,m=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:w,emailVerified:_,isAnonymous:M,providerData:C,stsTokenManager:$}=n;S(w&&$,e,"internal-error");const V=Qo.fromJSON(this.name,$);S(typeof w=="string",e,"internal-error"),Zn(h,e.name),Zn(d,e.name),S(typeof _=="boolean",e,"internal-error"),S(typeof M=="boolean",e,"internal-error"),Zn(g,e.name),Zn(y,e.name),Zn(I,e.name),Zn(p,e.name),Zn(f,e.name),Zn(m,e.name);const x=new jr({uid:w,auth:e,email:d,emailVerified:_,displayName:h,isAnonymous:M,photoURL:y,phoneNumber:g,tenantId:I,stsTokenManager:V,createdAt:f,lastLoginAt:m});return C&&Array.isArray(C)&&(x.providerData=C.map(we=>Object.assign({},we))),p&&(x._redirectEventId=p),x}static async _fromIdTokenResponse(e,n,r=!1){const i=new Qo;i.updateFromServerResponse(n);const s=new jr({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Go(s),s}}/**
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
 */class xw{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}xw.type="NONE";const Yo=xw;/**
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
 */function zr(t,e,n){return`firebase:${t}:${e}:${n}`}class Zi{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=zr(this.userKey,i.apiKey,s),this.fullPersistenceKey=zr("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?jr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Zi(It(Yo),e,r);const i=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let s=i[0]||It(Yo);const o=zr(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const c=await l._get(o);if(c){const h=jr._fromJSON(e,c);l!==s&&(a=h),s=l;break}}catch{}const u=i.filter(l=>l._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new Zi(s,e,r):(s=u[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==s)try{await l._remove(o)}catch{}})),new Zi(s,e,r))}}/**
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
 */function Lw(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Fw(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Mw(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Uw(e))return"Blackberry";if(Vw(e))return"Webos";if(yf(e))return"Safari";if((e.includes("chrome/")||$w(e))&&!e.includes("edge/"))return"Chrome";if(Jo(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Mw(t=te()){return/firefox\//i.test(t)}function yf(t=te()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function $w(t=te()){return/crios\//i.test(t)}function Fw(t=te()){return/iemobile/i.test(t)}function Jo(t=te()){return/android/i.test(t)}function Uw(t=te()){return/blackberry/i.test(t)}function Vw(t=te()){return/webos/i.test(t)}function es(t=te()){return/iphone|ipad|ipod/i.test(t)}function MN(t=te()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(t)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(t)}function $N(t=te()){var e;return es(t)&&!!((e=window.navigator)===null||e===void 0?void 0:e.standalone)}function FN(){return rf()&&document.documentMode===10}function Bw(t=te()){return es(t)||Jo(t)||Vw(t)||Uw(t)||/windows phone/i.test(t)||Fw(t)}function UN(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function jw(t,e=[]){let n;switch(t){case"Browser":n=Lw(te());break;case"Worker":n=`${Lw(te())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Br}/${r}`}/**
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
 */class VN{constructor(e,n){this.app=e,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new zw(this),this.idTokenSubscription=new zw(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Nw,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=It(n)),this._initializationPromise=this.queue(async()=>{var r;this._deleted||(this.persistenceManager=await Zi.create(this,e),!this._deleted&&(((r=this._popupRedirectResolver)===null||r===void 0?void 0:r._shouldInitProactively)&&await this._popupRedirectResolver._initialize(this),await this.initializeCurrentUser(n),!this._deleted&&(this._isInitialized=!0)))}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e)}}async initializeCurrentUser(e){var n;let r=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,s=r==null?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(e);(!i||i===s)&&(o==null?void 0:o.user)&&(r=o.user)}return r?r._redirectEventId?(S(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)):this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Go(e)}catch(n){if(n.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=IN()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?L(e):null;return n&&S(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&S(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(It(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new $r("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&It(e)||this._popupRedirectResolver;S(n,this,"argument-error"),this.redirectPersistenceManager=await Zi.create(this,[It(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return S(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return S(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=jw(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}_getSdkClientVersion(){return this.clientVersion}}function Ce(t){return L(t)}class zw{constructor(e){this.auth=e,this.observer=null,this.addObserver=dw(n=>this.observer=n)}get next(){return S(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function BN(t,e,n){const r=Ce(t);S(r._canInitEmulator,r,"emulator-config-failed"),S(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n==null?void 0:n.disableWarnings),s=qw(e),{host:o,port:a}=jN(e),u=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||zN()}function qw(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function jN(t){const e=qw(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Ww(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Ww(o)}}}function Ww(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function zN(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console!="undefined"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window!="undefined"&&typeof document!="undefined"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class ts{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Zt("not implemented")}_getIdTokenResponse(e){return Zt("not implemented")}_linkToIdToken(e,n){return Zt("not implemented")}_getReauthenticationResolver(e){return Zt("not implemented")}}/**
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
 */async function Hw(t,e){return Ne(t,"POST","/v1/accounts:resetPassword",Ie(t,e))}async function Kw(t,e){return Ne(t,"POST","/v1/accounts:update",e)}async function qN(t,e){return Ne(t,"POST","/v1/accounts:update",Ie(t,e))}/**
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
 */async function WN(t,e){return wn(t,"POST","/v1/accounts:signInWithPassword",Ie(t,e))}async function gl(t,e){return Ne(t,"POST","/v1/accounts:sendOobCode",Ie(t,e))}async function HN(t,e){return gl(t,e)}async function KN(t,e){return gl(t,e)}async function GN(t,e){return gl(t,e)}async function QN(t,e){return gl(t,e)}/**
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
 */async function YN(t,e){return wn(t,"POST","/v1/accounts:signInWithEmailLink",Ie(t,e))}async function JN(t,e){return wn(t,"POST","/v1/accounts:signInWithEmailLink",Ie(t,e))}/**
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
 */class Xo extends ts{constructor(e,n,r,i=null){super("password",r);this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Xo(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Xo(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return WN(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return YN(e,{email:this._email,oobCode:this._password});default:Ue(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return Kw(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return JN(e,{idToken:n,email:this._email,oobCode:this._password});default:Ue(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function In(t,e){return wn(t,"POST","/v1/accounts:signInWithIdp",Ie(t,e))}/**
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
 */const XN="http://localhost";class en extends ts{constructor(){super(...arguments);this.pendingToken=null}static _fromParams(e){const n=new en(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ue("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=af(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new en(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return In(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,In(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,In(e,n)}buildRequest(){const e={requestUri:XN,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Qi(n)}return e}}/**
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
 */async function ZN(t,e){return Ne(t,"POST","/v1/accounts:sendVerificationCode",Ie(t,e))}async function eC(t,e){return wn(t,"POST","/v1/accounts:signInWithPhoneNumber",Ie(t,e))}async function tC(t,e){const n=await wn(t,"POST","/v1/accounts:signInWithPhoneNumber",Ie(t,e));if(n.temporaryProof)throw pl(t,"account-exists-with-different-credential",n);return n}const nC={USER_NOT_FOUND:"user-not-found"};async function rC(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return wn(t,"POST","/v1/accounts:signInWithPhoneNumber",Ie(t,n),nC)}/**
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
 */class qr extends ts{constructor(e){super("phone","phone");this.params=e}static _fromVerification(e,n){return new qr({verificationId:e,verificationCode:n})}static _fromTokenResponse(e,n){return new qr({phoneNumber:e,temporaryProof:n})}_getIdTokenResponse(e){return eC(e,this._makeVerificationRequest())}_linkToIdToken(e,n){return tC(e,Object.assign({idToken:n},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return rC(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:n,verificationId:r,verificationCode:i}=this.params;return e&&n?{temporaryProof:e,phoneNumber:n}:{sessionInfo:r,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!n&&!i&&!s?null:new qr({verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s})}}/**
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
 */function iC(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function sC(t){const e=Yi(Vo(t)).link,n=e?Yi(Vo(e)).deep_link_id:null,r=Yi(Vo(t)).deep_link_id;return(r?Yi(Vo(r)).link:null)||r||n||e||t}class yl{constructor(e){var n,r,i,s,o,a;const u=Yi(Vo(e)),l=(n=u.apiKey)!==null&&n!==void 0?n:null,c=(r=u.oobCode)!==null&&r!==void 0?r:null,h=iC((i=u.mode)!==null&&i!==void 0?i:null);S(l&&c&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=c,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=u.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=sC(e);try{return new yl(n)}catch{return null}}}/**
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
 */class er{constructor(){this.providerId=er.PROVIDER_ID}static credential(e,n){return Xo._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=yl.parseLink(n);return S(r,"argument-error"),Xo._fromEmailAndCode(e,r.code,r.tenantId)}}er.PROVIDER_ID="password";er.EMAIL_PASSWORD_SIGN_IN_METHOD="password";er.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class tr{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ns extends tr{constructor(){super(...arguments);this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class rs extends ns{static credentialFromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;return S("providerId"in n&&"signInMethod"in n,"argument-error"),en._fromParams(n)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return S(e.idToken||e.accessToken,"argument-error"),en._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return rs.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return rs.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r,oauthTokenSecret:i,pendingToken:s,nonce:o,providerId:a}=e;if(!r&&!i&&!n&&!s||!a)return null;try{return new rs(a)._credential({idToken:n,accessToken:r,nonce:o,pendingToken:s})}catch{return null}}}/**
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
 */class tn extends ns{constructor(){super("facebook.com")}static credential(e){return en._fromParams({providerId:tn.PROVIDER_ID,signInMethod:tn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return tn.credentialFromTaggedObject(e)}static credentialFromError(e){return tn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return tn.credential(e.oauthAccessToken)}catch{return null}}}tn.FACEBOOK_SIGN_IN_METHOD="facebook.com";tn.PROVIDER_ID="facebook.com";/**
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
 */class nn extends ns{constructor(){super("google.com");this.addScope("profile")}static credential(e,n){return en._fromParams({providerId:nn.PROVIDER_ID,signInMethod:nn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return nn.credentialFromTaggedObject(e)}static credentialFromError(e){return nn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return nn.credential(n,r)}catch{return null}}}nn.GOOGLE_SIGN_IN_METHOD="google.com";nn.PROVIDER_ID="google.com";/**
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
 */class rn extends ns{constructor(){super("github.com")}static credential(e){return en._fromParams({providerId:rn.PROVIDER_ID,signInMethod:rn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return rn.credentialFromTaggedObject(e)}static credentialFromError(e){return rn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return rn.credential(e.oauthAccessToken)}catch{return null}}}rn.GITHUB_SIGN_IN_METHOD="github.com";rn.PROVIDER_ID="github.com";/**
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
 */const oC="http://localhost";class vl extends ts{constructor(e,n){super(e,e);this.pendingToken=n}_getIdTokenResponse(e){const n=this.buildRequest();return In(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,In(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,In(e,n)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,pendingToken:s}=n;return!r||!i||!s||r!==i?null:new vl(r,s)}static _create(e,n){return new vl(e,n)}buildRequest(){return{requestUri:oC,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
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
 */class sn extends ns{constructor(){super("twitter.com")}static credential(e,n){return en._fromParams({providerId:sn.PROVIDER_ID,signInMethod:sn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return sn.credentialFromTaggedObject(e)}static credentialFromError(e){return sn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return sn.credential(n,r)}catch{return null}}}sn.TWITTER_SIGN_IN_METHOD="twitter.com";sn.PROVIDER_ID="twitter.com";/**
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
 */async function Gw(t,e){return wn(t,"POST","/v1/accounts:signUp",Ie(t,e))}/**
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
 */class Lt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await jr._fromIdTokenResponse(e,r,i),o=Qw(r);return new Lt({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Qw(r);return new Lt({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Qw(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */async function aC(t){var e;const n=Ce(t);if(await n._initializationPromise,(e=n.currentUser)===null||e===void 0?void 0:e.isAnonymous)return new Lt({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await Gw(n,{returnSecureToken:!0}),i=await Lt._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}/**
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
 */class wl extends xt{constructor(e,n,r,i){var s;super(n.code,n.message);this.operationType=r,this.user=i,this.name="FirebaseError",Object.setPrototypeOf(this,wl.prototype),this.appName=e.name,this.code=n.code,this.tenantId=(s=e.tenantId)!==null&&s!==void 0?s:void 0,this.serverResponse=n.customData.serverResponse}static _fromErrorAndOperation(e,n,r,i){return new wl(e,n,r,i)}}function Yw(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?wl._fromErrorAndOperation(t,s,e,r):s})}/**
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
 */function Jw(t){return new Set(t.map(({providerId:e})=>e).filter(e=>!!e))}/**
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
 */async function uC(t,e){const n=L(t);await _l(!0,n,e);const{providerUserInfo:r}=await NN(n.auth,{idToken:await n.getIdToken(),deleteProvider:[e]}),i=Jw(r||[]);return n.providerData=n.providerData.filter(s=>i.has(s.providerId)),i.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function vf(t,e,n=!1){const r=await _n(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Lt._forOperation(t,"link",r)}async function _l(t,e,n){await Go(e);const r=Jw(e.providerData),i=t===!1?"provider-already-linked":"no-such-provider";S(r.has(n)===t,e.auth,i)}/**
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
 */async function Xw(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await _n(t,Yw(r,i,e,t),n);S(s.idToken,r,"internal-error");const o=ml(s.idToken);S(o,r,"internal-error");const{sub:a}=o;return S(t.uid===a,r,"user-mismatch"),Lt._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Ue(r,"user-mismatch"),s}}/**
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
 */async function Zw(t,e,n=!1){const r="signIn",i=await Yw(t,r,e),s=await Lt._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function Il(t,e){return Zw(Ce(t),e)}async function e0(t,e){const n=L(t);return await _l(!1,n,e.providerId),vf(n,e)}async function t0(t,e){return Xw(L(t),e)}/**
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
 */async function lC(t,e){return wn(t,"POST","/v1/accounts:signInWithCustomToken",Ie(t,e))}/**
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
 */async function cC(t,e){const n=Ce(t),r=await lC(n,{token:e,returnSecureToken:!0}),i=await Lt._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(i.user),i}/**
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
 */class El{constructor(e,n){this.factorId=e,this.uid=n.mfaEnrollmentId,this.enrollmentTime=new Date(n.enrolledAt).toUTCString(),this.displayName=n.displayName}static _fromServerResponse(e,n){return"phoneInfo"in n?wf._fromServerResponse(e,n):Ue(e,"internal-error")}}class wf extends El{constructor(e){super("phone",e);this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,n){return new wf(n)}}/**
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
 */function Tl(t,e,n){var r;S(((r=n.url)===null||r===void 0?void 0:r.length)>0,t,"invalid-continue-uri"),S(typeof n.dynamicLinkDomain=="undefined"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(S(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(S(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
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
 */async function hC(t,e,n){const r=L(t),i={requestType:"PASSWORD_RESET",email:e};n&&Tl(r,i,n),await KN(r,i)}async function dC(t,e,n){await Hw(L(t),{oobCode:e,newPassword:n})}async function fC(t,e){await qN(L(t),{oobCode:e})}async function n0(t,e){const n=L(t),r=await Hw(n,{oobCode:e}),i=r.requestType;switch(S(i,n,"internal-error"),i){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":S(r.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":S(r.mfaInfo,n,"internal-error");default:S(r.email,n,"internal-error")}let s=null;return r.mfaInfo&&(s=El._fromServerResponse(Ce(n),r.mfaInfo)),{data:{email:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.newEmail:r.email)||null,previousEmail:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.email:r.newEmail)||null,multiFactorInfo:s},operation:i}}async function pC(t,e){const{data:n}=await n0(L(t),e);return n.email}async function mC(t,e,n){const r=Ce(t),i=await Gw(r,{returnSecureToken:!0,email:e,password:n}),s=await Lt._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(s.user),s}function gC(t,e,n){return Il(L(t),er.credential(e,n))}/**
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
 */async function yC(t,e,n){const r=L(t),i={requestType:"EMAIL_SIGNIN",email:e};S(n.handleCodeInApp,r,"argument-error"),n&&Tl(r,i,n),await GN(r,i)}function vC(t,e){const n=yl.parseLink(e);return(n==null?void 0:n.operation)==="EMAIL_SIGNIN"}async function wC(t,e,n){const r=L(t),i=er.credentialWithLink(e,n||Wo());return S(i._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),Il(r,i)}/**
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
 */async function _C(t,e){return Ne(t,"POST","/v1/accounts:createAuthUri",Ie(t,e))}/**
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
 */async function IC(t,e){const n=ff()?Wo():"http://localhost",r={identifier:e,continueUri:n},{signinMethods:i}=await _C(L(t),r);return i||[]}async function EC(t,e){const n=L(t),r=await t.getIdToken(),i={requestType:"VERIFY_EMAIL",idToken:r};e&&Tl(n.auth,i,e);const{email:s}=await HN(n.auth,i);s!==t.email&&await t.reload()}async function TC(t,e,n){const r=L(t),i=await t.getIdToken(),s={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:i,newEmail:e};n&&Tl(r.auth,s,n);const{email:o}=await QN(r.auth,s);o!==t.email&&await t.reload()}/**
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
 */async function SC(t,e){return Ne(t,"POST","/v1/accounts:update",e)}/**
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
 */async function kC(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=L(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await _n(r,SC(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:u})=>u==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function NC(t,e){return r0(L(t),e,null)}function CC(t,e){return r0(L(t),null,e)}async function r0(t,e,n){const{auth:r}=t,s={idToken:await t.getIdToken(),returnSecureToken:!0};e&&(s.email=e),n&&(s.password=n);const o=await _n(t,Kw(r,s));await t._updateTokensIfNecessary(o,!0)}/**
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
 */function AC(t){var e,n;if(!t)return null;const{providerId:r}=t,i=t.rawUserInfo?JSON.parse(t.rawUserInfo):{},s=t.isNewUser||t.kind==="identitytoolkit#SignupNewUserResponse";if(!r&&(t==null?void 0:t.idToken)){const o=(n=(e=ml(t.idToken))===null||e===void 0?void 0:e.firebase)===null||n===void 0?void 0:n.sign_in_provider;if(o){const a=o!=="anonymous"&&o!=="custom"?o:null;return new is(s,a)}}if(!r)return null;switch(r){case"facebook.com":return new RC(s,i);case"github.com":return new bC(s,i);case"google.com":return new DC(s,i);case"twitter.com":return new PC(s,i,t.screenName||null);case"custom":case"anonymous":return new is(s,null);default:return new is(s,r,i)}}class is{constructor(e,n,r={}){this.isNewUser=e,this.providerId=n,this.profile=r}}class i0 extends is{constructor(e,n,r,i){super(e,n,r);this.username=i}}class RC extends is{constructor(e,n){super(e,"facebook.com",n)}}class bC extends i0{constructor(e,n){super(e,"github.com",n,typeof(n==null?void 0:n.login)=="string"?n==null?void 0:n.login:null)}}class DC extends is{constructor(e,n){super(e,"google.com",n)}}class PC extends i0{constructor(e,n,r){super(e,"twitter.com",n,r)}}function OC(t){const{user:e,_tokenResponse:n}=t;return e.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:AC(n)}class Wr{constructor(e,n){this.type=e,this.credential=n}static _fromIdtoken(e){return new Wr("enroll",e)}static _fromMfaPendingCredential(e){return new Wr("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var n,r;if(e==null?void 0:e.multiFactorSession){if((n=e.multiFactorSession)===null||n===void 0?void 0:n.pendingCredential)return Wr._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if((r=e.multiFactorSession)===null||r===void 0?void 0:r.idToken)return Wr._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
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
 */class _f{constructor(e,n,r){this.session=e,this.hints=n,this.signInResolver=r}static _fromError(e,n){const r=Ce(e),i=(n.serverResponse.mfaInfo||[]).map(o=>El._fromServerResponse(r,o));S(n.serverResponse.mfaPendingCredential,r,"internal-error");const s=Wr._fromMfaPendingCredential(n.serverResponse.mfaPendingCredential);return new _f(s,i,async o=>{const a=await o._process(r,s);delete n.serverResponse.mfaInfo,delete n.serverResponse.mfaPendingCredential;const u=Object.assign(Object.assign({},n.serverResponse),{idToken:a.idToken,refreshToken:a.refreshToken});switch(n.operationType){case"signIn":const l=await Lt._fromIdTokenResponse(r,n.operationType,u);return await r._updateCurrentUser(l.user),l;case"reauthenticate":return S(n.user,r,"internal-error"),Lt._forOperation(n.user,n.operationType,u);default:Ue(r,"internal-error")}})}async resolveSignIn(e){const n=e;return this.signInResolver(n)}}function xC(t,e){var n;const r=L(t),i=e;return S(e.operationType,r,"argument-error"),S((n=i.serverResponse)===null||n===void 0?void 0:n.mfaPendingCredential,r,"argument-error"),_f._fromError(r,i)}/**
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
 */function LC(t,e){return Ne(t,"POST","/v2/accounts/mfaEnrollment:start",Ie(t,e))}function MC(t,e){return Ne(t,"POST","/v2/accounts/mfaEnrollment:finalize",Ie(t,e))}function $C(t,e){return Ne(t,"POST","/v2/accounts/mfaEnrollment:withdraw",Ie(t,e))}class If{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(n=>{n.mfaInfo&&(this.enrolledFactors=n.mfaInfo.map(r=>El._fromServerResponse(e.auth,r)))})}static _fromUser(e){return new If(e)}async getSession(){return Wr._fromIdtoken(await this.user.getIdToken())}async enroll(e,n){const r=e,i=await this.getSession(),s=await _n(this.user,r._process(this.user.auth,i,n));return await this.user._updateTokensIfNecessary(s),this.user.reload()}async unenroll(e){const n=typeof e=="string"?e:e.uid,r=await this.user.getIdToken(),i=await _n(this.user,$C(this.user.auth,{idToken:r,mfaEnrollmentId:n}));this.enrolledFactors=this.enrolledFactors.filter(({uid:s})=>s!==n),await this.user._updateTokensIfNecessary(i);try{await this.user.reload()}catch(s){if(s.code!=="auth/user-token-expired")throw s}}}const Ef=new WeakMap;function FC(t){const e=L(t);return Ef.has(e)||Ef.set(e,If._fromUser(e)),Ef.get(e)}const Sl="__sak";/**
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
 */class s0{constructor(e,n){this.storage=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Sl,"1"),this.storage.removeItem(Sl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}}/**
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
 */function UC(){const t=te();return yf(t)||es(t)}const VC=1e3,BC=10;class o0 extends s0{constructor(){super(window.localStorage,"LOCAL");this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=UC()&&UN(),this.fallbackToPolling=Bw(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,u)=>{this.notifyListeners(o,u)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);FN()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,BC):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},VC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}o0.type="LOCAL";const Tf=o0;/**
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
 */class a0 extends s0{constructor(){super(window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}a0.type="SESSION";const Hr=a0;/**
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
 */function jC(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class kl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new kl(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o==null?void 0:o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async l=>l(n.origin,s)),u=await jC(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}kl.receivers=[];/**
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
 */function Zo(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class zC{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,u)=>{const l=Zo("",20);i.port1.start();const c=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(c),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Ee(){return window}function qC(t){Ee().location.href=t}/**
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
 */function Sf(){return typeof Ee().WorkerGlobalScope!="undefined"&&typeof Ee().importScripts=="function"}async function WC(){if(!(navigator==null?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function HC(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function KC(){return Sf()?self:null}/**
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
 */const u0="firebaseLocalStorageDb",GC=1,Nl="firebaseLocalStorage",l0="fbase_key";class ea{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Cl(t,e){return t.transaction([Nl],e?"readwrite":"readonly").objectStore(Nl)}function QC(){const t=indexedDB.deleteDatabase(u0);return new ea(t).toPromise()}function kf(){const t=indexedDB.open(u0,GC);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Nl,{keyPath:l0})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Nl)?e(r):(r.close(),await QC(),e(await kf()))})})}async function c0(t,e,n){const r=Cl(t,!0).put({[l0]:e,value:n});return new ea(r).toPromise()}async function YC(t,e){const n=Cl(t,!1).get(e),r=await new ea(n).toPromise();return r===void 0?null:r.value}function h0(t,e){const n=Cl(t,!0).delete(e);return new ea(n).toPromise()}const JC=800,XC=3;class d0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await kf(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>XC)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Sf()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=kl._getInstance(KC()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await WC(),!this.activeServiceWorker)return;this.sender=new zC(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||HC()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await kf();return await c0(e,Sl,"1"),await h0(e,Sl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>c0(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>YC(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>h0(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Cl(i,!1).getAll();return new ea(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),JC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}d0.type="LOCAL";const Al=d0;/**
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
 */function ZC(t,e){return Ne(t,"POST","/v2/accounts/mfaSignIn:start",Ie(t,e))}function eA(t,e){return Ne(t,"POST","/v2/accounts/mfaSignIn:finalize",Ie(t,e))}/**
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
 */async function tA(t){return(await Ne(t,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}/**
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
 */function nA(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function f0(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Ve("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",nA().appendChild(r)})}function p0(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */const rA=500,iA=6e4,Rl=1e12;class sA{constructor(e){this.auth=e,this.counter=Rl,this._widgets=new Map}render(e,n){const r=this.counter;return this._widgets.set(r,new oA(e,this.auth.name,n||{})),this.counter++,r}reset(e){var n;const r=e||Rl;(n=this._widgets.get(r))===null||n===void 0||n.delete(),this._widgets.delete(r)}getResponse(e){var n;const r=e||Rl;return((n=this._widgets.get(r))===null||n===void 0?void 0:n.getResponse())||""}async execute(e){var n;const r=e||Rl;return(n=this._widgets.get(r))===null||n===void 0||n.execute(),""}}class oA{constructor(e,n,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;S(i,"argument-error",{appName:n}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=aA(50);const{callback:e,"expired-callback":n}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,n)try{n()}catch{}this.isVisible&&this.execute()},iA)},rA))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function aA(t){const e=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<t;r++)e.push(n.charAt(Math.floor(Math.random()*n.length)));return e.join("")}/**
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
 */const Nf=p0("rcb"),uA=new Ho(3e4,6e4),lA="https://www.google.com/recaptcha/api.js?";class cA{constructor(){this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!Ee().grecaptcha}load(e,n=""){return S(hA(n),e,"argument-error"),this.shouldResolveImmediately(n)?Promise.resolve(Ee().grecaptcha):new Promise((r,i)=>{const s=Ee().setTimeout(()=>{i(Ve(e,"network-request-failed"))},uA.get());Ee()[Nf]=()=>{Ee().clearTimeout(s),delete Ee()[Nf];const a=Ee().grecaptcha;if(!a){i(Ve(e,"internal-error"));return}const u=a.render;a.render=(l,c)=>{const h=u(l,c);return this.counter++,h},this.hostLanguage=n,r(a)};const o=`${lA}?${Qi({onload:Nf,render:"explicit",hl:n})}`;f0(o).catch(()=>{clearTimeout(s),i(Ve(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){return!!Ee().grecaptcha&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function hA(t){return t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t)}class dA{async load(e){return new sA(e)}clearedOneInstance(){}}/**
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
 */const m0="recaptcha",fA={theme:"light",type:"image"};class pA{constructor(e,n=Object.assign({},fA),r){this.parameters=n,this.type=m0,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=Ce(r),this.isInvisible=this.parameters.size==="invisible",S(typeof document!="undefined",this.auth,"operation-not-supported-in-this-environment");const i=typeof e=="string"?document.getElementById(e):e;S(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new dA:new cA,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),n=this.getAssertedRecaptcha(),r=n.getResponse(e);return r||new Promise(i=>{const s=o=>{!o||(this.tokenChangeListeners.delete(s),i(o))};this.tokenChangeListeners.add(s),this.isInvisible&&n.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){S(!this.parameters.sitekey,this.auth,"argument-error"),S(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),S(typeof document!="undefined",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return n=>{if(this.tokenChangeListeners.forEach(r=>r(n)),typeof e=="function")e(n);else if(typeof e=="string"){const r=Ee()[e];typeof r=="function"&&r(n)}}}assertNotDestroyed(){S(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const n=document.createElement("div");e.appendChild(n),e=n}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){S(ff()&&!Sf(),this.auth,"internal-error"),await mA(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await tA(this.auth);S(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return S(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function mA(){let t=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}t=()=>e(),window.addEventListener("load",t)}).catch(e=>{throw t&&window.removeEventListener("load",t),e})}/**
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
 */class Cf{constructor(e,n){this.verificationId=e,this.onConfirmation=n}confirm(e){const n=qr._fromVerification(this.verificationId,e);return this.onConfirmation(n)}}async function gA(t,e,n){const r=Ce(t),i=await bl(r,e,L(n));return new Cf(i,s=>Il(r,s))}async function yA(t,e,n){const r=L(t);await _l(!1,r,"phone");const i=await bl(r.auth,e,L(n));return new Cf(i,s=>e0(r,s))}async function vA(t,e,n){const r=L(t),i=await bl(r.auth,e,L(n));return new Cf(i,s=>t0(r,s))}async function bl(t,e,n){var r;const i=await n.verify();try{S(typeof i=="string",t,"argument-error"),S(n.type===m0,t,"argument-error");let s;if(typeof e=="string"?s={phoneNumber:e}:s=e,"session"in s){const o=s.session;if("phoneNumber"in s)return S(o.type==="enroll",t,"internal-error"),(await LC(t,{idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}})).phoneSessionInfo.sessionInfo;{S(o.type==="signin",t,"internal-error");const a=((r=s.multiFactorHint)===null||r===void 0?void 0:r.uid)||s.multiFactorUid;return S(a,t,"missing-multi-factor-info"),(await ZC(t,{mfaPendingCredential:o.credential,mfaEnrollmentId:a,phoneSignInInfo:{recaptchaToken:i}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:o}=await ZN(t,{phoneNumber:s.phoneNumber,recaptchaToken:i});return o}}finally{n._reset()}}async function wA(t,e){await vf(L(t),e)}/**
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
 */class zt{constructor(e){this.providerId=zt.PROVIDER_ID,this.auth=Ce(e)}verifyPhoneNumber(e,n){return bl(this.auth,e,L(n))}static credential(e,n){return qr._fromVerification(e,n)}static credentialFromResult(e){const n=e;return zt.credentialFromTaggedObject(n)}static credentialFromError(e){return zt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:n,temporaryProof:r}=e;return n&&r?qr._fromTokenResponse(n,r):null}}zt.PROVIDER_ID="phone";zt.PHONE_SIGN_IN_METHOD="phone";/**
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
 */function Kr(t,e){return e?It(e):(S(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Af extends ts{constructor(e){super("custom","custom");this.params=e}_getIdTokenResponse(e){return In(e,this._buildIdpRequest())}_linkToIdToken(e,n){return In(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return In(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function _A(t){return Zw(t.auth,new Af(t),t.bypassAuthState)}function IA(t){const{auth:e,user:n}=t;return S(n,e,"internal-error"),Xw(n,new Af(t),t.bypassAuthState)}async function EA(t){const{auth:e,user:n}=t;return S(n,e,"internal-error"),vf(n,new Af(t),t.bypassAuthState)}/**
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
 */class g0{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(u))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return _A;case"linkViaPopup":case"linkViaRedirect":return EA;case"reauthViaPopup":case"reauthViaRedirect":return IA;default:Ue(this.auth,"internal-error")}}resolve(e){jt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){jt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const TA=new Ho(2e3,1e4);async function SA(t,e,n){const r=Ce(t);Xi(t,e,tr);const i=Kr(r,n);return new En(r,"signInViaPopup",e,i).executeNotNull()}async function kA(t,e,n){const r=L(t);Xi(r.auth,e,tr);const i=Kr(r.auth,n);return new En(r.auth,"reauthViaPopup",e,i,r).executeNotNull()}async function NA(t,e,n){const r=L(t);Xi(r.auth,e,tr);const i=Kr(r.auth,n);return new En(r.auth,"linkViaPopup",e,i,r).executeNotNull()}class En extends g0{constructor(e,n,r,i,s){super(e,n,i,s);this.provider=r,this.authWindow=null,this.pollId=null,En.currentPopupAction&&En.currentPopupAction.cancel(),En.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return S(e,this.auth,"internal-error"),e}async onExecution(){jt(this.filter.length===1,"Popup operations only handle one event");const e=Zo();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ve(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ve(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,En.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0?void 0:r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ve(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,TA.get())};e()}}En.currentPopupAction=null;/**
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
 */const CA="pendingRedirect",Rf=new Map;class AA extends g0{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r);this.eventId=null}async execute(){let e=Rf.get(this.auth._key());if(!e){try{const r=await RA(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Rf.set(this.auth._key(),e)}return e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function RA(t,e){const n=y0(e),r=await Df(t)._get(n)==="true";return await Df(t)._remove(n),r}async function bf(t,e){return Df(t)._set(y0(e),"true")}function bA(){Rf.clear()}function Df(t){return It(t._redirectPersistence)}function y0(t){return zr(CA,t.config.apiKey,t.name)}/**
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
 */function DA(t,e,n){return PA(t,e,n)}async function PA(t,e,n){const r=Ce(t);Xi(t,e,tr);const i=Kr(r,n);return await bf(i,r),i._openRedirect(r,e,"signInViaRedirect")}function OA(t,e,n){return xA(t,e,n)}async function xA(t,e,n){const r=L(t);Xi(r.auth,e,tr);const i=Kr(r.auth,n);await bf(i,r.auth);const s=await v0(r);return i._openRedirect(r.auth,e,"reauthViaRedirect",s)}function LA(t,e,n){return MA(t,e,n)}async function MA(t,e,n){const r=L(t);Xi(r.auth,e,tr);const i=Kr(r.auth,n);await _l(!1,r,e.providerId),await bf(i,r.auth);const s=await v0(r);return i._openRedirect(r.auth,e,"linkViaRedirect",s)}async function $A(t,e){return await Ce(t)._initializationPromise,Dl(t,e,!1)}async function Dl(t,e,n=!1){const r=Ce(t),i=Kr(r,e),o=await new AA(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}async function v0(t){const e=Zo(`${t.uid}:::`);return t._redirectEventId=e,await t.auth._setRedirectUser(t),await t.auth._persistUserIfCurrent(t),e}/**
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
 */const FA=10*60*1e3;class w0{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!UA(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!I0(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Ve(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=FA&&this.cachedEventUids.clear(),this.cachedEventUids.has(_0(e))}saveEventToCache(e){this.cachedEventUids.add(_0(e)),this.lastProcessedEventTime=Date.now()}}function _0(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function I0({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function UA(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return I0(t);default:return!1}}/**
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
 */async function E0(t,e={}){return Ne(t,"GET","/v1/projects",e)}/**
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
 */const VA=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,BA=/^https?/;async function jA(t){if(t.config.emulator)return;const{authorizedDomains:e}=await E0(t);for(const n of e)try{if(zA(n))return}catch{}Ue(t,"unauthorized-domain")}function zA(t){const e=Wo(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!BA.test(n))return!1;if(VA.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const qA=new Ho(3e4,6e4);function T0(){const t=Ee().___jsl;if(t==null?void 0:t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function WA(t){return new Promise((e,n)=>{var r,i,s;function o(){T0(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{T0(),n(Ve(t,"network-request-failed"))},timeout:qA.get()})}if((i=(r=Ee().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0?void 0:i.Iframe)e(gapi.iframes.getContext());else if((s=Ee().gapi)===null||s===void 0?void 0:s.load)o();else{const a=p0("iframefcb");return Ee()[a]=()=>{gapi.load?o():n(Ve(t,"network-request-failed"))},f0(`https://apis.google.com/js/api.js?onload=${a}`)}}).catch(e=>{throw Pl=null,e})}let Pl=null;function HA(t){return Pl=Pl||WA(t),Pl}/**
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
 */const KA=new Ho(5e3,15e3),GA="__/auth/iframe",QA="emulator/auth/iframe",YA={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"}},JA=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function XA(t){const e=t.config;S(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?pf(e,QA):`https://${t.config.authDomain}/${GA}`,r={apiKey:e.apiKey,appName:t.name,v:Br},i=JA.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Qi(r).slice(1)}`}async function ZA(t){const e=await HA(t),n=Ee().gapi;return S(n,t,"internal-error"),e.open({where:document.body,url:XA(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:YA,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Ve(t,"network-request-failed"),a=Ee().setTimeout(()=>{s(o)},KA.get());function u(){Ee().clearTimeout(a),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
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
 */const eR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},tR=500,nR=600,rR="_blank",iR="http://localhost";class S0{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function sR(t,e,n,r=tR,i=nR){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const u=Object.assign(Object.assign({},eR),{width:r.toString(),height:i.toString(),top:s,left:o}),l=te().toLowerCase();n&&(a=$w(l)?rR:n),Mw(l)&&(e=e||iR,u.scrollbars="yes");const c=Object.entries(u).reduce((d,[g,y])=>`${d}${g}=${y},`,"");if($N(l)&&a!=="_self")return oR(e||"",a),new S0(null);const h=window.open(e||"",a,c);S(h,t,"popup-blocked");try{h.focus()}catch{}return new S0(h)}function oR(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const aR="__/auth/handler",uR="emulator/auth/handler";function Pf(t,e,n,r,i,s){S(t.config.authDomain,t,"auth-domain-config-required"),S(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Br,eventId:i};if(e instanceof tr){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",hk(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,l]of Object.entries(s||{}))o[u]=l}if(e instanceof ns){const u=e.getScopes().filter(l=>l!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];return`${lR(t)}?${Qi(a).slice(1)}`}function lR({config:t}){return t.emulator?pf(t,uR):`https://${t.authDomain}/${aR}`}/**
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
 */const Of="webStorageSupport";class cR{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Hr,this._completeRedirectFn=Dl}async _openPopup(e,n,r,i){var s;jt((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=Pf(e,n,r,Wo(),i);return sR(e,o,Zo())}async _openRedirect(e,n,r,i){return await this._originValidation(e),qC(Pf(e,n,r,Wo(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(jt(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r}async initAndGetManager(e){const n=await ZA(e),r=new w0(e);return n.register("authEvent",i=>(S(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Of,{type:Of},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Of];o!==void 0&&n(!!o),Ue(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=jA(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Bw()||yf()||es()}}const hR=cR;class dR{constructor(e){this.factorId=e}_process(e,n,r){switch(n.type){case"enroll":return this._finalizeEnroll(e,n.credential,r);case"signin":return this._finalizeSignIn(e,n.credential);default:return Zt("unexpected MultiFactorSessionType")}}}class xf extends dR{constructor(e){super("phone");this.credential=e}static _fromCredential(e){return new xf(e)}_finalizeEnroll(e,n,r){return MC(e,{idToken:n,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,n){return eA(e,{mfaPendingCredential:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class k0{constructor(){}static assertion(e){return xf._fromCredential(e)}}k0.FACTOR_ID="phone";var N0="@firebase/auth",C0="0.18.3";/**
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
 */class fR{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{var i;e(((i=r)===null||i===void 0?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){S(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function pR(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function mR(t){Vr(new vn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),{apiKey:i,authDomain:s}=r.options;return(o=>{S(i&&!i.includes(":"),"invalid-api-key",{appName:o.name}),S(!(s==null?void 0:s.includes(":")),"argument-error",{appName:o.name});const a={apiKey:i,authDomain:s,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:jw(t)},u=new VN(o,a);return wN(u,n),u})(r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Vr(new vn("auth-internal",e=>{const n=Ce(e.getProvider("auth").getImmediate());return(r=>new fR(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Xt(N0,C0,pR(t)),Xt(N0,C0,"esm2017")}mR("Browser");/**
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
 */function Gr(){return window}/**
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
 */const gR=2e3;async function yR(t,e,n){var r;const{BuildInfo:i}=Gr();jt(e.sessionId,"AuthEvent did not contain a session ID");const s=await ER(e.sessionId),o={};return es()?o.ibi=i.packageName:Jo()?o.apn=i.packageName:Ue(t,"operation-not-supported-in-this-environment"),i.displayName&&(o.appDisplayName=i.displayName),o.sessionId=s,Pf(t,n,e.type,void 0,(r=e.eventId)!==null&&r!==void 0?r:void 0,o)}async function vR(t){const{BuildInfo:e}=Gr(),n={};es()?n.iosBundleId=e.packageName:Jo()?n.androidPackageName=e.packageName:Ue(t,"operation-not-supported-in-this-environment"),await E0(t,n)}function wR(t){const{cordova:e}=Gr();return new Promise(n=>{e.plugins.browsertab.isAvailable(r=>{let i=null;r?e.plugins.browsertab.openUrl(t):i=e.InAppBrowser.open(t,MN()?"_blank":"_system","location=yes"),n(i)})})}async function _R(t,e,n){const{cordova:r}=Gr();let i=()=>{};try{await new Promise((s,o)=>{let a=null;function u(){var h;s();const d=(h=r.plugins.browsertab)===null||h===void 0?void 0:h.close;typeof d=="function"&&d(),typeof(n==null?void 0:n.close)=="function"&&n.close()}function l(){a||(a=window.setTimeout(()=>{o(Ve(t,"redirect-cancelled-by-user"))},gR))}function c(){(document==null?void 0:document.visibilityState)==="visible"&&l()}e.addPassiveListener(u),document.addEventListener("resume",l,!1),Jo()&&document.addEventListener("visibilitychange",c,!1),i=()=>{e.removePassiveListener(u),document.removeEventListener("resume",l,!1),document.removeEventListener("visibilitychange",c,!1),a&&window.clearTimeout(a)}})}finally{i()}}function IR(t){var e,n,r,i,s,o,a,u,l,c;const h=Gr();S(typeof((e=h==null?void 0:h.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),S(typeof((n=h==null?void 0:h.BuildInfo)===null||n===void 0?void 0:n.packageName)!="undefined",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),S(typeof((s=(i=(r=h==null?void 0:h.cordova)===null||r===void 0?void 0:r.plugins)===null||i===void 0?void 0:i.browsertab)===null||s===void 0?void 0:s.openUrl)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),S(typeof((u=(a=(o=h==null?void 0:h.cordova)===null||o===void 0?void 0:o.plugins)===null||a===void 0?void 0:a.browsertab)===null||u===void 0?void 0:u.isAvailable)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),S(typeof((c=(l=h==null?void 0:h.cordova)===null||l===void 0?void 0:l.InAppBrowser)===null||c===void 0?void 0:c.open)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function ER(t){const e=TR(t),n=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(n)).map(i=>i.toString(16).padStart(2,"0")).join("")}function TR(t){if(jt(/[0-9a-zA-Z]+/.test(t),"Can only convert alpha-numeric strings"),typeof TextEncoder!="undefined")return new TextEncoder().encode(t);const e=new ArrayBuffer(t.length),n=new Uint8Array(e);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return n}/**
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
 */const SR=20;class kR extends w0{constructor(){super(...arguments);this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach(n=>n(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function NR(t,e,n=null){return{type:e,eventId:n,urlResponse:null,sessionId:RR(),postBody:null,tenantId:t.tenantId,error:Ve(t,"no-auth-event")}}function CR(t,e){return Lf()._set(Mf(t),e)}async function A0(t){const e=await Lf()._get(Mf(t));return e&&await Lf()._remove(Mf(t)),e}function AR(t,e){var n,r;const i=DR(e);if(i.includes("/__/auth/callback")){const s=Ol(i),o=s.firebaseError?bR(decodeURIComponent(s.firebaseError)):null,a=(r=(n=o==null?void 0:o.code)===null||n===void 0?void 0:n.split("auth/"))===null||r===void 0?void 0:r[1],u=a?Ve(a):null;return u?{type:t.type,eventId:t.eventId,tenantId:t.tenantId,error:u,urlResponse:null,sessionId:null,postBody:null}:{type:t.type,eventId:t.eventId,tenantId:t.tenantId,sessionId:t.sessionId,urlResponse:i,postBody:null}}return null}function RR(){const t=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<SR;n++){const r=Math.floor(Math.random()*e.length);t.push(e.charAt(r))}return t.join("")}function Lf(){return It(Tf)}function Mf(t){return zr("authEvent",t.config.apiKey,t.name)}function bR(t){try{return JSON.parse(t)}catch{return null}}function DR(t){const e=Ol(t),n=e.link?decodeURIComponent(e.link):void 0,r=Ol(n).link,i=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return Ol(i).link||i||r||n||t}function Ol(t){if(!(t==null?void 0:t.includes("?")))return{};const[e,...n]=t.split("?");return Yi(n.join("?"))}/**
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
 */const PR=500;class OR{constructor(){this._redirectPersistence=Hr,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=Dl}async _initialize(e){const n=e._key();let r=this.eventManagers.get(n);return r||(r=new kR(e),this.eventManagers.set(n,r),this.attachCallbackListeners(e,r)),r}_openPopup(e){Ue(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,n,r,i){IR(e);const s=await this._initialize(e);await s.initialized(),s.resetRedirect(),bA(),await this._originValidation(e);const o=NR(e,r,i);await CR(e,o);const a=await yR(e,o,n),u=await wR(a);return _R(e,s,u)}_isIframeWebStorageSupported(e,n){throw new Error("Method not implemented.")}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=vR(e)),this.originValidationPromises[n]}attachCallbackListeners(e,n){const{universalLinks:r,handleOpenURL:i,BuildInfo:s}=Gr(),o=setTimeout(async()=>{await A0(e),n.onEvent(R0())},PR),a=async c=>{clearTimeout(o);const h=await A0(e);let d=null;h&&(c==null?void 0:c.url)&&(d=AR(h,c.url)),n.onEvent(d||R0())};typeof r!="undefined"&&typeof r.subscribe=="function"&&r.subscribe(null,a);const u=i,l=`${s.packageName.toLowerCase()}://`;Gr().handleOpenURL=async c=>{if(c.toLowerCase().startsWith(l)&&a({url:c}),typeof u=="function")try{u(c)}catch(h){console.error(h)}}}}const xR=OR;function R0(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:Ve("no-auth-event")}}/**
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
 */function LR(t,e){Ce(t)._logFramework(e)}var MR="@firebase/auth-compat",$R="0.1.6";/**
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
 */const FR=1e3;function xl(){var t;return((t=self==null?void 0:self.location)===null||t===void 0?void 0:t.protocol)||null}function UR(){return xl()==="http:"||xl()==="https:"}function b0(t=te()){return!!((xl()==="file:"||xl()==="ionic:")&&t.toLowerCase().match(/iphone|ipad|ipod|android/))}function VR(){return ul()||tf()}function BR(){return rf()&&(document==null?void 0:document.documentMode)===11}function jR(t=te()){return/Edge\/\d+/.test(t)}function zR(t=te()){return BR()||jR(t)}function D0(){try{const t=self.localStorage,e=Zo();if(t)return t.setItem(e,"1"),t.removeItem(e),zR()?ll():!0}catch{return $f()&&ll()}return!1}function $f(){return typeof global!="undefined"&&"WorkerGlobalScope"in global&&"importScripts"in global}function Ff(){return(UR()||nf()||b0())&&!VR()&&D0()&&!$f()}function P0(){return b0()&&typeof document!="undefined"}async function qR(){return P0()?new Promise(t=>{const e=setTimeout(()=>{t(!1)},FR);document.addEventListener("deviceready",()=>{clearTimeout(e),t(!0)})}):!1}/**
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
 */const Et={LOCAL:"local",NONE:"none",SESSION:"session"},ta=S,O0="persistence";function WR(t,e){if(ta(Object.values(Et).includes(e),t,"invalid-persistence-type"),ul()){ta(e!==Et.SESSION,t,"unsupported-persistence-type");return}if(tf()){ta(e===Et.NONE,t,"unsupported-persistence-type");return}if($f()){ta(e===Et.NONE||e===Et.LOCAL&&ll(),t,"unsupported-persistence-type");return}ta(e===Et.NONE||D0(),t,"unsupported-persistence-type")}async function Uf(t){await t._initializationPromise;const e=x0(),n=zr(O0,t.config.apiKey,t.name);(e==null?void 0:e.sessionStorage)&&e.sessionStorage.setItem(n,t._getPersistence())}function HR(t,e){const n=x0();if(!(n==null?void 0:n.sessionStorage))return[];const r=zr(O0,t,e);switch(n.sessionStorage.getItem(r)){case Et.NONE:return[Yo];case Et.LOCAL:return[Al,Hr];case Et.SESSION:return[Hr];default:return[]}}function x0(){return typeof window!="undefined"?window:null}/**
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
 */const KR=S;class nr{constructor(){this.browserResolver=It(hR),this.cordovaResolver=It(xR),this.underlyingResolver=null,this._redirectPersistence=Hr,this._completeRedirectFn=Dl}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,n,r,i)}async _openRedirect(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,n,r,i)}_isIframeWebStorageSupported(e,n){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,n)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return P0()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return KR(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await qR();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
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
 */function L0(t){return t.unwrap()}function GR(t){return t.wrapped()}/**
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
 */function QR(t){return M0(t)}function YR(t,e){var n;const r=(n=e.customData)===null||n===void 0?void 0:n._tokenResponse;if(e.code==="auth/multi-factor-auth-required"){const i=e;i.resolver=new JR(t,xC(t,e))}else if(r){const i=M0(e),s=e;i&&(s.credential=i,s.tenantId=r.tenantId||void 0,s.email=r.email||void 0,s.phoneNumber=r.phoneNumber||void 0)}}function M0(t){const{_tokenResponse:e}=t instanceof xt?t.customData:t;if(!e)return null;if(!(t instanceof xt)&&"temporaryProof"in e&&"phoneNumber"in e)return zt.credentialFromResult(t);const n=e.providerId;if(!n||n===qo.PASSWORD)return null;let r;switch(n){case qo.GOOGLE:r=nn;break;case qo.FACEBOOK:r=tn;break;case qo.GITHUB:r=rn;break;case qo.TWITTER:r=sn;break;default:const{oauthIdToken:i,oauthAccessToken:s,oauthTokenSecret:o,pendingToken:a,nonce:u}=e;return!s&&!o&&!i&&!a?null:a?n.startsWith("saml.")?vl._create(n,a):en._fromParams({providerId:n,signInMethod:n,pendingToken:a,idToken:i,accessToken:s}):new rs(n).credential({idToken:i,accessToken:s,rawNonce:u})}return t instanceof xt?r.credentialFromError(t):r.credentialFromResult(t)}function mt(t,e){return e.catch(n=>{throw n instanceof xt&&YR(t,n),n}).then(n=>{const r=n.operationType,i=n.user;return{operationType:r,credential:QR(n),additionalUserInfo:OC(n),user:Tn.getOrCreate(i)}})}async function Vf(t,e){const n=await e;return{verificationId:n.verificationId,confirm:r=>mt(t,n.confirm(r))}}class JR{constructor(e,n){this.resolver=n,this.auth=GR(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return mt(L0(this.auth),this.resolver.resolveSignIn(e))}}/**
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
 */class Tn{constructor(e){this._delegate=e,this.multiFactor=FC(e)}static getOrCreate(e){return Tn.USER_MAP.has(e)||Tn.USER_MAP.set(e,new Tn(e)),Tn.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return mt(this.auth,e0(this._delegate,e))}async linkWithPhoneNumber(e,n){return Vf(this.auth,yA(this._delegate,e,n))}async linkWithPopup(e){return mt(this.auth,NA(this._delegate,e,nr))}async linkWithRedirect(e){return await Uf(Ce(this.auth)),LA(this._delegate,e,nr)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return mt(this.auth,t0(this._delegate,e))}reauthenticateWithPhoneNumber(e,n){return Vf(this.auth,vA(this._delegate,e,n))}reauthenticateWithPopup(e){return mt(this.auth,kA(this._delegate,e,nr))}async reauthenticateWithRedirect(e){return await Uf(Ce(this.auth)),OA(this._delegate,e,nr)}sendEmailVerification(e){return EC(this._delegate,e)}async unlink(e){return await uC(this._delegate,e),this}updateEmail(e){return NC(this._delegate,e)}updatePassword(e){return CC(this._delegate,e)}updatePhoneNumber(e){return wA(this._delegate,e)}updateProfile(e){return kC(this._delegate,e)}verifyBeforeUpdateEmail(e,n){return TC(this._delegate,e,n)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}Tn.USER_MAP=new WeakMap;/**
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
 */const na=S;class Bf{constructor(e,n){if(this.app=e,n.isInitialized()){this._delegate=n.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:r}=e.options;na(r,"invalid-api-key",{appName:e.name});let i=[Yo];if(typeof window!="undefined"){i=HR(r,e.name);for(const o of[Al,Tf,Hr])i.includes(o)||i.push(o)}na(r,"invalid-api-key",{appName:e.name});const s=typeof window!="undefined"?nr:void 0;this._delegate=n.initialize({options:{persistence:i,popupRedirectResolver:s}}),this._delegate._updateErrorMap(yN),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?Tn.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,n){BN(this._delegate,e,n)}applyActionCode(e){return fC(this._delegate,e)}checkActionCode(e){return n0(this._delegate,e)}confirmPasswordReset(e,n){return dC(this._delegate,e,n)}async createUserWithEmailAndPassword(e,n){return mt(this._delegate,mC(this._delegate,e,n))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return IC(this._delegate,e)}isSignInWithEmailLink(e){return vC(this._delegate,e)}async getRedirectResult(){na(Ff(),this._delegate,"operation-not-supported-in-this-environment");const e=await $A(this._delegate,nr);return e?mt(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){LR(this._delegate,e)}onAuthStateChanged(e,n,r){const{next:i,error:s,complete:o}=$0(e,n,r);return this._delegate.onAuthStateChanged(i,s,o)}onIdTokenChanged(e,n,r){const{next:i,error:s,complete:o}=$0(e,n,r);return this._delegate.onIdTokenChanged(i,s,o)}sendSignInLinkToEmail(e,n){return yC(this._delegate,e,n)}sendPasswordResetEmail(e,n){return hC(this._delegate,e,n||void 0)}async setPersistence(e){WR(this._delegate,e);let n;switch(e){case Et.SESSION:n=Hr;break;case Et.LOCAL:n=await It(Al)._isAvailable()?Al:Tf;break;case Et.NONE:n=Yo;break;default:return Ue("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(n)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return mt(this._delegate,aC(this._delegate))}signInWithCredential(e){return mt(this._delegate,Il(this._delegate,e))}signInWithCustomToken(e){return mt(this._delegate,cC(this._delegate,e))}signInWithEmailAndPassword(e,n){return mt(this._delegate,gC(this._delegate,e,n))}signInWithEmailLink(e,n){return mt(this._delegate,wC(this._delegate,e,n))}signInWithPhoneNumber(e,n){return Vf(this._delegate,gA(this._delegate,e,n))}async signInWithPopup(e){return na(Ff(),this._delegate,"operation-not-supported-in-this-environment"),mt(this._delegate,SA(this._delegate,e,nr))}async signInWithRedirect(e){return na(Ff(),this._delegate,"operation-not-supported-in-this-environment"),await Uf(this._delegate),DA(this._delegate,e,nr)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return pC(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}Bf.Persistence=Et;function $0(t,e,n){let r=t;typeof t!="function"&&({next:r,error:e,complete:n}=t);const i=r;return{next:o=>i(o&&Tn.getOrCreate(o)),error:e,complete:n}}/**
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
 */class jf{constructor(){this.providerId="phone",this._delegate=new zt(L0(zo.auth()))}static credential(e,n){return zt.credential(e,n)}verifyPhoneNumber(e,n){return this._delegate.verifyPhoneNumber(e,n)}unwrap(){return this._delegate}}jf.PHONE_SIGN_IN_METHOD=zt.PHONE_SIGN_IN_METHOD;jf.PROVIDER_ID=zt.PROVIDER_ID;/**
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
 */const XR=S;class ZR{constructor(e,n,r=zo.app()){var i;XR((i=r.options)===null||i===void 0?void 0:i.apiKey,"invalid-api-key",{appName:r.name}),this._delegate=new pA(e,n,r.auth()),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
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
 */const eb="auth-compat";function tb(t){t.INTERNAL.registerComponent(new vn(eb,e=>{const n=e.getProvider("app-compat").getImmediate(),r=e.getProvider("auth");return new Bf(n,r)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:Ji.EMAIL_SIGNIN,PASSWORD_RESET:Ji.PASSWORD_RESET,RECOVER_EMAIL:Ji.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:Ji.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:Ji.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:Ji.VERIFY_EMAIL}},EmailAuthProvider:er,FacebookAuthProvider:tn,GithubAuthProvider:rn,GoogleAuthProvider:nn,OAuthProvider:rs,PhoneAuthProvider:jf,PhoneMultiFactorGenerator:k0,RecaptchaVerifier:ZR,TwitterAuthProvider:sn,Auth:Bf,AuthCredential:ts,Error:xt}).setInstantiationMode("LAZY").setMultipleInstances(!1)),t.registerVersion(MR,$R)}tb(zo);var nb=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},b,zf=zf||{},j=nb||self;function Ll(){}function qf(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function ra(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function rb(t){return Object.prototype.hasOwnProperty.call(t,Wf)&&t[Wf]||(t[Wf]=++ib)}var Wf="closure_uid_"+(1e9*Math.random()>>>0),ib=0;function sb(t,e,n){return t.call.apply(t.bind,arguments)}function ob(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function Be(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Be=sb:Be=ob,Be.apply(null,arguments)}function Ml(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function je(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function rr(){this.s=this.s,this.o=this.o}var ab=0,ub={};rr.prototype.s=!1;rr.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),ab!=0)){var t=rb(this);delete ub[t]}};rr.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const F0=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},U0=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const r=t.length,i=typeof t=="string"?t.split(""):t;for(let s=0;s<r;s++)s in i&&e.call(n,i[s],s,t)};function lb(t){e:{var e=eD;const n=t.length,r=typeof t=="string"?t.split(""):t;for(let i=0;i<n;i++)if(i in r&&e.call(void 0,r[i],i,t)){e=i;break e}e=-1}return 0>e?null:typeof t=="string"?t.charAt(e):t[e]}function V0(t){return Array.prototype.concat.apply([],arguments)}function Hf(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function $l(t){return/^[\s\xa0]*$/.test(t)}var B0=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function st(t,e){return t.indexOf(e)!=-1}function Kf(t,e){return t<e?-1:t>e?1:0}var ot;e:{var j0=j.navigator;if(j0){var z0=j0.userAgent;if(z0){ot=z0;break e}}ot=""}function Gf(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function q0(t){const e={};for(const n in t)e[n]=t[n];return e}var W0="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function H0(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<W0.length;s++)n=W0[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Qf(t){return Qf[" "](t),t}Qf[" "]=Ll;function cb(t){var e=fb;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var hb=st(ot,"Opera"),ss=st(ot,"Trident")||st(ot,"MSIE"),K0=st(ot,"Edge"),Yf=K0||ss,G0=st(ot,"Gecko")&&!(st(ot.toLowerCase(),"webkit")&&!st(ot,"Edge"))&&!(st(ot,"Trident")||st(ot,"MSIE"))&&!st(ot,"Edge"),db=st(ot.toLowerCase(),"webkit")&&!st(ot,"Edge");function Q0(){var t=j.document;return t?t.documentMode:void 0}var Fl;e:{var Jf="",Xf=function(){var t=ot;if(G0)return/rv:([^\);]+)(\)|;)/.exec(t);if(K0)return/Edge\/([\d\.]+)/.exec(t);if(ss)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(db)return/WebKit\/(\S+)/.exec(t);if(hb)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Xf&&(Jf=Xf?Xf[1]:""),ss){var Zf=Q0();if(Zf!=null&&Zf>parseFloat(Jf)){Fl=String(Zf);break e}}Fl=Jf}var fb={};function pb(){return cb(function(){let t=0;const e=B0(String(Fl)).split("."),n=B0("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var i=e[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i[0].length==0&&s[0].length==0)break;t=Kf(i[1].length==0?0:parseInt(i[1],10),s[1].length==0?0:parseInt(s[1],10))||Kf(i[2].length==0,s[2].length==0)||Kf(i[2],s[2]),i=i[3],s=s[3]}while(t==0)}return 0<=t})}var ep;if(j.document&&ss){var Y0=Q0();ep=Y0||parseInt(Fl,10)||void 0}else ep=void 0;var mb=ep,gb=function(){if(!j.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{j.addEventListener("test",Ll,e),j.removeEventListener("test",Ll,e)}catch{}return t}();function Ze(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Ze.prototype.h=function(){this.defaultPrevented=!0};function ia(t,e){if(Ze.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(G0){e:{try{Qf(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:yb[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&ia.Z.h.call(this)}}je(ia,Ze);var yb={2:"touch",3:"pen",4:"mouse"};ia.prototype.h=function(){ia.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var sa="closure_listenable_"+(1e6*Math.random()|0),vb=0;function wb(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ia=i,this.key=++vb,this.ca=this.fa=!1}function Ul(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function Vl(t){this.src=t,this.g={},this.h=0}Vl.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=np(t,e,r,i);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new wb(e,this.src,s,!!r,i),e.fa=n,t.push(e)),e};function tp(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=F0(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(Ul(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function np(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.ca&&s.listener==e&&s.capture==!!n&&s.ia==r)return i}return-1}var rp="closure_lm_"+(1e6*Math.random()|0),ip={};function J0(t,e,n,r,i){if(r&&r.once)return Z0(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)J0(t,e[s],n,r,i);return null}return n=up(n),t&&t[sa]?t.N(e,n,ra(r)?!!r.capture:!!r,i):X0(t,e,n,!1,r,i)}function X0(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=ra(i)?!!i.capture:!!i,a=op(t);if(a||(t[rp]=a=new Vl(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=_b(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)gb||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(t_(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function _b(){function t(n){return e.call(t.src,t.listener,n)}var e=Ib;return t}function Z0(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)Z0(t,e[s],n,r,i);return null}return n=up(n),t&&t[sa]?t.O(e,n,ra(r)?!!r.capture:!!r,i):X0(t,e,n,!0,r,i)}function e_(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)e_(t,e[s],n,r,i);else r=ra(r)?!!r.capture:!!r,n=up(n),t&&t[sa]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=np(s,n,r,i),-1<n&&(Ul(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=op(t))&&(e=t.g[e.toString()],t=-1,e&&(t=np(e,n,r,i)),(n=-1<t?e[t]:null)&&sp(n))}function sp(t){if(typeof t!="number"&&t&&!t.ca){var e=t.src;if(e&&e[sa])tp(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(t_(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=op(e))?(tp(n,t),n.h==0&&(n.src=null,e[rp]=null)):Ul(t)}}}function t_(t){return t in ip?ip[t]:ip[t]="on"+t}function Ib(t,e){if(t.ca)t=!0;else{e=new ia(e,this);var n=t.listener,r=t.ia||t.src;t.fa&&sp(t),t=n.call(r,e)}return t}function op(t){return t=t[rp],t instanceof Vl?t:null}var ap="__closure_events_fn_"+(1e9*Math.random()>>>0);function up(t){return typeof t=="function"?t:(t[ap]||(t[ap]=function(e){return t.handleEvent(e)}),t[ap])}function Ae(){rr.call(this),this.i=new Vl(this),this.P=this,this.I=null}je(Ae,rr);Ae.prototype[sa]=!0;Ae.prototype.removeEventListener=function(t,e,n,r){e_(this,t,e,n,r)};function ze(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,typeof e=="string")e=new Ze(e,t);else if(e instanceof Ze)e.target=e.target||t;else{var i=e;e=new Ze(r,t),H0(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=Bl(o,r,!0,e)&&i}if(o=e.g=t,i=Bl(o,r,!0,e)&&i,i=Bl(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=Bl(o,r,!1,e)&&i}Ae.prototype.M=function(){if(Ae.Z.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Ul(n[r]);delete t.g[e],t.h--}}this.I=null};Ae.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Ae.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Bl(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ca&&o.capture==n){var a=o.listener,u=o.ia||o.src;o.fa&&tp(t.i,o),i=a.call(u,r)!==!1&&i}}return i&&!r.defaultPrevented}var lp=j.JSON.stringify;function Eb(){var t=r_;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class Tb{constructor(){this.h=this.g=null}add(e,n){const r=n_.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var n_=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new Sb,t=>t.reset());class Sb{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function kb(t){j.setTimeout(()=>{throw t},0)}function cp(t,e){hp||Nb(),dp||(hp(),dp=!0),r_.add(t,e)}var hp;function Nb(){var t=j.Promise.resolve(void 0);hp=function(){t.then(Cb)}}var dp=!1,r_=new Tb;function Cb(){for(var t;t=Eb();){try{t.h.call(t.g)}catch(n){kb(n)}var e=n_;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}dp=!1}function jl(t,e){Ae.call(this),this.h=t||1,this.g=e||j,this.j=Be(this.kb,this),this.l=Date.now()}je(jl,Ae);b=jl.prototype;b.da=!1;b.S=null;b.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),ze(this,"tick"),this.da&&(fp(this),this.start()))}};b.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function fp(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}b.M=function(){jl.Z.M.call(this),fp(this),delete this.g};function pp(t,e,n){if(typeof t=="function")n&&(t=Be(t,n));else if(t&&typeof t.handleEvent=="function")t=Be(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:j.setTimeout(t,e||0)}function i_(t){t.g=pp(()=>{t.g=null,t.i&&(t.i=!1,i_(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class Ab extends rr{constructor(e,n){super();this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:i_(this)}M(){super.M(),this.g&&(j.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function oa(t){rr.call(this),this.h=t,this.g={}}je(oa,rr);var s_=[];function o_(t,e,n,r){Array.isArray(n)||(n&&(s_[0]=n.toString()),n=s_);for(var i=0;i<n.length;i++){var s=J0(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function a_(t){Gf(t.g,function(e,n){this.g.hasOwnProperty(n)&&sp(e)},t),t.g={}}oa.prototype.M=function(){oa.Z.M.call(this),a_(this)};oa.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function zl(){this.g=!0}zl.prototype.Aa=function(){this.g=!1};function Rb(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),u=0;u<a.length;u++){var l=a[u].split("=");if(1<l.length){var c=l[0];l=l[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+l+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function bb(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function os(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+Pb(t,n)+(r?" "+r:"")})}function Db(t,e){t.info(function(){return"TIMEOUT: "+e})}zl.prototype.info=function(){};function Pb(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return lp(n)}catch{return e}}var Qr={},u_=null;function ql(){return u_=u_||new Ae}Qr.Ma="serverreachability";function l_(t){Ze.call(this,Qr.Ma,t)}je(l_,Ze);function aa(t){const e=ql();ze(e,new l_(e,t))}Qr.STAT_EVENT="statevent";function c_(t,e){Ze.call(this,Qr.STAT_EVENT,t),this.stat=e}je(c_,Ze);function at(t){const e=ql();ze(e,new c_(e,t))}Qr.Na="timingevent";function h_(t,e){Ze.call(this,Qr.Na,t),this.size=e}je(h_,Ze);function ua(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return j.setTimeout(function(){t()},e)}var Wl={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},d_={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function mp(){}mp.prototype.h=null;function f_(t){return t.h||(t.h=t.i())}function p_(){}var la={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function gp(){Ze.call(this,"d")}je(gp,Ze);function yp(){Ze.call(this,"c")}je(yp,Ze);var vp;function Hl(){}je(Hl,mp);Hl.prototype.g=function(){return new XMLHttpRequest};Hl.prototype.i=function(){return{}};vp=new Hl;function ca(t,e,n,r){this.l=t,this.j=e,this.m=n,this.X=r||1,this.V=new oa(this),this.P=Ob,t=Yf?125:void 0,this.W=new jl(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new m_}function m_(){this.i=null,this.g="",this.h=!1}var Ob=45e3,wp={},Kl={};b=ca.prototype;b.setTimeout=function(t){this.P=t};function _p(t,e,n){t.K=1,t.v=Xl(Sn(e)),t.s=n,t.U=!0,g_(t,null)}function g_(t,e){t.F=Date.now(),ha(t),t.A=Sn(t.v);var n=t.A,r=t.X;Array.isArray(r)||(r=[String(r)]),k_(n.h,"t",r),t.C=0,n=t.l.H,t.h=new m_,t.g=G_(t.l,n?e:null,!t.s),0<t.O&&(t.L=new Ab(Be(t.Ia,t,t.g),t.O)),o_(t.V,t.g,"readystatechange",t.gb),e=t.H?q0(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),aa(1),Rb(t.j,t.u,t.A,t.m,t.X,t.s)}b.gb=function(t){t=t.target;const e=this.L;e&&kn(t)==3?e.l():this.Ia(t)};b.Ia=function(t){try{if(t==this.g)e:{const c=kn(this.g);var e=this.g.Da();const h=this.g.ba();if(!(3>c)&&(c!=3||Yf||this.g&&(this.h.h||this.g.ga()||$_(this.g)))){this.I||c!=4||e==7||(e==8||0>=h?aa(3):aa(2)),Gl(this);var n=this.g.ba();this.N=n;t:if(y_(this)){var r=$_(this.g);t="";var i=r.length,s=kn(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){Yr(this),da(this);var o="";break t}this.h.i=new j.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=n==200,bb(this.j,this.u,this.A,this.m,this.X,c,n),this.i){if(this.$&&!this.J){t:{if(this.g){var a,u=this.g;if((a=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!$l(a)){var l=a;break t}}l=null}if(n=l)os(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Ip(this,n);else{this.i=!1,this.o=3,at(12),Yr(this),da(this);break e}}this.U?(v_(this,c,o),Yf&&this.i&&c==3&&(o_(this.V,this.W,"tick",this.fb),this.W.start())):(os(this.j,this.m,o,null),Ip(this,o)),c==4&&Yr(this),this.i&&!this.I&&(c==4?q_(this.l,this):(this.i=!1,ha(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,at(12)):(this.o=0,at(13)),Yr(this),da(this)}}}catch{}finally{}};function y_(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Ba:!1}function v_(t,e,n){let r=!0,i;for(;!t.I&&t.C<n.length;)if(i=xb(t,n),i==Kl){e==4&&(t.o=4,at(14),r=!1),os(t.j,t.m,null,"[Incomplete Response]");break}else if(i==wp){t.o=4,at(15),os(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else os(t.j,t.m,i,null),Ip(t,i);y_(t)&&i!=Kl&&i!=wp&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,at(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),Pp(e),e.L=!0,at(11))):(os(t.j,t.m,n,"[Invalid Chunked Response]"),Yr(t),da(t))}b.fb=function(){if(this.g){var t=kn(this.g),e=this.g.ga();this.C<e.length&&(Gl(this),v_(this,t,e),this.i&&t!=4&&ha(this))}};function xb(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?Kl:(n=Number(e.substring(n,r)),isNaN(n)?wp:(r+=1,r+n>e.length?Kl:(e=e.substr(r,n),t.C=r+n,e)))}b.cancel=function(){this.I=!0,Yr(this)};function ha(t){t.Y=Date.now()+t.P,w_(t,t.P)}function w_(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=ua(Be(t.eb,t),e)}function Gl(t){t.B&&(j.clearTimeout(t.B),t.B=null)}b.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(Db(this.j,this.A),this.K!=2&&(aa(3),at(17)),Yr(this),this.o=2,da(this)):w_(this,this.Y-t)};function da(t){t.l.G==0||t.I||q_(t.l,t)}function Yr(t){Gl(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,fp(t.W),a_(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Ip(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Sp(n.i,t))){if(n.I=t.N,!t.J&&Sp(n.i,t)&&n.G==3){try{var r=n.Ca.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0)e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)ic(n),nc(n);else break e;Dp(n),at(18)}else n.ta=i[1],0<n.ta-n.U&&37500>i[2]&&n.N&&n.A==0&&!n.v&&(n.v=ua(Be(n.ab,n),6e3));if(1>=A_(n.i)&&n.ka){try{n.ka()}catch{}n.ka=void 0}}else Zr(n,11)}else if((t.J||n.g==t)&&ic(n),!$l(e))for(i=n.Ca.g.parse(e),e=0;e<i.length;e++){let l=i[e];if(n.U=l[0],l=l[1],n.G==2)if(l[0]=="c"){n.J=l[1],n.la=l[2];const c=l[3];c!=null&&(n.ma=c,n.h.info("VER="+n.ma));const h=l[4];h!=null&&(n.za=h,n.h.info("SVER="+n.za));const d=l[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.K=r,n.h.info("backChannelRequestTimeoutMs_="+r)),r=n;const g=t.g;if(g){const y=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var s=r.i;!s.g&&(st(y,"spdy")||st(y,"quic")||st(y,"h2"))&&(s.j=s.l,s.g=new Set,s.h&&(kp(s,s.h),s.h=null))}if(r.D){const I=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;I&&(r.sa=I,se(r.F,r.D,I))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),r=n;var o=t;if(r.oa=K_(r,r.H?r.la:null,r.W),o.J){R_(r.i,o);var a=o,u=r.K;u&&a.setTimeout(u),a.B&&(Gl(a),ha(a)),r.g=o}else j_(r);0<n.l.length&&rc(n)}else l[0]!="stop"&&l[0]!="close"||Zr(n,7);else n.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?Zr(n,7):Rp(n):l[0]!="noop"&&n.j&&n.j.wa(l),n.A=0)}}aa(4)}catch{}}function Lb(t){if(t.R&&typeof t.R=="function")return t.R();if(typeof t=="string")return t.split("");if(qf(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function Ep(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(qf(t)||typeof t=="string")U0(t,e,void 0);else{if(t.T&&typeof t.T=="function")var n=t.T();else if(t.R&&typeof t.R=="function")n=void 0;else if(qf(t)||typeof t=="string"){n=[];for(var r=t.length,i=0;i<r;i++)n.push(i)}else for(i in n=[],r=0,t)n[r++]=i;r=Lb(t),i=r.length;for(var s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}}function as(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(t)if(t instanceof as)for(n=t.T(),r=0;r<n.length;r++)this.set(n[r],t.get(n[r]));else for(r in t)this.set(r,t[r])}b=as.prototype;b.R=function(){Tp(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t};b.T=function(){return Tp(this),this.g.concat()};function Tp(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var r=t.g[e];Jr(t.h,r)&&(t.g[n++]=r),e++}t.g.length=n}if(t.i!=t.g.length){var i={};for(n=e=0;e<t.g.length;)r=t.g[e],Jr(i,r)||(t.g[n++]=r,i[r]=1),e++;t.g.length=n}}b.get=function(t,e){return Jr(this.h,t)?this.h[t]:e};b.set=function(t,e){Jr(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e};b.forEach=function(t,e){for(var n=this.T(),r=0;r<n.length;r++){var i=n[r],s=this.get(i);t.call(e,s,i,this)}};function Jr(t,e){return Object.prototype.hasOwnProperty.call(t,e)}var __=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Mb(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Xr(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof Xr){this.g=e!==void 0?e:t.g,Ql(this,t.j),this.s=t.s,Yl(this,t.i),Jl(this,t.m),this.l=t.l,e=t.h;var n=new ma;n.i=e.i,e.g&&(n.g=new as(e.g),n.h=e.h),I_(this,n),this.o=t.o}else t&&(n=String(t).match(__))?(this.g=!!e,Ql(this,n[1]||"",!0),this.s=fa(n[2]||""),Yl(this,n[3]||"",!0),Jl(this,n[4]),this.l=fa(n[5]||"",!0),I_(this,n[6]||"",!0),this.o=fa(n[7]||"")):(this.g=!!e,this.h=new ma(null,this.g))}Xr.prototype.toString=function(){var t=[],e=this.j;e&&t.push(pa(e,E_,!0),":");var n=this.i;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(pa(e,E_,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.i&&n.charAt(0)!="/"&&t.push("/"),t.push(pa(n,n.charAt(0)=="/"?Bb:Vb,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",pa(n,zb)),t.join("")};function Sn(t){return new Xr(t)}function Ql(t,e,n){t.j=n?fa(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Yl(t,e,n){t.i=n?fa(e,!0):e}function Jl(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function I_(t,e,n){e instanceof ma?(t.h=e,qb(t.h,t.g)):(n||(e=pa(e,jb)),t.h=new ma(e,t.g))}function se(t,e,n){t.h.set(e,n)}function Xl(t){return se(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function $b(t){return t instanceof Xr?Sn(t):new Xr(t,void 0)}function Fb(t,e,n,r){var i=new Xr(null,void 0);return t&&Ql(i,t),e&&Yl(i,e),n&&Jl(i,n),r&&(i.l=r),i}function fa(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function pa(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,Ub),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Ub(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var E_=/[#\/\?@]/g,Vb=/[#\?:]/g,Bb=/[#\?]/g,jb=/[#\?@]/g,zb=/#/g;function ma(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function ir(t){t.g||(t.g=new as,t.h=0,t.i&&Mb(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}b=ma.prototype;b.add=function(t,e){ir(this),this.i=null,t=us(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function T_(t,e){ir(t),e=us(t,e),Jr(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,Jr(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&Tp(t)))}function S_(t,e){return ir(t),e=us(t,e),Jr(t.g.h,e)}b.forEach=function(t,e){ir(this),this.g.forEach(function(n,r){U0(n,function(i){t.call(e,i,r,this)},this)},this)};b.T=function(){ir(this);for(var t=this.g.R(),e=this.g.T(),n=[],r=0;r<e.length;r++)for(var i=t[r],s=0;s<i.length;s++)n.push(e[r]);return n};b.R=function(t){ir(this);var e=[];if(typeof t=="string")S_(this,t)&&(e=V0(e,this.g.get(us(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=V0(e,t[n])}return e};b.set=function(t,e){return ir(this),this.i=null,t=us(this,t),S_(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};b.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e};function k_(t,e,n){T_(t,e),0<n.length&&(t.i=null,t.g.set(us(t,e),Hf(n)),t.h+=n.length)}b.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var r=e[n],i=encodeURIComponent(String(r));r=this.R(r);for(var s=0;s<r.length;s++){var o=i;r[s]!==""&&(o+="="+encodeURIComponent(String(r[s]))),t.push(o)}}return this.i=t.join("&")};function us(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function qb(t,e){e&&!t.j&&(ir(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(T_(this,r),k_(this,i,n))},t)),t.j=e}var Wb=class{constructor(t,e){this.h=t,this.g=e}};function N_(t){this.l=t||Hb,j.PerformanceNavigationTiming?(t=j.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(j.g&&j.g.Ea&&j.g.Ea()&&j.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Hb=10;function C_(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function A_(t){return t.h?1:t.g?t.g.size:0}function Sp(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function kp(t,e){t.g?t.g.add(e):t.h=e}function R_(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}N_.prototype.cancel=function(){if(this.i=b_(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function b_(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Hf(t.i)}function Np(){}Np.prototype.stringify=function(t){return j.JSON.stringify(t,void 0)};Np.prototype.parse=function(t){return j.JSON.parse(t,void 0)};function Kb(){this.g=new Np}function Gb(t,e,n){const r=n||"";try{Ep(t,function(i,s){let o=i;ra(i)&&(o=lp(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function Qb(t,e){const n=new zl;if(j.Image){const r=new Image;r.onload=Ml(Zl,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Ml(Zl,n,r,"TestLoadImage: error",!1,e),r.onabort=Ml(Zl,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Ml(Zl,n,r,"TestLoadImage: timeout",!1,e),j.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Zl(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function ga(t){this.l=t.$b||null,this.j=t.ib||!1}je(ga,mp);ga.prototype.g=function(){return new ec(this.l,this.j)};ga.prototype.i=function(t){return function(){return t}}({});function ec(t,e){Ae.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Cp,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}je(ec,Ae);var Cp=0;b=ec.prototype;b.open=function(t,e){if(this.readyState!=Cp)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,va(this)};b.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||j).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))};b.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ya(this)),this.readyState=Cp};b.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,va(this)),this.g&&(this.readyState=3,va(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof j.ReadableStream!="undefined"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;D_(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))};function D_(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}b.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?ya(this):va(this),this.readyState==3&&D_(this)}};b.Ua=function(t){this.g&&(this.response=this.responseText=t,ya(this))};b.Ta=function(t){this.g&&(this.response=t,ya(this))};b.ha=function(){this.g&&ya(this)};function ya(t){t.readyState=4,t.l=null,t.j=null,t.A=null,va(t)}b.setRequestHeader=function(t,e){this.v.append(t,e)};b.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};b.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function va(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(ec.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var Yb=j.JSON.parse;function pe(t){Ae.call(this),this.headers=new as,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=P_,this.K=this.L=!1}je(pe,Ae);var P_="",Jb=/^https?$/i,Xb=["POST","PUT"];b=pe.prototype;b.ea=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():vp.g(),this.C=this.u?f_(this.u):f_(vp),this.g.onreadystatechange=Be(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(s){O_(this,s);return}t=n||"";const i=new as(this.headers);r&&Ep(r,function(s,o){i.set(o,s)}),r=lb(i.T()),n=j.FormData&&t instanceof j.FormData,!(0<=F0(Xb,e))||r||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach(function(s,o){this.g.setRequestHeader(o,s)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{M_(this),0<this.B&&((this.K=Zb(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Be(this.pa,this)):this.A=pp(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){O_(this,s)}};function Zb(t){return ss&&pb()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}function eD(t){return t.toLowerCase()=="content-type"}b.pa=function(){typeof zf!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,ze(this,"timeout"),this.abort(8))};function O_(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,x_(t),tc(t)}function x_(t){t.D||(t.D=!0,ze(t,"complete"),ze(t,"error"))}b.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,ze(this,"complete"),ze(this,"abort"),tc(this))};b.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),tc(this,!0)),pe.Z.M.call(this)};b.Fa=function(){this.s||(this.F||this.v||this.l?L_(this):this.cb())};b.cb=function(){L_(this)};function L_(t){if(t.h&&typeof zf!="undefined"&&(!t.C[1]||kn(t)!=4||t.ba()!=2)){if(t.v&&kn(t)==4)pp(t.Fa,0,t);else if(ze(t,"readystatechange"),kn(t)==4){t.h=!1;try{const a=t.ba();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var i=String(t.H).match(__)[1]||null;if(!i&&j.self&&j.self.location){var s=j.self.location.protocol;i=s.substr(0,s.length-1)}r=!Jb.test(i?i.toLowerCase():"")}n=r}if(n)ze(t,"complete"),ze(t,"success");else{t.m=6;try{var o=2<kn(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.ba()+"]",x_(t)}}finally{tc(t)}}}}function tc(t,e){if(t.g){M_(t);const n=t.g,r=t.C[0]?Ll:null;t.g=null,t.C=null,e||ze(t,"ready");try{n.onreadystatechange=r}catch{}}}function M_(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(j.clearTimeout(t.A),t.A=null)}function kn(t){return t.g?t.g.readyState:0}b.ba=function(){try{return 2<kn(this)?this.g.status:-1}catch{return-1}};b.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};b.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),Yb(e)}};function $_(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case P_:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}b.Da=function(){return this.m};b.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function tD(t){let e="";return Gf(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Ap(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=tD(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):se(t,e,n))}function wa(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function F_(t){this.za=0,this.l=[],this.h=new zl,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=wa("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=wa("baseRetryDelayMs",5e3,t),this.$a=wa("retryDelaySeedMs",1e4,t),this.Ya=wa("forwardChannelMaxRetries",2,t),this.ra=wa("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new N_(t&&t.concurrentRequestLimit),this.Ca=new Kb,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||t.Xb!==!1}b=F_.prototype;b.ma=8;b.G=1;function Rp(t){if(U_(t),t.G==3){var e=t.V++,n=Sn(t.F);se(n,"SID",t.J),se(n,"RID",e),se(n,"TYPE","terminate"),_a(t,n),e=new ca(t,t.h,e,void 0),e.K=2,e.v=Xl(Sn(n)),n=!1,j.navigator&&j.navigator.sendBeacon&&(n=j.navigator.sendBeacon(e.v.toString(),"")),!n&&j.Image&&(new Image().src=e.v,n=!0),n||(e.g=G_(e.l,null),e.g.ea(e.v)),e.F=Date.now(),ha(e)}H_(t)}b.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch{}};function nc(t){t.g&&(Pp(t),t.g.cancel(),t.g=null)}function U_(t){nc(t),t.u&&(j.clearTimeout(t.u),t.u=null),ic(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&j.clearTimeout(t.m),t.m=null)}function bp(t,e){t.l.push(new Wb(t.Za++,e)),t.G==3&&rc(t)}function rc(t){C_(t.i)||t.m||(t.m=!0,cp(t.Ha,t),t.C=0)}function nD(t,e){return A_(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.l=e.D.concat(t.l),!0):t.G==1||t.G==2||t.C>=(t.Xa?0:t.Ya)?!1:(t.m=ua(Be(t.Ha,t,e),W_(t,t.C)),t.C++,!0)}b.Ha=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const i=new ca(this,this.h,t,void 0);let s=this.s;if(this.P&&(s?(s=q0(s),H0(s,this.P)):s=this.P),this.o===null&&(i.H=s),this.ja)e:{for(var e=0,n=0;n<this.l.length;n++){t:{var r=this.l[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.l.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=B_(this,i,e),n=Sn(this.F),se(n,"RID",t),se(n,"CVER",22),this.D&&se(n,"X-HTTP-Session-Id",this.D),_a(this,n),this.o&&s&&Ap(n,this.o,s),kp(this.i,i),this.Ra&&se(n,"TYPE","init"),this.ja?(se(n,"$req",e),se(n,"SID","null"),i.$=!0,_p(i,n,null)):_p(i,n,e),this.G=2}}else this.G==3&&(t?V_(this,t):this.l.length==0||C_(this.i)||V_(this))};function V_(t,e){var n;e?n=e.m:n=t.V++;const r=Sn(t.F);se(r,"SID",t.J),se(r,"RID",n),se(r,"AID",t.U),_a(t,r),t.o&&t.s&&Ap(r,t.o,t.s),n=new ca(t,t.h,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=B_(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),kp(t.i,n),_p(n,r,e)}function _a(t,e){t.j&&Ep({},function(n,r){se(e,r,n)})}function B_(t,e,n){n=Math.min(t.l.length,n);var r=t.j?Be(t.j.Oa,t.j,t):null;e:{var i=t.l;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let u=0;u<n;u++){let l=i[u].h;const c=i[u].g;if(l-=s,0>l)s=Math.max(0,i[u].h-100),a=!1;else try{Gb(c,o,"req"+l+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.l.splice(0,n),e.D=t,r}function j_(t){t.g||t.u||(t.Y=1,cp(t.Ga,t),t.A=0)}function Dp(t){return t.g||t.u||3<=t.A?!1:(t.Y++,t.u=ua(Be(t.Ga,t),W_(t,t.A)),t.A++,!0)}b.Ga=function(){if(this.u=null,z_(this),this.$&&!(this.L||this.g==null||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=ua(Be(this.bb,this),t)}};b.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,at(10),nc(this),z_(this))};function Pp(t){t.B!=null&&(j.clearTimeout(t.B),t.B=null)}function z_(t){t.g=new ca(t,t.h,"rpc",t.Y),t.o===null&&(t.g.H=t.s),t.g.O=0;var e=Sn(t.oa);se(e,"RID","rpc"),se(e,"SID",t.J),se(e,"CI",t.N?"0":"1"),se(e,"AID",t.U),_a(t,e),se(e,"TYPE","xmlhttp"),t.o&&t.s&&Ap(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=Xl(Sn(e)),n.s=null,n.U=!0,g_(n,t)}b.ab=function(){this.v!=null&&(this.v=null,nc(this),Dp(this),at(19))};function ic(t){t.v!=null&&(j.clearTimeout(t.v),t.v=null)}function q_(t,e){var n=null;if(t.g==e){ic(t),Pp(t),t.g=null;var r=2}else if(Sp(t.i,e))n=e.D,R_(t.i,e),r=1;else return;if(t.I=e.N,t.G!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;r=ql(),ze(r,new h_(r,n,e,i)),rc(t)}else j_(t);else if(i=e.o,i==3||i==0&&0<t.I||!(r==1&&nD(t,e)||r==2&&Dp(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:Zr(t,5);break;case 4:Zr(t,10);break;case 3:Zr(t,6);break;default:Zr(t,2)}}}function W_(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function Zr(t,e){if(t.h.info("Error code "+e),e==2){var n=null;t.j&&(n=null);var r=Be(t.jb,t);n||(n=new Xr("//www.google.com/images/cleardot.gif"),j.location&&j.location.protocol=="http"||Ql(n,"https"),Xl(n)),Qb(n.toString(),r)}else at(2);t.G=0,t.j&&t.j.va(e),H_(t),U_(t)}b.jb=function(t){t?(this.h.info("Successfully pinged google.com"),at(2)):(this.h.info("Failed to ping google.com"),at(1))};function H_(t){t.G=0,t.I=-1,t.j&&((b_(t.i).length!=0||t.l.length!=0)&&(t.i.i.length=0,Hf(t.l),t.l.length=0),t.j.ua())}function K_(t,e,n){let r=$b(n);if(r.i!="")e&&Yl(r,e+"."+r.i),Jl(r,r.m);else{const i=j.location;r=Fb(i.protocol,e?e+"."+i.hostname:i.hostname,+i.port,n)}return t.aa&&Gf(t.aa,function(i,s){se(r,s,i)}),e=t.D,n=t.sa,e&&n&&se(r,e,n),se(r,"VER",t.ma),_a(t,r),r}function G_(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new pe(new ga({ib:!0})):new pe(t.qa),e.L=t.H,e}function Q_(){}b=Q_.prototype;b.xa=function(){};b.wa=function(){};b.va=function(){};b.ua=function(){};b.Oa=function(){};function sc(){if(ss&&!(10<=Number(mb)))throw Error("Environmental error: no available transport.")}sc.prototype.g=function(t,e){return new Tt(t,e)};function Tt(t,e){Ae.call(this),this.g=new F_(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!$l(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!$l(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new ls(this)}je(Tt,Ae);Tt.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),cp(Be(t.hb,t,e))),at(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=K_(t,null,t.W),rc(t)};Tt.prototype.close=function(){Rp(this.g)};Tt.prototype.u=function(t){if(typeof t=="string"){var e={};e.__data__=t,bp(this.g,e)}else this.v?(e={},e.__data__=lp(t),bp(this.g,e)):bp(this.g,t)};Tt.prototype.M=function(){this.g.j=null,delete this.j,Rp(this.g),delete this.g,Tt.Z.M.call(this)};function Y_(t){gp.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}je(Y_,gp);function J_(){yp.call(this),this.status=1}je(J_,yp);function ls(t){this.g=t}je(ls,Q_);ls.prototype.xa=function(){ze(this.g,"a")};ls.prototype.wa=function(t){ze(this.g,new Y_(t))};ls.prototype.va=function(t){ze(this.g,new J_(t))};ls.prototype.ua=function(){ze(this.g,"b")};sc.prototype.createWebChannel=sc.prototype.g;Tt.prototype.send=Tt.prototype.u;Tt.prototype.open=Tt.prototype.m;Tt.prototype.close=Tt.prototype.close;Wl.NO_ERROR=0;Wl.TIMEOUT=8;Wl.HTTP_ERROR=6;d_.COMPLETE="complete";p_.EventType=la;la.OPEN="a";la.CLOSE="b";la.ERROR="c";la.MESSAGE="d";Ae.prototype.listen=Ae.prototype.N;pe.prototype.listenOnce=pe.prototype.O;pe.prototype.getLastError=pe.prototype.La;pe.prototype.getLastErrorCode=pe.prototype.Da;pe.prototype.getStatus=pe.prototype.ba;pe.prototype.getResponseJson=pe.prototype.Qa;pe.prototype.getResponseText=pe.prototype.ga;pe.prototype.send=pe.prototype.ea;var rD=function(){return new sc},iD=function(){return ql()},Op=Wl,sD=d_,oD=Qr,X_={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},aD=ga,oc=p_,uD=pe;const Z_="@firebase/firestore";/**
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
 */class qe{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}qe.UNAUTHENTICATED=new qe(null),qe.GOOGLE_CREDENTIALS=new qe("google-credentials-uid"),qe.FIRST_PARTY=new qe("first-party-uid"),qe.MOCK_USER=new qe("mock-user");/**
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
 */let cs="9.1.3";/**
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
 */const sr=new hl("@firebase/firestore");function xp(){return sr.logLevel}function lD(t){sr.setLogLevel(t)}function N(t,...e){if(sr.logLevel<=G.DEBUG){const n=e.map(Lp);sr.debug(`Firestore (${cs}): ${t}`,...n)}}function me(t,...e){if(sr.logLevel<=G.ERROR){const n=e.map(Lp);sr.error(`Firestore (${cs}): ${t}`,...n)}}function Ia(t,...e){if(sr.logLevel<=G.WARN){const n=e.map(Lp);sr.warn(`Firestore (${cs}): ${t}`,...n)}}function Lp(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
*/var e}/**
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
 */function O(t="Unexpected state"){const e=`FIRESTORE (${cs}) INTERNAL ASSERTION FAILED: `+t;throw me(e),new Error(e)}function F(t,e){t||O()}function cD(t,e){t||O()}function A(t,e){return t}/**
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
 */const v={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class T extends Error{constructor(e,n){super(n),this.code=e,this.message=n,this.name="FirebaseError",this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Re{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class eI{constructor(e,n){this.user=n,this.type="OAuth",this.authHeaders={},this.authHeaders.Authorization=`Bearer ${e}`}}class hD{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(qe.UNAUTHENTICATED))}shutdown(){}}class dD{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class fD{constructor(e){this.t=e,this.currentUser=qe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new Re;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Re,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},a=u=>{N("FirebaseCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(N("FirebaseCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Re)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(N("FirebaseCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(F(typeof r.accessToken=="string"),new eI(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return F(e===null||typeof e=="string"),new qe(e)}}class pD{constructor(e,n,r){this.h=e,this.l=n,this.m=r,this.type="FirstParty",this.user=qe.FIRST_PARTY}get authHeaders(){const e={"X-Goog-AuthUser":this.l},n=this.h.auth.getAuthHeaderValueForFirstParty([]);return n&&(e.Authorization=n),this.m&&(e["X-Goog-Iam-Authorization-Token"]=this.m),e}}class mD{constructor(e,n,r){this.h=e,this.l=n,this.m=r}getToken(){return Promise.resolve(new pD(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(qe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}/**
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
 */class St{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.g(r),this.p=r=>n.writeSequenceNumber(r))}g(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.p&&this.p(e),e}}/**
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
 */function gD(t){const e=typeof self!="undefined"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */St.T=-1;class tI{static I(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=gD(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function W(t,e){return t<e?-1:t>e?1:0}function hs(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}function nI(t){return t+"\0"}/**
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
 */class be{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new T(v.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new T(v.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new T(v.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new T(v.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return be.fromMillis(Date.now())}static fromDate(e){return be.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new be(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?W(this.nanoseconds,e.nanoseconds):W(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class z{constructor(e){this.timestamp=e}static fromTimestamp(e){return new z(e)}static min(){return new z(new be(0,0))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */function rI(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ei(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function iI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Ea{constructor(e,n,r){n===void 0?n=0:n>e.length&&O(),r===void 0?r=e.length-n:r>e.length-n&&O(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Ea.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Ea?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Y extends Ea{construct(e,n,r){return new Y(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new T(v.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Y(n)}static emptyPath(){return new Y([])}}const yD=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class We extends Ea{construct(e,n,r){return new We(e,n,r)}static isValidIdentifier(e){return yD.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),We.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new We(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new T(v.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new T(v.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new T(v.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new T(v.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new We(n)}static emptyPath(){return new We([])}}/**
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
 */class ds{constructor(e){this.fields=e,e.sort(We.comparator)}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return hs(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */function vD(){return typeof atob!="undefined"}/**
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
 */class De{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new De(n)}static fromUint8Array(e){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new De(n)}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return W(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}De.EMPTY_BYTE_STRING=new De("");const wD=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function or(t){if(F(!!t),typeof t=="string"){let e=0;const n=wD.exec(t);if(F(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ge(t.seconds),nanos:ge(t.nanos)}}function ge(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function fs(t){return typeof t=="string"?De.fromBase64String(t):De.fromUint8Array(t)}/**
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
 */function Mp(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function sI(t){const e=t.mapValue.fields.__previous_value__;return Mp(e)?sI(e):e}function Ta(t){const e=or(t.mapValue.fields.__local_write_time__.timestampValue);return new be(e.seconds,e.nanos)}/**
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
 */function ti(t){return t==null}function ac(t){return t===0&&1/t==-1/0}function oI(t){return typeof t=="number"&&Number.isInteger(t)&&!ac(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */class P{constructor(e){this.path=e}static fromPath(e){return new P(Y.fromString(e))}static fromName(e){return new P(Y.fromString(e).popFirst(5))}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}isEqual(e){return e!==null&&Y.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Y.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new P(new Y(e.slice()))}}/**
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
 */function ni(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Mp(t)?4:10:O()}function on(t,e){const n=ni(t);if(n!==ni(e))return!1;switch(n){case 0:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ta(t).isEqual(Ta(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=or(r.timestampValue),o=or(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return fs(r.bytesValue).isEqual(fs(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return ge(r.geoPointValue.latitude)===ge(i.geoPointValue.latitude)&&ge(r.geoPointValue.longitude)===ge(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return ge(r.integerValue)===ge(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=ge(r.doubleValue),o=ge(i.doubleValue);return s===o?ac(s)===ac(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return hs(t.arrayValue.values||[],e.arrayValue.values||[],on);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(rI(s)!==rI(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!on(s[a],o[a])))return!1;return!0}(t,e);default:return O()}}function Sa(t,e){return(t.values||[]).find(n=>on(n,e))!==void 0}function ps(t,e){const n=ni(t),r=ni(e);if(n!==r)return W(n,r);switch(n){case 0:return 0;case 1:return W(t.booleanValue,e.booleanValue);case 2:return function(i,s){const o=ge(i.integerValue||i.doubleValue),a=ge(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return aI(t.timestampValue,e.timestampValue);case 4:return aI(Ta(t),Ta(e));case 5:return W(t.stringValue,e.stringValue);case 6:return function(i,s){const o=fs(i),a=fs(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let u=0;u<o.length&&u<a.length;u++){const l=W(o[u],a[u]);if(l!==0)return l}return W(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,s){const o=W(ge(i.latitude),ge(s.latitude));return o!==0?o:W(ge(i.longitude),ge(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let u=0;u<o.length&&u<a.length;++u){const l=ps(o[u],a[u]);if(l)return l}return W(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,s){const o=i.fields||{},a=Object.keys(o),u=s.fields||{},l=Object.keys(u);a.sort(),l.sort();for(let c=0;c<a.length&&c<l.length;++c){const h=W(a[c],l[c]);if(h!==0)return h;const d=ps(o[a[c]],u[l[c]]);if(d!==0)return d}return W(a.length,l.length)}(t.mapValue,e.mapValue);default:throw O()}}function aI(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return W(t,e);const n=or(t),r=or(e),i=W(n.seconds,r.seconds);return i!==0?i:W(n.nanos,r.nanos)}function $p(t){return Fp(t)}function Fp(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const i=or(r);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?fs(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,P.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=Fp(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${Fp(r.fields[a])}`;return s+"}"}(t.mapValue):O();var e,n}function uc(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Up(t){return!!t&&"integerValue"in t}function Vp(t){return!!t&&"arrayValue"in t}function uI(t){return!!t&&"nullValue"in t}function lI(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function lc(t){return!!t&&"mapValue"in t}function ka(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ei(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=ka(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ka(t.arrayValue.values[n]);return e}return Object.assign({},t)}/**
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
 */class et{constructor(e){this.value=e}static empty(){return new et({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!lc(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ka(n)}setAll(e){let n=We.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=ka(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());lc(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return on(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];lc(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){ei(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new et(ka(this.value))}}function cI(t){const e=[];return ei(t.fields,(n,r)=>{const i=new We([n]);if(lc(r)){const s=cI(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new ds(e)}/**
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
 */class oe{constructor(e,n,r,i,s){this.key=e,this.documentType=n,this.version=r,this.data=i,this.documentState=s}static newInvalidDocument(e){return new oe(e,0,z.min(),et.empty(),0)}static newFoundDocument(e,n,r){return new oe(e,1,n,r,0)}static newNoDocument(e,n){return new oe(e,2,n,et.empty(),0)}static newUnknownDocument(e,n){return new oe(e,3,n,et.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=et.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=et.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof oe&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}clone(){return new oe(this.key,this.documentType,this.version,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class _D{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.A=null}}function hI(t,e=null,n=[],r=[],i=null,s=null,o=null){return new _D(t,e,n,r,i,s,o)}function Na(t){const e=A(t);if(e.A===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>ED(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),ti(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=dc(e.startAt)),e.endAt&&(n+="|ub:",n+=dc(e.endAt)),e.A=n}return e.A}function ID(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(r=n).field.canonicalString()} ${r.op} ${$p(r.value)}`;var r}).join(", ")}]`),ti(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: "+dc(t.startAt)),t.endAt&&(e+=", endAt: "+dc(t.endAt)),`Target(${e})`}function cc(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let i=0;i<t.orderBy.length;i++)if(!bD(t.orderBy[i],e.orderBy[i]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let i=0;i<t.filters.length;i++)if(n=t.filters[i],r=e.filters[i],n.op!==r.op||!n.field.isEqual(r.field)||!on(n.value,r.value))return!1;var n,r;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!pI(t.startAt,e.startAt)&&pI(t.endAt,e.endAt)}function hc(t){return P.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class ut extends class{}{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.R(e,n,r):new TD(e,n,r):n==="array-contains"?new ND(e,r):n==="in"?new CD(e,r):n==="not-in"?new AD(e,r):n==="array-contains-any"?new RD(e,r):new ut(e,n,r)}static R(e,n,r){return n==="in"?new SD(e,r):new kD(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.P(ps(n,this.value)):n!==null&&ni(this.value)===ni(n)&&this.P(ps(n,this.value))}P(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return O()}}v(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}function ED(t){return t.field.canonicalString()+t.op.toString()+$p(t.value)}class TD extends ut{constructor(e,n,r){super(e,n,r),this.key=P.fromName(r.referenceValue)}matches(e){const n=P.comparator(e.key,this.key);return this.P(n)}}class SD extends ut{constructor(e,n){super(e,"in",n),this.keys=dI("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class kD extends ut{constructor(e,n){super(e,"not-in",n),this.keys=dI("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function dI(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>P.fromName(r.referenceValue))}class ND extends ut{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Vp(n)&&Sa(n.arrayValue,this.value)}}class CD extends ut{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Sa(this.value.arrayValue,n)}}class AD extends ut{constructor(e,n){super(e,"not-in",n)}matches(e){if(Sa(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Sa(this.value.arrayValue,n)}}class RD extends ut{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Vp(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Sa(this.value.arrayValue,r))}}class Ca{constructor(e,n){this.position=e,this.before=n}}function dc(t){return`${t.before?"b":"a"}:${t.position.map(e=>$p(e)).join(",")}`}class ms{constructor(e,n="asc"){this.field=e,this.dir=n}}function bD(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function fI(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=P.comparator(P.fromName(o.referenceValue),n.key):r=ps(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return t.before?r<=0:r<0}function pI(t,e){if(t===null)return e===null;if(e===null||t.before!==e.before||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!on(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Nn{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=u,this.V=null,this.S=null,this.startAt,this.endAt}}function mI(t,e,n,r,i,s,o,a){return new Nn(t,e,n,r,i,s,o,a)}function gs(t){return new Nn(t)}function fc(t){return!ti(t.limit)&&t.limitType==="F"}function pc(t){return!ti(t.limit)&&t.limitType==="L"}function Bp(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function jp(t){for(const e of t.filters)if(e.v())return e.field;return null}function zp(t){return t.collectionGroup!==null}function ys(t){const e=A(t);if(e.V===null){e.V=[];const n=jp(e),r=Bp(e);if(n!==null&&r===null)n.isKeyField()||e.V.push(new ms(n)),e.V.push(new ms(We.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.V.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.V.push(new ms(We.keyField(),s))}}}return e.V}function Mt(t){const e=A(t);if(!e.S)if(e.limitType==="F")e.S=hI(e.path,e.collectionGroup,ys(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of ys(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new ms(s.field,o))}const r=e.endAt?new Ca(e.endAt.position,!e.endAt.before):null,i=e.startAt?new Ca(e.startAt.position,!e.startAt.before):null;e.S=hI(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e.S}function gI(t,e,n){return new Nn(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Aa(t,e){return cc(Mt(t),Mt(e))&&t.limitType===e.limitType}function yI(t){return`${Na(Mt(t))}|lt:${t.limitType}`}function qp(t){return`Query(target=${ID(Mt(t))}; limitType=${t.limitType})`}function Ra(t,e){return e.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):P.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,r){for(const i of n.explicitOrderBy)if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!fI(n.startAt,ys(n),r)||n.endAt&&fI(n.endAt,ys(n),r))}(t,e)}function vI(t){return(e,n)=>{let r=!1;for(const i of ys(t)){const s=DD(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function DD(t,e,n){const r=t.field.isKeyField()?P.comparator(e.key,n.key):function(i,s,o){const a=s.data.field(i),u=o.data.field(i);return a!==null&&u!==null?ps(a,u):O()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return O()}}/**
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
 */function wI(t,e){if(t.D){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ac(e)?"-0":e}}function _I(t){return{integerValue:""+t}}function II(t,e){return oI(e)?_I(e):wI(t,e)}/**
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
 */class mc{constructor(){this._=void 0}}function PD(t,e,n){return t instanceof vs?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&(s.fields.__previous_value__=i),{mapValue:s}}(n,e):t instanceof ri?TI(t,e):t instanceof ii?SI(t,e):function(r,i){const s=EI(r,i),o=kI(s)+kI(r.C);return Up(s)&&Up(r.C)?_I(o):wI(r.N,o)}(t,e)}function OD(t,e,n){return t instanceof ri?TI(t,e):t instanceof ii?SI(t,e):n}function EI(t,e){return t instanceof ws?Up(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class vs extends mc{}class ri extends mc{constructor(e){super(),this.elements=e}}function TI(t,e){const n=NI(e);for(const r of t.elements)n.some(i=>on(i,r))||n.push(r);return{arrayValue:{values:n}}}class ii extends mc{constructor(e){super(),this.elements=e}}function SI(t,e){let n=NI(e);for(const r of t.elements)n=n.filter(i=>!on(i,r));return{arrayValue:{values:n}}}class ws extends mc{constructor(e,n){super(),this.N=e,this.C=n}}function kI(t){return ge(t.integerValue||t.doubleValue)}function NI(t){return Vp(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class ba{constructor(e,n){this.field=e,this.transform=n}}function xD(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof ri&&r instanceof ri||n instanceof ii&&r instanceof ii?hs(n.elements,r.elements,on):n instanceof ws&&r instanceof ws?on(n.C,r.C):n instanceof vs&&r instanceof vs}(t.transform,e.transform)}class LD{constructor(e,n){this.version=e,this.transformResults=n}}class ye{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new ye}static exists(e){return new ye(void 0,e)}static updateTime(e){return new ye(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function gc(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class yc{}function MD(t,e,n){t instanceof Da?function(r,i,s){const o=r.value.clone(),a=bI(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,n):t instanceof ar?function(r,i,s){if(!gc(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=bI(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(RI(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function Wp(t,e,n){t instanceof Da?function(r,i,s){if(!gc(r.precondition,i))return;const o=r.value.clone(),a=DI(r.fieldTransforms,s,i);o.setAll(a),i.convertToFoundDocument(AI(i),o).setHasLocalMutations()}(t,e,n):t instanceof ar?function(r,i,s){if(!gc(r.precondition,i))return;const o=DI(r.fieldTransforms,s,i),a=i.data;a.setAll(RI(r)),a.setAll(o),i.convertToFoundDocument(AI(i),a).setHasLocalMutations()}(t,e,n):function(r,i){gc(r.precondition,i)&&i.convertToNoDocument(z.min())}(t,e)}function $D(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=EI(r.transform,i||null);s!=null&&(n==null&&(n=et.empty()),n.set(r.field,s))}return n||null}function CI(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&hs(n,r,(i,s)=>xD(i,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}function AI(t){return t.isFoundDocument()?t.version:z.min()}class Da extends yc{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}}class ar extends yc{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}}function RI(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function bI(t,e,n){const r=new Map;F(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,OD(o,a,n[i]))}return r}function DI(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,PD(s,o,e))}return r}class Pa extends yc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}}class Hp extends yc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}}/**
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
 */class FD{constructor(e){this.count=e}}/**
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
 */var ve,H;function PI(t){switch(t){default:return O();case v.CANCELLED:case v.UNKNOWN:case v.DEADLINE_EXCEEDED:case v.RESOURCE_EXHAUSTED:case v.INTERNAL:case v.UNAVAILABLE:case v.UNAUTHENTICATED:return!1;case v.INVALID_ARGUMENT:case v.NOT_FOUND:case v.ALREADY_EXISTS:case v.PERMISSION_DENIED:case v.FAILED_PRECONDITION:case v.ABORTED:case v.OUT_OF_RANGE:case v.UNIMPLEMENTED:case v.DATA_LOSS:return!0}}function OI(t){if(t===void 0)return me("GRPC error has no .code"),v.UNKNOWN;switch(t){case ve.OK:return v.OK;case ve.CANCELLED:return v.CANCELLED;case ve.UNKNOWN:return v.UNKNOWN;case ve.DEADLINE_EXCEEDED:return v.DEADLINE_EXCEEDED;case ve.RESOURCE_EXHAUSTED:return v.RESOURCE_EXHAUSTED;case ve.INTERNAL:return v.INTERNAL;case ve.UNAVAILABLE:return v.UNAVAILABLE;case ve.UNAUTHENTICATED:return v.UNAUTHENTICATED;case ve.INVALID_ARGUMENT:return v.INVALID_ARGUMENT;case ve.NOT_FOUND:return v.NOT_FOUND;case ve.ALREADY_EXISTS:return v.ALREADY_EXISTS;case ve.PERMISSION_DENIED:return v.PERMISSION_DENIED;case ve.FAILED_PRECONDITION:return v.FAILED_PRECONDITION;case ve.ABORTED:return v.ABORTED;case ve.OUT_OF_RANGE:return v.OUT_OF_RANGE;case ve.UNIMPLEMENTED:return v.UNIMPLEMENTED;case ve.DATA_LOSS:return v.DATA_LOSS;default:return O()}}(H=ve||(ve={}))[H.OK=0]="OK",H[H.CANCELLED=1]="CANCELLED",H[H.UNKNOWN=2]="UNKNOWN",H[H.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",H[H.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",H[H.NOT_FOUND=5]="NOT_FOUND",H[H.ALREADY_EXISTS=6]="ALREADY_EXISTS",H[H.PERMISSION_DENIED=7]="PERMISSION_DENIED",H[H.UNAUTHENTICATED=16]="UNAUTHENTICATED",H[H.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",H[H.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",H[H.ABORTED=10]="ABORTED",H[H.OUT_OF_RANGE=11]="OUT_OF_RANGE",H[H.UNIMPLEMENTED=12]="UNIMPLEMENTED",H[H.INTERNAL=13]="INTERNAL",H[H.UNAVAILABLE=14]="UNAVAILABLE",H[H.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class Te{constructor(e,n){this.comparator=e,this.root=n||He.EMPTY}insert(e,n){return new Te(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,He.BLACK,null,null))}remove(e){return new Te(this.comparator,this.root.remove(e,this.comparator).copy(null,null,He.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new vc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new vc(this.root,e,this.comparator,!1)}getReverseIterator(){return new vc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new vc(this.root,e,this.comparator,!0)}}class vc{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class He{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r!=null?r:He.RED,this.left=i!=null?i:He.EMPTY,this.right=s!=null?s:He.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new He(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,i!=null?i:this.left,s!=null?s:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return He.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return He.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,He.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,He.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw O();const e=this.left.check();if(e!==this.right.check())throw O();return e+(this.isRed()?0:1)}}He.EMPTY=null,He.RED=!0,He.BLACK=!1;He.EMPTY=new class{constructor(){this.size=0}get key(){throw O()}get value(){throw O()}get color(){throw O()}get left(){throw O()}get right(){throw O()}copy(t,e,n,r,i){return this}insert(t,e,n){return new He(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class le{constructor(e){this.comparator=e,this.data=new Te(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new xI(this.data.getIterator())}getIteratorFrom(e){return new xI(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof le)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new le(this.comparator);return n.data=e,n}}class xI{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */const UD=new Te(P.comparator);function $t(){return UD}const VD=new Te(P.comparator);function Kp(){return VD}const BD=new Te(P.comparator);function LI(){return BD}const jD=new le(P.comparator);function J(...t){let e=jD;for(const n of t)e=e.add(n);return e}const zD=new le(W);function wc(){return zD}/**
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
 */class Oa{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n){const r=new Map;return r.set(e,xa.createSynthesizedTargetChangeForCurrentChange(e,n)),new Oa(z.min(),r,wc(),$t(),J())}}class xa{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n){return new xa(De.EMPTY_BYTE_STRING,n,J(),J(),J())}}/**
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
 */class _c{constructor(e,n,r,i){this.k=e,this.removedTargetIds=n,this.key=r,this.$=i}}class MI{constructor(e,n){this.targetId=e,this.O=n}}class $I{constructor(e,n,r=De.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class FI{constructor(){this.F=0,this.M=VI(),this.L=De.EMPTY_BYTE_STRING,this.B=!1,this.U=!0}get current(){return this.B}get resumeToken(){return this.L}get q(){return this.F!==0}get K(){return this.U}j(e){e.approximateByteSize()>0&&(this.U=!0,this.L=e)}W(){let e=J(),n=J(),r=J();return this.M.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:O()}}),new xa(this.L,this.B,e,n,r)}G(){this.U=!1,this.M=VI()}H(e,n){this.U=!0,this.M=this.M.insert(e,n)}J(e){this.U=!0,this.M=this.M.remove(e)}Y(){this.F+=1}X(){this.F-=1}Z(){this.U=!0,this.B=!0}}class qD{constructor(e){this.tt=e,this.et=new Map,this.nt=$t(),this.st=UI(),this.it=new le(W)}rt(e){for(const n of e.k)e.$&&e.$.isFoundDocument()?this.ot(n,e.$):this.at(n,e.key,e.$);for(const n of e.removedTargetIds)this.at(n,e.key,e.$)}ct(e){this.forEachTarget(e,n=>{const r=this.ut(n);switch(e.state){case 0:this.ht(n)&&r.j(e.resumeToken);break;case 1:r.X(),r.q||r.G(),r.j(e.resumeToken);break;case 2:r.X(),r.q||this.removeTarget(n);break;case 3:this.ht(n)&&(r.Z(),r.j(e.resumeToken));break;case 4:this.ht(n)&&(this.lt(n),r.j(e.resumeToken));break;default:O()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.et.forEach((r,i)=>{this.ht(i)&&n(i)})}ft(e){const n=e.targetId,r=e.O.count,i=this.dt(n);if(i){const s=i.target;if(hc(s))if(r===0){const o=new P(s.path);this.at(n,o,oe.newNoDocument(o,z.min()))}else F(r===1);else this.wt(n)!==r&&(this.lt(n),this.it=this.it.add(n))}}_t(e){const n=new Map;this.et.forEach((s,o)=>{const a=this.dt(o);if(a){if(s.current&&hc(a.target)){const u=new P(a.target.path);this.nt.get(u)!==null||this.gt(o,u)||this.at(o,u,oe.newNoDocument(u,e))}s.K&&(n.set(o,s.W()),s.G())}});let r=J();this.st.forEach((s,o)=>{let a=!0;o.forEachWhile(u=>{const l=this.dt(u);return!l||l.purpose===2||(a=!1,!1)}),a&&(r=r.add(s))});const i=new Oa(e,n,this.it,this.nt,r);return this.nt=$t(),this.st=UI(),this.it=new le(W),i}ot(e,n){if(!this.ht(e))return;const r=this.gt(e,n.key)?2:0;this.ut(e).H(n.key,r),this.nt=this.nt.insert(n.key,n),this.st=this.st.insert(n.key,this.yt(n.key).add(e))}at(e,n,r){if(!this.ht(e))return;const i=this.ut(e);this.gt(e,n)?i.H(n,1):i.J(n),this.st=this.st.insert(n,this.yt(n).delete(e)),r&&(this.nt=this.nt.insert(n,r))}removeTarget(e){this.et.delete(e)}wt(e){const n=this.ut(e).W();return this.tt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Y(e){this.ut(e).Y()}ut(e){let n=this.et.get(e);return n||(n=new FI,this.et.set(e,n)),n}yt(e){let n=this.st.get(e);return n||(n=new le(W),this.st=this.st.insert(e,n)),n}ht(e){const n=this.dt(e)!==null;return n||N("WatchChangeAggregator","Detected inactive target",e),n}dt(e){const n=this.et.get(e);return n&&n.q?null:this.tt.Tt(e)}lt(e){this.et.set(e,new FI),this.tt.getRemoteKeysForTarget(e).forEach(n=>{this.at(e,n,null)})}gt(e,n){return this.tt.getRemoteKeysForTarget(e).has(n)}}function UI(){return new Te(P.comparator)}function VI(){return new Te(P.comparator)}/**
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
 */const WD=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),HD=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class KD{constructor(e,n){this.databaseId=e,this.D=n}}function La(t,e){return t.D?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function BI(t,e){return t.D?e.toBase64():e.toUint8Array()}function GD(t,e){return La(t,e.toTimestamp())}function Pe(t){return F(!!t),z.fromTimestamp(function(e){const n=or(e);return new be(n.seconds,n.nanos)}(t))}function Gp(t,e){return function(n){return new Y(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function jI(t){const e=Y.fromString(t);return F(eE(e)),e}function Ma(t,e){return Gp(t.databaseId,e.path)}function an(t,e){const n=jI(e);if(n.get(1)!==t.databaseId.projectId)throw new T(v.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new T(v.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new P(qI(n))}function Qp(t,e){return Gp(t.databaseId,e)}function zI(t){const e=jI(t);return e.length===4?Y.emptyPath():qI(e)}function $a(t){return new Y(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function qI(t){return F(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function WI(t,e,n){return{name:Ma(t,e),fields:n.value.mapValue.fields}}function HI(t,e,n){const r=an(t,e.name),i=Pe(e.updateTime),s=new et({mapValue:{fields:e.fields}}),o=oe.newFoundDocument(r,i,s);return n&&o.setHasCommittedMutations(),n?o.setHasCommittedMutations():o}function QD(t,e){return"found"in e?function(n,r){F(!!r.found),r.found.name,r.found.updateTime;const i=an(n,r.found.name),s=Pe(r.found.updateTime),o=new et({mapValue:{fields:r.found.fields}});return oe.newFoundDocument(i,s,o)}(t,e):"missing"in e?function(n,r){F(!!r.missing),F(!!r.readTime);const i=an(n,r.missing),s=Pe(r.readTime);return oe.newNoDocument(i,s)}(t,e):O()}function YD(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:O()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(u,l){return u.D?(F(l===void 0||typeof l=="string"),De.fromBase64String(l||"")):(F(l===void 0||l instanceof Uint8Array),De.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const l=u.code===void 0?v.UNKNOWN:OI(u.code);return new T(l,u.message||"")}(o);n=new $I(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=an(t,r.document.name),s=Pe(r.document.updateTime),o=new et({mapValue:{fields:r.document.fields}}),a=oe.newFoundDocument(i,s,o),u=r.targetIds||[],l=r.removedTargetIds||[];n=new _c(u,l,a.key,a)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=an(t,r.document),s=r.readTime?Pe(r.readTime):z.min(),o=oe.newNoDocument(i,s),a=r.removedTargetIds||[];n=new _c([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=an(t,r.document),s=r.removedTargetIds||[];n=new _c([],s,i,null)}else{if(!("filter"in e))return O();{e.filter;const r=e.filter;r.targetId;const i=r.count||0,s=new FD(i),o=r.targetId;n=new MI(o,s)}}return n}function Ic(t,e){let n;if(e instanceof Da)n={update:WI(t,e.key,e.value)};else if(e instanceof Pa)n={delete:Ma(t,e.key)};else if(e instanceof ar)n={update:WI(t,e.key,e.data),updateMask:rP(e.fieldMask)};else{if(!(e instanceof Hp))return O();n={verify:Ma(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,s){const o=s.transform;if(o instanceof vs)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof ri)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof ii)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof ws)return{fieldPath:s.field.canonicalString(),increment:o.C};throw O()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:GD(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:O()}(t,e.precondition)),n}function KI(t,e){const n=e.currentDocument?function(i){return i.updateTime!==void 0?ye.updateTime(Pe(i.updateTime)):i.exists!==void 0?ye.exists(i.exists):ye.none()}(e.currentDocument):ye.none(),r=e.updateTransforms?e.updateTransforms.map(i=>function(s,o){let a=null;if("setToServerValue"in o)F(o.setToServerValue==="REQUEST_TIME"),a=new vs;else if("appendMissingElements"in o){const l=o.appendMissingElements.values||[];a=new ri(l)}else if("removeAllFromArray"in o){const l=o.removeAllFromArray.values||[];a=new ii(l)}else"increment"in o?a=new ws(s,o.increment):O();const u=We.fromServerFormat(o.fieldPath);return new ba(u,a)}(t,i)):[];if(e.update){e.update.name;const i=an(t,e.update.name),s=new et({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(a){const u=a.fieldPaths||[];return new ds(u.map(l=>We.fromServerFormat(l)))}(e.updateMask);return new ar(i,s,o,n,r)}return new Da(i,s,n,r)}if(e.delete){const i=an(t,e.delete);return new Pa(i,n)}if(e.verify){const i=an(t,e.verify);return new Hp(i,n)}return O()}function JD(t,e){return t&&t.length>0?(F(e!==void 0),t.map(n=>function(r,i){let s=r.updateTime?Pe(r.updateTime):Pe(i);return s.isEqual(z.min())&&(s=Pe(i)),new LD(s,r.transformResults||[])}(n,e))):[]}function GI(t,e){return{documents:[Qp(t,e.path)]}}function QI(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Qp(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Qp(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(a){if(a.length===0)return;const u=a.map(l=>function(c){if(c.op==="=="){if(lI(c.value))return{unaryFilter:{field:_s(c.field),op:"IS_NAN"}};if(uI(c.value))return{unaryFilter:{field:_s(c.field),op:"IS_NULL"}}}else if(c.op==="!="){if(lI(c.value))return{unaryFilter:{field:_s(c.field),op:"IS_NOT_NAN"}};if(uI(c.value))return{unaryFilter:{field:_s(c.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:_s(c.field),op:eP(c.op),value:c.value}}}(l));return u.length===1?u[0]:{compositeFilter:{op:"AND",filters:u}}}(e.filters);i&&(n.structuredQuery.where=i);const s=function(a){if(a.length!==0)return a.map(u=>function(l){return{field:_s(l.field),direction:ZD(l.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(a,u){return a.D||ti(u)?u:{value:u}}(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=XI(e.startAt)),e.endAt&&(n.structuredQuery.endAt=XI(e.endAt)),n}function YI(t){let e=zI(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){F(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=JI(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(c=>function(h){return new ms(Is(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(c)));let a=null;n.limit&&(a=function(c){let h;return h=typeof c=="object"?c.value:c,ti(h)?null:h}(n.limit));let u=null;n.startAt&&(u=ZI(n.startAt));let l=null;return n.endAt&&(l=ZI(n.endAt)),mI(e,i,o,s,a,"F",u,l)}function XD(t,e){const n=function(r,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return O()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function JI(t){return t?t.unaryFilter!==void 0?[nP(t)]:t.fieldFilter!==void 0?[tP(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>JI(e)).reduce((e,n)=>e.concat(n)):O():[]}function XI(t){return{before:t.before,values:t.position}}function ZI(t){const e=!!t.before,n=t.values||[];return new Ca(n,e)}function ZD(t){return WD[t]}function eP(t){return HD[t]}function _s(t){return{fieldPath:t.canonicalString()}}function Is(t){return We.fromServerFormat(t.fieldPath)}function tP(t){return ut.create(Is(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return O()}}(t.fieldFilter.op),t.fieldFilter.value)}function nP(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Is(t.unaryFilter.field);return ut.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Is(t.unaryFilter.field);return ut.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Is(t.unaryFilter.field);return ut.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Is(t.unaryFilter.field);return ut.create(i,"!=",{nullValue:"NULL_VALUE"});default:return O()}}function rP(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function eE(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */function qt(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=tE(e)),e=iP(t.get(n),e);return tE(e)}function iP(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case"":n+="";break;default:n+=s}}return n}function tE(t){return t+""}function Cn(t){const e=t.length;if(F(e>=2),e===2)return F(t.charAt(0)===""&&t.charAt(1)===""),Y.emptyPath();const n=e-2,r=[];let i="";for(let s=0;s<e;){const o=t.indexOf("",s);switch((o<0||o>n)&&O(),t.charAt(o+1)){case"":const a=t.substring(s,o);let u;i.length===0?u=a:(i+=a,u=i,i=""),r.push(u);break;case"":i+=t.substring(s,o),i+="\0";break;case"":i+=t.substring(s,o+1);break;default:O()}s=o+2}return new Y(r)}/**
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
 */class sP{constructor(e,n){this.seconds=e,this.nanoseconds=n}}class kt{constructor(e,n,r){this.ownerId=e,this.allowTabSynchronization=n,this.leaseTimestampMs=r}}kt.store="owner",kt.key="owner";class ur{constructor(e,n,r){this.userId=e,this.lastAcknowledgedBatchId=n,this.lastStreamToken=r}}ur.store="mutationQueues",ur.keyPath="userId";class ne{constructor(e,n,r,i,s){this.userId=e,this.batchId=n,this.localWriteTimeMs=r,this.baseMutations=i,this.mutations=s}}ne.store="mutations",ne.keyPath="batchId",ne.userMutationsIndex="userMutationsIndex",ne.userMutationsKeyPath=["userId","batchId"];class tt{constructor(){}static prefixForUser(e){return[e]}static prefixForPath(e,n){return[e,qt(n)]}static key(e,n,r){return[e,qt(n),r]}}tt.store="documentMutations",tt.PLACEHOLDER=new tt;class oP{constructor(e,n){this.path=e,this.readTime=n}}class aP{constructor(e,n){this.path=e,this.version=n}}class ce{constructor(e,n,r,i,s,o){this.unknownDocument=e,this.noDocument=n,this.document=r,this.hasCommittedMutations=i,this.readTime=s,this.parentPath=o}}ce.store="remoteDocuments",ce.readTimeIndex="readTimeIndex",ce.readTimeIndexPath="readTime",ce.collectionReadTimeIndex="collectionReadTimeIndex",ce.collectionReadTimeIndexPath=["parentPath","readTime"];class un{constructor(e){this.byteSize=e}}un.store="remoteDocumentGlobal",un.key="remoteDocumentGlobalKey";class gt{constructor(e,n,r,i,s,o,a){this.targetId=e,this.canonicalId=n,this.readTime=r,this.resumeToken=i,this.lastListenSequenceNumber=s,this.lastLimboFreeSnapshotVersion=o,this.query=a}}gt.store="targets",gt.keyPath="targetId",gt.queryTargetsIndexName="queryTargetsIndex",gt.queryTargetsKeyPath=["canonicalId","targetId"];class Ke{constructor(e,n,r){this.targetId=e,this.path=n,this.sequenceNumber=r}}Ke.store="targetDocuments",Ke.keyPath=["targetId","path"],Ke.documentTargetsIndex="documentTargetsIndex",Ke.documentTargetsKeyPath=["path","targetId"];class Nt{constructor(e,n,r,i){this.highestTargetId=e,this.highestListenSequenceNumber=n,this.lastRemoteSnapshotVersion=r,this.targetCount=i}}Nt.key="targetGlobalKey",Nt.store="targetGlobal";class si{constructor(e,n){this.collectionId=e,this.parent=n}}si.store="collectionParents",si.keyPath=["collectionId","parent"];class An{constructor(e,n,r,i){this.clientId=e,this.updateTimeMs=n,this.networkEnabled=r,this.inForeground=i}}An.store="clientMetadata",An.keyPath="clientId";class Es{constructor(e,n,r){this.bundleId=e,this.createTime=n,this.version=r}}Es.store="bundles",Es.keyPath="bundleId";class Ts{constructor(e,n,r){this.name=e,this.readTime=n,this.bundledQuery=r}}Ts.store="namedQueries",Ts.keyPath="name";const uP=[ur.store,ne.store,tt.store,ce.store,gt.store,kt.store,Nt.store,Ke.store,An.store,un.store,si.store,Es.store,Ts.store],nE="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class rE{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */class E{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&O(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new E((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof E?n:E.resolve(n)}catch(n){return E.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):E.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):E.reject(n)}static resolve(e){return new E((n,r)=>{n(e)})}static reject(e){return new E((n,r)=>{r(e)})}static waitFor(e){return new E((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=E.resolve(!1);for(const r of e)n=n.next(i=>i?E.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}}/**
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
 */class Ec{constructor(e,n){this.action=e,this.transaction=n,this.aborted=!1,this.Et=new Re,this.transaction.oncomplete=()=>{this.Et.resolve()},this.transaction.onabort=()=>{n.error?this.Et.reject(new Fa(e,n.error)):this.Et.resolve()},this.transaction.onerror=r=>{const i=Yp(r.target.error);this.Et.reject(new Fa(e,i))}}static open(e,n,r,i){try{return new Ec(n,e.transaction(i,r))}catch(s){throw new Fa(n,s)}}get It(){return this.Et.promise}abort(e){e&&this.Et.reject(e),this.aborted||(N("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}store(e){const n=this.transaction.objectStore(e);return new cP(n)}}class Wt{constructor(e,n,r){this.name=e,this.version=n,this.At=r,Wt.Rt(te())===12.2&&me("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return N("SimpleDb","Removing database:",e),ai(window.indexedDB.deleteDatabase(e)).toPromise()}static bt(){if(!ll())return!1;if(Wt.Pt())return!0;const e=te(),n=Wt.Rt(e),r=0<n&&n<10,i=Wt.vt(e),s=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||s)}static Pt(){var e;return typeof process!="undefined"&&((e=process.env)===null||e===void 0?void 0:e.Vt)==="YES"}static St(e,n){return e.store(n)}static Rt(e){const n=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=n?n[1].split("_").slice(0,2).join("."):"-1";return Number(r)}static vt(e){const n=e.match(/Android ([\d.]+)/i),r=n?n[1].split(".").slice(0,2).join("."):"-1";return Number(r)}async Dt(e){return this.db||(N("SimpleDb","Opening database:",this.name),this.db=await new Promise((n,r)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const o=s.target.result;n(o)},i.onblocked=()=>{r(new Fa(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const o=s.target.error;o.name==="VersionError"?r(new T(v.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new T(v.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new Fa(e,o))},i.onupgradeneeded=s=>{N("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const o=s.target.result;this.At.Ct(o,i.transaction,s.oldVersion,this.version).next(()=>{N("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.Nt&&(this.db.onversionchange=n=>this.Nt(n)),this.db}xt(e){this.Nt=e,this.db&&(this.db.onversionchange=n=>e(n))}async runTransaction(e,n,r,i){const s=n==="readonly";let o=0;for(;;){++o;try{this.db=await this.Dt(e);const a=Ec.open(this.db,e,s?"readonly":"readwrite",r),u=i(a).catch(l=>(a.abort(l),E.reject(l))).toPromise();return u.catch(()=>{}),await a.It,u}catch(a){const u=a.name!=="FirebaseError"&&o<3;if(N("SimpleDb","Transaction failed with error:",a.message,"Retrying:",u),this.close(),!u)return Promise.reject(a)}}}close(){this.db&&this.db.close(),this.db=void 0}}class lP{constructor(e){this.kt=e,this.$t=!1,this.Ot=null}get isDone(){return this.$t}get Ft(){return this.Ot}set cursor(e){this.kt=e}done(){this.$t=!0}Mt(e){this.Ot=e}delete(){return ai(this.kt.delete())}}class Fa extends T{constructor(e,n){super(v.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${n}`),this.name="IndexedDbTransactionError"}}function oi(t){return t.name==="IndexedDbTransactionError"}class cP{constructor(e){this.store=e}put(e,n){let r;return n!==void 0?(N("SimpleDb","PUT",this.store.name,e,n),r=this.store.put(n,e)):(N("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),ai(r)}add(e){return N("SimpleDb","ADD",this.store.name,e,e),ai(this.store.add(e))}get(e){return ai(this.store.get(e)).next(n=>(n===void 0&&(n=null),N("SimpleDb","GET",this.store.name,e,n),n))}delete(e){return N("SimpleDb","DELETE",this.store.name,e),ai(this.store.delete(e))}count(){return N("SimpleDb","COUNT",this.store.name),ai(this.store.count())}Lt(e,n){const r=this.cursor(this.options(e,n)),i=[];return this.Bt(r,(s,o)=>{i.push(o)}).next(()=>i)}Ut(e,n){N("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,n);r.qt=!1;const i=this.cursor(r);return this.Bt(i,(s,o,a)=>a.delete())}Kt(e,n){let r;n?r=e:(r={},n=e);const i=this.cursor(r);return this.Bt(i,n)}jt(e){const n=this.cursor({});return new E((r,i)=>{n.onerror=s=>{const o=Yp(s.target.error);i(o)},n.onsuccess=s=>{const o=s.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}Bt(e,n){const r=[];return new E((i,s)=>{e.onerror=o=>{s(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void i();const u=new lP(a),l=n(a.primaryKey,a.value,u);if(l instanceof E){const c=l.catch(h=>(u.done(),E.reject(h)));r.push(c)}u.isDone?i():u.Ft===null?a.continue():a.continue(u.Ft)}}).next(()=>E.waitFor(r))}options(e,n){let r;return e!==void 0&&(typeof e=="string"?r=e:n=e),{index:r,range:n}}cursor(e){let n="next";if(e.reverse&&(n="prev"),e.index){const r=this.store.index(e.index);return e.qt?r.openKeyCursor(e.range,n):r.openCursor(e.range,n)}return this.store.openCursor(e.range,n)}}function ai(t){return new E((e,n)=>{t.onsuccess=r=>{const i=r.target.result;e(i)},t.onerror=r=>{const i=Yp(r.target.error);n(i)}})}let iE=!1;function Yp(t){const e=Wt.Rt(te());if(e>=12.2&&e<13){const n="An internal error was encountered in the Indexed Database server";if(t.message.indexOf(n)>=0){const r=new T("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${n}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return iE||(iE=!0,setTimeout(()=>{throw r},0)),r}}return t}/**
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
 */class sE extends rE{constructor(e,n){super(),this.Qt=e,this.currentSequenceNumber=n}}function yt(t,e){const n=A(t);return Wt.St(n.Qt,e)}/**
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
 */class Jp{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&MD(s,e,r[i])}}applyToLocalView(e){for(const n of this.baseMutations)n.key.isEqual(e.key)&&Wp(n,e,this.localWriteTime);for(const n of this.mutations)n.key.isEqual(e.key)&&Wp(n,e,this.localWriteTime)}applyToLocalDocumentSet(e){this.mutations.forEach(n=>{const r=e.get(n.key),i=r;this.applyToLocalView(i),r.isValidDocument()||i.convertToNoDocument(z.min())})}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),J())}isEqual(e){return this.batchId===e.batchId&&hs(this.mutations,e.mutations,(n,r)=>CI(n,r))&&hs(this.baseMutations,e.baseMutations,(n,r)=>CI(n,r))}}class Xp{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){F(e.mutations.length===r.length);let i=LI();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Xp(e,n,r,i)}}/**
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
 */class lr{constructor(e,n,r,i,s=z.min(),o=z.min(),a=De.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new lr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new lr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new lr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
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
 */class oE{constructor(e){this.Wt=e}}function Zp(t,e){if(e.document)return HI(t.Wt,e.document,!!e.hasCommittedMutations);if(e.noDocument){const n=P.fromSegments(e.noDocument.path),r=ks(e.noDocument.readTime),i=oe.newNoDocument(n,r);return e.hasCommittedMutations?i.setHasCommittedMutations():i}if(e.unknownDocument){const n=P.fromSegments(e.unknownDocument.path),r=ks(e.unknownDocument.version);return oe.newUnknownDocument(n,r)}return O()}function aE(t,e,n){const r=em(n),i=e.key.path.popLast().toArray();if(e.isFoundDocument()){const s=function(a,u){return{name:Ma(a,u.key),fields:u.data.value.mapValue.fields,updateTime:La(a,u.version.toTimestamp())}}(t.Wt,e),o=e.hasCommittedMutations;return new ce(null,null,s,o,r,i)}if(e.isNoDocument()){const s=e.key.path.toArray(),o=Ss(e.version),a=e.hasCommittedMutations;return new ce(null,new oP(s,o),null,a,r,i)}if(e.isUnknownDocument()){const s=e.key.path.toArray(),o=Ss(e.version);return new ce(new aP(s,o),null,null,!0,r,i)}return O()}function em(t){const e=t.toTimestamp();return[e.seconds,e.nanoseconds]}function uE(t){const e=new be(t[0],t[1]);return z.fromTimestamp(e)}function Ss(t){const e=t.toTimestamp();return new sP(e.seconds,e.nanoseconds)}function ks(t){const e=new be(t.seconds,t.nanoseconds);return z.fromTimestamp(e)}function Ns(t,e){const n=(e.baseMutations||[]).map(s=>KI(t.Wt,s));for(let s=0;s<e.mutations.length-1;++s){const o=e.mutations[s];if(s+1<e.mutations.length&&e.mutations[s+1].transform!==void 0){const a=e.mutations[s+1];o.updateTransforms=a.transform.fieldTransforms,e.mutations.splice(s+1,1),++s}}const r=e.mutations.map(s=>KI(t.Wt,s)),i=be.fromMillis(e.localWriteTimeMs);return new Jp(e.batchId,i,n,r)}function Ua(t){const e=ks(t.readTime),n=t.lastLimboFreeSnapshotVersion!==void 0?ks(t.lastLimboFreeSnapshotVersion):z.min();let r;var i;return t.query.documents!==void 0?(F((i=t.query).documents.length===1),r=Mt(gs(zI(i.documents[0])))):r=function(s){return Mt(YI(s))}(t.query),new lr(r,t.targetId,0,t.lastListenSequenceNumber,e,n,De.fromBase64String(t.resumeToken))}function lE(t,e){const n=Ss(e.snapshotVersion),r=Ss(e.lastLimboFreeSnapshotVersion);let i;i=hc(e.target)?GI(t.Wt,e.target):QI(t.Wt,e.target);const s=e.resumeToken.toBase64();return new gt(e.targetId,Na(e.target),n,s,e.sequenceNumber,r,i)}function tm(t){const e=YI({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?gI(e,e.limit,"L"):e}/**
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
 */class hP{getBundleMetadata(e,n){return cE(e).get(n).next(r=>{if(r)return{id:(i=r).bundleId,createTime:ks(i.createTime),version:i.version};var i})}saveBundleMetadata(e,n){return cE(e).put({bundleId:(r=n).id,createTime:Ss(Pe(r.createTime)),version:r.version});var r}getNamedQuery(e,n){return hE(e).get(n).next(r=>{if(r)return{name:(i=r).name,query:tm(i.bundledQuery),readTime:ks(i.readTime)};var i})}saveNamedQuery(e,n){return hE(e).put(function(r){return{name:r.name,readTime:Ss(Pe(r.readTime)),bundledQuery:r.bundledQuery}}(n))}}function cE(t){return yt(t,Es.store)}function hE(t){return yt(t,Ts.store)}/**
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
 */class dP{constructor(){this.Gt=new nm}addToCollectionParentIndex(e,n){return this.Gt.add(n),E.resolve()}getCollectionParents(e,n){return E.resolve(this.Gt.getEntries(n))}}class nm{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new le(Y.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new le(Y.comparator)).toArray()}}/**
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
 */class fP{constructor(){this.zt=new nm}addToCollectionParentIndex(e,n){if(!this.zt.has(n)){const r=n.lastSegment(),i=n.popLast();e.addOnCommittedListener(()=>{this.zt.add(n)});const s={collectionId:r,parent:qt(i)};return dE(e).put(s)}return E.resolve()}getCollectionParents(e,n){const r=[],i=IDBKeyRange.bound([n,""],[nI(n),""],!1,!0);return dE(e).Lt(i).next(s=>{for(const o of s){if(o.collectionId!==n)break;r.push(Cn(o.parent))}return r})}}function dE(t){return yt(t,si.store)}/**
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
 */const fE={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class vt{constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new vt(e,vt.DEFAULT_COLLECTION_PERCENTILE,vt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
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
 */function pE(t,e,n){const r=t.store(ne.store),i=t.store(tt.store),s=[],o=IDBKeyRange.only(n.batchId);let a=0;const u=r.Kt({range:o},(c,h,d)=>(a++,d.delete()));s.push(u.next(()=>{F(a===1)}));const l=[];for(const c of n.mutations){const h=tt.key(e,c.key.path,n.batchId);s.push(i.delete(h)),l.push(c.key)}return E.waitFor(s).next(()=>l)}function Tc(t){if(!t)return 0;let e;if(t.document)e=t.document;else if(t.unknownDocument)e=t.unknownDocument;else{if(!t.noDocument)throw O();e=t.noDocument}return JSON.stringify(e).length}/**
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
 */vt.DEFAULT_COLLECTION_PERCENTILE=10,vt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,vt.DEFAULT=new vt(41943040,vt.DEFAULT_COLLECTION_PERCENTILE,vt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),vt.DISABLED=new vt(-1,0,0);class rm{constructor(e,n,r,i){this.userId=e,this.N=n,this.Ht=r,this.referenceDelegate=i,this.Jt={}}static Yt(e,n,r,i){F(e.uid!=="");const s=e.isAuthenticated()?e.uid:"";return new rm(s,n,r,i)}checkEmpty(e){let n=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return cr(e).Kt({index:ne.userMutationsIndex,range:r},(i,s,o)=>{n=!1,o.done()}).next(()=>n)}addMutationBatch(e,n,r,i){const s=Cs(e),o=cr(e);return o.add({}).next(a=>{F(typeof a=="number");const u=new Jp(a,n,r,i),l=function(d,g,y){const I=y.baseMutations.map(f=>Ic(d.Wt,f)),p=y.mutations.map(f=>Ic(d.Wt,f));return new ne(g,y.batchId,y.localWriteTime.toMillis(),I,p)}(this.N,this.userId,u),c=[];let h=new le((d,g)=>W(d.canonicalString(),g.canonicalString()));for(const d of i){const g=tt.key(this.userId,d.key.path,a);h=h.add(d.key.path.popLast()),c.push(o.put(l)),c.push(s.put(g,tt.PLACEHOLDER))}return h.forEach(d=>{c.push(this.Ht.addToCollectionParentIndex(e,d))}),e.addOnCommittedListener(()=>{this.Jt[a]=u.keys()}),E.waitFor(c).next(()=>u)})}lookupMutationBatch(e,n){return cr(e).get(n).next(r=>r?(F(r.userId===this.userId),Ns(this.N,r)):null)}Xt(e,n){return this.Jt[n]?E.resolve(this.Jt[n]):this.lookupMutationBatch(e,n).next(r=>{if(r){const i=r.keys();return this.Jt[n]=i,i}return null})}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=IDBKeyRange.lowerBound([this.userId,r]);let s=null;return cr(e).Kt({index:ne.userMutationsIndex,range:i},(o,a,u)=>{a.userId===this.userId&&(F(a.batchId>=r),s=Ns(this.N,a)),u.done()}).next(()=>s)}getHighestUnacknowledgedBatchId(e){const n=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=-1;return cr(e).Kt({index:ne.userMutationsIndex,range:n,reverse:!0},(i,s,o)=>{r=s.batchId,o.done()}).next(()=>r)}getAllMutationBatches(e){const n=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return cr(e).Lt(ne.userMutationsIndex,n).next(r=>r.map(i=>Ns(this.N,i)))}getAllMutationBatchesAffectingDocumentKey(e,n){const r=tt.prefixForPath(this.userId,n.path),i=IDBKeyRange.lowerBound(r),s=[];return Cs(e).Kt({range:i},(o,a,u)=>{const[l,c,h]=o,d=Cn(c);if(l===this.userId&&n.path.isEqual(d))return cr(e).get(h).next(g=>{if(!g)throw O();F(g.userId===this.userId),s.push(Ns(this.N,g))});u.done()}).next(()=>s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new le(W);const i=[];return n.forEach(s=>{const o=tt.prefixForPath(this.userId,s.path),a=IDBKeyRange.lowerBound(o),u=Cs(e).Kt({range:a},(l,c,h)=>{const[d,g,y]=l,I=Cn(g);d===this.userId&&s.path.isEqual(I)?r=r.add(y):h.done()});i.push(u)}),E.waitFor(i).next(()=>this.Zt(e,r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1,s=tt.prefixForPath(this.userId,r),o=IDBKeyRange.lowerBound(s);let a=new le(W);return Cs(e).Kt({range:o},(u,l,c)=>{const[h,d,g]=u,y=Cn(d);h===this.userId&&r.isPrefixOf(y)?y.length===i&&(a=a.add(g)):c.done()}).next(()=>this.Zt(e,a))}Zt(e,n){const r=[],i=[];return n.forEach(s=>{i.push(cr(e).get(s).next(o=>{if(o===null)throw O();F(o.userId===this.userId),r.push(Ns(this.N,o))}))}),E.waitFor(i).next(()=>r)}removeMutationBatch(e,n){return pE(e.Qt,this.userId,n).next(r=>(e.addOnCommittedListener(()=>{this.te(n.batchId)}),E.forEach(r,i=>this.referenceDelegate.markPotentiallyOrphaned(e,i))))}te(e){delete this.Jt[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(n=>{if(!n)return E.resolve();const r=IDBKeyRange.lowerBound(tt.prefixForUser(this.userId)),i=[];return Cs(e).Kt({range:r},(s,o,a)=>{if(s[0]===this.userId){const u=Cn(s[1]);i.push(u)}else a.done()}).next(()=>{F(i.length===0)})})}containsKey(e,n){return mE(e,this.userId,n)}ee(e){return gE(e).get(this.userId).next(n=>n||new ur(this.userId,-1,""))}}function mE(t,e,n){const r=tt.prefixForPath(e,n.path),i=r[1],s=IDBKeyRange.lowerBound(r);let o=!1;return Cs(t).Kt({range:s,qt:!0},(a,u,l)=>{const[c,h,d]=a;c===e&&h===i&&(o=!0),l.done()}).next(()=>o)}function cr(t){return yt(t,ne.store)}function Cs(t){return yt(t,tt.store)}function gE(t){return yt(t,ur.store)}/**
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
 */class ui{constructor(e){this.ne=e}next(){return this.ne+=2,this.ne}static se(){return new ui(0)}static ie(){return new ui(-1)}}/**
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
 */class pP{constructor(e,n){this.referenceDelegate=e,this.N=n}allocateTargetId(e){return this.re(e).next(n=>{const r=new ui(n.highestTargetId);return n.highestTargetId=r.next(),this.oe(e,n).next(()=>n.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.re(e).next(n=>z.fromTimestamp(new be(n.lastRemoteSnapshotVersion.seconds,n.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.re(e).next(n=>n.highestListenSequenceNumber)}setTargetsMetadata(e,n,r){return this.re(e).next(i=>(i.highestListenSequenceNumber=n,r&&(i.lastRemoteSnapshotVersion=r.toTimestamp()),n>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=n),this.oe(e,i)))}addTargetData(e,n){return this.ae(e,n).next(()=>this.re(e).next(r=>(r.targetCount+=1,this.ce(n,r),this.oe(e,r))))}updateTargetData(e,n){return this.ae(e,n)}removeTargetData(e,n){return this.removeMatchingKeysForTargetId(e,n.targetId).next(()=>As(e).delete(n.targetId)).next(()=>this.re(e)).next(r=>(F(r.targetCount>0),r.targetCount-=1,this.oe(e,r)))}removeTargets(e,n,r){let i=0;const s=[];return As(e).Kt((o,a)=>{const u=Ua(a);u.sequenceNumber<=n&&r.get(u.targetId)===null&&(i++,s.push(this.removeTargetData(e,u)))}).next(()=>E.waitFor(s)).next(()=>i)}forEachTarget(e,n){return As(e).Kt((r,i)=>{const s=Ua(i);n(s)})}re(e){return yE(e).get(Nt.key).next(n=>(F(n!==null),n))}oe(e,n){return yE(e).put(Nt.key,n)}ae(e,n){return As(e).put(lE(this.N,n))}ce(e,n){let r=!1;return e.targetId>n.highestTargetId&&(n.highestTargetId=e.targetId,r=!0),e.sequenceNumber>n.highestListenSequenceNumber&&(n.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.re(e).next(n=>n.targetCount)}getTargetData(e,n){const r=Na(n),i=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let s=null;return As(e).Kt({range:i,index:gt.queryTargetsIndexName},(o,a,u)=>{const l=Ua(a);cc(n,l.target)&&(s=l,u.done())}).next(()=>s)}addMatchingKeys(e,n,r){const i=[],s=hr(e);return n.forEach(o=>{const a=qt(o.path);i.push(s.put(new Ke(r,a))),i.push(this.referenceDelegate.addReference(e,r,o))}),E.waitFor(i)}removeMatchingKeys(e,n,r){const i=hr(e);return E.forEach(n,s=>{const o=qt(s.path);return E.waitFor([i.delete([r,o]),this.referenceDelegate.removeReference(e,r,s)])})}removeMatchingKeysForTargetId(e,n){const r=hr(e),i=IDBKeyRange.bound([n],[n+1],!1,!0);return r.delete(i)}getMatchingKeysForTargetId(e,n){const r=IDBKeyRange.bound([n],[n+1],!1,!0),i=hr(e);let s=J();return i.Kt({range:r,qt:!0},(o,a,u)=>{const l=Cn(o[1]),c=new P(l);s=s.add(c)}).next(()=>s)}containsKey(e,n){const r=qt(n.path),i=IDBKeyRange.bound([r],[nI(r)],!1,!0);let s=0;return hr(e).Kt({index:Ke.documentTargetsIndex,qt:!0,range:i},([o,a],u,l)=>{o!==0&&(s++,l.done())}).next(()=>s>0)}Tt(e,n){return As(e).get(n).next(r=>r?Ua(r):null)}}function As(t){return yt(t,gt.store)}function yE(t){return yt(t,Nt.store)}function hr(t){return yt(t,Ke.store)}/**
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
 */async function li(t){if(t.code!==v.FAILED_PRECONDITION||t.message!==nE)throw t;N("LocalStore","Unexpectedly lost primary lease")}/**
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
 */function vE([t,e],[n,r]){const i=W(t,n);return i===0?W(e,r):i}class mP{constructor(e){this.ue=e,this.buffer=new le(vE),this.he=0}le(){return++this.he}fe(e){const n=[e,this.le()];if(this.buffer.size<this.ue)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();vE(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class gP{constructor(e,n){this.garbageCollector=e,this.asyncQueue=n,this.de=!1,this.we=null}start(e){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this._e(e)}stop(){this.we&&(this.we.cancel(),this.we=null)}get started(){return this.we!==null}_e(e){const n=this.de?3e5:6e4;N("LruGarbageCollector",`Garbage collection scheduled in ${n}ms`),this.we=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",n,async()=>{this.we=null,this.de=!0;try{await e.collectGarbage(this.garbageCollector)}catch(r){oi(r)?N("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",r):await li(r)}await this._e(e)})}}class yP{constructor(e,n){this.me=e,this.params=n}calculateTargetCount(e,n){return this.me.ge(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return E.resolve(St.T);const r=new mP(n);return this.me.forEachTarget(e,i=>r.fe(i.sequenceNumber)).next(()=>this.me.ye(e,i=>r.fe(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.me.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.me.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(N("LruGarbageCollector","Garbage collection skipped; disabled"),E.resolve(fE)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(N("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),fE):this.pe(e,n))}getCacheSize(e){return this.me.getCacheSize(e)}pe(e,n){let r,i,s,o,a,u,l;const c=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(h=>(h>this.params.maximumSequenceNumbersToCollect?(N("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${h}`),i=this.params.maximumSequenceNumbersToCollect):i=h,o=Date.now(),this.nthSequenceNumber(e,i))).next(h=>(r=h,a=Date.now(),this.removeTargets(e,r,n))).next(h=>(s=h,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(h=>(l=Date.now(),xp()<=G.DEBUG&&N("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-c}ms
	Determined least recently used ${i} in `+(a-o)+`ms
	Removed ${s} targets in `+(u-a)+`ms
	Removed ${h} documents in `+(l-u)+`ms
Total Duration: ${l-c}ms`),E.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:h})))}}/**
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
 */class vP{constructor(e,n){this.db=e,this.garbageCollector=function(r,i){return new yP(r,i)}(this,n)}ge(e){const n=this.Te(e);return this.db.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}Te(e){let n=0;return this.ye(e,r=>{n++}).next(()=>n)}forEachTarget(e,n){return this.db.getTargetCache().forEachTarget(e,n)}ye(e,n){return this.Ee(e,(r,i)=>n(i))}addReference(e,n,r){return Sc(e,r)}removeReference(e,n,r){return Sc(e,r)}removeTargets(e,n,r){return this.db.getTargetCache().removeTargets(e,n,r)}markPotentiallyOrphaned(e,n){return Sc(e,n)}Ie(e,n){return function(r,i){let s=!1;return gE(r).jt(o=>mE(r,o,i).next(a=>(a&&(s=!0),E.resolve(!a)))).next(()=>s)}(e,n)}removeOrphanedDocuments(e,n){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let s=0;return this.Ee(e,(o,a)=>{if(a<=n){const u=this.Ie(e,o).next(l=>{if(!l)return s++,r.getEntry(e,o).next(()=>(r.removeEntry(o),hr(e).delete([0,qt(o.path)])))});i.push(u)}}).next(()=>E.waitFor(i)).next(()=>r.apply(e)).next(()=>s)}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,n){return Sc(e,n)}Ee(e,n){const r=hr(e);let i,s=St.T;return r.Kt({index:Ke.documentTargetsIndex},([o,a],{path:u,sequenceNumber:l})=>{o===0?(s!==St.T&&n(new P(Cn(i)),s),s=l,i=u):s=St.T}).next(()=>{s!==St.T&&n(new P(Cn(i)),s)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function Sc(t,e){return hr(t).put(function(n,r){return new Ke(0,qt(n.path),r)}(e,t.currentSequenceNumber))}/**
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
 */class Rs{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={}}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i!==void 0){for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n])}else this.inner[r]=[[e,n]]}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),!0;return!1}forEach(e){ei(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return iI(this.inner)}}/**
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
 */class wE{constructor(){this.changes=new Rs(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}getReadTime(e){const n=this.changes.get(e);return n?n.readTime:z.min()}addEntry(e,n){this.assertNotApplied(),this.changes.set(e.key,{document:e,readTime:n})}removeEntry(e,n=null){this.assertNotApplied(),this.changes.set(e,{document:oe.newInvalidDocument(e),readTime:n})}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?E.resolve(r.document):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class wP{constructor(e,n){this.N=e,this.Ht=n}addEntry(e,n,r){return dr(e).put(kc(n),r)}removeEntry(e,n){const r=dr(e),i=kc(n);return r.delete(i)}updateMetadata(e,n){return this.getMetadata(e).next(r=>(r.byteSize+=n,this.Ae(e,r)))}getEntry(e,n){return dr(e).get(kc(n)).next(r=>this.Re(n,r))}be(e,n){return dr(e).get(kc(n)).next(r=>({document:this.Re(n,r),size:Tc(r)}))}getEntries(e,n){let r=$t();return this.Pe(e,n,(i,s)=>{const o=this.Re(i,s);r=r.insert(i,o)}).next(()=>r)}ve(e,n){let r=$t(),i=new Te(P.comparator);return this.Pe(e,n,(s,o)=>{const a=this.Re(s,o);r=r.insert(s,a),i=i.insert(s,Tc(o))}).next(()=>({documents:r,Ve:i}))}Pe(e,n,r){if(n.isEmpty())return E.resolve();const i=IDBKeyRange.bound(n.first().path.toArray(),n.last().path.toArray()),s=n.getIterator();let o=s.getNext();return dr(e).Kt({range:i},(a,u,l)=>{const c=P.fromSegments(a);for(;o&&P.comparator(o,c)<0;)r(o,null),o=s.getNext();o&&o.isEqual(c)&&(r(o,u),o=s.hasNext()?s.getNext():null),o?l.Mt(o.path.toArray()):l.done()}).next(()=>{for(;o;)r(o,null),o=s.hasNext()?s.getNext():null})}getDocumentsMatchingQuery(e,n,r){let i=$t();const s=n.path.length+1,o={};if(r.isEqual(z.min())){const a=n.path.toArray();o.range=IDBKeyRange.lowerBound(a)}else{const a=n.path.toArray(),u=em(r);o.range=IDBKeyRange.lowerBound([a,u],!0),o.index=ce.collectionReadTimeIndex}return dr(e).Kt(o,(a,u,l)=>{if(a.length!==s)return;const c=Zp(this.N,u);n.path.isPrefixOf(c.key.path)?Ra(n,c)&&(i=i.insert(c.key,c)):l.done()}).next(()=>i)}newChangeBuffer(e){return new _P(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(n=>n.byteSize)}getMetadata(e){return _E(e).get(un.key).next(n=>(F(!!n),n))}Ae(e,n){return _E(e).put(un.key,n)}Re(e,n){if(n){const r=Zp(this.N,n);if(!(r.isNoDocument()&&r.version.isEqual(z.min())))return r}return oe.newInvalidDocument(e)}}class _P extends wE{constructor(e,n){super(),this.Se=e,this.trackRemovals=n,this.De=new Rs(r=>r.toString(),(r,i)=>r.isEqual(i))}applyChanges(e){const n=[];let r=0,i=new le((s,o)=>W(s.canonicalString(),o.canonicalString()));return this.changes.forEach((s,o)=>{const a=this.De.get(s);if(o.document.isValidDocument()){const u=aE(this.Se.N,o.document,this.getReadTime(s));i=i.add(s.path.popLast()),r+=Tc(u)-a,n.push(this.Se.addEntry(e,s,u))}else if(r-=a,this.trackRemovals){const u=aE(this.Se.N,oe.newNoDocument(s,z.min()),this.getReadTime(s));n.push(this.Se.addEntry(e,s,u))}else n.push(this.Se.removeEntry(e,s))}),i.forEach(s=>{n.push(this.Se.Ht.addToCollectionParentIndex(e,s))}),n.push(this.Se.updateMetadata(e,r)),E.waitFor(n)}getFromCache(e,n){return this.Se.be(e,n).next(r=>(this.De.set(n,r.size),r.document))}getAllFromCache(e,n){return this.Se.ve(e,n).next(({documents:r,Ve:i})=>(i.forEach((s,o)=>{this.De.set(s,o)}),r))}}function _E(t){return yt(t,un.store)}function dr(t){return yt(t,ce.store)}function kc(t){return t.path.toArray()}/**
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
 */class IP{constructor(e){this.N=e}Ct(e,n,r,i){F(r<i&&r>=0&&i<=11);const s=new Ec("createOrUpgrade",n);r<1&&i>=1&&(function(a){a.createObjectStore(kt.store)}(e),function(a){a.createObjectStore(ur.store,{keyPath:ur.keyPath}),a.createObjectStore(ne.store,{keyPath:ne.keyPath,autoIncrement:!0}).createIndex(ne.userMutationsIndex,ne.userMutationsKeyPath,{unique:!0}),a.createObjectStore(tt.store)}(e),IE(e),function(a){a.createObjectStore(ce.store)}(e));let o=E.resolve();return r<3&&i>=3&&(r!==0&&(function(a){a.deleteObjectStore(Ke.store),a.deleteObjectStore(gt.store),a.deleteObjectStore(Nt.store)}(e),IE(e)),o=o.next(()=>function(a){const u=a.store(Nt.store),l=new Nt(0,0,z.min().toTimestamp(),0);return u.put(Nt.key,l)}(s))),r<4&&i>=4&&(r!==0&&(o=o.next(()=>function(a,u){return u.store(ne.store).Lt().next(l=>{a.deleteObjectStore(ne.store),a.createObjectStore(ne.store,{keyPath:ne.keyPath,autoIncrement:!0}).createIndex(ne.userMutationsIndex,ne.userMutationsKeyPath,{unique:!0});const c=u.store(ne.store),h=l.map(d=>c.put(d));return E.waitFor(h)})}(e,s))),o=o.next(()=>{(function(a){a.createObjectStore(An.store,{keyPath:An.keyPath})})(e)})),r<5&&i>=5&&(o=o.next(()=>this.Ce(s))),r<6&&i>=6&&(o=o.next(()=>(function(a){a.createObjectStore(un.store)}(e),this.Ne(s)))),r<7&&i>=7&&(o=o.next(()=>this.xe(s))),r<8&&i>=8&&(o=o.next(()=>this.ke(e,s))),r<9&&i>=9&&(o=o.next(()=>{(function(a){a.objectStoreNames.contains("remoteDocumentChanges")&&a.deleteObjectStore("remoteDocumentChanges")})(e),function(a){const u=a.objectStore(ce.store);u.createIndex(ce.readTimeIndex,ce.readTimeIndexPath,{unique:!1}),u.createIndex(ce.collectionReadTimeIndex,ce.collectionReadTimeIndexPath,{unique:!1})}(n)})),r<10&&i>=10&&(o=o.next(()=>this.$e(s))),r<11&&i>=11&&(o=o.next(()=>{(function(a){a.createObjectStore(Es.store,{keyPath:Es.keyPath})})(e),function(a){a.createObjectStore(Ts.store,{keyPath:Ts.keyPath})}(e)})),o}Ne(e){let n=0;return e.store(ce.store).Kt((r,i)=>{n+=Tc(i)}).next(()=>{const r=new un(n);return e.store(un.store).put(un.key,r)})}Ce(e){const n=e.store(ur.store),r=e.store(ne.store);return n.Lt().next(i=>E.forEach(i,s=>{const o=IDBKeyRange.bound([s.userId,-1],[s.userId,s.lastAcknowledgedBatchId]);return r.Lt(ne.userMutationsIndex,o).next(a=>E.forEach(a,u=>{F(u.userId===s.userId);const l=Ns(this.N,u);return pE(e,s.userId,l).next(()=>{})}))}))}xe(e){const n=e.store(Ke.store),r=e.store(ce.store);return e.store(Nt.store).get(Nt.key).next(i=>{const s=[];return r.Kt((o,a)=>{const u=new Y(o),l=function(c){return[0,qt(c)]}(u);s.push(n.get(l).next(c=>c?E.resolve():(h=>n.put(new Ke(0,qt(h),i.highestListenSequenceNumber)))(u)))}).next(()=>E.waitFor(s))})}ke(e,n){e.createObjectStore(si.store,{keyPath:si.keyPath});const r=n.store(si.store),i=new nm,s=o=>{if(i.add(o)){const a=o.lastSegment(),u=o.popLast();return r.put({collectionId:a,parent:qt(u)})}};return n.store(ce.store).Kt({qt:!0},(o,a)=>{const u=new Y(o);return s(u.popLast())}).next(()=>n.store(tt.store).Kt({qt:!0},([o,a,u],l)=>{const c=Cn(a);return s(c.popLast())}))}$e(e){const n=e.store(gt.store);return n.Kt((r,i)=>{const s=Ua(i),o=lE(this.N,s);return n.put(o)})}}function IE(t){t.createObjectStore(Ke.store,{keyPath:Ke.keyPath}).createIndex(Ke.documentTargetsIndex,Ke.documentTargetsKeyPath,{unique:!0}),t.createObjectStore(gt.store,{keyPath:gt.keyPath}).createIndex(gt.queryTargetsIndexName,gt.queryTargetsKeyPath,{unique:!0}),t.createObjectStore(Nt.store)}const im="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class sm{constructor(e,n,r,i,s,o,a,u,l,c){if(this.allowTabSynchronization=e,this.persistenceKey=n,this.clientId=r,this.Oe=s,this.window=o,this.document=a,this.Fe=l,this.Me=c,this.Le=null,this.Be=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Ue=null,this.inForeground=!1,this.qe=null,this.Ke=null,this.je=Number.NEGATIVE_INFINITY,this.Qe=h=>Promise.resolve(),!sm.bt())throw new T(v.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new vP(this,i),this.We=n+"main",this.N=new oE(u),this.Ge=new Wt(this.We,11,new IP(this.N)),this.ze=new pP(this.referenceDelegate,this.N),this.Ht=new fP,this.He=function(h,d){return new wP(h,d)}(this.N,this.Ht),this.Je=new hP,this.window&&this.window.localStorage?this.Ye=this.window.localStorage:(this.Ye=null,c===!1&&me("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.Xe().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new T(v.FAILED_PRECONDITION,im);return this.Ze(),this.tn(),this.en(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.ze.getHighestSequenceNumber(e))}).then(e=>{this.Le=new St(e,this.Fe)}).then(()=>{this.Be=!0}).catch(e=>(this.Ge&&this.Ge.close(),Promise.reject(e)))}nn(e){return this.Qe=async n=>{if(this.started)return e(n)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Ge.xt(async n=>{n.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.Oe.enqueueAndForget(async()=>{this.started&&await this.Xe()}))}Xe(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>Nc(e).put(new An(this.clientId,Date.now(),this.networkEnabled,this.inForeground)).next(()=>{if(this.isPrimary)return this.sn(e).next(n=>{n||(this.isPrimary=!1,this.Oe.enqueueRetryable(()=>this.Qe(!1)))})}).next(()=>this.rn(e)).next(n=>this.isPrimary&&!n?this.on(e).next(()=>!1):!!n&&this.an(e).next(()=>!0))).catch(e=>{if(oi(e))return N("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return N("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.Oe.enqueueRetryable(()=>this.Qe(e)),this.isPrimary=e})}sn(e){return Va(e).get(kt.key).next(n=>E.resolve(this.cn(n)))}un(e){return Nc(e).delete(this.clientId)}async hn(){if(this.isPrimary&&!this.ln(this.je,18e5)){this.je=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",n=>{const r=yt(n,An.store);return r.Lt().next(i=>{const s=this.fn(i,18e5),o=i.filter(a=>s.indexOf(a)===-1);return E.forEach(o,a=>r.delete(a.clientId)).next(()=>o)})}).catch(()=>[]);if(this.Ye)for(const n of e)this.Ye.removeItem(this.dn(n.clientId))}}en(){this.Ke=this.Oe.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.Xe().then(()=>this.hn()).then(()=>this.en()))}cn(e){return!!e&&e.ownerId===this.clientId}rn(e){return this.Me?E.resolve(!0):Va(e).get(kt.key).next(n=>{if(n!==null&&this.ln(n.leaseTimestampMs,5e3)&&!this.wn(n.ownerId)){if(this.cn(n)&&this.networkEnabled)return!0;if(!this.cn(n)){if(!n.allowTabSynchronization)throw new T(v.FAILED_PRECONDITION,im);return!1}}return!(!this.networkEnabled||!this.inForeground)||Nc(e).Lt().next(r=>this.fn(r,5e3).find(i=>{if(this.clientId!==i.clientId){const s=!this.networkEnabled&&i.networkEnabled,o=!this.inForeground&&i.inForeground,a=this.networkEnabled===i.networkEnabled;if(s||o&&a)return!0}return!1})===void 0)}).next(n=>(this.isPrimary!==n&&N("IndexedDbPersistence",`Client ${n?"is":"is not"} eligible for a primary lease.`),n))}async shutdown(){this.Be=!1,this._n(),this.Ke&&(this.Ke.cancel(),this.Ke=null),this.mn(),this.gn(),await this.Ge.runTransaction("shutdown","readwrite",[kt.store,An.store],e=>{const n=new sE(e,St.T);return this.on(n).next(()=>this.un(n))}),this.Ge.close(),this.yn()}fn(e,n){return e.filter(r=>this.ln(r.updateTimeMs,n)&&!this.wn(r.clientId))}pn(){return this.runTransaction("getActiveClients","readonly",e=>Nc(e).Lt().next(n=>this.fn(n,18e5).map(r=>r.clientId)))}get started(){return this.Be}getMutationQueue(e){return rm.Yt(e,this.N,this.Ht,this.referenceDelegate)}getTargetCache(){return this.ze}getRemoteDocumentCache(){return this.He}getIndexManager(){return this.Ht}getBundleCache(){return this.Je}runTransaction(e,n,r){N("IndexedDbPersistence","Starting transaction:",e);const i=n==="readonly"?"readonly":"readwrite";let s;return this.Ge.runTransaction(e,i,uP,o=>(s=new sE(o,this.Le?this.Le.next():St.T),n==="readwrite-primary"?this.sn(s).next(a=>!!a||this.rn(s)).next(a=>{if(!a)throw me(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.Oe.enqueueRetryable(()=>this.Qe(!1)),new T(v.FAILED_PRECONDITION,nE);return r(s)}).next(a=>this.an(s).next(()=>a)):this.Tn(s).next(()=>r(s)))).then(o=>(s.raiseOnCommittedEvent(),o))}Tn(e){return Va(e).get(kt.key).next(n=>{if(n!==null&&this.ln(n.leaseTimestampMs,5e3)&&!this.wn(n.ownerId)&&!this.cn(n)&&!(this.Me||this.allowTabSynchronization&&n.allowTabSynchronization))throw new T(v.FAILED_PRECONDITION,im)})}an(e){const n=new kt(this.clientId,this.allowTabSynchronization,Date.now());return Va(e).put(kt.key,n)}static bt(){return Wt.bt()}on(e){const n=Va(e);return n.get(kt.key).next(r=>this.cn(r)?(N("IndexedDbPersistence","Releasing primary lease."),n.delete(kt.key)):E.resolve())}ln(e,n){const r=Date.now();return!(e<r-n)&&(!(e>r)||(me(`Detected an update time that is in the future: ${e} > ${r}`),!1))}Ze(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.qe=()=>{this.Oe.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.Xe()))},this.document.addEventListener("visibilitychange",this.qe),this.inForeground=this.document.visibilityState==="visible")}mn(){this.qe&&(this.document.removeEventListener("visibilitychange",this.qe),this.qe=null)}tn(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.Ue=()=>{this._n(),ak()&&navigator.appVersion.match("Version/14")&&this.Oe.enterRestrictedMode(!0),this.Oe.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Ue))}gn(){this.Ue&&(this.window.removeEventListener("pagehide",this.Ue),this.Ue=null)}wn(e){var n;try{const r=((n=this.Ye)===null||n===void 0?void 0:n.getItem(this.dn(e)))!==null;return N("IndexedDbPersistence",`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return me("IndexedDbPersistence","Failed to get zombied client id.",r),!1}}_n(){if(this.Ye)try{this.Ye.setItem(this.dn(this.clientId),String(Date.now()))}catch(e){me("Failed to set zombie client id.",e)}}yn(){if(this.Ye)try{this.Ye.removeItem(this.dn(this.clientId))}catch{}}dn(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function Va(t){return yt(t,kt.store)}function Nc(t){return yt(t,An.store)}function om(t,e){let n=t.projectId;return t.isDefaultDatabase||(n+="."+t.database),"firestore/"+e+"/"+n+"/"}/**
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
 */class EP{constructor(e,n){this.progress=e,this.En=n}}/**
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
 */class EE{constructor(e,n,r){this.He=e,this.In=n,this.Ht=r}An(e,n){return this.In.getAllMutationBatchesAffectingDocumentKey(e,n).next(r=>this.Rn(e,n,r))}Rn(e,n,r){return this.He.getEntry(e,n).next(i=>{for(const s of r)s.applyToLocalView(i);return i})}bn(e,n){e.forEach((r,i)=>{for(const s of n)s.applyToLocalView(i)})}Pn(e,n){return this.He.getEntries(e,n).next(r=>this.vn(e,r).next(()=>r))}vn(e,n){return this.In.getAllMutationBatchesAffectingDocumentKeys(e,n).next(r=>this.bn(n,r))}getDocumentsMatchingQuery(e,n,r){return function(i){return P.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.Vn(e,n.path):zp(n)?this.Sn(e,n,r):this.Dn(e,n,r)}Vn(e,n){return this.An(e,new P(n)).next(r=>{let i=Kp();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}Sn(e,n,r){const i=n.collectionGroup;let s=Kp();return this.Ht.getCollectionParents(e,i).next(o=>E.forEach(o,a=>{const u=function(l,c){return new Nn(c,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(i));return this.Dn(e,u,r).next(l=>{l.forEach((c,h)=>{s=s.insert(c,h)})})}).next(()=>s))}Dn(e,n,r){let i,s;return this.He.getDocumentsMatchingQuery(e,n,r).next(o=>(i=o,this.In.getAllMutationBatchesAffectingQuery(e,n))).next(o=>(s=o,this.Cn(e,s,i).next(a=>{i=a;for(const u of s)for(const l of u.mutations){const c=l.key;let h=i.get(c);h==null&&(h=oe.newInvalidDocument(c),i=i.insert(c,h)),Wp(l,h,u.localWriteTime),h.isFoundDocument()||(i=i.remove(c))}}))).next(()=>(i.forEach((o,a)=>{Ra(n,a)||(i=i.remove(o))}),i))}Cn(e,n,r){let i=J();for(const o of n)for(const a of o.mutations)a instanceof ar&&r.get(a.key)===null&&(i=i.add(a.key));let s=r;return this.He.getEntries(e,i).next(o=>(o.forEach((a,u)=>{u.isFoundDocument()&&(s=s.insert(a,u))}),s))}}/**
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
 */class am{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Nn=r,this.xn=i}static kn(e,n){let r=J(),i=J();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new am(e,n.fromCache,r,i)}}/**
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
 */class TE{$n(e){this.On=e}getDocumentsMatchingQuery(e,n,r,i){return function(s){return s.filters.length===0&&s.limit===null&&s.startAt==null&&s.endAt==null&&(s.explicitOrderBy.length===0||s.explicitOrderBy.length===1&&s.explicitOrderBy[0].field.isKeyField())}(n)||r.isEqual(z.min())?this.Fn(e,n):this.On.Pn(e,i).next(s=>{const o=this.Mn(n,s);return(fc(n)||pc(n))&&this.Ln(n.limitType,o,i,r)?this.Fn(e,n):(xp()<=G.DEBUG&&N("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),qp(n)),this.On.getDocumentsMatchingQuery(e,n,r).next(a=>(o.forEach(u=>{a=a.insert(u.key,u)}),a)))})}Mn(e,n){let r=new le(vI(e));return n.forEach((i,s)=>{Ra(e,s)&&(r=r.add(s))}),r}Ln(e,n,r,i){if(r.size!==n.size)return!0;const s=e==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Fn(e,n){return xp()<=G.DEBUG&&N("QueryEngine","Using full collection scan to execute query:",qp(n)),this.On.getDocumentsMatchingQuery(e,n,z.min())}}/**
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
 */class TP{constructor(e,n,r,i){this.persistence=e,this.Bn=n,this.N=i,this.Un=new Te(W),this.qn=new Rs(s=>Na(s),cc),this.Kn=z.min(),this.In=e.getMutationQueue(r),this.jn=e.getRemoteDocumentCache(),this.ze=e.getTargetCache(),this.Qn=new EE(this.jn,this.In,this.persistence.getIndexManager()),this.Je=e.getBundleCache(),this.Bn.$n(this.Qn)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Un))}}function SE(t,e,n,r){return new TP(t,e,n,r)}async function kE(t,e){const n=A(t);let r=n.In,i=n.Qn;const s=await n.persistence.runTransaction("Handle user change","readonly",o=>{let a;return n.In.getAllMutationBatches(o).next(u=>(a=u,r=n.persistence.getMutationQueue(e),i=new EE(n.jn,r,n.persistence.getIndexManager()),r.getAllMutationBatches(o))).next(u=>{const l=[],c=[];let h=J();for(const d of a){l.push(d.batchId);for(const g of d.mutations)h=h.add(g.key)}for(const d of u){c.push(d.batchId);for(const g of d.mutations)h=h.add(g.key)}return i.Pn(o,h).next(d=>({Wn:d,removedBatchIds:l,addedBatchIds:c}))})});return n.In=r,n.Qn=i,n.Bn.$n(n.Qn),s}function SP(t,e){const n=A(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.jn.newChangeBuffer({trackRemovals:!0});return function(o,a,u,l){const c=u.batch,h=c.keys();let d=E.resolve();return h.forEach(g=>{d=d.next(()=>l.getEntry(a,g)).next(y=>{const I=u.docVersions.get(g);F(I!==null),y.version.compareTo(I)<0&&(c.applyToRemoteDocument(y,u),y.isValidDocument()&&l.addEntry(y,u.commitVersion))})}),d.next(()=>o.In.removeMutationBatch(a,c))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.In.performConsistencyCheck(r)).next(()=>n.Qn.Pn(r,i))})}function NE(t){const e=A(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.ze.getLastRemoteSnapshotVersion(n))}function kP(t,e){const n=A(t),r=e.snapshotVersion;let i=n.Un;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.jn.newChangeBuffer({trackRemovals:!0});i=n.Un;const a=[];e.targetChanges.forEach((l,c)=>{const h=i.get(c);if(!h)return;a.push(n.ze.removeMatchingKeys(s,l.removedDocuments,c).next(()=>n.ze.addMatchingKeys(s,l.addedDocuments,c)));const d=l.resumeToken;if(d.approximateByteSize()>0){const g=h.withResumeToken(d,r).withSequenceNumber(s.currentSequenceNumber);i=i.insert(c,g),function(y,I,p){return F(I.resumeToken.approximateByteSize()>0),y.resumeToken.approximateByteSize()===0||I.snapshotVersion.toMicroseconds()-y.snapshotVersion.toMicroseconds()>=3e8?!0:p.addedDocuments.size+p.modifiedDocuments.size+p.removedDocuments.size>0}(h,g,l)&&a.push(n.ze.updateTargetData(s,g))}});let u=$t();if(e.documentUpdates.forEach((l,c)=>{e.resolvedLimboDocuments.has(l)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,l))}),a.push(CE(s,o,e.documentUpdates,r,void 0).next(l=>{u=l})),!r.isEqual(z.min())){const l=n.ze.getLastRemoteSnapshotVersion(s).next(c=>n.ze.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(l)}return E.waitFor(a).next(()=>o.apply(s)).next(()=>n.Qn.vn(s,u)).next(()=>u)}).then(s=>(n.Un=i,s))}function CE(t,e,n,r,i){let s=J();return n.forEach(o=>s=s.add(o)),e.getEntries(t,s).next(o=>{let a=$t();return n.forEach((u,l)=>{const c=o.get(u),h=(i==null?void 0:i.get(u))||r;l.isNoDocument()&&l.version.isEqual(z.min())?(e.removeEntry(u,h),a=a.insert(u,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(l,h),a=a.insert(u,l)):N("LocalStore","Ignoring outdated watch update for ",u,". Current version:",c.version," Watch version:",l.version)}),a})}function NP(t,e){const n=A(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.In.getNextMutationBatchAfterBatchId(r,e)))}function bs(t,e){const n=A(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.ze.getTargetData(r,e).next(s=>s?(i=s,E.resolve(i)):n.ze.allocateTargetId(r).next(o=>(i=new lr(e,o,0,r.currentSequenceNumber),n.ze.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Un.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Un=n.Un.insert(r.targetId,r),n.qn.set(e,r.targetId)),r})}async function Ds(t,e,n){const r=A(t),i=r.Un.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!oi(o))throw o;N("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Un=r.Un.remove(e),r.qn.delete(i.target)}function Cc(t,e,n){const r=A(t);let i=z.min(),s=J();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,u,l){const c=A(a),h=c.qn.get(l);return h!==void 0?E.resolve(c.Un.get(h)):c.ze.getTargetData(u,l)}(r,o,Mt(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.ze.getMatchingKeysForTargetId(o,a.targetId).next(u=>{s=u})}).next(()=>r.Bn.getDocumentsMatchingQuery(o,e,n?i:z.min(),n?s:J())).next(a=>({documents:a,Gn:s})))}function AE(t,e){const n=A(t),r=A(n.ze),i=n.Un.get(e);return i?Promise.resolve(i.target):n.persistence.runTransaction("Get target data","readonly",s=>r.Tt(s,e).next(o=>o?o.target:null))}function RE(t){const e=A(t);return e.persistence.runTransaction("Get new document changes","readonly",n=>function(r,i,s){const o=A(r);let a=$t(),u=em(s);const l=dr(i),c=IDBKeyRange.lowerBound(u,!0);return l.Kt({index:ce.readTimeIndex,range:c},(h,d)=>{const g=Zp(o.N,d);a=a.insert(g.key,g),u=d.readTime}).next(()=>({En:a,readTime:uE(u)}))}(e.jn,n,e.Kn)).then(({En:n,readTime:r})=>(e.Kn=r,n))}async function CP(t){const e=A(t);return e.persistence.runTransaction("Synchronize last document change read time","readonly",n=>function(r){const i=dr(r);let s=z.min();return i.Kt({index:ce.readTimeIndex,reverse:!0},(o,a,u)=>{a.readTime&&(s=uE(a.readTime)),u.done()}).next(()=>s)}(n)).then(n=>{e.Kn=n})}async function AP(t,e,n,r){const i=A(t);let s=J(),o=$t(),a=LI();for(const c of n){const h=e.zn(c.metadata.name);c.document&&(s=s.add(h)),o=o.insert(h,e.Hn(c)),a=a.insert(h,e.Jn(c.metadata.readTime))}const u=i.jn.newChangeBuffer({trackRemovals:!0}),l=await bs(i,function(c){return Mt(gs(Y.fromString(`__bundle__/docs/${c}`)))}(r));return i.persistence.runTransaction("Apply bundle documents","readwrite",c=>CE(c,u,o,z.min(),a).next(h=>(u.apply(c),h)).next(h=>i.ze.removeMatchingKeysForTargetId(c,l.targetId).next(()=>i.ze.addMatchingKeys(c,s,l.targetId)).next(()=>i.Qn.vn(c,h)).next(()=>h)))}async function RP(t,e,n=J()){const r=await bs(t,Mt(tm(e.bundledQuery))),i=A(t);return i.persistence.runTransaction("Save named query","readwrite",s=>{const o=Pe(e.readTime);if(r.snapshotVersion.compareTo(o)>=0)return i.Je.saveNamedQuery(s,e);const a=r.withResumeToken(De.EMPTY_BYTE_STRING,o);return i.Un=i.Un.insert(a.targetId,a),i.ze.updateTargetData(s,a).next(()=>i.ze.removeMatchingKeysForTargetId(s,r.targetId)).next(()=>i.ze.addMatchingKeys(s,n,r.targetId)).next(()=>i.Je.saveNamedQuery(s,e))})}/**
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
 */class bP{constructor(e){this.N=e,this.Yn=new Map,this.Xn=new Map}getBundleMetadata(e,n){return E.resolve(this.Yn.get(n))}saveBundleMetadata(e,n){var r;return this.Yn.set(n.id,{id:(r=n).id,version:r.version,createTime:Pe(r.createTime)}),E.resolve()}getNamedQuery(e,n){return E.resolve(this.Xn.get(n))}saveNamedQuery(e,n){return this.Xn.set(n.name,function(r){return{name:r.name,query:tm(r.bundledQuery),readTime:Pe(r.readTime)}}(n)),E.resolve()}}/**
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
 */class um{constructor(){this.Zn=new le(Oe.ts),this.es=new le(Oe.ns)}isEmpty(){return this.Zn.isEmpty()}addReference(e,n){const r=new Oe(e,n);this.Zn=this.Zn.add(r),this.es=this.es.add(r)}ss(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.rs(new Oe(e,n))}os(e,n){e.forEach(r=>this.removeReference(r,n))}cs(e){const n=new P(new Y([])),r=new Oe(n,e),i=new Oe(n,e+1),s=[];return this.es.forEachInRange([r,i],o=>{this.rs(o),s.push(o.key)}),s}us(){this.Zn.forEach(e=>this.rs(e))}rs(e){this.Zn=this.Zn.delete(e),this.es=this.es.delete(e)}hs(e){const n=new P(new Y([])),r=new Oe(n,e),i=new Oe(n,e+1);let s=J();return this.es.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Oe(e,0),r=this.Zn.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Oe{constructor(e,n){this.key=e,this.ls=n}static ts(e,n){return P.comparator(e.key,n.key)||W(e.ls,n.ls)}static ns(e,n){return W(e.ls,n.ls)||P.comparator(e.key,n.key)}}/**
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
 */class DP{constructor(e,n){this.Ht=e,this.referenceDelegate=n,this.In=[],this.fs=1,this.ds=new le(Oe.ts)}checkEmpty(e){return E.resolve(this.In.length===0)}addMutationBatch(e,n,r,i){const s=this.fs;this.fs++,this.In.length>0&&this.In[this.In.length-1];const o=new Jp(s,n,r,i);this.In.push(o);for(const a of i)this.ds=this.ds.add(new Oe(a.key,s)),this.Ht.addToCollectionParentIndex(e,a.key.path.popLast());return E.resolve(o)}lookupMutationBatch(e,n){return E.resolve(this.ws(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this._s(r),s=i<0?0:i;return E.resolve(this.In.length>s?this.In[s]:null)}getHighestUnacknowledgedBatchId(){return E.resolve(this.In.length===0?-1:this.fs-1)}getAllMutationBatches(e){return E.resolve(this.In.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Oe(n,0),i=new Oe(n,Number.POSITIVE_INFINITY),s=[];return this.ds.forEachInRange([r,i],o=>{const a=this.ws(o.ls);s.push(a)}),E.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new le(W);return n.forEach(i=>{const s=new Oe(i,0),o=new Oe(i,Number.POSITIVE_INFINITY);this.ds.forEachInRange([s,o],a=>{r=r.add(a.ls)})}),E.resolve(this.gs(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;P.isDocumentKey(s)||(s=s.child(""));const o=new Oe(new P(s),0);let a=new le(W);return this.ds.forEachWhile(u=>{const l=u.key.path;return!!r.isPrefixOf(l)&&(l.length===i&&(a=a.add(u.ls)),!0)},o),E.resolve(this.gs(a))}gs(e){const n=[];return e.forEach(r=>{const i=this.ws(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){F(this.ys(n.batchId,"removed")===0),this.In.shift();let r=this.ds;return E.forEach(n.mutations,i=>{const s=new Oe(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.ds=r})}te(e){}containsKey(e,n){const r=new Oe(n,0),i=this.ds.firstAfterOrEqual(r);return E.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.In.length,E.resolve()}ys(e,n){return this._s(e)}_s(e){return this.In.length===0?0:e-this.In[0].batchId}ws(e){const n=this._s(e);return n<0||n>=this.In.length?null:this.In[n]}}/**
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
 */class PP{constructor(e,n){this.Ht=e,this.ps=n,this.docs=new Te(P.comparator),this.size=0}addEntry(e,n,r){const i=n.key,s=this.docs.get(i),o=s?s.size:0,a=this.ps(n);return this.docs=this.docs.insert(i,{document:n.clone(),size:a,readTime:r}),this.size+=a-o,this.Ht.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return E.resolve(r?r.document.clone():oe.newInvalidDocument(n))}getEntries(e,n){let r=$t();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.clone():oe.newInvalidDocument(i))}),E.resolve(r)}getDocumentsMatchingQuery(e,n,r){let i=$t();const s=new P(n.path.child("")),o=this.docs.getIteratorFrom(s);for(;o.hasNext();){const{key:a,value:{document:u,readTime:l}}=o.getNext();if(!n.path.isPrefixOf(a.path))break;l.compareTo(r)<=0||Ra(n,u)&&(i=i.insert(u.key,u.clone()))}return E.resolve(i)}Ts(e,n){return E.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new OP(this)}getSize(e){return E.resolve(this.size)}}class OP extends wE{constructor(e){super(),this.Se=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.document.isValidDocument()?n.push(this.Se.addEntry(e,i.document,this.getReadTime(r))):this.Se.removeEntry(r)}),E.waitFor(n)}getFromCache(e,n){return this.Se.getEntry(e,n)}getAllFromCache(e,n){return this.Se.getEntries(e,n)}}/**
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
 */class xP{constructor(e){this.persistence=e,this.Es=new Rs(n=>Na(n),cc),this.lastRemoteSnapshotVersion=z.min(),this.highestTargetId=0,this.Is=0,this.As=new um,this.targetCount=0,this.Rs=ui.se()}forEachTarget(e,n){return this.Es.forEach((r,i)=>n(i)),E.resolve()}getLastRemoteSnapshotVersion(e){return E.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return E.resolve(this.Is)}allocateTargetId(e){return this.highestTargetId=this.Rs.next(),E.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Is&&(this.Is=n),E.resolve()}ae(e){this.Es.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Rs=new ui(n),this.highestTargetId=n),e.sequenceNumber>this.Is&&(this.Is=e.sequenceNumber)}addTargetData(e,n){return this.ae(n),this.targetCount+=1,E.resolve()}updateTargetData(e,n){return this.ae(n),E.resolve()}removeTargetData(e,n){return this.Es.delete(n.target),this.As.cs(n.targetId),this.targetCount-=1,E.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Es.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Es.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),E.waitFor(s).next(()=>i)}getTargetCount(e){return E.resolve(this.targetCount)}getTargetData(e,n){const r=this.Es.get(n)||null;return E.resolve(r)}addMatchingKeys(e,n,r){return this.As.ss(n,r),E.resolve()}removeMatchingKeys(e,n,r){this.As.os(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),E.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.As.cs(n),E.resolve()}getMatchingKeysForTargetId(e,n){const r=this.As.hs(n);return E.resolve(r)}containsKey(e,n){return E.resolve(this.As.containsKey(n))}}/**
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
 */class LP{constructor(e,n){this.bs={},this.Le=new St(0),this.Be=!1,this.Be=!0,this.referenceDelegate=e(this),this.ze=new xP(this),this.Ht=new dP,this.He=function(r,i){return new PP(r,i)}(this.Ht,r=>this.referenceDelegate.Ps(r)),this.N=new oE(n),this.Je=new bP(this.N)}start(){return Promise.resolve()}shutdown(){return this.Be=!1,Promise.resolve()}get started(){return this.Be}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(){return this.Ht}getMutationQueue(e){let n=this.bs[e.toKey()];return n||(n=new DP(this.Ht,this.referenceDelegate),this.bs[e.toKey()]=n),n}getTargetCache(){return this.ze}getRemoteDocumentCache(){return this.He}getBundleCache(){return this.Je}runTransaction(e,n,r){N("MemoryPersistence","Starting transaction:",e);const i=new MP(this.Le.next());return this.referenceDelegate.vs(),r(i).next(s=>this.referenceDelegate.Vs(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ss(e,n){return E.or(Object.values(this.bs).map(r=>()=>r.containsKey(e,n)))}}class MP extends rE{constructor(e){super(),this.currentSequenceNumber=e}}class lm{constructor(e){this.persistence=e,this.Ds=new um,this.Cs=null}static Ns(e){return new lm(e)}get xs(){if(this.Cs)return this.Cs;throw O()}addReference(e,n,r){return this.Ds.addReference(r,n),this.xs.delete(r.toString()),E.resolve()}removeReference(e,n,r){return this.Ds.removeReference(r,n),this.xs.add(r.toString()),E.resolve()}markPotentiallyOrphaned(e,n){return this.xs.add(n.toString()),E.resolve()}removeTarget(e,n){this.Ds.cs(n.targetId).forEach(i=>this.xs.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.xs.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}vs(){this.Cs=new Set}Vs(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return E.forEach(this.xs,r=>{const i=P.fromPath(r);return this.ks(e,i).next(s=>{s||n.removeEntry(i)})}).next(()=>(this.Cs=null,n.apply(e)))}updateLimboDocument(e,n){return this.ks(e,n).next(r=>{r?this.xs.delete(n.toString()):this.xs.add(n.toString())})}Ps(e){return 0}ks(e,n){return E.or([()=>E.resolve(this.Ds.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ss(e,n)])}}/**
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
 */function bE(t,e){return`firestore_clients_${t}_${e}`}function DE(t,e,n){let r=`firestore_mutations_${t}_${n}`;return e.isAuthenticated()&&(r+=`_${e.uid}`),r}function cm(t,e){return`firestore_targets_${t}_${e}`}class Ac{constructor(e,n,r,i){this.user=e,this.batchId=n,this.state=r,this.error=i}static $s(e,n,r){const i=JSON.parse(r);let s,o=typeof i=="object"&&["pending","acknowledged","rejected"].indexOf(i.state)!==-1&&(i.error===void 0||typeof i.error=="object");return o&&i.error&&(o=typeof i.error.message=="string"&&typeof i.error.code=="string",o&&(s=new T(i.error.code,i.error.message))),o?new Ac(e,n,i.state,s):(me("SharedClientState",`Failed to parse mutation state for ID '${n}': ${r}`),null)}Os(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Ba{constructor(e,n,r){this.targetId=e,this.state=n,this.error=r}static $s(e,n){const r=JSON.parse(n);let i,s=typeof r=="object"&&["not-current","current","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return s&&r.error&&(s=typeof r.error.message=="string"&&typeof r.error.code=="string",s&&(i=new T(r.error.code,r.error.message))),s?new Ba(e,r.state,i):(me("SharedClientState",`Failed to parse target state for ID '${e}': ${n}`),null)}Os(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Rc{constructor(e,n){this.clientId=e,this.activeTargetIds=n}static $s(e,n){const r=JSON.parse(n);let i=typeof r=="object"&&r.activeTargetIds instanceof Array,s=wc();for(let o=0;i&&o<r.activeTargetIds.length;++o)i=oI(r.activeTargetIds[o]),s=s.add(r.activeTargetIds[o]);return i?new Rc(e,s):(me("SharedClientState",`Failed to parse client data for instance '${e}': ${n}`),null)}}class hm{constructor(e,n){this.clientId=e,this.onlineState=n}static $s(e){const n=JSON.parse(e);return typeof n=="object"&&["Unknown","Online","Offline"].indexOf(n.onlineState)!==-1&&typeof n.clientId=="string"?new hm(n.clientId,n.onlineState):(me("SharedClientState",`Failed to parse online state: ${e}`),null)}}class dm{constructor(){this.activeTargetIds=wc()}Fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ms(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Os(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class fm{constructor(e,n,r,i,s){this.window=e,this.Oe=n,this.persistenceKey=r,this.Ls=i,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.Bs=this.Us.bind(this),this.qs=new Te(W),this.started=!1,this.Ks=[];const o=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=s,this.js=bE(this.persistenceKey,this.Ls),this.Qs=function(a){return`firestore_sequence_number_${a}`}(this.persistenceKey),this.qs=this.qs.insert(this.Ls,new dm),this.Ws=new RegExp(`^firestore_clients_${o}_([^_]*)$`),this.Gs=new RegExp(`^firestore_mutations_${o}_(\\d+)(?:_(.*))?$`),this.zs=new RegExp(`^firestore_targets_${o}_(\\d+)$`),this.Hs=function(a){return`firestore_online_state_${a}`}(this.persistenceKey),this.Js=function(a){return`firestore_bundle_loaded_${a}`}(this.persistenceKey),this.window.addEventListener("storage",this.Bs)}static bt(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.pn();for(const r of e){if(r===this.Ls)continue;const i=this.getItem(bE(this.persistenceKey,r));if(i){const s=Rc.$s(r,i);s&&(this.qs=this.qs.insert(s.clientId,s))}}this.Ys();const n=this.storage.getItem(this.Hs);if(n){const r=this.Xs(n);r&&this.Zs(r)}for(const r of this.Ks)this.Us(r);this.Ks=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.Qs,JSON.stringify(e))}getAllActiveQueryTargets(){return this.ti(this.qs)}isActiveQueryTarget(e){let n=!1;return this.qs.forEach((r,i)=>{i.activeTargetIds.has(e)&&(n=!0)}),n}addPendingMutation(e){this.ei(e,"pending")}updateMutationState(e,n,r){this.ei(e,n,r),this.ni(e)}addLocalQueryTarget(e){let n="not-current";if(this.isActiveQueryTarget(e)){const r=this.storage.getItem(cm(this.persistenceKey,e));if(r){const i=Ba.$s(e,r);i&&(n=i.state)}}return this.si.Fs(e),this.Ys(),n}removeLocalQueryTarget(e){this.si.Ms(e),this.Ys()}isLocalQueryTarget(e){return this.si.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(cm(this.persistenceKey,e))}updateQueryState(e,n,r){this.ii(e,n,r)}handleUserChange(e,n,r){n.forEach(i=>{this.ni(i)}),this.currentUser=e,r.forEach(i=>{this.addPendingMutation(i)})}setOnlineState(e){this.ri(e)}notifyBundleLoaded(){this.oi()}shutdown(){this.started&&(this.window.removeEventListener("storage",this.Bs),this.removeItem(this.js),this.started=!1)}getItem(e){const n=this.storage.getItem(e);return N("SharedClientState","READ",e,n),n}setItem(e,n){N("SharedClientState","SET",e,n),this.storage.setItem(e,n)}removeItem(e){N("SharedClientState","REMOVE",e),this.storage.removeItem(e)}Us(e){const n=e;if(n.storageArea===this.storage){if(N("SharedClientState","EVENT",n.key,n.newValue),n.key===this.js)return void me("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.Oe.enqueueRetryable(async()=>{if(this.started){if(n.key!==null){if(this.Ws.test(n.key)){if(n.newValue==null){const r=this.ai(n.key);return this.ci(r,null)}{const r=this.ui(n.key,n.newValue);if(r)return this.ci(r.clientId,r)}}else if(this.Gs.test(n.key)){if(n.newValue!==null){const r=this.hi(n.key,n.newValue);if(r)return this.li(r)}}else if(this.zs.test(n.key)){if(n.newValue!==null){const r=this.fi(n.key,n.newValue);if(r)return this.di(r)}}else if(n.key===this.Hs){if(n.newValue!==null){const r=this.Xs(n.newValue);if(r)return this.Zs(r)}}else if(n.key===this.Qs){const r=function(i){let s=St.T;if(i!=null)try{const o=JSON.parse(i);F(typeof o=="number"),s=o}catch(o){me("SharedClientState","Failed to read sequence number from WebStorage",o)}return s}(n.newValue);r!==St.T&&this.sequenceNumberHandler(r)}else if(n.key===this.Js)return this.syncEngine.wi()}}else this.Ks.push(n)})}}get si(){return this.qs.get(this.Ls)}Ys(){this.setItem(this.js,this.si.Os())}ei(e,n,r){const i=new Ac(this.currentUser,e,n,r),s=DE(this.persistenceKey,this.currentUser,e);this.setItem(s,i.Os())}ni(e){const n=DE(this.persistenceKey,this.currentUser,e);this.removeItem(n)}ri(e){const n={clientId:this.Ls,onlineState:e};this.storage.setItem(this.Hs,JSON.stringify(n))}ii(e,n,r){const i=cm(this.persistenceKey,e),s=new Ba(e,n,r);this.setItem(i,s.Os())}oi(){this.setItem(this.Js,"value-not-used")}ai(e){const n=this.Ws.exec(e);return n?n[1]:null}ui(e,n){const r=this.ai(e);return Rc.$s(r,n)}hi(e,n){const r=this.Gs.exec(e),i=Number(r[1]),s=r[2]!==void 0?r[2]:null;return Ac.$s(new qe(s),i,n)}fi(e,n){const r=this.zs.exec(e),i=Number(r[1]);return Ba.$s(i,n)}Xs(e){return hm.$s(e)}async li(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine._i(e.batchId,e.state,e.error);N("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}di(e){return this.syncEngine.mi(e.targetId,e.state,e.error)}ci(e,n){const r=n?this.qs.insert(e,n):this.qs.remove(e),i=this.ti(this.qs),s=this.ti(r),o=[],a=[];return s.forEach(u=>{i.has(u)||o.push(u)}),i.forEach(u=>{s.has(u)||a.push(u)}),this.syncEngine.gi(o,a).then(()=>{this.qs=r})}Zs(e){this.qs.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}ti(e){let n=wc();return e.forEach((r,i)=>{n=n.unionWith(i.activeTargetIds)}),n}}class PE{constructor(){this.yi=new dm,this.pi={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.yi.Fs(e),this.pi[e]||"not-current"}updateQueryState(e,n,r){this.pi[e]=n}removeLocalQueryTarget(e){this.yi.Ms(e)}isLocalQueryTarget(e){return this.yi.activeTargetIds.has(e)}clearQueryState(e){delete this.pi[e]}getAllActiveQueryTargets(){return this.yi.activeTargetIds}isActiveQueryTarget(e){return this.yi.activeTargetIds.has(e)}start(){return this.yi=new dm,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(){}}/**
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
 */class $P{Ti(e){}shutdown(){}}/**
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
 */class OE{constructor(){this.Ei=()=>this.Ii(),this.Ai=()=>this.Ri(),this.bi=[],this.Pi()}Ti(e){this.bi.push(e)}shutdown(){window.removeEventListener("online",this.Ei),window.removeEventListener("offline",this.Ai)}Pi(){window.addEventListener("online",this.Ei),window.addEventListener("offline",this.Ai)}Ii(){N("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.bi)e(0)}Ri(){N("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.bi)e(1)}static bt(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */const FP={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
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
 */class UP{constructor(e){this.vi=e.vi,this.Vi=e.Vi}Si(e){this.Di=e}Ci(e){this.Ni=e}onMessage(e){this.xi=e}close(){this.Vi()}send(e){this.vi(e)}ki(){this.Di()}$i(e){this.Ni(e)}Oi(e){this.xi(e)}}/**
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
 */class VP extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.Fi=n+"://"+e.host,this.Mi="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}Li(e,n,r,i){const s=this.Bi(e,n);N("RestConnection","Sending: ",s,r);const o={};return this.Ui(o,i),this.qi(e,s,o,r).then(a=>(N("RestConnection","Received: ",a),a),a=>{throw Ia("RestConnection",`${e} failed with error: `,a,"url: ",s,"request:",r),a})}Ki(e,n,r,i){return this.Li(e,n,r,i)}Ui(e,n){if(e["X-Goog-Api-Client"]="gl-js/ fire/"+cs,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n)for(const r in n.authHeaders)n.authHeaders.hasOwnProperty(r)&&(e[r]=n.authHeaders[r])}Bi(e,n){const r=FP[e];return`${this.Fi}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}qi(e,n,r,i){return new Promise((s,o)=>{const a=new uD;a.listenOnce(sD.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Op.NO_ERROR:const l=a.getResponseJson();N("Connection","XHR received:",JSON.stringify(l)),s(l);break;case Op.TIMEOUT:N("Connection",'RPC "'+e+'" timed out'),o(new T(v.DEADLINE_EXCEEDED,"Request time out"));break;case Op.HTTP_ERROR:const c=a.getStatus();if(N("Connection",'RPC "'+e+'" failed with status:',c,"response text:",a.getResponseText()),c>0){const h=a.getResponseJson().error;if(h&&h.status&&h.message){const d=function(g){const y=g.toLowerCase().replace(/_/g,"-");return Object.values(v).indexOf(y)>=0?y:v.UNKNOWN}(h.status);o(new T(d,h.message))}else o(new T(v.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new T(v.UNAVAILABLE,"Connection failed."));break;default:O()}}finally{N("Connection",'RPC "'+e+'" completed.')}});const u=JSON.stringify(i);a.send(n,"POST",u,r,15)})}ji(e,n){const r=[this.Fi,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=rD(),s=iD(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new aD({})),this.Ui(o.initMessageHeaders,n),lw()||ul()||sk()||rf()||ok()||nf()||(o.httpHeadersOverwriteParam="$httpHeaders");const a=r.join("");N("Connection","Creating WebChannel: "+a,o);const u=i.createWebChannel(a,o);let l=!1,c=!1;const h=new UP({vi:g=>{c?N("Connection","Not sending because WebChannel is closed:",g):(l||(N("Connection","Opening WebChannel transport."),u.open(),l=!0),N("Connection","WebChannel sending:",g),u.send(g))},Vi:()=>u.close()}),d=(g,y,I)=>{g.listen(y,p=>{try{I(p)}catch(f){setTimeout(()=>{throw f},0)}})};return d(u,oc.EventType.OPEN,()=>{c||N("Connection","WebChannel transport opened.")}),d(u,oc.EventType.CLOSE,()=>{c||(c=!0,N("Connection","WebChannel transport closed"),h.$i())}),d(u,oc.EventType.ERROR,g=>{c||(c=!0,Ia("Connection","WebChannel transport errored:",g),h.$i(new T(v.UNAVAILABLE,"The operation could not be completed")))}),d(u,oc.EventType.MESSAGE,g=>{var y;if(!c){const I=g.data[0];F(!!I);const p=I,f=p.error||((y=p[0])===null||y===void 0?void 0:y.error);if(f){N("Connection","WebChannel received error:",f);const m=f.status;let w=function(M){const C=ve[M];if(C!==void 0)return OI(C)}(m),_=f.message;w===void 0&&(w=v.INTERNAL,_="Unknown error status: "+m+" with message "+f.message),c=!0,h.$i(new T(w,_)),u.close()}else N("Connection","WebChannel received:",I),h.Oi(I)}}),d(s,oD.STAT_EVENT,g=>{g.stat===X_.PROXY?N("Connection","Detected buffering proxy"):g.stat===X_.NOPROXY&&N("Connection","Detected no buffering proxy")}),setTimeout(()=>{h.ki()},0),h}}/**
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
 */function xE(){return typeof window!="undefined"?window:null}function bc(){return typeof document!="undefined"?document:null}/**
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
 */function ja(t){return new KD(t,!0)}class pm{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Oe=e,this.timerId=n,this.Qi=r,this.Wi=i,this.Gi=s,this.zi=0,this.Hi=null,this.Ji=Date.now(),this.reset()}reset(){this.zi=0}Yi(){this.zi=this.Gi}Xi(e){this.cancel();const n=Math.floor(this.zi+this.Zi()),r=Math.max(0,Date.now()-this.Ji),i=Math.max(0,n-r);i>0&&N("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.zi} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Hi=this.Oe.enqueueAfterDelay(this.timerId,i,()=>(this.Ji=Date.now(),e())),this.zi*=this.Wi,this.zi<this.Qi&&(this.zi=this.Qi),this.zi>this.Gi&&(this.zi=this.Gi)}tr(){this.Hi!==null&&(this.Hi.skipDelay(),this.Hi=null)}cancel(){this.Hi!==null&&(this.Hi.cancel(),this.Hi=null)}Zi(){return(Math.random()-.5)*this.zi}}/**
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
 */class LE{constructor(e,n,r,i,s,o){this.Oe=e,this.er=r,this.nr=i,this.credentialsProvider=s,this.listener=o,this.state=0,this.sr=0,this.ir=null,this.stream=null,this.rr=new pm(e,n)}ar(){return this.state===1||this.state===2||this.state===4}cr(){return this.state===2}start(){this.state!==3?this.auth():this.ur()}async stop(){this.ar()&&await this.close(0)}hr(){this.state=0,this.rr.reset()}lr(){this.cr()&&this.ir===null&&(this.ir=this.Oe.enqueueAfterDelay(this.er,6e4,()=>this.dr()))}wr(e){this._r(),this.stream.send(e)}async dr(){if(this.cr())return this.close(0)}_r(){this.ir&&(this.ir.cancel(),this.ir=null)}async close(e,n){this._r(),this.rr.cancel(),this.sr++,e!==3?this.rr.reset():n&&n.code===v.RESOURCE_EXHAUSTED?(me(n.toString()),me("Using maximum backoff delay to prevent overloading the backend."),this.rr.Yi()):n&&n.code===v.UNAUTHENTICATED&&this.credentialsProvider.invalidateToken(),this.stream!==null&&(this.mr(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ci(n)}mr(){}auth(){this.state=1;const e=this.gr(this.sr),n=this.sr;this.credentialsProvider.getToken().then(r=>{this.sr===n&&this.yr(r)},r=>{e(()=>{const i=new T(v.UNKNOWN,"Fetching auth token failed: "+r.message);return this.pr(i)})})}yr(e){const n=this.gr(this.sr);this.stream=this.Tr(e),this.stream.Si(()=>{n(()=>(this.state=2,this.listener.Si()))}),this.stream.Ci(r=>{n(()=>this.pr(r))}),this.stream.onMessage(r=>{n(()=>this.onMessage(r))})}ur(){this.state=4,this.rr.Xi(async()=>{this.state=0,this.start()})}pr(e){return N("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(3,e)}gr(e){return n=>{this.Oe.enqueueAndForget(()=>this.sr===e?n():(N("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class BP extends LE{constructor(e,n,r,i,s){super(e,"listen_stream_connection_backoff","listen_stream_idle",n,r,s),this.N=i}Tr(e){return this.nr.ji("Listen",e)}onMessage(e){this.rr.reset();const n=YD(this.N,e),r=function(i){if(!("targetChange"in i))return z.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?z.min():s.readTime?Pe(s.readTime):z.min()}(e);return this.listener.Er(n,r)}Ir(e){const n={};n.database=$a(this.N),n.addTarget=function(i,s){let o;const a=s.target;return o=hc(a)?{documents:GI(i,a)}:{query:QI(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0?o.resumeToken=BI(i,s.resumeToken):s.snapshotVersion.compareTo(z.min())>0&&(o.readTime=La(i,s.snapshotVersion.toTimestamp())),o}(this.N,e);const r=XD(this.N,e);r&&(n.labels=r),this.wr(n)}Ar(e){const n={};n.database=$a(this.N),n.removeTarget=e,this.wr(n)}}class jP extends LE{constructor(e,n,r,i,s){super(e,"write_stream_connection_backoff","write_stream_idle",n,r,s),this.N=i,this.Rr=!1}get br(){return this.Rr}start(){this.Rr=!1,this.lastStreamToken=void 0,super.start()}mr(){this.Rr&&this.Pr([])}Tr(e){return this.nr.ji("Write",e)}onMessage(e){if(F(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Rr){this.rr.reset();const n=JD(e.writeResults,e.commitTime),r=Pe(e.commitTime);return this.listener.vr(r,n)}return F(!e.writeResults||e.writeResults.length===0),this.Rr=!0,this.listener.Vr()}Sr(){const e={};e.database=$a(this.N),this.wr(e)}Pr(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>Ic(this.N,r))};this.wr(n)}}/**
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
 */class zP extends class{}{constructor(e,n,r){super(),this.credentials=e,this.nr=n,this.N=r,this.Dr=!1}Cr(){if(this.Dr)throw new T(v.FAILED_PRECONDITION,"The client has already been terminated.")}Li(e,n,r){return this.Cr(),this.credentials.getToken().then(i=>this.nr.Li(e,n,r,i)).catch(i=>{throw i.name==="FirebaseError"?(i.code===v.UNAUTHENTICATED&&this.credentials.invalidateToken(),i):new T(v.UNKNOWN,i.toString())})}Ki(e,n,r){return this.Cr(),this.credentials.getToken().then(i=>this.nr.Ki(e,n,r,i)).catch(i=>{throw i.name==="FirebaseError"?(i.code===v.UNAUTHENTICATED&&this.credentials.invalidateToken(),i):new T(v.UNKNOWN,i.toString())})}terminate(){this.Dr=!0}}class qP{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.Nr=0,this.kr=null,this.$r=!0}Or(){this.Nr===0&&(this.Fr("Unknown"),this.kr=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.kr=null,this.Mr("Backend didn't respond within 10 seconds."),this.Fr("Offline"),Promise.resolve())))}Lr(e){this.state==="Online"?this.Fr("Unknown"):(this.Nr++,this.Nr>=1&&(this.Br(),this.Mr(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.Fr("Offline")))}set(e){this.Br(),this.Nr=0,e==="Online"&&(this.$r=!1),this.Fr(e)}Fr(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}Mr(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.$r?(me(n),this.$r=!1):N("OnlineStateTracker",n)}Br(){this.kr!==null&&(this.kr.cancel(),this.kr=null)}}/**
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
 */class WP{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ur=[],this.qr=new Map,this.Kr=new Set,this.jr=[],this.Qr=s,this.Qr.Ti(o=>{r.enqueueAndForget(async()=>{fr(this)&&(N("RemoteStore","Restarting streams for network reachability change."),await async function(a){const u=A(a);u.Kr.add(4),await Ps(u),u.Wr.set("Unknown"),u.Kr.delete(4),await za(u)}(this))})}),this.Wr=new qP(r,i)}}async function za(t){if(fr(t))for(const e of t.jr)await e(!0)}async function Ps(t){for(const e of t.jr)await e(!1)}function Dc(t,e){const n=A(t);n.qr.has(e.targetId)||(n.qr.set(e.targetId,e),ym(n)?gm(n):xs(n).cr()&&mm(n,e))}function qa(t,e){const n=A(t),r=xs(n);n.qr.delete(e),r.cr()&&ME(n,e),n.qr.size===0&&(r.cr()?r.lr():fr(n)&&n.Wr.set("Unknown"))}function mm(t,e){t.Gr.Y(e.targetId),xs(t).Ir(e)}function ME(t,e){t.Gr.Y(e),xs(t).Ar(e)}function gm(t){t.Gr=new qD({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Tt:e=>t.qr.get(e)||null}),xs(t).start(),t.Wr.Or()}function ym(t){return fr(t)&&!xs(t).ar()&&t.qr.size>0}function fr(t){return A(t).Kr.size===0}function $E(t){t.Gr=void 0}async function HP(t){t.qr.forEach((e,n)=>{mm(t,e)})}async function KP(t,e){$E(t),ym(t)?(t.Wr.Lr(e),gm(t)):t.Wr.set("Unknown")}async function GP(t,e,n){if(t.Wr.set("Online"),e instanceof $I&&e.state===2&&e.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r.qr.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r.qr.delete(o),r.Gr.removeTarget(o))}(t,e)}catch(r){N("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Pc(t,r)}else if(e instanceof _c?t.Gr.rt(e):e instanceof MI?t.Gr.ft(e):t.Gr.ct(e),!n.isEqual(z.min()))try{const r=await NE(t.localStore);n.compareTo(r)>=0&&await function(i,s){const o=i.Gr._t(s);return o.targetChanges.forEach((a,u)=>{if(a.resumeToken.approximateByteSize()>0){const l=i.qr.get(u);l&&i.qr.set(u,l.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach(a=>{const u=i.qr.get(a);if(!u)return;i.qr.set(a,u.withResumeToken(De.EMPTY_BYTE_STRING,u.snapshotVersion)),ME(i,a);const l=new lr(u.target,a,1,u.sequenceNumber);mm(i,l)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){N("RemoteStore","Failed to raise snapshot:",r),await Pc(t,r)}}async function Pc(t,e,n){if(!oi(e))throw e;t.Kr.add(1),await Ps(t),t.Wr.set("Offline"),n||(n=()=>NE(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{N("RemoteStore","Retrying IndexedDB access"),await n(),t.Kr.delete(1),await za(t)})}function FE(t,e){return e().catch(n=>Pc(t,n,e))}async function Os(t){const e=A(t),n=pr(e);let r=e.Ur.length>0?e.Ur[e.Ur.length-1].batchId:-1;for(;QP(e);)try{const i=await NP(e.localStore,r);if(i===null){e.Ur.length===0&&n.lr();break}r=i.batchId,YP(e,i)}catch(i){await Pc(e,i)}UE(e)&&VE(e)}function QP(t){return fr(t)&&t.Ur.length<10}function YP(t,e){t.Ur.push(e);const n=pr(t);n.cr()&&n.br&&n.Pr(e.mutations)}function UE(t){return fr(t)&&!pr(t).ar()&&t.Ur.length>0}function VE(t){pr(t).start()}async function JP(t){pr(t).Sr()}async function XP(t){const e=pr(t);for(const n of t.Ur)e.Pr(n.mutations)}async function ZP(t,e,n){const r=t.Ur.shift(),i=Xp.from(r,e,n);await FE(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Os(t)}async function eO(t,e){e&&pr(t).br&&await async function(n,r){if(i=r.code,PI(i)&&i!==v.ABORTED){const s=n.Ur.shift();pr(n).hr(),await FE(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,r)),await Os(n)}var i}(t,e),UE(t)&&VE(t)}async function vm(t,e){const n=A(t);e?(n.Kr.delete(2),await za(n)):e||(n.Kr.add(2),await Ps(n),n.Wr.set("Unknown"))}function xs(t){return t.zr||(t.zr=function(e,n,r){const i=A(e);return i.Cr(),new BP(n,i.nr,i.credentials,i.N,r)}(t.datastore,t.asyncQueue,{Si:HP.bind(null,t),Ci:KP.bind(null,t),Er:GP.bind(null,t)}),t.jr.push(async e=>{e?(t.zr.hr(),ym(t)?gm(t):t.Wr.set("Unknown")):(await t.zr.stop(),$E(t))})),t.zr}function pr(t){return t.Hr||(t.Hr=function(e,n,r){const i=A(e);return i.Cr(),new jP(n,i.nr,i.credentials,i.N,r)}(t.datastore,t.asyncQueue,{Si:JP.bind(null,t),Ci:eO.bind(null,t),Vr:XP.bind(null,t),vr:ZP.bind(null,t)}),t.jr.push(async e=>{e?(t.Hr.hr(),await Os(t)):(await t.Hr.stop(),t.Ur.length>0&&(N("RemoteStore",`Stopping write stream with ${t.Ur.length} pending writes`),t.Ur=[]))})),t.Hr}/**
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
 */class wm{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Re,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new wm(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new T(v.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ls(t,e){if(me("AsyncQueue",`${e}: ${t}`),oi(t))return new T(v.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Ms{constructor(e){this.comparator=e?(n,r)=>e(n,r)||P.comparator(n.key,r.key):(n,r)=>P.comparator(n.key,r.key),this.keyedMap=Kp(),this.sortedSet=new Te(this.comparator)}static emptySet(e){return new Ms(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ms)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
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
 */class BE{constructor(){this.Jr=new Te(P.comparator)}track(e){const n=e.doc.key,r=this.Jr.get(n);r?e.type!==0&&r.type===3?this.Jr=this.Jr.insert(n,e):e.type===3&&r.type!==1?this.Jr=this.Jr.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Jr=this.Jr.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Jr=this.Jr.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Jr=this.Jr.remove(n):e.type===1&&r.type===2?this.Jr=this.Jr.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Jr=this.Jr.insert(n,{type:2,doc:e.doc}):O():this.Jr=this.Jr.insert(n,e)}Yr(){const e=[];return this.Jr.inorderTraversal((n,r)=>{e.push(r)}),e}}class $s{constructor(e,n,r,i,s,o,a,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u}static fromInitialDocuments(e,n,r,i){const s=[];return n.forEach(o=>{s.push({type:0,doc:o})}),new $s(e,n,Ms.emptySet(n),s,r,i,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Aa(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class tO{constructor(){this.Xr=void 0,this.listeners=[]}}class nO{constructor(){this.queries=new Rs(e=>yI(e),Aa),this.onlineState="Unknown",this.Zr=new Set}}async function _m(t,e){const n=A(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new tO),i)try{s.Xr=await n.onListen(r)}catch(o){const a=Ls(o,`Initialization of query '${qp(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.eo(n.onlineState),s.Xr&&e.no(s.Xr)&&Em(n)}async function Im(t,e){const n=A(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function rO(t,e){const n=A(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.no(i)&&(r=!0);o.Xr=i}}r&&Em(n)}function iO(t,e,n){const r=A(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function Em(t){t.Zr.forEach(e=>{e.next()})}class Tm{constructor(e,n,r){this.query=e,this.so=n,this.io=!1,this.ro=null,this.onlineState="Unknown",this.options=r||{}}no(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new $s(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let n=!1;return this.io?this.oo(e)&&(this.so.next(e),n=!0):this.ao(e,this.onlineState)&&(this.co(e),n=!0),this.ro=e,n}onError(e){this.so.error(e)}eo(e){this.onlineState=e;let n=!1;return this.ro&&!this.io&&this.ao(this.ro,e)&&(this.co(this.ro),n=!0),n}ao(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.uo||!r)&&(!e.docs.isEmpty()||n==="Offline")}oo(e){if(e.docChanges.length>0)return!0;const n=this.ro&&this.ro.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}co(e){e=$s.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.io=!0,this.so.next(e)}}/**
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
 */class sO{constructor(e,n){this.payload=e,this.byteLength=n}ho(){return"metadata"in this.payload}}/**
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
 */class jE{constructor(e){this.N=e}zn(e){return an(this.N,e)}Hn(e){return e.metadata.exists?HI(this.N,e.document,!1):oe.newNoDocument(this.zn(e.metadata.name),this.Jn(e.metadata.readTime))}Jn(e){return Pe(e)}}class oO{constructor(e,n,r){this.lo=e,this.localStore=n,this.N=r,this.queries=[],this.documents=[],this.progress=zE(e)}fo(e){this.progress.bytesLoaded+=e.byteLength;let n=this.progress.documentsLoaded;return e.payload.namedQuery?this.queries.push(e.payload.namedQuery):e.payload.documentMetadata?(this.documents.push({metadata:e.payload.documentMetadata}),e.payload.documentMetadata.exists||++n):e.payload.document&&(this.documents[this.documents.length-1].document=e.payload.document,++n),n!==this.progress.documentsLoaded?(this.progress.documentsLoaded=n,Object.assign({},this.progress)):null}wo(e){const n=new Map,r=new jE(this.N);for(const i of e)if(i.metadata.queries){const s=r.zn(i.metadata.name);for(const o of i.metadata.queries){const a=(n.get(o)||J()).add(s);n.set(o,a)}}return n}async complete(){const e=await AP(this.localStore,new jE(this.N),this.documents,this.lo.id),n=this.wo(this.documents);for(const r of this.queries)await RP(this.localStore,r,n.get(r.name));return this.progress.taskState="Success",new EP(Object.assign({},this.progress),e)}}function zE(t){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:t.totalDocuments,totalBytes:t.totalBytes}}/**
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
 */class qE{constructor(e){this.key=e}}class WE{constructor(e){this.key=e}}class HE{constructor(e,n){this.query=e,this._o=n,this.mo=null,this.current=!1,this.yo=J(),this.mutatedKeys=J(),this.po=vI(e),this.To=new Ms(this.po)}get Eo(){return this._o}Io(e,n){const r=n?n.Ao:new BE,i=n?n.To:this.To;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const u=fc(this.query)&&i.size===this.query.limit?i.last():null,l=pc(this.query)&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,h)=>{const d=i.get(c),g=Ra(this.query,h)?h:null,y=!!d&&this.mutatedKeys.has(d.key),I=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let p=!1;d&&g?d.data.isEqual(g.data)?y!==I&&(r.track({type:3,doc:g}),p=!0):this.Ro(d,g)||(r.track({type:2,doc:g}),p=!0,(u&&this.po(g,u)>0||l&&this.po(g,l)<0)&&(a=!0)):!d&&g?(r.track({type:0,doc:g}),p=!0):d&&!g&&(r.track({type:1,doc:d}),p=!0,(u||l)&&(a=!0)),p&&(g?(o=o.add(g),s=I?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),fc(this.query)||pc(this.query))for(;o.size>this.query.limit;){const c=fc(this.query)?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{To:o,Ao:r,Ln:a,mutatedKeys:s}}Ro(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.To;this.To=e.To,this.mutatedKeys=e.mutatedKeys;const s=e.Ao.Yr();s.sort((l,c)=>function(h,d){const g=y=>{switch(y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return O()}};return g(h)-g(d)}(l.type,c.type)||this.po(l.doc,c.doc)),this.bo(r);const o=n?this.Po():[],a=this.yo.size===0&&this.current?1:0,u=a!==this.mo;return this.mo=a,s.length!==0||u?{snapshot:new $s(this.query,e.To,i,s,e.mutatedKeys,a===0,u,!1),vo:o}:{vo:o}}eo(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({To:this.To,Ao:new BE,mutatedKeys:this.mutatedKeys,Ln:!1},!1)):{vo:[]}}Vo(e){return!this._o.has(e)&&!!this.To.has(e)&&!this.To.get(e).hasLocalMutations}bo(e){e&&(e.addedDocuments.forEach(n=>this._o=this._o.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this._o=this._o.delete(n)),this.current=e.current)}Po(){if(!this.current)return[];const e=this.yo;this.yo=J(),this.To.forEach(r=>{this.Vo(r.key)&&(this.yo=this.yo.add(r.key))});const n=[];return e.forEach(r=>{this.yo.has(r)||n.push(new WE(r))}),this.yo.forEach(r=>{e.has(r)||n.push(new qE(r))}),n}So(e){this._o=e.Gn,this.yo=J();const n=this.Io(e.documents);return this.applyChanges(n,!0)}Do(){return $s.fromInitialDocuments(this.query,this.To,this.mutatedKeys,this.mo===0)}}class aO{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class uO{constructor(e){this.key=e,this.Co=!1}}class lO{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.No={},this.xo=new Rs(a=>yI(a),Aa),this.ko=new Map,this.$o=new Set,this.Oo=new Te(P.comparator),this.Fo=new Map,this.Mo=new um,this.Lo={},this.Bo=new Map,this.Uo=ui.ie(),this.onlineState="Unknown",this.qo=void 0}get isPrimaryClient(){return this.qo===!0}}async function cO(t,e){const n=Rm(t);let r,i;const s=n.xo.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.Do();else{const o=await bs(n.localStore,Mt(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await Sm(n,e,r,a==="current"),n.isPrimaryClient&&Dc(n.remoteStore,o)}return i}async function Sm(t,e,n,r){t.Ko=(c,h,d)=>async function(g,y,I,p){let f=y.view.Io(I);f.Ln&&(f=await Cc(g.localStore,y.query,!1).then(({documents:_})=>y.view.Io(_,f)));const m=p&&p.targetChanges.get(y.targetId),w=y.view.applyChanges(f,g.isPrimaryClient,m);return Cm(g,y.targetId,w.vo),w.snapshot}(t,c,h,d);const i=await Cc(t.localStore,e,!0),s=new HE(e,i.Gn),o=s.Io(i.documents),a=xa.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline"),u=s.applyChanges(o,t.isPrimaryClient,a);Cm(t,n,u.vo);const l=new aO(e,n,s);return t.xo.set(e,l),t.ko.has(n)?t.ko.get(n).push(e):t.ko.set(n,[e]),u.snapshot}async function hO(t,e){const n=A(t),r=n.xo.get(e),i=n.ko.get(r.targetId);if(i.length>1)return n.ko.set(r.targetId,i.filter(s=>!Aa(s,e))),void n.xo.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Ds(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),qa(n.remoteStore,r.targetId),Fs(n,r.targetId)}).catch(li)):(Fs(n,r.targetId),await Ds(n.localStore,r.targetId,!0))}async function dO(t,e,n){const r=bm(t);try{const i=await function(s,o){const a=A(s),u=be.now(),l=o.reduce((h,d)=>h.add(d.key),J());let c;return a.persistence.runTransaction("Locally write mutations","readwrite",h=>a.Qn.Pn(h,l).next(d=>{c=d;const g=[];for(const y of o){const I=$D(y,c.get(y.key));I!=null&&g.push(new ar(y.key,I,cI(I.value.mapValue),ye.exists(!0)))}return a.In.addMutationBatch(h,u,g,o)})).then(h=>(h.applyToLocalDocumentSet(c),{batchId:h.batchId,changes:c}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,o,a){let u=s.Lo[s.currentUser.toKey()];u||(u=new Te(W)),u=u.insert(o,a),s.Lo[s.currentUser.toKey()]=u}(r,i.batchId,n),await Rn(r,i.changes),await Os(r.remoteStore)}catch(i){const s=Ls(i,"Failed to persist write");n.reject(s)}}async function KE(t,e){const n=A(t);try{const r=await kP(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Fo.get(s);o&&(F(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Co=!0:i.modifiedDocuments.size>0?F(o.Co):i.removedDocuments.size>0&&(F(o.Co),o.Co=!1))}),await Rn(n,r,e)}catch(r){await li(r)}}function GE(t,e,n){const r=A(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.xo.forEach((s,o)=>{const a=o.view.eo(e);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=A(s);a.onlineState=o;let u=!1;a.queries.forEach((l,c)=>{for(const h of c.listeners)h.eo(o)&&(u=!0)}),u&&Em(a)}(r.eventManager,e),i.length&&r.No.Er(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function fO(t,e,n){const r=A(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Fo.get(e),s=i&&i.key;if(s){let o=new Te(P.comparator);o=o.insert(s,oe.newNoDocument(s,z.min()));const a=J().add(s),u=new Oa(z.min(),new Map,new le(W),o,a);await KE(r,u),r.Oo=r.Oo.remove(s),r.Fo.delete(e),Am(r)}else await Ds(r.localStore,e,!1).then(()=>Fs(r,e,n)).catch(li)}async function pO(t,e){const n=A(t),r=e.batch.batchId;try{const i=await SP(n.localStore,e);Nm(n,r,null),km(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Rn(n,i)}catch(i){await li(i)}}async function mO(t,e,n){const r=A(t);try{const i=await function(s,o){const a=A(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let l;return a.In.lookupMutationBatch(u,o).next(c=>(F(c!==null),l=c.keys(),a.In.removeMutationBatch(u,c))).next(()=>a.In.performConsistencyCheck(u)).next(()=>a.Qn.Pn(u,l))})}(r.localStore,e);Nm(r,e,n),km(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Rn(r,i)}catch(i){await li(i)}}async function gO(t,e){const n=A(t);fr(n.remoteStore)||N("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const r=await function(s){const o=A(s);return o.persistence.runTransaction("Get highest unacknowledged batch id","readonly",a=>o.In.getHighestUnacknowledgedBatchId(a))}(n.localStore);if(r===-1)return void e.resolve();const i=n.Bo.get(r)||[];i.push(e),n.Bo.set(r,i)}catch(r){const i=Ls(r,"Initialization of waitForPendingWrites() operation failed");e.reject(i)}}function km(t,e){(t.Bo.get(e)||[]).forEach(n=>{n.resolve()}),t.Bo.delete(e)}function Nm(t,e,n){const r=A(t);let i=r.Lo[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Lo[r.currentUser.toKey()]=i}}function Fs(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.ko.get(e))t.xo.delete(r),n&&t.No.jo(r,n);t.ko.delete(e),t.isPrimaryClient&&t.Mo.cs(e).forEach(r=>{t.Mo.containsKey(r)||QE(t,r)})}function QE(t,e){t.$o.delete(e.path.canonicalString());const n=t.Oo.get(e);n!==null&&(qa(t.remoteStore,n),t.Oo=t.Oo.remove(e),t.Fo.delete(n),Am(t))}function Cm(t,e,n){for(const r of n)r instanceof qE?(t.Mo.addReference(r.key,e),yO(t,r)):r instanceof WE?(N("SyncEngine","Document no longer in limbo: "+r.key),t.Mo.removeReference(r.key,e),t.Mo.containsKey(r.key)||QE(t,r.key)):O()}function yO(t,e){const n=e.key,r=n.path.canonicalString();t.Oo.get(n)||t.$o.has(r)||(N("SyncEngine","New document in limbo: "+n),t.$o.add(r),Am(t))}function Am(t){for(;t.$o.size>0&&t.Oo.size<t.maxConcurrentLimboResolutions;){const e=t.$o.values().next().value;t.$o.delete(e);const n=new P(Y.fromString(e)),r=t.Uo.next();t.Fo.set(r,new uO(n)),t.Oo=t.Oo.insert(n,r),Dc(t.remoteStore,new lr(Mt(gs(n.path)),r,2,St.T))}}async function Rn(t,e,n){const r=A(t),i=[],s=[],o=[];r.xo.isEmpty()||(r.xo.forEach((a,u)=>{o.push(r.Ko(u,e,n).then(l=>{if(l){r.isPrimaryClient&&r.sharedClientState.updateQueryState(u.targetId,l.fromCache?"not-current":"current"),i.push(l);const c=am.kn(u.targetId,l);s.push(c)}}))}),await Promise.all(o),r.No.Er(i),await async function(a,u){const l=A(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",c=>E.forEach(u,h=>E.forEach(h.Nn,d=>l.persistence.referenceDelegate.addReference(c,h.targetId,d)).next(()=>E.forEach(h.xn,d=>l.persistence.referenceDelegate.removeReference(c,h.targetId,d)))))}catch(c){if(!oi(c))throw c;N("LocalStore","Failed to update sequence numbers: "+c)}for(const c of u){const h=c.targetId;if(!c.fromCache){const d=l.Un.get(h),g=d.snapshotVersion,y=d.withLastLimboFreeSnapshotVersion(g);l.Un=l.Un.insert(h,y)}}}(r.localStore,s))}async function vO(t,e){const n=A(t);if(!n.currentUser.isEqual(e)){N("SyncEngine","User change. New user:",e.toKey());const r=await kE(n.localStore,e);n.currentUser=e,function(i,s){i.Bo.forEach(o=>{o.forEach(a=>{a.reject(new T(v.CANCELLED,s))})}),i.Bo.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Rn(n,r.Wn)}}function wO(t,e){const n=A(t),r=n.Fo.get(e);if(r&&r.Co)return J().add(r.key);{let i=J();const s=n.ko.get(e);if(!s)return i;for(const o of s){const a=n.xo.get(o);i=i.unionWith(a.view.Eo)}return i}}async function _O(t,e){const n=A(t),r=await Cc(n.localStore,e.query,!0),i=e.view.So(r);return n.isPrimaryClient&&Cm(n,e.targetId,i.vo),i}async function IO(t){const e=A(t);return RE(e.localStore).then(n=>Rn(e,n))}async function EO(t,e,n,r){const i=A(t),s=await function(o,a){const u=A(o),l=A(u.In);return u.persistence.runTransaction("Lookup mutation documents","readonly",c=>l.Xt(c,a).next(h=>h?u.Qn.Pn(c,h):E.resolve(null)))}(i.localStore,e);s!==null?(n==="pending"?await Os(i.remoteStore):n==="acknowledged"||n==="rejected"?(Nm(i,e,r||null),km(i,e),function(o,a){A(A(o).In).te(a)}(i.localStore,e)):O(),await Rn(i,s)):N("SyncEngine","Cannot apply mutation batch with id: "+e)}async function TO(t,e){const n=A(t);if(Rm(n),bm(n),e===!0&&n.qo!==!0){const r=n.sharedClientState.getAllActiveQueryTargets(),i=await YE(n,r.toArray());n.qo=!0,await vm(n.remoteStore,!0);for(const s of i)Dc(n.remoteStore,s)}else if(e===!1&&n.qo!==!1){const r=[];let i=Promise.resolve();n.ko.forEach((s,o)=>{n.sharedClientState.isLocalQueryTarget(o)?r.push(o):i=i.then(()=>(Fs(n,o),Ds(n.localStore,o,!0))),qa(n.remoteStore,o)}),await i,await YE(n,r),function(s){const o=A(s);o.Fo.forEach((a,u)=>{qa(o.remoteStore,u)}),o.Mo.us(),o.Fo=new Map,o.Oo=new Te(P.comparator)}(n),n.qo=!1,await vm(n.remoteStore,!1)}}async function YE(t,e,n){const r=A(t),i=[],s=[];for(const o of e){let a;const u=r.ko.get(o);if(u&&u.length!==0){a=await bs(r.localStore,Mt(u[0]));for(const l of u){const c=r.xo.get(l),h=await _O(r,c);h.snapshot&&s.push(h.snapshot)}}else{const l=await AE(r.localStore,o);a=await bs(r.localStore,l),await Sm(r,JE(l),o,!1)}i.push(a)}return r.No.Er(s),i}function JE(t){return mI(t.path,t.collectionGroup,t.orderBy,t.filters,t.limit,"F",t.startAt,t.endAt)}function SO(t){const e=A(t);return A(A(e.localStore).persistence).pn()}async function kO(t,e,n,r){const i=A(t);if(i.qo)N("SyncEngine","Ignoring unexpected query state notification.");else if(i.ko.has(e))switch(n){case"current":case"not-current":{const s=await RE(i.localStore),o=Oa.createSynthesizedRemoteEventForCurrentChange(e,n==="current");await Rn(i,s,o);break}case"rejected":await Ds(i.localStore,e,!0),Fs(i,e,r);break;default:O()}}async function NO(t,e,n){const r=Rm(t);if(r.qo){for(const i of e){if(r.ko.has(i)){N("SyncEngine","Adding an already active target "+i);continue}const s=await AE(r.localStore,i),o=await bs(r.localStore,s);await Sm(r,JE(s),o.targetId,!1),Dc(r.remoteStore,o)}for(const i of n)r.ko.has(i)&&await Ds(r.localStore,i,!1).then(()=>{qa(r.remoteStore,i),Fs(r,i)}).catch(li)}}function Rm(t){const e=A(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=KE.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=wO.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=fO.bind(null,e),e.No.Er=rO.bind(null,e.eventManager),e.No.jo=iO.bind(null,e.eventManager),e}function bm(t){const e=A(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=pO.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=mO.bind(null,e),e}function CO(t,e,n){const r=A(t);(async function(i,s,o){try{const a=await s.getMetadata();if(await function(h,d){const g=A(h),y=Pe(d.createTime);return g.persistence.runTransaction("hasNewerBundle","readonly",I=>g.Je.getBundleMetadata(I,d.id)).then(I=>!!I&&I.createTime.compareTo(y)>=0)}(i.localStore,a))return await s.close(),void o._completeWith(function(h){return{taskState:"Success",documentsLoaded:h.totalDocuments,bytesLoaded:h.totalBytes,totalDocuments:h.totalDocuments,totalBytes:h.totalBytes}}(a));o._updateProgress(zE(a));const u=new oO(a,i.localStore,s.N);let l=await s.Qo();for(;l;){const h=await u.fo(l);h&&o._updateProgress(h),l=await s.Qo()}const c=await u.complete();await Rn(i,c.En,void 0),await function(h,d){const g=A(h);return g.persistence.runTransaction("Save bundle","readwrite",y=>g.Je.saveBundleMetadata(y,d))}(i.localStore,a),o._completeWith(c.progress)}catch(a){Ia("SyncEngine",`Loading bundle failed with ${a}`),o._failWith(a)}})(r,e,n).then(()=>{r.sharedClientState.notifyBundleLoaded()})}class XE{constructor(){this.synchronizeTabs=!1}async initialize(e){this.N=ja(e.databaseInfo.databaseId),this.sharedClientState=this.Wo(e),this.persistence=this.Go(e),await this.persistence.start(),this.gcScheduler=this.zo(e),this.localStore=this.Ho(e)}zo(e){return null}Ho(e){return SE(this.persistence,new TE,e.initialUser,this.N)}Go(e){return new LP(lm.Ns,this.N)}Wo(e){return new PE}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class ZE extends XE{constructor(e,n,r){super(),this.Jo=e,this.cacheSizeBytes=n,this.forceOwnership=r,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await CP(this.localStore),await this.Jo.initialize(this,e),await bm(this.Jo.syncEngine),await Os(this.Jo.remoteStore),await this.persistence.nn(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(this.localStore),Promise.resolve()))}Ho(e){return SE(this.persistence,new TE,e.initialUser,this.N)}zo(e){const n=this.persistence.referenceDelegate.garbageCollector;return new gP(n,e.asyncQueue)}Go(e){const n=om(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?vt.withCacheSize(this.cacheSizeBytes):vt.DEFAULT;return new sm(this.synchronizeTabs,n,e.clientId,r,e.asyncQueue,xE(),bc(),this.N,this.sharedClientState,!!this.forceOwnership)}Wo(e){return new PE}}class AO extends ZE{constructor(e,n){super(e,n,!1),this.Jo=e,this.cacheSizeBytes=n,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const n=this.Jo.syncEngine;this.sharedClientState instanceof fm&&(this.sharedClientState.syncEngine={_i:EO.bind(null,n),mi:kO.bind(null,n),gi:NO.bind(null,n),pn:SO.bind(null,n),wi:IO.bind(null,n)},await this.sharedClientState.start()),await this.persistence.nn(async r=>{await TO(this.Jo.syncEngine,r),this.gcScheduler&&(r&&!this.gcScheduler.started?this.gcScheduler.start(this.localStore):r||this.gcScheduler.stop())})}Wo(e){const n=xE();if(!fm.bt(n))throw new T(v.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const r=om(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new fm(n,e.asyncQueue,r,e.clientId,e.initialUser)}}class Dm{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>GE(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=vO.bind(null,this.syncEngine),await vm(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new nO}createDatastore(e){const n=ja(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new VP(i));var i;return function(s,o,a){return new zP(s,o,a)}(e.credentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,i=e.asyncQueue,s=a=>GE(this.syncEngine,a,0),o=OE.bt()?new OE:new $P,new WP(n,r,i,s,o);var n,r,i,s,o}createSyncEngine(e,n){return function(r,i,s,o,a,u,l){const c=new lO(r,i,s,o,a,u);return l&&(c.qo=!0),c}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=A(e);N("RemoteStore","RemoteStore shutting down."),n.Kr.add(5),await Ps(n),n.Qr.shutdown(),n.Wr.set("Unknown")}(this.remoteStore)}}/**
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
 */function eT(t,e=10240){let n=0;return{async read(){if(n<t.byteLength){const r={value:t.slice(n,n+e),done:!1};return n+=e,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.reject("unimplemented")}}/**
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
 */class Oc{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Yo(this.observer.next,e)}error(e){this.observer.error?this.Yo(this.observer.error,e):console.error("Uncaught Error in snapshot listener:",e)}Xo(){this.muted=!0}Yo(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class RO{constructor(e,n){this.Zo=e,this.N=n,this.metadata=new Re,this.buffer=new Uint8Array,this.ta=new TextDecoder("utf-8"),this.ea().then(r=>{r&&r.ho()?this.metadata.resolve(r.payload.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(r==null?void 0:r.payload)}`))},r=>this.metadata.reject(r))}close(){return this.Zo.cancel()}async getMetadata(){return this.metadata.promise}async Qo(){return await this.getMetadata(),this.ea()}async ea(){const e=await this.na();if(e===null)return null;const n=this.ta.decode(e),r=Number(n);isNaN(r)&&this.sa(`length string (${n}) is not valid number`);const i=await this.ia(r);return new sO(JSON.parse(i),e.length+r)}ra(){return this.buffer.findIndex(e=>e==="{".charCodeAt(0))}async na(){for(;this.ra()<0&&!await this.oa(););if(this.buffer.length===0)return null;const e=this.ra();e<0&&this.sa("Reached the end of bundle when a length string is expected.");const n=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),n}async ia(e){for(;this.buffer.length<e;)await this.oa()&&this.sa("Reached the end of bundle when more is expected.");const n=this.ta.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),n}sa(e){throw this.Zo.cancel(),new Error(`Invalid bundle format: ${e}`)}async oa(){const e=await this.Zo.read();if(!e.done){const n=new Uint8Array(this.buffer.length+e.value.length);n.set(this.buffer),n.set(e.value,this.buffer.length),this.buffer=n}return e.done}}/**
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
 */class bO{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new T(v.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const n=await async function(r,i){const s=A(r),o=$a(s.N)+"/documents",a={documents:i.map(h=>Ma(s.N,h))},u=await s.Ki("BatchGetDocuments",o,a),l=new Map;u.forEach(h=>{const d=QD(s.N,h);l.set(d.key.toString(),d)});const c=[];return i.forEach(h=>{const d=l.get(h.toString());F(!!d),c.push(d)}),c}(this.datastore,e);return n.forEach(r=>this.recordVersion(r)),n}set(e,n){this.write(n.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,n){try{this.write(n.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastWriteError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new Pa(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const e=this.readVersions;this.mutations.forEach(n=>{e.delete(n.key.toString())}),e.forEach((n,r)=>{const i=P.fromPath(r);this.mutations.push(new Hp(i,this.precondition(i)))}),await async function(n,r){const i=A(n),s=$a(i.N)+"/documents",o={writes:r.map(a=>Ic(i.N,a))};await i.Li("Commit",s,o)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let n;if(e.isFoundDocument())n=e.version;else{if(!e.isNoDocument())throw O();n=z.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!n.isEqual(r))throw new T(v.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),n)}precondition(e){const n=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&n?ye.updateTime(n):ye.none()}preconditionForUpdate(e){const n=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&n){if(n.isEqual(z.min()))throw new T(v.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return ye.updateTime(n)}return ye.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
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
 */class DO{constructor(e,n,r,i){this.asyncQueue=e,this.datastore=n,this.updateFunction=r,this.deferred=i,this.aa=5,this.rr=new pm(this.asyncQueue,"transaction_retry")}run(){this.aa-=1,this.ca()}ca(){this.rr.Xi(async()=>{const e=new bO(this.datastore),n=this.ua(e);n&&n.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(i=>{this.ha(i)}))}).catch(r=>{this.ha(r)})})}ua(e){try{const n=this.updateFunction(e);return!ti(n)&&n.catch&&n.then?n:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(n){return this.deferred.reject(n),null}}ha(e){this.aa>0&&this.la(e)?(this.aa-=1,this.asyncQueue.enqueueAndForget(()=>(this.ca(),Promise.resolve()))):this.deferred.reject(e)}la(e){if(e.name==="FirebaseError"){const n=e.code;return n==="aborted"||n==="failed-precondition"||!PI(n)}return!1}}/**
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
 */class PO{constructor(e,n,r){this.credentials=e,this.asyncQueue=n,this.databaseInfo=r,this.user=qe.UNAUTHENTICATED,this.clientId=tI.I(),this.credentialListener=()=>Promise.resolve(),this.credentials.start(n,async i=>{N("FirestoreClient","Received user=",i.uid),await this.credentialListener(i),this.user=i})}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,credentials:this.credentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.credentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new T(v.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Re;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.credentials.shutdown(),e.resolve()}catch(n){const r=Ls(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function tT(t,e){t.asyncQueue.verifyOperationInProgress(),N("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await kE(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function nT(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Pm(t);N("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>async function(s,o){const a=A(s);a.asyncQueue.verifyOperationInProgress(),N("RemoteStore","RemoteStore received new credentials");const u=fr(a);a.Kr.add(3),await Ps(a),u&&a.Wr.set("Unknown"),await a.remoteSyncer.handleCredentialChange(o),a.Kr.delete(3),await za(a)}(e.remoteStore,i)),t.onlineComponents=e}async function Pm(t){return t.offlineComponents||(N("FirestoreClient","Using default OfflineComponentProvider"),await tT(t,new XE)),t.offlineComponents}async function xc(t){return t.onlineComponents||(N("FirestoreClient","Using default OnlineComponentProvider"),await nT(t,new Dm)),t.onlineComponents}function rT(t){return Pm(t).then(e=>e.persistence)}function Om(t){return Pm(t).then(e=>e.localStore)}function iT(t){return xc(t).then(e=>e.remoteStore)}function xm(t){return xc(t).then(e=>e.syncEngine)}async function Us(t){const e=await xc(t),n=e.eventManager;return n.onListen=cO.bind(null,e.syncEngine),n.onUnlisten=hO.bind(null,e.syncEngine),n}function OO(t){return t.asyncQueue.enqueue(async()=>{const e=await rT(t),n=await iT(t);return e.setNetworkEnabled(!0),function(r){const i=A(r);return i.Kr.delete(0),za(i)}(n)})}function xO(t){return t.asyncQueue.enqueue(async()=>{const e=await rT(t),n=await iT(t);return e.setNetworkEnabled(!1),async function(r){const i=A(r);i.Kr.add(0),await Ps(i),i.Wr.set("Offline")}(n)})}function LO(t,e){const n=new Re;return t.asyncQueue.enqueueAndForget(async()=>async function(r,i,s){try{const o=await function(a,u){const l=A(a);return l.persistence.runTransaction("read document","readonly",c=>l.Qn.An(c,u))}(r,i);o.isFoundDocument()?s.resolve(o):o.isNoDocument()?s.resolve(null):s.reject(new T(v.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(o){const a=Ls(o,`Failed to get document '${i} from cache`);s.reject(a)}}(await Om(t),e,n)),n.promise}function sT(t,e,n={}){const r=new Re;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,u){const l=new Oc({next:h=>{s.enqueueAndForget(()=>Im(i,c));const d=h.docs.has(o);!d&&h.fromCache?u.reject(new T(v.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&h.fromCache&&a&&a.source==="server"?u.reject(new T(v.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(h)},error:h=>u.reject(h)}),c=new Tm(gs(o.path),l,{includeMetadataChanges:!0,uo:!0});return _m(i,c)}(await Us(t),t.asyncQueue,e,n,r)),r.promise}function MO(t,e){const n=new Re;return t.asyncQueue.enqueueAndForget(async()=>async function(r,i,s){try{const o=await Cc(r,i,!0),a=new HE(i,o.Gn),u=a.Io(o.documents),l=a.applyChanges(u,!1);s.resolve(l.snapshot)}catch(o){const a=Ls(o,`Failed to execute query '${i} against cache`);s.reject(a)}}(await Om(t),e,n)),n.promise}function oT(t,e,n={}){const r=new Re;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,u){const l=new Oc({next:h=>{s.enqueueAndForget(()=>Im(i,c)),h.fromCache&&a.source==="server"?u.reject(new T(v.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(h)},error:h=>u.reject(h)}),c=new Tm(o,l,{includeMetadataChanges:!0,uo:!0});return _m(i,c)}(await Us(t),t.asyncQueue,e,n,r)),r.promise}function $O(t,e){const n=new Oc(e);return t.asyncQueue.enqueueAndForget(async()=>function(r,i){A(r).Zr.add(i),i.next()}(await Us(t),n)),()=>{n.Xo(),t.asyncQueue.enqueueAndForget(async()=>function(r,i){A(r).Zr.delete(i)}(await Us(t),n))}}function FO(t,e){const n=new Re;return t.asyncQueue.enqueueAndForget(async()=>{const r=await function(i){return xc(i).then(s=>s.datastore)}(t);new DO(t.asyncQueue,r,e,n).run()}),n.promise}function UO(t,e,n,r){const i=function(s,o){let a;return a=typeof s=="string"?new TextEncoder().encode(s):s,function(u,l){return new RO(u,l)}(function(u,l){if(u instanceof Uint8Array)return eT(u,l);if(u instanceof ArrayBuffer)return eT(new Uint8Array(u),l);if(u instanceof ReadableStream)return u.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(a),o)}(n,ja(e));t.asyncQueue.enqueueAndForget(async()=>{CO(await xm(t),i,r)})}function VO(t,e){return t.asyncQueue.enqueue(async()=>function(n,r){const i=A(n);return i.persistence.runTransaction("Get named query","readonly",s=>i.Je.getNamedQuery(s,r))}(await Om(t),e))}class BO{constructor(e,n,r,i,s,o,a,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=u}}class Vs{constructor(e,n){this.projectId=e,this.database=n||"(default)"}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Vs&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const aT=new Map;/**
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
 */function Lm(t,e,n){if(!n)throw new T(v.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function uT(t,e,n,r){if(e===!0&&r===!0)throw new T(v.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function lT(t){if(!P.isDocumentKey(t))throw new T(v.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function cT(t){if(P.isDocumentKey(t))throw new T(v.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Lc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":O()}function Q(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new T(v.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Lc(t);throw new T(v.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function hT(t,e){if(e<=0)throw new T(v.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
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
 */class dT{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new T(v.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new T(v.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,uT("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class Wa{constructor(e,n){this._credentials=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new dT({}),this._settingsFrozen=!1,e instanceof Vs?this._databaseId=e:(this._app=e,this._databaseId=function(r){if(!Object.prototype.hasOwnProperty.apply(r.options,["projectId"]))throw new T(v.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Vs(r.options.projectId)}(e))}get app(){if(!this._app)throw new T(v.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new T(v.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new dT(e),e.credentials!==void 0&&(this._credentials=function(n){if(!n)return new hD;switch(n.type){case"gapi":const r=n.client;return F(!(typeof r!="object"||r===null||!r.auth||!r.auth.getAuthHeaderValueForFirstParty)),new mD(r,n.sessionIndex||"0",n.iamToken||null);case"provider":return n.client;default:throw new T(v.INVALID_ARGUMENT,"makeCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=aT.get(e);n&&(N("ComponentProvider","Removing Datastore"),aT.delete(e),n.terminate())}(this),Promise.resolve()}}function jO(t,e,n,r={}){var i;const s=(t=Q(t,Wa))._getSettings();if(s.host!=="firestore.googleapis.com"&&s.host!==e&&Ia("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},s),{host:`${e}:${n}`,ssl:!1})),r.mockUserToken){let o,a;if(typeof r.mockUserToken=="string")o=r.mockUserToken,a=qe.MOCK_USER;else{o=rk(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new T(v.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new qe(u)}t._credentials=new dD(new eI(o,a))}}/**
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
 */class re{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ln(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new re(this.firestore,e,this._key)}}class nt{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new nt(this.firestore,e,this._query)}}class ln extends nt{constructor(e,n,r){super(e,n,gs(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new re(this.firestore,null,new P(e))}withConverter(e){return new ln(this.firestore,e,this._path)}}function fT(t,e,...n){if(t=L(t),Lm("collection","path",e),t instanceof Wa){const r=Y.fromString(e,...n);return cT(r),new ln(t,null,r)}{if(!(t instanceof re||t instanceof ln))throw new T(v.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Y.fromString(e,...n));return cT(r),new ln(t.firestore,null,r)}}function zO(t,e){if(t=Q(t,Wa),Lm("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new T(v.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new nt(t,null,function(n){return new Nn(Y.emptyPath(),n)}(e))}function Mc(t,e,...n){if(t=L(t),arguments.length===1&&(e=tI.I()),Lm("doc","path",e),t instanceof Wa){const r=Y.fromString(e,...n);return lT(r),new re(t,null,new P(r))}{if(!(t instanceof re||t instanceof ln))throw new T(v.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Y.fromString(e,...n));return lT(r),new re(t.firestore,t instanceof ln?t.converter:null,new P(r))}}function pT(t,e){return t=L(t),e=L(e),(t instanceof re||t instanceof ln)&&(e instanceof re||e instanceof ln)&&t.firestore===e.firestore&&t.path===e.path&&t.converter===e.converter}function mT(t,e){return t=L(t),e=L(e),t instanceof nt&&e instanceof nt&&t.firestore===e.firestore&&Aa(t._query,e._query)&&t.converter===e.converter}/**
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
 */class qO{constructor(){this.fa=Promise.resolve(),this.da=[],this.wa=!1,this._a=[],this.ma=null,this.ga=!1,this.ya=!1,this.pa=[],this.rr=new pm(this,"async_queue_retry"),this.Ta=()=>{const n=bc();n&&N("AsyncQueue","Visibility state changed to "+n.visibilityState),this.rr.tr()};const e=bc();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Ta)}get isShuttingDown(){return this.wa}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Ea(),this.Ia(e)}enterRestrictedMode(e){if(!this.wa){this.wa=!0,this.ya=e||!1;const n=bc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Ta)}}enqueue(e){if(this.Ea(),this.wa)return new Promise(()=>{});const n=new Re;return this.Ia(()=>this.wa&&this.ya?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.da.push(e),this.Aa()))}async Aa(){if(this.da.length!==0){try{await this.da[0](),this.da.shift(),this.rr.reset()}catch(e){if(!oi(e))throw e;N("AsyncQueue","Operation failed with retryable error: "+e)}this.da.length>0&&this.rr.Xi(()=>this.Aa())}}Ia(e){const n=this.fa.then(()=>(this.ga=!0,e().catch(r=>{this.ma=r,this.ga=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw me("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.ga=!1,r))));return this.fa=n,n}enqueueAfterDelay(e,n,r){this.Ea(),this.pa.indexOf(e)>-1&&(n=0);const i=wm.createAndSchedule(this,e,n,r,s=>this.Ra(s));return this._a.push(i),i}Ea(){this.ma&&O()}verifyOperationInProgress(){}async ba(){let e;do e=this.fa,await e;while(e!==this.fa)}Pa(e){for(const n of this._a)if(n.timerId===e)return!0;return!1}va(e){return this.ba().then(()=>{this._a.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this._a)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.ba()})}Va(e){this.pa.push(e)}Ra(e){const n=this._a.indexOf(e);this._a.splice(n,1)}}function Mm(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const r=e;for(const i of n)if(i in r&&typeof r[i]=="function")return!0;return!1}(t,["next","error","complete"])}class WO{constructor(){this._progressObserver={},this._taskCompletionResolver=new Re,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,n,r){this._progressObserver={next:e,error:n,complete:r}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,n){return this._taskCompletionResolver.promise.then(e,n)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
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
 */const HO=-1;class fe extends Wa{constructor(e,n){super(e,n),this.type="firestore",this._queue=new qO,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||gT(this),this._firestoreClient.terminate()}}function xe(t){return t._firestoreClient||gT(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function gT(t){var e;const n=t._freezeSettings(),r=function(i,s,o,a){return new BO(i,s,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new PO(t._credentials,t._queue,r)}function KO(t,e){vT(t=Q(t,fe));const n=xe(t),r=t._freezeSettings(),i=new Dm;return yT(n,i,new ZE(i,r.cacheSizeBytes,e==null?void 0:e.forceOwnership))}function GO(t){vT(t=Q(t,fe));const e=xe(t),n=t._freezeSettings(),r=new Dm;return yT(e,r,new AO(r,n.cacheSizeBytes))}function yT(t,e,n){const r=new Re;return t.asyncQueue.enqueue(async()=>{try{await tT(t,n),await nT(t,e),r.resolve()}catch(i){if(!function(s){return s.name==="FirebaseError"?s.code===v.FAILED_PRECONDITION||s.code===v.UNIMPLEMENTED:typeof DOMException!="undefined"&&s instanceof DOMException?s.code===22||s.code===20||s.code===11:!0}(i))throw i;console.warn("Error enabling offline persistence. Falling back to persistence disabled: "+i),r.reject(i)}}).then(()=>r.promise)}function QO(t){if(t._initialized&&!t._terminated)throw new T(v.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new Re;return t._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(n){if(!Wt.bt())return Promise.resolve();const r=n+"main";await Wt.delete(r)}(om(t._databaseId,t._persistenceKey)),e.resolve()}catch(n){e.reject(n)}}),e.promise}function YO(t){return function(e){const n=new Re;return e.asyncQueue.enqueueAndForget(async()=>gO(await xm(e),n)),n.promise}(xe(t=Q(t,fe)))}function JO(t){return OO(xe(t=Q(t,fe)))}function XO(t){return xO(xe(t=Q(t,fe)))}function ZO(t,e){const n=xe(t=Q(t,fe)),r=new WO;return UO(n,t._databaseId,e,r),r}function ex(t,e){return VO(xe(t=Q(t,fe)),e).then(n=>n?new nt(t,null,n.query):null)}function vT(t){if(t._initialized||t._terminated)throw new T(v.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}/**
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
 */class mr{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new T(v.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new We(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class cn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new cn(De.fromBase64String(e))}catch(n){throw new T(v.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new cn(De.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class ci{constructor(e){this._methodName=e}}/**
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
 */class $c{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new T(v.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new T(v.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return W(this._lat,e._lat)||W(this._long,e._long)}}/**
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
 */const tx=/^__.*__$/;class nx{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new ar(e,this.data,this.fieldMask,n,this.fieldTransforms):new Da(e,this.data,n,this.fieldTransforms)}}class wT{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new ar(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function _T(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw O()}}class Fc{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.N=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Sa(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Da(){return this.settings.Da}Ca(e){return new Fc(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.N,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Na(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Ca({path:r,xa:!1});return i.ka(e),i}$a(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Ca({path:r,xa:!1});return i.Sa(),i}Oa(e){return this.Ca({path:void 0,xa:!0})}Fa(e){return Vc(e,this.settings.methodName,this.settings.Ma||!1,this.path,this.settings.La)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Sa(){if(this.path)for(let e=0;e<this.path.length;e++)this.ka(this.path.get(e))}ka(e){if(e.length===0)throw this.Fa("Document fields must not be empty");if(_T(this.Da)&&tx.test(e))throw this.Fa('Document fields cannot begin and end with "__"')}}class rx{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.N=r||ja(e)}Ba(e,n,r,i=!1){return new Fc({Da:e,methodName:n,La:r,path:We.emptyPath(),xa:!1,Ma:i},this.databaseId,this.N,this.ignoreUndefinedProperties)}}function hi(t){const e=t._freezeSettings(),n=ja(t._databaseId);return new rx(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Uc(t,e,n,r,i,s={}){const o=t.Ba(s.merge||s.mergeFields?2:0,e,n,i);Vm("Data must be an object, but it was:",o,r);const a=TT(r,o);let u,l;if(s.merge)u=new ds(o.fieldMask),l=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const h of s.mergeFields){const d=Bm(e,h,n);if(!o.contains(d))throw new T(v.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);kT(c,d)||c.push(d)}u=new ds(c),l=o.fieldTransforms.filter(h=>u.covers(h.field))}else u=null,l=o.fieldTransforms;return new nx(new et(a),u,l)}class Ha extends ci{_toFieldTransform(e){if(e.Da!==2)throw e.Da===1?e.Fa(`${this._methodName}() can only appear at the top level of your update data`):e.Fa(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Ha}}function IT(t,e,n){return new Fc({Da:3,La:e.settings.La,methodName:t._methodName,xa:n},e.databaseId,e.N,e.ignoreUndefinedProperties)}class $m extends ci{_toFieldTransform(e){return new ba(e.path,new vs)}isEqual(e){return e instanceof $m}}class ix extends ci{constructor(e,n){super(e),this.Ua=n}_toFieldTransform(e){const n=IT(this,e,!0),r=this.Ua.map(s=>di(s,n)),i=new ri(r);return new ba(e.path,i)}isEqual(e){return this===e}}class sx extends ci{constructor(e,n){super(e),this.Ua=n}_toFieldTransform(e){const n=IT(this,e,!0),r=this.Ua.map(s=>di(s,n)),i=new ii(r);return new ba(e.path,i)}isEqual(e){return this===e}}class ox extends ci{constructor(e,n){super(e),this.qa=n}_toFieldTransform(e){const n=new ws(e.N,II(e.N,this.qa));return new ba(e.path,n)}isEqual(e){return this===e}}function Fm(t,e,n,r){const i=t.Ba(1,e,n);Vm("Data must be an object, but it was:",i,r);const s=[],o=et.empty();ei(r,(u,l)=>{const c=jm(e,u,n);l=L(l);const h=i.$a(c);if(l instanceof Ha)s.push(c);else{const d=di(l,h);d!=null&&(s.push(c),o.set(c,d))}});const a=new ds(s);return new wT(o,a,i.fieldTransforms)}function Um(t,e,n,r,i,s){const o=t.Ba(1,e,n),a=[Bm(e,r,n)],u=[i];if(s.length%2!=0)throw new T(v.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push(Bm(e,s[d])),u.push(s[d+1]);const l=[],c=et.empty();for(let d=a.length-1;d>=0;--d)if(!kT(l,a[d])){const g=a[d];let y=u[d];y=L(y);const I=o.$a(g);if(y instanceof Ha)l.push(g);else{const p=di(y,I);p!=null&&(l.push(g),c.set(g,p))}}const h=new ds(l);return new wT(c,h,o.fieldTransforms)}function ET(t,e,n,r=!1){return di(n,t.Ba(r?4:3,e))}function di(t,e){if(ST(t=L(t)))return Vm("Unsupported field value:",e,t),TT(t,e);if(t instanceof ci)return function(n,r){if(!_T(r.Da))throw r.Fa(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.Fa(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xa&&e.Da!==4)throw e.Fa("Nested arrays are not supported");return function(n,r){const i=[];let s=0;for(const o of n){let a=di(o,r.Oa(s));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),s++}return{arrayValue:{values:i}}}(t,e)}return function(n,r){if((n=L(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return II(r.N,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=be.fromDate(n);return{timestampValue:La(r.N,i)}}if(n instanceof be){const i=new be(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:La(r.N,i)}}if(n instanceof $c)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof cn)return{bytesValue:BI(r.N,n._byteString)};if(n instanceof re){const i=r.databaseId,s=n.firestore._databaseId;if(!s.isEqual(i))throw r.Fa(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Gp(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r.Fa(`Unsupported field value: ${Lc(n)}`)}(t,e)}function TT(t,e){const n={};return iI(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ei(t,(r,i)=>{const s=di(i,e.Na(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function ST(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof be||t instanceof $c||t instanceof cn||t instanceof re||t instanceof ci)}function Vm(t,e,n){if(!ST(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=Lc(n);throw r==="an object"?e.Fa(t+" a custom object"):e.Fa(t+" "+r)}}function Bm(t,e,n){if((e=L(e))instanceof mr)return e._internalPath;if(typeof e=="string")return jm(t,e);throw Vc("Field path arguments must be of type string or FieldPath.",t,!1,void 0,n)}const ax=new RegExp("[~\\*/\\[\\]]");function jm(t,e,n){if(e.search(ax)>=0)throw Vc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new mr(...e.split("."))._internalPath}catch{throw Vc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Vc(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new T(v.INVALID_ARGUMENT,a+t+u)}function kT(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class Ka{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new re(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new ux(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Bc("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class ux extends Ka{data(){return super.data()}}function Bc(t,e){return typeof e=="string"?jm(t,e):e instanceof mr?e._internalPath:e._delegate._internalPath}/**
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
 */class fi{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class bn extends Ka{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ga(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Bc("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Ga extends bn{data(e={}){return super.data(e)}}class gr{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new fi(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Ga(this._firestore,this._userDataWriter,r.key,r,new fi(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new T(v.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let s=0;return r._snapshot.docChanges.map(o=>({type:"added",doc:new Ga(r._firestore,r._userDataWriter,o.doc.key,o.doc,new fi(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter),oldIndex:-1,newIndex:s++}))}{let s=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new Ga(r._firestore,r._userDataWriter,o.doc.key,o.doc,new fi(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let u=-1,l=-1;return o.type!==0&&(u=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),l=s.indexOf(o.doc.key)),{type:lx(o.type),doc:a,oldIndex:u,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function lx(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return O()}}function NT(t,e){return t instanceof bn&&e instanceof bn?t._firestore===e._firestore&&t._key.isEqual(e._key)&&(t._document===null?e._document===null:t._document.isEqual(e._document))&&t._converter===e._converter:t instanceof gr&&e instanceof gr&&t._firestore===e._firestore&&mT(t.query,e.query)&&t.metadata.isEqual(e.metadata)&&t._snapshot.isEqual(e._snapshot)}/**
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
 */function CT(t){if(pc(t)&&t.explicitOrderBy.length===0)throw new T(v.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Qa{}function yr(t,...e){for(const n of e)t=n._apply(t);return t}class cx extends Qa{constructor(e,n,r){super(),this.Ka=e,this.ja=n,this.Qa=r,this.type="where"}_apply(e){const n=hi(e.firestore),r=function(i,s,o,a,u,l,c){let h;if(u.isKeyField()){if(l==="array-contains"||l==="array-contains-any")throw new T(v.INVALID_ARGUMENT,`Invalid Query. You can't perform '${l}' queries on FieldPath.documentId().`);if(l==="in"||l==="not-in"){OT(c,l);const g=[];for(const y of c)g.push(PT(a,i,y));h={arrayValue:{values:g}}}else h=PT(a,i,c)}else l!=="in"&&l!=="not-in"&&l!=="array-contains-any"||OT(c,l),h=ET(o,s,c,l==="in"||l==="not-in");const d=ut.create(u,l,h);return function(g,y){if(y.v()){const p=jp(g);if(p!==null&&!p.isEqual(y.field))throw new T(v.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${p.toString()}' and '${y.field.toString()}'`);const f=Bp(g);f!==null&&xT(g,y.field,f)}const I=function(p,f){for(const m of p.filters)if(f.indexOf(m.op)>=0)return m.op;return null}(g,function(p){switch(p){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(y.op));if(I!==null)throw I===y.op?new T(v.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${y.op.toString()}' filter.`):new T(v.INVALID_ARGUMENT,`Invalid query. You cannot use '${y.op.toString()}' filters with '${I.toString()}' filters.`)}(i,d),d}(e._query,"where",n,e.firestore._databaseId,this.Ka,this.ja,this.Qa);return new nt(e.firestore,e.converter,function(i,s){const o=i.filters.concat([s]);return new Nn(i.path,i.collectionGroup,i.explicitOrderBy.slice(),o,i.limit,i.limitType,i.startAt,i.endAt)}(e._query,r))}}function hx(t,e,n){const r=e,i=Bc("where",t);return new cx(i,r,n)}class dx extends Qa{constructor(e,n){super(),this.Ka=e,this.Wa=n,this.type="orderBy"}_apply(e){const n=function(r,i,s){if(r.startAt!==null)throw new T(v.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new T(v.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new ms(i,s);return function(a,u){if(Bp(a)===null){const l=jp(a);l!==null&&xT(a,l,u.field)}}(r,o),o}(e._query,this.Ka,this.Wa);return new nt(e.firestore,e.converter,function(r,i){const s=r.explicitOrderBy.concat([i]);return new Nn(r.path,r.collectionGroup,s,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}(e._query,n))}}function fx(t,e="asc"){const n=e,r=Bc("orderBy",t);return new dx(r,n)}class AT extends Qa{constructor(e,n,r){super(),this.type=e,this.Ga=n,this.za=r}_apply(e){return new nt(e.firestore,e.converter,gI(e._query,this.Ga,this.za))}}function px(t){return hT("limit",t),new AT("limit",t,"F")}function mx(t){return hT("limitToLast",t),new AT("limitToLast",t,"L")}class RT extends Qa{constructor(e,n,r){super(),this.type=e,this.Ha=n,this.Ja=r}_apply(e){const n=DT(e,this.type,this.Ha,this.Ja);return new nt(e.firestore,e.converter,function(r,i){return new Nn(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),r.limit,r.limitType,i,r.endAt)}(e._query,n))}}function gx(...t){return new RT("startAt",t,!0)}function yx(...t){return new RT("startAfter",t,!1)}class bT extends Qa{constructor(e,n,r){super(),this.type=e,this.Ha=n,this.Ja=r}_apply(e){const n=DT(e,this.type,this.Ha,this.Ja);return new nt(e.firestore,e.converter,function(r,i){return new Nn(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),r.limit,r.limitType,r.startAt,i)}(e._query,n))}}function vx(...t){return new bT("endBefore",t,!0)}function wx(...t){return new bT("endAt",t,!1)}function DT(t,e,n,r){if(n[0]=L(n[0]),n[0]instanceof Ka)return function(i,s,o,a,u){if(!a)throw new T(v.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${o}().`);const l=[];for(const c of ys(i))if(c.field.isKeyField())l.push(uc(s,a.key));else{const h=a.data.field(c.field);if(Mp(h))throw new T(v.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+c.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(h===null){const d=c.field.canonicalString();throw new T(v.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${d}' (used as the orderBy) does not exist.`)}l.push(h)}return new Ca(l,u)}(t._query,t.firestore._databaseId,e,n[0]._document,r);{const i=hi(t.firestore);return function(s,o,a,u,l,c){const h=s.explicitOrderBy;if(l.length>h.length)throw new T(v.INVALID_ARGUMENT,`Too many arguments provided to ${u}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const d=[];for(let g=0;g<l.length;g++){const y=l[g];if(h[g].field.isKeyField()){if(typeof y!="string")throw new T(v.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${u}(), but got a ${typeof y}`);if(!zp(s)&&y.indexOf("/")!==-1)throw new T(v.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by FieldPath.documentId(), the value passed to ${u}() must be a plain document ID, but '${y}' contains a slash.`);const I=s.path.child(Y.fromString(y));if(!P.isDocumentKey(I))throw new T(v.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by FieldPath.documentId(), the value passed to ${u}() must result in a valid document path, but '${I}' is not because it contains an odd number of segments.`);const p=new P(I);d.push(uc(o,p))}else{const I=ET(a,u,y);d.push(I)}}return new Ca(d,c)}(t._query,t.firestore._databaseId,i,e,n,r)}}function PT(t,e,n){if(typeof(n=L(n))=="string"){if(n==="")throw new T(v.INVALID_ARGUMENT,"Invalid query. When querying with FieldPath.documentId(), you must provide a valid document ID, but it was an empty string.");if(!zp(e)&&n.indexOf("/")!==-1)throw new T(v.INVALID_ARGUMENT,`Invalid query. When querying a collection by FieldPath.documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Y.fromString(n));if(!P.isDocumentKey(r))throw new T(v.INVALID_ARGUMENT,`Invalid query. When querying a collection group by FieldPath.documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return uc(t,new P(r))}if(n instanceof re)return uc(t,n._key);throw new T(v.INVALID_ARGUMENT,`Invalid query. When querying with FieldPath.documentId(), you must provide a valid string or a DocumentReference, but it was: ${Lc(n)}.`)}function OT(t,e){if(!Array.isArray(t)||t.length===0)throw new T(v.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(t.length>10)throw new T(v.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function xT(t,e,n){if(!n.isEqual(e))throw new T(v.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}/**
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
 */class zm{convertValue(e,n="none"){switch(ni(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ge(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(fs(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw O()}}convertObject(e,n){const r={};return ei(e.fields,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new $c(ge(e.latitude),ge(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=sI(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Ta(e));default:return null}}convertTimestamp(e){const n=or(e);return new be(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Y.fromString(e);F(eE(r));const i=new Vs(r.get(1),r.get(3)),s=new P(r.popFirst(5));return i.isEqual(n)||me(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function jc(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class _x extends zm{constructor(e){super(),this.firestore=e}convertBytes(e){return new cn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new re(this.firestore,null,n)}}/**
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
 */class Ix{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=hi(e)}set(e,n,r){this._verifyNotCommitted();const i=vr(e,this._firestore),s=jc(i.converter,n,r),o=Uc(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(o.toMutation(i._key,ye.none())),this}update(e,n,r,...i){this._verifyNotCommitted();const s=vr(e,this._firestore);let o;return o=typeof(n=L(n))=="string"||n instanceof mr?Um(this._dataReader,"WriteBatch.update",s._key,n,r,i):Fm(this._dataReader,"WriteBatch.update",s._key,n),this._mutations.push(o.toMutation(s._key,ye.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=vr(e,this._firestore);return this._mutations=this._mutations.concat(new Pa(n._key,ye.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new T(v.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function vr(t,e){if((t=L(t)).firestore!==e)throw new T(v.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
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
 */function Ex(t){t=Q(t,re);const e=Q(t.firestore,fe);return sT(xe(e),t._key).then(n=>qm(e,t,n))}class pi extends zm{constructor(e){super(),this.firestore=e}convertBytes(e){return new cn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new re(this.firestore,null,n)}}function Tx(t){t=Q(t,re);const e=Q(t.firestore,fe),n=xe(e),r=new pi(e);return LO(n,t._key).then(i=>new bn(e,r,t._key,i,new fi(i!==null&&i.hasLocalMutations,!0),t.converter))}function Sx(t){t=Q(t,re);const e=Q(t.firestore,fe);return sT(xe(e),t._key,{source:"server"}).then(n=>qm(e,t,n))}function kx(t){t=Q(t,nt);const e=Q(t.firestore,fe),n=xe(e),r=new pi(e);return CT(t._query),oT(n,t._query).then(i=>new gr(e,r,t,i))}function Nx(t){t=Q(t,nt);const e=Q(t.firestore,fe),n=xe(e),r=new pi(e);return MO(n,t._query).then(i=>new gr(e,r,t,i))}function Cx(t){t=Q(t,nt);const e=Q(t.firestore,fe),n=xe(e),r=new pi(e);return oT(n,t._query,{source:"server"}).then(i=>new gr(e,r,t,i))}function LT(t,e,n){t=Q(t,re);const r=Q(t.firestore,fe),i=jc(t.converter,e,n);return Ya(r,[Uc(hi(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,ye.none())])}function MT(t,e,n,...r){t=Q(t,re);const i=Q(t.firestore,fe),s=hi(i);let o;return o=typeof(e=L(e))=="string"||e instanceof mr?Um(s,"updateDoc",t._key,e,n,r):Fm(s,"updateDoc",t._key,e),Ya(i,[o.toMutation(t._key,ye.exists(!0))])}function Ax(t){return Ya(Q(t.firestore,fe),[new Pa(t._key,ye.none())])}function Rx(t,e){const n=Q(t.firestore,fe),r=Mc(t),i=jc(t.converter,e);return Ya(n,[Uc(hi(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,ye.exists(!1))]).then(()=>r)}function $T(t,...e){var n,r,i;t=L(t);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||Mm(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(Mm(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let u,l,c;if(t instanceof re)l=Q(t.firestore,fe),c=gs(t._key.path),u={next:h=>{e[o]&&e[o](qm(l,t,h))},error:e[o+1],complete:e[o+2]};else{const h=Q(t,nt);l=Q(h.firestore,fe),c=h._query;const d=new pi(l);u={next:g=>{e[o]&&e[o](new gr(l,d,h,g))},error:e[o+1],complete:e[o+2]},CT(t._query)}return function(h,d,g,y){const I=new Oc(y),p=new Tm(d,I,g);return h.asyncQueue.enqueueAndForget(async()=>_m(await Us(h),p)),()=>{I.Xo(),h.asyncQueue.enqueueAndForget(async()=>Im(await Us(h),p))}}(xe(l),c,a,u)}function bx(t,e){return $O(xe(t=Q(t,fe)),Mm(e)?e:{next:e})}function Ya(t,e){return function(n,r){const i=new Re;return n.asyncQueue.enqueueAndForget(async()=>dO(await xm(n),r,i)),i.promise}(xe(t),e)}function qm(t,e,n){const r=n.docs.get(e._key),i=new pi(t);return new bn(t,i,e._key,r,new fi(n.hasPendingWrites,n.fromCache),e.converter)}/**
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
 */class Dx extends class{constructor(e,n){this._firestore=e,this._transaction=n,this._dataReader=hi(e)}get(e){const n=vr(e,this._firestore),r=new _x(this._firestore);return this._transaction.lookup([n._key]).then(i=>{if(!i||i.length!==1)return O();const s=i[0];if(s.isFoundDocument())return new Ka(this._firestore,r,s.key,s,n.converter);if(s.isNoDocument())return new Ka(this._firestore,r,n._key,null,n.converter);throw O()})}set(e,n,r){const i=vr(e,this._firestore),s=jc(i.converter,n,r),o=Uc(this._dataReader,"Transaction.set",i._key,s,i.converter!==null,r);return this._transaction.set(i._key,o),this}update(e,n,r,...i){const s=vr(e,this._firestore);let o;return o=typeof(n=L(n))=="string"||n instanceof mr?Um(this._dataReader,"Transaction.update",s._key,n,r,i):Fm(this._dataReader,"Transaction.update",s._key,n),this._transaction.update(s._key,o),this}delete(e){const n=vr(e,this._firestore);return this._transaction.delete(n._key),this}}{constructor(e,n){super(e,n),this._firestore=e}get(e){const n=vr(e,this._firestore),r=new pi(this._firestore);return super.get(e).then(i=>new bn(this._firestore,r,n._key,i._document,new fi(!1,!1),n.converter))}}function Px(t,e){return FO(xe(t),n=>e(new Dx(t,n)))}/**
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
 */function Ox(){return new Ha("deleteField")}function xx(){return new $m("serverTimestamp")}function Lx(...t){return new ix("arrayUnion",t)}function Mx(...t){return new sx("arrayRemove",t)}function $x(t){return new ox("increment",t)}var Fx;(function(t){cs=t})(Br),Vr(new vn("firestore",(t,{options:e})=>{const n=t.getProvider("app").getImmediate(),r=new fe(n,new fD(t.getProvider("auth-internal")));return e=Object.assign({useFetchStreams:!0},e),r._setSettings(e),r},"PUBLIC")),Xt(Z_,"3.1.1",Fx),Xt(Z_,"3.1.1","esm2017");const Ux="@firebase/firestore-compat",Vx="0.1.4";/**
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
 */function Wm(t,e){if(e===void 0)return{merge:!1};if(e.mergeFields!==void 0&&e.merge!==void 0)throw new T("invalid-argument",`Invalid options passed to function ${t}(): You cannot specify both "merge" and "mergeFields".`);return e}/**
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
 */function FT(){if(typeof Uint8Array=="undefined")throw new T("unimplemented","Uint8Arrays are not available in this environment.")}function UT(){if(!vD())throw new T("unimplemented","Blobs are unavailable in Firestore in this environment.")}class Ja{constructor(e){this._delegate=e}static fromBase64String(e){return UT(),new Ja(cn.fromBase64String(e))}static fromUint8Array(e){return FT(),new Ja(cn.fromUint8Array(e))}toBase64(){return UT(),this._delegate.toBase64()}toUint8Array(){return FT(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}/**
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
 */function Hm(t){return Bx(t,["next","error","complete"])}function Bx(t,e){if(typeof t!="object"||t===null)return!1;const n=t;for(const r of e)if(r in n&&typeof n[r]=="function")return!0;return!1}/**
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
 */class jx{enableIndexedDbPersistence(e,n){return KO(e._delegate,{forceOwnership:n})}enableMultiTabIndexedDbPersistence(e){return GO(e._delegate)}clearIndexedDbPersistence(e){return QO(e._delegate)}}class VT{constructor(e,n,r){this._delegate=n,this._persistenceProvider=r,this.INTERNAL={delete:()=>this.terminate()},e instanceof Vs||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const n=this._delegate._getSettings();!e.merge&&n.host!==e.host&&Ia("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},n),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,n,r={}){jO(this._delegate,e,n,r)}enableNetwork(){return JO(this._delegate)}disableNetwork(){return XO(this._delegate)}enablePersistence(e){let n=!1,r=!1;return e&&(n=!!e.synchronizeTabs,r=!!e.experimentalForceOwningTab,uT("synchronizeTabs",n,"experimentalForceOwningTab",r)),n?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,r)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return YO(this._delegate)}onSnapshotsInSync(e){return bx(this._delegate,e)}get app(){if(!this._appCompat)throw new T("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new Bs(this,fT(this._delegate,e))}catch(n){throw lt(n,"collection()","Firestore.collection()")}}doc(e){try{return new Ft(this,Mc(this._delegate,e))}catch(n){throw lt(n,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new ct(this,zO(this._delegate,e))}catch(n){throw lt(n,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return Px(this._delegate,n=>e(new BT(this,n)))}batch(){return xe(this._delegate),new jT(new Ix(this._delegate,e=>Ya(this._delegate,e)))}loadBundle(e){return ZO(this._delegate,e)}namedQuery(e){return ex(this._delegate,e).then(n=>n?new ct(this,n):null)}}class zc extends zm{constructor(e){super();this.firestore=e}convertBytes(e){return new Ja(new cn(e))}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return Ft.forKey(n,this.firestore,null)}}function zx(t){lD(t)}class BT{constructor(e,n){this._firestore=e,this._delegate=n,this._userDataWriter=new zc(e)}get(e){const n=gi(e);return this._delegate.get(n).then(r=>new Xa(this._firestore,new bn(this._firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,n.converter)))}set(e,n,r){const i=gi(e);return r?(Wm("Transaction.set",r),this._delegate.set(i,n,r)):this._delegate.set(i,n),this}update(e,n,r,...i){const s=gi(e);return arguments.length===2?this._delegate.update(s,n):this._delegate.update(s,n,r,...i),this}delete(e){const n=gi(e);return this._delegate.delete(n),this}}class jT{constructor(e){this._delegate=e}set(e,n,r){const i=gi(e);return r?(Wm("WriteBatch.set",r),this._delegate.set(i,n,r)):this._delegate.set(i,n),this}update(e,n,r,...i){const s=gi(e);return arguments.length===2?this._delegate.update(s,n):this._delegate.update(s,n,r,...i),this}delete(e){const n=gi(e);return this._delegate.delete(n),this}commit(){return this._delegate.commit()}}class mi{constructor(e,n,r){this._firestore=e,this._userDataWriter=n,this._delegate=r}fromFirestore(e,n){const r=new Ga(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new Za(this._firestore,r),n!=null?n:{})}toFirestore(e,n){return n?this._delegate.toFirestore(e,n):this._delegate.toFirestore(e)}static getInstance(e,n){const r=mi.INSTANCES;let i=r.get(e);i||(i=new WeakMap,r.set(e,i));let s=i.get(n);return s||(s=new mi(e,new zc(e),n),i.set(n,s)),s}}mi.INSTANCES=new WeakMap;class Ft{constructor(e,n){this.firestore=e,this._delegate=n,this._userDataWriter=new zc(e)}static forPath(e,n,r){if(e.length%2!=0)throw new T("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new Ft(n,new re(n._delegate,r,new P(e)))}static forKey(e,n,r){return new Ft(n,new re(n._delegate,r,e))}get id(){return this._delegate.id}get parent(){return new Bs(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new Bs(this.firestore,fT(this._delegate,e))}catch(n){throw lt(n,"collection()","DocumentReference.collection()")}}isEqual(e){return e=L(e),e instanceof re?pT(this._delegate,e):!1}set(e,n){n=Wm("DocumentReference.set",n);try{return n?LT(this._delegate,e,n):LT(this._delegate,e)}catch(r){throw lt(r,"setDoc()","DocumentReference.set()")}}update(e,n,...r){try{return arguments.length===1?MT(this._delegate,e):MT(this._delegate,e,n,...r)}catch(i){throw lt(i,"updateDoc()","DocumentReference.update()")}}delete(){return Ax(this._delegate)}onSnapshot(...e){const n=zT(e),r=qT(e,i=>new Xa(this.firestore,new bn(this.firestore._delegate,this._userDataWriter,i._key,i._document,i.metadata,this._delegate.converter)));return $T(this._delegate,n,r)}get(e){let n;return(e==null?void 0:e.source)==="cache"?n=Tx(this._delegate):(e==null?void 0:e.source)==="server"?n=Sx(this._delegate):n=Ex(this._delegate),n.then(r=>new Xa(this.firestore,new bn(this.firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,this._delegate.converter)))}withConverter(e){return new Ft(this.firestore,e?this._delegate.withConverter(mi.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function lt(t,e,n){return t.message=t.message.replace(e,n),t}function zT(t){for(const e of t)if(typeof e=="object"&&!Hm(e))return e;return{}}function qT(t,e){var n,r;let i;return Hm(t[0])?i=t[0]:Hm(t[1])?i=t[1]:typeof t[0]=="function"?i={next:t[0],error:t[1],complete:t[2]}:i={next:t[1],error:t[2],complete:t[3]},{next:s=>{i.next&&i.next(e(s))},error:(n=i.error)===null||n===void 0?void 0:n.bind(i),complete:(r=i.complete)===null||r===void 0?void 0:r.bind(i)}}class Xa{constructor(e,n){this._firestore=e,this._delegate=n}get ref(){return new Ft(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,n){return this._delegate.get(e,n)}isEqual(e){return NT(this._delegate,e._delegate)}}class Za extends Xa{data(e){const n=this._delegate.data(e);return cD(n!==void 0),n}}class ct{constructor(e,n){this.firestore=e,this._delegate=n,this._userDataWriter=new zc(e)}where(e,n,r){try{return new ct(this.firestore,yr(this._delegate,hx(e,n,r)))}catch(i){throw lt(i,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,n){try{return new ct(this.firestore,yr(this._delegate,fx(e,n)))}catch(r){throw lt(r,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new ct(this.firestore,yr(this._delegate,px(e)))}catch(n){throw lt(n,"limit()","Query.limit()")}}limitToLast(e){try{return new ct(this.firestore,yr(this._delegate,mx(e)))}catch(n){throw lt(n,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new ct(this.firestore,yr(this._delegate,gx(...e)))}catch(n){throw lt(n,"startAt()","Query.startAt()")}}startAfter(...e){try{return new ct(this.firestore,yr(this._delegate,yx(...e)))}catch(n){throw lt(n,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new ct(this.firestore,yr(this._delegate,vx(...e)))}catch(n){throw lt(n,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new ct(this.firestore,yr(this._delegate,wx(...e)))}catch(n){throw lt(n,"endAt()","Query.endAt()")}}isEqual(e){return mT(this._delegate,e._delegate)}get(e){let n;return(e==null?void 0:e.source)==="cache"?n=Nx(this._delegate):(e==null?void 0:e.source)==="server"?n=Cx(this._delegate):n=kx(this._delegate),n.then(r=>new Km(this.firestore,new gr(this.firestore._delegate,this._userDataWriter,this._delegate,r._snapshot)))}onSnapshot(...e){const n=zT(e),r=qT(e,i=>new Km(this.firestore,new gr(this.firestore._delegate,this._userDataWriter,this._delegate,i._snapshot)));return $T(this._delegate,n,r)}withConverter(e){return new ct(this.firestore,e?this._delegate.withConverter(mi.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class qx{constructor(e,n){this._firestore=e,this._delegate=n}get type(){return this._delegate.type}get doc(){return new Za(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class Km{constructor(e,n){this._firestore=e,this._delegate=n}get query(){return new ct(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new Za(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(n=>new qx(this._firestore,n))}forEach(e,n){this._delegate.forEach(r=>{e.call(n,new Za(this._firestore,r))})}isEqual(e){return NT(this._delegate,e._delegate)}}class Bs extends ct{constructor(e,n){super(e,n);this.firestore=e,this._delegate=n}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new Ft(this.firestore,e):null}doc(e){try{return e===void 0?new Ft(this.firestore,Mc(this._delegate)):new Ft(this.firestore,Mc(this._delegate,e))}catch(n){throw lt(n,"doc()","CollectionReference.doc()")}}add(e){return Rx(this._delegate,e).then(n=>new Ft(this.firestore,n))}isEqual(e){return pT(this._delegate,e._delegate)}withConverter(e){return new Bs(this.firestore,e?this._delegate.withConverter(mi.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function gi(t){return Q(t,re)}/**
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
 */class Gm{constructor(...e){this._delegate=new mr(...e)}static documentId(){return new Gm(We.keyField().canonicalString())}isEqual(e){return e=L(e),e instanceof mr?this._delegate._internalPath.isEqual(e._internalPath):!1}}/**
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
 */class yi{constructor(e){this._delegate=e}static serverTimestamp(){const e=xx();return e._methodName="FieldValue.serverTimestamp",new yi(e)}static delete(){const e=Ox();return e._methodName="FieldValue.delete",new yi(e)}static arrayUnion(...e){const n=Lx(...e);return n._methodName="FieldValue.arrayUnion",new yi(n)}static arrayRemove(...e){const n=Mx(...e);return n._methodName="FieldValue.arrayRemove",new yi(n)}static increment(e){const n=$x(e);return n._methodName="FieldValue.increment",new yi(n)}isEqual(e){return this._delegate.isEqual(e._delegate)}}/**
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
 */const Wx={Firestore:VT,GeoPoint:$c,Timestamp:be,Blob:Ja,Transaction:BT,WriteBatch:jT,DocumentReference:Ft,DocumentSnapshot:Xa,Query:ct,QueryDocumentSnapshot:Za,QuerySnapshot:Km,CollectionReference:Bs,FieldPath:Gm,FieldValue:yi,setLogLevel:zx,CACHE_SIZE_UNLIMITED:HO};function Hx(t,e){t.INTERNAL.registerComponent(new vn("firestore-compat",n=>{const r=n.getProvider("app-compat").getImmediate(),i=n.getProvider("firestore").getImmediate();return e(r,i)},"PUBLIC").setServiceProps(Object.assign({},Wx)))}/**
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
 */function Kx(t){Hx(t,(e,n)=>new VT(e,n,new jx)),t.registerVersion(Ux,Vx)}Kx(zo);export{Qx as A,Er as R,Gx as a,zo as f,Gc as r};
