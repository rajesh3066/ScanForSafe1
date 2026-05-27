function Lu(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const s in r)if(s!=="default"&&!(s in e)){const o=Object.getOwnPropertyDescriptor(r,s);o&&Object.defineProperty(e,s,o.get?o:{enumerable:!0,get:()=>r[s]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}})();function Bu(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ka={exports:{}},Si={},Za={exports:{}},M={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pr=Symbol.for("react.element"),Mu=Symbol.for("react.portal"),Tu=Symbol.for("react.fragment"),_u=Symbol.for("react.strict_mode"),Fu=Symbol.for("react.profiler"),Wu=Symbol.for("react.provider"),Ou=Symbol.for("react.context"),Au=Symbol.for("react.forward_ref"),Du=Symbol.for("react.suspense"),Uu=Symbol.for("react.memo"),$u=Symbol.for("react.lazy"),Cl=Symbol.iterator;function Hu(e){return e===null||typeof e!="object"?null:(e=Cl&&e[Cl]||e["@@iterator"],typeof e=="function"?e:null)}var Ja={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ec=Object.assign,tc={};function yn(e,t,n){this.props=e,this.context=t,this.refs=tc,this.updater=n||Ja}yn.prototype.isReactComponent={};yn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};yn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function nc(){}nc.prototype=yn.prototype;function So(e,t,n){this.props=e,this.context=t,this.refs=tc,this.updater=n||Ja}var Co=So.prototype=new nc;Co.constructor=So;ec(Co,yn.prototype);Co.isPureReactComponent=!0;var zl=Array.isArray,rc=Object.prototype.hasOwnProperty,zo={current:null},ic={key:!0,ref:!0,__self:!0,__source:!0};function sc(e,t,n){var r,s={},o=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(o=""+t.key),t)rc.call(t,r)&&!ic.hasOwnProperty(r)&&(s[r]=t[r]);var a=arguments.length-2;if(a===1)s.children=n;else if(1<a){for(var c=Array(a),d=0;d<a;d++)c[d]=arguments[d+2];s.children=c}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)s[r]===void 0&&(s[r]=a[r]);return{$$typeof:pr,type:e,key:o,ref:l,props:s,_owner:zo.current}}function Vu(e,t){return{$$typeof:pr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function No(e){return typeof e=="object"&&e!==null&&e.$$typeof===pr}function Yu(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Nl=/\/+/g;function Yi(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Yu(""+e.key):t.toString(36)}function Wr(e,t,n,r,s){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case pr:case Mu:l=!0}}if(l)return l=e,s=s(l),e=r===""?"."+Yi(l,0):r,zl(s)?(n="",e!=null&&(n=e.replace(Nl,"$&/")+"/"),Wr(s,t,n,"",function(d){return d})):s!=null&&(No(s)&&(s=Vu(s,n+(!s.key||l&&l.key===s.key?"":(""+s.key).replace(Nl,"$&/")+"/")+e)),t.push(s)),1;if(l=0,r=r===""?".":r+":",zl(e))for(var a=0;a<e.length;a++){o=e[a];var c=r+Yi(o,a);l+=Wr(o,t,n,c,s)}else if(c=Hu(e),typeof c=="function")for(e=c.call(e),a=0;!(o=e.next()).done;)o=o.value,c=r+Yi(o,a++),l+=Wr(o,t,n,c,s);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function wr(e,t,n){if(e==null)return e;var r=[],s=0;return Wr(e,r,"","",function(o){return t.call(n,o,s++)}),r}function Qu(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var de={current:null},Or={transition:null},Xu={ReactCurrentDispatcher:de,ReactCurrentBatchConfig:Or,ReactCurrentOwner:zo};function oc(){throw Error("act(...) is not supported in production builds of React.")}M.Children={map:wr,forEach:function(e,t,n){wr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return wr(e,function(){t++}),t},toArray:function(e){return wr(e,function(t){return t})||[]},only:function(e){if(!No(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};M.Component=yn;M.Fragment=Tu;M.Profiler=Fu;M.PureComponent=So;M.StrictMode=_u;M.Suspense=Du;M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Xu;M.act=oc;M.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=ec({},e.props),s=e.key,o=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,l=zo.current),t.key!==void 0&&(s=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(c in t)rc.call(t,c)&&!ic.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&a!==void 0?a[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){a=Array(c);for(var d=0;d<c;d++)a[d]=arguments[d+2];r.children=a}return{$$typeof:pr,type:e.type,key:s,ref:o,props:r,_owner:l}};M.createContext=function(e){return e={$$typeof:Ou,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Wu,_context:e},e.Consumer=e};M.createElement=sc;M.createFactory=function(e){var t=sc.bind(null,e);return t.type=e,t};M.createRef=function(){return{current:null}};M.forwardRef=function(e){return{$$typeof:Au,render:e}};M.isValidElement=No;M.lazy=function(e){return{$$typeof:$u,_payload:{_status:-1,_result:e},_init:Qu}};M.memo=function(e,t){return{$$typeof:Uu,type:e,compare:t===void 0?null:t}};M.startTransition=function(e){var t=Or.transition;Or.transition={};try{e()}finally{Or.transition=t}};M.unstable_act=oc;M.useCallback=function(e,t){return de.current.useCallback(e,t)};M.useContext=function(e){return de.current.useContext(e)};M.useDebugValue=function(){};M.useDeferredValue=function(e){return de.current.useDeferredValue(e)};M.useEffect=function(e,t){return de.current.useEffect(e,t)};M.useId=function(){return de.current.useId()};M.useImperativeHandle=function(e,t,n){return de.current.useImperativeHandle(e,t,n)};M.useInsertionEffect=function(e,t){return de.current.useInsertionEffect(e,t)};M.useLayoutEffect=function(e,t){return de.current.useLayoutEffect(e,t)};M.useMemo=function(e,t){return de.current.useMemo(e,t)};M.useReducer=function(e,t,n){return de.current.useReducer(e,t,n)};M.useRef=function(e){return de.current.useRef(e)};M.useState=function(e){return de.current.useState(e)};M.useSyncExternalStore=function(e,t,n){return de.current.useSyncExternalStore(e,t,n)};M.useTransition=function(){return de.current.useTransition()};M.version="18.3.1";Za.exports=M;var b=Za.exports;const lc=Bu(b),Gu=Lu({__proto__:null,default:lc},[b]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qu=b,Ku=Symbol.for("react.element"),Zu=Symbol.for("react.fragment"),Ju=Object.prototype.hasOwnProperty,ef=qu.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,tf={key:!0,ref:!0,__self:!0,__source:!0};function ac(e,t,n){var r,s={},o=null,l=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)Ju.call(t,r)&&!tf.hasOwnProperty(r)&&(s[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)s[r]===void 0&&(s[r]=t[r]);return{$$typeof:Ku,type:e,key:o,ref:l,props:s,_owner:ef.current}}Si.Fragment=Zu;Si.jsx=ac;Si.jsxs=ac;Ka.exports=Si;var i=Ka.exports,js={},cc={exports:{}},we={},dc={exports:{}},uc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(N,I){var B=N.length;N.push(I);e:for(;0<B;){var Y=B-1>>>1,Z=N[Y];if(0<s(Z,I))N[Y]=I,N[B]=Z,B=Y;else break e}}function n(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var I=N[0],B=N.pop();if(B!==I){N[0]=B;e:for(var Y=0,Z=N.length,vr=Z>>>1;Y<vr;){var Ct=2*(Y+1)-1,Vi=N[Ct],zt=Ct+1,br=N[zt];if(0>s(Vi,B))zt<Z&&0>s(br,Vi)?(N[Y]=br,N[zt]=B,Y=zt):(N[Y]=Vi,N[Ct]=B,Y=Ct);else if(zt<Z&&0>s(br,B))N[Y]=br,N[zt]=B,Y=zt;else break e}}return I}function s(N,I){var B=N.sortIndex-I.sortIndex;return B!==0?B:N.id-I.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var l=Date,a=l.now();e.unstable_now=function(){return l.now()-a}}var c=[],d=[],x=1,h=null,g=3,m=!1,v=!1,w=!1,j=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,u=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(N){for(var I=n(d);I!==null;){if(I.callback===null)r(d);else if(I.startTime<=N)r(d),I.sortIndex=I.expirationTime,t(c,I);else break;I=n(d)}}function y(N){if(w=!1,p(N),!v)if(n(c)!==null)v=!0,$i(S);else{var I=n(d);I!==null&&Hi(y,I.startTime-N)}}function S(N,I){v=!1,w&&(w=!1,f(R),R=-1),m=!0;var B=g;try{for(p(I),h=n(c);h!==null&&(!(h.expirationTime>I)||N&&!Re());){var Y=h.callback;if(typeof Y=="function"){h.callback=null,g=h.priorityLevel;var Z=Y(h.expirationTime<=I);I=e.unstable_now(),typeof Z=="function"?h.callback=Z:h===n(c)&&r(c),p(I)}else r(c);h=n(c)}if(h!==null)var vr=!0;else{var Ct=n(d);Ct!==null&&Hi(y,Ct.startTime-I),vr=!1}return vr}finally{h=null,g=B,m=!1}}var E=!1,P=null,R=-1,A=5,L=-1;function Re(){return!(e.unstable_now()-L<A)}function jn(){if(P!==null){var N=e.unstable_now();L=N;var I=!0;try{I=P(!0,N)}finally{I?Sn():(E=!1,P=null)}}else E=!1}var Sn;if(typeof u=="function")Sn=function(){u(jn)};else if(typeof MessageChannel<"u"){var Sl=new MessageChannel,Iu=Sl.port2;Sl.port1.onmessage=jn,Sn=function(){Iu.postMessage(null)}}else Sn=function(){j(jn,0)};function $i(N){P=N,E||(E=!0,Sn())}function Hi(N,I){R=j(function(){N(e.unstable_now())},I)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(N){N.callback=null},e.unstable_continueExecution=function(){v||m||(v=!0,$i(S))},e.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<N?Math.floor(1e3/N):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(N){switch(g){case 1:case 2:case 3:var I=3;break;default:I=g}var B=g;g=I;try{return N()}finally{g=B}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(N,I){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var B=g;g=N;try{return I()}finally{g=B}},e.unstable_scheduleCallback=function(N,I,B){var Y=e.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?Y+B:Y):B=Y,N){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=B+Z,N={id:x++,callback:I,priorityLevel:N,startTime:B,expirationTime:Z,sortIndex:-1},B>Y?(N.sortIndex=B,t(d,N),n(c)===null&&N===n(d)&&(w?(f(R),R=-1):w=!0,Hi(y,B-Y))):(N.sortIndex=Z,t(c,N),v||m||(v=!0,$i(S))),N},e.unstable_shouldYield=Re,e.unstable_wrapCallback=function(N){var I=g;return function(){var B=g;g=I;try{return N.apply(this,arguments)}finally{g=B}}}})(uc);dc.exports=uc;var nf=dc.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rf=b,be=nf;function k(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var fc=new Set,Qn={};function At(e,t){un(e,t),un(e+"Capture",t)}function un(e,t){for(Qn[e]=t,e=0;e<t.length;e++)fc.add(t[e])}var qe=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ss=Object.prototype.hasOwnProperty,sf=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,El={},Pl={};function of(e){return Ss.call(Pl,e)?!0:Ss.call(El,e)?!1:sf.test(e)?Pl[e]=!0:(El[e]=!0,!1)}function lf(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function af(e,t,n,r){if(t===null||typeof t>"u"||lf(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ue(e,t,n,r,s,o,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=l}var re={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){re[e]=new ue(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];re[t]=new ue(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){re[e]=new ue(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){re[e]=new ue(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){re[e]=new ue(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){re[e]=new ue(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){re[e]=new ue(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){re[e]=new ue(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){re[e]=new ue(e,5,!1,e.toLowerCase(),null,!1,!1)});var Eo=/[\-:]([a-z])/g;function Po(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Eo,Po);re[t]=new ue(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Eo,Po);re[t]=new ue(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Eo,Po);re[t]=new ue(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){re[e]=new ue(e,1,!1,e.toLowerCase(),null,!1,!1)});re.xlinkHref=new ue("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){re[e]=new ue(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ro(e,t,n,r){var s=re.hasOwnProperty(t)?re[t]:null;(s!==null?s.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(af(t,n,s,r)&&(n=null),r||s===null?of(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):s.mustUseProperty?e[s.propertyName]=n===null?s.type===3?!1:"":n:(t=s.attributeName,r=s.attributeNamespace,n===null?e.removeAttribute(t):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var et=rf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,kr=Symbol.for("react.element"),Vt=Symbol.for("react.portal"),Yt=Symbol.for("react.fragment"),Io=Symbol.for("react.strict_mode"),Cs=Symbol.for("react.profiler"),pc=Symbol.for("react.provider"),hc=Symbol.for("react.context"),Lo=Symbol.for("react.forward_ref"),zs=Symbol.for("react.suspense"),Ns=Symbol.for("react.suspense_list"),Bo=Symbol.for("react.memo"),nt=Symbol.for("react.lazy"),gc=Symbol.for("react.offscreen"),Rl=Symbol.iterator;function Cn(e){return e===null||typeof e!="object"?null:(e=Rl&&e[Rl]||e["@@iterator"],typeof e=="function"?e:null)}var H=Object.assign,Qi;function Bn(e){if(Qi===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Qi=t&&t[1]||""}return`
`+Qi+e}var Xi=!1;function Gi(e,t){if(!e||Xi)return"";Xi=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var r=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){r=d}e.call(t.prototype)}else{try{throw Error()}catch(d){r=d}e()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var s=d.stack.split(`
`),o=r.stack.split(`
`),l=s.length-1,a=o.length-1;1<=l&&0<=a&&s[l]!==o[a];)a--;for(;1<=l&&0<=a;l--,a--)if(s[l]!==o[a]){if(l!==1||a!==1)do if(l--,a--,0>a||s[l]!==o[a]){var c=`
`+s[l].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=l&&0<=a);break}}}finally{Xi=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Bn(e):""}function cf(e){switch(e.tag){case 5:return Bn(e.type);case 16:return Bn("Lazy");case 13:return Bn("Suspense");case 19:return Bn("SuspenseList");case 0:case 2:case 15:return e=Gi(e.type,!1),e;case 11:return e=Gi(e.type.render,!1),e;case 1:return e=Gi(e.type,!0),e;default:return""}}function Es(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Yt:return"Fragment";case Vt:return"Portal";case Cs:return"Profiler";case Io:return"StrictMode";case zs:return"Suspense";case Ns:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case hc:return(e.displayName||"Context")+".Consumer";case pc:return(e._context.displayName||"Context")+".Provider";case Lo:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Bo:return t=e.displayName||null,t!==null?t:Es(e.type)||"Memo";case nt:t=e._payload,e=e._init;try{return Es(e(t))}catch{}}return null}function df(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Es(t);case 8:return t===Io?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function bt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function xc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function uf(e){var t=xc(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return s.call(this)},set:function(l){r=""+l,o.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function jr(e){e._valueTracker||(e._valueTracker=uf(e))}function mc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=xc(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Kr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ps(e,t){var n=t.checked;return H({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Il(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=bt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function yc(e,t){t=t.checked,t!=null&&Ro(e,"checked",t,!1)}function Rs(e,t){yc(e,t);var n=bt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Is(e,t.type,n):t.hasOwnProperty("defaultValue")&&Is(e,t.type,bt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Ll(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Is(e,t,n){(t!=="number"||Kr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Mn=Array.isArray;function rn(e,t,n,r){if(e=e.options,t){t={};for(var s=0;s<n.length;s++)t["$"+n[s]]=!0;for(n=0;n<e.length;n++)s=t.hasOwnProperty("$"+e[n].value),e[n].selected!==s&&(e[n].selected=s),s&&r&&(e[n].defaultSelected=!0)}else{for(n=""+bt(n),t=null,s=0;s<e.length;s++){if(e[s].value===n){e[s].selected=!0,r&&(e[s].defaultSelected=!0);return}t!==null||e[s].disabled||(t=e[s])}t!==null&&(t.selected=!0)}}function Ls(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(k(91));return H({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Bl(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(k(92));if(Mn(n)){if(1<n.length)throw Error(k(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:bt(n)}}function vc(e,t){var n=bt(t.value),r=bt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Ml(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function bc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Bs(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?bc(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Sr,wc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,s){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,s)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Sr=Sr||document.createElement("div"),Sr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Sr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Xn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Fn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ff=["Webkit","ms","Moz","O"];Object.keys(Fn).forEach(function(e){ff.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Fn[t]=Fn[e]})});function kc(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Fn.hasOwnProperty(e)&&Fn[e]?(""+t).trim():t+"px"}function jc(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,s=kc(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,s):e[n]=s}}var pf=H({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ms(e,t){if(t){if(pf[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(k(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(k(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(k(61))}if(t.style!=null&&typeof t.style!="object")throw Error(k(62))}}function Ts(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var _s=null;function Mo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Fs=null,sn=null,on=null;function Tl(e){if(e=xr(e)){if(typeof Fs!="function")throw Error(k(280));var t=e.stateNode;t&&(t=Pi(t),Fs(e.stateNode,e.type,t))}}function Sc(e){sn?on?on.push(e):on=[e]:sn=e}function Cc(){if(sn){var e=sn,t=on;if(on=sn=null,Tl(e),t)for(e=0;e<t.length;e++)Tl(t[e])}}function zc(e,t){return e(t)}function Nc(){}var qi=!1;function Ec(e,t,n){if(qi)return e(t,n);qi=!0;try{return zc(e,t,n)}finally{qi=!1,(sn!==null||on!==null)&&(Nc(),Cc())}}function Gn(e,t){var n=e.stateNode;if(n===null)return null;var r=Pi(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(k(231,t,typeof n));return n}var Ws=!1;if(qe)try{var zn={};Object.defineProperty(zn,"passive",{get:function(){Ws=!0}}),window.addEventListener("test",zn,zn),window.removeEventListener("test",zn,zn)}catch{Ws=!1}function hf(e,t,n,r,s,o,l,a,c){var d=Array.prototype.slice.call(arguments,3);try{t.apply(n,d)}catch(x){this.onError(x)}}var Wn=!1,Zr=null,Jr=!1,Os=null,gf={onError:function(e){Wn=!0,Zr=e}};function xf(e,t,n,r,s,o,l,a,c){Wn=!1,Zr=null,hf.apply(gf,arguments)}function mf(e,t,n,r,s,o,l,a,c){if(xf.apply(this,arguments),Wn){if(Wn){var d=Zr;Wn=!1,Zr=null}else throw Error(k(198));Jr||(Jr=!0,Os=d)}}function Dt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Pc(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function _l(e){if(Dt(e)!==e)throw Error(k(188))}function yf(e){var t=e.alternate;if(!t){if(t=Dt(e),t===null)throw Error(k(188));return t!==e?null:e}for(var n=e,r=t;;){var s=n.return;if(s===null)break;var o=s.alternate;if(o===null){if(r=s.return,r!==null){n=r;continue}break}if(s.child===o.child){for(o=s.child;o;){if(o===n)return _l(s),e;if(o===r)return _l(s),t;o=o.sibling}throw Error(k(188))}if(n.return!==r.return)n=s,r=o;else{for(var l=!1,a=s.child;a;){if(a===n){l=!0,n=s,r=o;break}if(a===r){l=!0,r=s,n=o;break}a=a.sibling}if(!l){for(a=o.child;a;){if(a===n){l=!0,n=o,r=s;break}if(a===r){l=!0,r=o,n=s;break}a=a.sibling}if(!l)throw Error(k(189))}}if(n.alternate!==r)throw Error(k(190))}if(n.tag!==3)throw Error(k(188));return n.stateNode.current===n?e:t}function Rc(e){return e=yf(e),e!==null?Ic(e):null}function Ic(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Ic(e);if(t!==null)return t;e=e.sibling}return null}var Lc=be.unstable_scheduleCallback,Fl=be.unstable_cancelCallback,vf=be.unstable_shouldYield,bf=be.unstable_requestPaint,Q=be.unstable_now,wf=be.unstable_getCurrentPriorityLevel,To=be.unstable_ImmediatePriority,Bc=be.unstable_UserBlockingPriority,ei=be.unstable_NormalPriority,kf=be.unstable_LowPriority,Mc=be.unstable_IdlePriority,Ci=null,$e=null;function jf(e){if($e&&typeof $e.onCommitFiberRoot=="function")try{$e.onCommitFiberRoot(Ci,e,void 0,(e.current.flags&128)===128)}catch{}}var _e=Math.clz32?Math.clz32:zf,Sf=Math.log,Cf=Math.LN2;function zf(e){return e>>>=0,e===0?32:31-(Sf(e)/Cf|0)|0}var Cr=64,zr=4194304;function Tn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ti(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,s=e.suspendedLanes,o=e.pingedLanes,l=n&268435455;if(l!==0){var a=l&~s;a!==0?r=Tn(a):(o&=l,o!==0&&(r=Tn(o)))}else l=n&~s,l!==0?r=Tn(l):o!==0&&(r=Tn(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&s)&&(s=r&-r,o=t&-t,s>=o||s===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-_e(t),s=1<<n,r|=e[n],t&=~s;return r}function Nf(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ef(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,s=e.expirationTimes,o=e.pendingLanes;0<o;){var l=31-_e(o),a=1<<l,c=s[l];c===-1?(!(a&n)||a&r)&&(s[l]=Nf(a,t)):c<=t&&(e.expiredLanes|=a),o&=~a}}function As(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Tc(){var e=Cr;return Cr<<=1,!(Cr&4194240)&&(Cr=64),e}function Ki(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function hr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-_e(t),e[t]=n}function Pf(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var s=31-_e(n),o=1<<s;t[s]=0,r[s]=-1,e[s]=-1,n&=~o}}function _o(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-_e(n),s=1<<r;s&t|e[r]&t&&(e[r]|=t),n&=~s}}var _=0;function _c(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Fc,Fo,Wc,Oc,Ac,Ds=!1,Nr=[],ut=null,ft=null,pt=null,qn=new Map,Kn=new Map,it=[],Rf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Wl(e,t){switch(e){case"focusin":case"focusout":ut=null;break;case"dragenter":case"dragleave":ft=null;break;case"mouseover":case"mouseout":pt=null;break;case"pointerover":case"pointerout":qn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Kn.delete(t.pointerId)}}function Nn(e,t,n,r,s,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[s]},t!==null&&(t=xr(t),t!==null&&Fo(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),e)}function If(e,t,n,r,s){switch(t){case"focusin":return ut=Nn(ut,e,t,n,r,s),!0;case"dragenter":return ft=Nn(ft,e,t,n,r,s),!0;case"mouseover":return pt=Nn(pt,e,t,n,r,s),!0;case"pointerover":var o=s.pointerId;return qn.set(o,Nn(qn.get(o)||null,e,t,n,r,s)),!0;case"gotpointercapture":return o=s.pointerId,Kn.set(o,Nn(Kn.get(o)||null,e,t,n,r,s)),!0}return!1}function Dc(e){var t=Pt(e.target);if(t!==null){var n=Dt(t);if(n!==null){if(t=n.tag,t===13){if(t=Pc(n),t!==null){e.blockedOn=t,Ac(e.priority,function(){Wc(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ar(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Us(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);_s=r,n.target.dispatchEvent(r),_s=null}else return t=xr(n),t!==null&&Fo(t),e.blockedOn=n,!1;t.shift()}return!0}function Ol(e,t,n){Ar(e)&&n.delete(t)}function Lf(){Ds=!1,ut!==null&&Ar(ut)&&(ut=null),ft!==null&&Ar(ft)&&(ft=null),pt!==null&&Ar(pt)&&(pt=null),qn.forEach(Ol),Kn.forEach(Ol)}function En(e,t){e.blockedOn===t&&(e.blockedOn=null,Ds||(Ds=!0,be.unstable_scheduleCallback(be.unstable_NormalPriority,Lf)))}function Zn(e){function t(s){return En(s,e)}if(0<Nr.length){En(Nr[0],e);for(var n=1;n<Nr.length;n++){var r=Nr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(ut!==null&&En(ut,e),ft!==null&&En(ft,e),pt!==null&&En(pt,e),qn.forEach(t),Kn.forEach(t),n=0;n<it.length;n++)r=it[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<it.length&&(n=it[0],n.blockedOn===null);)Dc(n),n.blockedOn===null&&it.shift()}var ln=et.ReactCurrentBatchConfig,ni=!0;function Bf(e,t,n,r){var s=_,o=ln.transition;ln.transition=null;try{_=1,Wo(e,t,n,r)}finally{_=s,ln.transition=o}}function Mf(e,t,n,r){var s=_,o=ln.transition;ln.transition=null;try{_=4,Wo(e,t,n,r)}finally{_=s,ln.transition=o}}function Wo(e,t,n,r){if(ni){var s=Us(e,t,n,r);if(s===null)ls(e,t,r,ri,n),Wl(e,r);else if(If(s,e,t,n,r))r.stopPropagation();else if(Wl(e,r),t&4&&-1<Rf.indexOf(e)){for(;s!==null;){var o=xr(s);if(o!==null&&Fc(o),o=Us(e,t,n,r),o===null&&ls(e,t,r,ri,n),o===s)break;s=o}s!==null&&r.stopPropagation()}else ls(e,t,r,null,n)}}var ri=null;function Us(e,t,n,r){if(ri=null,e=Mo(r),e=Pt(e),e!==null)if(t=Dt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Pc(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ri=e,null}function Uc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(wf()){case To:return 1;case Bc:return 4;case ei:case kf:return 16;case Mc:return 536870912;default:return 16}default:return 16}}var ot=null,Oo=null,Dr=null;function $c(){if(Dr)return Dr;var e,t=Oo,n=t.length,r,s="value"in ot?ot.value:ot.textContent,o=s.length;for(e=0;e<n&&t[e]===s[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===s[o-r];r++);return Dr=s.slice(e,1<r?1-r:void 0)}function Ur(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Er(){return!0}function Al(){return!1}function ke(e){function t(n,r,s,o,l){this._reactName=n,this._targetInst=s,this.type=r,this.nativeEvent=o,this.target=l,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Er:Al,this.isPropagationStopped=Al,this}return H(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Er)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Er)},persist:function(){},isPersistent:Er}),t}var vn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ao=ke(vn),gr=H({},vn,{view:0,detail:0}),Tf=ke(gr),Zi,Ji,Pn,zi=H({},gr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Do,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Pn&&(Pn&&e.type==="mousemove"?(Zi=e.screenX-Pn.screenX,Ji=e.screenY-Pn.screenY):Ji=Zi=0,Pn=e),Zi)},movementY:function(e){return"movementY"in e?e.movementY:Ji}}),Dl=ke(zi),_f=H({},zi,{dataTransfer:0}),Ff=ke(_f),Wf=H({},gr,{relatedTarget:0}),es=ke(Wf),Of=H({},vn,{animationName:0,elapsedTime:0,pseudoElement:0}),Af=ke(Of),Df=H({},vn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Uf=ke(Df),$f=H({},vn,{data:0}),Ul=ke($f),Hf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Vf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Yf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Qf(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Yf[e])?!!t[e]:!1}function Do(){return Qf}var Xf=H({},gr,{key:function(e){if(e.key){var t=Hf[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ur(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Vf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Do,charCode:function(e){return e.type==="keypress"?Ur(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ur(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Gf=ke(Xf),qf=H({},zi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),$l=ke(qf),Kf=H({},gr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Do}),Zf=ke(Kf),Jf=H({},vn,{propertyName:0,elapsedTime:0,pseudoElement:0}),ep=ke(Jf),tp=H({},zi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),np=ke(tp),rp=[9,13,27,32],Uo=qe&&"CompositionEvent"in window,On=null;qe&&"documentMode"in document&&(On=document.documentMode);var ip=qe&&"TextEvent"in window&&!On,Hc=qe&&(!Uo||On&&8<On&&11>=On),Hl=" ",Vl=!1;function Vc(e,t){switch(e){case"keyup":return rp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Yc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Qt=!1;function sp(e,t){switch(e){case"compositionend":return Yc(t);case"keypress":return t.which!==32?null:(Vl=!0,Hl);case"textInput":return e=t.data,e===Hl&&Vl?null:e;default:return null}}function op(e,t){if(Qt)return e==="compositionend"||!Uo&&Vc(e,t)?(e=$c(),Dr=Oo=ot=null,Qt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Hc&&t.locale!=="ko"?null:t.data;default:return null}}var lp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Yl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!lp[e.type]:t==="textarea"}function Qc(e,t,n,r){Sc(r),t=ii(t,"onChange"),0<t.length&&(n=new Ao("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var An=null,Jn=null;function ap(e){id(e,0)}function Ni(e){var t=qt(e);if(mc(t))return e}function cp(e,t){if(e==="change")return t}var Xc=!1;if(qe){var ts;if(qe){var ns="oninput"in document;if(!ns){var Ql=document.createElement("div");Ql.setAttribute("oninput","return;"),ns=typeof Ql.oninput=="function"}ts=ns}else ts=!1;Xc=ts&&(!document.documentMode||9<document.documentMode)}function Xl(){An&&(An.detachEvent("onpropertychange",Gc),Jn=An=null)}function Gc(e){if(e.propertyName==="value"&&Ni(Jn)){var t=[];Qc(t,Jn,e,Mo(e)),Ec(ap,t)}}function dp(e,t,n){e==="focusin"?(Xl(),An=t,Jn=n,An.attachEvent("onpropertychange",Gc)):e==="focusout"&&Xl()}function up(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ni(Jn)}function fp(e,t){if(e==="click")return Ni(t)}function pp(e,t){if(e==="input"||e==="change")return Ni(t)}function hp(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var We=typeof Object.is=="function"?Object.is:hp;function er(e,t){if(We(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var s=n[r];if(!Ss.call(t,s)||!We(e[s],t[s]))return!1}return!0}function Gl(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ql(e,t){var n=Gl(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Gl(n)}}function qc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?qc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Kc(){for(var e=window,t=Kr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Kr(e.document)}return t}function $o(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function gp(e){var t=Kc(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&qc(n.ownerDocument.documentElement,n)){if(r!==null&&$o(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var s=n.textContent.length,o=Math.min(r.start,s);r=r.end===void 0?o:Math.min(r.end,s),!e.extend&&o>r&&(s=r,r=o,o=s),s=ql(n,o);var l=ql(n,r);s&&l&&(e.rangeCount!==1||e.anchorNode!==s.node||e.anchorOffset!==s.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(s.node,s.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var xp=qe&&"documentMode"in document&&11>=document.documentMode,Xt=null,$s=null,Dn=null,Hs=!1;function Kl(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Hs||Xt==null||Xt!==Kr(r)||(r=Xt,"selectionStart"in r&&$o(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Dn&&er(Dn,r)||(Dn=r,r=ii($s,"onSelect"),0<r.length&&(t=new Ao("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Xt)))}function Pr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Gt={animationend:Pr("Animation","AnimationEnd"),animationiteration:Pr("Animation","AnimationIteration"),animationstart:Pr("Animation","AnimationStart"),transitionend:Pr("Transition","TransitionEnd")},rs={},Zc={};qe&&(Zc=document.createElement("div").style,"AnimationEvent"in window||(delete Gt.animationend.animation,delete Gt.animationiteration.animation,delete Gt.animationstart.animation),"TransitionEvent"in window||delete Gt.transitionend.transition);function Ei(e){if(rs[e])return rs[e];if(!Gt[e])return e;var t=Gt[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Zc)return rs[e]=t[n];return e}var Jc=Ei("animationend"),ed=Ei("animationiteration"),td=Ei("animationstart"),nd=Ei("transitionend"),rd=new Map,Zl="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function kt(e,t){rd.set(e,t),At(t,[e])}for(var is=0;is<Zl.length;is++){var ss=Zl[is],mp=ss.toLowerCase(),yp=ss[0].toUpperCase()+ss.slice(1);kt(mp,"on"+yp)}kt(Jc,"onAnimationEnd");kt(ed,"onAnimationIteration");kt(td,"onAnimationStart");kt("dblclick","onDoubleClick");kt("focusin","onFocus");kt("focusout","onBlur");kt(nd,"onTransitionEnd");un("onMouseEnter",["mouseout","mouseover"]);un("onMouseLeave",["mouseout","mouseover"]);un("onPointerEnter",["pointerout","pointerover"]);un("onPointerLeave",["pointerout","pointerover"]);At("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));At("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));At("onBeforeInput",["compositionend","keypress","textInput","paste"]);At("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));At("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));At("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var _n="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),vp=new Set("cancel close invalid load scroll toggle".split(" ").concat(_n));function Jl(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,mf(r,t,void 0,e),e.currentTarget=null}function id(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],s=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var l=r.length-1;0<=l;l--){var a=r[l],c=a.instance,d=a.currentTarget;if(a=a.listener,c!==o&&s.isPropagationStopped())break e;Jl(s,a,d),o=c}else for(l=0;l<r.length;l++){if(a=r[l],c=a.instance,d=a.currentTarget,a=a.listener,c!==o&&s.isPropagationStopped())break e;Jl(s,a,d),o=c}}}if(Jr)throw e=Os,Jr=!1,Os=null,e}function W(e,t){var n=t[Gs];n===void 0&&(n=t[Gs]=new Set);var r=e+"__bubble";n.has(r)||(sd(t,e,2,!1),n.add(r))}function os(e,t,n){var r=0;t&&(r|=4),sd(n,e,r,t)}var Rr="_reactListening"+Math.random().toString(36).slice(2);function tr(e){if(!e[Rr]){e[Rr]=!0,fc.forEach(function(n){n!=="selectionchange"&&(vp.has(n)||os(n,!1,e),os(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Rr]||(t[Rr]=!0,os("selectionchange",!1,t))}}function sd(e,t,n,r){switch(Uc(t)){case 1:var s=Bf;break;case 4:s=Mf;break;default:s=Wo}n=s.bind(null,t,n,e),s=void 0,!Ws||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),r?s!==void 0?e.addEventListener(t,n,{capture:!0,passive:s}):e.addEventListener(t,n,!0):s!==void 0?e.addEventListener(t,n,{passive:s}):e.addEventListener(t,n,!1)}function ls(e,t,n,r,s){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var a=r.stateNode.containerInfo;if(a===s||a.nodeType===8&&a.parentNode===s)break;if(l===4)for(l=r.return;l!==null;){var c=l.tag;if((c===3||c===4)&&(c=l.stateNode.containerInfo,c===s||c.nodeType===8&&c.parentNode===s))return;l=l.return}for(;a!==null;){if(l=Pt(a),l===null)return;if(c=l.tag,c===5||c===6){r=o=l;continue e}a=a.parentNode}}r=r.return}Ec(function(){var d=o,x=Mo(n),h=[];e:{var g=rd.get(e);if(g!==void 0){var m=Ao,v=e;switch(e){case"keypress":if(Ur(n)===0)break e;case"keydown":case"keyup":m=Gf;break;case"focusin":v="focus",m=es;break;case"focusout":v="blur",m=es;break;case"beforeblur":case"afterblur":m=es;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Dl;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=Ff;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=Zf;break;case Jc:case ed:case td:m=Af;break;case nd:m=ep;break;case"scroll":m=Tf;break;case"wheel":m=np;break;case"copy":case"cut":case"paste":m=Uf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=$l}var w=(t&4)!==0,j=!w&&e==="scroll",f=w?g!==null?g+"Capture":null:g;w=[];for(var u=d,p;u!==null;){p=u;var y=p.stateNode;if(p.tag===5&&y!==null&&(p=y,f!==null&&(y=Gn(u,f),y!=null&&w.push(nr(u,y,p)))),j)break;u=u.return}0<w.length&&(g=new m(g,v,null,n,x),h.push({event:g,listeners:w}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",m=e==="mouseout"||e==="pointerout",g&&n!==_s&&(v=n.relatedTarget||n.fromElement)&&(Pt(v)||v[Ke]))break e;if((m||g)&&(g=x.window===x?x:(g=x.ownerDocument)?g.defaultView||g.parentWindow:window,m?(v=n.relatedTarget||n.toElement,m=d,v=v?Pt(v):null,v!==null&&(j=Dt(v),v!==j||v.tag!==5&&v.tag!==6)&&(v=null)):(m=null,v=d),m!==v)){if(w=Dl,y="onMouseLeave",f="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&(w=$l,y="onPointerLeave",f="onPointerEnter",u="pointer"),j=m==null?g:qt(m),p=v==null?g:qt(v),g=new w(y,u+"leave",m,n,x),g.target=j,g.relatedTarget=p,y=null,Pt(x)===d&&(w=new w(f,u+"enter",v,n,x),w.target=p,w.relatedTarget=j,y=w),j=y,m&&v)t:{for(w=m,f=v,u=0,p=w;p;p=Ht(p))u++;for(p=0,y=f;y;y=Ht(y))p++;for(;0<u-p;)w=Ht(w),u--;for(;0<p-u;)f=Ht(f),p--;for(;u--;){if(w===f||f!==null&&w===f.alternate)break t;w=Ht(w),f=Ht(f)}w=null}else w=null;m!==null&&ea(h,g,m,w,!1),v!==null&&j!==null&&ea(h,j,v,w,!0)}}e:{if(g=d?qt(d):window,m=g.nodeName&&g.nodeName.toLowerCase(),m==="select"||m==="input"&&g.type==="file")var S=cp;else if(Yl(g))if(Xc)S=pp;else{S=up;var E=dp}else(m=g.nodeName)&&m.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(S=fp);if(S&&(S=S(e,d))){Qc(h,S,n,x);break e}E&&E(e,g,d),e==="focusout"&&(E=g._wrapperState)&&E.controlled&&g.type==="number"&&Is(g,"number",g.value)}switch(E=d?qt(d):window,e){case"focusin":(Yl(E)||E.contentEditable==="true")&&(Xt=E,$s=d,Dn=null);break;case"focusout":Dn=$s=Xt=null;break;case"mousedown":Hs=!0;break;case"contextmenu":case"mouseup":case"dragend":Hs=!1,Kl(h,n,x);break;case"selectionchange":if(xp)break;case"keydown":case"keyup":Kl(h,n,x)}var P;if(Uo)e:{switch(e){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else Qt?Vc(e,n)&&(R="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(R="onCompositionStart");R&&(Hc&&n.locale!=="ko"&&(Qt||R!=="onCompositionStart"?R==="onCompositionEnd"&&Qt&&(P=$c()):(ot=x,Oo="value"in ot?ot.value:ot.textContent,Qt=!0)),E=ii(d,R),0<E.length&&(R=new Ul(R,e,null,n,x),h.push({event:R,listeners:E}),P?R.data=P:(P=Yc(n),P!==null&&(R.data=P)))),(P=ip?sp(e,n):op(e,n))&&(d=ii(d,"onBeforeInput"),0<d.length&&(x=new Ul("onBeforeInput","beforeinput",null,n,x),h.push({event:x,listeners:d}),x.data=P))}id(h,t)})}function nr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ii(e,t){for(var n=t+"Capture",r=[];e!==null;){var s=e,o=s.stateNode;s.tag===5&&o!==null&&(s=o,o=Gn(e,n),o!=null&&r.unshift(nr(e,o,s)),o=Gn(e,t),o!=null&&r.push(nr(e,o,s))),e=e.return}return r}function Ht(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ea(e,t,n,r,s){for(var o=t._reactName,l=[];n!==null&&n!==r;){var a=n,c=a.alternate,d=a.stateNode;if(c!==null&&c===r)break;a.tag===5&&d!==null&&(a=d,s?(c=Gn(n,o),c!=null&&l.unshift(nr(n,c,a))):s||(c=Gn(n,o),c!=null&&l.push(nr(n,c,a)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var bp=/\r\n?/g,wp=/\u0000|\uFFFD/g;function ta(e){return(typeof e=="string"?e:""+e).replace(bp,`
`).replace(wp,"")}function Ir(e,t,n){if(t=ta(t),ta(e)!==t&&n)throw Error(k(425))}function si(){}var Vs=null,Ys=null;function Qs(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Xs=typeof setTimeout=="function"?setTimeout:void 0,kp=typeof clearTimeout=="function"?clearTimeout:void 0,na=typeof Promise=="function"?Promise:void 0,jp=typeof queueMicrotask=="function"?queueMicrotask:typeof na<"u"?function(e){return na.resolve(null).then(e).catch(Sp)}:Xs;function Sp(e){setTimeout(function(){throw e})}function as(e,t){var n=t,r=0;do{var s=n.nextSibling;if(e.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(r===0){e.removeChild(s),Zn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=s}while(n);Zn(t)}function ht(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function ra(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var bn=Math.random().toString(36).slice(2),De="__reactFiber$"+bn,rr="__reactProps$"+bn,Ke="__reactContainer$"+bn,Gs="__reactEvents$"+bn,Cp="__reactListeners$"+bn,zp="__reactHandles$"+bn;function Pt(e){var t=e[De];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ke]||n[De]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=ra(e);e!==null;){if(n=e[De])return n;e=ra(e)}return t}e=n,n=e.parentNode}return null}function xr(e){return e=e[De]||e[Ke],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function qt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(k(33))}function Pi(e){return e[rr]||null}var qs=[],Kt=-1;function jt(e){return{current:e}}function O(e){0>Kt||(e.current=qs[Kt],qs[Kt]=null,Kt--)}function F(e,t){Kt++,qs[Kt]=e.current,e.current=t}var wt={},le=jt(wt),he=jt(!1),Mt=wt;function fn(e,t){var n=e.type.contextTypes;if(!n)return wt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var s={},o;for(o in n)s[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=s),s}function ge(e){return e=e.childContextTypes,e!=null}function oi(){O(he),O(le)}function ia(e,t,n){if(le.current!==wt)throw Error(k(168));F(le,t),F(he,n)}function od(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var s in r)if(!(s in t))throw Error(k(108,df(e)||"Unknown",s));return H({},n,r)}function li(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||wt,Mt=le.current,F(le,e),F(he,he.current),!0}function sa(e,t,n){var r=e.stateNode;if(!r)throw Error(k(169));n?(e=od(e,t,Mt),r.__reactInternalMemoizedMergedChildContext=e,O(he),O(le),F(le,e)):O(he),F(he,n)}var Ye=null,Ri=!1,cs=!1;function ld(e){Ye===null?Ye=[e]:Ye.push(e)}function Np(e){Ri=!0,ld(e)}function St(){if(!cs&&Ye!==null){cs=!0;var e=0,t=_;try{var n=Ye;for(_=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Ye=null,Ri=!1}catch(s){throw Ye!==null&&(Ye=Ye.slice(e+1)),Lc(To,St),s}finally{_=t,cs=!1}}return null}var Zt=[],Jt=0,ai=null,ci=0,je=[],Se=0,Tt=null,Qe=1,Xe="";function Nt(e,t){Zt[Jt++]=ci,Zt[Jt++]=ai,ai=e,ci=t}function ad(e,t,n){je[Se++]=Qe,je[Se++]=Xe,je[Se++]=Tt,Tt=e;var r=Qe;e=Xe;var s=32-_e(r)-1;r&=~(1<<s),n+=1;var o=32-_e(t)+s;if(30<o){var l=s-s%5;o=(r&(1<<l)-1).toString(32),r>>=l,s-=l,Qe=1<<32-_e(t)+s|n<<s|r,Xe=o+e}else Qe=1<<o|n<<s|r,Xe=e}function Ho(e){e.return!==null&&(Nt(e,1),ad(e,1,0))}function Vo(e){for(;e===ai;)ai=Zt[--Jt],Zt[Jt]=null,ci=Zt[--Jt],Zt[Jt]=null;for(;e===Tt;)Tt=je[--Se],je[Se]=null,Xe=je[--Se],je[Se]=null,Qe=je[--Se],je[Se]=null}var ve=null,ye=null,D=!1,Te=null;function cd(e,t){var n=Ce(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function oa(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ve=e,ye=ht(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ve=e,ye=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Tt!==null?{id:Qe,overflow:Xe}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ce(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ve=e,ye=null,!0):!1;default:return!1}}function Ks(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Zs(e){if(D){var t=ye;if(t){var n=t;if(!oa(e,t)){if(Ks(e))throw Error(k(418));t=ht(n.nextSibling);var r=ve;t&&oa(e,t)?cd(r,n):(e.flags=e.flags&-4097|2,D=!1,ve=e)}}else{if(Ks(e))throw Error(k(418));e.flags=e.flags&-4097|2,D=!1,ve=e}}}function la(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ve=e}function Lr(e){if(e!==ve)return!1;if(!D)return la(e),D=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Qs(e.type,e.memoizedProps)),t&&(t=ye)){if(Ks(e))throw dd(),Error(k(418));for(;t;)cd(e,t),t=ht(t.nextSibling)}if(la(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(k(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ye=ht(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ye=null}}else ye=ve?ht(e.stateNode.nextSibling):null;return!0}function dd(){for(var e=ye;e;)e=ht(e.nextSibling)}function pn(){ye=ve=null,D=!1}function Yo(e){Te===null?Te=[e]:Te.push(e)}var Ep=et.ReactCurrentBatchConfig;function Rn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(k(309));var r=n.stateNode}if(!r)throw Error(k(147,e));var s=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(l){var a=s.refs;l===null?delete a[o]:a[o]=l},t._stringRef=o,t)}if(typeof e!="string")throw Error(k(284));if(!n._owner)throw Error(k(290,e))}return e}function Br(e,t){throw e=Object.prototype.toString.call(t),Error(k(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function aa(e){var t=e._init;return t(e._payload)}function ud(e){function t(f,u){if(e){var p=f.deletions;p===null?(f.deletions=[u],f.flags|=16):p.push(u)}}function n(f,u){if(!e)return null;for(;u!==null;)t(f,u),u=u.sibling;return null}function r(f,u){for(f=new Map;u!==null;)u.key!==null?f.set(u.key,u):f.set(u.index,u),u=u.sibling;return f}function s(f,u){return f=yt(f,u),f.index=0,f.sibling=null,f}function o(f,u,p){return f.index=p,e?(p=f.alternate,p!==null?(p=p.index,p<u?(f.flags|=2,u):p):(f.flags|=2,u)):(f.flags|=1048576,u)}function l(f){return e&&f.alternate===null&&(f.flags|=2),f}function a(f,u,p,y){return u===null||u.tag!==6?(u=xs(p,f.mode,y),u.return=f,u):(u=s(u,p),u.return=f,u)}function c(f,u,p,y){var S=p.type;return S===Yt?x(f,u,p.props.children,y,p.key):u!==null&&(u.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===nt&&aa(S)===u.type)?(y=s(u,p.props),y.ref=Rn(f,u,p),y.return=f,y):(y=Gr(p.type,p.key,p.props,null,f.mode,y),y.ref=Rn(f,u,p),y.return=f,y)}function d(f,u,p,y){return u===null||u.tag!==4||u.stateNode.containerInfo!==p.containerInfo||u.stateNode.implementation!==p.implementation?(u=ms(p,f.mode,y),u.return=f,u):(u=s(u,p.children||[]),u.return=f,u)}function x(f,u,p,y,S){return u===null||u.tag!==7?(u=Bt(p,f.mode,y,S),u.return=f,u):(u=s(u,p),u.return=f,u)}function h(f,u,p){if(typeof u=="string"&&u!==""||typeof u=="number")return u=xs(""+u,f.mode,p),u.return=f,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case kr:return p=Gr(u.type,u.key,u.props,null,f.mode,p),p.ref=Rn(f,null,u),p.return=f,p;case Vt:return u=ms(u,f.mode,p),u.return=f,u;case nt:var y=u._init;return h(f,y(u._payload),p)}if(Mn(u)||Cn(u))return u=Bt(u,f.mode,p,null),u.return=f,u;Br(f,u)}return null}function g(f,u,p,y){var S=u!==null?u.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return S!==null?null:a(f,u,""+p,y);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case kr:return p.key===S?c(f,u,p,y):null;case Vt:return p.key===S?d(f,u,p,y):null;case nt:return S=p._init,g(f,u,S(p._payload),y)}if(Mn(p)||Cn(p))return S!==null?null:x(f,u,p,y,null);Br(f,p)}return null}function m(f,u,p,y,S){if(typeof y=="string"&&y!==""||typeof y=="number")return f=f.get(p)||null,a(u,f,""+y,S);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case kr:return f=f.get(y.key===null?p:y.key)||null,c(u,f,y,S);case Vt:return f=f.get(y.key===null?p:y.key)||null,d(u,f,y,S);case nt:var E=y._init;return m(f,u,p,E(y._payload),S)}if(Mn(y)||Cn(y))return f=f.get(p)||null,x(u,f,y,S,null);Br(u,y)}return null}function v(f,u,p,y){for(var S=null,E=null,P=u,R=u=0,A=null;P!==null&&R<p.length;R++){P.index>R?(A=P,P=null):A=P.sibling;var L=g(f,P,p[R],y);if(L===null){P===null&&(P=A);break}e&&P&&L.alternate===null&&t(f,P),u=o(L,u,R),E===null?S=L:E.sibling=L,E=L,P=A}if(R===p.length)return n(f,P),D&&Nt(f,R),S;if(P===null){for(;R<p.length;R++)P=h(f,p[R],y),P!==null&&(u=o(P,u,R),E===null?S=P:E.sibling=P,E=P);return D&&Nt(f,R),S}for(P=r(f,P);R<p.length;R++)A=m(P,f,R,p[R],y),A!==null&&(e&&A.alternate!==null&&P.delete(A.key===null?R:A.key),u=o(A,u,R),E===null?S=A:E.sibling=A,E=A);return e&&P.forEach(function(Re){return t(f,Re)}),D&&Nt(f,R),S}function w(f,u,p,y){var S=Cn(p);if(typeof S!="function")throw Error(k(150));if(p=S.call(p),p==null)throw Error(k(151));for(var E=S=null,P=u,R=u=0,A=null,L=p.next();P!==null&&!L.done;R++,L=p.next()){P.index>R?(A=P,P=null):A=P.sibling;var Re=g(f,P,L.value,y);if(Re===null){P===null&&(P=A);break}e&&P&&Re.alternate===null&&t(f,P),u=o(Re,u,R),E===null?S=Re:E.sibling=Re,E=Re,P=A}if(L.done)return n(f,P),D&&Nt(f,R),S;if(P===null){for(;!L.done;R++,L=p.next())L=h(f,L.value,y),L!==null&&(u=o(L,u,R),E===null?S=L:E.sibling=L,E=L);return D&&Nt(f,R),S}for(P=r(f,P);!L.done;R++,L=p.next())L=m(P,f,R,L.value,y),L!==null&&(e&&L.alternate!==null&&P.delete(L.key===null?R:L.key),u=o(L,u,R),E===null?S=L:E.sibling=L,E=L);return e&&P.forEach(function(jn){return t(f,jn)}),D&&Nt(f,R),S}function j(f,u,p,y){if(typeof p=="object"&&p!==null&&p.type===Yt&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case kr:e:{for(var S=p.key,E=u;E!==null;){if(E.key===S){if(S=p.type,S===Yt){if(E.tag===7){n(f,E.sibling),u=s(E,p.props.children),u.return=f,f=u;break e}}else if(E.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===nt&&aa(S)===E.type){n(f,E.sibling),u=s(E,p.props),u.ref=Rn(f,E,p),u.return=f,f=u;break e}n(f,E);break}else t(f,E);E=E.sibling}p.type===Yt?(u=Bt(p.props.children,f.mode,y,p.key),u.return=f,f=u):(y=Gr(p.type,p.key,p.props,null,f.mode,y),y.ref=Rn(f,u,p),y.return=f,f=y)}return l(f);case Vt:e:{for(E=p.key;u!==null;){if(u.key===E)if(u.tag===4&&u.stateNode.containerInfo===p.containerInfo&&u.stateNode.implementation===p.implementation){n(f,u.sibling),u=s(u,p.children||[]),u.return=f,f=u;break e}else{n(f,u);break}else t(f,u);u=u.sibling}u=ms(p,f.mode,y),u.return=f,f=u}return l(f);case nt:return E=p._init,j(f,u,E(p._payload),y)}if(Mn(p))return v(f,u,p,y);if(Cn(p))return w(f,u,p,y);Br(f,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,u!==null&&u.tag===6?(n(f,u.sibling),u=s(u,p),u.return=f,f=u):(n(f,u),u=xs(p,f.mode,y),u.return=f,f=u),l(f)):n(f,u)}return j}var hn=ud(!0),fd=ud(!1),di=jt(null),ui=null,en=null,Qo=null;function Xo(){Qo=en=ui=null}function Go(e){var t=di.current;O(di),e._currentValue=t}function Js(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function an(e,t){ui=e,Qo=en=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(pe=!0),e.firstContext=null)}function Ne(e){var t=e._currentValue;if(Qo!==e)if(e={context:e,memoizedValue:t,next:null},en===null){if(ui===null)throw Error(k(308));en=e,ui.dependencies={lanes:0,firstContext:e}}else en=en.next=e;return t}var Rt=null;function qo(e){Rt===null?Rt=[e]:Rt.push(e)}function pd(e,t,n,r){var s=t.interleaved;return s===null?(n.next=n,qo(t)):(n.next=s.next,s.next=n),t.interleaved=n,Ze(e,r)}function Ze(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var rt=!1;function Ko(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function hd(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ge(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function gt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,T&2){var s=r.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),r.pending=t,Ze(e,n)}return s=r.interleaved,s===null?(t.next=t,qo(r)):(t.next=s.next,s.next=t),r.interleaved=t,Ze(e,n)}function $r(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,_o(e,n)}}function ca(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var s=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?s=o=l:o=o.next=l,n=n.next}while(n!==null);o===null?s=o=t:o=o.next=t}else s=o=t;n={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function fi(e,t,n,r){var s=e.updateQueue;rt=!1;var o=s.firstBaseUpdate,l=s.lastBaseUpdate,a=s.shared.pending;if(a!==null){s.shared.pending=null;var c=a,d=c.next;c.next=null,l===null?o=d:l.next=d,l=c;var x=e.alternate;x!==null&&(x=x.updateQueue,a=x.lastBaseUpdate,a!==l&&(a===null?x.firstBaseUpdate=d:a.next=d,x.lastBaseUpdate=c))}if(o!==null){var h=s.baseState;l=0,x=d=c=null,a=o;do{var g=a.lane,m=a.eventTime;if((r&g)===g){x!==null&&(x=x.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=e,w=a;switch(g=t,m=n,w.tag){case 1:if(v=w.payload,typeof v=="function"){h=v.call(m,h,g);break e}h=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=w.payload,g=typeof v=="function"?v.call(m,h,g):v,g==null)break e;h=H({},h,g);break e;case 2:rt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,g=s.effects,g===null?s.effects=[a]:g.push(a))}else m={eventTime:m,lane:g,tag:a.tag,payload:a.payload,callback:a.callback,next:null},x===null?(d=x=m,c=h):x=x.next=m,l|=g;if(a=a.next,a===null){if(a=s.shared.pending,a===null)break;g=a,a=g.next,g.next=null,s.lastBaseUpdate=g,s.shared.pending=null}}while(!0);if(x===null&&(c=h),s.baseState=c,s.firstBaseUpdate=d,s.lastBaseUpdate=x,t=s.shared.interleaved,t!==null){s=t;do l|=s.lane,s=s.next;while(s!==t)}else o===null&&(s.shared.lanes=0);Ft|=l,e.lanes=l,e.memoizedState=h}}function da(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],s=r.callback;if(s!==null){if(r.callback=null,r=n,typeof s!="function")throw Error(k(191,s));s.call(r)}}}var mr={},He=jt(mr),ir=jt(mr),sr=jt(mr);function It(e){if(e===mr)throw Error(k(174));return e}function Zo(e,t){switch(F(sr,t),F(ir,e),F(He,mr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Bs(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Bs(t,e)}O(He),F(He,t)}function gn(){O(He),O(ir),O(sr)}function gd(e){It(sr.current);var t=It(He.current),n=Bs(t,e.type);t!==n&&(F(ir,e),F(He,n))}function Jo(e){ir.current===e&&(O(He),O(ir))}var U=jt(0);function pi(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ds=[];function el(){for(var e=0;e<ds.length;e++)ds[e]._workInProgressVersionPrimary=null;ds.length=0}var Hr=et.ReactCurrentDispatcher,us=et.ReactCurrentBatchConfig,_t=0,$=null,q=null,J=null,hi=!1,Un=!1,or=0,Pp=0;function ie(){throw Error(k(321))}function tl(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!We(e[n],t[n]))return!1;return!0}function nl(e,t,n,r,s,o){if(_t=o,$=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Hr.current=e===null||e.memoizedState===null?Bp:Mp,e=n(r,s),Un){o=0;do{if(Un=!1,or=0,25<=o)throw Error(k(301));o+=1,J=q=null,t.updateQueue=null,Hr.current=Tp,e=n(r,s)}while(Un)}if(Hr.current=gi,t=q!==null&&q.next!==null,_t=0,J=q=$=null,hi=!1,t)throw Error(k(300));return e}function rl(){var e=or!==0;return or=0,e}function Ae(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return J===null?$.memoizedState=J=e:J=J.next=e,J}function Ee(){if(q===null){var e=$.alternate;e=e!==null?e.memoizedState:null}else e=q.next;var t=J===null?$.memoizedState:J.next;if(t!==null)J=t,q=e;else{if(e===null)throw Error(k(310));q=e,e={memoizedState:q.memoizedState,baseState:q.baseState,baseQueue:q.baseQueue,queue:q.queue,next:null},J===null?$.memoizedState=J=e:J=J.next=e}return J}function lr(e,t){return typeof t=="function"?t(e):t}function fs(e){var t=Ee(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=q,s=r.baseQueue,o=n.pending;if(o!==null){if(s!==null){var l=s.next;s.next=o.next,o.next=l}r.baseQueue=s=o,n.pending=null}if(s!==null){o=s.next,r=r.baseState;var a=l=null,c=null,d=o;do{var x=d.lane;if((_t&x)===x)c!==null&&(c=c.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:e(r,d.action);else{var h={lane:x,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};c===null?(a=c=h,l=r):c=c.next=h,$.lanes|=x,Ft|=x}d=d.next}while(d!==null&&d!==o);c===null?l=r:c.next=a,We(r,t.memoizedState)||(pe=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){s=e;do o=s.lane,$.lanes|=o,Ft|=o,s=s.next;while(s!==e)}else s===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ps(e){var t=Ee(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=n.dispatch,s=n.pending,o=t.memoizedState;if(s!==null){n.pending=null;var l=s=s.next;do o=e(o,l.action),l=l.next;while(l!==s);We(o,t.memoizedState)||(pe=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function xd(){}function md(e,t){var n=$,r=Ee(),s=t(),o=!We(r.memoizedState,s);if(o&&(r.memoizedState=s,pe=!0),r=r.queue,il(bd.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||J!==null&&J.memoizedState.tag&1){if(n.flags|=2048,ar(9,vd.bind(null,n,r,s,t),void 0,null),ee===null)throw Error(k(349));_t&30||yd(n,t,s)}return s}function yd(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=$.updateQueue,t===null?(t={lastEffect:null,stores:null},$.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function vd(e,t,n,r){t.value=n,t.getSnapshot=r,wd(t)&&kd(e)}function bd(e,t,n){return n(function(){wd(t)&&kd(e)})}function wd(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!We(e,n)}catch{return!0}}function kd(e){var t=Ze(e,1);t!==null&&Fe(t,e,1,-1)}function ua(e){var t=Ae();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:lr,lastRenderedState:e},t.queue=e,e=e.dispatch=Lp.bind(null,$,e),[t.memoizedState,e]}function ar(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=$.updateQueue,t===null?(t={lastEffect:null,stores:null},$.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function jd(){return Ee().memoizedState}function Vr(e,t,n,r){var s=Ae();$.flags|=e,s.memoizedState=ar(1|t,n,void 0,r===void 0?null:r)}function Ii(e,t,n,r){var s=Ee();r=r===void 0?null:r;var o=void 0;if(q!==null){var l=q.memoizedState;if(o=l.destroy,r!==null&&tl(r,l.deps)){s.memoizedState=ar(t,n,o,r);return}}$.flags|=e,s.memoizedState=ar(1|t,n,o,r)}function fa(e,t){return Vr(8390656,8,e,t)}function il(e,t){return Ii(2048,8,e,t)}function Sd(e,t){return Ii(4,2,e,t)}function Cd(e,t){return Ii(4,4,e,t)}function zd(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Nd(e,t,n){return n=n!=null?n.concat([e]):null,Ii(4,4,zd.bind(null,t,e),n)}function sl(){}function Ed(e,t){var n=Ee();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&tl(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Pd(e,t){var n=Ee();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&tl(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Rd(e,t,n){return _t&21?(We(n,t)||(n=Tc(),$.lanes|=n,Ft|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,pe=!0),e.memoizedState=n)}function Rp(e,t){var n=_;_=n!==0&&4>n?n:4,e(!0);var r=us.transition;us.transition={};try{e(!1),t()}finally{_=n,us.transition=r}}function Id(){return Ee().memoizedState}function Ip(e,t,n){var r=mt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Ld(e))Bd(t,n);else if(n=pd(e,t,n,r),n!==null){var s=ce();Fe(n,e,r,s),Md(n,t,r)}}function Lp(e,t,n){var r=mt(e),s={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ld(e))Bd(t,s);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var l=t.lastRenderedState,a=o(l,n);if(s.hasEagerState=!0,s.eagerState=a,We(a,l)){var c=t.interleaved;c===null?(s.next=s,qo(t)):(s.next=c.next,c.next=s),t.interleaved=s;return}}catch{}finally{}n=pd(e,t,s,r),n!==null&&(s=ce(),Fe(n,e,r,s),Md(n,t,r))}}function Ld(e){var t=e.alternate;return e===$||t!==null&&t===$}function Bd(e,t){Un=hi=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Md(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,_o(e,n)}}var gi={readContext:Ne,useCallback:ie,useContext:ie,useEffect:ie,useImperativeHandle:ie,useInsertionEffect:ie,useLayoutEffect:ie,useMemo:ie,useReducer:ie,useRef:ie,useState:ie,useDebugValue:ie,useDeferredValue:ie,useTransition:ie,useMutableSource:ie,useSyncExternalStore:ie,useId:ie,unstable_isNewReconciler:!1},Bp={readContext:Ne,useCallback:function(e,t){return Ae().memoizedState=[e,t===void 0?null:t],e},useContext:Ne,useEffect:fa,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Vr(4194308,4,zd.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Vr(4194308,4,e,t)},useInsertionEffect:function(e,t){return Vr(4,2,e,t)},useMemo:function(e,t){var n=Ae();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ae();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Ip.bind(null,$,e),[r.memoizedState,e]},useRef:function(e){var t=Ae();return e={current:e},t.memoizedState=e},useState:ua,useDebugValue:sl,useDeferredValue:function(e){return Ae().memoizedState=e},useTransition:function(){var e=ua(!1),t=e[0];return e=Rp.bind(null,e[1]),Ae().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=$,s=Ae();if(D){if(n===void 0)throw Error(k(407));n=n()}else{if(n=t(),ee===null)throw Error(k(349));_t&30||yd(r,t,n)}s.memoizedState=n;var o={value:n,getSnapshot:t};return s.queue=o,fa(bd.bind(null,r,o,e),[e]),r.flags|=2048,ar(9,vd.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Ae(),t=ee.identifierPrefix;if(D){var n=Xe,r=Qe;n=(r&~(1<<32-_e(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=or++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Pp++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Mp={readContext:Ne,useCallback:Ed,useContext:Ne,useEffect:il,useImperativeHandle:Nd,useInsertionEffect:Sd,useLayoutEffect:Cd,useMemo:Pd,useReducer:fs,useRef:jd,useState:function(){return fs(lr)},useDebugValue:sl,useDeferredValue:function(e){var t=Ee();return Rd(t,q.memoizedState,e)},useTransition:function(){var e=fs(lr)[0],t=Ee().memoizedState;return[e,t]},useMutableSource:xd,useSyncExternalStore:md,useId:Id,unstable_isNewReconciler:!1},Tp={readContext:Ne,useCallback:Ed,useContext:Ne,useEffect:il,useImperativeHandle:Nd,useInsertionEffect:Sd,useLayoutEffect:Cd,useMemo:Pd,useReducer:ps,useRef:jd,useState:function(){return ps(lr)},useDebugValue:sl,useDeferredValue:function(e){var t=Ee();return q===null?t.memoizedState=e:Rd(t,q.memoizedState,e)},useTransition:function(){var e=ps(lr)[0],t=Ee().memoizedState;return[e,t]},useMutableSource:xd,useSyncExternalStore:md,useId:Id,unstable_isNewReconciler:!1};function Be(e,t){if(e&&e.defaultProps){t=H({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function eo(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:H({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Li={isMounted:function(e){return(e=e._reactInternals)?Dt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ce(),s=mt(e),o=Ge(r,s);o.payload=t,n!=null&&(o.callback=n),t=gt(e,o,s),t!==null&&(Fe(t,e,s,r),$r(t,e,s))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ce(),s=mt(e),o=Ge(r,s);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=gt(e,o,s),t!==null&&(Fe(t,e,s,r),$r(t,e,s))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ce(),r=mt(e),s=Ge(n,r);s.tag=2,t!=null&&(s.callback=t),t=gt(e,s,r),t!==null&&(Fe(t,e,r,n),$r(t,e,r))}};function pa(e,t,n,r,s,o,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,l):t.prototype&&t.prototype.isPureReactComponent?!er(n,r)||!er(s,o):!0}function Td(e,t,n){var r=!1,s=wt,o=t.contextType;return typeof o=="object"&&o!==null?o=Ne(o):(s=ge(t)?Mt:le.current,r=t.contextTypes,o=(r=r!=null)?fn(e,s):wt),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Li,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=s,e.__reactInternalMemoizedMaskedChildContext=o),t}function ha(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Li.enqueueReplaceState(t,t.state,null)}function to(e,t,n,r){var s=e.stateNode;s.props=n,s.state=e.memoizedState,s.refs={},Ko(e);var o=t.contextType;typeof o=="object"&&o!==null?s.context=Ne(o):(o=ge(t)?Mt:le.current,s.context=fn(e,o)),s.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(eo(e,t,o,n),s.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(t=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),t!==s.state&&Li.enqueueReplaceState(s,s.state,null),fi(e,n,s,r),s.state=e.memoizedState),typeof s.componentDidMount=="function"&&(e.flags|=4194308)}function xn(e,t){try{var n="",r=t;do n+=cf(r),r=r.return;while(r);var s=n}catch(o){s=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:s,digest:null}}function hs(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function no(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var _p=typeof WeakMap=="function"?WeakMap:Map;function _d(e,t,n){n=Ge(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){mi||(mi=!0,po=r),no(e,t)},n}function Fd(e,t,n){n=Ge(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var s=t.value;n.payload=function(){return r(s)},n.callback=function(){no(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){no(e,t),typeof r!="function"&&(xt===null?xt=new Set([this]):xt.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function ga(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new _p;var s=new Set;r.set(t,s)}else s=r.get(t),s===void 0&&(s=new Set,r.set(t,s));s.has(n)||(s.add(n),e=qp.bind(null,e,t,n),t.then(e,e))}function xa(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function ma(e,t,n,r,s){return e.mode&1?(e.flags|=65536,e.lanes=s,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ge(-1,1),t.tag=2,gt(n,t,1))),n.lanes|=1),e)}var Fp=et.ReactCurrentOwner,pe=!1;function ae(e,t,n,r){t.child=e===null?fd(t,null,n,r):hn(t,e.child,n,r)}function ya(e,t,n,r,s){n=n.render;var o=t.ref;return an(t,s),r=nl(e,t,n,r,o,s),n=rl(),e!==null&&!pe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s,Je(e,t,s)):(D&&n&&Ho(t),t.flags|=1,ae(e,t,r,s),t.child)}function va(e,t,n,r,s){if(e===null){var o=n.type;return typeof o=="function"&&!pl(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Wd(e,t,o,r,s)):(e=Gr(n.type,null,r,t,t.mode,s),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&s)){var l=o.memoizedProps;if(n=n.compare,n=n!==null?n:er,n(l,r)&&e.ref===t.ref)return Je(e,t,s)}return t.flags|=1,e=yt(o,r),e.ref=t.ref,e.return=t,t.child=e}function Wd(e,t,n,r,s){if(e!==null){var o=e.memoizedProps;if(er(o,r)&&e.ref===t.ref)if(pe=!1,t.pendingProps=r=o,(e.lanes&s)!==0)e.flags&131072&&(pe=!0);else return t.lanes=e.lanes,Je(e,t,s)}return ro(e,t,n,r,s)}function Od(e,t,n){var r=t.pendingProps,s=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},F(nn,me),me|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,F(nn,me),me|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,F(nn,me),me|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,F(nn,me),me|=r;return ae(e,t,s,n),t.child}function Ad(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ro(e,t,n,r,s){var o=ge(n)?Mt:le.current;return o=fn(t,o),an(t,s),n=nl(e,t,n,r,o,s),r=rl(),e!==null&&!pe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s,Je(e,t,s)):(D&&r&&Ho(t),t.flags|=1,ae(e,t,n,s),t.child)}function ba(e,t,n,r,s){if(ge(n)){var o=!0;li(t)}else o=!1;if(an(t,s),t.stateNode===null)Yr(e,t),Td(t,n,r),to(t,n,r,s),r=!0;else if(e===null){var l=t.stateNode,a=t.memoizedProps;l.props=a;var c=l.context,d=n.contextType;typeof d=="object"&&d!==null?d=Ne(d):(d=ge(n)?Mt:le.current,d=fn(t,d));var x=n.getDerivedStateFromProps,h=typeof x=="function"||typeof l.getSnapshotBeforeUpdate=="function";h||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==r||c!==d)&&ha(t,l,r,d),rt=!1;var g=t.memoizedState;l.state=g,fi(t,r,l,s),c=t.memoizedState,a!==r||g!==c||he.current||rt?(typeof x=="function"&&(eo(t,n,x,r),c=t.memoizedState),(a=rt||pa(t,n,a,r,g,c,d))?(h||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),l.props=r,l.state=c,l.context=d,r=a):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,hd(e,t),a=t.memoizedProps,d=t.type===t.elementType?a:Be(t.type,a),l.props=d,h=t.pendingProps,g=l.context,c=n.contextType,typeof c=="object"&&c!==null?c=Ne(c):(c=ge(n)?Mt:le.current,c=fn(t,c));var m=n.getDerivedStateFromProps;(x=typeof m=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==h||g!==c)&&ha(t,l,r,c),rt=!1,g=t.memoizedState,l.state=g,fi(t,r,l,s);var v=t.memoizedState;a!==h||g!==v||he.current||rt?(typeof m=="function"&&(eo(t,n,m,r),v=t.memoizedState),(d=rt||pa(t,n,d,r,g,v,c)||!1)?(x||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,v,c),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,v,c)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=v),l.props=r,l.state=v,l.context=c,r=d):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return io(e,t,n,r,o,s)}function io(e,t,n,r,s,o){Ad(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return s&&sa(t,n,!1),Je(e,t,o);r=t.stateNode,Fp.current=t;var a=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=hn(t,e.child,null,o),t.child=hn(t,null,a,o)):ae(e,t,a,o),t.memoizedState=r.state,s&&sa(t,n,!0),t.child}function Dd(e){var t=e.stateNode;t.pendingContext?ia(e,t.pendingContext,t.pendingContext!==t.context):t.context&&ia(e,t.context,!1),Zo(e,t.containerInfo)}function wa(e,t,n,r,s){return pn(),Yo(s),t.flags|=256,ae(e,t,n,r),t.child}var so={dehydrated:null,treeContext:null,retryLane:0};function oo(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ud(e,t,n){var r=t.pendingProps,s=U.current,o=!1,l=(t.flags&128)!==0,a;if((a=l)||(a=e!==null&&e.memoizedState===null?!1:(s&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(s|=1),F(U,s&1),e===null)return Zs(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,o?(r=t.mode,o=t.child,l={mode:"hidden",children:l},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=l):o=Ti(l,r,0,null),e=Bt(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=oo(n),t.memoizedState=so,e):ol(t,l));if(s=e.memoizedState,s!==null&&(a=s.dehydrated,a!==null))return Wp(e,t,l,r,a,s,n);if(o){o=r.fallback,l=t.mode,s=e.child,a=s.sibling;var c={mode:"hidden",children:r.children};return!(l&1)&&t.child!==s?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=yt(s,c),r.subtreeFlags=s.subtreeFlags&14680064),a!==null?o=yt(a,o):(o=Bt(o,l,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,l=e.child.memoizedState,l=l===null?oo(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},o.memoizedState=l,o.childLanes=e.childLanes&~n,t.memoizedState=so,r}return o=e.child,e=o.sibling,r=yt(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function ol(e,t){return t=Ti({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Mr(e,t,n,r){return r!==null&&Yo(r),hn(t,e.child,null,n),e=ol(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Wp(e,t,n,r,s,o,l){if(n)return t.flags&256?(t.flags&=-257,r=hs(Error(k(422))),Mr(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,s=t.mode,r=Ti({mode:"visible",children:r.children},s,0,null),o=Bt(o,s,l,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&hn(t,e.child,null,l),t.child.memoizedState=oo(l),t.memoizedState=so,o);if(!(t.mode&1))return Mr(e,t,l,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(k(419)),r=hs(o,r,void 0),Mr(e,t,l,r)}if(a=(l&e.childLanes)!==0,pe||a){if(r=ee,r!==null){switch(l&-l){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(r.suspendedLanes|l)?0:s,s!==0&&s!==o.retryLane&&(o.retryLane=s,Ze(e,s),Fe(r,e,s,-1))}return fl(),r=hs(Error(k(421))),Mr(e,t,l,r)}return s.data==="$?"?(t.flags|=128,t.child=e.child,t=Kp.bind(null,e),s._reactRetry=t,null):(e=o.treeContext,ye=ht(s.nextSibling),ve=t,D=!0,Te=null,e!==null&&(je[Se++]=Qe,je[Se++]=Xe,je[Se++]=Tt,Qe=e.id,Xe=e.overflow,Tt=t),t=ol(t,r.children),t.flags|=4096,t)}function ka(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Js(e.return,t,n)}function gs(e,t,n,r,s){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:s}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=s)}function $d(e,t,n){var r=t.pendingProps,s=r.revealOrder,o=r.tail;if(ae(e,t,r.children,n),r=U.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ka(e,n,t);else if(e.tag===19)ka(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(F(U,r),!(t.mode&1))t.memoizedState=null;else switch(s){case"forwards":for(n=t.child,s=null;n!==null;)e=n.alternate,e!==null&&pi(e)===null&&(s=n),n=n.sibling;n=s,n===null?(s=t.child,t.child=null):(s=n.sibling,n.sibling=null),gs(t,!1,s,n,o);break;case"backwards":for(n=null,s=t.child,t.child=null;s!==null;){if(e=s.alternate,e!==null&&pi(e)===null){t.child=s;break}e=s.sibling,s.sibling=n,n=s,s=e}gs(t,!0,n,null,o);break;case"together":gs(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Yr(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Je(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Ft|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(k(153));if(t.child!==null){for(e=t.child,n=yt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=yt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Op(e,t,n){switch(t.tag){case 3:Dd(t),pn();break;case 5:gd(t);break;case 1:ge(t.type)&&li(t);break;case 4:Zo(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,s=t.memoizedProps.value;F(di,r._currentValue),r._currentValue=s;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(F(U,U.current&1),t.flags|=128,null):n&t.child.childLanes?Ud(e,t,n):(F(U,U.current&1),e=Je(e,t,n),e!==null?e.sibling:null);F(U,U.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return $d(e,t,n);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),F(U,U.current),r)break;return null;case 22:case 23:return t.lanes=0,Od(e,t,n)}return Je(e,t,n)}var Hd,lo,Vd,Yd;Hd=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};lo=function(){};Vd=function(e,t,n,r){var s=e.memoizedProps;if(s!==r){e=t.stateNode,It(He.current);var o=null;switch(n){case"input":s=Ps(e,s),r=Ps(e,r),o=[];break;case"select":s=H({},s,{value:void 0}),r=H({},r,{value:void 0}),o=[];break;case"textarea":s=Ls(e,s),r=Ls(e,r),o=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=si)}Ms(n,r);var l;n=null;for(d in s)if(!r.hasOwnProperty(d)&&s.hasOwnProperty(d)&&s[d]!=null)if(d==="style"){var a=s[d];for(l in a)a.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Qn.hasOwnProperty(d)?o||(o=[]):(o=o||[]).push(d,null));for(d in r){var c=r[d];if(a=s!=null?s[d]:void 0,r.hasOwnProperty(d)&&c!==a&&(c!=null||a!=null))if(d==="style")if(a){for(l in a)!a.hasOwnProperty(l)||c&&c.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in c)c.hasOwnProperty(l)&&a[l]!==c[l]&&(n||(n={}),n[l]=c[l])}else n||(o||(o=[]),o.push(d,n)),n=c;else d==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,a=a?a.__html:void 0,c!=null&&a!==c&&(o=o||[]).push(d,c)):d==="children"?typeof c!="string"&&typeof c!="number"||(o=o||[]).push(d,""+c):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Qn.hasOwnProperty(d)?(c!=null&&d==="onScroll"&&W("scroll",e),o||a===c||(o=[])):(o=o||[]).push(d,c))}n&&(o=o||[]).push("style",n);var d=o;(t.updateQueue=d)&&(t.flags|=4)}};Yd=function(e,t,n,r){n!==r&&(t.flags|=4)};function In(e,t){if(!D)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function se(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var s=e.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Ap(e,t,n){var r=t.pendingProps;switch(Vo(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return se(t),null;case 1:return ge(t.type)&&oi(),se(t),null;case 3:return r=t.stateNode,gn(),O(he),O(le),el(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Lr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Te!==null&&(xo(Te),Te=null))),lo(e,t),se(t),null;case 5:Jo(t);var s=It(sr.current);if(n=t.type,e!==null&&t.stateNode!=null)Vd(e,t,n,r,s),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(k(166));return se(t),null}if(e=It(He.current),Lr(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[De]=t,r[rr]=o,e=(t.mode&1)!==0,n){case"dialog":W("cancel",r),W("close",r);break;case"iframe":case"object":case"embed":W("load",r);break;case"video":case"audio":for(s=0;s<_n.length;s++)W(_n[s],r);break;case"source":W("error",r);break;case"img":case"image":case"link":W("error",r),W("load",r);break;case"details":W("toggle",r);break;case"input":Il(r,o),W("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},W("invalid",r);break;case"textarea":Bl(r,o),W("invalid",r)}Ms(n,o),s=null;for(var l in o)if(o.hasOwnProperty(l)){var a=o[l];l==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&Ir(r.textContent,a,e),s=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&Ir(r.textContent,a,e),s=["children",""+a]):Qn.hasOwnProperty(l)&&a!=null&&l==="onScroll"&&W("scroll",r)}switch(n){case"input":jr(r),Ll(r,o,!0);break;case"textarea":jr(r),Ml(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=si)}r=s,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=s.nodeType===9?s:s.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=bc(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[De]=t,e[rr]=r,Hd(e,t,!1,!1),t.stateNode=e;e:{switch(l=Ts(n,r),n){case"dialog":W("cancel",e),W("close",e),s=r;break;case"iframe":case"object":case"embed":W("load",e),s=r;break;case"video":case"audio":for(s=0;s<_n.length;s++)W(_n[s],e);s=r;break;case"source":W("error",e),s=r;break;case"img":case"image":case"link":W("error",e),W("load",e),s=r;break;case"details":W("toggle",e),s=r;break;case"input":Il(e,r),s=Ps(e,r),W("invalid",e);break;case"option":s=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},s=H({},r,{value:void 0}),W("invalid",e);break;case"textarea":Bl(e,r),s=Ls(e,r),W("invalid",e);break;default:s=r}Ms(n,s),a=s;for(o in a)if(a.hasOwnProperty(o)){var c=a[o];o==="style"?jc(e,c):o==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&wc(e,c)):o==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&Xn(e,c):typeof c=="number"&&Xn(e,""+c):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Qn.hasOwnProperty(o)?c!=null&&o==="onScroll"&&W("scroll",e):c!=null&&Ro(e,o,c,l))}switch(n){case"input":jr(e),Ll(e,r,!1);break;case"textarea":jr(e),Ml(e);break;case"option":r.value!=null&&e.setAttribute("value",""+bt(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?rn(e,!!r.multiple,o,!1):r.defaultValue!=null&&rn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(e.onclick=si)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return se(t),null;case 6:if(e&&t.stateNode!=null)Yd(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(k(166));if(n=It(sr.current),It(He.current),Lr(t)){if(r=t.stateNode,n=t.memoizedProps,r[De]=t,(o=r.nodeValue!==n)&&(e=ve,e!==null))switch(e.tag){case 3:Ir(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ir(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[De]=t,t.stateNode=r}return se(t),null;case 13:if(O(U),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(D&&ye!==null&&t.mode&1&&!(t.flags&128))dd(),pn(),t.flags|=98560,o=!1;else if(o=Lr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(k(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(k(317));o[De]=t}else pn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;se(t),o=!1}else Te!==null&&(xo(Te),Te=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||U.current&1?K===0&&(K=3):fl())),t.updateQueue!==null&&(t.flags|=4),se(t),null);case 4:return gn(),lo(e,t),e===null&&tr(t.stateNode.containerInfo),se(t),null;case 10:return Go(t.type._context),se(t),null;case 17:return ge(t.type)&&oi(),se(t),null;case 19:if(O(U),o=t.memoizedState,o===null)return se(t),null;if(r=(t.flags&128)!==0,l=o.rendering,l===null)if(r)In(o,!1);else{if(K!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=pi(e),l!==null){for(t.flags|=128,In(o,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,l=o.alternate,l===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,e=l.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return F(U,U.current&1|2),t.child}e=e.sibling}o.tail!==null&&Q()>mn&&(t.flags|=128,r=!0,In(o,!1),t.lanes=4194304)}else{if(!r)if(e=pi(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),In(o,!0),o.tail===null&&o.tailMode==="hidden"&&!l.alternate&&!D)return se(t),null}else 2*Q()-o.renderingStartTime>mn&&n!==1073741824&&(t.flags|=128,r=!0,In(o,!1),t.lanes=4194304);o.isBackwards?(l.sibling=t.child,t.child=l):(n=o.last,n!==null?n.sibling=l:t.child=l,o.last=l)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Q(),t.sibling=null,n=U.current,F(U,r?n&1|2:n&1),t):(se(t),null);case 22:case 23:return ul(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?me&1073741824&&(se(t),t.subtreeFlags&6&&(t.flags|=8192)):se(t),null;case 24:return null;case 25:return null}throw Error(k(156,t.tag))}function Dp(e,t){switch(Vo(t),t.tag){case 1:return ge(t.type)&&oi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return gn(),O(he),O(le),el(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Jo(t),null;case 13:if(O(U),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(k(340));pn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return O(U),null;case 4:return gn(),null;case 10:return Go(t.type._context),null;case 22:case 23:return ul(),null;case 24:return null;default:return null}}var Tr=!1,oe=!1,Up=typeof WeakSet=="function"?WeakSet:Set,C=null;function tn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){V(e,t,r)}else n.current=null}function ao(e,t,n){try{n()}catch(r){V(e,t,r)}}var ja=!1;function $p(e,t){if(Vs=ni,e=Kc(),$o(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var s=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var l=0,a=-1,c=-1,d=0,x=0,h=e,g=null;t:for(;;){for(var m;h!==n||s!==0&&h.nodeType!==3||(a=l+s),h!==o||r!==0&&h.nodeType!==3||(c=l+r),h.nodeType===3&&(l+=h.nodeValue.length),(m=h.firstChild)!==null;)g=h,h=m;for(;;){if(h===e)break t;if(g===n&&++d===s&&(a=l),g===o&&++x===r&&(c=l),(m=h.nextSibling)!==null)break;h=g,g=h.parentNode}h=m}n=a===-1||c===-1?null:{start:a,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ys={focusedElem:e,selectionRange:n},ni=!1,C=t;C!==null;)if(t=C,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,C=e;else for(;C!==null;){t=C;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var w=v.memoizedProps,j=v.memoizedState,f=t.stateNode,u=f.getSnapshotBeforeUpdate(t.elementType===t.type?w:Be(t.type,w),j);f.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(k(163))}}catch(y){V(t,t.return,y)}if(e=t.sibling,e!==null){e.return=t.return,C=e;break}C=t.return}return v=ja,ja=!1,v}function $n(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&e)===e){var o=s.destroy;s.destroy=void 0,o!==void 0&&ao(t,n,o)}s=s.next}while(s!==r)}}function Bi(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function co(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Qd(e){var t=e.alternate;t!==null&&(e.alternate=null,Qd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[De],delete t[rr],delete t[Gs],delete t[Cp],delete t[zp])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Xd(e){return e.tag===5||e.tag===3||e.tag===4}function Sa(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Xd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function uo(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=si));else if(r!==4&&(e=e.child,e!==null))for(uo(e,t,n),e=e.sibling;e!==null;)uo(e,t,n),e=e.sibling}function fo(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(fo(e,t,n),e=e.sibling;e!==null;)fo(e,t,n),e=e.sibling}var te=null,Me=!1;function tt(e,t,n){for(n=n.child;n!==null;)Gd(e,t,n),n=n.sibling}function Gd(e,t,n){if($e&&typeof $e.onCommitFiberUnmount=="function")try{$e.onCommitFiberUnmount(Ci,n)}catch{}switch(n.tag){case 5:oe||tn(n,t);case 6:var r=te,s=Me;te=null,tt(e,t,n),te=r,Me=s,te!==null&&(Me?(e=te,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):te.removeChild(n.stateNode));break;case 18:te!==null&&(Me?(e=te,n=n.stateNode,e.nodeType===8?as(e.parentNode,n):e.nodeType===1&&as(e,n),Zn(e)):as(te,n.stateNode));break;case 4:r=te,s=Me,te=n.stateNode.containerInfo,Me=!0,tt(e,t,n),te=r,Me=s;break;case 0:case 11:case 14:case 15:if(!oe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var o=s,l=o.destroy;o=o.tag,l!==void 0&&(o&2||o&4)&&ao(n,t,l),s=s.next}while(s!==r)}tt(e,t,n);break;case 1:if(!oe&&(tn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){V(n,t,a)}tt(e,t,n);break;case 21:tt(e,t,n);break;case 22:n.mode&1?(oe=(r=oe)||n.memoizedState!==null,tt(e,t,n),oe=r):tt(e,t,n);break;default:tt(e,t,n)}}function Ca(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Up),t.forEach(function(r){var s=Zp.bind(null,e,r);n.has(r)||(n.add(r),r.then(s,s))})}}function Ie(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var s=n[r];try{var o=e,l=t,a=l;e:for(;a!==null;){switch(a.tag){case 5:te=a.stateNode,Me=!1;break e;case 3:te=a.stateNode.containerInfo,Me=!0;break e;case 4:te=a.stateNode.containerInfo,Me=!0;break e}a=a.return}if(te===null)throw Error(k(160));Gd(o,l,s),te=null,Me=!1;var c=s.alternate;c!==null&&(c.return=null),s.return=null}catch(d){V(s,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)qd(t,e),t=t.sibling}function qd(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ie(t,e),Oe(e),r&4){try{$n(3,e,e.return),Bi(3,e)}catch(w){V(e,e.return,w)}try{$n(5,e,e.return)}catch(w){V(e,e.return,w)}}break;case 1:Ie(t,e),Oe(e),r&512&&n!==null&&tn(n,n.return);break;case 5:if(Ie(t,e),Oe(e),r&512&&n!==null&&tn(n,n.return),e.flags&32){var s=e.stateNode;try{Xn(s,"")}catch(w){V(e,e.return,w)}}if(r&4&&(s=e.stateNode,s!=null)){var o=e.memoizedProps,l=n!==null?n.memoizedProps:o,a=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&yc(s,o),Ts(a,l);var d=Ts(a,o);for(l=0;l<c.length;l+=2){var x=c[l],h=c[l+1];x==="style"?jc(s,h):x==="dangerouslySetInnerHTML"?wc(s,h):x==="children"?Xn(s,h):Ro(s,x,h,d)}switch(a){case"input":Rs(s,o);break;case"textarea":vc(s,o);break;case"select":var g=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!o.multiple;var m=o.value;m!=null?rn(s,!!o.multiple,m,!1):g!==!!o.multiple&&(o.defaultValue!=null?rn(s,!!o.multiple,o.defaultValue,!0):rn(s,!!o.multiple,o.multiple?[]:"",!1))}s[rr]=o}catch(w){V(e,e.return,w)}}break;case 6:if(Ie(t,e),Oe(e),r&4){if(e.stateNode===null)throw Error(k(162));s=e.stateNode,o=e.memoizedProps;try{s.nodeValue=o}catch(w){V(e,e.return,w)}}break;case 3:if(Ie(t,e),Oe(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Zn(t.containerInfo)}catch(w){V(e,e.return,w)}break;case 4:Ie(t,e),Oe(e);break;case 13:Ie(t,e),Oe(e),s=e.child,s.flags&8192&&(o=s.memoizedState!==null,s.stateNode.isHidden=o,!o||s.alternate!==null&&s.alternate.memoizedState!==null||(cl=Q())),r&4&&Ca(e);break;case 22:if(x=n!==null&&n.memoizedState!==null,e.mode&1?(oe=(d=oe)||x,Ie(t,e),oe=d):Ie(t,e),Oe(e),r&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!x&&e.mode&1)for(C=e,x=e.child;x!==null;){for(h=C=x;C!==null;){switch(g=C,m=g.child,g.tag){case 0:case 11:case 14:case 15:$n(4,g,g.return);break;case 1:tn(g,g.return);var v=g.stateNode;if(typeof v.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(w){V(r,n,w)}}break;case 5:tn(g,g.return);break;case 22:if(g.memoizedState!==null){Na(h);continue}}m!==null?(m.return=g,C=m):Na(h)}x=x.sibling}e:for(x=null,h=e;;){if(h.tag===5){if(x===null){x=h;try{s=h.stateNode,d?(o=s.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=h.stateNode,c=h.memoizedProps.style,l=c!=null&&c.hasOwnProperty("display")?c.display:null,a.style.display=kc("display",l))}catch(w){V(e,e.return,w)}}}else if(h.tag===6){if(x===null)try{h.stateNode.nodeValue=d?"":h.memoizedProps}catch(w){V(e,e.return,w)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;x===h&&(x=null),h=h.return}x===h&&(x=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Ie(t,e),Oe(e),r&4&&Ca(e);break;case 21:break;default:Ie(t,e),Oe(e)}}function Oe(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Xd(n)){var r=n;break e}n=n.return}throw Error(k(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&(Xn(s,""),r.flags&=-33);var o=Sa(e);fo(e,o,s);break;case 3:case 4:var l=r.stateNode.containerInfo,a=Sa(e);uo(e,a,l);break;default:throw Error(k(161))}}catch(c){V(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Hp(e,t,n){C=e,Kd(e)}function Kd(e,t,n){for(var r=(e.mode&1)!==0;C!==null;){var s=C,o=s.child;if(s.tag===22&&r){var l=s.memoizedState!==null||Tr;if(!l){var a=s.alternate,c=a!==null&&a.memoizedState!==null||oe;a=Tr;var d=oe;if(Tr=l,(oe=c)&&!d)for(C=s;C!==null;)l=C,c=l.child,l.tag===22&&l.memoizedState!==null?Ea(s):c!==null?(c.return=l,C=c):Ea(s);for(;o!==null;)C=o,Kd(o),o=o.sibling;C=s,Tr=a,oe=d}za(e)}else s.subtreeFlags&8772&&o!==null?(o.return=s,C=o):za(e)}}function za(e){for(;C!==null;){var t=C;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:oe||Bi(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!oe)if(n===null)r.componentDidMount();else{var s=t.elementType===t.type?n.memoizedProps:Be(t.type,n.memoizedProps);r.componentDidUpdate(s,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&da(t,o,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}da(t,l,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var x=d.memoizedState;if(x!==null){var h=x.dehydrated;h!==null&&Zn(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(k(163))}oe||t.flags&512&&co(t)}catch(g){V(t,t.return,g)}}if(t===e){C=null;break}if(n=t.sibling,n!==null){n.return=t.return,C=n;break}C=t.return}}function Na(e){for(;C!==null;){var t=C;if(t===e){C=null;break}var n=t.sibling;if(n!==null){n.return=t.return,C=n;break}C=t.return}}function Ea(e){for(;C!==null;){var t=C;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Bi(4,t)}catch(c){V(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var s=t.return;try{r.componentDidMount()}catch(c){V(t,s,c)}}var o=t.return;try{co(t)}catch(c){V(t,o,c)}break;case 5:var l=t.return;try{co(t)}catch(c){V(t,l,c)}}}catch(c){V(t,t.return,c)}if(t===e){C=null;break}var a=t.sibling;if(a!==null){a.return=t.return,C=a;break}C=t.return}}var Vp=Math.ceil,xi=et.ReactCurrentDispatcher,ll=et.ReactCurrentOwner,ze=et.ReactCurrentBatchConfig,T=0,ee=null,X=null,ne=0,me=0,nn=jt(0),K=0,cr=null,Ft=0,Mi=0,al=0,Hn=null,fe=null,cl=0,mn=1/0,Ve=null,mi=!1,po=null,xt=null,_r=!1,lt=null,yi=0,Vn=0,ho=null,Qr=-1,Xr=0;function ce(){return T&6?Q():Qr!==-1?Qr:Qr=Q()}function mt(e){return e.mode&1?T&2&&ne!==0?ne&-ne:Ep.transition!==null?(Xr===0&&(Xr=Tc()),Xr):(e=_,e!==0||(e=window.event,e=e===void 0?16:Uc(e.type)),e):1}function Fe(e,t,n,r){if(50<Vn)throw Vn=0,ho=null,Error(k(185));hr(e,n,r),(!(T&2)||e!==ee)&&(e===ee&&(!(T&2)&&(Mi|=n),K===4&&st(e,ne)),xe(e,r),n===1&&T===0&&!(t.mode&1)&&(mn=Q()+500,Ri&&St()))}function xe(e,t){var n=e.callbackNode;Ef(e,t);var r=ti(e,e===ee?ne:0);if(r===0)n!==null&&Fl(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Fl(n),t===1)e.tag===0?Np(Pa.bind(null,e)):ld(Pa.bind(null,e)),jp(function(){!(T&6)&&St()}),n=null;else{switch(_c(r)){case 1:n=To;break;case 4:n=Bc;break;case 16:n=ei;break;case 536870912:n=Mc;break;default:n=ei}n=su(n,Zd.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Zd(e,t){if(Qr=-1,Xr=0,T&6)throw Error(k(327));var n=e.callbackNode;if(cn()&&e.callbackNode!==n)return null;var r=ti(e,e===ee?ne:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=vi(e,r);else{t=r;var s=T;T|=2;var o=eu();(ee!==e||ne!==t)&&(Ve=null,mn=Q()+500,Lt(e,t));do try{Xp();break}catch(a){Jd(e,a)}while(!0);Xo(),xi.current=o,T=s,X!==null?t=0:(ee=null,ne=0,t=K)}if(t!==0){if(t===2&&(s=As(e),s!==0&&(r=s,t=go(e,s))),t===1)throw n=cr,Lt(e,0),st(e,r),xe(e,Q()),n;if(t===6)st(e,r);else{if(s=e.current.alternate,!(r&30)&&!Yp(s)&&(t=vi(e,r),t===2&&(o=As(e),o!==0&&(r=o,t=go(e,o))),t===1))throw n=cr,Lt(e,0),st(e,r),xe(e,Q()),n;switch(e.finishedWork=s,e.finishedLanes=r,t){case 0:case 1:throw Error(k(345));case 2:Et(e,fe,Ve);break;case 3:if(st(e,r),(r&130023424)===r&&(t=cl+500-Q(),10<t)){if(ti(e,0)!==0)break;if(s=e.suspendedLanes,(s&r)!==r){ce(),e.pingedLanes|=e.suspendedLanes&s;break}e.timeoutHandle=Xs(Et.bind(null,e,fe,Ve),t);break}Et(e,fe,Ve);break;case 4:if(st(e,r),(r&4194240)===r)break;for(t=e.eventTimes,s=-1;0<r;){var l=31-_e(r);o=1<<l,l=t[l],l>s&&(s=l),r&=~o}if(r=s,r=Q()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Vp(r/1960))-r,10<r){e.timeoutHandle=Xs(Et.bind(null,e,fe,Ve),r);break}Et(e,fe,Ve);break;case 5:Et(e,fe,Ve);break;default:throw Error(k(329))}}}return xe(e,Q()),e.callbackNode===n?Zd.bind(null,e):null}function go(e,t){var n=Hn;return e.current.memoizedState.isDehydrated&&(Lt(e,t).flags|=256),e=vi(e,t),e!==2&&(t=fe,fe=n,t!==null&&xo(t)),e}function xo(e){fe===null?fe=e:fe.push.apply(fe,e)}function Yp(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var s=n[r],o=s.getSnapshot;s=s.value;try{if(!We(o(),s))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function st(e,t){for(t&=~al,t&=~Mi,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-_e(t),r=1<<n;e[n]=-1,t&=~r}}function Pa(e){if(T&6)throw Error(k(327));cn();var t=ti(e,0);if(!(t&1))return xe(e,Q()),null;var n=vi(e,t);if(e.tag!==0&&n===2){var r=As(e);r!==0&&(t=r,n=go(e,r))}if(n===1)throw n=cr,Lt(e,0),st(e,t),xe(e,Q()),n;if(n===6)throw Error(k(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Et(e,fe,Ve),xe(e,Q()),null}function dl(e,t){var n=T;T|=1;try{return e(t)}finally{T=n,T===0&&(mn=Q()+500,Ri&&St())}}function Wt(e){lt!==null&&lt.tag===0&&!(T&6)&&cn();var t=T;T|=1;var n=ze.transition,r=_;try{if(ze.transition=null,_=1,e)return e()}finally{_=r,ze.transition=n,T=t,!(T&6)&&St()}}function ul(){me=nn.current,O(nn)}function Lt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,kp(n)),X!==null)for(n=X.return;n!==null;){var r=n;switch(Vo(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&oi();break;case 3:gn(),O(he),O(le),el();break;case 5:Jo(r);break;case 4:gn();break;case 13:O(U);break;case 19:O(U);break;case 10:Go(r.type._context);break;case 22:case 23:ul()}n=n.return}if(ee=e,X=e=yt(e.current,null),ne=me=t,K=0,cr=null,al=Mi=Ft=0,fe=Hn=null,Rt!==null){for(t=0;t<Rt.length;t++)if(n=Rt[t],r=n.interleaved,r!==null){n.interleaved=null;var s=r.next,o=n.pending;if(o!==null){var l=o.next;o.next=s,r.next=l}n.pending=r}Rt=null}return e}function Jd(e,t){do{var n=X;try{if(Xo(),Hr.current=gi,hi){for(var r=$.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}hi=!1}if(_t=0,J=q=$=null,Un=!1,or=0,ll.current=null,n===null||n.return===null){K=1,cr=t,X=null;break}e:{var o=e,l=n.return,a=n,c=t;if(t=ne,a.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var d=c,x=a,h=x.tag;if(!(x.mode&1)&&(h===0||h===11||h===15)){var g=x.alternate;g?(x.updateQueue=g.updateQueue,x.memoizedState=g.memoizedState,x.lanes=g.lanes):(x.updateQueue=null,x.memoizedState=null)}var m=xa(l);if(m!==null){m.flags&=-257,ma(m,l,a,o,t),m.mode&1&&ga(o,d,t),t=m,c=d;var v=t.updateQueue;if(v===null){var w=new Set;w.add(c),t.updateQueue=w}else v.add(c);break e}else{if(!(t&1)){ga(o,d,t),fl();break e}c=Error(k(426))}}else if(D&&a.mode&1){var j=xa(l);if(j!==null){!(j.flags&65536)&&(j.flags|=256),ma(j,l,a,o,t),Yo(xn(c,a));break e}}o=c=xn(c,a),K!==4&&(K=2),Hn===null?Hn=[o]:Hn.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var f=_d(o,c,t);ca(o,f);break e;case 1:a=c;var u=o.type,p=o.stateNode;if(!(o.flags&128)&&(typeof u.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(xt===null||!xt.has(p)))){o.flags|=65536,t&=-t,o.lanes|=t;var y=Fd(o,a,t);ca(o,y);break e}}o=o.return}while(o!==null)}nu(n)}catch(S){t=S,X===n&&n!==null&&(X=n=n.return);continue}break}while(!0)}function eu(){var e=xi.current;return xi.current=gi,e===null?gi:e}function fl(){(K===0||K===3||K===2)&&(K=4),ee===null||!(Ft&268435455)&&!(Mi&268435455)||st(ee,ne)}function vi(e,t){var n=T;T|=2;var r=eu();(ee!==e||ne!==t)&&(Ve=null,Lt(e,t));do try{Qp();break}catch(s){Jd(e,s)}while(!0);if(Xo(),T=n,xi.current=r,X!==null)throw Error(k(261));return ee=null,ne=0,K}function Qp(){for(;X!==null;)tu(X)}function Xp(){for(;X!==null&&!vf();)tu(X)}function tu(e){var t=iu(e.alternate,e,me);e.memoizedProps=e.pendingProps,t===null?nu(e):X=t,ll.current=null}function nu(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Dp(n,t),n!==null){n.flags&=32767,X=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{K=6,X=null;return}}else if(n=Ap(n,t,me),n!==null){X=n;return}if(t=t.sibling,t!==null){X=t;return}X=t=e}while(t!==null);K===0&&(K=5)}function Et(e,t,n){var r=_,s=ze.transition;try{ze.transition=null,_=1,Gp(e,t,n,r)}finally{ze.transition=s,_=r}return null}function Gp(e,t,n,r){do cn();while(lt!==null);if(T&6)throw Error(k(327));n=e.finishedWork;var s=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(k(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Pf(e,o),e===ee&&(X=ee=null,ne=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||_r||(_r=!0,su(ei,function(){return cn(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=ze.transition,ze.transition=null;var l=_;_=1;var a=T;T|=4,ll.current=null,$p(e,n),qd(n,e),gp(Ys),ni=!!Vs,Ys=Vs=null,e.current=n,Hp(n),bf(),T=a,_=l,ze.transition=o}else e.current=n;if(_r&&(_r=!1,lt=e,yi=s),o=e.pendingLanes,o===0&&(xt=null),jf(n.stateNode),xe(e,Q()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)s=t[n],r(s.value,{componentStack:s.stack,digest:s.digest});if(mi)throw mi=!1,e=po,po=null,e;return yi&1&&e.tag!==0&&cn(),o=e.pendingLanes,o&1?e===ho?Vn++:(Vn=0,ho=e):Vn=0,St(),null}function cn(){if(lt!==null){var e=_c(yi),t=ze.transition,n=_;try{if(ze.transition=null,_=16>e?16:e,lt===null)var r=!1;else{if(e=lt,lt=null,yi=0,T&6)throw Error(k(331));var s=T;for(T|=4,C=e.current;C!==null;){var o=C,l=o.child;if(C.flags&16){var a=o.deletions;if(a!==null){for(var c=0;c<a.length;c++){var d=a[c];for(C=d;C!==null;){var x=C;switch(x.tag){case 0:case 11:case 15:$n(8,x,o)}var h=x.child;if(h!==null)h.return=x,C=h;else for(;C!==null;){x=C;var g=x.sibling,m=x.return;if(Qd(x),x===d){C=null;break}if(g!==null){g.return=m,C=g;break}C=m}}}var v=o.alternate;if(v!==null){var w=v.child;if(w!==null){v.child=null;do{var j=w.sibling;w.sibling=null,w=j}while(w!==null)}}C=o}}if(o.subtreeFlags&2064&&l!==null)l.return=o,C=l;else e:for(;C!==null;){if(o=C,o.flags&2048)switch(o.tag){case 0:case 11:case 15:$n(9,o,o.return)}var f=o.sibling;if(f!==null){f.return=o.return,C=f;break e}C=o.return}}var u=e.current;for(C=u;C!==null;){l=C;var p=l.child;if(l.subtreeFlags&2064&&p!==null)p.return=l,C=p;else e:for(l=u;C!==null;){if(a=C,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Bi(9,a)}}catch(S){V(a,a.return,S)}if(a===l){C=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,C=y;break e}C=a.return}}if(T=s,St(),$e&&typeof $e.onPostCommitFiberRoot=="function")try{$e.onPostCommitFiberRoot(Ci,e)}catch{}r=!0}return r}finally{_=n,ze.transition=t}}return!1}function Ra(e,t,n){t=xn(n,t),t=_d(e,t,1),e=gt(e,t,1),t=ce(),e!==null&&(hr(e,1,t),xe(e,t))}function V(e,t,n){if(e.tag===3)Ra(e,e,n);else for(;t!==null;){if(t.tag===3){Ra(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(xt===null||!xt.has(r))){e=xn(n,e),e=Fd(t,e,1),t=gt(t,e,1),e=ce(),t!==null&&(hr(t,1,e),xe(t,e));break}}t=t.return}}function qp(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ce(),e.pingedLanes|=e.suspendedLanes&n,ee===e&&(ne&n)===n&&(K===4||K===3&&(ne&130023424)===ne&&500>Q()-cl?Lt(e,0):al|=n),xe(e,t)}function ru(e,t){t===0&&(e.mode&1?(t=zr,zr<<=1,!(zr&130023424)&&(zr=4194304)):t=1);var n=ce();e=Ze(e,t),e!==null&&(hr(e,t,n),xe(e,n))}function Kp(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),ru(e,n)}function Zp(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,s=e.memoizedState;s!==null&&(n=s.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(k(314))}r!==null&&r.delete(t),ru(e,n)}var iu;iu=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||he.current)pe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return pe=!1,Op(e,t,n);pe=!!(e.flags&131072)}else pe=!1,D&&t.flags&1048576&&ad(t,ci,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Yr(e,t),e=t.pendingProps;var s=fn(t,le.current);an(t,n),s=nl(null,t,r,e,s,n);var o=rl();return t.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ge(r)?(o=!0,li(t)):o=!1,t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,Ko(t),s.updater=Li,t.stateNode=s,s._reactInternals=t,to(t,r,e,n),t=io(null,t,r,!0,o,n)):(t.tag=0,D&&o&&Ho(t),ae(null,t,s,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Yr(e,t),e=t.pendingProps,s=r._init,r=s(r._payload),t.type=r,s=t.tag=e0(r),e=Be(r,e),s){case 0:t=ro(null,t,r,e,n);break e;case 1:t=ba(null,t,r,e,n);break e;case 11:t=ya(null,t,r,e,n);break e;case 14:t=va(null,t,r,Be(r.type,e),n);break e}throw Error(k(306,r,""))}return t;case 0:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:Be(r,s),ro(e,t,r,s,n);case 1:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:Be(r,s),ba(e,t,r,s,n);case 3:e:{if(Dd(t),e===null)throw Error(k(387));r=t.pendingProps,o=t.memoizedState,s=o.element,hd(e,t),fi(t,r,null,n);var l=t.memoizedState;if(r=l.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){s=xn(Error(k(423)),t),t=wa(e,t,r,n,s);break e}else if(r!==s){s=xn(Error(k(424)),t),t=wa(e,t,r,n,s);break e}else for(ye=ht(t.stateNode.containerInfo.firstChild),ve=t,D=!0,Te=null,n=fd(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(pn(),r===s){t=Je(e,t,n);break e}ae(e,t,r,n)}t=t.child}return t;case 5:return gd(t),e===null&&Zs(t),r=t.type,s=t.pendingProps,o=e!==null?e.memoizedProps:null,l=s.children,Qs(r,s)?l=null:o!==null&&Qs(r,o)&&(t.flags|=32),Ad(e,t),ae(e,t,l,n),t.child;case 6:return e===null&&Zs(t),null;case 13:return Ud(e,t,n);case 4:return Zo(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=hn(t,null,r,n):ae(e,t,r,n),t.child;case 11:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:Be(r,s),ya(e,t,r,s,n);case 7:return ae(e,t,t.pendingProps,n),t.child;case 8:return ae(e,t,t.pendingProps.children,n),t.child;case 12:return ae(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,s=t.pendingProps,o=t.memoizedProps,l=s.value,F(di,r._currentValue),r._currentValue=l,o!==null)if(We(o.value,l)){if(o.children===s.children&&!he.current){t=Je(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){l=o.child;for(var c=a.firstContext;c!==null;){if(c.context===r){if(o.tag===1){c=Ge(-1,n&-n),c.tag=2;var d=o.updateQueue;if(d!==null){d=d.shared;var x=d.pending;x===null?c.next=c:(c.next=x.next,x.next=c),d.pending=c}}o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),Js(o.return,n,t),a.lanes|=n;break}c=c.next}}else if(o.tag===10)l=o.type===t.type?null:o.child;else if(o.tag===18){if(l=o.return,l===null)throw Error(k(341));l.lanes|=n,a=l.alternate,a!==null&&(a.lanes|=n),Js(l,n,t),l=o.sibling}else l=o.child;if(l!==null)l.return=o;else for(l=o;l!==null;){if(l===t){l=null;break}if(o=l.sibling,o!==null){o.return=l.return,l=o;break}l=l.return}o=l}ae(e,t,s.children,n),t=t.child}return t;case 9:return s=t.type,r=t.pendingProps.children,an(t,n),s=Ne(s),r=r(s),t.flags|=1,ae(e,t,r,n),t.child;case 14:return r=t.type,s=Be(r,t.pendingProps),s=Be(r.type,s),va(e,t,r,s,n);case 15:return Wd(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:Be(r,s),Yr(e,t),t.tag=1,ge(r)?(e=!0,li(t)):e=!1,an(t,n),Td(t,r,s),to(t,r,s,n),io(null,t,r,!0,e,n);case 19:return $d(e,t,n);case 22:return Od(e,t,n)}throw Error(k(156,t.tag))};function su(e,t){return Lc(e,t)}function Jp(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ce(e,t,n,r){return new Jp(e,t,n,r)}function pl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function e0(e){if(typeof e=="function")return pl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Lo)return 11;if(e===Bo)return 14}return 2}function yt(e,t){var n=e.alternate;return n===null?(n=Ce(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Gr(e,t,n,r,s,o){var l=2;if(r=e,typeof e=="function")pl(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Yt:return Bt(n.children,s,o,t);case Io:l=8,s|=8;break;case Cs:return e=Ce(12,n,t,s|2),e.elementType=Cs,e.lanes=o,e;case zs:return e=Ce(13,n,t,s),e.elementType=zs,e.lanes=o,e;case Ns:return e=Ce(19,n,t,s),e.elementType=Ns,e.lanes=o,e;case gc:return Ti(n,s,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case pc:l=10;break e;case hc:l=9;break e;case Lo:l=11;break e;case Bo:l=14;break e;case nt:l=16,r=null;break e}throw Error(k(130,e==null?e:typeof e,""))}return t=Ce(l,n,t,s),t.elementType=e,t.type=r,t.lanes=o,t}function Bt(e,t,n,r){return e=Ce(7,e,r,t),e.lanes=n,e}function Ti(e,t,n,r){return e=Ce(22,e,r,t),e.elementType=gc,e.lanes=n,e.stateNode={isHidden:!1},e}function xs(e,t,n){return e=Ce(6,e,null,t),e.lanes=n,e}function ms(e,t,n){return t=Ce(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function t0(e,t,n,r,s){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ki(0),this.expirationTimes=Ki(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ki(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function hl(e,t,n,r,s,o,l,a,c){return e=new t0(e,t,n,a,c),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Ce(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ko(o),e}function n0(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Vt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function ou(e){if(!e)return wt;e=e._reactInternals;e:{if(Dt(e)!==e||e.tag!==1)throw Error(k(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ge(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(k(171))}if(e.tag===1){var n=e.type;if(ge(n))return od(e,n,t)}return t}function lu(e,t,n,r,s,o,l,a,c){return e=hl(n,r,!0,e,s,o,l,a,c),e.context=ou(null),n=e.current,r=ce(),s=mt(n),o=Ge(r,s),o.callback=t??null,gt(n,o,s),e.current.lanes=s,hr(e,s,r),xe(e,r),e}function _i(e,t,n,r){var s=t.current,o=ce(),l=mt(s);return n=ou(n),t.context===null?t.context=n:t.pendingContext=n,t=Ge(o,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=gt(s,t,l),e!==null&&(Fe(e,s,l,o),$r(e,s,l)),l}function bi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ia(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function gl(e,t){Ia(e,t),(e=e.alternate)&&Ia(e,t)}function r0(){return null}var au=typeof reportError=="function"?reportError:function(e){console.error(e)};function xl(e){this._internalRoot=e}Fi.prototype.render=xl.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(k(409));_i(e,t,null,null)};Fi.prototype.unmount=xl.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Wt(function(){_i(null,e,null,null)}),t[Ke]=null}};function Fi(e){this._internalRoot=e}Fi.prototype.unstable_scheduleHydration=function(e){if(e){var t=Oc();e={blockedOn:null,target:e,priority:t};for(var n=0;n<it.length&&t!==0&&t<it[n].priority;n++);it.splice(n,0,e),n===0&&Dc(e)}};function ml(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Wi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function La(){}function i0(e,t,n,r,s){if(s){if(typeof r=="function"){var o=r;r=function(){var d=bi(l);o.call(d)}}var l=lu(t,r,e,0,null,!1,!1,"",La);return e._reactRootContainer=l,e[Ke]=l.current,tr(e.nodeType===8?e.parentNode:e),Wt(),l}for(;s=e.lastChild;)e.removeChild(s);if(typeof r=="function"){var a=r;r=function(){var d=bi(c);a.call(d)}}var c=hl(e,0,!1,null,null,!1,!1,"",La);return e._reactRootContainer=c,e[Ke]=c.current,tr(e.nodeType===8?e.parentNode:e),Wt(function(){_i(t,c,n,r)}),c}function Oi(e,t,n,r,s){var o=n._reactRootContainer;if(o){var l=o;if(typeof s=="function"){var a=s;s=function(){var c=bi(l);a.call(c)}}_i(t,l,e,s)}else l=i0(n,t,e,s,r);return bi(l)}Fc=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Tn(t.pendingLanes);n!==0&&(_o(t,n|1),xe(t,Q()),!(T&6)&&(mn=Q()+500,St()))}break;case 13:Wt(function(){var r=Ze(e,1);if(r!==null){var s=ce();Fe(r,e,1,s)}}),gl(e,1)}};Fo=function(e){if(e.tag===13){var t=Ze(e,134217728);if(t!==null){var n=ce();Fe(t,e,134217728,n)}gl(e,134217728)}};Wc=function(e){if(e.tag===13){var t=mt(e),n=Ze(e,t);if(n!==null){var r=ce();Fe(n,e,t,r)}gl(e,t)}};Oc=function(){return _};Ac=function(e,t){var n=_;try{return _=e,t()}finally{_=n}};Fs=function(e,t,n){switch(t){case"input":if(Rs(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var s=Pi(r);if(!s)throw Error(k(90));mc(r),Rs(r,s)}}}break;case"textarea":vc(e,n);break;case"select":t=n.value,t!=null&&rn(e,!!n.multiple,t,!1)}};zc=dl;Nc=Wt;var s0={usingClientEntryPoint:!1,Events:[xr,qt,Pi,Sc,Cc,dl]},Ln={findFiberByHostInstance:Pt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},o0={bundleType:Ln.bundleType,version:Ln.version,rendererPackageName:Ln.rendererPackageName,rendererConfig:Ln.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:et.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Rc(e),e===null?null:e.stateNode},findFiberByHostInstance:Ln.findFiberByHostInstance||r0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Fr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Fr.isDisabled&&Fr.supportsFiber)try{Ci=Fr.inject(o0),$e=Fr}catch{}}we.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=s0;we.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ml(t))throw Error(k(200));return n0(e,t,null,n)};we.createRoot=function(e,t){if(!ml(e))throw Error(k(299));var n=!1,r="",s=au;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(s=t.onRecoverableError)),t=hl(e,1,!1,null,null,n,!1,r,s),e[Ke]=t.current,tr(e.nodeType===8?e.parentNode:e),new xl(t)};we.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(k(188)):(e=Object.keys(e).join(","),Error(k(268,e)));return e=Rc(t),e=e===null?null:e.stateNode,e};we.flushSync=function(e){return Wt(e)};we.hydrate=function(e,t,n){if(!Wi(t))throw Error(k(200));return Oi(null,e,t,!0,n)};we.hydrateRoot=function(e,t,n){if(!ml(e))throw Error(k(405));var r=n!=null&&n.hydratedSources||null,s=!1,o="",l=au;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=lu(t,null,e,1,n??null,s,!1,o,l),e[Ke]=t.current,tr(e),r)for(e=0;e<r.length;e++)n=r[e],s=n._getVersion,s=s(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,s]:t.mutableSourceEagerHydrationData.push(n,s);return new Fi(t)};we.render=function(e,t,n){if(!Wi(t))throw Error(k(200));return Oi(null,e,t,!1,n)};we.unmountComponentAtNode=function(e){if(!Wi(e))throw Error(k(40));return e._reactRootContainer?(Wt(function(){Oi(null,null,e,!1,function(){e._reactRootContainer=null,e[Ke]=null})}),!0):!1};we.unstable_batchedUpdates=dl;we.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Wi(n))throw Error(k(200));if(e==null||e._reactInternals===void 0)throw Error(k(38));return Oi(e,t,n,!1,r)};we.version="18.3.1-next-f1338f8080-20240426";function cu(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(cu)}catch(e){console.error(e)}}cu(),cc.exports=we;var l0=cc.exports,Ba=l0;js.createRoot=Ba.createRoot,js.hydrateRoot=Ba.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function dr(){return dr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},dr.apply(this,arguments)}var at;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(at||(at={}));const Ma="popstate";function a0(e){e===void 0&&(e={});function t(r,s){let{pathname:o,search:l,hash:a}=r.location;return mo("",{pathname:o,search:l,hash:a},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(r,s){return typeof s=="string"?s:wi(s)}return d0(t,n,null,e)}function G(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function yl(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function c0(){return Math.random().toString(36).substr(2,8)}function Ta(e,t){return{usr:e.state,key:e.key,idx:t}}function mo(e,t,n,r){return n===void 0&&(n=null),dr({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?wn(t):t,{state:n,key:t&&t.key||r||c0()})}function wi(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function wn(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function d0(e,t,n,r){r===void 0&&(r={});let{window:s=document.defaultView,v5Compat:o=!1}=r,l=s.history,a=at.Pop,c=null,d=x();d==null&&(d=0,l.replaceState(dr({},l.state,{idx:d}),""));function x(){return(l.state||{idx:null}).idx}function h(){a=at.Pop;let j=x(),f=j==null?null:j-d;d=j,c&&c({action:a,location:w.location,delta:f})}function g(j,f){a=at.Push;let u=mo(w.location,j,f);d=x()+1;let p=Ta(u,d),y=w.createHref(u);try{l.pushState(p,"",y)}catch(S){if(S instanceof DOMException&&S.name==="DataCloneError")throw S;s.location.assign(y)}o&&c&&c({action:a,location:w.location,delta:1})}function m(j,f){a=at.Replace;let u=mo(w.location,j,f);d=x();let p=Ta(u,d),y=w.createHref(u);l.replaceState(p,"",y),o&&c&&c({action:a,location:w.location,delta:0})}function v(j){let f=s.location.origin!=="null"?s.location.origin:s.location.href,u=typeof j=="string"?j:wi(j);return u=u.replace(/ $/,"%20"),G(f,"No window.location.(origin|href) available to create URL for href: "+u),new URL(u,f)}let w={get action(){return a},get location(){return e(s,l)},listen(j){if(c)throw new Error("A history only accepts one active listener");return s.addEventListener(Ma,h),c=j,()=>{s.removeEventListener(Ma,h),c=null}},createHref(j){return t(s,j)},createURL:v,encodeLocation(j){let f=v(j);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:g,replace:m,go(j){return l.go(j)}};return w}var _a;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(_a||(_a={}));function u0(e,t,n){return n===void 0&&(n="/"),f0(e,t,n)}function f0(e,t,n,r){let s=typeof t=="string"?wn(t):t,o=vl(s.pathname||"/",n);if(o==null)return null;let l=du(e);p0(l);let a=null;for(let c=0;a==null&&c<l.length;++c){let d=C0(o);a=k0(l[c],d)}return a}function du(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let s=(o,l,a)=>{let c={relativePath:a===void 0?o.path||"":a,caseSensitive:o.caseSensitive===!0,childrenIndex:l,route:o};c.relativePath.startsWith("/")&&(G(c.relativePath.startsWith(r),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(r.length));let d=vt([r,c.relativePath]),x=n.concat(c);o.children&&o.children.length>0&&(G(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+d+'".')),du(o.children,t,x,d)),!(o.path==null&&!o.index)&&t.push({path:d,score:b0(d,o.index),routesMeta:x})};return e.forEach((o,l)=>{var a;if(o.path===""||!((a=o.path)!=null&&a.includes("?")))s(o,l);else for(let c of uu(o.path))s(o,l,c)}),t}function uu(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,s=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return s?[o,""]:[o];let l=uu(r.join("/")),a=[];return a.push(...l.map(c=>c===""?o:[o,c].join("/"))),s&&a.push(...l),a.map(c=>e.startsWith("/")&&c===""?"/":c)}function p0(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:w0(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const h0=/^:[\w-]+$/,g0=3,x0=2,m0=1,y0=10,v0=-2,Fa=e=>e==="*";function b0(e,t){let n=e.split("/"),r=n.length;return n.some(Fa)&&(r+=v0),t&&(r+=x0),n.filter(s=>!Fa(s)).reduce((s,o)=>s+(h0.test(o)?g0:o===""?m0:y0),r)}function w0(e,t){return e.length===t.length&&e.slice(0,-1).every((r,s)=>r===t[s])?e[e.length-1]-t[t.length-1]:0}function k0(e,t,n){let{routesMeta:r}=e,s={},o="/",l=[];for(let a=0;a<r.length;++a){let c=r[a],d=a===r.length-1,x=o==="/"?t:t.slice(o.length)||"/",h=j0({path:c.relativePath,caseSensitive:c.caseSensitive,end:d},x),g=c.route;if(!h)return null;Object.assign(s,h.params),l.push({params:s,pathname:vt([o,h.pathname]),pathnameBase:R0(vt([o,h.pathnameBase])),route:g}),h.pathnameBase!=="/"&&(o=vt([o,h.pathnameBase]))}return l}function j0(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=S0(e.path,e.caseSensitive,e.end),s=t.match(n);if(!s)return null;let o=s[0],l=o.replace(/(.)\/+$/,"$1"),a=s.slice(1);return{params:r.reduce((d,x,h)=>{let{paramName:g,isOptional:m}=x;if(g==="*"){let w=a[h]||"";l=o.slice(0,o.length-w.length).replace(/(.)\/+$/,"$1")}const v=a[h];return m&&!v?d[g]=void 0:d[g]=(v||"").replace(/%2F/g,"/"),d},{}),pathname:o,pathnameBase:l,pattern:e}}function S0(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),yl(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],s="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(l,a,c)=>(r.push({paramName:a,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),s+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?s+="\\/*$":e!==""&&e!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,t?void 0:"i"),r]}function C0(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return yl(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function vl(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const z0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,N0=e=>z0.test(e);function E0(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:s=""}=typeof e=="string"?wn(e):e,o;if(n)if(N0(n))o=n;else{if(n.includes("//")){let l=n;n=n.replace(/\/\/+/g,"/"),yl(!1,"Pathnames cannot have embedded double slashes - normalizing "+(l+" -> "+n))}n.startsWith("/")?o=Wa(n.substring(1),"/"):o=Wa(n,t)}else o=t;return{pathname:o,search:I0(r),hash:L0(s)}}function Wa(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(s=>{s===".."?n.length>1&&n.pop():s!=="."&&n.push(s)}),n.length>1?n.join("/"):"/"}function ys(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function P0(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function fu(e,t){let n=P0(e);return t?n.map((r,s)=>s===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function pu(e,t,n,r){r===void 0&&(r=!1);let s;typeof e=="string"?s=wn(e):(s=dr({},e),G(!s.pathname||!s.pathname.includes("?"),ys("?","pathname","search",s)),G(!s.pathname||!s.pathname.includes("#"),ys("#","pathname","hash",s)),G(!s.search||!s.search.includes("#"),ys("#","search","hash",s)));let o=e===""||s.pathname==="",l=o?"/":s.pathname,a;if(l==null)a=n;else{let h=t.length-1;if(!r&&l.startsWith("..")){let g=l.split("/");for(;g[0]==="..";)g.shift(),h-=1;s.pathname=g.join("/")}a=h>=0?t[h]:"/"}let c=E0(s,a),d=l&&l!=="/"&&l.endsWith("/"),x=(o||l===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(d||x)&&(c.pathname+="/"),c}const vt=e=>e.join("/").replace(/\/\/+/g,"/"),R0=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),I0=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,L0=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function B0(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const hu=["post","put","patch","delete"];new Set(hu);const M0=["get",...hu];new Set(M0);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ur(){return ur=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ur.apply(this,arguments)}const bl=b.createContext(null),T0=b.createContext(null),Ut=b.createContext(null),Ai=b.createContext(null),$t=b.createContext({outlet:null,matches:[],isDataRoute:!1}),gu=b.createContext(null);function _0(e,t){let{relative:n}=t===void 0?{}:t;yr()||G(!1);let{basename:r,navigator:s}=b.useContext(Ut),{hash:o,pathname:l,search:a}=mu(e,{relative:n}),c=l;return r!=="/"&&(c=l==="/"?r:vt([r,l])),s.createHref({pathname:c,search:a,hash:o})}function yr(){return b.useContext(Ai)!=null}function kn(){return yr()||G(!1),b.useContext(Ai).location}function xu(e){b.useContext(Ut).static||b.useLayoutEffect(e)}function F0(){let{isDataRoute:e}=b.useContext($t);return e?q0():W0()}function W0(){yr()||G(!1);let e=b.useContext(bl),{basename:t,future:n,navigator:r}=b.useContext(Ut),{matches:s}=b.useContext($t),{pathname:o}=kn(),l=JSON.stringify(fu(s,n.v7_relativeSplatPath)),a=b.useRef(!1);return xu(()=>{a.current=!0}),b.useCallback(function(d,x){if(x===void 0&&(x={}),!a.current)return;if(typeof d=="number"){r.go(d);return}let h=pu(d,JSON.parse(l),o,x.relative==="path");e==null&&t!=="/"&&(h.pathname=h.pathname==="/"?t:vt([t,h.pathname])),(x.replace?r.replace:r.push)(h,x.state,x)},[t,r,l,o,e])}function mu(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=b.useContext(Ut),{matches:s}=b.useContext($t),{pathname:o}=kn(),l=JSON.stringify(fu(s,r.v7_relativeSplatPath));return b.useMemo(()=>pu(e,JSON.parse(l),o,n==="path"),[e,l,o,n])}function O0(e,t){return A0(e,t)}function A0(e,t,n,r){yr()||G(!1);let{navigator:s}=b.useContext(Ut),{matches:o}=b.useContext($t),l=o[o.length-1],a=l?l.params:{};l&&l.pathname;let c=l?l.pathnameBase:"/";l&&l.route;let d=kn(),x;if(t){var h;let j=typeof t=="string"?wn(t):t;c==="/"||(h=j.pathname)!=null&&h.startsWith(c)||G(!1),x=j}else x=d;let g=x.pathname||"/",m=g;if(c!=="/"){let j=c.replace(/^\//,"").split("/");m="/"+g.replace(/^\//,"").split("/").slice(j.length).join("/")}let v=u0(e,{pathname:m}),w=V0(v&&v.map(j=>Object.assign({},j,{params:Object.assign({},a,j.params),pathname:vt([c,s.encodeLocation?s.encodeLocation(j.pathname).pathname:j.pathname]),pathnameBase:j.pathnameBase==="/"?c:vt([c,s.encodeLocation?s.encodeLocation(j.pathnameBase).pathname:j.pathnameBase])})),o,n,r);return t&&w?b.createElement(Ai.Provider,{value:{location:ur({pathname:"/",search:"",hash:"",state:null,key:"default"},x),navigationType:at.Pop}},w):w}function D0(){let e=G0(),t=B0(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,s={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return b.createElement(b.Fragment,null,b.createElement("h2",null,"Unexpected Application Error!"),b.createElement("h3",{style:{fontStyle:"italic"}},t),n?b.createElement("pre",{style:s},n):null,null)}const U0=b.createElement(D0,null);class $0 extends b.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?b.createElement($t.Provider,{value:this.props.routeContext},b.createElement(gu.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function H0(e){let{routeContext:t,match:n,children:r}=e,s=b.useContext(bl);return s&&s.static&&s.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=n.route.id),b.createElement($t.Provider,{value:t},r)}function V0(e,t,n,r){var s;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var o;if(!n)return null;if(n.errors)e=n.matches;else if((o=r)!=null&&o.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let l=e,a=(s=n)==null?void 0:s.errors;if(a!=null){let x=l.findIndex(h=>h.route.id&&(a==null?void 0:a[h.route.id])!==void 0);x>=0||G(!1),l=l.slice(0,Math.min(l.length,x+1))}let c=!1,d=-1;if(n&&r&&r.v7_partialHydration)for(let x=0;x<l.length;x++){let h=l[x];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(d=x),h.route.id){let{loaderData:g,errors:m}=n,v=h.route.loader&&g[h.route.id]===void 0&&(!m||m[h.route.id]===void 0);if(h.route.lazy||v){c=!0,d>=0?l=l.slice(0,d+1):l=[l[0]];break}}}return l.reduceRight((x,h,g)=>{let m,v=!1,w=null,j=null;n&&(m=a&&h.route.id?a[h.route.id]:void 0,w=h.route.errorElement||U0,c&&(d<0&&g===0?(K0("route-fallback"),v=!0,j=null):d===g&&(v=!0,j=h.route.hydrateFallbackElement||null)));let f=t.concat(l.slice(0,g+1)),u=()=>{let p;return m?p=w:v?p=j:h.route.Component?p=b.createElement(h.route.Component,null):h.route.element?p=h.route.element:p=x,b.createElement(H0,{match:h,routeContext:{outlet:x,matches:f,isDataRoute:n!=null},children:p})};return n&&(h.route.ErrorBoundary||h.route.errorElement||g===0)?b.createElement($0,{location:n.location,revalidation:n.revalidation,component:w,error:m,children:u(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):u()},null)}var yu=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(yu||{}),vu=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(vu||{});function Y0(e){let t=b.useContext(bl);return t||G(!1),t}function Q0(e){let t=b.useContext(T0);return t||G(!1),t}function X0(e){let t=b.useContext($t);return t||G(!1),t}function bu(e){let t=X0(),n=t.matches[t.matches.length-1];return n.route.id||G(!1),n.route.id}function G0(){var e;let t=b.useContext(gu),n=Q0(),r=bu();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function q0(){let{router:e}=Y0(yu.UseNavigateStable),t=bu(vu.UseNavigateStable),n=b.useRef(!1);return xu(()=>{n.current=!0}),b.useCallback(function(s,o){o===void 0&&(o={}),n.current&&(typeof s=="number"?e.navigate(s):e.navigate(s,ur({fromRouteId:t},o)))},[e,t])}const Oa={};function K0(e,t,n){Oa[e]||(Oa[e]=!0)}function Z0(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function Le(e){G(!1)}function J0(e){let{basename:t="/",children:n=null,location:r,navigationType:s=at.Pop,navigator:o,static:l=!1,future:a}=e;yr()&&G(!1);let c=t.replace(/^\/*/,"/"),d=b.useMemo(()=>({basename:c,navigator:o,static:l,future:ur({v7_relativeSplatPath:!1},a)}),[c,a,o,l]);typeof r=="string"&&(r=wn(r));let{pathname:x="/",search:h="",hash:g="",state:m=null,key:v="default"}=r,w=b.useMemo(()=>{let j=vl(x,c);return j==null?null:{location:{pathname:j,search:h,hash:g,state:m,key:v},navigationType:s}},[c,x,h,g,m,v,s]);return w==null?null:b.createElement(Ut.Provider,{value:d},b.createElement(Ai.Provider,{children:n,value:w}))}function e1(e){let{children:t,location:n}=e;return O0(yo(t),n)}new Promise(()=>{});function yo(e,t){t===void 0&&(t=[]);let n=[];return b.Children.forEach(e,(r,s)=>{if(!b.isValidElement(r))return;let o=[...t,s];if(r.type===b.Fragment){n.push.apply(n,yo(r.props.children,o));return}r.type!==Le&&G(!1),!r.props.index||!r.props.children||G(!1);let l={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(l.children=yo(r.props.children,o)),n.push(l)}),n}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function vo(){return vo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},vo.apply(this,arguments)}function t1(e,t){if(e==null)return{};var n={},r=Object.keys(e),s,o;for(o=0;o<r.length;o++)s=r[o],!(t.indexOf(s)>=0)&&(n[s]=e[s]);return n}function n1(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function r1(e,t){return e.button===0&&(!t||t==="_self")&&!n1(e)}const i1=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],s1="6";try{window.__reactRouterVersion=s1}catch{}const o1="startTransition",Aa=Gu[o1];function l1(e){let{basename:t,children:n,future:r,window:s}=e,o=b.useRef();o.current==null&&(o.current=a0({window:s,v5Compat:!0}));let l=o.current,[a,c]=b.useState({action:l.action,location:l.location}),{v7_startTransition:d}=r||{},x=b.useCallback(h=>{d&&Aa?Aa(()=>c(h)):c(h)},[c,d]);return b.useLayoutEffect(()=>l.listen(x),[l,x]),b.useEffect(()=>Z0(r),[r]),b.createElement(J0,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:l,future:r})}const a1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",c1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ue=b.forwardRef(function(t,n){let{onClick:r,relative:s,reloadDocument:o,replace:l,state:a,target:c,to:d,preventScrollReset:x,viewTransition:h}=t,g=t1(t,i1),{basename:m}=b.useContext(Ut),v,w=!1;if(typeof d=="string"&&c1.test(d)&&(v=d,a1))try{let p=new URL(window.location.href),y=d.startsWith("//")?new URL(p.protocol+d):new URL(d),S=vl(y.pathname,m);y.origin===p.origin&&S!=null?d=S+y.search+y.hash:w=!0}catch{}let j=_0(d,{relative:s}),f=d1(d,{replace:l,state:a,target:c,preventScrollReset:x,relative:s,viewTransition:h});function u(p){r&&r(p),p.defaultPrevented||f(p)}return b.createElement("a",vo({},g,{href:v||j,onClick:w||o?r:u,ref:n,target:c}))});var Da;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Da||(Da={}));var Ua;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Ua||(Ua={}));function d1(e,t){let{target:n,replace:r,state:s,preventScrollReset:o,relative:l,viewTransition:a}=t===void 0?{}:t,c=F0(),d=kn(),x=mu(e,{relative:l});return b.useCallback(h=>{if(r1(h,n)){h.preventDefault();let g=r!==void 0?r:wi(d)===wi(x);c(e,{replace:g,state:s,preventScrollReset:o,relative:l,viewTransition:a})}},[d,c,x,r,s,n,e,o,l,a])}function u1(){const[e,t]=b.useState(!1),[n,r]=b.useState(!1),[s,o]=b.useState(!1),l=kn();b.useEffect(()=>{const d=()=>t(window.scrollY>10);return window.addEventListener("scroll",d,{passive:!0}),d(),()=>window.removeEventListener("scroll",d)},[]);const a=[{label:"Home",to:"/"},{label:"Features",to:"/features"},{label:"Use Cases",to:"/use-cases"},{label:"How It Works",to:"/how-it-works"},{label:"Contact",to:"/contact"}],c=d=>d==="/"?l.pathname==="/":l.pathname.startsWith(d);return i.jsxs(i.Fragment,{children:[i.jsx("style",{children:`
        *{box-sizing:border-box;-webkit-tap-highlight-color:transparent;}

        .sfs-nav{position:fixed;top:0;left:0;right:0;z-index:9999;}

        .sfs-topbar{
          height:3px;
          background:linear-gradient(90deg,#0B2545,#2ebd3a,#4bd557,#e8f8eb,#4bd557,#2ebd3a,#0B2545);
          background-size:200% 100%;
          animation:topbar-slide 4s linear infinite;
        }
        @keyframes topbar-slide{0%{background-position:0% 0}100%{background-position:200% 0}}

        .sfs-bar{
          height:90px;
          display:flex;align-items:center;justify-content:space-between;
          padding:0 36px;
          background:rgba(255,255,255,0.98);
          backdrop-filter:blur(20px) saturate(180%);
          -webkit-backdrop-filter:blur(20px) saturate(180%);
          border-bottom:1px solid rgba(226,232,240,0.9);
          transition:all .4s cubic-bezier(.4,0,.2,1);
          box-shadow:0 2px 12px rgba(11, 37, 69,0.07);
        }
        .sfs-nav.scrolled .sfs-bar{
          height:72px;
          box-shadow:0 6px 28px rgba(11, 37, 69,0.10);
        }

        /* ══════════════════════════════
           LOGO — CREATIVE BADGE DESIGN
        ══════════════════════════════ */
        .sfs-logo{
          display:flex;align-items:center;gap:16px;
          text-decoration:none;flex-shrink:0;
        }

        /* Outer rotating dashed ring */
        .sfs-logo-badge{
          position:relative;
          width:76px;height:76px;
          flex-shrink:0;
          transition:all .4s cubic-bezier(.4,0,.2,1);
        }
        .sfs-nav.scrolled .sfs-logo-badge{width:62px;height:62px;}

        /* Animated spinning dashed border */
        .sfs-logo-badge::before{
          content:"";
          position:absolute;
          inset:-5px;
          border-radius:50%;
          border:2px dashed rgba(46, 189, 58,0.4);
          animation:badge-spin 10s linear infinite;
        }
        /* Solid inner glow ring */
        .sfs-logo-badge::after{
          content:"";
          position:absolute;
          inset:-2px;
          border-radius:50%;
          border:2px solid rgba(46, 189, 58,0.25);
          box-shadow:
            0 0 0 4px rgba(46, 189, 58,0.07),
            0 6px 24px rgba(46, 189, 58,0.22);
        }

        @keyframes badge-spin{
          0%{transform:rotate(0deg)}
          100%{transform:rotate(360deg)}
        }

        /* Circle image container */
        .sfs-logo-img-wrap{
          width:100%;height:100%;
          border-radius:50%;
          overflow:hidden;
          background:linear-gradient(135deg,#f8fafc,#e8f8eb);
          border:2.5px solid rgba(46, 189, 58,0.45);
          box-shadow:inset 0 2px 8px rgba(46, 189, 58,0.15);
          position:relative;
          z-index:1;
          transition:all .4s ease;
        }
        .sfs-logo:hover .sfs-logo-img-wrap{
          border-color:rgba(46, 189, 58,0.75);
          box-shadow:
            inset 0 2px 8px rgba(46, 189, 58,0.2),
            0 0 20px rgba(46, 189, 58,0.25);
        }
        .sfs-logo:hover .sfs-logo-badge::before{
          border-color:rgba(46, 189, 58,0.7);
          animation-duration:4s;
        }

        .sfs-logo-img{
          width:100%;height:100%;
          object-fit:cover;
          object-position:center;
          display:block;
          transition:transform .4s ease;
        }
        .sfs-logo:hover .sfs-logo-img{transform:scale(1.08);}

        /* ══ TEXT BLOCK ══ */
        .sfs-logo-text{display:flex;flex-direction:column;gap:3px;}

        .sfs-logo-name{
          font-size:1.15rem;font-weight:900;
          letter-spacing:-.025em;
          font-family:Inter,system-ui,sans-serif;
          white-space:nowrap;line-height:1.15;
        }
        .sfs-logo-name .brand{
          background:linear-gradient(135deg,#2ebd3a,#059669);
          -webkit-background-clip:text;-webkit-text-fill-color:transparent;
          background-clip:text;
        }
        .sfs-logo-name .company{color:#0B2545;}

        /* Tagline row */
        .sfs-logo-tag{
          display:flex;align-items:center;gap:8px;
        }
        .sfs-logo-tag-line{
          flex:1;height:1.5px;
          background:linear-gradient(90deg,#2ebd3a,#4bd557,transparent);
          border-radius:2px;
          max-width:28px;
        }
        .sfs-logo-tag-line.right{
          background:linear-gradient(270deg,#2ebd3a,#4bd557,transparent);
        }
        .sfs-logo-tagtext{
          font-size:9px;font-weight:900;
          letter-spacing:.28em;text-transform:uppercase;
          background:linear-gradient(90deg,#2ebd3a,#059669);
          -webkit-background-clip:text;-webkit-text-fill-color:transparent;
          background-clip:text;
          white-space:nowrap;
        }

        /* ══ NAV LINKS ══ */
        .sfs-links{
          display:flex;align-items:center;gap:2px;
          margin-left:auto;margin-right:16px;
        }
        .sfs-link{
          position:relative;padding:10px 15px;border-radius:12px;
          text-decoration:none;color:#334155;font-size:13.5px;font-weight:700;
          font-family:Inter,system-ui,sans-serif;
          transition:all .22s ease;
        }
        .sfs-link:hover{color:#2ebd3a;background:rgba(232, 248, 235,.75);}
        .sfs-link.active{
          color:#0B2545;
          background:linear-gradient(135deg,rgba(46, 189, 58,.13),rgba(232, 248, 235,.5));
          box-shadow:inset 0 0 0 1px rgba(46, 189, 58,.12);
        }
        .sfs-link.active::after{
          content:"";position:absolute;
          left:15px;right:15px;bottom:6px;
          height:2px;border-radius:999px;
          background:linear-gradient(90deg,#2ebd3a,#4bd557);
        }

        /* ══ ACTIONS ══ */
        .sfs-actions{display:flex;align-items:center;gap:10px;flex-shrink:0;}
        .sfs-login{
          height:42px;display:flex;align-items:center;justify-content:center;
          padding:0 22px;border-radius:12px;text-decoration:none;
          font-size:13.5px;font-weight:700;color:#0B2545;
          border:1.5px solid rgba(46, 189, 58,.25);background:rgba(255,255,255,.9);
          transition:all .22s ease;letter-spacing:-.01em;
        }
        .sfs-login:hover{
          background:#fff;transform:translateY(-1px);
          box-shadow:0 8px 20px rgba(46, 189, 58,.12);
          border-color:rgba(46, 189, 58,.45);
        }

        .sfs-prereg{
          height:46px;display:flex;align-items:center;justify-content:center;gap:8px;
          padding:0 24px;border-radius:999px;
          background:linear-gradient(135deg,#2ebd3a 0%,#0B2545 100%);
          color:#fff;border:none;cursor:pointer;
          font-size:13.5px;font-weight:800;
          font-family:Inter,system-ui,sans-serif;
          letter-spacing:-.01em;
          box-shadow:0 10px 28px rgba(46, 189, 58,.30),inset 0 1px 0 rgba(255,255,255,.15);
          transition:all .25s ease;white-space:nowrap;
        }
        .sfs-prereg:hover{
          transform:translateY(-2px);
          box-shadow:0 16px 36px rgba(46, 189, 58,.38),inset 0 1px 0 rgba(255,255,255,.15);
        }
        .prereg-dot{
          width:7px;height:7px;border-radius:50%;
          background:#4bd557;flex-shrink:0;
          animation:dot-pulse 1.5s ease-in-out infinite;
        }
        @keyframes dot-pulse{
          0%,100%{opacity:.5;transform:scale(.85)}
          50%{opacity:1;transform:scale(1.25)}
        }

        /* ══ MOBILE BTN ══ */
        .sfs-mobile-btn{
          display:none;width:42px;height:42px;border:none;
          border-radius:12px;
          background:rgba(240,253,244,.9);
          border:1px solid rgba(46, 189, 58,.15);
          cursor:pointer;font-size:20px;color:#0B2545;
        }

        /* ══ MOBILE MENU ══ */
        .sfs-mobile-overlay{
          position:fixed;inset:0;background:rgba(11, 37, 69,.5);
          backdrop-filter:blur(8px);opacity:0;pointer-events:none;
          transition:all .3s ease;z-index:9998;
        }
        .sfs-mobile-overlay.open{opacity:1;pointer-events:auto;}
        .sfs-mobile-drawer{
          position:absolute;top:0;right:0;
          width:min(88vw,320px);height:100%;
          background:rgba(255,255,255,.97);backdrop-filter:blur(30px);
          padding:90px 22px 30px;display:flex;flex-direction:column;gap:10px;
          transform:translateX(100%);transition:all .35s ease;
          box-shadow:-12px 0 48px rgba(11, 37, 69,.15);
        }
        .sfs-mobile-overlay.open .sfs-mobile-drawer{transform:translateX(0);}
        .sfs-mobile-link{
          padding:14px 16px;border-radius:14px;text-decoration:none;
          color:#334155;font-size:15px;font-weight:700;transition:all .18s ease;
        }
        .sfs-mobile-link:hover,.sfs-mobile-link.active{
          background:rgba(232, 248, 235,.8);color:#0B2545;
        }
        .sfs-mobile-actions{margin-top:18px;display:flex;flex-direction:column;gap:12px;}

        /* ══ PRE-REG MODAL ══ */
        .prereg-overlay{
          position:fixed;inset:0;
          background:rgba(11, 37, 69,.6);
          backdrop-filter:blur(12px);
          display:flex;align-items:center;justify-content:center;
          z-index:99999;padding:20px;
          opacity:0;pointer-events:none;
          transition:opacity .3s ease;
        }
        .prereg-overlay.open{opacity:1;pointer-events:auto;}
        .prereg-modal{
          background:#fff;border-radius:24px;
          width:100%;max-width:440px;
          padding:40px 36px 36px;
          box-shadow:0 40px 80px rgba(11, 37, 69,.25);
          transform:translateY(24px) scale(.96);
          transition:transform .35s ease;
          position:relative;
        }
        .prereg-overlay.open .prereg-modal{transform:translateY(0) scale(1);}
        .prereg-modal-close{
          position:absolute;top:16px;right:16px;
          width:34px;height:34px;border-radius:10px;
          border:1px solid #e2e8f0;background:#f8fafc;
          cursor:pointer;font-size:15px;color:#64748b;
          display:flex;align-items:center;justify-content:center;
          transition:all .18s ease;
        }
        .prereg-modal-close:hover{background:#fee2e2;border-color:#fca5a5;color:#dc2626;}

        @media(max-width:980px){
          .sfs-links,.sfs-actions{display:none;}
          .sfs-mobile-btn{display:flex;align-items:center;justify-content:center;}
          .sfs-bar{height:72px;padding:0 18px;}
          .sfs-logo-badge{width:56px;height:56px;}
          .sfs-logo-name{font-size:.95rem;}
        }
        @media(max-width:400px){
          .sfs-logo-name{font-size:.82rem;}
          .sfs-logo-tagtext{font-size:7.5px;}
        }
      `}),i.jsxs("header",{className:`sfs-nav ${e?"scrolled":""}`,children:[i.jsx("div",{className:"sfs-topbar"}),i.jsxs("div",{className:"sfs-bar",children:[i.jsxs(Ue,{to:"/",className:"sfs-logo",children:[i.jsx("div",{className:"sfs-logo-badge",children:i.jsx("div",{className:"sfs-logo-img-wrap",children:i.jsx("img",{src:"/logo.png",alt:"ScanForSafe",className:"sfs-logo-img"})})}),i.jsxs("div",{className:"sfs-logo-text",children:[i.jsxs("div",{className:"sfs-logo-name",children:[i.jsx("span",{className:"brand",children:"ScanForSafe"})," ",i.jsx("span",{className:"company",children:"Innovations Pvt Ltd"})]}),i.jsxs("div",{className:"sfs-logo-tag",children:[i.jsx("div",{className:"sfs-logo-tag-line"}),i.jsx("span",{className:"sfs-logo-tagtext",children:"Smart Shield"}),i.jsx("div",{className:"sfs-logo-tag-line right"})]})]})]}),i.jsx("nav",{className:"sfs-links",children:a.map(d=>i.jsx(Ue,{to:d.to,className:`sfs-link ${c(d.to)?"active":""}`,children:d.label},d.label))}),i.jsxs("div",{className:"sfs-actions",children:[i.jsx(Ue,{to:"/login",className:"sfs-login",children:"Login"}),i.jsxs("button",{className:"sfs-prereg",onClick:()=>o(!0),children:[i.jsx("span",{className:"prereg-dot"}),"Pre Registration"]})]}),i.jsx("button",{className:"sfs-mobile-btn",onClick:()=>r(!0),children:"☰"})]})]}),i.jsx("div",{className:`sfs-mobile-overlay ${n?"open":""}`,onClick:()=>r(!1),children:i.jsxs("div",{className:"sfs-mobile-drawer",onClick:d=>d.stopPropagation(),children:[i.jsx("button",{onClick:()=>r(!1),style:{position:"absolute",top:"18px",right:"18px",width:"38px",height:"38px",border:"none",borderRadius:"10px",background:"rgba(240,253,244,0.9)",cursor:"pointer",fontSize:"16px",color:"#0B2545"},children:"✕"}),a.map(d=>i.jsx(Ue,{to:d.to,className:`sfs-mobile-link ${c(d.to)?"active":""}`,onClick:()=>r(!1),children:d.label},d.label)),i.jsxs("div",{className:"sfs-mobile-actions",children:[i.jsx(Ue,{to:"/login",className:"sfs-login",onClick:()=>r(!1),children:"Login"}),i.jsxs("button",{className:"sfs-prereg",onClick:()=>{r(!1),o(!0)},children:[i.jsx("span",{className:"prereg-dot"})," Pre Registration"]})]})]})}),i.jsx("div",{className:`prereg-overlay ${s?"open":""}`,onClick:()=>o(!1),children:i.jsx("div",{className:"prereg-modal",onClick:d=>d.stopPropagation(),children:i.jsx("button",{className:"prereg-modal-close",onClick:()=>o(!1),children:"✕"})})})]})}/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f1=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),wu=(...e)=>e.filter((t,n,r)=>!!t&&r.indexOf(t)===n).join(" ");/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var p1={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h1=b.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:s="",children:o,iconNode:l,...a},c)=>b.createElement("svg",{ref:c,...p1,width:t,height:t,stroke:e,strokeWidth:r?Number(n)*24/Number(t):n,className:wu("lucide",s),...a},[...l.map(([d,x])=>b.createElement(d,x)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z=(e,t)=>{const n=b.forwardRef(({className:r,...s},o)=>b.createElement(h1,{ref:o,iconNode:t,className:wu(`lucide-${f1(e)}`,r),...s}));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g1=z("Activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ku=z("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x1=z("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m1=z("Award",[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wl=z("Baby",[["path",{d:"M9 12h.01",key:"157uk2"}],["path",{d:"M15 12h.01",key:"1k8ypt"}],["path",{d:"M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5",key:"1u7htd"}],["path",{d:"M19 6.3a9 9 0 0 1 1.8 3.9 2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1",key:"5yv0yz"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y1=z("BadgeCheck",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ct=z("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kl=z("Bike",[["circle",{cx:"18.5",cy:"17.5",r:"3.5",key:"15x4ox"}],["circle",{cx:"5.5",cy:"17.5",r:"3.5",key:"1noe27"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["path",{d:"M12 17.5V14l-3-3 4-3 2 3h2",key:"1npguv"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v1=z("Briefcase",[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ki=z("Car",[["path",{d:"M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2",key:"5owen"}],["circle",{cx:"7",cy:"17",r:"2",key:"u2ysq9"}],["path",{d:"M9 17h6",key:"r8uit2"}],["circle",{cx:"17",cy:"17",r:"2",key:"axvx0g"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b1=z("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bo=z("CircleCheckBig",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w1=z("Clock3",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16.5 12",key:"1aq6pp"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k1=z("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j1=z("CloudRain",[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"M16 14v6",key:"1j4efv"}],["path",{d:"M8 14v6",key:"17c4r9"}],["path",{d:"M12 16v6",key:"c8a4gj"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S1=z("Cloud",[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",key:"p7xjir"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C1=z("Droplets",[["path",{d:"M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z",key:"1ptgy4"}],["path",{d:"M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97",key:"1sl1rz"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z1=z("EyeOff",[["path",{d:"M9.88 9.88a3 3 0 1 0 4.24 4.24",key:"1jxqfv"}],["path",{d:"M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",key:"9wicm4"}],["path",{d:"M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61",key:"1jreej"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N1=z("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E1=z("Facebook",[["path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",key:"1jg4f8"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P1=z("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R1=z("Headphones",[["path",{d:"M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3",key:"1xhozi"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qr=z("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I1=z("Home",[["path",{d:"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"y5dka4"}],["polyline",{points:"9 22 9 12 15 12 15 22",key:"e2us08"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L1=z("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B1=z("Instagram",[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ju=z("Laptop",[["path",{d:"M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16",key:"tarvll"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M1=z("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T1=z("Leaf",[["path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",key:"nnexq3"}],["path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12",key:"mt58a7"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _1=z("Link2",[["path",{d:"M9 17H7A5 5 0 0 1 7 7h2",key:"8i5ue5"}],["path",{d:"M15 7h2a5 5 0 1 1 0 10h-2",key:"1b9ql8"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F1=z("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W1=z("LockKeyhole",[["circle",{cx:"12",cy:"16",r:"1",key:"1au0dj"}],["rect",{x:"3",y:"10",width:"18",height:"12",rx:"2",key:"6s8ecr"}],["path",{d:"M7 10V7a5 5 0 0 1 10 0v3",key:"1pqi11"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ji=z("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Su=z("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ot=z("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Di=z("MessageCircle",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O1=z("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A1=z("Navigation",[["polygon",{points:"3 11 22 2 13 21 11 13 3 11",key:"1ltx0t"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cu=z("Package",[["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zu=z("PawPrint",[["circle",{cx:"11",cy:"4",r:"2",key:"vol9p0"}],["circle",{cx:"18",cy:"8",r:"2",key:"17gozi"}],["circle",{cx:"20",cy:"16",r:"2",key:"1v9bxh"}],["path",{d:"M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z",key:"1ydw1z"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D1=z("PhoneCall",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}],["path",{d:"M14.05 2a9 9 0 0 1 8 7.94",key:"vmijpz"}],["path",{d:"M14.05 6A5 5 0 0 1 18 10",key:"13nbpp"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dn=z("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U1=z("Plane",[["path",{d:"M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z",key:"1v9wt8"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $1=z("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ui=z("QrCode",[["rect",{width:"5",height:"5",x:"3",y:"3",rx:"1",key:"1tu5fj"}],["rect",{width:"5",height:"5",x:"16",y:"3",rx:"1",key:"1v8r4q"}],["rect",{width:"5",height:"5",x:"3",y:"16",rx:"1",key:"1x03jg"}],["path",{d:"M21 16h-3a2 2 0 0 0-2 2v3",key:"177gqh"}],["path",{d:"M21 21v.01",key:"ents32"}],["path",{d:"M12 7v3a2 2 0 0 1-2 2H7",key:"8crl2c"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M12 3h.01",key:"n36tog"}],["path",{d:"M12 16v.01",key:"133mhm"}],["path",{d:"M16 12h1",key:"1slzba"}],["path",{d:"M21 12v.01",key:"1lwtk9"}],["path",{d:"M12 21v-1",key:"1880an"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H1=z("Quote",[["path",{d:"M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z",key:"4rm80e"}],["path",{d:"M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z",key:"10za9r"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V1=z("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wo=z("ScanLine",[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}],["path",{d:"M7 12h10",key:"b7w52i"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nu=z("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pe=z("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dt=z("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y1=z("ShoppingBag",[["path",{d:"M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z",key:"hou9p0"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q1=z("ShoppingCart",[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $a=z("Smartphone",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eu=z("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jl=z("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ha=z("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ko=z("Truck",[["path",{d:"M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2",key:"wrbu53"}],["path",{d:"M15 18H9",key:"1lyqi6"}],["path",{d:"M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14",key:"lysw3i"}],["circle",{cx:"17",cy:"18",r:"2",key:"332jqn"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X1=z("Twitter",[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G1=z("UserCheck",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["polyline",{points:"16 11 18 13 22 9",key:"1pwet4"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q1=z("UserRound",[["circle",{cx:"12",cy:"8",r:"5",key:"1hypcn"}],["path",{d:"M20 21a8 8 0 0 0-16 0",key:"rfgkzh"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jo=z("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pu=z("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yn=z("Wifi",[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M2 8.82a15 15 0 0 1 20 0",key:"dnpr2z"}],["path",{d:"M5 12.859a10 10 0 0 1 14 0",key:"1x1e6c"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fr=z("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]),K1="/logo.png";function Z1(){const[e,t]=b.useState(""),[n,r]=b.useState(!1),s=a=>{a.preventDefault(),e.trim()&&(r(!0),setTimeout(()=>{r(!1),t("")},3e3))},o=[{label:"Home",to:"/"},{label:"Features",to:"/features"},{label:"Use Cases",to:"/use-cases"},{label:"How It Works",to:"/how-it-works"},{label:"Contact",to:"/contact"}],l=[{Icon:E1,href:"https://facebook.com",label:"Facebook"},{Icon:B1,href:"https://instagram.com",label:"Instagram"},{Icon:X1,href:"https://twitter.com",label:"Twitter"},{Icon:F1,href:"https://linkedin.com",label:"LinkedIn"},{Icon:Nu,href:"https://telegram.org",label:"Telegram"}];return i.jsxs(i.Fragment,{children:[i.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700&display=swap');

        .sfs-footer {
          position: relative;
          background-image: url('/footer_bg.png');
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
          background-repeat: no-repeat;
          border-top: 3px solid #2ebd3a;
          color: #f1f5f9;
          font-family: 'Inter', sans-serif;
          width: 100%;
          overflow: hidden;
        }

        /* Parallax support for Safari/mobile where fixed attachment breaks */
        @media (hover: none) {
          .sfs-footer {
            background-attachment: scroll;
          }
        }

        .sfs-footer-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(11, 37, 69, 0.95) 0%, rgba(5, 18, 36, 0.96) 100%);
          z-index: 1;
        }

        .sfs-footer-container {
          position: relative;
          max-width: 1300px;
          margin: 0 auto;
          padding: 80px clamp(20px, 5vw, 60px) 30px;
          z-index: 2;
        }

        /* ══ GRID LAYOUT ══ */
        .sfs-footer-main {
          display: grid;
          grid-template-columns: 2fr 1fr 1.5fr;
          gap: clamp(30px, 5vw, 80px);
          margin-bottom: 60px;
        }

        /* ══ COLUMN 1: BRAND ══ */
        .sfs-footer-brand {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .sfs-footer-logo-wrap {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .sfs-footer-logo-box {
          position: relative;
          width: 60px;
          height: 60px;
          border-radius: 16px;
          overflow: hidden;
          background: rgba(255, 255, 255, 0.9);
          border: 2px solid #2ebd3a;
          box-shadow: 0 0 20px rgba(46, 189, 58, 0.3);
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .sfs-footer-logo-img {
          width: 82%;
          height: auto;
          object-fit: contain;
        }

        .sfs-footer-title {
          font-family: 'Poppins', sans-serif;
          font-size: 22px;
          font-weight: 800;
          margin: 0;
          color: #ffffff;
          line-height: 1.2;
          letter-spacing: -0.02em;
        }

        .sfs-footer-title span {
          color: #2ebd3a;
          text-shadow: 0 0 10px rgba(46, 189, 58, 0.2);
        }

        .sfs-footer-tagline {
          font-size: 10px;
          font-weight: 700;
          color: #2ebd3a;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          margin-top: 4px;
        }

        .sfs-footer-desc {
          font-size: 14px;
          line-height: 1.7;
          color: #cbd5e1;
          margin: 0;
          max-width: 440px;
        }

        /* Social Icons */
        .sfs-footer-socials {
          display: flex;
          gap: 10px;
          margin-top: 10px;
        }

        .sfs-social-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.05);
          border: 1.5px solid rgba(255, 255, 255, 0.1);
          color: #cbd5e1;
          cursor: pointer;
          transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
          text-decoration: none;
        }

        .sfs-social-icon:hover {
          background: #2ebd3a;
          color: #ffffff;
          border-color: #2ebd3a;
          transform: translateY(-4px);
          box-shadow: 0 8px 24px rgba(46, 189, 58, 0.4);
        }

        /* ══ COLUMN 2: NAVIGATION ══ */
        .sfs-footer-section-title {
          font-family: 'Poppins', sans-serif;
          font-size: 16px;
          font-weight: 700;
          color: #2ebd3a;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin: 0 0 24px 0;
          position: relative;
          display: inline-block;
        }

        .sfs-footer-section-title::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -6px;
          width: 32px;
          height: 2px;
          background: #2ebd3a;
          border-radius: 2px;
        }

        .sfs-footer-links {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .sfs-footer-link {
          color: #cbd5e1;
          text-decoration: none;
          font-size: 14px;
          font-weight: 500;
          display: flex;
          align-items: center;
          gap: 8px;
          transition: all 0.2s ease;
        }

        .sfs-footer-link:hover {
          color: #ffffff;
          transform: translateX(5px);
        }

        .sfs-footer-link-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #2ebd3a;
          opacity: 0.6;
          transition: all 0.2s ease;
        }

        .sfs-footer-link:hover .sfs-footer-link-dot {
          opacity: 1;
          transform: scale(1.3);
          box-shadow: 0 0 8px #2ebd3a;
        }

        /* ══ COLUMN 3: CONTACT ══ */
        .sfs-footer-contact-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .sfs-footer-contact-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          font-size: 14px;
          color: #cbd5e1;
          line-height: 1.6;
        }

        .sfs-footer-contact-icon {
          color: #2ebd3a;
          font-size: 16px;
          flex-shrink: 0;
          margin-top: 3px;
        }

        .sfs-footer-contact-text strong {
          color: #ffffff;
          display: block;
          margin-bottom: 2px;
        }

        /* ══ NEWSLETTER ROW ══ */
        .sfs-footer-newsletter-wrap {
          border-top: 1.5px dashed rgba(255, 255, 255, 0.1);
          border-bottom: 1.5px dashed rgba(255, 255, 255, 0.1);
          padding: 30px 0;
          margin-bottom: 40px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          flex-wrap: wrap;
        }

        .sfs-newsletter-info h3 {
          font-family: 'Poppins', sans-serif;
          font-size: 18px;
          font-weight: 700;
          color: #ffffff;
          margin: 0 0 4px 0;
        }

        .sfs-newsletter-info p {
          font-size: 13.5px;
          color: #cbd5e1;
          margin: 0;
        }

        .sfs-newsletter-form {
          display: flex;
          width: 100%;
          max-width: 440px;
          background: rgba(255, 255, 255, 0.04);
          border: 1.5px solid rgba(255, 255, 255, 0.1);
          border-radius: 14px;
          padding: 4px;
          transition: all 0.25s ease;
        }

        .sfs-newsletter-form:focus-within {
          border-color: #2ebd3a;
          box-shadow: 0 0 16px rgba(46, 189, 58, 0.2);
          background: rgba(255, 255, 255, 0.08);
        }

        .sfs-newsletter-input {
          flex: 1;
          background: transparent;
          border: none;
          outline: none;
          color: #ffffff;
          padding: 10px 14px;
          font-size: 13.5px;
          width: 100%;
        }

        .sfs-newsletter-input::placeholder {
          color: #94a3b8;
        }

        .sfs-newsletter-btn {
          background: #2ebd3a;
          color: #ffffff;
          border: none;
          outline: none;
          border-radius: 10px;
          padding: 0 20px;
          font-size: 13.5px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.2s ease;
          white-space: nowrap;
        }

        .sfs-newsletter-btn:hover {
          background: #239c2d;
          box-shadow: 0 4px 12px rgba(46, 189, 58, 0.3);
        }

        /* ══ FOOTER BOTTOM ══ */
        .sfs-footer-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          padding-top: 30px;
          border-top: 1.5px solid rgba(255, 255, 255, 0.08);
          flex-wrap: wrap;
        }

        .sfs-footer-copy {
          font-size: 13px;
          color: #94a3b8;
          margin: 0;
        }

        .sfs-footer-copy strong {
          color: #cbd5e1;
        }

        .sfs-footer-badges {
          display: flex;
          align-items: center;
          gap: 24px;
          flex-wrap: wrap;
        }

        .sfs-footer-badge {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 12px;
          color: #94a3b8;
          font-weight: 500;
        }

        .sfs-footer-badge-icon {
          color: #2ebd3a;
        }

        /* ══ RESPONSIVE BREAKPOINTS ══ */
        @media (max-width: 992px) {
          .sfs-footer-main {
            grid-template-columns: 1.2fr 1fr;
          }
          .sfs-footer-brand {
            grid-column: span 2;
          }
        }

        @media (max-width: 600px) {
          .sfs-footer-main {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .sfs-footer-brand {
            grid-column: span 1;
          }
          .sfs-footer-container {
            padding-top: 60px;
          }
          .sfs-footer-newsletter-wrap {
            flex-direction: column;
            align-items: flex-start;
          }
          .sfs-newsletter-form {
            max-width: 100%;
          }
          .sfs-footer-bottom {
            flex-direction: column;
            align-items: center;
            text-align: center;
          }
          .sfs-footer-badges {
            justify-content: center;
          }
        }
      `}),i.jsxs("footer",{className:"sfs-footer",children:[i.jsx("div",{className:"sfs-footer-overlay"}),i.jsxs("div",{className:"sfs-footer-container",children:[i.jsxs("div",{className:"sfs-footer-newsletter-wrap",children:[i.jsxs("div",{className:"sfs-newsletter-info",children:[i.jsx("h3",{children:"Get Safety Alerts & Updates"}),i.jsx("p",{children:"Subscribe to our corporate newsletter for modern verification insights."})]}),i.jsxs("form",{onSubmit:s,className:"sfs-newsletter-form",children:[i.jsx("input",{className:"sfs-newsletter-input",type:"email",required:!0,placeholder:n?"Thanks for subscribing!":"Enter your corporate email",value:e,onChange:a=>t(a.target.value),disabled:n}),i.jsx("button",{type:"submit",className:"sfs-newsletter-btn",disabled:n,children:n?"Subscribed!":"Subscribe"})]})]}),i.jsxs("div",{className:"sfs-footer-main",children:[i.jsxs("div",{className:"sfs-footer-brand",children:[i.jsxs(Ue,{to:"/",className:"sfs-footer-logo-wrap",style:{textDecoration:"none"},children:[i.jsx("div",{className:"sfs-footer-logo-box",children:i.jsx("img",{src:K1,alt:"ScanForSafe Logo",className:"sfs-footer-logo-img"})}),i.jsxs("div",{children:[i.jsxs("h2",{className:"sfs-footer-title",children:["Scan",i.jsx("span",{children:"ForSafe"})]}),i.jsx("div",{className:"sfs-footer-tagline",children:"Smart Shield"})]})]}),i.jsx("p",{className:"sfs-footer-desc",children:"Pioneering secure QR code solutions, visual verification systems, and smart tracking technologies. Empowering a safer and more authentic world through trusted hardware and visual tags."}),i.jsx("div",{className:"sfs-footer-socials",children:l.map(({Icon:a,href:c,label:d},x)=>i.jsx("a",{href:c,target:"_blank",rel:"noopener noreferrer",className:"sfs-social-icon",title:d,children:i.jsx(a,{size:18})},x))})]}),i.jsxs("div",{children:[i.jsx("h4",{className:"sfs-footer-section-title",children:"Navigation"}),i.jsx("div",{className:"sfs-footer-links",children:o.map((a,c)=>i.jsxs(Ue,{to:a.to,className:"sfs-footer-link",onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),children:[i.jsx("span",{className:"sfs-footer-link-dot"}),a.label]},c))})]}),i.jsxs("div",{children:[i.jsx("h4",{className:"sfs-footer-section-title",children:"Contact Us"}),i.jsxs("div",{className:"sfs-footer-contact-list",children:[i.jsxs("div",{className:"sfs-footer-contact-item",children:[i.jsx(dn,{className:"sfs-footer-contact-icon",size:17}),i.jsxs("div",{className:"sfs-footer-contact-text",children:[i.jsx("strong",{children:"Phone"}),"+91 98765 43210"]})]}),i.jsxs("div",{className:"sfs-footer-contact-item",children:[i.jsx(Su,{className:"sfs-footer-contact-icon",size:17}),i.jsxs("div",{className:"sfs-footer-contact-text",children:[i.jsx("strong",{children:"Email"}),"info@scanforsafe.com"]})]}),i.jsxs("div",{className:"sfs-footer-contact-item",children:[i.jsx(Ot,{className:"sfs-footer-contact-icon",size:17}),i.jsxs("div",{className:"sfs-footer-contact-text",children:[i.jsx("strong",{children:"Corporate Office"}),"SFSI Innovations Tower, Phase-2, Cyber Heights, Hyderabad, India"]})]})]})]})]}),i.jsxs("div",{className:"sfs-footer-bottom",children:[i.jsxs("p",{className:"sfs-footer-copy",children:["© ",new Date().getFullYear()," ",i.jsx("strong",{children:"ScanForSafe Innovations Pvt Ltd"}),". All rights reserved."]}),i.jsxs("div",{className:"sfs-footer-badges",children:[i.jsxs("span",{className:"sfs-footer-badge",children:[i.jsx(ji,{size:14,className:"sfs-footer-badge-icon"}),"SSL Secured"]}),i.jsxs("span",{className:"sfs-footer-badge",children:[i.jsx(Pe,{size:14,className:"sfs-footer-badge-icon"}),"ISO 27001 Certified"]}),i.jsxs("span",{className:"sfs-footer-badge",children:[i.jsx(T1,{size:14,className:"sfs-footer-badge-icon"}),"Eco Friendly tags"]})]})]})]})]})]})}const J1="/assets/car-BSIz0SDG.png",eh="/assets/bike-CEMC_UmP.png",th="/assets/luggage-g7ehyfUE.png",vs="/assets/qr-B8XSq41G.png",Va=["🛡️  10,000+ Assets Protected","📡  Live QR & NFC Scanning","🚨  Instant Owner Alerts","🔐  End-to-End Encrypted","⚡  Scan in Under 2 Seconds","🌍  Available in 50+ Countries","✅  4.9 / 5 User Rating","📲  15,000+ Scans Today","🏆  #1 Asset Protection Platform","🔔  8,000+ Alerts Sent Today"],Ya=[{label:"Vehicle Verified",owner:"Rahul Verma",avatar:vs,phone:"+91 98765 43210",email:"rahul.verma@mail.com",address:"23, Green Park, New Delhi",asset:"SFS-CAR-4587",emergency:"+91 99887 77665",registered:"12 May 2024, 09:15 AM",img:J1,color:"#2ebd3a"},{label:"Bike Verified",owner:"Aarav Sharma",avatar:vs,phone:"+91 98345 22119",email:"aarav.sharma@mail.com",address:"Plot 7, Andheri West, Mumbai",asset:"SFS-BIKE-7712",emergency:"+91 88774 66332",registered:"15 May 2024, 10:30 AM",img:eh,color:"#4bd557"},{label:"Luggage Verified",owner:"Priya Kapoor",avatar:vs,phone:"+91 93456 77889",email:"priya.kapoor@mail.com",address:"12, Koramangala, Bangalore",asset:"SFS-LUG-1123",emergency:"+91 90909 88776",registered:"28 Mar 2024, 02:45 PM",img:th,color:"#7ded88"}],nh=`
@import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;600;700;800;900&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&display=swap');

*, *::before, *::after { margin:0; padding:0; box-sizing:border-box; }
html { scroll-behavior:smooth; }

:root {
  --g1: #2ebd3a;
  --g2: #2ebd3a;
  --g3: #4bd557;
  --g4: #e8f8eb;
  --bg: #f8fafc;
  --dark: #0B2545;
  --mid: #4b6357;
  --phone-bg: #081c35;
}

/* ══ ROOT HERO ══ */
.sfs-hero {
  font-family: 'DM Sans', sans-serif;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  background: var(--bg);
  color: var(--dark);
  border: 2px solid rgba(46, 189, 58,.28);
  border-radius: 28px;
  box-shadow:
    0 0 0 1px rgba(46, 189, 58,.10),
    0 4px 32px rgba(46, 189, 58,.10),
    inset 0 1px 0 rgba(255,255,255,.85);
}

/* ══ BACKGROUND ══ */
.sfs-bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  overflow: hidden;
  border-radius: 26px;
}
.sfs-bg::before {
  content: "";
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse 1000px 700px at 115% 10%, rgba(46, 189, 58,.13) 0%, transparent 60%),
    radial-gradient(ellipse 700px 600px at -15% 100%, rgba(46, 189, 58,.09) 0%, transparent 58%),
    radial-gradient(ellipse 400px 300px at 60% 50%, rgba(125, 237, 136,.05) 0%, transparent 70%),
    linear-gradient(165deg, #f8fafc 0%, #f8fafc 45%, #f7fef9 100%);
}

.sfs-particle {
  position: absolute;
  border-radius: 50%;
  background: rgba(46, 189, 58,.35);
  pointer-events: none;
}

.sfs-waves {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

.sfs-mesh {
  position: absolute;
  top: -80px; right: -80px;
  width: 600px; height: 600px;
  opacity: .45;
  animation: meshRotate 40s linear infinite;
}
@keyframes meshRotate {
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
}

.sfs-globe-wrap {
  position: absolute;
  bottom: -90px; left: -80px;
  width: 340px; height: 340px;
  animation: globePulse 7s ease-in-out infinite;
  z-index: 1;
}
@keyframes globePulse {
  0%,100% { transform: scale(1) rotate(-5deg); opacity:.50; }
  50%      { transform: scale(1.05) rotate(-2deg); opacity:.68; }
}

/* ══ LAYOUT ══ */
.sfs-grid {
  flex: 1;
  max-width: 1440px; width: 100%; margin: 0 auto;
  display: grid; grid-template-columns: 46% 54%;
  align-items: center;
  padding:96px;
  position: relative; z-index: 2;
}

/* ══ LEFT ══ */
.sfs-left { padding-right: 32px; }

.sfs-badge {
  display: inline-flex; align-items: center; gap: 8px;
  background: rgba(255,255,255,.92);
  backdrop-filter: blur(12px);
  border: 1.5px solid rgba(46, 189, 58,.32);
  border-radius: 999px;
  padding: 7px 18px 7px 12px;
  margin-bottom: 24px;
  font-size: 10px; font-weight: 800;
  letter-spacing: .10em; color: #0B2545;
  text-transform: uppercase;
  box-shadow: 0 2px 20px rgba(46, 189, 58,.14), 0 0 0 5px rgba(46, 189, 58,.06);
  animation: slideInLeft .7s cubic-bezier(.22,1,.36,1) both;
}
.sfs-badge-dot {
  width: 7px; height: 7px; border-radius: 50%;
  background: var(--g1);
  animation: livePulse 2s ease-out infinite;
}
@keyframes livePulse {
  0%   { box-shadow: 0 0 0 0 rgba(46, 189, 58,.7); }
  70%  { box-shadow: 0 0 0 9px rgba(46, 189, 58,0); }
  100% { box-shadow: 0 0 0 0 rgba(46, 189, 58,0); }
}

.sfs-h1 {
  font-family: 'Sora', sans-serif;
  font-size: 76px; line-height: .90;
  letter-spacing: -4.5px; font-weight: 900;
  color: var(--dark); margin-bottom: 20px;
  animation: slideInLeft .85s .08s cubic-bezier(.22,1,.36,1) both;
}
.sfs-h1 .green {
  background: linear-gradient(125deg, #0B2545 0%, #2ebd3a 55%, #4bd557 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;
  display: inline-block;
}
.sfs-h1 .outline {
  color: transparent;
  -webkit-text-stroke: 2.5px rgba(46, 189, 58,.28);
  animation: outlinePulse 4s ease-in-out infinite 0.5s;
}
@keyframes outlinePulse {
  0%,100% { -webkit-text-stroke-color: rgba(46, 189, 58,.28); }
  50%      { -webkit-text-stroke-color: rgba(46, 189, 58,.50); }
}

.sfs-sub {
  font-size: 15.5px; line-height: 1.88; color: var(--mid);
  max-width: 510px; margin-bottom: 32px;
  font-weight: 400;
  animation: slideInLeft .9s .16s cubic-bezier(.22,1,.36,1) both;
}

/* Feature cards */
.sfs-feats { display: flex; gap: 12px; margin-bottom: 32px; }
.sfs-feat {
  flex: 1;
  background: rgba(255,255,255,.85);
  backdrop-filter: blur(14px);
  border: 1.5px solid rgba(46, 189, 58,.16);
  border-radius: 22px; padding: 22px 16px 20px;
  box-shadow: 0 2px 20px rgba(0,0,0,.04), 0 0 0 1px rgba(255,255,255,.6);
  position: relative; overflow: hidden;
  transition: .35s cubic-bezier(.34,1.46,.64,1);
  cursor: default;
}
.sfs-feat::before {
  content: "";
  position: absolute; top: 0; left: 0; right: 0;
  height: 2px;
  background: linear-gradient(90deg, transparent, rgba(46, 189, 58,.5), transparent);
  transform: scaleX(0); transform-origin: center;
  transition: .35s ease;
}
.sfs-feat::after {
  content: "";
  position: absolute; inset-inline: 0; bottom: 0;
  height: 3px;
  background: linear-gradient(90deg, #2ebd3a, #2ebd3a);
  transform: scaleX(0); transform-origin: left;
  transition: .35s ease;
  border-radius: 0 0 22px 22px;
}
.sfs-feat:hover { transform: translateY(-8px) scale(1.02); box-shadow: 0 22px 48px rgba(46, 189, 58,.15), 0 0 0 1.5px rgba(46, 189, 58,.22); border-color: rgba(46, 189, 58,.30); }
.sfs-feat:hover::before, .sfs-feat:hover::after { transform: scaleX(1); }
.sfs-feat-ico {
  width: 46px; height: 46px; border-radius: 14px;
  background: linear-gradient(135deg, #e8f8eb, #e8f8eb);
  display: flex; align-items: center; justify-content: center;
  font-size: 21px; margin-bottom: 13px;
  transition: .35s cubic-bezier(.34,1.46,.64,1);
  box-shadow: 0 4px 12px rgba(46, 189, 58,.18);
  border: 1px solid rgba(46, 189, 58,.18);
}
.sfs-feat:hover .sfs-feat-ico { transform: scale(1.12) rotate(-6deg); box-shadow: 0 8px 20px rgba(46, 189, 58,.25); }
.sfs-feat h4 { font-size: 13.5px; font-weight: 700; color: var(--dark); margin-bottom: 6px; }
.sfs-feat p  { font-size: 11px; line-height: 1.65; color: #688070; }
.sfs-feat:nth-child(1) { animation: fadeUp .6s .28s both; }
.sfs-feat:nth-child(2) { animation: fadeUp .6s .40s both; }
.sfs-feat:nth-child(3) { animation: fadeUp .6s .52s both; }

/* Buttons */
.sfs-actions {
  display: flex; align-items: center; gap: 14px;
  margin-bottom: 28px;
  animation: fadeUp .6s .62s both;
}
.sfs-btn-main {
  border: none;
  background: linear-gradient(135deg, #2ebd3a 0%, #2ebd3a 60%, #0B2545 100%);
  color: white; padding: 17px 34px; border-radius: 16px;
  font-size: 15px; font-weight: 700; font-family: 'DM Sans', sans-serif;
  cursor: pointer; display: flex; align-items: center; gap: 9px;
  box-shadow: 0 12px 32px rgba(46, 189, 58,.35), 0 2px 8px rgba(46, 189, 58,.20);
  transition: .35s cubic-bezier(.34,1.46,.64,1);
  position: relative; overflow: hidden;
  letter-spacing: -.01em;
  outline: 2px solid transparent;
}
.sfs-btn-main::before {
  content: "";
  position: absolute; inset: 0;
  background: linear-gradient(135deg, rgba(255,255,255,.18) 0%, transparent 60%);
  pointer-events: none;
}
.sfs-btn-main:hover { transform: translateY(-4px) scale(1.03); box-shadow: 0 20px 48px rgba(46, 189, 58,.42); outline-color: rgba(46, 189, 58,.30); }
.sfs-btn-main:active { transform: translateY(-1px) scale(.99); }
.sfs-btn-sec {
  border: 1.5px solid rgba(46, 189, 58,.30);
  background: rgba(255,255,255,.80);
  backdrop-filter: blur(12px);
  padding: 16px 28px; border-radius: 16px;
  font-size: 14.5px; font-weight: 700; font-family: 'DM Sans', sans-serif;
  display: flex; align-items: center; gap: 10px;
  cursor: pointer; color: var(--dark); transition: .28s ease;
}
.sfs-btn-sec:hover { transform: translateY(-4px); border-color: rgba(46, 189, 58,.55); box-shadow: 0 12px 28px rgba(46, 189, 58,.10); }
.sfs-play-ring {
  width: 30px; height: 30px; border-radius: 50%;
  background: linear-gradient(135deg, #2ebd3a, #2ebd3a);
  display: flex; align-items: center; justify-content: center;
  font-size: 10px; color: white;
  box-shadow: 0 4px 12px rgba(46, 189, 58,.30);
  transition: .28s;
  border: 1.5px solid rgba(255,255,255,.30);
}
.sfs-btn-sec:hover .sfs-play-ring { transform: scale(1.12) rotate(8deg); }

/* Stats row */
.sfs-stats {
  display: flex; gap: 24px; align-items: center;
  margin-bottom: 22px;
  animation: fadeUp .6s .72s both;
}
.sfs-stat { display: flex; flex-direction: column; }
.sfs-stat-num {
  font-family: 'Sora', sans-serif;
  font-size: 22px; font-weight: 800;
  background: linear-gradient(125deg, #0B2545, #2ebd3a);
  -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
  line-height: 1;
}
.sfs-stat-lbl { font-size: 10.5px; color: var(--mid); margin-top: 3px; font-weight: 500; }
.sfs-stat-div { width: 1px; height: 36px; background: rgba(46, 189, 58,.22); }

/* Scroll indicator */
.sfs-scroll {
  display: flex; align-items: center; gap: 10px;
  animation: fadeUp .6s .82s both; opacity: .55;
}
.sfs-scroll-mouse {
  width: 22px; height: 34px;
  border: 2px solid rgba(46, 189, 58,.40);
  border-radius: 11px;
  display: flex; justify-content: center;
}
.sfs-scroll-wheel {
  width: 4px; height: 8px;
  background: var(--g1); border-radius: 2px;
  margin-top: 5px;
  animation: scrollWheel 1.8s ease-in-out infinite;
}
@keyframes scrollWheel {
  0%,100% { transform: translateY(0); opacity: 1; }
  50%      { transform: translateY(8px); opacity: .25; }
}
.sfs-scroll span { font-size: 10.5px; color: var(--mid); letter-spacing: .07em; font-weight: 500; }

/* ══ RIGHT ══ */
.sfs-right {
  position: relative;
  display: flex; align-items: center; justify-content: center;
  min-height: 740px;
}
.sfs-shield {
  position: absolute;
  top: 50px; right: 20px;
  width: 116px; height: 116px;
  z-index: 10;
  animation: shieldFloat 5s ease-in-out infinite;
  filter: drop-shadow(0 16px 32px rgba(46, 189, 58,.26));
}
@keyframes shieldFloat {
  0%,100% { transform: translateY(0) rotate(3deg) scale(1); }
  50%      { transform: translateY(-15px) rotate(-1deg) scale(1.03); }
}
.sfs-lock {
  position: absolute;
  right: -4px; top: 50%;
  transform: translateY(-50%);
  width: 58px; height: 58px;
  background: rgba(255,255,255,.95);
  backdrop-filter: blur(12px);
  border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  font-size: 25px;
  box-shadow: 0 8px 32px rgba(0,0,0,.12), 0 0 0 1px rgba(46, 189, 58,.18);
  border: 1.5px solid rgba(46, 189, 58,.22);
  z-index: 10;
  animation: lockFloat 5s ease-in-out infinite 1s;
}
@keyframes lockFloat {
  0%,100% { transform: translateY(-50%) scale(1); }
  50%      { transform: translateY(calc(-50% - 11px)) scale(1.06); }
}
.sfs-alert-badge {
  position: absolute;
  left: 8px; top: 105px;
  background: rgba(255,255,255,.96);
  backdrop-filter: blur(12px);
  border-radius: 16px;
  padding: 10px 14px;
  box-shadow: 0 8px 28px rgba(0,0,0,.09), 0 0 0 1px rgba(46, 189, 58,.10);
  border: 1.5px solid rgba(46, 189, 58,.16);
  z-index: 10;
  display: flex; align-items: center; gap: 9px;
  animation: alertFloat 6s ease-in-out infinite .8s;
}
@keyframes alertFloat {
  0%,100% { transform: translateY(0) rotate(-1deg); }
  50%      { transform: translateY(-9px) rotate(0deg); }
}
.sfs-alert-ico {
  width: 34px; height: 34px; border-radius: 10px;
  background: linear-gradient(135deg, #e8f8eb, #e8f8eb);
  display: flex; align-items: center; justify-content: center;
  font-size: 16px; flex-shrink: 0;
  border: 1px solid rgba(46, 189, 58,.18);
}
.sfs-alert-text h5 { font-size: 11.5px; font-weight: 700; color: var(--dark); }
.sfs-alert-text p  { font-size: 9.5px; color: var(--mid); margin-top: 2px; }
.sfs-scan-badge {
  position: absolute;
  right: 15px; bottom: 120px;
  background: linear-gradient(135deg, #2ebd3a, #2ebd3a);
  border-radius: 14px;
  padding: 10px 16px;
  z-index: 10;
  box-shadow: 0 10px 28px rgba(46, 189, 58,.35);
  border: 1.5px solid rgba(255,255,255,.20);
  animation: scanBadgeFloat 4.5s ease-in-out infinite 1.5s;
  color: white;
  display: flex; align-items: center; gap: 8px;
}
@keyframes scanBadgeFloat {
  0%,100% { transform: translateY(0) rotate(1deg); }
  50%      { transform: translateY(-8px) rotate(-1deg); }
}
.sfs-scan-badge-ico { font-size: 18px; }
.sfs-scan-badge-text h5 { font-size: 11.5px; font-weight: 800; }
.sfs-scan-badge-text p  { font-size: 9px; opacity: .85; margin-top: 1px; }

.sfs-stage {
  position: relative;
  display: flex; align-items: center; justify-content: center;
  width: 100%;
}

/* Radial rings */
.sfs-ring {
  position: absolute;
  border-radius: 50%;
  border: 1.5px solid rgba(46, 189, 58,.14);
  pointer-events: none;
  z-index: 1;
}
.sfs-ring-1 { width: 360px; height: 360px; animation: ringPulse 4s ease-in-out infinite; }
.sfs-ring-2 { width: 500px; height: 500px; animation: ringPulse 4s ease-in-out infinite .8s; }
.sfs-ring-3 { width: 640px; height: 640px; animation: ringPulse 4s ease-in-out infinite 1.6s; }
@keyframes ringPulse {
  0%,100% { opacity: .6; transform: scale(.96); }
  50%      { opacity: 1; transform: scale(1.04); }
}
.sfs-glow {
  position: absolute;
  width: 460px; height: 460px; border-radius: 50%;
  background: radial-gradient(circle, rgba(46, 189, 58,.18) 0%, rgba(46, 189, 58,.07) 40%, transparent 70%);
  filter: blur(4px);
  animation: glowPulse 4.5s ease-in-out infinite;
  z-index: 1;
}
@keyframes glowPulse {
  0%,100% { transform: scale(.88); opacity: .6; }
  50%      { transform: scale(1.08); opacity: 1; }
}

/* ══ PHONE ══ */
.sfs-phone {
  width: 300px;
  background: #0a1510;
  border-radius: 52px; padding: 8px;
  position: relative; z-index: 5;
  box-shadow:
    -20px 36px 90px rgba(0,0,0,.45),
    0 0 0 1.5px rgba(46, 189, 58,.20),
    0 0 0 3px rgba(255,255,255,.06),
    0 0 80px rgba(46, 189, 58,.12),
    inset 0 1px 0 rgba(255,255,255,.08);
  animation: phoneRock 9s ease-in-out infinite;
}
.sfs-phone::before {
  content: "";
  position: absolute; inset: 0; border-radius: 52px;
  background: linear-gradient(135deg, rgba(255,255,255,.08) 0%, transparent 55%);
  pointer-events: none; z-index: 6;
}
.sfs-phone::after {
  content: "";
  position: absolute; inset: 0; border-radius: 52px;
  background: linear-gradient(to bottom, transparent 70%, rgba(46, 189, 58,.06));
  pointer-events: none; z-index: 6;
}
@keyframes phoneRock {
  0%,100% { transform: perspective(1200px) rotateY(-9deg) rotateX(3.5deg) translateY(0); }
  33%      { transform: perspective(1200px) rotateY(-7deg) rotateX(2deg) translateY(-8px); }
  66%      { transform: perspective(1200px) rotateY(-10deg) rotateX(5deg) translateY(-4px); }
}
.sfs-notch-row { height: 34px; display: flex; align-items: center; justify-content: center; }
.sfs-notch { width: 82px; height: 10px; background: #000; border-radius: 999px; }
.sfs-screen {
  background: linear-gradient(175deg, #071208, #020604, #081c35);
  border-radius: 38px; overflow: hidden;
  padding: 16px 13px 18px;
  display: flex; flex-direction: column; align-items: center; text-align: center;
  border: 1px solid rgba(46, 189, 58,.10);
}
.sfs-verified {
  display: inline-flex; align-items: center; gap: 6px;
  background: rgba(46, 189, 58,.12);
  border: 1px solid rgba(46, 189, 58,.30);
  border-radius: 999px; padding: 4px 12px;
  font-size: 8px; font-weight: 800;
  color: #4bd557; letter-spacing: .07em; text-transform: uppercase;
  margin-bottom: 12px;
}
.sfs-vdot { width: 5px; height: 5px; border-radius: 50%; background: var(--g1); animation: livePulse 1.5s infinite; }
.sfs-avatar {
  width: 70px; height: 70px; border-radius: 50%; object-fit: cover;
  margin-bottom: 11px;
  border: 3px solid rgba(46, 189, 58,.45);
  box-shadow: 0 0 24px rgba(46, 189, 58,.30), 0 0 0 6px rgba(46, 189, 58,.08);
  outline: 1px solid rgba(46, 189, 58,.15);
}
.sfs-owner-name {
  color: white; font-size: 18px; font-weight: 800;
  margin-bottom: 3px; font-family: 'Sora', sans-serif;
  letter-spacing: -.4px;
}
.sfs-owner-label { color: #7ded88; font-size: 11px; margin-bottom: 16px; font-weight: 500; }
.sfs-divider {
  width: 100%; height: 1px;
  background: linear-gradient(90deg, transparent, rgba(46, 189, 58,.20), transparent);
  margin-bottom: 10px;
}
.sfs-row {
  display: flex; align-items: center; gap: 8px;
  padding: 5.5px 0; border-bottom: 1px solid rgba(46, 189, 58,.08);
  width: 100%; text-align: left;
}
.sfs-row:last-child { border-bottom: none; }
.sfs-row-ico {
  width: 27px; height: 27px; border-radius: 8px;
  background: rgba(46, 189, 58,.09);
  border: 1px solid rgba(46, 189, 58,.14);
  display: flex; align-items: center; justify-content: center;
  font-size: 11px; flex-shrink: 0;
  transition: .2s;
}
.sfs-row:hover .sfs-row-ico { background: rgba(46, 189, 58,.18); transform: scale(1.08); border-color: rgba(46, 189, 58,.28); }
.sfs-row-lbl { font-size: 7.5px; color: #4a8060; letter-spacing: .07em; text-transform: uppercase; font-weight: 600; }
.sfs-row-val { font-size: 10px; color: #e8f8eb; font-weight: 600; }

/* Scanline */
.sfs-scanline {
  position: absolute; left: -10%; width: 120%; height: 2px;
  background: linear-gradient(90deg, transparent, rgba(46, 189, 58,.3), rgba(125, 237, 136,.9), rgba(255,255,255,.5), rgba(125, 237, 136,.9), rgba(46, 189, 58,.3), transparent);
  box-shadow: 0 0 16px rgba(46, 189, 58,.5), 0 0 32px rgba(46, 189, 58,.2);
  z-index: 8;
  animation: scanMove 2.8s cubic-bezier(.45,0,.55,1) infinite;
}
@keyframes scanMove {
  0%   { transform: translateY(-165px); opacity: 0; }
  6%   { opacity: 1; }
  94%  { opacity: 1; }
  100% { transform: translateY(165px); opacity: 0; }
}

/* ══ SCAN STAGE ══ */
.sfs-scan-stage {
  position: absolute; inset: 0;
  display: flex; align-items: center; justify-content: center;
}
.sfs-asset-img {
  width: 480px; max-width: none;
  position: relative; z-index: 3;
  object-fit: contain;
  filter: drop-shadow(0 32px 64px rgba(0,0,0,.18)) drop-shadow(0 0 40px rgba(46, 189, 58,.24));
  animation: assetHover 4.5s ease-in-out infinite;
}
@keyframes assetHover {
  0%,100% { transform: translateY(0) scale(1.03) rotateY(-5deg); }
  50%      { transform: translateY(-15px) scale(1.05) rotateY(-3deg); }
}
.sfs-qr-card {
  position: absolute; right: -24px; bottom: 88px;
  background: rgba(255,255,255,.96);
  backdrop-filter: blur(14px);
  border-radius: 22px; padding: 15px 18px;
  box-shadow: 0 20px 56px rgba(0,0,0,.12), 0 0 0 1px rgba(46, 189, 58,.12);
  border: 1.5px solid rgba(46, 189, 58,.18);
  z-index: 10; display: flex; align-items: center; gap: 12px;
  min-width: 224px;
  transform: perspective(600px) rotateY(-10deg);
  animation: cardBob 5s ease-in-out infinite;
}
@keyframes cardBob {
  0%,100% { transform: perspective(600px) rotateY(-10deg) translateY(0); }
  50%      { transform: perspective(600px) rotateY(-13deg) translateY(-9px); }
}
.sfs-qr-icon {
  width: 54px; height: 54px; border-radius: 14px;
  background: linear-gradient(135deg, #e8f8eb, #e8f8eb);
  display: flex; align-items: center; justify-content: center;
  font-size: 26px; flex-shrink: 0;
  box-shadow: 0 4px 14px rgba(46, 189, 58,.20);
  border: 1px solid rgba(46, 189, 58,.20);
}
.sfs-qr-card h4 { font-size: 13px; font-weight: 800; color: var(--dark); margin-bottom: 4px; }
.sfs-qr-card p  { font-size: 10px; color: #5a7060; line-height: 1.4; }
.sfs-status-pill {
  position: absolute; top: 72px; left: 8px;
  background: rgba(255,255,255,.96);
  backdrop-filter: blur(14px);
  border-radius: 16px; padding: 10px 15px;
  box-shadow: 0 8px 28px rgba(0,0,0,.09), 0 0 0 1px rgba(46, 189, 58,.10);
  border: 1.5px solid rgba(46, 189, 58,.16);
  z-index: 10; display: flex; align-items: center; gap: 8px;
  animation: pillFloat 6s ease-in-out infinite .5s;
}
@keyframes pillFloat {
  0%,100% { transform: translateY(0); }
  50%      { transform: translateY(-8px); }
}
.sfs-status-dot   { width: 8px; height: 8px; border-radius: 50%; background: var(--g1); animation: livePulse 1.8s infinite; }
.sfs-status-label { font-size: 11.5px; font-weight: 800; color: var(--dark); }
.sfs-status-sub   { font-size: 9px; color: var(--mid); margin-top: 1px; }

/* ══ TRANSITIONS ══ */
.sfs-entering  { animation: enterScene .85s cubic-bezier(.22,1,.36,1) both; }
.sfs-exiting   { animation: exitScene .35s ease forwards; }
.sfs-scan-in   { animation: scanIn .45s ease both; }
.sfs-scan-out  { animation: scanOut .30s ease forwards; }
@keyframes enterScene {
  from { opacity:0; transform: scale(.62) translateY(68px); filter:blur(10px); }
  to   { opacity:1; transform: none; filter:blur(0); }
}
@keyframes exitScene {
  from { opacity:1; transform: none; }
  to   { opacity:0; transform: scale(.86) translateY(-44px); filter:blur(6px); }
}
@keyframes scanIn  { from { opacity:0; transform:scale(.92) translateY(20px); } to { opacity:1; transform:none; } }
@keyframes scanOut { from { opacity:1; } to { opacity:0; transform:scale(.90) translateY(-20px); } }
@keyframes slideInLeft { from { opacity:0; transform: translateX(-36px); } to { opacity:1; transform: none; } }
@keyframes fadeUp      { from { opacity:0; transform: translateY(22px);  } to { opacity:1; transform: none; } }

/* ══ TICKER ══ */
.sfs-ticker {
  width:100%; position:relative; z-index:10; overflow:hidden;
  background: linear-gradient(90deg, #0B2545 0%, #2ebd3a 35%, #0B2545 70%, #2ebd3a 100%);
  box-shadow: 0 -1px 0 rgba(46, 189, 58,.20);
  border-top: 1.5px solid rgba(46, 189, 58,.25);
}
.sfs-ticker::before {
  content: "";
  position: absolute; inset: 0;
  background: linear-gradient(90deg, rgba(0,0,0,.15) 0%, transparent 8%, transparent 92%, rgba(0,0,0,.15) 100%);
  z-index: 2; pointer-events: none;
}
.sfs-ticker-inner { display:flex; position: relative; z-index: 1; }
.sfs-ticker-label {
  flex-shrink:0; display:flex; align-items:center; padding:0 22px;
  background: rgba(0,0,0,.18); border-right: 1.5px solid rgba(255,255,255,.20);
  font-size:9px; font-weight:900; color:white; letter-spacing:2.5px;
  text-transform:uppercase; height:48px; white-space: nowrap;
}
.sfs-ticker-track { display:flex; animation: tickMove 36s linear infinite; }
.sfs-ticker-track:hover { animation-play-state: paused; }
@keyframes tickMove { 0%{transform:translateX(0);} 100%{transform:translateX(-50%);} }
.sfs-ti {
  display:flex; align-items:center; height:48px;
  padding:0 24px; font-size:12px; font-weight:600;
  color:rgba(255,255,255,.92); white-space:nowrap; gap:18px;
}
.sfs-td { width:4px; height:4px; border-radius:50%; background:rgba(255,255,255,.30); flex-shrink: 0; }

/* ══ RESPONSIVE — TABLET ══ */
@media(max-width:1200px){
  .sfs-hero { border-radius: 20px; }
  .sfs-grid { grid-template-columns:1fr; padding:44px 32px 28px; gap:32px; }
  .sfs-h1 { font-size:56px; letter-spacing:-3px; }
  .sfs-right { min-height:600px; }
  .sfs-asset-img { width:360px; }
  .sfs-shield { width:86px; height:86px; top:28px; right:12px; }
  .sfs-ring-2, .sfs-ring-3 { display:none; }
}

/* ══ RESPONSIVE — MOBILE ══ */
@media(max-width:640px){
  .sfs-hero {
    border-radius: 16px;
    border-width: 1.5px;
  }

  /* Grid */
  .sfs-grid {
    grid-template-columns: 1fr;
    padding: 24px 16px 20px;
    gap: 24px;
  }

  /* Typography */
  .sfs-h1 {
    font-size: 36px;
    letter-spacing: -1.8px;
    line-height: 1.0;
    margin-bottom: 14px;
  }
  .sfs-h1 .outline { -webkit-text-stroke-width: 1.5px; }
  .sfs-sub {
    font-size: 13.5px;
    line-height: 1.75;
    margin-bottom: 20px;
  }

  /* Badge */
  .sfs-badge {
    font-size: 9px;
    padding: 6px 14px 6px 10px;
    margin-bottom: 16px;
  }

  /* Feature cards — 1-col stack on mobile */
  .sfs-feats {
    flex-direction: column;
    gap: 10px;
    margin-bottom: 20px;
  }
  .sfs-feat {
    padding: 16px 14px;
    border-radius: 16px;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 14px;
  }
  .sfs-feat-ico {
    margin-bottom: 0;
    flex-shrink: 0;
    width: 40px; height: 40px;
    border-radius: 12px;
  }
  .sfs-feat h4 { font-size: 13px; margin-bottom: 3px; }
  .sfs-feat p  { font-size: 11px; }

  /* Buttons */
  .sfs-actions {
    flex-direction: column;
    gap: 10px;
    margin-bottom: 20px;
    align-items: stretch;
  }
  .sfs-btn-main {
    padding: 15px 20px;
    font-size: 14px;
    border-radius: 14px;
    justify-content: center;
  }
  .sfs-btn-sec {
    padding: 14px 20px;
    font-size: 13.5px;
    border-radius: 14px;
    justify-content: center;
  }

  /* Stats */
  .sfs-stats {
    gap: 12px;
    flex-wrap: wrap;
    margin-bottom: 16px;
  }
  .sfs-stat-num { font-size: 18px; }
  .sfs-stat-lbl { font-size: 9.5px; }
  .sfs-stat-div { height: 28px; }

  /* Scroll indicator */
  .sfs-scroll { display: none; }

  /* Right side */
  .sfs-right {
    min-height: 440px;
    overflow: hidden;
  }

  /* Phone */
  .sfs-phone {
    width: 240px;
    border-radius: 40px;
    padding: 6px;
  }
  .sfs-phone .sfs-screen {
    border-radius: 30px;
    padding: 12px 10px 14px;
  }
  .sfs-notch { width: 60px; height: 8px; }
  .sfs-notch-row { height: 26px; }
  .sfs-avatar { width: 56px; height: 56px; border-width: 2px; }
  .sfs-owner-name { font-size: 15px; }
  .sfs-owner-label { font-size: 9.5px; margin-bottom: 12px; }
  .sfs-row { padding: 4px 0; }
  .sfs-row-ico { width: 23px; height: 23px; font-size: 9px; }
  .sfs-row-lbl { font-size: 6.5px; }
  .sfs-row-val { font-size: 8.5px; }
  .sfs-verified { font-size: 7px; padding: 3px 10px; margin-bottom: 8px; }

  /* Shield & overlays */
  .sfs-shield { width: 70px; height: 70px; top: 16px; right: 8px; }
  .sfs-lock { width: 44px; height: 44px; font-size: 18px; right: -6px; }
  .sfs-ring-1 { width: 260px; height: 260px; }
  .sfs-ring-2, .sfs-ring-3 { display: none; }

  /* Floating badges — scale & reposition */
  .sfs-alert-badge {
    left: 2px;
    top: 70px;
    padding: 8px 10px;
    border-radius: 12px;
    transform: scale(0.82);
    transform-origin: top left;
  }
  .sfs-alert-ico { width: 28px; height: 28px; font-size: 13px; border-radius: 8px; }
  .sfs-alert-text h5 { font-size: 10px; }
  .sfs-alert-text p  { font-size: 8px; }

  .sfs-scan-badge {
    right: 2px;
    bottom: 70px;
    padding: 8px 12px;
    border-radius: 11px;
    transform: scale(0.82);
    transform-origin: bottom right;
  }
  .sfs-scan-badge-ico { font-size: 15px; }
  .sfs-scan-badge-text h5 { font-size: 10px; }
  .sfs-scan-badge-text p  { font-size: 8px; }

  /* Scan stage asset */
  .sfs-asset-img { width: 280px; }
  .sfs-qr-card {
    right: -10px;
    bottom: 60px;
    min-width: 180px;
    padding: 10px 12px;
    border-radius: 16px;
    transform: scale(0.85);
    transform-origin: bottom right;
  }
  .sfs-qr-icon { width: 40px; height: 40px; font-size: 20px; border-radius: 10px; }
  .sfs-qr-card h4 { font-size: 11px; }
  .sfs-qr-card p  { font-size: 9px; }

  .sfs-status-pill {
    top: 48px;
    left: 4px;
    padding: 7px 11px;
    border-radius: 12px;
    transform: scale(0.85);
    transform-origin: top left;
  }
  .sfs-status-dot { width: 6px; height: 6px; }
  .sfs-status-label { font-size: 10px; }
  .sfs-status-sub { font-size: 8px; }

  /* Ticker */
  .sfs-ticker-label { padding: 0 12px; font-size: 8px; letter-spacing: 1.5px; }
  .sfs-ti { font-size: 11px; padding: 0 16px; }

  /* Globe & mesh — hide on very small screens */
  .sfs-globe-wrap { width: 200px; height: 200px; bottom: -60px; left: -50px; }
  .sfs-mesh { width: 320px; height: 320px; top: -40px; right: -40px; }

  /* Left padding */
  .sfs-left { padding-right: 0; }
}

/* ══ EXTRA SMALL ══ */
@media(max-width:380px){
  .sfs-h1 { font-size: 30px; letter-spacing: -1.2px; }
  .sfs-grid { padding: 20px 12px 16px; }
  .sfs-phone { width: 210px; }
  .sfs-asset-img { width: 240px; }
  .sfs-right { min-height: 380px; }
  .sfs-shield { display: none; }
  .sfs-lock { display: none; }
}
`,rh=Array.from({length:18},(e,t)=>({id:t,x:`${(t*37+11)%100}%`,y:`${(t*53+7)%100}%`,size:`${t%3+2}px`,delay:`${t*.7%6}s`,duration:`${8+t%5}s`,opacity:.1+t%4*.08}));function ih(){return i.jsxs(i.Fragment,{children:[rh.map(e=>i.jsx("div",{className:"sfs-particle",style:{left:e.x,top:e.y,width:e.size,height:e.size,opacity:e.opacity,animation:`particleDrift ${e.duration} ease-in-out infinite ${e.delay}`}},e.id)),i.jsx("style",{children:`
        @keyframes particleDrift {
          0%,100% { transform: translate(0,0) scale(1); }
          33%      { transform: translate(8px,-12px) scale(1.3); }
          66%      { transform: translate(-6px,8px) scale(0.7); }
        }
      `})]})}function sh(){return i.jsxs("svg",{className:"sfs-waves",viewBox:"0 0 1440 900",preserveAspectRatio:"xMidYMid slice",xmlns:"http://www.w3.org/2000/svg",children:[i.jsx("defs",{children:i.jsx("style",{children:`
          .w1{animation:waveA 16s ease-in-out infinite;}
          .w2{animation:waveB 20s ease-in-out infinite;}
          .w3{animation:waveC 13s ease-in-out infinite;}
          @keyframes waveA{
            0%,100%{d:path("M0,480 C220,415 440,568 640,480 C860,392 1068,548 1270,468 C1375,428 1440,446 1440,446 L1440,900 L0,900 Z");}
            50%{d:path("M0,504 C200,444 420,582 630,508 C848,430 1048,566 1252,494 C1368,456 1440,472 1440,472 L1440,900 L0,900 Z");}
          }
          @keyframes waveB{
            0%,100%{d:path("M0,594 C200,548 392,644 622,594 C848,544 1052,634 1268,582 C1386,556 1440,564 1440,564 L1440,900 L0,900 Z");}
            50%{d:path("M0,616 C178,564 392,660 610,618 C830,570 1028,650 1250,602 C1376,576 1440,584 1440,584 L1440,900 L0,900 Z");}
          }
          @keyframes waveC{
            0%,100%{d:path("M0,706 C244,668 452,742 686,706 C908,670 1112,736 1314,698 C1402,678 1440,682 1440,682 L1440,900 L0,900 Z");}
            50%{d:path("M0,724 C224,682 466,756 706,722 C928,684 1092,752 1330,712 C1408,694 1440,698 1440,698 L1440,900 L0,900 Z");}
          }
        `})}),i.jsx("path",{className:"w1",d:"M0,480 C220,415 440,568 640,480 C860,392 1068,548 1270,468 C1375,428 1440,446 1440,446 L1440,900 L0,900 Z",fill:"rgba(46, 189, 58,.058)"}),i.jsx("path",{className:"w2",d:"M0,594 C200,548 392,644 622,594 C848,544 1052,634 1268,582 C1386,556 1440,564 1440,564 L1440,900 L0,900 Z",fill:"rgba(46, 189, 58,.042)"}),i.jsx("path",{className:"w3",d:"M0,706 C244,668 452,742 686,706 C908,670 1112,736 1314,698 C1402,678 1440,682 1440,682 L1440,900 L0,900 Z",fill:"rgba(46, 189, 58,.028)"})]})}function oh(){const e=[];for(let t=0;t<=12;t++)e.push(i.jsx("line",{x1:"0",y1:t*50,x2:"600",y2:t*50,stroke:"rgba(46, 189, 58,.08)",strokeWidth:".8"},`h${t}`),i.jsx("line",{x1:t*50,y1:"0",x2:t*50,y2:"600",stroke:"rgba(46, 189, 58,.08)",strokeWidth:".8"},`v${t}`));return e.push(i.jsx("line",{x1:"0",y1:"0",x2:"600",y2:"600",stroke:"rgba(46, 189, 58,.05)",strokeWidth:"1"},"d1"),i.jsx("line",{x1:"600",y1:"0",x2:"0",y2:"600",stroke:"rgba(46, 189, 58,.05)",strokeWidth:"1"},"d2")),i.jsx("svg",{className:"sfs-mesh",viewBox:"0 0 600 600",xmlns:"http://www.w3.org/2000/svg",children:e})}function lh(){return i.jsx("div",{className:"sfs-globe-wrap",children:i.jsxs("svg",{viewBox:"0 0 300 300",xmlns:"http://www.w3.org/2000/svg",children:[i.jsx("defs",{children:i.jsxs("radialGradient",{id:"gGrad2",cx:"38%",cy:"32%",children:[i.jsx("stop",{offset:"0%",stopColor:"rgba(125, 237, 136,.30)"}),i.jsx("stop",{offset:"55%",stopColor:"rgba(46, 189, 58,.12)"}),i.jsx("stop",{offset:"100%",stopColor:"rgba(46, 189, 58,.03)"})]})}),i.jsx("circle",{cx:"150",cy:"150",r:"138",fill:"url(#gGrad2)",stroke:"rgba(46, 189, 58,.16)",strokeWidth:"1"}),[-90,-54,-18,18,54,90].map((e,t)=>{const n=150+e,r=Math.sqrt(Math.max(0,138*138-e*e));return i.jsx("ellipse",{cx:"150",cy:n,rx:r,ry:r*.26,fill:"none",stroke:"rgba(46, 189, 58,.12)",strokeWidth:".7"},t)}),[0,30,60,90,120,150].map((e,t)=>i.jsx("ellipse",{cx:"150",cy:"150",rx:"42",ry:"138",fill:"none",stroke:"rgba(46, 189, 58,.10)",strokeWidth:".7",transform:`rotate(${e} 150 150)`},t)),i.jsx("ellipse",{cx:"150",cy:"150",rx:"175",ry:"46",fill:"none",stroke:"rgba(46, 189, 58,.20)",strokeWidth:"1.2",strokeDasharray:"8 6",style:{animation:"orbitSpin2 14s linear infinite",transformOrigin:"150px 150px"}}),i.jsx("circle",{cx:"325",cy:"150",r:"8",fill:"rgba(46, 189, 58,.55)",style:{animation:"orbitSpin2 14s linear infinite",transformOrigin:"150px 150px"}}),i.jsx("style",{children:"@keyframes orbitSpin2{from{transform:rotate(0deg);}to{transform:rotate(360deg);}}"})]})})}function ah(){return i.jsxs("svg",{className:"sfs-shield",viewBox:"0 0 110 110",xmlns:"http://www.w3.org/2000/svg",children:[i.jsxs("defs",{children:[i.jsxs("radialGradient",{id:"shGrad2",cx:"40%",cy:"30%",children:[i.jsx("stop",{offset:"0%",stopColor:"rgba(125, 237, 136,.99)"}),i.jsx("stop",{offset:"60%",stopColor:"rgba(46, 189, 58,.85)"}),i.jsx("stop",{offset:"100%",stopColor:"rgba(46, 189, 58,.75)"})]}),i.jsx("filter",{id:"shBlur",children:i.jsx("feGaussianBlur",{in:"SourceGraphic",stdDeviation:"2"})})]}),i.jsx("path",{d:"M55 12 L87 25 L87 52 C87 70 72 84 55 92 C38 84 23 70 23 52 L23 25 Z",fill:"rgba(46, 189, 58,.25)",filter:"url(#shBlur)"}),i.jsx("path",{d:"M55 10 L88 24 L88 52 C88 70 73 84 55 92 C37 84 22 70 22 52 L22 24 Z",fill:"url(#shGrad2)",stroke:"rgba(255,255,255,.40)",strokeWidth:"1.5"}),i.jsx("path",{d:"M55 16 L82 28 L82 52 C82 67 69 79 55 86 C41 79 28 67 28 52 L28 28 Z",fill:"none",stroke:"rgba(255,255,255,.20)",strokeWidth:"1"}),i.jsx("polyline",{points:"38,55 50,67 72,43",fill:"none",stroke:"white",strokeWidth:"5.5",strokeLinecap:"round",strokeLinejoin:"round"})]})}function Qa({asset:e,animClass:t}){return i.jsxs("div",{className:`sfs-scan-stage ${t}`,children:[i.jsx("div",{className:"sfs-glow"}),i.jsx("div",{className:"sfs-ring sfs-ring-1"}),i.jsx("div",{className:"sfs-ring sfs-ring-2"}),i.jsx("div",{className:"sfs-ring sfs-ring-3"}),i.jsx("img",{src:e.img,alt:e.label,className:"sfs-asset-img"}),i.jsx("div",{className:"sfs-scanline"}),i.jsxs("div",{className:"sfs-qr-card",children:[i.jsx("div",{className:"sfs-qr-icon",children:"🔐"}),i.jsxs("div",{children:[i.jsx("h4",{children:e.label}),i.jsxs("p",{children:["QR & NFC Protected",i.jsx("br",{}),"Secure Identification"]})]})]}),i.jsxs("div",{className:"sfs-status-pill",children:[i.jsx("div",{className:"sfs-status-dot"}),i.jsxs("div",{children:[i.jsx("div",{className:"sfs-status-label",children:"Scanning…"}),i.jsx("div",{className:"sfs-status-sub",children:"SFS Shield Active"})]})]})]})}function Xa({asset:e,animClass:t}){const n=[{ico:"📞",lbl:"Phone",val:e.phone},{ico:"📧",lbl:"Email",val:e.email},{ico:"📍",lbl:"Address",val:e.address},{ico:"🆔",lbl:"Asset ID",val:e.asset},{ico:"🚨",lbl:"Emergency",val:e.emergency},{ico:"📅",lbl:"Registered",val:e.registered}];return i.jsxs("div",{className:`sfs-phone ${t}`,children:[i.jsx("div",{className:"sfs-notch-row",children:i.jsx("div",{className:"sfs-notch"})}),i.jsxs("div",{className:"sfs-screen",children:[i.jsxs("div",{className:"sfs-verified",children:[i.jsx("div",{className:"sfs-vdot"})," Verified Owner"]}),i.jsx("img",{src:e.avatar,alt:"QR",className:"sfs-avatar"}),i.jsx("div",{className:"sfs-owner-name",children:e.owner}),i.jsx("div",{className:"sfs-owner-label",children:e.label}),i.jsx("div",{className:"sfs-divider"}),i.jsx("div",{style:{width:"100%",textAlign:"left"},children:n.map(r=>i.jsxs("div",{className:"sfs-row",children:[i.jsx("div",{className:"sfs-row-ico",children:r.ico}),i.jsxs("div",{children:[i.jsx("div",{className:"sfs-row-lbl",children:r.lbl}),i.jsx("div",{className:"sfs-row-val",children:r.val})]})]},r.lbl))})]})]})}function ch(e,t=2200){const[n,r]=b.useState(0);return b.useEffect(()=>{let s=null;const o=l=>{s||(s=l);const a=Math.min((l-s)/t,1);r(Math.floor(a*e)),a<1&&requestAnimationFrame(o)};requestAnimationFrame(o)},[e,t]),n}function bs({num:e,suffix:t,label:n}){const r=ch(e);return i.jsxs("div",{className:"sfs-stat",children:[i.jsxs("div",{className:"sfs-stat-num",children:[r.toLocaleString(),t]}),i.jsx("div",{className:"sfs-stat-lbl",children:n})]})}function dh(){const[e,t]=b.useState(0),[n,r]=b.useState("scan");b.useEffect(()=>{const l=setTimeout(()=>r("phone"),2400),a=setInterval(()=>{r("phone-out"),setTimeout(()=>{t(c=>(c+1)%Ya.length),r("scan")},360),setTimeout(()=>r("phone"),2800)},7800);return()=>{clearTimeout(l),clearInterval(a)}},[]);const s=[...Va,...Va],o=Ya[e];return i.jsxs(i.Fragment,{children:[i.jsx("style",{children:nh}),i.jsxs("div",{className:"sfs-hero",children:[i.jsxs("div",{className:"sfs-bg",children:[i.jsx(sh,{}),i.jsx(oh,{}),i.jsx(lh,{}),i.jsx(ih,{})]}),i.jsxs("div",{className:"sfs-grid",children:[i.jsxs("div",{className:"sfs-left",children:[i.jsxs("div",{className:"sfs-badge",children:[i.jsx("div",{className:"sfs-badge-dot"}),"Live Protection Active"]}),i.jsxs("h1",{className:"sfs-h1",children:["Smart Protection",i.jsx("br",{}),"That ",i.jsx("span",{className:"green",children:"Connects"}),i.jsx("br",{}),i.jsx("span",{className:"green",children:"Your World"})]}),i.jsx("p",{className:"sfs-sub",children:"Protect vehicles, bikes, luggage and valuables with next-generation QR + NFC verification. Instant owner alerts and live smart protection — all with a single scan."}),i.jsx("div",{className:"sfs-feats",children:[{ico:"🛡️",h:"Secure QR & NFC",p:"Military-grade encrypted ID protection system"},{ico:"📡",h:"Live Tracking",p:"Real-time alerts & continuous monitoring"},{ico:"🚨",h:"Emergency Access",p:"Instant verified owner identification"}].map(l=>i.jsxs("div",{className:"sfs-feat",children:[i.jsx("div",{className:"sfs-feat-ico",children:l.ico}),i.jsx("h4",{children:l.h}),i.jsx("p",{children:l.p})]},l.h))}),i.jsxs("div",{className:"sfs-actions",children:[i.jsx("button",{className:"sfs-btn-main",children:"🔐 Protect Your Assets"}),i.jsxs("button",{className:"sfs-btn-sec",children:[i.jsx("div",{className:"sfs-play-ring",children:"▶"}),"See How It Works"]})]}),i.jsxs("div",{className:"sfs-stats",children:[i.jsx(bs,{num:1e4,suffix:"+",label:"Assets Protected"}),i.jsx("div",{className:"sfs-stat-div"}),i.jsx(bs,{num:15e3,suffix:"+",label:"Scans Today"}),i.jsx("div",{className:"sfs-stat-div"}),i.jsx(bs,{num:50,suffix:"+",label:"Countries"}),i.jsx("div",{className:"sfs-stat-div"}),i.jsxs("div",{className:"sfs-stat",children:[i.jsx("div",{className:"sfs-stat-num",children:"4.9★"}),i.jsx("div",{className:"sfs-stat-lbl",children:"User Rating"})]})]}),i.jsxs("div",{className:"sfs-scroll",children:[i.jsx("div",{className:"sfs-scroll-mouse",children:i.jsx("div",{className:"sfs-scroll-wheel"})}),i.jsx("span",{children:"Scroll Down"})]})]}),i.jsxs("div",{className:"sfs-right",children:[i.jsx(ah,{}),i.jsx("div",{className:"sfs-lock",children:"🔒"}),i.jsxs("div",{className:"sfs-alert-badge",children:[i.jsx("div",{className:"sfs-alert-ico",children:"🔔"}),i.jsxs("div",{className:"sfs-alert-text",children:[i.jsx("h5",{children:"Owner Alerted!"}),i.jsx("p",{children:"Scan detected · 2s ago"})]})]}),i.jsxs("div",{className:"sfs-scan-badge",children:[i.jsx("div",{className:"sfs-scan-badge-ico",children:"📲"}),i.jsxs("div",{className:"sfs-scan-badge-text",children:[i.jsx("h5",{children:"15,234 Scans"}),i.jsx("p",{children:"Today worldwide"})]})]}),i.jsxs("div",{className:"sfs-stage",style:{minHeight:700},children:[n==="scan"&&i.jsx(Qa,{asset:o,animClass:"sfs-scan-in"}),n==="scan-out"&&i.jsx(Qa,{asset:o,animClass:"sfs-scan-out"}),n==="phone"&&i.jsx(Xa,{asset:o,animClass:"sfs-entering"}),n==="phone-out"&&i.jsx(Xa,{asset:o,animClass:"sfs-exiting"})]})]})]}),i.jsx("div",{className:"sfs-ticker",children:i.jsxs("div",{className:"sfs-ticker-inner",children:[i.jsx("div",{className:"sfs-ticker-label",children:"Live Updates"}),i.jsx("div",{className:"sfs-ticker-track",children:s.map((l,a)=>i.jsxs("div",{className:"sfs-ti",children:[l,a<s.length-1&&i.jsx("div",{className:"sfs-td"})]},a))})]})})]})]})}const uh=[{value:"5,000+",label:"Items Protected",icon:i.jsx(Pe,{size:30})},{value:"98%",label:"Recovery Rate",icon:i.jsx(g1,{size:30})},{value:"< 2 min",label:"Alert Response",icon:i.jsx(w1,{size:30})},{value:"4.9 ★",label:"Customer Rating",icon:i.jsx(jl,{size:30})}],Ga=[{title:"24/7",text:"Active Monitoring",icon:i.jsx(wo,{size:20})},{title:"50K+",text:"Daily QR Scans",icon:i.jsx(y1,{size:20})},{title:"ISO 27001",text:"Security Certified",icon:i.jsx(W1,{size:20})},{title:"99.9%",text:"System Uptime",icon:i.jsx(P1,{size:20})}];function fh(){return i.jsxs("section",{className:"relative overflow-hidden py-20 bg-gradient-to-b from-[#f5fff8] via-[#f8fffb] to-white",children:[i.jsx("div",{className:"absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[350px] bg-green-400/10 blur-[140px]"}),i.jsx("div",{className:"absolute inset-0 opacity-[0.03]",children:i.jsx("div",{className:"w-full h-full",style:{backgroundImage:"radial-gradient(#2ebd3a 1px, transparent 1px)",backgroundSize:"28px 28px"}})}),i.jsxs("div",{className:"relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[i.jsx("div",{className:"flex justify-center mb-14",children:i.jsxs("div",{className:"inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white border border-green-200 shadow-[0_10px_40px_rgba(16,185,129,0.08)]",children:[i.jsxs("div",{className:"relative flex items-center justify-center",children:[i.jsx("div",{className:"w-3 h-3 rounded-full bg-green-500 animate-pulse"}),i.jsx("div",{className:"absolute w-3 h-3 rounded-full bg-green-500 animate-ping opacity-30"})]}),i.jsx("span",{className:"text-xs sm:text-sm font-black tracking-[0.25em] uppercase text-slate-700",children:"Live Protection Metrics"})]})}),i.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6",children:uh.map(({value:e,label:t,icon:n},r)=>i.jsxs("div",{className:"group relative overflow-hidden rounded-[34px] border border-green-100 bg-white p-8 shadow-[0_20px_60px_rgba(0,0,0,0.05)] transition-all duration-500 hover:-translate-y-3 hover:border-green-300 hover:shadow-[0_25px_80px_rgba(16,185,129,0.15)]",children:[i.jsx("div",{className:"absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-green-400/10 via-transparent to-emerald-200/10"}),i.jsx("div",{className:"absolute inset-[1px] rounded-[33px] border border-white/70 pointer-events-none"}),i.jsx("div",{className:"absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-green-300 to-transparent"}),i.jsx("div",{className:"absolute -top-10 -right-10 w-32 h-32 bg-green-300/10 blur-3xl rounded-full"}),i.jsxs("div",{className:"absolute bottom-2 right-4 text-[85px] font-black text-slate-100 leading-none select-none",children:["0",r+1]}),i.jsx("div",{className:"relative z-10 w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 text-white flex items-center justify-center shadow-lg shadow-green-500/30 mb-6 group-hover:scale-110 transition-transform duration-500",children:n}),i.jsx("h3",{className:"relative z-10 text-4xl font-black tracking-tight text-slate-900 leading-none mb-3",children:e}),i.jsx("p",{className:"relative z-10 text-slate-500 text-base font-medium leading-relaxed",children:t}),i.jsx("div",{className:"relative z-10 mt-7 h-[4px] w-14 rounded-full bg-gradient-to-r from-green-500 to-emerald-300 group-hover:w-24 transition-all duration-500"})]},t))}),i.jsxs("div",{className:"mt-14 relative overflow-hidden rounded-[36px] border border-green-200 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.05)]",children:[i.jsx("div",{className:"absolute inset-[1px] rounded-[35px] border border-white/80 pointer-events-none"}),i.jsx("div",{className:"absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[120px] bg-green-400/10 blur-[80px]"}),i.jsx("div",{className:"absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-green-300 to-transparent"}),i.jsx("div",{className:"relative grid grid-cols-2 md:grid-cols-4",children:Ga.map((e,t)=>i.jsxs("div",{className:`group relative px-8 py-10 text-center transition-all duration-300 hover:bg-green-50/40 ${t!==Ga.length-1?"border-b md:border-b-0 md:border-r border-green-100":""}`,children:[i.jsx("div",{className:"mx-auto mb-4 w-14 h-14 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 text-white flex items-center justify-center shadow-lg shadow-green-500/20 group-hover:scale-110 transition duration-500",children:e.icon}),i.jsx("h4",{className:"text-4xl font-black tracking-tight text-slate-900",children:e.title}),i.jsx("p",{className:"mt-2 text-sm sm:text-base text-slate-500 font-medium",children:e.text}),i.jsx("div",{className:"mx-auto mt-5 h-[3px] w-10 rounded-full bg-gradient-to-r from-green-500 to-emerald-300 group-hover:w-20 transition-all duration-500"})]},e.title))})]})]})]})}function ph(){return i.jsxs("svg",{width:"64",height:"64",viewBox:"0 0 21 21",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[i.jsx("rect",{x:"0",y:"0",width:"7",height:"7",rx:"1",fill:"#0B2545"}),i.jsx("rect",{x:"1",y:"1",width:"5",height:"5",rx:"0.5",fill:"white"}),i.jsx("rect",{x:"2",y:"2",width:"3",height:"3",fill:"#0B2545"}),i.jsx("rect",{x:"14",y:"0",width:"7",height:"7",rx:"1",fill:"#0B2545"}),i.jsx("rect",{x:"15",y:"1",width:"5",height:"5",rx:"0.5",fill:"white"}),i.jsx("rect",{x:"16",y:"2",width:"3",height:"3",fill:"#0B2545"}),i.jsx("rect",{x:"0",y:"14",width:"7",height:"7",rx:"1",fill:"#0B2545"}),i.jsx("rect",{x:"1",y:"15",width:"5",height:"5",rx:"0.5",fill:"white"}),i.jsx("rect",{x:"2",y:"16",width:"3",height:"3",fill:"#0B2545"}),i.jsx("rect",{x:"8",y:"0",width:"1",height:"1",fill:"#0B2545"}),i.jsx("rect",{x:"10",y:"0",width:"1",height:"1",fill:"#0B2545"}),i.jsx("rect",{x:"12",y:"0",width:"1",height:"1",fill:"#0B2545"}),i.jsx("rect",{x:"8",y:"2",width:"2",height:"1",fill:"#0B2545"}),i.jsx("rect",{x:"11",y:"2",width:"1",height:"1",fill:"#0B2545"}),i.jsx("rect",{x:"9",y:"4",width:"1",height:"1",fill:"#0B2545"}),i.jsx("rect",{x:"11",y:"4",width:"2",height:"1",fill:"#0B2545"}),i.jsx("rect",{x:"8",y:"6",width:"1",height:"1",fill:"#0B2545"}),i.jsx("rect",{x:"10",y:"6",width:"2",height:"1",fill:"#0B2545"}),i.jsx("rect",{x:"0",y:"8",width:"2",height:"1",fill:"#0B2545"}),i.jsx("rect",{x:"3",y:"8",width:"1",height:"1",fill:"#0B2545"}),i.jsx("rect",{x:"5",y:"8",width:"2",height:"1",fill:"#0B2545"}),i.jsx("rect",{x:"8",y:"8",width:"1",height:"2",fill:"#0B2545"}),i.jsx("rect",{x:"10",y:"8",width:"2",height:"1",fill:"#0B2545"}),i.jsx("rect",{x:"13",y:"8",width:"1",height:"1",fill:"#0B2545"}),i.jsx("rect",{x:"15",y:"8",width:"2",height:"1",fill:"#0B2545"}),i.jsx("rect",{x:"18",y:"8",width:"1",height:"2",fill:"#0B2545"}),i.jsx("rect",{x:"0",y:"10",width:"1",height:"1",fill:"#0B2545"}),i.jsx("rect",{x:"2",y:"10",width:"2",height:"1",fill:"#0B2545"}),i.jsx("rect",{x:"5",y:"10",width:"1",height:"1",fill:"#0B2545"}),i.jsx("rect",{x:"9",y:"10",width:"1",height:"1",fill:"#0B2545"}),i.jsx("rect",{x:"11",y:"10",width:"3",height:"1",fill:"#0B2545"}),i.jsx("rect",{x:"15",y:"10",width:"1",height:"1",fill:"#0B2545"}),i.jsx("rect",{x:"17",y:"10",width:"2",height:"1",fill:"#0B2545"}),i.jsx("rect",{x:"0",y:"12",width:"3",height:"1",fill:"#0B2545"}),i.jsx("rect",{x:"4",y:"12",width:"2",height:"1",fill:"#0B2545"}),i.jsx("rect",{x:"8",y:"12",width:"2",height:"1",fill:"#0B2545"}),i.jsx("rect",{x:"11",y:"12",width:"1",height:"1",fill:"#0B2545"}),i.jsx("rect",{x:"13",y:"12",width:"2",height:"1",fill:"#0B2545"}),i.jsx("rect",{x:"16",y:"12",width:"1",height:"1",fill:"#0B2545"}),i.jsx("rect",{x:"18",y:"12",width:"1",height:"1",fill:"#0B2545"}),i.jsx("rect",{x:"8",y:"14",width:"1",height:"1",fill:"#0B2545"}),i.jsx("rect",{x:"10",y:"14",width:"2",height:"1",fill:"#0B2545"}),i.jsx("rect",{x:"13",y:"14",width:"1",height:"2",fill:"#0B2545"}),i.jsx("rect",{x:"15",y:"14",width:"1",height:"1",fill:"#0B2545"}),i.jsx("rect",{x:"17",y:"14",width:"2",height:"1",fill:"#0B2545"}),i.jsx("rect",{x:"8",y:"16",width:"2",height:"1",fill:"#0B2545"}),i.jsx("rect",{x:"11",y:"16",width:"1",height:"2",fill:"#0B2545"}),i.jsx("rect",{x:"14",y:"16",width:"1",height:"1",fill:"#0B2545"}),i.jsx("rect",{x:"16",y:"16",width:"1",height:"2",fill:"#0B2545"}),i.jsx("rect",{x:"18",y:"16",width:"2",height:"1",fill:"#0B2545"}),i.jsx("rect",{x:"8",y:"18",width:"1",height:"2",fill:"#0B2545"}),i.jsx("rect",{x:"10",y:"18",width:"1",height:"2",fill:"#0B2545"}),i.jsx("rect",{x:"14",y:"18",width:"1",height:"2",fill:"#0B2545"}),i.jsx("rect",{x:"19",y:"18",width:"1",height:"2",fill:"#0B2545"})]})}function hh(){return i.jsxs("div",{style:{position:"relative",width:280,height:560,flexShrink:0},children:[i.jsx("div",{style:{position:"absolute",right:-50,top:"28%",background:"#2ebd3a",borderRadius:"50%",width:44,height:44,display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 4px 16px rgba(37,211,102,0.4)",zIndex:10},children:i.jsx(Di,{size:22,color:"white",fill:"white"})}),i.jsx("div",{style:{position:"absolute",right:-44,top:"52%",background:"white",borderRadius:"50%",width:38,height:38,display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 4px 14px rgba(0,0,0,0.15)",zIndex:10},children:i.jsx(ct,{size:18,color:"#0B2545"})}),i.jsxs("div",{style:{position:"absolute",inset:0,borderRadius:46,background:"linear-gradient(160deg, #5a5a5a 0%, #3a3a3a 30%, #2a2a2a 60%, #1e1e1e 100%)",boxShadow:`
          0 0 0 1px #666 inset,
          2px 4px 0 0 #555 inset,
          -1px -2px 0 0 #111 inset,
          0 30px 80px rgba(0,0,0,0.55),
          0 8px 24px rgba(0,0,0,0.35),
          0 2px 6px rgba(0,0,0,0.25)
        `},children:[i.jsx("div",{style:{position:"absolute",inset:0,borderRadius:46,background:"linear-gradient(135deg, rgba(255,255,255,0.18) 0%, transparent 40%)",pointerEvents:"none"}}),i.jsx("div",{style:{position:"absolute",left:-3,top:120,width:3,height:34,background:"linear-gradient(180deg, #555 0%, #3a3a3a 100%)",borderRadius:"2px 0 0 2px",boxShadow:"-1px 0 3px rgba(0,0,0,0.4)"}}),i.jsx("div",{style:{position:"absolute",left:-3,top:165,width:3,height:34,background:"linear-gradient(180deg, #555 0%, #3a3a3a 100%)",borderRadius:"2px 0 0 2px",boxShadow:"-1px 0 3px rgba(0,0,0,0.4)"}}),i.jsx("div",{style:{position:"absolute",left:-3,top:88,width:3,height:22,background:"linear-gradient(180deg, #555 0%, #3a3a3a 100%)",borderRadius:"2px 0 0 2px",boxShadow:"-1px 0 3px rgba(0,0,0,0.4)"}}),i.jsx("div",{style:{position:"absolute",right:-3,top:140,width:3,height:70,background:"linear-gradient(180deg, #555 0%, #3a3a3a 100%)",borderRadius:"0 2px 2px 0",boxShadow:"1px 0 3px rgba(0,0,0,0.4)"}}),i.jsx("div",{style:{position:"absolute",inset:6,borderRadius:41,background:"#0a0a0a",overflow:"hidden"},children:i.jsxs("div",{style:{position:"absolute",inset:3,borderRadius:38,background:"white",overflow:"hidden",display:"flex",flexDirection:"column"},children:[i.jsx("div",{style:{position:"absolute",top:10,left:"50%",transform:"translateX(-50%)",width:100,height:30,background:"#0a0a0a",borderRadius:20,zIndex:20}}),i.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"14px 20px 0",fontSize:10,fontWeight:700,color:"#111"},children:[i.jsx("span",{children:"9:41"}),i.jsxs("div",{style:{display:"flex",gap:4,alignItems:"center"},children:[i.jsxs("svg",{width:"14",height:"10",viewBox:"0 0 14 10",children:[i.jsx("rect",{x:"0",y:"6",width:"2.5",height:"4",rx:"0.5",fill:"#111"}),i.jsx("rect",{x:"3.5",y:"4",width:"2.5",height:"6",rx:"0.5",fill:"#111"}),i.jsx("rect",{x:"7",y:"2",width:"2.5",height:"8",rx:"0.5",fill:"#111"}),i.jsx("rect",{x:"10.5",y:"0",width:"2.5",height:"10",rx:"0.5",fill:"#111"})]}),i.jsxs("svg",{width:"13",height:"10",viewBox:"0 0 13 10",children:[i.jsx("path",{d:"M6.5 7.5 L6.5 9.5",stroke:"#111",strokeWidth:"1.5",strokeLinecap:"round"}),i.jsx("path",{d:"M4 5.5 Q6.5 3.5 9 5.5",stroke:"#111",strokeWidth:"1.2",fill:"none",strokeLinecap:"round"}),i.jsx("path",{d:"M1.5 3 Q6.5 -0.5 11.5 3",stroke:"#111",strokeWidth:"1.2",fill:"none",strokeLinecap:"round"})]}),i.jsxs("svg",{width:"22",height:"11",viewBox:"0 0 22 11",children:[i.jsx("rect",{x:"0",y:"1",width:"19",height:"9",rx:"2",stroke:"#111",strokeWidth:"1",fill:"none"}),i.jsx("rect",{x:"19.5",y:"3.5",width:"2",height:"4",rx:"1",fill:"#111"}),i.jsx("rect",{x:"1.5",y:"2.5",width:"15",height:"6",rx:"1",fill:"#111"})]})]})]}),i.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"8px 16px 6px",borderBottom:"1px solid #f0f0f0"},children:[i.jsx(b1,{size:18,color:"#333",strokeWidth:2.5}),i.jsxs("div",{style:{textAlign:"center"},children:[i.jsx("div",{style:{fontSize:13,fontWeight:700,color:"#111"},children:"Found Item"}),i.jsxs("div",{style:{fontSize:9,color:"#777",display:"flex",alignItems:"center",gap:3},children:[i.jsx(Ui,{size:9,color:"#777"}),"Scan QR Code"]})]}),i.jsx("div",{style:{width:18}})]}),i.jsxs("div",{style:{margin:"10px 12px 6px",background:"#e8f8eb",borderRadius:12,padding:"10px 12px",border:"1px solid #e8f8eb",display:"flex",alignItems:"center",gap:10},children:[i.jsx("div",{style:{background:"white",borderRadius:8,padding:4,border:"1px solid #ddd",flexShrink:0},children:i.jsx(ph,{})}),i.jsxs("div",{children:[i.jsx("div",{style:{fontSize:13,fontWeight:800,color:"#0B2545",letterSpacing:"-0.3px"},children:"PET-7G4K-2L8M"}),i.jsx("div",{style:{fontSize:10,color:"#2ebd3a",marginBottom:4},children:"Pet ID Tag"}),i.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:3,background:"#2ebd3a",borderRadius:4,padding:"2px 6px",fontSize:9,fontWeight:700,color:"white"},children:[i.jsx(bo,{size:8,color:"white",fill:"white"}),"Verified"]})]})]}),i.jsxs("div",{style:{padding:"0 12px",flex:1,display:"flex",flexDirection:"column",gap:0},children:[i.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:8,padding:"7px 0",borderBottom:"1px solid #f5f5f5"},children:[i.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:2},children:[i.jsx("div",{style:{width:26,height:26,borderRadius:"50%",background:"#e8f8eb",border:"1.5px solid #2ebd3a",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:i.jsx(dt,{size:12,color:"#0B2545"})}),i.jsx("div",{style:{width:1.5,height:28,background:"#e0e0e0"}})]}),i.jsxs("div",{style:{flex:1},children:[i.jsx("div",{style:{fontSize:10,fontWeight:700,color:"#111",marginBottom:1},children:"OTP Verification"}),i.jsx("div",{style:{fontSize:8.5,color:"#777"},children:"Enter OTP sent to"}),i.jsx("div",{style:{fontSize:8.5,color:"#777"},children:"+91 98765 43210"})]}),i.jsx("div",{style:{background:"#f3f4f6",borderRadius:6,padding:"4px 8px",fontSize:13,fontWeight:800,color:"#0B2545",letterSpacing:1},children:"5321"})]}),i.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:8,padding:"7px 0",borderBottom:"1px solid #f5f5f5"},children:[i.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:2},children:[i.jsx("div",{style:{width:26,height:26,borderRadius:"50%",background:"#e8f8eb",border:"1.5px solid #2ebd3a",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:i.jsx(ct,{size:12,color:"#0B2545"})}),i.jsx("div",{style:{width:1.5,height:28,background:"#e0e0e0"}})]}),i.jsxs("div",{style:{flex:1},children:[i.jsx("div",{style:{fontSize:10,fontWeight:700,color:"#111",marginBottom:1},children:"Owner Notified"}),i.jsx("div",{style:{fontSize:8.5,color:"#777"},children:"WhatsApp alert sent"}),i.jsx("div",{style:{fontSize:8.5,color:"#777"},children:"instantly"})]}),i.jsx(bo,{size:16,color:"#2ebd3a",fill:"#2ebd3a",style:{flexShrink:0,marginTop:4}})]}),i.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:8,padding:"7px 0"},children:[i.jsx("div",{style:{width:26,height:26,borderRadius:"50%",background:"#e8f8eb",border:"1.5px solid #2ebd3a",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:i.jsx(Ot,{size:12,color:"#0B2545"})}),i.jsxs("div",{style:{flex:1},children:[i.jsx("div",{style:{fontSize:10,fontWeight:700,color:"#111",marginBottom:1},children:"Live Location"}),i.jsx("div",{style:{fontSize:8.5,color:"#777"},children:"Sharing location"}),i.jsx("div",{style:{fontSize:8.5,color:"#777"},children:"for safe return"})]}),i.jsxs("div",{style:{width:42,height:38,borderRadius:6,background:"linear-gradient(135deg, #e8f8eb 0%, #e8f8eb 100%)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,overflow:"hidden",position:"relative",border:"1px solid #7ded88"},children:[i.jsxs("div",{style:{position:"absolute",inset:0},children:[i.jsx("div",{style:{position:"absolute",left:"33%",top:0,bottom:0,width:1,background:"rgba(255,255,255,0.5)"}}),i.jsx("div",{style:{position:"absolute",left:"66%",top:0,bottom:0,width:1,background:"rgba(255,255,255,0.5)"}}),i.jsx("div",{style:{position:"absolute",top:"33%",left:0,right:0,height:1,background:"rgba(255,255,255,0.5)"}}),i.jsx("div",{style:{position:"absolute",top:"66%",left:0,right:0,height:1,background:"rgba(255,255,255,0.5)"}})]}),i.jsx(Ot,{size:14,color:"#c62828",fill:"#c62828"})]})]})]}),i.jsxs("div",{style:{margin:"6px 10px 10px",background:"linear-gradient(135deg, #0B2545 0%, #2ebd3a 100%)",borderRadius:14,padding:"12px 14px",display:"flex",alignItems:"center",gap:10},children:[i.jsx("div",{style:{width:32,height:32,borderRadius:"50%",background:"rgba(255,255,255,0.15)",display:"flex",alignItems:"center",justifyContent:"center"},children:i.jsx(Pe,{size:18,color:"white"})}),i.jsxs("div",{children:[i.jsx("div",{style:{fontSize:12,fontWeight:800,color:"white"},children:"Protection Active"}),i.jsx("div",{style:{fontSize:9,color:"rgba(255,255,255,0.75)"},children:"We've got it covered 24/7"})]})]})]})})]})]})}function gh({number:e,icon:t,title:n,description:r,badge:s,badgeIcon:o}){const[l,a]=b.useState(!1);return i.jsxs("div",{onMouseEnter:()=>a(!0),onMouseLeave:()=>a(!1),style:{background:"white",borderRadius:20,padding:"28px 22px 20px",flex:1,minWidth:0,position:"relative",boxShadow:l?"0 16px 48px rgba(22,101,52,0.14), 0 2px 8px rgba(0,0,0,0.07)":"0 4px 20px rgba(0,0,0,0.07), 0 1px 4px rgba(0,0,0,0.05)",transform:l?"translateY(-4px)":"translateY(0)",transition:"all 0.3s ease",border:l?"2px dashed #2ebd3a":"2px dashed #e8f8eb",display:"flex",flexDirection:"column"},children:[i.jsx("div",{style:{position:"absolute",top:-16,left:"50%",transform:"translateX(-50%)",width:34,height:34,borderRadius:"50%",background:"linear-gradient(135deg, #0B2545 0%, #2ebd3a 100%)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:15,fontWeight:800,color:"white",boxShadow:"0 4px 12px rgba(6,78,59,0.35)",fontFamily:"Georgia, serif"},children:e}),i.jsx("div",{style:{width:62,height:62,borderRadius:"50%",background:"linear-gradient(135deg, #e8f8eb 0%, #f8fafc 100%)",display:"flex",alignItems:"center",justifyContent:"center",margin:"10px auto 16px",border:"1.5px solid #7ded88"},children:i.jsx(t,{size:26,color:"#2ebd3a",strokeWidth:1.8})}),i.jsx("h3",{style:{fontSize:16,fontWeight:800,color:"#0B2545",textAlign:"center",marginBottom:10,lineHeight:1.3,fontFamily:"Georgia, serif"},children:n}),i.jsx("p",{style:{fontSize:12.5,color:"#11355e",textAlign:"center",lineHeight:1.65,flex:1,marginBottom:14,opacity:.75},children:r}),i.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:5,background:"#e8f8eb",borderRadius:20,padding:"6px 12px",fontSize:11,fontWeight:700,color:"#2ebd3a"},children:[i.jsx(o,{size:12,color:"#2ebd3a"}),s]})]})}function Ru(){const[e,t]=b.useState(!1);b.useEffect(()=>{setTimeout(()=>t(!0),80)},[]);const n=[{number:"1",icon:Y1,title:"Order Your QR Tag",description:"Choose the right protection plan for your need and place your order. We deliver premium weatherproof QR tags to your doorstep within 3–5 business days.",badge:"Delivered across India",badgeIcon:ko},{number:"2",icon:Ui,title:"Activate & Personalise",description:"Scan your tag to activate it, then fill in your contact details, emergency info, and any important notes. Takes less than 3 minutes — no tech skills needed.",badge:"Set up in 3 minutes",badgeIcon:k1},{number:"3",icon:Pe,title:"Stay Protected 24/7",description:"Attach the tag to your pet, vehicle, or valuables and you're done. Anyone who finds your item scans the code — you get a WhatsApp alert instantly.",badge:"Always-on protection",badgeIcon:fr}],r=[{icon:Pu,label:"Trusted by",value:"10,000+ Families"},{icon:()=>i.jsx("span",{style:{fontSize:18},children:"🇮🇳"}),label:"Made in India",value:"Premium Quality"},{icon:ko,label:"3–5 Day",value:"Fast Delivery"},{icon:Di,label:"24/7",value:"WhatsApp Alerts"},{icon:dt,label:"Bank-level",value:"Data Security"}];return i.jsxs("div",{style:{minHeight:"100vh",background:"linear-gradient(160deg, #f8fafc 0%, #fafcfa 50%, #f8fafc 100%)",fontFamily:"'Segoe UI', system-ui, sans-serif",overflow:"hidden"},children:[i.jsx("div",{style:{position:"fixed",inset:0,pointerEvents:"none",zIndex:0,backgroundImage:"radial-gradient(circle, #7ded88 1px, transparent 1px)",backgroundSize:"28px 28px",opacity:.35}}),i.jsxs("div",{style:{position:"relative",zIndex:1,maxWidth:1140,margin:"0 auto",padding:"52px 28px 48px"},children:[i.jsx("div",{style:{display:"flex",justifyContent:"center",marginBottom:22,opacity:e?1:0,transform:e?"translateY(0)":"translateY(-12px)",transition:"all 0.5s ease"},children:i.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:7,background:"white",borderRadius:40,padding:"7px 18px",fontSize:11,fontWeight:700,color:"#2ebd3a",letterSpacing:"0.08em",textTransform:"uppercase",boxShadow:"0 2px 10px rgba(0,0,0,0.08)",border:"1px solid #7ded88"},children:[i.jsx("div",{style:{width:7,height:7,borderRadius:"50%",background:"#2ebd3a",boxShadow:"0 0 0 3px rgba(22,101,52,0.2)"}}),"Simple Process"]})}),i.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:48,flexWrap:"wrap"},children:[i.jsxs("div",{style:{flex:"1 1 520px",opacity:e?1:0,transform:e?"translateX(0)":"translateX(-24px)",transition:"all 0.6s ease 0.1s"},children:[i.jsxs("h1",{style:{fontSize:"clamp(32px, 5vw, 52px)",fontWeight:900,color:"#0B2545",lineHeight:1.15,marginBottom:14,fontFamily:"Georgia, 'Times New Roman', serif"},children:["Up and Running in",i.jsx("br",{}),i.jsx("span",{style:{color:"#2ebd3a"},children:"3 Easy Steps"})]}),i.jsxs("p",{style:{fontSize:15,color:"#11355e",marginBottom:36,lineHeight:1.6,maxWidth:520,opacity:.7},children:["No complicated setup. No technical knowledge needed.",i.jsx("br",{}),"Just order, activate, and relax."]}),i.jsxs("div",{style:{position:"relative",display:"flex",gap:16,flexWrap:"wrap"},children:[i.jsx("div",{style:{position:"absolute",top:"50%",left:"calc(33.33% - 8px)",right:"calc(33.33% - 8px)",height:0,borderTop:"2px dashed #7ded88",zIndex:0,pointerEvents:"none"}}),n.map((s,o)=>i.jsx(gh,{...s},o))]}),i.jsxs("div",{style:{marginTop:28,background:"white",borderRadius:18,padding:"18px 22px",display:"flex",alignItems:"center",justifyContent:"space-between",gap:16,flexWrap:"wrap",boxShadow:"0 4px 20px rgba(0,0,0,0.07)",border:"1px solid #e8f8eb"},children:[i.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12},children:[i.jsx("div",{style:{width:40,height:40,borderRadius:"50%",background:"#e8f8eb",display:"flex",alignItems:"center",justifyContent:"center"},children:i.jsx(dt,{size:20,color:"#2ebd3a"})}),i.jsxs("div",{children:[i.jsx("div",{style:{fontSize:14,fontWeight:800,color:"#0B2545"},children:"Peace of mind in 3 simple steps"}),i.jsx("div",{style:{fontSize:11.5,color:"#11355e",opacity:.6},children:"Join thousands of smart families who trust our QR protection."})]})]}),i.jsxs("button",{style:{background:"linear-gradient(135deg, #0B2545 0%, #2ebd3a 100%)",color:"white",border:"none",borderRadius:12,padding:"13px 24px",fontSize:13.5,fontWeight:700,cursor:"pointer",display:"flex",alignItems:"center",gap:8,boxShadow:"0 4px 16px rgba(6,78,59,0.35)",whiteSpace:"nowrap",transition:"transform 0.15s ease"},onMouseEnter:s=>s.currentTarget.style.transform="scale(1.03)",onMouseLeave:s=>s.currentTarget.style.transform="scale(1)",children:["Start Protecting Now ",i.jsx(ku,{size:16})]})]})]}),i.jsx("div",{style:{flex:"0 0 auto",display:"flex",justifyContent:"center",paddingTop:20,opacity:e?1:0,transform:e?"translateX(0)":"translateX(24px)",transition:"all 0.6s ease 0.15s"},children:i.jsx(hh,{})})]}),i.jsx("div",{style:{marginTop:48,background:"white",borderRadius:20,padding:"18px 28px",display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:12,boxShadow:"0 4px 20px rgba(0,0,0,0.07)",border:"1px solid #e8f8eb",opacity:e?1:0,transform:e?"translateY(0)":"translateY(16px)",transition:"all 0.6s ease 0.35s"},children:r.map((s,o)=>i.jsxs("div",{style:{display:"flex",alignItems:"center",gap:9,flex:"1 1 140px",justifyContent:"center",padding:"4px 0",borderRight:o<r.length-1?"1px solid #e8f8eb":"none"},children:[i.jsx("div",{style:{width:34,height:34,borderRadius:"50%",background:"#e8f8eb",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:typeof s.icon=="function"&&s.icon.toString().includes("span")?i.jsx(s.icon,{}):i.jsx(s.icon,{size:16,color:"#2ebd3a"})}),i.jsxs("div",{children:[i.jsx("div",{style:{fontSize:10,color:"#11355e",opacity:.6},children:s.label}),i.jsx("div",{style:{fontSize:12.5,fontWeight:800,color:"#0B2545"},children:s.value})]})]},o))})]})]})}function xh(){return i.jsxs("section",{style:{background:"linear-gradient(135deg,#0B2545 0%,#2ebd3a 50%,#081c35 100%)",padding:"90px 0",overflow:"hidden",position:"relative"},children:[i.jsx("div",{style:{position:"absolute",inset:0,opacity:.07,backgroundImage:"radial-gradient(circle, #ffffff 1px, transparent 1px)",backgroundSize:"28px 28px",pointerEvents:"none"}}),i.jsx("div",{style:{maxWidth:1200,margin:"0 auto",padding:"0 24px",position:"relative",zIndex:1},children:i.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:60,alignItems:"center"},className:"nfc-grid",children:[i.jsx("div",{style:{display:"flex",justifyContent:"center"},children:i.jsxs("div",{style:{position:"relative",width:320,height:320},children:[[1,2,3].map(e=>i.jsx("div",{style:{position:"absolute",inset:0,borderRadius:"50%",border:"1.5px solid rgba(232, 248, 235,0.3)",animation:`nfcPulse ${1.6+e*.5}s ease-out ${e*.4}s infinite`}},e)),i.jsx("div",{style:{position:"absolute",inset:"60px",background:"linear-gradient(135deg,rgba(255,255,255,0.15),rgba(255,255,255,0.08))",backdropFilter:"blur(12px)",borderRadius:"50%",border:"1.5px solid rgba(255,255,255,0.2)",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 0 60px rgba(232, 248, 235,0.2)"},children:i.jsxs("div",{style:{textAlign:"center"},children:[i.jsx(Yn,{size:52,color:"#e8f8eb",strokeWidth:1.5}),i.jsx("div",{style:{color:"#e8f8eb",fontWeight:800,fontSize:14,marginTop:8},children:"NFC Ready"})]})}),[{top:"5%",left:"50%",label:"Tap to Scan",icon:i.jsx($a,{size:16,color:"#2ebd3a"})},{top:"50%",left:"5%",label:"Instant Alert",icon:i.jsx(ct,{size:16,color:"#2ebd3a"})},{bottom:"8%",right:"10%",label:"No App Needed",icon:i.jsx(fr,{size:16,color:"#2ebd3a"})}].map(({top:e,left:t,bottom:n,right:r,label:s,icon:o})=>i.jsxs("div",{style:{position:"absolute",top:e,left:t,bottom:n,right:r,transform:"translate(-50%,-50%)",background:"#e8f8eb",borderRadius:12,padding:"8px 14px",display:"flex",alignItems:"center",gap:8,fontSize:12,fontWeight:700,color:"#2ebd3a",boxShadow:"0 8px 24px rgba(6,78,59,0.3)",whiteSpace:"nowrap"},children:[o," ",s]},s))]})}),i.jsxs("div",{children:[i.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:8,padding:"8px 18px",borderRadius:100,background:"rgba(232, 248, 235,0.15)",border:"1px solid rgba(232, 248, 235,0.3)",marginBottom:20},children:[i.jsx(Yn,{size:14,color:"#e8f8eb"}),i.jsx("span",{style:{fontSize:13,fontWeight:700,color:"#e8f8eb"},children:"🔥 New Feature"})]}),i.jsxs("h2",{style:{fontSize:"clamp(28px,3.5vw,42px)",fontWeight:900,color:"#f8fafc",margin:"0 0 16px",lineHeight:1.1},children:["NFC Integration —",i.jsx("span",{style:{color:"#7ded88"},children:" Just Tap & Go"})]}),i.jsx("p",{style:{color:"rgba(232, 248, 235,0.85)",fontSize:16,lineHeight:1.7,marginBottom:32},children:"Every ScanForSafe tag now includes an NFC chip. No QR scan needed — just tap any NFC phone and the owner's details appear instantly. Faster than ever."}),i.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:14,marginBottom:32},children:[{icon:$a,title:"Tap Any Phone",sub:"Works on all modern NFC phones"},{icon:fr,title:"Instant Access",sub:"Under 0.5 seconds response time"},{icon:Pe,title:"No App Needed",sub:"Browser-based — works anywhere"},{icon:Ui,title:"Dual Mode",sub:"NFC tap + QR scan both work"}].map(({icon:e,title:t,sub:n})=>i.jsxs("div",{style:{background:"rgba(255,255,255,0.08)",backdropFilter:"blur(8px)",borderRadius:16,padding:"14px 16px",border:"1px solid rgba(255,255,255,0.1)"},children:[i.jsx(e,{size:20,color:"#7ded88",style:{marginBottom:8}}),i.jsx("div",{style:{color:"#f8fafc",fontWeight:700,fontSize:14,marginBottom:4},children:t}),i.jsx("div",{style:{color:"rgba(232, 248, 235,0.65)",fontSize:12},children:n})]},t))}),i.jsxs("div",{style:{background:"rgba(232, 248, 235,0.1)",border:"1px solid rgba(232, 248, 235,0.2)",borderRadius:16,padding:"16px 20px",display:"flex",alignItems:"center",gap:12},children:[i.jsx("div",{style:{width:44,height:44,borderRadius:12,background:"#e8f8eb",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:i.jsx(Yn,{size:22,color:"#2ebd3a"})}),i.jsxs("div",{children:[i.jsx("div",{style:{color:"#f8fafc",fontWeight:700,fontSize:14},children:"Available on all new tags"}),i.jsx("div",{style:{color:"rgba(232, 248, 235,0.7)",fontSize:12,marginTop:3},children:"Order a new ScanForSafe tag to get NFC + QR dual protection"})]})]})]})]})}),i.jsx("style",{children:`
        @keyframes nfcPulse {
          0%   { transform: scale(0.8); opacity: 0.8; }
          100% { transform: scale(1.8); opacity: 0; }
        }
        @media (max-width: 768px) {
          .nfc-grid { grid-template-columns: 1fr !important; }
        }
      `})]})}function mh(){return i.jsxs("section",{style:{background:"linear-gradient(180deg,#f8fafc 0%,#e8f8eb 100%)",padding:"90px 0"},children:[i.jsxs("div",{style:{maxWidth:1200,margin:"0 auto",padding:"0 24px"},children:[i.jsxs("div",{style:{textAlign:"center",marginBottom:52},children:[i.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:8,padding:"8px 20px",borderRadius:100,background:"#fff",border:"1.5px solid #e8f8eb",marginBottom:16,boxShadow:"0 2px 8px rgba(22,101,52,0.08)"},children:[i.jsx(qr,{size:14,color:"#2ebd3a",fill:"#2ebd3a"}),i.jsx("span",{style:{fontSize:13,fontWeight:700,color:"#2ebd3a"},children:"🆕 Senior Citizen Care"})]}),i.jsxs("h2",{style:{fontSize:"clamp(28px,4vw,44px)",fontWeight:900,color:"#0B2545",margin:"0 0 14px"},children:["Emergency Protection for",i.jsx("span",{style:{color:"#2ebd3a"},children:" Senior Citizens"})]}),i.jsx("p",{style:{color:"#4b7a62",fontSize:16,maxWidth:540,margin:"0 auto",lineHeight:1.7},children:"One scan gives responders instant access to medical details, blood group, and emergency contacts — no smartphone needed"})]}),i.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:48,alignItems:"center"},className:"senior-grid",children:[i.jsx("div",{style:{display:"flex",justifyContent:"center"},children:i.jsxs("div",{style:{background:"#fff",borderRadius:28,padding:28,maxWidth:360,width:"100%",boxShadow:"0 20px 60px rgba(6,78,59,0.12)",border:"1.5px solid #e8f8eb"},children:[i.jsxs("div",{style:{display:"flex",alignItems:"center",gap:14,marginBottom:24,paddingBottom:20,borderBottom:"1px solid #f8fafc"},children:[i.jsx("div",{style:{width:60,height:60,borderRadius:"50%",background:"linear-gradient(135deg,#2ebd3a,#0B2545)",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 8px 20px rgba(22,101,52,0.25)"},children:i.jsx(jo,{size:28,color:"#e8f8eb"})}),i.jsxs("div",{children:[i.jsx("div",{style:{fontWeight:800,fontSize:18,color:"#0B2545"},children:"Ramesh Nair"}),i.jsx("div",{style:{fontSize:13,color:"#6b7280",marginTop:2},children:"Age: 72 • Nellore, AP"}),i.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:4,marginTop:4,background:"#e8f8eb",borderRadius:6,padding:"2px 8px",fontSize:11,fontWeight:700,color:"#2ebd3a"},children:[i.jsx(Pe,{size:10})," Protected"]})]})]}),i.jsxs("div",{style:{marginBottom:18},children:[i.jsx("div",{style:{fontSize:11,fontWeight:800,color:"#9ca3af",textTransform:"uppercase",letterSpacing:"0.1em",marginBottom:10},children:"Medical Information"}),i.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8},children:[{label:"Blood Group",value:"B+",icon:i.jsx(C1,{size:13,color:"#ef4444"})},{label:"Condition",value:"Diabetic",icon:i.jsx(qr,{size:13,color:"#f97316"})},{label:"Allergies",value:"Penicillin",icon:i.jsx(Ha,{size:13,color:"#eab308"})},{label:"Doctor",value:"Dr. Reddy",icon:i.jsx(jo,{size:13,color:"#2ebd3a"})}].map(({label:e,value:t,icon:n})=>i.jsxs("div",{style:{background:"#f9fafb",borderRadius:10,padding:"10px 12px",border:"1px solid #f8fafc"},children:[i.jsxs("div",{style:{display:"flex",alignItems:"center",gap:5,marginBottom:4},children:[n,i.jsx("span",{style:{fontSize:10,color:"#9ca3af",fontWeight:600},children:e})]}),i.jsx("div",{style:{fontSize:13,fontWeight:700,color:"#11355e"},children:t})]},e))})]}),i.jsxs("div",{style:{marginBottom:18},children:[i.jsx("div",{style:{fontSize:11,fontWeight:800,color:"#9ca3af",textTransform:"uppercase",letterSpacing:"0.1em",marginBottom:10},children:"Emergency Contacts"}),[{name:"Suresh Nair (Son)",phone:"+91 98765XXXXX"},{name:"Lakshmi Nair (Daughter)",phone:"+91 87654XXXXX"}].map(e=>i.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"9px 12px",background:"#f8fafc",borderRadius:10,marginBottom:6},children:[i.jsx("span",{style:{fontSize:13,fontWeight:600,color:"#11355e"},children:e.name}),i.jsxs("button",{style:{padding:"4px 12px",borderRadius:8,background:"#2ebd3a",color:"#fff",fontSize:11,fontWeight:700,border:"none",cursor:"pointer",display:"flex",alignItems:"center",gap:4},children:[i.jsx(dn,{size:11})," Call"]})]},e.name))]}),i.jsxs("div",{style:{display:"flex",gap:8},children:[i.jsxs("div",{style:{flex:1,background:"linear-gradient(135deg,#0B2545,#2ebd3a)",borderRadius:12,padding:"12px 0",display:"flex",alignItems:"center",justifyContent:"center",gap:6},children:[i.jsx(Yn,{size:14,color:"#e8f8eb"}),i.jsx("span",{style:{fontSize:12,fontWeight:700,color:"#e8f8eb"},children:"NFC Tap"})]}),i.jsxs("div",{style:{flex:1,background:"#f8fafc",borderRadius:12,padding:"12px 0",display:"flex",alignItems:"center",justifyContent:"center",gap:6,border:"1px solid #e8f8eb"},children:[i.jsx(Ui,{size:14,color:"#2ebd3a"}),i.jsx("span",{style:{fontSize:12,fontWeight:700,color:"#2ebd3a"},children:"QR Scan"})]})]})]})}),i.jsx("div",{children:i.jsx("div",{style:{display:"flex",flexDirection:"column",gap:18},children:[{icon:qr,color:"#ef4444",bg:"#fef2f2",title:"Medical Profile",desc:"Blood group, conditions, allergies, medications, and doctor details — all accessible with one scan. Critical in emergencies."},{icon:Ha,color:"#f97316",bg:"#fff7ed",title:"Emergency Alert System",desc:"Tap or scan triggers an instant notification to all registered family members, with GPS location of the senior."},{icon:Yn,color:"#2ebd3a",bg:"#f8fafc",title:"NFC + QR Dual Support",desc:"Works with both NFC tap and QR code scan. No app required for responders — opens in any browser instantly."},{icon:Pe,color:"#2ebd3a",bg:"#e8f8eb",title:"Wristband & Wallet Card",desc:"Available as a waterproof wristband or wallet-size card. Comfortable for daily use by senior citizens."}].map(({icon:e,color:t,bg:n,title:r,desc:s})=>i.jsxs("div",{style:{display:"flex",gap:16,alignItems:"flex-start",background:"#fff",borderRadius:18,padding:"18px 20px",border:"1px solid #e8f8eb",boxShadow:"0 2px 12px rgba(22,101,52,0.07)"},children:[i.jsx("div",{style:{width:44,height:44,borderRadius:12,background:n,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:i.jsx(e,{size:20,color:t})}),i.jsxs("div",{children:[i.jsx("div",{style:{fontWeight:800,fontSize:15,color:"#0B2545",marginBottom:5},children:r}),i.jsx("div",{style:{fontSize:14,color:"#4b7a62",lineHeight:1.6},children:s})]})]},r))})})]})]}),i.jsx("style",{children:`
        @media (max-width: 768px) { .senior-grid { grid-template-columns: 1fr !important; } }
      `})]})}function yh(){return i.jsx("section",{style:{background:"#ffffff",padding:"90px 0"},children:i.jsxs("div",{style:{maxWidth:1200,margin:"0 auto",padding:"0 24px"},children:[i.jsxs("div",{style:{textAlign:"center",marginBottom:52},children:[i.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:8,padding:"8px 20px",borderRadius:100,background:"#e8f8eb",border:"1px solid #e8f8eb",marginBottom:16},children:[i.jsx(ki,{size:14,color:"#2ebd3a"}),i.jsx("span",{style:{fontSize:13,fontWeight:700,color:"#2ebd3a"},children:"Vehicle Protection"})]}),i.jsx("h2",{style:{fontSize:"clamp(26px,4vw,42px)",fontWeight:900,color:"#0B2545",margin:"0 0 12px"},children:"Vehicle Details & Protection"}),i.jsx("p",{style:{color:"#4b7a62",fontSize:16,maxWidth:500,margin:"0 auto",lineHeight:1.7},children:"Add your vehicle info once. Let the QR sticker do the rest — 24/7 protection, instant alerts, and GPS tracking"})]}),i.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(280px,1fr))",gap:20},children:[{icon:ki,title:"Vehicle Info",color:"#2ebd3a",bg:"#e8f8eb",items:["Registration Number","Make & Model","Color & Year","Insurance Details"]},{icon:Ot,title:"GPS Tracking",color:"#0891b2",bg:"#ecfeff",items:["Live scan location","Google Maps link","Scan history log","Last seen timestamp"]},{icon:ct,title:"Alert System",color:"#f97316",bg:"#fff7ed",items:["Instant app notification","WhatsApp for emergencies","SMS fallback alert","5 emergency contacts"]},{icon:Pe,title:"Security",color:"#2ebd3a",bg:"#f8fafc",items:["Tamper-evident sticker","Privacy controls","Anti-theft mode","QR + NFC dual layer"]}].map(({icon:e,title:t,color:n,bg:r,items:s})=>i.jsxs("div",{style:{background:"#fafafa",borderRadius:20,padding:"22px 22px 24px",border:"1px solid #e5e7eb",transition:"all 0.25s"},onMouseEnter:o=>{o.currentTarget.style.transform="translateY(-4px)",o.currentTarget.style.boxShadow="0 16px 40px rgba(22,101,52,0.1)",o.currentTarget.style.borderColor="#e8f8eb"},onMouseLeave:o=>{o.currentTarget.style.transform="",o.currentTarget.style.boxShadow="",o.currentTarget.style.borderColor="#e5e7eb"},children:[i.jsx("div",{style:{width:46,height:46,borderRadius:14,background:r,display:"flex",alignItems:"center",justifyContent:"center",marginBottom:14},children:i.jsx(e,{size:22,color:n})}),i.jsx("h3",{style:{margin:"0 0 12px",fontSize:17,fontWeight:800,color:"#0B2545"},children:t}),i.jsx("ul",{style:{margin:0,padding:0,listStyle:"none",display:"flex",flexDirection:"column",gap:8},children:s.map(o=>i.jsxs("li",{style:{display:"flex",alignItems:"center",gap:8,fontSize:13,color:"#374151"},children:[i.jsx("div",{style:{width:6,height:6,borderRadius:"50%",background:n,flexShrink:0}}),o]},o))})]},t))}),i.jsxs("div",{style:{marginTop:40,background:"linear-gradient(135deg,#0B2545,#2ebd3a)",borderRadius:24,padding:"32px 36px",display:"flex",alignItems:"center",gap:32,flexWrap:"wrap"},children:[i.jsxs("div",{style:{flex:1,minWidth:200},children:[i.jsx("div",{style:{color:"#7ded88",fontWeight:800,fontSize:13,marginBottom:8,letterSpacing:"0.05em"},children:"📏 OFFICIAL QR SIZE"}),i.jsx("h3",{style:{color:"#f8fafc",fontWeight:900,fontSize:"clamp(22px,3vw,34px)",margin:"0 0 8px"},children:"3.5 cm × 3.5 cm"}),i.jsx("p",{style:{color:"rgba(232, 248, 235,0.8)",fontSize:14,margin:0,lineHeight:1.6},children:"Optimized for bike fuel tanks and bag straps. Weather-proof, UV resistant, scan-able from 30cm away"})]}),i.jsx("div",{style:{display:"flex",gap:16,flexWrap:"wrap"},children:["🏍️ Bike Sticker","🎒 Bag Tag","🚗 Car Sticker"].map(e=>i.jsx("div",{style:{background:"rgba(232, 248, 235,0.15)",border:"1px solid rgba(232, 248, 235,0.3)",borderRadius:12,padding:"12px 18px",color:"#e8f8eb",fontSize:13,fontWeight:700},children:e},e))})]})]})})}function vh(){return i.jsxs(i.Fragment,{children:[i.jsx(dh,{}),i.jsx(fh,{}),i.jsx(Ru,{}),i.jsx(yh,{}),i.jsx(mh,{}),i.jsx(xh,{})]})}const bh=[{icon:dn,label:"Phone",value:"+91 XXXXX XXXXX",href:"tel:+91XXXXXXXXXX",color:"#0057b8",bg:"linear-gradient(135deg,#eff6ff,#dbeafe)",border:"#bfdbfe",emoji:"📞",desc:"Mon–Sat, 9am to 7pm"},{icon:Di,label:"WhatsApp",value:"Chat with us instantly",href:"https://wa.me/91XXXXXXXXXX",color:"#2ebd3a",bg:"linear-gradient(135deg,#f8fafc,#e8f8eb)",border:"#e8f8eb",emoji:"💬",desc:"Fastest — reply under 10 min"},{icon:Su,label:"Email",value:"hello@scanforsafe.in",href:"mailto:hello@scanforsafe.in",color:"#7c3aed",bg:"linear-gradient(135deg,#f8fafc,#ede9fe)",border:"#ddd6fe",emoji:"✉️",desc:"Reply within 2 business hours"},{icon:Ot,label:"Office",value:"Your City, State – 000000",href:null,color:"#e11d48",bg:"linear-gradient(135deg,#fff1f2,#ffe4e6)",border:"#fecdd3",emoji:"📍",desc:"Headquarters, India"}];function ws(e=.12){const t=b.useRef(null),[n,r]=b.useState(!1);return b.useEffect(()=>{const s=new IntersectionObserver(([o])=>{o.isIntersecting&&r(!0)},{threshold:e});return t.current&&s.observe(t.current),()=>s.disconnect()},[e]),[t,n]}function wh(e,t=1800,n=!1){const[r,s]=b.useState(0);return b.useEffect(()=>{if(!n)return;let o=null;const l=a=>{o||(o=a);const c=Math.min((a-o)/t,1),d=1-Math.pow(1-c,3);s(Math.floor(d*e)),c<1&&requestAnimationFrame(l)};requestAnimationFrame(l)},[n,e,t]),r}function ks({num:e,suffix:t,label:n,active:r,delay:s}){const o=wh(e,1600,r);return i.jsxs("div",{style:{textAlign:"center",opacity:r?1:0,transform:r?"translateY(0)":"translateY(20px)",transition:`opacity .6s ease ${s}s, transform .6s ease ${s}s`},children:[i.jsxs("div",{style:{fontFamily:"'Clash Display', 'Cabinet Grotesk', sans-serif",fontSize:28,fontWeight:800,color:"#fff",lineHeight:1,letterSpacing:"-0.04em"},children:[o,t]}),i.jsx("div",{style:{fontSize:11,color:"rgba(186,230,253,0.75)",fontWeight:600,marginTop:4,letterSpacing:".06em",textTransform:"uppercase"},children:n})]})}function kh(){const[e,t]=b.useState({name:"",email:"",phone:"",message:""}),[n,r]=b.useState(!1),[s,o]=b.useState(!1),[l,a]=b.useState(!1),[c,d]=ws(),[x,h]=ws(),[g,m]=ws(.3);b.useEffect(()=>{const j=setTimeout(()=>a(!0),80);return()=>clearTimeout(j)},[]);const v=j=>t({...e,[j.target.name]:j.target.value}),w=j=>{j.preventDefault(),o(!0),setTimeout(()=>{o(!1),r(!0)},1600)};return i.jsxs("div",{style:{fontFamily:"'Instrument Sans', 'Cabin', sans-serif",overflowX:"hidden"},children:[i.jsx("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),i.jsx("link",{href:"https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;500;600;700&family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,500;12..96,700;12..96,800&family=Fira+Code:wght@400;500&display=swap",rel:"stylesheet"}),i.jsx("style",{children:`
        /* ── Keyframes ── */
        @keyframes morphBlob {
          0%,100% { border-radius: 60% 40% 70% 30% / 50% 60% 40% 70%; }
          25%      { border-radius: 40% 60% 30% 70% / 60% 40% 70% 50%; }
          50%      { border-radius: 70% 30% 50% 50% / 40% 70% 30% 60%; }
          75%      { border-radius: 30% 70% 60% 40% / 70% 30% 60% 40%; }
        }
        @keyframes floatY {
          0%,100% { transform: translateY(0); }
          50%      { transform: translateY(-18px); }
        }
        @keyframes floatYSlow {
          0%,100% { transform: translateY(0) rotate(0deg); }
          50%      { transform: translateY(-26px) rotate(6deg); }
        }
        @keyframes scanBeam {
          0%   { top: -4px; opacity: 0; }
          8%   { opacity: 1; }
          92%  { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
        @keyframes glowPulse {
          0%,100% { opacity: .5; transform: scale(1); }
          50%      { opacity: 1; transform: scale(1.08); }
        }
        @keyframes badgeIn {
          from { opacity: 0; transform: translateY(-14px) scale(.9); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes titleIn {
          from { opacity: 0; transform: translateY(40px) skewY(2deg); }
          to   { opacity: 1; transform: translateY(0) skewY(0deg); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideRight {
          from { opacity: 0; transform: translateX(-30px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes checkPop {
          0%   { transform: scale(0) rotate(-30deg); opacity: 0; }
          65%  { transform: scale(1.2) rotate(5deg); }
          100% { transform: scale(1) rotate(0deg); opacity: 1; }
        }
        @keyframes ripple {
          0%   { transform: scale(1); opacity: .6; }
          100% { transform: scale(2.8); opacity: 0; }
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        @keyframes orbMove1 {
          0%,100% { transform: translate(0,0) scale(1); }
          33%      { transform: translate(60px,-40px) scale(1.1); }
          66%      { transform: translate(-30px,30px) scale(.95); }
        }
        @keyframes orbMove2 {
          0%,100% { transform: translate(0,0) scale(1); }
          33%      { transform: translate(-70px,30px) scale(1.05); }
          66%      { transform: translate(40px,-50px) scale(1.1); }
        }
        @keyframes lineGrow {
          from { width: 0; }
          to   { width: 64px; }
        }
        @keyframes cardHoverShine {
          from { left: -100%; }
          to   { left: 150%; }
        }
        @keyframes dotBlink {
          0%,100% { opacity: 1; }
          50%      { opacity: .3; }
        }

        /* ── Field styles ── */
        .cf-field { position: relative; }
        .cf-field label {
          display: block;
          font-family: 'Fira Code', monospace;
          font-size: 10.5px; font-weight: 500;
          letter-spacing: .14em; text-transform: uppercase;
          color: #64748b; margin-bottom: 7px;
          transition: color .2s;
        }
        .cf-field:focus-within label { color: #0057b8; }
        .cf-input {
          width: 100%; border: 2px solid #e2e8f0; border-radius: 14px;
          padding: 13px 16px; font-size: 14px; font-weight: 500;
          color: #0B2545; background: #f8fafc; outline: none;
          font-family: 'Instrument Sans', sans-serif;
          transition: all .25s cubic-bezier(.4,0,.2,1);
          box-sizing: border-box;
        }
        .cf-input::placeholder { color: #94a3b8; font-weight: 400; }
        .cf-input:focus {
          border-color: #0057b8; background: #fff;
          box-shadow: 0 0 0 4px rgba(0,87,184,0.10);
          transform: translateY(-2px);
        }

        /* ── Info card ── */
        .cf-info-card {
          position: relative; overflow: hidden;
          border-radius: 18px; padding: 18px 20px;
          border-width: 1.5px; border-style: solid;
          display: flex; align-items: flex-start; gap: 15px;
          cursor: default;
          transition: transform .3s cubic-bezier(.34,1.3,.64,1),
                      box-shadow .3s ease;
        }
        .cf-info-card::before {
          content: '';
          position: absolute; top: 0; left: -100%; width: 60%; height: 100%;
          background: linear-gradient(105deg, transparent, rgba(255,255,255,0.6), transparent);
          transition: left .5s ease;
        }
        .cf-info-card:hover { transform: translateY(-5px) scale(1.01); box-shadow: 0 18px 48px rgba(0,0,0,0.10); }
        .cf-info-card:hover::before { left: 150%; }

        /* ── Submit button ── */
        .cf-submit {
          width: 100%; padding: 16px; border-radius: 14px;
          background: linear-gradient(135deg, #0057b8 0%, #003580 100%);
          color: white; font-size: 15px; font-weight: 700;
          border: none; cursor: pointer;
          display: flex; align-items: center; justify-content: center; gap: 9px;
          transition: all .25s ease; position: relative; overflow: hidden;
          font-family: 'Instrument Sans', sans-serif;
          letter-spacing: .02em;
        }
        .cf-submit::after {
          content: '';
          position: absolute; inset: 0;
          background: linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.15) 50%, transparent 60%);
          background-size: 200% 100%; background-position: -200% center;
          transition: background-position .6s ease;
        }
        .cf-submit:not(:disabled):hover {
          transform: translateY(-2px);
          box-shadow: 0 14px 40px rgba(0,87,184,0.40);
        }
        .cf-submit:not(:disabled):hover::after { background-position: 200% center; }
        .cf-submit:disabled { opacity: .65; cursor: not-allowed; }
      `}),i.jsxs("section",{style:{position:"relative",overflow:"hidden",minHeight:520,paddingTop:110,paddingBottom:80,background:"linear-gradient(150deg, #020c1b 0%, #0a1f44 40%, #003d80 80%, #0057b8 100%)",display:"flex",alignItems:"center",justifyContent:"center"},children:[i.jsx("div",{style:{position:"absolute",width:560,height:560,borderRadius:"50%",background:"radial-gradient(circle, rgba(46, 189, 58,0.18) 0%, transparent 65%)",top:-180,right:-120,animation:"orbMove1 14s ease-in-out infinite",pointerEvents:"none"}}),i.jsx("div",{style:{position:"absolute",width:480,height:480,borderRadius:"50%",background:"radial-gradient(circle, rgba(0,87,184,0.30) 0%, transparent 65%)",bottom:-160,left:-100,animation:"orbMove2 18s ease-in-out infinite",pointerEvents:"none"}}),i.jsx("div",{style:{position:"absolute",inset:0,pointerEvents:"none",backgroundImage:"radial-gradient(rgba(255,255,255,0.07) 1px, transparent 1px)",backgroundSize:"32px 32px"}}),i.jsx("div",{style:{position:"absolute",inset:0,overflow:"hidden",pointerEvents:"none"},children:i.jsx("div",{style:{position:"absolute",left:0,right:0,height:3,background:"linear-gradient(90deg, transparent 0%, rgba(74,222,128,0.0) 15%, rgba(74,222,128,0.9) 50%, rgba(74,222,128,0.0) 85%, transparent 100%)",animation:"scanBeam 4s ease-in-out infinite",filter:"blur(1px)"}})}),i.jsx("div",{style:{position:"absolute",top:70,left:"7%",width:64,height:64,border:"2px solid rgba(74,222,128,0.25)",borderRadius:16,transform:"rotate(15deg)",animation:"floatYSlow 6s ease-in-out infinite",pointerEvents:"none"}}),i.jsx("div",{style:{position:"absolute",bottom:80,right:"8%",width:44,height:44,border:"2px solid rgba(99,179,237,0.2)",borderRadius:"50%",animation:"floatY 5s ease-in-out infinite",pointerEvents:"none"}}),i.jsx("div",{style:{position:"absolute",top:120,right:"18%",width:28,height:28,background:"rgba(74,222,128,0.12)",borderRadius:8,transform:"rotate(30deg)",animation:"floatYSlow 7s ease-in-out .5s infinite",pointerEvents:"none"}}),i.jsxs("div",{style:{position:"relative",zIndex:2,textAlign:"center",padding:"0 24px",maxWidth:680},children:[i.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:9,background:"rgba(46, 189, 58,0.14)",border:"1.5px solid rgba(74,222,128,0.35)",borderRadius:99,padding:"8px 20px",marginBottom:28,opacity:l?1:0,transform:l?"translateY(0) scale(1)":"translateY(-16px) scale(.9)",transition:"opacity .7s cubic-bezier(.34,1.3,.64,1), transform .7s cubic-bezier(.34,1.3,.64,1)",fontFamily:"'Fira Code', monospace"},children:[i.jsxs("span",{style:{position:"relative",display:"inline-block",width:8,height:8},children:[i.jsx("span",{style:{position:"absolute",inset:0,borderRadius:"50%",background:"#4bd557",animation:"ripple 1.6s ease-out infinite"}}),i.jsx("span",{style:{position:"absolute",inset:0,borderRadius:"50%",background:"#4bd557"}})]}),i.jsx("span",{style:{fontSize:11,fontWeight:500,color:"#7ded88",letterSpacing:".1em"},children:"team.online • avg_reply < 10min"})]}),i.jsxs("h1",{style:{fontFamily:"'Bricolage Grotesque', sans-serif",fontSize:"clamp(2.4rem, 5.5vw, 4rem)",fontWeight:800,color:"#fff",lineHeight:1.08,letterSpacing:"-0.04em",margin:"0 0 22px",opacity:l?1:0,transform:l?"translateY(0) skewY(0deg)":"translateY(40px) skewY(2deg)",transition:"opacity .75s ease .12s, transform .75s cubic-bezier(.34,1.3,.64,1) .12s"},children:["Talk to a",i.jsx("br",{}),i.jsx("span",{style:{background:"linear-gradient(90deg, #4bd557 0%, #7ded88 50%, #4bd557 100%)",backgroundSize:"200% auto",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",animation:l?"glowPulse 3s ease-in-out infinite":"none",display:"inline-block"},children:"Real Human"})]}),i.jsx("p",{style:{fontFamily:"'Instrument Sans', sans-serif",fontSize:16.5,color:"rgba(186,230,253,0.85)",lineHeight:1.75,maxWidth:500,margin:"0 auto 40px",opacity:l?1:0,transform:l?"translateY(0)":"translateY(24px)",transition:"opacity .7s ease .26s, transform .7s ease .26s"},children:"Questions about your QR tag, bulk orders, or just need help with setup? We're right here — real people, real fast replies."}),i.jsxs("div",{ref:g,style:{display:"flex",alignItems:"center",justifyContent:"center",gap:48,paddingTop:28,borderTop:"1px solid rgba(255,255,255,0.08)"},children:[i.jsx(ks,{num:10,suffix:" min",label:"WhatsApp reply",active:m,delay:0}),i.jsx("div",{style:{width:1,height:32,background:"rgba(255,255,255,0.1)"}}),i.jsx(ks,{num:2,suffix:" hrs",label:"Email response",active:m,delay:.15}),i.jsx("div",{style:{width:1,height:32,background:"rgba(255,255,255,0.1)"}}),i.jsx(ks,{num:1e4,suffix:"+",label:"Happy users",active:m,delay:.3})]})]}),i.jsx("div",{style:{position:"absolute",bottom:0,left:0,right:0,pointerEvents:"none"},children:i.jsx("svg",{viewBox:"0 0 1440 72",xmlns:"http://www.w3.org/2000/svg",style:{display:"block"},children:i.jsx("path",{d:"M0,48 C240,80 480,16 720,40 C960,64 1200,24 1440,48 L1440,72 L0,72 Z",fill:"#f1f5f9"})})})]}),i.jsx("section",{style:{background:"#f1f5f9",padding:"68px 24px 88px"},children:i.jsx("div",{style:{maxWidth:1100,margin:"0 auto"},children:i.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1.65fr",gap:36,alignItems:"start"},children:[i.jsxs("div",{ref:x,children:[i.jsxs("div",{style:{opacity:h?1:0,transform:h?"translateX(0)":"translateX(-24px)",transition:"opacity .55s ease, transform .55s ease",marginBottom:28},children:[i.jsxs("span",{style:{fontFamily:"'Fira Code', monospace",fontSize:10,fontWeight:500,letterSpacing:".18em",textTransform:"uppercase",color:"#0057b8",display:"flex",alignItems:"center",gap:8,marginBottom:10},children:[i.jsx("span",{style:{width:20,height:1.5,background:"#0057b8",display:"inline-block"}}),"contact channels"]}),i.jsxs("h2",{style:{fontFamily:"'Bricolage Grotesque', sans-serif",fontSize:26,fontWeight:800,color:"#0B2545",letterSpacing:"-0.03em",margin:"0 0 10px"},children:["Reach Us",i.jsx("br",{}),"Your Way"]}),i.jsx("p",{style:{fontSize:14,color:"#64748b",lineHeight:1.75,fontWeight:400},children:"WhatsApp gets you the fastest reply. For detailed queries, email works great too."})]}),i.jsx("div",{style:{display:"flex",flexDirection:"column",gap:12},children:bh.map(({icon:j,label:f,value:u,href:p,color:y,bg:S,border:E,emoji:P,desc:R},A)=>i.jsxs("div",{className:"cf-info-card",style:{background:S,borderColor:E,opacity:h?1:0,transform:h?"translateX(0)":"translateX(-28px)",transition:`opacity .5s ease ${A*.1+.1}s, transform .5s cubic-bezier(.34,1.3,.64,1) ${A*.1+.1}s, box-shadow .3s ease, transform .3s ease`},children:[i.jsx("div",{style:{width:48,height:48,borderRadius:14,background:"rgba(255,255,255,0.7)",flexShrink:0,display:"flex",alignItems:"center",justifyContent:"center",fontSize:20,boxShadow:"0 2px 8px rgba(0,0,0,0.06)",border:`1.5px solid ${E}`},children:P}),i.jsxs("div",{style:{flex:1},children:[i.jsxs("div",{style:{fontFamily:"'Fira Code', monospace",fontSize:9.5,fontWeight:500,letterSpacing:".14em",textTransform:"uppercase",color:y,marginBottom:3,display:"flex",alignItems:"center",gap:5},children:[i.jsx("span",{style:{width:14,height:1.5,background:y,display:"inline-block"}}),f]}),p?i.jsx("a",{href:p,style:{fontFamily:"'Instrument Sans', sans-serif",fontSize:14,fontWeight:700,color:"#0B2545",textDecoration:"none",display:"block",marginBottom:3,transition:"color .2s"},onMouseEnter:L=>L.target.style.color=y,onMouseLeave:L=>L.target.style.color="#0B2545",children:u}):i.jsx("div",{style:{fontFamily:"'Instrument Sans', sans-serif",fontSize:14,fontWeight:700,color:"#0B2545",marginBottom:3},children:u}),i.jsx("div",{style:{fontSize:11.5,color:"#94a3b8",fontWeight:400},children:R})]})]},f))}),i.jsxs("div",{style:{marginTop:18,padding:"14px 18px",borderRadius:14,background:"linear-gradient(135deg,#f8fafc,#e8f8eb)",border:"1.5px solid #e8f8eb",display:"flex",alignItems:"center",gap:10,opacity:h?1:0,transform:h?"translateY(0)":"translateY(12px)",transition:"opacity .5s ease .55s, transform .5s ease .55s"},children:[i.jsxs("div",{style:{position:"relative",flexShrink:0},children:[i.jsx("div",{style:{width:8,height:8,borderRadius:"50%",background:"#2ebd3a"}}),i.jsx("div",{style:{position:"absolute",inset:-3,borderRadius:"50%",border:"1.5px solid rgba(46, 189, 58,0.3)",animation:"ripple 2s ease-out infinite"}})]}),i.jsx("span",{style:{fontFamily:"'Instrument Sans', sans-serif",fontSize:12.5,fontWeight:600,color:"#0B2545"},children:"We always reply within 2 business hours — guaranteed."})]})]}),i.jsx("div",{ref:c,style:{background:"white",borderRadius:26,padding:"40px 38px",boxShadow:"0 24px 64px rgba(0,40,120,0.10), 0 4px 16px rgba(0,40,120,0.05)",border:"1.5px solid #e8edf3",opacity:d?1:0,transform:d?"translateY(0)":"translateY(36px)",transition:"opacity .65s ease .1s, transform .65s cubic-bezier(.34,1.3,.64,1) .1s"},children:n?i.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"44px 0",textAlign:"center"},children:[i.jsx("div",{style:{width:88,height:88,borderRadius:"50%",background:"linear-gradient(135deg,#f8fafc,#e8f8eb)",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:22,border:"2px solid #e8f8eb",animation:"checkPop .65s cubic-bezier(.34,1.3,.64,1) both",boxShadow:"0 0 0 8px rgba(46, 189, 58,0.08)"},children:i.jsx(bo,{style:{width:40,height:40,color:"#2ebd3a"}})}),i.jsx("h3",{style:{fontFamily:"'Bricolage Grotesque', sans-serif",fontSize:28,fontWeight:800,color:"#0B2545",letterSpacing:"-0.03em",marginBottom:12},children:"Message Sent! 🎉"}),i.jsx("p",{style:{fontSize:14.5,color:"#64748b",lineHeight:1.8,maxWidth:340},children:"We've got your message and will reply within 2 hours. Check your inbox for a confirmation shortly."}),i.jsxs("div",{style:{marginTop:24,padding:"12px 28px",borderRadius:12,background:"linear-gradient(135deg,#f8fafc,#e8f8eb)",border:"1.5px solid #e8f8eb",fontFamily:"'Instrument Sans', sans-serif",fontSize:13.5,fontWeight:700,color:"#0B2545"},children:["Thanks, ",e.name||"friend","! We'll be in touch 👋"]})]}):i.jsxs(i.Fragment,{children:[i.jsxs("div",{style:{marginBottom:30},children:[i.jsx("div",{style:{display:"inline-flex",alignItems:"center",gap:7,background:"#eff6ff",border:"1px solid #bfdbfe",borderRadius:99,padding:"5px 14px",marginBottom:14},children:i.jsx("span",{style:{fontFamily:"'Fira Code', monospace",fontSize:10,fontWeight:500,color:"#0057b8",letterSpacing:".1em"},children:">_ send_message.tsx"})}),i.jsxs("h2",{style:{fontFamily:"'Bricolage Grotesque', sans-serif",fontSize:25,fontWeight:800,color:"#0B2545",letterSpacing:"-0.03em",margin:0},children:["We'd Love to Hear",i.jsx("br",{}),"From You"]}),i.jsx("div",{style:{height:3,borderRadius:99,marginTop:10,background:"linear-gradient(90deg, #0057b8, #2ebd3a)",animation:d?"lineGrow .8s cubic-bezier(.34,1.3,.64,1) .4s both":"none"}})]}),i.jsxs("form",{onSubmit:w,style:{display:"flex",flexDirection:"column",gap:18},children:[i.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16},children:[i.jsxs("div",{className:"cf-field",children:[i.jsx("label",{children:"Full Name *"}),i.jsx("input",{type:"text",name:"name",required:!0,value:e.name,onChange:v,placeholder:"Rahul Sharma",className:"cf-input"})]}),i.jsxs("div",{className:"cf-field",children:[i.jsx("label",{children:"Phone"}),i.jsx("input",{type:"tel",name:"phone",value:e.phone,onChange:v,placeholder:"+91 XXXXX XXXXX",className:"cf-input"})]})]}),i.jsxs("div",{className:"cf-field",children:[i.jsx("label",{children:"Email Address *"}),i.jsx("input",{type:"email",name:"email",required:!0,value:e.email,onChange:v,placeholder:"rahul@example.com",className:"cf-input"})]}),i.jsxs("div",{className:"cf-field",children:[i.jsx("label",{children:"Message *"}),i.jsx("textarea",{name:"message",required:!0,rows:5,value:e.message,onChange:v,placeholder:"Tell us how we can help — setup, bulk orders, feedback...",className:"cf-input",style:{resize:"none"}})]}),i.jsx("button",{type:"submit",disabled:s,className:"cf-submit",children:s?i.jsxs(i.Fragment,{children:[i.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"white",strokeWidth:"2.5",strokeLinecap:"round",style:{animation:"spin 1s linear infinite",flexShrink:0},children:i.jsx("path",{d:"M21 12a9 9 0 1 1-6.219-8.56"})}),"Sending your message..."]}):i.jsxs(i.Fragment,{children:[i.jsx(Nu,{style:{width:16,height:16,flexShrink:0}}),"Send Message"]})}),i.jsx("p",{style:{textAlign:"center",fontFamily:"'Fira Code', monospace",fontSize:10.5,color:"#94a3b8",fontWeight:400,letterSpacing:".04em"},children:"🔒 encrypted • never shared • gdpr safe"})]})]})})]})})})]})}function jh(){return i.jsxs("div",{className:"pt-20 min-h-screen bg-light-bg",children:[i.jsxs("div",{className:"hero-gradient py-16 text-white text-center",children:[i.jsx("h1",{className:"font-display font-extrabold text-4xl mb-4",children:"Privacy Policy"}),i.jsx("p",{className:"text-blue-200",children:"Last updated: January 2025"})]}),i.jsx("div",{className:"max-w-3xl mx-auto px-4 sm:px-6 py-16",children:i.jsx("div",{className:"bg-white rounded-2xl shadow-sm border border-slate-100 p-8 md:p-12 space-y-8",children:[{title:"1. Information We Collect",content:"We collect information you provide directly to us when registering your QR tag, such as your name, phone number, email address, emergency contact details, and any additional information you choose to include in your QR profile. We also collect scan data including time, date, and approximate GPS location whenever your QR tag is scanned."},{title:"2. How We Use Your Information",content:"Your personal information is used solely to operate the ScanForSafe service — enabling finders to contact you and sending you real-time notifications. We do not sell, rent, or share your personal data with third parties for marketing purposes."},{title:"3. Data Shared When QR is Scanned",content:"When someone scans your QR code, they see only the information you have chosen to make visible in your profile settings. Your full phone number, email, and private details are protected by default — finders interact through our secure relay system."},{title:"4. Data Security",content:"We use industry-standard encryption (SSL/TLS) to protect your data in transit and at rest. Access to personal data is restricted to authorised team members only, and we conduct regular security audits of our systems."},{title:"5. Data Retention",content:"We retain your personal data for as long as your account is active. You may request deletion of your account and associated data at any time by contacting us at hello@scanforsafe.in. Scan logs are retained for 12 months for your reference."},{title:"6. Your Rights",content:"You have the right to access, correct, or delete your personal information at any time through your account dashboard or by contacting our support team. You may also opt out of non-essential communications at any time."},{title:"7. Contact Us",content:"If you have questions about this Privacy Policy or how we handle your data, please contact us at hello@scanforsafe.in or reach us on WhatsApp."}].map(({title:e,content:t})=>i.jsxs("div",{children:[i.jsx("h2",{className:"font-display font-bold text-lg text-dark-blue mb-2",children:e}),i.jsx("p",{className:"text-slate-600 text-sm leading-relaxed",children:t})]},e))})})]})}function Sh(){return i.jsxs("div",{className:"pt-20 min-h-screen bg-light-bg",children:[i.jsxs("div",{className:"hero-gradient py-16 text-white text-center",children:[i.jsx("h1",{className:"font-display font-extrabold text-4xl mb-4",children:"Terms & Conditions"}),i.jsx("p",{className:"text-blue-200",children:"Last updated: January 2025"})]}),i.jsx("div",{className:"max-w-3xl mx-auto px-4 sm:px-6 py-16",children:i.jsx("div",{className:"bg-white rounded-2xl shadow-sm border border-slate-100 p-8 md:p-12 space-y-8",children:[{title:"1. Acceptance of Terms",content:"By purchasing and using any ScanForSafe product or service, you agree to these Terms and Conditions. If you do not agree to these terms, please do not use our products or services."},{title:"2. Product Usage",content:"ScanForSafe QR tags are intended for legitimate personal use — protecting your own pets, vehicles, and personal belongings. You must not use our products to track individuals without their knowledge or consent, or for any unlawful purpose."},{title:"3. Account Responsibility",content:"You are responsible for maintaining the accuracy of your profile information and keeping your account credentials secure. You are responsible for all activity that occurs under your account and must notify us immediately of any unauthorised access."},{title:"4. Service Availability",content:"While we strive to maintain 24/7 availability, ScanForSafe does not guarantee uninterrupted service. Planned maintenance, unforeseen technical issues, or force majeure events may temporarily affect service availability."},{title:"5. Refund Policy",content:"We offer a 30-day satisfaction guarantee on all physical QR tag products. If you are unsatisfied with your purchase, contact us within 30 days of delivery for a full refund. Digital activation services are non-refundable once activated."},{title:"6. Limitation of Liability",content:"ScanForSafe provides tools to improve the chances of item recovery and emergency contact. We do not guarantee recovery of any lost item or animal, and shall not be liable for any direct, indirect, or consequential loss arising from use or inability to use our service."},{title:"7. Changes to Terms",content:"We reserve the right to update these terms at any time. Continued use of the service after changes constitutes acceptance of the new terms. We will notify registered users of material changes by email."},{title:"8. Contact",content:"For any questions regarding these Terms and Conditions, please contact us at hello@scanforsafe.in."}].map(({title:e,content:t})=>i.jsxs("div",{children:[i.jsx("h2",{className:"font-display font-bold text-lg text-dark-blue mb-2",children:e}),i.jsx("p",{className:"text-slate-600 text-sm leading-relaxed",children:t})]},e))})})]})}function Ch(){return i.jsxs(i.Fragment,{children:[i.jsx("div",{style:{position:"fixed",bottom:"100px",right:"22px",width:"70px",height:"70px",borderRadius:"9999px",background:"rgba(37,211,102,0.18)",filter:"blur(18px)",zIndex:40}}),i.jsx("div",{style:{position:"fixed",bottom:"22px",right:"22px",width:"70px",height:"70px",borderRadius:"9999px",background:"rgba(37,99,235,0.18)",filter:"blur(18px)",zIndex:40}}),i.jsxs("a",{href:"https://wa.me/919999999999",target:"_blank",rel:"noreferrer","aria-label":"Chat on WhatsApp",style:{position:"fixed",bottom:"96px",right:"24px",zIndex:50,width:"62px",height:"62px",borderRadius:"9999px",background:"linear-gradient(135deg, #2ebd3a 0%, #249e30 100%)",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 12px 30px rgba(37,211,102,0.35), inset 0 1px 0 rgba(255,255,255,0.3)",textDecoration:"none",transition:"all 0.35s ease",overflow:"hidden",backdropFilter:"blur(10px)",animation:"float 3s ease-in-out infinite"},onMouseEnter:e=>{e.currentTarget.style.transform="translateY(-4px) scale(1.08)"},onMouseLeave:e=>{e.currentTarget.style.transform="translateY(0) scale(1)"},children:[i.jsx("div",{style:{position:"absolute",width:"120%",height:"40%",background:"linear-gradient(to right, transparent, rgba(255,255,255,0.4), transparent)",transform:"rotate(-25deg)",top:"-20%",left:"-120%",animation:"shine 3s infinite"}}),i.jsx(D1,{size:26,color:"white",strokeWidth:2.5}),i.jsx("span",{style:{position:"absolute",top:"8px",right:"8px",width:"12px",height:"12px",borderRadius:"9999px",background:"#fff",border:"2px solid #2ebd3a"}})]}),i.jsxs(Ue,{to:"/contact","aria-label":"Send us a message",style:{position:"fixed",bottom:"24px",right:"24px",zIndex:50,width:"62px",height:"62px",borderRadius:"9999px",background:"linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 12px 30px rgba(37,99,235,0.35), inset 0 1px 0 rgba(255,255,255,0.3)",textDecoration:"none",transition:"all 0.35s ease",overflow:"hidden",backdropFilter:"blur(10px)",animation:"float 3s ease-in-out infinite"},onMouseEnter:e=>{e.currentTarget.style.transform="translateY(-4px) scale(1.08)"},onMouseLeave:e=>{e.currentTarget.style.transform="translateY(0) scale(1)"},children:[i.jsx("div",{style:{position:"absolute",width:"120%",height:"40%",background:"linear-gradient(to right, transparent, rgba(255,255,255,0.4), transparent)",transform:"rotate(-25deg)",top:"-20%",left:"-120%",animation:"shine 3s infinite"}}),i.jsx(Di,{size:28,color:"white",strokeWidth:2.5}),i.jsx("div",{style:{position:"absolute",top:"7px",right:"7px",display:"flex",alignItems:"center",justifyContent:"center"},children:i.jsx(Eu,{size:14,color:"#fff"})})]}),i.jsxs("div",{style:{position:"fixed",bottom:"180px",right:"18px",zIndex:45,background:"rgba(11, 37, 69,0.92)",color:"#fff",padding:"10px 14px",borderRadius:"9999px",display:"flex",alignItems:"center",gap:"8px",fontSize:"13px",fontWeight:600,boxShadow:"0 8px 24px rgba(0,0,0,0.18)",backdropFilter:"blur(10px)"},children:["Need Help?",i.jsx(x1,{size:16})]}),i.jsx("style",{children:`
          @keyframes float {
            0% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-4px);
            }
            100% {
              transform: translateY(0px);
            }
          }

          @keyframes shine {
            0% {
              left: -120%;
            }
            100% {
              left: 120%;
            }
          }
        `})]})}const zh=[{id:"whatsapp",icon:i.jsxs("svg",{viewBox:"0 0 32 32",width:"28",height:"28",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[i.jsx("path",{d:"M16 2C8.268 2 2 8.268 2 16c0 2.478.649 4.8 1.785 6.813L2 30l7.38-1.763A13.94 13.94 0 0 0 16 30c7.732 0 14-6.268 14-14S23.732 2 16 2z",fill:"#2ebd3a"}),i.jsx("path",{d:"M22.003 19.178c-.306-.153-1.81-.893-2.09-.995-.28-.102-.484-.153-.688.153-.204.306-.79.995-.969 1.2-.178.204-.357.23-.663.077-.306-.154-1.292-.476-2.46-1.517-.91-.811-1.524-1.813-1.702-2.119-.178-.306-.019-.471.134-.623.137-.136.306-.357.459-.536.153-.178.204-.306.306-.51.102-.204.051-.383-.025-.536-.077-.153-.688-1.66-.942-2.272-.248-.597-.5-.516-.688-.526l-.587-.01c-.204 0-.536.077-.816.383-.28.306-1.07 1.046-1.07 2.552 0 1.506 1.096 2.961 1.249 3.165.153.204 2.156 3.292 5.224 4.617.73.315 1.3.503 1.744.644.733.233 1.4.2 1.927.121.588-.088 1.81-.74 2.065-1.455.255-.714.255-1.326.178-1.454-.076-.128-.28-.204-.586-.357z",fill:"#fff"})]}),iconBg:"#E8F8EF",accent:"#2ebd3a",accentDark:"#2ebd3a",dotColor:"#e8f8eb",cardBg:"linear-gradient(145deg,#ffffff 55%,#f8fafc 100%)",activeBg:"linear-gradient(145deg,#f8fafc 0%,#e8f8eb 100%)",tag:"Most Loved",title:"WhatsApp Notifications",desc:"Get instant WhatsApp alerts the moment anyone scans your QR tag — with GPS location and a direct call option.",pills:["Instant Alert","GPS Included","No App Needed"]},{id:"call",icon:i.jsx("svg",{viewBox:"0 0 24 24",width:"26",height:"26",fill:"none",stroke:"#4f46e5",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:i.jsx("path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.07 11 19.79 19.79 0 0 1 1 2.38 2 2 0 0 1 2.98.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 8.09a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.1 15.1z"})}),iconBg:"#f8fafc",accent:"#4f46e5",accentDark:"#3730a3",dotColor:"#c7d2fe",cardBg:"linear-gradient(145deg,#ffffff 55%,#f8fafc 100%)",activeBg:"linear-gradient(145deg,#f8fafc 0%,#e0e7ff 100%)",tag:"Zero Friction",title:"One-Touch Call Connect",desc:"Finders call you in one tap — no app, no sign-up. Works even from a basic feature phone.",pills:["One Tap","No Sign-up","Any Phone"]},{id:"contacts",icon:i.jsxs("svg",{viewBox:"0 0 24 24",width:"26",height:"26",fill:"none",stroke:"#7c3aed",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[i.jsx("path",{d:"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}),i.jsx("circle",{cx:"9",cy:"7",r:"4"}),i.jsx("path",{d:"M23 21v-2a4 4 0 0 0-3-3.87"}),i.jsx("path",{d:"M16 3.13a4 4 0 0 1 0 7.75"})]}),iconBg:"#F3F0FF",accent:"#7c3aed",accentDark:"#5b21b6",dotColor:"#ddd6fe",cardBg:"linear-gradient(145deg,#ffffff 55%,#f8fafc 100%)",activeBg:"linear-gradient(145deg,#f8fafc 0%,#ede9fe 100%)",tag:"Family Ready",title:"Up to 5 Emergency Contacts",desc:"Add family, friends or your vet. If the first contact misses it, the next is notified automatically.",pills:["5 Contacts","Auto Fallback","5-Min Retry"]},{id:"gps",icon:i.jsxs("svg",{viewBox:"0 0 24 24",width:"26",height:"26",fill:"none",stroke:"#2ebd3a",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[i.jsx("path",{d:"M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"}),i.jsx("circle",{cx:"12",cy:"10",r:"3"})]}),iconBg:"#E8F8EF",accent:"#2ebd3a",accentDark:"#081c35",dotColor:"#e8f8eb",cardBg:"linear-gradient(145deg,#ffffff 55%,#f8fafc 100%)",activeBg:"linear-gradient(145deg,#f8fafc 0%,#e8f8eb 100%)",tag:"Smart",title:"GPS Location on Scan",desc:"Every scan captures precise GPS coordinates and sends you a live Maps link to find your item fast.",pills:["Live GPS","Maps Link","Real-Time"]},{id:"setup",icon:i.jsx("svg",{viewBox:"0 0 24 24",width:"26",height:"26",fill:"none",stroke:"#d97706",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:i.jsx("polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2"})}),iconBg:"#FFFBEB",accent:"#f59e0b",accentDark:"#b45309",dotColor:"#fde68a",cardBg:"linear-gradient(145deg,#ffffff 55%,#fffbeb 100%)",activeBg:"linear-gradient(145deg,#fffbeb 0%,#fef3c7 100%)",tag:"3 Minutes",title:"Instant Activation",desc:"Peel, stick and you are protected. Register your tag in under 3 minutes — no technical knowledge needed.",pills:["Under 3 Min","Guided Setup","Instant Live"]},{id:"privacy",icon:i.jsxs("svg",{viewBox:"0 0 24 24",width:"26",height:"26",fill:"none",stroke:"#e11d48",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[i.jsx("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2",ry:"2"}),i.jsx("path",{d:"M7 11V7a5 5 0 0 1 10 0v4"})]}),iconBg:"#FFF1F2",accent:"#f43f5e",accentDark:"#9f1239",dotColor:"#fecdd3",cardBg:"linear-gradient(145deg,#ffffff 55%,#fff1f2 100%)",activeBg:"linear-gradient(145deg,#fff1f2 0%,#ffe4e6 100%)",tag:"Privacy First",title:"Your Info Stays Hidden",desc:"Your phone number is never on the tag. The QR links to a secure proxy — finders see only what you allow.",pills:["Encrypted","No Personal Data","GDPR Safe"]},{id:"history",icon:i.jsxs("svg",{viewBox:"0 0 24 24",width:"26",height:"26",fill:"none",stroke:"#2563eb",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[i.jsx("path",{d:"M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"}),i.jsx("path",{d:"M13.73 21a2 2 0 0 1-3.46 0"})]}),iconBg:"#EFF6FF",accent:"#3b82f6",accentDark:"#1d4ed8",dotColor:"#bfdbfe",cardBg:"linear-gradient(145deg,#ffffff 55%,#eff6ff 100%)",activeBg:"linear-gradient(145deg,#eff6ff 0%,#dbeafe 100%)",tag:"Full Visibility",title:"Scan History & Logs",desc:"Your dashboard logs every scan — time, location, device. Know exactly when and where your item was found.",pills:["Full Timeline","Device Info","Exportable"]},{id:"update",icon:i.jsxs("svg",{viewBox:"0 0 24 24",width:"26",height:"26",fill:"none",stroke:"#ea580c",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[i.jsx("polyline",{points:"23 4 23 10 17 10"}),i.jsx("polyline",{points:"1 20 1 14 7 14"}),i.jsx("path",{d:"M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"})]}),iconBg:"#FFF7ED",accent:"#f97316",accentDark:"#c2410c",dotColor:"#fed7aa",cardBg:"linear-gradient(145deg,#ffffff 55%,#fff7ed 100%)",activeBg:"linear-gradient(145deg,#fff7ed 0%,#ffedd5 100%)",tag:"Always Current",title:"Update Info Anytime",desc:"Changed your number? Update it in 30 seconds from any device. The physical tag never needs replacing.",pills:["Instant Update","Any Device","Reassignable"]}];function Nh({color:e}){return i.jsx("svg",{width:"80",height:"62",viewBox:"0 0 80 62",style:{position:"absolute",bottom:10,right:10,opacity:.4,pointerEvents:"none"},children:Array.from({length:5}).map((t,n)=>Array.from({length:7}).map((r,s)=>i.jsx("circle",{cx:s*12+6,cy:n*12+6,r:"2.5",fill:e},`${n}-${s}`)))})}function Eh({color:e,isActive:t}){return i.jsxs("svg",{width:"22",height:"22",viewBox:"0 0 22 22",style:{position:"absolute",top:13,right:13,transition:"transform 0.3s ease",transform:t?"scale(1.15)":"scale(1)"},children:[i.jsx("circle",{cx:"11",cy:"11",r:"11",fill:e,opacity:t?".2":".1"}),i.jsx("circle",{cx:"11",cy:"11",r:"8",fill:e,opacity:t?"1":"0.5"}),i.jsx("polyline",{points:"7,11.5 10,14.5 15,9",fill:"none",stroke:"#fff",strokeWidth:"2.2",strokeLinecap:"round",strokeLinejoin:"round"})]})}function Ph({feature:e,isActive:t,onClick:n}){const{icon:r,iconBg:s,accent:o,accentDark:l,dotColor:a,cardBg:c,activeBg:d,tag:x,title:h,desc:g,pills:m}=e;return i.jsxs("div",{onClick:n,style:{position:"relative",borderRadius:20,padding:"22px 20px 28px",background:t?d:c,border:t?`2px solid ${o}`:`2px solid ${o}55`,boxShadow:t?`0 16px 48px ${o}30, 0 4px 12px ${o}18, inset 0 0 0 1px ${o}20`:`0 2px 10px rgba(0,0,0,0.06), inset 0 0 0 1px ${o}15`,transform:t?"translateY(-6px) scale(1.01)":"translateY(0) scale(1)",transition:"all 0.32s cubic-bezier(0.34,1.3,0.64,1)",overflow:"hidden",cursor:"pointer"},children:[i.jsx(Eh,{color:o,isActive:t}),i.jsx(Nh,{color:a}),i.jsx("div",{style:{position:"absolute",top:0,left:0,right:0,height:4,borderRadius:"20px 20px 0 0",background:t?`linear-gradient(90deg, ${o}, ${o}bb)`:`linear-gradient(90deg, ${o}70, ${o}30)`,transition:"all 0.35s ease"}}),i.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:5,background:t?`${o}20`:`${o}12`,color:l,border:`1px solid ${t?`${o}50`:`${o}35`}`,borderRadius:99,padding:"3px 10px",fontSize:10,fontWeight:700,letterSpacing:"0.07em",textTransform:"uppercase",marginBottom:14,transition:"all 0.25s"},children:[i.jsx("span",{style:{width:5,height:5,borderRadius:"50%",background:o}}),x]}),i.jsx("div",{style:{width:56,height:56,borderRadius:"50%",background:t?`${o}20`:s,border:`1.5px solid ${t?`${o}55`:`${o}30`}`,display:"flex",alignItems:"center",justifyContent:"center",marginBottom:16,transform:t?"scale(1.1)":"scale(1)",transition:"all 0.3s ease"},children:r}),i.jsx("h3",{style:{fontFamily:"'Plus Jakarta Sans', sans-serif",fontSize:15.5,fontWeight:800,color:t?"#0B2545":"#11355e",marginBottom:7,lineHeight:1.28,letterSpacing:"-0.02em",transition:"color 0.25s"},children:h}),i.jsx("div",{style:{width:t?44:28,height:3,borderRadius:99,background:t?`linear-gradient(90deg, ${o}, ${o}88)`:`${o}50`,marginBottom:10,transition:"all 0.35s ease"}}),i.jsx("p",{style:{fontSize:13,color:t?"#334155":"#4b5563",lineHeight:1.7,marginBottom:16,fontWeight:t?450:400,transition:"color 0.25s"},children:g}),i.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:5},children:m.map(v=>i.jsx("span",{style:{fontSize:10.5,fontWeight:600,padding:"3px 9px",borderRadius:99,background:t?`${o}16`:`${o}0e`,color:l,border:`1px solid ${t?`${o}45`:`${o}30`}`,transition:"all 0.25s"},children:v},v))}),i.jsx("div",{style:{position:"absolute",bottom:0,left:0,height:3,width:t?"100%":"0%",background:`linear-gradient(90deg, ${o}, ${o}55)`,transition:"width 0.4s ease"}})]})}function Rh(){const[e,t]=b.useState("whatsapp");return i.jsxs("section",{style:{background:"linear-gradient(180deg,#f8fafc 0%,#f8fafc 100%)",padding:"72px 24px 56px",fontFamily:"'DM Sans', sans-serif"},children:[i.jsx("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),i.jsx("link",{href:"https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@700;800&family=DM+Sans:wght@400;500&display=swap",rel:"stylesheet"}),i.jsxs("div",{style:{maxWidth:1160,margin:"0 auto"},children:[i.jsxs("div",{style:{textAlign:"center",marginBottom:48},children:[i.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:7,background:"#f8fafc",border:"1.5px solid #e8f8eb",borderRadius:99,padding:"6px 16px",fontSize:12,fontWeight:600,color:"#2ebd3a",marginBottom:18},children:[i.jsx("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",children:i.jsx("path",{d:"M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z"})}),"Why ScanForSafe"]}),i.jsxs("h2",{style:{fontFamily:"'Plus Jakarta Sans', sans-serif",fontSize:"clamp(1.7rem,3.8vw,2.8rem)",fontWeight:800,color:"#0B2545",letterSpacing:"-0.04em",lineHeight:1.1,margin:"0 0 16px"},children:["Powerful Features for ",i.jsx("span",{style:{color:"#2ebd3a"},children:"Peace of Mind"})]}),i.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:10,marginBottom:14},children:[i.jsx("div",{style:{width:48,height:1.5,background:"linear-gradient(90deg,transparent,#2ebd3a)"}}),i.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"#2ebd3a",strokeWidth:"2.5",children:i.jsx("path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"})}),i.jsx("div",{style:{width:48,height:1.5,background:"linear-gradient(90deg,#2ebd3a,transparent)"}})]}),i.jsxs("p",{style:{fontSize:14.5,color:"#475569",maxWidth:480,margin:"0 auto",lineHeight:1.75},children:["Everything you need to keep your loved ones safe — ",i.jsx("strong",{style:{color:"#11355e",fontWeight:600},children:"no app needed on the finder's end."})]})]}),i.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(4, minmax(0,1fr))",gap:14},children:zh.map(n=>i.jsx(Ph,{feature:n,isActive:e===n.id,onClick:()=>t(n.id)},n.id))}),i.jsx("div",{style:{display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"center",gap:"8px 28px",marginTop:48,paddingTop:24,borderTop:"1.5px solid #e2e8f0"},children:[{label:"ISO-grade data privacy",path:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"},{label:"Works 24/7 — even offline",path:"M13 2L3 14h9l-1 8 10-12h-9l1-8z"},{label:"Any smartphone camera",path:"M12 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h1l2-2h6l2 2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2zM12 12a3 3 0 1 0-6 0 3 3 0 0 0 6 0z"},{label:"End-to-end encrypted",path:"M19 11H5a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2zM7 11V7a5 5 0 0 1 10 0v4"}].map(({label:n,path:r})=>i.jsxs("div",{style:{display:"flex",alignItems:"center",gap:7},children:[i.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"#2ebd3a",strokeWidth:"2.2",strokeLinecap:"round",children:i.jsx("path",{d:r})}),i.jsx("span",{style:{fontSize:12.5,fontWeight:600,color:"#475569"},children:n})]},n))})]})]})}function Ih(){return i.jsx("div",{className:"pt-20",children:i.jsx(Rh,{})})}const Lh="/assets/bike1-DQV3NgA2.png",Bh="/assets/car1-BPYYefFG.png",Mh="/assets/dog-BDzmYqxX.png",Th="/assets/luggage1-Cam_lo6y.png",_h="/assets/senior-B8NGG_gO.png",Fh="/assets/kid-BgJG0Ozf.png",Wh={green:{accent:"#2ebd3a",gradient:"linear-gradient(135deg, #2ebd3a, #0B2545)",soft:"#f8fafc",border:"#cbd5e1",active:"#2ebd3a"},orange:{accent:"#ea580c",gradient:"linear-gradient(135deg, #ea580c, #c2410c)",soft:"#fff7ed",border:"#cbd5e1",active:"#ea580c"},purple:{accent:"#7c3aed",gradient:"linear-gradient(135deg, #7c3aed, #6d28d9)",soft:"#faf5ff",border:"#cbd5e1",active:"#7c3aed"},red:{accent:"#dc2626",gradient:"linear-gradient(135deg, #dc2626, #b91c1c)",soft:"#fef2f2",border:"#cbd5e1",active:"#dc2626"},blue:{accent:"#2563eb",gradient:"linear-gradient(135deg, #2563eb, #1d4ed8)",soft:"#eff6ff",border:"#cbd5e1",active:"#2563eb"}},Oh=[{id:"car",icon:ki,image:Bh,title:"Car Protection",subtitle:"Vehicle Security",desc:"Weatherproof QR protection for cars with instant emergency alerts and GPS tracking.",features:[{label:"Weatherproof",icon:j1},{label:"Live Alerts",icon:ct},{label:"GPS Tracking",icon:Ot},{label:"24/7 Monitor",icon:Pe}],price:499,original:999,discount:"50% OFF",color:"green",rating:4.9,reviews:2341},{id:"bike",icon:kl,image:Lh,title:"Bike Security",subtitle:"Two Wheeler Shield",desc:"Scratch resistant QR protection with owner privacy and instant finder alerts.",features:[{label:"Scratch Resistant",icon:dt},{label:"Instant Notify",icon:ct},{label:"Owner Privacy",icon:ji},{label:"Quick Connect",icon:_1}],price:499,original:999,discount:"50% OFF",color:"green",popular:!0,rating:4.8,reviews:3892},{id:"pet",icon:zu,image:Mh,title:"Pet Safety Tag",subtitle:"Pet Guardian",desc:"Smart pet QR with collar support, emergency contact and GPS location sharing.",features:[{label:"Collar Friendly",icon:qr},{label:"GPS Location",icon:A1},{label:"Emergency Contact",icon:dn},{label:"Vet Info",icon:L1}],price:499,original:999,discount:"50% OFF",color:"orange",rating:4.9,reviews:1876},{id:"luggage",icon:Cu,image:Th,title:"Luggage Guard",subtitle:"Travel Protection",desc:"Strong adhesive QR luggage tags for fast recovery and secure travel support.",features:[{label:"Multi Luggage",icon:M1},{label:"Strong Adhesive",icon:dt},{label:"Travel Friendly",icon:U1},{label:"Quick Recovery",icon:wo}],price:499,original:999,discount:"50% OFF",color:"purple",rating:4.7,reviews:1243},{id:"senior",icon:q1,image:_h,title:"Senior Safety",subtitle:"Emergency Wrist Band",desc:"Senior citizen wrist QR support with medical info and emergency family alerts.",features:[{label:"Medical Info",icon:dt},{label:"Emergency Alerts",icon:ct},{label:"Family Contact",icon:dn},{label:"Live Tracking",icon:Ot}],price:699,original:1299,discount:"46% OFF",color:"red",rating:4.9,reviews:987},{id:"child",icon:wl,image:Fh,title:"Child Safety",subtitle:"Kids Guardian",desc:"Child QR safety patch with emergency contact and quick scan protection.",features:[{label:"QR Patch",icon:dt},{label:"Emergency Alert",icon:ct},{label:"Parental Contact",icon:dn},{label:"Quick Scan",icon:wo}],price:699,original:1299,discount:"46% OFF",color:"blue",rating:5,reviews:2108}],Ah=[{icon:Pe,title:"Secure Checkout",sub:"100% Safe & Encrypted",color:"#2ebd3a"},{icon:ko,title:"Free Shipping",sub:"Pan India Delivery",color:"#2563eb"},{icon:V1,title:"30-Day Returns",sub:"Easy Refund Policy",color:"#7c3aed"},{icon:R1,title:"24/7 Support",sub:"Always Here To Help",color:"#ea580c"}];function Dh({product:e}){const[t,n]=b.useState(1),[r,s]=b.useState(!1),o=Wh[e.color],l=e.icon;return i.jsxs("div",{onClick:()=>s(!r),style:{background:"#fff",borderRadius:20,overflow:"visible",border:r?`2px solid ${o.active}`:"1px solid #cbd5e1",boxShadow:r?"0 12px 28px rgba(0,0,0,0.08)":"0 4px 16px rgba(0,0,0,0.03)",position:"relative",cursor:"pointer",transition:"all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",transform:r?"translateY(-4px)":"translateY(0px)",padding:"20px 16px 16px 16px",display:"flex",flexDirection:"column",justifyContent:"space-between"},children:[e.popular&&i.jsxs("div",{style:{position:"absolute",top:-12,left:20,background:o.gradient,color:"#fff",fontSize:10,fontWeight:800,padding:"4px 12px",borderRadius:20,zIndex:10,display:"flex",alignItems:"center",gap:4,letterSpacing:"0.5px"},children:[i.jsx(fr,{size:10,fill:"#fff"}),"MOST POPULAR"]}),i.jsxs("div",{children:[i.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12},children:[i.jsx("div",{style:{width:40,height:40,borderRadius:12,background:o.gradient,display:"flex",alignItems:"center",justifyContent:"center"},children:i.jsx(l,{color:"#fff",size:20})}),i.jsxs("div",{style:{display:"flex",alignItems:"center",gap:4,fontSize:11,fontWeight:700},children:[i.jsx(jl,{size:12,fill:"#f59e0b",color:"#f59e0b"}),i.jsx("span",{style:{color:"#0B2545"},children:e.rating}),i.jsxs("span",{style:{color:"#9ca3af",fontWeight:400},children:["| ",e.reviews.toLocaleString()," reviews"]})]})]}),i.jsx("h3",{style:{fontSize:18,fontWeight:800,color:"#0B2545",margin:"0 0 2px 0"},children:e.title}),i.jsx("p",{style:{color:o.accent,fontWeight:700,fontSize:12,margin:"0 0 12px 0"},children:e.subtitle}),i.jsxs("div",{style:{display:"grid",gridTemplateColumns:"110px 1fr",gap:12,alignItems:"start",marginBottom:14},children:[i.jsx("div",{style:{background:"#f8fafc",borderRadius:14,height:120,display:"flex",alignItems:"center",justifyContent:"center",padding:8,border:"1px solid #f1f5f9"},children:i.jsx("img",{src:e.image,alt:e.title,style:{width:"100%",height:"100%",objectFit:"contain"}})}),i.jsxs("div",{children:[i.jsx("p",{style:{fontSize:11,color:"#6b7280",lineHeight:1.5,margin:"0 0 10px 0"},children:e.desc}),i.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr",gap:6},children:e.features.map(({label:a,icon:c})=>i.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[i.jsx(c,{size:13,color:o.accent,style:{flexShrink:0}}),i.jsx("span",{style:{fontSize:11,fontWeight:500,color:"#374151"},children:a})]},a))})]})]})]}),i.jsxs("div",{children:[i.jsxs("div",{style:{display:"flex",alignItems:"baseline",gap:6,marginBottom:12},children:[i.jsxs("span",{style:{fontSize:24,fontWeight:900,color:o.accent},children:["₹",e.price]}),i.jsxs("span",{style:{textDecoration:"line-through",color:"#9ca3af",fontSize:14,fontWeight:500},children:["₹",e.original]}),i.jsx("span",{style:{color:o.accent,fontSize:11,fontWeight:700,marginLeft:"auto",background:o.soft,padding:"2px 8px",borderRadius:12},children:e.discount})]}),i.jsxs("div",{style:{display:"flex",gap:8},children:[i.jsxs("div",{style:{display:"flex",alignItems:"center",border:"1px solid #e2e8f0",borderRadius:10,overflow:"hidden",height:36},children:[i.jsx("button",{onClick:a=>{a.stopPropagation(),n(c=>Math.max(1,c-1))},style:qa,children:i.jsx(O1,{size:12})}),i.jsx("div",{style:{width:28,textAlign:"center",fontWeight:700,fontSize:13,color:"#0B2545"},children:t}),i.jsx("button",{onClick:a=>{a.stopPropagation(),n(c=>c+1)},style:qa,children:i.jsx($1,{size:12})})]}),i.jsxs("button",{onClick:a=>a.stopPropagation(),style:{flex:1,height:36,border:"none",borderRadius:10,background:o.gradient,color:"#fff",fontWeight:700,fontSize:13,display:"flex",alignItems:"center",justifyContent:"center",gap:6,cursor:"pointer"},children:[i.jsx(Q1,{size:13}),"Buy Now"]})]})]})]})}const qa={width:32,height:"100%",border:"none",background:"#fff",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",color:"#6b7280"};function Uh(){return i.jsxs("section",{style:{padding:"60px 0",background:"linear-gradient(180deg, #f4fbf7 0%, #ffffff 100%)",fontFamily:"'DM Sans', system-ui, sans-serif"},children:[i.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800;900&display=swap');
      `}),i.jsxs("div",{style:{width:"100%",maxWidth:1200,margin:"0 auto",padding:"0 20px"},children:[i.jsxs("div",{style:{textAlign:"center",marginBottom:44},children:[i.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:6,background:"#fff",border:"1px solid #e8f8eb",borderRadius:30,padding:"6px 16px",marginBottom:16,boxShadow:"0 4px 12px rgba(0,0,0,0.03)"},children:[i.jsx(m1,{size:14,color:"#2ebd3a"}),i.jsx("span",{style:{fontWeight:800,fontSize:11,color:"#0B2545",letterSpacing:"0.5px"},children:"OUR PRODUCTS"})]}),i.jsxs("h2",{style:{fontSize:44,lineHeight:1.1,fontWeight:900,marginBottom:12,color:"#0B2545",letterSpacing:"-1px"},children:["Choose Your ",i.jsx("span",{style:{color:"#2ebd3a"},children:"Protection Plan"})]}),i.jsx("p",{style:{maxWidth:640,margin:"0 auto",color:"#4b5563",lineHeight:1.6,fontSize:15},children:"Smart QR solutions for vehicles, pets, luggage, children and senior citizens with instant emergency communication and recovery support."})]}),i.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(340px, 1fr))",gap:24,marginBottom:44},children:Oh.map(e=>i.jsx(Dh,{product:e},e.id))}),i.jsx("div",{style:{background:"#fff",borderRadius:16,padding:"20px",display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(220px, 1fr))",gap:16,boxShadow:"0 4px 20px rgba(0,0,0,0.04)",border:"1px solid #f1f5f9"},children:Ah.map(({icon:e,title:t,sub:n,color:r})=>i.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,justifyContent:"center"},children:[i.jsx("div",{style:{width:44,height:44,borderRadius:"50%",background:"#f8fafc",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:i.jsx(e,{size:20,color:r})}),i.jsxs("div",{children:[i.jsx("div",{style:{fontWeight:800,fontSize:14,color:"#0B2545"},children:t}),i.jsx("div",{style:{color:"#6b7280",fontSize:12},children:n})]})]},t))})]})]})}function $h(){return i.jsx("div",{className:"pt-20 bg-[#f8fbff]",children:i.jsx(Uh,{})})}const Hh=[{icon:kl,title:"Motorcycles & Bikes",qrSize:"3.5 cm QR Sticker",description:"Weather-proof 3.5cm QR sticker placed on the fuel tank or handlebar. If your bike is found, the finder scans and you get an instant alert with GPS location.",cardBg:"linear-gradient(135deg,#f8fafc,#e8f8eb)",iconBg:"#2ebd3a",tag:"QR Sticker",tagBg:"#e8f8eb",tagColor:"#2ebd3a",image:"https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=600&q=80",badge:"🏍️",qrPosition:"On fuel tank / handlebar"},{icon:Cu,title:"Bags & Luggage",qrSize:"3.5 cm QR Sticker",description:"Durable sticker or tag attached to your bag strap. Perfect for travel bags, school bags, and laptop bags. Works even in low-light.",cardBg:"linear-gradient(135deg,#f8fafc,#a7f3d0)",iconBg:"#0B2545",tag:"QR Tag",tagBg:"#e8f8eb",tagColor:"#0B2545",image:"https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80",badge:"🎒",qrPosition:"On bag strap / handle"},{icon:zu,title:"Dogs, Cats & Pets",qrSize:"Collar QR Tag",description:"Attach a lightweight QR tag to your pet's collar. If they wander, anyone can scan it and you'll receive an instant notification with their location.",cardBg:"linear-gradient(135deg,#f8fafc,#e8f8eb)",iconBg:"#2ebd3a",tag:"Collar Tag",tagBg:"#e8f8eb",tagColor:"#2ebd3a",image:"https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=600&q=80",badge:"🐕",qrPosition:"On pet collar"},{icon:wl,title:"Children Safety",qrSize:"Hand Band / Shoulder",description:"Wearable QR wristband or shoulder tag for your child. If they get separated in crowded places, a good samaritan scans the band and you get alerted instantly.",cardBg:"linear-gradient(135deg,#f8fafc,#e8f8eb)",iconBg:"#0B2545",tag:"Hand Band",tagBg:"#a7f3d0",tagColor:"#0B2545",image:"https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=600&q=80",badge:"🧒",qrPosition:"On hand band / shoulder"},{icon:ju,title:"Laptops & Valuables",qrSize:"QR + NFC Sticker",description:"Stick a dual QR+NFC tag on your laptop, camera, or any valuable. Works with both QR scan and NFC tap for maximum recovery speed.",cardBg:"linear-gradient(135deg,#f8fafc,#e8f8eb)",iconBg:"#2ebd3a",tag:"NFC + QR",tagBg:"#e8f8eb",tagColor:"#2ebd3a",image:"https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=600&q=80",badge:"💻",qrPosition:"Back of device"},{icon:G1,title:"Senior Citizens",qrSize:"Emergency QR + NFC",description:"Emergency profile with medical info, blood group, and contacts. NFC tap or QR scan gives responders instant access to critical details — no app needed.",cardBg:"linear-gradient(135deg,#f8fafc,#a7f3d0)",iconBg:"#0B2545",tag:"Senior Care",tagBg:"#2ebd3a",tagColor:"#fff",image:"https://images.unsplash.com/photo-1534445867742-43195f401b6c?auto=format&fit=crop&w=600&q=80",badge:"👴",qrPosition:"Wristband / wallet card",isNew:!0}];function Vh(){return i.jsx("section",{id:"use-cases",style:{background:"#ffffff",padding:"90px 0 80px"},children:i.jsxs("div",{style:{maxWidth:1200,margin:"0 auto",padding:"0 24px"},children:[i.jsxs("div",{style:{textAlign:"center",marginBottom:56},children:[i.jsx("div",{style:{display:"inline-flex",alignItems:"center",gap:8,padding:"8px 20px",borderRadius:100,background:"#e8f8eb",border:"1px solid #e8f8eb",marginBottom:16},children:i.jsx("span",{style:{fontSize:13,fontWeight:700,color:"#2ebd3a"},children:"Real-World Use Cases"})}),i.jsx("h2",{style:{fontSize:"clamp(28px,4vw,44px)",fontWeight:900,color:"#0B2545",margin:"0 0 14px"},children:"Protect Everything You Love"}),i.jsx("p",{style:{color:"#4b7a62",fontSize:16,maxWidth:540,margin:"0 auto",lineHeight:1.7},children:"From bikes to babies — ScanForSafe QR tags and NFC chips keep your world safe and recoverable"})]}),i.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(340px, 1fr))",gap:24},children:Hh.map(e=>i.jsx(Yh,{...e},e.title))})]})})}function Yh({icon:e,title:t,qrSize:n,description:r,cardBg:s,iconBg:o,tag:l,tagBg:a,tagColor:c,image:d,badge:x,qrPosition:h,isNew:g}){const[m,v]=b.useState(!1);return i.jsxs("div",{onMouseEnter:()=>v(!0),onMouseLeave:()=>v(!1),style:{borderRadius:24,overflow:"hidden",background:s,border:"1.5px solid #e8f8eb",boxShadow:m?"0 24px 56px rgba(6,78,59,0.14)":"0 4px 24px rgba(6,78,59,0.07)",transition:"all 0.3s ease",position:"relative",transform:m?"translateY(-6px)":"translateY(0)"},children:[g&&i.jsx("div",{style:{position:"absolute",top:14,right:14,zIndex:10,background:"#2ebd3a",color:"#fff",fontSize:11,fontWeight:800,padding:"4px 12px",borderRadius:100,letterSpacing:"0.05em"},children:"NEW"}),i.jsxs("div",{style:{position:"relative",height:200,overflow:"hidden"},children:[i.jsx("img",{src:d,alt:t,loading:"lazy",style:{width:"100%",height:"100%",objectFit:"cover",display:"block",transform:m?"scale(1.04)":"scale(1)",transition:"transform 0.4s ease"}}),i.jsx("div",{style:{position:"absolute",inset:0,background:"linear-gradient(to bottom, transparent 30%, rgba(6,78,59,0.65))"}}),i.jsxs("div",{style:{position:"absolute",bottom:12,left:12,background:"rgba(255,255,255,0.92)",backdropFilter:"blur(8px)",borderRadius:10,padding:"6px 12px",fontSize:11,fontWeight:700,color:"#2ebd3a",display:"flex",alignItems:"center",gap:6,border:"1px solid rgba(255,255,255,0.8)",zIndex:2},children:[i.jsxs("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"#2ebd3a",strokeWidth:"2.5",children:[i.jsx("rect",{x:"3",y:"3",width:"7",height:"7"}),i.jsx("rect",{x:"14",y:"3",width:"7",height:"7"}),i.jsx("rect",{x:"3",y:"14",width:"7",height:"7"}),i.jsx("path",{d:"M14 14h3v3m0 4h4m-4-4v4m4-7h-4m4 0v3"})]}),h]})]}),i.jsxs("div",{style:{padding:"20px 20px 22px"},children:[i.jsxs("div",{style:{display:"flex",alignItems:"flex-start",justifyContent:"space-between",marginBottom:12,gap:12},children:[i.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10},children:[i.jsx("div",{style:{width:40,height:40,borderRadius:12,background:o,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:i.jsx(e,{size:20,color:"#fff"})}),i.jsxs("div",{children:[i.jsx("h3",{style:{margin:0,fontSize:16,fontWeight:800,color:"#0B2545"},children:t}),i.jsxs("div",{style:{fontSize:11,color:"#6b7280",fontWeight:600,marginTop:2},children:[x," ",n]})]})]}),i.jsx("span",{style:{fontSize:11,fontWeight:800,padding:"4px 10px",borderRadius:100,background:a,color:c,whiteSpace:"nowrap"},children:l})]}),i.jsx("p",{style:{margin:0,fontSize:14,color:"#374151",lineHeight:1.65},children:r})]})]})}function Qh(){return i.jsx("div",{className:"pt-20",children:i.jsx(Vh,{})})}function Xh(){return i.jsx(i.Fragment,{children:i.jsx(Ru,{})})}const Gh=[{name:"Priya Sharma",role:"Pet Owner",city:"Mumbai",initial:"P",color:"#0057b8",bg:"rgba(0,87,184,0.10)",rating:5,Icon:dt,text:"My dog slipped out one evening. Within 20 minutes, a kind stranger scanned his collar and I got a WhatsApp alert with their location. We reunited so fast! ScanForSafe is absolutely worth every rupee."},{name:"Rajesh Kumar",role:"Car Owner",city:"Delhi",initial:"R",color:"#2ca02c",bg:"rgba(44,160,44,0.10)",rating:5,Icon:ki,text:"Parking in crowded areas always made me anxious about blocking someone. Now with the QR on my car, people contact me directly without needing my number visible."},{name:"Anita Verma",role:"Parent",city:"Bengaluru",initial:"A",color:"#1a7fd4",bg:"rgba(26,127,212,0.10)",rating:5,Icon:wl,text:"I put a ScanForSafe tag on my son's school bag. The peace of mind knowing someone can reach me immediately in an emergency is priceless."},{name:"Mohammed Farhan",role:"Bike Owner",city:"Hyderabad",initial:"M",color:"#00509e",bg:"rgba(0,80,158,0.10)",rating:5,Icon:kl,text:"My bike was towed once and I had no idea where it went. After getting ScanForSafe, I feel so much more in control."},{name:"Sneha Reddy",role:"Frequent Traveller",city:"Chennai",initial:"S",color:"#1d8a1d",bg:"rgba(29,138,29,0.10)",rating:5,Icon:v1,text:"Lost my suitcase at the airport once — never again. I tag every bag now."},{name:"Vikram Nair",role:"Laptop Owner",city:"Pune",initial:"V",color:"#0057b8",bg:"rgba(0,87,184,0.10)",rating:5,Icon:ju,text:"Left my laptop at a café once and it was gone for 2 hours. ScanForSafe helped me recover it quickly."}];function qh({count:e}){return i.jsx("div",{className:"flex gap-0.5",children:Array.from({length:e}).map((t,n)=>i.jsx(jl,{className:"w-3.5 h-3.5 text-amber-400 fill-amber-400"},n))})}function Kh({t:e}){const{Icon:t}=e;return i.jsxs("div",{className:"relative rounded-2xl p-5 border border-slate-100 bg-white",style:{boxShadow:"0 2px 16px rgba(0,43,91,0.07)"},children:[i.jsxs("div",{className:"flex items-start justify-between mb-3",children:[i.jsx("div",{className:"w-10 h-10 rounded-xl flex items-center justify-center",style:{background:e.bg},children:i.jsx(t,{style:{width:"18px",height:"18px",color:e.color}})}),i.jsx(qh,{count:e.rating})]}),i.jsx(H1,{className:"absolute top-4 right-14 w-6 h-6",style:{color:"rgba(0,87,184,0.08)"}}),i.jsxs("p",{className:"text-slate-600 text-sm leading-relaxed mb-4",children:['"',e.text,'"']}),i.jsxs("div",{className:"flex items-center gap-3 pt-3 border-t border-slate-100",children:[i.jsx("div",{className:"w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-sm",style:{background:e.color},children:e.initial}),i.jsxs("div",{children:[i.jsx("p",{className:"font-bold text-sm",style:{color:"#002b5b"},children:e.name}),i.jsxs("p",{className:"text-xs text-slate-400",children:[e.role," · ",e.city]})]})]})]})}function Zh(){return i.jsx("section",{id:"testimonials",className:"py-20",style:{background:"#f4f7fb",padding:"120pX"},children:i.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6",children:[i.jsxs("div",{className:"mb-14 text-center",children:[i.jsx("div",{className:"flex justify-center mb-4",children:i.jsx("span",{className:"badge",children:"Customer Stories"})}),i.jsx("h2",{className:"section-heading",children:"Real People, Real Protection Stories"}),i.jsx("p",{className:"section-sub",children:"Join thousands of happy customers across India who trust ScanForSafe every day."}),i.jsx("div",{className:"flex flex-wrap items-center justify-center gap-6 mt-8",children:[{value:"10,000+",label:"Happy Users"},{value:"4.9 ★",label:"Average Rating"},{value:"98%",label:"Reunion Rate"},{value:"50+ Cities",label:"Across India"}].map(e=>i.jsxs("div",{className:"text-center",children:[i.jsx("p",{className:"text-2xl font-black",style:{color:"#0057b8"},children:e.value}),i.jsx("p",{className:"text-xs font-semibold text-slate-500 uppercase tracking-wide",children:e.label})]},e.label))})]}),i.jsx("div",{className:"grid gap-6 sm:grid-cols-2 lg:grid-cols-3",children:Gh.map((e,t)=>i.jsx(Kh,{t:e},t))})]})})}function Jh(){return i.jsx(i.Fragment,{children:i.jsx(Zh,{})})}function eg(){return i.jsxs("svg",{viewBox:"0 0 280 280",className:"w-52 h-52",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[i.jsx("ellipse",{cx:"140",cy:"180",rx:"90",ry:"30",fill:"#2ebd3a",fillOpacity:"0.18"}),i.jsx("path",{d:"M140 240 C100 220 68 185 68 145 L68 82 L140 55 L212 82 L212 145 C212 185 180 220 140 240Z",fill:"#0B2545",fillOpacity:"0.25",transform:"translate(4,6)"}),i.jsx("path",{d:"M140 232 C100 212 68 177 68 137 L68 74 L140 47 L212 74 L212 137 C212 177 180 212 140 232Z",fill:"url(#shieldGrad)",stroke:"#0B2545",strokeWidth:"1.5"}),i.jsx("path",{d:"M140 210 C108 193 88 164 88 134 L88 88 L140 66 L192 88 L192 134 C192 164 172 193 140 210Z",fill:"url(#shieldInner)",opacity:"0.6"}),Array.from({length:6},(e,t)=>Array.from({length:6},(n,r)=>{const s=108+r*13,o=80+t*13,l=Math.random()>.4?.5:.15;return i.jsx("rect",{x:s,y:o,width:"8",height:"8",rx:"1.5",fill:"white",fillOpacity:l},`${t}-${r}`)})),i.jsx("circle",{cx:"168",cy:"158",r:"22",fill:"#2ebd3a",stroke:"white",strokeWidth:"2.5"}),i.jsx("circle",{cx:"168",cy:"158",r:"18",fill:"#2ebd3a"}),i.jsx("path",{d:"M158 158 L164 164 L178 150",stroke:"white",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round"}),i.jsx("circle",{cx:"140",cy:"30",r:"5",fill:"#4bd557",fillOpacity:"0.7"}),i.jsx("circle",{cx:"228",cy:"100",r:"4",fill:"#7ded88",fillOpacity:"0.6"}),i.jsx("circle",{cx:"210",cy:"210",r:"5",fill:"#4bd557",fillOpacity:"0.5"}),i.jsx("circle",{cx:"68",cy:"195",r:"3.5",fill:"#7ded88",fillOpacity:"0.6"}),i.jsx("circle",{cx:"50",cy:"100",r:"4",fill:"#4bd557",fillOpacity:"0.5"}),i.jsxs("defs",{children:[i.jsxs("linearGradient",{id:"shieldGrad",x1:"140",y1:"47",x2:"140",y2:"232",gradientUnits:"userSpaceOnUse",children:[i.jsx("stop",{offset:"0%",stopColor:"#2ebd3a"}),i.jsx("stop",{offset:"50%",stopColor:"#2ebd3a"}),i.jsx("stop",{offset:"100%",stopColor:"#081c35"})]}),i.jsxs("linearGradient",{id:"shieldInner",x1:"140",y1:"66",x2:"140",y2:"210",gradientUnits:"userSpaceOnUse",children:[i.jsx("stop",{offset:"0%",stopColor:"white",stopOpacity:"0.25"}),i.jsx("stop",{offset:"100%",stopColor:"white",stopOpacity:"0"})]})]})]})}const tg=[{icon:I1,label:"Enterprise Security",desc:"End-to-end protection for your ecosystem",tags:"Secure • Reliable • Robust",tagColor:"#2ebd3a"},{icon:fr,label:"Lightning Fast",desc:"Instant AI scanning & verification",tags:"Real-time • Accurate • Fast",tagColor:"#d97706"},{icon:Pu,label:"Role-Based Access",desc:"Granular permissions with 4 user roles",tags:"Flexible • Controlled • Safe",tagColor:"#7c3aed"},{icon:S1,label:"Cloud Scalability",desc:"Reliable, secure & always available",tags:"Scalable • Global • Always On",tagColor:"#0ea5e9"}];function ng(){const[e,t]=b.useState(!1),[n,r]=b.useState(""),[s,o]=b.useState(""),[l,a]=b.useState(!1),[c,d]=b.useState({}),x=()=>{const g={};return n.trim()||(g.username="Username is required"),s?s.length<6&&(g.password="Password must be at least 6 characters"):g.password="Password is required",g},h=g=>{g.preventDefault();const m=x();if(Object.keys(m).length){d(m);return}d({}),a(!0),setTimeout(()=>a(!1),1800)};return i.jsxs("div",{className:"min-h-screen flex font-sans",style:{fontFamily:"'DM Sans', 'Helvetica Neue', sans-serif"},children:[i.jsxs("div",{className:"hidden lg:flex lg:w-[55%] flex-col p-10 relative overflow-hidden",style:{background:"linear-gradient(160deg, #f8fafc 0%, #e8f8eb 40%, #e8f8eb 100%)"},children:[i.jsx("div",{className:"absolute inset-0 opacity-40",style:{backgroundImage:"radial-gradient(circle, #7ded88 1px, transparent 1px)",backgroundSize:"28px 28px"}}),i.jsx("div",{className:"absolute inset-0 opacity-[0.03]",style:{backgroundImage:`url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`}}),i.jsx("div",{className:"absolute top-20 right-20 w-80 h-80 rounded-full opacity-30",style:{background:"radial-gradient(circle, #4bd557, transparent 70%)"}}),i.jsx("div",{className:"absolute bottom-10 left-10 w-60 h-60 rounded-full opacity-20",style:{background:"radial-gradient(circle, #2ebd3a, transparent 70%)"}}),i.jsxs("div",{className:"relative z-10 flex items-center gap-3",children:[i.jsx("div",{className:"w-10 h-10 rounded-xl flex items-center justify-center shadow-md",style:{background:"linear-gradient(135deg, #2ebd3a, #0B2545)"},children:i.jsx(Pe,{className:"w-5 h-5 text-white"})}),i.jsxs("div",{children:[i.jsx("span",{className:"font-black text-lg text-gray-900 tracking-tight leading-none block",children:"Scan for Safe"}),i.jsx("span",{className:"text-[10px] text-green-700 font-semibold tracking-widest uppercase",children:"Product Protection Platform"})]})]}),i.jsx("div",{className:"relative z-10 mt-6",children:i.jsxs("div",{className:"inline-flex items-center gap-2 px-4 py-2 rounded-full border border-green-300 bg-white/60 backdrop-blur-sm text-xs font-bold text-green-800 tracking-widest uppercase shadow-sm",children:[i.jsx(Eu,{className:"w-3.5 h-3.5 text-green-600"}),"AI Powered · Trusted · Secure"]})}),i.jsxs("div",{className:"relative z-10 mt-8 flex gap-8 items-start",children:[i.jsxs("div",{className:"flex-1",children:[i.jsxs("h2",{className:"text-4xl font-black text-gray-900 leading-tight tracking-tight",children:["Smart Product",i.jsx("br",{}),"Safety &"," ",i.jsx("span",{style:{color:"#2ebd3a"},children:"Authentication"})]}),i.jsx("p",{className:"text-gray-600 text-sm mt-4 leading-relaxed max-w-xs font-medium",children:"AI-driven verification, counterfeit detection, and real-time monitoring to protect your products, customers, and brand integrity."})]}),i.jsx("div",{className:"flex-shrink-0 mt-[-12px]",children:i.jsx(eg,{})})]}),i.jsx("div",{className:"relative z-10 mt-6 grid grid-cols-2 gap-4",children:tg.map(({icon:g,label:m,desc:v,tags:w,tagColor:j})=>i.jsxs("div",{className:"bg-white/70 backdrop-blur-sm border border-white/80 rounded-2xl p-4 shadow-sm hover:shadow-md hover:bg-white/90 transition-all duration-200",children:[i.jsx("div",{className:"w-9 h-9 rounded-xl flex items-center justify-center mb-3",style:{background:`${j}18`,border:`1px solid ${j}30`},children:i.jsx(g,{className:"w-4 h-4",style:{color:j}})}),i.jsx("p",{className:"text-gray-900 text-sm font-black leading-tight",children:m}),i.jsx("p",{className:"text-gray-500 text-[11px] mt-1 leading-snug",children:v}),i.jsx("p",{className:"text-[10px] font-bold mt-2",style:{color:j},children:w})]},m))})]}),i.jsxs("div",{className:"w-full lg:w-[45%] flex flex-col justify-center items-center px-8 sm:px-14 py-12 bg-white relative",children:[i.jsxs("div",{className:"lg:hidden flex items-center gap-2 mb-10",children:[i.jsx("div",{className:"w-9 h-9 rounded-xl flex items-center justify-center",style:{background:"linear-gradient(135deg, #2ebd3a, #0B2545)"},children:i.jsx(Pe,{className:"w-5 h-5 text-white"})}),i.jsx("span",{className:"font-black text-xl text-gray-900",children:"Scan for Safe"})]}),i.jsxs("div",{className:"w-full max-w-sm",children:[i.jsxs("div",{className:"mb-8",children:[i.jsxs("h1",{className:"text-4xl font-black text-gray-900 tracking-tight leading-tight",children:["Welcome ",i.jsx("span",{style:{color:"#2ebd3a"},children:"Back!"})]}),i.jsx("p",{className:"text-gray-500 text-sm mt-2 font-medium",children:"Sign in to continue to your dashboard"})]}),i.jsxs("form",{onSubmit:h,noValidate:!0,className:"space-y-5",children:[i.jsxs("div",{children:[i.jsx("label",{className:"block text-[11px] font-black text-gray-700 tracking-widest uppercase mb-2",children:"Username"}),i.jsxs("div",{className:"relative",children:[i.jsx(jo,{className:"absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none"}),i.jsx("input",{type:"text",value:n,onChange:g=>{r(g.target.value),d(m=>({...m,username:""}))},placeholder:"Enter your username",className:`w-full pl-10 pr-4 py-3.5 rounded-xl border text-sm font-medium text-gray-800 placeholder:text-gray-400 bg-white outline-none transition-all duration-200 focus:ring-2 ${c.username?"border-red-300 focus:ring-red-100":"border-gray-200 focus:border-green-400 focus:ring-green-50"}`})]}),c.username&&i.jsx("p",{className:"text-red-500 text-[11px] font-semibold mt-1.5 ml-1",children:c.username})]}),i.jsxs("div",{children:[i.jsxs("div",{className:"flex items-center justify-between mb-2",children:[i.jsx("label",{className:"block text-[11px] font-black text-gray-700 tracking-widest uppercase",children:"Password"}),i.jsx(Ue,{to:"/forgot-password",className:"text-xs font-bold hover:underline",style:{color:"#2ebd3a"},children:"Forgot password?"})]}),i.jsxs("div",{className:"relative",children:[i.jsx(ji,{className:"absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none"}),i.jsx("input",{type:e?"text":"password",value:s,onChange:g=>{o(g.target.value),d(m=>({...m,password:""}))},placeholder:"Enter your password",className:`w-full pl-10 pr-11 py-3.5 rounded-xl border text-sm font-medium text-gray-800 placeholder:text-gray-400 bg-white outline-none transition-all duration-200 focus:ring-2 ${c.password?"border-red-300 focus:ring-red-100":"border-gray-200 focus:border-green-400 focus:ring-green-50"}`}),i.jsx("button",{type:"button",onClick:()=>t(!e),className:"absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors","aria-label":e?"Hide password":"Show password",children:e?i.jsx(z1,{className:"w-4 h-4"}):i.jsx(N1,{className:"w-4 h-4"})})]}),c.password&&i.jsx("p",{className:"text-red-500 text-[11px] font-semibold mt-1.5 ml-1",children:c.password})]}),i.jsx("button",{type:"submit",disabled:l,className:"w-full py-4 rounded-xl text-white font-black text-sm tracking-wide flex items-center justify-center gap-2 transition-all duration-200 hover:-translate-y-0.5 hover:brightness-110 active:translate-y-0 active:scale-[0.99] disabled:opacity-70 disabled:cursor-not-allowed mt-1",style:{background:"linear-gradient(135deg, #2ebd3a, #0B2545)",boxShadow:"0 10px 28px rgba(46, 189, 58,.28)"},children:l?i.jsxs(i.Fragment,{children:[i.jsxs("svg",{className:"animate-spin w-4 h-4 text-white",fill:"none",viewBox:"0 0 24 24",children:[i.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),i.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.4 0 0 5.4 0 12h4z"})]}),"Signing in…"]}):i.jsxs(i.Fragment,{children:["Access Dashboard",i.jsx(ku,{className:"w-4 h-4"})]})}),i.jsxs("div",{className:"flex items-center justify-center gap-2 text-gray-400 text-[11px] font-semibold",children:[i.jsx(ji,{className:"w-3.5 h-3.5"}),"Your data is encrypted and secure"]})]}),i.jsxs("p",{className:"text-center text-xs text-gray-500 font-medium mt-8",children:["Don't have an account?"," ",i.jsx(Ue,{to:"/register",className:"font-black hover:underline",style:{color:"#2ebd3a"},children:"Get started free →"})]})]})]})]})}function rg(){const t=kn().pathname==="/login";return i.jsxs("div",{className:"min-h-screen flex flex-col",children:[!t&&i.jsx(u1,{}),i.jsx("main",{className:"flex-1",children:i.jsxs(e1,{children:[i.jsx(Le,{path:"/",element:i.jsx(vh,{})}),i.jsx(Le,{path:"/features",element:i.jsx(Ih,{})}),i.jsx(Le,{path:"/products",element:i.jsx($h,{})}),i.jsx(Le,{path:"/use-cases",element:i.jsx(Qh,{})}),i.jsx(Le,{path:"/how-it-works",element:i.jsx(Xh,{})}),i.jsx(Le,{path:"/testimonials",element:i.jsx(Jh,{})}),i.jsx(Le,{path:"/login",element:i.jsx(ng,{})}),i.jsx(Le,{path:"/contact",element:i.jsx(kh,{})}),i.jsx(Le,{path:"/privacy-policy",element:i.jsx(jh,{})}),i.jsx(Le,{path:"/terms",element:i.jsx(Sh,{})})]})}),!t&&i.jsx(Z1,{}),!t&&i.jsx(Ch,{})]})}js.createRoot(document.getElementById("root")).render(i.jsx(lc.StrictMode,{children:i.jsx(l1,{children:i.jsx(rg,{})})}));
