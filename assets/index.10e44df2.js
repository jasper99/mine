var qn=Object.defineProperty;var Un=(n,t,e)=>t in n?qn(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var b=(n,t,e)=>(Un(n,typeof t!="symbol"?t+"":t,e),e);const Wn=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function e(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerpolicy&&(o.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?o.credentials="include":r.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(r){if(r.ep)return;r.ep=!0;const o=e(r);fetch(r.href,o)}};Wn();/*!
 * Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */function qt(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);t&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})),e.push.apply(e,a)}return e}function f(n){for(var t=1;t<arguments.length;t++){var e=arguments[t]!=null?arguments[t]:{};t%2?qt(Object(e),!0).forEach(function(a){Xn(n,a,e[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):qt(Object(e)).forEach(function(a){Object.defineProperty(n,a,Object.getOwnPropertyDescriptor(e,a))})}return n}function ot(n){return ot=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ot(n)}function Vn(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function Ut(n,t){for(var e=0;e<t.length;e++){var a=t[e];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(n,a.key,a)}}function Gn(n,t,e){return t&&Ut(n.prototype,t),e&&Ut(n,e),Object.defineProperty(n,"prototype",{writable:!1}),n}function Xn(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function Nt(n,t){return Kn(n)||Zn(n,t)||bn(n,t)||ne()}function ct(n){return Qn(n)||Jn(n)||bn(n)||te()}function Qn(n){if(Array.isArray(n))return yt(n)}function Kn(n){if(Array.isArray(n))return n}function Jn(n){if(typeof Symbol!="undefined"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function Zn(n,t){var e=n==null?null:typeof Symbol!="undefined"&&n[Symbol.iterator]||n["@@iterator"];if(e!=null){var a=[],r=!0,o=!1,i,s;try{for(e=e.call(n);!(r=(i=e.next()).done)&&(a.push(i.value),!(t&&a.length===t));r=!0);}catch(l){o=!0,s=l}finally{try{!r&&e.return!=null&&e.return()}finally{if(o)throw s}}return a}}function bn(n,t){if(!!n){if(typeof n=="string")return yt(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);if(e==="Object"&&n.constructor&&(e=n.constructor.name),e==="Map"||e==="Set")return Array.from(n);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return yt(n,t)}}function yt(n,t){(t==null||t>n.length)&&(t=n.length);for(var e=0,a=new Array(t);e<t;e++)a[e]=n[e];return a}function te(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ne(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Wt=function(){},Pt={},gn={},hn=null,pn={mark:Wt,measure:Wt};try{typeof window!="undefined"&&(Pt=window),typeof document!="undefined"&&(gn=document),typeof MutationObserver!="undefined"&&(hn=MutationObserver),typeof performance!="undefined"&&(pn=performance)}catch{}var ee=Pt.navigator||{},Vt=ee.userAgent,Gt=Vt===void 0?"":Vt,D=Pt,g=gn,Xt=hn,et=pn;D.document;var P=!!g.documentElement&&!!g.head&&typeof g.addEventListener=="function"&&typeof g.createElement=="function",yn=~Gt.indexOf("MSIE")||~Gt.indexOf("Trident/"),O="___FONT_AWESOME___",xt=16,xn="fa",kn="svg-inline--fa",$="data-fa-i2svg",kt="data-fa-pseudo-element",ae="data-fa-pseudo-element-pending",It="data-prefix",_t="data-icon",Qt="fontawesome-i2svg",re="async",ie=["HTML","HEAD","STYLE","SCRIPT"],wn=function(){try{return!0}catch{return!1}}(),Rt={fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit",fa:"solid"},st={solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"},Cn={fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},oe={"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},se=/fa[srltdbk\-\ ]/,An="fa-layers-text",le=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Kit)?.*/i,fe={"900":"fas","400":"far",normal:"far","300":"fal","100":"fat"},Sn=[1,2,3,4,5,6,7,8,9,10],ce=Sn.concat([11,12,13,14,15,16,17,18,19,20]),ue=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Y={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},me=[].concat(ct(Object.keys(st)),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Y.GROUP,Y.SWAP_OPACITY,Y.PRIMARY,Y.SECONDARY]).concat(Sn.map(function(n){return"".concat(n,"x")})).concat(ce.map(function(n){return"w-".concat(n)})),En=D.FontAwesomeConfig||{};function de(n){var t=g.querySelector("script["+n+"]");if(t)return t.getAttribute(n)}function ve(n){return n===""?!0:n==="false"?!1:n==="true"?!0:n}if(g&&typeof g.querySelector=="function"){var be=[["data-family-prefix","familyPrefix"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];be.forEach(function(n){var t=Nt(n,2),e=t[0],a=t[1],r=ve(de(e));r!=null&&(En[a]=r)})}var ge={familyPrefix:xn,styleDefault:"solid",replacementClass:kn,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},J=f(f({},ge),En);J.autoReplaceSvg||(J.observeMutations=!1);var m={};Object.keys(J).forEach(function(n){Object.defineProperty(m,n,{enumerable:!0,set:function(e){J[n]=e,at.forEach(function(a){return a(m)})},get:function(){return J[n]}})});D.FontAwesomeConfig=m;var at=[];function he(n){return at.push(n),function(){at.splice(at.indexOf(n),1)}}var R=xt,T={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function pe(n){if(!(!n||!P)){var t=g.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=n;for(var e=g.head.childNodes,a=null,r=e.length-1;r>-1;r--){var o=e[r],i=(o.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(i)>-1&&(a=o)}return g.head.insertBefore(t,a),n}}var ye="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function tt(){for(var n=12,t="";n-- >0;)t+=ye[Math.random()*62|0];return t}function G(n){for(var t=[],e=(n||[]).length>>>0;e--;)t[e]=n[e];return t}function zt(n){return n.classList?G(n.classList):(n.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Ln(n){return"".concat(n).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function xe(n){return Object.keys(n||{}).reduce(function(t,e){return t+"".concat(e,'="').concat(Ln(n[e]),'" ')},"").trim()}function ut(n){return Object.keys(n||{}).reduce(function(t,e){return t+"".concat(e,": ").concat(n[e].trim(),";")},"")}function Dt(n){return n.size!==T.size||n.x!==T.x||n.y!==T.y||n.rotate!==T.rotate||n.flipX||n.flipY}function ke(n){var t=n.transform,e=n.containerWidth,a=n.iconWidth,r={transform:"translate(".concat(e/2," 256)")},o="translate(".concat(t.x*32,", ").concat(t.y*32,") "),i="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(o," ").concat(i," ").concat(s)},d={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:l,path:d}}function we(n){var t=n.transform,e=n.width,a=e===void 0?xt:e,r=n.height,o=r===void 0?xt:r,i=n.startCentered,s=i===void 0?!1:i,l="";return s&&yn?l+="translate(".concat(t.x/R-a/2,"em, ").concat(t.y/R-o/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/R,"em), calc(-50% + ").concat(t.y/R,"em)) "):l+="translate(".concat(t.x/R,"em, ").concat(t.y/R,"em) "),l+="scale(".concat(t.size/R*(t.flipX?-1:1),", ").concat(t.size/R*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var Ce=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Tn(){var n=xn,t=kn,e=m.familyPrefix,a=m.replacementClass,r=Ce;if(e!==n||a!==t){var o=new RegExp("\\.".concat(n,"\\-"),"g"),i=new RegExp("\\--".concat(n,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");r=r.replace(o,".".concat(e,"-")).replace(i,"--".concat(e,"-")).replace(s,".".concat(a))}return r}var Kt=!1;function bt(){m.autoAddCss&&!Kt&&(pe(Tn()),Kt=!0)}var Ae={mixout:function(){return{dom:{css:Tn,insertCss:bt}}},hooks:function(){return{beforeDOMElementCreation:function(){bt()},beforeI2svg:function(){bt()}}}},M=D||{};M[O]||(M[O]={});M[O].styles||(M[O].styles={});M[O].hooks||(M[O].hooks={});M[O].shims||(M[O].shims=[]);var L=M[O],On=[],Se=function n(){g.removeEventListener("DOMContentLoaded",n),lt=1,On.map(function(t){return t()})},lt=!1;P&&(lt=(g.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(g.readyState),lt||g.addEventListener("DOMContentLoaded",Se));function Ee(n){!P||(lt?setTimeout(n,0):On.push(n))}function nt(n){var t=n.tag,e=n.attributes,a=e===void 0?{}:e,r=n.children,o=r===void 0?[]:r;return typeof n=="string"?Ln(n):"<".concat(t," ").concat(xe(a),">").concat(o.map(nt).join(""),"</").concat(t,">")}function Jt(n,t,e){if(n&&n[t]&&n[t][e])return{prefix:t,iconName:e,icon:n[t][e]}}var Le=function(t,e){return function(a,r,o,i){return t.call(e,a,r,o,i)}},gt=function(t,e,a,r){var o=Object.keys(t),i=o.length,s=r!==void 0?Le(e,r):e,l,d,c;for(a===void 0?(l=1,c=t[o[0]]):(l=0,c=a);l<i;l++)d=o[l],c=s(c,t[d],d,t);return c};function Te(n){for(var t=[],e=0,a=n.length;e<a;){var r=n.charCodeAt(e++);if(r>=55296&&r<=56319&&e<a){var o=n.charCodeAt(e++);(o&64512)==56320?t.push(((r&1023)<<10)+(o&1023)+65536):(t.push(r),e--)}else t.push(r)}return t}function wt(n){var t=Te(n);return t.length===1?t[0].toString(16):null}function Oe(n,t){var e=n.length,a=n.charCodeAt(t),r;return a>=55296&&a<=56319&&e>t+1&&(r=n.charCodeAt(t+1),r>=56320&&r<=57343)?(a-55296)*1024+r-56320+65536:a}function Zt(n){return Object.keys(n).reduce(function(t,e){var a=n[e],r=!!a.icon;return r?t[a.iconName]=a.icon:t[e]=a,t},{})}function Ct(n,t){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=e.skipHooks,r=a===void 0?!1:a,o=Zt(t);typeof L.hooks.addPack=="function"&&!r?L.hooks.addPack(n,Zt(t)):L.styles[n]=f(f({},L.styles[n]||{}),o),n==="fas"&&Ct("fa",t)}var Z=L.styles,Me=L.shims,Ne=Object.values(Cn),Ft=null,Mn={},Nn={},Pn={},In={},_n={},Pe=Object.keys(Rt);function Ie(n){return~me.indexOf(n)}function _e(n,t){var e=t.split("-"),a=e[0],r=e.slice(1).join("-");return a===n&&r!==""&&!Ie(r)?r:null}var Rn=function(){var t=function(o){return gt(Z,function(i,s,l){return i[l]=gt(s,o,{}),i},{})};Mn=t(function(r,o,i){if(o[3]&&(r[o[3]]=i),o[2]){var s=o[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){r[l.toString(16)]=i})}return r}),Nn=t(function(r,o,i){if(r[i]=i,o[2]){var s=o[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){r[l]=i})}return r}),_n=t(function(r,o,i){var s=o[2];return r[i]=i,s.forEach(function(l){r[l]=i}),r});var e="far"in Z||m.autoFetchSvg,a=gt(Me,function(r,o){var i=o[0],s=o[1],l=o[2];return s==="far"&&!e&&(s="fas"),typeof i=="string"&&(r.names[i]={prefix:s,iconName:l}),typeof i=="number"&&(r.unicodes[i.toString(16)]={prefix:s,iconName:l}),r},{names:{},unicodes:{}});Pn=a.names,In=a.unicodes,Ft=mt(m.styleDefault)};he(function(n){Ft=mt(n.styleDefault)});Rn();function Bt(n,t){return(Mn[n]||{})[t]}function Re(n,t){return(Nn[n]||{})[t]}function U(n,t){return(_n[n]||{})[t]}function zn(n){return Pn[n]||{prefix:null,iconName:null}}function ze(n){var t=In[n],e=Bt("fas",n);return t||(e?{prefix:"fas",iconName:e}:null)||{prefix:null,iconName:null}}function F(){return Ft}var Yt=function(){return{prefix:null,iconName:null,rest:[]}};function mt(n){var t=Rt[n],e=st[n]||st[t],a=n in L.styles?n:null;return e||a||null}function dt(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=t.skipLookups,a=e===void 0?!1:e,r=null,o=n.reduce(function(i,s){var l=_e(m.familyPrefix,s);if(Z[s]?(s=Ne.includes(s)?oe[s]:s,r=s,i.prefix=s):Pe.indexOf(s)>-1?(r=s,i.prefix=mt(s)):l?i.iconName=l:s!==m.replacementClass&&i.rest.push(s),!a&&i.prefix&&i.iconName){var d=r==="fa"?zn(i.iconName):{},c=U(i.prefix,i.iconName);d.prefix&&(r=null),i.iconName=d.iconName||c||i.iconName,i.prefix=d.prefix||i.prefix,i.prefix==="far"&&!Z.far&&Z.fas&&!m.autoFetchSvg&&(i.prefix="fas")}return i},Yt());return(o.prefix==="fa"||r==="fa")&&(o.prefix=F()||"fas"),o}var De=function(){function n(){Vn(this,n),this.definitions={}}return Gn(n,[{key:"add",value:function(){for(var e=this,a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];var i=r.reduce(this._pullDefinitions,{});Object.keys(i).forEach(function(s){e.definitions[s]=f(f({},e.definitions[s]||{}),i[s]),Ct(s,i[s]);var l=Cn[s];l&&Ct(l,i[s]),Rn()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(e,a){var r=a.prefix&&a.iconName&&a.icon?{0:a}:a;return Object.keys(r).map(function(o){var i=r[o],s=i.prefix,l=i.iconName,d=i.icon,c=d[2];e[s]||(e[s]={}),c.length>0&&c.forEach(function(u){typeof u=="string"&&(e[s][u]=d)}),e[s][l]=d}),e}}]),n}(),tn=[],W={},V={},Fe=Object.keys(V);function Be(n,t){var e=t.mixoutsTo;return tn=n,W={},Object.keys(V).forEach(function(a){Fe.indexOf(a)===-1&&delete V[a]}),tn.forEach(function(a){var r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(function(i){typeof r[i]=="function"&&(e[i]=r[i]),ot(r[i])==="object"&&Object.keys(r[i]).forEach(function(s){e[i]||(e[i]={}),e[i][s]=r[i][s]})}),a.hooks){var o=a.hooks();Object.keys(o).forEach(function(i){W[i]||(W[i]=[]),W[i].push(o[i])})}a.provides&&a.provides(V)}),e}function At(n,t){for(var e=arguments.length,a=new Array(e>2?e-2:0),r=2;r<e;r++)a[r-2]=arguments[r];var o=W[n]||[];return o.forEach(function(i){t=i.apply(null,[t].concat(a))}),t}function H(n){for(var t=arguments.length,e=new Array(t>1?t-1:0),a=1;a<t;a++)e[a-1]=arguments[a];var r=W[n]||[];r.forEach(function(o){o.apply(null,e)})}function N(){var n=arguments[0],t=Array.prototype.slice.call(arguments,1);return V[n]?V[n].apply(null,t):void 0}function St(n){n.prefix==="fa"&&(n.prefix="fas");var t=n.iconName,e=n.prefix||F();if(!!t)return t=U(e,t)||t,Jt(Dn.definitions,e,t)||Jt(L.styles,e,t)}var Dn=new De,Ye=function(){m.autoReplaceSvg=!1,m.observeMutations=!1,H("noAuto")},je={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return P?(H("beforeI2svg",t),N("pseudoElements2svg",t),N("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=t.autoReplaceSvgRoot;m.autoReplaceSvg===!1&&(m.autoReplaceSvg=!0),m.observeMutations=!0,Ee(function(){He({autoReplaceSvgRoot:e}),H("watch",t)})}},$e={icon:function(t){if(t===null)return null;if(ot(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:U(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],a=mt(t[0]);return{prefix:a,iconName:U(a,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(m.familyPrefix,"-"))>-1||t.match(se))){var r=dt(t.split(" "),{skipLookups:!0});return{prefix:r.prefix||F(),iconName:U(r.prefix,r.iconName)||r.iconName}}if(typeof t=="string"){var o=F();return{prefix:o,iconName:U(o,t)||t}}}},A={noAuto:Ye,config:m,dom:je,parse:$e,library:Dn,findIconDefinition:St,toHtml:nt},He=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=t.autoReplaceSvgRoot,a=e===void 0?g:e;(Object.keys(L.styles).length>0||m.autoFetchSvg)&&P&&m.autoReplaceSvg&&A.dom.i2svg({node:a})};function vt(n,t){return Object.defineProperty(n,"abstract",{get:t}),Object.defineProperty(n,"html",{get:function(){return n.abstract.map(function(a){return nt(a)})}}),Object.defineProperty(n,"node",{get:function(){if(!!P){var a=g.createElement("div");return a.innerHTML=n.html,a.children}}}),n}function qe(n){var t=n.children,e=n.main,a=n.mask,r=n.attributes,o=n.styles,i=n.transform;if(Dt(i)&&e.found&&!a.found){var s=e.width,l=e.height,d={x:s/l/2,y:.5};r.style=ut(f(f({},o),{},{"transform-origin":"".concat(d.x+i.x/16,"em ").concat(d.y+i.y/16,"em")}))}return[{tag:"svg",attributes:r,children:t}]}function Ue(n){var t=n.prefix,e=n.iconName,a=n.children,r=n.attributes,o=n.symbol,i=o===!0?"".concat(t,"-").concat(m.familyPrefix,"-").concat(e):o;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:f(f({},r),{},{id:i}),children:a}]}]}function jt(n){var t=n.icons,e=t.main,a=t.mask,r=n.prefix,o=n.iconName,i=n.transform,s=n.symbol,l=n.title,d=n.maskId,c=n.titleId,u=n.extra,v=n.watchable,h=v===void 0?!1:v,x=a.found?a:e,S=x.width,E=x.height,w=r==="fak",k=[m.replacementClass,o?"".concat(m.familyPrefix,"-").concat(o):""].filter(function(q){return u.classes.indexOf(q)===-1}).filter(function(q){return q!==""||!!q}).concat(u.classes).join(" "),y={children:[],attributes:f(f({},u.attributes),{},{"data-prefix":r,"data-icon":o,class:k,role:u.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(S," ").concat(E)})},I=w&&!~u.classes.indexOf("fa-fw")?{width:"".concat(S/E*16*.0625,"em")}:{};h&&(y.attributes[$]=""),l&&(y.children.push({tag:"title",attributes:{id:y.attributes["aria-labelledby"]||"title-".concat(c||tt())},children:[l]}),delete y.attributes.title);var C=f(f({},y),{},{prefix:r,iconName:o,main:e,mask:a,maskId:d,transform:i,symbol:s,styles:f(f({},I),u.styles)}),_=a.found&&e.found?N("generateAbstractMask",C)||{children:[],attributes:{}}:N("generateAbstractIcon",C)||{children:[],attributes:{}},X=_.children,Q=_.attributes;return C.children=X,C.attributes=Q,s?Ue(C):qe(C)}function nn(n){var t=n.content,e=n.width,a=n.height,r=n.transform,o=n.title,i=n.extra,s=n.watchable,l=s===void 0?!1:s,d=f(f(f({},i.attributes),o?{title:o}:{}),{},{class:i.classes.join(" ")});l&&(d[$]="");var c=f({},i.styles);Dt(r)&&(c.transform=we({transform:r,startCentered:!0,width:e,height:a}),c["-webkit-transform"]=c.transform);var u=ut(c);u.length>0&&(d.style=u);var v=[];return v.push({tag:"span",attributes:d,children:[t]}),o&&v.push({tag:"span",attributes:{class:"sr-only"},children:[o]}),v}function We(n){var t=n.content,e=n.title,a=n.extra,r=f(f(f({},a.attributes),e?{title:e}:{}),{},{class:a.classes.join(" ")}),o=ut(a.styles);o.length>0&&(r.style=o);var i=[];return i.push({tag:"span",attributes:r,children:[t]}),e&&i.push({tag:"span",attributes:{class:"sr-only"},children:[e]}),i}var ht=L.styles;function Et(n){var t=n[0],e=n[1],a=n.slice(4),r=Nt(a,1),o=r[0],i=null;return Array.isArray(o)?i={tag:"g",attributes:{class:"".concat(m.familyPrefix,"-").concat(Y.GROUP)},children:[{tag:"path",attributes:{class:"".concat(m.familyPrefix,"-").concat(Y.SECONDARY),fill:"currentColor",d:o[0]}},{tag:"path",attributes:{class:"".concat(m.familyPrefix,"-").concat(Y.PRIMARY),fill:"currentColor",d:o[1]}}]}:i={tag:"path",attributes:{fill:"currentColor",d:o}},{found:!0,width:t,height:e,icon:i}}var Ve={found:!1,width:512,height:512};function Ge(n,t){!wn&&!m.showMissingIcons&&n&&console.error('Icon with name "'.concat(n,'" and prefix "').concat(t,'" is missing.'))}function Lt(n,t){var e=t;return t==="fa"&&m.styleDefault!==null&&(t=F()),new Promise(function(a,r){if(N("missingIconAbstract"),e==="fa"){var o=zn(n)||{};n=o.iconName||n,t=o.prefix||t}if(n&&t&&ht[t]&&ht[t][n]){var i=ht[t][n];return a(Et(i))}Ge(n,t),a(f(f({},Ve),{},{icon:m.showMissingIcons&&n?N("missingIconAbstract")||{}:{}}))})}var en=function(){},Tt=m.measurePerformance&&et&&et.mark&&et.measure?et:{mark:en,measure:en},K='FA "6.1.1"',Xe=function(t){return Tt.mark("".concat(K," ").concat(t," begins")),function(){return Fn(t)}},Fn=function(t){Tt.mark("".concat(K," ").concat(t," ends")),Tt.measure("".concat(K," ").concat(t),"".concat(K," ").concat(t," begins"),"".concat(K," ").concat(t," ends"))},$t={begin:Xe,end:Fn},rt=function(){};function an(n){var t=n.getAttribute?n.getAttribute($):null;return typeof t=="string"}function Qe(n){var t=n.getAttribute?n.getAttribute(It):null,e=n.getAttribute?n.getAttribute(_t):null;return t&&e}function Ke(n){return n&&n.classList&&n.classList.contains&&n.classList.contains(m.replacementClass)}function Je(){if(m.autoReplaceSvg===!0)return it.replace;var n=it[m.autoReplaceSvg];return n||it.replace}function Ze(n){return g.createElementNS("http://www.w3.org/2000/svg",n)}function ta(n){return g.createElement(n)}function Bn(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=t.ceFn,a=e===void 0?n.tag==="svg"?Ze:ta:e;if(typeof n=="string")return g.createTextNode(n);var r=a(n.tag);Object.keys(n.attributes||[]).forEach(function(i){r.setAttribute(i,n.attributes[i])});var o=n.children||[];return o.forEach(function(i){r.appendChild(Bn(i,{ceFn:a}))}),r}function na(n){var t=" ".concat(n.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var it={replace:function(t){var e=t[0];if(e.parentNode)if(t[1].forEach(function(r){e.parentNode.insertBefore(Bn(r),e)}),e.getAttribute($)===null&&m.keepOriginalSource){var a=g.createComment(na(e));e.parentNode.replaceChild(a,e)}else e.remove()},nest:function(t){var e=t[0],a=t[1];if(~zt(e).indexOf(m.replacementClass))return it.replace(t);var r=new RegExp("".concat(m.familyPrefix,"-.*"));if(delete a[0].attributes.id,a[0].attributes.class){var o=a[0].attributes.class.split(" ").reduce(function(s,l){return l===m.replacementClass||l.match(r)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});a[0].attributes.class=o.toSvg.join(" "),o.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",o.toNode.join(" "))}var i=a.map(function(s){return nt(s)}).join(`
`);e.setAttribute($,""),e.innerHTML=i}};function rn(n){n()}function Yn(n,t){var e=typeof t=="function"?t:rt;if(n.length===0)e();else{var a=rn;m.mutateApproach===re&&(a=D.requestAnimationFrame||rn),a(function(){var r=Je(),o=$t.begin("mutate");n.map(r),o(),e()})}}var Ht=!1;function jn(){Ht=!0}function Ot(){Ht=!1}var ft=null;function on(n){if(!!Xt&&!!m.observeMutations){var t=n.treeCallback,e=t===void 0?rt:t,a=n.nodeCallback,r=a===void 0?rt:a,o=n.pseudoElementsCallback,i=o===void 0?rt:o,s=n.observeMutationsRoot,l=s===void 0?g:s;ft=new Xt(function(d){if(!Ht){var c=F();G(d).forEach(function(u){if(u.type==="childList"&&u.addedNodes.length>0&&!an(u.addedNodes[0])&&(m.searchPseudoElements&&i(u.target),e(u.target)),u.type==="attributes"&&u.target.parentNode&&m.searchPseudoElements&&i(u.target.parentNode),u.type==="attributes"&&an(u.target)&&~ue.indexOf(u.attributeName))if(u.attributeName==="class"&&Qe(u.target)){var v=dt(zt(u.target)),h=v.prefix,x=v.iconName;u.target.setAttribute(It,h||c),x&&u.target.setAttribute(_t,x)}else Ke(u.target)&&r(u.target)})}}),P&&ft.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function ea(){!ft||ft.disconnect()}function aa(n){var t=n.getAttribute("style"),e=[];return t&&(e=t.split(";").reduce(function(a,r){var o=r.split(":"),i=o[0],s=o.slice(1);return i&&s.length>0&&(a[i]=s.join(":").trim()),a},{})),e}function ra(n){var t=n.getAttribute("data-prefix"),e=n.getAttribute("data-icon"),a=n.innerText!==void 0?n.innerText.trim():"",r=dt(zt(n));return r.prefix||(r.prefix=F()),t&&e&&(r.prefix=t,r.iconName=e),r.iconName&&r.prefix||r.prefix&&a.length>0&&(r.iconName=Re(r.prefix,n.innerText)||Bt(r.prefix,wt(n.innerText))),r}function ia(n){var t=G(n.attributes).reduce(function(r,o){return r.name!=="class"&&r.name!=="style"&&(r[o.name]=o.value),r},{}),e=n.getAttribute("title"),a=n.getAttribute("data-fa-title-id");return m.autoA11y&&(e?t["aria-labelledby"]="".concat(m.replacementClass,"-title-").concat(a||tt()):(t["aria-hidden"]="true",t.focusable="false")),t}function oa(){return{iconName:null,title:null,titleId:null,prefix:null,transform:T,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function sn(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},e=ra(n),a=e.iconName,r=e.prefix,o=e.rest,i=ia(n),s=At("parseNodeAttributes",{},n),l=t.styleParser?aa(n):[];return f({iconName:a,title:n.getAttribute("title"),titleId:n.getAttribute("data-fa-title-id"),prefix:r,transform:T,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:o,styles:l,attributes:i}},s)}var sa=L.styles;function $n(n){var t=m.autoReplaceSvg==="nest"?sn(n,{styleParser:!1}):sn(n);return~t.extra.classes.indexOf(An)?N("generateLayersText",n,t):N("generateSvgReplacementMutation",n,t)}function ln(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!P)return Promise.resolve();var e=g.documentElement.classList,a=function(u){return e.add("".concat(Qt,"-").concat(u))},r=function(u){return e.remove("".concat(Qt,"-").concat(u))},o=m.autoFetchSvg?Object.keys(Rt):Object.keys(sa),i=[".".concat(An,":not([").concat($,"])")].concat(o.map(function(c){return".".concat(c,":not([").concat($,"])")})).join(", ");if(i.length===0)return Promise.resolve();var s=[];try{s=G(n.querySelectorAll(i))}catch{}if(s.length>0)a("pending"),r("complete");else return Promise.resolve();var l=$t.begin("onTree"),d=s.reduce(function(c,u){try{var v=$n(u);v&&c.push(v)}catch(h){wn||h.name==="MissingIcon"&&console.error(h)}return c},[]);return new Promise(function(c,u){Promise.all(d).then(function(v){Yn(v,function(){a("active"),a("complete"),r("pending"),typeof t=="function"&&t(),l(),c()})}).catch(function(v){l(),u(v)})})}function la(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;$n(n).then(function(e){e&&Yn([e],t)})}function fa(n){return function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=(t||{}).icon?t:St(t||{}),r=e.mask;return r&&(r=(r||{}).icon?r:St(r||{})),n(a,f(f({},e),{},{mask:r}))}}var ca=function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=e.transform,r=a===void 0?T:a,o=e.symbol,i=o===void 0?!1:o,s=e.mask,l=s===void 0?null:s,d=e.maskId,c=d===void 0?null:d,u=e.title,v=u===void 0?null:u,h=e.titleId,x=h===void 0?null:h,S=e.classes,E=S===void 0?[]:S,w=e.attributes,k=w===void 0?{}:w,y=e.styles,I=y===void 0?{}:y;if(!!t){var C=t.prefix,_=t.iconName,X=t.icon;return vt(f({type:"icon"},t),function(){return H("beforeDOMElementCreation",{iconDefinition:t,params:e}),m.autoA11y&&(v?k["aria-labelledby"]="".concat(m.replacementClass,"-title-").concat(x||tt()):(k["aria-hidden"]="true",k.focusable="false")),jt({icons:{main:Et(X),mask:l?Et(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:C,iconName:_,transform:f(f({},T),r),symbol:i,title:v,maskId:c,titleId:x,extra:{attributes:k,styles:I,classes:E}})})}},ua={mixout:function(){return{icon:fa(ca)}},hooks:function(){return{mutationObserverCallbacks:function(e){return e.treeCallback=ln,e.nodeCallback=la,e}}},provides:function(t){t.i2svg=function(e){var a=e.node,r=a===void 0?g:a,o=e.callback,i=o===void 0?function(){}:o;return ln(r,i)},t.generateSvgReplacementMutation=function(e,a){var r=a.iconName,o=a.title,i=a.titleId,s=a.prefix,l=a.transform,d=a.symbol,c=a.mask,u=a.maskId,v=a.extra;return new Promise(function(h,x){Promise.all([Lt(r,s),c.iconName?Lt(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(S){var E=Nt(S,2),w=E[0],k=E[1];h([e,jt({icons:{main:w,mask:k},prefix:s,iconName:r,transform:l,symbol:d,maskId:u,title:o,titleId:i,extra:v,watchable:!0})])}).catch(x)})},t.generateAbstractIcon=function(e){var a=e.children,r=e.attributes,o=e.main,i=e.transform,s=e.styles,l=ut(s);l.length>0&&(r.style=l);var d;return Dt(i)&&(d=N("generateAbstractTransformGrouping",{main:o,transform:i,containerWidth:o.width,iconWidth:o.width})),a.push(d||o.icon),{children:a,attributes:r}}}},ma={mixout:function(){return{layer:function(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.classes,o=r===void 0?[]:r;return vt({type:"layer"},function(){H("beforeDOMElementCreation",{assembler:e,params:a});var i=[];return e(function(s){Array.isArray(s)?s.map(function(l){i=i.concat(l.abstract)}):i=i.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(m.familyPrefix,"-layers")].concat(ct(o)).join(" ")},children:i}]})}}}},da={mixout:function(){return{counter:function(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.title,o=r===void 0?null:r,i=a.classes,s=i===void 0?[]:i,l=a.attributes,d=l===void 0?{}:l,c=a.styles,u=c===void 0?{}:c;return vt({type:"counter",content:e},function(){return H("beforeDOMElementCreation",{content:e,params:a}),We({content:e.toString(),title:o,extra:{attributes:d,styles:u,classes:["".concat(m.familyPrefix,"-layers-counter")].concat(ct(s))}})})}}}},va={mixout:function(){return{text:function(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.transform,o=r===void 0?T:r,i=a.title,s=i===void 0?null:i,l=a.classes,d=l===void 0?[]:l,c=a.attributes,u=c===void 0?{}:c,v=a.styles,h=v===void 0?{}:v;return vt({type:"text",content:e},function(){return H("beforeDOMElementCreation",{content:e,params:a}),nn({content:e,transform:f(f({},T),o),title:s,extra:{attributes:u,styles:h,classes:["".concat(m.familyPrefix,"-layers-text")].concat(ct(d))}})})}}},provides:function(t){t.generateLayersText=function(e,a){var r=a.title,o=a.transform,i=a.extra,s=null,l=null;if(yn){var d=parseInt(getComputedStyle(e).fontSize,10),c=e.getBoundingClientRect();s=c.width/d,l=c.height/d}return m.autoA11y&&!r&&(i.attributes["aria-hidden"]="true"),Promise.resolve([e,nn({content:e.innerHTML,width:s,height:l,transform:o,title:r,extra:i,watchable:!0})])}}},ba=new RegExp('"',"ug"),fn=[1105920,1112319];function ga(n){var t=n.replace(ba,""),e=Oe(t,0),a=e>=fn[0]&&e<=fn[1],r=t.length===2?t[0]===t[1]:!1;return{value:wt(r?t[0]:t),isSecondary:a||r}}function cn(n,t){var e="".concat(ae).concat(t.replace(":","-"));return new Promise(function(a,r){if(n.getAttribute(e)!==null)return a();var o=G(n.children),i=o.filter(function(_){return _.getAttribute(kt)===t})[0],s=D.getComputedStyle(n,t),l=s.getPropertyValue("font-family").match(le),d=s.getPropertyValue("font-weight"),c=s.getPropertyValue("content");if(i&&!l)return n.removeChild(i),a();if(l&&c!=="none"&&c!==""){var u=s.getPropertyValue("content"),v=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?st[l[2].toLowerCase()]:fe[d],h=ga(u),x=h.value,S=h.isSecondary,E=l[0].startsWith("FontAwesome"),w=Bt(v,x),k=w;if(E){var y=ze(x);y.iconName&&y.prefix&&(w=y.iconName,v=y.prefix)}if(w&&!S&&(!i||i.getAttribute(It)!==v||i.getAttribute(_t)!==k)){n.setAttribute(e,k),i&&n.removeChild(i);var I=oa(),C=I.extra;C.attributes[kt]=t,Lt(w,v).then(function(_){var X=jt(f(f({},I),{},{icons:{main:_,mask:Yt()},prefix:v,iconName:k,extra:C,watchable:!0})),Q=g.createElement("svg");t==="::before"?n.insertBefore(Q,n.firstChild):n.appendChild(Q),Q.outerHTML=X.map(function(q){return nt(q)}).join(`
`),n.removeAttribute(e),a()}).catch(r)}else a()}else a()})}function ha(n){return Promise.all([cn(n,"::before"),cn(n,"::after")])}function pa(n){return n.parentNode!==document.head&&!~ie.indexOf(n.tagName.toUpperCase())&&!n.getAttribute(kt)&&(!n.parentNode||n.parentNode.tagName!=="svg")}function un(n){if(!!P)return new Promise(function(t,e){var a=G(n.querySelectorAll("*")).filter(pa).map(ha),r=$t.begin("searchPseudoElements");jn(),Promise.all(a).then(function(){r(),Ot(),t()}).catch(function(){r(),Ot(),e()})})}var ya={hooks:function(){return{mutationObserverCallbacks:function(e){return e.pseudoElementsCallback=un,e}}},provides:function(t){t.pseudoElements2svg=function(e){var a=e.node,r=a===void 0?g:a;m.searchPseudoElements&&un(r)}}},mn=!1,xa={mixout:function(){return{dom:{unwatch:function(){jn(),mn=!0}}}},hooks:function(){return{bootstrap:function(){on(At("mutationObserverCallbacks",{}))},noAuto:function(){ea()},watch:function(e){var a=e.observeMutationsRoot;mn?Ot():on(At("mutationObserverCallbacks",{observeMutationsRoot:a}))}}}},dn=function(t){var e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(a,r){var o=r.toLowerCase().split("-"),i=o[0],s=o.slice(1).join("-");if(i&&s==="h")return a.flipX=!0,a;if(i&&s==="v")return a.flipY=!0,a;if(s=parseFloat(s),isNaN(s))return a;switch(i){case"grow":a.size=a.size+s;break;case"shrink":a.size=a.size-s;break;case"left":a.x=a.x-s;break;case"right":a.x=a.x+s;break;case"up":a.y=a.y-s;break;case"down":a.y=a.y+s;break;case"rotate":a.rotate=a.rotate+s;break}return a},e)},ka={mixout:function(){return{parse:{transform:function(e){return dn(e)}}}},hooks:function(){return{parseNodeAttributes:function(e,a){var r=a.getAttribute("data-fa-transform");return r&&(e.transform=dn(r)),e}}},provides:function(t){t.generateAbstractTransformGrouping=function(e){var a=e.main,r=e.transform,o=e.containerWidth,i=e.iconWidth,s={transform:"translate(".concat(o/2," 256)")},l="translate(".concat(r.x*32,", ").concat(r.y*32,") "),d="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),c="rotate(".concat(r.rotate," 0 0)"),u={transform:"".concat(l," ").concat(d," ").concat(c)},v={transform:"translate(".concat(i/2*-1," -256)")},h={outer:s,inner:u,path:v};return{tag:"g",attributes:f({},h.outer),children:[{tag:"g",attributes:f({},h.inner),children:[{tag:a.icon.tag,children:a.icon.children,attributes:f(f({},a.icon.attributes),h.path)}]}]}}}},pt={x:0,y:0,width:"100%",height:"100%"};function vn(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return n.attributes&&(n.attributes.fill||t)&&(n.attributes.fill="black"),n}function wa(n){return n.tag==="g"?n.children:[n]}var Ca={hooks:function(){return{parseNodeAttributes:function(e,a){var r=a.getAttribute("data-fa-mask"),o=r?dt(r.split(" ").map(function(i){return i.trim()})):Yt();return o.prefix||(o.prefix=F()),e.mask=o,e.maskId=a.getAttribute("data-fa-mask-id"),e}}},provides:function(t){t.generateAbstractMask=function(e){var a=e.children,r=e.attributes,o=e.main,i=e.mask,s=e.maskId,l=e.transform,d=o.width,c=o.icon,u=i.width,v=i.icon,h=ke({transform:l,containerWidth:u,iconWidth:d}),x={tag:"rect",attributes:f(f({},pt),{},{fill:"white"})},S=c.children?{children:c.children.map(vn)}:{},E={tag:"g",attributes:f({},h.inner),children:[vn(f({tag:c.tag,attributes:f(f({},c.attributes),h.path)},S))]},w={tag:"g",attributes:f({},h.outer),children:[E]},k="mask-".concat(s||tt()),y="clip-".concat(s||tt()),I={tag:"mask",attributes:f(f({},pt),{},{id:k,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[x,w]},C={tag:"defs",children:[{tag:"clipPath",attributes:{id:y},children:wa(v)},I]};return a.push(C,{tag:"rect",attributes:f({fill:"currentColor","clip-path":"url(#".concat(y,")"),mask:"url(#".concat(k,")")},pt)}),{children:a,attributes:r}}}},Aa={provides:function(t){var e=!1;D.matchMedia&&(e=D.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var a=[],r={fill:"currentColor"},o={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};a.push({tag:"path",attributes:f(f({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var i=f(f({},o),{},{attributeName:"opacity"}),s={tag:"circle",attributes:f(f({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||s.children.push({tag:"animate",attributes:f(f({},o),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:f(f({},i),{},{values:"1;0;1;1;0;1;"})}),a.push(s),a.push({tag:"path",attributes:f(f({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:f(f({},i),{},{values:"1;0;0;0;0;1;"})}]}),e||a.push({tag:"path",attributes:f(f({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:f(f({},i),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:a}}}},Sa={hooks:function(){return{parseNodeAttributes:function(e,a){var r=a.getAttribute("data-fa-symbol"),o=r===null?!1:r===""?!0:r;return e.symbol=o,e}}}},Ea=[Ae,ua,ma,da,va,ya,xa,ka,Ca,Aa,Sa];Be(Ea,{mixoutsTo:A});A.noAuto;A.config;A.library;A.dom;A.parse;A.findIconDefinition;A.toHtml;var j=A.icon;A.layer;A.text;A.counter;/*!
 * Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */var Hn={prefix:"fas",iconName:"bomb",icon:[512,512,[128163],"f1e2","M440.8 4.994C441.9 1.99 444.8 0 448 0C451.2 0 454.1 1.99 455.2 4.994L469.3 42.67L507 56.79C510 57.92 512 60.79 512 64C512 67.21 510 70.08 507 71.21L469.3 85.33L455.2 123C454.1 126 451.2 128 448 128C444.8 128 441.9 126 440.8 123L426.7 85.33L388.1 71.21C385.1 70.08 384 67.21 384 64C384 60.79 385.1 57.92 388.1 56.79L426.7 42.67L440.8 4.994zM289.4 97.37C301.9 84.88 322.1 84.88 334.6 97.37L363.3 126.1L380.7 108.7C386.9 102.4 397.1 102.4 403.3 108.7C409.6 114.9 409.6 125.1 403.3 131.3L385.9 148.7L414.6 177.4C427.1 189.9 427.1 210.1 414.6 222.6L403.8 233.5C411.7 255.5 416 279.3 416 304C416 418.9 322.9 512 208 512C93.12 512 0 418.9 0 304C0 189.1 93.12 96 208 96C232.7 96 256.5 100.3 278.5 108.3L289.4 97.37zM95.1 296C95.1 238.6 142.6 192 199.1 192H207.1C216.8 192 223.1 184.8 223.1 176C223.1 167.2 216.8 160 207.1 160H199.1C124.9 160 63.1 220.9 63.1 296V304C63.1 312.8 71.16 320 79.1 320C88.84 320 95.1 312.8 95.1 304V296z"]},La={prefix:"fas",iconName:"bug-slash",icon:[640,512,[],"e490","M239.1 162.8C247.7 160.1 255.7 160 264 160H376C393.1 160 409.2 164.1 423.5 171.4C424.1 170.7 424.7 170 425.4 169.4L489.4 105.4C501.9 92.88 522.1 92.88 534.6 105.4C547.1 117.9 547.1 138.1 534.6 150.6L470.6 214.6C469.1 215.3 469.3 215.9 468.6 216.5C474.7 228.5 478.6 241.9 479.7 256H544C561.7 256 576 270.3 576 288C576 305.7 561.7 320 544 320H480C480 329.9 479.1 339.5 477.4 348.9L630.8 469.1C641.2 477.3 643.1 492.4 634.9 502.8C626.7 513.2 611.6 515.1 601.2 506.9L9.196 42.89C-1.236 34.71-3.065 19.63 5.112 9.196C13.29-1.236 28.37-3.065 38.81 5.112L239.1 162.8zM416 96V99.56C416 115.3 403.3 128 387.6 128H252.4C236.7 128 224 115.3 224 99.56V96C224 42.98 266.1 .001 320 .001C373 .001 416 42.98 416 96V96zM160.3 256C161.1 245.1 163.3 236.3 166.7 227.3L304 335.5V479.2C269.5 475.8 238.2 461.4 213.7 439.6L150.6 502.6C138.1 515.1 117.9 515.1 105.4 502.6C92.88 490.1 92.88 469.9 105.4 457.4L169.4 393.4C171.2 391.5 173.3 389.9 175.4 388.6C165.5 367.8 160 344.6 160 320H96C78.33 320 64 305.7 64 288C64 270.3 78.33 256 96 256H160.3zM336 479.2V360.7L430.8 435.4C405.7 459.6 372.7 475.6 336 479.2V479.2z"]},Ta={prefix:"fas",iconName:"burst",icon:[512,512,[],"e4dc","M200.9 116.2L233.2 16.6C236.4 6.706 245.6 .001 256 .001C266.4 .001 275.6 6.706 278.8 16.6L313.3 123.1L383.8 97.45C392.6 94.26 402.4 96.43 408.1 103C415.6 109.6 417.7 119.4 414.6 128.2L388.9 198.7L495.4 233.2C505.3 236.4 512 245.6 512 256C512 266.4 505.3 275.6 495.4 278.8L392.3 312.2L445.2 412.8C450.1 422.1 448.4 433.5 440.1 440.1C433.5 448.4 422.1 450.1 412.8 445.2L312.2 392.3L278.8 495.4C275.6 505.3 266.4 512 256 512C245.6 512 236.4 505.3 233.2 495.4L199.8 392.3L99.17 445.2C89.87 450.1 78.46 448.4 71.03 440.1C63.6 433.5 61.87 422.1 66.76 412.8L119.7 312.2L16.6 278.8C6.705 275.6 .0003 266.4 .0003 256C.0003 245.6 6.705 236.4 16.6 233.2L116.2 200.9L4.208 37.57C-2.33 28.04-1.143 15.2 7.03 7.03C15.2-1.144 28.04-2.33 37.57 4.208L200.9 116.2z"]},Oa={prefix:"fas",iconName:"clock",icon:[512,512,[128339,"clock-four"],"f017","M256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512zM232 256C232 264 236 271.5 242.7 275.1L338.7 339.1C349.7 347.3 364.6 344.3 371.1 333.3C379.3 322.3 376.3 307.4 365.3 300L280 243.2V120C280 106.7 269.3 96 255.1 96C242.7 96 231.1 106.7 231.1 120L232 256z"]},Ma={prefix:"fas",iconName:"plug-circle-bolt",icon:[576,512,[],"e55b","M96 0C113.7 0 128 14.33 128 32V128H64V32C64 14.33 78.33 0 96 0zM288 0C305.7 0 320 14.33 320 32V128H256V32C256 14.33 270.3 0 288 0zM352 160C369.7 160 384 174.3 384 192C384 194.3 383.7 196.6 383.3 198.8C309.8 219.1 256 287.7 256 368C256 379.4 257.1 390.5 259.1 401.3C248.1 406.4 236.3 410.3 224 412.8V512H160V412.8C86.97 397.1 32 333.4 32 256V224C14.33 224 0 209.7 0 192C0 174.3 14.33 160 32 160H352zM288 368C288 288.5 352.5 224 432 224C511.5 224 576 288.5 576 368C576 447.5 511.5 512 432 512C352.5 512 288 447.5 288 368zM464.8 286.4L368.8 358.4C364.7 361.5 362.1 366.9 364.6 371.8C366.2 376.7 370.8 380 376 380H411.6L381.5 434.2C378.8 439.1 379.8 445.3 384.1 449C388.4 452.8 394.7 452.1 399.2 449.6L495.2 377.6C499.3 374.5 501 369.1 499.4 364.2C497.8 359.3 493.2 356 488 356H452.4L482.5 301.8C485.2 296.9 484.2 290.7 479.9 286.1C475.6 283.2 469.3 283 464.8 286.4V286.4z"]},Na={prefix:"fas",iconName:"triangle-exclamation",icon:[512,512,[9888,"exclamation-triangle","warning"],"f071","M506.3 417l-213.3-364c-16.33-28-57.54-28-73.98 0l-213.2 364C-10.59 444.9 9.849 480 42.74 480h426.6C502.1 480 522.6 445 506.3 417zM232 168c0-13.25 10.75-24 24-24S280 154.8 280 168v128c0 13.25-10.75 24-23.1 24S232 309.3 232 296V168zM256 416c-17.36 0-31.44-14.08-31.44-31.44c0-17.36 14.07-31.44 31.44-31.44s31.44 14.08 31.44 31.44C287.4 401.9 273.4 416 256 416z"]},Pa="/mine/assets/openingSound.d73996b5.mp3",Ia="/mine/assets/collisionSound.eb2b9625.wav",_a="/mine/assets/explosion.170f8bdb.mp3",Ra="/mine/assets/pianoSound.9503fe7c.mp3";let Mt={row:10,column:7,num:260},z={openingSound:Pa,collisionSound:Ia,explosionSound:_a,pianoSound:Ra};class za{constructor(t,e,a){b(this,"type");b(this,"trigger");b(this,"element");b(this,"opened");b(this,"markBomb");b(this,"bombNumber");this.row=t,this.column=e,this.content=a,this.element=document.createElement("div"),this.element.classList.add("square"),this.type="none",this.opened=!1,this.markBomb=!1,this.trigger=!1,this.bombNumber=0}info(){return{row:this.row,column:this.column,content:this.content,type:this.type,trigger:this.trigger}}setupBomb(){this.type="bomb"}setupTag(t){t<=0||(this.bombNumber=t,this.type="tag")}setupTrigger(){this.trigger=!0}resetModel(){this.type="none",this.opened=!1,this.markBomb=!1,this.trigger=!1,this.bombNumber=0}}var p=new class{constructor(){b(this,"bombQuantity",0);b(this,"column",0);b(this,"row",0);b(this,"bombBlast",!1);b(this,"soundMute",!1);b(this,"gameAudio",new Audio)}set bomb(n){this.bombQuantity=n,document.querySelector("#bombQuantity").innerText=this.bombQuantity+""}get bomb(){return this.bombQuantity}playSound(n){this.soundMute||(this.gameAudio.src=n,this.gameAudio.volume=.3,this.gameAudio.play())}stopSound(){this.gameAudio.pause()}};class Da{constructor(){b(this,"box",[]);b(this,"app");b(this,"appWidth");b(this,"boxWidth");b(this,"column");b(this,"row");this.app=document.querySelector(".content"),this.appWidth=+getComputedStyle(this.app).width.replace(/(\d+).+/,"$1"),this.boxWidth=50,this.column=Math.floor(this.appWidth/(this.boxWidth+4)),this.row=Math.ceil(+Mt.num/this.column),p.row=this.row,p.column=this.column}render(){this.navbar(),this.boxLayout()}boxLayout(){let t=1;for(;t<=Mt.num;){const e=Math.ceil(t/this.column),a=t-this.column*(e-1),r=new za(e,a,t-1);this.box.push(r),this.app.appendChild(r.element),t++}}resetLayout(){document.querySelector("#spendTime").innerText="00:00",this.box.forEach(t=>{t.resetModel(),t.element.classList.remove("bomb","tag","opened"),t.element.innerHTML=""})}navbar(){document.querySelector("#spendTime").innerText="00:00",document.querySelector("#bombQuantity").innerText="?";const t=document.createElement("div");t.innerHTML=j(Oa).html[0],document.querySelector(".clock").insertAdjacentElement("afterbegin",t);const e=document.createElement("div");e.innerHTML=j(Hn).html[0],document.querySelector(".bombUnlock").insertAdjacentElement("afterbegin",e);const a=document.querySelector(".btnStart>span");a.innerHTML=j(Ma).html[0];const r=document.querySelector(".btnDebug>span");r.innerHTML=j(La).html[0]}activeButton(){document.querySelector(".btnStart").classList.add("btnCursor","btnActive"),document.querySelector(".btnDebug").classList.add("btnCursor")}activeDebug(){document.querySelector(".btnStart").classList.remove("btnActive"),document.querySelector(".btnDebug").classList.add("btnActive")}showLog(){console.log(this.appWidth),console.log(`row: ${this.row}, column: ${this.column}`),console.log(this.box[65])}}class Fa{constructor(t){b(this,"boxBombs");b(this,"boxTags");b(this,"bombQuantity");this.box=t,this.boxBombs=[],this.boxTags=[],this.bombQuantity=Math.ceil(Mt.num*.1)+Math.ceil(Math.random()*10),this.bomb(),this.tag(),this.trigger(),p.bomb=this.bombQuantity}setupBumb(){for(;this.boxBombs.length<this.bombQuantity;){const t=Math.floor(Math.random()*this.box.length);this.boxBombs=[...new Set([...this.boxBombs,t])]}}bomb(){this.setupBumb(),this.boxBombs.forEach(t=>{this.box[t].setupBomb()})}setupTag(){this.box.filter(t=>t.info().type==="bomb").forEach(t=>{const{row:e,column:a}=t.info(),r=this.getBombNei(e,a);let o=this.box.filter(i=>r.filter(l=>l.row===i.info().row&&l.column===i.info().column).length>0&&i.info().type!=="bomb");this.boxTags.push(...o)})}tag(){this.setupTag(),this.boxTags.forEach(t=>{const e=this.calculateTag(t);t.setupTag(e)})}trigger(){const t=this.box.filter(a=>a.info().type!=="bomb");let e=[];for(;e.length<Math.floor(this.box.length*.05);){const a=Math.floor(Math.random()*t.length);e=[...new Set([...e,a])]}e.forEach(a=>{t[a].setupTrigger()})}getBombNei(t,e){return[{row:t-1,column:e-1},{row:t-1,column:e},{row:t-1,column:e+1},{row:t,column:e-1},{row:t,column:e+1},{row:t+1,column:e-1},{row:t+1,column:e},{row:t+1,column:e+1}]}calculateTag(t){const{row:e,column:a}=t.info(),r=[e-1,e,e+1],o=[a-1,a,a+1];return this.box.filter(i=>{const{row:s,column:l}=i.info();return i.info().type==="bomb"&&r.indexOf(s)>-1&&o.indexOf(l)>-1}).length}showLog(){this.box.filter(t=>t.info().trigger).forEach(t=>{console.log(`row: ${t.info().row}, column: ${t.info().column}`)})}}class Ba{constructor(t){b(this,"divSquare");b(this,"bombQuantity");b(this,"intervalID");this.box=t,this.divSquare=document.querySelectorAll("div.square"),this.bombQuantity=p.bomb,this.dispatchClickEvent(),this.dispatchMarkBombEvent()}dispatchClickEvent(){const t=this;t.divSquare.forEach(e=>{e.addEventListener("click",function(){const a=t.box.filter(r=>r.element===this)[0];t.removeSVG(this.children),this.classList.add("opened"),a.opened=!0,t.encounterBomb(a),t.encounterTag(a),t.encouterTigger(a),p.bombBlast||p.playSound(z.collisionSound)})})}dispatchMarkBombEvent(){const t=this;t.divSquare.forEach(e=>{e.addEventListener("contextmenu",function(){const a=t.box.filter(r=>r.element===this)[0];if(t.removeSVG(this.children),!a.opened){if(a.markBomb){a.markBomb=!1,p.bomb++;return}this.innerHTML=j(Na).html[0],a.markBomb=!0,p.bomb--}})})}GameOpeningEvent(){const t=this.box.filter(r=>r.info().trigger);let e=0,a=0;for(;e=Math.floor(Math.random()*t.length),!(t[e].info().row>4&&t[e].info().column>3&&t[e].info().row<p.row-3&&t[e].info().column<p.column-3||++a>15););this.encouterTigger(t[e]),this.spendTime()}gameStopEvent(){clearInterval(this.intervalID)}spendTime(){this.intervalID=setInterval(()=>{let t=document.querySelector("#spendTime").innerText,e=+t.split(":")[0],a=+t.split(":")[1]+1;document.querySelector("#spendTime").innerText=this.formatTime(e,a)},1e3)}formatTime(t,e){return e>=60&&(t++,e=0),("0"+t).replace(/.*(\d{2})$/,"$1")+":"+("0"+e).replace(/.*(\d{2})$/,"$1")}removeSVG(t){const e=Array.from(t).filter(a=>a.tagName==="svg");e.length>0&&e[0].remove()}encounterBomb(t){t.info().type==="bomb"&&(t.element.innerHTML=j(Hn).html[0]+j(Ta).html[0],t.element.classList.add("bomb"),p.bombBlast=!0,p.playSound(z.explosionSound))}encounterTag(t){t.info().type==="tag"&&(t.element.innerHTML=t.bombNumber+"",t.element.classList.add("tag"))}encouterTigger(t){t.info().trigger&&this.triggerOpenRange(t).forEach(a=>{a.opened=!0,a.element.classList.add("opened"),this.encounterTag(a)})}triggerOpenRange(t){return this.box.filter(a=>a.info().row>=t.info().row-3&&a.info().row<=t.info().row+3&&a.info().column>=t.info().column-3&&a.info().column<=t.info().column+3&&a.info().type!=="bomb"&&a.markBomb===!1)}}class Ya{constructor(t){b(this,"divSquare");b(this,"eventAnimation");this.boxColumn=t,this.divSquare=document.querySelectorAll("div.square"),this.eventAnimation=new CustomEvent("divSquare")}animationListener(){this.divSquare[this.divSquare.length-1].addEventListener("animationend",()=>{this.divSquare.forEach(t=>{t.style.animation="",t.removeAttribute("style")}),document.dispatchEvent(this.eventAnimation)})}openingAnimation(){let e="",a=0;for(;a<this.divSquare.length;)a>0&&a%this.boxColumn===0&&(e=200*(a/this.boxColumn)+"ms"),this.divSquare[a++].style.animation=`start 1s ${e} backwards`}}var B=(n=>(n.ready="ready",n.play="play",n.restart="restart",n.debug="debug",n.stop="stop",n))(B||{});class ja{constructor(){b(this,"layout");b(this,"boxEvent");b(this,"boxAnimation");b(this,"bindingEvent",!1);b(this,"state");b(this,"contentDiv",document.querySelector(".content"));this.layout=new Da,this.layout.render(),this.boxEvent=new Ba(this.layout.box),this.boxAnimation=new Ya(this.layout.column),this.contentDiv.classList.add("contentStart"),this.state=B.ready,this.gameBindEvent(),Promise.all(this.loadAudio())}loadAudio(){return[z.collisionSound,z.explosionSound,z.openingSound,z.pianoSound].map(e=>{let a=new Audio;return new Promise(r=>{a.src=e,a.onload=()=>{r(a.src)}})})}gameStart(){this.contentDiv.addEventListener("click",()=>{this.state===B.ready&&(this.contentDiv.classList.remove("contentStart"),this.game())})}gameBindEvent(){var t,e;document.body.oncontextmenu=()=>!1,this.boxAnimation.animationListener(),document.addEventListener("divSquare",this.afterAnimation.bind(this)),(t=document.querySelector(".btnStart"))==null||t.addEventListener("click",this.gameRestart.bind(this)),(e=document.querySelector(".btnDebug"))==null||e.addEventListener("click",this.gameDebug.bind(this)),setInterval(()=>{if(!["stop","ready","restart"].some(a=>a===this.state)&&(p.bomb===0||p.bombBlast)){this.state=B.stop,this.boxEvent.gameStopEvent();const a=p.bombBlast?"contentLose":"contentWin";this.contentDiv.classList.add(a),p.bomb===0&&p.playSound(z.pianoSound)}},200)}game(){new Fa(this.layout.box),this.boxAnimation.openingAnimation(),p.playSound(z.openingSound)}gameRestart(){["restart","ready"].some(t=>t===this.state)||(console.log("gameRestart"),this.state=B.restart,p.bombBlast=!1,this.contentDiv.classList.remove("contentWin","contentLose"),document.querySelector(".btnStart").classList.remove("btnActive"),document.querySelector(".btnDebug").classList.remove("btnActive"),this.boxEvent.gameStopEvent(),this.layout.resetLayout(),this.game())}afterAnimation(){this.boxEvent.GameOpeningEvent(),this.delayTime(500).then(()=>{p.stopSound(),this.layout.activeButton(),this.state=B.play})}gameDebug(){["ready","restart","debug"].some(t=>t===this.state)||(this.state=B.debug,p.soundMute=!0,this.layout.box.forEach(t=>{t.element.classList.add("opened"),t.opened=!0,this.boxEvent.encounterBomb(t),this.boxEvent.encounterTag(t)}),this.layout.activeDebug(),p.soundMute=!1)}delayTime(t=100,e=()=>{}){return new Promise(a=>{setTimeout(()=>a(e()),t)})}}const $a=new ja;$a.gameStart();
