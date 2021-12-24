import{j as m,r as t,H as I,S as k,R as h,o as L,a as b}from"./vendor.c65eed6e.js";const E=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}};E();const j="modulepreload",S={},O="/",l=function(s,i){return!i||i.length===0?s():Promise.all(i.map(o=>{if(o=`${O}${o}`,o in S)return;S[o]=!0;const e=o.endsWith(".css"),r=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${r}`))return;const n=document.createElement("link");if(n.rel=e?"stylesheet":j,e||(n.as="script",n.crossOrigin=""),n.href=o,document.head.appendChild(n),e)return new Promise((u,d)=>{n.addEventListener("load",u),n.addEventListener("error",d)})})).then(()=>s())};var R="/assets/icon.3ae36dba.svg",w="/assets/pixel-dog.802ee817.gif";const c=m.exports.jsx,x=m.exports.jsxs,K=m.exports.Fragment;function D(){return c("img",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",userSelect:"none"},src:w,width:"100"})}document.querySelector("#icon").setAttribute("href",R);const C=t.exports.lazy(()=>l(()=>import("./Header.0c81d5ab.js"),["assets/Header.0c81d5ab.js","assets/vendor.c65eed6e.js","assets/iconBase.b42652f6.js","assets/grey.ee72b4cc.js","assets/ModalImage.69c42d37.js"])),F=t.exports.lazy(()=>l(()=>import("./Find.d802e601.js"),["assets/Find.d802e601.js","assets/vendor.c65eed6e.js","assets/ButtonFollow.65ec8582.js","assets/grey.ee72b4cc.js","assets/NotFound.37052622.js"])),M=t.exports.lazy(()=>l(()=>import("./DashBoard.b38e8d8a.js"),["assets/DashBoard.b38e8d8a.js","assets/vendor.c65eed6e.js","assets/grey.ee72b4cc.js","assets/ButtonFollow.65ec8582.js","assets/index.esm.63d4f9e9.js","assets/iconBase.b42652f6.js","assets/splitDate.9d8fdbe2.js"])),U=t.exports.lazy(()=>l(()=>import("./Profile.81db8e72.js"),["assets/Profile.81db8e72.js","assets/vendor.c65eed6e.js","assets/ButtonFollow.65ec8582.js","assets/grey.ee72b4cc.js","assets/ModalImage.69c42d37.js","assets/splitDate.9d8fdbe2.js","assets/NotFound.37052622.js"])),z=t.exports.lazy(()=>l(()=>import("./BackToTop.8bc75401.js"),["assets/BackToTop.8bc75401.js","assets/vendor.c65eed6e.js","assets/index.esm.63d4f9e9.js","assets/iconBase.b42652f6.js"]));var B=t.exports.memo(function(){return x(t.exports.Suspense,{fallback:c(D,{}),children:[x(I,{children:[c(C,{}),x(k,{children:[c(h,{exact:!0,path:"/",component:M}),c(h,{exact:!0,path:"/profile",component:U}),c(h,{exact:!0,path:"/find",component:F})]})]}),c(z,{})]})});function N(a="",s={}){return fetch("http://45.76.191.210:3001"+a,{headers:s})}function V(a){return a?L(a).userId:""}var H=t.exports.memo(function({children:s}){const[i,o]=t.exports.useState(_().accessToken),[e,r]=t.exports.useState(_().refreshToken);return c(v.Provider,{value:{stateAccessToken:i,setStateAccessToken:o,stateRefreshToken:e,setStateRefreshToken:r},children:s})});function _(){const a=o=>localStorage.getItem(o)?JSON.parse(localStorage.getItem(o)):"",s=a("accessToken"),i=a("refreshToken");return{accessToken:s,refreshToken:i}}const v=t.exports.createContext();var $=t.exports.memo(function({children:s}){const[i,o]=t.exports.useState(!1),[e,r]=t.exports.useState(!1),[n,u]=t.exports.useState(!1),[d,A]=t.exports.useState(!1),[T,y]=t.exports.useState(""),[P,g]=t.exports.useState({}),{stateAccessToken:p}=t.exports.useContext(v);return t.exports.useEffect(()=>(p&&N("/users/find_by_id/"+V(p)).then(f=>f.json()).then(f=>g(f.user)),()=>{g({})}),[p]),c(q.Provider,{value:{showModalRegister:i,setShowModalRegister:o,showModalLogin:e,setShowModalLogin:r,showModalUpdateAvatar:n,setShowModalUpdateAvatar:u,showModalImage:d,setShowModalImage:A,stateUserIdProfile:T,setStateUserIdProfile:y,stateObInfoUserCurrent:P},children:s})});const q=t.exports.createContext();b.exports.render(c(H,{children:c($,{children:c(B,{})})}),document.getElementById("root"));export{v as A,K as F,x as a,q as b,N as c,V as g,c as j};
