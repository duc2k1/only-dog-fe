import{j as p,r as t,B as _,S,R as f,a as y}from"./vendor.e39436fc.js";const A=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(e){if(e.ep)return;e.ep=!0;const o=i(e);fetch(e.href,o)}};A();const P="modulepreload",h={},E="/",c=function(a,i){return!i||i.length===0?a():Promise.all(i.map(r=>{if(r=`${E}${r}`,r in h)return;h[r]=!0;const e=r.endsWith(".css"),o=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${o}`))return;const s=document.createElement("link");if(s.rel=e?"stylesheet":P,e||(s.as="script",s.crossOrigin=""),s.href=r,document.head.appendChild(s),e)return new Promise((d,u)=>{s.addEventListener("load",d),s.addEventListener("error",u)})})).then(()=>a())};var L="/assets/icon.3ae36dba.svg",T="/assets/pixel-dog.802ee817.gif";const n=p.exports.jsx,m=p.exports.jsxs,z=p.exports.Fragment;function I(){return n("img",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",userSelect:"none"},src:T,width:"100"})}document.querySelector("#icon").setAttribute("href",L);const R=t.exports.lazy(()=>c(()=>import("./Header.9fe4b0a5.js"),["assets/Header.9fe4b0a5.js","assets/vendor.e39436fc.js","assets/toTop.4c4a9307.js","assets/iconBase.bc17050a.js","assets/SpinnerBootstrap.b9facf5c.js","assets/ModalImage.cc091c63.js","assets/grey.19af5ccb.js","assets/getUserIdFromAccessToken.21bec7ee.js"])),j=t.exports.lazy(()=>c(()=>import("./Find.fdc21f3b.js"),["assets/Find.fdc21f3b.js","assets/vendor.e39436fc.js","assets/ButtonFollow.535b5a77.js","assets/grey.19af5ccb.js","assets/toTop.4c4a9307.js","assets/NotFound.615fa2e5.js"])),w=t.exports.lazy(()=>c(()=>import("./DashBoard.0ad6e799.js"),["assets/DashBoard.0ad6e799.js","assets/vendor.e39436fc.js","assets/ButtonFollow.535b5a77.js","assets/grey.19af5ccb.js","assets/toTop.4c4a9307.js","assets/iconBase.bc17050a.js","assets/splitDate.9d8fdbe2.js","assets/SpinnerBootstrap.b9facf5c.js","assets/getUserIdFromAccessToken.21bec7ee.js"])),b=t.exports.lazy(()=>c(()=>import("./Profile.59baed6a.js"),["assets/Profile.59baed6a.js","assets/vendor.e39436fc.js","assets/ButtonFollow.535b5a77.js","assets/grey.19af5ccb.js","assets/ModalImage.cc091c63.js","assets/SpinnerBootstrap.b9facf5c.js","assets/splitDate.9d8fdbe2.js","assets/NotFound.615fa2e5.js"])),k=t.exports.lazy(()=>c(()=>import("./BackToTop.32875a99.js"),["assets/BackToTop.32875a99.js","assets/vendor.e39436fc.js","assets/iconBase.bc17050a.js","assets/toTop.4c4a9307.js"]));var O=t.exports.memo(function(){return m(t.exports.Suspense,{fallback:n(I,{}),children:[m(_,{children:[n(R,{}),m(S,{children:[n(f,{exact:!0,path:"/",component:w}),n(f,{exact:!0,path:"/profile",component:b}),n(f,{exact:!0,path:"/find",component:j})]})]}),n(k,{})]})}),D=t.exports.memo(function({children:a}){const[i,r]=t.exports.useState(!1),[e,o]=t.exports.useState(!1),[s,d]=t.exports.useState(!1),[u,x]=t.exports.useState(!1),[g,v]=t.exports.useState("");return n(M.Provider,{value:{showModalRegister:i,setShowModalRegister:r,showModalLogin:e,setShowModalLogin:o,showModalUpdateAvatar:s,setShowModalUpdateAvatar:d,showModalImage:u,setShowModalImage:x,stateUserIdProfile:g,setStateUserIdProfile:v},children:a})});const M=t.exports.createContext();var B=t.exports.memo(function({children:a}){const[i,r]=t.exports.useState(JSON.parse(localStorage.getItem("accessToken"))),[e,o]=t.exports.useState(JSON.parse(localStorage.getItem("refreshToken")));return n(C.Provider,{value:{stateAccessToken:i,setStateAccessToken:r,stateRefreshToken:e,setStateRefreshToken:o},children:a})});const C=t.exports.createContext();y.exports.render(n(B,{children:n(D,{children:n(O,{})})}),document.getElementById("root"));export{C as A,z as F,m as a,M as b,n as j};