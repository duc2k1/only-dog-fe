var wh={exports:{}},K={};/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var Ag=Object.getOwnPropertySymbols,o1=Object.prototype.hasOwnProperty,a1=Object.prototype.propertyIsEnumerable;function u1(t){if(t==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}function l1(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de",Object.getOwnPropertyNames(t)[0]==="5")return!1;for(var e={},n=0;n<10;n++)e["_"+String.fromCharCode(n)]=n;var r=Object.getOwnPropertyNames(e).map(function(s){return e[s]});if(r.join("")!=="0123456789")return!1;var i={};return"abcdefghijklmnopqrst".split("").forEach(function(s){i[s]=s}),Object.keys(Object.assign({},i)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}var Pg=l1()?Object.assign:function(t,e){for(var n,r=u1(t),i,s=1;s<arguments.length;s++){n=Object(arguments[s]);for(var o in n)o1.call(n,o)&&(r[o]=n[o]);if(Ag){i=Ag(n);for(var a=0;a<i.length;a++)a1.call(n,i[a])&&(r[i[a]]=n[i[a]])}}return r};/** @license React v17.0.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _h=Pg,Pi=60103,Dg=60106;K.Fragment=60107;K.StrictMode=60108;K.Profiler=60114;var xg=60109,Og=60110,Lg=60112;K.Suspense=60113;var Mg=60115,Ug=60116;if(typeof Symbol=="function"&&Symbol.for){var Ht=Symbol.for;Pi=Ht("react.element"),Dg=Ht("react.portal"),K.Fragment=Ht("react.fragment"),K.StrictMode=Ht("react.strict_mode"),K.Profiler=Ht("react.profiler"),xg=Ht("react.provider"),Og=Ht("react.context"),Lg=Ht("react.forward_ref"),K.Suspense=Ht("react.suspense"),Mg=Ht("react.memo"),Ug=Ht("react.lazy")}var $g=typeof Symbol=="function"&&Symbol.iterator;function c1(t){return t===null||typeof t!="object"?null:(t=$g&&t[$g]||t["@@iterator"],typeof t=="function"?t:null)}function oo(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Fg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Vg={};function Di(t,e,n){this.props=t,this.context=e,this.refs=Vg,this.updater=n||Fg}Di.prototype.isReactComponent={};Di.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error(oo(85));this.updater.enqueueSetState(this,t,e,"setState")};Di.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Bg(){}Bg.prototype=Di.prototype;function Ih(t,e,n){this.props=t,this.context=e,this.refs=Vg,this.updater=n||Fg}var Eh=Ih.prototype=new Bg;Eh.constructor=Ih;_h(Eh,Di.prototype);Eh.isPureReactComponent=!0;var Th={current:null},qg=Object.prototype.hasOwnProperty,jg={key:!0,ref:!0,__self:!0,__source:!0};function zg(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)qg.call(e,r)&&!jg.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var u=Array(a),l=0;l<a;l++)u[l]=arguments[l+2];i.children=u}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Pi,type:t,key:s,ref:o,props:i,_owner:Th.current}}function h1(t,e){return{$$typeof:Pi,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Sh(t){return typeof t=="object"&&t!==null&&t.$$typeof===Pi}function d1(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Hg=/\/+/g;function kh(t,e){return typeof t=="object"&&t!==null&&t.key!=null?d1(""+t.key):e.toString(36)}function yu(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Pi:case Dg:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+kh(o,0):r,Array.isArray(i)?(n="",t!=null&&(n=t.replace(Hg,"$&/")+"/"),yu(i,e,n,"",function(l){return l})):i!=null&&(Sh(i)&&(i=h1(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Hg,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Array.isArray(t))for(var a=0;a<t.length;a++){s=t[a];var u=r+kh(s,a);o+=yu(s,e,n,u,i)}else if(u=c1(t),typeof u=="function")for(t=u.call(t),a=0;!(s=t.next()).done;)s=s.value,u=r+kh(s,a++),o+=yu(s,e,n,u,i);else if(s==="object")throw e=""+t,Error(oo(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e));return o}function vu(t,e,n){if(t==null)return t;var r=[],i=0;return yu(t,r,"","",function(s){return e.call(n,s,i++)}),r}function f1(t){if(t._status===-1){var e=t._result;e=e(),t._status=0,t._result=e,e.then(function(n){t._status===0&&(n=n.default,t._status=1,t._result=n)},function(n){t._status===0&&(t._status=2,t._result=n)})}if(t._status===1)return t._result;throw t._result}var Wg={current:null};function vn(){var t=Wg.current;if(t===null)throw Error(oo(321));return t}var p1={ReactCurrentDispatcher:Wg,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:Th,IsSomeRendererActing:{current:!1},assign:_h};K.Children={map:vu,forEach:function(t,e,n){vu(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return vu(t,function(){e++}),e},toArray:function(t){return vu(t,function(e){return e})||[]},only:function(t){if(!Sh(t))throw Error(oo(143));return t}};K.Component=Di;K.PureComponent=Ih;K.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=p1;K.cloneElement=function(t,e,n){if(t==null)throw Error(oo(267,t));var r=_h({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Th.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(u in e)qg.call(e,u)&&!jg.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&a!==void 0?a[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var l=0;l<u;l++)a[l]=arguments[l+2];r.children=a}return{$$typeof:Pi,type:t.type,key:i,ref:s,props:r,_owner:o}};K.createContext=function(t,e){return e===void 0&&(e=null),t={$$typeof:Og,_calculateChangedBits:e,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null},t.Provider={$$typeof:xg,_context:t},t.Consumer=t};K.createElement=zg;K.createFactory=function(t){var e=zg.bind(null,t);return e.type=t,e};K.createRef=function(){return{current:null}};K.forwardRef=function(t){return{$$typeof:Lg,render:t}};K.isValidElement=Sh;K.lazy=function(t){return{$$typeof:Ug,_payload:{_status:-1,_result:t},_init:f1}};K.memo=function(t,e){return{$$typeof:Mg,type:t,compare:e===void 0?null:e}};K.useCallback=function(t,e){return vn().useCallback(t,e)};K.useContext=function(t,e){return vn().useContext(t,e)};K.useDebugValue=function(){};K.useEffect=function(t,e){return vn().useEffect(t,e)};K.useImperativeHandle=function(t,e,n){return vn().useImperativeHandle(t,e,n)};K.useLayoutEffect=function(t,e){return vn().useLayoutEffect(t,e)};K.useMemo=function(t,e){return vn().useMemo(t,e)};K.useReducer=function(t,e,n){return vn().useReducer(t,e,n)};K.useRef=function(t){return vn().useRef(t)};K.useState=function(t){return vn().useState(t)};K.version="17.0.2";wh.exports=K;var Or=wh.exports,Kg={exports:{}},xt={},Gg={exports:{}},Qg={};/** @license React v0.20.2
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){var e,n,r,i;if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}if(typeof window=="undefined"||typeof MessageChannel!="function"){var u=null,l=null,c=function(){if(u!==null)try{var b=t.unstable_now();u(!0,b),u=null}catch(B){throw setTimeout(c,0),B}};e=function(b){u!==null?setTimeout(e,0,b):(u=b,setTimeout(c,0))},n=function(b,B){l=setTimeout(b,B)},r=function(){clearTimeout(l)},t.unstable_shouldYield=function(){return!1},i=t.unstable_forceFrameRate=function(){}}else{var h=window.setTimeout,d=window.clearTimeout;if(typeof console!="undefined"){var m=window.cancelAnimationFrame;typeof window.requestAnimationFrame!="function"&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"),typeof m!="function"&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills")}var y=!1,I=null,p=-1,f=5,g=0;t.unstable_shouldYield=function(){return t.unstable_now()>=g},i=function(){},t.unstable_forceFrameRate=function(b){0>b||125<b?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):f=0<b?Math.floor(1e3/b):5};var v=new MessageChannel,w=v.port2;v.port1.onmessage=function(){if(I!==null){var b=t.unstable_now();g=b+f;try{I(!0,b)?w.postMessage(null):(y=!1,I=null)}catch(B){throw w.postMessage(null),B}}else y=!1},e=function(b){I=b,y||(y=!0,w.postMessage(null))},n=function(b,B){p=h(function(){b(t.unstable_now())},B)},r=function(){d(p),p=-1}}function O(b,B){var z=b.length;b.push(B);e:for(;;){var de=z-1>>>1,Me=b[de];if(Me!==void 0&&0<$(Me,B))b[de]=B,b[z]=Me,z=de;else break e}}function S(b){return b=b[0],b===void 0?null:b}function U(b){var B=b[0];if(B!==void 0){var z=b.pop();if(z!==B){b[0]=z;e:for(var de=0,Me=b.length;de<Me;){var Dr=2*(de+1)-1,xr=b[Dr],so=Dr+1,Ai=b[so];if(xr!==void 0&&0>$(xr,z))Ai!==void 0&&0>$(Ai,xr)?(b[de]=Ai,b[so]=z,de=so):(b[de]=xr,b[Dr]=z,de=Dr);else if(Ai!==void 0&&0>$(Ai,z))b[de]=Ai,b[so]=z,de=so;else break e}}return B}return null}function $(b,B){var z=b.sortIndex-B.sortIndex;return z!==0?z:b.id-B.id}var x=[],_e=[],mh=1,Dt=null,Qe=3,gu=!1,Pr=!1,io=!1;function gh(b){for(var B=S(_e);B!==null;){if(B.callback===null)U(_e);else if(B.startTime<=b)U(_e),B.sortIndex=B.expirationTime,O(x,B);else break;B=S(_e)}}function yh(b){if(io=!1,gh(b),!Pr)if(S(x)!==null)Pr=!0,e(vh);else{var B=S(_e);B!==null&&n(yh,B.startTime-b)}}function vh(b,B){Pr=!1,io&&(io=!1,r()),gu=!0;var z=Qe;try{for(gh(B),Dt=S(x);Dt!==null&&(!(Dt.expirationTime>B)||b&&!t.unstable_shouldYield());){var de=Dt.callback;if(typeof de=="function"){Dt.callback=null,Qe=Dt.priorityLevel;var Me=de(Dt.expirationTime<=B);B=t.unstable_now(),typeof Me=="function"?Dt.callback=Me:Dt===S(x)&&U(x),gh(B)}else U(x);Dt=S(x)}if(Dt!==null)var Dr=!0;else{var xr=S(_e);xr!==null&&n(yh,xr.startTime-B),Dr=!1}return Dr}finally{Dt=null,Qe=z,gu=!1}}var s1=i;t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(b){b.callback=null},t.unstable_continueExecution=function(){Pr||gu||(Pr=!0,e(vh))},t.unstable_getCurrentPriorityLevel=function(){return Qe},t.unstable_getFirstCallbackNode=function(){return S(x)},t.unstable_next=function(b){switch(Qe){case 1:case 2:case 3:var B=3;break;default:B=Qe}var z=Qe;Qe=B;try{return b()}finally{Qe=z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=s1,t.unstable_runWithPriority=function(b,B){switch(b){case 1:case 2:case 3:case 4:case 5:break;default:b=3}var z=Qe;Qe=b;try{return B()}finally{Qe=z}},t.unstable_scheduleCallback=function(b,B,z){var de=t.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?de+z:de):z=de,b){case 1:var Me=-1;break;case 2:Me=250;break;case 5:Me=1073741823;break;case 4:Me=1e4;break;default:Me=5e3}return Me=z+Me,b={id:mh++,callback:B,priorityLevel:b,startTime:z,expirationTime:Me,sortIndex:-1},z>de?(b.sortIndex=z,O(_e,b),S(x)===null&&b===S(_e)&&(io?r():io=!0,n(yh,z-de))):(b.sortIndex=Me,O(x,b),Pr||gu||(Pr=!0,e(vh))),b},t.unstable_wrapCallback=function(b){var B=Qe;return function(){var z=Qe;Qe=B;try{return b.apply(this,arguments)}finally{Qe=z}}}})(Qg);Gg.exports=Qg;/** @license React v17.0.2
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wu=wh.exports,ie=Pg,ke=Gg.exports;function C(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}if(!wu)throw Error(C(227));var Yg=new Set,ao={};function Lr(t,e){xi(t,e),xi(t+"Capture",e)}function xi(t,e){for(ao[t]=e,t=0;t<e.length;t++)Yg.add(e[t])}var wn=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"),m1=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Xg=Object.prototype.hasOwnProperty,Jg={},Zg={};function g1(t){return Xg.call(Zg,t)?!0:Xg.call(Jg,t)?!1:m1.test(t)?Zg[t]=!0:(Jg[t]=!0,!1)}function y1(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function v1(t,e,n,r){if(e===null||typeof e=="undefined"||y1(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function st(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ue={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ue[t]=new st(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ue[e]=new st(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ue[t]=new st(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ue[t]=new st(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ue[t]=new st(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ue[t]=new st(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ue[t]=new st(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ue[t]=new st(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ue[t]=new st(t,5,!1,t.toLowerCase(),null,!1,!1)});var Ch=/[\-:]([a-z])/g;function Nh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Ch,Nh);Ue[e]=new st(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Ch,Nh);Ue[e]=new st(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Ch,Nh);Ue[e]=new st(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ue[t]=new st(t,1,!1,t.toLowerCase(),null,!1,!1)});Ue.xlinkHref=new st("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ue[t]=new st(t,1,!1,t.toLowerCase(),null,!0,!0)});function Rh(t,e,n,r){var i=Ue.hasOwnProperty(e)?Ue[e]:null,s=i!==null?i.type===0:r?!1:!(!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N");s||(v1(e,n,i,r)&&(n=null),r||i===null?g1(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Mr=wu.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,uo=60103,Ur=60106,Vn=60107,bh=60108,lo=60114,Ah=60109,Ph=60110,_u=60112,co=60113,Iu=60120,Eu=60115,Dh=60116,xh=60121,Oh=60128,ey=60129,Lh=60130,Mh=60131;if(typeof Symbol=="function"&&Symbol.for){var Ce=Symbol.for;uo=Ce("react.element"),Ur=Ce("react.portal"),Vn=Ce("react.fragment"),bh=Ce("react.strict_mode"),lo=Ce("react.profiler"),Ah=Ce("react.provider"),Ph=Ce("react.context"),_u=Ce("react.forward_ref"),co=Ce("react.suspense"),Iu=Ce("react.suspense_list"),Eu=Ce("react.memo"),Dh=Ce("react.lazy"),xh=Ce("react.block"),Ce("react.scope"),Oh=Ce("react.opaque.id"),ey=Ce("react.debug_trace_mode"),Lh=Ce("react.offscreen"),Mh=Ce("react.legacy_hidden")}var ty=typeof Symbol=="function"&&Symbol.iterator;function ho(t){return t===null||typeof t!="object"?null:(t=ty&&t[ty]||t["@@iterator"],typeof t=="function"?t:null)}var Uh;function fo(t){if(Uh===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Uh=e&&e[1]||""}return`
`+Uh+t}var $h=!1;function Tu(t,e){if(!t||$h)return"";$h=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a])return`
`+i[o].replace(" at new "," at ");while(1<=o&&0<=a);break}}}finally{$h=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?fo(t):""}function w1(t){switch(t.tag){case 5:return fo(t.type);case 16:return fo("Lazy");case 13:return fo("Suspense");case 19:return fo("SuspenseList");case 0:case 2:case 15:return t=Tu(t.type,!1),t;case 11:return t=Tu(t.type.render,!1),t;case 22:return t=Tu(t.type._render,!1),t;case 1:return t=Tu(t.type,!0),t;default:return""}}function Oi(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Vn:return"Fragment";case Ur:return"Portal";case lo:return"Profiler";case bh:return"StrictMode";case co:return"Suspense";case Iu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Ph:return(t.displayName||"Context")+".Consumer";case Ah:return(t._context.displayName||"Context")+".Provider";case _u:var e=t.render;return e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case Eu:return Oi(t.type);case xh:return Oi(t._render);case Dh:e=t._payload,t=t._init;try{return Oi(t(e))}catch{}}return null}function Bn(t){switch(typeof t){case"boolean":case"number":case"object":case"string":case"undefined":return t;default:return""}}function ny(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function _1(t){var e=ny(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n!="undefined"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Su(t){t._valueTracker||(t._valueTracker=_1(t))}function ry(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=ny(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function ku(t){if(t=t||(typeof document!="undefined"?document:void 0),typeof t=="undefined")return null;try{return t.activeElement||t.body}catch{return t.body}}function Fh(t,e){var n=e.checked;return ie({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:t._wrapperState.initialChecked})}function iy(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Bn(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function sy(t,e){e=e.checked,e!=null&&Rh(t,"checked",e,!1)}function Vh(t,e){sy(t,e);var n=Bn(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Bh(t,e.type,n):e.hasOwnProperty("defaultValue")&&Bh(t,e.type,Bn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function oy(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Bh(t,e,n){(e!=="number"||ku(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}function I1(t){var e="";return wu.Children.forEach(t,function(n){n!=null&&(e+=n)}),e}function qh(t,e){return t=ie({children:void 0},e),(e=I1(e.children))&&(t.children=e),t}function Li(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Bn(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function jh(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(C(91));return ie({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function ay(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(C(92));if(Array.isArray(n)){if(!(1>=n.length))throw Error(C(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Bn(n)}}function uy(t,e){var n=Bn(e.value),r=Bn(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function ly(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}var zh={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};function cy(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Hh(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?cy(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Cu,hy=function(t){return typeof MSApp!="undefined"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!==zh.svg||"innerHTML"in t)t.innerHTML=e;else{for(Cu=Cu||document.createElement("div"),Cu.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Cu.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function po(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var mo={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},E1=["Webkit","ms","Moz","O"];Object.keys(mo).forEach(function(t){E1.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),mo[e]=mo[t]})});function dy(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||mo.hasOwnProperty(t)&&mo[t]?(""+e).trim():e+"px"}function fy(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=dy(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var T1=ie({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Wh(t,e){if(e){if(T1[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(C(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(C(60));if(!(typeof e.dangerouslySetInnerHTML=="object"&&"__html"in e.dangerouslySetInnerHTML))throw Error(C(61))}if(e.style!=null&&typeof e.style!="object")throw Error(C(62))}}function Kh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}function Gh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Qh=null,Mi=null,Ui=null;function py(t){if(t=Oo(t)){if(typeof Qh!="function")throw Error(C(280));var e=t.stateNode;e&&(e=zu(e),Qh(t.stateNode,t.type,e))}}function my(t){Mi?Ui?Ui.push(t):Ui=[t]:Mi=t}function gy(){if(Mi){var t=Mi,e=Ui;if(Ui=Mi=null,py(t),e)for(t=0;t<e.length;t++)py(e[t])}}function Yh(t,e){return t(e)}function yy(t,e,n,r,i){return t(e,n,r,i)}function Xh(){}var vy=Yh,$r=!1,Jh=!1;function Zh(){(Mi!==null||Ui!==null)&&(Xh(),gy())}function S1(t,e,n){if(Jh)return t(e,n);Jh=!0;try{return vy(t,e,n)}finally{Jh=!1,Zh()}}function go(t,e){var n=t.stateNode;if(n===null)return null;var r=zu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(C(231,e,typeof n));return n}var ed=!1;if(wn)try{var yo={};Object.defineProperty(yo,"passive",{get:function(){ed=!0}}),window.addEventListener("test",yo,yo),window.removeEventListener("test",yo,yo)}catch{ed=!1}function k1(t,e,n,r,i,s,o,a,u){var l=Array.prototype.slice.call(arguments,3);try{e.apply(n,l)}catch(c){this.onError(c)}}var vo=!1,Nu=null,Ru=!1,td=null,C1={onError:function(t){vo=!0,Nu=t}};function N1(t,e,n,r,i,s,o,a,u){vo=!1,Nu=null,k1.apply(C1,arguments)}function R1(t,e,n,r,i,s,o,a,u){if(N1.apply(this,arguments),vo){if(vo){var l=Nu;vo=!1,Nu=null}else throw Error(C(198));Ru||(Ru=!0,td=l)}}function Fr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&1026)!=0&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function wy(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function _y(t){if(Fr(t)!==t)throw Error(C(188))}function b1(t){var e=t.alternate;if(!e){if(e=Fr(t),e===null)throw Error(C(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return _y(i),t;if(s===r)return _y(i),e;s=s.sibling}throw Error(C(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(C(189))}}if(n.alternate!==r)throw Error(C(190))}if(n.tag!==3)throw Error(C(188));return n.stateNode.current===n?t:e}function Iy(t){if(t=b1(t),!t)return null;for(var e=t;;){if(e.tag===5||e.tag===6)return e;if(e.child)e.child.return=e,e=e.child;else{if(e===t)break;for(;!e.sibling;){if(!e.return||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}}return null}function Ey(t,e){for(var n=t.alternate;e!==null;){if(e===t||e===n)return!0;e=e.return}return!1}var Ty,nd,Sy,ky,rd=!1,Zt=[],qn=null,jn=null,zn=null,wo=new Map,_o=new Map,Io=[],Cy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function id(t,e,n,r,i){return{blockedOn:t,domEventName:e,eventSystemFlags:n|16,nativeEvent:i,targetContainers:[r]}}function Ny(t,e){switch(t){case"focusin":case"focusout":qn=null;break;case"dragenter":case"dragleave":jn=null;break;case"mouseover":case"mouseout":zn=null;break;case"pointerover":case"pointerout":wo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":_o.delete(e.pointerId)}}function Eo(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t=id(e,n,r,i,s),e!==null&&(e=Oo(e),e!==null&&nd(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function A1(t,e,n,r,i){switch(e){case"focusin":return qn=Eo(qn,t,e,n,r,i),!0;case"dragenter":return jn=Eo(jn,t,e,n,r,i),!0;case"mouseover":return zn=Eo(zn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return wo.set(s,Eo(wo.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,_o.set(s,Eo(_o.get(s)||null,t,e,n,r,i)),!0}return!1}function P1(t){var e=Vr(t.target);if(e!==null){var n=Fr(e);if(n!==null){if(e=n.tag,e===13){if(e=wy(n),e!==null){t.blockedOn=e,ky(t.lanePriority,function(){ke.unstable_runWithPriority(t.priority,function(){Sy(n)})});return}}else if(e===3&&n.stateNode.hydrate){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function bu(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=cd(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n!==null)return e=Oo(n),e!==null&&nd(e),t.blockedOn=n,!1;e.shift()}return!0}function Ry(t,e,n){bu(t)&&n.delete(e)}function D1(){for(rd=!1;0<Zt.length;){var t=Zt[0];if(t.blockedOn!==null){t=Oo(t.blockedOn),t!==null&&Ty(t);break}for(var e=t.targetContainers;0<e.length;){var n=cd(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n!==null){t.blockedOn=n;break}e.shift()}t.blockedOn===null&&Zt.shift()}qn!==null&&bu(qn)&&(qn=null),jn!==null&&bu(jn)&&(jn=null),zn!==null&&bu(zn)&&(zn=null),wo.forEach(Ry),_o.forEach(Ry)}function To(t,e){t.blockedOn===e&&(t.blockedOn=null,rd||(rd=!0,ke.unstable_scheduleCallback(ke.unstable_NormalPriority,D1)))}function by(t){function e(i){return To(i,t)}if(0<Zt.length){To(Zt[0],t);for(var n=1;n<Zt.length;n++){var r=Zt[n];r.blockedOn===t&&(r.blockedOn=null)}}for(qn!==null&&To(qn,t),jn!==null&&To(jn,t),zn!==null&&To(zn,t),wo.forEach(e),_o.forEach(e),n=0;n<Io.length;n++)r=Io[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Io.length&&(n=Io[0],n.blockedOn===null);)P1(n),n.blockedOn===null&&Io.shift()}function Au(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var $i={animationend:Au("Animation","AnimationEnd"),animationiteration:Au("Animation","AnimationIteration"),animationstart:Au("Animation","AnimationStart"),transitionend:Au("Transition","TransitionEnd")},sd={},Ay={};wn&&(Ay=document.createElement("div").style,"AnimationEvent"in window||(delete $i.animationend.animation,delete $i.animationiteration.animation,delete $i.animationstart.animation),"TransitionEvent"in window||delete $i.transitionend.transition);function Pu(t){if(sd[t])return sd[t];if(!$i[t])return t;var e=$i[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Ay)return sd[t]=e[n];return t}var Py=Pu("animationend"),Dy=Pu("animationiteration"),xy=Pu("animationstart"),Oy=Pu("transitionend"),Ly=new Map,od=new Map,x1=["abort","abort",Py,"animationEnd",Dy,"animationIteration",xy,"animationStart","canplay","canPlay","canplaythrough","canPlayThrough","durationchange","durationChange","emptied","emptied","encrypted","encrypted","ended","ended","error","error","gotpointercapture","gotPointerCapture","load","load","loadeddata","loadedData","loadedmetadata","loadedMetadata","loadstart","loadStart","lostpointercapture","lostPointerCapture","playing","playing","progress","progress","seeking","seeking","stalled","stalled","suspend","suspend","timeupdate","timeUpdate",Oy,"transitionEnd","waiting","waiting"];function ad(t,e){for(var n=0;n<t.length;n+=2){var r=t[n],i=t[n+1];i="on"+(i[0].toUpperCase()+i.slice(1)),od.set(r,e),Ly.set(r,i),Lr(i,[r])}}var O1=ke.unstable_now;O1();var J=8;function Fi(t){if((1&t)!=0)return J=15,1;if((2&t)!=0)return J=14,2;if((4&t)!=0)return J=13,4;var e=24&t;return e!==0?(J=12,e):(t&32)!=0?(J=11,32):(e=192&t,e!==0?(J=10,e):(t&256)!=0?(J=9,256):(e=3584&t,e!==0?(J=8,e):(t&4096)!=0?(J=7,4096):(e=4186112&t,e!==0?(J=6,e):(e=62914560&t,e!==0?(J=5,e):t&67108864?(J=4,67108864):(t&134217728)!=0?(J=3,134217728):(e=805306368&t,e!==0?(J=2,e):(1073741824&t)!=0?(J=1,1073741824):(J=8,t))))))}function L1(t){switch(t){case 99:return 15;case 98:return 10;case 97:case 96:return 8;case 95:return 2;default:return 0}}function M1(t){switch(t){case 15:case 14:return 99;case 13:case 12:case 11:case 10:return 98;case 9:case 8:case 7:case 6:case 4:case 5:return 97;case 3:case 2:case 1:return 95;case 0:return 90;default:throw Error(C(358,t))}}function So(t,e){var n=t.pendingLanes;if(n===0)return J=0;var r=0,i=0,s=t.expiredLanes,o=t.suspendedLanes,a=t.pingedLanes;if(s!==0)r=s,i=J=15;else if(s=n&134217727,s!==0){var u=s&~o;u!==0?(r=Fi(u),i=J):(a&=s,a!==0&&(r=Fi(a),i=J))}else s=n&~o,s!==0?(r=Fi(s),i=J):a!==0&&(r=Fi(a),i=J);if(r===0)return 0;if(r=31-Hn(r),r=n&((0>r?0:1<<r)<<1)-1,e!==0&&e!==r&&(e&o)==0){if(Fi(e),i<=J)return e;J=i}if(e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Hn(e),i=1<<n,r|=t[n],e&=~i;return r}function My(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Du(t,e){switch(t){case 15:return 1;case 14:return 2;case 12:return t=Vi(24&~e),t===0?Du(10,e):t;case 10:return t=Vi(192&~e),t===0?Du(8,e):t;case 8:return t=Vi(3584&~e),t===0&&(t=Vi(4186112&~e),t===0&&(t=512)),t;case 2:return e=Vi(805306368&~e),e===0&&(e=268435456),e}throw Error(C(358,t))}function Vi(t){return t&-t}function ud(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function xu(t,e,n){t.pendingLanes|=e;var r=e-1;t.suspendedLanes&=r,t.pingedLanes&=r,t=t.eventTimes,e=31-Hn(e),t[e]=n}var Hn=Math.clz32?Math.clz32:F1,U1=Math.log,$1=Math.LN2;function F1(t){return t===0?32:31-(U1(t)/$1|0)|0}var V1=ke.unstable_UserBlockingPriority,B1=ke.unstable_runWithPriority,Ou=!0;function q1(t,e,n,r){$r||Xh();var i=ld,s=$r;$r=!0;try{yy(i,t,e,n,r)}finally{($r=s)||Zh()}}function j1(t,e,n,r){B1(V1,ld.bind(null,t,e,n,r))}function ld(t,e,n,r){if(Ou){var i;if((i=(e&4)==0)&&0<Zt.length&&-1<Cy.indexOf(t))t=id(null,t,e,n,r),Zt.push(t);else{var s=cd(t,e,n,r);if(s===null)i&&Ny(t,r);else{if(i){if(-1<Cy.indexOf(t)){t=id(s,t,e,n,r),Zt.push(t);return}if(A1(s,t,e,n,r))return;Ny(t,r)}dv(t,e,r,null,n)}}}}function cd(t,e,n,r){var i=Gh(r);if(i=Vr(i),i!==null){var s=Fr(i);if(s===null)i=null;else{var o=s.tag;if(o===13){if(i=wy(s),i!==null)return i;i=null}else if(o===3){if(s.stateNode.hydrate)return s.tag===3?s.stateNode.containerInfo:null;i=null}else s!==i&&(i=null)}}return dv(t,e,r,i,n),null}var Wn=null,hd=null,Lu=null;function Uy(){if(Lu)return Lu;var t,e=hd,n=e.length,r,i="value"in Wn?Wn.value:Wn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Lu=i.slice(t,1<r?1-r:void 0)}function Mu(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Uu(){return!0}function $y(){return!1}function Tt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Uu:$y,this.isPropagationStopped=$y,this}return ie(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Uu)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Uu)},persist:function(){},isPersistent:Uu}),e}var Bi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},dd=Tt(Bi),ko=ie({},Bi,{view:0,detail:0}),z1=Tt(ko),fd,pd,Co,$u=ie({},ko,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:gd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Co&&(Co&&t.type==="mousemove"?(fd=t.screenX-Co.screenX,pd=t.screenY-Co.screenY):pd=fd=0,Co=t),fd)},movementY:function(t){return"movementY"in t?t.movementY:pd}}),Fy=Tt($u),H1=ie({},$u,{dataTransfer:0}),W1=Tt(H1),K1=ie({},ko,{relatedTarget:0}),md=Tt(K1),G1=ie({},Bi,{animationName:0,elapsedTime:0,pseudoElement:0}),Q1=Tt(G1),Y1=ie({},Bi,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),X1=Tt(Y1),J1=ie({},Bi,{data:0}),Vy=Tt(J1),Z1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ek={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},tk={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function nk(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=tk[t])?!!e[t]:!1}function gd(){return nk}var rk=ie({},ko,{key:function(t){if(t.key){var e=Z1[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Mu(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?ek[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:gd,charCode:function(t){return t.type==="keypress"?Mu(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Mu(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),ik=Tt(rk),sk=ie({},$u,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),By=Tt(sk),ok=ie({},ko,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:gd}),ak=Tt(ok),uk=ie({},Bi,{propertyName:0,elapsedTime:0,pseudoElement:0}),lk=Tt(uk),ck=ie({},$u,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),hk=Tt(ck),dk=[9,13,27,32],yd=wn&&"CompositionEvent"in window,No=null;wn&&"documentMode"in document&&(No=document.documentMode);var fk=wn&&"TextEvent"in window&&!No,qy=wn&&(!yd||No&&8<No&&11>=No),jy=String.fromCharCode(32),zy=!1;function Hy(t,e){switch(t){case"keyup":return dk.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Wy(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var qi=!1;function pk(t,e){switch(t){case"compositionend":return Wy(e);case"keypress":return e.which!==32?null:(zy=!0,jy);case"textInput":return t=e.data,t===jy&&zy?null:t;default:return null}}function mk(t,e){if(qi)return t==="compositionend"||!yd&&Hy(t,e)?(t=Uy(),Lu=hd=Wn=null,qi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return qy&&e.locale!=="ko"?null:e.data;default:return null}}var gk={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ky(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!gk[t.type]:e==="textarea"}function Gy(t,e,n,r){my(r),e=Vu(e,"onChange"),0<e.length&&(n=new dd("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Ro=null,bo=null;function yk(t){av(t,0)}function Fu(t){var e=Ki(t);if(ry(e))return t}function vk(t,e){if(t==="change")return e}var Qy=!1;if(wn){var vd;if(wn){var wd="oninput"in document;if(!wd){var Yy=document.createElement("div");Yy.setAttribute("oninput","return;"),wd=typeof Yy.oninput=="function"}vd=wd}else vd=!1;Qy=vd&&(!document.documentMode||9<document.documentMode)}function Xy(){Ro&&(Ro.detachEvent("onpropertychange",Jy),bo=Ro=null)}function Jy(t){if(t.propertyName==="value"&&Fu(bo)){var e=[];if(Gy(e,bo,t,Gh(t)),t=yk,$r)t(e);else{$r=!0;try{Yh(t,e)}finally{$r=!1,Zh()}}}}function wk(t,e,n){t==="focusin"?(Xy(),Ro=e,bo=n,Ro.attachEvent("onpropertychange",Jy)):t==="focusout"&&Xy()}function _k(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Fu(bo)}function Ik(t,e){if(t==="click")return Fu(e)}function Ek(t,e){if(t==="input"||t==="change")return Fu(e)}function Tk(t,e){return t===e&&(t!==0||1/t==1/e)||t!==t&&e!==e}var Ot=typeof Object.is=="function"?Object.is:Tk,Sk=Object.prototype.hasOwnProperty;function Ao(t,e){if(Ot(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++)if(!Sk.call(e,n[r])||!Ot(t[n[r]],e[n[r]]))return!1;return!0}function Zy(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function ev(t,e){var n=Zy(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Zy(n)}}function tv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?tv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function nv(){for(var t=window,e=ku();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=ku(t.document)}return e}function _d(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var kk=wn&&"documentMode"in document&&11>=document.documentMode,ji=null,Id=null,Po=null,Ed=!1;function rv(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ed||ji==null||ji!==ku(r)||(r=ji,"selectionStart"in r&&_d(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Po&&Ao(Po,r)||(Po=r,r=Vu(Id,"onSelect"),0<r.length&&(e=new dd("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=ji)))}ad("cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "),0);ad("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "),1);ad(x1,2);for(var iv="change selectionchange textInput compositionstart compositionend compositionupdate".split(" "),Td=0;Td<iv.length;Td++)od.set(iv[Td],0);xi("onMouseEnter",["mouseout","mouseover"]);xi("onMouseLeave",["mouseout","mouseover"]);xi("onPointerEnter",["pointerout","pointerover"]);xi("onPointerLeave",["pointerout","pointerover"]);Lr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Lr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Lr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Lr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Lr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Lr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Do="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),sv=new Set("cancel close invalid load scroll toggle".split(" ").concat(Do));function ov(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,R1(r,e,void 0,t),t.currentTarget=null}function av(t,e){e=(e&4)!=0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],u=a.instance,l=a.currentTarget;if(a=a.listener,u!==s&&i.isPropagationStopped())break e;ov(i,a,l),s=u}else for(o=0;o<r.length;o++){if(a=r[o],u=a.instance,l=a.currentTarget,a=a.listener,u!==s&&i.isPropagationStopped())break e;ov(i,a,l),s=u}}}if(Ru)throw t=td,Ru=!1,td=null,t}function Z(t,e){var n=vv(e),r=t+"__bubble";n.has(r)||(hv(e,t,2,!1),n.add(r))}var uv="_reactListening"+Math.random().toString(36).slice(2);function lv(t){t[uv]||(t[uv]=!0,Yg.forEach(function(e){sv.has(e)||cv(e,!1,t,null),cv(e,!0,t,null)}))}function cv(t,e,n,r){var i=4<arguments.length&&arguments[4]!==void 0?arguments[4]:0,s=n;if(t==="selectionchange"&&n.nodeType!==9&&(s=n.ownerDocument),r!==null&&!e&&sv.has(t)){if(t!=="scroll")return;i|=2,s=r}var o=vv(s),a=t+"__"+(e?"capture":"bubble");o.has(a)||(e&&(i|=4),hv(s,t,i,e),o.add(a))}function hv(t,e,n,r){var i=od.get(e);switch(i===void 0?2:i){case 0:i=q1;break;case 1:i=j1;break;default:i=ld}n=i.bind(null,e,n,t),i=void 0,!ed||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function dv(t,e,n,r,i){var s=r;if((e&1)==0&&(e&2)==0&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Vr(a),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}a=a.parentNode}}r=r.return}S1(function(){var l=s,c=Gh(n),h=[];e:{var d=Ly.get(t);if(d!==void 0){var m=dd,y=t;switch(t){case"keypress":if(Mu(n)===0)break e;case"keydown":case"keyup":m=ik;break;case"focusin":y="focus",m=md;break;case"focusout":y="blur",m=md;break;case"beforeblur":case"afterblur":m=md;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Fy;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=W1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=ak;break;case Py:case Dy:case xy:m=Q1;break;case Oy:m=lk;break;case"scroll":m=z1;break;case"wheel":m=hk;break;case"copy":case"cut":case"paste":m=X1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=By}var I=(e&4)!=0,p=!I&&t==="scroll",f=I?d!==null?d+"Capture":null:d;I=[];for(var g=l,v;g!==null;){v=g;var w=v.stateNode;if(v.tag===5&&w!==null&&(v=w,f!==null&&(w=go(g,f),w!=null&&I.push(xo(g,w,v)))),p)break;g=g.return}0<I.length&&(d=new m(d,y,null,n,c),h.push({event:d,listeners:I}))}}if((e&7)==0){e:{if(d=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",d&&(e&16)==0&&(y=n.relatedTarget||n.fromElement)&&(Vr(y)||y[Wi]))break e;if((m||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,m?(y=n.relatedTarget||n.toElement,m=l,y=y?Vr(y):null,y!==null&&(p=Fr(y),y!==p||y.tag!==5&&y.tag!==6)&&(y=null)):(m=null,y=l),m!==y)){if(I=Fy,w="onMouseLeave",f="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(I=By,w="onPointerLeave",f="onPointerEnter",g="pointer"),p=m==null?d:Ki(m),v=y==null?d:Ki(y),d=new I(w,g+"leave",m,n,c),d.target=p,d.relatedTarget=v,w=null,Vr(c)===l&&(I=new I(f,g+"enter",y,n,c),I.target=v,I.relatedTarget=p,w=I),p=w,m&&y)t:{for(I=m,f=y,g=0,v=I;v;v=zi(v))g++;for(v=0,w=f;w;w=zi(w))v++;for(;0<g-v;)I=zi(I),g--;for(;0<v-g;)f=zi(f),v--;for(;g--;){if(I===f||f!==null&&I===f.alternate)break t;I=zi(I),f=zi(f)}I=null}else I=null;m!==null&&fv(h,d,m,I,!1),y!==null&&p!==null&&fv(h,p,y,I,!0)}}e:{if(d=l?Ki(l):window,m=d.nodeName&&d.nodeName.toLowerCase(),m==="select"||m==="input"&&d.type==="file")var O=vk;else if(Ky(d))if(Qy)O=Ek;else{O=_k;var S=wk}else(m=d.nodeName)&&m.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(O=Ik);if(O&&(O=O(t,l))){Gy(h,O,n,c);break e}S&&S(t,d,l),t==="focusout"&&(S=d._wrapperState)&&S.controlled&&d.type==="number"&&Bh(d,"number",d.value)}switch(S=l?Ki(l):window,t){case"focusin":(Ky(S)||S.contentEditable==="true")&&(ji=S,Id=l,Po=null);break;case"focusout":Po=Id=ji=null;break;case"mousedown":Ed=!0;break;case"contextmenu":case"mouseup":case"dragend":Ed=!1,rv(h,n,c);break;case"selectionchange":if(kk)break;case"keydown":case"keyup":rv(h,n,c)}var U;if(yd)e:{switch(t){case"compositionstart":var $="onCompositionStart";break e;case"compositionend":$="onCompositionEnd";break e;case"compositionupdate":$="onCompositionUpdate";break e}$=void 0}else qi?Hy(t,n)&&($="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&($="onCompositionStart");$&&(qy&&n.locale!=="ko"&&(qi||$!=="onCompositionStart"?$==="onCompositionEnd"&&qi&&(U=Uy()):(Wn=c,hd="value"in Wn?Wn.value:Wn.textContent,qi=!0)),S=Vu(l,$),0<S.length&&($=new Vy($,t,null,n,c),h.push({event:$,listeners:S}),U?$.data=U:(U=Wy(n),U!==null&&($.data=U)))),(U=fk?pk(t,n):mk(t,n))&&(l=Vu(l,"onBeforeInput"),0<l.length&&(c=new Vy("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:l}),c.data=U))}av(h,e)})}function xo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Vu(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=go(t,n),s!=null&&r.unshift(xo(t,s,i)),s=go(t,e),s!=null&&r.push(xo(t,s,i))),t=t.return}return r}function zi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function fv(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,u=a.alternate,l=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&l!==null&&(a=l,i?(u=go(n,s),u!=null&&o.unshift(xo(n,u,a))):i||(u=go(n,s),u!=null&&o.push(xo(n,u,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}function Bu(){}var Sd=null,kd=null;function pv(t,e){switch(t){case"button":case"input":case"select":case"textarea":return!!e.autoFocus}return!1}function Cd(t,e){return t==="textarea"||t==="option"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var mv=typeof setTimeout=="function"?setTimeout:void 0,Ck=typeof clearTimeout=="function"?clearTimeout:void 0;function Nd(t){t.nodeType===1?t.textContent="":t.nodeType===9&&(t=t.body,t!=null&&(t.textContent=""))}function Hi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break}return t}function gv(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Rd=0;function Nk(t){return{$$typeof:Oh,toString:t,valueOf:t}}var qu=Math.random().toString(36).slice(2),Kn="__reactFiber$"+qu,ju="__reactProps$"+qu,Wi="__reactContainer$"+qu,yv="__reactEvents$"+qu;function Vr(t){var e=t[Kn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Wi]||n[Kn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=gv(t);t!==null;){if(n=t[Kn])return n;t=gv(t)}return e}t=n,n=t.parentNode}return null}function Oo(t){return t=t[Kn]||t[Wi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ki(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(C(33))}function zu(t){return t[ju]||null}function vv(t){var e=t[yv];return e===void 0&&(e=t[yv]=new Set),e}var bd=[],Gi=-1;function Gn(t){return{current:t}}function ee(t){0>Gi||(t.current=bd[Gi],bd[Gi]=null,Gi--)}function ae(t,e){Gi++,bd[Gi]=t.current,t.current=e}var Qn={},Ye=Gn(Qn),mt=Gn(!1),Br=Qn;function Qi(t,e){var n=t.type.contextTypes;if(!n)return Qn;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function gt(t){return t=t.childContextTypes,t!=null}function Hu(){ee(mt),ee(Ye)}function wv(t,e,n){if(Ye.current!==Qn)throw Error(C(168));ae(Ye,e),ae(mt,n)}function _v(t,e,n){var r=t.stateNode;if(t=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(C(108,Oi(e)||"Unknown",i));return ie({},n,r)}function Wu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Qn,Br=Ye.current,ae(Ye,t),ae(mt,mt.current),!0}function Iv(t,e,n){var r=t.stateNode;if(!r)throw Error(C(169));n?(t=_v(t,e,Br),r.__reactInternalMemoizedMergedChildContext=t,ee(mt),ee(Ye),ae(Ye,t)):ee(mt),ae(mt,n)}var Ad=null,qr=null,Rk=ke.unstable_runWithPriority,Pd=ke.unstable_scheduleCallback,Dd=ke.unstable_cancelCallback,bk=ke.unstable_shouldYield,Ev=ke.unstable_requestPaint,xd=ke.unstable_now,Ak=ke.unstable_getCurrentPriorityLevel,Ku=ke.unstable_ImmediatePriority,Tv=ke.unstable_UserBlockingPriority,Sv=ke.unstable_NormalPriority,kv=ke.unstable_LowPriority,Cv=ke.unstable_IdlePriority,Od={},Pk=Ev!==void 0?Ev:function(){},_n=null,Gu=null,Ld=!1,Nv=xd(),Xe=1e4>Nv?xd:function(){return xd()-Nv};function Yi(){switch(Ak()){case Ku:return 99;case Tv:return 98;case Sv:return 97;case kv:return 96;case Cv:return 95;default:throw Error(C(332))}}function Rv(t){switch(t){case 99:return Ku;case 98:return Tv;case 97:return Sv;case 96:return kv;case 95:return Cv;default:throw Error(C(332))}}function jr(t,e){return t=Rv(t),Rk(t,e)}function Lo(t,e,n){return t=Rv(t),Pd(t,e,n)}function en(){if(Gu!==null){var t=Gu;Gu=null,Dd(t)}bv()}function bv(){if(!Ld&&_n!==null){Ld=!0;var t=0;try{var e=_n;jr(99,function(){for(;t<e.length;t++){var n=e[t];do n=n(!0);while(n!==null)}}),_n=null}catch(n){throw _n!==null&&(_n=_n.slice(t+1)),Pd(Ku,en),n}finally{Ld=!1}}}var Dk=Mr.ReactCurrentBatchConfig;function Wt(t,e){if(t&&t.defaultProps){e=ie({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Qu=Gn(null),Yu=null,Xi=null,Xu=null;function Md(){Xu=Xi=Yu=null}function Ud(t){var e=Qu.current;ee(Qu),t.type._context._currentValue=e}function Av(t,e){for(;t!==null;){var n=t.alternate;if((t.childLanes&e)===e){if(n===null||(n.childLanes&e)===e)break;n.childLanes|=e}else t.childLanes|=e,n!==null&&(n.childLanes|=e);t=t.return}}function Ji(t,e){Yu=t,Xu=Xi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&e)!=0&&(Kt=!0),t.firstContext=null)}function Lt(t,e){if(Xu!==t&&e!==!1&&e!==0)if((typeof e!="number"||e===1073741823)&&(Xu=t,e=1073741823),e={context:t,observedBits:e,next:null},Xi===null){if(Yu===null)throw Error(C(308));Xi=e,Yu.dependencies={lanes:0,firstContext:e,responders:null}}else Xi=Xi.next=e;return t._currentValue}var Yn=!1;function $d(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null},effects:null}}function Pv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Xn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Jn(t,e){if(t=t.updateQueue,t!==null){t=t.shared;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}}function Dv(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Mo(t,e,n,r){var i=t.updateQueue;Yn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var u=a,l=u.next;u.next=null,o===null?s=l:o.next=l,o=u;var c=t.alternate;if(c!==null){c=c.updateQueue;var h=c.lastBaseUpdate;h!==o&&(h===null?c.firstBaseUpdate=l:h.next=l,c.lastBaseUpdate=u)}}if(s!==null){h=i.baseState,o=0,c=l=u=null;do{a=s.lane;var d=s.eventTime;if((r&a)===a){c!==null&&(c=c.next={eventTime:d,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var m=t,y=s;switch(a=e,d=n,y.tag){case 1:if(m=y.payload,typeof m=="function"){h=m.call(d,h,a);break e}h=m;break e;case 3:m.flags=m.flags&-4097|64;case 0:if(m=y.payload,a=typeof m=="function"?m.call(d,h,a):m,a==null)break e;h=ie({},h,a);break e;case 2:Yn=!0}}s.callback!==null&&(t.flags|=32,a=i.effects,a===null?i.effects=[s]:a.push(s))}else d={eventTime:d,lane:a,tag:s.tag,payload:s.payload,callback:s.callback,next:null},c===null?(l=c=d,u=h):c=c.next=d,o|=a;if(s=s.next,s===null){if(a=i.shared.pending,a===null)break;s=a.next,a.next=null,i.lastBaseUpdate=a,i.shared.pending=null}}while(1);c===null&&(u=h),i.baseState=u,i.firstBaseUpdate=l,i.lastBaseUpdate=c,Go|=o,t.lanes=o,t.memoizedState=h}}function xv(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(C(191,i));i.call(r)}}}var Ov=new wu.Component().refs;function Ju(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ie({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Zu={isMounted:function(t){return(t=t._reactInternals)?Fr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=St(),i=tr(t),s=Xn(r,i);s.payload=e,n!=null&&(s.callback=n),Jn(t,s),nr(t,i,r)},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=St(),i=tr(t),s=Xn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),Jn(t,s),nr(t,i,r)},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=St(),r=tr(t),i=Xn(n,r);i.tag=2,e!=null&&(i.callback=e),Jn(t,i),nr(t,r,n)}};function Lv(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Ao(n,r)||!Ao(i,s):!0}function Mv(t,e,n){var r=!1,i=Qn,s=e.contextType;return typeof s=="object"&&s!==null?s=Lt(s):(i=gt(e)?Br:Ye.current,r=e.contextTypes,s=(r=r!=null)?Qi(t,i):Qn),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Zu,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Uv(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Zu.enqueueReplaceState(e,e.state,null)}function Fd(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=Ov,$d(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Lt(s):(s=gt(e)?Br:Ye.current,i.context=Qi(t,s)),Mo(t,n,i,r),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Ju(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Zu.enqueueReplaceState(i,i.state,null),Mo(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4)}var el=Array.isArray;function Uo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(C(309));var r=n.stateNode}if(!r)throw Error(C(147,t));var i=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===i?e.ref:(e=function(s){var o=r.refs;o===Ov&&(o=r.refs={}),s===null?delete o[i]:o[i]=s},e._stringRef=i,e)}if(typeof t!="string")throw Error(C(284));if(!n._owner)throw Error(C(290,t))}return t}function tl(t,e){if(t.type!=="textarea")throw Error(C(31,Object.prototype.toString.call(e)==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":e))}function $v(t){function e(p,f){if(t){var g=p.lastEffect;g!==null?(g.nextEffect=f,p.lastEffect=f):p.firstEffect=p.lastEffect=f,f.nextEffect=null,f.flags=8}}function n(p,f){if(!t)return null;for(;f!==null;)e(p,f),f=f.sibling;return null}function r(p,f){for(p=new Map;f!==null;)f.key!==null?p.set(f.key,f):p.set(f.index,f),f=f.sibling;return p}function i(p,f){return p=sr(p,f),p.index=0,p.sibling=null,p}function s(p,f,g){return p.index=g,t?(g=p.alternate,g!==null?(g=g.index,g<f?(p.flags=2,f):g):(p.flags=2,f)):f}function o(p){return t&&p.alternate===null&&(p.flags=2),p}function a(p,f,g,v){return f===null||f.tag!==6?(f=Ef(g,p.mode,v),f.return=p,f):(f=i(f,g),f.return=p,f)}function u(p,f,g,v){return f!==null&&f.elementType===g.type?(v=i(f,g.props),v.ref=Uo(p,f,g),v.return=p,v):(v=wl(g.type,g.key,g.props,null,p.mode,v),v.ref=Uo(p,f,g),v.return=p,v)}function l(p,f,g,v){return f===null||f.tag!==4||f.stateNode.containerInfo!==g.containerInfo||f.stateNode.implementation!==g.implementation?(f=Tf(g,p.mode,v),f.return=p,f):(f=i(f,g.children||[]),f.return=p,f)}function c(p,f,g,v,w){return f===null||f.tag!==7?(f=os(g,p.mode,v,w),f.return=p,f):(f=i(f,g),f.return=p,f)}function h(p,f,g){if(typeof f=="string"||typeof f=="number")return f=Ef(""+f,p.mode,g),f.return=p,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case uo:return g=wl(f.type,f.key,f.props,null,p.mode,g),g.ref=Uo(p,null,f),g.return=p,g;case Ur:return f=Tf(f,p.mode,g),f.return=p,f}if(el(f)||ho(f))return f=os(f,p.mode,g,null),f.return=p,f;tl(p,f)}return null}function d(p,f,g,v){var w=f!==null?f.key:null;if(typeof g=="string"||typeof g=="number")return w!==null?null:a(p,f,""+g,v);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case uo:return g.key===w?g.type===Vn?c(p,f,g.props.children,v,w):u(p,f,g,v):null;case Ur:return g.key===w?l(p,f,g,v):null}if(el(g)||ho(g))return w!==null?null:c(p,f,g,v,null);tl(p,g)}return null}function m(p,f,g,v,w){if(typeof v=="string"||typeof v=="number")return p=p.get(g)||null,a(f,p,""+v,w);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case uo:return p=p.get(v.key===null?g:v.key)||null,v.type===Vn?c(f,p,v.props.children,w,v.key):u(f,p,v,w);case Ur:return p=p.get(v.key===null?g:v.key)||null,l(f,p,v,w)}if(el(v)||ho(v))return p=p.get(g)||null,c(f,p,v,w,null);tl(f,v)}return null}function y(p,f,g,v){for(var w=null,O=null,S=f,U=f=0,$=null;S!==null&&U<g.length;U++){S.index>U?($=S,S=null):$=S.sibling;var x=d(p,S,g[U],v);if(x===null){S===null&&(S=$);break}t&&S&&x.alternate===null&&e(p,S),f=s(x,f,U),O===null?w=x:O.sibling=x,O=x,S=$}if(U===g.length)return n(p,S),w;if(S===null){for(;U<g.length;U++)S=h(p,g[U],v),S!==null&&(f=s(S,f,U),O===null?w=S:O.sibling=S,O=S);return w}for(S=r(p,S);U<g.length;U++)$=m(S,p,U,g[U],v),$!==null&&(t&&$.alternate!==null&&S.delete($.key===null?U:$.key),f=s($,f,U),O===null?w=$:O.sibling=$,O=$);return t&&S.forEach(function(_e){return e(p,_e)}),w}function I(p,f,g,v){var w=ho(g);if(typeof w!="function")throw Error(C(150));if(g=w.call(g),g==null)throw Error(C(151));for(var O=w=null,S=f,U=f=0,$=null,x=g.next();S!==null&&!x.done;U++,x=g.next()){S.index>U?($=S,S=null):$=S.sibling;var _e=d(p,S,x.value,v);if(_e===null){S===null&&(S=$);break}t&&S&&_e.alternate===null&&e(p,S),f=s(_e,f,U),O===null?w=_e:O.sibling=_e,O=_e,S=$}if(x.done)return n(p,S),w;if(S===null){for(;!x.done;U++,x=g.next())x=h(p,x.value,v),x!==null&&(f=s(x,f,U),O===null?w=x:O.sibling=x,O=x);return w}for(S=r(p,S);!x.done;U++,x=g.next())x=m(S,p,U,x.value,v),x!==null&&(t&&x.alternate!==null&&S.delete(x.key===null?U:x.key),f=s(x,f,U),O===null?w=x:O.sibling=x,O=x);return t&&S.forEach(function(mh){return e(p,mh)}),w}return function(p,f,g,v){var w=typeof g=="object"&&g!==null&&g.type===Vn&&g.key===null;w&&(g=g.props.children);var O=typeof g=="object"&&g!==null;if(O)switch(g.$$typeof){case uo:e:{for(O=g.key,w=f;w!==null;){if(w.key===O){switch(w.tag){case 7:if(g.type===Vn){n(p,w.sibling),f=i(w,g.props.children),f.return=p,p=f;break e}break;default:if(w.elementType===g.type){n(p,w.sibling),f=i(w,g.props),f.ref=Uo(p,w,g),f.return=p,p=f;break e}}n(p,w);break}else e(p,w);w=w.sibling}g.type===Vn?(f=os(g.props.children,p.mode,v,g.key),f.return=p,p=f):(v=wl(g.type,g.key,g.props,null,p.mode,v),v.ref=Uo(p,f,g),v.return=p,p=v)}return o(p);case Ur:e:{for(w=g.key;f!==null;){if(f.key===w)if(f.tag===4&&f.stateNode.containerInfo===g.containerInfo&&f.stateNode.implementation===g.implementation){n(p,f.sibling),f=i(f,g.children||[]),f.return=p,p=f;break e}else{n(p,f);break}else e(p,f);f=f.sibling}f=Tf(g,p.mode,v),f.return=p,p=f}return o(p)}if(typeof g=="string"||typeof g=="number")return g=""+g,f!==null&&f.tag===6?(n(p,f.sibling),f=i(f,g),f.return=p,p=f):(n(p,f),f=Ef(g,p.mode,v),f.return=p,p=f),o(p);if(el(g))return y(p,f,g,v);if(ho(g))return I(p,f,g,v);if(O&&tl(p,g),typeof g=="undefined"&&!w)switch(p.tag){case 1:case 22:case 0:case 11:case 15:throw Error(C(152,Oi(p.type)||"Component"))}return n(p,f)}}var nl=$v(!0),Fv=$v(!1),$o={},tn=Gn($o),Fo=Gn($o),Vo=Gn($o);function zr(t){if(t===$o)throw Error(C(174));return t}function Vd(t,e){switch(ae(Vo,e),ae(Fo,t),ae(tn,$o),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Hh(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Hh(e,t)}ee(tn),ae(tn,e)}function Zi(){ee(tn),ee(Fo),ee(Vo)}function Vv(t){zr(Vo.current);var e=zr(tn.current),n=Hh(e,t.type);e!==n&&(ae(Fo,t),ae(tn,n))}function Bd(t){Fo.current===t&&(ee(tn),ee(Fo))}var ue=Gn(0);function rl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&64)!=0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var In=null,Zn=null,nn=!1;function Bv(t,e){var n=$t(5,null,null,0);n.elementType="DELETED",n.type="DELETED",n.stateNode=e,n.return=t,n.flags=8,t.lastEffect!==null?(t.lastEffect.nextEffect=n,t.lastEffect=n):t.firstEffect=t.lastEffect=n}function qv(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,!0):!1;case 13:return!1;default:return!1}}function qd(t){if(nn){var e=Zn;if(e){var n=e;if(!qv(t,e)){if(e=Hi(n.nextSibling),!e||!qv(t,e)){t.flags=t.flags&-1025|2,nn=!1,In=t;return}Bv(In,n)}In=t,Zn=Hi(e.firstChild)}else t.flags=t.flags&-1025|2,nn=!1,In=t}}function jv(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;In=t}function il(t){if(t!==In)return!1;if(!nn)return jv(t),nn=!0,!1;var e=t.type;if(t.tag!==5||e!=="head"&&e!=="body"&&!Cd(e,t.memoizedProps))for(e=Zn;e;)Bv(t,e),e=Hi(e.nextSibling);if(jv(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(C(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Zn=Hi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Zn=null}}else Zn=In?Hi(t.stateNode.nextSibling):null;return!0}function jd(){Zn=In=null,nn=!1}var es=[];function zd(){for(var t=0;t<es.length;t++)es[t]._workInProgressVersionPrimary=null;es.length=0}var Bo=Mr.ReactCurrentDispatcher,Mt=Mr.ReactCurrentBatchConfig,qo=0,fe=null,Je=null,$e=null,sl=!1,jo=!1;function yt(){throw Error(C(321))}function Hd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Ot(t[n],e[n]))return!1;return!0}function Wd(t,e,n,r,i,s){if(qo=s,fe=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Bo.current=t===null||t.memoizedState===null?Ok:Lk,t=n(r,i),jo){s=0;do{if(jo=!1,!(25>s))throw Error(C(301));s+=1,$e=Je=null,e.updateQueue=null,Bo.current=Mk,t=n(r,i)}while(jo)}if(Bo.current=ll,e=Je!==null&&Je.next!==null,qo=0,$e=Je=fe=null,sl=!1,e)throw Error(C(300));return t}function Hr(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return $e===null?fe.memoizedState=$e=t:$e=$e.next=t,$e}function Wr(){if(Je===null){var t=fe.alternate;t=t!==null?t.memoizedState:null}else t=Je.next;var e=$e===null?fe.memoizedState:$e.next;if(e!==null)$e=e,Je=t;else{if(t===null)throw Error(C(310));Je=t,t={memoizedState:Je.memoizedState,baseState:Je.baseState,baseQueue:Je.baseQueue,queue:Je.queue,next:null},$e===null?fe.memoizedState=$e=t:$e=$e.next=t}return $e}function rn(t,e){return typeof e=="function"?e(t):e}function zo(t){var e=Wr(),n=e.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=t;var r=Je,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){i=i.next,r=r.baseState;var a=o=s=null,u=i;do{var l=u.lane;if((qo&l)===l)a!==null&&(a=a.next={lane:0,action:u.action,eagerReducer:u.eagerReducer,eagerState:u.eagerState,next:null}),r=u.eagerReducer===t?u.eagerState:t(r,u.action);else{var c={lane:l,action:u.action,eagerReducer:u.eagerReducer,eagerState:u.eagerState,next:null};a===null?(o=a=c,s=r):a=a.next=c,fe.lanes|=l,Go|=l}u=u.next}while(u!==null&&u!==i);a===null?s=r:a.next=o,Ot(r,e.memoizedState)||(Kt=!0),e.memoizedState=r,e.baseState=s,e.baseQueue=a,n.lastRenderedState=r}return[e.memoizedState,n.dispatch]}function Ho(t){var e=Wr(),n=e.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Ot(s,e.memoizedState)||(Kt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function zv(t,e,n){var r=e._getVersion;r=r(e._source);var i=e._workInProgressVersionPrimary;if(i!==null?t=i===r:(t=t.mutableReadLanes,(t=(qo&t)===t)&&(e._workInProgressVersionPrimary=r,es.push(e))),t)return n(e._source);throw es.push(e),Error(C(350))}function Hv(t,e,n,r){var i=ot;if(i===null)throw Error(C(349));var s=e._getVersion,o=s(e._source),a=Bo.current,u=a.useState(function(){return zv(i,e,n)}),l=u[1],c=u[0];u=$e;var h=t.memoizedState,d=h.refs,m=d.getSnapshot,y=h.source;h=h.subscribe;var I=fe;return t.memoizedState={refs:d,source:e,subscribe:r},a.useEffect(function(){d.getSnapshot=n,d.setSnapshot=l;var p=s(e._source);if(!Ot(o,p)){p=n(e._source),Ot(c,p)||(l(p),p=tr(I),i.mutableReadLanes|=p&i.pendingLanes),p=i.mutableReadLanes,i.entangledLanes|=p;for(var f=i.entanglements,g=p;0<g;){var v=31-Hn(g),w=1<<v;f[v]|=p,g&=~w}}},[n,e,r]),a.useEffect(function(){return r(e._source,function(){var p=d.getSnapshot,f=d.setSnapshot;try{f(p(e._source));var g=tr(I);i.mutableReadLanes|=g&i.pendingLanes}catch(v){f(function(){throw v})}})},[e,r]),Ot(m,n)&&Ot(y,e)&&Ot(h,r)||(t={pending:null,dispatch:null,lastRenderedReducer:rn,lastRenderedState:c},t.dispatch=l=Yd.bind(null,fe,t),u.queue=t,u.baseQueue=null,c=zv(i,e,n),u.memoizedState=u.baseState=c),c}function Wv(t,e,n){var r=Wr();return Hv(r,t,e,n)}function Wo(t){var e=Hr();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t=e.queue={pending:null,dispatch:null,lastRenderedReducer:rn,lastRenderedState:t},t=t.dispatch=Yd.bind(null,fe,t),[e.memoizedState,t]}function ol(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=fe.updateQueue,e===null?(e={lastEffect:null},fe.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Kv(t){var e=Hr();return t={current:t},e.memoizedState=t}function al(){return Wr().memoizedState}function Kd(t,e,n,r){var i=Hr();fe.flags|=t,i.memoizedState=ol(1|e,n,void 0,r===void 0?null:r)}function Gd(t,e,n,r){var i=Wr();r=r===void 0?null:r;var s=void 0;if(Je!==null){var o=Je.memoizedState;if(s=o.destroy,r!==null&&Hd(r,o.deps)){ol(e,n,s,r);return}}fe.flags|=t,i.memoizedState=ol(1|e,n,s,r)}function Gv(t,e){return Kd(516,4,t,e)}function ul(t,e){return Gd(516,4,t,e)}function Qv(t,e){return Gd(4,2,t,e)}function Yv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Xv(t,e,n){return n=n!=null?n.concat([t]):null,Gd(4,2,Yv.bind(null,e,t),n)}function Qd(){}function Jv(t,e){var n=Wr();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Hd(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Zv(t,e){var n=Wr();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Hd(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function xk(t,e){var n=Yi();jr(98>n?98:n,function(){t(!0)}),jr(97<n?97:n,function(){var r=Mt.transition;Mt.transition=1;try{t(!1),e()}finally{Mt.transition=r}})}function Yd(t,e,n){var r=St(),i=tr(t),s={lane:i,action:n,eagerReducer:null,eagerState:null,next:null},o=e.pending;if(o===null?s.next=s:(s.next=o.next,o.next=s),e.pending=s,o=t.alternate,t===fe||o!==null&&o===fe)jo=sl=!0;else{if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var a=e.lastRenderedState,u=o(a,n);if(s.eagerReducer=o,s.eagerState=u,Ot(u,a))return}catch{}finally{}nr(t,i,r)}}var ll={readContext:Lt,useCallback:yt,useContext:yt,useEffect:yt,useImperativeHandle:yt,useLayoutEffect:yt,useMemo:yt,useReducer:yt,useRef:yt,useState:yt,useDebugValue:yt,useDeferredValue:yt,useTransition:yt,useMutableSource:yt,useOpaqueIdentifier:yt,unstable_isNewReconciler:!1},Ok={readContext:Lt,useCallback:function(t,e){return Hr().memoizedState=[t,e===void 0?null:e],t},useContext:Lt,useEffect:Gv,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Kd(4,2,Yv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Kd(4,2,t,e)},useMemo:function(t,e){var n=Hr();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Hr();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t=r.queue={pending:null,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},t=t.dispatch=Yd.bind(null,fe,t),[r.memoizedState,t]},useRef:Kv,useState:Wo,useDebugValue:Qd,useDeferredValue:function(t){var e=Wo(t),n=e[0],r=e[1];return Gv(function(){var i=Mt.transition;Mt.transition=1;try{r(t)}finally{Mt.transition=i}},[t]),n},useTransition:function(){var t=Wo(!1),e=t[0];return t=xk.bind(null,t[1]),Kv(t),[t,e]},useMutableSource:function(t,e,n){var r=Hr();return r.memoizedState={refs:{getSnapshot:e,setSnapshot:null},source:t,subscribe:n},Hv(r,t,e,n)},useOpaqueIdentifier:function(){if(nn){var t=!1,e=Nk(function(){throw t||(t=!0,n("r:"+(Rd++).toString(36))),Error(C(355))}),n=Wo(e)[1];return(fe.mode&2)==0&&(fe.flags|=516,ol(5,function(){n("r:"+(Rd++).toString(36))},void 0,null)),e}return e="r:"+(Rd++).toString(36),Wo(e),e},unstable_isNewReconciler:!1},Lk={readContext:Lt,useCallback:Jv,useContext:Lt,useEffect:ul,useImperativeHandle:Xv,useLayoutEffect:Qv,useMemo:Zv,useReducer:zo,useRef:al,useState:function(){return zo(rn)},useDebugValue:Qd,useDeferredValue:function(t){var e=zo(rn),n=e[0],r=e[1];return ul(function(){var i=Mt.transition;Mt.transition=1;try{r(t)}finally{Mt.transition=i}},[t]),n},useTransition:function(){var t=zo(rn)[0];return[al().current,t]},useMutableSource:Wv,useOpaqueIdentifier:function(){return zo(rn)[0]},unstable_isNewReconciler:!1},Mk={readContext:Lt,useCallback:Jv,useContext:Lt,useEffect:ul,useImperativeHandle:Xv,useLayoutEffect:Qv,useMemo:Zv,useReducer:Ho,useRef:al,useState:function(){return Ho(rn)},useDebugValue:Qd,useDeferredValue:function(t){var e=Ho(rn),n=e[0],r=e[1];return ul(function(){var i=Mt.transition;Mt.transition=1;try{r(t)}finally{Mt.transition=i}},[t]),n},useTransition:function(){var t=Ho(rn)[0];return[al().current,t]},useMutableSource:Wv,useOpaqueIdentifier:function(){return Ho(rn)[0]},unstable_isNewReconciler:!1},Uk=Mr.ReactCurrentOwner,Kt=!1;function vt(t,e,n,r){e.child=t===null?Fv(e,null,n,r):nl(e,t.child,n,r)}function ew(t,e,n,r,i){n=n.render;var s=e.ref;return Ji(e,i),r=Wd(t,e,n,r,s,i),t!==null&&!Kt?(e.updateQueue=t.updateQueue,e.flags&=-517,t.lanes&=~i,En(t,e,i)):(e.flags|=1,vt(t,e,r,i),e.child)}function tw(t,e,n,r,i,s){if(t===null){var o=n.type;return typeof o=="function"&&!_f(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=o,nw(t,e,o,r,i,s)):(t=wl(n.type,null,r,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}return o=t.child,(i&s)==0&&(i=o.memoizedProps,n=n.compare,n=n!==null?n:Ao,n(i,r)&&t.ref===e.ref)?En(t,e,s):(e.flags|=1,t=sr(o,r),t.ref=e.ref,t.return=e,e.child=t)}function nw(t,e,n,r,i,s){if(t!==null&&Ao(t.memoizedProps,r)&&t.ref===e.ref)if(Kt=!1,(s&i)!=0)(t.flags&16384)!=0&&(Kt=!0);else return e.lanes=t.lanes,En(t,e,s);return Jd(t,e,n,r,s)}function Xd(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden"||r.mode==="unstable-defer-without-hiding")if((e.mode&4)==0)e.memoizedState={baseLanes:0},vl(e,n);else if((n&1073741824)!=0)e.memoizedState={baseLanes:0},vl(e,s!==null?s.baseLanes:n);else return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t},vl(e,t),null;else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,vl(e,r);return vt(t,e,i,n),e.child}function rw(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=128)}function Jd(t,e,n,r,i){var s=gt(n)?Br:Ye.current;return s=Qi(e,s),Ji(e,i),n=Wd(t,e,n,r,s,i),t!==null&&!Kt?(e.updateQueue=t.updateQueue,e.flags&=-517,t.lanes&=~i,En(t,e,i)):(e.flags|=1,vt(t,e,n,i),e.child)}function iw(t,e,n,r,i){if(gt(n)){var s=!0;Wu(e)}else s=!1;if(Ji(e,i),e.stateNode===null)t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2),Mv(e,n,r),Fd(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var u=o.context,l=n.contextType;typeof l=="object"&&l!==null?l=Lt(l):(l=gt(n)?Br:Ye.current,l=Qi(e,l));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||u!==l)&&Uv(e,o,r,l),Yn=!1;var d=e.memoizedState;o.state=d,Mo(e,r,o,i),u=e.memoizedState,a!==r||d!==u||mt.current||Yn?(typeof c=="function"&&(Ju(e,n,c,r),u=e.memoizedState),(a=Yn||Lv(e,n,a,r,d,u,l))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4)):(typeof o.componentDidMount=="function"&&(e.flags|=4),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=l,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4),r=!1)}else{o=e.stateNode,Pv(t,e),a=e.memoizedProps,l=e.type===e.elementType?a:Wt(e.type,a),o.props=l,h=e.pendingProps,d=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Lt(u):(u=gt(n)?Br:Ye.current,u=Qi(e,u));var m=n.getDerivedStateFromProps;(c=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==u)&&Uv(e,o,r,u),Yn=!1,d=e.memoizedState,o.state=d,Mo(e,r,o,i);var y=e.memoizedState;a!==h||d!==y||mt.current||Yn?(typeof m=="function"&&(Ju(e,n,m,r),y=e.memoizedState),(l=Yn||Lv(e,n,l,r,d,y,u))?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=256)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=256),e.memoizedProps=r,e.memoizedState=y),o.props=r,o.state=y,o.context=u,r=l):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=256),r=!1)}return Zd(t,e,n,r,s,i)}function Zd(t,e,n,r,i,s){rw(t,e);var o=(e.flags&64)!=0;if(!r&&!o)return i&&Iv(e,n,!1),En(t,e,s);r=e.stateNode,Uk.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=nl(e,t.child,null,s),e.child=nl(e,null,a,s)):vt(t,e,a,s),e.memoizedState=r.state,i&&Iv(e,n,!0),e.child}function sw(t){var e=t.stateNode;e.pendingContext?wv(t,e.pendingContext,e.pendingContext!==e.context):e.context&&wv(t,e.context,!1),Vd(t,e.containerInfo)}var cl={dehydrated:null,retryLane:0};function ow(t,e,n){var r=e.pendingProps,i=ue.current,s=!1,o;return(o=(e.flags&64)!=0)||(o=t!==null&&t.memoizedState===null?!1:(i&2)!=0),o?(s=!0,e.flags&=-65):t!==null&&t.memoizedState===null||r.fallback===void 0||r.unstable_avoidThisFallback===!0||(i|=1),ae(ue,i&1),t===null?(r.fallback!==void 0&&qd(e),t=r.children,i=r.fallback,s?(t=aw(e,t,i,n),e.child.memoizedState={baseLanes:n},e.memoizedState=cl,t):typeof r.unstable_expectedLoadTime=="number"?(t=aw(e,t,i,n),e.child.memoizedState={baseLanes:n},e.memoizedState=cl,e.lanes=33554432,t):(n=If({mode:"visible",children:t},e.mode,n,null),n.return=e,e.child=n)):t.memoizedState!==null?s?(r=lw(t,e,r.children,r.fallback,n),s=e.child,i=t.child.memoizedState,s.memoizedState=i===null?{baseLanes:n}:{baseLanes:i.baseLanes|n},s.childLanes=t.childLanes&~n,e.memoizedState=cl,r):(n=uw(t,e,r.children,n),e.memoizedState=null,n):s?(r=lw(t,e,r.children,r.fallback,n),s=e.child,i=t.child.memoizedState,s.memoizedState=i===null?{baseLanes:n}:{baseLanes:i.baseLanes|n},s.childLanes=t.childLanes&~n,e.memoizedState=cl,r):(n=uw(t,e,r.children,n),e.memoizedState=null,n)}function aw(t,e,n,r){var i=t.mode,s=t.child;return e={mode:"hidden",children:e},(i&2)==0&&s!==null?(s.childLanes=0,s.pendingProps=e):s=If(e,i,0,null),n=os(n,i,r,null),s.return=t,n.return=t,s.sibling=n,t.child=s,n}function uw(t,e,n,r){var i=t.child;return t=i.sibling,n=sr(i,{mode:"visible",children:n}),(e.mode&2)==0&&(n.lanes=r),n.return=e,n.sibling=null,t!==null&&(t.nextEffect=null,t.flags=8,e.firstEffect=e.lastEffect=t),e.child=n}function lw(t,e,n,r,i){var s=e.mode,o=t.child;t=o.sibling;var a={mode:"hidden",children:n};return(s&2)==0&&e.child!==o?(n=e.child,n.childLanes=0,n.pendingProps=a,o=n.lastEffect,o!==null?(e.firstEffect=n.firstEffect,e.lastEffect=o,o.nextEffect=null):e.firstEffect=e.lastEffect=null):n=sr(o,a),t!==null?r=sr(t,r):(r=os(r,s,i,null),r.flags|=2),r.return=e,n.return=e,n.sibling=r,e.child=n,r}function cw(t,e){t.lanes|=e;var n=t.alternate;n!==null&&(n.lanes|=e),Av(t.return,e)}function ef(t,e,n,r,i,s){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,lastEffect:s}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.lastEffect=s)}function hw(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(vt(t,e,r.children,n),r=ue.current,(r&2)!=0)r=r&1|2,e.flags|=64;else{if(t!==null&&(t.flags&64)!=0)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&cw(t,n);else if(t.tag===19)cw(t,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ae(ue,r),(e.mode&2)==0)e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&rl(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),ef(e,!1,i,n,s,e.lastEffect);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&rl(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}ef(e,!0,n,null,s,e.lastEffect);break;case"together":ef(e,!1,null,null,void 0,e.lastEffect);break;default:e.memoizedState=null}return e.child}function En(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Go|=e.lanes,(n&e.childLanes)!=0){if(t!==null&&e.child!==t.child)throw Error(C(153));if(e.child!==null){for(t=e.child,n=sr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=sr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}return null}var dw,tf,fw,pw;dw=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};tf=function(){};fw=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,zr(tn.current);var s=null;switch(n){case"input":i=Fh(t,i),r=Fh(t,r),s=[];break;case"option":i=qh(t,i),r=qh(t,r),s=[];break;case"select":i=ie({},i,{value:void 0}),r=ie({},r,{value:void 0}),s=[];break;case"textarea":i=jh(t,i),r=jh(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Bu)}Wh(n,r);var o;n=null;for(l in i)if(!r.hasOwnProperty(l)&&i.hasOwnProperty(l)&&i[l]!=null)if(l==="style"){var a=i[l];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else l!=="dangerouslySetInnerHTML"&&l!=="children"&&l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(ao.hasOwnProperty(l)?s||(s=[]):(s=s||[]).push(l,null));for(l in r){var u=r[l];if(a=i!=null?i[l]:void 0,r.hasOwnProperty(l)&&u!==a&&(u!=null||a!=null))if(l==="style")if(a){for(o in a)!a.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&a[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(l,n)),n=u;else l==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(s=s||[]).push(l,u)):l==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(l,""+u):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&(ao.hasOwnProperty(l)?(u!=null&&l==="onScroll"&&Z("scroll",t),s||a===u||(s=[])):typeof u=="object"&&u!==null&&u.$$typeof===Oh?u.toString():(s=s||[]).push(l,u))}n&&(s=s||[]).push("style",n);var l=s;(e.updateQueue=l)&&(e.flags|=4)}};pw=function(t,e,n,r){n!==r&&(e.flags|=4)};function Ko(t,e){if(!nn)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function $k(t,e,n){var r=e.pendingProps;switch(e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return null;case 1:return gt(e.type)&&Hu(),null;case 3:return Zi(),ee(mt),ee(Ye),zd(),r=e.stateNode,r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(il(e)?e.flags|=4:r.hydrate||(e.flags|=256)),tf(e),null;case 5:Bd(e);var i=zr(Vo.current);if(n=e.type,t!==null&&e.stateNode!=null)fw(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=128);else{if(!r){if(e.stateNode===null)throw Error(C(166));return null}if(t=zr(tn.current),il(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Kn]=e,r[ju]=s,n){case"dialog":Z("cancel",r),Z("close",r);break;case"iframe":case"object":case"embed":Z("load",r);break;case"video":case"audio":for(t=0;t<Do.length;t++)Z(Do[t],r);break;case"source":Z("error",r);break;case"img":case"image":case"link":Z("error",r),Z("load",r);break;case"details":Z("toggle",r);break;case"input":iy(r,s),Z("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Z("invalid",r);break;case"textarea":ay(r,s),Z("invalid",r)}Wh(n,s),t=null;for(var o in s)s.hasOwnProperty(o)&&(i=s[o],o==="children"?typeof i=="string"?r.textContent!==i&&(t=["children",i]):typeof i=="number"&&r.textContent!==""+i&&(t=["children",""+i]):ao.hasOwnProperty(o)&&i!=null&&o==="onScroll"&&Z("scroll",r));switch(n){case"input":Su(r),oy(r,s,!0);break;case"textarea":Su(r),ly(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Bu)}r=t,e.updateQueue=r,r!==null&&(e.flags|=4)}else{switch(o=i.nodeType===9?i:i.ownerDocument,t===zh.html&&(t=cy(n)),t===zh.html?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Kn]=e,t[ju]=r,dw(t,e,!1,!1),e.stateNode=t,o=Kh(n,r),n){case"dialog":Z("cancel",t),Z("close",t),i=r;break;case"iframe":case"object":case"embed":Z("load",t),i=r;break;case"video":case"audio":for(i=0;i<Do.length;i++)Z(Do[i],t);i=r;break;case"source":Z("error",t),i=r;break;case"img":case"image":case"link":Z("error",t),Z("load",t),i=r;break;case"details":Z("toggle",t),i=r;break;case"input":iy(t,r),i=Fh(t,r),Z("invalid",t);break;case"option":i=qh(t,r);break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=ie({},r,{value:void 0}),Z("invalid",t);break;case"textarea":ay(t,r),i=jh(t,r),Z("invalid",t);break;default:i=r}Wh(n,i);var a=i;for(s in a)if(a.hasOwnProperty(s)){var u=a[s];s==="style"?fy(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&hy(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&po(t,u):typeof u=="number"&&po(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ao.hasOwnProperty(s)?u!=null&&s==="onScroll"&&Z("scroll",t):u!=null&&Rh(t,s,u,o))}switch(n){case"input":Su(t),oy(t,r,!1);break;case"textarea":Su(t),ly(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Bn(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Li(t,!!r.multiple,s,!1):r.defaultValue!=null&&Li(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Bu)}pv(n,r)&&(e.flags|=4)}e.ref!==null&&(e.flags|=128)}return null;case 6:if(t&&e.stateNode!=null)pw(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(C(166));n=zr(Vo.current),zr(tn.current),il(e)?(r=e.stateNode,n=e.memoizedProps,r[Kn]=e,r.nodeValue!==n&&(e.flags|=4)):(r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Kn]=e,e.stateNode=r)}return null;case 13:return ee(ue),r=e.memoizedState,(e.flags&64)!=0?(e.lanes=n,e):(r=r!==null,n=!1,t===null?e.memoizedProps.fallback!==void 0&&il(e):n=t.memoizedState!==null,r&&!n&&(e.mode&2)!=0&&(t===null&&e.memoizedProps.unstable_avoidThisFallback!==!0||(ue.current&1)!=0?Fe===0&&(Fe=3):((Fe===0||Fe===3)&&(Fe=4),ot===null||(Go&134217727)==0&&(ns&134217727)==0||is(ot,Ze))),(r||n)&&(e.flags|=4),null);case 4:return Zi(),tf(e),t===null&&lv(e.stateNode.containerInfo),null;case 10:return Ud(e),null;case 17:return gt(e.type)&&Hu(),null;case 19:if(ee(ue),r=e.memoizedState,r===null)return null;if(s=(e.flags&64)!=0,o=r.rendering,o===null)if(s)Ko(r,!1);else{if(Fe!==0||t!==null&&(t.flags&64)!=0)for(t=e.child;t!==null;){if(o=rl(t),o!==null){for(e.flags|=64,Ko(r,!1),s=o.updateQueue,s!==null&&(e.updateQueue=s,e.flags|=4),r.lastEffect===null&&(e.firstEffect=null),e.lastEffect=r.lastEffect,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=2,s.nextEffect=null,s.firstEffect=null,s.lastEffect=null,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ae(ue,ue.current&1|2),e.child}t=t.sibling}r.tail!==null&&Xe()>ff&&(e.flags|=64,s=!0,Ko(r,!1),e.lanes=33554432)}else{if(!s)if(t=rl(o),t!==null){if(e.flags|=64,s=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ko(r,!0),r.tail===null&&r.tailMode==="hidden"&&!o.alternate&&!nn)return e=e.lastEffect=r.lastEffect,e!==null&&(e.nextEffect=null),null}else 2*Xe()-r.renderingStartTime>ff&&n!==1073741824&&(e.flags|=64,s=!0,Ko(r,!1),e.lanes=33554432);r.isBackwards?(o.sibling=e.child,e.child=o):(n=r.last,n!==null?n.sibling=o:e.child=o,r.last=o)}return r.tail!==null?(n=r.tail,r.rendering=n,r.tail=n.sibling,r.lastEffect=e.lastEffect,r.renderingStartTime=Xe(),n.sibling=null,e=ue.current,ae(ue,s?e&1|2:e&1),n):null;case 23:case 24:return wf(),t!==null&&t.memoizedState!==null!=(e.memoizedState!==null)&&r.mode!=="unstable-defer-without-hiding"&&(e.flags|=4),null}throw Error(C(156,e.tag))}function Fk(t){switch(t.tag){case 1:gt(t.type)&&Hu();var e=t.flags;return e&4096?(t.flags=e&-4097|64,t):null;case 3:if(Zi(),ee(mt),ee(Ye),zd(),e=t.flags,(e&64)!=0)throw Error(C(285));return t.flags=e&-4097|64,t;case 5:return Bd(t),null;case 13:return ee(ue),e=t.flags,e&4096?(t.flags=e&-4097|64,t):null;case 19:return ee(ue),null;case 4:return Zi(),null;case 10:return Ud(t),null;case 23:case 24:return wf(),null;default:return null}}function nf(t,e){try{var n="",r=e;do n+=w1(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i}}function rf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Vk=typeof WeakMap=="function"?WeakMap:Map;function mw(t,e,n){n=Xn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){fl||(fl=!0,pf=r),rf(t,e)},n}function gw(t,e,n){n=Xn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return rf(t,e),r(i)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){typeof r!="function"&&(sn===null?sn=new Set([this]):sn.add(this),rf(t,e));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}var Bk=typeof WeakSet=="function"?WeakSet:Set;function yw(t){var e=t.ref;if(e!==null)if(typeof e=="function")try{e(null)}catch(n){ir(t,n)}else e.current=null}function qk(t,e){switch(e.tag){case 0:case 11:case 15:case 22:return;case 1:if(e.flags&256&&t!==null){var n=t.memoizedProps,r=t.memoizedState;t=e.stateNode,e=t.getSnapshotBeforeUpdate(e.elementType===e.type?n:Wt(e.type,n),r),t.__reactInternalSnapshotBeforeUpdate=e}return;case 3:e.flags&256&&Nd(e.stateNode.containerInfo);return;case 5:case 6:case 4:case 17:return}throw Error(C(163))}function jk(t,e,n){switch(n.tag){case 0:case 11:case 15:case 22:if(e=n.updateQueue,e=e!==null?e.lastEffect:null,e!==null){t=e=e.next;do{if((t.tag&3)==3){var r=t.create;t.destroy=r()}t=t.next}while(t!==e)}if(e=n.updateQueue,e=e!==null?e.lastEffect:null,e!==null){t=e=e.next;do{var i=t;r=i.next,i=i.tag,(i&4)!=0&&(i&1)!=0&&(Dw(n,t),Xk(n,t)),t=r}while(t!==e)}return;case 1:t=n.stateNode,n.flags&4&&(e===null?t.componentDidMount():(r=n.elementType===n.type?e.memoizedProps:Wt(n.type,e.memoizedProps),t.componentDidUpdate(r,e.memoizedState,t.__reactInternalSnapshotBeforeUpdate))),e=n.updateQueue,e!==null&&xv(n,e,t);return;case 3:if(e=n.updateQueue,e!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}xv(n,e,t)}return;case 5:t=n.stateNode,e===null&&n.flags&4&&pv(n.type,n.memoizedProps)&&t.focus();return;case 6:return;case 4:return;case 12:return;case 13:n.memoizedState===null&&(n=n.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&by(n))));return;case 19:case 17:case 20:case 21:case 23:case 24:return}throw Error(C(163))}function vw(t,e){for(var n=t;;){if(n.tag===5){var r=n.stateNode;if(e)r=r.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none";else{r=n.stateNode;var i=n.memoizedProps.style;i=i!=null&&i.hasOwnProperty("display")?i.display:null,r.style.display=dy("display",i)}}else if(n.tag===6)n.stateNode.nodeValue=e?"":n.memoizedProps;else if((n.tag!==23&&n.tag!==24||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}}function ww(t,e){if(qr&&typeof qr.onCommitFiberUnmount=="function")try{qr.onCommitFiberUnmount(Ad,e)}catch{}switch(e.tag){case 0:case 11:case 14:case 15:case 22:if(t=e.updateQueue,t!==null&&(t=t.lastEffect,t!==null)){var n=t=t.next;do{var r=n,i=r.destroy;if(r=r.tag,i!==void 0)if((r&4)!=0)Dw(e,n);else{r=e;try{i()}catch(s){ir(r,s)}}n=n.next}while(n!==t)}break;case 1:if(yw(e),t=e.stateNode,typeof t.componentWillUnmount=="function")try{t.props=e.memoizedProps,t.state=e.memoizedState,t.componentWillUnmount()}catch(s){ir(e,s)}break;case 5:yw(e);break;case 4:Tw(t,e)}}function _w(t){t.alternate=null,t.child=null,t.dependencies=null,t.firstEffect=null,t.lastEffect=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.return=null,t.updateQueue=null}function Iw(t){return t.tag===5||t.tag===3||t.tag===4}function Ew(t){e:{for(var e=t.return;e!==null;){if(Iw(e))break e;e=e.return}throw Error(C(160))}var n=e;switch(e=n.stateNode,n.tag){case 5:var r=!1;break;case 3:e=e.containerInfo,r=!0;break;case 4:e=e.containerInfo,r=!0;break;default:throw Error(C(161))}n.flags&16&&(po(e,""),n.flags&=-17);e:t:for(n=t;;){for(;n.sibling===null;){if(n.return===null||Iw(n.return)){n=null;break e}n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue t;n.child.return=n,n=n.child}if(!(n.flags&2)){n=n.stateNode;break e}}r?sf(t,n,e):of(t,n,e)}function sf(t,e,n){var r=t.tag,i=r===5||r===6;if(i)t=i?t.stateNode:t.stateNode.instance,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Bu));else if(r!==4&&(t=t.child,t!==null))for(sf(t,e,n),t=t.sibling;t!==null;)sf(t,e,n),t=t.sibling}function of(t,e,n){var r=t.tag,i=r===5||r===6;if(i)t=i?t.stateNode:t.stateNode.instance,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(of(t,e,n),t=t.sibling;t!==null;)of(t,e,n),t=t.sibling}function Tw(t,e){for(var n=e,r=!1,i,s;;){if(!r){r=n.return;e:for(;;){if(r===null)throw Error(C(160));switch(i=r.stateNode,r.tag){case 5:s=!1;break e;case 3:i=i.containerInfo,s=!0;break e;case 4:i=i.containerInfo,s=!0;break e}r=r.return}r=!0}if(n.tag===5||n.tag===6){e:for(var o=t,a=n,u=a;;)if(ww(o,u),u.child!==null&&u.tag!==4)u.child.return=u,u=u.child;else{if(u===a)break e;for(;u.sibling===null;){if(u.return===null||u.return===a)break e;u=u.return}u.sibling.return=u.return,u=u.sibling}s?(o=i,a=n.stateNode,o.nodeType===8?o.parentNode.removeChild(a):o.removeChild(a)):i.removeChild(n.stateNode)}else if(n.tag===4){if(n.child!==null){i=n.stateNode.containerInfo,s=!0,n.child.return=n,n=n.child;continue}}else if(ww(t,n),n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return,n.tag===4&&(r=!1)}n.sibling.return=n.return,n=n.sibling}}function af(t,e){switch(e.tag){case 0:case 11:case 14:case 15:case 22:var n=e.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var r=n=n.next;do(r.tag&3)==3&&(t=r.destroy,r.destroy=void 0,t!==void 0&&t()),r=r.next;while(r!==n)}return;case 1:return;case 5:if(n=e.stateNode,n!=null){r=e.memoizedProps;var i=t!==null?t.memoizedProps:r;t=e.type;var s=e.updateQueue;if(e.updateQueue=null,s!==null){for(n[ju]=r,t==="input"&&r.type==="radio"&&r.name!=null&&sy(n,r),Kh(t,i),e=Kh(t,r),i=0;i<s.length;i+=2){var o=s[i],a=s[i+1];o==="style"?fy(n,a):o==="dangerouslySetInnerHTML"?hy(n,a):o==="children"?po(n,a):Rh(n,o,a,e)}switch(t){case"input":Vh(n,r);break;case"textarea":uy(n,r);break;case"select":t=n._wrapperState.wasMultiple,n._wrapperState.wasMultiple=!!r.multiple,s=r.value,s!=null?Li(n,!!r.multiple,s,!1):t!==!!r.multiple&&(r.defaultValue!=null?Li(n,!!r.multiple,r.defaultValue,!0):Li(n,!!r.multiple,r.multiple?[]:"",!1))}}}return;case 6:if(e.stateNode===null)throw Error(C(162));e.stateNode.nodeValue=e.memoizedProps;return;case 3:n=e.stateNode,n.hydrate&&(n.hydrate=!1,by(n.containerInfo));return;case 12:return;case 13:e.memoizedState!==null&&(df=Xe(),vw(e.child,!0)),Sw(e);return;case 19:Sw(e);return;case 17:return;case 23:case 24:vw(e,e.memoizedState!==null);return}throw Error(C(163))}function Sw(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Bk),e.forEach(function(r){var i=eC.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function zk(t,e){return t!==null&&(t=t.memoizedState,t===null||t.dehydrated!==null)?(e=e.memoizedState,e!==null&&e.dehydrated===null):!1}var Hk=Math.ceil,hl=Mr.ReactCurrentDispatcher,uf=Mr.ReactCurrentOwner,V=0,ot=null,Ie=null,Ze=0,Kr=0,lf=Gn(0),Fe=0,dl=null,ts=0,Go=0,ns=0,cf=0,hf=null,df=0,ff=1/0;function rs(){ff=Xe()+500}var P=null,fl=!1,pf=null,sn=null,er=!1,Qo=null,Yo=90,mf=[],gf=[],Tn=null,Xo=0,yf=null,pl=-1,Sn=0,ml=0,Jo=null,gl=!1;function St(){return(V&48)!=0?Xe():pl!==-1?pl:pl=Xe()}function tr(t){if(t=t.mode,(t&2)==0)return 1;if((t&4)==0)return Yi()===99?1:2;if(Sn===0&&(Sn=ts),Dk.transition!==0){ml!==0&&(ml=hf!==null?hf.pendingLanes:0),t=Sn;var e=4186112&~ml;return e&=-e,e===0&&(t=4186112&~t,e=t&-t,e===0&&(e=8192)),e}return t=Yi(),(V&4)!=0&&t===98?t=Du(12,Sn):(t=L1(t),t=Du(t,Sn)),t}function nr(t,e,n){if(50<Xo)throw Xo=0,yf=null,Error(C(185));if(t=yl(t,e),t===null)return null;xu(t,e,n),t===ot&&(ns|=e,Fe===4&&is(t,Ze));var r=Yi();e===1?(V&8)!=0&&(V&48)==0?vf(t):(Ut(t,n),V===0&&(rs(),en())):((V&4)==0||r!==98&&r!==99||(Tn===null?Tn=new Set([t]):Tn.add(t)),Ut(t,n)),hf=t}function yl(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}function Ut(t,e){for(var n=t.callbackNode,r=t.suspendedLanes,i=t.pingedLanes,s=t.expirationTimes,o=t.pendingLanes;0<o;){var a=31-Hn(o),u=1<<a,l=s[a];if(l===-1){if((u&r)==0||(u&i)!=0){l=e,Fi(u);var c=J;s[a]=10<=c?l+250:6<=c?l+5e3:-1}}else l<=e&&(t.expiredLanes|=u);o&=~u}if(r=So(t,t===ot?Ze:0),e=J,r===0)n!==null&&(n!==Od&&Dd(n),t.callbackNode=null,t.callbackPriority=0);else{if(n!==null){if(t.callbackPriority===e)return;n!==Od&&Dd(n)}e===15?(n=vf.bind(null,t),_n===null?(_n=[n],Gu=Pd(Ku,bv)):_n.push(n),n=Od):e===14?n=Lo(99,vf.bind(null,t)):(n=M1(e),n=Lo(n,kw.bind(null,t))),t.callbackPriority=e,t.callbackNode=n}}function kw(t){if(pl=-1,ml=Sn=0,(V&48)!=0)throw Error(C(327));var e=t.callbackNode;if(rr()&&t.callbackNode!==e)return null;var n=So(t,t===ot?Ze:0);if(n===0)return null;var r=n,i=V;V|=16;var s=bw();(ot!==t||Ze!==r)&&(rs(),ss(t,r));do try{Gk();break}catch(a){Rw(t,a)}while(1);if(Md(),hl.current=s,V=i,Ie!==null?r=0:(ot=null,Ze=0,r=Fe),(ts&ns)!=0)ss(t,0);else if(r!==0){if(r===2&&(V|=64,t.hydrate&&(t.hydrate=!1,Nd(t.containerInfo)),n=My(t),n!==0&&(r=Zo(t,n))),r===1)throw e=dl,ss(t,0),is(t,n),Ut(t,Xe()),e;switch(t.finishedWork=t.current.alternate,t.finishedLanes=n,r){case 0:case 1:throw Error(C(345));case 2:Gr(t);break;case 3:if(is(t,n),(n&62914560)===n&&(r=df+500-Xe(),10<r)){if(So(t,0)!==0)break;if(i=t.suspendedLanes,(i&n)!==n){St(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=mv(Gr.bind(null,t),r);break}Gr(t);break;case 4:if(is(t,n),(n&4186112)===n)break;for(r=t.eventTimes,i=-1;0<n;){var o=31-Hn(n);s=1<<o,o=r[o],o>i&&(i=o),n&=~s}if(n=i,n=Xe()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*Hk(n/1960))-n,10<n){t.timeoutHandle=mv(Gr.bind(null,t),n);break}Gr(t);break;case 5:Gr(t);break;default:throw Error(C(329))}}return Ut(t,Xe()),t.callbackNode===e?kw.bind(null,t):null}function is(t,e){for(e&=~cf,e&=~ns,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Hn(e),r=1<<n;t[n]=-1,e&=~r}}function vf(t){if((V&48)!=0)throw Error(C(327));if(rr(),t===ot&&(t.expiredLanes&Ze)!=0){var e=Ze,n=Zo(t,e);(ts&ns)!=0&&(e=So(t,e),n=Zo(t,e))}else e=So(t,0),n=Zo(t,e);if(t.tag!==0&&n===2&&(V|=64,t.hydrate&&(t.hydrate=!1,Nd(t.containerInfo)),e=My(t),e!==0&&(n=Zo(t,e))),n===1)throw n=dl,ss(t,0),is(t,e),Ut(t,Xe()),n;return t.finishedWork=t.current.alternate,t.finishedLanes=e,Gr(t),Ut(t,Xe()),null}function Wk(){if(Tn!==null){var t=Tn;Tn=null,t.forEach(function(e){e.expiredLanes|=24&e.pendingLanes,Ut(e,Xe())})}en()}function Cw(t,e){var n=V;V|=1;try{return t(e)}finally{V=n,V===0&&(rs(),en())}}function Nw(t,e){var n=V;V&=-2,V|=8;try{return t(e)}finally{V=n,V===0&&(rs(),en())}}function vl(t,e){ae(lf,Kr),Kr|=e,ts|=e}function wf(){Kr=lf.current,ee(lf)}function ss(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Ck(n)),Ie!==null)for(n=Ie.return;n!==null;){var r=n;switch(r.tag){case 1:r=r.type.childContextTypes,r!=null&&Hu();break;case 3:Zi(),ee(mt),ee(Ye),zd();break;case 5:Bd(r);break;case 4:Zi();break;case 13:ee(ue);break;case 19:ee(ue);break;case 10:Ud(r);break;case 23:case 24:wf()}n=n.return}ot=t,Ie=sr(t.current,null),Ze=Kr=ts=e,Fe=0,dl=null,cf=ns=Go=0}function Rw(t,e){do{var n=Ie;try{if(Md(),Bo.current=ll,sl){for(var r=fe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}sl=!1}if(qo=0,$e=Je=fe=null,jo=!1,uf.current=null,n===null||n.return===null){Fe=1,dl=e,Ie=null;break}e:{var s=t,o=n.return,a=n,u=e;if(e=Ze,a.flags|=2048,a.firstEffect=a.lastEffect=null,u!==null&&typeof u=="object"&&typeof u.then=="function"){var l=u;if((a.mode&2)==0){var c=a.alternate;c?(a.updateQueue=c.updateQueue,a.memoizedState=c.memoizedState,a.lanes=c.lanes):(a.updateQueue=null,a.memoizedState=null)}var h=(ue.current&1)!=0,d=o;do{var m;if(m=d.tag===13){var y=d.memoizedState;if(y!==null)m=y.dehydrated!==null;else{var I=d.memoizedProps;m=I.fallback===void 0?!1:I.unstable_avoidThisFallback!==!0?!0:!h}}if(m){var p=d.updateQueue;if(p===null){var f=new Set;f.add(l),d.updateQueue=f}else p.add(l);if((d.mode&2)==0){if(d.flags|=64,a.flags|=16384,a.flags&=-2981,a.tag===1)if(a.alternate===null)a.tag=17;else{var g=Xn(-1,1);g.tag=2,Jn(a,g)}a.lanes|=1;break e}u=void 0,a=e;var v=s.pingCache;if(v===null?(v=s.pingCache=new Vk,u=new Set,v.set(l,u)):(u=v.get(l),u===void 0&&(u=new Set,v.set(l,u))),!u.has(a)){u.add(a);var w=Zk.bind(null,s,l,a);l.then(w,w)}d.flags|=4096,d.lanes=e;break e}d=d.return}while(d!==null);u=Error((Oi(a.type)||"A React component")+` suspended while rendering, but no fallback UI was specified.

Add a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.`)}Fe!==5&&(Fe=2),u=nf(u,a),d=o;do{switch(d.tag){case 3:s=u,d.flags|=4096,e&=-e,d.lanes|=e;var O=mw(d,s,e);Dv(d,O);break e;case 1:s=u;var S=d.type,U=d.stateNode;if((d.flags&64)==0&&(typeof S.getDerivedStateFromError=="function"||U!==null&&typeof U.componentDidCatch=="function"&&(sn===null||!sn.has(U)))){d.flags|=4096,e&=-e,d.lanes|=e;var $=gw(d,s,e);Dv(d,$);break e}}d=d.return}while(d!==null)}Pw(n)}catch(x){e=x,Ie===n&&n!==null&&(Ie=n=n.return);continue}break}while(1)}function bw(){var t=hl.current;return hl.current=ll,t===null?ll:t}function Zo(t,e){var n=V;V|=16;var r=bw();ot===t&&Ze===e||ss(t,e);do try{Kk();break}catch(i){Rw(t,i)}while(1);if(Md(),V=n,hl.current=r,Ie!==null)throw Error(C(261));return ot=null,Ze=0,Fe}function Kk(){for(;Ie!==null;)Aw(Ie)}function Gk(){for(;Ie!==null&&!bk();)Aw(Ie)}function Aw(t){var e=Ow(t.alternate,t,Kr);t.memoizedProps=t.pendingProps,e===null?Pw(t):Ie=e,uf.current=null}function Pw(t){var e=t;do{var n=e.alternate;if(t=e.return,(e.flags&2048)==0){if(n=$k(n,e,Kr),n!==null){Ie=n;return}if(n=e,n.tag!==24&&n.tag!==23||n.memoizedState===null||(Kr&1073741824)!=0||(n.mode&4)==0){for(var r=0,i=n.child;i!==null;)r|=i.lanes|i.childLanes,i=i.sibling;n.childLanes=r}t!==null&&(t.flags&2048)==0&&(t.firstEffect===null&&(t.firstEffect=e.firstEffect),e.lastEffect!==null&&(t.lastEffect!==null&&(t.lastEffect.nextEffect=e.firstEffect),t.lastEffect=e.lastEffect),1<e.flags&&(t.lastEffect!==null?t.lastEffect.nextEffect=e:t.firstEffect=e,t.lastEffect=e))}else{if(n=Fk(e),n!==null){n.flags&=2047,Ie=n;return}t!==null&&(t.firstEffect=t.lastEffect=null,t.flags|=2048)}if(e=e.sibling,e!==null){Ie=e;return}Ie=e=t}while(e!==null);Fe===0&&(Fe=5)}function Gr(t){var e=Yi();return jr(99,Qk.bind(null,t,e)),null}function Qk(t,e){do rr();while(Qo!==null);if((V&48)!=0)throw Error(C(327));var n=t.finishedWork;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(C(177));t.callbackNode=null;var r=n.lanes|n.childLanes,i=r,s=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;for(var o=t.eventTimes,a=t.expirationTimes;0<s;){var u=31-Hn(s),l=1<<u;i[u]=0,o[u]=-1,a[u]=-1,s&=~l}if(Tn!==null&&(r&24)==0&&Tn.has(t)&&Tn.delete(t),t===ot&&(Ie=ot=null,Ze=0),1<n.flags?n.lastEffect!==null?(n.lastEffect.nextEffect=n,r=n.firstEffect):r=n:r=n.firstEffect,r!==null){if(i=V,V|=32,uf.current=null,Sd=Ou,o=nv(),_d(o)){if("selectionStart"in o)a={start:o.selectionStart,end:o.selectionEnd};else e:if(a=(a=o.ownerDocument)&&a.defaultView||window,(l=a.getSelection&&a.getSelection())&&l.rangeCount!==0){a=l.anchorNode,s=l.anchorOffset,u=l.focusNode,l=l.focusOffset;try{a.nodeType,u.nodeType}catch{a=null;break e}var c=0,h=-1,d=-1,m=0,y=0,I=o,p=null;t:for(;;){for(var f;I!==a||s!==0&&I.nodeType!==3||(h=c+s),I!==u||l!==0&&I.nodeType!==3||(d=c+l),I.nodeType===3&&(c+=I.nodeValue.length),(f=I.firstChild)!==null;)p=I,I=f;for(;;){if(I===o)break t;if(p===a&&++m===s&&(h=c),p===u&&++y===l&&(d=c),(f=I.nextSibling)!==null)break;I=p,p=I.parentNode}I=f}a=h===-1||d===-1?null:{start:h,end:d}}else a=null;a=a||{start:0,end:0}}else a=null;kd={focusedElem:o,selectionRange:a},Ou=!1,Jo=null,gl=!1,P=r;do try{Yk()}catch(x){if(P===null)throw Error(C(330));ir(P,x),P=P.nextEffect}while(P!==null);Jo=null,P=r;do try{for(o=t;P!==null;){var g=P.flags;if(g&16&&po(P.stateNode,""),g&128){var v=P.alternate;if(v!==null){var w=v.ref;w!==null&&(typeof w=="function"?w(null):w.current=null)}}switch(g&1038){case 2:Ew(P),P.flags&=-3;break;case 6:Ew(P),P.flags&=-3,af(P.alternate,P);break;case 1024:P.flags&=-1025;break;case 1028:P.flags&=-1025,af(P.alternate,P);break;case 4:af(P.alternate,P);break;case 8:a=P,Tw(o,a);var O=a.alternate;_w(a),O!==null&&_w(O)}P=P.nextEffect}}catch(x){if(P===null)throw Error(C(330));ir(P,x),P=P.nextEffect}while(P!==null);if(w=kd,v=nv(),g=w.focusedElem,o=w.selectionRange,v!==g&&g&&g.ownerDocument&&tv(g.ownerDocument.documentElement,g)){for(o!==null&&_d(g)&&(v=o.start,w=o.end,w===void 0&&(w=v),"selectionStart"in g?(g.selectionStart=v,g.selectionEnd=Math.min(w,g.value.length)):(w=(v=g.ownerDocument||document)&&v.defaultView||window,w.getSelection&&(w=w.getSelection(),a=g.textContent.length,O=Math.min(o.start,a),o=o.end===void 0?O:Math.min(o.end,a),!w.extend&&O>o&&(a=o,o=O,O=a),a=ev(g,O),s=ev(g,o),a&&s&&(w.rangeCount!==1||w.anchorNode!==a.node||w.anchorOffset!==a.offset||w.focusNode!==s.node||w.focusOffset!==s.offset)&&(v=v.createRange(),v.setStart(a.node,a.offset),w.removeAllRanges(),O>o?(w.addRange(v),w.extend(s.node,s.offset)):(v.setEnd(s.node,s.offset),w.addRange(v)))))),v=[],w=g;w=w.parentNode;)w.nodeType===1&&v.push({element:w,left:w.scrollLeft,top:w.scrollTop});for(typeof g.focus=="function"&&g.focus(),g=0;g<v.length;g++)w=v[g],w.element.scrollLeft=w.left,w.element.scrollTop=w.top}Ou=!!Sd,kd=Sd=null,t.current=n,P=r;do try{for(g=t;P!==null;){var S=P.flags;if(S&36&&jk(g,P.alternate,P),S&128){v=void 0;var U=P.ref;if(U!==null){var $=P.stateNode;switch(P.tag){case 5:v=$;break;default:v=$}typeof U=="function"?U(v):U.current=v}}P=P.nextEffect}}catch(x){if(P===null)throw Error(C(330));ir(P,x),P=P.nextEffect}while(P!==null);P=null,Pk(),V=i}else t.current=n;if(er)er=!1,Qo=t,Yo=e;else for(P=r;P!==null;)e=P.nextEffect,P.nextEffect=null,P.flags&8&&(S=P,S.sibling=null,S.stateNode=null),P=e;if(r=t.pendingLanes,r===0&&(sn=null),r===1?t===yf?Xo++:(Xo=0,yf=t):Xo=0,n=n.stateNode,qr&&typeof qr.onCommitFiberRoot=="function")try{qr.onCommitFiberRoot(Ad,n,void 0,(n.current.flags&64)==64)}catch{}if(Ut(t,Xe()),fl)throw fl=!1,t=pf,pf=null,t;return(V&8)!=0||en(),null}function Yk(){for(;P!==null;){var t=P.alternate;gl||Jo===null||((P.flags&8)!=0?Ey(P,Jo)&&(gl=!0):P.tag===13&&zk(t,P)&&Ey(P,Jo)&&(gl=!0));var e=P.flags;(e&256)!=0&&qk(t,P),(e&512)==0||er||(er=!0,Lo(97,function(){return rr(),null})),P=P.nextEffect}}function rr(){if(Yo!==90){var t=97<Yo?97:Yo;return Yo=90,jr(t,Jk)}return!1}function Xk(t,e){mf.push(e,t),er||(er=!0,Lo(97,function(){return rr(),null}))}function Dw(t,e){gf.push(e,t),er||(er=!0,Lo(97,function(){return rr(),null}))}function Jk(){if(Qo===null)return!1;var t=Qo;if(Qo=null,(V&48)!=0)throw Error(C(331));var e=V;V|=32;var n=gf;gf=[];for(var r=0;r<n.length;r+=2){var i=n[r],s=n[r+1],o=i.destroy;if(i.destroy=void 0,typeof o=="function")try{o()}catch(u){if(s===null)throw Error(C(330));ir(s,u)}}for(n=mf,mf=[],r=0;r<n.length;r+=2){i=n[r],s=n[r+1];try{var a=i.create;i.destroy=a()}catch(u){if(s===null)throw Error(C(330));ir(s,u)}}for(a=t.current.firstEffect;a!==null;)t=a.nextEffect,a.nextEffect=null,a.flags&8&&(a.sibling=null,a.stateNode=null),a=t;return V=e,en(),!0}function xw(t,e,n){e=nf(n,e),e=mw(t,e,1),Jn(t,e),e=St(),t=yl(t,1),t!==null&&(xu(t,1,e),Ut(t,e))}function ir(t,e){if(t.tag===3)xw(t,t,e);else for(var n=t.return;n!==null;){if(n.tag===3){xw(n,t,e);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(sn===null||!sn.has(r))){t=nf(e,t);var i=gw(n,t,1);if(Jn(n,i),i=St(),n=yl(n,1),n!==null)xu(n,1,i),Ut(n,i);else if(typeof r.componentDidCatch=="function"&&(sn===null||!sn.has(r)))try{r.componentDidCatch(e,t)}catch{}break}}n=n.return}}function Zk(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=St(),t.pingedLanes|=t.suspendedLanes&n,ot===t&&(Ze&n)===n&&(Fe===4||Fe===3&&(Ze&62914560)===Ze&&500>Xe()-df?ss(t,0):cf|=n),Ut(t,e)}function eC(t,e){var n=t.stateNode;n!==null&&n.delete(e),e=0,e===0&&(e=t.mode,(e&2)==0?e=1:(e&4)==0?e=Yi()===99?1:2:(Sn===0&&(Sn=ts),e=Vi(62914560&~Sn),e===0&&(e=4194304))),n=St(),t=yl(t,e),t!==null&&(xu(t,e,n),Ut(t,n))}var Ow;Ow=function(t,e,n){var r=e.lanes;if(t!==null)if(t.memoizedProps!==e.pendingProps||mt.current)Kt=!0;else if((n&r)!=0)Kt=(t.flags&16384)!=0;else{switch(Kt=!1,e.tag){case 3:sw(e),jd();break;case 5:Vv(e);break;case 1:gt(e.type)&&Wu(e);break;case 4:Vd(e,e.stateNode.containerInfo);break;case 10:r=e.memoizedProps.value;var i=e.type._context;ae(Qu,i._currentValue),i._currentValue=r;break;case 13:if(e.memoizedState!==null)return(n&e.child.childLanes)!=0?ow(t,e,n):(ae(ue,ue.current&1),e=En(t,e,n),e!==null?e.sibling:null);ae(ue,ue.current&1);break;case 19:if(r=(n&e.childLanes)!=0,(t.flags&64)!=0){if(r)return hw(t,e,n);e.flags|=64}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ae(ue,ue.current),r)break;return null;case 23:case 24:return e.lanes=0,Xd(t,e,n)}return En(t,e,n)}else Kt=!1;switch(e.lanes=0,e.tag){case 2:if(r=e.type,t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2),t=e.pendingProps,i=Qi(e,Ye.current),Ji(e,n),i=Wd(null,e,r,t,i,n),e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0){if(e.tag=1,e.memoizedState=null,e.updateQueue=null,gt(r)){var s=!0;Wu(e)}else s=!1;e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,$d(e);var o=r.getDerivedStateFromProps;typeof o=="function"&&Ju(e,r,o,t),i.updater=Zu,e.stateNode=i,i._reactInternals=e,Fd(e,r,t,n),e=Zd(null,e,r,!0,s,n)}else e.tag=0,vt(null,e,i,n),e=e.child;return e;case 16:i=e.elementType;e:{switch(t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2),t=e.pendingProps,s=i._init,i=s(i._payload),e.type=i,s=e.tag=nC(i),t=Wt(i,t),s){case 0:e=Jd(null,e,i,t,n);break e;case 1:e=iw(null,e,i,t,n);break e;case 11:e=ew(null,e,i,t,n);break e;case 14:e=tw(null,e,i,Wt(i.type,t),r,n);break e}throw Error(C(306,i,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Wt(r,i),Jd(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Wt(r,i),iw(t,e,r,i,n);case 3:if(sw(e),r=e.updateQueue,t===null||r===null)throw Error(C(282));if(r=e.pendingProps,i=e.memoizedState,i=i!==null?i.element:null,Pv(t,e),Mo(e,r,null,n),r=e.memoizedState.element,r===i)jd(),e=En(t,e,n);else{if(i=e.stateNode,(s=i.hydrate)&&(Zn=Hi(e.stateNode.containerInfo.firstChild),In=e,s=nn=!0),s){if(t=i.mutableSourceEagerHydrationData,t!=null)for(i=0;i<t.length;i+=2)s=t[i],s._workInProgressVersionPrimary=t[i+1],es.push(s);for(n=Fv(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|1024,n=n.sibling}else vt(t,e,r,n),jd();e=e.child}return e;case 5:return Vv(e),t===null&&qd(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Cd(r,i)?o=null:s!==null&&Cd(r,s)&&(e.flags|=16),rw(t,e),vt(t,e,o,n),e.child;case 6:return t===null&&qd(e),null;case 13:return ow(t,e,n);case 4:return Vd(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=nl(e,null,r,n):vt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Wt(r,i),ew(t,e,r,i,n);case 7:return vt(t,e,e.pendingProps,n),e.child;case 8:return vt(t,e,e.pendingProps.children,n),e.child;case 12:return vt(t,e,e.pendingProps.children,n),e.child;case 10:e:{r=e.type._context,i=e.pendingProps,o=e.memoizedProps,s=i.value;var a=e.type._context;if(ae(Qu,a._currentValue),a._currentValue=s,o!==null)if(a=o.value,s=Ot(a,s)?0:(typeof r._calculateChangedBits=="function"?r._calculateChangedBits(a,s):1073741823)|0,s===0){if(o.children===i.children&&!mt.current){e=En(t,e,n);break e}}else for(a=e.child,a!==null&&(a.return=e);a!==null;){var u=a.dependencies;if(u!==null){o=a.child;for(var l=u.firstContext;l!==null;){if(l.context===r&&(l.observedBits&s)!=0){a.tag===1&&(l=Xn(-1,n&-n),l.tag=2,Jn(a,l)),a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),Av(a.return,n),u.lanes|=n;break}l=l.next}}else o=a.tag===10&&a.type===e.type?null:a.child;if(o!==null)o.return=a;else for(o=a;o!==null;){if(o===e){o=null;break}if(a=o.sibling,a!==null){a.return=o.return,o=a;break}o=o.return}a=o}vt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,s=e.pendingProps,r=s.children,Ji(e,n),i=Lt(i,s.unstable_observedBits),r=r(i),e.flags|=1,vt(t,e,r,n),e.child;case 14:return i=e.type,s=Wt(i,e.pendingProps),s=Wt(i.type,s),tw(t,e,i,s,r,n);case 15:return nw(t,e,e.type,e.pendingProps,r,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Wt(r,i),t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2),e.tag=1,gt(r)?(t=!0,Wu(e)):t=!1,Ji(e,n),Mv(e,r,i),Fd(e,r,i,n),Zd(null,e,r,!0,t,n);case 19:return hw(t,e,n);case 23:return Xd(t,e,n);case 24:return Xd(t,e,n)}throw Error(C(156,e.tag))};function tC(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.flags=0,this.lastEffect=this.firstEffect=this.nextEffect=null,this.childLanes=this.lanes=0,this.alternate=null}function $t(t,e,n,r){return new tC(t,e,n,r)}function _f(t){return t=t.prototype,!(!t||!t.isReactComponent)}function nC(t){if(typeof t=="function")return _f(t)?1:0;if(t!=null){if(t=t.$$typeof,t===_u)return 11;if(t===Eu)return 14}return 2}function sr(t,e){var n=t.alternate;return n===null?(n=$t(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.nextEffect=null,n.firstEffect=null,n.lastEffect=null),n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function wl(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")_f(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Vn:return os(n.children,i,s,e);case ey:o=8,i|=16;break;case bh:o=8,i|=1;break;case lo:return t=$t(12,n,e,i|8),t.elementType=lo,t.type=lo,t.lanes=s,t;case co:return t=$t(13,n,e,i),t.type=co,t.elementType=co,t.lanes=s,t;case Iu:return t=$t(19,n,e,i),t.elementType=Iu,t.lanes=s,t;case Lh:return If(n,i,s,e);case Mh:return t=$t(24,n,e,i),t.elementType=Mh,t.lanes=s,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Ah:o=10;break e;case Ph:o=9;break e;case _u:o=11;break e;case Eu:o=14;break e;case Dh:o=16,r=null;break e;case xh:o=22;break e}throw Error(C(130,t==null?t:typeof t,""))}return e=$t(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function os(t,e,n,r){return t=$t(7,t,r,e),t.lanes=n,t}function If(t,e,n,r){return t=$t(23,t,r,e),t.elementType=Lh,t.lanes=n,t}function Ef(t,e,n){return t=$t(6,t,null,e),t.lanes=n,t}function Tf(t,e,n){return e=$t(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function rC(t,e,n){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.pendingContext=this.context=null,this.hydrate=n,this.callbackNode=null,this.callbackPriority=0,this.eventTimes=ud(0),this.expirationTimes=ud(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ud(0),this.mutableSourceEagerHydrationData=null}function iC(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ur,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function _l(t,e,n,r){var i=e.current,s=St(),o=tr(i);e:if(n){n=n._reactInternals;t:{if(Fr(n)!==n||n.tag!==1)throw Error(C(170));var a=n;do{switch(a.tag){case 3:a=a.stateNode.context;break t;case 1:if(gt(a.type)){a=a.stateNode.__reactInternalMemoizedMergedChildContext;break t}}a=a.return}while(a!==null);throw Error(C(171))}if(n.tag===1){var u=n.type;if(gt(u)){n=_v(n,u,a);break e}}n=a}else n=Qn;return e.context===null?e.context=n:e.pendingContext=n,e=Xn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),Jn(i,e),nr(i,o,s),o}function Sf(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Lw(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function kf(t,e){Lw(t,e),(t=t.alternate)&&Lw(t,e)}function sC(){return null}function Cf(t,e,n){var r=n!=null&&n.hydrationOptions!=null&&n.hydrationOptions.mutableSources||null;if(n=new rC(t,e,n!=null&&n.hydrate===!0),e=$t(3,null,null,e===2?7:e===1?3:0),n.current=e,e.stateNode=n,$d(e),t[Wi]=n.current,lv(t.nodeType===8?t.parentNode:t),r)for(t=0;t<r.length;t++){e=r[t];var i=e._getVersion;i=i(e._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[e,i]:n.mutableSourceEagerHydrationData.push(e,i)}this._internalRoot=n}Cf.prototype.render=function(t){_l(t,this._internalRoot,null,null)};Cf.prototype.unmount=function(){var t=this._internalRoot,e=t.containerInfo;_l(null,t,null,function(){e[Wi]=null})};function ea(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function oC(t,e){if(e||(e=t?t.nodeType===9?t.documentElement:t.firstChild:null,e=!(!e||e.nodeType!==1||!e.hasAttribute("data-reactroot"))),!e)for(var n;n=t.lastChild;)t.removeChild(n);return new Cf(t,0,e?{hydrate:!0}:void 0)}function Il(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s._internalRoot;if(typeof i=="function"){var a=i;i=function(){var l=Sf(o);a.call(l)}}_l(e,o,t,i)}else{if(s=n._reactRootContainer=oC(n,r),o=s._internalRoot,typeof i=="function"){var u=i;i=function(){var l=Sf(o);u.call(l)}}Nw(function(){_l(e,o,t,i)})}return Sf(o)}Ty=function(t){if(t.tag===13){var e=St();nr(t,4,e),kf(t,4)}};nd=function(t){if(t.tag===13){var e=St();nr(t,67108864,e),kf(t,67108864)}};Sy=function(t){if(t.tag===13){var e=St(),n=tr(t);nr(t,n,e),kf(t,n)}};ky=function(t,e){return e()};Qh=function(t,e,n){switch(e){case"input":if(Vh(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=zu(r);if(!i)throw Error(C(90));ry(r),Vh(r,i)}}}break;case"textarea":uy(t,n);break;case"select":e=n.value,e!=null&&Li(t,!!n.multiple,e,!1)}};Yh=Cw;yy=function(t,e,n,r,i){var s=V;V|=4;try{return jr(98,t.bind(null,e,n,r,i))}finally{V=s,V===0&&(rs(),en())}};Xh=function(){(V&49)==0&&(Wk(),rr())};vy=function(t,e){var n=V;V|=2;try{return t(e)}finally{V=n,V===0&&(rs(),en())}};function Mw(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ea(e))throw Error(C(200));return iC(t,e,null,n)}var aC={Events:[Oo,Ki,zu,my,gy,rr,{current:!1}]},ta={findFiberByHostInstance:Vr,bundleType:0,version:"17.0.2",rendererPackageName:"react-dom"},uC={bundleType:ta.bundleType,version:ta.version,rendererPackageName:ta.rendererPackageName,rendererConfig:ta.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Mr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Iy(t),t===null?null:t.stateNode},findFiberByHostInstance:ta.findFiberByHostInstance||sC,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!="undefined"){var El=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!El.isDisabled&&El.supportsFiber)try{Ad=El.inject(uC),qr=El}catch{}}xt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=aC;xt.createPortal=Mw;xt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(C(188)):Error(C(268,Object.keys(t)));return t=Iy(e),t=t===null?null:t.stateNode,t};xt.flushSync=function(t,e){var n=V;if((n&48)!=0)return t(e);V|=1;try{if(t)return jr(99,t.bind(null,e))}finally{V=n,en()}};xt.hydrate=function(t,e,n){if(!ea(e))throw Error(C(200));return Il(null,t,e,!0,n)};xt.render=function(t,e,n){if(!ea(e))throw Error(C(200));return Il(null,t,e,!1,n)};xt.unmountComponentAtNode=function(t){if(!ea(t))throw Error(C(40));return t._reactRootContainer?(Nw(function(){Il(null,null,t,!1,function(){t._reactRootContainer=null,t[Wi]=null})}),!0):!1};xt.unstable_batchedUpdates=Cw;xt.unstable_createPortal=function(t,e){return Mw(t,e,2<arguments.length&&arguments[2]!==void 0?arguments[2]:null)};xt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!ea(n))throw Error(C(200));if(t==null||t._reactInternals===void 0)throw Error(C(38));return Il(t,e,n,!1,r)};xt.version="17.0.2";function Uw(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Uw)}catch(t){console.error(t)}}Uw(),Kg.exports=xt;var $U=Kg.exports,$w={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Fw=Or.createContext&&Or.createContext($w),or=function(){return or=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t},or.apply(this,arguments)},lC=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n};function Vw(t){return t&&t.map(function(e,n){return Or.createElement(e.tag,or({key:n},e.attr),Vw(e.child))})}function cC(t){return function(e){return Or.createElement(hC,or({attr:or({},t.attr)},e),Vw(t.child))}}function hC(t){var e=function(n){var r=t.attr,i=t.size,s=t.title,o=lC(t,["attr","size","title"]),a=i||n.size||"1em",u;return n.className&&(u=n.className),t.className&&(u=(u?u+" ":"")+t.className),Or.createElement("svg",or({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,o,{className:u,style:or(or({color:t.color||n.color},n.style),t.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),s&&Or.createElement("title",null,s),t.children)};return Fw!==void 0?Or.createElement(Fw.Consumer,null,function(n){return e(n)}):e($w)}function FU(t){return cC({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M868 545.5L536.1 163a31.96 31.96 0 0 0-48.3 0L156 545.5a7.97 7.97 0 0 0 6 13.2h81c4.6 0 9-2 12.1-5.5L474 300.9V864c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V300.9l218.9 252.3c3 3.5 7.4 5.5 12.1 5.5h81c6.8 0 10.5-8 6-13.2z"}}]})(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Bw=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)==55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)==56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},dC=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},qw={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,u=i+2<t.length,l=u?t[i+2]:0,c=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|l>>6,m=l&63;u||(m=64,o||(d=64)),r.push(n[c],n[h],n[d],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Bw(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):dC(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const l=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||l==null||h==null)throw Error();const d=s<<2|a>>4;if(r.push(d),l!==64){const m=a<<4&240|l>>2;if(r.push(m),h!==64){const y=l<<6&192|h;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},fC=function(t){const e=Bw(t);return qw.encodeByteArray(e,!0)},jw=function(t){return fC(t).replace(/\./g,"")},pC=function(t){try{return qw.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function Tl(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!mC(n)||(t[n]=Tl(t[n],e[n]));return t}function mC(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gC{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function zw(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[jw(JSON.stringify(n)),jw(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function te(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Hw(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(te())}function Nf(){try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function yC(){return typeof self=="object"&&self.self===self}function Rf(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Sl(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function vC(){return te().indexOf("Electron/")>=0}function bf(){const t=te();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function wC(){return te().indexOf("MSAppHost/")>=0}function _C(){return!Nf()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function kl(){return typeof indexedDB=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IC="FirebaseError";class kt extends Error{constructor(e,n,r){super(n);this.code=e,this.customData=r,this.name=IC,Object.setPrototypeOf(this,kt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Qr.prototype.create)}}class Qr{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?EC(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new kt(i,a,r)}}function EC(t,e){return t.replace(TC,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const TC=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ww(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function SC(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Af(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Kw(s)&&Kw(o)){if(!Af(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Kw(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function as(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function us(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function na(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Gw(t,e){const n=new kC(t,e);return n.subscribe.bind(n)}class kC{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");CC(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Pf),i.error===void 0&&(i.error=Pf),i.complete===void 0&&(i.complete=Pf);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console!="undefined"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function CC(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Pf(){}/**
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
 */function D(t){return t&&t._delegate?t._delegate:t}/*! *****************************************************************************
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
***************************************************************************** */function Df(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function NC(t,e,n,r){function i(s){return s instanceof n?s:new n(function(o){o(s)})}return new(n||(n=Promise))(function(s,o){function a(c){try{l(r.next(c))}catch(h){o(h)}}function u(c){try{l(r.throw(c))}catch(h){o(h)}}function l(c){c.done?s(c.value):i(c.value).then(a,u)}l((r=r.apply(t,e||[])).next())})}function RC(t,e){var n={label:0,sent:function(){if(s[0]&1)throw s[1];return s[1]},trys:[],ops:[]},r,i,s,o;return o={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function a(l){return function(c){return u([l,c])}}function u(l){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,i&&(s=l[0]&2?i.return:l[0]?i.throw||((s=i.return)&&s.call(i),0):i.next)&&!(s=s.call(i,l[1])).done)return s;switch(i=0,s&&(l=[l[0]&2,s.value]),l[0]){case 0:case 1:s=l;break;case 4:return n.label++,{value:l[1],done:!1};case 5:n.label++,i=l[1],l=[0];continue;case 7:l=n.ops.pop(),n.trys.pop();continue;default:if(s=n.trys,!(s=s.length>0&&s[s.length-1])&&(l[0]===6||l[0]===2)){n=0;continue}if(l[0]===3&&(!s||l[1]>s[0]&&l[1]<s[3])){n.label=l[1];break}if(l[0]===6&&n.label<s[1]){n.label=s[1],s=l;break}if(s&&n.label<s[2]){n.label=s[2],n.ops.push(l);break}s[2]&&n.ops.pop(),n.trys.pop();continue}l=e.call(t,n)}catch(c){l=[6,c],i=0}finally{r=s=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}}function xf(t){var e=typeof Symbol=="function"&&Symbol.iterator,n=e&&t[e],r=0;if(n)return n.call(t);if(t&&typeof t.length=="number")return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function Cl(t,e){var n=typeof Symbol=="function"&&t[Symbol.iterator];if(!n)return t;var r=n.call(t),i,s=[],o;try{for(;(e===void 0||e-- >0)&&!(i=r.next()).done;)s.push(i.value)}catch(a){o={error:a}}finally{try{i&&!i.done&&(n=r.return)&&n.call(r)}finally{if(o)throw o.error}}return s}function Qw(t,e,n){if(n||arguments.length===2)for(var r=0,i=e.length,s;r<i;r++)(s||!(r in e))&&(s||(s=Array.prototype.slice.call(e,0,r)),s[r]=e[r]);return t.concat(s||Array.prototype.slice.call(e))}var Gt=function(){function t(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}return t.prototype.setInstantiationMode=function(e){return this.instantiationMode=e,this},t.prototype.setMultipleInstances=function(e){return this.multipleInstances=e,this},t.prototype.setServiceProps=function(e){return this.serviceProps=e,this},t.prototype.setInstanceCreatedCallback=function(e){return this.onInstanceCreated=e,this},t}();/**
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
 */var Yr="[DEFAULT]";/**
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
 */var bC=function(){function t(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}return t.prototype.get=function(e){var n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){var r=new gC;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{var i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise},t.prototype.getImmediate=function(e){var n,r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error("Service "+this.name+" is not available")}},t.prototype.getComponent=function(){return this.component},t.prototype.setComponent=function(e){var n,r;if(e.name!==this.name)throw Error("Mismatching Component "+e.name+" for Provider "+this.name+".");if(this.component)throw Error("Component for "+this.name+" has already been provided");if(this.component=e,!!this.shouldAutoInitialize()){if(PC(e))try{this.getOrInitializeService({instanceIdentifier:Yr})}catch{}try{for(var i=xf(this.instancesDeferred.entries()),s=i.next();!s.done;s=i.next()){var o=Cl(s.value,2),a=o[0],u=o[1],l=this.normalizeInstanceIdentifier(a);try{var c=this.getOrInitializeService({instanceIdentifier:l});u.resolve(c)}catch{}}}catch(h){n={error:h}}finally{try{s&&!s.done&&(r=i.return)&&r.call(i)}finally{if(n)throw n.error}}}},t.prototype.clearInstance=function(e){e===void 0&&(e=Yr),this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)},t.prototype.delete=function(){return NC(this,void 0,void 0,function(){var e;return RC(this,function(n){switch(n.label){case 0:return e=Array.from(this.instances.values()),[4,Promise.all(Qw(Qw([],Cl(e.filter(function(r){return"INTERNAL"in r}).map(function(r){return r.INTERNAL.delete()}))),Cl(e.filter(function(r){return"_delete"in r}).map(function(r){return r._delete()}))))];case 1:return n.sent(),[2]}})})},t.prototype.isComponentSet=function(){return this.component!=null},t.prototype.isInitialized=function(e){return e===void 0&&(e=Yr),this.instances.has(e)},t.prototype.getOptions=function(e){return e===void 0&&(e=Yr),this.instancesOptions.get(e)||{}},t.prototype.initialize=function(e){var n,r;e===void 0&&(e={});var i=e.options,s=i===void 0?{}:i,o=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(o))throw Error(this.name+"("+o+") has already been initialized");if(!this.isComponentSet())throw Error("Component "+this.name+" has not been registered yet");var a=this.getOrInitializeService({instanceIdentifier:o,options:s});try{for(var u=xf(this.instancesDeferred.entries()),l=u.next();!l.done;l=u.next()){var c=Cl(l.value,2),h=c[0],d=c[1],m=this.normalizeInstanceIdentifier(h);o===m&&d.resolve(a)}}catch(y){n={error:y}}finally{try{l&&!l.done&&(r=u.return)&&r.call(u)}finally{if(n)throw n.error}}return a},t.prototype.onInit=function(e,n){var r,i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);var o=this.instances.get(i);return o&&e(o,i),function(){s.delete(e)}},t.prototype.invokeOnInitCallbacks=function(e,n){var r,i,s=this.onInitCallbacks.get(n);if(!!s)try{for(var o=xf(s),a=o.next();!a.done;a=o.next()){var u=a.value;try{u(e,n)}catch{}}}catch(l){r={error:l}}finally{try{a&&!a.done&&(i=o.return)&&i.call(o)}finally{if(r)throw r.error}}},t.prototype.getOrInitializeService=function(e){var n=e.instanceIdentifier,r=e.options,i=r===void 0?{}:r,s=this.instances.get(n);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:AC(n),options:i}),this.instances.set(n,s),this.instancesOptions.set(n,i),this.invokeOnInitCallbacks(s,n),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,n,s)}catch{}return s||null},t.prototype.normalizeInstanceIdentifier=function(e){return e===void 0&&(e=Yr),this.component?this.component.multipleInstances?e:Yr:e},t.prototype.shouldAutoInitialize=function(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"},t}();function AC(t){return t===Yr?void 0:t}function PC(t){return t.instantiationMode==="EAGER"}/**
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
 */var DC=function(){function t(e){this.name=e,this.providers=new Map}return t.prototype.addComponent=function(e){var n=this.getProvider(e.name);if(n.isComponentSet())throw new Error("Component "+e.name+" has already been registered with "+this.name);n.setComponent(e)},t.prototype.addOrOverwriteComponent=function(e){var n=this.getProvider(e.name);n.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)},t.prototype.getProvider=function(e){if(this.providers.has(e))return this.providers.get(e);var n=new bC(e,this);return this.providers.set(e,n),n},t.prototype.getProviders=function(){return Array.from(this.providers.values())},t}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Of=[];var G;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(G||(G={}));const Yw={debug:G.DEBUG,verbose:G.VERBOSE,info:G.INFO,warn:G.WARN,error:G.ERROR,silent:G.SILENT},xC=G.INFO,OC={[G.DEBUG]:"log",[G.VERBOSE]:"log",[G.INFO]:"info",[G.WARN]:"warn",[G.ERROR]:"error"},LC=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=OC[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Nl{constructor(e){this.name=e,this._logLevel=xC,this._logHandler=LC,this._userLogHandler=null,Of.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in G))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Yw[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,G.DEBUG,...e),this._logHandler(this,G.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,G.VERBOSE,...e),this._logHandler(this,G.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,G.INFO,...e),this._logHandler(this,G.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,G.WARN,...e),this._logHandler(this,G.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,G.ERROR,...e),this._logHandler(this,G.ERROR,...e)}}function MC(t){Of.forEach(e=>{e.setLogLevel(t)})}function UC(t,e){for(const n of Of){let r=null;e&&e.level&&(r=Yw[e.level]),t===null?n.userLogHandler=null:n.userLogHandler=(i,s,...o)=>{const a=o.map(u=>{if(u==null)return null;if(typeof u=="string")return u;if(typeof u=="number"||typeof u=="boolean")return u.toString();if(u instanceof Error)return u.message;try{return JSON.stringify(u)}catch{return null}}).filter(u=>u).join(" ");s>=(r!=null?r:i.logLevel)&&t({level:G[s].toLowerCase(),message:a,args:o,type:i.name})}}}/**
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
 */class $C{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(FC(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function FC(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Lf="@firebase/app",Xw="0.7.4";/**
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
 */const Mf=new Nl("@firebase/app"),VC="@firebase/app-compat",BC="@firebase/analytics-compat",qC="@firebase/analytics",jC="@firebase/app-check-compat",zC="@firebase/app-check",HC="@firebase/auth",WC="@firebase/auth-compat",KC="@firebase/database",GC="@firebase/database-compat",QC="@firebase/functions",YC="@firebase/functions-compat",XC="@firebase/installations",JC="@firebase/installations-compat",ZC="@firebase/messaging",eN="@firebase/messaging-compat",tN="@firebase/performance",nN="@firebase/performance-compat",rN="@firebase/remote-config",iN="@firebase/remote-config-compat",sN="@firebase/storage",oN="@firebase/storage-compat",aN="@firebase/firestore",uN="@firebase/firestore-compat",lN="firebase",cN="9.1.3";/**
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
 */const Xr="[DEFAULT]",hN={[Lf]:"fire-core",[VC]:"fire-core-compat",[qC]:"fire-analytics",[BC]:"fire-analytics-compat",[zC]:"fire-app-check",[jC]:"fire-app-check-compat",[HC]:"fire-auth",[WC]:"fire-auth-compat",[KC]:"fire-rtdb",[GC]:"fire-rtdb-compat",[QC]:"fire-fn",[YC]:"fire-fn-compat",[XC]:"fire-iid",[JC]:"fire-iid-compat",[ZC]:"fire-fcm",[eN]:"fire-fcm-compat",[tN]:"fire-perf",[nN]:"fire-perf-compat",[rN]:"fire-rc",[iN]:"fire-rc-compat",[sN]:"fire-gcs",[oN]:"fire-gcs-compat",[aN]:"fire-fst",[uN]:"fire-fst-compat","fire-js":"fire-js",[lN]:"fire-js-all"};/**
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
 */const ar=new Map,ra=new Map;function Rl(t,e){try{t.container.addComponent(e)}catch(n){Mf.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Jw(t,e){t.container.addOrOverwriteComponent(e)}function ur(t){const e=t.name;if(ra.has(e))return Mf.debug(`There were multiple attempts to register component ${e}.`),!1;ra.set(e,t);for(const n of ar.values())Rl(n,t);return!0}function Zw(t,e){return t.container.getProvider(e)}function dN(t,e,n=Xr){Zw(t,e).clearInstance(n)}function fN(){ra.clear()}/**
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
 */const pN={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function."},ia=new Qr("app","Firebase",pN);/**
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
 */class mN{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Gt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ia.create("app-deleted",{appName:this._name})}}/**
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
 */const lr=cN;function e_(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:Xr,automaticDataCollectionEnabled:!1},e),r=n.name;if(typeof r!="string"||!r)throw ia.create("bad-app-name",{appName:String(r)});const i=ar.get(r);if(i){if(Af(t,i.options)&&Af(n,i.config))return i;throw ia.create("duplicate-app",{appName:r})}const s=new DC(r);for(const a of ra.values())s.addComponent(a);const o=new mN(t,n,s);return ar.set(r,o),o}function gN(t=Xr){const e=ar.get(t);if(!e)throw ia.create("no-app",{appName:t});return e}function yN(){return Array.from(ar.values())}async function t_(t){const e=t.name;ar.has(e)&&(ar.delete(e),await Promise.all(t.container.getProviders().map(n=>n.delete())),t.isDeleted=!0)}function Ft(t,e,n){var r;let i=(r=hN[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Mf.warn(a.join(" "));return}ur(new Gt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}function n_(t,e){if(t!==null&&typeof t!="function")throw ia.create("invalid-log-argument");UC(t,e)}function r_(t){MC(t)}/**
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
 */function vN(t){ur(new Gt("platform-logger",e=>new $C(e),"PRIVATE")),Ft(Lf,Xw,t),Ft(Lf,Xw,"esm2017"),Ft("fire-js","")}vN("");var wN=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",SDK_VERSION:lr,_DEFAULT_ENTRY_NAME:Xr,_addComponent:Rl,_addOrOverwriteComponent:Jw,_apps:ar,_clearComponents:fN,_components:ra,_getProvider:Zw,_registerComponent:ur,_removeServiceInstance:dN,deleteApp:t_,getApp:gN,getApps:yN,initializeApp:e_,onLog:n_,registerVersion:Ft,setLogLevel:r_,FirebaseError:kt});/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _N{constructor(e,n){this._delegate=e,this.firebase=n,Rl(e,new Gt("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),t_(this._delegate)))}_getService(e,n=Xr){var r;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(e);return!i.isInitialized()&&((r=i.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&i.initialize(),i.getImmediate({identifier:n})}_removeServiceInstance(e,n=Xr){this._delegate.container.getProvider(e).clearInstance(n)}_addComponent(e){Rl(this._delegate,e)}_addOrOverwriteComponent(e){Jw(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
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
 */const IN={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance."},i_=new Qr("app-compat","Firebase",IN);/**
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
 */function EN(t){const e={},n={__esModule:!0,initializeApp:s,app:i,registerVersion:Ft,setLogLevel:r_,onLog:n_,apps:null,SDK_VERSION:lr,INTERNAL:{registerComponent:a,removeApp:r,useAsService:u,modularAPIs:wN}};n.default=n,Object.defineProperty(n,"apps",{get:o});function r(l){delete e[l]}function i(l){if(l=l||Xr,!Ww(e,l))throw i_.create("no-app",{appName:l});return e[l]}i.App=t;function s(l,c={}){const h=e_(l,c);if(Ww(e,h.name))return e[h.name];const d=new t(h,n);return e[h.name]=d,d}function o(){return Object.keys(e).map(l=>e[l])}function a(l){const c=l.name,h=c.replace("-compat","");if(ur(l)&&l.type==="PUBLIC"){const d=(m=i())=>{if(typeof m[h]!="function")throw i_.create("invalid-app-argument",{appName:c});return m[h]()};l.serviceProps!==void 0&&Tl(d,l.serviceProps),n[h]=d,t.prototype[h]=function(...m){return this._getService.bind(this,c).apply(this,l.multipleInstances?m:[])}}return l.type==="PUBLIC"?n[h]:null}function u(l,c){return c==="serverAuth"?null:c}return n}/**
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
 */function s_(){const t=EN(_N);t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:s_,extendNamespace:e,createSubscribe:Gw,ErrorFactory:Qr,deepExtend:Tl});function e(n){Tl(t,n)}return t}const TN=s_();/**
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
 */const o_=new Nl("@firebase/app-compat"),SN="@firebase/app-compat",kN="0.1.5";/**
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
 */function CN(t){Ft(SN,kN,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */if(yC()&&self.firebase!==void 0){o_.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);const t=self.firebase.SDK_VERSION;t&&t.indexOf("LITE")>=0&&o_.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}const ls=TN;CN();var NN="firebase",RN="9.1.3";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ls.registerVersion(NN,RN,"app-compat");const sa={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},cs={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bN(){return{["admin-restricted-operation"]:"This operation is restricted to administrators only.",["argument-error"]:"",["app-not-authorized"]:"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",["app-not-installed"]:"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",["captcha-check-failed"]:"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",["code-expired"]:"The SMS code has expired. Please re-send the verification code to try again.",["cordova-not-ready"]:"Cordova framework is not ready.",["cors-unsupported"]:"This browser is not supported.",["credential-already-in-use"]:"This credential is already associated with a different user account.",["custom-token-mismatch"]:"The custom token corresponds to a different audience.",["requires-recent-login"]:"This operation is sensitive and requires recent authentication. Log in again before retrying this request.",["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",["dynamic-link-not-activated"]:"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",["email-change-needs-verification"]:"Multi-factor users must always have a verified email.",["email-already-in-use"]:"The email address is already in use by another account.",["emulator-config-failed"]:'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',["expired-action-code"]:"The action code has expired.",["cancelled-popup-request"]:"This operation has been cancelled due to another conflicting popup being opened.",["internal-error"]:"An internal AuthError has occurred.",["invalid-app-credential"]:"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",["invalid-app-id"]:"The mobile app identifier is not registed for the current project.",["invalid-user-token"]:"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",["invalid-auth-event"]:"An internal AuthError has occurred.",["invalid-verification-code"]:"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.",["invalid-continue-uri"]:"The continue URL provided in the request is invalid.",["invalid-cordova-configuration"]:"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",["invalid-custom-token"]:"The custom token format is incorrect. Please check the documentation.",["invalid-dynamic-link-domain"]:"The provided dynamic link domain is not configured or authorized for the current project.",["invalid-email"]:"The email address is badly formatted.",["invalid-emulator-scheme"]:"Emulator URL must start with a valid scheme (http:// or https://).",["invalid-api-key"]:"Your API key is invalid, please check you have copied it correctly.",["invalid-cert-hash"]:"The SHA-1 certificate hash provided is invalid.",["invalid-credential"]:"The supplied auth credential is malformed or has expired.",["invalid-message-payload"]:"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-multi-factor-session"]:"The request does not contain a valid proof of first factor successful sign-in.",["invalid-oauth-provider"]:"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",["invalid-oauth-client-id"]:"The OAuth client ID provided is either invalid or does not match the specified API key.",["unauthorized-domain"]:"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",["invalid-action-code"]:"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",["wrong-password"]:"The password is invalid or the user does not have a password.",["invalid-persistence-type"]:"The specified persistence type is invalid. It can only be local, session or none.",["invalid-phone-number"]:"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",["invalid-provider-id"]:"The specified provider ID is invalid.",["invalid-recipient-email"]:"The email corresponding to this action failed to send as the provided recipient email address is invalid.",["invalid-sender"]:"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-verification-id"]:"The verification ID used to create the phone auth credential is invalid.",["invalid-tenant-id"]:"The Auth instance's tenant ID is invalid.",["missing-android-pkg-name"]:"An Android Package Name must be provided if the Android App is required to be installed.",["auth-domain-config-required"]:"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",["missing-app-credential"]:"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",["missing-verification-code"]:"The phone auth credential was created with an empty SMS verification code.",["missing-continue-uri"]:"A continue URL must be provided in the request.",["missing-iframe-start"]:"An internal AuthError has occurred.",["missing-ios-bundle-id"]:"An iOS Bundle ID must be provided if an App Store ID is provided.",["missing-or-invalid-nonce"]:"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.",["missing-multi-factor-info"]:"No second factor identifier is provided.",["missing-multi-factor-session"]:"The request is missing proof of first factor successful sign-in.",["missing-phone-number"]:"To send verification codes, provide a phone number for the recipient.",["missing-verification-id"]:"The phone auth credential was created with an empty verification ID.",["app-deleted"]:"This instance of FirebaseApp has been deleted.",["multi-factor-info-not-found"]:"The user does not have a second factor matching the identifier provided.",["multi-factor-auth-required"]:"Proof of ownership of a second factor is required to complete sign-in.",["account-exists-with-different-credential"]:"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",["network-request-failed"]:"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.",["no-auth-event"]:"An internal AuthError has occurred.",["no-such-provider"]:"User was not linked to an account with the given provider.",["null-user"]:"A null user object was provided as the argument for an operation which requires a non-null user object.",["operation-not-allowed"]:"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",["operation-not-supported-in-this-environment"]:'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',["popup-blocked"]:"Unable to establish a connection with the popup. It may have been blocked by the browser.",["popup-closed-by-user"]:"The popup has been closed by the user before finalizing the operation.",["provider-already-linked"]:"User can only be linked to one identity for the given provider.",["quota-exceeded"]:"The project's quota for this operation has been exceeded.",["redirect-cancelled-by-user"]:"The redirect operation has been cancelled by the user before finalizing.",["redirect-operation-pending"]:"A redirect sign-in operation is already pending.",["rejected-credential"]:"The request contains malformed or mismatching credentials.",["second-factor-already-in-use"]:"The second factor is already enrolled on this account.",["maximum-second-factor-count-exceeded"]:"The maximum allowed number of second factors on a user has been exceeded.",["tenant-id-mismatch"]:"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.",["user-token-expired"]:"The user's credential is no longer valid. The user must sign in again.",["too-many-requests"]:"We have blocked all requests from this device due to unusual activity. Try again later.",["unauthorized-continue-uri"]:"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",["unsupported-first-factor"]:"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.",["unsupported-persistence-type"]:"The current environment does not support the specified persistence type.",["unsupported-tenant-operation"]:"This operation is not supported in a multi-tenant context.",["unverified-email"]:"The operation requires a verified email.",["user-cancelled"]:"The user did not grant your application the permissions it requested.",["user-not-found"]:"There is no user record corresponding to this identifier. The user may have been deleted.",["user-disabled"]:"The user account has been disabled by an administrator.",["user-mismatch"]:"The supplied credentials do not correspond to the previously signed in user.",["user-signed-out"]:"",["weak-password"]:"The password must be 6 characters long or more.",["web-storage-unsupported"]:"This browser is not supported or 3rd party cookies and data may be disabled.",["already-initialized"]:"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance."}}function a_(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const AN=bN,PN=a_,u_=new Qr("auth","Firebase",a_());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l_=new Nl("@firebase/auth");function bl(t,...e){l_.logLevel<=G.ERROR&&l_.error(`Auth (${lr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ve(t,...e){throw Uf(t,...e)}function Be(t,...e){return Uf(t,...e)}function c_(t,e,n){const r=Object.assign(Object.assign({},PN()),{[e]:n});return new Qr("auth","Firebase",r).create(e,{appName:t.name})}function hs(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Ve(t,"argument-error"),c_(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Uf(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return u_.create(t,...e)}function k(t,e,...n){if(!t)throw Uf(e,...n)}function on(t){const e="INTERNAL ASSERTION FAILED: "+t;throw bl(e),new Error(e)}function Qt(t,e){t||on(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h_=new Map;function Ct(t){Qt(t instanceof Function,"Expected a class definition");let e=h_.get(t);return e?(Qt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,h_.set(t,e),e)}function DN(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Ct);(e==null?void 0:e.errorMap)&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oa(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function $f(){return d_()==="http:"||d_()==="https:"}function d_(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xN(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&($f()||Rf()||"connection"in navigator)?navigator.onLine:!0}function ON(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aa{constructor(e,n){this.shortDelay=e,this.longDelay=n,Qt(n>e,"Short delay should be less than long delay!"),this.isMobile=Hw()||Sl()}get(){return xN()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ff(t,e){Qt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vf{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;on("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;on("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;on("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LN={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MN=new aa(3e4,6e4);function Ee(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Ne(t,e,n,r,i={}){return f_(t,i,()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=as(Object.assign({key:t.config.apiKey},o)).slice(1),u=new(Vf.headers());return u.set("Content-Type","application/json"),u.set("X-Client-Version",t._getSdkClientVersion()),t.languageCode&&u.set("X-Firebase-Locale",t.languageCode),Vf.fetch()(p_(t,t.config.apiHost,n,a),Object.assign({method:e,headers:u,referrerPolicy:"no-referrer"},s))})}async function f_(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},LN),e);try{const i=new UN(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Al(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[u,l]=a.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Al(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Al(t,"email-already-in-use",o);const c=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw c_(t,c,l);Ve(t,c)}}catch(i){if(i instanceof kt)throw i;Ve(t,"network-request-failed")}}async function kn(t,e,n,r,i={}){const s=await Ne(t,e,n,r,i);return"mfaPendingCredential"in s&&Ve(t,"multi-factor-auth-required",{serverResponse:s}),s}function p_(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Ff(t.config,i):`${t.config.apiScheme}://${i}`}class UN{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Be(this.auth,"timeout")),MN.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Al(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Be(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $N(t,e){return Ne(t,"POST","/v1/accounts:delete",e)}async function FN(t,e){return Ne(t,"POST","/v1/accounts:update",e)}async function VN(t,e){return Ne(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ua(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function BN(t,e=!1){const n=D(t),r=await n.getIdToken(e),i=Pl(r);k(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:ua(Bf(i.auth_time)),issuedAtTime:ua(Bf(i.iat)),expirationTime:ua(Bf(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Bf(t){return Number(t)*1e3}function Pl(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return bl("JWT malformed, contained fewer than 3 sections"),null;try{const i=pC(n);return i?JSON.parse(i):(bl("Failed to decode base64 JWT payload"),null)}catch(i){return bl("Caught error parsing JWT payload as JSON",i),null}}function qN(t){const e=Pl(t);return k(e,"internal-error"),k(typeof e.exp!="undefined","internal-error"),k(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cn(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof kt&&jN(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function jN({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zN{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m_{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ua(this.lastLoginAt),this.creationTime=ua(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function la(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Cn(t,VN(n,{idToken:r}));k(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=((e=s.providerUserInfo)===null||e===void 0?void 0:e.length)?KN(s.providerUserInfo):[],a=WN(t.providerData,o),u=t.isAnonymous,l=!(t.email&&s.passwordHash)&&!(a==null?void 0:a.length),c=u?l:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new m_(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,h)}async function HN(t){const e=D(t);await la(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function WN(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function KN(t){return t.map(e=>{var{providerId:n}=e,r=Df(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GN(t,e){const n=await f_(t,{},()=>{const r=as({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=p_(t,i,"/v1/token",`key=${s}`);return Vf.fetch()(o,{method:"POST",headers:{"X-Client-Version":t._getSdkClientVersion(),"Content-Type":"application/x-www-form-urlencoded"},body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ca{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){k(e.idToken,"internal-error"),k(typeof e.idToken!="undefined","internal-error"),k(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):qN(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return k(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await GN(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new ca;return r&&(k(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(k(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(k(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ca,this.toJSON())}_performRefresh(){return on("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cr(t,e){k(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class Jr{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Df(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.emailVerified=!1,this.isAnonymous=!1,this.tenantId=null,this.providerData=[],this.proactiveRefresh=new zN(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.metadata=new m_(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Cn(this,this.stsTokenManager.getToken(this.auth,e));return k(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return BN(this,e)}reload(){return HN(this)}_assign(e){this!==e&&(k(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Jr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){k(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await la(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Cn(this,$N(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,u,l,c;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,m=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,I=(a=n.tenantId)!==null&&a!==void 0?a:void 0,p=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,f=(l=n.createdAt)!==null&&l!==void 0?l:void 0,g=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:v,emailVerified:w,isAnonymous:O,providerData:S,stsTokenManager:U}=n;k(v&&U,e,"internal-error");const $=ca.fromJSON(this.name,U);k(typeof v=="string",e,"internal-error"),cr(h,e.name),cr(d,e.name),k(typeof w=="boolean",e,"internal-error"),k(typeof O=="boolean",e,"internal-error"),cr(m,e.name),cr(y,e.name),cr(I,e.name),cr(p,e.name),cr(f,e.name),cr(g,e.name);const x=new Jr({uid:v,auth:e,email:d,emailVerified:w,displayName:h,isAnonymous:O,photoURL:y,phoneNumber:m,tenantId:I,stsTokenManager:$,createdAt:f,lastLoginAt:g});return S&&Array.isArray(S)&&(x.providerData=S.map(_e=>Object.assign({},_e))),p&&(x._redirectEventId=p),x}static async _fromIdTokenResponse(e,n,r=!1){const i=new ca;i.updateFromServerResponse(n);const s=new Jr({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await la(s),s}}/**
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
 */class g_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}g_.type="NONE";const ha=g_;/**
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
 */function Zr(t,e,n){return`firebase:${t}:${e}:${n}`}class ds{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Zr(this.userKey,i.apiKey,s),this.fullPersistenceKey=Zr("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Jr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ds(Ct(ha),e,r);const i=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let s=i[0]||Ct(ha);const o=Zr(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const c=await l._get(o);if(c){const h=Jr._fromJSON(e,c);l!==s&&(a=h),s=l;break}}catch{}const u=i.filter(l=>l._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new ds(s,e,r):(s=u[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==s)try{await l._remove(o)}catch{}})),new ds(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y_(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(__(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(v_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(I_(e))return"Blackberry";if(E_(e))return"Webos";if(qf(e))return"Safari";if((e.includes("chrome/")||w_(e))&&!e.includes("edge/"))return"Chrome";if(da(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function v_(t=te()){return/firefox\//i.test(t)}function qf(t=te()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function w_(t=te()){return/crios\//i.test(t)}function __(t=te()){return/iemobile/i.test(t)}function da(t=te()){return/android/i.test(t)}function I_(t=te()){return/blackberry/i.test(t)}function E_(t=te()){return/webos/i.test(t)}function fs(t=te()){return/iphone|ipad|ipod/i.test(t)}function QN(t=te()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(t)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(t)}function YN(t=te()){var e;return fs(t)&&!!((e=window.navigator)===null||e===void 0?void 0:e.standalone)}function XN(){return bf()&&document.documentMode===10}function T_(t=te()){return fs(t)||da(t)||E_(t)||I_(t)||/windows phone/i.test(t)||__(t)}function JN(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S_(t,e=[]){let n;switch(t){case"Browser":n=y_(te());break;case"Worker":n=`${y_(te())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${lr}/${r}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZN{constructor(e,n){this.app=e,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new k_(this),this.idTokenSubscription=new k_(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=u_,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Ct(n)),this._initializationPromise=this.queue(async()=>{var r;this._deleted||(this.persistenceManager=await ds.create(this,e),!this._deleted&&(((r=this._popupRedirectResolver)===null||r===void 0?void 0:r._shouldInitProactively)&&await this._popupRedirectResolver._initialize(this),await this.initializeCurrentUser(n),!this._deleted&&(this._isInitialized=!0)))}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e)}}async initializeCurrentUser(e){var n;let r=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,s=r==null?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(e);(!i||i===s)&&(o==null?void 0:o.user)&&(r=o.user)}return r?r._redirectEventId?(k(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)):this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await la(e)}catch(n){if(n.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=ON()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?D(e):null;return n&&k(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&k(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Ct(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Qr("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Ct(e)||this._popupRedirectResolver;k(n,this,"argument-error"),this.redirectPersistenceManager=await ds.create(this,[Ct(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return k(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return k(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=S_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}_getSdkClientVersion(){return this.clientVersion}}function Re(t){return D(t)}class k_{constructor(e){this.auth=e,this.observer=null,this.addObserver=Gw(n=>this.observer=n)}get next(){return k(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function eR(t,e,n){const r=Re(t);k(r._canInitEmulator,r,"emulator-config-failed"),k(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n==null?void 0:n.disableWarnings),s=C_(e),{host:o,port:a}=tR(e),u=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||nR()}function C_(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function tR(t){const e=C_(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:N_(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:N_(o)}}}function N_(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function nR(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console!="undefined"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window!="undefined"&&typeof document!="undefined"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return on("not implemented")}_getIdTokenResponse(e){return on("not implemented")}_linkToIdToken(e,n){return on("not implemented")}_getReauthenticationResolver(e){return on("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function R_(t,e){return Ne(t,"POST","/v1/accounts:resetPassword",Ee(t,e))}async function b_(t,e){return Ne(t,"POST","/v1/accounts:update",e)}async function rR(t,e){return Ne(t,"POST","/v1/accounts:update",Ee(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iR(t,e){return kn(t,"POST","/v1/accounts:signInWithPassword",Ee(t,e))}async function Dl(t,e){return Ne(t,"POST","/v1/accounts:sendOobCode",Ee(t,e))}async function sR(t,e){return Dl(t,e)}async function oR(t,e){return Dl(t,e)}async function aR(t,e){return Dl(t,e)}async function uR(t,e){return Dl(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lR(t,e){return kn(t,"POST","/v1/accounts:signInWithEmailLink",Ee(t,e))}async function cR(t,e){return kn(t,"POST","/v1/accounts:signInWithEmailLink",Ee(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fa extends ps{constructor(e,n,r,i=null){super("password",r);this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new fa(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new fa(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return iR(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return lR(e,{email:this._email,oobCode:this._password});default:Ve(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return b_(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return cR(e,{idToken:n,email:this._email,oobCode:this._password});default:Ve(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nn(t,e){return kn(t,"POST","/v1/accounts:signInWithIdp",Ee(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hR="http://localhost";class an extends ps{constructor(){super(...arguments);this.pendingToken=null}static _fromParams(e){const n=new an(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ve("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Df(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new an(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Nn(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Nn(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Nn(e,n)}buildRequest(){const e={requestUri:hR,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=as(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dR(t,e){return Ne(t,"POST","/v1/accounts:sendVerificationCode",Ee(t,e))}async function fR(t,e){return kn(t,"POST","/v1/accounts:signInWithPhoneNumber",Ee(t,e))}async function pR(t,e){const n=await kn(t,"POST","/v1/accounts:signInWithPhoneNumber",Ee(t,e));if(n.temporaryProof)throw Al(t,"account-exists-with-different-credential",n);return n}const mR={USER_NOT_FOUND:"user-not-found"};async function gR(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return kn(t,"POST","/v1/accounts:signInWithPhoneNumber",Ee(t,n),mR)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei extends ps{constructor(e){super("phone","phone");this.params=e}static _fromVerification(e,n){return new ei({verificationId:e,verificationCode:n})}static _fromTokenResponse(e,n){return new ei({phoneNumber:e,temporaryProof:n})}_getIdTokenResponse(e){return fR(e,this._makeVerificationRequest())}_linkToIdToken(e,n){return pR(e,Object.assign({idToken:n},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return gR(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:n,verificationId:r,verificationCode:i}=this.params;return e&&n?{temporaryProof:e,phoneNumber:n}:{sessionInfo:r,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!n&&!i&&!s?null:new ei({verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yR(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function vR(t){const e=us(na(t)).link,n=e?us(na(e)).deep_link_id:null,r=us(na(t)).deep_link_id;return(r?us(na(r)).link:null)||r||n||e||t}class xl{constructor(e){var n,r,i,s,o,a;const u=us(na(e)),l=(n=u.apiKey)!==null&&n!==void 0?n:null,c=(r=u.oobCode)!==null&&r!==void 0?r:null,h=yR((i=u.mode)!==null&&i!==void 0?i:null);k(l&&c&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=c,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=u.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=vR(e);try{return new xl(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr{constructor(){this.providerId=hr.PROVIDER_ID}static credential(e,n){return fa._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=xl.parseLink(n);return k(r,"argument-error"),fa._fromEmailAndCode(e,r.code,r.tenantId)}}hr.PROVIDER_ID="password";hr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";hr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ms extends dr{constructor(){super(...arguments);this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class gs extends ms{static credentialFromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;return k("providerId"in n&&"signInMethod"in n,"argument-error"),an._fromParams(n)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return k(e.idToken||e.accessToken,"argument-error"),an._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return gs.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return gs.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r,oauthTokenSecret:i,pendingToken:s,nonce:o,providerId:a}=e;if(!r&&!i&&!n&&!s||!a)return null;try{return new gs(a)._credential({idToken:n,accessToken:r,nonce:o,pendingToken:s})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un extends ms{constructor(){super("facebook.com")}static credential(e){return an._fromParams({providerId:un.PROVIDER_ID,signInMethod:un.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return un.credentialFromTaggedObject(e)}static credentialFromError(e){return un.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return un.credential(e.oauthAccessToken)}catch{return null}}}un.FACEBOOK_SIGN_IN_METHOD="facebook.com";un.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln extends ms{constructor(){super("google.com");this.addScope("profile")}static credential(e,n){return an._fromParams({providerId:ln.PROVIDER_ID,signInMethod:ln.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return ln.credentialFromTaggedObject(e)}static credentialFromError(e){return ln.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return ln.credential(n,r)}catch{return null}}}ln.GOOGLE_SIGN_IN_METHOD="google.com";ln.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn extends ms{constructor(){super("github.com")}static credential(e){return an._fromParams({providerId:cn.PROVIDER_ID,signInMethod:cn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return cn.credentialFromTaggedObject(e)}static credentialFromError(e){return cn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return cn.credential(e.oauthAccessToken)}catch{return null}}}cn.GITHUB_SIGN_IN_METHOD="github.com";cn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wR="http://localhost";class Ol extends ps{constructor(e,n){super(e,e);this.pendingToken=n}_getIdTokenResponse(e){const n=this.buildRequest();return Nn(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Nn(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Nn(e,n)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,pendingToken:s}=n;return!r||!i||!s||r!==i?null:new Ol(r,s)}static _create(e,n){return new Ol(e,n)}buildRequest(){return{requestUri:wR,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn extends ms{constructor(){super("twitter.com")}static credential(e,n){return an._fromParams({providerId:hn.PROVIDER_ID,signInMethod:hn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return hn.credentialFromTaggedObject(e)}static credentialFromError(e){return hn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return hn.credential(n,r)}catch{return null}}}hn.TWITTER_SIGN_IN_METHOD="twitter.com";hn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function A_(t,e){return kn(t,"POST","/v1/accounts:signUp",Ee(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Jr._fromIdTokenResponse(e,r,i),o=P_(r);return new Vt({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=P_(r);return new Vt({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function P_(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _R(t){var e;const n=Re(t);if(await n._initializationPromise,(e=n.currentUser)===null||e===void 0?void 0:e.isAnonymous)return new Vt({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await A_(n,{returnSecureToken:!0}),i=await Vt._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ll extends kt{constructor(e,n,r,i){var s;super(n.code,n.message);this.operationType=r,this.user=i,this.name="FirebaseError",Object.setPrototypeOf(this,Ll.prototype),this.appName=e.name,this.code=n.code,this.tenantId=(s=e.tenantId)!==null&&s!==void 0?s:void 0,this.serverResponse=n.customData.serverResponse}static _fromErrorAndOperation(e,n,r,i){return new Ll(e,n,r,i)}}function D_(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Ll._fromErrorAndOperation(t,s,e,r):s})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x_(t){return new Set(t.map(({providerId:e})=>e).filter(e=>!!e))}/**
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
 */async function IR(t,e){const n=D(t);await Ml(!0,n,e);const{providerUserInfo:r}=await FN(n.auth,{idToken:await n.getIdToken(),deleteProvider:[e]}),i=x_(r||[]);return n.providerData=n.providerData.filter(s=>i.has(s.providerId)),i.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function jf(t,e,n=!1){const r=await Cn(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Vt._forOperation(t,"link",r)}async function Ml(t,e,n){await la(e);const r=x_(e.providerData),i=t===!1?"provider-already-linked":"no-such-provider";k(r.has(n)===t,e.auth,i)}/**
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
 */async function O_(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await Cn(t,D_(r,i,e,t),n);k(s.idToken,r,"internal-error");const o=Pl(s.idToken);k(o,r,"internal-error");const{sub:a}=o;return k(t.uid===a,r,"user-mismatch"),Vt._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Ve(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function L_(t,e,n=!1){const r="signIn",i=await D_(t,r,e),s=await Vt._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function Ul(t,e){return L_(Re(t),e)}async function M_(t,e){const n=D(t);return await Ml(!1,n,e.providerId),jf(n,e)}async function U_(t,e){return O_(D(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ER(t,e){return kn(t,"POST","/v1/accounts:signInWithCustomToken",Ee(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function TR(t,e){const n=Re(t),r=await ER(n,{token:e,returnSecureToken:!0}),i=await Vt._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $l{constructor(e,n){this.factorId=e,this.uid=n.mfaEnrollmentId,this.enrollmentTime=new Date(n.enrolledAt).toUTCString(),this.displayName=n.displayName}static _fromServerResponse(e,n){return"phoneInfo"in n?zf._fromServerResponse(e,n):Ve(e,"internal-error")}}class zf extends $l{constructor(e){super("phone",e);this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,n){return new zf(n)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fl(t,e,n){var r;k(((r=n.url)===null||r===void 0?void 0:r.length)>0,t,"invalid-continue-uri"),k(typeof n.dynamicLinkDomain=="undefined"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(k(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(k(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function SR(t,e,n){const r=D(t),i={requestType:"PASSWORD_RESET",email:e};n&&Fl(r,i,n),await oR(r,i)}async function kR(t,e,n){await R_(D(t),{oobCode:e,newPassword:n})}async function CR(t,e){await rR(D(t),{oobCode:e})}async function $_(t,e){const n=D(t),r=await R_(n,{oobCode:e}),i=r.requestType;switch(k(i,n,"internal-error"),i){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":k(r.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":k(r.mfaInfo,n,"internal-error");default:k(r.email,n,"internal-error")}let s=null;return r.mfaInfo&&(s=$l._fromServerResponse(Re(n),r.mfaInfo)),{data:{email:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.newEmail:r.email)||null,previousEmail:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.email:r.newEmail)||null,multiFactorInfo:s},operation:i}}async function NR(t,e){const{data:n}=await $_(D(t),e);return n.email}async function RR(t,e,n){const r=Re(t),i=await A_(r,{returnSecureToken:!0,email:e,password:n}),s=await Vt._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(s.user),s}function bR(t,e,n){return Ul(D(t),hr.credential(e,n))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AR(t,e,n){const r=D(t),i={requestType:"EMAIL_SIGNIN",email:e};k(n.handleCodeInApp,r,"argument-error"),n&&Fl(r,i,n),await aR(r,i)}function PR(t,e){const n=xl.parseLink(e);return(n==null?void 0:n.operation)==="EMAIL_SIGNIN"}async function DR(t,e,n){const r=D(t),i=hr.credentialWithLink(e,n||oa());return k(i._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),Ul(r,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xR(t,e){return Ne(t,"POST","/v1/accounts:createAuthUri",Ee(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function OR(t,e){const n=$f()?oa():"http://localhost",r={identifier:e,continueUri:n},{signinMethods:i}=await xR(D(t),r);return i||[]}async function LR(t,e){const n=D(t),r=await t.getIdToken(),i={requestType:"VERIFY_EMAIL",idToken:r};e&&Fl(n.auth,i,e);const{email:s}=await sR(n.auth,i);s!==t.email&&await t.reload()}async function MR(t,e,n){const r=D(t),i=await t.getIdToken(),s={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:i,newEmail:e};n&&Fl(r.auth,s,n);const{email:o}=await uR(r.auth,s);o!==t.email&&await t.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function UR(t,e){return Ne(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $R(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=D(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Cn(r,UR(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:u})=>u==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function FR(t,e){return F_(D(t),e,null)}function VR(t,e){return F_(D(t),null,e)}async function F_(t,e,n){const{auth:r}=t,s={idToken:await t.getIdToken(),returnSecureToken:!0};e&&(s.email=e),n&&(s.password=n);const o=await Cn(t,b_(r,s));await t._updateTokensIfNecessary(o,!0)}/**
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
 */function BR(t){var e,n;if(!t)return null;const{providerId:r}=t,i=t.rawUserInfo?JSON.parse(t.rawUserInfo):{},s=t.isNewUser||t.kind==="identitytoolkit#SignupNewUserResponse";if(!r&&(t==null?void 0:t.idToken)){const o=(n=(e=Pl(t.idToken))===null||e===void 0?void 0:e.firebase)===null||n===void 0?void 0:n.sign_in_provider;if(o){const a=o!=="anonymous"&&o!=="custom"?o:null;return new ys(s,a)}}if(!r)return null;switch(r){case"facebook.com":return new qR(s,i);case"github.com":return new jR(s,i);case"google.com":return new zR(s,i);case"twitter.com":return new HR(s,i,t.screenName||null);case"custom":case"anonymous":return new ys(s,null);default:return new ys(s,r,i)}}class ys{constructor(e,n,r={}){this.isNewUser=e,this.providerId=n,this.profile=r}}class V_ extends ys{constructor(e,n,r,i){super(e,n,r);this.username=i}}class qR extends ys{constructor(e,n){super(e,"facebook.com",n)}}class jR extends V_{constructor(e,n){super(e,"github.com",n,typeof(n==null?void 0:n.login)=="string"?n==null?void 0:n.login:null)}}class zR extends ys{constructor(e,n){super(e,"google.com",n)}}class HR extends V_{constructor(e,n,r){super(e,"twitter.com",n,r)}}function WR(t){const{user:e,_tokenResponse:n}=t;return e.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:BR(n)}class ti{constructor(e,n){this.type=e,this.credential=n}static _fromIdtoken(e){return new ti("enroll",e)}static _fromMfaPendingCredential(e){return new ti("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var n,r;if(e==null?void 0:e.multiFactorSession){if((n=e.multiFactorSession)===null||n===void 0?void 0:n.pendingCredential)return ti._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if((r=e.multiFactorSession)===null||r===void 0?void 0:r.idToken)return ti._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hf{constructor(e,n,r){this.session=e,this.hints=n,this.signInResolver=r}static _fromError(e,n){const r=Re(e),i=(n.serverResponse.mfaInfo||[]).map(o=>$l._fromServerResponse(r,o));k(n.serverResponse.mfaPendingCredential,r,"internal-error");const s=ti._fromMfaPendingCredential(n.serverResponse.mfaPendingCredential);return new Hf(s,i,async o=>{const a=await o._process(r,s);delete n.serverResponse.mfaInfo,delete n.serverResponse.mfaPendingCredential;const u=Object.assign(Object.assign({},n.serverResponse),{idToken:a.idToken,refreshToken:a.refreshToken});switch(n.operationType){case"signIn":const l=await Vt._fromIdTokenResponse(r,n.operationType,u);return await r._updateCurrentUser(l.user),l;case"reauthenticate":return k(n.user,r,"internal-error"),Vt._forOperation(n.user,n.operationType,u);default:Ve(r,"internal-error")}})}async resolveSignIn(e){const n=e;return this.signInResolver(n)}}function KR(t,e){var n;const r=D(t),i=e;return k(e.operationType,r,"argument-error"),k((n=i.serverResponse)===null||n===void 0?void 0:n.mfaPendingCredential,r,"argument-error"),Hf._fromError(r,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GR(t,e){return Ne(t,"POST","/v2/accounts/mfaEnrollment:start",Ee(t,e))}function QR(t,e){return Ne(t,"POST","/v2/accounts/mfaEnrollment:finalize",Ee(t,e))}function YR(t,e){return Ne(t,"POST","/v2/accounts/mfaEnrollment:withdraw",Ee(t,e))}class Wf{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(n=>{n.mfaInfo&&(this.enrolledFactors=n.mfaInfo.map(r=>$l._fromServerResponse(e.auth,r)))})}static _fromUser(e){return new Wf(e)}async getSession(){return ti._fromIdtoken(await this.user.getIdToken())}async enroll(e,n){const r=e,i=await this.getSession(),s=await Cn(this.user,r._process(this.user.auth,i,n));return await this.user._updateTokensIfNecessary(s),this.user.reload()}async unenroll(e){const n=typeof e=="string"?e:e.uid,r=await this.user.getIdToken(),i=await Cn(this.user,YR(this.user.auth,{idToken:r,mfaEnrollmentId:n}));this.enrolledFactors=this.enrolledFactors.filter(({uid:s})=>s!==n),await this.user._updateTokensIfNecessary(i);try{await this.user.reload()}catch(s){if(s.code!=="auth/user-token-expired")throw s}}}const Kf=new WeakMap;function XR(t){const e=D(t);return Kf.has(e)||Kf.set(e,Wf._fromUser(e)),Kf.get(e)}const Vl="__sak";/**
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
 */class B_{constructor(e,n){this.storage=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Vl,"1"),this.storage.removeItem(Vl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JR(){const t=te();return qf(t)||fs(t)}const ZR=1e3,eb=10;class q_ extends B_{constructor(){super(window.localStorage,"LOCAL");this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=JR()&&JN(),this.fallbackToPolling=T_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,u)=>{this.notifyListeners(o,u)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);XN()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,eb):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},ZR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}q_.type="LOCAL";const Gf=q_;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j_ extends B_{constructor(){super(window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}j_.type="SESSION";const ni=j_;/**
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
 */function tb(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Bl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Bl(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o==null?void 0:o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async l=>l(n.origin,s)),u=await tb(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Bl.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pa(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class nb{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,u)=>{const l=pa("",20);i.port1.start();const c=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(c),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Te(){return window}function rb(t){Te().location.href=t}/**
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
 */function Qf(){return typeof Te().WorkerGlobalScope!="undefined"&&typeof Te().importScripts=="function"}async function ib(){if(!(navigator==null?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function sb(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function ob(){return Qf()?self:null}/**
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
 */const z_="firebaseLocalStorageDb",ab=1,ql="firebaseLocalStorage",H_="fbase_key";class ma{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function jl(t,e){return t.transaction([ql],e?"readwrite":"readonly").objectStore(ql)}function ub(){const t=indexedDB.deleteDatabase(z_);return new ma(t).toPromise()}function Yf(){const t=indexedDB.open(z_,ab);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(ql,{keyPath:H_})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(ql)?e(r):(r.close(),await ub(),e(await Yf()))})})}async function W_(t,e,n){const r=jl(t,!0).put({[H_]:e,value:n});return new ma(r).toPromise()}async function lb(t,e){const n=jl(t,!1).get(e),r=await new ma(n).toPromise();return r===void 0?null:r.value}function K_(t,e){const n=jl(t,!0).delete(e);return new ma(n).toPromise()}const cb=800,hb=3;class G_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Yf(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>hb)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Qf()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Bl._getInstance(ob()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await ib(),!this.activeServiceWorker)return;this.sender=new nb(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||sb()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Yf();return await W_(e,Vl,"1"),await K_(e,Vl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>W_(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>lb(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>K_(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=jl(i,!1).getAll();return new ma(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),cb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}G_.type="LOCAL";const zl=G_;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function db(t,e){return Ne(t,"POST","/v2/accounts/mfaSignIn:start",Ee(t,e))}function fb(t,e){return Ne(t,"POST","/v2/accounts/mfaSignIn:finalize",Ee(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pb(t){return(await Ne(t,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mb(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Q_(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Be("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",mb().appendChild(r)})}function Y_(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gb=500,yb=6e4,Hl=1e12;class vb{constructor(e){this.auth=e,this.counter=Hl,this._widgets=new Map}render(e,n){const r=this.counter;return this._widgets.set(r,new wb(e,this.auth.name,n||{})),this.counter++,r}reset(e){var n;const r=e||Hl;(n=this._widgets.get(r))===null||n===void 0||n.delete(),this._widgets.delete(r)}getResponse(e){var n;const r=e||Hl;return((n=this._widgets.get(r))===null||n===void 0?void 0:n.getResponse())||""}async execute(e){var n;const r=e||Hl;return(n=this._widgets.get(r))===null||n===void 0||n.execute(),""}}class wb{constructor(e,n,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;k(i,"argument-error",{appName:n}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=_b(50);const{callback:e,"expired-callback":n}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,n)try{n()}catch{}this.isVisible&&this.execute()},yb)},gb))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function _b(t){const e=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<t;r++)e.push(n.charAt(Math.floor(Math.random()*n.length)));return e.join("")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xf=Y_("rcb"),Ib=new aa(3e4,6e4),Eb="https://www.google.com/recaptcha/api.js?";class Tb{constructor(){this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!Te().grecaptcha}load(e,n=""){return k(Sb(n),e,"argument-error"),this.shouldResolveImmediately(n)?Promise.resolve(Te().grecaptcha):new Promise((r,i)=>{const s=Te().setTimeout(()=>{i(Be(e,"network-request-failed"))},Ib.get());Te()[Xf]=()=>{Te().clearTimeout(s),delete Te()[Xf];const a=Te().grecaptcha;if(!a){i(Be(e,"internal-error"));return}const u=a.render;a.render=(l,c)=>{const h=u(l,c);return this.counter++,h},this.hostLanguage=n,r(a)};const o=`${Eb}?${as({onload:Xf,render:"explicit",hl:n})}`;Q_(o).catch(()=>{clearTimeout(s),i(Be(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){return!!Te().grecaptcha&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function Sb(t){return t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t)}class kb{async load(e){return new vb(e)}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X_="recaptcha",Cb={theme:"light",type:"image"};class Nb{constructor(e,n=Object.assign({},Cb),r){this.parameters=n,this.type=X_,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=Re(r),this.isInvisible=this.parameters.size==="invisible",k(typeof document!="undefined",this.auth,"operation-not-supported-in-this-environment");const i=typeof e=="string"?document.getElementById(e):e;k(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new kb:new Tb,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),n=this.getAssertedRecaptcha(),r=n.getResponse(e);return r||new Promise(i=>{const s=o=>{!o||(this.tokenChangeListeners.delete(s),i(o))};this.tokenChangeListeners.add(s),this.isInvisible&&n.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){k(!this.parameters.sitekey,this.auth,"argument-error"),k(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),k(typeof document!="undefined",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return n=>{if(this.tokenChangeListeners.forEach(r=>r(n)),typeof e=="function")e(n);else if(typeof e=="string"){const r=Te()[e];typeof r=="function"&&r(n)}}}assertNotDestroyed(){k(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const n=document.createElement("div");e.appendChild(n),e=n}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){k($f()&&!Qf(),this.auth,"internal-error"),await Rb(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await pb(this.auth);k(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return k(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function Rb(){let t=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}t=()=>e(),window.addEventListener("load",t)}).catch(e=>{throw t&&window.removeEventListener("load",t),e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jf{constructor(e,n){this.verificationId=e,this.onConfirmation=n}confirm(e){const n=ei._fromVerification(this.verificationId,e);return this.onConfirmation(n)}}async function bb(t,e,n){const r=Re(t),i=await Wl(r,e,D(n));return new Jf(i,s=>Ul(r,s))}async function Ab(t,e,n){const r=D(t);await Ml(!1,r,"phone");const i=await Wl(r.auth,e,D(n));return new Jf(i,s=>M_(r,s))}async function Pb(t,e,n){const r=D(t),i=await Wl(r.auth,e,D(n));return new Jf(i,s=>U_(r,s))}async function Wl(t,e,n){var r;const i=await n.verify();try{k(typeof i=="string",t,"argument-error"),k(n.type===X_,t,"argument-error");let s;if(typeof e=="string"?s={phoneNumber:e}:s=e,"session"in s){const o=s.session;if("phoneNumber"in s)return k(o.type==="enroll",t,"internal-error"),(await GR(t,{idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}})).phoneSessionInfo.sessionInfo;{k(o.type==="signin",t,"internal-error");const a=((r=s.multiFactorHint)===null||r===void 0?void 0:r.uid)||s.multiFactorUid;return k(a,t,"missing-multi-factor-info"),(await db(t,{mfaPendingCredential:o.credential,mfaEnrollmentId:a,phoneSignInInfo:{recaptchaToken:i}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:o}=await dR(t,{phoneNumber:s.phoneNumber,recaptchaToken:i});return o}}finally{n._reset()}}async function Db(t,e){await jf(D(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt{constructor(e){this.providerId=Yt.PROVIDER_ID,this.auth=Re(e)}verifyPhoneNumber(e,n){return Wl(this.auth,e,D(n))}static credential(e,n){return ei._fromVerification(e,n)}static credentialFromResult(e){const n=e;return Yt.credentialFromTaggedObject(n)}static credentialFromError(e){return Yt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:n,temporaryProof:r}=e;return n&&r?ei._fromTokenResponse(n,r):null}}Yt.PROVIDER_ID="phone";Yt.PHONE_SIGN_IN_METHOD="phone";/**
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
 */function ri(t,e){return e?Ct(e):(k(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Zf extends ps{constructor(e){super("custom","custom");this.params=e}_getIdTokenResponse(e){return Nn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Nn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Nn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function xb(t){return L_(t.auth,new Zf(t),t.bypassAuthState)}function Ob(t){const{auth:e,user:n}=t;return k(n,e,"internal-error"),O_(n,new Zf(t),t.bypassAuthState)}async function Lb(t){const{auth:e,user:n}=t;return k(n,e,"internal-error"),jf(n,new Zf(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J_{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(u))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return xb;case"linkViaPopup":case"linkViaRedirect":return Lb;case"reauthViaPopup":case"reauthViaRedirect":return Ob;default:Ve(this.auth,"internal-error")}}resolve(e){Qt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Qt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mb=new aa(2e3,1e4);async function Ub(t,e,n){const r=Re(t);hs(t,e,dr);const i=ri(r,n);return new Rn(r,"signInViaPopup",e,i).executeNotNull()}async function $b(t,e,n){const r=D(t);hs(r.auth,e,dr);const i=ri(r.auth,n);return new Rn(r.auth,"reauthViaPopup",e,i,r).executeNotNull()}async function Fb(t,e,n){const r=D(t);hs(r.auth,e,dr);const i=ri(r.auth,n);return new Rn(r.auth,"linkViaPopup",e,i,r).executeNotNull()}class Rn extends J_{constructor(e,n,r,i,s){super(e,n,i,s);this.provider=r,this.authWindow=null,this.pollId=null,Rn.currentPopupAction&&Rn.currentPopupAction.cancel(),Rn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return k(e,this.auth,"internal-error"),e}async onExecution(){Qt(this.filter.length===1,"Popup operations only handle one event");const e=pa();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Be(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Be(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Rn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0?void 0:r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Be(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,Mb.get())};e()}}Rn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vb="pendingRedirect",ep=new Map;class Bb extends J_{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r);this.eventId=null}async execute(){let e=ep.get(this.auth._key());if(!e){try{const r=await qb(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ep.set(this.auth._key(),e)}return e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function qb(t,e){const n=Z_(e),r=await np(t)._get(n)==="true";return await np(t)._remove(n),r}async function tp(t,e){return np(t)._set(Z_(e),"true")}function jb(){ep.clear()}function np(t){return Ct(t._redirectPersistence)}function Z_(t){return Zr(Vb,t.config.apiKey,t.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zb(t,e,n){return Hb(t,e,n)}async function Hb(t,e,n){const r=Re(t);hs(t,e,dr);const i=ri(r,n);return await tp(i,r),i._openRedirect(r,e,"signInViaRedirect")}function Wb(t,e,n){return Kb(t,e,n)}async function Kb(t,e,n){const r=D(t);hs(r.auth,e,dr);const i=ri(r.auth,n);await tp(i,r.auth);const s=await e0(r);return i._openRedirect(r.auth,e,"reauthViaRedirect",s)}function Gb(t,e,n){return Qb(t,e,n)}async function Qb(t,e,n){const r=D(t);hs(r.auth,e,dr);const i=ri(r.auth,n);await Ml(!1,r,e.providerId),await tp(i,r.auth);const s=await e0(r);return i._openRedirect(r.auth,e,"linkViaRedirect",s)}async function Yb(t,e){return await Re(t)._initializationPromise,Kl(t,e,!1)}async function Kl(t,e,n=!1){const r=Re(t),i=ri(r,e),o=await new Bb(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}async function e0(t){const e=pa(`${t.uid}:::`);return t._redirectEventId=e,await t.auth._setRedirectUser(t),await t.auth._persistUserIfCurrent(t),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xb=10*60*1e3;class t0{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Jb(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!r0(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Be(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Xb&&this.cachedEventUids.clear(),this.cachedEventUids.has(n0(e))}saveEventToCache(e){this.cachedEventUids.add(n0(e)),this.lastProcessedEventTime=Date.now()}}function n0(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function r0({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Jb(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return r0(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function i0(t,e={}){return Ne(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zb=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,eA=/^https?/;async function tA(t){if(t.config.emulator)return;const{authorizedDomains:e}=await i0(t);for(const n of e)try{if(nA(n))return}catch{}Ve(t,"unauthorized-domain")}function nA(t){const e=oa(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!eA.test(n))return!1;if(Zb.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const rA=new aa(3e4,6e4);function s0(){const t=Te().___jsl;if(t==null?void 0:t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function iA(t){return new Promise((e,n)=>{var r,i,s;function o(){s0(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{s0(),n(Be(t,"network-request-failed"))},timeout:rA.get()})}if((i=(r=Te().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0?void 0:i.Iframe)e(gapi.iframes.getContext());else if((s=Te().gapi)===null||s===void 0?void 0:s.load)o();else{const a=Y_("iframefcb");return Te()[a]=()=>{gapi.load?o():n(Be(t,"network-request-failed"))},Q_(`https://apis.google.com/js/api.js?onload=${a}`)}}).catch(e=>{throw Gl=null,e})}let Gl=null;function sA(t){return Gl=Gl||iA(t),Gl}/**
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
 */const oA=new aa(5e3,15e3),aA="__/auth/iframe",uA="emulator/auth/iframe",lA={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"}},cA=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function hA(t){const e=t.config;k(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ff(e,uA):`https://${t.config.authDomain}/${aA}`,r={apiKey:e.apiKey,appName:t.name,v:lr},i=cA.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${as(r).slice(1)}`}async function dA(t){const e=await sA(t),n=Te().gapi;return k(n,t,"internal-error"),e.open({where:document.body,url:hA(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:lA,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Be(t,"network-request-failed"),a=Te().setTimeout(()=>{s(o)},oA.get());function u(){Te().clearTimeout(a),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
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
 */const fA={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},pA=500,mA=600,gA="_blank",yA="http://localhost";class o0{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function vA(t,e,n,r=pA,i=mA){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const u=Object.assign(Object.assign({},fA),{width:r.toString(),height:i.toString(),top:s,left:o}),l=te().toLowerCase();n&&(a=w_(l)?gA:n),v_(l)&&(e=e||yA,u.scrollbars="yes");const c=Object.entries(u).reduce((d,[m,y])=>`${d}${m}=${y},`,"");if(YN(l)&&a!=="_self")return wA(e||"",a),new o0(null);const h=window.open(e||"",a,c);k(h,t,"popup-blocked");try{h.focus()}catch{}return new o0(h)}function wA(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const _A="__/auth/handler",IA="emulator/auth/handler";function rp(t,e,n,r,i,s){k(t.config.authDomain,t,"auth-domain-config-required"),k(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:lr,eventId:i};if(e instanceof dr){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",SC(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,l]of Object.entries(s||{}))o[u]=l}if(e instanceof ms){const u=e.getScopes().filter(l=>l!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];return`${EA(t)}?${as(a).slice(1)}`}function EA({config:t}){return t.emulator?Ff(t,IA):`https://${t.authDomain}/${_A}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ip="webStorageSupport";class TA{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ni,this._completeRedirectFn=Kl}async _openPopup(e,n,r,i){var s;Qt((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=rp(e,n,r,oa(),i);return vA(e,o,pa())}async _openRedirect(e,n,r,i){return await this._originValidation(e),rb(rp(e,n,r,oa(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Qt(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r}async initAndGetManager(e){const n=await dA(e),r=new t0(e);return n.register("authEvent",i=>(k(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ip,{type:ip},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[ip];o!==void 0&&n(!!o),Ve(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=tA(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return T_()||qf()||fs()}}const SA=TA;class kA{constructor(e){this.factorId=e}_process(e,n,r){switch(n.type){case"enroll":return this._finalizeEnroll(e,n.credential,r);case"signin":return this._finalizeSignIn(e,n.credential);default:return on("unexpected MultiFactorSessionType")}}}class sp extends kA{constructor(e){super("phone");this.credential=e}static _fromCredential(e){return new sp(e)}_finalizeEnroll(e,n,r){return QR(e,{idToken:n,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,n){return fb(e,{mfaPendingCredential:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class a0{constructor(){}static assertion(e){return sp._fromCredential(e)}}a0.FACTOR_ID="phone";var u0="@firebase/auth",l0="0.18.3";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CA{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{var i;e(((i=r)===null||i===void 0?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){k(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NA(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function RA(t){ur(new Gt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),{apiKey:i,authDomain:s}=r.options;return(o=>{k(i&&!i.includes(":"),"invalid-api-key",{appName:o.name}),k(!(s==null?void 0:s.includes(":")),"argument-error",{appName:o.name});const a={apiKey:i,authDomain:s,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:S_(t)},u=new ZN(o,a);return DN(u,n),u})(r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ur(new Gt("auth-internal",e=>{const n=Re(e.getProvider("auth").getImmediate());return(r=>new CA(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ft(u0,l0,NA(t)),Ft(u0,l0,"esm2017")}RA("Browser");/**
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
 */function ii(){return window}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bA=2e3;async function AA(t,e,n){var r;const{BuildInfo:i}=ii();Qt(e.sessionId,"AuthEvent did not contain a session ID");const s=await LA(e.sessionId),o={};return fs()?o.ibi=i.packageName:da()?o.apn=i.packageName:Ve(t,"operation-not-supported-in-this-environment"),i.displayName&&(o.appDisplayName=i.displayName),o.sessionId=s,rp(t,n,e.type,void 0,(r=e.eventId)!==null&&r!==void 0?r:void 0,o)}async function PA(t){const{BuildInfo:e}=ii(),n={};fs()?n.iosBundleId=e.packageName:da()?n.androidPackageName=e.packageName:Ve(t,"operation-not-supported-in-this-environment"),await i0(t,n)}function DA(t){const{cordova:e}=ii();return new Promise(n=>{e.plugins.browsertab.isAvailable(r=>{let i=null;r?e.plugins.browsertab.openUrl(t):i=e.InAppBrowser.open(t,QN()?"_blank":"_system","location=yes"),n(i)})})}async function xA(t,e,n){const{cordova:r}=ii();let i=()=>{};try{await new Promise((s,o)=>{let a=null;function u(){var h;s();const d=(h=r.plugins.browsertab)===null||h===void 0?void 0:h.close;typeof d=="function"&&d(),typeof(n==null?void 0:n.close)=="function"&&n.close()}function l(){a||(a=window.setTimeout(()=>{o(Be(t,"redirect-cancelled-by-user"))},bA))}function c(){(document==null?void 0:document.visibilityState)==="visible"&&l()}e.addPassiveListener(u),document.addEventListener("resume",l,!1),da()&&document.addEventListener("visibilitychange",c,!1),i=()=>{e.removePassiveListener(u),document.removeEventListener("resume",l,!1),document.removeEventListener("visibilitychange",c,!1),a&&window.clearTimeout(a)}})}finally{i()}}function OA(t){var e,n,r,i,s,o,a,u,l,c;const h=ii();k(typeof((e=h==null?void 0:h.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),k(typeof((n=h==null?void 0:h.BuildInfo)===null||n===void 0?void 0:n.packageName)!="undefined",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),k(typeof((s=(i=(r=h==null?void 0:h.cordova)===null||r===void 0?void 0:r.plugins)===null||i===void 0?void 0:i.browsertab)===null||s===void 0?void 0:s.openUrl)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),k(typeof((u=(a=(o=h==null?void 0:h.cordova)===null||o===void 0?void 0:o.plugins)===null||a===void 0?void 0:a.browsertab)===null||u===void 0?void 0:u.isAvailable)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),k(typeof((c=(l=h==null?void 0:h.cordova)===null||l===void 0?void 0:l.InAppBrowser)===null||c===void 0?void 0:c.open)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function LA(t){const e=MA(t),n=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(n)).map(i=>i.toString(16).padStart(2,"0")).join("")}function MA(t){if(Qt(/[0-9a-zA-Z]+/.test(t),"Can only convert alpha-numeric strings"),typeof TextEncoder!="undefined")return new TextEncoder().encode(t);const e=new ArrayBuffer(t.length),n=new Uint8Array(e);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UA=20;class $A extends t0{constructor(){super(...arguments);this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach(n=>n(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function FA(t,e,n=null){return{type:e,eventId:n,urlResponse:null,sessionId:qA(),postBody:null,tenantId:t.tenantId,error:Be(t,"no-auth-event")}}function VA(t,e){return op()._set(ap(t),e)}async function c0(t){const e=await op()._get(ap(t));return e&&await op()._remove(ap(t)),e}function BA(t,e){var n,r;const i=zA(e);if(i.includes("/__/auth/callback")){const s=Ql(i),o=s.firebaseError?jA(decodeURIComponent(s.firebaseError)):null,a=(r=(n=o==null?void 0:o.code)===null||n===void 0?void 0:n.split("auth/"))===null||r===void 0?void 0:r[1],u=a?Be(a):null;return u?{type:t.type,eventId:t.eventId,tenantId:t.tenantId,error:u,urlResponse:null,sessionId:null,postBody:null}:{type:t.type,eventId:t.eventId,tenantId:t.tenantId,sessionId:t.sessionId,urlResponse:i,postBody:null}}return null}function qA(){const t=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<UA;n++){const r=Math.floor(Math.random()*e.length);t.push(e.charAt(r))}return t.join("")}function op(){return Ct(Gf)}function ap(t){return Zr("authEvent",t.config.apiKey,t.name)}function jA(t){try{return JSON.parse(t)}catch{return null}}function zA(t){const e=Ql(t),n=e.link?decodeURIComponent(e.link):void 0,r=Ql(n).link,i=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return Ql(i).link||i||r||n||t}function Ql(t){if(!(t==null?void 0:t.includes("?")))return{};const[e,...n]=t.split("?");return us(n.join("?"))}/**
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
 */const HA=500;class WA{constructor(){this._redirectPersistence=ni,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=Kl}async _initialize(e){const n=e._key();let r=this.eventManagers.get(n);return r||(r=new $A(e),this.eventManagers.set(n,r),this.attachCallbackListeners(e,r)),r}_openPopup(e){Ve(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,n,r,i){OA(e);const s=await this._initialize(e);await s.initialized(),s.resetRedirect(),jb(),await this._originValidation(e);const o=FA(e,r,i);await VA(e,o);const a=await AA(e,o,n),u=await DA(a);return xA(e,s,u)}_isIframeWebStorageSupported(e,n){throw new Error("Method not implemented.")}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=PA(e)),this.originValidationPromises[n]}attachCallbackListeners(e,n){const{universalLinks:r,handleOpenURL:i,BuildInfo:s}=ii(),o=setTimeout(async()=>{await c0(e),n.onEvent(h0())},HA),a=async c=>{clearTimeout(o);const h=await c0(e);let d=null;h&&(c==null?void 0:c.url)&&(d=BA(h,c.url)),n.onEvent(d||h0())};typeof r!="undefined"&&typeof r.subscribe=="function"&&r.subscribe(null,a);const u=i,l=`${s.packageName.toLowerCase()}://`;ii().handleOpenURL=async c=>{if(c.toLowerCase().startsWith(l)&&a({url:c}),typeof u=="function")try{u(c)}catch(h){console.error(h)}}}}const KA=WA;function h0(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:Be("no-auth-event")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GA(t,e){Re(t)._logFramework(e)}var QA="@firebase/auth-compat",YA="0.1.6";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XA=1e3;function Yl(){var t;return((t=self==null?void 0:self.location)===null||t===void 0?void 0:t.protocol)||null}function JA(){return Yl()==="http:"||Yl()==="https:"}function d0(t=te()){return!!((Yl()==="file:"||Yl()==="ionic:")&&t.toLowerCase().match(/iphone|ipad|ipod|android/))}function ZA(){return Sl()||Nf()}function eP(){return bf()&&(document==null?void 0:document.documentMode)===11}function tP(t=te()){return/Edge\/\d+/.test(t)}function nP(t=te()){return eP()||tP(t)}function f0(){try{const t=self.localStorage,e=pa();if(t)return t.setItem(e,"1"),t.removeItem(e),nP()?kl():!0}catch{return up()&&kl()}return!1}function up(){return typeof global!="undefined"&&"WorkerGlobalScope"in global&&"importScripts"in global}function lp(){return(JA()||Rf()||d0())&&!ZA()&&f0()&&!up()}function p0(){return d0()&&typeof document!="undefined"}async function rP(){return p0()?new Promise(t=>{const e=setTimeout(()=>{t(!1)},XA);document.addEventListener("deviceready",()=>{clearTimeout(e),t(!0)})}):!1}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nt={LOCAL:"local",NONE:"none",SESSION:"session"},ga=k,m0="persistence";function iP(t,e){if(ga(Object.values(Nt).includes(e),t,"invalid-persistence-type"),Sl()){ga(e!==Nt.SESSION,t,"unsupported-persistence-type");return}if(Nf()){ga(e===Nt.NONE,t,"unsupported-persistence-type");return}if(up()){ga(e===Nt.NONE||e===Nt.LOCAL&&kl(),t,"unsupported-persistence-type");return}ga(e===Nt.NONE||f0(),t,"unsupported-persistence-type")}async function cp(t){await t._initializationPromise;const e=g0(),n=Zr(m0,t.config.apiKey,t.name);(e==null?void 0:e.sessionStorage)&&e.sessionStorage.setItem(n,t._getPersistence())}function sP(t,e){const n=g0();if(!(n==null?void 0:n.sessionStorage))return[];const r=Zr(m0,t,e);switch(n.sessionStorage.getItem(r)){case Nt.NONE:return[ha];case Nt.LOCAL:return[zl,ni];case Nt.SESSION:return[ni];default:return[]}}function g0(){return typeof window!="undefined"?window:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oP=k;class fr{constructor(){this.browserResolver=Ct(SA),this.cordovaResolver=Ct(KA),this.underlyingResolver=null,this._redirectPersistence=ni,this._completeRedirectFn=Kl}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,n,r,i)}async _openRedirect(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,n,r,i)}_isIframeWebStorageSupported(e,n){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,n)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return p0()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return oP(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await rP();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y0(t){return t.unwrap()}function aP(t){return t.wrapped()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uP(t){return v0(t)}function lP(t,e){var n;const r=(n=e.customData)===null||n===void 0?void 0:n._tokenResponse;if(e.code==="auth/multi-factor-auth-required"){const i=e;i.resolver=new cP(t,KR(t,e))}else if(r){const i=v0(e),s=e;i&&(s.credential=i,s.tenantId=r.tenantId||void 0,s.email=r.email||void 0,s.phoneNumber=r.phoneNumber||void 0)}}function v0(t){const{_tokenResponse:e}=t instanceof kt?t.customData:t;if(!e)return null;if(!(t instanceof kt)&&"temporaryProof"in e&&"phoneNumber"in e)return Yt.credentialFromResult(t);const n=e.providerId;if(!n||n===sa.PASSWORD)return null;let r;switch(n){case sa.GOOGLE:r=ln;break;case sa.FACEBOOK:r=un;break;case sa.GITHUB:r=cn;break;case sa.TWITTER:r=hn;break;default:const{oauthIdToken:i,oauthAccessToken:s,oauthTokenSecret:o,pendingToken:a,nonce:u}=e;return!s&&!o&&!i&&!a?null:a?n.startsWith("saml.")?Ol._create(n,a):an._fromParams({providerId:n,signInMethod:n,pendingToken:a,idToken:i,accessToken:s}):new gs(n).credential({idToken:i,accessToken:s,rawNonce:u})}return t instanceof kt?r.credentialFromError(t):r.credentialFromResult(t)}function wt(t,e){return e.catch(n=>{throw n instanceof kt&&lP(t,n),n}).then(n=>{const r=n.operationType,i=n.user;return{operationType:r,credential:uP(n),additionalUserInfo:WR(n),user:bn.getOrCreate(i)}})}async function hp(t,e){const n=await e;return{verificationId:n.verificationId,confirm:r=>wt(t,n.confirm(r))}}class cP{constructor(e,n){this.resolver=n,this.auth=aP(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return wt(y0(this.auth),this.resolver.resolveSignIn(e))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn{constructor(e){this._delegate=e,this.multiFactor=XR(e)}static getOrCreate(e){return bn.USER_MAP.has(e)||bn.USER_MAP.set(e,new bn(e)),bn.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return wt(this.auth,M_(this._delegate,e))}async linkWithPhoneNumber(e,n){return hp(this.auth,Ab(this._delegate,e,n))}async linkWithPopup(e){return wt(this.auth,Fb(this._delegate,e,fr))}async linkWithRedirect(e){return await cp(Re(this.auth)),Gb(this._delegate,e,fr)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return wt(this.auth,U_(this._delegate,e))}reauthenticateWithPhoneNumber(e,n){return hp(this.auth,Pb(this._delegate,e,n))}reauthenticateWithPopup(e){return wt(this.auth,$b(this._delegate,e,fr))}async reauthenticateWithRedirect(e){return await cp(Re(this.auth)),Wb(this._delegate,e,fr)}sendEmailVerification(e){return LR(this._delegate,e)}async unlink(e){return await IR(this._delegate,e),this}updateEmail(e){return FR(this._delegate,e)}updatePassword(e){return VR(this._delegate,e)}updatePhoneNumber(e){return Db(this._delegate,e)}updateProfile(e){return $R(this._delegate,e)}verifyBeforeUpdateEmail(e,n){return MR(this._delegate,e,n)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}bn.USER_MAP=new WeakMap;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ya=k;class dp{constructor(e,n){if(this.app=e,n.isInitialized()){this._delegate=n.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:r}=e.options;ya(r,"invalid-api-key",{appName:e.name});let i=[ha];if(typeof window!="undefined"){i=sP(r,e.name);for(const o of[zl,Gf,ni])i.includes(o)||i.push(o)}ya(r,"invalid-api-key",{appName:e.name});const s=typeof window!="undefined"?fr:void 0;this._delegate=n.initialize({options:{persistence:i,popupRedirectResolver:s}}),this._delegate._updateErrorMap(AN),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?bn.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,n){eR(this._delegate,e,n)}applyActionCode(e){return CR(this._delegate,e)}checkActionCode(e){return $_(this._delegate,e)}confirmPasswordReset(e,n){return kR(this._delegate,e,n)}async createUserWithEmailAndPassword(e,n){return wt(this._delegate,RR(this._delegate,e,n))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return OR(this._delegate,e)}isSignInWithEmailLink(e){return PR(this._delegate,e)}async getRedirectResult(){ya(lp(),this._delegate,"operation-not-supported-in-this-environment");const e=await Yb(this._delegate,fr);return e?wt(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){GA(this._delegate,e)}onAuthStateChanged(e,n,r){const{next:i,error:s,complete:o}=w0(e,n,r);return this._delegate.onAuthStateChanged(i,s,o)}onIdTokenChanged(e,n,r){const{next:i,error:s,complete:o}=w0(e,n,r);return this._delegate.onIdTokenChanged(i,s,o)}sendSignInLinkToEmail(e,n){return AR(this._delegate,e,n)}sendPasswordResetEmail(e,n){return SR(this._delegate,e,n||void 0)}async setPersistence(e){iP(this._delegate,e);let n;switch(e){case Nt.SESSION:n=ni;break;case Nt.LOCAL:n=await Ct(zl)._isAvailable()?zl:Gf;break;case Nt.NONE:n=ha;break;default:return Ve("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(n)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return wt(this._delegate,_R(this._delegate))}signInWithCredential(e){return wt(this._delegate,Ul(this._delegate,e))}signInWithCustomToken(e){return wt(this._delegate,TR(this._delegate,e))}signInWithEmailAndPassword(e,n){return wt(this._delegate,bR(this._delegate,e,n))}signInWithEmailLink(e,n){return wt(this._delegate,DR(this._delegate,e,n))}signInWithPhoneNumber(e,n){return hp(this._delegate,bb(this._delegate,e,n))}async signInWithPopup(e){return ya(lp(),this._delegate,"operation-not-supported-in-this-environment"),wt(this._delegate,Ub(this._delegate,e,fr))}async signInWithRedirect(e){return ya(lp(),this._delegate,"operation-not-supported-in-this-environment"),await cp(this._delegate),zb(this._delegate,e,fr)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return NR(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}dp.Persistence=Nt;function w0(t,e,n){let r=t;typeof t!="function"&&({next:r,error:e,complete:n}=t);const i=r;return{next:o=>i(o&&bn.getOrCreate(o)),error:e,complete:n}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fp{constructor(){this.providerId="phone",this._delegate=new Yt(y0(ls.auth()))}static credential(e,n){return Yt.credential(e,n)}verifyPhoneNumber(e,n){return this._delegate.verifyPhoneNumber(e,n)}unwrap(){return this._delegate}}fp.PHONE_SIGN_IN_METHOD=Yt.PHONE_SIGN_IN_METHOD;fp.PROVIDER_ID=Yt.PROVIDER_ID;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hP=k;class dP{constructor(e,n,r=ls.app()){var i;hP((i=r.options)===null||i===void 0?void 0:i.apiKey,"invalid-api-key",{appName:r.name}),this._delegate=new Nb(e,n,r.auth()),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fP="auth-compat";function pP(t){t.INTERNAL.registerComponent(new Gt(fP,e=>{const n=e.getProvider("app-compat").getImmediate(),r=e.getProvider("auth");return new dp(n,r)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:cs.EMAIL_SIGNIN,PASSWORD_RESET:cs.PASSWORD_RESET,RECOVER_EMAIL:cs.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:cs.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:cs.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:cs.VERIFY_EMAIL}},EmailAuthProvider:hr,FacebookAuthProvider:un,GithubAuthProvider:cn,GoogleAuthProvider:ln,OAuthProvider:gs,PhoneAuthProvider:fp,PhoneMultiFactorGenerator:a0,RecaptchaVerifier:dP,TwitterAuthProvider:hn,Auth:dp,AuthCredential:ps,Error:kt}).setInstantiationMode("LAZY").setMultipleInstances(!1)),t.registerVersion(QA,YA)}pP(ls);var mP=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},A,pp=pp||{},q=mP||self;function Xl(){}function mp(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function va(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function gP(t){return Object.prototype.hasOwnProperty.call(t,gp)&&t[gp]||(t[gp]=++yP)}var gp="closure_uid_"+(1e9*Math.random()>>>0),yP=0;function vP(t,e,n){return t.call.apply(t.bind,arguments)}function wP(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function qe(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?qe=vP:qe=wP,qe.apply(null,arguments)}function Jl(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function je(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function pr(){this.s=this.s,this.o=this.o}var _P=0,IP={};pr.prototype.s=!1;pr.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),_P!=0)){var t=gP(this);delete IP[t]}};pr.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const _0=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},I0=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const r=t.length,i=typeof t=="string"?t.split(""):t;for(let s=0;s<r;s++)s in i&&e.call(n,i[s],s,t)};function EP(t){e:{var e=fD;const n=t.length,r=typeof t=="string"?t.split(""):t;for(let i=0;i<n;i++)if(i in r&&e.call(void 0,r[i],i,t)){e=i;break e}e=-1}return 0>e?null:typeof t=="string"?t.charAt(e):t[e]}function E0(t){return Array.prototype.concat.apply([],arguments)}function yp(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function Zl(t){return/^[\s\xa0]*$/.test(t)}var T0=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function at(t,e){return t.indexOf(e)!=-1}function vp(t,e){return t<e?-1:t>e?1:0}var ut;e:{var S0=q.navigator;if(S0){var k0=S0.userAgent;if(k0){ut=k0;break e}}ut=""}function wp(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function C0(t){const e={};for(const n in t)e[n]=t[n];return e}var N0="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function R0(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<N0.length;s++)n=N0[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function _p(t){return _p[" "](t),t}_p[" "]=Xl;function TP(t){var e=CP;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var SP=at(ut,"Opera"),vs=at(ut,"Trident")||at(ut,"MSIE"),b0=at(ut,"Edge"),Ip=b0||vs,A0=at(ut,"Gecko")&&!(at(ut.toLowerCase(),"webkit")&&!at(ut,"Edge"))&&!(at(ut,"Trident")||at(ut,"MSIE"))&&!at(ut,"Edge"),kP=at(ut.toLowerCase(),"webkit")&&!at(ut,"Edge");function P0(){var t=q.document;return t?t.documentMode:void 0}var ec;e:{var Ep="",Tp=function(){var t=ut;if(A0)return/rv:([^\);]+)(\)|;)/.exec(t);if(b0)return/Edge\/([\d\.]+)/.exec(t);if(vs)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(kP)return/WebKit\/(\S+)/.exec(t);if(SP)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Tp&&(Ep=Tp?Tp[1]:""),vs){var Sp=P0();if(Sp!=null&&Sp>parseFloat(Ep)){ec=String(Sp);break e}}ec=Ep}var CP={};function NP(){return TP(function(){let t=0;const e=T0(String(ec)).split("."),n=T0("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var i=e[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i[0].length==0&&s[0].length==0)break;t=vp(i[1].length==0?0:parseInt(i[1],10),s[1].length==0?0:parseInt(s[1],10))||vp(i[2].length==0,s[2].length==0)||vp(i[2],s[2]),i=i[3],s=s[3]}while(t==0)}return 0<=t})}var kp;if(q.document&&vs){var D0=P0();kp=D0||parseInt(ec,10)||void 0}else kp=void 0;var RP=kp,bP=function(){if(!q.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{q.addEventListener("test",Xl,e),q.removeEventListener("test",Xl,e)}catch{}return t}();function et(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}et.prototype.h=function(){this.defaultPrevented=!0};function wa(t,e){if(et.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(A0){e:{try{_p(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:AP[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&wa.Z.h.call(this)}}je(wa,et);var AP={2:"touch",3:"pen",4:"mouse"};wa.prototype.h=function(){wa.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var _a="closure_listenable_"+(1e6*Math.random()|0),PP=0;function DP(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ia=i,this.key=++PP,this.ca=this.fa=!1}function tc(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function nc(t){this.src=t,this.g={},this.h=0}nc.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=Np(t,e,r,i);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new DP(e,this.src,s,!!r,i),e.fa=n,t.push(e)),e};function Cp(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=_0(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(tc(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Np(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.ca&&s.listener==e&&s.capture==!!n&&s.ia==r)return i}return-1}var Rp="closure_lm_"+(1e6*Math.random()|0),bp={};function x0(t,e,n,r,i){if(r&&r.once)return L0(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)x0(t,e[s],n,r,i);return null}return n=xp(n),t&&t[_a]?t.N(e,n,va(r)?!!r.capture:!!r,i):O0(t,e,n,!1,r,i)}function O0(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=va(i)?!!i.capture:!!i,a=Pp(t);if(a||(t[Rp]=a=new nc(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=xP(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)bP||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(U0(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function xP(){function t(n){return e.call(t.src,t.listener,n)}var e=OP;return t}function L0(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)L0(t,e[s],n,r,i);return null}return n=xp(n),t&&t[_a]?t.O(e,n,va(r)?!!r.capture:!!r,i):O0(t,e,n,!0,r,i)}function M0(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)M0(t,e[s],n,r,i);else r=va(r)?!!r.capture:!!r,n=xp(n),t&&t[_a]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=Np(s,n,r,i),-1<n&&(tc(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=Pp(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Np(e,n,r,i)),(n=-1<t?e[t]:null)&&Ap(n))}function Ap(t){if(typeof t!="number"&&t&&!t.ca){var e=t.src;if(e&&e[_a])Cp(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(U0(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Pp(e))?(Cp(n,t),n.h==0&&(n.src=null,e[Rp]=null)):tc(t)}}}function U0(t){return t in bp?bp[t]:bp[t]="on"+t}function OP(t,e){if(t.ca)t=!0;else{e=new wa(e,this);var n=t.listener,r=t.ia||t.src;t.fa&&Ap(t),t=n.call(r,e)}return t}function Pp(t){return t=t[Rp],t instanceof nc?t:null}var Dp="__closure_events_fn_"+(1e9*Math.random()>>>0);function xp(t){return typeof t=="function"?t:(t[Dp]||(t[Dp]=function(e){return t.handleEvent(e)}),t[Dp])}function be(){pr.call(this),this.i=new nc(this),this.P=this,this.I=null}je(be,pr);be.prototype[_a]=!0;be.prototype.removeEventListener=function(t,e,n,r){M0(this,t,e,n,r)};function ze(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,typeof e=="string")e=new et(e,t);else if(e instanceof et)e.target=e.target||t;else{var i=e;e=new et(r,t),R0(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=rc(o,r,!0,e)&&i}if(o=e.g=t,i=rc(o,r,!0,e)&&i,i=rc(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=rc(o,r,!1,e)&&i}be.prototype.M=function(){if(be.Z.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)tc(n[r]);delete t.g[e],t.h--}}this.I=null};be.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};be.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function rc(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ca&&o.capture==n){var a=o.listener,u=o.ia||o.src;o.fa&&Cp(t.i,o),i=a.call(u,r)!==!1&&i}}return i&&!r.defaultPrevented}var Op=q.JSON.stringify;function LP(){var t=F0;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class MP{constructor(){this.h=this.g=null}add(e,n){const r=$0.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var $0=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new UP,t=>t.reset());class UP{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function $P(t){q.setTimeout(()=>{throw t},0)}function Lp(t,e){Mp||FP(),Up||(Mp(),Up=!0),F0.add(t,e)}var Mp;function FP(){var t=q.Promise.resolve(void 0);Mp=function(){t.then(VP)}}var Up=!1,F0=new MP;function VP(){for(var t;t=LP();){try{t.h.call(t.g)}catch(n){$P(n)}var e=$0;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Up=!1}function ic(t,e){be.call(this),this.h=t||1,this.g=e||q,this.j=qe(this.kb,this),this.l=Date.now()}je(ic,be);A=ic.prototype;A.da=!1;A.S=null;A.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),ze(this,"tick"),this.da&&($p(this),this.start()))}};A.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function $p(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}A.M=function(){ic.Z.M.call(this),$p(this),delete this.g};function Fp(t,e,n){if(typeof t=="function")n&&(t=qe(t,n));else if(t&&typeof t.handleEvent=="function")t=qe(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:q.setTimeout(t,e||0)}function V0(t){t.g=Fp(()=>{t.g=null,t.i&&(t.i=!1,V0(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class BP extends pr{constructor(e,n){super();this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:V0(this)}M(){super.M(),this.g&&(q.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ia(t){pr.call(this),this.h=t,this.g={}}je(Ia,pr);var B0=[];function q0(t,e,n,r){Array.isArray(n)||(n&&(B0[0]=n.toString()),n=B0);for(var i=0;i<n.length;i++){var s=x0(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function j0(t){wp(t.g,function(e,n){this.g.hasOwnProperty(n)&&Ap(e)},t),t.g={}}Ia.prototype.M=function(){Ia.Z.M.call(this),j0(this)};Ia.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function sc(){this.g=!0}sc.prototype.Aa=function(){this.g=!1};function qP(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),u=0;u<a.length;u++){var l=a[u].split("=");if(1<l.length){var c=l[0];l=l[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+l+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function jP(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function ws(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+HP(t,n)+(r?" "+r:"")})}function zP(t,e){t.info(function(){return"TIMEOUT: "+e})}sc.prototype.info=function(){};function HP(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Op(n)}catch{return e}}var si={},z0=null;function oc(){return z0=z0||new be}si.Ma="serverreachability";function H0(t){et.call(this,si.Ma,t)}je(H0,et);function Ea(t){const e=oc();ze(e,new H0(e,t))}si.STAT_EVENT="statevent";function W0(t,e){et.call(this,si.STAT_EVENT,t),this.stat=e}je(W0,et);function lt(t){const e=oc();ze(e,new W0(e,t))}si.Na="timingevent";function K0(t,e){et.call(this,si.Na,t),this.size=e}je(K0,et);function Ta(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return q.setTimeout(function(){t()},e)}var ac={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},G0={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function Vp(){}Vp.prototype.h=null;function Q0(t){return t.h||(t.h=t.i())}function Y0(){}var Sa={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function Bp(){et.call(this,"d")}je(Bp,et);function qp(){et.call(this,"c")}je(qp,et);var jp;function uc(){}je(uc,Vp);uc.prototype.g=function(){return new XMLHttpRequest};uc.prototype.i=function(){return{}};jp=new uc;function ka(t,e,n,r){this.l=t,this.j=e,this.m=n,this.X=r||1,this.V=new Ia(this),this.P=WP,t=Ip?125:void 0,this.W=new ic(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new X0}function X0(){this.i=null,this.g="",this.h=!1}var WP=45e3,zp={},lc={};A=ka.prototype;A.setTimeout=function(t){this.P=t};function Hp(t,e,n){t.K=1,t.v=pc(An(e)),t.s=n,t.U=!0,J0(t,null)}function J0(t,e){t.F=Date.now(),Ca(t),t.A=An(t.v);var n=t.A,r=t.X;Array.isArray(r)||(r=[String(r)]),aI(n.h,"t",r),t.C=0,n=t.l.H,t.h=new X0,t.g=AI(t.l,n?e:null,!t.s),0<t.O&&(t.L=new BP(qe(t.Ia,t,t.g),t.O)),q0(t.V,t.g,"readystatechange",t.gb),e=t.H?C0(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),Ea(1),qP(t.j,t.u,t.A,t.m,t.X,t.s)}A.gb=function(t){t=t.target;const e=this.L;e&&Pn(t)==3?e.l():this.Ia(t)};A.Ia=function(t){try{if(t==this.g)e:{const c=Pn(this.g);var e=this.g.Da();const h=this.g.ba();if(!(3>c)&&(c!=3||Ip||this.g&&(this.h.h||this.g.ga()||wI(this.g)))){this.I||c!=4||e==7||(e==8||0>=h?Ea(3):Ea(2)),cc(this);var n=this.g.ba();this.N=n;t:if(Z0(this)){var r=wI(this.g);t="";var i=r.length,s=Pn(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){oi(this),Na(this);var o="";break t}this.h.i=new q.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=n==200,jP(this.j,this.u,this.A,this.m,this.X,c,n),this.i){if(this.$&&!this.J){t:{if(this.g){var a,u=this.g;if((a=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Zl(a)){var l=a;break t}}l=null}if(n=l)ws(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Wp(this,n);else{this.i=!1,this.o=3,lt(12),oi(this),Na(this);break e}}this.U?(eI(this,c,o),Ip&&this.i&&c==3&&(q0(this.V,this.W,"tick",this.fb),this.W.start())):(ws(this.j,this.m,o,null),Wp(this,o)),c==4&&oi(this),this.i&&!this.I&&(c==4?CI(this.l,this):(this.i=!1,Ca(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,lt(12)):(this.o=0,lt(13)),oi(this),Na(this)}}}catch{}finally{}};function Z0(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Ba:!1}function eI(t,e,n){let r=!0,i;for(;!t.I&&t.C<n.length;)if(i=KP(t,n),i==lc){e==4&&(t.o=4,lt(14),r=!1),ws(t.j,t.m,null,"[Incomplete Response]");break}else if(i==zp){t.o=4,lt(15),ws(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else ws(t.j,t.m,i,null),Wp(t,i);Z0(t)&&i!=lc&&i!=zp&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,lt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),rm(e),e.L=!0,lt(11))):(ws(t.j,t.m,n,"[Invalid Chunked Response]"),oi(t),Na(t))}A.fb=function(){if(this.g){var t=Pn(this.g),e=this.g.ga();this.C<e.length&&(cc(this),eI(this,t,e),this.i&&t!=4&&Ca(this))}};function KP(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?lc:(n=Number(e.substring(n,r)),isNaN(n)?zp:(r+=1,r+n>e.length?lc:(e=e.substr(r,n),t.C=r+n,e)))}A.cancel=function(){this.I=!0,oi(this)};function Ca(t){t.Y=Date.now()+t.P,tI(t,t.P)}function tI(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Ta(qe(t.eb,t),e)}function cc(t){t.B&&(q.clearTimeout(t.B),t.B=null)}A.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(zP(this.j,this.A),this.K!=2&&(Ea(3),lt(17)),oi(this),this.o=2,Na(this)):tI(this,this.Y-t)};function Na(t){t.l.G==0||t.I||CI(t.l,t)}function oi(t){cc(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,$p(t.W),j0(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Wp(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Qp(n.i,t))){if(n.I=t.N,!t.J&&Qp(n.i,t)&&n.G==3){try{var r=n.Ca.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0)e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)_c(n),vc(n);else break e;nm(n),lt(18)}else n.ta=i[1],0<n.ta-n.U&&37500>i[2]&&n.N&&n.A==0&&!n.v&&(n.v=Ta(qe(n.ab,n),6e3));if(1>=cI(n.i)&&n.ka){try{n.ka()}catch{}n.ka=void 0}}else li(n,11)}else if((t.J||n.g==t)&&_c(n),!Zl(e))for(i=n.Ca.g.parse(e),e=0;e<i.length;e++){let l=i[e];if(n.U=l[0],l=l[1],n.G==2)if(l[0]=="c"){n.J=l[1],n.la=l[2];const c=l[3];c!=null&&(n.ma=c,n.h.info("VER="+n.ma));const h=l[4];h!=null&&(n.za=h,n.h.info("SVER="+n.za));const d=l[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.K=r,n.h.info("backChannelRequestTimeoutMs_="+r)),r=n;const m=t.g;if(m){const y=m.g?m.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var s=r.i;!s.g&&(at(y,"spdy")||at(y,"quic")||at(y,"h2"))&&(s.j=s.l,s.g=new Set,s.h&&(Yp(s,s.h),s.h=null))}if(r.D){const I=m.g?m.g.getResponseHeader("X-HTTP-Session-Id"):null;I&&(r.sa=I,se(r.F,r.D,I))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),r=n;var o=t;if(r.oa=bI(r,r.H?r.la:null,r.W),o.J){hI(r.i,o);var a=o,u=r.K;u&&a.setTimeout(u),a.B&&(cc(a),Ca(a)),r.g=o}else SI(r);0<n.l.length&&wc(n)}else l[0]!="stop"&&l[0]!="close"||li(n,7);else n.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?li(n,7):em(n):l[0]!="noop"&&n.j&&n.j.wa(l),n.A=0)}}Ea(4)}catch{}}function GP(t){if(t.R&&typeof t.R=="function")return t.R();if(typeof t=="string")return t.split("");if(mp(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function Kp(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(mp(t)||typeof t=="string")I0(t,e,void 0);else{if(t.T&&typeof t.T=="function")var n=t.T();else if(t.R&&typeof t.R=="function")n=void 0;else if(mp(t)||typeof t=="string"){n=[];for(var r=t.length,i=0;i<r;i++)n.push(i)}else for(i in n=[],r=0,t)n[r++]=i;r=GP(t),i=r.length;for(var s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}}function _s(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(t)if(t instanceof _s)for(n=t.T(),r=0;r<n.length;r++)this.set(n[r],t.get(n[r]));else for(r in t)this.set(r,t[r])}A=_s.prototype;A.R=function(){Gp(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t};A.T=function(){return Gp(this),this.g.concat()};function Gp(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var r=t.g[e];ai(t.h,r)&&(t.g[n++]=r),e++}t.g.length=n}if(t.i!=t.g.length){var i={};for(n=e=0;e<t.g.length;)r=t.g[e],ai(i,r)||(t.g[n++]=r,i[r]=1),e++;t.g.length=n}}A.get=function(t,e){return ai(this.h,t)?this.h[t]:e};A.set=function(t,e){ai(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e};A.forEach=function(t,e){for(var n=this.T(),r=0;r<n.length;r++){var i=n[r],s=this.get(i);t.call(e,s,i,this)}};function ai(t,e){return Object.prototype.hasOwnProperty.call(t,e)}var nI=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function QP(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function ui(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof ui){this.g=e!==void 0?e:t.g,hc(this,t.j),this.s=t.s,dc(this,t.i),fc(this,t.m),this.l=t.l,e=t.h;var n=new Aa;n.i=e.i,e.g&&(n.g=new _s(e.g),n.h=e.h),rI(this,n),this.o=t.o}else t&&(n=String(t).match(nI))?(this.g=!!e,hc(this,n[1]||"",!0),this.s=Ra(n[2]||""),dc(this,n[3]||"",!0),fc(this,n[4]),this.l=Ra(n[5]||"",!0),rI(this,n[6]||"",!0),this.o=Ra(n[7]||"")):(this.g=!!e,this.h=new Aa(null,this.g))}ui.prototype.toString=function(){var t=[],e=this.j;e&&t.push(ba(e,iI,!0),":");var n=this.i;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(ba(e,iI,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.i&&n.charAt(0)!="/"&&t.push("/"),t.push(ba(n,n.charAt(0)=="/"?eD:ZP,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",ba(n,nD)),t.join("")};function An(t){return new ui(t)}function hc(t,e,n){t.j=n?Ra(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function dc(t,e,n){t.i=n?Ra(e,!0):e}function fc(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function rI(t,e,n){e instanceof Aa?(t.h=e,rD(t.h,t.g)):(n||(e=ba(e,tD)),t.h=new Aa(e,t.g))}function se(t,e,n){t.h.set(e,n)}function pc(t){return se(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function YP(t){return t instanceof ui?An(t):new ui(t,void 0)}function XP(t,e,n,r){var i=new ui(null,void 0);return t&&hc(i,t),e&&dc(i,e),n&&fc(i,n),r&&(i.l=r),i}function Ra(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function ba(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,JP),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function JP(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var iI=/[#\/\?@]/g,ZP=/[#\?:]/g,eD=/[#\?]/g,tD=/[#\?@]/g,nD=/#/g;function Aa(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function mr(t){t.g||(t.g=new _s,t.h=0,t.i&&QP(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}A=Aa.prototype;A.add=function(t,e){mr(this),this.i=null,t=Is(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function sI(t,e){mr(t),e=Is(t,e),ai(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,ai(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&Gp(t)))}function oI(t,e){return mr(t),e=Is(t,e),ai(t.g.h,e)}A.forEach=function(t,e){mr(this),this.g.forEach(function(n,r){I0(n,function(i){t.call(e,i,r,this)},this)},this)};A.T=function(){mr(this);for(var t=this.g.R(),e=this.g.T(),n=[],r=0;r<e.length;r++)for(var i=t[r],s=0;s<i.length;s++)n.push(e[r]);return n};A.R=function(t){mr(this);var e=[];if(typeof t=="string")oI(this,t)&&(e=E0(e,this.g.get(Is(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=E0(e,t[n])}return e};A.set=function(t,e){return mr(this),this.i=null,t=Is(this,t),oI(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};A.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e};function aI(t,e,n){sI(t,e),0<n.length&&(t.i=null,t.g.set(Is(t,e),yp(n)),t.h+=n.length)}A.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var r=e[n],i=encodeURIComponent(String(r));r=this.R(r);for(var s=0;s<r.length;s++){var o=i;r[s]!==""&&(o+="="+encodeURIComponent(String(r[s]))),t.push(o)}}return this.i=t.join("&")};function Is(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function rD(t,e){e&&!t.j&&(mr(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(sI(this,r),aI(this,i,n))},t)),t.j=e}var iD=class{constructor(t,e){this.h=t,this.g=e}};function uI(t){this.l=t||sD,q.PerformanceNavigationTiming?(t=q.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(q.g&&q.g.Ea&&q.g.Ea()&&q.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var sD=10;function lI(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function cI(t){return t.h?1:t.g?t.g.size:0}function Qp(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Yp(t,e){t.g?t.g.add(e):t.h=e}function hI(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}uI.prototype.cancel=function(){if(this.i=dI(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function dI(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return yp(t.i)}function Xp(){}Xp.prototype.stringify=function(t){return q.JSON.stringify(t,void 0)};Xp.prototype.parse=function(t){return q.JSON.parse(t,void 0)};function oD(){this.g=new Xp}function aD(t,e,n){const r=n||"";try{Kp(t,function(i,s){let o=i;va(i)&&(o=Op(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function uD(t,e){const n=new sc;if(q.Image){const r=new Image;r.onload=Jl(mc,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Jl(mc,n,r,"TestLoadImage: error",!1,e),r.onabort=Jl(mc,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Jl(mc,n,r,"TestLoadImage: timeout",!1,e),q.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function mc(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function Pa(t){this.l=t.$b||null,this.j=t.ib||!1}je(Pa,Vp);Pa.prototype.g=function(){return new gc(this.l,this.j)};Pa.prototype.i=function(t){return function(){return t}}({});function gc(t,e){be.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Jp,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}je(gc,be);var Jp=0;A=gc.prototype;A.open=function(t,e){if(this.readyState!=Jp)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,xa(this)};A.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||q).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))};A.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Da(this)),this.readyState=Jp};A.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,xa(this)),this.g&&(this.readyState=3,xa(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof q.ReadableStream!="undefined"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;fI(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))};function fI(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}A.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Da(this):xa(this),this.readyState==3&&fI(this)}};A.Ua=function(t){this.g&&(this.response=this.responseText=t,Da(this))};A.Ta=function(t){this.g&&(this.response=t,Da(this))};A.ha=function(){this.g&&Da(this)};function Da(t){t.readyState=4,t.l=null,t.j=null,t.A=null,xa(t)}A.setRequestHeader=function(t,e){this.v.append(t,e)};A.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};A.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function xa(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(gc.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var lD=q.JSON.parse;function me(t){be.call(this),this.headers=new _s,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=pI,this.K=this.L=!1}je(me,be);var pI="",cD=/^https?$/i,hD=["POST","PUT"];A=me.prototype;A.ea=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():jp.g(),this.C=this.u?Q0(this.u):Q0(jp),this.g.onreadystatechange=qe(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(s){mI(this,s);return}t=n||"";const i=new _s(this.headers);r&&Kp(r,function(s,o){i.set(o,s)}),r=EP(i.T()),n=q.FormData&&t instanceof q.FormData,!(0<=_0(hD,e))||r||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach(function(s,o){this.g.setRequestHeader(o,s)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{vI(this),0<this.B&&((this.K=dD(this.g))?(this.g.timeout=this.B,this.g.ontimeout=qe(this.pa,this)):this.A=Fp(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){mI(this,s)}};function dD(t){return vs&&NP()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}function fD(t){return t.toLowerCase()=="content-type"}A.pa=function(){typeof pp!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,ze(this,"timeout"),this.abort(8))};function mI(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,gI(t),yc(t)}function gI(t){t.D||(t.D=!0,ze(t,"complete"),ze(t,"error"))}A.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,ze(this,"complete"),ze(this,"abort"),yc(this))};A.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),yc(this,!0)),me.Z.M.call(this)};A.Fa=function(){this.s||(this.F||this.v||this.l?yI(this):this.cb())};A.cb=function(){yI(this)};function yI(t){if(t.h&&typeof pp!="undefined"&&(!t.C[1]||Pn(t)!=4||t.ba()!=2)){if(t.v&&Pn(t)==4)Fp(t.Fa,0,t);else if(ze(t,"readystatechange"),Pn(t)==4){t.h=!1;try{const a=t.ba();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var i=String(t.H).match(nI)[1]||null;if(!i&&q.self&&q.self.location){var s=q.self.location.protocol;i=s.substr(0,s.length-1)}r=!cD.test(i?i.toLowerCase():"")}n=r}if(n)ze(t,"complete"),ze(t,"success");else{t.m=6;try{var o=2<Pn(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.ba()+"]",gI(t)}}finally{yc(t)}}}}function yc(t,e){if(t.g){vI(t);const n=t.g,r=t.C[0]?Xl:null;t.g=null,t.C=null,e||ze(t,"ready");try{n.onreadystatechange=r}catch{}}}function vI(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(q.clearTimeout(t.A),t.A=null)}function Pn(t){return t.g?t.g.readyState:0}A.ba=function(){try{return 2<Pn(this)?this.g.status:-1}catch{return-1}};A.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};A.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),lD(e)}};function wI(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case pI:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}A.Da=function(){return this.m};A.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function pD(t){let e="";return wp(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Zp(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=pD(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):se(t,e,n))}function Oa(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function _I(t){this.za=0,this.l=[],this.h=new sc,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=Oa("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=Oa("baseRetryDelayMs",5e3,t),this.$a=Oa("retryDelaySeedMs",1e4,t),this.Ya=Oa("forwardChannelMaxRetries",2,t),this.ra=Oa("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new uI(t&&t.concurrentRequestLimit),this.Ca=new oD,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||t.Xb!==!1}A=_I.prototype;A.ma=8;A.G=1;function em(t){if(II(t),t.G==3){var e=t.V++,n=An(t.F);se(n,"SID",t.J),se(n,"RID",e),se(n,"TYPE","terminate"),La(t,n),e=new ka(t,t.h,e,void 0),e.K=2,e.v=pc(An(n)),n=!1,q.navigator&&q.navigator.sendBeacon&&(n=q.navigator.sendBeacon(e.v.toString(),"")),!n&&q.Image&&(new Image().src=e.v,n=!0),n||(e.g=AI(e.l,null),e.g.ea(e.v)),e.F=Date.now(),Ca(e)}RI(t)}A.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch{}};function vc(t){t.g&&(rm(t),t.g.cancel(),t.g=null)}function II(t){vc(t),t.u&&(q.clearTimeout(t.u),t.u=null),_c(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&q.clearTimeout(t.m),t.m=null)}function tm(t,e){t.l.push(new iD(t.Za++,e)),t.G==3&&wc(t)}function wc(t){lI(t.i)||t.m||(t.m=!0,Lp(t.Ha,t),t.C=0)}function mD(t,e){return cI(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.l=e.D.concat(t.l),!0):t.G==1||t.G==2||t.C>=(t.Xa?0:t.Ya)?!1:(t.m=Ta(qe(t.Ha,t,e),NI(t,t.C)),t.C++,!0)}A.Ha=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const i=new ka(this,this.h,t,void 0);let s=this.s;if(this.P&&(s?(s=C0(s),R0(s,this.P)):s=this.P),this.o===null&&(i.H=s),this.ja)e:{for(var e=0,n=0;n<this.l.length;n++){t:{var r=this.l[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.l.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=TI(this,i,e),n=An(this.F),se(n,"RID",t),se(n,"CVER",22),this.D&&se(n,"X-HTTP-Session-Id",this.D),La(this,n),this.o&&s&&Zp(n,this.o,s),Yp(this.i,i),this.Ra&&se(n,"TYPE","init"),this.ja?(se(n,"$req",e),se(n,"SID","null"),i.$=!0,Hp(i,n,null)):Hp(i,n,e),this.G=2}}else this.G==3&&(t?EI(this,t):this.l.length==0||lI(this.i)||EI(this))};function EI(t,e){var n;e?n=e.m:n=t.V++;const r=An(t.F);se(r,"SID",t.J),se(r,"RID",n),se(r,"AID",t.U),La(t,r),t.o&&t.s&&Zp(r,t.o,t.s),n=new ka(t,t.h,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=TI(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),Yp(t.i,n),Hp(n,r,e)}function La(t,e){t.j&&Kp({},function(n,r){se(e,r,n)})}function TI(t,e,n){n=Math.min(t.l.length,n);var r=t.j?qe(t.j.Oa,t.j,t):null;e:{var i=t.l;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let u=0;u<n;u++){let l=i[u].h;const c=i[u].g;if(l-=s,0>l)s=Math.max(0,i[u].h-100),a=!1;else try{aD(c,o,"req"+l+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.l.splice(0,n),e.D=t,r}function SI(t){t.g||t.u||(t.Y=1,Lp(t.Ga,t),t.A=0)}function nm(t){return t.g||t.u||3<=t.A?!1:(t.Y++,t.u=Ta(qe(t.Ga,t),NI(t,t.A)),t.A++,!0)}A.Ga=function(){if(this.u=null,kI(this),this.$&&!(this.L||this.g==null||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=Ta(qe(this.bb,this),t)}};A.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,lt(10),vc(this),kI(this))};function rm(t){t.B!=null&&(q.clearTimeout(t.B),t.B=null)}function kI(t){t.g=new ka(t,t.h,"rpc",t.Y),t.o===null&&(t.g.H=t.s),t.g.O=0;var e=An(t.oa);se(e,"RID","rpc"),se(e,"SID",t.J),se(e,"CI",t.N?"0":"1"),se(e,"AID",t.U),La(t,e),se(e,"TYPE","xmlhttp"),t.o&&t.s&&Zp(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=pc(An(e)),n.s=null,n.U=!0,J0(n,t)}A.ab=function(){this.v!=null&&(this.v=null,vc(this),nm(this),lt(19))};function _c(t){t.v!=null&&(q.clearTimeout(t.v),t.v=null)}function CI(t,e){var n=null;if(t.g==e){_c(t),rm(t),t.g=null;var r=2}else if(Qp(t.i,e))n=e.D,hI(t.i,e),r=1;else return;if(t.I=e.N,t.G!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;r=oc(),ze(r,new K0(r,n,e,i)),wc(t)}else SI(t);else if(i=e.o,i==3||i==0&&0<t.I||!(r==1&&mD(t,e)||r==2&&nm(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:li(t,5);break;case 4:li(t,10);break;case 3:li(t,6);break;default:li(t,2)}}}function NI(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function li(t,e){if(t.h.info("Error code "+e),e==2){var n=null;t.j&&(n=null);var r=qe(t.jb,t);n||(n=new ui("//www.google.com/images/cleardot.gif"),q.location&&q.location.protocol=="http"||hc(n,"https"),pc(n)),uD(n.toString(),r)}else lt(2);t.G=0,t.j&&t.j.va(e),RI(t),II(t)}A.jb=function(t){t?(this.h.info("Successfully pinged google.com"),lt(2)):(this.h.info("Failed to ping google.com"),lt(1))};function RI(t){t.G=0,t.I=-1,t.j&&((dI(t.i).length!=0||t.l.length!=0)&&(t.i.i.length=0,yp(t.l),t.l.length=0),t.j.ua())}function bI(t,e,n){let r=YP(n);if(r.i!="")e&&dc(r,e+"."+r.i),fc(r,r.m);else{const i=q.location;r=XP(i.protocol,e?e+"."+i.hostname:i.hostname,+i.port,n)}return t.aa&&wp(t.aa,function(i,s){se(r,s,i)}),e=t.D,n=t.sa,e&&n&&se(r,e,n),se(r,"VER",t.ma),La(t,r),r}function AI(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new me(new Pa({ib:!0})):new me(t.qa),e.L=t.H,e}function PI(){}A=PI.prototype;A.xa=function(){};A.wa=function(){};A.va=function(){};A.ua=function(){};A.Oa=function(){};function Ic(){if(vs&&!(10<=Number(RP)))throw Error("Environmental error: no available transport.")}Ic.prototype.g=function(t,e){return new Rt(t,e)};function Rt(t,e){be.call(this),this.g=new _I(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!Zl(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Zl(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Es(this)}je(Rt,be);Rt.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),Lp(qe(t.hb,t,e))),lt(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=bI(t,null,t.W),wc(t)};Rt.prototype.close=function(){em(this.g)};Rt.prototype.u=function(t){if(typeof t=="string"){var e={};e.__data__=t,tm(this.g,e)}else this.v?(e={},e.__data__=Op(t),tm(this.g,e)):tm(this.g,t)};Rt.prototype.M=function(){this.g.j=null,delete this.j,em(this.g),delete this.g,Rt.Z.M.call(this)};function DI(t){Bp.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}je(DI,Bp);function xI(){qp.call(this),this.status=1}je(xI,qp);function Es(t){this.g=t}je(Es,PI);Es.prototype.xa=function(){ze(this.g,"a")};Es.prototype.wa=function(t){ze(this.g,new DI(t))};Es.prototype.va=function(t){ze(this.g,new xI(t))};Es.prototype.ua=function(){ze(this.g,"b")};Ic.prototype.createWebChannel=Ic.prototype.g;Rt.prototype.send=Rt.prototype.u;Rt.prototype.open=Rt.prototype.m;Rt.prototype.close=Rt.prototype.close;ac.NO_ERROR=0;ac.TIMEOUT=8;ac.HTTP_ERROR=6;G0.COMPLETE="complete";Y0.EventType=Sa;Sa.OPEN="a";Sa.CLOSE="b";Sa.ERROR="c";Sa.MESSAGE="d";be.prototype.listen=be.prototype.N;me.prototype.listenOnce=me.prototype.O;me.prototype.getLastError=me.prototype.La;me.prototype.getLastErrorCode=me.prototype.Da;me.prototype.getStatus=me.prototype.ba;me.prototype.getResponseJson=me.prototype.Qa;me.prototype.getResponseText=me.prototype.ga;me.prototype.send=me.prototype.ea;var gD=function(){return new Ic},yD=function(){return oc()},im=ac,vD=G0,wD=si,OI={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},_D=Pa,Ec=Y0,ID=me;const LI="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}He.UNAUTHENTICATED=new He(null),He.GOOGLE_CREDENTIALS=new He("google-credentials-uid"),He.FIRST_PARTY=new He("first-party-uid"),He.MOCK_USER=new He("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ts="9.1.3";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gr=new Nl("@firebase/firestore");function sm(){return gr.logLevel}function ED(t){gr.setLogLevel(t)}function N(t,...e){if(gr.logLevel<=G.DEBUG){const n=e.map(om);gr.debug(`Firestore (${Ts}): ${t}`,...n)}}function ge(t,...e){if(gr.logLevel<=G.ERROR){const n=e.map(om);gr.error(`Firestore (${Ts}): ${t}`,...n)}}function Ma(t,...e){if(gr.logLevel<=G.WARN){const n=e.map(om);gr.warn(`Firestore (${Ts}): ${t}`,...n)}}function om(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function M(t="Unexpected state"){const e=`FIRESTORE (${Ts}) INTERNAL ASSERTION FAILED: `+t;throw ge(e),new Error(e)}function F(t,e){t||M()}function TD(t,e){t||M()}function R(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class T extends Error{constructor(e,n){super(n),this.code=e,this.message=n,this.name="FirebaseError",this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MI{constructor(e,n){this.user=n,this.type="OAuth",this.authHeaders={},this.authHeaders.Authorization=`Bearer ${e}`}}class SD{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(He.UNAUTHENTICATED))}shutdown(){}}class kD{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class CD{constructor(e){this.t=e,this.currentUser=He.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new Ae;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Ae,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},a=u=>{N("FirebaseCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(N("FirebaseCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Ae)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(N("FirebaseCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(F(typeof r.accessToken=="string"),new MI(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return F(e===null||typeof e=="string"),new He(e)}}class ND{constructor(e,n,r){this.h=e,this.l=n,this.m=r,this.type="FirstParty",this.user=He.FIRST_PARTY}get authHeaders(){const e={"X-Goog-AuthUser":this.l},n=this.h.auth.getAuthHeaderValueForFirstParty([]);return n&&(e.Authorization=n),this.m&&(e["X-Goog-Iam-Authorization-Token"]=this.m),e}}class RD{constructor(e,n,r){this.h=e,this.l=n,this.m=r}getToken(){return Promise.resolve(new ND(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(He.FIRST_PARTY))}shutdown(){}invalidateToken(){}}/**
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
 */class bt{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.g(r),this.p=r=>n.writeSequenceNumber(r))}g(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.p&&this.p(e),e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bD(t){const e=typeof self!="undefined"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */bt.T=-1;class UI{static I(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=bD(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function H(t,e){return t<e?-1:t>e?1:0}function Ss(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}function $I(t){return t+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new T(_.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new T(_.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new T(_.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new T(_.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Pe.fromMillis(Date.now())}static fromDate(e){return Pe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Pe(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?H(this.nanoseconds,e.nanoseconds):H(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(e){this.timestamp=e}static fromTimestamp(e){return new j(e)}static min(){return new j(new Pe(0,0))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FI(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ci(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function VI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ua{constructor(e,n,r){n===void 0?n=0:n>e.length&&M(),r===void 0?r=e.length-n:r>e.length-n&&M(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Ua.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Ua?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Y extends Ua{construct(e,n,r){return new Y(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new T(_.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Y(n)}static emptyPath(){return new Y([])}}const AD=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class We extends Ua{construct(e,n,r){return new We(e,n,r)}static isValidIdentifier(e){return AD.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),We.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new We(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new T(_.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new T(_.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new T(_.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new T(_.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new We(n)}static emptyPath(){return new We([])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks{constructor(e){this.fields=e,e.sort(We.comparator)}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ss(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PD(){return typeof atob!="undefined"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new De(n)}static fromUint8Array(e){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new De(n)}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return H(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}De.EMPTY_BYTE_STRING=new De("");const DD=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function yr(t){if(F(!!t),typeof t=="string"){let e=0;const n=DD.exec(t);if(F(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ye(t.seconds),nanos:ye(t.nanos)}}function ye(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Cs(t){return typeof t=="string"?De.fromBase64String(t):De.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function am(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function BI(t){const e=t.mapValue.fields.__previous_value__;return am(e)?BI(e):e}function $a(t){const e=yr(t.mapValue.fields.__local_write_time__.timestampValue);return new Pe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hi(t){return t==null}function Tc(t){return t===0&&1/t==-1/0}function qI(t){return typeof t=="number"&&Number.isInteger(t)&&!Tc(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(e){this.path=e}static fromPath(e){return new L(Y.fromString(e))}static fromName(e){return new L(Y.fromString(e).popFirst(5))}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}isEqual(e){return e!==null&&Y.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Y.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new L(new Y(e.slice()))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function di(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?am(t)?4:10:M()}function dn(t,e){const n=di(t);if(n!==di(e))return!1;switch(n){case 0:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return $a(t).isEqual($a(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=yr(r.timestampValue),o=yr(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return Cs(r.bytesValue).isEqual(Cs(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return ye(r.geoPointValue.latitude)===ye(i.geoPointValue.latitude)&&ye(r.geoPointValue.longitude)===ye(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return ye(r.integerValue)===ye(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=ye(r.doubleValue),o=ye(i.doubleValue);return s===o?Tc(s)===Tc(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return Ss(t.arrayValue.values||[],e.arrayValue.values||[],dn);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(FI(s)!==FI(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!dn(s[a],o[a])))return!1;return!0}(t,e);default:return M()}}function Fa(t,e){return(t.values||[]).find(n=>dn(n,e))!==void 0}function Ns(t,e){const n=di(t),r=di(e);if(n!==r)return H(n,r);switch(n){case 0:return 0;case 1:return H(t.booleanValue,e.booleanValue);case 2:return function(i,s){const o=ye(i.integerValue||i.doubleValue),a=ye(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return jI(t.timestampValue,e.timestampValue);case 4:return jI($a(t),$a(e));case 5:return H(t.stringValue,e.stringValue);case 6:return function(i,s){const o=Cs(i),a=Cs(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let u=0;u<o.length&&u<a.length;u++){const l=H(o[u],a[u]);if(l!==0)return l}return H(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,s){const o=H(ye(i.latitude),ye(s.latitude));return o!==0?o:H(ye(i.longitude),ye(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let u=0;u<o.length&&u<a.length;++u){const l=Ns(o[u],a[u]);if(l)return l}return H(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,s){const o=i.fields||{},a=Object.keys(o),u=s.fields||{},l=Object.keys(u);a.sort(),l.sort();for(let c=0;c<a.length&&c<l.length;++c){const h=H(a[c],l[c]);if(h!==0)return h;const d=Ns(o[a[c]],u[l[c]]);if(d!==0)return d}return H(a.length,l.length)}(t.mapValue,e.mapValue);default:throw M()}}function jI(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return H(t,e);const n=yr(t),r=yr(e),i=H(n.seconds,r.seconds);return i!==0?i:H(n.nanos,r.nanos)}function um(t){return lm(t)}function lm(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const i=yr(r);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Cs(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,L.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=lm(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${lm(r.fields[a])}`;return s+"}"}(t.mapValue):M();var e,n}function Sc(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function cm(t){return!!t&&"integerValue"in t}function hm(t){return!!t&&"arrayValue"in t}function zI(t){return!!t&&"nullValue"in t}function HI(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function kc(t){return!!t&&"mapValue"in t}function Va(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ci(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Va(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Va(t.arrayValue.values[n]);return e}return Object.assign({},t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(e){this.value=e}static empty(){return new tt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!kc(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Va(n)}setAll(e){let n=We.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Va(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());kc(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return dn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];kc(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){ci(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new tt(Va(this.value))}}function WI(t){const e=[];return ci(t.fields,(n,r)=>{const i=new We([n]);if(kc(r)){const s=WI(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new ks(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe{constructor(e,n,r,i,s){this.key=e,this.documentType=n,this.version=r,this.data=i,this.documentState=s}static newInvalidDocument(e){return new oe(e,0,j.min(),tt.empty(),0)}static newFoundDocument(e,n,r){return new oe(e,1,n,r,0)}static newNoDocument(e,n){return new oe(e,2,n,tt.empty(),0)}static newUnknownDocument(e,n){return new oe(e,3,n,tt.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=tt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=tt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof oe&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}clone(){return new oe(this.key,this.documentType,this.version,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class xD{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.A=null}}function KI(t,e=null,n=[],r=[],i=null,s=null,o=null){return new xD(t,e,n,r,i,s,o)}function Ba(t){const e=R(t);if(e.A===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>LD(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),hi(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=Rc(e.startAt)),e.endAt&&(n+="|ub:",n+=Rc(e.endAt)),e.A=n}return e.A}function OD(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(r=n).field.canonicalString()} ${r.op} ${um(r.value)}`;var r}).join(", ")}]`),hi(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: "+Rc(t.startAt)),t.endAt&&(e+=", endAt: "+Rc(t.endAt)),`Target(${e})`}function Cc(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let i=0;i<t.orderBy.length;i++)if(!jD(t.orderBy[i],e.orderBy[i]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let i=0;i<t.filters.length;i++)if(n=t.filters[i],r=e.filters[i],n.op!==r.op||!n.field.isEqual(r.field)||!dn(n.value,r.value))return!1;var n,r;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!YI(t.startAt,e.startAt)&&YI(t.endAt,e.endAt)}function Nc(t){return L.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class ct extends class{}{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.R(e,n,r):new MD(e,n,r):n==="array-contains"?new FD(e,r):n==="in"?new VD(e,r):n==="not-in"?new BD(e,r):n==="array-contains-any"?new qD(e,r):new ct(e,n,r)}static R(e,n,r){return n==="in"?new UD(e,r):new $D(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.P(Ns(n,this.value)):n!==null&&di(this.value)===di(n)&&this.P(Ns(n,this.value))}P(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return M()}}v(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}function LD(t){return t.field.canonicalString()+t.op.toString()+um(t.value)}class MD extends ct{constructor(e,n,r){super(e,n,r),this.key=L.fromName(r.referenceValue)}matches(e){const n=L.comparator(e.key,this.key);return this.P(n)}}class UD extends ct{constructor(e,n){super(e,"in",n),this.keys=GI("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class $D extends ct{constructor(e,n){super(e,"not-in",n),this.keys=GI("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function GI(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>L.fromName(r.referenceValue))}class FD extends ct{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return hm(n)&&Fa(n.arrayValue,this.value)}}class VD extends ct{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Fa(this.value.arrayValue,n)}}class BD extends ct{constructor(e,n){super(e,"not-in",n)}matches(e){if(Fa(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Fa(this.value.arrayValue,n)}}class qD extends ct{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!hm(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Fa(this.value.arrayValue,r))}}class qa{constructor(e,n){this.position=e,this.before=n}}function Rc(t){return`${t.before?"b":"a"}:${t.position.map(e=>um(e)).join(",")}`}class Rs{constructor(e,n="asc"){this.field=e,this.dir=n}}function jD(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function QI(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=L.comparator(L.fromName(o.referenceValue),n.key):r=Ns(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return t.before?r<=0:r<0}function YI(t,e){if(t===null)return e===null;if(e===null||t.before!==e.before||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!dn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=u,this.V=null,this.S=null,this.startAt,this.endAt}}function XI(t,e,n,r,i,s,o,a){return new Dn(t,e,n,r,i,s,o,a)}function bs(t){return new Dn(t)}function bc(t){return!hi(t.limit)&&t.limitType==="F"}function Ac(t){return!hi(t.limit)&&t.limitType==="L"}function dm(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function fm(t){for(const e of t.filters)if(e.v())return e.field;return null}function pm(t){return t.collectionGroup!==null}function As(t){const e=R(t);if(e.V===null){e.V=[];const n=fm(e),r=dm(e);if(n!==null&&r===null)n.isKeyField()||e.V.push(new Rs(n)),e.V.push(new Rs(We.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.V.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.V.push(new Rs(We.keyField(),s))}}}return e.V}function Bt(t){const e=R(t);if(!e.S)if(e.limitType==="F")e.S=KI(e.path,e.collectionGroup,As(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of As(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new Rs(s.field,o))}const r=e.endAt?new qa(e.endAt.position,!e.endAt.before):null,i=e.startAt?new qa(e.startAt.position,!e.startAt.before):null;e.S=KI(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e.S}function JI(t,e,n){return new Dn(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ja(t,e){return Cc(Bt(t),Bt(e))&&t.limitType===e.limitType}function ZI(t){return`${Ba(Bt(t))}|lt:${t.limitType}`}function mm(t){return`Query(target=${OD(Bt(t))}; limitType=${t.limitType})`}function za(t,e){return e.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):L.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,r){for(const i of n.explicitOrderBy)if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!QI(n.startAt,As(n),r)||n.endAt&&QI(n.endAt,As(n),r))}(t,e)}function eE(t){return(e,n)=>{let r=!1;for(const i of As(t)){const s=zD(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function zD(t,e,n){const r=t.field.isKeyField()?L.comparator(e.key,n.key):function(i,s,o){const a=s.data.field(i),u=o.data.field(i);return a!==null&&u!==null?Ns(a,u):M()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return M()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tE(t,e){if(t.D){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Tc(e)?"-0":e}}function nE(t){return{integerValue:""+t}}function rE(t,e){return qI(e)?nE(e):tE(t,e)}/**
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
 */class Pc{constructor(){this._=void 0}}function HD(t,e,n){return t instanceof Ps?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&(s.fields.__previous_value__=i),{mapValue:s}}(n,e):t instanceof fi?sE(t,e):t instanceof pi?oE(t,e):function(r,i){const s=iE(r,i),o=aE(s)+aE(r.C);return cm(s)&&cm(r.C)?nE(o):tE(r.N,o)}(t,e)}function WD(t,e,n){return t instanceof fi?sE(t,e):t instanceof pi?oE(t,e):n}function iE(t,e){return t instanceof Ds?cm(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class Ps extends Pc{}class fi extends Pc{constructor(e){super(),this.elements=e}}function sE(t,e){const n=uE(e);for(const r of t.elements)n.some(i=>dn(i,r))||n.push(r);return{arrayValue:{values:n}}}class pi extends Pc{constructor(e){super(),this.elements=e}}function oE(t,e){let n=uE(e);for(const r of t.elements)n=n.filter(i=>!dn(i,r));return{arrayValue:{values:n}}}class Ds extends Pc{constructor(e,n){super(),this.N=e,this.C=n}}function aE(t){return ye(t.integerValue||t.doubleValue)}function uE(t){return hm(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ha{constructor(e,n){this.field=e,this.transform=n}}function KD(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof fi&&r instanceof fi||n instanceof pi&&r instanceof pi?Ss(n.elements,r.elements,dn):n instanceof Ds&&r instanceof Ds?dn(n.C,r.C):n instanceof Ps&&r instanceof Ps}(t.transform,e.transform)}class GD{constructor(e,n){this.version=e,this.transformResults=n}}class ve{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new ve}static exists(e){return new ve(void 0,e)}static updateTime(e){return new ve(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Dc(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class xc{}function QD(t,e,n){t instanceof Wa?function(r,i,s){const o=r.value.clone(),a=dE(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,n):t instanceof vr?function(r,i,s){if(!Dc(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=dE(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(hE(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function gm(t,e,n){t instanceof Wa?function(r,i,s){if(!Dc(r.precondition,i))return;const o=r.value.clone(),a=fE(r.fieldTransforms,s,i);o.setAll(a),i.convertToFoundDocument(cE(i),o).setHasLocalMutations()}(t,e,n):t instanceof vr?function(r,i,s){if(!Dc(r.precondition,i))return;const o=fE(r.fieldTransforms,s,i),a=i.data;a.setAll(hE(r)),a.setAll(o),i.convertToFoundDocument(cE(i),a).setHasLocalMutations()}(t,e,n):function(r,i){Dc(r.precondition,i)&&i.convertToNoDocument(j.min())}(t,e)}function YD(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=iE(r.transform,i||null);s!=null&&(n==null&&(n=tt.empty()),n.set(r.field,s))}return n||null}function lE(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&Ss(n,r,(i,s)=>KD(i,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}function cE(t){return t.isFoundDocument()?t.version:j.min()}class Wa extends xc{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}}class vr extends xc{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}}function hE(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function dE(t,e,n){const r=new Map;F(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,WD(o,a,n[i]))}return r}function fE(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,HD(s,o,e))}return r}class Ka extends xc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}}class ym extends xc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XD{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var we,W;function pE(t){switch(t){default:return M();case _.CANCELLED:case _.UNKNOWN:case _.DEADLINE_EXCEEDED:case _.RESOURCE_EXHAUSTED:case _.INTERNAL:case _.UNAVAILABLE:case _.UNAUTHENTICATED:return!1;case _.INVALID_ARGUMENT:case _.NOT_FOUND:case _.ALREADY_EXISTS:case _.PERMISSION_DENIED:case _.FAILED_PRECONDITION:case _.ABORTED:case _.OUT_OF_RANGE:case _.UNIMPLEMENTED:case _.DATA_LOSS:return!0}}function mE(t){if(t===void 0)return ge("GRPC error has no .code"),_.UNKNOWN;switch(t){case we.OK:return _.OK;case we.CANCELLED:return _.CANCELLED;case we.UNKNOWN:return _.UNKNOWN;case we.DEADLINE_EXCEEDED:return _.DEADLINE_EXCEEDED;case we.RESOURCE_EXHAUSTED:return _.RESOURCE_EXHAUSTED;case we.INTERNAL:return _.INTERNAL;case we.UNAVAILABLE:return _.UNAVAILABLE;case we.UNAUTHENTICATED:return _.UNAUTHENTICATED;case we.INVALID_ARGUMENT:return _.INVALID_ARGUMENT;case we.NOT_FOUND:return _.NOT_FOUND;case we.ALREADY_EXISTS:return _.ALREADY_EXISTS;case we.PERMISSION_DENIED:return _.PERMISSION_DENIED;case we.FAILED_PRECONDITION:return _.FAILED_PRECONDITION;case we.ABORTED:return _.ABORTED;case we.OUT_OF_RANGE:return _.OUT_OF_RANGE;case we.UNIMPLEMENTED:return _.UNIMPLEMENTED;case we.DATA_LOSS:return _.DATA_LOSS;default:return M()}}(W=we||(we={}))[W.OK=0]="OK",W[W.CANCELLED=1]="CANCELLED",W[W.UNKNOWN=2]="UNKNOWN",W[W.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",W[W.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",W[W.NOT_FOUND=5]="NOT_FOUND",W[W.ALREADY_EXISTS=6]="ALREADY_EXISTS",W[W.PERMISSION_DENIED=7]="PERMISSION_DENIED",W[W.UNAUTHENTICATED=16]="UNAUTHENTICATED",W[W.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",W[W.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",W[W.ABORTED=10]="ABORTED",W[W.OUT_OF_RANGE=11]="OUT_OF_RANGE",W[W.UNIMPLEMENTED=12]="UNIMPLEMENTED",W[W.INTERNAL=13]="INTERNAL",W[W.UNAVAILABLE=14]="UNAVAILABLE",W[W.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{constructor(e,n){this.comparator=e,this.root=n||Ke.EMPTY}insert(e,n){return new Se(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ke.BLACK,null,null))}remove(e){return new Se(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ke.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Oc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Oc(this.root,e,this.comparator,!1)}getReverseIterator(){return new Oc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Oc(this.root,e,this.comparator,!0)}}class Oc{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ke{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r!=null?r:Ke.RED,this.left=i!=null?i:Ke.EMPTY,this.right=s!=null?s:Ke.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Ke(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,i!=null?i:this.left,s!=null?s:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Ke.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Ke.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ke.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ke.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw M();const e=this.left.check();if(e!==this.right.check())throw M();return e+(this.isRed()?0:1)}}Ke.EMPTY=null,Ke.RED=!0,Ke.BLACK=!1;Ke.EMPTY=new class{constructor(){this.size=0}get key(){throw M()}get value(){throw M()}get color(){throw M()}get left(){throw M()}get right(){throw M()}copy(t,e,n,r,i){return this}insert(t,e,n){return new Ke(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class le{constructor(e){this.comparator=e,this.data=new Se(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new gE(this.data.getIterator())}getIteratorFrom(e){return new gE(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof le)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new le(this.comparator);return n.data=e,n}}class gE{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JD=new Se(L.comparator);function qt(){return JD}const ZD=new Se(L.comparator);function vm(){return ZD}const ex=new Se(L.comparator);function yE(){return ex}const tx=new le(L.comparator);function X(...t){let e=tx;for(const n of t)e=e.add(n);return e}const nx=new le(H);function Lc(){return nx}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ga{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n){const r=new Map;return r.set(e,Qa.createSynthesizedTargetChangeForCurrentChange(e,n)),new Ga(j.min(),r,Lc(),qt(),X())}}class Qa{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n){return new Qa(De.EMPTY_BYTE_STRING,n,X(),X(),X())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mc{constructor(e,n,r,i){this.k=e,this.removedTargetIds=n,this.key=r,this.$=i}}class vE{constructor(e,n){this.targetId=e,this.O=n}}class wE{constructor(e,n,r=De.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class _E{constructor(){this.F=0,this.M=EE(),this.L=De.EMPTY_BYTE_STRING,this.B=!1,this.U=!0}get current(){return this.B}get resumeToken(){return this.L}get q(){return this.F!==0}get K(){return this.U}j(e){e.approximateByteSize()>0&&(this.U=!0,this.L=e)}W(){let e=X(),n=X(),r=X();return this.M.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:M()}}),new Qa(this.L,this.B,e,n,r)}G(){this.U=!1,this.M=EE()}H(e,n){this.U=!0,this.M=this.M.insert(e,n)}J(e){this.U=!0,this.M=this.M.remove(e)}Y(){this.F+=1}X(){this.F-=1}Z(){this.U=!0,this.B=!0}}class rx{constructor(e){this.tt=e,this.et=new Map,this.nt=qt(),this.st=IE(),this.it=new le(H)}rt(e){for(const n of e.k)e.$&&e.$.isFoundDocument()?this.ot(n,e.$):this.at(n,e.key,e.$);for(const n of e.removedTargetIds)this.at(n,e.key,e.$)}ct(e){this.forEachTarget(e,n=>{const r=this.ut(n);switch(e.state){case 0:this.ht(n)&&r.j(e.resumeToken);break;case 1:r.X(),r.q||r.G(),r.j(e.resumeToken);break;case 2:r.X(),r.q||this.removeTarget(n);break;case 3:this.ht(n)&&(r.Z(),r.j(e.resumeToken));break;case 4:this.ht(n)&&(this.lt(n),r.j(e.resumeToken));break;default:M()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.et.forEach((r,i)=>{this.ht(i)&&n(i)})}ft(e){const n=e.targetId,r=e.O.count,i=this.dt(n);if(i){const s=i.target;if(Nc(s))if(r===0){const o=new L(s.path);this.at(n,o,oe.newNoDocument(o,j.min()))}else F(r===1);else this.wt(n)!==r&&(this.lt(n),this.it=this.it.add(n))}}_t(e){const n=new Map;this.et.forEach((s,o)=>{const a=this.dt(o);if(a){if(s.current&&Nc(a.target)){const u=new L(a.target.path);this.nt.get(u)!==null||this.gt(o,u)||this.at(o,u,oe.newNoDocument(u,e))}s.K&&(n.set(o,s.W()),s.G())}});let r=X();this.st.forEach((s,o)=>{let a=!0;o.forEachWhile(u=>{const l=this.dt(u);return!l||l.purpose===2||(a=!1,!1)}),a&&(r=r.add(s))});const i=new Ga(e,n,this.it,this.nt,r);return this.nt=qt(),this.st=IE(),this.it=new le(H),i}ot(e,n){if(!this.ht(e))return;const r=this.gt(e,n.key)?2:0;this.ut(e).H(n.key,r),this.nt=this.nt.insert(n.key,n),this.st=this.st.insert(n.key,this.yt(n.key).add(e))}at(e,n,r){if(!this.ht(e))return;const i=this.ut(e);this.gt(e,n)?i.H(n,1):i.J(n),this.st=this.st.insert(n,this.yt(n).delete(e)),r&&(this.nt=this.nt.insert(n,r))}removeTarget(e){this.et.delete(e)}wt(e){const n=this.ut(e).W();return this.tt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Y(e){this.ut(e).Y()}ut(e){let n=this.et.get(e);return n||(n=new _E,this.et.set(e,n)),n}yt(e){let n=this.st.get(e);return n||(n=new le(H),this.st=this.st.insert(e,n)),n}ht(e){const n=this.dt(e)!==null;return n||N("WatchChangeAggregator","Detected inactive target",e),n}dt(e){const n=this.et.get(e);return n&&n.q?null:this.tt.Tt(e)}lt(e){this.et.set(e,new _E),this.tt.getRemoteKeysForTarget(e).forEach(n=>{this.at(e,n,null)})}gt(e,n){return this.tt.getRemoteKeysForTarget(e).has(n)}}function IE(){return new Se(L.comparator)}function EE(){return new Se(L.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ix=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),sx=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class ox{constructor(e,n){this.databaseId=e,this.D=n}}function Ya(t,e){return t.D?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function TE(t,e){return t.D?e.toBase64():e.toUint8Array()}function ax(t,e){return Ya(t,e.toTimestamp())}function xe(t){return F(!!t),j.fromTimestamp(function(e){const n=yr(e);return new Pe(n.seconds,n.nanos)}(t))}function wm(t,e){return function(n){return new Y(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function SE(t){const e=Y.fromString(t);return F(ME(e)),e}function Xa(t,e){return wm(t.databaseId,e.path)}function fn(t,e){const n=SE(e);if(n.get(1)!==t.databaseId.projectId)throw new T(_.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new T(_.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new L(CE(n))}function _m(t,e){return wm(t.databaseId,e)}function kE(t){const e=SE(t);return e.length===4?Y.emptyPath():CE(e)}function Ja(t){return new Y(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function CE(t){return F(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function NE(t,e,n){return{name:Xa(t,e),fields:n.value.mapValue.fields}}function RE(t,e,n){const r=fn(t,e.name),i=xe(e.updateTime),s=new tt({mapValue:{fields:e.fields}}),o=oe.newFoundDocument(r,i,s);return n&&o.setHasCommittedMutations(),n?o.setHasCommittedMutations():o}function ux(t,e){return"found"in e?function(n,r){F(!!r.found),r.found.name,r.found.updateTime;const i=fn(n,r.found.name),s=xe(r.found.updateTime),o=new tt({mapValue:{fields:r.found.fields}});return oe.newFoundDocument(i,s,o)}(t,e):"missing"in e?function(n,r){F(!!r.missing),F(!!r.readTime);const i=fn(n,r.missing),s=xe(r.readTime);return oe.newNoDocument(i,s)}(t,e):M()}function lx(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:M()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(u,l){return u.D?(F(l===void 0||typeof l=="string"),De.fromBase64String(l||"")):(F(l===void 0||l instanceof Uint8Array),De.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const l=u.code===void 0?_.UNKNOWN:mE(u.code);return new T(l,u.message||"")}(o);n=new wE(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=fn(t,r.document.name),s=xe(r.document.updateTime),o=new tt({mapValue:{fields:r.document.fields}}),a=oe.newFoundDocument(i,s,o),u=r.targetIds||[],l=r.removedTargetIds||[];n=new Mc(u,l,a.key,a)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=fn(t,r.document),s=r.readTime?xe(r.readTime):j.min(),o=oe.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Mc([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=fn(t,r.document),s=r.removedTargetIds||[];n=new Mc([],s,i,null)}else{if(!("filter"in e))return M();{e.filter;const r=e.filter;r.targetId;const i=r.count||0,s=new XD(i),o=r.targetId;n=new vE(o,s)}}return n}function Uc(t,e){let n;if(e instanceof Wa)n={update:NE(t,e.key,e.value)};else if(e instanceof Ka)n={delete:Xa(t,e.key)};else if(e instanceof vr)n={update:NE(t,e.key,e.data),updateMask:gx(e.fieldMask)};else{if(!(e instanceof ym))return M();n={verify:Xa(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,s){const o=s.transform;if(o instanceof Ps)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof fi)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof pi)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Ds)return{fieldPath:s.field.canonicalString(),increment:o.C};throw M()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:ax(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:M()}(t,e.precondition)),n}function bE(t,e){const n=e.currentDocument?function(i){return i.updateTime!==void 0?ve.updateTime(xe(i.updateTime)):i.exists!==void 0?ve.exists(i.exists):ve.none()}(e.currentDocument):ve.none(),r=e.updateTransforms?e.updateTransforms.map(i=>function(s,o){let a=null;if("setToServerValue"in o)F(o.setToServerValue==="REQUEST_TIME"),a=new Ps;else if("appendMissingElements"in o){const l=o.appendMissingElements.values||[];a=new fi(l)}else if("removeAllFromArray"in o){const l=o.removeAllFromArray.values||[];a=new pi(l)}else"increment"in o?a=new Ds(s,o.increment):M();const u=We.fromServerFormat(o.fieldPath);return new Ha(u,a)}(t,i)):[];if(e.update){e.update.name;const i=fn(t,e.update.name),s=new tt({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(a){const u=a.fieldPaths||[];return new ks(u.map(l=>We.fromServerFormat(l)))}(e.updateMask);return new vr(i,s,o,n,r)}return new Wa(i,s,n,r)}if(e.delete){const i=fn(t,e.delete);return new Ka(i,n)}if(e.verify){const i=fn(t,e.verify);return new ym(i,n)}return M()}function cx(t,e){return t&&t.length>0?(F(e!==void 0),t.map(n=>function(r,i){let s=r.updateTime?xe(r.updateTime):xe(i);return s.isEqual(j.min())&&(s=xe(i)),new GD(s,r.transformResults||[])}(n,e))):[]}function AE(t,e){return{documents:[_m(t,e.path)]}}function PE(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=_m(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=_m(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(a){if(a.length===0)return;const u=a.map(l=>function(c){if(c.op==="=="){if(HI(c.value))return{unaryFilter:{field:xs(c.field),op:"IS_NAN"}};if(zI(c.value))return{unaryFilter:{field:xs(c.field),op:"IS_NULL"}}}else if(c.op==="!="){if(HI(c.value))return{unaryFilter:{field:xs(c.field),op:"IS_NOT_NAN"}};if(zI(c.value))return{unaryFilter:{field:xs(c.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:xs(c.field),op:fx(c.op),value:c.value}}}(l));return u.length===1?u[0]:{compositeFilter:{op:"AND",filters:u}}}(e.filters);i&&(n.structuredQuery.where=i);const s=function(a){if(a.length!==0)return a.map(u=>function(l){return{field:xs(l.field),direction:dx(l.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(a,u){return a.D||hi(u)?u:{value:u}}(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=OE(e.startAt)),e.endAt&&(n.structuredQuery.endAt=OE(e.endAt)),n}function DE(t){let e=kE(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){F(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=xE(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(c=>function(h){return new Rs(Os(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(c)));let a=null;n.limit&&(a=function(c){let h;return h=typeof c=="object"?c.value:c,hi(h)?null:h}(n.limit));let u=null;n.startAt&&(u=LE(n.startAt));let l=null;return n.endAt&&(l=LE(n.endAt)),XI(e,i,o,s,a,"F",u,l)}function hx(t,e){const n=function(r,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return M()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function xE(t){return t?t.unaryFilter!==void 0?[mx(t)]:t.fieldFilter!==void 0?[px(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>xE(e)).reduce((e,n)=>e.concat(n)):M():[]}function OE(t){return{before:t.before,values:t.position}}function LE(t){const e=!!t.before,n=t.values||[];return new qa(n,e)}function dx(t){return ix[t]}function fx(t){return sx[t]}function xs(t){return{fieldPath:t.canonicalString()}}function Os(t){return We.fromServerFormat(t.fieldPath)}function px(t){return ct.create(Os(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return M()}}(t.fieldFilter.op),t.fieldFilter.value)}function mx(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Os(t.unaryFilter.field);return ct.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Os(t.unaryFilter.field);return ct.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Os(t.unaryFilter.field);return ct.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Os(t.unaryFilter.field);return ct.create(i,"!=",{nullValue:"NULL_VALUE"});default:return M()}}function gx(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function ME(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xt(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=UE(e)),e=yx(t.get(n),e);return UE(e)}function yx(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case"":n+="";break;default:n+=s}}return n}function UE(t){return t+""}function xn(t){const e=t.length;if(F(e>=2),e===2)return F(t.charAt(0)===""&&t.charAt(1)===""),Y.emptyPath();const n=e-2,r=[];let i="";for(let s=0;s<e;){const o=t.indexOf("",s);switch((o<0||o>n)&&M(),t.charAt(o+1)){case"":const a=t.substring(s,o);let u;i.length===0?u=a:(i+=a,u=i,i=""),r.push(u);break;case"":i+=t.substring(s,o),i+="\0";break;case"":i+=t.substring(s,o+1);break;default:M()}s=o+2}return new Y(r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vx{constructor(e,n){this.seconds=e,this.nanoseconds=n}}class At{constructor(e,n,r){this.ownerId=e,this.allowTabSynchronization=n,this.leaseTimestampMs=r}}At.store="owner",At.key="owner";class wr{constructor(e,n,r){this.userId=e,this.lastAcknowledgedBatchId=n,this.lastStreamToken=r}}wr.store="mutationQueues",wr.keyPath="userId";class ne{constructor(e,n,r,i,s){this.userId=e,this.batchId=n,this.localWriteTimeMs=r,this.baseMutations=i,this.mutations=s}}ne.store="mutations",ne.keyPath="batchId",ne.userMutationsIndex="userMutationsIndex",ne.userMutationsKeyPath=["userId","batchId"];class nt{constructor(){}static prefixForUser(e){return[e]}static prefixForPath(e,n){return[e,Xt(n)]}static key(e,n,r){return[e,Xt(n),r]}}nt.store="documentMutations",nt.PLACEHOLDER=new nt;class wx{constructor(e,n){this.path=e,this.readTime=n}}class _x{constructor(e,n){this.path=e,this.version=n}}class ce{constructor(e,n,r,i,s,o){this.unknownDocument=e,this.noDocument=n,this.document=r,this.hasCommittedMutations=i,this.readTime=s,this.parentPath=o}}ce.store="remoteDocuments",ce.readTimeIndex="readTimeIndex",ce.readTimeIndexPath="readTime",ce.collectionReadTimeIndex="collectionReadTimeIndex",ce.collectionReadTimeIndexPath=["parentPath","readTime"];class pn{constructor(e){this.byteSize=e}}pn.store="remoteDocumentGlobal",pn.key="remoteDocumentGlobalKey";class _t{constructor(e,n,r,i,s,o,a){this.targetId=e,this.canonicalId=n,this.readTime=r,this.resumeToken=i,this.lastListenSequenceNumber=s,this.lastLimboFreeSnapshotVersion=o,this.query=a}}_t.store="targets",_t.keyPath="targetId",_t.queryTargetsIndexName="queryTargetsIndex",_t.queryTargetsKeyPath=["canonicalId","targetId"];class Ge{constructor(e,n,r){this.targetId=e,this.path=n,this.sequenceNumber=r}}Ge.store="targetDocuments",Ge.keyPath=["targetId","path"],Ge.documentTargetsIndex="documentTargetsIndex",Ge.documentTargetsKeyPath=["path","targetId"];class Pt{constructor(e,n,r,i){this.highestTargetId=e,this.highestListenSequenceNumber=n,this.lastRemoteSnapshotVersion=r,this.targetCount=i}}Pt.key="targetGlobalKey",Pt.store="targetGlobal";class mi{constructor(e,n){this.collectionId=e,this.parent=n}}mi.store="collectionParents",mi.keyPath=["collectionId","parent"];class On{constructor(e,n,r,i){this.clientId=e,this.updateTimeMs=n,this.networkEnabled=r,this.inForeground=i}}On.store="clientMetadata",On.keyPath="clientId";class Ls{constructor(e,n,r){this.bundleId=e,this.createTime=n,this.version=r}}Ls.store="bundles",Ls.keyPath="bundleId";class Ms{constructor(e,n,r){this.name=e,this.readTime=n,this.bundledQuery=r}}Ms.store="namedQueries",Ms.keyPath="name";const Ix=[wr.store,ne.store,nt.store,ce.store,_t.store,At.store,Pt.store,Ge.store,On.store,pn.store,mi.store,Ls.store,Ms.store],$E="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class FE{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&M(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new E((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof E?n:E.resolve(n)}catch(n){return E.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):E.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):E.reject(n)}static resolve(e){return new E((n,r)=>{n(e)})}static reject(e){return new E((n,r)=>{r(e)})}static waitFor(e){return new E((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=E.resolve(!1);for(const r of e)n=n.next(i=>i?E.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $c{constructor(e,n){this.action=e,this.transaction=n,this.aborted=!1,this.Et=new Ae,this.transaction.oncomplete=()=>{this.Et.resolve()},this.transaction.onabort=()=>{n.error?this.Et.reject(new Za(e,n.error)):this.Et.resolve()},this.transaction.onerror=r=>{const i=Im(r.target.error);this.Et.reject(new Za(e,i))}}static open(e,n,r,i){try{return new $c(n,e.transaction(i,r))}catch(s){throw new Za(n,s)}}get It(){return this.Et.promise}abort(e){e&&this.Et.reject(e),this.aborted||(N("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}store(e){const n=this.transaction.objectStore(e);return new Tx(n)}}class Jt{constructor(e,n,r){this.name=e,this.version=n,this.At=r,Jt.Rt(te())===12.2&&ge("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return N("SimpleDb","Removing database:",e),yi(window.indexedDB.deleteDatabase(e)).toPromise()}static bt(){if(!kl())return!1;if(Jt.Pt())return!0;const e=te(),n=Jt.Rt(e),r=0<n&&n<10,i=Jt.vt(e),s=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||s)}static Pt(){var e;return typeof process!="undefined"&&((e=process.env)===null||e===void 0?void 0:e.Vt)==="YES"}static St(e,n){return e.store(n)}static Rt(e){const n=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=n?n[1].split("_").slice(0,2).join("."):"-1";return Number(r)}static vt(e){const n=e.match(/Android ([\d.]+)/i),r=n?n[1].split(".").slice(0,2).join("."):"-1";return Number(r)}async Dt(e){return this.db||(N("SimpleDb","Opening database:",this.name),this.db=await new Promise((n,r)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const o=s.target.result;n(o)},i.onblocked=()=>{r(new Za(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const o=s.target.error;o.name==="VersionError"?r(new T(_.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new T(_.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new Za(e,o))},i.onupgradeneeded=s=>{N("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const o=s.target.result;this.At.Ct(o,i.transaction,s.oldVersion,this.version).next(()=>{N("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.Nt&&(this.db.onversionchange=n=>this.Nt(n)),this.db}xt(e){this.Nt=e,this.db&&(this.db.onversionchange=n=>e(n))}async runTransaction(e,n,r,i){const s=n==="readonly";let o=0;for(;;){++o;try{this.db=await this.Dt(e);const a=$c.open(this.db,e,s?"readonly":"readwrite",r),u=i(a).catch(l=>(a.abort(l),E.reject(l))).toPromise();return u.catch(()=>{}),await a.It,u}catch(a){const u=a.name!=="FirebaseError"&&o<3;if(N("SimpleDb","Transaction failed with error:",a.message,"Retrying:",u),this.close(),!u)return Promise.reject(a)}}}close(){this.db&&this.db.close(),this.db=void 0}}class Ex{constructor(e){this.kt=e,this.$t=!1,this.Ot=null}get isDone(){return this.$t}get Ft(){return this.Ot}set cursor(e){this.kt=e}done(){this.$t=!0}Mt(e){this.Ot=e}delete(){return yi(this.kt.delete())}}class Za extends T{constructor(e,n){super(_.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${n}`),this.name="IndexedDbTransactionError"}}function gi(t){return t.name==="IndexedDbTransactionError"}class Tx{constructor(e){this.store=e}put(e,n){let r;return n!==void 0?(N("SimpleDb","PUT",this.store.name,e,n),r=this.store.put(n,e)):(N("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),yi(r)}add(e){return N("SimpleDb","ADD",this.store.name,e,e),yi(this.store.add(e))}get(e){return yi(this.store.get(e)).next(n=>(n===void 0&&(n=null),N("SimpleDb","GET",this.store.name,e,n),n))}delete(e){return N("SimpleDb","DELETE",this.store.name,e),yi(this.store.delete(e))}count(){return N("SimpleDb","COUNT",this.store.name),yi(this.store.count())}Lt(e,n){const r=this.cursor(this.options(e,n)),i=[];return this.Bt(r,(s,o)=>{i.push(o)}).next(()=>i)}Ut(e,n){N("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,n);r.qt=!1;const i=this.cursor(r);return this.Bt(i,(s,o,a)=>a.delete())}Kt(e,n){let r;n?r=e:(r={},n=e);const i=this.cursor(r);return this.Bt(i,n)}jt(e){const n=this.cursor({});return new E((r,i)=>{n.onerror=s=>{const o=Im(s.target.error);i(o)},n.onsuccess=s=>{const o=s.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}Bt(e,n){const r=[];return new E((i,s)=>{e.onerror=o=>{s(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void i();const u=new Ex(a),l=n(a.primaryKey,a.value,u);if(l instanceof E){const c=l.catch(h=>(u.done(),E.reject(h)));r.push(c)}u.isDone?i():u.Ft===null?a.continue():a.continue(u.Ft)}}).next(()=>E.waitFor(r))}options(e,n){let r;return e!==void 0&&(typeof e=="string"?r=e:n=e),{index:r,range:n}}cursor(e){let n="next";if(e.reverse&&(n="prev"),e.index){const r=this.store.index(e.index);return e.qt?r.openKeyCursor(e.range,n):r.openCursor(e.range,n)}return this.store.openCursor(e.range,n)}}function yi(t){return new E((e,n)=>{t.onsuccess=r=>{const i=r.target.result;e(i)},t.onerror=r=>{const i=Im(r.target.error);n(i)}})}let VE=!1;function Im(t){const e=Jt.Rt(te());if(e>=12.2&&e<13){const n="An internal error was encountered in the Indexed Database server";if(t.message.indexOf(n)>=0){const r=new T("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${n}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return VE||(VE=!0,setTimeout(()=>{throw r},0)),r}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BE extends FE{constructor(e,n){super(),this.Qt=e,this.currentSequenceNumber=n}}function It(t,e){const n=R(t);return Jt.St(n.Qt,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Em{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&QD(s,e,r[i])}}applyToLocalView(e){for(const n of this.baseMutations)n.key.isEqual(e.key)&&gm(n,e,this.localWriteTime);for(const n of this.mutations)n.key.isEqual(e.key)&&gm(n,e,this.localWriteTime)}applyToLocalDocumentSet(e){this.mutations.forEach(n=>{const r=e.get(n.key),i=r;this.applyToLocalView(i),r.isValidDocument()||i.convertToNoDocument(j.min())})}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),X())}isEqual(e){return this.batchId===e.batchId&&Ss(this.mutations,e.mutations,(n,r)=>lE(n,r))&&Ss(this.baseMutations,e.baseMutations,(n,r)=>lE(n,r))}}class Tm{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){F(e.mutations.length===r.length);let i=yE();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Tm(e,n,r,i)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r{constructor(e,n,r,i,s=j.min(),o=j.min(),a=De.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new _r(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new _r(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new _r(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qE{constructor(e){this.Wt=e}}function Sm(t,e){if(e.document)return RE(t.Wt,e.document,!!e.hasCommittedMutations);if(e.noDocument){const n=L.fromSegments(e.noDocument.path),r=$s(e.noDocument.readTime),i=oe.newNoDocument(n,r);return e.hasCommittedMutations?i.setHasCommittedMutations():i}if(e.unknownDocument){const n=L.fromSegments(e.unknownDocument.path),r=$s(e.unknownDocument.version);return oe.newUnknownDocument(n,r)}return M()}function jE(t,e,n){const r=km(n),i=e.key.path.popLast().toArray();if(e.isFoundDocument()){const s=function(a,u){return{name:Xa(a,u.key),fields:u.data.value.mapValue.fields,updateTime:Ya(a,u.version.toTimestamp())}}(t.Wt,e),o=e.hasCommittedMutations;return new ce(null,null,s,o,r,i)}if(e.isNoDocument()){const s=e.key.path.toArray(),o=Us(e.version),a=e.hasCommittedMutations;return new ce(null,new wx(s,o),null,a,r,i)}if(e.isUnknownDocument()){const s=e.key.path.toArray(),o=Us(e.version);return new ce(new _x(s,o),null,null,!0,r,i)}return M()}function km(t){const e=t.toTimestamp();return[e.seconds,e.nanoseconds]}function zE(t){const e=new Pe(t[0],t[1]);return j.fromTimestamp(e)}function Us(t){const e=t.toTimestamp();return new vx(e.seconds,e.nanoseconds)}function $s(t){const e=new Pe(t.seconds,t.nanoseconds);return j.fromTimestamp(e)}function Fs(t,e){const n=(e.baseMutations||[]).map(s=>bE(t.Wt,s));for(let s=0;s<e.mutations.length-1;++s){const o=e.mutations[s];if(s+1<e.mutations.length&&e.mutations[s+1].transform!==void 0){const a=e.mutations[s+1];o.updateTransforms=a.transform.fieldTransforms,e.mutations.splice(s+1,1),++s}}const r=e.mutations.map(s=>bE(t.Wt,s)),i=Pe.fromMillis(e.localWriteTimeMs);return new Em(e.batchId,i,n,r)}function eu(t){const e=$s(t.readTime),n=t.lastLimboFreeSnapshotVersion!==void 0?$s(t.lastLimboFreeSnapshotVersion):j.min();let r;var i;return t.query.documents!==void 0?(F((i=t.query).documents.length===1),r=Bt(bs(kE(i.documents[0])))):r=function(s){return Bt(DE(s))}(t.query),new _r(r,t.targetId,0,t.lastListenSequenceNumber,e,n,De.fromBase64String(t.resumeToken))}function HE(t,e){const n=Us(e.snapshotVersion),r=Us(e.lastLimboFreeSnapshotVersion);let i;i=Nc(e.target)?AE(t.Wt,e.target):PE(t.Wt,e.target);const s=e.resumeToken.toBase64();return new _t(e.targetId,Ba(e.target),n,s,e.sequenceNumber,r,i)}function Cm(t){const e=DE({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?JI(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sx{getBundleMetadata(e,n){return WE(e).get(n).next(r=>{if(r)return{id:(i=r).bundleId,createTime:$s(i.createTime),version:i.version};var i})}saveBundleMetadata(e,n){return WE(e).put({bundleId:(r=n).id,createTime:Us(xe(r.createTime)),version:r.version});var r}getNamedQuery(e,n){return KE(e).get(n).next(r=>{if(r)return{name:(i=r).name,query:Cm(i.bundledQuery),readTime:$s(i.readTime)};var i})}saveNamedQuery(e,n){return KE(e).put(function(r){return{name:r.name,readTime:Us(xe(r.readTime)),bundledQuery:r.bundledQuery}}(n))}}function WE(t){return It(t,Ls.store)}function KE(t){return It(t,Ms.store)}/**
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
 */class kx{constructor(){this.Gt=new Nm}addToCollectionParentIndex(e,n){return this.Gt.add(n),E.resolve()}getCollectionParents(e,n){return E.resolve(this.Gt.getEntries(n))}}class Nm{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new le(Y.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new le(Y.comparator)).toArray()}}/**
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
 */class Cx{constructor(){this.zt=new Nm}addToCollectionParentIndex(e,n){if(!this.zt.has(n)){const r=n.lastSegment(),i=n.popLast();e.addOnCommittedListener(()=>{this.zt.add(n)});const s={collectionId:r,parent:Xt(i)};return GE(e).put(s)}return E.resolve()}getCollectionParents(e,n){const r=[],i=IDBKeyRange.bound([n,""],[$I(n),""],!1,!0);return GE(e).Lt(i).next(s=>{for(const o of s){if(o.collectionId!==n)break;r.push(xn(o.parent))}return r})}}function GE(t){return It(t,mi.store)}/**
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
 */const QE={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Et{constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new Et(e,Et.DEFAULT_COLLECTION_PERCENTILE,Et.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YE(t,e,n){const r=t.store(ne.store),i=t.store(nt.store),s=[],o=IDBKeyRange.only(n.batchId);let a=0;const u=r.Kt({range:o},(c,h,d)=>(a++,d.delete()));s.push(u.next(()=>{F(a===1)}));const l=[];for(const c of n.mutations){const h=nt.key(e,c.key.path,n.batchId);s.push(i.delete(h)),l.push(c.key)}return E.waitFor(s).next(()=>l)}function Fc(t){if(!t)return 0;let e;if(t.document)e=t.document;else if(t.unknownDocument)e=t.unknownDocument;else{if(!t.noDocument)throw M();e=t.noDocument}return JSON.stringify(e).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Et.DEFAULT_COLLECTION_PERCENTILE=10,Et.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Et.DEFAULT=new Et(41943040,Et.DEFAULT_COLLECTION_PERCENTILE,Et.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Et.DISABLED=new Et(-1,0,0);class Rm{constructor(e,n,r,i){this.userId=e,this.N=n,this.Ht=r,this.referenceDelegate=i,this.Jt={}}static Yt(e,n,r,i){F(e.uid!=="");const s=e.isAuthenticated()?e.uid:"";return new Rm(s,n,r,i)}checkEmpty(e){let n=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Ir(e).Kt({index:ne.userMutationsIndex,range:r},(i,s,o)=>{n=!1,o.done()}).next(()=>n)}addMutationBatch(e,n,r,i){const s=Vs(e),o=Ir(e);return o.add({}).next(a=>{F(typeof a=="number");const u=new Em(a,n,r,i),l=function(d,m,y){const I=y.baseMutations.map(f=>Uc(d.Wt,f)),p=y.mutations.map(f=>Uc(d.Wt,f));return new ne(m,y.batchId,y.localWriteTime.toMillis(),I,p)}(this.N,this.userId,u),c=[];let h=new le((d,m)=>H(d.canonicalString(),m.canonicalString()));for(const d of i){const m=nt.key(this.userId,d.key.path,a);h=h.add(d.key.path.popLast()),c.push(o.put(l)),c.push(s.put(m,nt.PLACEHOLDER))}return h.forEach(d=>{c.push(this.Ht.addToCollectionParentIndex(e,d))}),e.addOnCommittedListener(()=>{this.Jt[a]=u.keys()}),E.waitFor(c).next(()=>u)})}lookupMutationBatch(e,n){return Ir(e).get(n).next(r=>r?(F(r.userId===this.userId),Fs(this.N,r)):null)}Xt(e,n){return this.Jt[n]?E.resolve(this.Jt[n]):this.lookupMutationBatch(e,n).next(r=>{if(r){const i=r.keys();return this.Jt[n]=i,i}return null})}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=IDBKeyRange.lowerBound([this.userId,r]);let s=null;return Ir(e).Kt({index:ne.userMutationsIndex,range:i},(o,a,u)=>{a.userId===this.userId&&(F(a.batchId>=r),s=Fs(this.N,a)),u.done()}).next(()=>s)}getHighestUnacknowledgedBatchId(e){const n=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=-1;return Ir(e).Kt({index:ne.userMutationsIndex,range:n,reverse:!0},(i,s,o)=>{r=s.batchId,o.done()}).next(()=>r)}getAllMutationBatches(e){const n=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return Ir(e).Lt(ne.userMutationsIndex,n).next(r=>r.map(i=>Fs(this.N,i)))}getAllMutationBatchesAffectingDocumentKey(e,n){const r=nt.prefixForPath(this.userId,n.path),i=IDBKeyRange.lowerBound(r),s=[];return Vs(e).Kt({range:i},(o,a,u)=>{const[l,c,h]=o,d=xn(c);if(l===this.userId&&n.path.isEqual(d))return Ir(e).get(h).next(m=>{if(!m)throw M();F(m.userId===this.userId),s.push(Fs(this.N,m))});u.done()}).next(()=>s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new le(H);const i=[];return n.forEach(s=>{const o=nt.prefixForPath(this.userId,s.path),a=IDBKeyRange.lowerBound(o),u=Vs(e).Kt({range:a},(l,c,h)=>{const[d,m,y]=l,I=xn(m);d===this.userId&&s.path.isEqual(I)?r=r.add(y):h.done()});i.push(u)}),E.waitFor(i).next(()=>this.Zt(e,r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1,s=nt.prefixForPath(this.userId,r),o=IDBKeyRange.lowerBound(s);let a=new le(H);return Vs(e).Kt({range:o},(u,l,c)=>{const[h,d,m]=u,y=xn(d);h===this.userId&&r.isPrefixOf(y)?y.length===i&&(a=a.add(m)):c.done()}).next(()=>this.Zt(e,a))}Zt(e,n){const r=[],i=[];return n.forEach(s=>{i.push(Ir(e).get(s).next(o=>{if(o===null)throw M();F(o.userId===this.userId),r.push(Fs(this.N,o))}))}),E.waitFor(i).next(()=>r)}removeMutationBatch(e,n){return YE(e.Qt,this.userId,n).next(r=>(e.addOnCommittedListener(()=>{this.te(n.batchId)}),E.forEach(r,i=>this.referenceDelegate.markPotentiallyOrphaned(e,i))))}te(e){delete this.Jt[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(n=>{if(!n)return E.resolve();const r=IDBKeyRange.lowerBound(nt.prefixForUser(this.userId)),i=[];return Vs(e).Kt({range:r},(s,o,a)=>{if(s[0]===this.userId){const u=xn(s[1]);i.push(u)}else a.done()}).next(()=>{F(i.length===0)})})}containsKey(e,n){return XE(e,this.userId,n)}ee(e){return JE(e).get(this.userId).next(n=>n||new wr(this.userId,-1,""))}}function XE(t,e,n){const r=nt.prefixForPath(e,n.path),i=r[1],s=IDBKeyRange.lowerBound(r);let o=!1;return Vs(t).Kt({range:s,qt:!0},(a,u,l)=>{const[c,h,d]=a;c===e&&h===i&&(o=!0),l.done()}).next(()=>o)}function Ir(t){return It(t,ne.store)}function Vs(t){return It(t,nt.store)}function JE(t){return It(t,wr.store)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi{constructor(e){this.ne=e}next(){return this.ne+=2,this.ne}static se(){return new vi(0)}static ie(){return new vi(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nx{constructor(e,n){this.referenceDelegate=e,this.N=n}allocateTargetId(e){return this.re(e).next(n=>{const r=new vi(n.highestTargetId);return n.highestTargetId=r.next(),this.oe(e,n).next(()=>n.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.re(e).next(n=>j.fromTimestamp(new Pe(n.lastRemoteSnapshotVersion.seconds,n.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.re(e).next(n=>n.highestListenSequenceNumber)}setTargetsMetadata(e,n,r){return this.re(e).next(i=>(i.highestListenSequenceNumber=n,r&&(i.lastRemoteSnapshotVersion=r.toTimestamp()),n>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=n),this.oe(e,i)))}addTargetData(e,n){return this.ae(e,n).next(()=>this.re(e).next(r=>(r.targetCount+=1,this.ce(n,r),this.oe(e,r))))}updateTargetData(e,n){return this.ae(e,n)}removeTargetData(e,n){return this.removeMatchingKeysForTargetId(e,n.targetId).next(()=>Bs(e).delete(n.targetId)).next(()=>this.re(e)).next(r=>(F(r.targetCount>0),r.targetCount-=1,this.oe(e,r)))}removeTargets(e,n,r){let i=0;const s=[];return Bs(e).Kt((o,a)=>{const u=eu(a);u.sequenceNumber<=n&&r.get(u.targetId)===null&&(i++,s.push(this.removeTargetData(e,u)))}).next(()=>E.waitFor(s)).next(()=>i)}forEachTarget(e,n){return Bs(e).Kt((r,i)=>{const s=eu(i);n(s)})}re(e){return ZE(e).get(Pt.key).next(n=>(F(n!==null),n))}oe(e,n){return ZE(e).put(Pt.key,n)}ae(e,n){return Bs(e).put(HE(this.N,n))}ce(e,n){let r=!1;return e.targetId>n.highestTargetId&&(n.highestTargetId=e.targetId,r=!0),e.sequenceNumber>n.highestListenSequenceNumber&&(n.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.re(e).next(n=>n.targetCount)}getTargetData(e,n){const r=Ba(n),i=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let s=null;return Bs(e).Kt({range:i,index:_t.queryTargetsIndexName},(o,a,u)=>{const l=eu(a);Cc(n,l.target)&&(s=l,u.done())}).next(()=>s)}addMatchingKeys(e,n,r){const i=[],s=Er(e);return n.forEach(o=>{const a=Xt(o.path);i.push(s.put(new Ge(r,a))),i.push(this.referenceDelegate.addReference(e,r,o))}),E.waitFor(i)}removeMatchingKeys(e,n,r){const i=Er(e);return E.forEach(n,s=>{const o=Xt(s.path);return E.waitFor([i.delete([r,o]),this.referenceDelegate.removeReference(e,r,s)])})}removeMatchingKeysForTargetId(e,n){const r=Er(e),i=IDBKeyRange.bound([n],[n+1],!1,!0);return r.delete(i)}getMatchingKeysForTargetId(e,n){const r=IDBKeyRange.bound([n],[n+1],!1,!0),i=Er(e);let s=X();return i.Kt({range:r,qt:!0},(o,a,u)=>{const l=xn(o[1]),c=new L(l);s=s.add(c)}).next(()=>s)}containsKey(e,n){const r=Xt(n.path),i=IDBKeyRange.bound([r],[$I(r)],!1,!0);let s=0;return Er(e).Kt({index:Ge.documentTargetsIndex,qt:!0,range:i},([o,a],u,l)=>{o!==0&&(s++,l.done())}).next(()=>s>0)}Tt(e,n){return Bs(e).get(n).next(r=>r?eu(r):null)}}function Bs(t){return It(t,_t.store)}function ZE(t){return It(t,Pt.store)}function Er(t){return It(t,Ge.store)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wi(t){if(t.code!==_.FAILED_PRECONDITION||t.message!==$E)throw t;N("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eT([t,e],[n,r]){const i=H(t,n);return i===0?H(e,r):i}class Rx{constructor(e){this.ue=e,this.buffer=new le(eT),this.he=0}le(){return++this.he}fe(e){const n=[e,this.le()];if(this.buffer.size<this.ue)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();eT(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class bx{constructor(e,n){this.garbageCollector=e,this.asyncQueue=n,this.de=!1,this.we=null}start(e){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this._e(e)}stop(){this.we&&(this.we.cancel(),this.we=null)}get started(){return this.we!==null}_e(e){const n=this.de?3e5:6e4;N("LruGarbageCollector",`Garbage collection scheduled in ${n}ms`),this.we=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",n,async()=>{this.we=null,this.de=!0;try{await e.collectGarbage(this.garbageCollector)}catch(r){gi(r)?N("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",r):await wi(r)}await this._e(e)})}}class Ax{constructor(e,n){this.me=e,this.params=n}calculateTargetCount(e,n){return this.me.ge(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return E.resolve(bt.T);const r=new Rx(n);return this.me.forEachTarget(e,i=>r.fe(i.sequenceNumber)).next(()=>this.me.ye(e,i=>r.fe(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.me.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.me.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(N("LruGarbageCollector","Garbage collection skipped; disabled"),E.resolve(QE)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(N("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),QE):this.pe(e,n))}getCacheSize(e){return this.me.getCacheSize(e)}pe(e,n){let r,i,s,o,a,u,l;const c=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(h=>(h>this.params.maximumSequenceNumbersToCollect?(N("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${h}`),i=this.params.maximumSequenceNumbersToCollect):i=h,o=Date.now(),this.nthSequenceNumber(e,i))).next(h=>(r=h,a=Date.now(),this.removeTargets(e,r,n))).next(h=>(s=h,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(h=>(l=Date.now(),sm()<=G.DEBUG&&N("LruGarbageCollector",`LRU Garbage Collection
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
 */class Px{constructor(e,n){this.db=e,this.garbageCollector=function(r,i){return new Ax(r,i)}(this,n)}ge(e){const n=this.Te(e);return this.db.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}Te(e){let n=0;return this.ye(e,r=>{n++}).next(()=>n)}forEachTarget(e,n){return this.db.getTargetCache().forEachTarget(e,n)}ye(e,n){return this.Ee(e,(r,i)=>n(i))}addReference(e,n,r){return Vc(e,r)}removeReference(e,n,r){return Vc(e,r)}removeTargets(e,n,r){return this.db.getTargetCache().removeTargets(e,n,r)}markPotentiallyOrphaned(e,n){return Vc(e,n)}Ie(e,n){return function(r,i){let s=!1;return JE(r).jt(o=>XE(r,o,i).next(a=>(a&&(s=!0),E.resolve(!a)))).next(()=>s)}(e,n)}removeOrphanedDocuments(e,n){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let s=0;return this.Ee(e,(o,a)=>{if(a<=n){const u=this.Ie(e,o).next(l=>{if(!l)return s++,r.getEntry(e,o).next(()=>(r.removeEntry(o),Er(e).delete([0,Xt(o.path)])))});i.push(u)}}).next(()=>E.waitFor(i)).next(()=>r.apply(e)).next(()=>s)}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,n){return Vc(e,n)}Ee(e,n){const r=Er(e);let i,s=bt.T;return r.Kt({index:Ge.documentTargetsIndex},([o,a],{path:u,sequenceNumber:l})=>{o===0?(s!==bt.T&&n(new L(xn(i)),s),s=l,i=u):s=bt.T}).next(()=>{s!==bt.T&&n(new L(xn(i)),s)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function Vc(t,e){return Er(t).put(function(n,r){return new Ge(0,Xt(n.path),r)}(e,t.currentSequenceNumber))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qs{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={}}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i!==void 0){for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n])}else this.inner[r]=[[e,n]]}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),!0;return!1}forEach(e){ci(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return VI(this.inner)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tT{constructor(){this.changes=new qs(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}getReadTime(e){const n=this.changes.get(e);return n?n.readTime:j.min()}addEntry(e,n){this.assertNotApplied(),this.changes.set(e.key,{document:e,readTime:n})}removeEntry(e,n=null){this.assertNotApplied(),this.changes.set(e,{document:oe.newInvalidDocument(e),readTime:n})}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?E.resolve(r.document):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dx{constructor(e,n){this.N=e,this.Ht=n}addEntry(e,n,r){return Tr(e).put(Bc(n),r)}removeEntry(e,n){const r=Tr(e),i=Bc(n);return r.delete(i)}updateMetadata(e,n){return this.getMetadata(e).next(r=>(r.byteSize+=n,this.Ae(e,r)))}getEntry(e,n){return Tr(e).get(Bc(n)).next(r=>this.Re(n,r))}be(e,n){return Tr(e).get(Bc(n)).next(r=>({document:this.Re(n,r),size:Fc(r)}))}getEntries(e,n){let r=qt();return this.Pe(e,n,(i,s)=>{const o=this.Re(i,s);r=r.insert(i,o)}).next(()=>r)}ve(e,n){let r=qt(),i=new Se(L.comparator);return this.Pe(e,n,(s,o)=>{const a=this.Re(s,o);r=r.insert(s,a),i=i.insert(s,Fc(o))}).next(()=>({documents:r,Ve:i}))}Pe(e,n,r){if(n.isEmpty())return E.resolve();const i=IDBKeyRange.bound(n.first().path.toArray(),n.last().path.toArray()),s=n.getIterator();let o=s.getNext();return Tr(e).Kt({range:i},(a,u,l)=>{const c=L.fromSegments(a);for(;o&&L.comparator(o,c)<0;)r(o,null),o=s.getNext();o&&o.isEqual(c)&&(r(o,u),o=s.hasNext()?s.getNext():null),o?l.Mt(o.path.toArray()):l.done()}).next(()=>{for(;o;)r(o,null),o=s.hasNext()?s.getNext():null})}getDocumentsMatchingQuery(e,n,r){let i=qt();const s=n.path.length+1,o={};if(r.isEqual(j.min())){const a=n.path.toArray();o.range=IDBKeyRange.lowerBound(a)}else{const a=n.path.toArray(),u=km(r);o.range=IDBKeyRange.lowerBound([a,u],!0),o.index=ce.collectionReadTimeIndex}return Tr(e).Kt(o,(a,u,l)=>{if(a.length!==s)return;const c=Sm(this.N,u);n.path.isPrefixOf(c.key.path)?za(n,c)&&(i=i.insert(c.key,c)):l.done()}).next(()=>i)}newChangeBuffer(e){return new xx(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(n=>n.byteSize)}getMetadata(e){return nT(e).get(pn.key).next(n=>(F(!!n),n))}Ae(e,n){return nT(e).put(pn.key,n)}Re(e,n){if(n){const r=Sm(this.N,n);if(!(r.isNoDocument()&&r.version.isEqual(j.min())))return r}return oe.newInvalidDocument(e)}}class xx extends tT{constructor(e,n){super(),this.Se=e,this.trackRemovals=n,this.De=new qs(r=>r.toString(),(r,i)=>r.isEqual(i))}applyChanges(e){const n=[];let r=0,i=new le((s,o)=>H(s.canonicalString(),o.canonicalString()));return this.changes.forEach((s,o)=>{const a=this.De.get(s);if(o.document.isValidDocument()){const u=jE(this.Se.N,o.document,this.getReadTime(s));i=i.add(s.path.popLast()),r+=Fc(u)-a,n.push(this.Se.addEntry(e,s,u))}else if(r-=a,this.trackRemovals){const u=jE(this.Se.N,oe.newNoDocument(s,j.min()),this.getReadTime(s));n.push(this.Se.addEntry(e,s,u))}else n.push(this.Se.removeEntry(e,s))}),i.forEach(s=>{n.push(this.Se.Ht.addToCollectionParentIndex(e,s))}),n.push(this.Se.updateMetadata(e,r)),E.waitFor(n)}getFromCache(e,n){return this.Se.be(e,n).next(r=>(this.De.set(n,r.size),r.document))}getAllFromCache(e,n){return this.Se.ve(e,n).next(({documents:r,Ve:i})=>(i.forEach((s,o)=>{this.De.set(s,o)}),r))}}function nT(t){return It(t,pn.store)}function Tr(t){return It(t,ce.store)}function Bc(t){return t.path.toArray()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ox{constructor(e){this.N=e}Ct(e,n,r,i){F(r<i&&r>=0&&i<=11);const s=new $c("createOrUpgrade",n);r<1&&i>=1&&(function(a){a.createObjectStore(At.store)}(e),function(a){a.createObjectStore(wr.store,{keyPath:wr.keyPath}),a.createObjectStore(ne.store,{keyPath:ne.keyPath,autoIncrement:!0}).createIndex(ne.userMutationsIndex,ne.userMutationsKeyPath,{unique:!0}),a.createObjectStore(nt.store)}(e),rT(e),function(a){a.createObjectStore(ce.store)}(e));let o=E.resolve();return r<3&&i>=3&&(r!==0&&(function(a){a.deleteObjectStore(Ge.store),a.deleteObjectStore(_t.store),a.deleteObjectStore(Pt.store)}(e),rT(e)),o=o.next(()=>function(a){const u=a.store(Pt.store),l=new Pt(0,0,j.min().toTimestamp(),0);return u.put(Pt.key,l)}(s))),r<4&&i>=4&&(r!==0&&(o=o.next(()=>function(a,u){return u.store(ne.store).Lt().next(l=>{a.deleteObjectStore(ne.store),a.createObjectStore(ne.store,{keyPath:ne.keyPath,autoIncrement:!0}).createIndex(ne.userMutationsIndex,ne.userMutationsKeyPath,{unique:!0});const c=u.store(ne.store),h=l.map(d=>c.put(d));return E.waitFor(h)})}(e,s))),o=o.next(()=>{(function(a){a.createObjectStore(On.store,{keyPath:On.keyPath})})(e)})),r<5&&i>=5&&(o=o.next(()=>this.Ce(s))),r<6&&i>=6&&(o=o.next(()=>(function(a){a.createObjectStore(pn.store)}(e),this.Ne(s)))),r<7&&i>=7&&(o=o.next(()=>this.xe(s))),r<8&&i>=8&&(o=o.next(()=>this.ke(e,s))),r<9&&i>=9&&(o=o.next(()=>{(function(a){a.objectStoreNames.contains("remoteDocumentChanges")&&a.deleteObjectStore("remoteDocumentChanges")})(e),function(a){const u=a.objectStore(ce.store);u.createIndex(ce.readTimeIndex,ce.readTimeIndexPath,{unique:!1}),u.createIndex(ce.collectionReadTimeIndex,ce.collectionReadTimeIndexPath,{unique:!1})}(n)})),r<10&&i>=10&&(o=o.next(()=>this.$e(s))),r<11&&i>=11&&(o=o.next(()=>{(function(a){a.createObjectStore(Ls.store,{keyPath:Ls.keyPath})})(e),function(a){a.createObjectStore(Ms.store,{keyPath:Ms.keyPath})}(e)})),o}Ne(e){let n=0;return e.store(ce.store).Kt((r,i)=>{n+=Fc(i)}).next(()=>{const r=new pn(n);return e.store(pn.store).put(pn.key,r)})}Ce(e){const n=e.store(wr.store),r=e.store(ne.store);return n.Lt().next(i=>E.forEach(i,s=>{const o=IDBKeyRange.bound([s.userId,-1],[s.userId,s.lastAcknowledgedBatchId]);return r.Lt(ne.userMutationsIndex,o).next(a=>E.forEach(a,u=>{F(u.userId===s.userId);const l=Fs(this.N,u);return YE(e,s.userId,l).next(()=>{})}))}))}xe(e){const n=e.store(Ge.store),r=e.store(ce.store);return e.store(Pt.store).get(Pt.key).next(i=>{const s=[];return r.Kt((o,a)=>{const u=new Y(o),l=function(c){return[0,Xt(c)]}(u);s.push(n.get(l).next(c=>c?E.resolve():(h=>n.put(new Ge(0,Xt(h),i.highestListenSequenceNumber)))(u)))}).next(()=>E.waitFor(s))})}ke(e,n){e.createObjectStore(mi.store,{keyPath:mi.keyPath});const r=n.store(mi.store),i=new Nm,s=o=>{if(i.add(o)){const a=o.lastSegment(),u=o.popLast();return r.put({collectionId:a,parent:Xt(u)})}};return n.store(ce.store).Kt({qt:!0},(o,a)=>{const u=new Y(o);return s(u.popLast())}).next(()=>n.store(nt.store).Kt({qt:!0},([o,a,u],l)=>{const c=xn(a);return s(c.popLast())}))}$e(e){const n=e.store(_t.store);return n.Kt((r,i)=>{const s=eu(i),o=HE(this.N,s);return n.put(o)})}}function rT(t){t.createObjectStore(Ge.store,{keyPath:Ge.keyPath}).createIndex(Ge.documentTargetsIndex,Ge.documentTargetsKeyPath,{unique:!0}),t.createObjectStore(_t.store,{keyPath:_t.keyPath}).createIndex(_t.queryTargetsIndexName,_t.queryTargetsKeyPath,{unique:!0}),t.createObjectStore(Pt.store)}const bm="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class Am{constructor(e,n,r,i,s,o,a,u,l,c){if(this.allowTabSynchronization=e,this.persistenceKey=n,this.clientId=r,this.Oe=s,this.window=o,this.document=a,this.Fe=l,this.Me=c,this.Le=null,this.Be=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Ue=null,this.inForeground=!1,this.qe=null,this.Ke=null,this.je=Number.NEGATIVE_INFINITY,this.Qe=h=>Promise.resolve(),!Am.bt())throw new T(_.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new Px(this,i),this.We=n+"main",this.N=new qE(u),this.Ge=new Jt(this.We,11,new Ox(this.N)),this.ze=new Nx(this.referenceDelegate,this.N),this.Ht=new Cx,this.He=function(h,d){return new Dx(h,d)}(this.N,this.Ht),this.Je=new Sx,this.window&&this.window.localStorage?this.Ye=this.window.localStorage:(this.Ye=null,c===!1&&ge("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.Xe().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new T(_.FAILED_PRECONDITION,bm);return this.Ze(),this.tn(),this.en(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.ze.getHighestSequenceNumber(e))}).then(e=>{this.Le=new bt(e,this.Fe)}).then(()=>{this.Be=!0}).catch(e=>(this.Ge&&this.Ge.close(),Promise.reject(e)))}nn(e){return this.Qe=async n=>{if(this.started)return e(n)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Ge.xt(async n=>{n.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.Oe.enqueueAndForget(async()=>{this.started&&await this.Xe()}))}Xe(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>qc(e).put(new On(this.clientId,Date.now(),this.networkEnabled,this.inForeground)).next(()=>{if(this.isPrimary)return this.sn(e).next(n=>{n||(this.isPrimary=!1,this.Oe.enqueueRetryable(()=>this.Qe(!1)))})}).next(()=>this.rn(e)).next(n=>this.isPrimary&&!n?this.on(e).next(()=>!1):!!n&&this.an(e).next(()=>!0))).catch(e=>{if(gi(e))return N("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return N("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.Oe.enqueueRetryable(()=>this.Qe(e)),this.isPrimary=e})}sn(e){return tu(e).get(At.key).next(n=>E.resolve(this.cn(n)))}un(e){return qc(e).delete(this.clientId)}async hn(){if(this.isPrimary&&!this.ln(this.je,18e5)){this.je=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",n=>{const r=It(n,On.store);return r.Lt().next(i=>{const s=this.fn(i,18e5),o=i.filter(a=>s.indexOf(a)===-1);return E.forEach(o,a=>r.delete(a.clientId)).next(()=>o)})}).catch(()=>[]);if(this.Ye)for(const n of e)this.Ye.removeItem(this.dn(n.clientId))}}en(){this.Ke=this.Oe.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.Xe().then(()=>this.hn()).then(()=>this.en()))}cn(e){return!!e&&e.ownerId===this.clientId}rn(e){return this.Me?E.resolve(!0):tu(e).get(At.key).next(n=>{if(n!==null&&this.ln(n.leaseTimestampMs,5e3)&&!this.wn(n.ownerId)){if(this.cn(n)&&this.networkEnabled)return!0;if(!this.cn(n)){if(!n.allowTabSynchronization)throw new T(_.FAILED_PRECONDITION,bm);return!1}}return!(!this.networkEnabled||!this.inForeground)||qc(e).Lt().next(r=>this.fn(r,5e3).find(i=>{if(this.clientId!==i.clientId){const s=!this.networkEnabled&&i.networkEnabled,o=!this.inForeground&&i.inForeground,a=this.networkEnabled===i.networkEnabled;if(s||o&&a)return!0}return!1})===void 0)}).next(n=>(this.isPrimary!==n&&N("IndexedDbPersistence",`Client ${n?"is":"is not"} eligible for a primary lease.`),n))}async shutdown(){this.Be=!1,this._n(),this.Ke&&(this.Ke.cancel(),this.Ke=null),this.mn(),this.gn(),await this.Ge.runTransaction("shutdown","readwrite",[At.store,On.store],e=>{const n=new BE(e,bt.T);return this.on(n).next(()=>this.un(n))}),this.Ge.close(),this.yn()}fn(e,n){return e.filter(r=>this.ln(r.updateTimeMs,n)&&!this.wn(r.clientId))}pn(){return this.runTransaction("getActiveClients","readonly",e=>qc(e).Lt().next(n=>this.fn(n,18e5).map(r=>r.clientId)))}get started(){return this.Be}getMutationQueue(e){return Rm.Yt(e,this.N,this.Ht,this.referenceDelegate)}getTargetCache(){return this.ze}getRemoteDocumentCache(){return this.He}getIndexManager(){return this.Ht}getBundleCache(){return this.Je}runTransaction(e,n,r){N("IndexedDbPersistence","Starting transaction:",e);const i=n==="readonly"?"readonly":"readwrite";let s;return this.Ge.runTransaction(e,i,Ix,o=>(s=new BE(o,this.Le?this.Le.next():bt.T),n==="readwrite-primary"?this.sn(s).next(a=>!!a||this.rn(s)).next(a=>{if(!a)throw ge(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.Oe.enqueueRetryable(()=>this.Qe(!1)),new T(_.FAILED_PRECONDITION,$E);return r(s)}).next(a=>this.an(s).next(()=>a)):this.Tn(s).next(()=>r(s)))).then(o=>(s.raiseOnCommittedEvent(),o))}Tn(e){return tu(e).get(At.key).next(n=>{if(n!==null&&this.ln(n.leaseTimestampMs,5e3)&&!this.wn(n.ownerId)&&!this.cn(n)&&!(this.Me||this.allowTabSynchronization&&n.allowTabSynchronization))throw new T(_.FAILED_PRECONDITION,bm)})}an(e){const n=new At(this.clientId,this.allowTabSynchronization,Date.now());return tu(e).put(At.key,n)}static bt(){return Jt.bt()}on(e){const n=tu(e);return n.get(At.key).next(r=>this.cn(r)?(N("IndexedDbPersistence","Releasing primary lease."),n.delete(At.key)):E.resolve())}ln(e,n){const r=Date.now();return!(e<r-n)&&(!(e>r)||(ge(`Detected an update time that is in the future: ${e} > ${r}`),!1))}Ze(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.qe=()=>{this.Oe.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.Xe()))},this.document.addEventListener("visibilitychange",this.qe),this.inForeground=this.document.visibilityState==="visible")}mn(){this.qe&&(this.document.removeEventListener("visibilitychange",this.qe),this.qe=null)}tn(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.Ue=()=>{this._n(),_C()&&navigator.appVersion.match("Version/14")&&this.Oe.enterRestrictedMode(!0),this.Oe.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Ue))}gn(){this.Ue&&(this.window.removeEventListener("pagehide",this.Ue),this.Ue=null)}wn(e){var n;try{const r=((n=this.Ye)===null||n===void 0?void 0:n.getItem(this.dn(e)))!==null;return N("IndexedDbPersistence",`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return ge("IndexedDbPersistence","Failed to get zombied client id.",r),!1}}_n(){if(this.Ye)try{this.Ye.setItem(this.dn(this.clientId),String(Date.now()))}catch(e){ge("Failed to set zombie client id.",e)}}yn(){if(this.Ye)try{this.Ye.removeItem(this.dn(this.clientId))}catch{}}dn(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function tu(t){return It(t,At.store)}function qc(t){return It(t,On.store)}function Pm(t,e){let n=t.projectId;return t.isDefaultDatabase||(n+="."+t.database),"firestore/"+e+"/"+n+"/"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lx{constructor(e,n){this.progress=e,this.En=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iT{constructor(e,n,r){this.He=e,this.In=n,this.Ht=r}An(e,n){return this.In.getAllMutationBatchesAffectingDocumentKey(e,n).next(r=>this.Rn(e,n,r))}Rn(e,n,r){return this.He.getEntry(e,n).next(i=>{for(const s of r)s.applyToLocalView(i);return i})}bn(e,n){e.forEach((r,i)=>{for(const s of n)s.applyToLocalView(i)})}Pn(e,n){return this.He.getEntries(e,n).next(r=>this.vn(e,r).next(()=>r))}vn(e,n){return this.In.getAllMutationBatchesAffectingDocumentKeys(e,n).next(r=>this.bn(n,r))}getDocumentsMatchingQuery(e,n,r){return function(i){return L.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.Vn(e,n.path):pm(n)?this.Sn(e,n,r):this.Dn(e,n,r)}Vn(e,n){return this.An(e,new L(n)).next(r=>{let i=vm();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}Sn(e,n,r){const i=n.collectionGroup;let s=vm();return this.Ht.getCollectionParents(e,i).next(o=>E.forEach(o,a=>{const u=function(l,c){return new Dn(c,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(i));return this.Dn(e,u,r).next(l=>{l.forEach((c,h)=>{s=s.insert(c,h)})})}).next(()=>s))}Dn(e,n,r){let i,s;return this.He.getDocumentsMatchingQuery(e,n,r).next(o=>(i=o,this.In.getAllMutationBatchesAffectingQuery(e,n))).next(o=>(s=o,this.Cn(e,s,i).next(a=>{i=a;for(const u of s)for(const l of u.mutations){const c=l.key;let h=i.get(c);h==null&&(h=oe.newInvalidDocument(c),i=i.insert(c,h)),gm(l,h,u.localWriteTime),h.isFoundDocument()||(i=i.remove(c))}}))).next(()=>(i.forEach((o,a)=>{za(n,a)||(i=i.remove(o))}),i))}Cn(e,n,r){let i=X();for(const o of n)for(const a of o.mutations)a instanceof vr&&r.get(a.key)===null&&(i=i.add(a.key));let s=r;return this.He.getEntries(e,i).next(o=>(o.forEach((a,u)=>{u.isFoundDocument()&&(s=s.insert(a,u))}),s))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dm{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Nn=r,this.xn=i}static kn(e,n){let r=X(),i=X();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Dm(e,n.fromCache,r,i)}}/**
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
 */class sT{$n(e){this.On=e}getDocumentsMatchingQuery(e,n,r,i){return function(s){return s.filters.length===0&&s.limit===null&&s.startAt==null&&s.endAt==null&&(s.explicitOrderBy.length===0||s.explicitOrderBy.length===1&&s.explicitOrderBy[0].field.isKeyField())}(n)||r.isEqual(j.min())?this.Fn(e,n):this.On.Pn(e,i).next(s=>{const o=this.Mn(n,s);return(bc(n)||Ac(n))&&this.Ln(n.limitType,o,i,r)?this.Fn(e,n):(sm()<=G.DEBUG&&N("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),mm(n)),this.On.getDocumentsMatchingQuery(e,n,r).next(a=>(o.forEach(u=>{a=a.insert(u.key,u)}),a)))})}Mn(e,n){let r=new le(eE(e));return n.forEach((i,s)=>{za(e,s)&&(r=r.add(s))}),r}Ln(e,n,r,i){if(r.size!==n.size)return!0;const s=e==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Fn(e,n){return sm()<=G.DEBUG&&N("QueryEngine","Using full collection scan to execute query:",mm(n)),this.On.getDocumentsMatchingQuery(e,n,j.min())}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mx{constructor(e,n,r,i){this.persistence=e,this.Bn=n,this.N=i,this.Un=new Se(H),this.qn=new qs(s=>Ba(s),Cc),this.Kn=j.min(),this.In=e.getMutationQueue(r),this.jn=e.getRemoteDocumentCache(),this.ze=e.getTargetCache(),this.Qn=new iT(this.jn,this.In,this.persistence.getIndexManager()),this.Je=e.getBundleCache(),this.Bn.$n(this.Qn)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Un))}}function oT(t,e,n,r){return new Mx(t,e,n,r)}async function aT(t,e){const n=R(t);let r=n.In,i=n.Qn;const s=await n.persistence.runTransaction("Handle user change","readonly",o=>{let a;return n.In.getAllMutationBatches(o).next(u=>(a=u,r=n.persistence.getMutationQueue(e),i=new iT(n.jn,r,n.persistence.getIndexManager()),r.getAllMutationBatches(o))).next(u=>{const l=[],c=[];let h=X();for(const d of a){l.push(d.batchId);for(const m of d.mutations)h=h.add(m.key)}for(const d of u){c.push(d.batchId);for(const m of d.mutations)h=h.add(m.key)}return i.Pn(o,h).next(d=>({Wn:d,removedBatchIds:l,addedBatchIds:c}))})});return n.In=r,n.Qn=i,n.Bn.$n(n.Qn),s}function Ux(t,e){const n=R(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.jn.newChangeBuffer({trackRemovals:!0});return function(o,a,u,l){const c=u.batch,h=c.keys();let d=E.resolve();return h.forEach(m=>{d=d.next(()=>l.getEntry(a,m)).next(y=>{const I=u.docVersions.get(m);F(I!==null),y.version.compareTo(I)<0&&(c.applyToRemoteDocument(y,u),y.isValidDocument()&&l.addEntry(y,u.commitVersion))})}),d.next(()=>o.In.removeMutationBatch(a,c))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.In.performConsistencyCheck(r)).next(()=>n.Qn.Pn(r,i))})}function uT(t){const e=R(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.ze.getLastRemoteSnapshotVersion(n))}function $x(t,e){const n=R(t),r=e.snapshotVersion;let i=n.Un;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.jn.newChangeBuffer({trackRemovals:!0});i=n.Un;const a=[];e.targetChanges.forEach((l,c)=>{const h=i.get(c);if(!h)return;a.push(n.ze.removeMatchingKeys(s,l.removedDocuments,c).next(()=>n.ze.addMatchingKeys(s,l.addedDocuments,c)));const d=l.resumeToken;if(d.approximateByteSize()>0){const m=h.withResumeToken(d,r).withSequenceNumber(s.currentSequenceNumber);i=i.insert(c,m),function(y,I,p){return F(I.resumeToken.approximateByteSize()>0),y.resumeToken.approximateByteSize()===0||I.snapshotVersion.toMicroseconds()-y.snapshotVersion.toMicroseconds()>=3e8?!0:p.addedDocuments.size+p.modifiedDocuments.size+p.removedDocuments.size>0}(h,m,l)&&a.push(n.ze.updateTargetData(s,m))}});let u=qt();if(e.documentUpdates.forEach((l,c)=>{e.resolvedLimboDocuments.has(l)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,l))}),a.push(lT(s,o,e.documentUpdates,r,void 0).next(l=>{u=l})),!r.isEqual(j.min())){const l=n.ze.getLastRemoteSnapshotVersion(s).next(c=>n.ze.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(l)}return E.waitFor(a).next(()=>o.apply(s)).next(()=>n.Qn.vn(s,u)).next(()=>u)}).then(s=>(n.Un=i,s))}function lT(t,e,n,r,i){let s=X();return n.forEach(o=>s=s.add(o)),e.getEntries(t,s).next(o=>{let a=qt();return n.forEach((u,l)=>{const c=o.get(u),h=(i==null?void 0:i.get(u))||r;l.isNoDocument()&&l.version.isEqual(j.min())?(e.removeEntry(u,h),a=a.insert(u,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(l,h),a=a.insert(u,l)):N("LocalStore","Ignoring outdated watch update for ",u,". Current version:",c.version," Watch version:",l.version)}),a})}function Fx(t,e){const n=R(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.In.getNextMutationBatchAfterBatchId(r,e)))}function js(t,e){const n=R(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.ze.getTargetData(r,e).next(s=>s?(i=s,E.resolve(i)):n.ze.allocateTargetId(r).next(o=>(i=new _r(e,o,0,r.currentSequenceNumber),n.ze.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Un.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Un=n.Un.insert(r.targetId,r),n.qn.set(e,r.targetId)),r})}async function zs(t,e,n){const r=R(t),i=r.Un.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!gi(o))throw o;N("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Un=r.Un.remove(e),r.qn.delete(i.target)}function jc(t,e,n){const r=R(t);let i=j.min(),s=X();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,u,l){const c=R(a),h=c.qn.get(l);return h!==void 0?E.resolve(c.Un.get(h)):c.ze.getTargetData(u,l)}(r,o,Bt(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.ze.getMatchingKeysForTargetId(o,a.targetId).next(u=>{s=u})}).next(()=>r.Bn.getDocumentsMatchingQuery(o,e,n?i:j.min(),n?s:X())).next(a=>({documents:a,Gn:s})))}function cT(t,e){const n=R(t),r=R(n.ze),i=n.Un.get(e);return i?Promise.resolve(i.target):n.persistence.runTransaction("Get target data","readonly",s=>r.Tt(s,e).next(o=>o?o.target:null))}function hT(t){const e=R(t);return e.persistence.runTransaction("Get new document changes","readonly",n=>function(r,i,s){const o=R(r);let a=qt(),u=km(s);const l=Tr(i),c=IDBKeyRange.lowerBound(u,!0);return l.Kt({index:ce.readTimeIndex,range:c},(h,d)=>{const m=Sm(o.N,d);a=a.insert(m.key,m),u=d.readTime}).next(()=>({En:a,readTime:zE(u)}))}(e.jn,n,e.Kn)).then(({En:n,readTime:r})=>(e.Kn=r,n))}async function Vx(t){const e=R(t);return e.persistence.runTransaction("Synchronize last document change read time","readonly",n=>function(r){const i=Tr(r);let s=j.min();return i.Kt({index:ce.readTimeIndex,reverse:!0},(o,a,u)=>{a.readTime&&(s=zE(a.readTime)),u.done()}).next(()=>s)}(n)).then(n=>{e.Kn=n})}async function Bx(t,e,n,r){const i=R(t);let s=X(),o=qt(),a=yE();for(const c of n){const h=e.zn(c.metadata.name);c.document&&(s=s.add(h)),o=o.insert(h,e.Hn(c)),a=a.insert(h,e.Jn(c.metadata.readTime))}const u=i.jn.newChangeBuffer({trackRemovals:!0}),l=await js(i,function(c){return Bt(bs(Y.fromString(`__bundle__/docs/${c}`)))}(r));return i.persistence.runTransaction("Apply bundle documents","readwrite",c=>lT(c,u,o,j.min(),a).next(h=>(u.apply(c),h)).next(h=>i.ze.removeMatchingKeysForTargetId(c,l.targetId).next(()=>i.ze.addMatchingKeys(c,s,l.targetId)).next(()=>i.Qn.vn(c,h)).next(()=>h)))}async function qx(t,e,n=X()){const r=await js(t,Bt(Cm(e.bundledQuery))),i=R(t);return i.persistence.runTransaction("Save named query","readwrite",s=>{const o=xe(e.readTime);if(r.snapshotVersion.compareTo(o)>=0)return i.Je.saveNamedQuery(s,e);const a=r.withResumeToken(De.EMPTY_BYTE_STRING,o);return i.Un=i.Un.insert(a.targetId,a),i.ze.updateTargetData(s,a).next(()=>i.ze.removeMatchingKeysForTargetId(s,r.targetId)).next(()=>i.ze.addMatchingKeys(s,n,r.targetId)).next(()=>i.Je.saveNamedQuery(s,e))})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jx{constructor(e){this.N=e,this.Yn=new Map,this.Xn=new Map}getBundleMetadata(e,n){return E.resolve(this.Yn.get(n))}saveBundleMetadata(e,n){var r;return this.Yn.set(n.id,{id:(r=n).id,version:r.version,createTime:xe(r.createTime)}),E.resolve()}getNamedQuery(e,n){return E.resolve(this.Xn.get(n))}saveNamedQuery(e,n){return this.Xn.set(n.name,function(r){return{name:r.name,query:Cm(r.bundledQuery),readTime:xe(r.readTime)}}(n)),E.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xm{constructor(){this.Zn=new le(Oe.ts),this.es=new le(Oe.ns)}isEmpty(){return this.Zn.isEmpty()}addReference(e,n){const r=new Oe(e,n);this.Zn=this.Zn.add(r),this.es=this.es.add(r)}ss(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.rs(new Oe(e,n))}os(e,n){e.forEach(r=>this.removeReference(r,n))}cs(e){const n=new L(new Y([])),r=new Oe(n,e),i=new Oe(n,e+1),s=[];return this.es.forEachInRange([r,i],o=>{this.rs(o),s.push(o.key)}),s}us(){this.Zn.forEach(e=>this.rs(e))}rs(e){this.Zn=this.Zn.delete(e),this.es=this.es.delete(e)}hs(e){const n=new L(new Y([])),r=new Oe(n,e),i=new Oe(n,e+1);let s=X();return this.es.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Oe(e,0),r=this.Zn.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Oe{constructor(e,n){this.key=e,this.ls=n}static ts(e,n){return L.comparator(e.key,n.key)||H(e.ls,n.ls)}static ns(e,n){return H(e.ls,n.ls)||L.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zx{constructor(e,n){this.Ht=e,this.referenceDelegate=n,this.In=[],this.fs=1,this.ds=new le(Oe.ts)}checkEmpty(e){return E.resolve(this.In.length===0)}addMutationBatch(e,n,r,i){const s=this.fs;this.fs++,this.In.length>0&&this.In[this.In.length-1];const o=new Em(s,n,r,i);this.In.push(o);for(const a of i)this.ds=this.ds.add(new Oe(a.key,s)),this.Ht.addToCollectionParentIndex(e,a.key.path.popLast());return E.resolve(o)}lookupMutationBatch(e,n){return E.resolve(this.ws(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this._s(r),s=i<0?0:i;return E.resolve(this.In.length>s?this.In[s]:null)}getHighestUnacknowledgedBatchId(){return E.resolve(this.In.length===0?-1:this.fs-1)}getAllMutationBatches(e){return E.resolve(this.In.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Oe(n,0),i=new Oe(n,Number.POSITIVE_INFINITY),s=[];return this.ds.forEachInRange([r,i],o=>{const a=this.ws(o.ls);s.push(a)}),E.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new le(H);return n.forEach(i=>{const s=new Oe(i,0),o=new Oe(i,Number.POSITIVE_INFINITY);this.ds.forEachInRange([s,o],a=>{r=r.add(a.ls)})}),E.resolve(this.gs(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;L.isDocumentKey(s)||(s=s.child(""));const o=new Oe(new L(s),0);let a=new le(H);return this.ds.forEachWhile(u=>{const l=u.key.path;return!!r.isPrefixOf(l)&&(l.length===i&&(a=a.add(u.ls)),!0)},o),E.resolve(this.gs(a))}gs(e){const n=[];return e.forEach(r=>{const i=this.ws(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){F(this.ys(n.batchId,"removed")===0),this.In.shift();let r=this.ds;return E.forEach(n.mutations,i=>{const s=new Oe(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.ds=r})}te(e){}containsKey(e,n){const r=new Oe(n,0),i=this.ds.firstAfterOrEqual(r);return E.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.In.length,E.resolve()}ys(e,n){return this._s(e)}_s(e){return this.In.length===0?0:e-this.In[0].batchId}ws(e){const n=this._s(e);return n<0||n>=this.In.length?null:this.In[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hx{constructor(e,n){this.Ht=e,this.ps=n,this.docs=new Se(L.comparator),this.size=0}addEntry(e,n,r){const i=n.key,s=this.docs.get(i),o=s?s.size:0,a=this.ps(n);return this.docs=this.docs.insert(i,{document:n.clone(),size:a,readTime:r}),this.size+=a-o,this.Ht.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return E.resolve(r?r.document.clone():oe.newInvalidDocument(n))}getEntries(e,n){let r=qt();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.clone():oe.newInvalidDocument(i))}),E.resolve(r)}getDocumentsMatchingQuery(e,n,r){let i=qt();const s=new L(n.path.child("")),o=this.docs.getIteratorFrom(s);for(;o.hasNext();){const{key:a,value:{document:u,readTime:l}}=o.getNext();if(!n.path.isPrefixOf(a.path))break;l.compareTo(r)<=0||za(n,u)&&(i=i.insert(u.key,u.clone()))}return E.resolve(i)}Ts(e,n){return E.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new Wx(this)}getSize(e){return E.resolve(this.size)}}class Wx extends tT{constructor(e){super(),this.Se=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.document.isValidDocument()?n.push(this.Se.addEntry(e,i.document,this.getReadTime(r))):this.Se.removeEntry(r)}),E.waitFor(n)}getFromCache(e,n){return this.Se.getEntry(e,n)}getAllFromCache(e,n){return this.Se.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kx{constructor(e){this.persistence=e,this.Es=new qs(n=>Ba(n),Cc),this.lastRemoteSnapshotVersion=j.min(),this.highestTargetId=0,this.Is=0,this.As=new xm,this.targetCount=0,this.Rs=vi.se()}forEachTarget(e,n){return this.Es.forEach((r,i)=>n(i)),E.resolve()}getLastRemoteSnapshotVersion(e){return E.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return E.resolve(this.Is)}allocateTargetId(e){return this.highestTargetId=this.Rs.next(),E.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Is&&(this.Is=n),E.resolve()}ae(e){this.Es.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Rs=new vi(n),this.highestTargetId=n),e.sequenceNumber>this.Is&&(this.Is=e.sequenceNumber)}addTargetData(e,n){return this.ae(n),this.targetCount+=1,E.resolve()}updateTargetData(e,n){return this.ae(n),E.resolve()}removeTargetData(e,n){return this.Es.delete(n.target),this.As.cs(n.targetId),this.targetCount-=1,E.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Es.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Es.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),E.waitFor(s).next(()=>i)}getTargetCount(e){return E.resolve(this.targetCount)}getTargetData(e,n){const r=this.Es.get(n)||null;return E.resolve(r)}addMatchingKeys(e,n,r){return this.As.ss(n,r),E.resolve()}removeMatchingKeys(e,n,r){this.As.os(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),E.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.As.cs(n),E.resolve()}getMatchingKeysForTargetId(e,n){const r=this.As.hs(n);return E.resolve(r)}containsKey(e,n){return E.resolve(this.As.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gx{constructor(e,n){this.bs={},this.Le=new bt(0),this.Be=!1,this.Be=!0,this.referenceDelegate=e(this),this.ze=new Kx(this),this.Ht=new kx,this.He=function(r,i){return new Hx(r,i)}(this.Ht,r=>this.referenceDelegate.Ps(r)),this.N=new qE(n),this.Je=new jx(this.N)}start(){return Promise.resolve()}shutdown(){return this.Be=!1,Promise.resolve()}get started(){return this.Be}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(){return this.Ht}getMutationQueue(e){let n=this.bs[e.toKey()];return n||(n=new zx(this.Ht,this.referenceDelegate),this.bs[e.toKey()]=n),n}getTargetCache(){return this.ze}getRemoteDocumentCache(){return this.He}getBundleCache(){return this.Je}runTransaction(e,n,r){N("MemoryPersistence","Starting transaction:",e);const i=new Qx(this.Le.next());return this.referenceDelegate.vs(),r(i).next(s=>this.referenceDelegate.Vs(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ss(e,n){return E.or(Object.values(this.bs).map(r=>()=>r.containsKey(e,n)))}}class Qx extends FE{constructor(e){super(),this.currentSequenceNumber=e}}class Om{constructor(e){this.persistence=e,this.Ds=new xm,this.Cs=null}static Ns(e){return new Om(e)}get xs(){if(this.Cs)return this.Cs;throw M()}addReference(e,n,r){return this.Ds.addReference(r,n),this.xs.delete(r.toString()),E.resolve()}removeReference(e,n,r){return this.Ds.removeReference(r,n),this.xs.add(r.toString()),E.resolve()}markPotentiallyOrphaned(e,n){return this.xs.add(n.toString()),E.resolve()}removeTarget(e,n){this.Ds.cs(n.targetId).forEach(i=>this.xs.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.xs.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}vs(){this.Cs=new Set}Vs(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return E.forEach(this.xs,r=>{const i=L.fromPath(r);return this.ks(e,i).next(s=>{s||n.removeEntry(i)})}).next(()=>(this.Cs=null,n.apply(e)))}updateLimboDocument(e,n){return this.ks(e,n).next(r=>{r?this.xs.delete(n.toString()):this.xs.add(n.toString())})}Ps(e){return 0}ks(e,n){return E.or([()=>E.resolve(this.Ds.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ss(e,n)])}}/**
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
 */function dT(t,e){return`firestore_clients_${t}_${e}`}function fT(t,e,n){let r=`firestore_mutations_${t}_${n}`;return e.isAuthenticated()&&(r+=`_${e.uid}`),r}function Lm(t,e){return`firestore_targets_${t}_${e}`}class zc{constructor(e,n,r,i){this.user=e,this.batchId=n,this.state=r,this.error=i}static $s(e,n,r){const i=JSON.parse(r);let s,o=typeof i=="object"&&["pending","acknowledged","rejected"].indexOf(i.state)!==-1&&(i.error===void 0||typeof i.error=="object");return o&&i.error&&(o=typeof i.error.message=="string"&&typeof i.error.code=="string",o&&(s=new T(i.error.code,i.error.message))),o?new zc(e,n,i.state,s):(ge("SharedClientState",`Failed to parse mutation state for ID '${n}': ${r}`),null)}Os(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class nu{constructor(e,n,r){this.targetId=e,this.state=n,this.error=r}static $s(e,n){const r=JSON.parse(n);let i,s=typeof r=="object"&&["not-current","current","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return s&&r.error&&(s=typeof r.error.message=="string"&&typeof r.error.code=="string",s&&(i=new T(r.error.code,r.error.message))),s?new nu(e,r.state,i):(ge("SharedClientState",`Failed to parse target state for ID '${e}': ${n}`),null)}Os(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Hc{constructor(e,n){this.clientId=e,this.activeTargetIds=n}static $s(e,n){const r=JSON.parse(n);let i=typeof r=="object"&&r.activeTargetIds instanceof Array,s=Lc();for(let o=0;i&&o<r.activeTargetIds.length;++o)i=qI(r.activeTargetIds[o]),s=s.add(r.activeTargetIds[o]);return i?new Hc(e,s):(ge("SharedClientState",`Failed to parse client data for instance '${e}': ${n}`),null)}}class Mm{constructor(e,n){this.clientId=e,this.onlineState=n}static $s(e){const n=JSON.parse(e);return typeof n=="object"&&["Unknown","Online","Offline"].indexOf(n.onlineState)!==-1&&typeof n.clientId=="string"?new Mm(n.clientId,n.onlineState):(ge("SharedClientState",`Failed to parse online state: ${e}`),null)}}class Um{constructor(){this.activeTargetIds=Lc()}Fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ms(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Os(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class $m{constructor(e,n,r,i,s){this.window=e,this.Oe=n,this.persistenceKey=r,this.Ls=i,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.Bs=this.Us.bind(this),this.qs=new Se(H),this.started=!1,this.Ks=[];const o=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=s,this.js=dT(this.persistenceKey,this.Ls),this.Qs=function(a){return`firestore_sequence_number_${a}`}(this.persistenceKey),this.qs=this.qs.insert(this.Ls,new Um),this.Ws=new RegExp(`^firestore_clients_${o}_([^_]*)$`),this.Gs=new RegExp(`^firestore_mutations_${o}_(\\d+)(?:_(.*))?$`),this.zs=new RegExp(`^firestore_targets_${o}_(\\d+)$`),this.Hs=function(a){return`firestore_online_state_${a}`}(this.persistenceKey),this.Js=function(a){return`firestore_bundle_loaded_${a}`}(this.persistenceKey),this.window.addEventListener("storage",this.Bs)}static bt(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.pn();for(const r of e){if(r===this.Ls)continue;const i=this.getItem(dT(this.persistenceKey,r));if(i){const s=Hc.$s(r,i);s&&(this.qs=this.qs.insert(s.clientId,s))}}this.Ys();const n=this.storage.getItem(this.Hs);if(n){const r=this.Xs(n);r&&this.Zs(r)}for(const r of this.Ks)this.Us(r);this.Ks=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.Qs,JSON.stringify(e))}getAllActiveQueryTargets(){return this.ti(this.qs)}isActiveQueryTarget(e){let n=!1;return this.qs.forEach((r,i)=>{i.activeTargetIds.has(e)&&(n=!0)}),n}addPendingMutation(e){this.ei(e,"pending")}updateMutationState(e,n,r){this.ei(e,n,r),this.ni(e)}addLocalQueryTarget(e){let n="not-current";if(this.isActiveQueryTarget(e)){const r=this.storage.getItem(Lm(this.persistenceKey,e));if(r){const i=nu.$s(e,r);i&&(n=i.state)}}return this.si.Fs(e),this.Ys(),n}removeLocalQueryTarget(e){this.si.Ms(e),this.Ys()}isLocalQueryTarget(e){return this.si.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(Lm(this.persistenceKey,e))}updateQueryState(e,n,r){this.ii(e,n,r)}handleUserChange(e,n,r){n.forEach(i=>{this.ni(i)}),this.currentUser=e,r.forEach(i=>{this.addPendingMutation(i)})}setOnlineState(e){this.ri(e)}notifyBundleLoaded(){this.oi()}shutdown(){this.started&&(this.window.removeEventListener("storage",this.Bs),this.removeItem(this.js),this.started=!1)}getItem(e){const n=this.storage.getItem(e);return N("SharedClientState","READ",e,n),n}setItem(e,n){N("SharedClientState","SET",e,n),this.storage.setItem(e,n)}removeItem(e){N("SharedClientState","REMOVE",e),this.storage.removeItem(e)}Us(e){const n=e;if(n.storageArea===this.storage){if(N("SharedClientState","EVENT",n.key,n.newValue),n.key===this.js)return void ge("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.Oe.enqueueRetryable(async()=>{if(this.started){if(n.key!==null){if(this.Ws.test(n.key)){if(n.newValue==null){const r=this.ai(n.key);return this.ci(r,null)}{const r=this.ui(n.key,n.newValue);if(r)return this.ci(r.clientId,r)}}else if(this.Gs.test(n.key)){if(n.newValue!==null){const r=this.hi(n.key,n.newValue);if(r)return this.li(r)}}else if(this.zs.test(n.key)){if(n.newValue!==null){const r=this.fi(n.key,n.newValue);if(r)return this.di(r)}}else if(n.key===this.Hs){if(n.newValue!==null){const r=this.Xs(n.newValue);if(r)return this.Zs(r)}}else if(n.key===this.Qs){const r=function(i){let s=bt.T;if(i!=null)try{const o=JSON.parse(i);F(typeof o=="number"),s=o}catch(o){ge("SharedClientState","Failed to read sequence number from WebStorage",o)}return s}(n.newValue);r!==bt.T&&this.sequenceNumberHandler(r)}else if(n.key===this.Js)return this.syncEngine.wi()}}else this.Ks.push(n)})}}get si(){return this.qs.get(this.Ls)}Ys(){this.setItem(this.js,this.si.Os())}ei(e,n,r){const i=new zc(this.currentUser,e,n,r),s=fT(this.persistenceKey,this.currentUser,e);this.setItem(s,i.Os())}ni(e){const n=fT(this.persistenceKey,this.currentUser,e);this.removeItem(n)}ri(e){const n={clientId:this.Ls,onlineState:e};this.storage.setItem(this.Hs,JSON.stringify(n))}ii(e,n,r){const i=Lm(this.persistenceKey,e),s=new nu(e,n,r);this.setItem(i,s.Os())}oi(){this.setItem(this.Js,"value-not-used")}ai(e){const n=this.Ws.exec(e);return n?n[1]:null}ui(e,n){const r=this.ai(e);return Hc.$s(r,n)}hi(e,n){const r=this.Gs.exec(e),i=Number(r[1]),s=r[2]!==void 0?r[2]:null;return zc.$s(new He(s),i,n)}fi(e,n){const r=this.zs.exec(e),i=Number(r[1]);return nu.$s(i,n)}Xs(e){return Mm.$s(e)}async li(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine._i(e.batchId,e.state,e.error);N("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}di(e){return this.syncEngine.mi(e.targetId,e.state,e.error)}ci(e,n){const r=n?this.qs.insert(e,n):this.qs.remove(e),i=this.ti(this.qs),s=this.ti(r),o=[],a=[];return s.forEach(u=>{i.has(u)||o.push(u)}),i.forEach(u=>{s.has(u)||a.push(u)}),this.syncEngine.gi(o,a).then(()=>{this.qs=r})}Zs(e){this.qs.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}ti(e){let n=Lc();return e.forEach((r,i)=>{n=n.unionWith(i.activeTargetIds)}),n}}class pT{constructor(){this.yi=new Um,this.pi={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.yi.Fs(e),this.pi[e]||"not-current"}updateQueryState(e,n,r){this.pi[e]=n}removeLocalQueryTarget(e){this.yi.Ms(e)}isLocalQueryTarget(e){return this.yi.activeTargetIds.has(e)}clearQueryState(e){delete this.pi[e]}getAllActiveQueryTargets(){return this.yi.activeTargetIds}isActiveQueryTarget(e){return this.yi.activeTargetIds.has(e)}start(){return this.yi=new Um,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(){}}/**
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
 */class Yx{Ti(e){}shutdown(){}}/**
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
 */class mT{constructor(){this.Ei=()=>this.Ii(),this.Ai=()=>this.Ri(),this.bi=[],this.Pi()}Ti(e){this.bi.push(e)}shutdown(){window.removeEventListener("online",this.Ei),window.removeEventListener("offline",this.Ai)}Pi(){window.addEventListener("online",this.Ei),window.addEventListener("offline",this.Ai)}Ii(){N("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.bi)e(0)}Ri(){N("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.bi)e(1)}static bt(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xx={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jx{constructor(e){this.vi=e.vi,this.Vi=e.Vi}Si(e){this.Di=e}Ci(e){this.Ni=e}onMessage(e){this.xi=e}close(){this.Vi()}send(e){this.vi(e)}ki(){this.Di()}$i(e){this.Ni(e)}Oi(e){this.xi(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zx extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.Fi=n+"://"+e.host,this.Mi="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}Li(e,n,r,i){const s=this.Bi(e,n);N("RestConnection","Sending: ",s,r);const o={};return this.Ui(o,i),this.qi(e,s,o,r).then(a=>(N("RestConnection","Received: ",a),a),a=>{throw Ma("RestConnection",`${e} failed with error: `,a,"url: ",s,"request:",r),a})}Ki(e,n,r,i){return this.Li(e,n,r,i)}Ui(e,n){if(e["X-Goog-Api-Client"]="gl-js/ fire/"+Ts,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n)for(const r in n.authHeaders)n.authHeaders.hasOwnProperty(r)&&(e[r]=n.authHeaders[r])}Bi(e,n){const r=Xx[e];return`${this.Fi}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}qi(e,n,r,i){return new Promise((s,o)=>{const a=new ID;a.listenOnce(vD.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case im.NO_ERROR:const l=a.getResponseJson();N("Connection","XHR received:",JSON.stringify(l)),s(l);break;case im.TIMEOUT:N("Connection",'RPC "'+e+'" timed out'),o(new T(_.DEADLINE_EXCEEDED,"Request time out"));break;case im.HTTP_ERROR:const c=a.getStatus();if(N("Connection",'RPC "'+e+'" failed with status:',c,"response text:",a.getResponseText()),c>0){const h=a.getResponseJson().error;if(h&&h.status&&h.message){const d=function(m){const y=m.toLowerCase().replace(/_/g,"-");return Object.values(_).indexOf(y)>=0?y:_.UNKNOWN}(h.status);o(new T(d,h.message))}else o(new T(_.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new T(_.UNAVAILABLE,"Connection failed."));break;default:M()}}finally{N("Connection",'RPC "'+e+'" completed.')}});const u=JSON.stringify(i);a.send(n,"POST",u,r,15)})}ji(e,n){const r=[this.Fi,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=gD(),s=yD(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new _D({})),this.Ui(o.initMessageHeaders,n),Hw()||Sl()||vC()||bf()||wC()||Rf()||(o.httpHeadersOverwriteParam="$httpHeaders");const a=r.join("");N("Connection","Creating WebChannel: "+a,o);const u=i.createWebChannel(a,o);let l=!1,c=!1;const h=new Jx({vi:m=>{c?N("Connection","Not sending because WebChannel is closed:",m):(l||(N("Connection","Opening WebChannel transport."),u.open(),l=!0),N("Connection","WebChannel sending:",m),u.send(m))},Vi:()=>u.close()}),d=(m,y,I)=>{m.listen(y,p=>{try{I(p)}catch(f){setTimeout(()=>{throw f},0)}})};return d(u,Ec.EventType.OPEN,()=>{c||N("Connection","WebChannel transport opened.")}),d(u,Ec.EventType.CLOSE,()=>{c||(c=!0,N("Connection","WebChannel transport closed"),h.$i())}),d(u,Ec.EventType.ERROR,m=>{c||(c=!0,Ma("Connection","WebChannel transport errored:",m),h.$i(new T(_.UNAVAILABLE,"The operation could not be completed")))}),d(u,Ec.EventType.MESSAGE,m=>{var y;if(!c){const I=m.data[0];F(!!I);const p=I,f=p.error||((y=p[0])===null||y===void 0?void 0:y.error);if(f){N("Connection","WebChannel received error:",f);const g=f.status;let v=function(O){const S=we[O];if(S!==void 0)return mE(S)}(g),w=f.message;v===void 0&&(v=_.INTERNAL,w="Unknown error status: "+g+" with message "+f.message),c=!0,h.$i(new T(v,w)),u.close()}else N("Connection","WebChannel received:",I),h.Oi(I)}}),d(s,wD.STAT_EVENT,m=>{m.stat===OI.PROXY?N("Connection","Detected buffering proxy"):m.stat===OI.NOPROXY&&N("Connection","Detected no buffering proxy")}),setTimeout(()=>{h.ki()},0),h}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function gT(){return typeof window!="undefined"?window:null}function Wc(){return typeof document!="undefined"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ru(t){return new ox(t,!0)}class Fm{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Oe=e,this.timerId=n,this.Qi=r,this.Wi=i,this.Gi=s,this.zi=0,this.Hi=null,this.Ji=Date.now(),this.reset()}reset(){this.zi=0}Yi(){this.zi=this.Gi}Xi(e){this.cancel();const n=Math.floor(this.zi+this.Zi()),r=Math.max(0,Date.now()-this.Ji),i=Math.max(0,n-r);i>0&&N("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.zi} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Hi=this.Oe.enqueueAfterDelay(this.timerId,i,()=>(this.Ji=Date.now(),e())),this.zi*=this.Wi,this.zi<this.Qi&&(this.zi=this.Qi),this.zi>this.Gi&&(this.zi=this.Gi)}tr(){this.Hi!==null&&(this.Hi.skipDelay(),this.Hi=null)}cancel(){this.Hi!==null&&(this.Hi.cancel(),this.Hi=null)}Zi(){return(Math.random()-.5)*this.zi}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yT{constructor(e,n,r,i,s,o){this.Oe=e,this.er=r,this.nr=i,this.credentialsProvider=s,this.listener=o,this.state=0,this.sr=0,this.ir=null,this.stream=null,this.rr=new Fm(e,n)}ar(){return this.state===1||this.state===2||this.state===4}cr(){return this.state===2}start(){this.state!==3?this.auth():this.ur()}async stop(){this.ar()&&await this.close(0)}hr(){this.state=0,this.rr.reset()}lr(){this.cr()&&this.ir===null&&(this.ir=this.Oe.enqueueAfterDelay(this.er,6e4,()=>this.dr()))}wr(e){this._r(),this.stream.send(e)}async dr(){if(this.cr())return this.close(0)}_r(){this.ir&&(this.ir.cancel(),this.ir=null)}async close(e,n){this._r(),this.rr.cancel(),this.sr++,e!==3?this.rr.reset():n&&n.code===_.RESOURCE_EXHAUSTED?(ge(n.toString()),ge("Using maximum backoff delay to prevent overloading the backend."),this.rr.Yi()):n&&n.code===_.UNAUTHENTICATED&&this.credentialsProvider.invalidateToken(),this.stream!==null&&(this.mr(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ci(n)}mr(){}auth(){this.state=1;const e=this.gr(this.sr),n=this.sr;this.credentialsProvider.getToken().then(r=>{this.sr===n&&this.yr(r)},r=>{e(()=>{const i=new T(_.UNKNOWN,"Fetching auth token failed: "+r.message);return this.pr(i)})})}yr(e){const n=this.gr(this.sr);this.stream=this.Tr(e),this.stream.Si(()=>{n(()=>(this.state=2,this.listener.Si()))}),this.stream.Ci(r=>{n(()=>this.pr(r))}),this.stream.onMessage(r=>{n(()=>this.onMessage(r))})}ur(){this.state=4,this.rr.Xi(async()=>{this.state=0,this.start()})}pr(e){return N("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(3,e)}gr(e){return n=>{this.Oe.enqueueAndForget(()=>this.sr===e?n():(N("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class eO extends yT{constructor(e,n,r,i,s){super(e,"listen_stream_connection_backoff","listen_stream_idle",n,r,s),this.N=i}Tr(e){return this.nr.ji("Listen",e)}onMessage(e){this.rr.reset();const n=lx(this.N,e),r=function(i){if(!("targetChange"in i))return j.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?j.min():s.readTime?xe(s.readTime):j.min()}(e);return this.listener.Er(n,r)}Ir(e){const n={};n.database=Ja(this.N),n.addTarget=function(i,s){let o;const a=s.target;return o=Nc(a)?{documents:AE(i,a)}:{query:PE(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0?o.resumeToken=TE(i,s.resumeToken):s.snapshotVersion.compareTo(j.min())>0&&(o.readTime=Ya(i,s.snapshotVersion.toTimestamp())),o}(this.N,e);const r=hx(this.N,e);r&&(n.labels=r),this.wr(n)}Ar(e){const n={};n.database=Ja(this.N),n.removeTarget=e,this.wr(n)}}class tO extends yT{constructor(e,n,r,i,s){super(e,"write_stream_connection_backoff","write_stream_idle",n,r,s),this.N=i,this.Rr=!1}get br(){return this.Rr}start(){this.Rr=!1,this.lastStreamToken=void 0,super.start()}mr(){this.Rr&&this.Pr([])}Tr(e){return this.nr.ji("Write",e)}onMessage(e){if(F(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Rr){this.rr.reset();const n=cx(e.writeResults,e.commitTime),r=xe(e.commitTime);return this.listener.vr(r,n)}return F(!e.writeResults||e.writeResults.length===0),this.Rr=!0,this.listener.Vr()}Sr(){const e={};e.database=Ja(this.N),this.wr(e)}Pr(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>Uc(this.N,r))};this.wr(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nO extends class{}{constructor(e,n,r){super(),this.credentials=e,this.nr=n,this.N=r,this.Dr=!1}Cr(){if(this.Dr)throw new T(_.FAILED_PRECONDITION,"The client has already been terminated.")}Li(e,n,r){return this.Cr(),this.credentials.getToken().then(i=>this.nr.Li(e,n,r,i)).catch(i=>{throw i.name==="FirebaseError"?(i.code===_.UNAUTHENTICATED&&this.credentials.invalidateToken(),i):new T(_.UNKNOWN,i.toString())})}Ki(e,n,r){return this.Cr(),this.credentials.getToken().then(i=>this.nr.Ki(e,n,r,i)).catch(i=>{throw i.name==="FirebaseError"?(i.code===_.UNAUTHENTICATED&&this.credentials.invalidateToken(),i):new T(_.UNKNOWN,i.toString())})}terminate(){this.Dr=!0}}class rO{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.Nr=0,this.kr=null,this.$r=!0}Or(){this.Nr===0&&(this.Fr("Unknown"),this.kr=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.kr=null,this.Mr("Backend didn't respond within 10 seconds."),this.Fr("Offline"),Promise.resolve())))}Lr(e){this.state==="Online"?this.Fr("Unknown"):(this.Nr++,this.Nr>=1&&(this.Br(),this.Mr(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.Fr("Offline")))}set(e){this.Br(),this.Nr=0,e==="Online"&&(this.$r=!1),this.Fr(e)}Fr(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}Mr(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.$r?(ge(n),this.$r=!1):N("OnlineStateTracker",n)}Br(){this.kr!==null&&(this.kr.cancel(),this.kr=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iO{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ur=[],this.qr=new Map,this.Kr=new Set,this.jr=[],this.Qr=s,this.Qr.Ti(o=>{r.enqueueAndForget(async()=>{Sr(this)&&(N("RemoteStore","Restarting streams for network reachability change."),await async function(a){const u=R(a);u.Kr.add(4),await Hs(u),u.Wr.set("Unknown"),u.Kr.delete(4),await iu(u)}(this))})}),this.Wr=new rO(r,i)}}async function iu(t){if(Sr(t))for(const e of t.jr)await e(!0)}async function Hs(t){for(const e of t.jr)await e(!1)}function Kc(t,e){const n=R(t);n.qr.has(e.targetId)||(n.qr.set(e.targetId,e),qm(n)?Bm(n):Ks(n).cr()&&Vm(n,e))}function su(t,e){const n=R(t),r=Ks(n);n.qr.delete(e),r.cr()&&vT(n,e),n.qr.size===0&&(r.cr()?r.lr():Sr(n)&&n.Wr.set("Unknown"))}function Vm(t,e){t.Gr.Y(e.targetId),Ks(t).Ir(e)}function vT(t,e){t.Gr.Y(e),Ks(t).Ar(e)}function Bm(t){t.Gr=new rx({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Tt:e=>t.qr.get(e)||null}),Ks(t).start(),t.Wr.Or()}function qm(t){return Sr(t)&&!Ks(t).ar()&&t.qr.size>0}function Sr(t){return R(t).Kr.size===0}function wT(t){t.Gr=void 0}async function sO(t){t.qr.forEach((e,n)=>{Vm(t,e)})}async function oO(t,e){wT(t),qm(t)?(t.Wr.Lr(e),Bm(t)):t.Wr.set("Unknown")}async function aO(t,e,n){if(t.Wr.set("Online"),e instanceof wE&&e.state===2&&e.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r.qr.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r.qr.delete(o),r.Gr.removeTarget(o))}(t,e)}catch(r){N("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Gc(t,r)}else if(e instanceof Mc?t.Gr.rt(e):e instanceof vE?t.Gr.ft(e):t.Gr.ct(e),!n.isEqual(j.min()))try{const r=await uT(t.localStore);n.compareTo(r)>=0&&await function(i,s){const o=i.Gr._t(s);return o.targetChanges.forEach((a,u)=>{if(a.resumeToken.approximateByteSize()>0){const l=i.qr.get(u);l&&i.qr.set(u,l.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach(a=>{const u=i.qr.get(a);if(!u)return;i.qr.set(a,u.withResumeToken(De.EMPTY_BYTE_STRING,u.snapshotVersion)),vT(i,a);const l=new _r(u.target,a,1,u.sequenceNumber);Vm(i,l)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){N("RemoteStore","Failed to raise snapshot:",r),await Gc(t,r)}}async function Gc(t,e,n){if(!gi(e))throw e;t.Kr.add(1),await Hs(t),t.Wr.set("Offline"),n||(n=()=>uT(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{N("RemoteStore","Retrying IndexedDB access"),await n(),t.Kr.delete(1),await iu(t)})}function _T(t,e){return e().catch(n=>Gc(t,n,e))}async function Ws(t){const e=R(t),n=kr(e);let r=e.Ur.length>0?e.Ur[e.Ur.length-1].batchId:-1;for(;uO(e);)try{const i=await Fx(e.localStore,r);if(i===null){e.Ur.length===0&&n.lr();break}r=i.batchId,lO(e,i)}catch(i){await Gc(e,i)}IT(e)&&ET(e)}function uO(t){return Sr(t)&&t.Ur.length<10}function lO(t,e){t.Ur.push(e);const n=kr(t);n.cr()&&n.br&&n.Pr(e.mutations)}function IT(t){return Sr(t)&&!kr(t).ar()&&t.Ur.length>0}function ET(t){kr(t).start()}async function cO(t){kr(t).Sr()}async function hO(t){const e=kr(t);for(const n of t.Ur)e.Pr(n.mutations)}async function dO(t,e,n){const r=t.Ur.shift(),i=Tm.from(r,e,n);await _T(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Ws(t)}async function fO(t,e){e&&kr(t).br&&await async function(n,r){if(i=r.code,pE(i)&&i!==_.ABORTED){const s=n.Ur.shift();kr(n).hr(),await _T(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,r)),await Ws(n)}var i}(t,e),IT(t)&&ET(t)}async function jm(t,e){const n=R(t);e?(n.Kr.delete(2),await iu(n)):e||(n.Kr.add(2),await Hs(n),n.Wr.set("Unknown"))}function Ks(t){return t.zr||(t.zr=function(e,n,r){const i=R(e);return i.Cr(),new eO(n,i.nr,i.credentials,i.N,r)}(t.datastore,t.asyncQueue,{Si:sO.bind(null,t),Ci:oO.bind(null,t),Er:aO.bind(null,t)}),t.jr.push(async e=>{e?(t.zr.hr(),qm(t)?Bm(t):t.Wr.set("Unknown")):(await t.zr.stop(),wT(t))})),t.zr}function kr(t){return t.Hr||(t.Hr=function(e,n,r){const i=R(e);return i.Cr(),new tO(n,i.nr,i.credentials,i.N,r)}(t.datastore,t.asyncQueue,{Si:cO.bind(null,t),Ci:fO.bind(null,t),Vr:hO.bind(null,t),vr:dO.bind(null,t)}),t.jr.push(async e=>{e?(t.Hr.hr(),await Ws(t)):(await t.Hr.stop(),t.Ur.length>0&&(N("RemoteStore",`Stopping write stream with ${t.Ur.length} pending writes`),t.Ur=[]))})),t.Hr}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zm{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Ae,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new zm(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new T(_.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Gs(t,e){if(ge("AsyncQueue",`${e}: ${t}`),gi(t))return new T(_.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs{constructor(e){this.comparator=e?(n,r)=>e(n,r)||L.comparator(n.key,r.key):(n,r)=>L.comparator(n.key,r.key),this.keyedMap=vm(),this.sortedSet=new Se(this.comparator)}static emptySet(e){return new Qs(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Qs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Qs;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TT{constructor(){this.Jr=new Se(L.comparator)}track(e){const n=e.doc.key,r=this.Jr.get(n);r?e.type!==0&&r.type===3?this.Jr=this.Jr.insert(n,e):e.type===3&&r.type!==1?this.Jr=this.Jr.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Jr=this.Jr.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Jr=this.Jr.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Jr=this.Jr.remove(n):e.type===1&&r.type===2?this.Jr=this.Jr.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Jr=this.Jr.insert(n,{type:2,doc:e.doc}):M():this.Jr=this.Jr.insert(n,e)}Yr(){const e=[];return this.Jr.inorderTraversal((n,r)=>{e.push(r)}),e}}class Ys{constructor(e,n,r,i,s,o,a,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u}static fromInitialDocuments(e,n,r,i){const s=[];return n.forEach(o=>{s.push({type:0,doc:o})}),new Ys(e,n,Qs.emptySet(n),s,r,i,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ja(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pO{constructor(){this.Xr=void 0,this.listeners=[]}}class mO{constructor(){this.queries=new qs(e=>ZI(e),ja),this.onlineState="Unknown",this.Zr=new Set}}async function Hm(t,e){const n=R(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new pO),i)try{s.Xr=await n.onListen(r)}catch(o){const a=Gs(o,`Initialization of query '${mm(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.eo(n.onlineState),s.Xr&&e.no(s.Xr)&&Km(n)}async function Wm(t,e){const n=R(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function gO(t,e){const n=R(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.no(i)&&(r=!0);o.Xr=i}}r&&Km(n)}function yO(t,e,n){const r=R(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function Km(t){t.Zr.forEach(e=>{e.next()})}class Gm{constructor(e,n,r){this.query=e,this.so=n,this.io=!1,this.ro=null,this.onlineState="Unknown",this.options=r||{}}no(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Ys(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let n=!1;return this.io?this.oo(e)&&(this.so.next(e),n=!0):this.ao(e,this.onlineState)&&(this.co(e),n=!0),this.ro=e,n}onError(e){this.so.error(e)}eo(e){this.onlineState=e;let n=!1;return this.ro&&!this.io&&this.ao(this.ro,e)&&(this.co(this.ro),n=!0),n}ao(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.uo||!r)&&(!e.docs.isEmpty()||n==="Offline")}oo(e){if(e.docChanges.length>0)return!0;const n=this.ro&&this.ro.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}co(e){e=Ys.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.io=!0,this.so.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vO{constructor(e,n){this.payload=e,this.byteLength=n}ho(){return"metadata"in this.payload}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ST{constructor(e){this.N=e}zn(e){return fn(this.N,e)}Hn(e){return e.metadata.exists?RE(this.N,e.document,!1):oe.newNoDocument(this.zn(e.metadata.name),this.Jn(e.metadata.readTime))}Jn(e){return xe(e)}}class wO{constructor(e,n,r){this.lo=e,this.localStore=n,this.N=r,this.queries=[],this.documents=[],this.progress=kT(e)}fo(e){this.progress.bytesLoaded+=e.byteLength;let n=this.progress.documentsLoaded;return e.payload.namedQuery?this.queries.push(e.payload.namedQuery):e.payload.documentMetadata?(this.documents.push({metadata:e.payload.documentMetadata}),e.payload.documentMetadata.exists||++n):e.payload.document&&(this.documents[this.documents.length-1].document=e.payload.document,++n),n!==this.progress.documentsLoaded?(this.progress.documentsLoaded=n,Object.assign({},this.progress)):null}wo(e){const n=new Map,r=new ST(this.N);for(const i of e)if(i.metadata.queries){const s=r.zn(i.metadata.name);for(const o of i.metadata.queries){const a=(n.get(o)||X()).add(s);n.set(o,a)}}return n}async complete(){const e=await Bx(this.localStore,new ST(this.N),this.documents,this.lo.id),n=this.wo(this.documents);for(const r of this.queries)await qx(this.localStore,r,n.get(r.name));return this.progress.taskState="Success",new Lx(Object.assign({},this.progress),e)}}function kT(t){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:t.totalDocuments,totalBytes:t.totalBytes}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CT{constructor(e){this.key=e}}class NT{constructor(e){this.key=e}}class RT{constructor(e,n){this.query=e,this._o=n,this.mo=null,this.current=!1,this.yo=X(),this.mutatedKeys=X(),this.po=eE(e),this.To=new Qs(this.po)}get Eo(){return this._o}Io(e,n){const r=n?n.Ao:new TT,i=n?n.To:this.To;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const u=bc(this.query)&&i.size===this.query.limit?i.last():null,l=Ac(this.query)&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,h)=>{const d=i.get(c),m=za(this.query,h)?h:null,y=!!d&&this.mutatedKeys.has(d.key),I=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let p=!1;d&&m?d.data.isEqual(m.data)?y!==I&&(r.track({type:3,doc:m}),p=!0):this.Ro(d,m)||(r.track({type:2,doc:m}),p=!0,(u&&this.po(m,u)>0||l&&this.po(m,l)<0)&&(a=!0)):!d&&m?(r.track({type:0,doc:m}),p=!0):d&&!m&&(r.track({type:1,doc:d}),p=!0,(u||l)&&(a=!0)),p&&(m?(o=o.add(m),s=I?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),bc(this.query)||Ac(this.query))for(;o.size>this.query.limit;){const c=bc(this.query)?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{To:o,Ao:r,Ln:a,mutatedKeys:s}}Ro(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.To;this.To=e.To,this.mutatedKeys=e.mutatedKeys;const s=e.Ao.Yr();s.sort((l,c)=>function(h,d){const m=y=>{switch(y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return M()}};return m(h)-m(d)}(l.type,c.type)||this.po(l.doc,c.doc)),this.bo(r);const o=n?this.Po():[],a=this.yo.size===0&&this.current?1:0,u=a!==this.mo;return this.mo=a,s.length!==0||u?{snapshot:new Ys(this.query,e.To,i,s,e.mutatedKeys,a===0,u,!1),vo:o}:{vo:o}}eo(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({To:this.To,Ao:new TT,mutatedKeys:this.mutatedKeys,Ln:!1},!1)):{vo:[]}}Vo(e){return!this._o.has(e)&&!!this.To.has(e)&&!this.To.get(e).hasLocalMutations}bo(e){e&&(e.addedDocuments.forEach(n=>this._o=this._o.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this._o=this._o.delete(n)),this.current=e.current)}Po(){if(!this.current)return[];const e=this.yo;this.yo=X(),this.To.forEach(r=>{this.Vo(r.key)&&(this.yo=this.yo.add(r.key))});const n=[];return e.forEach(r=>{this.yo.has(r)||n.push(new NT(r))}),this.yo.forEach(r=>{e.has(r)||n.push(new CT(r))}),n}So(e){this._o=e.Gn,this.yo=X();const n=this.Io(e.documents);return this.applyChanges(n,!0)}Do(){return Ys.fromInitialDocuments(this.query,this.To,this.mutatedKeys,this.mo===0)}}class _O{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class IO{constructor(e){this.key=e,this.Co=!1}}class EO{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.No={},this.xo=new qs(a=>ZI(a),ja),this.ko=new Map,this.$o=new Set,this.Oo=new Se(L.comparator),this.Fo=new Map,this.Mo=new xm,this.Lo={},this.Bo=new Map,this.Uo=vi.ie(),this.onlineState="Unknown",this.qo=void 0}get isPrimaryClient(){return this.qo===!0}}async function TO(t,e){const n=eg(t);let r,i;const s=n.xo.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.Do();else{const o=await js(n.localStore,Bt(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await Qm(n,e,r,a==="current"),n.isPrimaryClient&&Kc(n.remoteStore,o)}return i}async function Qm(t,e,n,r){t.Ko=(c,h,d)=>async function(m,y,I,p){let f=y.view.Io(I);f.Ln&&(f=await jc(m.localStore,y.query,!1).then(({documents:w})=>y.view.Io(w,f)));const g=p&&p.targetChanges.get(y.targetId),v=y.view.applyChanges(f,m.isPrimaryClient,g);return Jm(m,y.targetId,v.vo),v.snapshot}(t,c,h,d);const i=await jc(t.localStore,e,!0),s=new RT(e,i.Gn),o=s.Io(i.documents),a=Qa.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline"),u=s.applyChanges(o,t.isPrimaryClient,a);Jm(t,n,u.vo);const l=new _O(e,n,s);return t.xo.set(e,l),t.ko.has(n)?t.ko.get(n).push(e):t.ko.set(n,[e]),u.snapshot}async function SO(t,e){const n=R(t),r=n.xo.get(e),i=n.ko.get(r.targetId);if(i.length>1)return n.ko.set(r.targetId,i.filter(s=>!ja(s,e))),void n.xo.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await zs(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),su(n.remoteStore,r.targetId),Xs(n,r.targetId)}).catch(wi)):(Xs(n,r.targetId),await zs(n.localStore,r.targetId,!0))}async function kO(t,e,n){const r=tg(t);try{const i=await function(s,o){const a=R(s),u=Pe.now(),l=o.reduce((h,d)=>h.add(d.key),X());let c;return a.persistence.runTransaction("Locally write mutations","readwrite",h=>a.Qn.Pn(h,l).next(d=>{c=d;const m=[];for(const y of o){const I=YD(y,c.get(y.key));I!=null&&m.push(new vr(y.key,I,WI(I.value.mapValue),ve.exists(!0)))}return a.In.addMutationBatch(h,u,m,o)})).then(h=>(h.applyToLocalDocumentSet(c),{batchId:h.batchId,changes:c}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,o,a){let u=s.Lo[s.currentUser.toKey()];u||(u=new Se(H)),u=u.insert(o,a),s.Lo[s.currentUser.toKey()]=u}(r,i.batchId,n),await Ln(r,i.changes),await Ws(r.remoteStore)}catch(i){const s=Gs(i,"Failed to persist write");n.reject(s)}}async function bT(t,e){const n=R(t);try{const r=await $x(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Fo.get(s);o&&(F(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Co=!0:i.modifiedDocuments.size>0?F(o.Co):i.removedDocuments.size>0&&(F(o.Co),o.Co=!1))}),await Ln(n,r,e)}catch(r){await wi(r)}}function AT(t,e,n){const r=R(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.xo.forEach((s,o)=>{const a=o.view.eo(e);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=R(s);a.onlineState=o;let u=!1;a.queries.forEach((l,c)=>{for(const h of c.listeners)h.eo(o)&&(u=!0)}),u&&Km(a)}(r.eventManager,e),i.length&&r.No.Er(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function CO(t,e,n){const r=R(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Fo.get(e),s=i&&i.key;if(s){let o=new Se(L.comparator);o=o.insert(s,oe.newNoDocument(s,j.min()));const a=X().add(s),u=new Ga(j.min(),new Map,new le(H),o,a);await bT(r,u),r.Oo=r.Oo.remove(s),r.Fo.delete(e),Zm(r)}else await zs(r.localStore,e,!1).then(()=>Xs(r,e,n)).catch(wi)}async function NO(t,e){const n=R(t),r=e.batch.batchId;try{const i=await Ux(n.localStore,e);Xm(n,r,null),Ym(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Ln(n,i)}catch(i){await wi(i)}}async function RO(t,e,n){const r=R(t);try{const i=await function(s,o){const a=R(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let l;return a.In.lookupMutationBatch(u,o).next(c=>(F(c!==null),l=c.keys(),a.In.removeMutationBatch(u,c))).next(()=>a.In.performConsistencyCheck(u)).next(()=>a.Qn.Pn(u,l))})}(r.localStore,e);Xm(r,e,n),Ym(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Ln(r,i)}catch(i){await wi(i)}}async function bO(t,e){const n=R(t);Sr(n.remoteStore)||N("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const r=await function(s){const o=R(s);return o.persistence.runTransaction("Get highest unacknowledged batch id","readonly",a=>o.In.getHighestUnacknowledgedBatchId(a))}(n.localStore);if(r===-1)return void e.resolve();const i=n.Bo.get(r)||[];i.push(e),n.Bo.set(r,i)}catch(r){const i=Gs(r,"Initialization of waitForPendingWrites() operation failed");e.reject(i)}}function Ym(t,e){(t.Bo.get(e)||[]).forEach(n=>{n.resolve()}),t.Bo.delete(e)}function Xm(t,e,n){const r=R(t);let i=r.Lo[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Lo[r.currentUser.toKey()]=i}}function Xs(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.ko.get(e))t.xo.delete(r),n&&t.No.jo(r,n);t.ko.delete(e),t.isPrimaryClient&&t.Mo.cs(e).forEach(r=>{t.Mo.containsKey(r)||PT(t,r)})}function PT(t,e){t.$o.delete(e.path.canonicalString());const n=t.Oo.get(e);n!==null&&(su(t.remoteStore,n),t.Oo=t.Oo.remove(e),t.Fo.delete(n),Zm(t))}function Jm(t,e,n){for(const r of n)r instanceof CT?(t.Mo.addReference(r.key,e),AO(t,r)):r instanceof NT?(N("SyncEngine","Document no longer in limbo: "+r.key),t.Mo.removeReference(r.key,e),t.Mo.containsKey(r.key)||PT(t,r.key)):M()}function AO(t,e){const n=e.key,r=n.path.canonicalString();t.Oo.get(n)||t.$o.has(r)||(N("SyncEngine","New document in limbo: "+n),t.$o.add(r),Zm(t))}function Zm(t){for(;t.$o.size>0&&t.Oo.size<t.maxConcurrentLimboResolutions;){const e=t.$o.values().next().value;t.$o.delete(e);const n=new L(Y.fromString(e)),r=t.Uo.next();t.Fo.set(r,new IO(n)),t.Oo=t.Oo.insert(n,r),Kc(t.remoteStore,new _r(Bt(bs(n.path)),r,2,bt.T))}}async function Ln(t,e,n){const r=R(t),i=[],s=[],o=[];r.xo.isEmpty()||(r.xo.forEach((a,u)=>{o.push(r.Ko(u,e,n).then(l=>{if(l){r.isPrimaryClient&&r.sharedClientState.updateQueryState(u.targetId,l.fromCache?"not-current":"current"),i.push(l);const c=Dm.kn(u.targetId,l);s.push(c)}}))}),await Promise.all(o),r.No.Er(i),await async function(a,u){const l=R(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",c=>E.forEach(u,h=>E.forEach(h.Nn,d=>l.persistence.referenceDelegate.addReference(c,h.targetId,d)).next(()=>E.forEach(h.xn,d=>l.persistence.referenceDelegate.removeReference(c,h.targetId,d)))))}catch(c){if(!gi(c))throw c;N("LocalStore","Failed to update sequence numbers: "+c)}for(const c of u){const h=c.targetId;if(!c.fromCache){const d=l.Un.get(h),m=d.snapshotVersion,y=d.withLastLimboFreeSnapshotVersion(m);l.Un=l.Un.insert(h,y)}}}(r.localStore,s))}async function PO(t,e){const n=R(t);if(!n.currentUser.isEqual(e)){N("SyncEngine","User change. New user:",e.toKey());const r=await aT(n.localStore,e);n.currentUser=e,function(i,s){i.Bo.forEach(o=>{o.forEach(a=>{a.reject(new T(_.CANCELLED,s))})}),i.Bo.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ln(n,r.Wn)}}function DO(t,e){const n=R(t),r=n.Fo.get(e);if(r&&r.Co)return X().add(r.key);{let i=X();const s=n.ko.get(e);if(!s)return i;for(const o of s){const a=n.xo.get(o);i=i.unionWith(a.view.Eo)}return i}}async function xO(t,e){const n=R(t),r=await jc(n.localStore,e.query,!0),i=e.view.So(r);return n.isPrimaryClient&&Jm(n,e.targetId,i.vo),i}async function OO(t){const e=R(t);return hT(e.localStore).then(n=>Ln(e,n))}async function LO(t,e,n,r){const i=R(t),s=await function(o,a){const u=R(o),l=R(u.In);return u.persistence.runTransaction("Lookup mutation documents","readonly",c=>l.Xt(c,a).next(h=>h?u.Qn.Pn(c,h):E.resolve(null)))}(i.localStore,e);s!==null?(n==="pending"?await Ws(i.remoteStore):n==="acknowledged"||n==="rejected"?(Xm(i,e,r||null),Ym(i,e),function(o,a){R(R(o).In).te(a)}(i.localStore,e)):M(),await Ln(i,s)):N("SyncEngine","Cannot apply mutation batch with id: "+e)}async function MO(t,e){const n=R(t);if(eg(n),tg(n),e===!0&&n.qo!==!0){const r=n.sharedClientState.getAllActiveQueryTargets(),i=await DT(n,r.toArray());n.qo=!0,await jm(n.remoteStore,!0);for(const s of i)Kc(n.remoteStore,s)}else if(e===!1&&n.qo!==!1){const r=[];let i=Promise.resolve();n.ko.forEach((s,o)=>{n.sharedClientState.isLocalQueryTarget(o)?r.push(o):i=i.then(()=>(Xs(n,o),zs(n.localStore,o,!0))),su(n.remoteStore,o)}),await i,await DT(n,r),function(s){const o=R(s);o.Fo.forEach((a,u)=>{su(o.remoteStore,u)}),o.Mo.us(),o.Fo=new Map,o.Oo=new Se(L.comparator)}(n),n.qo=!1,await jm(n.remoteStore,!1)}}async function DT(t,e,n){const r=R(t),i=[],s=[];for(const o of e){let a;const u=r.ko.get(o);if(u&&u.length!==0){a=await js(r.localStore,Bt(u[0]));for(const l of u){const c=r.xo.get(l),h=await xO(r,c);h.snapshot&&s.push(h.snapshot)}}else{const l=await cT(r.localStore,o);a=await js(r.localStore,l),await Qm(r,xT(l),o,!1)}i.push(a)}return r.No.Er(s),i}function xT(t){return XI(t.path,t.collectionGroup,t.orderBy,t.filters,t.limit,"F",t.startAt,t.endAt)}function UO(t){const e=R(t);return R(R(e.localStore).persistence).pn()}async function $O(t,e,n,r){const i=R(t);if(i.qo)N("SyncEngine","Ignoring unexpected query state notification.");else if(i.ko.has(e))switch(n){case"current":case"not-current":{const s=await hT(i.localStore),o=Ga.createSynthesizedRemoteEventForCurrentChange(e,n==="current");await Ln(i,s,o);break}case"rejected":await zs(i.localStore,e,!0),Xs(i,e,r);break;default:M()}}async function FO(t,e,n){const r=eg(t);if(r.qo){for(const i of e){if(r.ko.has(i)){N("SyncEngine","Adding an already active target "+i);continue}const s=await cT(r.localStore,i),o=await js(r.localStore,s);await Qm(r,xT(s),o.targetId,!1),Kc(r.remoteStore,o)}for(const i of n)r.ko.has(i)&&await zs(r.localStore,i,!1).then(()=>{su(r.remoteStore,i),Xs(r,i)}).catch(wi)}}function eg(t){const e=R(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=bT.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=DO.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=CO.bind(null,e),e.No.Er=gO.bind(null,e.eventManager),e.No.jo=yO.bind(null,e.eventManager),e}function tg(t){const e=R(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=NO.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=RO.bind(null,e),e}function VO(t,e,n){const r=R(t);(async function(i,s,o){try{const a=await s.getMetadata();if(await function(h,d){const m=R(h),y=xe(d.createTime);return m.persistence.runTransaction("hasNewerBundle","readonly",I=>m.Je.getBundleMetadata(I,d.id)).then(I=>!!I&&I.createTime.compareTo(y)>=0)}(i.localStore,a))return await s.close(),void o._completeWith(function(h){return{taskState:"Success",documentsLoaded:h.totalDocuments,bytesLoaded:h.totalBytes,totalDocuments:h.totalDocuments,totalBytes:h.totalBytes}}(a));o._updateProgress(kT(a));const u=new wO(a,i.localStore,s.N);let l=await s.Qo();for(;l;){const h=await u.fo(l);h&&o._updateProgress(h),l=await s.Qo()}const c=await u.complete();await Ln(i,c.En,void 0),await function(h,d){const m=R(h);return m.persistence.runTransaction("Save bundle","readwrite",y=>m.Je.saveBundleMetadata(y,d))}(i.localStore,a),o._completeWith(c.progress)}catch(a){Ma("SyncEngine",`Loading bundle failed with ${a}`),o._failWith(a)}})(r,e,n).then(()=>{r.sharedClientState.notifyBundleLoaded()})}class OT{constructor(){this.synchronizeTabs=!1}async initialize(e){this.N=ru(e.databaseInfo.databaseId),this.sharedClientState=this.Wo(e),this.persistence=this.Go(e),await this.persistence.start(),this.gcScheduler=this.zo(e),this.localStore=this.Ho(e)}zo(e){return null}Ho(e){return oT(this.persistence,new sT,e.initialUser,this.N)}Go(e){return new Gx(Om.Ns,this.N)}Wo(e){return new pT}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class LT extends OT{constructor(e,n,r){super(),this.Jo=e,this.cacheSizeBytes=n,this.forceOwnership=r,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await Vx(this.localStore),await this.Jo.initialize(this,e),await tg(this.Jo.syncEngine),await Ws(this.Jo.remoteStore),await this.persistence.nn(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(this.localStore),Promise.resolve()))}Ho(e){return oT(this.persistence,new sT,e.initialUser,this.N)}zo(e){const n=this.persistence.referenceDelegate.garbageCollector;return new bx(n,e.asyncQueue)}Go(e){const n=Pm(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?Et.withCacheSize(this.cacheSizeBytes):Et.DEFAULT;return new Am(this.synchronizeTabs,n,e.clientId,r,e.asyncQueue,gT(),Wc(),this.N,this.sharedClientState,!!this.forceOwnership)}Wo(e){return new pT}}class BO extends LT{constructor(e,n){super(e,n,!1),this.Jo=e,this.cacheSizeBytes=n,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const n=this.Jo.syncEngine;this.sharedClientState instanceof $m&&(this.sharedClientState.syncEngine={_i:LO.bind(null,n),mi:$O.bind(null,n),gi:FO.bind(null,n),pn:UO.bind(null,n),wi:OO.bind(null,n)},await this.sharedClientState.start()),await this.persistence.nn(async r=>{await MO(this.Jo.syncEngine,r),this.gcScheduler&&(r&&!this.gcScheduler.started?this.gcScheduler.start(this.localStore):r||this.gcScheduler.stop())})}Wo(e){const n=gT();if(!$m.bt(n))throw new T(_.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const r=Pm(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new $m(n,e.asyncQueue,r,e.clientId,e.initialUser)}}class ng{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>AT(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=PO.bind(null,this.syncEngine),await jm(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new mO}createDatastore(e){const n=ru(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new Zx(i));var i;return function(s,o,a){return new nO(s,o,a)}(e.credentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,i=e.asyncQueue,s=a=>AT(this.syncEngine,a,0),o=mT.bt()?new mT:new Yx,new iO(n,r,i,s,o);var n,r,i,s,o}createSyncEngine(e,n){return function(r,i,s,o,a,u,l){const c=new EO(r,i,s,o,a,u);return l&&(c.qo=!0),c}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=R(e);N("RemoteStore","RemoteStore shutting down."),n.Kr.add(5),await Hs(n),n.Qr.shutdown(),n.Wr.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MT(t,e=10240){let n=0;return{async read(){if(n<t.byteLength){const r={value:t.slice(n,n+e),done:!1};return n+=e,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.reject("unimplemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Qc{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Yo(this.observer.next,e)}error(e){this.observer.error?this.Yo(this.observer.error,e):console.error("Uncaught Error in snapshot listener:",e)}Xo(){this.muted=!0}Yo(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qO{constructor(e,n){this.Zo=e,this.N=n,this.metadata=new Ae,this.buffer=new Uint8Array,this.ta=new TextDecoder("utf-8"),this.ea().then(r=>{r&&r.ho()?this.metadata.resolve(r.payload.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(r==null?void 0:r.payload)}`))},r=>this.metadata.reject(r))}close(){return this.Zo.cancel()}async getMetadata(){return this.metadata.promise}async Qo(){return await this.getMetadata(),this.ea()}async ea(){const e=await this.na();if(e===null)return null;const n=this.ta.decode(e),r=Number(n);isNaN(r)&&this.sa(`length string (${n}) is not valid number`);const i=await this.ia(r);return new vO(JSON.parse(i),e.length+r)}ra(){return this.buffer.findIndex(e=>e==="{".charCodeAt(0))}async na(){for(;this.ra()<0&&!await this.oa(););if(this.buffer.length===0)return null;const e=this.ra();e<0&&this.sa("Reached the end of bundle when a length string is expected.");const n=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),n}async ia(e){for(;this.buffer.length<e;)await this.oa()&&this.sa("Reached the end of bundle when more is expected.");const n=this.ta.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),n}sa(e){throw this.Zo.cancel(),new Error(`Invalid bundle format: ${e}`)}async oa(){const e=await this.Zo.read();if(!e.done){const n=new Uint8Array(this.buffer.length+e.value.length);n.set(this.buffer),n.set(e.value,this.buffer.length),this.buffer=n}return e.done}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jO{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new T(_.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const n=await async function(r,i){const s=R(r),o=Ja(s.N)+"/documents",a={documents:i.map(h=>Xa(s.N,h))},u=await s.Ki("BatchGetDocuments",o,a),l=new Map;u.forEach(h=>{const d=ux(s.N,h);l.set(d.key.toString(),d)});const c=[];return i.forEach(h=>{const d=l.get(h.toString());F(!!d),c.push(d)}),c}(this.datastore,e);return n.forEach(r=>this.recordVersion(r)),n}set(e,n){this.write(n.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,n){try{this.write(n.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastWriteError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new Ka(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const e=this.readVersions;this.mutations.forEach(n=>{e.delete(n.key.toString())}),e.forEach((n,r)=>{const i=L.fromPath(r);this.mutations.push(new ym(i,this.precondition(i)))}),await async function(n,r){const i=R(n),s=Ja(i.N)+"/documents",o={writes:r.map(a=>Uc(i.N,a))};await i.Li("Commit",s,o)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let n;if(e.isFoundDocument())n=e.version;else{if(!e.isNoDocument())throw M();n=j.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!n.isEqual(r))throw new T(_.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),n)}precondition(e){const n=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&n?ve.updateTime(n):ve.none()}preconditionForUpdate(e){const n=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&n){if(n.isEqual(j.min()))throw new T(_.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return ve.updateTime(n)}return ve.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
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
 */class zO{constructor(e,n,r,i){this.asyncQueue=e,this.datastore=n,this.updateFunction=r,this.deferred=i,this.aa=5,this.rr=new Fm(this.asyncQueue,"transaction_retry")}run(){this.aa-=1,this.ca()}ca(){this.rr.Xi(async()=>{const e=new jO(this.datastore),n=this.ua(e);n&&n.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(i=>{this.ha(i)}))}).catch(r=>{this.ha(r)})})}ua(e){try{const n=this.updateFunction(e);return!hi(n)&&n.catch&&n.then?n:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(n){return this.deferred.reject(n),null}}ha(e){this.aa>0&&this.la(e)?(this.aa-=1,this.asyncQueue.enqueueAndForget(()=>(this.ca(),Promise.resolve()))):this.deferred.reject(e)}la(e){if(e.name==="FirebaseError"){const n=e.code;return n==="aborted"||n==="failed-precondition"||!pE(n)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HO{constructor(e,n,r){this.credentials=e,this.asyncQueue=n,this.databaseInfo=r,this.user=He.UNAUTHENTICATED,this.clientId=UI.I(),this.credentialListener=()=>Promise.resolve(),this.credentials.start(n,async i=>{N("FirestoreClient","Received user=",i.uid),await this.credentialListener(i),this.user=i})}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,credentials:this.credentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.credentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new T(_.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ae;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.credentials.shutdown(),e.resolve()}catch(n){const r=Gs(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function UT(t,e){t.asyncQueue.verifyOperationInProgress(),N("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await aT(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function $T(t,e){t.asyncQueue.verifyOperationInProgress();const n=await rg(t);N("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>async function(s,o){const a=R(s);a.asyncQueue.verifyOperationInProgress(),N("RemoteStore","RemoteStore received new credentials");const u=Sr(a);a.Kr.add(3),await Hs(a),u&&a.Wr.set("Unknown"),await a.remoteSyncer.handleCredentialChange(o),a.Kr.delete(3),await iu(a)}(e.remoteStore,i)),t.onlineComponents=e}async function rg(t){return t.offlineComponents||(N("FirestoreClient","Using default OfflineComponentProvider"),await UT(t,new OT)),t.offlineComponents}async function Yc(t){return t.onlineComponents||(N("FirestoreClient","Using default OnlineComponentProvider"),await $T(t,new ng)),t.onlineComponents}function FT(t){return rg(t).then(e=>e.persistence)}function ig(t){return rg(t).then(e=>e.localStore)}function VT(t){return Yc(t).then(e=>e.remoteStore)}function sg(t){return Yc(t).then(e=>e.syncEngine)}async function Js(t){const e=await Yc(t),n=e.eventManager;return n.onListen=TO.bind(null,e.syncEngine),n.onUnlisten=SO.bind(null,e.syncEngine),n}function WO(t){return t.asyncQueue.enqueue(async()=>{const e=await FT(t),n=await VT(t);return e.setNetworkEnabled(!0),function(r){const i=R(r);return i.Kr.delete(0),iu(i)}(n)})}function KO(t){return t.asyncQueue.enqueue(async()=>{const e=await FT(t),n=await VT(t);return e.setNetworkEnabled(!1),async function(r){const i=R(r);i.Kr.add(0),await Hs(i),i.Wr.set("Offline")}(n)})}function GO(t,e){const n=new Ae;return t.asyncQueue.enqueueAndForget(async()=>async function(r,i,s){try{const o=await function(a,u){const l=R(a);return l.persistence.runTransaction("read document","readonly",c=>l.Qn.An(c,u))}(r,i);o.isFoundDocument()?s.resolve(o):o.isNoDocument()?s.resolve(null):s.reject(new T(_.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(o){const a=Gs(o,`Failed to get document '${i} from cache`);s.reject(a)}}(await ig(t),e,n)),n.promise}function BT(t,e,n={}){const r=new Ae;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,u){const l=new Qc({next:h=>{s.enqueueAndForget(()=>Wm(i,c));const d=h.docs.has(o);!d&&h.fromCache?u.reject(new T(_.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&h.fromCache&&a&&a.source==="server"?u.reject(new T(_.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(h)},error:h=>u.reject(h)}),c=new Gm(bs(o.path),l,{includeMetadataChanges:!0,uo:!0});return Hm(i,c)}(await Js(t),t.asyncQueue,e,n,r)),r.promise}function QO(t,e){const n=new Ae;return t.asyncQueue.enqueueAndForget(async()=>async function(r,i,s){try{const o=await jc(r,i,!0),a=new RT(i,o.Gn),u=a.Io(o.documents),l=a.applyChanges(u,!1);s.resolve(l.snapshot)}catch(o){const a=Gs(o,`Failed to execute query '${i} against cache`);s.reject(a)}}(await ig(t),e,n)),n.promise}function qT(t,e,n={}){const r=new Ae;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,u){const l=new Qc({next:h=>{s.enqueueAndForget(()=>Wm(i,c)),h.fromCache&&a.source==="server"?u.reject(new T(_.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(h)},error:h=>u.reject(h)}),c=new Gm(o,l,{includeMetadataChanges:!0,uo:!0});return Hm(i,c)}(await Js(t),t.asyncQueue,e,n,r)),r.promise}function YO(t,e){const n=new Qc(e);return t.asyncQueue.enqueueAndForget(async()=>function(r,i){R(r).Zr.add(i),i.next()}(await Js(t),n)),()=>{n.Xo(),t.asyncQueue.enqueueAndForget(async()=>function(r,i){R(r).Zr.delete(i)}(await Js(t),n))}}function XO(t,e){const n=new Ae;return t.asyncQueue.enqueueAndForget(async()=>{const r=await function(i){return Yc(i).then(s=>s.datastore)}(t);new zO(t.asyncQueue,r,e,n).run()}),n.promise}function JO(t,e,n,r){const i=function(s,o){let a;return a=typeof s=="string"?new TextEncoder().encode(s):s,function(u,l){return new qO(u,l)}(function(u,l){if(u instanceof Uint8Array)return MT(u,l);if(u instanceof ArrayBuffer)return MT(new Uint8Array(u),l);if(u instanceof ReadableStream)return u.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(a),o)}(n,ru(e));t.asyncQueue.enqueueAndForget(async()=>{VO(await sg(t),i,r)})}function ZO(t,e){return t.asyncQueue.enqueue(async()=>function(n,r){const i=R(n);return i.persistence.runTransaction("Get named query","readonly",s=>i.Je.getNamedQuery(s,r))}(await ig(t),e))}class eL{constructor(e,n,r,i,s,o,a,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=u}}class Zs{constructor(e,n){this.projectId=e,this.database=n||"(default)"}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Zs&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jT=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function og(t,e,n){if(!n)throw new T(_.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function zT(t,e,n,r){if(e===!0&&r===!0)throw new T(_.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function HT(t){if(!L.isDocumentKey(t))throw new T(_.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function WT(t){if(L.isDocumentKey(t))throw new T(_.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Xc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":M()}function Q(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new T(_.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Xc(t);throw new T(_.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function KT(t,e){if(e<=0)throw new T(_.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GT{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new T(_.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new T(_.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,zT("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ou{constructor(e,n){this._credentials=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new GT({}),this._settingsFrozen=!1,e instanceof Zs?this._databaseId=e:(this._app=e,this._databaseId=function(r){if(!Object.prototype.hasOwnProperty.apply(r.options,["projectId"]))throw new T(_.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Zs(r.options.projectId)}(e))}get app(){if(!this._app)throw new T(_.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new T(_.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new GT(e),e.credentials!==void 0&&(this._credentials=function(n){if(!n)return new SD;switch(n.type){case"gapi":const r=n.client;return F(!(typeof r!="object"||r===null||!r.auth||!r.auth.getAuthHeaderValueForFirstParty)),new RD(r,n.sessionIndex||"0",n.iamToken||null);case"provider":return n.client;default:throw new T(_.INVALID_ARGUMENT,"makeCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=jT.get(e);n&&(N("ComponentProvider","Removing Datastore"),jT.delete(e),n.terminate())}(this),Promise.resolve()}}function tL(t,e,n,r={}){var i;const s=(t=Q(t,ou))._getSettings();if(s.host!=="firestore.googleapis.com"&&s.host!==e&&Ma("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},s),{host:`${e}:${n}`,ssl:!1})),r.mockUserToken){let o,a;if(typeof r.mockUserToken=="string")o=r.mockUserToken,a=He.MOCK_USER;else{o=zw(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new T(_.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new He(u)}t._credentials=new kD(new MI(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new mn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new re(this.firestore,e,this._key)}}class rt{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new rt(this.firestore,e,this._query)}}class mn extends rt{constructor(e,n,r){super(e,n,bs(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new re(this.firestore,null,new L(e))}withConverter(e){return new mn(this.firestore,e,this._path)}}function QT(t,e,...n){if(t=D(t),og("collection","path",e),t instanceof ou){const r=Y.fromString(e,...n);return WT(r),new mn(t,null,r)}{if(!(t instanceof re||t instanceof mn))throw new T(_.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Y.fromString(e,...n));return WT(r),new mn(t.firestore,null,r)}}function nL(t,e){if(t=Q(t,ou),og("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new T(_.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new rt(t,null,function(n){return new Dn(Y.emptyPath(),n)}(e))}function Jc(t,e,...n){if(t=D(t),arguments.length===1&&(e=UI.I()),og("doc","path",e),t instanceof ou){const r=Y.fromString(e,...n);return HT(r),new re(t,null,new L(r))}{if(!(t instanceof re||t instanceof mn))throw new T(_.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Y.fromString(e,...n));return HT(r),new re(t.firestore,t instanceof mn?t.converter:null,new L(r))}}function YT(t,e){return t=D(t),e=D(e),(t instanceof re||t instanceof mn)&&(e instanceof re||e instanceof mn)&&t.firestore===e.firestore&&t.path===e.path&&t.converter===e.converter}function XT(t,e){return t=D(t),e=D(e),t instanceof rt&&e instanceof rt&&t.firestore===e.firestore&&ja(t._query,e._query)&&t.converter===e.converter}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rL{constructor(){this.fa=Promise.resolve(),this.da=[],this.wa=!1,this._a=[],this.ma=null,this.ga=!1,this.ya=!1,this.pa=[],this.rr=new Fm(this,"async_queue_retry"),this.Ta=()=>{const n=Wc();n&&N("AsyncQueue","Visibility state changed to "+n.visibilityState),this.rr.tr()};const e=Wc();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Ta)}get isShuttingDown(){return this.wa}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Ea(),this.Ia(e)}enterRestrictedMode(e){if(!this.wa){this.wa=!0,this.ya=e||!1;const n=Wc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Ta)}}enqueue(e){if(this.Ea(),this.wa)return new Promise(()=>{});const n=new Ae;return this.Ia(()=>this.wa&&this.ya?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.da.push(e),this.Aa()))}async Aa(){if(this.da.length!==0){try{await this.da[0](),this.da.shift(),this.rr.reset()}catch(e){if(!gi(e))throw e;N("AsyncQueue","Operation failed with retryable error: "+e)}this.da.length>0&&this.rr.Xi(()=>this.Aa())}}Ia(e){const n=this.fa.then(()=>(this.ga=!0,e().catch(r=>{this.ma=r,this.ga=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw ge("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.ga=!1,r))));return this.fa=n,n}enqueueAfterDelay(e,n,r){this.Ea(),this.pa.indexOf(e)>-1&&(n=0);const i=zm.createAndSchedule(this,e,n,r,s=>this.Ra(s));return this._a.push(i),i}Ea(){this.ma&&M()}verifyOperationInProgress(){}async ba(){let e;do e=this.fa,await e;while(e!==this.fa)}Pa(e){for(const n of this._a)if(n.timerId===e)return!0;return!1}va(e){return this.ba().then(()=>{this._a.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this._a)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.ba()})}Va(e){this.pa.push(e)}Ra(e){const n=this._a.indexOf(e);this._a.splice(n,1)}}function ag(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const r=e;for(const i of n)if(i in r&&typeof r[i]=="function")return!0;return!1}(t,["next","error","complete"])}class iL{constructor(){this._progressObserver={},this._taskCompletionResolver=new Ae,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,n,r){this._progressObserver={next:e,error:n,complete:r}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,n){return this._taskCompletionResolver.promise.then(e,n)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sL=-1;class pe extends ou{constructor(e,n){super(e,n),this.type="firestore",this._queue=new rL,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||JT(this),this._firestoreClient.terminate()}}function Le(t){return t._firestoreClient||JT(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function JT(t){var e;const n=t._freezeSettings(),r=function(i,s,o,a){return new eL(i,s,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new HO(t._credentials,t._queue,r)}function oL(t,e){eS(t=Q(t,pe));const n=Le(t),r=t._freezeSettings(),i=new ng;return ZT(n,i,new LT(i,r.cacheSizeBytes,e==null?void 0:e.forceOwnership))}function aL(t){eS(t=Q(t,pe));const e=Le(t),n=t._freezeSettings(),r=new ng;return ZT(e,r,new BO(r,n.cacheSizeBytes))}function ZT(t,e,n){const r=new Ae;return t.asyncQueue.enqueue(async()=>{try{await UT(t,n),await $T(t,e),r.resolve()}catch(i){if(!function(s){return s.name==="FirebaseError"?s.code===_.FAILED_PRECONDITION||s.code===_.UNIMPLEMENTED:typeof DOMException!="undefined"&&s instanceof DOMException?s.code===22||s.code===20||s.code===11:!0}(i))throw i;console.warn("Error enabling offline persistence. Falling back to persistence disabled: "+i),r.reject(i)}}).then(()=>r.promise)}function uL(t){if(t._initialized&&!t._terminated)throw new T(_.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new Ae;return t._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(n){if(!Jt.bt())return Promise.resolve();const r=n+"main";await Jt.delete(r)}(Pm(t._databaseId,t._persistenceKey)),e.resolve()}catch(n){e.reject(n)}}),e.promise}function lL(t){return function(e){const n=new Ae;return e.asyncQueue.enqueueAndForget(async()=>bO(await sg(e),n)),n.promise}(Le(t=Q(t,pe)))}function cL(t){return WO(Le(t=Q(t,pe)))}function hL(t){return KO(Le(t=Q(t,pe)))}function dL(t,e){const n=Le(t=Q(t,pe)),r=new iL;return JO(n,t._databaseId,e,r),r}function fL(t,e){return ZO(Le(t=Q(t,pe)),e).then(n=>n?new rt(t,null,n.query):null)}function eS(t){if(t._initialized||t._terminated)throw new T(_.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Cr{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new T(_.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new We(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new gn(De.fromBase64String(e))}catch(n){throw new T(_.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new gn(De.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zc{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new T(_.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new T(_.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return H(this._lat,e._lat)||H(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pL=/^__.*__$/;class mL{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new vr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Wa(e,this.data,n,this.fieldTransforms)}}class tS{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new vr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function nS(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw M()}}class eh{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.N=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Sa(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Da(){return this.settings.Da}Ca(e){return new eh(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.N,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Na(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Ca({path:r,xa:!1});return i.ka(e),i}$a(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Ca({path:r,xa:!1});return i.Sa(),i}Oa(e){return this.Ca({path:void 0,xa:!0})}Fa(e){return nh(e,this.settings.methodName,this.settings.Ma||!1,this.path,this.settings.La)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Sa(){if(this.path)for(let e=0;e<this.path.length;e++)this.ka(this.path.get(e))}ka(e){if(e.length===0)throw this.Fa("Document fields must not be empty");if(nS(this.Da)&&pL.test(e))throw this.Fa('Document fields cannot begin and end with "__"')}}class gL{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.N=r||ru(e)}Ba(e,n,r,i=!1){return new eh({Da:e,methodName:n,La:r,path:We.emptyPath(),xa:!1,Ma:i},this.databaseId,this.N,this.ignoreUndefinedProperties)}}function Ii(t){const e=t._freezeSettings(),n=ru(t._databaseId);return new gL(t._databaseId,!!e.ignoreUndefinedProperties,n)}function th(t,e,n,r,i,s={}){const o=t.Ba(s.merge||s.mergeFields?2:0,e,n,i);hg("Data must be an object, but it was:",o,r);const a=sS(r,o);let u,l;if(s.merge)u=new ks(o.fieldMask),l=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const h of s.mergeFields){const d=dg(e,h,n);if(!o.contains(d))throw new T(_.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);aS(c,d)||c.push(d)}u=new ks(c),l=o.fieldTransforms.filter(h=>u.covers(h.field))}else u=null,l=o.fieldTransforms;return new mL(new tt(a),u,l)}class au extends _i{_toFieldTransform(e){if(e.Da!==2)throw e.Da===1?e.Fa(`${this._methodName}() can only appear at the top level of your update data`):e.Fa(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof au}}function rS(t,e,n){return new eh({Da:3,La:e.settings.La,methodName:t._methodName,xa:n},e.databaseId,e.N,e.ignoreUndefinedProperties)}class ug extends _i{_toFieldTransform(e){return new Ha(e.path,new Ps)}isEqual(e){return e instanceof ug}}class yL extends _i{constructor(e,n){super(e),this.Ua=n}_toFieldTransform(e){const n=rS(this,e,!0),r=this.Ua.map(s=>Ei(s,n)),i=new fi(r);return new Ha(e.path,i)}isEqual(e){return this===e}}class vL extends _i{constructor(e,n){super(e),this.Ua=n}_toFieldTransform(e){const n=rS(this,e,!0),r=this.Ua.map(s=>Ei(s,n)),i=new pi(r);return new Ha(e.path,i)}isEqual(e){return this===e}}class wL extends _i{constructor(e,n){super(e),this.qa=n}_toFieldTransform(e){const n=new Ds(e.N,rE(e.N,this.qa));return new Ha(e.path,n)}isEqual(e){return this===e}}function lg(t,e,n,r){const i=t.Ba(1,e,n);hg("Data must be an object, but it was:",i,r);const s=[],o=tt.empty();ci(r,(u,l)=>{const c=fg(e,u,n);l=D(l);const h=i.$a(c);if(l instanceof au)s.push(c);else{const d=Ei(l,h);d!=null&&(s.push(c),o.set(c,d))}});const a=new ks(s);return new tS(o,a,i.fieldTransforms)}function cg(t,e,n,r,i,s){const o=t.Ba(1,e,n),a=[dg(e,r,n)],u=[i];if(s.length%2!=0)throw new T(_.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push(dg(e,s[d])),u.push(s[d+1]);const l=[],c=tt.empty();for(let d=a.length-1;d>=0;--d)if(!aS(l,a[d])){const m=a[d];let y=u[d];y=D(y);const I=o.$a(m);if(y instanceof au)l.push(m);else{const p=Ei(y,I);p!=null&&(l.push(m),c.set(m,p))}}const h=new ks(l);return new tS(c,h,o.fieldTransforms)}function iS(t,e,n,r=!1){return Ei(n,t.Ba(r?4:3,e))}function Ei(t,e){if(oS(t=D(t)))return hg("Unsupported field value:",e,t),sS(t,e);if(t instanceof _i)return function(n,r){if(!nS(r.Da))throw r.Fa(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.Fa(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xa&&e.Da!==4)throw e.Fa("Nested arrays are not supported");return function(n,r){const i=[];let s=0;for(const o of n){let a=Ei(o,r.Oa(s));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),s++}return{arrayValue:{values:i}}}(t,e)}return function(n,r){if((n=D(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return rE(r.N,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=Pe.fromDate(n);return{timestampValue:Ya(r.N,i)}}if(n instanceof Pe){const i=new Pe(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Ya(r.N,i)}}if(n instanceof Zc)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof gn)return{bytesValue:TE(r.N,n._byteString)};if(n instanceof re){const i=r.databaseId,s=n.firestore._databaseId;if(!s.isEqual(i))throw r.Fa(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:wm(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r.Fa(`Unsupported field value: ${Xc(n)}`)}(t,e)}function sS(t,e){const n={};return VI(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ci(t,(r,i)=>{const s=Ei(i,e.Na(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function oS(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Pe||t instanceof Zc||t instanceof gn||t instanceof re||t instanceof _i)}function hg(t,e,n){if(!oS(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=Xc(n);throw r==="an object"?e.Fa(t+" a custom object"):e.Fa(t+" "+r)}}function dg(t,e,n){if((e=D(e))instanceof Cr)return e._internalPath;if(typeof e=="string")return fg(t,e);throw nh("Field path arguments must be of type string or FieldPath.",t,!1,void 0,n)}const _L=new RegExp("[~\\*/\\[\\]]");function fg(t,e,n){if(e.search(_L)>=0)throw nh(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Cr(...e.split("."))._internalPath}catch{throw nh(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function nh(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new T(_.INVALID_ARGUMENT,a+t+u)}function aS(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uu{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new re(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new IL(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(rh("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class IL extends uu{data(){return super.data()}}function rh(t,e){return typeof e=="string"?fg(t,e):e instanceof Cr?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Mn extends uu{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new lu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(rh("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class lu extends Mn{data(e={}){return super.data(e)}}class Nr{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Ti(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new lu(this._firestore,this._userDataWriter,r.key,r,new Ti(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new T(_.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let s=0;return r._snapshot.docChanges.map(o=>({type:"added",doc:new lu(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Ti(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter),oldIndex:-1,newIndex:s++}))}{let s=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new lu(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Ti(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let u=-1,l=-1;return o.type!==0&&(u=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),l=s.indexOf(o.doc.key)),{type:EL(o.type),doc:a,oldIndex:u,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function EL(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return M()}}function uS(t,e){return t instanceof Mn&&e instanceof Mn?t._firestore===e._firestore&&t._key.isEqual(e._key)&&(t._document===null?e._document===null:t._document.isEqual(e._document))&&t._converter===e._converter:t instanceof Nr&&e instanceof Nr&&t._firestore===e._firestore&&XT(t.query,e.query)&&t.metadata.isEqual(e.metadata)&&t._snapshot.isEqual(e._snapshot)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lS(t){if(Ac(t)&&t.explicitOrderBy.length===0)throw new T(_.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class cu{}function Rr(t,...e){for(const n of e)t=n._apply(t);return t}class TL extends cu{constructor(e,n,r){super(),this.Ka=e,this.ja=n,this.Qa=r,this.type="where"}_apply(e){const n=Ii(e.firestore),r=function(i,s,o,a,u,l,c){let h;if(u.isKeyField()){if(l==="array-contains"||l==="array-contains-any")throw new T(_.INVALID_ARGUMENT,`Invalid Query. You can't perform '${l}' queries on FieldPath.documentId().`);if(l==="in"||l==="not-in"){mS(c,l);const m=[];for(const y of c)m.push(pS(a,i,y));h={arrayValue:{values:m}}}else h=pS(a,i,c)}else l!=="in"&&l!=="not-in"&&l!=="array-contains-any"||mS(c,l),h=iS(o,s,c,l==="in"||l==="not-in");const d=ct.create(u,l,h);return function(m,y){if(y.v()){const p=fm(m);if(p!==null&&!p.isEqual(y.field))throw new T(_.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${p.toString()}' and '${y.field.toString()}'`);const f=dm(m);f!==null&&gS(m,y.field,f)}const I=function(p,f){for(const g of p.filters)if(f.indexOf(g.op)>=0)return g.op;return null}(m,function(p){switch(p){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(y.op));if(I!==null)throw I===y.op?new T(_.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${y.op.toString()}' filter.`):new T(_.INVALID_ARGUMENT,`Invalid query. You cannot use '${y.op.toString()}' filters with '${I.toString()}' filters.`)}(i,d),d}(e._query,"where",n,e.firestore._databaseId,this.Ka,this.ja,this.Qa);return new rt(e.firestore,e.converter,function(i,s){const o=i.filters.concat([s]);return new Dn(i.path,i.collectionGroup,i.explicitOrderBy.slice(),o,i.limit,i.limitType,i.startAt,i.endAt)}(e._query,r))}}function SL(t,e,n){const r=e,i=rh("where",t);return new TL(i,r,n)}class kL extends cu{constructor(e,n){super(),this.Ka=e,this.Wa=n,this.type="orderBy"}_apply(e){const n=function(r,i,s){if(r.startAt!==null)throw new T(_.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new T(_.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new Rs(i,s);return function(a,u){if(dm(a)===null){const l=fm(a);l!==null&&gS(a,l,u.field)}}(r,o),o}(e._query,this.Ka,this.Wa);return new rt(e.firestore,e.converter,function(r,i){const s=r.explicitOrderBy.concat([i]);return new Dn(r.path,r.collectionGroup,s,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}(e._query,n))}}function CL(t,e="asc"){const n=e,r=rh("orderBy",t);return new kL(r,n)}class cS extends cu{constructor(e,n,r){super(),this.type=e,this.Ga=n,this.za=r}_apply(e){return new rt(e.firestore,e.converter,JI(e._query,this.Ga,this.za))}}function NL(t){return KT("limit",t),new cS("limit",t,"F")}function RL(t){return KT("limitToLast",t),new cS("limitToLast",t,"L")}class hS extends cu{constructor(e,n,r){super(),this.type=e,this.Ha=n,this.Ja=r}_apply(e){const n=fS(e,this.type,this.Ha,this.Ja);return new rt(e.firestore,e.converter,function(r,i){return new Dn(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),r.limit,r.limitType,i,r.endAt)}(e._query,n))}}function bL(...t){return new hS("startAt",t,!0)}function AL(...t){return new hS("startAfter",t,!1)}class dS extends cu{constructor(e,n,r){super(),this.type=e,this.Ha=n,this.Ja=r}_apply(e){const n=fS(e,this.type,this.Ha,this.Ja);return new rt(e.firestore,e.converter,function(r,i){return new Dn(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),r.limit,r.limitType,r.startAt,i)}(e._query,n))}}function PL(...t){return new dS("endBefore",t,!0)}function DL(...t){return new dS("endAt",t,!1)}function fS(t,e,n,r){if(n[0]=D(n[0]),n[0]instanceof uu)return function(i,s,o,a,u){if(!a)throw new T(_.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${o}().`);const l=[];for(const c of As(i))if(c.field.isKeyField())l.push(Sc(s,a.key));else{const h=a.data.field(c.field);if(am(h))throw new T(_.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+c.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(h===null){const d=c.field.canonicalString();throw new T(_.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${d}' (used as the orderBy) does not exist.`)}l.push(h)}return new qa(l,u)}(t._query,t.firestore._databaseId,e,n[0]._document,r);{const i=Ii(t.firestore);return function(s,o,a,u,l,c){const h=s.explicitOrderBy;if(l.length>h.length)throw new T(_.INVALID_ARGUMENT,`Too many arguments provided to ${u}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const d=[];for(let m=0;m<l.length;m++){const y=l[m];if(h[m].field.isKeyField()){if(typeof y!="string")throw new T(_.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${u}(), but got a ${typeof y}`);if(!pm(s)&&y.indexOf("/")!==-1)throw new T(_.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by FieldPath.documentId(), the value passed to ${u}() must be a plain document ID, but '${y}' contains a slash.`);const I=s.path.child(Y.fromString(y));if(!L.isDocumentKey(I))throw new T(_.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by FieldPath.documentId(), the value passed to ${u}() must result in a valid document path, but '${I}' is not because it contains an odd number of segments.`);const p=new L(I);d.push(Sc(o,p))}else{const I=iS(a,u,y);d.push(I)}}return new qa(d,c)}(t._query,t.firestore._databaseId,i,e,n,r)}}function pS(t,e,n){if(typeof(n=D(n))=="string"){if(n==="")throw new T(_.INVALID_ARGUMENT,"Invalid query. When querying with FieldPath.documentId(), you must provide a valid document ID, but it was an empty string.");if(!pm(e)&&n.indexOf("/")!==-1)throw new T(_.INVALID_ARGUMENT,`Invalid query. When querying a collection by FieldPath.documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Y.fromString(n));if(!L.isDocumentKey(r))throw new T(_.INVALID_ARGUMENT,`Invalid query. When querying a collection group by FieldPath.documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Sc(t,new L(r))}if(n instanceof re)return Sc(t,n._key);throw new T(_.INVALID_ARGUMENT,`Invalid query. When querying with FieldPath.documentId(), you must provide a valid string or a DocumentReference, but it was: ${Xc(n)}.`)}function mS(t,e){if(!Array.isArray(t)||t.length===0)throw new T(_.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(t.length>10)throw new T(_.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function gS(t,e,n){if(!n.isEqual(e))throw new T(_.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pg{convertValue(e,n="none"){switch(di(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ye(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Cs(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw M()}}convertObject(e,n){const r={};return ci(e.fields,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new Zc(ye(e.latitude),ye(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=BI(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp($a(e));default:return null}}convertTimestamp(e){const n=yr(e);return new Pe(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Y.fromString(e);F(ME(r));const i=new Zs(r.get(1),r.get(3)),s=new L(r.popFirst(5));return i.isEqual(n)||ge(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ih(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class xL extends pg{constructor(e){super(),this.firestore=e}convertBytes(e){return new gn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new re(this.firestore,null,n)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OL{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=Ii(e)}set(e,n,r){this._verifyNotCommitted();const i=br(e,this._firestore),s=ih(i.converter,n,r),o=th(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(o.toMutation(i._key,ve.none())),this}update(e,n,r,...i){this._verifyNotCommitted();const s=br(e,this._firestore);let o;return o=typeof(n=D(n))=="string"||n instanceof Cr?cg(this._dataReader,"WriteBatch.update",s._key,n,r,i):lg(this._dataReader,"WriteBatch.update",s._key,n),this._mutations.push(o.toMutation(s._key,ve.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=br(e,this._firestore);return this._mutations=this._mutations.concat(new Ka(n._key,ve.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new T(_.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function br(t,e){if((t=D(t)).firestore!==e)throw new T(_.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function LL(t){t=Q(t,re);const e=Q(t.firestore,pe);return BT(Le(e),t._key).then(n=>mg(e,t,n))}class Si extends pg{constructor(e){super(),this.firestore=e}convertBytes(e){return new gn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new re(this.firestore,null,n)}}function ML(t){t=Q(t,re);const e=Q(t.firestore,pe),n=Le(e),r=new Si(e);return GO(n,t._key).then(i=>new Mn(e,r,t._key,i,new Ti(i!==null&&i.hasLocalMutations,!0),t.converter))}function UL(t){t=Q(t,re);const e=Q(t.firestore,pe);return BT(Le(e),t._key,{source:"server"}).then(n=>mg(e,t,n))}function $L(t){t=Q(t,rt);const e=Q(t.firestore,pe),n=Le(e),r=new Si(e);return lS(t._query),qT(n,t._query).then(i=>new Nr(e,r,t,i))}function FL(t){t=Q(t,rt);const e=Q(t.firestore,pe),n=Le(e),r=new Si(e);return QO(n,t._query).then(i=>new Nr(e,r,t,i))}function VL(t){t=Q(t,rt);const e=Q(t.firestore,pe),n=Le(e),r=new Si(e);return qT(n,t._query,{source:"server"}).then(i=>new Nr(e,r,t,i))}function yS(t,e,n){t=Q(t,re);const r=Q(t.firestore,pe),i=ih(t.converter,e,n);return hu(r,[th(Ii(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,ve.none())])}function vS(t,e,n,...r){t=Q(t,re);const i=Q(t.firestore,pe),s=Ii(i);let o;return o=typeof(e=D(e))=="string"||e instanceof Cr?cg(s,"updateDoc",t._key,e,n,r):lg(s,"updateDoc",t._key,e),hu(i,[o.toMutation(t._key,ve.exists(!0))])}function BL(t){return hu(Q(t.firestore,pe),[new Ka(t._key,ve.none())])}function qL(t,e){const n=Q(t.firestore,pe),r=Jc(t),i=ih(t.converter,e);return hu(n,[th(Ii(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,ve.exists(!1))]).then(()=>r)}function wS(t,...e){var n,r,i;t=D(t);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||ag(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(ag(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let u,l,c;if(t instanceof re)l=Q(t.firestore,pe),c=bs(t._key.path),u={next:h=>{e[o]&&e[o](mg(l,t,h))},error:e[o+1],complete:e[o+2]};else{const h=Q(t,rt);l=Q(h.firestore,pe),c=h._query;const d=new Si(l);u={next:m=>{e[o]&&e[o](new Nr(l,d,h,m))},error:e[o+1],complete:e[o+2]},lS(t._query)}return function(h,d,m,y){const I=new Qc(y),p=new Gm(d,I,m);return h.asyncQueue.enqueueAndForget(async()=>Hm(await Js(h),p)),()=>{I.Xo(),h.asyncQueue.enqueueAndForget(async()=>Wm(await Js(h),p))}}(Le(l),c,a,u)}function jL(t,e){return YO(Le(t=Q(t,pe)),ag(e)?e:{next:e})}function hu(t,e){return function(n,r){const i=new Ae;return n.asyncQueue.enqueueAndForget(async()=>kO(await sg(n),r,i)),i.promise}(Le(t),e)}function mg(t,e,n){const r=n.docs.get(e._key),i=new Si(t);return new Mn(t,i,e._key,r,new Ti(n.hasPendingWrites,n.fromCache),e.converter)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zL extends class{constructor(e,n){this._firestore=e,this._transaction=n,this._dataReader=Ii(e)}get(e){const n=br(e,this._firestore),r=new xL(this._firestore);return this._transaction.lookup([n._key]).then(i=>{if(!i||i.length!==1)return M();const s=i[0];if(s.isFoundDocument())return new uu(this._firestore,r,s.key,s,n.converter);if(s.isNoDocument())return new uu(this._firestore,r,n._key,null,n.converter);throw M()})}set(e,n,r){const i=br(e,this._firestore),s=ih(i.converter,n,r),o=th(this._dataReader,"Transaction.set",i._key,s,i.converter!==null,r);return this._transaction.set(i._key,o),this}update(e,n,r,...i){const s=br(e,this._firestore);let o;return o=typeof(n=D(n))=="string"||n instanceof Cr?cg(this._dataReader,"Transaction.update",s._key,n,r,i):lg(this._dataReader,"Transaction.update",s._key,n),this._transaction.update(s._key,o),this}delete(e){const n=br(e,this._firestore);return this._transaction.delete(n._key),this}}{constructor(e,n){super(e,n),this._firestore=e}get(e){const n=br(e,this._firestore),r=new Si(this._firestore);return super.get(e).then(i=>new Mn(this._firestore,r,n._key,i._document,new Ti(!1,!1),n.converter))}}function HL(t,e){return XO(Le(t),n=>e(new zL(t,n)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WL(){return new au("deleteField")}function KL(){return new ug("serverTimestamp")}function GL(...t){return new yL("arrayUnion",t)}function QL(...t){return new vL("arrayRemove",t)}function YL(t){return new wL("increment",t)}var XL;(function(t){Ts=t})(lr),ur(new Gt("firestore",(t,{options:e})=>{const n=t.getProvider("app").getImmediate(),r=new pe(n,new CD(t.getProvider("auth-internal")));return e=Object.assign({useFetchStreams:!0},e),r._setSettings(e),r},"PUBLIC")),Ft(LI,"3.1.1",XL),Ft(LI,"3.1.1","esm2017");const JL="@firebase/firestore-compat",ZL="0.1.4";/**
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
 */function gg(t,e){if(e===void 0)return{merge:!1};if(e.mergeFields!==void 0&&e.merge!==void 0)throw new T("invalid-argument",`Invalid options passed to function ${t}(): You cannot specify both "merge" and "mergeFields".`);return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _S(){if(typeof Uint8Array=="undefined")throw new T("unimplemented","Uint8Arrays are not available in this environment.")}function IS(){if(!PD())throw new T("unimplemented","Blobs are unavailable in Firestore in this environment.")}class du{constructor(e){this._delegate=e}static fromBase64String(e){return IS(),new du(gn.fromBase64String(e))}static fromUint8Array(e){return _S(),new du(gn.fromUint8Array(e))}toBase64(){return IS(),this._delegate.toBase64()}toUint8Array(){return _S(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yg(t){return eM(t,["next","error","complete"])}function eM(t,e){if(typeof t!="object"||t===null)return!1;const n=t;for(const r of e)if(r in n&&typeof n[r]=="function")return!0;return!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tM{enableIndexedDbPersistence(e,n){return oL(e._delegate,{forceOwnership:n})}enableMultiTabIndexedDbPersistence(e){return aL(e._delegate)}clearIndexedDbPersistence(e){return uL(e._delegate)}}class ES{constructor(e,n,r){this._delegate=n,this._persistenceProvider=r,this.INTERNAL={delete:()=>this.terminate()},e instanceof Zs||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const n=this._delegate._getSettings();!e.merge&&n.host!==e.host&&Ma("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},n),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,n,r={}){tL(this._delegate,e,n,r)}enableNetwork(){return cL(this._delegate)}disableNetwork(){return hL(this._delegate)}enablePersistence(e){let n=!1,r=!1;return e&&(n=!!e.synchronizeTabs,r=!!e.experimentalForceOwningTab,zT("synchronizeTabs",n,"experimentalForceOwningTab",r)),n?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,r)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return lL(this._delegate)}onSnapshotsInSync(e){return jL(this._delegate,e)}get app(){if(!this._appCompat)throw new T("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new eo(this,QT(this._delegate,e))}catch(n){throw ht(n,"collection()","Firestore.collection()")}}doc(e){try{return new jt(this,Jc(this._delegate,e))}catch(n){throw ht(n,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new dt(this,nL(this._delegate,e))}catch(n){throw ht(n,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return HL(this._delegate,n=>e(new TS(this,n)))}batch(){return Le(this._delegate),new SS(new OL(this._delegate,e=>hu(this._delegate,e)))}loadBundle(e){return dL(this._delegate,e)}namedQuery(e){return fL(this._delegate,e).then(n=>n?new dt(this,n):null)}}class sh extends pg{constructor(e){super();this.firestore=e}convertBytes(e){return new du(new gn(e))}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return jt.forKey(n,this.firestore,null)}}function nM(t){ED(t)}class TS{constructor(e,n){this._firestore=e,this._delegate=n,this._userDataWriter=new sh(e)}get(e){const n=Ci(e);return this._delegate.get(n).then(r=>new fu(this._firestore,new Mn(this._firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,n.converter)))}set(e,n,r){const i=Ci(e);return r?(gg("Transaction.set",r),this._delegate.set(i,n,r)):this._delegate.set(i,n),this}update(e,n,r,...i){const s=Ci(e);return arguments.length===2?this._delegate.update(s,n):this._delegate.update(s,n,r,...i),this}delete(e){const n=Ci(e);return this._delegate.delete(n),this}}class SS{constructor(e){this._delegate=e}set(e,n,r){const i=Ci(e);return r?(gg("WriteBatch.set",r),this._delegate.set(i,n,r)):this._delegate.set(i,n),this}update(e,n,r,...i){const s=Ci(e);return arguments.length===2?this._delegate.update(s,n):this._delegate.update(s,n,r,...i),this}delete(e){const n=Ci(e);return this._delegate.delete(n),this}commit(){return this._delegate.commit()}}class ki{constructor(e,n,r){this._firestore=e,this._userDataWriter=n,this._delegate=r}fromFirestore(e,n){const r=new lu(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new pu(this._firestore,r),n!=null?n:{})}toFirestore(e,n){return n?this._delegate.toFirestore(e,n):this._delegate.toFirestore(e)}static getInstance(e,n){const r=ki.INSTANCES;let i=r.get(e);i||(i=new WeakMap,r.set(e,i));let s=i.get(n);return s||(s=new ki(e,new sh(e),n),i.set(n,s)),s}}ki.INSTANCES=new WeakMap;class jt{constructor(e,n){this.firestore=e,this._delegate=n,this._userDataWriter=new sh(e)}static forPath(e,n,r){if(e.length%2!=0)throw new T("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new jt(n,new re(n._delegate,r,new L(e)))}static forKey(e,n,r){return new jt(n,new re(n._delegate,r,e))}get id(){return this._delegate.id}get parent(){return new eo(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new eo(this.firestore,QT(this._delegate,e))}catch(n){throw ht(n,"collection()","DocumentReference.collection()")}}isEqual(e){return e=D(e),e instanceof re?YT(this._delegate,e):!1}set(e,n){n=gg("DocumentReference.set",n);try{return n?yS(this._delegate,e,n):yS(this._delegate,e)}catch(r){throw ht(r,"setDoc()","DocumentReference.set()")}}update(e,n,...r){try{return arguments.length===1?vS(this._delegate,e):vS(this._delegate,e,n,...r)}catch(i){throw ht(i,"updateDoc()","DocumentReference.update()")}}delete(){return BL(this._delegate)}onSnapshot(...e){const n=kS(e),r=CS(e,i=>new fu(this.firestore,new Mn(this.firestore._delegate,this._userDataWriter,i._key,i._document,i.metadata,this._delegate.converter)));return wS(this._delegate,n,r)}get(e){let n;return(e==null?void 0:e.source)==="cache"?n=ML(this._delegate):(e==null?void 0:e.source)==="server"?n=UL(this._delegate):n=LL(this._delegate),n.then(r=>new fu(this.firestore,new Mn(this.firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,this._delegate.converter)))}withConverter(e){return new jt(this.firestore,e?this._delegate.withConverter(ki.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function ht(t,e,n){return t.message=t.message.replace(e,n),t}function kS(t){for(const e of t)if(typeof e=="object"&&!yg(e))return e;return{}}function CS(t,e){var n,r;let i;return yg(t[0])?i=t[0]:yg(t[1])?i=t[1]:typeof t[0]=="function"?i={next:t[0],error:t[1],complete:t[2]}:i={next:t[1],error:t[2],complete:t[3]},{next:s=>{i.next&&i.next(e(s))},error:(n=i.error)===null||n===void 0?void 0:n.bind(i),complete:(r=i.complete)===null||r===void 0?void 0:r.bind(i)}}class fu{constructor(e,n){this._firestore=e,this._delegate=n}get ref(){return new jt(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,n){return this._delegate.get(e,n)}isEqual(e){return uS(this._delegate,e._delegate)}}class pu extends fu{data(e){const n=this._delegate.data(e);return TD(n!==void 0),n}}class dt{constructor(e,n){this.firestore=e,this._delegate=n,this._userDataWriter=new sh(e)}where(e,n,r){try{return new dt(this.firestore,Rr(this._delegate,SL(e,n,r)))}catch(i){throw ht(i,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,n){try{return new dt(this.firestore,Rr(this._delegate,CL(e,n)))}catch(r){throw ht(r,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new dt(this.firestore,Rr(this._delegate,NL(e)))}catch(n){throw ht(n,"limit()","Query.limit()")}}limitToLast(e){try{return new dt(this.firestore,Rr(this._delegate,RL(e)))}catch(n){throw ht(n,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new dt(this.firestore,Rr(this._delegate,bL(...e)))}catch(n){throw ht(n,"startAt()","Query.startAt()")}}startAfter(...e){try{return new dt(this.firestore,Rr(this._delegate,AL(...e)))}catch(n){throw ht(n,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new dt(this.firestore,Rr(this._delegate,PL(...e)))}catch(n){throw ht(n,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new dt(this.firestore,Rr(this._delegate,DL(...e)))}catch(n){throw ht(n,"endAt()","Query.endAt()")}}isEqual(e){return XT(this._delegate,e._delegate)}get(e){let n;return(e==null?void 0:e.source)==="cache"?n=FL(this._delegate):(e==null?void 0:e.source)==="server"?n=VL(this._delegate):n=$L(this._delegate),n.then(r=>new vg(this.firestore,new Nr(this.firestore._delegate,this._userDataWriter,this._delegate,r._snapshot)))}onSnapshot(...e){const n=kS(e),r=CS(e,i=>new vg(this.firestore,new Nr(this.firestore._delegate,this._userDataWriter,this._delegate,i._snapshot)));return wS(this._delegate,n,r)}withConverter(e){return new dt(this.firestore,e?this._delegate.withConverter(ki.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class rM{constructor(e,n){this._firestore=e,this._delegate=n}get type(){return this._delegate.type}get doc(){return new pu(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class vg{constructor(e,n){this._firestore=e,this._delegate=n}get query(){return new dt(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new pu(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(n=>new rM(this._firestore,n))}forEach(e,n){this._delegate.forEach(r=>{e.call(n,new pu(this._firestore,r))})}isEqual(e){return uS(this._delegate,e._delegate)}}class eo extends dt{constructor(e,n){super(e,n);this.firestore=e,this._delegate=n}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new jt(this.firestore,e):null}doc(e){try{return e===void 0?new jt(this.firestore,Jc(this._delegate)):new jt(this.firestore,Jc(this._delegate,e))}catch(n){throw ht(n,"doc()","CollectionReference.doc()")}}add(e){return qL(this._delegate,e).then(n=>new jt(this.firestore,n))}isEqual(e){return YT(this._delegate,e._delegate)}withConverter(e){return new eo(this.firestore,e?this._delegate.withConverter(ki.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function Ci(t){return Q(t,re)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wg{constructor(...e){this._delegate=new Cr(...e)}static documentId(){return new wg(We.keyField().canonicalString())}isEqual(e){return e=D(e),e instanceof Cr?this._delegate._internalPath.isEqual(e._internalPath):!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ni{constructor(e){this._delegate=e}static serverTimestamp(){const e=KL();return e._methodName="FieldValue.serverTimestamp",new Ni(e)}static delete(){const e=WL();return e._methodName="FieldValue.delete",new Ni(e)}static arrayUnion(...e){const n=GL(...e);return n._methodName="FieldValue.arrayUnion",new Ni(n)}static arrayRemove(...e){const n=QL(...e);return n._methodName="FieldValue.arrayRemove",new Ni(n)}static increment(e){const n=YL(e);return n._methodName="FieldValue.increment",new Ni(n)}isEqual(e){return this._delegate.isEqual(e._delegate)}}/**
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
 */const iM={Firestore:ES,GeoPoint:Zc,Timestamp:Pe,Blob:du,Transaction:TS,WriteBatch:SS,DocumentReference:jt,DocumentSnapshot:fu,Query:dt,QueryDocumentSnapshot:pu,QuerySnapshot:vg,CollectionReference:eo,FieldPath:wg,FieldValue:Ni,setLogLevel:nM,CACHE_SIZE_UNLIMITED:sL};function sM(t,e){t.INTERNAL.registerComponent(new Gt("firestore-compat",n=>{const r=n.getProvider("app-compat").getImmediate(),i=n.getProvider("firestore").getImmediate();return e(r,i)},"PUBLIC").setServiceProps(Object.assign({},iM)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oM(t){sM(t,(e,n)=>new ES(e,n,new tM)),t.registerVersion(JL,ZL)}oM(ls);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ri;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Ri||(Ri={}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NS="firebasestorage.googleapis.com",RS="storageBucket",aM=2*60*1e3,uM=10*60*1e3;class he extends kt{constructor(e,n){super(_g(e),`Firebase Storage: ${n} (${_g(e)})`);this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,he.prototype)}_codeEquals(e){return _g(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}function _g(t){return"storage/"+t}function Ig(){const t="An unknown error occurred, please check the error payload for server response.";return new he("unknown",t)}function lM(t){return new he("object-not-found","Object '"+t+"' does not exist.")}function cM(t){return new he("quota-exceeded","Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function hM(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new he("unauthenticated",t)}function dM(){return new he("unauthorized-app","This app does not have permission to access Firebase Storage on this project.")}function fM(t){return new he("unauthorized","User does not have permission to access '"+t+"'.")}function pM(){return new he("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function bS(){return new he("canceled","User canceled the upload/download.")}function mM(t){return new he("invalid-url","Invalid URL '"+t+"'.")}function gM(t){return new he("invalid-default-bucket","Invalid default bucket '"+t+"'.")}function yM(){return new he("no-default-bucket","No default bucket found. Did you set the '"+RS+"' property when initializing the app?")}function AS(){return new he("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.")}function vM(){return new he("server-file-wrong-size","Server recorded incorrect upload file size, please retry the upload.")}function wM(){return new he("no-download-url","The given file does not have any download URLs.")}function to(t){return new he("invalid-argument",t)}function PS(){return new he("app-deleted","The Firebase app was deleted.")}function DS(t){return new he("invalid-root-operation","The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function mu(t,e){return new he("invalid-format","String does not match format '"+t+"': "+e)}function oh(t){throw new he("internal-error","Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _M{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.errorCode_=Ri.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Ri.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Ri.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw oh("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw oh("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw oh("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponseText(){if(!this.sent_)throw oh("cannot .getResponseText() before sending");return this.xhr_.responseText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}function IM(){return new _M}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EM{createConnection(){return IM()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=it.makeFromUrl(e,n)}catch{return new it(e,"")}if(r.path==="")return r;throw gM(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(w){w.path.charAt(w.path.length-1)==="/"&&(w.path_=w.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),u={bucket:1,path:3};function l(w){w.path_=decodeURIComponent(w.path)}const c="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",m=new RegExp(`^https?://${h}/${c}/b/${i}/o${d}`,"i"),y={bucket:1,path:3},I=n===NS?"(?:storage.googleapis.com|storage.cloud.google.com)":n,p="([^?#]*)",f=new RegExp(`^https?://${I}/${i}/${p}`,"i"),v=[{regex:a,indices:u,postModify:s},{regex:m,indices:y,postModify:l},{regex:f,indices:{bucket:1,path:2},postModify:l}];for(let w=0;w<v.length;w++){const O=v[w],S=O.regex.exec(e);if(S){const U=S[O.indices.bucket];let $=S[O.indices.path];$||($=""),r=new it(U,$),O.postModify(r);break}}if(r==null)throw mM(e);return r}}class TM{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SM(t,e,n){let r=1,i=null,s=!1,o=0;function a(){return o===2}let u=!1;function l(...y){u||(u=!0,e.apply(null,y))}function c(y){i=setTimeout(()=>{i=null,t(h,a())},y)}function h(y,...I){if(u)return;if(y){l.call(null,y,...I);return}if(a()||s){l.call(null,y,...I);return}r<64&&(r*=2);let f;o===1?(o=2,f=0):f=(r+Math.random())*1e3,c(f)}let d=!1;function m(y){d||(d=!0,!u&&(i!==null?(y||(o=2),clearTimeout(i),c(0)):y||(o=1)))}return c(0),setTimeout(()=>{s=!0,m(!0)},n),m}function kM(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CM(t){return t!==void 0}function NM(t){return typeof t=="function"}function RM(t){return typeof t=="object"&&!Array.isArray(t)}function ah(t){return typeof t=="string"||t instanceof String}function xS(t){return Eg()&&t instanceof Blob}function Eg(){return typeof Blob!="undefined"}function Tg(t,e,n,r){if(r<e)throw to(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw to(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ar(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function OS(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bM{constructor(e,n,r,i,s,o,a,u,l,c,h){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=u,this.timeout_=l,this.progressCallback_=c,this.pool_=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((d,m)=>{this.resolve_=d,this.reject_=m,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new uh(!1,null,!0));return}const s=this.pool_.createConnection();this.pendingConnection_=s;const o=a=>{const u=a.loaded,l=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,l)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===Ri.NO_ERROR,u=s.getStatus();if(!a||this.isRetryStatusCode_(u)){const c=s.getErrorCode()===Ri.ABORT;r(!1,new uh(!1,null,c));return}const l=this.successCodes_.indexOf(u)!==-1;r(!0,new uh(l,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const u=this.callback_(a,a.getResponseText());CM(u)?s(u):s()}catch(u){o(u)}else if(a!==null){const u=Ig();u.serverResponse=a.getResponseText(),this.errorCallback_?o(this.errorCallback_(a,u)):o(u)}else if(i.canceled){const u=this.appDelete_?PS():bS();o(u)}else{const u=pM();o(u)}};this.canceled_?n(!1,new uh(!1,null,!0)):this.backoffId_=SM(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&kM(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}isRetryStatusCode_(e){const n=e>=500&&e<600,i=[408,429].indexOf(e)!==-1,s=this.additionalRetryCodes_.indexOf(e)!==-1;return n||i||s}}class uh{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function AM(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function PM(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e!=null?e:"AppManager")}function DM(t,e){e&&(t["X-Firebase-GMPID"]=e)}function xM(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function OM(t,e,n,r,i,s){const o=OS(t.urlParams),a=t.url+o,u=Object.assign({},t.headers);return DM(u,e),AM(u,n),PM(u,s),xM(u,r),new bM(a,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LM(){return typeof BlobBuilder!="undefined"?BlobBuilder:typeof WebKitBlobBuilder!="undefined"?WebKitBlobBuilder:void 0}function MM(...t){const e=LM();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Eg())return new Blob(t);throw new he("unsupported-environment","This browser doesn't seem to support creating Blobs")}}function UM(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function $M(t){return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zt={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Sg{constructor(e,n){this.data=e,this.contentType=n||null}}function LS(t,e){switch(t){case zt.RAW:return new Sg(MS(e));case zt.BASE64:case zt.BASE64URL:return new Sg(US(t,e));case zt.DATA_URL:return new Sg(VM(e),BM(e))}throw Ig()}function MS(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)==55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)==56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)==56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function FM(t){let e;try{e=decodeURIComponent(t)}catch{throw mu(zt.DATA_URL,"Malformed data URL.")}return MS(e)}function US(t,e){switch(t){case zt.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw mu(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case zt.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw mu(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=$M(e)}catch{throw mu(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class $S{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw mu(zt.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=qM(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-";base64".length):r),this.rest=e.substring(e.indexOf(",")+1)}}function VM(t){const e=new $S(t);return e.base64?US(zt.BASE64,e.rest):FM(e.rest)}function BM(t){return new $S(t).contentType}function qM(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un{constructor(e,n){let r=0,i="";xS(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(xS(this.data_)){const r=this.data_,i=UM(r,e,n);return i===null?null:new Un(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new Un(r,!0)}}static getBlob(...e){if(Eg()){const n=e.map(r=>r instanceof Un?r.data_:r);return new Un(MM.apply(null,n))}else{const n=e.map(o=>ah(o)?LS(zt.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[s++]=o[a]}),new Un(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kg(t){let e;try{e=JSON.parse(t)}catch{return null}return RM(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jM(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function zM(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function FS(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HM(t,e){return e}class ft{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||HM}}let lh=null;function WM(t){return!ah(t)||t.length<2?t:FS(t)}function ch(){if(lh)return lh;const t=[];t.push(new ft("bucket")),t.push(new ft("generation")),t.push(new ft("metageneration")),t.push(new ft("name","fullPath",!0));function e(s,o){return WM(o)}const n=new ft("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new ft("size");return i.xform=r,t.push(i),t.push(new ft("timeCreated")),t.push(new ft("updated")),t.push(new ft("md5Hash",null,!0)),t.push(new ft("cacheControl",null,!0)),t.push(new ft("contentDisposition",null,!0)),t.push(new ft("contentEncoding",null,!0)),t.push(new ft("contentLanguage",null,!0)),t.push(new ft("contentType",null,!0)),t.push(new ft("metadata","customMetadata",!0)),lh=t,lh}function KM(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new it(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function GM(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return KM(r,t),r}function VS(t,e,n){const r=kg(e);return r===null?null:GM(t,r,n)}function QM(t,e,n,r){const i=kg(e);if(i===null||!ah(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(l=>{const c=t.bucket,h=t.fullPath,d="/b/"+o(c)+"/o/"+o(h),m=Ar(d,n,r),y=OS({alt:"media",token:l});return m+y})[0]}function Cg(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}/**
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
 */const BS="prefixes",qS="items";function YM(t,e,n){const r={prefixes:[],items:[],nextPageToken:n.nextPageToken};if(n[BS])for(const i of n[BS]){const s=i.replace(/\/$/,""),o=t._makeStorageReference(new it(e,s));r.prefixes.push(o)}if(n[qS])for(const i of n[qS]){const s=t._makeStorageReference(new it(e,i.name));r.items.push(s)}return r}function XM(t,e,n){const r=kg(n);return r===null?null:YM(t,e,r)}class $n{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yn(t){if(!t)throw Ig()}function hh(t,e){function n(r,i){const s=VS(t,i,e);return yn(s!==null),s}return n}function JM(t,e){function n(r,i){const s=XM(t,e,i);return yn(s!==null),s}return n}function ZM(t,e){function n(r,i){const s=VS(t,i,e);return yn(s!==null),QM(s,i,t.host,t._protocol)}return n}function no(t){function e(n,r){let i;return n.getStatus()===401?n.getResponseText().includes("Firebase App Check token is invalid")?i=dM():i=hM():n.getStatus()===402?i=cM(t.bucket):n.getStatus()===403?i=fM(t.path):i=r,i.serverResponse=r.serverResponse,i}return e}function dh(t){const e=no(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=lM(t.path)),s.serverResponse=i.serverResponse,s}return n}function jS(t,e,n){const r=e.fullServerUrl(),i=Ar(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new $n(i,s,hh(t,n),o);return a.errorHandler=dh(e),a}function eU(t,e,n,r,i){const s={};e.isRoot?s.prefix="":s.prefix=e.path+"/",n&&n.length>0&&(s.delimiter=n),r&&(s.pageToken=r),i&&(s.maxResults=i);const o=e.bucketOnlyServerUrl(),a=Ar(o,t.host,t._protocol),u="GET",l=t.maxOperationRetryTime,c=new $n(a,u,JM(t,e.bucket),l);return c.urlParams=s,c.errorHandler=no(e),c}function tU(t,e,n){const r=e.fullServerUrl(),i=Ar(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new $n(i,s,ZM(t,n),o);return a.errorHandler=dh(e),a}function nU(t,e,n,r){const i=e.fullServerUrl(),s=Ar(i,t.host,t._protocol),o="PATCH",a=Cg(n,r),u={"Content-Type":"application/json; charset=utf-8"},l=t.maxOperationRetryTime,c=new $n(s,o,hh(t,r),l);return c.headers=u,c.body=a,c.errorHandler=dh(e),c}function rU(t,e){const n=e.fullServerUrl(),r=Ar(n,t.host,t._protocol),i="DELETE",s=t.maxOperationRetryTime;function o(u,l){}const a=new $n(r,i,o,s);return a.successCodes=[200,204],a.errorHandler=dh(e),a}function iU(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function zS(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=iU(null,e)),r}function sU(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let v="";for(let w=0;w<2;w++)v=v+Math.random().toString().slice(2);return v}const u=a();o["Content-Type"]="multipart/related; boundary="+u;const l=zS(e,r,i),c=Cg(l,n),h="--"+u+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+c+`\r
--`+u+`\r
Content-Type: `+l.contentType+`\r
\r
`,d=`\r
--`+u+"--",m=Un.getBlob(h,r,d);if(m===null)throw AS();const y={name:l.fullPath},I=Ar(s,t.host,t._protocol),p="POST",f=t.maxUploadRetryTime,g=new $n(I,p,hh(t,n),f);return g.urlParams=y,g.headers=o,g.body=m.uploadData(),g.errorHandler=no(e),g}class fh{constructor(e,n,r,i){this.current=e,this.total=n,this.finalized=!!r,this.metadata=i||null}}function Ng(t,e){let n=null;try{n=t.getResponseHeader("X-Goog-Upload-Status")}catch{yn(!1)}return yn(!!n&&(e||["active"]).indexOf(n)!==-1),n}function oU(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o=zS(e,r,i),a={name:o.fullPath},u=Ar(s,t.host,t._protocol),l="POST",c={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${r.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},h=Cg(o,n),d=t.maxUploadRetryTime;function m(I){Ng(I);let p;try{p=I.getResponseHeader("X-Goog-Upload-URL")}catch{yn(!1)}return yn(ah(p)),p}const y=new $n(u,l,m,d);return y.urlParams=a,y.headers=c,y.body=h,y.errorHandler=no(e),y}function aU(t,e,n,r){const i={"X-Goog-Upload-Command":"query"};function s(l){const c=Ng(l,["active","final"]);let h=null;try{h=l.getResponseHeader("X-Goog-Upload-Size-Received")}catch{yn(!1)}h||yn(!1);const d=Number(h);return yn(!isNaN(d)),new fh(d,r.size(),c==="final")}const o="POST",a=t.maxUploadRetryTime,u=new $n(n,o,s,a);return u.headers=i,u.errorHandler=no(e),u}const HS=256*1024;function uU(t,e,n,r,i,s,o,a){const u=new fh(0,0);if(o?(u.current=o.current,u.total=o.total):(u.current=0,u.total=r.size()),r.size()!==u.total)throw vM();const l=u.total-u.current;let c=l;i>0&&(c=Math.min(c,i));const h=u.current,d=h+c,y={"X-Goog-Upload-Command":c===l?"upload, finalize":"upload","X-Goog-Upload-Offset":`${u.current}`},I=r.slice(h,d);if(I===null)throw AS();function p(w,O){const S=Ng(w,["active","final"]),U=u.current+c,$=r.size();let x;return S==="final"?x=hh(e,s)(w,O):x=null,new fh(U,$,S==="final",x)}const f="POST",g=e.maxUploadRetryTime,v=new $n(n,f,p,g);return v.headers=y,v.body=I.uploadData(),v.progressCallback=a||null,v.errorHandler=no(t),v}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lU={STATE_CHANGED:"state_changed"},pt={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function Rg(t){switch(t){case"running":case"pausing":case"canceling":return pt.RUNNING;case"paused":return pt.PAUSED;case"success":return pt.SUCCESS;case"canceled":return pt.CANCELED;case"error":return pt.ERROR;default:return pt.ERROR}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cU{constructor(e,n,r){if(NM(e)||n!=null||r!=null)this.next=e,this.error=n!=null?n:void 0,this.complete=r!=null?r:void 0;else{const s=e;this.next=s.next,this.error=s.error,this.complete=s.complete}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ro(t){return(...e)=>{Promise.resolve().then(()=>t(...e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WS{constructor(e,n,r=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=n,this._metadata=r,this._mappings=ch(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=i=>{this._request=void 0,this._chunkMultiplier=1,i._codeEquals("canceled")?(this._needToFetchStatus=!0,this.completeTransitions_()):(this._error=i,this._transition("error"))},this._metadataErrorHandler=i=>{this._request=void 0,i._codeEquals("canceled")?this.completeTransitions_():(this._error=i,this._transition("error"))},this._promise=new Promise((i,s)=>{this._resolve=i,this._reject=s,this._start()}),this._promise.then(null,()=>{})}_makeProgressCallback(){const e=this._transferred;return n=>this._updateProgress(e+n)}_shouldDoResumable(e){return e.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this._continueUpload():this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([n,r])=>{switch(this._state){case"running":e(n,r);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,n)=>{const r=oU(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._uploadUrl=s,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((n,r)=>{const i=aU(this._ref.storage,this._ref._location,e,this._blob),s=this._ref.storage._makeRequest(i,n,r);this._request=s,s.getPromise().then(o=>{o=o,this._request=void 0,this._updateProgress(o.current),this._needToFetchStatus=!1,o.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=HS*this._chunkMultiplier,n=new fh(this._transferred,this._blob.size()),r=this._uploadUrl;this._resolveToken((i,s)=>{let o;try{o=uU(this._ref._location,this._ref.storage,r,this._blob,e,this._mappings,n,this._makeProgressCallback())}catch(u){this._error=u,this._transition("error");return}const a=this._ref.storage._makeRequest(o,i,s);this._request=a,a.getPromise().then(u=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(u.current),u.finalized?(this._metadata=u.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){HS*this._chunkMultiplier<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,n)=>{const r=jS(this._ref.storage,this._ref._location,this._mappings),i=this._ref.storage._makeRequest(r,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._metadata=s,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,n)=>{const r=sU(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._metadata=s,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const n=this._transferred;this._transferred=e,this._transferred!==n&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":this._state=e,this._request!==void 0&&this._request.cancel();break;case"pausing":this._state=e,this._request!==void 0&&this._request.cancel();break;case"running":const n=this._state==="paused";this._state=e,n&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=bS(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=Rg(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,n,r,i){const s=new cU(n||void 0,r||void 0,i||void 0);return this._addObserver(s),()=>{this._removeObserver(s)}}then(e,n){return this._promise.then(e,n)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const n=this._observers.indexOf(e);n!==-1&&this._observers.splice(n,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(n=>{this._notifyObserver(n)})}_finishPromise(){if(this._resolve!==void 0){let e=!0;switch(Rg(this._state)){case pt.SUCCESS:ro(this._resolve.bind(null,this.snapshot))();break;case pt.CANCELED:case pt.ERROR:const n=this._reject;ro(n.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(Rg(this._state)){case pt.RUNNING:case pt.PAUSED:e.next&&ro(e.next.bind(e,this.snapshot))();break;case pt.SUCCESS:e.complete&&ro(e.complete.bind(e))();break;case pt.CANCELED:case pt.ERROR:e.error&&ro(e.error.bind(e,this._error))();break;default:e.error&&ro(e.error.bind(e,this._error))()}}resume(){const e=this._state==="paused"||this._state==="pausing";return e&&this._transition("running"),e}pause(){const e=this._state==="running";return e&&this._transition("pausing"),e}cancel(){const e=this._state==="running"||this._state==="pausing";return e&&this._transition("canceling"),e}}/**
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
 */class bi{constructor(e,n){this._service=e,n instanceof it?this._location=n:this._location=it.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new bi(e,n)}get root(){const e=new it(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return FS(this._location.path)}get storage(){return this._service}get parent(){const e=jM(this._location.path);if(e===null)return null;const n=new it(this._location.bucket,e);return new bi(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw DS(e)}}function hU(t,e,n){return t._throwIfRoot("uploadBytesResumable"),new WS(t,new Un(e),n)}function dU(t){const e={prefixes:[],items:[]};return KS(t,e).then(()=>e)}async function KS(t,e,n){const i=await GS(t,{pageToken:n});e.prefixes.push(...i.prefixes),e.items.push(...i.items),i.nextPageToken!=null&&await KS(t,e,i.nextPageToken)}async function GS(t,e){e!=null&&typeof e.maxResults=="number"&&Tg("options.maxResults",1,1e3,e.maxResults);const n=e||{},r=eU(t.storage,t._location,"/",n.pageToken,n.maxResults);return(await t.storage.makeRequestWithTokens(r)).getPromise()}async function fU(t){t._throwIfRoot("getMetadata");const e=jS(t.storage,t._location,ch());return(await t.storage.makeRequestWithTokens(e)).getPromise()}async function pU(t,e){t._throwIfRoot("updateMetadata");const n=nU(t.storage,t._location,e,ch());return(await t.storage.makeRequestWithTokens(n)).getPromise()}async function mU(t){t._throwIfRoot("getDownloadURL");const e=tU(t.storage,t._location,ch());return(await t.storage.makeRequestWithTokens(e)).getPromise().then(n=>{if(n===null)throw wM();return n})}async function gU(t){t._throwIfRoot("deleteObject");const e=rU(t.storage,t._location);return(await t.storage.makeRequestWithTokens(e)).getPromise()}function QS(t,e){const n=zM(t._location.path,e),r=new it(t._location.bucket,n);return new bi(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yU(t){return/^[A-Za-z]+:\/\//.test(t)}function vU(t,e){return new bi(t,e)}function YS(t,e){if(t instanceof bg){const n=t;if(n._bucket==null)throw yM();const r=new bi(n,n._bucket);return e!=null?YS(r,e):r}else return e!==void 0?QS(t,e):t}function wU(t,e){if(e&&yU(e)){if(t instanceof bg)return vU(t,e);throw to("To use ref(service, url), the first argument must be a Storage instance.")}else return YS(t,e)}function XS(t,e){const n=e==null?void 0:e[RS];return n==null?null:it.makeFromBucketSpec(n,t)}function _U(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:zw(i,t.app.options.projectId))}class bg{constructor(e,n,r,i,s,o){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._pool=i,this._url=s,this._firebaseVersion=o,this._bucket=null,this._host=NS,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=aM,this._maxUploadRetryTime=uM,this._requests=new Set,s!=null?this._bucket=it.makeFromBucketSpec(s,this._host):this._bucket=XS(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=it.makeFromBucketSpec(this._url,e):this._bucket=XS(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Tg("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Tg("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new bi(this,e)}_makeRequest(e,n,r){if(this._deleted)return new TM(PS());{const i=OM(e,this._appId,n,r,this._pool,this._firebaseVersion);return this._requests.add(i),i.getPromise().then(()=>this._requests.delete(i),()=>this._requests.delete(i)),i}}async makeRequestWithTokens(e){const[n,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r)}}const JS="@firebase/storage",ZS="0.8.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IU="storage";function EU(t,e,n){return t=D(t),hU(t,e,n)}function TU(t){return t=D(t),fU(t)}function SU(t,e){return t=D(t),pU(t,e)}function kU(t,e){return t=D(t),GS(t,e)}function CU(t){return t=D(t),dU(t)}function NU(t){return t=D(t),mU(t)}function RU(t){return t=D(t),gU(t)}function e1(t,e){return t=D(t),wU(t,e)}function bU(t,e){return QS(t,e)}function AU(t,e,n,r={}){_U(t,e,n,r)}function PU(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new bg(n,r,i,new EM,e,lr)}function DU(){ur(new Gt(IU,PU,"PUBLIC").setMultipleInstances(!0)),Ft(JS,ZS,""),Ft(JS,ZS,"esm2017")}DU();/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ph{constructor(e,n,r){this._delegate=e,this.task=n,this.ref=r}get bytesTransferred(){return this._delegate.bytesTransferred}get metadata(){return this._delegate.metadata}get state(){return this._delegate.state}get totalBytes(){return this._delegate.totalBytes}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t1{constructor(e,n){this._delegate=e,this._ref=n,this.cancel=this._delegate.cancel.bind(this._delegate),this.catch=this._delegate.catch.bind(this._delegate),this.pause=this._delegate.pause.bind(this._delegate),this.resume=this._delegate.resume.bind(this._delegate)}get snapshot(){return new ph(this._delegate.snapshot,this,this._ref)}then(e,n){return this._delegate.then(r=>{if(e)return e(new ph(r,this,this._ref))},n)}on(e,n,r,i){let s;return n&&(typeof n=="function"?s=o=>n(new ph(o,this,this._ref)):s={next:n.next?o=>n.next(new ph(o,this,this._ref)):void 0,complete:n.complete||void 0,error:n.error||void 0}),this._delegate.on(e,s,r||void 0,i||void 0)}}class n1{constructor(e,n){this._delegate=e,this._service=n}get prefixes(){return this._delegate.prefixes.map(e=>new Fn(e,this._service))}get items(){return this._delegate.items.map(e=>new Fn(e,this._service))}get nextPageToken(){return this._delegate.nextPageToken||null}}/**
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
 */class Fn{constructor(e,n){this._delegate=e,this.storage=n}get name(){return this._delegate.name}get bucket(){return this._delegate.bucket}get fullPath(){return this._delegate.fullPath}toString(){return this._delegate.toString()}child(e){const n=bU(this._delegate,e);return new Fn(n,this.storage)}get root(){return new Fn(this._delegate.root,this.storage)}get parent(){const e=this._delegate.parent;return e==null?null:new Fn(e,this.storage)}put(e,n){return this._throwIfRoot("put"),new t1(EU(this._delegate,e,n),this)}putString(e,n=zt.RAW,r){this._throwIfRoot("putString");const i=LS(n,e),s=Object.assign({},r);return s.contentType==null&&i.contentType!=null&&(s.contentType=i.contentType),new t1(new WS(this._delegate,new Un(i.data,!0),s),this)}listAll(){return CU(this._delegate).then(e=>new n1(e,this.storage))}list(e){return kU(this._delegate,e||void 0).then(n=>new n1(n,this.storage))}getMetadata(){return TU(this._delegate)}updateMetadata(e){return SU(this._delegate,e)}getDownloadURL(){return NU(this._delegate)}delete(){return this._throwIfRoot("delete"),RU(this._delegate)}_throwIfRoot(e){if(this._delegate._location.path==="")throw DS(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r1{constructor(e,n){this.app=e,this._delegate=n}get maxOperationRetryTime(){return this._delegate.maxOperationRetryTime}get maxUploadRetryTime(){return this._delegate.maxUploadRetryTime}ref(e){if(i1(e))throw to("ref() expected a child path but got a URL, use refFromURL instead.");return new Fn(e1(this._delegate,e),this)}refFromURL(e){if(!i1(e))throw to("refFromURL() expected a full URL but got a child path, use ref() instead.");try{it.makeFromUrl(e,this._delegate.host)}catch{throw to("refFromUrl() expected a valid full URL but got an invalid one.")}return new Fn(e1(this._delegate,e),this)}setMaxUploadRetryTime(e){this._delegate.maxUploadRetryTime=e}setMaxOperationRetryTime(e){this._delegate.maxOperationRetryTime=e}useEmulator(e,n,r={}){AU(this._delegate,e,n,r)}}function i1(t){return/^[A-Za-z]+:\/\//.test(t)}const xU="@firebase/storage-compat",OU="0.1.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LU="storage-compat";function MU(t,{instanceIdentifier:e}){const n=t.getProvider("app-compat").getImmediate(),r=t.getProvider("storage").getImmediate({identifier:e});return new r1(n,r)}function UU(t){const e={TaskState:pt,TaskEvent:lU,StringFormat:zt,Storage:r1,Reference:Fn};t.INTERNAL.registerComponent(new Gt(LU,MU,"PUBLIC").setServiceProps(e).setMultipleInstances(!0)),t.registerVersion(xU,OU)}UU(ls);export{FU as A,Or as R,$U as a,ls as f,wh as r};
