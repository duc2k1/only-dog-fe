function Cb(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function Ab(t){if(t.__esModule)return t;var e=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(t).forEach(function(n){var r=Object.getOwnPropertyDescriptor(t,n);Object.defineProperty(e,n,r.get?r:{enumerable:!0,get:function(){return t[n]}})}),e}var Te={exports:{}},ee={};/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var rv=Object.getOwnPropertySymbols,Rb=Object.prototype.hasOwnProperty,Nb=Object.prototype.propertyIsEnumerable;function Pb(t){if(t==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}function xb(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de",Object.getOwnPropertyNames(t)[0]==="5")return!1;for(var e={},n=0;n<10;n++)e["_"+String.fromCharCode(n)]=n;var r=Object.getOwnPropertyNames(e).map(function(s){return e[s]});if(r.join("")!=="0123456789")return!1;var i={};return"abcdefghijklmnopqrst".split("").forEach(function(s){i[s]=s}),Object.keys(Object.assign({},i)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}var iv=xb()?Object.assign:function(t,e){for(var n,r=Pb(t),i,s=1;s<arguments.length;s++){n=Object(arguments[s]);for(var o in n)Rb.call(n,o)&&(r[o]=n[o]);if(rv){i=rv(n);for(var a=0;a<i.length;a++)Nb.call(n,i[a])&&(r[i[a]]=n[i[a]])}}return r};/** @license React v17.0.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kd=iv,as=60103,sv=60106;ee.Fragment=60107;ee.StrictMode=60108;ee.Profiler=60114;var ov=60109,av=60110,uv=60112;ee.Suspense=60113;var lv=60115,cv=60116;if(typeof Symbol=="function"&&Symbol.for){var wn=Symbol.for;as=wn("react.element"),sv=wn("react.portal"),ee.Fragment=wn("react.fragment"),ee.StrictMode=wn("react.strict_mode"),ee.Profiler=wn("react.profiler"),ov=wn("react.provider"),av=wn("react.context"),uv=wn("react.forward_ref"),ee.Suspense=wn("react.suspense"),lv=wn("react.memo"),cv=wn("react.lazy")}var hv=typeof Symbol=="function"&&Symbol.iterator;function Ob(t){return t===null||typeof t!="object"?null:(t=hv&&t[hv]||t["@@iterator"],typeof t=="function"?t:null)}function jo(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var dv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},fv={};function us(t,e,n){this.props=t,this.context=e,this.refs=fv,this.updater=n||dv}us.prototype.isReactComponent={};us.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error(jo(85));this.updater.enqueueSetState(this,t,e,"setState")};us.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function pv(){}pv.prototype=us.prototype;function bd(t,e,n){this.props=t,this.context=e,this.refs=fv,this.updater=n||dv}var Cd=bd.prototype=new pv;Cd.constructor=bd;kd(Cd,us.prototype);Cd.isPureReactComponent=!0;var Ad={current:null},mv=Object.prototype.hasOwnProperty,gv={key:!0,ref:!0,__self:!0,__source:!0};function yv(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)mv.call(e,r)&&!gv.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var u=Array(a),l=0;l<a;l++)u[l]=arguments[l+2];i.children=u}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:as,type:t,key:s,ref:o,props:i,_owner:Ad.current}}function Db(t,e){return{$$typeof:as,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Rd(t){return typeof t=="object"&&t!==null&&t.$$typeof===as}function Lb(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var vv=/\/+/g;function Nd(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Lb(""+t.key):e.toString(36)}function il(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case as:case sv:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Nd(o,0):r,Array.isArray(i)?(n="",t!=null&&(n=t.replace(vv,"$&/")+"/"),il(i,e,n,"",function(l){return l})):i!=null&&(Rd(i)&&(i=Db(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(vv,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Array.isArray(t))for(var a=0;a<t.length;a++){s=t[a];var u=r+Nd(s,a);o+=il(s,e,n,u,i)}else if(u=Ob(t),typeof u=="function")for(t=u.call(t),a=0;!(s=t.next()).done;)s=s.value,u=r+Nd(s,a++),o+=il(s,e,n,u,i);else if(s==="object")throw e=""+t,Error(jo(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e));return o}function sl(t,e,n){if(t==null)return t;var r=[],i=0;return il(t,r,"","",function(s){return e.call(n,s,i++)}),r}function Mb(t){if(t._status===-1){var e=t._result;e=e(),t._status=0,t._result=e,e.then(function(n){t._status===0&&(n=n.default,t._status=1,t._result=n)},function(n){t._status===0&&(t._status=2,t._result=n)})}if(t._status===1)return t._result;throw t._result}var wv={current:null};function Qn(){var t=wv.current;if(t===null)throw Error(jo(321));return t}var $b={ReactCurrentDispatcher:wv,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:Ad,IsSomeRendererActing:{current:!1},assign:kd};ee.Children={map:sl,forEach:function(t,e,n){sl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return sl(t,function(){e++}),e},toArray:function(t){return sl(t,function(e){return e})||[]},only:function(t){if(!Rd(t))throw Error(jo(143));return t}};ee.Component=us;ee.PureComponent=bd;ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$b;ee.cloneElement=function(t,e,n){if(t==null)throw Error(jo(267,t));var r=kd({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Ad.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(u in e)mv.call(e,u)&&!gv.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&a!==void 0?a[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var l=0;l<u;l++)a[l]=arguments[l+2];r.children=a}return{$$typeof:as,type:t.type,key:i,ref:s,props:r,_owner:o}};ee.createContext=function(t,e){return e===void 0&&(e=null),t={$$typeof:av,_calculateChangedBits:e,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null},t.Provider={$$typeof:ov,_context:t},t.Consumer=t};ee.createElement=yv;ee.createFactory=function(t){var e=yv.bind(null,t);return e.type=t,e};ee.createRef=function(){return{current:null}};ee.forwardRef=function(t){return{$$typeof:uv,render:t}};ee.isValidElement=Rd;ee.lazy=function(t){return{$$typeof:cv,_payload:{_status:-1,_result:t},_init:Mb}};ee.memo=function(t,e){return{$$typeof:lv,type:t,compare:e===void 0?null:e}};ee.useCallback=function(t,e){return Qn().useCallback(t,e)};ee.useContext=function(t,e){return Qn().useContext(t,e)};ee.useDebugValue=function(){};ee.useEffect=function(t,e){return Qn().useEffect(t,e)};ee.useImperativeHandle=function(t,e,n){return Qn().useImperativeHandle(t,e,n)};ee.useLayoutEffect=function(t,e){return Qn().useLayoutEffect(t,e)};ee.useMemo=function(t,e){return Qn().useMemo(t,e)};ee.useReducer=function(t,e,n){return Qn().useReducer(t,e,n)};ee.useRef=function(t){return Qn().useRef(t)};ee.useState=function(t){return Qn().useState(t)};ee.version="17.0.2";Te.exports=ee;var _n=Te.exports,_v={exports:{}},rn={},Ev={exports:{}},Iv={};/** @license React v0.20.2
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){var e,n,r,i;if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}if(typeof window=="undefined"||typeof MessageChannel!="function"){var u=null,l=null,c=function(){if(u!==null)try{var D=t.unstable_now();u(!0,D),u=null}catch(T){throw setTimeout(c,0),T}};e=function(D){u!==null?setTimeout(e,0,D):(u=D,setTimeout(c,0))},n=function(D,T){l=setTimeout(D,T)},r=function(){clearTimeout(l)},t.unstable_shouldYield=function(){return!1},i=t.unstable_forceFrameRate=function(){}}else{var h=window.setTimeout,d=window.clearTimeout;if(typeof console!="undefined"){var g=window.cancelAnimationFrame;typeof window.requestAnimationFrame!="function"&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"),typeof g!="function"&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills")}var y=!1,_=null,f=-1,p=5,m=0;t.unstable_shouldYield=function(){return t.unstable_now()>=m},i=function(){},t.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):p=0<D?Math.floor(1e3/D):5};var w=new MessageChannel,v=w.port2;w.port1.onmessage=function(){if(_!==null){var D=t.unstable_now();m=D+p;try{_(!0,D)?v.postMessage(null):(y=!1,_=null)}catch(T){throw v.postMessage(null),T}}else y=!1},e=function(D){_=D,y||(y=!0,v.postMessage(null))},n=function(D,T){f=h(function(){D(t.unstable_now())},T)},r=function(){d(f),f=-1}}function P(D,T){var k=D.length;D.push(T);e:for(;;){var O=k-1>>>1,z=D[O];if(z!==void 0&&0<F(z,T))D[O]=T,D[k]=z,k=O;else break e}}function C(D){return D=D[0],D===void 0?null:D}function V(D){var T=D[0];if(T!==void 0){var k=D.pop();if(k!==T){D[0]=k;e:for(var O=0,z=D.length;O<z;){var E=2*(O+1)-1,X=D[E],x=E+1,ae=D[x];if(X!==void 0&&0>F(X,k))ae!==void 0&&0>F(ae,X)?(D[O]=ae,D[x]=k,O=x):(D[O]=X,D[E]=k,O=E);else if(ae!==void 0&&0>F(ae,k))D[O]=ae,D[x]=k,O=x;else break e}}return T}return null}function F(D,T){var k=D.sortIndex-T.sortIndex;return k!==0?k:D.id-T.id}var M=[],he=[],An=1,fe=null,de=3,bt=!1,Se=!1,yn=!1;function Ct(D){for(var T=C(he);T!==null;){if(T.callback===null)V(he);else if(T.startTime<=D)V(he),T.sortIndex=T.expirationTime,P(M,T);else break;T=C(he)}}function mt(D){if(yn=!1,Ct(D),!Se)if(C(M)!==null)Se=!0,e(Kn);else{var T=C(he);T!==null&&n(mt,T.startTime-D)}}function Kn(D,T){Se=!1,yn&&(yn=!1,r()),bt=!0;var k=de;try{for(Ct(T),fe=C(M);fe!==null&&(!(fe.expirationTime>T)||D&&!t.unstable_shouldYield());){var O=fe.callback;if(typeof O=="function"){fe.callback=null,de=fe.priorityLevel;var z=O(fe.expirationTime<=T);T=t.unstable_now(),typeof z=="function"?fe.callback=z:fe===C(M)&&V(M),Ct(T)}else V(M);fe=C(M)}if(fe!==null)var E=!0;else{var X=C(he);X!==null&&n(mt,X.startTime-T),E=!1}return E}finally{fe=null,de=k,bt=!1}}var vr=i;t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(D){D.callback=null},t.unstable_continueExecution=function(){Se||bt||(Se=!0,e(Kn))},t.unstable_getCurrentPriorityLevel=function(){return de},t.unstable_getFirstCallbackNode=function(){return C(M)},t.unstable_next=function(D){switch(de){case 1:case 2:case 3:var T=3;break;default:T=de}var k=de;de=T;try{return D()}finally{de=k}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=vr,t.unstable_runWithPriority=function(D,T){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var k=de;de=D;try{return T()}finally{de=k}},t.unstable_scheduleCallback=function(D,T,k){var O=t.unstable_now();switch(typeof k=="object"&&k!==null?(k=k.delay,k=typeof k=="number"&&0<k?O+k:O):k=O,D){case 1:var z=-1;break;case 2:z=250;break;case 5:z=1073741823;break;case 4:z=1e4;break;default:z=5e3}return z=k+z,D={id:An++,callback:T,priorityLevel:D,startTime:k,expirationTime:z,sortIndex:-1},k>O?(D.sortIndex=k,P(he,D),C(M)===null&&D===C(he)&&(yn?r():yn=!0,n(mt,k-O))):(D.sortIndex=z,P(M,D),Se||bt||(Se=!0,e(Kn))),D},t.unstable_wrapCallback=function(D){var T=de;return function(){var k=de;de=T;try{return D.apply(this,arguments)}finally{de=k}}}})(Iv);Ev.exports=Iv;/** @license React v17.0.2
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ol=Te.exports,_e=iv,je=Ev.exports;function R(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}if(!ol)throw Error(R(227));var Sv=new Set,zo={};function di(t,e){ls(t,e),ls(t+"Capture",e)}function ls(t,e){for(zo[t]=e,t=0;t<e.length;t++)Sv.add(e[t])}var Yn=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"),Ub=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Tv=Object.prototype.hasOwnProperty,kv={},bv={};function Fb(t){return Tv.call(bv,t)?!0:Tv.call(kv,t)?!1:Ub.test(t)?bv[t]=!0:(kv[t]=!0,!1)}function Vb(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Bb(t,e,n,r){if(e===null||typeof e=="undefined"||Vb(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function At(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var rt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){rt[t]=new At(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];rt[e]=new At(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){rt[t]=new At(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){rt[t]=new At(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){rt[t]=new At(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){rt[t]=new At(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){rt[t]=new At(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){rt[t]=new At(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){rt[t]=new At(t,5,!1,t.toLowerCase(),null,!1,!1)});var Pd=/[\-:]([a-z])/g;function xd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Pd,xd);rt[e]=new At(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Pd,xd);rt[e]=new At(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Pd,xd);rt[e]=new At(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){rt[t]=new At(t,1,!1,t.toLowerCase(),null,!1,!1)});rt.xlinkHref=new At("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){rt[t]=new At(t,1,!1,t.toLowerCase(),null,!0,!0)});function Od(t,e,n,r){var i=rt.hasOwnProperty(e)?rt[e]:null,s=i!==null?i.type===0:r?!1:!(!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N");s||(Bb(e,n,i,r)&&(n=null),r||i===null?Fb(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var fi=ol.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,qo=60103,pi=60106,_r=60107,Dd=60108,Ho=60114,Ld=60109,Md=60110,al=60112,Wo=60113,ul=60120,ll=60115,$d=60116,Ud=60121,Fd=60128,Cv=60129,Vd=60130,Bd=60131;if(typeof Symbol=="function"&&Symbol.for){var ze=Symbol.for;qo=ze("react.element"),pi=ze("react.portal"),_r=ze("react.fragment"),Dd=ze("react.strict_mode"),Ho=ze("react.profiler"),Ld=ze("react.provider"),Md=ze("react.context"),al=ze("react.forward_ref"),Wo=ze("react.suspense"),ul=ze("react.suspense_list"),ll=ze("react.memo"),$d=ze("react.lazy"),Ud=ze("react.block"),ze("react.scope"),Fd=ze("react.opaque.id"),Cv=ze("react.debug_trace_mode"),Vd=ze("react.offscreen"),Bd=ze("react.legacy_hidden")}var Av=typeof Symbol=="function"&&Symbol.iterator;function Go(t){return t===null||typeof t!="object"?null:(t=Av&&t[Av]||t["@@iterator"],typeof t=="function"?t:null)}var jd;function Ko(t){if(jd===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);jd=e&&e[1]||""}return`
`+jd+t}var zd=!1;function cl(t,e){if(!t||zd)return"";zd=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a])return`
`+i[o].replace(" at new "," at ");while(1<=o&&0<=a);break}}}finally{zd=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ko(t):""}function jb(t){switch(t.tag){case 5:return Ko(t.type);case 16:return Ko("Lazy");case 13:return Ko("Suspense");case 19:return Ko("SuspenseList");case 0:case 2:case 15:return t=cl(t.type,!1),t;case 11:return t=cl(t.type.render,!1),t;case 22:return t=cl(t.type._render,!1),t;case 1:return t=cl(t.type,!0),t;default:return""}}function cs(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case _r:return"Fragment";case pi:return"Portal";case Ho:return"Profiler";case Dd:return"StrictMode";case Wo:return"Suspense";case ul:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Md:return(t.displayName||"Context")+".Consumer";case Ld:return(t._context.displayName||"Context")+".Provider";case al:var e=t.render;return e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case ll:return cs(t.type);case Ud:return cs(t._render);case $d:e=t._payload,t=t._init;try{return cs(t(e))}catch{}}return null}function Er(t){switch(typeof t){case"boolean":case"number":case"object":case"string":case"undefined":return t;default:return""}}function Rv(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function zb(t){var e=Rv(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n!="undefined"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function hl(t){t._valueTracker||(t._valueTracker=zb(t))}function Nv(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Rv(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function dl(t){if(t=t||(typeof document!="undefined"?document:void 0),typeof t=="undefined")return null;try{return t.activeElement||t.body}catch{return t.body}}function qd(t,e){var n=e.checked;return _e({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:t._wrapperState.initialChecked})}function Pv(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Er(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function xv(t,e){e=e.checked,e!=null&&Od(t,"checked",e,!1)}function Hd(t,e){xv(t,e);var n=Er(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Wd(t,e.type,n):e.hasOwnProperty("defaultValue")&&Wd(t,e.type,Er(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Ov(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Wd(t,e,n){(e!=="number"||dl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}function qb(t){var e="";return ol.Children.forEach(t,function(n){n!=null&&(e+=n)}),e}function Gd(t,e){return t=_e({children:void 0},e),(e=qb(e.children))&&(t.children=e),t}function hs(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Er(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Kd(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(R(91));return _e({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Dv(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(R(92));if(Array.isArray(n)){if(!(1>=n.length))throw Error(R(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Er(n)}}function Lv(t,e){var n=Er(e.value),r=Er(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Mv(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}var Qd={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};function $v(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Yd(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?$v(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var fl,Uv=function(t){return typeof MSApp!="undefined"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!==Qd.svg||"innerHTML"in t)t.innerHTML=e;else{for(fl=fl||document.createElement("div"),fl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=fl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Qo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Yo={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Hb=["Webkit","ms","Moz","O"];Object.keys(Yo).forEach(function(t){Hb.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Yo[e]=Yo[t]})});function Fv(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Yo.hasOwnProperty(t)&&Yo[t]?(""+e).trim():e+"px"}function Vv(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Fv(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var Wb=_e({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Xd(t,e){if(e){if(Wb[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(R(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(R(60));if(!(typeof e.dangerouslySetInnerHTML=="object"&&"__html"in e.dangerouslySetInnerHTML))throw Error(R(61))}if(e.style!=null&&typeof e.style!="object")throw Error(R(62))}}function Jd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}function Zd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ef=null,ds=null,fs=null;function Bv(t){if(t=ma(t)){if(typeof ef!="function")throw Error(R(280));var e=t.stateNode;e&&(e=Pl(e),ef(t.stateNode,t.type,e))}}function jv(t){ds?fs?fs.push(t):fs=[t]:ds=t}function zv(){if(ds){var t=ds,e=fs;if(fs=ds=null,Bv(t),e)for(t=0;t<e.length;t++)Bv(e[t])}}function tf(t,e){return t(e)}function qv(t,e,n,r,i){return t(e,n,r,i)}function nf(){}var Hv=tf,mi=!1,rf=!1;function sf(){(ds!==null||fs!==null)&&(nf(),zv())}function Gb(t,e,n){if(rf)return t(e,n);rf=!0;try{return Hv(t,e,n)}finally{rf=!1,sf()}}function Xo(t,e){var n=t.stateNode;if(n===null)return null;var r=Pl(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(R(231,e,typeof n));return n}var of=!1;if(Yn)try{var Jo={};Object.defineProperty(Jo,"passive",{get:function(){of=!0}}),window.addEventListener("test",Jo,Jo),window.removeEventListener("test",Jo,Jo)}catch{of=!1}function Kb(t,e,n,r,i,s,o,a,u){var l=Array.prototype.slice.call(arguments,3);try{e.apply(n,l)}catch(c){this.onError(c)}}var Zo=!1,pl=null,ml=!1,af=null,Qb={onError:function(t){Zo=!0,pl=t}};function Yb(t,e,n,r,i,s,o,a,u){Zo=!1,pl=null,Kb.apply(Qb,arguments)}function Xb(t,e,n,r,i,s,o,a,u){if(Yb.apply(this,arguments),Zo){if(Zo){var l=pl;Zo=!1,pl=null}else throw Error(R(198));ml||(ml=!0,af=l)}}function gi(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&1026)!=0&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Wv(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Gv(t){if(gi(t)!==t)throw Error(R(188))}function Jb(t){var e=t.alternate;if(!e){if(e=gi(t),e===null)throw Error(R(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Gv(i),t;if(s===r)return Gv(i),e;s=s.sibling}throw Error(R(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(R(189))}}if(n.alternate!==r)throw Error(R(190))}if(n.tag!==3)throw Error(R(188));return n.stateNode.current===n?t:e}function Kv(t){if(t=Jb(t),!t)return null;for(var e=t;;){if(e.tag===5||e.tag===6)return e;if(e.child)e.child.return=e,e=e.child;else{if(e===t)break;for(;!e.sibling;){if(!e.return||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}}return null}function Qv(t,e){for(var n=t.alternate;e!==null;){if(e===t||e===n)return!0;e=e.return}return!1}var Yv,uf,Xv,Jv,lf=!1,Rn=[],Ir=null,Sr=null,Tr=null,ea=new Map,ta=new Map,na=[],Zv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function cf(t,e,n,r,i){return{blockedOn:t,domEventName:e,eventSystemFlags:n|16,nativeEvent:i,targetContainers:[r]}}function ew(t,e){switch(t){case"focusin":case"focusout":Ir=null;break;case"dragenter":case"dragleave":Sr=null;break;case"mouseover":case"mouseout":Tr=null;break;case"pointerover":case"pointerout":ea.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ta.delete(e.pointerId)}}function ra(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t=cf(e,n,r,i,s),e!==null&&(e=ma(e),e!==null&&uf(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function Zb(t,e,n,r,i){switch(e){case"focusin":return Ir=ra(Ir,t,e,n,r,i),!0;case"dragenter":return Sr=ra(Sr,t,e,n,r,i),!0;case"mouseover":return Tr=ra(Tr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return ea.set(s,ra(ea.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,ta.set(s,ra(ta.get(s)||null,t,e,n,r,i)),!0}return!1}function eC(t){var e=yi(t.target);if(e!==null){var n=gi(e);if(n!==null){if(e=n.tag,e===13){if(e=Wv(n),e!==null){t.blockedOn=e,Jv(t.lanePriority,function(){je.unstable_runWithPriority(t.priority,function(){Xv(n)})});return}}else if(e===3&&n.stateNode.hydrate){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function gl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=gf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n!==null)return e=ma(n),e!==null&&uf(e),t.blockedOn=n,!1;e.shift()}return!0}function tw(t,e,n){gl(t)&&n.delete(e)}function tC(){for(lf=!1;0<Rn.length;){var t=Rn[0];if(t.blockedOn!==null){t=ma(t.blockedOn),t!==null&&Yv(t);break}for(var e=t.targetContainers;0<e.length;){var n=gf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n!==null){t.blockedOn=n;break}e.shift()}t.blockedOn===null&&Rn.shift()}Ir!==null&&gl(Ir)&&(Ir=null),Sr!==null&&gl(Sr)&&(Sr=null),Tr!==null&&gl(Tr)&&(Tr=null),ea.forEach(tw),ta.forEach(tw)}function ia(t,e){t.blockedOn===e&&(t.blockedOn=null,lf||(lf=!0,je.unstable_scheduleCallback(je.unstable_NormalPriority,tC)))}function nw(t){function e(i){return ia(i,t)}if(0<Rn.length){ia(Rn[0],t);for(var n=1;n<Rn.length;n++){var r=Rn[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Ir!==null&&ia(Ir,t),Sr!==null&&ia(Sr,t),Tr!==null&&ia(Tr,t),ea.forEach(e),ta.forEach(e),n=0;n<na.length;n++)r=na[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<na.length&&(n=na[0],n.blockedOn===null);)eC(n),n.blockedOn===null&&na.shift()}function yl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ps={animationend:yl("Animation","AnimationEnd"),animationiteration:yl("Animation","AnimationIteration"),animationstart:yl("Animation","AnimationStart"),transitionend:yl("Transition","TransitionEnd")},hf={},rw={};Yn&&(rw=document.createElement("div").style,"AnimationEvent"in window||(delete ps.animationend.animation,delete ps.animationiteration.animation,delete ps.animationstart.animation),"TransitionEvent"in window||delete ps.transitionend.transition);function vl(t){if(hf[t])return hf[t];if(!ps[t])return t;var e=ps[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in rw)return hf[t]=e[n];return t}var iw=vl("animationend"),sw=vl("animationiteration"),ow=vl("animationstart"),aw=vl("transitionend"),uw=new Map,df=new Map,nC=["abort","abort",iw,"animationEnd",sw,"animationIteration",ow,"animationStart","canplay","canPlay","canplaythrough","canPlayThrough","durationchange","durationChange","emptied","emptied","encrypted","encrypted","ended","ended","error","error","gotpointercapture","gotPointerCapture","load","load","loadeddata","loadedData","loadedmetadata","loadedMetadata","loadstart","loadStart","lostpointercapture","lostPointerCapture","playing","playing","progress","progress","seeking","seeking","stalled","stalled","suspend","suspend","timeupdate","timeUpdate",aw,"transitionEnd","waiting","waiting"];function ff(t,e){for(var n=0;n<t.length;n+=2){var r=t[n],i=t[n+1];i="on"+(i[0].toUpperCase()+i.slice(1)),df.set(r,e),uw.set(r,i),di(i,[r])}}var rC=je.unstable_now;rC();var pe=8;function ms(t){if((1&t)!=0)return pe=15,1;if((2&t)!=0)return pe=14,2;if((4&t)!=0)return pe=13,4;var e=24&t;return e!==0?(pe=12,e):(t&32)!=0?(pe=11,32):(e=192&t,e!==0?(pe=10,e):(t&256)!=0?(pe=9,256):(e=3584&t,e!==0?(pe=8,e):(t&4096)!=0?(pe=7,4096):(e=4186112&t,e!==0?(pe=6,e):(e=62914560&t,e!==0?(pe=5,e):t&67108864?(pe=4,67108864):(t&134217728)!=0?(pe=3,134217728):(e=805306368&t,e!==0?(pe=2,e):(1073741824&t)!=0?(pe=1,1073741824):(pe=8,t))))))}function iC(t){switch(t){case 99:return 15;case 98:return 10;case 97:case 96:return 8;case 95:return 2;default:return 0}}function sC(t){switch(t){case 15:case 14:return 99;case 13:case 12:case 11:case 10:return 98;case 9:case 8:case 7:case 6:case 4:case 5:return 97;case 3:case 2:case 1:return 95;case 0:return 90;default:throw Error(R(358,t))}}function sa(t,e){var n=t.pendingLanes;if(n===0)return pe=0;var r=0,i=0,s=t.expiredLanes,o=t.suspendedLanes,a=t.pingedLanes;if(s!==0)r=s,i=pe=15;else if(s=n&134217727,s!==0){var u=s&~o;u!==0?(r=ms(u),i=pe):(a&=s,a!==0&&(r=ms(a),i=pe))}else s=n&~o,s!==0?(r=ms(s),i=pe):a!==0&&(r=ms(a),i=pe);if(r===0)return 0;if(r=31-kr(r),r=n&((0>r?0:1<<r)<<1)-1,e!==0&&e!==r&&(e&o)==0){if(ms(e),i<=pe)return e;pe=i}if(e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-kr(e),i=1<<n,r|=t[n],e&=~i;return r}function lw(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function wl(t,e){switch(t){case 15:return 1;case 14:return 2;case 12:return t=gs(24&~e),t===0?wl(10,e):t;case 10:return t=gs(192&~e),t===0?wl(8,e):t;case 8:return t=gs(3584&~e),t===0&&(t=gs(4186112&~e),t===0&&(t=512)),t;case 2:return e=gs(805306368&~e),e===0&&(e=268435456),e}throw Error(R(358,t))}function gs(t){return t&-t}function pf(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function _l(t,e,n){t.pendingLanes|=e;var r=e-1;t.suspendedLanes&=r,t.pingedLanes&=r,t=t.eventTimes,e=31-kr(e),t[e]=n}var kr=Math.clz32?Math.clz32:uC,oC=Math.log,aC=Math.LN2;function uC(t){return t===0?32:31-(oC(t)/aC|0)|0}var lC=je.unstable_UserBlockingPriority,cC=je.unstable_runWithPriority,El=!0;function hC(t,e,n,r){mi||nf();var i=mf,s=mi;mi=!0;try{qv(i,t,e,n,r)}finally{(mi=s)||sf()}}function dC(t,e,n,r){cC(lC,mf.bind(null,t,e,n,r))}function mf(t,e,n,r){if(El){var i;if((i=(e&4)==0)&&0<Rn.length&&-1<Zv.indexOf(t))t=cf(null,t,e,n,r),Rn.push(t);else{var s=gf(t,e,n,r);if(s===null)i&&ew(t,r);else{if(i){if(-1<Zv.indexOf(t)){t=cf(s,t,e,n,r),Rn.push(t);return}if(Zb(s,t,e,n,r))return;ew(t,r)}Fw(t,e,r,null,n)}}}}function gf(t,e,n,r){var i=Zd(r);if(i=yi(i),i!==null){var s=gi(i);if(s===null)i=null;else{var o=s.tag;if(o===13){if(i=Wv(s),i!==null)return i;i=null}else if(o===3){if(s.stateNode.hydrate)return s.tag===3?s.stateNode.containerInfo:null;i=null}else s!==i&&(i=null)}}return Fw(t,e,r,i,n),null}var br=null,yf=null,Il=null;function cw(){if(Il)return Il;var t,e=yf,n=e.length,r,i="value"in br?br.value:br.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Il=i.slice(t,1<r?1-r:void 0)}function Sl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Tl(){return!0}function hw(){return!1}function Gt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Tl:hw,this.isPropagationStopped=hw,this}return _e(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Tl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Tl)},persist:function(){},isPersistent:Tl}),e}var ys={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},vf=Gt(ys),oa=_e({},ys,{view:0,detail:0}),fC=Gt(oa),wf,_f,aa,kl=_e({},oa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:If,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==aa&&(aa&&t.type==="mousemove"?(wf=t.screenX-aa.screenX,_f=t.screenY-aa.screenY):_f=wf=0,aa=t),wf)},movementY:function(t){return"movementY"in t?t.movementY:_f}}),dw=Gt(kl),pC=_e({},kl,{dataTransfer:0}),mC=Gt(pC),gC=_e({},oa,{relatedTarget:0}),Ef=Gt(gC),yC=_e({},ys,{animationName:0,elapsedTime:0,pseudoElement:0}),vC=Gt(yC),wC=_e({},ys,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),_C=Gt(wC),EC=_e({},ys,{data:0}),fw=Gt(EC),IC={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},SC={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},TC={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function kC(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=TC[t])?!!e[t]:!1}function If(){return kC}var bC=_e({},oa,{key:function(t){if(t.key){var e=IC[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Sl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?SC[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:If,charCode:function(t){return t.type==="keypress"?Sl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Sl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),CC=Gt(bC),AC=_e({},kl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),pw=Gt(AC),RC=_e({},oa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:If}),NC=Gt(RC),PC=_e({},ys,{propertyName:0,elapsedTime:0,pseudoElement:0}),xC=Gt(PC),OC=_e({},kl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),DC=Gt(OC),LC=[9,13,27,32],Sf=Yn&&"CompositionEvent"in window,ua=null;Yn&&"documentMode"in document&&(ua=document.documentMode);var MC=Yn&&"TextEvent"in window&&!ua,mw=Yn&&(!Sf||ua&&8<ua&&11>=ua),gw=String.fromCharCode(32),yw=!1;function vw(t,e){switch(t){case"keyup":return LC.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ww(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var vs=!1;function $C(t,e){switch(t){case"compositionend":return ww(e);case"keypress":return e.which!==32?null:(yw=!0,gw);case"textInput":return t=e.data,t===gw&&yw?null:t;default:return null}}function UC(t,e){if(vs)return t==="compositionend"||!Sf&&vw(t,e)?(t=cw(),Il=yf=br=null,vs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return mw&&e.locale!=="ko"?null:e.data;default:return null}}var FC={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function _w(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!FC[t.type]:e==="textarea"}function Ew(t,e,n,r){jv(r),e=Cl(e,"onChange"),0<e.length&&(n=new vf("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var la=null,ca=null;function VC(t){Dw(t,0)}function bl(t){var e=Ss(t);if(Nv(e))return t}function BC(t,e){if(t==="change")return e}var Iw=!1;if(Yn){var Tf;if(Yn){var kf="oninput"in document;if(!kf){var Sw=document.createElement("div");Sw.setAttribute("oninput","return;"),kf=typeof Sw.oninput=="function"}Tf=kf}else Tf=!1;Iw=Tf&&(!document.documentMode||9<document.documentMode)}function Tw(){la&&(la.detachEvent("onpropertychange",kw),ca=la=null)}function kw(t){if(t.propertyName==="value"&&bl(ca)){var e=[];if(Ew(e,ca,t,Zd(t)),t=VC,mi)t(e);else{mi=!0;try{tf(t,e)}finally{mi=!1,sf()}}}}function jC(t,e,n){t==="focusin"?(Tw(),la=e,ca=n,la.attachEvent("onpropertychange",kw)):t==="focusout"&&Tw()}function zC(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return bl(ca)}function qC(t,e){if(t==="click")return bl(e)}function HC(t,e){if(t==="input"||t==="change")return bl(e)}function WC(t,e){return t===e&&(t!==0||1/t==1/e)||t!==t&&e!==e}var sn=typeof Object.is=="function"?Object.is:WC,GC=Object.prototype.hasOwnProperty;function ha(t,e){if(sn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++)if(!GC.call(e,n[r])||!sn(t[n[r]],e[n[r]]))return!1;return!0}function bw(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Cw(t,e){var n=bw(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=bw(n)}}function Aw(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Aw(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Rw(){for(var t=window,e=dl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=dl(t.document)}return e}function bf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var KC=Yn&&"documentMode"in document&&11>=document.documentMode,ws=null,Cf=null,da=null,Af=!1;function Nw(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Af||ws==null||ws!==dl(r)||(r=ws,"selectionStart"in r&&bf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),da&&ha(da,r)||(da=r,r=Cl(Cf,"onSelect"),0<r.length&&(e=new vf("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=ws)))}ff("cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "),0);ff("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "),1);ff(nC,2);for(var Pw="change selectionchange textInput compositionstart compositionend compositionupdate".split(" "),Rf=0;Rf<Pw.length;Rf++)df.set(Pw[Rf],0);ls("onMouseEnter",["mouseout","mouseover"]);ls("onMouseLeave",["mouseout","mouseover"]);ls("onPointerEnter",["pointerout","pointerover"]);ls("onPointerLeave",["pointerout","pointerover"]);di("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));di("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));di("onBeforeInput",["compositionend","keypress","textInput","paste"]);di("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));di("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));di("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var fa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),xw=new Set("cancel close invalid load scroll toggle".split(" ").concat(fa));function Ow(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,Xb(r,e,void 0,t),t.currentTarget=null}function Dw(t,e){e=(e&4)!=0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],u=a.instance,l=a.currentTarget;if(a=a.listener,u!==s&&i.isPropagationStopped())break e;Ow(i,a,l),s=u}else for(o=0;o<r.length;o++){if(a=r[o],u=a.instance,l=a.currentTarget,a=a.listener,u!==s&&i.isPropagationStopped())break e;Ow(i,a,l),s=u}}}if(ml)throw t=af,ml=!1,af=null,t}function me(t,e){var n=Hw(e),r=t+"__bubble";n.has(r)||(Uw(e,t,2,!1),n.add(r))}var Lw="_reactListening"+Math.random().toString(36).slice(2);function Mw(t){t[Lw]||(t[Lw]=!0,Sv.forEach(function(e){xw.has(e)||$w(e,!1,t,null),$w(e,!0,t,null)}))}function $w(t,e,n,r){var i=4<arguments.length&&arguments[4]!==void 0?arguments[4]:0,s=n;if(t==="selectionchange"&&n.nodeType!==9&&(s=n.ownerDocument),r!==null&&!e&&xw.has(t)){if(t!=="scroll")return;i|=2,s=r}var o=Hw(s),a=t+"__"+(e?"capture":"bubble");o.has(a)||(e&&(i|=4),Uw(s,t,i,e),o.add(a))}function Uw(t,e,n,r){var i=df.get(e);switch(i===void 0?2:i){case 0:i=hC;break;case 1:i=dC;break;default:i=mf}n=i.bind(null,e,n,t),i=void 0,!of||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Fw(t,e,n,r,i){var s=r;if((e&1)==0&&(e&2)==0&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;a!==null;){if(o=yi(a),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}a=a.parentNode}}r=r.return}Gb(function(){var l=s,c=Zd(n),h=[];e:{var d=uw.get(t);if(d!==void 0){var g=vf,y=t;switch(t){case"keypress":if(Sl(n)===0)break e;case"keydown":case"keyup":g=CC;break;case"focusin":y="focus",g=Ef;break;case"focusout":y="blur",g=Ef;break;case"beforeblur":case"afterblur":g=Ef;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=dw;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=mC;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=NC;break;case iw:case sw:case ow:g=vC;break;case aw:g=xC;break;case"scroll":g=fC;break;case"wheel":g=DC;break;case"copy":case"cut":case"paste":g=_C;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=pw}var _=(e&4)!=0,f=!_&&t==="scroll",p=_?d!==null?d+"Capture":null:d;_=[];for(var m=l,w;m!==null;){w=m;var v=w.stateNode;if(w.tag===5&&v!==null&&(w=v,p!==null&&(v=Xo(m,p),v!=null&&_.push(pa(m,v,w)))),f)break;m=m.return}0<_.length&&(d=new g(d,y,null,n,c),h.push({event:d,listeners:_}))}}if((e&7)==0){e:{if(d=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",d&&(e&16)==0&&(y=n.relatedTarget||n.fromElement)&&(yi(y)||y[Is]))break e;if((g||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,g?(y=n.relatedTarget||n.toElement,g=l,y=y?yi(y):null,y!==null&&(f=gi(y),y!==f||y.tag!==5&&y.tag!==6)&&(y=null)):(g=null,y=l),g!==y)){if(_=dw,v="onMouseLeave",p="onMouseEnter",m="mouse",(t==="pointerout"||t==="pointerover")&&(_=pw,v="onPointerLeave",p="onPointerEnter",m="pointer"),f=g==null?d:Ss(g),w=y==null?d:Ss(y),d=new _(v,m+"leave",g,n,c),d.target=f,d.relatedTarget=w,v=null,yi(c)===l&&(_=new _(p,m+"enter",y,n,c),_.target=w,_.relatedTarget=f,v=_),f=v,g&&y)t:{for(_=g,p=y,m=0,w=_;w;w=_s(w))m++;for(w=0,v=p;v;v=_s(v))w++;for(;0<m-w;)_=_s(_),m--;for(;0<w-m;)p=_s(p),w--;for(;m--;){if(_===p||p!==null&&_===p.alternate)break t;_=_s(_),p=_s(p)}_=null}else _=null;g!==null&&Vw(h,d,g,_,!1),y!==null&&f!==null&&Vw(h,f,y,_,!0)}}e:{if(d=l?Ss(l):window,g=d.nodeName&&d.nodeName.toLowerCase(),g==="select"||g==="input"&&d.type==="file")var P=BC;else if(_w(d))if(Iw)P=HC;else{P=zC;var C=jC}else(g=d.nodeName)&&g.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(P=qC);if(P&&(P=P(t,l))){Ew(h,P,n,c);break e}C&&C(t,d,l),t==="focusout"&&(C=d._wrapperState)&&C.controlled&&d.type==="number"&&Wd(d,"number",d.value)}switch(C=l?Ss(l):window,t){case"focusin":(_w(C)||C.contentEditable==="true")&&(ws=C,Cf=l,da=null);break;case"focusout":da=Cf=ws=null;break;case"mousedown":Af=!0;break;case"contextmenu":case"mouseup":case"dragend":Af=!1,Nw(h,n,c);break;case"selectionchange":if(KC)break;case"keydown":case"keyup":Nw(h,n,c)}var V;if(Sf)e:{switch(t){case"compositionstart":var F="onCompositionStart";break e;case"compositionend":F="onCompositionEnd";break e;case"compositionupdate":F="onCompositionUpdate";break e}F=void 0}else vs?vw(t,n)&&(F="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(F="onCompositionStart");F&&(mw&&n.locale!=="ko"&&(vs||F!=="onCompositionStart"?F==="onCompositionEnd"&&vs&&(V=cw()):(br=c,yf="value"in br?br.value:br.textContent,vs=!0)),C=Cl(l,F),0<C.length&&(F=new fw(F,t,null,n,c),h.push({event:F,listeners:C}),V?F.data=V:(V=ww(n),V!==null&&(F.data=V)))),(V=MC?$C(t,n):UC(t,n))&&(l=Cl(l,"onBeforeInput"),0<l.length&&(c=new fw("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:l}),c.data=V))}Dw(h,e)})}function pa(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Cl(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Xo(t,n),s!=null&&r.unshift(pa(t,s,i)),s=Xo(t,e),s!=null&&r.push(pa(t,s,i))),t=t.return}return r}function _s(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Vw(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,u=a.alternate,l=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&l!==null&&(a=l,i?(u=Xo(n,s),u!=null&&o.unshift(pa(n,u,a))):i||(u=Xo(n,s),u!=null&&o.push(pa(n,u,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}function Al(){}var Nf=null,Pf=null;function Bw(t,e){switch(t){case"button":case"input":case"select":case"textarea":return!!e.autoFocus}return!1}function xf(t,e){return t==="textarea"||t==="option"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var jw=typeof setTimeout=="function"?setTimeout:void 0,QC=typeof clearTimeout=="function"?clearTimeout:void 0;function Of(t){t.nodeType===1?t.textContent="":t.nodeType===9&&(t=t.body,t!=null&&(t.textContent=""))}function Es(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break}return t}function zw(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Df=0;function YC(t){return{$$typeof:Fd,toString:t,valueOf:t}}var Rl=Math.random().toString(36).slice(2),Cr="__reactFiber$"+Rl,Nl="__reactProps$"+Rl,Is="__reactContainer$"+Rl,qw="__reactEvents$"+Rl;function yi(t){var e=t[Cr];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Is]||n[Cr]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=zw(t);t!==null;){if(n=t[Cr])return n;t=zw(t)}return e}t=n,n=t.parentNode}return null}function ma(t){return t=t[Cr]||t[Is],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ss(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(R(33))}function Pl(t){return t[Nl]||null}function Hw(t){var e=t[qw];return e===void 0&&(e=t[qw]=new Set),e}var Lf=[],Ts=-1;function Ar(t){return{current:t}}function ge(t){0>Ts||(t.current=Lf[Ts],Lf[Ts]=null,Ts--)}function ke(t,e){Ts++,Lf[Ts]=t.current,t.current=e}var Rr={},yt=Ar(Rr),Ft=Ar(!1),vi=Rr;function ks(t,e){var n=t.type.contextTypes;if(!n)return Rr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Vt(t){return t=t.childContextTypes,t!=null}function xl(){ge(Ft),ge(yt)}function Ww(t,e,n){if(yt.current!==Rr)throw Error(R(168));ke(yt,e),ke(Ft,n)}function Gw(t,e,n){var r=t.stateNode;if(t=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(R(108,cs(e)||"Unknown",i));return _e({},n,r)}function Ol(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Rr,vi=yt.current,ke(yt,t),ke(Ft,Ft.current),!0}function Kw(t,e,n){var r=t.stateNode;if(!r)throw Error(R(169));n?(t=Gw(t,e,vi),r.__reactInternalMemoizedMergedChildContext=t,ge(Ft),ge(yt),ke(yt,t)):ge(Ft),ke(Ft,n)}var Mf=null,wi=null,XC=je.unstable_runWithPriority,$f=je.unstable_scheduleCallback,Uf=je.unstable_cancelCallback,JC=je.unstable_shouldYield,Qw=je.unstable_requestPaint,Ff=je.unstable_now,ZC=je.unstable_getCurrentPriorityLevel,Dl=je.unstable_ImmediatePriority,Yw=je.unstable_UserBlockingPriority,Xw=je.unstable_NormalPriority,Jw=je.unstable_LowPriority,Zw=je.unstable_IdlePriority,Vf={},eA=Qw!==void 0?Qw:function(){},Xn=null,Ll=null,Bf=!1,e0=Ff(),vt=1e4>e0?Ff:function(){return Ff()-e0};function bs(){switch(ZC()){case Dl:return 99;case Yw:return 98;case Xw:return 97;case Jw:return 96;case Zw:return 95;default:throw Error(R(332))}}function t0(t){switch(t){case 99:return Dl;case 98:return Yw;case 97:return Xw;case 96:return Jw;case 95:return Zw;default:throw Error(R(332))}}function _i(t,e){return t=t0(t),XC(t,e)}function ga(t,e,n){return t=t0(t),$f(t,e,n)}function Nn(){if(Ll!==null){var t=Ll;Ll=null,Uf(t)}n0()}function n0(){if(!Bf&&Xn!==null){Bf=!0;var t=0;try{var e=Xn;_i(99,function(){for(;t<e.length;t++){var n=e[t];do n=n(!0);while(n!==null)}}),Xn=null}catch(n){throw Xn!==null&&(Xn=Xn.slice(t+1)),$f(Dl,Nn),n}finally{Bf=!1}}}var tA=fi.ReactCurrentBatchConfig;function En(t,e){if(t&&t.defaultProps){e=_e({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Ml=Ar(null),$l=null,Cs=null,Ul=null;function jf(){Ul=Cs=$l=null}function zf(t){var e=Ml.current;ge(Ml),t.type._context._currentValue=e}function r0(t,e){for(;t!==null;){var n=t.alternate;if((t.childLanes&e)===e){if(n===null||(n.childLanes&e)===e)break;n.childLanes|=e}else t.childLanes|=e,n!==null&&(n.childLanes|=e);t=t.return}}function As(t,e){$l=t,Ul=Cs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&e)!=0&&(In=!0),t.firstContext=null)}function on(t,e){if(Ul!==t&&e!==!1&&e!==0)if((typeof e!="number"||e===1073741823)&&(Ul=t,e=1073741823),e={context:t,observedBits:e,next:null},Cs===null){if($l===null)throw Error(R(308));Cs=e,$l.dependencies={lanes:0,firstContext:e,responders:null}}else Cs=Cs.next=e;return t._currentValue}var Nr=!1;function qf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null},effects:null}}function i0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Pr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function xr(t,e){if(t=t.updateQueue,t!==null){t=t.shared;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}}function s0(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function ya(t,e,n,r){var i=t.updateQueue;Nr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var u=a,l=u.next;u.next=null,o===null?s=l:o.next=l,o=u;var c=t.alternate;if(c!==null){c=c.updateQueue;var h=c.lastBaseUpdate;h!==o&&(h===null?c.firstBaseUpdate=l:h.next=l,c.lastBaseUpdate=u)}}if(s!==null){h=i.baseState,o=0,c=l=u=null;do{a=s.lane;var d=s.eventTime;if((r&a)===a){c!==null&&(c=c.next={eventTime:d,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var g=t,y=s;switch(a=e,d=n,y.tag){case 1:if(g=y.payload,typeof g=="function"){h=g.call(d,h,a);break e}h=g;break e;case 3:g.flags=g.flags&-4097|64;case 0:if(g=y.payload,a=typeof g=="function"?g.call(d,h,a):g,a==null)break e;h=_e({},h,a);break e;case 2:Nr=!0}}s.callback!==null&&(t.flags|=32,a=i.effects,a===null?i.effects=[s]:a.push(s))}else d={eventTime:d,lane:a,tag:s.tag,payload:s.payload,callback:s.callback,next:null},c===null?(l=c=d,u=h):c=c.next=d,o|=a;if(s=s.next,s===null){if(a=i.shared.pending,a===null)break;s=a.next,a.next=null,i.lastBaseUpdate=a,i.shared.pending=null}}while(1);c===null&&(u=h),i.baseState=u,i.firstBaseUpdate=l,i.lastBaseUpdate=c,Ra|=o,t.lanes=o,t.memoizedState=h}}function o0(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(R(191,i));i.call(r)}}}var a0=new ol.Component().refs;function Fl(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:_e({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Vl={isMounted:function(t){return(t=t._reactInternals)?gi(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Kt(),i=Lr(t),s=Pr(r,i);s.payload=e,n!=null&&(s.callback=n),xr(t,s),Mr(t,i,r)},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Kt(),i=Lr(t),s=Pr(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),xr(t,s),Mr(t,i,r)},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Kt(),r=Lr(t),i=Pr(n,r);i.tag=2,e!=null&&(i.callback=e),xr(t,i),Mr(t,r,n)}};function u0(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!ha(n,r)||!ha(i,s):!0}function l0(t,e,n){var r=!1,i=Rr,s=e.contextType;return typeof s=="object"&&s!==null?s=on(s):(i=Vt(e)?vi:yt.current,r=e.contextTypes,s=(r=r!=null)?ks(t,i):Rr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Vl,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function c0(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Vl.enqueueReplaceState(e,e.state,null)}function Hf(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=a0,qf(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=on(s):(s=Vt(e)?vi:yt.current,i.context=ks(t,s)),ya(t,n,i,r),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Fl(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Vl.enqueueReplaceState(i,i.state,null),ya(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4)}var Bl=Array.isArray;function va(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(R(309));var r=n.stateNode}if(!r)throw Error(R(147,t));var i=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===i?e.ref:(e=function(s){var o=r.refs;o===a0&&(o=r.refs={}),s===null?delete o[i]:o[i]=s},e._stringRef=i,e)}if(typeof t!="string")throw Error(R(284));if(!n._owner)throw Error(R(290,t))}return t}function jl(t,e){if(t.type!=="textarea")throw Error(R(31,Object.prototype.toString.call(e)==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":e))}function h0(t){function e(f,p){if(t){var m=f.lastEffect;m!==null?(m.nextEffect=p,f.lastEffect=p):f.firstEffect=f.lastEffect=p,p.nextEffect=null,p.flags=8}}function n(f,p){if(!t)return null;for(;p!==null;)e(f,p),p=p.sibling;return null}function r(f,p){for(f=new Map;p!==null;)p.key!==null?f.set(p.key,p):f.set(p.index,p),p=p.sibling;return f}function i(f,p){return f=Fr(f,p),f.index=0,f.sibling=null,f}function s(f,p,m){return f.index=m,t?(m=f.alternate,m!==null?(m=m.index,m<p?(f.flags=2,p):m):(f.flags=2,p)):p}function o(f){return t&&f.alternate===null&&(f.flags=2),f}function a(f,p,m,w){return p===null||p.tag!==6?(p=Cp(m,f.mode,w),p.return=f,p):(p=i(p,m),p.return=f,p)}function u(f,p,m,w){return p!==null&&p.elementType===m.type?(w=i(p,m.props),w.ref=va(f,p,m),w.return=f,w):(w=oc(m.type,m.key,m.props,null,f.mode,w),w.ref=va(f,p,m),w.return=f,w)}function l(f,p,m,w){return p===null||p.tag!==4||p.stateNode.containerInfo!==m.containerInfo||p.stateNode.implementation!==m.implementation?(p=Ap(m,f.mode,w),p.return=f,p):(p=i(p,m.children||[]),p.return=f,p)}function c(f,p,m,w,v){return p===null||p.tag!==7?(p=Ms(m,f.mode,w,v),p.return=f,p):(p=i(p,m),p.return=f,p)}function h(f,p,m){if(typeof p=="string"||typeof p=="number")return p=Cp(""+p,f.mode,m),p.return=f,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case qo:return m=oc(p.type,p.key,p.props,null,f.mode,m),m.ref=va(f,null,p),m.return=f,m;case pi:return p=Ap(p,f.mode,m),p.return=f,p}if(Bl(p)||Go(p))return p=Ms(p,f.mode,m,null),p.return=f,p;jl(f,p)}return null}function d(f,p,m,w){var v=p!==null?p.key:null;if(typeof m=="string"||typeof m=="number")return v!==null?null:a(f,p,""+m,w);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case qo:return m.key===v?m.type===_r?c(f,p,m.props.children,w,v):u(f,p,m,w):null;case pi:return m.key===v?l(f,p,m,w):null}if(Bl(m)||Go(m))return v!==null?null:c(f,p,m,w,null);jl(f,m)}return null}function g(f,p,m,w,v){if(typeof w=="string"||typeof w=="number")return f=f.get(m)||null,a(p,f,""+w,v);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case qo:return f=f.get(w.key===null?m:w.key)||null,w.type===_r?c(p,f,w.props.children,v,w.key):u(p,f,w,v);case pi:return f=f.get(w.key===null?m:w.key)||null,l(p,f,w,v)}if(Bl(w)||Go(w))return f=f.get(m)||null,c(p,f,w,v,null);jl(p,w)}return null}function y(f,p,m,w){for(var v=null,P=null,C=p,V=p=0,F=null;C!==null&&V<m.length;V++){C.index>V?(F=C,C=null):F=C.sibling;var M=d(f,C,m[V],w);if(M===null){C===null&&(C=F);break}t&&C&&M.alternate===null&&e(f,C),p=s(M,p,V),P===null?v=M:P.sibling=M,P=M,C=F}if(V===m.length)return n(f,C),v;if(C===null){for(;V<m.length;V++)C=h(f,m[V],w),C!==null&&(p=s(C,p,V),P===null?v=C:P.sibling=C,P=C);return v}for(C=r(f,C);V<m.length;V++)F=g(C,f,V,m[V],w),F!==null&&(t&&F.alternate!==null&&C.delete(F.key===null?V:F.key),p=s(F,p,V),P===null?v=F:P.sibling=F,P=F);return t&&C.forEach(function(he){return e(f,he)}),v}function _(f,p,m,w){var v=Go(m);if(typeof v!="function")throw Error(R(150));if(m=v.call(m),m==null)throw Error(R(151));for(var P=v=null,C=p,V=p=0,F=null,M=m.next();C!==null&&!M.done;V++,M=m.next()){C.index>V?(F=C,C=null):F=C.sibling;var he=d(f,C,M.value,w);if(he===null){C===null&&(C=F);break}t&&C&&he.alternate===null&&e(f,C),p=s(he,p,V),P===null?v=he:P.sibling=he,P=he,C=F}if(M.done)return n(f,C),v;if(C===null){for(;!M.done;V++,M=m.next())M=h(f,M.value,w),M!==null&&(p=s(M,p,V),P===null?v=M:P.sibling=M,P=M);return v}for(C=r(f,C);!M.done;V++,M=m.next())M=g(C,f,V,M.value,w),M!==null&&(t&&M.alternate!==null&&C.delete(M.key===null?V:M.key),p=s(M,p,V),P===null?v=M:P.sibling=M,P=M);return t&&C.forEach(function(An){return e(f,An)}),v}return function(f,p,m,w){var v=typeof m=="object"&&m!==null&&m.type===_r&&m.key===null;v&&(m=m.props.children);var P=typeof m=="object"&&m!==null;if(P)switch(m.$$typeof){case qo:e:{for(P=m.key,v=p;v!==null;){if(v.key===P){switch(v.tag){case 7:if(m.type===_r){n(f,v.sibling),p=i(v,m.props.children),p.return=f,f=p;break e}break;default:if(v.elementType===m.type){n(f,v.sibling),p=i(v,m.props),p.ref=va(f,v,m),p.return=f,f=p;break e}}n(f,v);break}else e(f,v);v=v.sibling}m.type===_r?(p=Ms(m.props.children,f.mode,w,m.key),p.return=f,f=p):(w=oc(m.type,m.key,m.props,null,f.mode,w),w.ref=va(f,p,m),w.return=f,f=w)}return o(f);case pi:e:{for(v=m.key;p!==null;){if(p.key===v)if(p.tag===4&&p.stateNode.containerInfo===m.containerInfo&&p.stateNode.implementation===m.implementation){n(f,p.sibling),p=i(p,m.children||[]),p.return=f,f=p;break e}else{n(f,p);break}else e(f,p);p=p.sibling}p=Ap(m,f.mode,w),p.return=f,f=p}return o(f)}if(typeof m=="string"||typeof m=="number")return m=""+m,p!==null&&p.tag===6?(n(f,p.sibling),p=i(p,m),p.return=f,f=p):(n(f,p),p=Cp(m,f.mode,w),p.return=f,f=p),o(f);if(Bl(m))return y(f,p,m,w);if(Go(m))return _(f,p,m,w);if(P&&jl(f,m),typeof m=="undefined"&&!v)switch(f.tag){case 1:case 22:case 0:case 11:case 15:throw Error(R(152,cs(f.type)||"Component"))}return n(f,p)}}var zl=h0(!0),d0=h0(!1),wa={},Pn=Ar(wa),_a=Ar(wa),Ea=Ar(wa);function Ei(t){if(t===wa)throw Error(R(174));return t}function Wf(t,e){switch(ke(Ea,e),ke(_a,t),ke(Pn,wa),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Yd(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Yd(e,t)}ge(Pn),ke(Pn,e)}function Rs(){ge(Pn),ge(_a),ge(Ea)}function f0(t){Ei(Ea.current);var e=Ei(Pn.current),n=Yd(e,t.type);e!==n&&(ke(_a,t),ke(Pn,n))}function Gf(t){_a.current===t&&(ge(Pn),ge(_a))}var be=Ar(0);function ql(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&64)!=0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Jn=null,Or=null,xn=!1;function p0(t,e){var n=ln(5,null,null,0);n.elementType="DELETED",n.type="DELETED",n.stateNode=e,n.return=t,n.flags=8,t.lastEffect!==null?(t.lastEffect.nextEffect=n,t.lastEffect=n):t.firstEffect=t.lastEffect=n}function m0(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,!0):!1;case 13:return!1;default:return!1}}function Kf(t){if(xn){var e=Or;if(e){var n=e;if(!m0(t,e)){if(e=Es(n.nextSibling),!e||!m0(t,e)){t.flags=t.flags&-1025|2,xn=!1,Jn=t;return}p0(Jn,n)}Jn=t,Or=Es(e.firstChild)}else t.flags=t.flags&-1025|2,xn=!1,Jn=t}}function g0(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Jn=t}function Hl(t){if(t!==Jn)return!1;if(!xn)return g0(t),xn=!0,!1;var e=t.type;if(t.tag!==5||e!=="head"&&e!=="body"&&!xf(e,t.memoizedProps))for(e=Or;e;)p0(t,e),e=Es(e.nextSibling);if(g0(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(R(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Or=Es(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Or=null}}else Or=Jn?Es(t.stateNode.nextSibling):null;return!0}function Qf(){Or=Jn=null,xn=!1}var Ns=[];function Yf(){for(var t=0;t<Ns.length;t++)Ns[t]._workInProgressVersionPrimary=null;Ns.length=0}var Ia=fi.ReactCurrentDispatcher,an=fi.ReactCurrentBatchConfig,Sa=0,Pe=null,wt=null,it=null,Wl=!1,Ta=!1;function Bt(){throw Error(R(321))}function Xf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!sn(t[n],e[n]))return!1;return!0}function Jf(t,e,n,r,i,s){if(Sa=s,Pe=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ia.current=t===null||t.memoizedState===null?rA:iA,t=n(r,i),Ta){s=0;do{if(Ta=!1,!(25>s))throw Error(R(301));s+=1,it=wt=null,e.updateQueue=null,Ia.current=sA,t=n(r,i)}while(Ta)}if(Ia.current=Yl,e=wt!==null&&wt.next!==null,Sa=0,it=wt=Pe=null,Wl=!1,e)throw Error(R(300));return t}function Ii(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return it===null?Pe.memoizedState=it=t:it=it.next=t,it}function Si(){if(wt===null){var t=Pe.alternate;t=t!==null?t.memoizedState:null}else t=wt.next;var e=it===null?Pe.memoizedState:it.next;if(e!==null)it=e,wt=t;else{if(t===null)throw Error(R(310));wt=t,t={memoizedState:wt.memoizedState,baseState:wt.baseState,baseQueue:wt.baseQueue,queue:wt.queue,next:null},it===null?Pe.memoizedState=it=t:it=it.next=t}return it}function On(t,e){return typeof e=="function"?e(t):e}function ka(t){var e=Si(),n=e.queue;if(n===null)throw Error(R(311));n.lastRenderedReducer=t;var r=wt,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){i=i.next,r=r.baseState;var a=o=s=null,u=i;do{var l=u.lane;if((Sa&l)===l)a!==null&&(a=a.next={lane:0,action:u.action,eagerReducer:u.eagerReducer,eagerState:u.eagerState,next:null}),r=u.eagerReducer===t?u.eagerState:t(r,u.action);else{var c={lane:l,action:u.action,eagerReducer:u.eagerReducer,eagerState:u.eagerState,next:null};a===null?(o=a=c,s=r):a=a.next=c,Pe.lanes|=l,Ra|=l}u=u.next}while(u!==null&&u!==i);a===null?s=r:a.next=o,sn(r,e.memoizedState)||(In=!0),e.memoizedState=r,e.baseState=s,e.baseQueue=a,n.lastRenderedState=r}return[e.memoizedState,n.dispatch]}function ba(t){var e=Si(),n=e.queue;if(n===null)throw Error(R(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);sn(s,e.memoizedState)||(In=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function y0(t,e,n){var r=e._getVersion;r=r(e._source);var i=e._workInProgressVersionPrimary;if(i!==null?t=i===r:(t=t.mutableReadLanes,(t=(Sa&t)===t)&&(e._workInProgressVersionPrimary=r,Ns.push(e))),t)return n(e._source);throw Ns.push(e),Error(R(350))}function v0(t,e,n,r){var i=Rt;if(i===null)throw Error(R(349));var s=e._getVersion,o=s(e._source),a=Ia.current,u=a.useState(function(){return y0(i,e,n)}),l=u[1],c=u[0];u=it;var h=t.memoizedState,d=h.refs,g=d.getSnapshot,y=h.source;h=h.subscribe;var _=Pe;return t.memoizedState={refs:d,source:e,subscribe:r},a.useEffect(function(){d.getSnapshot=n,d.setSnapshot=l;var f=s(e._source);if(!sn(o,f)){f=n(e._source),sn(c,f)||(l(f),f=Lr(_),i.mutableReadLanes|=f&i.pendingLanes),f=i.mutableReadLanes,i.entangledLanes|=f;for(var p=i.entanglements,m=f;0<m;){var w=31-kr(m),v=1<<w;p[w]|=f,m&=~v}}},[n,e,r]),a.useEffect(function(){return r(e._source,function(){var f=d.getSnapshot,p=d.setSnapshot;try{p(f(e._source));var m=Lr(_);i.mutableReadLanes|=m&i.pendingLanes}catch(w){p(function(){throw w})}})},[e,r]),sn(g,n)&&sn(y,e)&&sn(h,r)||(t={pending:null,dispatch:null,lastRenderedReducer:On,lastRenderedState:c},t.dispatch=l=np.bind(null,Pe,t),u.queue=t,u.baseQueue=null,c=y0(i,e,n),u.memoizedState=u.baseState=c),c}function w0(t,e,n){var r=Si();return v0(r,t,e,n)}function Ca(t){var e=Ii();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t=e.queue={pending:null,dispatch:null,lastRenderedReducer:On,lastRenderedState:t},t=t.dispatch=np.bind(null,Pe,t),[e.memoizedState,t]}function Gl(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Pe.updateQueue,e===null?(e={lastEffect:null},Pe.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function _0(t){var e=Ii();return t={current:t},e.memoizedState=t}function Kl(){return Si().memoizedState}function Zf(t,e,n,r){var i=Ii();Pe.flags|=t,i.memoizedState=Gl(1|e,n,void 0,r===void 0?null:r)}function ep(t,e,n,r){var i=Si();r=r===void 0?null:r;var s=void 0;if(wt!==null){var o=wt.memoizedState;if(s=o.destroy,r!==null&&Xf(r,o.deps)){Gl(e,n,s,r);return}}Pe.flags|=t,i.memoizedState=Gl(1|e,n,s,r)}function E0(t,e){return Zf(516,4,t,e)}function Ql(t,e){return ep(516,4,t,e)}function I0(t,e){return ep(4,2,t,e)}function S0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function T0(t,e,n){return n=n!=null?n.concat([t]):null,ep(4,2,S0.bind(null,e,t),n)}function tp(){}function k0(t,e){var n=Si();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Xf(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function b0(t,e){var n=Si();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Xf(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function nA(t,e){var n=bs();_i(98>n?98:n,function(){t(!0)}),_i(97<n?97:n,function(){var r=an.transition;an.transition=1;try{t(!1),e()}finally{an.transition=r}})}function np(t,e,n){var r=Kt(),i=Lr(t),s={lane:i,action:n,eagerReducer:null,eagerState:null,next:null},o=e.pending;if(o===null?s.next=s:(s.next=o.next,o.next=s),e.pending=s,o=t.alternate,t===Pe||o!==null&&o===Pe)Ta=Wl=!0;else{if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var a=e.lastRenderedState,u=o(a,n);if(s.eagerReducer=o,s.eagerState=u,sn(u,a))return}catch{}finally{}Mr(t,i,r)}}var Yl={readContext:on,useCallback:Bt,useContext:Bt,useEffect:Bt,useImperativeHandle:Bt,useLayoutEffect:Bt,useMemo:Bt,useReducer:Bt,useRef:Bt,useState:Bt,useDebugValue:Bt,useDeferredValue:Bt,useTransition:Bt,useMutableSource:Bt,useOpaqueIdentifier:Bt,unstable_isNewReconciler:!1},rA={readContext:on,useCallback:function(t,e){return Ii().memoizedState=[t,e===void 0?null:e],t},useContext:on,useEffect:E0,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Zf(4,2,S0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Zf(4,2,t,e)},useMemo:function(t,e){var n=Ii();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Ii();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t=r.queue={pending:null,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},t=t.dispatch=np.bind(null,Pe,t),[r.memoizedState,t]},useRef:_0,useState:Ca,useDebugValue:tp,useDeferredValue:function(t){var e=Ca(t),n=e[0],r=e[1];return E0(function(){var i=an.transition;an.transition=1;try{r(t)}finally{an.transition=i}},[t]),n},useTransition:function(){var t=Ca(!1),e=t[0];return t=nA.bind(null,t[1]),_0(t),[t,e]},useMutableSource:function(t,e,n){var r=Ii();return r.memoizedState={refs:{getSnapshot:e,setSnapshot:null},source:t,subscribe:n},v0(r,t,e,n)},useOpaqueIdentifier:function(){if(xn){var t=!1,e=YC(function(){throw t||(t=!0,n("r:"+(Df++).toString(36))),Error(R(355))}),n=Ca(e)[1];return(Pe.mode&2)==0&&(Pe.flags|=516,Gl(5,function(){n("r:"+(Df++).toString(36))},void 0,null)),e}return e="r:"+(Df++).toString(36),Ca(e),e},unstable_isNewReconciler:!1},iA={readContext:on,useCallback:k0,useContext:on,useEffect:Ql,useImperativeHandle:T0,useLayoutEffect:I0,useMemo:b0,useReducer:ka,useRef:Kl,useState:function(){return ka(On)},useDebugValue:tp,useDeferredValue:function(t){var e=ka(On),n=e[0],r=e[1];return Ql(function(){var i=an.transition;an.transition=1;try{r(t)}finally{an.transition=i}},[t]),n},useTransition:function(){var t=ka(On)[0];return[Kl().current,t]},useMutableSource:w0,useOpaqueIdentifier:function(){return ka(On)[0]},unstable_isNewReconciler:!1},sA={readContext:on,useCallback:k0,useContext:on,useEffect:Ql,useImperativeHandle:T0,useLayoutEffect:I0,useMemo:b0,useReducer:ba,useRef:Kl,useState:function(){return ba(On)},useDebugValue:tp,useDeferredValue:function(t){var e=ba(On),n=e[0],r=e[1];return Ql(function(){var i=an.transition;an.transition=1;try{r(t)}finally{an.transition=i}},[t]),n},useTransition:function(){var t=ba(On)[0];return[Kl().current,t]},useMutableSource:w0,useOpaqueIdentifier:function(){return ba(On)[0]},unstable_isNewReconciler:!1},oA=fi.ReactCurrentOwner,In=!1;function jt(t,e,n,r){e.child=t===null?d0(e,null,n,r):zl(e,t.child,n,r)}function C0(t,e,n,r,i){n=n.render;var s=e.ref;return As(e,i),r=Jf(t,e,n,r,s,i),t!==null&&!In?(e.updateQueue=t.updateQueue,e.flags&=-517,t.lanes&=~i,Zn(t,e,i)):(e.flags|=1,jt(t,e,r,i),e.child)}function A0(t,e,n,r,i,s){if(t===null){var o=n.type;return typeof o=="function"&&!kp(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=o,R0(t,e,o,r,i,s)):(t=oc(n.type,null,r,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}return o=t.child,(i&s)==0&&(i=o.memoizedProps,n=n.compare,n=n!==null?n:ha,n(i,r)&&t.ref===e.ref)?Zn(t,e,s):(e.flags|=1,t=Fr(o,r),t.ref=e.ref,t.return=e,e.child=t)}function R0(t,e,n,r,i,s){if(t!==null&&ha(t.memoizedProps,r)&&t.ref===e.ref)if(In=!1,(s&i)!=0)(t.flags&16384)!=0&&(In=!0);else return e.lanes=t.lanes,Zn(t,e,s);return ip(t,e,n,r,s)}function rp(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden"||r.mode==="unstable-defer-without-hiding")if((e.mode&4)==0)e.memoizedState={baseLanes:0},sc(e,n);else if((n&1073741824)!=0)e.memoizedState={baseLanes:0},sc(e,s!==null?s.baseLanes:n);else return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t},sc(e,t),null;else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,sc(e,r);return jt(t,e,i,n),e.child}function N0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=128)}function ip(t,e,n,r,i){var s=Vt(n)?vi:yt.current;return s=ks(e,s),As(e,i),n=Jf(t,e,n,r,s,i),t!==null&&!In?(e.updateQueue=t.updateQueue,e.flags&=-517,t.lanes&=~i,Zn(t,e,i)):(e.flags|=1,jt(t,e,n,i),e.child)}function P0(t,e,n,r,i){if(Vt(n)){var s=!0;Ol(e)}else s=!1;if(As(e,i),e.stateNode===null)t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2),l0(e,n,r),Hf(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var u=o.context,l=n.contextType;typeof l=="object"&&l!==null?l=on(l):(l=Vt(n)?vi:yt.current,l=ks(e,l));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||u!==l)&&c0(e,o,r,l),Nr=!1;var d=e.memoizedState;o.state=d,ya(e,r,o,i),u=e.memoizedState,a!==r||d!==u||Ft.current||Nr?(typeof c=="function"&&(Fl(e,n,c,r),u=e.memoizedState),(a=Nr||u0(e,n,a,r,d,u,l))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4)):(typeof o.componentDidMount=="function"&&(e.flags|=4),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=l,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4),r=!1)}else{o=e.stateNode,i0(t,e),a=e.memoizedProps,l=e.type===e.elementType?a:En(e.type,a),o.props=l,h=e.pendingProps,d=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=on(u):(u=Vt(n)?vi:yt.current,u=ks(e,u));var g=n.getDerivedStateFromProps;(c=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==u)&&c0(e,o,r,u),Nr=!1,d=e.memoizedState,o.state=d,ya(e,r,o,i);var y=e.memoizedState;a!==h||d!==y||Ft.current||Nr?(typeof g=="function"&&(Fl(e,n,g,r),y=e.memoizedState),(l=Nr||u0(e,n,l,r,d,y,u))?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=256)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=256),e.memoizedProps=r,e.memoizedState=y),o.props=r,o.state=y,o.context=u,r=l):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=256),r=!1)}return sp(t,e,n,r,s,i)}function sp(t,e,n,r,i,s){N0(t,e);var o=(e.flags&64)!=0;if(!r&&!o)return i&&Kw(e,n,!1),Zn(t,e,s);r=e.stateNode,oA.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=zl(e,t.child,null,s),e.child=zl(e,null,a,s)):jt(t,e,a,s),e.memoizedState=r.state,i&&Kw(e,n,!0),e.child}function x0(t){var e=t.stateNode;e.pendingContext?Ww(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Ww(t,e.context,!1),Wf(t,e.containerInfo)}var Xl={dehydrated:null,retryLane:0};function O0(t,e,n){var r=e.pendingProps,i=be.current,s=!1,o;return(o=(e.flags&64)!=0)||(o=t!==null&&t.memoizedState===null?!1:(i&2)!=0),o?(s=!0,e.flags&=-65):t!==null&&t.memoizedState===null||r.fallback===void 0||r.unstable_avoidThisFallback===!0||(i|=1),ke(be,i&1),t===null?(r.fallback!==void 0&&Kf(e),t=r.children,i=r.fallback,s?(t=D0(e,t,i,n),e.child.memoizedState={baseLanes:n},e.memoizedState=Xl,t):typeof r.unstable_expectedLoadTime=="number"?(t=D0(e,t,i,n),e.child.memoizedState={baseLanes:n},e.memoizedState=Xl,e.lanes=33554432,t):(n=bp({mode:"visible",children:t},e.mode,n,null),n.return=e,e.child=n)):t.memoizedState!==null?s?(r=M0(t,e,r.children,r.fallback,n),s=e.child,i=t.child.memoizedState,s.memoizedState=i===null?{baseLanes:n}:{baseLanes:i.baseLanes|n},s.childLanes=t.childLanes&~n,e.memoizedState=Xl,r):(n=L0(t,e,r.children,n),e.memoizedState=null,n):s?(r=M0(t,e,r.children,r.fallback,n),s=e.child,i=t.child.memoizedState,s.memoizedState=i===null?{baseLanes:n}:{baseLanes:i.baseLanes|n},s.childLanes=t.childLanes&~n,e.memoizedState=Xl,r):(n=L0(t,e,r.children,n),e.memoizedState=null,n)}function D0(t,e,n,r){var i=t.mode,s=t.child;return e={mode:"hidden",children:e},(i&2)==0&&s!==null?(s.childLanes=0,s.pendingProps=e):s=bp(e,i,0,null),n=Ms(n,i,r,null),s.return=t,n.return=t,s.sibling=n,t.child=s,n}function L0(t,e,n,r){var i=t.child;return t=i.sibling,n=Fr(i,{mode:"visible",children:n}),(e.mode&2)==0&&(n.lanes=r),n.return=e,n.sibling=null,t!==null&&(t.nextEffect=null,t.flags=8,e.firstEffect=e.lastEffect=t),e.child=n}function M0(t,e,n,r,i){var s=e.mode,o=t.child;t=o.sibling;var a={mode:"hidden",children:n};return(s&2)==0&&e.child!==o?(n=e.child,n.childLanes=0,n.pendingProps=a,o=n.lastEffect,o!==null?(e.firstEffect=n.firstEffect,e.lastEffect=o,o.nextEffect=null):e.firstEffect=e.lastEffect=null):n=Fr(o,a),t!==null?r=Fr(t,r):(r=Ms(r,s,i,null),r.flags|=2),r.return=e,n.return=e,n.sibling=r,e.child=n,r}function $0(t,e){t.lanes|=e;var n=t.alternate;n!==null&&(n.lanes|=e),r0(t.return,e)}function op(t,e,n,r,i,s){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,lastEffect:s}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.lastEffect=s)}function U0(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(jt(t,e,r.children,n),r=be.current,(r&2)!=0)r=r&1|2,e.flags|=64;else{if(t!==null&&(t.flags&64)!=0)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&$0(t,n);else if(t.tag===19)$0(t,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ke(be,r),(e.mode&2)==0)e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&ql(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),op(e,!1,i,n,s,e.lastEffect);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&ql(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}op(e,!0,n,null,s,e.lastEffect);break;case"together":op(e,!1,null,null,void 0,e.lastEffect);break;default:e.memoizedState=null}return e.child}function Zn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Ra|=e.lanes,(n&e.childLanes)!=0){if(t!==null&&e.child!==t.child)throw Error(R(153));if(e.child!==null){for(t=e.child,n=Fr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Fr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}return null}var F0,ap,V0,B0;F0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ap=function(){};V0=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Ei(Pn.current);var s=null;switch(n){case"input":i=qd(t,i),r=qd(t,r),s=[];break;case"option":i=Gd(t,i),r=Gd(t,r),s=[];break;case"select":i=_e({},i,{value:void 0}),r=_e({},r,{value:void 0}),s=[];break;case"textarea":i=Kd(t,i),r=Kd(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Al)}Xd(n,r);var o;n=null;for(l in i)if(!r.hasOwnProperty(l)&&i.hasOwnProperty(l)&&i[l]!=null)if(l==="style"){var a=i[l];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else l!=="dangerouslySetInnerHTML"&&l!=="children"&&l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(zo.hasOwnProperty(l)?s||(s=[]):(s=s||[]).push(l,null));for(l in r){var u=r[l];if(a=i!=null?i[l]:void 0,r.hasOwnProperty(l)&&u!==a&&(u!=null||a!=null))if(l==="style")if(a){for(o in a)!a.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&a[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(l,n)),n=u;else l==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(s=s||[]).push(l,u)):l==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(l,""+u):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&(zo.hasOwnProperty(l)?(u!=null&&l==="onScroll"&&me("scroll",t),s||a===u||(s=[])):typeof u=="object"&&u!==null&&u.$$typeof===Fd?u.toString():(s=s||[]).push(l,u))}n&&(s=s||[]).push("style",n);var l=s;(e.updateQueue=l)&&(e.flags|=4)}};B0=function(t,e,n,r){n!==r&&(e.flags|=4)};function Aa(t,e){if(!xn)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function aA(t,e,n){var r=e.pendingProps;switch(e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return null;case 1:return Vt(e.type)&&xl(),null;case 3:return Rs(),ge(Ft),ge(yt),Yf(),r=e.stateNode,r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Hl(e)?e.flags|=4:r.hydrate||(e.flags|=256)),ap(e),null;case 5:Gf(e);var i=Ei(Ea.current);if(n=e.type,t!==null&&e.stateNode!=null)V0(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=128);else{if(!r){if(e.stateNode===null)throw Error(R(166));return null}if(t=Ei(Pn.current),Hl(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Cr]=e,r[Nl]=s,n){case"dialog":me("cancel",r),me("close",r);break;case"iframe":case"object":case"embed":me("load",r);break;case"video":case"audio":for(t=0;t<fa.length;t++)me(fa[t],r);break;case"source":me("error",r);break;case"img":case"image":case"link":me("error",r),me("load",r);break;case"details":me("toggle",r);break;case"input":Pv(r,s),me("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},me("invalid",r);break;case"textarea":Dv(r,s),me("invalid",r)}Xd(n,s),t=null;for(var o in s)s.hasOwnProperty(o)&&(i=s[o],o==="children"?typeof i=="string"?r.textContent!==i&&(t=["children",i]):typeof i=="number"&&r.textContent!==""+i&&(t=["children",""+i]):zo.hasOwnProperty(o)&&i!=null&&o==="onScroll"&&me("scroll",r));switch(n){case"input":hl(r),Ov(r,s,!0);break;case"textarea":hl(r),Mv(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Al)}r=t,e.updateQueue=r,r!==null&&(e.flags|=4)}else{switch(o=i.nodeType===9?i:i.ownerDocument,t===Qd.html&&(t=$v(n)),t===Qd.html?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Cr]=e,t[Nl]=r,F0(t,e,!1,!1),e.stateNode=t,o=Jd(n,r),n){case"dialog":me("cancel",t),me("close",t),i=r;break;case"iframe":case"object":case"embed":me("load",t),i=r;break;case"video":case"audio":for(i=0;i<fa.length;i++)me(fa[i],t);i=r;break;case"source":me("error",t),i=r;break;case"img":case"image":case"link":me("error",t),me("load",t),i=r;break;case"details":me("toggle",t),i=r;break;case"input":Pv(t,r),i=qd(t,r),me("invalid",t);break;case"option":i=Gd(t,r);break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=_e({},r,{value:void 0}),me("invalid",t);break;case"textarea":Dv(t,r),i=Kd(t,r),me("invalid",t);break;default:i=r}Xd(n,i);var a=i;for(s in a)if(a.hasOwnProperty(s)){var u=a[s];s==="style"?Vv(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Uv(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Qo(t,u):typeof u=="number"&&Qo(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(zo.hasOwnProperty(s)?u!=null&&s==="onScroll"&&me("scroll",t):u!=null&&Od(t,s,u,o))}switch(n){case"input":hl(t),Ov(t,r,!1);break;case"textarea":hl(t),Mv(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Er(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?hs(t,!!r.multiple,s,!1):r.defaultValue!=null&&hs(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Al)}Bw(n,r)&&(e.flags|=4)}e.ref!==null&&(e.flags|=128)}return null;case 6:if(t&&e.stateNode!=null)B0(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(R(166));n=Ei(Ea.current),Ei(Pn.current),Hl(e)?(r=e.stateNode,n=e.memoizedProps,r[Cr]=e,r.nodeValue!==n&&(e.flags|=4)):(r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Cr]=e,e.stateNode=r)}return null;case 13:return ge(be),r=e.memoizedState,(e.flags&64)!=0?(e.lanes=n,e):(r=r!==null,n=!1,t===null?e.memoizedProps.fallback!==void 0&&Hl(e):n=t.memoizedState!==null,r&&!n&&(e.mode&2)!=0&&(t===null&&e.memoizedProps.unstable_avoidThisFallback!==!0||(be.current&1)!=0?st===0&&(st=3):((st===0||st===3)&&(st=4),Rt===null||(Ra&134217727)==0&&(xs&134217727)==0||Ds(Rt,_t))),(r||n)&&(e.flags|=4),null);case 4:return Rs(),ap(e),t===null&&Mw(e.stateNode.containerInfo),null;case 10:return zf(e),null;case 17:return Vt(e.type)&&xl(),null;case 19:if(ge(be),r=e.memoizedState,r===null)return null;if(s=(e.flags&64)!=0,o=r.rendering,o===null)if(s)Aa(r,!1);else{if(st!==0||t!==null&&(t.flags&64)!=0)for(t=e.child;t!==null;){if(o=ql(t),o!==null){for(e.flags|=64,Aa(r,!1),s=o.updateQueue,s!==null&&(e.updateQueue=s,e.flags|=4),r.lastEffect===null&&(e.firstEffect=null),e.lastEffect=r.lastEffect,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=2,s.nextEffect=null,s.firstEffect=null,s.lastEffect=null,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ke(be,be.current&1|2),e.child}t=t.sibling}r.tail!==null&&vt()>vp&&(e.flags|=64,s=!0,Aa(r,!1),e.lanes=33554432)}else{if(!s)if(t=ql(o),t!==null){if(e.flags|=64,s=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Aa(r,!0),r.tail===null&&r.tailMode==="hidden"&&!o.alternate&&!xn)return e=e.lastEffect=r.lastEffect,e!==null&&(e.nextEffect=null),null}else 2*vt()-r.renderingStartTime>vp&&n!==1073741824&&(e.flags|=64,s=!0,Aa(r,!1),e.lanes=33554432);r.isBackwards?(o.sibling=e.child,e.child=o):(n=r.last,n!==null?n.sibling=o:e.child=o,r.last=o)}return r.tail!==null?(n=r.tail,r.rendering=n,r.tail=n.sibling,r.lastEffect=e.lastEffect,r.renderingStartTime=vt(),n.sibling=null,e=be.current,ke(be,s?e&1|2:e&1),n):null;case 23:case 24:return Tp(),t!==null&&t.memoizedState!==null!=(e.memoizedState!==null)&&r.mode!=="unstable-defer-without-hiding"&&(e.flags|=4),null}throw Error(R(156,e.tag))}function uA(t){switch(t.tag){case 1:Vt(t.type)&&xl();var e=t.flags;return e&4096?(t.flags=e&-4097|64,t):null;case 3:if(Rs(),ge(Ft),ge(yt),Yf(),e=t.flags,(e&64)!=0)throw Error(R(285));return t.flags=e&-4097|64,t;case 5:return Gf(t),null;case 13:return ge(be),e=t.flags,e&4096?(t.flags=e&-4097|64,t):null;case 19:return ge(be),null;case 4:return Rs(),null;case 10:return zf(t),null;case 23:case 24:return Tp(),null;default:return null}}function up(t,e){try{var n="",r=e;do n+=jb(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i}}function lp(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var lA=typeof WeakMap=="function"?WeakMap:Map;function j0(t,e,n){n=Pr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){ec||(ec=!0,wp=r),lp(t,e)},n}function z0(t,e,n){n=Pr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return lp(t,e),r(i)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){typeof r!="function"&&(Dn===null?Dn=new Set([this]):Dn.add(this),lp(t,e));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}var cA=typeof WeakSet=="function"?WeakSet:Set;function q0(t){var e=t.ref;if(e!==null)if(typeof e=="function")try{e(null)}catch(n){Ur(t,n)}else e.current=null}function hA(t,e){switch(e.tag){case 0:case 11:case 15:case 22:return;case 1:if(e.flags&256&&t!==null){var n=t.memoizedProps,r=t.memoizedState;t=e.stateNode,e=t.getSnapshotBeforeUpdate(e.elementType===e.type?n:En(e.type,n),r),t.__reactInternalSnapshotBeforeUpdate=e}return;case 3:e.flags&256&&Of(e.stateNode.containerInfo);return;case 5:case 6:case 4:case 17:return}throw Error(R(163))}function dA(t,e,n){switch(n.tag){case 0:case 11:case 15:case 22:if(e=n.updateQueue,e=e!==null?e.lastEffect:null,e!==null){t=e=e.next;do{if((t.tag&3)==3){var r=t.create;t.destroy=r()}t=t.next}while(t!==e)}if(e=n.updateQueue,e=e!==null?e.lastEffect:null,e!==null){t=e=e.next;do{var i=t;r=i.next,i=i.tag,(i&4)!=0&&(i&1)!=0&&(s_(n,t),_A(n,t)),t=r}while(t!==e)}return;case 1:t=n.stateNode,n.flags&4&&(e===null?t.componentDidMount():(r=n.elementType===n.type?e.memoizedProps:En(n.type,e.memoizedProps),t.componentDidUpdate(r,e.memoizedState,t.__reactInternalSnapshotBeforeUpdate))),e=n.updateQueue,e!==null&&o0(n,e,t);return;case 3:if(e=n.updateQueue,e!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}o0(n,e,t)}return;case 5:t=n.stateNode,e===null&&n.flags&4&&Bw(n.type,n.memoizedProps)&&t.focus();return;case 6:return;case 4:return;case 12:return;case 13:n.memoizedState===null&&(n=n.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&nw(n))));return;case 19:case 17:case 20:case 21:case 23:case 24:return}throw Error(R(163))}function H0(t,e){for(var n=t;;){if(n.tag===5){var r=n.stateNode;if(e)r=r.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none";else{r=n.stateNode;var i=n.memoizedProps.style;i=i!=null&&i.hasOwnProperty("display")?i.display:null,r.style.display=Fv("display",i)}}else if(n.tag===6)n.stateNode.nodeValue=e?"":n.memoizedProps;else if((n.tag!==23&&n.tag!==24||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}}function W0(t,e){if(wi&&typeof wi.onCommitFiberUnmount=="function")try{wi.onCommitFiberUnmount(Mf,e)}catch{}switch(e.tag){case 0:case 11:case 14:case 15:case 22:if(t=e.updateQueue,t!==null&&(t=t.lastEffect,t!==null)){var n=t=t.next;do{var r=n,i=r.destroy;if(r=r.tag,i!==void 0)if((r&4)!=0)s_(e,n);else{r=e;try{i()}catch(s){Ur(r,s)}}n=n.next}while(n!==t)}break;case 1:if(q0(e),t=e.stateNode,typeof t.componentWillUnmount=="function")try{t.props=e.memoizedProps,t.state=e.memoizedState,t.componentWillUnmount()}catch(s){Ur(e,s)}break;case 5:q0(e);break;case 4:Y0(t,e)}}function G0(t){t.alternate=null,t.child=null,t.dependencies=null,t.firstEffect=null,t.lastEffect=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.return=null,t.updateQueue=null}function K0(t){return t.tag===5||t.tag===3||t.tag===4}function Q0(t){e:{for(var e=t.return;e!==null;){if(K0(e))break e;e=e.return}throw Error(R(160))}var n=e;switch(e=n.stateNode,n.tag){case 5:var r=!1;break;case 3:e=e.containerInfo,r=!0;break;case 4:e=e.containerInfo,r=!0;break;default:throw Error(R(161))}n.flags&16&&(Qo(e,""),n.flags&=-17);e:t:for(n=t;;){for(;n.sibling===null;){if(n.return===null||K0(n.return)){n=null;break e}n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue t;n.child.return=n,n=n.child}if(!(n.flags&2)){n=n.stateNode;break e}}r?cp(t,n,e):hp(t,n,e)}function cp(t,e,n){var r=t.tag,i=r===5||r===6;if(i)t=i?t.stateNode:t.stateNode.instance,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Al));else if(r!==4&&(t=t.child,t!==null))for(cp(t,e,n),t=t.sibling;t!==null;)cp(t,e,n),t=t.sibling}function hp(t,e,n){var r=t.tag,i=r===5||r===6;if(i)t=i?t.stateNode:t.stateNode.instance,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(hp(t,e,n),t=t.sibling;t!==null;)hp(t,e,n),t=t.sibling}function Y0(t,e){for(var n=e,r=!1,i,s;;){if(!r){r=n.return;e:for(;;){if(r===null)throw Error(R(160));switch(i=r.stateNode,r.tag){case 5:s=!1;break e;case 3:i=i.containerInfo,s=!0;break e;case 4:i=i.containerInfo,s=!0;break e}r=r.return}r=!0}if(n.tag===5||n.tag===6){e:for(var o=t,a=n,u=a;;)if(W0(o,u),u.child!==null&&u.tag!==4)u.child.return=u,u=u.child;else{if(u===a)break e;for(;u.sibling===null;){if(u.return===null||u.return===a)break e;u=u.return}u.sibling.return=u.return,u=u.sibling}s?(o=i,a=n.stateNode,o.nodeType===8?o.parentNode.removeChild(a):o.removeChild(a)):i.removeChild(n.stateNode)}else if(n.tag===4){if(n.child!==null){i=n.stateNode.containerInfo,s=!0,n.child.return=n,n=n.child;continue}}else if(W0(t,n),n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return,n.tag===4&&(r=!1)}n.sibling.return=n.return,n=n.sibling}}function dp(t,e){switch(e.tag){case 0:case 11:case 14:case 15:case 22:var n=e.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var r=n=n.next;do(r.tag&3)==3&&(t=r.destroy,r.destroy=void 0,t!==void 0&&t()),r=r.next;while(r!==n)}return;case 1:return;case 5:if(n=e.stateNode,n!=null){r=e.memoizedProps;var i=t!==null?t.memoizedProps:r;t=e.type;var s=e.updateQueue;if(e.updateQueue=null,s!==null){for(n[Nl]=r,t==="input"&&r.type==="radio"&&r.name!=null&&xv(n,r),Jd(t,i),e=Jd(t,r),i=0;i<s.length;i+=2){var o=s[i],a=s[i+1];o==="style"?Vv(n,a):o==="dangerouslySetInnerHTML"?Uv(n,a):o==="children"?Qo(n,a):Od(n,o,a,e)}switch(t){case"input":Hd(n,r);break;case"textarea":Lv(n,r);break;case"select":t=n._wrapperState.wasMultiple,n._wrapperState.wasMultiple=!!r.multiple,s=r.value,s!=null?hs(n,!!r.multiple,s,!1):t!==!!r.multiple&&(r.defaultValue!=null?hs(n,!!r.multiple,r.defaultValue,!0):hs(n,!!r.multiple,r.multiple?[]:"",!1))}}}return;case 6:if(e.stateNode===null)throw Error(R(162));e.stateNode.nodeValue=e.memoizedProps;return;case 3:n=e.stateNode,n.hydrate&&(n.hydrate=!1,nw(n.containerInfo));return;case 12:return;case 13:e.memoizedState!==null&&(yp=vt(),H0(e.child,!0)),X0(e);return;case 19:X0(e);return;case 17:return;case 23:case 24:H0(e,e.memoizedState!==null);return}throw Error(R(163))}function X0(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new cA),e.forEach(function(r){var i=SA.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function fA(t,e){return t!==null&&(t=t.memoizedState,t===null||t.dehydrated!==null)?(e=e.memoizedState,e!==null&&e.dehydrated===null):!1}var pA=Math.ceil,Jl=fi.ReactCurrentDispatcher,fp=fi.ReactCurrentOwner,W=0,Rt=null,Ue=null,_t=0,Ti=0,pp=Ar(0),st=0,Zl=null,Ps=0,Ra=0,xs=0,mp=0,gp=null,yp=0,vp=1/0;function Os(){vp=vt()+500}var U=null,ec=!1,wp=null,Dn=null,Dr=!1,Na=null,Pa=90,_p=[],Ep=[],er=null,xa=0,Ip=null,tc=-1,tr=0,nc=0,Oa=null,rc=!1;function Kt(){return(W&48)!=0?vt():tc!==-1?tc:tc=vt()}function Lr(t){if(t=t.mode,(t&2)==0)return 1;if((t&4)==0)return bs()===99?1:2;if(tr===0&&(tr=Ps),tA.transition!==0){nc!==0&&(nc=gp!==null?gp.pendingLanes:0),t=tr;var e=4186112&~nc;return e&=-e,e===0&&(t=4186112&~t,e=t&-t,e===0&&(e=8192)),e}return t=bs(),(W&4)!=0&&t===98?t=wl(12,tr):(t=iC(t),t=wl(t,tr)),t}function Mr(t,e,n){if(50<xa)throw xa=0,Ip=null,Error(R(185));if(t=ic(t,e),t===null)return null;_l(t,e,n),t===Rt&&(xs|=e,st===4&&Ds(t,_t));var r=bs();e===1?(W&8)!=0&&(W&48)==0?Sp(t):(un(t,n),W===0&&(Os(),Nn())):((W&4)==0||r!==98&&r!==99||(er===null?er=new Set([t]):er.add(t)),un(t,n)),gp=t}function ic(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}function un(t,e){for(var n=t.callbackNode,r=t.suspendedLanes,i=t.pingedLanes,s=t.expirationTimes,o=t.pendingLanes;0<o;){var a=31-kr(o),u=1<<a,l=s[a];if(l===-1){if((u&r)==0||(u&i)!=0){l=e,ms(u);var c=pe;s[a]=10<=c?l+250:6<=c?l+5e3:-1}}else l<=e&&(t.expiredLanes|=u);o&=~u}if(r=sa(t,t===Rt?_t:0),e=pe,r===0)n!==null&&(n!==Vf&&Uf(n),t.callbackNode=null,t.callbackPriority=0);else{if(n!==null){if(t.callbackPriority===e)return;n!==Vf&&Uf(n)}e===15?(n=Sp.bind(null,t),Xn===null?(Xn=[n],Ll=$f(Dl,n0)):Xn.push(n),n=Vf):e===14?n=ga(99,Sp.bind(null,t)):(n=sC(e),n=ga(n,J0.bind(null,t))),t.callbackPriority=e,t.callbackNode=n}}function J0(t){if(tc=-1,nc=tr=0,(W&48)!=0)throw Error(R(327));var e=t.callbackNode;if($r()&&t.callbackNode!==e)return null;var n=sa(t,t===Rt?_t:0);if(n===0)return null;var r=n,i=W;W|=16;var s=n_();(Rt!==t||_t!==r)&&(Os(),Ls(t,r));do try{yA();break}catch(a){t_(t,a)}while(1);if(jf(),Jl.current=s,W=i,Ue!==null?r=0:(Rt=null,_t=0,r=st),(Ps&xs)!=0)Ls(t,0);else if(r!==0){if(r===2&&(W|=64,t.hydrate&&(t.hydrate=!1,Of(t.containerInfo)),n=lw(t),n!==0&&(r=Da(t,n))),r===1)throw e=Zl,Ls(t,0),Ds(t,n),un(t,vt()),e;switch(t.finishedWork=t.current.alternate,t.finishedLanes=n,r){case 0:case 1:throw Error(R(345));case 2:ki(t);break;case 3:if(Ds(t,n),(n&62914560)===n&&(r=yp+500-vt(),10<r)){if(sa(t,0)!==0)break;if(i=t.suspendedLanes,(i&n)!==n){Kt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=jw(ki.bind(null,t),r);break}ki(t);break;case 4:if(Ds(t,n),(n&4186112)===n)break;for(r=t.eventTimes,i=-1;0<n;){var o=31-kr(n);s=1<<o,o=r[o],o>i&&(i=o),n&=~s}if(n=i,n=vt()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*pA(n/1960))-n,10<n){t.timeoutHandle=jw(ki.bind(null,t),n);break}ki(t);break;case 5:ki(t);break;default:throw Error(R(329))}}return un(t,vt()),t.callbackNode===e?J0.bind(null,t):null}function Ds(t,e){for(e&=~mp,e&=~xs,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-kr(e),r=1<<n;t[n]=-1,e&=~r}}function Sp(t){if((W&48)!=0)throw Error(R(327));if($r(),t===Rt&&(t.expiredLanes&_t)!=0){var e=_t,n=Da(t,e);(Ps&xs)!=0&&(e=sa(t,e),n=Da(t,e))}else e=sa(t,0),n=Da(t,e);if(t.tag!==0&&n===2&&(W|=64,t.hydrate&&(t.hydrate=!1,Of(t.containerInfo)),e=lw(t),e!==0&&(n=Da(t,e))),n===1)throw n=Zl,Ls(t,0),Ds(t,e),un(t,vt()),n;return t.finishedWork=t.current.alternate,t.finishedLanes=e,ki(t),un(t,vt()),null}function mA(){if(er!==null){var t=er;er=null,t.forEach(function(e){e.expiredLanes|=24&e.pendingLanes,un(e,vt())})}Nn()}function Z0(t,e){var n=W;W|=1;try{return t(e)}finally{W=n,W===0&&(Os(),Nn())}}function e_(t,e){var n=W;W&=-2,W|=8;try{return t(e)}finally{W=n,W===0&&(Os(),Nn())}}function sc(t,e){ke(pp,Ti),Ti|=e,Ps|=e}function Tp(){Ti=pp.current,ge(pp)}function Ls(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,QC(n)),Ue!==null)for(n=Ue.return;n!==null;){var r=n;switch(r.tag){case 1:r=r.type.childContextTypes,r!=null&&xl();break;case 3:Rs(),ge(Ft),ge(yt),Yf();break;case 5:Gf(r);break;case 4:Rs();break;case 13:ge(be);break;case 19:ge(be);break;case 10:zf(r);break;case 23:case 24:Tp()}n=n.return}Rt=t,Ue=Fr(t.current,null),_t=Ti=Ps=e,st=0,Zl=null,mp=xs=Ra=0}function t_(t,e){do{var n=Ue;try{if(jf(),Ia.current=Yl,Wl){for(var r=Pe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Wl=!1}if(Sa=0,it=wt=Pe=null,Ta=!1,fp.current=null,n===null||n.return===null){st=1,Zl=e,Ue=null;break}e:{var s=t,o=n.return,a=n,u=e;if(e=_t,a.flags|=2048,a.firstEffect=a.lastEffect=null,u!==null&&typeof u=="object"&&typeof u.then=="function"){var l=u;if((a.mode&2)==0){var c=a.alternate;c?(a.updateQueue=c.updateQueue,a.memoizedState=c.memoizedState,a.lanes=c.lanes):(a.updateQueue=null,a.memoizedState=null)}var h=(be.current&1)!=0,d=o;do{var g;if(g=d.tag===13){var y=d.memoizedState;if(y!==null)g=y.dehydrated!==null;else{var _=d.memoizedProps;g=_.fallback===void 0?!1:_.unstable_avoidThisFallback!==!0?!0:!h}}if(g){var f=d.updateQueue;if(f===null){var p=new Set;p.add(l),d.updateQueue=p}else f.add(l);if((d.mode&2)==0){if(d.flags|=64,a.flags|=16384,a.flags&=-2981,a.tag===1)if(a.alternate===null)a.tag=17;else{var m=Pr(-1,1);m.tag=2,xr(a,m)}a.lanes|=1;break e}u=void 0,a=e;var w=s.pingCache;if(w===null?(w=s.pingCache=new lA,u=new Set,w.set(l,u)):(u=w.get(l),u===void 0&&(u=new Set,w.set(l,u))),!u.has(a)){u.add(a);var v=IA.bind(null,s,l,a);l.then(v,v)}d.flags|=4096,d.lanes=e;break e}d=d.return}while(d!==null);u=Error((cs(a.type)||"A React component")+` suspended while rendering, but no fallback UI was specified.

Add a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.`)}st!==5&&(st=2),u=up(u,a),d=o;do{switch(d.tag){case 3:s=u,d.flags|=4096,e&=-e,d.lanes|=e;var P=j0(d,s,e);s0(d,P);break e;case 1:s=u;var C=d.type,V=d.stateNode;if((d.flags&64)==0&&(typeof C.getDerivedStateFromError=="function"||V!==null&&typeof V.componentDidCatch=="function"&&(Dn===null||!Dn.has(V)))){d.flags|=4096,e&=-e,d.lanes|=e;var F=z0(d,s,e);s0(d,F);break e}}d=d.return}while(d!==null)}i_(n)}catch(M){e=M,Ue===n&&n!==null&&(Ue=n=n.return);continue}break}while(1)}function n_(){var t=Jl.current;return Jl.current=Yl,t===null?Yl:t}function Da(t,e){var n=W;W|=16;var r=n_();Rt===t&&_t===e||Ls(t,e);do try{gA();break}catch(i){t_(t,i)}while(1);if(jf(),W=n,Jl.current=r,Ue!==null)throw Error(R(261));return Rt=null,_t=0,st}function gA(){for(;Ue!==null;)r_(Ue)}function yA(){for(;Ue!==null&&!JC();)r_(Ue)}function r_(t){var e=a_(t.alternate,t,Ti);t.memoizedProps=t.pendingProps,e===null?i_(t):Ue=e,fp.current=null}function i_(t){var e=t;do{var n=e.alternate;if(t=e.return,(e.flags&2048)==0){if(n=aA(n,e,Ti),n!==null){Ue=n;return}if(n=e,n.tag!==24&&n.tag!==23||n.memoizedState===null||(Ti&1073741824)!=0||(n.mode&4)==0){for(var r=0,i=n.child;i!==null;)r|=i.lanes|i.childLanes,i=i.sibling;n.childLanes=r}t!==null&&(t.flags&2048)==0&&(t.firstEffect===null&&(t.firstEffect=e.firstEffect),e.lastEffect!==null&&(t.lastEffect!==null&&(t.lastEffect.nextEffect=e.firstEffect),t.lastEffect=e.lastEffect),1<e.flags&&(t.lastEffect!==null?t.lastEffect.nextEffect=e:t.firstEffect=e,t.lastEffect=e))}else{if(n=uA(e),n!==null){n.flags&=2047,Ue=n;return}t!==null&&(t.firstEffect=t.lastEffect=null,t.flags|=2048)}if(e=e.sibling,e!==null){Ue=e;return}Ue=e=t}while(e!==null);st===0&&(st=5)}function ki(t){var e=bs();return _i(99,vA.bind(null,t,e)),null}function vA(t,e){do $r();while(Na!==null);if((W&48)!=0)throw Error(R(327));var n=t.finishedWork;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(R(177));t.callbackNode=null;var r=n.lanes|n.childLanes,i=r,s=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;for(var o=t.eventTimes,a=t.expirationTimes;0<s;){var u=31-kr(s),l=1<<u;i[u]=0,o[u]=-1,a[u]=-1,s&=~l}if(er!==null&&(r&24)==0&&er.has(t)&&er.delete(t),t===Rt&&(Ue=Rt=null,_t=0),1<n.flags?n.lastEffect!==null?(n.lastEffect.nextEffect=n,r=n.firstEffect):r=n:r=n.firstEffect,r!==null){if(i=W,W|=32,fp.current=null,Nf=El,o=Rw(),bf(o)){if("selectionStart"in o)a={start:o.selectionStart,end:o.selectionEnd};else e:if(a=(a=o.ownerDocument)&&a.defaultView||window,(l=a.getSelection&&a.getSelection())&&l.rangeCount!==0){a=l.anchorNode,s=l.anchorOffset,u=l.focusNode,l=l.focusOffset;try{a.nodeType,u.nodeType}catch{a=null;break e}var c=0,h=-1,d=-1,g=0,y=0,_=o,f=null;t:for(;;){for(var p;_!==a||s!==0&&_.nodeType!==3||(h=c+s),_!==u||l!==0&&_.nodeType!==3||(d=c+l),_.nodeType===3&&(c+=_.nodeValue.length),(p=_.firstChild)!==null;)f=_,_=p;for(;;){if(_===o)break t;if(f===a&&++g===s&&(h=c),f===u&&++y===l&&(d=c),(p=_.nextSibling)!==null)break;_=f,f=_.parentNode}_=p}a=h===-1||d===-1?null:{start:h,end:d}}else a=null;a=a||{start:0,end:0}}else a=null;Pf={focusedElem:o,selectionRange:a},El=!1,Oa=null,rc=!1,U=r;do try{wA()}catch(M){if(U===null)throw Error(R(330));Ur(U,M),U=U.nextEffect}while(U!==null);Oa=null,U=r;do try{for(o=t;U!==null;){var m=U.flags;if(m&16&&Qo(U.stateNode,""),m&128){var w=U.alternate;if(w!==null){var v=w.ref;v!==null&&(typeof v=="function"?v(null):v.current=null)}}switch(m&1038){case 2:Q0(U),U.flags&=-3;break;case 6:Q0(U),U.flags&=-3,dp(U.alternate,U);break;case 1024:U.flags&=-1025;break;case 1028:U.flags&=-1025,dp(U.alternate,U);break;case 4:dp(U.alternate,U);break;case 8:a=U,Y0(o,a);var P=a.alternate;G0(a),P!==null&&G0(P)}U=U.nextEffect}}catch(M){if(U===null)throw Error(R(330));Ur(U,M),U=U.nextEffect}while(U!==null);if(v=Pf,w=Rw(),m=v.focusedElem,o=v.selectionRange,w!==m&&m&&m.ownerDocument&&Aw(m.ownerDocument.documentElement,m)){for(o!==null&&bf(m)&&(w=o.start,v=o.end,v===void 0&&(v=w),"selectionStart"in m?(m.selectionStart=w,m.selectionEnd=Math.min(v,m.value.length)):(v=(w=m.ownerDocument||document)&&w.defaultView||window,v.getSelection&&(v=v.getSelection(),a=m.textContent.length,P=Math.min(o.start,a),o=o.end===void 0?P:Math.min(o.end,a),!v.extend&&P>o&&(a=o,o=P,P=a),a=Cw(m,P),s=Cw(m,o),a&&s&&(v.rangeCount!==1||v.anchorNode!==a.node||v.anchorOffset!==a.offset||v.focusNode!==s.node||v.focusOffset!==s.offset)&&(w=w.createRange(),w.setStart(a.node,a.offset),v.removeAllRanges(),P>o?(v.addRange(w),v.extend(s.node,s.offset)):(w.setEnd(s.node,s.offset),v.addRange(w)))))),w=[],v=m;v=v.parentNode;)v.nodeType===1&&w.push({element:v,left:v.scrollLeft,top:v.scrollTop});for(typeof m.focus=="function"&&m.focus(),m=0;m<w.length;m++)v=w[m],v.element.scrollLeft=v.left,v.element.scrollTop=v.top}El=!!Nf,Pf=Nf=null,t.current=n,U=r;do try{for(m=t;U!==null;){var C=U.flags;if(C&36&&dA(m,U.alternate,U),C&128){w=void 0;var V=U.ref;if(V!==null){var F=U.stateNode;switch(U.tag){case 5:w=F;break;default:w=F}typeof V=="function"?V(w):V.current=w}}U=U.nextEffect}}catch(M){if(U===null)throw Error(R(330));Ur(U,M),U=U.nextEffect}while(U!==null);U=null,eA(),W=i}else t.current=n;if(Dr)Dr=!1,Na=t,Pa=e;else for(U=r;U!==null;)e=U.nextEffect,U.nextEffect=null,U.flags&8&&(C=U,C.sibling=null,C.stateNode=null),U=e;if(r=t.pendingLanes,r===0&&(Dn=null),r===1?t===Ip?xa++:(xa=0,Ip=t):xa=0,n=n.stateNode,wi&&typeof wi.onCommitFiberRoot=="function")try{wi.onCommitFiberRoot(Mf,n,void 0,(n.current.flags&64)==64)}catch{}if(un(t,vt()),ec)throw ec=!1,t=wp,wp=null,t;return(W&8)!=0||Nn(),null}function wA(){for(;U!==null;){var t=U.alternate;rc||Oa===null||((U.flags&8)!=0?Qv(U,Oa)&&(rc=!0):U.tag===13&&fA(t,U)&&Qv(U,Oa)&&(rc=!0));var e=U.flags;(e&256)!=0&&hA(t,U),(e&512)==0||Dr||(Dr=!0,ga(97,function(){return $r(),null})),U=U.nextEffect}}function $r(){if(Pa!==90){var t=97<Pa?97:Pa;return Pa=90,_i(t,EA)}return!1}function _A(t,e){_p.push(e,t),Dr||(Dr=!0,ga(97,function(){return $r(),null}))}function s_(t,e){Ep.push(e,t),Dr||(Dr=!0,ga(97,function(){return $r(),null}))}function EA(){if(Na===null)return!1;var t=Na;if(Na=null,(W&48)!=0)throw Error(R(331));var e=W;W|=32;var n=Ep;Ep=[];for(var r=0;r<n.length;r+=2){var i=n[r],s=n[r+1],o=i.destroy;if(i.destroy=void 0,typeof o=="function")try{o()}catch(u){if(s===null)throw Error(R(330));Ur(s,u)}}for(n=_p,_p=[],r=0;r<n.length;r+=2){i=n[r],s=n[r+1];try{var a=i.create;i.destroy=a()}catch(u){if(s===null)throw Error(R(330));Ur(s,u)}}for(a=t.current.firstEffect;a!==null;)t=a.nextEffect,a.nextEffect=null,a.flags&8&&(a.sibling=null,a.stateNode=null),a=t;return W=e,Nn(),!0}function o_(t,e,n){e=up(n,e),e=j0(t,e,1),xr(t,e),e=Kt(),t=ic(t,1),t!==null&&(_l(t,1,e),un(t,e))}function Ur(t,e){if(t.tag===3)o_(t,t,e);else for(var n=t.return;n!==null;){if(n.tag===3){o_(n,t,e);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Dn===null||!Dn.has(r))){t=up(e,t);var i=z0(n,t,1);if(xr(n,i),i=Kt(),n=ic(n,1),n!==null)_l(n,1,i),un(n,i);else if(typeof r.componentDidCatch=="function"&&(Dn===null||!Dn.has(r)))try{r.componentDidCatch(e,t)}catch{}break}}n=n.return}}function IA(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Kt(),t.pingedLanes|=t.suspendedLanes&n,Rt===t&&(_t&n)===n&&(st===4||st===3&&(_t&62914560)===_t&&500>vt()-yp?Ls(t,0):mp|=n),un(t,e)}function SA(t,e){var n=t.stateNode;n!==null&&n.delete(e),e=0,e===0&&(e=t.mode,(e&2)==0?e=1:(e&4)==0?e=bs()===99?1:2:(tr===0&&(tr=Ps),e=gs(62914560&~tr),e===0&&(e=4194304))),n=Kt(),t=ic(t,e),t!==null&&(_l(t,e,n),un(t,n))}var a_;a_=function(t,e,n){var r=e.lanes;if(t!==null)if(t.memoizedProps!==e.pendingProps||Ft.current)In=!0;else if((n&r)!=0)In=(t.flags&16384)!=0;else{switch(In=!1,e.tag){case 3:x0(e),Qf();break;case 5:f0(e);break;case 1:Vt(e.type)&&Ol(e);break;case 4:Wf(e,e.stateNode.containerInfo);break;case 10:r=e.memoizedProps.value;var i=e.type._context;ke(Ml,i._currentValue),i._currentValue=r;break;case 13:if(e.memoizedState!==null)return(n&e.child.childLanes)!=0?O0(t,e,n):(ke(be,be.current&1),e=Zn(t,e,n),e!==null?e.sibling:null);ke(be,be.current&1);break;case 19:if(r=(n&e.childLanes)!=0,(t.flags&64)!=0){if(r)return U0(t,e,n);e.flags|=64}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ke(be,be.current),r)break;return null;case 23:case 24:return e.lanes=0,rp(t,e,n)}return Zn(t,e,n)}else In=!1;switch(e.lanes=0,e.tag){case 2:if(r=e.type,t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2),t=e.pendingProps,i=ks(e,yt.current),As(e,n),i=Jf(null,e,r,t,i,n),e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0){if(e.tag=1,e.memoizedState=null,e.updateQueue=null,Vt(r)){var s=!0;Ol(e)}else s=!1;e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,qf(e);var o=r.getDerivedStateFromProps;typeof o=="function"&&Fl(e,r,o,t),i.updater=Vl,e.stateNode=i,i._reactInternals=e,Hf(e,r,t,n),e=sp(null,e,r,!0,s,n)}else e.tag=0,jt(null,e,i,n),e=e.child;return e;case 16:i=e.elementType;e:{switch(t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2),t=e.pendingProps,s=i._init,i=s(i._payload),e.type=i,s=e.tag=kA(i),t=En(i,t),s){case 0:e=ip(null,e,i,t,n);break e;case 1:e=P0(null,e,i,t,n);break e;case 11:e=C0(null,e,i,t,n);break e;case 14:e=A0(null,e,i,En(i.type,t),r,n);break e}throw Error(R(306,i,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:En(r,i),ip(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:En(r,i),P0(t,e,r,i,n);case 3:if(x0(e),r=e.updateQueue,t===null||r===null)throw Error(R(282));if(r=e.pendingProps,i=e.memoizedState,i=i!==null?i.element:null,i0(t,e),ya(e,r,null,n),r=e.memoizedState.element,r===i)Qf(),e=Zn(t,e,n);else{if(i=e.stateNode,(s=i.hydrate)&&(Or=Es(e.stateNode.containerInfo.firstChild),Jn=e,s=xn=!0),s){if(t=i.mutableSourceEagerHydrationData,t!=null)for(i=0;i<t.length;i+=2)s=t[i],s._workInProgressVersionPrimary=t[i+1],Ns.push(s);for(n=d0(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|1024,n=n.sibling}else jt(t,e,r,n),Qf();e=e.child}return e;case 5:return f0(e),t===null&&Kf(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,xf(r,i)?o=null:s!==null&&xf(r,s)&&(e.flags|=16),N0(t,e),jt(t,e,o,n),e.child;case 6:return t===null&&Kf(e),null;case 13:return O0(t,e,n);case 4:return Wf(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=zl(e,null,r,n):jt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:En(r,i),C0(t,e,r,i,n);case 7:return jt(t,e,e.pendingProps,n),e.child;case 8:return jt(t,e,e.pendingProps.children,n),e.child;case 12:return jt(t,e,e.pendingProps.children,n),e.child;case 10:e:{r=e.type._context,i=e.pendingProps,o=e.memoizedProps,s=i.value;var a=e.type._context;if(ke(Ml,a._currentValue),a._currentValue=s,o!==null)if(a=o.value,s=sn(a,s)?0:(typeof r._calculateChangedBits=="function"?r._calculateChangedBits(a,s):1073741823)|0,s===0){if(o.children===i.children&&!Ft.current){e=Zn(t,e,n);break e}}else for(a=e.child,a!==null&&(a.return=e);a!==null;){var u=a.dependencies;if(u!==null){o=a.child;for(var l=u.firstContext;l!==null;){if(l.context===r&&(l.observedBits&s)!=0){a.tag===1&&(l=Pr(-1,n&-n),l.tag=2,xr(a,l)),a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),r0(a.return,n),u.lanes|=n;break}l=l.next}}else o=a.tag===10&&a.type===e.type?null:a.child;if(o!==null)o.return=a;else for(o=a;o!==null;){if(o===e){o=null;break}if(a=o.sibling,a!==null){a.return=o.return,o=a;break}o=o.return}a=o}jt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,s=e.pendingProps,r=s.children,As(e,n),i=on(i,s.unstable_observedBits),r=r(i),e.flags|=1,jt(t,e,r,n),e.child;case 14:return i=e.type,s=En(i,e.pendingProps),s=En(i.type,s),A0(t,e,i,s,r,n);case 15:return R0(t,e,e.type,e.pendingProps,r,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:En(r,i),t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2),e.tag=1,Vt(r)?(t=!0,Ol(e)):t=!1,As(e,n),l0(e,r,i),Hf(e,r,i,n),sp(null,e,r,!0,t,n);case 19:return U0(t,e,n);case 23:return rp(t,e,n);case 24:return rp(t,e,n)}throw Error(R(156,e.tag))};function TA(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.flags=0,this.lastEffect=this.firstEffect=this.nextEffect=null,this.childLanes=this.lanes=0,this.alternate=null}function ln(t,e,n,r){return new TA(t,e,n,r)}function kp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function kA(t){if(typeof t=="function")return kp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===al)return 11;if(t===ll)return 14}return 2}function Fr(t,e){var n=t.alternate;return n===null?(n=ln(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.nextEffect=null,n.firstEffect=null,n.lastEffect=null),n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function oc(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")kp(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case _r:return Ms(n.children,i,s,e);case Cv:o=8,i|=16;break;case Dd:o=8,i|=1;break;case Ho:return t=ln(12,n,e,i|8),t.elementType=Ho,t.type=Ho,t.lanes=s,t;case Wo:return t=ln(13,n,e,i),t.type=Wo,t.elementType=Wo,t.lanes=s,t;case ul:return t=ln(19,n,e,i),t.elementType=ul,t.lanes=s,t;case Vd:return bp(n,i,s,e);case Bd:return t=ln(24,n,e,i),t.elementType=Bd,t.lanes=s,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Ld:o=10;break e;case Md:o=9;break e;case al:o=11;break e;case ll:o=14;break e;case $d:o=16,r=null;break e;case Ud:o=22;break e}throw Error(R(130,t==null?t:typeof t,""))}return e=ln(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Ms(t,e,n,r){return t=ln(7,t,r,e),t.lanes=n,t}function bp(t,e,n,r){return t=ln(23,t,r,e),t.elementType=Vd,t.lanes=n,t}function Cp(t,e,n){return t=ln(6,t,null,e),t.lanes=n,t}function Ap(t,e,n){return e=ln(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function bA(t,e,n){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.pendingContext=this.context=null,this.hydrate=n,this.callbackNode=null,this.callbackPriority=0,this.eventTimes=pf(0),this.expirationTimes=pf(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=pf(0),this.mutableSourceEagerHydrationData=null}function CA(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:pi,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function ac(t,e,n,r){var i=e.current,s=Kt(),o=Lr(i);e:if(n){n=n._reactInternals;t:{if(gi(n)!==n||n.tag!==1)throw Error(R(170));var a=n;do{switch(a.tag){case 3:a=a.stateNode.context;break t;case 1:if(Vt(a.type)){a=a.stateNode.__reactInternalMemoizedMergedChildContext;break t}}a=a.return}while(a!==null);throw Error(R(171))}if(n.tag===1){var u=n.type;if(Vt(u)){n=Gw(n,u,a);break e}}n=a}else n=Rr;return e.context===null?e.context=n:e.pendingContext=n,e=Pr(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),xr(i,e),Mr(i,o,s),o}function Rp(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function u_(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Np(t,e){u_(t,e),(t=t.alternate)&&u_(t,e)}function AA(){return null}function Pp(t,e,n){var r=n!=null&&n.hydrationOptions!=null&&n.hydrationOptions.mutableSources||null;if(n=new bA(t,e,n!=null&&n.hydrate===!0),e=ln(3,null,null,e===2?7:e===1?3:0),n.current=e,e.stateNode=n,qf(e),t[Is]=n.current,Mw(t.nodeType===8?t.parentNode:t),r)for(t=0;t<r.length;t++){e=r[t];var i=e._getVersion;i=i(e._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[e,i]:n.mutableSourceEagerHydrationData.push(e,i)}this._internalRoot=n}Pp.prototype.render=function(t){ac(t,this._internalRoot,null,null)};Pp.prototype.unmount=function(){var t=this._internalRoot,e=t.containerInfo;ac(null,t,null,function(){e[Is]=null})};function La(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function RA(t,e){if(e||(e=t?t.nodeType===9?t.documentElement:t.firstChild:null,e=!(!e||e.nodeType!==1||!e.hasAttribute("data-reactroot"))),!e)for(var n;n=t.lastChild;)t.removeChild(n);return new Pp(t,0,e?{hydrate:!0}:void 0)}function uc(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s._internalRoot;if(typeof i=="function"){var a=i;i=function(){var l=Rp(o);a.call(l)}}ac(e,o,t,i)}else{if(s=n._reactRootContainer=RA(n,r),o=s._internalRoot,typeof i=="function"){var u=i;i=function(){var l=Rp(o);u.call(l)}}e_(function(){ac(e,o,t,i)})}return Rp(o)}Yv=function(t){if(t.tag===13){var e=Kt();Mr(t,4,e),Np(t,4)}};uf=function(t){if(t.tag===13){var e=Kt();Mr(t,67108864,e),Np(t,67108864)}};Xv=function(t){if(t.tag===13){var e=Kt(),n=Lr(t);Mr(t,n,e),Np(t,n)}};Jv=function(t,e){return e()};ef=function(t,e,n){switch(e){case"input":if(Hd(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Pl(r);if(!i)throw Error(R(90));Nv(r),Hd(r,i)}}}break;case"textarea":Lv(t,n);break;case"select":e=n.value,e!=null&&hs(t,!!n.multiple,e,!1)}};tf=Z0;qv=function(t,e,n,r,i){var s=W;W|=4;try{return _i(98,t.bind(null,e,n,r,i))}finally{W=s,W===0&&(Os(),Nn())}};nf=function(){(W&49)==0&&(mA(),$r())};Hv=function(t,e){var n=W;W|=2;try{return t(e)}finally{W=n,W===0&&(Os(),Nn())}};function l_(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!La(e))throw Error(R(200));return CA(t,e,null,n)}var NA={Events:[ma,Ss,Pl,jv,zv,$r,{current:!1}]},Ma={findFiberByHostInstance:yi,bundleType:0,version:"17.0.2",rendererPackageName:"react-dom"},PA={bundleType:Ma.bundleType,version:Ma.version,rendererPackageName:Ma.rendererPackageName,rendererConfig:Ma.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:fi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Kv(t),t===null?null:t.stateNode},findFiberByHostInstance:Ma.findFiberByHostInstance||AA,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!="undefined"){var lc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!lc.isDisabled&&lc.supportsFiber)try{Mf=lc.inject(PA),wi=lc}catch{}}rn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=NA;rn.createPortal=l_;rn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(R(188)):Error(R(268,Object.keys(t)));return t=Kv(e),t=t===null?null:t.stateNode,t};rn.flushSync=function(t,e){var n=W;if((n&48)!=0)return t(e);W|=1;try{if(t)return _i(99,t.bind(null,e))}finally{W=n,Nn()}};rn.hydrate=function(t,e,n){if(!La(e))throw Error(R(200));return uc(null,t,e,!0,n)};rn.render=function(t,e,n){if(!La(e))throw Error(R(200));return uc(null,t,e,!1,n)};rn.unmountComponentAtNode=function(t){if(!La(t))throw Error(R(40));return t._reactRootContainer?(e_(function(){uc(null,null,t,!1,function(){t._reactRootContainer=null,t[Is]=null})}),!0):!1};rn.unstable_batchedUpdates=Z0;rn.unstable_createPortal=function(t,e){return l_(t,e,2<arguments.length&&arguments[2]!==void 0?arguments[2]:null)};rn.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!La(n))throw Error(R(200));if(t==null||t._reactInternals===void 0)throw Error(R(38));return uc(t,e,n,!1,r)};rn.version="17.0.2";function c_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c_)}catch(t){console.error(t)}}c_(),_v.exports=rn;var DV=_v.exports,cc={exports:{}},le={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qe=typeof Symbol=="function"&&Symbol.for,xp=qe?Symbol.for("react.element"):60103,Op=qe?Symbol.for("react.portal"):60106,hc=qe?Symbol.for("react.fragment"):60107,dc=qe?Symbol.for("react.strict_mode"):60108,fc=qe?Symbol.for("react.profiler"):60114,pc=qe?Symbol.for("react.provider"):60109,mc=qe?Symbol.for("react.context"):60110,Dp=qe?Symbol.for("react.async_mode"):60111,gc=qe?Symbol.for("react.concurrent_mode"):60111,yc=qe?Symbol.for("react.forward_ref"):60112,vc=qe?Symbol.for("react.suspense"):60113,xA=qe?Symbol.for("react.suspense_list"):60120,wc=qe?Symbol.for("react.memo"):60115,_c=qe?Symbol.for("react.lazy"):60116,OA=qe?Symbol.for("react.block"):60121,DA=qe?Symbol.for("react.fundamental"):60117,LA=qe?Symbol.for("react.responder"):60118,MA=qe?Symbol.for("react.scope"):60119;function Qt(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case xp:switch(t=t.type,t){case Dp:case gc:case hc:case fc:case dc:case vc:return t;default:switch(t=t&&t.$$typeof,t){case mc:case yc:case _c:case wc:case pc:return t;default:return e}}case Op:return e}}}function h_(t){return Qt(t)===gc}le.AsyncMode=Dp;le.ConcurrentMode=gc;le.ContextConsumer=mc;le.ContextProvider=pc;le.Element=xp;le.ForwardRef=yc;le.Fragment=hc;le.Lazy=_c;le.Memo=wc;le.Portal=Op;le.Profiler=fc;le.StrictMode=dc;le.Suspense=vc;le.isAsyncMode=function(t){return h_(t)||Qt(t)===Dp};le.isConcurrentMode=h_;le.isContextConsumer=function(t){return Qt(t)===mc};le.isContextProvider=function(t){return Qt(t)===pc};le.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===xp};le.isForwardRef=function(t){return Qt(t)===yc};le.isFragment=function(t){return Qt(t)===hc};le.isLazy=function(t){return Qt(t)===_c};le.isMemo=function(t){return Qt(t)===wc};le.isPortal=function(t){return Qt(t)===Op};le.isProfiler=function(t){return Qt(t)===fc};le.isStrictMode=function(t){return Qt(t)===dc};le.isSuspense=function(t){return Qt(t)===vc};le.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===hc||t===gc||t===fc||t===dc||t===vc||t===xA||typeof t=="object"&&t!==null&&(t.$$typeof===_c||t.$$typeof===wc||t.$$typeof===pc||t.$$typeof===mc||t.$$typeof===yc||t.$$typeof===DA||t.$$typeof===LA||t.$$typeof===MA||t.$$typeof===OA)};le.typeOf=Qt;cc.exports=le;function d_(t){function e(T,k,O,z,E){for(var X=0,x=0,ae=0,se=0,ue,Y,et=0,Ut=0,ne,gt=ne=ue=0,oe=0,tt=0,Vo=0,nt=0,rl=O.length,Bo=rl-1,vn,K="",Ne="",Sd="",Td="",wr;oe<rl;){if(Y=O.charCodeAt(oe),oe===Bo&&x+se+ae+X!==0&&(x!==0&&(Y=x===47?10:47),se=ae=X=0,rl++,Bo++),x+se+ae+X===0){if(oe===Bo&&(0<tt&&(K=K.replace(d,"")),0<K.trim().length)){switch(Y){case 32:case 9:case 59:case 13:case 10:break;default:K+=O.charAt(oe)}Y=59}switch(Y){case 123:for(K=K.trim(),ue=K.charCodeAt(0),ne=1,nt=++oe;oe<rl;){switch(Y=O.charCodeAt(oe)){case 123:ne++;break;case 125:ne--;break;case 47:switch(Y=O.charCodeAt(oe+1)){case 42:case 47:e:{for(gt=oe+1;gt<Bo;++gt)switch(O.charCodeAt(gt)){case 47:if(Y===42&&O.charCodeAt(gt-1)===42&&oe+2!==gt){oe=gt+1;break e}break;case 10:if(Y===47){oe=gt+1;break e}}oe=gt}}break;case 91:Y++;case 40:Y++;case 34:case 39:for(;oe++<Bo&&O.charCodeAt(oe)!==Y;);}if(ne===0)break;oe++}switch(ne=O.substring(nt,oe),ue===0&&(ue=(K=K.replace(h,"").trim()).charCodeAt(0)),ue){case 64:switch(0<tt&&(K=K.replace(d,"")),Y=K.charCodeAt(1),Y){case 100:case 109:case 115:case 45:tt=k;break;default:tt=yn}if(ne=e(k,tt,ne,Y,E+1),nt=ne.length,0<mt&&(tt=n(yn,K,Vo),wr=a(3,ne,tt,k,de,fe,nt,Y,E,z),K=tt.join(""),wr!==void 0&&(nt=(ne=wr.trim()).length)===0&&(Y=0,ne="")),0<nt)switch(Y){case 115:K=K.replace(C,o);case 100:case 109:case 45:ne=K+"{"+ne+"}";break;case 107:K=K.replace(m,"$1 $2"),ne=K+"{"+ne+"}",ne=Se===1||Se===2&&s("@"+ne,3)?"@-webkit-"+ne+"@"+ne:"@"+ne;break;default:ne=K+ne,z===112&&(ne=(Ne+=ne,""))}else ne="";break;default:ne=e(k,n(k,K,Vo),ne,z,E+1)}Sd+=ne,ne=Vo=tt=gt=ue=0,K="",Y=O.charCodeAt(++oe);break;case 125:case 59:if(K=(0<tt?K.replace(d,""):K).trim(),1<(nt=K.length))switch(gt===0&&(ue=K.charCodeAt(0),ue===45||96<ue&&123>ue)&&(nt=(K=K.replace(" ",":")).length),0<mt&&(wr=a(1,K,k,T,de,fe,Ne.length,z,E,z))!==void 0&&(nt=(K=wr.trim()).length)===0&&(K="\0\0"),ue=K.charCodeAt(0),Y=K.charCodeAt(1),ue){case 0:break;case 64:if(Y===105||Y===99){Td+=K+O.charAt(oe);break}default:K.charCodeAt(nt-1)!==58&&(Ne+=i(K,ue,Y,K.charCodeAt(2)))}Vo=tt=gt=ue=0,K="",Y=O.charCodeAt(++oe)}}switch(Y){case 13:case 10:x===47?x=0:1+ue===0&&z!==107&&0<K.length&&(tt=1,K+="\0"),0<mt*vr&&a(0,K,k,T,de,fe,Ne.length,z,E,z),fe=1,de++;break;case 59:case 125:if(x+se+ae+X===0){fe++;break}default:switch(fe++,vn=O.charAt(oe),Y){case 9:case 32:if(se+X+x===0)switch(et){case 44:case 58:case 9:case 32:vn="";break;default:Y!==32&&(vn=" ")}break;case 0:vn="\\0";break;case 12:vn="\\f";break;case 11:vn="\\v";break;case 38:se+x+X===0&&(tt=Vo=1,vn="\f"+vn);break;case 108:if(se+x+X+bt===0&&0<gt)switch(oe-gt){case 2:et===112&&O.charCodeAt(oe-3)===58&&(bt=et);case 8:Ut===111&&(bt=Ut)}break;case 58:se+x+X===0&&(gt=oe);break;case 44:x+ae+se+X===0&&(tt=1,vn+="\r");break;case 34:case 39:x===0&&(se=se===Y?0:se===0?Y:se);break;case 91:se+x+ae===0&&X++;break;case 93:se+x+ae===0&&X--;break;case 41:se+x+X===0&&ae--;break;case 40:if(se+x+X===0){if(ue===0)switch(2*et+3*Ut){case 533:break;default:ue=1}ae++}break;case 64:x+ae+se+X+gt+ne===0&&(ne=1);break;case 42:case 47:if(!(0<se+X+ae))switch(x){case 0:switch(2*Y+3*O.charCodeAt(oe+1)){case 235:x=47;break;case 220:nt=oe,x=42}break;case 42:Y===47&&et===42&&nt+2!==oe&&(O.charCodeAt(nt+2)===33&&(Ne+=O.substring(nt,oe+1)),vn="",x=0)}}x===0&&(K+=vn)}Ut=et,et=Y,oe++}if(nt=Ne.length,0<nt){if(tt=k,0<mt&&(wr=a(2,Ne,tt,T,de,fe,nt,z,E,z),wr!==void 0&&(Ne=wr).length===0))return Td+Ne+Sd;if(Ne=tt.join(",")+"{"+Ne+"}",Se*bt!=0){switch(Se!==2||s(Ne,2)||(bt=0),bt){case 111:Ne=Ne.replace(v,":-moz-$1")+Ne;break;case 112:Ne=Ne.replace(w,"::-webkit-input-$1")+Ne.replace(w,"::-moz-$1")+Ne.replace(w,":-ms-input-$1")+Ne}bt=0}}return Td+Ne+Sd}function n(T,k,O){var z=k.trim().split(f);k=z;var E=z.length,X=T.length;switch(X){case 0:case 1:var x=0;for(T=X===0?"":T[0]+" ";x<E;++x)k[x]=r(T,k[x],O).trim();break;default:var ae=x=0;for(k=[];x<E;++x)for(var se=0;se<X;++se)k[ae++]=r(T[se]+" ",z[x],O).trim()}return k}function r(T,k,O){var z=k.charCodeAt(0);switch(33>z&&(z=(k=k.trim()).charCodeAt(0)),z){case 38:return k.replace(p,"$1"+T.trim());case 58:return T.trim()+k.replace(p,"$1"+T.trim());default:if(0<1*O&&0<k.indexOf("\f"))return k.replace(p,(T.charCodeAt(0)===58?"":"$1")+T.trim())}return T+k}function i(T,k,O,z){var E=T+";",X=2*k+3*O+4*z;if(X===944){T=E.indexOf(":",9)+1;var x=E.substring(T,E.length-1).trim();return x=E.substring(0,T).trim()+x+";",Se===1||Se===2&&s(x,1)?"-webkit-"+x+x:x}if(Se===0||Se===2&&!s(E,1))return E;switch(X){case 1015:return E.charCodeAt(10)===97?"-webkit-"+E+E:E;case 951:return E.charCodeAt(3)===116?"-webkit-"+E+E:E;case 963:return E.charCodeAt(5)===110?"-webkit-"+E+E:E;case 1009:if(E.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+E+E;case 978:return"-webkit-"+E+"-moz-"+E+E;case 1019:case 983:return"-webkit-"+E+"-moz-"+E+"-ms-"+E+E;case 883:if(E.charCodeAt(8)===45)return"-webkit-"+E+E;if(0<E.indexOf("image-set(",11))return E.replace(An,"$1-webkit-$2")+E;break;case 932:if(E.charCodeAt(4)===45)switch(E.charCodeAt(5)){case 103:return"-webkit-box-"+E.replace("-grow","")+"-webkit-"+E+"-ms-"+E.replace("grow","positive")+E;case 115:return"-webkit-"+E+"-ms-"+E.replace("shrink","negative")+E;case 98:return"-webkit-"+E+"-ms-"+E.replace("basis","preferred-size")+E}return"-webkit-"+E+"-ms-"+E+E;case 964:return"-webkit-"+E+"-ms-flex-"+E+E;case 1023:if(E.charCodeAt(8)!==99)break;return x=E.substring(E.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+x+"-webkit-"+E+"-ms-flex-pack"+x+E;case 1005:return y.test(E)?E.replace(g,":-webkit-")+E.replace(g,":-moz-")+E:E;case 1e3:switch(x=E.substring(13).trim(),k=x.indexOf("-")+1,x.charCodeAt(0)+x.charCodeAt(k)){case 226:x=E.replace(P,"tb");break;case 232:x=E.replace(P,"tb-rl");break;case 220:x=E.replace(P,"lr");break;default:return E}return"-webkit-"+E+"-ms-"+x+E;case 1017:if(E.indexOf("sticky",9)===-1)break;case 975:switch(k=(E=T).length-10,x=(E.charCodeAt(k)===33?E.substring(0,k):E).substring(T.indexOf(":",7)+1).trim(),X=x.charCodeAt(0)+(x.charCodeAt(7)|0)){case 203:if(111>x.charCodeAt(8))break;case 115:E=E.replace(x,"-webkit-"+x)+";"+E;break;case 207:case 102:E=E.replace(x,"-webkit-"+(102<X?"inline-":"")+"box")+";"+E.replace(x,"-webkit-"+x)+";"+E.replace(x,"-ms-"+x+"box")+";"+E}return E+";";case 938:if(E.charCodeAt(5)===45)switch(E.charCodeAt(6)){case 105:return x=E.replace("-items",""),"-webkit-"+E+"-webkit-box-"+x+"-ms-flex-"+x+E;case 115:return"-webkit-"+E+"-ms-flex-item-"+E.replace(F,"")+E;default:return"-webkit-"+E+"-ms-flex-line-pack"+E.replace("align-content","").replace(F,"")+E}break;case 973:case 989:if(E.charCodeAt(3)!==45||E.charCodeAt(4)===122)break;case 931:case 953:if(he.test(T)===!0)return(x=T.substring(T.indexOf(":")+1)).charCodeAt(0)===115?i(T.replace("stretch","fill-available"),k,O,z).replace(":fill-available",":stretch"):E.replace(x,"-webkit-"+x)+E.replace(x,"-moz-"+x.replace("fill-",""))+E;break;case 962:if(E="-webkit-"+E+(E.charCodeAt(5)===102?"-ms-"+E:"")+E,O+z===211&&E.charCodeAt(13)===105&&0<E.indexOf("transform",10))return E.substring(0,E.indexOf(";",27)+1).replace(_,"$1-webkit-$2")+E}return E}function s(T,k){var O=T.indexOf(k===1?":":"{"),z=T.substring(0,k!==3?O:10);return O=T.substring(O+1,T.length-1),Kn(k!==2?z:z.replace(M,"$1"),O,k)}function o(T,k){var O=i(k,k.charCodeAt(0),k.charCodeAt(1),k.charCodeAt(2));return O!==k+";"?O.replace(V," or ($1)").substring(4):"("+k+")"}function a(T,k,O,z,E,X,x,ae,se,ue){for(var Y=0,et=k,Ut;Y<mt;++Y)switch(Ut=Ct[Y].call(c,T,et,O,z,E,X,x,ae,se,ue)){case void 0:case!1:case!0:case null:break;default:et=Ut}if(et!==k)return et}function u(T){switch(T){case void 0:case null:mt=Ct.length=0;break;default:if(typeof T=="function")Ct[mt++]=T;else if(typeof T=="object")for(var k=0,O=T.length;k<O;++k)u(T[k]);else vr=!!T|0}return u}function l(T){return T=T.prefix,T!==void 0&&(Kn=null,T?typeof T!="function"?Se=1:(Se=2,Kn=T):Se=0),l}function c(T,k){var O=T;if(33>O.charCodeAt(0)&&(O=O.trim()),D=O,O=[D],0<mt){var z=a(-1,k,O,O,de,fe,0,0,0,0);z!==void 0&&typeof z=="string"&&(k=z)}var E=e(yn,O,k,0,0);return 0<mt&&(z=a(-2,E,O,O,de,fe,E.length,0,0,0),z!==void 0&&(E=z)),D="",bt=0,fe=de=1,E}var h=/^\0+/g,d=/[\0\r\f]/g,g=/: */g,y=/zoo|gra/,_=/([,: ])(transform)/g,f=/,\r+?/g,p=/([\t\r\n ])*\f?&/g,m=/@(k\w+)\s*(\S*)\s*/,w=/::(place)/g,v=/:(read-only)/g,P=/[svh]\w+-[tblr]{2}/,C=/\(\s*(.*)\s*\)/g,V=/([\s\S]*?);/g,F=/-self|flex-/g,M=/[^]*?(:[rp][el]a[\w-]+)[^]*/,he=/stretch|:\s*\w+\-(?:conte|avail)/,An=/([^-])(image-set\()/,fe=1,de=1,bt=0,Se=1,yn=[],Ct=[],mt=0,Kn=null,vr=0,D="";return c.use=u,c.set=l,t!==void 0&&l(t),c}var f_={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function p_(t){var e={};return function(n){return e[n]===void 0&&(e[n]=t(n)),e[n]}}var $A=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,m_=p_(function(t){return $A.test(t)||t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)<91}),Lp=cc.exports,UA={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},FA={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},VA={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},g_={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Mp={};Mp[Lp.ForwardRef]=VA;Mp[Lp.Memo]=g_;function y_(t){return Lp.isMemo(t)?g_:Mp[t.$$typeof]||UA}var BA=Object.defineProperty,jA=Object.getOwnPropertyNames,v_=Object.getOwnPropertySymbols,zA=Object.getOwnPropertyDescriptor,qA=Object.getPrototypeOf,w_=Object.prototype;function __(t,e,n){if(typeof e!="string"){if(w_){var r=qA(e);r&&r!==w_&&__(t,r,n)}var i=jA(e);v_&&(i=i.concat(v_(e)));for(var s=y_(t),o=y_(e),a=0;a<i.length;++a){var u=i[a];if(!FA[u]&&!(n&&n[u])&&!(o&&o[u])&&!(s&&s[u])){var l=zA(e,u);try{BA(t,u,l)}catch{}}}}return t}var HA=__;function nr(){return(nr=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}var E_=function(t,e){for(var n=[t[0]],r=0,i=e.length;r<i;r+=1)n.push(e[r],t[r+1]);return n},$p=function(t){return t!==null&&typeof t=="object"&&(t.toString?t.toString():Object.prototype.toString.call(t))==="[object Object]"&&!cc.exports.typeOf(t)},Ec=Object.freeze([]),Vr=Object.freeze({});function $a(t){return typeof t=="function"}function I_(t){return t.displayName||t.name||"Component"}function Up(t){return t&&typeof t.styledComponentId=="string"}var $s=typeof process!="undefined"&&{}.SC_ATTR||"data-styled",Fp=typeof window!="undefined"&&"HTMLElement"in window,WA=Boolean(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process!="undefined"&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process!="undefined"&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""?{}.SC_DISABLE_SPEEDY:!1);function Ua(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+t+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var GA=function(){function t(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var e=t.prototype;return e.indexOfGroup=function(n){for(var r=0,i=0;i<n;i++)r+=this.groupSizes[i];return r},e.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var i=this.groupSizes,s=i.length,o=s;n>=o;)(o<<=1)<0&&Ua(16,""+n);this.groupSizes=new Uint32Array(o),this.groupSizes.set(i),this.length=o;for(var a=s;a<o;a++)this.groupSizes[a]=0}for(var u=this.indexOfGroup(n+1),l=0,c=r.length;l<c;l++)this.tag.insertRule(u,r[l])&&(this.groupSizes[n]++,u++)},e.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],i=this.indexOfGroup(n),s=i+r;this.groupSizes[n]=0;for(var o=i;o<s;o++)this.tag.deleteRule(i)}},e.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var i=this.groupSizes[n],s=this.indexOfGroup(n),o=s+i,a=s;a<o;a++)r+=this.tag.getRule(a)+`/*!sc*/
`;return r},t}(),Ic=new Map,Sc=new Map,Fa=1,Tc=function(t){if(Ic.has(t))return Ic.get(t);for(;Sc.has(Fa);)Fa++;var e=Fa++;return Ic.set(t,e),Sc.set(e,t),e},KA=function(t){return Sc.get(t)},QA=function(t,e){e>=Fa&&(Fa=e+1),Ic.set(t,e),Sc.set(e,t)},YA="style["+$s+'][data-styled-version="5.3.1"]',XA=new RegExp("^"+$s+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),JA=function(t,e,n){for(var r,i=n.split(","),s=0,o=i.length;s<o;s++)(r=i[s])&&t.registerName(e,r)},ZA=function(t,e){for(var n=(e.innerHTML||"").split(`/*!sc*/
`),r=[],i=0,s=n.length;i<s;i++){var o=n[i].trim();if(o){var a=o.match(XA);if(a){var u=0|parseInt(a[1],10),l=a[2];u!==0&&(QA(l,u),JA(t,l,a[3]),t.getTag().insertRules(u,r)),r.length=0}else r.push(o)}}},eR=function(){return typeof window!="undefined"&&window.__webpack_nonce__!==void 0?window.__webpack_nonce__:null},S_=function(t){var e=document.head,n=t||e,r=document.createElement("style"),i=function(a){for(var u=a.childNodes,l=u.length;l>=0;l--){var c=u[l];if(c&&c.nodeType===1&&c.hasAttribute($s))return c}}(n),s=i!==void 0?i.nextSibling:null;r.setAttribute($s,"active"),r.setAttribute("data-styled-version","5.3.1");var o=eR();return o&&r.setAttribute("nonce",o),n.insertBefore(r,s),r},tR=function(){function t(n){var r=this.element=S_(n);r.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var s=document.styleSheets,o=0,a=s.length;o<a;o++){var u=s[o];if(u.ownerNode===i)return u}Ua(17)}(r),this.length=0}var e=t.prototype;return e.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},e.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},e.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},t}(),nR=function(){function t(n){var r=this.element=S_(n);this.nodes=r.childNodes,this.length=0}var e=t.prototype;return e.insertRule=function(n,r){if(n<=this.length&&n>=0){var i=document.createTextNode(r),s=this.nodes[n];return this.element.insertBefore(i,s||null),this.length++,!0}return!1},e.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},e.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},t}(),rR=function(){function t(n){this.rules=[],this.length=0}var e=t.prototype;return e.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},e.deleteRule=function(n){this.rules.splice(n,1),this.length--},e.getRule=function(n){return n<this.length?this.rules[n]:""},t}(),T_=Fp,iR={isServer:!Fp,useCSSOMInjection:!WA},k_=function(){function t(n,r,i){n===void 0&&(n=Vr),r===void 0&&(r={}),this.options=nr({},iR,{},n),this.gs=r,this.names=new Map(i),this.server=!!n.isServer,!this.server&&Fp&&T_&&(T_=!1,function(s){for(var o=document.querySelectorAll(YA),a=0,u=o.length;a<u;a++){var l=o[a];l&&l.getAttribute($s)!=="active"&&(ZA(s,l),l.parentNode&&l.parentNode.removeChild(l))}}(this))}t.registerId=function(n){return Tc(n)};var e=t.prototype;return e.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new t(nr({},this.options,{},n),this.gs,r&&this.names||void 0)},e.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},e.getTag=function(){return this.tag||(this.tag=(i=(r=this.options).isServer,s=r.useCSSOMInjection,o=r.target,n=i?new rR(o):s?new tR(o):new nR(o),new GA(n)));var n,r,i,s,o},e.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},e.registerName=function(n,r){if(Tc(n),this.names.has(n))this.names.get(n).add(r);else{var i=new Set;i.add(r),this.names.set(n,i)}},e.insertRules=function(n,r,i){this.registerName(n,r),this.getTag().insertRules(Tc(n),i)},e.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},e.clearRules=function(n){this.getTag().clearGroup(Tc(n)),this.clearNames(n)},e.clearTag=function(){this.tag=void 0},e.toString=function(){return function(n){for(var r=n.getTag(),i=r.length,s="",o=0;o<i;o++){var a=KA(o);if(a!==void 0){var u=n.names.get(a),l=r.getGroup(o);if(u&&l&&u.size){var c=$s+".g"+o+'[id="'+a+'"]',h="";u!==void 0&&u.forEach(function(d){d.length>0&&(h+=d+",")}),s+=""+l+c+'{content:"'+h+`"}/*!sc*/
`}}}return s}(this)},t}(),sR=/(a)(d)/gi,b_=function(t){return String.fromCharCode(t+(t>25?39:97))};function Vp(t){var e,n="";for(e=Math.abs(t);e>52;e=e/52|0)n=b_(e%52)+n;return(b_(e%52)+n).replace(sR,"$1-$2")}var Us=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},C_=function(t){return Us(5381,t)};function oR(t){for(var e=0;e<t.length;e+=1){var n=t[e];if($a(n)&&!Up(n))return!1}return!0}var aR=C_("5.3.1"),uR=function(){function t(e,n,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&oR(e),this.componentId=n,this.baseHash=Us(aR,n),this.baseStyle=r,k_.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,r){var i=this.componentId,s=[];if(this.baseStyle&&s.push(this.baseStyle.generateAndInjectStyles(e,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(i,this.staticRulesId))s.push(this.staticRulesId);else{var o=Fs(this.rules,e,n,r).join(""),a=Vp(Us(this.baseHash,o)>>>0);if(!n.hasNameForId(i,a)){var u=r(o,"."+a,void 0,i);n.insertRules(i,a,u)}s.push(a),this.staticRulesId=a}else{for(var l=this.rules.length,c=Us(this.baseHash,r.hash),h="",d=0;d<l;d++){var g=this.rules[d];if(typeof g=="string")h+=g;else if(g){var y=Fs(g,e,n,r),_=Array.isArray(y)?y.join(""):y;c=Us(c,_+d),h+=_}}if(h){var f=Vp(c>>>0);if(!n.hasNameForId(i,f)){var p=r(h,"."+f,void 0,i);n.insertRules(i,f,p)}s.push(f)}}return s.join(" ")},t}(),lR=/^\s*\/\/.*$/gm,cR=[":","[",".","#"];function hR(t){var e,n,r,i,s=t===void 0?Vr:t,o=s.options,a=o===void 0?Vr:o,u=s.plugins,l=u===void 0?Ec:u,c=new d_(a),h=[],d=function(_){function f(p){if(p)try{_(p+"}")}catch{}}return function(p,m,w,v,P,C,V,F,M,he){switch(p){case 1:if(M===0&&m.charCodeAt(0)===64)return _(m+";"),"";break;case 2:if(F===0)return m+"/*|*/";break;case 3:switch(F){case 102:case 112:return _(w[0]+m),"";default:return m+(he===0?"/*|*/":"")}case-2:m.split("/*|*/}").forEach(f)}}}(function(_){h.push(_)}),g=function(_,f,p){return f===0&&cR.indexOf(p[n.length])!==-1||p.match(i)?_:"."+e};function y(_,f,p,m){m===void 0&&(m="&");var w=_.replace(lR,""),v=f&&p?p+" "+f+" { "+w+" }":w;return e=m,n=f,r=new RegExp("\\"+n+"\\b","g"),i=new RegExp("(\\"+n+"\\b){2,}"),c(p||!f?"":f,v)}return c.use([].concat(l,[function(_,f,p){_===2&&p.length&&p[0].lastIndexOf(n)>0&&(p[0]=p[0].replace(r,g))},d,function(_){if(_===-2){var f=h;return h=[],f}}])),y.hash=l.length?l.reduce(function(_,f){return f.name||Ua(15),Us(_,f.name)},5381).toString():"",y}var A_=_n.createContext();A_.Consumer;var R_=_n.createContext(),dR=(R_.Consumer,new k_),Bp=hR();function fR(){return Te.exports.useContext(A_)||dR}function pR(){return Te.exports.useContext(R_)||Bp}var mR=function(){function t(e,n){var r=this;this.inject=function(i,s){s===void 0&&(s=Bp);var o=r.name+s.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,s(r.rules,o,"@keyframes"))},this.toString=function(){return Ua(12,String(r.name))},this.name=e,this.id="sc-keyframes-"+e,this.rules=n}return t.prototype.getName=function(e){return e===void 0&&(e=Bp),this.name+e.hash},t}(),gR=/([A-Z])/,yR=/([A-Z])/g,vR=/^ms-/,wR=function(t){return"-"+t.toLowerCase()};function N_(t){return gR.test(t)?t.replace(yR,wR).replace(vR,"-ms-"):t}var P_=function(t){return t==null||t===!1||t===""};function Fs(t,e,n,r){if(Array.isArray(t)){for(var i,s=[],o=0,a=t.length;o<a;o+=1)(i=Fs(t[o],e,n,r))!==""&&(Array.isArray(i)?s.push.apply(s,i):s.push(i));return s}if(P_(t))return"";if(Up(t))return"."+t.styledComponentId;if($a(t)){if(typeof(l=t)!="function"||l.prototype&&l.prototype.isReactComponent||!e)return t;var u=t(e);return Fs(u,e,n,r)}var l;return t instanceof mR?n?(t.inject(n,r),t.getName(r)):t:$p(t)?function c(h,d){var g,y,_=[];for(var f in h)h.hasOwnProperty(f)&&!P_(h[f])&&(Array.isArray(h[f])&&h[f].isCss||$a(h[f])?_.push(N_(f)+":",h[f],";"):$p(h[f])?_.push.apply(_,c(h[f],f)):_.push(N_(f)+": "+(g=f,(y=h[f])==null||typeof y=="boolean"||y===""?"":typeof y!="number"||y===0||g in f_?String(y).trim():y+"px")+";"));return d?[d+" {"].concat(_,["}"]):_}(t):t.toString()}var x_=function(t){return Array.isArray(t)&&(t.isCss=!0),t};function _R(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];return $a(t)||$p(t)?x_(Fs(E_(Ec,[t].concat(n)))):n.length===0&&t.length===1&&typeof t[0]=="string"?t:x_(Fs(E_(t,n)))}var ER=function(t,e,n){return n===void 0&&(n=Vr),t.theme!==n.theme&&t.theme||e||n.theme},IR=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,SR=/(^-|-$)/g;function jp(t){return t.replace(IR,"-").replace(SR,"")}var TR=function(t){return Vp(C_(t)>>>0)};function kc(t){return typeof t=="string"&&!0}var zp=function(t){return typeof t=="function"||typeof t=="object"&&t!==null&&!Array.isArray(t)},kR=function(t){return t!=="__proto__"&&t!=="constructor"&&t!=="prototype"};function bR(t,e,n){var r=t[n];zp(e)&&zp(r)?O_(r,e):t[n]=e}function O_(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];for(var i=0,s=n;i<s.length;i++){var o=s[i];if(zp(o))for(var a in o)kR(a)&&bR(t,o[a],a)}return t}var D_=_n.createContext();D_.Consumer;var qp={};function L_(t,e,n){var r=Up(t),i=!kc(t),s=e.attrs,o=s===void 0?Ec:s,a=e.componentId,u=a===void 0?function(m,w){var v=typeof m!="string"?"sc":jp(m);qp[v]=(qp[v]||0)+1;var P=v+"-"+TR("5.3.1"+v+qp[v]);return w?w+"-"+P:P}(e.displayName,e.parentComponentId):a,l=e.displayName,c=l===void 0?function(m){return kc(m)?"styled."+m:"Styled("+I_(m)+")"}(t):l,h=e.displayName&&e.componentId?jp(e.displayName)+"-"+e.componentId:e.componentId||u,d=r&&t.attrs?Array.prototype.concat(t.attrs,o).filter(Boolean):o,g=e.shouldForwardProp;r&&t.shouldForwardProp&&(g=e.shouldForwardProp?function(m,w,v){return t.shouldForwardProp(m,w,v)&&e.shouldForwardProp(m,w,v)}:t.shouldForwardProp);var y,_=new uR(n,h,r?t.componentStyle:void 0),f=_.isStatic&&o.length===0,p=function(m,w){return function(v,P,C,V){var F=v.attrs,M=v.componentStyle,he=v.defaultProps,An=v.foldedComponentIds,fe=v.shouldForwardProp,de=v.styledComponentId,bt=v.target,Se=function(z,E,X){z===void 0&&(z=Vr);var x=nr({},E,{theme:z}),ae={};return X.forEach(function(se){var ue,Y,et,Ut=se;for(ue in $a(Ut)&&(Ut=Ut(x)),Ut)x[ue]=ae[ue]=ue==="className"?(Y=ae[ue],et=Ut[ue],Y&&et?Y+" "+et:Y||et):Ut[ue]}),[x,ae]}(ER(P,Te.exports.useContext(D_),he)||Vr,P,F),yn=Se[0],Ct=Se[1],mt=function(z,E,X,x){var ae=fR(),se=pR(),ue=E?z.generateAndInjectStyles(Vr,ae,se):z.generateAndInjectStyles(X,ae,se);return ue}(M,V,yn),Kn=C,vr=Ct.$as||P.$as||Ct.as||P.as||bt,D=kc(vr),T=Ct!==P?nr({},P,{},Ct):P,k={};for(var O in T)O[0]!=="$"&&O!=="as"&&(O==="forwardedAs"?k.as=T[O]:(fe?fe(O,m_,vr):!D||m_(O))&&(k[O]=T[O]));return P.style&&Ct.style!==P.style&&(k.style=nr({},P.style,{},Ct.style)),k.className=Array.prototype.concat(An,de,mt!==de?mt:null,P.className,Ct.className).filter(Boolean).join(" "),k.ref=Kn,Te.exports.createElement(vr,k)}(y,m,w,f)};return p.displayName=c,(y=_n.forwardRef(p)).attrs=d,y.componentStyle=_,y.displayName=c,y.shouldForwardProp=g,y.foldedComponentIds=r?Array.prototype.concat(t.foldedComponentIds,t.styledComponentId):Ec,y.styledComponentId=h,y.target=r?t.target:t,y.withComponent=function(m){var w=e.componentId,v=function(C,V){if(C==null)return{};var F,M,he={},An=Object.keys(C);for(M=0;M<An.length;M++)F=An[M],V.indexOf(F)>=0||(he[F]=C[F]);return he}(e,["componentId"]),P=w&&w+"-"+(kc(m)?m:jp(I_(m)));return L_(m,nr({},v,{attrs:d,componentId:P}),n)},Object.defineProperty(y,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(m){this._foldedDefaultProps=r?O_({},t.defaultProps,m):m}}),y.toString=function(){return"."+y.styledComponentId},i&&HA(y,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),y}var Hp=function(t){return function e(n,r,i){if(i===void 0&&(i=Vr),!cc.exports.isValidElementType(r))return Ua(1,String(r));var s=function(){return n(r,i,_R.apply(void 0,arguments))};return s.withConfig=function(o){return e(n,r,nr({},i,{},o))},s.attrs=function(o){return e(n,r,nr({},i,{attrs:Array.prototype.concat(i.attrs,o).filter(Boolean)}))},s}(L_,t)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(t){Hp[t]=Hp(t)});var LV=Hp,M_={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},$_=_n.createContext&&_n.createContext(M_),Br=function(){return Br=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t},Br.apply(this,arguments)},CR=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n};function U_(t){return t&&t.map(function(e,n){return _n.createElement(e.tag,Br({key:n},e.attr),U_(e.child))})}function Vs(t){return function(e){return _n.createElement(AR,Br({attr:Br({},t.attr)},e),U_(t.child))}}function AR(t){var e=function(n){var r=t.attr,i=t.size,s=t.title,o=CR(t,["attr","size","title"]),a=i||n.size||"1em",u;return n.className&&(u=n.className),t.className&&(u=(u?u+" ":"")+t.className),_n.createElement("svg",Br({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,o,{className:u,style:Br(Br({color:t.color||n.color},n.style),t.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),s&&_n.createElement("title",null,s),t.children)};return $_!==void 0?_n.createElement($_.Consumer,null,function(n){return e(n)}):e(M_)}function MV(t){return Vs({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"}}]})(t)}function $V(t){return Vs({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"}}]})(t)}var F_={},cn={};function Wp(t,e){return Wp=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},Wp(t,e)}function RR(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,Wp(t,e)}function NR(t){if(t.sheet)return t.sheet;for(var e=0;e<document.styleSheets.length;e++)if(document.styleSheets[e].ownerNode===t)return document.styleSheets[e]}function PR(t){var e=document.createElement("style");return e.setAttribute("data-emotion",t.key),t.nonce!==void 0&&e.setAttribute("nonce",t.nonce),e.appendChild(document.createTextNode("")),e}var V_=function(){function t(n){this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.before=null}var e=t.prototype;return e.insert=function(r){if(this.ctr%(this.isSpeedy?65e3:1)==0){var i=PR(this),s;this.tags.length===0?s=this.before:s=this.tags[this.tags.length-1].nextSibling,this.container.insertBefore(i,s),this.tags.push(i)}var o=this.tags[this.tags.length-1];if(this.isSpeedy){var a=NR(o);try{var u=r.charCodeAt(1)===105&&r.charCodeAt(0)===64;a.insertRule(r,u?0:a.cssRules.length)}catch{}}else o.appendChild(document.createTextNode(r));this.ctr++},e.flush=function(){this.tags.forEach(function(r){return r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},t}(),Gp="/*|*/",xR=Gp+"}";function OR(t){t&&bc.current.insert(t+"}")}var bc={current:null},DR=function(e,n,r,i,s,o,a,u,l,c){switch(e){case 1:{switch(n.charCodeAt(0)){case 64:return bc.current.insert(n+";"),"";case 108:if(n.charCodeAt(2)===98)return""}break}case 2:{if(u===0)return n+Gp;break}case 3:switch(u){case 102:case 112:return bc.current.insert(r[0]+n),"";default:return n+(c===0?Gp:"")}case-2:n.split(xR).forEach(OR)}},LR=function(e){e===void 0&&(e={});var n=e.key||"css",r;e.prefix!==void 0&&(r={prefix:e.prefix});var i=new d_(r),s={},o;{o=e.container||document.head;var a=document.querySelectorAll("style[data-emotion-"+n+"]");Array.prototype.forEach.call(a,function(c){var h=c.getAttribute("data-emotion-"+n);h.split(" ").forEach(function(d){s[d]=!0}),c.parentNode!==o&&o.appendChild(c)})}var u;i.use(e.stylisPlugins)(DR),u=function(h,d,g,y){var _=d.name;bc.current=g,i(h,d.styles),y&&(l.inserted[_]=!0)};var l={key:n,sheet:new V_({key:n,container:o,nonce:e.nonce,speedy:e.speedy}),nonce:e.nonce,inserted:s,registered:{},insert:u};return l},MR=!0;function B_(t,e,n){var r="";return n.split(" ").forEach(function(i){t[i]!==void 0?e.push(t[i]):r+=i+" "}),r}var Kp=function(e,n,r){var i=e.key+"-"+n.name;if((r===!1||MR===!1)&&e.registered[i]===void 0&&(e.registered[i]=n.styles),e.inserted[n.name]===void 0){var s=n;do e.insert("."+i,s,e.sheet,!0),s=s.next;while(s!==void 0)}};function $R(t){for(var e=0,n,r=0,i=t.length;i>=4;++r,i-=4)n=t.charCodeAt(r)&255|(t.charCodeAt(++r)&255)<<8|(t.charCodeAt(++r)&255)<<16|(t.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,e=(n&65535)*1540483477+((n>>>16)*59797<<16)^(e&65535)*1540483477+((e>>>16)*59797<<16);switch(i){case 3:e^=(t.charCodeAt(r+2)&255)<<16;case 2:e^=(t.charCodeAt(r+1)&255)<<8;case 1:e^=t.charCodeAt(r)&255,e=(e&65535)*1540483477+((e>>>16)*59797<<16)}return e^=e>>>13,e=(e&65535)*1540483477+((e>>>16)*59797<<16),((e^e>>>15)>>>0).toString(36)}var UR=/[A-Z]|^ms/g,FR=/_EMO_([^_]+?)_([^]*?)_EMO_/g,j_=function(e){return e.charCodeAt(1)===45},z_=function(e){return e!=null&&typeof e!="boolean"},Qp=p_(function(t){return j_(t)?t:t.replace(UR,"-$&").toLowerCase()}),q_=function(e,n){switch(e){case"animation":case"animationName":if(typeof n=="string")return n.replace(FR,function(r,i,s){return Ln={name:i,styles:s,next:Ln},i})}return f_[e]!==1&&!j_(e)&&typeof n=="number"&&n!==0?n+"px":n};function Va(t,e,n,r){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return Ln={name:n.name,styles:n.styles,next:Ln},n.name;if(n.styles!==void 0){var i=n.next;if(i!==void 0)for(;i!==void 0;)Ln={name:i.name,styles:i.styles,next:Ln},i=i.next;var s=n.styles+";";return s}return VR(t,e,n)}case"function":{if(t!==void 0){var o=Ln,a=n(t);return Ln=o,Va(t,e,a,r)}break}}if(e==null)return n;var u=e[n];return u!==void 0&&!r?u:n}function VR(t,e,n){var r="";if(Array.isArray(n))for(var i=0;i<n.length;i++)r+=Va(t,e,n[i],!1);else for(var s in n){var o=n[s];if(typeof o!="object")e!=null&&e[o]!==void 0?r+=s+"{"+e[o]+"}":z_(o)&&(r+=Qp(s)+":"+q_(s,o)+";");else if(Array.isArray(o)&&typeof o[0]=="string"&&(e==null||e[o[0]]===void 0))for(var a=0;a<o.length;a++)z_(o[a])&&(r+=Qp(s)+":"+q_(s,o[a])+";");else{var u=Va(t,e,o,!1);switch(s){case"animation":case"animationName":{r+=Qp(s)+":"+u+";";break}default:r+=s+"{"+u+"}"}}}return r}var H_=/label:\s*([^\s;\n{]+)\s*;/g,Ln,Ba=function(e,n,r){if(e.length===1&&typeof e[0]=="object"&&e[0]!==null&&e[0].styles!==void 0)return e[0];var i=!0,s="";Ln=void 0;var o=e[0];o==null||o.raw===void 0?(i=!1,s+=Va(r,n,o,!1)):s+=o[0];for(var a=1;a<e.length;a++)s+=Va(r,n,e[a],s.charCodeAt(s.length-1)===46),i&&(s+=o[a]);H_.lastIndex=0;for(var u="",l;(l=H_.exec(s))!==null;)u+="-"+l[1];var c=$R(s)+u;return{name:c,styles:s,next:Ln}},Yp=Object.prototype.hasOwnProperty,W_=Te.exports.createContext(typeof HTMLElement!="undefined"?LR():null),Cc=Te.exports.createContext({}),BR=W_.Provider,Ac=function(e){var n=function(i,s){return Te.exports.createElement(W_.Consumer,null,function(o){return e(i,o,s)})};return Te.exports.forwardRef(n)},Xp="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",jR=function(e,n){var r={};for(var i in n)Yp.call(n,i)&&(r[i]=n[i]);return r[Xp]=e,r},G_=function(e,n,r,i){var s=r===null?n.css:n.css(r);typeof s=="string"&&e.registered[s]!==void 0&&(s=e.registered[s]);var o=n[Xp],a=[s],u="";typeof n.className=="string"?u=B_(e.registered,a,n.className):n.className!=null&&(u=n.className+" ");var l=Ba(a);Kp(e,l,typeof o=="string"),u+=e.key+"-"+l.name;var c={};for(var h in n)Yp.call(n,h)&&h!=="css"&&h!==Xp&&(c[h]=n[h]);c.ref=i,c.className=u;var d=Te.exports.createElement(o,c);return d},zR=Ac(function(t,e,n){return typeof t.css=="function"?Te.exports.createElement(Cc.Consumer,null,function(r){return G_(e,t,r,n)}):G_(e,t,null,n)});function K_(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return Ba(e)}var Q_=function(e,n){var r=arguments;if(n==null||!Yp.call(n,"css"))return Te.exports.createElement.apply(void 0,r);var i=r.length,s=new Array(i);s[0]=zR,s[1]=jR(e,n);for(var o=2;o<i;o++)s[o]=r[o];return Te.exports.createElement.apply(null,s)},qR=Ac(function(t,e){var n=t.styles;if(typeof n=="function")return Te.exports.createElement(Cc.Consumer,null,function(i){var s=Ba([n(i)]);return Te.exports.createElement(Y_,{serialized:s,cache:e})});var r=Ba([n]);return Te.exports.createElement(Y_,{serialized:r,cache:e})}),Y_=function(t){RR(e,t);function e(r,i,s){return t.call(this,r,i,s)||this}var n=e.prototype;return n.componentDidMount=function(){this.sheet=new V_({key:this.props.cache.key+"-global",nonce:this.props.cache.sheet.nonce,container:this.props.cache.sheet.container});var i=document.querySelector("style[data-emotion-"+this.props.cache.key+'="'+this.props.serialized.name+'"]');i!==null&&this.sheet.tags.push(i),this.props.cache.sheet.tags.length&&(this.sheet.before=this.props.cache.sheet.tags[0]),this.insertStyles()},n.componentDidUpdate=function(i){i.serialized.name!==this.props.serialized.name&&this.insertStyles()},n.insertStyles=function(){if(this.props.serialized.next!==void 0&&Kp(this.props.cache,this.props.serialized.next,!0),this.sheet.tags.length){var i=this.sheet.tags[this.sheet.tags.length-1].nextElementSibling;this.sheet.before=i,this.sheet.flush()}this.props.cache.insert("",this.props.serialized,this.sheet,!1)},n.componentWillUnmount=function(){this.sheet.flush()},n.render=function(){return null},e}(Te.exports.Component),HR=function(){var e=K_.apply(void 0,arguments),n="animation-"+e.name;return{name:n,styles:"@keyframes "+n+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},WR=function t(e){for(var n=e.length,r=0,i="";r<n;r++){var s=e[r];if(s!=null){var o=void 0;switch(typeof s){case"boolean":break;case"object":{if(Array.isArray(s))o=t(s);else{o="";for(var a in s)s[a]&&a&&(o&&(o+=" "),o+=a)}break}default:o=s}o&&(i&&(i+=" "),i+=o)}}return i};function GR(t,e,n){var r=[],i=B_(t,r,n);return r.length<2?n:i+e(r)}var KR=Ac(function(t,e){return Te.exports.createElement(Cc.Consumer,null,function(n){var r=!1,i=function(){for(var l=arguments.length,c=new Array(l),h=0;h<l;h++)c[h]=arguments[h];var d=Ba(c,e.registered);return Kp(e,d,!1),e.key+"-"+d.name},s=function(){for(var l=arguments.length,c=new Array(l),h=0;h<l;h++)c[h]=arguments[h];return GR(e.registered,i,WR(c))},o={css:i,cx:s,theme:n},a=t.children(o);return r=!0,a})}),QR=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",ClassNames:KR,Global:qR,createElement:Q_,jsx:Q_,keyframes:HR,CacheProvider:BR,ThemeContext:Cc,withEmotionCache:Ac,css:K_}),X_=Ab(QR);Object.defineProperty(cn,"__esModule",{value:!0});cn.default=r1;cn.skeletonStyles=cn.skeletonKeyframes=cn.defaultHighlightColor=cn.defaultBaseColor=void 0;YR(Te.exports);var Bs=X_;function YR(t){return t&&t.__esModule?t:{default:t}}function J_(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function XR(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?J_(n,!0).forEach(function(r){JR(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):J_(n).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function JR(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Z_(){var t=ZR([`
  0% {
    background-position: -200px 0;
  }
  `,`
  100% {
    background-position: calc(200px + 100%) 0;
  }
`]);return Z_=function(){return t},t}function ZR(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}var Rc="#eee";cn.defaultBaseColor=Rc;var e1="#f5f5f5";cn.defaultHighlightColor=e1;var t1=function(e,n){return(0,Bs.keyframes)(Z_(),n>0?"".concat(Math.floor(1/(e+n)*e*100),`% {
    background-position: calc(200px + 100%) 0;
  }`):void 0)};cn.skeletonKeyframes=t1;var n1=(0,Bs.css)("background-color:",Rc,";background-image:linear-gradient( 90deg,",Rc,",",e1,",",Rc," );background-size:200px 100%;background-repeat:no-repeat;border-radius:4px;display:inline-block;line-height:1;width:100%;;label:skeletonStyles;");cn.skeletonStyles=n1;function r1(t){for(var e=t.count,n=t.duration,r=t.width,i=t.wrapper,s=t.height,o=t.circle,a=t.delay,u=t.style,l=t.className,c=[],h=0;h<e;h++){var d={};r!==null&&(d.width=r),s!==null&&(d.height=s),r!==null&&s!==null&&o&&(d.borderRadius="50%");var g="react-loading-skeleton";l&&(g+=" "+l),c.push((0,Bs.jsx)("span",{key:h,className:g,css:(0,Bs.css)(n1," animation:",t1(n,a)," ",n+a,"s ease-in-out infinite;label:Skeleton;"),style:XR({},u,{},d)},"\u200C"))}return(0,Bs.jsx)("span",null,i?c.map(function(y,_){return(0,Bs.jsx)(i,{key:_},y,"\u200C")}):c)}r1.defaultProps={count:1,duration:1.2,width:null,wrapper:null,height:null,circle:!1,delay:0};var Nc={};Object.defineProperty(Nc,"__esModule",{value:!0});Nc.default=void 0;var eN=tN(Te.exports),i1=X_,s1=cn;function o1(){if(typeof WeakMap!="function")return null;var t=new WeakMap;return o1=function(){return t},t}function tN(t){if(t&&t.__esModule)return t;if(t===null||ja(t)!=="object"&&typeof t!="function")return{default:t};var e=o1();if(e&&e.has(t))return e.get(t);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in t)if(Object.prototype.hasOwnProperty.call(t,i)){var s=r?Object.getOwnPropertyDescriptor(t,i):null;s&&(s.get||s.set)?Object.defineProperty(n,i,s):n[i]=t[i]}return n.default=t,e&&e.set(t,n),n}function ja(t){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?ja=function(n){return typeof n}:ja=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},ja(t)}function nN(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a1(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function rN(t,e,n){return e&&a1(t.prototype,e),n&&a1(t,n),t}function iN(t,e){return e&&(ja(e)==="object"||typeof e=="function")?e:sN(t)}function sN(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function Jp(t){return Jp=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},Jp(t)}function oN(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&Zp(t,e)}function Zp(t,e){return Zp=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},Zp(t,e)}function aN(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var u1=function(t){oN(e,t);function e(){return nN(this,e),iN(this,Jp(e).apply(this,arguments))}return rN(e,[{key:"render",value:function(){var r=this.props,i=r.color,s=r.highlightColor,o=r.children,a=(0,i1.css)(".react-loading-skeleton{background-color:",i,";background-image:linear-gradient( 90deg,",i,",",s,",",i," );};label:SkeletonTheme;");return(0,i1.jsx)("div",{css:a},o)}}]),e}(eN.Component);Nc.default=u1;aN(u1,"defaultProps",{color:s1.defaultBaseColor,highlightColor:s1.defaultHighlightColor});(function(t){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return e.default}}),Object.defineProperty(t,"SkeletonTheme",{enumerable:!0,get:function(){return n.default}});var e=r(cn),n=r(Nc);function r(i){return i&&i.__esModule?i:{default:i}}})(F_);var UV=Cb(F_);function FV(t){return Vs({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M885.9 490.3c3.6-12 5.4-24.4 5.4-37 0-28.3-9.3-55.5-26.1-77.7 3.6-12 5.4-24.4 5.4-37 0-28.3-9.3-55.5-26.1-77.7 3.6-12 5.4-24.4 5.4-37 0-51.6-30.7-98.1-78.3-118.4a66.1 66.1 0 0 0-26.5-5.4H273v428h.3l85.8 310.8C372.9 889 418.9 924 470.9 924c29.7 0 57.4-11.8 77.9-33.4 20.5-21.5 31-49.7 29.5-79.4l-6-122.9h239.9c12.1 0 23.9-3.2 34.3-9.3 40.4-23.5 65.5-66.1 65.5-111 0-28.3-9.3-55.5-26.1-77.7zM112 132v364c0 17.7 14.3 32 32 32h65V100h-65c-17.7 0-32 14.3-32 32z"}}]})(t)}function VV(t){return Vs({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M885.9 533.7c16.8-22.2 26.1-49.4 26.1-77.7 0-44.9-25.1-87.4-65.5-111.1a67.67 67.67 0 0 0-34.3-9.3H572.4l6-122.9c1.4-29.7-9.1-57.9-29.5-79.4A106.62 106.62 0 0 0 471 99.9c-52 0-98 35-111.8 85.1l-85.9 311h-.3v428h472.3c9.2 0 18.2-1.8 26.5-5.4 47.6-20.3 78.3-66.8 78.3-118.4 0-12.6-1.8-25-5.4-37 16.8-22.2 26.1-49.4 26.1-77.7 0-12.6-1.8-25-5.4-37 16.8-22.2 26.1-49.4 26.1-77.7-.2-12.6-2-25.1-5.6-37.1zM112 528v364c0 17.7 14.3 32 32 32h65V496h-65c-17.7 0-32 14.3-32 32z"}}]})(t)}function BV(t){return Vs({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M885.9 490.3c3.6-12 5.4-24.4 5.4-37 0-28.3-9.3-55.5-26.1-77.7 3.6-12 5.4-24.4 5.4-37 0-28.3-9.3-55.5-26.1-77.7 3.6-12 5.4-24.4 5.4-37 0-51.6-30.7-98.1-78.3-118.4a66.1 66.1 0 0 0-26.5-5.4H144c-17.7 0-32 14.3-32 32v364c0 17.7 14.3 32 32 32h129.3l85.8 310.8C372.9 889 418.9 924 470.9 924c29.7 0 57.4-11.8 77.9-33.4 20.5-21.5 31-49.7 29.5-79.4l-6-122.9h239.9c12.1 0 23.9-3.2 34.3-9.3 40.4-23.5 65.5-66.1 65.5-111 0-28.3-9.3-55.5-26.1-77.7zM184 456V172h81v284h-81zm627.2 160.4H496.8l9.6 198.4c.6 11.9-4.7 23.1-14.6 30.5-6.1 4.5-13.6 6.8-21.1 6.7a44.28 44.28 0 0 1-42.2-32.3L329 459.2V172h415.4a56.85 56.85 0 0 1 33.6 51.8c0 9.7-2.3 18.9-6.9 27.3l-13.9 25.4 21.9 19a56.76 56.76 0 0 1 19.6 43c0 9.7-2.3 18.9-6.9 27.3l-13.9 25.4 21.9 19a56.76 56.76 0 0 1 19.6 43c0 9.7-2.3 18.9-6.9 27.3l-14 25.5 21.9 19a56.76 56.76 0 0 1 19.6 43c0 19.1-11 37.5-28.8 48.4z"}}]})(t)}function jV(t){return Vs({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M885.9 533.7c16.8-22.2 26.1-49.4 26.1-77.7 0-44.9-25.1-87.4-65.5-111.1a67.67 67.67 0 0 0-34.3-9.3H572.4l6-122.9c1.4-29.7-9.1-57.9-29.5-79.4A106.62 106.62 0 0 0 471 99.9c-52 0-98 35-111.8 85.1l-85.9 311H144c-17.7 0-32 14.3-32 32v364c0 17.7 14.3 32 32 32h601.3c9.2 0 18.2-1.8 26.5-5.4 47.6-20.3 78.3-66.8 78.3-118.4 0-12.6-1.8-25-5.4-37 16.8-22.2 26.1-49.4 26.1-77.7 0-12.6-1.8-25-5.4-37 16.8-22.2 26.1-49.4 26.1-77.7-.2-12.6-2-25.1-5.6-37.1zM184 852V568h81v284h-81zm636.4-353l-21.9 19 13.9 25.4a56.2 56.2 0 0 1 6.9 27.3c0 16.5-7.2 32.2-19.6 43l-21.9 19 13.9 25.4a56.2 56.2 0 0 1 6.9 27.3c0 16.5-7.2 32.2-19.6 43l-21.9 19 13.9 25.4a56.2 56.2 0 0 1 6.9 27.3c0 22.4-13.2 42.6-33.6 51.8H329V564.8l99.5-360.5a44.1 44.1 0 0 1 42.2-32.3c7.6 0 15.1 2.2 21.1 6.7 9.9 7.4 15.2 18.6 14.6 30.5l-9.6 198.4h314.4C829 418.5 840 436.9 840 456c0 16.5-7.2 32.1-19.6 43z"}}]})(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const l1=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)==55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)==56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},uN=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},c1={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,u=i+2<t.length,l=u?t[i+2]:0,c=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|l>>6,g=l&63;u||(g=64,o||(d=64)),r.push(n[c],n[h],n[d],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(l1(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):uN(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const l=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||l==null||h==null)throw Error();const d=s<<2|a>>4;if(r.push(d),l!==64){const g=a<<4&240|l>>2;if(r.push(g),h!==64){const y=l<<6&192|h;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},lN=function(t){const e=l1(t);return c1.encodeByteArray(e,!0)},h1=function(t){return lN(t).replace(/\./g,"")},cN=function(t){try{return c1.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function Pc(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!hN(n)||(t[n]=Pc(t[n],e[n]));return t}function hN(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dN{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function d1(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[h1(JSON.stringify(n)),h1(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ye(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function f1(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ye())}function em(){try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function fN(){return typeof self=="object"&&self.self===self}function tm(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function xc(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function pN(){return ye().indexOf("Electron/")>=0}function nm(){const t=ye();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function mN(){return ye().indexOf("MSAppHost/")>=0}function gN(){return!em()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Oc(){return typeof indexedDB=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yN="FirebaseError";class Yt extends Error{constructor(e,n,r){super(n);this.code=e,this.customData=r,this.name=yN,Object.setPrototypeOf(this,Yt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,bi.prototype.create)}}class bi{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?vN(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Yt(i,a,r)}}function vN(t,e){return t.replace(wN,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const wN=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p1(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function _N(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function rm(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(m1(s)&&m1(o)){if(!rm(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function m1(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function js(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function zs(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function za(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function g1(t,e){const n=new EN(t,e);return n.subscribe.bind(n)}class EN{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");IN(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=im),i.error===void 0&&(i.error=im),i.complete===void 0&&(i.complete=im);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console!="undefined"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function IN(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function im(){}/**
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
 */function B(t){return t&&t._delegate?t._delegate:t}/*! *****************************************************************************
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
***************************************************************************** */function sm(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function SN(t,e,n,r){function i(s){return s instanceof n?s:new n(function(o){o(s)})}return new(n||(n=Promise))(function(s,o){function a(c){try{l(r.next(c))}catch(h){o(h)}}function u(c){try{l(r.throw(c))}catch(h){o(h)}}function l(c){c.done?s(c.value):i(c.value).then(a,u)}l((r=r.apply(t,e||[])).next())})}function TN(t,e){var n={label:0,sent:function(){if(s[0]&1)throw s[1];return s[1]},trys:[],ops:[]},r,i,s,o;return o={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function a(l){return function(c){return u([l,c])}}function u(l){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,i&&(s=l[0]&2?i.return:l[0]?i.throw||((s=i.return)&&s.call(i),0):i.next)&&!(s=s.call(i,l[1])).done)return s;switch(i=0,s&&(l=[l[0]&2,s.value]),l[0]){case 0:case 1:s=l;break;case 4:return n.label++,{value:l[1],done:!1};case 5:n.label++,i=l[1],l=[0];continue;case 7:l=n.ops.pop(),n.trys.pop();continue;default:if(s=n.trys,!(s=s.length>0&&s[s.length-1])&&(l[0]===6||l[0]===2)){n=0;continue}if(l[0]===3&&(!s||l[1]>s[0]&&l[1]<s[3])){n.label=l[1];break}if(l[0]===6&&n.label<s[1]){n.label=s[1],s=l;break}if(s&&n.label<s[2]){n.label=s[2],n.ops.push(l);break}s[2]&&n.ops.pop(),n.trys.pop();continue}l=e.call(t,n)}catch(c){l=[6,c],i=0}finally{r=s=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}}function om(t){var e=typeof Symbol=="function"&&Symbol.iterator,n=e&&t[e],r=0;if(n)return n.call(t);if(t&&typeof t.length=="number")return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function Dc(t,e){var n=typeof Symbol=="function"&&t[Symbol.iterator];if(!n)return t;var r=n.call(t),i,s=[],o;try{for(;(e===void 0||e-- >0)&&!(i=r.next()).done;)s.push(i.value)}catch(a){o={error:a}}finally{try{i&&!i.done&&(n=r.return)&&n.call(r)}finally{if(o)throw o.error}}return s}function y1(t,e,n){if(n||arguments.length===2)for(var r=0,i=e.length,s;r<i;r++)(s||!(r in e))&&(s||(s=Array.prototype.slice.call(e,0,r)),s[r]=e[r]);return t.concat(s||Array.prototype.slice.call(e))}var Sn=function(){function t(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}return t.prototype.setInstantiationMode=function(e){return this.instantiationMode=e,this},t.prototype.setMultipleInstances=function(e){return this.multipleInstances=e,this},t.prototype.setServiceProps=function(e){return this.serviceProps=e,this},t.prototype.setInstanceCreatedCallback=function(e){return this.onInstanceCreated=e,this},t}();/**
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
 */var Ci="[DEFAULT]";/**
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
 */var kN=function(){function t(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}return t.prototype.get=function(e){var n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){var r=new dN;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{var i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise},t.prototype.getImmediate=function(e){var n,r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error("Service "+this.name+" is not available")}},t.prototype.getComponent=function(){return this.component},t.prototype.setComponent=function(e){var n,r;if(e.name!==this.name)throw Error("Mismatching Component "+e.name+" for Provider "+this.name+".");if(this.component)throw Error("Component for "+this.name+" has already been provided");if(this.component=e,!!this.shouldAutoInitialize()){if(CN(e))try{this.getOrInitializeService({instanceIdentifier:Ci})}catch{}try{for(var i=om(this.instancesDeferred.entries()),s=i.next();!s.done;s=i.next()){var o=Dc(s.value,2),a=o[0],u=o[1],l=this.normalizeInstanceIdentifier(a);try{var c=this.getOrInitializeService({instanceIdentifier:l});u.resolve(c)}catch{}}}catch(h){n={error:h}}finally{try{s&&!s.done&&(r=i.return)&&r.call(i)}finally{if(n)throw n.error}}}},t.prototype.clearInstance=function(e){e===void 0&&(e=Ci),this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)},t.prototype.delete=function(){return SN(this,void 0,void 0,function(){var e;return TN(this,function(n){switch(n.label){case 0:return e=Array.from(this.instances.values()),[4,Promise.all(y1(y1([],Dc(e.filter(function(r){return"INTERNAL"in r}).map(function(r){return r.INTERNAL.delete()}))),Dc(e.filter(function(r){return"_delete"in r}).map(function(r){return r._delete()}))))];case 1:return n.sent(),[2]}})})},t.prototype.isComponentSet=function(){return this.component!=null},t.prototype.isInitialized=function(e){return e===void 0&&(e=Ci),this.instances.has(e)},t.prototype.getOptions=function(e){return e===void 0&&(e=Ci),this.instancesOptions.get(e)||{}},t.prototype.initialize=function(e){var n,r;e===void 0&&(e={});var i=e.options,s=i===void 0?{}:i,o=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(o))throw Error(this.name+"("+o+") has already been initialized");if(!this.isComponentSet())throw Error("Component "+this.name+" has not been registered yet");var a=this.getOrInitializeService({instanceIdentifier:o,options:s});try{for(var u=om(this.instancesDeferred.entries()),l=u.next();!l.done;l=u.next()){var c=Dc(l.value,2),h=c[0],d=c[1],g=this.normalizeInstanceIdentifier(h);o===g&&d.resolve(a)}}catch(y){n={error:y}}finally{try{l&&!l.done&&(r=u.return)&&r.call(u)}finally{if(n)throw n.error}}return a},t.prototype.onInit=function(e,n){var r,i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);var o=this.instances.get(i);return o&&e(o,i),function(){s.delete(e)}},t.prototype.invokeOnInitCallbacks=function(e,n){var r,i,s=this.onInitCallbacks.get(n);if(!!s)try{for(var o=om(s),a=o.next();!a.done;a=o.next()){var u=a.value;try{u(e,n)}catch{}}}catch(l){r={error:l}}finally{try{a&&!a.done&&(i=o.return)&&i.call(o)}finally{if(r)throw r.error}}},t.prototype.getOrInitializeService=function(e){var n=e.instanceIdentifier,r=e.options,i=r===void 0?{}:r,s=this.instances.get(n);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:bN(n),options:i}),this.instances.set(n,s),this.instancesOptions.set(n,i),this.invokeOnInitCallbacks(s,n),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,n,s)}catch{}return s||null},t.prototype.normalizeInstanceIdentifier=function(e){return e===void 0&&(e=Ci),this.component?this.component.multipleInstances?e:Ci:e},t.prototype.shouldAutoInitialize=function(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"},t}();function bN(t){return t===Ci?void 0:t}function CN(t){return t.instantiationMode==="EAGER"}/**
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
 */var AN=function(){function t(e){this.name=e,this.providers=new Map}return t.prototype.addComponent=function(e){var n=this.getProvider(e.name);if(n.isComponentSet())throw new Error("Component "+e.name+" has already been registered with "+this.name);n.setComponent(e)},t.prototype.addOrOverwriteComponent=function(e){var n=this.getProvider(e.name);n.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)},t.prototype.getProvider=function(e){if(this.providers.has(e))return this.providers.get(e);var n=new kN(e,this);return this.providers.set(e,n),n},t.prototype.getProviders=function(){return Array.from(this.providers.values())},t}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const am=[];var te;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(te||(te={}));const v1={debug:te.DEBUG,verbose:te.VERBOSE,info:te.INFO,warn:te.WARN,error:te.ERROR,silent:te.SILENT},RN=te.INFO,NN={[te.DEBUG]:"log",[te.VERBOSE]:"log",[te.INFO]:"info",[te.WARN]:"warn",[te.ERROR]:"error"},PN=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=NN[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Lc{constructor(e){this.name=e,this._logLevel=RN,this._logHandler=PN,this._userLogHandler=null,am.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in te))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?v1[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,te.DEBUG,...e),this._logHandler(this,te.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,te.VERBOSE,...e),this._logHandler(this,te.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,te.INFO,...e),this._logHandler(this,te.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,te.WARN,...e),this._logHandler(this,te.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,te.ERROR,...e),this._logHandler(this,te.ERROR,...e)}}function xN(t){am.forEach(e=>{e.setLogLevel(t)})}function ON(t,e){for(const n of am){let r=null;e&&e.level&&(r=v1[e.level]),t===null?n.userLogHandler=null:n.userLogHandler=(i,s,...o)=>{const a=o.map(u=>{if(u==null)return null;if(typeof u=="string")return u;if(typeof u=="number"||typeof u=="boolean")return u.toString();if(u instanceof Error)return u.message;try{return JSON.stringify(u)}catch{return null}}).filter(u=>u).join(" ");s>=(r!=null?r:i.logLevel)&&t({level:te[s].toLowerCase(),message:a,args:o,type:i.name})}}}/**
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
 */class DN{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(LN(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function LN(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const um="@firebase/app",w1="0.7.4";/**
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
 */const lm=new Lc("@firebase/app"),MN="@firebase/app-compat",$N="@firebase/analytics-compat",UN="@firebase/analytics",FN="@firebase/app-check-compat",VN="@firebase/app-check",BN="@firebase/auth",jN="@firebase/auth-compat",zN="@firebase/database",qN="@firebase/database-compat",HN="@firebase/functions",WN="@firebase/functions-compat",GN="@firebase/installations",KN="@firebase/installations-compat",QN="@firebase/messaging",YN="@firebase/messaging-compat",XN="@firebase/performance",JN="@firebase/performance-compat",ZN="@firebase/remote-config",eP="@firebase/remote-config-compat",tP="@firebase/storage",nP="@firebase/storage-compat",rP="@firebase/firestore",iP="@firebase/firestore-compat",sP="firebase",oP="9.1.3";/**
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
 */const Ai="[DEFAULT]",aP={[um]:"fire-core",[MN]:"fire-core-compat",[UN]:"fire-analytics",[$N]:"fire-analytics-compat",[VN]:"fire-app-check",[FN]:"fire-app-check-compat",[BN]:"fire-auth",[jN]:"fire-auth-compat",[zN]:"fire-rtdb",[qN]:"fire-rtdb-compat",[HN]:"fire-fn",[WN]:"fire-fn-compat",[GN]:"fire-iid",[KN]:"fire-iid-compat",[QN]:"fire-fcm",[YN]:"fire-fcm-compat",[XN]:"fire-perf",[JN]:"fire-perf-compat",[ZN]:"fire-rc",[eP]:"fire-rc-compat",[tP]:"fire-gcs",[nP]:"fire-gcs-compat",[rP]:"fire-fst",[iP]:"fire-fst-compat","fire-js":"fire-js",[sP]:"fire-js-all"};/**
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
 */const jr=new Map,qa=new Map;function Mc(t,e){try{t.container.addComponent(e)}catch(n){lm.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function _1(t,e){t.container.addOrOverwriteComponent(e)}function zr(t){const e=t.name;if(qa.has(e))return lm.debug(`There were multiple attempts to register component ${e}.`),!1;qa.set(e,t);for(const n of jr.values())Mc(n,t);return!0}function E1(t,e){return t.container.getProvider(e)}function uP(t,e,n=Ai){E1(t,e).clearInstance(n)}function lP(){qa.clear()}/**
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
 */const cP={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function."},Ha=new bi("app","Firebase",cP);/**
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
 */class hP{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Sn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ha.create("app-deleted",{appName:this._name})}}/**
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
 */const qr=oP;function I1(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:Ai,automaticDataCollectionEnabled:!1},e),r=n.name;if(typeof r!="string"||!r)throw Ha.create("bad-app-name",{appName:String(r)});const i=jr.get(r);if(i){if(rm(t,i.options)&&rm(n,i.config))return i;throw Ha.create("duplicate-app",{appName:r})}const s=new AN(r);for(const a of qa.values())s.addComponent(a);const o=new hP(t,n,s);return jr.set(r,o),o}function dP(t=Ai){const e=jr.get(t);if(!e)throw Ha.create("no-app",{appName:t});return e}function fP(){return Array.from(jr.values())}async function S1(t){const e=t.name;jr.has(e)&&(jr.delete(e),await Promise.all(t.container.getProviders().map(n=>n.delete())),t.isDeleted=!0)}function hn(t,e,n){var r;let i=(r=aP[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),lm.warn(a.join(" "));return}zr(new Sn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}function T1(t,e){if(t!==null&&typeof t!="function")throw Ha.create("invalid-log-argument");ON(t,e)}function k1(t){xN(t)}/**
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
 */function pP(t){zr(new Sn("platform-logger",e=>new DN(e),"PRIVATE")),hn(um,w1,t),hn(um,w1,"esm2017"),hn("fire-js","")}pP("");var mP=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",SDK_VERSION:qr,_DEFAULT_ENTRY_NAME:Ai,_addComponent:Mc,_addOrOverwriteComponent:_1,_apps:jr,_clearComponents:lP,_components:qa,_getProvider:E1,_registerComponent:zr,_removeServiceInstance:uP,deleteApp:S1,getApp:dP,getApps:fP,initializeApp:I1,onLog:T1,registerVersion:hn,setLogLevel:k1,FirebaseError:Yt});/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gP{constructor(e,n){this._delegate=e,this.firebase=n,Mc(e,new Sn("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),S1(this._delegate)))}_getService(e,n=Ai){var r;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(e);return!i.isInitialized()&&((r=i.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&i.initialize(),i.getImmediate({identifier:n})}_removeServiceInstance(e,n=Ai){this._delegate.container.getProvider(e).clearInstance(n)}_addComponent(e){Mc(this._delegate,e)}_addOrOverwriteComponent(e){_1(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
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
 */const yP={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance."},b1=new bi("app-compat","Firebase",yP);/**
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
 */function vP(t){const e={},n={__esModule:!0,initializeApp:s,app:i,registerVersion:hn,setLogLevel:k1,onLog:T1,apps:null,SDK_VERSION:qr,INTERNAL:{registerComponent:a,removeApp:r,useAsService:u,modularAPIs:mP}};n.default=n,Object.defineProperty(n,"apps",{get:o});function r(l){delete e[l]}function i(l){if(l=l||Ai,!p1(e,l))throw b1.create("no-app",{appName:l});return e[l]}i.App=t;function s(l,c={}){const h=I1(l,c);if(p1(e,h.name))return e[h.name];const d=new t(h,n);return e[h.name]=d,d}function o(){return Object.keys(e).map(l=>e[l])}function a(l){const c=l.name,h=c.replace("-compat","");if(zr(l)&&l.type==="PUBLIC"){const d=(g=i())=>{if(typeof g[h]!="function")throw b1.create("invalid-app-argument",{appName:c});return g[h]()};l.serviceProps!==void 0&&Pc(d,l.serviceProps),n[h]=d,t.prototype[h]=function(...g){return this._getService.bind(this,c).apply(this,l.multipleInstances?g:[])}}return l.type==="PUBLIC"?n[h]:null}function u(l,c){return c==="serverAuth"?null:c}return n}/**
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
 */function C1(){const t=vP(gP);t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:C1,extendNamespace:e,createSubscribe:g1,ErrorFactory:bi,deepExtend:Pc});function e(n){Pc(t,n)}return t}const wP=C1();/**
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
 */const A1=new Lc("@firebase/app-compat"),_P="@firebase/app-compat",EP="0.1.5";/**
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
 */function IP(t){hn(_P,EP,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */if(fN()&&self.firebase!==void 0){A1.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);const t=self.firebase.SDK_VERSION;t&&t.indexOf("LITE")>=0&&A1.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}const qs=wP;IP();var SP="firebase",TP="9.1.3";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */qs.registerVersion(SP,TP,"app-compat");const Wa={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},Hs={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kP(){return{["admin-restricted-operation"]:"This operation is restricted to administrators only.",["argument-error"]:"",["app-not-authorized"]:"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",["app-not-installed"]:"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",["captcha-check-failed"]:"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",["code-expired"]:"The SMS code has expired. Please re-send the verification code to try again.",["cordova-not-ready"]:"Cordova framework is not ready.",["cors-unsupported"]:"This browser is not supported.",["credential-already-in-use"]:"This credential is already associated with a different user account.",["custom-token-mismatch"]:"The custom token corresponds to a different audience.",["requires-recent-login"]:"This operation is sensitive and requires recent authentication. Log in again before retrying this request.",["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",["dynamic-link-not-activated"]:"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",["email-change-needs-verification"]:"Multi-factor users must always have a verified email.",["email-already-in-use"]:"The email address is already in use by another account.",["emulator-config-failed"]:'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',["expired-action-code"]:"The action code has expired.",["cancelled-popup-request"]:"This operation has been cancelled due to another conflicting popup being opened.",["internal-error"]:"An internal AuthError has occurred.",["invalid-app-credential"]:"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",["invalid-app-id"]:"The mobile app identifier is not registed for the current project.",["invalid-user-token"]:"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",["invalid-auth-event"]:"An internal AuthError has occurred.",["invalid-verification-code"]:"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.",["invalid-continue-uri"]:"The continue URL provided in the request is invalid.",["invalid-cordova-configuration"]:"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",["invalid-custom-token"]:"The custom token format is incorrect. Please check the documentation.",["invalid-dynamic-link-domain"]:"The provided dynamic link domain is not configured or authorized for the current project.",["invalid-email"]:"The email address is badly formatted.",["invalid-emulator-scheme"]:"Emulator URL must start with a valid scheme (http:// or https://).",["invalid-api-key"]:"Your API key is invalid, please check you have copied it correctly.",["invalid-cert-hash"]:"The SHA-1 certificate hash provided is invalid.",["invalid-credential"]:"The supplied auth credential is malformed or has expired.",["invalid-message-payload"]:"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-multi-factor-session"]:"The request does not contain a valid proof of first factor successful sign-in.",["invalid-oauth-provider"]:"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",["invalid-oauth-client-id"]:"The OAuth client ID provided is either invalid or does not match the specified API key.",["unauthorized-domain"]:"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",["invalid-action-code"]:"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",["wrong-password"]:"The password is invalid or the user does not have a password.",["invalid-persistence-type"]:"The specified persistence type is invalid. It can only be local, session or none.",["invalid-phone-number"]:"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",["invalid-provider-id"]:"The specified provider ID is invalid.",["invalid-recipient-email"]:"The email corresponding to this action failed to send as the provided recipient email address is invalid.",["invalid-sender"]:"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-verification-id"]:"The verification ID used to create the phone auth credential is invalid.",["invalid-tenant-id"]:"The Auth instance's tenant ID is invalid.",["missing-android-pkg-name"]:"An Android Package Name must be provided if the Android App is required to be installed.",["auth-domain-config-required"]:"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",["missing-app-credential"]:"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",["missing-verification-code"]:"The phone auth credential was created with an empty SMS verification code.",["missing-continue-uri"]:"A continue URL must be provided in the request.",["missing-iframe-start"]:"An internal AuthError has occurred.",["missing-ios-bundle-id"]:"An iOS Bundle ID must be provided if an App Store ID is provided.",["missing-or-invalid-nonce"]:"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.",["missing-multi-factor-info"]:"No second factor identifier is provided.",["missing-multi-factor-session"]:"The request is missing proof of first factor successful sign-in.",["missing-phone-number"]:"To send verification codes, provide a phone number for the recipient.",["missing-verification-id"]:"The phone auth credential was created with an empty verification ID.",["app-deleted"]:"This instance of FirebaseApp has been deleted.",["multi-factor-info-not-found"]:"The user does not have a second factor matching the identifier provided.",["multi-factor-auth-required"]:"Proof of ownership of a second factor is required to complete sign-in.",["account-exists-with-different-credential"]:"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",["network-request-failed"]:"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.",["no-auth-event"]:"An internal AuthError has occurred.",["no-such-provider"]:"User was not linked to an account with the given provider.",["null-user"]:"A null user object was provided as the argument for an operation which requires a non-null user object.",["operation-not-allowed"]:"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",["operation-not-supported-in-this-environment"]:'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',["popup-blocked"]:"Unable to establish a connection with the popup. It may have been blocked by the browser.",["popup-closed-by-user"]:"The popup has been closed by the user before finalizing the operation.",["provider-already-linked"]:"User can only be linked to one identity for the given provider.",["quota-exceeded"]:"The project's quota for this operation has been exceeded.",["redirect-cancelled-by-user"]:"The redirect operation has been cancelled by the user before finalizing.",["redirect-operation-pending"]:"A redirect sign-in operation is already pending.",["rejected-credential"]:"The request contains malformed or mismatching credentials.",["second-factor-already-in-use"]:"The second factor is already enrolled on this account.",["maximum-second-factor-count-exceeded"]:"The maximum allowed number of second factors on a user has been exceeded.",["tenant-id-mismatch"]:"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.",["user-token-expired"]:"The user's credential is no longer valid. The user must sign in again.",["too-many-requests"]:"We have blocked all requests from this device due to unusual activity. Try again later.",["unauthorized-continue-uri"]:"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",["unsupported-first-factor"]:"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.",["unsupported-persistence-type"]:"The current environment does not support the specified persistence type.",["unsupported-tenant-operation"]:"This operation is not supported in a multi-tenant context.",["unverified-email"]:"The operation requires a verified email.",["user-cancelled"]:"The user did not grant your application the permissions it requested.",["user-not-found"]:"There is no user record corresponding to this identifier. The user may have been deleted.",["user-disabled"]:"The user account has been disabled by an administrator.",["user-mismatch"]:"The supplied credentials do not correspond to the previously signed in user.",["user-signed-out"]:"",["weak-password"]:"The password must be 6 characters long or more.",["web-storage-unsupported"]:"This browser is not supported or 3rd party cookies and data may be disabled.",["already-initialized"]:"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance."}}function R1(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const bP=kP,CP=R1,N1=new bi("auth","Firebase",R1());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P1=new Lc("@firebase/auth");function $c(t,...e){P1.logLevel<=te.ERROR&&P1.error(`Auth (${qr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ot(t,...e){throw cm(t,...e)}function at(t,...e){return cm(t,...e)}function x1(t,e,n){const r=Object.assign(Object.assign({},CP()),{[e]:n});return new bi("auth","Firebase",r).create(e,{appName:t.name})}function Ws(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&ot(t,"argument-error"),x1(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function cm(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return N1.create(t,...e)}function A(t,e,...n){if(!t)throw cm(e,...n)}function Mn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw $c(e),new Error(e)}function Tn(t,e){t||Mn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O1=new Map;function Xt(t){Tn(t instanceof Function,"Expected a class definition");let e=O1.get(t);return e?(Tn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,O1.set(t,e),e)}function AP(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Xt);(e==null?void 0:e.errorMap)&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ga(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function hm(){return D1()==="http:"||D1()==="https:"}function D1(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RP(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(hm()||tm()||"connection"in navigator)?navigator.onLine:!0}function NP(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ka{constructor(e,n){this.shortDelay=e,this.longDelay=n,Tn(n>e,"Short delay should be less than long delay!"),this.isMobile=f1()||xc()}get(){return RP()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dm(t,e){Tn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fm{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;Mn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;Mn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;Mn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PP={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xP=new Ka(3e4,6e4);function Fe(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function He(t,e,n,r,i={}){return L1(t,i,()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=js(Object.assign({key:t.config.apiKey},o)).slice(1),u=new(fm.headers());return u.set("Content-Type","application/json"),u.set("X-Client-Version",t._getSdkClientVersion()),t.languageCode&&u.set("X-Firebase-Locale",t.languageCode),fm.fetch()(M1(t,t.config.apiHost,n,a),Object.assign({method:e,headers:u,referrerPolicy:"no-referrer"},s))})}async function L1(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},PP),e);try{const i=new OP(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Uc(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[u,l]=a.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Uc(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Uc(t,"email-already-in-use",o);const c=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw x1(t,c,l);ot(t,c)}}catch(i){if(i instanceof Yt)throw i;ot(t,"network-request-failed")}}async function rr(t,e,n,r,i={}){const s=await He(t,e,n,r,i);return"mfaPendingCredential"in s&&ot(t,"multi-factor-auth-required",{serverResponse:s}),s}function M1(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?dm(t.config,i):`${t.config.apiScheme}://${i}`}class OP{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(at(this.auth,"timeout")),xP.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Uc(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=at(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DP(t,e){return He(t,"POST","/v1/accounts:delete",e)}async function LP(t,e){return He(t,"POST","/v1/accounts:update",e)}async function MP(t,e){return He(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qa(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function $P(t,e=!1){const n=B(t),r=await n.getIdToken(e),i=Fc(r);A(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Qa(pm(i.auth_time)),issuedAtTime:Qa(pm(i.iat)),expirationTime:Qa(pm(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function pm(t){return Number(t)*1e3}function Fc(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return $c("JWT malformed, contained fewer than 3 sections"),null;try{const i=cN(n);return i?JSON.parse(i):($c("Failed to decode base64 JWT payload"),null)}catch(i){return $c("Caught error parsing JWT payload as JSON",i),null}}function UP(t){const e=Fc(t);return A(e,"internal-error"),A(typeof e.exp!="undefined","internal-error"),A(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ir(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Yt&&FP(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function FP({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VP{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $1{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Qa(this.lastLoginAt),this.creationTime=Qa(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ya(t){var e;const n=t.auth,r=await t.getIdToken(),i=await ir(t,MP(n,{idToken:r}));A(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=((e=s.providerUserInfo)===null||e===void 0?void 0:e.length)?zP(s.providerUserInfo):[],a=jP(t.providerData,o),u=t.isAnonymous,l=!(t.email&&s.passwordHash)&&!(a==null?void 0:a.length),c=u?l:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new $1(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,h)}async function BP(t){const e=B(t);await Ya(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function jP(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function zP(t){return t.map(e=>{var{providerId:n}=e,r=sm(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qP(t,e){const n=await L1(t,{},()=>{const r=js({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=M1(t,i,"/v1/token",`key=${s}`);return fm.fetch()(o,{method:"POST",headers:{"X-Client-Version":t._getSdkClientVersion(),"Content-Type":"application/x-www-form-urlencoded"},body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xa{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){A(e.idToken,"internal-error"),A(typeof e.idToken!="undefined","internal-error"),A(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):UP(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return A(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await qP(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Xa;return r&&(A(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(A(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(A(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Xa,this.toJSON())}_performRefresh(){return Mn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hr(t,e){A(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class Ri{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=sm(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.emailVerified=!1,this.isAnonymous=!1,this.tenantId=null,this.providerData=[],this.proactiveRefresh=new VP(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.metadata=new $1(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await ir(this,this.stsTokenManager.getToken(this.auth,e));return A(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return $P(this,e)}reload(){return BP(this)}_assign(e){this!==e&&(A(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Ri(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){A(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ya(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await ir(this,DP(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,u,l,c;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,g=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,_=(a=n.tenantId)!==null&&a!==void 0?a:void 0,f=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,p=(l=n.createdAt)!==null&&l!==void 0?l:void 0,m=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:w,emailVerified:v,isAnonymous:P,providerData:C,stsTokenManager:V}=n;A(w&&V,e,"internal-error");const F=Xa.fromJSON(this.name,V);A(typeof w=="string",e,"internal-error"),Hr(h,e.name),Hr(d,e.name),A(typeof v=="boolean",e,"internal-error"),A(typeof P=="boolean",e,"internal-error"),Hr(g,e.name),Hr(y,e.name),Hr(_,e.name),Hr(f,e.name),Hr(p,e.name),Hr(m,e.name);const M=new Ri({uid:w,auth:e,email:d,emailVerified:v,displayName:h,isAnonymous:P,photoURL:y,phoneNumber:g,tenantId:_,stsTokenManager:F,createdAt:p,lastLoginAt:m});return C&&Array.isArray(C)&&(M.providerData=C.map(he=>Object.assign({},he))),f&&(M._redirectEventId=f),M}static async _fromIdTokenResponse(e,n,r=!1){const i=new Xa;i.updateFromServerResponse(n);const s=new Ri({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Ya(s),s}}/**
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
 */class U1{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}U1.type="NONE";const Ja=U1;/**
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
 */function Ni(t,e,n){return`firebase:${t}:${e}:${n}`}class Gs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Ni(this.userKey,i.apiKey,s),this.fullPersistenceKey=Ni("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ri._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Gs(Xt(Ja),e,r);const i=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let s=i[0]||Xt(Ja);const o=Ni(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const c=await l._get(o);if(c){const h=Ri._fromJSON(e,c);l!==s&&(a=h),s=l;break}}catch{}const u=i.filter(l=>l._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new Gs(s,e,r):(s=u[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==s)try{await l._remove(o)}catch{}})),new Gs(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F1(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(j1(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(V1(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(z1(e))return"Blackberry";if(q1(e))return"Webos";if(mm(e))return"Safari";if((e.includes("chrome/")||B1(e))&&!e.includes("edge/"))return"Chrome";if(Za(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function V1(t=ye()){return/firefox\//i.test(t)}function mm(t=ye()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function B1(t=ye()){return/crios\//i.test(t)}function j1(t=ye()){return/iemobile/i.test(t)}function Za(t=ye()){return/android/i.test(t)}function z1(t=ye()){return/blackberry/i.test(t)}function q1(t=ye()){return/webos/i.test(t)}function Ks(t=ye()){return/iphone|ipad|ipod/i.test(t)}function HP(t=ye()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(t)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(t)}function WP(t=ye()){var e;return Ks(t)&&!!((e=window.navigator)===null||e===void 0?void 0:e.standalone)}function GP(){return nm()&&document.documentMode===10}function H1(t=ye()){return Ks(t)||Za(t)||q1(t)||z1(t)||/windows phone/i.test(t)||j1(t)}function KP(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W1(t,e=[]){let n;switch(t){case"Browser":n=F1(ye());break;case"Worker":n=`${F1(ye())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${qr}/${r}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QP{constructor(e,n){this.app=e,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new G1(this),this.idTokenSubscription=new G1(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=N1,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Xt(n)),this._initializationPromise=this.queue(async()=>{var r;this._deleted||(this.persistenceManager=await Gs.create(this,e),!this._deleted&&(((r=this._popupRedirectResolver)===null||r===void 0?void 0:r._shouldInitProactively)&&await this._popupRedirectResolver._initialize(this),await this.initializeCurrentUser(n),!this._deleted&&(this._isInitialized=!0)))}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e)}}async initializeCurrentUser(e){var n;let r=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,s=r==null?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(e);(!i||i===s)&&(o==null?void 0:o.user)&&(r=o.user)}return r?r._redirectEventId?(A(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)):this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ya(e)}catch(n){if(n.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=NP()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?B(e):null;return n&&A(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&A(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Xt(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new bi("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Xt(e)||this._popupRedirectResolver;A(n,this,"argument-error"),this.redirectPersistenceManager=await Gs.create(this,[Xt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return A(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return A(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=W1(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}_getSdkClientVersion(){return this.clientVersion}}function We(t){return B(t)}class G1{constructor(e){this.auth=e,this.observer=null,this.addObserver=g1(n=>this.observer=n)}get next(){return A(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function YP(t,e,n){const r=We(t);A(r._canInitEmulator,r,"emulator-config-failed"),A(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n==null?void 0:n.disableWarnings),s=K1(e),{host:o,port:a}=XP(e),u=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||JP()}function K1(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function XP(t){const e=K1(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Q1(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Q1(o)}}}function Q1(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function JP(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console!="undefined"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window!="undefined"&&typeof document!="undefined"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Mn("not implemented")}_getIdTokenResponse(e){return Mn("not implemented")}_linkToIdToken(e,n){return Mn("not implemented")}_getReauthenticationResolver(e){return Mn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Y1(t,e){return He(t,"POST","/v1/accounts:resetPassword",Fe(t,e))}async function X1(t,e){return He(t,"POST","/v1/accounts:update",e)}async function ZP(t,e){return He(t,"POST","/v1/accounts:update",Fe(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ex(t,e){return rr(t,"POST","/v1/accounts:signInWithPassword",Fe(t,e))}async function Vc(t,e){return He(t,"POST","/v1/accounts:sendOobCode",Fe(t,e))}async function tx(t,e){return Vc(t,e)}async function nx(t,e){return Vc(t,e)}async function rx(t,e){return Vc(t,e)}async function ix(t,e){return Vc(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sx(t,e){return rr(t,"POST","/v1/accounts:signInWithEmailLink",Fe(t,e))}async function ox(t,e){return rr(t,"POST","/v1/accounts:signInWithEmailLink",Fe(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eu extends Qs{constructor(e,n,r,i=null){super("password",r);this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new eu(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new eu(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return ex(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return sx(e,{email:this._email,oobCode:this._password});default:ot(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return X1(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return ox(e,{idToken:n,email:this._email,oobCode:this._password});default:ot(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sr(t,e){return rr(t,"POST","/v1/accounts:signInWithIdp",Fe(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ax="http://localhost";class $n extends Qs{constructor(){super(...arguments);this.pendingToken=null}static _fromParams(e){const n=new $n(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):ot("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=sm(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new $n(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return sr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,sr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,sr(e,n)}buildRequest(){const e={requestUri:ax,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=js(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ux(t,e){return He(t,"POST","/v1/accounts:sendVerificationCode",Fe(t,e))}async function lx(t,e){return rr(t,"POST","/v1/accounts:signInWithPhoneNumber",Fe(t,e))}async function cx(t,e){const n=await rr(t,"POST","/v1/accounts:signInWithPhoneNumber",Fe(t,e));if(n.temporaryProof)throw Uc(t,"account-exists-with-different-credential",n);return n}const hx={USER_NOT_FOUND:"user-not-found"};async function dx(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return rr(t,"POST","/v1/accounts:signInWithPhoneNumber",Fe(t,n),hx)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi extends Qs{constructor(e){super("phone","phone");this.params=e}static _fromVerification(e,n){return new Pi({verificationId:e,verificationCode:n})}static _fromTokenResponse(e,n){return new Pi({phoneNumber:e,temporaryProof:n})}_getIdTokenResponse(e){return lx(e,this._makeVerificationRequest())}_linkToIdToken(e,n){return cx(e,Object.assign({idToken:n},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return dx(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:n,verificationId:r,verificationCode:i}=this.params;return e&&n?{temporaryProof:e,phoneNumber:n}:{sessionInfo:r,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!n&&!i&&!s?null:new Pi({verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fx(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function px(t){const e=zs(za(t)).link,n=e?zs(za(e)).deep_link_id:null,r=zs(za(t)).deep_link_id;return(r?zs(za(r)).link:null)||r||n||e||t}class Bc{constructor(e){var n,r,i,s,o,a;const u=zs(za(e)),l=(n=u.apiKey)!==null&&n!==void 0?n:null,c=(r=u.oobCode)!==null&&r!==void 0?r:null,h=fx((i=u.mode)!==null&&i!==void 0?i:null);A(l&&c&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=c,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=u.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=px(e);try{return new Bc(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wr{constructor(){this.providerId=Wr.PROVIDER_ID}static credential(e,n){return eu._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Bc.parseLink(n);return A(r,"argument-error"),eu._fromEmailAndCode(e,r.code,r.tenantId)}}Wr.PROVIDER_ID="password";Wr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Wr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ys extends Gr{constructor(){super(...arguments);this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class Xs extends Ys{static credentialFromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;return A("providerId"in n&&"signInMethod"in n,"argument-error"),$n._fromParams(n)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return A(e.idToken||e.accessToken,"argument-error"),$n._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return Xs.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return Xs.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r,oauthTokenSecret:i,pendingToken:s,nonce:o,providerId:a}=e;if(!r&&!i&&!n&&!s||!a)return null;try{return new Xs(a)._credential({idToken:n,accessToken:r,nonce:o,pendingToken:s})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un extends Ys{constructor(){super("facebook.com")}static credential(e){return $n._fromParams({providerId:Un.PROVIDER_ID,signInMethod:Un.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Un.credentialFromTaggedObject(e)}static credentialFromError(e){return Un.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Un.credential(e.oauthAccessToken)}catch{return null}}}Un.FACEBOOK_SIGN_IN_METHOD="facebook.com";Un.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn extends Ys{constructor(){super("google.com");this.addScope("profile")}static credential(e,n){return $n._fromParams({providerId:Fn.PROVIDER_ID,signInMethod:Fn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Fn.credentialFromTaggedObject(e)}static credentialFromError(e){return Fn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Fn.credential(n,r)}catch{return null}}}Fn.GOOGLE_SIGN_IN_METHOD="google.com";Fn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn extends Ys{constructor(){super("github.com")}static credential(e){return $n._fromParams({providerId:Vn.PROVIDER_ID,signInMethod:Vn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Vn.credentialFromTaggedObject(e)}static credentialFromError(e){return Vn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Vn.credential(e.oauthAccessToken)}catch{return null}}}Vn.GITHUB_SIGN_IN_METHOD="github.com";Vn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mx="http://localhost";class jc extends Qs{constructor(e,n){super(e,e);this.pendingToken=n}_getIdTokenResponse(e){const n=this.buildRequest();return sr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,sr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,sr(e,n)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,pendingToken:s}=n;return!r||!i||!s||r!==i?null:new jc(r,s)}static _create(e,n){return new jc(e,n)}buildRequest(){return{requestUri:mx,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn extends Ys{constructor(){super("twitter.com")}static credential(e,n){return $n._fromParams({providerId:Bn.PROVIDER_ID,signInMethod:Bn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Bn.credentialFromTaggedObject(e)}static credentialFromError(e){return Bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Bn.credential(n,r)}catch{return null}}}Bn.TWITTER_SIGN_IN_METHOD="twitter.com";Bn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function J1(t,e){return rr(t,"POST","/v1/accounts:signUp",Fe(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Ri._fromIdTokenResponse(e,r,i),o=Z1(r);return new dn({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Z1(r);return new dn({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Z1(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gx(t){var e;const n=We(t);if(await n._initializationPromise,(e=n.currentUser)===null||e===void 0?void 0:e.isAnonymous)return new dn({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await J1(n,{returnSecureToken:!0}),i=await dn._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zc extends Yt{constructor(e,n,r,i){var s;super(n.code,n.message);this.operationType=r,this.user=i,this.name="FirebaseError",Object.setPrototypeOf(this,zc.prototype),this.appName=e.name,this.code=n.code,this.tenantId=(s=e.tenantId)!==null&&s!==void 0?s:void 0,this.serverResponse=n.customData.serverResponse}static _fromErrorAndOperation(e,n,r,i){return new zc(e,n,r,i)}}function eE(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?zc._fromErrorAndOperation(t,s,e,r):s})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tE(t){return new Set(t.map(({providerId:e})=>e).filter(e=>!!e))}/**
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
 */async function yx(t,e){const n=B(t);await qc(!0,n,e);const{providerUserInfo:r}=await LP(n.auth,{idToken:await n.getIdToken(),deleteProvider:[e]}),i=tE(r||[]);return n.providerData=n.providerData.filter(s=>i.has(s.providerId)),i.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function gm(t,e,n=!1){const r=await ir(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return dn._forOperation(t,"link",r)}async function qc(t,e,n){await Ya(e);const r=tE(e.providerData),i=t===!1?"provider-already-linked":"no-such-provider";A(r.has(n)===t,e.auth,i)}/**
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
 */async function nE(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await ir(t,eE(r,i,e,t),n);A(s.idToken,r,"internal-error");const o=Fc(s.idToken);A(o,r,"internal-error");const{sub:a}=o;return A(t.uid===a,r,"user-mismatch"),dn._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&ot(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rE(t,e,n=!1){const r="signIn",i=await eE(t,r,e),s=await dn._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function Hc(t,e){return rE(We(t),e)}async function iE(t,e){const n=B(t);return await qc(!1,n,e.providerId),gm(n,e)}async function sE(t,e){return nE(B(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vx(t,e){return rr(t,"POST","/v1/accounts:signInWithCustomToken",Fe(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wx(t,e){const n=We(t),r=await vx(n,{token:e,returnSecureToken:!0}),i=await dn._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wc{constructor(e,n){this.factorId=e,this.uid=n.mfaEnrollmentId,this.enrollmentTime=new Date(n.enrolledAt).toUTCString(),this.displayName=n.displayName}static _fromServerResponse(e,n){return"phoneInfo"in n?ym._fromServerResponse(e,n):ot(e,"internal-error")}}class ym extends Wc{constructor(e){super("phone",e);this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,n){return new ym(n)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gc(t,e,n){var r;A(((r=n.url)===null||r===void 0?void 0:r.length)>0,t,"invalid-continue-uri"),A(typeof n.dynamicLinkDomain=="undefined"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(A(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(A(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _x(t,e,n){const r=B(t),i={requestType:"PASSWORD_RESET",email:e};n&&Gc(r,i,n),await nx(r,i)}async function Ex(t,e,n){await Y1(B(t),{oobCode:e,newPassword:n})}async function Ix(t,e){await ZP(B(t),{oobCode:e})}async function oE(t,e){const n=B(t),r=await Y1(n,{oobCode:e}),i=r.requestType;switch(A(i,n,"internal-error"),i){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":A(r.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":A(r.mfaInfo,n,"internal-error");default:A(r.email,n,"internal-error")}let s=null;return r.mfaInfo&&(s=Wc._fromServerResponse(We(n),r.mfaInfo)),{data:{email:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.newEmail:r.email)||null,previousEmail:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.email:r.newEmail)||null,multiFactorInfo:s},operation:i}}async function Sx(t,e){const{data:n}=await oE(B(t),e);return n.email}async function Tx(t,e,n){const r=We(t),i=await J1(r,{returnSecureToken:!0,email:e,password:n}),s=await dn._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(s.user),s}function kx(t,e,n){return Hc(B(t),Wr.credential(e,n))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bx(t,e,n){const r=B(t),i={requestType:"EMAIL_SIGNIN",email:e};A(n.handleCodeInApp,r,"argument-error"),n&&Gc(r,i,n),await rx(r,i)}function Cx(t,e){const n=Bc.parseLink(e);return(n==null?void 0:n.operation)==="EMAIL_SIGNIN"}async function Ax(t,e,n){const r=B(t),i=Wr.credentialWithLink(e,n||Ga());return A(i._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),Hc(r,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rx(t,e){return He(t,"POST","/v1/accounts:createAuthUri",Fe(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nx(t,e){const n=hm()?Ga():"http://localhost",r={identifier:e,continueUri:n},{signinMethods:i}=await Rx(B(t),r);return i||[]}async function Px(t,e){const n=B(t),r=await t.getIdToken(),i={requestType:"VERIFY_EMAIL",idToken:r};e&&Gc(n.auth,i,e);const{email:s}=await tx(n.auth,i);s!==t.email&&await t.reload()}async function xx(t,e,n){const r=B(t),i=await t.getIdToken(),s={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:i,newEmail:e};n&&Gc(r.auth,s,n);const{email:o}=await ix(r.auth,s);o!==t.email&&await t.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ox(t,e){return He(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dx(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=B(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await ir(r,Ox(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:u})=>u==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function Lx(t,e){return aE(B(t),e,null)}function Mx(t,e){return aE(B(t),null,e)}async function aE(t,e,n){const{auth:r}=t,s={idToken:await t.getIdToken(),returnSecureToken:!0};e&&(s.email=e),n&&(s.password=n);const o=await ir(t,X1(r,s));await t._updateTokensIfNecessary(o,!0)}/**
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
 */function $x(t){var e,n;if(!t)return null;const{providerId:r}=t,i=t.rawUserInfo?JSON.parse(t.rawUserInfo):{},s=t.isNewUser||t.kind==="identitytoolkit#SignupNewUserResponse";if(!r&&(t==null?void 0:t.idToken)){const o=(n=(e=Fc(t.idToken))===null||e===void 0?void 0:e.firebase)===null||n===void 0?void 0:n.sign_in_provider;if(o){const a=o!=="anonymous"&&o!=="custom"?o:null;return new Js(s,a)}}if(!r)return null;switch(r){case"facebook.com":return new Ux(s,i);case"github.com":return new Fx(s,i);case"google.com":return new Vx(s,i);case"twitter.com":return new Bx(s,i,t.screenName||null);case"custom":case"anonymous":return new Js(s,null);default:return new Js(s,r,i)}}class Js{constructor(e,n,r={}){this.isNewUser=e,this.providerId=n,this.profile=r}}class uE extends Js{constructor(e,n,r,i){super(e,n,r);this.username=i}}class Ux extends Js{constructor(e,n){super(e,"facebook.com",n)}}class Fx extends uE{constructor(e,n){super(e,"github.com",n,typeof(n==null?void 0:n.login)=="string"?n==null?void 0:n.login:null)}}class Vx extends Js{constructor(e,n){super(e,"google.com",n)}}class Bx extends uE{constructor(e,n,r){super(e,"twitter.com",n,r)}}function jx(t){const{user:e,_tokenResponse:n}=t;return e.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:$x(n)}class xi{constructor(e,n){this.type=e,this.credential=n}static _fromIdtoken(e){return new xi("enroll",e)}static _fromMfaPendingCredential(e){return new xi("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var n,r;if(e==null?void 0:e.multiFactorSession){if((n=e.multiFactorSession)===null||n===void 0?void 0:n.pendingCredential)return xi._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if((r=e.multiFactorSession)===null||r===void 0?void 0:r.idToken)return xi._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vm{constructor(e,n,r){this.session=e,this.hints=n,this.signInResolver=r}static _fromError(e,n){const r=We(e),i=(n.serverResponse.mfaInfo||[]).map(o=>Wc._fromServerResponse(r,o));A(n.serverResponse.mfaPendingCredential,r,"internal-error");const s=xi._fromMfaPendingCredential(n.serverResponse.mfaPendingCredential);return new vm(s,i,async o=>{const a=await o._process(r,s);delete n.serverResponse.mfaInfo,delete n.serverResponse.mfaPendingCredential;const u=Object.assign(Object.assign({},n.serverResponse),{idToken:a.idToken,refreshToken:a.refreshToken});switch(n.operationType){case"signIn":const l=await dn._fromIdTokenResponse(r,n.operationType,u);return await r._updateCurrentUser(l.user),l;case"reauthenticate":return A(n.user,r,"internal-error"),dn._forOperation(n.user,n.operationType,u);default:ot(r,"internal-error")}})}async resolveSignIn(e){const n=e;return this.signInResolver(n)}}function zx(t,e){var n;const r=B(t),i=e;return A(e.operationType,r,"argument-error"),A((n=i.serverResponse)===null||n===void 0?void 0:n.mfaPendingCredential,r,"argument-error"),vm._fromError(r,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qx(t,e){return He(t,"POST","/v2/accounts/mfaEnrollment:start",Fe(t,e))}function Hx(t,e){return He(t,"POST","/v2/accounts/mfaEnrollment:finalize",Fe(t,e))}function Wx(t,e){return He(t,"POST","/v2/accounts/mfaEnrollment:withdraw",Fe(t,e))}class wm{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(n=>{n.mfaInfo&&(this.enrolledFactors=n.mfaInfo.map(r=>Wc._fromServerResponse(e.auth,r)))})}static _fromUser(e){return new wm(e)}async getSession(){return xi._fromIdtoken(await this.user.getIdToken())}async enroll(e,n){const r=e,i=await this.getSession(),s=await ir(this.user,r._process(this.user.auth,i,n));return await this.user._updateTokensIfNecessary(s),this.user.reload()}async unenroll(e){const n=typeof e=="string"?e:e.uid,r=await this.user.getIdToken(),i=await ir(this.user,Wx(this.user.auth,{idToken:r,mfaEnrollmentId:n}));this.enrolledFactors=this.enrolledFactors.filter(({uid:s})=>s!==n),await this.user._updateTokensIfNecessary(i);try{await this.user.reload()}catch(s){if(s.code!=="auth/user-token-expired")throw s}}}const _m=new WeakMap;function Gx(t){const e=B(t);return _m.has(e)||_m.set(e,wm._fromUser(e)),_m.get(e)}const Kc="__sak";/**
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
 */class lE{constructor(e,n){this.storage=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Kc,"1"),this.storage.removeItem(Kc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kx(){const t=ye();return mm(t)||Ks(t)}const Qx=1e3,Yx=10;class cE extends lE{constructor(){super(window.localStorage,"LOCAL");this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Kx()&&KP(),this.fallbackToPolling=H1(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,u)=>{this.notifyListeners(o,u)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);GP()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Yx):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Qx)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}cE.type="LOCAL";const Em=cE;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hE extends lE{constructor(){super(window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}hE.type="SESSION";const Oi=hE;/**
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
 */function Xx(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Qc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Qc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o==null?void 0:o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async l=>l(n.origin,s)),u=await Xx(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Qc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tu(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Jx{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,u)=>{const l=tu("",20);i.port1.start();const c=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(c),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ve(){return window}function Zx(t){Ve().location.href=t}/**
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
 */function Im(){return typeof Ve().WorkerGlobalScope!="undefined"&&typeof Ve().importScripts=="function"}async function eO(){if(!(navigator==null?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function tO(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function nO(){return Im()?self:null}/**
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
 */const dE="firebaseLocalStorageDb",rO=1,Yc="firebaseLocalStorage",fE="fbase_key";class nu{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Xc(t,e){return t.transaction([Yc],e?"readwrite":"readonly").objectStore(Yc)}function iO(){const t=indexedDB.deleteDatabase(dE);return new nu(t).toPromise()}function Sm(){const t=indexedDB.open(dE,rO);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Yc,{keyPath:fE})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Yc)?e(r):(r.close(),await iO(),e(await Sm()))})})}async function pE(t,e,n){const r=Xc(t,!0).put({[fE]:e,value:n});return new nu(r).toPromise()}async function sO(t,e){const n=Xc(t,!1).get(e),r=await new nu(n).toPromise();return r===void 0?null:r.value}function mE(t,e){const n=Xc(t,!0).delete(e);return new nu(n).toPromise()}const oO=800,aO=3;class gE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Sm(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>aO)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Im()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Qc._getInstance(nO()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await eO(),!this.activeServiceWorker)return;this.sender=new Jx(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||tO()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Sm();return await pE(e,Kc,"1"),await mE(e,Kc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>pE(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>sO(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>mE(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Xc(i,!1).getAll();return new nu(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),oO)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}gE.type="LOCAL";const Jc=gE;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uO(t,e){return He(t,"POST","/v2/accounts/mfaSignIn:start",Fe(t,e))}function lO(t,e){return He(t,"POST","/v2/accounts/mfaSignIn:finalize",Fe(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cO(t){return(await He(t,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hO(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function yE(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=at("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",hO().appendChild(r)})}function vE(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dO=500,fO=6e4,Zc=1e12;class pO{constructor(e){this.auth=e,this.counter=Zc,this._widgets=new Map}render(e,n){const r=this.counter;return this._widgets.set(r,new mO(e,this.auth.name,n||{})),this.counter++,r}reset(e){var n;const r=e||Zc;(n=this._widgets.get(r))===null||n===void 0||n.delete(),this._widgets.delete(r)}getResponse(e){var n;const r=e||Zc;return((n=this._widgets.get(r))===null||n===void 0?void 0:n.getResponse())||""}async execute(e){var n;const r=e||Zc;return(n=this._widgets.get(r))===null||n===void 0||n.execute(),""}}class mO{constructor(e,n,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;A(i,"argument-error",{appName:n}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=gO(50);const{callback:e,"expired-callback":n}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,n)try{n()}catch{}this.isVisible&&this.execute()},fO)},dO))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function gO(t){const e=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<t;r++)e.push(n.charAt(Math.floor(Math.random()*n.length)));return e.join("")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tm=vE("rcb"),yO=new Ka(3e4,6e4),vO="https://www.google.com/recaptcha/api.js?";class wO{constructor(){this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!Ve().grecaptcha}load(e,n=""){return A(_O(n),e,"argument-error"),this.shouldResolveImmediately(n)?Promise.resolve(Ve().grecaptcha):new Promise((r,i)=>{const s=Ve().setTimeout(()=>{i(at(e,"network-request-failed"))},yO.get());Ve()[Tm]=()=>{Ve().clearTimeout(s),delete Ve()[Tm];const a=Ve().grecaptcha;if(!a){i(at(e,"internal-error"));return}const u=a.render;a.render=(l,c)=>{const h=u(l,c);return this.counter++,h},this.hostLanguage=n,r(a)};const o=`${vO}?${js({onload:Tm,render:"explicit",hl:n})}`;yE(o).catch(()=>{clearTimeout(s),i(at(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){return!!Ve().grecaptcha&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function _O(t){return t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t)}class EO{async load(e){return new pO(e)}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wE="recaptcha",IO={theme:"light",type:"image"};class SO{constructor(e,n=Object.assign({},IO),r){this.parameters=n,this.type=wE,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=We(r),this.isInvisible=this.parameters.size==="invisible",A(typeof document!="undefined",this.auth,"operation-not-supported-in-this-environment");const i=typeof e=="string"?document.getElementById(e):e;A(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new EO:new wO,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),n=this.getAssertedRecaptcha(),r=n.getResponse(e);return r||new Promise(i=>{const s=o=>{!o||(this.tokenChangeListeners.delete(s),i(o))};this.tokenChangeListeners.add(s),this.isInvisible&&n.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){A(!this.parameters.sitekey,this.auth,"argument-error"),A(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),A(typeof document!="undefined",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return n=>{if(this.tokenChangeListeners.forEach(r=>r(n)),typeof e=="function")e(n);else if(typeof e=="string"){const r=Ve()[e];typeof r=="function"&&r(n)}}}assertNotDestroyed(){A(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const n=document.createElement("div");e.appendChild(n),e=n}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){A(hm()&&!Im(),this.auth,"internal-error"),await TO(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await cO(this.auth);A(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return A(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function TO(){let t=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}t=()=>e(),window.addEventListener("load",t)}).catch(e=>{throw t&&window.removeEventListener("load",t),e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class km{constructor(e,n){this.verificationId=e,this.onConfirmation=n}confirm(e){const n=Pi._fromVerification(this.verificationId,e);return this.onConfirmation(n)}}async function kO(t,e,n){const r=We(t),i=await eh(r,e,B(n));return new km(i,s=>Hc(r,s))}async function bO(t,e,n){const r=B(t);await qc(!1,r,"phone");const i=await eh(r.auth,e,B(n));return new km(i,s=>iE(r,s))}async function CO(t,e,n){const r=B(t),i=await eh(r.auth,e,B(n));return new km(i,s=>sE(r,s))}async function eh(t,e,n){var r;const i=await n.verify();try{A(typeof i=="string",t,"argument-error"),A(n.type===wE,t,"argument-error");let s;if(typeof e=="string"?s={phoneNumber:e}:s=e,"session"in s){const o=s.session;if("phoneNumber"in s)return A(o.type==="enroll",t,"internal-error"),(await qx(t,{idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}})).phoneSessionInfo.sessionInfo;{A(o.type==="signin",t,"internal-error");const a=((r=s.multiFactorHint)===null||r===void 0?void 0:r.uid)||s.multiFactorUid;return A(a,t,"missing-multi-factor-info"),(await uO(t,{mfaPendingCredential:o.credential,mfaEnrollmentId:a,phoneSignInInfo:{recaptchaToken:i}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:o}=await ux(t,{phoneNumber:s.phoneNumber,recaptchaToken:i});return o}}finally{n._reset()}}async function AO(t,e){await gm(B(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn{constructor(e){this.providerId=kn.PROVIDER_ID,this.auth=We(e)}verifyPhoneNumber(e,n){return eh(this.auth,e,B(n))}static credential(e,n){return Pi._fromVerification(e,n)}static credentialFromResult(e){const n=e;return kn.credentialFromTaggedObject(n)}static credentialFromError(e){return kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:n,temporaryProof:r}=e;return n&&r?Pi._fromTokenResponse(n,r):null}}kn.PROVIDER_ID="phone";kn.PHONE_SIGN_IN_METHOD="phone";/**
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
 */function Di(t,e){return e?Xt(e):(A(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class bm extends Qs{constructor(e){super("custom","custom");this.params=e}_getIdTokenResponse(e){return sr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return sr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return sr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function RO(t){return rE(t.auth,new bm(t),t.bypassAuthState)}function NO(t){const{auth:e,user:n}=t;return A(n,e,"internal-error"),nE(n,new bm(t),t.bypassAuthState)}async function PO(t){const{auth:e,user:n}=t;return A(n,e,"internal-error"),gm(n,new bm(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _E{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(u))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return RO;case"linkViaPopup":case"linkViaRedirect":return PO;case"reauthViaPopup":case"reauthViaRedirect":return NO;default:ot(this.auth,"internal-error")}}resolve(e){Tn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Tn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xO=new Ka(2e3,1e4);async function OO(t,e,n){const r=We(t);Ws(t,e,Gr);const i=Di(r,n);return new or(r,"signInViaPopup",e,i).executeNotNull()}async function DO(t,e,n){const r=B(t);Ws(r.auth,e,Gr);const i=Di(r.auth,n);return new or(r.auth,"reauthViaPopup",e,i,r).executeNotNull()}async function LO(t,e,n){const r=B(t);Ws(r.auth,e,Gr);const i=Di(r.auth,n);return new or(r.auth,"linkViaPopup",e,i,r).executeNotNull()}class or extends _E{constructor(e,n,r,i,s){super(e,n,i,s);this.provider=r,this.authWindow=null,this.pollId=null,or.currentPopupAction&&or.currentPopupAction.cancel(),or.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return A(e,this.auth,"internal-error"),e}async onExecution(){Tn(this.filter.length===1,"Popup operations only handle one event");const e=tu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(at(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(at(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,or.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0?void 0:r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(at(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,xO.get())};e()}}or.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MO="pendingRedirect",Cm=new Map;class $O extends _E{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r);this.eventId=null}async execute(){let e=Cm.get(this.auth._key());if(!e){try{const r=await UO(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Cm.set(this.auth._key(),e)}return e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function UO(t,e){const n=EE(e),r=await Rm(t)._get(n)==="true";return await Rm(t)._remove(n),r}async function Am(t,e){return Rm(t)._set(EE(e),"true")}function FO(){Cm.clear()}function Rm(t){return Xt(t._redirectPersistence)}function EE(t){return Ni(MO,t.config.apiKey,t.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VO(t,e,n){return BO(t,e,n)}async function BO(t,e,n){const r=We(t);Ws(t,e,Gr);const i=Di(r,n);return await Am(i,r),i._openRedirect(r,e,"signInViaRedirect")}function jO(t,e,n){return zO(t,e,n)}async function zO(t,e,n){const r=B(t);Ws(r.auth,e,Gr);const i=Di(r.auth,n);await Am(i,r.auth);const s=await IE(r);return i._openRedirect(r.auth,e,"reauthViaRedirect",s)}function qO(t,e,n){return HO(t,e,n)}async function HO(t,e,n){const r=B(t);Ws(r.auth,e,Gr);const i=Di(r.auth,n);await qc(!1,r,e.providerId),await Am(i,r.auth);const s=await IE(r);return i._openRedirect(r.auth,e,"linkViaRedirect",s)}async function WO(t,e){return await We(t)._initializationPromise,th(t,e,!1)}async function th(t,e,n=!1){const r=We(t),i=Di(r,e),o=await new $O(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}async function IE(t){const e=tu(`${t.uid}:::`);return t._redirectEventId=e,await t.auth._setRedirectUser(t),await t.auth._persistUserIfCurrent(t),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GO=10*60*1e3;class SE{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!KO(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!kE(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(at(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=GO&&this.cachedEventUids.clear(),this.cachedEventUids.has(TE(e))}saveEventToCache(e){this.cachedEventUids.add(TE(e)),this.lastProcessedEventTime=Date.now()}}function TE(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function kE({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function KO(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return kE(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bE(t,e={}){return He(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QO=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,YO=/^https?/;async function XO(t){if(t.config.emulator)return;const{authorizedDomains:e}=await bE(t);for(const n of e)try{if(JO(n))return}catch{}ot(t,"unauthorized-domain")}function JO(t){const e=Ga(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!YO.test(n))return!1;if(QO.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const ZO=new Ka(3e4,6e4);function CE(){const t=Ve().___jsl;if(t==null?void 0:t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function eD(t){return new Promise((e,n)=>{var r,i,s;function o(){CE(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{CE(),n(at(t,"network-request-failed"))},timeout:ZO.get()})}if((i=(r=Ve().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0?void 0:i.Iframe)e(gapi.iframes.getContext());else if((s=Ve().gapi)===null||s===void 0?void 0:s.load)o();else{const a=vE("iframefcb");return Ve()[a]=()=>{gapi.load?o():n(at(t,"network-request-failed"))},yE(`https://apis.google.com/js/api.js?onload=${a}`)}}).catch(e=>{throw nh=null,e})}let nh=null;function tD(t){return nh=nh||eD(t),nh}/**
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
 */const nD=new Ka(5e3,15e3),rD="__/auth/iframe",iD="emulator/auth/iframe",sD={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"}},oD=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function aD(t){const e=t.config;A(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?dm(e,iD):`https://${t.config.authDomain}/${rD}`,r={apiKey:e.apiKey,appName:t.name,v:qr},i=oD.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${js(r).slice(1)}`}async function uD(t){const e=await tD(t),n=Ve().gapi;return A(n,t,"internal-error"),e.open({where:document.body,url:aD(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:sD,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=at(t,"network-request-failed"),a=Ve().setTimeout(()=>{s(o)},nD.get());function u(){Ve().clearTimeout(a),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
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
 */const lD={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},cD=500,hD=600,dD="_blank",fD="http://localhost";class AE{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function pD(t,e,n,r=cD,i=hD){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const u=Object.assign(Object.assign({},lD),{width:r.toString(),height:i.toString(),top:s,left:o}),l=ye().toLowerCase();n&&(a=B1(l)?dD:n),V1(l)&&(e=e||fD,u.scrollbars="yes");const c=Object.entries(u).reduce((d,[g,y])=>`${d}${g}=${y},`,"");if(WP(l)&&a!=="_self")return mD(e||"",a),new AE(null);const h=window.open(e||"",a,c);A(h,t,"popup-blocked");try{h.focus()}catch{}return new AE(h)}function mD(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const gD="__/auth/handler",yD="emulator/auth/handler";function Nm(t,e,n,r,i,s){A(t.config.authDomain,t,"auth-domain-config-required"),A(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:qr,eventId:i};if(e instanceof Gr){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",_N(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,l]of Object.entries(s||{}))o[u]=l}if(e instanceof Ys){const u=e.getScopes().filter(l=>l!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];return`${vD(t)}?${js(a).slice(1)}`}function vD({config:t}){return t.emulator?dm(t,yD):`https://${t.authDomain}/${gD}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pm="webStorageSupport";class wD{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Oi,this._completeRedirectFn=th}async _openPopup(e,n,r,i){var s;Tn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=Nm(e,n,r,Ga(),i);return pD(e,o,tu())}async _openRedirect(e,n,r,i){return await this._originValidation(e),Zx(Nm(e,n,r,Ga(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Tn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r}async initAndGetManager(e){const n=await uD(e),r=new SE(e);return n.register("authEvent",i=>(A(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Pm,{type:Pm},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Pm];o!==void 0&&n(!!o),ot(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=XO(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return H1()||mm()||Ks()}}const _D=wD;class ED{constructor(e){this.factorId=e}_process(e,n,r){switch(n.type){case"enroll":return this._finalizeEnroll(e,n.credential,r);case"signin":return this._finalizeSignIn(e,n.credential);default:return Mn("unexpected MultiFactorSessionType")}}}class xm extends ED{constructor(e){super("phone");this.credential=e}static _fromCredential(e){return new xm(e)}_finalizeEnroll(e,n,r){return Hx(e,{idToken:n,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,n){return lO(e,{mfaPendingCredential:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class RE{constructor(){}static assertion(e){return xm._fromCredential(e)}}RE.FACTOR_ID="phone";var NE="@firebase/auth",PE="0.18.3";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ID{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{var i;e(((i=r)===null||i===void 0?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){A(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SD(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function TD(t){zr(new Sn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),{apiKey:i,authDomain:s}=r.options;return(o=>{A(i&&!i.includes(":"),"invalid-api-key",{appName:o.name}),A(!(s==null?void 0:s.includes(":")),"argument-error",{appName:o.name});const a={apiKey:i,authDomain:s,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:W1(t)},u=new QP(o,a);return AP(u,n),u})(r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),zr(new Sn("auth-internal",e=>{const n=We(e.getProvider("auth").getImmediate());return(r=>new ID(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),hn(NE,PE,SD(t)),hn(NE,PE,"esm2017")}TD("Browser");/**
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
 */function Li(){return window}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kD=2e3;async function bD(t,e,n){var r;const{BuildInfo:i}=Li();Tn(e.sessionId,"AuthEvent did not contain a session ID");const s=await PD(e.sessionId),o={};return Ks()?o.ibi=i.packageName:Za()?o.apn=i.packageName:ot(t,"operation-not-supported-in-this-environment"),i.displayName&&(o.appDisplayName=i.displayName),o.sessionId=s,Nm(t,n,e.type,void 0,(r=e.eventId)!==null&&r!==void 0?r:void 0,o)}async function CD(t){const{BuildInfo:e}=Li(),n={};Ks()?n.iosBundleId=e.packageName:Za()?n.androidPackageName=e.packageName:ot(t,"operation-not-supported-in-this-environment"),await bE(t,n)}function AD(t){const{cordova:e}=Li();return new Promise(n=>{e.plugins.browsertab.isAvailable(r=>{let i=null;r?e.plugins.browsertab.openUrl(t):i=e.InAppBrowser.open(t,HP()?"_blank":"_system","location=yes"),n(i)})})}async function RD(t,e,n){const{cordova:r}=Li();let i=()=>{};try{await new Promise((s,o)=>{let a=null;function u(){var h;s();const d=(h=r.plugins.browsertab)===null||h===void 0?void 0:h.close;typeof d=="function"&&d(),typeof(n==null?void 0:n.close)=="function"&&n.close()}function l(){a||(a=window.setTimeout(()=>{o(at(t,"redirect-cancelled-by-user"))},kD))}function c(){(document==null?void 0:document.visibilityState)==="visible"&&l()}e.addPassiveListener(u),document.addEventListener("resume",l,!1),Za()&&document.addEventListener("visibilitychange",c,!1),i=()=>{e.removePassiveListener(u),document.removeEventListener("resume",l,!1),document.removeEventListener("visibilitychange",c,!1),a&&window.clearTimeout(a)}})}finally{i()}}function ND(t){var e,n,r,i,s,o,a,u,l,c;const h=Li();A(typeof((e=h==null?void 0:h.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),A(typeof((n=h==null?void 0:h.BuildInfo)===null||n===void 0?void 0:n.packageName)!="undefined",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),A(typeof((s=(i=(r=h==null?void 0:h.cordova)===null||r===void 0?void 0:r.plugins)===null||i===void 0?void 0:i.browsertab)===null||s===void 0?void 0:s.openUrl)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),A(typeof((u=(a=(o=h==null?void 0:h.cordova)===null||o===void 0?void 0:o.plugins)===null||a===void 0?void 0:a.browsertab)===null||u===void 0?void 0:u.isAvailable)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),A(typeof((c=(l=h==null?void 0:h.cordova)===null||l===void 0?void 0:l.InAppBrowser)===null||c===void 0?void 0:c.open)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function PD(t){const e=xD(t),n=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(n)).map(i=>i.toString(16).padStart(2,"0")).join("")}function xD(t){if(Tn(/[0-9a-zA-Z]+/.test(t),"Can only convert alpha-numeric strings"),typeof TextEncoder!="undefined")return new TextEncoder().encode(t);const e=new ArrayBuffer(t.length),n=new Uint8Array(e);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OD=20;class DD extends SE{constructor(){super(...arguments);this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach(n=>n(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function LD(t,e,n=null){return{type:e,eventId:n,urlResponse:null,sessionId:UD(),postBody:null,tenantId:t.tenantId,error:at(t,"no-auth-event")}}function MD(t,e){return Om()._set(Dm(t),e)}async function xE(t){const e=await Om()._get(Dm(t));return e&&await Om()._remove(Dm(t)),e}function $D(t,e){var n,r;const i=VD(e);if(i.includes("/__/auth/callback")){const s=rh(i),o=s.firebaseError?FD(decodeURIComponent(s.firebaseError)):null,a=(r=(n=o==null?void 0:o.code)===null||n===void 0?void 0:n.split("auth/"))===null||r===void 0?void 0:r[1],u=a?at(a):null;return u?{type:t.type,eventId:t.eventId,tenantId:t.tenantId,error:u,urlResponse:null,sessionId:null,postBody:null}:{type:t.type,eventId:t.eventId,tenantId:t.tenantId,sessionId:t.sessionId,urlResponse:i,postBody:null}}return null}function UD(){const t=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<OD;n++){const r=Math.floor(Math.random()*e.length);t.push(e.charAt(r))}return t.join("")}function Om(){return Xt(Em)}function Dm(t){return Ni("authEvent",t.config.apiKey,t.name)}function FD(t){try{return JSON.parse(t)}catch{return null}}function VD(t){const e=rh(t),n=e.link?decodeURIComponent(e.link):void 0,r=rh(n).link,i=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return rh(i).link||i||r||n||t}function rh(t){if(!(t==null?void 0:t.includes("?")))return{};const[e,...n]=t.split("?");return zs(n.join("?"))}/**
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
 */const BD=500;class jD{constructor(){this._redirectPersistence=Oi,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=th}async _initialize(e){const n=e._key();let r=this.eventManagers.get(n);return r||(r=new DD(e),this.eventManagers.set(n,r),this.attachCallbackListeners(e,r)),r}_openPopup(e){ot(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,n,r,i){ND(e);const s=await this._initialize(e);await s.initialized(),s.resetRedirect(),FO(),await this._originValidation(e);const o=LD(e,r,i);await MD(e,o);const a=await bD(e,o,n),u=await AD(a);return RD(e,s,u)}_isIframeWebStorageSupported(e,n){throw new Error("Method not implemented.")}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=CD(e)),this.originValidationPromises[n]}attachCallbackListeners(e,n){const{universalLinks:r,handleOpenURL:i,BuildInfo:s}=Li(),o=setTimeout(async()=>{await xE(e),n.onEvent(OE())},BD),a=async c=>{clearTimeout(o);const h=await xE(e);let d=null;h&&(c==null?void 0:c.url)&&(d=$D(h,c.url)),n.onEvent(d||OE())};typeof r!="undefined"&&typeof r.subscribe=="function"&&r.subscribe(null,a);const u=i,l=`${s.packageName.toLowerCase()}://`;Li().handleOpenURL=async c=>{if(c.toLowerCase().startsWith(l)&&a({url:c}),typeof u=="function")try{u(c)}catch(h){console.error(h)}}}}const zD=jD;function OE(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:at("no-auth-event")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qD(t,e){We(t)._logFramework(e)}var HD="@firebase/auth-compat",WD="0.1.6";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GD=1e3;function ih(){var t;return((t=self==null?void 0:self.location)===null||t===void 0?void 0:t.protocol)||null}function KD(){return ih()==="http:"||ih()==="https:"}function DE(t=ye()){return!!((ih()==="file:"||ih()==="ionic:")&&t.toLowerCase().match(/iphone|ipad|ipod|android/))}function QD(){return xc()||em()}function YD(){return nm()&&(document==null?void 0:document.documentMode)===11}function XD(t=ye()){return/Edge\/\d+/.test(t)}function JD(t=ye()){return YD()||XD(t)}function LE(){try{const t=self.localStorage,e=tu();if(t)return t.setItem(e,"1"),t.removeItem(e),JD()?Oc():!0}catch{return Lm()&&Oc()}return!1}function Lm(){return typeof global!="undefined"&&"WorkerGlobalScope"in global&&"importScripts"in global}function Mm(){return(KD()||tm()||DE())&&!QD()&&LE()&&!Lm()}function ME(){return DE()&&typeof document!="undefined"}async function ZD(){return ME()?new Promise(t=>{const e=setTimeout(()=>{t(!1)},GD);document.addEventListener("deviceready",()=>{clearTimeout(e),t(!0)})}):!1}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jt={LOCAL:"local",NONE:"none",SESSION:"session"},ru=A,$E="persistence";function eL(t,e){if(ru(Object.values(Jt).includes(e),t,"invalid-persistence-type"),xc()){ru(e!==Jt.SESSION,t,"unsupported-persistence-type");return}if(em()){ru(e===Jt.NONE,t,"unsupported-persistence-type");return}if(Lm()){ru(e===Jt.NONE||e===Jt.LOCAL&&Oc(),t,"unsupported-persistence-type");return}ru(e===Jt.NONE||LE(),t,"unsupported-persistence-type")}async function $m(t){await t._initializationPromise;const e=UE(),n=Ni($E,t.config.apiKey,t.name);(e==null?void 0:e.sessionStorage)&&e.sessionStorage.setItem(n,t._getPersistence())}function tL(t,e){const n=UE();if(!(n==null?void 0:n.sessionStorage))return[];const r=Ni($E,t,e);switch(n.sessionStorage.getItem(r)){case Jt.NONE:return[Ja];case Jt.LOCAL:return[Jc,Oi];case Jt.SESSION:return[Oi];default:return[]}}function UE(){return typeof window!="undefined"?window:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nL=A;class Kr{constructor(){this.browserResolver=Xt(_D),this.cordovaResolver=Xt(zD),this.underlyingResolver=null,this._redirectPersistence=Oi,this._completeRedirectFn=th}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,n,r,i)}async _openRedirect(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,n,r,i)}_isIframeWebStorageSupported(e,n){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,n)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return ME()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return nL(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await ZD();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FE(t){return t.unwrap()}function rL(t){return t.wrapped()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iL(t){return VE(t)}function sL(t,e){var n;const r=(n=e.customData)===null||n===void 0?void 0:n._tokenResponse;if(e.code==="auth/multi-factor-auth-required"){const i=e;i.resolver=new oL(t,zx(t,e))}else if(r){const i=VE(e),s=e;i&&(s.credential=i,s.tenantId=r.tenantId||void 0,s.email=r.email||void 0,s.phoneNumber=r.phoneNumber||void 0)}}function VE(t){const{_tokenResponse:e}=t instanceof Yt?t.customData:t;if(!e)return null;if(!(t instanceof Yt)&&"temporaryProof"in e&&"phoneNumber"in e)return kn.credentialFromResult(t);const n=e.providerId;if(!n||n===Wa.PASSWORD)return null;let r;switch(n){case Wa.GOOGLE:r=Fn;break;case Wa.FACEBOOK:r=Un;break;case Wa.GITHUB:r=Vn;break;case Wa.TWITTER:r=Bn;break;default:const{oauthIdToken:i,oauthAccessToken:s,oauthTokenSecret:o,pendingToken:a,nonce:u}=e;return!s&&!o&&!i&&!a?null:a?n.startsWith("saml.")?jc._create(n,a):$n._fromParams({providerId:n,signInMethod:n,pendingToken:a,idToken:i,accessToken:s}):new Xs(n).credential({idToken:i,accessToken:s,rawNonce:u})}return t instanceof Yt?r.credentialFromError(t):r.credentialFromResult(t)}function zt(t,e){return e.catch(n=>{throw n instanceof Yt&&sL(t,n),n}).then(n=>{const r=n.operationType,i=n.user;return{operationType:r,credential:iL(n),additionalUserInfo:jx(n),user:ar.getOrCreate(i)}})}async function Um(t,e){const n=await e;return{verificationId:n.verificationId,confirm:r=>zt(t,n.confirm(r))}}class oL{constructor(e,n){this.resolver=n,this.auth=rL(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return zt(FE(this.auth),this.resolver.resolveSignIn(e))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar{constructor(e){this._delegate=e,this.multiFactor=Gx(e)}static getOrCreate(e){return ar.USER_MAP.has(e)||ar.USER_MAP.set(e,new ar(e)),ar.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return zt(this.auth,iE(this._delegate,e))}async linkWithPhoneNumber(e,n){return Um(this.auth,bO(this._delegate,e,n))}async linkWithPopup(e){return zt(this.auth,LO(this._delegate,e,Kr))}async linkWithRedirect(e){return await $m(We(this.auth)),qO(this._delegate,e,Kr)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return zt(this.auth,sE(this._delegate,e))}reauthenticateWithPhoneNumber(e,n){return Um(this.auth,CO(this._delegate,e,n))}reauthenticateWithPopup(e){return zt(this.auth,DO(this._delegate,e,Kr))}async reauthenticateWithRedirect(e){return await $m(We(this.auth)),jO(this._delegate,e,Kr)}sendEmailVerification(e){return Px(this._delegate,e)}async unlink(e){return await yx(this._delegate,e),this}updateEmail(e){return Lx(this._delegate,e)}updatePassword(e){return Mx(this._delegate,e)}updatePhoneNumber(e){return AO(this._delegate,e)}updateProfile(e){return Dx(this._delegate,e)}verifyBeforeUpdateEmail(e,n){return xx(this._delegate,e,n)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}ar.USER_MAP=new WeakMap;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iu=A;class Fm{constructor(e,n){if(this.app=e,n.isInitialized()){this._delegate=n.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:r}=e.options;iu(r,"invalid-api-key",{appName:e.name});let i=[Ja];if(typeof window!="undefined"){i=tL(r,e.name);for(const o of[Jc,Em,Oi])i.includes(o)||i.push(o)}iu(r,"invalid-api-key",{appName:e.name});const s=typeof window!="undefined"?Kr:void 0;this._delegate=n.initialize({options:{persistence:i,popupRedirectResolver:s}}),this._delegate._updateErrorMap(bP),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?ar.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,n){YP(this._delegate,e,n)}applyActionCode(e){return Ix(this._delegate,e)}checkActionCode(e){return oE(this._delegate,e)}confirmPasswordReset(e,n){return Ex(this._delegate,e,n)}async createUserWithEmailAndPassword(e,n){return zt(this._delegate,Tx(this._delegate,e,n))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return Nx(this._delegate,e)}isSignInWithEmailLink(e){return Cx(this._delegate,e)}async getRedirectResult(){iu(Mm(),this._delegate,"operation-not-supported-in-this-environment");const e=await WO(this._delegate,Kr);return e?zt(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){qD(this._delegate,e)}onAuthStateChanged(e,n,r){const{next:i,error:s,complete:o}=BE(e,n,r);return this._delegate.onAuthStateChanged(i,s,o)}onIdTokenChanged(e,n,r){const{next:i,error:s,complete:o}=BE(e,n,r);return this._delegate.onIdTokenChanged(i,s,o)}sendSignInLinkToEmail(e,n){return bx(this._delegate,e,n)}sendPasswordResetEmail(e,n){return _x(this._delegate,e,n||void 0)}async setPersistence(e){eL(this._delegate,e);let n;switch(e){case Jt.SESSION:n=Oi;break;case Jt.LOCAL:n=await Xt(Jc)._isAvailable()?Jc:Em;break;case Jt.NONE:n=Ja;break;default:return ot("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(n)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return zt(this._delegate,gx(this._delegate))}signInWithCredential(e){return zt(this._delegate,Hc(this._delegate,e))}signInWithCustomToken(e){return zt(this._delegate,wx(this._delegate,e))}signInWithEmailAndPassword(e,n){return zt(this._delegate,kx(this._delegate,e,n))}signInWithEmailLink(e,n){return zt(this._delegate,Ax(this._delegate,e,n))}signInWithPhoneNumber(e,n){return Um(this._delegate,kO(this._delegate,e,n))}async signInWithPopup(e){return iu(Mm(),this._delegate,"operation-not-supported-in-this-environment"),zt(this._delegate,OO(this._delegate,e,Kr))}async signInWithRedirect(e){return iu(Mm(),this._delegate,"operation-not-supported-in-this-environment"),await $m(this._delegate),VO(this._delegate,e,Kr)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return Sx(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}Fm.Persistence=Jt;function BE(t,e,n){let r=t;typeof t!="function"&&({next:r,error:e,complete:n}=t);const i=r;return{next:o=>i(o&&ar.getOrCreate(o)),error:e,complete:n}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vm{constructor(){this.providerId="phone",this._delegate=new kn(FE(qs.auth()))}static credential(e,n){return kn.credential(e,n)}verifyPhoneNumber(e,n){return this._delegate.verifyPhoneNumber(e,n)}unwrap(){return this._delegate}}Vm.PHONE_SIGN_IN_METHOD=kn.PHONE_SIGN_IN_METHOD;Vm.PROVIDER_ID=kn.PROVIDER_ID;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aL=A;class uL{constructor(e,n,r=qs.app()){var i;aL((i=r.options)===null||i===void 0?void 0:i.apiKey,"invalid-api-key",{appName:r.name}),this._delegate=new SO(e,n,r.auth()),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lL="auth-compat";function cL(t){t.INTERNAL.registerComponent(new Sn(lL,e=>{const n=e.getProvider("app-compat").getImmediate(),r=e.getProvider("auth");return new Fm(n,r)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:Hs.EMAIL_SIGNIN,PASSWORD_RESET:Hs.PASSWORD_RESET,RECOVER_EMAIL:Hs.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:Hs.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:Hs.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:Hs.VERIFY_EMAIL}},EmailAuthProvider:Wr,FacebookAuthProvider:Un,GithubAuthProvider:Vn,GoogleAuthProvider:Fn,OAuthProvider:Xs,PhoneAuthProvider:Vm,PhoneMultiFactorGenerator:RE,RecaptchaVerifier:uL,TwitterAuthProvider:Bn,Auth:Fm,AuthCredential:Qs,Error:Yt}).setInstantiationMode("LAZY").setMultipleInstances(!1)),t.registerVersion(HD,WD)}cL(qs);var hL=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},$,Bm=Bm||{},G=hL||self;function sh(){}function jm(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function su(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function dL(t){return Object.prototype.hasOwnProperty.call(t,zm)&&t[zm]||(t[zm]=++fL)}var zm="closure_uid_"+(1e9*Math.random()>>>0),fL=0;function pL(t,e,n){return t.call.apply(t.bind,arguments)}function mL(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function ut(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?ut=pL:ut=mL,ut.apply(null,arguments)}function oh(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function lt(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function Qr(){this.s=this.s,this.o=this.o}var gL=0,yL={};Qr.prototype.s=!1;Qr.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),gL!=0)){var t=dL(this);delete yL[t]}};Qr.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const jE=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},zE=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const r=t.length,i=typeof t=="string"?t.split(""):t;for(let s=0;s<r;s++)s in i&&e.call(n,i[s],s,t)};function vL(t){e:{var e=lM;const n=t.length,r=typeof t=="string"?t.split(""):t;for(let i=0;i<n;i++)if(i in r&&e.call(void 0,r[i],i,t)){e=i;break e}e=-1}return 0>e?null:typeof t=="string"?t.charAt(e):t[e]}function qE(t){return Array.prototype.concat.apply([],arguments)}function qm(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function ah(t){return/^[\s\xa0]*$/.test(t)}var HE=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Nt(t,e){return t.indexOf(e)!=-1}function Hm(t,e){return t<e?-1:t>e?1:0}var Pt;e:{var WE=G.navigator;if(WE){var GE=WE.userAgent;if(GE){Pt=GE;break e}}Pt=""}function Wm(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function KE(t){const e={};for(const n in t)e[n]=t[n];return e}var QE="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function YE(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<QE.length;s++)n=QE[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Gm(t){return Gm[" "](t),t}Gm[" "]=sh;function wL(t){var e=IL;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var _L=Nt(Pt,"Opera"),Zs=Nt(Pt,"Trident")||Nt(Pt,"MSIE"),XE=Nt(Pt,"Edge"),Km=XE||Zs,JE=Nt(Pt,"Gecko")&&!(Nt(Pt.toLowerCase(),"webkit")&&!Nt(Pt,"Edge"))&&!(Nt(Pt,"Trident")||Nt(Pt,"MSIE"))&&!Nt(Pt,"Edge"),EL=Nt(Pt.toLowerCase(),"webkit")&&!Nt(Pt,"Edge");function ZE(){var t=G.document;return t?t.documentMode:void 0}var uh;e:{var Qm="",Ym=function(){var t=Pt;if(JE)return/rv:([^\);]+)(\)|;)/.exec(t);if(XE)return/Edge\/([\d\.]+)/.exec(t);if(Zs)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(EL)return/WebKit\/(\S+)/.exec(t);if(_L)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Ym&&(Qm=Ym?Ym[1]:""),Zs){var Xm=ZE();if(Xm!=null&&Xm>parseFloat(Qm)){uh=String(Xm);break e}}uh=Qm}var IL={};function SL(){return wL(function(){let t=0;const e=HE(String(uh)).split("."),n=HE("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var i=e[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i[0].length==0&&s[0].length==0)break;t=Hm(i[1].length==0?0:parseInt(i[1],10),s[1].length==0?0:parseInt(s[1],10))||Hm(i[2].length==0,s[2].length==0)||Hm(i[2],s[2]),i=i[3],s=s[3]}while(t==0)}return 0<=t})}var Jm;if(G.document&&Zs){var eI=ZE();Jm=eI||parseInt(uh,10)||void 0}else Jm=void 0;var TL=Jm,kL=function(){if(!G.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{G.addEventListener("test",sh,e),G.removeEventListener("test",sh,e)}catch{}return t}();function Et(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Et.prototype.h=function(){this.defaultPrevented=!0};function ou(t,e){if(Et.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(JE){e:{try{Gm(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:bL[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&ou.Z.h.call(this)}}lt(ou,Et);var bL={2:"touch",3:"pen",4:"mouse"};ou.prototype.h=function(){ou.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var au="closure_listenable_"+(1e6*Math.random()|0),CL=0;function AL(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ia=i,this.key=++CL,this.ca=this.fa=!1}function lh(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function ch(t){this.src=t,this.g={},this.h=0}ch.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=eg(t,e,r,i);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new AL(e,this.src,s,!!r,i),e.fa=n,t.push(e)),e};function Zm(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=jE(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(lh(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function eg(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.ca&&s.listener==e&&s.capture==!!n&&s.ia==r)return i}return-1}var tg="closure_lm_"+(1e6*Math.random()|0),ng={};function tI(t,e,n,r,i){if(r&&r.once)return rI(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)tI(t,e[s],n,r,i);return null}return n=og(n),t&&t[au]?t.N(e,n,su(r)?!!r.capture:!!r,i):nI(t,e,n,!1,r,i)}function nI(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=su(i)?!!i.capture:!!i,a=ig(t);if(a||(t[tg]=a=new ch(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=RL(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)kL||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(sI(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function RL(){function t(n){return e.call(t.src,t.listener,n)}var e=NL;return t}function rI(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)rI(t,e[s],n,r,i);return null}return n=og(n),t&&t[au]?t.O(e,n,su(r)?!!r.capture:!!r,i):nI(t,e,n,!0,r,i)}function iI(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)iI(t,e[s],n,r,i);else r=su(r)?!!r.capture:!!r,n=og(n),t&&t[au]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=eg(s,n,r,i),-1<n&&(lh(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=ig(t))&&(e=t.g[e.toString()],t=-1,e&&(t=eg(e,n,r,i)),(n=-1<t?e[t]:null)&&rg(n))}function rg(t){if(typeof t!="number"&&t&&!t.ca){var e=t.src;if(e&&e[au])Zm(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(sI(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=ig(e))?(Zm(n,t),n.h==0&&(n.src=null,e[tg]=null)):lh(t)}}}function sI(t){return t in ng?ng[t]:ng[t]="on"+t}function NL(t,e){if(t.ca)t=!0;else{e=new ou(e,this);var n=t.listener,r=t.ia||t.src;t.fa&&rg(t),t=n.call(r,e)}return t}function ig(t){return t=t[tg],t instanceof ch?t:null}var sg="__closure_events_fn_"+(1e9*Math.random()>>>0);function og(t){return typeof t=="function"?t:(t[sg]||(t[sg]=function(e){return t.handleEvent(e)}),t[sg])}function Ge(){Qr.call(this),this.i=new ch(this),this.P=this,this.I=null}lt(Ge,Qr);Ge.prototype[au]=!0;Ge.prototype.removeEventListener=function(t,e,n,r){iI(this,t,e,n,r)};function ct(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,typeof e=="string")e=new Et(e,t);else if(e instanceof Et)e.target=e.target||t;else{var i=e;e=new Et(r,t),YE(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=hh(o,r,!0,e)&&i}if(o=e.g=t,i=hh(o,r,!0,e)&&i,i=hh(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=hh(o,r,!1,e)&&i}Ge.prototype.M=function(){if(Ge.Z.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)lh(n[r]);delete t.g[e],t.h--}}this.I=null};Ge.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Ge.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function hh(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ca&&o.capture==n){var a=o.listener,u=o.ia||o.src;o.fa&&Zm(t.i,o),i=a.call(u,r)!==!1&&i}}return i&&!r.defaultPrevented}var ag=G.JSON.stringify;function PL(){var t=aI;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class xL{constructor(){this.h=this.g=null}add(e,n){const r=oI.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var oI=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new OL,t=>t.reset());class OL{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function DL(t){G.setTimeout(()=>{throw t},0)}function ug(t,e){lg||LL(),cg||(lg(),cg=!0),aI.add(t,e)}var lg;function LL(){var t=G.Promise.resolve(void 0);lg=function(){t.then(ML)}}var cg=!1,aI=new xL;function ML(){for(var t;t=PL();){try{t.h.call(t.g)}catch(n){DL(n)}var e=oI;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}cg=!1}function dh(t,e){Ge.call(this),this.h=t||1,this.g=e||G,this.j=ut(this.kb,this),this.l=Date.now()}lt(dh,Ge);$=dh.prototype;$.da=!1;$.S=null;$.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),ct(this,"tick"),this.da&&(hg(this),this.start()))}};$.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function hg(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}$.M=function(){dh.Z.M.call(this),hg(this),delete this.g};function dg(t,e,n){if(typeof t=="function")n&&(t=ut(t,n));else if(t&&typeof t.handleEvent=="function")t=ut(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:G.setTimeout(t,e||0)}function uI(t){t.g=dg(()=>{t.g=null,t.i&&(t.i=!1,uI(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class $L extends Qr{constructor(e,n){super();this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:uI(this)}M(){super.M(),this.g&&(G.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function uu(t){Qr.call(this),this.h=t,this.g={}}lt(uu,Qr);var lI=[];function cI(t,e,n,r){Array.isArray(n)||(n&&(lI[0]=n.toString()),n=lI);for(var i=0;i<n.length;i++){var s=tI(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function hI(t){Wm(t.g,function(e,n){this.g.hasOwnProperty(n)&&rg(e)},t),t.g={}}uu.prototype.M=function(){uu.Z.M.call(this),hI(this)};uu.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function fh(){this.g=!0}fh.prototype.Aa=function(){this.g=!1};function UL(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),u=0;u<a.length;u++){var l=a[u].split("=");if(1<l.length){var c=l[0];l=l[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+l+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function FL(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function eo(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+BL(t,n)+(r?" "+r:"")})}function VL(t,e){t.info(function(){return"TIMEOUT: "+e})}fh.prototype.info=function(){};function BL(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return ag(n)}catch{return e}}var Mi={},dI=null;function ph(){return dI=dI||new Ge}Mi.Ma="serverreachability";function fI(t){Et.call(this,Mi.Ma,t)}lt(fI,Et);function lu(t){const e=ph();ct(e,new fI(e,t))}Mi.STAT_EVENT="statevent";function pI(t,e){Et.call(this,Mi.STAT_EVENT,t),this.stat=e}lt(pI,Et);function xt(t){const e=ph();ct(e,new pI(e,t))}Mi.Na="timingevent";function mI(t,e){Et.call(this,Mi.Na,t),this.size=e}lt(mI,Et);function cu(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return G.setTimeout(function(){t()},e)}var mh={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},gI={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function fg(){}fg.prototype.h=null;function yI(t){return t.h||(t.h=t.i())}function vI(){}var hu={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function pg(){Et.call(this,"d")}lt(pg,Et);function mg(){Et.call(this,"c")}lt(mg,Et);var gg;function gh(){}lt(gh,fg);gh.prototype.g=function(){return new XMLHttpRequest};gh.prototype.i=function(){return{}};gg=new gh;function du(t,e,n,r){this.l=t,this.j=e,this.m=n,this.X=r||1,this.V=new uu(this),this.P=jL,t=Km?125:void 0,this.W=new dh(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new wI}function wI(){this.i=null,this.g="",this.h=!1}var jL=45e3,yg={},yh={};$=du.prototype;$.setTimeout=function(t){this.P=t};function vg(t,e,n){t.K=1,t.v=Ih(ur(e)),t.s=n,t.U=!0,_I(t,null)}function _I(t,e){t.F=Date.now(),fu(t),t.A=ur(t.v);var n=t.A,r=t.X;Array.isArray(r)||(r=[String(r)]),RI(n.h,"t",r),t.C=0,n=t.l.H,t.h=new wI,t.g=JI(t.l,n?e:null,!t.s),0<t.O&&(t.L=new $L(ut(t.Ia,t,t.g),t.O)),cI(t.V,t.g,"readystatechange",t.gb),e=t.H?KE(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),lu(1),UL(t.j,t.u,t.A,t.m,t.X,t.s)}$.gb=function(t){t=t.target;const e=this.L;e&&lr(t)==3?e.l():this.Ia(t)};$.Ia=function(t){try{if(t==this.g)e:{const c=lr(this.g);var e=this.g.Da();const h=this.g.ba();if(!(3>c)&&(c!=3||Km||this.g&&(this.h.h||this.g.ga()||BI(this.g)))){this.I||c!=4||e==7||(e==8||0>=h?lu(3):lu(2)),vh(this);var n=this.g.ba();this.N=n;t:if(EI(this)){var r=BI(this.g);t="";var i=r.length,s=lr(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){$i(this),pu(this);var o="";break t}this.h.i=new G.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=n==200,FL(this.j,this.u,this.A,this.m,this.X,c,n),this.i){if(this.$&&!this.J){t:{if(this.g){var a,u=this.g;if((a=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ah(a)){var l=a;break t}}l=null}if(n=l)eo(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,wg(this,n);else{this.i=!1,this.o=3,xt(12),$i(this),pu(this);break e}}this.U?(II(this,c,o),Km&&this.i&&c==3&&(cI(this.V,this.W,"tick",this.fb),this.W.start())):(eo(this.j,this.m,o,null),wg(this,o)),c==4&&$i(this),this.i&&!this.I&&(c==4?KI(this.l,this):(this.i=!1,fu(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,xt(12)):(this.o=0,xt(13)),$i(this),pu(this)}}}catch{}finally{}};function EI(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Ba:!1}function II(t,e,n){let r=!0,i;for(;!t.I&&t.C<n.length;)if(i=zL(t,n),i==yh){e==4&&(t.o=4,xt(14),r=!1),eo(t.j,t.m,null,"[Incomplete Response]");break}else if(i==yg){t.o=4,xt(15),eo(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else eo(t.j,t.m,i,null),wg(t,i);EI(t)&&i!=yh&&i!=yg&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,xt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),Ng(e),e.L=!0,xt(11))):(eo(t.j,t.m,n,"[Invalid Chunked Response]"),$i(t),pu(t))}$.fb=function(){if(this.g){var t=lr(this.g),e=this.g.ga();this.C<e.length&&(vh(this),II(this,t,e),this.i&&t!=4&&fu(this))}};function zL(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?yh:(n=Number(e.substring(n,r)),isNaN(n)?yg:(r+=1,r+n>e.length?yh:(e=e.substr(r,n),t.C=r+n,e)))}$.cancel=function(){this.I=!0,$i(this)};function fu(t){t.Y=Date.now()+t.P,SI(t,t.P)}function SI(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=cu(ut(t.eb,t),e)}function vh(t){t.B&&(G.clearTimeout(t.B),t.B=null)}$.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(VL(this.j,this.A),this.K!=2&&(lu(3),xt(17)),$i(this),this.o=2,pu(this)):SI(this,this.Y-t)};function pu(t){t.l.G==0||t.I||KI(t.l,t)}function $i(t){vh(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,hg(t.W),hI(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function wg(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Ig(n.i,t))){if(n.I=t.N,!t.J&&Ig(n.i,t)&&n.G==3){try{var r=n.Ca.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0)e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Ah(n),bh(n);else break e;Rg(n),xt(18)}else n.ta=i[1],0<n.ta-n.U&&37500>i[2]&&n.N&&n.A==0&&!n.v&&(n.v=cu(ut(n.ab,n),6e3));if(1>=xI(n.i)&&n.ka){try{n.ka()}catch{}n.ka=void 0}}else Vi(n,11)}else if((t.J||n.g==t)&&Ah(n),!ah(e))for(i=n.Ca.g.parse(e),e=0;e<i.length;e++){let l=i[e];if(n.U=l[0],l=l[1],n.G==2)if(l[0]=="c"){n.J=l[1],n.la=l[2];const c=l[3];c!=null&&(n.ma=c,n.h.info("VER="+n.ma));const h=l[4];h!=null&&(n.za=h,n.h.info("SVER="+n.za));const d=l[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.K=r,n.h.info("backChannelRequestTimeoutMs_="+r)),r=n;const g=t.g;if(g){const y=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var s=r.i;!s.g&&(Nt(y,"spdy")||Nt(y,"quic")||Nt(y,"h2"))&&(s.j=s.l,s.g=new Set,s.h&&(Sg(s,s.h),s.h=null))}if(r.D){const _=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;_&&(r.sa=_,Ee(r.F,r.D,_))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),r=n;var o=t;if(r.oa=XI(r,r.H?r.la:null,r.W),o.J){OI(r.i,o);var a=o,u=r.K;u&&a.setTimeout(u),a.B&&(vh(a),fu(a)),r.g=o}else WI(r);0<n.l.length&&Ch(n)}else l[0]!="stop"&&l[0]!="close"||Vi(n,7);else n.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?Vi(n,7):Cg(n):l[0]!="noop"&&n.j&&n.j.wa(l),n.A=0)}}lu(4)}catch{}}function qL(t){if(t.R&&typeof t.R=="function")return t.R();if(typeof t=="string")return t.split("");if(jm(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function _g(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(jm(t)||typeof t=="string")zE(t,e,void 0);else{if(t.T&&typeof t.T=="function")var n=t.T();else if(t.R&&typeof t.R=="function")n=void 0;else if(jm(t)||typeof t=="string"){n=[];for(var r=t.length,i=0;i<r;i++)n.push(i)}else for(i in n=[],r=0,t)n[r++]=i;r=qL(t),i=r.length;for(var s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}}function to(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(t)if(t instanceof to)for(n=t.T(),r=0;r<n.length;r++)this.set(n[r],t.get(n[r]));else for(r in t)this.set(r,t[r])}$=to.prototype;$.R=function(){Eg(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t};$.T=function(){return Eg(this),this.g.concat()};function Eg(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var r=t.g[e];Ui(t.h,r)&&(t.g[n++]=r),e++}t.g.length=n}if(t.i!=t.g.length){var i={};for(n=e=0;e<t.g.length;)r=t.g[e],Ui(i,r)||(t.g[n++]=r,i[r]=1),e++;t.g.length=n}}$.get=function(t,e){return Ui(this.h,t)?this.h[t]:e};$.set=function(t,e){Ui(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e};$.forEach=function(t,e){for(var n=this.T(),r=0;r<n.length;r++){var i=n[r],s=this.get(i);t.call(e,s,i,this)}};function Ui(t,e){return Object.prototype.hasOwnProperty.call(t,e)}var TI=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function HL(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Fi(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof Fi){this.g=e!==void 0?e:t.g,wh(this,t.j),this.s=t.s,_h(this,t.i),Eh(this,t.m),this.l=t.l,e=t.h;var n=new yu;n.i=e.i,e.g&&(n.g=new to(e.g),n.h=e.h),kI(this,n),this.o=t.o}else t&&(n=String(t).match(TI))?(this.g=!!e,wh(this,n[1]||"",!0),this.s=mu(n[2]||""),_h(this,n[3]||"",!0),Eh(this,n[4]),this.l=mu(n[5]||"",!0),kI(this,n[6]||"",!0),this.o=mu(n[7]||"")):(this.g=!!e,this.h=new yu(null,this.g))}Fi.prototype.toString=function(){var t=[],e=this.j;e&&t.push(gu(e,bI,!0),":");var n=this.i;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(gu(e,bI,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.i&&n.charAt(0)!="/"&&t.push("/"),t.push(gu(n,n.charAt(0)=="/"?YL:QL,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",gu(n,JL)),t.join("")};function ur(t){return new Fi(t)}function wh(t,e,n){t.j=n?mu(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function _h(t,e,n){t.i=n?mu(e,!0):e}function Eh(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function kI(t,e,n){e instanceof yu?(t.h=e,ZL(t.h,t.g)):(n||(e=gu(e,XL)),t.h=new yu(e,t.g))}function Ee(t,e,n){t.h.set(e,n)}function Ih(t){return Ee(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function WL(t){return t instanceof Fi?ur(t):new Fi(t,void 0)}function GL(t,e,n,r){var i=new Fi(null,void 0);return t&&wh(i,t),e&&_h(i,e),n&&Eh(i,n),r&&(i.l=r),i}function mu(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function gu(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,KL),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function KL(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var bI=/[#\/\?@]/g,QL=/[#\?:]/g,YL=/[#\?]/g,XL=/[#\?@]/g,JL=/#/g;function yu(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Yr(t){t.g||(t.g=new to,t.h=0,t.i&&HL(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}$=yu.prototype;$.add=function(t,e){Yr(this),this.i=null,t=no(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function CI(t,e){Yr(t),e=no(t,e),Ui(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,Ui(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&Eg(t)))}function AI(t,e){return Yr(t),e=no(t,e),Ui(t.g.h,e)}$.forEach=function(t,e){Yr(this),this.g.forEach(function(n,r){zE(n,function(i){t.call(e,i,r,this)},this)},this)};$.T=function(){Yr(this);for(var t=this.g.R(),e=this.g.T(),n=[],r=0;r<e.length;r++)for(var i=t[r],s=0;s<i.length;s++)n.push(e[r]);return n};$.R=function(t){Yr(this);var e=[];if(typeof t=="string")AI(this,t)&&(e=qE(e,this.g.get(no(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=qE(e,t[n])}return e};$.set=function(t,e){return Yr(this),this.i=null,t=no(this,t),AI(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};$.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e};function RI(t,e,n){CI(t,e),0<n.length&&(t.i=null,t.g.set(no(t,e),qm(n)),t.h+=n.length)}$.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var r=e[n],i=encodeURIComponent(String(r));r=this.R(r);for(var s=0;s<r.length;s++){var o=i;r[s]!==""&&(o+="="+encodeURIComponent(String(r[s]))),t.push(o)}}return this.i=t.join("&")};function no(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function ZL(t,e){e&&!t.j&&(Yr(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(CI(this,r),RI(this,i,n))},t)),t.j=e}var eM=class{constructor(t,e){this.h=t,this.g=e}};function NI(t){this.l=t||tM,G.PerformanceNavigationTiming?(t=G.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(G.g&&G.g.Ea&&G.g.Ea()&&G.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var tM=10;function PI(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function xI(t){return t.h?1:t.g?t.g.size:0}function Ig(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Sg(t,e){t.g?t.g.add(e):t.h=e}function OI(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}NI.prototype.cancel=function(){if(this.i=DI(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function DI(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return qm(t.i)}function Tg(){}Tg.prototype.stringify=function(t){return G.JSON.stringify(t,void 0)};Tg.prototype.parse=function(t){return G.JSON.parse(t,void 0)};function nM(){this.g=new Tg}function rM(t,e,n){const r=n||"";try{_g(t,function(i,s){let o=i;su(i)&&(o=ag(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function iM(t,e){const n=new fh;if(G.Image){const r=new Image;r.onload=oh(Sh,n,r,"TestLoadImage: loaded",!0,e),r.onerror=oh(Sh,n,r,"TestLoadImage: error",!1,e),r.onabort=oh(Sh,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=oh(Sh,n,r,"TestLoadImage: timeout",!1,e),G.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Sh(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function vu(t){this.l=t.$b||null,this.j=t.ib||!1}lt(vu,fg);vu.prototype.g=function(){return new Th(this.l,this.j)};vu.prototype.i=function(t){return function(){return t}}({});function Th(t,e){Ge.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=kg,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}lt(Th,Ge);var kg=0;$=Th.prototype;$.open=function(t,e){if(this.readyState!=kg)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,_u(this)};$.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||G).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))};$.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,wu(this)),this.readyState=kg};$.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,_u(this)),this.g&&(this.readyState=3,_u(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof G.ReadableStream!="undefined"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;LI(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))};function LI(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}$.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?wu(this):_u(this),this.readyState==3&&LI(this)}};$.Ua=function(t){this.g&&(this.response=this.responseText=t,wu(this))};$.Ta=function(t){this.g&&(this.response=t,wu(this))};$.ha=function(){this.g&&wu(this)};function wu(t){t.readyState=4,t.l=null,t.j=null,t.A=null,_u(t)}$.setRequestHeader=function(t,e){this.v.append(t,e)};$.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};$.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function _u(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Th.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var sM=G.JSON.parse;function Oe(t){Ge.call(this),this.headers=new to,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=MI,this.K=this.L=!1}lt(Oe,Ge);var MI="",oM=/^https?$/i,aM=["POST","PUT"];$=Oe.prototype;$.ea=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():gg.g(),this.C=this.u?yI(this.u):yI(gg),this.g.onreadystatechange=ut(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(s){$I(this,s);return}t=n||"";const i=new to(this.headers);r&&_g(r,function(s,o){i.set(o,s)}),r=vL(i.T()),n=G.FormData&&t instanceof G.FormData,!(0<=jE(aM,e))||r||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach(function(s,o){this.g.setRequestHeader(o,s)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{VI(this),0<this.B&&((this.K=uM(this.g))?(this.g.timeout=this.B,this.g.ontimeout=ut(this.pa,this)):this.A=dg(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){$I(this,s)}};function uM(t){return Zs&&SL()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}function lM(t){return t.toLowerCase()=="content-type"}$.pa=function(){typeof Bm!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,ct(this,"timeout"),this.abort(8))};function $I(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,UI(t),kh(t)}function UI(t){t.D||(t.D=!0,ct(t,"complete"),ct(t,"error"))}$.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,ct(this,"complete"),ct(this,"abort"),kh(this))};$.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),kh(this,!0)),Oe.Z.M.call(this)};$.Fa=function(){this.s||(this.F||this.v||this.l?FI(this):this.cb())};$.cb=function(){FI(this)};function FI(t){if(t.h&&typeof Bm!="undefined"&&(!t.C[1]||lr(t)!=4||t.ba()!=2)){if(t.v&&lr(t)==4)dg(t.Fa,0,t);else if(ct(t,"readystatechange"),lr(t)==4){t.h=!1;try{const a=t.ba();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var i=String(t.H).match(TI)[1]||null;if(!i&&G.self&&G.self.location){var s=G.self.location.protocol;i=s.substr(0,s.length-1)}r=!oM.test(i?i.toLowerCase():"")}n=r}if(n)ct(t,"complete"),ct(t,"success");else{t.m=6;try{var o=2<lr(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.ba()+"]",UI(t)}}finally{kh(t)}}}}function kh(t,e){if(t.g){VI(t);const n=t.g,r=t.C[0]?sh:null;t.g=null,t.C=null,e||ct(t,"ready");try{n.onreadystatechange=r}catch{}}}function VI(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(G.clearTimeout(t.A),t.A=null)}function lr(t){return t.g?t.g.readyState:0}$.ba=function(){try{return 2<lr(this)?this.g.status:-1}catch{return-1}};$.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};$.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),sM(e)}};function BI(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case MI:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}$.Da=function(){return this.m};$.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function cM(t){let e="";return Wm(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function bg(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=cM(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Ee(t,e,n))}function Eu(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function jI(t){this.za=0,this.l=[],this.h=new fh,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=Eu("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=Eu("baseRetryDelayMs",5e3,t),this.$a=Eu("retryDelaySeedMs",1e4,t),this.Ya=Eu("forwardChannelMaxRetries",2,t),this.ra=Eu("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new NI(t&&t.concurrentRequestLimit),this.Ca=new nM,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||t.Xb!==!1}$=jI.prototype;$.ma=8;$.G=1;function Cg(t){if(zI(t),t.G==3){var e=t.V++,n=ur(t.F);Ee(n,"SID",t.J),Ee(n,"RID",e),Ee(n,"TYPE","terminate"),Iu(t,n),e=new du(t,t.h,e,void 0),e.K=2,e.v=Ih(ur(n)),n=!1,G.navigator&&G.navigator.sendBeacon&&(n=G.navigator.sendBeacon(e.v.toString(),"")),!n&&G.Image&&(new Image().src=e.v,n=!0),n||(e.g=JI(e.l,null),e.g.ea(e.v)),e.F=Date.now(),fu(e)}YI(t)}$.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch{}};function bh(t){t.g&&(Ng(t),t.g.cancel(),t.g=null)}function zI(t){bh(t),t.u&&(G.clearTimeout(t.u),t.u=null),Ah(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&G.clearTimeout(t.m),t.m=null)}function Ag(t,e){t.l.push(new eM(t.Za++,e)),t.G==3&&Ch(t)}function Ch(t){PI(t.i)||t.m||(t.m=!0,ug(t.Ha,t),t.C=0)}function hM(t,e){return xI(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.l=e.D.concat(t.l),!0):t.G==1||t.G==2||t.C>=(t.Xa?0:t.Ya)?!1:(t.m=cu(ut(t.Ha,t,e),QI(t,t.C)),t.C++,!0)}$.Ha=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const i=new du(this,this.h,t,void 0);let s=this.s;if(this.P&&(s?(s=KE(s),YE(s,this.P)):s=this.P),this.o===null&&(i.H=s),this.ja)e:{for(var e=0,n=0;n<this.l.length;n++){t:{var r=this.l[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.l.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=HI(this,i,e),n=ur(this.F),Ee(n,"RID",t),Ee(n,"CVER",22),this.D&&Ee(n,"X-HTTP-Session-Id",this.D),Iu(this,n),this.o&&s&&bg(n,this.o,s),Sg(this.i,i),this.Ra&&Ee(n,"TYPE","init"),this.ja?(Ee(n,"$req",e),Ee(n,"SID","null"),i.$=!0,vg(i,n,null)):vg(i,n,e),this.G=2}}else this.G==3&&(t?qI(this,t):this.l.length==0||PI(this.i)||qI(this))};function qI(t,e){var n;e?n=e.m:n=t.V++;const r=ur(t.F);Ee(r,"SID",t.J),Ee(r,"RID",n),Ee(r,"AID",t.U),Iu(t,r),t.o&&t.s&&bg(r,t.o,t.s),n=new du(t,t.h,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=HI(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),Sg(t.i,n),vg(n,r,e)}function Iu(t,e){t.j&&_g({},function(n,r){Ee(e,r,n)})}function HI(t,e,n){n=Math.min(t.l.length,n);var r=t.j?ut(t.j.Oa,t.j,t):null;e:{var i=t.l;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let u=0;u<n;u++){let l=i[u].h;const c=i[u].g;if(l-=s,0>l)s=Math.max(0,i[u].h-100),a=!1;else try{rM(c,o,"req"+l+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.l.splice(0,n),e.D=t,r}function WI(t){t.g||t.u||(t.Y=1,ug(t.Ga,t),t.A=0)}function Rg(t){return t.g||t.u||3<=t.A?!1:(t.Y++,t.u=cu(ut(t.Ga,t),QI(t,t.A)),t.A++,!0)}$.Ga=function(){if(this.u=null,GI(this),this.$&&!(this.L||this.g==null||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=cu(ut(this.bb,this),t)}};$.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,xt(10),bh(this),GI(this))};function Ng(t){t.B!=null&&(G.clearTimeout(t.B),t.B=null)}function GI(t){t.g=new du(t,t.h,"rpc",t.Y),t.o===null&&(t.g.H=t.s),t.g.O=0;var e=ur(t.oa);Ee(e,"RID","rpc"),Ee(e,"SID",t.J),Ee(e,"CI",t.N?"0":"1"),Ee(e,"AID",t.U),Iu(t,e),Ee(e,"TYPE","xmlhttp"),t.o&&t.s&&bg(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=Ih(ur(e)),n.s=null,n.U=!0,_I(n,t)}$.ab=function(){this.v!=null&&(this.v=null,bh(this),Rg(this),xt(19))};function Ah(t){t.v!=null&&(G.clearTimeout(t.v),t.v=null)}function KI(t,e){var n=null;if(t.g==e){Ah(t),Ng(t),t.g=null;var r=2}else if(Ig(t.i,e))n=e.D,OI(t.i,e),r=1;else return;if(t.I=e.N,t.G!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;r=ph(),ct(r,new mI(r,n,e,i)),Ch(t)}else WI(t);else if(i=e.o,i==3||i==0&&0<t.I||!(r==1&&hM(t,e)||r==2&&Rg(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:Vi(t,5);break;case 4:Vi(t,10);break;case 3:Vi(t,6);break;default:Vi(t,2)}}}function QI(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function Vi(t,e){if(t.h.info("Error code "+e),e==2){var n=null;t.j&&(n=null);var r=ut(t.jb,t);n||(n=new Fi("//www.google.com/images/cleardot.gif"),G.location&&G.location.protocol=="http"||wh(n,"https"),Ih(n)),iM(n.toString(),r)}else xt(2);t.G=0,t.j&&t.j.va(e),YI(t),zI(t)}$.jb=function(t){t?(this.h.info("Successfully pinged google.com"),xt(2)):(this.h.info("Failed to ping google.com"),xt(1))};function YI(t){t.G=0,t.I=-1,t.j&&((DI(t.i).length!=0||t.l.length!=0)&&(t.i.i.length=0,qm(t.l),t.l.length=0),t.j.ua())}function XI(t,e,n){let r=WL(n);if(r.i!="")e&&_h(r,e+"."+r.i),Eh(r,r.m);else{const i=G.location;r=GL(i.protocol,e?e+"."+i.hostname:i.hostname,+i.port,n)}return t.aa&&Wm(t.aa,function(i,s){Ee(r,s,i)}),e=t.D,n=t.sa,e&&n&&Ee(r,e,n),Ee(r,"VER",t.ma),Iu(t,r),r}function JI(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new Oe(new vu({ib:!0})):new Oe(t.qa),e.L=t.H,e}function ZI(){}$=ZI.prototype;$.xa=function(){};$.wa=function(){};$.va=function(){};$.ua=function(){};$.Oa=function(){};function Rh(){if(Zs&&!(10<=Number(TL)))throw Error("Environmental error: no available transport.")}Rh.prototype.g=function(t,e){return new Zt(t,e)};function Zt(t,e){Ge.call(this),this.g=new jI(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!ah(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!ah(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new ro(this)}lt(Zt,Ge);Zt.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),ug(ut(t.hb,t,e))),xt(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=XI(t,null,t.W),Ch(t)};Zt.prototype.close=function(){Cg(this.g)};Zt.prototype.u=function(t){if(typeof t=="string"){var e={};e.__data__=t,Ag(this.g,e)}else this.v?(e={},e.__data__=ag(t),Ag(this.g,e)):Ag(this.g,t)};Zt.prototype.M=function(){this.g.j=null,delete this.j,Cg(this.g),delete this.g,Zt.Z.M.call(this)};function eS(t){pg.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}lt(eS,pg);function tS(){mg.call(this),this.status=1}lt(tS,mg);function ro(t){this.g=t}lt(ro,ZI);ro.prototype.xa=function(){ct(this.g,"a")};ro.prototype.wa=function(t){ct(this.g,new eS(t))};ro.prototype.va=function(t){ct(this.g,new tS(t))};ro.prototype.ua=function(){ct(this.g,"b")};Rh.prototype.createWebChannel=Rh.prototype.g;Zt.prototype.send=Zt.prototype.u;Zt.prototype.open=Zt.prototype.m;Zt.prototype.close=Zt.prototype.close;mh.NO_ERROR=0;mh.TIMEOUT=8;mh.HTTP_ERROR=6;gI.COMPLETE="complete";vI.EventType=hu;hu.OPEN="a";hu.CLOSE="b";hu.ERROR="c";hu.MESSAGE="d";Ge.prototype.listen=Ge.prototype.N;Oe.prototype.listenOnce=Oe.prototype.O;Oe.prototype.getLastError=Oe.prototype.La;Oe.prototype.getLastErrorCode=Oe.prototype.Da;Oe.prototype.getStatus=Oe.prototype.ba;Oe.prototype.getResponseJson=Oe.prototype.Qa;Oe.prototype.getResponseText=Oe.prototype.ga;Oe.prototype.send=Oe.prototype.ea;var dM=function(){return new Rh},fM=function(){return ph()},Pg=mh,pM=gI,mM=Mi,nS={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},gM=vu,Nh=vI,yM=Oe;const rS="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ht.UNAUTHENTICATED=new ht(null),ht.GOOGLE_CREDENTIALS=new ht("google-credentials-uid"),ht.FIRST_PARTY=new ht("first-party-uid"),ht.MOCK_USER=new ht("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let io="9.1.3";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xr=new Lc("@firebase/firestore");function xg(){return Xr.logLevel}function vM(t){Xr.setLogLevel(t)}function N(t,...e){if(Xr.logLevel<=te.DEBUG){const n=e.map(Og);Xr.debug(`Firestore (${io}): ${t}`,...n)}}function De(t,...e){if(Xr.logLevel<=te.ERROR){const n=e.map(Og);Xr.error(`Firestore (${io}): ${t}`,...n)}}function Su(t,...e){if(Xr.logLevel<=te.WARN){const n=e.map(Og);Xr.warn(`Firestore (${io}): ${t}`,...n)}}function Og(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function q(t="Unexpected state"){const e=`FIRESTORE (${io}) INTERNAL ASSERTION FAILED: `+t;throw De(e),new Error(e)}function H(t,e){t||q()}function wM(t,e){t||q()}function L(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class b extends Error{constructor(e,n){super(n),this.code=e,this.message=n,this.name="FirebaseError",this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iS{constructor(e,n){this.user=n,this.type="OAuth",this.authHeaders={},this.authHeaders.Authorization=`Bearer ${e}`}}class _M{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ht.UNAUTHENTICATED))}shutdown(){}}class EM{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class IM{constructor(e){this.t=e,this.currentUser=ht.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new Ke;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Ke,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},a=u=>{N("FirebaseCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(N("FirebaseCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Ke)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(N("FirebaseCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(H(typeof r.accessToken=="string"),new iS(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return H(e===null||typeof e=="string"),new ht(e)}}class SM{constructor(e,n,r){this.h=e,this.l=n,this.m=r,this.type="FirstParty",this.user=ht.FIRST_PARTY}get authHeaders(){const e={"X-Goog-AuthUser":this.l},n=this.h.auth.getAuthHeaderValueForFirstParty([]);return n&&(e.Authorization=n),this.m&&(e["X-Goog-Iam-Authorization-Token"]=this.m),e}}class TM{constructor(e,n,r){this.h=e,this.l=n,this.m=r}getToken(){return Promise.resolve(new SM(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(ht.FIRST_PARTY))}shutdown(){}invalidateToken(){}}/**
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
 */class en{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.g(r),this.p=r=>n.writeSequenceNumber(r))}g(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.p&&this.p(e),e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kM(t){const e=typeof self!="undefined"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */en.T=-1;class sS{static I(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=kM(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function J(t,e){return t<e?-1:t>e?1:0}function so(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}function oS(t){return t+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new b(I.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new b(I.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new b(I.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new b(I.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Qe.fromMillis(Date.now())}static fromDate(e){return Qe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Qe(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?J(this.nanoseconds,e.nanoseconds):J(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Q(e)}static min(){return new Q(new Qe(0,0))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aS(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Bi(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function uS(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tu{constructor(e,n,r){n===void 0?n=0:n>e.length&&q(),r===void 0?r=e.length-n:r>e.length-n&&q(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Tu.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Tu?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ie extends Tu{construct(e,n,r){return new ie(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new b(I.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new ie(n)}static emptyPath(){return new ie([])}}const bM=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class dt extends Tu{construct(e,n,r){return new dt(e,n,r)}static isValidIdentifier(e){return bM.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),dt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new dt(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new b(I.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new b(I.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new b(I.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new b(I.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new dt(n)}static emptyPath(){return new dt([])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oo{constructor(e){this.fields=e,e.sort(dt.comparator)}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return so(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CM(){return typeof atob!="undefined"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new Ye(n)}static fromUint8Array(e){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new Ye(n)}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return J(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ye.EMPTY_BYTE_STRING=new Ye("");const AM=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Jr(t){if(H(!!t),typeof t=="string"){let e=0;const n=AM.exec(t);if(H(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Le(t.seconds),nanos:Le(t.nanos)}}function Le(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ao(t){return typeof t=="string"?Ye.fromBase64String(t):Ye.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dg(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function lS(t){const e=t.mapValue.fields.__previous_value__;return Dg(e)?lS(e):e}function ku(t){const e=Jr(t.mapValue.fields.__local_write_time__.timestampValue);return new Qe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ji(t){return t==null}function Ph(t){return t===0&&1/t==-1/0}function cS(t){return typeof t=="number"&&Number.isInteger(t)&&!Ph(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(e){this.path=e}static fromPath(e){return new j(ie.fromString(e))}static fromName(e){return new j(ie.fromString(e).popFirst(5))}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}isEqual(e){return e!==null&&ie.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ie.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new j(new ie(e.slice()))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zi(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Dg(t)?4:10:q()}function jn(t,e){const n=zi(t);if(n!==zi(e))return!1;switch(n){case 0:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ku(t).isEqual(ku(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=Jr(r.timestampValue),o=Jr(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return ao(r.bytesValue).isEqual(ao(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return Le(r.geoPointValue.latitude)===Le(i.geoPointValue.latitude)&&Le(r.geoPointValue.longitude)===Le(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return Le(r.integerValue)===Le(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=Le(r.doubleValue),o=Le(i.doubleValue);return s===o?Ph(s)===Ph(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return so(t.arrayValue.values||[],e.arrayValue.values||[],jn);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(aS(s)!==aS(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!jn(s[a],o[a])))return!1;return!0}(t,e);default:return q()}}function bu(t,e){return(t.values||[]).find(n=>jn(n,e))!==void 0}function uo(t,e){const n=zi(t),r=zi(e);if(n!==r)return J(n,r);switch(n){case 0:return 0;case 1:return J(t.booleanValue,e.booleanValue);case 2:return function(i,s){const o=Le(i.integerValue||i.doubleValue),a=Le(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return hS(t.timestampValue,e.timestampValue);case 4:return hS(ku(t),ku(e));case 5:return J(t.stringValue,e.stringValue);case 6:return function(i,s){const o=ao(i),a=ao(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let u=0;u<o.length&&u<a.length;u++){const l=J(o[u],a[u]);if(l!==0)return l}return J(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,s){const o=J(Le(i.latitude),Le(s.latitude));return o!==0?o:J(Le(i.longitude),Le(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let u=0;u<o.length&&u<a.length;++u){const l=uo(o[u],a[u]);if(l)return l}return J(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,s){const o=i.fields||{},a=Object.keys(o),u=s.fields||{},l=Object.keys(u);a.sort(),l.sort();for(let c=0;c<a.length&&c<l.length;++c){const h=J(a[c],l[c]);if(h!==0)return h;const d=uo(o[a[c]],u[l[c]]);if(d!==0)return d}return J(a.length,l.length)}(t.mapValue,e.mapValue);default:throw q()}}function hS(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return J(t,e);const n=Jr(t),r=Jr(e),i=J(n.seconds,r.seconds);return i!==0?i:J(n.nanos,r.nanos)}function Lg(t){return Mg(t)}function Mg(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const i=Jr(r);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?ao(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,j.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=Mg(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${Mg(r.fields[a])}`;return s+"}"}(t.mapValue):q();var e,n}function xh(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function $g(t){return!!t&&"integerValue"in t}function Ug(t){return!!t&&"arrayValue"in t}function dS(t){return!!t&&"nullValue"in t}function fS(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Oh(t){return!!t&&"mapValue"in t}function Cu(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Bi(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Cu(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Cu(t.arrayValue.values[n]);return e}return Object.assign({},t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(e){this.value=e}static empty(){return new It({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Oh(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Cu(n)}setAll(e){let n=dt.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Cu(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Oh(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return jn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Oh(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Bi(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new It(Cu(this.value))}}function pS(t){const e=[];return Bi(t.fields,(n,r)=>{const i=new dt([n]);if(Oh(r)){const s=pS(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new oo(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{constructor(e,n,r,i,s){this.key=e,this.documentType=n,this.version=r,this.data=i,this.documentState=s}static newInvalidDocument(e){return new Ie(e,0,Q.min(),It.empty(),0)}static newFoundDocument(e,n,r){return new Ie(e,1,n,r,0)}static newNoDocument(e,n){return new Ie(e,2,n,It.empty(),0)}static newUnknownDocument(e,n){return new Ie(e,3,n,It.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=It.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=It.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ie&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}clone(){return new Ie(this.key,this.documentType,this.version,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class RM{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.A=null}}function mS(t,e=null,n=[],r=[],i=null,s=null,o=null){return new RM(t,e,n,r,i,s,o)}function Au(t){const e=L(t);if(e.A===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>PM(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),ji(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=Mh(e.startAt)),e.endAt&&(n+="|ub:",n+=Mh(e.endAt)),e.A=n}return e.A}function NM(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(r=n).field.canonicalString()} ${r.op} ${Lg(r.value)}`;var r}).join(", ")}]`),ji(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: "+Mh(t.startAt)),t.endAt&&(e+=", endAt: "+Mh(t.endAt)),`Target(${e})`}function Dh(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let i=0;i<t.orderBy.length;i++)if(!FM(t.orderBy[i],e.orderBy[i]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let i=0;i<t.filters.length;i++)if(n=t.filters[i],r=e.filters[i],n.op!==r.op||!n.field.isEqual(r.field)||!jn(n.value,r.value))return!1;var n,r;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!vS(t.startAt,e.startAt)&&vS(t.endAt,e.endAt)}function Lh(t){return j.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class Ot extends class{}{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.R(e,n,r):new xM(e,n,r):n==="array-contains"?new LM(e,r):n==="in"?new MM(e,r):n==="not-in"?new $M(e,r):n==="array-contains-any"?new UM(e,r):new Ot(e,n,r)}static R(e,n,r){return n==="in"?new OM(e,r):new DM(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.P(uo(n,this.value)):n!==null&&zi(this.value)===zi(n)&&this.P(uo(n,this.value))}P(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return q()}}v(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}function PM(t){return t.field.canonicalString()+t.op.toString()+Lg(t.value)}class xM extends Ot{constructor(e,n,r){super(e,n,r),this.key=j.fromName(r.referenceValue)}matches(e){const n=j.comparator(e.key,this.key);return this.P(n)}}class OM extends Ot{constructor(e,n){super(e,"in",n),this.keys=gS("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class DM extends Ot{constructor(e,n){super(e,"not-in",n),this.keys=gS("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function gS(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>j.fromName(r.referenceValue))}class LM extends Ot{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Ug(n)&&bu(n.arrayValue,this.value)}}class MM extends Ot{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&bu(this.value.arrayValue,n)}}class $M extends Ot{constructor(e,n){super(e,"not-in",n)}matches(e){if(bu(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!bu(this.value.arrayValue,n)}}class UM extends Ot{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Ug(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>bu(this.value.arrayValue,r))}}class Ru{constructor(e,n){this.position=e,this.before=n}}function Mh(t){return`${t.before?"b":"a"}:${t.position.map(e=>Lg(e)).join(",")}`}class lo{constructor(e,n="asc"){this.field=e,this.dir=n}}function FM(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function yS(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=j.comparator(j.fromName(o.referenceValue),n.key):r=uo(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return t.before?r<=0:r<0}function vS(t,e){if(t===null)return e===null;if(e===null||t.before!==e.before||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!jn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=u,this.V=null,this.S=null,this.startAt,this.endAt}}function wS(t,e,n,r,i,s,o,a){return new cr(t,e,n,r,i,s,o,a)}function co(t){return new cr(t)}function $h(t){return!ji(t.limit)&&t.limitType==="F"}function Uh(t){return!ji(t.limit)&&t.limitType==="L"}function Fg(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Vg(t){for(const e of t.filters)if(e.v())return e.field;return null}function Bg(t){return t.collectionGroup!==null}function ho(t){const e=L(t);if(e.V===null){e.V=[];const n=Vg(e),r=Fg(e);if(n!==null&&r===null)n.isKeyField()||e.V.push(new lo(n)),e.V.push(new lo(dt.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.V.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.V.push(new lo(dt.keyField(),s))}}}return e.V}function fn(t){const e=L(t);if(!e.S)if(e.limitType==="F")e.S=mS(e.path,e.collectionGroup,ho(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of ho(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new lo(s.field,o))}const r=e.endAt?new Ru(e.endAt.position,!e.endAt.before):null,i=e.startAt?new Ru(e.startAt.position,!e.startAt.before):null;e.S=mS(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e.S}function _S(t,e,n){return new cr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Nu(t,e){return Dh(fn(t),fn(e))&&t.limitType===e.limitType}function ES(t){return`${Au(fn(t))}|lt:${t.limitType}`}function jg(t){return`Query(target=${NM(fn(t))}; limitType=${t.limitType})`}function Pu(t,e){return e.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):j.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,r){for(const i of n.explicitOrderBy)if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!yS(n.startAt,ho(n),r)||n.endAt&&yS(n.endAt,ho(n),r))}(t,e)}function IS(t){return(e,n)=>{let r=!1;for(const i of ho(t)){const s=VM(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function VM(t,e,n){const r=t.field.isKeyField()?j.comparator(e.key,n.key):function(i,s,o){const a=s.data.field(i),u=o.data.field(i);return a!==null&&u!==null?uo(a,u):q()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return q()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SS(t,e){if(t.D){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ph(e)?"-0":e}}function TS(t){return{integerValue:""+t}}function kS(t,e){return cS(e)?TS(e):SS(t,e)}/**
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
 */class Fh{constructor(){this._=void 0}}function BM(t,e,n){return t instanceof fo?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&(s.fields.__previous_value__=i),{mapValue:s}}(n,e):t instanceof qi?CS(t,e):t instanceof Hi?AS(t,e):function(r,i){const s=bS(r,i),o=RS(s)+RS(r.C);return $g(s)&&$g(r.C)?TS(o):SS(r.N,o)}(t,e)}function jM(t,e,n){return t instanceof qi?CS(t,e):t instanceof Hi?AS(t,e):n}function bS(t,e){return t instanceof po?$g(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class fo extends Fh{}class qi extends Fh{constructor(e){super(),this.elements=e}}function CS(t,e){const n=NS(e);for(const r of t.elements)n.some(i=>jn(i,r))||n.push(r);return{arrayValue:{values:n}}}class Hi extends Fh{constructor(e){super(),this.elements=e}}function AS(t,e){let n=NS(e);for(const r of t.elements)n=n.filter(i=>!jn(i,r));return{arrayValue:{values:n}}}class po extends Fh{constructor(e,n){super(),this.N=e,this.C=n}}function RS(t){return Le(t.integerValue||t.doubleValue)}function NS(t){return Ug(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xu{constructor(e,n){this.field=e,this.transform=n}}function zM(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof qi&&r instanceof qi||n instanceof Hi&&r instanceof Hi?so(n.elements,r.elements,jn):n instanceof po&&r instanceof po?jn(n.C,r.C):n instanceof fo&&r instanceof fo}(t.transform,e.transform)}class qM{constructor(e,n){this.version=e,this.transformResults=n}}class Me{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Me}static exists(e){return new Me(void 0,e)}static updateTime(e){return new Me(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Vh(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Bh{}function HM(t,e,n){t instanceof Ou?function(r,i,s){const o=r.value.clone(),a=DS(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Zr?function(r,i,s){if(!Vh(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=DS(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(OS(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function zg(t,e,n){t instanceof Ou?function(r,i,s){if(!Vh(r.precondition,i))return;const o=r.value.clone(),a=LS(r.fieldTransforms,s,i);o.setAll(a),i.convertToFoundDocument(xS(i),o).setHasLocalMutations()}(t,e,n):t instanceof Zr?function(r,i,s){if(!Vh(r.precondition,i))return;const o=LS(r.fieldTransforms,s,i),a=i.data;a.setAll(OS(r)),a.setAll(o),i.convertToFoundDocument(xS(i),a).setHasLocalMutations()}(t,e,n):function(r,i){Vh(r.precondition,i)&&i.convertToNoDocument(Q.min())}(t,e)}function WM(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=bS(r.transform,i||null);s!=null&&(n==null&&(n=It.empty()),n.set(r.field,s))}return n||null}function PS(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&so(n,r,(i,s)=>zM(i,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}function xS(t){return t.isFoundDocument()?t.version:Q.min()}class Ou extends Bh{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}}class Zr extends Bh{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}}function OS(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function DS(t,e,n){const r=new Map;H(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,jM(o,a,n[i]))}return r}function LS(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,BM(s,o,e))}return r}class Du extends Bh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}}class qg extends Bh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GM{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var $e,Z;function MS(t){switch(t){default:return q();case I.CANCELLED:case I.UNKNOWN:case I.DEADLINE_EXCEEDED:case I.RESOURCE_EXHAUSTED:case I.INTERNAL:case I.UNAVAILABLE:case I.UNAUTHENTICATED:return!1;case I.INVALID_ARGUMENT:case I.NOT_FOUND:case I.ALREADY_EXISTS:case I.PERMISSION_DENIED:case I.FAILED_PRECONDITION:case I.ABORTED:case I.OUT_OF_RANGE:case I.UNIMPLEMENTED:case I.DATA_LOSS:return!0}}function $S(t){if(t===void 0)return De("GRPC error has no .code"),I.UNKNOWN;switch(t){case $e.OK:return I.OK;case $e.CANCELLED:return I.CANCELLED;case $e.UNKNOWN:return I.UNKNOWN;case $e.DEADLINE_EXCEEDED:return I.DEADLINE_EXCEEDED;case $e.RESOURCE_EXHAUSTED:return I.RESOURCE_EXHAUSTED;case $e.INTERNAL:return I.INTERNAL;case $e.UNAVAILABLE:return I.UNAVAILABLE;case $e.UNAUTHENTICATED:return I.UNAUTHENTICATED;case $e.INVALID_ARGUMENT:return I.INVALID_ARGUMENT;case $e.NOT_FOUND:return I.NOT_FOUND;case $e.ALREADY_EXISTS:return I.ALREADY_EXISTS;case $e.PERMISSION_DENIED:return I.PERMISSION_DENIED;case $e.FAILED_PRECONDITION:return I.FAILED_PRECONDITION;case $e.ABORTED:return I.ABORTED;case $e.OUT_OF_RANGE:return I.OUT_OF_RANGE;case $e.UNIMPLEMENTED:return I.UNIMPLEMENTED;case $e.DATA_LOSS:return I.DATA_LOSS;default:return q()}}(Z=$e||($e={}))[Z.OK=0]="OK",Z[Z.CANCELLED=1]="CANCELLED",Z[Z.UNKNOWN=2]="UNKNOWN",Z[Z.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Z[Z.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Z[Z.NOT_FOUND=5]="NOT_FOUND",Z[Z.ALREADY_EXISTS=6]="ALREADY_EXISTS",Z[Z.PERMISSION_DENIED=7]="PERMISSION_DENIED",Z[Z.UNAUTHENTICATED=16]="UNAUTHENTICATED",Z[Z.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Z[Z.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Z[Z.ABORTED=10]="ABORTED",Z[Z.OUT_OF_RANGE=11]="OUT_OF_RANGE",Z[Z.UNIMPLEMENTED=12]="UNIMPLEMENTED",Z[Z.INTERNAL=13]="INTERNAL",Z[Z.UNAVAILABLE=14]="UNAVAILABLE",Z[Z.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(e,n){this.comparator=e,this.root=n||ft.EMPTY}insert(e,n){return new Be(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ft.BLACK,null,null))}remove(e){return new Be(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ft.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new jh(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new jh(this.root,e,this.comparator,!1)}getReverseIterator(){return new jh(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new jh(this.root,e,this.comparator,!0)}}class jh{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ft{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r!=null?r:ft.RED,this.left=i!=null?i:ft.EMPTY,this.right=s!=null?s:ft.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new ft(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,i!=null?i:this.left,s!=null?s:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return ft.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return ft.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ft.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ft.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw q();const e=this.left.check();if(e!==this.right.check())throw q();return e+(this.isRed()?0:1)}}ft.EMPTY=null,ft.RED=!0,ft.BLACK=!1;ft.EMPTY=new class{constructor(){this.size=0}get key(){throw q()}get value(){throw q()}get color(){throw q()}get left(){throw q()}get right(){throw q()}copy(t,e,n,r,i){return this}insert(t,e,n){return new ft(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce{constructor(e){this.comparator=e,this.data=new Be(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new US(this.data.getIterator())}getIteratorFrom(e){return new US(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Ce)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ce(this.comparator);return n.data=e,n}}class US{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KM=new Be(j.comparator);function pn(){return KM}const QM=new Be(j.comparator);function Hg(){return QM}const YM=new Be(j.comparator);function FS(){return YM}const XM=new Ce(j.comparator);function ce(...t){let e=XM;for(const n of t)e=e.add(n);return e}const JM=new Ce(J);function zh(){return JM}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lu{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n){const r=new Map;return r.set(e,Mu.createSynthesizedTargetChangeForCurrentChange(e,n)),new Lu(Q.min(),r,zh(),pn(),ce())}}class Mu{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n){return new Mu(Ye.EMPTY_BYTE_STRING,n,ce(),ce(),ce())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qh{constructor(e,n,r,i){this.k=e,this.removedTargetIds=n,this.key=r,this.$=i}}class VS{constructor(e,n){this.targetId=e,this.O=n}}class BS{constructor(e,n,r=Ye.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class jS{constructor(){this.F=0,this.M=qS(),this.L=Ye.EMPTY_BYTE_STRING,this.B=!1,this.U=!0}get current(){return this.B}get resumeToken(){return this.L}get q(){return this.F!==0}get K(){return this.U}j(e){e.approximateByteSize()>0&&(this.U=!0,this.L=e)}W(){let e=ce(),n=ce(),r=ce();return this.M.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:q()}}),new Mu(this.L,this.B,e,n,r)}G(){this.U=!1,this.M=qS()}H(e,n){this.U=!0,this.M=this.M.insert(e,n)}J(e){this.U=!0,this.M=this.M.remove(e)}Y(){this.F+=1}X(){this.F-=1}Z(){this.U=!0,this.B=!0}}class ZM{constructor(e){this.tt=e,this.et=new Map,this.nt=pn(),this.st=zS(),this.it=new Ce(J)}rt(e){for(const n of e.k)e.$&&e.$.isFoundDocument()?this.ot(n,e.$):this.at(n,e.key,e.$);for(const n of e.removedTargetIds)this.at(n,e.key,e.$)}ct(e){this.forEachTarget(e,n=>{const r=this.ut(n);switch(e.state){case 0:this.ht(n)&&r.j(e.resumeToken);break;case 1:r.X(),r.q||r.G(),r.j(e.resumeToken);break;case 2:r.X(),r.q||this.removeTarget(n);break;case 3:this.ht(n)&&(r.Z(),r.j(e.resumeToken));break;case 4:this.ht(n)&&(this.lt(n),r.j(e.resumeToken));break;default:q()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.et.forEach((r,i)=>{this.ht(i)&&n(i)})}ft(e){const n=e.targetId,r=e.O.count,i=this.dt(n);if(i){const s=i.target;if(Lh(s))if(r===0){const o=new j(s.path);this.at(n,o,Ie.newNoDocument(o,Q.min()))}else H(r===1);else this.wt(n)!==r&&(this.lt(n),this.it=this.it.add(n))}}_t(e){const n=new Map;this.et.forEach((s,o)=>{const a=this.dt(o);if(a){if(s.current&&Lh(a.target)){const u=new j(a.target.path);this.nt.get(u)!==null||this.gt(o,u)||this.at(o,u,Ie.newNoDocument(u,e))}s.K&&(n.set(o,s.W()),s.G())}});let r=ce();this.st.forEach((s,o)=>{let a=!0;o.forEachWhile(u=>{const l=this.dt(u);return!l||l.purpose===2||(a=!1,!1)}),a&&(r=r.add(s))});const i=new Lu(e,n,this.it,this.nt,r);return this.nt=pn(),this.st=zS(),this.it=new Ce(J),i}ot(e,n){if(!this.ht(e))return;const r=this.gt(e,n.key)?2:0;this.ut(e).H(n.key,r),this.nt=this.nt.insert(n.key,n),this.st=this.st.insert(n.key,this.yt(n.key).add(e))}at(e,n,r){if(!this.ht(e))return;const i=this.ut(e);this.gt(e,n)?i.H(n,1):i.J(n),this.st=this.st.insert(n,this.yt(n).delete(e)),r&&(this.nt=this.nt.insert(n,r))}removeTarget(e){this.et.delete(e)}wt(e){const n=this.ut(e).W();return this.tt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Y(e){this.ut(e).Y()}ut(e){let n=this.et.get(e);return n||(n=new jS,this.et.set(e,n)),n}yt(e){let n=this.st.get(e);return n||(n=new Ce(J),this.st=this.st.insert(e,n)),n}ht(e){const n=this.dt(e)!==null;return n||N("WatchChangeAggregator","Detected inactive target",e),n}dt(e){const n=this.et.get(e);return n&&n.q?null:this.tt.Tt(e)}lt(e){this.et.set(e,new jS),this.tt.getRemoteKeysForTarget(e).forEach(n=>{this.at(e,n,null)})}gt(e,n){return this.tt.getRemoteKeysForTarget(e).has(n)}}function zS(){return new Be(j.comparator)}function qS(){return new Be(j.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e$=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),t$=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class n${constructor(e,n){this.databaseId=e,this.D=n}}function $u(t,e){return t.D?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function HS(t,e){return t.D?e.toBase64():e.toUint8Array()}function r$(t,e){return $u(t,e.toTimestamp())}function Xe(t){return H(!!t),Q.fromTimestamp(function(e){const n=Jr(e);return new Qe(n.seconds,n.nanos)}(t))}function Wg(t,e){return function(n){return new ie(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function WS(t){const e=ie.fromString(t);return H(iT(e)),e}function Uu(t,e){return Wg(t.databaseId,e.path)}function zn(t,e){const n=WS(e);if(n.get(1)!==t.databaseId.projectId)throw new b(I.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new b(I.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new j(KS(n))}function Gg(t,e){return Wg(t.databaseId,e)}function GS(t){const e=WS(t);return e.length===4?ie.emptyPath():KS(e)}function Fu(t){return new ie(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function KS(t){return H(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function QS(t,e,n){return{name:Uu(t,e),fields:n.value.mapValue.fields}}function YS(t,e,n){const r=zn(t,e.name),i=Xe(e.updateTime),s=new It({mapValue:{fields:e.fields}}),o=Ie.newFoundDocument(r,i,s);return n&&o.setHasCommittedMutations(),n?o.setHasCommittedMutations():o}function i$(t,e){return"found"in e?function(n,r){H(!!r.found),r.found.name,r.found.updateTime;const i=zn(n,r.found.name),s=Xe(r.found.updateTime),o=new It({mapValue:{fields:r.found.fields}});return Ie.newFoundDocument(i,s,o)}(t,e):"missing"in e?function(n,r){H(!!r.missing),H(!!r.readTime);const i=zn(n,r.missing),s=Xe(r.readTime);return Ie.newNoDocument(i,s)}(t,e):q()}function s$(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:q()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(u,l){return u.D?(H(l===void 0||typeof l=="string"),Ye.fromBase64String(l||"")):(H(l===void 0||l instanceof Uint8Array),Ye.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const l=u.code===void 0?I.UNKNOWN:$S(u.code);return new b(l,u.message||"")}(o);n=new BS(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=zn(t,r.document.name),s=Xe(r.document.updateTime),o=new It({mapValue:{fields:r.document.fields}}),a=Ie.newFoundDocument(i,s,o),u=r.targetIds||[],l=r.removedTargetIds||[];n=new qh(u,l,a.key,a)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=zn(t,r.document),s=r.readTime?Xe(r.readTime):Q.min(),o=Ie.newNoDocument(i,s),a=r.removedTargetIds||[];n=new qh([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=zn(t,r.document),s=r.removedTargetIds||[];n=new qh([],s,i,null)}else{if(!("filter"in e))return q();{e.filter;const r=e.filter;r.targetId;const i=r.count||0,s=new GM(i),o=r.targetId;n=new VS(o,s)}}return n}function Hh(t,e){let n;if(e instanceof Ou)n={update:QS(t,e.key,e.value)};else if(e instanceof Du)n={delete:Uu(t,e.key)};else if(e instanceof Zr)n={update:QS(t,e.key,e.data),updateMask:d$(e.fieldMask)};else{if(!(e instanceof qg))return q();n={verify:Uu(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,s){const o=s.transform;if(o instanceof fo)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof qi)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Hi)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof po)return{fieldPath:s.field.canonicalString(),increment:o.C};throw q()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:r$(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:q()}(t,e.precondition)),n}function XS(t,e){const n=e.currentDocument?function(i){return i.updateTime!==void 0?Me.updateTime(Xe(i.updateTime)):i.exists!==void 0?Me.exists(i.exists):Me.none()}(e.currentDocument):Me.none(),r=e.updateTransforms?e.updateTransforms.map(i=>function(s,o){let a=null;if("setToServerValue"in o)H(o.setToServerValue==="REQUEST_TIME"),a=new fo;else if("appendMissingElements"in o){const l=o.appendMissingElements.values||[];a=new qi(l)}else if("removeAllFromArray"in o){const l=o.removeAllFromArray.values||[];a=new Hi(l)}else"increment"in o?a=new po(s,o.increment):q();const u=dt.fromServerFormat(o.fieldPath);return new xu(u,a)}(t,i)):[];if(e.update){e.update.name;const i=zn(t,e.update.name),s=new It({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(a){const u=a.fieldPaths||[];return new oo(u.map(l=>dt.fromServerFormat(l)))}(e.updateMask);return new Zr(i,s,o,n,r)}return new Ou(i,s,n,r)}if(e.delete){const i=zn(t,e.delete);return new Du(i,n)}if(e.verify){const i=zn(t,e.verify);return new qg(i,n)}return q()}function o$(t,e){return t&&t.length>0?(H(e!==void 0),t.map(n=>function(r,i){let s=r.updateTime?Xe(r.updateTime):Xe(i);return s.isEqual(Q.min())&&(s=Xe(i)),new qM(s,r.transformResults||[])}(n,e))):[]}function JS(t,e){return{documents:[Gg(t,e.path)]}}function ZS(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Gg(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Gg(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(a){if(a.length===0)return;const u=a.map(l=>function(c){if(c.op==="=="){if(fS(c.value))return{unaryFilter:{field:mo(c.field),op:"IS_NAN"}};if(dS(c.value))return{unaryFilter:{field:mo(c.field),op:"IS_NULL"}}}else if(c.op==="!="){if(fS(c.value))return{unaryFilter:{field:mo(c.field),op:"IS_NOT_NAN"}};if(dS(c.value))return{unaryFilter:{field:mo(c.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:mo(c.field),op:l$(c.op),value:c.value}}}(l));return u.length===1?u[0]:{compositeFilter:{op:"AND",filters:u}}}(e.filters);i&&(n.structuredQuery.where=i);const s=function(a){if(a.length!==0)return a.map(u=>function(l){return{field:mo(l.field),direction:u$(l.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(a,u){return a.D||ji(u)?u:{value:u}}(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=nT(e.startAt)),e.endAt&&(n.structuredQuery.endAt=nT(e.endAt)),n}function eT(t){let e=GS(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){H(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=tT(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(c=>function(h){return new lo(go(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(c)));let a=null;n.limit&&(a=function(c){let h;return h=typeof c=="object"?c.value:c,ji(h)?null:h}(n.limit));let u=null;n.startAt&&(u=rT(n.startAt));let l=null;return n.endAt&&(l=rT(n.endAt)),wS(e,i,o,s,a,"F",u,l)}function a$(t,e){const n=function(r,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return q()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function tT(t){return t?t.unaryFilter!==void 0?[h$(t)]:t.fieldFilter!==void 0?[c$(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>tT(e)).reduce((e,n)=>e.concat(n)):q():[]}function nT(t){return{before:t.before,values:t.position}}function rT(t){const e=!!t.before,n=t.values||[];return new Ru(n,e)}function u$(t){return e$[t]}function l$(t){return t$[t]}function mo(t){return{fieldPath:t.canonicalString()}}function go(t){return dt.fromServerFormat(t.fieldPath)}function c$(t){return Ot.create(go(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return q()}}(t.fieldFilter.op),t.fieldFilter.value)}function h$(t){switch(t.unaryFilter.op){case"IS_NAN":const e=go(t.unaryFilter.field);return Ot.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=go(t.unaryFilter.field);return Ot.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=go(t.unaryFilter.field);return Ot.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=go(t.unaryFilter.field);return Ot.create(i,"!=",{nullValue:"NULL_VALUE"});default:return q()}}function d$(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function iT(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bn(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=sT(e)),e=f$(t.get(n),e);return sT(e)}function f$(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case"":n+="";break;default:n+=s}}return n}function sT(t){return t+""}function hr(t){const e=t.length;if(H(e>=2),e===2)return H(t.charAt(0)===""&&t.charAt(1)===""),ie.emptyPath();const n=e-2,r=[];let i="";for(let s=0;s<e;){const o=t.indexOf("",s);switch((o<0||o>n)&&q(),t.charAt(o+1)){case"":const a=t.substring(s,o);let u;i.length===0?u=a:(i+=a,u=i,i=""),r.push(u);break;case"":i+=t.substring(s,o),i+="\0";break;case"":i+=t.substring(s,o+1);break;default:q()}s=o+2}return new ie(r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p${constructor(e,n){this.seconds=e,this.nanoseconds=n}}class tn{constructor(e,n,r){this.ownerId=e,this.allowTabSynchronization=n,this.leaseTimestampMs=r}}tn.store="owner",tn.key="owner";class ei{constructor(e,n,r){this.userId=e,this.lastAcknowledgedBatchId=n,this.lastStreamToken=r}}ei.store="mutationQueues",ei.keyPath="userId";class ve{constructor(e,n,r,i,s){this.userId=e,this.batchId=n,this.localWriteTimeMs=r,this.baseMutations=i,this.mutations=s}}ve.store="mutations",ve.keyPath="batchId",ve.userMutationsIndex="userMutationsIndex",ve.userMutationsKeyPath=["userId","batchId"];class St{constructor(){}static prefixForUser(e){return[e]}static prefixForPath(e,n){return[e,bn(n)]}static key(e,n,r){return[e,bn(n),r]}}St.store="documentMutations",St.PLACEHOLDER=new St;class m${constructor(e,n){this.path=e,this.readTime=n}}class g${constructor(e,n){this.path=e,this.version=n}}class Ae{constructor(e,n,r,i,s,o){this.unknownDocument=e,this.noDocument=n,this.document=r,this.hasCommittedMutations=i,this.readTime=s,this.parentPath=o}}Ae.store="remoteDocuments",Ae.readTimeIndex="readTimeIndex",Ae.readTimeIndexPath="readTime",Ae.collectionReadTimeIndex="collectionReadTimeIndex",Ae.collectionReadTimeIndexPath=["parentPath","readTime"];class qn{constructor(e){this.byteSize=e}}qn.store="remoteDocumentGlobal",qn.key="remoteDocumentGlobalKey";class qt{constructor(e,n,r,i,s,o,a){this.targetId=e,this.canonicalId=n,this.readTime=r,this.resumeToken=i,this.lastListenSequenceNumber=s,this.lastLimboFreeSnapshotVersion=o,this.query=a}}qt.store="targets",qt.keyPath="targetId",qt.queryTargetsIndexName="queryTargetsIndex",qt.queryTargetsKeyPath=["canonicalId","targetId"];class pt{constructor(e,n,r){this.targetId=e,this.path=n,this.sequenceNumber=r}}pt.store="targetDocuments",pt.keyPath=["targetId","path"],pt.documentTargetsIndex="documentTargetsIndex",pt.documentTargetsKeyPath=["path","targetId"];class nn{constructor(e,n,r,i){this.highestTargetId=e,this.highestListenSequenceNumber=n,this.lastRemoteSnapshotVersion=r,this.targetCount=i}}nn.key="targetGlobalKey",nn.store="targetGlobal";class Wi{constructor(e,n){this.collectionId=e,this.parent=n}}Wi.store="collectionParents",Wi.keyPath=["collectionId","parent"];class dr{constructor(e,n,r,i){this.clientId=e,this.updateTimeMs=n,this.networkEnabled=r,this.inForeground=i}}dr.store="clientMetadata",dr.keyPath="clientId";class yo{constructor(e,n,r){this.bundleId=e,this.createTime=n,this.version=r}}yo.store="bundles",yo.keyPath="bundleId";class vo{constructor(e,n,r){this.name=e,this.readTime=n,this.bundledQuery=r}}vo.store="namedQueries",vo.keyPath="name";const y$=[ei.store,ve.store,St.store,Ae.store,qt.store,tn.store,nn.store,pt.store,dr.store,qn.store,Wi.store,yo.store,vo.store],oT="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class aT{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&q(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new S((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof S?n:S.resolve(n)}catch(n){return S.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):S.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):S.reject(n)}static resolve(e){return new S((n,r)=>{n(e)})}static reject(e){return new S((n,r)=>{r(e)})}static waitFor(e){return new S((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=S.resolve(!1);for(const r of e)n=n.next(i=>i?S.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wh{constructor(e,n){this.action=e,this.transaction=n,this.aborted=!1,this.Et=new Ke,this.transaction.oncomplete=()=>{this.Et.resolve()},this.transaction.onabort=()=>{n.error?this.Et.reject(new Vu(e,n.error)):this.Et.resolve()},this.transaction.onerror=r=>{const i=Kg(r.target.error);this.Et.reject(new Vu(e,i))}}static open(e,n,r,i){try{return new Wh(n,e.transaction(i,r))}catch(s){throw new Vu(n,s)}}get It(){return this.Et.promise}abort(e){e&&this.Et.reject(e),this.aborted||(N("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}store(e){const n=this.transaction.objectStore(e);return new w$(n)}}class Cn{constructor(e,n,r){this.name=e,this.version=n,this.At=r,Cn.Rt(ye())===12.2&&De("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return N("SimpleDb","Removing database:",e),Ki(window.indexedDB.deleteDatabase(e)).toPromise()}static bt(){if(!Oc())return!1;if(Cn.Pt())return!0;const e=ye(),n=Cn.Rt(e),r=0<n&&n<10,i=Cn.vt(e),s=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||s)}static Pt(){var e;return typeof process!="undefined"&&((e=process.env)===null||e===void 0?void 0:e.Vt)==="YES"}static St(e,n){return e.store(n)}static Rt(e){const n=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=n?n[1].split("_").slice(0,2).join("."):"-1";return Number(r)}static vt(e){const n=e.match(/Android ([\d.]+)/i),r=n?n[1].split(".").slice(0,2).join("."):"-1";return Number(r)}async Dt(e){return this.db||(N("SimpleDb","Opening database:",this.name),this.db=await new Promise((n,r)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const o=s.target.result;n(o)},i.onblocked=()=>{r(new Vu(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const o=s.target.error;o.name==="VersionError"?r(new b(I.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new b(I.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new Vu(e,o))},i.onupgradeneeded=s=>{N("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const o=s.target.result;this.At.Ct(o,i.transaction,s.oldVersion,this.version).next(()=>{N("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.Nt&&(this.db.onversionchange=n=>this.Nt(n)),this.db}xt(e){this.Nt=e,this.db&&(this.db.onversionchange=n=>e(n))}async runTransaction(e,n,r,i){const s=n==="readonly";let o=0;for(;;){++o;try{this.db=await this.Dt(e);const a=Wh.open(this.db,e,s?"readonly":"readwrite",r),u=i(a).catch(l=>(a.abort(l),S.reject(l))).toPromise();return u.catch(()=>{}),await a.It,u}catch(a){const u=a.name!=="FirebaseError"&&o<3;if(N("SimpleDb","Transaction failed with error:",a.message,"Retrying:",u),this.close(),!u)return Promise.reject(a)}}}close(){this.db&&this.db.close(),this.db=void 0}}class v${constructor(e){this.kt=e,this.$t=!1,this.Ot=null}get isDone(){return this.$t}get Ft(){return this.Ot}set cursor(e){this.kt=e}done(){this.$t=!0}Mt(e){this.Ot=e}delete(){return Ki(this.kt.delete())}}class Vu extends b{constructor(e,n){super(I.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${n}`),this.name="IndexedDbTransactionError"}}function Gi(t){return t.name==="IndexedDbTransactionError"}class w${constructor(e){this.store=e}put(e,n){let r;return n!==void 0?(N("SimpleDb","PUT",this.store.name,e,n),r=this.store.put(n,e)):(N("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),Ki(r)}add(e){return N("SimpleDb","ADD",this.store.name,e,e),Ki(this.store.add(e))}get(e){return Ki(this.store.get(e)).next(n=>(n===void 0&&(n=null),N("SimpleDb","GET",this.store.name,e,n),n))}delete(e){return N("SimpleDb","DELETE",this.store.name,e),Ki(this.store.delete(e))}count(){return N("SimpleDb","COUNT",this.store.name),Ki(this.store.count())}Lt(e,n){const r=this.cursor(this.options(e,n)),i=[];return this.Bt(r,(s,o)=>{i.push(o)}).next(()=>i)}Ut(e,n){N("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,n);r.qt=!1;const i=this.cursor(r);return this.Bt(i,(s,o,a)=>a.delete())}Kt(e,n){let r;n?r=e:(r={},n=e);const i=this.cursor(r);return this.Bt(i,n)}jt(e){const n=this.cursor({});return new S((r,i)=>{n.onerror=s=>{const o=Kg(s.target.error);i(o)},n.onsuccess=s=>{const o=s.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}Bt(e,n){const r=[];return new S((i,s)=>{e.onerror=o=>{s(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void i();const u=new v$(a),l=n(a.primaryKey,a.value,u);if(l instanceof S){const c=l.catch(h=>(u.done(),S.reject(h)));r.push(c)}u.isDone?i():u.Ft===null?a.continue():a.continue(u.Ft)}}).next(()=>S.waitFor(r))}options(e,n){let r;return e!==void 0&&(typeof e=="string"?r=e:n=e),{index:r,range:n}}cursor(e){let n="next";if(e.reverse&&(n="prev"),e.index){const r=this.store.index(e.index);return e.qt?r.openKeyCursor(e.range,n):r.openCursor(e.range,n)}return this.store.openCursor(e.range,n)}}function Ki(t){return new S((e,n)=>{t.onsuccess=r=>{const i=r.target.result;e(i)},t.onerror=r=>{const i=Kg(r.target.error);n(i)}})}let uT=!1;function Kg(t){const e=Cn.Rt(ye());if(e>=12.2&&e<13){const n="An internal error was encountered in the Indexed Database server";if(t.message.indexOf(n)>=0){const r=new b("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${n}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return uT||(uT=!0,setTimeout(()=>{throw r},0)),r}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lT extends aT{constructor(e,n){super(),this.Qt=e,this.currentSequenceNumber=n}}function Ht(t,e){const n=L(t);return Cn.St(n.Qt,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qg{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&HM(s,e,r[i])}}applyToLocalView(e){for(const n of this.baseMutations)n.key.isEqual(e.key)&&zg(n,e,this.localWriteTime);for(const n of this.mutations)n.key.isEqual(e.key)&&zg(n,e,this.localWriteTime)}applyToLocalDocumentSet(e){this.mutations.forEach(n=>{const r=e.get(n.key),i=r;this.applyToLocalView(i),r.isValidDocument()||i.convertToNoDocument(Q.min())})}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ce())}isEqual(e){return this.batchId===e.batchId&&so(this.mutations,e.mutations,(n,r)=>PS(n,r))&&so(this.baseMutations,e.baseMutations,(n,r)=>PS(n,r))}}class Yg{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){H(e.mutations.length===r.length);let i=FS();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Yg(e,n,r,i)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti{constructor(e,n,r,i,s=Q.min(),o=Q.min(),a=Ye.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new ti(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new ti(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new ti(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cT{constructor(e){this.Wt=e}}function Xg(t,e){if(e.document)return YS(t.Wt,e.document,!!e.hasCommittedMutations);if(e.noDocument){const n=j.fromSegments(e.noDocument.path),r=_o(e.noDocument.readTime),i=Ie.newNoDocument(n,r);return e.hasCommittedMutations?i.setHasCommittedMutations():i}if(e.unknownDocument){const n=j.fromSegments(e.unknownDocument.path),r=_o(e.unknownDocument.version);return Ie.newUnknownDocument(n,r)}return q()}function hT(t,e,n){const r=Jg(n),i=e.key.path.popLast().toArray();if(e.isFoundDocument()){const s=function(a,u){return{name:Uu(a,u.key),fields:u.data.value.mapValue.fields,updateTime:$u(a,u.version.toTimestamp())}}(t.Wt,e),o=e.hasCommittedMutations;return new Ae(null,null,s,o,r,i)}if(e.isNoDocument()){const s=e.key.path.toArray(),o=wo(e.version),a=e.hasCommittedMutations;return new Ae(null,new m$(s,o),null,a,r,i)}if(e.isUnknownDocument()){const s=e.key.path.toArray(),o=wo(e.version);return new Ae(new g$(s,o),null,null,!0,r,i)}return q()}function Jg(t){const e=t.toTimestamp();return[e.seconds,e.nanoseconds]}function dT(t){const e=new Qe(t[0],t[1]);return Q.fromTimestamp(e)}function wo(t){const e=t.toTimestamp();return new p$(e.seconds,e.nanoseconds)}function _o(t){const e=new Qe(t.seconds,t.nanoseconds);return Q.fromTimestamp(e)}function Eo(t,e){const n=(e.baseMutations||[]).map(s=>XS(t.Wt,s));for(let s=0;s<e.mutations.length-1;++s){const o=e.mutations[s];if(s+1<e.mutations.length&&e.mutations[s+1].transform!==void 0){const a=e.mutations[s+1];o.updateTransforms=a.transform.fieldTransforms,e.mutations.splice(s+1,1),++s}}const r=e.mutations.map(s=>XS(t.Wt,s)),i=Qe.fromMillis(e.localWriteTimeMs);return new Qg(e.batchId,i,n,r)}function Bu(t){const e=_o(t.readTime),n=t.lastLimboFreeSnapshotVersion!==void 0?_o(t.lastLimboFreeSnapshotVersion):Q.min();let r;var i;return t.query.documents!==void 0?(H((i=t.query).documents.length===1),r=fn(co(GS(i.documents[0])))):r=function(s){return fn(eT(s))}(t.query),new ti(r,t.targetId,0,t.lastListenSequenceNumber,e,n,Ye.fromBase64String(t.resumeToken))}function fT(t,e){const n=wo(e.snapshotVersion),r=wo(e.lastLimboFreeSnapshotVersion);let i;i=Lh(e.target)?JS(t.Wt,e.target):ZS(t.Wt,e.target);const s=e.resumeToken.toBase64();return new qt(e.targetId,Au(e.target),n,s,e.sequenceNumber,r,i)}function Zg(t){const e=eT({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?_S(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _${getBundleMetadata(e,n){return pT(e).get(n).next(r=>{if(r)return{id:(i=r).bundleId,createTime:_o(i.createTime),version:i.version};var i})}saveBundleMetadata(e,n){return pT(e).put({bundleId:(r=n).id,createTime:wo(Xe(r.createTime)),version:r.version});var r}getNamedQuery(e,n){return mT(e).get(n).next(r=>{if(r)return{name:(i=r).name,query:Zg(i.bundledQuery),readTime:_o(i.readTime)};var i})}saveNamedQuery(e,n){return mT(e).put(function(r){return{name:r.name,readTime:wo(Xe(r.readTime)),bundledQuery:r.bundledQuery}}(n))}}function pT(t){return Ht(t,yo.store)}function mT(t){return Ht(t,vo.store)}/**
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
 */class E${constructor(){this.Gt=new ey}addToCollectionParentIndex(e,n){return this.Gt.add(n),S.resolve()}getCollectionParents(e,n){return S.resolve(this.Gt.getEntries(n))}}class ey{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Ce(ie.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Ce(ie.comparator)).toArray()}}/**
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
 */class I${constructor(){this.zt=new ey}addToCollectionParentIndex(e,n){if(!this.zt.has(n)){const r=n.lastSegment(),i=n.popLast();e.addOnCommittedListener(()=>{this.zt.add(n)});const s={collectionId:r,parent:bn(i)};return gT(e).put(s)}return S.resolve()}getCollectionParents(e,n){const r=[],i=IDBKeyRange.bound([n,""],[oS(n),""],!1,!0);return gT(e).Lt(i).next(s=>{for(const o of s){if(o.collectionId!==n)break;r.push(hr(o.parent))}return r})}}function gT(t){return Ht(t,Wi.store)}/**
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
 */const yT={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Wt{constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new Wt(e,Wt.DEFAULT_COLLECTION_PERCENTILE,Wt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vT(t,e,n){const r=t.store(ve.store),i=t.store(St.store),s=[],o=IDBKeyRange.only(n.batchId);let a=0;const u=r.Kt({range:o},(c,h,d)=>(a++,d.delete()));s.push(u.next(()=>{H(a===1)}));const l=[];for(const c of n.mutations){const h=St.key(e,c.key.path,n.batchId);s.push(i.delete(h)),l.push(c.key)}return S.waitFor(s).next(()=>l)}function Gh(t){if(!t)return 0;let e;if(t.document)e=t.document;else if(t.unknownDocument)e=t.unknownDocument;else{if(!t.noDocument)throw q();e=t.noDocument}return JSON.stringify(e).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Wt.DEFAULT_COLLECTION_PERCENTILE=10,Wt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Wt.DEFAULT=new Wt(41943040,Wt.DEFAULT_COLLECTION_PERCENTILE,Wt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Wt.DISABLED=new Wt(-1,0,0);class ty{constructor(e,n,r,i){this.userId=e,this.N=n,this.Ht=r,this.referenceDelegate=i,this.Jt={}}static Yt(e,n,r,i){H(e.uid!=="");const s=e.isAuthenticated()?e.uid:"";return new ty(s,n,r,i)}checkEmpty(e){let n=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return ni(e).Kt({index:ve.userMutationsIndex,range:r},(i,s,o)=>{n=!1,o.done()}).next(()=>n)}addMutationBatch(e,n,r,i){const s=Io(e),o=ni(e);return o.add({}).next(a=>{H(typeof a=="number");const u=new Qg(a,n,r,i),l=function(d,g,y){const _=y.baseMutations.map(p=>Hh(d.Wt,p)),f=y.mutations.map(p=>Hh(d.Wt,p));return new ve(g,y.batchId,y.localWriteTime.toMillis(),_,f)}(this.N,this.userId,u),c=[];let h=new Ce((d,g)=>J(d.canonicalString(),g.canonicalString()));for(const d of i){const g=St.key(this.userId,d.key.path,a);h=h.add(d.key.path.popLast()),c.push(o.put(l)),c.push(s.put(g,St.PLACEHOLDER))}return h.forEach(d=>{c.push(this.Ht.addToCollectionParentIndex(e,d))}),e.addOnCommittedListener(()=>{this.Jt[a]=u.keys()}),S.waitFor(c).next(()=>u)})}lookupMutationBatch(e,n){return ni(e).get(n).next(r=>r?(H(r.userId===this.userId),Eo(this.N,r)):null)}Xt(e,n){return this.Jt[n]?S.resolve(this.Jt[n]):this.lookupMutationBatch(e,n).next(r=>{if(r){const i=r.keys();return this.Jt[n]=i,i}return null})}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=IDBKeyRange.lowerBound([this.userId,r]);let s=null;return ni(e).Kt({index:ve.userMutationsIndex,range:i},(o,a,u)=>{a.userId===this.userId&&(H(a.batchId>=r),s=Eo(this.N,a)),u.done()}).next(()=>s)}getHighestUnacknowledgedBatchId(e){const n=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=-1;return ni(e).Kt({index:ve.userMutationsIndex,range:n,reverse:!0},(i,s,o)=>{r=s.batchId,o.done()}).next(()=>r)}getAllMutationBatches(e){const n=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return ni(e).Lt(ve.userMutationsIndex,n).next(r=>r.map(i=>Eo(this.N,i)))}getAllMutationBatchesAffectingDocumentKey(e,n){const r=St.prefixForPath(this.userId,n.path),i=IDBKeyRange.lowerBound(r),s=[];return Io(e).Kt({range:i},(o,a,u)=>{const[l,c,h]=o,d=hr(c);if(l===this.userId&&n.path.isEqual(d))return ni(e).get(h).next(g=>{if(!g)throw q();H(g.userId===this.userId),s.push(Eo(this.N,g))});u.done()}).next(()=>s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ce(J);const i=[];return n.forEach(s=>{const o=St.prefixForPath(this.userId,s.path),a=IDBKeyRange.lowerBound(o),u=Io(e).Kt({range:a},(l,c,h)=>{const[d,g,y]=l,_=hr(g);d===this.userId&&s.path.isEqual(_)?r=r.add(y):h.done()});i.push(u)}),S.waitFor(i).next(()=>this.Zt(e,r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1,s=St.prefixForPath(this.userId,r),o=IDBKeyRange.lowerBound(s);let a=new Ce(J);return Io(e).Kt({range:o},(u,l,c)=>{const[h,d,g]=u,y=hr(d);h===this.userId&&r.isPrefixOf(y)?y.length===i&&(a=a.add(g)):c.done()}).next(()=>this.Zt(e,a))}Zt(e,n){const r=[],i=[];return n.forEach(s=>{i.push(ni(e).get(s).next(o=>{if(o===null)throw q();H(o.userId===this.userId),r.push(Eo(this.N,o))}))}),S.waitFor(i).next(()=>r)}removeMutationBatch(e,n){return vT(e.Qt,this.userId,n).next(r=>(e.addOnCommittedListener(()=>{this.te(n.batchId)}),S.forEach(r,i=>this.referenceDelegate.markPotentiallyOrphaned(e,i))))}te(e){delete this.Jt[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(n=>{if(!n)return S.resolve();const r=IDBKeyRange.lowerBound(St.prefixForUser(this.userId)),i=[];return Io(e).Kt({range:r},(s,o,a)=>{if(s[0]===this.userId){const u=hr(s[1]);i.push(u)}else a.done()}).next(()=>{H(i.length===0)})})}containsKey(e,n){return wT(e,this.userId,n)}ee(e){return _T(e).get(this.userId).next(n=>n||new ei(this.userId,-1,""))}}function wT(t,e,n){const r=St.prefixForPath(e,n.path),i=r[1],s=IDBKeyRange.lowerBound(r);let o=!1;return Io(t).Kt({range:s,qt:!0},(a,u,l)=>{const[c,h,d]=a;c===e&&h===i&&(o=!0),l.done()}).next(()=>o)}function ni(t){return Ht(t,ve.store)}function Io(t){return Ht(t,St.store)}function _T(t){return Ht(t,ei.store)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi{constructor(e){this.ne=e}next(){return this.ne+=2,this.ne}static se(){return new Qi(0)}static ie(){return new Qi(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S${constructor(e,n){this.referenceDelegate=e,this.N=n}allocateTargetId(e){return this.re(e).next(n=>{const r=new Qi(n.highestTargetId);return n.highestTargetId=r.next(),this.oe(e,n).next(()=>n.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.re(e).next(n=>Q.fromTimestamp(new Qe(n.lastRemoteSnapshotVersion.seconds,n.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.re(e).next(n=>n.highestListenSequenceNumber)}setTargetsMetadata(e,n,r){return this.re(e).next(i=>(i.highestListenSequenceNumber=n,r&&(i.lastRemoteSnapshotVersion=r.toTimestamp()),n>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=n),this.oe(e,i)))}addTargetData(e,n){return this.ae(e,n).next(()=>this.re(e).next(r=>(r.targetCount+=1,this.ce(n,r),this.oe(e,r))))}updateTargetData(e,n){return this.ae(e,n)}removeTargetData(e,n){return this.removeMatchingKeysForTargetId(e,n.targetId).next(()=>So(e).delete(n.targetId)).next(()=>this.re(e)).next(r=>(H(r.targetCount>0),r.targetCount-=1,this.oe(e,r)))}removeTargets(e,n,r){let i=0;const s=[];return So(e).Kt((o,a)=>{const u=Bu(a);u.sequenceNumber<=n&&r.get(u.targetId)===null&&(i++,s.push(this.removeTargetData(e,u)))}).next(()=>S.waitFor(s)).next(()=>i)}forEachTarget(e,n){return So(e).Kt((r,i)=>{const s=Bu(i);n(s)})}re(e){return ET(e).get(nn.key).next(n=>(H(n!==null),n))}oe(e,n){return ET(e).put(nn.key,n)}ae(e,n){return So(e).put(fT(this.N,n))}ce(e,n){let r=!1;return e.targetId>n.highestTargetId&&(n.highestTargetId=e.targetId,r=!0),e.sequenceNumber>n.highestListenSequenceNumber&&(n.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.re(e).next(n=>n.targetCount)}getTargetData(e,n){const r=Au(n),i=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let s=null;return So(e).Kt({range:i,index:qt.queryTargetsIndexName},(o,a,u)=>{const l=Bu(a);Dh(n,l.target)&&(s=l,u.done())}).next(()=>s)}addMatchingKeys(e,n,r){const i=[],s=ri(e);return n.forEach(o=>{const a=bn(o.path);i.push(s.put(new pt(r,a))),i.push(this.referenceDelegate.addReference(e,r,o))}),S.waitFor(i)}removeMatchingKeys(e,n,r){const i=ri(e);return S.forEach(n,s=>{const o=bn(s.path);return S.waitFor([i.delete([r,o]),this.referenceDelegate.removeReference(e,r,s)])})}removeMatchingKeysForTargetId(e,n){const r=ri(e),i=IDBKeyRange.bound([n],[n+1],!1,!0);return r.delete(i)}getMatchingKeysForTargetId(e,n){const r=IDBKeyRange.bound([n],[n+1],!1,!0),i=ri(e);let s=ce();return i.Kt({range:r,qt:!0},(o,a,u)=>{const l=hr(o[1]),c=new j(l);s=s.add(c)}).next(()=>s)}containsKey(e,n){const r=bn(n.path),i=IDBKeyRange.bound([r],[oS(r)],!1,!0);let s=0;return ri(e).Kt({index:pt.documentTargetsIndex,qt:!0,range:i},([o,a],u,l)=>{o!==0&&(s++,l.done())}).next(()=>s>0)}Tt(e,n){return So(e).get(n).next(r=>r?Bu(r):null)}}function So(t){return Ht(t,qt.store)}function ET(t){return Ht(t,nn.store)}function ri(t){return Ht(t,pt.store)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yi(t){if(t.code!==I.FAILED_PRECONDITION||t.message!==oT)throw t;N("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IT([t,e],[n,r]){const i=J(t,n);return i===0?J(e,r):i}class T${constructor(e){this.ue=e,this.buffer=new Ce(IT),this.he=0}le(){return++this.he}fe(e){const n=[e,this.le()];if(this.buffer.size<this.ue)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();IT(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class k${constructor(e,n){this.garbageCollector=e,this.asyncQueue=n,this.de=!1,this.we=null}start(e){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this._e(e)}stop(){this.we&&(this.we.cancel(),this.we=null)}get started(){return this.we!==null}_e(e){const n=this.de?3e5:6e4;N("LruGarbageCollector",`Garbage collection scheduled in ${n}ms`),this.we=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",n,async()=>{this.we=null,this.de=!0;try{await e.collectGarbage(this.garbageCollector)}catch(r){Gi(r)?N("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",r):await Yi(r)}await this._e(e)})}}class b${constructor(e,n){this.me=e,this.params=n}calculateTargetCount(e,n){return this.me.ge(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return S.resolve(en.T);const r=new T$(n);return this.me.forEachTarget(e,i=>r.fe(i.sequenceNumber)).next(()=>this.me.ye(e,i=>r.fe(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.me.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.me.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(N("LruGarbageCollector","Garbage collection skipped; disabled"),S.resolve(yT)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(N("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),yT):this.pe(e,n))}getCacheSize(e){return this.me.getCacheSize(e)}pe(e,n){let r,i,s,o,a,u,l;const c=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(h=>(h>this.params.maximumSequenceNumbersToCollect?(N("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${h}`),i=this.params.maximumSequenceNumbersToCollect):i=h,o=Date.now(),this.nthSequenceNumber(e,i))).next(h=>(r=h,a=Date.now(),this.removeTargets(e,r,n))).next(h=>(s=h,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(h=>(l=Date.now(),xg()<=te.DEBUG&&N("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-c}ms
	Determined least recently used ${i} in `+(a-o)+`ms
	Removed ${s} targets in `+(u-a)+`ms
	Removed ${h} documents in `+(l-u)+`ms
Total Duration: ${l-c}ms`),S.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:h})))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C${constructor(e,n){this.db=e,this.garbageCollector=function(r,i){return new b$(r,i)}(this,n)}ge(e){const n=this.Te(e);return this.db.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}Te(e){let n=0;return this.ye(e,r=>{n++}).next(()=>n)}forEachTarget(e,n){return this.db.getTargetCache().forEachTarget(e,n)}ye(e,n){return this.Ee(e,(r,i)=>n(i))}addReference(e,n,r){return Kh(e,r)}removeReference(e,n,r){return Kh(e,r)}removeTargets(e,n,r){return this.db.getTargetCache().removeTargets(e,n,r)}markPotentiallyOrphaned(e,n){return Kh(e,n)}Ie(e,n){return function(r,i){let s=!1;return _T(r).jt(o=>wT(r,o,i).next(a=>(a&&(s=!0),S.resolve(!a)))).next(()=>s)}(e,n)}removeOrphanedDocuments(e,n){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let s=0;return this.Ee(e,(o,a)=>{if(a<=n){const u=this.Ie(e,o).next(l=>{if(!l)return s++,r.getEntry(e,o).next(()=>(r.removeEntry(o),ri(e).delete([0,bn(o.path)])))});i.push(u)}}).next(()=>S.waitFor(i)).next(()=>r.apply(e)).next(()=>s)}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,n){return Kh(e,n)}Ee(e,n){const r=ri(e);let i,s=en.T;return r.Kt({index:pt.documentTargetsIndex},([o,a],{path:u,sequenceNumber:l})=>{o===0?(s!==en.T&&n(new j(hr(i)),s),s=l,i=u):s=en.T}).next(()=>{s!==en.T&&n(new j(hr(i)),s)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function Kh(t,e){return ri(t).put(function(n,r){return new pt(0,bn(n.path),r)}(e,t.currentSequenceNumber))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class To{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={}}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i!==void 0){for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n])}else this.inner[r]=[[e,n]]}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),!0;return!1}forEach(e){Bi(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return uS(this.inner)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ST{constructor(){this.changes=new To(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}getReadTime(e){const n=this.changes.get(e);return n?n.readTime:Q.min()}addEntry(e,n){this.assertNotApplied(),this.changes.set(e.key,{document:e,readTime:n})}removeEntry(e,n=null){this.assertNotApplied(),this.changes.set(e,{document:Ie.newInvalidDocument(e),readTime:n})}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?S.resolve(r.document):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A${constructor(e,n){this.N=e,this.Ht=n}addEntry(e,n,r){return ii(e).put(Qh(n),r)}removeEntry(e,n){const r=ii(e),i=Qh(n);return r.delete(i)}updateMetadata(e,n){return this.getMetadata(e).next(r=>(r.byteSize+=n,this.Ae(e,r)))}getEntry(e,n){return ii(e).get(Qh(n)).next(r=>this.Re(n,r))}be(e,n){return ii(e).get(Qh(n)).next(r=>({document:this.Re(n,r),size:Gh(r)}))}getEntries(e,n){let r=pn();return this.Pe(e,n,(i,s)=>{const o=this.Re(i,s);r=r.insert(i,o)}).next(()=>r)}ve(e,n){let r=pn(),i=new Be(j.comparator);return this.Pe(e,n,(s,o)=>{const a=this.Re(s,o);r=r.insert(s,a),i=i.insert(s,Gh(o))}).next(()=>({documents:r,Ve:i}))}Pe(e,n,r){if(n.isEmpty())return S.resolve();const i=IDBKeyRange.bound(n.first().path.toArray(),n.last().path.toArray()),s=n.getIterator();let o=s.getNext();return ii(e).Kt({range:i},(a,u,l)=>{const c=j.fromSegments(a);for(;o&&j.comparator(o,c)<0;)r(o,null),o=s.getNext();o&&o.isEqual(c)&&(r(o,u),o=s.hasNext()?s.getNext():null),o?l.Mt(o.path.toArray()):l.done()}).next(()=>{for(;o;)r(o,null),o=s.hasNext()?s.getNext():null})}getDocumentsMatchingQuery(e,n,r){let i=pn();const s=n.path.length+1,o={};if(r.isEqual(Q.min())){const a=n.path.toArray();o.range=IDBKeyRange.lowerBound(a)}else{const a=n.path.toArray(),u=Jg(r);o.range=IDBKeyRange.lowerBound([a,u],!0),o.index=Ae.collectionReadTimeIndex}return ii(e).Kt(o,(a,u,l)=>{if(a.length!==s)return;const c=Xg(this.N,u);n.path.isPrefixOf(c.key.path)?Pu(n,c)&&(i=i.insert(c.key,c)):l.done()}).next(()=>i)}newChangeBuffer(e){return new R$(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(n=>n.byteSize)}getMetadata(e){return TT(e).get(qn.key).next(n=>(H(!!n),n))}Ae(e,n){return TT(e).put(qn.key,n)}Re(e,n){if(n){const r=Xg(this.N,n);if(!(r.isNoDocument()&&r.version.isEqual(Q.min())))return r}return Ie.newInvalidDocument(e)}}class R$ extends ST{constructor(e,n){super(),this.Se=e,this.trackRemovals=n,this.De=new To(r=>r.toString(),(r,i)=>r.isEqual(i))}applyChanges(e){const n=[];let r=0,i=new Ce((s,o)=>J(s.canonicalString(),o.canonicalString()));return this.changes.forEach((s,o)=>{const a=this.De.get(s);if(o.document.isValidDocument()){const u=hT(this.Se.N,o.document,this.getReadTime(s));i=i.add(s.path.popLast()),r+=Gh(u)-a,n.push(this.Se.addEntry(e,s,u))}else if(r-=a,this.trackRemovals){const u=hT(this.Se.N,Ie.newNoDocument(s,Q.min()),this.getReadTime(s));n.push(this.Se.addEntry(e,s,u))}else n.push(this.Se.removeEntry(e,s))}),i.forEach(s=>{n.push(this.Se.Ht.addToCollectionParentIndex(e,s))}),n.push(this.Se.updateMetadata(e,r)),S.waitFor(n)}getFromCache(e,n){return this.Se.be(e,n).next(r=>(this.De.set(n,r.size),r.document))}getAllFromCache(e,n){return this.Se.ve(e,n).next(({documents:r,Ve:i})=>(i.forEach((s,o)=>{this.De.set(s,o)}),r))}}function TT(t){return Ht(t,qn.store)}function ii(t){return Ht(t,Ae.store)}function Qh(t){return t.path.toArray()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N${constructor(e){this.N=e}Ct(e,n,r,i){H(r<i&&r>=0&&i<=11);const s=new Wh("createOrUpgrade",n);r<1&&i>=1&&(function(a){a.createObjectStore(tn.store)}(e),function(a){a.createObjectStore(ei.store,{keyPath:ei.keyPath}),a.createObjectStore(ve.store,{keyPath:ve.keyPath,autoIncrement:!0}).createIndex(ve.userMutationsIndex,ve.userMutationsKeyPath,{unique:!0}),a.createObjectStore(St.store)}(e),kT(e),function(a){a.createObjectStore(Ae.store)}(e));let o=S.resolve();return r<3&&i>=3&&(r!==0&&(function(a){a.deleteObjectStore(pt.store),a.deleteObjectStore(qt.store),a.deleteObjectStore(nn.store)}(e),kT(e)),o=o.next(()=>function(a){const u=a.store(nn.store),l=new nn(0,0,Q.min().toTimestamp(),0);return u.put(nn.key,l)}(s))),r<4&&i>=4&&(r!==0&&(o=o.next(()=>function(a,u){return u.store(ve.store).Lt().next(l=>{a.deleteObjectStore(ve.store),a.createObjectStore(ve.store,{keyPath:ve.keyPath,autoIncrement:!0}).createIndex(ve.userMutationsIndex,ve.userMutationsKeyPath,{unique:!0});const c=u.store(ve.store),h=l.map(d=>c.put(d));return S.waitFor(h)})}(e,s))),o=o.next(()=>{(function(a){a.createObjectStore(dr.store,{keyPath:dr.keyPath})})(e)})),r<5&&i>=5&&(o=o.next(()=>this.Ce(s))),r<6&&i>=6&&(o=o.next(()=>(function(a){a.createObjectStore(qn.store)}(e),this.Ne(s)))),r<7&&i>=7&&(o=o.next(()=>this.xe(s))),r<8&&i>=8&&(o=o.next(()=>this.ke(e,s))),r<9&&i>=9&&(o=o.next(()=>{(function(a){a.objectStoreNames.contains("remoteDocumentChanges")&&a.deleteObjectStore("remoteDocumentChanges")})(e),function(a){const u=a.objectStore(Ae.store);u.createIndex(Ae.readTimeIndex,Ae.readTimeIndexPath,{unique:!1}),u.createIndex(Ae.collectionReadTimeIndex,Ae.collectionReadTimeIndexPath,{unique:!1})}(n)})),r<10&&i>=10&&(o=o.next(()=>this.$e(s))),r<11&&i>=11&&(o=o.next(()=>{(function(a){a.createObjectStore(yo.store,{keyPath:yo.keyPath})})(e),function(a){a.createObjectStore(vo.store,{keyPath:vo.keyPath})}(e)})),o}Ne(e){let n=0;return e.store(Ae.store).Kt((r,i)=>{n+=Gh(i)}).next(()=>{const r=new qn(n);return e.store(qn.store).put(qn.key,r)})}Ce(e){const n=e.store(ei.store),r=e.store(ve.store);return n.Lt().next(i=>S.forEach(i,s=>{const o=IDBKeyRange.bound([s.userId,-1],[s.userId,s.lastAcknowledgedBatchId]);return r.Lt(ve.userMutationsIndex,o).next(a=>S.forEach(a,u=>{H(u.userId===s.userId);const l=Eo(this.N,u);return vT(e,s.userId,l).next(()=>{})}))}))}xe(e){const n=e.store(pt.store),r=e.store(Ae.store);return e.store(nn.store).get(nn.key).next(i=>{const s=[];return r.Kt((o,a)=>{const u=new ie(o),l=function(c){return[0,bn(c)]}(u);s.push(n.get(l).next(c=>c?S.resolve():(h=>n.put(new pt(0,bn(h),i.highestListenSequenceNumber)))(u)))}).next(()=>S.waitFor(s))})}ke(e,n){e.createObjectStore(Wi.store,{keyPath:Wi.keyPath});const r=n.store(Wi.store),i=new ey,s=o=>{if(i.add(o)){const a=o.lastSegment(),u=o.popLast();return r.put({collectionId:a,parent:bn(u)})}};return n.store(Ae.store).Kt({qt:!0},(o,a)=>{const u=new ie(o);return s(u.popLast())}).next(()=>n.store(St.store).Kt({qt:!0},([o,a,u],l)=>{const c=hr(a);return s(c.popLast())}))}$e(e){const n=e.store(qt.store);return n.Kt((r,i)=>{const s=Bu(i),o=fT(this.N,s);return n.put(o)})}}function kT(t){t.createObjectStore(pt.store,{keyPath:pt.keyPath}).createIndex(pt.documentTargetsIndex,pt.documentTargetsKeyPath,{unique:!0}),t.createObjectStore(qt.store,{keyPath:qt.keyPath}).createIndex(qt.queryTargetsIndexName,qt.queryTargetsKeyPath,{unique:!0}),t.createObjectStore(nn.store)}const ny="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class ry{constructor(e,n,r,i,s,o,a,u,l,c){if(this.allowTabSynchronization=e,this.persistenceKey=n,this.clientId=r,this.Oe=s,this.window=o,this.document=a,this.Fe=l,this.Me=c,this.Le=null,this.Be=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Ue=null,this.inForeground=!1,this.qe=null,this.Ke=null,this.je=Number.NEGATIVE_INFINITY,this.Qe=h=>Promise.resolve(),!ry.bt())throw new b(I.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new C$(this,i),this.We=n+"main",this.N=new cT(u),this.Ge=new Cn(this.We,11,new N$(this.N)),this.ze=new S$(this.referenceDelegate,this.N),this.Ht=new I$,this.He=function(h,d){return new A$(h,d)}(this.N,this.Ht),this.Je=new _$,this.window&&this.window.localStorage?this.Ye=this.window.localStorage:(this.Ye=null,c===!1&&De("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.Xe().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new b(I.FAILED_PRECONDITION,ny);return this.Ze(),this.tn(),this.en(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.ze.getHighestSequenceNumber(e))}).then(e=>{this.Le=new en(e,this.Fe)}).then(()=>{this.Be=!0}).catch(e=>(this.Ge&&this.Ge.close(),Promise.reject(e)))}nn(e){return this.Qe=async n=>{if(this.started)return e(n)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Ge.xt(async n=>{n.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.Oe.enqueueAndForget(async()=>{this.started&&await this.Xe()}))}Xe(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>Yh(e).put(new dr(this.clientId,Date.now(),this.networkEnabled,this.inForeground)).next(()=>{if(this.isPrimary)return this.sn(e).next(n=>{n||(this.isPrimary=!1,this.Oe.enqueueRetryable(()=>this.Qe(!1)))})}).next(()=>this.rn(e)).next(n=>this.isPrimary&&!n?this.on(e).next(()=>!1):!!n&&this.an(e).next(()=>!0))).catch(e=>{if(Gi(e))return N("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return N("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.Oe.enqueueRetryable(()=>this.Qe(e)),this.isPrimary=e})}sn(e){return ju(e).get(tn.key).next(n=>S.resolve(this.cn(n)))}un(e){return Yh(e).delete(this.clientId)}async hn(){if(this.isPrimary&&!this.ln(this.je,18e5)){this.je=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",n=>{const r=Ht(n,dr.store);return r.Lt().next(i=>{const s=this.fn(i,18e5),o=i.filter(a=>s.indexOf(a)===-1);return S.forEach(o,a=>r.delete(a.clientId)).next(()=>o)})}).catch(()=>[]);if(this.Ye)for(const n of e)this.Ye.removeItem(this.dn(n.clientId))}}en(){this.Ke=this.Oe.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.Xe().then(()=>this.hn()).then(()=>this.en()))}cn(e){return!!e&&e.ownerId===this.clientId}rn(e){return this.Me?S.resolve(!0):ju(e).get(tn.key).next(n=>{if(n!==null&&this.ln(n.leaseTimestampMs,5e3)&&!this.wn(n.ownerId)){if(this.cn(n)&&this.networkEnabled)return!0;if(!this.cn(n)){if(!n.allowTabSynchronization)throw new b(I.FAILED_PRECONDITION,ny);return!1}}return!(!this.networkEnabled||!this.inForeground)||Yh(e).Lt().next(r=>this.fn(r,5e3).find(i=>{if(this.clientId!==i.clientId){const s=!this.networkEnabled&&i.networkEnabled,o=!this.inForeground&&i.inForeground,a=this.networkEnabled===i.networkEnabled;if(s||o&&a)return!0}return!1})===void 0)}).next(n=>(this.isPrimary!==n&&N("IndexedDbPersistence",`Client ${n?"is":"is not"} eligible for a primary lease.`),n))}async shutdown(){this.Be=!1,this._n(),this.Ke&&(this.Ke.cancel(),this.Ke=null),this.mn(),this.gn(),await this.Ge.runTransaction("shutdown","readwrite",[tn.store,dr.store],e=>{const n=new lT(e,en.T);return this.on(n).next(()=>this.un(n))}),this.Ge.close(),this.yn()}fn(e,n){return e.filter(r=>this.ln(r.updateTimeMs,n)&&!this.wn(r.clientId))}pn(){return this.runTransaction("getActiveClients","readonly",e=>Yh(e).Lt().next(n=>this.fn(n,18e5).map(r=>r.clientId)))}get started(){return this.Be}getMutationQueue(e){return ty.Yt(e,this.N,this.Ht,this.referenceDelegate)}getTargetCache(){return this.ze}getRemoteDocumentCache(){return this.He}getIndexManager(){return this.Ht}getBundleCache(){return this.Je}runTransaction(e,n,r){N("IndexedDbPersistence","Starting transaction:",e);const i=n==="readonly"?"readonly":"readwrite";let s;return this.Ge.runTransaction(e,i,y$,o=>(s=new lT(o,this.Le?this.Le.next():en.T),n==="readwrite-primary"?this.sn(s).next(a=>!!a||this.rn(s)).next(a=>{if(!a)throw De(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.Oe.enqueueRetryable(()=>this.Qe(!1)),new b(I.FAILED_PRECONDITION,oT);return r(s)}).next(a=>this.an(s).next(()=>a)):this.Tn(s).next(()=>r(s)))).then(o=>(s.raiseOnCommittedEvent(),o))}Tn(e){return ju(e).get(tn.key).next(n=>{if(n!==null&&this.ln(n.leaseTimestampMs,5e3)&&!this.wn(n.ownerId)&&!this.cn(n)&&!(this.Me||this.allowTabSynchronization&&n.allowTabSynchronization))throw new b(I.FAILED_PRECONDITION,ny)})}an(e){const n=new tn(this.clientId,this.allowTabSynchronization,Date.now());return ju(e).put(tn.key,n)}static bt(){return Cn.bt()}on(e){const n=ju(e);return n.get(tn.key).next(r=>this.cn(r)?(N("IndexedDbPersistence","Releasing primary lease."),n.delete(tn.key)):S.resolve())}ln(e,n){const r=Date.now();return!(e<r-n)&&(!(e>r)||(De(`Detected an update time that is in the future: ${e} > ${r}`),!1))}Ze(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.qe=()=>{this.Oe.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.Xe()))},this.document.addEventListener("visibilitychange",this.qe),this.inForeground=this.document.visibilityState==="visible")}mn(){this.qe&&(this.document.removeEventListener("visibilitychange",this.qe),this.qe=null)}tn(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.Ue=()=>{this._n(),gN()&&navigator.appVersion.match("Version/14")&&this.Oe.enterRestrictedMode(!0),this.Oe.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Ue))}gn(){this.Ue&&(this.window.removeEventListener("pagehide",this.Ue),this.Ue=null)}wn(e){var n;try{const r=((n=this.Ye)===null||n===void 0?void 0:n.getItem(this.dn(e)))!==null;return N("IndexedDbPersistence",`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return De("IndexedDbPersistence","Failed to get zombied client id.",r),!1}}_n(){if(this.Ye)try{this.Ye.setItem(this.dn(this.clientId),String(Date.now()))}catch(e){De("Failed to set zombie client id.",e)}}yn(){if(this.Ye)try{this.Ye.removeItem(this.dn(this.clientId))}catch{}}dn(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function ju(t){return Ht(t,tn.store)}function Yh(t){return Ht(t,dr.store)}function iy(t,e){let n=t.projectId;return t.isDefaultDatabase||(n+="."+t.database),"firestore/"+e+"/"+n+"/"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P${constructor(e,n){this.progress=e,this.En=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bT{constructor(e,n,r){this.He=e,this.In=n,this.Ht=r}An(e,n){return this.In.getAllMutationBatchesAffectingDocumentKey(e,n).next(r=>this.Rn(e,n,r))}Rn(e,n,r){return this.He.getEntry(e,n).next(i=>{for(const s of r)s.applyToLocalView(i);return i})}bn(e,n){e.forEach((r,i)=>{for(const s of n)s.applyToLocalView(i)})}Pn(e,n){return this.He.getEntries(e,n).next(r=>this.vn(e,r).next(()=>r))}vn(e,n){return this.In.getAllMutationBatchesAffectingDocumentKeys(e,n).next(r=>this.bn(n,r))}getDocumentsMatchingQuery(e,n,r){return function(i){return j.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.Vn(e,n.path):Bg(n)?this.Sn(e,n,r):this.Dn(e,n,r)}Vn(e,n){return this.An(e,new j(n)).next(r=>{let i=Hg();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}Sn(e,n,r){const i=n.collectionGroup;let s=Hg();return this.Ht.getCollectionParents(e,i).next(o=>S.forEach(o,a=>{const u=function(l,c){return new cr(c,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(i));return this.Dn(e,u,r).next(l=>{l.forEach((c,h)=>{s=s.insert(c,h)})})}).next(()=>s))}Dn(e,n,r){let i,s;return this.He.getDocumentsMatchingQuery(e,n,r).next(o=>(i=o,this.In.getAllMutationBatchesAffectingQuery(e,n))).next(o=>(s=o,this.Cn(e,s,i).next(a=>{i=a;for(const u of s)for(const l of u.mutations){const c=l.key;let h=i.get(c);h==null&&(h=Ie.newInvalidDocument(c),i=i.insert(c,h)),zg(l,h,u.localWriteTime),h.isFoundDocument()||(i=i.remove(c))}}))).next(()=>(i.forEach((o,a)=>{Pu(n,a)||(i=i.remove(o))}),i))}Cn(e,n,r){let i=ce();for(const o of n)for(const a of o.mutations)a instanceof Zr&&r.get(a.key)===null&&(i=i.add(a.key));let s=r;return this.He.getEntries(e,i).next(o=>(o.forEach((a,u)=>{u.isFoundDocument()&&(s=s.insert(a,u))}),s))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sy{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Nn=r,this.xn=i}static kn(e,n){let r=ce(),i=ce();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new sy(e,n.fromCache,r,i)}}/**
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
 */class CT{$n(e){this.On=e}getDocumentsMatchingQuery(e,n,r,i){return function(s){return s.filters.length===0&&s.limit===null&&s.startAt==null&&s.endAt==null&&(s.explicitOrderBy.length===0||s.explicitOrderBy.length===1&&s.explicitOrderBy[0].field.isKeyField())}(n)||r.isEqual(Q.min())?this.Fn(e,n):this.On.Pn(e,i).next(s=>{const o=this.Mn(n,s);return($h(n)||Uh(n))&&this.Ln(n.limitType,o,i,r)?this.Fn(e,n):(xg()<=te.DEBUG&&N("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),jg(n)),this.On.getDocumentsMatchingQuery(e,n,r).next(a=>(o.forEach(u=>{a=a.insert(u.key,u)}),a)))})}Mn(e,n){let r=new Ce(IS(e));return n.forEach((i,s)=>{Pu(e,s)&&(r=r.add(s))}),r}Ln(e,n,r,i){if(r.size!==n.size)return!0;const s=e==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Fn(e,n){return xg()<=te.DEBUG&&N("QueryEngine","Using full collection scan to execute query:",jg(n)),this.On.getDocumentsMatchingQuery(e,n,Q.min())}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x${constructor(e,n,r,i){this.persistence=e,this.Bn=n,this.N=i,this.Un=new Be(J),this.qn=new To(s=>Au(s),Dh),this.Kn=Q.min(),this.In=e.getMutationQueue(r),this.jn=e.getRemoteDocumentCache(),this.ze=e.getTargetCache(),this.Qn=new bT(this.jn,this.In,this.persistence.getIndexManager()),this.Je=e.getBundleCache(),this.Bn.$n(this.Qn)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Un))}}function AT(t,e,n,r){return new x$(t,e,n,r)}async function RT(t,e){const n=L(t);let r=n.In,i=n.Qn;const s=await n.persistence.runTransaction("Handle user change","readonly",o=>{let a;return n.In.getAllMutationBatches(o).next(u=>(a=u,r=n.persistence.getMutationQueue(e),i=new bT(n.jn,r,n.persistence.getIndexManager()),r.getAllMutationBatches(o))).next(u=>{const l=[],c=[];let h=ce();for(const d of a){l.push(d.batchId);for(const g of d.mutations)h=h.add(g.key)}for(const d of u){c.push(d.batchId);for(const g of d.mutations)h=h.add(g.key)}return i.Pn(o,h).next(d=>({Wn:d,removedBatchIds:l,addedBatchIds:c}))})});return n.In=r,n.Qn=i,n.Bn.$n(n.Qn),s}function O$(t,e){const n=L(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.jn.newChangeBuffer({trackRemovals:!0});return function(o,a,u,l){const c=u.batch,h=c.keys();let d=S.resolve();return h.forEach(g=>{d=d.next(()=>l.getEntry(a,g)).next(y=>{const _=u.docVersions.get(g);H(_!==null),y.version.compareTo(_)<0&&(c.applyToRemoteDocument(y,u),y.isValidDocument()&&l.addEntry(y,u.commitVersion))})}),d.next(()=>o.In.removeMutationBatch(a,c))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.In.performConsistencyCheck(r)).next(()=>n.Qn.Pn(r,i))})}function NT(t){const e=L(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.ze.getLastRemoteSnapshotVersion(n))}function D$(t,e){const n=L(t),r=e.snapshotVersion;let i=n.Un;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.jn.newChangeBuffer({trackRemovals:!0});i=n.Un;const a=[];e.targetChanges.forEach((l,c)=>{const h=i.get(c);if(!h)return;a.push(n.ze.removeMatchingKeys(s,l.removedDocuments,c).next(()=>n.ze.addMatchingKeys(s,l.addedDocuments,c)));const d=l.resumeToken;if(d.approximateByteSize()>0){const g=h.withResumeToken(d,r).withSequenceNumber(s.currentSequenceNumber);i=i.insert(c,g),function(y,_,f){return H(_.resumeToken.approximateByteSize()>0),y.resumeToken.approximateByteSize()===0||_.snapshotVersion.toMicroseconds()-y.snapshotVersion.toMicroseconds()>=3e8?!0:f.addedDocuments.size+f.modifiedDocuments.size+f.removedDocuments.size>0}(h,g,l)&&a.push(n.ze.updateTargetData(s,g))}});let u=pn();if(e.documentUpdates.forEach((l,c)=>{e.resolvedLimboDocuments.has(l)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,l))}),a.push(PT(s,o,e.documentUpdates,r,void 0).next(l=>{u=l})),!r.isEqual(Q.min())){const l=n.ze.getLastRemoteSnapshotVersion(s).next(c=>n.ze.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(l)}return S.waitFor(a).next(()=>o.apply(s)).next(()=>n.Qn.vn(s,u)).next(()=>u)}).then(s=>(n.Un=i,s))}function PT(t,e,n,r,i){let s=ce();return n.forEach(o=>s=s.add(o)),e.getEntries(t,s).next(o=>{let a=pn();return n.forEach((u,l)=>{const c=o.get(u),h=(i==null?void 0:i.get(u))||r;l.isNoDocument()&&l.version.isEqual(Q.min())?(e.removeEntry(u,h),a=a.insert(u,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(l,h),a=a.insert(u,l)):N("LocalStore","Ignoring outdated watch update for ",u,". Current version:",c.version," Watch version:",l.version)}),a})}function L$(t,e){const n=L(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.In.getNextMutationBatchAfterBatchId(r,e)))}function ko(t,e){const n=L(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.ze.getTargetData(r,e).next(s=>s?(i=s,S.resolve(i)):n.ze.allocateTargetId(r).next(o=>(i=new ti(e,o,0,r.currentSequenceNumber),n.ze.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Un.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Un=n.Un.insert(r.targetId,r),n.qn.set(e,r.targetId)),r})}async function bo(t,e,n){const r=L(t),i=r.Un.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Gi(o))throw o;N("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Un=r.Un.remove(e),r.qn.delete(i.target)}function Xh(t,e,n){const r=L(t);let i=Q.min(),s=ce();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,u,l){const c=L(a),h=c.qn.get(l);return h!==void 0?S.resolve(c.Un.get(h)):c.ze.getTargetData(u,l)}(r,o,fn(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.ze.getMatchingKeysForTargetId(o,a.targetId).next(u=>{s=u})}).next(()=>r.Bn.getDocumentsMatchingQuery(o,e,n?i:Q.min(),n?s:ce())).next(a=>({documents:a,Gn:s})))}function xT(t,e){const n=L(t),r=L(n.ze),i=n.Un.get(e);return i?Promise.resolve(i.target):n.persistence.runTransaction("Get target data","readonly",s=>r.Tt(s,e).next(o=>o?o.target:null))}function OT(t){const e=L(t);return e.persistence.runTransaction("Get new document changes","readonly",n=>function(r,i,s){const o=L(r);let a=pn(),u=Jg(s);const l=ii(i),c=IDBKeyRange.lowerBound(u,!0);return l.Kt({index:Ae.readTimeIndex,range:c},(h,d)=>{const g=Xg(o.N,d);a=a.insert(g.key,g),u=d.readTime}).next(()=>({En:a,readTime:dT(u)}))}(e.jn,n,e.Kn)).then(({En:n,readTime:r})=>(e.Kn=r,n))}async function M$(t){const e=L(t);return e.persistence.runTransaction("Synchronize last document change read time","readonly",n=>function(r){const i=ii(r);let s=Q.min();return i.Kt({index:Ae.readTimeIndex,reverse:!0},(o,a,u)=>{a.readTime&&(s=dT(a.readTime)),u.done()}).next(()=>s)}(n)).then(n=>{e.Kn=n})}async function $$(t,e,n,r){const i=L(t);let s=ce(),o=pn(),a=FS();for(const c of n){const h=e.zn(c.metadata.name);c.document&&(s=s.add(h)),o=o.insert(h,e.Hn(c)),a=a.insert(h,e.Jn(c.metadata.readTime))}const u=i.jn.newChangeBuffer({trackRemovals:!0}),l=await ko(i,function(c){return fn(co(ie.fromString(`__bundle__/docs/${c}`)))}(r));return i.persistence.runTransaction("Apply bundle documents","readwrite",c=>PT(c,u,o,Q.min(),a).next(h=>(u.apply(c),h)).next(h=>i.ze.removeMatchingKeysForTargetId(c,l.targetId).next(()=>i.ze.addMatchingKeys(c,s,l.targetId)).next(()=>i.Qn.vn(c,h)).next(()=>h)))}async function U$(t,e,n=ce()){const r=await ko(t,fn(Zg(e.bundledQuery))),i=L(t);return i.persistence.runTransaction("Save named query","readwrite",s=>{const o=Xe(e.readTime);if(r.snapshotVersion.compareTo(o)>=0)return i.Je.saveNamedQuery(s,e);const a=r.withResumeToken(Ye.EMPTY_BYTE_STRING,o);return i.Un=i.Un.insert(a.targetId,a),i.ze.updateTargetData(s,a).next(()=>i.ze.removeMatchingKeysForTargetId(s,r.targetId)).next(()=>i.ze.addMatchingKeys(s,n,r.targetId)).next(()=>i.Je.saveNamedQuery(s,e))})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F${constructor(e){this.N=e,this.Yn=new Map,this.Xn=new Map}getBundleMetadata(e,n){return S.resolve(this.Yn.get(n))}saveBundleMetadata(e,n){var r;return this.Yn.set(n.id,{id:(r=n).id,version:r.version,createTime:Xe(r.createTime)}),S.resolve()}getNamedQuery(e,n){return S.resolve(this.Xn.get(n))}saveNamedQuery(e,n){return this.Xn.set(n.name,function(r){return{name:r.name,query:Zg(r.bundledQuery),readTime:Xe(r.readTime)}}(n)),S.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oy{constructor(){this.Zn=new Ce(Je.ts),this.es=new Ce(Je.ns)}isEmpty(){return this.Zn.isEmpty()}addReference(e,n){const r=new Je(e,n);this.Zn=this.Zn.add(r),this.es=this.es.add(r)}ss(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.rs(new Je(e,n))}os(e,n){e.forEach(r=>this.removeReference(r,n))}cs(e){const n=new j(new ie([])),r=new Je(n,e),i=new Je(n,e+1),s=[];return this.es.forEachInRange([r,i],o=>{this.rs(o),s.push(o.key)}),s}us(){this.Zn.forEach(e=>this.rs(e))}rs(e){this.Zn=this.Zn.delete(e),this.es=this.es.delete(e)}hs(e){const n=new j(new ie([])),r=new Je(n,e),i=new Je(n,e+1);let s=ce();return this.es.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Je(e,0),r=this.Zn.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Je{constructor(e,n){this.key=e,this.ls=n}static ts(e,n){return j.comparator(e.key,n.key)||J(e.ls,n.ls)}static ns(e,n){return J(e.ls,n.ls)||j.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V${constructor(e,n){this.Ht=e,this.referenceDelegate=n,this.In=[],this.fs=1,this.ds=new Ce(Je.ts)}checkEmpty(e){return S.resolve(this.In.length===0)}addMutationBatch(e,n,r,i){const s=this.fs;this.fs++,this.In.length>0&&this.In[this.In.length-1];const o=new Qg(s,n,r,i);this.In.push(o);for(const a of i)this.ds=this.ds.add(new Je(a.key,s)),this.Ht.addToCollectionParentIndex(e,a.key.path.popLast());return S.resolve(o)}lookupMutationBatch(e,n){return S.resolve(this.ws(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this._s(r),s=i<0?0:i;return S.resolve(this.In.length>s?this.In[s]:null)}getHighestUnacknowledgedBatchId(){return S.resolve(this.In.length===0?-1:this.fs-1)}getAllMutationBatches(e){return S.resolve(this.In.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Je(n,0),i=new Je(n,Number.POSITIVE_INFINITY),s=[];return this.ds.forEachInRange([r,i],o=>{const a=this.ws(o.ls);s.push(a)}),S.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ce(J);return n.forEach(i=>{const s=new Je(i,0),o=new Je(i,Number.POSITIVE_INFINITY);this.ds.forEachInRange([s,o],a=>{r=r.add(a.ls)})}),S.resolve(this.gs(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;j.isDocumentKey(s)||(s=s.child(""));const o=new Je(new j(s),0);let a=new Ce(J);return this.ds.forEachWhile(u=>{const l=u.key.path;return!!r.isPrefixOf(l)&&(l.length===i&&(a=a.add(u.ls)),!0)},o),S.resolve(this.gs(a))}gs(e){const n=[];return e.forEach(r=>{const i=this.ws(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){H(this.ys(n.batchId,"removed")===0),this.In.shift();let r=this.ds;return S.forEach(n.mutations,i=>{const s=new Je(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.ds=r})}te(e){}containsKey(e,n){const r=new Je(n,0),i=this.ds.firstAfterOrEqual(r);return S.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.In.length,S.resolve()}ys(e,n){return this._s(e)}_s(e){return this.In.length===0?0:e-this.In[0].batchId}ws(e){const n=this._s(e);return n<0||n>=this.In.length?null:this.In[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B${constructor(e,n){this.Ht=e,this.ps=n,this.docs=new Be(j.comparator),this.size=0}addEntry(e,n,r){const i=n.key,s=this.docs.get(i),o=s?s.size:0,a=this.ps(n);return this.docs=this.docs.insert(i,{document:n.clone(),size:a,readTime:r}),this.size+=a-o,this.Ht.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return S.resolve(r?r.document.clone():Ie.newInvalidDocument(n))}getEntries(e,n){let r=pn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.clone():Ie.newInvalidDocument(i))}),S.resolve(r)}getDocumentsMatchingQuery(e,n,r){let i=pn();const s=new j(n.path.child("")),o=this.docs.getIteratorFrom(s);for(;o.hasNext();){const{key:a,value:{document:u,readTime:l}}=o.getNext();if(!n.path.isPrefixOf(a.path))break;l.compareTo(r)<=0||Pu(n,u)&&(i=i.insert(u.key,u.clone()))}return S.resolve(i)}Ts(e,n){return S.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new j$(this)}getSize(e){return S.resolve(this.size)}}class j$ extends ST{constructor(e){super(),this.Se=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.document.isValidDocument()?n.push(this.Se.addEntry(e,i.document,this.getReadTime(r))):this.Se.removeEntry(r)}),S.waitFor(n)}getFromCache(e,n){return this.Se.getEntry(e,n)}getAllFromCache(e,n){return this.Se.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z${constructor(e){this.persistence=e,this.Es=new To(n=>Au(n),Dh),this.lastRemoteSnapshotVersion=Q.min(),this.highestTargetId=0,this.Is=0,this.As=new oy,this.targetCount=0,this.Rs=Qi.se()}forEachTarget(e,n){return this.Es.forEach((r,i)=>n(i)),S.resolve()}getLastRemoteSnapshotVersion(e){return S.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return S.resolve(this.Is)}allocateTargetId(e){return this.highestTargetId=this.Rs.next(),S.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Is&&(this.Is=n),S.resolve()}ae(e){this.Es.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Rs=new Qi(n),this.highestTargetId=n),e.sequenceNumber>this.Is&&(this.Is=e.sequenceNumber)}addTargetData(e,n){return this.ae(n),this.targetCount+=1,S.resolve()}updateTargetData(e,n){return this.ae(n),S.resolve()}removeTargetData(e,n){return this.Es.delete(n.target),this.As.cs(n.targetId),this.targetCount-=1,S.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Es.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Es.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),S.waitFor(s).next(()=>i)}getTargetCount(e){return S.resolve(this.targetCount)}getTargetData(e,n){const r=this.Es.get(n)||null;return S.resolve(r)}addMatchingKeys(e,n,r){return this.As.ss(n,r),S.resolve()}removeMatchingKeys(e,n,r){this.As.os(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),S.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.As.cs(n),S.resolve()}getMatchingKeysForTargetId(e,n){const r=this.As.hs(n);return S.resolve(r)}containsKey(e,n){return S.resolve(this.As.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q${constructor(e,n){this.bs={},this.Le=new en(0),this.Be=!1,this.Be=!0,this.referenceDelegate=e(this),this.ze=new z$(this),this.Ht=new E$,this.He=function(r,i){return new B$(r,i)}(this.Ht,r=>this.referenceDelegate.Ps(r)),this.N=new cT(n),this.Je=new F$(this.N)}start(){return Promise.resolve()}shutdown(){return this.Be=!1,Promise.resolve()}get started(){return this.Be}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(){return this.Ht}getMutationQueue(e){let n=this.bs[e.toKey()];return n||(n=new V$(this.Ht,this.referenceDelegate),this.bs[e.toKey()]=n),n}getTargetCache(){return this.ze}getRemoteDocumentCache(){return this.He}getBundleCache(){return this.Je}runTransaction(e,n,r){N("MemoryPersistence","Starting transaction:",e);const i=new H$(this.Le.next());return this.referenceDelegate.vs(),r(i).next(s=>this.referenceDelegate.Vs(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ss(e,n){return S.or(Object.values(this.bs).map(r=>()=>r.containsKey(e,n)))}}class H$ extends aT{constructor(e){super(),this.currentSequenceNumber=e}}class ay{constructor(e){this.persistence=e,this.Ds=new oy,this.Cs=null}static Ns(e){return new ay(e)}get xs(){if(this.Cs)return this.Cs;throw q()}addReference(e,n,r){return this.Ds.addReference(r,n),this.xs.delete(r.toString()),S.resolve()}removeReference(e,n,r){return this.Ds.removeReference(r,n),this.xs.add(r.toString()),S.resolve()}markPotentiallyOrphaned(e,n){return this.xs.add(n.toString()),S.resolve()}removeTarget(e,n){this.Ds.cs(n.targetId).forEach(i=>this.xs.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.xs.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}vs(){this.Cs=new Set}Vs(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return S.forEach(this.xs,r=>{const i=j.fromPath(r);return this.ks(e,i).next(s=>{s||n.removeEntry(i)})}).next(()=>(this.Cs=null,n.apply(e)))}updateLimboDocument(e,n){return this.ks(e,n).next(r=>{r?this.xs.delete(n.toString()):this.xs.add(n.toString())})}Ps(e){return 0}ks(e,n){return S.or([()=>S.resolve(this.Ds.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ss(e,n)])}}/**
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
 */function DT(t,e){return`firestore_clients_${t}_${e}`}function LT(t,e,n){let r=`firestore_mutations_${t}_${n}`;return e.isAuthenticated()&&(r+=`_${e.uid}`),r}function uy(t,e){return`firestore_targets_${t}_${e}`}class Jh{constructor(e,n,r,i){this.user=e,this.batchId=n,this.state=r,this.error=i}static $s(e,n,r){const i=JSON.parse(r);let s,o=typeof i=="object"&&["pending","acknowledged","rejected"].indexOf(i.state)!==-1&&(i.error===void 0||typeof i.error=="object");return o&&i.error&&(o=typeof i.error.message=="string"&&typeof i.error.code=="string",o&&(s=new b(i.error.code,i.error.message))),o?new Jh(e,n,i.state,s):(De("SharedClientState",`Failed to parse mutation state for ID '${n}': ${r}`),null)}Os(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class zu{constructor(e,n,r){this.targetId=e,this.state=n,this.error=r}static $s(e,n){const r=JSON.parse(n);let i,s=typeof r=="object"&&["not-current","current","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return s&&r.error&&(s=typeof r.error.message=="string"&&typeof r.error.code=="string",s&&(i=new b(r.error.code,r.error.message))),s?new zu(e,r.state,i):(De("SharedClientState",`Failed to parse target state for ID '${e}': ${n}`),null)}Os(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Zh{constructor(e,n){this.clientId=e,this.activeTargetIds=n}static $s(e,n){const r=JSON.parse(n);let i=typeof r=="object"&&r.activeTargetIds instanceof Array,s=zh();for(let o=0;i&&o<r.activeTargetIds.length;++o)i=cS(r.activeTargetIds[o]),s=s.add(r.activeTargetIds[o]);return i?new Zh(e,s):(De("SharedClientState",`Failed to parse client data for instance '${e}': ${n}`),null)}}class ly{constructor(e,n){this.clientId=e,this.onlineState=n}static $s(e){const n=JSON.parse(e);return typeof n=="object"&&["Unknown","Online","Offline"].indexOf(n.onlineState)!==-1&&typeof n.clientId=="string"?new ly(n.clientId,n.onlineState):(De("SharedClientState",`Failed to parse online state: ${e}`),null)}}class cy{constructor(){this.activeTargetIds=zh()}Fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ms(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Os(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class hy{constructor(e,n,r,i,s){this.window=e,this.Oe=n,this.persistenceKey=r,this.Ls=i,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.Bs=this.Us.bind(this),this.qs=new Be(J),this.started=!1,this.Ks=[];const o=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=s,this.js=DT(this.persistenceKey,this.Ls),this.Qs=function(a){return`firestore_sequence_number_${a}`}(this.persistenceKey),this.qs=this.qs.insert(this.Ls,new cy),this.Ws=new RegExp(`^firestore_clients_${o}_([^_]*)$`),this.Gs=new RegExp(`^firestore_mutations_${o}_(\\d+)(?:_(.*))?$`),this.zs=new RegExp(`^firestore_targets_${o}_(\\d+)$`),this.Hs=function(a){return`firestore_online_state_${a}`}(this.persistenceKey),this.Js=function(a){return`firestore_bundle_loaded_${a}`}(this.persistenceKey),this.window.addEventListener("storage",this.Bs)}static bt(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.pn();for(const r of e){if(r===this.Ls)continue;const i=this.getItem(DT(this.persistenceKey,r));if(i){const s=Zh.$s(r,i);s&&(this.qs=this.qs.insert(s.clientId,s))}}this.Ys();const n=this.storage.getItem(this.Hs);if(n){const r=this.Xs(n);r&&this.Zs(r)}for(const r of this.Ks)this.Us(r);this.Ks=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.Qs,JSON.stringify(e))}getAllActiveQueryTargets(){return this.ti(this.qs)}isActiveQueryTarget(e){let n=!1;return this.qs.forEach((r,i)=>{i.activeTargetIds.has(e)&&(n=!0)}),n}addPendingMutation(e){this.ei(e,"pending")}updateMutationState(e,n,r){this.ei(e,n,r),this.ni(e)}addLocalQueryTarget(e){let n="not-current";if(this.isActiveQueryTarget(e)){const r=this.storage.getItem(uy(this.persistenceKey,e));if(r){const i=zu.$s(e,r);i&&(n=i.state)}}return this.si.Fs(e),this.Ys(),n}removeLocalQueryTarget(e){this.si.Ms(e),this.Ys()}isLocalQueryTarget(e){return this.si.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(uy(this.persistenceKey,e))}updateQueryState(e,n,r){this.ii(e,n,r)}handleUserChange(e,n,r){n.forEach(i=>{this.ni(i)}),this.currentUser=e,r.forEach(i=>{this.addPendingMutation(i)})}setOnlineState(e){this.ri(e)}notifyBundleLoaded(){this.oi()}shutdown(){this.started&&(this.window.removeEventListener("storage",this.Bs),this.removeItem(this.js),this.started=!1)}getItem(e){const n=this.storage.getItem(e);return N("SharedClientState","READ",e,n),n}setItem(e,n){N("SharedClientState","SET",e,n),this.storage.setItem(e,n)}removeItem(e){N("SharedClientState","REMOVE",e),this.storage.removeItem(e)}Us(e){const n=e;if(n.storageArea===this.storage){if(N("SharedClientState","EVENT",n.key,n.newValue),n.key===this.js)return void De("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.Oe.enqueueRetryable(async()=>{if(this.started){if(n.key!==null){if(this.Ws.test(n.key)){if(n.newValue==null){const r=this.ai(n.key);return this.ci(r,null)}{const r=this.ui(n.key,n.newValue);if(r)return this.ci(r.clientId,r)}}else if(this.Gs.test(n.key)){if(n.newValue!==null){const r=this.hi(n.key,n.newValue);if(r)return this.li(r)}}else if(this.zs.test(n.key)){if(n.newValue!==null){const r=this.fi(n.key,n.newValue);if(r)return this.di(r)}}else if(n.key===this.Hs){if(n.newValue!==null){const r=this.Xs(n.newValue);if(r)return this.Zs(r)}}else if(n.key===this.Qs){const r=function(i){let s=en.T;if(i!=null)try{const o=JSON.parse(i);H(typeof o=="number"),s=o}catch(o){De("SharedClientState","Failed to read sequence number from WebStorage",o)}return s}(n.newValue);r!==en.T&&this.sequenceNumberHandler(r)}else if(n.key===this.Js)return this.syncEngine.wi()}}else this.Ks.push(n)})}}get si(){return this.qs.get(this.Ls)}Ys(){this.setItem(this.js,this.si.Os())}ei(e,n,r){const i=new Jh(this.currentUser,e,n,r),s=LT(this.persistenceKey,this.currentUser,e);this.setItem(s,i.Os())}ni(e){const n=LT(this.persistenceKey,this.currentUser,e);this.removeItem(n)}ri(e){const n={clientId:this.Ls,onlineState:e};this.storage.setItem(this.Hs,JSON.stringify(n))}ii(e,n,r){const i=uy(this.persistenceKey,e),s=new zu(e,n,r);this.setItem(i,s.Os())}oi(){this.setItem(this.Js,"value-not-used")}ai(e){const n=this.Ws.exec(e);return n?n[1]:null}ui(e,n){const r=this.ai(e);return Zh.$s(r,n)}hi(e,n){const r=this.Gs.exec(e),i=Number(r[1]),s=r[2]!==void 0?r[2]:null;return Jh.$s(new ht(s),i,n)}fi(e,n){const r=this.zs.exec(e),i=Number(r[1]);return zu.$s(i,n)}Xs(e){return ly.$s(e)}async li(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine._i(e.batchId,e.state,e.error);N("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}di(e){return this.syncEngine.mi(e.targetId,e.state,e.error)}ci(e,n){const r=n?this.qs.insert(e,n):this.qs.remove(e),i=this.ti(this.qs),s=this.ti(r),o=[],a=[];return s.forEach(u=>{i.has(u)||o.push(u)}),i.forEach(u=>{s.has(u)||a.push(u)}),this.syncEngine.gi(o,a).then(()=>{this.qs=r})}Zs(e){this.qs.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}ti(e){let n=zh();return e.forEach((r,i)=>{n=n.unionWith(i.activeTargetIds)}),n}}class MT{constructor(){this.yi=new cy,this.pi={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.yi.Fs(e),this.pi[e]||"not-current"}updateQueryState(e,n,r){this.pi[e]=n}removeLocalQueryTarget(e){this.yi.Ms(e)}isLocalQueryTarget(e){return this.yi.activeTargetIds.has(e)}clearQueryState(e){delete this.pi[e]}getAllActiveQueryTargets(){return this.yi.activeTargetIds}isActiveQueryTarget(e){return this.yi.activeTargetIds.has(e)}start(){return this.yi=new cy,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(){}}/**
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
 */class W${Ti(e){}shutdown(){}}/**
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
 */class $T{constructor(){this.Ei=()=>this.Ii(),this.Ai=()=>this.Ri(),this.bi=[],this.Pi()}Ti(e){this.bi.push(e)}shutdown(){window.removeEventListener("online",this.Ei),window.removeEventListener("offline",this.Ai)}Pi(){window.addEventListener("online",this.Ei),window.addEventListener("offline",this.Ai)}Ii(){N("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.bi)e(0)}Ri(){N("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.bi)e(1)}static bt(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G$={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K${constructor(e){this.vi=e.vi,this.Vi=e.Vi}Si(e){this.Di=e}Ci(e){this.Ni=e}onMessage(e){this.xi=e}close(){this.Vi()}send(e){this.vi(e)}ki(){this.Di()}$i(e){this.Ni(e)}Oi(e){this.xi(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q$ extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.Fi=n+"://"+e.host,this.Mi="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}Li(e,n,r,i){const s=this.Bi(e,n);N("RestConnection","Sending: ",s,r);const o={};return this.Ui(o,i),this.qi(e,s,o,r).then(a=>(N("RestConnection","Received: ",a),a),a=>{throw Su("RestConnection",`${e} failed with error: `,a,"url: ",s,"request:",r),a})}Ki(e,n,r,i){return this.Li(e,n,r,i)}Ui(e,n){if(e["X-Goog-Api-Client"]="gl-js/ fire/"+io,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n)for(const r in n.authHeaders)n.authHeaders.hasOwnProperty(r)&&(e[r]=n.authHeaders[r])}Bi(e,n){const r=G$[e];return`${this.Fi}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}qi(e,n,r,i){return new Promise((s,o)=>{const a=new yM;a.listenOnce(pM.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Pg.NO_ERROR:const l=a.getResponseJson();N("Connection","XHR received:",JSON.stringify(l)),s(l);break;case Pg.TIMEOUT:N("Connection",'RPC "'+e+'" timed out'),o(new b(I.DEADLINE_EXCEEDED,"Request time out"));break;case Pg.HTTP_ERROR:const c=a.getStatus();if(N("Connection",'RPC "'+e+'" failed with status:',c,"response text:",a.getResponseText()),c>0){const h=a.getResponseJson().error;if(h&&h.status&&h.message){const d=function(g){const y=g.toLowerCase().replace(/_/g,"-");return Object.values(I).indexOf(y)>=0?y:I.UNKNOWN}(h.status);o(new b(d,h.message))}else o(new b(I.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new b(I.UNAVAILABLE,"Connection failed."));break;default:q()}}finally{N("Connection",'RPC "'+e+'" completed.')}});const u=JSON.stringify(i);a.send(n,"POST",u,r,15)})}ji(e,n){const r=[this.Fi,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=dM(),s=fM(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new gM({})),this.Ui(o.initMessageHeaders,n),f1()||xc()||pN()||nm()||mN()||tm()||(o.httpHeadersOverwriteParam="$httpHeaders");const a=r.join("");N("Connection","Creating WebChannel: "+a,o);const u=i.createWebChannel(a,o);let l=!1,c=!1;const h=new K$({vi:g=>{c?N("Connection","Not sending because WebChannel is closed:",g):(l||(N("Connection","Opening WebChannel transport."),u.open(),l=!0),N("Connection","WebChannel sending:",g),u.send(g))},Vi:()=>u.close()}),d=(g,y,_)=>{g.listen(y,f=>{try{_(f)}catch(p){setTimeout(()=>{throw p},0)}})};return d(u,Nh.EventType.OPEN,()=>{c||N("Connection","WebChannel transport opened.")}),d(u,Nh.EventType.CLOSE,()=>{c||(c=!0,N("Connection","WebChannel transport closed"),h.$i())}),d(u,Nh.EventType.ERROR,g=>{c||(c=!0,Su("Connection","WebChannel transport errored:",g),h.$i(new b(I.UNAVAILABLE,"The operation could not be completed")))}),d(u,Nh.EventType.MESSAGE,g=>{var y;if(!c){const _=g.data[0];H(!!_);const f=_,p=f.error||((y=f[0])===null||y===void 0?void 0:y.error);if(p){N("Connection","WebChannel received error:",p);const m=p.status;let w=function(P){const C=$e[P];if(C!==void 0)return $S(C)}(m),v=p.message;w===void 0&&(w=I.INTERNAL,v="Unknown error status: "+m+" with message "+p.message),c=!0,h.$i(new b(w,v)),u.close()}else N("Connection","WebChannel received:",_),h.Oi(_)}}),d(s,mM.STAT_EVENT,g=>{g.stat===nS.PROXY?N("Connection","Detected buffering proxy"):g.stat===nS.NOPROXY&&N("Connection","Detected no buffering proxy")}),setTimeout(()=>{h.ki()},0),h}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function UT(){return typeof window!="undefined"?window:null}function ed(){return typeof document!="undefined"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qu(t){return new n$(t,!0)}class dy{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Oe=e,this.timerId=n,this.Qi=r,this.Wi=i,this.Gi=s,this.zi=0,this.Hi=null,this.Ji=Date.now(),this.reset()}reset(){this.zi=0}Yi(){this.zi=this.Gi}Xi(e){this.cancel();const n=Math.floor(this.zi+this.Zi()),r=Math.max(0,Date.now()-this.Ji),i=Math.max(0,n-r);i>0&&N("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.zi} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Hi=this.Oe.enqueueAfterDelay(this.timerId,i,()=>(this.Ji=Date.now(),e())),this.zi*=this.Wi,this.zi<this.Qi&&(this.zi=this.Qi),this.zi>this.Gi&&(this.zi=this.Gi)}tr(){this.Hi!==null&&(this.Hi.skipDelay(),this.Hi=null)}cancel(){this.Hi!==null&&(this.Hi.cancel(),this.Hi=null)}Zi(){return(Math.random()-.5)*this.zi}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FT{constructor(e,n,r,i,s,o){this.Oe=e,this.er=r,this.nr=i,this.credentialsProvider=s,this.listener=o,this.state=0,this.sr=0,this.ir=null,this.stream=null,this.rr=new dy(e,n)}ar(){return this.state===1||this.state===2||this.state===4}cr(){return this.state===2}start(){this.state!==3?this.auth():this.ur()}async stop(){this.ar()&&await this.close(0)}hr(){this.state=0,this.rr.reset()}lr(){this.cr()&&this.ir===null&&(this.ir=this.Oe.enqueueAfterDelay(this.er,6e4,()=>this.dr()))}wr(e){this._r(),this.stream.send(e)}async dr(){if(this.cr())return this.close(0)}_r(){this.ir&&(this.ir.cancel(),this.ir=null)}async close(e,n){this._r(),this.rr.cancel(),this.sr++,e!==3?this.rr.reset():n&&n.code===I.RESOURCE_EXHAUSTED?(De(n.toString()),De("Using maximum backoff delay to prevent overloading the backend."),this.rr.Yi()):n&&n.code===I.UNAUTHENTICATED&&this.credentialsProvider.invalidateToken(),this.stream!==null&&(this.mr(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ci(n)}mr(){}auth(){this.state=1;const e=this.gr(this.sr),n=this.sr;this.credentialsProvider.getToken().then(r=>{this.sr===n&&this.yr(r)},r=>{e(()=>{const i=new b(I.UNKNOWN,"Fetching auth token failed: "+r.message);return this.pr(i)})})}yr(e){const n=this.gr(this.sr);this.stream=this.Tr(e),this.stream.Si(()=>{n(()=>(this.state=2,this.listener.Si()))}),this.stream.Ci(r=>{n(()=>this.pr(r))}),this.stream.onMessage(r=>{n(()=>this.onMessage(r))})}ur(){this.state=4,this.rr.Xi(async()=>{this.state=0,this.start()})}pr(e){return N("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(3,e)}gr(e){return n=>{this.Oe.enqueueAndForget(()=>this.sr===e?n():(N("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Y$ extends FT{constructor(e,n,r,i,s){super(e,"listen_stream_connection_backoff","listen_stream_idle",n,r,s),this.N=i}Tr(e){return this.nr.ji("Listen",e)}onMessage(e){this.rr.reset();const n=s$(this.N,e),r=function(i){if(!("targetChange"in i))return Q.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?Q.min():s.readTime?Xe(s.readTime):Q.min()}(e);return this.listener.Er(n,r)}Ir(e){const n={};n.database=Fu(this.N),n.addTarget=function(i,s){let o;const a=s.target;return o=Lh(a)?{documents:JS(i,a)}:{query:ZS(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0?o.resumeToken=HS(i,s.resumeToken):s.snapshotVersion.compareTo(Q.min())>0&&(o.readTime=$u(i,s.snapshotVersion.toTimestamp())),o}(this.N,e);const r=a$(this.N,e);r&&(n.labels=r),this.wr(n)}Ar(e){const n={};n.database=Fu(this.N),n.removeTarget=e,this.wr(n)}}class X$ extends FT{constructor(e,n,r,i,s){super(e,"write_stream_connection_backoff","write_stream_idle",n,r,s),this.N=i,this.Rr=!1}get br(){return this.Rr}start(){this.Rr=!1,this.lastStreamToken=void 0,super.start()}mr(){this.Rr&&this.Pr([])}Tr(e){return this.nr.ji("Write",e)}onMessage(e){if(H(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Rr){this.rr.reset();const n=o$(e.writeResults,e.commitTime),r=Xe(e.commitTime);return this.listener.vr(r,n)}return H(!e.writeResults||e.writeResults.length===0),this.Rr=!0,this.listener.Vr()}Sr(){const e={};e.database=Fu(this.N),this.wr(e)}Pr(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>Hh(this.N,r))};this.wr(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J$ extends class{}{constructor(e,n,r){super(),this.credentials=e,this.nr=n,this.N=r,this.Dr=!1}Cr(){if(this.Dr)throw new b(I.FAILED_PRECONDITION,"The client has already been terminated.")}Li(e,n,r){return this.Cr(),this.credentials.getToken().then(i=>this.nr.Li(e,n,r,i)).catch(i=>{throw i.name==="FirebaseError"?(i.code===I.UNAUTHENTICATED&&this.credentials.invalidateToken(),i):new b(I.UNKNOWN,i.toString())})}Ki(e,n,r){return this.Cr(),this.credentials.getToken().then(i=>this.nr.Ki(e,n,r,i)).catch(i=>{throw i.name==="FirebaseError"?(i.code===I.UNAUTHENTICATED&&this.credentials.invalidateToken(),i):new b(I.UNKNOWN,i.toString())})}terminate(){this.Dr=!0}}class Z${constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.Nr=0,this.kr=null,this.$r=!0}Or(){this.Nr===0&&(this.Fr("Unknown"),this.kr=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.kr=null,this.Mr("Backend didn't respond within 10 seconds."),this.Fr("Offline"),Promise.resolve())))}Lr(e){this.state==="Online"?this.Fr("Unknown"):(this.Nr++,this.Nr>=1&&(this.Br(),this.Mr(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.Fr("Offline")))}set(e){this.Br(),this.Nr=0,e==="Online"&&(this.$r=!1),this.Fr(e)}Fr(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}Mr(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.$r?(De(n),this.$r=!1):N("OnlineStateTracker",n)}Br(){this.kr!==null&&(this.kr.cancel(),this.kr=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e2{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ur=[],this.qr=new Map,this.Kr=new Set,this.jr=[],this.Qr=s,this.Qr.Ti(o=>{r.enqueueAndForget(async()=>{si(this)&&(N("RemoteStore","Restarting streams for network reachability change."),await async function(a){const u=L(a);u.Kr.add(4),await Co(u),u.Wr.set("Unknown"),u.Kr.delete(4),await Hu(u)}(this))})}),this.Wr=new Z$(r,i)}}async function Hu(t){if(si(t))for(const e of t.jr)await e(!0)}async function Co(t){for(const e of t.jr)await e(!1)}function td(t,e){const n=L(t);n.qr.has(e.targetId)||(n.qr.set(e.targetId,e),my(n)?py(n):Ro(n).cr()&&fy(n,e))}function Wu(t,e){const n=L(t),r=Ro(n);n.qr.delete(e),r.cr()&&VT(n,e),n.qr.size===0&&(r.cr()?r.lr():si(n)&&n.Wr.set("Unknown"))}function fy(t,e){t.Gr.Y(e.targetId),Ro(t).Ir(e)}function VT(t,e){t.Gr.Y(e),Ro(t).Ar(e)}function py(t){t.Gr=new ZM({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Tt:e=>t.qr.get(e)||null}),Ro(t).start(),t.Wr.Or()}function my(t){return si(t)&&!Ro(t).ar()&&t.qr.size>0}function si(t){return L(t).Kr.size===0}function BT(t){t.Gr=void 0}async function t2(t){t.qr.forEach((e,n)=>{fy(t,e)})}async function n2(t,e){BT(t),my(t)?(t.Wr.Lr(e),py(t)):t.Wr.set("Unknown")}async function r2(t,e,n){if(t.Wr.set("Online"),e instanceof BS&&e.state===2&&e.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r.qr.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r.qr.delete(o),r.Gr.removeTarget(o))}(t,e)}catch(r){N("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await nd(t,r)}else if(e instanceof qh?t.Gr.rt(e):e instanceof VS?t.Gr.ft(e):t.Gr.ct(e),!n.isEqual(Q.min()))try{const r=await NT(t.localStore);n.compareTo(r)>=0&&await function(i,s){const o=i.Gr._t(s);return o.targetChanges.forEach((a,u)=>{if(a.resumeToken.approximateByteSize()>0){const l=i.qr.get(u);l&&i.qr.set(u,l.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach(a=>{const u=i.qr.get(a);if(!u)return;i.qr.set(a,u.withResumeToken(Ye.EMPTY_BYTE_STRING,u.snapshotVersion)),VT(i,a);const l=new ti(u.target,a,1,u.sequenceNumber);fy(i,l)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){N("RemoteStore","Failed to raise snapshot:",r),await nd(t,r)}}async function nd(t,e,n){if(!Gi(e))throw e;t.Kr.add(1),await Co(t),t.Wr.set("Offline"),n||(n=()=>NT(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{N("RemoteStore","Retrying IndexedDB access"),await n(),t.Kr.delete(1),await Hu(t)})}function jT(t,e){return e().catch(n=>nd(t,n,e))}async function Ao(t){const e=L(t),n=oi(e);let r=e.Ur.length>0?e.Ur[e.Ur.length-1].batchId:-1;for(;i2(e);)try{const i=await L$(e.localStore,r);if(i===null){e.Ur.length===0&&n.lr();break}r=i.batchId,s2(e,i)}catch(i){await nd(e,i)}zT(e)&&qT(e)}function i2(t){return si(t)&&t.Ur.length<10}function s2(t,e){t.Ur.push(e);const n=oi(t);n.cr()&&n.br&&n.Pr(e.mutations)}function zT(t){return si(t)&&!oi(t).ar()&&t.Ur.length>0}function qT(t){oi(t).start()}async function o2(t){oi(t).Sr()}async function a2(t){const e=oi(t);for(const n of t.Ur)e.Pr(n.mutations)}async function u2(t,e,n){const r=t.Ur.shift(),i=Yg.from(r,e,n);await jT(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Ao(t)}async function l2(t,e){e&&oi(t).br&&await async function(n,r){if(i=r.code,MS(i)&&i!==I.ABORTED){const s=n.Ur.shift();oi(n).hr(),await jT(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,r)),await Ao(n)}var i}(t,e),zT(t)&&qT(t)}async function gy(t,e){const n=L(t);e?(n.Kr.delete(2),await Hu(n)):e||(n.Kr.add(2),await Co(n),n.Wr.set("Unknown"))}function Ro(t){return t.zr||(t.zr=function(e,n,r){const i=L(e);return i.Cr(),new Y$(n,i.nr,i.credentials,i.N,r)}(t.datastore,t.asyncQueue,{Si:t2.bind(null,t),Ci:n2.bind(null,t),Er:r2.bind(null,t)}),t.jr.push(async e=>{e?(t.zr.hr(),my(t)?py(t):t.Wr.set("Unknown")):(await t.zr.stop(),BT(t))})),t.zr}function oi(t){return t.Hr||(t.Hr=function(e,n,r){const i=L(e);return i.Cr(),new X$(n,i.nr,i.credentials,i.N,r)}(t.datastore,t.asyncQueue,{Si:o2.bind(null,t),Ci:l2.bind(null,t),Vr:a2.bind(null,t),vr:u2.bind(null,t)}),t.jr.push(async e=>{e?(t.Hr.hr(),await Ao(t)):(await t.Hr.stop(),t.Ur.length>0&&(N("RemoteStore",`Stopping write stream with ${t.Ur.length} pending writes`),t.Ur=[]))})),t.Hr}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yy{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Ke,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new yy(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new b(I.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function No(t,e){if(De("AsyncQueue",`${e}: ${t}`),Gi(t))return new b(I.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Po{constructor(e){this.comparator=e?(n,r)=>e(n,r)||j.comparator(n.key,r.key):(n,r)=>j.comparator(n.key,r.key),this.keyedMap=Hg(),this.sortedSet=new Be(this.comparator)}static emptySet(e){return new Po(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Po)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Po;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HT{constructor(){this.Jr=new Be(j.comparator)}track(e){const n=e.doc.key,r=this.Jr.get(n);r?e.type!==0&&r.type===3?this.Jr=this.Jr.insert(n,e):e.type===3&&r.type!==1?this.Jr=this.Jr.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Jr=this.Jr.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Jr=this.Jr.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Jr=this.Jr.remove(n):e.type===1&&r.type===2?this.Jr=this.Jr.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Jr=this.Jr.insert(n,{type:2,doc:e.doc}):q():this.Jr=this.Jr.insert(n,e)}Yr(){const e=[];return this.Jr.inorderTraversal((n,r)=>{e.push(r)}),e}}class xo{constructor(e,n,r,i,s,o,a,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u}static fromInitialDocuments(e,n,r,i){const s=[];return n.forEach(o=>{s.push({type:0,doc:o})}),new xo(e,n,Po.emptySet(n),s,r,i,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Nu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c2{constructor(){this.Xr=void 0,this.listeners=[]}}class h2{constructor(){this.queries=new To(e=>ES(e),Nu),this.onlineState="Unknown",this.Zr=new Set}}async function vy(t,e){const n=L(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new c2),i)try{s.Xr=await n.onListen(r)}catch(o){const a=No(o,`Initialization of query '${jg(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.eo(n.onlineState),s.Xr&&e.no(s.Xr)&&_y(n)}async function wy(t,e){const n=L(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function d2(t,e){const n=L(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.no(i)&&(r=!0);o.Xr=i}}r&&_y(n)}function f2(t,e,n){const r=L(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function _y(t){t.Zr.forEach(e=>{e.next()})}class Ey{constructor(e,n,r){this.query=e,this.so=n,this.io=!1,this.ro=null,this.onlineState="Unknown",this.options=r||{}}no(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new xo(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let n=!1;return this.io?this.oo(e)&&(this.so.next(e),n=!0):this.ao(e,this.onlineState)&&(this.co(e),n=!0),this.ro=e,n}onError(e){this.so.error(e)}eo(e){this.onlineState=e;let n=!1;return this.ro&&!this.io&&this.ao(this.ro,e)&&(this.co(this.ro),n=!0),n}ao(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.uo||!r)&&(!e.docs.isEmpty()||n==="Offline")}oo(e){if(e.docChanges.length>0)return!0;const n=this.ro&&this.ro.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}co(e){e=xo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.io=!0,this.so.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p2{constructor(e,n){this.payload=e,this.byteLength=n}ho(){return"metadata"in this.payload}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WT{constructor(e){this.N=e}zn(e){return zn(this.N,e)}Hn(e){return e.metadata.exists?YS(this.N,e.document,!1):Ie.newNoDocument(this.zn(e.metadata.name),this.Jn(e.metadata.readTime))}Jn(e){return Xe(e)}}class m2{constructor(e,n,r){this.lo=e,this.localStore=n,this.N=r,this.queries=[],this.documents=[],this.progress=GT(e)}fo(e){this.progress.bytesLoaded+=e.byteLength;let n=this.progress.documentsLoaded;return e.payload.namedQuery?this.queries.push(e.payload.namedQuery):e.payload.documentMetadata?(this.documents.push({metadata:e.payload.documentMetadata}),e.payload.documentMetadata.exists||++n):e.payload.document&&(this.documents[this.documents.length-1].document=e.payload.document,++n),n!==this.progress.documentsLoaded?(this.progress.documentsLoaded=n,Object.assign({},this.progress)):null}wo(e){const n=new Map,r=new WT(this.N);for(const i of e)if(i.metadata.queries){const s=r.zn(i.metadata.name);for(const o of i.metadata.queries){const a=(n.get(o)||ce()).add(s);n.set(o,a)}}return n}async complete(){const e=await $$(this.localStore,new WT(this.N),this.documents,this.lo.id),n=this.wo(this.documents);for(const r of this.queries)await U$(this.localStore,r,n.get(r.name));return this.progress.taskState="Success",new P$(Object.assign({},this.progress),e)}}function GT(t){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:t.totalDocuments,totalBytes:t.totalBytes}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KT{constructor(e){this.key=e}}class QT{constructor(e){this.key=e}}class YT{constructor(e,n){this.query=e,this._o=n,this.mo=null,this.current=!1,this.yo=ce(),this.mutatedKeys=ce(),this.po=IS(e),this.To=new Po(this.po)}get Eo(){return this._o}Io(e,n){const r=n?n.Ao:new HT,i=n?n.To:this.To;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const u=$h(this.query)&&i.size===this.query.limit?i.last():null,l=Uh(this.query)&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,h)=>{const d=i.get(c),g=Pu(this.query,h)?h:null,y=!!d&&this.mutatedKeys.has(d.key),_=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let f=!1;d&&g?d.data.isEqual(g.data)?y!==_&&(r.track({type:3,doc:g}),f=!0):this.Ro(d,g)||(r.track({type:2,doc:g}),f=!0,(u&&this.po(g,u)>0||l&&this.po(g,l)<0)&&(a=!0)):!d&&g?(r.track({type:0,doc:g}),f=!0):d&&!g&&(r.track({type:1,doc:d}),f=!0,(u||l)&&(a=!0)),f&&(g?(o=o.add(g),s=_?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),$h(this.query)||Uh(this.query))for(;o.size>this.query.limit;){const c=$h(this.query)?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{To:o,Ao:r,Ln:a,mutatedKeys:s}}Ro(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.To;this.To=e.To,this.mutatedKeys=e.mutatedKeys;const s=e.Ao.Yr();s.sort((l,c)=>function(h,d){const g=y=>{switch(y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return q()}};return g(h)-g(d)}(l.type,c.type)||this.po(l.doc,c.doc)),this.bo(r);const o=n?this.Po():[],a=this.yo.size===0&&this.current?1:0,u=a!==this.mo;return this.mo=a,s.length!==0||u?{snapshot:new xo(this.query,e.To,i,s,e.mutatedKeys,a===0,u,!1),vo:o}:{vo:o}}eo(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({To:this.To,Ao:new HT,mutatedKeys:this.mutatedKeys,Ln:!1},!1)):{vo:[]}}Vo(e){return!this._o.has(e)&&!!this.To.has(e)&&!this.To.get(e).hasLocalMutations}bo(e){e&&(e.addedDocuments.forEach(n=>this._o=this._o.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this._o=this._o.delete(n)),this.current=e.current)}Po(){if(!this.current)return[];const e=this.yo;this.yo=ce(),this.To.forEach(r=>{this.Vo(r.key)&&(this.yo=this.yo.add(r.key))});const n=[];return e.forEach(r=>{this.yo.has(r)||n.push(new QT(r))}),this.yo.forEach(r=>{e.has(r)||n.push(new KT(r))}),n}So(e){this._o=e.Gn,this.yo=ce();const n=this.Io(e.documents);return this.applyChanges(n,!0)}Do(){return xo.fromInitialDocuments(this.query,this.To,this.mutatedKeys,this.mo===0)}}class g2{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class y2{constructor(e){this.key=e,this.Co=!1}}class v2{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.No={},this.xo=new To(a=>ES(a),Nu),this.ko=new Map,this.$o=new Set,this.Oo=new Be(j.comparator),this.Fo=new Map,this.Mo=new oy,this.Lo={},this.Bo=new Map,this.Uo=Qi.ie(),this.onlineState="Unknown",this.qo=void 0}get isPrimaryClient(){return this.qo===!0}}async function w2(t,e){const n=Cy(t);let r,i;const s=n.xo.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.Do();else{const o=await ko(n.localStore,fn(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await Iy(n,e,r,a==="current"),n.isPrimaryClient&&td(n.remoteStore,o)}return i}async function Iy(t,e,n,r){t.Ko=(c,h,d)=>async function(g,y,_,f){let p=y.view.Io(_);p.Ln&&(p=await Xh(g.localStore,y.query,!1).then(({documents:v})=>y.view.Io(v,p)));const m=f&&f.targetChanges.get(y.targetId),w=y.view.applyChanges(p,g.isPrimaryClient,m);return ky(g,y.targetId,w.vo),w.snapshot}(t,c,h,d);const i=await Xh(t.localStore,e,!0),s=new YT(e,i.Gn),o=s.Io(i.documents),a=Mu.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline"),u=s.applyChanges(o,t.isPrimaryClient,a);ky(t,n,u.vo);const l=new g2(e,n,s);return t.xo.set(e,l),t.ko.has(n)?t.ko.get(n).push(e):t.ko.set(n,[e]),u.snapshot}async function _2(t,e){const n=L(t),r=n.xo.get(e),i=n.ko.get(r.targetId);if(i.length>1)return n.ko.set(r.targetId,i.filter(s=>!Nu(s,e))),void n.xo.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await bo(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),Wu(n.remoteStore,r.targetId),Oo(n,r.targetId)}).catch(Yi)):(Oo(n,r.targetId),await bo(n.localStore,r.targetId,!0))}async function E2(t,e,n){const r=Ay(t);try{const i=await function(s,o){const a=L(s),u=Qe.now(),l=o.reduce((h,d)=>h.add(d.key),ce());let c;return a.persistence.runTransaction("Locally write mutations","readwrite",h=>a.Qn.Pn(h,l).next(d=>{c=d;const g=[];for(const y of o){const _=WM(y,c.get(y.key));_!=null&&g.push(new Zr(y.key,_,pS(_.value.mapValue),Me.exists(!0)))}return a.In.addMutationBatch(h,u,g,o)})).then(h=>(h.applyToLocalDocumentSet(c),{batchId:h.batchId,changes:c}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,o,a){let u=s.Lo[s.currentUser.toKey()];u||(u=new Be(J)),u=u.insert(o,a),s.Lo[s.currentUser.toKey()]=u}(r,i.batchId,n),await fr(r,i.changes),await Ao(r.remoteStore)}catch(i){const s=No(i,"Failed to persist write");n.reject(s)}}async function XT(t,e){const n=L(t);try{const r=await D$(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Fo.get(s);o&&(H(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Co=!0:i.modifiedDocuments.size>0?H(o.Co):i.removedDocuments.size>0&&(H(o.Co),o.Co=!1))}),await fr(n,r,e)}catch(r){await Yi(r)}}function JT(t,e,n){const r=L(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.xo.forEach((s,o)=>{const a=o.view.eo(e);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=L(s);a.onlineState=o;let u=!1;a.queries.forEach((l,c)=>{for(const h of c.listeners)h.eo(o)&&(u=!0)}),u&&_y(a)}(r.eventManager,e),i.length&&r.No.Er(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function I2(t,e,n){const r=L(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Fo.get(e),s=i&&i.key;if(s){let o=new Be(j.comparator);o=o.insert(s,Ie.newNoDocument(s,Q.min()));const a=ce().add(s),u=new Lu(Q.min(),new Map,new Ce(J),o,a);await XT(r,u),r.Oo=r.Oo.remove(s),r.Fo.delete(e),by(r)}else await bo(r.localStore,e,!1).then(()=>Oo(r,e,n)).catch(Yi)}async function S2(t,e){const n=L(t),r=e.batch.batchId;try{const i=await O$(n.localStore,e);Ty(n,r,null),Sy(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await fr(n,i)}catch(i){await Yi(i)}}async function T2(t,e,n){const r=L(t);try{const i=await function(s,o){const a=L(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let l;return a.In.lookupMutationBatch(u,o).next(c=>(H(c!==null),l=c.keys(),a.In.removeMutationBatch(u,c))).next(()=>a.In.performConsistencyCheck(u)).next(()=>a.Qn.Pn(u,l))})}(r.localStore,e);Ty(r,e,n),Sy(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await fr(r,i)}catch(i){await Yi(i)}}async function k2(t,e){const n=L(t);si(n.remoteStore)||N("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const r=await function(s){const o=L(s);return o.persistence.runTransaction("Get highest unacknowledged batch id","readonly",a=>o.In.getHighestUnacknowledgedBatchId(a))}(n.localStore);if(r===-1)return void e.resolve();const i=n.Bo.get(r)||[];i.push(e),n.Bo.set(r,i)}catch(r){const i=No(r,"Initialization of waitForPendingWrites() operation failed");e.reject(i)}}function Sy(t,e){(t.Bo.get(e)||[]).forEach(n=>{n.resolve()}),t.Bo.delete(e)}function Ty(t,e,n){const r=L(t);let i=r.Lo[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Lo[r.currentUser.toKey()]=i}}function Oo(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.ko.get(e))t.xo.delete(r),n&&t.No.jo(r,n);t.ko.delete(e),t.isPrimaryClient&&t.Mo.cs(e).forEach(r=>{t.Mo.containsKey(r)||ZT(t,r)})}function ZT(t,e){t.$o.delete(e.path.canonicalString());const n=t.Oo.get(e);n!==null&&(Wu(t.remoteStore,n),t.Oo=t.Oo.remove(e),t.Fo.delete(n),by(t))}function ky(t,e,n){for(const r of n)r instanceof KT?(t.Mo.addReference(r.key,e),b2(t,r)):r instanceof QT?(N("SyncEngine","Document no longer in limbo: "+r.key),t.Mo.removeReference(r.key,e),t.Mo.containsKey(r.key)||ZT(t,r.key)):q()}function b2(t,e){const n=e.key,r=n.path.canonicalString();t.Oo.get(n)||t.$o.has(r)||(N("SyncEngine","New document in limbo: "+n),t.$o.add(r),by(t))}function by(t){for(;t.$o.size>0&&t.Oo.size<t.maxConcurrentLimboResolutions;){const e=t.$o.values().next().value;t.$o.delete(e);const n=new j(ie.fromString(e)),r=t.Uo.next();t.Fo.set(r,new y2(n)),t.Oo=t.Oo.insert(n,r),td(t.remoteStore,new ti(fn(co(n.path)),r,2,en.T))}}async function fr(t,e,n){const r=L(t),i=[],s=[],o=[];r.xo.isEmpty()||(r.xo.forEach((a,u)=>{o.push(r.Ko(u,e,n).then(l=>{if(l){r.isPrimaryClient&&r.sharedClientState.updateQueryState(u.targetId,l.fromCache?"not-current":"current"),i.push(l);const c=sy.kn(u.targetId,l);s.push(c)}}))}),await Promise.all(o),r.No.Er(i),await async function(a,u){const l=L(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",c=>S.forEach(u,h=>S.forEach(h.Nn,d=>l.persistence.referenceDelegate.addReference(c,h.targetId,d)).next(()=>S.forEach(h.xn,d=>l.persistence.referenceDelegate.removeReference(c,h.targetId,d)))))}catch(c){if(!Gi(c))throw c;N("LocalStore","Failed to update sequence numbers: "+c)}for(const c of u){const h=c.targetId;if(!c.fromCache){const d=l.Un.get(h),g=d.snapshotVersion,y=d.withLastLimboFreeSnapshotVersion(g);l.Un=l.Un.insert(h,y)}}}(r.localStore,s))}async function C2(t,e){const n=L(t);if(!n.currentUser.isEqual(e)){N("SyncEngine","User change. New user:",e.toKey());const r=await RT(n.localStore,e);n.currentUser=e,function(i,s){i.Bo.forEach(o=>{o.forEach(a=>{a.reject(new b(I.CANCELLED,s))})}),i.Bo.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await fr(n,r.Wn)}}function A2(t,e){const n=L(t),r=n.Fo.get(e);if(r&&r.Co)return ce().add(r.key);{let i=ce();const s=n.ko.get(e);if(!s)return i;for(const o of s){const a=n.xo.get(o);i=i.unionWith(a.view.Eo)}return i}}async function R2(t,e){const n=L(t),r=await Xh(n.localStore,e.query,!0),i=e.view.So(r);return n.isPrimaryClient&&ky(n,e.targetId,i.vo),i}async function N2(t){const e=L(t);return OT(e.localStore).then(n=>fr(e,n))}async function P2(t,e,n,r){const i=L(t),s=await function(o,a){const u=L(o),l=L(u.In);return u.persistence.runTransaction("Lookup mutation documents","readonly",c=>l.Xt(c,a).next(h=>h?u.Qn.Pn(c,h):S.resolve(null)))}(i.localStore,e);s!==null?(n==="pending"?await Ao(i.remoteStore):n==="acknowledged"||n==="rejected"?(Ty(i,e,r||null),Sy(i,e),function(o,a){L(L(o).In).te(a)}(i.localStore,e)):q(),await fr(i,s)):N("SyncEngine","Cannot apply mutation batch with id: "+e)}async function x2(t,e){const n=L(t);if(Cy(n),Ay(n),e===!0&&n.qo!==!0){const r=n.sharedClientState.getAllActiveQueryTargets(),i=await ek(n,r.toArray());n.qo=!0,await gy(n.remoteStore,!0);for(const s of i)td(n.remoteStore,s)}else if(e===!1&&n.qo!==!1){const r=[];let i=Promise.resolve();n.ko.forEach((s,o)=>{n.sharedClientState.isLocalQueryTarget(o)?r.push(o):i=i.then(()=>(Oo(n,o),bo(n.localStore,o,!0))),Wu(n.remoteStore,o)}),await i,await ek(n,r),function(s){const o=L(s);o.Fo.forEach((a,u)=>{Wu(o.remoteStore,u)}),o.Mo.us(),o.Fo=new Map,o.Oo=new Be(j.comparator)}(n),n.qo=!1,await gy(n.remoteStore,!1)}}async function ek(t,e,n){const r=L(t),i=[],s=[];for(const o of e){let a;const u=r.ko.get(o);if(u&&u.length!==0){a=await ko(r.localStore,fn(u[0]));for(const l of u){const c=r.xo.get(l),h=await R2(r,c);h.snapshot&&s.push(h.snapshot)}}else{const l=await xT(r.localStore,o);a=await ko(r.localStore,l),await Iy(r,tk(l),o,!1)}i.push(a)}return r.No.Er(s),i}function tk(t){return wS(t.path,t.collectionGroup,t.orderBy,t.filters,t.limit,"F",t.startAt,t.endAt)}function O2(t){const e=L(t);return L(L(e.localStore).persistence).pn()}async function D2(t,e,n,r){const i=L(t);if(i.qo)N("SyncEngine","Ignoring unexpected query state notification.");else if(i.ko.has(e))switch(n){case"current":case"not-current":{const s=await OT(i.localStore),o=Lu.createSynthesizedRemoteEventForCurrentChange(e,n==="current");await fr(i,s,o);break}case"rejected":await bo(i.localStore,e,!0),Oo(i,e,r);break;default:q()}}async function L2(t,e,n){const r=Cy(t);if(r.qo){for(const i of e){if(r.ko.has(i)){N("SyncEngine","Adding an already active target "+i);continue}const s=await xT(r.localStore,i),o=await ko(r.localStore,s);await Iy(r,tk(s),o.targetId,!1),td(r.remoteStore,o)}for(const i of n)r.ko.has(i)&&await bo(r.localStore,i,!1).then(()=>{Wu(r.remoteStore,i),Oo(r,i)}).catch(Yi)}}function Cy(t){const e=L(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=XT.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=A2.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=I2.bind(null,e),e.No.Er=d2.bind(null,e.eventManager),e.No.jo=f2.bind(null,e.eventManager),e}function Ay(t){const e=L(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=S2.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=T2.bind(null,e),e}function M2(t,e,n){const r=L(t);(async function(i,s,o){try{const a=await s.getMetadata();if(await function(h,d){const g=L(h),y=Xe(d.createTime);return g.persistence.runTransaction("hasNewerBundle","readonly",_=>g.Je.getBundleMetadata(_,d.id)).then(_=>!!_&&_.createTime.compareTo(y)>=0)}(i.localStore,a))return await s.close(),void o._completeWith(function(h){return{taskState:"Success",documentsLoaded:h.totalDocuments,bytesLoaded:h.totalBytes,totalDocuments:h.totalDocuments,totalBytes:h.totalBytes}}(a));o._updateProgress(GT(a));const u=new m2(a,i.localStore,s.N);let l=await s.Qo();for(;l;){const h=await u.fo(l);h&&o._updateProgress(h),l=await s.Qo()}const c=await u.complete();await fr(i,c.En,void 0),await function(h,d){const g=L(h);return g.persistence.runTransaction("Save bundle","readwrite",y=>g.Je.saveBundleMetadata(y,d))}(i.localStore,a),o._completeWith(c.progress)}catch(a){Su("SyncEngine",`Loading bundle failed with ${a}`),o._failWith(a)}})(r,e,n).then(()=>{r.sharedClientState.notifyBundleLoaded()})}class nk{constructor(){this.synchronizeTabs=!1}async initialize(e){this.N=qu(e.databaseInfo.databaseId),this.sharedClientState=this.Wo(e),this.persistence=this.Go(e),await this.persistence.start(),this.gcScheduler=this.zo(e),this.localStore=this.Ho(e)}zo(e){return null}Ho(e){return AT(this.persistence,new CT,e.initialUser,this.N)}Go(e){return new q$(ay.Ns,this.N)}Wo(e){return new MT}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class rk extends nk{constructor(e,n,r){super(),this.Jo=e,this.cacheSizeBytes=n,this.forceOwnership=r,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await M$(this.localStore),await this.Jo.initialize(this,e),await Ay(this.Jo.syncEngine),await Ao(this.Jo.remoteStore),await this.persistence.nn(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(this.localStore),Promise.resolve()))}Ho(e){return AT(this.persistence,new CT,e.initialUser,this.N)}zo(e){const n=this.persistence.referenceDelegate.garbageCollector;return new k$(n,e.asyncQueue)}Go(e){const n=iy(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?Wt.withCacheSize(this.cacheSizeBytes):Wt.DEFAULT;return new ry(this.synchronizeTabs,n,e.clientId,r,e.asyncQueue,UT(),ed(),this.N,this.sharedClientState,!!this.forceOwnership)}Wo(e){return new MT}}class $2 extends rk{constructor(e,n){super(e,n,!1),this.Jo=e,this.cacheSizeBytes=n,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const n=this.Jo.syncEngine;this.sharedClientState instanceof hy&&(this.sharedClientState.syncEngine={_i:P2.bind(null,n),mi:D2.bind(null,n),gi:L2.bind(null,n),pn:O2.bind(null,n),wi:N2.bind(null,n)},await this.sharedClientState.start()),await this.persistence.nn(async r=>{await x2(this.Jo.syncEngine,r),this.gcScheduler&&(r&&!this.gcScheduler.started?this.gcScheduler.start(this.localStore):r||this.gcScheduler.stop())})}Wo(e){const n=UT();if(!hy.bt(n))throw new b(I.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const r=iy(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new hy(n,e.asyncQueue,r,e.clientId,e.initialUser)}}class Ry{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>JT(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=C2.bind(null,this.syncEngine),await gy(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new h2}createDatastore(e){const n=qu(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new Q$(i));var i;return function(s,o,a){return new J$(s,o,a)}(e.credentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,i=e.asyncQueue,s=a=>JT(this.syncEngine,a,0),o=$T.bt()?new $T:new W$,new e2(n,r,i,s,o);var n,r,i,s,o}createSyncEngine(e,n){return function(r,i,s,o,a,u,l){const c=new v2(r,i,s,o,a,u);return l&&(c.qo=!0),c}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=L(e);N("RemoteStore","RemoteStore shutting down."),n.Kr.add(5),await Co(n),n.Qr.shutdown(),n.Wr.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ik(t,e=10240){let n=0;return{async read(){if(n<t.byteLength){const r={value:t.slice(n,n+e),done:!1};return n+=e,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.reject("unimplemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class rd{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Yo(this.observer.next,e)}error(e){this.observer.error?this.Yo(this.observer.error,e):console.error("Uncaught Error in snapshot listener:",e)}Xo(){this.muted=!0}Yo(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U2{constructor(e,n){this.Zo=e,this.N=n,this.metadata=new Ke,this.buffer=new Uint8Array,this.ta=new TextDecoder("utf-8"),this.ea().then(r=>{r&&r.ho()?this.metadata.resolve(r.payload.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(r==null?void 0:r.payload)}`))},r=>this.metadata.reject(r))}close(){return this.Zo.cancel()}async getMetadata(){return this.metadata.promise}async Qo(){return await this.getMetadata(),this.ea()}async ea(){const e=await this.na();if(e===null)return null;const n=this.ta.decode(e),r=Number(n);isNaN(r)&&this.sa(`length string (${n}) is not valid number`);const i=await this.ia(r);return new p2(JSON.parse(i),e.length+r)}ra(){return this.buffer.findIndex(e=>e==="{".charCodeAt(0))}async na(){for(;this.ra()<0&&!await this.oa(););if(this.buffer.length===0)return null;const e=this.ra();e<0&&this.sa("Reached the end of bundle when a length string is expected.");const n=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),n}async ia(e){for(;this.buffer.length<e;)await this.oa()&&this.sa("Reached the end of bundle when more is expected.");const n=this.ta.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),n}sa(e){throw this.Zo.cancel(),new Error(`Invalid bundle format: ${e}`)}async oa(){const e=await this.Zo.read();if(!e.done){const n=new Uint8Array(this.buffer.length+e.value.length);n.set(this.buffer),n.set(e.value,this.buffer.length),this.buffer=n}return e.done}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F2{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new b(I.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const n=await async function(r,i){const s=L(r),o=Fu(s.N)+"/documents",a={documents:i.map(h=>Uu(s.N,h))},u=await s.Ki("BatchGetDocuments",o,a),l=new Map;u.forEach(h=>{const d=i$(s.N,h);l.set(d.key.toString(),d)});const c=[];return i.forEach(h=>{const d=l.get(h.toString());H(!!d),c.push(d)}),c}(this.datastore,e);return n.forEach(r=>this.recordVersion(r)),n}set(e,n){this.write(n.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,n){try{this.write(n.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastWriteError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new Du(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const e=this.readVersions;this.mutations.forEach(n=>{e.delete(n.key.toString())}),e.forEach((n,r)=>{const i=j.fromPath(r);this.mutations.push(new qg(i,this.precondition(i)))}),await async function(n,r){const i=L(n),s=Fu(i.N)+"/documents",o={writes:r.map(a=>Hh(i.N,a))};await i.Li("Commit",s,o)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let n;if(e.isFoundDocument())n=e.version;else{if(!e.isNoDocument())throw q();n=Q.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!n.isEqual(r))throw new b(I.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),n)}precondition(e){const n=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&n?Me.updateTime(n):Me.none()}preconditionForUpdate(e){const n=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&n){if(n.isEqual(Q.min()))throw new b(I.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return Me.updateTime(n)}return Me.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
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
 */class V2{constructor(e,n,r,i){this.asyncQueue=e,this.datastore=n,this.updateFunction=r,this.deferred=i,this.aa=5,this.rr=new dy(this.asyncQueue,"transaction_retry")}run(){this.aa-=1,this.ca()}ca(){this.rr.Xi(async()=>{const e=new F2(this.datastore),n=this.ua(e);n&&n.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(i=>{this.ha(i)}))}).catch(r=>{this.ha(r)})})}ua(e){try{const n=this.updateFunction(e);return!ji(n)&&n.catch&&n.then?n:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(n){return this.deferred.reject(n),null}}ha(e){this.aa>0&&this.la(e)?(this.aa-=1,this.asyncQueue.enqueueAndForget(()=>(this.ca(),Promise.resolve()))):this.deferred.reject(e)}la(e){if(e.name==="FirebaseError"){const n=e.code;return n==="aborted"||n==="failed-precondition"||!MS(n)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B2{constructor(e,n,r){this.credentials=e,this.asyncQueue=n,this.databaseInfo=r,this.user=ht.UNAUTHENTICATED,this.clientId=sS.I(),this.credentialListener=()=>Promise.resolve(),this.credentials.start(n,async i=>{N("FirestoreClient","Received user=",i.uid),await this.credentialListener(i),this.user=i})}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,credentials:this.credentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.credentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new b(I.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ke;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.credentials.shutdown(),e.resolve()}catch(n){const r=No(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function sk(t,e){t.asyncQueue.verifyOperationInProgress(),N("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await RT(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function ok(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Ny(t);N("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>async function(s,o){const a=L(s);a.asyncQueue.verifyOperationInProgress(),N("RemoteStore","RemoteStore received new credentials");const u=si(a);a.Kr.add(3),await Co(a),u&&a.Wr.set("Unknown"),await a.remoteSyncer.handleCredentialChange(o),a.Kr.delete(3),await Hu(a)}(e.remoteStore,i)),t.onlineComponents=e}async function Ny(t){return t.offlineComponents||(N("FirestoreClient","Using default OfflineComponentProvider"),await sk(t,new nk)),t.offlineComponents}async function id(t){return t.onlineComponents||(N("FirestoreClient","Using default OnlineComponentProvider"),await ok(t,new Ry)),t.onlineComponents}function ak(t){return Ny(t).then(e=>e.persistence)}function Py(t){return Ny(t).then(e=>e.localStore)}function uk(t){return id(t).then(e=>e.remoteStore)}function xy(t){return id(t).then(e=>e.syncEngine)}async function Do(t){const e=await id(t),n=e.eventManager;return n.onListen=w2.bind(null,e.syncEngine),n.onUnlisten=_2.bind(null,e.syncEngine),n}function j2(t){return t.asyncQueue.enqueue(async()=>{const e=await ak(t),n=await uk(t);return e.setNetworkEnabled(!0),function(r){const i=L(r);return i.Kr.delete(0),Hu(i)}(n)})}function z2(t){return t.asyncQueue.enqueue(async()=>{const e=await ak(t),n=await uk(t);return e.setNetworkEnabled(!1),async function(r){const i=L(r);i.Kr.add(0),await Co(i),i.Wr.set("Offline")}(n)})}function q2(t,e){const n=new Ke;return t.asyncQueue.enqueueAndForget(async()=>async function(r,i,s){try{const o=await function(a,u){const l=L(a);return l.persistence.runTransaction("read document","readonly",c=>l.Qn.An(c,u))}(r,i);o.isFoundDocument()?s.resolve(o):o.isNoDocument()?s.resolve(null):s.reject(new b(I.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(o){const a=No(o,`Failed to get document '${i} from cache`);s.reject(a)}}(await Py(t),e,n)),n.promise}function lk(t,e,n={}){const r=new Ke;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,u){const l=new rd({next:h=>{s.enqueueAndForget(()=>wy(i,c));const d=h.docs.has(o);!d&&h.fromCache?u.reject(new b(I.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&h.fromCache&&a&&a.source==="server"?u.reject(new b(I.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(h)},error:h=>u.reject(h)}),c=new Ey(co(o.path),l,{includeMetadataChanges:!0,uo:!0});return vy(i,c)}(await Do(t),t.asyncQueue,e,n,r)),r.promise}function H2(t,e){const n=new Ke;return t.asyncQueue.enqueueAndForget(async()=>async function(r,i,s){try{const o=await Xh(r,i,!0),a=new YT(i,o.Gn),u=a.Io(o.documents),l=a.applyChanges(u,!1);s.resolve(l.snapshot)}catch(o){const a=No(o,`Failed to execute query '${i} against cache`);s.reject(a)}}(await Py(t),e,n)),n.promise}function ck(t,e,n={}){const r=new Ke;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,u){const l=new rd({next:h=>{s.enqueueAndForget(()=>wy(i,c)),h.fromCache&&a.source==="server"?u.reject(new b(I.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(h)},error:h=>u.reject(h)}),c=new Ey(o,l,{includeMetadataChanges:!0,uo:!0});return vy(i,c)}(await Do(t),t.asyncQueue,e,n,r)),r.promise}function W2(t,e){const n=new rd(e);return t.asyncQueue.enqueueAndForget(async()=>function(r,i){L(r).Zr.add(i),i.next()}(await Do(t),n)),()=>{n.Xo(),t.asyncQueue.enqueueAndForget(async()=>function(r,i){L(r).Zr.delete(i)}(await Do(t),n))}}function G2(t,e){const n=new Ke;return t.asyncQueue.enqueueAndForget(async()=>{const r=await function(i){return id(i).then(s=>s.datastore)}(t);new V2(t.asyncQueue,r,e,n).run()}),n.promise}function K2(t,e,n,r){const i=function(s,o){let a;return a=typeof s=="string"?new TextEncoder().encode(s):s,function(u,l){return new U2(u,l)}(function(u,l){if(u instanceof Uint8Array)return ik(u,l);if(u instanceof ArrayBuffer)return ik(new Uint8Array(u),l);if(u instanceof ReadableStream)return u.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(a),o)}(n,qu(e));t.asyncQueue.enqueueAndForget(async()=>{M2(await xy(t),i,r)})}function Q2(t,e){return t.asyncQueue.enqueue(async()=>function(n,r){const i=L(n);return i.persistence.runTransaction("Get named query","readonly",s=>i.Je.getNamedQuery(s,r))}(await Py(t),e))}class Y2{constructor(e,n,r,i,s,o,a,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=u}}class Lo{constructor(e,n){this.projectId=e,this.database=n||"(default)"}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Lo&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hk=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oy(t,e,n){if(!n)throw new b(I.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function dk(t,e,n,r){if(e===!0&&r===!0)throw new b(I.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function fk(t){if(!j.isDocumentKey(t))throw new b(I.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function pk(t){if(j.isDocumentKey(t))throw new b(I.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function sd(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":q()}function re(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new b(I.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=sd(t);throw new b(I.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function mk(t,e){if(e<=0)throw new b(I.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gk{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new b(I.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new b(I.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,dk("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gu{constructor(e,n){this._credentials=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new gk({}),this._settingsFrozen=!1,e instanceof Lo?this._databaseId=e:(this._app=e,this._databaseId=function(r){if(!Object.prototype.hasOwnProperty.apply(r.options,["projectId"]))throw new b(I.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Lo(r.options.projectId)}(e))}get app(){if(!this._app)throw new b(I.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new b(I.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new gk(e),e.credentials!==void 0&&(this._credentials=function(n){if(!n)return new _M;switch(n.type){case"gapi":const r=n.client;return H(!(typeof r!="object"||r===null||!r.auth||!r.auth.getAuthHeaderValueForFirstParty)),new TM(r,n.sessionIndex||"0",n.iamToken||null);case"provider":return n.client;default:throw new b(I.INVALID_ARGUMENT,"makeCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=hk.get(e);n&&(N("ComponentProvider","Removing Datastore"),hk.delete(e),n.terminate())}(this),Promise.resolve()}}function X2(t,e,n,r={}){var i;const s=(t=re(t,Gu))._getSettings();if(s.host!=="firestore.googleapis.com"&&s.host!==e&&Su("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},s),{host:`${e}:${n}`,ssl:!1})),r.mockUserToken){let o,a;if(typeof r.mockUserToken=="string")o=r.mockUserToken,a=ht.MOCK_USER;else{o=d1(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new b(I.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new ht(u)}t._credentials=new EM(new iS(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Hn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new we(this.firestore,e,this._key)}}class Tt{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Tt(this.firestore,e,this._query)}}class Hn extends Tt{constructor(e,n,r){super(e,n,co(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new we(this.firestore,null,new j(e))}withConverter(e){return new Hn(this.firestore,e,this._path)}}function yk(t,e,...n){if(t=B(t),Oy("collection","path",e),t instanceof Gu){const r=ie.fromString(e,...n);return pk(r),new Hn(t,null,r)}{if(!(t instanceof we||t instanceof Hn))throw new b(I.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ie.fromString(e,...n));return pk(r),new Hn(t.firestore,null,r)}}function J2(t,e){if(t=re(t,Gu),Oy("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new b(I.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new Tt(t,null,function(n){return new cr(ie.emptyPath(),n)}(e))}function od(t,e,...n){if(t=B(t),arguments.length===1&&(e=sS.I()),Oy("doc","path",e),t instanceof Gu){const r=ie.fromString(e,...n);return fk(r),new we(t,null,new j(r))}{if(!(t instanceof we||t instanceof Hn))throw new b(I.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ie.fromString(e,...n));return fk(r),new we(t.firestore,t instanceof Hn?t.converter:null,new j(r))}}function vk(t,e){return t=B(t),e=B(e),(t instanceof we||t instanceof Hn)&&(e instanceof we||e instanceof Hn)&&t.firestore===e.firestore&&t.path===e.path&&t.converter===e.converter}function wk(t,e){return t=B(t),e=B(e),t instanceof Tt&&e instanceof Tt&&t.firestore===e.firestore&&Nu(t._query,e._query)&&t.converter===e.converter}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z2{constructor(){this.fa=Promise.resolve(),this.da=[],this.wa=!1,this._a=[],this.ma=null,this.ga=!1,this.ya=!1,this.pa=[],this.rr=new dy(this,"async_queue_retry"),this.Ta=()=>{const n=ed();n&&N("AsyncQueue","Visibility state changed to "+n.visibilityState),this.rr.tr()};const e=ed();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Ta)}get isShuttingDown(){return this.wa}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Ea(),this.Ia(e)}enterRestrictedMode(e){if(!this.wa){this.wa=!0,this.ya=e||!1;const n=ed();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Ta)}}enqueue(e){if(this.Ea(),this.wa)return new Promise(()=>{});const n=new Ke;return this.Ia(()=>this.wa&&this.ya?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.da.push(e),this.Aa()))}async Aa(){if(this.da.length!==0){try{await this.da[0](),this.da.shift(),this.rr.reset()}catch(e){if(!Gi(e))throw e;N("AsyncQueue","Operation failed with retryable error: "+e)}this.da.length>0&&this.rr.Xi(()=>this.Aa())}}Ia(e){const n=this.fa.then(()=>(this.ga=!0,e().catch(r=>{this.ma=r,this.ga=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw De("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.ga=!1,r))));return this.fa=n,n}enqueueAfterDelay(e,n,r){this.Ea(),this.pa.indexOf(e)>-1&&(n=0);const i=yy.createAndSchedule(this,e,n,r,s=>this.Ra(s));return this._a.push(i),i}Ea(){this.ma&&q()}verifyOperationInProgress(){}async ba(){let e;do e=this.fa,await e;while(e!==this.fa)}Pa(e){for(const n of this._a)if(n.timerId===e)return!0;return!1}va(e){return this.ba().then(()=>{this._a.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this._a)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.ba()})}Va(e){this.pa.push(e)}Ra(e){const n=this._a.indexOf(e);this._a.splice(n,1)}}function Dy(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const r=e;for(const i of n)if(i in r&&typeof r[i]=="function")return!0;return!1}(t,["next","error","complete"])}class eU{constructor(){this._progressObserver={},this._taskCompletionResolver=new Ke,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,n,r){this._progressObserver={next:e,error:n,complete:r}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,n){return this._taskCompletionResolver.promise.then(e,n)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tU=-1;class xe extends Gu{constructor(e,n){super(e,n),this.type="firestore",this._queue=new Z2,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||_k(this),this._firestoreClient.terminate()}}function Ze(t){return t._firestoreClient||_k(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function _k(t){var e;const n=t._freezeSettings(),r=function(i,s,o,a){return new Y2(i,s,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new B2(t._credentials,t._queue,r)}function nU(t,e){Ik(t=re(t,xe));const n=Ze(t),r=t._freezeSettings(),i=new Ry;return Ek(n,i,new rk(i,r.cacheSizeBytes,e==null?void 0:e.forceOwnership))}function rU(t){Ik(t=re(t,xe));const e=Ze(t),n=t._freezeSettings(),r=new Ry;return Ek(e,r,new $2(r,n.cacheSizeBytes))}function Ek(t,e,n){const r=new Ke;return t.asyncQueue.enqueue(async()=>{try{await sk(t,n),await ok(t,e),r.resolve()}catch(i){if(!function(s){return s.name==="FirebaseError"?s.code===I.FAILED_PRECONDITION||s.code===I.UNIMPLEMENTED:typeof DOMException!="undefined"&&s instanceof DOMException?s.code===22||s.code===20||s.code===11:!0}(i))throw i;console.warn("Error enabling offline persistence. Falling back to persistence disabled: "+i),r.reject(i)}}).then(()=>r.promise)}function iU(t){if(t._initialized&&!t._terminated)throw new b(I.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new Ke;return t._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(n){if(!Cn.bt())return Promise.resolve();const r=n+"main";await Cn.delete(r)}(iy(t._databaseId,t._persistenceKey)),e.resolve()}catch(n){e.reject(n)}}),e.promise}function sU(t){return function(e){const n=new Ke;return e.asyncQueue.enqueueAndForget(async()=>k2(await xy(e),n)),n.promise}(Ze(t=re(t,xe)))}function oU(t){return j2(Ze(t=re(t,xe)))}function aU(t){return z2(Ze(t=re(t,xe)))}function uU(t,e){const n=Ze(t=re(t,xe)),r=new eU;return K2(n,t._databaseId,e,r),r}function lU(t,e){return Q2(Ze(t=re(t,xe)),e).then(n=>n?new Tt(t,null,n.query):null)}function Ik(t){if(t._initialized||t._terminated)throw new b(I.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class ai{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new b(I.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new dt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Wn(Ye.fromBase64String(e))}catch(n){throw new b(I.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Wn(Ye.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xi{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ad{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new b(I.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new b(I.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return J(this._lat,e._lat)||J(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cU=/^__.*__$/;class hU{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Zr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ou(e,this.data,n,this.fieldTransforms)}}class Sk{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Zr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Tk(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw q()}}class ud{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.N=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Sa(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Da(){return this.settings.Da}Ca(e){return new ud(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.N,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Na(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Ca({path:r,xa:!1});return i.ka(e),i}$a(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Ca({path:r,xa:!1});return i.Sa(),i}Oa(e){return this.Ca({path:void 0,xa:!0})}Fa(e){return cd(e,this.settings.methodName,this.settings.Ma||!1,this.path,this.settings.La)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Sa(){if(this.path)for(let e=0;e<this.path.length;e++)this.ka(this.path.get(e))}ka(e){if(e.length===0)throw this.Fa("Document fields must not be empty");if(Tk(this.Da)&&cU.test(e))throw this.Fa('Document fields cannot begin and end with "__"')}}class dU{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.N=r||qu(e)}Ba(e,n,r,i=!1){return new ud({Da:e,methodName:n,La:r,path:dt.emptyPath(),xa:!1,Ma:i},this.databaseId,this.N,this.ignoreUndefinedProperties)}}function Ji(t){const e=t._freezeSettings(),n=qu(t._databaseId);return new dU(t._databaseId,!!e.ignoreUndefinedProperties,n)}function ld(t,e,n,r,i,s={}){const o=t.Ba(s.merge||s.mergeFields?2:0,e,n,i);Uy("Data must be an object, but it was:",o,r);const a=Ck(r,o);let u,l;if(s.merge)u=new oo(o.fieldMask),l=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const h of s.mergeFields){const d=Fy(e,h,n);if(!o.contains(d))throw new b(I.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);Rk(c,d)||c.push(d)}u=new oo(c),l=o.fieldTransforms.filter(h=>u.covers(h.field))}else u=null,l=o.fieldTransforms;return new hU(new It(a),u,l)}class Ku extends Xi{_toFieldTransform(e){if(e.Da!==2)throw e.Da===1?e.Fa(`${this._methodName}() can only appear at the top level of your update data`):e.Fa(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Ku}}function kk(t,e,n){return new ud({Da:3,La:e.settings.La,methodName:t._methodName,xa:n},e.databaseId,e.N,e.ignoreUndefinedProperties)}class Ly extends Xi{_toFieldTransform(e){return new xu(e.path,new fo)}isEqual(e){return e instanceof Ly}}class fU extends Xi{constructor(e,n){super(e),this.Ua=n}_toFieldTransform(e){const n=kk(this,e,!0),r=this.Ua.map(s=>Zi(s,n)),i=new qi(r);return new xu(e.path,i)}isEqual(e){return this===e}}class pU extends Xi{constructor(e,n){super(e),this.Ua=n}_toFieldTransform(e){const n=kk(this,e,!0),r=this.Ua.map(s=>Zi(s,n)),i=new Hi(r);return new xu(e.path,i)}isEqual(e){return this===e}}class mU extends Xi{constructor(e,n){super(e),this.qa=n}_toFieldTransform(e){const n=new po(e.N,kS(e.N,this.qa));return new xu(e.path,n)}isEqual(e){return this===e}}function My(t,e,n,r){const i=t.Ba(1,e,n);Uy("Data must be an object, but it was:",i,r);const s=[],o=It.empty();Bi(r,(u,l)=>{const c=Vy(e,u,n);l=B(l);const h=i.$a(c);if(l instanceof Ku)s.push(c);else{const d=Zi(l,h);d!=null&&(s.push(c),o.set(c,d))}});const a=new oo(s);return new Sk(o,a,i.fieldTransforms)}function $y(t,e,n,r,i,s){const o=t.Ba(1,e,n),a=[Fy(e,r,n)],u=[i];if(s.length%2!=0)throw new b(I.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push(Fy(e,s[d])),u.push(s[d+1]);const l=[],c=It.empty();for(let d=a.length-1;d>=0;--d)if(!Rk(l,a[d])){const g=a[d];let y=u[d];y=B(y);const _=o.$a(g);if(y instanceof Ku)l.push(g);else{const f=Zi(y,_);f!=null&&(l.push(g),c.set(g,f))}}const h=new oo(l);return new Sk(c,h,o.fieldTransforms)}function bk(t,e,n,r=!1){return Zi(n,t.Ba(r?4:3,e))}function Zi(t,e){if(Ak(t=B(t)))return Uy("Unsupported field value:",e,t),Ck(t,e);if(t instanceof Xi)return function(n,r){if(!Tk(r.Da))throw r.Fa(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.Fa(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xa&&e.Da!==4)throw e.Fa("Nested arrays are not supported");return function(n,r){const i=[];let s=0;for(const o of n){let a=Zi(o,r.Oa(s));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),s++}return{arrayValue:{values:i}}}(t,e)}return function(n,r){if((n=B(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return kS(r.N,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=Qe.fromDate(n);return{timestampValue:$u(r.N,i)}}if(n instanceof Qe){const i=new Qe(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:$u(r.N,i)}}if(n instanceof ad)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Wn)return{bytesValue:HS(r.N,n._byteString)};if(n instanceof we){const i=r.databaseId,s=n.firestore._databaseId;if(!s.isEqual(i))throw r.Fa(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Wg(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r.Fa(`Unsupported field value: ${sd(n)}`)}(t,e)}function Ck(t,e){const n={};return uS(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Bi(t,(r,i)=>{const s=Zi(i,e.Na(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function Ak(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Qe||t instanceof ad||t instanceof Wn||t instanceof we||t instanceof Xi)}function Uy(t,e,n){if(!Ak(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=sd(n);throw r==="an object"?e.Fa(t+" a custom object"):e.Fa(t+" "+r)}}function Fy(t,e,n){if((e=B(e))instanceof ai)return e._internalPath;if(typeof e=="string")return Vy(t,e);throw cd("Field path arguments must be of type string or FieldPath.",t,!1,void 0,n)}const gU=new RegExp("[~\\*/\\[\\]]");function Vy(t,e,n){if(e.search(gU)>=0)throw cd(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new ai(...e.split("."))._internalPath}catch{throw cd(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function cd(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new b(I.INVALID_ARGUMENT,a+t+u)}function Rk(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qu{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new we(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new yU(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(hd("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class yU extends Qu{data(){return super.data()}}function hd(t,e){return typeof e=="string"?Vy(t,e):e instanceof ai?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class pr extends Qu{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Yu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(hd("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Yu extends pr{data(e={}){return super.data(e)}}class ui{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new es(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Yu(this._firestore,this._userDataWriter,r.key,r,new es(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new b(I.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let s=0;return r._snapshot.docChanges.map(o=>({type:"added",doc:new Yu(r._firestore,r._userDataWriter,o.doc.key,o.doc,new es(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter),oldIndex:-1,newIndex:s++}))}{let s=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new Yu(r._firestore,r._userDataWriter,o.doc.key,o.doc,new es(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let u=-1,l=-1;return o.type!==0&&(u=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),l=s.indexOf(o.doc.key)),{type:vU(o.type),doc:a,oldIndex:u,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function vU(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return q()}}function Nk(t,e){return t instanceof pr&&e instanceof pr?t._firestore===e._firestore&&t._key.isEqual(e._key)&&(t._document===null?e._document===null:t._document.isEqual(e._document))&&t._converter===e._converter:t instanceof ui&&e instanceof ui&&t._firestore===e._firestore&&wk(t.query,e.query)&&t.metadata.isEqual(e.metadata)&&t._snapshot.isEqual(e._snapshot)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pk(t){if(Uh(t)&&t.explicitOrderBy.length===0)throw new b(I.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Xu{}function li(t,...e){for(const n of e)t=n._apply(t);return t}class wU extends Xu{constructor(e,n,r){super(),this.Ka=e,this.ja=n,this.Qa=r,this.type="where"}_apply(e){const n=Ji(e.firestore),r=function(i,s,o,a,u,l,c){let h;if(u.isKeyField()){if(l==="array-contains"||l==="array-contains-any")throw new b(I.INVALID_ARGUMENT,`Invalid Query. You can't perform '${l}' queries on FieldPath.documentId().`);if(l==="in"||l==="not-in"){$k(c,l);const g=[];for(const y of c)g.push(Mk(a,i,y));h={arrayValue:{values:g}}}else h=Mk(a,i,c)}else l!=="in"&&l!=="not-in"&&l!=="array-contains-any"||$k(c,l),h=bk(o,s,c,l==="in"||l==="not-in");const d=Ot.create(u,l,h);return function(g,y){if(y.v()){const f=Vg(g);if(f!==null&&!f.isEqual(y.field))throw new b(I.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${f.toString()}' and '${y.field.toString()}'`);const p=Fg(g);p!==null&&Uk(g,y.field,p)}const _=function(f,p){for(const m of f.filters)if(p.indexOf(m.op)>=0)return m.op;return null}(g,function(f){switch(f){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(y.op));if(_!==null)throw _===y.op?new b(I.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${y.op.toString()}' filter.`):new b(I.INVALID_ARGUMENT,`Invalid query. You cannot use '${y.op.toString()}' filters with '${_.toString()}' filters.`)}(i,d),d}(e._query,"where",n,e.firestore._databaseId,this.Ka,this.ja,this.Qa);return new Tt(e.firestore,e.converter,function(i,s){const o=i.filters.concat([s]);return new cr(i.path,i.collectionGroup,i.explicitOrderBy.slice(),o,i.limit,i.limitType,i.startAt,i.endAt)}(e._query,r))}}function _U(t,e,n){const r=e,i=hd("where",t);return new wU(i,r,n)}class EU extends Xu{constructor(e,n){super(),this.Ka=e,this.Wa=n,this.type="orderBy"}_apply(e){const n=function(r,i,s){if(r.startAt!==null)throw new b(I.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new b(I.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new lo(i,s);return function(a,u){if(Fg(a)===null){const l=Vg(a);l!==null&&Uk(a,l,u.field)}}(r,o),o}(e._query,this.Ka,this.Wa);return new Tt(e.firestore,e.converter,function(r,i){const s=r.explicitOrderBy.concat([i]);return new cr(r.path,r.collectionGroup,s,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}(e._query,n))}}function IU(t,e="asc"){const n=e,r=hd("orderBy",t);return new EU(r,n)}class xk extends Xu{constructor(e,n,r){super(),this.type=e,this.Ga=n,this.za=r}_apply(e){return new Tt(e.firestore,e.converter,_S(e._query,this.Ga,this.za))}}function SU(t){return mk("limit",t),new xk("limit",t,"F")}function TU(t){return mk("limitToLast",t),new xk("limitToLast",t,"L")}class Ok extends Xu{constructor(e,n,r){super(),this.type=e,this.Ha=n,this.Ja=r}_apply(e){const n=Lk(e,this.type,this.Ha,this.Ja);return new Tt(e.firestore,e.converter,function(r,i){return new cr(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),r.limit,r.limitType,i,r.endAt)}(e._query,n))}}function kU(...t){return new Ok("startAt",t,!0)}function bU(...t){return new Ok("startAfter",t,!1)}class Dk extends Xu{constructor(e,n,r){super(),this.type=e,this.Ha=n,this.Ja=r}_apply(e){const n=Lk(e,this.type,this.Ha,this.Ja);return new Tt(e.firestore,e.converter,function(r,i){return new cr(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),r.limit,r.limitType,r.startAt,i)}(e._query,n))}}function CU(...t){return new Dk("endBefore",t,!0)}function AU(...t){return new Dk("endAt",t,!1)}function Lk(t,e,n,r){if(n[0]=B(n[0]),n[0]instanceof Qu)return function(i,s,o,a,u){if(!a)throw new b(I.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${o}().`);const l=[];for(const c of ho(i))if(c.field.isKeyField())l.push(xh(s,a.key));else{const h=a.data.field(c.field);if(Dg(h))throw new b(I.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+c.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(h===null){const d=c.field.canonicalString();throw new b(I.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${d}' (used as the orderBy) does not exist.`)}l.push(h)}return new Ru(l,u)}(t._query,t.firestore._databaseId,e,n[0]._document,r);{const i=Ji(t.firestore);return function(s,o,a,u,l,c){const h=s.explicitOrderBy;if(l.length>h.length)throw new b(I.INVALID_ARGUMENT,`Too many arguments provided to ${u}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const d=[];for(let g=0;g<l.length;g++){const y=l[g];if(h[g].field.isKeyField()){if(typeof y!="string")throw new b(I.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${u}(), but got a ${typeof y}`);if(!Bg(s)&&y.indexOf("/")!==-1)throw new b(I.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by FieldPath.documentId(), the value passed to ${u}() must be a plain document ID, but '${y}' contains a slash.`);const _=s.path.child(ie.fromString(y));if(!j.isDocumentKey(_))throw new b(I.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by FieldPath.documentId(), the value passed to ${u}() must result in a valid document path, but '${_}' is not because it contains an odd number of segments.`);const f=new j(_);d.push(xh(o,f))}else{const _=bk(a,u,y);d.push(_)}}return new Ru(d,c)}(t._query,t.firestore._databaseId,i,e,n,r)}}function Mk(t,e,n){if(typeof(n=B(n))=="string"){if(n==="")throw new b(I.INVALID_ARGUMENT,"Invalid query. When querying with FieldPath.documentId(), you must provide a valid document ID, but it was an empty string.");if(!Bg(e)&&n.indexOf("/")!==-1)throw new b(I.INVALID_ARGUMENT,`Invalid query. When querying a collection by FieldPath.documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(ie.fromString(n));if(!j.isDocumentKey(r))throw new b(I.INVALID_ARGUMENT,`Invalid query. When querying a collection group by FieldPath.documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return xh(t,new j(r))}if(n instanceof we)return xh(t,n._key);throw new b(I.INVALID_ARGUMENT,`Invalid query. When querying with FieldPath.documentId(), you must provide a valid string or a DocumentReference, but it was: ${sd(n)}.`)}function $k(t,e){if(!Array.isArray(t)||t.length===0)throw new b(I.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(t.length>10)throw new b(I.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function Uk(t,e,n){if(!n.isEqual(e))throw new b(I.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class By{convertValue(e,n="none"){switch(zi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Le(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ao(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw q()}}convertObject(e,n){const r={};return Bi(e.fields,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new ad(Le(e.latitude),Le(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=lS(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(ku(e));default:return null}}convertTimestamp(e){const n=Jr(e);return new Qe(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ie.fromString(e);H(iT(r));const i=new Lo(r.get(1),r.get(3)),s=new j(r.popFirst(5));return i.isEqual(n)||De(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dd(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class RU extends By{constructor(e){super(),this.firestore=e}convertBytes(e){return new Wn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new we(this.firestore,null,n)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NU{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=Ji(e)}set(e,n,r){this._verifyNotCommitted();const i=ci(e,this._firestore),s=dd(i.converter,n,r),o=ld(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(o.toMutation(i._key,Me.none())),this}update(e,n,r,...i){this._verifyNotCommitted();const s=ci(e,this._firestore);let o;return o=typeof(n=B(n))=="string"||n instanceof ai?$y(this._dataReader,"WriteBatch.update",s._key,n,r,i):My(this._dataReader,"WriteBatch.update",s._key,n),this._mutations.push(o.toMutation(s._key,Me.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=ci(e,this._firestore);return this._mutations=this._mutations.concat(new Du(n._key,Me.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new b(I.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function ci(t,e){if((t=B(t)).firestore!==e)throw new b(I.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function PU(t){t=re(t,we);const e=re(t.firestore,xe);return lk(Ze(e),t._key).then(n=>jy(e,t,n))}class ts extends By{constructor(e){super(),this.firestore=e}convertBytes(e){return new Wn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new we(this.firestore,null,n)}}function xU(t){t=re(t,we);const e=re(t.firestore,xe),n=Ze(e),r=new ts(e);return q2(n,t._key).then(i=>new pr(e,r,t._key,i,new es(i!==null&&i.hasLocalMutations,!0),t.converter))}function OU(t){t=re(t,we);const e=re(t.firestore,xe);return lk(Ze(e),t._key,{source:"server"}).then(n=>jy(e,t,n))}function DU(t){t=re(t,Tt);const e=re(t.firestore,xe),n=Ze(e),r=new ts(e);return Pk(t._query),ck(n,t._query).then(i=>new ui(e,r,t,i))}function LU(t){t=re(t,Tt);const e=re(t.firestore,xe),n=Ze(e),r=new ts(e);return H2(n,t._query).then(i=>new ui(e,r,t,i))}function MU(t){t=re(t,Tt);const e=re(t.firestore,xe),n=Ze(e),r=new ts(e);return ck(n,t._query,{source:"server"}).then(i=>new ui(e,r,t,i))}function Fk(t,e,n){t=re(t,we);const r=re(t.firestore,xe),i=dd(t.converter,e,n);return Ju(r,[ld(Ji(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Me.none())])}function Vk(t,e,n,...r){t=re(t,we);const i=re(t.firestore,xe),s=Ji(i);let o;return o=typeof(e=B(e))=="string"||e instanceof ai?$y(s,"updateDoc",t._key,e,n,r):My(s,"updateDoc",t._key,e),Ju(i,[o.toMutation(t._key,Me.exists(!0))])}function $U(t){return Ju(re(t.firestore,xe),[new Du(t._key,Me.none())])}function UU(t,e){const n=re(t.firestore,xe),r=od(t),i=dd(t.converter,e);return Ju(n,[ld(Ji(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Me.exists(!1))]).then(()=>r)}function Bk(t,...e){var n,r,i;t=B(t);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||Dy(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(Dy(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let u,l,c;if(t instanceof we)l=re(t.firestore,xe),c=co(t._key.path),u={next:h=>{e[o]&&e[o](jy(l,t,h))},error:e[o+1],complete:e[o+2]};else{const h=re(t,Tt);l=re(h.firestore,xe),c=h._query;const d=new ts(l);u={next:g=>{e[o]&&e[o](new ui(l,d,h,g))},error:e[o+1],complete:e[o+2]},Pk(t._query)}return function(h,d,g,y){const _=new rd(y),f=new Ey(d,_,g);return h.asyncQueue.enqueueAndForget(async()=>vy(await Do(h),f)),()=>{_.Xo(),h.asyncQueue.enqueueAndForget(async()=>wy(await Do(h),f))}}(Ze(l),c,a,u)}function FU(t,e){return W2(Ze(t=re(t,xe)),Dy(e)?e:{next:e})}function Ju(t,e){return function(n,r){const i=new Ke;return n.asyncQueue.enqueueAndForget(async()=>E2(await xy(n),r,i)),i.promise}(Ze(t),e)}function jy(t,e,n){const r=n.docs.get(e._key),i=new ts(t);return new pr(t,i,e._key,r,new es(n.hasPendingWrites,n.fromCache),e.converter)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VU extends class{constructor(e,n){this._firestore=e,this._transaction=n,this._dataReader=Ji(e)}get(e){const n=ci(e,this._firestore),r=new RU(this._firestore);return this._transaction.lookup([n._key]).then(i=>{if(!i||i.length!==1)return q();const s=i[0];if(s.isFoundDocument())return new Qu(this._firestore,r,s.key,s,n.converter);if(s.isNoDocument())return new Qu(this._firestore,r,n._key,null,n.converter);throw q()})}set(e,n,r){const i=ci(e,this._firestore),s=dd(i.converter,n,r),o=ld(this._dataReader,"Transaction.set",i._key,s,i.converter!==null,r);return this._transaction.set(i._key,o),this}update(e,n,r,...i){const s=ci(e,this._firestore);let o;return o=typeof(n=B(n))=="string"||n instanceof ai?$y(this._dataReader,"Transaction.update",s._key,n,r,i):My(this._dataReader,"Transaction.update",s._key,n),this._transaction.update(s._key,o),this}delete(e){const n=ci(e,this._firestore);return this._transaction.delete(n._key),this}}{constructor(e,n){super(e,n),this._firestore=e}get(e){const n=ci(e,this._firestore),r=new ts(this._firestore);return super.get(e).then(i=>new pr(this._firestore,r,n._key,i._document,new es(!1,!1),n.converter))}}function BU(t,e){return G2(Ze(t),n=>e(new VU(t,n)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jU(){return new Ku("deleteField")}function zU(){return new Ly("serverTimestamp")}function qU(...t){return new fU("arrayUnion",t)}function HU(...t){return new pU("arrayRemove",t)}function WU(t){return new mU("increment",t)}var GU;(function(t){io=t})(qr),zr(new Sn("firestore",(t,{options:e})=>{const n=t.getProvider("app").getImmediate(),r=new xe(n,new IM(t.getProvider("auth-internal")));return e=Object.assign({useFetchStreams:!0},e),r._setSettings(e),r},"PUBLIC")),hn(rS,"3.1.1",GU),hn(rS,"3.1.1","esm2017");const KU="@firebase/firestore-compat",QU="0.1.4";/**
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
 */function zy(t,e){if(e===void 0)return{merge:!1};if(e.mergeFields!==void 0&&e.merge!==void 0)throw new b("invalid-argument",`Invalid options passed to function ${t}(): You cannot specify both "merge" and "mergeFields".`);return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jk(){if(typeof Uint8Array=="undefined")throw new b("unimplemented","Uint8Arrays are not available in this environment.")}function zk(){if(!CM())throw new b("unimplemented","Blobs are unavailable in Firestore in this environment.")}class Zu{constructor(e){this._delegate=e}static fromBase64String(e){return zk(),new Zu(Wn.fromBase64String(e))}static fromUint8Array(e){return jk(),new Zu(Wn.fromUint8Array(e))}toBase64(){return zk(),this._delegate.toBase64()}toUint8Array(){return jk(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qy(t){return YU(t,["next","error","complete"])}function YU(t,e){if(typeof t!="object"||t===null)return!1;const n=t;for(const r of e)if(r in n&&typeof n[r]=="function")return!0;return!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XU{enableIndexedDbPersistence(e,n){return nU(e._delegate,{forceOwnership:n})}enableMultiTabIndexedDbPersistence(e){return rU(e._delegate)}clearIndexedDbPersistence(e){return iU(e._delegate)}}class qk{constructor(e,n,r){this._delegate=n,this._persistenceProvider=r,this.INTERNAL={delete:()=>this.terminate()},e instanceof Lo||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const n=this._delegate._getSettings();!e.merge&&n.host!==e.host&&Su("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},n),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,n,r={}){X2(this._delegate,e,n,r)}enableNetwork(){return oU(this._delegate)}disableNetwork(){return aU(this._delegate)}enablePersistence(e){let n=!1,r=!1;return e&&(n=!!e.synchronizeTabs,r=!!e.experimentalForceOwningTab,dk("synchronizeTabs",n,"experimentalForceOwningTab",r)),n?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,r)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return sU(this._delegate)}onSnapshotsInSync(e){return FU(this._delegate,e)}get app(){if(!this._appCompat)throw new b("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new Mo(this,yk(this._delegate,e))}catch(n){throw Dt(n,"collection()","Firestore.collection()")}}doc(e){try{return new mn(this,od(this._delegate,e))}catch(n){throw Dt(n,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new Lt(this,J2(this._delegate,e))}catch(n){throw Dt(n,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return BU(this._delegate,n=>e(new Hk(this,n)))}batch(){return Ze(this._delegate),new Wk(new NU(this._delegate,e=>Ju(this._delegate,e)))}loadBundle(e){return uU(this._delegate,e)}namedQuery(e){return lU(this._delegate,e).then(n=>n?new Lt(this,n):null)}}class fd extends By{constructor(e){super();this.firestore=e}convertBytes(e){return new Zu(new Wn(e))}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return mn.forKey(n,this.firestore,null)}}function JU(t){vM(t)}class Hk{constructor(e,n){this._firestore=e,this._delegate=n,this._userDataWriter=new fd(e)}get(e){const n=rs(e);return this._delegate.get(n).then(r=>new el(this._firestore,new pr(this._firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,n.converter)))}set(e,n,r){const i=rs(e);return r?(zy("Transaction.set",r),this._delegate.set(i,n,r)):this._delegate.set(i,n),this}update(e,n,r,...i){const s=rs(e);return arguments.length===2?this._delegate.update(s,n):this._delegate.update(s,n,r,...i),this}delete(e){const n=rs(e);return this._delegate.delete(n),this}}class Wk{constructor(e){this._delegate=e}set(e,n,r){const i=rs(e);return r?(zy("WriteBatch.set",r),this._delegate.set(i,n,r)):this._delegate.set(i,n),this}update(e,n,r,...i){const s=rs(e);return arguments.length===2?this._delegate.update(s,n):this._delegate.update(s,n,r,...i),this}delete(e){const n=rs(e);return this._delegate.delete(n),this}commit(){return this._delegate.commit()}}class ns{constructor(e,n,r){this._firestore=e,this._userDataWriter=n,this._delegate=r}fromFirestore(e,n){const r=new Yu(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new tl(this._firestore,r),n!=null?n:{})}toFirestore(e,n){return n?this._delegate.toFirestore(e,n):this._delegate.toFirestore(e)}static getInstance(e,n){const r=ns.INSTANCES;let i=r.get(e);i||(i=new WeakMap,r.set(e,i));let s=i.get(n);return s||(s=new ns(e,new fd(e),n),i.set(n,s)),s}}ns.INSTANCES=new WeakMap;class mn{constructor(e,n){this.firestore=e,this._delegate=n,this._userDataWriter=new fd(e)}static forPath(e,n,r){if(e.length%2!=0)throw new b("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new mn(n,new we(n._delegate,r,new j(e)))}static forKey(e,n,r){return new mn(n,new we(n._delegate,r,e))}get id(){return this._delegate.id}get parent(){return new Mo(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new Mo(this.firestore,yk(this._delegate,e))}catch(n){throw Dt(n,"collection()","DocumentReference.collection()")}}isEqual(e){return e=B(e),e instanceof we?vk(this._delegate,e):!1}set(e,n){n=zy("DocumentReference.set",n);try{return n?Fk(this._delegate,e,n):Fk(this._delegate,e)}catch(r){throw Dt(r,"setDoc()","DocumentReference.set()")}}update(e,n,...r){try{return arguments.length===1?Vk(this._delegate,e):Vk(this._delegate,e,n,...r)}catch(i){throw Dt(i,"updateDoc()","DocumentReference.update()")}}delete(){return $U(this._delegate)}onSnapshot(...e){const n=Gk(e),r=Kk(e,i=>new el(this.firestore,new pr(this.firestore._delegate,this._userDataWriter,i._key,i._document,i.metadata,this._delegate.converter)));return Bk(this._delegate,n,r)}get(e){let n;return(e==null?void 0:e.source)==="cache"?n=xU(this._delegate):(e==null?void 0:e.source)==="server"?n=OU(this._delegate):n=PU(this._delegate),n.then(r=>new el(this.firestore,new pr(this.firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,this._delegate.converter)))}withConverter(e){return new mn(this.firestore,e?this._delegate.withConverter(ns.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function Dt(t,e,n){return t.message=t.message.replace(e,n),t}function Gk(t){for(const e of t)if(typeof e=="object"&&!qy(e))return e;return{}}function Kk(t,e){var n,r;let i;return qy(t[0])?i=t[0]:qy(t[1])?i=t[1]:typeof t[0]=="function"?i={next:t[0],error:t[1],complete:t[2]}:i={next:t[1],error:t[2],complete:t[3]},{next:s=>{i.next&&i.next(e(s))},error:(n=i.error)===null||n===void 0?void 0:n.bind(i),complete:(r=i.complete)===null||r===void 0?void 0:r.bind(i)}}class el{constructor(e,n){this._firestore=e,this._delegate=n}get ref(){return new mn(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,n){return this._delegate.get(e,n)}isEqual(e){return Nk(this._delegate,e._delegate)}}class tl extends el{data(e){const n=this._delegate.data(e);return wM(n!==void 0),n}}class Lt{constructor(e,n){this.firestore=e,this._delegate=n,this._userDataWriter=new fd(e)}where(e,n,r){try{return new Lt(this.firestore,li(this._delegate,_U(e,n,r)))}catch(i){throw Dt(i,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,n){try{return new Lt(this.firestore,li(this._delegate,IU(e,n)))}catch(r){throw Dt(r,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new Lt(this.firestore,li(this._delegate,SU(e)))}catch(n){throw Dt(n,"limit()","Query.limit()")}}limitToLast(e){try{return new Lt(this.firestore,li(this._delegate,TU(e)))}catch(n){throw Dt(n,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new Lt(this.firestore,li(this._delegate,kU(...e)))}catch(n){throw Dt(n,"startAt()","Query.startAt()")}}startAfter(...e){try{return new Lt(this.firestore,li(this._delegate,bU(...e)))}catch(n){throw Dt(n,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new Lt(this.firestore,li(this._delegate,CU(...e)))}catch(n){throw Dt(n,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new Lt(this.firestore,li(this._delegate,AU(...e)))}catch(n){throw Dt(n,"endAt()","Query.endAt()")}}isEqual(e){return wk(this._delegate,e._delegate)}get(e){let n;return(e==null?void 0:e.source)==="cache"?n=LU(this._delegate):(e==null?void 0:e.source)==="server"?n=MU(this._delegate):n=DU(this._delegate),n.then(r=>new Hy(this.firestore,new ui(this.firestore._delegate,this._userDataWriter,this._delegate,r._snapshot)))}onSnapshot(...e){const n=Gk(e),r=Kk(e,i=>new Hy(this.firestore,new ui(this.firestore._delegate,this._userDataWriter,this._delegate,i._snapshot)));return Bk(this._delegate,n,r)}withConverter(e){return new Lt(this.firestore,e?this._delegate.withConverter(ns.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class ZU{constructor(e,n){this._firestore=e,this._delegate=n}get type(){return this._delegate.type}get doc(){return new tl(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class Hy{constructor(e,n){this._firestore=e,this._delegate=n}get query(){return new Lt(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new tl(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(n=>new ZU(this._firestore,n))}forEach(e,n){this._delegate.forEach(r=>{e.call(n,new tl(this._firestore,r))})}isEqual(e){return Nk(this._delegate,e._delegate)}}class Mo extends Lt{constructor(e,n){super(e,n);this.firestore=e,this._delegate=n}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new mn(this.firestore,e):null}doc(e){try{return e===void 0?new mn(this.firestore,od(this._delegate)):new mn(this.firestore,od(this._delegate,e))}catch(n){throw Dt(n,"doc()","CollectionReference.doc()")}}add(e){return UU(this._delegate,e).then(n=>new mn(this.firestore,n))}isEqual(e){return vk(this._delegate,e._delegate)}withConverter(e){return new Mo(this.firestore,e?this._delegate.withConverter(ns.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function rs(t){return re(t,we)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wy{constructor(...e){this._delegate=new ai(...e)}static documentId(){return new Wy(dt.keyField().canonicalString())}isEqual(e){return e=B(e),e instanceof ai?this._delegate._internalPath.isEqual(e._internalPath):!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is{constructor(e){this._delegate=e}static serverTimestamp(){const e=zU();return e._methodName="FieldValue.serverTimestamp",new is(e)}static delete(){const e=jU();return e._methodName="FieldValue.delete",new is(e)}static arrayUnion(...e){const n=qU(...e);return n._methodName="FieldValue.arrayUnion",new is(n)}static arrayRemove(...e){const n=HU(...e);return n._methodName="FieldValue.arrayRemove",new is(n)}static increment(e){const n=WU(e);return n._methodName="FieldValue.increment",new is(n)}isEqual(e){return this._delegate.isEqual(e._delegate)}}/**
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
 */const eF={Firestore:qk,GeoPoint:ad,Timestamp:Qe,Blob:Zu,Transaction:Hk,WriteBatch:Wk,DocumentReference:mn,DocumentSnapshot:el,Query:Lt,QueryDocumentSnapshot:tl,QuerySnapshot:Hy,CollectionReference:Mo,FieldPath:Wy,FieldValue:is,setLogLevel:JU,CACHE_SIZE_UNLIMITED:tU};function tF(t,e){t.INTERNAL.registerComponent(new Sn("firestore-compat",n=>{const r=n.getProvider("app-compat").getImmediate(),i=n.getProvider("firestore").getImmediate();return e(r,i)},"PUBLIC").setServiceProps(Object.assign({},eF)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nF(t){tF(t,(e,n)=>new qk(e,n,new XU)),t.registerVersion(KU,QU)}nF(qs);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ss;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(ss||(ss={}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qk="firebasestorage.googleapis.com",Yk="storageBucket",rF=2*60*1e3,iF=10*60*1e3;class Re extends Yt{constructor(e,n){super(Gy(e),`Firebase Storage: ${n} (${Gy(e)})`);this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Re.prototype)}_codeEquals(e){return Gy(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}function Gy(t){return"storage/"+t}function Ky(){const t="An unknown error occurred, please check the error payload for server response.";return new Re("unknown",t)}function sF(t){return new Re("object-not-found","Object '"+t+"' does not exist.")}function oF(t){return new Re("quota-exceeded","Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function aF(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Re("unauthenticated",t)}function uF(){return new Re("unauthorized-app","This app does not have permission to access Firebase Storage on this project.")}function lF(t){return new Re("unauthorized","User does not have permission to access '"+t+"'.")}function cF(){return new Re("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function Xk(){return new Re("canceled","User canceled the upload/download.")}function hF(t){return new Re("invalid-url","Invalid URL '"+t+"'.")}function dF(t){return new Re("invalid-default-bucket","Invalid default bucket '"+t+"'.")}function fF(){return new Re("no-default-bucket","No default bucket found. Did you set the '"+Yk+"' property when initializing the app?")}function Jk(){return new Re("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.")}function pF(){return new Re("server-file-wrong-size","Server recorded incorrect upload file size, please retry the upload.")}function mF(){return new Re("no-download-url","The given file does not have any download URLs.")}function $o(t){return new Re("invalid-argument",t)}function Zk(){return new Re("app-deleted","The Firebase app was deleted.")}function eb(t){return new Re("invalid-root-operation","The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function nl(t,e){return new Re("invalid-format","String does not match format '"+t+"': "+e)}function pd(t){throw new Re("internal-error","Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gF{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.errorCode_=ss.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=ss.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=ss.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw pd("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw pd("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw pd("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponseText(){if(!this.sent_)throw pd("cannot .getResponseText() before sending");return this.xhr_.responseText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}function yF(){return new gF}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vF{createConnection(){return yF()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=kt.makeFromUrl(e,n)}catch{return new kt(e,"")}if(r.path==="")return r;throw dF(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(v){v.path.charAt(v.path.length-1)==="/"&&(v.path_=v.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),u={bucket:1,path:3};function l(v){v.path_=decodeURIComponent(v.path)}const c="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",g=new RegExp(`^https?://${h}/${c}/b/${i}/o${d}`,"i"),y={bucket:1,path:3},_=n===Qk?"(?:storage.googleapis.com|storage.cloud.google.com)":n,f="([^?#]*)",p=new RegExp(`^https?://${_}/${i}/${f}`,"i"),w=[{regex:a,indices:u,postModify:s},{regex:g,indices:y,postModify:l},{regex:p,indices:{bucket:1,path:2},postModify:l}];for(let v=0;v<w.length;v++){const P=w[v],C=P.regex.exec(e);if(C){const V=C[P.indices.bucket];let F=C[P.indices.path];F||(F=""),r=new kt(V,F),P.postModify(r);break}}if(r==null)throw hF(e);return r}}class wF{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _F(t,e,n){let r=1,i=null,s=!1,o=0;function a(){return o===2}let u=!1;function l(...y){u||(u=!0,e.apply(null,y))}function c(y){i=setTimeout(()=>{i=null,t(h,a())},y)}function h(y,..._){if(u)return;if(y){l.call(null,y,..._);return}if(a()||s){l.call(null,y,..._);return}r<64&&(r*=2);let p;o===1?(o=2,p=0):p=(r+Math.random())*1e3,c(p)}let d=!1;function g(y){d||(d=!0,!u&&(i!==null?(y||(o=2),clearTimeout(i),c(0)):y||(o=1)))}return c(0),setTimeout(()=>{s=!0,g(!0)},n),g}function EF(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IF(t){return t!==void 0}function SF(t){return typeof t=="function"}function TF(t){return typeof t=="object"&&!Array.isArray(t)}function md(t){return typeof t=="string"||t instanceof String}function tb(t){return Qy()&&t instanceof Blob}function Qy(){return typeof Blob!="undefined"}function Yy(t,e,n,r){if(r<e)throw $o(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw $o(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hi(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function nb(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kF{constructor(e,n,r,i,s,o,a,u,l,c,h){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=u,this.timeout_=l,this.progressCallback_=c,this.pool_=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((d,g)=>{this.resolve_=d,this.reject_=g,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new gd(!1,null,!0));return}const s=this.pool_.createConnection();this.pendingConnection_=s;const o=a=>{const u=a.loaded,l=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,l)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===ss.NO_ERROR,u=s.getStatus();if(!a||this.isRetryStatusCode_(u)){const c=s.getErrorCode()===ss.ABORT;r(!1,new gd(!1,null,c));return}const l=this.successCodes_.indexOf(u)!==-1;r(!0,new gd(l,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const u=this.callback_(a,a.getResponseText());IF(u)?s(u):s()}catch(u){o(u)}else if(a!==null){const u=Ky();u.serverResponse=a.getResponseText(),this.errorCallback_?o(this.errorCallback_(a,u)):o(u)}else if(i.canceled){const u=this.appDelete_?Zk():Xk();o(u)}else{const u=cF();o(u)}};this.canceled_?n(!1,new gd(!1,null,!0)):this.backoffId_=_F(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&EF(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}isRetryStatusCode_(e){const n=e>=500&&e<600,i=[408,429].indexOf(e)!==-1,s=this.additionalRetryCodes_.indexOf(e)!==-1;return n||i||s}}class gd{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function bF(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function CF(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e!=null?e:"AppManager")}function AF(t,e){e&&(t["X-Firebase-GMPID"]=e)}function RF(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function NF(t,e,n,r,i,s){const o=nb(t.urlParams),a=t.url+o,u=Object.assign({},t.headers);return AF(u,e),bF(u,n),CF(u,s),RF(u,r),new kF(a,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PF(){return typeof BlobBuilder!="undefined"?BlobBuilder:typeof WebKitBlobBuilder!="undefined"?WebKitBlobBuilder:void 0}function xF(...t){const e=PF();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Qy())return new Blob(t);throw new Re("unsupported-environment","This browser doesn't seem to support creating Blobs")}}function OF(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function DF(t){return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Xy{constructor(e,n){this.data=e,this.contentType=n||null}}function rb(t,e){switch(t){case gn.RAW:return new Xy(ib(e));case gn.BASE64:case gn.BASE64URL:return new Xy(sb(t,e));case gn.DATA_URL:return new Xy(MF(e),$F(e))}throw Ky()}function ib(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)==55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)==56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)==56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function LF(t){let e;try{e=decodeURIComponent(t)}catch{throw nl(gn.DATA_URL,"Malformed data URL.")}return ib(e)}function sb(t,e){switch(t){case gn.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw nl(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case gn.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw nl(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=DF(e)}catch{throw nl(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class ob{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw nl(gn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=UF(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-";base64".length):r),this.rest=e.substring(e.indexOf(",")+1)}}function MF(t){const e=new ob(t);return e.base64?sb(gn.BASE64,e.rest):LF(e.rest)}function $F(t){return new ob(t).contentType}function UF(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr{constructor(e,n){let r=0,i="";tb(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(tb(this.data_)){const r=this.data_,i=OF(r,e,n);return i===null?null:new mr(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new mr(r,!0)}}static getBlob(...e){if(Qy()){const n=e.map(r=>r instanceof mr?r.data_:r);return new mr(xF.apply(null,n))}else{const n=e.map(o=>md(o)?rb(gn.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[s++]=o[a]}),new mr(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jy(t){let e;try{e=JSON.parse(t)}catch{return null}return TF(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FF(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function VF(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function ab(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BF(t,e){return e}class Mt{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||BF}}let yd=null;function jF(t){return!md(t)||t.length<2?t:ab(t)}function vd(){if(yd)return yd;const t=[];t.push(new Mt("bucket")),t.push(new Mt("generation")),t.push(new Mt("metageneration")),t.push(new Mt("name","fullPath",!0));function e(s,o){return jF(o)}const n=new Mt("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new Mt("size");return i.xform=r,t.push(i),t.push(new Mt("timeCreated")),t.push(new Mt("updated")),t.push(new Mt("md5Hash",null,!0)),t.push(new Mt("cacheControl",null,!0)),t.push(new Mt("contentDisposition",null,!0)),t.push(new Mt("contentEncoding",null,!0)),t.push(new Mt("contentLanguage",null,!0)),t.push(new Mt("contentType",null,!0)),t.push(new Mt("metadata","customMetadata",!0)),yd=t,yd}function zF(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new kt(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function qF(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return zF(r,t),r}function ub(t,e,n){const r=Jy(e);return r===null?null:qF(t,r,n)}function HF(t,e,n,r){const i=Jy(e);if(i===null||!md(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(l=>{const c=t.bucket,h=t.fullPath,d="/b/"+o(c)+"/o/"+o(h),g=hi(d,n,r),y=nb({alt:"media",token:l});return g+y})[0]}function Zy(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}/**
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
 */const lb="prefixes",cb="items";function WF(t,e,n){const r={prefixes:[],items:[],nextPageToken:n.nextPageToken};if(n[lb])for(const i of n[lb]){const s=i.replace(/\/$/,""),o=t._makeStorageReference(new kt(e,s));r.prefixes.push(o)}if(n[cb])for(const i of n[cb]){const s=t._makeStorageReference(new kt(e,i.name));r.items.push(s)}return r}function GF(t,e,n){const r=Jy(n);return r===null?null:WF(t,e,r)}class gr{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gn(t){if(!t)throw Ky()}function wd(t,e){function n(r,i){const s=ub(t,i,e);return Gn(s!==null),s}return n}function KF(t,e){function n(r,i){const s=GF(t,e,i);return Gn(s!==null),s}return n}function QF(t,e){function n(r,i){const s=ub(t,i,e);return Gn(s!==null),HF(s,i,t.host,t._protocol)}return n}function Uo(t){function e(n,r){let i;return n.getStatus()===401?n.getResponseText().includes("Firebase App Check token is invalid")?i=uF():i=aF():n.getStatus()===402?i=oF(t.bucket):n.getStatus()===403?i=lF(t.path):i=r,i.serverResponse=r.serverResponse,i}return e}function _d(t){const e=Uo(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=sF(t.path)),s.serverResponse=i.serverResponse,s}return n}function hb(t,e,n){const r=e.fullServerUrl(),i=hi(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new gr(i,s,wd(t,n),o);return a.errorHandler=_d(e),a}function YF(t,e,n,r,i){const s={};e.isRoot?s.prefix="":s.prefix=e.path+"/",n&&n.length>0&&(s.delimiter=n),r&&(s.pageToken=r),i&&(s.maxResults=i);const o=e.bucketOnlyServerUrl(),a=hi(o,t.host,t._protocol),u="GET",l=t.maxOperationRetryTime,c=new gr(a,u,KF(t,e.bucket),l);return c.urlParams=s,c.errorHandler=Uo(e),c}function XF(t,e,n){const r=e.fullServerUrl(),i=hi(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new gr(i,s,QF(t,n),o);return a.errorHandler=_d(e),a}function JF(t,e,n,r){const i=e.fullServerUrl(),s=hi(i,t.host,t._protocol),o="PATCH",a=Zy(n,r),u={"Content-Type":"application/json; charset=utf-8"},l=t.maxOperationRetryTime,c=new gr(s,o,wd(t,r),l);return c.headers=u,c.body=a,c.errorHandler=_d(e),c}function ZF(t,e){const n=e.fullServerUrl(),r=hi(n,t.host,t._protocol),i="DELETE",s=t.maxOperationRetryTime;function o(u,l){}const a=new gr(r,i,o,s);return a.successCodes=[200,204],a.errorHandler=_d(e),a}function eV(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function db(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=eV(null,e)),r}function tV(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let w="";for(let v=0;v<2;v++)w=w+Math.random().toString().slice(2);return w}const u=a();o["Content-Type"]="multipart/related; boundary="+u;const l=db(e,r,i),c=Zy(l,n),h="--"+u+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+c+`\r
--`+u+`\r
Content-Type: `+l.contentType+`\r
\r
`,d=`\r
--`+u+"--",g=mr.getBlob(h,r,d);if(g===null)throw Jk();const y={name:l.fullPath},_=hi(s,t.host,t._protocol),f="POST",p=t.maxUploadRetryTime,m=new gr(_,f,wd(t,n),p);return m.urlParams=y,m.headers=o,m.body=g.uploadData(),m.errorHandler=Uo(e),m}class Ed{constructor(e,n,r,i){this.current=e,this.total=n,this.finalized=!!r,this.metadata=i||null}}function ev(t,e){let n=null;try{n=t.getResponseHeader("X-Goog-Upload-Status")}catch{Gn(!1)}return Gn(!!n&&(e||["active"]).indexOf(n)!==-1),n}function nV(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o=db(e,r,i),a={name:o.fullPath},u=hi(s,t.host,t._protocol),l="POST",c={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${r.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},h=Zy(o,n),d=t.maxUploadRetryTime;function g(_){ev(_);let f;try{f=_.getResponseHeader("X-Goog-Upload-URL")}catch{Gn(!1)}return Gn(md(f)),f}const y=new gr(u,l,g,d);return y.urlParams=a,y.headers=c,y.body=h,y.errorHandler=Uo(e),y}function rV(t,e,n,r){const i={"X-Goog-Upload-Command":"query"};function s(l){const c=ev(l,["active","final"]);let h=null;try{h=l.getResponseHeader("X-Goog-Upload-Size-Received")}catch{Gn(!1)}h||Gn(!1);const d=Number(h);return Gn(!isNaN(d)),new Ed(d,r.size(),c==="final")}const o="POST",a=t.maxUploadRetryTime,u=new gr(n,o,s,a);return u.headers=i,u.errorHandler=Uo(e),u}const fb=256*1024;function iV(t,e,n,r,i,s,o,a){const u=new Ed(0,0);if(o?(u.current=o.current,u.total=o.total):(u.current=0,u.total=r.size()),r.size()!==u.total)throw pF();const l=u.total-u.current;let c=l;i>0&&(c=Math.min(c,i));const h=u.current,d=h+c,y={"X-Goog-Upload-Command":c===l?"upload, finalize":"upload","X-Goog-Upload-Offset":`${u.current}`},_=r.slice(h,d);if(_===null)throw Jk();function f(v,P){const C=ev(v,["active","final"]),V=u.current+c,F=r.size();let M;return C==="final"?M=wd(e,s)(v,P):M=null,new Ed(V,F,C==="final",M)}const p="POST",m=e.maxUploadRetryTime,w=new gr(n,p,f,m);return w.headers=y,w.body=_.uploadData(),w.progressCallback=a||null,w.errorHandler=Uo(t),w}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sV={STATE_CHANGED:"state_changed"},$t={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function tv(t){switch(t){case"running":case"pausing":case"canceling":return $t.RUNNING;case"paused":return $t.PAUSED;case"success":return $t.SUCCESS;case"canceled":return $t.CANCELED;case"error":return $t.ERROR;default:return $t.ERROR}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oV{constructor(e,n,r){if(SF(e)||n!=null||r!=null)this.next=e,this.error=n!=null?n:void 0,this.complete=r!=null?r:void 0;else{const s=e;this.next=s.next,this.error=s.error,this.complete=s.complete}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fo(t){return(...e)=>{Promise.resolve().then(()=>t(...e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pb{constructor(e,n,r=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=n,this._metadata=r,this._mappings=vd(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=i=>{this._request=void 0,this._chunkMultiplier=1,i._codeEquals("canceled")?(this._needToFetchStatus=!0,this.completeTransitions_()):(this._error=i,this._transition("error"))},this._metadataErrorHandler=i=>{this._request=void 0,i._codeEquals("canceled")?this.completeTransitions_():(this._error=i,this._transition("error"))},this._promise=new Promise((i,s)=>{this._resolve=i,this._reject=s,this._start()}),this._promise.then(null,()=>{})}_makeProgressCallback(){const e=this._transferred;return n=>this._updateProgress(e+n)}_shouldDoResumable(e){return e.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this._continueUpload():this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([n,r])=>{switch(this._state){case"running":e(n,r);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,n)=>{const r=nV(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._uploadUrl=s,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((n,r)=>{const i=rV(this._ref.storage,this._ref._location,e,this._blob),s=this._ref.storage._makeRequest(i,n,r);this._request=s,s.getPromise().then(o=>{o=o,this._request=void 0,this._updateProgress(o.current),this._needToFetchStatus=!1,o.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=fb*this._chunkMultiplier,n=new Ed(this._transferred,this._blob.size()),r=this._uploadUrl;this._resolveToken((i,s)=>{let o;try{o=iV(this._ref._location,this._ref.storage,r,this._blob,e,this._mappings,n,this._makeProgressCallback())}catch(u){this._error=u,this._transition("error");return}const a=this._ref.storage._makeRequest(o,i,s);this._request=a,a.getPromise().then(u=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(u.current),u.finalized?(this._metadata=u.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){fb*this._chunkMultiplier<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,n)=>{const r=hb(this._ref.storage,this._ref._location,this._mappings),i=this._ref.storage._makeRequest(r,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._metadata=s,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,n)=>{const r=tV(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._metadata=s,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const n=this._transferred;this._transferred=e,this._transferred!==n&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":this._state=e,this._request!==void 0&&this._request.cancel();break;case"pausing":this._state=e,this._request!==void 0&&this._request.cancel();break;case"running":const n=this._state==="paused";this._state=e,n&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=Xk(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=tv(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,n,r,i){const s=new oV(n||void 0,r||void 0,i||void 0);return this._addObserver(s),()=>{this._removeObserver(s)}}then(e,n){return this._promise.then(e,n)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const n=this._observers.indexOf(e);n!==-1&&this._observers.splice(n,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(n=>{this._notifyObserver(n)})}_finishPromise(){if(this._resolve!==void 0){let e=!0;switch(tv(this._state)){case $t.SUCCESS:Fo(this._resolve.bind(null,this.snapshot))();break;case $t.CANCELED:case $t.ERROR:const n=this._reject;Fo(n.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(tv(this._state)){case $t.RUNNING:case $t.PAUSED:e.next&&Fo(e.next.bind(e,this.snapshot))();break;case $t.SUCCESS:e.complete&&Fo(e.complete.bind(e))();break;case $t.CANCELED:case $t.ERROR:e.error&&Fo(e.error.bind(e,this._error))();break;default:e.error&&Fo(e.error.bind(e,this._error))()}}resume(){const e=this._state==="paused"||this._state==="pausing";return e&&this._transition("running"),e}pause(){const e=this._state==="running";return e&&this._transition("pausing"),e}cancel(){const e=this._state==="running"||this._state==="pausing";return e&&this._transition("canceling"),e}}/**
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
 */class os{constructor(e,n){this._service=e,n instanceof kt?this._location=n:this._location=kt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new os(e,n)}get root(){const e=new kt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return ab(this._location.path)}get storage(){return this._service}get parent(){const e=FF(this._location.path);if(e===null)return null;const n=new kt(this._location.bucket,e);return new os(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw eb(e)}}function aV(t,e,n){return t._throwIfRoot("uploadBytesResumable"),new pb(t,new mr(e),n)}function uV(t){const e={prefixes:[],items:[]};return mb(t,e).then(()=>e)}async function mb(t,e,n){const i=await gb(t,{pageToken:n});e.prefixes.push(...i.prefixes),e.items.push(...i.items),i.nextPageToken!=null&&await mb(t,e,i.nextPageToken)}async function gb(t,e){e!=null&&typeof e.maxResults=="number"&&Yy("options.maxResults",1,1e3,e.maxResults);const n=e||{},r=YF(t.storage,t._location,"/",n.pageToken,n.maxResults);return(await t.storage.makeRequestWithTokens(r)).getPromise()}async function lV(t){t._throwIfRoot("getMetadata");const e=hb(t.storage,t._location,vd());return(await t.storage.makeRequestWithTokens(e)).getPromise()}async function cV(t,e){t._throwIfRoot("updateMetadata");const n=JF(t.storage,t._location,e,vd());return(await t.storage.makeRequestWithTokens(n)).getPromise()}async function hV(t){t._throwIfRoot("getDownloadURL");const e=XF(t.storage,t._location,vd());return(await t.storage.makeRequestWithTokens(e)).getPromise().then(n=>{if(n===null)throw mF();return n})}async function dV(t){t._throwIfRoot("deleteObject");const e=ZF(t.storage,t._location);return(await t.storage.makeRequestWithTokens(e)).getPromise()}function yb(t,e){const n=VF(t._location.path,e),r=new kt(t._location.bucket,n);return new os(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fV(t){return/^[A-Za-z]+:\/\//.test(t)}function pV(t,e){return new os(t,e)}function vb(t,e){if(t instanceof nv){const n=t;if(n._bucket==null)throw fF();const r=new os(n,n._bucket);return e!=null?vb(r,e):r}else return e!==void 0?yb(t,e):t}function mV(t,e){if(e&&fV(e)){if(t instanceof nv)return pV(t,e);throw $o("To use ref(service, url), the first argument must be a Storage instance.")}else return vb(t,e)}function wb(t,e){const n=e==null?void 0:e[Yk];return n==null?null:kt.makeFromBucketSpec(n,t)}function gV(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:d1(i,t.app.options.projectId))}class nv{constructor(e,n,r,i,s,o){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._pool=i,this._url=s,this._firebaseVersion=o,this._bucket=null,this._host=Qk,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=rF,this._maxUploadRetryTime=iF,this._requests=new Set,s!=null?this._bucket=kt.makeFromBucketSpec(s,this._host):this._bucket=wb(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=kt.makeFromBucketSpec(this._url,e):this._bucket=wb(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Yy("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Yy("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new os(this,e)}_makeRequest(e,n,r){if(this._deleted)return new wF(Zk());{const i=NF(e,this._appId,n,r,this._pool,this._firebaseVersion);return this._requests.add(i),i.getPromise().then(()=>this._requests.delete(i),()=>this._requests.delete(i)),i}}async makeRequestWithTokens(e){const[n,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r)}}const _b="@firebase/storage",Eb="0.8.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yV="storage";function vV(t,e,n){return t=B(t),aV(t,e,n)}function wV(t){return t=B(t),lV(t)}function _V(t,e){return t=B(t),cV(t,e)}function EV(t,e){return t=B(t),gb(t,e)}function IV(t){return t=B(t),uV(t)}function SV(t){return t=B(t),hV(t)}function TV(t){return t=B(t),dV(t)}function Ib(t,e){return t=B(t),mV(t,e)}function kV(t,e){return yb(t,e)}function bV(t,e,n,r={}){gV(t,e,n,r)}function CV(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new nv(n,r,i,new vF,e,qr)}function AV(){zr(new Sn(yV,CV,"PUBLIC").setMultipleInstances(!0)),hn(_b,Eb,""),hn(_b,Eb,"esm2017")}AV();/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Id{constructor(e,n,r){this._delegate=e,this.task=n,this.ref=r}get bytesTransferred(){return this._delegate.bytesTransferred}get metadata(){return this._delegate.metadata}get state(){return this._delegate.state}get totalBytes(){return this._delegate.totalBytes}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sb{constructor(e,n){this._delegate=e,this._ref=n,this.cancel=this._delegate.cancel.bind(this._delegate),this.catch=this._delegate.catch.bind(this._delegate),this.pause=this._delegate.pause.bind(this._delegate),this.resume=this._delegate.resume.bind(this._delegate)}get snapshot(){return new Id(this._delegate.snapshot,this,this._ref)}then(e,n){return this._delegate.then(r=>{if(e)return e(new Id(r,this,this._ref))},n)}on(e,n,r,i){let s;return n&&(typeof n=="function"?s=o=>n(new Id(o,this,this._ref)):s={next:n.next?o=>n.next(new Id(o,this,this._ref)):void 0,complete:n.complete||void 0,error:n.error||void 0}),this._delegate.on(e,s,r||void 0,i||void 0)}}class Tb{constructor(e,n){this._delegate=e,this._service=n}get prefixes(){return this._delegate.prefixes.map(e=>new yr(e,this._service))}get items(){return this._delegate.items.map(e=>new yr(e,this._service))}get nextPageToken(){return this._delegate.nextPageToken||null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr{constructor(e,n){this._delegate=e,this.storage=n}get name(){return this._delegate.name}get bucket(){return this._delegate.bucket}get fullPath(){return this._delegate.fullPath}toString(){return this._delegate.toString()}child(e){const n=kV(this._delegate,e);return new yr(n,this.storage)}get root(){return new yr(this._delegate.root,this.storage)}get parent(){const e=this._delegate.parent;return e==null?null:new yr(e,this.storage)}put(e,n){return this._throwIfRoot("put"),new Sb(vV(this._delegate,e,n),this)}putString(e,n=gn.RAW,r){this._throwIfRoot("putString");const i=rb(n,e),s=Object.assign({},r);return s.contentType==null&&i.contentType!=null&&(s.contentType=i.contentType),new Sb(new pb(this._delegate,new mr(i.data,!0),s),this)}listAll(){return IV(this._delegate).then(e=>new Tb(e,this.storage))}list(e){return EV(this._delegate,e||void 0).then(n=>new Tb(n,this.storage))}getMetadata(){return wV(this._delegate)}updateMetadata(e){return _V(this._delegate,e)}getDownloadURL(){return SV(this._delegate)}delete(){return this._throwIfRoot("delete"),TV(this._delegate)}_throwIfRoot(e){if(this._delegate._location.path==="")throw eb(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kb{constructor(e,n){this.app=e,this._delegate=n}get maxOperationRetryTime(){return this._delegate.maxOperationRetryTime}get maxUploadRetryTime(){return this._delegate.maxUploadRetryTime}ref(e){if(bb(e))throw $o("ref() expected a child path but got a URL, use refFromURL instead.");return new yr(Ib(this._delegate,e),this)}refFromURL(e){if(!bb(e))throw $o("refFromURL() expected a full URL but got a child path, use ref() instead.");try{kt.makeFromUrl(e,this._delegate.host)}catch{throw $o("refFromUrl() expected a valid full URL but got an invalid one.")}return new yr(Ib(this._delegate,e),this)}setMaxUploadRetryTime(e){this._delegate.maxUploadRetryTime=e}setMaxOperationRetryTime(e){this._delegate.maxOperationRetryTime=e}useEmulator(e,n,r={}){bV(this._delegate,e,n,r)}}function bb(t){return/^[A-Za-z]+:\/\//.test(t)}const RV="@firebase/storage-compat",NV="0.1.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PV="storage-compat";function xV(t,{instanceIdentifier:e}){const n=t.getProvider("app-compat").getImmediate(),r=t.getProvider("storage").getImmediate({identifier:e});return new kb(n,r)}function OV(t){const e={TaskState:$t,TaskEvent:sV,StringFormat:gn,Storage:kb,Reference:yr};t.INTERNAL.registerComponent(new Sn(PV,xV,"PUBLIC").setServiceProps(e).setMultipleInstances(!0)),t.registerVersion(RV,NV)}OV(qs);export{BV as A,MV as B,Vs as G,_n as R,UV as S,FV as a,jV as b,VV as c,DV as d,$V as e,qs as f,Te as r,LV as s};
