import{r as l,R as e}from"./vendor.e0683fdb.js";import{S as n}from"./index.f3cc7a64.js";import{B as r}from"./ButtonFollow.fe060ea3.js";import{s as c}from"./seed.68dafaaf.js";function o(){const[t,a]=l.exports.useState(!1);return e.createElement("div",{className:"col-4 col-md-2 text-center mb-3"},e.createElement("img",{className:"rounded-circle mb-2",src:"https://placedog.net/5000?random",alt:"",width:"80",height:"80",role:"button",style:{objectFit:"cover",userSelect:"none"},onLoad:()=>a(!0),className:t?"rounded-circle":"d-none",onClick:()=>setPage("profile")}),e.createElement(n,{circle:!0,width:80,height:80,className:t?"d-none":"pt-2"}),e.createElement("br",null),e.createElement("small",null,"dfgdfg"),e.createElement("br",null),e.createElement(r,null))}function s(){return e.createElement("div",{className:"container mt-4"},e.createElement("div",{className:"row"},c.slice(0,6).map(t=>e.createElement(o,{key:t.uid}))))}function f({page:t}){return e.createElement("div",{className:t==="find"?"":"d-none"},e.createElement(s,null))}export{f as default};
