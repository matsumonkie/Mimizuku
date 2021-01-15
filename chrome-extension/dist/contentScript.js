(()=>{"use strict";function e(e){var t=e.getBoundingClientRect();return{width:t.width,height:t.height,top:t.top,right:t.right,bottom:t.bottom,left:t.left,x:t.left,y:t.top}}function t(e){if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function n(e){var n=t(e);return{scrollLeft:n.pageXOffset,scrollTop:n.pageYOffset}}function o(e){return e instanceof t(e).Element||e instanceof Element}function r(e){return e instanceof t(e).HTMLElement||e instanceof HTMLElement}function i(e){return e?(e.nodeName||"").toLowerCase():null}function a(e){return((o(e)?e.ownerDocument:e.document)||window.document).documentElement}function s(t){return e(a(t)).left+n(t).scrollLeft}function c(e){return t(e).getComputedStyle(e)}function f(e){var t=c(e),n=t.overflow,o=t.overflowX,r=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+r+o)}function l(o,c,l){void 0===l&&(l=!1);var u,d,p=a(c),m=e(o),h=r(c),b={scrollLeft:0,scrollTop:0},g={x:0,y:0};return(h||!h&&!l)&&(("body"!==i(c)||f(p))&&(b=(u=c)!==t(u)&&r(u)?{scrollLeft:(d=u).scrollLeft,scrollTop:d.scrollTop}:n(u)),r(c)?((g=e(c)).x+=c.clientLeft,g.y+=c.clientTop):p&&(g.x=s(p))),{x:m.left+b.scrollLeft-g.x,y:m.top+b.scrollTop-g.y,width:m.width,height:m.height}}function u(e){return{x:e.offsetLeft,y:e.offsetTop,width:e.offsetWidth,height:e.offsetHeight}}function d(e){return"html"===i(e)?e:e.assignedSlot||e.parentNode||e.host||a(e)}function p(e){return["html","body","#document"].indexOf(i(e))>=0?e.ownerDocument.body:r(e)&&f(e)?e:p(d(e))}function m(e,n){void 0===n&&(n=[]);var o=p(e),r="body"===i(o),a=t(o),s=r?[a].concat(a.visualViewport||[],f(o)?o:[]):o,c=n.concat(s);return r?c:c.concat(m(d(s)))}function h(e){return["table","td","th"].indexOf(i(e))>=0}function b(e){if(!r(e)||"fixed"===c(e).position)return null;var t=e.offsetParent;if(t){var n=a(t);if("body"===i(t)&&"static"===c(t).position&&"static"!==c(n).position)return n}return t}function g(e){for(var n=t(e),o=b(e);o&&h(o)&&"static"===c(o).position;)o=b(o);return o&&"body"===i(o)&&"static"===c(o).position?n:o||function(e){for(var t=d(e);r(t)&&["html","body"].indexOf(i(t))<0;){var n=c(t);if("none"!==n.transform||"none"!==n.perspective||n.willChange&&"auto"!==n.willChange)return t;t=t.parentNode}return null}(e)||n}var v="top",y="bottom",w="right",x="left",O="auto",E=[v,y,w,x],j="start",D="end",M="viewport",A="popper",L=E.reduce((function(e,t){return e.concat([t+"-"+j,t+"-"+D])}),[]),S=[].concat(E,[O]).reduce((function(e,t){return e.concat([t,t+"-"+j,t+"-"+D])}),[]),N=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function k(e){var t=new Map,n=new Set,o=[];function r(e){n.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach((function(e){if(!n.has(e)){var o=t.get(e);o&&r(o)}})),o.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){n.has(e.name)||r(e)})),o}var T={placement:"bottom",modifiers:[],strategy:"absolute"};function C(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some((function(e){return!(e&&"function"==typeof e.getBoundingClientRect)}))}function P(e){void 0===e&&(e={});var t=e,n=t.defaultModifiers,r=void 0===n?[]:n,i=t.defaultOptions,a=void 0===i?T:i;return function(e,t,n){void 0===n&&(n=a);var i,s,c={placement:"bottom",orderedModifiers:[],options:Object.assign(Object.assign({},T),a),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},f=[],d=!1,p={state:c,setOptions:function(n){h(),c.options=Object.assign(Object.assign(Object.assign({},a),c.options),n),c.scrollParents={reference:o(e)?m(e):e.contextElement?m(e.contextElement):[],popper:m(t)};var i,s,l=function(e){var t=k(e);return N.reduce((function(e,n){return e.concat(t.filter((function(e){return e.phase===n})))}),[])}((i=[].concat(r,c.options.modifiers),s=i.reduce((function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign(Object.assign(Object.assign({},n),t),{},{options:Object.assign(Object.assign({},n.options),t.options),data:Object.assign(Object.assign({},n.data),t.data)}):t,e}),{}),Object.keys(s).map((function(e){return s[e]}))));return c.orderedModifiers=l.filter((function(e){return e.enabled})),c.orderedModifiers.forEach((function(e){var t=e.name,n=e.options,o=void 0===n?{}:n,r=e.effect;if("function"==typeof r){var i=r({state:c,name:t,instance:p,options:o});f.push(i||function(){})}})),p.update()},forceUpdate:function(){if(!d){var e=c.elements,t=e.reference,n=e.popper;if(C(t,n)){c.rects={reference:l(t,g(n),"fixed"===c.options.strategy),popper:u(n)},c.reset=!1,c.placement=c.options.placement,c.orderedModifiers.forEach((function(e){return c.modifiersData[e.name]=Object.assign({},e.data)}));for(var o=0;o<c.orderedModifiers.length;o++)if(!0!==c.reset){var r=c.orderedModifiers[o],i=r.fn,a=r.options,s=void 0===a?{}:a,f=r.name;"function"==typeof i&&(c=i({state:c,options:s,name:f,instance:p})||c)}else c.reset=!1,o=-1}}},update:(i=function(){return new Promise((function(e){p.forceUpdate(),e(c)}))},function(){return s||(s=new Promise((function(e){Promise.resolve().then((function(){s=void 0,e(i())}))}))),s}),destroy:function(){h(),d=!0}};if(!C(e,t))return p;function h(){f.forEach((function(e){return e()})),f=[]}return p.setOptions(n).then((function(e){!d&&n.onFirstUpdate&&n.onFirstUpdate(e)})),p}}var W={passive:!0};function q(e){return e.split("-")[0]}function I(e){return e.split("-")[1]}function R(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function B(e){var t,n=e.reference,o=e.element,r=e.placement,i=r?q(r):null,a=r?I(r):null,s=n.x+n.width/2-o.width/2,c=n.y+n.height/2-o.height/2;switch(i){case v:t={x:s,y:n.y-o.height};break;case y:t={x:s,y:n.y+n.height};break;case w:t={x:n.x+n.width,y:c};break;case x:t={x:n.x-o.width,y:c};break;default:t={x:n.x,y:n.y}}var f=i?R(i):null;if(null!=f){var l="y"===f?"height":"width";switch(a){case j:t[f]=t[f]-(n[l]/2-o[l]/2);break;case D:t[f]=t[f]+(n[l]/2-o[l]/2)}}return t}var H={top:"auto",right:"auto",bottom:"auto",left:"auto"};function F(e){var n,o=e.popper,r=e.popperRect,i=e.placement,s=e.offsets,c=e.position,f=e.gpuAcceleration,l=e.adaptive,u=e.roundOffsets?function(e){var t=e.x,n=e.y,o=window.devicePixelRatio||1;return{x:Math.round(t*o)/o||0,y:Math.round(n*o)/o||0}}(s):s,d=u.x,p=void 0===d?0:d,m=u.y,h=void 0===m?0:m,b=s.hasOwnProperty("x"),O=s.hasOwnProperty("y"),E=x,j=v,D=window;if(l){var M=g(o);M===t(o)&&(M=a(o)),i===v&&(j=y,h-=M.clientHeight-r.height,h*=f?1:-1),i===x&&(E=w,p-=M.clientWidth-r.width,p*=f?1:-1)}var A,L=Object.assign({position:c},l&&H);return f?Object.assign(Object.assign({},L),{},((A={})[j]=O?"0":"",A[E]=b?"0":"",A.transform=(D.devicePixelRatio||1)<2?"translate("+p+"px, "+h+"px)":"translate3d("+p+"px, "+h+"px, 0)",A)):Object.assign(Object.assign({},L),{},((n={})[j]=O?h+"px":"",n[E]=b?p+"px":"",n.transform="",n))}var z={left:"right",right:"left",bottom:"top",top:"bottom"};function V(e){return e.replace(/left|right|bottom|top/g,(function(e){return z[e]}))}var U={start:"end",end:"start"};function _(e){return e.replace(/start|end/g,(function(e){return U[e]}))}function X(e,n){var o,r=n.getRootNode&&n.getRootNode();if(e.contains(n))return!0;if(r&&((o=r)instanceof t(o).ShadowRoot||o instanceof ShadowRoot)){var i=n;do{if(i&&e.isSameNode(i))return!0;i=i.parentNode||i.host}while(i)}return!1}function $(e){return Object.assign(Object.assign({},e),{},{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function Y(o,i){return i===M?$(function(e){var n=t(e),o=a(e),r=n.visualViewport,i=o.clientWidth,c=o.clientHeight,f=0,l=0;return r&&(i=r.width,c=r.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(f=r.offsetLeft,l=r.offsetTop)),{width:i,height:c,x:f+s(e),y:l}}(o)):r(i)?function(t){var n=e(t);return n.top=n.top+t.clientTop,n.left=n.left+t.clientLeft,n.bottom=n.top+t.clientHeight,n.right=n.left+t.clientWidth,n.width=t.clientWidth,n.height=t.clientHeight,n.x=n.left,n.y=n.top,n}(i):$(function(e){var t=a(e),o=n(e),r=e.ownerDocument.body,i=Math.max(t.scrollWidth,t.clientWidth,r?r.scrollWidth:0,r?r.clientWidth:0),f=Math.max(t.scrollHeight,t.clientHeight,r?r.scrollHeight:0,r?r.clientHeight:0),l=-o.scrollLeft+s(e),u=-o.scrollTop;return"rtl"===c(r||t).direction&&(l+=Math.max(t.clientWidth,r?r.clientWidth:0)-i),{width:i,height:f,x:l,y:u}}(a(o)))}function G(e){return Object.assign(Object.assign({},{top:0,right:0,bottom:0,left:0}),e)}function J(e,t){return t.reduce((function(t,n){return t[n]=e,t}),{})}function K(t,n){void 0===n&&(n={});var s=n,f=s.placement,l=void 0===f?t.placement:f,u=s.boundary,p=void 0===u?"clippingParents":u,h=s.rootBoundary,b=void 0===h?M:h,x=s.elementContext,O=void 0===x?A:x,j=s.altBoundary,D=void 0!==j&&j,L=s.padding,S=void 0===L?0:L,N=G("number"!=typeof S?S:J(S,E)),k=O===A?"reference":A,T=t.elements.reference,C=t.rects.popper,P=t.elements[D?k:O],W=function(e,t,n){var a="clippingParents"===t?function(e){var t=m(d(e)),n=["absolute","fixed"].indexOf(c(e).position)>=0&&r(e)?g(e):e;return o(n)?t.filter((function(e){return o(e)&&X(e,n)&&"body"!==i(e)})):[]}(e):[].concat(t),s=[].concat(a,[n]),f=s[0],l=s.reduce((function(t,n){var o=Y(e,n);return t.top=Math.max(o.top,t.top),t.right=Math.min(o.right,t.right),t.bottom=Math.min(o.bottom,t.bottom),t.left=Math.max(o.left,t.left),t}),Y(e,f));return l.width=l.right-l.left,l.height=l.bottom-l.top,l.x=l.left,l.y=l.top,l}(o(P)?P:P.contextElement||a(t.elements.popper),p,b),q=e(T),I=B({reference:q,element:C,strategy:"absolute",placement:l}),R=$(Object.assign(Object.assign({},C),I)),H=O===A?R:q,F={top:W.top-H.top+N.top,bottom:H.bottom-W.bottom+N.bottom,left:W.left-H.left+N.left,right:H.right-W.right+N.right},z=t.modifiersData.offset;if(O===A&&z){var V=z[l];Object.keys(F).forEach((function(e){var t=[w,y].indexOf(e)>=0?1:-1,n=[v,y].indexOf(e)>=0?"y":"x";F[e]+=V[n]*t}))}return F}function Q(e,t,n){return Math.max(e,Math.min(t,n))}function Z(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function ee(e){return[v,w,y,x].some((function(t){return e[t]>=0}))}var te=P({defaultModifiers:[{name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var n=e.state,o=e.instance,r=e.options,i=r.scroll,a=void 0===i||i,s=r.resize,c=void 0===s||s,f=t(n.elements.popper),l=[].concat(n.scrollParents.reference,n.scrollParents.popper);return a&&l.forEach((function(e){e.addEventListener("scroll",o.update,W)})),c&&f.addEventListener("resize",o.update,W),function(){a&&l.forEach((function(e){e.removeEventListener("scroll",o.update,W)})),c&&f.removeEventListener("resize",o.update,W)}},data:{}},{name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,n=e.name;t.modifiersData[n]=B({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,n=e.options,o=n.gpuAcceleration,r=void 0===o||o,i=n.adaptive,a=void 0===i||i,s=n.roundOffsets,c=void 0===s||s,f={placement:q(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:r};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign(Object.assign({},t.styles.popper),F(Object.assign(Object.assign({},f),{},{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:a,roundOffsets:c})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign(Object.assign({},t.styles.arrow),F(Object.assign(Object.assign({},f),{},{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:c})))),t.attributes.popper=Object.assign(Object.assign({},t.attributes.popper),{},{"data-popper-placement":t.placement})},data:{}},{name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var n=t.styles[e]||{},o=t.attributes[e]||{},a=t.elements[e];r(a)&&i(a)&&(Object.assign(a.style,n),Object.keys(o).forEach((function(e){var t=o[e];!1===t?a.removeAttribute(e):a.setAttribute(e,!0===t?"":t)})))}))},effect:function(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach((function(e){var o=t.elements[e],a=t.attributes[e]||{},s=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:n[e]).reduce((function(e,t){return e[t]="",e}),{});r(o)&&i(o)&&(Object.assign(o.style,s),Object.keys(a).forEach((function(e){o.removeAttribute(e)})))}))}},requires:["computeStyles"]},{name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,n=e.options,o=e.name,r=n.offset,i=void 0===r?[0,0]:r,a=S.reduce((function(e,n){return e[n]=function(e,t,n){var o=q(e),r=[x,v].indexOf(o)>=0?-1:1,i="function"==typeof n?n(Object.assign(Object.assign({},t),{},{placement:e})):n,a=i[0],s=i[1];return a=a||0,s=(s||0)*r,[x,w].indexOf(o)>=0?{x:s,y:a}:{x:a,y:s}}(n,t.rects,i),e}),{}),s=a[t.placement],c=s.x,f=s.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=c,t.modifiersData.popperOffsets.y+=f),t.modifiersData[o]=a}},{name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,o=e.name;if(!t.modifiersData[o]._skip){for(var r=n.mainAxis,i=void 0===r||r,a=n.altAxis,s=void 0===a||a,c=n.fallbackPlacements,f=n.padding,l=n.boundary,u=n.rootBoundary,d=n.altBoundary,p=n.flipVariations,m=void 0===p||p,h=n.allowedAutoPlacements,b=t.options.placement,g=q(b),D=c||(g!==b&&m?function(e){if(q(e)===O)return[];var t=V(e);return[_(e),t,_(t)]}(b):[V(b)]),M=[b].concat(D).reduce((function(e,n){return e.concat(q(n)===O?function(e,t){void 0===t&&(t={});var n=t,o=n.placement,r=n.boundary,i=n.rootBoundary,a=n.padding,s=n.flipVariations,c=n.allowedAutoPlacements,f=void 0===c?S:c,l=I(o),u=l?s?L:L.filter((function(e){return I(e)===l})):E,d=u.filter((function(e){return f.indexOf(e)>=0}));0===d.length&&(d=u);var p=d.reduce((function(t,n){return t[n]=K(e,{placement:n,boundary:r,rootBoundary:i,padding:a})[q(n)],t}),{});return Object.keys(p).sort((function(e,t){return p[e]-p[t]}))}(t,{placement:n,boundary:l,rootBoundary:u,padding:f,flipVariations:m,allowedAutoPlacements:h}):n)}),[]),A=t.rects.reference,N=t.rects.popper,k=new Map,T=!0,C=M[0],P=0;P<M.length;P++){var W=M[P],R=q(W),B=I(W)===j,H=[v,y].indexOf(R)>=0,F=H?"width":"height",z=K(t,{placement:W,boundary:l,rootBoundary:u,altBoundary:d,padding:f}),U=H?B?w:x:B?y:v;A[F]>N[F]&&(U=V(U));var X=V(U),$=[];if(i&&$.push(z[R]<=0),s&&$.push(z[U]<=0,z[X]<=0),$.every((function(e){return e}))){C=W,T=!1;break}k.set(W,$)}if(T)for(var Y=function(e){var t=M.find((function(t){var n=k.get(t);if(n)return n.slice(0,e).every((function(e){return e}))}));if(t)return C=t,"break"},G=m?3:1;G>0&&"break"!==Y(G);G--);t.placement!==C&&(t.modifiersData[o]._skip=!0,t.placement=C,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}},{name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,o=e.name,r=n.mainAxis,i=void 0===r||r,a=n.altAxis,s=void 0!==a&&a,c=n.boundary,f=n.rootBoundary,l=n.altBoundary,d=n.padding,p=n.tether,m=void 0===p||p,h=n.tetherOffset,b=void 0===h?0:h,O=K(t,{boundary:c,rootBoundary:f,padding:d,altBoundary:l}),E=q(t.placement),D=I(t.placement),M=!D,A=R(E),L="x"===A?"y":"x",S=t.modifiersData.popperOffsets,N=t.rects.reference,k=t.rects.popper,T="function"==typeof b?b(Object.assign(Object.assign({},t.rects),{},{placement:t.placement})):b,C={x:0,y:0};if(S){if(i){var P="y"===A?v:x,W="y"===A?y:w,B="y"===A?"height":"width",H=S[A],F=S[A]+O[P],z=S[A]-O[W],V=m?-k[B]/2:0,U=D===j?N[B]:k[B],_=D===j?-k[B]:-N[B],X=t.elements.arrow,$=m&&X?u(X):{width:0,height:0},Y=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},G=Y[P],J=Y[W],Z=Q(0,N[B],$[B]),ee=M?N[B]/2-V-Z-G-T:U-Z-G-T,te=M?-N[B]/2+V+Z+J+T:_+Z+J+T,ne=t.elements.arrow&&g(t.elements.arrow),oe=ne?"y"===A?ne.clientTop||0:ne.clientLeft||0:0,re=t.modifiersData.offset?t.modifiersData.offset[t.placement][A]:0,ie=S[A]+ee-re-oe,ae=S[A]+te-re,se=Q(m?Math.min(F,ie):F,H,m?Math.max(z,ae):z);S[A]=se,C[A]=se-H}if(s){var ce="x"===A?v:x,fe="x"===A?y:w,le=S[L],ue=Q(le+O[ce],le,le-O[fe]);S[L]=ue,C[L]=ue-le}t.modifiersData[o]=C}},requiresIfExists:["offset"]},{name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,n=e.state,o=e.name,r=n.elements.arrow,i=n.modifiersData.popperOffsets,a=q(n.placement),s=R(a),c=[x,w].indexOf(a)>=0?"height":"width";if(r&&i){var f=n.modifiersData[o+"#persistent"].padding,l=u(r),d="y"===s?v:x,p="y"===s?y:w,m=n.rects.reference[c]+n.rects.reference[s]-i[s]-n.rects.popper[c],h=i[s]-n.rects.reference[s],b=g(r),O=b?"y"===s?b.clientHeight||0:b.clientWidth||0:0,E=m/2-h/2,j=f[d],D=O-l[c]-f[p],M=O/2-l[c]/2+E,A=Q(j,M,D),L=s;n.modifiersData[o]=((t={})[L]=A,t.centerOffset=A-M,t)}},effect:function(e){var t=e.state,n=e.options,o=e.name,r=n.element,i=void 0===r?"[data-popper-arrow]":r,a=n.padding,s=void 0===a?0:a;null!=i&&("string"!=typeof i||(i=t.elements.popper.querySelector(i)))&&X(t.elements.popper,i)&&(t.elements.arrow=i,t.modifiersData[o+"#persistent"]={padding:G("number"!=typeof s?s:J(s,E))})},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]},{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,n=e.name,o=t.rects.reference,r=t.rects.popper,i=t.modifiersData.preventOverflow,a=K(t,{elementContext:"reference"}),s=K(t,{altBoundary:!0}),c=Z(a,o),f=Z(s,r,i),l=ee(c),u=ee(f);t.modifiersData[n]={referenceClippingOffsets:c,popperEscapeOffsets:f,isReferenceHidden:l,hasPopperEscaped:u},t.attributes.popper=Object.assign(Object.assign({},t.attributes.popper),{},{"data-popper-reference-hidden":l,"data-popper-escaped":u})}}]});class ne{constructor(e=e,t=t){this.document=e,this.Node=t}split(e,t,n){const o=(e,t)=>{if(e.nodeType===this.Node.TEXT_NODE){var r=this.document.createElement("span");return Array.from(e.textContent).map((e=>{var o=this.document.createElement("span");return o.setAttribute("class","izuna-char"),o.setAttribute("data-row",n),o.setAttribute("data-col",t),o.textContent=e,t+=1,o})).forEach((e=>r.appendChild(e))),[r,t]}return Array.from(e.childNodes).forEach((e=>{const[n,r]=o(e,t);t=r,e.replaceWith(n)})),[e,t]};var[r,i]=o(t.cloneNode(!0),0);return e.appendChild(r),e}show(e,t=""){e.nodeType===this.Node.TEXT_NODE?console.log(t+"["+e.textContent+"]"):console.log(t+e.cloneNode().outerHTML),Array.from(e.childNodes).forEach((e=>this.show(e,t+"  ")))}}class oe{constructor(){}getFilesWithExtension(e){return Array.from(document.querySelectorAll("div.file-header div.file-info a")).map((e=>e.textContent)).filter((t=>t.endsWith(e)))}getDiffsForFileWithExtension(e){const t=document.querySelectorAll(`div.file[data-file-type='${e}']`);return 0===t.length&&console.debug(`izuna: Could not find any diff for files with extension: "${e}" code on this page.`),t}isSplitMode(e){return!!e.querySelector("table.file-diff-split")}getFilePath(e){const t=e.querySelector(".file-header .file-info a[title]");if(t&&t.text)return t.text;throw"Could not fetch file name!"}getRows(e,t){const n=t.querySelector("tbody").querySelectorAll("tr[data-hunk], tr.blob-expanded");return 0===n.length&&console.warn(`izuna: Could not find any diff rows for ${e}, this will not affect izuna but is probably an error!`),n}getLineNumberState(e,t){const[n,o]=e.querySelectorAll("td.blob-num"),r=parseInt(n.dataset.lineNumber)-1,i=parseInt(o.dataset.lineNumber)-1;if(t)return{old:{lineNumber:r,lineState:this.getLineState(n)},new:{lineNumber:i,lineState:this.getLineState(o)}};{const e=this.getLineState(n);return{lineNumber:"DELETED"==e?r:i,lineState:e}}}getLineState(e){const t=e.classList;return t.contains("blob-num-addition")?"ADDED":t.contains("blob-num-deletion")?"DELETED":"UNMODIFIED"}getCodeRow(e,t){const[n,o]=e.querySelectorAll("span.blob-code-inner.blob-code-marker");return t?{oldCodeNode:n,newCodeNode:o}:{codeNode:n}}}function re(e,t,n,o,r,i){if(i.oldModuleInfo||i.newPackageInfo){const a=e.getRows(r,n);Array.from(a).forEach((n=>{const r=e.getLineNumberState(n,o),a=e.getCodeRow(n,o);i.oldModuleInfo,i.newModuleInfo;o||(r.lineState,function(e,t,n,o,r,i){e.split(new DocumentFragment,n,i)}(t,0,a.codeNode,r.lineState,0,r.lineNumber))}))}}chrome.runtime.onMessage.addListener(((e,t,n)=>{const o=new oe(document);"whichFiles"===e.cmd?n(o.getFilesWithExtension(".hs")):(console.debug(e),function(e,t){try{const n=t.getDiffsForFileWithExtension(".hs"),o=new ne(document,Node);n.forEach((n=>{const r=t.isSplitMode(n),i=t.getFilePath(n),a={oldModuleInfo:e.oldPackageInfo[i],newModuleInfo:e.newPackageInfo[i]};re(t,o,n,r,i,a),function(e,t,n,o,r,i){const a=n.querySelector("table.diff-table tbody");new MutationObserver((function(a,s){a.forEach((a=>{"childList"===a.type&&re(e,t,n,o,r,i)}))})).observe(a,{attributes:!1,childList:!0,subtree:!1})}(t,o,n,r,i,a)}))}catch(e){const t="izuna: Fatal error occurred, izuna will stop working on this page\nTry reloading your page\nIf the error keep appearing, please report it to https://github.com/matsumonkie/izuna/issues\nError is: "+e;return void console.error(t)}const n=function(){var e=document.createElement("div");e.setAttribute("id","arrow"),e.setAttribute("data-popper-arrow","");var t=document.createElement("div");t.setAttribute("id","tooltipText");var n=document.createElement("pre");return n.setAttribute("id","tooltip"),n.setAttribute("role","tooltip"),n.appendChild(t),n.appendChild(e),n}();document.body.appendChild(n),function(e){let t=null;const n={placement:"top",modifiers:[{name:"offset",options:{offset:[0,8]}}]};document.querySelectorAll("span[data-specialized-type]").forEach((o=>{o.addEventListener("mouseover",(r=>{t=te(o,e,n),e.querySelector("#tooltipText").innerHTML=o.dataset.specializedType.replaceAll(" -> "," ⟶ "),e.setAttribute("data-show","")})),o.addEventListener("mouseleave",(n=>{e.removeAttribute("data-show"),t&&(t.destroy(),t=null)}))}))}(n)}(e,o),n({}))}))})();