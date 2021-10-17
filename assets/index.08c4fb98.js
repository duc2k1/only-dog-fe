import{R as e,r as c,a as i}from"./vendor.7a83662d.js";const o=function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const t of a)if(t.type==="childList")for(const m of t.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&n(m)}).observe(document,{childList:!0,subtree:!0});function s(a){const t={};return a.integrity&&(t.integrity=a.integrity),a.referrerpolicy&&(t.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?t.credentials="include":a.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(a){if(a.ep)return;a.ep=!0;const t=s(a);fetch(a.href,t)}};o();function d(){return e.createElement("div",null,e.createElement("div",null,e.createElement("button",{type:"button",className:"btn btn-primary","data-bs-toggle":"modal","data-bs-target":"#exampleModal"},"Login"),e.createElement("div",{className:"modal fade",id:"exampleModal",tabIndex:-1,"aria-labelledby":"exampleModalLabel","aria-hidden":"true"},e.createElement("div",{className:"modal-dialog"},e.createElement("div",{className:"modal-content"},e.createElement("div",{className:"modal-header"},e.createElement("h5",{className:"modal-title",id:"exampleModalLabel"},"Login"),e.createElement("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})),e.createElement("div",{className:"modal-body"},e.createElement("form",null,e.createElement("div",{className:"mb-3"},e.createElement("label",{htmlFor:"exampleInputEmail1",className:"form-label"},"Email address"),e.createElement("input",{type:"email",className:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp"}),e.createElement("div",{id:"emailHelp",className:"form-text"},"We'll never share your email with anyone else.")),e.createElement("div",{className:"mb-3"},e.createElement("label",{htmlFor:"exampleInputPassword1",className:"form-label"},"Password"),e.createElement("input",{type:"password",className:"form-control",id:"exampleInputPassword1"})),e.createElement("button",{type:"submit",className:"btn btn-primary"},"Submit"))),e.createElement("div",{className:"modal-footer"},e.createElement("button",{type:"button",className:"btn btn-secondary","data-bs-dismiss":"modal"},"Close"),e.createElement("button",{type:"button",className:"btn btn-primary"},"Login")))))))}function b(){return e.createElement("div",null,e.createElement("div",null,e.createElement("button",{type:"button",className:"btn btn-primary","data-bs-toggle":"modal","data-bs-target":"#exampleModal2"},"Register"),e.createElement("div",{className:"modal fade",id:"exampleModal2",tabIndex:-1,"aria-labelledby":"exampleModal2Label","aria-hidden":"true"},e.createElement("div",{className:"modal-dialog"},e.createElement("div",{className:"modal-content"},e.createElement("div",{className:"modal-header"},e.createElement("h5",{className:"modal-title",id:"exampleModal2Label"},"Register"),e.createElement("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})),e.createElement("div",{className:"modal-body"},e.createElement("form",null,e.createElement("div",{className:"mb-3"},e.createElement("label",{htmlFor:"exampleInputEmail1",className:"form-label"},"User Name"),e.createElement("input",{type:"email",className:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp"}),e.createElement("div",{id:"emailHelp",className:"form-text"},"We'll never share your email with anyone else.")),e.createElement("div",{className:"mb-3"},e.createElement("label",{htmlFor:"exampleInputEmail1",className:"form-label"},"Email address"),e.createElement("input",{type:"email",className:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp"}),e.createElement("div",{id:"emailHelp",className:"form-text"},"We'll never share your email with anyone else.")),e.createElement("div",{className:"mb-3"},e.createElement("label",{htmlFor:"exampleInputPassword1",className:"form-label"},"Password"),e.createElement("input",{type:"password",className:"form-control",id:"exampleInputPassword1"})),e.createElement("div",{className:"mb-3"},e.createElement("label",{htmlFor:"exampleInputPassword1",className:"form-label"},"Confirm Password"),e.createElement("input",{type:"password",className:"form-control",id:"exampleInputPassword1"})))),e.createElement("div",{className:"modal-footer"},e.createElement("button",{type:"button",className:"btn btn-secondary","data-bs-dismiss":"modal"},"Close"),e.createElement("button",{type:"button",className:"btn btn-primary"},"Register")))))))}var p="/assets/logo.7e8cfe4c.svg";function u({setPage:r}){return e.createElement("nav",{className:"navbar navbar-expand-lg navbar-light"},e.createElement("div",{className:"container-fluid"},e.createElement("a",{className:"navbar-brand",href:"#"},e.createElement("img",{src:p,alt:"Logo OnlyDog",width:100})),e.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},e.createElement("span",{className:"navbar-toggler-icon"})),e.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},e.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"},e.createElement("li",{className:"nav-item"},e.createElement("a",{className:"nav-link active","aria-current":"page",href:"#"},"Home")),e.createElement("li",{className:"nav-item"},e.createElement("a",{className:"nav-link",href:"#"},"Link"))),e.createElement("div",{className:"nav-item me-2 mt-2"},e.createElement(d,null)),e.createElement("div",{className:"nav-item me-2 mt-2"},e.createElement(b,null)),e.createElement("div",{className:"nav-item me-2 mt-2",onClick:()=>r("profile")},"| Profile"),e.createElement("div",{className:"nav-item me-2 mt-2"},"| Logout"))))}function E(){return e.createElement("main",{className:"py-5"},e.createElement("div",{className:"row","data-masonry":'{"percentPosition": true }'},e.createElement("div",{className:"col-sm-6 col-lg-4 mb-4"},e.createElement("div",{className:"card"},e.createElement("svg",{className:"bd-placeholder-img card-img",width:"100%",height:260,xmlns:"http://www.w3.org/2000/svg",role:"img","aria-label":"Placeholder: Card image",preserveAspectRatio:"xMidYMid slice",focusable:"false"},e.createElement("title",null,"Placeholder"),e.createElement("rect",{width:"100%",height:"100%",fill:"#868e96"}),e.createElement("text",{x:"50%",y:"50%",fill:"#dee2e6",dy:".3em"},"Card image")))),e.createElement("div",{className:"col-sm-6 col-lg-4 mb-4"},e.createElement("div",{className:"card"},e.createElement("svg",{className:"bd-placeholder-img card-img",width:"100%",height:260,xmlns:"http://www.w3.org/2000/svg",role:"img","aria-label":"Placeholder: Card image",preserveAspectRatio:"xMidYMid slice",focusable:"false"},e.createElement("title",null,"Placeholder"),e.createElement("rect",{width:"100%",height:"100%",fill:"#868e96"}),e.createElement("text",{x:"50%",y:"50%",fill:"#dee2e6",dy:".3em"},"Card image")))),e.createElement("div",{className:"col-sm-6 col-lg-4 mb-4"},e.createElement("div",{className:"card"},e.createElement("svg",{className:"bd-placeholder-img card-img",width:"100%",height:260,xmlns:"http://www.w3.org/2000/svg",role:"img","aria-label":"Placeholder: Card image",preserveAspectRatio:"xMidYMid slice",focusable:"false"},e.createElement("title",null,"Placeholder"),e.createElement("rect",{width:"100%",height:"100%",fill:"#868e96"}),e.createElement("text",{x:"50%",y:"50%",fill:"#dee2e6",dy:".3em"},"Card image")))),e.createElement("div",{className:"col-sm-6 col-lg-4 mb-4"},e.createElement("div",{className:"card"},e.createElement("svg",{className:"bd-placeholder-img card-img",width:"100%",height:260,xmlns:"http://www.w3.org/2000/svg",role:"img","aria-label":"Placeholder: Card image",preserveAspectRatio:"xMidYMid slice",focusable:"false"},e.createElement("title",null,"Placeholder"),e.createElement("rect",{width:"100%",height:"100%",fill:"#868e96"}),e.createElement("text",{x:"50%",y:"50%",fill:"#dee2e6",dy:".3em"},"Card image"))))))}function g(){return e.createElement("div",null,"Profile")}function v(){const[r,l]=c.exports.useState("dashboard");return e.createElement("div",{className:"container"},e.createElement(u,{setPage:l}),r=="profile"?e.createElement(g,null):e.createElement(E,null))}i.render(e.createElement(e.StrictMode,null,e.createElement(v,null)),document.getElementById("root"));
