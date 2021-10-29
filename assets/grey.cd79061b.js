var h=Object.defineProperty,P=Object.defineProperties;var S=Object.getOwnPropertyDescriptors;var c=Object.getOwnPropertySymbols;var u=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable;var q=(A,t,e)=>t in A?h(A,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):A[t]=e,d=(A,t)=>{for(var e in t||(t={}))u.call(t,e)&&q(A,e,t[e]);if(c)for(var e of c(t))b.call(t,e)&&q(A,e,t[e]);return A},j=(A,t)=>P(A,S(t));var X=(A,t)=>{var e={};for(var s in A)u.call(A,s)&&t.indexOf(s)<0&&(e[s]=A[s]);if(A!=null&&c)for(var s of c(A))t.indexOf(s)<0&&b.call(A,s)&&(e[s]=A[s]);return e};import{r as i}from"./vendor.5b6dbeb5.js";import{j as f}from"./index.a46b51a7.js";var m={exports:{}};/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/(function(A){(function(){var t={}.hasOwnProperty;function e(){for(var s=[],n=0;n<arguments.length;n++){var r=arguments[n];if(!!r){var o=typeof r;if(o==="string"||o==="number")s.push(r);else if(Array.isArray(r)){if(r.length){var a=e.apply(null,r);a&&s.push(a)}}else if(o==="object")if(r.toString===Object.prototype.toString)for(var l in r)t.call(r,l)&&r[l]&&s.push(l);else s.push(r.toString())}}return s.join(" ")}A.exports?(e.default=e,A.exports=e):window.classNames=e})()})(m);var K=m.exports;const y=i.exports.createContext({prefixes:{}});function O(A,t){const{prefixes:e}=i.exports.useContext(y);return A||e[t]||t}function G(){const{dir:A}=i.exports.useContext(y);return A==="rtl"}const x=i.exports.forwardRef((l,a)=>{var p=l,{bsPrefix:A,variant:t,animation:e,size:s,as:n="div",className:r}=p,o=X(p,["bsPrefix","variant","animation","size","as","className"]);A=O(A,"spinner");const v=`${A}-${e}`;return f(n,j(d({ref:a},o),{className:K(r,v,s&&`${v}-${s}`,t&&`text-${t}`)}))});x.displayName="Spinner";var z=x;function V(){return f("div",{className:"text-center",children:f(z,{animation:"border",role:"status"})})}var Z="data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAH0BAMAAAA5+MK5AAAAG1BMVEXMzMyWlpacnJyqqqrFxcWxsbGjo6O3t7e+vr6He3KoAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAFfklEQVR4nO3azW/bNhjAYUqWP46m0yY9Wm3a5hh3K7Cj3KQ9x96Qsz1kSI9OBgQ7xu0O/bPHl6Rirk0iy6krZvs9QCwq8gvwBcUPUVYKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAt7jKXy3Kcvf3wfmPjG7WO6314NqVs9ycHPy46B8u1c6enPRs8Zm7srQn11uMblgSVn7syoWUM1d+ssXoho3Dys9deSbljivvbjG6YWHlu1o/Ld77e/ZC69+yScU9+7Dohi31c0tGpI6t6tK11Vxy6PlG3E50wy5c37TG+qn5bNvuajrriTmZ3N9dHxbdsIkOy0M55FLtth5IObX5bCm6YaNgJJrbpjI5zOT2tbVu3z9SPSy6YfOdVdlPTGPdl2nL3qvmzt1edMPy1S3Zc3epuU2fyXA1dNdvBunUj9eTctVSKzpCbkq2utq1YUv+d6EP7clIl6tyP15n4bC9fnR8sqAJ235QsseJ67k3R+UnLJPaalSvEx2dnn7SezP4o5Byy7ehbb+yvcr2U+WUPdY7G0VHp6v7I7Mas9l0fBv2JMW576XL1e1t2nshWT3ZKDo6bf3KrkT3lQxQLqlMBqzc39ZjP2DZ/5uyX6zUj45Oyy/CB8UalZ+Ye7rjB/L60bHxT1ha+mQqM7K6qbz7Qlj51FxYBoN6vejYmMl65+9sap+3El95JQuRcjFy809ln80W87D31oqOTWJ3lLK5jE3Vlc/16389h9aLjszYjcsdmayrK78sh/ONoiPz/lc7AWcyb1X31s5Xe071oiM1NyNV9RgtG4+3Lc/Wi47UhanjGpUf2Xls0+g4SR3XWI9Nwlm9dnSc5Cm7ehWe3XHDrxcdKRmKq5+9Wn7Rull0pOSWrX7ilsnttt229aLjkn354gqyrVK9zzKXx5Vi0+i43Gye2Waq2l0zc9tfOui99aJjU65L7XZq1Z5qak5GwcZMvejY5K6+PZtE1U76hUl7HGZTKzo2/v1Iaqta9f4kNw3aCp9fakXHZql3C/vsJdWueGvWlst2q2aT6OiYJ+6X9olbmqcXvitdfvOu1N3rk2Cvok50dLrlPoudf+9/Q+5GuHGwlq0THZ+Rq6Nbjtz7uwj/7qEdrmXXj45Q52ZzTVX8GqbjT/IgofWjYzQqfxUhPunVb6B6X/0Gyg9gZorb2SA6RtlpHvzAre4v3x4WDQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGxJ4v/+h/7zqevBz3dc+Sr1vjlLtNZqoFTal1PjKD9X6oM+U8lQqXy7Nf3u+tlPd1y5JXX7uXutrnzq2cvis/k4nhbJR9Wdb7+231VfvVNvXqi06JpC+/mhSqZ9ObSeT8zVZPpCdRbmSpD63kyd+9RbJ+6jfZhcqc5Fk3lswKTePvtw0lqM1Z/q9PitSs7s4fRYGjExl3pD9VYFqfcPekOfelq4j2yYpNefHtvAYG74tMiGvcPp4he1b9o3KexhX43N1cRcUufmzwwK0s9t6ledhU89KT/6SXd2/thSN8OcbczhwWwo6UkmcuiXfb2vPrUWKmz19FJ92+rq9fCxpd6XukvTzj7OTFPb/OQQtHo69V/0qbefqm/7upqcPMLUpa+r6eLyRF0VR5KfHFZ9XXX3/Bd96vbEfgYjvHp8iwBJwYzwalmMC9XNDyQBOaxGeNUd+i+GqbtOcaTLeV09vtTX0Fk0XYPGXDZdgcYkB03XAACAhv0DZOEQfKmW0XEAAAAASUVORK5CYII=";export{V as S,G as a,K as c,Z as g,O as u};
