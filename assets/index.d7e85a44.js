import{R as e,r as i,S as m,A as h,a as g,b,c as v,s as d,d as y}from"./vendor.07446040.js";const N=function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function c(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerpolicy&&(o.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?o.credentials="include":r.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(r){if(r.ep)return;r.ep=!0;const o=c(r);fetch(r.href,o)}};N();const S="modulepreload",E={},L="/",u=function(l,c){return!c||c.length===0?l():Promise.all(c.map(a=>{if(a=`${L}${a}`,a in E)return;E[a]=!0;const r=a.endsWith(".css"),o=r?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${o}`))return;const s=document.createElement("link");if(s.rel=r?"stylesheet":S,r||(s.as="script",s.crossOrigin=""),s.href=a,document.head.appendChild(s),r)return new Promise((f,p)=>{s.addEventListener("load",f),s.addEventListener("error",p)})})).then(()=>l())};var w="/assets/icon.3ae36dba.svg",x="/assets/pixel-dog.802ee817.gif";function _({page:t}){return e.createElement("div",{className:t==="find"?"container":"d-none"},e.createElement("h1",null,"Find"))}function k(){const[t,l]=i.exports.useState("Follow");return e.createElement("button",{className:"btn btn-outline-dark p-1",onClick:()=>{l(t==="Following"?"Follow":"Following")}},t)}function F({setPage:t,name:l}){const[c,a]=i.exports.useState(!1);return e.createElement("div",{className:"col-4 col-md-2 text-center mb-3"},e.createElement("img",{className:"rounded-circle mb-2",src:"https://placedog.net/5000?random",alt:"",width:"60",height:"60",role:"button",style:{objectFit:"cover",userSelect:"none"},onLoad:()=>a(!0),className:c?"rounded-circle":"d-none",onClick:()=>t("profile")}),e.createElement(m,{circle:!0,width:60,height:60,className:c?"d-none":"pt-2"}),e.createElement("br",null),e.createElement("small",null,l),e.createElement("br",null),e.createElement(k,null))}var P=[{uid:"111111",name:"abc"},{uid:"22222",name:"aaaa"},{uid:"33333",name:"cccc"},{uid:"44444",name:"arrrbc"},{uid:"555",name:"arrrbc"},{uid:"44446664",name:"arrrbc"},{uid:"4333",name:"arrrbc"},{uid:"888",name:"arrrbc"}];function A({setPage:t}){return e.createElement("div",{className:"container mt-4"},e.createElement("div",{className:"row"},P.slice(0,6).map(l=>e.createElement(F,{setPage:t,key:l.uid,name:l.name}))))}function O({like:t,setLike:l,dislike:c,setDislike:a}){const r=()=>{a(c?!c:!0),t&&l(!t)};return e.createElement("div",{onClick:r},e.createElement(h,{size:"25",role:"button",className:c?"d-none":"mb-1"}),e.createElement(g,{size:"25",role:"button",className:c?"mb-1":"d-none"}),e.createElement("small",null,"25"))}function D({like:t,setLike:l,dislike:c,setDislike:a}){const r=()=>{l(t?!t:!0),c&&a(!c)};return e.createElement("div",{onClick:r},e.createElement(b,{size:"25",role:"button",className:t?"d-none":"mb-1"}),e.createElement(v,{size:"25",role:"button",className:t?"mb-1":"d-none"}),e.createElement("small",null,"25"))}function j(){const[t,l]=i.exports.useState(null),[c,a]=i.exports.useState(null);return e.createElement("div",{className:"d-flex justify-content-around m-2",style:{userSelect:"none"}},e.createElement(D,{like:t,setLike:l,dislike:c,setDislike:a}),e.createElement(O,{like:t,setLike:l,dislike:c,setDislike:a}))}function z(){const[t,l]=i.exports.useState(!1);return e.createElement("div",{className:"d-flex"},e.createElement("img",{src:"https://placedog.net/5000?random",alt:"Avatar",width:"40",height:"40",role:"button",style:{objectFit:"cover",userSelect:"none"},onLoad:()=>l(!0),className:t?"rounded-circle m-1":"d-none"}),e.createElement(m,{circle:!0,width:40,height:40,className:t?"d-none":"m-1 pt-2"}),e.createElement("div",null,e.createElement("small",null,"nameeeeee"),e.createElement("br",null),e.createElement("small",{className:"text-muted"},"1/10/2001")))}function I(){const[t,l]=i.exports.useState(!1);return e.createElement(e.Fragment,null,e.createElement("img",{width:"100%",height:"300",src:"https://placedog.net/5000?random",alt:"Image Post",style:{objectFit:"cover",userSelect:"none"},onLoad:()=>l(!0),className:t?"":"d-none"}),e.createElement(m,{height:300,className:t?"d-none":"pt-2"}))}function n(){return e.createElement("div",{className:"col-sm-6 col-lg-4 mb-4"},e.createElement(z,null),e.createElement("div",{className:"dropdown-divider"}),e.createElement(I,null),e.createElement("div",{className:"dropdown-divider"}),e.createElement(j,null))}function R({setPage:t,page:l}){return e.createElement("div",null,e.createElement("div",{className:l==="dashboard"?"":"d-none"},e.createElement(A,{setPage:t}),e.createElement("main",{className:"container py-5"},e.createElement("div",{className:"row","data-masonry":'{"percentPosition": true }'},e.createElement(n,null),e.createElement(n,null),e.createElement(n,null),e.createElement(n,null),e.createElement(n,null),e.createElement(n,null),e.createElement(n,null),e.createElement(n,null),e.createElement(n,null),e.createElement(n,null),e.createElement(n,null),e.createElement(n,null),e.createElement(n,null),e.createElement(n,null),e.createElement(n,null),e.createElement(n,null),e.createElement(n,null),e.createElement(n,null),e.createElement(n,null),e.createElement(n,null),e.createElement(n,null),e.createElement(n,null),e.createElement(n,null),e.createElement(n,null),e.createElement(n,null),e.createElement(n,null),e.createElement(n,null),e.createElement(n,null),e.createElement(n,null),e.createElement(n,null),e.createElement(n,null),e.createElement(n,null),e.createElement(n,null)))))}const T=i.exports.lazy(()=>u(()=>import("./Header.af06506a.js"),["assets/Header.af06506a.js","assets/vendor.07446040.js","assets/index.esm.c9816298.js"])),B=i.exports.lazy(()=>u(()=>import("./Profile.8ca528ff.js"),["assets/Profile.8ca528ff.js","assets/vendor.07446040.js"])),C=i.exports.lazy(()=>u(()=>import("./BackToTop.40bffc29.js"),["assets/BackToTop.40bffc29.js","assets/vendor.07446040.js","assets/index.esm.c9816298.js"]));document.querySelector("#icon").setAttribute("href",w);function $(){const[t,l]=i.exports.useState("dashboard");return e.createElement(i.exports.Suspense,{fallback:e.createElement(q,null,e.createElement(H,{src:x,width:"100"}))},e.createElement(T,{setPage:l}),e.createElement(R,{setPage:l,page:t}),e.createElement(B,{page:t}),e.createElement(_,{page:t}),e.createElement(C,null))}const q=d.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`,H=d.img`
  user-select: none;
  animation: spin 0.5s linear infinite;
  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }
`;y.render(e.createElement(e.StrictMode,null,e.createElement($,null)),document.getElementById("root"));export{k as B};
