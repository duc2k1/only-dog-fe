import{r as l,L as A}from"./vendor.c65eed6e.js";import{S as E,g as z}from"./grey.ee72b4cc.js";import{a as v,j as n,A as L,c as N,g as _,b as k,F as U}from"./index.147ccc30.js";import{P as B,B as Y}from"./ButtonFollow.65ec8582.js";import{B as j,a as O,b as F,c as $}from"./index.esm.63d4f9e9.js";import{s as J}from"./splitDate.9d8fdbe2.js";import"./iconBase.b42652f6.js";function M(i="",r={},t={}){return fetch("http://45.76.191.210:3001"+i,{method:"PUT",headers:r,body:t})}var W=l.exports.memo(function({userName:r,userId:t,pathAvatar:e}){const[s,o]=l.exports.useState(!1);return v("div",{className:"col-4 col-md-2 text-center mb-3",children:[n(A,{to:"/profile?user_id="+t,children:n("img",{src:"http://45.76.191.210:3001"+e,alt:"",width:"60",height:"60",role:"button",style:{objectFit:"cover",userSelect:"none"},onLoad:()=>o(!0),className:s?"rounded-circle mb-2":"d-none"})}),!s&&n(B,{rounded:!0,width:60,height:60}),n("br",{}),n("small",{children:n("b",{children:r})}),n("br",{}),n(Y,{userIdBeFollow:t})]})});function H(i){return i.sort((r,t)=>t.followers.length-r.followers.length)}var q=l.exports.memo(function({openModal:r,setOpenModal:t}){const[e,s]=l.exports.useState([]),[o,a]=l.exports.useState(!0),{stateAccessToken:g}=l.exports.useContext(L);return l.exports.useEffect(()=>{g?N("/users/get_all").then(c=>c.json()).then(c=>{const h=_(g),u=c.users.find(d=>d._id===h),p=c.users.filter(d=>!u.followings.includes(d._id)&&h!==d._id);s(H(p)),a(!1)}).catch(c=>console.log(c)):N("/users/get_all").then(c=>c.json()).then(c=>{s(H(c.users)),a(!1)}).catch(c=>console.log(c))},[]),o?n(E,{}):n("div",{className:"container mt-4",children:n("div",{className:"row",children:e==null?void 0:e.slice(0,6).map(c=>n(W,{userName:c.userName,userId:c._id,pathAvatar:c.pathAvatar,openModal:r,setOpenModal:t},c._id))})})}),G=l.exports.memo(function({like:r,setLike:t,dislike:e,setDislike:s,numberOfDislike:o,setNumberOfDislike:a,isLoading:g,setIsLoading:c,dataPost:h,isUserLiked:u,setIsUserLiked:p,isUserDisliked:d,setIsUserDisliked:f,numberOfLike:x,setNumberOfLike:w}){const{setShowModalLogin:y}=l.exports.useContext(k),{stateAccessToken:S}=l.exports.useContext(L),D=()=>{S?(c(!0),M("/posts/dislike",{"Content-Type":"application/json",Authorization:"Bearer "+S},JSON.stringify({userId:_(S),postId:h==null?void 0:h._id})).then(m=>m.json()).then(m=>{switch(m==null?void 0:m.message){case"disliked":s(!0),f(!0),a(o+1);break;case"undisliked":s(!1),f(!1),a(o-1);break;case"disliked and unliked":s(!0),f(!0),a(o+1),t(!1),p(!1),w(x-1);break}c(!1)}).catch(m=>{console.log(m),c(!1)})):y(!0)};return g?n(E,{}):v("div",{onClick:()=>D(),children:[d?n("small",{className:"text-danger",children:o}):e?n("small",{className:"text-danger",children:o}):n("small",{className:"text-muted",children:o}),d?n(j,{size:"40",role:"button",className:"text-danger"}):e?n(j,{size:"40",role:"button",className:"text-danger"}):n(O,{size:"40",role:"button",className:"text-muted"})]})}),V=l.exports.memo(function({like:r,setLike:t,dislike:e,setDislike:s,numberOfLike:o,setNumberOfLike:a,isLoading:g,setIsLoading:c,dataPost:h,isUserLiked:u,setIsUserLiked:p,isUserDisliked:d,setIsUserDisliked:f,numberOfDislike:x,setNumberOfDislike:w}){const{setShowModalLogin:y}=l.exports.useContext(k),{stateAccessToken:S}=l.exports.useContext(L),D=()=>{S?(c(!0),M("/posts/like",{"Content-Type":"application/json",Authorization:"Bearer "+S},JSON.stringify({userId:_(S),postId:h==null?void 0:h._id})).then(m=>m.json()).then(m=>{switch(m==null?void 0:m.message){case"liked":t(!0),p(!0),a(o+1);break;case"unliked":t(!1),p(!1),a(o-1);break;case"liked and undisliked":t(!0),p(!0),a(o+1),s(!1),f(!1),w(x-1);break}c(!1)}).catch(m=>{console.log(m),c(!1)})):y(!0)};return g?n(E,{}):v("div",{onClick:()=>D(),children:[u?n("small",{className:"text-primary",children:o}):r?n("small",{className:"text-primary",children:o}):n("small",{className:"text-muted",children:o}),u?n(F,{size:"40",role:"button",className:"text-primary"}):r?n(F,{size:"40",role:"button",className:"text-primary"}):n($,{size:"40",role:"button",className:"text-muted"})]})}),K=l.exports.memo(function({dataPost:r}){const[t,e]=l.exports.useState(!1),[s,o]=l.exports.useState(!1),[a,g]=l.exports.useState(r.likes.length),[c,h]=l.exports.useState(r.dislikes.length),[u,p]=l.exports.useState(!1),{stateAccessToken:d}=l.exports.useContext(L),[f,x]=l.exports.useState(r==null?void 0:r.likes.includes(_(d))),[w,y]=l.exports.useState(r==null?void 0:r.dislikes.includes(_(d)));return v("div",{className:"d-flex justify-content-around m-2",style:{userSelect:"none"},children:[n(V,{like:t,setLike:e,dislike:s,setDislike:o,numberOfLike:a,setNumberOfLike:g,isLoading:u,setIsLoading:p,dataPost:r,isUserLiked:f,setIsUserLiked:x,isUserDisliked:w,setIsUserDisliked:y,numberOfDislike:c,setNumberOfDislike:h}),n(G,{like:t,setLike:e,dislike:s,setDislike:o,numberOfDislike:c,setNumberOfDislike:h,isLoading:u,setIsLoading:p,dataPost:r,isUserLiked:f,setIsUserLiked:x,isUserDisliked:w,setIsUserDisliked:y,numberOfLike:a,setNumberOfLike:g})]})}),Q=l.exports.memo(function({dataPost:r}){const t=r==null?void 0:r.user,[e,s]=l.exports.useState(!1);return v("div",{className:"d-flex justify-content-between",children:[v("div",{className:"d-flex",children:[n(A,{to:"/profile?user_id="+(t==null?void 0:t._id),children:n("img",{src:"http://45.76.191.210:3001"+(t==null?void 0:t.pathAvatar),alt:"Avatar",width:"40",height:"40",role:"button",style:{objectFit:"cover",userSelect:"none"},onLoad:()=>s(!0),className:e?"rounded-circle me-1 my-1":"d-none"})}),!e&&n("div",{className:"me-1 my-1",children:n(B,{rounded:!0,width:40,height:40})}),v("div",{children:[n("b",{children:n("small",{children:t==null?void 0:t.userName})}),n("br",{}),n("small",{className:"text-muted",children:J(r==null?void 0:r.createdAt)})]})]}),n("div",{children:n(Y,{userIdBeFollow:t==null?void 0:t._id})})]})}),X=l.exports.memo(function({dataPost:r}){const[t,e]=l.exports.useState(!1);return v(U,{children:[n("a",{href:"http://45.76.191.210:3001"+(r==null?void 0:r.pathImage),target:"_blank",rel:"noopener noreferrer",children:n("img",{src:"http://45.76.191.210:3001"+(r==null?void 0:r.pathImage),alt:"Image Post",style:{objectFit:"cover",userSelect:"none"},onLoad:()=>e(!0),className:t?"img-fluid":"d-none"})}),!t&&n("img",{src:z,height:"500",width:"100%"})]})}),Z=l.exports.memo(function({dataPost:r}){return v("div",{className:"col-sm-6 col-lg-4 mb-4",children:[n(Q,{dataPost:r}),n(X,{dataPost:r}),n(K,{dataPost:r})]})}),C=function(i,r){return C=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var s in e)e.hasOwnProperty(s)&&(t[s]=e[s])},C(i,r)};function P(i,r){C(i,r);function t(){this.constructor=i}i.prototype=r===null?Object.create(r):(t.prototype=r.prototype,new t)}var b=function(){return b=Object.assign||function(r){for(var t,e=1,s=arguments.length;e<s;e++){t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(r[o]=t[o])}return r},b.apply(this,arguments)};function ee(i,r,t,e){var s,o=!1,a=0;function g(){s&&clearTimeout(s)}function c(){g(),o=!0}typeof r!="boolean"&&(e=t,t=r,r=void 0);function h(){var u=this,p=Date.now()-a,d=arguments;if(o)return;function f(){a=Date.now(),t.apply(u,d)}function x(){s=void 0}e&&!s&&f(),g(),e===void 0&&p>i?f():r!==!0&&(s=setTimeout(e?x:f,e===void 0?i-p:i))}return h.cancel=c,h}var T={Pixel:"Pixel",Percent:"Percent"},I={unit:T.Percent,value:.8};function R(i){return typeof i=="number"?{unit:T.Percent,value:i*100}:typeof i=="string"?i.match(/^(\d*(\.\d+)?)px$/)?{unit:T.Pixel,value:parseFloat(i)}:i.match(/^(\d*(\.\d+)?)%$/)?{unit:T.Percent,value:parseFloat(i)}:(console.warn('scrollThreshold format is invalid. Valid formats: "120px", "50%"...'),I):(console.warn("scrollThreshold should be string or number"),I)}var te=function(i){P(r,i);function r(t){var e=i.call(this,t)||this;return e.lastScrollTop=0,e.actionTriggered=!1,e.startY=0,e.currentY=0,e.dragging=!1,e.maxPullDownDistance=0,e.getScrollableTarget=function(){return e.props.scrollableTarget instanceof HTMLElement?e.props.scrollableTarget:typeof e.props.scrollableTarget=="string"?document.getElementById(e.props.scrollableTarget):(e.props.scrollableTarget===null&&console.warn(`You are trying to pass scrollableTarget but it is null. This might
        happen because the element may not have been added to DOM yet.
        See https://github.com/ankeetmaini/react-infinite-scroll-component/issues/59 for more info.
      `),null)},e.onStart=function(s){e.lastScrollTop||(e.dragging=!0,s instanceof MouseEvent?e.startY=s.pageY:s instanceof TouchEvent&&(e.startY=s.touches[0].pageY),e.currentY=e.startY,e._infScroll&&(e._infScroll.style.willChange="transform",e._infScroll.style.transition="transform 0.2s cubic-bezier(0,0,0.31,1)"))},e.onMove=function(s){!e.dragging||(s instanceof MouseEvent?e.currentY=s.pageY:s instanceof TouchEvent&&(e.currentY=s.touches[0].pageY),!(e.currentY<e.startY)&&(e.currentY-e.startY>=Number(e.props.pullDownToRefreshThreshold)&&e.setState({pullToRefreshThresholdBreached:!0}),!(e.currentY-e.startY>e.maxPullDownDistance*1.5)&&e._infScroll&&(e._infScroll.style.overflow="visible",e._infScroll.style.transform="translate3d(0px, "+(e.currentY-e.startY)+"px, 0px)")))},e.onEnd=function(){e.startY=0,e.currentY=0,e.dragging=!1,e.state.pullToRefreshThresholdBreached&&(e.props.refreshFunction&&e.props.refreshFunction(),e.setState({pullToRefreshThresholdBreached:!1})),requestAnimationFrame(function(){e._infScroll&&(e._infScroll.style.overflow="auto",e._infScroll.style.transform="none",e._infScroll.style.willChange="unset")})},e.onScrollListener=function(s){typeof e.props.onScroll=="function"&&setTimeout(function(){return e.props.onScroll&&e.props.onScroll(s)},0);var o=e.props.height||e._scrollableNode?s.target:document.documentElement.scrollTop?document.documentElement:document.body;if(!e.actionTriggered){var a=e.props.inverse?e.isElementAtTop(o,e.props.scrollThreshold):e.isElementAtBottom(o,e.props.scrollThreshold);a&&e.props.hasMore&&(e.actionTriggered=!0,e.setState({showLoader:!0}),e.props.next&&e.props.next()),e.lastScrollTop=o.scrollTop}},e.state={showLoader:!1,pullToRefreshThresholdBreached:!1,prevDataLength:t.dataLength},e.throttledOnScrollListener=ee(150,e.onScrollListener).bind(e),e.onStart=e.onStart.bind(e),e.onMove=e.onMove.bind(e),e.onEnd=e.onEnd.bind(e),e}return r.prototype.componentDidMount=function(){if(typeof this.props.dataLength=="undefined")throw new Error('mandatory prop "dataLength" is missing. The prop is needed when loading more content. Check README.md for usage');if(this._scrollableNode=this.getScrollableTarget(),this.el=this.props.height?this._infScroll:this._scrollableNode||window,this.el&&this.el.addEventListener("scroll",this.throttledOnScrollListener),typeof this.props.initialScrollY=="number"&&this.el&&this.el instanceof HTMLElement&&this.el.scrollHeight>this.props.initialScrollY&&this.el.scrollTo(0,this.props.initialScrollY),this.props.pullDownToRefresh&&this.el&&(this.el.addEventListener("touchstart",this.onStart),this.el.addEventListener("touchmove",this.onMove),this.el.addEventListener("touchend",this.onEnd),this.el.addEventListener("mousedown",this.onStart),this.el.addEventListener("mousemove",this.onMove),this.el.addEventListener("mouseup",this.onEnd),this.maxPullDownDistance=this._pullDown&&this._pullDown.firstChild&&this._pullDown.firstChild.getBoundingClientRect().height||0,this.forceUpdate(),typeof this.props.refreshFunction!="function"))throw new Error(`Mandatory prop "refreshFunction" missing.
          Pull Down To Refresh functionality will not work
          as expected. Check README.md for usage'`)},r.prototype.componentWillUnmount=function(){this.el&&(this.el.removeEventListener("scroll",this.throttledOnScrollListener),this.props.pullDownToRefresh&&(this.el.removeEventListener("touchstart",this.onStart),this.el.removeEventListener("touchmove",this.onMove),this.el.removeEventListener("touchend",this.onEnd),this.el.removeEventListener("mousedown",this.onStart),this.el.removeEventListener("mousemove",this.onMove),this.el.removeEventListener("mouseup",this.onEnd)))},r.prototype.componentDidUpdate=function(t){this.props.dataLength!==t.dataLength&&(this.actionTriggered=!1,this.setState({showLoader:!1}))},r.getDerivedStateFromProps=function(t,e){var s=t.dataLength!==e.prevDataLength;return s?b(b({},e),{prevDataLength:t.dataLength}):null},r.prototype.isElementAtTop=function(t,e){e===void 0&&(e=.8);var s=t===document.body||t===document.documentElement?window.screen.availHeight:t.clientHeight,o=R(e);return o.unit===T.Pixel?t.scrollTop<=o.value+s-t.scrollHeight+1:t.scrollTop<=o.value/100+s-t.scrollHeight+1},r.prototype.isElementAtBottom=function(t,e){e===void 0&&(e=.8);var s=t===document.body||t===document.documentElement?window.screen.availHeight:t.clientHeight,o=R(e);return o.unit===T.Pixel?t.scrollTop+s>=t.scrollHeight-o.value:t.scrollTop+s>=o.value/100*t.scrollHeight},r.prototype.render=function(){var t=this,e=b({height:this.props.height||"auto",overflow:"auto",WebkitOverflowScrolling:"touch"},this.props.style),s=this.props.hasChildren||!!(this.props.children&&this.props.children instanceof Array&&this.props.children.length),o=this.props.pullDownToRefresh&&this.props.height?{overflow:"auto"}:{};return n("div",{style:o,className:"infinite-scroll-component__outerdiv",children:v("div",{className:"infinite-scroll-component "+(this.props.className||""),ref:function(a){return t._infScroll=a},style:e,children:[this.props.pullDownToRefresh&&n("div",{style:{position:"relative"},ref:function(a){return t._pullDown=a},children:n("div",{style:{position:"absolute",left:0,right:0,top:-1*this.maxPullDownDistance},children:this.state.pullToRefreshThresholdBreached?this.props.releaseToRefreshContent:this.props.pullDownToRefreshContent})}),this.props.children,!this.state.showLoader&&!s&&this.props.hasMore&&this.props.loader,this.state.showLoader&&this.props.hasMore&&this.props.loader,!this.props.hasMore&&this.props.endMessage]})})},r}(l.exports.Component),re=te;const se="6";var he=l.exports.memo(function(){const[r,t]=l.exports.useState([]),[e,s]=l.exports.useState([]),[o,a]=l.exports.useState(!0),[g,c]=l.exports.useState(!0),h=()=>{if(e.length>=r.length){a(!1);return}s(r.slice(0,e.length+6))};return l.exports.useLayoutEffect(()=>(N("/posts/get_all").then(u=>u.json()).then(u=>{u.posts.map(p=>{const d=p._id;u.users.map(f=>{f.posts.includes(d)&&(p.user=f)})}),t(u.posts.reverse()),s(u.posts.slice(0,se)),c(!1)}).catch(u=>console.log(u)),()=>{t([]),s([]),c(!0)}),[]),g?n(E,{}):v("div",{children:[n(q,{}),n("main",{className:"container",children:n(re,{dataLength:e.length,next:()=>h(),hasMore:o,className:"row","data-masonry":'{"percentPosition": true }',style:{overflowY:"hidden"},children:e.map((u,p)=>n(Z,{dataPost:u},p))})})]})});export{he as default};
