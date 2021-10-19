var li={exports:{}},ee={};/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var Uy=Object.getOwnPropertySymbols,Lk=Object.prototype.hasOwnProperty,Mk=Object.prototype.propertyIsEnumerable;function $k(t){if(t==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}function Uk(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de",Object.getOwnPropertyNames(t)[0]==="5")return!1;for(var e={},n=0;n<10;n++)e["_"+String.fromCharCode(n)]=n;var r=Object.getOwnPropertyNames(e).map(function(s){return e[s]});if(r.join("")!=="0123456789")return!1;var i={};return"abcdefghijklmnopqrst".split("").forEach(function(s){i[s]=s}),Object.keys(Object.assign({},i)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}var Fy=Uk()?Object.assign:function(t,e){for(var n,r=$k(t),i,s=1;s<arguments.length;s++){n=Object(arguments[s]);for(var o in n)Lk.call(n,o)&&(r[o]=n[o]);if(Uy){i=Uy(n);for(var a=0;a<i.length;a++)Mk.call(n,i[a])&&(r[i[a]]=n[i[a]])}}return r};/** @license React v17.0.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pd=Fy,ss=60103,Vy=60106;ee.Fragment=60107;ee.StrictMode=60108;ee.Profiler=60114;var By=60109,zy=60110,jy=60112;ee.Suspense=60113;var qy=60115,Hy=60116;if(typeof Symbol=="function"&&Symbol.for){var yn=Symbol.for;ss=yn("react.element"),Vy=yn("react.portal"),ee.Fragment=yn("react.fragment"),ee.StrictMode=yn("react.strict_mode"),ee.Profiler=yn("react.profiler"),By=yn("react.provider"),zy=yn("react.context"),jy=yn("react.forward_ref"),ee.Suspense=yn("react.suspense"),qy=yn("react.memo"),Hy=yn("react.lazy")}var Wy=typeof Symbol=="function"&&Symbol.iterator;function Fk(t){return t===null||typeof t!="object"?null:(t=Wy&&t[Wy]||t["@@iterator"],typeof t=="function"?t:null)}function Fo(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Gy={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ky={};function os(t,e,n){this.props=t,this.context=e,this.refs=Ky,this.updater=n||Gy}os.prototype.isReactComponent={};os.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error(Fo(85));this.updater.enqueueSetState(this,t,e,"setState")};os.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Qy(){}Qy.prototype=os.prototype;function md(t,e,n){this.props=t,this.context=e,this.refs=Ky,this.updater=n||Gy}var gd=md.prototype=new Qy;gd.constructor=md;pd(gd,os.prototype);gd.isPureReactComponent=!0;var yd={current:null},Yy=Object.prototype.hasOwnProperty,Xy={key:!0,ref:!0,__self:!0,__source:!0};function Jy(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Yy.call(e,r)&&!Xy.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var u=Array(a),l=0;l<a;l++)u[l]=arguments[l+2];i.children=u}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:ss,type:t,key:s,ref:o,props:i,_owner:yd.current}}function Vk(t,e){return{$$typeof:ss,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function vd(t){return typeof t=="object"&&t!==null&&t.$$typeof===ss}function Bk(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Zy=/\/+/g;function wd(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Bk(""+t.key):e.toString(36)}function Ju(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ss:case Vy:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+wd(o,0):r,Array.isArray(i)?(n="",t!=null&&(n=t.replace(Zy,"$&/")+"/"),Ju(i,e,n,"",function(l){return l})):i!=null&&(vd(i)&&(i=Vk(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Zy,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Array.isArray(t))for(var a=0;a<t.length;a++){s=t[a];var u=r+wd(s,a);o+=Ju(s,e,n,u,i)}else if(u=Fk(t),typeof u=="function")for(t=u.call(t),a=0;!(s=t.next()).done;)s=s.value,u=r+wd(s,a++),o+=Ju(s,e,n,u,i);else if(s==="object")throw e=""+t,Error(Fo(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e));return o}function Zu(t,e,n){if(t==null)return t;var r=[],i=0;return Ju(t,r,"","",function(s){return e.call(n,s,i++)}),r}function zk(t){if(t._status===-1){var e=t._result;e=e(),t._status=0,t._result=e,e.then(function(n){t._status===0&&(n=n.default,t._status=1,t._result=n)},function(n){t._status===0&&(t._status=2,t._result=n)})}if(t._status===1)return t._result;throw t._result}var ev={current:null};function Wn(){var t=ev.current;if(t===null)throw Error(Fo(321));return t}var jk={ReactCurrentDispatcher:ev,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:yd,IsSomeRendererActing:{current:!1},assign:pd};ee.Children={map:Zu,forEach:function(t,e,n){Zu(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Zu(t,function(){e++}),e},toArray:function(t){return Zu(t,function(e){return e})||[]},only:function(t){if(!vd(t))throw Error(Fo(143));return t}};ee.Component=os;ee.PureComponent=md;ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=jk;ee.cloneElement=function(t,e,n){if(t==null)throw Error(Fo(267,t));var r=pd({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=yd.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(u in e)Yy.call(e,u)&&!Xy.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&a!==void 0?a[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var l=0;l<u;l++)a[l]=arguments[l+2];r.children=a}return{$$typeof:ss,type:t.type,key:i,ref:s,props:r,_owner:o}};ee.createContext=function(t,e){return e===void 0&&(e=null),t={$$typeof:zy,_calculateChangedBits:e,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null},t.Provider={$$typeof:By,_context:t},t.Consumer=t};ee.createElement=Jy;ee.createFactory=function(t){var e=Jy.bind(null,t);return e.type=t,e};ee.createRef=function(){return{current:null}};ee.forwardRef=function(t){return{$$typeof:jy,render:t}};ee.isValidElement=vd;ee.lazy=function(t){return{$$typeof:Hy,_payload:{_status:-1,_result:t},_init:zk}};ee.memo=function(t,e){return{$$typeof:qy,type:t,compare:e===void 0?null:e}};ee.useCallback=function(t,e){return Wn().useCallback(t,e)};ee.useContext=function(t,e){return Wn().useContext(t,e)};ee.useDebugValue=function(){};ee.useEffect=function(t,e){return Wn().useEffect(t,e)};ee.useImperativeHandle=function(t,e,n){return Wn().useImperativeHandle(t,e,n)};ee.useLayoutEffect=function(t,e){return Wn().useLayoutEffect(t,e)};ee.useMemo=function(t,e){return Wn().useMemo(t,e)};ee.useReducer=function(t,e,n){return Wn().useReducer(t,e,n)};ee.useRef=function(t){return Wn().useRef(t)};ee.useState=function(t){return Wn().useState(t)};ee.version="17.0.2";li.exports=ee;var vn=li.exports,tv={exports:{}},nn={},nv={exports:{}},rv={};/** @license React v0.20.2
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){var e,n,r,i;if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}if(typeof window=="undefined"||typeof MessageChannel!="function"){var u=null,l=null,c=function(){if(u!==null)try{var O=t.unstable_now();u(!0,O),u=null}catch(S){throw setTimeout(c,0),S}};e=function(O){u!==null?setTimeout(e,0,O):(u=O,setTimeout(c,0))},n=function(O,S){l=setTimeout(O,S)},r=function(){clearTimeout(l)},t.unstable_shouldYield=function(){return!1},i=t.unstable_forceFrameRate=function(){}}else{var h=window.setTimeout,d=window.clearTimeout;if(typeof console!="undefined"){var g=window.cancelAnimationFrame;typeof window.requestAnimationFrame!="function"&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"),typeof g!="function"&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills")}var y=!1,_=null,f=-1,p=5,m=0;t.unstable_shouldYield=function(){return t.unstable_now()>=m},i=function(){},t.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):p=0<O?Math.floor(1e3/O):5};var w=new MessageChannel,v=w.port2;w.port1.onmessage=function(){if(_!==null){var O=t.unstable_now();m=O+p;try{_(!0,O)?v.postMessage(null):(y=!1,_=null)}catch(S){throw v.postMessage(null),S}}else y=!1},e=function(O){_=O,y||(y=!0,v.postMessage(null))},n=function(O,S){f=h(function(){O(t.unstable_now())},S)},r=function(){d(f),f=-1}}function P(O,S){var k=O.length;O.push(S);e:for(;;){var D=k-1>>>1,j=O[D];if(j!==void 0&&0<F(j,S))O[D]=S,O[k]=j,k=D;else break e}}function b(O){return O=O[0],O===void 0?null:O}function V(O){var S=O[0];if(S!==void 0){var k=O.pop();if(k!==S){O[0]=k;e:for(var D=0,j=O.length;D<j;){var I=2*(D+1)-1,X=O[I],x=I+1,ae=O[x];if(X!==void 0&&0>F(X,k))ae!==void 0&&0>F(ae,X)?(O[D]=ae,O[x]=k,D=x):(O[D]=X,O[I]=k,D=I);else if(ae!==void 0&&0>F(ae,k))O[D]=ae,O[x]=k,D=x;else break e}}return S}return null}function F(O,S){var k=O.sortIndex-S.sortIndex;return k!==0?k:O.id-S.id}var M=[],he=[],Cn=1,fe=null,de=3,kt=!1,Te=!1,mn=!1;function Ct(O){for(var S=b(he);S!==null;){if(S.callback===null)V(he);else if(S.startTime<=O)V(he),S.sortIndex=S.expirationTime,P(M,S);else break;S=b(he)}}function pt(O){if(mn=!1,Ct(O),!Te)if(b(M)!==null)Te=!0,e(Hn);else{var S=b(he);S!==null&&n(pt,S.startTime-O)}}function Hn(O,S){Te=!1,mn&&(mn=!1,r()),kt=!0;var k=de;try{for(Ct(S),fe=b(M);fe!==null&&(!(fe.expirationTime>S)||O&&!t.unstable_shouldYield());){var D=fe.callback;if(typeof D=="function"){fe.callback=null,de=fe.priorityLevel;var j=D(fe.expirationTime<=S);S=t.unstable_now(),typeof j=="function"?fe.callback=j:fe===b(M)&&V(M),Ct(S)}else V(M);fe=b(M)}if(fe!==null)var I=!0;else{var X=b(he);X!==null&&n(pt,X.startTime-S),I=!1}return I}finally{fe=null,de=k,kt=!1}}var mr=i;t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(O){O.callback=null},t.unstable_continueExecution=function(){Te||kt||(Te=!0,e(Hn))},t.unstable_getCurrentPriorityLevel=function(){return de},t.unstable_getFirstCallbackNode=function(){return b(M)},t.unstable_next=function(O){switch(de){case 1:case 2:case 3:var S=3;break;default:S=de}var k=de;de=S;try{return O()}finally{de=k}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=mr,t.unstable_runWithPriority=function(O,S){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var k=de;de=O;try{return S()}finally{de=k}},t.unstable_scheduleCallback=function(O,S,k){var D=t.unstable_now();switch(typeof k=="object"&&k!==null?(k=k.delay,k=typeof k=="number"&&0<k?D+k:D):k=D,O){case 1:var j=-1;break;case 2:j=250;break;case 5:j=1073741823;break;case 4:j=1e4;break;default:j=5e3}return j=k+j,O={id:Cn++,callback:S,priorityLevel:O,startTime:k,expirationTime:j,sortIndex:-1},k>D?(O.sortIndex=k,P(he,O),b(M)===null&&O===b(he)&&(mn?r():mn=!0,n(pt,k-D))):(O.sortIndex=j,P(M,O),Te||kt||(Te=!0,e(Hn))),O},t.unstable_wrapCallback=function(O){var S=de;return function(){var k=de;de=S;try{return O.apply(this,arguments)}finally{de=k}}}})(rv);nv.exports=rv;/** @license React v17.0.2
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var el=li.exports,_e=Fy,Be=nv.exports;function R(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}if(!el)throw Error(R(227));var iv=new Set,Vo={};function ci(t,e){as(t,e),as(t+"Capture",e)}function as(t,e){for(Vo[t]=e,t=0;t<e.length;t++)iv.add(e[t])}var Gn=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"),qk=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,sv=Object.prototype.hasOwnProperty,ov={},av={};function Hk(t){return sv.call(av,t)?!0:sv.call(ov,t)?!1:qk.test(t)?av[t]=!0:(ov[t]=!0,!1)}function Wk(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Gk(t,e,n,r){if(e===null||typeof e=="undefined"||Wk(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function bt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var nt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){nt[t]=new bt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];nt[e]=new bt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){nt[t]=new bt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){nt[t]=new bt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){nt[t]=new bt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){nt[t]=new bt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){nt[t]=new bt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){nt[t]=new bt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){nt[t]=new bt(t,5,!1,t.toLowerCase(),null,!1,!1)});var _d=/[\-:]([a-z])/g;function Id(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(_d,Id);nt[e]=new bt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(_d,Id);nt[e]=new bt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(_d,Id);nt[e]=new bt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){nt[t]=new bt(t,1,!1,t.toLowerCase(),null,!1,!1)});nt.xlinkHref=new bt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){nt[t]=new bt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Ed(t,e,n,r){var i=nt.hasOwnProperty(e)?nt[e]:null,s=i!==null?i.type===0:r?!1:!(!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N");s||(Gk(e,n,i,r)&&(n=null),r||i===null?Hk(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var hi=el.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Bo=60103,di=60106,yr=60107,Td=60108,zo=60114,Sd=60109,kd=60110,tl=60112,jo=60113,nl=60120,rl=60115,Cd=60116,bd=60121,Ad=60128,uv=60129,Rd=60130,Nd=60131;if(typeof Symbol=="function"&&Symbol.for){var ze=Symbol.for;Bo=ze("react.element"),di=ze("react.portal"),yr=ze("react.fragment"),Td=ze("react.strict_mode"),zo=ze("react.profiler"),Sd=ze("react.provider"),kd=ze("react.context"),tl=ze("react.forward_ref"),jo=ze("react.suspense"),nl=ze("react.suspense_list"),rl=ze("react.memo"),Cd=ze("react.lazy"),bd=ze("react.block"),ze("react.scope"),Ad=ze("react.opaque.id"),uv=ze("react.debug_trace_mode"),Rd=ze("react.offscreen"),Nd=ze("react.legacy_hidden")}var lv=typeof Symbol=="function"&&Symbol.iterator;function qo(t){return t===null||typeof t!="object"?null:(t=lv&&t[lv]||t["@@iterator"],typeof t=="function"?t:null)}var Pd;function Ho(t){if(Pd===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Pd=e&&e[1]||""}return`
`+Pd+t}var xd=!1;function il(t,e){if(!t||xd)return"";xd=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a])return`
`+i[o].replace(" at new "," at ");while(1<=o&&0<=a);break}}}finally{xd=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ho(t):""}function Kk(t){switch(t.tag){case 5:return Ho(t.type);case 16:return Ho("Lazy");case 13:return Ho("Suspense");case 19:return Ho("SuspenseList");case 0:case 2:case 15:return t=il(t.type,!1),t;case 11:return t=il(t.type.render,!1),t;case 22:return t=il(t.type._render,!1),t;case 1:return t=il(t.type,!0),t;default:return""}}function us(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case yr:return"Fragment";case di:return"Portal";case zo:return"Profiler";case Td:return"StrictMode";case jo:return"Suspense";case nl:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case kd:return(t.displayName||"Context")+".Consumer";case Sd:return(t._context.displayName||"Context")+".Provider";case tl:var e=t.render;return e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case rl:return us(t.type);case bd:return us(t._render);case Cd:e=t._payload,t=t._init;try{return us(t(e))}catch{}}return null}function vr(t){switch(typeof t){case"boolean":case"number":case"object":case"string":case"undefined":return t;default:return""}}function cv(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Qk(t){var e=cv(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n!="undefined"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function sl(t){t._valueTracker||(t._valueTracker=Qk(t))}function hv(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=cv(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function ol(t){if(t=t||(typeof document!="undefined"?document:void 0),typeof t=="undefined")return null;try{return t.activeElement||t.body}catch{return t.body}}function Dd(t,e){var n=e.checked;return _e({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:t._wrapperState.initialChecked})}function dv(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=vr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function fv(t,e){e=e.checked,e!=null&&Ed(t,"checked",e,!1)}function Od(t,e){fv(t,e);var n=vr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Ld(t,e.type,n):e.hasOwnProperty("defaultValue")&&Ld(t,e.type,vr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function pv(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Ld(t,e,n){(e!=="number"||ol(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}function Yk(t){var e="";return el.Children.forEach(t,function(n){n!=null&&(e+=n)}),e}function Md(t,e){return t=_e({children:void 0},e),(e=Yk(e.children))&&(t.children=e),t}function ls(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+vr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function $d(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(R(91));return _e({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function mv(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(R(92));if(Array.isArray(n)){if(!(1>=n.length))throw Error(R(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:vr(n)}}function gv(t,e){var n=vr(e.value),r=vr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function yv(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}var Ud={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};function vv(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Fd(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?vv(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var al,wv=function(t){return typeof MSApp!="undefined"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!==Ud.svg||"innerHTML"in t)t.innerHTML=e;else{for(al=al||document.createElement("div"),al.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=al.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Wo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Go={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Xk=["Webkit","ms","Moz","O"];Object.keys(Go).forEach(function(t){Xk.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Go[e]=Go[t]})});function _v(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Go.hasOwnProperty(t)&&Go[t]?(""+e).trim():e+"px"}function Iv(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=_v(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var Jk=_e({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Vd(t,e){if(e){if(Jk[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(R(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(R(60));if(!(typeof e.dangerouslySetInnerHTML=="object"&&"__html"in e.dangerouslySetInnerHTML))throw Error(R(61))}if(e.style!=null&&typeof e.style!="object")throw Error(R(62))}}function Bd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}function zd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var jd=null,cs=null,hs=null;function Ev(t){if(t=da(t)){if(typeof jd!="function")throw Error(R(280));var e=t.stateNode;e&&(e=kl(e),jd(t.stateNode,t.type,e))}}function Tv(t){cs?hs?hs.push(t):hs=[t]:cs=t}function Sv(){if(cs){var t=cs,e=hs;if(hs=cs=null,Ev(t),e)for(t=0;t<e.length;t++)Ev(e[t])}}function qd(t,e){return t(e)}function kv(t,e,n,r,i){return t(e,n,r,i)}function Hd(){}var Cv=qd,fi=!1,Wd=!1;function Gd(){(cs!==null||hs!==null)&&(Hd(),Sv())}function Zk(t,e,n){if(Wd)return t(e,n);Wd=!0;try{return Cv(t,e,n)}finally{Wd=!1,Gd()}}function Ko(t,e){var n=t.stateNode;if(n===null)return null;var r=kl(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(R(231,e,typeof n));return n}var Kd=!1;if(Gn)try{var Qo={};Object.defineProperty(Qo,"passive",{get:function(){Kd=!0}}),window.addEventListener("test",Qo,Qo),window.removeEventListener("test",Qo,Qo)}catch{Kd=!1}function eC(t,e,n,r,i,s,o,a,u){var l=Array.prototype.slice.call(arguments,3);try{e.apply(n,l)}catch(c){this.onError(c)}}var Yo=!1,ul=null,ll=!1,Qd=null,tC={onError:function(t){Yo=!0,ul=t}};function nC(t,e,n,r,i,s,o,a,u){Yo=!1,ul=null,eC.apply(tC,arguments)}function rC(t,e,n,r,i,s,o,a,u){if(nC.apply(this,arguments),Yo){if(Yo){var l=ul;Yo=!1,ul=null}else throw Error(R(198));ll||(ll=!0,Qd=l)}}function pi(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&1026)!=0&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function bv(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Av(t){if(pi(t)!==t)throw Error(R(188))}function iC(t){var e=t.alternate;if(!e){if(e=pi(t),e===null)throw Error(R(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Av(i),t;if(s===r)return Av(i),e;s=s.sibling}throw Error(R(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(R(189))}}if(n.alternate!==r)throw Error(R(190))}if(n.tag!==3)throw Error(R(188));return n.stateNode.current===n?t:e}function Rv(t){if(t=iC(t),!t)return null;for(var e=t;;){if(e.tag===5||e.tag===6)return e;if(e.child)e.child.return=e,e=e.child;else{if(e===t)break;for(;!e.sibling;){if(!e.return||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}}return null}function Nv(t,e){for(var n=t.alternate;e!==null;){if(e===t||e===n)return!0;e=e.return}return!1}var Pv,Yd,xv,Dv,Xd=!1,bn=[],wr=null,_r=null,Ir=null,Xo=new Map,Jo=new Map,Zo=[],Ov="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Jd(t,e,n,r,i){return{blockedOn:t,domEventName:e,eventSystemFlags:n|16,nativeEvent:i,targetContainers:[r]}}function Lv(t,e){switch(t){case"focusin":case"focusout":wr=null;break;case"dragenter":case"dragleave":_r=null;break;case"mouseover":case"mouseout":Ir=null;break;case"pointerover":case"pointerout":Xo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Jo.delete(e.pointerId)}}function ea(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t=Jd(e,n,r,i,s),e!==null&&(e=da(e),e!==null&&Yd(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function sC(t,e,n,r,i){switch(e){case"focusin":return wr=ea(wr,t,e,n,r,i),!0;case"dragenter":return _r=ea(_r,t,e,n,r,i),!0;case"mouseover":return Ir=ea(Ir,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Xo.set(s,ea(Xo.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Jo.set(s,ea(Jo.get(s)||null,t,e,n,r,i)),!0}return!1}function oC(t){var e=mi(t.target);if(e!==null){var n=pi(e);if(n!==null){if(e=n.tag,e===13){if(e=bv(n),e!==null){t.blockedOn=e,Dv(t.lanePriority,function(){Be.unstable_runWithPriority(t.priority,function(){xv(n)})});return}}else if(e===3&&n.stateNode.hydrate){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function cl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=sf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n!==null)return e=da(n),e!==null&&Yd(e),t.blockedOn=n,!1;e.shift()}return!0}function Mv(t,e,n){cl(t)&&n.delete(e)}function aC(){for(Xd=!1;0<bn.length;){var t=bn[0];if(t.blockedOn!==null){t=da(t.blockedOn),t!==null&&Pv(t);break}for(var e=t.targetContainers;0<e.length;){var n=sf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n!==null){t.blockedOn=n;break}e.shift()}t.blockedOn===null&&bn.shift()}wr!==null&&cl(wr)&&(wr=null),_r!==null&&cl(_r)&&(_r=null),Ir!==null&&cl(Ir)&&(Ir=null),Xo.forEach(Mv),Jo.forEach(Mv)}function ta(t,e){t.blockedOn===e&&(t.blockedOn=null,Xd||(Xd=!0,Be.unstable_scheduleCallback(Be.unstable_NormalPriority,aC)))}function $v(t){function e(i){return ta(i,t)}if(0<bn.length){ta(bn[0],t);for(var n=1;n<bn.length;n++){var r=bn[n];r.blockedOn===t&&(r.blockedOn=null)}}for(wr!==null&&ta(wr,t),_r!==null&&ta(_r,t),Ir!==null&&ta(Ir,t),Xo.forEach(e),Jo.forEach(e),n=0;n<Zo.length;n++)r=Zo[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Zo.length&&(n=Zo[0],n.blockedOn===null);)oC(n),n.blockedOn===null&&Zo.shift()}function hl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ds={animationend:hl("Animation","AnimationEnd"),animationiteration:hl("Animation","AnimationIteration"),animationstart:hl("Animation","AnimationStart"),transitionend:hl("Transition","TransitionEnd")},Zd={},Uv={};Gn&&(Uv=document.createElement("div").style,"AnimationEvent"in window||(delete ds.animationend.animation,delete ds.animationiteration.animation,delete ds.animationstart.animation),"TransitionEvent"in window||delete ds.transitionend.transition);function dl(t){if(Zd[t])return Zd[t];if(!ds[t])return t;var e=ds[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Uv)return Zd[t]=e[n];return t}var Fv=dl("animationend"),Vv=dl("animationiteration"),Bv=dl("animationstart"),zv=dl("transitionend"),jv=new Map,ef=new Map,uC=["abort","abort",Fv,"animationEnd",Vv,"animationIteration",Bv,"animationStart","canplay","canPlay","canplaythrough","canPlayThrough","durationchange","durationChange","emptied","emptied","encrypted","encrypted","ended","ended","error","error","gotpointercapture","gotPointerCapture","load","load","loadeddata","loadedData","loadedmetadata","loadedMetadata","loadstart","loadStart","lostpointercapture","lostPointerCapture","playing","playing","progress","progress","seeking","seeking","stalled","stalled","suspend","suspend","timeupdate","timeUpdate",zv,"transitionEnd","waiting","waiting"];function tf(t,e){for(var n=0;n<t.length;n+=2){var r=t[n],i=t[n+1];i="on"+(i[0].toUpperCase()+i.slice(1)),ef.set(r,e),jv.set(r,i),ci(i,[r])}}var lC=Be.unstable_now;lC();var pe=8;function fs(t){if((1&t)!=0)return pe=15,1;if((2&t)!=0)return pe=14,2;if((4&t)!=0)return pe=13,4;var e=24&t;return e!==0?(pe=12,e):(t&32)!=0?(pe=11,32):(e=192&t,e!==0?(pe=10,e):(t&256)!=0?(pe=9,256):(e=3584&t,e!==0?(pe=8,e):(t&4096)!=0?(pe=7,4096):(e=4186112&t,e!==0?(pe=6,e):(e=62914560&t,e!==0?(pe=5,e):t&67108864?(pe=4,67108864):(t&134217728)!=0?(pe=3,134217728):(e=805306368&t,e!==0?(pe=2,e):(1073741824&t)!=0?(pe=1,1073741824):(pe=8,t))))))}function cC(t){switch(t){case 99:return 15;case 98:return 10;case 97:case 96:return 8;case 95:return 2;default:return 0}}function hC(t){switch(t){case 15:case 14:return 99;case 13:case 12:case 11:case 10:return 98;case 9:case 8:case 7:case 6:case 4:case 5:return 97;case 3:case 2:case 1:return 95;case 0:return 90;default:throw Error(R(358,t))}}function na(t,e){var n=t.pendingLanes;if(n===0)return pe=0;var r=0,i=0,s=t.expiredLanes,o=t.suspendedLanes,a=t.pingedLanes;if(s!==0)r=s,i=pe=15;else if(s=n&134217727,s!==0){var u=s&~o;u!==0?(r=fs(u),i=pe):(a&=s,a!==0&&(r=fs(a),i=pe))}else s=n&~o,s!==0?(r=fs(s),i=pe):a!==0&&(r=fs(a),i=pe);if(r===0)return 0;if(r=31-Er(r),r=n&((0>r?0:1<<r)<<1)-1,e!==0&&e!==r&&(e&o)==0){if(fs(e),i<=pe)return e;pe=i}if(e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Er(e),i=1<<n,r|=t[n],e&=~i;return r}function qv(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function fl(t,e){switch(t){case 15:return 1;case 14:return 2;case 12:return t=ps(24&~e),t===0?fl(10,e):t;case 10:return t=ps(192&~e),t===0?fl(8,e):t;case 8:return t=ps(3584&~e),t===0&&(t=ps(4186112&~e),t===0&&(t=512)),t;case 2:return e=ps(805306368&~e),e===0&&(e=268435456),e}throw Error(R(358,t))}function ps(t){return t&-t}function nf(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function pl(t,e,n){t.pendingLanes|=e;var r=e-1;t.suspendedLanes&=r,t.pingedLanes&=r,t=t.eventTimes,e=31-Er(e),t[e]=n}var Er=Math.clz32?Math.clz32:pC,dC=Math.log,fC=Math.LN2;function pC(t){return t===0?32:31-(dC(t)/fC|0)|0}var mC=Be.unstable_UserBlockingPriority,gC=Be.unstable_runWithPriority,ml=!0;function yC(t,e,n,r){fi||Hd();var i=rf,s=fi;fi=!0;try{kv(i,t,e,n,r)}finally{(fi=s)||Gd()}}function vC(t,e,n,r){gC(mC,rf.bind(null,t,e,n,r))}function rf(t,e,n,r){if(ml){var i;if((i=(e&4)==0)&&0<bn.length&&-1<Ov.indexOf(t))t=Jd(null,t,e,n,r),bn.push(t);else{var s=sf(t,e,n,r);if(s===null)i&&Lv(t,r);else{if(i){if(-1<Ov.indexOf(t)){t=Jd(s,t,e,n,r),bn.push(t);return}if(sC(s,t,e,n,r))return;Lv(t,r)}_w(t,e,r,null,n)}}}}function sf(t,e,n,r){var i=zd(r);if(i=mi(i),i!==null){var s=pi(i);if(s===null)i=null;else{var o=s.tag;if(o===13){if(i=bv(s),i!==null)return i;i=null}else if(o===3){if(s.stateNode.hydrate)return s.tag===3?s.stateNode.containerInfo:null;i=null}else s!==i&&(i=null)}}return _w(t,e,r,i,n),null}var Tr=null,of=null,gl=null;function Hv(){if(gl)return gl;var t,e=of,n=e.length,r,i="value"in Tr?Tr.value:Tr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return gl=i.slice(t,1<r?1-r:void 0)}function yl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function vl(){return!0}function Wv(){return!1}function Wt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?vl:Wv,this.isPropagationStopped=Wv,this}return _e(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=vl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=vl)},persist:function(){},isPersistent:vl}),e}var ms={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},af=Wt(ms),ra=_e({},ms,{view:0,detail:0}),wC=Wt(ra),uf,lf,ia,wl=_e({},ra,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:hf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ia&&(ia&&t.type==="mousemove"?(uf=t.screenX-ia.screenX,lf=t.screenY-ia.screenY):lf=uf=0,ia=t),uf)},movementY:function(t){return"movementY"in t?t.movementY:lf}}),Gv=Wt(wl),_C=_e({},wl,{dataTransfer:0}),IC=Wt(_C),EC=_e({},ra,{relatedTarget:0}),cf=Wt(EC),TC=_e({},ms,{animationName:0,elapsedTime:0,pseudoElement:0}),SC=Wt(TC),kC=_e({},ms,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),CC=Wt(kC),bC=_e({},ms,{data:0}),Kv=Wt(bC),AC={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},RC={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},NC={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function PC(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=NC[t])?!!e[t]:!1}function hf(){return PC}var xC=_e({},ra,{key:function(t){if(t.key){var e=AC[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=yl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?RC[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:hf,charCode:function(t){return t.type==="keypress"?yl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?yl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),DC=Wt(xC),OC=_e({},wl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Qv=Wt(OC),LC=_e({},ra,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:hf}),MC=Wt(LC),$C=_e({},ms,{propertyName:0,elapsedTime:0,pseudoElement:0}),UC=Wt($C),FC=_e({},wl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),VC=Wt(FC),BC=[9,13,27,32],df=Gn&&"CompositionEvent"in window,sa=null;Gn&&"documentMode"in document&&(sa=document.documentMode);var zC=Gn&&"TextEvent"in window&&!sa,Yv=Gn&&(!df||sa&&8<sa&&11>=sa),Xv=String.fromCharCode(32),Jv=!1;function Zv(t,e){switch(t){case"keyup":return BC.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ew(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var gs=!1;function jC(t,e){switch(t){case"compositionend":return ew(e);case"keypress":return e.which!==32?null:(Jv=!0,Xv);case"textInput":return t=e.data,t===Xv&&Jv?null:t;default:return null}}function qC(t,e){if(gs)return t==="compositionend"||!df&&Zv(t,e)?(t=Hv(),gl=of=Tr=null,gs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Yv&&e.locale!=="ko"?null:e.data;default:return null}}var HC={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function tw(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!HC[t.type]:e==="textarea"}function nw(t,e,n,r){Tv(r),e=Il(e,"onChange"),0<e.length&&(n=new af("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var oa=null,aa=null;function WC(t){mw(t,0)}function _l(t){var e=Is(t);if(hv(e))return t}function GC(t,e){if(t==="change")return e}var rw=!1;if(Gn){var ff;if(Gn){var pf="oninput"in document;if(!pf){var iw=document.createElement("div");iw.setAttribute("oninput","return;"),pf=typeof iw.oninput=="function"}ff=pf}else ff=!1;rw=ff&&(!document.documentMode||9<document.documentMode)}function sw(){oa&&(oa.detachEvent("onpropertychange",ow),aa=oa=null)}function ow(t){if(t.propertyName==="value"&&_l(aa)){var e=[];if(nw(e,aa,t,zd(t)),t=WC,fi)t(e);else{fi=!0;try{qd(t,e)}finally{fi=!1,Gd()}}}}function KC(t,e,n){t==="focusin"?(sw(),oa=e,aa=n,oa.attachEvent("onpropertychange",ow)):t==="focusout"&&sw()}function QC(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return _l(aa)}function YC(t,e){if(t==="click")return _l(e)}function XC(t,e){if(t==="input"||t==="change")return _l(e)}function JC(t,e){return t===e&&(t!==0||1/t==1/e)||t!==t&&e!==e}var rn=typeof Object.is=="function"?Object.is:JC,ZC=Object.prototype.hasOwnProperty;function ua(t,e){if(rn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++)if(!ZC.call(e,n[r])||!rn(t[n[r]],e[n[r]]))return!1;return!0}function aw(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function uw(t,e){var n=aw(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=aw(n)}}function lw(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?lw(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function cw(){for(var t=window,e=ol();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=ol(t.document)}return e}function mf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var eb=Gn&&"documentMode"in document&&11>=document.documentMode,ys=null,gf=null,la=null,yf=!1;function hw(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;yf||ys==null||ys!==ol(r)||(r=ys,"selectionStart"in r&&mf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),la&&ua(la,r)||(la=r,r=Il(gf,"onSelect"),0<r.length&&(e=new af("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=ys)))}tf("cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "),0);tf("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "),1);tf(uC,2);for(var dw="change selectionchange textInput compositionstart compositionend compositionupdate".split(" "),vf=0;vf<dw.length;vf++)ef.set(dw[vf],0);as("onMouseEnter",["mouseout","mouseover"]);as("onMouseLeave",["mouseout","mouseover"]);as("onPointerEnter",["pointerout","pointerover"]);as("onPointerLeave",["pointerout","pointerover"]);ci("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ci("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ci("onBeforeInput",["compositionend","keypress","textInput","paste"]);ci("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ci("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ci("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ca="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),fw=new Set("cancel close invalid load scroll toggle".split(" ").concat(ca));function pw(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,rC(r,e,void 0,t),t.currentTarget=null}function mw(t,e){e=(e&4)!=0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],u=a.instance,l=a.currentTarget;if(a=a.listener,u!==s&&i.isPropagationStopped())break e;pw(i,a,l),s=u}else for(o=0;o<r.length;o++){if(a=r[o],u=a.instance,l=a.currentTarget,a=a.listener,u!==s&&i.isPropagationStopped())break e;pw(i,a,l),s=u}}}if(ll)throw t=Qd,ll=!1,Qd=null,t}function me(t,e){var n=Cw(e),r=t+"__bubble";n.has(r)||(ww(e,t,2,!1),n.add(r))}var gw="_reactListening"+Math.random().toString(36).slice(2);function yw(t){t[gw]||(t[gw]=!0,iv.forEach(function(e){fw.has(e)||vw(e,!1,t,null),vw(e,!0,t,null)}))}function vw(t,e,n,r){var i=4<arguments.length&&arguments[4]!==void 0?arguments[4]:0,s=n;if(t==="selectionchange"&&n.nodeType!==9&&(s=n.ownerDocument),r!==null&&!e&&fw.has(t)){if(t!=="scroll")return;i|=2,s=r}var o=Cw(s),a=t+"__"+(e?"capture":"bubble");o.has(a)||(e&&(i|=4),ww(s,t,i,e),o.add(a))}function ww(t,e,n,r){var i=ef.get(e);switch(i===void 0?2:i){case 0:i=yC;break;case 1:i=vC;break;default:i=rf}n=i.bind(null,e,n,t),i=void 0,!Kd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function _w(t,e,n,r,i){var s=r;if((e&1)==0&&(e&2)==0&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;a!==null;){if(o=mi(a),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}a=a.parentNode}}r=r.return}Zk(function(){var l=s,c=zd(n),h=[];e:{var d=jv.get(t);if(d!==void 0){var g=af,y=t;switch(t){case"keypress":if(yl(n)===0)break e;case"keydown":case"keyup":g=DC;break;case"focusin":y="focus",g=cf;break;case"focusout":y="blur",g=cf;break;case"beforeblur":case"afterblur":g=cf;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Gv;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=IC;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=MC;break;case Fv:case Vv:case Bv:g=SC;break;case zv:g=UC;break;case"scroll":g=wC;break;case"wheel":g=VC;break;case"copy":case"cut":case"paste":g=CC;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Qv}var _=(e&4)!=0,f=!_&&t==="scroll",p=_?d!==null?d+"Capture":null:d;_=[];for(var m=l,w;m!==null;){w=m;var v=w.stateNode;if(w.tag===5&&v!==null&&(w=v,p!==null&&(v=Ko(m,p),v!=null&&_.push(ha(m,v,w)))),f)break;m=m.return}0<_.length&&(d=new g(d,y,null,n,c),h.push({event:d,listeners:_}))}}if((e&7)==0){e:{if(d=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",d&&(e&16)==0&&(y=n.relatedTarget||n.fromElement)&&(mi(y)||y[_s]))break e;if((g||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,g?(y=n.relatedTarget||n.toElement,g=l,y=y?mi(y):null,y!==null&&(f=pi(y),y!==f||y.tag!==5&&y.tag!==6)&&(y=null)):(g=null,y=l),g!==y)){if(_=Gv,v="onMouseLeave",p="onMouseEnter",m="mouse",(t==="pointerout"||t==="pointerover")&&(_=Qv,v="onPointerLeave",p="onPointerEnter",m="pointer"),f=g==null?d:Is(g),w=y==null?d:Is(y),d=new _(v,m+"leave",g,n,c),d.target=f,d.relatedTarget=w,v=null,mi(c)===l&&(_=new _(p,m+"enter",y,n,c),_.target=w,_.relatedTarget=f,v=_),f=v,g&&y)t:{for(_=g,p=y,m=0,w=_;w;w=vs(w))m++;for(w=0,v=p;v;v=vs(v))w++;for(;0<m-w;)_=vs(_),m--;for(;0<w-m;)p=vs(p),w--;for(;m--;){if(_===p||p!==null&&_===p.alternate)break t;_=vs(_),p=vs(p)}_=null}else _=null;g!==null&&Iw(h,d,g,_,!1),y!==null&&f!==null&&Iw(h,f,y,_,!0)}}e:{if(d=l?Is(l):window,g=d.nodeName&&d.nodeName.toLowerCase(),g==="select"||g==="input"&&d.type==="file")var P=GC;else if(tw(d))if(rw)P=XC;else{P=QC;var b=KC}else(g=d.nodeName)&&g.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(P=YC);if(P&&(P=P(t,l))){nw(h,P,n,c);break e}b&&b(t,d,l),t==="focusout"&&(b=d._wrapperState)&&b.controlled&&d.type==="number"&&Ld(d,"number",d.value)}switch(b=l?Is(l):window,t){case"focusin":(tw(b)||b.contentEditable==="true")&&(ys=b,gf=l,la=null);break;case"focusout":la=gf=ys=null;break;case"mousedown":yf=!0;break;case"contextmenu":case"mouseup":case"dragend":yf=!1,hw(h,n,c);break;case"selectionchange":if(eb)break;case"keydown":case"keyup":hw(h,n,c)}var V;if(df)e:{switch(t){case"compositionstart":var F="onCompositionStart";break e;case"compositionend":F="onCompositionEnd";break e;case"compositionupdate":F="onCompositionUpdate";break e}F=void 0}else gs?Zv(t,n)&&(F="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(F="onCompositionStart");F&&(Yv&&n.locale!=="ko"&&(gs||F!=="onCompositionStart"?F==="onCompositionEnd"&&gs&&(V=Hv()):(Tr=c,of="value"in Tr?Tr.value:Tr.textContent,gs=!0)),b=Il(l,F),0<b.length&&(F=new Kv(F,t,null,n,c),h.push({event:F,listeners:b}),V?F.data=V:(V=ew(n),V!==null&&(F.data=V)))),(V=zC?jC(t,n):qC(t,n))&&(l=Il(l,"onBeforeInput"),0<l.length&&(c=new Kv("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:l}),c.data=V))}mw(h,e)})}function ha(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Il(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Ko(t,n),s!=null&&r.unshift(ha(t,s,i)),s=Ko(t,e),s!=null&&r.push(ha(t,s,i))),t=t.return}return r}function vs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Iw(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,u=a.alternate,l=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&l!==null&&(a=l,i?(u=Ko(n,s),u!=null&&o.unshift(ha(n,u,a))):i||(u=Ko(n,s),u!=null&&o.push(ha(n,u,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}function El(){}var wf=null,_f=null;function Ew(t,e){switch(t){case"button":case"input":case"select":case"textarea":return!!e.autoFocus}return!1}function If(t,e){return t==="textarea"||t==="option"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Tw=typeof setTimeout=="function"?setTimeout:void 0,tb=typeof clearTimeout=="function"?clearTimeout:void 0;function Ef(t){t.nodeType===1?t.textContent="":t.nodeType===9&&(t=t.body,t!=null&&(t.textContent=""))}function ws(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break}return t}function Sw(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Tf=0;function nb(t){return{$$typeof:Ad,toString:t,valueOf:t}}var Tl=Math.random().toString(36).slice(2),Sr="__reactFiber$"+Tl,Sl="__reactProps$"+Tl,_s="__reactContainer$"+Tl,kw="__reactEvents$"+Tl;function mi(t){var e=t[Sr];if(e)return e;for(var n=t.parentNode;n;){if(e=n[_s]||n[Sr]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Sw(t);t!==null;){if(n=t[Sr])return n;t=Sw(t)}return e}t=n,n=t.parentNode}return null}function da(t){return t=t[Sr]||t[_s],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Is(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(R(33))}function kl(t){return t[Sl]||null}function Cw(t){var e=t[kw];return e===void 0&&(e=t[kw]=new Set),e}var Sf=[],Es=-1;function kr(t){return{current:t}}function ge(t){0>Es||(t.current=Sf[Es],Sf[Es]=null,Es--)}function Se(t,e){Es++,Sf[Es]=t.current,t.current=e}var Cr={},gt=kr(Cr),Ut=kr(!1),gi=Cr;function Ts(t,e){var n=t.type.contextTypes;if(!n)return Cr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Ft(t){return t=t.childContextTypes,t!=null}function Cl(){ge(Ut),ge(gt)}function bw(t,e,n){if(gt.current!==Cr)throw Error(R(168));Se(gt,e),Se(Ut,n)}function Aw(t,e,n){var r=t.stateNode;if(t=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(R(108,us(e)||"Unknown",i));return _e({},n,r)}function bl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Cr,gi=gt.current,Se(gt,t),Se(Ut,Ut.current),!0}function Rw(t,e,n){var r=t.stateNode;if(!r)throw Error(R(169));n?(t=Aw(t,e,gi),r.__reactInternalMemoizedMergedChildContext=t,ge(Ut),ge(gt),Se(gt,t)):ge(Ut),Se(Ut,n)}var kf=null,yi=null,rb=Be.unstable_runWithPriority,Cf=Be.unstable_scheduleCallback,bf=Be.unstable_cancelCallback,ib=Be.unstable_shouldYield,Nw=Be.unstable_requestPaint,Af=Be.unstable_now,sb=Be.unstable_getCurrentPriorityLevel,Al=Be.unstable_ImmediatePriority,Pw=Be.unstable_UserBlockingPriority,xw=Be.unstable_NormalPriority,Dw=Be.unstable_LowPriority,Ow=Be.unstable_IdlePriority,Rf={},ob=Nw!==void 0?Nw:function(){},Kn=null,Rl=null,Nf=!1,Lw=Af(),yt=1e4>Lw?Af:function(){return Af()-Lw};function Ss(){switch(sb()){case Al:return 99;case Pw:return 98;case xw:return 97;case Dw:return 96;case Ow:return 95;default:throw Error(R(332))}}function Mw(t){switch(t){case 99:return Al;case 98:return Pw;case 97:return xw;case 96:return Dw;case 95:return Ow;default:throw Error(R(332))}}function vi(t,e){return t=Mw(t),rb(t,e)}function fa(t,e,n){return t=Mw(t),Cf(t,e,n)}function An(){if(Rl!==null){var t=Rl;Rl=null,bf(t)}$w()}function $w(){if(!Nf&&Kn!==null){Nf=!0;var t=0;try{var e=Kn;vi(99,function(){for(;t<e.length;t++){var n=e[t];do n=n(!0);while(n!==null)}}),Kn=null}catch(n){throw Kn!==null&&(Kn=Kn.slice(t+1)),Cf(Al,An),n}finally{Nf=!1}}}var ab=hi.ReactCurrentBatchConfig;function wn(t,e){if(t&&t.defaultProps){e=_e({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Nl=kr(null),Pl=null,ks=null,xl=null;function Pf(){xl=ks=Pl=null}function xf(t){var e=Nl.current;ge(Nl),t.type._context._currentValue=e}function Uw(t,e){for(;t!==null;){var n=t.alternate;if((t.childLanes&e)===e){if(n===null||(n.childLanes&e)===e)break;n.childLanes|=e}else t.childLanes|=e,n!==null&&(n.childLanes|=e);t=t.return}}function Cs(t,e){Pl=t,xl=ks=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&e)!=0&&(_n=!0),t.firstContext=null)}function sn(t,e){if(xl!==t&&e!==!1&&e!==0)if((typeof e!="number"||e===1073741823)&&(xl=t,e=1073741823),e={context:t,observedBits:e,next:null},ks===null){if(Pl===null)throw Error(R(308));ks=e,Pl.dependencies={lanes:0,firstContext:e,responders:null}}else ks=ks.next=e;return t._currentValue}var br=!1;function Df(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null},effects:null}}function Fw(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ar(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Rr(t,e){if(t=t.updateQueue,t!==null){t=t.shared;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}}function Vw(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function pa(t,e,n,r){var i=t.updateQueue;br=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var u=a,l=u.next;u.next=null,o===null?s=l:o.next=l,o=u;var c=t.alternate;if(c!==null){c=c.updateQueue;var h=c.lastBaseUpdate;h!==o&&(h===null?c.firstBaseUpdate=l:h.next=l,c.lastBaseUpdate=u)}}if(s!==null){h=i.baseState,o=0,c=l=u=null;do{a=s.lane;var d=s.eventTime;if((r&a)===a){c!==null&&(c=c.next={eventTime:d,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var g=t,y=s;switch(a=e,d=n,y.tag){case 1:if(g=y.payload,typeof g=="function"){h=g.call(d,h,a);break e}h=g;break e;case 3:g.flags=g.flags&-4097|64;case 0:if(g=y.payload,a=typeof g=="function"?g.call(d,h,a):g,a==null)break e;h=_e({},h,a);break e;case 2:br=!0}}s.callback!==null&&(t.flags|=32,a=i.effects,a===null?i.effects=[s]:a.push(s))}else d={eventTime:d,lane:a,tag:s.tag,payload:s.payload,callback:s.callback,next:null},c===null?(l=c=d,u=h):c=c.next=d,o|=a;if(s=s.next,s===null){if(a=i.shared.pending,a===null)break;s=a.next,a.next=null,i.lastBaseUpdate=a,i.shared.pending=null}}while(1);c===null&&(u=h),i.baseState=u,i.firstBaseUpdate=l,i.lastBaseUpdate=c,Ca|=o,t.lanes=o,t.memoizedState=h}}function Bw(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(R(191,i));i.call(r)}}}var zw=new el.Component().refs;function Dl(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:_e({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Ol={isMounted:function(t){return(t=t._reactInternals)?pi(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Gt(),i=xr(t),s=Ar(r,i);s.payload=e,n!=null&&(s.callback=n),Rr(t,s),Dr(t,i,r)},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Gt(),i=xr(t),s=Ar(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),Rr(t,s),Dr(t,i,r)},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Gt(),r=xr(t),i=Ar(n,r);i.tag=2,e!=null&&(i.callback=e),Rr(t,i),Dr(t,r,n)}};function jw(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!ua(n,r)||!ua(i,s):!0}function qw(t,e,n){var r=!1,i=Cr,s=e.contextType;return typeof s=="object"&&s!==null?s=sn(s):(i=Ft(e)?gi:gt.current,r=e.contextTypes,s=(r=r!=null)?Ts(t,i):Cr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Ol,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Hw(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Ol.enqueueReplaceState(e,e.state,null)}function Of(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=zw,Df(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=sn(s):(s=Ft(e)?gi:gt.current,i.context=Ts(t,s)),pa(t,n,i,r),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Dl(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Ol.enqueueReplaceState(i,i.state,null),pa(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4)}var Ll=Array.isArray;function ma(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(R(309));var r=n.stateNode}if(!r)throw Error(R(147,t));var i=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===i?e.ref:(e=function(s){var o=r.refs;o===zw&&(o=r.refs={}),s===null?delete o[i]:o[i]=s},e._stringRef=i,e)}if(typeof t!="string")throw Error(R(284));if(!n._owner)throw Error(R(290,t))}return t}function Ml(t,e){if(t.type!=="textarea")throw Error(R(31,Object.prototype.toString.call(e)==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":e))}function Ww(t){function e(f,p){if(t){var m=f.lastEffect;m!==null?(m.nextEffect=p,f.lastEffect=p):f.firstEffect=f.lastEffect=p,p.nextEffect=null,p.flags=8}}function n(f,p){if(!t)return null;for(;p!==null;)e(f,p),p=p.sibling;return null}function r(f,p){for(f=new Map;p!==null;)p.key!==null?f.set(p.key,p):f.set(p.index,p),p=p.sibling;return f}function i(f,p){return f=Mr(f,p),f.index=0,f.sibling=null,f}function s(f,p,m){return f.index=m,t?(m=f.alternate,m!==null?(m=m.index,m<p?(f.flags=2,p):m):(f.flags=2,p)):p}function o(f){return t&&f.alternate===null&&(f.flags=2),f}function a(f,p,m,w){return p===null||p.tag!==6?(p=gp(m,f.mode,w),p.return=f,p):(p=i(p,m),p.return=f,p)}function u(f,p,m,w){return p!==null&&p.elementType===m.type?(w=i(p,m.props),w.ref=ma(f,p,m),w.return=f,w):(w=ec(m.type,m.key,m.props,null,f.mode,w),w.ref=ma(f,p,m),w.return=f,w)}function l(f,p,m,w){return p===null||p.tag!==4||p.stateNode.containerInfo!==m.containerInfo||p.stateNode.implementation!==m.implementation?(p=yp(m,f.mode,w),p.return=f,p):(p=i(p,m.children||[]),p.return=f,p)}function c(f,p,m,w,v){return p===null||p.tag!==7?(p=Os(m,f.mode,w,v),p.return=f,p):(p=i(p,m),p.return=f,p)}function h(f,p,m){if(typeof p=="string"||typeof p=="number")return p=gp(""+p,f.mode,m),p.return=f,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Bo:return m=ec(p.type,p.key,p.props,null,f.mode,m),m.ref=ma(f,null,p),m.return=f,m;case di:return p=yp(p,f.mode,m),p.return=f,p}if(Ll(p)||qo(p))return p=Os(p,f.mode,m,null),p.return=f,p;Ml(f,p)}return null}function d(f,p,m,w){var v=p!==null?p.key:null;if(typeof m=="string"||typeof m=="number")return v!==null?null:a(f,p,""+m,w);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Bo:return m.key===v?m.type===yr?c(f,p,m.props.children,w,v):u(f,p,m,w):null;case di:return m.key===v?l(f,p,m,w):null}if(Ll(m)||qo(m))return v!==null?null:c(f,p,m,w,null);Ml(f,m)}return null}function g(f,p,m,w,v){if(typeof w=="string"||typeof w=="number")return f=f.get(m)||null,a(p,f,""+w,v);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Bo:return f=f.get(w.key===null?m:w.key)||null,w.type===yr?c(p,f,w.props.children,v,w.key):u(p,f,w,v);case di:return f=f.get(w.key===null?m:w.key)||null,l(p,f,w,v)}if(Ll(w)||qo(w))return f=f.get(m)||null,c(p,f,w,v,null);Ml(p,w)}return null}function y(f,p,m,w){for(var v=null,P=null,b=p,V=p=0,F=null;b!==null&&V<m.length;V++){b.index>V?(F=b,b=null):F=b.sibling;var M=d(f,b,m[V],w);if(M===null){b===null&&(b=F);break}t&&b&&M.alternate===null&&e(f,b),p=s(M,p,V),P===null?v=M:P.sibling=M,P=M,b=F}if(V===m.length)return n(f,b),v;if(b===null){for(;V<m.length;V++)b=h(f,m[V],w),b!==null&&(p=s(b,p,V),P===null?v=b:P.sibling=b,P=b);return v}for(b=r(f,b);V<m.length;V++)F=g(b,f,V,m[V],w),F!==null&&(t&&F.alternate!==null&&b.delete(F.key===null?V:F.key),p=s(F,p,V),P===null?v=F:P.sibling=F,P=F);return t&&b.forEach(function(he){return e(f,he)}),v}function _(f,p,m,w){var v=qo(m);if(typeof v!="function")throw Error(R(150));if(m=v.call(m),m==null)throw Error(R(151));for(var P=v=null,b=p,V=p=0,F=null,M=m.next();b!==null&&!M.done;V++,M=m.next()){b.index>V?(F=b,b=null):F=b.sibling;var he=d(f,b,M.value,w);if(he===null){b===null&&(b=F);break}t&&b&&he.alternate===null&&e(f,b),p=s(he,p,V),P===null?v=he:P.sibling=he,P=he,b=F}if(M.done)return n(f,b),v;if(b===null){for(;!M.done;V++,M=m.next())M=h(f,M.value,w),M!==null&&(p=s(M,p,V),P===null?v=M:P.sibling=M,P=M);return v}for(b=r(f,b);!M.done;V++,M=m.next())M=g(b,f,V,M.value,w),M!==null&&(t&&M.alternate!==null&&b.delete(M.key===null?V:M.key),p=s(M,p,V),P===null?v=M:P.sibling=M,P=M);return t&&b.forEach(function(Cn){return e(f,Cn)}),v}return function(f,p,m,w){var v=typeof m=="object"&&m!==null&&m.type===yr&&m.key===null;v&&(m=m.props.children);var P=typeof m=="object"&&m!==null;if(P)switch(m.$$typeof){case Bo:e:{for(P=m.key,v=p;v!==null;){if(v.key===P){switch(v.tag){case 7:if(m.type===yr){n(f,v.sibling),p=i(v,m.props.children),p.return=f,f=p;break e}break;default:if(v.elementType===m.type){n(f,v.sibling),p=i(v,m.props),p.ref=ma(f,v,m),p.return=f,f=p;break e}}n(f,v);break}else e(f,v);v=v.sibling}m.type===yr?(p=Os(m.props.children,f.mode,w,m.key),p.return=f,f=p):(w=ec(m.type,m.key,m.props,null,f.mode,w),w.ref=ma(f,p,m),w.return=f,f=w)}return o(f);case di:e:{for(v=m.key;p!==null;){if(p.key===v)if(p.tag===4&&p.stateNode.containerInfo===m.containerInfo&&p.stateNode.implementation===m.implementation){n(f,p.sibling),p=i(p,m.children||[]),p.return=f,f=p;break e}else{n(f,p);break}else e(f,p);p=p.sibling}p=yp(m,f.mode,w),p.return=f,f=p}return o(f)}if(typeof m=="string"||typeof m=="number")return m=""+m,p!==null&&p.tag===6?(n(f,p.sibling),p=i(p,m),p.return=f,f=p):(n(f,p),p=gp(m,f.mode,w),p.return=f,f=p),o(f);if(Ll(m))return y(f,p,m,w);if(qo(m))return _(f,p,m,w);if(P&&Ml(f,m),typeof m=="undefined"&&!v)switch(f.tag){case 1:case 22:case 0:case 11:case 15:throw Error(R(152,us(f.type)||"Component"))}return n(f,p)}}var $l=Ww(!0),Gw=Ww(!1),ga={},Rn=kr(ga),ya=kr(ga),va=kr(ga);function wi(t){if(t===ga)throw Error(R(174));return t}function Lf(t,e){switch(Se(va,e),Se(ya,t),Se(Rn,ga),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Fd(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Fd(e,t)}ge(Rn),Se(Rn,e)}function bs(){ge(Rn),ge(ya),ge(va)}function Kw(t){wi(va.current);var e=wi(Rn.current),n=Fd(e,t.type);e!==n&&(Se(ya,t),Se(Rn,n))}function Mf(t){ya.current===t&&(ge(Rn),ge(ya))}var ke=kr(0);function Ul(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&64)!=0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Qn=null,Nr=null,Nn=!1;function Qw(t,e){var n=un(5,null,null,0);n.elementType="DELETED",n.type="DELETED",n.stateNode=e,n.return=t,n.flags=8,t.lastEffect!==null?(t.lastEffect.nextEffect=n,t.lastEffect=n):t.firstEffect=t.lastEffect=n}function Yw(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,!0):!1;case 13:return!1;default:return!1}}function $f(t){if(Nn){var e=Nr;if(e){var n=e;if(!Yw(t,e)){if(e=ws(n.nextSibling),!e||!Yw(t,e)){t.flags=t.flags&-1025|2,Nn=!1,Qn=t;return}Qw(Qn,n)}Qn=t,Nr=ws(e.firstChild)}else t.flags=t.flags&-1025|2,Nn=!1,Qn=t}}function Xw(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Qn=t}function Fl(t){if(t!==Qn)return!1;if(!Nn)return Xw(t),Nn=!0,!1;var e=t.type;if(t.tag!==5||e!=="head"&&e!=="body"&&!If(e,t.memoizedProps))for(e=Nr;e;)Qw(t,e),e=ws(e.nextSibling);if(Xw(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(R(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Nr=ws(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Nr=null}}else Nr=Qn?ws(t.stateNode.nextSibling):null;return!0}function Uf(){Nr=Qn=null,Nn=!1}var As=[];function Ff(){for(var t=0;t<As.length;t++)As[t]._workInProgressVersionPrimary=null;As.length=0}var wa=hi.ReactCurrentDispatcher,on=hi.ReactCurrentBatchConfig,_a=0,Ne=null,vt=null,rt=null,Vl=!1,Ia=!1;function Vt(){throw Error(R(321))}function Vf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!rn(t[n],e[n]))return!1;return!0}function Bf(t,e,n,r,i,s){if(_a=s,Ne=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,wa.current=t===null||t.memoizedState===null?lb:cb,t=n(r,i),Ia){s=0;do{if(Ia=!1,!(25>s))throw Error(R(301));s+=1,rt=vt=null,e.updateQueue=null,wa.current=hb,t=n(r,i)}while(Ia)}if(wa.current=ql,e=vt!==null&&vt.next!==null,_a=0,rt=vt=Ne=null,Vl=!1,e)throw Error(R(300));return t}function _i(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return rt===null?Ne.memoizedState=rt=t:rt=rt.next=t,rt}function Ii(){if(vt===null){var t=Ne.alternate;t=t!==null?t.memoizedState:null}else t=vt.next;var e=rt===null?Ne.memoizedState:rt.next;if(e!==null)rt=e,vt=t;else{if(t===null)throw Error(R(310));vt=t,t={memoizedState:vt.memoizedState,baseState:vt.baseState,baseQueue:vt.baseQueue,queue:vt.queue,next:null},rt===null?Ne.memoizedState=rt=t:rt=rt.next=t}return rt}function Pn(t,e){return typeof e=="function"?e(t):e}function Ea(t){var e=Ii(),n=e.queue;if(n===null)throw Error(R(311));n.lastRenderedReducer=t;var r=vt,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){i=i.next,r=r.baseState;var a=o=s=null,u=i;do{var l=u.lane;if((_a&l)===l)a!==null&&(a=a.next={lane:0,action:u.action,eagerReducer:u.eagerReducer,eagerState:u.eagerState,next:null}),r=u.eagerReducer===t?u.eagerState:t(r,u.action);else{var c={lane:l,action:u.action,eagerReducer:u.eagerReducer,eagerState:u.eagerState,next:null};a===null?(o=a=c,s=r):a=a.next=c,Ne.lanes|=l,Ca|=l}u=u.next}while(u!==null&&u!==i);a===null?s=r:a.next=o,rn(r,e.memoizedState)||(_n=!0),e.memoizedState=r,e.baseState=s,e.baseQueue=a,n.lastRenderedState=r}return[e.memoizedState,n.dispatch]}function Ta(t){var e=Ii(),n=e.queue;if(n===null)throw Error(R(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);rn(s,e.memoizedState)||(_n=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Jw(t,e,n){var r=e._getVersion;r=r(e._source);var i=e._workInProgressVersionPrimary;if(i!==null?t=i===r:(t=t.mutableReadLanes,(t=(_a&t)===t)&&(e._workInProgressVersionPrimary=r,As.push(e))),t)return n(e._source);throw As.push(e),Error(R(350))}function Zw(t,e,n,r){var i=At;if(i===null)throw Error(R(349));var s=e._getVersion,o=s(e._source),a=wa.current,u=a.useState(function(){return Jw(i,e,n)}),l=u[1],c=u[0];u=rt;var h=t.memoizedState,d=h.refs,g=d.getSnapshot,y=h.source;h=h.subscribe;var _=Ne;return t.memoizedState={refs:d,source:e,subscribe:r},a.useEffect(function(){d.getSnapshot=n,d.setSnapshot=l;var f=s(e._source);if(!rn(o,f)){f=n(e._source),rn(c,f)||(l(f),f=xr(_),i.mutableReadLanes|=f&i.pendingLanes),f=i.mutableReadLanes,i.entangledLanes|=f;for(var p=i.entanglements,m=f;0<m;){var w=31-Er(m),v=1<<w;p[w]|=f,m&=~v}}},[n,e,r]),a.useEffect(function(){return r(e._source,function(){var f=d.getSnapshot,p=d.setSnapshot;try{p(f(e._source));var m=xr(_);i.mutableReadLanes|=m&i.pendingLanes}catch(w){p(function(){throw w})}})},[e,r]),rn(g,n)&&rn(y,e)&&rn(h,r)||(t={pending:null,dispatch:null,lastRenderedReducer:Pn,lastRenderedState:c},t.dispatch=l=Hf.bind(null,Ne,t),u.queue=t,u.baseQueue=null,c=Jw(i,e,n),u.memoizedState=u.baseState=c),c}function e0(t,e,n){var r=Ii();return Zw(r,t,e,n)}function Sa(t){var e=_i();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t=e.queue={pending:null,dispatch:null,lastRenderedReducer:Pn,lastRenderedState:t},t=t.dispatch=Hf.bind(null,Ne,t),[e.memoizedState,t]}function Bl(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Ne.updateQueue,e===null?(e={lastEffect:null},Ne.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function t0(t){var e=_i();return t={current:t},e.memoizedState=t}function zl(){return Ii().memoizedState}function zf(t,e,n,r){var i=_i();Ne.flags|=t,i.memoizedState=Bl(1|e,n,void 0,r===void 0?null:r)}function jf(t,e,n,r){var i=Ii();r=r===void 0?null:r;var s=void 0;if(vt!==null){var o=vt.memoizedState;if(s=o.destroy,r!==null&&Vf(r,o.deps)){Bl(e,n,s,r);return}}Ne.flags|=t,i.memoizedState=Bl(1|e,n,s,r)}function n0(t,e){return zf(516,4,t,e)}function jl(t,e){return jf(516,4,t,e)}function r0(t,e){return jf(4,2,t,e)}function i0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function s0(t,e,n){return n=n!=null?n.concat([t]):null,jf(4,2,i0.bind(null,e,t),n)}function qf(){}function o0(t,e){var n=Ii();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Vf(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function a0(t,e){var n=Ii();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Vf(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function ub(t,e){var n=Ss();vi(98>n?98:n,function(){t(!0)}),vi(97<n?97:n,function(){var r=on.transition;on.transition=1;try{t(!1),e()}finally{on.transition=r}})}function Hf(t,e,n){var r=Gt(),i=xr(t),s={lane:i,action:n,eagerReducer:null,eagerState:null,next:null},o=e.pending;if(o===null?s.next=s:(s.next=o.next,o.next=s),e.pending=s,o=t.alternate,t===Ne||o!==null&&o===Ne)Ia=Vl=!0;else{if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var a=e.lastRenderedState,u=o(a,n);if(s.eagerReducer=o,s.eagerState=u,rn(u,a))return}catch{}finally{}Dr(t,i,r)}}var ql={readContext:sn,useCallback:Vt,useContext:Vt,useEffect:Vt,useImperativeHandle:Vt,useLayoutEffect:Vt,useMemo:Vt,useReducer:Vt,useRef:Vt,useState:Vt,useDebugValue:Vt,useDeferredValue:Vt,useTransition:Vt,useMutableSource:Vt,useOpaqueIdentifier:Vt,unstable_isNewReconciler:!1},lb={readContext:sn,useCallback:function(t,e){return _i().memoizedState=[t,e===void 0?null:e],t},useContext:sn,useEffect:n0,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,zf(4,2,i0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return zf(4,2,t,e)},useMemo:function(t,e){var n=_i();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=_i();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t=r.queue={pending:null,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},t=t.dispatch=Hf.bind(null,Ne,t),[r.memoizedState,t]},useRef:t0,useState:Sa,useDebugValue:qf,useDeferredValue:function(t){var e=Sa(t),n=e[0],r=e[1];return n0(function(){var i=on.transition;on.transition=1;try{r(t)}finally{on.transition=i}},[t]),n},useTransition:function(){var t=Sa(!1),e=t[0];return t=ub.bind(null,t[1]),t0(t),[t,e]},useMutableSource:function(t,e,n){var r=_i();return r.memoizedState={refs:{getSnapshot:e,setSnapshot:null},source:t,subscribe:n},Zw(r,t,e,n)},useOpaqueIdentifier:function(){if(Nn){var t=!1,e=nb(function(){throw t||(t=!0,n("r:"+(Tf++).toString(36))),Error(R(355))}),n=Sa(e)[1];return(Ne.mode&2)==0&&(Ne.flags|=516,Bl(5,function(){n("r:"+(Tf++).toString(36))},void 0,null)),e}return e="r:"+(Tf++).toString(36),Sa(e),e},unstable_isNewReconciler:!1},cb={readContext:sn,useCallback:o0,useContext:sn,useEffect:jl,useImperativeHandle:s0,useLayoutEffect:r0,useMemo:a0,useReducer:Ea,useRef:zl,useState:function(){return Ea(Pn)},useDebugValue:qf,useDeferredValue:function(t){var e=Ea(Pn),n=e[0],r=e[1];return jl(function(){var i=on.transition;on.transition=1;try{r(t)}finally{on.transition=i}},[t]),n},useTransition:function(){var t=Ea(Pn)[0];return[zl().current,t]},useMutableSource:e0,useOpaqueIdentifier:function(){return Ea(Pn)[0]},unstable_isNewReconciler:!1},hb={readContext:sn,useCallback:o0,useContext:sn,useEffect:jl,useImperativeHandle:s0,useLayoutEffect:r0,useMemo:a0,useReducer:Ta,useRef:zl,useState:function(){return Ta(Pn)},useDebugValue:qf,useDeferredValue:function(t){var e=Ta(Pn),n=e[0],r=e[1];return jl(function(){var i=on.transition;on.transition=1;try{r(t)}finally{on.transition=i}},[t]),n},useTransition:function(){var t=Ta(Pn)[0];return[zl().current,t]},useMutableSource:e0,useOpaqueIdentifier:function(){return Ta(Pn)[0]},unstable_isNewReconciler:!1},db=hi.ReactCurrentOwner,_n=!1;function Bt(t,e,n,r){e.child=t===null?Gw(e,null,n,r):$l(e,t.child,n,r)}function u0(t,e,n,r,i){n=n.render;var s=e.ref;return Cs(e,i),r=Bf(t,e,n,r,s,i),t!==null&&!_n?(e.updateQueue=t.updateQueue,e.flags&=-517,t.lanes&=~i,Yn(t,e,i)):(e.flags|=1,Bt(t,e,r,i),e.child)}function l0(t,e,n,r,i,s){if(t===null){var o=n.type;return typeof o=="function"&&!pp(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=o,c0(t,e,o,r,i,s)):(t=ec(n.type,null,r,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}return o=t.child,(i&s)==0&&(i=o.memoizedProps,n=n.compare,n=n!==null?n:ua,n(i,r)&&t.ref===e.ref)?Yn(t,e,s):(e.flags|=1,t=Mr(o,r),t.ref=e.ref,t.return=e,e.child=t)}function c0(t,e,n,r,i,s){if(t!==null&&ua(t.memoizedProps,r)&&t.ref===e.ref)if(_n=!1,(s&i)!=0)(t.flags&16384)!=0&&(_n=!0);else return e.lanes=t.lanes,Yn(t,e,s);return Gf(t,e,n,r,s)}function Wf(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden"||r.mode==="unstable-defer-without-hiding")if((e.mode&4)==0)e.memoizedState={baseLanes:0},Zl(e,n);else if((n&1073741824)!=0)e.memoizedState={baseLanes:0},Zl(e,s!==null?s.baseLanes:n);else return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t},Zl(e,t),null;else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Zl(e,r);return Bt(t,e,i,n),e.child}function h0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=128)}function Gf(t,e,n,r,i){var s=Ft(n)?gi:gt.current;return s=Ts(e,s),Cs(e,i),n=Bf(t,e,n,r,s,i),t!==null&&!_n?(e.updateQueue=t.updateQueue,e.flags&=-517,t.lanes&=~i,Yn(t,e,i)):(e.flags|=1,Bt(t,e,n,i),e.child)}function d0(t,e,n,r,i){if(Ft(n)){var s=!0;bl(e)}else s=!1;if(Cs(e,i),e.stateNode===null)t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2),qw(e,n,r),Of(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var u=o.context,l=n.contextType;typeof l=="object"&&l!==null?l=sn(l):(l=Ft(n)?gi:gt.current,l=Ts(e,l));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||u!==l)&&Hw(e,o,r,l),br=!1;var d=e.memoizedState;o.state=d,pa(e,r,o,i),u=e.memoizedState,a!==r||d!==u||Ut.current||br?(typeof c=="function"&&(Dl(e,n,c,r),u=e.memoizedState),(a=br||jw(e,n,a,r,d,u,l))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4)):(typeof o.componentDidMount=="function"&&(e.flags|=4),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=l,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4),r=!1)}else{o=e.stateNode,Fw(t,e),a=e.memoizedProps,l=e.type===e.elementType?a:wn(e.type,a),o.props=l,h=e.pendingProps,d=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=sn(u):(u=Ft(n)?gi:gt.current,u=Ts(e,u));var g=n.getDerivedStateFromProps;(c=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==u)&&Hw(e,o,r,u),br=!1,d=e.memoizedState,o.state=d,pa(e,r,o,i);var y=e.memoizedState;a!==h||d!==y||Ut.current||br?(typeof g=="function"&&(Dl(e,n,g,r),y=e.memoizedState),(l=br||jw(e,n,l,r,d,y,u))?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=256)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=256),e.memoizedProps=r,e.memoizedState=y),o.props=r,o.state=y,o.context=u,r=l):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=256),r=!1)}return Kf(t,e,n,r,s,i)}function Kf(t,e,n,r,i,s){h0(t,e);var o=(e.flags&64)!=0;if(!r&&!o)return i&&Rw(e,n,!1),Yn(t,e,s);r=e.stateNode,db.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=$l(e,t.child,null,s),e.child=$l(e,null,a,s)):Bt(t,e,a,s),e.memoizedState=r.state,i&&Rw(e,n,!0),e.child}function f0(t){var e=t.stateNode;e.pendingContext?bw(t,e.pendingContext,e.pendingContext!==e.context):e.context&&bw(t,e.context,!1),Lf(t,e.containerInfo)}var Hl={dehydrated:null,retryLane:0};function p0(t,e,n){var r=e.pendingProps,i=ke.current,s=!1,o;return(o=(e.flags&64)!=0)||(o=t!==null&&t.memoizedState===null?!1:(i&2)!=0),o?(s=!0,e.flags&=-65):t!==null&&t.memoizedState===null||r.fallback===void 0||r.unstable_avoidThisFallback===!0||(i|=1),Se(ke,i&1),t===null?(r.fallback!==void 0&&$f(e),t=r.children,i=r.fallback,s?(t=m0(e,t,i,n),e.child.memoizedState={baseLanes:n},e.memoizedState=Hl,t):typeof r.unstable_expectedLoadTime=="number"?(t=m0(e,t,i,n),e.child.memoizedState={baseLanes:n},e.memoizedState=Hl,e.lanes=33554432,t):(n=mp({mode:"visible",children:t},e.mode,n,null),n.return=e,e.child=n)):t.memoizedState!==null?s?(r=y0(t,e,r.children,r.fallback,n),s=e.child,i=t.child.memoizedState,s.memoizedState=i===null?{baseLanes:n}:{baseLanes:i.baseLanes|n},s.childLanes=t.childLanes&~n,e.memoizedState=Hl,r):(n=g0(t,e,r.children,n),e.memoizedState=null,n):s?(r=y0(t,e,r.children,r.fallback,n),s=e.child,i=t.child.memoizedState,s.memoizedState=i===null?{baseLanes:n}:{baseLanes:i.baseLanes|n},s.childLanes=t.childLanes&~n,e.memoizedState=Hl,r):(n=g0(t,e,r.children,n),e.memoizedState=null,n)}function m0(t,e,n,r){var i=t.mode,s=t.child;return e={mode:"hidden",children:e},(i&2)==0&&s!==null?(s.childLanes=0,s.pendingProps=e):s=mp(e,i,0,null),n=Os(n,i,r,null),s.return=t,n.return=t,s.sibling=n,t.child=s,n}function g0(t,e,n,r){var i=t.child;return t=i.sibling,n=Mr(i,{mode:"visible",children:n}),(e.mode&2)==0&&(n.lanes=r),n.return=e,n.sibling=null,t!==null&&(t.nextEffect=null,t.flags=8,e.firstEffect=e.lastEffect=t),e.child=n}function y0(t,e,n,r,i){var s=e.mode,o=t.child;t=o.sibling;var a={mode:"hidden",children:n};return(s&2)==0&&e.child!==o?(n=e.child,n.childLanes=0,n.pendingProps=a,o=n.lastEffect,o!==null?(e.firstEffect=n.firstEffect,e.lastEffect=o,o.nextEffect=null):e.firstEffect=e.lastEffect=null):n=Mr(o,a),t!==null?r=Mr(t,r):(r=Os(r,s,i,null),r.flags|=2),r.return=e,n.return=e,n.sibling=r,e.child=n,r}function v0(t,e){t.lanes|=e;var n=t.alternate;n!==null&&(n.lanes|=e),Uw(t.return,e)}function Qf(t,e,n,r,i,s){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,lastEffect:s}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.lastEffect=s)}function w0(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Bt(t,e,r.children,n),r=ke.current,(r&2)!=0)r=r&1|2,e.flags|=64;else{if(t!==null&&(t.flags&64)!=0)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&v0(t,n);else if(t.tag===19)v0(t,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Se(ke,r),(e.mode&2)==0)e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Ul(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Qf(e,!1,i,n,s,e.lastEffect);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Ul(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Qf(e,!0,n,null,s,e.lastEffect);break;case"together":Qf(e,!1,null,null,void 0,e.lastEffect);break;default:e.memoizedState=null}return e.child}function Yn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Ca|=e.lanes,(n&e.childLanes)!=0){if(t!==null&&e.child!==t.child)throw Error(R(153));if(e.child!==null){for(t=e.child,n=Mr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Mr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}return null}var _0,Yf,I0,E0;_0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Yf=function(){};I0=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,wi(Rn.current);var s=null;switch(n){case"input":i=Dd(t,i),r=Dd(t,r),s=[];break;case"option":i=Md(t,i),r=Md(t,r),s=[];break;case"select":i=_e({},i,{value:void 0}),r=_e({},r,{value:void 0}),s=[];break;case"textarea":i=$d(t,i),r=$d(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=El)}Vd(n,r);var o;n=null;for(l in i)if(!r.hasOwnProperty(l)&&i.hasOwnProperty(l)&&i[l]!=null)if(l==="style"){var a=i[l];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else l!=="dangerouslySetInnerHTML"&&l!=="children"&&l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(Vo.hasOwnProperty(l)?s||(s=[]):(s=s||[]).push(l,null));for(l in r){var u=r[l];if(a=i!=null?i[l]:void 0,r.hasOwnProperty(l)&&u!==a&&(u!=null||a!=null))if(l==="style")if(a){for(o in a)!a.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&a[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(l,n)),n=u;else l==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(s=s||[]).push(l,u)):l==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(l,""+u):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&(Vo.hasOwnProperty(l)?(u!=null&&l==="onScroll"&&me("scroll",t),s||a===u||(s=[])):typeof u=="object"&&u!==null&&u.$$typeof===Ad?u.toString():(s=s||[]).push(l,u))}n&&(s=s||[]).push("style",n);var l=s;(e.updateQueue=l)&&(e.flags|=4)}};E0=function(t,e,n,r){n!==r&&(e.flags|=4)};function ka(t,e){if(!Nn)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function fb(t,e,n){var r=e.pendingProps;switch(e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return null;case 1:return Ft(e.type)&&Cl(),null;case 3:return bs(),ge(Ut),ge(gt),Ff(),r=e.stateNode,r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Fl(e)?e.flags|=4:r.hydrate||(e.flags|=256)),Yf(e),null;case 5:Mf(e);var i=wi(va.current);if(n=e.type,t!==null&&e.stateNode!=null)I0(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=128);else{if(!r){if(e.stateNode===null)throw Error(R(166));return null}if(t=wi(Rn.current),Fl(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Sr]=e,r[Sl]=s,n){case"dialog":me("cancel",r),me("close",r);break;case"iframe":case"object":case"embed":me("load",r);break;case"video":case"audio":for(t=0;t<ca.length;t++)me(ca[t],r);break;case"source":me("error",r);break;case"img":case"image":case"link":me("error",r),me("load",r);break;case"details":me("toggle",r);break;case"input":dv(r,s),me("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},me("invalid",r);break;case"textarea":mv(r,s),me("invalid",r)}Vd(n,s),t=null;for(var o in s)s.hasOwnProperty(o)&&(i=s[o],o==="children"?typeof i=="string"?r.textContent!==i&&(t=["children",i]):typeof i=="number"&&r.textContent!==""+i&&(t=["children",""+i]):Vo.hasOwnProperty(o)&&i!=null&&o==="onScroll"&&me("scroll",r));switch(n){case"input":sl(r),pv(r,s,!0);break;case"textarea":sl(r),yv(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=El)}r=t,e.updateQueue=r,r!==null&&(e.flags|=4)}else{switch(o=i.nodeType===9?i:i.ownerDocument,t===Ud.html&&(t=vv(n)),t===Ud.html?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Sr]=e,t[Sl]=r,_0(t,e,!1,!1),e.stateNode=t,o=Bd(n,r),n){case"dialog":me("cancel",t),me("close",t),i=r;break;case"iframe":case"object":case"embed":me("load",t),i=r;break;case"video":case"audio":for(i=0;i<ca.length;i++)me(ca[i],t);i=r;break;case"source":me("error",t),i=r;break;case"img":case"image":case"link":me("error",t),me("load",t),i=r;break;case"details":me("toggle",t),i=r;break;case"input":dv(t,r),i=Dd(t,r),me("invalid",t);break;case"option":i=Md(t,r);break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=_e({},r,{value:void 0}),me("invalid",t);break;case"textarea":mv(t,r),i=$d(t,r),me("invalid",t);break;default:i=r}Vd(n,i);var a=i;for(s in a)if(a.hasOwnProperty(s)){var u=a[s];s==="style"?Iv(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&wv(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Wo(t,u):typeof u=="number"&&Wo(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Vo.hasOwnProperty(s)?u!=null&&s==="onScroll"&&me("scroll",t):u!=null&&Ed(t,s,u,o))}switch(n){case"input":sl(t),pv(t,r,!1);break;case"textarea":sl(t),yv(t);break;case"option":r.value!=null&&t.setAttribute("value",""+vr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?ls(t,!!r.multiple,s,!1):r.defaultValue!=null&&ls(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=El)}Ew(n,r)&&(e.flags|=4)}e.ref!==null&&(e.flags|=128)}return null;case 6:if(t&&e.stateNode!=null)E0(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(R(166));n=wi(va.current),wi(Rn.current),Fl(e)?(r=e.stateNode,n=e.memoizedProps,r[Sr]=e,r.nodeValue!==n&&(e.flags|=4)):(r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Sr]=e,e.stateNode=r)}return null;case 13:return ge(ke),r=e.memoizedState,(e.flags&64)!=0?(e.lanes=n,e):(r=r!==null,n=!1,t===null?e.memoizedProps.fallback!==void 0&&Fl(e):n=t.memoizedState!==null,r&&!n&&(e.mode&2)!=0&&(t===null&&e.memoizedProps.unstable_avoidThisFallback!==!0||(ke.current&1)!=0?it===0&&(it=3):((it===0||it===3)&&(it=4),At===null||(Ca&134217727)==0&&(Ns&134217727)==0||xs(At,wt))),(r||n)&&(e.flags|=4),null);case 4:return bs(),Yf(e),t===null&&yw(e.stateNode.containerInfo),null;case 10:return xf(e),null;case 17:return Ft(e.type)&&Cl(),null;case 19:if(ge(ke),r=e.memoizedState,r===null)return null;if(s=(e.flags&64)!=0,o=r.rendering,o===null)if(s)ka(r,!1);else{if(it!==0||t!==null&&(t.flags&64)!=0)for(t=e.child;t!==null;){if(o=Ul(t),o!==null){for(e.flags|=64,ka(r,!1),s=o.updateQueue,s!==null&&(e.updateQueue=s,e.flags|=4),r.lastEffect===null&&(e.firstEffect=null),e.lastEffect=r.lastEffect,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=2,s.nextEffect=null,s.firstEffect=null,s.lastEffect=null,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Se(ke,ke.current&1|2),e.child}t=t.sibling}r.tail!==null&&yt()>ap&&(e.flags|=64,s=!0,ka(r,!1),e.lanes=33554432)}else{if(!s)if(t=Ul(o),t!==null){if(e.flags|=64,s=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ka(r,!0),r.tail===null&&r.tailMode==="hidden"&&!o.alternate&&!Nn)return e=e.lastEffect=r.lastEffect,e!==null&&(e.nextEffect=null),null}else 2*yt()-r.renderingStartTime>ap&&n!==1073741824&&(e.flags|=64,s=!0,ka(r,!1),e.lanes=33554432);r.isBackwards?(o.sibling=e.child,e.child=o):(n=r.last,n!==null?n.sibling=o:e.child=o,r.last=o)}return r.tail!==null?(n=r.tail,r.rendering=n,r.tail=n.sibling,r.lastEffect=e.lastEffect,r.renderingStartTime=yt(),n.sibling=null,e=ke.current,Se(ke,s?e&1|2:e&1),n):null;case 23:case 24:return fp(),t!==null&&t.memoizedState!==null!=(e.memoizedState!==null)&&r.mode!=="unstable-defer-without-hiding"&&(e.flags|=4),null}throw Error(R(156,e.tag))}function pb(t){switch(t.tag){case 1:Ft(t.type)&&Cl();var e=t.flags;return e&4096?(t.flags=e&-4097|64,t):null;case 3:if(bs(),ge(Ut),ge(gt),Ff(),e=t.flags,(e&64)!=0)throw Error(R(285));return t.flags=e&-4097|64,t;case 5:return Mf(t),null;case 13:return ge(ke),e=t.flags,e&4096?(t.flags=e&-4097|64,t):null;case 19:return ge(ke),null;case 4:return bs(),null;case 10:return xf(t),null;case 23:case 24:return fp(),null;default:return null}}function Xf(t,e){try{var n="",r=e;do n+=Kk(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i}}function Jf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var mb=typeof WeakMap=="function"?WeakMap:Map;function T0(t,e,n){n=Ar(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Kl||(Kl=!0,up=r),Jf(t,e)},n}function S0(t,e,n){n=Ar(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return Jf(t,e),r(i)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){typeof r!="function"&&(xn===null?xn=new Set([this]):xn.add(this),Jf(t,e));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}var gb=typeof WeakSet=="function"?WeakSet:Set;function k0(t){var e=t.ref;if(e!==null)if(typeof e=="function")try{e(null)}catch(n){Lr(t,n)}else e.current=null}function yb(t,e){switch(e.tag){case 0:case 11:case 15:case 22:return;case 1:if(e.flags&256&&t!==null){var n=t.memoizedProps,r=t.memoizedState;t=e.stateNode,e=t.getSnapshotBeforeUpdate(e.elementType===e.type?n:wn(e.type,n),r),t.__reactInternalSnapshotBeforeUpdate=e}return;case 3:e.flags&256&&Ef(e.stateNode.containerInfo);return;case 5:case 6:case 4:case 17:return}throw Error(R(163))}function vb(t,e,n){switch(n.tag){case 0:case 11:case 15:case 22:if(e=n.updateQueue,e=e!==null?e.lastEffect:null,e!==null){t=e=e.next;do{if((t.tag&3)==3){var r=t.create;t.destroy=r()}t=t.next}while(t!==e)}if(e=n.updateQueue,e=e!==null?e.lastEffect:null,e!==null){t=e=e.next;do{var i=t;r=i.next,i=i.tag,(i&4)!=0&&(i&1)!=0&&(V0(n,t),Cb(n,t)),t=r}while(t!==e)}return;case 1:t=n.stateNode,n.flags&4&&(e===null?t.componentDidMount():(r=n.elementType===n.type?e.memoizedProps:wn(n.type,e.memoizedProps),t.componentDidUpdate(r,e.memoizedState,t.__reactInternalSnapshotBeforeUpdate))),e=n.updateQueue,e!==null&&Bw(n,e,t);return;case 3:if(e=n.updateQueue,e!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}Bw(n,e,t)}return;case 5:t=n.stateNode,e===null&&n.flags&4&&Ew(n.type,n.memoizedProps)&&t.focus();return;case 6:return;case 4:return;case 12:return;case 13:n.memoizedState===null&&(n=n.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&$v(n))));return;case 19:case 17:case 20:case 21:case 23:case 24:return}throw Error(R(163))}function C0(t,e){for(var n=t;;){if(n.tag===5){var r=n.stateNode;if(e)r=r.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none";else{r=n.stateNode;var i=n.memoizedProps.style;i=i!=null&&i.hasOwnProperty("display")?i.display:null,r.style.display=_v("display",i)}}else if(n.tag===6)n.stateNode.nodeValue=e?"":n.memoizedProps;else if((n.tag!==23&&n.tag!==24||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}}function b0(t,e){if(yi&&typeof yi.onCommitFiberUnmount=="function")try{yi.onCommitFiberUnmount(kf,e)}catch{}switch(e.tag){case 0:case 11:case 14:case 15:case 22:if(t=e.updateQueue,t!==null&&(t=t.lastEffect,t!==null)){var n=t=t.next;do{var r=n,i=r.destroy;if(r=r.tag,i!==void 0)if((r&4)!=0)V0(e,n);else{r=e;try{i()}catch(s){Lr(r,s)}}n=n.next}while(n!==t)}break;case 1:if(k0(e),t=e.stateNode,typeof t.componentWillUnmount=="function")try{t.props=e.memoizedProps,t.state=e.memoizedState,t.componentWillUnmount()}catch(s){Lr(e,s)}break;case 5:k0(e);break;case 4:P0(t,e)}}function A0(t){t.alternate=null,t.child=null,t.dependencies=null,t.firstEffect=null,t.lastEffect=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.return=null,t.updateQueue=null}function R0(t){return t.tag===5||t.tag===3||t.tag===4}function N0(t){e:{for(var e=t.return;e!==null;){if(R0(e))break e;e=e.return}throw Error(R(160))}var n=e;switch(e=n.stateNode,n.tag){case 5:var r=!1;break;case 3:e=e.containerInfo,r=!0;break;case 4:e=e.containerInfo,r=!0;break;default:throw Error(R(161))}n.flags&16&&(Wo(e,""),n.flags&=-17);e:t:for(n=t;;){for(;n.sibling===null;){if(n.return===null||R0(n.return)){n=null;break e}n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue t;n.child.return=n,n=n.child}if(!(n.flags&2)){n=n.stateNode;break e}}r?Zf(t,n,e):ep(t,n,e)}function Zf(t,e,n){var r=t.tag,i=r===5||r===6;if(i)t=i?t.stateNode:t.stateNode.instance,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=El));else if(r!==4&&(t=t.child,t!==null))for(Zf(t,e,n),t=t.sibling;t!==null;)Zf(t,e,n),t=t.sibling}function ep(t,e,n){var r=t.tag,i=r===5||r===6;if(i)t=i?t.stateNode:t.stateNode.instance,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(ep(t,e,n),t=t.sibling;t!==null;)ep(t,e,n),t=t.sibling}function P0(t,e){for(var n=e,r=!1,i,s;;){if(!r){r=n.return;e:for(;;){if(r===null)throw Error(R(160));switch(i=r.stateNode,r.tag){case 5:s=!1;break e;case 3:i=i.containerInfo,s=!0;break e;case 4:i=i.containerInfo,s=!0;break e}r=r.return}r=!0}if(n.tag===5||n.tag===6){e:for(var o=t,a=n,u=a;;)if(b0(o,u),u.child!==null&&u.tag!==4)u.child.return=u,u=u.child;else{if(u===a)break e;for(;u.sibling===null;){if(u.return===null||u.return===a)break e;u=u.return}u.sibling.return=u.return,u=u.sibling}s?(o=i,a=n.stateNode,o.nodeType===8?o.parentNode.removeChild(a):o.removeChild(a)):i.removeChild(n.stateNode)}else if(n.tag===4){if(n.child!==null){i=n.stateNode.containerInfo,s=!0,n.child.return=n,n=n.child;continue}}else if(b0(t,n),n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return,n.tag===4&&(r=!1)}n.sibling.return=n.return,n=n.sibling}}function tp(t,e){switch(e.tag){case 0:case 11:case 14:case 15:case 22:var n=e.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var r=n=n.next;do(r.tag&3)==3&&(t=r.destroy,r.destroy=void 0,t!==void 0&&t()),r=r.next;while(r!==n)}return;case 1:return;case 5:if(n=e.stateNode,n!=null){r=e.memoizedProps;var i=t!==null?t.memoizedProps:r;t=e.type;var s=e.updateQueue;if(e.updateQueue=null,s!==null){for(n[Sl]=r,t==="input"&&r.type==="radio"&&r.name!=null&&fv(n,r),Bd(t,i),e=Bd(t,r),i=0;i<s.length;i+=2){var o=s[i],a=s[i+1];o==="style"?Iv(n,a):o==="dangerouslySetInnerHTML"?wv(n,a):o==="children"?Wo(n,a):Ed(n,o,a,e)}switch(t){case"input":Od(n,r);break;case"textarea":gv(n,r);break;case"select":t=n._wrapperState.wasMultiple,n._wrapperState.wasMultiple=!!r.multiple,s=r.value,s!=null?ls(n,!!r.multiple,s,!1):t!==!!r.multiple&&(r.defaultValue!=null?ls(n,!!r.multiple,r.defaultValue,!0):ls(n,!!r.multiple,r.multiple?[]:"",!1))}}}return;case 6:if(e.stateNode===null)throw Error(R(162));e.stateNode.nodeValue=e.memoizedProps;return;case 3:n=e.stateNode,n.hydrate&&(n.hydrate=!1,$v(n.containerInfo));return;case 12:return;case 13:e.memoizedState!==null&&(op=yt(),C0(e.child,!0)),x0(e);return;case 19:x0(e);return;case 17:return;case 23:case 24:C0(e,e.memoizedState!==null);return}throw Error(R(163))}function x0(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new gb),e.forEach(function(r){var i=Rb.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function wb(t,e){return t!==null&&(t=t.memoizedState,t===null||t.dehydrated!==null)?(e=e.memoizedState,e!==null&&e.dehydrated===null):!1}var _b=Math.ceil,Wl=hi.ReactCurrentDispatcher,np=hi.ReactCurrentOwner,W=0,At=null,$e=null,wt=0,Ei=0,rp=kr(0),it=0,Gl=null,Rs=0,Ca=0,Ns=0,ip=0,sp=null,op=0,ap=1/0;function Ps(){ap=yt()+500}var U=null,Kl=!1,up=null,xn=null,Pr=!1,ba=null,Aa=90,lp=[],cp=[],Xn=null,Ra=0,hp=null,Ql=-1,Jn=0,Yl=0,Na=null,Xl=!1;function Gt(){return(W&48)!=0?yt():Ql!==-1?Ql:Ql=yt()}function xr(t){if(t=t.mode,(t&2)==0)return 1;if((t&4)==0)return Ss()===99?1:2;if(Jn===0&&(Jn=Rs),ab.transition!==0){Yl!==0&&(Yl=sp!==null?sp.pendingLanes:0),t=Jn;var e=4186112&~Yl;return e&=-e,e===0&&(t=4186112&~t,e=t&-t,e===0&&(e=8192)),e}return t=Ss(),(W&4)!=0&&t===98?t=fl(12,Jn):(t=cC(t),t=fl(t,Jn)),t}function Dr(t,e,n){if(50<Ra)throw Ra=0,hp=null,Error(R(185));if(t=Jl(t,e),t===null)return null;pl(t,e,n),t===At&&(Ns|=e,it===4&&xs(t,wt));var r=Ss();e===1?(W&8)!=0&&(W&48)==0?dp(t):(an(t,n),W===0&&(Ps(),An())):((W&4)==0||r!==98&&r!==99||(Xn===null?Xn=new Set([t]):Xn.add(t)),an(t,n)),sp=t}function Jl(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}function an(t,e){for(var n=t.callbackNode,r=t.suspendedLanes,i=t.pingedLanes,s=t.expirationTimes,o=t.pendingLanes;0<o;){var a=31-Er(o),u=1<<a,l=s[a];if(l===-1){if((u&r)==0||(u&i)!=0){l=e,fs(u);var c=pe;s[a]=10<=c?l+250:6<=c?l+5e3:-1}}else l<=e&&(t.expiredLanes|=u);o&=~u}if(r=na(t,t===At?wt:0),e=pe,r===0)n!==null&&(n!==Rf&&bf(n),t.callbackNode=null,t.callbackPriority=0);else{if(n!==null){if(t.callbackPriority===e)return;n!==Rf&&bf(n)}e===15?(n=dp.bind(null,t),Kn===null?(Kn=[n],Rl=Cf(Al,$w)):Kn.push(n),n=Rf):e===14?n=fa(99,dp.bind(null,t)):(n=hC(e),n=fa(n,D0.bind(null,t))),t.callbackPriority=e,t.callbackNode=n}}function D0(t){if(Ql=-1,Yl=Jn=0,(W&48)!=0)throw Error(R(327));var e=t.callbackNode;if(Or()&&t.callbackNode!==e)return null;var n=na(t,t===At?wt:0);if(n===0)return null;var r=n,i=W;W|=16;var s=$0();(At!==t||wt!==r)&&(Ps(),Ds(t,r));do try{Tb();break}catch(a){M0(t,a)}while(1);if(Pf(),Wl.current=s,W=i,$e!==null?r=0:(At=null,wt=0,r=it),(Rs&Ns)!=0)Ds(t,0);else if(r!==0){if(r===2&&(W|=64,t.hydrate&&(t.hydrate=!1,Ef(t.containerInfo)),n=qv(t),n!==0&&(r=Pa(t,n))),r===1)throw e=Gl,Ds(t,0),xs(t,n),an(t,yt()),e;switch(t.finishedWork=t.current.alternate,t.finishedLanes=n,r){case 0:case 1:throw Error(R(345));case 2:Ti(t);break;case 3:if(xs(t,n),(n&62914560)===n&&(r=op+500-yt(),10<r)){if(na(t,0)!==0)break;if(i=t.suspendedLanes,(i&n)!==n){Gt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Tw(Ti.bind(null,t),r);break}Ti(t);break;case 4:if(xs(t,n),(n&4186112)===n)break;for(r=t.eventTimes,i=-1;0<n;){var o=31-Er(n);s=1<<o,o=r[o],o>i&&(i=o),n&=~s}if(n=i,n=yt()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*_b(n/1960))-n,10<n){t.timeoutHandle=Tw(Ti.bind(null,t),n);break}Ti(t);break;case 5:Ti(t);break;default:throw Error(R(329))}}return an(t,yt()),t.callbackNode===e?D0.bind(null,t):null}function xs(t,e){for(e&=~ip,e&=~Ns,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Er(e),r=1<<n;t[n]=-1,e&=~r}}function dp(t){if((W&48)!=0)throw Error(R(327));if(Or(),t===At&&(t.expiredLanes&wt)!=0){var e=wt,n=Pa(t,e);(Rs&Ns)!=0&&(e=na(t,e),n=Pa(t,e))}else e=na(t,0),n=Pa(t,e);if(t.tag!==0&&n===2&&(W|=64,t.hydrate&&(t.hydrate=!1,Ef(t.containerInfo)),e=qv(t),e!==0&&(n=Pa(t,e))),n===1)throw n=Gl,Ds(t,0),xs(t,e),an(t,yt()),n;return t.finishedWork=t.current.alternate,t.finishedLanes=e,Ti(t),an(t,yt()),null}function Ib(){if(Xn!==null){var t=Xn;Xn=null,t.forEach(function(e){e.expiredLanes|=24&e.pendingLanes,an(e,yt())})}An()}function O0(t,e){var n=W;W|=1;try{return t(e)}finally{W=n,W===0&&(Ps(),An())}}function L0(t,e){var n=W;W&=-2,W|=8;try{return t(e)}finally{W=n,W===0&&(Ps(),An())}}function Zl(t,e){Se(rp,Ei),Ei|=e,Rs|=e}function fp(){Ei=rp.current,ge(rp)}function Ds(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,tb(n)),$e!==null)for(n=$e.return;n!==null;){var r=n;switch(r.tag){case 1:r=r.type.childContextTypes,r!=null&&Cl();break;case 3:bs(),ge(Ut),ge(gt),Ff();break;case 5:Mf(r);break;case 4:bs();break;case 13:ge(ke);break;case 19:ge(ke);break;case 10:xf(r);break;case 23:case 24:fp()}n=n.return}At=t,$e=Mr(t.current,null),wt=Ei=Rs=e,it=0,Gl=null,ip=Ns=Ca=0}function M0(t,e){do{var n=$e;try{if(Pf(),wa.current=ql,Vl){for(var r=Ne.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Vl=!1}if(_a=0,rt=vt=Ne=null,Ia=!1,np.current=null,n===null||n.return===null){it=1,Gl=e,$e=null;break}e:{var s=t,o=n.return,a=n,u=e;if(e=wt,a.flags|=2048,a.firstEffect=a.lastEffect=null,u!==null&&typeof u=="object"&&typeof u.then=="function"){var l=u;if((a.mode&2)==0){var c=a.alternate;c?(a.updateQueue=c.updateQueue,a.memoizedState=c.memoizedState,a.lanes=c.lanes):(a.updateQueue=null,a.memoizedState=null)}var h=(ke.current&1)!=0,d=o;do{var g;if(g=d.tag===13){var y=d.memoizedState;if(y!==null)g=y.dehydrated!==null;else{var _=d.memoizedProps;g=_.fallback===void 0?!1:_.unstable_avoidThisFallback!==!0?!0:!h}}if(g){var f=d.updateQueue;if(f===null){var p=new Set;p.add(l),d.updateQueue=p}else f.add(l);if((d.mode&2)==0){if(d.flags|=64,a.flags|=16384,a.flags&=-2981,a.tag===1)if(a.alternate===null)a.tag=17;else{var m=Ar(-1,1);m.tag=2,Rr(a,m)}a.lanes|=1;break e}u=void 0,a=e;var w=s.pingCache;if(w===null?(w=s.pingCache=new mb,u=new Set,w.set(l,u)):(u=w.get(l),u===void 0&&(u=new Set,w.set(l,u))),!u.has(a)){u.add(a);var v=Ab.bind(null,s,l,a);l.then(v,v)}d.flags|=4096,d.lanes=e;break e}d=d.return}while(d!==null);u=Error((us(a.type)||"A React component")+` suspended while rendering, but no fallback UI was specified.

Add a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.`)}it!==5&&(it=2),u=Xf(u,a),d=o;do{switch(d.tag){case 3:s=u,d.flags|=4096,e&=-e,d.lanes|=e;var P=T0(d,s,e);Vw(d,P);break e;case 1:s=u;var b=d.type,V=d.stateNode;if((d.flags&64)==0&&(typeof b.getDerivedStateFromError=="function"||V!==null&&typeof V.componentDidCatch=="function"&&(xn===null||!xn.has(V)))){d.flags|=4096,e&=-e,d.lanes|=e;var F=S0(d,s,e);Vw(d,F);break e}}d=d.return}while(d!==null)}F0(n)}catch(M){e=M,$e===n&&n!==null&&($e=n=n.return);continue}break}while(1)}function $0(){var t=Wl.current;return Wl.current=ql,t===null?ql:t}function Pa(t,e){var n=W;W|=16;var r=$0();At===t&&wt===e||Ds(t,e);do try{Eb();break}catch(i){M0(t,i)}while(1);if(Pf(),W=n,Wl.current=r,$e!==null)throw Error(R(261));return At=null,wt=0,it}function Eb(){for(;$e!==null;)U0($e)}function Tb(){for(;$e!==null&&!ib();)U0($e)}function U0(t){var e=z0(t.alternate,t,Ei);t.memoizedProps=t.pendingProps,e===null?F0(t):$e=e,np.current=null}function F0(t){var e=t;do{var n=e.alternate;if(t=e.return,(e.flags&2048)==0){if(n=fb(n,e,Ei),n!==null){$e=n;return}if(n=e,n.tag!==24&&n.tag!==23||n.memoizedState===null||(Ei&1073741824)!=0||(n.mode&4)==0){for(var r=0,i=n.child;i!==null;)r|=i.lanes|i.childLanes,i=i.sibling;n.childLanes=r}t!==null&&(t.flags&2048)==0&&(t.firstEffect===null&&(t.firstEffect=e.firstEffect),e.lastEffect!==null&&(t.lastEffect!==null&&(t.lastEffect.nextEffect=e.firstEffect),t.lastEffect=e.lastEffect),1<e.flags&&(t.lastEffect!==null?t.lastEffect.nextEffect=e:t.firstEffect=e,t.lastEffect=e))}else{if(n=pb(e),n!==null){n.flags&=2047,$e=n;return}t!==null&&(t.firstEffect=t.lastEffect=null,t.flags|=2048)}if(e=e.sibling,e!==null){$e=e;return}$e=e=t}while(e!==null);it===0&&(it=5)}function Ti(t){var e=Ss();return vi(99,Sb.bind(null,t,e)),null}function Sb(t,e){do Or();while(ba!==null);if((W&48)!=0)throw Error(R(327));var n=t.finishedWork;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(R(177));t.callbackNode=null;var r=n.lanes|n.childLanes,i=r,s=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;for(var o=t.eventTimes,a=t.expirationTimes;0<s;){var u=31-Er(s),l=1<<u;i[u]=0,o[u]=-1,a[u]=-1,s&=~l}if(Xn!==null&&(r&24)==0&&Xn.has(t)&&Xn.delete(t),t===At&&($e=At=null,wt=0),1<n.flags?n.lastEffect!==null?(n.lastEffect.nextEffect=n,r=n.firstEffect):r=n:r=n.firstEffect,r!==null){if(i=W,W|=32,np.current=null,wf=ml,o=cw(),mf(o)){if("selectionStart"in o)a={start:o.selectionStart,end:o.selectionEnd};else e:if(a=(a=o.ownerDocument)&&a.defaultView||window,(l=a.getSelection&&a.getSelection())&&l.rangeCount!==0){a=l.anchorNode,s=l.anchorOffset,u=l.focusNode,l=l.focusOffset;try{a.nodeType,u.nodeType}catch{a=null;break e}var c=0,h=-1,d=-1,g=0,y=0,_=o,f=null;t:for(;;){for(var p;_!==a||s!==0&&_.nodeType!==3||(h=c+s),_!==u||l!==0&&_.nodeType!==3||(d=c+l),_.nodeType===3&&(c+=_.nodeValue.length),(p=_.firstChild)!==null;)f=_,_=p;for(;;){if(_===o)break t;if(f===a&&++g===s&&(h=c),f===u&&++y===l&&(d=c),(p=_.nextSibling)!==null)break;_=f,f=_.parentNode}_=p}a=h===-1||d===-1?null:{start:h,end:d}}else a=null;a=a||{start:0,end:0}}else a=null;_f={focusedElem:o,selectionRange:a},ml=!1,Na=null,Xl=!1,U=r;do try{kb()}catch(M){if(U===null)throw Error(R(330));Lr(U,M),U=U.nextEffect}while(U!==null);Na=null,U=r;do try{for(o=t;U!==null;){var m=U.flags;if(m&16&&Wo(U.stateNode,""),m&128){var w=U.alternate;if(w!==null){var v=w.ref;v!==null&&(typeof v=="function"?v(null):v.current=null)}}switch(m&1038){case 2:N0(U),U.flags&=-3;break;case 6:N0(U),U.flags&=-3,tp(U.alternate,U);break;case 1024:U.flags&=-1025;break;case 1028:U.flags&=-1025,tp(U.alternate,U);break;case 4:tp(U.alternate,U);break;case 8:a=U,P0(o,a);var P=a.alternate;A0(a),P!==null&&A0(P)}U=U.nextEffect}}catch(M){if(U===null)throw Error(R(330));Lr(U,M),U=U.nextEffect}while(U!==null);if(v=_f,w=cw(),m=v.focusedElem,o=v.selectionRange,w!==m&&m&&m.ownerDocument&&lw(m.ownerDocument.documentElement,m)){for(o!==null&&mf(m)&&(w=o.start,v=o.end,v===void 0&&(v=w),"selectionStart"in m?(m.selectionStart=w,m.selectionEnd=Math.min(v,m.value.length)):(v=(w=m.ownerDocument||document)&&w.defaultView||window,v.getSelection&&(v=v.getSelection(),a=m.textContent.length,P=Math.min(o.start,a),o=o.end===void 0?P:Math.min(o.end,a),!v.extend&&P>o&&(a=o,o=P,P=a),a=uw(m,P),s=uw(m,o),a&&s&&(v.rangeCount!==1||v.anchorNode!==a.node||v.anchorOffset!==a.offset||v.focusNode!==s.node||v.focusOffset!==s.offset)&&(w=w.createRange(),w.setStart(a.node,a.offset),v.removeAllRanges(),P>o?(v.addRange(w),v.extend(s.node,s.offset)):(w.setEnd(s.node,s.offset),v.addRange(w)))))),w=[],v=m;v=v.parentNode;)v.nodeType===1&&w.push({element:v,left:v.scrollLeft,top:v.scrollTop});for(typeof m.focus=="function"&&m.focus(),m=0;m<w.length;m++)v=w[m],v.element.scrollLeft=v.left,v.element.scrollTop=v.top}ml=!!wf,_f=wf=null,t.current=n,U=r;do try{for(m=t;U!==null;){var b=U.flags;if(b&36&&vb(m,U.alternate,U),b&128){w=void 0;var V=U.ref;if(V!==null){var F=U.stateNode;switch(U.tag){case 5:w=F;break;default:w=F}typeof V=="function"?V(w):V.current=w}}U=U.nextEffect}}catch(M){if(U===null)throw Error(R(330));Lr(U,M),U=U.nextEffect}while(U!==null);U=null,ob(),W=i}else t.current=n;if(Pr)Pr=!1,ba=t,Aa=e;else for(U=r;U!==null;)e=U.nextEffect,U.nextEffect=null,U.flags&8&&(b=U,b.sibling=null,b.stateNode=null),U=e;if(r=t.pendingLanes,r===0&&(xn=null),r===1?t===hp?Ra++:(Ra=0,hp=t):Ra=0,n=n.stateNode,yi&&typeof yi.onCommitFiberRoot=="function")try{yi.onCommitFiberRoot(kf,n,void 0,(n.current.flags&64)==64)}catch{}if(an(t,yt()),Kl)throw Kl=!1,t=up,up=null,t;return(W&8)!=0||An(),null}function kb(){for(;U!==null;){var t=U.alternate;Xl||Na===null||((U.flags&8)!=0?Nv(U,Na)&&(Xl=!0):U.tag===13&&wb(t,U)&&Nv(U,Na)&&(Xl=!0));var e=U.flags;(e&256)!=0&&yb(t,U),(e&512)==0||Pr||(Pr=!0,fa(97,function(){return Or(),null})),U=U.nextEffect}}function Or(){if(Aa!==90){var t=97<Aa?97:Aa;return Aa=90,vi(t,bb)}return!1}function Cb(t,e){lp.push(e,t),Pr||(Pr=!0,fa(97,function(){return Or(),null}))}function V0(t,e){cp.push(e,t),Pr||(Pr=!0,fa(97,function(){return Or(),null}))}function bb(){if(ba===null)return!1;var t=ba;if(ba=null,(W&48)!=0)throw Error(R(331));var e=W;W|=32;var n=cp;cp=[];for(var r=0;r<n.length;r+=2){var i=n[r],s=n[r+1],o=i.destroy;if(i.destroy=void 0,typeof o=="function")try{o()}catch(u){if(s===null)throw Error(R(330));Lr(s,u)}}for(n=lp,lp=[],r=0;r<n.length;r+=2){i=n[r],s=n[r+1];try{var a=i.create;i.destroy=a()}catch(u){if(s===null)throw Error(R(330));Lr(s,u)}}for(a=t.current.firstEffect;a!==null;)t=a.nextEffect,a.nextEffect=null,a.flags&8&&(a.sibling=null,a.stateNode=null),a=t;return W=e,An(),!0}function B0(t,e,n){e=Xf(n,e),e=T0(t,e,1),Rr(t,e),e=Gt(),t=Jl(t,1),t!==null&&(pl(t,1,e),an(t,e))}function Lr(t,e){if(t.tag===3)B0(t,t,e);else for(var n=t.return;n!==null;){if(n.tag===3){B0(n,t,e);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(xn===null||!xn.has(r))){t=Xf(e,t);var i=S0(n,t,1);if(Rr(n,i),i=Gt(),n=Jl(n,1),n!==null)pl(n,1,i),an(n,i);else if(typeof r.componentDidCatch=="function"&&(xn===null||!xn.has(r)))try{r.componentDidCatch(e,t)}catch{}break}}n=n.return}}function Ab(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Gt(),t.pingedLanes|=t.suspendedLanes&n,At===t&&(wt&n)===n&&(it===4||it===3&&(wt&62914560)===wt&&500>yt()-op?Ds(t,0):ip|=n),an(t,e)}function Rb(t,e){var n=t.stateNode;n!==null&&n.delete(e),e=0,e===0&&(e=t.mode,(e&2)==0?e=1:(e&4)==0?e=Ss()===99?1:2:(Jn===0&&(Jn=Rs),e=ps(62914560&~Jn),e===0&&(e=4194304))),n=Gt(),t=Jl(t,e),t!==null&&(pl(t,e,n),an(t,n))}var z0;z0=function(t,e,n){var r=e.lanes;if(t!==null)if(t.memoizedProps!==e.pendingProps||Ut.current)_n=!0;else if((n&r)!=0)_n=(t.flags&16384)!=0;else{switch(_n=!1,e.tag){case 3:f0(e),Uf();break;case 5:Kw(e);break;case 1:Ft(e.type)&&bl(e);break;case 4:Lf(e,e.stateNode.containerInfo);break;case 10:r=e.memoizedProps.value;var i=e.type._context;Se(Nl,i._currentValue),i._currentValue=r;break;case 13:if(e.memoizedState!==null)return(n&e.child.childLanes)!=0?p0(t,e,n):(Se(ke,ke.current&1),e=Yn(t,e,n),e!==null?e.sibling:null);Se(ke,ke.current&1);break;case 19:if(r=(n&e.childLanes)!=0,(t.flags&64)!=0){if(r)return w0(t,e,n);e.flags|=64}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Se(ke,ke.current),r)break;return null;case 23:case 24:return e.lanes=0,Wf(t,e,n)}return Yn(t,e,n)}else _n=!1;switch(e.lanes=0,e.tag){case 2:if(r=e.type,t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2),t=e.pendingProps,i=Ts(e,gt.current),Cs(e,n),i=Bf(null,e,r,t,i,n),e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0){if(e.tag=1,e.memoizedState=null,e.updateQueue=null,Ft(r)){var s=!0;bl(e)}else s=!1;e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Df(e);var o=r.getDerivedStateFromProps;typeof o=="function"&&Dl(e,r,o,t),i.updater=Ol,e.stateNode=i,i._reactInternals=e,Of(e,r,t,n),e=Kf(null,e,r,!0,s,n)}else e.tag=0,Bt(null,e,i,n),e=e.child;return e;case 16:i=e.elementType;e:{switch(t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2),t=e.pendingProps,s=i._init,i=s(i._payload),e.type=i,s=e.tag=Pb(i),t=wn(i,t),s){case 0:e=Gf(null,e,i,t,n);break e;case 1:e=d0(null,e,i,t,n);break e;case 11:e=u0(null,e,i,t,n);break e;case 14:e=l0(null,e,i,wn(i.type,t),r,n);break e}throw Error(R(306,i,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:wn(r,i),Gf(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:wn(r,i),d0(t,e,r,i,n);case 3:if(f0(e),r=e.updateQueue,t===null||r===null)throw Error(R(282));if(r=e.pendingProps,i=e.memoizedState,i=i!==null?i.element:null,Fw(t,e),pa(e,r,null,n),r=e.memoizedState.element,r===i)Uf(),e=Yn(t,e,n);else{if(i=e.stateNode,(s=i.hydrate)&&(Nr=ws(e.stateNode.containerInfo.firstChild),Qn=e,s=Nn=!0),s){if(t=i.mutableSourceEagerHydrationData,t!=null)for(i=0;i<t.length;i+=2)s=t[i],s._workInProgressVersionPrimary=t[i+1],As.push(s);for(n=Gw(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|1024,n=n.sibling}else Bt(t,e,r,n),Uf();e=e.child}return e;case 5:return Kw(e),t===null&&$f(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,If(r,i)?o=null:s!==null&&If(r,s)&&(e.flags|=16),h0(t,e),Bt(t,e,o,n),e.child;case 6:return t===null&&$f(e),null;case 13:return p0(t,e,n);case 4:return Lf(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=$l(e,null,r,n):Bt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:wn(r,i),u0(t,e,r,i,n);case 7:return Bt(t,e,e.pendingProps,n),e.child;case 8:return Bt(t,e,e.pendingProps.children,n),e.child;case 12:return Bt(t,e,e.pendingProps.children,n),e.child;case 10:e:{r=e.type._context,i=e.pendingProps,o=e.memoizedProps,s=i.value;var a=e.type._context;if(Se(Nl,a._currentValue),a._currentValue=s,o!==null)if(a=o.value,s=rn(a,s)?0:(typeof r._calculateChangedBits=="function"?r._calculateChangedBits(a,s):1073741823)|0,s===0){if(o.children===i.children&&!Ut.current){e=Yn(t,e,n);break e}}else for(a=e.child,a!==null&&(a.return=e);a!==null;){var u=a.dependencies;if(u!==null){o=a.child;for(var l=u.firstContext;l!==null;){if(l.context===r&&(l.observedBits&s)!=0){a.tag===1&&(l=Ar(-1,n&-n),l.tag=2,Rr(a,l)),a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),Uw(a.return,n),u.lanes|=n;break}l=l.next}}else o=a.tag===10&&a.type===e.type?null:a.child;if(o!==null)o.return=a;else for(o=a;o!==null;){if(o===e){o=null;break}if(a=o.sibling,a!==null){a.return=o.return,o=a;break}o=o.return}a=o}Bt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,s=e.pendingProps,r=s.children,Cs(e,n),i=sn(i,s.unstable_observedBits),r=r(i),e.flags|=1,Bt(t,e,r,n),e.child;case 14:return i=e.type,s=wn(i,e.pendingProps),s=wn(i.type,s),l0(t,e,i,s,r,n);case 15:return c0(t,e,e.type,e.pendingProps,r,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:wn(r,i),t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2),e.tag=1,Ft(r)?(t=!0,bl(e)):t=!1,Cs(e,n),qw(e,r,i),Of(e,r,i,n),Kf(null,e,r,!0,t,n);case 19:return w0(t,e,n);case 23:return Wf(t,e,n);case 24:return Wf(t,e,n)}throw Error(R(156,e.tag))};function Nb(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.flags=0,this.lastEffect=this.firstEffect=this.nextEffect=null,this.childLanes=this.lanes=0,this.alternate=null}function un(t,e,n,r){return new Nb(t,e,n,r)}function pp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Pb(t){if(typeof t=="function")return pp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===tl)return 11;if(t===rl)return 14}return 2}function Mr(t,e){var n=t.alternate;return n===null?(n=un(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.nextEffect=null,n.firstEffect=null,n.lastEffect=null),n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function ec(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")pp(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case yr:return Os(n.children,i,s,e);case uv:o=8,i|=16;break;case Td:o=8,i|=1;break;case zo:return t=un(12,n,e,i|8),t.elementType=zo,t.type=zo,t.lanes=s,t;case jo:return t=un(13,n,e,i),t.type=jo,t.elementType=jo,t.lanes=s,t;case nl:return t=un(19,n,e,i),t.elementType=nl,t.lanes=s,t;case Rd:return mp(n,i,s,e);case Nd:return t=un(24,n,e,i),t.elementType=Nd,t.lanes=s,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Sd:o=10;break e;case kd:o=9;break e;case tl:o=11;break e;case rl:o=14;break e;case Cd:o=16,r=null;break e;case bd:o=22;break e}throw Error(R(130,t==null?t:typeof t,""))}return e=un(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Os(t,e,n,r){return t=un(7,t,r,e),t.lanes=n,t}function mp(t,e,n,r){return t=un(23,t,r,e),t.elementType=Rd,t.lanes=n,t}function gp(t,e,n){return t=un(6,t,null,e),t.lanes=n,t}function yp(t,e,n){return e=un(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function xb(t,e,n){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.pendingContext=this.context=null,this.hydrate=n,this.callbackNode=null,this.callbackPriority=0,this.eventTimes=nf(0),this.expirationTimes=nf(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=nf(0),this.mutableSourceEagerHydrationData=null}function Db(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:di,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function tc(t,e,n,r){var i=e.current,s=Gt(),o=xr(i);e:if(n){n=n._reactInternals;t:{if(pi(n)!==n||n.tag!==1)throw Error(R(170));var a=n;do{switch(a.tag){case 3:a=a.stateNode.context;break t;case 1:if(Ft(a.type)){a=a.stateNode.__reactInternalMemoizedMergedChildContext;break t}}a=a.return}while(a!==null);throw Error(R(171))}if(n.tag===1){var u=n.type;if(Ft(u)){n=Aw(n,u,a);break e}}n=a}else n=Cr;return e.context===null?e.context=n:e.pendingContext=n,e=Ar(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),Rr(i,e),Dr(i,o,s),o}function vp(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function j0(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function wp(t,e){j0(t,e),(t=t.alternate)&&j0(t,e)}function Ob(){return null}function _p(t,e,n){var r=n!=null&&n.hydrationOptions!=null&&n.hydrationOptions.mutableSources||null;if(n=new xb(t,e,n!=null&&n.hydrate===!0),e=un(3,null,null,e===2?7:e===1?3:0),n.current=e,e.stateNode=n,Df(e),t[_s]=n.current,yw(t.nodeType===8?t.parentNode:t),r)for(t=0;t<r.length;t++){e=r[t];var i=e._getVersion;i=i(e._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[e,i]:n.mutableSourceEagerHydrationData.push(e,i)}this._internalRoot=n}_p.prototype.render=function(t){tc(t,this._internalRoot,null,null)};_p.prototype.unmount=function(){var t=this._internalRoot,e=t.containerInfo;tc(null,t,null,function(){e[_s]=null})};function xa(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Lb(t,e){if(e||(e=t?t.nodeType===9?t.documentElement:t.firstChild:null,e=!(!e||e.nodeType!==1||!e.hasAttribute("data-reactroot"))),!e)for(var n;n=t.lastChild;)t.removeChild(n);return new _p(t,0,e?{hydrate:!0}:void 0)}function nc(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s._internalRoot;if(typeof i=="function"){var a=i;i=function(){var l=vp(o);a.call(l)}}tc(e,o,t,i)}else{if(s=n._reactRootContainer=Lb(n,r),o=s._internalRoot,typeof i=="function"){var u=i;i=function(){var l=vp(o);u.call(l)}}L0(function(){tc(e,o,t,i)})}return vp(o)}Pv=function(t){if(t.tag===13){var e=Gt();Dr(t,4,e),wp(t,4)}};Yd=function(t){if(t.tag===13){var e=Gt();Dr(t,67108864,e),wp(t,67108864)}};xv=function(t){if(t.tag===13){var e=Gt(),n=xr(t);Dr(t,n,e),wp(t,n)}};Dv=function(t,e){return e()};jd=function(t,e,n){switch(e){case"input":if(Od(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=kl(r);if(!i)throw Error(R(90));hv(r),Od(r,i)}}}break;case"textarea":gv(t,n);break;case"select":e=n.value,e!=null&&ls(t,!!n.multiple,e,!1)}};qd=O0;kv=function(t,e,n,r,i){var s=W;W|=4;try{return vi(98,t.bind(null,e,n,r,i))}finally{W=s,W===0&&(Ps(),An())}};Hd=function(){(W&49)==0&&(Ib(),Or())};Cv=function(t,e){var n=W;W|=2;try{return t(e)}finally{W=n,W===0&&(Ps(),An())}};function q0(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!xa(e))throw Error(R(200));return Db(t,e,null,n)}var Mb={Events:[da,Is,kl,Tv,Sv,Or,{current:!1}]},Da={findFiberByHostInstance:mi,bundleType:0,version:"17.0.2",rendererPackageName:"react-dom"},$b={bundleType:Da.bundleType,version:Da.version,rendererPackageName:Da.rendererPackageName,rendererConfig:Da.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:hi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Rv(t),t===null?null:t.stateNode},findFiberByHostInstance:Da.findFiberByHostInstance||Ob,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!="undefined"){var rc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!rc.isDisabled&&rc.supportsFiber)try{kf=rc.inject($b),yi=rc}catch{}}nn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Mb;nn.createPortal=q0;nn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(R(188)):Error(R(268,Object.keys(t)));return t=Rv(e),t=t===null?null:t.stateNode,t};nn.flushSync=function(t,e){var n=W;if((n&48)!=0)return t(e);W|=1;try{if(t)return vi(99,t.bind(null,e))}finally{W=n,An()}};nn.hydrate=function(t,e,n){if(!xa(e))throw Error(R(200));return nc(null,t,e,!0,n)};nn.render=function(t,e,n){if(!xa(e))throw Error(R(200));return nc(null,t,e,!1,n)};nn.unmountComponentAtNode=function(t){if(!xa(t))throw Error(R(40));return t._reactRootContainer?(L0(function(){nc(null,null,t,!1,function(){t._reactRootContainer=null,t[_s]=null})}),!0):!1};nn.unstable_batchedUpdates=O0;nn.unstable_createPortal=function(t,e){return q0(t,e,2<arguments.length&&arguments[2]!==void 0?arguments[2]:null)};nn.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!xa(n))throw Error(R(200));if(t==null||t._reactInternals===void 0)throw Error(R(38));return nc(t,e,n,!1,r)};nn.version="17.0.2";function H0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(H0)}catch(t){console.error(t)}}H0(),tv.exports=nn;var cF=tv.exports,ic={exports:{}},le={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var je=typeof Symbol=="function"&&Symbol.for,Ip=je?Symbol.for("react.element"):60103,Ep=je?Symbol.for("react.portal"):60106,sc=je?Symbol.for("react.fragment"):60107,oc=je?Symbol.for("react.strict_mode"):60108,ac=je?Symbol.for("react.profiler"):60114,uc=je?Symbol.for("react.provider"):60109,lc=je?Symbol.for("react.context"):60110,Tp=je?Symbol.for("react.async_mode"):60111,cc=je?Symbol.for("react.concurrent_mode"):60111,hc=je?Symbol.for("react.forward_ref"):60112,dc=je?Symbol.for("react.suspense"):60113,Ub=je?Symbol.for("react.suspense_list"):60120,fc=je?Symbol.for("react.memo"):60115,pc=je?Symbol.for("react.lazy"):60116,Fb=je?Symbol.for("react.block"):60121,Vb=je?Symbol.for("react.fundamental"):60117,Bb=je?Symbol.for("react.responder"):60118,zb=je?Symbol.for("react.scope"):60119;function Kt(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case Ip:switch(t=t.type,t){case Tp:case cc:case sc:case ac:case oc:case dc:return t;default:switch(t=t&&t.$$typeof,t){case lc:case hc:case pc:case fc:case uc:return t;default:return e}}case Ep:return e}}}function W0(t){return Kt(t)===cc}le.AsyncMode=Tp;le.ConcurrentMode=cc;le.ContextConsumer=lc;le.ContextProvider=uc;le.Element=Ip;le.ForwardRef=hc;le.Fragment=sc;le.Lazy=pc;le.Memo=fc;le.Portal=Ep;le.Profiler=ac;le.StrictMode=oc;le.Suspense=dc;le.isAsyncMode=function(t){return W0(t)||Kt(t)===Tp};le.isConcurrentMode=W0;le.isContextConsumer=function(t){return Kt(t)===lc};le.isContextProvider=function(t){return Kt(t)===uc};le.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ip};le.isForwardRef=function(t){return Kt(t)===hc};le.isFragment=function(t){return Kt(t)===sc};le.isLazy=function(t){return Kt(t)===pc};le.isMemo=function(t){return Kt(t)===fc};le.isPortal=function(t){return Kt(t)===Ep};le.isProfiler=function(t){return Kt(t)===ac};le.isStrictMode=function(t){return Kt(t)===oc};le.isSuspense=function(t){return Kt(t)===dc};le.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===sc||t===cc||t===ac||t===oc||t===dc||t===Ub||typeof t=="object"&&t!==null&&(t.$$typeof===pc||t.$$typeof===fc||t.$$typeof===uc||t.$$typeof===lc||t.$$typeof===hc||t.$$typeof===Vb||t.$$typeof===Bb||t.$$typeof===zb||t.$$typeof===Fb)};le.typeOf=Kt;ic.exports=le;function jb(t){function e(S,k,D,j,I){for(var X=0,x=0,ae=0,se=0,ue,Y,Ze=0,$t=0,ne,mt=ne=ue=0,oe=0,et=0,$o=0,tt=0,Xu=D.length,Uo=Xu-1,gn,K="",Re="",dd="",fd="",gr;oe<Xu;){if(Y=D.charCodeAt(oe),oe===Uo&&x+se+ae+X!==0&&(x!==0&&(Y=x===47?10:47),se=ae=X=0,Xu++,Uo++),x+se+ae+X===0){if(oe===Uo&&(0<et&&(K=K.replace(d,"")),0<K.trim().length)){switch(Y){case 32:case 9:case 59:case 13:case 10:break;default:K+=D.charAt(oe)}Y=59}switch(Y){case 123:for(K=K.trim(),ue=K.charCodeAt(0),ne=1,tt=++oe;oe<Xu;){switch(Y=D.charCodeAt(oe)){case 123:ne++;break;case 125:ne--;break;case 47:switch(Y=D.charCodeAt(oe+1)){case 42:case 47:e:{for(mt=oe+1;mt<Uo;++mt)switch(D.charCodeAt(mt)){case 47:if(Y===42&&D.charCodeAt(mt-1)===42&&oe+2!==mt){oe=mt+1;break e}break;case 10:if(Y===47){oe=mt+1;break e}}oe=mt}}break;case 91:Y++;case 40:Y++;case 34:case 39:for(;oe++<Uo&&D.charCodeAt(oe)!==Y;);}if(ne===0)break;oe++}switch(ne=D.substring(tt,oe),ue===0&&(ue=(K=K.replace(h,"").trim()).charCodeAt(0)),ue){case 64:switch(0<et&&(K=K.replace(d,"")),Y=K.charCodeAt(1),Y){case 100:case 109:case 115:case 45:et=k;break;default:et=mn}if(ne=e(k,et,ne,Y,I+1),tt=ne.length,0<pt&&(et=n(mn,K,$o),gr=a(3,ne,et,k,de,fe,tt,Y,I,j),K=et.join(""),gr!==void 0&&(tt=(ne=gr.trim()).length)===0&&(Y=0,ne="")),0<tt)switch(Y){case 115:K=K.replace(b,o);case 100:case 109:case 45:ne=K+"{"+ne+"}";break;case 107:K=K.replace(m,"$1 $2"),ne=K+"{"+ne+"}",ne=Te===1||Te===2&&s("@"+ne,3)?"@-webkit-"+ne+"@"+ne:"@"+ne;break;default:ne=K+ne,j===112&&(ne=(Re+=ne,""))}else ne="";break;default:ne=e(k,n(k,K,$o),ne,j,I+1)}dd+=ne,ne=$o=et=mt=ue=0,K="",Y=D.charCodeAt(++oe);break;case 125:case 59:if(K=(0<et?K.replace(d,""):K).trim(),1<(tt=K.length))switch(mt===0&&(ue=K.charCodeAt(0),ue===45||96<ue&&123>ue)&&(tt=(K=K.replace(" ",":")).length),0<pt&&(gr=a(1,K,k,S,de,fe,Re.length,j,I,j))!==void 0&&(tt=(K=gr.trim()).length)===0&&(K="\0\0"),ue=K.charCodeAt(0),Y=K.charCodeAt(1),ue){case 0:break;case 64:if(Y===105||Y===99){fd+=K+D.charAt(oe);break}default:K.charCodeAt(tt-1)!==58&&(Re+=i(K,ue,Y,K.charCodeAt(2)))}$o=et=mt=ue=0,K="",Y=D.charCodeAt(++oe)}}switch(Y){case 13:case 10:x===47?x=0:1+ue===0&&j!==107&&0<K.length&&(et=1,K+="\0"),0<pt*mr&&a(0,K,k,S,de,fe,Re.length,j,I,j),fe=1,de++;break;case 59:case 125:if(x+se+ae+X===0){fe++;break}default:switch(fe++,gn=D.charAt(oe),Y){case 9:case 32:if(se+X+x===0)switch(Ze){case 44:case 58:case 9:case 32:gn="";break;default:Y!==32&&(gn=" ")}break;case 0:gn="\\0";break;case 12:gn="\\f";break;case 11:gn="\\v";break;case 38:se+x+X===0&&(et=$o=1,gn="\f"+gn);break;case 108:if(se+x+X+kt===0&&0<mt)switch(oe-mt){case 2:Ze===112&&D.charCodeAt(oe-3)===58&&(kt=Ze);case 8:$t===111&&(kt=$t)}break;case 58:se+x+X===0&&(mt=oe);break;case 44:x+ae+se+X===0&&(et=1,gn+="\r");break;case 34:case 39:x===0&&(se=se===Y?0:se===0?Y:se);break;case 91:se+x+ae===0&&X++;break;case 93:se+x+ae===0&&X--;break;case 41:se+x+X===0&&ae--;break;case 40:if(se+x+X===0){if(ue===0)switch(2*Ze+3*$t){case 533:break;default:ue=1}ae++}break;case 64:x+ae+se+X+mt+ne===0&&(ne=1);break;case 42:case 47:if(!(0<se+X+ae))switch(x){case 0:switch(2*Y+3*D.charCodeAt(oe+1)){case 235:x=47;break;case 220:tt=oe,x=42}break;case 42:Y===47&&Ze===42&&tt+2!==oe&&(D.charCodeAt(tt+2)===33&&(Re+=D.substring(tt,oe+1)),gn="",x=0)}}x===0&&(K+=gn)}$t=Ze,Ze=Y,oe++}if(tt=Re.length,0<tt){if(et=k,0<pt&&(gr=a(2,Re,et,S,de,fe,tt,j,I,j),gr!==void 0&&(Re=gr).length===0))return fd+Re+dd;if(Re=et.join(",")+"{"+Re+"}",Te*kt!=0){switch(Te!==2||s(Re,2)||(kt=0),kt){case 111:Re=Re.replace(v,":-moz-$1")+Re;break;case 112:Re=Re.replace(w,"::-webkit-input-$1")+Re.replace(w,"::-moz-$1")+Re.replace(w,":-ms-input-$1")+Re}kt=0}}return fd+Re+dd}function n(S,k,D){var j=k.trim().split(f);k=j;var I=j.length,X=S.length;switch(X){case 0:case 1:var x=0;for(S=X===0?"":S[0]+" ";x<I;++x)k[x]=r(S,k[x],D).trim();break;default:var ae=x=0;for(k=[];x<I;++x)for(var se=0;se<X;++se)k[ae++]=r(S[se]+" ",j[x],D).trim()}return k}function r(S,k,D){var j=k.charCodeAt(0);switch(33>j&&(j=(k=k.trim()).charCodeAt(0)),j){case 38:return k.replace(p,"$1"+S.trim());case 58:return S.trim()+k.replace(p,"$1"+S.trim());default:if(0<1*D&&0<k.indexOf("\f"))return k.replace(p,(S.charCodeAt(0)===58?"":"$1")+S.trim())}return S+k}function i(S,k,D,j){var I=S+";",X=2*k+3*D+4*j;if(X===944){S=I.indexOf(":",9)+1;var x=I.substring(S,I.length-1).trim();return x=I.substring(0,S).trim()+x+";",Te===1||Te===2&&s(x,1)?"-webkit-"+x+x:x}if(Te===0||Te===2&&!s(I,1))return I;switch(X){case 1015:return I.charCodeAt(10)===97?"-webkit-"+I+I:I;case 951:return I.charCodeAt(3)===116?"-webkit-"+I+I:I;case 963:return I.charCodeAt(5)===110?"-webkit-"+I+I:I;case 1009:if(I.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+I+I;case 978:return"-webkit-"+I+"-moz-"+I+I;case 1019:case 983:return"-webkit-"+I+"-moz-"+I+"-ms-"+I+I;case 883:if(I.charCodeAt(8)===45)return"-webkit-"+I+I;if(0<I.indexOf("image-set(",11))return I.replace(Cn,"$1-webkit-$2")+I;break;case 932:if(I.charCodeAt(4)===45)switch(I.charCodeAt(5)){case 103:return"-webkit-box-"+I.replace("-grow","")+"-webkit-"+I+"-ms-"+I.replace("grow","positive")+I;case 115:return"-webkit-"+I+"-ms-"+I.replace("shrink","negative")+I;case 98:return"-webkit-"+I+"-ms-"+I.replace("basis","preferred-size")+I}return"-webkit-"+I+"-ms-"+I+I;case 964:return"-webkit-"+I+"-ms-flex-"+I+I;case 1023:if(I.charCodeAt(8)!==99)break;return x=I.substring(I.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+x+"-webkit-"+I+"-ms-flex-pack"+x+I;case 1005:return y.test(I)?I.replace(g,":-webkit-")+I.replace(g,":-moz-")+I:I;case 1e3:switch(x=I.substring(13).trim(),k=x.indexOf("-")+1,x.charCodeAt(0)+x.charCodeAt(k)){case 226:x=I.replace(P,"tb");break;case 232:x=I.replace(P,"tb-rl");break;case 220:x=I.replace(P,"lr");break;default:return I}return"-webkit-"+I+"-ms-"+x+I;case 1017:if(I.indexOf("sticky",9)===-1)break;case 975:switch(k=(I=S).length-10,x=(I.charCodeAt(k)===33?I.substring(0,k):I).substring(S.indexOf(":",7)+1).trim(),X=x.charCodeAt(0)+(x.charCodeAt(7)|0)){case 203:if(111>x.charCodeAt(8))break;case 115:I=I.replace(x,"-webkit-"+x)+";"+I;break;case 207:case 102:I=I.replace(x,"-webkit-"+(102<X?"inline-":"")+"box")+";"+I.replace(x,"-webkit-"+x)+";"+I.replace(x,"-ms-"+x+"box")+";"+I}return I+";";case 938:if(I.charCodeAt(5)===45)switch(I.charCodeAt(6)){case 105:return x=I.replace("-items",""),"-webkit-"+I+"-webkit-box-"+x+"-ms-flex-"+x+I;case 115:return"-webkit-"+I+"-ms-flex-item-"+I.replace(F,"")+I;default:return"-webkit-"+I+"-ms-flex-line-pack"+I.replace("align-content","").replace(F,"")+I}break;case 973:case 989:if(I.charCodeAt(3)!==45||I.charCodeAt(4)===122)break;case 931:case 953:if(he.test(S)===!0)return(x=S.substring(S.indexOf(":")+1)).charCodeAt(0)===115?i(S.replace("stretch","fill-available"),k,D,j).replace(":fill-available",":stretch"):I.replace(x,"-webkit-"+x)+I.replace(x,"-moz-"+x.replace("fill-",""))+I;break;case 962:if(I="-webkit-"+I+(I.charCodeAt(5)===102?"-ms-"+I:"")+I,D+j===211&&I.charCodeAt(13)===105&&0<I.indexOf("transform",10))return I.substring(0,I.indexOf(";",27)+1).replace(_,"$1-webkit-$2")+I}return I}function s(S,k){var D=S.indexOf(k===1?":":"{"),j=S.substring(0,k!==3?D:10);return D=S.substring(D+1,S.length-1),Hn(k!==2?j:j.replace(M,"$1"),D,k)}function o(S,k){var D=i(k,k.charCodeAt(0),k.charCodeAt(1),k.charCodeAt(2));return D!==k+";"?D.replace(V," or ($1)").substring(4):"("+k+")"}function a(S,k,D,j,I,X,x,ae,se,ue){for(var Y=0,Ze=k,$t;Y<pt;++Y)switch($t=Ct[Y].call(c,S,Ze,D,j,I,X,x,ae,se,ue)){case void 0:case!1:case!0:case null:break;default:Ze=$t}if(Ze!==k)return Ze}function u(S){switch(S){case void 0:case null:pt=Ct.length=0;break;default:if(typeof S=="function")Ct[pt++]=S;else if(typeof S=="object")for(var k=0,D=S.length;k<D;++k)u(S[k]);else mr=!!S|0}return u}function l(S){return S=S.prefix,S!==void 0&&(Hn=null,S?typeof S!="function"?Te=1:(Te=2,Hn=S):Te=0),l}function c(S,k){var D=S;if(33>D.charCodeAt(0)&&(D=D.trim()),O=D,D=[O],0<pt){var j=a(-1,k,D,D,de,fe,0,0,0,0);j!==void 0&&typeof j=="string"&&(k=j)}var I=e(mn,D,k,0,0);return 0<pt&&(j=a(-2,I,D,D,de,fe,I.length,0,0,0),j!==void 0&&(I=j)),O="",kt=0,fe=de=1,I}var h=/^\0+/g,d=/[\0\r\f]/g,g=/: */g,y=/zoo|gra/,_=/([,: ])(transform)/g,f=/,\r+?/g,p=/([\t\r\n ])*\f?&/g,m=/@(k\w+)\s*(\S*)\s*/,w=/::(place)/g,v=/:(read-only)/g,P=/[svh]\w+-[tblr]{2}/,b=/\(\s*(.*)\s*\)/g,V=/([\s\S]*?);/g,F=/-self|flex-/g,M=/[^]*?(:[rp][el]a[\w-]+)[^]*/,he=/stretch|:\s*\w+\-(?:conte|avail)/,Cn=/([^-])(image-set\()/,fe=1,de=1,kt=0,Te=1,mn=[],Ct=[],pt=0,Hn=null,mr=0,O="";return c.use=u,c.set=l,t!==void 0&&l(t),c}var qb={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function Hb(t){var e={};return function(n){return e[n]===void 0&&(e[n]=t(n)),e[n]}}var Wb=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,G0=Hb(function(t){return Wb.test(t)||t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)<91}),Sp=ic.exports,Gb={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Kb={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Qb={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},K0={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},kp={};kp[Sp.ForwardRef]=Qb;kp[Sp.Memo]=K0;function Q0(t){return Sp.isMemo(t)?K0:kp[t.$$typeof]||Gb}var Yb=Object.defineProperty,Xb=Object.getOwnPropertyNames,Y0=Object.getOwnPropertySymbols,Jb=Object.getOwnPropertyDescriptor,Zb=Object.getPrototypeOf,X0=Object.prototype;function J0(t,e,n){if(typeof e!="string"){if(X0){var r=Zb(e);r&&r!==X0&&J0(t,r,n)}var i=Xb(e);Y0&&(i=i.concat(Y0(e)));for(var s=Q0(t),o=Q0(e),a=0;a<i.length;++a){var u=i[a];if(!Kb[u]&&!(n&&n[u])&&!(o&&o[u])&&!(s&&s[u])){var l=Jb(e,u);try{Yb(t,u,l)}catch{}}}}return t}var eA=J0;function Zn(){return(Zn=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}var Z0=function(t,e){for(var n=[t[0]],r=0,i=e.length;r<i;r+=1)n.push(e[r],t[r+1]);return n},Cp=function(t){return t!==null&&typeof t=="object"&&(t.toString?t.toString():Object.prototype.toString.call(t))==="[object Object]"&&!ic.exports.typeOf(t)},mc=Object.freeze([]),$r=Object.freeze({});function Oa(t){return typeof t=="function"}function e_(t){return t.displayName||t.name||"Component"}function bp(t){return t&&typeof t.styledComponentId=="string"}var Ls=typeof process!="undefined"&&{}.SC_ATTR||"data-styled",Ap=typeof window!="undefined"&&"HTMLElement"in window,tA=Boolean(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process!="undefined"&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process!="undefined"&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""?{}.SC_DISABLE_SPEEDY:!1);function La(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+t+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var nA=function(){function t(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var e=t.prototype;return e.indexOfGroup=function(n){for(var r=0,i=0;i<n;i++)r+=this.groupSizes[i];return r},e.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var i=this.groupSizes,s=i.length,o=s;n>=o;)(o<<=1)<0&&La(16,""+n);this.groupSizes=new Uint32Array(o),this.groupSizes.set(i),this.length=o;for(var a=s;a<o;a++)this.groupSizes[a]=0}for(var u=this.indexOfGroup(n+1),l=0,c=r.length;l<c;l++)this.tag.insertRule(u,r[l])&&(this.groupSizes[n]++,u++)},e.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],i=this.indexOfGroup(n),s=i+r;this.groupSizes[n]=0;for(var o=i;o<s;o++)this.tag.deleteRule(i)}},e.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var i=this.groupSizes[n],s=this.indexOfGroup(n),o=s+i,a=s;a<o;a++)r+=this.tag.getRule(a)+`/*!sc*/
`;return r},t}(),gc=new Map,yc=new Map,Ma=1,vc=function(t){if(gc.has(t))return gc.get(t);for(;yc.has(Ma);)Ma++;var e=Ma++;return gc.set(t,e),yc.set(e,t),e},rA=function(t){return yc.get(t)},iA=function(t,e){e>=Ma&&(Ma=e+1),gc.set(t,e),yc.set(e,t)},sA="style["+Ls+'][data-styled-version="5.3.1"]',oA=new RegExp("^"+Ls+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),aA=function(t,e,n){for(var r,i=n.split(","),s=0,o=i.length;s<o;s++)(r=i[s])&&t.registerName(e,r)},uA=function(t,e){for(var n=(e.innerHTML||"").split(`/*!sc*/
`),r=[],i=0,s=n.length;i<s;i++){var o=n[i].trim();if(o){var a=o.match(oA);if(a){var u=0|parseInt(a[1],10),l=a[2];u!==0&&(iA(l,u),aA(t,l,a[3]),t.getTag().insertRules(u,r)),r.length=0}else r.push(o)}}},lA=function(){return typeof window!="undefined"&&window.__webpack_nonce__!==void 0?window.__webpack_nonce__:null},t_=function(t){var e=document.head,n=t||e,r=document.createElement("style"),i=function(a){for(var u=a.childNodes,l=u.length;l>=0;l--){var c=u[l];if(c&&c.nodeType===1&&c.hasAttribute(Ls))return c}}(n),s=i!==void 0?i.nextSibling:null;r.setAttribute(Ls,"active"),r.setAttribute("data-styled-version","5.3.1");var o=lA();return o&&r.setAttribute("nonce",o),n.insertBefore(r,s),r},cA=function(){function t(n){var r=this.element=t_(n);r.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var s=document.styleSheets,o=0,a=s.length;o<a;o++){var u=s[o];if(u.ownerNode===i)return u}La(17)}(r),this.length=0}var e=t.prototype;return e.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},e.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},e.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},t}(),hA=function(){function t(n){var r=this.element=t_(n);this.nodes=r.childNodes,this.length=0}var e=t.prototype;return e.insertRule=function(n,r){if(n<=this.length&&n>=0){var i=document.createTextNode(r),s=this.nodes[n];return this.element.insertBefore(i,s||null),this.length++,!0}return!1},e.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},e.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},t}(),dA=function(){function t(n){this.rules=[],this.length=0}var e=t.prototype;return e.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},e.deleteRule=function(n){this.rules.splice(n,1),this.length--},e.getRule=function(n){return n<this.length?this.rules[n]:""},t}(),n_=Ap,fA={isServer:!Ap,useCSSOMInjection:!tA},r_=function(){function t(n,r,i){n===void 0&&(n=$r),r===void 0&&(r={}),this.options=Zn({},fA,{},n),this.gs=r,this.names=new Map(i),this.server=!!n.isServer,!this.server&&Ap&&n_&&(n_=!1,function(s){for(var o=document.querySelectorAll(sA),a=0,u=o.length;a<u;a++){var l=o[a];l&&l.getAttribute(Ls)!=="active"&&(uA(s,l),l.parentNode&&l.parentNode.removeChild(l))}}(this))}t.registerId=function(n){return vc(n)};var e=t.prototype;return e.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new t(Zn({},this.options,{},n),this.gs,r&&this.names||void 0)},e.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},e.getTag=function(){return this.tag||(this.tag=(i=(r=this.options).isServer,s=r.useCSSOMInjection,o=r.target,n=i?new dA(o):s?new cA(o):new hA(o),new nA(n)));var n,r,i,s,o},e.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},e.registerName=function(n,r){if(vc(n),this.names.has(n))this.names.get(n).add(r);else{var i=new Set;i.add(r),this.names.set(n,i)}},e.insertRules=function(n,r,i){this.registerName(n,r),this.getTag().insertRules(vc(n),i)},e.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},e.clearRules=function(n){this.getTag().clearGroup(vc(n)),this.clearNames(n)},e.clearTag=function(){this.tag=void 0},e.toString=function(){return function(n){for(var r=n.getTag(),i=r.length,s="",o=0;o<i;o++){var a=rA(o);if(a!==void 0){var u=n.names.get(a),l=r.getGroup(o);if(u&&l&&u.size){var c=Ls+".g"+o+'[id="'+a+'"]',h="";u!==void 0&&u.forEach(function(d){d.length>0&&(h+=d+",")}),s+=""+l+c+'{content:"'+h+`"}/*!sc*/
`}}}return s}(this)},t}(),pA=/(a)(d)/gi,i_=function(t){return String.fromCharCode(t+(t>25?39:97))};function Rp(t){var e,n="";for(e=Math.abs(t);e>52;e=e/52|0)n=i_(e%52)+n;return(i_(e%52)+n).replace(pA,"$1-$2")}var Ms=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},s_=function(t){return Ms(5381,t)};function mA(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(Oa(n)&&!bp(n))return!1}return!0}var gA=s_("5.3.1"),yA=function(){function t(e,n,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&mA(e),this.componentId=n,this.baseHash=Ms(gA,n),this.baseStyle=r,r_.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,r){var i=this.componentId,s=[];if(this.baseStyle&&s.push(this.baseStyle.generateAndInjectStyles(e,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(i,this.staticRulesId))s.push(this.staticRulesId);else{var o=$s(this.rules,e,n,r).join(""),a=Rp(Ms(this.baseHash,o)>>>0);if(!n.hasNameForId(i,a)){var u=r(o,"."+a,void 0,i);n.insertRules(i,a,u)}s.push(a),this.staticRulesId=a}else{for(var l=this.rules.length,c=Ms(this.baseHash,r.hash),h="",d=0;d<l;d++){var g=this.rules[d];if(typeof g=="string")h+=g;else if(g){var y=$s(g,e,n,r),_=Array.isArray(y)?y.join(""):y;c=Ms(c,_+d),h+=_}}if(h){var f=Rp(c>>>0);if(!n.hasNameForId(i,f)){var p=r(h,"."+f,void 0,i);n.insertRules(i,f,p)}s.push(f)}}return s.join(" ")},t}(),vA=/^\s*\/\/.*$/gm,wA=[":","[",".","#"];function _A(t){var e,n,r,i,s=t===void 0?$r:t,o=s.options,a=o===void 0?$r:o,u=s.plugins,l=u===void 0?mc:u,c=new jb(a),h=[],d=function(_){function f(p){if(p)try{_(p+"}")}catch{}}return function(p,m,w,v,P,b,V,F,M,he){switch(p){case 1:if(M===0&&m.charCodeAt(0)===64)return _(m+";"),"";break;case 2:if(F===0)return m+"/*|*/";break;case 3:switch(F){case 102:case 112:return _(w[0]+m),"";default:return m+(he===0?"/*|*/":"")}case-2:m.split("/*|*/}").forEach(f)}}}(function(_){h.push(_)}),g=function(_,f,p){return f===0&&wA.indexOf(p[n.length])!==-1||p.match(i)?_:"."+e};function y(_,f,p,m){m===void 0&&(m="&");var w=_.replace(vA,""),v=f&&p?p+" "+f+" { "+w+" }":w;return e=m,n=f,r=new RegExp("\\"+n+"\\b","g"),i=new RegExp("(\\"+n+"\\b){2,}"),c(p||!f?"":f,v)}return c.use([].concat(l,[function(_,f,p){_===2&&p.length&&p[0].lastIndexOf(n)>0&&(p[0]=p[0].replace(r,g))},d,function(_){if(_===-2){var f=h;return h=[],f}}])),y.hash=l.length?l.reduce(function(_,f){return f.name||La(15),Ms(_,f.name)},5381).toString():"",y}var o_=vn.createContext();o_.Consumer;var a_=vn.createContext(),IA=(a_.Consumer,new r_),Np=_A();function EA(){return li.exports.useContext(o_)||IA}function TA(){return li.exports.useContext(a_)||Np}var SA=function(){function t(e,n){var r=this;this.inject=function(i,s){s===void 0&&(s=Np);var o=r.name+s.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,s(r.rules,o,"@keyframes"))},this.toString=function(){return La(12,String(r.name))},this.name=e,this.id="sc-keyframes-"+e,this.rules=n}return t.prototype.getName=function(e){return e===void 0&&(e=Np),this.name+e.hash},t}(),kA=/([A-Z])/,CA=/([A-Z])/g,bA=/^ms-/,AA=function(t){return"-"+t.toLowerCase()};function u_(t){return kA.test(t)?t.replace(CA,AA).replace(bA,"-ms-"):t}var l_=function(t){return t==null||t===!1||t===""};function $s(t,e,n,r){if(Array.isArray(t)){for(var i,s=[],o=0,a=t.length;o<a;o+=1)(i=$s(t[o],e,n,r))!==""&&(Array.isArray(i)?s.push.apply(s,i):s.push(i));return s}if(l_(t))return"";if(bp(t))return"."+t.styledComponentId;if(Oa(t)){if(typeof(l=t)!="function"||l.prototype&&l.prototype.isReactComponent||!e)return t;var u=t(e);return $s(u,e,n,r)}var l;return t instanceof SA?n?(t.inject(n,r),t.getName(r)):t:Cp(t)?function c(h,d){var g,y,_=[];for(var f in h)h.hasOwnProperty(f)&&!l_(h[f])&&(Array.isArray(h[f])&&h[f].isCss||Oa(h[f])?_.push(u_(f)+":",h[f],";"):Cp(h[f])?_.push.apply(_,c(h[f],f)):_.push(u_(f)+": "+(g=f,(y=h[f])==null||typeof y=="boolean"||y===""?"":typeof y!="number"||y===0||g in qb?String(y).trim():y+"px")+";"));return d?[d+" {"].concat(_,["}"]):_}(t):t.toString()}var c_=function(t){return Array.isArray(t)&&(t.isCss=!0),t};function RA(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];return Oa(t)||Cp(t)?c_($s(Z0(mc,[t].concat(n)))):n.length===0&&t.length===1&&typeof t[0]=="string"?t:c_($s(Z0(t,n)))}var NA=function(t,e,n){return n===void 0&&(n=$r),t.theme!==n.theme&&t.theme||e||n.theme},PA=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,xA=/(^-|-$)/g;function Pp(t){return t.replace(PA,"-").replace(xA,"")}var DA=function(t){return Rp(s_(t)>>>0)};function wc(t){return typeof t=="string"&&!0}var xp=function(t){return typeof t=="function"||typeof t=="object"&&t!==null&&!Array.isArray(t)},OA=function(t){return t!=="__proto__"&&t!=="constructor"&&t!=="prototype"};function LA(t,e,n){var r=t[n];xp(e)&&xp(r)?h_(r,e):t[n]=e}function h_(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];for(var i=0,s=n;i<s.length;i++){var o=s[i];if(xp(o))for(var a in o)OA(a)&&LA(t,o[a],a)}return t}var d_=vn.createContext();d_.Consumer;var Dp={};function f_(t,e,n){var r=bp(t),i=!wc(t),s=e.attrs,o=s===void 0?mc:s,a=e.componentId,u=a===void 0?function(m,w){var v=typeof m!="string"?"sc":Pp(m);Dp[v]=(Dp[v]||0)+1;var P=v+"-"+DA("5.3.1"+v+Dp[v]);return w?w+"-"+P:P}(e.displayName,e.parentComponentId):a,l=e.displayName,c=l===void 0?function(m){return wc(m)?"styled."+m:"Styled("+e_(m)+")"}(t):l,h=e.displayName&&e.componentId?Pp(e.displayName)+"-"+e.componentId:e.componentId||u,d=r&&t.attrs?Array.prototype.concat(t.attrs,o).filter(Boolean):o,g=e.shouldForwardProp;r&&t.shouldForwardProp&&(g=e.shouldForwardProp?function(m,w,v){return t.shouldForwardProp(m,w,v)&&e.shouldForwardProp(m,w,v)}:t.shouldForwardProp);var y,_=new yA(n,h,r?t.componentStyle:void 0),f=_.isStatic&&o.length===0,p=function(m,w){return function(v,P,b,V){var F=v.attrs,M=v.componentStyle,he=v.defaultProps,Cn=v.foldedComponentIds,fe=v.shouldForwardProp,de=v.styledComponentId,kt=v.target,Te=function(j,I,X){j===void 0&&(j=$r);var x=Zn({},I,{theme:j}),ae={};return X.forEach(function(se){var ue,Y,Ze,$t=se;for(ue in Oa($t)&&($t=$t(x)),$t)x[ue]=ae[ue]=ue==="className"?(Y=ae[ue],Ze=$t[ue],Y&&Ze?Y+" "+Ze:Y||Ze):$t[ue]}),[x,ae]}(NA(P,li.exports.useContext(d_),he)||$r,P,F),mn=Te[0],Ct=Te[1],pt=function(j,I,X,x){var ae=EA(),se=TA(),ue=I?j.generateAndInjectStyles($r,ae,se):j.generateAndInjectStyles(X,ae,se);return ue}(M,V,mn),Hn=b,mr=Ct.$as||P.$as||Ct.as||P.as||kt,O=wc(mr),S=Ct!==P?Zn({},P,{},Ct):P,k={};for(var D in S)D[0]!=="$"&&D!=="as"&&(D==="forwardedAs"?k.as=S[D]:(fe?fe(D,G0,mr):!O||G0(D))&&(k[D]=S[D]));return P.style&&Ct.style!==P.style&&(k.style=Zn({},P.style,{},Ct.style)),k.className=Array.prototype.concat(Cn,de,pt!==de?pt:null,P.className,Ct.className).filter(Boolean).join(" "),k.ref=Hn,li.exports.createElement(mr,k)}(y,m,w,f)};return p.displayName=c,(y=vn.forwardRef(p)).attrs=d,y.componentStyle=_,y.displayName=c,y.shouldForwardProp=g,y.foldedComponentIds=r?Array.prototype.concat(t.foldedComponentIds,t.styledComponentId):mc,y.styledComponentId=h,y.target=r?t.target:t,y.withComponent=function(m){var w=e.componentId,v=function(b,V){if(b==null)return{};var F,M,he={},Cn=Object.keys(b);for(M=0;M<Cn.length;M++)F=Cn[M],V.indexOf(F)>=0||(he[F]=b[F]);return he}(e,["componentId"]),P=w&&w+"-"+(wc(m)?m:Pp(e_(m)));return f_(m,Zn({},v,{attrs:d,componentId:P}),n)},Object.defineProperty(y,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(m){this._foldedDefaultProps=r?h_({},t.defaultProps,m):m}}),y.toString=function(){return"."+y.styledComponentId},i&&eA(y,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),y}var Op=function(t){return function e(n,r,i){if(i===void 0&&(i=$r),!ic.exports.isValidElementType(r))return La(1,String(r));var s=function(){return n(r,i,RA.apply(void 0,arguments))};return s.withConfig=function(o){return e(n,r,Zn({},i,{},o))},s.attrs=function(o){return e(n,r,Zn({},i,{attrs:Array.prototype.concat(i.attrs,o).filter(Boolean)}))},s}(f_,t)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(t){Op[t]=Op(t)});var hF=Op,p_={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},m_=vn.createContext&&vn.createContext(p_),Ur=function(){return Ur=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t},Ur.apply(this,arguments)},MA=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n};function g_(t){return t&&t.map(function(e,n){return vn.createElement(e.tag,Ur({key:n},e.attr),g_(e.child))})}function Us(t){return function(e){return vn.createElement($A,Ur({attr:Ur({},t.attr)},e),g_(t.child))}}function $A(t){var e=function(n){var r=t.attr,i=t.size,s=t.title,o=MA(t,["attr","size","title"]),a=i||n.size||"1em",u;return n.className&&(u=n.className),t.className&&(u=(u?u+" ":"")+t.className),vn.createElement("svg",Ur({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,o,{className:u,style:Ur(Ur({color:t.color||n.color},n.style),t.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),s&&vn.createElement("title",null,s),t.children)};return m_!==void 0?vn.createElement(m_.Consumer,null,function(n){return e(n)}):e(p_)}function dF(t){return Us({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"}}]})(t)}function fF(t){return Us({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"}}]})(t)}function pF(t){return Us({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M885.9 490.3c3.6-12 5.4-24.4 5.4-37 0-28.3-9.3-55.5-26.1-77.7 3.6-12 5.4-24.4 5.4-37 0-28.3-9.3-55.5-26.1-77.7 3.6-12 5.4-24.4 5.4-37 0-51.6-30.7-98.1-78.3-118.4a66.1 66.1 0 0 0-26.5-5.4H273v428h.3l85.8 310.8C372.9 889 418.9 924 470.9 924c29.7 0 57.4-11.8 77.9-33.4 20.5-21.5 31-49.7 29.5-79.4l-6-122.9h239.9c12.1 0 23.9-3.2 34.3-9.3 40.4-23.5 65.5-66.1 65.5-111 0-28.3-9.3-55.5-26.1-77.7zM112 132v364c0 17.7 14.3 32 32 32h65V100h-65c-17.7 0-32 14.3-32 32z"}}]})(t)}function mF(t){return Us({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M885.9 533.7c16.8-22.2 26.1-49.4 26.1-77.7 0-44.9-25.1-87.4-65.5-111.1a67.67 67.67 0 0 0-34.3-9.3H572.4l6-122.9c1.4-29.7-9.1-57.9-29.5-79.4A106.62 106.62 0 0 0 471 99.9c-52 0-98 35-111.8 85.1l-85.9 311h-.3v428h472.3c9.2 0 18.2-1.8 26.5-5.4 47.6-20.3 78.3-66.8 78.3-118.4 0-12.6-1.8-25-5.4-37 16.8-22.2 26.1-49.4 26.1-77.7 0-12.6-1.8-25-5.4-37 16.8-22.2 26.1-49.4 26.1-77.7-.2-12.6-2-25.1-5.6-37.1zM112 528v364c0 17.7 14.3 32 32 32h65V496h-65c-17.7 0-32 14.3-32 32z"}}]})(t)}function gF(t){return Us({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M885.9 490.3c3.6-12 5.4-24.4 5.4-37 0-28.3-9.3-55.5-26.1-77.7 3.6-12 5.4-24.4 5.4-37 0-28.3-9.3-55.5-26.1-77.7 3.6-12 5.4-24.4 5.4-37 0-51.6-30.7-98.1-78.3-118.4a66.1 66.1 0 0 0-26.5-5.4H144c-17.7 0-32 14.3-32 32v364c0 17.7 14.3 32 32 32h129.3l85.8 310.8C372.9 889 418.9 924 470.9 924c29.7 0 57.4-11.8 77.9-33.4 20.5-21.5 31-49.7 29.5-79.4l-6-122.9h239.9c12.1 0 23.9-3.2 34.3-9.3 40.4-23.5 65.5-66.1 65.5-111 0-28.3-9.3-55.5-26.1-77.7zM184 456V172h81v284h-81zm627.2 160.4H496.8l9.6 198.4c.6 11.9-4.7 23.1-14.6 30.5-6.1 4.5-13.6 6.8-21.1 6.7a44.28 44.28 0 0 1-42.2-32.3L329 459.2V172h415.4a56.85 56.85 0 0 1 33.6 51.8c0 9.7-2.3 18.9-6.9 27.3l-13.9 25.4 21.9 19a56.76 56.76 0 0 1 19.6 43c0 9.7-2.3 18.9-6.9 27.3l-13.9 25.4 21.9 19a56.76 56.76 0 0 1 19.6 43c0 9.7-2.3 18.9-6.9 27.3l-14 25.5 21.9 19a56.76 56.76 0 0 1 19.6 43c0 19.1-11 37.5-28.8 48.4z"}}]})(t)}function yF(t){return Us({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M885.9 533.7c16.8-22.2 26.1-49.4 26.1-77.7 0-44.9-25.1-87.4-65.5-111.1a67.67 67.67 0 0 0-34.3-9.3H572.4l6-122.9c1.4-29.7-9.1-57.9-29.5-79.4A106.62 106.62 0 0 0 471 99.9c-52 0-98 35-111.8 85.1l-85.9 311H144c-17.7 0-32 14.3-32 32v364c0 17.7 14.3 32 32 32h601.3c9.2 0 18.2-1.8 26.5-5.4 47.6-20.3 78.3-66.8 78.3-118.4 0-12.6-1.8-25-5.4-37 16.8-22.2 26.1-49.4 26.1-77.7 0-12.6-1.8-25-5.4-37 16.8-22.2 26.1-49.4 26.1-77.7-.2-12.6-2-25.1-5.6-37.1zM184 852V568h81v284h-81zm636.4-353l-21.9 19 13.9 25.4a56.2 56.2 0 0 1 6.9 27.3c0 16.5-7.2 32.2-19.6 43l-21.9 19 13.9 25.4a56.2 56.2 0 0 1 6.9 27.3c0 16.5-7.2 32.2-19.6 43l-21.9 19 13.9 25.4a56.2 56.2 0 0 1 6.9 27.3c0 22.4-13.2 42.6-33.6 51.8H329V564.8l99.5-360.5a44.1 44.1 0 0 1 42.2-32.3c7.6 0 15.1 2.2 21.1 6.7 9.9 7.4 15.2 18.6 14.6 30.5l-9.6 198.4h314.4C829 418.5 840 436.9 840 456c0 16.5-7.2 32.1-19.6 43z"}}]})(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const y_=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)==55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)==56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},UA=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},v_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,u=i+2<t.length,l=u?t[i+2]:0,c=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|l>>6,g=l&63;u||(g=64,o||(d=64)),r.push(n[c],n[h],n[d],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(y_(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):UA(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const l=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||l==null||h==null)throw Error();const d=s<<2|a>>4;if(r.push(d),l!==64){const g=a<<4&240|l>>2;if(r.push(g),h!==64){const y=l<<6&192|h;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},FA=function(t){const e=y_(t);return v_.encodeByteArray(e,!0)},w_=function(t){return FA(t).replace(/\./g,"")},VA=function(t){try{return v_.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function _c(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!BA(n)||(t[n]=_c(t[n],e[n]));return t}function BA(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zA{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function __(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[w_(JSON.stringify(n)),w_(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ye(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function I_(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ye())}function Lp(){try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function jA(){return typeof self=="object"&&self.self===self}function Mp(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Ic(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function qA(){return ye().indexOf("Electron/")>=0}function $p(){const t=ye();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function HA(){return ye().indexOf("MSAppHost/")>=0}function WA(){return!Lp()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Ec(){return typeof indexedDB=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GA="FirebaseError";class Qt extends Error{constructor(e,n,r){super(n);this.code=e,this.customData=r,this.name=GA,Object.setPrototypeOf(this,Qt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Si.prototype.create)}}class Si{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?KA(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Qt(i,a,r)}}function KA(t,e){return t.replace(QA,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const QA=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E_(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function YA(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Up(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(T_(s)&&T_(o)){if(!Up(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function T_(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fs(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Vs(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function $a(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function S_(t,e){const n=new XA(t,e);return n.subscribe.bind(n)}class XA{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");JA(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Fp),i.error===void 0&&(i.error=Fp),i.complete===void 0&&(i.complete=Fp);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console!="undefined"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function JA(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Fp(){}/**
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
***************************************************************************** */function Vp(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function ZA(t,e,n,r){function i(s){return s instanceof n?s:new n(function(o){o(s)})}return new(n||(n=Promise))(function(s,o){function a(c){try{l(r.next(c))}catch(h){o(h)}}function u(c){try{l(r.throw(c))}catch(h){o(h)}}function l(c){c.done?s(c.value):i(c.value).then(a,u)}l((r=r.apply(t,e||[])).next())})}function eR(t,e){var n={label:0,sent:function(){if(s[0]&1)throw s[1];return s[1]},trys:[],ops:[]},r,i,s,o;return o={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function a(l){return function(c){return u([l,c])}}function u(l){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,i&&(s=l[0]&2?i.return:l[0]?i.throw||((s=i.return)&&s.call(i),0):i.next)&&!(s=s.call(i,l[1])).done)return s;switch(i=0,s&&(l=[l[0]&2,s.value]),l[0]){case 0:case 1:s=l;break;case 4:return n.label++,{value:l[1],done:!1};case 5:n.label++,i=l[1],l=[0];continue;case 7:l=n.ops.pop(),n.trys.pop();continue;default:if(s=n.trys,!(s=s.length>0&&s[s.length-1])&&(l[0]===6||l[0]===2)){n=0;continue}if(l[0]===3&&(!s||l[1]>s[0]&&l[1]<s[3])){n.label=l[1];break}if(l[0]===6&&n.label<s[1]){n.label=s[1],s=l;break}if(s&&n.label<s[2]){n.label=s[2],n.ops.push(l);break}s[2]&&n.ops.pop(),n.trys.pop();continue}l=e.call(t,n)}catch(c){l=[6,c],i=0}finally{r=s=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}}function Bp(t){var e=typeof Symbol=="function"&&Symbol.iterator,n=e&&t[e],r=0;if(n)return n.call(t);if(t&&typeof t.length=="number")return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function Tc(t,e){var n=typeof Symbol=="function"&&t[Symbol.iterator];if(!n)return t;var r=n.call(t),i,s=[],o;try{for(;(e===void 0||e-- >0)&&!(i=r.next()).done;)s.push(i.value)}catch(a){o={error:a}}finally{try{i&&!i.done&&(n=r.return)&&n.call(r)}finally{if(o)throw o.error}}return s}function k_(t,e,n){if(n||arguments.length===2)for(var r=0,i=e.length,s;r<i;r++)(s||!(r in e))&&(s||(s=Array.prototype.slice.call(e,0,r)),s[r]=e[r]);return t.concat(s||Array.prototype.slice.call(e))}var In=function(){function t(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}return t.prototype.setInstantiationMode=function(e){return this.instantiationMode=e,this},t.prototype.setMultipleInstances=function(e){return this.multipleInstances=e,this},t.prototype.setServiceProps=function(e){return this.serviceProps=e,this},t.prototype.setInstanceCreatedCallback=function(e){return this.onInstanceCreated=e,this},t}();/**
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
 */var ki="[DEFAULT]";/**
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
 */var tR=function(){function t(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}return t.prototype.get=function(e){var n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){var r=new zA;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{var i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise},t.prototype.getImmediate=function(e){var n,r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error("Service "+this.name+" is not available")}},t.prototype.getComponent=function(){return this.component},t.prototype.setComponent=function(e){var n,r;if(e.name!==this.name)throw Error("Mismatching Component "+e.name+" for Provider "+this.name+".");if(this.component)throw Error("Component for "+this.name+" has already been provided");if(this.component=e,!!this.shouldAutoInitialize()){if(rR(e))try{this.getOrInitializeService({instanceIdentifier:ki})}catch{}try{for(var i=Bp(this.instancesDeferred.entries()),s=i.next();!s.done;s=i.next()){var o=Tc(s.value,2),a=o[0],u=o[1],l=this.normalizeInstanceIdentifier(a);try{var c=this.getOrInitializeService({instanceIdentifier:l});u.resolve(c)}catch{}}}catch(h){n={error:h}}finally{try{s&&!s.done&&(r=i.return)&&r.call(i)}finally{if(n)throw n.error}}}},t.prototype.clearInstance=function(e){e===void 0&&(e=ki),this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)},t.prototype.delete=function(){return ZA(this,void 0,void 0,function(){var e;return eR(this,function(n){switch(n.label){case 0:return e=Array.from(this.instances.values()),[4,Promise.all(k_(k_([],Tc(e.filter(function(r){return"INTERNAL"in r}).map(function(r){return r.INTERNAL.delete()}))),Tc(e.filter(function(r){return"_delete"in r}).map(function(r){return r._delete()}))))];case 1:return n.sent(),[2]}})})},t.prototype.isComponentSet=function(){return this.component!=null},t.prototype.isInitialized=function(e){return e===void 0&&(e=ki),this.instances.has(e)},t.prototype.getOptions=function(e){return e===void 0&&(e=ki),this.instancesOptions.get(e)||{}},t.prototype.initialize=function(e){var n,r;e===void 0&&(e={});var i=e.options,s=i===void 0?{}:i,o=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(o))throw Error(this.name+"("+o+") has already been initialized");if(!this.isComponentSet())throw Error("Component "+this.name+" has not been registered yet");var a=this.getOrInitializeService({instanceIdentifier:o,options:s});try{for(var u=Bp(this.instancesDeferred.entries()),l=u.next();!l.done;l=u.next()){var c=Tc(l.value,2),h=c[0],d=c[1],g=this.normalizeInstanceIdentifier(h);o===g&&d.resolve(a)}}catch(y){n={error:y}}finally{try{l&&!l.done&&(r=u.return)&&r.call(u)}finally{if(n)throw n.error}}return a},t.prototype.onInit=function(e,n){var r,i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);var o=this.instances.get(i);return o&&e(o,i),function(){s.delete(e)}},t.prototype.invokeOnInitCallbacks=function(e,n){var r,i,s=this.onInitCallbacks.get(n);if(!!s)try{for(var o=Bp(s),a=o.next();!a.done;a=o.next()){var u=a.value;try{u(e,n)}catch{}}}catch(l){r={error:l}}finally{try{a&&!a.done&&(i=o.return)&&i.call(o)}finally{if(r)throw r.error}}},t.prototype.getOrInitializeService=function(e){var n=e.instanceIdentifier,r=e.options,i=r===void 0?{}:r,s=this.instances.get(n);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:nR(n),options:i}),this.instances.set(n,s),this.instancesOptions.set(n,i),this.invokeOnInitCallbacks(s,n),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,n,s)}catch{}return s||null},t.prototype.normalizeInstanceIdentifier=function(e){return e===void 0&&(e=ki),this.component?this.component.multipleInstances?e:ki:e},t.prototype.shouldAutoInitialize=function(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"},t}();function nR(t){return t===ki?void 0:t}function rR(t){return t.instantiationMode==="EAGER"}/**
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
 */var iR=function(){function t(e){this.name=e,this.providers=new Map}return t.prototype.addComponent=function(e){var n=this.getProvider(e.name);if(n.isComponentSet())throw new Error("Component "+e.name+" has already been registered with "+this.name);n.setComponent(e)},t.prototype.addOrOverwriteComponent=function(e){var n=this.getProvider(e.name);n.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)},t.prototype.getProvider=function(e){if(this.providers.has(e))return this.providers.get(e);var n=new tR(e,this);return this.providers.set(e,n),n},t.prototype.getProviders=function(){return Array.from(this.providers.values())},t}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zp=[];var te;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(te||(te={}));const C_={debug:te.DEBUG,verbose:te.VERBOSE,info:te.INFO,warn:te.WARN,error:te.ERROR,silent:te.SILENT},sR=te.INFO,oR={[te.DEBUG]:"log",[te.VERBOSE]:"log",[te.INFO]:"info",[te.WARN]:"warn",[te.ERROR]:"error"},aR=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=oR[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Sc{constructor(e){this.name=e,this._logLevel=sR,this._logHandler=aR,this._userLogHandler=null,zp.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in te))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?C_[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,te.DEBUG,...e),this._logHandler(this,te.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,te.VERBOSE,...e),this._logHandler(this,te.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,te.INFO,...e),this._logHandler(this,te.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,te.WARN,...e),this._logHandler(this,te.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,te.ERROR,...e),this._logHandler(this,te.ERROR,...e)}}function uR(t){zp.forEach(e=>{e.setLogLevel(t)})}function lR(t,e){for(const n of zp){let r=null;e&&e.level&&(r=C_[e.level]),t===null?n.userLogHandler=null:n.userLogHandler=(i,s,...o)=>{const a=o.map(u=>{if(u==null)return null;if(typeof u=="string")return u;if(typeof u=="number"||typeof u=="boolean")return u.toString();if(u instanceof Error)return u.message;try{return JSON.stringify(u)}catch{return null}}).filter(u=>u).join(" ");s>=(r!=null?r:i.logLevel)&&t({level:te[s].toLowerCase(),message:a,args:o,type:i.name})}}}/**
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
 */class cR{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(hR(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function hR(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const jp="@firebase/app",b_="0.7.4";/**
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
 */const qp=new Sc("@firebase/app"),dR="@firebase/app-compat",fR="@firebase/analytics-compat",pR="@firebase/analytics",mR="@firebase/app-check-compat",gR="@firebase/app-check",yR="@firebase/auth",vR="@firebase/auth-compat",wR="@firebase/database",_R="@firebase/database-compat",IR="@firebase/functions",ER="@firebase/functions-compat",TR="@firebase/installations",SR="@firebase/installations-compat",kR="@firebase/messaging",CR="@firebase/messaging-compat",bR="@firebase/performance",AR="@firebase/performance-compat",RR="@firebase/remote-config",NR="@firebase/remote-config-compat",PR="@firebase/storage",xR="@firebase/storage-compat",DR="@firebase/firestore",OR="@firebase/firestore-compat",LR="firebase",MR="9.1.3";/**
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
 */const Ci="[DEFAULT]",$R={[jp]:"fire-core",[dR]:"fire-core-compat",[pR]:"fire-analytics",[fR]:"fire-analytics-compat",[gR]:"fire-app-check",[mR]:"fire-app-check-compat",[yR]:"fire-auth",[vR]:"fire-auth-compat",[wR]:"fire-rtdb",[_R]:"fire-rtdb-compat",[IR]:"fire-fn",[ER]:"fire-fn-compat",[TR]:"fire-iid",[SR]:"fire-iid-compat",[kR]:"fire-fcm",[CR]:"fire-fcm-compat",[bR]:"fire-perf",[AR]:"fire-perf-compat",[RR]:"fire-rc",[NR]:"fire-rc-compat",[PR]:"fire-gcs",[xR]:"fire-gcs-compat",[DR]:"fire-fst",[OR]:"fire-fst-compat","fire-js":"fire-js",[LR]:"fire-js-all"};/**
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
 */const Fr=new Map,Ua=new Map;function kc(t,e){try{t.container.addComponent(e)}catch(n){qp.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function A_(t,e){t.container.addOrOverwriteComponent(e)}function Vr(t){const e=t.name;if(Ua.has(e))return qp.debug(`There were multiple attempts to register component ${e}.`),!1;Ua.set(e,t);for(const n of Fr.values())kc(n,t);return!0}function R_(t,e){return t.container.getProvider(e)}function UR(t,e,n=Ci){R_(t,e).clearInstance(n)}function FR(){Ua.clear()}/**
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
 */const VR={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function."},Fa=new Si("app","Firebase",VR);/**
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
 */class BR{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new In("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Fa.create("app-deleted",{appName:this._name})}}/**
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
 */const Br=MR;function N_(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:Ci,automaticDataCollectionEnabled:!1},e),r=n.name;if(typeof r!="string"||!r)throw Fa.create("bad-app-name",{appName:String(r)});const i=Fr.get(r);if(i){if(Up(t,i.options)&&Up(n,i.config))return i;throw Fa.create("duplicate-app",{appName:r})}const s=new iR(r);for(const a of Ua.values())s.addComponent(a);const o=new BR(t,n,s);return Fr.set(r,o),o}function zR(t=Ci){const e=Fr.get(t);if(!e)throw Fa.create("no-app",{appName:t});return e}function jR(){return Array.from(Fr.values())}async function P_(t){const e=t.name;Fr.has(e)&&(Fr.delete(e),await Promise.all(t.container.getProviders().map(n=>n.delete())),t.isDeleted=!0)}function ln(t,e,n){var r;let i=(r=$R[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),qp.warn(a.join(" "));return}Vr(new In(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}function x_(t,e){if(t!==null&&typeof t!="function")throw Fa.create("invalid-log-argument");lR(t,e)}function D_(t){uR(t)}/**
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
 */function qR(t){Vr(new In("platform-logger",e=>new cR(e),"PRIVATE")),ln(jp,b_,t),ln(jp,b_,"esm2017"),ln("fire-js","")}qR("");var HR=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",SDK_VERSION:Br,_DEFAULT_ENTRY_NAME:Ci,_addComponent:kc,_addOrOverwriteComponent:A_,_apps:Fr,_clearComponents:FR,_components:Ua,_getProvider:R_,_registerComponent:Vr,_removeServiceInstance:UR,deleteApp:P_,getApp:zR,getApps:jR,initializeApp:N_,onLog:x_,registerVersion:ln,setLogLevel:D_,FirebaseError:Qt});/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WR{constructor(e,n){this._delegate=e,this.firebase=n,kc(e,new In("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),P_(this._delegate)))}_getService(e,n=Ci){var r;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(e);return!i.isInitialized()&&((r=i.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&i.initialize(),i.getImmediate({identifier:n})}_removeServiceInstance(e,n=Ci){this._delegate.container.getProvider(e).clearInstance(n)}_addComponent(e){kc(this._delegate,e)}_addOrOverwriteComponent(e){A_(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
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
 */const GR={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance."},O_=new Si("app-compat","Firebase",GR);/**
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
 */function KR(t){const e={},n={__esModule:!0,initializeApp:s,app:i,registerVersion:ln,setLogLevel:D_,onLog:x_,apps:null,SDK_VERSION:Br,INTERNAL:{registerComponent:a,removeApp:r,useAsService:u,modularAPIs:HR}};n.default=n,Object.defineProperty(n,"apps",{get:o});function r(l){delete e[l]}function i(l){if(l=l||Ci,!E_(e,l))throw O_.create("no-app",{appName:l});return e[l]}i.App=t;function s(l,c={}){const h=N_(l,c);if(E_(e,h.name))return e[h.name];const d=new t(h,n);return e[h.name]=d,d}function o(){return Object.keys(e).map(l=>e[l])}function a(l){const c=l.name,h=c.replace("-compat","");if(Vr(l)&&l.type==="PUBLIC"){const d=(g=i())=>{if(typeof g[h]!="function")throw O_.create("invalid-app-argument",{appName:c});return g[h]()};l.serviceProps!==void 0&&_c(d,l.serviceProps),n[h]=d,t.prototype[h]=function(...g){return this._getService.bind(this,c).apply(this,l.multipleInstances?g:[])}}return l.type==="PUBLIC"?n[h]:null}function u(l,c){return c==="serverAuth"?null:c}return n}/**
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
 */function L_(){const t=KR(WR);t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:L_,extendNamespace:e,createSubscribe:S_,ErrorFactory:Si,deepExtend:_c});function e(n){_c(t,n)}return t}const QR=L_();/**
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
 */const M_=new Sc("@firebase/app-compat"),YR="@firebase/app-compat",XR="0.1.5";/**
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
 */function JR(t){ln(YR,XR,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */if(jA()&&self.firebase!==void 0){M_.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);const t=self.firebase.SDK_VERSION;t&&t.indexOf("LITE")>=0&&M_.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}const Bs=QR;JR();var ZR="firebase",eN="9.1.3";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Bs.registerVersion(ZR,eN,"app-compat");const Va={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},zs={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tN(){return{["admin-restricted-operation"]:"This operation is restricted to administrators only.",["argument-error"]:"",["app-not-authorized"]:"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",["app-not-installed"]:"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",["captcha-check-failed"]:"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",["code-expired"]:"The SMS code has expired. Please re-send the verification code to try again.",["cordova-not-ready"]:"Cordova framework is not ready.",["cors-unsupported"]:"This browser is not supported.",["credential-already-in-use"]:"This credential is already associated with a different user account.",["custom-token-mismatch"]:"The custom token corresponds to a different audience.",["requires-recent-login"]:"This operation is sensitive and requires recent authentication. Log in again before retrying this request.",["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",["dynamic-link-not-activated"]:"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",["email-change-needs-verification"]:"Multi-factor users must always have a verified email.",["email-already-in-use"]:"The email address is already in use by another account.",["emulator-config-failed"]:'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',["expired-action-code"]:"The action code has expired.",["cancelled-popup-request"]:"This operation has been cancelled due to another conflicting popup being opened.",["internal-error"]:"An internal AuthError has occurred.",["invalid-app-credential"]:"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",["invalid-app-id"]:"The mobile app identifier is not registed for the current project.",["invalid-user-token"]:"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",["invalid-auth-event"]:"An internal AuthError has occurred.",["invalid-verification-code"]:"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.",["invalid-continue-uri"]:"The continue URL provided in the request is invalid.",["invalid-cordova-configuration"]:"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",["invalid-custom-token"]:"The custom token format is incorrect. Please check the documentation.",["invalid-dynamic-link-domain"]:"The provided dynamic link domain is not configured or authorized for the current project.",["invalid-email"]:"The email address is badly formatted.",["invalid-emulator-scheme"]:"Emulator URL must start with a valid scheme (http:// or https://).",["invalid-api-key"]:"Your API key is invalid, please check you have copied it correctly.",["invalid-cert-hash"]:"The SHA-1 certificate hash provided is invalid.",["invalid-credential"]:"The supplied auth credential is malformed or has expired.",["invalid-message-payload"]:"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-multi-factor-session"]:"The request does not contain a valid proof of first factor successful sign-in.",["invalid-oauth-provider"]:"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",["invalid-oauth-client-id"]:"The OAuth client ID provided is either invalid or does not match the specified API key.",["unauthorized-domain"]:"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",["invalid-action-code"]:"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",["wrong-password"]:"The password is invalid or the user does not have a password.",["invalid-persistence-type"]:"The specified persistence type is invalid. It can only be local, session or none.",["invalid-phone-number"]:"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",["invalid-provider-id"]:"The specified provider ID is invalid.",["invalid-recipient-email"]:"The email corresponding to this action failed to send as the provided recipient email address is invalid.",["invalid-sender"]:"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-verification-id"]:"The verification ID used to create the phone auth credential is invalid.",["invalid-tenant-id"]:"The Auth instance's tenant ID is invalid.",["missing-android-pkg-name"]:"An Android Package Name must be provided if the Android App is required to be installed.",["auth-domain-config-required"]:"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",["missing-app-credential"]:"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",["missing-verification-code"]:"The phone auth credential was created with an empty SMS verification code.",["missing-continue-uri"]:"A continue URL must be provided in the request.",["missing-iframe-start"]:"An internal AuthError has occurred.",["missing-ios-bundle-id"]:"An iOS Bundle ID must be provided if an App Store ID is provided.",["missing-or-invalid-nonce"]:"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.",["missing-multi-factor-info"]:"No second factor identifier is provided.",["missing-multi-factor-session"]:"The request is missing proof of first factor successful sign-in.",["missing-phone-number"]:"To send verification codes, provide a phone number for the recipient.",["missing-verification-id"]:"The phone auth credential was created with an empty verification ID.",["app-deleted"]:"This instance of FirebaseApp has been deleted.",["multi-factor-info-not-found"]:"The user does not have a second factor matching the identifier provided.",["multi-factor-auth-required"]:"Proof of ownership of a second factor is required to complete sign-in.",["account-exists-with-different-credential"]:"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",["network-request-failed"]:"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.",["no-auth-event"]:"An internal AuthError has occurred.",["no-such-provider"]:"User was not linked to an account with the given provider.",["null-user"]:"A null user object was provided as the argument for an operation which requires a non-null user object.",["operation-not-allowed"]:"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",["operation-not-supported-in-this-environment"]:'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',["popup-blocked"]:"Unable to establish a connection with the popup. It may have been blocked by the browser.",["popup-closed-by-user"]:"The popup has been closed by the user before finalizing the operation.",["provider-already-linked"]:"User can only be linked to one identity for the given provider.",["quota-exceeded"]:"The project's quota for this operation has been exceeded.",["redirect-cancelled-by-user"]:"The redirect operation has been cancelled by the user before finalizing.",["redirect-operation-pending"]:"A redirect sign-in operation is already pending.",["rejected-credential"]:"The request contains malformed or mismatching credentials.",["second-factor-already-in-use"]:"The second factor is already enrolled on this account.",["maximum-second-factor-count-exceeded"]:"The maximum allowed number of second factors on a user has been exceeded.",["tenant-id-mismatch"]:"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.",["user-token-expired"]:"The user's credential is no longer valid. The user must sign in again.",["too-many-requests"]:"We have blocked all requests from this device due to unusual activity. Try again later.",["unauthorized-continue-uri"]:"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",["unsupported-first-factor"]:"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.",["unsupported-persistence-type"]:"The current environment does not support the specified persistence type.",["unsupported-tenant-operation"]:"This operation is not supported in a multi-tenant context.",["unverified-email"]:"The operation requires a verified email.",["user-cancelled"]:"The user did not grant your application the permissions it requested.",["user-not-found"]:"There is no user record corresponding to this identifier. The user may have been deleted.",["user-disabled"]:"The user account has been disabled by an administrator.",["user-mismatch"]:"The supplied credentials do not correspond to the previously signed in user.",["user-signed-out"]:"",["weak-password"]:"The password must be 6 characters long or more.",["web-storage-unsupported"]:"This browser is not supported or 3rd party cookies and data may be disabled.",["already-initialized"]:"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance."}}function $_(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const nN=tN,rN=$_,U_=new Si("auth","Firebase",$_());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F_=new Sc("@firebase/auth");function Cc(t,...e){F_.logLevel<=te.ERROR&&F_.error(`Auth (${Br}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function st(t,...e){throw Hp(t,...e)}function ot(t,...e){return Hp(t,...e)}function V_(t,e,n){const r=Object.assign(Object.assign({},rN()),{[e]:n});return new Si("auth","Firebase",r).create(e,{appName:t.name})}function js(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&st(t,"argument-error"),V_(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Hp(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return U_.create(t,...e)}function A(t,e,...n){if(!t)throw Hp(e,...n)}function Dn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Cc(e),new Error(e)}function En(t,e){t||Dn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B_=new Map;function Yt(t){En(t instanceof Function,"Expected a class definition");let e=B_.get(t);return e?(En(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,B_.set(t,e),e)}function iN(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Yt);(e==null?void 0:e.errorMap)&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ba(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Wp(){return z_()==="http:"||z_()==="https:"}function z_(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sN(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Wp()||Mp()||"connection"in navigator)?navigator.onLine:!0}function oN(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class za{constructor(e,n){this.shortDelay=e,this.longDelay=n,En(n>e,"Short delay should be less than long delay!"),this.isMobile=I_()||Ic()}get(){return sN()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gp(t,e){En(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kp{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;Dn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;Dn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;Dn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aN={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uN=new za(3e4,6e4);function Ue(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function qe(t,e,n,r,i={}){return j_(t,i,()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Fs(Object.assign({key:t.config.apiKey},o)).slice(1),u=new(Kp.headers());return u.set("Content-Type","application/json"),u.set("X-Client-Version",t._getSdkClientVersion()),t.languageCode&&u.set("X-Firebase-Locale",t.languageCode),Kp.fetch()(q_(t,t.config.apiHost,n,a),Object.assign({method:e,headers:u,referrerPolicy:"no-referrer"},s))})}async function j_(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},aN),e);try{const i=new lN(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw bc(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[u,l]=a.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw bc(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw bc(t,"email-already-in-use",o);const c=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw V_(t,c,l);st(t,c)}}catch(i){if(i instanceof Qt)throw i;st(t,"network-request-failed")}}async function er(t,e,n,r,i={}){const s=await qe(t,e,n,r,i);return"mfaPendingCredential"in s&&st(t,"multi-factor-auth-required",{serverResponse:s}),s}function q_(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Gp(t.config,i):`${t.config.apiScheme}://${i}`}class lN{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(ot(this.auth,"timeout")),uN.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function bc(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=ot(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cN(t,e){return qe(t,"POST","/v1/accounts:delete",e)}async function hN(t,e){return qe(t,"POST","/v1/accounts:update",e)}async function dN(t,e){return qe(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ja(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function fN(t,e=!1){const n=B(t),r=await n.getIdToken(e),i=Ac(r);A(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:ja(Qp(i.auth_time)),issuedAtTime:ja(Qp(i.iat)),expirationTime:ja(Qp(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Qp(t){return Number(t)*1e3}function Ac(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Cc("JWT malformed, contained fewer than 3 sections"),null;try{const i=VA(n);return i?JSON.parse(i):(Cc("Failed to decode base64 JWT payload"),null)}catch(i){return Cc("Caught error parsing JWT payload as JSON",i),null}}function pN(t){const e=Ac(t);return A(e,"internal-error"),A(typeof e.exp!="undefined","internal-error"),A(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tr(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Qt&&mN(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function mN({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gN{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H_{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ja(this.lastLoginAt),this.creationTime=ja(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function qa(t){var e;const n=t.auth,r=await t.getIdToken(),i=await tr(t,dN(n,{idToken:r}));A(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=((e=s.providerUserInfo)===null||e===void 0?void 0:e.length)?wN(s.providerUserInfo):[],a=vN(t.providerData,o),u=t.isAnonymous,l=!(t.email&&s.passwordHash)&&!(a==null?void 0:a.length),c=u?l:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new H_(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,h)}async function yN(t){const e=B(t);await qa(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function vN(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function wN(t){return t.map(e=>{var{providerId:n}=e,r=Vp(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _N(t,e){const n=await j_(t,{},()=>{const r=Fs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=q_(t,i,"/v1/token",`key=${s}`);return Kp.fetch()(o,{method:"POST",headers:{"X-Client-Version":t._getSdkClientVersion(),"Content-Type":"application/x-www-form-urlencoded"},body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ha{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){A(e.idToken,"internal-error"),A(typeof e.idToken!="undefined","internal-error"),A(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):pN(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return A(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await _N(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Ha;return r&&(A(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(A(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(A(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ha,this.toJSON())}_performRefresh(){return Dn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zr(t,e){A(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class bi{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Vp(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.emailVerified=!1,this.isAnonymous=!1,this.tenantId=null,this.providerData=[],this.proactiveRefresh=new gN(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.metadata=new H_(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await tr(this,this.stsTokenManager.getToken(this.auth,e));return A(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return fN(this,e)}reload(){return yN(this)}_assign(e){this!==e&&(A(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new bi(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){A(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await qa(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await tr(this,cN(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,u,l,c;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,g=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,_=(a=n.tenantId)!==null&&a!==void 0?a:void 0,f=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,p=(l=n.createdAt)!==null&&l!==void 0?l:void 0,m=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:w,emailVerified:v,isAnonymous:P,providerData:b,stsTokenManager:V}=n;A(w&&V,e,"internal-error");const F=Ha.fromJSON(this.name,V);A(typeof w=="string",e,"internal-error"),zr(h,e.name),zr(d,e.name),A(typeof v=="boolean",e,"internal-error"),A(typeof P=="boolean",e,"internal-error"),zr(g,e.name),zr(y,e.name),zr(_,e.name),zr(f,e.name),zr(p,e.name),zr(m,e.name);const M=new bi({uid:w,auth:e,email:d,emailVerified:v,displayName:h,isAnonymous:P,photoURL:y,phoneNumber:g,tenantId:_,stsTokenManager:F,createdAt:p,lastLoginAt:m});return b&&Array.isArray(b)&&(M.providerData=b.map(he=>Object.assign({},he))),f&&(M._redirectEventId=f),M}static async _fromIdTokenResponse(e,n,r=!1){const i=new Ha;i.updateFromServerResponse(n);const s=new bi({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await qa(s),s}}/**
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
 */class W_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}W_.type="NONE";const Wa=W_;/**
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
 */function Ai(t,e,n){return`firebase:${t}:${e}:${n}`}class qs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Ai(this.userKey,i.apiKey,s),this.fullPersistenceKey=Ai("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?bi._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new qs(Yt(Wa),e,r);const i=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let s=i[0]||Yt(Wa);const o=Ai(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const c=await l._get(o);if(c){const h=bi._fromJSON(e,c);l!==s&&(a=h),s=l;break}}catch{}const u=i.filter(l=>l._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new qs(s,e,r):(s=u[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==s)try{await l._remove(o)}catch{}})),new qs(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G_(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Y_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(K_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(X_(e))return"Blackberry";if(J_(e))return"Webos";if(Yp(e))return"Safari";if((e.includes("chrome/")||Q_(e))&&!e.includes("edge/"))return"Chrome";if(Ga(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function K_(t=ye()){return/firefox\//i.test(t)}function Yp(t=ye()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Q_(t=ye()){return/crios\//i.test(t)}function Y_(t=ye()){return/iemobile/i.test(t)}function Ga(t=ye()){return/android/i.test(t)}function X_(t=ye()){return/blackberry/i.test(t)}function J_(t=ye()){return/webos/i.test(t)}function Hs(t=ye()){return/iphone|ipad|ipod/i.test(t)}function IN(t=ye()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(t)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(t)}function EN(t=ye()){var e;return Hs(t)&&!!((e=window.navigator)===null||e===void 0?void 0:e.standalone)}function TN(){return $p()&&document.documentMode===10}function Z_(t=ye()){return Hs(t)||Ga(t)||J_(t)||X_(t)||/windows phone/i.test(t)||Y_(t)}function SN(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e1(t,e=[]){let n;switch(t){case"Browser":n=G_(ye());break;case"Worker":n=`${G_(ye())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Br}/${r}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kN{constructor(e,n){this.app=e,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new t1(this),this.idTokenSubscription=new t1(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=U_,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Yt(n)),this._initializationPromise=this.queue(async()=>{var r;this._deleted||(this.persistenceManager=await qs.create(this,e),!this._deleted&&(((r=this._popupRedirectResolver)===null||r===void 0?void 0:r._shouldInitProactively)&&await this._popupRedirectResolver._initialize(this),await this.initializeCurrentUser(n),!this._deleted&&(this._isInitialized=!0)))}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e)}}async initializeCurrentUser(e){var n;let r=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,s=r==null?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(e);(!i||i===s)&&(o==null?void 0:o.user)&&(r=o.user)}return r?r._redirectEventId?(A(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)):this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await qa(e)}catch(n){if(n.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=oN()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?B(e):null;return n&&A(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&A(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Yt(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Si("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Yt(e)||this._popupRedirectResolver;A(n,this,"argument-error"),this.redirectPersistenceManager=await qs.create(this,[Yt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return A(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return A(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=e1(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}_getSdkClientVersion(){return this.clientVersion}}function He(t){return B(t)}class t1{constructor(e){this.auth=e,this.observer=null,this.addObserver=S_(n=>this.observer=n)}get next(){return A(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function CN(t,e,n){const r=He(t);A(r._canInitEmulator,r,"emulator-config-failed"),A(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n==null?void 0:n.disableWarnings),s=n1(e),{host:o,port:a}=bN(e),u=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||AN()}function n1(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function bN(t){const e=n1(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:r1(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:r1(o)}}}function r1(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function AN(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console!="undefined"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window!="undefined"&&typeof document!="undefined"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ws{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Dn("not implemented")}_getIdTokenResponse(e){return Dn("not implemented")}_linkToIdToken(e,n){return Dn("not implemented")}_getReauthenticationResolver(e){return Dn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function i1(t,e){return qe(t,"POST","/v1/accounts:resetPassword",Ue(t,e))}async function s1(t,e){return qe(t,"POST","/v1/accounts:update",e)}async function RN(t,e){return qe(t,"POST","/v1/accounts:update",Ue(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function NN(t,e){return er(t,"POST","/v1/accounts:signInWithPassword",Ue(t,e))}async function Rc(t,e){return qe(t,"POST","/v1/accounts:sendOobCode",Ue(t,e))}async function PN(t,e){return Rc(t,e)}async function xN(t,e){return Rc(t,e)}async function DN(t,e){return Rc(t,e)}async function ON(t,e){return Rc(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function LN(t,e){return er(t,"POST","/v1/accounts:signInWithEmailLink",Ue(t,e))}async function MN(t,e){return er(t,"POST","/v1/accounts:signInWithEmailLink",Ue(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ka extends Ws{constructor(e,n,r,i=null){super("password",r);this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Ka(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Ka(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return NN(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return LN(e,{email:this._email,oobCode:this._password});default:st(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return s1(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return MN(e,{idToken:n,email:this._email,oobCode:this._password});default:st(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nr(t,e){return er(t,"POST","/v1/accounts:signInWithIdp",Ue(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $N="http://localhost";class On extends Ws{constructor(){super(...arguments);this.pendingToken=null}static _fromParams(e){const n=new On(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):st("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Vp(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new On(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return nr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,nr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,nr(e,n)}buildRequest(){const e={requestUri:$N,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Fs(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function UN(t,e){return qe(t,"POST","/v1/accounts:sendVerificationCode",Ue(t,e))}async function FN(t,e){return er(t,"POST","/v1/accounts:signInWithPhoneNumber",Ue(t,e))}async function VN(t,e){const n=await er(t,"POST","/v1/accounts:signInWithPhoneNumber",Ue(t,e));if(n.temporaryProof)throw bc(t,"account-exists-with-different-credential",n);return n}const BN={USER_NOT_FOUND:"user-not-found"};async function zN(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return er(t,"POST","/v1/accounts:signInWithPhoneNumber",Ue(t,n),BN)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri extends Ws{constructor(e){super("phone","phone");this.params=e}static _fromVerification(e,n){return new Ri({verificationId:e,verificationCode:n})}static _fromTokenResponse(e,n){return new Ri({phoneNumber:e,temporaryProof:n})}_getIdTokenResponse(e){return FN(e,this._makeVerificationRequest())}_linkToIdToken(e,n){return VN(e,Object.assign({idToken:n},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return zN(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:n,verificationId:r,verificationCode:i}=this.params;return e&&n?{temporaryProof:e,phoneNumber:n}:{sessionInfo:r,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!n&&!i&&!s?null:new Ri({verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jN(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function qN(t){const e=Vs($a(t)).link,n=e?Vs($a(e)).deep_link_id:null,r=Vs($a(t)).deep_link_id;return(r?Vs($a(r)).link:null)||r||n||e||t}class Nc{constructor(e){var n,r,i,s,o,a;const u=Vs($a(e)),l=(n=u.apiKey)!==null&&n!==void 0?n:null,c=(r=u.oobCode)!==null&&r!==void 0?r:null,h=jN((i=u.mode)!==null&&i!==void 0?i:null);A(l&&c&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=c,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=u.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=qN(e);try{return new Nc(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr{constructor(){this.providerId=jr.PROVIDER_ID}static credential(e,n){return Ka._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Nc.parseLink(n);return A(r,"argument-error"),Ka._fromEmailAndCode(e,r.code,r.tenantId)}}jr.PROVIDER_ID="password";jr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";jr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Gs extends qr{constructor(){super(...arguments);this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class Ks extends Gs{static credentialFromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;return A("providerId"in n&&"signInMethod"in n,"argument-error"),On._fromParams(n)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return A(e.idToken||e.accessToken,"argument-error"),On._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return Ks.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return Ks.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r,oauthTokenSecret:i,pendingToken:s,nonce:o,providerId:a}=e;if(!r&&!i&&!n&&!s||!a)return null;try{return new Ks(a)._credential({idToken:n,accessToken:r,nonce:o,pendingToken:s})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln extends Gs{constructor(){super("facebook.com")}static credential(e){return On._fromParams({providerId:Ln.PROVIDER_ID,signInMethod:Ln.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ln.credentialFromTaggedObject(e)}static credentialFromError(e){return Ln.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ln.credential(e.oauthAccessToken)}catch{return null}}}Ln.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ln.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn extends Gs{constructor(){super("google.com");this.addScope("profile")}static credential(e,n){return On._fromParams({providerId:Mn.PROVIDER_ID,signInMethod:Mn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Mn.credentialFromTaggedObject(e)}static credentialFromError(e){return Mn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Mn.credential(n,r)}catch{return null}}}Mn.GOOGLE_SIGN_IN_METHOD="google.com";Mn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n extends Gs{constructor(){super("github.com")}static credential(e){return On._fromParams({providerId:$n.PROVIDER_ID,signInMethod:$n.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return $n.credentialFromTaggedObject(e)}static credentialFromError(e){return $n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return $n.credential(e.oauthAccessToken)}catch{return null}}}$n.GITHUB_SIGN_IN_METHOD="github.com";$n.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HN="http://localhost";class Pc extends Ws{constructor(e,n){super(e,e);this.pendingToken=n}_getIdTokenResponse(e){const n=this.buildRequest();return nr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,nr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,nr(e,n)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,pendingToken:s}=n;return!r||!i||!s||r!==i?null:new Pc(r,s)}static _create(e,n){return new Pc(e,n)}buildRequest(){return{requestUri:HN,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un extends Gs{constructor(){super("twitter.com")}static credential(e,n){return On._fromParams({providerId:Un.PROVIDER_ID,signInMethod:Un.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Un.credentialFromTaggedObject(e)}static credentialFromError(e){return Un.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Un.credential(n,r)}catch{return null}}}Un.TWITTER_SIGN_IN_METHOD="twitter.com";Un.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function o1(t,e){return er(t,"POST","/v1/accounts:signUp",Ue(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await bi._fromIdTokenResponse(e,r,i),o=a1(r);return new cn({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=a1(r);return new cn({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function a1(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WN(t){var e;const n=He(t);if(await n._initializationPromise,(e=n.currentUser)===null||e===void 0?void 0:e.isAnonymous)return new cn({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await o1(n,{returnSecureToken:!0}),i=await cn._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xc extends Qt{constructor(e,n,r,i){var s;super(n.code,n.message);this.operationType=r,this.user=i,this.name="FirebaseError",Object.setPrototypeOf(this,xc.prototype),this.appName=e.name,this.code=n.code,this.tenantId=(s=e.tenantId)!==null&&s!==void 0?s:void 0,this.serverResponse=n.customData.serverResponse}static _fromErrorAndOperation(e,n,r,i){return new xc(e,n,r,i)}}function u1(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?xc._fromErrorAndOperation(t,s,e,r):s})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l1(t){return new Set(t.map(({providerId:e})=>e).filter(e=>!!e))}/**
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
 */async function GN(t,e){const n=B(t);await Dc(!0,n,e);const{providerUserInfo:r}=await hN(n.auth,{idToken:await n.getIdToken(),deleteProvider:[e]}),i=l1(r||[]);return n.providerData=n.providerData.filter(s=>i.has(s.providerId)),i.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function Xp(t,e,n=!1){const r=await tr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return cn._forOperation(t,"link",r)}async function Dc(t,e,n){await qa(e);const r=l1(e.providerData),i=t===!1?"provider-already-linked":"no-such-provider";A(r.has(n)===t,e.auth,i)}/**
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
 */async function c1(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await tr(t,u1(r,i,e,t),n);A(s.idToken,r,"internal-error");const o=Ac(s.idToken);A(o,r,"internal-error");const{sub:a}=o;return A(t.uid===a,r,"user-mismatch"),cn._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&st(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function h1(t,e,n=!1){const r="signIn",i=await u1(t,r,e),s=await cn._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function Oc(t,e){return h1(He(t),e)}async function d1(t,e){const n=B(t);return await Dc(!1,n,e.providerId),Xp(n,e)}async function f1(t,e){return c1(B(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function KN(t,e){return er(t,"POST","/v1/accounts:signInWithCustomToken",Ue(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QN(t,e){const n=He(t),r=await KN(n,{token:e,returnSecureToken:!0}),i=await cn._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lc{constructor(e,n){this.factorId=e,this.uid=n.mfaEnrollmentId,this.enrollmentTime=new Date(n.enrolledAt).toUTCString(),this.displayName=n.displayName}static _fromServerResponse(e,n){return"phoneInfo"in n?Jp._fromServerResponse(e,n):st(e,"internal-error")}}class Jp extends Lc{constructor(e){super("phone",e);this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,n){return new Jp(n)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mc(t,e,n){var r;A(((r=n.url)===null||r===void 0?void 0:r.length)>0,t,"invalid-continue-uri"),A(typeof n.dynamicLinkDomain=="undefined"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(A(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(A(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function YN(t,e,n){const r=B(t),i={requestType:"PASSWORD_RESET",email:e};n&&Mc(r,i,n),await xN(r,i)}async function XN(t,e,n){await i1(B(t),{oobCode:e,newPassword:n})}async function JN(t,e){await RN(B(t),{oobCode:e})}async function p1(t,e){const n=B(t),r=await i1(n,{oobCode:e}),i=r.requestType;switch(A(i,n,"internal-error"),i){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":A(r.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":A(r.mfaInfo,n,"internal-error");default:A(r.email,n,"internal-error")}let s=null;return r.mfaInfo&&(s=Lc._fromServerResponse(He(n),r.mfaInfo)),{data:{email:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.newEmail:r.email)||null,previousEmail:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.email:r.newEmail)||null,multiFactorInfo:s},operation:i}}async function ZN(t,e){const{data:n}=await p1(B(t),e);return n.email}async function eP(t,e,n){const r=He(t),i=await o1(r,{returnSecureToken:!0,email:e,password:n}),s=await cn._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(s.user),s}function tP(t,e,n){return Oc(B(t),jr.credential(e,n))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nP(t,e,n){const r=B(t),i={requestType:"EMAIL_SIGNIN",email:e};A(n.handleCodeInApp,r,"argument-error"),n&&Mc(r,i,n),await DN(r,i)}function rP(t,e){const n=Nc.parseLink(e);return(n==null?void 0:n.operation)==="EMAIL_SIGNIN"}async function iP(t,e,n){const r=B(t),i=jr.credentialWithLink(e,n||Ba());return A(i._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),Oc(r,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sP(t,e){return qe(t,"POST","/v1/accounts:createAuthUri",Ue(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oP(t,e){const n=Wp()?Ba():"http://localhost",r={identifier:e,continueUri:n},{signinMethods:i}=await sP(B(t),r);return i||[]}async function aP(t,e){const n=B(t),r=await t.getIdToken(),i={requestType:"VERIFY_EMAIL",idToken:r};e&&Mc(n.auth,i,e);const{email:s}=await PN(n.auth,i);s!==t.email&&await t.reload()}async function uP(t,e,n){const r=B(t),i=await t.getIdToken(),s={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:i,newEmail:e};n&&Mc(r.auth,s,n);const{email:o}=await ON(r.auth,s);o!==t.email&&await t.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lP(t,e){return qe(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cP(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=B(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await tr(r,lP(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:u})=>u==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function hP(t,e){return m1(B(t),e,null)}function dP(t,e){return m1(B(t),null,e)}async function m1(t,e,n){const{auth:r}=t,s={idToken:await t.getIdToken(),returnSecureToken:!0};e&&(s.email=e),n&&(s.password=n);const o=await tr(t,s1(r,s));await t._updateTokensIfNecessary(o,!0)}/**
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
 */function fP(t){var e,n;if(!t)return null;const{providerId:r}=t,i=t.rawUserInfo?JSON.parse(t.rawUserInfo):{},s=t.isNewUser||t.kind==="identitytoolkit#SignupNewUserResponse";if(!r&&(t==null?void 0:t.idToken)){const o=(n=(e=Ac(t.idToken))===null||e===void 0?void 0:e.firebase)===null||n===void 0?void 0:n.sign_in_provider;if(o){const a=o!=="anonymous"&&o!=="custom"?o:null;return new Qs(s,a)}}if(!r)return null;switch(r){case"facebook.com":return new pP(s,i);case"github.com":return new mP(s,i);case"google.com":return new gP(s,i);case"twitter.com":return new yP(s,i,t.screenName||null);case"custom":case"anonymous":return new Qs(s,null);default:return new Qs(s,r,i)}}class Qs{constructor(e,n,r={}){this.isNewUser=e,this.providerId=n,this.profile=r}}class g1 extends Qs{constructor(e,n,r,i){super(e,n,r);this.username=i}}class pP extends Qs{constructor(e,n){super(e,"facebook.com",n)}}class mP extends g1{constructor(e,n){super(e,"github.com",n,typeof(n==null?void 0:n.login)=="string"?n==null?void 0:n.login:null)}}class gP extends Qs{constructor(e,n){super(e,"google.com",n)}}class yP extends g1{constructor(e,n,r){super(e,"twitter.com",n,r)}}function vP(t){const{user:e,_tokenResponse:n}=t;return e.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:fP(n)}class Ni{constructor(e,n){this.type=e,this.credential=n}static _fromIdtoken(e){return new Ni("enroll",e)}static _fromMfaPendingCredential(e){return new Ni("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var n,r;if(e==null?void 0:e.multiFactorSession){if((n=e.multiFactorSession)===null||n===void 0?void 0:n.pendingCredential)return Ni._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if((r=e.multiFactorSession)===null||r===void 0?void 0:r.idToken)return Ni._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zp{constructor(e,n,r){this.session=e,this.hints=n,this.signInResolver=r}static _fromError(e,n){const r=He(e),i=(n.serverResponse.mfaInfo||[]).map(o=>Lc._fromServerResponse(r,o));A(n.serverResponse.mfaPendingCredential,r,"internal-error");const s=Ni._fromMfaPendingCredential(n.serverResponse.mfaPendingCredential);return new Zp(s,i,async o=>{const a=await o._process(r,s);delete n.serverResponse.mfaInfo,delete n.serverResponse.mfaPendingCredential;const u=Object.assign(Object.assign({},n.serverResponse),{idToken:a.idToken,refreshToken:a.refreshToken});switch(n.operationType){case"signIn":const l=await cn._fromIdTokenResponse(r,n.operationType,u);return await r._updateCurrentUser(l.user),l;case"reauthenticate":return A(n.user,r,"internal-error"),cn._forOperation(n.user,n.operationType,u);default:st(r,"internal-error")}})}async resolveSignIn(e){const n=e;return this.signInResolver(n)}}function wP(t,e){var n;const r=B(t),i=e;return A(e.operationType,r,"argument-error"),A((n=i.serverResponse)===null||n===void 0?void 0:n.mfaPendingCredential,r,"argument-error"),Zp._fromError(r,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _P(t,e){return qe(t,"POST","/v2/accounts/mfaEnrollment:start",Ue(t,e))}function IP(t,e){return qe(t,"POST","/v2/accounts/mfaEnrollment:finalize",Ue(t,e))}function EP(t,e){return qe(t,"POST","/v2/accounts/mfaEnrollment:withdraw",Ue(t,e))}class em{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(n=>{n.mfaInfo&&(this.enrolledFactors=n.mfaInfo.map(r=>Lc._fromServerResponse(e.auth,r)))})}static _fromUser(e){return new em(e)}async getSession(){return Ni._fromIdtoken(await this.user.getIdToken())}async enroll(e,n){const r=e,i=await this.getSession(),s=await tr(this.user,r._process(this.user.auth,i,n));return await this.user._updateTokensIfNecessary(s),this.user.reload()}async unenroll(e){const n=typeof e=="string"?e:e.uid,r=await this.user.getIdToken(),i=await tr(this.user,EP(this.user.auth,{idToken:r,mfaEnrollmentId:n}));this.enrolledFactors=this.enrolledFactors.filter(({uid:s})=>s!==n),await this.user._updateTokensIfNecessary(i);try{await this.user.reload()}catch(s){if(s.code!=="auth/user-token-expired")throw s}}}const tm=new WeakMap;function TP(t){const e=B(t);return tm.has(e)||tm.set(e,em._fromUser(e)),tm.get(e)}const $c="__sak";/**
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
 */class y1{constructor(e,n){this.storage=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem($c,"1"),this.storage.removeItem($c),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SP(){const t=ye();return Yp(t)||Hs(t)}const kP=1e3,CP=10;class v1 extends y1{constructor(){super(window.localStorage,"LOCAL");this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=SP()&&SN(),this.fallbackToPolling=Z_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,u)=>{this.notifyListeners(o,u)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);TN()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,CP):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},kP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}v1.type="LOCAL";const nm=v1;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w1 extends y1{constructor(){super(window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}w1.type="SESSION";const Pi=w1;/**
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
 */function bP(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Uc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Uc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o==null?void 0:o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async l=>l(n.origin,s)),u=await bP(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Uc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qa(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class AP{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,u)=>{const l=Qa("",20);i.port1.start();const c=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(c),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fe(){return window}function RP(t){Fe().location.href=t}/**
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
 */function rm(){return typeof Fe().WorkerGlobalScope!="undefined"&&typeof Fe().importScripts=="function"}async function NP(){if(!(navigator==null?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function PP(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function xP(){return rm()?self:null}/**
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
 */const _1="firebaseLocalStorageDb",DP=1,Fc="firebaseLocalStorage",I1="fbase_key";class Ya{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Vc(t,e){return t.transaction([Fc],e?"readwrite":"readonly").objectStore(Fc)}function OP(){const t=indexedDB.deleteDatabase(_1);return new Ya(t).toPromise()}function im(){const t=indexedDB.open(_1,DP);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Fc,{keyPath:I1})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Fc)?e(r):(r.close(),await OP(),e(await im()))})})}async function E1(t,e,n){const r=Vc(t,!0).put({[I1]:e,value:n});return new Ya(r).toPromise()}async function LP(t,e){const n=Vc(t,!1).get(e),r=await new Ya(n).toPromise();return r===void 0?null:r.value}function T1(t,e){const n=Vc(t,!0).delete(e);return new Ya(n).toPromise()}const MP=800,$P=3;class S1{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await im(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>$P)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return rm()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Uc._getInstance(xP()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await NP(),!this.activeServiceWorker)return;this.sender=new AP(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||PP()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await im();return await E1(e,$c,"1"),await T1(e,$c),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>E1(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>LP(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>T1(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Vc(i,!1).getAll();return new Ya(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),MP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}S1.type="LOCAL";const Bc=S1;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UP(t,e){return qe(t,"POST","/v2/accounts/mfaSignIn:start",Ue(t,e))}function FP(t,e){return qe(t,"POST","/v2/accounts/mfaSignIn:finalize",Ue(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VP(t){return(await qe(t,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BP(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function k1(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=ot("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",BP().appendChild(r)})}function C1(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zP=500,jP=6e4,zc=1e12;class qP{constructor(e){this.auth=e,this.counter=zc,this._widgets=new Map}render(e,n){const r=this.counter;return this._widgets.set(r,new HP(e,this.auth.name,n||{})),this.counter++,r}reset(e){var n;const r=e||zc;(n=this._widgets.get(r))===null||n===void 0||n.delete(),this._widgets.delete(r)}getResponse(e){var n;const r=e||zc;return((n=this._widgets.get(r))===null||n===void 0?void 0:n.getResponse())||""}async execute(e){var n;const r=e||zc;return(n=this._widgets.get(r))===null||n===void 0||n.execute(),""}}class HP{constructor(e,n,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;A(i,"argument-error",{appName:n}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=WP(50);const{callback:e,"expired-callback":n}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,n)try{n()}catch{}this.isVisible&&this.execute()},jP)},zP))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function WP(t){const e=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<t;r++)e.push(n.charAt(Math.floor(Math.random()*n.length)));return e.join("")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sm=C1("rcb"),GP=new za(3e4,6e4),KP="https://www.google.com/recaptcha/api.js?";class QP{constructor(){this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!Fe().grecaptcha}load(e,n=""){return A(YP(n),e,"argument-error"),this.shouldResolveImmediately(n)?Promise.resolve(Fe().grecaptcha):new Promise((r,i)=>{const s=Fe().setTimeout(()=>{i(ot(e,"network-request-failed"))},GP.get());Fe()[sm]=()=>{Fe().clearTimeout(s),delete Fe()[sm];const a=Fe().grecaptcha;if(!a){i(ot(e,"internal-error"));return}const u=a.render;a.render=(l,c)=>{const h=u(l,c);return this.counter++,h},this.hostLanguage=n,r(a)};const o=`${KP}?${Fs({onload:sm,render:"explicit",hl:n})}`;k1(o).catch(()=>{clearTimeout(s),i(ot(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){return!!Fe().grecaptcha&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function YP(t){return t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t)}class XP{async load(e){return new qP(e)}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b1="recaptcha",JP={theme:"light",type:"image"};class ZP{constructor(e,n=Object.assign({},JP),r){this.parameters=n,this.type=b1,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=He(r),this.isInvisible=this.parameters.size==="invisible",A(typeof document!="undefined",this.auth,"operation-not-supported-in-this-environment");const i=typeof e=="string"?document.getElementById(e):e;A(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new XP:new QP,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),n=this.getAssertedRecaptcha(),r=n.getResponse(e);return r||new Promise(i=>{const s=o=>{!o||(this.tokenChangeListeners.delete(s),i(o))};this.tokenChangeListeners.add(s),this.isInvisible&&n.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){A(!this.parameters.sitekey,this.auth,"argument-error"),A(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),A(typeof document!="undefined",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return n=>{if(this.tokenChangeListeners.forEach(r=>r(n)),typeof e=="function")e(n);else if(typeof e=="string"){const r=Fe()[e];typeof r=="function"&&r(n)}}}assertNotDestroyed(){A(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const n=document.createElement("div");e.appendChild(n),e=n}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){A(Wp()&&!rm(),this.auth,"internal-error"),await ex(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await VP(this.auth);A(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return A(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function ex(){let t=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}t=()=>e(),window.addEventListener("load",t)}).catch(e=>{throw t&&window.removeEventListener("load",t),e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class om{constructor(e,n){this.verificationId=e,this.onConfirmation=n}confirm(e){const n=Ri._fromVerification(this.verificationId,e);return this.onConfirmation(n)}}async function tx(t,e,n){const r=He(t),i=await jc(r,e,B(n));return new om(i,s=>Oc(r,s))}async function nx(t,e,n){const r=B(t);await Dc(!1,r,"phone");const i=await jc(r.auth,e,B(n));return new om(i,s=>d1(r,s))}async function rx(t,e,n){const r=B(t),i=await jc(r.auth,e,B(n));return new om(i,s=>f1(r,s))}async function jc(t,e,n){var r;const i=await n.verify();try{A(typeof i=="string",t,"argument-error"),A(n.type===b1,t,"argument-error");let s;if(typeof e=="string"?s={phoneNumber:e}:s=e,"session"in s){const o=s.session;if("phoneNumber"in s)return A(o.type==="enroll",t,"internal-error"),(await _P(t,{idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}})).phoneSessionInfo.sessionInfo;{A(o.type==="signin",t,"internal-error");const a=((r=s.multiFactorHint)===null||r===void 0?void 0:r.uid)||s.multiFactorUid;return A(a,t,"missing-multi-factor-info"),(await UP(t,{mfaPendingCredential:o.credential,mfaEnrollmentId:a,phoneSignInInfo:{recaptchaToken:i}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:o}=await UN(t,{phoneNumber:s.phoneNumber,recaptchaToken:i});return o}}finally{n._reset()}}async function ix(t,e){await Xp(B(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn{constructor(e){this.providerId=Tn.PROVIDER_ID,this.auth=He(e)}verifyPhoneNumber(e,n){return jc(this.auth,e,B(n))}static credential(e,n){return Ri._fromVerification(e,n)}static credentialFromResult(e){const n=e;return Tn.credentialFromTaggedObject(n)}static credentialFromError(e){return Tn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:n,temporaryProof:r}=e;return n&&r?Ri._fromTokenResponse(n,r):null}}Tn.PROVIDER_ID="phone";Tn.PHONE_SIGN_IN_METHOD="phone";/**
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
 */function xi(t,e){return e?Yt(e):(A(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class am extends Ws{constructor(e){super("custom","custom");this.params=e}_getIdTokenResponse(e){return nr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return nr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return nr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function sx(t){return h1(t.auth,new am(t),t.bypassAuthState)}function ox(t){const{auth:e,user:n}=t;return A(n,e,"internal-error"),c1(n,new am(t),t.bypassAuthState)}async function ax(t){const{auth:e,user:n}=t;return A(n,e,"internal-error"),Xp(n,new am(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A1{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(u))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return sx;case"linkViaPopup":case"linkViaRedirect":return ax;case"reauthViaPopup":case"reauthViaRedirect":return ox;default:st(this.auth,"internal-error")}}resolve(e){En(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){En(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ux=new za(2e3,1e4);async function lx(t,e,n){const r=He(t);js(t,e,qr);const i=xi(r,n);return new rr(r,"signInViaPopup",e,i).executeNotNull()}async function cx(t,e,n){const r=B(t);js(r.auth,e,qr);const i=xi(r.auth,n);return new rr(r.auth,"reauthViaPopup",e,i,r).executeNotNull()}async function hx(t,e,n){const r=B(t);js(r.auth,e,qr);const i=xi(r.auth,n);return new rr(r.auth,"linkViaPopup",e,i,r).executeNotNull()}class rr extends A1{constructor(e,n,r,i,s){super(e,n,i,s);this.provider=r,this.authWindow=null,this.pollId=null,rr.currentPopupAction&&rr.currentPopupAction.cancel(),rr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return A(e,this.auth,"internal-error"),e}async onExecution(){En(this.filter.length===1,"Popup operations only handle one event");const e=Qa();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(ot(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(ot(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,rr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0?void 0:r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ot(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,ux.get())};e()}}rr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dx="pendingRedirect",um=new Map;class fx extends A1{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r);this.eventId=null}async execute(){let e=um.get(this.auth._key());if(!e){try{const r=await px(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}um.set(this.auth._key(),e)}return e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function px(t,e){const n=R1(e),r=await cm(t)._get(n)==="true";return await cm(t)._remove(n),r}async function lm(t,e){return cm(t)._set(R1(e),"true")}function mx(){um.clear()}function cm(t){return Yt(t._redirectPersistence)}function R1(t){return Ai(dx,t.config.apiKey,t.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gx(t,e,n){return yx(t,e,n)}async function yx(t,e,n){const r=He(t);js(t,e,qr);const i=xi(r,n);return await lm(i,r),i._openRedirect(r,e,"signInViaRedirect")}function vx(t,e,n){return wx(t,e,n)}async function wx(t,e,n){const r=B(t);js(r.auth,e,qr);const i=xi(r.auth,n);await lm(i,r.auth);const s=await N1(r);return i._openRedirect(r.auth,e,"reauthViaRedirect",s)}function _x(t,e,n){return Ix(t,e,n)}async function Ix(t,e,n){const r=B(t);js(r.auth,e,qr);const i=xi(r.auth,n);await Dc(!1,r,e.providerId),await lm(i,r.auth);const s=await N1(r);return i._openRedirect(r.auth,e,"linkViaRedirect",s)}async function Ex(t,e){return await He(t)._initializationPromise,qc(t,e,!1)}async function qc(t,e,n=!1){const r=He(t),i=xi(r,e),o=await new fx(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}async function N1(t){const e=Qa(`${t.uid}:::`);return t._redirectEventId=e,await t.auth._setRedirectUser(t),await t.auth._persistUserIfCurrent(t),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tx=10*60*1e3;class P1{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Sx(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!D1(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(ot(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Tx&&this.cachedEventUids.clear(),this.cachedEventUids.has(x1(e))}saveEventToCache(e){this.cachedEventUids.add(x1(e)),this.lastProcessedEventTime=Date.now()}}function x1(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function D1({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Sx(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return D1(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function O1(t,e={}){return qe(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kx=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Cx=/^https?/;async function bx(t){if(t.config.emulator)return;const{authorizedDomains:e}=await O1(t);for(const n of e)try{if(Ax(n))return}catch{}st(t,"unauthorized-domain")}function Ax(t){const e=Ba(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Cx.test(n))return!1;if(kx.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const Rx=new za(3e4,6e4);function L1(){const t=Fe().___jsl;if(t==null?void 0:t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Nx(t){return new Promise((e,n)=>{var r,i,s;function o(){L1(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{L1(),n(ot(t,"network-request-failed"))},timeout:Rx.get()})}if((i=(r=Fe().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0?void 0:i.Iframe)e(gapi.iframes.getContext());else if((s=Fe().gapi)===null||s===void 0?void 0:s.load)o();else{const a=C1("iframefcb");return Fe()[a]=()=>{gapi.load?o():n(ot(t,"network-request-failed"))},k1(`https://apis.google.com/js/api.js?onload=${a}`)}}).catch(e=>{throw Hc=null,e})}let Hc=null;function Px(t){return Hc=Hc||Nx(t),Hc}/**
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
 */const xx=new za(5e3,15e3),Dx="__/auth/iframe",Ox="emulator/auth/iframe",Lx={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"}},Mx=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function $x(t){const e=t.config;A(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Gp(e,Ox):`https://${t.config.authDomain}/${Dx}`,r={apiKey:e.apiKey,appName:t.name,v:Br},i=Mx.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Fs(r).slice(1)}`}async function Ux(t){const e=await Px(t),n=Fe().gapi;return A(n,t,"internal-error"),e.open({where:document.body,url:$x(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Lx,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=ot(t,"network-request-failed"),a=Fe().setTimeout(()=>{s(o)},xx.get());function u(){Fe().clearTimeout(a),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
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
 */const Fx={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Vx=500,Bx=600,zx="_blank",jx="http://localhost";class M1{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function qx(t,e,n,r=Vx,i=Bx){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const u=Object.assign(Object.assign({},Fx),{width:r.toString(),height:i.toString(),top:s,left:o}),l=ye().toLowerCase();n&&(a=Q_(l)?zx:n),K_(l)&&(e=e||jx,u.scrollbars="yes");const c=Object.entries(u).reduce((d,[g,y])=>`${d}${g}=${y},`,"");if(EN(l)&&a!=="_self")return Hx(e||"",a),new M1(null);const h=window.open(e||"",a,c);A(h,t,"popup-blocked");try{h.focus()}catch{}return new M1(h)}function Hx(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const Wx="__/auth/handler",Gx="emulator/auth/handler";function hm(t,e,n,r,i,s){A(t.config.authDomain,t,"auth-domain-config-required"),A(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Br,eventId:i};if(e instanceof qr){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",YA(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,l]of Object.entries(s||{}))o[u]=l}if(e instanceof Gs){const u=e.getScopes().filter(l=>l!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];return`${Kx(t)}?${Fs(a).slice(1)}`}function Kx({config:t}){return t.emulator?Gp(t,Gx):`https://${t.authDomain}/${Wx}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dm="webStorageSupport";class Qx{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Pi,this._completeRedirectFn=qc}async _openPopup(e,n,r,i){var s;En((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=hm(e,n,r,Ba(),i);return qx(e,o,Qa())}async _openRedirect(e,n,r,i){return await this._originValidation(e),RP(hm(e,n,r,Ba(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(En(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r}async initAndGetManager(e){const n=await Ux(e),r=new P1(e);return n.register("authEvent",i=>(A(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(dm,{type:dm},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[dm];o!==void 0&&n(!!o),st(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=bx(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Z_()||Yp()||Hs()}}const Yx=Qx;class Xx{constructor(e){this.factorId=e}_process(e,n,r){switch(n.type){case"enroll":return this._finalizeEnroll(e,n.credential,r);case"signin":return this._finalizeSignIn(e,n.credential);default:return Dn("unexpected MultiFactorSessionType")}}}class fm extends Xx{constructor(e){super("phone");this.credential=e}static _fromCredential(e){return new fm(e)}_finalizeEnroll(e,n,r){return IP(e,{idToken:n,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,n){return FP(e,{mfaPendingCredential:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class $1{constructor(){}static assertion(e){return fm._fromCredential(e)}}$1.FACTOR_ID="phone";var U1="@firebase/auth",F1="0.18.3";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jx{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{var i;e(((i=r)===null||i===void 0?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){A(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zx(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function eD(t){Vr(new In("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),{apiKey:i,authDomain:s}=r.options;return(o=>{A(i&&!i.includes(":"),"invalid-api-key",{appName:o.name}),A(!(s==null?void 0:s.includes(":")),"argument-error",{appName:o.name});const a={apiKey:i,authDomain:s,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:e1(t)},u=new kN(o,a);return iN(u,n),u})(r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Vr(new In("auth-internal",e=>{const n=He(e.getProvider("auth").getImmediate());return(r=>new Jx(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),ln(U1,F1,Zx(t)),ln(U1,F1,"esm2017")}eD("Browser");/**
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
 */function Di(){return window}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tD=2e3;async function nD(t,e,n){var r;const{BuildInfo:i}=Di();En(e.sessionId,"AuthEvent did not contain a session ID");const s=await aD(e.sessionId),o={};return Hs()?o.ibi=i.packageName:Ga()?o.apn=i.packageName:st(t,"operation-not-supported-in-this-environment"),i.displayName&&(o.appDisplayName=i.displayName),o.sessionId=s,hm(t,n,e.type,void 0,(r=e.eventId)!==null&&r!==void 0?r:void 0,o)}async function rD(t){const{BuildInfo:e}=Di(),n={};Hs()?n.iosBundleId=e.packageName:Ga()?n.androidPackageName=e.packageName:st(t,"operation-not-supported-in-this-environment"),await O1(t,n)}function iD(t){const{cordova:e}=Di();return new Promise(n=>{e.plugins.browsertab.isAvailable(r=>{let i=null;r?e.plugins.browsertab.openUrl(t):i=e.InAppBrowser.open(t,IN()?"_blank":"_system","location=yes"),n(i)})})}async function sD(t,e,n){const{cordova:r}=Di();let i=()=>{};try{await new Promise((s,o)=>{let a=null;function u(){var h;s();const d=(h=r.plugins.browsertab)===null||h===void 0?void 0:h.close;typeof d=="function"&&d(),typeof(n==null?void 0:n.close)=="function"&&n.close()}function l(){a||(a=window.setTimeout(()=>{o(ot(t,"redirect-cancelled-by-user"))},tD))}function c(){(document==null?void 0:document.visibilityState)==="visible"&&l()}e.addPassiveListener(u),document.addEventListener("resume",l,!1),Ga()&&document.addEventListener("visibilitychange",c,!1),i=()=>{e.removePassiveListener(u),document.removeEventListener("resume",l,!1),document.removeEventListener("visibilitychange",c,!1),a&&window.clearTimeout(a)}})}finally{i()}}function oD(t){var e,n,r,i,s,o,a,u,l,c;const h=Di();A(typeof((e=h==null?void 0:h.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),A(typeof((n=h==null?void 0:h.BuildInfo)===null||n===void 0?void 0:n.packageName)!="undefined",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),A(typeof((s=(i=(r=h==null?void 0:h.cordova)===null||r===void 0?void 0:r.plugins)===null||i===void 0?void 0:i.browsertab)===null||s===void 0?void 0:s.openUrl)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),A(typeof((u=(a=(o=h==null?void 0:h.cordova)===null||o===void 0?void 0:o.plugins)===null||a===void 0?void 0:a.browsertab)===null||u===void 0?void 0:u.isAvailable)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),A(typeof((c=(l=h==null?void 0:h.cordova)===null||l===void 0?void 0:l.InAppBrowser)===null||c===void 0?void 0:c.open)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function aD(t){const e=uD(t),n=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(n)).map(i=>i.toString(16).padStart(2,"0")).join("")}function uD(t){if(En(/[0-9a-zA-Z]+/.test(t),"Can only convert alpha-numeric strings"),typeof TextEncoder!="undefined")return new TextEncoder().encode(t);const e=new ArrayBuffer(t.length),n=new Uint8Array(e);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lD=20;class cD extends P1{constructor(){super(...arguments);this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach(n=>n(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function hD(t,e,n=null){return{type:e,eventId:n,urlResponse:null,sessionId:pD(),postBody:null,tenantId:t.tenantId,error:ot(t,"no-auth-event")}}function dD(t,e){return pm()._set(mm(t),e)}async function V1(t){const e=await pm()._get(mm(t));return e&&await pm()._remove(mm(t)),e}function fD(t,e){var n,r;const i=gD(e);if(i.includes("/__/auth/callback")){const s=Wc(i),o=s.firebaseError?mD(decodeURIComponent(s.firebaseError)):null,a=(r=(n=o==null?void 0:o.code)===null||n===void 0?void 0:n.split("auth/"))===null||r===void 0?void 0:r[1],u=a?ot(a):null;return u?{type:t.type,eventId:t.eventId,tenantId:t.tenantId,error:u,urlResponse:null,sessionId:null,postBody:null}:{type:t.type,eventId:t.eventId,tenantId:t.tenantId,sessionId:t.sessionId,urlResponse:i,postBody:null}}return null}function pD(){const t=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<lD;n++){const r=Math.floor(Math.random()*e.length);t.push(e.charAt(r))}return t.join("")}function pm(){return Yt(nm)}function mm(t){return Ai("authEvent",t.config.apiKey,t.name)}function mD(t){try{return JSON.parse(t)}catch{return null}}function gD(t){const e=Wc(t),n=e.link?decodeURIComponent(e.link):void 0,r=Wc(n).link,i=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return Wc(i).link||i||r||n||t}function Wc(t){if(!(t==null?void 0:t.includes("?")))return{};const[e,...n]=t.split("?");return Vs(n.join("?"))}/**
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
 */const yD=500;class vD{constructor(){this._redirectPersistence=Pi,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=qc}async _initialize(e){const n=e._key();let r=this.eventManagers.get(n);return r||(r=new cD(e),this.eventManagers.set(n,r),this.attachCallbackListeners(e,r)),r}_openPopup(e){st(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,n,r,i){oD(e);const s=await this._initialize(e);await s.initialized(),s.resetRedirect(),mx(),await this._originValidation(e);const o=hD(e,r,i);await dD(e,o);const a=await nD(e,o,n),u=await iD(a);return sD(e,s,u)}_isIframeWebStorageSupported(e,n){throw new Error("Method not implemented.")}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=rD(e)),this.originValidationPromises[n]}attachCallbackListeners(e,n){const{universalLinks:r,handleOpenURL:i,BuildInfo:s}=Di(),o=setTimeout(async()=>{await V1(e),n.onEvent(B1())},yD),a=async c=>{clearTimeout(o);const h=await V1(e);let d=null;h&&(c==null?void 0:c.url)&&(d=fD(h,c.url)),n.onEvent(d||B1())};typeof r!="undefined"&&typeof r.subscribe=="function"&&r.subscribe(null,a);const u=i,l=`${s.packageName.toLowerCase()}://`;Di().handleOpenURL=async c=>{if(c.toLowerCase().startsWith(l)&&a({url:c}),typeof u=="function")try{u(c)}catch(h){console.error(h)}}}}const wD=vD;function B1(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:ot("no-auth-event")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _D(t,e){He(t)._logFramework(e)}var ID="@firebase/auth-compat",ED="0.1.6";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TD=1e3;function Gc(){var t;return((t=self==null?void 0:self.location)===null||t===void 0?void 0:t.protocol)||null}function SD(){return Gc()==="http:"||Gc()==="https:"}function z1(t=ye()){return!!((Gc()==="file:"||Gc()==="ionic:")&&t.toLowerCase().match(/iphone|ipad|ipod|android/))}function kD(){return Ic()||Lp()}function CD(){return $p()&&(document==null?void 0:document.documentMode)===11}function bD(t=ye()){return/Edge\/\d+/.test(t)}function AD(t=ye()){return CD()||bD(t)}function j1(){try{const t=self.localStorage,e=Qa();if(t)return t.setItem(e,"1"),t.removeItem(e),AD()?Ec():!0}catch{return gm()&&Ec()}return!1}function gm(){return typeof global!="undefined"&&"WorkerGlobalScope"in global&&"importScripts"in global}function ym(){return(SD()||Mp()||z1())&&!kD()&&j1()&&!gm()}function q1(){return z1()&&typeof document!="undefined"}async function RD(){return q1()?new Promise(t=>{const e=setTimeout(()=>{t(!1)},TD);document.addEventListener("deviceready",()=>{clearTimeout(e),t(!0)})}):!1}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xt={LOCAL:"local",NONE:"none",SESSION:"session"},Xa=A,H1="persistence";function ND(t,e){if(Xa(Object.values(Xt).includes(e),t,"invalid-persistence-type"),Ic()){Xa(e!==Xt.SESSION,t,"unsupported-persistence-type");return}if(Lp()){Xa(e===Xt.NONE,t,"unsupported-persistence-type");return}if(gm()){Xa(e===Xt.NONE||e===Xt.LOCAL&&Ec(),t,"unsupported-persistence-type");return}Xa(e===Xt.NONE||j1(),t,"unsupported-persistence-type")}async function vm(t){await t._initializationPromise;const e=W1(),n=Ai(H1,t.config.apiKey,t.name);(e==null?void 0:e.sessionStorage)&&e.sessionStorage.setItem(n,t._getPersistence())}function PD(t,e){const n=W1();if(!(n==null?void 0:n.sessionStorage))return[];const r=Ai(H1,t,e);switch(n.sessionStorage.getItem(r)){case Xt.NONE:return[Wa];case Xt.LOCAL:return[Bc,Pi];case Xt.SESSION:return[Pi];default:return[]}}function W1(){return typeof window!="undefined"?window:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xD=A;class Hr{constructor(){this.browserResolver=Yt(Yx),this.cordovaResolver=Yt(wD),this.underlyingResolver=null,this._redirectPersistence=Pi,this._completeRedirectFn=qc}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,n,r,i)}async _openRedirect(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,n,r,i)}_isIframeWebStorageSupported(e,n){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,n)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return q1()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return xD(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await RD();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G1(t){return t.unwrap()}function DD(t){return t.wrapped()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OD(t){return K1(t)}function LD(t,e){var n;const r=(n=e.customData)===null||n===void 0?void 0:n._tokenResponse;if(e.code==="auth/multi-factor-auth-required"){const i=e;i.resolver=new MD(t,wP(t,e))}else if(r){const i=K1(e),s=e;i&&(s.credential=i,s.tenantId=r.tenantId||void 0,s.email=r.email||void 0,s.phoneNumber=r.phoneNumber||void 0)}}function K1(t){const{_tokenResponse:e}=t instanceof Qt?t.customData:t;if(!e)return null;if(!(t instanceof Qt)&&"temporaryProof"in e&&"phoneNumber"in e)return Tn.credentialFromResult(t);const n=e.providerId;if(!n||n===Va.PASSWORD)return null;let r;switch(n){case Va.GOOGLE:r=Mn;break;case Va.FACEBOOK:r=Ln;break;case Va.GITHUB:r=$n;break;case Va.TWITTER:r=Un;break;default:const{oauthIdToken:i,oauthAccessToken:s,oauthTokenSecret:o,pendingToken:a,nonce:u}=e;return!s&&!o&&!i&&!a?null:a?n.startsWith("saml.")?Pc._create(n,a):On._fromParams({providerId:n,signInMethod:n,pendingToken:a,idToken:i,accessToken:s}):new Ks(n).credential({idToken:i,accessToken:s,rawNonce:u})}return t instanceof Qt?r.credentialFromError(t):r.credentialFromResult(t)}function zt(t,e){return e.catch(n=>{throw n instanceof Qt&&LD(t,n),n}).then(n=>{const r=n.operationType,i=n.user;return{operationType:r,credential:OD(n),additionalUserInfo:vP(n),user:ir.getOrCreate(i)}})}async function wm(t,e){const n=await e;return{verificationId:n.verificationId,confirm:r=>zt(t,n.confirm(r))}}class MD{constructor(e,n){this.resolver=n,this.auth=DD(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return zt(G1(this.auth),this.resolver.resolveSignIn(e))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir{constructor(e){this._delegate=e,this.multiFactor=TP(e)}static getOrCreate(e){return ir.USER_MAP.has(e)||ir.USER_MAP.set(e,new ir(e)),ir.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return zt(this.auth,d1(this._delegate,e))}async linkWithPhoneNumber(e,n){return wm(this.auth,nx(this._delegate,e,n))}async linkWithPopup(e){return zt(this.auth,hx(this._delegate,e,Hr))}async linkWithRedirect(e){return await vm(He(this.auth)),_x(this._delegate,e,Hr)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return zt(this.auth,f1(this._delegate,e))}reauthenticateWithPhoneNumber(e,n){return wm(this.auth,rx(this._delegate,e,n))}reauthenticateWithPopup(e){return zt(this.auth,cx(this._delegate,e,Hr))}async reauthenticateWithRedirect(e){return await vm(He(this.auth)),vx(this._delegate,e,Hr)}sendEmailVerification(e){return aP(this._delegate,e)}async unlink(e){return await GN(this._delegate,e),this}updateEmail(e){return hP(this._delegate,e)}updatePassword(e){return dP(this._delegate,e)}updatePhoneNumber(e){return ix(this._delegate,e)}updateProfile(e){return cP(this._delegate,e)}verifyBeforeUpdateEmail(e,n){return uP(this._delegate,e,n)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}ir.USER_MAP=new WeakMap;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ja=A;class _m{constructor(e,n){if(this.app=e,n.isInitialized()){this._delegate=n.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:r}=e.options;Ja(r,"invalid-api-key",{appName:e.name});let i=[Wa];if(typeof window!="undefined"){i=PD(r,e.name);for(const o of[Bc,nm,Pi])i.includes(o)||i.push(o)}Ja(r,"invalid-api-key",{appName:e.name});const s=typeof window!="undefined"?Hr:void 0;this._delegate=n.initialize({options:{persistence:i,popupRedirectResolver:s}}),this._delegate._updateErrorMap(nN),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?ir.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,n){CN(this._delegate,e,n)}applyActionCode(e){return JN(this._delegate,e)}checkActionCode(e){return p1(this._delegate,e)}confirmPasswordReset(e,n){return XN(this._delegate,e,n)}async createUserWithEmailAndPassword(e,n){return zt(this._delegate,eP(this._delegate,e,n))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return oP(this._delegate,e)}isSignInWithEmailLink(e){return rP(this._delegate,e)}async getRedirectResult(){Ja(ym(),this._delegate,"operation-not-supported-in-this-environment");const e=await Ex(this._delegate,Hr);return e?zt(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){_D(this._delegate,e)}onAuthStateChanged(e,n,r){const{next:i,error:s,complete:o}=Q1(e,n,r);return this._delegate.onAuthStateChanged(i,s,o)}onIdTokenChanged(e,n,r){const{next:i,error:s,complete:o}=Q1(e,n,r);return this._delegate.onIdTokenChanged(i,s,o)}sendSignInLinkToEmail(e,n){return nP(this._delegate,e,n)}sendPasswordResetEmail(e,n){return YN(this._delegate,e,n||void 0)}async setPersistence(e){ND(this._delegate,e);let n;switch(e){case Xt.SESSION:n=Pi;break;case Xt.LOCAL:n=await Yt(Bc)._isAvailable()?Bc:nm;break;case Xt.NONE:n=Wa;break;default:return st("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(n)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return zt(this._delegate,WN(this._delegate))}signInWithCredential(e){return zt(this._delegate,Oc(this._delegate,e))}signInWithCustomToken(e){return zt(this._delegate,QN(this._delegate,e))}signInWithEmailAndPassword(e,n){return zt(this._delegate,tP(this._delegate,e,n))}signInWithEmailLink(e,n){return zt(this._delegate,iP(this._delegate,e,n))}signInWithPhoneNumber(e,n){return wm(this._delegate,tx(this._delegate,e,n))}async signInWithPopup(e){return Ja(ym(),this._delegate,"operation-not-supported-in-this-environment"),zt(this._delegate,lx(this._delegate,e,Hr))}async signInWithRedirect(e){return Ja(ym(),this._delegate,"operation-not-supported-in-this-environment"),await vm(this._delegate),gx(this._delegate,e,Hr)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return ZN(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}_m.Persistence=Xt;function Q1(t,e,n){let r=t;typeof t!="function"&&({next:r,error:e,complete:n}=t);const i=r;return{next:o=>i(o&&ir.getOrCreate(o)),error:e,complete:n}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Im{constructor(){this.providerId="phone",this._delegate=new Tn(G1(Bs.auth()))}static credential(e,n){return Tn.credential(e,n)}verifyPhoneNumber(e,n){return this._delegate.verifyPhoneNumber(e,n)}unwrap(){return this._delegate}}Im.PHONE_SIGN_IN_METHOD=Tn.PHONE_SIGN_IN_METHOD;Im.PROVIDER_ID=Tn.PROVIDER_ID;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $D=A;class UD{constructor(e,n,r=Bs.app()){var i;$D((i=r.options)===null||i===void 0?void 0:i.apiKey,"invalid-api-key",{appName:r.name}),this._delegate=new ZP(e,n,r.auth()),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FD="auth-compat";function VD(t){t.INTERNAL.registerComponent(new In(FD,e=>{const n=e.getProvider("app-compat").getImmediate(),r=e.getProvider("auth");return new _m(n,r)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:zs.EMAIL_SIGNIN,PASSWORD_RESET:zs.PASSWORD_RESET,RECOVER_EMAIL:zs.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:zs.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:zs.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:zs.VERIFY_EMAIL}},EmailAuthProvider:jr,FacebookAuthProvider:Ln,GithubAuthProvider:$n,GoogleAuthProvider:Mn,OAuthProvider:Ks,PhoneAuthProvider:Im,PhoneMultiFactorGenerator:$1,RecaptchaVerifier:UD,TwitterAuthProvider:Un,Auth:_m,AuthCredential:Ws,Error:Qt}).setInstantiationMode("LAZY").setMultipleInstances(!1)),t.registerVersion(ID,ED)}VD(Bs);var BD=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},$,Em=Em||{},G=BD||self;function Kc(){}function Tm(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Za(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function zD(t){return Object.prototype.hasOwnProperty.call(t,Sm)&&t[Sm]||(t[Sm]=++jD)}var Sm="closure_uid_"+(1e9*Math.random()>>>0),jD=0;function qD(t,e,n){return t.call.apply(t.bind,arguments)}function HD(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function at(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?at=qD:at=HD,at.apply(null,arguments)}function Qc(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function ut(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function Wr(){this.s=this.s,this.o=this.o}var WD=0,GD={};Wr.prototype.s=!1;Wr.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),WD!=0)){var t=zD(this);delete GD[t]}};Wr.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Y1=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},X1=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const r=t.length,i=typeof t=="string"?t.split(""):t;for(let s=0;s<r;s++)s in i&&e.call(n,i[s],s,t)};function KD(t){e:{var e=FO;const n=t.length,r=typeof t=="string"?t.split(""):t;for(let i=0;i<n;i++)if(i in r&&e.call(void 0,r[i],i,t)){e=i;break e}e=-1}return 0>e?null:typeof t=="string"?t.charAt(e):t[e]}function J1(t){return Array.prototype.concat.apply([],arguments)}function km(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function Yc(t){return/^[\s\xa0]*$/.test(t)}var Z1=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Rt(t,e){return t.indexOf(e)!=-1}function Cm(t,e){return t<e?-1:t>e?1:0}var Nt;e:{var eI=G.navigator;if(eI){var tI=eI.userAgent;if(tI){Nt=tI;break e}}Nt=""}function bm(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function nI(t){const e={};for(const n in t)e[n]=t[n];return e}var rI="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function iI(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<rI.length;s++)n=rI[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Am(t){return Am[" "](t),t}Am[" "]=Kc;function QD(t){var e=JD;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var YD=Rt(Nt,"Opera"),Ys=Rt(Nt,"Trident")||Rt(Nt,"MSIE"),sI=Rt(Nt,"Edge"),Rm=sI||Ys,oI=Rt(Nt,"Gecko")&&!(Rt(Nt.toLowerCase(),"webkit")&&!Rt(Nt,"Edge"))&&!(Rt(Nt,"Trident")||Rt(Nt,"MSIE"))&&!Rt(Nt,"Edge"),XD=Rt(Nt.toLowerCase(),"webkit")&&!Rt(Nt,"Edge");function aI(){var t=G.document;return t?t.documentMode:void 0}var Xc;e:{var Nm="",Pm=function(){var t=Nt;if(oI)return/rv:([^\);]+)(\)|;)/.exec(t);if(sI)return/Edge\/([\d\.]+)/.exec(t);if(Ys)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(XD)return/WebKit\/(\S+)/.exec(t);if(YD)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Pm&&(Nm=Pm?Pm[1]:""),Ys){var xm=aI();if(xm!=null&&xm>parseFloat(Nm)){Xc=String(xm);break e}}Xc=Nm}var JD={};function ZD(){return QD(function(){let t=0;const e=Z1(String(Xc)).split("."),n=Z1("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var i=e[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i[0].length==0&&s[0].length==0)break;t=Cm(i[1].length==0?0:parseInt(i[1],10),s[1].length==0?0:parseInt(s[1],10))||Cm(i[2].length==0,s[2].length==0)||Cm(i[2],s[2]),i=i[3],s=s[3]}while(t==0)}return 0<=t})}var Dm;if(G.document&&Ys){var uI=aI();Dm=uI||parseInt(Xc,10)||void 0}else Dm=void 0;var eO=Dm,tO=function(){if(!G.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{G.addEventListener("test",Kc,e),G.removeEventListener("test",Kc,e)}catch{}return t}();function _t(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}_t.prototype.h=function(){this.defaultPrevented=!0};function eu(t,e){if(_t.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(oI){e:{try{Am(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:nO[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&eu.Z.h.call(this)}}ut(eu,_t);var nO={2:"touch",3:"pen",4:"mouse"};eu.prototype.h=function(){eu.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var tu="closure_listenable_"+(1e6*Math.random()|0),rO=0;function iO(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ia=i,this.key=++rO,this.ca=this.fa=!1}function Jc(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function Zc(t){this.src=t,this.g={},this.h=0}Zc.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=Lm(t,e,r,i);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new iO(e,this.src,s,!!r,i),e.fa=n,t.push(e)),e};function Om(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=Y1(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(Jc(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Lm(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.ca&&s.listener==e&&s.capture==!!n&&s.ia==r)return i}return-1}var Mm="closure_lm_"+(1e6*Math.random()|0),$m={};function lI(t,e,n,r,i){if(r&&r.once)return hI(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)lI(t,e[s],n,r,i);return null}return n=Bm(n),t&&t[tu]?t.N(e,n,Za(r)?!!r.capture:!!r,i):cI(t,e,n,!1,r,i)}function cI(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=Za(i)?!!i.capture:!!i,a=Fm(t);if(a||(t[Mm]=a=new Zc(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=sO(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)tO||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(fI(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function sO(){function t(n){return e.call(t.src,t.listener,n)}var e=oO;return t}function hI(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)hI(t,e[s],n,r,i);return null}return n=Bm(n),t&&t[tu]?t.O(e,n,Za(r)?!!r.capture:!!r,i):cI(t,e,n,!0,r,i)}function dI(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)dI(t,e[s],n,r,i);else r=Za(r)?!!r.capture:!!r,n=Bm(n),t&&t[tu]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=Lm(s,n,r,i),-1<n&&(Jc(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=Fm(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Lm(e,n,r,i)),(n=-1<t?e[t]:null)&&Um(n))}function Um(t){if(typeof t!="number"&&t&&!t.ca){var e=t.src;if(e&&e[tu])Om(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(fI(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Fm(e))?(Om(n,t),n.h==0&&(n.src=null,e[Mm]=null)):Jc(t)}}}function fI(t){return t in $m?$m[t]:$m[t]="on"+t}function oO(t,e){if(t.ca)t=!0;else{e=new eu(e,this);var n=t.listener,r=t.ia||t.src;t.fa&&Um(t),t=n.call(r,e)}return t}function Fm(t){return t=t[Mm],t instanceof Zc?t:null}var Vm="__closure_events_fn_"+(1e9*Math.random()>>>0);function Bm(t){return typeof t=="function"?t:(t[Vm]||(t[Vm]=function(e){return t.handleEvent(e)}),t[Vm])}function We(){Wr.call(this),this.i=new Zc(this),this.P=this,this.I=null}ut(We,Wr);We.prototype[tu]=!0;We.prototype.removeEventListener=function(t,e,n,r){dI(this,t,e,n,r)};function lt(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,typeof e=="string")e=new _t(e,t);else if(e instanceof _t)e.target=e.target||t;else{var i=e;e=new _t(r,t),iI(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=eh(o,r,!0,e)&&i}if(o=e.g=t,i=eh(o,r,!0,e)&&i,i=eh(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=eh(o,r,!1,e)&&i}We.prototype.M=function(){if(We.Z.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Jc(n[r]);delete t.g[e],t.h--}}this.I=null};We.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};We.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function eh(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ca&&o.capture==n){var a=o.listener,u=o.ia||o.src;o.fa&&Om(t.i,o),i=a.call(u,r)!==!1&&i}}return i&&!r.defaultPrevented}var zm=G.JSON.stringify;function aO(){var t=mI;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class uO{constructor(){this.h=this.g=null}add(e,n){const r=pI.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var pI=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new lO,t=>t.reset());class lO{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function cO(t){G.setTimeout(()=>{throw t},0)}function jm(t,e){qm||hO(),Hm||(qm(),Hm=!0),mI.add(t,e)}var qm;function hO(){var t=G.Promise.resolve(void 0);qm=function(){t.then(dO)}}var Hm=!1,mI=new uO;function dO(){for(var t;t=aO();){try{t.h.call(t.g)}catch(n){cO(n)}var e=pI;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Hm=!1}function th(t,e){We.call(this),this.h=t||1,this.g=e||G,this.j=at(this.kb,this),this.l=Date.now()}ut(th,We);$=th.prototype;$.da=!1;$.S=null;$.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),lt(this,"tick"),this.da&&(Wm(this),this.start()))}};$.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Wm(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}$.M=function(){th.Z.M.call(this),Wm(this),delete this.g};function Gm(t,e,n){if(typeof t=="function")n&&(t=at(t,n));else if(t&&typeof t.handleEvent=="function")t=at(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:G.setTimeout(t,e||0)}function gI(t){t.g=Gm(()=>{t.g=null,t.i&&(t.i=!1,gI(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class fO extends Wr{constructor(e,n){super();this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:gI(this)}M(){super.M(),this.g&&(G.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function nu(t){Wr.call(this),this.h=t,this.g={}}ut(nu,Wr);var yI=[];function vI(t,e,n,r){Array.isArray(n)||(n&&(yI[0]=n.toString()),n=yI);for(var i=0;i<n.length;i++){var s=lI(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function wI(t){bm(t.g,function(e,n){this.g.hasOwnProperty(n)&&Um(e)},t),t.g={}}nu.prototype.M=function(){nu.Z.M.call(this),wI(this)};nu.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function nh(){this.g=!0}nh.prototype.Aa=function(){this.g=!1};function pO(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),u=0;u<a.length;u++){var l=a[u].split("=");if(1<l.length){var c=l[0];l=l[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+l+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function mO(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function Xs(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+yO(t,n)+(r?" "+r:"")})}function gO(t,e){t.info(function(){return"TIMEOUT: "+e})}nh.prototype.info=function(){};function yO(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return zm(n)}catch{return e}}var Oi={},_I=null;function rh(){return _I=_I||new We}Oi.Ma="serverreachability";function II(t){_t.call(this,Oi.Ma,t)}ut(II,_t);function ru(t){const e=rh();lt(e,new II(e,t))}Oi.STAT_EVENT="statevent";function EI(t,e){_t.call(this,Oi.STAT_EVENT,t),this.stat=e}ut(EI,_t);function Pt(t){const e=rh();lt(e,new EI(e,t))}Oi.Na="timingevent";function TI(t,e){_t.call(this,Oi.Na,t),this.size=e}ut(TI,_t);function iu(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return G.setTimeout(function(){t()},e)}var ih={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},SI={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function Km(){}Km.prototype.h=null;function kI(t){return t.h||(t.h=t.i())}function CI(){}var su={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function Qm(){_t.call(this,"d")}ut(Qm,_t);function Ym(){_t.call(this,"c")}ut(Ym,_t);var Xm;function sh(){}ut(sh,Km);sh.prototype.g=function(){return new XMLHttpRequest};sh.prototype.i=function(){return{}};Xm=new sh;function ou(t,e,n,r){this.l=t,this.j=e,this.m=n,this.X=r||1,this.V=new nu(this),this.P=vO,t=Rm?125:void 0,this.W=new th(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new bI}function bI(){this.i=null,this.g="",this.h=!1}var vO=45e3,Jm={},oh={};$=ou.prototype;$.setTimeout=function(t){this.P=t};function Zm(t,e,n){t.K=1,t.v=hh(sr(e)),t.s=n,t.U=!0,AI(t,null)}function AI(t,e){t.F=Date.now(),au(t),t.A=sr(t.v);var n=t.A,r=t.X;Array.isArray(r)||(r=[String(r)]),$I(n.h,"t",r),t.C=0,n=t.l.H,t.h=new bI,t.g=oE(t.l,n?e:null,!t.s),0<t.O&&(t.L=new fO(at(t.Ia,t,t.g),t.O)),vI(t.V,t.g,"readystatechange",t.gb),e=t.H?nI(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),ru(1),pO(t.j,t.u,t.A,t.m,t.X,t.s)}$.gb=function(t){t=t.target;const e=this.L;e&&or(t)==3?e.l():this.Ia(t)};$.Ia=function(t){try{if(t==this.g)e:{const c=or(this.g);var e=this.g.Da();const h=this.g.ba();if(!(3>c)&&(c!=3||Rm||this.g&&(this.h.h||this.g.ga()||QI(this.g)))){this.I||c!=4||e==7||(e==8||0>=h?ru(3):ru(2)),ah(this);var n=this.g.ba();this.N=n;t:if(RI(this)){var r=QI(this.g);t="";var i=r.length,s=or(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){Li(this),uu(this);var o="";break t}this.h.i=new G.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=n==200,mO(this.j,this.u,this.A,this.m,this.X,c,n),this.i){if(this.$&&!this.J){t:{if(this.g){var a,u=this.g;if((a=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Yc(a)){var l=a;break t}}l=null}if(n=l)Xs(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,eg(this,n);else{this.i=!1,this.o=3,Pt(12),Li(this),uu(this);break e}}this.U?(NI(this,c,o),Rm&&this.i&&c==3&&(vI(this.V,this.W,"tick",this.fb),this.W.start())):(Xs(this.j,this.m,o,null),eg(this,o)),c==4&&Li(this),this.i&&!this.I&&(c==4?nE(this.l,this):(this.i=!1,au(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Pt(12)):(this.o=0,Pt(13)),Li(this),uu(this)}}}catch{}finally{}};function RI(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Ba:!1}function NI(t,e,n){let r=!0,i;for(;!t.I&&t.C<n.length;)if(i=wO(t,n),i==oh){e==4&&(t.o=4,Pt(14),r=!1),Xs(t.j,t.m,null,"[Incomplete Response]");break}else if(i==Jm){t.o=4,Pt(15),Xs(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Xs(t.j,t.m,i,null),eg(t,i);RI(t)&&i!=oh&&i!=Jm&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Pt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),hg(e),e.L=!0,Pt(11))):(Xs(t.j,t.m,n,"[Invalid Chunked Response]"),Li(t),uu(t))}$.fb=function(){if(this.g){var t=or(this.g),e=this.g.ga();this.C<e.length&&(ah(this),NI(this,t,e),this.i&&t!=4&&au(this))}};function wO(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?oh:(n=Number(e.substring(n,r)),isNaN(n)?Jm:(r+=1,r+n>e.length?oh:(e=e.substr(r,n),t.C=r+n,e)))}$.cancel=function(){this.I=!0,Li(this)};function au(t){t.Y=Date.now()+t.P,PI(t,t.P)}function PI(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=iu(at(t.eb,t),e)}function ah(t){t.B&&(G.clearTimeout(t.B),t.B=null)}$.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(gO(this.j,this.A),this.K!=2&&(ru(3),Pt(17)),Li(this),this.o=2,uu(this)):PI(this,this.Y-t)};function uu(t){t.l.G==0||t.I||nE(t.l,t)}function Li(t){ah(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Wm(t.W),wI(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function eg(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||rg(n.i,t))){if(n.I=t.N,!t.J&&rg(n.i,t)&&n.G==3){try{var r=n.Ca.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0)e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)yh(n),mh(n);else break e;cg(n),Pt(18)}else n.ta=i[1],0<n.ta-n.U&&37500>i[2]&&n.N&&n.A==0&&!n.v&&(n.v=iu(at(n.ab,n),6e3));if(1>=VI(n.i)&&n.ka){try{n.ka()}catch{}n.ka=void 0}}else Ui(n,11)}else if((t.J||n.g==t)&&yh(n),!Yc(e))for(i=n.Ca.g.parse(e),e=0;e<i.length;e++){let l=i[e];if(n.U=l[0],l=l[1],n.G==2)if(l[0]=="c"){n.J=l[1],n.la=l[2];const c=l[3];c!=null&&(n.ma=c,n.h.info("VER="+n.ma));const h=l[4];h!=null&&(n.za=h,n.h.info("SVER="+n.za));const d=l[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.K=r,n.h.info("backChannelRequestTimeoutMs_="+r)),r=n;const g=t.g;if(g){const y=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var s=r.i;!s.g&&(Rt(y,"spdy")||Rt(y,"quic")||Rt(y,"h2"))&&(s.j=s.l,s.g=new Set,s.h&&(ig(s,s.h),s.h=null))}if(r.D){const _=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;_&&(r.sa=_,Ie(r.F,r.D,_))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),r=n;var o=t;if(r.oa=sE(r,r.H?r.la:null,r.W),o.J){BI(r.i,o);var a=o,u=r.K;u&&a.setTimeout(u),a.B&&(ah(a),au(a)),r.g=o}else eE(r);0<n.l.length&&gh(n)}else l[0]!="stop"&&l[0]!="close"||Ui(n,7);else n.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?Ui(n,7):ug(n):l[0]!="noop"&&n.j&&n.j.wa(l),n.A=0)}}ru(4)}catch{}}function _O(t){if(t.R&&typeof t.R=="function")return t.R();if(typeof t=="string")return t.split("");if(Tm(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function tg(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Tm(t)||typeof t=="string")X1(t,e,void 0);else{if(t.T&&typeof t.T=="function")var n=t.T();else if(t.R&&typeof t.R=="function")n=void 0;else if(Tm(t)||typeof t=="string"){n=[];for(var r=t.length,i=0;i<r;i++)n.push(i)}else for(i in n=[],r=0,t)n[r++]=i;r=_O(t),i=r.length;for(var s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}}function Js(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(t)if(t instanceof Js)for(n=t.T(),r=0;r<n.length;r++)this.set(n[r],t.get(n[r]));else for(r in t)this.set(r,t[r])}$=Js.prototype;$.R=function(){ng(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t};$.T=function(){return ng(this),this.g.concat()};function ng(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var r=t.g[e];Mi(t.h,r)&&(t.g[n++]=r),e++}t.g.length=n}if(t.i!=t.g.length){var i={};for(n=e=0;e<t.g.length;)r=t.g[e],Mi(i,r)||(t.g[n++]=r,i[r]=1),e++;t.g.length=n}}$.get=function(t,e){return Mi(this.h,t)?this.h[t]:e};$.set=function(t,e){Mi(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e};$.forEach=function(t,e){for(var n=this.T(),r=0;r<n.length;r++){var i=n[r],s=this.get(i);t.call(e,s,i,this)}};function Mi(t,e){return Object.prototype.hasOwnProperty.call(t,e)}var xI=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function IO(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function $i(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof $i){this.g=e!==void 0?e:t.g,uh(this,t.j),this.s=t.s,lh(this,t.i),ch(this,t.m),this.l=t.l,e=t.h;var n=new hu;n.i=e.i,e.g&&(n.g=new Js(e.g),n.h=e.h),DI(this,n),this.o=t.o}else t&&(n=String(t).match(xI))?(this.g=!!e,uh(this,n[1]||"",!0),this.s=lu(n[2]||""),lh(this,n[3]||"",!0),ch(this,n[4]),this.l=lu(n[5]||"",!0),DI(this,n[6]||"",!0),this.o=lu(n[7]||"")):(this.g=!!e,this.h=new hu(null,this.g))}$i.prototype.toString=function(){var t=[],e=this.j;e&&t.push(cu(e,OI,!0),":");var n=this.i;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(cu(e,OI,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.i&&n.charAt(0)!="/"&&t.push("/"),t.push(cu(n,n.charAt(0)=="/"?CO:kO,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",cu(n,AO)),t.join("")};function sr(t){return new $i(t)}function uh(t,e,n){t.j=n?lu(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function lh(t,e,n){t.i=n?lu(e,!0):e}function ch(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function DI(t,e,n){e instanceof hu?(t.h=e,RO(t.h,t.g)):(n||(e=cu(e,bO)),t.h=new hu(e,t.g))}function Ie(t,e,n){t.h.set(e,n)}function hh(t){return Ie(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function EO(t){return t instanceof $i?sr(t):new $i(t,void 0)}function TO(t,e,n,r){var i=new $i(null,void 0);return t&&uh(i,t),e&&lh(i,e),n&&ch(i,n),r&&(i.l=r),i}function lu(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function cu(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,SO),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function SO(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var OI=/[#\/\?@]/g,kO=/[#\?:]/g,CO=/[#\?]/g,bO=/[#\?@]/g,AO=/#/g;function hu(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Gr(t){t.g||(t.g=new Js,t.h=0,t.i&&IO(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}$=hu.prototype;$.add=function(t,e){Gr(this),this.i=null,t=Zs(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function LI(t,e){Gr(t),e=Zs(t,e),Mi(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,Mi(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&ng(t)))}function MI(t,e){return Gr(t),e=Zs(t,e),Mi(t.g.h,e)}$.forEach=function(t,e){Gr(this),this.g.forEach(function(n,r){X1(n,function(i){t.call(e,i,r,this)},this)},this)};$.T=function(){Gr(this);for(var t=this.g.R(),e=this.g.T(),n=[],r=0;r<e.length;r++)for(var i=t[r],s=0;s<i.length;s++)n.push(e[r]);return n};$.R=function(t){Gr(this);var e=[];if(typeof t=="string")MI(this,t)&&(e=J1(e,this.g.get(Zs(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=J1(e,t[n])}return e};$.set=function(t,e){return Gr(this),this.i=null,t=Zs(this,t),MI(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};$.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e};function $I(t,e,n){LI(t,e),0<n.length&&(t.i=null,t.g.set(Zs(t,e),km(n)),t.h+=n.length)}$.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var r=e[n],i=encodeURIComponent(String(r));r=this.R(r);for(var s=0;s<r.length;s++){var o=i;r[s]!==""&&(o+="="+encodeURIComponent(String(r[s]))),t.push(o)}}return this.i=t.join("&")};function Zs(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function RO(t,e){e&&!t.j&&(Gr(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(LI(this,r),$I(this,i,n))},t)),t.j=e}var NO=class{constructor(t,e){this.h=t,this.g=e}};function UI(t){this.l=t||PO,G.PerformanceNavigationTiming?(t=G.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(G.g&&G.g.Ea&&G.g.Ea()&&G.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var PO=10;function FI(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function VI(t){return t.h?1:t.g?t.g.size:0}function rg(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function ig(t,e){t.g?t.g.add(e):t.h=e}function BI(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}UI.prototype.cancel=function(){if(this.i=zI(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function zI(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return km(t.i)}function sg(){}sg.prototype.stringify=function(t){return G.JSON.stringify(t,void 0)};sg.prototype.parse=function(t){return G.JSON.parse(t,void 0)};function xO(){this.g=new sg}function DO(t,e,n){const r=n||"";try{tg(t,function(i,s){let o=i;Za(i)&&(o=zm(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function OO(t,e){const n=new nh;if(G.Image){const r=new Image;r.onload=Qc(dh,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Qc(dh,n,r,"TestLoadImage: error",!1,e),r.onabort=Qc(dh,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Qc(dh,n,r,"TestLoadImage: timeout",!1,e),G.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function dh(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function du(t){this.l=t.$b||null,this.j=t.ib||!1}ut(du,Km);du.prototype.g=function(){return new fh(this.l,this.j)};du.prototype.i=function(t){return function(){return t}}({});function fh(t,e){We.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=og,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}ut(fh,We);var og=0;$=fh.prototype;$.open=function(t,e){if(this.readyState!=og)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,pu(this)};$.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||G).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))};$.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,fu(this)),this.readyState=og};$.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,pu(this)),this.g&&(this.readyState=3,pu(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof G.ReadableStream!="undefined"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;jI(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))};function jI(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}$.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?fu(this):pu(this),this.readyState==3&&jI(this)}};$.Ua=function(t){this.g&&(this.response=this.responseText=t,fu(this))};$.Ta=function(t){this.g&&(this.response=t,fu(this))};$.ha=function(){this.g&&fu(this)};function fu(t){t.readyState=4,t.l=null,t.j=null,t.A=null,pu(t)}$.setRequestHeader=function(t,e){this.v.append(t,e)};$.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};$.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function pu(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(fh.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var LO=G.JSON.parse;function xe(t){We.call(this),this.headers=new Js,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=qI,this.K=this.L=!1}ut(xe,We);var qI="",MO=/^https?$/i,$O=["POST","PUT"];$=xe.prototype;$.ea=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Xm.g(),this.C=this.u?kI(this.u):kI(Xm),this.g.onreadystatechange=at(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(s){HI(this,s);return}t=n||"";const i=new Js(this.headers);r&&tg(r,function(s,o){i.set(o,s)}),r=KD(i.T()),n=G.FormData&&t instanceof G.FormData,!(0<=Y1($O,e))||r||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach(function(s,o){this.g.setRequestHeader(o,s)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{KI(this),0<this.B&&((this.K=UO(this.g))?(this.g.timeout=this.B,this.g.ontimeout=at(this.pa,this)):this.A=Gm(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){HI(this,s)}};function UO(t){return Ys&&ZD()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}function FO(t){return t.toLowerCase()=="content-type"}$.pa=function(){typeof Em!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,lt(this,"timeout"),this.abort(8))};function HI(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,WI(t),ph(t)}function WI(t){t.D||(t.D=!0,lt(t,"complete"),lt(t,"error"))}$.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,lt(this,"complete"),lt(this,"abort"),ph(this))};$.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),ph(this,!0)),xe.Z.M.call(this)};$.Fa=function(){this.s||(this.F||this.v||this.l?GI(this):this.cb())};$.cb=function(){GI(this)};function GI(t){if(t.h&&typeof Em!="undefined"&&(!t.C[1]||or(t)!=4||t.ba()!=2)){if(t.v&&or(t)==4)Gm(t.Fa,0,t);else if(lt(t,"readystatechange"),or(t)==4){t.h=!1;try{const a=t.ba();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var i=String(t.H).match(xI)[1]||null;if(!i&&G.self&&G.self.location){var s=G.self.location.protocol;i=s.substr(0,s.length-1)}r=!MO.test(i?i.toLowerCase():"")}n=r}if(n)lt(t,"complete"),lt(t,"success");else{t.m=6;try{var o=2<or(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.ba()+"]",WI(t)}}finally{ph(t)}}}}function ph(t,e){if(t.g){KI(t);const n=t.g,r=t.C[0]?Kc:null;t.g=null,t.C=null,e||lt(t,"ready");try{n.onreadystatechange=r}catch{}}}function KI(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(G.clearTimeout(t.A),t.A=null)}function or(t){return t.g?t.g.readyState:0}$.ba=function(){try{return 2<or(this)?this.g.status:-1}catch{return-1}};$.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};$.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),LO(e)}};function QI(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case qI:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}$.Da=function(){return this.m};$.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function VO(t){let e="";return bm(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function ag(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=VO(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Ie(t,e,n))}function mu(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function YI(t){this.za=0,this.l=[],this.h=new nh,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=mu("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=mu("baseRetryDelayMs",5e3,t),this.$a=mu("retryDelaySeedMs",1e4,t),this.Ya=mu("forwardChannelMaxRetries",2,t),this.ra=mu("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new UI(t&&t.concurrentRequestLimit),this.Ca=new xO,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||t.Xb!==!1}$=YI.prototype;$.ma=8;$.G=1;function ug(t){if(XI(t),t.G==3){var e=t.V++,n=sr(t.F);Ie(n,"SID",t.J),Ie(n,"RID",e),Ie(n,"TYPE","terminate"),gu(t,n),e=new ou(t,t.h,e,void 0),e.K=2,e.v=hh(sr(n)),n=!1,G.navigator&&G.navigator.sendBeacon&&(n=G.navigator.sendBeacon(e.v.toString(),"")),!n&&G.Image&&(new Image().src=e.v,n=!0),n||(e.g=oE(e.l,null),e.g.ea(e.v)),e.F=Date.now(),au(e)}iE(t)}$.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch{}};function mh(t){t.g&&(hg(t),t.g.cancel(),t.g=null)}function XI(t){mh(t),t.u&&(G.clearTimeout(t.u),t.u=null),yh(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&G.clearTimeout(t.m),t.m=null)}function lg(t,e){t.l.push(new NO(t.Za++,e)),t.G==3&&gh(t)}function gh(t){FI(t.i)||t.m||(t.m=!0,jm(t.Ha,t),t.C=0)}function BO(t,e){return VI(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.l=e.D.concat(t.l),!0):t.G==1||t.G==2||t.C>=(t.Xa?0:t.Ya)?!1:(t.m=iu(at(t.Ha,t,e),rE(t,t.C)),t.C++,!0)}$.Ha=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const i=new ou(this,this.h,t,void 0);let s=this.s;if(this.P&&(s?(s=nI(s),iI(s,this.P)):s=this.P),this.o===null&&(i.H=s),this.ja)e:{for(var e=0,n=0;n<this.l.length;n++){t:{var r=this.l[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.l.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=ZI(this,i,e),n=sr(this.F),Ie(n,"RID",t),Ie(n,"CVER",22),this.D&&Ie(n,"X-HTTP-Session-Id",this.D),gu(this,n),this.o&&s&&ag(n,this.o,s),ig(this.i,i),this.Ra&&Ie(n,"TYPE","init"),this.ja?(Ie(n,"$req",e),Ie(n,"SID","null"),i.$=!0,Zm(i,n,null)):Zm(i,n,e),this.G=2}}else this.G==3&&(t?JI(this,t):this.l.length==0||FI(this.i)||JI(this))};function JI(t,e){var n;e?n=e.m:n=t.V++;const r=sr(t.F);Ie(r,"SID",t.J),Ie(r,"RID",n),Ie(r,"AID",t.U),gu(t,r),t.o&&t.s&&ag(r,t.o,t.s),n=new ou(t,t.h,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=ZI(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),ig(t.i,n),Zm(n,r,e)}function gu(t,e){t.j&&tg({},function(n,r){Ie(e,r,n)})}function ZI(t,e,n){n=Math.min(t.l.length,n);var r=t.j?at(t.j.Oa,t.j,t):null;e:{var i=t.l;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let u=0;u<n;u++){let l=i[u].h;const c=i[u].g;if(l-=s,0>l)s=Math.max(0,i[u].h-100),a=!1;else try{DO(c,o,"req"+l+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.l.splice(0,n),e.D=t,r}function eE(t){t.g||t.u||(t.Y=1,jm(t.Ga,t),t.A=0)}function cg(t){return t.g||t.u||3<=t.A?!1:(t.Y++,t.u=iu(at(t.Ga,t),rE(t,t.A)),t.A++,!0)}$.Ga=function(){if(this.u=null,tE(this),this.$&&!(this.L||this.g==null||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=iu(at(this.bb,this),t)}};$.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,Pt(10),mh(this),tE(this))};function hg(t){t.B!=null&&(G.clearTimeout(t.B),t.B=null)}function tE(t){t.g=new ou(t,t.h,"rpc",t.Y),t.o===null&&(t.g.H=t.s),t.g.O=0;var e=sr(t.oa);Ie(e,"RID","rpc"),Ie(e,"SID",t.J),Ie(e,"CI",t.N?"0":"1"),Ie(e,"AID",t.U),gu(t,e),Ie(e,"TYPE","xmlhttp"),t.o&&t.s&&ag(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=hh(sr(e)),n.s=null,n.U=!0,AI(n,t)}$.ab=function(){this.v!=null&&(this.v=null,mh(this),cg(this),Pt(19))};function yh(t){t.v!=null&&(G.clearTimeout(t.v),t.v=null)}function nE(t,e){var n=null;if(t.g==e){yh(t),hg(t),t.g=null;var r=2}else if(rg(t.i,e))n=e.D,BI(t.i,e),r=1;else return;if(t.I=e.N,t.G!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;r=rh(),lt(r,new TI(r,n,e,i)),gh(t)}else eE(t);else if(i=e.o,i==3||i==0&&0<t.I||!(r==1&&BO(t,e)||r==2&&cg(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:Ui(t,5);break;case 4:Ui(t,10);break;case 3:Ui(t,6);break;default:Ui(t,2)}}}function rE(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function Ui(t,e){if(t.h.info("Error code "+e),e==2){var n=null;t.j&&(n=null);var r=at(t.jb,t);n||(n=new $i("//www.google.com/images/cleardot.gif"),G.location&&G.location.protocol=="http"||uh(n,"https"),hh(n)),OO(n.toString(),r)}else Pt(2);t.G=0,t.j&&t.j.va(e),iE(t),XI(t)}$.jb=function(t){t?(this.h.info("Successfully pinged google.com"),Pt(2)):(this.h.info("Failed to ping google.com"),Pt(1))};function iE(t){t.G=0,t.I=-1,t.j&&((zI(t.i).length!=0||t.l.length!=0)&&(t.i.i.length=0,km(t.l),t.l.length=0),t.j.ua())}function sE(t,e,n){let r=EO(n);if(r.i!="")e&&lh(r,e+"."+r.i),ch(r,r.m);else{const i=G.location;r=TO(i.protocol,e?e+"."+i.hostname:i.hostname,+i.port,n)}return t.aa&&bm(t.aa,function(i,s){Ie(r,s,i)}),e=t.D,n=t.sa,e&&n&&Ie(r,e,n),Ie(r,"VER",t.ma),gu(t,r),r}function oE(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new xe(new du({ib:!0})):new xe(t.qa),e.L=t.H,e}function aE(){}$=aE.prototype;$.xa=function(){};$.wa=function(){};$.va=function(){};$.ua=function(){};$.Oa=function(){};function vh(){if(Ys&&!(10<=Number(eO)))throw Error("Environmental error: no available transport.")}vh.prototype.g=function(t,e){return new Jt(t,e)};function Jt(t,e){We.call(this),this.g=new YI(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!Yc(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Yc(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new eo(this)}ut(Jt,We);Jt.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),jm(at(t.hb,t,e))),Pt(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=sE(t,null,t.W),gh(t)};Jt.prototype.close=function(){ug(this.g)};Jt.prototype.u=function(t){if(typeof t=="string"){var e={};e.__data__=t,lg(this.g,e)}else this.v?(e={},e.__data__=zm(t),lg(this.g,e)):lg(this.g,t)};Jt.prototype.M=function(){this.g.j=null,delete this.j,ug(this.g),delete this.g,Jt.Z.M.call(this)};function uE(t){Qm.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}ut(uE,Qm);function lE(){Ym.call(this),this.status=1}ut(lE,Ym);function eo(t){this.g=t}ut(eo,aE);eo.prototype.xa=function(){lt(this.g,"a")};eo.prototype.wa=function(t){lt(this.g,new uE(t))};eo.prototype.va=function(t){lt(this.g,new lE(t))};eo.prototype.ua=function(){lt(this.g,"b")};vh.prototype.createWebChannel=vh.prototype.g;Jt.prototype.send=Jt.prototype.u;Jt.prototype.open=Jt.prototype.m;Jt.prototype.close=Jt.prototype.close;ih.NO_ERROR=0;ih.TIMEOUT=8;ih.HTTP_ERROR=6;SI.COMPLETE="complete";CI.EventType=su;su.OPEN="a";su.CLOSE="b";su.ERROR="c";su.MESSAGE="d";We.prototype.listen=We.prototype.N;xe.prototype.listenOnce=xe.prototype.O;xe.prototype.getLastError=xe.prototype.La;xe.prototype.getLastErrorCode=xe.prototype.Da;xe.prototype.getStatus=xe.prototype.ba;xe.prototype.getResponseJson=xe.prototype.Qa;xe.prototype.getResponseText=xe.prototype.ga;xe.prototype.send=xe.prototype.ea;var zO=function(){return new vh},jO=function(){return rh()},dg=ih,qO=SI,HO=Oi,cE={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},WO=du,wh=CI,GO=xe;const hE="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */let to="9.1.3";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kr=new Sc("@firebase/firestore");function fg(){return Kr.logLevel}function KO(t){Kr.setLogLevel(t)}function N(t,...e){if(Kr.logLevel<=te.DEBUG){const n=e.map(pg);Kr.debug(`Firestore (${to}): ${t}`,...n)}}function De(t,...e){if(Kr.logLevel<=te.ERROR){const n=e.map(pg);Kr.error(`Firestore (${to}): ${t}`,...n)}}function yu(t,...e){if(Kr.logLevel<=te.WARN){const n=e.map(pg);Kr.warn(`Firestore (${to}): ${t}`,...n)}}function pg(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function q(t="Unexpected state"){const e=`FIRESTORE (${to}) INTERNAL ASSERTION FAILED: `+t;throw De(e),new Error(e)}function H(t,e){t||q()}function QO(t,e){t||q()}function L(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class dE{constructor(e,n){this.user=n,this.type="OAuth",this.authHeaders={},this.authHeaders.Authorization=`Bearer ${e}`}}class YO{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ct.UNAUTHENTICATED))}shutdown(){}}class XO{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class JO{constructor(e){this.t=e,this.currentUser=ct.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new Ge;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Ge,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},a=u=>{N("FirebaseCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(N("FirebaseCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Ge)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(N("FirebaseCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(H(typeof r.accessToken=="string"),new dE(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return H(e===null||typeof e=="string"),new ct(e)}}class ZO{constructor(e,n,r){this.h=e,this.l=n,this.m=r,this.type="FirstParty",this.user=ct.FIRST_PARTY}get authHeaders(){const e={"X-Goog-AuthUser":this.l},n=this.h.auth.getAuthHeaderValueForFirstParty([]);return n&&(e.Authorization=n),this.m&&(e["X-Goog-Iam-Authorization-Token"]=this.m),e}}class eL{constructor(e,n,r){this.h=e,this.l=n,this.m=r}getToken(){return Promise.resolve(new ZO(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(ct.FIRST_PARTY))}shutdown(){}invalidateToken(){}}/**
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
 */function tL(t){const e=typeof self!="undefined"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Zt.T=-1;class fE{static I(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=tL(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function J(t,e){return t<e?-1:t>e?1:0}function no(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}function pE(t){return t+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function mE(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Fi(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function gE(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vu{constructor(e,n,r){n===void 0?n=0:n>e.length&&q(),r===void 0?r=e.length-n:r>e.length-n&&q(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return vu.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof vu?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ie extends vu{construct(e,n,r){return new ie(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new C(E.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new ie(n)}static emptyPath(){return new ie([])}}const nL=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ht extends vu{construct(e,n,r){return new ht(e,n,r)}static isValidIdentifier(e){return nL.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ht.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ht(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new C(E.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new C(E.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new C(E.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new C(E.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ht(n)}static emptyPath(){return new ht([])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ro{constructor(e){this.fields=e,e.sort(ht.comparator)}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return no(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rL(){return typeof atob!="undefined"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new Qe(n)}static fromUint8Array(e){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new Qe(n)}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return J(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Qe.EMPTY_BYTE_STRING=new Qe("");const iL=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Qr(t){if(H(!!t),typeof t=="string"){let e=0;const n=iL.exec(t);if(H(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Oe(t.seconds),nanos:Oe(t.nanos)}}function Oe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function io(t){return typeof t=="string"?Qe.fromBase64String(t):Qe.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mg(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function yE(t){const e=t.mapValue.fields.__previous_value__;return mg(e)?yE(e):e}function wu(t){const e=Qr(t.mapValue.fields.__local_write_time__.timestampValue);return new Ke(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vi(t){return t==null}function _h(t){return t===0&&1/t==-1/0}function vE(t){return typeof t=="number"&&Number.isInteger(t)&&!_h(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{constructor(e){this.path=e}static fromPath(e){return new z(ie.fromString(e))}static fromName(e){return new z(ie.fromString(e).popFirst(5))}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}isEqual(e){return e!==null&&ie.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ie.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new z(new ie(e.slice()))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bi(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?mg(t)?4:10:q()}function Fn(t,e){const n=Bi(t);if(n!==Bi(e))return!1;switch(n){case 0:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return wu(t).isEqual(wu(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=Qr(r.timestampValue),o=Qr(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return io(r.bytesValue).isEqual(io(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return Oe(r.geoPointValue.latitude)===Oe(i.geoPointValue.latitude)&&Oe(r.geoPointValue.longitude)===Oe(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return Oe(r.integerValue)===Oe(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=Oe(r.doubleValue),o=Oe(i.doubleValue);return s===o?_h(s)===_h(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return no(t.arrayValue.values||[],e.arrayValue.values||[],Fn);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(mE(s)!==mE(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!Fn(s[a],o[a])))return!1;return!0}(t,e);default:return q()}}function _u(t,e){return(t.values||[]).find(n=>Fn(n,e))!==void 0}function so(t,e){const n=Bi(t),r=Bi(e);if(n!==r)return J(n,r);switch(n){case 0:return 0;case 1:return J(t.booleanValue,e.booleanValue);case 2:return function(i,s){const o=Oe(i.integerValue||i.doubleValue),a=Oe(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return wE(t.timestampValue,e.timestampValue);case 4:return wE(wu(t),wu(e));case 5:return J(t.stringValue,e.stringValue);case 6:return function(i,s){const o=io(i),a=io(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let u=0;u<o.length&&u<a.length;u++){const l=J(o[u],a[u]);if(l!==0)return l}return J(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,s){const o=J(Oe(i.latitude),Oe(s.latitude));return o!==0?o:J(Oe(i.longitude),Oe(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let u=0;u<o.length&&u<a.length;++u){const l=so(o[u],a[u]);if(l)return l}return J(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,s){const o=i.fields||{},a=Object.keys(o),u=s.fields||{},l=Object.keys(u);a.sort(),l.sort();for(let c=0;c<a.length&&c<l.length;++c){const h=J(a[c],l[c]);if(h!==0)return h;const d=so(o[a[c]],u[l[c]]);if(d!==0)return d}return J(a.length,l.length)}(t.mapValue,e.mapValue);default:throw q()}}function wE(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return J(t,e);const n=Qr(t),r=Qr(e),i=J(n.seconds,r.seconds);return i!==0?i:J(n.nanos,r.nanos)}function gg(t){return yg(t)}function yg(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const i=Qr(r);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?io(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,z.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=yg(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${yg(r.fields[a])}`;return s+"}"}(t.mapValue):q();var e,n}function Ih(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function vg(t){return!!t&&"integerValue"in t}function wg(t){return!!t&&"arrayValue"in t}function _E(t){return!!t&&"nullValue"in t}function IE(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Eh(t){return!!t&&"mapValue"in t}function Iu(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Fi(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Iu(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Iu(t.arrayValue.values[n]);return e}return Object.assign({},t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(e){this.value=e}static empty(){return new It({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Eh(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Iu(n)}setAll(e){let n=ht.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Iu(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Eh(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Fn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Eh(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Fi(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new It(Iu(this.value))}}function EE(t){const e=[];return Fi(t.fields,(n,r)=>{const i=new ht([n]);if(Eh(r)){const s=EE(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new ro(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class sL{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.A=null}}function TE(t,e=null,n=[],r=[],i=null,s=null,o=null){return new sL(t,e,n,r,i,s,o)}function Eu(t){const e=L(t);if(e.A===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>aL(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Vi(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=kh(e.startAt)),e.endAt&&(n+="|ub:",n+=kh(e.endAt)),e.A=n}return e.A}function oL(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(r=n).field.canonicalString()} ${r.op} ${gg(r.value)}`;var r}).join(", ")}]`),Vi(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: "+kh(t.startAt)),t.endAt&&(e+=", endAt: "+kh(t.endAt)),`Target(${e})`}function Th(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let i=0;i<t.orderBy.length;i++)if(!mL(t.orderBy[i],e.orderBy[i]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let i=0;i<t.filters.length;i++)if(n=t.filters[i],r=e.filters[i],n.op!==r.op||!n.field.isEqual(r.field)||!Fn(n.value,r.value))return!1;var n,r;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!CE(t.startAt,e.startAt)&&CE(t.endAt,e.endAt)}function Sh(t){return z.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class xt extends class{}{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.R(e,n,r):new uL(e,n,r):n==="array-contains"?new hL(e,r):n==="in"?new dL(e,r):n==="not-in"?new fL(e,r):n==="array-contains-any"?new pL(e,r):new xt(e,n,r)}static R(e,n,r){return n==="in"?new lL(e,r):new cL(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.P(so(n,this.value)):n!==null&&Bi(this.value)===Bi(n)&&this.P(so(n,this.value))}P(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return q()}}v(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}function aL(t){return t.field.canonicalString()+t.op.toString()+gg(t.value)}class uL extends xt{constructor(e,n,r){super(e,n,r),this.key=z.fromName(r.referenceValue)}matches(e){const n=z.comparator(e.key,this.key);return this.P(n)}}class lL extends xt{constructor(e,n){super(e,"in",n),this.keys=SE("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class cL extends xt{constructor(e,n){super(e,"not-in",n),this.keys=SE("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function SE(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>z.fromName(r.referenceValue))}class hL extends xt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return wg(n)&&_u(n.arrayValue,this.value)}}class dL extends xt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&_u(this.value.arrayValue,n)}}class fL extends xt{constructor(e,n){super(e,"not-in",n)}matches(e){if(_u(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!_u(this.value.arrayValue,n)}}class pL extends xt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!wg(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>_u(this.value.arrayValue,r))}}class Tu{constructor(e,n){this.position=e,this.before=n}}function kh(t){return`${t.before?"b":"a"}:${t.position.map(e=>gg(e)).join(",")}`}class oo{constructor(e,n="asc"){this.field=e,this.dir=n}}function mL(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function kE(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=z.comparator(z.fromName(o.referenceValue),n.key):r=so(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return t.before?r<=0:r<0}function CE(t,e){if(t===null)return e===null;if(e===null||t.before!==e.before||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Fn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=u,this.V=null,this.S=null,this.startAt,this.endAt}}function bE(t,e,n,r,i,s,o,a){return new ar(t,e,n,r,i,s,o,a)}function ao(t){return new ar(t)}function Ch(t){return!Vi(t.limit)&&t.limitType==="F"}function bh(t){return!Vi(t.limit)&&t.limitType==="L"}function _g(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Ig(t){for(const e of t.filters)if(e.v())return e.field;return null}function Eg(t){return t.collectionGroup!==null}function uo(t){const e=L(t);if(e.V===null){e.V=[];const n=Ig(e),r=_g(e);if(n!==null&&r===null)n.isKeyField()||e.V.push(new oo(n)),e.V.push(new oo(ht.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.V.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.V.push(new oo(ht.keyField(),s))}}}return e.V}function hn(t){const e=L(t);if(!e.S)if(e.limitType==="F")e.S=TE(e.path,e.collectionGroup,uo(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of uo(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new oo(s.field,o))}const r=e.endAt?new Tu(e.endAt.position,!e.endAt.before):null,i=e.startAt?new Tu(e.startAt.position,!e.startAt.before):null;e.S=TE(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e.S}function AE(t,e,n){return new ar(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Su(t,e){return Th(hn(t),hn(e))&&t.limitType===e.limitType}function RE(t){return`${Eu(hn(t))}|lt:${t.limitType}`}function Tg(t){return`Query(target=${oL(hn(t))}; limitType=${t.limitType})`}function ku(t,e){return e.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):z.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,r){for(const i of n.explicitOrderBy)if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!kE(n.startAt,uo(n),r)||n.endAt&&kE(n.endAt,uo(n),r))}(t,e)}function NE(t){return(e,n)=>{let r=!1;for(const i of uo(t)){const s=gL(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function gL(t,e,n){const r=t.field.isKeyField()?z.comparator(e.key,n.key):function(i,s,o){const a=s.data.field(i),u=o.data.field(i);return a!==null&&u!==null?so(a,u):q()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return q()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PE(t,e){if(t.D){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:_h(e)?"-0":e}}function xE(t){return{integerValue:""+t}}function DE(t,e){return vE(e)?xE(e):PE(t,e)}/**
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
 */class Ah{constructor(){this._=void 0}}function yL(t,e,n){return t instanceof lo?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&(s.fields.__previous_value__=i),{mapValue:s}}(n,e):t instanceof zi?LE(t,e):t instanceof ji?ME(t,e):function(r,i){const s=OE(r,i),o=$E(s)+$E(r.C);return vg(s)&&vg(r.C)?xE(o):PE(r.N,o)}(t,e)}function vL(t,e,n){return t instanceof zi?LE(t,e):t instanceof ji?ME(t,e):n}function OE(t,e){return t instanceof co?vg(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class lo extends Ah{}class zi extends Ah{constructor(e){super(),this.elements=e}}function LE(t,e){const n=UE(e);for(const r of t.elements)n.some(i=>Fn(i,r))||n.push(r);return{arrayValue:{values:n}}}class ji extends Ah{constructor(e){super(),this.elements=e}}function ME(t,e){let n=UE(e);for(const r of t.elements)n=n.filter(i=>!Fn(i,r));return{arrayValue:{values:n}}}class co extends Ah{constructor(e,n){super(),this.N=e,this.C=n}}function $E(t){return Oe(t.integerValue||t.doubleValue)}function UE(t){return wg(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cu{constructor(e,n){this.field=e,this.transform=n}}function wL(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof zi&&r instanceof zi||n instanceof ji&&r instanceof ji?no(n.elements,r.elements,Fn):n instanceof co&&r instanceof co?Fn(n.C,r.C):n instanceof lo&&r instanceof lo}(t.transform,e.transform)}class _L{constructor(e,n){this.version=e,this.transformResults=n}}class Le{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Le}static exists(e){return new Le(void 0,e)}static updateTime(e){return new Le(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Rh(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Nh{}function IL(t,e,n){t instanceof bu?function(r,i,s){const o=r.value.clone(),a=zE(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Yr?function(r,i,s){if(!Rh(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=zE(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(BE(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function Sg(t,e,n){t instanceof bu?function(r,i,s){if(!Rh(r.precondition,i))return;const o=r.value.clone(),a=jE(r.fieldTransforms,s,i);o.setAll(a),i.convertToFoundDocument(VE(i),o).setHasLocalMutations()}(t,e,n):t instanceof Yr?function(r,i,s){if(!Rh(r.precondition,i))return;const o=jE(r.fieldTransforms,s,i),a=i.data;a.setAll(BE(r)),a.setAll(o),i.convertToFoundDocument(VE(i),a).setHasLocalMutations()}(t,e,n):function(r,i){Rh(r.precondition,i)&&i.convertToNoDocument(Q.min())}(t,e)}function EL(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=OE(r.transform,i||null);s!=null&&(n==null&&(n=It.empty()),n.set(r.field,s))}return n||null}function FE(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&no(n,r,(i,s)=>wL(i,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}function VE(t){return t.isFoundDocument()?t.version:Q.min()}class bu extends Nh{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}}class Yr extends Nh{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}}function BE(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function zE(t,e,n){const r=new Map;H(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,vL(o,a,n[i]))}return r}function jE(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,yL(s,o,e))}return r}class Au extends Nh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}}class kg extends Nh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TL{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Me,Z;function qE(t){switch(t){default:return q();case E.CANCELLED:case E.UNKNOWN:case E.DEADLINE_EXCEEDED:case E.RESOURCE_EXHAUSTED:case E.INTERNAL:case E.UNAVAILABLE:case E.UNAUTHENTICATED:return!1;case E.INVALID_ARGUMENT:case E.NOT_FOUND:case E.ALREADY_EXISTS:case E.PERMISSION_DENIED:case E.FAILED_PRECONDITION:case E.ABORTED:case E.OUT_OF_RANGE:case E.UNIMPLEMENTED:case E.DATA_LOSS:return!0}}function HE(t){if(t===void 0)return De("GRPC error has no .code"),E.UNKNOWN;switch(t){case Me.OK:return E.OK;case Me.CANCELLED:return E.CANCELLED;case Me.UNKNOWN:return E.UNKNOWN;case Me.DEADLINE_EXCEEDED:return E.DEADLINE_EXCEEDED;case Me.RESOURCE_EXHAUSTED:return E.RESOURCE_EXHAUSTED;case Me.INTERNAL:return E.INTERNAL;case Me.UNAVAILABLE:return E.UNAVAILABLE;case Me.UNAUTHENTICATED:return E.UNAUTHENTICATED;case Me.INVALID_ARGUMENT:return E.INVALID_ARGUMENT;case Me.NOT_FOUND:return E.NOT_FOUND;case Me.ALREADY_EXISTS:return E.ALREADY_EXISTS;case Me.PERMISSION_DENIED:return E.PERMISSION_DENIED;case Me.FAILED_PRECONDITION:return E.FAILED_PRECONDITION;case Me.ABORTED:return E.ABORTED;case Me.OUT_OF_RANGE:return E.OUT_OF_RANGE;case Me.UNIMPLEMENTED:return E.UNIMPLEMENTED;case Me.DATA_LOSS:return E.DATA_LOSS;default:return q()}}(Z=Me||(Me={}))[Z.OK=0]="OK",Z[Z.CANCELLED=1]="CANCELLED",Z[Z.UNKNOWN=2]="UNKNOWN",Z[Z.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Z[Z.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Z[Z.NOT_FOUND=5]="NOT_FOUND",Z[Z.ALREADY_EXISTS=6]="ALREADY_EXISTS",Z[Z.PERMISSION_DENIED=7]="PERMISSION_DENIED",Z[Z.UNAUTHENTICATED=16]="UNAUTHENTICATED",Z[Z.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Z[Z.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Z[Z.ABORTED=10]="ABORTED",Z[Z.OUT_OF_RANGE=11]="OUT_OF_RANGE",Z[Z.UNIMPLEMENTED=12]="UNIMPLEMENTED",Z[Z.INTERNAL=13]="INTERNAL",Z[Z.UNAVAILABLE=14]="UNAVAILABLE",Z[Z.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve{constructor(e,n){this.comparator=e,this.root=n||dt.EMPTY}insert(e,n){return new Ve(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,dt.BLACK,null,null))}remove(e){return new Ve(this.comparator,this.root.remove(e,this.comparator).copy(null,null,dt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ph(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ph(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ph(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ph(this.root,e,this.comparator,!0)}}class Ph{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class dt{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r!=null?r:dt.RED,this.left=i!=null?i:dt.EMPTY,this.right=s!=null?s:dt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new dt(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,i!=null?i:this.left,s!=null?s:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return dt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return dt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,dt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,dt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw q();const e=this.left.check();if(e!==this.right.check())throw q();return e+(this.isRed()?0:1)}}dt.EMPTY=null,dt.RED=!0,dt.BLACK=!1;dt.EMPTY=new class{constructor(){this.size=0}get key(){throw q()}get value(){throw q()}get color(){throw q()}get left(){throw q()}get right(){throw q()}copy(t,e,n,r,i){return this}insert(t,e,n){return new dt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce{constructor(e){this.comparator=e,this.data=new Ve(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new WE(this.data.getIterator())}getIteratorFrom(e){return new WE(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Ce)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ce(this.comparator);return n.data=e,n}}class WE{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SL=new Ve(z.comparator);function dn(){return SL}const kL=new Ve(z.comparator);function Cg(){return kL}const CL=new Ve(z.comparator);function GE(){return CL}const bL=new Ce(z.comparator);function ce(...t){let e=bL;for(const n of t)e=e.add(n);return e}const AL=new Ce(J);function xh(){return AL}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ru{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n){const r=new Map;return r.set(e,Nu.createSynthesizedTargetChangeForCurrentChange(e,n)),new Ru(Q.min(),r,xh(),dn(),ce())}}class Nu{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n){return new Nu(Qe.EMPTY_BYTE_STRING,n,ce(),ce(),ce())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dh{constructor(e,n,r,i){this.k=e,this.removedTargetIds=n,this.key=r,this.$=i}}class KE{constructor(e,n){this.targetId=e,this.O=n}}class QE{constructor(e,n,r=Qe.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class YE{constructor(){this.F=0,this.M=JE(),this.L=Qe.EMPTY_BYTE_STRING,this.B=!1,this.U=!0}get current(){return this.B}get resumeToken(){return this.L}get q(){return this.F!==0}get K(){return this.U}j(e){e.approximateByteSize()>0&&(this.U=!0,this.L=e)}W(){let e=ce(),n=ce(),r=ce();return this.M.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:q()}}),new Nu(this.L,this.B,e,n,r)}G(){this.U=!1,this.M=JE()}H(e,n){this.U=!0,this.M=this.M.insert(e,n)}J(e){this.U=!0,this.M=this.M.remove(e)}Y(){this.F+=1}X(){this.F-=1}Z(){this.U=!0,this.B=!0}}class RL{constructor(e){this.tt=e,this.et=new Map,this.nt=dn(),this.st=XE(),this.it=new Ce(J)}rt(e){for(const n of e.k)e.$&&e.$.isFoundDocument()?this.ot(n,e.$):this.at(n,e.key,e.$);for(const n of e.removedTargetIds)this.at(n,e.key,e.$)}ct(e){this.forEachTarget(e,n=>{const r=this.ut(n);switch(e.state){case 0:this.ht(n)&&r.j(e.resumeToken);break;case 1:r.X(),r.q||r.G(),r.j(e.resumeToken);break;case 2:r.X(),r.q||this.removeTarget(n);break;case 3:this.ht(n)&&(r.Z(),r.j(e.resumeToken));break;case 4:this.ht(n)&&(this.lt(n),r.j(e.resumeToken));break;default:q()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.et.forEach((r,i)=>{this.ht(i)&&n(i)})}ft(e){const n=e.targetId,r=e.O.count,i=this.dt(n);if(i){const s=i.target;if(Sh(s))if(r===0){const o=new z(s.path);this.at(n,o,Ee.newNoDocument(o,Q.min()))}else H(r===1);else this.wt(n)!==r&&(this.lt(n),this.it=this.it.add(n))}}_t(e){const n=new Map;this.et.forEach((s,o)=>{const a=this.dt(o);if(a){if(s.current&&Sh(a.target)){const u=new z(a.target.path);this.nt.get(u)!==null||this.gt(o,u)||this.at(o,u,Ee.newNoDocument(u,e))}s.K&&(n.set(o,s.W()),s.G())}});let r=ce();this.st.forEach((s,o)=>{let a=!0;o.forEachWhile(u=>{const l=this.dt(u);return!l||l.purpose===2||(a=!1,!1)}),a&&(r=r.add(s))});const i=new Ru(e,n,this.it,this.nt,r);return this.nt=dn(),this.st=XE(),this.it=new Ce(J),i}ot(e,n){if(!this.ht(e))return;const r=this.gt(e,n.key)?2:0;this.ut(e).H(n.key,r),this.nt=this.nt.insert(n.key,n),this.st=this.st.insert(n.key,this.yt(n.key).add(e))}at(e,n,r){if(!this.ht(e))return;const i=this.ut(e);this.gt(e,n)?i.H(n,1):i.J(n),this.st=this.st.insert(n,this.yt(n).delete(e)),r&&(this.nt=this.nt.insert(n,r))}removeTarget(e){this.et.delete(e)}wt(e){const n=this.ut(e).W();return this.tt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Y(e){this.ut(e).Y()}ut(e){let n=this.et.get(e);return n||(n=new YE,this.et.set(e,n)),n}yt(e){let n=this.st.get(e);return n||(n=new Ce(J),this.st=this.st.insert(e,n)),n}ht(e){const n=this.dt(e)!==null;return n||N("WatchChangeAggregator","Detected inactive target",e),n}dt(e){const n=this.et.get(e);return n&&n.q?null:this.tt.Tt(e)}lt(e){this.et.set(e,new YE),this.tt.getRemoteKeysForTarget(e).forEach(n=>{this.at(e,n,null)})}gt(e,n){return this.tt.getRemoteKeysForTarget(e).has(n)}}function XE(){return new Ve(z.comparator)}function JE(){return new Ve(z.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NL=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),PL=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class xL{constructor(e,n){this.databaseId=e,this.D=n}}function Pu(t,e){return t.D?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function ZE(t,e){return t.D?e.toBase64():e.toUint8Array()}function DL(t,e){return Pu(t,e.toTimestamp())}function Ye(t){return H(!!t),Q.fromTimestamp(function(e){const n=Qr(e);return new Ke(n.seconds,n.nanos)}(t))}function bg(t,e){return function(n){return new ie(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function eT(t){const e=ie.fromString(t);return H(dT(e)),e}function xu(t,e){return bg(t.databaseId,e.path)}function Vn(t,e){const n=eT(e);if(n.get(1)!==t.databaseId.projectId)throw new C(E.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new C(E.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new z(nT(n))}function Ag(t,e){return bg(t.databaseId,e)}function tT(t){const e=eT(t);return e.length===4?ie.emptyPath():nT(e)}function Du(t){return new ie(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function nT(t){return H(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function rT(t,e,n){return{name:xu(t,e),fields:n.value.mapValue.fields}}function iT(t,e,n){const r=Vn(t,e.name),i=Ye(e.updateTime),s=new It({mapValue:{fields:e.fields}}),o=Ee.newFoundDocument(r,i,s);return n&&o.setHasCommittedMutations(),n?o.setHasCommittedMutations():o}function OL(t,e){return"found"in e?function(n,r){H(!!r.found),r.found.name,r.found.updateTime;const i=Vn(n,r.found.name),s=Ye(r.found.updateTime),o=new It({mapValue:{fields:r.found.fields}});return Ee.newFoundDocument(i,s,o)}(t,e):"missing"in e?function(n,r){H(!!r.missing),H(!!r.readTime);const i=Vn(n,r.missing),s=Ye(r.readTime);return Ee.newNoDocument(i,s)}(t,e):q()}function LL(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:q()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(u,l){return u.D?(H(l===void 0||typeof l=="string"),Qe.fromBase64String(l||"")):(H(l===void 0||l instanceof Uint8Array),Qe.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const l=u.code===void 0?E.UNKNOWN:HE(u.code);return new C(l,u.message||"")}(o);n=new QE(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Vn(t,r.document.name),s=Ye(r.document.updateTime),o=new It({mapValue:{fields:r.document.fields}}),a=Ee.newFoundDocument(i,s,o),u=r.targetIds||[],l=r.removedTargetIds||[];n=new Dh(u,l,a.key,a)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Vn(t,r.document),s=r.readTime?Ye(r.readTime):Q.min(),o=Ee.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Dh([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Vn(t,r.document),s=r.removedTargetIds||[];n=new Dh([],s,i,null)}else{if(!("filter"in e))return q();{e.filter;const r=e.filter;r.targetId;const i=r.count||0,s=new TL(i),o=r.targetId;n=new KE(o,s)}}return n}function Oh(t,e){let n;if(e instanceof bu)n={update:rT(t,e.key,e.value)};else if(e instanceof Au)n={delete:xu(t,e.key)};else if(e instanceof Yr)n={update:rT(t,e.key,e.data),updateMask:zL(e.fieldMask)};else{if(!(e instanceof kg))return q();n={verify:xu(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,s){const o=s.transform;if(o instanceof lo)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof zi)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof ji)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof co)return{fieldPath:s.field.canonicalString(),increment:o.C};throw q()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:DL(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:q()}(t,e.precondition)),n}function sT(t,e){const n=e.currentDocument?function(i){return i.updateTime!==void 0?Le.updateTime(Ye(i.updateTime)):i.exists!==void 0?Le.exists(i.exists):Le.none()}(e.currentDocument):Le.none(),r=e.updateTransforms?e.updateTransforms.map(i=>function(s,o){let a=null;if("setToServerValue"in o)H(o.setToServerValue==="REQUEST_TIME"),a=new lo;else if("appendMissingElements"in o){const l=o.appendMissingElements.values||[];a=new zi(l)}else if("removeAllFromArray"in o){const l=o.removeAllFromArray.values||[];a=new ji(l)}else"increment"in o?a=new co(s,o.increment):q();const u=ht.fromServerFormat(o.fieldPath);return new Cu(u,a)}(t,i)):[];if(e.update){e.update.name;const i=Vn(t,e.update.name),s=new It({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(a){const u=a.fieldPaths||[];return new ro(u.map(l=>ht.fromServerFormat(l)))}(e.updateMask);return new Yr(i,s,o,n,r)}return new bu(i,s,n,r)}if(e.delete){const i=Vn(t,e.delete);return new Au(i,n)}if(e.verify){const i=Vn(t,e.verify);return new kg(i,n)}return q()}function ML(t,e){return t&&t.length>0?(H(e!==void 0),t.map(n=>function(r,i){let s=r.updateTime?Ye(r.updateTime):Ye(i);return s.isEqual(Q.min())&&(s=Ye(i)),new _L(s,r.transformResults||[])}(n,e))):[]}function oT(t,e){return{documents:[Ag(t,e.path)]}}function aT(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Ag(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Ag(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(a){if(a.length===0)return;const u=a.map(l=>function(c){if(c.op==="=="){if(IE(c.value))return{unaryFilter:{field:ho(c.field),op:"IS_NAN"}};if(_E(c.value))return{unaryFilter:{field:ho(c.field),op:"IS_NULL"}}}else if(c.op==="!="){if(IE(c.value))return{unaryFilter:{field:ho(c.field),op:"IS_NOT_NAN"}};if(_E(c.value))return{unaryFilter:{field:ho(c.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ho(c.field),op:FL(c.op),value:c.value}}}(l));return u.length===1?u[0]:{compositeFilter:{op:"AND",filters:u}}}(e.filters);i&&(n.structuredQuery.where=i);const s=function(a){if(a.length!==0)return a.map(u=>function(l){return{field:ho(l.field),direction:UL(l.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(a,u){return a.D||Vi(u)?u:{value:u}}(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=cT(e.startAt)),e.endAt&&(n.structuredQuery.endAt=cT(e.endAt)),n}function uT(t){let e=tT(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){H(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=lT(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(c=>function(h){return new oo(fo(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(c)));let a=null;n.limit&&(a=function(c){let h;return h=typeof c=="object"?c.value:c,Vi(h)?null:h}(n.limit));let u=null;n.startAt&&(u=hT(n.startAt));let l=null;return n.endAt&&(l=hT(n.endAt)),bE(e,i,o,s,a,"F",u,l)}function $L(t,e){const n=function(r,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return q()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function lT(t){return t?t.unaryFilter!==void 0?[BL(t)]:t.fieldFilter!==void 0?[VL(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>lT(e)).reduce((e,n)=>e.concat(n)):q():[]}function cT(t){return{before:t.before,values:t.position}}function hT(t){const e=!!t.before,n=t.values||[];return new Tu(n,e)}function UL(t){return NL[t]}function FL(t){return PL[t]}function ho(t){return{fieldPath:t.canonicalString()}}function fo(t){return ht.fromServerFormat(t.fieldPath)}function VL(t){return xt.create(fo(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return q()}}(t.fieldFilter.op),t.fieldFilter.value)}function BL(t){switch(t.unaryFilter.op){case"IS_NAN":const e=fo(t.unaryFilter.field);return xt.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=fo(t.unaryFilter.field);return xt.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=fo(t.unaryFilter.field);return xt.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=fo(t.unaryFilter.field);return xt.create(i,"!=",{nullValue:"NULL_VALUE"});default:return q()}}function zL(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function dT(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sn(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=fT(e)),e=jL(t.get(n),e);return fT(e)}function jL(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case"":n+="";break;default:n+=s}}return n}function fT(t){return t+""}function ur(t){const e=t.length;if(H(e>=2),e===2)return H(t.charAt(0)===""&&t.charAt(1)===""),ie.emptyPath();const n=e-2,r=[];let i="";for(let s=0;s<e;){const o=t.indexOf("",s);switch((o<0||o>n)&&q(),t.charAt(o+1)){case"":const a=t.substring(s,o);let u;i.length===0?u=a:(i+=a,u=i,i=""),r.push(u);break;case"":i+=t.substring(s,o),i+="\0";break;case"":i+=t.substring(s,o+1);break;default:q()}s=o+2}return new ie(r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qL{constructor(e,n){this.seconds=e,this.nanoseconds=n}}class en{constructor(e,n,r){this.ownerId=e,this.allowTabSynchronization=n,this.leaseTimestampMs=r}}en.store="owner",en.key="owner";class Xr{constructor(e,n,r){this.userId=e,this.lastAcknowledgedBatchId=n,this.lastStreamToken=r}}Xr.store="mutationQueues",Xr.keyPath="userId";class ve{constructor(e,n,r,i,s){this.userId=e,this.batchId=n,this.localWriteTimeMs=r,this.baseMutations=i,this.mutations=s}}ve.store="mutations",ve.keyPath="batchId",ve.userMutationsIndex="userMutationsIndex",ve.userMutationsKeyPath=["userId","batchId"];class Et{constructor(){}static prefixForUser(e){return[e]}static prefixForPath(e,n){return[e,Sn(n)]}static key(e,n,r){return[e,Sn(n),r]}}Et.store="documentMutations",Et.PLACEHOLDER=new Et;class HL{constructor(e,n){this.path=e,this.readTime=n}}class WL{constructor(e,n){this.path=e,this.version=n}}class be{constructor(e,n,r,i,s,o){this.unknownDocument=e,this.noDocument=n,this.document=r,this.hasCommittedMutations=i,this.readTime=s,this.parentPath=o}}be.store="remoteDocuments",be.readTimeIndex="readTimeIndex",be.readTimeIndexPath="readTime",be.collectionReadTimeIndex="collectionReadTimeIndex",be.collectionReadTimeIndexPath=["parentPath","readTime"];class Bn{constructor(e){this.byteSize=e}}Bn.store="remoteDocumentGlobal",Bn.key="remoteDocumentGlobalKey";class jt{constructor(e,n,r,i,s,o,a){this.targetId=e,this.canonicalId=n,this.readTime=r,this.resumeToken=i,this.lastListenSequenceNumber=s,this.lastLimboFreeSnapshotVersion=o,this.query=a}}jt.store="targets",jt.keyPath="targetId",jt.queryTargetsIndexName="queryTargetsIndex",jt.queryTargetsKeyPath=["canonicalId","targetId"];class ft{constructor(e,n,r){this.targetId=e,this.path=n,this.sequenceNumber=r}}ft.store="targetDocuments",ft.keyPath=["targetId","path"],ft.documentTargetsIndex="documentTargetsIndex",ft.documentTargetsKeyPath=["path","targetId"];class tn{constructor(e,n,r,i){this.highestTargetId=e,this.highestListenSequenceNumber=n,this.lastRemoteSnapshotVersion=r,this.targetCount=i}}tn.key="targetGlobalKey",tn.store="targetGlobal";class qi{constructor(e,n){this.collectionId=e,this.parent=n}}qi.store="collectionParents",qi.keyPath=["collectionId","parent"];class lr{constructor(e,n,r,i){this.clientId=e,this.updateTimeMs=n,this.networkEnabled=r,this.inForeground=i}}lr.store="clientMetadata",lr.keyPath="clientId";class po{constructor(e,n,r){this.bundleId=e,this.createTime=n,this.version=r}}po.store="bundles",po.keyPath="bundleId";class mo{constructor(e,n,r){this.name=e,this.readTime=n,this.bundledQuery=r}}mo.store="namedQueries",mo.keyPath="name";const GL=[Xr.store,ve.store,Et.store,be.store,jt.store,en.store,tn.store,ft.store,lr.store,Bn.store,qi.store,po.store,mo.store],pT="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class mT{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Lh{constructor(e,n){this.action=e,this.transaction=n,this.aborted=!1,this.Et=new Ge,this.transaction.oncomplete=()=>{this.Et.resolve()},this.transaction.onabort=()=>{n.error?this.Et.reject(new Ou(e,n.error)):this.Et.resolve()},this.transaction.onerror=r=>{const i=Rg(r.target.error);this.Et.reject(new Ou(e,i))}}static open(e,n,r,i){try{return new Lh(n,e.transaction(i,r))}catch(s){throw new Ou(n,s)}}get It(){return this.Et.promise}abort(e){e&&this.Et.reject(e),this.aborted||(N("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}store(e){const n=this.transaction.objectStore(e);return new QL(n)}}class kn{constructor(e,n,r){this.name=e,this.version=n,this.At=r,kn.Rt(ye())===12.2&&De("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return N("SimpleDb","Removing database:",e),Wi(window.indexedDB.deleteDatabase(e)).toPromise()}static bt(){if(!Ec())return!1;if(kn.Pt())return!0;const e=ye(),n=kn.Rt(e),r=0<n&&n<10,i=kn.vt(e),s=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||s)}static Pt(){var e;return typeof process!="undefined"&&((e=process.env)===null||e===void 0?void 0:e.Vt)==="YES"}static St(e,n){return e.store(n)}static Rt(e){const n=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=n?n[1].split("_").slice(0,2).join("."):"-1";return Number(r)}static vt(e){const n=e.match(/Android ([\d.]+)/i),r=n?n[1].split(".").slice(0,2).join("."):"-1";return Number(r)}async Dt(e){return this.db||(N("SimpleDb","Opening database:",this.name),this.db=await new Promise((n,r)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const o=s.target.result;n(o)},i.onblocked=()=>{r(new Ou(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const o=s.target.error;o.name==="VersionError"?r(new C(E.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new C(E.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new Ou(e,o))},i.onupgradeneeded=s=>{N("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const o=s.target.result;this.At.Ct(o,i.transaction,s.oldVersion,this.version).next(()=>{N("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.Nt&&(this.db.onversionchange=n=>this.Nt(n)),this.db}xt(e){this.Nt=e,this.db&&(this.db.onversionchange=n=>e(n))}async runTransaction(e,n,r,i){const s=n==="readonly";let o=0;for(;;){++o;try{this.db=await this.Dt(e);const a=Lh.open(this.db,e,s?"readonly":"readwrite",r),u=i(a).catch(l=>(a.abort(l),T.reject(l))).toPromise();return u.catch(()=>{}),await a.It,u}catch(a){const u=a.name!=="FirebaseError"&&o<3;if(N("SimpleDb","Transaction failed with error:",a.message,"Retrying:",u),this.close(),!u)return Promise.reject(a)}}}close(){this.db&&this.db.close(),this.db=void 0}}class KL{constructor(e){this.kt=e,this.$t=!1,this.Ot=null}get isDone(){return this.$t}get Ft(){return this.Ot}set cursor(e){this.kt=e}done(){this.$t=!0}Mt(e){this.Ot=e}delete(){return Wi(this.kt.delete())}}class Ou extends C{constructor(e,n){super(E.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${n}`),this.name="IndexedDbTransactionError"}}function Hi(t){return t.name==="IndexedDbTransactionError"}class QL{constructor(e){this.store=e}put(e,n){let r;return n!==void 0?(N("SimpleDb","PUT",this.store.name,e,n),r=this.store.put(n,e)):(N("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),Wi(r)}add(e){return N("SimpleDb","ADD",this.store.name,e,e),Wi(this.store.add(e))}get(e){return Wi(this.store.get(e)).next(n=>(n===void 0&&(n=null),N("SimpleDb","GET",this.store.name,e,n),n))}delete(e){return N("SimpleDb","DELETE",this.store.name,e),Wi(this.store.delete(e))}count(){return N("SimpleDb","COUNT",this.store.name),Wi(this.store.count())}Lt(e,n){const r=this.cursor(this.options(e,n)),i=[];return this.Bt(r,(s,o)=>{i.push(o)}).next(()=>i)}Ut(e,n){N("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,n);r.qt=!1;const i=this.cursor(r);return this.Bt(i,(s,o,a)=>a.delete())}Kt(e,n){let r;n?r=e:(r={},n=e);const i=this.cursor(r);return this.Bt(i,n)}jt(e){const n=this.cursor({});return new T((r,i)=>{n.onerror=s=>{const o=Rg(s.target.error);i(o)},n.onsuccess=s=>{const o=s.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}Bt(e,n){const r=[];return new T((i,s)=>{e.onerror=o=>{s(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void i();const u=new KL(a),l=n(a.primaryKey,a.value,u);if(l instanceof T){const c=l.catch(h=>(u.done(),T.reject(h)));r.push(c)}u.isDone?i():u.Ft===null?a.continue():a.continue(u.Ft)}}).next(()=>T.waitFor(r))}options(e,n){let r;return e!==void 0&&(typeof e=="string"?r=e:n=e),{index:r,range:n}}cursor(e){let n="next";if(e.reverse&&(n="prev"),e.index){const r=this.store.index(e.index);return e.qt?r.openKeyCursor(e.range,n):r.openCursor(e.range,n)}return this.store.openCursor(e.range,n)}}function Wi(t){return new T((e,n)=>{t.onsuccess=r=>{const i=r.target.result;e(i)},t.onerror=r=>{const i=Rg(r.target.error);n(i)}})}let gT=!1;function Rg(t){const e=kn.Rt(ye());if(e>=12.2&&e<13){const n="An internal error was encountered in the Indexed Database server";if(t.message.indexOf(n)>=0){const r=new C("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${n}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return gT||(gT=!0,setTimeout(()=>{throw r},0)),r}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yT extends mT{constructor(e,n){super(),this.Qt=e,this.currentSequenceNumber=n}}function qt(t,e){const n=L(t);return kn.St(n.Qt,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ng{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&IL(s,e,r[i])}}applyToLocalView(e){for(const n of this.baseMutations)n.key.isEqual(e.key)&&Sg(n,e,this.localWriteTime);for(const n of this.mutations)n.key.isEqual(e.key)&&Sg(n,e,this.localWriteTime)}applyToLocalDocumentSet(e){this.mutations.forEach(n=>{const r=e.get(n.key),i=r;this.applyToLocalView(i),r.isValidDocument()||i.convertToNoDocument(Q.min())})}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ce())}isEqual(e){return this.batchId===e.batchId&&no(this.mutations,e.mutations,(n,r)=>FE(n,r))&&no(this.baseMutations,e.baseMutations,(n,r)=>FE(n,r))}}class Pg{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){H(e.mutations.length===r.length);let i=GE();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Pg(e,n,r,i)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr{constructor(e,n,r,i,s=Q.min(),o=Q.min(),a=Qe.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new Jr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new Jr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Jr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vT{constructor(e){this.Wt=e}}function xg(t,e){if(e.document)return iT(t.Wt,e.document,!!e.hasCommittedMutations);if(e.noDocument){const n=z.fromSegments(e.noDocument.path),r=yo(e.noDocument.readTime),i=Ee.newNoDocument(n,r);return e.hasCommittedMutations?i.setHasCommittedMutations():i}if(e.unknownDocument){const n=z.fromSegments(e.unknownDocument.path),r=yo(e.unknownDocument.version);return Ee.newUnknownDocument(n,r)}return q()}function wT(t,e,n){const r=Dg(n),i=e.key.path.popLast().toArray();if(e.isFoundDocument()){const s=function(a,u){return{name:xu(a,u.key),fields:u.data.value.mapValue.fields,updateTime:Pu(a,u.version.toTimestamp())}}(t.Wt,e),o=e.hasCommittedMutations;return new be(null,null,s,o,r,i)}if(e.isNoDocument()){const s=e.key.path.toArray(),o=go(e.version),a=e.hasCommittedMutations;return new be(null,new HL(s,o),null,a,r,i)}if(e.isUnknownDocument()){const s=e.key.path.toArray(),o=go(e.version);return new be(new WL(s,o),null,null,!0,r,i)}return q()}function Dg(t){const e=t.toTimestamp();return[e.seconds,e.nanoseconds]}function _T(t){const e=new Ke(t[0],t[1]);return Q.fromTimestamp(e)}function go(t){const e=t.toTimestamp();return new qL(e.seconds,e.nanoseconds)}function yo(t){const e=new Ke(t.seconds,t.nanoseconds);return Q.fromTimestamp(e)}function vo(t,e){const n=(e.baseMutations||[]).map(s=>sT(t.Wt,s));for(let s=0;s<e.mutations.length-1;++s){const o=e.mutations[s];if(s+1<e.mutations.length&&e.mutations[s+1].transform!==void 0){const a=e.mutations[s+1];o.updateTransforms=a.transform.fieldTransforms,e.mutations.splice(s+1,1),++s}}const r=e.mutations.map(s=>sT(t.Wt,s)),i=Ke.fromMillis(e.localWriteTimeMs);return new Ng(e.batchId,i,n,r)}function Lu(t){const e=yo(t.readTime),n=t.lastLimboFreeSnapshotVersion!==void 0?yo(t.lastLimboFreeSnapshotVersion):Q.min();let r;var i;return t.query.documents!==void 0?(H((i=t.query).documents.length===1),r=hn(ao(tT(i.documents[0])))):r=function(s){return hn(uT(s))}(t.query),new Jr(r,t.targetId,0,t.lastListenSequenceNumber,e,n,Qe.fromBase64String(t.resumeToken))}function IT(t,e){const n=go(e.snapshotVersion),r=go(e.lastLimboFreeSnapshotVersion);let i;i=Sh(e.target)?oT(t.Wt,e.target):aT(t.Wt,e.target);const s=e.resumeToken.toBase64();return new jt(e.targetId,Eu(e.target),n,s,e.sequenceNumber,r,i)}function Og(t){const e=uT({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?AE(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YL{getBundleMetadata(e,n){return ET(e).get(n).next(r=>{if(r)return{id:(i=r).bundleId,createTime:yo(i.createTime),version:i.version};var i})}saveBundleMetadata(e,n){return ET(e).put({bundleId:(r=n).id,createTime:go(Ye(r.createTime)),version:r.version});var r}getNamedQuery(e,n){return TT(e).get(n).next(r=>{if(r)return{name:(i=r).name,query:Og(i.bundledQuery),readTime:yo(i.readTime)};var i})}saveNamedQuery(e,n){return TT(e).put(function(r){return{name:r.name,readTime:go(Ye(r.readTime)),bundledQuery:r.bundledQuery}}(n))}}function ET(t){return qt(t,po.store)}function TT(t){return qt(t,mo.store)}/**
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
 */class XL{constructor(){this.Gt=new Lg}addToCollectionParentIndex(e,n){return this.Gt.add(n),T.resolve()}getCollectionParents(e,n){return T.resolve(this.Gt.getEntries(n))}}class Lg{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Ce(ie.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Ce(ie.comparator)).toArray()}}/**
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
 */class JL{constructor(){this.zt=new Lg}addToCollectionParentIndex(e,n){if(!this.zt.has(n)){const r=n.lastSegment(),i=n.popLast();e.addOnCommittedListener(()=>{this.zt.add(n)});const s={collectionId:r,parent:Sn(i)};return ST(e).put(s)}return T.resolve()}getCollectionParents(e,n){const r=[],i=IDBKeyRange.bound([n,""],[pE(n),""],!1,!0);return ST(e).Lt(i).next(s=>{for(const o of s){if(o.collectionId!==n)break;r.push(ur(o.parent))}return r})}}function ST(t){return qt(t,qi.store)}/**
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
 */const kT={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Ht{constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new Ht(e,Ht.DEFAULT_COLLECTION_PERCENTILE,Ht.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CT(t,e,n){const r=t.store(ve.store),i=t.store(Et.store),s=[],o=IDBKeyRange.only(n.batchId);let a=0;const u=r.Kt({range:o},(c,h,d)=>(a++,d.delete()));s.push(u.next(()=>{H(a===1)}));const l=[];for(const c of n.mutations){const h=Et.key(e,c.key.path,n.batchId);s.push(i.delete(h)),l.push(c.key)}return T.waitFor(s).next(()=>l)}function Mh(t){if(!t)return 0;let e;if(t.document)e=t.document;else if(t.unknownDocument)e=t.unknownDocument;else{if(!t.noDocument)throw q();e=t.noDocument}return JSON.stringify(e).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ht.DEFAULT_COLLECTION_PERCENTILE=10,Ht.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ht.DEFAULT=new Ht(41943040,Ht.DEFAULT_COLLECTION_PERCENTILE,Ht.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ht.DISABLED=new Ht(-1,0,0);class Mg{constructor(e,n,r,i){this.userId=e,this.N=n,this.Ht=r,this.referenceDelegate=i,this.Jt={}}static Yt(e,n,r,i){H(e.uid!=="");const s=e.isAuthenticated()?e.uid:"";return new Mg(s,n,r,i)}checkEmpty(e){let n=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Zr(e).Kt({index:ve.userMutationsIndex,range:r},(i,s,o)=>{n=!1,o.done()}).next(()=>n)}addMutationBatch(e,n,r,i){const s=wo(e),o=Zr(e);return o.add({}).next(a=>{H(typeof a=="number");const u=new Ng(a,n,r,i),l=function(d,g,y){const _=y.baseMutations.map(p=>Oh(d.Wt,p)),f=y.mutations.map(p=>Oh(d.Wt,p));return new ve(g,y.batchId,y.localWriteTime.toMillis(),_,f)}(this.N,this.userId,u),c=[];let h=new Ce((d,g)=>J(d.canonicalString(),g.canonicalString()));for(const d of i){const g=Et.key(this.userId,d.key.path,a);h=h.add(d.key.path.popLast()),c.push(o.put(l)),c.push(s.put(g,Et.PLACEHOLDER))}return h.forEach(d=>{c.push(this.Ht.addToCollectionParentIndex(e,d))}),e.addOnCommittedListener(()=>{this.Jt[a]=u.keys()}),T.waitFor(c).next(()=>u)})}lookupMutationBatch(e,n){return Zr(e).get(n).next(r=>r?(H(r.userId===this.userId),vo(this.N,r)):null)}Xt(e,n){return this.Jt[n]?T.resolve(this.Jt[n]):this.lookupMutationBatch(e,n).next(r=>{if(r){const i=r.keys();return this.Jt[n]=i,i}return null})}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=IDBKeyRange.lowerBound([this.userId,r]);let s=null;return Zr(e).Kt({index:ve.userMutationsIndex,range:i},(o,a,u)=>{a.userId===this.userId&&(H(a.batchId>=r),s=vo(this.N,a)),u.done()}).next(()=>s)}getHighestUnacknowledgedBatchId(e){const n=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=-1;return Zr(e).Kt({index:ve.userMutationsIndex,range:n,reverse:!0},(i,s,o)=>{r=s.batchId,o.done()}).next(()=>r)}getAllMutationBatches(e){const n=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return Zr(e).Lt(ve.userMutationsIndex,n).next(r=>r.map(i=>vo(this.N,i)))}getAllMutationBatchesAffectingDocumentKey(e,n){const r=Et.prefixForPath(this.userId,n.path),i=IDBKeyRange.lowerBound(r),s=[];return wo(e).Kt({range:i},(o,a,u)=>{const[l,c,h]=o,d=ur(c);if(l===this.userId&&n.path.isEqual(d))return Zr(e).get(h).next(g=>{if(!g)throw q();H(g.userId===this.userId),s.push(vo(this.N,g))});u.done()}).next(()=>s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ce(J);const i=[];return n.forEach(s=>{const o=Et.prefixForPath(this.userId,s.path),a=IDBKeyRange.lowerBound(o),u=wo(e).Kt({range:a},(l,c,h)=>{const[d,g,y]=l,_=ur(g);d===this.userId&&s.path.isEqual(_)?r=r.add(y):h.done()});i.push(u)}),T.waitFor(i).next(()=>this.Zt(e,r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1,s=Et.prefixForPath(this.userId,r),o=IDBKeyRange.lowerBound(s);let a=new Ce(J);return wo(e).Kt({range:o},(u,l,c)=>{const[h,d,g]=u,y=ur(d);h===this.userId&&r.isPrefixOf(y)?y.length===i&&(a=a.add(g)):c.done()}).next(()=>this.Zt(e,a))}Zt(e,n){const r=[],i=[];return n.forEach(s=>{i.push(Zr(e).get(s).next(o=>{if(o===null)throw q();H(o.userId===this.userId),r.push(vo(this.N,o))}))}),T.waitFor(i).next(()=>r)}removeMutationBatch(e,n){return CT(e.Qt,this.userId,n).next(r=>(e.addOnCommittedListener(()=>{this.te(n.batchId)}),T.forEach(r,i=>this.referenceDelegate.markPotentiallyOrphaned(e,i))))}te(e){delete this.Jt[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(n=>{if(!n)return T.resolve();const r=IDBKeyRange.lowerBound(Et.prefixForUser(this.userId)),i=[];return wo(e).Kt({range:r},(s,o,a)=>{if(s[0]===this.userId){const u=ur(s[1]);i.push(u)}else a.done()}).next(()=>{H(i.length===0)})})}containsKey(e,n){return bT(e,this.userId,n)}ee(e){return AT(e).get(this.userId).next(n=>n||new Xr(this.userId,-1,""))}}function bT(t,e,n){const r=Et.prefixForPath(e,n.path),i=r[1],s=IDBKeyRange.lowerBound(r);let o=!1;return wo(t).Kt({range:s,qt:!0},(a,u,l)=>{const[c,h,d]=a;c===e&&h===i&&(o=!0),l.done()}).next(()=>o)}function Zr(t){return qt(t,ve.store)}function wo(t){return qt(t,Et.store)}function AT(t){return qt(t,Xr.store)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi{constructor(e){this.ne=e}next(){return this.ne+=2,this.ne}static se(){return new Gi(0)}static ie(){return new Gi(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZL{constructor(e,n){this.referenceDelegate=e,this.N=n}allocateTargetId(e){return this.re(e).next(n=>{const r=new Gi(n.highestTargetId);return n.highestTargetId=r.next(),this.oe(e,n).next(()=>n.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.re(e).next(n=>Q.fromTimestamp(new Ke(n.lastRemoteSnapshotVersion.seconds,n.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.re(e).next(n=>n.highestListenSequenceNumber)}setTargetsMetadata(e,n,r){return this.re(e).next(i=>(i.highestListenSequenceNumber=n,r&&(i.lastRemoteSnapshotVersion=r.toTimestamp()),n>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=n),this.oe(e,i)))}addTargetData(e,n){return this.ae(e,n).next(()=>this.re(e).next(r=>(r.targetCount+=1,this.ce(n,r),this.oe(e,r))))}updateTargetData(e,n){return this.ae(e,n)}removeTargetData(e,n){return this.removeMatchingKeysForTargetId(e,n.targetId).next(()=>_o(e).delete(n.targetId)).next(()=>this.re(e)).next(r=>(H(r.targetCount>0),r.targetCount-=1,this.oe(e,r)))}removeTargets(e,n,r){let i=0;const s=[];return _o(e).Kt((o,a)=>{const u=Lu(a);u.sequenceNumber<=n&&r.get(u.targetId)===null&&(i++,s.push(this.removeTargetData(e,u)))}).next(()=>T.waitFor(s)).next(()=>i)}forEachTarget(e,n){return _o(e).Kt((r,i)=>{const s=Lu(i);n(s)})}re(e){return RT(e).get(tn.key).next(n=>(H(n!==null),n))}oe(e,n){return RT(e).put(tn.key,n)}ae(e,n){return _o(e).put(IT(this.N,n))}ce(e,n){let r=!1;return e.targetId>n.highestTargetId&&(n.highestTargetId=e.targetId,r=!0),e.sequenceNumber>n.highestListenSequenceNumber&&(n.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.re(e).next(n=>n.targetCount)}getTargetData(e,n){const r=Eu(n),i=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let s=null;return _o(e).Kt({range:i,index:jt.queryTargetsIndexName},(o,a,u)=>{const l=Lu(a);Th(n,l.target)&&(s=l,u.done())}).next(()=>s)}addMatchingKeys(e,n,r){const i=[],s=ei(e);return n.forEach(o=>{const a=Sn(o.path);i.push(s.put(new ft(r,a))),i.push(this.referenceDelegate.addReference(e,r,o))}),T.waitFor(i)}removeMatchingKeys(e,n,r){const i=ei(e);return T.forEach(n,s=>{const o=Sn(s.path);return T.waitFor([i.delete([r,o]),this.referenceDelegate.removeReference(e,r,s)])})}removeMatchingKeysForTargetId(e,n){const r=ei(e),i=IDBKeyRange.bound([n],[n+1],!1,!0);return r.delete(i)}getMatchingKeysForTargetId(e,n){const r=IDBKeyRange.bound([n],[n+1],!1,!0),i=ei(e);let s=ce();return i.Kt({range:r,qt:!0},(o,a,u)=>{const l=ur(o[1]),c=new z(l);s=s.add(c)}).next(()=>s)}containsKey(e,n){const r=Sn(n.path),i=IDBKeyRange.bound([r],[pE(r)],!1,!0);let s=0;return ei(e).Kt({index:ft.documentTargetsIndex,qt:!0,range:i},([o,a],u,l)=>{o!==0&&(s++,l.done())}).next(()=>s>0)}Tt(e,n){return _o(e).get(n).next(r=>r?Lu(r):null)}}function _o(t){return qt(t,jt.store)}function RT(t){return qt(t,tn.store)}function ei(t){return qt(t,ft.store)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ki(t){if(t.code!==E.FAILED_PRECONDITION||t.message!==pT)throw t;N("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NT([t,e],[n,r]){const i=J(t,n);return i===0?J(e,r):i}class eM{constructor(e){this.ue=e,this.buffer=new Ce(NT),this.he=0}le(){return++this.he}fe(e){const n=[e,this.le()];if(this.buffer.size<this.ue)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();NT(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class tM{constructor(e,n){this.garbageCollector=e,this.asyncQueue=n,this.de=!1,this.we=null}start(e){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this._e(e)}stop(){this.we&&(this.we.cancel(),this.we=null)}get started(){return this.we!==null}_e(e){const n=this.de?3e5:6e4;N("LruGarbageCollector",`Garbage collection scheduled in ${n}ms`),this.we=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",n,async()=>{this.we=null,this.de=!0;try{await e.collectGarbage(this.garbageCollector)}catch(r){Hi(r)?N("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",r):await Ki(r)}await this._e(e)})}}class nM{constructor(e,n){this.me=e,this.params=n}calculateTargetCount(e,n){return this.me.ge(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return T.resolve(Zt.T);const r=new eM(n);return this.me.forEachTarget(e,i=>r.fe(i.sequenceNumber)).next(()=>this.me.ye(e,i=>r.fe(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.me.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.me.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(N("LruGarbageCollector","Garbage collection skipped; disabled"),T.resolve(kT)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(N("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),kT):this.pe(e,n))}getCacheSize(e){return this.me.getCacheSize(e)}pe(e,n){let r,i,s,o,a,u,l;const c=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(h=>(h>this.params.maximumSequenceNumbersToCollect?(N("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${h}`),i=this.params.maximumSequenceNumbersToCollect):i=h,o=Date.now(),this.nthSequenceNumber(e,i))).next(h=>(r=h,a=Date.now(),this.removeTargets(e,r,n))).next(h=>(s=h,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(h=>(l=Date.now(),fg()<=te.DEBUG&&N("LruGarbageCollector",`LRU Garbage Collection
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
 */class rM{constructor(e,n){this.db=e,this.garbageCollector=function(r,i){return new nM(r,i)}(this,n)}ge(e){const n=this.Te(e);return this.db.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}Te(e){let n=0;return this.ye(e,r=>{n++}).next(()=>n)}forEachTarget(e,n){return this.db.getTargetCache().forEachTarget(e,n)}ye(e,n){return this.Ee(e,(r,i)=>n(i))}addReference(e,n,r){return $h(e,r)}removeReference(e,n,r){return $h(e,r)}removeTargets(e,n,r){return this.db.getTargetCache().removeTargets(e,n,r)}markPotentiallyOrphaned(e,n){return $h(e,n)}Ie(e,n){return function(r,i){let s=!1;return AT(r).jt(o=>bT(r,o,i).next(a=>(a&&(s=!0),T.resolve(!a)))).next(()=>s)}(e,n)}removeOrphanedDocuments(e,n){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let s=0;return this.Ee(e,(o,a)=>{if(a<=n){const u=this.Ie(e,o).next(l=>{if(!l)return s++,r.getEntry(e,o).next(()=>(r.removeEntry(o),ei(e).delete([0,Sn(o.path)])))});i.push(u)}}).next(()=>T.waitFor(i)).next(()=>r.apply(e)).next(()=>s)}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,n){return $h(e,n)}Ee(e,n){const r=ei(e);let i,s=Zt.T;return r.Kt({index:ft.documentTargetsIndex},([o,a],{path:u,sequenceNumber:l})=>{o===0?(s!==Zt.T&&n(new z(ur(i)),s),s=l,i=u):s=Zt.T}).next(()=>{s!==Zt.T&&n(new z(ur(i)),s)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function $h(t,e){return ei(t).put(function(n,r){return new ft(0,Sn(n.path),r)}(e,t.currentSequenceNumber))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Io{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={}}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i!==void 0){for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n])}else this.inner[r]=[[e,n]]}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),!0;return!1}forEach(e){Fi(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return gE(this.inner)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PT{constructor(){this.changes=new Io(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}getReadTime(e){const n=this.changes.get(e);return n?n.readTime:Q.min()}addEntry(e,n){this.assertNotApplied(),this.changes.set(e.key,{document:e,readTime:n})}removeEntry(e,n=null){this.assertNotApplied(),this.changes.set(e,{document:Ee.newInvalidDocument(e),readTime:n})}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?T.resolve(r.document):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iM{constructor(e,n){this.N=e,this.Ht=n}addEntry(e,n,r){return ti(e).put(Uh(n),r)}removeEntry(e,n){const r=ti(e),i=Uh(n);return r.delete(i)}updateMetadata(e,n){return this.getMetadata(e).next(r=>(r.byteSize+=n,this.Ae(e,r)))}getEntry(e,n){return ti(e).get(Uh(n)).next(r=>this.Re(n,r))}be(e,n){return ti(e).get(Uh(n)).next(r=>({document:this.Re(n,r),size:Mh(r)}))}getEntries(e,n){let r=dn();return this.Pe(e,n,(i,s)=>{const o=this.Re(i,s);r=r.insert(i,o)}).next(()=>r)}ve(e,n){let r=dn(),i=new Ve(z.comparator);return this.Pe(e,n,(s,o)=>{const a=this.Re(s,o);r=r.insert(s,a),i=i.insert(s,Mh(o))}).next(()=>({documents:r,Ve:i}))}Pe(e,n,r){if(n.isEmpty())return T.resolve();const i=IDBKeyRange.bound(n.first().path.toArray(),n.last().path.toArray()),s=n.getIterator();let o=s.getNext();return ti(e).Kt({range:i},(a,u,l)=>{const c=z.fromSegments(a);for(;o&&z.comparator(o,c)<0;)r(o,null),o=s.getNext();o&&o.isEqual(c)&&(r(o,u),o=s.hasNext()?s.getNext():null),o?l.Mt(o.path.toArray()):l.done()}).next(()=>{for(;o;)r(o,null),o=s.hasNext()?s.getNext():null})}getDocumentsMatchingQuery(e,n,r){let i=dn();const s=n.path.length+1,o={};if(r.isEqual(Q.min())){const a=n.path.toArray();o.range=IDBKeyRange.lowerBound(a)}else{const a=n.path.toArray(),u=Dg(r);o.range=IDBKeyRange.lowerBound([a,u],!0),o.index=be.collectionReadTimeIndex}return ti(e).Kt(o,(a,u,l)=>{if(a.length!==s)return;const c=xg(this.N,u);n.path.isPrefixOf(c.key.path)?ku(n,c)&&(i=i.insert(c.key,c)):l.done()}).next(()=>i)}newChangeBuffer(e){return new sM(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(n=>n.byteSize)}getMetadata(e){return xT(e).get(Bn.key).next(n=>(H(!!n),n))}Ae(e,n){return xT(e).put(Bn.key,n)}Re(e,n){if(n){const r=xg(this.N,n);if(!(r.isNoDocument()&&r.version.isEqual(Q.min())))return r}return Ee.newInvalidDocument(e)}}class sM extends PT{constructor(e,n){super(),this.Se=e,this.trackRemovals=n,this.De=new Io(r=>r.toString(),(r,i)=>r.isEqual(i))}applyChanges(e){const n=[];let r=0,i=new Ce((s,o)=>J(s.canonicalString(),o.canonicalString()));return this.changes.forEach((s,o)=>{const a=this.De.get(s);if(o.document.isValidDocument()){const u=wT(this.Se.N,o.document,this.getReadTime(s));i=i.add(s.path.popLast()),r+=Mh(u)-a,n.push(this.Se.addEntry(e,s,u))}else if(r-=a,this.trackRemovals){const u=wT(this.Se.N,Ee.newNoDocument(s,Q.min()),this.getReadTime(s));n.push(this.Se.addEntry(e,s,u))}else n.push(this.Se.removeEntry(e,s))}),i.forEach(s=>{n.push(this.Se.Ht.addToCollectionParentIndex(e,s))}),n.push(this.Se.updateMetadata(e,r)),T.waitFor(n)}getFromCache(e,n){return this.Se.be(e,n).next(r=>(this.De.set(n,r.size),r.document))}getAllFromCache(e,n){return this.Se.ve(e,n).next(({documents:r,Ve:i})=>(i.forEach((s,o)=>{this.De.set(s,o)}),r))}}function xT(t){return qt(t,Bn.store)}function ti(t){return qt(t,be.store)}function Uh(t){return t.path.toArray()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oM{constructor(e){this.N=e}Ct(e,n,r,i){H(r<i&&r>=0&&i<=11);const s=new Lh("createOrUpgrade",n);r<1&&i>=1&&(function(a){a.createObjectStore(en.store)}(e),function(a){a.createObjectStore(Xr.store,{keyPath:Xr.keyPath}),a.createObjectStore(ve.store,{keyPath:ve.keyPath,autoIncrement:!0}).createIndex(ve.userMutationsIndex,ve.userMutationsKeyPath,{unique:!0}),a.createObjectStore(Et.store)}(e),DT(e),function(a){a.createObjectStore(be.store)}(e));let o=T.resolve();return r<3&&i>=3&&(r!==0&&(function(a){a.deleteObjectStore(ft.store),a.deleteObjectStore(jt.store),a.deleteObjectStore(tn.store)}(e),DT(e)),o=o.next(()=>function(a){const u=a.store(tn.store),l=new tn(0,0,Q.min().toTimestamp(),0);return u.put(tn.key,l)}(s))),r<4&&i>=4&&(r!==0&&(o=o.next(()=>function(a,u){return u.store(ve.store).Lt().next(l=>{a.deleteObjectStore(ve.store),a.createObjectStore(ve.store,{keyPath:ve.keyPath,autoIncrement:!0}).createIndex(ve.userMutationsIndex,ve.userMutationsKeyPath,{unique:!0});const c=u.store(ve.store),h=l.map(d=>c.put(d));return T.waitFor(h)})}(e,s))),o=o.next(()=>{(function(a){a.createObjectStore(lr.store,{keyPath:lr.keyPath})})(e)})),r<5&&i>=5&&(o=o.next(()=>this.Ce(s))),r<6&&i>=6&&(o=o.next(()=>(function(a){a.createObjectStore(Bn.store)}(e),this.Ne(s)))),r<7&&i>=7&&(o=o.next(()=>this.xe(s))),r<8&&i>=8&&(o=o.next(()=>this.ke(e,s))),r<9&&i>=9&&(o=o.next(()=>{(function(a){a.objectStoreNames.contains("remoteDocumentChanges")&&a.deleteObjectStore("remoteDocumentChanges")})(e),function(a){const u=a.objectStore(be.store);u.createIndex(be.readTimeIndex,be.readTimeIndexPath,{unique:!1}),u.createIndex(be.collectionReadTimeIndex,be.collectionReadTimeIndexPath,{unique:!1})}(n)})),r<10&&i>=10&&(o=o.next(()=>this.$e(s))),r<11&&i>=11&&(o=o.next(()=>{(function(a){a.createObjectStore(po.store,{keyPath:po.keyPath})})(e),function(a){a.createObjectStore(mo.store,{keyPath:mo.keyPath})}(e)})),o}Ne(e){let n=0;return e.store(be.store).Kt((r,i)=>{n+=Mh(i)}).next(()=>{const r=new Bn(n);return e.store(Bn.store).put(Bn.key,r)})}Ce(e){const n=e.store(Xr.store),r=e.store(ve.store);return n.Lt().next(i=>T.forEach(i,s=>{const o=IDBKeyRange.bound([s.userId,-1],[s.userId,s.lastAcknowledgedBatchId]);return r.Lt(ve.userMutationsIndex,o).next(a=>T.forEach(a,u=>{H(u.userId===s.userId);const l=vo(this.N,u);return CT(e,s.userId,l).next(()=>{})}))}))}xe(e){const n=e.store(ft.store),r=e.store(be.store);return e.store(tn.store).get(tn.key).next(i=>{const s=[];return r.Kt((o,a)=>{const u=new ie(o),l=function(c){return[0,Sn(c)]}(u);s.push(n.get(l).next(c=>c?T.resolve():(h=>n.put(new ft(0,Sn(h),i.highestListenSequenceNumber)))(u)))}).next(()=>T.waitFor(s))})}ke(e,n){e.createObjectStore(qi.store,{keyPath:qi.keyPath});const r=n.store(qi.store),i=new Lg,s=o=>{if(i.add(o)){const a=o.lastSegment(),u=o.popLast();return r.put({collectionId:a,parent:Sn(u)})}};return n.store(be.store).Kt({qt:!0},(o,a)=>{const u=new ie(o);return s(u.popLast())}).next(()=>n.store(Et.store).Kt({qt:!0},([o,a,u],l)=>{const c=ur(a);return s(c.popLast())}))}$e(e){const n=e.store(jt.store);return n.Kt((r,i)=>{const s=Lu(i),o=IT(this.N,s);return n.put(o)})}}function DT(t){t.createObjectStore(ft.store,{keyPath:ft.keyPath}).createIndex(ft.documentTargetsIndex,ft.documentTargetsKeyPath,{unique:!0}),t.createObjectStore(jt.store,{keyPath:jt.keyPath}).createIndex(jt.queryTargetsIndexName,jt.queryTargetsKeyPath,{unique:!0}),t.createObjectStore(tn.store)}const $g="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class Ug{constructor(e,n,r,i,s,o,a,u,l,c){if(this.allowTabSynchronization=e,this.persistenceKey=n,this.clientId=r,this.Oe=s,this.window=o,this.document=a,this.Fe=l,this.Me=c,this.Le=null,this.Be=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Ue=null,this.inForeground=!1,this.qe=null,this.Ke=null,this.je=Number.NEGATIVE_INFINITY,this.Qe=h=>Promise.resolve(),!Ug.bt())throw new C(E.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new rM(this,i),this.We=n+"main",this.N=new vT(u),this.Ge=new kn(this.We,11,new oM(this.N)),this.ze=new ZL(this.referenceDelegate,this.N),this.Ht=new JL,this.He=function(h,d){return new iM(h,d)}(this.N,this.Ht),this.Je=new YL,this.window&&this.window.localStorage?this.Ye=this.window.localStorage:(this.Ye=null,c===!1&&De("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.Xe().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new C(E.FAILED_PRECONDITION,$g);return this.Ze(),this.tn(),this.en(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.ze.getHighestSequenceNumber(e))}).then(e=>{this.Le=new Zt(e,this.Fe)}).then(()=>{this.Be=!0}).catch(e=>(this.Ge&&this.Ge.close(),Promise.reject(e)))}nn(e){return this.Qe=async n=>{if(this.started)return e(n)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Ge.xt(async n=>{n.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.Oe.enqueueAndForget(async()=>{this.started&&await this.Xe()}))}Xe(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>Fh(e).put(new lr(this.clientId,Date.now(),this.networkEnabled,this.inForeground)).next(()=>{if(this.isPrimary)return this.sn(e).next(n=>{n||(this.isPrimary=!1,this.Oe.enqueueRetryable(()=>this.Qe(!1)))})}).next(()=>this.rn(e)).next(n=>this.isPrimary&&!n?this.on(e).next(()=>!1):!!n&&this.an(e).next(()=>!0))).catch(e=>{if(Hi(e))return N("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return N("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.Oe.enqueueRetryable(()=>this.Qe(e)),this.isPrimary=e})}sn(e){return Mu(e).get(en.key).next(n=>T.resolve(this.cn(n)))}un(e){return Fh(e).delete(this.clientId)}async hn(){if(this.isPrimary&&!this.ln(this.je,18e5)){this.je=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",n=>{const r=qt(n,lr.store);return r.Lt().next(i=>{const s=this.fn(i,18e5),o=i.filter(a=>s.indexOf(a)===-1);return T.forEach(o,a=>r.delete(a.clientId)).next(()=>o)})}).catch(()=>[]);if(this.Ye)for(const n of e)this.Ye.removeItem(this.dn(n.clientId))}}en(){this.Ke=this.Oe.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.Xe().then(()=>this.hn()).then(()=>this.en()))}cn(e){return!!e&&e.ownerId===this.clientId}rn(e){return this.Me?T.resolve(!0):Mu(e).get(en.key).next(n=>{if(n!==null&&this.ln(n.leaseTimestampMs,5e3)&&!this.wn(n.ownerId)){if(this.cn(n)&&this.networkEnabled)return!0;if(!this.cn(n)){if(!n.allowTabSynchronization)throw new C(E.FAILED_PRECONDITION,$g);return!1}}return!(!this.networkEnabled||!this.inForeground)||Fh(e).Lt().next(r=>this.fn(r,5e3).find(i=>{if(this.clientId!==i.clientId){const s=!this.networkEnabled&&i.networkEnabled,o=!this.inForeground&&i.inForeground,a=this.networkEnabled===i.networkEnabled;if(s||o&&a)return!0}return!1})===void 0)}).next(n=>(this.isPrimary!==n&&N("IndexedDbPersistence",`Client ${n?"is":"is not"} eligible for a primary lease.`),n))}async shutdown(){this.Be=!1,this._n(),this.Ke&&(this.Ke.cancel(),this.Ke=null),this.mn(),this.gn(),await this.Ge.runTransaction("shutdown","readwrite",[en.store,lr.store],e=>{const n=new yT(e,Zt.T);return this.on(n).next(()=>this.un(n))}),this.Ge.close(),this.yn()}fn(e,n){return e.filter(r=>this.ln(r.updateTimeMs,n)&&!this.wn(r.clientId))}pn(){return this.runTransaction("getActiveClients","readonly",e=>Fh(e).Lt().next(n=>this.fn(n,18e5).map(r=>r.clientId)))}get started(){return this.Be}getMutationQueue(e){return Mg.Yt(e,this.N,this.Ht,this.referenceDelegate)}getTargetCache(){return this.ze}getRemoteDocumentCache(){return this.He}getIndexManager(){return this.Ht}getBundleCache(){return this.Je}runTransaction(e,n,r){N("IndexedDbPersistence","Starting transaction:",e);const i=n==="readonly"?"readonly":"readwrite";let s;return this.Ge.runTransaction(e,i,GL,o=>(s=new yT(o,this.Le?this.Le.next():Zt.T),n==="readwrite-primary"?this.sn(s).next(a=>!!a||this.rn(s)).next(a=>{if(!a)throw De(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.Oe.enqueueRetryable(()=>this.Qe(!1)),new C(E.FAILED_PRECONDITION,pT);return r(s)}).next(a=>this.an(s).next(()=>a)):this.Tn(s).next(()=>r(s)))).then(o=>(s.raiseOnCommittedEvent(),o))}Tn(e){return Mu(e).get(en.key).next(n=>{if(n!==null&&this.ln(n.leaseTimestampMs,5e3)&&!this.wn(n.ownerId)&&!this.cn(n)&&!(this.Me||this.allowTabSynchronization&&n.allowTabSynchronization))throw new C(E.FAILED_PRECONDITION,$g)})}an(e){const n=new en(this.clientId,this.allowTabSynchronization,Date.now());return Mu(e).put(en.key,n)}static bt(){return kn.bt()}on(e){const n=Mu(e);return n.get(en.key).next(r=>this.cn(r)?(N("IndexedDbPersistence","Releasing primary lease."),n.delete(en.key)):T.resolve())}ln(e,n){const r=Date.now();return!(e<r-n)&&(!(e>r)||(De(`Detected an update time that is in the future: ${e} > ${r}`),!1))}Ze(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.qe=()=>{this.Oe.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.Xe()))},this.document.addEventListener("visibilitychange",this.qe),this.inForeground=this.document.visibilityState==="visible")}mn(){this.qe&&(this.document.removeEventListener("visibilitychange",this.qe),this.qe=null)}tn(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.Ue=()=>{this._n(),WA()&&navigator.appVersion.match("Version/14")&&this.Oe.enterRestrictedMode(!0),this.Oe.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Ue))}gn(){this.Ue&&(this.window.removeEventListener("pagehide",this.Ue),this.Ue=null)}wn(e){var n;try{const r=((n=this.Ye)===null||n===void 0?void 0:n.getItem(this.dn(e)))!==null;return N("IndexedDbPersistence",`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return De("IndexedDbPersistence","Failed to get zombied client id.",r),!1}}_n(){if(this.Ye)try{this.Ye.setItem(this.dn(this.clientId),String(Date.now()))}catch(e){De("Failed to set zombie client id.",e)}}yn(){if(this.Ye)try{this.Ye.removeItem(this.dn(this.clientId))}catch{}}dn(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function Mu(t){return qt(t,en.store)}function Fh(t){return qt(t,lr.store)}function Fg(t,e){let n=t.projectId;return t.isDefaultDatabase||(n+="."+t.database),"firestore/"+e+"/"+n+"/"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aM{constructor(e,n){this.progress=e,this.En=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OT{constructor(e,n,r){this.He=e,this.In=n,this.Ht=r}An(e,n){return this.In.getAllMutationBatchesAffectingDocumentKey(e,n).next(r=>this.Rn(e,n,r))}Rn(e,n,r){return this.He.getEntry(e,n).next(i=>{for(const s of r)s.applyToLocalView(i);return i})}bn(e,n){e.forEach((r,i)=>{for(const s of n)s.applyToLocalView(i)})}Pn(e,n){return this.He.getEntries(e,n).next(r=>this.vn(e,r).next(()=>r))}vn(e,n){return this.In.getAllMutationBatchesAffectingDocumentKeys(e,n).next(r=>this.bn(n,r))}getDocumentsMatchingQuery(e,n,r){return function(i){return z.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.Vn(e,n.path):Eg(n)?this.Sn(e,n,r):this.Dn(e,n,r)}Vn(e,n){return this.An(e,new z(n)).next(r=>{let i=Cg();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}Sn(e,n,r){const i=n.collectionGroup;let s=Cg();return this.Ht.getCollectionParents(e,i).next(o=>T.forEach(o,a=>{const u=function(l,c){return new ar(c,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(i));return this.Dn(e,u,r).next(l=>{l.forEach((c,h)=>{s=s.insert(c,h)})})}).next(()=>s))}Dn(e,n,r){let i,s;return this.He.getDocumentsMatchingQuery(e,n,r).next(o=>(i=o,this.In.getAllMutationBatchesAffectingQuery(e,n))).next(o=>(s=o,this.Cn(e,s,i).next(a=>{i=a;for(const u of s)for(const l of u.mutations){const c=l.key;let h=i.get(c);h==null&&(h=Ee.newInvalidDocument(c),i=i.insert(c,h)),Sg(l,h,u.localWriteTime),h.isFoundDocument()||(i=i.remove(c))}}))).next(()=>(i.forEach((o,a)=>{ku(n,a)||(i=i.remove(o))}),i))}Cn(e,n,r){let i=ce();for(const o of n)for(const a of o.mutations)a instanceof Yr&&r.get(a.key)===null&&(i=i.add(a.key));let s=r;return this.He.getEntries(e,i).next(o=>(o.forEach((a,u)=>{u.isFoundDocument()&&(s=s.insert(a,u))}),s))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vg{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Nn=r,this.xn=i}static kn(e,n){let r=ce(),i=ce();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Vg(e,n.fromCache,r,i)}}/**
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
 */class LT{$n(e){this.On=e}getDocumentsMatchingQuery(e,n,r,i){return function(s){return s.filters.length===0&&s.limit===null&&s.startAt==null&&s.endAt==null&&(s.explicitOrderBy.length===0||s.explicitOrderBy.length===1&&s.explicitOrderBy[0].field.isKeyField())}(n)||r.isEqual(Q.min())?this.Fn(e,n):this.On.Pn(e,i).next(s=>{const o=this.Mn(n,s);return(Ch(n)||bh(n))&&this.Ln(n.limitType,o,i,r)?this.Fn(e,n):(fg()<=te.DEBUG&&N("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Tg(n)),this.On.getDocumentsMatchingQuery(e,n,r).next(a=>(o.forEach(u=>{a=a.insert(u.key,u)}),a)))})}Mn(e,n){let r=new Ce(NE(e));return n.forEach((i,s)=>{ku(e,s)&&(r=r.add(s))}),r}Ln(e,n,r,i){if(r.size!==n.size)return!0;const s=e==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Fn(e,n){return fg()<=te.DEBUG&&N("QueryEngine","Using full collection scan to execute query:",Tg(n)),this.On.getDocumentsMatchingQuery(e,n,Q.min())}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uM{constructor(e,n,r,i){this.persistence=e,this.Bn=n,this.N=i,this.Un=new Ve(J),this.qn=new Io(s=>Eu(s),Th),this.Kn=Q.min(),this.In=e.getMutationQueue(r),this.jn=e.getRemoteDocumentCache(),this.ze=e.getTargetCache(),this.Qn=new OT(this.jn,this.In,this.persistence.getIndexManager()),this.Je=e.getBundleCache(),this.Bn.$n(this.Qn)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Un))}}function MT(t,e,n,r){return new uM(t,e,n,r)}async function $T(t,e){const n=L(t);let r=n.In,i=n.Qn;const s=await n.persistence.runTransaction("Handle user change","readonly",o=>{let a;return n.In.getAllMutationBatches(o).next(u=>(a=u,r=n.persistence.getMutationQueue(e),i=new OT(n.jn,r,n.persistence.getIndexManager()),r.getAllMutationBatches(o))).next(u=>{const l=[],c=[];let h=ce();for(const d of a){l.push(d.batchId);for(const g of d.mutations)h=h.add(g.key)}for(const d of u){c.push(d.batchId);for(const g of d.mutations)h=h.add(g.key)}return i.Pn(o,h).next(d=>({Wn:d,removedBatchIds:l,addedBatchIds:c}))})});return n.In=r,n.Qn=i,n.Bn.$n(n.Qn),s}function lM(t,e){const n=L(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.jn.newChangeBuffer({trackRemovals:!0});return function(o,a,u,l){const c=u.batch,h=c.keys();let d=T.resolve();return h.forEach(g=>{d=d.next(()=>l.getEntry(a,g)).next(y=>{const _=u.docVersions.get(g);H(_!==null),y.version.compareTo(_)<0&&(c.applyToRemoteDocument(y,u),y.isValidDocument()&&l.addEntry(y,u.commitVersion))})}),d.next(()=>o.In.removeMutationBatch(a,c))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.In.performConsistencyCheck(r)).next(()=>n.Qn.Pn(r,i))})}function UT(t){const e=L(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.ze.getLastRemoteSnapshotVersion(n))}function cM(t,e){const n=L(t),r=e.snapshotVersion;let i=n.Un;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.jn.newChangeBuffer({trackRemovals:!0});i=n.Un;const a=[];e.targetChanges.forEach((l,c)=>{const h=i.get(c);if(!h)return;a.push(n.ze.removeMatchingKeys(s,l.removedDocuments,c).next(()=>n.ze.addMatchingKeys(s,l.addedDocuments,c)));const d=l.resumeToken;if(d.approximateByteSize()>0){const g=h.withResumeToken(d,r).withSequenceNumber(s.currentSequenceNumber);i=i.insert(c,g),function(y,_,f){return H(_.resumeToken.approximateByteSize()>0),y.resumeToken.approximateByteSize()===0||_.snapshotVersion.toMicroseconds()-y.snapshotVersion.toMicroseconds()>=3e8?!0:f.addedDocuments.size+f.modifiedDocuments.size+f.removedDocuments.size>0}(h,g,l)&&a.push(n.ze.updateTargetData(s,g))}});let u=dn();if(e.documentUpdates.forEach((l,c)=>{e.resolvedLimboDocuments.has(l)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,l))}),a.push(FT(s,o,e.documentUpdates,r,void 0).next(l=>{u=l})),!r.isEqual(Q.min())){const l=n.ze.getLastRemoteSnapshotVersion(s).next(c=>n.ze.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(l)}return T.waitFor(a).next(()=>o.apply(s)).next(()=>n.Qn.vn(s,u)).next(()=>u)}).then(s=>(n.Un=i,s))}function FT(t,e,n,r,i){let s=ce();return n.forEach(o=>s=s.add(o)),e.getEntries(t,s).next(o=>{let a=dn();return n.forEach((u,l)=>{const c=o.get(u),h=(i==null?void 0:i.get(u))||r;l.isNoDocument()&&l.version.isEqual(Q.min())?(e.removeEntry(u,h),a=a.insert(u,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(l,h),a=a.insert(u,l)):N("LocalStore","Ignoring outdated watch update for ",u,". Current version:",c.version," Watch version:",l.version)}),a})}function hM(t,e){const n=L(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.In.getNextMutationBatchAfterBatchId(r,e)))}function Eo(t,e){const n=L(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.ze.getTargetData(r,e).next(s=>s?(i=s,T.resolve(i)):n.ze.allocateTargetId(r).next(o=>(i=new Jr(e,o,0,r.currentSequenceNumber),n.ze.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Un.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Un=n.Un.insert(r.targetId,r),n.qn.set(e,r.targetId)),r})}async function To(t,e,n){const r=L(t),i=r.Un.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Hi(o))throw o;N("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Un=r.Un.remove(e),r.qn.delete(i.target)}function Vh(t,e,n){const r=L(t);let i=Q.min(),s=ce();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,u,l){const c=L(a),h=c.qn.get(l);return h!==void 0?T.resolve(c.Un.get(h)):c.ze.getTargetData(u,l)}(r,o,hn(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.ze.getMatchingKeysForTargetId(o,a.targetId).next(u=>{s=u})}).next(()=>r.Bn.getDocumentsMatchingQuery(o,e,n?i:Q.min(),n?s:ce())).next(a=>({documents:a,Gn:s})))}function VT(t,e){const n=L(t),r=L(n.ze),i=n.Un.get(e);return i?Promise.resolve(i.target):n.persistence.runTransaction("Get target data","readonly",s=>r.Tt(s,e).next(o=>o?o.target:null))}function BT(t){const e=L(t);return e.persistence.runTransaction("Get new document changes","readonly",n=>function(r,i,s){const o=L(r);let a=dn(),u=Dg(s);const l=ti(i),c=IDBKeyRange.lowerBound(u,!0);return l.Kt({index:be.readTimeIndex,range:c},(h,d)=>{const g=xg(o.N,d);a=a.insert(g.key,g),u=d.readTime}).next(()=>({En:a,readTime:_T(u)}))}(e.jn,n,e.Kn)).then(({En:n,readTime:r})=>(e.Kn=r,n))}async function dM(t){const e=L(t);return e.persistence.runTransaction("Synchronize last document change read time","readonly",n=>function(r){const i=ti(r);let s=Q.min();return i.Kt({index:be.readTimeIndex,reverse:!0},(o,a,u)=>{a.readTime&&(s=_T(a.readTime)),u.done()}).next(()=>s)}(n)).then(n=>{e.Kn=n})}async function fM(t,e,n,r){const i=L(t);let s=ce(),o=dn(),a=GE();for(const c of n){const h=e.zn(c.metadata.name);c.document&&(s=s.add(h)),o=o.insert(h,e.Hn(c)),a=a.insert(h,e.Jn(c.metadata.readTime))}const u=i.jn.newChangeBuffer({trackRemovals:!0}),l=await Eo(i,function(c){return hn(ao(ie.fromString(`__bundle__/docs/${c}`)))}(r));return i.persistence.runTransaction("Apply bundle documents","readwrite",c=>FT(c,u,o,Q.min(),a).next(h=>(u.apply(c),h)).next(h=>i.ze.removeMatchingKeysForTargetId(c,l.targetId).next(()=>i.ze.addMatchingKeys(c,s,l.targetId)).next(()=>i.Qn.vn(c,h)).next(()=>h)))}async function pM(t,e,n=ce()){const r=await Eo(t,hn(Og(e.bundledQuery))),i=L(t);return i.persistence.runTransaction("Save named query","readwrite",s=>{const o=Ye(e.readTime);if(r.snapshotVersion.compareTo(o)>=0)return i.Je.saveNamedQuery(s,e);const a=r.withResumeToken(Qe.EMPTY_BYTE_STRING,o);return i.Un=i.Un.insert(a.targetId,a),i.ze.updateTargetData(s,a).next(()=>i.ze.removeMatchingKeysForTargetId(s,r.targetId)).next(()=>i.ze.addMatchingKeys(s,n,r.targetId)).next(()=>i.Je.saveNamedQuery(s,e))})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mM{constructor(e){this.N=e,this.Yn=new Map,this.Xn=new Map}getBundleMetadata(e,n){return T.resolve(this.Yn.get(n))}saveBundleMetadata(e,n){var r;return this.Yn.set(n.id,{id:(r=n).id,version:r.version,createTime:Ye(r.createTime)}),T.resolve()}getNamedQuery(e,n){return T.resolve(this.Xn.get(n))}saveNamedQuery(e,n){return this.Xn.set(n.name,function(r){return{name:r.name,query:Og(r.bundledQuery),readTime:Ye(r.readTime)}}(n)),T.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bg{constructor(){this.Zn=new Ce(Xe.ts),this.es=new Ce(Xe.ns)}isEmpty(){return this.Zn.isEmpty()}addReference(e,n){const r=new Xe(e,n);this.Zn=this.Zn.add(r),this.es=this.es.add(r)}ss(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.rs(new Xe(e,n))}os(e,n){e.forEach(r=>this.removeReference(r,n))}cs(e){const n=new z(new ie([])),r=new Xe(n,e),i=new Xe(n,e+1),s=[];return this.es.forEachInRange([r,i],o=>{this.rs(o),s.push(o.key)}),s}us(){this.Zn.forEach(e=>this.rs(e))}rs(e){this.Zn=this.Zn.delete(e),this.es=this.es.delete(e)}hs(e){const n=new z(new ie([])),r=new Xe(n,e),i=new Xe(n,e+1);let s=ce();return this.es.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Xe(e,0),r=this.Zn.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Xe{constructor(e,n){this.key=e,this.ls=n}static ts(e,n){return z.comparator(e.key,n.key)||J(e.ls,n.ls)}static ns(e,n){return J(e.ls,n.ls)||z.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gM{constructor(e,n){this.Ht=e,this.referenceDelegate=n,this.In=[],this.fs=1,this.ds=new Ce(Xe.ts)}checkEmpty(e){return T.resolve(this.In.length===0)}addMutationBatch(e,n,r,i){const s=this.fs;this.fs++,this.In.length>0&&this.In[this.In.length-1];const o=new Ng(s,n,r,i);this.In.push(o);for(const a of i)this.ds=this.ds.add(new Xe(a.key,s)),this.Ht.addToCollectionParentIndex(e,a.key.path.popLast());return T.resolve(o)}lookupMutationBatch(e,n){return T.resolve(this.ws(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this._s(r),s=i<0?0:i;return T.resolve(this.In.length>s?this.In[s]:null)}getHighestUnacknowledgedBatchId(){return T.resolve(this.In.length===0?-1:this.fs-1)}getAllMutationBatches(e){return T.resolve(this.In.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Xe(n,0),i=new Xe(n,Number.POSITIVE_INFINITY),s=[];return this.ds.forEachInRange([r,i],o=>{const a=this.ws(o.ls);s.push(a)}),T.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ce(J);return n.forEach(i=>{const s=new Xe(i,0),o=new Xe(i,Number.POSITIVE_INFINITY);this.ds.forEachInRange([s,o],a=>{r=r.add(a.ls)})}),T.resolve(this.gs(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;z.isDocumentKey(s)||(s=s.child(""));const o=new Xe(new z(s),0);let a=new Ce(J);return this.ds.forEachWhile(u=>{const l=u.key.path;return!!r.isPrefixOf(l)&&(l.length===i&&(a=a.add(u.ls)),!0)},o),T.resolve(this.gs(a))}gs(e){const n=[];return e.forEach(r=>{const i=this.ws(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){H(this.ys(n.batchId,"removed")===0),this.In.shift();let r=this.ds;return T.forEach(n.mutations,i=>{const s=new Xe(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.ds=r})}te(e){}containsKey(e,n){const r=new Xe(n,0),i=this.ds.firstAfterOrEqual(r);return T.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.In.length,T.resolve()}ys(e,n){return this._s(e)}_s(e){return this.In.length===0?0:e-this.In[0].batchId}ws(e){const n=this._s(e);return n<0||n>=this.In.length?null:this.In[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yM{constructor(e,n){this.Ht=e,this.ps=n,this.docs=new Ve(z.comparator),this.size=0}addEntry(e,n,r){const i=n.key,s=this.docs.get(i),o=s?s.size:0,a=this.ps(n);return this.docs=this.docs.insert(i,{document:n.clone(),size:a,readTime:r}),this.size+=a-o,this.Ht.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return T.resolve(r?r.document.clone():Ee.newInvalidDocument(n))}getEntries(e,n){let r=dn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.clone():Ee.newInvalidDocument(i))}),T.resolve(r)}getDocumentsMatchingQuery(e,n,r){let i=dn();const s=new z(n.path.child("")),o=this.docs.getIteratorFrom(s);for(;o.hasNext();){const{key:a,value:{document:u,readTime:l}}=o.getNext();if(!n.path.isPrefixOf(a.path))break;l.compareTo(r)<=0||ku(n,u)&&(i=i.insert(u.key,u.clone()))}return T.resolve(i)}Ts(e,n){return T.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new vM(this)}getSize(e){return T.resolve(this.size)}}class vM extends PT{constructor(e){super(),this.Se=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.document.isValidDocument()?n.push(this.Se.addEntry(e,i.document,this.getReadTime(r))):this.Se.removeEntry(r)}),T.waitFor(n)}getFromCache(e,n){return this.Se.getEntry(e,n)}getAllFromCache(e,n){return this.Se.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wM{constructor(e){this.persistence=e,this.Es=new Io(n=>Eu(n),Th),this.lastRemoteSnapshotVersion=Q.min(),this.highestTargetId=0,this.Is=0,this.As=new Bg,this.targetCount=0,this.Rs=Gi.se()}forEachTarget(e,n){return this.Es.forEach((r,i)=>n(i)),T.resolve()}getLastRemoteSnapshotVersion(e){return T.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return T.resolve(this.Is)}allocateTargetId(e){return this.highestTargetId=this.Rs.next(),T.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Is&&(this.Is=n),T.resolve()}ae(e){this.Es.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Rs=new Gi(n),this.highestTargetId=n),e.sequenceNumber>this.Is&&(this.Is=e.sequenceNumber)}addTargetData(e,n){return this.ae(n),this.targetCount+=1,T.resolve()}updateTargetData(e,n){return this.ae(n),T.resolve()}removeTargetData(e,n){return this.Es.delete(n.target),this.As.cs(n.targetId),this.targetCount-=1,T.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Es.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Es.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),T.waitFor(s).next(()=>i)}getTargetCount(e){return T.resolve(this.targetCount)}getTargetData(e,n){const r=this.Es.get(n)||null;return T.resolve(r)}addMatchingKeys(e,n,r){return this.As.ss(n,r),T.resolve()}removeMatchingKeys(e,n,r){this.As.os(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),T.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.As.cs(n),T.resolve()}getMatchingKeysForTargetId(e,n){const r=this.As.hs(n);return T.resolve(r)}containsKey(e,n){return T.resolve(this.As.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _M{constructor(e,n){this.bs={},this.Le=new Zt(0),this.Be=!1,this.Be=!0,this.referenceDelegate=e(this),this.ze=new wM(this),this.Ht=new XL,this.He=function(r,i){return new yM(r,i)}(this.Ht,r=>this.referenceDelegate.Ps(r)),this.N=new vT(n),this.Je=new mM(this.N)}start(){return Promise.resolve()}shutdown(){return this.Be=!1,Promise.resolve()}get started(){return this.Be}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(){return this.Ht}getMutationQueue(e){let n=this.bs[e.toKey()];return n||(n=new gM(this.Ht,this.referenceDelegate),this.bs[e.toKey()]=n),n}getTargetCache(){return this.ze}getRemoteDocumentCache(){return this.He}getBundleCache(){return this.Je}runTransaction(e,n,r){N("MemoryPersistence","Starting transaction:",e);const i=new IM(this.Le.next());return this.referenceDelegate.vs(),r(i).next(s=>this.referenceDelegate.Vs(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ss(e,n){return T.or(Object.values(this.bs).map(r=>()=>r.containsKey(e,n)))}}class IM extends mT{constructor(e){super(),this.currentSequenceNumber=e}}class zg{constructor(e){this.persistence=e,this.Ds=new Bg,this.Cs=null}static Ns(e){return new zg(e)}get xs(){if(this.Cs)return this.Cs;throw q()}addReference(e,n,r){return this.Ds.addReference(r,n),this.xs.delete(r.toString()),T.resolve()}removeReference(e,n,r){return this.Ds.removeReference(r,n),this.xs.add(r.toString()),T.resolve()}markPotentiallyOrphaned(e,n){return this.xs.add(n.toString()),T.resolve()}removeTarget(e,n){this.Ds.cs(n.targetId).forEach(i=>this.xs.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.xs.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}vs(){this.Cs=new Set}Vs(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return T.forEach(this.xs,r=>{const i=z.fromPath(r);return this.ks(e,i).next(s=>{s||n.removeEntry(i)})}).next(()=>(this.Cs=null,n.apply(e)))}updateLimboDocument(e,n){return this.ks(e,n).next(r=>{r?this.xs.delete(n.toString()):this.xs.add(n.toString())})}Ps(e){return 0}ks(e,n){return T.or([()=>T.resolve(this.Ds.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ss(e,n)])}}/**
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
 */function zT(t,e){return`firestore_clients_${t}_${e}`}function jT(t,e,n){let r=`firestore_mutations_${t}_${n}`;return e.isAuthenticated()&&(r+=`_${e.uid}`),r}function jg(t,e){return`firestore_targets_${t}_${e}`}class Bh{constructor(e,n,r,i){this.user=e,this.batchId=n,this.state=r,this.error=i}static $s(e,n,r){const i=JSON.parse(r);let s,o=typeof i=="object"&&["pending","acknowledged","rejected"].indexOf(i.state)!==-1&&(i.error===void 0||typeof i.error=="object");return o&&i.error&&(o=typeof i.error.message=="string"&&typeof i.error.code=="string",o&&(s=new C(i.error.code,i.error.message))),o?new Bh(e,n,i.state,s):(De("SharedClientState",`Failed to parse mutation state for ID '${n}': ${r}`),null)}Os(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class $u{constructor(e,n,r){this.targetId=e,this.state=n,this.error=r}static $s(e,n){const r=JSON.parse(n);let i,s=typeof r=="object"&&["not-current","current","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return s&&r.error&&(s=typeof r.error.message=="string"&&typeof r.error.code=="string",s&&(i=new C(r.error.code,r.error.message))),s?new $u(e,r.state,i):(De("SharedClientState",`Failed to parse target state for ID '${e}': ${n}`),null)}Os(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class zh{constructor(e,n){this.clientId=e,this.activeTargetIds=n}static $s(e,n){const r=JSON.parse(n);let i=typeof r=="object"&&r.activeTargetIds instanceof Array,s=xh();for(let o=0;i&&o<r.activeTargetIds.length;++o)i=vE(r.activeTargetIds[o]),s=s.add(r.activeTargetIds[o]);return i?new zh(e,s):(De("SharedClientState",`Failed to parse client data for instance '${e}': ${n}`),null)}}class qg{constructor(e,n){this.clientId=e,this.onlineState=n}static $s(e){const n=JSON.parse(e);return typeof n=="object"&&["Unknown","Online","Offline"].indexOf(n.onlineState)!==-1&&typeof n.clientId=="string"?new qg(n.clientId,n.onlineState):(De("SharedClientState",`Failed to parse online state: ${e}`),null)}}class Hg{constructor(){this.activeTargetIds=xh()}Fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ms(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Os(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Wg{constructor(e,n,r,i,s){this.window=e,this.Oe=n,this.persistenceKey=r,this.Ls=i,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.Bs=this.Us.bind(this),this.qs=new Ve(J),this.started=!1,this.Ks=[];const o=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=s,this.js=zT(this.persistenceKey,this.Ls),this.Qs=function(a){return`firestore_sequence_number_${a}`}(this.persistenceKey),this.qs=this.qs.insert(this.Ls,new Hg),this.Ws=new RegExp(`^firestore_clients_${o}_([^_]*)$`),this.Gs=new RegExp(`^firestore_mutations_${o}_(\\d+)(?:_(.*))?$`),this.zs=new RegExp(`^firestore_targets_${o}_(\\d+)$`),this.Hs=function(a){return`firestore_online_state_${a}`}(this.persistenceKey),this.Js=function(a){return`firestore_bundle_loaded_${a}`}(this.persistenceKey),this.window.addEventListener("storage",this.Bs)}static bt(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.pn();for(const r of e){if(r===this.Ls)continue;const i=this.getItem(zT(this.persistenceKey,r));if(i){const s=zh.$s(r,i);s&&(this.qs=this.qs.insert(s.clientId,s))}}this.Ys();const n=this.storage.getItem(this.Hs);if(n){const r=this.Xs(n);r&&this.Zs(r)}for(const r of this.Ks)this.Us(r);this.Ks=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.Qs,JSON.stringify(e))}getAllActiveQueryTargets(){return this.ti(this.qs)}isActiveQueryTarget(e){let n=!1;return this.qs.forEach((r,i)=>{i.activeTargetIds.has(e)&&(n=!0)}),n}addPendingMutation(e){this.ei(e,"pending")}updateMutationState(e,n,r){this.ei(e,n,r),this.ni(e)}addLocalQueryTarget(e){let n="not-current";if(this.isActiveQueryTarget(e)){const r=this.storage.getItem(jg(this.persistenceKey,e));if(r){const i=$u.$s(e,r);i&&(n=i.state)}}return this.si.Fs(e),this.Ys(),n}removeLocalQueryTarget(e){this.si.Ms(e),this.Ys()}isLocalQueryTarget(e){return this.si.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(jg(this.persistenceKey,e))}updateQueryState(e,n,r){this.ii(e,n,r)}handleUserChange(e,n,r){n.forEach(i=>{this.ni(i)}),this.currentUser=e,r.forEach(i=>{this.addPendingMutation(i)})}setOnlineState(e){this.ri(e)}notifyBundleLoaded(){this.oi()}shutdown(){this.started&&(this.window.removeEventListener("storage",this.Bs),this.removeItem(this.js),this.started=!1)}getItem(e){const n=this.storage.getItem(e);return N("SharedClientState","READ",e,n),n}setItem(e,n){N("SharedClientState","SET",e,n),this.storage.setItem(e,n)}removeItem(e){N("SharedClientState","REMOVE",e),this.storage.removeItem(e)}Us(e){const n=e;if(n.storageArea===this.storage){if(N("SharedClientState","EVENT",n.key,n.newValue),n.key===this.js)return void De("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.Oe.enqueueRetryable(async()=>{if(this.started){if(n.key!==null){if(this.Ws.test(n.key)){if(n.newValue==null){const r=this.ai(n.key);return this.ci(r,null)}{const r=this.ui(n.key,n.newValue);if(r)return this.ci(r.clientId,r)}}else if(this.Gs.test(n.key)){if(n.newValue!==null){const r=this.hi(n.key,n.newValue);if(r)return this.li(r)}}else if(this.zs.test(n.key)){if(n.newValue!==null){const r=this.fi(n.key,n.newValue);if(r)return this.di(r)}}else if(n.key===this.Hs){if(n.newValue!==null){const r=this.Xs(n.newValue);if(r)return this.Zs(r)}}else if(n.key===this.Qs){const r=function(i){let s=Zt.T;if(i!=null)try{const o=JSON.parse(i);H(typeof o=="number"),s=o}catch(o){De("SharedClientState","Failed to read sequence number from WebStorage",o)}return s}(n.newValue);r!==Zt.T&&this.sequenceNumberHandler(r)}else if(n.key===this.Js)return this.syncEngine.wi()}}else this.Ks.push(n)})}}get si(){return this.qs.get(this.Ls)}Ys(){this.setItem(this.js,this.si.Os())}ei(e,n,r){const i=new Bh(this.currentUser,e,n,r),s=jT(this.persistenceKey,this.currentUser,e);this.setItem(s,i.Os())}ni(e){const n=jT(this.persistenceKey,this.currentUser,e);this.removeItem(n)}ri(e){const n={clientId:this.Ls,onlineState:e};this.storage.setItem(this.Hs,JSON.stringify(n))}ii(e,n,r){const i=jg(this.persistenceKey,e),s=new $u(e,n,r);this.setItem(i,s.Os())}oi(){this.setItem(this.Js,"value-not-used")}ai(e){const n=this.Ws.exec(e);return n?n[1]:null}ui(e,n){const r=this.ai(e);return zh.$s(r,n)}hi(e,n){const r=this.Gs.exec(e),i=Number(r[1]),s=r[2]!==void 0?r[2]:null;return Bh.$s(new ct(s),i,n)}fi(e,n){const r=this.zs.exec(e),i=Number(r[1]);return $u.$s(i,n)}Xs(e){return qg.$s(e)}async li(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine._i(e.batchId,e.state,e.error);N("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}di(e){return this.syncEngine.mi(e.targetId,e.state,e.error)}ci(e,n){const r=n?this.qs.insert(e,n):this.qs.remove(e),i=this.ti(this.qs),s=this.ti(r),o=[],a=[];return s.forEach(u=>{i.has(u)||o.push(u)}),i.forEach(u=>{s.has(u)||a.push(u)}),this.syncEngine.gi(o,a).then(()=>{this.qs=r})}Zs(e){this.qs.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}ti(e){let n=xh();return e.forEach((r,i)=>{n=n.unionWith(i.activeTargetIds)}),n}}class qT{constructor(){this.yi=new Hg,this.pi={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.yi.Fs(e),this.pi[e]||"not-current"}updateQueryState(e,n,r){this.pi[e]=n}removeLocalQueryTarget(e){this.yi.Ms(e)}isLocalQueryTarget(e){return this.yi.activeTargetIds.has(e)}clearQueryState(e){delete this.pi[e]}getAllActiveQueryTargets(){return this.yi.activeTargetIds}isActiveQueryTarget(e){return this.yi.activeTargetIds.has(e)}start(){return this.yi=new Hg,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(){}}/**
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
 */class EM{Ti(e){}shutdown(){}}/**
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
 */class HT{constructor(){this.Ei=()=>this.Ii(),this.Ai=()=>this.Ri(),this.bi=[],this.Pi()}Ti(e){this.bi.push(e)}shutdown(){window.removeEventListener("online",this.Ei),window.removeEventListener("offline",this.Ai)}Pi(){window.addEventListener("online",this.Ei),window.addEventListener("offline",this.Ai)}Ii(){N("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.bi)e(0)}Ri(){N("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.bi)e(1)}static bt(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TM={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SM{constructor(e){this.vi=e.vi,this.Vi=e.Vi}Si(e){this.Di=e}Ci(e){this.Ni=e}onMessage(e){this.xi=e}close(){this.Vi()}send(e){this.vi(e)}ki(){this.Di()}$i(e){this.Ni(e)}Oi(e){this.xi(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kM extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.Fi=n+"://"+e.host,this.Mi="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}Li(e,n,r,i){const s=this.Bi(e,n);N("RestConnection","Sending: ",s,r);const o={};return this.Ui(o,i),this.qi(e,s,o,r).then(a=>(N("RestConnection","Received: ",a),a),a=>{throw yu("RestConnection",`${e} failed with error: `,a,"url: ",s,"request:",r),a})}Ki(e,n,r,i){return this.Li(e,n,r,i)}Ui(e,n){if(e["X-Goog-Api-Client"]="gl-js/ fire/"+to,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n)for(const r in n.authHeaders)n.authHeaders.hasOwnProperty(r)&&(e[r]=n.authHeaders[r])}Bi(e,n){const r=TM[e];return`${this.Fi}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}qi(e,n,r,i){return new Promise((s,o)=>{const a=new GO;a.listenOnce(qO.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case dg.NO_ERROR:const l=a.getResponseJson();N("Connection","XHR received:",JSON.stringify(l)),s(l);break;case dg.TIMEOUT:N("Connection",'RPC "'+e+'" timed out'),o(new C(E.DEADLINE_EXCEEDED,"Request time out"));break;case dg.HTTP_ERROR:const c=a.getStatus();if(N("Connection",'RPC "'+e+'" failed with status:',c,"response text:",a.getResponseText()),c>0){const h=a.getResponseJson().error;if(h&&h.status&&h.message){const d=function(g){const y=g.toLowerCase().replace(/_/g,"-");return Object.values(E).indexOf(y)>=0?y:E.UNKNOWN}(h.status);o(new C(d,h.message))}else o(new C(E.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new C(E.UNAVAILABLE,"Connection failed."));break;default:q()}}finally{N("Connection",'RPC "'+e+'" completed.')}});const u=JSON.stringify(i);a.send(n,"POST",u,r,15)})}ji(e,n){const r=[this.Fi,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=zO(),s=jO(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new WO({})),this.Ui(o.initMessageHeaders,n),I_()||Ic()||qA()||$p()||HA()||Mp()||(o.httpHeadersOverwriteParam="$httpHeaders");const a=r.join("");N("Connection","Creating WebChannel: "+a,o);const u=i.createWebChannel(a,o);let l=!1,c=!1;const h=new SM({vi:g=>{c?N("Connection","Not sending because WebChannel is closed:",g):(l||(N("Connection","Opening WebChannel transport."),u.open(),l=!0),N("Connection","WebChannel sending:",g),u.send(g))},Vi:()=>u.close()}),d=(g,y,_)=>{g.listen(y,f=>{try{_(f)}catch(p){setTimeout(()=>{throw p},0)}})};return d(u,wh.EventType.OPEN,()=>{c||N("Connection","WebChannel transport opened.")}),d(u,wh.EventType.CLOSE,()=>{c||(c=!0,N("Connection","WebChannel transport closed"),h.$i())}),d(u,wh.EventType.ERROR,g=>{c||(c=!0,yu("Connection","WebChannel transport errored:",g),h.$i(new C(E.UNAVAILABLE,"The operation could not be completed")))}),d(u,wh.EventType.MESSAGE,g=>{var y;if(!c){const _=g.data[0];H(!!_);const f=_,p=f.error||((y=f[0])===null||y===void 0?void 0:y.error);if(p){N("Connection","WebChannel received error:",p);const m=p.status;let w=function(P){const b=Me[P];if(b!==void 0)return HE(b)}(m),v=p.message;w===void 0&&(w=E.INTERNAL,v="Unknown error status: "+m+" with message "+p.message),c=!0,h.$i(new C(w,v)),u.close()}else N("Connection","WebChannel received:",_),h.Oi(_)}}),d(s,HO.STAT_EVENT,g=>{g.stat===cE.PROXY?N("Connection","Detected buffering proxy"):g.stat===cE.NOPROXY&&N("Connection","Detected no buffering proxy")}),setTimeout(()=>{h.ki()},0),h}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function WT(){return typeof window!="undefined"?window:null}function jh(){return typeof document!="undefined"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uu(t){return new xL(t,!0)}class Gg{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Oe=e,this.timerId=n,this.Qi=r,this.Wi=i,this.Gi=s,this.zi=0,this.Hi=null,this.Ji=Date.now(),this.reset()}reset(){this.zi=0}Yi(){this.zi=this.Gi}Xi(e){this.cancel();const n=Math.floor(this.zi+this.Zi()),r=Math.max(0,Date.now()-this.Ji),i=Math.max(0,n-r);i>0&&N("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.zi} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Hi=this.Oe.enqueueAfterDelay(this.timerId,i,()=>(this.Ji=Date.now(),e())),this.zi*=this.Wi,this.zi<this.Qi&&(this.zi=this.Qi),this.zi>this.Gi&&(this.zi=this.Gi)}tr(){this.Hi!==null&&(this.Hi.skipDelay(),this.Hi=null)}cancel(){this.Hi!==null&&(this.Hi.cancel(),this.Hi=null)}Zi(){return(Math.random()-.5)*this.zi}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GT{constructor(e,n,r,i,s,o){this.Oe=e,this.er=r,this.nr=i,this.credentialsProvider=s,this.listener=o,this.state=0,this.sr=0,this.ir=null,this.stream=null,this.rr=new Gg(e,n)}ar(){return this.state===1||this.state===2||this.state===4}cr(){return this.state===2}start(){this.state!==3?this.auth():this.ur()}async stop(){this.ar()&&await this.close(0)}hr(){this.state=0,this.rr.reset()}lr(){this.cr()&&this.ir===null&&(this.ir=this.Oe.enqueueAfterDelay(this.er,6e4,()=>this.dr()))}wr(e){this._r(),this.stream.send(e)}async dr(){if(this.cr())return this.close(0)}_r(){this.ir&&(this.ir.cancel(),this.ir=null)}async close(e,n){this._r(),this.rr.cancel(),this.sr++,e!==3?this.rr.reset():n&&n.code===E.RESOURCE_EXHAUSTED?(De(n.toString()),De("Using maximum backoff delay to prevent overloading the backend."),this.rr.Yi()):n&&n.code===E.UNAUTHENTICATED&&this.credentialsProvider.invalidateToken(),this.stream!==null&&(this.mr(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ci(n)}mr(){}auth(){this.state=1;const e=this.gr(this.sr),n=this.sr;this.credentialsProvider.getToken().then(r=>{this.sr===n&&this.yr(r)},r=>{e(()=>{const i=new C(E.UNKNOWN,"Fetching auth token failed: "+r.message);return this.pr(i)})})}yr(e){const n=this.gr(this.sr);this.stream=this.Tr(e),this.stream.Si(()=>{n(()=>(this.state=2,this.listener.Si()))}),this.stream.Ci(r=>{n(()=>this.pr(r))}),this.stream.onMessage(r=>{n(()=>this.onMessage(r))})}ur(){this.state=4,this.rr.Xi(async()=>{this.state=0,this.start()})}pr(e){return N("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(3,e)}gr(e){return n=>{this.Oe.enqueueAndForget(()=>this.sr===e?n():(N("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class CM extends GT{constructor(e,n,r,i,s){super(e,"listen_stream_connection_backoff","listen_stream_idle",n,r,s),this.N=i}Tr(e){return this.nr.ji("Listen",e)}onMessage(e){this.rr.reset();const n=LL(this.N,e),r=function(i){if(!("targetChange"in i))return Q.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?Q.min():s.readTime?Ye(s.readTime):Q.min()}(e);return this.listener.Er(n,r)}Ir(e){const n={};n.database=Du(this.N),n.addTarget=function(i,s){let o;const a=s.target;return o=Sh(a)?{documents:oT(i,a)}:{query:aT(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0?o.resumeToken=ZE(i,s.resumeToken):s.snapshotVersion.compareTo(Q.min())>0&&(o.readTime=Pu(i,s.snapshotVersion.toTimestamp())),o}(this.N,e);const r=$L(this.N,e);r&&(n.labels=r),this.wr(n)}Ar(e){const n={};n.database=Du(this.N),n.removeTarget=e,this.wr(n)}}class bM extends GT{constructor(e,n,r,i,s){super(e,"write_stream_connection_backoff","write_stream_idle",n,r,s),this.N=i,this.Rr=!1}get br(){return this.Rr}start(){this.Rr=!1,this.lastStreamToken=void 0,super.start()}mr(){this.Rr&&this.Pr([])}Tr(e){return this.nr.ji("Write",e)}onMessage(e){if(H(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Rr){this.rr.reset();const n=ML(e.writeResults,e.commitTime),r=Ye(e.commitTime);return this.listener.vr(r,n)}return H(!e.writeResults||e.writeResults.length===0),this.Rr=!0,this.listener.Vr()}Sr(){const e={};e.database=Du(this.N),this.wr(e)}Pr(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>Oh(this.N,r))};this.wr(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AM extends class{}{constructor(e,n,r){super(),this.credentials=e,this.nr=n,this.N=r,this.Dr=!1}Cr(){if(this.Dr)throw new C(E.FAILED_PRECONDITION,"The client has already been terminated.")}Li(e,n,r){return this.Cr(),this.credentials.getToken().then(i=>this.nr.Li(e,n,r,i)).catch(i=>{throw i.name==="FirebaseError"?(i.code===E.UNAUTHENTICATED&&this.credentials.invalidateToken(),i):new C(E.UNKNOWN,i.toString())})}Ki(e,n,r){return this.Cr(),this.credentials.getToken().then(i=>this.nr.Ki(e,n,r,i)).catch(i=>{throw i.name==="FirebaseError"?(i.code===E.UNAUTHENTICATED&&this.credentials.invalidateToken(),i):new C(E.UNKNOWN,i.toString())})}terminate(){this.Dr=!0}}class RM{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.Nr=0,this.kr=null,this.$r=!0}Or(){this.Nr===0&&(this.Fr("Unknown"),this.kr=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.kr=null,this.Mr("Backend didn't respond within 10 seconds."),this.Fr("Offline"),Promise.resolve())))}Lr(e){this.state==="Online"?this.Fr("Unknown"):(this.Nr++,this.Nr>=1&&(this.Br(),this.Mr(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.Fr("Offline")))}set(e){this.Br(),this.Nr=0,e==="Online"&&(this.$r=!1),this.Fr(e)}Fr(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}Mr(e){const n=`Could not reach Cloud Firestore backend. ${e}
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
 */class NM{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ur=[],this.qr=new Map,this.Kr=new Set,this.jr=[],this.Qr=s,this.Qr.Ti(o=>{r.enqueueAndForget(async()=>{ni(this)&&(N("RemoteStore","Restarting streams for network reachability change."),await async function(a){const u=L(a);u.Kr.add(4),await So(u),u.Wr.set("Unknown"),u.Kr.delete(4),await Fu(u)}(this))})}),this.Wr=new RM(r,i)}}async function Fu(t){if(ni(t))for(const e of t.jr)await e(!0)}async function So(t){for(const e of t.jr)await e(!1)}function qh(t,e){const n=L(t);n.qr.has(e.targetId)||(n.qr.set(e.targetId,e),Yg(n)?Qg(n):Co(n).cr()&&Kg(n,e))}function Vu(t,e){const n=L(t),r=Co(n);n.qr.delete(e),r.cr()&&KT(n,e),n.qr.size===0&&(r.cr()?r.lr():ni(n)&&n.Wr.set("Unknown"))}function Kg(t,e){t.Gr.Y(e.targetId),Co(t).Ir(e)}function KT(t,e){t.Gr.Y(e),Co(t).Ar(e)}function Qg(t){t.Gr=new RL({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Tt:e=>t.qr.get(e)||null}),Co(t).start(),t.Wr.Or()}function Yg(t){return ni(t)&&!Co(t).ar()&&t.qr.size>0}function ni(t){return L(t).Kr.size===0}function QT(t){t.Gr=void 0}async function PM(t){t.qr.forEach((e,n)=>{Kg(t,e)})}async function xM(t,e){QT(t),Yg(t)?(t.Wr.Lr(e),Qg(t)):t.Wr.set("Unknown")}async function DM(t,e,n){if(t.Wr.set("Online"),e instanceof QE&&e.state===2&&e.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r.qr.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r.qr.delete(o),r.Gr.removeTarget(o))}(t,e)}catch(r){N("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Hh(t,r)}else if(e instanceof Dh?t.Gr.rt(e):e instanceof KE?t.Gr.ft(e):t.Gr.ct(e),!n.isEqual(Q.min()))try{const r=await UT(t.localStore);n.compareTo(r)>=0&&await function(i,s){const o=i.Gr._t(s);return o.targetChanges.forEach((a,u)=>{if(a.resumeToken.approximateByteSize()>0){const l=i.qr.get(u);l&&i.qr.set(u,l.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach(a=>{const u=i.qr.get(a);if(!u)return;i.qr.set(a,u.withResumeToken(Qe.EMPTY_BYTE_STRING,u.snapshotVersion)),KT(i,a);const l=new Jr(u.target,a,1,u.sequenceNumber);Kg(i,l)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){N("RemoteStore","Failed to raise snapshot:",r),await Hh(t,r)}}async function Hh(t,e,n){if(!Hi(e))throw e;t.Kr.add(1),await So(t),t.Wr.set("Offline"),n||(n=()=>UT(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{N("RemoteStore","Retrying IndexedDB access"),await n(),t.Kr.delete(1),await Fu(t)})}function YT(t,e){return e().catch(n=>Hh(t,n,e))}async function ko(t){const e=L(t),n=ri(e);let r=e.Ur.length>0?e.Ur[e.Ur.length-1].batchId:-1;for(;OM(e);)try{const i=await hM(e.localStore,r);if(i===null){e.Ur.length===0&&n.lr();break}r=i.batchId,LM(e,i)}catch(i){await Hh(e,i)}XT(e)&&JT(e)}function OM(t){return ni(t)&&t.Ur.length<10}function LM(t,e){t.Ur.push(e);const n=ri(t);n.cr()&&n.br&&n.Pr(e.mutations)}function XT(t){return ni(t)&&!ri(t).ar()&&t.Ur.length>0}function JT(t){ri(t).start()}async function MM(t){ri(t).Sr()}async function $M(t){const e=ri(t);for(const n of t.Ur)e.Pr(n.mutations)}async function UM(t,e,n){const r=t.Ur.shift(),i=Pg.from(r,e,n);await YT(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await ko(t)}async function FM(t,e){e&&ri(t).br&&await async function(n,r){if(i=r.code,qE(i)&&i!==E.ABORTED){const s=n.Ur.shift();ri(n).hr(),await YT(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,r)),await ko(n)}var i}(t,e),XT(t)&&JT(t)}async function Xg(t,e){const n=L(t);e?(n.Kr.delete(2),await Fu(n)):e||(n.Kr.add(2),await So(n),n.Wr.set("Unknown"))}function Co(t){return t.zr||(t.zr=function(e,n,r){const i=L(e);return i.Cr(),new CM(n,i.nr,i.credentials,i.N,r)}(t.datastore,t.asyncQueue,{Si:PM.bind(null,t),Ci:xM.bind(null,t),Er:DM.bind(null,t)}),t.jr.push(async e=>{e?(t.zr.hr(),Yg(t)?Qg(t):t.Wr.set("Unknown")):(await t.zr.stop(),QT(t))})),t.zr}function ri(t){return t.Hr||(t.Hr=function(e,n,r){const i=L(e);return i.Cr(),new bM(n,i.nr,i.credentials,i.N,r)}(t.datastore,t.asyncQueue,{Si:MM.bind(null,t),Ci:FM.bind(null,t),Vr:$M.bind(null,t),vr:UM.bind(null,t)}),t.jr.push(async e=>{e?(t.Hr.hr(),await ko(t)):(await t.Hr.stop(),t.Ur.length>0&&(N("RemoteStore",`Stopping write stream with ${t.Ur.length} pending writes`),t.Ur=[]))})),t.Hr}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jg{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Ge,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new Jg(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new C(E.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function bo(t,e){if(De("AsyncQueue",`${e}: ${t}`),Hi(t))return new C(E.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao{constructor(e){this.comparator=e?(n,r)=>e(n,r)||z.comparator(n.key,r.key):(n,r)=>z.comparator(n.key,r.key),this.keyedMap=Cg(),this.sortedSet=new Ve(this.comparator)}static emptySet(e){return new Ao(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ao)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Ao;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZT{constructor(){this.Jr=new Ve(z.comparator)}track(e){const n=e.doc.key,r=this.Jr.get(n);r?e.type!==0&&r.type===3?this.Jr=this.Jr.insert(n,e):e.type===3&&r.type!==1?this.Jr=this.Jr.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Jr=this.Jr.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Jr=this.Jr.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Jr=this.Jr.remove(n):e.type===1&&r.type===2?this.Jr=this.Jr.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Jr=this.Jr.insert(n,{type:2,doc:e.doc}):q():this.Jr=this.Jr.insert(n,e)}Yr(){const e=[];return this.Jr.inorderTraversal((n,r)=>{e.push(r)}),e}}class Ro{constructor(e,n,r,i,s,o,a,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u}static fromInitialDocuments(e,n,r,i){const s=[];return n.forEach(o=>{s.push({type:0,doc:o})}),new Ro(e,n,Ao.emptySet(n),s,r,i,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Su(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VM{constructor(){this.Xr=void 0,this.listeners=[]}}class BM{constructor(){this.queries=new Io(e=>RE(e),Su),this.onlineState="Unknown",this.Zr=new Set}}async function Zg(t,e){const n=L(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new VM),i)try{s.Xr=await n.onListen(r)}catch(o){const a=bo(o,`Initialization of query '${Tg(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.eo(n.onlineState),s.Xr&&e.no(s.Xr)&&ty(n)}async function ey(t,e){const n=L(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function zM(t,e){const n=L(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.no(i)&&(r=!0);o.Xr=i}}r&&ty(n)}function jM(t,e,n){const r=L(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function ty(t){t.Zr.forEach(e=>{e.next()})}class ny{constructor(e,n,r){this.query=e,this.so=n,this.io=!1,this.ro=null,this.onlineState="Unknown",this.options=r||{}}no(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Ro(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let n=!1;return this.io?this.oo(e)&&(this.so.next(e),n=!0):this.ao(e,this.onlineState)&&(this.co(e),n=!0),this.ro=e,n}onError(e){this.so.error(e)}eo(e){this.onlineState=e;let n=!1;return this.ro&&!this.io&&this.ao(this.ro,e)&&(this.co(this.ro),n=!0),n}ao(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.uo||!r)&&(!e.docs.isEmpty()||n==="Offline")}oo(e){if(e.docChanges.length>0)return!0;const n=this.ro&&this.ro.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}co(e){e=Ro.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.io=!0,this.so.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qM{constructor(e,n){this.payload=e,this.byteLength=n}ho(){return"metadata"in this.payload}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eS{constructor(e){this.N=e}zn(e){return Vn(this.N,e)}Hn(e){return e.metadata.exists?iT(this.N,e.document,!1):Ee.newNoDocument(this.zn(e.metadata.name),this.Jn(e.metadata.readTime))}Jn(e){return Ye(e)}}class HM{constructor(e,n,r){this.lo=e,this.localStore=n,this.N=r,this.queries=[],this.documents=[],this.progress=tS(e)}fo(e){this.progress.bytesLoaded+=e.byteLength;let n=this.progress.documentsLoaded;return e.payload.namedQuery?this.queries.push(e.payload.namedQuery):e.payload.documentMetadata?(this.documents.push({metadata:e.payload.documentMetadata}),e.payload.documentMetadata.exists||++n):e.payload.document&&(this.documents[this.documents.length-1].document=e.payload.document,++n),n!==this.progress.documentsLoaded?(this.progress.documentsLoaded=n,Object.assign({},this.progress)):null}wo(e){const n=new Map,r=new eS(this.N);for(const i of e)if(i.metadata.queries){const s=r.zn(i.metadata.name);for(const o of i.metadata.queries){const a=(n.get(o)||ce()).add(s);n.set(o,a)}}return n}async complete(){const e=await fM(this.localStore,new eS(this.N),this.documents,this.lo.id),n=this.wo(this.documents);for(const r of this.queries)await pM(this.localStore,r,n.get(r.name));return this.progress.taskState="Success",new aM(Object.assign({},this.progress),e)}}function tS(t){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:t.totalDocuments,totalBytes:t.totalBytes}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nS{constructor(e){this.key=e}}class rS{constructor(e){this.key=e}}class iS{constructor(e,n){this.query=e,this._o=n,this.mo=null,this.current=!1,this.yo=ce(),this.mutatedKeys=ce(),this.po=NE(e),this.To=new Ao(this.po)}get Eo(){return this._o}Io(e,n){const r=n?n.Ao:new ZT,i=n?n.To:this.To;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const u=Ch(this.query)&&i.size===this.query.limit?i.last():null,l=bh(this.query)&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,h)=>{const d=i.get(c),g=ku(this.query,h)?h:null,y=!!d&&this.mutatedKeys.has(d.key),_=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let f=!1;d&&g?d.data.isEqual(g.data)?y!==_&&(r.track({type:3,doc:g}),f=!0):this.Ro(d,g)||(r.track({type:2,doc:g}),f=!0,(u&&this.po(g,u)>0||l&&this.po(g,l)<0)&&(a=!0)):!d&&g?(r.track({type:0,doc:g}),f=!0):d&&!g&&(r.track({type:1,doc:d}),f=!0,(u||l)&&(a=!0)),f&&(g?(o=o.add(g),s=_?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),Ch(this.query)||bh(this.query))for(;o.size>this.query.limit;){const c=Ch(this.query)?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{To:o,Ao:r,Ln:a,mutatedKeys:s}}Ro(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.To;this.To=e.To,this.mutatedKeys=e.mutatedKeys;const s=e.Ao.Yr();s.sort((l,c)=>function(h,d){const g=y=>{switch(y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return q()}};return g(h)-g(d)}(l.type,c.type)||this.po(l.doc,c.doc)),this.bo(r);const o=n?this.Po():[],a=this.yo.size===0&&this.current?1:0,u=a!==this.mo;return this.mo=a,s.length!==0||u?{snapshot:new Ro(this.query,e.To,i,s,e.mutatedKeys,a===0,u,!1),vo:o}:{vo:o}}eo(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({To:this.To,Ao:new ZT,mutatedKeys:this.mutatedKeys,Ln:!1},!1)):{vo:[]}}Vo(e){return!this._o.has(e)&&!!this.To.has(e)&&!this.To.get(e).hasLocalMutations}bo(e){e&&(e.addedDocuments.forEach(n=>this._o=this._o.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this._o=this._o.delete(n)),this.current=e.current)}Po(){if(!this.current)return[];const e=this.yo;this.yo=ce(),this.To.forEach(r=>{this.Vo(r.key)&&(this.yo=this.yo.add(r.key))});const n=[];return e.forEach(r=>{this.yo.has(r)||n.push(new rS(r))}),this.yo.forEach(r=>{e.has(r)||n.push(new nS(r))}),n}So(e){this._o=e.Gn,this.yo=ce();const n=this.Io(e.documents);return this.applyChanges(n,!0)}Do(){return Ro.fromInitialDocuments(this.query,this.To,this.mutatedKeys,this.mo===0)}}class WM{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class GM{constructor(e){this.key=e,this.Co=!1}}class KM{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.No={},this.xo=new Io(a=>RE(a),Su),this.ko=new Map,this.$o=new Set,this.Oo=new Ve(z.comparator),this.Fo=new Map,this.Mo=new Bg,this.Lo={},this.Bo=new Map,this.Uo=Gi.ie(),this.onlineState="Unknown",this.qo=void 0}get isPrimaryClient(){return this.qo===!0}}async function QM(t,e){const n=uy(t);let r,i;const s=n.xo.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.Do();else{const o=await Eo(n.localStore,hn(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await ry(n,e,r,a==="current"),n.isPrimaryClient&&qh(n.remoteStore,o)}return i}async function ry(t,e,n,r){t.Ko=(c,h,d)=>async function(g,y,_,f){let p=y.view.Io(_);p.Ln&&(p=await Vh(g.localStore,y.query,!1).then(({documents:v})=>y.view.Io(v,p)));const m=f&&f.targetChanges.get(y.targetId),w=y.view.applyChanges(p,g.isPrimaryClient,m);return oy(g,y.targetId,w.vo),w.snapshot}(t,c,h,d);const i=await Vh(t.localStore,e,!0),s=new iS(e,i.Gn),o=s.Io(i.documents),a=Nu.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline"),u=s.applyChanges(o,t.isPrimaryClient,a);oy(t,n,u.vo);const l=new WM(e,n,s);return t.xo.set(e,l),t.ko.has(n)?t.ko.get(n).push(e):t.ko.set(n,[e]),u.snapshot}async function YM(t,e){const n=L(t),r=n.xo.get(e),i=n.ko.get(r.targetId);if(i.length>1)return n.ko.set(r.targetId,i.filter(s=>!Su(s,e))),void n.xo.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await To(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),Vu(n.remoteStore,r.targetId),No(n,r.targetId)}).catch(Ki)):(No(n,r.targetId),await To(n.localStore,r.targetId,!0))}async function XM(t,e,n){const r=ly(t);try{const i=await function(s,o){const a=L(s),u=Ke.now(),l=o.reduce((h,d)=>h.add(d.key),ce());let c;return a.persistence.runTransaction("Locally write mutations","readwrite",h=>a.Qn.Pn(h,l).next(d=>{c=d;const g=[];for(const y of o){const _=EL(y,c.get(y.key));_!=null&&g.push(new Yr(y.key,_,EE(_.value.mapValue),Le.exists(!0)))}return a.In.addMutationBatch(h,u,g,o)})).then(h=>(h.applyToLocalDocumentSet(c),{batchId:h.batchId,changes:c}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,o,a){let u=s.Lo[s.currentUser.toKey()];u||(u=new Ve(J)),u=u.insert(o,a),s.Lo[s.currentUser.toKey()]=u}(r,i.batchId,n),await cr(r,i.changes),await ko(r.remoteStore)}catch(i){const s=bo(i,"Failed to persist write");n.reject(s)}}async function sS(t,e){const n=L(t);try{const r=await cM(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Fo.get(s);o&&(H(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Co=!0:i.modifiedDocuments.size>0?H(o.Co):i.removedDocuments.size>0&&(H(o.Co),o.Co=!1))}),await cr(n,r,e)}catch(r){await Ki(r)}}function oS(t,e,n){const r=L(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.xo.forEach((s,o)=>{const a=o.view.eo(e);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=L(s);a.onlineState=o;let u=!1;a.queries.forEach((l,c)=>{for(const h of c.listeners)h.eo(o)&&(u=!0)}),u&&ty(a)}(r.eventManager,e),i.length&&r.No.Er(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function JM(t,e,n){const r=L(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Fo.get(e),s=i&&i.key;if(s){let o=new Ve(z.comparator);o=o.insert(s,Ee.newNoDocument(s,Q.min()));const a=ce().add(s),u=new Ru(Q.min(),new Map,new Ce(J),o,a);await sS(r,u),r.Oo=r.Oo.remove(s),r.Fo.delete(e),ay(r)}else await To(r.localStore,e,!1).then(()=>No(r,e,n)).catch(Ki)}async function ZM(t,e){const n=L(t),r=e.batch.batchId;try{const i=await lM(n.localStore,e);sy(n,r,null),iy(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await cr(n,i)}catch(i){await Ki(i)}}async function e$(t,e,n){const r=L(t);try{const i=await function(s,o){const a=L(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let l;return a.In.lookupMutationBatch(u,o).next(c=>(H(c!==null),l=c.keys(),a.In.removeMutationBatch(u,c))).next(()=>a.In.performConsistencyCheck(u)).next(()=>a.Qn.Pn(u,l))})}(r.localStore,e);sy(r,e,n),iy(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await cr(r,i)}catch(i){await Ki(i)}}async function t$(t,e){const n=L(t);ni(n.remoteStore)||N("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const r=await function(s){const o=L(s);return o.persistence.runTransaction("Get highest unacknowledged batch id","readonly",a=>o.In.getHighestUnacknowledgedBatchId(a))}(n.localStore);if(r===-1)return void e.resolve();const i=n.Bo.get(r)||[];i.push(e),n.Bo.set(r,i)}catch(r){const i=bo(r,"Initialization of waitForPendingWrites() operation failed");e.reject(i)}}function iy(t,e){(t.Bo.get(e)||[]).forEach(n=>{n.resolve()}),t.Bo.delete(e)}function sy(t,e,n){const r=L(t);let i=r.Lo[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Lo[r.currentUser.toKey()]=i}}function No(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.ko.get(e))t.xo.delete(r),n&&t.No.jo(r,n);t.ko.delete(e),t.isPrimaryClient&&t.Mo.cs(e).forEach(r=>{t.Mo.containsKey(r)||aS(t,r)})}function aS(t,e){t.$o.delete(e.path.canonicalString());const n=t.Oo.get(e);n!==null&&(Vu(t.remoteStore,n),t.Oo=t.Oo.remove(e),t.Fo.delete(n),ay(t))}function oy(t,e,n){for(const r of n)r instanceof nS?(t.Mo.addReference(r.key,e),n$(t,r)):r instanceof rS?(N("SyncEngine","Document no longer in limbo: "+r.key),t.Mo.removeReference(r.key,e),t.Mo.containsKey(r.key)||aS(t,r.key)):q()}function n$(t,e){const n=e.key,r=n.path.canonicalString();t.Oo.get(n)||t.$o.has(r)||(N("SyncEngine","New document in limbo: "+n),t.$o.add(r),ay(t))}function ay(t){for(;t.$o.size>0&&t.Oo.size<t.maxConcurrentLimboResolutions;){const e=t.$o.values().next().value;t.$o.delete(e);const n=new z(ie.fromString(e)),r=t.Uo.next();t.Fo.set(r,new GM(n)),t.Oo=t.Oo.insert(n,r),qh(t.remoteStore,new Jr(hn(ao(n.path)),r,2,Zt.T))}}async function cr(t,e,n){const r=L(t),i=[],s=[],o=[];r.xo.isEmpty()||(r.xo.forEach((a,u)=>{o.push(r.Ko(u,e,n).then(l=>{if(l){r.isPrimaryClient&&r.sharedClientState.updateQueryState(u.targetId,l.fromCache?"not-current":"current"),i.push(l);const c=Vg.kn(u.targetId,l);s.push(c)}}))}),await Promise.all(o),r.No.Er(i),await async function(a,u){const l=L(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",c=>T.forEach(u,h=>T.forEach(h.Nn,d=>l.persistence.referenceDelegate.addReference(c,h.targetId,d)).next(()=>T.forEach(h.xn,d=>l.persistence.referenceDelegate.removeReference(c,h.targetId,d)))))}catch(c){if(!Hi(c))throw c;N("LocalStore","Failed to update sequence numbers: "+c)}for(const c of u){const h=c.targetId;if(!c.fromCache){const d=l.Un.get(h),g=d.snapshotVersion,y=d.withLastLimboFreeSnapshotVersion(g);l.Un=l.Un.insert(h,y)}}}(r.localStore,s))}async function r$(t,e){const n=L(t);if(!n.currentUser.isEqual(e)){N("SyncEngine","User change. New user:",e.toKey());const r=await $T(n.localStore,e);n.currentUser=e,function(i,s){i.Bo.forEach(o=>{o.forEach(a=>{a.reject(new C(E.CANCELLED,s))})}),i.Bo.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await cr(n,r.Wn)}}function i$(t,e){const n=L(t),r=n.Fo.get(e);if(r&&r.Co)return ce().add(r.key);{let i=ce();const s=n.ko.get(e);if(!s)return i;for(const o of s){const a=n.xo.get(o);i=i.unionWith(a.view.Eo)}return i}}async function s$(t,e){const n=L(t),r=await Vh(n.localStore,e.query,!0),i=e.view.So(r);return n.isPrimaryClient&&oy(n,e.targetId,i.vo),i}async function o$(t){const e=L(t);return BT(e.localStore).then(n=>cr(e,n))}async function a$(t,e,n,r){const i=L(t),s=await function(o,a){const u=L(o),l=L(u.In);return u.persistence.runTransaction("Lookup mutation documents","readonly",c=>l.Xt(c,a).next(h=>h?u.Qn.Pn(c,h):T.resolve(null)))}(i.localStore,e);s!==null?(n==="pending"?await ko(i.remoteStore):n==="acknowledged"||n==="rejected"?(sy(i,e,r||null),iy(i,e),function(o,a){L(L(o).In).te(a)}(i.localStore,e)):q(),await cr(i,s)):N("SyncEngine","Cannot apply mutation batch with id: "+e)}async function u$(t,e){const n=L(t);if(uy(n),ly(n),e===!0&&n.qo!==!0){const r=n.sharedClientState.getAllActiveQueryTargets(),i=await uS(n,r.toArray());n.qo=!0,await Xg(n.remoteStore,!0);for(const s of i)qh(n.remoteStore,s)}else if(e===!1&&n.qo!==!1){const r=[];let i=Promise.resolve();n.ko.forEach((s,o)=>{n.sharedClientState.isLocalQueryTarget(o)?r.push(o):i=i.then(()=>(No(n,o),To(n.localStore,o,!0))),Vu(n.remoteStore,o)}),await i,await uS(n,r),function(s){const o=L(s);o.Fo.forEach((a,u)=>{Vu(o.remoteStore,u)}),o.Mo.us(),o.Fo=new Map,o.Oo=new Ve(z.comparator)}(n),n.qo=!1,await Xg(n.remoteStore,!1)}}async function uS(t,e,n){const r=L(t),i=[],s=[];for(const o of e){let a;const u=r.ko.get(o);if(u&&u.length!==0){a=await Eo(r.localStore,hn(u[0]));for(const l of u){const c=r.xo.get(l),h=await s$(r,c);h.snapshot&&s.push(h.snapshot)}}else{const l=await VT(r.localStore,o);a=await Eo(r.localStore,l),await ry(r,lS(l),o,!1)}i.push(a)}return r.No.Er(s),i}function lS(t){return bE(t.path,t.collectionGroup,t.orderBy,t.filters,t.limit,"F",t.startAt,t.endAt)}function l$(t){const e=L(t);return L(L(e.localStore).persistence).pn()}async function c$(t,e,n,r){const i=L(t);if(i.qo)N("SyncEngine","Ignoring unexpected query state notification.");else if(i.ko.has(e))switch(n){case"current":case"not-current":{const s=await BT(i.localStore),o=Ru.createSynthesizedRemoteEventForCurrentChange(e,n==="current");await cr(i,s,o);break}case"rejected":await To(i.localStore,e,!0),No(i,e,r);break;default:q()}}async function h$(t,e,n){const r=uy(t);if(r.qo){for(const i of e){if(r.ko.has(i)){N("SyncEngine","Adding an already active target "+i);continue}const s=await VT(r.localStore,i),o=await Eo(r.localStore,s);await ry(r,lS(s),o.targetId,!1),qh(r.remoteStore,o)}for(const i of n)r.ko.has(i)&&await To(r.localStore,i,!1).then(()=>{Vu(r.remoteStore,i),No(r,i)}).catch(Ki)}}function uy(t){const e=L(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=sS.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=i$.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=JM.bind(null,e),e.No.Er=zM.bind(null,e.eventManager),e.No.jo=jM.bind(null,e.eventManager),e}function ly(t){const e=L(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=ZM.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=e$.bind(null,e),e}function d$(t,e,n){const r=L(t);(async function(i,s,o){try{const a=await s.getMetadata();if(await function(h,d){const g=L(h),y=Ye(d.createTime);return g.persistence.runTransaction("hasNewerBundle","readonly",_=>g.Je.getBundleMetadata(_,d.id)).then(_=>!!_&&_.createTime.compareTo(y)>=0)}(i.localStore,a))return await s.close(),void o._completeWith(function(h){return{taskState:"Success",documentsLoaded:h.totalDocuments,bytesLoaded:h.totalBytes,totalDocuments:h.totalDocuments,totalBytes:h.totalBytes}}(a));o._updateProgress(tS(a));const u=new HM(a,i.localStore,s.N);let l=await s.Qo();for(;l;){const h=await u.fo(l);h&&o._updateProgress(h),l=await s.Qo()}const c=await u.complete();await cr(i,c.En,void 0),await function(h,d){const g=L(h);return g.persistence.runTransaction("Save bundle","readwrite",y=>g.Je.saveBundleMetadata(y,d))}(i.localStore,a),o._completeWith(c.progress)}catch(a){yu("SyncEngine",`Loading bundle failed with ${a}`),o._failWith(a)}})(r,e,n).then(()=>{r.sharedClientState.notifyBundleLoaded()})}class cS{constructor(){this.synchronizeTabs=!1}async initialize(e){this.N=Uu(e.databaseInfo.databaseId),this.sharedClientState=this.Wo(e),this.persistence=this.Go(e),await this.persistence.start(),this.gcScheduler=this.zo(e),this.localStore=this.Ho(e)}zo(e){return null}Ho(e){return MT(this.persistence,new LT,e.initialUser,this.N)}Go(e){return new _M(zg.Ns,this.N)}Wo(e){return new qT}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class hS extends cS{constructor(e,n,r){super(),this.Jo=e,this.cacheSizeBytes=n,this.forceOwnership=r,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await dM(this.localStore),await this.Jo.initialize(this,e),await ly(this.Jo.syncEngine),await ko(this.Jo.remoteStore),await this.persistence.nn(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(this.localStore),Promise.resolve()))}Ho(e){return MT(this.persistence,new LT,e.initialUser,this.N)}zo(e){const n=this.persistence.referenceDelegate.garbageCollector;return new tM(n,e.asyncQueue)}Go(e){const n=Fg(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?Ht.withCacheSize(this.cacheSizeBytes):Ht.DEFAULT;return new Ug(this.synchronizeTabs,n,e.clientId,r,e.asyncQueue,WT(),jh(),this.N,this.sharedClientState,!!this.forceOwnership)}Wo(e){return new qT}}class f$ extends hS{constructor(e,n){super(e,n,!1),this.Jo=e,this.cacheSizeBytes=n,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const n=this.Jo.syncEngine;this.sharedClientState instanceof Wg&&(this.sharedClientState.syncEngine={_i:a$.bind(null,n),mi:c$.bind(null,n),gi:h$.bind(null,n),pn:l$.bind(null,n),wi:o$.bind(null,n)},await this.sharedClientState.start()),await this.persistence.nn(async r=>{await u$(this.Jo.syncEngine,r),this.gcScheduler&&(r&&!this.gcScheduler.started?this.gcScheduler.start(this.localStore):r||this.gcScheduler.stop())})}Wo(e){const n=WT();if(!Wg.bt(n))throw new C(E.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const r=Fg(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new Wg(n,e.asyncQueue,r,e.clientId,e.initialUser)}}class cy{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>oS(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=r$.bind(null,this.syncEngine),await Xg(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new BM}createDatastore(e){const n=Uu(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new kM(i));var i;return function(s,o,a){return new AM(s,o,a)}(e.credentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,i=e.asyncQueue,s=a=>oS(this.syncEngine,a,0),o=HT.bt()?new HT:new EM,new NM(n,r,i,s,o);var n,r,i,s,o}createSyncEngine(e,n){return function(r,i,s,o,a,u,l){const c=new KM(r,i,s,o,a,u);return l&&(c.qo=!0),c}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=L(e);N("RemoteStore","RemoteStore shutting down."),n.Kr.add(5),await So(n),n.Qr.shutdown(),n.Wr.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dS(t,e=10240){let n=0;return{async read(){if(n<t.byteLength){const r={value:t.slice(n,n+e),done:!1};return n+=e,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.reject("unimplemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Wh{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Yo(this.observer.next,e)}error(e){this.observer.error?this.Yo(this.observer.error,e):console.error("Uncaught Error in snapshot listener:",e)}Xo(){this.muted=!0}Yo(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p${constructor(e,n){this.Zo=e,this.N=n,this.metadata=new Ge,this.buffer=new Uint8Array,this.ta=new TextDecoder("utf-8"),this.ea().then(r=>{r&&r.ho()?this.metadata.resolve(r.payload.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(r==null?void 0:r.payload)}`))},r=>this.metadata.reject(r))}close(){return this.Zo.cancel()}async getMetadata(){return this.metadata.promise}async Qo(){return await this.getMetadata(),this.ea()}async ea(){const e=await this.na();if(e===null)return null;const n=this.ta.decode(e),r=Number(n);isNaN(r)&&this.sa(`length string (${n}) is not valid number`);const i=await this.ia(r);return new qM(JSON.parse(i),e.length+r)}ra(){return this.buffer.findIndex(e=>e==="{".charCodeAt(0))}async na(){for(;this.ra()<0&&!await this.oa(););if(this.buffer.length===0)return null;const e=this.ra();e<0&&this.sa("Reached the end of bundle when a length string is expected.");const n=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),n}async ia(e){for(;this.buffer.length<e;)await this.oa()&&this.sa("Reached the end of bundle when more is expected.");const n=this.ta.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),n}sa(e){throw this.Zo.cancel(),new Error(`Invalid bundle format: ${e}`)}async oa(){const e=await this.Zo.read();if(!e.done){const n=new Uint8Array(this.buffer.length+e.value.length);n.set(this.buffer),n.set(e.value,this.buffer.length),this.buffer=n}return e.done}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m${constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new C(E.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const n=await async function(r,i){const s=L(r),o=Du(s.N)+"/documents",a={documents:i.map(h=>xu(s.N,h))},u=await s.Ki("BatchGetDocuments",o,a),l=new Map;u.forEach(h=>{const d=OL(s.N,h);l.set(d.key.toString(),d)});const c=[];return i.forEach(h=>{const d=l.get(h.toString());H(!!d),c.push(d)}),c}(this.datastore,e);return n.forEach(r=>this.recordVersion(r)),n}set(e,n){this.write(n.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,n){try{this.write(n.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastWriteError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new Au(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const e=this.readVersions;this.mutations.forEach(n=>{e.delete(n.key.toString())}),e.forEach((n,r)=>{const i=z.fromPath(r);this.mutations.push(new kg(i,this.precondition(i)))}),await async function(n,r){const i=L(n),s=Du(i.N)+"/documents",o={writes:r.map(a=>Oh(i.N,a))};await i.Li("Commit",s,o)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let n;if(e.isFoundDocument())n=e.version;else{if(!e.isNoDocument())throw q();n=Q.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!n.isEqual(r))throw new C(E.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),n)}precondition(e){const n=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&n?Le.updateTime(n):Le.none()}preconditionForUpdate(e){const n=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&n){if(n.isEqual(Q.min()))throw new C(E.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return Le.updateTime(n)}return Le.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
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
 */class g${constructor(e,n,r,i){this.asyncQueue=e,this.datastore=n,this.updateFunction=r,this.deferred=i,this.aa=5,this.rr=new Gg(this.asyncQueue,"transaction_retry")}run(){this.aa-=1,this.ca()}ca(){this.rr.Xi(async()=>{const e=new m$(this.datastore),n=this.ua(e);n&&n.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(i=>{this.ha(i)}))}).catch(r=>{this.ha(r)})})}ua(e){try{const n=this.updateFunction(e);return!Vi(n)&&n.catch&&n.then?n:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(n){return this.deferred.reject(n),null}}ha(e){this.aa>0&&this.la(e)?(this.aa-=1,this.asyncQueue.enqueueAndForget(()=>(this.ca(),Promise.resolve()))):this.deferred.reject(e)}la(e){if(e.name==="FirebaseError"){const n=e.code;return n==="aborted"||n==="failed-precondition"||!qE(n)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y${constructor(e,n,r){this.credentials=e,this.asyncQueue=n,this.databaseInfo=r,this.user=ct.UNAUTHENTICATED,this.clientId=fE.I(),this.credentialListener=()=>Promise.resolve(),this.credentials.start(n,async i=>{N("FirestoreClient","Received user=",i.uid),await this.credentialListener(i),this.user=i})}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,credentials:this.credentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.credentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new C(E.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ge;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.credentials.shutdown(),e.resolve()}catch(n){const r=bo(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function fS(t,e){t.asyncQueue.verifyOperationInProgress(),N("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await $T(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function pS(t,e){t.asyncQueue.verifyOperationInProgress();const n=await hy(t);N("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>async function(s,o){const a=L(s);a.asyncQueue.verifyOperationInProgress(),N("RemoteStore","RemoteStore received new credentials");const u=ni(a);a.Kr.add(3),await So(a),u&&a.Wr.set("Unknown"),await a.remoteSyncer.handleCredentialChange(o),a.Kr.delete(3),await Fu(a)}(e.remoteStore,i)),t.onlineComponents=e}async function hy(t){return t.offlineComponents||(N("FirestoreClient","Using default OfflineComponentProvider"),await fS(t,new cS)),t.offlineComponents}async function Gh(t){return t.onlineComponents||(N("FirestoreClient","Using default OnlineComponentProvider"),await pS(t,new cy)),t.onlineComponents}function mS(t){return hy(t).then(e=>e.persistence)}function dy(t){return hy(t).then(e=>e.localStore)}function gS(t){return Gh(t).then(e=>e.remoteStore)}function fy(t){return Gh(t).then(e=>e.syncEngine)}async function Po(t){const e=await Gh(t),n=e.eventManager;return n.onListen=QM.bind(null,e.syncEngine),n.onUnlisten=YM.bind(null,e.syncEngine),n}function v$(t){return t.asyncQueue.enqueue(async()=>{const e=await mS(t),n=await gS(t);return e.setNetworkEnabled(!0),function(r){const i=L(r);return i.Kr.delete(0),Fu(i)}(n)})}function w$(t){return t.asyncQueue.enqueue(async()=>{const e=await mS(t),n=await gS(t);return e.setNetworkEnabled(!1),async function(r){const i=L(r);i.Kr.add(0),await So(i),i.Wr.set("Offline")}(n)})}function _$(t,e){const n=new Ge;return t.asyncQueue.enqueueAndForget(async()=>async function(r,i,s){try{const o=await function(a,u){const l=L(a);return l.persistence.runTransaction("read document","readonly",c=>l.Qn.An(c,u))}(r,i);o.isFoundDocument()?s.resolve(o):o.isNoDocument()?s.resolve(null):s.reject(new C(E.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(o){const a=bo(o,`Failed to get document '${i} from cache`);s.reject(a)}}(await dy(t),e,n)),n.promise}function yS(t,e,n={}){const r=new Ge;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,u){const l=new Wh({next:h=>{s.enqueueAndForget(()=>ey(i,c));const d=h.docs.has(o);!d&&h.fromCache?u.reject(new C(E.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&h.fromCache&&a&&a.source==="server"?u.reject(new C(E.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(h)},error:h=>u.reject(h)}),c=new ny(ao(o.path),l,{includeMetadataChanges:!0,uo:!0});return Zg(i,c)}(await Po(t),t.asyncQueue,e,n,r)),r.promise}function I$(t,e){const n=new Ge;return t.asyncQueue.enqueueAndForget(async()=>async function(r,i,s){try{const o=await Vh(r,i,!0),a=new iS(i,o.Gn),u=a.Io(o.documents),l=a.applyChanges(u,!1);s.resolve(l.snapshot)}catch(o){const a=bo(o,`Failed to execute query '${i} against cache`);s.reject(a)}}(await dy(t),e,n)),n.promise}function vS(t,e,n={}){const r=new Ge;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,u){const l=new Wh({next:h=>{s.enqueueAndForget(()=>ey(i,c)),h.fromCache&&a.source==="server"?u.reject(new C(E.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(h)},error:h=>u.reject(h)}),c=new ny(o,l,{includeMetadataChanges:!0,uo:!0});return Zg(i,c)}(await Po(t),t.asyncQueue,e,n,r)),r.promise}function E$(t,e){const n=new Wh(e);return t.asyncQueue.enqueueAndForget(async()=>function(r,i){L(r).Zr.add(i),i.next()}(await Po(t),n)),()=>{n.Xo(),t.asyncQueue.enqueueAndForget(async()=>function(r,i){L(r).Zr.delete(i)}(await Po(t),n))}}function T$(t,e){const n=new Ge;return t.asyncQueue.enqueueAndForget(async()=>{const r=await function(i){return Gh(i).then(s=>s.datastore)}(t);new g$(t.asyncQueue,r,e,n).run()}),n.promise}function S$(t,e,n,r){const i=function(s,o){let a;return a=typeof s=="string"?new TextEncoder().encode(s):s,function(u,l){return new p$(u,l)}(function(u,l){if(u instanceof Uint8Array)return dS(u,l);if(u instanceof ArrayBuffer)return dS(new Uint8Array(u),l);if(u instanceof ReadableStream)return u.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(a),o)}(n,Uu(e));t.asyncQueue.enqueueAndForget(async()=>{d$(await fy(t),i,r)})}function k$(t,e){return t.asyncQueue.enqueue(async()=>function(n,r){const i=L(n);return i.persistence.runTransaction("Get named query","readonly",s=>i.Je.getNamedQuery(s,r))}(await dy(t),e))}class C${constructor(e,n,r,i,s,o,a,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=u}}class xo{constructor(e,n){this.projectId=e,this.database=n||"(default)"}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof xo&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wS=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function py(t,e,n){if(!n)throw new C(E.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function _S(t,e,n,r){if(e===!0&&r===!0)throw new C(E.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function IS(t){if(!z.isDocumentKey(t))throw new C(E.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function ES(t){if(z.isDocumentKey(t))throw new C(E.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Kh(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":q()}function re(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new C(E.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Kh(t);throw new C(E.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function TS(t,e){if(e<=0)throw new C(E.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SS{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new C(E.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new C(E.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,_S("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bu{constructor(e,n){this._credentials=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new SS({}),this._settingsFrozen=!1,e instanceof xo?this._databaseId=e:(this._app=e,this._databaseId=function(r){if(!Object.prototype.hasOwnProperty.apply(r.options,["projectId"]))throw new C(E.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new xo(r.options.projectId)}(e))}get app(){if(!this._app)throw new C(E.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new C(E.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new SS(e),e.credentials!==void 0&&(this._credentials=function(n){if(!n)return new YO;switch(n.type){case"gapi":const r=n.client;return H(!(typeof r!="object"||r===null||!r.auth||!r.auth.getAuthHeaderValueForFirstParty)),new eL(r,n.sessionIndex||"0",n.iamToken||null);case"provider":return n.client;default:throw new C(E.INVALID_ARGUMENT,"makeCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=wS.get(e);n&&(N("ComponentProvider","Removing Datastore"),wS.delete(e),n.terminate())}(this),Promise.resolve()}}function b$(t,e,n,r={}){var i;const s=(t=re(t,Bu))._getSettings();if(s.host!=="firestore.googleapis.com"&&s.host!==e&&yu("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},s),{host:`${e}:${n}`,ssl:!1})),r.mockUserToken){let o,a;if(typeof r.mockUserToken=="string")o=r.mockUserToken,a=ct.MOCK_USER;else{o=__(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new C(E.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new ct(u)}t._credentials=new XO(new dE(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new zn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new we(this.firestore,e,this._key)}}class Tt{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Tt(this.firestore,e,this._query)}}class zn extends Tt{constructor(e,n,r){super(e,n,ao(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new we(this.firestore,null,new z(e))}withConverter(e){return new zn(this.firestore,e,this._path)}}function kS(t,e,...n){if(t=B(t),py("collection","path",e),t instanceof Bu){const r=ie.fromString(e,...n);return ES(r),new zn(t,null,r)}{if(!(t instanceof we||t instanceof zn))throw new C(E.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ie.fromString(e,...n));return ES(r),new zn(t.firestore,null,r)}}function A$(t,e){if(t=re(t,Bu),py("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new C(E.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new Tt(t,null,function(n){return new ar(ie.emptyPath(),n)}(e))}function Qh(t,e,...n){if(t=B(t),arguments.length===1&&(e=fE.I()),py("doc","path",e),t instanceof Bu){const r=ie.fromString(e,...n);return IS(r),new we(t,null,new z(r))}{if(!(t instanceof we||t instanceof zn))throw new C(E.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ie.fromString(e,...n));return IS(r),new we(t.firestore,t instanceof zn?t.converter:null,new z(r))}}function CS(t,e){return t=B(t),e=B(e),(t instanceof we||t instanceof zn)&&(e instanceof we||e instanceof zn)&&t.firestore===e.firestore&&t.path===e.path&&t.converter===e.converter}function bS(t,e){return t=B(t),e=B(e),t instanceof Tt&&e instanceof Tt&&t.firestore===e.firestore&&Su(t._query,e._query)&&t.converter===e.converter}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R${constructor(){this.fa=Promise.resolve(),this.da=[],this.wa=!1,this._a=[],this.ma=null,this.ga=!1,this.ya=!1,this.pa=[],this.rr=new Gg(this,"async_queue_retry"),this.Ta=()=>{const n=jh();n&&N("AsyncQueue","Visibility state changed to "+n.visibilityState),this.rr.tr()};const e=jh();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Ta)}get isShuttingDown(){return this.wa}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Ea(),this.Ia(e)}enterRestrictedMode(e){if(!this.wa){this.wa=!0,this.ya=e||!1;const n=jh();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Ta)}}enqueue(e){if(this.Ea(),this.wa)return new Promise(()=>{});const n=new Ge;return this.Ia(()=>this.wa&&this.ya?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.da.push(e),this.Aa()))}async Aa(){if(this.da.length!==0){try{await this.da[0](),this.da.shift(),this.rr.reset()}catch(e){if(!Hi(e))throw e;N("AsyncQueue","Operation failed with retryable error: "+e)}this.da.length>0&&this.rr.Xi(()=>this.Aa())}}Ia(e){const n=this.fa.then(()=>(this.ga=!0,e().catch(r=>{this.ma=r,this.ga=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw De("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.ga=!1,r))));return this.fa=n,n}enqueueAfterDelay(e,n,r){this.Ea(),this.pa.indexOf(e)>-1&&(n=0);const i=Jg.createAndSchedule(this,e,n,r,s=>this.Ra(s));return this._a.push(i),i}Ea(){this.ma&&q()}verifyOperationInProgress(){}async ba(){let e;do e=this.fa,await e;while(e!==this.fa)}Pa(e){for(const n of this._a)if(n.timerId===e)return!0;return!1}va(e){return this.ba().then(()=>{this._a.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this._a)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.ba()})}Va(e){this.pa.push(e)}Ra(e){const n=this._a.indexOf(e);this._a.splice(n,1)}}function my(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const r=e;for(const i of n)if(i in r&&typeof r[i]=="function")return!0;return!1}(t,["next","error","complete"])}class N${constructor(){this._progressObserver={},this._taskCompletionResolver=new Ge,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,n,r){this._progressObserver={next:e,error:n,complete:r}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,n){return this._taskCompletionResolver.promise.then(e,n)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P$=-1;class Pe extends Bu{constructor(e,n){super(e,n),this.type="firestore",this._queue=new R$,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||AS(this),this._firestoreClient.terminate()}}function Je(t){return t._firestoreClient||AS(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function AS(t){var e;const n=t._freezeSettings(),r=function(i,s,o,a){return new C$(i,s,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new y$(t._credentials,t._queue,r)}function x$(t,e){NS(t=re(t,Pe));const n=Je(t),r=t._freezeSettings(),i=new cy;return RS(n,i,new hS(i,r.cacheSizeBytes,e==null?void 0:e.forceOwnership))}function D$(t){NS(t=re(t,Pe));const e=Je(t),n=t._freezeSettings(),r=new cy;return RS(e,r,new f$(r,n.cacheSizeBytes))}function RS(t,e,n){const r=new Ge;return t.asyncQueue.enqueue(async()=>{try{await fS(t,n),await pS(t,e),r.resolve()}catch(i){if(!function(s){return s.name==="FirebaseError"?s.code===E.FAILED_PRECONDITION||s.code===E.UNIMPLEMENTED:typeof DOMException!="undefined"&&s instanceof DOMException?s.code===22||s.code===20||s.code===11:!0}(i))throw i;console.warn("Error enabling offline persistence. Falling back to persistence disabled: "+i),r.reject(i)}}).then(()=>r.promise)}function O$(t){if(t._initialized&&!t._terminated)throw new C(E.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new Ge;return t._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(n){if(!kn.bt())return Promise.resolve();const r=n+"main";await kn.delete(r)}(Fg(t._databaseId,t._persistenceKey)),e.resolve()}catch(n){e.reject(n)}}),e.promise}function L$(t){return function(e){const n=new Ge;return e.asyncQueue.enqueueAndForget(async()=>t$(await fy(e),n)),n.promise}(Je(t=re(t,Pe)))}function M$(t){return v$(Je(t=re(t,Pe)))}function $$(t){return w$(Je(t=re(t,Pe)))}function U$(t,e){const n=Je(t=re(t,Pe)),r=new N$;return S$(n,t._databaseId,e,r),r}function F$(t,e){return k$(Je(t=re(t,Pe)),e).then(n=>n?new Tt(t,null,n.query):null)}function NS(t){if(t._initialized||t._terminated)throw new C(E.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class ii{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new C(E.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ht(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Qi{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yh{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new C(E.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new C(E.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return J(this._lat,e._lat)||J(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V$=/^__.*__$/;class B${constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Yr(e,this.data,this.fieldMask,n,this.fieldTransforms):new bu(e,this.data,n,this.fieldTransforms)}}class PS{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Yr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function xS(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw q()}}class Xh{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.N=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Sa(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Da(){return this.settings.Da}Ca(e){return new Xh(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.N,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Na(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Ca({path:r,xa:!1});return i.ka(e),i}$a(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Ca({path:r,xa:!1});return i.Sa(),i}Oa(e){return this.Ca({path:void 0,xa:!0})}Fa(e){return Zh(e,this.settings.methodName,this.settings.Ma||!1,this.path,this.settings.La)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Sa(){if(this.path)for(let e=0;e<this.path.length;e++)this.ka(this.path.get(e))}ka(e){if(e.length===0)throw this.Fa("Document fields must not be empty");if(xS(this.Da)&&V$.test(e))throw this.Fa('Document fields cannot begin and end with "__"')}}class z${constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.N=r||Uu(e)}Ba(e,n,r,i=!1){return new Xh({Da:e,methodName:n,La:r,path:ht.emptyPath(),xa:!1,Ma:i},this.databaseId,this.N,this.ignoreUndefinedProperties)}}function Yi(t){const e=t._freezeSettings(),n=Uu(t._databaseId);return new z$(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Jh(t,e,n,r,i,s={}){const o=t.Ba(s.merge||s.mergeFields?2:0,e,n,i);wy("Data must be an object, but it was:",o,r);const a=LS(r,o);let u,l;if(s.merge)u=new ro(o.fieldMask),l=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const h of s.mergeFields){const d=_y(e,h,n);if(!o.contains(d))throw new C(E.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);$S(c,d)||c.push(d)}u=new ro(c),l=o.fieldTransforms.filter(h=>u.covers(h.field))}else u=null,l=o.fieldTransforms;return new B$(new It(a),u,l)}class zu extends Qi{_toFieldTransform(e){if(e.Da!==2)throw e.Da===1?e.Fa(`${this._methodName}() can only appear at the top level of your update data`):e.Fa(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof zu}}function DS(t,e,n){return new Xh({Da:3,La:e.settings.La,methodName:t._methodName,xa:n},e.databaseId,e.N,e.ignoreUndefinedProperties)}class gy extends Qi{_toFieldTransform(e){return new Cu(e.path,new lo)}isEqual(e){return e instanceof gy}}class j$ extends Qi{constructor(e,n){super(e),this.Ua=n}_toFieldTransform(e){const n=DS(this,e,!0),r=this.Ua.map(s=>Xi(s,n)),i=new zi(r);return new Cu(e.path,i)}isEqual(e){return this===e}}class q$ extends Qi{constructor(e,n){super(e),this.Ua=n}_toFieldTransform(e){const n=DS(this,e,!0),r=this.Ua.map(s=>Xi(s,n)),i=new ji(r);return new Cu(e.path,i)}isEqual(e){return this===e}}class H$ extends Qi{constructor(e,n){super(e),this.qa=n}_toFieldTransform(e){const n=new co(e.N,DE(e.N,this.qa));return new Cu(e.path,n)}isEqual(e){return this===e}}function yy(t,e,n,r){const i=t.Ba(1,e,n);wy("Data must be an object, but it was:",i,r);const s=[],o=It.empty();Fi(r,(u,l)=>{const c=Iy(e,u,n);l=B(l);const h=i.$a(c);if(l instanceof zu)s.push(c);else{const d=Xi(l,h);d!=null&&(s.push(c),o.set(c,d))}});const a=new ro(s);return new PS(o,a,i.fieldTransforms)}function vy(t,e,n,r,i,s){const o=t.Ba(1,e,n),a=[_y(e,r,n)],u=[i];if(s.length%2!=0)throw new C(E.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push(_y(e,s[d])),u.push(s[d+1]);const l=[],c=It.empty();for(let d=a.length-1;d>=0;--d)if(!$S(l,a[d])){const g=a[d];let y=u[d];y=B(y);const _=o.$a(g);if(y instanceof zu)l.push(g);else{const f=Xi(y,_);f!=null&&(l.push(g),c.set(g,f))}}const h=new ro(l);return new PS(c,h,o.fieldTransforms)}function OS(t,e,n,r=!1){return Xi(n,t.Ba(r?4:3,e))}function Xi(t,e){if(MS(t=B(t)))return wy("Unsupported field value:",e,t),LS(t,e);if(t instanceof Qi)return function(n,r){if(!xS(r.Da))throw r.Fa(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.Fa(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xa&&e.Da!==4)throw e.Fa("Nested arrays are not supported");return function(n,r){const i=[];let s=0;for(const o of n){let a=Xi(o,r.Oa(s));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),s++}return{arrayValue:{values:i}}}(t,e)}return function(n,r){if((n=B(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return DE(r.N,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=Ke.fromDate(n);return{timestampValue:Pu(r.N,i)}}if(n instanceof Ke){const i=new Ke(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Pu(r.N,i)}}if(n instanceof Yh)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof jn)return{bytesValue:ZE(r.N,n._byteString)};if(n instanceof we){const i=r.databaseId,s=n.firestore._databaseId;if(!s.isEqual(i))throw r.Fa(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:bg(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r.Fa(`Unsupported field value: ${Kh(n)}`)}(t,e)}function LS(t,e){const n={};return gE(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Fi(t,(r,i)=>{const s=Xi(i,e.Na(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function MS(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ke||t instanceof Yh||t instanceof jn||t instanceof we||t instanceof Qi)}function wy(t,e,n){if(!MS(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=Kh(n);throw r==="an object"?e.Fa(t+" a custom object"):e.Fa(t+" "+r)}}function _y(t,e,n){if((e=B(e))instanceof ii)return e._internalPath;if(typeof e=="string")return Iy(t,e);throw Zh("Field path arguments must be of type string or FieldPath.",t,!1,void 0,n)}const W$=new RegExp("[~\\*/\\[\\]]");function Iy(t,e,n){if(e.search(W$)>=0)throw Zh(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new ii(...e.split("."))._internalPath}catch{throw Zh(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Zh(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new C(E.INVALID_ARGUMENT,a+t+u)}function $S(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ju{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new we(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new G$(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(ed("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class G$ extends ju{data(){return super.data()}}function ed(t,e){return typeof e=="string"?Iy(t,e):e instanceof ii?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ji{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class hr extends ju{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new qu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(ed("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class qu extends hr{data(e={}){return super.data(e)}}class si{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Ji(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new qu(this._firestore,this._userDataWriter,r.key,r,new Ji(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new C(E.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let s=0;return r._snapshot.docChanges.map(o=>({type:"added",doc:new qu(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Ji(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter),oldIndex:-1,newIndex:s++}))}{let s=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new qu(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Ji(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let u=-1,l=-1;return o.type!==0&&(u=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),l=s.indexOf(o.doc.key)),{type:K$(o.type),doc:a,oldIndex:u,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function K$(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return q()}}function US(t,e){return t instanceof hr&&e instanceof hr?t._firestore===e._firestore&&t._key.isEqual(e._key)&&(t._document===null?e._document===null:t._document.isEqual(e._document))&&t._converter===e._converter:t instanceof si&&e instanceof si&&t._firestore===e._firestore&&bS(t.query,e.query)&&t.metadata.isEqual(e.metadata)&&t._snapshot.isEqual(e._snapshot)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FS(t){if(bh(t)&&t.explicitOrderBy.length===0)throw new C(E.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Hu{}function oi(t,...e){for(const n of e)t=n._apply(t);return t}class Q$ extends Hu{constructor(e,n,r){super(),this.Ka=e,this.ja=n,this.Qa=r,this.type="where"}_apply(e){const n=Yi(e.firestore),r=function(i,s,o,a,u,l,c){let h;if(u.isKeyField()){if(l==="array-contains"||l==="array-contains-any")throw new C(E.INVALID_ARGUMENT,`Invalid Query. You can't perform '${l}' queries on FieldPath.documentId().`);if(l==="in"||l==="not-in"){HS(c,l);const g=[];for(const y of c)g.push(qS(a,i,y));h={arrayValue:{values:g}}}else h=qS(a,i,c)}else l!=="in"&&l!=="not-in"&&l!=="array-contains-any"||HS(c,l),h=OS(o,s,c,l==="in"||l==="not-in");const d=xt.create(u,l,h);return function(g,y){if(y.v()){const f=Ig(g);if(f!==null&&!f.isEqual(y.field))throw new C(E.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${f.toString()}' and '${y.field.toString()}'`);const p=_g(g);p!==null&&WS(g,y.field,p)}const _=function(f,p){for(const m of f.filters)if(p.indexOf(m.op)>=0)return m.op;return null}(g,function(f){switch(f){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(y.op));if(_!==null)throw _===y.op?new C(E.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${y.op.toString()}' filter.`):new C(E.INVALID_ARGUMENT,`Invalid query. You cannot use '${y.op.toString()}' filters with '${_.toString()}' filters.`)}(i,d),d}(e._query,"where",n,e.firestore._databaseId,this.Ka,this.ja,this.Qa);return new Tt(e.firestore,e.converter,function(i,s){const o=i.filters.concat([s]);return new ar(i.path,i.collectionGroup,i.explicitOrderBy.slice(),o,i.limit,i.limitType,i.startAt,i.endAt)}(e._query,r))}}function Y$(t,e,n){const r=e,i=ed("where",t);return new Q$(i,r,n)}class X$ extends Hu{constructor(e,n){super(),this.Ka=e,this.Wa=n,this.type="orderBy"}_apply(e){const n=function(r,i,s){if(r.startAt!==null)throw new C(E.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new C(E.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new oo(i,s);return function(a,u){if(_g(a)===null){const l=Ig(a);l!==null&&WS(a,l,u.field)}}(r,o),o}(e._query,this.Ka,this.Wa);return new Tt(e.firestore,e.converter,function(r,i){const s=r.explicitOrderBy.concat([i]);return new ar(r.path,r.collectionGroup,s,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}(e._query,n))}}function J$(t,e="asc"){const n=e,r=ed("orderBy",t);return new X$(r,n)}class VS extends Hu{constructor(e,n,r){super(),this.type=e,this.Ga=n,this.za=r}_apply(e){return new Tt(e.firestore,e.converter,AE(e._query,this.Ga,this.za))}}function Z$(t){return TS("limit",t),new VS("limit",t,"F")}function e2(t){return TS("limitToLast",t),new VS("limitToLast",t,"L")}class BS extends Hu{constructor(e,n,r){super(),this.type=e,this.Ha=n,this.Ja=r}_apply(e){const n=jS(e,this.type,this.Ha,this.Ja);return new Tt(e.firestore,e.converter,function(r,i){return new ar(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),r.limit,r.limitType,i,r.endAt)}(e._query,n))}}function t2(...t){return new BS("startAt",t,!0)}function n2(...t){return new BS("startAfter",t,!1)}class zS extends Hu{constructor(e,n,r){super(),this.type=e,this.Ha=n,this.Ja=r}_apply(e){const n=jS(e,this.type,this.Ha,this.Ja);return new Tt(e.firestore,e.converter,function(r,i){return new ar(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),r.limit,r.limitType,r.startAt,i)}(e._query,n))}}function r2(...t){return new zS("endBefore",t,!0)}function i2(...t){return new zS("endAt",t,!1)}function jS(t,e,n,r){if(n[0]=B(n[0]),n[0]instanceof ju)return function(i,s,o,a,u){if(!a)throw new C(E.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${o}().`);const l=[];for(const c of uo(i))if(c.field.isKeyField())l.push(Ih(s,a.key));else{const h=a.data.field(c.field);if(mg(h))throw new C(E.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+c.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(h===null){const d=c.field.canonicalString();throw new C(E.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${d}' (used as the orderBy) does not exist.`)}l.push(h)}return new Tu(l,u)}(t._query,t.firestore._databaseId,e,n[0]._document,r);{const i=Yi(t.firestore);return function(s,o,a,u,l,c){const h=s.explicitOrderBy;if(l.length>h.length)throw new C(E.INVALID_ARGUMENT,`Too many arguments provided to ${u}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const d=[];for(let g=0;g<l.length;g++){const y=l[g];if(h[g].field.isKeyField()){if(typeof y!="string")throw new C(E.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${u}(), but got a ${typeof y}`);if(!Eg(s)&&y.indexOf("/")!==-1)throw new C(E.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by FieldPath.documentId(), the value passed to ${u}() must be a plain document ID, but '${y}' contains a slash.`);const _=s.path.child(ie.fromString(y));if(!z.isDocumentKey(_))throw new C(E.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by FieldPath.documentId(), the value passed to ${u}() must result in a valid document path, but '${_}' is not because it contains an odd number of segments.`);const f=new z(_);d.push(Ih(o,f))}else{const _=OS(a,u,y);d.push(_)}}return new Tu(d,c)}(t._query,t.firestore._databaseId,i,e,n,r)}}function qS(t,e,n){if(typeof(n=B(n))=="string"){if(n==="")throw new C(E.INVALID_ARGUMENT,"Invalid query. When querying with FieldPath.documentId(), you must provide a valid document ID, but it was an empty string.");if(!Eg(e)&&n.indexOf("/")!==-1)throw new C(E.INVALID_ARGUMENT,`Invalid query. When querying a collection by FieldPath.documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(ie.fromString(n));if(!z.isDocumentKey(r))throw new C(E.INVALID_ARGUMENT,`Invalid query. When querying a collection group by FieldPath.documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Ih(t,new z(r))}if(n instanceof we)return Ih(t,n._key);throw new C(E.INVALID_ARGUMENT,`Invalid query. When querying with FieldPath.documentId(), you must provide a valid string or a DocumentReference, but it was: ${Kh(n)}.`)}function HS(t,e){if(!Array.isArray(t)||t.length===0)throw new C(E.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(t.length>10)throw new C(E.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function WS(t,e,n){if(!n.isEqual(e))throw new C(E.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ey{convertValue(e,n="none"){switch(Bi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Oe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(io(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw q()}}convertObject(e,n){const r={};return Fi(e.fields,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new Yh(Oe(e.latitude),Oe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=yE(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(wu(e));default:return null}}convertTimestamp(e){const n=Qr(e);return new Ke(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ie.fromString(e);H(dT(r));const i=new xo(r.get(1),r.get(3)),s=new z(r.popFirst(5));return i.isEqual(n)||De(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function td(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class s2 extends Ey{constructor(e){super(),this.firestore=e}convertBytes(e){return new jn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new we(this.firestore,null,n)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o2{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=Yi(e)}set(e,n,r){this._verifyNotCommitted();const i=ai(e,this._firestore),s=td(i.converter,n,r),o=Jh(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(o.toMutation(i._key,Le.none())),this}update(e,n,r,...i){this._verifyNotCommitted();const s=ai(e,this._firestore);let o;return o=typeof(n=B(n))=="string"||n instanceof ii?vy(this._dataReader,"WriteBatch.update",s._key,n,r,i):yy(this._dataReader,"WriteBatch.update",s._key,n),this._mutations.push(o.toMutation(s._key,Le.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=ai(e,this._firestore);return this._mutations=this._mutations.concat(new Au(n._key,Le.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new C(E.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function ai(t,e){if((t=B(t)).firestore!==e)throw new C(E.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function a2(t){t=re(t,we);const e=re(t.firestore,Pe);return yS(Je(e),t._key).then(n=>Ty(e,t,n))}class Zi extends Ey{constructor(e){super(),this.firestore=e}convertBytes(e){return new jn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new we(this.firestore,null,n)}}function u2(t){t=re(t,we);const e=re(t.firestore,Pe),n=Je(e),r=new Zi(e);return _$(n,t._key).then(i=>new hr(e,r,t._key,i,new Ji(i!==null&&i.hasLocalMutations,!0),t.converter))}function l2(t){t=re(t,we);const e=re(t.firestore,Pe);return yS(Je(e),t._key,{source:"server"}).then(n=>Ty(e,t,n))}function c2(t){t=re(t,Tt);const e=re(t.firestore,Pe),n=Je(e),r=new Zi(e);return FS(t._query),vS(n,t._query).then(i=>new si(e,r,t,i))}function h2(t){t=re(t,Tt);const e=re(t.firestore,Pe),n=Je(e),r=new Zi(e);return I$(n,t._query).then(i=>new si(e,r,t,i))}function d2(t){t=re(t,Tt);const e=re(t.firestore,Pe),n=Je(e),r=new Zi(e);return vS(n,t._query,{source:"server"}).then(i=>new si(e,r,t,i))}function GS(t,e,n){t=re(t,we);const r=re(t.firestore,Pe),i=td(t.converter,e,n);return Wu(r,[Jh(Yi(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Le.none())])}function KS(t,e,n,...r){t=re(t,we);const i=re(t.firestore,Pe),s=Yi(i);let o;return o=typeof(e=B(e))=="string"||e instanceof ii?vy(s,"updateDoc",t._key,e,n,r):yy(s,"updateDoc",t._key,e),Wu(i,[o.toMutation(t._key,Le.exists(!0))])}function f2(t){return Wu(re(t.firestore,Pe),[new Au(t._key,Le.none())])}function p2(t,e){const n=re(t.firestore,Pe),r=Qh(t),i=td(t.converter,e);return Wu(n,[Jh(Yi(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Le.exists(!1))]).then(()=>r)}function QS(t,...e){var n,r,i;t=B(t);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||my(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(my(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let u,l,c;if(t instanceof we)l=re(t.firestore,Pe),c=ao(t._key.path),u={next:h=>{e[o]&&e[o](Ty(l,t,h))},error:e[o+1],complete:e[o+2]};else{const h=re(t,Tt);l=re(h.firestore,Pe),c=h._query;const d=new Zi(l);u={next:g=>{e[o]&&e[o](new si(l,d,h,g))},error:e[o+1],complete:e[o+2]},FS(t._query)}return function(h,d,g,y){const _=new Wh(y),f=new ny(d,_,g);return h.asyncQueue.enqueueAndForget(async()=>Zg(await Po(h),f)),()=>{_.Xo(),h.asyncQueue.enqueueAndForget(async()=>ey(await Po(h),f))}}(Je(l),c,a,u)}function m2(t,e){return E$(Je(t=re(t,Pe)),my(e)?e:{next:e})}function Wu(t,e){return function(n,r){const i=new Ge;return n.asyncQueue.enqueueAndForget(async()=>XM(await fy(n),r,i)),i.promise}(Je(t),e)}function Ty(t,e,n){const r=n.docs.get(e._key),i=new Zi(t);return new hr(t,i,e._key,r,new Ji(n.hasPendingWrites,n.fromCache),e.converter)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g2 extends class{constructor(e,n){this._firestore=e,this._transaction=n,this._dataReader=Yi(e)}get(e){const n=ai(e,this._firestore),r=new s2(this._firestore);return this._transaction.lookup([n._key]).then(i=>{if(!i||i.length!==1)return q();const s=i[0];if(s.isFoundDocument())return new ju(this._firestore,r,s.key,s,n.converter);if(s.isNoDocument())return new ju(this._firestore,r,n._key,null,n.converter);throw q()})}set(e,n,r){const i=ai(e,this._firestore),s=td(i.converter,n,r),o=Jh(this._dataReader,"Transaction.set",i._key,s,i.converter!==null,r);return this._transaction.set(i._key,o),this}update(e,n,r,...i){const s=ai(e,this._firestore);let o;return o=typeof(n=B(n))=="string"||n instanceof ii?vy(this._dataReader,"Transaction.update",s._key,n,r,i):yy(this._dataReader,"Transaction.update",s._key,n),this._transaction.update(s._key,o),this}delete(e){const n=ai(e,this._firestore);return this._transaction.delete(n._key),this}}{constructor(e,n){super(e,n),this._firestore=e}get(e){const n=ai(e,this._firestore),r=new Zi(this._firestore);return super.get(e).then(i=>new hr(this._firestore,r,n._key,i._document,new Ji(!1,!1),n.converter))}}function y2(t,e){return T$(Je(t),n=>e(new g2(t,n)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v2(){return new zu("deleteField")}function w2(){return new gy("serverTimestamp")}function _2(...t){return new j$("arrayUnion",t)}function I2(...t){return new q$("arrayRemove",t)}function E2(t){return new H$("increment",t)}var T2;(function(t){to=t})(Br),Vr(new In("firestore",(t,{options:e})=>{const n=t.getProvider("app").getImmediate(),r=new Pe(n,new JO(t.getProvider("auth-internal")));return e=Object.assign({useFetchStreams:!0},e),r._setSettings(e),r},"PUBLIC")),ln(hE,"3.1.1",T2),ln(hE,"3.1.1","esm2017");const S2="@firebase/firestore-compat",k2="0.1.4";/**
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
 */function Sy(t,e){if(e===void 0)return{merge:!1};if(e.mergeFields!==void 0&&e.merge!==void 0)throw new C("invalid-argument",`Invalid options passed to function ${t}(): You cannot specify both "merge" and "mergeFields".`);return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YS(){if(typeof Uint8Array=="undefined")throw new C("unimplemented","Uint8Arrays are not available in this environment.")}function XS(){if(!rL())throw new C("unimplemented","Blobs are unavailable in Firestore in this environment.")}class Gu{constructor(e){this._delegate=e}static fromBase64String(e){return XS(),new Gu(jn.fromBase64String(e))}static fromUint8Array(e){return YS(),new Gu(jn.fromUint8Array(e))}toBase64(){return XS(),this._delegate.toBase64()}toUint8Array(){return YS(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ky(t){return C2(t,["next","error","complete"])}function C2(t,e){if(typeof t!="object"||t===null)return!1;const n=t;for(const r of e)if(r in n&&typeof n[r]=="function")return!0;return!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b2{enableIndexedDbPersistence(e,n){return x$(e._delegate,{forceOwnership:n})}enableMultiTabIndexedDbPersistence(e){return D$(e._delegate)}clearIndexedDbPersistence(e){return O$(e._delegate)}}class JS{constructor(e,n,r){this._delegate=n,this._persistenceProvider=r,this.INTERNAL={delete:()=>this.terminate()},e instanceof xo||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const n=this._delegate._getSettings();!e.merge&&n.host!==e.host&&yu("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},n),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,n,r={}){b$(this._delegate,e,n,r)}enableNetwork(){return M$(this._delegate)}disableNetwork(){return $$(this._delegate)}enablePersistence(e){let n=!1,r=!1;return e&&(n=!!e.synchronizeTabs,r=!!e.experimentalForceOwningTab,_S("synchronizeTabs",n,"experimentalForceOwningTab",r)),n?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,r)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return L$(this._delegate)}onSnapshotsInSync(e){return m2(this._delegate,e)}get app(){if(!this._appCompat)throw new C("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new Do(this,kS(this._delegate,e))}catch(n){throw Dt(n,"collection()","Firestore.collection()")}}doc(e){try{return new fn(this,Qh(this._delegate,e))}catch(n){throw Dt(n,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new Ot(this,A$(this._delegate,e))}catch(n){throw Dt(n,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return y2(this._delegate,n=>e(new ZS(this,n)))}batch(){return Je(this._delegate),new ek(new o2(this._delegate,e=>Wu(this._delegate,e)))}loadBundle(e){return U$(this._delegate,e)}namedQuery(e){return F$(this._delegate,e).then(n=>n?new Ot(this,n):null)}}class nd extends Ey{constructor(e){super();this.firestore=e}convertBytes(e){return new Gu(new jn(e))}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return fn.forKey(n,this.firestore,null)}}function A2(t){KO(t)}class ZS{constructor(e,n){this._firestore=e,this._delegate=n,this._userDataWriter=new nd(e)}get(e){const n=ts(e);return this._delegate.get(n).then(r=>new Ku(this._firestore,new hr(this._firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,n.converter)))}set(e,n,r){const i=ts(e);return r?(Sy("Transaction.set",r),this._delegate.set(i,n,r)):this._delegate.set(i,n),this}update(e,n,r,...i){const s=ts(e);return arguments.length===2?this._delegate.update(s,n):this._delegate.update(s,n,r,...i),this}delete(e){const n=ts(e);return this._delegate.delete(n),this}}class ek{constructor(e){this._delegate=e}set(e,n,r){const i=ts(e);return r?(Sy("WriteBatch.set",r),this._delegate.set(i,n,r)):this._delegate.set(i,n),this}update(e,n,r,...i){const s=ts(e);return arguments.length===2?this._delegate.update(s,n):this._delegate.update(s,n,r,...i),this}delete(e){const n=ts(e);return this._delegate.delete(n),this}commit(){return this._delegate.commit()}}class es{constructor(e,n,r){this._firestore=e,this._userDataWriter=n,this._delegate=r}fromFirestore(e,n){const r=new qu(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new Qu(this._firestore,r),n!=null?n:{})}toFirestore(e,n){return n?this._delegate.toFirestore(e,n):this._delegate.toFirestore(e)}static getInstance(e,n){const r=es.INSTANCES;let i=r.get(e);i||(i=new WeakMap,r.set(e,i));let s=i.get(n);return s||(s=new es(e,new nd(e),n),i.set(n,s)),s}}es.INSTANCES=new WeakMap;class fn{constructor(e,n){this.firestore=e,this._delegate=n,this._userDataWriter=new nd(e)}static forPath(e,n,r){if(e.length%2!=0)throw new C("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new fn(n,new we(n._delegate,r,new z(e)))}static forKey(e,n,r){return new fn(n,new we(n._delegate,r,e))}get id(){return this._delegate.id}get parent(){return new Do(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new Do(this.firestore,kS(this._delegate,e))}catch(n){throw Dt(n,"collection()","DocumentReference.collection()")}}isEqual(e){return e=B(e),e instanceof we?CS(this._delegate,e):!1}set(e,n){n=Sy("DocumentReference.set",n);try{return n?GS(this._delegate,e,n):GS(this._delegate,e)}catch(r){throw Dt(r,"setDoc()","DocumentReference.set()")}}update(e,n,...r){try{return arguments.length===1?KS(this._delegate,e):KS(this._delegate,e,n,...r)}catch(i){throw Dt(i,"updateDoc()","DocumentReference.update()")}}delete(){return f2(this._delegate)}onSnapshot(...e){const n=tk(e),r=nk(e,i=>new Ku(this.firestore,new hr(this.firestore._delegate,this._userDataWriter,i._key,i._document,i.metadata,this._delegate.converter)));return QS(this._delegate,n,r)}get(e){let n;return(e==null?void 0:e.source)==="cache"?n=u2(this._delegate):(e==null?void 0:e.source)==="server"?n=l2(this._delegate):n=a2(this._delegate),n.then(r=>new Ku(this.firestore,new hr(this.firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,this._delegate.converter)))}withConverter(e){return new fn(this.firestore,e?this._delegate.withConverter(es.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function Dt(t,e,n){return t.message=t.message.replace(e,n),t}function tk(t){for(const e of t)if(typeof e=="object"&&!ky(e))return e;return{}}function nk(t,e){var n,r;let i;return ky(t[0])?i=t[0]:ky(t[1])?i=t[1]:typeof t[0]=="function"?i={next:t[0],error:t[1],complete:t[2]}:i={next:t[1],error:t[2],complete:t[3]},{next:s=>{i.next&&i.next(e(s))},error:(n=i.error)===null||n===void 0?void 0:n.bind(i),complete:(r=i.complete)===null||r===void 0?void 0:r.bind(i)}}class Ku{constructor(e,n){this._firestore=e,this._delegate=n}get ref(){return new fn(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,n){return this._delegate.get(e,n)}isEqual(e){return US(this._delegate,e._delegate)}}class Qu extends Ku{data(e){const n=this._delegate.data(e);return QO(n!==void 0),n}}class Ot{constructor(e,n){this.firestore=e,this._delegate=n,this._userDataWriter=new nd(e)}where(e,n,r){try{return new Ot(this.firestore,oi(this._delegate,Y$(e,n,r)))}catch(i){throw Dt(i,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,n){try{return new Ot(this.firestore,oi(this._delegate,J$(e,n)))}catch(r){throw Dt(r,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new Ot(this.firestore,oi(this._delegate,Z$(e)))}catch(n){throw Dt(n,"limit()","Query.limit()")}}limitToLast(e){try{return new Ot(this.firestore,oi(this._delegate,e2(e)))}catch(n){throw Dt(n,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new Ot(this.firestore,oi(this._delegate,t2(...e)))}catch(n){throw Dt(n,"startAt()","Query.startAt()")}}startAfter(...e){try{return new Ot(this.firestore,oi(this._delegate,n2(...e)))}catch(n){throw Dt(n,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new Ot(this.firestore,oi(this._delegate,r2(...e)))}catch(n){throw Dt(n,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new Ot(this.firestore,oi(this._delegate,i2(...e)))}catch(n){throw Dt(n,"endAt()","Query.endAt()")}}isEqual(e){return bS(this._delegate,e._delegate)}get(e){let n;return(e==null?void 0:e.source)==="cache"?n=h2(this._delegate):(e==null?void 0:e.source)==="server"?n=d2(this._delegate):n=c2(this._delegate),n.then(r=>new Cy(this.firestore,new si(this.firestore._delegate,this._userDataWriter,this._delegate,r._snapshot)))}onSnapshot(...e){const n=tk(e),r=nk(e,i=>new Cy(this.firestore,new si(this.firestore._delegate,this._userDataWriter,this._delegate,i._snapshot)));return QS(this._delegate,n,r)}withConverter(e){return new Ot(this.firestore,e?this._delegate.withConverter(es.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class R2{constructor(e,n){this._firestore=e,this._delegate=n}get type(){return this._delegate.type}get doc(){return new Qu(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class Cy{constructor(e,n){this._firestore=e,this._delegate=n}get query(){return new Ot(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new Qu(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(n=>new R2(this._firestore,n))}forEach(e,n){this._delegate.forEach(r=>{e.call(n,new Qu(this._firestore,r))})}isEqual(e){return US(this._delegate,e._delegate)}}class Do extends Ot{constructor(e,n){super(e,n);this.firestore=e,this._delegate=n}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new fn(this.firestore,e):null}doc(e){try{return e===void 0?new fn(this.firestore,Qh(this._delegate)):new fn(this.firestore,Qh(this._delegate,e))}catch(n){throw Dt(n,"doc()","CollectionReference.doc()")}}add(e){return p2(this._delegate,e).then(n=>new fn(this.firestore,n))}isEqual(e){return CS(this._delegate,e._delegate)}withConverter(e){return new Do(this.firestore,e?this._delegate.withConverter(es.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function ts(t){return re(t,we)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class by{constructor(...e){this._delegate=new ii(...e)}static documentId(){return new by(ht.keyField().canonicalString())}isEqual(e){return e=B(e),e instanceof ii?this._delegate._internalPath.isEqual(e._internalPath):!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns{constructor(e){this._delegate=e}static serverTimestamp(){const e=w2();return e._methodName="FieldValue.serverTimestamp",new ns(e)}static delete(){const e=v2();return e._methodName="FieldValue.delete",new ns(e)}static arrayUnion(...e){const n=_2(...e);return n._methodName="FieldValue.arrayUnion",new ns(n)}static arrayRemove(...e){const n=I2(...e);return n._methodName="FieldValue.arrayRemove",new ns(n)}static increment(e){const n=E2(e);return n._methodName="FieldValue.increment",new ns(n)}isEqual(e){return this._delegate.isEqual(e._delegate)}}/**
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
 */const N2={Firestore:JS,GeoPoint:Yh,Timestamp:Ke,Blob:Gu,Transaction:ZS,WriteBatch:ek,DocumentReference:fn,DocumentSnapshot:Ku,Query:Ot,QueryDocumentSnapshot:Qu,QuerySnapshot:Cy,CollectionReference:Do,FieldPath:by,FieldValue:ns,setLogLevel:A2,CACHE_SIZE_UNLIMITED:P$};function P2(t,e){t.INTERNAL.registerComponent(new In("firestore-compat",n=>{const r=n.getProvider("app-compat").getImmediate(),i=n.getProvider("firestore").getImmediate();return e(r,i)},"PUBLIC").setServiceProps(Object.assign({},N2)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x2(t){P2(t,(e,n)=>new JS(e,n,new b2)),t.registerVersion(S2,k2)}x2(Bs);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var rs;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(rs||(rs={}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rk="firebasestorage.googleapis.com",ik="storageBucket",D2=2*60*1e3,O2=10*60*1e3;class Ae extends Qt{constructor(e,n){super(Ay(e),`Firebase Storage: ${n} (${Ay(e)})`);this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Ae.prototype)}_codeEquals(e){return Ay(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}function Ay(t){return"storage/"+t}function Ry(){const t="An unknown error occurred, please check the error payload for server response.";return new Ae("unknown",t)}function L2(t){return new Ae("object-not-found","Object '"+t+"' does not exist.")}function M2(t){return new Ae("quota-exceeded","Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function $2(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Ae("unauthenticated",t)}function U2(){return new Ae("unauthorized-app","This app does not have permission to access Firebase Storage on this project.")}function F2(t){return new Ae("unauthorized","User does not have permission to access '"+t+"'.")}function V2(){return new Ae("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function sk(){return new Ae("canceled","User canceled the upload/download.")}function B2(t){return new Ae("invalid-url","Invalid URL '"+t+"'.")}function z2(t){return new Ae("invalid-default-bucket","Invalid default bucket '"+t+"'.")}function j2(){return new Ae("no-default-bucket","No default bucket found. Did you set the '"+ik+"' property when initializing the app?")}function ok(){return new Ae("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.")}function q2(){return new Ae("server-file-wrong-size","Server recorded incorrect upload file size, please retry the upload.")}function H2(){return new Ae("no-download-url","The given file does not have any download URLs.")}function Oo(t){return new Ae("invalid-argument",t)}function ak(){return new Ae("app-deleted","The Firebase app was deleted.")}function uk(t){return new Ae("invalid-root-operation","The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Yu(t,e){return new Ae("invalid-format","String does not match format '"+t+"': "+e)}function rd(t){throw new Ae("internal-error","Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W2{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.errorCode_=rs.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=rs.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=rs.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw rd("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw rd("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw rd("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponseText(){if(!this.sent_)throw rd("cannot .getResponseText() before sending");return this.xhr_.responseText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}function G2(){return new W2}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K2{createConnection(){return G2()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=St.makeFromUrl(e,n)}catch{return new St(e,"")}if(r.path==="")return r;throw z2(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(v){v.path.charAt(v.path.length-1)==="/"&&(v.path_=v.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),u={bucket:1,path:3};function l(v){v.path_=decodeURIComponent(v.path)}const c="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",g=new RegExp(`^https?://${h}/${c}/b/${i}/o${d}`,"i"),y={bucket:1,path:3},_=n===rk?"(?:storage.googleapis.com|storage.cloud.google.com)":n,f="([^?#]*)",p=new RegExp(`^https?://${_}/${i}/${f}`,"i"),w=[{regex:a,indices:u,postModify:s},{regex:g,indices:y,postModify:l},{regex:p,indices:{bucket:1,path:2},postModify:l}];for(let v=0;v<w.length;v++){const P=w[v],b=P.regex.exec(e);if(b){const V=b[P.indices.bucket];let F=b[P.indices.path];F||(F=""),r=new St(V,F),P.postModify(r);break}}if(r==null)throw B2(e);return r}}class Q2{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y2(t,e,n){let r=1,i=null,s=!1,o=0;function a(){return o===2}let u=!1;function l(...y){u||(u=!0,e.apply(null,y))}function c(y){i=setTimeout(()=>{i=null,t(h,a())},y)}function h(y,..._){if(u)return;if(y){l.call(null,y,..._);return}if(a()||s){l.call(null,y,..._);return}r<64&&(r*=2);let p;o===1?(o=2,p=0):p=(r+Math.random())*1e3,c(p)}let d=!1;function g(y){d||(d=!0,!u&&(i!==null?(y||(o=2),clearTimeout(i),c(0)):y||(o=1)))}return c(0),setTimeout(()=>{s=!0,g(!0)},n),g}function X2(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J2(t){return t!==void 0}function Z2(t){return typeof t=="function"}function eU(t){return typeof t=="object"&&!Array.isArray(t)}function id(t){return typeof t=="string"||t instanceof String}function lk(t){return Ny()&&t instanceof Blob}function Ny(){return typeof Blob!="undefined"}function Py(t,e,n,r){if(r<e)throw Oo(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Oo(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ui(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function ck(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tU{constructor(e,n,r,i,s,o,a,u,l,c,h){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=u,this.timeout_=l,this.progressCallback_=c,this.pool_=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((d,g)=>{this.resolve_=d,this.reject_=g,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new sd(!1,null,!0));return}const s=this.pool_.createConnection();this.pendingConnection_=s;const o=a=>{const u=a.loaded,l=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,l)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===rs.NO_ERROR,u=s.getStatus();if(!a||this.isRetryStatusCode_(u)){const c=s.getErrorCode()===rs.ABORT;r(!1,new sd(!1,null,c));return}const l=this.successCodes_.indexOf(u)!==-1;r(!0,new sd(l,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const u=this.callback_(a,a.getResponseText());J2(u)?s(u):s()}catch(u){o(u)}else if(a!==null){const u=Ry();u.serverResponse=a.getResponseText(),this.errorCallback_?o(this.errorCallback_(a,u)):o(u)}else if(i.canceled){const u=this.appDelete_?ak():sk();o(u)}else{const u=V2();o(u)}};this.canceled_?n(!1,new sd(!1,null,!0)):this.backoffId_=Y2(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&X2(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}isRetryStatusCode_(e){const n=e>=500&&e<600,i=[408,429].indexOf(e)!==-1,s=this.additionalRetryCodes_.indexOf(e)!==-1;return n||i||s}}class sd{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function nU(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function rU(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e!=null?e:"AppManager")}function iU(t,e){e&&(t["X-Firebase-GMPID"]=e)}function sU(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function oU(t,e,n,r,i,s){const o=ck(t.urlParams),a=t.url+o,u=Object.assign({},t.headers);return iU(u,e),nU(u,n),rU(u,s),sU(u,r),new tU(a,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aU(){return typeof BlobBuilder!="undefined"?BlobBuilder:typeof WebKitBlobBuilder!="undefined"?WebKitBlobBuilder:void 0}function uU(...t){const e=aU();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Ny())return new Blob(t);throw new Ae("unsupported-environment","This browser doesn't seem to support creating Blobs")}}function lU(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function cU(t){return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class xy{constructor(e,n){this.data=e,this.contentType=n||null}}function hk(t,e){switch(t){case pn.RAW:return new xy(dk(e));case pn.BASE64:case pn.BASE64URL:return new xy(fk(t,e));case pn.DATA_URL:return new xy(dU(e),fU(e))}throw Ry()}function dk(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)==55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)==56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)==56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function hU(t){let e;try{e=decodeURIComponent(t)}catch{throw Yu(pn.DATA_URL,"Malformed data URL.")}return dk(e)}function fk(t,e){switch(t){case pn.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw Yu(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case pn.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw Yu(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=cU(e)}catch{throw Yu(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class pk{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Yu(pn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=pU(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-";base64".length):r),this.rest=e.substring(e.indexOf(",")+1)}}function dU(t){const e=new pk(t);return e.base64?fk(pn.BASE64,e.rest):hU(e.rest)}function fU(t){return new pk(t).contentType}function pU(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr{constructor(e,n){let r=0,i="";lk(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(lk(this.data_)){const r=this.data_,i=lU(r,e,n);return i===null?null:new dr(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new dr(r,!0)}}static getBlob(...e){if(Ny()){const n=e.map(r=>r instanceof dr?r.data_:r);return new dr(uU.apply(null,n))}else{const n=e.map(o=>id(o)?hk(pn.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[s++]=o[a]}),new dr(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dy(t){let e;try{e=JSON.parse(t)}catch{return null}return eU(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mU(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function gU(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function mk(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yU(t,e){return e}class Lt{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||yU}}let od=null;function vU(t){return!id(t)||t.length<2?t:mk(t)}function ad(){if(od)return od;const t=[];t.push(new Lt("bucket")),t.push(new Lt("generation")),t.push(new Lt("metageneration")),t.push(new Lt("name","fullPath",!0));function e(s,o){return vU(o)}const n=new Lt("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new Lt("size");return i.xform=r,t.push(i),t.push(new Lt("timeCreated")),t.push(new Lt("updated")),t.push(new Lt("md5Hash",null,!0)),t.push(new Lt("cacheControl",null,!0)),t.push(new Lt("contentDisposition",null,!0)),t.push(new Lt("contentEncoding",null,!0)),t.push(new Lt("contentLanguage",null,!0)),t.push(new Lt("contentType",null,!0)),t.push(new Lt("metadata","customMetadata",!0)),od=t,od}function wU(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new St(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function _U(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return wU(r,t),r}function gk(t,e,n){const r=Dy(e);return r===null?null:_U(t,r,n)}function IU(t,e,n,r){const i=Dy(e);if(i===null||!id(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(l=>{const c=t.bucket,h=t.fullPath,d="/b/"+o(c)+"/o/"+o(h),g=ui(d,n,r),y=ck({alt:"media",token:l});return g+y})[0]}function Oy(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}/**
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
 */const yk="prefixes",vk="items";function EU(t,e,n){const r={prefixes:[],items:[],nextPageToken:n.nextPageToken};if(n[yk])for(const i of n[yk]){const s=i.replace(/\/$/,""),o=t._makeStorageReference(new St(e,s));r.prefixes.push(o)}if(n[vk])for(const i of n[vk]){const s=t._makeStorageReference(new St(e,i.name));r.items.push(s)}return r}function TU(t,e,n){const r=Dy(n);return r===null?null:EU(t,e,r)}class fr{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qn(t){if(!t)throw Ry()}function ud(t,e){function n(r,i){const s=gk(t,i,e);return qn(s!==null),s}return n}function SU(t,e){function n(r,i){const s=TU(t,e,i);return qn(s!==null),s}return n}function kU(t,e){function n(r,i){const s=gk(t,i,e);return qn(s!==null),IU(s,i,t.host,t._protocol)}return n}function Lo(t){function e(n,r){let i;return n.getStatus()===401?n.getResponseText().includes("Firebase App Check token is invalid")?i=U2():i=$2():n.getStatus()===402?i=M2(t.bucket):n.getStatus()===403?i=F2(t.path):i=r,i.serverResponse=r.serverResponse,i}return e}function ld(t){const e=Lo(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=L2(t.path)),s.serverResponse=i.serverResponse,s}return n}function wk(t,e,n){const r=e.fullServerUrl(),i=ui(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new fr(i,s,ud(t,n),o);return a.errorHandler=ld(e),a}function CU(t,e,n,r,i){const s={};e.isRoot?s.prefix="":s.prefix=e.path+"/",n&&n.length>0&&(s.delimiter=n),r&&(s.pageToken=r),i&&(s.maxResults=i);const o=e.bucketOnlyServerUrl(),a=ui(o,t.host,t._protocol),u="GET",l=t.maxOperationRetryTime,c=new fr(a,u,SU(t,e.bucket),l);return c.urlParams=s,c.errorHandler=Lo(e),c}function bU(t,e,n){const r=e.fullServerUrl(),i=ui(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new fr(i,s,kU(t,n),o);return a.errorHandler=ld(e),a}function AU(t,e,n,r){const i=e.fullServerUrl(),s=ui(i,t.host,t._protocol),o="PATCH",a=Oy(n,r),u={"Content-Type":"application/json; charset=utf-8"},l=t.maxOperationRetryTime,c=new fr(s,o,ud(t,r),l);return c.headers=u,c.body=a,c.errorHandler=ld(e),c}function RU(t,e){const n=e.fullServerUrl(),r=ui(n,t.host,t._protocol),i="DELETE",s=t.maxOperationRetryTime;function o(u,l){}const a=new fr(r,i,o,s);return a.successCodes=[200,204],a.errorHandler=ld(e),a}function NU(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function _k(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=NU(null,e)),r}function PU(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let w="";for(let v=0;v<2;v++)w=w+Math.random().toString().slice(2);return w}const u=a();o["Content-Type"]="multipart/related; boundary="+u;const l=_k(e,r,i),c=Oy(l,n),h="--"+u+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+c+`\r
--`+u+`\r
Content-Type: `+l.contentType+`\r
\r
`,d=`\r
--`+u+"--",g=dr.getBlob(h,r,d);if(g===null)throw ok();const y={name:l.fullPath},_=ui(s,t.host,t._protocol),f="POST",p=t.maxUploadRetryTime,m=new fr(_,f,ud(t,n),p);return m.urlParams=y,m.headers=o,m.body=g.uploadData(),m.errorHandler=Lo(e),m}class cd{constructor(e,n,r,i){this.current=e,this.total=n,this.finalized=!!r,this.metadata=i||null}}function Ly(t,e){let n=null;try{n=t.getResponseHeader("X-Goog-Upload-Status")}catch{qn(!1)}return qn(!!n&&(e||["active"]).indexOf(n)!==-1),n}function xU(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o=_k(e,r,i),a={name:o.fullPath},u=ui(s,t.host,t._protocol),l="POST",c={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${r.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},h=Oy(o,n),d=t.maxUploadRetryTime;function g(_){Ly(_);let f;try{f=_.getResponseHeader("X-Goog-Upload-URL")}catch{qn(!1)}return qn(id(f)),f}const y=new fr(u,l,g,d);return y.urlParams=a,y.headers=c,y.body=h,y.errorHandler=Lo(e),y}function DU(t,e,n,r){const i={"X-Goog-Upload-Command":"query"};function s(l){const c=Ly(l,["active","final"]);let h=null;try{h=l.getResponseHeader("X-Goog-Upload-Size-Received")}catch{qn(!1)}h||qn(!1);const d=Number(h);return qn(!isNaN(d)),new cd(d,r.size(),c==="final")}const o="POST",a=t.maxUploadRetryTime,u=new fr(n,o,s,a);return u.headers=i,u.errorHandler=Lo(e),u}const Ik=256*1024;function OU(t,e,n,r,i,s,o,a){const u=new cd(0,0);if(o?(u.current=o.current,u.total=o.total):(u.current=0,u.total=r.size()),r.size()!==u.total)throw q2();const l=u.total-u.current;let c=l;i>0&&(c=Math.min(c,i));const h=u.current,d=h+c,y={"X-Goog-Upload-Command":c===l?"upload, finalize":"upload","X-Goog-Upload-Offset":`${u.current}`},_=r.slice(h,d);if(_===null)throw ok();function f(v,P){const b=Ly(v,["active","final"]),V=u.current+c,F=r.size();let M;return b==="final"?M=ud(e,s)(v,P):M=null,new cd(V,F,b==="final",M)}const p="POST",m=e.maxUploadRetryTime,w=new fr(n,p,f,m);return w.headers=y,w.body=_.uploadData(),w.progressCallback=a||null,w.errorHandler=Lo(t),w}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LU={STATE_CHANGED:"state_changed"},Mt={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function My(t){switch(t){case"running":case"pausing":case"canceling":return Mt.RUNNING;case"paused":return Mt.PAUSED;case"success":return Mt.SUCCESS;case"canceled":return Mt.CANCELED;case"error":return Mt.ERROR;default:return Mt.ERROR}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MU{constructor(e,n,r){if(Z2(e)||n!=null||r!=null)this.next=e,this.error=n!=null?n:void 0,this.complete=r!=null?r:void 0;else{const s=e;this.next=s.next,this.error=s.error,this.complete=s.complete}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mo(t){return(...e)=>{Promise.resolve().then(()=>t(...e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ek{constructor(e,n,r=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=n,this._metadata=r,this._mappings=ad(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=i=>{this._request=void 0,this._chunkMultiplier=1,i._codeEquals("canceled")?(this._needToFetchStatus=!0,this.completeTransitions_()):(this._error=i,this._transition("error"))},this._metadataErrorHandler=i=>{this._request=void 0,i._codeEquals("canceled")?this.completeTransitions_():(this._error=i,this._transition("error"))},this._promise=new Promise((i,s)=>{this._resolve=i,this._reject=s,this._start()}),this._promise.then(null,()=>{})}_makeProgressCallback(){const e=this._transferred;return n=>this._updateProgress(e+n)}_shouldDoResumable(e){return e.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this._continueUpload():this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([n,r])=>{switch(this._state){case"running":e(n,r);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,n)=>{const r=xU(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._uploadUrl=s,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((n,r)=>{const i=DU(this._ref.storage,this._ref._location,e,this._blob),s=this._ref.storage._makeRequest(i,n,r);this._request=s,s.getPromise().then(o=>{o=o,this._request=void 0,this._updateProgress(o.current),this._needToFetchStatus=!1,o.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=Ik*this._chunkMultiplier,n=new cd(this._transferred,this._blob.size()),r=this._uploadUrl;this._resolveToken((i,s)=>{let o;try{o=OU(this._ref._location,this._ref.storage,r,this._blob,e,this._mappings,n,this._makeProgressCallback())}catch(u){this._error=u,this._transition("error");return}const a=this._ref.storage._makeRequest(o,i,s);this._request=a,a.getPromise().then(u=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(u.current),u.finalized?(this._metadata=u.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){Ik*this._chunkMultiplier<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,n)=>{const r=wk(this._ref.storage,this._ref._location,this._mappings),i=this._ref.storage._makeRequest(r,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._metadata=s,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,n)=>{const r=PU(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._metadata=s,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const n=this._transferred;this._transferred=e,this._transferred!==n&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":this._state=e,this._request!==void 0&&this._request.cancel();break;case"pausing":this._state=e,this._request!==void 0&&this._request.cancel();break;case"running":const n=this._state==="paused";this._state=e,n&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=sk(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=My(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,n,r,i){const s=new MU(n||void 0,r||void 0,i||void 0);return this._addObserver(s),()=>{this._removeObserver(s)}}then(e,n){return this._promise.then(e,n)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const n=this._observers.indexOf(e);n!==-1&&this._observers.splice(n,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(n=>{this._notifyObserver(n)})}_finishPromise(){if(this._resolve!==void 0){let e=!0;switch(My(this._state)){case Mt.SUCCESS:Mo(this._resolve.bind(null,this.snapshot))();break;case Mt.CANCELED:case Mt.ERROR:const n=this._reject;Mo(n.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(My(this._state)){case Mt.RUNNING:case Mt.PAUSED:e.next&&Mo(e.next.bind(e,this.snapshot))();break;case Mt.SUCCESS:e.complete&&Mo(e.complete.bind(e))();break;case Mt.CANCELED:case Mt.ERROR:e.error&&Mo(e.error.bind(e,this._error))();break;default:e.error&&Mo(e.error.bind(e,this._error))()}}resume(){const e=this._state==="paused"||this._state==="pausing";return e&&this._transition("running"),e}pause(){const e=this._state==="running";return e&&this._transition("pausing"),e}cancel(){const e=this._state==="running"||this._state==="pausing";return e&&this._transition("canceling"),e}}/**
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
 */class is{constructor(e,n){this._service=e,n instanceof St?this._location=n:this._location=St.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new is(e,n)}get root(){const e=new St(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return mk(this._location.path)}get storage(){return this._service}get parent(){const e=mU(this._location.path);if(e===null)return null;const n=new St(this._location.bucket,e);return new is(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw uk(e)}}function $U(t,e,n){return t._throwIfRoot("uploadBytesResumable"),new Ek(t,new dr(e),n)}function UU(t){const e={prefixes:[],items:[]};return Tk(t,e).then(()=>e)}async function Tk(t,e,n){const i=await Sk(t,{pageToken:n});e.prefixes.push(...i.prefixes),e.items.push(...i.items),i.nextPageToken!=null&&await Tk(t,e,i.nextPageToken)}async function Sk(t,e){e!=null&&typeof e.maxResults=="number"&&Py("options.maxResults",1,1e3,e.maxResults);const n=e||{},r=CU(t.storage,t._location,"/",n.pageToken,n.maxResults);return(await t.storage.makeRequestWithTokens(r)).getPromise()}async function FU(t){t._throwIfRoot("getMetadata");const e=wk(t.storage,t._location,ad());return(await t.storage.makeRequestWithTokens(e)).getPromise()}async function VU(t,e){t._throwIfRoot("updateMetadata");const n=AU(t.storage,t._location,e,ad());return(await t.storage.makeRequestWithTokens(n)).getPromise()}async function BU(t){t._throwIfRoot("getDownloadURL");const e=bU(t.storage,t._location,ad());return(await t.storage.makeRequestWithTokens(e)).getPromise().then(n=>{if(n===null)throw H2();return n})}async function zU(t){t._throwIfRoot("deleteObject");const e=RU(t.storage,t._location);return(await t.storage.makeRequestWithTokens(e)).getPromise()}function kk(t,e){const n=gU(t._location.path,e),r=new St(t._location.bucket,n);return new is(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jU(t){return/^[A-Za-z]+:\/\//.test(t)}function qU(t,e){return new is(t,e)}function Ck(t,e){if(t instanceof $y){const n=t;if(n._bucket==null)throw j2();const r=new is(n,n._bucket);return e!=null?Ck(r,e):r}else return e!==void 0?kk(t,e):t}function HU(t,e){if(e&&jU(e)){if(t instanceof $y)return qU(t,e);throw Oo("To use ref(service, url), the first argument must be a Storage instance.")}else return Ck(t,e)}function bk(t,e){const n=e==null?void 0:e[ik];return n==null?null:St.makeFromBucketSpec(n,t)}function WU(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:__(i,t.app.options.projectId))}class $y{constructor(e,n,r,i,s,o){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._pool=i,this._url=s,this._firebaseVersion=o,this._bucket=null,this._host=rk,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=D2,this._maxUploadRetryTime=O2,this._requests=new Set,s!=null?this._bucket=St.makeFromBucketSpec(s,this._host):this._bucket=bk(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=St.makeFromBucketSpec(this._url,e):this._bucket=bk(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Py("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Py("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new is(this,e)}_makeRequest(e,n,r){if(this._deleted)return new Q2(ak());{const i=oU(e,this._appId,n,r,this._pool,this._firebaseVersion);return this._requests.add(i),i.getPromise().then(()=>this._requests.delete(i),()=>this._requests.delete(i)),i}}async makeRequestWithTokens(e){const[n,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r)}}const Ak="@firebase/storage",Rk="0.8.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GU="storage";function KU(t,e,n){return t=B(t),$U(t,e,n)}function QU(t){return t=B(t),FU(t)}function YU(t,e){return t=B(t),VU(t,e)}function XU(t,e){return t=B(t),Sk(t,e)}function JU(t){return t=B(t),UU(t)}function ZU(t){return t=B(t),BU(t)}function eF(t){return t=B(t),zU(t)}function Nk(t,e){return t=B(t),HU(t,e)}function tF(t,e){return kk(t,e)}function nF(t,e,n,r={}){WU(t,e,n,r)}function rF(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new $y(n,r,i,new K2,e,Br)}function iF(){Vr(new In(GU,rF,"PUBLIC").setMultipleInstances(!0)),ln(Ak,Rk,""),ln(Ak,Rk,"esm2017")}iF();/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hd{constructor(e,n,r){this._delegate=e,this.task=n,this.ref=r}get bytesTransferred(){return this._delegate.bytesTransferred}get metadata(){return this._delegate.metadata}get state(){return this._delegate.state}get totalBytes(){return this._delegate.totalBytes}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pk{constructor(e,n){this._delegate=e,this._ref=n,this.cancel=this._delegate.cancel.bind(this._delegate),this.catch=this._delegate.catch.bind(this._delegate),this.pause=this._delegate.pause.bind(this._delegate),this.resume=this._delegate.resume.bind(this._delegate)}get snapshot(){return new hd(this._delegate.snapshot,this,this._ref)}then(e,n){return this._delegate.then(r=>{if(e)return e(new hd(r,this,this._ref))},n)}on(e,n,r,i){let s;return n&&(typeof n=="function"?s=o=>n(new hd(o,this,this._ref)):s={next:n.next?o=>n.next(new hd(o,this,this._ref)):void 0,complete:n.complete||void 0,error:n.error||void 0}),this._delegate.on(e,s,r||void 0,i||void 0)}}class xk{constructor(e,n){this._delegate=e,this._service=n}get prefixes(){return this._delegate.prefixes.map(e=>new pr(e,this._service))}get items(){return this._delegate.items.map(e=>new pr(e,this._service))}get nextPageToken(){return this._delegate.nextPageToken||null}}/**
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
 */class pr{constructor(e,n){this._delegate=e,this.storage=n}get name(){return this._delegate.name}get bucket(){return this._delegate.bucket}get fullPath(){return this._delegate.fullPath}toString(){return this._delegate.toString()}child(e){const n=tF(this._delegate,e);return new pr(n,this.storage)}get root(){return new pr(this._delegate.root,this.storage)}get parent(){const e=this._delegate.parent;return e==null?null:new pr(e,this.storage)}put(e,n){return this._throwIfRoot("put"),new Pk(KU(this._delegate,e,n),this)}putString(e,n=pn.RAW,r){this._throwIfRoot("putString");const i=hk(n,e),s=Object.assign({},r);return s.contentType==null&&i.contentType!=null&&(s.contentType=i.contentType),new Pk(new Ek(this._delegate,new dr(i.data,!0),s),this)}listAll(){return JU(this._delegate).then(e=>new xk(e,this.storage))}list(e){return XU(this._delegate,e||void 0).then(n=>new xk(n,this.storage))}getMetadata(){return QU(this._delegate)}updateMetadata(e){return YU(this._delegate,e)}getDownloadURL(){return ZU(this._delegate)}delete(){return this._throwIfRoot("delete"),eF(this._delegate)}_throwIfRoot(e){if(this._delegate._location.path==="")throw uk(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dk{constructor(e,n){this.app=e,this._delegate=n}get maxOperationRetryTime(){return this._delegate.maxOperationRetryTime}get maxUploadRetryTime(){return this._delegate.maxUploadRetryTime}ref(e){if(Ok(e))throw Oo("ref() expected a child path but got a URL, use refFromURL instead.");return new pr(Nk(this._delegate,e),this)}refFromURL(e){if(!Ok(e))throw Oo("refFromURL() expected a full URL but got a child path, use ref() instead.");try{St.makeFromUrl(e,this._delegate.host)}catch{throw Oo("refFromUrl() expected a valid full URL but got an invalid one.")}return new pr(Nk(this._delegate,e),this)}setMaxUploadRetryTime(e){this._delegate.maxUploadRetryTime=e}setMaxOperationRetryTime(e){this._delegate.maxOperationRetryTime=e}useEmulator(e,n,r={}){nF(this._delegate,e,n,r)}}function Ok(t){return/^[A-Za-z]+:\/\//.test(t)}const sF="@firebase/storage-compat",oF="0.1.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aF="storage-compat";function uF(t,{instanceIdentifier:e}){const n=t.getProvider("app-compat").getImmediate(),r=t.getProvider("storage").getImmediate({identifier:e});return new Dk(n,r)}function lF(t){const e={TaskState:Mt,TaskEvent:LU,StringFormat:pn,Storage:Dk,Reference:pr};t.INTERNAL.registerComponent(new In(aF,uF,"PUBLIC").setServiceProps(e).setMultipleInstances(!0)),t.registerVersion(sF,oF)}lF(Bs);export{gF as A,dF as B,Us as G,vn as R,pF as a,yF as b,mF as c,cF as d,fF as e,Bs as f,li as r,hF as s};
