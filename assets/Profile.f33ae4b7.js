import{r as l,R as e}from"./vendor.a3abce89.js";import{B as u}from"./ButtonFollow.bd134401.js";import{p as r,S as o}from"./pug.bd66dd81.js";function E(){const[t,a]=l.exports.useState(null),[s,g]=l.exports.useState(""),[m,N]=l.exports.useState(0),d=c=>{c.target.files[0]&&a(c.target.files[0])},i=()=>{console.log("upload")};return e.createElement("div",null,e.createElement("div",{className:"modal fade",id:"modalAvatar",tabIndex:-1,"aria-labelledby":"modalAvatarLabel","aria-hidden":"true"},e.createElement("div",{className:"modal-dialog modal-dialog-centered"},e.createElement("div",{className:"modal-content"},e.createElement("div",{className:"modal-header"},e.createElement("h5",{className:"modal-title",id:"modalAvatarLabel"},"Change avatar"),e.createElement("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})),e.createElement("div",{className:"modal-body"},e.createElement("div",{className:"container"},e.createElement("div",{className:"row"},e.createElement("input",{className:"col-6 col-sm-6 mb-2",type:"file",onChange:d}),e.createElement("div",{className:"text-center col-6 col-sm-6 mb-2"},e.createElement("button",{type:"button",className:"btn btn-outline-dark",onClick:i,style:{width:80}},"Upload")),e.createElement("img",{src:s||"http://via.placeholder.com/500",alt:"firebase-image",className:"col-sm-12 img-fluid mb-2",style:{userSelect:"none"}}),e.createElement("progress",{value:m,max:"100",className:"col-sm-12 mb-2"}),e.createElement("p",null,s&&"Upload success"))))))))}function p(){const[t,a]=l.exports.useState(!1);return e.createElement("div",null,e.createElement("div",{className:"row p-5"},e.createElement("div",{className:"col-md-4 text-center"},e.createElement("img",{src:r,alt:"",width:"200",height:"200",role:"button",style:{objectFit:"cover",userSelect:"none"},"data-bs-toggle":"modal","data-bs-target":"#modalAvatar",onLoad:()=>a(!0),className:t?"rounded-circle":"d-none"}),e.createElement(o,{circle:!0,width:200,height:200,className:t?"d-none":"pt-2"}),e.createElement(E,null)),e.createElement("div",{className:"col-md-8",style:{marginTop:65}},e.createElement("h3",{className:"text-center"},"aaaaaaaaaa"),e.createElement("div",{className:"d-flex justify-content-around"},e.createElement("p",{className:"me-3"},e.createElement("b",null,"111")," posts"),e.createElement("p",{className:"me-3"},e.createElement("b",null,"11")," Followers"),e.createElement("p",{className:"me-3"},e.createElement("b",null,"1")," Following")),e.createElement("div",{className:"text-center"},e.createElement(u,null)))))}function n(){const[t,a]=l.exports.useState(!1);return e.createElement("div",{className:"col-sm-6 col-lg-4 mb-4"},e.createElement("img",{src:r,alt:"Image of user",style:{objectFit:"cover",userSelect:"none"},onLoad:()=>a(!0),className:t?"":"d-none",width:"100%",height:"300"}),e.createElement(o,{height:300,className:t?"d-none":"pt-2"}))}function b(){return e.createElement("main",{className:"py-5"},e.createElement("div",{className:"row","data-masonry":'{"percentPosition": true }'},e.createElement(n,{key:"1"}),e.createElement(n,{key:"2"}),e.createElement(n,{key:"3"}),e.createElement(n,{key:"4"})))}function y({page:t}){return e.createElement("div",{className:t==="profile"?"container":"d-none"},e.createElement(p,null),e.createElement(b,null))}export{y as default};