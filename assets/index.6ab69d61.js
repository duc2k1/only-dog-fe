import{r as a,s as d,R as e,f as m,a as y}from"./vendor.1d4aa5a0.js";const _=function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function o(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerpolicy&&(n.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?n.credentials="include":t.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(t){if(t.ep)return;t.ep=!0;const n=o(t);fetch(t.href,n)}};_();const v="modulepreload",f={},b="/",u=function(l,o){return!o||o.length===0?l():Promise.all(o.map(s=>{if(s=`${b}${s}`,s in f)return;f[s]=!0;const t=s.endsWith(".css"),n=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${n}`))return;const i=document.createElement("link");if(i.rel=t?"stylesheet":v,t||(i.as="script",i.crossOrigin=""),i.href=s,document.head.appendChild(i),t)return new Promise((g,h)=>{i.addEventListener("load",g),i.addEventListener("error",h)})})).then(()=>l())},S=a.exports.createContext(null),p=a.exports.createContext(null);function x(){const[c,l]=a.exports.useState(JSON.parse(localStorage.getItem("authUser"))),{fire:o}=a.exports.useContext(p);return a.exports.useEffect(()=>{const s=o.auth().onAuthStateChanged(t=>{t?(localStorage.setItem("authUser",JSON.stringify(t)),l(t)):(localStorage.removeItem("authUser"),l(null))});return()=>s()},[o]),{user:c}}var E="/assets/icon.34a58718.svg";const P=a.exports.lazy(()=>u(()=>import("./Header.36941d11.js"),["assets/Header.36941d11.js","assets/vendor.1d4aa5a0.js","assets/index.esm.a79a1276.js","assets/iconBase.b0f8e610.js","assets/useUser.88925a77.js"])),r=a.exports.lazy(()=>u(()=>import("./Post.5d416b46.js"),["assets/Post.5d416b46.js","assets/vendor.1d4aa5a0.js","assets/iconBase.b0f8e610.js"])),I=a.exports.lazy(()=>u(()=>import("./Profile.2238fb23.js"),["assets/Profile.2238fb23.js","assets/vendor.1d4aa5a0.js","assets/useUser.88925a77.js"])),L=a.exports.lazy(()=>u(()=>import("./Suggestions.10ad515d.js"),["assets/Suggestions.10ad515d.js","assets/vendor.1d4aa5a0.js"])),k=a.exports.lazy(()=>u(()=>import("./BackToTop.c19d9085.js"),["assets/BackToTop.c19d9085.js","assets/vendor.1d4aa5a0.js","assets/index.esm.a79a1276.js","assets/iconBase.b0f8e610.js"]));document.querySelector("#icon").setAttribute("href",E);function O(){const[c,l]=a.exports.useState("dashboard"),{user:o}=x();return e.createElement(S.Provider,{value:{user:o}},e.createElement(a.exports.Suspense,{fallback:e.createElement(A,null,e.createElement(R,{src:E,width:"100",alt:""}))},e.createElement(P,{setPage:l,user:o}),e.createElement("div",{className:c==="dashboard"?"":"d-none"},e.createElement(L,null),e.createElement("main",{className:"container py-5"},e.createElement("div",{className:"row","data-masonry":'{"percentPosition": true }'},e.createElement(r,null),e.createElement(r,null),e.createElement(r,null),e.createElement(r,null),e.createElement(r,null),e.createElement(r,null),e.createElement(r,null),e.createElement(r,null),e.createElement(r,null),e.createElement(r,null),e.createElement(r,null),e.createElement(r,null),e.createElement(r,null),e.createElement(r,null)))),e.createElement(I,{page:c,user:o}),e.createElement(k,null)))}const A=d.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`,R=d.img`
  animation: spin 0.00001s linear infinite;
  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }
`,T={apiKey:"AIzaSyBLi6LoEwIVcoiiIPVinak9RKJl1rkgdxk",authDomain:"okita-49779.firebaseapp.com",databaseURL:"https://okita-49779-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"okita-49779",storageBucket:"okita-49779.appspot.com",messagingSenderId:"431584964167",appId:"1:431584964167:web:bcc31ad94c0280873dcb62"},C=m.initializeApp(T),V=m.storage(),{FieldValue:D}=m.firestore;y.render(e.createElement(e.StrictMode,null,e.createElement(p.Provider,{value:{fire:C,FieldValue:D}},e.createElement(O,null))),document.getElementById("root"));export{p as F,C as f,V as s};
