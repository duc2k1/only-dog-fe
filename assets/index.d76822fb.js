import{R as t,A as g,r as l,f as d,a as h}from"./vendor.48f3248e.js";const y=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}};y();const b="modulepreload",m={},v="/",u=function(o,s){return!s||s.length===0?o():Promise.all(s.map(n=>{if(n=`${v}${n}`,n in m)return;m[n]=!0;const e=n.endsWith(".css"),r=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${n}"]${r}`))return;const a=document.createElement("link");if(a.rel=e?"stylesheet":b,e||(a.as="script",a.crossOrigin=""),a.href=n,document.head.appendChild(a),e)return new Promise((p,E)=>{a.addEventListener("load",p),a.addEventListener("error",E)})})).then(()=>o())};function x(){const c=()=>{document.body.scrollTop=0,document.documentElement.scrollTop=0};return t.createElement("div",{onClick:()=>c(),type:"button",className:"btn btn-outline-primary btn-floating btn-lg",id:"btn-back-to-top",style:{position:"fixed",bottom:20,right:20,borderRadius:"50%"}},t.createElement(g,null))}const P=l.exports.createContext(null),f=l.exports.createContext(null);function _(){const[c,o]=l.exports.useState(JSON.parse(localStorage.getItem("authUser"))),{fire:s}=l.exports.useContext(f);return l.exports.useEffect(()=>{const n=s.auth().onAuthStateChanged(e=>{e?(localStorage.setItem("authUser",JSON.stringify(e)),o(e)):(localStorage.removeItem("authUser"),o(null))});return()=>n()},[s]),{user:c}}const k=l.exports.lazy(()=>u(()=>import("./Header.ea8de9e5.js"),["assets/Header.ea8de9e5.js","assets/vendor.48f3248e.js"])),i=l.exports.lazy(()=>u(()=>import("./Post.acaec588.js"),["assets/Post.acaec588.js","assets/vendor.48f3248e.js"])),S=l.exports.lazy(()=>u(()=>import("./Profile.5718cc45.js"),["assets/Profile.5718cc45.js","assets/vendor.48f3248e.js"]));function I(){const[c,o]=l.exports.useState("dashboard"),{user:s}=_();return t.createElement(P.Provider,{value:{user:s}},t.createElement(l.exports.Suspense,{fallback:t.createElement("div",{className:"d-flex justify-content-center"},t.createElement("div",{className:"spinner-border",role:"status"}))},t.createElement("div",{className:"container"},t.createElement(k,{setPage:o,user:s}),c==="profile"?t.createElement(S,null):t.createElement("main",{className:"py-5"},t.createElement("div",{className:"row","data-masonry":'{"percentPosition": true }'},t.createElement(i,null),t.createElement(i,null),t.createElement(i,null),t.createElement(i,null),t.createElement(i,null),t.createElement(i,null))),t.createElement(x,null))))}const L={apiKey:"AIzaSyBLi6LoEwIVcoiiIPVinak9RKJl1rkgdxk",authDomain:"okita-49779.firebaseapp.com",databaseURL:"https://okita-49779-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"okita-49779",storageBucket:"okita-49779.appspot.com",messagingSenderId:"431584964167",appId:"1:431584964167:web:bcc31ad94c0280873dcb62"},A=d.initializeApp(L),{FieldValue:O}=d.firestore;h.render(t.createElement(t.StrictMode,null,t.createElement(f.Provider,{value:{fire:A,FieldValue:O}},t.createElement(I,null))),document.getElementById("root"));export{f as F,A as f};