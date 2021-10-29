import{r as l,L as S}from"./vendor.5b6dbeb5.js";import{P as w,B as C,g as j}from"./getData.26a6e3cd.js";import{t as y}from"./toTop.4c4a9307.js";import{a as p,j as n,b,A as L,F as P}from"./index.a46b51a7.js";import{G as T}from"./iconBase.adc6a166.js";import"./jwt-decode.esm.fd9c51c6.js";import{s as B}from"./splitDate.9d8fdbe2.js";import{g as F,S as E}from"./grey.cd79061b.js";var O=l.exports.memo(function({userName:o,userId:t}){const[e,r]=l.exports.useState(!1);return p("div",{className:"col-4 col-md-2 text-center mb-3",children:[n(S,{to:"/profile?user_id="+t,onClick:()=>y(),children:n("img",{src:"https://picsum.photos/1000",alt:"",width:"60",height:"60",role:"button",style:{objectFit:"cover",userSelect:"none"},onLoad:()=>r(!0),className:e?"rounded-circle mb-2":"d-none"})}),!e&&n(w,{rounded:!0,width:60,height:60}),n("br",{}),n("small",{children:n("b",{children:o})}),n("br",{}),n(C,{})]})});l.exports.memo(function({openModal:o,setOpenModal:t}){var i;const[e,r]=l.exports.useState([]);return l.exports.useEffect(()=>{fetch("http://localhost:5500/users/get_all").then(a=>a.json()).then(a=>r(a)).catch(a=>console.log(a))},[]),n("div",{className:"container mt-4",children:n("div",{className:"row",children:(i=e==null?void 0:e.users)==null?void 0:i.slice(0,6).map(a=>n(O,{userName:a.userName,userId:a._id,openModal:o,setOpenModal:t},a._id))})})});function _(s){return T({tag:"svg",attr:{version:"1.1",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M13.707 6.293l-5-5c-0.39-0.391-1.024-0.391-1.414 0l-5 5c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l3.293-3.293v9.586c0 0.552 0.448 1 1 1s1-0.448 1-1v-9.586l3.293 3.293c0.195 0.195 0.451 0.293 0.707 0.293s0.512-0.098 0.707-0.293c0.391-0.391 0.391-1.024 0-1.414z"}}]})(s)}function D(s){return T({tag:"svg",attr:{version:"1.1",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M13.707 9.707l-5 5c-0.39 0.391-1.024 0.391-1.414 0l-5-5c-0.391-0.391-0.391-1.024 0-1.414s1.024-0.391 1.414 0l3.293 3.293v-9.586c0-0.552 0.448-1 1-1s1 0.448 1 1v9.586l3.293-3.293c0.195-0.195 0.451-0.293 0.707-0.293s0.512 0.098 0.707 0.293c0.391 0.391 0.391 1.024 0 1.414z"}}]})(s)}var R=l.exports.memo(function({like:o,setLike:t,dislike:e,setDislike:r,numberOfDislike:i}){const{setShowModalLogin:a}=l.exports.useContext(b),{stateAccessToken:h}=l.exports.useContext(L),u=()=>{h?(r(!e),o&&t(!o)):a(!0)};return p("div",{onClick:()=>u(),children:[n("small",{className:e?"text-danger":"text-muted",children:i+e}),n(D,{size:"25",role:"button",className:e?"d-none":"text-muted mb-2"}),n(D,{size:"25",role:"button",className:e?"text-danger mb-2":"d-none"})]})}),H=l.exports.memo(function({like:o,setLike:t,dislike:e,setDislike:r,numberOfLike:i}){const{setShowModalLogin:a}=l.exports.useContext(b),{stateAccessToken:h}=l.exports.useContext(L),u=()=>{h?(t(!o),e&&r(!e)):a(!0)};return l.exports.useEffect(()=>{fetch().then()},[o]),p("div",{onClick:()=>u(),children:[n("small",{className:o?"text-primary":"text-muted",children:i+o}),n(_,{size:"25",role:"button",className:o?"d-none":"text-muted",style:{marginBottom:10}}),n(_,{size:"25",role:"button",className:o?"text-primary":"d-none",style:{marginBottom:10}})]})});l.exports.memo(function({dataPost:o}){const[t,e]=l.exports.useState(!1),[r,i]=l.exports.useState(!1),[a,h]=l.exports.useState(o.likes.length),[u,f]=l.exports.useState(o.dislikes.length);return l.exports.useEffect(()=>{},[]),p("div",{className:"d-flex justify-content-around m-2",style:{userSelect:"none"},children:[n(H,{like:t,setLike:e,dislike:r,setDislike:i,numberOfLike:a,setNumberOfLike:h}),n(R,{like:t,setLike:e,dislike:r,setDislike:i,numberOfDislike:u})]})});l.exports.memo(function({dataPost:o}){const t=o==null?void 0:o.userOb,[e,r]=l.exports.useState(!1);return p("div",{className:"d-flex",children:[n(S,{to:"/profile?user_id="+t._id,onClick:()=>y(),children:n("img",{src:t.pathAvatar,alt:"Avatar",width:"40",height:"40",role:"button",style:{objectFit:"cover",userSelect:"none"},onLoad:()=>r(!0),className:e?"rounded-circle me-1 my-1":"d-none"})}),!e&&n("div",{className:"me-1 my-1",children:n(w,{rounded:!0,width:40,height:40})}),p("div",{children:[n("b",{children:n("small",{children:t.userName})}),n("br",{}),n("small",{className:"text-muted",children:B(o.createdAt)})]})]})});var k=l.exports.memo(function({dataPost:o}){const[t,e]=l.exports.useState(!1);return p(P,{children:[n("img",{width:"100%",height:"300",src:o==null?void 0:o.pathImage,alt:"Image Post",style:{objectFit:"cover",userSelect:"none"},onLoad:()=>e(!0),className:t?"":"d-none"}),!t&&n("img",{src:F,height:300,width:"100%"})]})}),I=l.exports.memo(function({dataPost:o}){return n("div",{className:"col-sm-6 col-lg-4 mb-4",children:n(k,{dataPost:o})})}),v=function(s,o){return v=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])},v(s,o)};function U(s,o){v(s,o);function t(){this.constructor=s}s.prototype=o===null?Object.create(o):(t.prototype=o.prototype,new t)}var m=function(){return m=Object.assign||function(o){for(var t,e=1,r=arguments.length;e<r;e++){t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(o[i]=t[i])}return o},m.apply(this,arguments)};function z(s,o,t,e){var r,i=!1,a=0;function h(){r&&clearTimeout(r)}function u(){h(),i=!0}typeof o!="boolean"&&(e=t,t=o,o=void 0);function f(){var c=this,x=Date.now()-a,M=arguments;if(i)return;function g(){a=Date.now(),t.apply(c,M)}function A(){r=void 0}e&&!r&&g(),h(),e===void 0&&x>s?g():o!==!0&&(r=setTimeout(e?A:g,e===void 0?s-x:s))}return f.cancel=u,f}var d={Pixel:"Pixel",Percent:"Percent"},N={unit:d.Percent,value:.8};function Y(s){return typeof s=="number"?{unit:d.Percent,value:s*100}:typeof s=="string"?s.match(/^(\d*(\.\d+)?)px$/)?{unit:d.Pixel,value:parseFloat(s)}:s.match(/^(\d*(\.\d+)?)%$/)?{unit:d.Percent,value:parseFloat(s)}:(console.warn('scrollThreshold format is invalid. Valid formats: "120px", "50%"...'),N):(console.warn("scrollThreshold should be string or number"),N)}var G=function(s){U(o,s);function o(t){var e=s.call(this,t)||this;return e.lastScrollTop=0,e.actionTriggered=!1,e.startY=0,e.currentY=0,e.dragging=!1,e.maxPullDownDistance=0,e.getScrollableTarget=function(){return e.props.scrollableTarget instanceof HTMLElement?e.props.scrollableTarget:typeof e.props.scrollableTarget=="string"?document.getElementById(e.props.scrollableTarget):(e.props.scrollableTarget===null&&console.warn(`You are trying to pass scrollableTarget but it is null. This might
        happen because the element may not have been added to DOM yet.
        See https://github.com/ankeetmaini/react-infinite-scroll-component/issues/59 for more info.
      `),null)},e.onStart=function(r){e.lastScrollTop||(e.dragging=!0,r instanceof MouseEvent?e.startY=r.pageY:r instanceof TouchEvent&&(e.startY=r.touches[0].pageY),e.currentY=e.startY,e._infScroll&&(e._infScroll.style.willChange="transform",e._infScroll.style.transition="transform 0.2s cubic-bezier(0,0,0.31,1)"))},e.onMove=function(r){!e.dragging||(r instanceof MouseEvent?e.currentY=r.pageY:r instanceof TouchEvent&&(e.currentY=r.touches[0].pageY),!(e.currentY<e.startY)&&(e.currentY-e.startY>=Number(e.props.pullDownToRefreshThreshold)&&e.setState({pullToRefreshThresholdBreached:!0}),!(e.currentY-e.startY>e.maxPullDownDistance*1.5)&&e._infScroll&&(e._infScroll.style.overflow="visible",e._infScroll.style.transform="translate3d(0px, "+(e.currentY-e.startY)+"px, 0px)")))},e.onEnd=function(){e.startY=0,e.currentY=0,e.dragging=!1,e.state.pullToRefreshThresholdBreached&&(e.props.refreshFunction&&e.props.refreshFunction(),e.setState({pullToRefreshThresholdBreached:!1})),requestAnimationFrame(function(){e._infScroll&&(e._infScroll.style.overflow="auto",e._infScroll.style.transform="none",e._infScroll.style.willChange="unset")})},e.onScrollListener=function(r){typeof e.props.onScroll=="function"&&setTimeout(function(){return e.props.onScroll&&e.props.onScroll(r)},0);var i=e.props.height||e._scrollableNode?r.target:document.documentElement.scrollTop?document.documentElement:document.body;if(!e.actionTriggered){var a=e.props.inverse?e.isElementAtTop(i,e.props.scrollThreshold):e.isElementAtBottom(i,e.props.scrollThreshold);a&&e.props.hasMore&&(e.actionTriggered=!0,e.setState({showLoader:!0}),e.props.next&&e.props.next()),e.lastScrollTop=i.scrollTop}},e.state={showLoader:!1,pullToRefreshThresholdBreached:!1,prevDataLength:t.dataLength},e.throttledOnScrollListener=z(150,e.onScrollListener).bind(e),e.onStart=e.onStart.bind(e),e.onMove=e.onMove.bind(e),e.onEnd=e.onEnd.bind(e),e}return o.prototype.componentDidMount=function(){if(typeof this.props.dataLength=="undefined")throw new Error('mandatory prop "dataLength" is missing. The prop is needed when loading more content. Check README.md for usage');if(this._scrollableNode=this.getScrollableTarget(),this.el=this.props.height?this._infScroll:this._scrollableNode||window,this.el&&this.el.addEventListener("scroll",this.throttledOnScrollListener),typeof this.props.initialScrollY=="number"&&this.el&&this.el instanceof HTMLElement&&this.el.scrollHeight>this.props.initialScrollY&&this.el.scrollTo(0,this.props.initialScrollY),this.props.pullDownToRefresh&&this.el&&(this.el.addEventListener("touchstart",this.onStart),this.el.addEventListener("touchmove",this.onMove),this.el.addEventListener("touchend",this.onEnd),this.el.addEventListener("mousedown",this.onStart),this.el.addEventListener("mousemove",this.onMove),this.el.addEventListener("mouseup",this.onEnd),this.maxPullDownDistance=this._pullDown&&this._pullDown.firstChild&&this._pullDown.firstChild.getBoundingClientRect().height||0,this.forceUpdate(),typeof this.props.refreshFunction!="function"))throw new Error(`Mandatory prop "refreshFunction" missing.
          Pull Down To Refresh functionality will not work
          as expected. Check README.md for usage'`)},o.prototype.componentWillUnmount=function(){this.el&&(this.el.removeEventListener("scroll",this.throttledOnScrollListener),this.props.pullDownToRefresh&&(this.el.removeEventListener("touchstart",this.onStart),this.el.removeEventListener("touchmove",this.onMove),this.el.removeEventListener("touchend",this.onEnd),this.el.removeEventListener("mousedown",this.onStart),this.el.removeEventListener("mousemove",this.onMove),this.el.removeEventListener("mouseup",this.onEnd)))},o.prototype.componentDidUpdate=function(t){this.props.dataLength!==t.dataLength&&(this.actionTriggered=!1,this.setState({showLoader:!1}))},o.getDerivedStateFromProps=function(t,e){var r=t.dataLength!==e.prevDataLength;return r?m(m({},e),{prevDataLength:t.dataLength}):null},o.prototype.isElementAtTop=function(t,e){e===void 0&&(e=.8);var r=t===document.body||t===document.documentElement?window.screen.availHeight:t.clientHeight,i=Y(e);return i.unit===d.Pixel?t.scrollTop<=i.value+r-t.scrollHeight+1:t.scrollTop<=i.value/100+r-t.scrollHeight+1},o.prototype.isElementAtBottom=function(t,e){e===void 0&&(e=.8);var r=t===document.body||t===document.documentElement?window.screen.availHeight:t.clientHeight,i=Y(e);return i.unit===d.Pixel?t.scrollTop+r>=t.scrollHeight-i.value:t.scrollTop+r>=i.value/100*t.scrollHeight},o.prototype.render=function(){var t=this,e=m({height:this.props.height||"auto",overflow:"auto",WebkitOverflowScrolling:"touch"},this.props.style),r=this.props.hasChildren||!!(this.props.children&&this.props.children instanceof Array&&this.props.children.length),i=this.props.pullDownToRefresh&&this.props.height?{overflow:"auto"}:{};return n("div",{style:i,className:"infinite-scroll-component__outerdiv",children:p("div",{className:"infinite-scroll-component "+(this.props.className||""),ref:function(a){return t._infScroll=a},style:e,children:[this.props.pullDownToRefresh&&n("div",{style:{position:"relative"},ref:function(a){return t._pullDown=a},children:n("div",{style:{position:"absolute",left:0,right:0,top:-1*this.maxPullDownDistance},children:this.state.pullToRefreshThresholdBreached?this.props.releaseToRefreshContent:this.props.pullDownToRefreshContent})}),this.props.children,!this.state.showLoader&&!r&&this.props.hasMore&&this.props.loader,this.state.showLoader&&this.props.hasMore&&this.props.loader,!this.props.hasMore&&this.props.endMessage]})})},o}(l.exports.Component),$=G;const W="6";var te=l.exports.memo(function(){const[o,t]=l.exports.useState([]),[e,r]=l.exports.useState([]),[i,a]=l.exports.useState(!0),[h,u]=l.exports.useState(!0),f=()=>{if(e.length>=o.length){a(!1);return}setTimeout(()=>{r(o.slice(0,e.length+6))},1e3)};return l.exports.useEffect(()=>{j("/posts/get_all").then(c=>c.json()).then(c=>{t(c.posts),r(c.posts.slice(0,W)),u(!1)}).catch(c=>console.log(c))},[]),h?n(E,{}):n("div",{children:n("main",{className:"container",children:n($,{dataLength:e.length,next:()=>f(),hasMore:i,loader:n(E,{}),className:"row","data-masonry":'{"percentPosition": true }',style:{overflowY:"hidden"},children:e.map(c=>n(I,{dataPost:c},c._id))})})})});export{te as default};
