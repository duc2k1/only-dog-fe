import{r as o,R as n,s as E,a as g}from"./vendor.a3abce89.js";const y=function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}};y();const v="modulepreload",f={},x="/",i=function(l,a){return!a||a.length===0?l():Promise.all(a.map(s=>{if(s=`${x}${s}`,s in f)return;f[s]=!0;const e=s.endsWith(".css"),t=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${t}`))return;const r=document.createElement("link");if(r.rel=e?"stylesheet":v,e||(r.as="script",r.crossOrigin=""),r.href=s,document.head.appendChild(r),e)return new Promise((d,u)=>{r.addEventListener("load",d),r.addEventListener("error",u)})})).then(()=>l())};var P="/assets/pixel-dog.802ee817.gif",A="/assets/icon.3ae36dba.svg";const p=o.exports.createContext();var L=o.exports.memo(function({children:l}){const[a,s]=o.exports.useState("dashboard"),[e,t]=o.exports.useState(!1),[r,d]=o.exports.useState(!1),[u,m]=o.exports.useState(!1),[h,_]=o.exports.useState(!0);return n.createElement(p.Provider,{value:{page:a,setPage:s,showModalRegister:e,setShowModalRegister:t,showModalLogin:r,setShowModalLogin:d,showModalAddPost:u,setShowModalAddPost:m,stateAccessToken:h,setStateAccessToken:_}},l)});const S=o.exports.lazy(()=>i(()=>import("./Header.94f98038.js"),["assets/Header.94f98038.js","assets/vendor.a3abce89.js","assets/iconBase.13e4c446.js","assets/Modal.a07a7908.js","assets/grey.61f403c9.js"])),b=o.exports.lazy(()=>i(()=>import("./Find.067cf22f.js"),["assets/Find.067cf22f.js","assets/vendor.a3abce89.js","assets/ButtonFollow.f5cd8997.js","assets/grey.61f403c9.js","assets/seed.68dafaaf.js"])),O=o.exports.lazy(()=>i(()=>import("./DashBoard.7be0f814.js"),["assets/DashBoard.7be0f814.js","assets/vendor.a3abce89.js","assets/ButtonFollow.f5cd8997.js","assets/grey.61f403c9.js","assets/seed.68dafaaf.js","assets/iconBase.13e4c446.js"])),R=o.exports.lazy(()=>i(()=>import("./Profile.e51178d1.js"),["assets/Profile.e51178d1.js","assets/vendor.a3abce89.js","assets/ButtonFollow.f5cd8997.js","assets/grey.61f403c9.js","assets/Modal.a07a7908.js"])),T=o.exports.lazy(()=>i(()=>import("./BackToTop.44078c2c.js"),["assets/BackToTop.44078c2c.js","assets/vendor.a3abce89.js","assets/iconBase.13e4c446.js"]));document.querySelector("#icon").setAttribute("href",A);function w(){const{page:c}=o.exports.useContext(p);return n.createElement(o.exports.Suspense,{fallback:n.createElement(k,{src:P,width:"100"})},n.createElement(S,null),c==="dashboard"?n.createElement(O,null):c==="profile"?n.createElement(R,null):n.createElement(b,null),n.createElement(T,null))}const k=E.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  user-select: none;
`;g.render(n.createElement(n.StrictMode,null,n.createElement(L,null,n.createElement(w,null))),document.getElementById("root"));export{p as A};