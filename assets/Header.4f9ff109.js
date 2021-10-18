import{R as e,r as t}from"./vendor.1d4aa5a0.js";import{F as f,s as N}from"./index.18382855.js";import{G as p}from"./iconBase.b0f8e610.js";import{d as y,u as L}from"./useUser.108a0623.js";function C({error:a}){return a?e.createElement("div",{className:"alert alert-danger",role:"alert"},a):e.createElement(e.Fragment,null)}function w(a){return p({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"}}]})(a)}function k(a){return p({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M10 11V8l5 4-5 4v-3H1v-2h9zm-7.542 4h2.124A8.003 8.003 0 0 0 20 12 8 8 0 0 0 4.582 9H2.458C3.732 4.943 7.522 2 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10c-4.478 0-8.268-2.943-9.542-7z"}}]}]})(a)}function P(a){return p({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2a9.985 9.985 0 0 1 8 4h-2.71a8 8 0 1 0 .001 12h2.71A9.985 9.985 0 0 1 12 22zm7-6v-3h-8v-2h8V8l5 4-5 4z"}}]}]})(a)}function R(){const{fire:a}=t.exports.useContext(f),[l,n]=t.exports.useState(""),[o,s]=t.exports.useState(""),[d,u]=t.exports.useState(""),[b,m]=t.exports.useState(!1),r=t.exports.useRef(null),g=()=>{console.log("hello")},E=async c=>{c.preventDefault();try{m(!0),await a.auth().signInWithEmailAndPassword(l,o),m(!1),r.current.click()}catch(v){n(""),s(""),u(v.message),m(!1)}};return e.createElement("div",null,e.createElement("button",{style:{border:"none",background:"none"},"data-bs-toggle":"modal","data-bs-target":"#modalLogin",ref:r},e.createElement(k,{size:"30"})),e.createElement("div",{className:"modal fade",id:"modalLogin",tabIndex:-1,"aria-labelledby":"modalLoginLabel","aria-hidden":"true"},e.createElement("div",{className:"modal-dialog"},e.createElement("div",{className:"modal-content"},e.createElement("div",{className:"modal-header"},e.createElement("h5",{className:"modal-title",id:"modalLoginLabel"},"Login"),e.createElement("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})),e.createElement("div",{className:"modal-body"},e.createElement("div",{className:"py-3"},e.createElement("div",{className:"mb-3"},e.createElement("label",{htmlFor:"email",className:"form-label"},"Email"),e.createElement("input",{type:"email",className:"form-control",placeholder:"Email@example.com",onChange:({target:c})=>n(c.value),value:l,minLength:"6",maxLength:"50"})),e.createElement("div",{className:"mb-3"},e.createElement("label",{htmlFor:"password",className:"form-label"},"Password"),e.createElement("input",{type:"password",className:"form-control",placeholder:"Password (min leangth = 6)",onChange:({target:c})=>s(c.value),value:o,minLength:"6",maxLength:"50"})),e.createElement("button",{onClick:E,className:"btn btn-primary me-2"},"Login"),e.createElement("button",{className:"btn btn-outline-primary",onClick:()=>g()},"Login with Google ",e.createElement(w,{className:"mb-1",size:"19"}))),e.createElement(C,{error:d}),b&&e.createElement("div",{className:"text-center"},e.createElement("div",{className:"spinner-border text-dark ",role:"status"})))))))}function M(a){return p({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}},{tag:"circle",attr:{cx:"8.5",cy:"7",r:"4"}},{tag:"line",attr:{x1:"20",y1:"8",x2:"20",y2:"14"}},{tag:"line",attr:{x1:"23",y1:"11",x2:"17",y2:"11"}}]})(a)}function S(){const{fire:a}=t.exports.useContext(f),[l,n]=t.exports.useState(""),[o,s]=t.exports.useState(""),[d,u]=t.exports.useState(""),[b,m]=t.exports.useState(""),[r,g]=t.exports.useState(""),[E,c]=t.exports.useState(!1),v=t.exports.useRef(null),x=async i=>{if(i.preventDefault(),c(!0),await y(l))n(""),g("That name is already taken, please try another."),c(!1);else try{const h=await a.auth().createUserWithEmailAndPassword(o,d);await h.user.updateProfile({displayName:l}),await a.firestore().collection("users").add({userId:h.user.uid,name:l.toLowerCase(),email:o.toLowerCase(),following:[],followers:[],dateCreated:Date.now(),posts:[],avatar:""}),v.current.click(),c(!1)}catch(h){s(""),u(""),m(""),g(h.message),c(!1)}};return e.createElement("div",null,e.createElement("button",{style:{border:"none",background:"none"},"data-bs-toggle":"modal","data-bs-target":"#modalRegister",ref:v},e.createElement(M,{size:"30"})),e.createElement("div",{className:"modal fade",id:"modalRegister",tabIndex:-1,"aria-labelledby":"modalRegisterLabel","aria-hidden":"true"},e.createElement("div",{className:"modal-dialog"},e.createElement("div",{className:"modal-content"},e.createElement("div",{className:"modal-header"},e.createElement("h5",{className:"modal-title",id:"modalRegisterLabel"},"Register"),e.createElement("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})),e.createElement("div",{className:"modal-body"},e.createElement("div",{className:"py-3"},e.createElement("div",{className:"mb-3"},e.createElement("label",{htmlFor:"name",className:"form-label"},"Name"),e.createElement("input",{type:"text",className:"form-control",placeholder:"Anri Okita",onChange:({target:i})=>n(i.value),value:l,minLength:"6",maxLength:"50"})),e.createElement("div",{className:"mb-3"},e.createElement("label",{htmlFor:"email",className:"form-label"},"Email"),e.createElement("input",{type:"email",className:"form-control",placeholder:"Email@example.com",onChange:({target:i})=>s(i.value),value:o,minLength:"6",maxLength:"50"})),e.createElement("div",{className:"mb-3"},e.createElement("label",{htmlFor:"password",className:"form-label"},"Password"),e.createElement("input",{type:"password",className:"form-control",placeholder:"Password (min leangth = 6, max length = 50)",onChange:({target:i})=>u(i.value),value:d,minLength:"6",maxLength:"50"})),e.createElement("div",{className:"mb-3"},e.createElement("label",{htmlFor:"confirmPassword",className:"form-label"},"Confirm Password"),e.createElement("input",{type:"password",className:"form-control",placeholder:"Confirm Password",onChange:({target:i})=>m(i.value),value:b,pattern:d})),e.createElement("button",{onClick:x,className:"btn btn-primary me-2"},"Register")),e.createElement(C,{error:r}),E&&e.createElement("div",{className:"text-center"},e.createElement("div",{className:"spinner-border text-dark ",role:"status"})))))))}var A="/assets/logo.7e8cfe4c.svg";function z(a){return p({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",stroke:"#000",strokeWidth:"2",d:"M12,22 C17.5228475,22 22,17.5228475 22,12 C22,6.4771525 17.5228475,2 12,2 C6.4771525,2 2,6.4771525 2,12 C2,17.5228475 6.4771525,22 12,22 Z M12,18 L12,6 M6,12 L18,12"}}]})(a)}function U(){const[a,l]=t.exports.useState(null),[n,o]=t.exports.useState(""),[s,d]=t.exports.useState(0),u=m=>{m.target.files[0]&&l(m.target.files[0])},b=()=>{N.ref(`images/${a.name}`).put(a).on("state_changed",r=>{const g=Math.round(r.bytesTransferred/r.totalBytes*100);d(g)},r=>{console.log(r)},()=>{N.ref("images").child(a.name).getDownloadURL().then(r=>{o(r)})})};return e.createElement("div",null,e.createElement(z,{style:{cursor:"pointer"},size:"30","data-bs-toggle":"modal","data-bs-target":"#modalAddPost",className:"me-2"}),e.createElement("div",{className:"modal fade",id:"modalAddPost",tabIndex:-1,"aria-labelledby":"modalAddPostLabel","aria-hidden":"true"},e.createElement("div",{className:"modal-dialog"},e.createElement("div",{className:"modal-content"},e.createElement("div",{className:"modal-header"},e.createElement("h5",{className:"modal-title",id:"modalAddPostLabel"},"Post"),e.createElement("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})),e.createElement("div",{className:"modal-body"},e.createElement("div",{className:"container"},e.createElement("div",{className:"row"},e.createElement("input",{className:"col-6 col-sm-6 mb-2",type:"file",onChange:u}),e.createElement("div",{className:"text-center col-6 col-sm-6 mb-2"},e.createElement("button",{type:"button",className:"btn btn-primary",onClick:b,style:{width:80}},"Upload")),e.createElement("img",{src:n||"http://via.placeholder.com/500",alt:"firebase-image",className:"col-sm-12 img-fluid mb-2"}),e.createElement("progress",{value:s,max:"100",className:"col-sm-12 mb-2"}),e.createElement("p",null,n&&"Upload success"))))))))}const F=t.exports.createContext(null);var B=F;function H(a){return p({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none"},child:[{tag:"path",attr:{fillRule:"evenodd",clipRule:"evenodd",d:"M16 9C16 11.2091 14.2091 13 12 13C9.79086 13 8 11.2091 8 9C8 6.79086 9.79086 5 12 5C14.2091 5 16 6.79086 16 9ZM14 9C14 10.1046 13.1046 11 12 11C10.8954 11 10 10.1046 10 9C10 7.89543 10.8954 7 12 7C13.1046 7 14 7.89543 14 9Z",fill:"currentColor"}},{tag:"path",attr:{fillRule:"evenodd",clipRule:"evenodd",d:"M12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1ZM3 12C3 14.0902 3.71255 16.014 4.90798 17.5417C6.55245 15.3889 9.14627 14 12.0645 14C14.9448 14 17.5092 15.3531 19.1565 17.4583C20.313 15.9443 21 14.0524 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12ZM12 21C9.84977 21 7.87565 20.2459 6.32767 18.9878C7.59352 17.1812 9.69106 16 12.0645 16C14.4084 16 16.4833 17.1521 17.7538 18.9209C16.1939 20.2191 14.1881 21 12 21Z",fill:"currentColor"}}]})(a)}function T({setPage:a,user:l}){const{user:n,setActiveUser:o}=L(l==null?void 0:l.uid),{fire:s}=t.exports.useContext(f);return e.createElement(B.Provider,{value:{user:n,setActiveUser:o}},e.createElement("nav",{style:{position:"sticky",top:0,zIndex:1051},className:"navbar navbar-expand navbar-light"},e.createElement("div",{className:"container"},e.createElement("img",{style:{cursor:"pointer"},src:A,alt:"Logo OnlyDog",width:200,onClick:()=>{a("dashboard")}}),e.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},e.createElement("span",{className:"navbar-toggler-icon"})),e.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},e.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"}),e.createElement("div",{className:`${s.auth().currentUser?"":"d-none"} d-flex`},e.createElement(U,null),e.createElement(H,{style:{cursor:"pointer"},size:"30",className:"me-4",onClick:()=>{a("profile")}}),e.createElement(P,{style:{cursor:"pointer"},size:"30",className:"me-2",onClick:()=>s.auth().signOut()})),e.createElement("div",{className:`${s.auth().currentUser?"d-none":""} d-flex`},e.createElement("div",{className:"nav-item me-2 mt-2"},e.createElement(R,null)),e.createElement("div",{className:"nav-item me-2 mt-2"},e.createElement(S,null)))))))}export{T as default};
