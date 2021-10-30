import{r as i,L as D}from"./vendor.ba3e1fed.js";import{g as _,S as T,a as I}from"./getUserIdFromAccessToken.54599d96.js";import{a as d,j as r,A as y,b as N,F as k}from"./index.85e9903c.js";import{P as A,B as P,g as b}from"./getData.b0f8a1d8.js";import{G as Y}from"./iconBase.8b1f90d8.js";import{s as H}from"./splitDate.9d8fdbe2.js";var R=i.exports.memo(function({userName:s,userId:t}){const[e,o]=i.exports.useState(!1);return d("div",{className:"col-4 col-md-2 text-center mb-3",children:[r(D,{to:"/profile?user_id="+t,children:r("img",{src:"https://picsum.photos/1000",alt:"",width:"60",height:"60",role:"button",style:{objectFit:"cover",userSelect:"none"},onLoad:()=>o(!0),className:e?"rounded-circle mb-2":"d-none"})}),!e&&r(A,{rounded:!0,width:60,height:60}),r("br",{}),r("small",{children:r("b",{children:s})}),r("br",{}),r(P,{userIdBeFollow:t})]})}),O=i.exports.memo(function({openModal:s,setOpenModal:t}){const[e,o]=i.exports.useState([]),[l,u]=i.exports.useState(!0),{stateAccessToken:h}=i.exports.useContext(y);return i.exports.useEffect(()=>{h?b("/users/get_all").then(a=>a.json()).then(a=>{const f=_(h),m=a.users.find(p=>p._id===f),v=a.users.filter(p=>!m.followings.includes(p._id)&&f!==p._id);o(v),u(!1)}).catch(a=>console.log(a)):b("/users/get_all").then(a=>a.json()).then(a=>{o(a.users),u(!1)}).catch(a=>console.log(a))},[]),l?r(T,{}):r("div",{className:"container mt-4",children:r("div",{className:"row",children:e==null?void 0:e.slice(0,6).map(a=>r(R,{userName:a.userName,userId:a._id,openModal:s,setOpenModal:t},a._id))})})});function M(n){return Y({tag:"svg",attr:{version:"1.1",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M13.707 6.293l-5-5c-0.39-0.391-1.024-0.391-1.414 0l-5 5c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l3.293-3.293v9.586c0 0.552 0.448 1 1 1s1-0.448 1-1v-9.586l3.293 3.293c0.195 0.195 0.451 0.293 0.707 0.293s0.512-0.098 0.707-0.293c0.391-0.391 0.391-1.024 0-1.414z"}}]})(n)}function C(n){return Y({tag:"svg",attr:{version:"1.1",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M13.707 9.707l-5 5c-0.39 0.391-1.024 0.391-1.414 0l-5-5c-0.391-0.391-0.391-1.024 0-1.414s1.024-0.391 1.414 0l3.293 3.293v-9.586c0-0.552 0.448-1 1-1s1 0.448 1 1v9.586l3.293-3.293c0.195-0.195 0.451-0.293 0.707-0.293s0.512 0.098 0.707 0.293c0.391 0.391 0.391 1.024 0 1.414z"}}]})(n)}var U=i.exports.memo(function({like:s,setLike:t,dislike:e,setDislike:o,numberOfDislike:l}){const{setShowModalLogin:u}=i.exports.useContext(N),{stateAccessToken:h}=i.exports.useContext(y),a=()=>{h?(o(!e),s&&t(!s)):u(!0)};return d("div",{onClick:()=>a(),children:[r("small",{className:e?"text-danger":"text-muted",children:l+e}),r(C,{size:"25",role:"button",className:e?"d-none":"text-muted mb-2"}),r(C,{size:"25",role:"button",className:e?"text-danger mb-2":"d-none"})]})}),z=i.exports.memo(function({like:s,setLike:t,dislike:e,setDislike:o,numberOfLike:l}){const{setShowModalLogin:u}=i.exports.useContext(N),{stateAccessToken:h}=i.exports.useContext(y),a=()=>{h?(t(!s),e&&o(!e)):u(!0)};return d("div",{onClick:()=>a(),children:[r("small",{className:s?"text-primary":"text-muted",children:l+s}),r(M,{size:"25",role:"button",className:s?"d-none":"text-muted",style:{marginBottom:10}}),r(M,{size:"25",role:"button",className:s?"text-primary":"d-none",style:{marginBottom:10}})]})});i.exports.memo(function({dataPost:s}){const[t,e]=i.exports.useState(!1),[o,l]=i.exports.useState(!1),[u,h]=i.exports.useState(s.likes.length),[a,f]=i.exports.useState(s.dislikes.length);return i.exports.useEffect(()=>{},[]),d("div",{className:"d-flex justify-content-around m-2",style:{userSelect:"none"},children:[r(z,{like:t,setLike:e,dislike:o,setDislike:l,numberOfLike:u,setNumberOfLike:h}),r(U,{like:t,setLike:e,dislike:o,setDislike:l,numberOfDislike:a})]})});var G=i.exports.memo(function({dataPost:s}){const t=s==null?void 0:s.user,[e,o]=i.exports.useState(!1);return d("div",{className:"d-flex",children:[r(D,{to:"/profile?user_id="+t._id,children:r("img",{src:t.pathAvatar,alt:"Avatar",width:"40",height:"40",role:"button",style:{objectFit:"cover",userSelect:"none"},onLoad:()=>o(!0),className:e?"rounded-circle me-1 my-1":"d-none"})}),!e&&r("div",{className:"me-1 my-1",children:r(A,{rounded:!0,width:40,height:40})}),d("div",{children:[r("b",{children:r("small",{children:t.userName})}),r("br",{}),r("small",{className:"text-muted",children:H(s.createdAt)})]})]})}),$=i.exports.memo(function({dataPost:s}){const[t,e]=i.exports.useState(!1);return d(k,{children:[r("img",{width:"100%",height:"300",src:"https://only-dog-be.azurewebsites.net"+(s==null?void 0:s.pathImage),alt:"Image Post",style:{objectFit:"cover",userSelect:"none"},onLoad:()=>e(!0),className:t?"":"d-none"}),!t&&r("img",{src:I,height:300,width:"100%"})]})}),W=i.exports.memo(function({dataPost:s}){return d("div",{className:"col-sm-6 col-lg-4 mb-4",children:[r(G,{dataPost:s}),r($,{dataPost:s})]})}),E=function(n,s){return E=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])},E(n,s)};function q(n,s){E(n,s);function t(){this.constructor=n}n.prototype=s===null?Object.create(s):(t.prototype=s.prototype,new t)}var w=function(){return w=Object.assign||function(s){for(var t,e=1,o=arguments.length;e<o;e++){t=arguments[e];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(s[l]=t[l])}return s},w.apply(this,arguments)};function V(n,s,t,e){var o,l=!1,u=0;function h(){o&&clearTimeout(o)}function a(){h(),l=!0}typeof s!="boolean"&&(e=t,t=s,s=void 0);function f(){var m=this,v=Date.now()-u,p=arguments;if(l)return;function c(){u=Date.now(),t.apply(m,p)}function g(){o=void 0}e&&!o&&c(),h(),e===void 0&&v>n?c():s!==!0&&(o=setTimeout(e?g:c,e===void 0?n-v:n))}return f.cancel=a,f}var x={Pixel:"Pixel",Percent:"Percent"},F={unit:x.Percent,value:.8};function j(n){return typeof n=="number"?{unit:x.Percent,value:n*100}:typeof n=="string"?n.match(/^(\d*(\.\d+)?)px$/)?{unit:x.Pixel,value:parseFloat(n)}:n.match(/^(\d*(\.\d+)?)%$/)?{unit:x.Percent,value:parseFloat(n)}:(console.warn('scrollThreshold format is invalid. Valid formats: "120px", "50%"...'),F):(console.warn("scrollThreshold should be string or number"),F)}var J=function(n){q(s,n);function s(t){var e=n.call(this,t)||this;return e.lastScrollTop=0,e.actionTriggered=!1,e.startY=0,e.currentY=0,e.dragging=!1,e.maxPullDownDistance=0,e.getScrollableTarget=function(){return e.props.scrollableTarget instanceof HTMLElement?e.props.scrollableTarget:typeof e.props.scrollableTarget=="string"?document.getElementById(e.props.scrollableTarget):(e.props.scrollableTarget===null&&console.warn(`You are trying to pass scrollableTarget but it is null. This might
        happen because the element may not have been added to DOM yet.
        See https://github.com/ankeetmaini/react-infinite-scroll-component/issues/59 for more info.
      `),null)},e.onStart=function(o){e.lastScrollTop||(e.dragging=!0,o instanceof MouseEvent?e.startY=o.pageY:o instanceof TouchEvent&&(e.startY=o.touches[0].pageY),e.currentY=e.startY,e._infScroll&&(e._infScroll.style.willChange="transform",e._infScroll.style.transition="transform 0.2s cubic-bezier(0,0,0.31,1)"))},e.onMove=function(o){!e.dragging||(o instanceof MouseEvent?e.currentY=o.pageY:o instanceof TouchEvent&&(e.currentY=o.touches[0].pageY),!(e.currentY<e.startY)&&(e.currentY-e.startY>=Number(e.props.pullDownToRefreshThreshold)&&e.setState({pullToRefreshThresholdBreached:!0}),!(e.currentY-e.startY>e.maxPullDownDistance*1.5)&&e._infScroll&&(e._infScroll.style.overflow="visible",e._infScroll.style.transform="translate3d(0px, "+(e.currentY-e.startY)+"px, 0px)")))},e.onEnd=function(){e.startY=0,e.currentY=0,e.dragging=!1,e.state.pullToRefreshThresholdBreached&&(e.props.refreshFunction&&e.props.refreshFunction(),e.setState({pullToRefreshThresholdBreached:!1})),requestAnimationFrame(function(){e._infScroll&&(e._infScroll.style.overflow="auto",e._infScroll.style.transform="none",e._infScroll.style.willChange="unset")})},e.onScrollListener=function(o){typeof e.props.onScroll=="function"&&setTimeout(function(){return e.props.onScroll&&e.props.onScroll(o)},0);var l=e.props.height||e._scrollableNode?o.target:document.documentElement.scrollTop?document.documentElement:document.body;if(!e.actionTriggered){var u=e.props.inverse?e.isElementAtTop(l,e.props.scrollThreshold):e.isElementAtBottom(l,e.props.scrollThreshold);u&&e.props.hasMore&&(e.actionTriggered=!0,e.setState({showLoader:!0}),e.props.next&&e.props.next()),e.lastScrollTop=l.scrollTop}},e.state={showLoader:!1,pullToRefreshThresholdBreached:!1,prevDataLength:t.dataLength},e.throttledOnScrollListener=V(150,e.onScrollListener).bind(e),e.onStart=e.onStart.bind(e),e.onMove=e.onMove.bind(e),e.onEnd=e.onEnd.bind(e),e}return s.prototype.componentDidMount=function(){if(typeof this.props.dataLength=="undefined")throw new Error('mandatory prop "dataLength" is missing. The prop is needed when loading more content. Check README.md for usage');if(this._scrollableNode=this.getScrollableTarget(),this.el=this.props.height?this._infScroll:this._scrollableNode||window,this.el&&this.el.addEventListener("scroll",this.throttledOnScrollListener),typeof this.props.initialScrollY=="number"&&this.el&&this.el instanceof HTMLElement&&this.el.scrollHeight>this.props.initialScrollY&&this.el.scrollTo(0,this.props.initialScrollY),this.props.pullDownToRefresh&&this.el&&(this.el.addEventListener("touchstart",this.onStart),this.el.addEventListener("touchmove",this.onMove),this.el.addEventListener("touchend",this.onEnd),this.el.addEventListener("mousedown",this.onStart),this.el.addEventListener("mousemove",this.onMove),this.el.addEventListener("mouseup",this.onEnd),this.maxPullDownDistance=this._pullDown&&this._pullDown.firstChild&&this._pullDown.firstChild.getBoundingClientRect().height||0,this.forceUpdate(),typeof this.props.refreshFunction!="function"))throw new Error(`Mandatory prop "refreshFunction" missing.
          Pull Down To Refresh functionality will not work
          as expected. Check README.md for usage'`)},s.prototype.componentWillUnmount=function(){this.el&&(this.el.removeEventListener("scroll",this.throttledOnScrollListener),this.props.pullDownToRefresh&&(this.el.removeEventListener("touchstart",this.onStart),this.el.removeEventListener("touchmove",this.onMove),this.el.removeEventListener("touchend",this.onEnd),this.el.removeEventListener("mousedown",this.onStart),this.el.removeEventListener("mousemove",this.onMove),this.el.removeEventListener("mouseup",this.onEnd)))},s.prototype.componentDidUpdate=function(t){this.props.dataLength!==t.dataLength&&(this.actionTriggered=!1,this.setState({showLoader:!1}))},s.getDerivedStateFromProps=function(t,e){var o=t.dataLength!==e.prevDataLength;return o?w(w({},e),{prevDataLength:t.dataLength}):null},s.prototype.isElementAtTop=function(t,e){e===void 0&&(e=.8);var o=t===document.body||t===document.documentElement?window.screen.availHeight:t.clientHeight,l=j(e);return l.unit===x.Pixel?t.scrollTop<=l.value+o-t.scrollHeight+1:t.scrollTop<=l.value/100+o-t.scrollHeight+1},s.prototype.isElementAtBottom=function(t,e){e===void 0&&(e=.8);var o=t===document.body||t===document.documentElement?window.screen.availHeight:t.clientHeight,l=j(e);return l.unit===x.Pixel?t.scrollTop+o>=t.scrollHeight-l.value:t.scrollTop+o>=l.value/100*t.scrollHeight},s.prototype.render=function(){var t=this,e=w({height:this.props.height||"auto",overflow:"auto",WebkitOverflowScrolling:"touch"},this.props.style),o=this.props.hasChildren||!!(this.props.children&&this.props.children instanceof Array&&this.props.children.length),l=this.props.pullDownToRefresh&&this.props.height?{overflow:"auto"}:{};return r("div",{style:l,className:"infinite-scroll-component__outerdiv",children:d("div",{className:"infinite-scroll-component "+(this.props.className||""),ref:function(u){return t._infScroll=u},style:e,children:[this.props.pullDownToRefresh&&r("div",{style:{position:"relative"},ref:function(u){return t._pullDown=u},children:r("div",{style:{position:"absolute",left:0,right:0,top:-1*this.maxPullDownDistance},children:this.state.pullToRefreshThresholdBreached?this.props.releaseToRefreshContent:this.props.pullDownToRefreshContent})}),this.props.children,!this.state.showLoader&&!o&&this.props.hasMore&&this.props.loader,this.state.showLoader&&this.props.hasMore&&this.props.loader,!this.props.hasMore&&this.props.endMessage]})})},s}(i.exports.Component),K=J;const B="6";var oe=i.exports.memo(function(){const[s,t]=i.exports.useState([]),[e,o]=i.exports.useState([]),[l,u]=i.exports.useState(!0),[h,a]=i.exports.useState(!0),[f,m]=i.exports.useState([]),v=()=>{if(e.length>=s.length){u(!1);return}setTimeout(()=>{o(s.slice(0,e.length+6))},1e3)},{stateAccessToken:p}=i.exports.useContext(y);return i.exports.useEffect(()=>(p?b("/users/get_dashboard_user_id/"+_(p)).then(c=>c.json()).then(c=>{c.posts.map(g=>{const L=g._id;c.users.map(S=>{S.posts.includes(L)&&(g.user=S)})}),t(c.posts.reverse()),o(c.posts.slice(0,B)),a(!1),m(c.users)}).catch(c=>console.log(c)):b("/posts/get_all/"+_(p)).then(c=>c.json()).then(c=>{c.posts.map(g=>{const L=g._id;c.users.map(S=>{S.posts.includes(L)&&(g.user=S)})}),t(c.posts.reverse()),o(c.posts.slice(0,B)),a(!1),m(c.users)}).catch(c=>console.log(c)),()=>{t([]),o([]),a(!0),m([])}),[]),h?r(T,{}):d("div",{children:[r(O,{}),r("main",{className:"container",children:r(K,{dataLength:e.length,next:()=>v(),hasMore:l,loader:r(T,{}),className:"row","data-masonry":'{"percentPosition": true }',style:{overflowY:"hidden"},children:e.map(c=>r(W,{dataPost:c},c._id))})})]})});export{oe as default};
