import{R as l}from"./vendor.a7ce470e.js";var s={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},d=l.createContext&&l.createContext(s),o=function(){return o=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++){n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o.apply(this,arguments)},g=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t};function f(e){return e&&e.map(function(n,t){return l.createElement(n.tag,o({key:t},n.attr),f(n.child))})}function y(e){return function(n){return l.createElement(h,o({attr:o({},e.attr)},n),f(e.child))}}function h(e){var n=function(t){var r=e.attr,a=e.size,i=e.title,m=g(e,["attr","size","title"]),u=a||t.size||"1em",c;return t.className&&(c=t.className),e.className&&(c=(c?c+" ":"")+e.className),l.createElement("svg",o({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,r,m,{className:c,style:o(o({color:e.color||t.color},t.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),i&&l.createElement("title",null,i),e.children)};return d!==void 0?l.createElement(d.Consumer,null,function(t){return n(t)}):n(s)}function v(e){return y({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M868 545.5L536.1 163a31.96 31.96 0 0 0-48.3 0L156 545.5a7.97 7.97 0 0 0 6 13.2h81c4.6 0 9-2 12.1-5.5L474 300.9V864c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V300.9l218.9 252.3c3 3.5 7.4 5.5 12.1 5.5h81c6.8 0 10.5-8 6-13.2z"}}]})(e)}function O(){const e=()=>{document.body.scrollTop=0,document.documentElement.scrollTop=0};return l.createElement("div",{onClick:()=>e(),type:"button",className:"btn btn-outline-primary btn-floating btn-lg",id:"btn-back-to-top",style:{position:"fixed",bottom:20,right:20,borderRadius:"50%"}},l.createElement(v,null))}export{O as default};
