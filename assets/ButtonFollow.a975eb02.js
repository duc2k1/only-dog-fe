import{R as t,r as l}from"./vendor.a3abce89.js";import{p as s}from"./grey.61f403c9.js";import{A as a}from"./index.8968a770.js";function m({rounded:e,width:o="100%",height:r}){return t.createElement("img",{src:s,width:o,height:r,className:e?"rounded-circle":""})}function p(){const[e,o]=l.exports.useState("Follow");return l.exports.useContext(a),t.createElement("div",{role:"button",className:e==="Follow"?"p-1":"p-1 text-primary",onClick:()=>{o(e==="Following"?"Follow":"Following")},style:{userSelect:"none"}},e)}export{p as B,m as P};
