var ai={exports:{}},ee={};/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var My=Object.getOwnPropertySymbols,Nk=Object.prototype.hasOwnProperty,Pk=Object.prototype.propertyIsEnumerable;function xk(t){if(t==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}function Dk(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de",Object.getOwnPropertyNames(t)[0]==="5")return!1;for(var e={},n=0;n<10;n++)e["_"+String.fromCharCode(n)]=n;var r=Object.getOwnPropertyNames(e).map(function(s){return e[s]});if(r.join("")!=="0123456789")return!1;var i={};return"abcdefghijklmnopqrst".split("").forEach(function(s){i[s]=s}),Object.keys(Object.assign({},i)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}var $y=Dk()?Object.assign:function(t,e){for(var n,r=xk(t),i,s=1;s<arguments.length;s++){n=Object(arguments[s]);for(var o in n)Nk.call(n,o)&&(r[o]=n[o]);if(My){i=My(n);for(var a=0;a<i.length;a++)Pk.call(n,i[a])&&(r[i[a]]=n[i[a]])}}return r};/** @license React v17.0.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dd=$y,rs=60103,Uy=60106;ee.Fragment=60107;ee.StrictMode=60108;ee.Profiler=60114;var Fy=60109,Vy=60110,By=60112;ee.Suspense=60113;var jy=60115,zy=60116;if(typeof Symbol=="function"&&Symbol.for){var yn=Symbol.for;rs=yn("react.element"),Uy=yn("react.portal"),ee.Fragment=yn("react.fragment"),ee.StrictMode=yn("react.strict_mode"),ee.Profiler=yn("react.profiler"),Fy=yn("react.provider"),Vy=yn("react.context"),By=yn("react.forward_ref"),ee.Suspense=yn("react.suspense"),jy=yn("react.memo"),zy=yn("react.lazy")}var qy=typeof Symbol=="function"&&Symbol.iterator;function Ok(t){return t===null||typeof t!="object"?null:(t=qy&&t[qy]||t["@@iterator"],typeof t=="function"?t:null)}function Mo(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Hy={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Wy={};function is(t,e,n){this.props=t,this.context=e,this.refs=Wy,this.updater=n||Hy}is.prototype.isReactComponent={};is.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error(Mo(85));this.updater.enqueueSetState(this,t,e,"setState")};is.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Gy(){}Gy.prototype=is.prototype;function fd(t,e,n){this.props=t,this.context=e,this.refs=Wy,this.updater=n||Hy}var pd=fd.prototype=new Gy;pd.constructor=fd;dd(pd,is.prototype);pd.isPureReactComponent=!0;var md={current:null},Ky=Object.prototype.hasOwnProperty,Qy={key:!0,ref:!0,__self:!0,__source:!0};function Yy(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Ky.call(e,r)&&!Qy.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var u=Array(a),l=0;l<a;l++)u[l]=arguments[l+2];i.children=u}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:rs,type:t,key:s,ref:o,props:i,_owner:md.current}}function Lk(t,e){return{$$typeof:rs,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function gd(t){return typeof t=="object"&&t!==null&&t.$$typeof===rs}function Mk(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Xy=/\/+/g;function yd(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Mk(""+t.key):e.toString(36)}function Qu(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case rs:case Uy:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+yd(o,0):r,Array.isArray(i)?(n="",t!=null&&(n=t.replace(Xy,"$&/")+"/"),Qu(i,e,n,"",function(l){return l})):i!=null&&(gd(i)&&(i=Lk(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Xy,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Array.isArray(t))for(var a=0;a<t.length;a++){s=t[a];var u=r+yd(s,a);o+=Qu(s,e,n,u,i)}else if(u=Ok(t),typeof u=="function")for(t=u.call(t),a=0;!(s=t.next()).done;)s=s.value,u=r+yd(s,a++),o+=Qu(s,e,n,u,i);else if(s==="object")throw e=""+t,Error(Mo(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e));return o}function Yu(t,e,n){if(t==null)return t;var r=[],i=0;return Qu(t,r,"","",function(s){return e.call(n,s,i++)}),r}function $k(t){if(t._status===-1){var e=t._result;e=e(),t._status=0,t._result=e,e.then(function(n){t._status===0&&(n=n.default,t._status=1,t._result=n)},function(n){t._status===0&&(t._status=2,t._result=n)})}if(t._status===1)return t._result;throw t._result}var Jy={current:null};function Hn(){var t=Jy.current;if(t===null)throw Error(Mo(321));return t}var Uk={ReactCurrentDispatcher:Jy,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:md,IsSomeRendererActing:{current:!1},assign:dd};ee.Children={map:Yu,forEach:function(t,e,n){Yu(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Yu(t,function(){e++}),e},toArray:function(t){return Yu(t,function(e){return e})||[]},only:function(t){if(!gd(t))throw Error(Mo(143));return t}};ee.Component=is;ee.PureComponent=fd;ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Uk;ee.cloneElement=function(t,e,n){if(t==null)throw Error(Mo(267,t));var r=dd({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=md.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(u in e)Ky.call(e,u)&&!Qy.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&a!==void 0?a[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var l=0;l<u;l++)a[l]=arguments[l+2];r.children=a}return{$$typeof:rs,type:t.type,key:i,ref:s,props:r,_owner:o}};ee.createContext=function(t,e){return e===void 0&&(e=null),t={$$typeof:Vy,_calculateChangedBits:e,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null},t.Provider={$$typeof:Fy,_context:t},t.Consumer=t};ee.createElement=Yy;ee.createFactory=function(t){var e=Yy.bind(null,t);return e.type=t,e};ee.createRef=function(){return{current:null}};ee.forwardRef=function(t){return{$$typeof:By,render:t}};ee.isValidElement=gd;ee.lazy=function(t){return{$$typeof:zy,_payload:{_status:-1,_result:t},_init:$k}};ee.memo=function(t,e){return{$$typeof:jy,type:t,compare:e===void 0?null:e}};ee.useCallback=function(t,e){return Hn().useCallback(t,e)};ee.useContext=function(t,e){return Hn().useContext(t,e)};ee.useDebugValue=function(){};ee.useEffect=function(t,e){return Hn().useEffect(t,e)};ee.useImperativeHandle=function(t,e,n){return Hn().useImperativeHandle(t,e,n)};ee.useLayoutEffect=function(t,e){return Hn().useLayoutEffect(t,e)};ee.useMemo=function(t,e){return Hn().useMemo(t,e)};ee.useReducer=function(t,e,n){return Hn().useReducer(t,e,n)};ee.useRef=function(t){return Hn().useRef(t)};ee.useState=function(t){return Hn().useState(t)};ee.version="17.0.2";ai.exports=ee;var Xu=ai.exports,Zy={exports:{}},nn={},ev={exports:{}},tv={};/** @license React v0.20.2
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){var e,n,r,i;if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}if(typeof window=="undefined"||typeof MessageChannel!="function"){var u=null,l=null,c=function(){if(u!==null)try{var O=t.unstable_now();u(!0,O),u=null}catch(S){throw setTimeout(c,0),S}};e=function(O){u!==null?setTimeout(e,0,O):(u=O,setTimeout(c,0))},n=function(O,S){l=setTimeout(O,S)},r=function(){clearTimeout(l)},t.unstable_shouldYield=function(){return!1},i=t.unstable_forceFrameRate=function(){}}else{var h=window.setTimeout,d=window.clearTimeout;if(typeof console!="undefined"){var g=window.cancelAnimationFrame;typeof window.requestAnimationFrame!="function"&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"),typeof g!="function"&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills")}var y=!1,_=null,f=-1,p=5,m=0;t.unstable_shouldYield=function(){return t.unstable_now()>=m},i=function(){},t.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):p=0<O?Math.floor(1e3/O):5};var w=new MessageChannel,v=w.port2;w.port1.onmessage=function(){if(_!==null){var O=t.unstable_now();m=O+p;try{_(!0,O)?v.postMessage(null):(y=!1,_=null)}catch(S){throw v.postMessage(null),S}}else y=!1},e=function(O){_=O,y||(y=!0,v.postMessage(null))},n=function(O,S){f=h(function(){O(t.unstable_now())},S)},r=function(){d(f),f=-1}}function P(O,S){var k=O.length;O.push(S);e:for(;;){var D=k-1>>>1,z=O[D];if(z!==void 0&&0<F(z,S))O[D]=S,O[k]=z,k=D;else break e}}function b(O){return O=O[0],O===void 0?null:O}function V(O){var S=O[0];if(S!==void 0){var k=O.pop();if(k!==S){O[0]=k;e:for(var D=0,z=O.length;D<z;){var I=2*(D+1)-1,X=O[I],x=I+1,ae=O[x];if(X!==void 0&&0>F(X,k))ae!==void 0&&0>F(ae,X)?(O[D]=ae,O[x]=k,D=x):(O[D]=X,O[I]=k,D=I);else if(ae!==void 0&&0>F(ae,k))O[D]=ae,O[x]=k,D=x;else break e}}return S}return null}function F(O,S){var k=O.sortIndex-S.sortIndex;return k!==0?k:O.id-S.id}var M=[],he=[],kn=1,fe=null,de=3,kt=!1,Te=!1,mn=!1;function Ct(O){for(var S=b(he);S!==null;){if(S.callback===null)V(he);else if(S.startTime<=O)V(he),S.sortIndex=S.expirationTime,P(M,S);else break;S=b(he)}}function pt(O){if(mn=!1,Ct(O),!Te)if(b(M)!==null)Te=!0,e(qn);else{var S=b(he);S!==null&&n(pt,S.startTime-O)}}function qn(O,S){Te=!1,mn&&(mn=!1,r()),kt=!0;var k=de;try{for(Ct(S),fe=b(M);fe!==null&&(!(fe.expirationTime>S)||O&&!t.unstable_shouldYield());){var D=fe.callback;if(typeof D=="function"){fe.callback=null,de=fe.priorityLevel;var z=D(fe.expirationTime<=S);S=t.unstable_now(),typeof z=="function"?fe.callback=z:fe===b(M)&&V(M),Ct(S)}else V(M);fe=b(M)}if(fe!==null)var I=!0;else{var X=b(he);X!==null&&n(pt,X.startTime-S),I=!1}return I}finally{fe=null,de=k,kt=!1}}var pr=i;t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(O){O.callback=null},t.unstable_continueExecution=function(){Te||kt||(Te=!0,e(qn))},t.unstable_getCurrentPriorityLevel=function(){return de},t.unstable_getFirstCallbackNode=function(){return b(M)},t.unstable_next=function(O){switch(de){case 1:case 2:case 3:var S=3;break;default:S=de}var k=de;de=S;try{return O()}finally{de=k}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=pr,t.unstable_runWithPriority=function(O,S){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var k=de;de=O;try{return S()}finally{de=k}},t.unstable_scheduleCallback=function(O,S,k){var D=t.unstable_now();switch(typeof k=="object"&&k!==null?(k=k.delay,k=typeof k=="number"&&0<k?D+k:D):k=D,O){case 1:var z=-1;break;case 2:z=250;break;case 5:z=1073741823;break;case 4:z=1e4;break;default:z=5e3}return z=k+z,O={id:kn++,callback:S,priorityLevel:O,startTime:k,expirationTime:z,sortIndex:-1},k>D?(O.sortIndex=k,P(he,O),b(M)===null&&O===b(he)&&(mn?r():mn=!0,n(pt,k-D))):(O.sortIndex=z,P(M,O),Te||kt||(Te=!0,e(qn))),O},t.unstable_wrapCallback=function(O){var S=de;return function(){var k=de;de=S;try{return O.apply(this,arguments)}finally{de=k}}}})(tv);ev.exports=tv;/** @license React v17.0.2
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ju=ai.exports,_e=$y,Be=ev.exports;function R(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}if(!Ju)throw Error(R(227));var nv=new Set,$o={};function ui(t,e){ss(t,e),ss(t+"Capture",e)}function ss(t,e){for($o[t]=e,t=0;t<e.length;t++)nv.add(e[t])}var Wn=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"),Fk=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,rv=Object.prototype.hasOwnProperty,iv={},sv={};function Vk(t){return rv.call(sv,t)?!0:rv.call(iv,t)?!1:Fk.test(t)?sv[t]=!0:(iv[t]=!0,!1)}function Bk(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function jk(t,e,n,r){if(e===null||typeof e=="undefined"||Bk(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function bt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var nt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){nt[t]=new bt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];nt[e]=new bt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){nt[t]=new bt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){nt[t]=new bt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){nt[t]=new bt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){nt[t]=new bt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){nt[t]=new bt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){nt[t]=new bt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){nt[t]=new bt(t,5,!1,t.toLowerCase(),null,!1,!1)});var vd=/[\-:]([a-z])/g;function wd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(vd,wd);nt[e]=new bt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(vd,wd);nt[e]=new bt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(vd,wd);nt[e]=new bt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){nt[t]=new bt(t,1,!1,t.toLowerCase(),null,!1,!1)});nt.xlinkHref=new bt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){nt[t]=new bt(t,1,!1,t.toLowerCase(),null,!0,!0)});function _d(t,e,n,r){var i=nt.hasOwnProperty(e)?nt[e]:null,s=i!==null?i.type===0:r?!1:!(!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N");s||(jk(e,n,i,r)&&(n=null),r||i===null?Vk(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var li=Ju.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Uo=60103,ci=60106,gr=60107,Id=60108,Fo=60114,Ed=60109,Td=60110,Zu=60112,Vo=60113,el=60120,tl=60115,Sd=60116,kd=60121,Cd=60128,ov=60129,bd=60130,Ad=60131;if(typeof Symbol=="function"&&Symbol.for){var je=Symbol.for;Uo=je("react.element"),ci=je("react.portal"),gr=je("react.fragment"),Id=je("react.strict_mode"),Fo=je("react.profiler"),Ed=je("react.provider"),Td=je("react.context"),Zu=je("react.forward_ref"),Vo=je("react.suspense"),el=je("react.suspense_list"),tl=je("react.memo"),Sd=je("react.lazy"),kd=je("react.block"),je("react.scope"),Cd=je("react.opaque.id"),ov=je("react.debug_trace_mode"),bd=je("react.offscreen"),Ad=je("react.legacy_hidden")}var av=typeof Symbol=="function"&&Symbol.iterator;function Bo(t){return t===null||typeof t!="object"?null:(t=av&&t[av]||t["@@iterator"],typeof t=="function"?t:null)}var Rd;function jo(t){if(Rd===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Rd=e&&e[1]||""}return`
`+Rd+t}var Nd=!1;function nl(t,e){if(!t||Nd)return"";Nd=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a])return`
`+i[o].replace(" at new "," at ");while(1<=o&&0<=a);break}}}finally{Nd=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?jo(t):""}function zk(t){switch(t.tag){case 5:return jo(t.type);case 16:return jo("Lazy");case 13:return jo("Suspense");case 19:return jo("SuspenseList");case 0:case 2:case 15:return t=nl(t.type,!1),t;case 11:return t=nl(t.type.render,!1),t;case 22:return t=nl(t.type._render,!1),t;case 1:return t=nl(t.type,!0),t;default:return""}}function os(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case gr:return"Fragment";case ci:return"Portal";case Fo:return"Profiler";case Id:return"StrictMode";case Vo:return"Suspense";case el:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Td:return(t.displayName||"Context")+".Consumer";case Ed:return(t._context.displayName||"Context")+".Provider";case Zu:var e=t.render;return e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case tl:return os(t.type);case kd:return os(t._render);case Sd:e=t._payload,t=t._init;try{return os(t(e))}catch{}}return null}function yr(t){switch(typeof t){case"boolean":case"number":case"object":case"string":case"undefined":return t;default:return""}}function uv(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function qk(t){var e=uv(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n!="undefined"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function rl(t){t._valueTracker||(t._valueTracker=qk(t))}function lv(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=uv(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function il(t){if(t=t||(typeof document!="undefined"?document:void 0),typeof t=="undefined")return null;try{return t.activeElement||t.body}catch{return t.body}}function Pd(t,e){var n=e.checked;return _e({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:t._wrapperState.initialChecked})}function cv(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=yr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function hv(t,e){e=e.checked,e!=null&&_d(t,"checked",e,!1)}function xd(t,e){hv(t,e);var n=yr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Dd(t,e.type,n):e.hasOwnProperty("defaultValue")&&Dd(t,e.type,yr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function dv(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Dd(t,e,n){(e!=="number"||il(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}function Hk(t){var e="";return Ju.Children.forEach(t,function(n){n!=null&&(e+=n)}),e}function Od(t,e){return t=_e({children:void 0},e),(e=Hk(e.children))&&(t.children=e),t}function as(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+yr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Ld(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(R(91));return _e({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function fv(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(R(92));if(Array.isArray(n)){if(!(1>=n.length))throw Error(R(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:yr(n)}}function pv(t,e){var n=yr(e.value),r=yr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function mv(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}var Md={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};function gv(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function $d(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?gv(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var sl,yv=function(t){return typeof MSApp!="undefined"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!==Md.svg||"innerHTML"in t)t.innerHTML=e;else{for(sl=sl||document.createElement("div"),sl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=sl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function zo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var qo={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Wk=["Webkit","ms","Moz","O"];Object.keys(qo).forEach(function(t){Wk.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),qo[e]=qo[t]})});function vv(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||qo.hasOwnProperty(t)&&qo[t]?(""+e).trim():e+"px"}function wv(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=vv(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var Gk=_e({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ud(t,e){if(e){if(Gk[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(R(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(R(60));if(!(typeof e.dangerouslySetInnerHTML=="object"&&"__html"in e.dangerouslySetInnerHTML))throw Error(R(61))}if(e.style!=null&&typeof e.style!="object")throw Error(R(62))}}function Fd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}function Vd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Bd=null,us=null,ls=null;function _v(t){if(t=la(t)){if(typeof Bd!="function")throw Error(R(280));var e=t.stateNode;e&&(e=Tl(e),Bd(t.stateNode,t.type,e))}}function Iv(t){us?ls?ls.push(t):ls=[t]:us=t}function Ev(){if(us){var t=us,e=ls;if(ls=us=null,_v(t),e)for(t=0;t<e.length;t++)_v(e[t])}}function jd(t,e){return t(e)}function Tv(t,e,n,r,i){return t(e,n,r,i)}function zd(){}var Sv=jd,hi=!1,qd=!1;function Hd(){(us!==null||ls!==null)&&(zd(),Ev())}function Kk(t,e,n){if(qd)return t(e,n);qd=!0;try{return Sv(t,e,n)}finally{qd=!1,Hd()}}function Ho(t,e){var n=t.stateNode;if(n===null)return null;var r=Tl(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(R(231,e,typeof n));return n}var Wd=!1;if(Wn)try{var Wo={};Object.defineProperty(Wo,"passive",{get:function(){Wd=!0}}),window.addEventListener("test",Wo,Wo),window.removeEventListener("test",Wo,Wo)}catch{Wd=!1}function Qk(t,e,n,r,i,s,o,a,u){var l=Array.prototype.slice.call(arguments,3);try{e.apply(n,l)}catch(c){this.onError(c)}}var Go=!1,ol=null,al=!1,Gd=null,Yk={onError:function(t){Go=!0,ol=t}};function Xk(t,e,n,r,i,s,o,a,u){Go=!1,ol=null,Qk.apply(Yk,arguments)}function Jk(t,e,n,r,i,s,o,a,u){if(Xk.apply(this,arguments),Go){if(Go){var l=ol;Go=!1,ol=null}else throw Error(R(198));al||(al=!0,Gd=l)}}function di(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&1026)!=0&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function kv(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Cv(t){if(di(t)!==t)throw Error(R(188))}function Zk(t){var e=t.alternate;if(!e){if(e=di(t),e===null)throw Error(R(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Cv(i),t;if(s===r)return Cv(i),e;s=s.sibling}throw Error(R(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(R(189))}}if(n.alternate!==r)throw Error(R(190))}if(n.tag!==3)throw Error(R(188));return n.stateNode.current===n?t:e}function bv(t){if(t=Zk(t),!t)return null;for(var e=t;;){if(e.tag===5||e.tag===6)return e;if(e.child)e.child.return=e,e=e.child;else{if(e===t)break;for(;!e.sibling;){if(!e.return||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}}return null}function Av(t,e){for(var n=t.alternate;e!==null;){if(e===t||e===n)return!0;e=e.return}return!1}var Rv,Kd,Nv,Pv,Qd=!1,Cn=[],vr=null,wr=null,_r=null,Ko=new Map,Qo=new Map,Yo=[],xv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Yd(t,e,n,r,i){return{blockedOn:t,domEventName:e,eventSystemFlags:n|16,nativeEvent:i,targetContainers:[r]}}function Dv(t,e){switch(t){case"focusin":case"focusout":vr=null;break;case"dragenter":case"dragleave":wr=null;break;case"mouseover":case"mouseout":_r=null;break;case"pointerover":case"pointerout":Ko.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Qo.delete(e.pointerId)}}function Xo(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t=Yd(e,n,r,i,s),e!==null&&(e=la(e),e!==null&&Kd(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function eC(t,e,n,r,i){switch(e){case"focusin":return vr=Xo(vr,t,e,n,r,i),!0;case"dragenter":return wr=Xo(wr,t,e,n,r,i),!0;case"mouseover":return _r=Xo(_r,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Ko.set(s,Xo(Ko.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Qo.set(s,Xo(Qo.get(s)||null,t,e,n,r,i)),!0}return!1}function tC(t){var e=fi(t.target);if(e!==null){var n=di(e);if(n!==null){if(e=n.tag,e===13){if(e=kv(n),e!==null){t.blockedOn=e,Pv(t.lanePriority,function(){Be.unstable_runWithPriority(t.priority,function(){Nv(n)})});return}}else if(e===3&&n.stateNode.hydrate){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ul(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=nf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n!==null)return e=la(n),e!==null&&Kd(e),t.blockedOn=n,!1;e.shift()}return!0}function Ov(t,e,n){ul(t)&&n.delete(e)}function nC(){for(Qd=!1;0<Cn.length;){var t=Cn[0];if(t.blockedOn!==null){t=la(t.blockedOn),t!==null&&Rv(t);break}for(var e=t.targetContainers;0<e.length;){var n=nf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n!==null){t.blockedOn=n;break}e.shift()}t.blockedOn===null&&Cn.shift()}vr!==null&&ul(vr)&&(vr=null),wr!==null&&ul(wr)&&(wr=null),_r!==null&&ul(_r)&&(_r=null),Ko.forEach(Ov),Qo.forEach(Ov)}function Jo(t,e){t.blockedOn===e&&(t.blockedOn=null,Qd||(Qd=!0,Be.unstable_scheduleCallback(Be.unstable_NormalPriority,nC)))}function Lv(t){function e(i){return Jo(i,t)}if(0<Cn.length){Jo(Cn[0],t);for(var n=1;n<Cn.length;n++){var r=Cn[n];r.blockedOn===t&&(r.blockedOn=null)}}for(vr!==null&&Jo(vr,t),wr!==null&&Jo(wr,t),_r!==null&&Jo(_r,t),Ko.forEach(e),Qo.forEach(e),n=0;n<Yo.length;n++)r=Yo[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Yo.length&&(n=Yo[0],n.blockedOn===null);)tC(n),n.blockedOn===null&&Yo.shift()}function ll(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var cs={animationend:ll("Animation","AnimationEnd"),animationiteration:ll("Animation","AnimationIteration"),animationstart:ll("Animation","AnimationStart"),transitionend:ll("Transition","TransitionEnd")},Xd={},Mv={};Wn&&(Mv=document.createElement("div").style,"AnimationEvent"in window||(delete cs.animationend.animation,delete cs.animationiteration.animation,delete cs.animationstart.animation),"TransitionEvent"in window||delete cs.transitionend.transition);function cl(t){if(Xd[t])return Xd[t];if(!cs[t])return t;var e=cs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Mv)return Xd[t]=e[n];return t}var $v=cl("animationend"),Uv=cl("animationiteration"),Fv=cl("animationstart"),Vv=cl("transitionend"),Bv=new Map,Jd=new Map,rC=["abort","abort",$v,"animationEnd",Uv,"animationIteration",Fv,"animationStart","canplay","canPlay","canplaythrough","canPlayThrough","durationchange","durationChange","emptied","emptied","encrypted","encrypted","ended","ended","error","error","gotpointercapture","gotPointerCapture","load","load","loadeddata","loadedData","loadedmetadata","loadedMetadata","loadstart","loadStart","lostpointercapture","lostPointerCapture","playing","playing","progress","progress","seeking","seeking","stalled","stalled","suspend","suspend","timeupdate","timeUpdate",Vv,"transitionEnd","waiting","waiting"];function Zd(t,e){for(var n=0;n<t.length;n+=2){var r=t[n],i=t[n+1];i="on"+(i[0].toUpperCase()+i.slice(1)),Jd.set(r,e),Bv.set(r,i),ui(i,[r])}}var iC=Be.unstable_now;iC();var pe=8;function hs(t){if((1&t)!=0)return pe=15,1;if((2&t)!=0)return pe=14,2;if((4&t)!=0)return pe=13,4;var e=24&t;return e!==0?(pe=12,e):(t&32)!=0?(pe=11,32):(e=192&t,e!==0?(pe=10,e):(t&256)!=0?(pe=9,256):(e=3584&t,e!==0?(pe=8,e):(t&4096)!=0?(pe=7,4096):(e=4186112&t,e!==0?(pe=6,e):(e=62914560&t,e!==0?(pe=5,e):t&67108864?(pe=4,67108864):(t&134217728)!=0?(pe=3,134217728):(e=805306368&t,e!==0?(pe=2,e):(1073741824&t)!=0?(pe=1,1073741824):(pe=8,t))))))}function sC(t){switch(t){case 99:return 15;case 98:return 10;case 97:case 96:return 8;case 95:return 2;default:return 0}}function oC(t){switch(t){case 15:case 14:return 99;case 13:case 12:case 11:case 10:return 98;case 9:case 8:case 7:case 6:case 4:case 5:return 97;case 3:case 2:case 1:return 95;case 0:return 90;default:throw Error(R(358,t))}}function Zo(t,e){var n=t.pendingLanes;if(n===0)return pe=0;var r=0,i=0,s=t.expiredLanes,o=t.suspendedLanes,a=t.pingedLanes;if(s!==0)r=s,i=pe=15;else if(s=n&134217727,s!==0){var u=s&~o;u!==0?(r=hs(u),i=pe):(a&=s,a!==0&&(r=hs(a),i=pe))}else s=n&~o,s!==0?(r=hs(s),i=pe):a!==0&&(r=hs(a),i=pe);if(r===0)return 0;if(r=31-Ir(r),r=n&((0>r?0:1<<r)<<1)-1,e!==0&&e!==r&&(e&o)==0){if(hs(e),i<=pe)return e;pe=i}if(e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Ir(e),i=1<<n,r|=t[n],e&=~i;return r}function jv(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function hl(t,e){switch(t){case 15:return 1;case 14:return 2;case 12:return t=ds(24&~e),t===0?hl(10,e):t;case 10:return t=ds(192&~e),t===0?hl(8,e):t;case 8:return t=ds(3584&~e),t===0&&(t=ds(4186112&~e),t===0&&(t=512)),t;case 2:return e=ds(805306368&~e),e===0&&(e=268435456),e}throw Error(R(358,t))}function ds(t){return t&-t}function ef(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function dl(t,e,n){t.pendingLanes|=e;var r=e-1;t.suspendedLanes&=r,t.pingedLanes&=r,t=t.eventTimes,e=31-Ir(e),t[e]=n}var Ir=Math.clz32?Math.clz32:lC,aC=Math.log,uC=Math.LN2;function lC(t){return t===0?32:31-(aC(t)/uC|0)|0}var cC=Be.unstable_UserBlockingPriority,hC=Be.unstable_runWithPriority,fl=!0;function dC(t,e,n,r){hi||zd();var i=tf,s=hi;hi=!0;try{Tv(i,t,e,n,r)}finally{(hi=s)||Hd()}}function fC(t,e,n,r){hC(cC,tf.bind(null,t,e,n,r))}function tf(t,e,n,r){if(fl){var i;if((i=(e&4)==0)&&0<Cn.length&&-1<xv.indexOf(t))t=Yd(null,t,e,n,r),Cn.push(t);else{var s=nf(t,e,n,r);if(s===null)i&&Dv(t,r);else{if(i){if(-1<xv.indexOf(t)){t=Yd(s,t,e,n,r),Cn.push(t);return}if(eC(s,t,e,n,r))return;Dv(t,r)}vw(t,e,r,null,n)}}}}function nf(t,e,n,r){var i=Vd(r);if(i=fi(i),i!==null){var s=di(i);if(s===null)i=null;else{var o=s.tag;if(o===13){if(i=kv(s),i!==null)return i;i=null}else if(o===3){if(s.stateNode.hydrate)return s.tag===3?s.stateNode.containerInfo:null;i=null}else s!==i&&(i=null)}}return vw(t,e,r,i,n),null}var Er=null,rf=null,pl=null;function zv(){if(pl)return pl;var t,e=rf,n=e.length,r,i="value"in Er?Er.value:Er.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return pl=i.slice(t,1<r?1-r:void 0)}function ml(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function gl(){return!0}function qv(){return!1}function Wt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?gl:qv,this.isPropagationStopped=qv,this}return _e(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=gl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=gl)},persist:function(){},isPersistent:gl}),e}var fs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},sf=Wt(fs),ea=_e({},fs,{view:0,detail:0}),pC=Wt(ea),of,af,ta,yl=_e({},ea,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:lf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ta&&(ta&&t.type==="mousemove"?(of=t.screenX-ta.screenX,af=t.screenY-ta.screenY):af=of=0,ta=t),of)},movementY:function(t){return"movementY"in t?t.movementY:af}}),Hv=Wt(yl),mC=_e({},yl,{dataTransfer:0}),gC=Wt(mC),yC=_e({},ea,{relatedTarget:0}),uf=Wt(yC),vC=_e({},fs,{animationName:0,elapsedTime:0,pseudoElement:0}),wC=Wt(vC),_C=_e({},fs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),IC=Wt(_C),EC=_e({},fs,{data:0}),Wv=Wt(EC),TC={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},SC={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},kC={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function CC(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=kC[t])?!!e[t]:!1}function lf(){return CC}var bC=_e({},ea,{key:function(t){if(t.key){var e=TC[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=ml(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?SC[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:lf,charCode:function(t){return t.type==="keypress"?ml(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ml(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),AC=Wt(bC),RC=_e({},yl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Gv=Wt(RC),NC=_e({},ea,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:lf}),PC=Wt(NC),xC=_e({},fs,{propertyName:0,elapsedTime:0,pseudoElement:0}),DC=Wt(xC),OC=_e({},yl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),LC=Wt(OC),MC=[9,13,27,32],cf=Wn&&"CompositionEvent"in window,na=null;Wn&&"documentMode"in document&&(na=document.documentMode);var $C=Wn&&"TextEvent"in window&&!na,Kv=Wn&&(!cf||na&&8<na&&11>=na),Qv=String.fromCharCode(32),Yv=!1;function Xv(t,e){switch(t){case"keyup":return MC.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Jv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ps=!1;function UC(t,e){switch(t){case"compositionend":return Jv(e);case"keypress":return e.which!==32?null:(Yv=!0,Qv);case"textInput":return t=e.data,t===Qv&&Yv?null:t;default:return null}}function FC(t,e){if(ps)return t==="compositionend"||!cf&&Xv(t,e)?(t=zv(),pl=rf=Er=null,ps=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Kv&&e.locale!=="ko"?null:e.data;default:return null}}var VC={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Zv(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!VC[t.type]:e==="textarea"}function ew(t,e,n,r){Iv(r),e=wl(e,"onChange"),0<e.length&&(n=new sf("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var ra=null,ia=null;function BC(t){fw(t,0)}function vl(t){var e=ws(t);if(lv(e))return t}function jC(t,e){if(t==="change")return e}var tw=!1;if(Wn){var hf;if(Wn){var df="oninput"in document;if(!df){var nw=document.createElement("div");nw.setAttribute("oninput","return;"),df=typeof nw.oninput=="function"}hf=df}else hf=!1;tw=hf&&(!document.documentMode||9<document.documentMode)}function rw(){ra&&(ra.detachEvent("onpropertychange",iw),ia=ra=null)}function iw(t){if(t.propertyName==="value"&&vl(ia)){var e=[];if(ew(e,ia,t,Vd(t)),t=BC,hi)t(e);else{hi=!0;try{jd(t,e)}finally{hi=!1,Hd()}}}}function zC(t,e,n){t==="focusin"?(rw(),ra=e,ia=n,ra.attachEvent("onpropertychange",iw)):t==="focusout"&&rw()}function qC(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return vl(ia)}function HC(t,e){if(t==="click")return vl(e)}function WC(t,e){if(t==="input"||t==="change")return vl(e)}function GC(t,e){return t===e&&(t!==0||1/t==1/e)||t!==t&&e!==e}var rn=typeof Object.is=="function"?Object.is:GC,KC=Object.prototype.hasOwnProperty;function sa(t,e){if(rn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++)if(!KC.call(e,n[r])||!rn(t[n[r]],e[n[r]]))return!1;return!0}function sw(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function ow(t,e){var n=sw(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=sw(n)}}function aw(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?aw(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function uw(){for(var t=window,e=il();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=il(t.document)}return e}function ff(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var QC=Wn&&"documentMode"in document&&11>=document.documentMode,ms=null,pf=null,oa=null,mf=!1;function lw(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;mf||ms==null||ms!==il(r)||(r=ms,"selectionStart"in r&&ff(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),oa&&sa(oa,r)||(oa=r,r=wl(pf,"onSelect"),0<r.length&&(e=new sf("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=ms)))}Zd("cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "),0);Zd("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "),1);Zd(rC,2);for(var cw="change selectionchange textInput compositionstart compositionend compositionupdate".split(" "),gf=0;gf<cw.length;gf++)Jd.set(cw[gf],0);ss("onMouseEnter",["mouseout","mouseover"]);ss("onMouseLeave",["mouseout","mouseover"]);ss("onPointerEnter",["pointerout","pointerover"]);ss("onPointerLeave",["pointerout","pointerover"]);ui("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ui("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ui("onBeforeInput",["compositionend","keypress","textInput","paste"]);ui("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ui("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ui("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var aa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),hw=new Set("cancel close invalid load scroll toggle".split(" ").concat(aa));function dw(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,Jk(r,e,void 0,t),t.currentTarget=null}function fw(t,e){e=(e&4)!=0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],u=a.instance,l=a.currentTarget;if(a=a.listener,u!==s&&i.isPropagationStopped())break e;dw(i,a,l),s=u}else for(o=0;o<r.length;o++){if(a=r[o],u=a.instance,l=a.currentTarget,a=a.listener,u!==s&&i.isPropagationStopped())break e;dw(i,a,l),s=u}}}if(al)throw t=Gd,al=!1,Gd=null,t}function me(t,e){var n=Sw(e),r=t+"__bubble";n.has(r)||(yw(e,t,2,!1),n.add(r))}var pw="_reactListening"+Math.random().toString(36).slice(2);function mw(t){t[pw]||(t[pw]=!0,nv.forEach(function(e){hw.has(e)||gw(e,!1,t,null),gw(e,!0,t,null)}))}function gw(t,e,n,r){var i=4<arguments.length&&arguments[4]!==void 0?arguments[4]:0,s=n;if(t==="selectionchange"&&n.nodeType!==9&&(s=n.ownerDocument),r!==null&&!e&&hw.has(t)){if(t!=="scroll")return;i|=2,s=r}var o=Sw(s),a=t+"__"+(e?"capture":"bubble");o.has(a)||(e&&(i|=4),yw(s,t,i,e),o.add(a))}function yw(t,e,n,r){var i=Jd.get(e);switch(i===void 0?2:i){case 0:i=dC;break;case 1:i=fC;break;default:i=tf}n=i.bind(null,e,n,t),i=void 0,!Wd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function vw(t,e,n,r,i){var s=r;if((e&1)==0&&(e&2)==0&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;a!==null;){if(o=fi(a),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}a=a.parentNode}}r=r.return}Kk(function(){var l=s,c=Vd(n),h=[];e:{var d=Bv.get(t);if(d!==void 0){var g=sf,y=t;switch(t){case"keypress":if(ml(n)===0)break e;case"keydown":case"keyup":g=AC;break;case"focusin":y="focus",g=uf;break;case"focusout":y="blur",g=uf;break;case"beforeblur":case"afterblur":g=uf;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Hv;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=gC;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=PC;break;case $v:case Uv:case Fv:g=wC;break;case Vv:g=DC;break;case"scroll":g=pC;break;case"wheel":g=LC;break;case"copy":case"cut":case"paste":g=IC;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Gv}var _=(e&4)!=0,f=!_&&t==="scroll",p=_?d!==null?d+"Capture":null:d;_=[];for(var m=l,w;m!==null;){w=m;var v=w.stateNode;if(w.tag===5&&v!==null&&(w=v,p!==null&&(v=Ho(m,p),v!=null&&_.push(ua(m,v,w)))),f)break;m=m.return}0<_.length&&(d=new g(d,y,null,n,c),h.push({event:d,listeners:_}))}}if((e&7)==0){e:{if(d=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",d&&(e&16)==0&&(y=n.relatedTarget||n.fromElement)&&(fi(y)||y[vs]))break e;if((g||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,g?(y=n.relatedTarget||n.toElement,g=l,y=y?fi(y):null,y!==null&&(f=di(y),y!==f||y.tag!==5&&y.tag!==6)&&(y=null)):(g=null,y=l),g!==y)){if(_=Hv,v="onMouseLeave",p="onMouseEnter",m="mouse",(t==="pointerout"||t==="pointerover")&&(_=Gv,v="onPointerLeave",p="onPointerEnter",m="pointer"),f=g==null?d:ws(g),w=y==null?d:ws(y),d=new _(v,m+"leave",g,n,c),d.target=f,d.relatedTarget=w,v=null,fi(c)===l&&(_=new _(p,m+"enter",y,n,c),_.target=w,_.relatedTarget=f,v=_),f=v,g&&y)t:{for(_=g,p=y,m=0,w=_;w;w=gs(w))m++;for(w=0,v=p;v;v=gs(v))w++;for(;0<m-w;)_=gs(_),m--;for(;0<w-m;)p=gs(p),w--;for(;m--;){if(_===p||p!==null&&_===p.alternate)break t;_=gs(_),p=gs(p)}_=null}else _=null;g!==null&&ww(h,d,g,_,!1),y!==null&&f!==null&&ww(h,f,y,_,!0)}}e:{if(d=l?ws(l):window,g=d.nodeName&&d.nodeName.toLowerCase(),g==="select"||g==="input"&&d.type==="file")var P=jC;else if(Zv(d))if(tw)P=WC;else{P=qC;var b=zC}else(g=d.nodeName)&&g.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(P=HC);if(P&&(P=P(t,l))){ew(h,P,n,c);break e}b&&b(t,d,l),t==="focusout"&&(b=d._wrapperState)&&b.controlled&&d.type==="number"&&Dd(d,"number",d.value)}switch(b=l?ws(l):window,t){case"focusin":(Zv(b)||b.contentEditable==="true")&&(ms=b,pf=l,oa=null);break;case"focusout":oa=pf=ms=null;break;case"mousedown":mf=!0;break;case"contextmenu":case"mouseup":case"dragend":mf=!1,lw(h,n,c);break;case"selectionchange":if(QC)break;case"keydown":case"keyup":lw(h,n,c)}var V;if(cf)e:{switch(t){case"compositionstart":var F="onCompositionStart";break e;case"compositionend":F="onCompositionEnd";break e;case"compositionupdate":F="onCompositionUpdate";break e}F=void 0}else ps?Xv(t,n)&&(F="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(F="onCompositionStart");F&&(Kv&&n.locale!=="ko"&&(ps||F!=="onCompositionStart"?F==="onCompositionEnd"&&ps&&(V=zv()):(Er=c,rf="value"in Er?Er.value:Er.textContent,ps=!0)),b=wl(l,F),0<b.length&&(F=new Wv(F,t,null,n,c),h.push({event:F,listeners:b}),V?F.data=V:(V=Jv(n),V!==null&&(F.data=V)))),(V=$C?UC(t,n):FC(t,n))&&(l=wl(l,"onBeforeInput"),0<l.length&&(c=new Wv("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:l}),c.data=V))}fw(h,e)})}function ua(t,e,n){return{instance:t,listener:e,currentTarget:n}}function wl(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Ho(t,n),s!=null&&r.unshift(ua(t,s,i)),s=Ho(t,e),s!=null&&r.push(ua(t,s,i))),t=t.return}return r}function gs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function ww(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,u=a.alternate,l=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&l!==null&&(a=l,i?(u=Ho(n,s),u!=null&&o.unshift(ua(n,u,a))):i||(u=Ho(n,s),u!=null&&o.push(ua(n,u,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}function _l(){}var yf=null,vf=null;function _w(t,e){switch(t){case"button":case"input":case"select":case"textarea":return!!e.autoFocus}return!1}function wf(t,e){return t==="textarea"||t==="option"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Iw=typeof setTimeout=="function"?setTimeout:void 0,YC=typeof clearTimeout=="function"?clearTimeout:void 0;function _f(t){t.nodeType===1?t.textContent="":t.nodeType===9&&(t=t.body,t!=null&&(t.textContent=""))}function ys(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break}return t}function Ew(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var If=0;function XC(t){return{$$typeof:Cd,toString:t,valueOf:t}}var Il=Math.random().toString(36).slice(2),Tr="__reactFiber$"+Il,El="__reactProps$"+Il,vs="__reactContainer$"+Il,Tw="__reactEvents$"+Il;function fi(t){var e=t[Tr];if(e)return e;for(var n=t.parentNode;n;){if(e=n[vs]||n[Tr]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Ew(t);t!==null;){if(n=t[Tr])return n;t=Ew(t)}return e}t=n,n=t.parentNode}return null}function la(t){return t=t[Tr]||t[vs],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ws(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(R(33))}function Tl(t){return t[El]||null}function Sw(t){var e=t[Tw];return e===void 0&&(e=t[Tw]=new Set),e}var Ef=[],_s=-1;function Sr(t){return{current:t}}function ge(t){0>_s||(t.current=Ef[_s],Ef[_s]=null,_s--)}function Se(t,e){_s++,Ef[_s]=t.current,t.current=e}var kr={},gt=Sr(kr),Ut=Sr(!1),pi=kr;function Is(t,e){var n=t.type.contextTypes;if(!n)return kr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Ft(t){return t=t.childContextTypes,t!=null}function Sl(){ge(Ut),ge(gt)}function kw(t,e,n){if(gt.current!==kr)throw Error(R(168));Se(gt,e),Se(Ut,n)}function Cw(t,e,n){var r=t.stateNode;if(t=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(R(108,os(e)||"Unknown",i));return _e({},n,r)}function kl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||kr,pi=gt.current,Se(gt,t),Se(Ut,Ut.current),!0}function bw(t,e,n){var r=t.stateNode;if(!r)throw Error(R(169));n?(t=Cw(t,e,pi),r.__reactInternalMemoizedMergedChildContext=t,ge(Ut),ge(gt),Se(gt,t)):ge(Ut),Se(Ut,n)}var Tf=null,mi=null,JC=Be.unstable_runWithPriority,Sf=Be.unstable_scheduleCallback,kf=Be.unstable_cancelCallback,ZC=Be.unstable_shouldYield,Aw=Be.unstable_requestPaint,Cf=Be.unstable_now,eb=Be.unstable_getCurrentPriorityLevel,Cl=Be.unstable_ImmediatePriority,Rw=Be.unstable_UserBlockingPriority,Nw=Be.unstable_NormalPriority,Pw=Be.unstable_LowPriority,xw=Be.unstable_IdlePriority,bf={},tb=Aw!==void 0?Aw:function(){},Gn=null,bl=null,Af=!1,Dw=Cf(),yt=1e4>Dw?Cf:function(){return Cf()-Dw};function Es(){switch(eb()){case Cl:return 99;case Rw:return 98;case Nw:return 97;case Pw:return 96;case xw:return 95;default:throw Error(R(332))}}function Ow(t){switch(t){case 99:return Cl;case 98:return Rw;case 97:return Nw;case 96:return Pw;case 95:return xw;default:throw Error(R(332))}}function gi(t,e){return t=Ow(t),JC(t,e)}function ca(t,e,n){return t=Ow(t),Sf(t,e,n)}function bn(){if(bl!==null){var t=bl;bl=null,kf(t)}Lw()}function Lw(){if(!Af&&Gn!==null){Af=!0;var t=0;try{var e=Gn;gi(99,function(){for(;t<e.length;t++){var n=e[t];do n=n(!0);while(n!==null)}}),Gn=null}catch(n){throw Gn!==null&&(Gn=Gn.slice(t+1)),Sf(Cl,bn),n}finally{Af=!1}}}var nb=li.ReactCurrentBatchConfig;function vn(t,e){if(t&&t.defaultProps){e=_e({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Al=Sr(null),Rl=null,Ts=null,Nl=null;function Rf(){Nl=Ts=Rl=null}function Nf(t){var e=Al.current;ge(Al),t.type._context._currentValue=e}function Mw(t,e){for(;t!==null;){var n=t.alternate;if((t.childLanes&e)===e){if(n===null||(n.childLanes&e)===e)break;n.childLanes|=e}else t.childLanes|=e,n!==null&&(n.childLanes|=e);t=t.return}}function Ss(t,e){Rl=t,Nl=Ts=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&e)!=0&&(wn=!0),t.firstContext=null)}function sn(t,e){if(Nl!==t&&e!==!1&&e!==0)if((typeof e!="number"||e===1073741823)&&(Nl=t,e=1073741823),e={context:t,observedBits:e,next:null},Ts===null){if(Rl===null)throw Error(R(308));Ts=e,Rl.dependencies={lanes:0,firstContext:e,responders:null}}else Ts=Ts.next=e;return t._currentValue}var Cr=!1;function Pf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null},effects:null}}function $w(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function br(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Ar(t,e){if(t=t.updateQueue,t!==null){t=t.shared;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}}function Uw(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function ha(t,e,n,r){var i=t.updateQueue;Cr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var u=a,l=u.next;u.next=null,o===null?s=l:o.next=l,o=u;var c=t.alternate;if(c!==null){c=c.updateQueue;var h=c.lastBaseUpdate;h!==o&&(h===null?c.firstBaseUpdate=l:h.next=l,c.lastBaseUpdate=u)}}if(s!==null){h=i.baseState,o=0,c=l=u=null;do{a=s.lane;var d=s.eventTime;if((r&a)===a){c!==null&&(c=c.next={eventTime:d,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var g=t,y=s;switch(a=e,d=n,y.tag){case 1:if(g=y.payload,typeof g=="function"){h=g.call(d,h,a);break e}h=g;break e;case 3:g.flags=g.flags&-4097|64;case 0:if(g=y.payload,a=typeof g=="function"?g.call(d,h,a):g,a==null)break e;h=_e({},h,a);break e;case 2:Cr=!0}}s.callback!==null&&(t.flags|=32,a=i.effects,a===null?i.effects=[s]:a.push(s))}else d={eventTime:d,lane:a,tag:s.tag,payload:s.payload,callback:s.callback,next:null},c===null?(l=c=d,u=h):c=c.next=d,o|=a;if(s=s.next,s===null){if(a=i.shared.pending,a===null)break;s=a.next,a.next=null,i.lastBaseUpdate=a,i.shared.pending=null}}while(1);c===null&&(u=h),i.baseState=u,i.firstBaseUpdate=l,i.lastBaseUpdate=c,Ta|=o,t.lanes=o,t.memoizedState=h}}function Fw(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(R(191,i));i.call(r)}}}var Vw=new Ju.Component().refs;function Pl(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:_e({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var xl={isMounted:function(t){return(t=t._reactInternals)?di(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Gt(),i=Pr(t),s=br(r,i);s.payload=e,n!=null&&(s.callback=n),Ar(t,s),xr(t,i,r)},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Gt(),i=Pr(t),s=br(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),Ar(t,s),xr(t,i,r)},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Gt(),r=Pr(t),i=br(n,r);i.tag=2,e!=null&&(i.callback=e),Ar(t,i),xr(t,r,n)}};function Bw(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!sa(n,r)||!sa(i,s):!0}function jw(t,e,n){var r=!1,i=kr,s=e.contextType;return typeof s=="object"&&s!==null?s=sn(s):(i=Ft(e)?pi:gt.current,r=e.contextTypes,s=(r=r!=null)?Is(t,i):kr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=xl,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function zw(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&xl.enqueueReplaceState(e,e.state,null)}function xf(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=Vw,Pf(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=sn(s):(s=Ft(e)?pi:gt.current,i.context=Is(t,s)),ha(t,n,i,r),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Pl(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&xl.enqueueReplaceState(i,i.state,null),ha(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4)}var Dl=Array.isArray;function da(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(R(309));var r=n.stateNode}if(!r)throw Error(R(147,t));var i=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===i?e.ref:(e=function(s){var o=r.refs;o===Vw&&(o=r.refs={}),s===null?delete o[i]:o[i]=s},e._stringRef=i,e)}if(typeof t!="string")throw Error(R(284));if(!n._owner)throw Error(R(290,t))}return t}function Ol(t,e){if(t.type!=="textarea")throw Error(R(31,Object.prototype.toString.call(e)==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":e))}function qw(t){function e(f,p){if(t){var m=f.lastEffect;m!==null?(m.nextEffect=p,f.lastEffect=p):f.firstEffect=f.lastEffect=p,p.nextEffect=null,p.flags=8}}function n(f,p){if(!t)return null;for(;p!==null;)e(f,p),p=p.sibling;return null}function r(f,p){for(f=new Map;p!==null;)p.key!==null?f.set(p.key,p):f.set(p.index,p),p=p.sibling;return f}function i(f,p){return f=Lr(f,p),f.index=0,f.sibling=null,f}function s(f,p,m){return f.index=m,t?(m=f.alternate,m!==null?(m=m.index,m<p?(f.flags=2,p):m):(f.flags=2,p)):p}function o(f){return t&&f.alternate===null&&(f.flags=2),f}function a(f,p,m,w){return p===null||p.tag!==6?(p=pp(m,f.mode,w),p.return=f,p):(p=i(p,m),p.return=f,p)}function u(f,p,m,w){return p!==null&&p.elementType===m.type?(w=i(p,m.props),w.ref=da(f,p,m),w.return=f,w):(w=Jl(m.type,m.key,m.props,null,f.mode,w),w.ref=da(f,p,m),w.return=f,w)}function l(f,p,m,w){return p===null||p.tag!==4||p.stateNode.containerInfo!==m.containerInfo||p.stateNode.implementation!==m.implementation?(p=mp(m,f.mode,w),p.return=f,p):(p=i(p,m.children||[]),p.return=f,p)}function c(f,p,m,w,v){return p===null||p.tag!==7?(p=xs(m,f.mode,w,v),p.return=f,p):(p=i(p,m),p.return=f,p)}function h(f,p,m){if(typeof p=="string"||typeof p=="number")return p=pp(""+p,f.mode,m),p.return=f,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Uo:return m=Jl(p.type,p.key,p.props,null,f.mode,m),m.ref=da(f,null,p),m.return=f,m;case ci:return p=mp(p,f.mode,m),p.return=f,p}if(Dl(p)||Bo(p))return p=xs(p,f.mode,m,null),p.return=f,p;Ol(f,p)}return null}function d(f,p,m,w){var v=p!==null?p.key:null;if(typeof m=="string"||typeof m=="number")return v!==null?null:a(f,p,""+m,w);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Uo:return m.key===v?m.type===gr?c(f,p,m.props.children,w,v):u(f,p,m,w):null;case ci:return m.key===v?l(f,p,m,w):null}if(Dl(m)||Bo(m))return v!==null?null:c(f,p,m,w,null);Ol(f,m)}return null}function g(f,p,m,w,v){if(typeof w=="string"||typeof w=="number")return f=f.get(m)||null,a(p,f,""+w,v);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Uo:return f=f.get(w.key===null?m:w.key)||null,w.type===gr?c(p,f,w.props.children,v,w.key):u(p,f,w,v);case ci:return f=f.get(w.key===null?m:w.key)||null,l(p,f,w,v)}if(Dl(w)||Bo(w))return f=f.get(m)||null,c(p,f,w,v,null);Ol(p,w)}return null}function y(f,p,m,w){for(var v=null,P=null,b=p,V=p=0,F=null;b!==null&&V<m.length;V++){b.index>V?(F=b,b=null):F=b.sibling;var M=d(f,b,m[V],w);if(M===null){b===null&&(b=F);break}t&&b&&M.alternate===null&&e(f,b),p=s(M,p,V),P===null?v=M:P.sibling=M,P=M,b=F}if(V===m.length)return n(f,b),v;if(b===null){for(;V<m.length;V++)b=h(f,m[V],w),b!==null&&(p=s(b,p,V),P===null?v=b:P.sibling=b,P=b);return v}for(b=r(f,b);V<m.length;V++)F=g(b,f,V,m[V],w),F!==null&&(t&&F.alternate!==null&&b.delete(F.key===null?V:F.key),p=s(F,p,V),P===null?v=F:P.sibling=F,P=F);return t&&b.forEach(function(he){return e(f,he)}),v}function _(f,p,m,w){var v=Bo(m);if(typeof v!="function")throw Error(R(150));if(m=v.call(m),m==null)throw Error(R(151));for(var P=v=null,b=p,V=p=0,F=null,M=m.next();b!==null&&!M.done;V++,M=m.next()){b.index>V?(F=b,b=null):F=b.sibling;var he=d(f,b,M.value,w);if(he===null){b===null&&(b=F);break}t&&b&&he.alternate===null&&e(f,b),p=s(he,p,V),P===null?v=he:P.sibling=he,P=he,b=F}if(M.done)return n(f,b),v;if(b===null){for(;!M.done;V++,M=m.next())M=h(f,M.value,w),M!==null&&(p=s(M,p,V),P===null?v=M:P.sibling=M,P=M);return v}for(b=r(f,b);!M.done;V++,M=m.next())M=g(b,f,V,M.value,w),M!==null&&(t&&M.alternate!==null&&b.delete(M.key===null?V:M.key),p=s(M,p,V),P===null?v=M:P.sibling=M,P=M);return t&&b.forEach(function(kn){return e(f,kn)}),v}return function(f,p,m,w){var v=typeof m=="object"&&m!==null&&m.type===gr&&m.key===null;v&&(m=m.props.children);var P=typeof m=="object"&&m!==null;if(P)switch(m.$$typeof){case Uo:e:{for(P=m.key,v=p;v!==null;){if(v.key===P){switch(v.tag){case 7:if(m.type===gr){n(f,v.sibling),p=i(v,m.props.children),p.return=f,f=p;break e}break;default:if(v.elementType===m.type){n(f,v.sibling),p=i(v,m.props),p.ref=da(f,v,m),p.return=f,f=p;break e}}n(f,v);break}else e(f,v);v=v.sibling}m.type===gr?(p=xs(m.props.children,f.mode,w,m.key),p.return=f,f=p):(w=Jl(m.type,m.key,m.props,null,f.mode,w),w.ref=da(f,p,m),w.return=f,f=w)}return o(f);case ci:e:{for(v=m.key;p!==null;){if(p.key===v)if(p.tag===4&&p.stateNode.containerInfo===m.containerInfo&&p.stateNode.implementation===m.implementation){n(f,p.sibling),p=i(p,m.children||[]),p.return=f,f=p;break e}else{n(f,p);break}else e(f,p);p=p.sibling}p=mp(m,f.mode,w),p.return=f,f=p}return o(f)}if(typeof m=="string"||typeof m=="number")return m=""+m,p!==null&&p.tag===6?(n(f,p.sibling),p=i(p,m),p.return=f,f=p):(n(f,p),p=pp(m,f.mode,w),p.return=f,f=p),o(f);if(Dl(m))return y(f,p,m,w);if(Bo(m))return _(f,p,m,w);if(P&&Ol(f,m),typeof m=="undefined"&&!v)switch(f.tag){case 1:case 22:case 0:case 11:case 15:throw Error(R(152,os(f.type)||"Component"))}return n(f,p)}}var Ll=qw(!0),Hw=qw(!1),fa={},An=Sr(fa),pa=Sr(fa),ma=Sr(fa);function yi(t){if(t===fa)throw Error(R(174));return t}function Df(t,e){switch(Se(ma,e),Se(pa,t),Se(An,fa),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:$d(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=$d(e,t)}ge(An),Se(An,e)}function ks(){ge(An),ge(pa),ge(ma)}function Ww(t){yi(ma.current);var e=yi(An.current),n=$d(e,t.type);e!==n&&(Se(pa,t),Se(An,n))}function Of(t){pa.current===t&&(ge(An),ge(pa))}var ke=Sr(0);function Ml(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&64)!=0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Kn=null,Rr=null,Rn=!1;function Gw(t,e){var n=un(5,null,null,0);n.elementType="DELETED",n.type="DELETED",n.stateNode=e,n.return=t,n.flags=8,t.lastEffect!==null?(t.lastEffect.nextEffect=n,t.lastEffect=n):t.firstEffect=t.lastEffect=n}function Kw(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,!0):!1;case 13:return!1;default:return!1}}function Lf(t){if(Rn){var e=Rr;if(e){var n=e;if(!Kw(t,e)){if(e=ys(n.nextSibling),!e||!Kw(t,e)){t.flags=t.flags&-1025|2,Rn=!1,Kn=t;return}Gw(Kn,n)}Kn=t,Rr=ys(e.firstChild)}else t.flags=t.flags&-1025|2,Rn=!1,Kn=t}}function Qw(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Kn=t}function $l(t){if(t!==Kn)return!1;if(!Rn)return Qw(t),Rn=!0,!1;var e=t.type;if(t.tag!==5||e!=="head"&&e!=="body"&&!wf(e,t.memoizedProps))for(e=Rr;e;)Gw(t,e),e=ys(e.nextSibling);if(Qw(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(R(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Rr=ys(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Rr=null}}else Rr=Kn?ys(t.stateNode.nextSibling):null;return!0}function Mf(){Rr=Kn=null,Rn=!1}var Cs=[];function $f(){for(var t=0;t<Cs.length;t++)Cs[t]._workInProgressVersionPrimary=null;Cs.length=0}var ga=li.ReactCurrentDispatcher,on=li.ReactCurrentBatchConfig,ya=0,Ne=null,vt=null,rt=null,Ul=!1,va=!1;function Vt(){throw Error(R(321))}function Uf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!rn(t[n],e[n]))return!1;return!0}function Ff(t,e,n,r,i,s){if(ya=s,Ne=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ga.current=t===null||t.memoizedState===null?ib:sb,t=n(r,i),va){s=0;do{if(va=!1,!(25>s))throw Error(R(301));s+=1,rt=vt=null,e.updateQueue=null,ga.current=ob,t=n(r,i)}while(va)}if(ga.current=jl,e=vt!==null&&vt.next!==null,ya=0,rt=vt=Ne=null,Ul=!1,e)throw Error(R(300));return t}function vi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return rt===null?Ne.memoizedState=rt=t:rt=rt.next=t,rt}function wi(){if(vt===null){var t=Ne.alternate;t=t!==null?t.memoizedState:null}else t=vt.next;var e=rt===null?Ne.memoizedState:rt.next;if(e!==null)rt=e,vt=t;else{if(t===null)throw Error(R(310));vt=t,t={memoizedState:vt.memoizedState,baseState:vt.baseState,baseQueue:vt.baseQueue,queue:vt.queue,next:null},rt===null?Ne.memoizedState=rt=t:rt=rt.next=t}return rt}function Nn(t,e){return typeof e=="function"?e(t):e}function wa(t){var e=wi(),n=e.queue;if(n===null)throw Error(R(311));n.lastRenderedReducer=t;var r=vt,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){i=i.next,r=r.baseState;var a=o=s=null,u=i;do{var l=u.lane;if((ya&l)===l)a!==null&&(a=a.next={lane:0,action:u.action,eagerReducer:u.eagerReducer,eagerState:u.eagerState,next:null}),r=u.eagerReducer===t?u.eagerState:t(r,u.action);else{var c={lane:l,action:u.action,eagerReducer:u.eagerReducer,eagerState:u.eagerState,next:null};a===null?(o=a=c,s=r):a=a.next=c,Ne.lanes|=l,Ta|=l}u=u.next}while(u!==null&&u!==i);a===null?s=r:a.next=o,rn(r,e.memoizedState)||(wn=!0),e.memoizedState=r,e.baseState=s,e.baseQueue=a,n.lastRenderedState=r}return[e.memoizedState,n.dispatch]}function _a(t){var e=wi(),n=e.queue;if(n===null)throw Error(R(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);rn(s,e.memoizedState)||(wn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Yw(t,e,n){var r=e._getVersion;r=r(e._source);var i=e._workInProgressVersionPrimary;if(i!==null?t=i===r:(t=t.mutableReadLanes,(t=(ya&t)===t)&&(e._workInProgressVersionPrimary=r,Cs.push(e))),t)return n(e._source);throw Cs.push(e),Error(R(350))}function Xw(t,e,n,r){var i=At;if(i===null)throw Error(R(349));var s=e._getVersion,o=s(e._source),a=ga.current,u=a.useState(function(){return Yw(i,e,n)}),l=u[1],c=u[0];u=rt;var h=t.memoizedState,d=h.refs,g=d.getSnapshot,y=h.source;h=h.subscribe;var _=Ne;return t.memoizedState={refs:d,source:e,subscribe:r},a.useEffect(function(){d.getSnapshot=n,d.setSnapshot=l;var f=s(e._source);if(!rn(o,f)){f=n(e._source),rn(c,f)||(l(f),f=Pr(_),i.mutableReadLanes|=f&i.pendingLanes),f=i.mutableReadLanes,i.entangledLanes|=f;for(var p=i.entanglements,m=f;0<m;){var w=31-Ir(m),v=1<<w;p[w]|=f,m&=~v}}},[n,e,r]),a.useEffect(function(){return r(e._source,function(){var f=d.getSnapshot,p=d.setSnapshot;try{p(f(e._source));var m=Pr(_);i.mutableReadLanes|=m&i.pendingLanes}catch(w){p(function(){throw w})}})},[e,r]),rn(g,n)&&rn(y,e)&&rn(h,r)||(t={pending:null,dispatch:null,lastRenderedReducer:Nn,lastRenderedState:c},t.dispatch=l=zf.bind(null,Ne,t),u.queue=t,u.baseQueue=null,c=Yw(i,e,n),u.memoizedState=u.baseState=c),c}function Jw(t,e,n){var r=wi();return Xw(r,t,e,n)}function Ia(t){var e=vi();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t=e.queue={pending:null,dispatch:null,lastRenderedReducer:Nn,lastRenderedState:t},t=t.dispatch=zf.bind(null,Ne,t),[e.memoizedState,t]}function Fl(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Ne.updateQueue,e===null?(e={lastEffect:null},Ne.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Zw(t){var e=vi();return t={current:t},e.memoizedState=t}function Vl(){return wi().memoizedState}function Vf(t,e,n,r){var i=vi();Ne.flags|=t,i.memoizedState=Fl(1|e,n,void 0,r===void 0?null:r)}function Bf(t,e,n,r){var i=wi();r=r===void 0?null:r;var s=void 0;if(vt!==null){var o=vt.memoizedState;if(s=o.destroy,r!==null&&Uf(r,o.deps)){Fl(e,n,s,r);return}}Ne.flags|=t,i.memoizedState=Fl(1|e,n,s,r)}function e0(t,e){return Vf(516,4,t,e)}function Bl(t,e){return Bf(516,4,t,e)}function t0(t,e){return Bf(4,2,t,e)}function n0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function r0(t,e,n){return n=n!=null?n.concat([t]):null,Bf(4,2,n0.bind(null,e,t),n)}function jf(){}function i0(t,e){var n=wi();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Uf(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function s0(t,e){var n=wi();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Uf(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function rb(t,e){var n=Es();gi(98>n?98:n,function(){t(!0)}),gi(97<n?97:n,function(){var r=on.transition;on.transition=1;try{t(!1),e()}finally{on.transition=r}})}function zf(t,e,n){var r=Gt(),i=Pr(t),s={lane:i,action:n,eagerReducer:null,eagerState:null,next:null},o=e.pending;if(o===null?s.next=s:(s.next=o.next,o.next=s),e.pending=s,o=t.alternate,t===Ne||o!==null&&o===Ne)va=Ul=!0;else{if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var a=e.lastRenderedState,u=o(a,n);if(s.eagerReducer=o,s.eagerState=u,rn(u,a))return}catch{}finally{}xr(t,i,r)}}var jl={readContext:sn,useCallback:Vt,useContext:Vt,useEffect:Vt,useImperativeHandle:Vt,useLayoutEffect:Vt,useMemo:Vt,useReducer:Vt,useRef:Vt,useState:Vt,useDebugValue:Vt,useDeferredValue:Vt,useTransition:Vt,useMutableSource:Vt,useOpaqueIdentifier:Vt,unstable_isNewReconciler:!1},ib={readContext:sn,useCallback:function(t,e){return vi().memoizedState=[t,e===void 0?null:e],t},useContext:sn,useEffect:e0,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Vf(4,2,n0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Vf(4,2,t,e)},useMemo:function(t,e){var n=vi();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=vi();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t=r.queue={pending:null,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},t=t.dispatch=zf.bind(null,Ne,t),[r.memoizedState,t]},useRef:Zw,useState:Ia,useDebugValue:jf,useDeferredValue:function(t){var e=Ia(t),n=e[0],r=e[1];return e0(function(){var i=on.transition;on.transition=1;try{r(t)}finally{on.transition=i}},[t]),n},useTransition:function(){var t=Ia(!1),e=t[0];return t=rb.bind(null,t[1]),Zw(t),[t,e]},useMutableSource:function(t,e,n){var r=vi();return r.memoizedState={refs:{getSnapshot:e,setSnapshot:null},source:t,subscribe:n},Xw(r,t,e,n)},useOpaqueIdentifier:function(){if(Rn){var t=!1,e=XC(function(){throw t||(t=!0,n("r:"+(If++).toString(36))),Error(R(355))}),n=Ia(e)[1];return(Ne.mode&2)==0&&(Ne.flags|=516,Fl(5,function(){n("r:"+(If++).toString(36))},void 0,null)),e}return e="r:"+(If++).toString(36),Ia(e),e},unstable_isNewReconciler:!1},sb={readContext:sn,useCallback:i0,useContext:sn,useEffect:Bl,useImperativeHandle:r0,useLayoutEffect:t0,useMemo:s0,useReducer:wa,useRef:Vl,useState:function(){return wa(Nn)},useDebugValue:jf,useDeferredValue:function(t){var e=wa(Nn),n=e[0],r=e[1];return Bl(function(){var i=on.transition;on.transition=1;try{r(t)}finally{on.transition=i}},[t]),n},useTransition:function(){var t=wa(Nn)[0];return[Vl().current,t]},useMutableSource:Jw,useOpaqueIdentifier:function(){return wa(Nn)[0]},unstable_isNewReconciler:!1},ob={readContext:sn,useCallback:i0,useContext:sn,useEffect:Bl,useImperativeHandle:r0,useLayoutEffect:t0,useMemo:s0,useReducer:_a,useRef:Vl,useState:function(){return _a(Nn)},useDebugValue:jf,useDeferredValue:function(t){var e=_a(Nn),n=e[0],r=e[1];return Bl(function(){var i=on.transition;on.transition=1;try{r(t)}finally{on.transition=i}},[t]),n},useTransition:function(){var t=_a(Nn)[0];return[Vl().current,t]},useMutableSource:Jw,useOpaqueIdentifier:function(){return _a(Nn)[0]},unstable_isNewReconciler:!1},ab=li.ReactCurrentOwner,wn=!1;function Bt(t,e,n,r){e.child=t===null?Hw(e,null,n,r):Ll(e,t.child,n,r)}function o0(t,e,n,r,i){n=n.render;var s=e.ref;return Ss(e,i),r=Ff(t,e,n,r,s,i),t!==null&&!wn?(e.updateQueue=t.updateQueue,e.flags&=-517,t.lanes&=~i,Qn(t,e,i)):(e.flags|=1,Bt(t,e,r,i),e.child)}function a0(t,e,n,r,i,s){if(t===null){var o=n.type;return typeof o=="function"&&!dp(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=o,u0(t,e,o,r,i,s)):(t=Jl(n.type,null,r,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}return o=t.child,(i&s)==0&&(i=o.memoizedProps,n=n.compare,n=n!==null?n:sa,n(i,r)&&t.ref===e.ref)?Qn(t,e,s):(e.flags|=1,t=Lr(o,r),t.ref=e.ref,t.return=e,e.child=t)}function u0(t,e,n,r,i,s){if(t!==null&&sa(t.memoizedProps,r)&&t.ref===e.ref)if(wn=!1,(s&i)!=0)(t.flags&16384)!=0&&(wn=!0);else return e.lanes=t.lanes,Qn(t,e,s);return Hf(t,e,n,r,s)}function qf(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden"||r.mode==="unstable-defer-without-hiding")if((e.mode&4)==0)e.memoizedState={baseLanes:0},Xl(e,n);else if((n&1073741824)!=0)e.memoizedState={baseLanes:0},Xl(e,s!==null?s.baseLanes:n);else return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t},Xl(e,t),null;else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Xl(e,r);return Bt(t,e,i,n),e.child}function l0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=128)}function Hf(t,e,n,r,i){var s=Ft(n)?pi:gt.current;return s=Is(e,s),Ss(e,i),n=Ff(t,e,n,r,s,i),t!==null&&!wn?(e.updateQueue=t.updateQueue,e.flags&=-517,t.lanes&=~i,Qn(t,e,i)):(e.flags|=1,Bt(t,e,n,i),e.child)}function c0(t,e,n,r,i){if(Ft(n)){var s=!0;kl(e)}else s=!1;if(Ss(e,i),e.stateNode===null)t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2),jw(e,n,r),xf(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var u=o.context,l=n.contextType;typeof l=="object"&&l!==null?l=sn(l):(l=Ft(n)?pi:gt.current,l=Is(e,l));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||u!==l)&&zw(e,o,r,l),Cr=!1;var d=e.memoizedState;o.state=d,ha(e,r,o,i),u=e.memoizedState,a!==r||d!==u||Ut.current||Cr?(typeof c=="function"&&(Pl(e,n,c,r),u=e.memoizedState),(a=Cr||Bw(e,n,a,r,d,u,l))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4)):(typeof o.componentDidMount=="function"&&(e.flags|=4),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=l,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4),r=!1)}else{o=e.stateNode,$w(t,e),a=e.memoizedProps,l=e.type===e.elementType?a:vn(e.type,a),o.props=l,h=e.pendingProps,d=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=sn(u):(u=Ft(n)?pi:gt.current,u=Is(e,u));var g=n.getDerivedStateFromProps;(c=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==u)&&zw(e,o,r,u),Cr=!1,d=e.memoizedState,o.state=d,ha(e,r,o,i);var y=e.memoizedState;a!==h||d!==y||Ut.current||Cr?(typeof g=="function"&&(Pl(e,n,g,r),y=e.memoizedState),(l=Cr||Bw(e,n,l,r,d,y,u))?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=256)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=256),e.memoizedProps=r,e.memoizedState=y),o.props=r,o.state=y,o.context=u,r=l):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=256),r=!1)}return Wf(t,e,n,r,s,i)}function Wf(t,e,n,r,i,s){l0(t,e);var o=(e.flags&64)!=0;if(!r&&!o)return i&&bw(e,n,!1),Qn(t,e,s);r=e.stateNode,ab.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Ll(e,t.child,null,s),e.child=Ll(e,null,a,s)):Bt(t,e,a,s),e.memoizedState=r.state,i&&bw(e,n,!0),e.child}function h0(t){var e=t.stateNode;e.pendingContext?kw(t,e.pendingContext,e.pendingContext!==e.context):e.context&&kw(t,e.context,!1),Df(t,e.containerInfo)}var zl={dehydrated:null,retryLane:0};function d0(t,e,n){var r=e.pendingProps,i=ke.current,s=!1,o;return(o=(e.flags&64)!=0)||(o=t!==null&&t.memoizedState===null?!1:(i&2)!=0),o?(s=!0,e.flags&=-65):t!==null&&t.memoizedState===null||r.fallback===void 0||r.unstable_avoidThisFallback===!0||(i|=1),Se(ke,i&1),t===null?(r.fallback!==void 0&&Lf(e),t=r.children,i=r.fallback,s?(t=f0(e,t,i,n),e.child.memoizedState={baseLanes:n},e.memoizedState=zl,t):typeof r.unstable_expectedLoadTime=="number"?(t=f0(e,t,i,n),e.child.memoizedState={baseLanes:n},e.memoizedState=zl,e.lanes=33554432,t):(n=fp({mode:"visible",children:t},e.mode,n,null),n.return=e,e.child=n)):t.memoizedState!==null?s?(r=m0(t,e,r.children,r.fallback,n),s=e.child,i=t.child.memoizedState,s.memoizedState=i===null?{baseLanes:n}:{baseLanes:i.baseLanes|n},s.childLanes=t.childLanes&~n,e.memoizedState=zl,r):(n=p0(t,e,r.children,n),e.memoizedState=null,n):s?(r=m0(t,e,r.children,r.fallback,n),s=e.child,i=t.child.memoizedState,s.memoizedState=i===null?{baseLanes:n}:{baseLanes:i.baseLanes|n},s.childLanes=t.childLanes&~n,e.memoizedState=zl,r):(n=p0(t,e,r.children,n),e.memoizedState=null,n)}function f0(t,e,n,r){var i=t.mode,s=t.child;return e={mode:"hidden",children:e},(i&2)==0&&s!==null?(s.childLanes=0,s.pendingProps=e):s=fp(e,i,0,null),n=xs(n,i,r,null),s.return=t,n.return=t,s.sibling=n,t.child=s,n}function p0(t,e,n,r){var i=t.child;return t=i.sibling,n=Lr(i,{mode:"visible",children:n}),(e.mode&2)==0&&(n.lanes=r),n.return=e,n.sibling=null,t!==null&&(t.nextEffect=null,t.flags=8,e.firstEffect=e.lastEffect=t),e.child=n}function m0(t,e,n,r,i){var s=e.mode,o=t.child;t=o.sibling;var a={mode:"hidden",children:n};return(s&2)==0&&e.child!==o?(n=e.child,n.childLanes=0,n.pendingProps=a,o=n.lastEffect,o!==null?(e.firstEffect=n.firstEffect,e.lastEffect=o,o.nextEffect=null):e.firstEffect=e.lastEffect=null):n=Lr(o,a),t!==null?r=Lr(t,r):(r=xs(r,s,i,null),r.flags|=2),r.return=e,n.return=e,n.sibling=r,e.child=n,r}function g0(t,e){t.lanes|=e;var n=t.alternate;n!==null&&(n.lanes|=e),Mw(t.return,e)}function Gf(t,e,n,r,i,s){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,lastEffect:s}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.lastEffect=s)}function y0(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Bt(t,e,r.children,n),r=ke.current,(r&2)!=0)r=r&1|2,e.flags|=64;else{if(t!==null&&(t.flags&64)!=0)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&g0(t,n);else if(t.tag===19)g0(t,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Se(ke,r),(e.mode&2)==0)e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Ml(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Gf(e,!1,i,n,s,e.lastEffect);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Ml(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Gf(e,!0,n,null,s,e.lastEffect);break;case"together":Gf(e,!1,null,null,void 0,e.lastEffect);break;default:e.memoizedState=null}return e.child}function Qn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Ta|=e.lanes,(n&e.childLanes)!=0){if(t!==null&&e.child!==t.child)throw Error(R(153));if(e.child!==null){for(t=e.child,n=Lr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Lr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}return null}var v0,Kf,w0,_0;v0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Kf=function(){};w0=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,yi(An.current);var s=null;switch(n){case"input":i=Pd(t,i),r=Pd(t,r),s=[];break;case"option":i=Od(t,i),r=Od(t,r),s=[];break;case"select":i=_e({},i,{value:void 0}),r=_e({},r,{value:void 0}),s=[];break;case"textarea":i=Ld(t,i),r=Ld(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=_l)}Ud(n,r);var o;n=null;for(l in i)if(!r.hasOwnProperty(l)&&i.hasOwnProperty(l)&&i[l]!=null)if(l==="style"){var a=i[l];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else l!=="dangerouslySetInnerHTML"&&l!=="children"&&l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&($o.hasOwnProperty(l)?s||(s=[]):(s=s||[]).push(l,null));for(l in r){var u=r[l];if(a=i!=null?i[l]:void 0,r.hasOwnProperty(l)&&u!==a&&(u!=null||a!=null))if(l==="style")if(a){for(o in a)!a.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&a[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(l,n)),n=u;else l==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(s=s||[]).push(l,u)):l==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(l,""+u):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&($o.hasOwnProperty(l)?(u!=null&&l==="onScroll"&&me("scroll",t),s||a===u||(s=[])):typeof u=="object"&&u!==null&&u.$$typeof===Cd?u.toString():(s=s||[]).push(l,u))}n&&(s=s||[]).push("style",n);var l=s;(e.updateQueue=l)&&(e.flags|=4)}};_0=function(t,e,n,r){n!==r&&(e.flags|=4)};function Ea(t,e){if(!Rn)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function ub(t,e,n){var r=e.pendingProps;switch(e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return null;case 1:return Ft(e.type)&&Sl(),null;case 3:return ks(),ge(Ut),ge(gt),$f(),r=e.stateNode,r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&($l(e)?e.flags|=4:r.hydrate||(e.flags|=256)),Kf(e),null;case 5:Of(e);var i=yi(ma.current);if(n=e.type,t!==null&&e.stateNode!=null)w0(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=128);else{if(!r){if(e.stateNode===null)throw Error(R(166));return null}if(t=yi(An.current),$l(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Tr]=e,r[El]=s,n){case"dialog":me("cancel",r),me("close",r);break;case"iframe":case"object":case"embed":me("load",r);break;case"video":case"audio":for(t=0;t<aa.length;t++)me(aa[t],r);break;case"source":me("error",r);break;case"img":case"image":case"link":me("error",r),me("load",r);break;case"details":me("toggle",r);break;case"input":cv(r,s),me("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},me("invalid",r);break;case"textarea":fv(r,s),me("invalid",r)}Ud(n,s),t=null;for(var o in s)s.hasOwnProperty(o)&&(i=s[o],o==="children"?typeof i=="string"?r.textContent!==i&&(t=["children",i]):typeof i=="number"&&r.textContent!==""+i&&(t=["children",""+i]):$o.hasOwnProperty(o)&&i!=null&&o==="onScroll"&&me("scroll",r));switch(n){case"input":rl(r),dv(r,s,!0);break;case"textarea":rl(r),mv(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=_l)}r=t,e.updateQueue=r,r!==null&&(e.flags|=4)}else{switch(o=i.nodeType===9?i:i.ownerDocument,t===Md.html&&(t=gv(n)),t===Md.html?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Tr]=e,t[El]=r,v0(t,e,!1,!1),e.stateNode=t,o=Fd(n,r),n){case"dialog":me("cancel",t),me("close",t),i=r;break;case"iframe":case"object":case"embed":me("load",t),i=r;break;case"video":case"audio":for(i=0;i<aa.length;i++)me(aa[i],t);i=r;break;case"source":me("error",t),i=r;break;case"img":case"image":case"link":me("error",t),me("load",t),i=r;break;case"details":me("toggle",t),i=r;break;case"input":cv(t,r),i=Pd(t,r),me("invalid",t);break;case"option":i=Od(t,r);break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=_e({},r,{value:void 0}),me("invalid",t);break;case"textarea":fv(t,r),i=Ld(t,r),me("invalid",t);break;default:i=r}Ud(n,i);var a=i;for(s in a)if(a.hasOwnProperty(s)){var u=a[s];s==="style"?wv(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&yv(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&zo(t,u):typeof u=="number"&&zo(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&($o.hasOwnProperty(s)?u!=null&&s==="onScroll"&&me("scroll",t):u!=null&&_d(t,s,u,o))}switch(n){case"input":rl(t),dv(t,r,!1);break;case"textarea":rl(t),mv(t);break;case"option":r.value!=null&&t.setAttribute("value",""+yr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?as(t,!!r.multiple,s,!1):r.defaultValue!=null&&as(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=_l)}_w(n,r)&&(e.flags|=4)}e.ref!==null&&(e.flags|=128)}return null;case 6:if(t&&e.stateNode!=null)_0(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(R(166));n=yi(ma.current),yi(An.current),$l(e)?(r=e.stateNode,n=e.memoizedProps,r[Tr]=e,r.nodeValue!==n&&(e.flags|=4)):(r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Tr]=e,e.stateNode=r)}return null;case 13:return ge(ke),r=e.memoizedState,(e.flags&64)!=0?(e.lanes=n,e):(r=r!==null,n=!1,t===null?e.memoizedProps.fallback!==void 0&&$l(e):n=t.memoizedState!==null,r&&!n&&(e.mode&2)!=0&&(t===null&&e.memoizedProps.unstable_avoidThisFallback!==!0||(ke.current&1)!=0?it===0&&(it=3):((it===0||it===3)&&(it=4),At===null||(Ta&134217727)==0&&(As&134217727)==0||Ns(At,wt))),(r||n)&&(e.flags|=4),null);case 4:return ks(),Kf(e),t===null&&mw(e.stateNode.containerInfo),null;case 10:return Nf(e),null;case 17:return Ft(e.type)&&Sl(),null;case 19:if(ge(ke),r=e.memoizedState,r===null)return null;if(s=(e.flags&64)!=0,o=r.rendering,o===null)if(s)Ea(r,!1);else{if(it!==0||t!==null&&(t.flags&64)!=0)for(t=e.child;t!==null;){if(o=Ml(t),o!==null){for(e.flags|=64,Ea(r,!1),s=o.updateQueue,s!==null&&(e.updateQueue=s,e.flags|=4),r.lastEffect===null&&(e.firstEffect=null),e.lastEffect=r.lastEffect,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=2,s.nextEffect=null,s.firstEffect=null,s.lastEffect=null,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Se(ke,ke.current&1|2),e.child}t=t.sibling}r.tail!==null&&yt()>sp&&(e.flags|=64,s=!0,Ea(r,!1),e.lanes=33554432)}else{if(!s)if(t=Ml(o),t!==null){if(e.flags|=64,s=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ea(r,!0),r.tail===null&&r.tailMode==="hidden"&&!o.alternate&&!Rn)return e=e.lastEffect=r.lastEffect,e!==null&&(e.nextEffect=null),null}else 2*yt()-r.renderingStartTime>sp&&n!==1073741824&&(e.flags|=64,s=!0,Ea(r,!1),e.lanes=33554432);r.isBackwards?(o.sibling=e.child,e.child=o):(n=r.last,n!==null?n.sibling=o:e.child=o,r.last=o)}return r.tail!==null?(n=r.tail,r.rendering=n,r.tail=n.sibling,r.lastEffect=e.lastEffect,r.renderingStartTime=yt(),n.sibling=null,e=ke.current,Se(ke,s?e&1|2:e&1),n):null;case 23:case 24:return hp(),t!==null&&t.memoizedState!==null!=(e.memoizedState!==null)&&r.mode!=="unstable-defer-without-hiding"&&(e.flags|=4),null}throw Error(R(156,e.tag))}function lb(t){switch(t.tag){case 1:Ft(t.type)&&Sl();var e=t.flags;return e&4096?(t.flags=e&-4097|64,t):null;case 3:if(ks(),ge(Ut),ge(gt),$f(),e=t.flags,(e&64)!=0)throw Error(R(285));return t.flags=e&-4097|64,t;case 5:return Of(t),null;case 13:return ge(ke),e=t.flags,e&4096?(t.flags=e&-4097|64,t):null;case 19:return ge(ke),null;case 4:return ks(),null;case 10:return Nf(t),null;case 23:case 24:return hp(),null;default:return null}}function Qf(t,e){try{var n="",r=e;do n+=zk(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i}}function Yf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var cb=typeof WeakMap=="function"?WeakMap:Map;function I0(t,e,n){n=br(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Wl||(Wl=!0,op=r),Yf(t,e)},n}function E0(t,e,n){n=br(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return Yf(t,e),r(i)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){typeof r!="function"&&(Pn===null?Pn=new Set([this]):Pn.add(this),Yf(t,e));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}var hb=typeof WeakSet=="function"?WeakSet:Set;function T0(t){var e=t.ref;if(e!==null)if(typeof e=="function")try{e(null)}catch(n){Or(t,n)}else e.current=null}function db(t,e){switch(e.tag){case 0:case 11:case 15:case 22:return;case 1:if(e.flags&256&&t!==null){var n=t.memoizedProps,r=t.memoizedState;t=e.stateNode,e=t.getSnapshotBeforeUpdate(e.elementType===e.type?n:vn(e.type,n),r),t.__reactInternalSnapshotBeforeUpdate=e}return;case 3:e.flags&256&&_f(e.stateNode.containerInfo);return;case 5:case 6:case 4:case 17:return}throw Error(R(163))}function fb(t,e,n){switch(n.tag){case 0:case 11:case 15:case 22:if(e=n.updateQueue,e=e!==null?e.lastEffect:null,e!==null){t=e=e.next;do{if((t.tag&3)==3){var r=t.create;t.destroy=r()}t=t.next}while(t!==e)}if(e=n.updateQueue,e=e!==null?e.lastEffect:null,e!==null){t=e=e.next;do{var i=t;r=i.next,i=i.tag,(i&4)!=0&&(i&1)!=0&&(U0(n,t),Ib(n,t)),t=r}while(t!==e)}return;case 1:t=n.stateNode,n.flags&4&&(e===null?t.componentDidMount():(r=n.elementType===n.type?e.memoizedProps:vn(n.type,e.memoizedProps),t.componentDidUpdate(r,e.memoizedState,t.__reactInternalSnapshotBeforeUpdate))),e=n.updateQueue,e!==null&&Fw(n,e,t);return;case 3:if(e=n.updateQueue,e!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}Fw(n,e,t)}return;case 5:t=n.stateNode,e===null&&n.flags&4&&_w(n.type,n.memoizedProps)&&t.focus();return;case 6:return;case 4:return;case 12:return;case 13:n.memoizedState===null&&(n=n.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&Lv(n))));return;case 19:case 17:case 20:case 21:case 23:case 24:return}throw Error(R(163))}function S0(t,e){for(var n=t;;){if(n.tag===5){var r=n.stateNode;if(e)r=r.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none";else{r=n.stateNode;var i=n.memoizedProps.style;i=i!=null&&i.hasOwnProperty("display")?i.display:null,r.style.display=vv("display",i)}}else if(n.tag===6)n.stateNode.nodeValue=e?"":n.memoizedProps;else if((n.tag!==23&&n.tag!==24||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}}function k0(t,e){if(mi&&typeof mi.onCommitFiberUnmount=="function")try{mi.onCommitFiberUnmount(Tf,e)}catch{}switch(e.tag){case 0:case 11:case 14:case 15:case 22:if(t=e.updateQueue,t!==null&&(t=t.lastEffect,t!==null)){var n=t=t.next;do{var r=n,i=r.destroy;if(r=r.tag,i!==void 0)if((r&4)!=0)U0(e,n);else{r=e;try{i()}catch(s){Or(r,s)}}n=n.next}while(n!==t)}break;case 1:if(T0(e),t=e.stateNode,typeof t.componentWillUnmount=="function")try{t.props=e.memoizedProps,t.state=e.memoizedState,t.componentWillUnmount()}catch(s){Or(e,s)}break;case 5:T0(e);break;case 4:R0(t,e)}}function C0(t){t.alternate=null,t.child=null,t.dependencies=null,t.firstEffect=null,t.lastEffect=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.return=null,t.updateQueue=null}function b0(t){return t.tag===5||t.tag===3||t.tag===4}function A0(t){e:{for(var e=t.return;e!==null;){if(b0(e))break e;e=e.return}throw Error(R(160))}var n=e;switch(e=n.stateNode,n.tag){case 5:var r=!1;break;case 3:e=e.containerInfo,r=!0;break;case 4:e=e.containerInfo,r=!0;break;default:throw Error(R(161))}n.flags&16&&(zo(e,""),n.flags&=-17);e:t:for(n=t;;){for(;n.sibling===null;){if(n.return===null||b0(n.return)){n=null;break e}n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue t;n.child.return=n,n=n.child}if(!(n.flags&2)){n=n.stateNode;break e}}r?Xf(t,n,e):Jf(t,n,e)}function Xf(t,e,n){var r=t.tag,i=r===5||r===6;if(i)t=i?t.stateNode:t.stateNode.instance,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=_l));else if(r!==4&&(t=t.child,t!==null))for(Xf(t,e,n),t=t.sibling;t!==null;)Xf(t,e,n),t=t.sibling}function Jf(t,e,n){var r=t.tag,i=r===5||r===6;if(i)t=i?t.stateNode:t.stateNode.instance,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Jf(t,e,n),t=t.sibling;t!==null;)Jf(t,e,n),t=t.sibling}function R0(t,e){for(var n=e,r=!1,i,s;;){if(!r){r=n.return;e:for(;;){if(r===null)throw Error(R(160));switch(i=r.stateNode,r.tag){case 5:s=!1;break e;case 3:i=i.containerInfo,s=!0;break e;case 4:i=i.containerInfo,s=!0;break e}r=r.return}r=!0}if(n.tag===5||n.tag===6){e:for(var o=t,a=n,u=a;;)if(k0(o,u),u.child!==null&&u.tag!==4)u.child.return=u,u=u.child;else{if(u===a)break e;for(;u.sibling===null;){if(u.return===null||u.return===a)break e;u=u.return}u.sibling.return=u.return,u=u.sibling}s?(o=i,a=n.stateNode,o.nodeType===8?o.parentNode.removeChild(a):o.removeChild(a)):i.removeChild(n.stateNode)}else if(n.tag===4){if(n.child!==null){i=n.stateNode.containerInfo,s=!0,n.child.return=n,n=n.child;continue}}else if(k0(t,n),n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return,n.tag===4&&(r=!1)}n.sibling.return=n.return,n=n.sibling}}function Zf(t,e){switch(e.tag){case 0:case 11:case 14:case 15:case 22:var n=e.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var r=n=n.next;do(r.tag&3)==3&&(t=r.destroy,r.destroy=void 0,t!==void 0&&t()),r=r.next;while(r!==n)}return;case 1:return;case 5:if(n=e.stateNode,n!=null){r=e.memoizedProps;var i=t!==null?t.memoizedProps:r;t=e.type;var s=e.updateQueue;if(e.updateQueue=null,s!==null){for(n[El]=r,t==="input"&&r.type==="radio"&&r.name!=null&&hv(n,r),Fd(t,i),e=Fd(t,r),i=0;i<s.length;i+=2){var o=s[i],a=s[i+1];o==="style"?wv(n,a):o==="dangerouslySetInnerHTML"?yv(n,a):o==="children"?zo(n,a):_d(n,o,a,e)}switch(t){case"input":xd(n,r);break;case"textarea":pv(n,r);break;case"select":t=n._wrapperState.wasMultiple,n._wrapperState.wasMultiple=!!r.multiple,s=r.value,s!=null?as(n,!!r.multiple,s,!1):t!==!!r.multiple&&(r.defaultValue!=null?as(n,!!r.multiple,r.defaultValue,!0):as(n,!!r.multiple,r.multiple?[]:"",!1))}}}return;case 6:if(e.stateNode===null)throw Error(R(162));e.stateNode.nodeValue=e.memoizedProps;return;case 3:n=e.stateNode,n.hydrate&&(n.hydrate=!1,Lv(n.containerInfo));return;case 12:return;case 13:e.memoizedState!==null&&(ip=yt(),S0(e.child,!0)),N0(e);return;case 19:N0(e);return;case 17:return;case 23:case 24:S0(e,e.memoizedState!==null);return}throw Error(R(163))}function N0(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new hb),e.forEach(function(r){var i=Sb.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function pb(t,e){return t!==null&&(t=t.memoizedState,t===null||t.dehydrated!==null)?(e=e.memoizedState,e!==null&&e.dehydrated===null):!1}var mb=Math.ceil,ql=li.ReactCurrentDispatcher,ep=li.ReactCurrentOwner,W=0,At=null,$e=null,wt=0,_i=0,tp=Sr(0),it=0,Hl=null,bs=0,Ta=0,As=0,np=0,rp=null,ip=0,sp=1/0;function Rs(){sp=yt()+500}var U=null,Wl=!1,op=null,Pn=null,Nr=!1,Sa=null,ka=90,ap=[],up=[],Yn=null,Ca=0,lp=null,Gl=-1,Xn=0,Kl=0,ba=null,Ql=!1;function Gt(){return(W&48)!=0?yt():Gl!==-1?Gl:Gl=yt()}function Pr(t){if(t=t.mode,(t&2)==0)return 1;if((t&4)==0)return Es()===99?1:2;if(Xn===0&&(Xn=bs),nb.transition!==0){Kl!==0&&(Kl=rp!==null?rp.pendingLanes:0),t=Xn;var e=4186112&~Kl;return e&=-e,e===0&&(t=4186112&~t,e=t&-t,e===0&&(e=8192)),e}return t=Es(),(W&4)!=0&&t===98?t=hl(12,Xn):(t=sC(t),t=hl(t,Xn)),t}function xr(t,e,n){if(50<Ca)throw Ca=0,lp=null,Error(R(185));if(t=Yl(t,e),t===null)return null;dl(t,e,n),t===At&&(As|=e,it===4&&Ns(t,wt));var r=Es();e===1?(W&8)!=0&&(W&48)==0?cp(t):(an(t,n),W===0&&(Rs(),bn())):((W&4)==0||r!==98&&r!==99||(Yn===null?Yn=new Set([t]):Yn.add(t)),an(t,n)),rp=t}function Yl(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}function an(t,e){for(var n=t.callbackNode,r=t.suspendedLanes,i=t.pingedLanes,s=t.expirationTimes,o=t.pendingLanes;0<o;){var a=31-Ir(o),u=1<<a,l=s[a];if(l===-1){if((u&r)==0||(u&i)!=0){l=e,hs(u);var c=pe;s[a]=10<=c?l+250:6<=c?l+5e3:-1}}else l<=e&&(t.expiredLanes|=u);o&=~u}if(r=Zo(t,t===At?wt:0),e=pe,r===0)n!==null&&(n!==bf&&kf(n),t.callbackNode=null,t.callbackPriority=0);else{if(n!==null){if(t.callbackPriority===e)return;n!==bf&&kf(n)}e===15?(n=cp.bind(null,t),Gn===null?(Gn=[n],bl=Sf(Cl,Lw)):Gn.push(n),n=bf):e===14?n=ca(99,cp.bind(null,t)):(n=oC(e),n=ca(n,P0.bind(null,t))),t.callbackPriority=e,t.callbackNode=n}}function P0(t){if(Gl=-1,Kl=Xn=0,(W&48)!=0)throw Error(R(327));var e=t.callbackNode;if(Dr()&&t.callbackNode!==e)return null;var n=Zo(t,t===At?wt:0);if(n===0)return null;var r=n,i=W;W|=16;var s=L0();(At!==t||wt!==r)&&(Rs(),Ps(t,r));do try{vb();break}catch(a){O0(t,a)}while(1);if(Rf(),ql.current=s,W=i,$e!==null?r=0:(At=null,wt=0,r=it),(bs&As)!=0)Ps(t,0);else if(r!==0){if(r===2&&(W|=64,t.hydrate&&(t.hydrate=!1,_f(t.containerInfo)),n=jv(t),n!==0&&(r=Aa(t,n))),r===1)throw e=Hl,Ps(t,0),Ns(t,n),an(t,yt()),e;switch(t.finishedWork=t.current.alternate,t.finishedLanes=n,r){case 0:case 1:throw Error(R(345));case 2:Ii(t);break;case 3:if(Ns(t,n),(n&62914560)===n&&(r=ip+500-yt(),10<r)){if(Zo(t,0)!==0)break;if(i=t.suspendedLanes,(i&n)!==n){Gt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Iw(Ii.bind(null,t),r);break}Ii(t);break;case 4:if(Ns(t,n),(n&4186112)===n)break;for(r=t.eventTimes,i=-1;0<n;){var o=31-Ir(n);s=1<<o,o=r[o],o>i&&(i=o),n&=~s}if(n=i,n=yt()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*mb(n/1960))-n,10<n){t.timeoutHandle=Iw(Ii.bind(null,t),n);break}Ii(t);break;case 5:Ii(t);break;default:throw Error(R(329))}}return an(t,yt()),t.callbackNode===e?P0.bind(null,t):null}function Ns(t,e){for(e&=~np,e&=~As,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Ir(e),r=1<<n;t[n]=-1,e&=~r}}function cp(t){if((W&48)!=0)throw Error(R(327));if(Dr(),t===At&&(t.expiredLanes&wt)!=0){var e=wt,n=Aa(t,e);(bs&As)!=0&&(e=Zo(t,e),n=Aa(t,e))}else e=Zo(t,0),n=Aa(t,e);if(t.tag!==0&&n===2&&(W|=64,t.hydrate&&(t.hydrate=!1,_f(t.containerInfo)),e=jv(t),e!==0&&(n=Aa(t,e))),n===1)throw n=Hl,Ps(t,0),Ns(t,e),an(t,yt()),n;return t.finishedWork=t.current.alternate,t.finishedLanes=e,Ii(t),an(t,yt()),null}function gb(){if(Yn!==null){var t=Yn;Yn=null,t.forEach(function(e){e.expiredLanes|=24&e.pendingLanes,an(e,yt())})}bn()}function x0(t,e){var n=W;W|=1;try{return t(e)}finally{W=n,W===0&&(Rs(),bn())}}function D0(t,e){var n=W;W&=-2,W|=8;try{return t(e)}finally{W=n,W===0&&(Rs(),bn())}}function Xl(t,e){Se(tp,_i),_i|=e,bs|=e}function hp(){_i=tp.current,ge(tp)}function Ps(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,YC(n)),$e!==null)for(n=$e.return;n!==null;){var r=n;switch(r.tag){case 1:r=r.type.childContextTypes,r!=null&&Sl();break;case 3:ks(),ge(Ut),ge(gt),$f();break;case 5:Of(r);break;case 4:ks();break;case 13:ge(ke);break;case 19:ge(ke);break;case 10:Nf(r);break;case 23:case 24:hp()}n=n.return}At=t,$e=Lr(t.current,null),wt=_i=bs=e,it=0,Hl=null,np=As=Ta=0}function O0(t,e){do{var n=$e;try{if(Rf(),ga.current=jl,Ul){for(var r=Ne.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Ul=!1}if(ya=0,rt=vt=Ne=null,va=!1,ep.current=null,n===null||n.return===null){it=1,Hl=e,$e=null;break}e:{var s=t,o=n.return,a=n,u=e;if(e=wt,a.flags|=2048,a.firstEffect=a.lastEffect=null,u!==null&&typeof u=="object"&&typeof u.then=="function"){var l=u;if((a.mode&2)==0){var c=a.alternate;c?(a.updateQueue=c.updateQueue,a.memoizedState=c.memoizedState,a.lanes=c.lanes):(a.updateQueue=null,a.memoizedState=null)}var h=(ke.current&1)!=0,d=o;do{var g;if(g=d.tag===13){var y=d.memoizedState;if(y!==null)g=y.dehydrated!==null;else{var _=d.memoizedProps;g=_.fallback===void 0?!1:_.unstable_avoidThisFallback!==!0?!0:!h}}if(g){var f=d.updateQueue;if(f===null){var p=new Set;p.add(l),d.updateQueue=p}else f.add(l);if((d.mode&2)==0){if(d.flags|=64,a.flags|=16384,a.flags&=-2981,a.tag===1)if(a.alternate===null)a.tag=17;else{var m=br(-1,1);m.tag=2,Ar(a,m)}a.lanes|=1;break e}u=void 0,a=e;var w=s.pingCache;if(w===null?(w=s.pingCache=new cb,u=new Set,w.set(l,u)):(u=w.get(l),u===void 0&&(u=new Set,w.set(l,u))),!u.has(a)){u.add(a);var v=Tb.bind(null,s,l,a);l.then(v,v)}d.flags|=4096,d.lanes=e;break e}d=d.return}while(d!==null);u=Error((os(a.type)||"A React component")+` suspended while rendering, but no fallback UI was specified.

Add a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.`)}it!==5&&(it=2),u=Qf(u,a),d=o;do{switch(d.tag){case 3:s=u,d.flags|=4096,e&=-e,d.lanes|=e;var P=I0(d,s,e);Uw(d,P);break e;case 1:s=u;var b=d.type,V=d.stateNode;if((d.flags&64)==0&&(typeof b.getDerivedStateFromError=="function"||V!==null&&typeof V.componentDidCatch=="function"&&(Pn===null||!Pn.has(V)))){d.flags|=4096,e&=-e,d.lanes|=e;var F=E0(d,s,e);Uw(d,F);break e}}d=d.return}while(d!==null)}$0(n)}catch(M){e=M,$e===n&&n!==null&&($e=n=n.return);continue}break}while(1)}function L0(){var t=ql.current;return ql.current=jl,t===null?jl:t}function Aa(t,e){var n=W;W|=16;var r=L0();At===t&&wt===e||Ps(t,e);do try{yb();break}catch(i){O0(t,i)}while(1);if(Rf(),W=n,ql.current=r,$e!==null)throw Error(R(261));return At=null,wt=0,it}function yb(){for(;$e!==null;)M0($e)}function vb(){for(;$e!==null&&!ZC();)M0($e)}function M0(t){var e=V0(t.alternate,t,_i);t.memoizedProps=t.pendingProps,e===null?$0(t):$e=e,ep.current=null}function $0(t){var e=t;do{var n=e.alternate;if(t=e.return,(e.flags&2048)==0){if(n=ub(n,e,_i),n!==null){$e=n;return}if(n=e,n.tag!==24&&n.tag!==23||n.memoizedState===null||(_i&1073741824)!=0||(n.mode&4)==0){for(var r=0,i=n.child;i!==null;)r|=i.lanes|i.childLanes,i=i.sibling;n.childLanes=r}t!==null&&(t.flags&2048)==0&&(t.firstEffect===null&&(t.firstEffect=e.firstEffect),e.lastEffect!==null&&(t.lastEffect!==null&&(t.lastEffect.nextEffect=e.firstEffect),t.lastEffect=e.lastEffect),1<e.flags&&(t.lastEffect!==null?t.lastEffect.nextEffect=e:t.firstEffect=e,t.lastEffect=e))}else{if(n=lb(e),n!==null){n.flags&=2047,$e=n;return}t!==null&&(t.firstEffect=t.lastEffect=null,t.flags|=2048)}if(e=e.sibling,e!==null){$e=e;return}$e=e=t}while(e!==null);it===0&&(it=5)}function Ii(t){var e=Es();return gi(99,wb.bind(null,t,e)),null}function wb(t,e){do Dr();while(Sa!==null);if((W&48)!=0)throw Error(R(327));var n=t.finishedWork;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(R(177));t.callbackNode=null;var r=n.lanes|n.childLanes,i=r,s=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;for(var o=t.eventTimes,a=t.expirationTimes;0<s;){var u=31-Ir(s),l=1<<u;i[u]=0,o[u]=-1,a[u]=-1,s&=~l}if(Yn!==null&&(r&24)==0&&Yn.has(t)&&Yn.delete(t),t===At&&($e=At=null,wt=0),1<n.flags?n.lastEffect!==null?(n.lastEffect.nextEffect=n,r=n.firstEffect):r=n:r=n.firstEffect,r!==null){if(i=W,W|=32,ep.current=null,yf=fl,o=uw(),ff(o)){if("selectionStart"in o)a={start:o.selectionStart,end:o.selectionEnd};else e:if(a=(a=o.ownerDocument)&&a.defaultView||window,(l=a.getSelection&&a.getSelection())&&l.rangeCount!==0){a=l.anchorNode,s=l.anchorOffset,u=l.focusNode,l=l.focusOffset;try{a.nodeType,u.nodeType}catch{a=null;break e}var c=0,h=-1,d=-1,g=0,y=0,_=o,f=null;t:for(;;){for(var p;_!==a||s!==0&&_.nodeType!==3||(h=c+s),_!==u||l!==0&&_.nodeType!==3||(d=c+l),_.nodeType===3&&(c+=_.nodeValue.length),(p=_.firstChild)!==null;)f=_,_=p;for(;;){if(_===o)break t;if(f===a&&++g===s&&(h=c),f===u&&++y===l&&(d=c),(p=_.nextSibling)!==null)break;_=f,f=_.parentNode}_=p}a=h===-1||d===-1?null:{start:h,end:d}}else a=null;a=a||{start:0,end:0}}else a=null;vf={focusedElem:o,selectionRange:a},fl=!1,ba=null,Ql=!1,U=r;do try{_b()}catch(M){if(U===null)throw Error(R(330));Or(U,M),U=U.nextEffect}while(U!==null);ba=null,U=r;do try{for(o=t;U!==null;){var m=U.flags;if(m&16&&zo(U.stateNode,""),m&128){var w=U.alternate;if(w!==null){var v=w.ref;v!==null&&(typeof v=="function"?v(null):v.current=null)}}switch(m&1038){case 2:A0(U),U.flags&=-3;break;case 6:A0(U),U.flags&=-3,Zf(U.alternate,U);break;case 1024:U.flags&=-1025;break;case 1028:U.flags&=-1025,Zf(U.alternate,U);break;case 4:Zf(U.alternate,U);break;case 8:a=U,R0(o,a);var P=a.alternate;C0(a),P!==null&&C0(P)}U=U.nextEffect}}catch(M){if(U===null)throw Error(R(330));Or(U,M),U=U.nextEffect}while(U!==null);if(v=vf,w=uw(),m=v.focusedElem,o=v.selectionRange,w!==m&&m&&m.ownerDocument&&aw(m.ownerDocument.documentElement,m)){for(o!==null&&ff(m)&&(w=o.start,v=o.end,v===void 0&&(v=w),"selectionStart"in m?(m.selectionStart=w,m.selectionEnd=Math.min(v,m.value.length)):(v=(w=m.ownerDocument||document)&&w.defaultView||window,v.getSelection&&(v=v.getSelection(),a=m.textContent.length,P=Math.min(o.start,a),o=o.end===void 0?P:Math.min(o.end,a),!v.extend&&P>o&&(a=o,o=P,P=a),a=ow(m,P),s=ow(m,o),a&&s&&(v.rangeCount!==1||v.anchorNode!==a.node||v.anchorOffset!==a.offset||v.focusNode!==s.node||v.focusOffset!==s.offset)&&(w=w.createRange(),w.setStart(a.node,a.offset),v.removeAllRanges(),P>o?(v.addRange(w),v.extend(s.node,s.offset)):(w.setEnd(s.node,s.offset),v.addRange(w)))))),w=[],v=m;v=v.parentNode;)v.nodeType===1&&w.push({element:v,left:v.scrollLeft,top:v.scrollTop});for(typeof m.focus=="function"&&m.focus(),m=0;m<w.length;m++)v=w[m],v.element.scrollLeft=v.left,v.element.scrollTop=v.top}fl=!!yf,vf=yf=null,t.current=n,U=r;do try{for(m=t;U!==null;){var b=U.flags;if(b&36&&fb(m,U.alternate,U),b&128){w=void 0;var V=U.ref;if(V!==null){var F=U.stateNode;switch(U.tag){case 5:w=F;break;default:w=F}typeof V=="function"?V(w):V.current=w}}U=U.nextEffect}}catch(M){if(U===null)throw Error(R(330));Or(U,M),U=U.nextEffect}while(U!==null);U=null,tb(),W=i}else t.current=n;if(Nr)Nr=!1,Sa=t,ka=e;else for(U=r;U!==null;)e=U.nextEffect,U.nextEffect=null,U.flags&8&&(b=U,b.sibling=null,b.stateNode=null),U=e;if(r=t.pendingLanes,r===0&&(Pn=null),r===1?t===lp?Ca++:(Ca=0,lp=t):Ca=0,n=n.stateNode,mi&&typeof mi.onCommitFiberRoot=="function")try{mi.onCommitFiberRoot(Tf,n,void 0,(n.current.flags&64)==64)}catch{}if(an(t,yt()),Wl)throw Wl=!1,t=op,op=null,t;return(W&8)!=0||bn(),null}function _b(){for(;U!==null;){var t=U.alternate;Ql||ba===null||((U.flags&8)!=0?Av(U,ba)&&(Ql=!0):U.tag===13&&pb(t,U)&&Av(U,ba)&&(Ql=!0));var e=U.flags;(e&256)!=0&&db(t,U),(e&512)==0||Nr||(Nr=!0,ca(97,function(){return Dr(),null})),U=U.nextEffect}}function Dr(){if(ka!==90){var t=97<ka?97:ka;return ka=90,gi(t,Eb)}return!1}function Ib(t,e){ap.push(e,t),Nr||(Nr=!0,ca(97,function(){return Dr(),null}))}function U0(t,e){up.push(e,t),Nr||(Nr=!0,ca(97,function(){return Dr(),null}))}function Eb(){if(Sa===null)return!1;var t=Sa;if(Sa=null,(W&48)!=0)throw Error(R(331));var e=W;W|=32;var n=up;up=[];for(var r=0;r<n.length;r+=2){var i=n[r],s=n[r+1],o=i.destroy;if(i.destroy=void 0,typeof o=="function")try{o()}catch(u){if(s===null)throw Error(R(330));Or(s,u)}}for(n=ap,ap=[],r=0;r<n.length;r+=2){i=n[r],s=n[r+1];try{var a=i.create;i.destroy=a()}catch(u){if(s===null)throw Error(R(330));Or(s,u)}}for(a=t.current.firstEffect;a!==null;)t=a.nextEffect,a.nextEffect=null,a.flags&8&&(a.sibling=null,a.stateNode=null),a=t;return W=e,bn(),!0}function F0(t,e,n){e=Qf(n,e),e=I0(t,e,1),Ar(t,e),e=Gt(),t=Yl(t,1),t!==null&&(dl(t,1,e),an(t,e))}function Or(t,e){if(t.tag===3)F0(t,t,e);else for(var n=t.return;n!==null;){if(n.tag===3){F0(n,t,e);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Pn===null||!Pn.has(r))){t=Qf(e,t);var i=E0(n,t,1);if(Ar(n,i),i=Gt(),n=Yl(n,1),n!==null)dl(n,1,i),an(n,i);else if(typeof r.componentDidCatch=="function"&&(Pn===null||!Pn.has(r)))try{r.componentDidCatch(e,t)}catch{}break}}n=n.return}}function Tb(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Gt(),t.pingedLanes|=t.suspendedLanes&n,At===t&&(wt&n)===n&&(it===4||it===3&&(wt&62914560)===wt&&500>yt()-ip?Ps(t,0):np|=n),an(t,e)}function Sb(t,e){var n=t.stateNode;n!==null&&n.delete(e),e=0,e===0&&(e=t.mode,(e&2)==0?e=1:(e&4)==0?e=Es()===99?1:2:(Xn===0&&(Xn=bs),e=ds(62914560&~Xn),e===0&&(e=4194304))),n=Gt(),t=Yl(t,e),t!==null&&(dl(t,e,n),an(t,n))}var V0;V0=function(t,e,n){var r=e.lanes;if(t!==null)if(t.memoizedProps!==e.pendingProps||Ut.current)wn=!0;else if((n&r)!=0)wn=(t.flags&16384)!=0;else{switch(wn=!1,e.tag){case 3:h0(e),Mf();break;case 5:Ww(e);break;case 1:Ft(e.type)&&kl(e);break;case 4:Df(e,e.stateNode.containerInfo);break;case 10:r=e.memoizedProps.value;var i=e.type._context;Se(Al,i._currentValue),i._currentValue=r;break;case 13:if(e.memoizedState!==null)return(n&e.child.childLanes)!=0?d0(t,e,n):(Se(ke,ke.current&1),e=Qn(t,e,n),e!==null?e.sibling:null);Se(ke,ke.current&1);break;case 19:if(r=(n&e.childLanes)!=0,(t.flags&64)!=0){if(r)return y0(t,e,n);e.flags|=64}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Se(ke,ke.current),r)break;return null;case 23:case 24:return e.lanes=0,qf(t,e,n)}return Qn(t,e,n)}else wn=!1;switch(e.lanes=0,e.tag){case 2:if(r=e.type,t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2),t=e.pendingProps,i=Is(e,gt.current),Ss(e,n),i=Ff(null,e,r,t,i,n),e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0){if(e.tag=1,e.memoizedState=null,e.updateQueue=null,Ft(r)){var s=!0;kl(e)}else s=!1;e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Pf(e);var o=r.getDerivedStateFromProps;typeof o=="function"&&Pl(e,r,o,t),i.updater=xl,e.stateNode=i,i._reactInternals=e,xf(e,r,t,n),e=Wf(null,e,r,!0,s,n)}else e.tag=0,Bt(null,e,i,n),e=e.child;return e;case 16:i=e.elementType;e:{switch(t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2),t=e.pendingProps,s=i._init,i=s(i._payload),e.type=i,s=e.tag=Cb(i),t=vn(i,t),s){case 0:e=Hf(null,e,i,t,n);break e;case 1:e=c0(null,e,i,t,n);break e;case 11:e=o0(null,e,i,t,n);break e;case 14:e=a0(null,e,i,vn(i.type,t),r,n);break e}throw Error(R(306,i,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:vn(r,i),Hf(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:vn(r,i),c0(t,e,r,i,n);case 3:if(h0(e),r=e.updateQueue,t===null||r===null)throw Error(R(282));if(r=e.pendingProps,i=e.memoizedState,i=i!==null?i.element:null,$w(t,e),ha(e,r,null,n),r=e.memoizedState.element,r===i)Mf(),e=Qn(t,e,n);else{if(i=e.stateNode,(s=i.hydrate)&&(Rr=ys(e.stateNode.containerInfo.firstChild),Kn=e,s=Rn=!0),s){if(t=i.mutableSourceEagerHydrationData,t!=null)for(i=0;i<t.length;i+=2)s=t[i],s._workInProgressVersionPrimary=t[i+1],Cs.push(s);for(n=Hw(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|1024,n=n.sibling}else Bt(t,e,r,n),Mf();e=e.child}return e;case 5:return Ww(e),t===null&&Lf(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,wf(r,i)?o=null:s!==null&&wf(r,s)&&(e.flags|=16),l0(t,e),Bt(t,e,o,n),e.child;case 6:return t===null&&Lf(e),null;case 13:return d0(t,e,n);case 4:return Df(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Ll(e,null,r,n):Bt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:vn(r,i),o0(t,e,r,i,n);case 7:return Bt(t,e,e.pendingProps,n),e.child;case 8:return Bt(t,e,e.pendingProps.children,n),e.child;case 12:return Bt(t,e,e.pendingProps.children,n),e.child;case 10:e:{r=e.type._context,i=e.pendingProps,o=e.memoizedProps,s=i.value;var a=e.type._context;if(Se(Al,a._currentValue),a._currentValue=s,o!==null)if(a=o.value,s=rn(a,s)?0:(typeof r._calculateChangedBits=="function"?r._calculateChangedBits(a,s):1073741823)|0,s===0){if(o.children===i.children&&!Ut.current){e=Qn(t,e,n);break e}}else for(a=e.child,a!==null&&(a.return=e);a!==null;){var u=a.dependencies;if(u!==null){o=a.child;for(var l=u.firstContext;l!==null;){if(l.context===r&&(l.observedBits&s)!=0){a.tag===1&&(l=br(-1,n&-n),l.tag=2,Ar(a,l)),a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),Mw(a.return,n),u.lanes|=n;break}l=l.next}}else o=a.tag===10&&a.type===e.type?null:a.child;if(o!==null)o.return=a;else for(o=a;o!==null;){if(o===e){o=null;break}if(a=o.sibling,a!==null){a.return=o.return,o=a;break}o=o.return}a=o}Bt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,s=e.pendingProps,r=s.children,Ss(e,n),i=sn(i,s.unstable_observedBits),r=r(i),e.flags|=1,Bt(t,e,r,n),e.child;case 14:return i=e.type,s=vn(i,e.pendingProps),s=vn(i.type,s),a0(t,e,i,s,r,n);case 15:return u0(t,e,e.type,e.pendingProps,r,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:vn(r,i),t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2),e.tag=1,Ft(r)?(t=!0,kl(e)):t=!1,Ss(e,n),jw(e,r,i),xf(e,r,i,n),Wf(null,e,r,!0,t,n);case 19:return y0(t,e,n);case 23:return qf(t,e,n);case 24:return qf(t,e,n)}throw Error(R(156,e.tag))};function kb(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.flags=0,this.lastEffect=this.firstEffect=this.nextEffect=null,this.childLanes=this.lanes=0,this.alternate=null}function un(t,e,n,r){return new kb(t,e,n,r)}function dp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Cb(t){if(typeof t=="function")return dp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Zu)return 11;if(t===tl)return 14}return 2}function Lr(t,e){var n=t.alternate;return n===null?(n=un(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.nextEffect=null,n.firstEffect=null,n.lastEffect=null),n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Jl(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")dp(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case gr:return xs(n.children,i,s,e);case ov:o=8,i|=16;break;case Id:o=8,i|=1;break;case Fo:return t=un(12,n,e,i|8),t.elementType=Fo,t.type=Fo,t.lanes=s,t;case Vo:return t=un(13,n,e,i),t.type=Vo,t.elementType=Vo,t.lanes=s,t;case el:return t=un(19,n,e,i),t.elementType=el,t.lanes=s,t;case bd:return fp(n,i,s,e);case Ad:return t=un(24,n,e,i),t.elementType=Ad,t.lanes=s,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Ed:o=10;break e;case Td:o=9;break e;case Zu:o=11;break e;case tl:o=14;break e;case Sd:o=16,r=null;break e;case kd:o=22;break e}throw Error(R(130,t==null?t:typeof t,""))}return e=un(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function xs(t,e,n,r){return t=un(7,t,r,e),t.lanes=n,t}function fp(t,e,n,r){return t=un(23,t,r,e),t.elementType=bd,t.lanes=n,t}function pp(t,e,n){return t=un(6,t,null,e),t.lanes=n,t}function mp(t,e,n){return e=un(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function bb(t,e,n){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.pendingContext=this.context=null,this.hydrate=n,this.callbackNode=null,this.callbackPriority=0,this.eventTimes=ef(0),this.expirationTimes=ef(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ef(0),this.mutableSourceEagerHydrationData=null}function Ab(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ci,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Zl(t,e,n,r){var i=e.current,s=Gt(),o=Pr(i);e:if(n){n=n._reactInternals;t:{if(di(n)!==n||n.tag!==1)throw Error(R(170));var a=n;do{switch(a.tag){case 3:a=a.stateNode.context;break t;case 1:if(Ft(a.type)){a=a.stateNode.__reactInternalMemoizedMergedChildContext;break t}}a=a.return}while(a!==null);throw Error(R(171))}if(n.tag===1){var u=n.type;if(Ft(u)){n=Cw(n,u,a);break e}}n=a}else n=kr;return e.context===null?e.context=n:e.pendingContext=n,e=br(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),Ar(i,e),xr(i,o,s),o}function gp(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function B0(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function yp(t,e){B0(t,e),(t=t.alternate)&&B0(t,e)}function Rb(){return null}function vp(t,e,n){var r=n!=null&&n.hydrationOptions!=null&&n.hydrationOptions.mutableSources||null;if(n=new bb(t,e,n!=null&&n.hydrate===!0),e=un(3,null,null,e===2?7:e===1?3:0),n.current=e,e.stateNode=n,Pf(e),t[vs]=n.current,mw(t.nodeType===8?t.parentNode:t),r)for(t=0;t<r.length;t++){e=r[t];var i=e._getVersion;i=i(e._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[e,i]:n.mutableSourceEagerHydrationData.push(e,i)}this._internalRoot=n}vp.prototype.render=function(t){Zl(t,this._internalRoot,null,null)};vp.prototype.unmount=function(){var t=this._internalRoot,e=t.containerInfo;Zl(null,t,null,function(){e[vs]=null})};function Ra(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Nb(t,e){if(e||(e=t?t.nodeType===9?t.documentElement:t.firstChild:null,e=!(!e||e.nodeType!==1||!e.hasAttribute("data-reactroot"))),!e)for(var n;n=t.lastChild;)t.removeChild(n);return new vp(t,0,e?{hydrate:!0}:void 0)}function ec(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s._internalRoot;if(typeof i=="function"){var a=i;i=function(){var l=gp(o);a.call(l)}}Zl(e,o,t,i)}else{if(s=n._reactRootContainer=Nb(n,r),o=s._internalRoot,typeof i=="function"){var u=i;i=function(){var l=gp(o);u.call(l)}}D0(function(){Zl(e,o,t,i)})}return gp(o)}Rv=function(t){if(t.tag===13){var e=Gt();xr(t,4,e),yp(t,4)}};Kd=function(t){if(t.tag===13){var e=Gt();xr(t,67108864,e),yp(t,67108864)}};Nv=function(t){if(t.tag===13){var e=Gt(),n=Pr(t);xr(t,n,e),yp(t,n)}};Pv=function(t,e){return e()};Bd=function(t,e,n){switch(e){case"input":if(xd(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Tl(r);if(!i)throw Error(R(90));lv(r),xd(r,i)}}}break;case"textarea":pv(t,n);break;case"select":e=n.value,e!=null&&as(t,!!n.multiple,e,!1)}};jd=x0;Tv=function(t,e,n,r,i){var s=W;W|=4;try{return gi(98,t.bind(null,e,n,r,i))}finally{W=s,W===0&&(Rs(),bn())}};zd=function(){(W&49)==0&&(gb(),Dr())};Sv=function(t,e){var n=W;W|=2;try{return t(e)}finally{W=n,W===0&&(Rs(),bn())}};function j0(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ra(e))throw Error(R(200));return Ab(t,e,null,n)}var Pb={Events:[la,ws,Tl,Iv,Ev,Dr,{current:!1}]},Na={findFiberByHostInstance:fi,bundleType:0,version:"17.0.2",rendererPackageName:"react-dom"},xb={bundleType:Na.bundleType,version:Na.version,rendererPackageName:Na.rendererPackageName,rendererConfig:Na.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:li.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=bv(t),t===null?null:t.stateNode},findFiberByHostInstance:Na.findFiberByHostInstance||Rb,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!="undefined"){var tc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!tc.isDisabled&&tc.supportsFiber)try{Tf=tc.inject(xb),mi=tc}catch{}}nn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Pb;nn.createPortal=j0;nn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(R(188)):Error(R(268,Object.keys(t)));return t=bv(e),t=t===null?null:t.stateNode,t};nn.flushSync=function(t,e){var n=W;if((n&48)!=0)return t(e);W|=1;try{if(t)return gi(99,t.bind(null,e))}finally{W=n,bn()}};nn.hydrate=function(t,e,n){if(!Ra(e))throw Error(R(200));return ec(null,t,e,!0,n)};nn.render=function(t,e,n){if(!Ra(e))throw Error(R(200));return ec(null,t,e,!1,n)};nn.unmountComponentAtNode=function(t){if(!Ra(t))throw Error(R(40));return t._reactRootContainer?(D0(function(){ec(null,null,t,!1,function(){t._reactRootContainer=null,t[vs]=null})}),!0):!1};nn.unstable_batchedUpdates=x0;nn.unstable_createPortal=function(t,e){return j0(t,e,2<arguments.length&&arguments[2]!==void 0?arguments[2]:null)};nn.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Ra(n))throw Error(R(200));if(t==null||t._reactInternals===void 0)throw Error(R(38));return ec(t,e,n,!1,r)};nn.version="17.0.2";function z0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(z0)}catch(t){console.error(t)}}z0(),Zy.exports=nn;var r2=Zy.exports,nc={exports:{}},le={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ze=typeof Symbol=="function"&&Symbol.for,wp=ze?Symbol.for("react.element"):60103,_p=ze?Symbol.for("react.portal"):60106,rc=ze?Symbol.for("react.fragment"):60107,ic=ze?Symbol.for("react.strict_mode"):60108,sc=ze?Symbol.for("react.profiler"):60114,oc=ze?Symbol.for("react.provider"):60109,ac=ze?Symbol.for("react.context"):60110,Ip=ze?Symbol.for("react.async_mode"):60111,uc=ze?Symbol.for("react.concurrent_mode"):60111,lc=ze?Symbol.for("react.forward_ref"):60112,cc=ze?Symbol.for("react.suspense"):60113,Db=ze?Symbol.for("react.suspense_list"):60120,hc=ze?Symbol.for("react.memo"):60115,dc=ze?Symbol.for("react.lazy"):60116,Ob=ze?Symbol.for("react.block"):60121,Lb=ze?Symbol.for("react.fundamental"):60117,Mb=ze?Symbol.for("react.responder"):60118,$b=ze?Symbol.for("react.scope"):60119;function Kt(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case wp:switch(t=t.type,t){case Ip:case uc:case rc:case sc:case ic:case cc:return t;default:switch(t=t&&t.$$typeof,t){case ac:case lc:case dc:case hc:case oc:return t;default:return e}}case _p:return e}}}function q0(t){return Kt(t)===uc}le.AsyncMode=Ip;le.ConcurrentMode=uc;le.ContextConsumer=ac;le.ContextProvider=oc;le.Element=wp;le.ForwardRef=lc;le.Fragment=rc;le.Lazy=dc;le.Memo=hc;le.Portal=_p;le.Profiler=sc;le.StrictMode=ic;le.Suspense=cc;le.isAsyncMode=function(t){return q0(t)||Kt(t)===Ip};le.isConcurrentMode=q0;le.isContextConsumer=function(t){return Kt(t)===ac};le.isContextProvider=function(t){return Kt(t)===oc};le.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===wp};le.isForwardRef=function(t){return Kt(t)===lc};le.isFragment=function(t){return Kt(t)===rc};le.isLazy=function(t){return Kt(t)===dc};le.isMemo=function(t){return Kt(t)===hc};le.isPortal=function(t){return Kt(t)===_p};le.isProfiler=function(t){return Kt(t)===sc};le.isStrictMode=function(t){return Kt(t)===ic};le.isSuspense=function(t){return Kt(t)===cc};le.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===rc||t===uc||t===sc||t===ic||t===cc||t===Db||typeof t=="object"&&t!==null&&(t.$$typeof===dc||t.$$typeof===hc||t.$$typeof===oc||t.$$typeof===ac||t.$$typeof===lc||t.$$typeof===Lb||t.$$typeof===Mb||t.$$typeof===$b||t.$$typeof===Ob)};le.typeOf=Kt;nc.exports=le;function Ub(t){function e(S,k,D,z,I){for(var X=0,x=0,ae=0,se=0,ue,Y,Ze=0,$t=0,ne,mt=ne=ue=0,oe=0,et=0,Oo=0,tt=0,Ku=D.length,Lo=Ku-1,gn,K="",Re="",cd="",hd="",mr;oe<Ku;){if(Y=D.charCodeAt(oe),oe===Lo&&x+se+ae+X!==0&&(x!==0&&(Y=x===47?10:47),se=ae=X=0,Ku++,Lo++),x+se+ae+X===0){if(oe===Lo&&(0<et&&(K=K.replace(d,"")),0<K.trim().length)){switch(Y){case 32:case 9:case 59:case 13:case 10:break;default:K+=D.charAt(oe)}Y=59}switch(Y){case 123:for(K=K.trim(),ue=K.charCodeAt(0),ne=1,tt=++oe;oe<Ku;){switch(Y=D.charCodeAt(oe)){case 123:ne++;break;case 125:ne--;break;case 47:switch(Y=D.charCodeAt(oe+1)){case 42:case 47:e:{for(mt=oe+1;mt<Lo;++mt)switch(D.charCodeAt(mt)){case 47:if(Y===42&&D.charCodeAt(mt-1)===42&&oe+2!==mt){oe=mt+1;break e}break;case 10:if(Y===47){oe=mt+1;break e}}oe=mt}}break;case 91:Y++;case 40:Y++;case 34:case 39:for(;oe++<Lo&&D.charCodeAt(oe)!==Y;);}if(ne===0)break;oe++}switch(ne=D.substring(tt,oe),ue===0&&(ue=(K=K.replace(h,"").trim()).charCodeAt(0)),ue){case 64:switch(0<et&&(K=K.replace(d,"")),Y=K.charCodeAt(1),Y){case 100:case 109:case 115:case 45:et=k;break;default:et=mn}if(ne=e(k,et,ne,Y,I+1),tt=ne.length,0<pt&&(et=n(mn,K,Oo),mr=a(3,ne,et,k,de,fe,tt,Y,I,z),K=et.join(""),mr!==void 0&&(tt=(ne=mr.trim()).length)===0&&(Y=0,ne="")),0<tt)switch(Y){case 115:K=K.replace(b,o);case 100:case 109:case 45:ne=K+"{"+ne+"}";break;case 107:K=K.replace(m,"$1 $2"),ne=K+"{"+ne+"}",ne=Te===1||Te===2&&s("@"+ne,3)?"@-webkit-"+ne+"@"+ne:"@"+ne;break;default:ne=K+ne,z===112&&(ne=(Re+=ne,""))}else ne="";break;default:ne=e(k,n(k,K,Oo),ne,z,I+1)}cd+=ne,ne=Oo=et=mt=ue=0,K="",Y=D.charCodeAt(++oe);break;case 125:case 59:if(K=(0<et?K.replace(d,""):K).trim(),1<(tt=K.length))switch(mt===0&&(ue=K.charCodeAt(0),ue===45||96<ue&&123>ue)&&(tt=(K=K.replace(" ",":")).length),0<pt&&(mr=a(1,K,k,S,de,fe,Re.length,z,I,z))!==void 0&&(tt=(K=mr.trim()).length)===0&&(K="\0\0"),ue=K.charCodeAt(0),Y=K.charCodeAt(1),ue){case 0:break;case 64:if(Y===105||Y===99){hd+=K+D.charAt(oe);break}default:K.charCodeAt(tt-1)!==58&&(Re+=i(K,ue,Y,K.charCodeAt(2)))}Oo=et=mt=ue=0,K="",Y=D.charCodeAt(++oe)}}switch(Y){case 13:case 10:x===47?x=0:1+ue===0&&z!==107&&0<K.length&&(et=1,K+="\0"),0<pt*pr&&a(0,K,k,S,de,fe,Re.length,z,I,z),fe=1,de++;break;case 59:case 125:if(x+se+ae+X===0){fe++;break}default:switch(fe++,gn=D.charAt(oe),Y){case 9:case 32:if(se+X+x===0)switch(Ze){case 44:case 58:case 9:case 32:gn="";break;default:Y!==32&&(gn=" ")}break;case 0:gn="\\0";break;case 12:gn="\\f";break;case 11:gn="\\v";break;case 38:se+x+X===0&&(et=Oo=1,gn="\f"+gn);break;case 108:if(se+x+X+kt===0&&0<mt)switch(oe-mt){case 2:Ze===112&&D.charCodeAt(oe-3)===58&&(kt=Ze);case 8:$t===111&&(kt=$t)}break;case 58:se+x+X===0&&(mt=oe);break;case 44:x+ae+se+X===0&&(et=1,gn+="\r");break;case 34:case 39:x===0&&(se=se===Y?0:se===0?Y:se);break;case 91:se+x+ae===0&&X++;break;case 93:se+x+ae===0&&X--;break;case 41:se+x+X===0&&ae--;break;case 40:if(se+x+X===0){if(ue===0)switch(2*Ze+3*$t){case 533:break;default:ue=1}ae++}break;case 64:x+ae+se+X+mt+ne===0&&(ne=1);break;case 42:case 47:if(!(0<se+X+ae))switch(x){case 0:switch(2*Y+3*D.charCodeAt(oe+1)){case 235:x=47;break;case 220:tt=oe,x=42}break;case 42:Y===47&&Ze===42&&tt+2!==oe&&(D.charCodeAt(tt+2)===33&&(Re+=D.substring(tt,oe+1)),gn="",x=0)}}x===0&&(K+=gn)}$t=Ze,Ze=Y,oe++}if(tt=Re.length,0<tt){if(et=k,0<pt&&(mr=a(2,Re,et,S,de,fe,tt,z,I,z),mr!==void 0&&(Re=mr).length===0))return hd+Re+cd;if(Re=et.join(",")+"{"+Re+"}",Te*kt!=0){switch(Te!==2||s(Re,2)||(kt=0),kt){case 111:Re=Re.replace(v,":-moz-$1")+Re;break;case 112:Re=Re.replace(w,"::-webkit-input-$1")+Re.replace(w,"::-moz-$1")+Re.replace(w,":-ms-input-$1")+Re}kt=0}}return hd+Re+cd}function n(S,k,D){var z=k.trim().split(f);k=z;var I=z.length,X=S.length;switch(X){case 0:case 1:var x=0;for(S=X===0?"":S[0]+" ";x<I;++x)k[x]=r(S,k[x],D).trim();break;default:var ae=x=0;for(k=[];x<I;++x)for(var se=0;se<X;++se)k[ae++]=r(S[se]+" ",z[x],D).trim()}return k}function r(S,k,D){var z=k.charCodeAt(0);switch(33>z&&(z=(k=k.trim()).charCodeAt(0)),z){case 38:return k.replace(p,"$1"+S.trim());case 58:return S.trim()+k.replace(p,"$1"+S.trim());default:if(0<1*D&&0<k.indexOf("\f"))return k.replace(p,(S.charCodeAt(0)===58?"":"$1")+S.trim())}return S+k}function i(S,k,D,z){var I=S+";",X=2*k+3*D+4*z;if(X===944){S=I.indexOf(":",9)+1;var x=I.substring(S,I.length-1).trim();return x=I.substring(0,S).trim()+x+";",Te===1||Te===2&&s(x,1)?"-webkit-"+x+x:x}if(Te===0||Te===2&&!s(I,1))return I;switch(X){case 1015:return I.charCodeAt(10)===97?"-webkit-"+I+I:I;case 951:return I.charCodeAt(3)===116?"-webkit-"+I+I:I;case 963:return I.charCodeAt(5)===110?"-webkit-"+I+I:I;case 1009:if(I.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+I+I;case 978:return"-webkit-"+I+"-moz-"+I+I;case 1019:case 983:return"-webkit-"+I+"-moz-"+I+"-ms-"+I+I;case 883:if(I.charCodeAt(8)===45)return"-webkit-"+I+I;if(0<I.indexOf("image-set(",11))return I.replace(kn,"$1-webkit-$2")+I;break;case 932:if(I.charCodeAt(4)===45)switch(I.charCodeAt(5)){case 103:return"-webkit-box-"+I.replace("-grow","")+"-webkit-"+I+"-ms-"+I.replace("grow","positive")+I;case 115:return"-webkit-"+I+"-ms-"+I.replace("shrink","negative")+I;case 98:return"-webkit-"+I+"-ms-"+I.replace("basis","preferred-size")+I}return"-webkit-"+I+"-ms-"+I+I;case 964:return"-webkit-"+I+"-ms-flex-"+I+I;case 1023:if(I.charCodeAt(8)!==99)break;return x=I.substring(I.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+x+"-webkit-"+I+"-ms-flex-pack"+x+I;case 1005:return y.test(I)?I.replace(g,":-webkit-")+I.replace(g,":-moz-")+I:I;case 1e3:switch(x=I.substring(13).trim(),k=x.indexOf("-")+1,x.charCodeAt(0)+x.charCodeAt(k)){case 226:x=I.replace(P,"tb");break;case 232:x=I.replace(P,"tb-rl");break;case 220:x=I.replace(P,"lr");break;default:return I}return"-webkit-"+I+"-ms-"+x+I;case 1017:if(I.indexOf("sticky",9)===-1)break;case 975:switch(k=(I=S).length-10,x=(I.charCodeAt(k)===33?I.substring(0,k):I).substring(S.indexOf(":",7)+1).trim(),X=x.charCodeAt(0)+(x.charCodeAt(7)|0)){case 203:if(111>x.charCodeAt(8))break;case 115:I=I.replace(x,"-webkit-"+x)+";"+I;break;case 207:case 102:I=I.replace(x,"-webkit-"+(102<X?"inline-":"")+"box")+";"+I.replace(x,"-webkit-"+x)+";"+I.replace(x,"-ms-"+x+"box")+";"+I}return I+";";case 938:if(I.charCodeAt(5)===45)switch(I.charCodeAt(6)){case 105:return x=I.replace("-items",""),"-webkit-"+I+"-webkit-box-"+x+"-ms-flex-"+x+I;case 115:return"-webkit-"+I+"-ms-flex-item-"+I.replace(F,"")+I;default:return"-webkit-"+I+"-ms-flex-line-pack"+I.replace("align-content","").replace(F,"")+I}break;case 973:case 989:if(I.charCodeAt(3)!==45||I.charCodeAt(4)===122)break;case 931:case 953:if(he.test(S)===!0)return(x=S.substring(S.indexOf(":")+1)).charCodeAt(0)===115?i(S.replace("stretch","fill-available"),k,D,z).replace(":fill-available",":stretch"):I.replace(x,"-webkit-"+x)+I.replace(x,"-moz-"+x.replace("fill-",""))+I;break;case 962:if(I="-webkit-"+I+(I.charCodeAt(5)===102?"-ms-"+I:"")+I,D+z===211&&I.charCodeAt(13)===105&&0<I.indexOf("transform",10))return I.substring(0,I.indexOf(";",27)+1).replace(_,"$1-webkit-$2")+I}return I}function s(S,k){var D=S.indexOf(k===1?":":"{"),z=S.substring(0,k!==3?D:10);return D=S.substring(D+1,S.length-1),qn(k!==2?z:z.replace(M,"$1"),D,k)}function o(S,k){var D=i(k,k.charCodeAt(0),k.charCodeAt(1),k.charCodeAt(2));return D!==k+";"?D.replace(V," or ($1)").substring(4):"("+k+")"}function a(S,k,D,z,I,X,x,ae,se,ue){for(var Y=0,Ze=k,$t;Y<pt;++Y)switch($t=Ct[Y].call(c,S,Ze,D,z,I,X,x,ae,se,ue)){case void 0:case!1:case!0:case null:break;default:Ze=$t}if(Ze!==k)return Ze}function u(S){switch(S){case void 0:case null:pt=Ct.length=0;break;default:if(typeof S=="function")Ct[pt++]=S;else if(typeof S=="object")for(var k=0,D=S.length;k<D;++k)u(S[k]);else pr=!!S|0}return u}function l(S){return S=S.prefix,S!==void 0&&(qn=null,S?typeof S!="function"?Te=1:(Te=2,qn=S):Te=0),l}function c(S,k){var D=S;if(33>D.charCodeAt(0)&&(D=D.trim()),O=D,D=[O],0<pt){var z=a(-1,k,D,D,de,fe,0,0,0,0);z!==void 0&&typeof z=="string"&&(k=z)}var I=e(mn,D,k,0,0);return 0<pt&&(z=a(-2,I,D,D,de,fe,I.length,0,0,0),z!==void 0&&(I=z)),O="",kt=0,fe=de=1,I}var h=/^\0+/g,d=/[\0\r\f]/g,g=/: */g,y=/zoo|gra/,_=/([,: ])(transform)/g,f=/,\r+?/g,p=/([\t\r\n ])*\f?&/g,m=/@(k\w+)\s*(\S*)\s*/,w=/::(place)/g,v=/:(read-only)/g,P=/[svh]\w+-[tblr]{2}/,b=/\(\s*(.*)\s*\)/g,V=/([\s\S]*?);/g,F=/-self|flex-/g,M=/[^]*?(:[rp][el]a[\w-]+)[^]*/,he=/stretch|:\s*\w+\-(?:conte|avail)/,kn=/([^-])(image-set\()/,fe=1,de=1,kt=0,Te=1,mn=[],Ct=[],pt=0,qn=null,pr=0,O="";return c.use=u,c.set=l,t!==void 0&&l(t),c}var Fb={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function Vb(t){var e={};return function(n){return e[n]===void 0&&(e[n]=t(n)),e[n]}}var Bb=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,H0=Vb(function(t){return Bb.test(t)||t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)<91}),Ep=nc.exports,jb={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},zb={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},qb={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},W0={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Tp={};Tp[Ep.ForwardRef]=qb;Tp[Ep.Memo]=W0;function G0(t){return Ep.isMemo(t)?W0:Tp[t.$$typeof]||jb}var Hb=Object.defineProperty,Wb=Object.getOwnPropertyNames,K0=Object.getOwnPropertySymbols,Gb=Object.getOwnPropertyDescriptor,Kb=Object.getPrototypeOf,Q0=Object.prototype;function Y0(t,e,n){if(typeof e!="string"){if(Q0){var r=Kb(e);r&&r!==Q0&&Y0(t,r,n)}var i=Wb(e);K0&&(i=i.concat(K0(e)));for(var s=G0(t),o=G0(e),a=0;a<i.length;++a){var u=i[a];if(!zb[u]&&!(n&&n[u])&&!(o&&o[u])&&!(s&&s[u])){var l=Gb(e,u);try{Hb(t,u,l)}catch{}}}}return t}var Qb=Y0;function Jn(){return(Jn=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}var X0=function(t,e){for(var n=[t[0]],r=0,i=e.length;r<i;r+=1)n.push(e[r],t[r+1]);return n},Sp=function(t){return t!==null&&typeof t=="object"&&(t.toString?t.toString():Object.prototype.toString.call(t))==="[object Object]"&&!nc.exports.typeOf(t)},fc=Object.freeze([]),Mr=Object.freeze({});function Pa(t){return typeof t=="function"}function J0(t){return t.displayName||t.name||"Component"}function kp(t){return t&&typeof t.styledComponentId=="string"}var Ds=typeof process!="undefined"&&{}.SC_ATTR||"data-styled",Cp=typeof window!="undefined"&&"HTMLElement"in window,Yb=Boolean(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process!="undefined"&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process!="undefined"&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""?{}.SC_DISABLE_SPEEDY:!1);function xa(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+t+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var Xb=function(){function t(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var e=t.prototype;return e.indexOfGroup=function(n){for(var r=0,i=0;i<n;i++)r+=this.groupSizes[i];return r},e.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var i=this.groupSizes,s=i.length,o=s;n>=o;)(o<<=1)<0&&xa(16,""+n);this.groupSizes=new Uint32Array(o),this.groupSizes.set(i),this.length=o;for(var a=s;a<o;a++)this.groupSizes[a]=0}for(var u=this.indexOfGroup(n+1),l=0,c=r.length;l<c;l++)this.tag.insertRule(u,r[l])&&(this.groupSizes[n]++,u++)},e.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],i=this.indexOfGroup(n),s=i+r;this.groupSizes[n]=0;for(var o=i;o<s;o++)this.tag.deleteRule(i)}},e.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var i=this.groupSizes[n],s=this.indexOfGroup(n),o=s+i,a=s;a<o;a++)r+=this.tag.getRule(a)+`/*!sc*/
`;return r},t}(),pc=new Map,mc=new Map,Da=1,gc=function(t){if(pc.has(t))return pc.get(t);for(;mc.has(Da);)Da++;var e=Da++;return pc.set(t,e),mc.set(e,t),e},Jb=function(t){return mc.get(t)},Zb=function(t,e){e>=Da&&(Da=e+1),pc.set(t,e),mc.set(e,t)},eA="style["+Ds+'][data-styled-version="5.3.1"]',tA=new RegExp("^"+Ds+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),nA=function(t,e,n){for(var r,i=n.split(","),s=0,o=i.length;s<o;s++)(r=i[s])&&t.registerName(e,r)},rA=function(t,e){for(var n=(e.innerHTML||"").split(`/*!sc*/
`),r=[],i=0,s=n.length;i<s;i++){var o=n[i].trim();if(o){var a=o.match(tA);if(a){var u=0|parseInt(a[1],10),l=a[2];u!==0&&(Zb(l,u),nA(t,l,a[3]),t.getTag().insertRules(u,r)),r.length=0}else r.push(o)}}},iA=function(){return typeof window!="undefined"&&window.__webpack_nonce__!==void 0?window.__webpack_nonce__:null},Z0=function(t){var e=document.head,n=t||e,r=document.createElement("style"),i=function(a){for(var u=a.childNodes,l=u.length;l>=0;l--){var c=u[l];if(c&&c.nodeType===1&&c.hasAttribute(Ds))return c}}(n),s=i!==void 0?i.nextSibling:null;r.setAttribute(Ds,"active"),r.setAttribute("data-styled-version","5.3.1");var o=iA();return o&&r.setAttribute("nonce",o),n.insertBefore(r,s),r},sA=function(){function t(n){var r=this.element=Z0(n);r.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var s=document.styleSheets,o=0,a=s.length;o<a;o++){var u=s[o];if(u.ownerNode===i)return u}xa(17)}(r),this.length=0}var e=t.prototype;return e.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},e.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},e.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},t}(),oA=function(){function t(n){var r=this.element=Z0(n);this.nodes=r.childNodes,this.length=0}var e=t.prototype;return e.insertRule=function(n,r){if(n<=this.length&&n>=0){var i=document.createTextNode(r),s=this.nodes[n];return this.element.insertBefore(i,s||null),this.length++,!0}return!1},e.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},e.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},t}(),aA=function(){function t(n){this.rules=[],this.length=0}var e=t.prototype;return e.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},e.deleteRule=function(n){this.rules.splice(n,1),this.length--},e.getRule=function(n){return n<this.length?this.rules[n]:""},t}(),e_=Cp,uA={isServer:!Cp,useCSSOMInjection:!Yb},t_=function(){function t(n,r,i){n===void 0&&(n=Mr),r===void 0&&(r={}),this.options=Jn({},uA,{},n),this.gs=r,this.names=new Map(i),this.server=!!n.isServer,!this.server&&Cp&&e_&&(e_=!1,function(s){for(var o=document.querySelectorAll(eA),a=0,u=o.length;a<u;a++){var l=o[a];l&&l.getAttribute(Ds)!=="active"&&(rA(s,l),l.parentNode&&l.parentNode.removeChild(l))}}(this))}t.registerId=function(n){return gc(n)};var e=t.prototype;return e.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new t(Jn({},this.options,{},n),this.gs,r&&this.names||void 0)},e.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},e.getTag=function(){return this.tag||(this.tag=(i=(r=this.options).isServer,s=r.useCSSOMInjection,o=r.target,n=i?new aA(o):s?new sA(o):new oA(o),new Xb(n)));var n,r,i,s,o},e.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},e.registerName=function(n,r){if(gc(n),this.names.has(n))this.names.get(n).add(r);else{var i=new Set;i.add(r),this.names.set(n,i)}},e.insertRules=function(n,r,i){this.registerName(n,r),this.getTag().insertRules(gc(n),i)},e.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},e.clearRules=function(n){this.getTag().clearGroup(gc(n)),this.clearNames(n)},e.clearTag=function(){this.tag=void 0},e.toString=function(){return function(n){for(var r=n.getTag(),i=r.length,s="",o=0;o<i;o++){var a=Jb(o);if(a!==void 0){var u=n.names.get(a),l=r.getGroup(o);if(u&&l&&u.size){var c=Ds+".g"+o+'[id="'+a+'"]',h="";u!==void 0&&u.forEach(function(d){d.length>0&&(h+=d+",")}),s+=""+l+c+'{content:"'+h+`"}/*!sc*/
`}}}return s}(this)},t}(),lA=/(a)(d)/gi,n_=function(t){return String.fromCharCode(t+(t>25?39:97))};function bp(t){var e,n="";for(e=Math.abs(t);e>52;e=e/52|0)n=n_(e%52)+n;return(n_(e%52)+n).replace(lA,"$1-$2")}var Os=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},r_=function(t){return Os(5381,t)};function cA(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(Pa(n)&&!kp(n))return!1}return!0}var hA=r_("5.3.1"),dA=function(){function t(e,n,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&cA(e),this.componentId=n,this.baseHash=Os(hA,n),this.baseStyle=r,t_.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,r){var i=this.componentId,s=[];if(this.baseStyle&&s.push(this.baseStyle.generateAndInjectStyles(e,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(i,this.staticRulesId))s.push(this.staticRulesId);else{var o=Ls(this.rules,e,n,r).join(""),a=bp(Os(this.baseHash,o)>>>0);if(!n.hasNameForId(i,a)){var u=r(o,"."+a,void 0,i);n.insertRules(i,a,u)}s.push(a),this.staticRulesId=a}else{for(var l=this.rules.length,c=Os(this.baseHash,r.hash),h="",d=0;d<l;d++){var g=this.rules[d];if(typeof g=="string")h+=g;else if(g){var y=Ls(g,e,n,r),_=Array.isArray(y)?y.join(""):y;c=Os(c,_+d),h+=_}}if(h){var f=bp(c>>>0);if(!n.hasNameForId(i,f)){var p=r(h,"."+f,void 0,i);n.insertRules(i,f,p)}s.push(f)}}return s.join(" ")},t}(),fA=/^\s*\/\/.*$/gm,pA=[":","[",".","#"];function mA(t){var e,n,r,i,s=t===void 0?Mr:t,o=s.options,a=o===void 0?Mr:o,u=s.plugins,l=u===void 0?fc:u,c=new Ub(a),h=[],d=function(_){function f(p){if(p)try{_(p+"}")}catch{}}return function(p,m,w,v,P,b,V,F,M,he){switch(p){case 1:if(M===0&&m.charCodeAt(0)===64)return _(m+";"),"";break;case 2:if(F===0)return m+"/*|*/";break;case 3:switch(F){case 102:case 112:return _(w[0]+m),"";default:return m+(he===0?"/*|*/":"")}case-2:m.split("/*|*/}").forEach(f)}}}(function(_){h.push(_)}),g=function(_,f,p){return f===0&&pA.indexOf(p[n.length])!==-1||p.match(i)?_:"."+e};function y(_,f,p,m){m===void 0&&(m="&");var w=_.replace(fA,""),v=f&&p?p+" "+f+" { "+w+" }":w;return e=m,n=f,r=new RegExp("\\"+n+"\\b","g"),i=new RegExp("(\\"+n+"\\b){2,}"),c(p||!f?"":f,v)}return c.use([].concat(l,[function(_,f,p){_===2&&p.length&&p[0].lastIndexOf(n)>0&&(p[0]=p[0].replace(r,g))},d,function(_){if(_===-2){var f=h;return h=[],f}}])),y.hash=l.length?l.reduce(function(_,f){return f.name||xa(15),Os(_,f.name)},5381).toString():"",y}var i_=Xu.createContext();i_.Consumer;var s_=Xu.createContext(),gA=(s_.Consumer,new t_),Ap=mA();function yA(){return ai.exports.useContext(i_)||gA}function vA(){return ai.exports.useContext(s_)||Ap}var wA=function(){function t(e,n){var r=this;this.inject=function(i,s){s===void 0&&(s=Ap);var o=r.name+s.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,s(r.rules,o,"@keyframes"))},this.toString=function(){return xa(12,String(r.name))},this.name=e,this.id="sc-keyframes-"+e,this.rules=n}return t.prototype.getName=function(e){return e===void 0&&(e=Ap),this.name+e.hash},t}(),_A=/([A-Z])/,IA=/([A-Z])/g,EA=/^ms-/,TA=function(t){return"-"+t.toLowerCase()};function o_(t){return _A.test(t)?t.replace(IA,TA).replace(EA,"-ms-"):t}var a_=function(t){return t==null||t===!1||t===""};function Ls(t,e,n,r){if(Array.isArray(t)){for(var i,s=[],o=0,a=t.length;o<a;o+=1)(i=Ls(t[o],e,n,r))!==""&&(Array.isArray(i)?s.push.apply(s,i):s.push(i));return s}if(a_(t))return"";if(kp(t))return"."+t.styledComponentId;if(Pa(t)){if(typeof(l=t)!="function"||l.prototype&&l.prototype.isReactComponent||!e)return t;var u=t(e);return Ls(u,e,n,r)}var l;return t instanceof wA?n?(t.inject(n,r),t.getName(r)):t:Sp(t)?function c(h,d){var g,y,_=[];for(var f in h)h.hasOwnProperty(f)&&!a_(h[f])&&(Array.isArray(h[f])&&h[f].isCss||Pa(h[f])?_.push(o_(f)+":",h[f],";"):Sp(h[f])?_.push.apply(_,c(h[f],f)):_.push(o_(f)+": "+(g=f,(y=h[f])==null||typeof y=="boolean"||y===""?"":typeof y!="number"||y===0||g in Fb?String(y).trim():y+"px")+";"));return d?[d+" {"].concat(_,["}"]):_}(t):t.toString()}var u_=function(t){return Array.isArray(t)&&(t.isCss=!0),t};function SA(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];return Pa(t)||Sp(t)?u_(Ls(X0(fc,[t].concat(n)))):n.length===0&&t.length===1&&typeof t[0]=="string"?t:u_(Ls(X0(t,n)))}var kA=function(t,e,n){return n===void 0&&(n=Mr),t.theme!==n.theme&&t.theme||e||n.theme},CA=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,bA=/(^-|-$)/g;function Rp(t){return t.replace(CA,"-").replace(bA,"")}var AA=function(t){return bp(r_(t)>>>0)};function yc(t){return typeof t=="string"&&!0}var Np=function(t){return typeof t=="function"||typeof t=="object"&&t!==null&&!Array.isArray(t)},RA=function(t){return t!=="__proto__"&&t!=="constructor"&&t!=="prototype"};function NA(t,e,n){var r=t[n];Np(e)&&Np(r)?l_(r,e):t[n]=e}function l_(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];for(var i=0,s=n;i<s.length;i++){var o=s[i];if(Np(o))for(var a in o)RA(a)&&NA(t,o[a],a)}return t}var c_=Xu.createContext();c_.Consumer;var Pp={};function h_(t,e,n){var r=kp(t),i=!yc(t),s=e.attrs,o=s===void 0?fc:s,a=e.componentId,u=a===void 0?function(m,w){var v=typeof m!="string"?"sc":Rp(m);Pp[v]=(Pp[v]||0)+1;var P=v+"-"+AA("5.3.1"+v+Pp[v]);return w?w+"-"+P:P}(e.displayName,e.parentComponentId):a,l=e.displayName,c=l===void 0?function(m){return yc(m)?"styled."+m:"Styled("+J0(m)+")"}(t):l,h=e.displayName&&e.componentId?Rp(e.displayName)+"-"+e.componentId:e.componentId||u,d=r&&t.attrs?Array.prototype.concat(t.attrs,o).filter(Boolean):o,g=e.shouldForwardProp;r&&t.shouldForwardProp&&(g=e.shouldForwardProp?function(m,w,v){return t.shouldForwardProp(m,w,v)&&e.shouldForwardProp(m,w,v)}:t.shouldForwardProp);var y,_=new dA(n,h,r?t.componentStyle:void 0),f=_.isStatic&&o.length===0,p=function(m,w){return function(v,P,b,V){var F=v.attrs,M=v.componentStyle,he=v.defaultProps,kn=v.foldedComponentIds,fe=v.shouldForwardProp,de=v.styledComponentId,kt=v.target,Te=function(z,I,X){z===void 0&&(z=Mr);var x=Jn({},I,{theme:z}),ae={};return X.forEach(function(se){var ue,Y,Ze,$t=se;for(ue in Pa($t)&&($t=$t(x)),$t)x[ue]=ae[ue]=ue==="className"?(Y=ae[ue],Ze=$t[ue],Y&&Ze?Y+" "+Ze:Y||Ze):$t[ue]}),[x,ae]}(kA(P,ai.exports.useContext(c_),he)||Mr,P,F),mn=Te[0],Ct=Te[1],pt=function(z,I,X,x){var ae=yA(),se=vA(),ue=I?z.generateAndInjectStyles(Mr,ae,se):z.generateAndInjectStyles(X,ae,se);return ue}(M,V,mn),qn=b,pr=Ct.$as||P.$as||Ct.as||P.as||kt,O=yc(pr),S=Ct!==P?Jn({},P,{},Ct):P,k={};for(var D in S)D[0]!=="$"&&D!=="as"&&(D==="forwardedAs"?k.as=S[D]:(fe?fe(D,H0,pr):!O||H0(D))&&(k[D]=S[D]));return P.style&&Ct.style!==P.style&&(k.style=Jn({},P.style,{},Ct.style)),k.className=Array.prototype.concat(kn,de,pt!==de?pt:null,P.className,Ct.className).filter(Boolean).join(" "),k.ref=qn,ai.exports.createElement(pr,k)}(y,m,w,f)};return p.displayName=c,(y=Xu.forwardRef(p)).attrs=d,y.componentStyle=_,y.displayName=c,y.shouldForwardProp=g,y.foldedComponentIds=r?Array.prototype.concat(t.foldedComponentIds,t.styledComponentId):fc,y.styledComponentId=h,y.target=r?t.target:t,y.withComponent=function(m){var w=e.componentId,v=function(b,V){if(b==null)return{};var F,M,he={},kn=Object.keys(b);for(M=0;M<kn.length;M++)F=kn[M],V.indexOf(F)>=0||(he[F]=b[F]);return he}(e,["componentId"]),P=w&&w+"-"+(yc(m)?m:Rp(J0(m)));return h_(m,Jn({},v,{attrs:d,componentId:P}),n)},Object.defineProperty(y,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(m){this._foldedDefaultProps=r?l_({},t.defaultProps,m):m}}),y.toString=function(){return"."+y.styledComponentId},i&&Qb(y,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),y}var xp=function(t){return function e(n,r,i){if(i===void 0&&(i=Mr),!nc.exports.isValidElementType(r))return xa(1,String(r));var s=function(){return n(r,i,SA.apply(void 0,arguments))};return s.withConfig=function(o){return e(n,r,Jn({},i,{},o))},s.attrs=function(o){return e(n,r,Jn({},i,{attrs:Array.prototype.concat(i.attrs,o).filter(Boolean)}))},s}(h_,t)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(t){xp[t]=xp(t)});var i2=xp;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const d_=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)==55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)==56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},PA=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},f_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,u=i+2<t.length,l=u?t[i+2]:0,c=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|l>>6,g=l&63;u||(g=64,o||(d=64)),r.push(n[c],n[h],n[d],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(d_(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):PA(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const l=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||l==null||h==null)throw Error();const d=s<<2|a>>4;if(r.push(d),l!==64){const g=a<<4&240|l>>2;if(r.push(g),h!==64){const y=l<<6&192|h;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},xA=function(t){const e=d_(t);return f_.encodeByteArray(e,!0)},p_=function(t){return xA(t).replace(/\./g,"")},DA=function(t){try{return f_.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function vc(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!OA(n)||(t[n]=vc(t[n],e[n]));return t}function OA(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LA{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function m_(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[p_(JSON.stringify(n)),p_(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ye(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function g_(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ye())}function Dp(){try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function MA(){return typeof self=="object"&&self.self===self}function Op(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function wc(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function $A(){return ye().indexOf("Electron/")>=0}function Lp(){const t=ye();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function UA(){return ye().indexOf("MSAppHost/")>=0}function FA(){return!Dp()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function _c(){return typeof indexedDB=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VA="FirebaseError";class Qt extends Error{constructor(e,n,r){super(n);this.code=e,this.customData=r,this.name=VA,Object.setPrototypeOf(this,Qt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ei.prototype.create)}}class Ei{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?BA(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Qt(i,a,r)}}function BA(t,e){return t.replace(jA,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const jA=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y_(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function zA(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Mp(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(v_(s)&&v_(o)){if(!Mp(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function v_(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ms(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function $s(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Oa(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function w_(t,e){const n=new qA(t,e);return n.subscribe.bind(n)}class qA{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");HA(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=$p),i.error===void 0&&(i.error=$p),i.complete===void 0&&(i.complete=$p);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console!="undefined"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function HA(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function $p(){}/**
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
***************************************************************************** */function Up(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function WA(t,e,n,r){function i(s){return s instanceof n?s:new n(function(o){o(s)})}return new(n||(n=Promise))(function(s,o){function a(c){try{l(r.next(c))}catch(h){o(h)}}function u(c){try{l(r.throw(c))}catch(h){o(h)}}function l(c){c.done?s(c.value):i(c.value).then(a,u)}l((r=r.apply(t,e||[])).next())})}function GA(t,e){var n={label:0,sent:function(){if(s[0]&1)throw s[1];return s[1]},trys:[],ops:[]},r,i,s,o;return o={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function a(l){return function(c){return u([l,c])}}function u(l){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,i&&(s=l[0]&2?i.return:l[0]?i.throw||((s=i.return)&&s.call(i),0):i.next)&&!(s=s.call(i,l[1])).done)return s;switch(i=0,s&&(l=[l[0]&2,s.value]),l[0]){case 0:case 1:s=l;break;case 4:return n.label++,{value:l[1],done:!1};case 5:n.label++,i=l[1],l=[0];continue;case 7:l=n.ops.pop(),n.trys.pop();continue;default:if(s=n.trys,!(s=s.length>0&&s[s.length-1])&&(l[0]===6||l[0]===2)){n=0;continue}if(l[0]===3&&(!s||l[1]>s[0]&&l[1]<s[3])){n.label=l[1];break}if(l[0]===6&&n.label<s[1]){n.label=s[1],s=l;break}if(s&&n.label<s[2]){n.label=s[2],n.ops.push(l);break}s[2]&&n.ops.pop(),n.trys.pop();continue}l=e.call(t,n)}catch(c){l=[6,c],i=0}finally{r=s=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}}function Fp(t){var e=typeof Symbol=="function"&&Symbol.iterator,n=e&&t[e],r=0;if(n)return n.call(t);if(t&&typeof t.length=="number")return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function Ic(t,e){var n=typeof Symbol=="function"&&t[Symbol.iterator];if(!n)return t;var r=n.call(t),i,s=[],o;try{for(;(e===void 0||e-- >0)&&!(i=r.next()).done;)s.push(i.value)}catch(a){o={error:a}}finally{try{i&&!i.done&&(n=r.return)&&n.call(r)}finally{if(o)throw o.error}}return s}function __(t,e,n){if(n||arguments.length===2)for(var r=0,i=e.length,s;r<i;r++)(s||!(r in e))&&(s||(s=Array.prototype.slice.call(e,0,r)),s[r]=e[r]);return t.concat(s||Array.prototype.slice.call(e))}var _n=function(){function t(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}return t.prototype.setInstantiationMode=function(e){return this.instantiationMode=e,this},t.prototype.setMultipleInstances=function(e){return this.multipleInstances=e,this},t.prototype.setServiceProps=function(e){return this.serviceProps=e,this},t.prototype.setInstanceCreatedCallback=function(e){return this.onInstanceCreated=e,this},t}();/**
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
 */var Ti="[DEFAULT]";/**
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
 */var KA=function(){function t(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}return t.prototype.get=function(e){var n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){var r=new LA;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{var i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise},t.prototype.getImmediate=function(e){var n,r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error("Service "+this.name+" is not available")}},t.prototype.getComponent=function(){return this.component},t.prototype.setComponent=function(e){var n,r;if(e.name!==this.name)throw Error("Mismatching Component "+e.name+" for Provider "+this.name+".");if(this.component)throw Error("Component for "+this.name+" has already been provided");if(this.component=e,!!this.shouldAutoInitialize()){if(YA(e))try{this.getOrInitializeService({instanceIdentifier:Ti})}catch{}try{for(var i=Fp(this.instancesDeferred.entries()),s=i.next();!s.done;s=i.next()){var o=Ic(s.value,2),a=o[0],u=o[1],l=this.normalizeInstanceIdentifier(a);try{var c=this.getOrInitializeService({instanceIdentifier:l});u.resolve(c)}catch{}}}catch(h){n={error:h}}finally{try{s&&!s.done&&(r=i.return)&&r.call(i)}finally{if(n)throw n.error}}}},t.prototype.clearInstance=function(e){e===void 0&&(e=Ti),this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)},t.prototype.delete=function(){return WA(this,void 0,void 0,function(){var e;return GA(this,function(n){switch(n.label){case 0:return e=Array.from(this.instances.values()),[4,Promise.all(__(__([],Ic(e.filter(function(r){return"INTERNAL"in r}).map(function(r){return r.INTERNAL.delete()}))),Ic(e.filter(function(r){return"_delete"in r}).map(function(r){return r._delete()}))))];case 1:return n.sent(),[2]}})})},t.prototype.isComponentSet=function(){return this.component!=null},t.prototype.isInitialized=function(e){return e===void 0&&(e=Ti),this.instances.has(e)},t.prototype.getOptions=function(e){return e===void 0&&(e=Ti),this.instancesOptions.get(e)||{}},t.prototype.initialize=function(e){var n,r;e===void 0&&(e={});var i=e.options,s=i===void 0?{}:i,o=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(o))throw Error(this.name+"("+o+") has already been initialized");if(!this.isComponentSet())throw Error("Component "+this.name+" has not been registered yet");var a=this.getOrInitializeService({instanceIdentifier:o,options:s});try{for(var u=Fp(this.instancesDeferred.entries()),l=u.next();!l.done;l=u.next()){var c=Ic(l.value,2),h=c[0],d=c[1],g=this.normalizeInstanceIdentifier(h);o===g&&d.resolve(a)}}catch(y){n={error:y}}finally{try{l&&!l.done&&(r=u.return)&&r.call(u)}finally{if(n)throw n.error}}return a},t.prototype.onInit=function(e,n){var r,i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);var o=this.instances.get(i);return o&&e(o,i),function(){s.delete(e)}},t.prototype.invokeOnInitCallbacks=function(e,n){var r,i,s=this.onInitCallbacks.get(n);if(!!s)try{for(var o=Fp(s),a=o.next();!a.done;a=o.next()){var u=a.value;try{u(e,n)}catch{}}}catch(l){r={error:l}}finally{try{a&&!a.done&&(i=o.return)&&i.call(o)}finally{if(r)throw r.error}}},t.prototype.getOrInitializeService=function(e){var n=e.instanceIdentifier,r=e.options,i=r===void 0?{}:r,s=this.instances.get(n);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:QA(n),options:i}),this.instances.set(n,s),this.instancesOptions.set(n,i),this.invokeOnInitCallbacks(s,n),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,n,s)}catch{}return s||null},t.prototype.normalizeInstanceIdentifier=function(e){return e===void 0&&(e=Ti),this.component?this.component.multipleInstances?e:Ti:e},t.prototype.shouldAutoInitialize=function(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"},t}();function QA(t){return t===Ti?void 0:t}function YA(t){return t.instantiationMode==="EAGER"}/**
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
 */var XA=function(){function t(e){this.name=e,this.providers=new Map}return t.prototype.addComponent=function(e){var n=this.getProvider(e.name);if(n.isComponentSet())throw new Error("Component "+e.name+" has already been registered with "+this.name);n.setComponent(e)},t.prototype.addOrOverwriteComponent=function(e){var n=this.getProvider(e.name);n.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)},t.prototype.getProvider=function(e){if(this.providers.has(e))return this.providers.get(e);var n=new KA(e,this);return this.providers.set(e,n),n},t.prototype.getProviders=function(){return Array.from(this.providers.values())},t}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vp=[];var te;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(te||(te={}));const I_={debug:te.DEBUG,verbose:te.VERBOSE,info:te.INFO,warn:te.WARN,error:te.ERROR,silent:te.SILENT},JA=te.INFO,ZA={[te.DEBUG]:"log",[te.VERBOSE]:"log",[te.INFO]:"info",[te.WARN]:"warn",[te.ERROR]:"error"},eR=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=ZA[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ec{constructor(e){this.name=e,this._logLevel=JA,this._logHandler=eR,this._userLogHandler=null,Vp.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in te))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?I_[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,te.DEBUG,...e),this._logHandler(this,te.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,te.VERBOSE,...e),this._logHandler(this,te.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,te.INFO,...e),this._logHandler(this,te.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,te.WARN,...e),this._logHandler(this,te.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,te.ERROR,...e),this._logHandler(this,te.ERROR,...e)}}function tR(t){Vp.forEach(e=>{e.setLogLevel(t)})}function nR(t,e){for(const n of Vp){let r=null;e&&e.level&&(r=I_[e.level]),t===null?n.userLogHandler=null:n.userLogHandler=(i,s,...o)=>{const a=o.map(u=>{if(u==null)return null;if(typeof u=="string")return u;if(typeof u=="number"||typeof u=="boolean")return u.toString();if(u instanceof Error)return u.message;try{return JSON.stringify(u)}catch{return null}}).filter(u=>u).join(" ");s>=(r!=null?r:i.logLevel)&&t({level:te[s].toLowerCase(),message:a,args:o,type:i.name})}}}/**
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
 */class rR{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(iR(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function iR(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Bp="@firebase/app",E_="0.7.4";/**
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
 */const jp=new Ec("@firebase/app"),sR="@firebase/app-compat",oR="@firebase/analytics-compat",aR="@firebase/analytics",uR="@firebase/app-check-compat",lR="@firebase/app-check",cR="@firebase/auth",hR="@firebase/auth-compat",dR="@firebase/database",fR="@firebase/database-compat",pR="@firebase/functions",mR="@firebase/functions-compat",gR="@firebase/installations",yR="@firebase/installations-compat",vR="@firebase/messaging",wR="@firebase/messaging-compat",_R="@firebase/performance",IR="@firebase/performance-compat",ER="@firebase/remote-config",TR="@firebase/remote-config-compat",SR="@firebase/storage",kR="@firebase/storage-compat",CR="@firebase/firestore",bR="@firebase/firestore-compat",AR="firebase",RR="9.1.3";/**
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
 */const Si="[DEFAULT]",NR={[Bp]:"fire-core",[sR]:"fire-core-compat",[aR]:"fire-analytics",[oR]:"fire-analytics-compat",[lR]:"fire-app-check",[uR]:"fire-app-check-compat",[cR]:"fire-auth",[hR]:"fire-auth-compat",[dR]:"fire-rtdb",[fR]:"fire-rtdb-compat",[pR]:"fire-fn",[mR]:"fire-fn-compat",[gR]:"fire-iid",[yR]:"fire-iid-compat",[vR]:"fire-fcm",[wR]:"fire-fcm-compat",[_R]:"fire-perf",[IR]:"fire-perf-compat",[ER]:"fire-rc",[TR]:"fire-rc-compat",[SR]:"fire-gcs",[kR]:"fire-gcs-compat",[CR]:"fire-fst",[bR]:"fire-fst-compat","fire-js":"fire-js",[AR]:"fire-js-all"};/**
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
 */const $r=new Map,La=new Map;function Tc(t,e){try{t.container.addComponent(e)}catch(n){jp.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function T_(t,e){t.container.addOrOverwriteComponent(e)}function Ur(t){const e=t.name;if(La.has(e))return jp.debug(`There were multiple attempts to register component ${e}.`),!1;La.set(e,t);for(const n of $r.values())Tc(n,t);return!0}function S_(t,e){return t.container.getProvider(e)}function PR(t,e,n=Si){S_(t,e).clearInstance(n)}function xR(){La.clear()}/**
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
 */const DR={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function."},Ma=new Ei("app","Firebase",DR);/**
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
 */class OR{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new _n("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ma.create("app-deleted",{appName:this._name})}}/**
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
 */const Fr=RR;function k_(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:Si,automaticDataCollectionEnabled:!1},e),r=n.name;if(typeof r!="string"||!r)throw Ma.create("bad-app-name",{appName:String(r)});const i=$r.get(r);if(i){if(Mp(t,i.options)&&Mp(n,i.config))return i;throw Ma.create("duplicate-app",{appName:r})}const s=new XA(r);for(const a of La.values())s.addComponent(a);const o=new OR(t,n,s);return $r.set(r,o),o}function LR(t=Si){const e=$r.get(t);if(!e)throw Ma.create("no-app",{appName:t});return e}function MR(){return Array.from($r.values())}async function C_(t){const e=t.name;$r.has(e)&&($r.delete(e),await Promise.all(t.container.getProviders().map(n=>n.delete())),t.isDeleted=!0)}function ln(t,e,n){var r;let i=(r=NR[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),jp.warn(a.join(" "));return}Ur(new _n(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}function b_(t,e){if(t!==null&&typeof t!="function")throw Ma.create("invalid-log-argument");nR(t,e)}function A_(t){tR(t)}/**
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
 */function $R(t){Ur(new _n("platform-logger",e=>new rR(e),"PRIVATE")),ln(Bp,E_,t),ln(Bp,E_,"esm2017"),ln("fire-js","")}$R("");var UR=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",SDK_VERSION:Fr,_DEFAULT_ENTRY_NAME:Si,_addComponent:Tc,_addOrOverwriteComponent:T_,_apps:$r,_clearComponents:xR,_components:La,_getProvider:S_,_registerComponent:Ur,_removeServiceInstance:PR,deleteApp:C_,getApp:LR,getApps:MR,initializeApp:k_,onLog:b_,registerVersion:ln,setLogLevel:A_,FirebaseError:Qt});/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FR{constructor(e,n){this._delegate=e,this.firebase=n,Tc(e,new _n("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),C_(this._delegate)))}_getService(e,n=Si){var r;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(e);return!i.isInitialized()&&((r=i.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&i.initialize(),i.getImmediate({identifier:n})}_removeServiceInstance(e,n=Si){this._delegate.container.getProvider(e).clearInstance(n)}_addComponent(e){Tc(this._delegate,e)}_addOrOverwriteComponent(e){T_(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
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
 */const VR={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance."},R_=new Ei("app-compat","Firebase",VR);/**
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
 */function BR(t){const e={},n={__esModule:!0,initializeApp:s,app:i,registerVersion:ln,setLogLevel:A_,onLog:b_,apps:null,SDK_VERSION:Fr,INTERNAL:{registerComponent:a,removeApp:r,useAsService:u,modularAPIs:UR}};n.default=n,Object.defineProperty(n,"apps",{get:o});function r(l){delete e[l]}function i(l){if(l=l||Si,!y_(e,l))throw R_.create("no-app",{appName:l});return e[l]}i.App=t;function s(l,c={}){const h=k_(l,c);if(y_(e,h.name))return e[h.name];const d=new t(h,n);return e[h.name]=d,d}function o(){return Object.keys(e).map(l=>e[l])}function a(l){const c=l.name,h=c.replace("-compat","");if(Ur(l)&&l.type==="PUBLIC"){const d=(g=i())=>{if(typeof g[h]!="function")throw R_.create("invalid-app-argument",{appName:c});return g[h]()};l.serviceProps!==void 0&&vc(d,l.serviceProps),n[h]=d,t.prototype[h]=function(...g){return this._getService.bind(this,c).apply(this,l.multipleInstances?g:[])}}return l.type==="PUBLIC"?n[h]:null}function u(l,c){return c==="serverAuth"?null:c}return n}/**
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
 */function N_(){const t=BR(FR);t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:N_,extendNamespace:e,createSubscribe:w_,ErrorFactory:Ei,deepExtend:vc});function e(n){vc(t,n)}return t}const jR=N_();/**
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
 */const P_=new Ec("@firebase/app-compat"),zR="@firebase/app-compat",qR="0.1.5";/**
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
 */function HR(t){ln(zR,qR,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */if(MA()&&self.firebase!==void 0){P_.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);const t=self.firebase.SDK_VERSION;t&&t.indexOf("LITE")>=0&&P_.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}const Us=jR;HR();var WR="firebase",GR="9.1.3";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Us.registerVersion(WR,GR,"app-compat");const $a={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},Fs={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KR(){return{["admin-restricted-operation"]:"This operation is restricted to administrators only.",["argument-error"]:"",["app-not-authorized"]:"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",["app-not-installed"]:"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",["captcha-check-failed"]:"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",["code-expired"]:"The SMS code has expired. Please re-send the verification code to try again.",["cordova-not-ready"]:"Cordova framework is not ready.",["cors-unsupported"]:"This browser is not supported.",["credential-already-in-use"]:"This credential is already associated with a different user account.",["custom-token-mismatch"]:"The custom token corresponds to a different audience.",["requires-recent-login"]:"This operation is sensitive and requires recent authentication. Log in again before retrying this request.",["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",["dynamic-link-not-activated"]:"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",["email-change-needs-verification"]:"Multi-factor users must always have a verified email.",["email-already-in-use"]:"The email address is already in use by another account.",["emulator-config-failed"]:'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',["expired-action-code"]:"The action code has expired.",["cancelled-popup-request"]:"This operation has been cancelled due to another conflicting popup being opened.",["internal-error"]:"An internal AuthError has occurred.",["invalid-app-credential"]:"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",["invalid-app-id"]:"The mobile app identifier is not registed for the current project.",["invalid-user-token"]:"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",["invalid-auth-event"]:"An internal AuthError has occurred.",["invalid-verification-code"]:"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.",["invalid-continue-uri"]:"The continue URL provided in the request is invalid.",["invalid-cordova-configuration"]:"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",["invalid-custom-token"]:"The custom token format is incorrect. Please check the documentation.",["invalid-dynamic-link-domain"]:"The provided dynamic link domain is not configured or authorized for the current project.",["invalid-email"]:"The email address is badly formatted.",["invalid-emulator-scheme"]:"Emulator URL must start with a valid scheme (http:// or https://).",["invalid-api-key"]:"Your API key is invalid, please check you have copied it correctly.",["invalid-cert-hash"]:"The SHA-1 certificate hash provided is invalid.",["invalid-credential"]:"The supplied auth credential is malformed or has expired.",["invalid-message-payload"]:"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-multi-factor-session"]:"The request does not contain a valid proof of first factor successful sign-in.",["invalid-oauth-provider"]:"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",["invalid-oauth-client-id"]:"The OAuth client ID provided is either invalid or does not match the specified API key.",["unauthorized-domain"]:"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",["invalid-action-code"]:"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",["wrong-password"]:"The password is invalid or the user does not have a password.",["invalid-persistence-type"]:"The specified persistence type is invalid. It can only be local, session or none.",["invalid-phone-number"]:"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",["invalid-provider-id"]:"The specified provider ID is invalid.",["invalid-recipient-email"]:"The email corresponding to this action failed to send as the provided recipient email address is invalid.",["invalid-sender"]:"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-verification-id"]:"The verification ID used to create the phone auth credential is invalid.",["invalid-tenant-id"]:"The Auth instance's tenant ID is invalid.",["missing-android-pkg-name"]:"An Android Package Name must be provided if the Android App is required to be installed.",["auth-domain-config-required"]:"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",["missing-app-credential"]:"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",["missing-verification-code"]:"The phone auth credential was created with an empty SMS verification code.",["missing-continue-uri"]:"A continue URL must be provided in the request.",["missing-iframe-start"]:"An internal AuthError has occurred.",["missing-ios-bundle-id"]:"An iOS Bundle ID must be provided if an App Store ID is provided.",["missing-or-invalid-nonce"]:"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.",["missing-multi-factor-info"]:"No second factor identifier is provided.",["missing-multi-factor-session"]:"The request is missing proof of first factor successful sign-in.",["missing-phone-number"]:"To send verification codes, provide a phone number for the recipient.",["missing-verification-id"]:"The phone auth credential was created with an empty verification ID.",["app-deleted"]:"This instance of FirebaseApp has been deleted.",["multi-factor-info-not-found"]:"The user does not have a second factor matching the identifier provided.",["multi-factor-auth-required"]:"Proof of ownership of a second factor is required to complete sign-in.",["account-exists-with-different-credential"]:"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",["network-request-failed"]:"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.",["no-auth-event"]:"An internal AuthError has occurred.",["no-such-provider"]:"User was not linked to an account with the given provider.",["null-user"]:"A null user object was provided as the argument for an operation which requires a non-null user object.",["operation-not-allowed"]:"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",["operation-not-supported-in-this-environment"]:'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',["popup-blocked"]:"Unable to establish a connection with the popup. It may have been blocked by the browser.",["popup-closed-by-user"]:"The popup has been closed by the user before finalizing the operation.",["provider-already-linked"]:"User can only be linked to one identity for the given provider.",["quota-exceeded"]:"The project's quota for this operation has been exceeded.",["redirect-cancelled-by-user"]:"The redirect operation has been cancelled by the user before finalizing.",["redirect-operation-pending"]:"A redirect sign-in operation is already pending.",["rejected-credential"]:"The request contains malformed or mismatching credentials.",["second-factor-already-in-use"]:"The second factor is already enrolled on this account.",["maximum-second-factor-count-exceeded"]:"The maximum allowed number of second factors on a user has been exceeded.",["tenant-id-mismatch"]:"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.",["user-token-expired"]:"The user's credential is no longer valid. The user must sign in again.",["too-many-requests"]:"We have blocked all requests from this device due to unusual activity. Try again later.",["unauthorized-continue-uri"]:"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",["unsupported-first-factor"]:"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.",["unsupported-persistence-type"]:"The current environment does not support the specified persistence type.",["unsupported-tenant-operation"]:"This operation is not supported in a multi-tenant context.",["unverified-email"]:"The operation requires a verified email.",["user-cancelled"]:"The user did not grant your application the permissions it requested.",["user-not-found"]:"There is no user record corresponding to this identifier. The user may have been deleted.",["user-disabled"]:"The user account has been disabled by an administrator.",["user-mismatch"]:"The supplied credentials do not correspond to the previously signed in user.",["user-signed-out"]:"",["weak-password"]:"The password must be 6 characters long or more.",["web-storage-unsupported"]:"This browser is not supported or 3rd party cookies and data may be disabled.",["already-initialized"]:"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance."}}function x_(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const QR=KR,YR=x_,D_=new Ei("auth","Firebase",x_());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O_=new Ec("@firebase/auth");function Sc(t,...e){O_.logLevel<=te.ERROR&&O_.error(`Auth (${Fr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function st(t,...e){throw zp(t,...e)}function ot(t,...e){return zp(t,...e)}function L_(t,e,n){const r=Object.assign(Object.assign({},YR()),{[e]:n});return new Ei("auth","Firebase",r).create(e,{appName:t.name})}function Vs(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&st(t,"argument-error"),L_(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function zp(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return D_.create(t,...e)}function A(t,e,...n){if(!t)throw zp(e,...n)}function xn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Sc(e),new Error(e)}function In(t,e){t||xn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M_=new Map;function Yt(t){In(t instanceof Function,"Expected a class definition");let e=M_.get(t);return e?(In(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,M_.set(t,e),e)}function XR(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Yt);(e==null?void 0:e.errorMap)&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ua(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function qp(){return $_()==="http:"||$_()==="https:"}function $_(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JR(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(qp()||Op()||"connection"in navigator)?navigator.onLine:!0}function ZR(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fa{constructor(e,n){this.shortDelay=e,this.longDelay=n,In(n>e,"Short delay should be less than long delay!"),this.isMobile=g_()||wc()}get(){return JR()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hp(t,e){In(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wp{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;xn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;xn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;xn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eN={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tN=new Fa(3e4,6e4);function Ue(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function qe(t,e,n,r,i={}){return U_(t,i,()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Ms(Object.assign({key:t.config.apiKey},o)).slice(1),u=new(Wp.headers());return u.set("Content-Type","application/json"),u.set("X-Client-Version",t._getSdkClientVersion()),t.languageCode&&u.set("X-Firebase-Locale",t.languageCode),Wp.fetch()(F_(t,t.config.apiHost,n,a),Object.assign({method:e,headers:u,referrerPolicy:"no-referrer"},s))})}async function U_(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},eN),e);try{const i=new nN(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw kc(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[u,l]=a.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw kc(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw kc(t,"email-already-in-use",o);const c=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw L_(t,c,l);st(t,c)}}catch(i){if(i instanceof Qt)throw i;st(t,"network-request-failed")}}async function Zn(t,e,n,r,i={}){const s=await qe(t,e,n,r,i);return"mfaPendingCredential"in s&&st(t,"multi-factor-auth-required",{serverResponse:s}),s}function F_(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Hp(t.config,i):`${t.config.apiScheme}://${i}`}class nN{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(ot(this.auth,"timeout")),tN.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function kc(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=ot(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rN(t,e){return qe(t,"POST","/v1/accounts:delete",e)}async function iN(t,e){return qe(t,"POST","/v1/accounts:update",e)}async function sN(t,e){return qe(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Va(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function oN(t,e=!1){const n=B(t),r=await n.getIdToken(e),i=Cc(r);A(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Va(Gp(i.auth_time)),issuedAtTime:Va(Gp(i.iat)),expirationTime:Va(Gp(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Gp(t){return Number(t)*1e3}function Cc(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Sc("JWT malformed, contained fewer than 3 sections"),null;try{const i=DA(n);return i?JSON.parse(i):(Sc("Failed to decode base64 JWT payload"),null)}catch(i){return Sc("Caught error parsing JWT payload as JSON",i),null}}function aN(t){const e=Cc(t);return A(e,"internal-error"),A(typeof e.exp!="undefined","internal-error"),A(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function er(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Qt&&uN(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function uN({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lN{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V_{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Va(this.lastLoginAt),this.creationTime=Va(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ba(t){var e;const n=t.auth,r=await t.getIdToken(),i=await er(t,sN(n,{idToken:r}));A(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=((e=s.providerUserInfo)===null||e===void 0?void 0:e.length)?dN(s.providerUserInfo):[],a=hN(t.providerData,o),u=t.isAnonymous,l=!(t.email&&s.passwordHash)&&!(a==null?void 0:a.length),c=u?l:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new V_(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,h)}async function cN(t){const e=B(t);await Ba(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function hN(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function dN(t){return t.map(e=>{var{providerId:n}=e,r=Up(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fN(t,e){const n=await U_(t,{},()=>{const r=Ms({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=F_(t,i,"/v1/token",`key=${s}`);return Wp.fetch()(o,{method:"POST",headers:{"X-Client-Version":t._getSdkClientVersion(),"Content-Type":"application/x-www-form-urlencoded"},body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ja{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){A(e.idToken,"internal-error"),A(typeof e.idToken!="undefined","internal-error"),A(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):aN(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return A(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await fN(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new ja;return r&&(A(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(A(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(A(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ja,this.toJSON())}_performRefresh(){return xn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vr(t,e){A(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class ki{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Up(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.emailVerified=!1,this.isAnonymous=!1,this.tenantId=null,this.providerData=[],this.proactiveRefresh=new lN(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.metadata=new V_(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await er(this,this.stsTokenManager.getToken(this.auth,e));return A(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return oN(this,e)}reload(){return cN(this)}_assign(e){this!==e&&(A(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new ki(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){A(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ba(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await er(this,rN(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,u,l,c;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,g=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,_=(a=n.tenantId)!==null&&a!==void 0?a:void 0,f=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,p=(l=n.createdAt)!==null&&l!==void 0?l:void 0,m=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:w,emailVerified:v,isAnonymous:P,providerData:b,stsTokenManager:V}=n;A(w&&V,e,"internal-error");const F=ja.fromJSON(this.name,V);A(typeof w=="string",e,"internal-error"),Vr(h,e.name),Vr(d,e.name),A(typeof v=="boolean",e,"internal-error"),A(typeof P=="boolean",e,"internal-error"),Vr(g,e.name),Vr(y,e.name),Vr(_,e.name),Vr(f,e.name),Vr(p,e.name),Vr(m,e.name);const M=new ki({uid:w,auth:e,email:d,emailVerified:v,displayName:h,isAnonymous:P,photoURL:y,phoneNumber:g,tenantId:_,stsTokenManager:F,createdAt:p,lastLoginAt:m});return b&&Array.isArray(b)&&(M.providerData=b.map(he=>Object.assign({},he))),f&&(M._redirectEventId=f),M}static async _fromIdTokenResponse(e,n,r=!1){const i=new ja;i.updateFromServerResponse(n);const s=new ki({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Ba(s),s}}/**
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
 */class B_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}B_.type="NONE";const za=B_;/**
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
 */function Ci(t,e,n){return`firebase:${t}:${e}:${n}`}class Bs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Ci(this.userKey,i.apiKey,s),this.fullPersistenceKey=Ci("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ki._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Bs(Yt(za),e,r);const i=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let s=i[0]||Yt(za);const o=Ci(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const c=await l._get(o);if(c){const h=ki._fromJSON(e,c);l!==s&&(a=h),s=l;break}}catch{}const u=i.filter(l=>l._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new Bs(s,e,r):(s=u[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==s)try{await l._remove(o)}catch{}})),new Bs(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j_(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(H_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(z_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(W_(e))return"Blackberry";if(G_(e))return"Webos";if(Kp(e))return"Safari";if((e.includes("chrome/")||q_(e))&&!e.includes("edge/"))return"Chrome";if(qa(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function z_(t=ye()){return/firefox\//i.test(t)}function Kp(t=ye()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function q_(t=ye()){return/crios\//i.test(t)}function H_(t=ye()){return/iemobile/i.test(t)}function qa(t=ye()){return/android/i.test(t)}function W_(t=ye()){return/blackberry/i.test(t)}function G_(t=ye()){return/webos/i.test(t)}function js(t=ye()){return/iphone|ipad|ipod/i.test(t)}function pN(t=ye()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(t)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(t)}function mN(t=ye()){var e;return js(t)&&!!((e=window.navigator)===null||e===void 0?void 0:e.standalone)}function gN(){return Lp()&&document.documentMode===10}function K_(t=ye()){return js(t)||qa(t)||G_(t)||W_(t)||/windows phone/i.test(t)||H_(t)}function yN(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q_(t,e=[]){let n;switch(t){case"Browser":n=j_(ye());break;case"Worker":n=`${j_(ye())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Fr}/${r}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vN{constructor(e,n){this.app=e,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Y_(this),this.idTokenSubscription=new Y_(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=D_,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Yt(n)),this._initializationPromise=this.queue(async()=>{var r;this._deleted||(this.persistenceManager=await Bs.create(this,e),!this._deleted&&(((r=this._popupRedirectResolver)===null||r===void 0?void 0:r._shouldInitProactively)&&await this._popupRedirectResolver._initialize(this),await this.initializeCurrentUser(n),!this._deleted&&(this._isInitialized=!0)))}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e)}}async initializeCurrentUser(e){var n;let r=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,s=r==null?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(e);(!i||i===s)&&(o==null?void 0:o.user)&&(r=o.user)}return r?r._redirectEventId?(A(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)):this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ba(e)}catch(n){if(n.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=ZR()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?B(e):null;return n&&A(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&A(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Yt(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ei("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Yt(e)||this._popupRedirectResolver;A(n,this,"argument-error"),this.redirectPersistenceManager=await Bs.create(this,[Yt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return A(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return A(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Q_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}_getSdkClientVersion(){return this.clientVersion}}function He(t){return B(t)}class Y_{constructor(e){this.auth=e,this.observer=null,this.addObserver=w_(n=>this.observer=n)}get next(){return A(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function wN(t,e,n){const r=He(t);A(r._canInitEmulator,r,"emulator-config-failed"),A(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n==null?void 0:n.disableWarnings),s=X_(e),{host:o,port:a}=_N(e),u=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||IN()}function X_(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function _N(t){const e=X_(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:J_(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:J_(o)}}}function J_(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function IN(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console!="undefined"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window!="undefined"&&typeof document!="undefined"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zs{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return xn("not implemented")}_getIdTokenResponse(e){return xn("not implemented")}_linkToIdToken(e,n){return xn("not implemented")}_getReauthenticationResolver(e){return xn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Z_(t,e){return qe(t,"POST","/v1/accounts:resetPassword",Ue(t,e))}async function eI(t,e){return qe(t,"POST","/v1/accounts:update",e)}async function EN(t,e){return qe(t,"POST","/v1/accounts:update",Ue(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function TN(t,e){return Zn(t,"POST","/v1/accounts:signInWithPassword",Ue(t,e))}async function bc(t,e){return qe(t,"POST","/v1/accounts:sendOobCode",Ue(t,e))}async function SN(t,e){return bc(t,e)}async function kN(t,e){return bc(t,e)}async function CN(t,e){return bc(t,e)}async function bN(t,e){return bc(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AN(t,e){return Zn(t,"POST","/v1/accounts:signInWithEmailLink",Ue(t,e))}async function RN(t,e){return Zn(t,"POST","/v1/accounts:signInWithEmailLink",Ue(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ha extends zs{constructor(e,n,r,i=null){super("password",r);this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Ha(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Ha(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return TN(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return AN(e,{email:this._email,oobCode:this._password});default:st(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return eI(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return RN(e,{idToken:n,email:this._email,oobCode:this._password});default:st(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tr(t,e){return Zn(t,"POST","/v1/accounts:signInWithIdp",Ue(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NN="http://localhost";class Dn extends zs{constructor(){super(...arguments);this.pendingToken=null}static _fromParams(e){const n=new Dn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):st("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Up(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Dn(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return tr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,tr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,tr(e,n)}buildRequest(){const e={requestUri:NN,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ms(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PN(t,e){return qe(t,"POST","/v1/accounts:sendVerificationCode",Ue(t,e))}async function xN(t,e){return Zn(t,"POST","/v1/accounts:signInWithPhoneNumber",Ue(t,e))}async function DN(t,e){const n=await Zn(t,"POST","/v1/accounts:signInWithPhoneNumber",Ue(t,e));if(n.temporaryProof)throw kc(t,"account-exists-with-different-credential",n);return n}const ON={USER_NOT_FOUND:"user-not-found"};async function LN(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return Zn(t,"POST","/v1/accounts:signInWithPhoneNumber",Ue(t,n),ON)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi extends zs{constructor(e){super("phone","phone");this.params=e}static _fromVerification(e,n){return new bi({verificationId:e,verificationCode:n})}static _fromTokenResponse(e,n){return new bi({phoneNumber:e,temporaryProof:n})}_getIdTokenResponse(e){return xN(e,this._makeVerificationRequest())}_linkToIdToken(e,n){return DN(e,Object.assign({idToken:n},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return LN(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:n,verificationId:r,verificationCode:i}=this.params;return e&&n?{temporaryProof:e,phoneNumber:n}:{sessionInfo:r,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!n&&!i&&!s?null:new bi({verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MN(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function $N(t){const e=$s(Oa(t)).link,n=e?$s(Oa(e)).deep_link_id:null,r=$s(Oa(t)).deep_link_id;return(r?$s(Oa(r)).link:null)||r||n||e||t}class Ac{constructor(e){var n,r,i,s,o,a;const u=$s(Oa(e)),l=(n=u.apiKey)!==null&&n!==void 0?n:null,c=(r=u.oobCode)!==null&&r!==void 0?r:null,h=MN((i=u.mode)!==null&&i!==void 0?i:null);A(l&&c&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=c,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=u.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=$N(e);try{return new Ac(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br{constructor(){this.providerId=Br.PROVIDER_ID}static credential(e,n){return Ha._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Ac.parseLink(n);return A(r,"argument-error"),Ha._fromEmailAndCode(e,r.code,r.tenantId)}}Br.PROVIDER_ID="password";Br.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Br.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class qs extends jr{constructor(){super(...arguments);this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class Hs extends qs{static credentialFromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;return A("providerId"in n&&"signInMethod"in n,"argument-error"),Dn._fromParams(n)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return A(e.idToken||e.accessToken,"argument-error"),Dn._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return Hs.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return Hs.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r,oauthTokenSecret:i,pendingToken:s,nonce:o,providerId:a}=e;if(!r&&!i&&!n&&!s||!a)return null;try{return new Hs(a)._credential({idToken:n,accessToken:r,nonce:o,pendingToken:s})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On extends qs{constructor(){super("facebook.com")}static credential(e){return Dn._fromParams({providerId:On.PROVIDER_ID,signInMethod:On.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return On.credentialFromTaggedObject(e)}static credentialFromError(e){return On.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return On.credential(e.oauthAccessToken)}catch{return null}}}On.FACEBOOK_SIGN_IN_METHOD="facebook.com";On.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln extends qs{constructor(){super("google.com");this.addScope("profile")}static credential(e,n){return Dn._fromParams({providerId:Ln.PROVIDER_ID,signInMethod:Ln.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Ln.credentialFromTaggedObject(e)}static credentialFromError(e){return Ln.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Ln.credential(n,r)}catch{return null}}}Ln.GOOGLE_SIGN_IN_METHOD="google.com";Ln.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn extends qs{constructor(){super("github.com")}static credential(e){return Dn._fromParams({providerId:Mn.PROVIDER_ID,signInMethod:Mn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Mn.credentialFromTaggedObject(e)}static credentialFromError(e){return Mn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Mn.credential(e.oauthAccessToken)}catch{return null}}}Mn.GITHUB_SIGN_IN_METHOD="github.com";Mn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UN="http://localhost";class Rc extends zs{constructor(e,n){super(e,e);this.pendingToken=n}_getIdTokenResponse(e){const n=this.buildRequest();return tr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,tr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,tr(e,n)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,pendingToken:s}=n;return!r||!i||!s||r!==i?null:new Rc(r,s)}static _create(e,n){return new Rc(e,n)}buildRequest(){return{requestUri:UN,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n extends qs{constructor(){super("twitter.com")}static credential(e,n){return Dn._fromParams({providerId:$n.PROVIDER_ID,signInMethod:$n.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return $n.credentialFromTaggedObject(e)}static credentialFromError(e){return $n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return $n.credential(n,r)}catch{return null}}}$n.TWITTER_SIGN_IN_METHOD="twitter.com";$n.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tI(t,e){return Zn(t,"POST","/v1/accounts:signUp",Ue(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await ki._fromIdTokenResponse(e,r,i),o=nI(r);return new cn({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=nI(r);return new cn({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function nI(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FN(t){var e;const n=He(t);if(await n._initializationPromise,(e=n.currentUser)===null||e===void 0?void 0:e.isAnonymous)return new cn({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await tI(n,{returnSecureToken:!0}),i=await cn._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nc extends Qt{constructor(e,n,r,i){var s;super(n.code,n.message);this.operationType=r,this.user=i,this.name="FirebaseError",Object.setPrototypeOf(this,Nc.prototype),this.appName=e.name,this.code=n.code,this.tenantId=(s=e.tenantId)!==null&&s!==void 0?s:void 0,this.serverResponse=n.customData.serverResponse}static _fromErrorAndOperation(e,n,r,i){return new Nc(e,n,r,i)}}function rI(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Nc._fromErrorAndOperation(t,s,e,r):s})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iI(t){return new Set(t.map(({providerId:e})=>e).filter(e=>!!e))}/**
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
 */async function VN(t,e){const n=B(t);await Pc(!0,n,e);const{providerUserInfo:r}=await iN(n.auth,{idToken:await n.getIdToken(),deleteProvider:[e]}),i=iI(r||[]);return n.providerData=n.providerData.filter(s=>i.has(s.providerId)),i.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function Qp(t,e,n=!1){const r=await er(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return cn._forOperation(t,"link",r)}async function Pc(t,e,n){await Ba(e);const r=iI(e.providerData),i=t===!1?"provider-already-linked":"no-such-provider";A(r.has(n)===t,e.auth,i)}/**
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
 */async function sI(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await er(t,rI(r,i,e,t),n);A(s.idToken,r,"internal-error");const o=Cc(s.idToken);A(o,r,"internal-error");const{sub:a}=o;return A(t.uid===a,r,"user-mismatch"),cn._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&st(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oI(t,e,n=!1){const r="signIn",i=await rI(t,r,e),s=await cn._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function xc(t,e){return oI(He(t),e)}async function aI(t,e){const n=B(t);return await Pc(!1,n,e.providerId),Qp(n,e)}async function uI(t,e){return sI(B(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BN(t,e){return Zn(t,"POST","/v1/accounts:signInWithCustomToken",Ue(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jN(t,e){const n=He(t),r=await BN(n,{token:e,returnSecureToken:!0}),i=await cn._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dc{constructor(e,n){this.factorId=e,this.uid=n.mfaEnrollmentId,this.enrollmentTime=new Date(n.enrolledAt).toUTCString(),this.displayName=n.displayName}static _fromServerResponse(e,n){return"phoneInfo"in n?Yp._fromServerResponse(e,n):st(e,"internal-error")}}class Yp extends Dc{constructor(e){super("phone",e);this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,n){return new Yp(n)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oc(t,e,n){var r;A(((r=n.url)===null||r===void 0?void 0:r.length)>0,t,"invalid-continue-uri"),A(typeof n.dynamicLinkDomain=="undefined"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(A(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(A(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zN(t,e,n){const r=B(t),i={requestType:"PASSWORD_RESET",email:e};n&&Oc(r,i,n),await kN(r,i)}async function qN(t,e,n){await Z_(B(t),{oobCode:e,newPassword:n})}async function HN(t,e){await EN(B(t),{oobCode:e})}async function lI(t,e){const n=B(t),r=await Z_(n,{oobCode:e}),i=r.requestType;switch(A(i,n,"internal-error"),i){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":A(r.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":A(r.mfaInfo,n,"internal-error");default:A(r.email,n,"internal-error")}let s=null;return r.mfaInfo&&(s=Dc._fromServerResponse(He(n),r.mfaInfo)),{data:{email:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.newEmail:r.email)||null,previousEmail:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.email:r.newEmail)||null,multiFactorInfo:s},operation:i}}async function WN(t,e){const{data:n}=await lI(B(t),e);return n.email}async function GN(t,e,n){const r=He(t),i=await tI(r,{returnSecureToken:!0,email:e,password:n}),s=await cn._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(s.user),s}function KN(t,e,n){return xc(B(t),Br.credential(e,n))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QN(t,e,n){const r=B(t),i={requestType:"EMAIL_SIGNIN",email:e};A(n.handleCodeInApp,r,"argument-error"),n&&Oc(r,i,n),await CN(r,i)}function YN(t,e){const n=Ac.parseLink(e);return(n==null?void 0:n.operation)==="EMAIL_SIGNIN"}async function XN(t,e,n){const r=B(t),i=Br.credentialWithLink(e,n||Ua());return A(i._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),xc(r,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function JN(t,e){return qe(t,"POST","/v1/accounts:createAuthUri",Ue(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ZN(t,e){const n=qp()?Ua():"http://localhost",r={identifier:e,continueUri:n},{signinMethods:i}=await JN(B(t),r);return i||[]}async function eP(t,e){const n=B(t),r=await t.getIdToken(),i={requestType:"VERIFY_EMAIL",idToken:r};e&&Oc(n.auth,i,e);const{email:s}=await SN(n.auth,i);s!==t.email&&await t.reload()}async function tP(t,e,n){const r=B(t),i=await t.getIdToken(),s={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:i,newEmail:e};n&&Oc(r.auth,s,n);const{email:o}=await bN(r.auth,s);o!==t.email&&await t.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nP(t,e){return qe(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rP(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=B(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await er(r,nP(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:u})=>u==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function iP(t,e){return cI(B(t),e,null)}function sP(t,e){return cI(B(t),null,e)}async function cI(t,e,n){const{auth:r}=t,s={idToken:await t.getIdToken(),returnSecureToken:!0};e&&(s.email=e),n&&(s.password=n);const o=await er(t,eI(r,s));await t._updateTokensIfNecessary(o,!0)}/**
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
 */function oP(t){var e,n;if(!t)return null;const{providerId:r}=t,i=t.rawUserInfo?JSON.parse(t.rawUserInfo):{},s=t.isNewUser||t.kind==="identitytoolkit#SignupNewUserResponse";if(!r&&(t==null?void 0:t.idToken)){const o=(n=(e=Cc(t.idToken))===null||e===void 0?void 0:e.firebase)===null||n===void 0?void 0:n.sign_in_provider;if(o){const a=o!=="anonymous"&&o!=="custom"?o:null;return new Ws(s,a)}}if(!r)return null;switch(r){case"facebook.com":return new aP(s,i);case"github.com":return new uP(s,i);case"google.com":return new lP(s,i);case"twitter.com":return new cP(s,i,t.screenName||null);case"custom":case"anonymous":return new Ws(s,null);default:return new Ws(s,r,i)}}class Ws{constructor(e,n,r={}){this.isNewUser=e,this.providerId=n,this.profile=r}}class hI extends Ws{constructor(e,n,r,i){super(e,n,r);this.username=i}}class aP extends Ws{constructor(e,n){super(e,"facebook.com",n)}}class uP extends hI{constructor(e,n){super(e,"github.com",n,typeof(n==null?void 0:n.login)=="string"?n==null?void 0:n.login:null)}}class lP extends Ws{constructor(e,n){super(e,"google.com",n)}}class cP extends hI{constructor(e,n,r){super(e,"twitter.com",n,r)}}function hP(t){const{user:e,_tokenResponse:n}=t;return e.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:oP(n)}class Ai{constructor(e,n){this.type=e,this.credential=n}static _fromIdtoken(e){return new Ai("enroll",e)}static _fromMfaPendingCredential(e){return new Ai("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var n,r;if(e==null?void 0:e.multiFactorSession){if((n=e.multiFactorSession)===null||n===void 0?void 0:n.pendingCredential)return Ai._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if((r=e.multiFactorSession)===null||r===void 0?void 0:r.idToken)return Ai._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xp{constructor(e,n,r){this.session=e,this.hints=n,this.signInResolver=r}static _fromError(e,n){const r=He(e),i=(n.serverResponse.mfaInfo||[]).map(o=>Dc._fromServerResponse(r,o));A(n.serverResponse.mfaPendingCredential,r,"internal-error");const s=Ai._fromMfaPendingCredential(n.serverResponse.mfaPendingCredential);return new Xp(s,i,async o=>{const a=await o._process(r,s);delete n.serverResponse.mfaInfo,delete n.serverResponse.mfaPendingCredential;const u=Object.assign(Object.assign({},n.serverResponse),{idToken:a.idToken,refreshToken:a.refreshToken});switch(n.operationType){case"signIn":const l=await cn._fromIdTokenResponse(r,n.operationType,u);return await r._updateCurrentUser(l.user),l;case"reauthenticate":return A(n.user,r,"internal-error"),cn._forOperation(n.user,n.operationType,u);default:st(r,"internal-error")}})}async resolveSignIn(e){const n=e;return this.signInResolver(n)}}function dP(t,e){var n;const r=B(t),i=e;return A(e.operationType,r,"argument-error"),A((n=i.serverResponse)===null||n===void 0?void 0:n.mfaPendingCredential,r,"argument-error"),Xp._fromError(r,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fP(t,e){return qe(t,"POST","/v2/accounts/mfaEnrollment:start",Ue(t,e))}function pP(t,e){return qe(t,"POST","/v2/accounts/mfaEnrollment:finalize",Ue(t,e))}function mP(t,e){return qe(t,"POST","/v2/accounts/mfaEnrollment:withdraw",Ue(t,e))}class Jp{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(n=>{n.mfaInfo&&(this.enrolledFactors=n.mfaInfo.map(r=>Dc._fromServerResponse(e.auth,r)))})}static _fromUser(e){return new Jp(e)}async getSession(){return Ai._fromIdtoken(await this.user.getIdToken())}async enroll(e,n){const r=e,i=await this.getSession(),s=await er(this.user,r._process(this.user.auth,i,n));return await this.user._updateTokensIfNecessary(s),this.user.reload()}async unenroll(e){const n=typeof e=="string"?e:e.uid,r=await this.user.getIdToken(),i=await er(this.user,mP(this.user.auth,{idToken:r,mfaEnrollmentId:n}));this.enrolledFactors=this.enrolledFactors.filter(({uid:s})=>s!==n),await this.user._updateTokensIfNecessary(i);try{await this.user.reload()}catch(s){if(s.code!=="auth/user-token-expired")throw s}}}const Zp=new WeakMap;function gP(t){const e=B(t);return Zp.has(e)||Zp.set(e,Jp._fromUser(e)),Zp.get(e)}const Lc="__sak";/**
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
 */class dI{constructor(e,n){this.storage=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Lc,"1"),this.storage.removeItem(Lc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yP(){const t=ye();return Kp(t)||js(t)}const vP=1e3,wP=10;class fI extends dI{constructor(){super(window.localStorage,"LOCAL");this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=yP()&&yN(),this.fallbackToPolling=K_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,u)=>{this.notifyListeners(o,u)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);gN()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,wP):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},vP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}fI.type="LOCAL";const em=fI;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pI extends dI{constructor(){super(window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}pI.type="SESSION";const Ri=pI;/**
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
 */function _P(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Mc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Mc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o==null?void 0:o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async l=>l(n.origin,s)),u=await _P(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Mc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wa(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class IP{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,u)=>{const l=Wa("",20);i.port1.start();const c=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(c),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fe(){return window}function EP(t){Fe().location.href=t}/**
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
 */function tm(){return typeof Fe().WorkerGlobalScope!="undefined"&&typeof Fe().importScripts=="function"}async function TP(){if(!(navigator==null?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function SP(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function kP(){return tm()?self:null}/**
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
 */const mI="firebaseLocalStorageDb",CP=1,$c="firebaseLocalStorage",gI="fbase_key";class Ga{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Uc(t,e){return t.transaction([$c],e?"readwrite":"readonly").objectStore($c)}function bP(){const t=indexedDB.deleteDatabase(mI);return new Ga(t).toPromise()}function nm(){const t=indexedDB.open(mI,CP);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore($c,{keyPath:gI})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains($c)?e(r):(r.close(),await bP(),e(await nm()))})})}async function yI(t,e,n){const r=Uc(t,!0).put({[gI]:e,value:n});return new Ga(r).toPromise()}async function AP(t,e){const n=Uc(t,!1).get(e),r=await new Ga(n).toPromise();return r===void 0?null:r.value}function vI(t,e){const n=Uc(t,!0).delete(e);return new Ga(n).toPromise()}const RP=800,NP=3;class wI{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await nm(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>NP)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return tm()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Mc._getInstance(kP()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await TP(),!this.activeServiceWorker)return;this.sender=new IP(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||SP()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await nm();return await yI(e,Lc,"1"),await vI(e,Lc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>yI(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>AP(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>vI(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Uc(i,!1).getAll();return new Ga(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),RP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}wI.type="LOCAL";const Fc=wI;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PP(t,e){return qe(t,"POST","/v2/accounts/mfaSignIn:start",Ue(t,e))}function xP(t,e){return qe(t,"POST","/v2/accounts/mfaSignIn:finalize",Ue(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DP(t){return(await qe(t,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OP(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function _I(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=ot("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",OP().appendChild(r)})}function II(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LP=500,MP=6e4,Vc=1e12;class $P{constructor(e){this.auth=e,this.counter=Vc,this._widgets=new Map}render(e,n){const r=this.counter;return this._widgets.set(r,new UP(e,this.auth.name,n||{})),this.counter++,r}reset(e){var n;const r=e||Vc;(n=this._widgets.get(r))===null||n===void 0||n.delete(),this._widgets.delete(r)}getResponse(e){var n;const r=e||Vc;return((n=this._widgets.get(r))===null||n===void 0?void 0:n.getResponse())||""}async execute(e){var n;const r=e||Vc;return(n=this._widgets.get(r))===null||n===void 0||n.execute(),""}}class UP{constructor(e,n,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;A(i,"argument-error",{appName:n}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=FP(50);const{callback:e,"expired-callback":n}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,n)try{n()}catch{}this.isVisible&&this.execute()},MP)},LP))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function FP(t){const e=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<t;r++)e.push(n.charAt(Math.floor(Math.random()*n.length)));return e.join("")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rm=II("rcb"),VP=new Fa(3e4,6e4),BP="https://www.google.com/recaptcha/api.js?";class jP{constructor(){this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!Fe().grecaptcha}load(e,n=""){return A(zP(n),e,"argument-error"),this.shouldResolveImmediately(n)?Promise.resolve(Fe().grecaptcha):new Promise((r,i)=>{const s=Fe().setTimeout(()=>{i(ot(e,"network-request-failed"))},VP.get());Fe()[rm]=()=>{Fe().clearTimeout(s),delete Fe()[rm];const a=Fe().grecaptcha;if(!a){i(ot(e,"internal-error"));return}const u=a.render;a.render=(l,c)=>{const h=u(l,c);return this.counter++,h},this.hostLanguage=n,r(a)};const o=`${BP}?${Ms({onload:rm,render:"explicit",hl:n})}`;_I(o).catch(()=>{clearTimeout(s),i(ot(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){return!!Fe().grecaptcha&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function zP(t){return t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t)}class qP{async load(e){return new $P(e)}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EI="recaptcha",HP={theme:"light",type:"image"};class WP{constructor(e,n=Object.assign({},HP),r){this.parameters=n,this.type=EI,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=He(r),this.isInvisible=this.parameters.size==="invisible",A(typeof document!="undefined",this.auth,"operation-not-supported-in-this-environment");const i=typeof e=="string"?document.getElementById(e):e;A(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new qP:new jP,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),n=this.getAssertedRecaptcha(),r=n.getResponse(e);return r||new Promise(i=>{const s=o=>{!o||(this.tokenChangeListeners.delete(s),i(o))};this.tokenChangeListeners.add(s),this.isInvisible&&n.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){A(!this.parameters.sitekey,this.auth,"argument-error"),A(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),A(typeof document!="undefined",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return n=>{if(this.tokenChangeListeners.forEach(r=>r(n)),typeof e=="function")e(n);else if(typeof e=="string"){const r=Fe()[e];typeof r=="function"&&r(n)}}}assertNotDestroyed(){A(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const n=document.createElement("div");e.appendChild(n),e=n}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){A(qp()&&!tm(),this.auth,"internal-error"),await GP(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await DP(this.auth);A(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return A(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function GP(){let t=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}t=()=>e(),window.addEventListener("load",t)}).catch(e=>{throw t&&window.removeEventListener("load",t),e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class im{constructor(e,n){this.verificationId=e,this.onConfirmation=n}confirm(e){const n=bi._fromVerification(this.verificationId,e);return this.onConfirmation(n)}}async function KP(t,e,n){const r=He(t),i=await Bc(r,e,B(n));return new im(i,s=>xc(r,s))}async function QP(t,e,n){const r=B(t);await Pc(!1,r,"phone");const i=await Bc(r.auth,e,B(n));return new im(i,s=>aI(r,s))}async function YP(t,e,n){const r=B(t),i=await Bc(r.auth,e,B(n));return new im(i,s=>uI(r,s))}async function Bc(t,e,n){var r;const i=await n.verify();try{A(typeof i=="string",t,"argument-error"),A(n.type===EI,t,"argument-error");let s;if(typeof e=="string"?s={phoneNumber:e}:s=e,"session"in s){const o=s.session;if("phoneNumber"in s)return A(o.type==="enroll",t,"internal-error"),(await fP(t,{idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}})).phoneSessionInfo.sessionInfo;{A(o.type==="signin",t,"internal-error");const a=((r=s.multiFactorHint)===null||r===void 0?void 0:r.uid)||s.multiFactorUid;return A(a,t,"missing-multi-factor-info"),(await PP(t,{mfaPendingCredential:o.credential,mfaEnrollmentId:a,phoneSignInInfo:{recaptchaToken:i}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:o}=await PN(t,{phoneNumber:s.phoneNumber,recaptchaToken:i});return o}}finally{n._reset()}}async function XP(t,e){await Qp(B(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En{constructor(e){this.providerId=En.PROVIDER_ID,this.auth=He(e)}verifyPhoneNumber(e,n){return Bc(this.auth,e,B(n))}static credential(e,n){return bi._fromVerification(e,n)}static credentialFromResult(e){const n=e;return En.credentialFromTaggedObject(n)}static credentialFromError(e){return En.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:n,temporaryProof:r}=e;return n&&r?bi._fromTokenResponse(n,r):null}}En.PROVIDER_ID="phone";En.PHONE_SIGN_IN_METHOD="phone";/**
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
 */function Ni(t,e){return e?Yt(e):(A(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class sm extends zs{constructor(e){super("custom","custom");this.params=e}_getIdTokenResponse(e){return tr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return tr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return tr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function JP(t){return oI(t.auth,new sm(t),t.bypassAuthState)}function ZP(t){const{auth:e,user:n}=t;return A(n,e,"internal-error"),sI(n,new sm(t),t.bypassAuthState)}async function ex(t){const{auth:e,user:n}=t;return A(n,e,"internal-error"),Qp(n,new sm(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TI{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(u))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return JP;case"linkViaPopup":case"linkViaRedirect":return ex;case"reauthViaPopup":case"reauthViaRedirect":return ZP;default:st(this.auth,"internal-error")}}resolve(e){In(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){In(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tx=new Fa(2e3,1e4);async function nx(t,e,n){const r=He(t);Vs(t,e,jr);const i=Ni(r,n);return new nr(r,"signInViaPopup",e,i).executeNotNull()}async function rx(t,e,n){const r=B(t);Vs(r.auth,e,jr);const i=Ni(r.auth,n);return new nr(r.auth,"reauthViaPopup",e,i,r).executeNotNull()}async function ix(t,e,n){const r=B(t);Vs(r.auth,e,jr);const i=Ni(r.auth,n);return new nr(r.auth,"linkViaPopup",e,i,r).executeNotNull()}class nr extends TI{constructor(e,n,r,i,s){super(e,n,i,s);this.provider=r,this.authWindow=null,this.pollId=null,nr.currentPopupAction&&nr.currentPopupAction.cancel(),nr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return A(e,this.auth,"internal-error"),e}async onExecution(){In(this.filter.length===1,"Popup operations only handle one event");const e=Wa();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(ot(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(ot(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,nr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0?void 0:r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ot(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,tx.get())};e()}}nr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sx="pendingRedirect",om=new Map;class ox extends TI{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r);this.eventId=null}async execute(){let e=om.get(this.auth._key());if(!e){try{const r=await ax(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}om.set(this.auth._key(),e)}return e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function ax(t,e){const n=SI(e),r=await um(t)._get(n)==="true";return await um(t)._remove(n),r}async function am(t,e){return um(t)._set(SI(e),"true")}function ux(){om.clear()}function um(t){return Yt(t._redirectPersistence)}function SI(t){return Ci(sx,t.config.apiKey,t.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lx(t,e,n){return cx(t,e,n)}async function cx(t,e,n){const r=He(t);Vs(t,e,jr);const i=Ni(r,n);return await am(i,r),i._openRedirect(r,e,"signInViaRedirect")}function hx(t,e,n){return dx(t,e,n)}async function dx(t,e,n){const r=B(t);Vs(r.auth,e,jr);const i=Ni(r.auth,n);await am(i,r.auth);const s=await kI(r);return i._openRedirect(r.auth,e,"reauthViaRedirect",s)}function fx(t,e,n){return px(t,e,n)}async function px(t,e,n){const r=B(t);Vs(r.auth,e,jr);const i=Ni(r.auth,n);await Pc(!1,r,e.providerId),await am(i,r.auth);const s=await kI(r);return i._openRedirect(r.auth,e,"linkViaRedirect",s)}async function mx(t,e){return await He(t)._initializationPromise,jc(t,e,!1)}async function jc(t,e,n=!1){const r=He(t),i=Ni(r,e),o=await new ox(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}async function kI(t){const e=Wa(`${t.uid}:::`);return t._redirectEventId=e,await t.auth._setRedirectUser(t),await t.auth._persistUserIfCurrent(t),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gx=10*60*1e3;class CI{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!yx(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!AI(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(ot(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=gx&&this.cachedEventUids.clear(),this.cachedEventUids.has(bI(e))}saveEventToCache(e){this.cachedEventUids.add(bI(e)),this.lastProcessedEventTime=Date.now()}}function bI(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function AI({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function yx(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return AI(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function RI(t,e={}){return qe(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vx=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,wx=/^https?/;async function _x(t){if(t.config.emulator)return;const{authorizedDomains:e}=await RI(t);for(const n of e)try{if(Ix(n))return}catch{}st(t,"unauthorized-domain")}function Ix(t){const e=Ua(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!wx.test(n))return!1;if(vx.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const Ex=new Fa(3e4,6e4);function NI(){const t=Fe().___jsl;if(t==null?void 0:t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Tx(t){return new Promise((e,n)=>{var r,i,s;function o(){NI(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{NI(),n(ot(t,"network-request-failed"))},timeout:Ex.get()})}if((i=(r=Fe().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0?void 0:i.Iframe)e(gapi.iframes.getContext());else if((s=Fe().gapi)===null||s===void 0?void 0:s.load)o();else{const a=II("iframefcb");return Fe()[a]=()=>{gapi.load?o():n(ot(t,"network-request-failed"))},_I(`https://apis.google.com/js/api.js?onload=${a}`)}}).catch(e=>{throw zc=null,e})}let zc=null;function Sx(t){return zc=zc||Tx(t),zc}/**
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
 */const kx=new Fa(5e3,15e3),Cx="__/auth/iframe",bx="emulator/auth/iframe",Ax={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"}},Rx=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Nx(t){const e=t.config;A(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Hp(e,bx):`https://${t.config.authDomain}/${Cx}`,r={apiKey:e.apiKey,appName:t.name,v:Fr},i=Rx.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Ms(r).slice(1)}`}async function Px(t){const e=await Sx(t),n=Fe().gapi;return A(n,t,"internal-error"),e.open({where:document.body,url:Nx(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Ax,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=ot(t,"network-request-failed"),a=Fe().setTimeout(()=>{s(o)},kx.get());function u(){Fe().clearTimeout(a),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
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
 */const xx={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Dx=500,Ox=600,Lx="_blank",Mx="http://localhost";class PI{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function $x(t,e,n,r=Dx,i=Ox){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const u=Object.assign(Object.assign({},xx),{width:r.toString(),height:i.toString(),top:s,left:o}),l=ye().toLowerCase();n&&(a=q_(l)?Lx:n),z_(l)&&(e=e||Mx,u.scrollbars="yes");const c=Object.entries(u).reduce((d,[g,y])=>`${d}${g}=${y},`,"");if(mN(l)&&a!=="_self")return Ux(e||"",a),new PI(null);const h=window.open(e||"",a,c);A(h,t,"popup-blocked");try{h.focus()}catch{}return new PI(h)}function Ux(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const Fx="__/auth/handler",Vx="emulator/auth/handler";function lm(t,e,n,r,i,s){A(t.config.authDomain,t,"auth-domain-config-required"),A(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Fr,eventId:i};if(e instanceof jr){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",zA(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,l]of Object.entries(s||{}))o[u]=l}if(e instanceof qs){const u=e.getScopes().filter(l=>l!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];return`${Bx(t)}?${Ms(a).slice(1)}`}function Bx({config:t}){return t.emulator?Hp(t,Vx):`https://${t.authDomain}/${Fx}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cm="webStorageSupport";class jx{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ri,this._completeRedirectFn=jc}async _openPopup(e,n,r,i){var s;In((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=lm(e,n,r,Ua(),i);return $x(e,o,Wa())}async _openRedirect(e,n,r,i){return await this._originValidation(e),EP(lm(e,n,r,Ua(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(In(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r}async initAndGetManager(e){const n=await Px(e),r=new CI(e);return n.register("authEvent",i=>(A(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(cm,{type:cm},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[cm];o!==void 0&&n(!!o),st(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=_x(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return K_()||Kp()||js()}}const zx=jx;class qx{constructor(e){this.factorId=e}_process(e,n,r){switch(n.type){case"enroll":return this._finalizeEnroll(e,n.credential,r);case"signin":return this._finalizeSignIn(e,n.credential);default:return xn("unexpected MultiFactorSessionType")}}}class hm extends qx{constructor(e){super("phone");this.credential=e}static _fromCredential(e){return new hm(e)}_finalizeEnroll(e,n,r){return pP(e,{idToken:n,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,n){return xP(e,{mfaPendingCredential:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class xI{constructor(){}static assertion(e){return hm._fromCredential(e)}}xI.FACTOR_ID="phone";var DI="@firebase/auth",OI="0.18.3";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hx{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{var i;e(((i=r)===null||i===void 0?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){A(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wx(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Gx(t){Ur(new _n("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),{apiKey:i,authDomain:s}=r.options;return(o=>{A(i&&!i.includes(":"),"invalid-api-key",{appName:o.name}),A(!(s==null?void 0:s.includes(":")),"argument-error",{appName:o.name});const a={apiKey:i,authDomain:s,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Q_(t)},u=new vN(o,a);return XR(u,n),u})(r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Ur(new _n("auth-internal",e=>{const n=He(e.getProvider("auth").getImmediate());return(r=>new Hx(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),ln(DI,OI,Wx(t)),ln(DI,OI,"esm2017")}Gx("Browser");/**
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
 */function Pi(){return window}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kx=2e3;async function Qx(t,e,n){var r;const{BuildInfo:i}=Pi();In(e.sessionId,"AuthEvent did not contain a session ID");const s=await eD(e.sessionId),o={};return js()?o.ibi=i.packageName:qa()?o.apn=i.packageName:st(t,"operation-not-supported-in-this-environment"),i.displayName&&(o.appDisplayName=i.displayName),o.sessionId=s,lm(t,n,e.type,void 0,(r=e.eventId)!==null&&r!==void 0?r:void 0,o)}async function Yx(t){const{BuildInfo:e}=Pi(),n={};js()?n.iosBundleId=e.packageName:qa()?n.androidPackageName=e.packageName:st(t,"operation-not-supported-in-this-environment"),await RI(t,n)}function Xx(t){const{cordova:e}=Pi();return new Promise(n=>{e.plugins.browsertab.isAvailable(r=>{let i=null;r?e.plugins.browsertab.openUrl(t):i=e.InAppBrowser.open(t,pN()?"_blank":"_system","location=yes"),n(i)})})}async function Jx(t,e,n){const{cordova:r}=Pi();let i=()=>{};try{await new Promise((s,o)=>{let a=null;function u(){var h;s();const d=(h=r.plugins.browsertab)===null||h===void 0?void 0:h.close;typeof d=="function"&&d(),typeof(n==null?void 0:n.close)=="function"&&n.close()}function l(){a||(a=window.setTimeout(()=>{o(ot(t,"redirect-cancelled-by-user"))},Kx))}function c(){(document==null?void 0:document.visibilityState)==="visible"&&l()}e.addPassiveListener(u),document.addEventListener("resume",l,!1),qa()&&document.addEventListener("visibilitychange",c,!1),i=()=>{e.removePassiveListener(u),document.removeEventListener("resume",l,!1),document.removeEventListener("visibilitychange",c,!1),a&&window.clearTimeout(a)}})}finally{i()}}function Zx(t){var e,n,r,i,s,o,a,u,l,c;const h=Pi();A(typeof((e=h==null?void 0:h.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),A(typeof((n=h==null?void 0:h.BuildInfo)===null||n===void 0?void 0:n.packageName)!="undefined",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),A(typeof((s=(i=(r=h==null?void 0:h.cordova)===null||r===void 0?void 0:r.plugins)===null||i===void 0?void 0:i.browsertab)===null||s===void 0?void 0:s.openUrl)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),A(typeof((u=(a=(o=h==null?void 0:h.cordova)===null||o===void 0?void 0:o.plugins)===null||a===void 0?void 0:a.browsertab)===null||u===void 0?void 0:u.isAvailable)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),A(typeof((c=(l=h==null?void 0:h.cordova)===null||l===void 0?void 0:l.InAppBrowser)===null||c===void 0?void 0:c.open)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function eD(t){const e=tD(t),n=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(n)).map(i=>i.toString(16).padStart(2,"0")).join("")}function tD(t){if(In(/[0-9a-zA-Z]+/.test(t),"Can only convert alpha-numeric strings"),typeof TextEncoder!="undefined")return new TextEncoder().encode(t);const e=new ArrayBuffer(t.length),n=new Uint8Array(e);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nD=20;class rD extends CI{constructor(){super(...arguments);this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach(n=>n(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function iD(t,e,n=null){return{type:e,eventId:n,urlResponse:null,sessionId:aD(),postBody:null,tenantId:t.tenantId,error:ot(t,"no-auth-event")}}function sD(t,e){return dm()._set(fm(t),e)}async function LI(t){const e=await dm()._get(fm(t));return e&&await dm()._remove(fm(t)),e}function oD(t,e){var n,r;const i=lD(e);if(i.includes("/__/auth/callback")){const s=qc(i),o=s.firebaseError?uD(decodeURIComponent(s.firebaseError)):null,a=(r=(n=o==null?void 0:o.code)===null||n===void 0?void 0:n.split("auth/"))===null||r===void 0?void 0:r[1],u=a?ot(a):null;return u?{type:t.type,eventId:t.eventId,tenantId:t.tenantId,error:u,urlResponse:null,sessionId:null,postBody:null}:{type:t.type,eventId:t.eventId,tenantId:t.tenantId,sessionId:t.sessionId,urlResponse:i,postBody:null}}return null}function aD(){const t=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<nD;n++){const r=Math.floor(Math.random()*e.length);t.push(e.charAt(r))}return t.join("")}function dm(){return Yt(em)}function fm(t){return Ci("authEvent",t.config.apiKey,t.name)}function uD(t){try{return JSON.parse(t)}catch{return null}}function lD(t){const e=qc(t),n=e.link?decodeURIComponent(e.link):void 0,r=qc(n).link,i=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return qc(i).link||i||r||n||t}function qc(t){if(!(t==null?void 0:t.includes("?")))return{};const[e,...n]=t.split("?");return $s(n.join("?"))}/**
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
 */const cD=500;class hD{constructor(){this._redirectPersistence=Ri,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=jc}async _initialize(e){const n=e._key();let r=this.eventManagers.get(n);return r||(r=new rD(e),this.eventManagers.set(n,r),this.attachCallbackListeners(e,r)),r}_openPopup(e){st(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,n,r,i){Zx(e);const s=await this._initialize(e);await s.initialized(),s.resetRedirect(),ux(),await this._originValidation(e);const o=iD(e,r,i);await sD(e,o);const a=await Qx(e,o,n),u=await Xx(a);return Jx(e,s,u)}_isIframeWebStorageSupported(e,n){throw new Error("Method not implemented.")}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Yx(e)),this.originValidationPromises[n]}attachCallbackListeners(e,n){const{universalLinks:r,handleOpenURL:i,BuildInfo:s}=Pi(),o=setTimeout(async()=>{await LI(e),n.onEvent(MI())},cD),a=async c=>{clearTimeout(o);const h=await LI(e);let d=null;h&&(c==null?void 0:c.url)&&(d=oD(h,c.url)),n.onEvent(d||MI())};typeof r!="undefined"&&typeof r.subscribe=="function"&&r.subscribe(null,a);const u=i,l=`${s.packageName.toLowerCase()}://`;Pi().handleOpenURL=async c=>{if(c.toLowerCase().startsWith(l)&&a({url:c}),typeof u=="function")try{u(c)}catch(h){console.error(h)}}}}const dD=hD;function MI(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:ot("no-auth-event")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fD(t,e){He(t)._logFramework(e)}var pD="@firebase/auth-compat",mD="0.1.6";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gD=1e3;function Hc(){var t;return((t=self==null?void 0:self.location)===null||t===void 0?void 0:t.protocol)||null}function yD(){return Hc()==="http:"||Hc()==="https:"}function $I(t=ye()){return!!((Hc()==="file:"||Hc()==="ionic:")&&t.toLowerCase().match(/iphone|ipad|ipod|android/))}function vD(){return wc()||Dp()}function wD(){return Lp()&&(document==null?void 0:document.documentMode)===11}function _D(t=ye()){return/Edge\/\d+/.test(t)}function ID(t=ye()){return wD()||_D(t)}function UI(){try{const t=self.localStorage,e=Wa();if(t)return t.setItem(e,"1"),t.removeItem(e),ID()?_c():!0}catch{return pm()&&_c()}return!1}function pm(){return typeof global!="undefined"&&"WorkerGlobalScope"in global&&"importScripts"in global}function mm(){return(yD()||Op()||$I())&&!vD()&&UI()&&!pm()}function FI(){return $I()&&typeof document!="undefined"}async function ED(){return FI()?new Promise(t=>{const e=setTimeout(()=>{t(!1)},gD);document.addEventListener("deviceready",()=>{clearTimeout(e),t(!0)})}):!1}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xt={LOCAL:"local",NONE:"none",SESSION:"session"},Ka=A,VI="persistence";function TD(t,e){if(Ka(Object.values(Xt).includes(e),t,"invalid-persistence-type"),wc()){Ka(e!==Xt.SESSION,t,"unsupported-persistence-type");return}if(Dp()){Ka(e===Xt.NONE,t,"unsupported-persistence-type");return}if(pm()){Ka(e===Xt.NONE||e===Xt.LOCAL&&_c(),t,"unsupported-persistence-type");return}Ka(e===Xt.NONE||UI(),t,"unsupported-persistence-type")}async function gm(t){await t._initializationPromise;const e=BI(),n=Ci(VI,t.config.apiKey,t.name);(e==null?void 0:e.sessionStorage)&&e.sessionStorage.setItem(n,t._getPersistence())}function SD(t,e){const n=BI();if(!(n==null?void 0:n.sessionStorage))return[];const r=Ci(VI,t,e);switch(n.sessionStorage.getItem(r)){case Xt.NONE:return[za];case Xt.LOCAL:return[Fc,Ri];case Xt.SESSION:return[Ri];default:return[]}}function BI(){return typeof window!="undefined"?window:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kD=A;class zr{constructor(){this.browserResolver=Yt(zx),this.cordovaResolver=Yt(dD),this.underlyingResolver=null,this._redirectPersistence=Ri,this._completeRedirectFn=jc}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,n,r,i)}async _openRedirect(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,n,r,i)}_isIframeWebStorageSupported(e,n){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,n)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return FI()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return kD(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await ED();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jI(t){return t.unwrap()}function CD(t){return t.wrapped()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bD(t){return zI(t)}function AD(t,e){var n;const r=(n=e.customData)===null||n===void 0?void 0:n._tokenResponse;if(e.code==="auth/multi-factor-auth-required"){const i=e;i.resolver=new RD(t,dP(t,e))}else if(r){const i=zI(e),s=e;i&&(s.credential=i,s.tenantId=r.tenantId||void 0,s.email=r.email||void 0,s.phoneNumber=r.phoneNumber||void 0)}}function zI(t){const{_tokenResponse:e}=t instanceof Qt?t.customData:t;if(!e)return null;if(!(t instanceof Qt)&&"temporaryProof"in e&&"phoneNumber"in e)return En.credentialFromResult(t);const n=e.providerId;if(!n||n===$a.PASSWORD)return null;let r;switch(n){case $a.GOOGLE:r=Ln;break;case $a.FACEBOOK:r=On;break;case $a.GITHUB:r=Mn;break;case $a.TWITTER:r=$n;break;default:const{oauthIdToken:i,oauthAccessToken:s,oauthTokenSecret:o,pendingToken:a,nonce:u}=e;return!s&&!o&&!i&&!a?null:a?n.startsWith("saml.")?Rc._create(n,a):Dn._fromParams({providerId:n,signInMethod:n,pendingToken:a,idToken:i,accessToken:s}):new Hs(n).credential({idToken:i,accessToken:s,rawNonce:u})}return t instanceof Qt?r.credentialFromError(t):r.credentialFromResult(t)}function jt(t,e){return e.catch(n=>{throw n instanceof Qt&&AD(t,n),n}).then(n=>{const r=n.operationType,i=n.user;return{operationType:r,credential:bD(n),additionalUserInfo:hP(n),user:rr.getOrCreate(i)}})}async function ym(t,e){const n=await e;return{verificationId:n.verificationId,confirm:r=>jt(t,n.confirm(r))}}class RD{constructor(e,n){this.resolver=n,this.auth=CD(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return jt(jI(this.auth),this.resolver.resolveSignIn(e))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr{constructor(e){this._delegate=e,this.multiFactor=gP(e)}static getOrCreate(e){return rr.USER_MAP.has(e)||rr.USER_MAP.set(e,new rr(e)),rr.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return jt(this.auth,aI(this._delegate,e))}async linkWithPhoneNumber(e,n){return ym(this.auth,QP(this._delegate,e,n))}async linkWithPopup(e){return jt(this.auth,ix(this._delegate,e,zr))}async linkWithRedirect(e){return await gm(He(this.auth)),fx(this._delegate,e,zr)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return jt(this.auth,uI(this._delegate,e))}reauthenticateWithPhoneNumber(e,n){return ym(this.auth,YP(this._delegate,e,n))}reauthenticateWithPopup(e){return jt(this.auth,rx(this._delegate,e,zr))}async reauthenticateWithRedirect(e){return await gm(He(this.auth)),hx(this._delegate,e,zr)}sendEmailVerification(e){return eP(this._delegate,e)}async unlink(e){return await VN(this._delegate,e),this}updateEmail(e){return iP(this._delegate,e)}updatePassword(e){return sP(this._delegate,e)}updatePhoneNumber(e){return XP(this._delegate,e)}updateProfile(e){return rP(this._delegate,e)}verifyBeforeUpdateEmail(e,n){return tP(this._delegate,e,n)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}rr.USER_MAP=new WeakMap;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qa=A;class vm{constructor(e,n){if(this.app=e,n.isInitialized()){this._delegate=n.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:r}=e.options;Qa(r,"invalid-api-key",{appName:e.name});let i=[za];if(typeof window!="undefined"){i=SD(r,e.name);for(const o of[Fc,em,Ri])i.includes(o)||i.push(o)}Qa(r,"invalid-api-key",{appName:e.name});const s=typeof window!="undefined"?zr:void 0;this._delegate=n.initialize({options:{persistence:i,popupRedirectResolver:s}}),this._delegate._updateErrorMap(QR),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?rr.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,n){wN(this._delegate,e,n)}applyActionCode(e){return HN(this._delegate,e)}checkActionCode(e){return lI(this._delegate,e)}confirmPasswordReset(e,n){return qN(this._delegate,e,n)}async createUserWithEmailAndPassword(e,n){return jt(this._delegate,GN(this._delegate,e,n))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return ZN(this._delegate,e)}isSignInWithEmailLink(e){return YN(this._delegate,e)}async getRedirectResult(){Qa(mm(),this._delegate,"operation-not-supported-in-this-environment");const e=await mx(this._delegate,zr);return e?jt(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){fD(this._delegate,e)}onAuthStateChanged(e,n,r){const{next:i,error:s,complete:o}=qI(e,n,r);return this._delegate.onAuthStateChanged(i,s,o)}onIdTokenChanged(e,n,r){const{next:i,error:s,complete:o}=qI(e,n,r);return this._delegate.onIdTokenChanged(i,s,o)}sendSignInLinkToEmail(e,n){return QN(this._delegate,e,n)}sendPasswordResetEmail(e,n){return zN(this._delegate,e,n||void 0)}async setPersistence(e){TD(this._delegate,e);let n;switch(e){case Xt.SESSION:n=Ri;break;case Xt.LOCAL:n=await Yt(Fc)._isAvailable()?Fc:em;break;case Xt.NONE:n=za;break;default:return st("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(n)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return jt(this._delegate,FN(this._delegate))}signInWithCredential(e){return jt(this._delegate,xc(this._delegate,e))}signInWithCustomToken(e){return jt(this._delegate,jN(this._delegate,e))}signInWithEmailAndPassword(e,n){return jt(this._delegate,KN(this._delegate,e,n))}signInWithEmailLink(e,n){return jt(this._delegate,XN(this._delegate,e,n))}signInWithPhoneNumber(e,n){return ym(this._delegate,KP(this._delegate,e,n))}async signInWithPopup(e){return Qa(mm(),this._delegate,"operation-not-supported-in-this-environment"),jt(this._delegate,nx(this._delegate,e,zr))}async signInWithRedirect(e){return Qa(mm(),this._delegate,"operation-not-supported-in-this-environment"),await gm(this._delegate),lx(this._delegate,e,zr)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return WN(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}vm.Persistence=Xt;function qI(t,e,n){let r=t;typeof t!="function"&&({next:r,error:e,complete:n}=t);const i=r;return{next:o=>i(o&&rr.getOrCreate(o)),error:e,complete:n}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wm{constructor(){this.providerId="phone",this._delegate=new En(jI(Us.auth()))}static credential(e,n){return En.credential(e,n)}verifyPhoneNumber(e,n){return this._delegate.verifyPhoneNumber(e,n)}unwrap(){return this._delegate}}wm.PHONE_SIGN_IN_METHOD=En.PHONE_SIGN_IN_METHOD;wm.PROVIDER_ID=En.PROVIDER_ID;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ND=A;class PD{constructor(e,n,r=Us.app()){var i;ND((i=r.options)===null||i===void 0?void 0:i.apiKey,"invalid-api-key",{appName:r.name}),this._delegate=new WP(e,n,r.auth()),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xD="auth-compat";function DD(t){t.INTERNAL.registerComponent(new _n(xD,e=>{const n=e.getProvider("app-compat").getImmediate(),r=e.getProvider("auth");return new vm(n,r)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:Fs.EMAIL_SIGNIN,PASSWORD_RESET:Fs.PASSWORD_RESET,RECOVER_EMAIL:Fs.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:Fs.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:Fs.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:Fs.VERIFY_EMAIL}},EmailAuthProvider:Br,FacebookAuthProvider:On,GithubAuthProvider:Mn,GoogleAuthProvider:Ln,OAuthProvider:Hs,PhoneAuthProvider:wm,PhoneMultiFactorGenerator:xI,RecaptchaVerifier:PD,TwitterAuthProvider:$n,Auth:vm,AuthCredential:zs,Error:Qt}).setInstantiationMode("LAZY").setMultipleInstances(!1)),t.registerVersion(pD,mD)}DD(Us);var OD=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},$,_m=_m||{},G=OD||self;function Wc(){}function Im(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Ya(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function LD(t){return Object.prototype.hasOwnProperty.call(t,Em)&&t[Em]||(t[Em]=++MD)}var Em="closure_uid_"+(1e9*Math.random()>>>0),MD=0;function $D(t,e,n){return t.call.apply(t.bind,arguments)}function UD(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function at(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?at=$D:at=UD,at.apply(null,arguments)}function Gc(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function ut(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function qr(){this.s=this.s,this.o=this.o}var FD=0,VD={};qr.prototype.s=!1;qr.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),FD!=0)){var t=LD(this);delete VD[t]}};qr.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const HI=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},WI=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const r=t.length,i=typeof t=="string"?t.split(""):t;for(let s=0;s<r;s++)s in i&&e.call(n,i[s],s,t)};function BD(t){e:{var e=xO;const n=t.length,r=typeof t=="string"?t.split(""):t;for(let i=0;i<n;i++)if(i in r&&e.call(void 0,r[i],i,t)){e=i;break e}e=-1}return 0>e?null:typeof t=="string"?t.charAt(e):t[e]}function GI(t){return Array.prototype.concat.apply([],arguments)}function Tm(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function Kc(t){return/^[\s\xa0]*$/.test(t)}var KI=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Rt(t,e){return t.indexOf(e)!=-1}function Sm(t,e){return t<e?-1:t>e?1:0}var Nt;e:{var QI=G.navigator;if(QI){var YI=QI.userAgent;if(YI){Nt=YI;break e}}Nt=""}function km(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function XI(t){const e={};for(const n in t)e[n]=t[n];return e}var JI="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ZI(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<JI.length;s++)n=JI[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Cm(t){return Cm[" "](t),t}Cm[" "]=Wc;function jD(t){var e=HD;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var zD=Rt(Nt,"Opera"),Gs=Rt(Nt,"Trident")||Rt(Nt,"MSIE"),eE=Rt(Nt,"Edge"),bm=eE||Gs,tE=Rt(Nt,"Gecko")&&!(Rt(Nt.toLowerCase(),"webkit")&&!Rt(Nt,"Edge"))&&!(Rt(Nt,"Trident")||Rt(Nt,"MSIE"))&&!Rt(Nt,"Edge"),qD=Rt(Nt.toLowerCase(),"webkit")&&!Rt(Nt,"Edge");function nE(){var t=G.document;return t?t.documentMode:void 0}var Qc;e:{var Am="",Rm=function(){var t=Nt;if(tE)return/rv:([^\);]+)(\)|;)/.exec(t);if(eE)return/Edge\/([\d\.]+)/.exec(t);if(Gs)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(qD)return/WebKit\/(\S+)/.exec(t);if(zD)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Rm&&(Am=Rm?Rm[1]:""),Gs){var Nm=nE();if(Nm!=null&&Nm>parseFloat(Am)){Qc=String(Nm);break e}}Qc=Am}var HD={};function WD(){return jD(function(){let t=0;const e=KI(String(Qc)).split("."),n=KI("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var i=e[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i[0].length==0&&s[0].length==0)break;t=Sm(i[1].length==0?0:parseInt(i[1],10),s[1].length==0?0:parseInt(s[1],10))||Sm(i[2].length==0,s[2].length==0)||Sm(i[2],s[2]),i=i[3],s=s[3]}while(t==0)}return 0<=t})}var Pm;if(G.document&&Gs){var rE=nE();Pm=rE||parseInt(Qc,10)||void 0}else Pm=void 0;var GD=Pm,KD=function(){if(!G.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{G.addEventListener("test",Wc,e),G.removeEventListener("test",Wc,e)}catch{}return t}();function _t(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}_t.prototype.h=function(){this.defaultPrevented=!0};function Xa(t,e){if(_t.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(tE){e:{try{Cm(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:QD[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Xa.Z.h.call(this)}}ut(Xa,_t);var QD={2:"touch",3:"pen",4:"mouse"};Xa.prototype.h=function(){Xa.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Ja="closure_listenable_"+(1e6*Math.random()|0),YD=0;function XD(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ia=i,this.key=++YD,this.ca=this.fa=!1}function Yc(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function Xc(t){this.src=t,this.g={},this.h=0}Xc.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=Dm(t,e,r,i);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new XD(e,this.src,s,!!r,i),e.fa=n,t.push(e)),e};function xm(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=HI(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(Yc(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Dm(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.ca&&s.listener==e&&s.capture==!!n&&s.ia==r)return i}return-1}var Om="closure_lm_"+(1e6*Math.random()|0),Lm={};function iE(t,e,n,r,i){if(r&&r.once)return oE(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)iE(t,e[s],n,r,i);return null}return n=Fm(n),t&&t[Ja]?t.N(e,n,Ya(r)?!!r.capture:!!r,i):sE(t,e,n,!1,r,i)}function sE(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=Ya(i)?!!i.capture:!!i,a=$m(t);if(a||(t[Om]=a=new Xc(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=JD(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)KD||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(uE(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function JD(){function t(n){return e.call(t.src,t.listener,n)}var e=ZD;return t}function oE(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)oE(t,e[s],n,r,i);return null}return n=Fm(n),t&&t[Ja]?t.O(e,n,Ya(r)?!!r.capture:!!r,i):sE(t,e,n,!0,r,i)}function aE(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)aE(t,e[s],n,r,i);else r=Ya(r)?!!r.capture:!!r,n=Fm(n),t&&t[Ja]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=Dm(s,n,r,i),-1<n&&(Yc(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=$m(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Dm(e,n,r,i)),(n=-1<t?e[t]:null)&&Mm(n))}function Mm(t){if(typeof t!="number"&&t&&!t.ca){var e=t.src;if(e&&e[Ja])xm(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(uE(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=$m(e))?(xm(n,t),n.h==0&&(n.src=null,e[Om]=null)):Yc(t)}}}function uE(t){return t in Lm?Lm[t]:Lm[t]="on"+t}function ZD(t,e){if(t.ca)t=!0;else{e=new Xa(e,this);var n=t.listener,r=t.ia||t.src;t.fa&&Mm(t),t=n.call(r,e)}return t}function $m(t){return t=t[Om],t instanceof Xc?t:null}var Um="__closure_events_fn_"+(1e9*Math.random()>>>0);function Fm(t){return typeof t=="function"?t:(t[Um]||(t[Um]=function(e){return t.handleEvent(e)}),t[Um])}function We(){qr.call(this),this.i=new Xc(this),this.P=this,this.I=null}ut(We,qr);We.prototype[Ja]=!0;We.prototype.removeEventListener=function(t,e,n,r){aE(this,t,e,n,r)};function lt(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,typeof e=="string")e=new _t(e,t);else if(e instanceof _t)e.target=e.target||t;else{var i=e;e=new _t(r,t),ZI(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=Jc(o,r,!0,e)&&i}if(o=e.g=t,i=Jc(o,r,!0,e)&&i,i=Jc(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=Jc(o,r,!1,e)&&i}We.prototype.M=function(){if(We.Z.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Yc(n[r]);delete t.g[e],t.h--}}this.I=null};We.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};We.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Jc(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ca&&o.capture==n){var a=o.listener,u=o.ia||o.src;o.fa&&xm(t.i,o),i=a.call(u,r)!==!1&&i}}return i&&!r.defaultPrevented}var Vm=G.JSON.stringify;function eO(){var t=cE;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class tO{constructor(){this.h=this.g=null}add(e,n){const r=lE.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var lE=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new nO,t=>t.reset());class nO{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function rO(t){G.setTimeout(()=>{throw t},0)}function Bm(t,e){jm||iO(),zm||(jm(),zm=!0),cE.add(t,e)}var jm;function iO(){var t=G.Promise.resolve(void 0);jm=function(){t.then(sO)}}var zm=!1,cE=new tO;function sO(){for(var t;t=eO();){try{t.h.call(t.g)}catch(n){rO(n)}var e=lE;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}zm=!1}function Zc(t,e){We.call(this),this.h=t||1,this.g=e||G,this.j=at(this.kb,this),this.l=Date.now()}ut(Zc,We);$=Zc.prototype;$.da=!1;$.S=null;$.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),lt(this,"tick"),this.da&&(qm(this),this.start()))}};$.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function qm(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}$.M=function(){Zc.Z.M.call(this),qm(this),delete this.g};function Hm(t,e,n){if(typeof t=="function")n&&(t=at(t,n));else if(t&&typeof t.handleEvent=="function")t=at(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:G.setTimeout(t,e||0)}function hE(t){t.g=Hm(()=>{t.g=null,t.i&&(t.i=!1,hE(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class oO extends qr{constructor(e,n){super();this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:hE(this)}M(){super.M(),this.g&&(G.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Za(t){qr.call(this),this.h=t,this.g={}}ut(Za,qr);var dE=[];function fE(t,e,n,r){Array.isArray(n)||(n&&(dE[0]=n.toString()),n=dE);for(var i=0;i<n.length;i++){var s=iE(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function pE(t){km(t.g,function(e,n){this.g.hasOwnProperty(n)&&Mm(e)},t),t.g={}}Za.prototype.M=function(){Za.Z.M.call(this),pE(this)};Za.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function eh(){this.g=!0}eh.prototype.Aa=function(){this.g=!1};function aO(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),u=0;u<a.length;u++){var l=a[u].split("=");if(1<l.length){var c=l[0];l=l[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+l+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function uO(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function Ks(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+cO(t,n)+(r?" "+r:"")})}function lO(t,e){t.info(function(){return"TIMEOUT: "+e})}eh.prototype.info=function(){};function cO(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Vm(n)}catch{return e}}var xi={},mE=null;function th(){return mE=mE||new We}xi.Ma="serverreachability";function gE(t){_t.call(this,xi.Ma,t)}ut(gE,_t);function eu(t){const e=th();lt(e,new gE(e,t))}xi.STAT_EVENT="statevent";function yE(t,e){_t.call(this,xi.STAT_EVENT,t),this.stat=e}ut(yE,_t);function Pt(t){const e=th();lt(e,new yE(e,t))}xi.Na="timingevent";function vE(t,e){_t.call(this,xi.Na,t),this.size=e}ut(vE,_t);function tu(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return G.setTimeout(function(){t()},e)}var nh={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},wE={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function Wm(){}Wm.prototype.h=null;function _E(t){return t.h||(t.h=t.i())}function IE(){}var nu={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function Gm(){_t.call(this,"d")}ut(Gm,_t);function Km(){_t.call(this,"c")}ut(Km,_t);var Qm;function rh(){}ut(rh,Wm);rh.prototype.g=function(){return new XMLHttpRequest};rh.prototype.i=function(){return{}};Qm=new rh;function ru(t,e,n,r){this.l=t,this.j=e,this.m=n,this.X=r||1,this.V=new Za(this),this.P=hO,t=bm?125:void 0,this.W=new Zc(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new EE}function EE(){this.i=null,this.g="",this.h=!1}var hO=45e3,Ym={},ih={};$=ru.prototype;$.setTimeout=function(t){this.P=t};function Xm(t,e,n){t.K=1,t.v=lh(ir(e)),t.s=n,t.U=!0,TE(t,null)}function TE(t,e){t.F=Date.now(),iu(t),t.A=ir(t.v);var n=t.A,r=t.X;Array.isArray(r)||(r=[String(r)]),xE(n.h,"t",r),t.C=0,n=t.l.H,t.h=new EE,t.g=t1(t.l,n?e:null,!t.s),0<t.O&&(t.L=new oO(at(t.Ia,t,t.g),t.O)),fE(t.V,t.g,"readystatechange",t.gb),e=t.H?XI(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),eu(1),aO(t.j,t.u,t.A,t.m,t.X,t.s)}$.gb=function(t){t=t.target;const e=this.L;e&&sr(t)==3?e.l():this.Ia(t)};$.Ia=function(t){try{if(t==this.g)e:{const c=sr(this.g);var e=this.g.Da();const h=this.g.ba();if(!(3>c)&&(c!=3||bm||this.g&&(this.h.h||this.g.ga()||qE(this.g)))){this.I||c!=4||e==7||(e==8||0>=h?eu(3):eu(2)),sh(this);var n=this.g.ba();this.N=n;t:if(SE(this)){var r=qE(this.g);t="";var i=r.length,s=sr(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){Di(this),su(this);var o="";break t}this.h.i=new G.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=n==200,uO(this.j,this.u,this.A,this.m,this.X,c,n),this.i){if(this.$&&!this.J){t:{if(this.g){var a,u=this.g;if((a=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Kc(a)){var l=a;break t}}l=null}if(n=l)Ks(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Jm(this,n);else{this.i=!1,this.o=3,Pt(12),Di(this),su(this);break e}}this.U?(kE(this,c,o),bm&&this.i&&c==3&&(fE(this.V,this.W,"tick",this.fb),this.W.start())):(Ks(this.j,this.m,o,null),Jm(this,o)),c==4&&Di(this),this.i&&!this.I&&(c==4?XE(this.l,this):(this.i=!1,iu(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Pt(12)):(this.o=0,Pt(13)),Di(this),su(this)}}}catch{}finally{}};function SE(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Ba:!1}function kE(t,e,n){let r=!0,i;for(;!t.I&&t.C<n.length;)if(i=dO(t,n),i==ih){e==4&&(t.o=4,Pt(14),r=!1),Ks(t.j,t.m,null,"[Incomplete Response]");break}else if(i==Ym){t.o=4,Pt(15),Ks(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Ks(t.j,t.m,i,null),Jm(t,i);SE(t)&&i!=ih&&i!=Ym&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Pt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),lg(e),e.L=!0,Pt(11))):(Ks(t.j,t.m,n,"[Invalid Chunked Response]"),Di(t),su(t))}$.fb=function(){if(this.g){var t=sr(this.g),e=this.g.ga();this.C<e.length&&(sh(this),kE(this,t,e),this.i&&t!=4&&iu(this))}};function dO(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?ih:(n=Number(e.substring(n,r)),isNaN(n)?Ym:(r+=1,r+n>e.length?ih:(e=e.substr(r,n),t.C=r+n,e)))}$.cancel=function(){this.I=!0,Di(this)};function iu(t){t.Y=Date.now()+t.P,CE(t,t.P)}function CE(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=tu(at(t.eb,t),e)}function sh(t){t.B&&(G.clearTimeout(t.B),t.B=null)}$.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(lO(this.j,this.A),this.K!=2&&(eu(3),Pt(17)),Di(this),this.o=2,su(this)):CE(this,this.Y-t)};function su(t){t.l.G==0||t.I||XE(t.l,t)}function Di(t){sh(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,qm(t.W),pE(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Jm(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||tg(n.i,t))){if(n.I=t.N,!t.J&&tg(n.i,t)&&n.G==3){try{var r=n.Ca.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0)e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)mh(n),fh(n);else break e;ug(n),Pt(18)}else n.ta=i[1],0<n.ta-n.U&&37500>i[2]&&n.N&&n.A==0&&!n.v&&(n.v=tu(at(n.ab,n),6e3));if(1>=LE(n.i)&&n.ka){try{n.ka()}catch{}n.ka=void 0}}else Mi(n,11)}else if((t.J||n.g==t)&&mh(n),!Kc(e))for(i=n.Ca.g.parse(e),e=0;e<i.length;e++){let l=i[e];if(n.U=l[0],l=l[1],n.G==2)if(l[0]=="c"){n.J=l[1],n.la=l[2];const c=l[3];c!=null&&(n.ma=c,n.h.info("VER="+n.ma));const h=l[4];h!=null&&(n.za=h,n.h.info("SVER="+n.za));const d=l[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.K=r,n.h.info("backChannelRequestTimeoutMs_="+r)),r=n;const g=t.g;if(g){const y=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var s=r.i;!s.g&&(Rt(y,"spdy")||Rt(y,"quic")||Rt(y,"h2"))&&(s.j=s.l,s.g=new Set,s.h&&(ng(s,s.h),s.h=null))}if(r.D){const _=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;_&&(r.sa=_,Ie(r.F,r.D,_))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),r=n;var o=t;if(r.oa=e1(r,r.H?r.la:null,r.W),o.J){ME(r.i,o);var a=o,u=r.K;u&&a.setTimeout(u),a.B&&(sh(a),iu(a)),r.g=o}else QE(r);0<n.l.length&&ph(n)}else l[0]!="stop"&&l[0]!="close"||Mi(n,7);else n.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?Mi(n,7):og(n):l[0]!="noop"&&n.j&&n.j.wa(l),n.A=0)}}eu(4)}catch{}}function fO(t){if(t.R&&typeof t.R=="function")return t.R();if(typeof t=="string")return t.split("");if(Im(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function Zm(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Im(t)||typeof t=="string")WI(t,e,void 0);else{if(t.T&&typeof t.T=="function")var n=t.T();else if(t.R&&typeof t.R=="function")n=void 0;else if(Im(t)||typeof t=="string"){n=[];for(var r=t.length,i=0;i<r;i++)n.push(i)}else for(i in n=[],r=0,t)n[r++]=i;r=fO(t),i=r.length;for(var s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}}function Qs(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(t)if(t instanceof Qs)for(n=t.T(),r=0;r<n.length;r++)this.set(n[r],t.get(n[r]));else for(r in t)this.set(r,t[r])}$=Qs.prototype;$.R=function(){eg(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t};$.T=function(){return eg(this),this.g.concat()};function eg(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var r=t.g[e];Oi(t.h,r)&&(t.g[n++]=r),e++}t.g.length=n}if(t.i!=t.g.length){var i={};for(n=e=0;e<t.g.length;)r=t.g[e],Oi(i,r)||(t.g[n++]=r,i[r]=1),e++;t.g.length=n}}$.get=function(t,e){return Oi(this.h,t)?this.h[t]:e};$.set=function(t,e){Oi(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e};$.forEach=function(t,e){for(var n=this.T(),r=0;r<n.length;r++){var i=n[r],s=this.get(i);t.call(e,s,i,this)}};function Oi(t,e){return Object.prototype.hasOwnProperty.call(t,e)}var bE=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function pO(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Li(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof Li){this.g=e!==void 0?e:t.g,oh(this,t.j),this.s=t.s,ah(this,t.i),uh(this,t.m),this.l=t.l,e=t.h;var n=new uu;n.i=e.i,e.g&&(n.g=new Qs(e.g),n.h=e.h),AE(this,n),this.o=t.o}else t&&(n=String(t).match(bE))?(this.g=!!e,oh(this,n[1]||"",!0),this.s=ou(n[2]||""),ah(this,n[3]||"",!0),uh(this,n[4]),this.l=ou(n[5]||"",!0),AE(this,n[6]||"",!0),this.o=ou(n[7]||"")):(this.g=!!e,this.h=new uu(null,this.g))}Li.prototype.toString=function(){var t=[],e=this.j;e&&t.push(au(e,RE,!0),":");var n=this.i;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(au(e,RE,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.i&&n.charAt(0)!="/"&&t.push("/"),t.push(au(n,n.charAt(0)=="/"?wO:vO,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",au(n,IO)),t.join("")};function ir(t){return new Li(t)}function oh(t,e,n){t.j=n?ou(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function ah(t,e,n){t.i=n?ou(e,!0):e}function uh(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function AE(t,e,n){e instanceof uu?(t.h=e,EO(t.h,t.g)):(n||(e=au(e,_O)),t.h=new uu(e,t.g))}function Ie(t,e,n){t.h.set(e,n)}function lh(t){return Ie(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function mO(t){return t instanceof Li?ir(t):new Li(t,void 0)}function gO(t,e,n,r){var i=new Li(null,void 0);return t&&oh(i,t),e&&ah(i,e),n&&uh(i,n),r&&(i.l=r),i}function ou(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function au(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,yO),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function yO(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var RE=/[#\/\?@]/g,vO=/[#\?:]/g,wO=/[#\?]/g,_O=/[#\?@]/g,IO=/#/g;function uu(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Hr(t){t.g||(t.g=new Qs,t.h=0,t.i&&pO(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}$=uu.prototype;$.add=function(t,e){Hr(this),this.i=null,t=Ys(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function NE(t,e){Hr(t),e=Ys(t,e),Oi(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,Oi(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&eg(t)))}function PE(t,e){return Hr(t),e=Ys(t,e),Oi(t.g.h,e)}$.forEach=function(t,e){Hr(this),this.g.forEach(function(n,r){WI(n,function(i){t.call(e,i,r,this)},this)},this)};$.T=function(){Hr(this);for(var t=this.g.R(),e=this.g.T(),n=[],r=0;r<e.length;r++)for(var i=t[r],s=0;s<i.length;s++)n.push(e[r]);return n};$.R=function(t){Hr(this);var e=[];if(typeof t=="string")PE(this,t)&&(e=GI(e,this.g.get(Ys(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=GI(e,t[n])}return e};$.set=function(t,e){return Hr(this),this.i=null,t=Ys(this,t),PE(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};$.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e};function xE(t,e,n){NE(t,e),0<n.length&&(t.i=null,t.g.set(Ys(t,e),Tm(n)),t.h+=n.length)}$.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var r=e[n],i=encodeURIComponent(String(r));r=this.R(r);for(var s=0;s<r.length;s++){var o=i;r[s]!==""&&(o+="="+encodeURIComponent(String(r[s]))),t.push(o)}}return this.i=t.join("&")};function Ys(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function EO(t,e){e&&!t.j&&(Hr(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(NE(this,r),xE(this,i,n))},t)),t.j=e}var TO=class{constructor(t,e){this.h=t,this.g=e}};function DE(t){this.l=t||SO,G.PerformanceNavigationTiming?(t=G.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(G.g&&G.g.Ea&&G.g.Ea()&&G.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var SO=10;function OE(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function LE(t){return t.h?1:t.g?t.g.size:0}function tg(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function ng(t,e){t.g?t.g.add(e):t.h=e}function ME(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}DE.prototype.cancel=function(){if(this.i=$E(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function $E(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Tm(t.i)}function rg(){}rg.prototype.stringify=function(t){return G.JSON.stringify(t,void 0)};rg.prototype.parse=function(t){return G.JSON.parse(t,void 0)};function kO(){this.g=new rg}function CO(t,e,n){const r=n||"";try{Zm(t,function(i,s){let o=i;Ya(i)&&(o=Vm(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function bO(t,e){const n=new eh;if(G.Image){const r=new Image;r.onload=Gc(ch,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Gc(ch,n,r,"TestLoadImage: error",!1,e),r.onabort=Gc(ch,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Gc(ch,n,r,"TestLoadImage: timeout",!1,e),G.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function ch(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function lu(t){this.l=t.$b||null,this.j=t.ib||!1}ut(lu,Wm);lu.prototype.g=function(){return new hh(this.l,this.j)};lu.prototype.i=function(t){return function(){return t}}({});function hh(t,e){We.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=ig,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}ut(hh,We);var ig=0;$=hh.prototype;$.open=function(t,e){if(this.readyState!=ig)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,hu(this)};$.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||G).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))};$.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,cu(this)),this.readyState=ig};$.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,hu(this)),this.g&&(this.readyState=3,hu(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof G.ReadableStream!="undefined"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;UE(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))};function UE(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}$.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?cu(this):hu(this),this.readyState==3&&UE(this)}};$.Ua=function(t){this.g&&(this.response=this.responseText=t,cu(this))};$.Ta=function(t){this.g&&(this.response=t,cu(this))};$.ha=function(){this.g&&cu(this)};function cu(t){t.readyState=4,t.l=null,t.j=null,t.A=null,hu(t)}$.setRequestHeader=function(t,e){this.v.append(t,e)};$.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};$.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function hu(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(hh.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var AO=G.JSON.parse;function xe(t){We.call(this),this.headers=new Qs,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=FE,this.K=this.L=!1}ut(xe,We);var FE="",RO=/^https?$/i,NO=["POST","PUT"];$=xe.prototype;$.ea=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Qm.g(),this.C=this.u?_E(this.u):_E(Qm),this.g.onreadystatechange=at(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(s){VE(this,s);return}t=n||"";const i=new Qs(this.headers);r&&Zm(r,function(s,o){i.set(o,s)}),r=BD(i.T()),n=G.FormData&&t instanceof G.FormData,!(0<=HI(NO,e))||r||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach(function(s,o){this.g.setRequestHeader(o,s)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{zE(this),0<this.B&&((this.K=PO(this.g))?(this.g.timeout=this.B,this.g.ontimeout=at(this.pa,this)):this.A=Hm(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){VE(this,s)}};function PO(t){return Gs&&WD()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}function xO(t){return t.toLowerCase()=="content-type"}$.pa=function(){typeof _m!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,lt(this,"timeout"),this.abort(8))};function VE(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,BE(t),dh(t)}function BE(t){t.D||(t.D=!0,lt(t,"complete"),lt(t,"error"))}$.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,lt(this,"complete"),lt(this,"abort"),dh(this))};$.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),dh(this,!0)),xe.Z.M.call(this)};$.Fa=function(){this.s||(this.F||this.v||this.l?jE(this):this.cb())};$.cb=function(){jE(this)};function jE(t){if(t.h&&typeof _m!="undefined"&&(!t.C[1]||sr(t)!=4||t.ba()!=2)){if(t.v&&sr(t)==4)Hm(t.Fa,0,t);else if(lt(t,"readystatechange"),sr(t)==4){t.h=!1;try{const a=t.ba();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var i=String(t.H).match(bE)[1]||null;if(!i&&G.self&&G.self.location){var s=G.self.location.protocol;i=s.substr(0,s.length-1)}r=!RO.test(i?i.toLowerCase():"")}n=r}if(n)lt(t,"complete"),lt(t,"success");else{t.m=6;try{var o=2<sr(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.ba()+"]",BE(t)}}finally{dh(t)}}}}function dh(t,e){if(t.g){zE(t);const n=t.g,r=t.C[0]?Wc:null;t.g=null,t.C=null,e||lt(t,"ready");try{n.onreadystatechange=r}catch{}}}function zE(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(G.clearTimeout(t.A),t.A=null)}function sr(t){return t.g?t.g.readyState:0}$.ba=function(){try{return 2<sr(this)?this.g.status:-1}catch{return-1}};$.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};$.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),AO(e)}};function qE(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case FE:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}$.Da=function(){return this.m};$.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function DO(t){let e="";return km(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function sg(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=DO(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Ie(t,e,n))}function du(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function HE(t){this.za=0,this.l=[],this.h=new eh,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=du("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=du("baseRetryDelayMs",5e3,t),this.$a=du("retryDelaySeedMs",1e4,t),this.Ya=du("forwardChannelMaxRetries",2,t),this.ra=du("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new DE(t&&t.concurrentRequestLimit),this.Ca=new kO,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||t.Xb!==!1}$=HE.prototype;$.ma=8;$.G=1;function og(t){if(WE(t),t.G==3){var e=t.V++,n=ir(t.F);Ie(n,"SID",t.J),Ie(n,"RID",e),Ie(n,"TYPE","terminate"),fu(t,n),e=new ru(t,t.h,e,void 0),e.K=2,e.v=lh(ir(n)),n=!1,G.navigator&&G.navigator.sendBeacon&&(n=G.navigator.sendBeacon(e.v.toString(),"")),!n&&G.Image&&(new Image().src=e.v,n=!0),n||(e.g=t1(e.l,null),e.g.ea(e.v)),e.F=Date.now(),iu(e)}ZE(t)}$.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch{}};function fh(t){t.g&&(lg(t),t.g.cancel(),t.g=null)}function WE(t){fh(t),t.u&&(G.clearTimeout(t.u),t.u=null),mh(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&G.clearTimeout(t.m),t.m=null)}function ag(t,e){t.l.push(new TO(t.Za++,e)),t.G==3&&ph(t)}function ph(t){OE(t.i)||t.m||(t.m=!0,Bm(t.Ha,t),t.C=0)}function OO(t,e){return LE(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.l=e.D.concat(t.l),!0):t.G==1||t.G==2||t.C>=(t.Xa?0:t.Ya)?!1:(t.m=tu(at(t.Ha,t,e),JE(t,t.C)),t.C++,!0)}$.Ha=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const i=new ru(this,this.h,t,void 0);let s=this.s;if(this.P&&(s?(s=XI(s),ZI(s,this.P)):s=this.P),this.o===null&&(i.H=s),this.ja)e:{for(var e=0,n=0;n<this.l.length;n++){t:{var r=this.l[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.l.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=KE(this,i,e),n=ir(this.F),Ie(n,"RID",t),Ie(n,"CVER",22),this.D&&Ie(n,"X-HTTP-Session-Id",this.D),fu(this,n),this.o&&s&&sg(n,this.o,s),ng(this.i,i),this.Ra&&Ie(n,"TYPE","init"),this.ja?(Ie(n,"$req",e),Ie(n,"SID","null"),i.$=!0,Xm(i,n,null)):Xm(i,n,e),this.G=2}}else this.G==3&&(t?GE(this,t):this.l.length==0||OE(this.i)||GE(this))};function GE(t,e){var n;e?n=e.m:n=t.V++;const r=ir(t.F);Ie(r,"SID",t.J),Ie(r,"RID",n),Ie(r,"AID",t.U),fu(t,r),t.o&&t.s&&sg(r,t.o,t.s),n=new ru(t,t.h,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=KE(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),ng(t.i,n),Xm(n,r,e)}function fu(t,e){t.j&&Zm({},function(n,r){Ie(e,r,n)})}function KE(t,e,n){n=Math.min(t.l.length,n);var r=t.j?at(t.j.Oa,t.j,t):null;e:{var i=t.l;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let u=0;u<n;u++){let l=i[u].h;const c=i[u].g;if(l-=s,0>l)s=Math.max(0,i[u].h-100),a=!1;else try{CO(c,o,"req"+l+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.l.splice(0,n),e.D=t,r}function QE(t){t.g||t.u||(t.Y=1,Bm(t.Ga,t),t.A=0)}function ug(t){return t.g||t.u||3<=t.A?!1:(t.Y++,t.u=tu(at(t.Ga,t),JE(t,t.A)),t.A++,!0)}$.Ga=function(){if(this.u=null,YE(this),this.$&&!(this.L||this.g==null||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=tu(at(this.bb,this),t)}};$.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,Pt(10),fh(this),YE(this))};function lg(t){t.B!=null&&(G.clearTimeout(t.B),t.B=null)}function YE(t){t.g=new ru(t,t.h,"rpc",t.Y),t.o===null&&(t.g.H=t.s),t.g.O=0;var e=ir(t.oa);Ie(e,"RID","rpc"),Ie(e,"SID",t.J),Ie(e,"CI",t.N?"0":"1"),Ie(e,"AID",t.U),fu(t,e),Ie(e,"TYPE","xmlhttp"),t.o&&t.s&&sg(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=lh(ir(e)),n.s=null,n.U=!0,TE(n,t)}$.ab=function(){this.v!=null&&(this.v=null,fh(this),ug(this),Pt(19))};function mh(t){t.v!=null&&(G.clearTimeout(t.v),t.v=null)}function XE(t,e){var n=null;if(t.g==e){mh(t),lg(t),t.g=null;var r=2}else if(tg(t.i,e))n=e.D,ME(t.i,e),r=1;else return;if(t.I=e.N,t.G!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;r=th(),lt(r,new vE(r,n,e,i)),ph(t)}else QE(t);else if(i=e.o,i==3||i==0&&0<t.I||!(r==1&&OO(t,e)||r==2&&ug(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:Mi(t,5);break;case 4:Mi(t,10);break;case 3:Mi(t,6);break;default:Mi(t,2)}}}function JE(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function Mi(t,e){if(t.h.info("Error code "+e),e==2){var n=null;t.j&&(n=null);var r=at(t.jb,t);n||(n=new Li("//www.google.com/images/cleardot.gif"),G.location&&G.location.protocol=="http"||oh(n,"https"),lh(n)),bO(n.toString(),r)}else Pt(2);t.G=0,t.j&&t.j.va(e),ZE(t),WE(t)}$.jb=function(t){t?(this.h.info("Successfully pinged google.com"),Pt(2)):(this.h.info("Failed to ping google.com"),Pt(1))};function ZE(t){t.G=0,t.I=-1,t.j&&(($E(t.i).length!=0||t.l.length!=0)&&(t.i.i.length=0,Tm(t.l),t.l.length=0),t.j.ua())}function e1(t,e,n){let r=mO(n);if(r.i!="")e&&ah(r,e+"."+r.i),uh(r,r.m);else{const i=G.location;r=gO(i.protocol,e?e+"."+i.hostname:i.hostname,+i.port,n)}return t.aa&&km(t.aa,function(i,s){Ie(r,s,i)}),e=t.D,n=t.sa,e&&n&&Ie(r,e,n),Ie(r,"VER",t.ma),fu(t,r),r}function t1(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new xe(new lu({ib:!0})):new xe(t.qa),e.L=t.H,e}function n1(){}$=n1.prototype;$.xa=function(){};$.wa=function(){};$.va=function(){};$.ua=function(){};$.Oa=function(){};function gh(){if(Gs&&!(10<=Number(GD)))throw Error("Environmental error: no available transport.")}gh.prototype.g=function(t,e){return new Jt(t,e)};function Jt(t,e){We.call(this),this.g=new HE(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!Kc(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Kc(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Xs(this)}ut(Jt,We);Jt.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),Bm(at(t.hb,t,e))),Pt(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=e1(t,null,t.W),ph(t)};Jt.prototype.close=function(){og(this.g)};Jt.prototype.u=function(t){if(typeof t=="string"){var e={};e.__data__=t,ag(this.g,e)}else this.v?(e={},e.__data__=Vm(t),ag(this.g,e)):ag(this.g,t)};Jt.prototype.M=function(){this.g.j=null,delete this.j,og(this.g),delete this.g,Jt.Z.M.call(this)};function r1(t){Gm.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}ut(r1,Gm);function i1(){Km.call(this),this.status=1}ut(i1,Km);function Xs(t){this.g=t}ut(Xs,n1);Xs.prototype.xa=function(){lt(this.g,"a")};Xs.prototype.wa=function(t){lt(this.g,new r1(t))};Xs.prototype.va=function(t){lt(this.g,new i1(t))};Xs.prototype.ua=function(){lt(this.g,"b")};gh.prototype.createWebChannel=gh.prototype.g;Jt.prototype.send=Jt.prototype.u;Jt.prototype.open=Jt.prototype.m;Jt.prototype.close=Jt.prototype.close;nh.NO_ERROR=0;nh.TIMEOUT=8;nh.HTTP_ERROR=6;wE.COMPLETE="complete";IE.EventType=nu;nu.OPEN="a";nu.CLOSE="b";nu.ERROR="c";nu.MESSAGE="d";We.prototype.listen=We.prototype.N;xe.prototype.listenOnce=xe.prototype.O;xe.prototype.getLastError=xe.prototype.La;xe.prototype.getLastErrorCode=xe.prototype.Da;xe.prototype.getStatus=xe.prototype.ba;xe.prototype.getResponseJson=xe.prototype.Qa;xe.prototype.getResponseText=xe.prototype.ga;xe.prototype.send=xe.prototype.ea;var LO=function(){return new gh},MO=function(){return th()},cg=nh,$O=wE,UO=xi,s1={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},FO=lu,yh=IE,VO=xe;const o1="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ct.UNAUTHENTICATED=new ct(null),ct.GOOGLE_CREDENTIALS=new ct("google-credentials-uid"),ct.FIRST_PARTY=new ct("first-party-uid"),ct.MOCK_USER=new ct("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Js="9.1.3";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wr=new Ec("@firebase/firestore");function hg(){return Wr.logLevel}function BO(t){Wr.setLogLevel(t)}function N(t,...e){if(Wr.logLevel<=te.DEBUG){const n=e.map(dg);Wr.debug(`Firestore (${Js}): ${t}`,...n)}}function De(t,...e){if(Wr.logLevel<=te.ERROR){const n=e.map(dg);Wr.error(`Firestore (${Js}): ${t}`,...n)}}function pu(t,...e){if(Wr.logLevel<=te.WARN){const n=e.map(dg);Wr.warn(`Firestore (${Js}): ${t}`,...n)}}function dg(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function q(t="Unexpected state"){const e=`FIRESTORE (${Js}) INTERNAL ASSERTION FAILED: `+t;throw De(e),new Error(e)}function H(t,e){t||q()}function jO(t,e){t||q()}function L(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class C extends Error{constructor(e,n){super(n),this.code=e,this.message=n,this.name="FirebaseError",this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a1{constructor(e,n){this.user=n,this.type="OAuth",this.authHeaders={},this.authHeaders.Authorization=`Bearer ${e}`}}class zO{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ct.UNAUTHENTICATED))}shutdown(){}}class qO{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class HO{constructor(e){this.t=e,this.currentUser=ct.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new Ge;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Ge,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},a=u=>{N("FirebaseCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(N("FirebaseCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Ge)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(N("FirebaseCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(H(typeof r.accessToken=="string"),new a1(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return H(e===null||typeof e=="string"),new ct(e)}}class WO{constructor(e,n,r){this.h=e,this.l=n,this.m=r,this.type="FirstParty",this.user=ct.FIRST_PARTY}get authHeaders(){const e={"X-Goog-AuthUser":this.l},n=this.h.auth.getAuthHeaderValueForFirstParty([]);return n&&(e.Authorization=n),this.m&&(e["X-Goog-Iam-Authorization-Token"]=this.m),e}}class GO{constructor(e,n,r){this.h=e,this.l=n,this.m=r}getToken(){return Promise.resolve(new WO(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(ct.FIRST_PARTY))}shutdown(){}invalidateToken(){}}/**
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
 */class Zt{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.g(r),this.p=r=>n.writeSequenceNumber(r))}g(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.p&&this.p(e),e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KO(t){const e=typeof self!="undefined"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Zt.T=-1;class u1{static I(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=KO(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function J(t,e){return t<e?-1:t>e?1:0}function Zs(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}function l1(t){return t+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new C(E.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new C(E.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new C(E.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new C(E.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ke.fromMillis(Date.now())}static fromDate(e){return Ke.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Ke(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?J(this.nanoseconds,e.nanoseconds):J(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Q(e)}static min(){return new Q(new Ke(0,0))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c1(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function $i(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function h1(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mu{constructor(e,n,r){n===void 0?n=0:n>e.length&&q(),r===void 0?r=e.length-n:r>e.length-n&&q(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return mu.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof mu?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ie extends mu{construct(e,n,r){return new ie(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new C(E.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new ie(n)}static emptyPath(){return new ie([])}}const QO=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ht extends mu{construct(e,n,r){return new ht(e,n,r)}static isValidIdentifier(e){return QO.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ht.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ht(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new C(E.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new C(E.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new C(E.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new C(E.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ht(n)}static emptyPath(){return new ht([])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eo{constructor(e){this.fields=e,e.sort(ht.comparator)}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Zs(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YO(){return typeof atob!="undefined"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new Qe(n)}static fromUint8Array(e){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new Qe(n)}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return J(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Qe.EMPTY_BYTE_STRING=new Qe("");const XO=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Gr(t){if(H(!!t),typeof t=="string"){let e=0;const n=XO.exec(t);if(H(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Oe(t.seconds),nanos:Oe(t.nanos)}}function Oe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function to(t){return typeof t=="string"?Qe.fromBase64String(t):Qe.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fg(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function d1(t){const e=t.mapValue.fields.__previous_value__;return fg(e)?d1(e):e}function gu(t){const e=Gr(t.mapValue.fields.__local_write_time__.timestampValue);return new Ke(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ui(t){return t==null}function vh(t){return t===0&&1/t==-1/0}function f1(t){return typeof t=="number"&&Number.isInteger(t)&&!vh(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function Fi(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?fg(t)?4:10:q()}function Un(t,e){const n=Fi(t);if(n!==Fi(e))return!1;switch(n){case 0:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return gu(t).isEqual(gu(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=Gr(r.timestampValue),o=Gr(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return to(r.bytesValue).isEqual(to(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return Oe(r.geoPointValue.latitude)===Oe(i.geoPointValue.latitude)&&Oe(r.geoPointValue.longitude)===Oe(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return Oe(r.integerValue)===Oe(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=Oe(r.doubleValue),o=Oe(i.doubleValue);return s===o?vh(s)===vh(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return Zs(t.arrayValue.values||[],e.arrayValue.values||[],Un);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(c1(s)!==c1(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!Un(s[a],o[a])))return!1;return!0}(t,e);default:return q()}}function yu(t,e){return(t.values||[]).find(n=>Un(n,e))!==void 0}function no(t,e){const n=Fi(t),r=Fi(e);if(n!==r)return J(n,r);switch(n){case 0:return 0;case 1:return J(t.booleanValue,e.booleanValue);case 2:return function(i,s){const o=Oe(i.integerValue||i.doubleValue),a=Oe(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return p1(t.timestampValue,e.timestampValue);case 4:return p1(gu(t),gu(e));case 5:return J(t.stringValue,e.stringValue);case 6:return function(i,s){const o=to(i),a=to(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let u=0;u<o.length&&u<a.length;u++){const l=J(o[u],a[u]);if(l!==0)return l}return J(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,s){const o=J(Oe(i.latitude),Oe(s.latitude));return o!==0?o:J(Oe(i.longitude),Oe(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let u=0;u<o.length&&u<a.length;++u){const l=no(o[u],a[u]);if(l)return l}return J(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,s){const o=i.fields||{},a=Object.keys(o),u=s.fields||{},l=Object.keys(u);a.sort(),l.sort();for(let c=0;c<a.length&&c<l.length;++c){const h=J(a[c],l[c]);if(h!==0)return h;const d=no(o[a[c]],u[l[c]]);if(d!==0)return d}return J(a.length,l.length)}(t.mapValue,e.mapValue);default:throw q()}}function p1(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return J(t,e);const n=Gr(t),r=Gr(e),i=J(n.seconds,r.seconds);return i!==0?i:J(n.nanos,r.nanos)}function pg(t){return mg(t)}function mg(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const i=Gr(r);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?to(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,j.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=mg(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${mg(r.fields[a])}`;return s+"}"}(t.mapValue):q();var e,n}function wh(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function gg(t){return!!t&&"integerValue"in t}function yg(t){return!!t&&"arrayValue"in t}function m1(t){return!!t&&"nullValue"in t}function g1(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function _h(t){return!!t&&"mapValue"in t}function vu(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return $i(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=vu(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=vu(t.arrayValue.values[n]);return e}return Object.assign({},t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(e){this.value=e}static empty(){return new It({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!_h(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=vu(n)}setAll(e){let n=ht.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=vu(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());_h(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Un(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];_h(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){$i(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new It(vu(this.value))}}function y1(t){const e=[];return $i(t.fields,(n,r)=>{const i=new ht([n]);if(_h(r)){const s=y1(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new eo(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(e,n,r,i,s){this.key=e,this.documentType=n,this.version=r,this.data=i,this.documentState=s}static newInvalidDocument(e){return new Ee(e,0,Q.min(),It.empty(),0)}static newFoundDocument(e,n,r){return new Ee(e,1,n,r,0)}static newNoDocument(e,n){return new Ee(e,2,n,It.empty(),0)}static newUnknownDocument(e,n){return new Ee(e,3,n,It.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=It.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=It.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ee&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}clone(){return new Ee(this.key,this.documentType,this.version,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class JO{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.A=null}}function v1(t,e=null,n=[],r=[],i=null,s=null,o=null){return new JO(t,e,n,r,i,s,o)}function wu(t){const e=L(t);if(e.A===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>eL(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Ui(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=Th(e.startAt)),e.endAt&&(n+="|ub:",n+=Th(e.endAt)),e.A=n}return e.A}function ZO(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(r=n).field.canonicalString()} ${r.op} ${pg(r.value)}`;var r}).join(", ")}]`),Ui(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: "+Th(t.startAt)),t.endAt&&(e+=", endAt: "+Th(t.endAt)),`Target(${e})`}function Ih(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let i=0;i<t.orderBy.length;i++)if(!uL(t.orderBy[i],e.orderBy[i]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let i=0;i<t.filters.length;i++)if(n=t.filters[i],r=e.filters[i],n.op!==r.op||!n.field.isEqual(r.field)||!Un(n.value,r.value))return!1;var n,r;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!I1(t.startAt,e.startAt)&&I1(t.endAt,e.endAt)}function Eh(t){return j.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class xt extends class{}{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.R(e,n,r):new tL(e,n,r):n==="array-contains"?new iL(e,r):n==="in"?new sL(e,r):n==="not-in"?new oL(e,r):n==="array-contains-any"?new aL(e,r):new xt(e,n,r)}static R(e,n,r){return n==="in"?new nL(e,r):new rL(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.P(no(n,this.value)):n!==null&&Fi(this.value)===Fi(n)&&this.P(no(n,this.value))}P(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return q()}}v(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}function eL(t){return t.field.canonicalString()+t.op.toString()+pg(t.value)}class tL extends xt{constructor(e,n,r){super(e,n,r),this.key=j.fromName(r.referenceValue)}matches(e){const n=j.comparator(e.key,this.key);return this.P(n)}}class nL extends xt{constructor(e,n){super(e,"in",n),this.keys=w1("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class rL extends xt{constructor(e,n){super(e,"not-in",n),this.keys=w1("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function w1(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>j.fromName(r.referenceValue))}class iL extends xt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return yg(n)&&yu(n.arrayValue,this.value)}}class sL extends xt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&yu(this.value.arrayValue,n)}}class oL extends xt{constructor(e,n){super(e,"not-in",n)}matches(e){if(yu(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!yu(this.value.arrayValue,n)}}class aL extends xt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!yg(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>yu(this.value.arrayValue,r))}}class _u{constructor(e,n){this.position=e,this.before=n}}function Th(t){return`${t.before?"b":"a"}:${t.position.map(e=>pg(e)).join(",")}`}class ro{constructor(e,n="asc"){this.field=e,this.dir=n}}function uL(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function _1(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=j.comparator(j.fromName(o.referenceValue),n.key):r=no(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return t.before?r<=0:r<0}function I1(t,e){if(t===null)return e===null;if(e===null||t.before!==e.before||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Un(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=u,this.V=null,this.S=null,this.startAt,this.endAt}}function E1(t,e,n,r,i,s,o,a){return new or(t,e,n,r,i,s,o,a)}function io(t){return new or(t)}function Sh(t){return!Ui(t.limit)&&t.limitType==="F"}function kh(t){return!Ui(t.limit)&&t.limitType==="L"}function vg(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function wg(t){for(const e of t.filters)if(e.v())return e.field;return null}function _g(t){return t.collectionGroup!==null}function so(t){const e=L(t);if(e.V===null){e.V=[];const n=wg(e),r=vg(e);if(n!==null&&r===null)n.isKeyField()||e.V.push(new ro(n)),e.V.push(new ro(ht.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.V.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.V.push(new ro(ht.keyField(),s))}}}return e.V}function hn(t){const e=L(t);if(!e.S)if(e.limitType==="F")e.S=v1(e.path,e.collectionGroup,so(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of so(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new ro(s.field,o))}const r=e.endAt?new _u(e.endAt.position,!e.endAt.before):null,i=e.startAt?new _u(e.startAt.position,!e.startAt.before):null;e.S=v1(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e.S}function T1(t,e,n){return new or(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Iu(t,e){return Ih(hn(t),hn(e))&&t.limitType===e.limitType}function S1(t){return`${wu(hn(t))}|lt:${t.limitType}`}function Ig(t){return`Query(target=${ZO(hn(t))}; limitType=${t.limitType})`}function Eu(t,e){return e.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):j.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,r){for(const i of n.explicitOrderBy)if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!_1(n.startAt,so(n),r)||n.endAt&&_1(n.endAt,so(n),r))}(t,e)}function k1(t){return(e,n)=>{let r=!1;for(const i of so(t)){const s=lL(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function lL(t,e,n){const r=t.field.isKeyField()?j.comparator(e.key,n.key):function(i,s,o){const a=s.data.field(i),u=o.data.field(i);return a!==null&&u!==null?no(a,u):q()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return q()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C1(t,e){if(t.D){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:vh(e)?"-0":e}}function b1(t){return{integerValue:""+t}}function A1(t,e){return f1(e)?b1(e):C1(t,e)}/**
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
 */class Ch{constructor(){this._=void 0}}function cL(t,e,n){return t instanceof oo?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&(s.fields.__previous_value__=i),{mapValue:s}}(n,e):t instanceof Vi?N1(t,e):t instanceof Bi?P1(t,e):function(r,i){const s=R1(r,i),o=x1(s)+x1(r.C);return gg(s)&&gg(r.C)?b1(o):C1(r.N,o)}(t,e)}function hL(t,e,n){return t instanceof Vi?N1(t,e):t instanceof Bi?P1(t,e):n}function R1(t,e){return t instanceof ao?gg(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class oo extends Ch{}class Vi extends Ch{constructor(e){super(),this.elements=e}}function N1(t,e){const n=D1(e);for(const r of t.elements)n.some(i=>Un(i,r))||n.push(r);return{arrayValue:{values:n}}}class Bi extends Ch{constructor(e){super(),this.elements=e}}function P1(t,e){let n=D1(e);for(const r of t.elements)n=n.filter(i=>!Un(i,r));return{arrayValue:{values:n}}}class ao extends Ch{constructor(e,n){super(),this.N=e,this.C=n}}function x1(t){return Oe(t.integerValue||t.doubleValue)}function D1(t){return yg(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tu{constructor(e,n){this.field=e,this.transform=n}}function dL(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof Vi&&r instanceof Vi||n instanceof Bi&&r instanceof Bi?Zs(n.elements,r.elements,Un):n instanceof ao&&r instanceof ao?Un(n.C,r.C):n instanceof oo&&r instanceof oo}(t.transform,e.transform)}class fL{constructor(e,n){this.version=e,this.transformResults=n}}class Le{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Le}static exists(e){return new Le(void 0,e)}static updateTime(e){return new Le(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function bh(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Ah{}function pL(t,e,n){t instanceof Su?function(r,i,s){const o=r.value.clone(),a=$1(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Kr?function(r,i,s){if(!bh(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=$1(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(M1(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function Eg(t,e,n){t instanceof Su?function(r,i,s){if(!bh(r.precondition,i))return;const o=r.value.clone(),a=U1(r.fieldTransforms,s,i);o.setAll(a),i.convertToFoundDocument(L1(i),o).setHasLocalMutations()}(t,e,n):t instanceof Kr?function(r,i,s){if(!bh(r.precondition,i))return;const o=U1(r.fieldTransforms,s,i),a=i.data;a.setAll(M1(r)),a.setAll(o),i.convertToFoundDocument(L1(i),a).setHasLocalMutations()}(t,e,n):function(r,i){bh(r.precondition,i)&&i.convertToNoDocument(Q.min())}(t,e)}function mL(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=R1(r.transform,i||null);s!=null&&(n==null&&(n=It.empty()),n.set(r.field,s))}return n||null}function O1(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&Zs(n,r,(i,s)=>dL(i,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}function L1(t){return t.isFoundDocument()?t.version:Q.min()}class Su extends Ah{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}}class Kr extends Ah{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}}function M1(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function $1(t,e,n){const r=new Map;H(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,hL(o,a,n[i]))}return r}function U1(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,cL(s,o,e))}return r}class ku extends Ah{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}}class Tg extends Ah{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gL{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Me,Z;function F1(t){switch(t){default:return q();case E.CANCELLED:case E.UNKNOWN:case E.DEADLINE_EXCEEDED:case E.RESOURCE_EXHAUSTED:case E.INTERNAL:case E.UNAVAILABLE:case E.UNAUTHENTICATED:return!1;case E.INVALID_ARGUMENT:case E.NOT_FOUND:case E.ALREADY_EXISTS:case E.PERMISSION_DENIED:case E.FAILED_PRECONDITION:case E.ABORTED:case E.OUT_OF_RANGE:case E.UNIMPLEMENTED:case E.DATA_LOSS:return!0}}function V1(t){if(t===void 0)return De("GRPC error has no .code"),E.UNKNOWN;switch(t){case Me.OK:return E.OK;case Me.CANCELLED:return E.CANCELLED;case Me.UNKNOWN:return E.UNKNOWN;case Me.DEADLINE_EXCEEDED:return E.DEADLINE_EXCEEDED;case Me.RESOURCE_EXHAUSTED:return E.RESOURCE_EXHAUSTED;case Me.INTERNAL:return E.INTERNAL;case Me.UNAVAILABLE:return E.UNAVAILABLE;case Me.UNAUTHENTICATED:return E.UNAUTHENTICATED;case Me.INVALID_ARGUMENT:return E.INVALID_ARGUMENT;case Me.NOT_FOUND:return E.NOT_FOUND;case Me.ALREADY_EXISTS:return E.ALREADY_EXISTS;case Me.PERMISSION_DENIED:return E.PERMISSION_DENIED;case Me.FAILED_PRECONDITION:return E.FAILED_PRECONDITION;case Me.ABORTED:return E.ABORTED;case Me.OUT_OF_RANGE:return E.OUT_OF_RANGE;case Me.UNIMPLEMENTED:return E.UNIMPLEMENTED;case Me.DATA_LOSS:return E.DATA_LOSS;default:return q()}}(Z=Me||(Me={}))[Z.OK=0]="OK",Z[Z.CANCELLED=1]="CANCELLED",Z[Z.UNKNOWN=2]="UNKNOWN",Z[Z.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Z[Z.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Z[Z.NOT_FOUND=5]="NOT_FOUND",Z[Z.ALREADY_EXISTS=6]="ALREADY_EXISTS",Z[Z.PERMISSION_DENIED=7]="PERMISSION_DENIED",Z[Z.UNAUTHENTICATED=16]="UNAUTHENTICATED",Z[Z.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Z[Z.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Z[Z.ABORTED=10]="ABORTED",Z[Z.OUT_OF_RANGE=11]="OUT_OF_RANGE",Z[Z.UNIMPLEMENTED=12]="UNIMPLEMENTED",Z[Z.INTERNAL=13]="INTERNAL",Z[Z.UNAVAILABLE=14]="UNAVAILABLE",Z[Z.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve{constructor(e,n){this.comparator=e,this.root=n||dt.EMPTY}insert(e,n){return new Ve(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,dt.BLACK,null,null))}remove(e){return new Ve(this.comparator,this.root.remove(e,this.comparator).copy(null,null,dt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Rh(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Rh(this.root,e,this.comparator,!1)}getReverseIterator(){return new Rh(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Rh(this.root,e,this.comparator,!0)}}class Rh{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class dt{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r!=null?r:dt.RED,this.left=i!=null?i:dt.EMPTY,this.right=s!=null?s:dt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new dt(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,i!=null?i:this.left,s!=null?s:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return dt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return dt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,dt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,dt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw q();const e=this.left.check();if(e!==this.right.check())throw q();return e+(this.isRed()?0:1)}}dt.EMPTY=null,dt.RED=!0,dt.BLACK=!1;dt.EMPTY=new class{constructor(){this.size=0}get key(){throw q()}get value(){throw q()}get color(){throw q()}get left(){throw q()}get right(){throw q()}copy(t,e,n,r,i){return this}insert(t,e,n){return new dt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce{constructor(e){this.comparator=e,this.data=new Ve(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new B1(this.data.getIterator())}getIteratorFrom(e){return new B1(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Ce)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ce(this.comparator);return n.data=e,n}}class B1{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yL=new Ve(j.comparator);function dn(){return yL}const vL=new Ve(j.comparator);function Sg(){return vL}const wL=new Ve(j.comparator);function j1(){return wL}const _L=new Ce(j.comparator);function ce(...t){let e=_L;for(const n of t)e=e.add(n);return e}const IL=new Ce(J);function Nh(){return IL}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cu{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n){const r=new Map;return r.set(e,bu.createSynthesizedTargetChangeForCurrentChange(e,n)),new Cu(Q.min(),r,Nh(),dn(),ce())}}class bu{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n){return new bu(Qe.EMPTY_BYTE_STRING,n,ce(),ce(),ce())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ph{constructor(e,n,r,i){this.k=e,this.removedTargetIds=n,this.key=r,this.$=i}}class z1{constructor(e,n){this.targetId=e,this.O=n}}class q1{constructor(e,n,r=Qe.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class H1{constructor(){this.F=0,this.M=G1(),this.L=Qe.EMPTY_BYTE_STRING,this.B=!1,this.U=!0}get current(){return this.B}get resumeToken(){return this.L}get q(){return this.F!==0}get K(){return this.U}j(e){e.approximateByteSize()>0&&(this.U=!0,this.L=e)}W(){let e=ce(),n=ce(),r=ce();return this.M.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:q()}}),new bu(this.L,this.B,e,n,r)}G(){this.U=!1,this.M=G1()}H(e,n){this.U=!0,this.M=this.M.insert(e,n)}J(e){this.U=!0,this.M=this.M.remove(e)}Y(){this.F+=1}X(){this.F-=1}Z(){this.U=!0,this.B=!0}}class EL{constructor(e){this.tt=e,this.et=new Map,this.nt=dn(),this.st=W1(),this.it=new Ce(J)}rt(e){for(const n of e.k)e.$&&e.$.isFoundDocument()?this.ot(n,e.$):this.at(n,e.key,e.$);for(const n of e.removedTargetIds)this.at(n,e.key,e.$)}ct(e){this.forEachTarget(e,n=>{const r=this.ut(n);switch(e.state){case 0:this.ht(n)&&r.j(e.resumeToken);break;case 1:r.X(),r.q||r.G(),r.j(e.resumeToken);break;case 2:r.X(),r.q||this.removeTarget(n);break;case 3:this.ht(n)&&(r.Z(),r.j(e.resumeToken));break;case 4:this.ht(n)&&(this.lt(n),r.j(e.resumeToken));break;default:q()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.et.forEach((r,i)=>{this.ht(i)&&n(i)})}ft(e){const n=e.targetId,r=e.O.count,i=this.dt(n);if(i){const s=i.target;if(Eh(s))if(r===0){const o=new j(s.path);this.at(n,o,Ee.newNoDocument(o,Q.min()))}else H(r===1);else this.wt(n)!==r&&(this.lt(n),this.it=this.it.add(n))}}_t(e){const n=new Map;this.et.forEach((s,o)=>{const a=this.dt(o);if(a){if(s.current&&Eh(a.target)){const u=new j(a.target.path);this.nt.get(u)!==null||this.gt(o,u)||this.at(o,u,Ee.newNoDocument(u,e))}s.K&&(n.set(o,s.W()),s.G())}});let r=ce();this.st.forEach((s,o)=>{let a=!0;o.forEachWhile(u=>{const l=this.dt(u);return!l||l.purpose===2||(a=!1,!1)}),a&&(r=r.add(s))});const i=new Cu(e,n,this.it,this.nt,r);return this.nt=dn(),this.st=W1(),this.it=new Ce(J),i}ot(e,n){if(!this.ht(e))return;const r=this.gt(e,n.key)?2:0;this.ut(e).H(n.key,r),this.nt=this.nt.insert(n.key,n),this.st=this.st.insert(n.key,this.yt(n.key).add(e))}at(e,n,r){if(!this.ht(e))return;const i=this.ut(e);this.gt(e,n)?i.H(n,1):i.J(n),this.st=this.st.insert(n,this.yt(n).delete(e)),r&&(this.nt=this.nt.insert(n,r))}removeTarget(e){this.et.delete(e)}wt(e){const n=this.ut(e).W();return this.tt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Y(e){this.ut(e).Y()}ut(e){let n=this.et.get(e);return n||(n=new H1,this.et.set(e,n)),n}yt(e){let n=this.st.get(e);return n||(n=new Ce(J),this.st=this.st.insert(e,n)),n}ht(e){const n=this.dt(e)!==null;return n||N("WatchChangeAggregator","Detected inactive target",e),n}dt(e){const n=this.et.get(e);return n&&n.q?null:this.tt.Tt(e)}lt(e){this.et.set(e,new H1),this.tt.getRemoteKeysForTarget(e).forEach(n=>{this.at(e,n,null)})}gt(e,n){return this.tt.getRemoteKeysForTarget(e).has(n)}}function W1(){return new Ve(j.comparator)}function G1(){return new Ve(j.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TL=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),SL=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class kL{constructor(e,n){this.databaseId=e,this.D=n}}function Au(t,e){return t.D?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function K1(t,e){return t.D?e.toBase64():e.toUint8Array()}function CL(t,e){return Au(t,e.toTimestamp())}function Ye(t){return H(!!t),Q.fromTimestamp(function(e){const n=Gr(e);return new Ke(n.seconds,n.nanos)}(t))}function kg(t,e){return function(n){return new ie(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function Q1(t){const e=ie.fromString(t);return H(aT(e)),e}function Ru(t,e){return kg(t.databaseId,e.path)}function Fn(t,e){const n=Q1(e);if(n.get(1)!==t.databaseId.projectId)throw new C(E.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new C(E.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new j(X1(n))}function Cg(t,e){return kg(t.databaseId,e)}function Y1(t){const e=Q1(t);return e.length===4?ie.emptyPath():X1(e)}function Nu(t){return new ie(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function X1(t){return H(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function J1(t,e,n){return{name:Ru(t,e),fields:n.value.mapValue.fields}}function Z1(t,e,n){const r=Fn(t,e.name),i=Ye(e.updateTime),s=new It({mapValue:{fields:e.fields}}),o=Ee.newFoundDocument(r,i,s);return n&&o.setHasCommittedMutations(),n?o.setHasCommittedMutations():o}function bL(t,e){return"found"in e?function(n,r){H(!!r.found),r.found.name,r.found.updateTime;const i=Fn(n,r.found.name),s=Ye(r.found.updateTime),o=new It({mapValue:{fields:r.found.fields}});return Ee.newFoundDocument(i,s,o)}(t,e):"missing"in e?function(n,r){H(!!r.missing),H(!!r.readTime);const i=Fn(n,r.missing),s=Ye(r.readTime);return Ee.newNoDocument(i,s)}(t,e):q()}function AL(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:q()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(u,l){return u.D?(H(l===void 0||typeof l=="string"),Qe.fromBase64String(l||"")):(H(l===void 0||l instanceof Uint8Array),Qe.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const l=u.code===void 0?E.UNKNOWN:V1(u.code);return new C(l,u.message||"")}(o);n=new q1(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Fn(t,r.document.name),s=Ye(r.document.updateTime),o=new It({mapValue:{fields:r.document.fields}}),a=Ee.newFoundDocument(i,s,o),u=r.targetIds||[],l=r.removedTargetIds||[];n=new Ph(u,l,a.key,a)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Fn(t,r.document),s=r.readTime?Ye(r.readTime):Q.min(),o=Ee.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Ph([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Fn(t,r.document),s=r.removedTargetIds||[];n=new Ph([],s,i,null)}else{if(!("filter"in e))return q();{e.filter;const r=e.filter;r.targetId;const i=r.count||0,s=new gL(i),o=r.targetId;n=new z1(o,s)}}return n}function xh(t,e){let n;if(e instanceof Su)n={update:J1(t,e.key,e.value)};else if(e instanceof ku)n={delete:Ru(t,e.key)};else if(e instanceof Kr)n={update:J1(t,e.key,e.data),updateMask:LL(e.fieldMask)};else{if(!(e instanceof Tg))return q();n={verify:Ru(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,s){const o=s.transform;if(o instanceof oo)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Vi)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Bi)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof ao)return{fieldPath:s.field.canonicalString(),increment:o.C};throw q()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:CL(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:q()}(t,e.precondition)),n}function eT(t,e){const n=e.currentDocument?function(i){return i.updateTime!==void 0?Le.updateTime(Ye(i.updateTime)):i.exists!==void 0?Le.exists(i.exists):Le.none()}(e.currentDocument):Le.none(),r=e.updateTransforms?e.updateTransforms.map(i=>function(s,o){let a=null;if("setToServerValue"in o)H(o.setToServerValue==="REQUEST_TIME"),a=new oo;else if("appendMissingElements"in o){const l=o.appendMissingElements.values||[];a=new Vi(l)}else if("removeAllFromArray"in o){const l=o.removeAllFromArray.values||[];a=new Bi(l)}else"increment"in o?a=new ao(s,o.increment):q();const u=ht.fromServerFormat(o.fieldPath);return new Tu(u,a)}(t,i)):[];if(e.update){e.update.name;const i=Fn(t,e.update.name),s=new It({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(a){const u=a.fieldPaths||[];return new eo(u.map(l=>ht.fromServerFormat(l)))}(e.updateMask);return new Kr(i,s,o,n,r)}return new Su(i,s,n,r)}if(e.delete){const i=Fn(t,e.delete);return new ku(i,n)}if(e.verify){const i=Fn(t,e.verify);return new Tg(i,n)}return q()}function RL(t,e){return t&&t.length>0?(H(e!==void 0),t.map(n=>function(r,i){let s=r.updateTime?Ye(r.updateTime):Ye(i);return s.isEqual(Q.min())&&(s=Ye(i)),new fL(s,r.transformResults||[])}(n,e))):[]}function tT(t,e){return{documents:[Cg(t,e.path)]}}function nT(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Cg(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Cg(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(a){if(a.length===0)return;const u=a.map(l=>function(c){if(c.op==="=="){if(g1(c.value))return{unaryFilter:{field:uo(c.field),op:"IS_NAN"}};if(m1(c.value))return{unaryFilter:{field:uo(c.field),op:"IS_NULL"}}}else if(c.op==="!="){if(g1(c.value))return{unaryFilter:{field:uo(c.field),op:"IS_NOT_NAN"}};if(m1(c.value))return{unaryFilter:{field:uo(c.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:uo(c.field),op:xL(c.op),value:c.value}}}(l));return u.length===1?u[0]:{compositeFilter:{op:"AND",filters:u}}}(e.filters);i&&(n.structuredQuery.where=i);const s=function(a){if(a.length!==0)return a.map(u=>function(l){return{field:uo(l.field),direction:PL(l.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(a,u){return a.D||Ui(u)?u:{value:u}}(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=sT(e.startAt)),e.endAt&&(n.structuredQuery.endAt=sT(e.endAt)),n}function rT(t){let e=Y1(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){H(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=iT(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(c=>function(h){return new ro(lo(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(c)));let a=null;n.limit&&(a=function(c){let h;return h=typeof c=="object"?c.value:c,Ui(h)?null:h}(n.limit));let u=null;n.startAt&&(u=oT(n.startAt));let l=null;return n.endAt&&(l=oT(n.endAt)),E1(e,i,o,s,a,"F",u,l)}function NL(t,e){const n=function(r,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return q()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function iT(t){return t?t.unaryFilter!==void 0?[OL(t)]:t.fieldFilter!==void 0?[DL(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>iT(e)).reduce((e,n)=>e.concat(n)):q():[]}function sT(t){return{before:t.before,values:t.position}}function oT(t){const e=!!t.before,n=t.values||[];return new _u(n,e)}function PL(t){return TL[t]}function xL(t){return SL[t]}function uo(t){return{fieldPath:t.canonicalString()}}function lo(t){return ht.fromServerFormat(t.fieldPath)}function DL(t){return xt.create(lo(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return q()}}(t.fieldFilter.op),t.fieldFilter.value)}function OL(t){switch(t.unaryFilter.op){case"IS_NAN":const e=lo(t.unaryFilter.field);return xt.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=lo(t.unaryFilter.field);return xt.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=lo(t.unaryFilter.field);return xt.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=lo(t.unaryFilter.field);return xt.create(i,"!=",{nullValue:"NULL_VALUE"});default:return q()}}function LL(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function aT(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tn(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=uT(e)),e=ML(t.get(n),e);return uT(e)}function ML(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case"":n+="";break;default:n+=s}}return n}function uT(t){return t+""}function ar(t){const e=t.length;if(H(e>=2),e===2)return H(t.charAt(0)===""&&t.charAt(1)===""),ie.emptyPath();const n=e-2,r=[];let i="";for(let s=0;s<e;){const o=t.indexOf("",s);switch((o<0||o>n)&&q(),t.charAt(o+1)){case"":const a=t.substring(s,o);let u;i.length===0?u=a:(i+=a,u=i,i=""),r.push(u);break;case"":i+=t.substring(s,o),i+="\0";break;case"":i+=t.substring(s,o+1);break;default:q()}s=o+2}return new ie(r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $L{constructor(e,n){this.seconds=e,this.nanoseconds=n}}class en{constructor(e,n,r){this.ownerId=e,this.allowTabSynchronization=n,this.leaseTimestampMs=r}}en.store="owner",en.key="owner";class Qr{constructor(e,n,r){this.userId=e,this.lastAcknowledgedBatchId=n,this.lastStreamToken=r}}Qr.store="mutationQueues",Qr.keyPath="userId";class ve{constructor(e,n,r,i,s){this.userId=e,this.batchId=n,this.localWriteTimeMs=r,this.baseMutations=i,this.mutations=s}}ve.store="mutations",ve.keyPath="batchId",ve.userMutationsIndex="userMutationsIndex",ve.userMutationsKeyPath=["userId","batchId"];class Et{constructor(){}static prefixForUser(e){return[e]}static prefixForPath(e,n){return[e,Tn(n)]}static key(e,n,r){return[e,Tn(n),r]}}Et.store="documentMutations",Et.PLACEHOLDER=new Et;class UL{constructor(e,n){this.path=e,this.readTime=n}}class FL{constructor(e,n){this.path=e,this.version=n}}class be{constructor(e,n,r,i,s,o){this.unknownDocument=e,this.noDocument=n,this.document=r,this.hasCommittedMutations=i,this.readTime=s,this.parentPath=o}}be.store="remoteDocuments",be.readTimeIndex="readTimeIndex",be.readTimeIndexPath="readTime",be.collectionReadTimeIndex="collectionReadTimeIndex",be.collectionReadTimeIndexPath=["parentPath","readTime"];class Vn{constructor(e){this.byteSize=e}}Vn.store="remoteDocumentGlobal",Vn.key="remoteDocumentGlobalKey";class zt{constructor(e,n,r,i,s,o,a){this.targetId=e,this.canonicalId=n,this.readTime=r,this.resumeToken=i,this.lastListenSequenceNumber=s,this.lastLimboFreeSnapshotVersion=o,this.query=a}}zt.store="targets",zt.keyPath="targetId",zt.queryTargetsIndexName="queryTargetsIndex",zt.queryTargetsKeyPath=["canonicalId","targetId"];class ft{constructor(e,n,r){this.targetId=e,this.path=n,this.sequenceNumber=r}}ft.store="targetDocuments",ft.keyPath=["targetId","path"],ft.documentTargetsIndex="documentTargetsIndex",ft.documentTargetsKeyPath=["path","targetId"];class tn{constructor(e,n,r,i){this.highestTargetId=e,this.highestListenSequenceNumber=n,this.lastRemoteSnapshotVersion=r,this.targetCount=i}}tn.key="targetGlobalKey",tn.store="targetGlobal";class ji{constructor(e,n){this.collectionId=e,this.parent=n}}ji.store="collectionParents",ji.keyPath=["collectionId","parent"];class ur{constructor(e,n,r,i){this.clientId=e,this.updateTimeMs=n,this.networkEnabled=r,this.inForeground=i}}ur.store="clientMetadata",ur.keyPath="clientId";class co{constructor(e,n,r){this.bundleId=e,this.createTime=n,this.version=r}}co.store="bundles",co.keyPath="bundleId";class ho{constructor(e,n,r){this.name=e,this.readTime=n,this.bundledQuery=r}}ho.store="namedQueries",ho.keyPath="name";const VL=[Qr.store,ve.store,Et.store,be.store,zt.store,en.store,tn.store,ft.store,ur.store,Vn.store,ji.store,co.store,ho.store],lT="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class cT{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&q(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new T((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof T?n:T.resolve(n)}catch(n){return T.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):T.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):T.reject(n)}static resolve(e){return new T((n,r)=>{n(e)})}static reject(e){return new T((n,r)=>{r(e)})}static waitFor(e){return new T((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=T.resolve(!1);for(const r of e)n=n.next(i=>i?T.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dh{constructor(e,n){this.action=e,this.transaction=n,this.aborted=!1,this.Et=new Ge,this.transaction.oncomplete=()=>{this.Et.resolve()},this.transaction.onabort=()=>{n.error?this.Et.reject(new Pu(e,n.error)):this.Et.resolve()},this.transaction.onerror=r=>{const i=bg(r.target.error);this.Et.reject(new Pu(e,i))}}static open(e,n,r,i){try{return new Dh(n,e.transaction(i,r))}catch(s){throw new Pu(n,s)}}get It(){return this.Et.promise}abort(e){e&&this.Et.reject(e),this.aborted||(N("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}store(e){const n=this.transaction.objectStore(e);return new jL(n)}}class Sn{constructor(e,n,r){this.name=e,this.version=n,this.At=r,Sn.Rt(ye())===12.2&&De("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return N("SimpleDb","Removing database:",e),qi(window.indexedDB.deleteDatabase(e)).toPromise()}static bt(){if(!_c())return!1;if(Sn.Pt())return!0;const e=ye(),n=Sn.Rt(e),r=0<n&&n<10,i=Sn.vt(e),s=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||s)}static Pt(){var e;return typeof process!="undefined"&&((e=process.env)===null||e===void 0?void 0:e.Vt)==="YES"}static St(e,n){return e.store(n)}static Rt(e){const n=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=n?n[1].split("_").slice(0,2).join("."):"-1";return Number(r)}static vt(e){const n=e.match(/Android ([\d.]+)/i),r=n?n[1].split(".").slice(0,2).join("."):"-1";return Number(r)}async Dt(e){return this.db||(N("SimpleDb","Opening database:",this.name),this.db=await new Promise((n,r)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const o=s.target.result;n(o)},i.onblocked=()=>{r(new Pu(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const o=s.target.error;o.name==="VersionError"?r(new C(E.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new C(E.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new Pu(e,o))},i.onupgradeneeded=s=>{N("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const o=s.target.result;this.At.Ct(o,i.transaction,s.oldVersion,this.version).next(()=>{N("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.Nt&&(this.db.onversionchange=n=>this.Nt(n)),this.db}xt(e){this.Nt=e,this.db&&(this.db.onversionchange=n=>e(n))}async runTransaction(e,n,r,i){const s=n==="readonly";let o=0;for(;;){++o;try{this.db=await this.Dt(e);const a=Dh.open(this.db,e,s?"readonly":"readwrite",r),u=i(a).catch(l=>(a.abort(l),T.reject(l))).toPromise();return u.catch(()=>{}),await a.It,u}catch(a){const u=a.name!=="FirebaseError"&&o<3;if(N("SimpleDb","Transaction failed with error:",a.message,"Retrying:",u),this.close(),!u)return Promise.reject(a)}}}close(){this.db&&this.db.close(),this.db=void 0}}class BL{constructor(e){this.kt=e,this.$t=!1,this.Ot=null}get isDone(){return this.$t}get Ft(){return this.Ot}set cursor(e){this.kt=e}done(){this.$t=!0}Mt(e){this.Ot=e}delete(){return qi(this.kt.delete())}}class Pu extends C{constructor(e,n){super(E.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${n}`),this.name="IndexedDbTransactionError"}}function zi(t){return t.name==="IndexedDbTransactionError"}class jL{constructor(e){this.store=e}put(e,n){let r;return n!==void 0?(N("SimpleDb","PUT",this.store.name,e,n),r=this.store.put(n,e)):(N("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),qi(r)}add(e){return N("SimpleDb","ADD",this.store.name,e,e),qi(this.store.add(e))}get(e){return qi(this.store.get(e)).next(n=>(n===void 0&&(n=null),N("SimpleDb","GET",this.store.name,e,n),n))}delete(e){return N("SimpleDb","DELETE",this.store.name,e),qi(this.store.delete(e))}count(){return N("SimpleDb","COUNT",this.store.name),qi(this.store.count())}Lt(e,n){const r=this.cursor(this.options(e,n)),i=[];return this.Bt(r,(s,o)=>{i.push(o)}).next(()=>i)}Ut(e,n){N("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,n);r.qt=!1;const i=this.cursor(r);return this.Bt(i,(s,o,a)=>a.delete())}Kt(e,n){let r;n?r=e:(r={},n=e);const i=this.cursor(r);return this.Bt(i,n)}jt(e){const n=this.cursor({});return new T((r,i)=>{n.onerror=s=>{const o=bg(s.target.error);i(o)},n.onsuccess=s=>{const o=s.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}Bt(e,n){const r=[];return new T((i,s)=>{e.onerror=o=>{s(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void i();const u=new BL(a),l=n(a.primaryKey,a.value,u);if(l instanceof T){const c=l.catch(h=>(u.done(),T.reject(h)));r.push(c)}u.isDone?i():u.Ft===null?a.continue():a.continue(u.Ft)}}).next(()=>T.waitFor(r))}options(e,n){let r;return e!==void 0&&(typeof e=="string"?r=e:n=e),{index:r,range:n}}cursor(e){let n="next";if(e.reverse&&(n="prev"),e.index){const r=this.store.index(e.index);return e.qt?r.openKeyCursor(e.range,n):r.openCursor(e.range,n)}return this.store.openCursor(e.range,n)}}function qi(t){return new T((e,n)=>{t.onsuccess=r=>{const i=r.target.result;e(i)},t.onerror=r=>{const i=bg(r.target.error);n(i)}})}let hT=!1;function bg(t){const e=Sn.Rt(ye());if(e>=12.2&&e<13){const n="An internal error was encountered in the Indexed Database server";if(t.message.indexOf(n)>=0){const r=new C("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${n}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return hT||(hT=!0,setTimeout(()=>{throw r},0)),r}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dT extends cT{constructor(e,n){super(),this.Qt=e,this.currentSequenceNumber=n}}function qt(t,e){const n=L(t);return Sn.St(n.Qt,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ag{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&pL(s,e,r[i])}}applyToLocalView(e){for(const n of this.baseMutations)n.key.isEqual(e.key)&&Eg(n,e,this.localWriteTime);for(const n of this.mutations)n.key.isEqual(e.key)&&Eg(n,e,this.localWriteTime)}applyToLocalDocumentSet(e){this.mutations.forEach(n=>{const r=e.get(n.key),i=r;this.applyToLocalView(i),r.isValidDocument()||i.convertToNoDocument(Q.min())})}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ce())}isEqual(e){return this.batchId===e.batchId&&Zs(this.mutations,e.mutations,(n,r)=>O1(n,r))&&Zs(this.baseMutations,e.baseMutations,(n,r)=>O1(n,r))}}class Rg{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){H(e.mutations.length===r.length);let i=j1();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Rg(e,n,r,i)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr{constructor(e,n,r,i,s=Q.min(),o=Q.min(),a=Qe.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new Yr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new Yr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Yr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fT{constructor(e){this.Wt=e}}function Ng(t,e){if(e.document)return Z1(t.Wt,e.document,!!e.hasCommittedMutations);if(e.noDocument){const n=j.fromSegments(e.noDocument.path),r=po(e.noDocument.readTime),i=Ee.newNoDocument(n,r);return e.hasCommittedMutations?i.setHasCommittedMutations():i}if(e.unknownDocument){const n=j.fromSegments(e.unknownDocument.path),r=po(e.unknownDocument.version);return Ee.newUnknownDocument(n,r)}return q()}function pT(t,e,n){const r=Pg(n),i=e.key.path.popLast().toArray();if(e.isFoundDocument()){const s=function(a,u){return{name:Ru(a,u.key),fields:u.data.value.mapValue.fields,updateTime:Au(a,u.version.toTimestamp())}}(t.Wt,e),o=e.hasCommittedMutations;return new be(null,null,s,o,r,i)}if(e.isNoDocument()){const s=e.key.path.toArray(),o=fo(e.version),a=e.hasCommittedMutations;return new be(null,new UL(s,o),null,a,r,i)}if(e.isUnknownDocument()){const s=e.key.path.toArray(),o=fo(e.version);return new be(new FL(s,o),null,null,!0,r,i)}return q()}function Pg(t){const e=t.toTimestamp();return[e.seconds,e.nanoseconds]}function mT(t){const e=new Ke(t[0],t[1]);return Q.fromTimestamp(e)}function fo(t){const e=t.toTimestamp();return new $L(e.seconds,e.nanoseconds)}function po(t){const e=new Ke(t.seconds,t.nanoseconds);return Q.fromTimestamp(e)}function mo(t,e){const n=(e.baseMutations||[]).map(s=>eT(t.Wt,s));for(let s=0;s<e.mutations.length-1;++s){const o=e.mutations[s];if(s+1<e.mutations.length&&e.mutations[s+1].transform!==void 0){const a=e.mutations[s+1];o.updateTransforms=a.transform.fieldTransforms,e.mutations.splice(s+1,1),++s}}const r=e.mutations.map(s=>eT(t.Wt,s)),i=Ke.fromMillis(e.localWriteTimeMs);return new Ag(e.batchId,i,n,r)}function xu(t){const e=po(t.readTime),n=t.lastLimboFreeSnapshotVersion!==void 0?po(t.lastLimboFreeSnapshotVersion):Q.min();let r;var i;return t.query.documents!==void 0?(H((i=t.query).documents.length===1),r=hn(io(Y1(i.documents[0])))):r=function(s){return hn(rT(s))}(t.query),new Yr(r,t.targetId,0,t.lastListenSequenceNumber,e,n,Qe.fromBase64String(t.resumeToken))}function gT(t,e){const n=fo(e.snapshotVersion),r=fo(e.lastLimboFreeSnapshotVersion);let i;i=Eh(e.target)?tT(t.Wt,e.target):nT(t.Wt,e.target);const s=e.resumeToken.toBase64();return new zt(e.targetId,wu(e.target),n,s,e.sequenceNumber,r,i)}function xg(t){const e=rT({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?T1(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zL{getBundleMetadata(e,n){return yT(e).get(n).next(r=>{if(r)return{id:(i=r).bundleId,createTime:po(i.createTime),version:i.version};var i})}saveBundleMetadata(e,n){return yT(e).put({bundleId:(r=n).id,createTime:fo(Ye(r.createTime)),version:r.version});var r}getNamedQuery(e,n){return vT(e).get(n).next(r=>{if(r)return{name:(i=r).name,query:xg(i.bundledQuery),readTime:po(i.readTime)};var i})}saveNamedQuery(e,n){return vT(e).put(function(r){return{name:r.name,readTime:fo(Ye(r.readTime)),bundledQuery:r.bundledQuery}}(n))}}function yT(t){return qt(t,co.store)}function vT(t){return qt(t,ho.store)}/**
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
 */class qL{constructor(){this.Gt=new Dg}addToCollectionParentIndex(e,n){return this.Gt.add(n),T.resolve()}getCollectionParents(e,n){return T.resolve(this.Gt.getEntries(n))}}class Dg{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Ce(ie.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Ce(ie.comparator)).toArray()}}/**
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
 */class HL{constructor(){this.zt=new Dg}addToCollectionParentIndex(e,n){if(!this.zt.has(n)){const r=n.lastSegment(),i=n.popLast();e.addOnCommittedListener(()=>{this.zt.add(n)});const s={collectionId:r,parent:Tn(i)};return wT(e).put(s)}return T.resolve()}getCollectionParents(e,n){const r=[],i=IDBKeyRange.bound([n,""],[l1(n),""],!1,!0);return wT(e).Lt(i).next(s=>{for(const o of s){if(o.collectionId!==n)break;r.push(ar(o.parent))}return r})}}function wT(t){return qt(t,ji.store)}/**
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
 */const _T={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Ht{constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new Ht(e,Ht.DEFAULT_COLLECTION_PERCENTILE,Ht.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IT(t,e,n){const r=t.store(ve.store),i=t.store(Et.store),s=[],o=IDBKeyRange.only(n.batchId);let a=0;const u=r.Kt({range:o},(c,h,d)=>(a++,d.delete()));s.push(u.next(()=>{H(a===1)}));const l=[];for(const c of n.mutations){const h=Et.key(e,c.key.path,n.batchId);s.push(i.delete(h)),l.push(c.key)}return T.waitFor(s).next(()=>l)}function Oh(t){if(!t)return 0;let e;if(t.document)e=t.document;else if(t.unknownDocument)e=t.unknownDocument;else{if(!t.noDocument)throw q();e=t.noDocument}return JSON.stringify(e).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ht.DEFAULT_COLLECTION_PERCENTILE=10,Ht.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ht.DEFAULT=new Ht(41943040,Ht.DEFAULT_COLLECTION_PERCENTILE,Ht.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ht.DISABLED=new Ht(-1,0,0);class Og{constructor(e,n,r,i){this.userId=e,this.N=n,this.Ht=r,this.referenceDelegate=i,this.Jt={}}static Yt(e,n,r,i){H(e.uid!=="");const s=e.isAuthenticated()?e.uid:"";return new Og(s,n,r,i)}checkEmpty(e){let n=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Xr(e).Kt({index:ve.userMutationsIndex,range:r},(i,s,o)=>{n=!1,o.done()}).next(()=>n)}addMutationBatch(e,n,r,i){const s=go(e),o=Xr(e);return o.add({}).next(a=>{H(typeof a=="number");const u=new Ag(a,n,r,i),l=function(d,g,y){const _=y.baseMutations.map(p=>xh(d.Wt,p)),f=y.mutations.map(p=>xh(d.Wt,p));return new ve(g,y.batchId,y.localWriteTime.toMillis(),_,f)}(this.N,this.userId,u),c=[];let h=new Ce((d,g)=>J(d.canonicalString(),g.canonicalString()));for(const d of i){const g=Et.key(this.userId,d.key.path,a);h=h.add(d.key.path.popLast()),c.push(o.put(l)),c.push(s.put(g,Et.PLACEHOLDER))}return h.forEach(d=>{c.push(this.Ht.addToCollectionParentIndex(e,d))}),e.addOnCommittedListener(()=>{this.Jt[a]=u.keys()}),T.waitFor(c).next(()=>u)})}lookupMutationBatch(e,n){return Xr(e).get(n).next(r=>r?(H(r.userId===this.userId),mo(this.N,r)):null)}Xt(e,n){return this.Jt[n]?T.resolve(this.Jt[n]):this.lookupMutationBatch(e,n).next(r=>{if(r){const i=r.keys();return this.Jt[n]=i,i}return null})}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=IDBKeyRange.lowerBound([this.userId,r]);let s=null;return Xr(e).Kt({index:ve.userMutationsIndex,range:i},(o,a,u)=>{a.userId===this.userId&&(H(a.batchId>=r),s=mo(this.N,a)),u.done()}).next(()=>s)}getHighestUnacknowledgedBatchId(e){const n=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=-1;return Xr(e).Kt({index:ve.userMutationsIndex,range:n,reverse:!0},(i,s,o)=>{r=s.batchId,o.done()}).next(()=>r)}getAllMutationBatches(e){const n=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return Xr(e).Lt(ve.userMutationsIndex,n).next(r=>r.map(i=>mo(this.N,i)))}getAllMutationBatchesAffectingDocumentKey(e,n){const r=Et.prefixForPath(this.userId,n.path),i=IDBKeyRange.lowerBound(r),s=[];return go(e).Kt({range:i},(o,a,u)=>{const[l,c,h]=o,d=ar(c);if(l===this.userId&&n.path.isEqual(d))return Xr(e).get(h).next(g=>{if(!g)throw q();H(g.userId===this.userId),s.push(mo(this.N,g))});u.done()}).next(()=>s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ce(J);const i=[];return n.forEach(s=>{const o=Et.prefixForPath(this.userId,s.path),a=IDBKeyRange.lowerBound(o),u=go(e).Kt({range:a},(l,c,h)=>{const[d,g,y]=l,_=ar(g);d===this.userId&&s.path.isEqual(_)?r=r.add(y):h.done()});i.push(u)}),T.waitFor(i).next(()=>this.Zt(e,r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1,s=Et.prefixForPath(this.userId,r),o=IDBKeyRange.lowerBound(s);let a=new Ce(J);return go(e).Kt({range:o},(u,l,c)=>{const[h,d,g]=u,y=ar(d);h===this.userId&&r.isPrefixOf(y)?y.length===i&&(a=a.add(g)):c.done()}).next(()=>this.Zt(e,a))}Zt(e,n){const r=[],i=[];return n.forEach(s=>{i.push(Xr(e).get(s).next(o=>{if(o===null)throw q();H(o.userId===this.userId),r.push(mo(this.N,o))}))}),T.waitFor(i).next(()=>r)}removeMutationBatch(e,n){return IT(e.Qt,this.userId,n).next(r=>(e.addOnCommittedListener(()=>{this.te(n.batchId)}),T.forEach(r,i=>this.referenceDelegate.markPotentiallyOrphaned(e,i))))}te(e){delete this.Jt[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(n=>{if(!n)return T.resolve();const r=IDBKeyRange.lowerBound(Et.prefixForUser(this.userId)),i=[];return go(e).Kt({range:r},(s,o,a)=>{if(s[0]===this.userId){const u=ar(s[1]);i.push(u)}else a.done()}).next(()=>{H(i.length===0)})})}containsKey(e,n){return ET(e,this.userId,n)}ee(e){return TT(e).get(this.userId).next(n=>n||new Qr(this.userId,-1,""))}}function ET(t,e,n){const r=Et.prefixForPath(e,n.path),i=r[1],s=IDBKeyRange.lowerBound(r);let o=!1;return go(t).Kt({range:s,qt:!0},(a,u,l)=>{const[c,h,d]=a;c===e&&h===i&&(o=!0),l.done()}).next(()=>o)}function Xr(t){return qt(t,ve.store)}function go(t){return qt(t,Et.store)}function TT(t){return qt(t,Qr.store)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi{constructor(e){this.ne=e}next(){return this.ne+=2,this.ne}static se(){return new Hi(0)}static ie(){return new Hi(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WL{constructor(e,n){this.referenceDelegate=e,this.N=n}allocateTargetId(e){return this.re(e).next(n=>{const r=new Hi(n.highestTargetId);return n.highestTargetId=r.next(),this.oe(e,n).next(()=>n.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.re(e).next(n=>Q.fromTimestamp(new Ke(n.lastRemoteSnapshotVersion.seconds,n.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.re(e).next(n=>n.highestListenSequenceNumber)}setTargetsMetadata(e,n,r){return this.re(e).next(i=>(i.highestListenSequenceNumber=n,r&&(i.lastRemoteSnapshotVersion=r.toTimestamp()),n>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=n),this.oe(e,i)))}addTargetData(e,n){return this.ae(e,n).next(()=>this.re(e).next(r=>(r.targetCount+=1,this.ce(n,r),this.oe(e,r))))}updateTargetData(e,n){return this.ae(e,n)}removeTargetData(e,n){return this.removeMatchingKeysForTargetId(e,n.targetId).next(()=>yo(e).delete(n.targetId)).next(()=>this.re(e)).next(r=>(H(r.targetCount>0),r.targetCount-=1,this.oe(e,r)))}removeTargets(e,n,r){let i=0;const s=[];return yo(e).Kt((o,a)=>{const u=xu(a);u.sequenceNumber<=n&&r.get(u.targetId)===null&&(i++,s.push(this.removeTargetData(e,u)))}).next(()=>T.waitFor(s)).next(()=>i)}forEachTarget(e,n){return yo(e).Kt((r,i)=>{const s=xu(i);n(s)})}re(e){return ST(e).get(tn.key).next(n=>(H(n!==null),n))}oe(e,n){return ST(e).put(tn.key,n)}ae(e,n){return yo(e).put(gT(this.N,n))}ce(e,n){let r=!1;return e.targetId>n.highestTargetId&&(n.highestTargetId=e.targetId,r=!0),e.sequenceNumber>n.highestListenSequenceNumber&&(n.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.re(e).next(n=>n.targetCount)}getTargetData(e,n){const r=wu(n),i=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let s=null;return yo(e).Kt({range:i,index:zt.queryTargetsIndexName},(o,a,u)=>{const l=xu(a);Ih(n,l.target)&&(s=l,u.done())}).next(()=>s)}addMatchingKeys(e,n,r){const i=[],s=Jr(e);return n.forEach(o=>{const a=Tn(o.path);i.push(s.put(new ft(r,a))),i.push(this.referenceDelegate.addReference(e,r,o))}),T.waitFor(i)}removeMatchingKeys(e,n,r){const i=Jr(e);return T.forEach(n,s=>{const o=Tn(s.path);return T.waitFor([i.delete([r,o]),this.referenceDelegate.removeReference(e,r,s)])})}removeMatchingKeysForTargetId(e,n){const r=Jr(e),i=IDBKeyRange.bound([n],[n+1],!1,!0);return r.delete(i)}getMatchingKeysForTargetId(e,n){const r=IDBKeyRange.bound([n],[n+1],!1,!0),i=Jr(e);let s=ce();return i.Kt({range:r,qt:!0},(o,a,u)=>{const l=ar(o[1]),c=new j(l);s=s.add(c)}).next(()=>s)}containsKey(e,n){const r=Tn(n.path),i=IDBKeyRange.bound([r],[l1(r)],!1,!0);let s=0;return Jr(e).Kt({index:ft.documentTargetsIndex,qt:!0,range:i},([o,a],u,l)=>{o!==0&&(s++,l.done())}).next(()=>s>0)}Tt(e,n){return yo(e).get(n).next(r=>r?xu(r):null)}}function yo(t){return qt(t,zt.store)}function ST(t){return qt(t,tn.store)}function Jr(t){return qt(t,ft.store)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wi(t){if(t.code!==E.FAILED_PRECONDITION||t.message!==lT)throw t;N("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kT([t,e],[n,r]){const i=J(t,n);return i===0?J(e,r):i}class GL{constructor(e){this.ue=e,this.buffer=new Ce(kT),this.he=0}le(){return++this.he}fe(e){const n=[e,this.le()];if(this.buffer.size<this.ue)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();kT(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class KL{constructor(e,n){this.garbageCollector=e,this.asyncQueue=n,this.de=!1,this.we=null}start(e){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this._e(e)}stop(){this.we&&(this.we.cancel(),this.we=null)}get started(){return this.we!==null}_e(e){const n=this.de?3e5:6e4;N("LruGarbageCollector",`Garbage collection scheduled in ${n}ms`),this.we=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",n,async()=>{this.we=null,this.de=!0;try{await e.collectGarbage(this.garbageCollector)}catch(r){zi(r)?N("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",r):await Wi(r)}await this._e(e)})}}class QL{constructor(e,n){this.me=e,this.params=n}calculateTargetCount(e,n){return this.me.ge(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return T.resolve(Zt.T);const r=new GL(n);return this.me.forEachTarget(e,i=>r.fe(i.sequenceNumber)).next(()=>this.me.ye(e,i=>r.fe(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.me.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.me.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(N("LruGarbageCollector","Garbage collection skipped; disabled"),T.resolve(_T)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(N("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),_T):this.pe(e,n))}getCacheSize(e){return this.me.getCacheSize(e)}pe(e,n){let r,i,s,o,a,u,l;const c=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(h=>(h>this.params.maximumSequenceNumbersToCollect?(N("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${h}`),i=this.params.maximumSequenceNumbersToCollect):i=h,o=Date.now(),this.nthSequenceNumber(e,i))).next(h=>(r=h,a=Date.now(),this.removeTargets(e,r,n))).next(h=>(s=h,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(h=>(l=Date.now(),hg()<=te.DEBUG&&N("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-c}ms
	Determined least recently used ${i} in `+(a-o)+`ms
	Removed ${s} targets in `+(u-a)+`ms
	Removed ${h} documents in `+(l-u)+`ms
Total Duration: ${l-c}ms`),T.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:h})))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YL{constructor(e,n){this.db=e,this.garbageCollector=function(r,i){return new QL(r,i)}(this,n)}ge(e){const n=this.Te(e);return this.db.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}Te(e){let n=0;return this.ye(e,r=>{n++}).next(()=>n)}forEachTarget(e,n){return this.db.getTargetCache().forEachTarget(e,n)}ye(e,n){return this.Ee(e,(r,i)=>n(i))}addReference(e,n,r){return Lh(e,r)}removeReference(e,n,r){return Lh(e,r)}removeTargets(e,n,r){return this.db.getTargetCache().removeTargets(e,n,r)}markPotentiallyOrphaned(e,n){return Lh(e,n)}Ie(e,n){return function(r,i){let s=!1;return TT(r).jt(o=>ET(r,o,i).next(a=>(a&&(s=!0),T.resolve(!a)))).next(()=>s)}(e,n)}removeOrphanedDocuments(e,n){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let s=0;return this.Ee(e,(o,a)=>{if(a<=n){const u=this.Ie(e,o).next(l=>{if(!l)return s++,r.getEntry(e,o).next(()=>(r.removeEntry(o),Jr(e).delete([0,Tn(o.path)])))});i.push(u)}}).next(()=>T.waitFor(i)).next(()=>r.apply(e)).next(()=>s)}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,n){return Lh(e,n)}Ee(e,n){const r=Jr(e);let i,s=Zt.T;return r.Kt({index:ft.documentTargetsIndex},([o,a],{path:u,sequenceNumber:l})=>{o===0?(s!==Zt.T&&n(new j(ar(i)),s),s=l,i=u):s=Zt.T}).next(()=>{s!==Zt.T&&n(new j(ar(i)),s)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function Lh(t,e){return Jr(t).put(function(n,r){return new ft(0,Tn(n.path),r)}(e,t.currentSequenceNumber))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vo{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={}}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i!==void 0){for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n])}else this.inner[r]=[[e,n]]}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),!0;return!1}forEach(e){$i(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return h1(this.inner)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CT{constructor(){this.changes=new vo(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}getReadTime(e){const n=this.changes.get(e);return n?n.readTime:Q.min()}addEntry(e,n){this.assertNotApplied(),this.changes.set(e.key,{document:e,readTime:n})}removeEntry(e,n=null){this.assertNotApplied(),this.changes.set(e,{document:Ee.newInvalidDocument(e),readTime:n})}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?T.resolve(r.document):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XL{constructor(e,n){this.N=e,this.Ht=n}addEntry(e,n,r){return Zr(e).put(Mh(n),r)}removeEntry(e,n){const r=Zr(e),i=Mh(n);return r.delete(i)}updateMetadata(e,n){return this.getMetadata(e).next(r=>(r.byteSize+=n,this.Ae(e,r)))}getEntry(e,n){return Zr(e).get(Mh(n)).next(r=>this.Re(n,r))}be(e,n){return Zr(e).get(Mh(n)).next(r=>({document:this.Re(n,r),size:Oh(r)}))}getEntries(e,n){let r=dn();return this.Pe(e,n,(i,s)=>{const o=this.Re(i,s);r=r.insert(i,o)}).next(()=>r)}ve(e,n){let r=dn(),i=new Ve(j.comparator);return this.Pe(e,n,(s,o)=>{const a=this.Re(s,o);r=r.insert(s,a),i=i.insert(s,Oh(o))}).next(()=>({documents:r,Ve:i}))}Pe(e,n,r){if(n.isEmpty())return T.resolve();const i=IDBKeyRange.bound(n.first().path.toArray(),n.last().path.toArray()),s=n.getIterator();let o=s.getNext();return Zr(e).Kt({range:i},(a,u,l)=>{const c=j.fromSegments(a);for(;o&&j.comparator(o,c)<0;)r(o,null),o=s.getNext();o&&o.isEqual(c)&&(r(o,u),o=s.hasNext()?s.getNext():null),o?l.Mt(o.path.toArray()):l.done()}).next(()=>{for(;o;)r(o,null),o=s.hasNext()?s.getNext():null})}getDocumentsMatchingQuery(e,n,r){let i=dn();const s=n.path.length+1,o={};if(r.isEqual(Q.min())){const a=n.path.toArray();o.range=IDBKeyRange.lowerBound(a)}else{const a=n.path.toArray(),u=Pg(r);o.range=IDBKeyRange.lowerBound([a,u],!0),o.index=be.collectionReadTimeIndex}return Zr(e).Kt(o,(a,u,l)=>{if(a.length!==s)return;const c=Ng(this.N,u);n.path.isPrefixOf(c.key.path)?Eu(n,c)&&(i=i.insert(c.key,c)):l.done()}).next(()=>i)}newChangeBuffer(e){return new JL(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(n=>n.byteSize)}getMetadata(e){return bT(e).get(Vn.key).next(n=>(H(!!n),n))}Ae(e,n){return bT(e).put(Vn.key,n)}Re(e,n){if(n){const r=Ng(this.N,n);if(!(r.isNoDocument()&&r.version.isEqual(Q.min())))return r}return Ee.newInvalidDocument(e)}}class JL extends CT{constructor(e,n){super(),this.Se=e,this.trackRemovals=n,this.De=new vo(r=>r.toString(),(r,i)=>r.isEqual(i))}applyChanges(e){const n=[];let r=0,i=new Ce((s,o)=>J(s.canonicalString(),o.canonicalString()));return this.changes.forEach((s,o)=>{const a=this.De.get(s);if(o.document.isValidDocument()){const u=pT(this.Se.N,o.document,this.getReadTime(s));i=i.add(s.path.popLast()),r+=Oh(u)-a,n.push(this.Se.addEntry(e,s,u))}else if(r-=a,this.trackRemovals){const u=pT(this.Se.N,Ee.newNoDocument(s,Q.min()),this.getReadTime(s));n.push(this.Se.addEntry(e,s,u))}else n.push(this.Se.removeEntry(e,s))}),i.forEach(s=>{n.push(this.Se.Ht.addToCollectionParentIndex(e,s))}),n.push(this.Se.updateMetadata(e,r)),T.waitFor(n)}getFromCache(e,n){return this.Se.be(e,n).next(r=>(this.De.set(n,r.size),r.document))}getAllFromCache(e,n){return this.Se.ve(e,n).next(({documents:r,Ve:i})=>(i.forEach((s,o)=>{this.De.set(s,o)}),r))}}function bT(t){return qt(t,Vn.store)}function Zr(t){return qt(t,be.store)}function Mh(t){return t.path.toArray()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZL{constructor(e){this.N=e}Ct(e,n,r,i){H(r<i&&r>=0&&i<=11);const s=new Dh("createOrUpgrade",n);r<1&&i>=1&&(function(a){a.createObjectStore(en.store)}(e),function(a){a.createObjectStore(Qr.store,{keyPath:Qr.keyPath}),a.createObjectStore(ve.store,{keyPath:ve.keyPath,autoIncrement:!0}).createIndex(ve.userMutationsIndex,ve.userMutationsKeyPath,{unique:!0}),a.createObjectStore(Et.store)}(e),AT(e),function(a){a.createObjectStore(be.store)}(e));let o=T.resolve();return r<3&&i>=3&&(r!==0&&(function(a){a.deleteObjectStore(ft.store),a.deleteObjectStore(zt.store),a.deleteObjectStore(tn.store)}(e),AT(e)),o=o.next(()=>function(a){const u=a.store(tn.store),l=new tn(0,0,Q.min().toTimestamp(),0);return u.put(tn.key,l)}(s))),r<4&&i>=4&&(r!==0&&(o=o.next(()=>function(a,u){return u.store(ve.store).Lt().next(l=>{a.deleteObjectStore(ve.store),a.createObjectStore(ve.store,{keyPath:ve.keyPath,autoIncrement:!0}).createIndex(ve.userMutationsIndex,ve.userMutationsKeyPath,{unique:!0});const c=u.store(ve.store),h=l.map(d=>c.put(d));return T.waitFor(h)})}(e,s))),o=o.next(()=>{(function(a){a.createObjectStore(ur.store,{keyPath:ur.keyPath})})(e)})),r<5&&i>=5&&(o=o.next(()=>this.Ce(s))),r<6&&i>=6&&(o=o.next(()=>(function(a){a.createObjectStore(Vn.store)}(e),this.Ne(s)))),r<7&&i>=7&&(o=o.next(()=>this.xe(s))),r<8&&i>=8&&(o=o.next(()=>this.ke(e,s))),r<9&&i>=9&&(o=o.next(()=>{(function(a){a.objectStoreNames.contains("remoteDocumentChanges")&&a.deleteObjectStore("remoteDocumentChanges")})(e),function(a){const u=a.objectStore(be.store);u.createIndex(be.readTimeIndex,be.readTimeIndexPath,{unique:!1}),u.createIndex(be.collectionReadTimeIndex,be.collectionReadTimeIndexPath,{unique:!1})}(n)})),r<10&&i>=10&&(o=o.next(()=>this.$e(s))),r<11&&i>=11&&(o=o.next(()=>{(function(a){a.createObjectStore(co.store,{keyPath:co.keyPath})})(e),function(a){a.createObjectStore(ho.store,{keyPath:ho.keyPath})}(e)})),o}Ne(e){let n=0;return e.store(be.store).Kt((r,i)=>{n+=Oh(i)}).next(()=>{const r=new Vn(n);return e.store(Vn.store).put(Vn.key,r)})}Ce(e){const n=e.store(Qr.store),r=e.store(ve.store);return n.Lt().next(i=>T.forEach(i,s=>{const o=IDBKeyRange.bound([s.userId,-1],[s.userId,s.lastAcknowledgedBatchId]);return r.Lt(ve.userMutationsIndex,o).next(a=>T.forEach(a,u=>{H(u.userId===s.userId);const l=mo(this.N,u);return IT(e,s.userId,l).next(()=>{})}))}))}xe(e){const n=e.store(ft.store),r=e.store(be.store);return e.store(tn.store).get(tn.key).next(i=>{const s=[];return r.Kt((o,a)=>{const u=new ie(o),l=function(c){return[0,Tn(c)]}(u);s.push(n.get(l).next(c=>c?T.resolve():(h=>n.put(new ft(0,Tn(h),i.highestListenSequenceNumber)))(u)))}).next(()=>T.waitFor(s))})}ke(e,n){e.createObjectStore(ji.store,{keyPath:ji.keyPath});const r=n.store(ji.store),i=new Dg,s=o=>{if(i.add(o)){const a=o.lastSegment(),u=o.popLast();return r.put({collectionId:a,parent:Tn(u)})}};return n.store(be.store).Kt({qt:!0},(o,a)=>{const u=new ie(o);return s(u.popLast())}).next(()=>n.store(Et.store).Kt({qt:!0},([o,a,u],l)=>{const c=ar(a);return s(c.popLast())}))}$e(e){const n=e.store(zt.store);return n.Kt((r,i)=>{const s=xu(i),o=gT(this.N,s);return n.put(o)})}}function AT(t){t.createObjectStore(ft.store,{keyPath:ft.keyPath}).createIndex(ft.documentTargetsIndex,ft.documentTargetsKeyPath,{unique:!0}),t.createObjectStore(zt.store,{keyPath:zt.keyPath}).createIndex(zt.queryTargetsIndexName,zt.queryTargetsKeyPath,{unique:!0}),t.createObjectStore(tn.store)}const Lg="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class Mg{constructor(e,n,r,i,s,o,a,u,l,c){if(this.allowTabSynchronization=e,this.persistenceKey=n,this.clientId=r,this.Oe=s,this.window=o,this.document=a,this.Fe=l,this.Me=c,this.Le=null,this.Be=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Ue=null,this.inForeground=!1,this.qe=null,this.Ke=null,this.je=Number.NEGATIVE_INFINITY,this.Qe=h=>Promise.resolve(),!Mg.bt())throw new C(E.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new YL(this,i),this.We=n+"main",this.N=new fT(u),this.Ge=new Sn(this.We,11,new ZL(this.N)),this.ze=new WL(this.referenceDelegate,this.N),this.Ht=new HL,this.He=function(h,d){return new XL(h,d)}(this.N,this.Ht),this.Je=new zL,this.window&&this.window.localStorage?this.Ye=this.window.localStorage:(this.Ye=null,c===!1&&De("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.Xe().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new C(E.FAILED_PRECONDITION,Lg);return this.Ze(),this.tn(),this.en(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.ze.getHighestSequenceNumber(e))}).then(e=>{this.Le=new Zt(e,this.Fe)}).then(()=>{this.Be=!0}).catch(e=>(this.Ge&&this.Ge.close(),Promise.reject(e)))}nn(e){return this.Qe=async n=>{if(this.started)return e(n)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Ge.xt(async n=>{n.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.Oe.enqueueAndForget(async()=>{this.started&&await this.Xe()}))}Xe(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>$h(e).put(new ur(this.clientId,Date.now(),this.networkEnabled,this.inForeground)).next(()=>{if(this.isPrimary)return this.sn(e).next(n=>{n||(this.isPrimary=!1,this.Oe.enqueueRetryable(()=>this.Qe(!1)))})}).next(()=>this.rn(e)).next(n=>this.isPrimary&&!n?this.on(e).next(()=>!1):!!n&&this.an(e).next(()=>!0))).catch(e=>{if(zi(e))return N("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return N("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.Oe.enqueueRetryable(()=>this.Qe(e)),this.isPrimary=e})}sn(e){return Du(e).get(en.key).next(n=>T.resolve(this.cn(n)))}un(e){return $h(e).delete(this.clientId)}async hn(){if(this.isPrimary&&!this.ln(this.je,18e5)){this.je=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",n=>{const r=qt(n,ur.store);return r.Lt().next(i=>{const s=this.fn(i,18e5),o=i.filter(a=>s.indexOf(a)===-1);return T.forEach(o,a=>r.delete(a.clientId)).next(()=>o)})}).catch(()=>[]);if(this.Ye)for(const n of e)this.Ye.removeItem(this.dn(n.clientId))}}en(){this.Ke=this.Oe.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.Xe().then(()=>this.hn()).then(()=>this.en()))}cn(e){return!!e&&e.ownerId===this.clientId}rn(e){return this.Me?T.resolve(!0):Du(e).get(en.key).next(n=>{if(n!==null&&this.ln(n.leaseTimestampMs,5e3)&&!this.wn(n.ownerId)){if(this.cn(n)&&this.networkEnabled)return!0;if(!this.cn(n)){if(!n.allowTabSynchronization)throw new C(E.FAILED_PRECONDITION,Lg);return!1}}return!(!this.networkEnabled||!this.inForeground)||$h(e).Lt().next(r=>this.fn(r,5e3).find(i=>{if(this.clientId!==i.clientId){const s=!this.networkEnabled&&i.networkEnabled,o=!this.inForeground&&i.inForeground,a=this.networkEnabled===i.networkEnabled;if(s||o&&a)return!0}return!1})===void 0)}).next(n=>(this.isPrimary!==n&&N("IndexedDbPersistence",`Client ${n?"is":"is not"} eligible for a primary lease.`),n))}async shutdown(){this.Be=!1,this._n(),this.Ke&&(this.Ke.cancel(),this.Ke=null),this.mn(),this.gn(),await this.Ge.runTransaction("shutdown","readwrite",[en.store,ur.store],e=>{const n=new dT(e,Zt.T);return this.on(n).next(()=>this.un(n))}),this.Ge.close(),this.yn()}fn(e,n){return e.filter(r=>this.ln(r.updateTimeMs,n)&&!this.wn(r.clientId))}pn(){return this.runTransaction("getActiveClients","readonly",e=>$h(e).Lt().next(n=>this.fn(n,18e5).map(r=>r.clientId)))}get started(){return this.Be}getMutationQueue(e){return Og.Yt(e,this.N,this.Ht,this.referenceDelegate)}getTargetCache(){return this.ze}getRemoteDocumentCache(){return this.He}getIndexManager(){return this.Ht}getBundleCache(){return this.Je}runTransaction(e,n,r){N("IndexedDbPersistence","Starting transaction:",e);const i=n==="readonly"?"readonly":"readwrite";let s;return this.Ge.runTransaction(e,i,VL,o=>(s=new dT(o,this.Le?this.Le.next():Zt.T),n==="readwrite-primary"?this.sn(s).next(a=>!!a||this.rn(s)).next(a=>{if(!a)throw De(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.Oe.enqueueRetryable(()=>this.Qe(!1)),new C(E.FAILED_PRECONDITION,lT);return r(s)}).next(a=>this.an(s).next(()=>a)):this.Tn(s).next(()=>r(s)))).then(o=>(s.raiseOnCommittedEvent(),o))}Tn(e){return Du(e).get(en.key).next(n=>{if(n!==null&&this.ln(n.leaseTimestampMs,5e3)&&!this.wn(n.ownerId)&&!this.cn(n)&&!(this.Me||this.allowTabSynchronization&&n.allowTabSynchronization))throw new C(E.FAILED_PRECONDITION,Lg)})}an(e){const n=new en(this.clientId,this.allowTabSynchronization,Date.now());return Du(e).put(en.key,n)}static bt(){return Sn.bt()}on(e){const n=Du(e);return n.get(en.key).next(r=>this.cn(r)?(N("IndexedDbPersistence","Releasing primary lease."),n.delete(en.key)):T.resolve())}ln(e,n){const r=Date.now();return!(e<r-n)&&(!(e>r)||(De(`Detected an update time that is in the future: ${e} > ${r}`),!1))}Ze(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.qe=()=>{this.Oe.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.Xe()))},this.document.addEventListener("visibilitychange",this.qe),this.inForeground=this.document.visibilityState==="visible")}mn(){this.qe&&(this.document.removeEventListener("visibilitychange",this.qe),this.qe=null)}tn(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.Ue=()=>{this._n(),FA()&&navigator.appVersion.match("Version/14")&&this.Oe.enterRestrictedMode(!0),this.Oe.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Ue))}gn(){this.Ue&&(this.window.removeEventListener("pagehide",this.Ue),this.Ue=null)}wn(e){var n;try{const r=((n=this.Ye)===null||n===void 0?void 0:n.getItem(this.dn(e)))!==null;return N("IndexedDbPersistence",`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return De("IndexedDbPersistence","Failed to get zombied client id.",r),!1}}_n(){if(this.Ye)try{this.Ye.setItem(this.dn(this.clientId),String(Date.now()))}catch(e){De("Failed to set zombie client id.",e)}}yn(){if(this.Ye)try{this.Ye.removeItem(this.dn(this.clientId))}catch{}}dn(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function Du(t){return qt(t,en.store)}function $h(t){return qt(t,ur.store)}function $g(t,e){let n=t.projectId;return t.isDefaultDatabase||(n+="."+t.database),"firestore/"+e+"/"+n+"/"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eM{constructor(e,n){this.progress=e,this.En=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RT{constructor(e,n,r){this.He=e,this.In=n,this.Ht=r}An(e,n){return this.In.getAllMutationBatchesAffectingDocumentKey(e,n).next(r=>this.Rn(e,n,r))}Rn(e,n,r){return this.He.getEntry(e,n).next(i=>{for(const s of r)s.applyToLocalView(i);return i})}bn(e,n){e.forEach((r,i)=>{for(const s of n)s.applyToLocalView(i)})}Pn(e,n){return this.He.getEntries(e,n).next(r=>this.vn(e,r).next(()=>r))}vn(e,n){return this.In.getAllMutationBatchesAffectingDocumentKeys(e,n).next(r=>this.bn(n,r))}getDocumentsMatchingQuery(e,n,r){return function(i){return j.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.Vn(e,n.path):_g(n)?this.Sn(e,n,r):this.Dn(e,n,r)}Vn(e,n){return this.An(e,new j(n)).next(r=>{let i=Sg();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}Sn(e,n,r){const i=n.collectionGroup;let s=Sg();return this.Ht.getCollectionParents(e,i).next(o=>T.forEach(o,a=>{const u=function(l,c){return new or(c,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(i));return this.Dn(e,u,r).next(l=>{l.forEach((c,h)=>{s=s.insert(c,h)})})}).next(()=>s))}Dn(e,n,r){let i,s;return this.He.getDocumentsMatchingQuery(e,n,r).next(o=>(i=o,this.In.getAllMutationBatchesAffectingQuery(e,n))).next(o=>(s=o,this.Cn(e,s,i).next(a=>{i=a;for(const u of s)for(const l of u.mutations){const c=l.key;let h=i.get(c);h==null&&(h=Ee.newInvalidDocument(c),i=i.insert(c,h)),Eg(l,h,u.localWriteTime),h.isFoundDocument()||(i=i.remove(c))}}))).next(()=>(i.forEach((o,a)=>{Eu(n,a)||(i=i.remove(o))}),i))}Cn(e,n,r){let i=ce();for(const o of n)for(const a of o.mutations)a instanceof Kr&&r.get(a.key)===null&&(i=i.add(a.key));let s=r;return this.He.getEntries(e,i).next(o=>(o.forEach((a,u)=>{u.isFoundDocument()&&(s=s.insert(a,u))}),s))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ug{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Nn=r,this.xn=i}static kn(e,n){let r=ce(),i=ce();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Ug(e,n.fromCache,r,i)}}/**
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
 */class NT{$n(e){this.On=e}getDocumentsMatchingQuery(e,n,r,i){return function(s){return s.filters.length===0&&s.limit===null&&s.startAt==null&&s.endAt==null&&(s.explicitOrderBy.length===0||s.explicitOrderBy.length===1&&s.explicitOrderBy[0].field.isKeyField())}(n)||r.isEqual(Q.min())?this.Fn(e,n):this.On.Pn(e,i).next(s=>{const o=this.Mn(n,s);return(Sh(n)||kh(n))&&this.Ln(n.limitType,o,i,r)?this.Fn(e,n):(hg()<=te.DEBUG&&N("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Ig(n)),this.On.getDocumentsMatchingQuery(e,n,r).next(a=>(o.forEach(u=>{a=a.insert(u.key,u)}),a)))})}Mn(e,n){let r=new Ce(k1(e));return n.forEach((i,s)=>{Eu(e,s)&&(r=r.add(s))}),r}Ln(e,n,r,i){if(r.size!==n.size)return!0;const s=e==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Fn(e,n){return hg()<=te.DEBUG&&N("QueryEngine","Using full collection scan to execute query:",Ig(n)),this.On.getDocumentsMatchingQuery(e,n,Q.min())}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tM{constructor(e,n,r,i){this.persistence=e,this.Bn=n,this.N=i,this.Un=new Ve(J),this.qn=new vo(s=>wu(s),Ih),this.Kn=Q.min(),this.In=e.getMutationQueue(r),this.jn=e.getRemoteDocumentCache(),this.ze=e.getTargetCache(),this.Qn=new RT(this.jn,this.In,this.persistence.getIndexManager()),this.Je=e.getBundleCache(),this.Bn.$n(this.Qn)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Un))}}function PT(t,e,n,r){return new tM(t,e,n,r)}async function xT(t,e){const n=L(t);let r=n.In,i=n.Qn;const s=await n.persistence.runTransaction("Handle user change","readonly",o=>{let a;return n.In.getAllMutationBatches(o).next(u=>(a=u,r=n.persistence.getMutationQueue(e),i=new RT(n.jn,r,n.persistence.getIndexManager()),r.getAllMutationBatches(o))).next(u=>{const l=[],c=[];let h=ce();for(const d of a){l.push(d.batchId);for(const g of d.mutations)h=h.add(g.key)}for(const d of u){c.push(d.batchId);for(const g of d.mutations)h=h.add(g.key)}return i.Pn(o,h).next(d=>({Wn:d,removedBatchIds:l,addedBatchIds:c}))})});return n.In=r,n.Qn=i,n.Bn.$n(n.Qn),s}function nM(t,e){const n=L(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.jn.newChangeBuffer({trackRemovals:!0});return function(o,a,u,l){const c=u.batch,h=c.keys();let d=T.resolve();return h.forEach(g=>{d=d.next(()=>l.getEntry(a,g)).next(y=>{const _=u.docVersions.get(g);H(_!==null),y.version.compareTo(_)<0&&(c.applyToRemoteDocument(y,u),y.isValidDocument()&&l.addEntry(y,u.commitVersion))})}),d.next(()=>o.In.removeMutationBatch(a,c))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.In.performConsistencyCheck(r)).next(()=>n.Qn.Pn(r,i))})}function DT(t){const e=L(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.ze.getLastRemoteSnapshotVersion(n))}function rM(t,e){const n=L(t),r=e.snapshotVersion;let i=n.Un;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.jn.newChangeBuffer({trackRemovals:!0});i=n.Un;const a=[];e.targetChanges.forEach((l,c)=>{const h=i.get(c);if(!h)return;a.push(n.ze.removeMatchingKeys(s,l.removedDocuments,c).next(()=>n.ze.addMatchingKeys(s,l.addedDocuments,c)));const d=l.resumeToken;if(d.approximateByteSize()>0){const g=h.withResumeToken(d,r).withSequenceNumber(s.currentSequenceNumber);i=i.insert(c,g),function(y,_,f){return H(_.resumeToken.approximateByteSize()>0),y.resumeToken.approximateByteSize()===0||_.snapshotVersion.toMicroseconds()-y.snapshotVersion.toMicroseconds()>=3e8?!0:f.addedDocuments.size+f.modifiedDocuments.size+f.removedDocuments.size>0}(h,g,l)&&a.push(n.ze.updateTargetData(s,g))}});let u=dn();if(e.documentUpdates.forEach((l,c)=>{e.resolvedLimboDocuments.has(l)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,l))}),a.push(OT(s,o,e.documentUpdates,r,void 0).next(l=>{u=l})),!r.isEqual(Q.min())){const l=n.ze.getLastRemoteSnapshotVersion(s).next(c=>n.ze.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(l)}return T.waitFor(a).next(()=>o.apply(s)).next(()=>n.Qn.vn(s,u)).next(()=>u)}).then(s=>(n.Un=i,s))}function OT(t,e,n,r,i){let s=ce();return n.forEach(o=>s=s.add(o)),e.getEntries(t,s).next(o=>{let a=dn();return n.forEach((u,l)=>{const c=o.get(u),h=(i==null?void 0:i.get(u))||r;l.isNoDocument()&&l.version.isEqual(Q.min())?(e.removeEntry(u,h),a=a.insert(u,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(l,h),a=a.insert(u,l)):N("LocalStore","Ignoring outdated watch update for ",u,". Current version:",c.version," Watch version:",l.version)}),a})}function iM(t,e){const n=L(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.In.getNextMutationBatchAfterBatchId(r,e)))}function wo(t,e){const n=L(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.ze.getTargetData(r,e).next(s=>s?(i=s,T.resolve(i)):n.ze.allocateTargetId(r).next(o=>(i=new Yr(e,o,0,r.currentSequenceNumber),n.ze.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Un.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Un=n.Un.insert(r.targetId,r),n.qn.set(e,r.targetId)),r})}async function _o(t,e,n){const r=L(t),i=r.Un.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!zi(o))throw o;N("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Un=r.Un.remove(e),r.qn.delete(i.target)}function Uh(t,e,n){const r=L(t);let i=Q.min(),s=ce();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,u,l){const c=L(a),h=c.qn.get(l);return h!==void 0?T.resolve(c.Un.get(h)):c.ze.getTargetData(u,l)}(r,o,hn(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.ze.getMatchingKeysForTargetId(o,a.targetId).next(u=>{s=u})}).next(()=>r.Bn.getDocumentsMatchingQuery(o,e,n?i:Q.min(),n?s:ce())).next(a=>({documents:a,Gn:s})))}function LT(t,e){const n=L(t),r=L(n.ze),i=n.Un.get(e);return i?Promise.resolve(i.target):n.persistence.runTransaction("Get target data","readonly",s=>r.Tt(s,e).next(o=>o?o.target:null))}function MT(t){const e=L(t);return e.persistence.runTransaction("Get new document changes","readonly",n=>function(r,i,s){const o=L(r);let a=dn(),u=Pg(s);const l=Zr(i),c=IDBKeyRange.lowerBound(u,!0);return l.Kt({index:be.readTimeIndex,range:c},(h,d)=>{const g=Ng(o.N,d);a=a.insert(g.key,g),u=d.readTime}).next(()=>({En:a,readTime:mT(u)}))}(e.jn,n,e.Kn)).then(({En:n,readTime:r})=>(e.Kn=r,n))}async function sM(t){const e=L(t);return e.persistence.runTransaction("Synchronize last document change read time","readonly",n=>function(r){const i=Zr(r);let s=Q.min();return i.Kt({index:be.readTimeIndex,reverse:!0},(o,a,u)=>{a.readTime&&(s=mT(a.readTime)),u.done()}).next(()=>s)}(n)).then(n=>{e.Kn=n})}async function oM(t,e,n,r){const i=L(t);let s=ce(),o=dn(),a=j1();for(const c of n){const h=e.zn(c.metadata.name);c.document&&(s=s.add(h)),o=o.insert(h,e.Hn(c)),a=a.insert(h,e.Jn(c.metadata.readTime))}const u=i.jn.newChangeBuffer({trackRemovals:!0}),l=await wo(i,function(c){return hn(io(ie.fromString(`__bundle__/docs/${c}`)))}(r));return i.persistence.runTransaction("Apply bundle documents","readwrite",c=>OT(c,u,o,Q.min(),a).next(h=>(u.apply(c),h)).next(h=>i.ze.removeMatchingKeysForTargetId(c,l.targetId).next(()=>i.ze.addMatchingKeys(c,s,l.targetId)).next(()=>i.Qn.vn(c,h)).next(()=>h)))}async function aM(t,e,n=ce()){const r=await wo(t,hn(xg(e.bundledQuery))),i=L(t);return i.persistence.runTransaction("Save named query","readwrite",s=>{const o=Ye(e.readTime);if(r.snapshotVersion.compareTo(o)>=0)return i.Je.saveNamedQuery(s,e);const a=r.withResumeToken(Qe.EMPTY_BYTE_STRING,o);return i.Un=i.Un.insert(a.targetId,a),i.ze.updateTargetData(s,a).next(()=>i.ze.removeMatchingKeysForTargetId(s,r.targetId)).next(()=>i.ze.addMatchingKeys(s,n,r.targetId)).next(()=>i.Je.saveNamedQuery(s,e))})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uM{constructor(e){this.N=e,this.Yn=new Map,this.Xn=new Map}getBundleMetadata(e,n){return T.resolve(this.Yn.get(n))}saveBundleMetadata(e,n){var r;return this.Yn.set(n.id,{id:(r=n).id,version:r.version,createTime:Ye(r.createTime)}),T.resolve()}getNamedQuery(e,n){return T.resolve(this.Xn.get(n))}saveNamedQuery(e,n){return this.Xn.set(n.name,function(r){return{name:r.name,query:xg(r.bundledQuery),readTime:Ye(r.readTime)}}(n)),T.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fg{constructor(){this.Zn=new Ce(Xe.ts),this.es=new Ce(Xe.ns)}isEmpty(){return this.Zn.isEmpty()}addReference(e,n){const r=new Xe(e,n);this.Zn=this.Zn.add(r),this.es=this.es.add(r)}ss(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.rs(new Xe(e,n))}os(e,n){e.forEach(r=>this.removeReference(r,n))}cs(e){const n=new j(new ie([])),r=new Xe(n,e),i=new Xe(n,e+1),s=[];return this.es.forEachInRange([r,i],o=>{this.rs(o),s.push(o.key)}),s}us(){this.Zn.forEach(e=>this.rs(e))}rs(e){this.Zn=this.Zn.delete(e),this.es=this.es.delete(e)}hs(e){const n=new j(new ie([])),r=new Xe(n,e),i=new Xe(n,e+1);let s=ce();return this.es.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Xe(e,0),r=this.Zn.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Xe{constructor(e,n){this.key=e,this.ls=n}static ts(e,n){return j.comparator(e.key,n.key)||J(e.ls,n.ls)}static ns(e,n){return J(e.ls,n.ls)||j.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lM{constructor(e,n){this.Ht=e,this.referenceDelegate=n,this.In=[],this.fs=1,this.ds=new Ce(Xe.ts)}checkEmpty(e){return T.resolve(this.In.length===0)}addMutationBatch(e,n,r,i){const s=this.fs;this.fs++,this.In.length>0&&this.In[this.In.length-1];const o=new Ag(s,n,r,i);this.In.push(o);for(const a of i)this.ds=this.ds.add(new Xe(a.key,s)),this.Ht.addToCollectionParentIndex(e,a.key.path.popLast());return T.resolve(o)}lookupMutationBatch(e,n){return T.resolve(this.ws(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this._s(r),s=i<0?0:i;return T.resolve(this.In.length>s?this.In[s]:null)}getHighestUnacknowledgedBatchId(){return T.resolve(this.In.length===0?-1:this.fs-1)}getAllMutationBatches(e){return T.resolve(this.In.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Xe(n,0),i=new Xe(n,Number.POSITIVE_INFINITY),s=[];return this.ds.forEachInRange([r,i],o=>{const a=this.ws(o.ls);s.push(a)}),T.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ce(J);return n.forEach(i=>{const s=new Xe(i,0),o=new Xe(i,Number.POSITIVE_INFINITY);this.ds.forEachInRange([s,o],a=>{r=r.add(a.ls)})}),T.resolve(this.gs(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;j.isDocumentKey(s)||(s=s.child(""));const o=new Xe(new j(s),0);let a=new Ce(J);return this.ds.forEachWhile(u=>{const l=u.key.path;return!!r.isPrefixOf(l)&&(l.length===i&&(a=a.add(u.ls)),!0)},o),T.resolve(this.gs(a))}gs(e){const n=[];return e.forEach(r=>{const i=this.ws(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){H(this.ys(n.batchId,"removed")===0),this.In.shift();let r=this.ds;return T.forEach(n.mutations,i=>{const s=new Xe(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.ds=r})}te(e){}containsKey(e,n){const r=new Xe(n,0),i=this.ds.firstAfterOrEqual(r);return T.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.In.length,T.resolve()}ys(e,n){return this._s(e)}_s(e){return this.In.length===0?0:e-this.In[0].batchId}ws(e){const n=this._s(e);return n<0||n>=this.In.length?null:this.In[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cM{constructor(e,n){this.Ht=e,this.ps=n,this.docs=new Ve(j.comparator),this.size=0}addEntry(e,n,r){const i=n.key,s=this.docs.get(i),o=s?s.size:0,a=this.ps(n);return this.docs=this.docs.insert(i,{document:n.clone(),size:a,readTime:r}),this.size+=a-o,this.Ht.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return T.resolve(r?r.document.clone():Ee.newInvalidDocument(n))}getEntries(e,n){let r=dn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.clone():Ee.newInvalidDocument(i))}),T.resolve(r)}getDocumentsMatchingQuery(e,n,r){let i=dn();const s=new j(n.path.child("")),o=this.docs.getIteratorFrom(s);for(;o.hasNext();){const{key:a,value:{document:u,readTime:l}}=o.getNext();if(!n.path.isPrefixOf(a.path))break;l.compareTo(r)<=0||Eu(n,u)&&(i=i.insert(u.key,u.clone()))}return T.resolve(i)}Ts(e,n){return T.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new hM(this)}getSize(e){return T.resolve(this.size)}}class hM extends CT{constructor(e){super(),this.Se=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.document.isValidDocument()?n.push(this.Se.addEntry(e,i.document,this.getReadTime(r))):this.Se.removeEntry(r)}),T.waitFor(n)}getFromCache(e,n){return this.Se.getEntry(e,n)}getAllFromCache(e,n){return this.Se.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dM{constructor(e){this.persistence=e,this.Es=new vo(n=>wu(n),Ih),this.lastRemoteSnapshotVersion=Q.min(),this.highestTargetId=0,this.Is=0,this.As=new Fg,this.targetCount=0,this.Rs=Hi.se()}forEachTarget(e,n){return this.Es.forEach((r,i)=>n(i)),T.resolve()}getLastRemoteSnapshotVersion(e){return T.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return T.resolve(this.Is)}allocateTargetId(e){return this.highestTargetId=this.Rs.next(),T.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Is&&(this.Is=n),T.resolve()}ae(e){this.Es.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Rs=new Hi(n),this.highestTargetId=n),e.sequenceNumber>this.Is&&(this.Is=e.sequenceNumber)}addTargetData(e,n){return this.ae(n),this.targetCount+=1,T.resolve()}updateTargetData(e,n){return this.ae(n),T.resolve()}removeTargetData(e,n){return this.Es.delete(n.target),this.As.cs(n.targetId),this.targetCount-=1,T.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Es.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Es.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),T.waitFor(s).next(()=>i)}getTargetCount(e){return T.resolve(this.targetCount)}getTargetData(e,n){const r=this.Es.get(n)||null;return T.resolve(r)}addMatchingKeys(e,n,r){return this.As.ss(n,r),T.resolve()}removeMatchingKeys(e,n,r){this.As.os(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),T.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.As.cs(n),T.resolve()}getMatchingKeysForTargetId(e,n){const r=this.As.hs(n);return T.resolve(r)}containsKey(e,n){return T.resolve(this.As.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fM{constructor(e,n){this.bs={},this.Le=new Zt(0),this.Be=!1,this.Be=!0,this.referenceDelegate=e(this),this.ze=new dM(this),this.Ht=new qL,this.He=function(r,i){return new cM(r,i)}(this.Ht,r=>this.referenceDelegate.Ps(r)),this.N=new fT(n),this.Je=new uM(this.N)}start(){return Promise.resolve()}shutdown(){return this.Be=!1,Promise.resolve()}get started(){return this.Be}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(){return this.Ht}getMutationQueue(e){let n=this.bs[e.toKey()];return n||(n=new lM(this.Ht,this.referenceDelegate),this.bs[e.toKey()]=n),n}getTargetCache(){return this.ze}getRemoteDocumentCache(){return this.He}getBundleCache(){return this.Je}runTransaction(e,n,r){N("MemoryPersistence","Starting transaction:",e);const i=new pM(this.Le.next());return this.referenceDelegate.vs(),r(i).next(s=>this.referenceDelegate.Vs(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ss(e,n){return T.or(Object.values(this.bs).map(r=>()=>r.containsKey(e,n)))}}class pM extends cT{constructor(e){super(),this.currentSequenceNumber=e}}class Vg{constructor(e){this.persistence=e,this.Ds=new Fg,this.Cs=null}static Ns(e){return new Vg(e)}get xs(){if(this.Cs)return this.Cs;throw q()}addReference(e,n,r){return this.Ds.addReference(r,n),this.xs.delete(r.toString()),T.resolve()}removeReference(e,n,r){return this.Ds.removeReference(r,n),this.xs.add(r.toString()),T.resolve()}markPotentiallyOrphaned(e,n){return this.xs.add(n.toString()),T.resolve()}removeTarget(e,n){this.Ds.cs(n.targetId).forEach(i=>this.xs.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.xs.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}vs(){this.Cs=new Set}Vs(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return T.forEach(this.xs,r=>{const i=j.fromPath(r);return this.ks(e,i).next(s=>{s||n.removeEntry(i)})}).next(()=>(this.Cs=null,n.apply(e)))}updateLimboDocument(e,n){return this.ks(e,n).next(r=>{r?this.xs.delete(n.toString()):this.xs.add(n.toString())})}Ps(e){return 0}ks(e,n){return T.or([()=>T.resolve(this.Ds.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ss(e,n)])}}/**
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
 */function $T(t,e){return`firestore_clients_${t}_${e}`}function UT(t,e,n){let r=`firestore_mutations_${t}_${n}`;return e.isAuthenticated()&&(r+=`_${e.uid}`),r}function Bg(t,e){return`firestore_targets_${t}_${e}`}class Fh{constructor(e,n,r,i){this.user=e,this.batchId=n,this.state=r,this.error=i}static $s(e,n,r){const i=JSON.parse(r);let s,o=typeof i=="object"&&["pending","acknowledged","rejected"].indexOf(i.state)!==-1&&(i.error===void 0||typeof i.error=="object");return o&&i.error&&(o=typeof i.error.message=="string"&&typeof i.error.code=="string",o&&(s=new C(i.error.code,i.error.message))),o?new Fh(e,n,i.state,s):(De("SharedClientState",`Failed to parse mutation state for ID '${n}': ${r}`),null)}Os(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Ou{constructor(e,n,r){this.targetId=e,this.state=n,this.error=r}static $s(e,n){const r=JSON.parse(n);let i,s=typeof r=="object"&&["not-current","current","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return s&&r.error&&(s=typeof r.error.message=="string"&&typeof r.error.code=="string",s&&(i=new C(r.error.code,r.error.message))),s?new Ou(e,r.state,i):(De("SharedClientState",`Failed to parse target state for ID '${e}': ${n}`),null)}Os(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Vh{constructor(e,n){this.clientId=e,this.activeTargetIds=n}static $s(e,n){const r=JSON.parse(n);let i=typeof r=="object"&&r.activeTargetIds instanceof Array,s=Nh();for(let o=0;i&&o<r.activeTargetIds.length;++o)i=f1(r.activeTargetIds[o]),s=s.add(r.activeTargetIds[o]);return i?new Vh(e,s):(De("SharedClientState",`Failed to parse client data for instance '${e}': ${n}`),null)}}class jg{constructor(e,n){this.clientId=e,this.onlineState=n}static $s(e){const n=JSON.parse(e);return typeof n=="object"&&["Unknown","Online","Offline"].indexOf(n.onlineState)!==-1&&typeof n.clientId=="string"?new jg(n.clientId,n.onlineState):(De("SharedClientState",`Failed to parse online state: ${e}`),null)}}class zg{constructor(){this.activeTargetIds=Nh()}Fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ms(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Os(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class qg{constructor(e,n,r,i,s){this.window=e,this.Oe=n,this.persistenceKey=r,this.Ls=i,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.Bs=this.Us.bind(this),this.qs=new Ve(J),this.started=!1,this.Ks=[];const o=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=s,this.js=$T(this.persistenceKey,this.Ls),this.Qs=function(a){return`firestore_sequence_number_${a}`}(this.persistenceKey),this.qs=this.qs.insert(this.Ls,new zg),this.Ws=new RegExp(`^firestore_clients_${o}_([^_]*)$`),this.Gs=new RegExp(`^firestore_mutations_${o}_(\\d+)(?:_(.*))?$`),this.zs=new RegExp(`^firestore_targets_${o}_(\\d+)$`),this.Hs=function(a){return`firestore_online_state_${a}`}(this.persistenceKey),this.Js=function(a){return`firestore_bundle_loaded_${a}`}(this.persistenceKey),this.window.addEventListener("storage",this.Bs)}static bt(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.pn();for(const r of e){if(r===this.Ls)continue;const i=this.getItem($T(this.persistenceKey,r));if(i){const s=Vh.$s(r,i);s&&(this.qs=this.qs.insert(s.clientId,s))}}this.Ys();const n=this.storage.getItem(this.Hs);if(n){const r=this.Xs(n);r&&this.Zs(r)}for(const r of this.Ks)this.Us(r);this.Ks=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.Qs,JSON.stringify(e))}getAllActiveQueryTargets(){return this.ti(this.qs)}isActiveQueryTarget(e){let n=!1;return this.qs.forEach((r,i)=>{i.activeTargetIds.has(e)&&(n=!0)}),n}addPendingMutation(e){this.ei(e,"pending")}updateMutationState(e,n,r){this.ei(e,n,r),this.ni(e)}addLocalQueryTarget(e){let n="not-current";if(this.isActiveQueryTarget(e)){const r=this.storage.getItem(Bg(this.persistenceKey,e));if(r){const i=Ou.$s(e,r);i&&(n=i.state)}}return this.si.Fs(e),this.Ys(),n}removeLocalQueryTarget(e){this.si.Ms(e),this.Ys()}isLocalQueryTarget(e){return this.si.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(Bg(this.persistenceKey,e))}updateQueryState(e,n,r){this.ii(e,n,r)}handleUserChange(e,n,r){n.forEach(i=>{this.ni(i)}),this.currentUser=e,r.forEach(i=>{this.addPendingMutation(i)})}setOnlineState(e){this.ri(e)}notifyBundleLoaded(){this.oi()}shutdown(){this.started&&(this.window.removeEventListener("storage",this.Bs),this.removeItem(this.js),this.started=!1)}getItem(e){const n=this.storage.getItem(e);return N("SharedClientState","READ",e,n),n}setItem(e,n){N("SharedClientState","SET",e,n),this.storage.setItem(e,n)}removeItem(e){N("SharedClientState","REMOVE",e),this.storage.removeItem(e)}Us(e){const n=e;if(n.storageArea===this.storage){if(N("SharedClientState","EVENT",n.key,n.newValue),n.key===this.js)return void De("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.Oe.enqueueRetryable(async()=>{if(this.started){if(n.key!==null){if(this.Ws.test(n.key)){if(n.newValue==null){const r=this.ai(n.key);return this.ci(r,null)}{const r=this.ui(n.key,n.newValue);if(r)return this.ci(r.clientId,r)}}else if(this.Gs.test(n.key)){if(n.newValue!==null){const r=this.hi(n.key,n.newValue);if(r)return this.li(r)}}else if(this.zs.test(n.key)){if(n.newValue!==null){const r=this.fi(n.key,n.newValue);if(r)return this.di(r)}}else if(n.key===this.Hs){if(n.newValue!==null){const r=this.Xs(n.newValue);if(r)return this.Zs(r)}}else if(n.key===this.Qs){const r=function(i){let s=Zt.T;if(i!=null)try{const o=JSON.parse(i);H(typeof o=="number"),s=o}catch(o){De("SharedClientState","Failed to read sequence number from WebStorage",o)}return s}(n.newValue);r!==Zt.T&&this.sequenceNumberHandler(r)}else if(n.key===this.Js)return this.syncEngine.wi()}}else this.Ks.push(n)})}}get si(){return this.qs.get(this.Ls)}Ys(){this.setItem(this.js,this.si.Os())}ei(e,n,r){const i=new Fh(this.currentUser,e,n,r),s=UT(this.persistenceKey,this.currentUser,e);this.setItem(s,i.Os())}ni(e){const n=UT(this.persistenceKey,this.currentUser,e);this.removeItem(n)}ri(e){const n={clientId:this.Ls,onlineState:e};this.storage.setItem(this.Hs,JSON.stringify(n))}ii(e,n,r){const i=Bg(this.persistenceKey,e),s=new Ou(e,n,r);this.setItem(i,s.Os())}oi(){this.setItem(this.Js,"value-not-used")}ai(e){const n=this.Ws.exec(e);return n?n[1]:null}ui(e,n){const r=this.ai(e);return Vh.$s(r,n)}hi(e,n){const r=this.Gs.exec(e),i=Number(r[1]),s=r[2]!==void 0?r[2]:null;return Fh.$s(new ct(s),i,n)}fi(e,n){const r=this.zs.exec(e),i=Number(r[1]);return Ou.$s(i,n)}Xs(e){return jg.$s(e)}async li(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine._i(e.batchId,e.state,e.error);N("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}di(e){return this.syncEngine.mi(e.targetId,e.state,e.error)}ci(e,n){const r=n?this.qs.insert(e,n):this.qs.remove(e),i=this.ti(this.qs),s=this.ti(r),o=[],a=[];return s.forEach(u=>{i.has(u)||o.push(u)}),i.forEach(u=>{s.has(u)||a.push(u)}),this.syncEngine.gi(o,a).then(()=>{this.qs=r})}Zs(e){this.qs.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}ti(e){let n=Nh();return e.forEach((r,i)=>{n=n.unionWith(i.activeTargetIds)}),n}}class FT{constructor(){this.yi=new zg,this.pi={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.yi.Fs(e),this.pi[e]||"not-current"}updateQueryState(e,n,r){this.pi[e]=n}removeLocalQueryTarget(e){this.yi.Ms(e)}isLocalQueryTarget(e){return this.yi.activeTargetIds.has(e)}clearQueryState(e){delete this.pi[e]}getAllActiveQueryTargets(){return this.yi.activeTargetIds}isActiveQueryTarget(e){return this.yi.activeTargetIds.has(e)}start(){return this.yi=new zg,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(){}}/**
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
 */class mM{Ti(e){}shutdown(){}}/**
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
 */class VT{constructor(){this.Ei=()=>this.Ii(),this.Ai=()=>this.Ri(),this.bi=[],this.Pi()}Ti(e){this.bi.push(e)}shutdown(){window.removeEventListener("online",this.Ei),window.removeEventListener("offline",this.Ai)}Pi(){window.addEventListener("online",this.Ei),window.addEventListener("offline",this.Ai)}Ii(){N("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.bi)e(0)}Ri(){N("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.bi)e(1)}static bt(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gM={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yM{constructor(e){this.vi=e.vi,this.Vi=e.Vi}Si(e){this.Di=e}Ci(e){this.Ni=e}onMessage(e){this.xi=e}close(){this.Vi()}send(e){this.vi(e)}ki(){this.Di()}$i(e){this.Ni(e)}Oi(e){this.xi(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vM extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.Fi=n+"://"+e.host,this.Mi="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}Li(e,n,r,i){const s=this.Bi(e,n);N("RestConnection","Sending: ",s,r);const o={};return this.Ui(o,i),this.qi(e,s,o,r).then(a=>(N("RestConnection","Received: ",a),a),a=>{throw pu("RestConnection",`${e} failed with error: `,a,"url: ",s,"request:",r),a})}Ki(e,n,r,i){return this.Li(e,n,r,i)}Ui(e,n){if(e["X-Goog-Api-Client"]="gl-js/ fire/"+Js,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n)for(const r in n.authHeaders)n.authHeaders.hasOwnProperty(r)&&(e[r]=n.authHeaders[r])}Bi(e,n){const r=gM[e];return`${this.Fi}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}qi(e,n,r,i){return new Promise((s,o)=>{const a=new VO;a.listenOnce($O.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case cg.NO_ERROR:const l=a.getResponseJson();N("Connection","XHR received:",JSON.stringify(l)),s(l);break;case cg.TIMEOUT:N("Connection",'RPC "'+e+'" timed out'),o(new C(E.DEADLINE_EXCEEDED,"Request time out"));break;case cg.HTTP_ERROR:const c=a.getStatus();if(N("Connection",'RPC "'+e+'" failed with status:',c,"response text:",a.getResponseText()),c>0){const h=a.getResponseJson().error;if(h&&h.status&&h.message){const d=function(g){const y=g.toLowerCase().replace(/_/g,"-");return Object.values(E).indexOf(y)>=0?y:E.UNKNOWN}(h.status);o(new C(d,h.message))}else o(new C(E.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new C(E.UNAVAILABLE,"Connection failed."));break;default:q()}}finally{N("Connection",'RPC "'+e+'" completed.')}});const u=JSON.stringify(i);a.send(n,"POST",u,r,15)})}ji(e,n){const r=[this.Fi,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=LO(),s=MO(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new FO({})),this.Ui(o.initMessageHeaders,n),g_()||wc()||$A()||Lp()||UA()||Op()||(o.httpHeadersOverwriteParam="$httpHeaders");const a=r.join("");N("Connection","Creating WebChannel: "+a,o);const u=i.createWebChannel(a,o);let l=!1,c=!1;const h=new yM({vi:g=>{c?N("Connection","Not sending because WebChannel is closed:",g):(l||(N("Connection","Opening WebChannel transport."),u.open(),l=!0),N("Connection","WebChannel sending:",g),u.send(g))},Vi:()=>u.close()}),d=(g,y,_)=>{g.listen(y,f=>{try{_(f)}catch(p){setTimeout(()=>{throw p},0)}})};return d(u,yh.EventType.OPEN,()=>{c||N("Connection","WebChannel transport opened.")}),d(u,yh.EventType.CLOSE,()=>{c||(c=!0,N("Connection","WebChannel transport closed"),h.$i())}),d(u,yh.EventType.ERROR,g=>{c||(c=!0,pu("Connection","WebChannel transport errored:",g),h.$i(new C(E.UNAVAILABLE,"The operation could not be completed")))}),d(u,yh.EventType.MESSAGE,g=>{var y;if(!c){const _=g.data[0];H(!!_);const f=_,p=f.error||((y=f[0])===null||y===void 0?void 0:y.error);if(p){N("Connection","WebChannel received error:",p);const m=p.status;let w=function(P){const b=Me[P];if(b!==void 0)return V1(b)}(m),v=p.message;w===void 0&&(w=E.INTERNAL,v="Unknown error status: "+m+" with message "+p.message),c=!0,h.$i(new C(w,v)),u.close()}else N("Connection","WebChannel received:",_),h.Oi(_)}}),d(s,UO.STAT_EVENT,g=>{g.stat===s1.PROXY?N("Connection","Detected buffering proxy"):g.stat===s1.NOPROXY&&N("Connection","Detected no buffering proxy")}),setTimeout(()=>{h.ki()},0),h}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function BT(){return typeof window!="undefined"?window:null}function Bh(){return typeof document!="undefined"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lu(t){return new kL(t,!0)}class Hg{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Oe=e,this.timerId=n,this.Qi=r,this.Wi=i,this.Gi=s,this.zi=0,this.Hi=null,this.Ji=Date.now(),this.reset()}reset(){this.zi=0}Yi(){this.zi=this.Gi}Xi(e){this.cancel();const n=Math.floor(this.zi+this.Zi()),r=Math.max(0,Date.now()-this.Ji),i=Math.max(0,n-r);i>0&&N("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.zi} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Hi=this.Oe.enqueueAfterDelay(this.timerId,i,()=>(this.Ji=Date.now(),e())),this.zi*=this.Wi,this.zi<this.Qi&&(this.zi=this.Qi),this.zi>this.Gi&&(this.zi=this.Gi)}tr(){this.Hi!==null&&(this.Hi.skipDelay(),this.Hi=null)}cancel(){this.Hi!==null&&(this.Hi.cancel(),this.Hi=null)}Zi(){return(Math.random()-.5)*this.zi}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jT{constructor(e,n,r,i,s,o){this.Oe=e,this.er=r,this.nr=i,this.credentialsProvider=s,this.listener=o,this.state=0,this.sr=0,this.ir=null,this.stream=null,this.rr=new Hg(e,n)}ar(){return this.state===1||this.state===2||this.state===4}cr(){return this.state===2}start(){this.state!==3?this.auth():this.ur()}async stop(){this.ar()&&await this.close(0)}hr(){this.state=0,this.rr.reset()}lr(){this.cr()&&this.ir===null&&(this.ir=this.Oe.enqueueAfterDelay(this.er,6e4,()=>this.dr()))}wr(e){this._r(),this.stream.send(e)}async dr(){if(this.cr())return this.close(0)}_r(){this.ir&&(this.ir.cancel(),this.ir=null)}async close(e,n){this._r(),this.rr.cancel(),this.sr++,e!==3?this.rr.reset():n&&n.code===E.RESOURCE_EXHAUSTED?(De(n.toString()),De("Using maximum backoff delay to prevent overloading the backend."),this.rr.Yi()):n&&n.code===E.UNAUTHENTICATED&&this.credentialsProvider.invalidateToken(),this.stream!==null&&(this.mr(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ci(n)}mr(){}auth(){this.state=1;const e=this.gr(this.sr),n=this.sr;this.credentialsProvider.getToken().then(r=>{this.sr===n&&this.yr(r)},r=>{e(()=>{const i=new C(E.UNKNOWN,"Fetching auth token failed: "+r.message);return this.pr(i)})})}yr(e){const n=this.gr(this.sr);this.stream=this.Tr(e),this.stream.Si(()=>{n(()=>(this.state=2,this.listener.Si()))}),this.stream.Ci(r=>{n(()=>this.pr(r))}),this.stream.onMessage(r=>{n(()=>this.onMessage(r))})}ur(){this.state=4,this.rr.Xi(async()=>{this.state=0,this.start()})}pr(e){return N("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(3,e)}gr(e){return n=>{this.Oe.enqueueAndForget(()=>this.sr===e?n():(N("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class wM extends jT{constructor(e,n,r,i,s){super(e,"listen_stream_connection_backoff","listen_stream_idle",n,r,s),this.N=i}Tr(e){return this.nr.ji("Listen",e)}onMessage(e){this.rr.reset();const n=AL(this.N,e),r=function(i){if(!("targetChange"in i))return Q.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?Q.min():s.readTime?Ye(s.readTime):Q.min()}(e);return this.listener.Er(n,r)}Ir(e){const n={};n.database=Nu(this.N),n.addTarget=function(i,s){let o;const a=s.target;return o=Eh(a)?{documents:tT(i,a)}:{query:nT(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0?o.resumeToken=K1(i,s.resumeToken):s.snapshotVersion.compareTo(Q.min())>0&&(o.readTime=Au(i,s.snapshotVersion.toTimestamp())),o}(this.N,e);const r=NL(this.N,e);r&&(n.labels=r),this.wr(n)}Ar(e){const n={};n.database=Nu(this.N),n.removeTarget=e,this.wr(n)}}class _M extends jT{constructor(e,n,r,i,s){super(e,"write_stream_connection_backoff","write_stream_idle",n,r,s),this.N=i,this.Rr=!1}get br(){return this.Rr}start(){this.Rr=!1,this.lastStreamToken=void 0,super.start()}mr(){this.Rr&&this.Pr([])}Tr(e){return this.nr.ji("Write",e)}onMessage(e){if(H(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Rr){this.rr.reset();const n=RL(e.writeResults,e.commitTime),r=Ye(e.commitTime);return this.listener.vr(r,n)}return H(!e.writeResults||e.writeResults.length===0),this.Rr=!0,this.listener.Vr()}Sr(){const e={};e.database=Nu(this.N),this.wr(e)}Pr(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>xh(this.N,r))};this.wr(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IM extends class{}{constructor(e,n,r){super(),this.credentials=e,this.nr=n,this.N=r,this.Dr=!1}Cr(){if(this.Dr)throw new C(E.FAILED_PRECONDITION,"The client has already been terminated.")}Li(e,n,r){return this.Cr(),this.credentials.getToken().then(i=>this.nr.Li(e,n,r,i)).catch(i=>{throw i.name==="FirebaseError"?(i.code===E.UNAUTHENTICATED&&this.credentials.invalidateToken(),i):new C(E.UNKNOWN,i.toString())})}Ki(e,n,r){return this.Cr(),this.credentials.getToken().then(i=>this.nr.Ki(e,n,r,i)).catch(i=>{throw i.name==="FirebaseError"?(i.code===E.UNAUTHENTICATED&&this.credentials.invalidateToken(),i):new C(E.UNKNOWN,i.toString())})}terminate(){this.Dr=!0}}class EM{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.Nr=0,this.kr=null,this.$r=!0}Or(){this.Nr===0&&(this.Fr("Unknown"),this.kr=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.kr=null,this.Mr("Backend didn't respond within 10 seconds."),this.Fr("Offline"),Promise.resolve())))}Lr(e){this.state==="Online"?this.Fr("Unknown"):(this.Nr++,this.Nr>=1&&(this.Br(),this.Mr(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.Fr("Offline")))}set(e){this.Br(),this.Nr=0,e==="Online"&&(this.$r=!1),this.Fr(e)}Fr(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}Mr(e){const n=`Could not reach Cloud Firestore backend. ${e}
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
 */class TM{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ur=[],this.qr=new Map,this.Kr=new Set,this.jr=[],this.Qr=s,this.Qr.Ti(o=>{r.enqueueAndForget(async()=>{ei(this)&&(N("RemoteStore","Restarting streams for network reachability change."),await async function(a){const u=L(a);u.Kr.add(4),await Io(u),u.Wr.set("Unknown"),u.Kr.delete(4),await Mu(u)}(this))})}),this.Wr=new EM(r,i)}}async function Mu(t){if(ei(t))for(const e of t.jr)await e(!0)}async function Io(t){for(const e of t.jr)await e(!1)}function jh(t,e){const n=L(t);n.qr.has(e.targetId)||(n.qr.set(e.targetId,e),Kg(n)?Gg(n):To(n).cr()&&Wg(n,e))}function $u(t,e){const n=L(t),r=To(n);n.qr.delete(e),r.cr()&&zT(n,e),n.qr.size===0&&(r.cr()?r.lr():ei(n)&&n.Wr.set("Unknown"))}function Wg(t,e){t.Gr.Y(e.targetId),To(t).Ir(e)}function zT(t,e){t.Gr.Y(e),To(t).Ar(e)}function Gg(t){t.Gr=new EL({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Tt:e=>t.qr.get(e)||null}),To(t).start(),t.Wr.Or()}function Kg(t){return ei(t)&&!To(t).ar()&&t.qr.size>0}function ei(t){return L(t).Kr.size===0}function qT(t){t.Gr=void 0}async function SM(t){t.qr.forEach((e,n)=>{Wg(t,e)})}async function kM(t,e){qT(t),Kg(t)?(t.Wr.Lr(e),Gg(t)):t.Wr.set("Unknown")}async function CM(t,e,n){if(t.Wr.set("Online"),e instanceof q1&&e.state===2&&e.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r.qr.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r.qr.delete(o),r.Gr.removeTarget(o))}(t,e)}catch(r){N("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await zh(t,r)}else if(e instanceof Ph?t.Gr.rt(e):e instanceof z1?t.Gr.ft(e):t.Gr.ct(e),!n.isEqual(Q.min()))try{const r=await DT(t.localStore);n.compareTo(r)>=0&&await function(i,s){const o=i.Gr._t(s);return o.targetChanges.forEach((a,u)=>{if(a.resumeToken.approximateByteSize()>0){const l=i.qr.get(u);l&&i.qr.set(u,l.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach(a=>{const u=i.qr.get(a);if(!u)return;i.qr.set(a,u.withResumeToken(Qe.EMPTY_BYTE_STRING,u.snapshotVersion)),zT(i,a);const l=new Yr(u.target,a,1,u.sequenceNumber);Wg(i,l)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){N("RemoteStore","Failed to raise snapshot:",r),await zh(t,r)}}async function zh(t,e,n){if(!zi(e))throw e;t.Kr.add(1),await Io(t),t.Wr.set("Offline"),n||(n=()=>DT(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{N("RemoteStore","Retrying IndexedDB access"),await n(),t.Kr.delete(1),await Mu(t)})}function HT(t,e){return e().catch(n=>zh(t,n,e))}async function Eo(t){const e=L(t),n=ti(e);let r=e.Ur.length>0?e.Ur[e.Ur.length-1].batchId:-1;for(;bM(e);)try{const i=await iM(e.localStore,r);if(i===null){e.Ur.length===0&&n.lr();break}r=i.batchId,AM(e,i)}catch(i){await zh(e,i)}WT(e)&&GT(e)}function bM(t){return ei(t)&&t.Ur.length<10}function AM(t,e){t.Ur.push(e);const n=ti(t);n.cr()&&n.br&&n.Pr(e.mutations)}function WT(t){return ei(t)&&!ti(t).ar()&&t.Ur.length>0}function GT(t){ti(t).start()}async function RM(t){ti(t).Sr()}async function NM(t){const e=ti(t);for(const n of t.Ur)e.Pr(n.mutations)}async function PM(t,e,n){const r=t.Ur.shift(),i=Rg.from(r,e,n);await HT(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Eo(t)}async function xM(t,e){e&&ti(t).br&&await async function(n,r){if(i=r.code,F1(i)&&i!==E.ABORTED){const s=n.Ur.shift();ti(n).hr(),await HT(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,r)),await Eo(n)}var i}(t,e),WT(t)&&GT(t)}async function Qg(t,e){const n=L(t);e?(n.Kr.delete(2),await Mu(n)):e||(n.Kr.add(2),await Io(n),n.Wr.set("Unknown"))}function To(t){return t.zr||(t.zr=function(e,n,r){const i=L(e);return i.Cr(),new wM(n,i.nr,i.credentials,i.N,r)}(t.datastore,t.asyncQueue,{Si:SM.bind(null,t),Ci:kM.bind(null,t),Er:CM.bind(null,t)}),t.jr.push(async e=>{e?(t.zr.hr(),Kg(t)?Gg(t):t.Wr.set("Unknown")):(await t.zr.stop(),qT(t))})),t.zr}function ti(t){return t.Hr||(t.Hr=function(e,n,r){const i=L(e);return i.Cr(),new _M(n,i.nr,i.credentials,i.N,r)}(t.datastore,t.asyncQueue,{Si:RM.bind(null,t),Ci:xM.bind(null,t),Vr:NM.bind(null,t),vr:PM.bind(null,t)}),t.jr.push(async e=>{e?(t.Hr.hr(),await Eo(t)):(await t.Hr.stop(),t.Ur.length>0&&(N("RemoteStore",`Stopping write stream with ${t.Ur.length} pending writes`),t.Ur=[]))})),t.Hr}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yg{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Ge,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new Yg(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new C(E.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function So(t,e){if(De("AsyncQueue",`${e}: ${t}`),zi(t))return new C(E.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko{constructor(e){this.comparator=e?(n,r)=>e(n,r)||j.comparator(n.key,r.key):(n,r)=>j.comparator(n.key,r.key),this.keyedMap=Sg(),this.sortedSet=new Ve(this.comparator)}static emptySet(e){return new ko(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ko)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new ko;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KT{constructor(){this.Jr=new Ve(j.comparator)}track(e){const n=e.doc.key,r=this.Jr.get(n);r?e.type!==0&&r.type===3?this.Jr=this.Jr.insert(n,e):e.type===3&&r.type!==1?this.Jr=this.Jr.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Jr=this.Jr.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Jr=this.Jr.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Jr=this.Jr.remove(n):e.type===1&&r.type===2?this.Jr=this.Jr.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Jr=this.Jr.insert(n,{type:2,doc:e.doc}):q():this.Jr=this.Jr.insert(n,e)}Yr(){const e=[];return this.Jr.inorderTraversal((n,r)=>{e.push(r)}),e}}class Co{constructor(e,n,r,i,s,o,a,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u}static fromInitialDocuments(e,n,r,i){const s=[];return n.forEach(o=>{s.push({type:0,doc:o})}),new Co(e,n,ko.emptySet(n),s,r,i,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Iu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DM{constructor(){this.Xr=void 0,this.listeners=[]}}class OM{constructor(){this.queries=new vo(e=>S1(e),Iu),this.onlineState="Unknown",this.Zr=new Set}}async function Xg(t,e){const n=L(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new DM),i)try{s.Xr=await n.onListen(r)}catch(o){const a=So(o,`Initialization of query '${Ig(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.eo(n.onlineState),s.Xr&&e.no(s.Xr)&&Zg(n)}async function Jg(t,e){const n=L(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function LM(t,e){const n=L(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.no(i)&&(r=!0);o.Xr=i}}r&&Zg(n)}function MM(t,e,n){const r=L(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function Zg(t){t.Zr.forEach(e=>{e.next()})}class ey{constructor(e,n,r){this.query=e,this.so=n,this.io=!1,this.ro=null,this.onlineState="Unknown",this.options=r||{}}no(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Co(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let n=!1;return this.io?this.oo(e)&&(this.so.next(e),n=!0):this.ao(e,this.onlineState)&&(this.co(e),n=!0),this.ro=e,n}onError(e){this.so.error(e)}eo(e){this.onlineState=e;let n=!1;return this.ro&&!this.io&&this.ao(this.ro,e)&&(this.co(this.ro),n=!0),n}ao(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.uo||!r)&&(!e.docs.isEmpty()||n==="Offline")}oo(e){if(e.docChanges.length>0)return!0;const n=this.ro&&this.ro.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}co(e){e=Co.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.io=!0,this.so.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $M{constructor(e,n){this.payload=e,this.byteLength=n}ho(){return"metadata"in this.payload}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QT{constructor(e){this.N=e}zn(e){return Fn(this.N,e)}Hn(e){return e.metadata.exists?Z1(this.N,e.document,!1):Ee.newNoDocument(this.zn(e.metadata.name),this.Jn(e.metadata.readTime))}Jn(e){return Ye(e)}}class UM{constructor(e,n,r){this.lo=e,this.localStore=n,this.N=r,this.queries=[],this.documents=[],this.progress=YT(e)}fo(e){this.progress.bytesLoaded+=e.byteLength;let n=this.progress.documentsLoaded;return e.payload.namedQuery?this.queries.push(e.payload.namedQuery):e.payload.documentMetadata?(this.documents.push({metadata:e.payload.documentMetadata}),e.payload.documentMetadata.exists||++n):e.payload.document&&(this.documents[this.documents.length-1].document=e.payload.document,++n),n!==this.progress.documentsLoaded?(this.progress.documentsLoaded=n,Object.assign({},this.progress)):null}wo(e){const n=new Map,r=new QT(this.N);for(const i of e)if(i.metadata.queries){const s=r.zn(i.metadata.name);for(const o of i.metadata.queries){const a=(n.get(o)||ce()).add(s);n.set(o,a)}}return n}async complete(){const e=await oM(this.localStore,new QT(this.N),this.documents,this.lo.id),n=this.wo(this.documents);for(const r of this.queries)await aM(this.localStore,r,n.get(r.name));return this.progress.taskState="Success",new eM(Object.assign({},this.progress),e)}}function YT(t){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:t.totalDocuments,totalBytes:t.totalBytes}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XT{constructor(e){this.key=e}}class JT{constructor(e){this.key=e}}class ZT{constructor(e,n){this.query=e,this._o=n,this.mo=null,this.current=!1,this.yo=ce(),this.mutatedKeys=ce(),this.po=k1(e),this.To=new ko(this.po)}get Eo(){return this._o}Io(e,n){const r=n?n.Ao:new KT,i=n?n.To:this.To;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const u=Sh(this.query)&&i.size===this.query.limit?i.last():null,l=kh(this.query)&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,h)=>{const d=i.get(c),g=Eu(this.query,h)?h:null,y=!!d&&this.mutatedKeys.has(d.key),_=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let f=!1;d&&g?d.data.isEqual(g.data)?y!==_&&(r.track({type:3,doc:g}),f=!0):this.Ro(d,g)||(r.track({type:2,doc:g}),f=!0,(u&&this.po(g,u)>0||l&&this.po(g,l)<0)&&(a=!0)):!d&&g?(r.track({type:0,doc:g}),f=!0):d&&!g&&(r.track({type:1,doc:d}),f=!0,(u||l)&&(a=!0)),f&&(g?(o=o.add(g),s=_?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),Sh(this.query)||kh(this.query))for(;o.size>this.query.limit;){const c=Sh(this.query)?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{To:o,Ao:r,Ln:a,mutatedKeys:s}}Ro(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.To;this.To=e.To,this.mutatedKeys=e.mutatedKeys;const s=e.Ao.Yr();s.sort((l,c)=>function(h,d){const g=y=>{switch(y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return q()}};return g(h)-g(d)}(l.type,c.type)||this.po(l.doc,c.doc)),this.bo(r);const o=n?this.Po():[],a=this.yo.size===0&&this.current?1:0,u=a!==this.mo;return this.mo=a,s.length!==0||u?{snapshot:new Co(this.query,e.To,i,s,e.mutatedKeys,a===0,u,!1),vo:o}:{vo:o}}eo(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({To:this.To,Ao:new KT,mutatedKeys:this.mutatedKeys,Ln:!1},!1)):{vo:[]}}Vo(e){return!this._o.has(e)&&!!this.To.has(e)&&!this.To.get(e).hasLocalMutations}bo(e){e&&(e.addedDocuments.forEach(n=>this._o=this._o.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this._o=this._o.delete(n)),this.current=e.current)}Po(){if(!this.current)return[];const e=this.yo;this.yo=ce(),this.To.forEach(r=>{this.Vo(r.key)&&(this.yo=this.yo.add(r.key))});const n=[];return e.forEach(r=>{this.yo.has(r)||n.push(new JT(r))}),this.yo.forEach(r=>{e.has(r)||n.push(new XT(r))}),n}So(e){this._o=e.Gn,this.yo=ce();const n=this.Io(e.documents);return this.applyChanges(n,!0)}Do(){return Co.fromInitialDocuments(this.query,this.To,this.mutatedKeys,this.mo===0)}}class FM{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class VM{constructor(e){this.key=e,this.Co=!1}}class BM{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.No={},this.xo=new vo(a=>S1(a),Iu),this.ko=new Map,this.$o=new Set,this.Oo=new Ve(j.comparator),this.Fo=new Map,this.Mo=new Fg,this.Lo={},this.Bo=new Map,this.Uo=Hi.ie(),this.onlineState="Unknown",this.qo=void 0}get isPrimaryClient(){return this.qo===!0}}async function jM(t,e){const n=oy(t);let r,i;const s=n.xo.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.Do();else{const o=await wo(n.localStore,hn(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await ty(n,e,r,a==="current"),n.isPrimaryClient&&jh(n.remoteStore,o)}return i}async function ty(t,e,n,r){t.Ko=(c,h,d)=>async function(g,y,_,f){let p=y.view.Io(_);p.Ln&&(p=await Uh(g.localStore,y.query,!1).then(({documents:v})=>y.view.Io(v,p)));const m=f&&f.targetChanges.get(y.targetId),w=y.view.applyChanges(p,g.isPrimaryClient,m);return iy(g,y.targetId,w.vo),w.snapshot}(t,c,h,d);const i=await Uh(t.localStore,e,!0),s=new ZT(e,i.Gn),o=s.Io(i.documents),a=bu.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline"),u=s.applyChanges(o,t.isPrimaryClient,a);iy(t,n,u.vo);const l=new FM(e,n,s);return t.xo.set(e,l),t.ko.has(n)?t.ko.get(n).push(e):t.ko.set(n,[e]),u.snapshot}async function zM(t,e){const n=L(t),r=n.xo.get(e),i=n.ko.get(r.targetId);if(i.length>1)return n.ko.set(r.targetId,i.filter(s=>!Iu(s,e))),void n.xo.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await _o(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),$u(n.remoteStore,r.targetId),bo(n,r.targetId)}).catch(Wi)):(bo(n,r.targetId),await _o(n.localStore,r.targetId,!0))}async function qM(t,e,n){const r=ay(t);try{const i=await function(s,o){const a=L(s),u=Ke.now(),l=o.reduce((h,d)=>h.add(d.key),ce());let c;return a.persistence.runTransaction("Locally write mutations","readwrite",h=>a.Qn.Pn(h,l).next(d=>{c=d;const g=[];for(const y of o){const _=mL(y,c.get(y.key));_!=null&&g.push(new Kr(y.key,_,y1(_.value.mapValue),Le.exists(!0)))}return a.In.addMutationBatch(h,u,g,o)})).then(h=>(h.applyToLocalDocumentSet(c),{batchId:h.batchId,changes:c}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,o,a){let u=s.Lo[s.currentUser.toKey()];u||(u=new Ve(J)),u=u.insert(o,a),s.Lo[s.currentUser.toKey()]=u}(r,i.batchId,n),await lr(r,i.changes),await Eo(r.remoteStore)}catch(i){const s=So(i,"Failed to persist write");n.reject(s)}}async function eS(t,e){const n=L(t);try{const r=await rM(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Fo.get(s);o&&(H(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Co=!0:i.modifiedDocuments.size>0?H(o.Co):i.removedDocuments.size>0&&(H(o.Co),o.Co=!1))}),await lr(n,r,e)}catch(r){await Wi(r)}}function tS(t,e,n){const r=L(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.xo.forEach((s,o)=>{const a=o.view.eo(e);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=L(s);a.onlineState=o;let u=!1;a.queries.forEach((l,c)=>{for(const h of c.listeners)h.eo(o)&&(u=!0)}),u&&Zg(a)}(r.eventManager,e),i.length&&r.No.Er(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function HM(t,e,n){const r=L(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Fo.get(e),s=i&&i.key;if(s){let o=new Ve(j.comparator);o=o.insert(s,Ee.newNoDocument(s,Q.min()));const a=ce().add(s),u=new Cu(Q.min(),new Map,new Ce(J),o,a);await eS(r,u),r.Oo=r.Oo.remove(s),r.Fo.delete(e),sy(r)}else await _o(r.localStore,e,!1).then(()=>bo(r,e,n)).catch(Wi)}async function WM(t,e){const n=L(t),r=e.batch.batchId;try{const i=await nM(n.localStore,e);ry(n,r,null),ny(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await lr(n,i)}catch(i){await Wi(i)}}async function GM(t,e,n){const r=L(t);try{const i=await function(s,o){const a=L(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let l;return a.In.lookupMutationBatch(u,o).next(c=>(H(c!==null),l=c.keys(),a.In.removeMutationBatch(u,c))).next(()=>a.In.performConsistencyCheck(u)).next(()=>a.Qn.Pn(u,l))})}(r.localStore,e);ry(r,e,n),ny(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await lr(r,i)}catch(i){await Wi(i)}}async function KM(t,e){const n=L(t);ei(n.remoteStore)||N("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const r=await function(s){const o=L(s);return o.persistence.runTransaction("Get highest unacknowledged batch id","readonly",a=>o.In.getHighestUnacknowledgedBatchId(a))}(n.localStore);if(r===-1)return void e.resolve();const i=n.Bo.get(r)||[];i.push(e),n.Bo.set(r,i)}catch(r){const i=So(r,"Initialization of waitForPendingWrites() operation failed");e.reject(i)}}function ny(t,e){(t.Bo.get(e)||[]).forEach(n=>{n.resolve()}),t.Bo.delete(e)}function ry(t,e,n){const r=L(t);let i=r.Lo[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Lo[r.currentUser.toKey()]=i}}function bo(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.ko.get(e))t.xo.delete(r),n&&t.No.jo(r,n);t.ko.delete(e),t.isPrimaryClient&&t.Mo.cs(e).forEach(r=>{t.Mo.containsKey(r)||nS(t,r)})}function nS(t,e){t.$o.delete(e.path.canonicalString());const n=t.Oo.get(e);n!==null&&($u(t.remoteStore,n),t.Oo=t.Oo.remove(e),t.Fo.delete(n),sy(t))}function iy(t,e,n){for(const r of n)r instanceof XT?(t.Mo.addReference(r.key,e),QM(t,r)):r instanceof JT?(N("SyncEngine","Document no longer in limbo: "+r.key),t.Mo.removeReference(r.key,e),t.Mo.containsKey(r.key)||nS(t,r.key)):q()}function QM(t,e){const n=e.key,r=n.path.canonicalString();t.Oo.get(n)||t.$o.has(r)||(N("SyncEngine","New document in limbo: "+n),t.$o.add(r),sy(t))}function sy(t){for(;t.$o.size>0&&t.Oo.size<t.maxConcurrentLimboResolutions;){const e=t.$o.values().next().value;t.$o.delete(e);const n=new j(ie.fromString(e)),r=t.Uo.next();t.Fo.set(r,new VM(n)),t.Oo=t.Oo.insert(n,r),jh(t.remoteStore,new Yr(hn(io(n.path)),r,2,Zt.T))}}async function lr(t,e,n){const r=L(t),i=[],s=[],o=[];r.xo.isEmpty()||(r.xo.forEach((a,u)=>{o.push(r.Ko(u,e,n).then(l=>{if(l){r.isPrimaryClient&&r.sharedClientState.updateQueryState(u.targetId,l.fromCache?"not-current":"current"),i.push(l);const c=Ug.kn(u.targetId,l);s.push(c)}}))}),await Promise.all(o),r.No.Er(i),await async function(a,u){const l=L(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",c=>T.forEach(u,h=>T.forEach(h.Nn,d=>l.persistence.referenceDelegate.addReference(c,h.targetId,d)).next(()=>T.forEach(h.xn,d=>l.persistence.referenceDelegate.removeReference(c,h.targetId,d)))))}catch(c){if(!zi(c))throw c;N("LocalStore","Failed to update sequence numbers: "+c)}for(const c of u){const h=c.targetId;if(!c.fromCache){const d=l.Un.get(h),g=d.snapshotVersion,y=d.withLastLimboFreeSnapshotVersion(g);l.Un=l.Un.insert(h,y)}}}(r.localStore,s))}async function YM(t,e){const n=L(t);if(!n.currentUser.isEqual(e)){N("SyncEngine","User change. New user:",e.toKey());const r=await xT(n.localStore,e);n.currentUser=e,function(i,s){i.Bo.forEach(o=>{o.forEach(a=>{a.reject(new C(E.CANCELLED,s))})}),i.Bo.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await lr(n,r.Wn)}}function XM(t,e){const n=L(t),r=n.Fo.get(e);if(r&&r.Co)return ce().add(r.key);{let i=ce();const s=n.ko.get(e);if(!s)return i;for(const o of s){const a=n.xo.get(o);i=i.unionWith(a.view.Eo)}return i}}async function JM(t,e){const n=L(t),r=await Uh(n.localStore,e.query,!0),i=e.view.So(r);return n.isPrimaryClient&&iy(n,e.targetId,i.vo),i}async function ZM(t){const e=L(t);return MT(e.localStore).then(n=>lr(e,n))}async function e$(t,e,n,r){const i=L(t),s=await function(o,a){const u=L(o),l=L(u.In);return u.persistence.runTransaction("Lookup mutation documents","readonly",c=>l.Xt(c,a).next(h=>h?u.Qn.Pn(c,h):T.resolve(null)))}(i.localStore,e);s!==null?(n==="pending"?await Eo(i.remoteStore):n==="acknowledged"||n==="rejected"?(ry(i,e,r||null),ny(i,e),function(o,a){L(L(o).In).te(a)}(i.localStore,e)):q(),await lr(i,s)):N("SyncEngine","Cannot apply mutation batch with id: "+e)}async function t$(t,e){const n=L(t);if(oy(n),ay(n),e===!0&&n.qo!==!0){const r=n.sharedClientState.getAllActiveQueryTargets(),i=await rS(n,r.toArray());n.qo=!0,await Qg(n.remoteStore,!0);for(const s of i)jh(n.remoteStore,s)}else if(e===!1&&n.qo!==!1){const r=[];let i=Promise.resolve();n.ko.forEach((s,o)=>{n.sharedClientState.isLocalQueryTarget(o)?r.push(o):i=i.then(()=>(bo(n,o),_o(n.localStore,o,!0))),$u(n.remoteStore,o)}),await i,await rS(n,r),function(s){const o=L(s);o.Fo.forEach((a,u)=>{$u(o.remoteStore,u)}),o.Mo.us(),o.Fo=new Map,o.Oo=new Ve(j.comparator)}(n),n.qo=!1,await Qg(n.remoteStore,!1)}}async function rS(t,e,n){const r=L(t),i=[],s=[];for(const o of e){let a;const u=r.ko.get(o);if(u&&u.length!==0){a=await wo(r.localStore,hn(u[0]));for(const l of u){const c=r.xo.get(l),h=await JM(r,c);h.snapshot&&s.push(h.snapshot)}}else{const l=await LT(r.localStore,o);a=await wo(r.localStore,l),await ty(r,iS(l),o,!1)}i.push(a)}return r.No.Er(s),i}function iS(t){return E1(t.path,t.collectionGroup,t.orderBy,t.filters,t.limit,"F",t.startAt,t.endAt)}function n$(t){const e=L(t);return L(L(e.localStore).persistence).pn()}async function r$(t,e,n,r){const i=L(t);if(i.qo)N("SyncEngine","Ignoring unexpected query state notification.");else if(i.ko.has(e))switch(n){case"current":case"not-current":{const s=await MT(i.localStore),o=Cu.createSynthesizedRemoteEventForCurrentChange(e,n==="current");await lr(i,s,o);break}case"rejected":await _o(i.localStore,e,!0),bo(i,e,r);break;default:q()}}async function i$(t,e,n){const r=oy(t);if(r.qo){for(const i of e){if(r.ko.has(i)){N("SyncEngine","Adding an already active target "+i);continue}const s=await LT(r.localStore,i),o=await wo(r.localStore,s);await ty(r,iS(s),o.targetId,!1),jh(r.remoteStore,o)}for(const i of n)r.ko.has(i)&&await _o(r.localStore,i,!1).then(()=>{$u(r.remoteStore,i),bo(r,i)}).catch(Wi)}}function oy(t){const e=L(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=eS.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=XM.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=HM.bind(null,e),e.No.Er=LM.bind(null,e.eventManager),e.No.jo=MM.bind(null,e.eventManager),e}function ay(t){const e=L(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=WM.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=GM.bind(null,e),e}function s$(t,e,n){const r=L(t);(async function(i,s,o){try{const a=await s.getMetadata();if(await function(h,d){const g=L(h),y=Ye(d.createTime);return g.persistence.runTransaction("hasNewerBundle","readonly",_=>g.Je.getBundleMetadata(_,d.id)).then(_=>!!_&&_.createTime.compareTo(y)>=0)}(i.localStore,a))return await s.close(),void o._completeWith(function(h){return{taskState:"Success",documentsLoaded:h.totalDocuments,bytesLoaded:h.totalBytes,totalDocuments:h.totalDocuments,totalBytes:h.totalBytes}}(a));o._updateProgress(YT(a));const u=new UM(a,i.localStore,s.N);let l=await s.Qo();for(;l;){const h=await u.fo(l);h&&o._updateProgress(h),l=await s.Qo()}const c=await u.complete();await lr(i,c.En,void 0),await function(h,d){const g=L(h);return g.persistence.runTransaction("Save bundle","readwrite",y=>g.Je.saveBundleMetadata(y,d))}(i.localStore,a),o._completeWith(c.progress)}catch(a){pu("SyncEngine",`Loading bundle failed with ${a}`),o._failWith(a)}})(r,e,n).then(()=>{r.sharedClientState.notifyBundleLoaded()})}class sS{constructor(){this.synchronizeTabs=!1}async initialize(e){this.N=Lu(e.databaseInfo.databaseId),this.sharedClientState=this.Wo(e),this.persistence=this.Go(e),await this.persistence.start(),this.gcScheduler=this.zo(e),this.localStore=this.Ho(e)}zo(e){return null}Ho(e){return PT(this.persistence,new NT,e.initialUser,this.N)}Go(e){return new fM(Vg.Ns,this.N)}Wo(e){return new FT}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class oS extends sS{constructor(e,n,r){super(),this.Jo=e,this.cacheSizeBytes=n,this.forceOwnership=r,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await sM(this.localStore),await this.Jo.initialize(this,e),await ay(this.Jo.syncEngine),await Eo(this.Jo.remoteStore),await this.persistence.nn(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(this.localStore),Promise.resolve()))}Ho(e){return PT(this.persistence,new NT,e.initialUser,this.N)}zo(e){const n=this.persistence.referenceDelegate.garbageCollector;return new KL(n,e.asyncQueue)}Go(e){const n=$g(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?Ht.withCacheSize(this.cacheSizeBytes):Ht.DEFAULT;return new Mg(this.synchronizeTabs,n,e.clientId,r,e.asyncQueue,BT(),Bh(),this.N,this.sharedClientState,!!this.forceOwnership)}Wo(e){return new FT}}class o$ extends oS{constructor(e,n){super(e,n,!1),this.Jo=e,this.cacheSizeBytes=n,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const n=this.Jo.syncEngine;this.sharedClientState instanceof qg&&(this.sharedClientState.syncEngine={_i:e$.bind(null,n),mi:r$.bind(null,n),gi:i$.bind(null,n),pn:n$.bind(null,n),wi:ZM.bind(null,n)},await this.sharedClientState.start()),await this.persistence.nn(async r=>{await t$(this.Jo.syncEngine,r),this.gcScheduler&&(r&&!this.gcScheduler.started?this.gcScheduler.start(this.localStore):r||this.gcScheduler.stop())})}Wo(e){const n=BT();if(!qg.bt(n))throw new C(E.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const r=$g(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new qg(n,e.asyncQueue,r,e.clientId,e.initialUser)}}class uy{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>tS(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=YM.bind(null,this.syncEngine),await Qg(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new OM}createDatastore(e){const n=Lu(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new vM(i));var i;return function(s,o,a){return new IM(s,o,a)}(e.credentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,i=e.asyncQueue,s=a=>tS(this.syncEngine,a,0),o=VT.bt()?new VT:new mM,new TM(n,r,i,s,o);var n,r,i,s,o}createSyncEngine(e,n){return function(r,i,s,o,a,u,l){const c=new BM(r,i,s,o,a,u);return l&&(c.qo=!0),c}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=L(e);N("RemoteStore","RemoteStore shutting down."),n.Kr.add(5),await Io(n),n.Qr.shutdown(),n.Wr.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aS(t,e=10240){let n=0;return{async read(){if(n<t.byteLength){const r={value:t.slice(n,n+e),done:!1};return n+=e,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.reject("unimplemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class qh{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Yo(this.observer.next,e)}error(e){this.observer.error?this.Yo(this.observer.error,e):console.error("Uncaught Error in snapshot listener:",e)}Xo(){this.muted=!0}Yo(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a${constructor(e,n){this.Zo=e,this.N=n,this.metadata=new Ge,this.buffer=new Uint8Array,this.ta=new TextDecoder("utf-8"),this.ea().then(r=>{r&&r.ho()?this.metadata.resolve(r.payload.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(r==null?void 0:r.payload)}`))},r=>this.metadata.reject(r))}close(){return this.Zo.cancel()}async getMetadata(){return this.metadata.promise}async Qo(){return await this.getMetadata(),this.ea()}async ea(){const e=await this.na();if(e===null)return null;const n=this.ta.decode(e),r=Number(n);isNaN(r)&&this.sa(`length string (${n}) is not valid number`);const i=await this.ia(r);return new $M(JSON.parse(i),e.length+r)}ra(){return this.buffer.findIndex(e=>e==="{".charCodeAt(0))}async na(){for(;this.ra()<0&&!await this.oa(););if(this.buffer.length===0)return null;const e=this.ra();e<0&&this.sa("Reached the end of bundle when a length string is expected.");const n=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),n}async ia(e){for(;this.buffer.length<e;)await this.oa()&&this.sa("Reached the end of bundle when more is expected.");const n=this.ta.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),n}sa(e){throw this.Zo.cancel(),new Error(`Invalid bundle format: ${e}`)}async oa(){const e=await this.Zo.read();if(!e.done){const n=new Uint8Array(this.buffer.length+e.value.length);n.set(this.buffer),n.set(e.value,this.buffer.length),this.buffer=n}return e.done}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u${constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new C(E.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const n=await async function(r,i){const s=L(r),o=Nu(s.N)+"/documents",a={documents:i.map(h=>Ru(s.N,h))},u=await s.Ki("BatchGetDocuments",o,a),l=new Map;u.forEach(h=>{const d=bL(s.N,h);l.set(d.key.toString(),d)});const c=[];return i.forEach(h=>{const d=l.get(h.toString());H(!!d),c.push(d)}),c}(this.datastore,e);return n.forEach(r=>this.recordVersion(r)),n}set(e,n){this.write(n.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,n){try{this.write(n.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastWriteError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new ku(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const e=this.readVersions;this.mutations.forEach(n=>{e.delete(n.key.toString())}),e.forEach((n,r)=>{const i=j.fromPath(r);this.mutations.push(new Tg(i,this.precondition(i)))}),await async function(n,r){const i=L(n),s=Nu(i.N)+"/documents",o={writes:r.map(a=>xh(i.N,a))};await i.Li("Commit",s,o)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let n;if(e.isFoundDocument())n=e.version;else{if(!e.isNoDocument())throw q();n=Q.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!n.isEqual(r))throw new C(E.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),n)}precondition(e){const n=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&n?Le.updateTime(n):Le.none()}preconditionForUpdate(e){const n=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&n){if(n.isEqual(Q.min()))throw new C(E.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return Le.updateTime(n)}return Le.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
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
 */class l${constructor(e,n,r,i){this.asyncQueue=e,this.datastore=n,this.updateFunction=r,this.deferred=i,this.aa=5,this.rr=new Hg(this.asyncQueue,"transaction_retry")}run(){this.aa-=1,this.ca()}ca(){this.rr.Xi(async()=>{const e=new u$(this.datastore),n=this.ua(e);n&&n.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(i=>{this.ha(i)}))}).catch(r=>{this.ha(r)})})}ua(e){try{const n=this.updateFunction(e);return!Ui(n)&&n.catch&&n.then?n:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(n){return this.deferred.reject(n),null}}ha(e){this.aa>0&&this.la(e)?(this.aa-=1,this.asyncQueue.enqueueAndForget(()=>(this.ca(),Promise.resolve()))):this.deferred.reject(e)}la(e){if(e.name==="FirebaseError"){const n=e.code;return n==="aborted"||n==="failed-precondition"||!F1(n)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c${constructor(e,n,r){this.credentials=e,this.asyncQueue=n,this.databaseInfo=r,this.user=ct.UNAUTHENTICATED,this.clientId=u1.I(),this.credentialListener=()=>Promise.resolve(),this.credentials.start(n,async i=>{N("FirestoreClient","Received user=",i.uid),await this.credentialListener(i),this.user=i})}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,credentials:this.credentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.credentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new C(E.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ge;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.credentials.shutdown(),e.resolve()}catch(n){const r=So(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function uS(t,e){t.asyncQueue.verifyOperationInProgress(),N("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await xT(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function lS(t,e){t.asyncQueue.verifyOperationInProgress();const n=await ly(t);N("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>async function(s,o){const a=L(s);a.asyncQueue.verifyOperationInProgress(),N("RemoteStore","RemoteStore received new credentials");const u=ei(a);a.Kr.add(3),await Io(a),u&&a.Wr.set("Unknown"),await a.remoteSyncer.handleCredentialChange(o),a.Kr.delete(3),await Mu(a)}(e.remoteStore,i)),t.onlineComponents=e}async function ly(t){return t.offlineComponents||(N("FirestoreClient","Using default OfflineComponentProvider"),await uS(t,new sS)),t.offlineComponents}async function Hh(t){return t.onlineComponents||(N("FirestoreClient","Using default OnlineComponentProvider"),await lS(t,new uy)),t.onlineComponents}function cS(t){return ly(t).then(e=>e.persistence)}function cy(t){return ly(t).then(e=>e.localStore)}function hS(t){return Hh(t).then(e=>e.remoteStore)}function hy(t){return Hh(t).then(e=>e.syncEngine)}async function Ao(t){const e=await Hh(t),n=e.eventManager;return n.onListen=jM.bind(null,e.syncEngine),n.onUnlisten=zM.bind(null,e.syncEngine),n}function h$(t){return t.asyncQueue.enqueue(async()=>{const e=await cS(t),n=await hS(t);return e.setNetworkEnabled(!0),function(r){const i=L(r);return i.Kr.delete(0),Mu(i)}(n)})}function d$(t){return t.asyncQueue.enqueue(async()=>{const e=await cS(t),n=await hS(t);return e.setNetworkEnabled(!1),async function(r){const i=L(r);i.Kr.add(0),await Io(i),i.Wr.set("Offline")}(n)})}function f$(t,e){const n=new Ge;return t.asyncQueue.enqueueAndForget(async()=>async function(r,i,s){try{const o=await function(a,u){const l=L(a);return l.persistence.runTransaction("read document","readonly",c=>l.Qn.An(c,u))}(r,i);o.isFoundDocument()?s.resolve(o):o.isNoDocument()?s.resolve(null):s.reject(new C(E.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(o){const a=So(o,`Failed to get document '${i} from cache`);s.reject(a)}}(await cy(t),e,n)),n.promise}function dS(t,e,n={}){const r=new Ge;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,u){const l=new qh({next:h=>{s.enqueueAndForget(()=>Jg(i,c));const d=h.docs.has(o);!d&&h.fromCache?u.reject(new C(E.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&h.fromCache&&a&&a.source==="server"?u.reject(new C(E.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(h)},error:h=>u.reject(h)}),c=new ey(io(o.path),l,{includeMetadataChanges:!0,uo:!0});return Xg(i,c)}(await Ao(t),t.asyncQueue,e,n,r)),r.promise}function p$(t,e){const n=new Ge;return t.asyncQueue.enqueueAndForget(async()=>async function(r,i,s){try{const o=await Uh(r,i,!0),a=new ZT(i,o.Gn),u=a.Io(o.documents),l=a.applyChanges(u,!1);s.resolve(l.snapshot)}catch(o){const a=So(o,`Failed to execute query '${i} against cache`);s.reject(a)}}(await cy(t),e,n)),n.promise}function fS(t,e,n={}){const r=new Ge;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,u){const l=new qh({next:h=>{s.enqueueAndForget(()=>Jg(i,c)),h.fromCache&&a.source==="server"?u.reject(new C(E.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(h)},error:h=>u.reject(h)}),c=new ey(o,l,{includeMetadataChanges:!0,uo:!0});return Xg(i,c)}(await Ao(t),t.asyncQueue,e,n,r)),r.promise}function m$(t,e){const n=new qh(e);return t.asyncQueue.enqueueAndForget(async()=>function(r,i){L(r).Zr.add(i),i.next()}(await Ao(t),n)),()=>{n.Xo(),t.asyncQueue.enqueueAndForget(async()=>function(r,i){L(r).Zr.delete(i)}(await Ao(t),n))}}function g$(t,e){const n=new Ge;return t.asyncQueue.enqueueAndForget(async()=>{const r=await function(i){return Hh(i).then(s=>s.datastore)}(t);new l$(t.asyncQueue,r,e,n).run()}),n.promise}function y$(t,e,n,r){const i=function(s,o){let a;return a=typeof s=="string"?new TextEncoder().encode(s):s,function(u,l){return new a$(u,l)}(function(u,l){if(u instanceof Uint8Array)return aS(u,l);if(u instanceof ArrayBuffer)return aS(new Uint8Array(u),l);if(u instanceof ReadableStream)return u.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(a),o)}(n,Lu(e));t.asyncQueue.enqueueAndForget(async()=>{s$(await hy(t),i,r)})}function v$(t,e){return t.asyncQueue.enqueue(async()=>function(n,r){const i=L(n);return i.persistence.runTransaction("Get named query","readonly",s=>i.Je.getNamedQuery(s,r))}(await cy(t),e))}class w${constructor(e,n,r,i,s,o,a,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=u}}class Ro{constructor(e,n){this.projectId=e,this.database=n||"(default)"}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ro&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pS=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dy(t,e,n){if(!n)throw new C(E.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function mS(t,e,n,r){if(e===!0&&r===!0)throw new C(E.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function gS(t){if(!j.isDocumentKey(t))throw new C(E.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function yS(t){if(j.isDocumentKey(t))throw new C(E.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Wh(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":q()}function re(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new C(E.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Wh(t);throw new C(E.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function vS(t,e){if(e<=0)throw new C(E.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wS{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new C(E.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new C(E.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,mS("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uu{constructor(e,n){this._credentials=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new wS({}),this._settingsFrozen=!1,e instanceof Ro?this._databaseId=e:(this._app=e,this._databaseId=function(r){if(!Object.prototype.hasOwnProperty.apply(r.options,["projectId"]))throw new C(E.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ro(r.options.projectId)}(e))}get app(){if(!this._app)throw new C(E.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new C(E.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new wS(e),e.credentials!==void 0&&(this._credentials=function(n){if(!n)return new zO;switch(n.type){case"gapi":const r=n.client;return H(!(typeof r!="object"||r===null||!r.auth||!r.auth.getAuthHeaderValueForFirstParty)),new GO(r,n.sessionIndex||"0",n.iamToken||null);case"provider":return n.client;default:throw new C(E.INVALID_ARGUMENT,"makeCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=pS.get(e);n&&(N("ComponentProvider","Removing Datastore"),pS.delete(e),n.terminate())}(this),Promise.resolve()}}function _$(t,e,n,r={}){var i;const s=(t=re(t,Uu))._getSettings();if(s.host!=="firestore.googleapis.com"&&s.host!==e&&pu("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},s),{host:`${e}:${n}`,ssl:!1})),r.mockUserToken){let o,a;if(typeof r.mockUserToken=="string")o=r.mockUserToken,a=ct.MOCK_USER;else{o=m_(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new C(E.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new ct(u)}t._credentials=new qO(new a1(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Bn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new we(this.firestore,e,this._key)}}class Tt{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Tt(this.firestore,e,this._query)}}class Bn extends Tt{constructor(e,n,r){super(e,n,io(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new we(this.firestore,null,new j(e))}withConverter(e){return new Bn(this.firestore,e,this._path)}}function _S(t,e,...n){if(t=B(t),dy("collection","path",e),t instanceof Uu){const r=ie.fromString(e,...n);return yS(r),new Bn(t,null,r)}{if(!(t instanceof we||t instanceof Bn))throw new C(E.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ie.fromString(e,...n));return yS(r),new Bn(t.firestore,null,r)}}function I$(t,e){if(t=re(t,Uu),dy("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new C(E.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new Tt(t,null,function(n){return new or(ie.emptyPath(),n)}(e))}function Gh(t,e,...n){if(t=B(t),arguments.length===1&&(e=u1.I()),dy("doc","path",e),t instanceof Uu){const r=ie.fromString(e,...n);return gS(r),new we(t,null,new j(r))}{if(!(t instanceof we||t instanceof Bn))throw new C(E.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ie.fromString(e,...n));return gS(r),new we(t.firestore,t instanceof Bn?t.converter:null,new j(r))}}function IS(t,e){return t=B(t),e=B(e),(t instanceof we||t instanceof Bn)&&(e instanceof we||e instanceof Bn)&&t.firestore===e.firestore&&t.path===e.path&&t.converter===e.converter}function ES(t,e){return t=B(t),e=B(e),t instanceof Tt&&e instanceof Tt&&t.firestore===e.firestore&&Iu(t._query,e._query)&&t.converter===e.converter}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E${constructor(){this.fa=Promise.resolve(),this.da=[],this.wa=!1,this._a=[],this.ma=null,this.ga=!1,this.ya=!1,this.pa=[],this.rr=new Hg(this,"async_queue_retry"),this.Ta=()=>{const n=Bh();n&&N("AsyncQueue","Visibility state changed to "+n.visibilityState),this.rr.tr()};const e=Bh();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Ta)}get isShuttingDown(){return this.wa}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Ea(),this.Ia(e)}enterRestrictedMode(e){if(!this.wa){this.wa=!0,this.ya=e||!1;const n=Bh();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Ta)}}enqueue(e){if(this.Ea(),this.wa)return new Promise(()=>{});const n=new Ge;return this.Ia(()=>this.wa&&this.ya?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.da.push(e),this.Aa()))}async Aa(){if(this.da.length!==0){try{await this.da[0](),this.da.shift(),this.rr.reset()}catch(e){if(!zi(e))throw e;N("AsyncQueue","Operation failed with retryable error: "+e)}this.da.length>0&&this.rr.Xi(()=>this.Aa())}}Ia(e){const n=this.fa.then(()=>(this.ga=!0,e().catch(r=>{this.ma=r,this.ga=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw De("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.ga=!1,r))));return this.fa=n,n}enqueueAfterDelay(e,n,r){this.Ea(),this.pa.indexOf(e)>-1&&(n=0);const i=Yg.createAndSchedule(this,e,n,r,s=>this.Ra(s));return this._a.push(i),i}Ea(){this.ma&&q()}verifyOperationInProgress(){}async ba(){let e;do e=this.fa,await e;while(e!==this.fa)}Pa(e){for(const n of this._a)if(n.timerId===e)return!0;return!1}va(e){return this.ba().then(()=>{this._a.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this._a)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.ba()})}Va(e){this.pa.push(e)}Ra(e){const n=this._a.indexOf(e);this._a.splice(n,1)}}function fy(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const r=e;for(const i of n)if(i in r&&typeof r[i]=="function")return!0;return!1}(t,["next","error","complete"])}class T${constructor(){this._progressObserver={},this._taskCompletionResolver=new Ge,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,n,r){this._progressObserver={next:e,error:n,complete:r}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,n){return this._taskCompletionResolver.promise.then(e,n)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S$=-1;class Pe extends Uu{constructor(e,n){super(e,n),this.type="firestore",this._queue=new E$,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||TS(this),this._firestoreClient.terminate()}}function Je(t){return t._firestoreClient||TS(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function TS(t){var e;const n=t._freezeSettings(),r=function(i,s,o,a){return new w$(i,s,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new c$(t._credentials,t._queue,r)}function k$(t,e){kS(t=re(t,Pe));const n=Je(t),r=t._freezeSettings(),i=new uy;return SS(n,i,new oS(i,r.cacheSizeBytes,e==null?void 0:e.forceOwnership))}function C$(t){kS(t=re(t,Pe));const e=Je(t),n=t._freezeSettings(),r=new uy;return SS(e,r,new o$(r,n.cacheSizeBytes))}function SS(t,e,n){const r=new Ge;return t.asyncQueue.enqueue(async()=>{try{await uS(t,n),await lS(t,e),r.resolve()}catch(i){if(!function(s){return s.name==="FirebaseError"?s.code===E.FAILED_PRECONDITION||s.code===E.UNIMPLEMENTED:typeof DOMException!="undefined"&&s instanceof DOMException?s.code===22||s.code===20||s.code===11:!0}(i))throw i;console.warn("Error enabling offline persistence. Falling back to persistence disabled: "+i),r.reject(i)}}).then(()=>r.promise)}function b$(t){if(t._initialized&&!t._terminated)throw new C(E.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new Ge;return t._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(n){if(!Sn.bt())return Promise.resolve();const r=n+"main";await Sn.delete(r)}($g(t._databaseId,t._persistenceKey)),e.resolve()}catch(n){e.reject(n)}}),e.promise}function A$(t){return function(e){const n=new Ge;return e.asyncQueue.enqueueAndForget(async()=>KM(await hy(e),n)),n.promise}(Je(t=re(t,Pe)))}function R$(t){return h$(Je(t=re(t,Pe)))}function N$(t){return d$(Je(t=re(t,Pe)))}function P$(t,e){const n=Je(t=re(t,Pe)),r=new T$;return y$(n,t._databaseId,e,r),r}function x$(t,e){return v$(Je(t=re(t,Pe)),e).then(n=>n?new Tt(t,null,n.query):null)}function kS(t){if(t._initialized||t._terminated)throw new C(E.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class ni{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new C(E.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ht(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new jn(Qe.fromBase64String(e))}catch(n){throw new C(E.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new jn(Qe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kh{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new C(E.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new C(E.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return J(this._lat,e._lat)||J(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D$=/^__.*__$/;class O${constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Kr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Su(e,this.data,n,this.fieldTransforms)}}class CS{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Kr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function bS(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw q()}}class Qh{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.N=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Sa(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Da(){return this.settings.Da}Ca(e){return new Qh(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.N,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Na(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Ca({path:r,xa:!1});return i.ka(e),i}$a(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Ca({path:r,xa:!1});return i.Sa(),i}Oa(e){return this.Ca({path:void 0,xa:!0})}Fa(e){return Xh(e,this.settings.methodName,this.settings.Ma||!1,this.path,this.settings.La)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Sa(){if(this.path)for(let e=0;e<this.path.length;e++)this.ka(this.path.get(e))}ka(e){if(e.length===0)throw this.Fa("Document fields must not be empty");if(bS(this.Da)&&D$.test(e))throw this.Fa('Document fields cannot begin and end with "__"')}}class L${constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.N=r||Lu(e)}Ba(e,n,r,i=!1){return new Qh({Da:e,methodName:n,La:r,path:ht.emptyPath(),xa:!1,Ma:i},this.databaseId,this.N,this.ignoreUndefinedProperties)}}function Ki(t){const e=t._freezeSettings(),n=Lu(t._databaseId);return new L$(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Yh(t,e,n,r,i,s={}){const o=t.Ba(s.merge||s.mergeFields?2:0,e,n,i);yy("Data must be an object, but it was:",o,r);const a=NS(r,o);let u,l;if(s.merge)u=new eo(o.fieldMask),l=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const h of s.mergeFields){const d=vy(e,h,n);if(!o.contains(d))throw new C(E.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);xS(c,d)||c.push(d)}u=new eo(c),l=o.fieldTransforms.filter(h=>u.covers(h.field))}else u=null,l=o.fieldTransforms;return new O$(new It(a),u,l)}class Fu extends Gi{_toFieldTransform(e){if(e.Da!==2)throw e.Da===1?e.Fa(`${this._methodName}() can only appear at the top level of your update data`):e.Fa(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Fu}}function AS(t,e,n){return new Qh({Da:3,La:e.settings.La,methodName:t._methodName,xa:n},e.databaseId,e.N,e.ignoreUndefinedProperties)}class py extends Gi{_toFieldTransform(e){return new Tu(e.path,new oo)}isEqual(e){return e instanceof py}}class M$ extends Gi{constructor(e,n){super(e),this.Ua=n}_toFieldTransform(e){const n=AS(this,e,!0),r=this.Ua.map(s=>Qi(s,n)),i=new Vi(r);return new Tu(e.path,i)}isEqual(e){return this===e}}class $$ extends Gi{constructor(e,n){super(e),this.Ua=n}_toFieldTransform(e){const n=AS(this,e,!0),r=this.Ua.map(s=>Qi(s,n)),i=new Bi(r);return new Tu(e.path,i)}isEqual(e){return this===e}}class U$ extends Gi{constructor(e,n){super(e),this.qa=n}_toFieldTransform(e){const n=new ao(e.N,A1(e.N,this.qa));return new Tu(e.path,n)}isEqual(e){return this===e}}function my(t,e,n,r){const i=t.Ba(1,e,n);yy("Data must be an object, but it was:",i,r);const s=[],o=It.empty();$i(r,(u,l)=>{const c=wy(e,u,n);l=B(l);const h=i.$a(c);if(l instanceof Fu)s.push(c);else{const d=Qi(l,h);d!=null&&(s.push(c),o.set(c,d))}});const a=new eo(s);return new CS(o,a,i.fieldTransforms)}function gy(t,e,n,r,i,s){const o=t.Ba(1,e,n),a=[vy(e,r,n)],u=[i];if(s.length%2!=0)throw new C(E.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push(vy(e,s[d])),u.push(s[d+1]);const l=[],c=It.empty();for(let d=a.length-1;d>=0;--d)if(!xS(l,a[d])){const g=a[d];let y=u[d];y=B(y);const _=o.$a(g);if(y instanceof Fu)l.push(g);else{const f=Qi(y,_);f!=null&&(l.push(g),c.set(g,f))}}const h=new eo(l);return new CS(c,h,o.fieldTransforms)}function RS(t,e,n,r=!1){return Qi(n,t.Ba(r?4:3,e))}function Qi(t,e){if(PS(t=B(t)))return yy("Unsupported field value:",e,t),NS(t,e);if(t instanceof Gi)return function(n,r){if(!bS(r.Da))throw r.Fa(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.Fa(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xa&&e.Da!==4)throw e.Fa("Nested arrays are not supported");return function(n,r){const i=[];let s=0;for(const o of n){let a=Qi(o,r.Oa(s));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),s++}return{arrayValue:{values:i}}}(t,e)}return function(n,r){if((n=B(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return A1(r.N,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=Ke.fromDate(n);return{timestampValue:Au(r.N,i)}}if(n instanceof Ke){const i=new Ke(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Au(r.N,i)}}if(n instanceof Kh)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof jn)return{bytesValue:K1(r.N,n._byteString)};if(n instanceof we){const i=r.databaseId,s=n.firestore._databaseId;if(!s.isEqual(i))throw r.Fa(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:kg(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r.Fa(`Unsupported field value: ${Wh(n)}`)}(t,e)}function NS(t,e){const n={};return h1(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):$i(t,(r,i)=>{const s=Qi(i,e.Na(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function PS(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ke||t instanceof Kh||t instanceof jn||t instanceof we||t instanceof Gi)}function yy(t,e,n){if(!PS(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=Wh(n);throw r==="an object"?e.Fa(t+" a custom object"):e.Fa(t+" "+r)}}function vy(t,e,n){if((e=B(e))instanceof ni)return e._internalPath;if(typeof e=="string")return wy(t,e);throw Xh("Field path arguments must be of type string or FieldPath.",t,!1,void 0,n)}const F$=new RegExp("[~\\*/\\[\\]]");function wy(t,e,n){if(e.search(F$)>=0)throw Xh(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new ni(...e.split("."))._internalPath}catch{throw Xh(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Xh(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new C(E.INVALID_ARGUMENT,a+t+u)}function xS(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vu{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new we(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new V$(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Jh("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class V$ extends Vu{data(){return super.data()}}function Jh(t,e){return typeof e=="string"?wy(t,e):e instanceof ni?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yi{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class cr extends Vu{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Bu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Jh("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Bu extends cr{data(e={}){return super.data(e)}}class ri{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Yi(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Bu(this._firestore,this._userDataWriter,r.key,r,new Yi(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new C(E.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let s=0;return r._snapshot.docChanges.map(o=>({type:"added",doc:new Bu(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Yi(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter),oldIndex:-1,newIndex:s++}))}{let s=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new Bu(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Yi(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let u=-1,l=-1;return o.type!==0&&(u=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),l=s.indexOf(o.doc.key)),{type:B$(o.type),doc:a,oldIndex:u,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function B$(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return q()}}function DS(t,e){return t instanceof cr&&e instanceof cr?t._firestore===e._firestore&&t._key.isEqual(e._key)&&(t._document===null?e._document===null:t._document.isEqual(e._document))&&t._converter===e._converter:t instanceof ri&&e instanceof ri&&t._firestore===e._firestore&&ES(t.query,e.query)&&t.metadata.isEqual(e.metadata)&&t._snapshot.isEqual(e._snapshot)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OS(t){if(kh(t)&&t.explicitOrderBy.length===0)throw new C(E.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ju{}function ii(t,...e){for(const n of e)t=n._apply(t);return t}class j$ extends ju{constructor(e,n,r){super(),this.Ka=e,this.ja=n,this.Qa=r,this.type="where"}_apply(e){const n=Ki(e.firestore),r=function(i,s,o,a,u,l,c){let h;if(u.isKeyField()){if(l==="array-contains"||l==="array-contains-any")throw new C(E.INVALID_ARGUMENT,`Invalid Query. You can't perform '${l}' queries on FieldPath.documentId().`);if(l==="in"||l==="not-in"){VS(c,l);const g=[];for(const y of c)g.push(FS(a,i,y));h={arrayValue:{values:g}}}else h=FS(a,i,c)}else l!=="in"&&l!=="not-in"&&l!=="array-contains-any"||VS(c,l),h=RS(o,s,c,l==="in"||l==="not-in");const d=xt.create(u,l,h);return function(g,y){if(y.v()){const f=wg(g);if(f!==null&&!f.isEqual(y.field))throw new C(E.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${f.toString()}' and '${y.field.toString()}'`);const p=vg(g);p!==null&&BS(g,y.field,p)}const _=function(f,p){for(const m of f.filters)if(p.indexOf(m.op)>=0)return m.op;return null}(g,function(f){switch(f){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(y.op));if(_!==null)throw _===y.op?new C(E.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${y.op.toString()}' filter.`):new C(E.INVALID_ARGUMENT,`Invalid query. You cannot use '${y.op.toString()}' filters with '${_.toString()}' filters.`)}(i,d),d}(e._query,"where",n,e.firestore._databaseId,this.Ka,this.ja,this.Qa);return new Tt(e.firestore,e.converter,function(i,s){const o=i.filters.concat([s]);return new or(i.path,i.collectionGroup,i.explicitOrderBy.slice(),o,i.limit,i.limitType,i.startAt,i.endAt)}(e._query,r))}}function z$(t,e,n){const r=e,i=Jh("where",t);return new j$(i,r,n)}class q$ extends ju{constructor(e,n){super(),this.Ka=e,this.Wa=n,this.type="orderBy"}_apply(e){const n=function(r,i,s){if(r.startAt!==null)throw new C(E.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new C(E.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new ro(i,s);return function(a,u){if(vg(a)===null){const l=wg(a);l!==null&&BS(a,l,u.field)}}(r,o),o}(e._query,this.Ka,this.Wa);return new Tt(e.firestore,e.converter,function(r,i){const s=r.explicitOrderBy.concat([i]);return new or(r.path,r.collectionGroup,s,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}(e._query,n))}}function H$(t,e="asc"){const n=e,r=Jh("orderBy",t);return new q$(r,n)}class LS extends ju{constructor(e,n,r){super(),this.type=e,this.Ga=n,this.za=r}_apply(e){return new Tt(e.firestore,e.converter,T1(e._query,this.Ga,this.za))}}function W$(t){return vS("limit",t),new LS("limit",t,"F")}function G$(t){return vS("limitToLast",t),new LS("limitToLast",t,"L")}class MS extends ju{constructor(e,n,r){super(),this.type=e,this.Ha=n,this.Ja=r}_apply(e){const n=US(e,this.type,this.Ha,this.Ja);return new Tt(e.firestore,e.converter,function(r,i){return new or(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),r.limit,r.limitType,i,r.endAt)}(e._query,n))}}function K$(...t){return new MS("startAt",t,!0)}function Q$(...t){return new MS("startAfter",t,!1)}class $S extends ju{constructor(e,n,r){super(),this.type=e,this.Ha=n,this.Ja=r}_apply(e){const n=US(e,this.type,this.Ha,this.Ja);return new Tt(e.firestore,e.converter,function(r,i){return new or(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),r.limit,r.limitType,r.startAt,i)}(e._query,n))}}function Y$(...t){return new $S("endBefore",t,!0)}function X$(...t){return new $S("endAt",t,!1)}function US(t,e,n,r){if(n[0]=B(n[0]),n[0]instanceof Vu)return function(i,s,o,a,u){if(!a)throw new C(E.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${o}().`);const l=[];for(const c of so(i))if(c.field.isKeyField())l.push(wh(s,a.key));else{const h=a.data.field(c.field);if(fg(h))throw new C(E.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+c.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(h===null){const d=c.field.canonicalString();throw new C(E.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${d}' (used as the orderBy) does not exist.`)}l.push(h)}return new _u(l,u)}(t._query,t.firestore._databaseId,e,n[0]._document,r);{const i=Ki(t.firestore);return function(s,o,a,u,l,c){const h=s.explicitOrderBy;if(l.length>h.length)throw new C(E.INVALID_ARGUMENT,`Too many arguments provided to ${u}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const d=[];for(let g=0;g<l.length;g++){const y=l[g];if(h[g].field.isKeyField()){if(typeof y!="string")throw new C(E.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${u}(), but got a ${typeof y}`);if(!_g(s)&&y.indexOf("/")!==-1)throw new C(E.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by FieldPath.documentId(), the value passed to ${u}() must be a plain document ID, but '${y}' contains a slash.`);const _=s.path.child(ie.fromString(y));if(!j.isDocumentKey(_))throw new C(E.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by FieldPath.documentId(), the value passed to ${u}() must result in a valid document path, but '${_}' is not because it contains an odd number of segments.`);const f=new j(_);d.push(wh(o,f))}else{const _=RS(a,u,y);d.push(_)}}return new _u(d,c)}(t._query,t.firestore._databaseId,i,e,n,r)}}function FS(t,e,n){if(typeof(n=B(n))=="string"){if(n==="")throw new C(E.INVALID_ARGUMENT,"Invalid query. When querying with FieldPath.documentId(), you must provide a valid document ID, but it was an empty string.");if(!_g(e)&&n.indexOf("/")!==-1)throw new C(E.INVALID_ARGUMENT,`Invalid query. When querying a collection by FieldPath.documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(ie.fromString(n));if(!j.isDocumentKey(r))throw new C(E.INVALID_ARGUMENT,`Invalid query. When querying a collection group by FieldPath.documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return wh(t,new j(r))}if(n instanceof we)return wh(t,n._key);throw new C(E.INVALID_ARGUMENT,`Invalid query. When querying with FieldPath.documentId(), you must provide a valid string or a DocumentReference, but it was: ${Wh(n)}.`)}function VS(t,e){if(!Array.isArray(t)||t.length===0)throw new C(E.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(t.length>10)throw new C(E.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function BS(t,e,n){if(!n.isEqual(e))throw new C(E.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _y{convertValue(e,n="none"){switch(Fi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Oe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(to(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw q()}}convertObject(e,n){const r={};return $i(e.fields,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new Kh(Oe(e.latitude),Oe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=d1(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(gu(e));default:return null}}convertTimestamp(e){const n=Gr(e);return new Ke(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ie.fromString(e);H(aT(r));const i=new Ro(r.get(1),r.get(3)),s=new j(r.popFirst(5));return i.isEqual(n)||De(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zh(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class J$ extends _y{constructor(e){super(),this.firestore=e}convertBytes(e){return new jn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new we(this.firestore,null,n)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z${constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=Ki(e)}set(e,n,r){this._verifyNotCommitted();const i=si(e,this._firestore),s=Zh(i.converter,n,r),o=Yh(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(o.toMutation(i._key,Le.none())),this}update(e,n,r,...i){this._verifyNotCommitted();const s=si(e,this._firestore);let o;return o=typeof(n=B(n))=="string"||n instanceof ni?gy(this._dataReader,"WriteBatch.update",s._key,n,r,i):my(this._dataReader,"WriteBatch.update",s._key,n),this._mutations.push(o.toMutation(s._key,Le.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=si(e,this._firestore);return this._mutations=this._mutations.concat(new ku(n._key,Le.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new C(E.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function si(t,e){if((t=B(t)).firestore!==e)throw new C(E.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function eU(t){t=re(t,we);const e=re(t.firestore,Pe);return dS(Je(e),t._key).then(n=>Iy(e,t,n))}class Xi extends _y{constructor(e){super(),this.firestore=e}convertBytes(e){return new jn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new we(this.firestore,null,n)}}function tU(t){t=re(t,we);const e=re(t.firestore,Pe),n=Je(e),r=new Xi(e);return f$(n,t._key).then(i=>new cr(e,r,t._key,i,new Yi(i!==null&&i.hasLocalMutations,!0),t.converter))}function nU(t){t=re(t,we);const e=re(t.firestore,Pe);return dS(Je(e),t._key,{source:"server"}).then(n=>Iy(e,t,n))}function rU(t){t=re(t,Tt);const e=re(t.firestore,Pe),n=Je(e),r=new Xi(e);return OS(t._query),fS(n,t._query).then(i=>new ri(e,r,t,i))}function iU(t){t=re(t,Tt);const e=re(t.firestore,Pe),n=Je(e),r=new Xi(e);return p$(n,t._query).then(i=>new ri(e,r,t,i))}function sU(t){t=re(t,Tt);const e=re(t.firestore,Pe),n=Je(e),r=new Xi(e);return fS(n,t._query,{source:"server"}).then(i=>new ri(e,r,t,i))}function jS(t,e,n){t=re(t,we);const r=re(t.firestore,Pe),i=Zh(t.converter,e,n);return zu(r,[Yh(Ki(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Le.none())])}function zS(t,e,n,...r){t=re(t,we);const i=re(t.firestore,Pe),s=Ki(i);let o;return o=typeof(e=B(e))=="string"||e instanceof ni?gy(s,"updateDoc",t._key,e,n,r):my(s,"updateDoc",t._key,e),zu(i,[o.toMutation(t._key,Le.exists(!0))])}function oU(t){return zu(re(t.firestore,Pe),[new ku(t._key,Le.none())])}function aU(t,e){const n=re(t.firestore,Pe),r=Gh(t),i=Zh(t.converter,e);return zu(n,[Yh(Ki(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Le.exists(!1))]).then(()=>r)}function qS(t,...e){var n,r,i;t=B(t);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||fy(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(fy(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let u,l,c;if(t instanceof we)l=re(t.firestore,Pe),c=io(t._key.path),u={next:h=>{e[o]&&e[o](Iy(l,t,h))},error:e[o+1],complete:e[o+2]};else{const h=re(t,Tt);l=re(h.firestore,Pe),c=h._query;const d=new Xi(l);u={next:g=>{e[o]&&e[o](new ri(l,d,h,g))},error:e[o+1],complete:e[o+2]},OS(t._query)}return function(h,d,g,y){const _=new qh(y),f=new ey(d,_,g);return h.asyncQueue.enqueueAndForget(async()=>Xg(await Ao(h),f)),()=>{_.Xo(),h.asyncQueue.enqueueAndForget(async()=>Jg(await Ao(h),f))}}(Je(l),c,a,u)}function uU(t,e){return m$(Je(t=re(t,Pe)),fy(e)?e:{next:e})}function zu(t,e){return function(n,r){const i=new Ge;return n.asyncQueue.enqueueAndForget(async()=>qM(await hy(n),r,i)),i.promise}(Je(t),e)}function Iy(t,e,n){const r=n.docs.get(e._key),i=new Xi(t);return new cr(t,i,e._key,r,new Yi(n.hasPendingWrites,n.fromCache),e.converter)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lU extends class{constructor(e,n){this._firestore=e,this._transaction=n,this._dataReader=Ki(e)}get(e){const n=si(e,this._firestore),r=new J$(this._firestore);return this._transaction.lookup([n._key]).then(i=>{if(!i||i.length!==1)return q();const s=i[0];if(s.isFoundDocument())return new Vu(this._firestore,r,s.key,s,n.converter);if(s.isNoDocument())return new Vu(this._firestore,r,n._key,null,n.converter);throw q()})}set(e,n,r){const i=si(e,this._firestore),s=Zh(i.converter,n,r),o=Yh(this._dataReader,"Transaction.set",i._key,s,i.converter!==null,r);return this._transaction.set(i._key,o),this}update(e,n,r,...i){const s=si(e,this._firestore);let o;return o=typeof(n=B(n))=="string"||n instanceof ni?gy(this._dataReader,"Transaction.update",s._key,n,r,i):my(this._dataReader,"Transaction.update",s._key,n),this._transaction.update(s._key,o),this}delete(e){const n=si(e,this._firestore);return this._transaction.delete(n._key),this}}{constructor(e,n){super(e,n),this._firestore=e}get(e){const n=si(e,this._firestore),r=new Xi(this._firestore);return super.get(e).then(i=>new cr(this._firestore,r,n._key,i._document,new Yi(!1,!1),n.converter))}}function cU(t,e){return g$(Je(t),n=>e(new lU(t,n)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hU(){return new Fu("deleteField")}function dU(){return new py("serverTimestamp")}function fU(...t){return new M$("arrayUnion",t)}function pU(...t){return new $$("arrayRemove",t)}function mU(t){return new U$("increment",t)}var gU;(function(t){Js=t})(Fr),Ur(new _n("firestore",(t,{options:e})=>{const n=t.getProvider("app").getImmediate(),r=new Pe(n,new HO(t.getProvider("auth-internal")));return e=Object.assign({useFetchStreams:!0},e),r._setSettings(e),r},"PUBLIC")),ln(o1,"3.1.1",gU),ln(o1,"3.1.1","esm2017");const yU="@firebase/firestore-compat",vU="0.1.4";/**
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
 */function Ey(t,e){if(e===void 0)return{merge:!1};if(e.mergeFields!==void 0&&e.merge!==void 0)throw new C("invalid-argument",`Invalid options passed to function ${t}(): You cannot specify both "merge" and "mergeFields".`);return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HS(){if(typeof Uint8Array=="undefined")throw new C("unimplemented","Uint8Arrays are not available in this environment.")}function WS(){if(!YO())throw new C("unimplemented","Blobs are unavailable in Firestore in this environment.")}class qu{constructor(e){this._delegate=e}static fromBase64String(e){return WS(),new qu(jn.fromBase64String(e))}static fromUint8Array(e){return HS(),new qu(jn.fromUint8Array(e))}toBase64(){return WS(),this._delegate.toBase64()}toUint8Array(){return HS(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ty(t){return wU(t,["next","error","complete"])}function wU(t,e){if(typeof t!="object"||t===null)return!1;const n=t;for(const r of e)if(r in n&&typeof n[r]=="function")return!0;return!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _U{enableIndexedDbPersistence(e,n){return k$(e._delegate,{forceOwnership:n})}enableMultiTabIndexedDbPersistence(e){return C$(e._delegate)}clearIndexedDbPersistence(e){return b$(e._delegate)}}class GS{constructor(e,n,r){this._delegate=n,this._persistenceProvider=r,this.INTERNAL={delete:()=>this.terminate()},e instanceof Ro||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const n=this._delegate._getSettings();!e.merge&&n.host!==e.host&&pu("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},n),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,n,r={}){_$(this._delegate,e,n,r)}enableNetwork(){return R$(this._delegate)}disableNetwork(){return N$(this._delegate)}enablePersistence(e){let n=!1,r=!1;return e&&(n=!!e.synchronizeTabs,r=!!e.experimentalForceOwningTab,mS("synchronizeTabs",n,"experimentalForceOwningTab",r)),n?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,r)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return A$(this._delegate)}onSnapshotsInSync(e){return uU(this._delegate,e)}get app(){if(!this._appCompat)throw new C("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new No(this,_S(this._delegate,e))}catch(n){throw Dt(n,"collection()","Firestore.collection()")}}doc(e){try{return new fn(this,Gh(this._delegate,e))}catch(n){throw Dt(n,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new Ot(this,I$(this._delegate,e))}catch(n){throw Dt(n,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return cU(this._delegate,n=>e(new KS(this,n)))}batch(){return Je(this._delegate),new QS(new Z$(this._delegate,e=>zu(this._delegate,e)))}loadBundle(e){return P$(this._delegate,e)}namedQuery(e){return x$(this._delegate,e).then(n=>n?new Ot(this,n):null)}}class ed extends _y{constructor(e){super();this.firestore=e}convertBytes(e){return new qu(new jn(e))}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return fn.forKey(n,this.firestore,null)}}function IU(t){BO(t)}class KS{constructor(e,n){this._firestore=e,this._delegate=n,this._userDataWriter=new ed(e)}get(e){const n=Zi(e);return this._delegate.get(n).then(r=>new Hu(this._firestore,new cr(this._firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,n.converter)))}set(e,n,r){const i=Zi(e);return r?(Ey("Transaction.set",r),this._delegate.set(i,n,r)):this._delegate.set(i,n),this}update(e,n,r,...i){const s=Zi(e);return arguments.length===2?this._delegate.update(s,n):this._delegate.update(s,n,r,...i),this}delete(e){const n=Zi(e);return this._delegate.delete(n),this}}class QS{constructor(e){this._delegate=e}set(e,n,r){const i=Zi(e);return r?(Ey("WriteBatch.set",r),this._delegate.set(i,n,r)):this._delegate.set(i,n),this}update(e,n,r,...i){const s=Zi(e);return arguments.length===2?this._delegate.update(s,n):this._delegate.update(s,n,r,...i),this}delete(e){const n=Zi(e);return this._delegate.delete(n),this}commit(){return this._delegate.commit()}}class Ji{constructor(e,n,r){this._firestore=e,this._userDataWriter=n,this._delegate=r}fromFirestore(e,n){const r=new Bu(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new Wu(this._firestore,r),n!=null?n:{})}toFirestore(e,n){return n?this._delegate.toFirestore(e,n):this._delegate.toFirestore(e)}static getInstance(e,n){const r=Ji.INSTANCES;let i=r.get(e);i||(i=new WeakMap,r.set(e,i));let s=i.get(n);return s||(s=new Ji(e,new ed(e),n),i.set(n,s)),s}}Ji.INSTANCES=new WeakMap;class fn{constructor(e,n){this.firestore=e,this._delegate=n,this._userDataWriter=new ed(e)}static forPath(e,n,r){if(e.length%2!=0)throw new C("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new fn(n,new we(n._delegate,r,new j(e)))}static forKey(e,n,r){return new fn(n,new we(n._delegate,r,e))}get id(){return this._delegate.id}get parent(){return new No(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new No(this.firestore,_S(this._delegate,e))}catch(n){throw Dt(n,"collection()","DocumentReference.collection()")}}isEqual(e){return e=B(e),e instanceof we?IS(this._delegate,e):!1}set(e,n){n=Ey("DocumentReference.set",n);try{return n?jS(this._delegate,e,n):jS(this._delegate,e)}catch(r){throw Dt(r,"setDoc()","DocumentReference.set()")}}update(e,n,...r){try{return arguments.length===1?zS(this._delegate,e):zS(this._delegate,e,n,...r)}catch(i){throw Dt(i,"updateDoc()","DocumentReference.update()")}}delete(){return oU(this._delegate)}onSnapshot(...e){const n=YS(e),r=XS(e,i=>new Hu(this.firestore,new cr(this.firestore._delegate,this._userDataWriter,i._key,i._document,i.metadata,this._delegate.converter)));return qS(this._delegate,n,r)}get(e){let n;return(e==null?void 0:e.source)==="cache"?n=tU(this._delegate):(e==null?void 0:e.source)==="server"?n=nU(this._delegate):n=eU(this._delegate),n.then(r=>new Hu(this.firestore,new cr(this.firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,this._delegate.converter)))}withConverter(e){return new fn(this.firestore,e?this._delegate.withConverter(Ji.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function Dt(t,e,n){return t.message=t.message.replace(e,n),t}function YS(t){for(const e of t)if(typeof e=="object"&&!Ty(e))return e;return{}}function XS(t,e){var n,r;let i;return Ty(t[0])?i=t[0]:Ty(t[1])?i=t[1]:typeof t[0]=="function"?i={next:t[0],error:t[1],complete:t[2]}:i={next:t[1],error:t[2],complete:t[3]},{next:s=>{i.next&&i.next(e(s))},error:(n=i.error)===null||n===void 0?void 0:n.bind(i),complete:(r=i.complete)===null||r===void 0?void 0:r.bind(i)}}class Hu{constructor(e,n){this._firestore=e,this._delegate=n}get ref(){return new fn(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,n){return this._delegate.get(e,n)}isEqual(e){return DS(this._delegate,e._delegate)}}class Wu extends Hu{data(e){const n=this._delegate.data(e);return jO(n!==void 0),n}}class Ot{constructor(e,n){this.firestore=e,this._delegate=n,this._userDataWriter=new ed(e)}where(e,n,r){try{return new Ot(this.firestore,ii(this._delegate,z$(e,n,r)))}catch(i){throw Dt(i,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,n){try{return new Ot(this.firestore,ii(this._delegate,H$(e,n)))}catch(r){throw Dt(r,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new Ot(this.firestore,ii(this._delegate,W$(e)))}catch(n){throw Dt(n,"limit()","Query.limit()")}}limitToLast(e){try{return new Ot(this.firestore,ii(this._delegate,G$(e)))}catch(n){throw Dt(n,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new Ot(this.firestore,ii(this._delegate,K$(...e)))}catch(n){throw Dt(n,"startAt()","Query.startAt()")}}startAfter(...e){try{return new Ot(this.firestore,ii(this._delegate,Q$(...e)))}catch(n){throw Dt(n,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new Ot(this.firestore,ii(this._delegate,Y$(...e)))}catch(n){throw Dt(n,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new Ot(this.firestore,ii(this._delegate,X$(...e)))}catch(n){throw Dt(n,"endAt()","Query.endAt()")}}isEqual(e){return ES(this._delegate,e._delegate)}get(e){let n;return(e==null?void 0:e.source)==="cache"?n=iU(this._delegate):(e==null?void 0:e.source)==="server"?n=sU(this._delegate):n=rU(this._delegate),n.then(r=>new Sy(this.firestore,new ri(this.firestore._delegate,this._userDataWriter,this._delegate,r._snapshot)))}onSnapshot(...e){const n=YS(e),r=XS(e,i=>new Sy(this.firestore,new ri(this.firestore._delegate,this._userDataWriter,this._delegate,i._snapshot)));return qS(this._delegate,n,r)}withConverter(e){return new Ot(this.firestore,e?this._delegate.withConverter(Ji.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class EU{constructor(e,n){this._firestore=e,this._delegate=n}get type(){return this._delegate.type}get doc(){return new Wu(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class Sy{constructor(e,n){this._firestore=e,this._delegate=n}get query(){return new Ot(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new Wu(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(n=>new EU(this._firestore,n))}forEach(e,n){this._delegate.forEach(r=>{e.call(n,new Wu(this._firestore,r))})}isEqual(e){return DS(this._delegate,e._delegate)}}class No extends Ot{constructor(e,n){super(e,n);this.firestore=e,this._delegate=n}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new fn(this.firestore,e):null}doc(e){try{return e===void 0?new fn(this.firestore,Gh(this._delegate)):new fn(this.firestore,Gh(this._delegate,e))}catch(n){throw Dt(n,"doc()","CollectionReference.doc()")}}add(e){return aU(this._delegate,e).then(n=>new fn(this.firestore,n))}isEqual(e){return IS(this._delegate,e._delegate)}withConverter(e){return new No(this.firestore,e?this._delegate.withConverter(Ji.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function Zi(t){return re(t,we)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ky{constructor(...e){this._delegate=new ni(...e)}static documentId(){return new ky(ht.keyField().canonicalString())}isEqual(e){return e=B(e),e instanceof ni?this._delegate._internalPath.isEqual(e._internalPath):!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{constructor(e){this._delegate=e}static serverTimestamp(){const e=dU();return e._methodName="FieldValue.serverTimestamp",new es(e)}static delete(){const e=hU();return e._methodName="FieldValue.delete",new es(e)}static arrayUnion(...e){const n=fU(...e);return n._methodName="FieldValue.arrayUnion",new es(n)}static arrayRemove(...e){const n=pU(...e);return n._methodName="FieldValue.arrayRemove",new es(n)}static increment(e){const n=mU(e);return n._methodName="FieldValue.increment",new es(n)}isEqual(e){return this._delegate.isEqual(e._delegate)}}/**
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
 */const TU={Firestore:GS,GeoPoint:Kh,Timestamp:Ke,Blob:qu,Transaction:KS,WriteBatch:QS,DocumentReference:fn,DocumentSnapshot:Hu,Query:Ot,QueryDocumentSnapshot:Wu,QuerySnapshot:Sy,CollectionReference:No,FieldPath:ky,FieldValue:es,setLogLevel:IU,CACHE_SIZE_UNLIMITED:S$};function SU(t,e){t.INTERNAL.registerComponent(new _n("firestore-compat",n=>{const r=n.getProvider("app-compat").getImmediate(),i=n.getProvider("firestore").getImmediate();return e(r,i)},"PUBLIC").setServiceProps(Object.assign({},TU)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kU(t){SU(t,(e,n)=>new GS(e,n,new _U)),t.registerVersion(yU,vU)}kU(Us);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ts;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(ts||(ts={}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JS="firebasestorage.googleapis.com",ZS="storageBucket",CU=2*60*1e3,bU=10*60*1e3;class Ae extends Qt{constructor(e,n){super(Cy(e),`Firebase Storage: ${n} (${Cy(e)})`);this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Ae.prototype)}_codeEquals(e){return Cy(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}function Cy(t){return"storage/"+t}function by(){const t="An unknown error occurred, please check the error payload for server response.";return new Ae("unknown",t)}function AU(t){return new Ae("object-not-found","Object '"+t+"' does not exist.")}function RU(t){return new Ae("quota-exceeded","Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function NU(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Ae("unauthenticated",t)}function PU(){return new Ae("unauthorized-app","This app does not have permission to access Firebase Storage on this project.")}function xU(t){return new Ae("unauthorized","User does not have permission to access '"+t+"'.")}function DU(){return new Ae("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function ek(){return new Ae("canceled","User canceled the upload/download.")}function OU(t){return new Ae("invalid-url","Invalid URL '"+t+"'.")}function LU(t){return new Ae("invalid-default-bucket","Invalid default bucket '"+t+"'.")}function MU(){return new Ae("no-default-bucket","No default bucket found. Did you set the '"+ZS+"' property when initializing the app?")}function tk(){return new Ae("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.")}function $U(){return new Ae("server-file-wrong-size","Server recorded incorrect upload file size, please retry the upload.")}function UU(){return new Ae("no-download-url","The given file does not have any download URLs.")}function Po(t){return new Ae("invalid-argument",t)}function nk(){return new Ae("app-deleted","The Firebase app was deleted.")}function rk(t){return new Ae("invalid-root-operation","The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Gu(t,e){return new Ae("invalid-format","String does not match format '"+t+"': "+e)}function td(t){throw new Ae("internal-error","Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FU{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.errorCode_=ts.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=ts.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=ts.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw td("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw td("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw td("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponseText(){if(!this.sent_)throw td("cannot .getResponseText() before sending");return this.xhr_.responseText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}function VU(){return new FU}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BU{createConnection(){return VU()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=St.makeFromUrl(e,n)}catch{return new St(e,"")}if(r.path==="")return r;throw LU(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(v){v.path.charAt(v.path.length-1)==="/"&&(v.path_=v.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),u={bucket:1,path:3};function l(v){v.path_=decodeURIComponent(v.path)}const c="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",g=new RegExp(`^https?://${h}/${c}/b/${i}/o${d}`,"i"),y={bucket:1,path:3},_=n===JS?"(?:storage.googleapis.com|storage.cloud.google.com)":n,f="([^?#]*)",p=new RegExp(`^https?://${_}/${i}/${f}`,"i"),w=[{regex:a,indices:u,postModify:s},{regex:g,indices:y,postModify:l},{regex:p,indices:{bucket:1,path:2},postModify:l}];for(let v=0;v<w.length;v++){const P=w[v],b=P.regex.exec(e);if(b){const V=b[P.indices.bucket];let F=b[P.indices.path];F||(F=""),r=new St(V,F),P.postModify(r);break}}if(r==null)throw OU(e);return r}}class jU{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zU(t,e,n){let r=1,i=null,s=!1,o=0;function a(){return o===2}let u=!1;function l(...y){u||(u=!0,e.apply(null,y))}function c(y){i=setTimeout(()=>{i=null,t(h,a())},y)}function h(y,..._){if(u)return;if(y){l.call(null,y,..._);return}if(a()||s){l.call(null,y,..._);return}r<64&&(r*=2);let p;o===1?(o=2,p=0):p=(r+Math.random())*1e3,c(p)}let d=!1;function g(y){d||(d=!0,!u&&(i!==null?(y||(o=2),clearTimeout(i),c(0)):y||(o=1)))}return c(0),setTimeout(()=>{s=!0,g(!0)},n),g}function qU(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HU(t){return t!==void 0}function WU(t){return typeof t=="function"}function GU(t){return typeof t=="object"&&!Array.isArray(t)}function nd(t){return typeof t=="string"||t instanceof String}function ik(t){return Ay()&&t instanceof Blob}function Ay(){return typeof Blob!="undefined"}function Ry(t,e,n,r){if(r<e)throw Po(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Po(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oi(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function sk(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KU{constructor(e,n,r,i,s,o,a,u,l,c,h){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=u,this.timeout_=l,this.progressCallback_=c,this.pool_=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((d,g)=>{this.resolve_=d,this.reject_=g,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new rd(!1,null,!0));return}const s=this.pool_.createConnection();this.pendingConnection_=s;const o=a=>{const u=a.loaded,l=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,l)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===ts.NO_ERROR,u=s.getStatus();if(!a||this.isRetryStatusCode_(u)){const c=s.getErrorCode()===ts.ABORT;r(!1,new rd(!1,null,c));return}const l=this.successCodes_.indexOf(u)!==-1;r(!0,new rd(l,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const u=this.callback_(a,a.getResponseText());HU(u)?s(u):s()}catch(u){o(u)}else if(a!==null){const u=by();u.serverResponse=a.getResponseText(),this.errorCallback_?o(this.errorCallback_(a,u)):o(u)}else if(i.canceled){const u=this.appDelete_?nk():ek();o(u)}else{const u=DU();o(u)}};this.canceled_?n(!1,new rd(!1,null,!0)):this.backoffId_=zU(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&qU(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}isRetryStatusCode_(e){const n=e>=500&&e<600,i=[408,429].indexOf(e)!==-1,s=this.additionalRetryCodes_.indexOf(e)!==-1;return n||i||s}}class rd{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function QU(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function YU(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e!=null?e:"AppManager")}function XU(t,e){e&&(t["X-Firebase-GMPID"]=e)}function JU(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function ZU(t,e,n,r,i,s){const o=sk(t.urlParams),a=t.url+o,u=Object.assign({},t.headers);return XU(u,e),QU(u,n),YU(u,s),JU(u,r),new KU(a,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eF(){return typeof BlobBuilder!="undefined"?BlobBuilder:typeof WebKitBlobBuilder!="undefined"?WebKitBlobBuilder:void 0}function tF(...t){const e=eF();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Ay())return new Blob(t);throw new Ae("unsupported-environment","This browser doesn't seem to support creating Blobs")}}function nF(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function rF(t){return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Ny{constructor(e,n){this.data=e,this.contentType=n||null}}function ok(t,e){switch(t){case pn.RAW:return new Ny(ak(e));case pn.BASE64:case pn.BASE64URL:return new Ny(uk(t,e));case pn.DATA_URL:return new Ny(sF(e),oF(e))}throw by()}function ak(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)==55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)==56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)==56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function iF(t){let e;try{e=decodeURIComponent(t)}catch{throw Gu(pn.DATA_URL,"Malformed data URL.")}return ak(e)}function uk(t,e){switch(t){case pn.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw Gu(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case pn.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw Gu(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=rF(e)}catch{throw Gu(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class lk{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Gu(pn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=aF(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-";base64".length):r),this.rest=e.substring(e.indexOf(",")+1)}}function sF(t){const e=new lk(t);return e.base64?uk(pn.BASE64,e.rest):iF(e.rest)}function oF(t){return new lk(t).contentType}function aF(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr{constructor(e,n){let r=0,i="";ik(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(ik(this.data_)){const r=this.data_,i=nF(r,e,n);return i===null?null:new hr(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new hr(r,!0)}}static getBlob(...e){if(Ay()){const n=e.map(r=>r instanceof hr?r.data_:r);return new hr(tF.apply(null,n))}else{const n=e.map(o=>nd(o)?ok(pn.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[s++]=o[a]}),new hr(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Py(t){let e;try{e=JSON.parse(t)}catch{return null}return GU(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uF(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function lF(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function ck(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cF(t,e){return e}class Lt{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||cF}}let id=null;function hF(t){return!nd(t)||t.length<2?t:ck(t)}function sd(){if(id)return id;const t=[];t.push(new Lt("bucket")),t.push(new Lt("generation")),t.push(new Lt("metageneration")),t.push(new Lt("name","fullPath",!0));function e(s,o){return hF(o)}const n=new Lt("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new Lt("size");return i.xform=r,t.push(i),t.push(new Lt("timeCreated")),t.push(new Lt("updated")),t.push(new Lt("md5Hash",null,!0)),t.push(new Lt("cacheControl",null,!0)),t.push(new Lt("contentDisposition",null,!0)),t.push(new Lt("contentEncoding",null,!0)),t.push(new Lt("contentLanguage",null,!0)),t.push(new Lt("contentType",null,!0)),t.push(new Lt("metadata","customMetadata",!0)),id=t,id}function dF(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new St(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function fF(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return dF(r,t),r}function hk(t,e,n){const r=Py(e);return r===null?null:fF(t,r,n)}function pF(t,e,n,r){const i=Py(e);if(i===null||!nd(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(l=>{const c=t.bucket,h=t.fullPath,d="/b/"+o(c)+"/o/"+o(h),g=oi(d,n,r),y=sk({alt:"media",token:l});return g+y})[0]}function xy(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}/**
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
 */const dk="prefixes",fk="items";function mF(t,e,n){const r={prefixes:[],items:[],nextPageToken:n.nextPageToken};if(n[dk])for(const i of n[dk]){const s=i.replace(/\/$/,""),o=t._makeStorageReference(new St(e,s));r.prefixes.push(o)}if(n[fk])for(const i of n[fk]){const s=t._makeStorageReference(new St(e,i.name));r.items.push(s)}return r}function gF(t,e,n){const r=Py(n);return r===null?null:mF(t,e,r)}class dr{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zn(t){if(!t)throw by()}function od(t,e){function n(r,i){const s=hk(t,i,e);return zn(s!==null),s}return n}function yF(t,e){function n(r,i){const s=gF(t,e,i);return zn(s!==null),s}return n}function vF(t,e){function n(r,i){const s=hk(t,i,e);return zn(s!==null),pF(s,i,t.host,t._protocol)}return n}function xo(t){function e(n,r){let i;return n.getStatus()===401?n.getResponseText().includes("Firebase App Check token is invalid")?i=PU():i=NU():n.getStatus()===402?i=RU(t.bucket):n.getStatus()===403?i=xU(t.path):i=r,i.serverResponse=r.serverResponse,i}return e}function ad(t){const e=xo(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=AU(t.path)),s.serverResponse=i.serverResponse,s}return n}function pk(t,e,n){const r=e.fullServerUrl(),i=oi(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new dr(i,s,od(t,n),o);return a.errorHandler=ad(e),a}function wF(t,e,n,r,i){const s={};e.isRoot?s.prefix="":s.prefix=e.path+"/",n&&n.length>0&&(s.delimiter=n),r&&(s.pageToken=r),i&&(s.maxResults=i);const o=e.bucketOnlyServerUrl(),a=oi(o,t.host,t._protocol),u="GET",l=t.maxOperationRetryTime,c=new dr(a,u,yF(t,e.bucket),l);return c.urlParams=s,c.errorHandler=xo(e),c}function _F(t,e,n){const r=e.fullServerUrl(),i=oi(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new dr(i,s,vF(t,n),o);return a.errorHandler=ad(e),a}function IF(t,e,n,r){const i=e.fullServerUrl(),s=oi(i,t.host,t._protocol),o="PATCH",a=xy(n,r),u={"Content-Type":"application/json; charset=utf-8"},l=t.maxOperationRetryTime,c=new dr(s,o,od(t,r),l);return c.headers=u,c.body=a,c.errorHandler=ad(e),c}function EF(t,e){const n=e.fullServerUrl(),r=oi(n,t.host,t._protocol),i="DELETE",s=t.maxOperationRetryTime;function o(u,l){}const a=new dr(r,i,o,s);return a.successCodes=[200,204],a.errorHandler=ad(e),a}function TF(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function mk(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=TF(null,e)),r}function SF(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let w="";for(let v=0;v<2;v++)w=w+Math.random().toString().slice(2);return w}const u=a();o["Content-Type"]="multipart/related; boundary="+u;const l=mk(e,r,i),c=xy(l,n),h="--"+u+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+c+`\r
--`+u+`\r
Content-Type: `+l.contentType+`\r
\r
`,d=`\r
--`+u+"--",g=hr.getBlob(h,r,d);if(g===null)throw tk();const y={name:l.fullPath},_=oi(s,t.host,t._protocol),f="POST",p=t.maxUploadRetryTime,m=new dr(_,f,od(t,n),p);return m.urlParams=y,m.headers=o,m.body=g.uploadData(),m.errorHandler=xo(e),m}class ud{constructor(e,n,r,i){this.current=e,this.total=n,this.finalized=!!r,this.metadata=i||null}}function Dy(t,e){let n=null;try{n=t.getResponseHeader("X-Goog-Upload-Status")}catch{zn(!1)}return zn(!!n&&(e||["active"]).indexOf(n)!==-1),n}function kF(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o=mk(e,r,i),a={name:o.fullPath},u=oi(s,t.host,t._protocol),l="POST",c={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${r.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},h=xy(o,n),d=t.maxUploadRetryTime;function g(_){Dy(_);let f;try{f=_.getResponseHeader("X-Goog-Upload-URL")}catch{zn(!1)}return zn(nd(f)),f}const y=new dr(u,l,g,d);return y.urlParams=a,y.headers=c,y.body=h,y.errorHandler=xo(e),y}function CF(t,e,n,r){const i={"X-Goog-Upload-Command":"query"};function s(l){const c=Dy(l,["active","final"]);let h=null;try{h=l.getResponseHeader("X-Goog-Upload-Size-Received")}catch{zn(!1)}h||zn(!1);const d=Number(h);return zn(!isNaN(d)),new ud(d,r.size(),c==="final")}const o="POST",a=t.maxUploadRetryTime,u=new dr(n,o,s,a);return u.headers=i,u.errorHandler=xo(e),u}const gk=256*1024;function bF(t,e,n,r,i,s,o,a){const u=new ud(0,0);if(o?(u.current=o.current,u.total=o.total):(u.current=0,u.total=r.size()),r.size()!==u.total)throw $U();const l=u.total-u.current;let c=l;i>0&&(c=Math.min(c,i));const h=u.current,d=h+c,y={"X-Goog-Upload-Command":c===l?"upload, finalize":"upload","X-Goog-Upload-Offset":`${u.current}`},_=r.slice(h,d);if(_===null)throw tk();function f(v,P){const b=Dy(v,["active","final"]),V=u.current+c,F=r.size();let M;return b==="final"?M=od(e,s)(v,P):M=null,new ud(V,F,b==="final",M)}const p="POST",m=e.maxUploadRetryTime,w=new dr(n,p,f,m);return w.headers=y,w.body=_.uploadData(),w.progressCallback=a||null,w.errorHandler=xo(t),w}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AF={STATE_CHANGED:"state_changed"},Mt={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function Oy(t){switch(t){case"running":case"pausing":case"canceling":return Mt.RUNNING;case"paused":return Mt.PAUSED;case"success":return Mt.SUCCESS;case"canceled":return Mt.CANCELED;case"error":return Mt.ERROR;default:return Mt.ERROR}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RF{constructor(e,n,r){if(WU(e)||n!=null||r!=null)this.next=e,this.error=n!=null?n:void 0,this.complete=r!=null?r:void 0;else{const s=e;this.next=s.next,this.error=s.error,this.complete=s.complete}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Do(t){return(...e)=>{Promise.resolve().then(()=>t(...e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yk{constructor(e,n,r=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=n,this._metadata=r,this._mappings=sd(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=i=>{this._request=void 0,this._chunkMultiplier=1,i._codeEquals("canceled")?(this._needToFetchStatus=!0,this.completeTransitions_()):(this._error=i,this._transition("error"))},this._metadataErrorHandler=i=>{this._request=void 0,i._codeEquals("canceled")?this.completeTransitions_():(this._error=i,this._transition("error"))},this._promise=new Promise((i,s)=>{this._resolve=i,this._reject=s,this._start()}),this._promise.then(null,()=>{})}_makeProgressCallback(){const e=this._transferred;return n=>this._updateProgress(e+n)}_shouldDoResumable(e){return e.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this._continueUpload():this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([n,r])=>{switch(this._state){case"running":e(n,r);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,n)=>{const r=kF(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._uploadUrl=s,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((n,r)=>{const i=CF(this._ref.storage,this._ref._location,e,this._blob),s=this._ref.storage._makeRequest(i,n,r);this._request=s,s.getPromise().then(o=>{o=o,this._request=void 0,this._updateProgress(o.current),this._needToFetchStatus=!1,o.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=gk*this._chunkMultiplier,n=new ud(this._transferred,this._blob.size()),r=this._uploadUrl;this._resolveToken((i,s)=>{let o;try{o=bF(this._ref._location,this._ref.storage,r,this._blob,e,this._mappings,n,this._makeProgressCallback())}catch(u){this._error=u,this._transition("error");return}const a=this._ref.storage._makeRequest(o,i,s);this._request=a,a.getPromise().then(u=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(u.current),u.finalized?(this._metadata=u.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){gk*this._chunkMultiplier<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,n)=>{const r=pk(this._ref.storage,this._ref._location,this._mappings),i=this._ref.storage._makeRequest(r,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._metadata=s,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,n)=>{const r=SF(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._metadata=s,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const n=this._transferred;this._transferred=e,this._transferred!==n&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":this._state=e,this._request!==void 0&&this._request.cancel();break;case"pausing":this._state=e,this._request!==void 0&&this._request.cancel();break;case"running":const n=this._state==="paused";this._state=e,n&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=ek(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=Oy(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,n,r,i){const s=new RF(n||void 0,r||void 0,i||void 0);return this._addObserver(s),()=>{this._removeObserver(s)}}then(e,n){return this._promise.then(e,n)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const n=this._observers.indexOf(e);n!==-1&&this._observers.splice(n,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(n=>{this._notifyObserver(n)})}_finishPromise(){if(this._resolve!==void 0){let e=!0;switch(Oy(this._state)){case Mt.SUCCESS:Do(this._resolve.bind(null,this.snapshot))();break;case Mt.CANCELED:case Mt.ERROR:const n=this._reject;Do(n.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(Oy(this._state)){case Mt.RUNNING:case Mt.PAUSED:e.next&&Do(e.next.bind(e,this.snapshot))();break;case Mt.SUCCESS:e.complete&&Do(e.complete.bind(e))();break;case Mt.CANCELED:case Mt.ERROR:e.error&&Do(e.error.bind(e,this._error))();break;default:e.error&&Do(e.error.bind(e,this._error))()}}resume(){const e=this._state==="paused"||this._state==="pausing";return e&&this._transition("running"),e}pause(){const e=this._state==="running";return e&&this._transition("pausing"),e}cancel(){const e=this._state==="running"||this._state==="pausing";return e&&this._transition("canceling"),e}}/**
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
 */class ns{constructor(e,n){this._service=e,n instanceof St?this._location=n:this._location=St.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new ns(e,n)}get root(){const e=new St(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return ck(this._location.path)}get storage(){return this._service}get parent(){const e=uF(this._location.path);if(e===null)return null;const n=new St(this._location.bucket,e);return new ns(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw rk(e)}}function NF(t,e,n){return t._throwIfRoot("uploadBytesResumable"),new yk(t,new hr(e),n)}function PF(t){const e={prefixes:[],items:[]};return vk(t,e).then(()=>e)}async function vk(t,e,n){const i=await wk(t,{pageToken:n});e.prefixes.push(...i.prefixes),e.items.push(...i.items),i.nextPageToken!=null&&await vk(t,e,i.nextPageToken)}async function wk(t,e){e!=null&&typeof e.maxResults=="number"&&Ry("options.maxResults",1,1e3,e.maxResults);const n=e||{},r=wF(t.storage,t._location,"/",n.pageToken,n.maxResults);return(await t.storage.makeRequestWithTokens(r)).getPromise()}async function xF(t){t._throwIfRoot("getMetadata");const e=pk(t.storage,t._location,sd());return(await t.storage.makeRequestWithTokens(e)).getPromise()}async function DF(t,e){t._throwIfRoot("updateMetadata");const n=IF(t.storage,t._location,e,sd());return(await t.storage.makeRequestWithTokens(n)).getPromise()}async function OF(t){t._throwIfRoot("getDownloadURL");const e=_F(t.storage,t._location,sd());return(await t.storage.makeRequestWithTokens(e)).getPromise().then(n=>{if(n===null)throw UU();return n})}async function LF(t){t._throwIfRoot("deleteObject");const e=EF(t.storage,t._location);return(await t.storage.makeRequestWithTokens(e)).getPromise()}function _k(t,e){const n=lF(t._location.path,e),r=new St(t._location.bucket,n);return new ns(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MF(t){return/^[A-Za-z]+:\/\//.test(t)}function $F(t,e){return new ns(t,e)}function Ik(t,e){if(t instanceof Ly){const n=t;if(n._bucket==null)throw MU();const r=new ns(n,n._bucket);return e!=null?Ik(r,e):r}else return e!==void 0?_k(t,e):t}function UF(t,e){if(e&&MF(e)){if(t instanceof Ly)return $F(t,e);throw Po("To use ref(service, url), the first argument must be a Storage instance.")}else return Ik(t,e)}function Ek(t,e){const n=e==null?void 0:e[ZS];return n==null?null:St.makeFromBucketSpec(n,t)}function FF(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:m_(i,t.app.options.projectId))}class Ly{constructor(e,n,r,i,s,o){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._pool=i,this._url=s,this._firebaseVersion=o,this._bucket=null,this._host=JS,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=CU,this._maxUploadRetryTime=bU,this._requests=new Set,s!=null?this._bucket=St.makeFromBucketSpec(s,this._host):this._bucket=Ek(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=St.makeFromBucketSpec(this._url,e):this._bucket=Ek(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Ry("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Ry("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new ns(this,e)}_makeRequest(e,n,r){if(this._deleted)return new jU(nk());{const i=ZU(e,this._appId,n,r,this._pool,this._firebaseVersion);return this._requests.add(i),i.getPromise().then(()=>this._requests.delete(i),()=>this._requests.delete(i)),i}}async makeRequestWithTokens(e){const[n,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r)}}const Tk="@firebase/storage",Sk="0.8.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VF="storage";function BF(t,e,n){return t=B(t),NF(t,e,n)}function jF(t){return t=B(t),xF(t)}function zF(t,e){return t=B(t),DF(t,e)}function qF(t,e){return t=B(t),wk(t,e)}function HF(t){return t=B(t),PF(t)}function WF(t){return t=B(t),OF(t)}function GF(t){return t=B(t),LF(t)}function kk(t,e){return t=B(t),UF(t,e)}function KF(t,e){return _k(t,e)}function QF(t,e,n,r={}){FF(t,e,n,r)}function YF(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new Ly(n,r,i,new BU,e,Fr)}function XF(){Ur(new _n(VF,YF,"PUBLIC").setMultipleInstances(!0)),ln(Tk,Sk,""),ln(Tk,Sk,"esm2017")}XF();/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ld{constructor(e,n,r){this._delegate=e,this.task=n,this.ref=r}get bytesTransferred(){return this._delegate.bytesTransferred}get metadata(){return this._delegate.metadata}get state(){return this._delegate.state}get totalBytes(){return this._delegate.totalBytes}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ck{constructor(e,n){this._delegate=e,this._ref=n,this.cancel=this._delegate.cancel.bind(this._delegate),this.catch=this._delegate.catch.bind(this._delegate),this.pause=this._delegate.pause.bind(this._delegate),this.resume=this._delegate.resume.bind(this._delegate)}get snapshot(){return new ld(this._delegate.snapshot,this,this._ref)}then(e,n){return this._delegate.then(r=>{if(e)return e(new ld(r,this,this._ref))},n)}on(e,n,r,i){let s;return n&&(typeof n=="function"?s=o=>n(new ld(o,this,this._ref)):s={next:n.next?o=>n.next(new ld(o,this,this._ref)):void 0,complete:n.complete||void 0,error:n.error||void 0}),this._delegate.on(e,s,r||void 0,i||void 0)}}class bk{constructor(e,n){this._delegate=e,this._service=n}get prefixes(){return this._delegate.prefixes.map(e=>new fr(e,this._service))}get items(){return this._delegate.items.map(e=>new fr(e,this._service))}get nextPageToken(){return this._delegate.nextPageToken||null}}/**
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
 */class fr{constructor(e,n){this._delegate=e,this.storage=n}get name(){return this._delegate.name}get bucket(){return this._delegate.bucket}get fullPath(){return this._delegate.fullPath}toString(){return this._delegate.toString()}child(e){const n=KF(this._delegate,e);return new fr(n,this.storage)}get root(){return new fr(this._delegate.root,this.storage)}get parent(){const e=this._delegate.parent;return e==null?null:new fr(e,this.storage)}put(e,n){return this._throwIfRoot("put"),new Ck(BF(this._delegate,e,n),this)}putString(e,n=pn.RAW,r){this._throwIfRoot("putString");const i=ok(n,e),s=Object.assign({},r);return s.contentType==null&&i.contentType!=null&&(s.contentType=i.contentType),new Ck(new yk(this._delegate,new hr(i.data,!0),s),this)}listAll(){return HF(this._delegate).then(e=>new bk(e,this.storage))}list(e){return qF(this._delegate,e||void 0).then(n=>new bk(n,this.storage))}getMetadata(){return jF(this._delegate)}updateMetadata(e){return zF(this._delegate,e)}getDownloadURL(){return WF(this._delegate)}delete(){return this._throwIfRoot("delete"),GF(this._delegate)}_throwIfRoot(e){if(this._delegate._location.path==="")throw rk(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ak{constructor(e,n){this.app=e,this._delegate=n}get maxOperationRetryTime(){return this._delegate.maxOperationRetryTime}get maxUploadRetryTime(){return this._delegate.maxUploadRetryTime}ref(e){if(Rk(e))throw Po("ref() expected a child path but got a URL, use refFromURL instead.");return new fr(kk(this._delegate,e),this)}refFromURL(e){if(!Rk(e))throw Po("refFromURL() expected a full URL but got a child path, use ref() instead.");try{St.makeFromUrl(e,this._delegate.host)}catch{throw Po("refFromUrl() expected a valid full URL but got an invalid one.")}return new fr(kk(this._delegate,e),this)}setMaxUploadRetryTime(e){this._delegate.maxUploadRetryTime=e}setMaxOperationRetryTime(e){this._delegate.maxOperationRetryTime=e}useEmulator(e,n,r={}){QF(this._delegate,e,n,r)}}function Rk(t){return/^[A-Za-z]+:\/\//.test(t)}const JF="@firebase/storage-compat",ZF="0.1.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e2="storage-compat";function t2(t,{instanceIdentifier:e}){const n=t.getProvider("app-compat").getImmediate(),r=t.getProvider("storage").getImmediate({identifier:e});return new Ak(n,r)}function n2(t){const e={TaskState:Mt,TaskEvent:AF,StringFormat:pn,Storage:Ak,Reference:fr};t.INTERNAL.registerComponent(new _n(e2,t2,"PUBLIC").setServiceProps(e).setMultipleInstances(!0)),t.registerVersion(JF,ZF)}n2(Us);export{Xu as R,r2 as a,Us as f,ai as r,i2 as s};
