import{r as t,R as e}from"./vendor.a3abce89.js";import{P as d,B as v}from"./ButtonFollow.89b50ebe.js";import{p as N}from"./grey.61f403c9.js";import{m as l}from"./Modal.a07a7908.js";import"./index.7801d49c.js";var b=t.exports.memo(function(){const[o,r]=t.exports.useState(null),[s,w]=t.exports.useState("");t.exports.useState(0);const[u,c]=t.exports.useState(!1),[m,p]=t.exports.useState(!1),E=()=>c(!1),h=()=>c(!0),g=i=>{i.target.files[0]&&r(i.target.files[0])},f=()=>{console.log("upload")};return e.createElement(e.Fragment,null,e.createElement("img",{src:"https://picsum.photos/1000",alt:"",width:"200",height:"200",role:"button",style:{objectFit:"cover",userSelect:"none"},onClick:()=>h(),onLoad:()=>p(!0),className:m?"rounded-circle":"d-none"}),!m&&e.createElement(d,{rounded:!0,width:200,height:200}),e.createElement(l,{show:u,onHide:E},e.createElement(l.Header,{closeButton:!0},e.createElement(l.Title,null,"Change avatar")),e.createElement(l.Body,null,e.createElement("div",{className:"container"},e.createElement("div",{className:"row"},e.createElement("small",null,"Max size: 0.5MB"),e.createElement("input",{className:"col-6 col-sm-6 mb-2",type:"file",onChange:g,accept:"image/png, image/jpg, image/jpeg, image/bmp"}),e.createElement("div",{className:"text-center col-6 col-sm-6 mb-2"},e.createElement("button",{type:"button",className:"btn btn-outline-dark",onClick:f,style:{width:80}},"Upload")),e.createElement("img",{src:s||N,alt:"firebase-image",className:"col-sm-12 img-fluid mb-2",style:{userSelect:"none"}}),e.createElement("p",null,s&&"Upload success"))))))}),x=t.exports.memo(function(){return e.createElement("div",null,e.createElement("div",{className:"row p-5"},e.createElement("div",{className:"col-md-4 text-center"},e.createElement(b,null)),e.createElement("div",{className:"col-md-8",style:{marginTop:65}},e.createElement("h3",{className:"text-center"},"aaaaaaaaaa"),e.createElement("div",{className:"d-flex justify-content-around"},e.createElement("p",{className:"me-3"},e.createElement("b",null,"111")," posts"),e.createElement("p",{className:"me-3"},e.createElement("b",null,"11")," Followers"),e.createElement("p",{className:"me-3"},e.createElement("b",null,"1")," Following")),e.createElement("div",{className:"text-center"},e.createElement(v,null)))))}),n=t.exports.memo(function(){const[o,r]=t.exports.useState(!1);return e.createElement("div",{className:"col-sm-6 col-lg-4 mb-4"},e.createElement("img",{src:"https://picsum.photos/1000",alt:"Image of user",style:{objectFit:"cover",userSelect:"none"},onLoad:()=>r(!0),className:o?"":"d-none",width:"100%",height:"300"}),!o&&e.createElement(d,{height:300}))}),y=t.exports.memo(function(){return e.createElement("main",{className:"py-5"},e.createElement("div",{className:"row","data-masonry":'{"percentPosition": true }'},e.createElement(n,{key:"1"}),e.createElement(n,{key:"2"}),e.createElement(n,{key:"3"}),e.createElement(n,{key:"4"})))}),B=t.exports.memo(function(){return e.createElement("div",{className:"container"},e.createElement(x,null),e.createElement(y,null))});export{B as default};
