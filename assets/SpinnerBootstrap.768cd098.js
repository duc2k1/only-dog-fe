var C=Object.defineProperty,b=Object.defineProperties;var y=Object.getOwnPropertyDescriptors;var f=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable;var v=(s,e,t)=>e in s?C(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,d=(s,e)=>{for(var t in e||(e={}))x.call(e,t)&&v(s,t,e[t]);if(f)for(var t of f(e))m.call(e,t)&&v(s,t,e[t]);return s},h=(s,e)=>b(s,y(e));var S=(s,e)=>{var t={};for(var n in s)x.call(s,n)&&e.indexOf(n)<0&&(t[n]=s[n]);if(s!=null&&f)for(var n of f(s))e.indexOf(n)<0&&m.call(s,n)&&(t[n]=s[n]);return t};import{r as u}from"./vendor.459d2761.js";import{j}from"./index.066526fd.js";var $={exports:{}};/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/(function(s){(function(){var e={}.hasOwnProperty;function t(){for(var n=[],o=0;o<arguments.length;o++){var r=arguments[o];if(!!r){var i=typeof r;if(i==="string"||i==="number")n.push(r);else if(Array.isArray(r)){if(r.length){var a=t.apply(null,r);a&&n.push(a)}}else if(i==="object")if(r.toString===Object.prototype.toString)for(var p in r)e.call(r,p)&&r[p]&&n.push(p);else n.push(r.toString())}}return n.join(" ")}s.exports?(t.default=t,s.exports=t):window.classNames=t})()})($);var O=$.exports;const w=u.exports.createContext({prefixes:{}});function A(s,e){const{prefixes:t}=u.exports.useContext(w);return s||t[e]||e}function q(){const{dir:s}=u.exports.useContext(w);return s==="rtl"}const N=u.exports.forwardRef((p,a)=>{var c=p,{bsPrefix:s,variant:e,animation:t,size:n,as:o="div",className:r}=c,i=S(c,["bsPrefix","variant","animation","size","as","className"]);s=A(s,"spinner");const l=`${s}-${t}`;return j(o,h(d({ref:a},i),{className:O(r,l,n&&`${l}-${n}`,e&&`text-${e}`)}))});N.displayName="Spinner";var B=N;function D(){return j(B,{animation:"border",role:"status"})}export{D as S,q as a,O as c,A as u};