import{r as s,L as d}from"./vendor.e39436fc.js";import{P as i,B as c}from"./ButtonFollow.e214de77.js";import{t as m}from"./toTop.4c4a9307.js";import{a as l,j as e}from"./index.7139ef2c.js";import{g as u,N as p}from"./NotFound.e9dd595f.js";import"./grey.19af5ccb.js";var h=s.exports.memo(function({userName:t}){const[r,n]=s.exports.useState(!1);return l("div",{className:"col-4 col-md-2 text-center mb-3",children:[e(d,{to:"/profile?user_id=oi23osdifhsdi2342342",onClick:()=>m(),children:e("img",{src:"https://picsum.photos/1000",alt:"Image user find",width:"80",height:"80",role:"button",style:{objectFit:"cover",userSelect:"none"},onLoad:()=>n(!0),className:r?"rounded-circle":"d-none"})}),!r&&e(i,{rounded:!0,width:80,height:80}),e("br",{}),e("small",{children:t}),e("br",{}),e(c,{})]})}),f=s.exports.memo(function(){const t=u("user_name"),[r,n]=s.exports.useState([]);return s.exports.useEffect(()=>{fetch("https://only-dog-be.herokuapp.com/users/find_by_name/"+t).then(o=>o.json()).then(o=>{n(o.users)}).catch(o=>console.log(o))},[t]),e("div",{className:"container mt-4",children:e("div",{className:"row",children:r.length&&t?r.map(o=>e(h,{userName:o.userName},o._id)):e(p,{})})})}),v=s.exports.memo(function(){return e(f,{})});export{v as default};