function jx(t,e){for(var n=0;n<e.length;n++){const i=e[n];if(typeof i!="string"&&!Array.isArray(i)){for(const r in i)if(r!=="default"&&!(r in t)){const s=Object.getOwnPropertyDescriptor(i,r);s&&Object.defineProperty(t,r,s.get?s:{enumerable:!0,get:()=>i[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function Jx(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var M0={exports:{}},Vc={},E0={exports:{}},ct={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ua=Symbol.for("react.element"),Qx=Symbol.for("react.portal"),ey=Symbol.for("react.fragment"),ty=Symbol.for("react.strict_mode"),ny=Symbol.for("react.profiler"),iy=Symbol.for("react.provider"),ry=Symbol.for("react.context"),sy=Symbol.for("react.forward_ref"),oy=Symbol.for("react.suspense"),ay=Symbol.for("react.memo"),ly=Symbol.for("react.lazy"),zp=Symbol.iterator;function cy(t){return t===null||typeof t!="object"?null:(t=zp&&t[zp]||t["@@iterator"],typeof t=="function"?t:null)}var w0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T0=Object.assign,A0={};function go(t,e,n){this.props=t,this.context=e,this.refs=A0,this.updater=n||w0}go.prototype.isReactComponent={};go.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};go.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function C0(){}C0.prototype=go.prototype;function xh(t,e,n){this.props=t,this.context=e,this.refs=A0,this.updater=n||w0}var yh=xh.prototype=new C0;yh.constructor=xh;T0(yh,go.prototype);yh.isPureReactComponent=!0;var Vp=Array.isArray,R0=Object.prototype.hasOwnProperty,Sh={current:null},b0={key:!0,ref:!0,__self:!0,__source:!0};function P0(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)R0.call(e,i)&&!b0.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Ua,type:t,key:s,ref:o,props:r,_owner:Sh.current}}function uy(t,e){return{$$typeof:Ua,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Mh(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ua}function fy(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Hp=/\/+/g;function fu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?fy(""+t.key):e.toString(36)}function Vl(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ua:case Qx:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+fu(o,0):i,Vp(r)?(n="",t!=null&&(n=t.replace(Hp,"$&/")+"/"),Vl(r,e,n,"",function(c){return c})):r!=null&&(Mh(r)&&(r=uy(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Hp,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Vp(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+fu(s,a);o+=Vl(s,e,n,l,r)}else if(l=cy(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+fu(s,a++),o+=Vl(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function qa(t,e,n){if(t==null)return t;var i=[],r=0;return Vl(t,i,"","",function(s){return e.call(n,s,r++)}),i}function dy(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var wn={current:null},Hl={transition:null},hy={ReactCurrentDispatcher:wn,ReactCurrentBatchConfig:Hl,ReactCurrentOwner:Sh};function L0(){throw Error("act(...) is not supported in production builds of React.")}ct.Children={map:qa,forEach:function(t,e,n){qa(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return qa(t,function(){e++}),e},toArray:function(t){return qa(t,function(e){return e})||[]},only:function(t){if(!Mh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ct.Component=go;ct.Fragment=ey;ct.Profiler=ny;ct.PureComponent=xh;ct.StrictMode=ty;ct.Suspense=oy;ct.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=hy;ct.act=L0;ct.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=T0({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Sh.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)R0.call(e,l)&&!b0.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:Ua,type:t.type,key:r,ref:s,props:i,_owner:o}};ct.createContext=function(t){return t={$$typeof:ry,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:iy,_context:t},t.Consumer=t};ct.createElement=P0;ct.createFactory=function(t){var e=P0.bind(null,t);return e.type=t,e};ct.createRef=function(){return{current:null}};ct.forwardRef=function(t){return{$$typeof:sy,render:t}};ct.isValidElement=Mh;ct.lazy=function(t){return{$$typeof:ly,_payload:{_status:-1,_result:t},_init:dy}};ct.memo=function(t,e){return{$$typeof:ay,type:t,compare:e===void 0?null:e}};ct.startTransition=function(t){var e=Hl.transition;Hl.transition={};try{t()}finally{Hl.transition=e}};ct.unstable_act=L0;ct.useCallback=function(t,e){return wn.current.useCallback(t,e)};ct.useContext=function(t){return wn.current.useContext(t)};ct.useDebugValue=function(){};ct.useDeferredValue=function(t){return wn.current.useDeferredValue(t)};ct.useEffect=function(t,e){return wn.current.useEffect(t,e)};ct.useId=function(){return wn.current.useId()};ct.useImperativeHandle=function(t,e,n){return wn.current.useImperativeHandle(t,e,n)};ct.useInsertionEffect=function(t,e){return wn.current.useInsertionEffect(t,e)};ct.useLayoutEffect=function(t,e){return wn.current.useLayoutEffect(t,e)};ct.useMemo=function(t,e){return wn.current.useMemo(t,e)};ct.useReducer=function(t,e,n){return wn.current.useReducer(t,e,n)};ct.useRef=function(t){return wn.current.useRef(t)};ct.useState=function(t){return wn.current.useState(t)};ct.useSyncExternalStore=function(t,e,n){return wn.current.useSyncExternalStore(t,e,n)};ct.useTransition=function(){return wn.current.useTransition()};ct.version="18.3.1";E0.exports=ct;var le=E0.exports;const N0=Jx(le),py=jx({__proto__:null,default:N0},[le]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var my=le,gy=Symbol.for("react.element"),vy=Symbol.for("react.fragment"),_y=Object.prototype.hasOwnProperty,xy=my.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,yy={key:!0,ref:!0,__self:!0,__source:!0};function D0(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)_y.call(e,i)&&!yy.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:gy,type:t,key:s,ref:o,props:r,_owner:xy.current}}Vc.Fragment=vy;Vc.jsx=D0;Vc.jsxs=D0;M0.exports=Vc;var K=M0.exports,Cf={},I0={exports:{}},Wn={},U0={exports:{}},F0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(V,O){var G=V.length;V.push(O);e:for(;0<G;){var ee=G-1>>>1,Se=V[ee];if(0<r(Se,O))V[ee]=O,V[G]=Se,G=ee;else break e}}function n(V){return V.length===0?null:V[0]}function i(V){if(V.length===0)return null;var O=V[0],G=V.pop();if(G!==O){V[0]=G;e:for(var ee=0,Se=V.length,Le=Se>>>1;ee<Le;){var Ye=2*(ee+1)-1,qe=V[Ye],$e=Ye+1,U=V[$e];if(0>r(qe,G))$e<Se&&0>r(U,qe)?(V[ee]=U,V[$e]=G,ee=$e):(V[ee]=qe,V[Ye]=G,ee=Ye);else if($e<Se&&0>r(U,G))V[ee]=U,V[$e]=G,ee=$e;else break e}}return O}function r(V,O){var G=V.sortIndex-O.sortIndex;return G!==0?G:V.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],f=1,h=null,u=3,p=!1,g=!1,M=!1,m=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function S(V){for(var O=n(c);O!==null;){if(O.callback===null)i(c);else if(O.startTime<=V)i(c),O.sortIndex=O.expirationTime,e(l,O);else break;O=n(c)}}function y(V){if(M=!1,S(V),!g)if(n(l)!==null)g=!0,q(w);else{var O=n(c);O!==null&&W(y,O.startTime-V)}}function w(V,O){g=!1,M&&(M=!1,d(x),x=-1),p=!0;var G=u;try{for(S(O),h=n(l);h!==null&&(!(h.expirationTime>O)||V&&!N());){var ee=h.callback;if(typeof ee=="function"){h.callback=null,u=h.priorityLevel;var Se=ee(h.expirationTime<=O);O=t.unstable_now(),typeof Se=="function"?h.callback=Se:h===n(l)&&i(l),S(O)}else i(l);h=n(l)}if(h!==null)var Le=!0;else{var Ye=n(c);Ye!==null&&W(y,Ye.startTime-O),Le=!1}return Le}finally{h=null,u=G,p=!1}}var T=!1,C=null,x=-1,R=5,b=-1;function N(){return!(t.unstable_now()-b<R)}function X(){if(C!==null){var V=t.unstable_now();b=V;var O=!0;try{O=C(!0,V)}finally{O?L():(T=!1,C=null)}}else T=!1}var L;if(typeof v=="function")L=function(){v(X)};else if(typeof MessageChannel<"u"){var D=new MessageChannel,I=D.port2;D.port1.onmessage=X,L=function(){I.postMessage(null)}}else L=function(){m(X,0)};function q(V){C=V,T||(T=!0,L())}function W(V,O){x=m(function(){V(t.unstable_now())},O)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(V){V.callback=null},t.unstable_continueExecution=function(){g||p||(g=!0,q(w))},t.unstable_forceFrameRate=function(V){0>V||125<V?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<V?Math.floor(1e3/V):5},t.unstable_getCurrentPriorityLevel=function(){return u},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(V){switch(u){case 1:case 2:case 3:var O=3;break;default:O=u}var G=u;u=O;try{return V()}finally{u=G}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(V,O){switch(V){case 1:case 2:case 3:case 4:case 5:break;default:V=3}var G=u;u=V;try{return O()}finally{u=G}},t.unstable_scheduleCallback=function(V,O,G){var ee=t.unstable_now();switch(typeof G=="object"&&G!==null?(G=G.delay,G=typeof G=="number"&&0<G?ee+G:ee):G=ee,V){case 1:var Se=-1;break;case 2:Se=250;break;case 5:Se=1073741823;break;case 4:Se=1e4;break;default:Se=5e3}return Se=G+Se,V={id:f++,callback:O,priorityLevel:V,startTime:G,expirationTime:Se,sortIndex:-1},G>ee?(V.sortIndex=G,e(c,V),n(l)===null&&V===n(c)&&(M?(d(x),x=-1):M=!0,W(y,G-ee))):(V.sortIndex=Se,e(l,V),g||p||(g=!0,q(w))),V},t.unstable_shouldYield=N,t.unstable_wrapCallback=function(V){var O=u;return function(){var G=u;u=O;try{return V.apply(this,arguments)}finally{u=G}}}})(F0);U0.exports=F0;var Sy=U0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var My=le,Gn=Sy;function Me(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var O0=new Set,la={};function ps(t,e){so(t,e),so(t+"Capture",e)}function so(t,e){for(la[t]=e,t=0;t<e.length;t++)O0.add(e[t])}var tr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Rf=Object.prototype.hasOwnProperty,Ey=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Gp={},Wp={};function wy(t){return Rf.call(Wp,t)?!0:Rf.call(Gp,t)?!1:Ey.test(t)?Wp[t]=!0:(Gp[t]=!0,!1)}function Ty(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Ay(t,e,n,i){if(e===null||typeof e>"u"||Ty(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Tn(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var on={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){on[t]=new Tn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];on[e]=new Tn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){on[t]=new Tn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){on[t]=new Tn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){on[t]=new Tn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){on[t]=new Tn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){on[t]=new Tn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){on[t]=new Tn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){on[t]=new Tn(t,5,!1,t.toLowerCase(),null,!1,!1)});var Eh=/[\-:]([a-z])/g;function wh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Eh,wh);on[e]=new Tn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Eh,wh);on[e]=new Tn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Eh,wh);on[e]=new Tn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){on[t]=new Tn(t,1,!1,t.toLowerCase(),null,!1,!1)});on.xlinkHref=new Tn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){on[t]=new Tn(t,1,!1,t.toLowerCase(),null,!0,!0)});function Th(t,e,n,i){var r=on.hasOwnProperty(e)?on[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Ay(e,n,r,i)&&(n=null),i||r===null?wy(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var or=My.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ka=Symbol.for("react.element"),Os=Symbol.for("react.portal"),ks=Symbol.for("react.fragment"),Ah=Symbol.for("react.strict_mode"),bf=Symbol.for("react.profiler"),k0=Symbol.for("react.provider"),B0=Symbol.for("react.context"),Ch=Symbol.for("react.forward_ref"),Pf=Symbol.for("react.suspense"),Lf=Symbol.for("react.suspense_list"),Rh=Symbol.for("react.memo"),vr=Symbol.for("react.lazy"),z0=Symbol.for("react.offscreen"),Xp=Symbol.iterator;function wo(t){return t===null||typeof t!="object"?null:(t=Xp&&t[Xp]||t["@@iterator"],typeof t=="function"?t:null)}var Nt=Object.assign,du;function zo(t){if(du===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);du=e&&e[1]||""}return`
`+du+t}var hu=!1;function pu(t,e){if(!t||hu)return"";hu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{hu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?zo(t):""}function Cy(t){switch(t.tag){case 5:return zo(t.type);case 16:return zo("Lazy");case 13:return zo("Suspense");case 19:return zo("SuspenseList");case 0:case 2:case 15:return t=pu(t.type,!1),t;case 11:return t=pu(t.type.render,!1),t;case 1:return t=pu(t.type,!0),t;default:return""}}function Nf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ks:return"Fragment";case Os:return"Portal";case bf:return"Profiler";case Ah:return"StrictMode";case Pf:return"Suspense";case Lf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case B0:return(t.displayName||"Context")+".Consumer";case k0:return(t._context.displayName||"Context")+".Provider";case Ch:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Rh:return e=t.displayName||null,e!==null?e:Nf(t.type)||"Memo";case vr:e=t._payload,t=t._init;try{return Nf(t(e))}catch{}}return null}function Ry(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Nf(e);case 8:return e===Ah?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Or(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function V0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function by(t){var e=V0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Za(t){t._valueTracker||(t._valueTracker=by(t))}function H0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=V0(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function ac(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Df(t,e){var n=e.checked;return Nt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function $p(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Or(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function G0(t,e){e=e.checked,e!=null&&Th(t,"checked",e,!1)}function If(t,e){G0(t,e);var n=Or(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Uf(t,e.type,n):e.hasOwnProperty("defaultValue")&&Uf(t,e.type,Or(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Yp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Uf(t,e,n){(e!=="number"||ac(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Vo=Array.isArray;function js(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Or(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Ff(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(Me(91));return Nt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function qp(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(Me(92));if(Vo(n)){if(1<n.length)throw Error(Me(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Or(n)}}function W0(t,e){var n=Or(e.value),i=Or(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Kp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function X0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Of(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?X0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ja,$0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ja=ja||document.createElement("div"),ja.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ja.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ca(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ko={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Py=["Webkit","ms","Moz","O"];Object.keys(Ko).forEach(function(t){Py.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ko[e]=Ko[t]})});function Y0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ko.hasOwnProperty(t)&&Ko[t]?(""+e).trim():e+"px"}function q0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Y0(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var Ly=Nt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function kf(t,e){if(e){if(Ly[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(Me(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(Me(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(Me(61))}if(e.style!=null&&typeof e.style!="object")throw Error(Me(62))}}function Bf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var zf=null;function bh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Vf=null,Js=null,Qs=null;function Zp(t){if(t=ka(t)){if(typeof Vf!="function")throw Error(Me(280));var e=t.stateNode;e&&(e=$c(e),Vf(t.stateNode,t.type,e))}}function K0(t){Js?Qs?Qs.push(t):Qs=[t]:Js=t}function Z0(){if(Js){var t=Js,e=Qs;if(Qs=Js=null,Zp(t),e)for(t=0;t<e.length;t++)Zp(e[t])}}function j0(t,e){return t(e)}function J0(){}var mu=!1;function Q0(t,e,n){if(mu)return t(e,n);mu=!0;try{return j0(t,e,n)}finally{mu=!1,(Js!==null||Qs!==null)&&(J0(),Z0())}}function ua(t,e){var n=t.stateNode;if(n===null)return null;var i=$c(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(Me(231,e,typeof n));return n}var Hf=!1;if(tr)try{var To={};Object.defineProperty(To,"passive",{get:function(){Hf=!0}}),window.addEventListener("test",To,To),window.removeEventListener("test",To,To)}catch{Hf=!1}function Ny(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(f){this.onError(f)}}var Zo=!1,lc=null,cc=!1,Gf=null,Dy={onError:function(t){Zo=!0,lc=t}};function Iy(t,e,n,i,r,s,o,a,l){Zo=!1,lc=null,Ny.apply(Dy,arguments)}function Uy(t,e,n,i,r,s,o,a,l){if(Iy.apply(this,arguments),Zo){if(Zo){var c=lc;Zo=!1,lc=null}else throw Error(Me(198));cc||(cc=!0,Gf=c)}}function ms(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function ev(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function jp(t){if(ms(t)!==t)throw Error(Me(188))}function Fy(t){var e=t.alternate;if(!e){if(e=ms(t),e===null)throw Error(Me(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return jp(r),t;if(s===i)return jp(r),e;s=s.sibling}throw Error(Me(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(Me(189))}}if(n.alternate!==i)throw Error(Me(190))}if(n.tag!==3)throw Error(Me(188));return n.stateNode.current===n?t:e}function tv(t){return t=Fy(t),t!==null?nv(t):null}function nv(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=nv(t);if(e!==null)return e;t=t.sibling}return null}var iv=Gn.unstable_scheduleCallback,Jp=Gn.unstable_cancelCallback,Oy=Gn.unstable_shouldYield,ky=Gn.unstable_requestPaint,Ot=Gn.unstable_now,By=Gn.unstable_getCurrentPriorityLevel,Ph=Gn.unstable_ImmediatePriority,rv=Gn.unstable_UserBlockingPriority,uc=Gn.unstable_NormalPriority,zy=Gn.unstable_LowPriority,sv=Gn.unstable_IdlePriority,Hc=null,Pi=null;function Vy(t){if(Pi&&typeof Pi.onCommitFiberRoot=="function")try{Pi.onCommitFiberRoot(Hc,t,void 0,(t.current.flags&128)===128)}catch{}}var mi=Math.clz32?Math.clz32:Wy,Hy=Math.log,Gy=Math.LN2;function Wy(t){return t>>>=0,t===0?32:31-(Hy(t)/Gy|0)|0}var Ja=64,Qa=4194304;function Ho(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function fc(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=Ho(a):(s&=o,s!==0&&(i=Ho(s)))}else o=n&~r,o!==0?i=Ho(o):s!==0&&(i=Ho(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-mi(e),r=1<<n,i|=t[n],e&=~r;return i}function Xy(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function $y(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-mi(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=Xy(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Wf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function ov(){var t=Ja;return Ja<<=1,!(Ja&4194240)&&(Ja=64),t}function gu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Fa(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-mi(e),t[e]=n}function Yy(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-mi(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Lh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-mi(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var yt=0;function av(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var lv,Nh,cv,uv,fv,Xf=!1,el=[],Rr=null,br=null,Pr=null,fa=new Map,da=new Map,yr=[],qy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Qp(t,e){switch(t){case"focusin":case"focusout":Rr=null;break;case"dragenter":case"dragleave":br=null;break;case"mouseover":case"mouseout":Pr=null;break;case"pointerover":case"pointerout":fa.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":da.delete(e.pointerId)}}function Ao(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=ka(e),e!==null&&Nh(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function Ky(t,e,n,i,r){switch(e){case"focusin":return Rr=Ao(Rr,t,e,n,i,r),!0;case"dragenter":return br=Ao(br,t,e,n,i,r),!0;case"mouseover":return Pr=Ao(Pr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return fa.set(s,Ao(fa.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,da.set(s,Ao(da.get(s)||null,t,e,n,i,r)),!0}return!1}function dv(t){var e=Qr(t.target);if(e!==null){var n=ms(e);if(n!==null){if(e=n.tag,e===13){if(e=ev(n),e!==null){t.blockedOn=e,fv(t.priority,function(){cv(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Gl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=$f(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);zf=i,n.target.dispatchEvent(i),zf=null}else return e=ka(n),e!==null&&Nh(e),t.blockedOn=n,!1;e.shift()}return!0}function em(t,e,n){Gl(t)&&n.delete(e)}function Zy(){Xf=!1,Rr!==null&&Gl(Rr)&&(Rr=null),br!==null&&Gl(br)&&(br=null),Pr!==null&&Gl(Pr)&&(Pr=null),fa.forEach(em),da.forEach(em)}function Co(t,e){t.blockedOn===e&&(t.blockedOn=null,Xf||(Xf=!0,Gn.unstable_scheduleCallback(Gn.unstable_NormalPriority,Zy)))}function ha(t){function e(r){return Co(r,t)}if(0<el.length){Co(el[0],t);for(var n=1;n<el.length;n++){var i=el[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Rr!==null&&Co(Rr,t),br!==null&&Co(br,t),Pr!==null&&Co(Pr,t),fa.forEach(e),da.forEach(e),n=0;n<yr.length;n++)i=yr[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<yr.length&&(n=yr[0],n.blockedOn===null);)dv(n),n.blockedOn===null&&yr.shift()}var eo=or.ReactCurrentBatchConfig,dc=!0;function jy(t,e,n,i){var r=yt,s=eo.transition;eo.transition=null;try{yt=1,Dh(t,e,n,i)}finally{yt=r,eo.transition=s}}function Jy(t,e,n,i){var r=yt,s=eo.transition;eo.transition=null;try{yt=4,Dh(t,e,n,i)}finally{yt=r,eo.transition=s}}function Dh(t,e,n,i){if(dc){var r=$f(t,e,n,i);if(r===null)Au(t,e,i,hc,n),Qp(t,i);else if(Ky(r,t,e,n,i))i.stopPropagation();else if(Qp(t,i),e&4&&-1<qy.indexOf(t)){for(;r!==null;){var s=ka(r);if(s!==null&&lv(s),s=$f(t,e,n,i),s===null&&Au(t,e,i,hc,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Au(t,e,i,null,n)}}var hc=null;function $f(t,e,n,i){if(hc=null,t=bh(i),t=Qr(t),t!==null)if(e=ms(t),e===null)t=null;else if(n=e.tag,n===13){if(t=ev(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return hc=t,null}function hv(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(By()){case Ph:return 1;case rv:return 4;case uc:case zy:return 16;case sv:return 536870912;default:return 16}default:return 16}}var Er=null,Ih=null,Wl=null;function pv(){if(Wl)return Wl;var t,e=Ih,n=e.length,i,r="value"in Er?Er.value:Er.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return Wl=r.slice(t,1<i?1-i:void 0)}function Xl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function tl(){return!0}function tm(){return!1}function Xn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?tl:tm,this.isPropagationStopped=tm,this}return Nt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=tl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=tl)},persist:function(){},isPersistent:tl}),e}var vo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Uh=Xn(vo),Oa=Nt({},vo,{view:0,detail:0}),Qy=Xn(Oa),vu,_u,Ro,Gc=Nt({},Oa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Fh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ro&&(Ro&&t.type==="mousemove"?(vu=t.screenX-Ro.screenX,_u=t.screenY-Ro.screenY):_u=vu=0,Ro=t),vu)},movementY:function(t){return"movementY"in t?t.movementY:_u}}),nm=Xn(Gc),eS=Nt({},Gc,{dataTransfer:0}),tS=Xn(eS),nS=Nt({},Oa,{relatedTarget:0}),xu=Xn(nS),iS=Nt({},vo,{animationName:0,elapsedTime:0,pseudoElement:0}),rS=Xn(iS),sS=Nt({},vo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),oS=Xn(sS),aS=Nt({},vo,{data:0}),im=Xn(aS),lS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},cS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},uS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function fS(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=uS[t])?!!e[t]:!1}function Fh(){return fS}var dS=Nt({},Oa,{key:function(t){if(t.key){var e=lS[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Xl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?cS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Fh,charCode:function(t){return t.type==="keypress"?Xl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Xl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),hS=Xn(dS),pS=Nt({},Gc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),rm=Xn(pS),mS=Nt({},Oa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Fh}),gS=Xn(mS),vS=Nt({},vo,{propertyName:0,elapsedTime:0,pseudoElement:0}),_S=Xn(vS),xS=Nt({},Gc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),yS=Xn(xS),SS=[9,13,27,32],Oh=tr&&"CompositionEvent"in window,jo=null;tr&&"documentMode"in document&&(jo=document.documentMode);var MS=tr&&"TextEvent"in window&&!jo,mv=tr&&(!Oh||jo&&8<jo&&11>=jo),sm=" ",om=!1;function gv(t,e){switch(t){case"keyup":return SS.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function vv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Bs=!1;function ES(t,e){switch(t){case"compositionend":return vv(e);case"keypress":return e.which!==32?null:(om=!0,sm);case"textInput":return t=e.data,t===sm&&om?null:t;default:return null}}function wS(t,e){if(Bs)return t==="compositionend"||!Oh&&gv(t,e)?(t=pv(),Wl=Ih=Er=null,Bs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return mv&&e.locale!=="ko"?null:e.data;default:return null}}var TS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function am(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!TS[t.type]:e==="textarea"}function _v(t,e,n,i){K0(i),e=pc(e,"onChange"),0<e.length&&(n=new Uh("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Jo=null,pa=null;function AS(t){bv(t,0)}function Wc(t){var e=Hs(t);if(H0(e))return t}function CS(t,e){if(t==="change")return e}var xv=!1;if(tr){var yu;if(tr){var Su="oninput"in document;if(!Su){var lm=document.createElement("div");lm.setAttribute("oninput","return;"),Su=typeof lm.oninput=="function"}yu=Su}else yu=!1;xv=yu&&(!document.documentMode||9<document.documentMode)}function cm(){Jo&&(Jo.detachEvent("onpropertychange",yv),pa=Jo=null)}function yv(t){if(t.propertyName==="value"&&Wc(pa)){var e=[];_v(e,pa,t,bh(t)),Q0(AS,e)}}function RS(t,e,n){t==="focusin"?(cm(),Jo=e,pa=n,Jo.attachEvent("onpropertychange",yv)):t==="focusout"&&cm()}function bS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Wc(pa)}function PS(t,e){if(t==="click")return Wc(e)}function LS(t,e){if(t==="input"||t==="change")return Wc(e)}function NS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var _i=typeof Object.is=="function"?Object.is:NS;function ma(t,e){if(_i(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Rf.call(e,r)||!_i(t[r],e[r]))return!1}return!0}function um(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function fm(t,e){var n=um(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=um(n)}}function Sv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Sv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Mv(){for(var t=window,e=ac();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=ac(t.document)}return e}function kh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function DS(t){var e=Mv(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Sv(n.ownerDocument.documentElement,n)){if(i!==null&&kh(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=fm(n,s);var o=fm(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var IS=tr&&"documentMode"in document&&11>=document.documentMode,zs=null,Yf=null,Qo=null,qf=!1;function dm(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;qf||zs==null||zs!==ac(i)||(i=zs,"selectionStart"in i&&kh(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Qo&&ma(Qo,i)||(Qo=i,i=pc(Yf,"onSelect"),0<i.length&&(e=new Uh("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=zs)))}function nl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Vs={animationend:nl("Animation","AnimationEnd"),animationiteration:nl("Animation","AnimationIteration"),animationstart:nl("Animation","AnimationStart"),transitionend:nl("Transition","TransitionEnd")},Mu={},Ev={};tr&&(Ev=document.createElement("div").style,"AnimationEvent"in window||(delete Vs.animationend.animation,delete Vs.animationiteration.animation,delete Vs.animationstart.animation),"TransitionEvent"in window||delete Vs.transitionend.transition);function Xc(t){if(Mu[t])return Mu[t];if(!Vs[t])return t;var e=Vs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Ev)return Mu[t]=e[n];return t}var wv=Xc("animationend"),Tv=Xc("animationiteration"),Av=Xc("animationstart"),Cv=Xc("transitionend"),Rv=new Map,hm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Vr(t,e){Rv.set(t,e),ps(e,[t])}for(var Eu=0;Eu<hm.length;Eu++){var wu=hm[Eu],US=wu.toLowerCase(),FS=wu[0].toUpperCase()+wu.slice(1);Vr(US,"on"+FS)}Vr(wv,"onAnimationEnd");Vr(Tv,"onAnimationIteration");Vr(Av,"onAnimationStart");Vr("dblclick","onDoubleClick");Vr("focusin","onFocus");Vr("focusout","onBlur");Vr(Cv,"onTransitionEnd");so("onMouseEnter",["mouseout","mouseover"]);so("onMouseLeave",["mouseout","mouseover"]);so("onPointerEnter",["pointerout","pointerover"]);so("onPointerLeave",["pointerout","pointerover"]);ps("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ps("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ps("onBeforeInput",["compositionend","keypress","textInput","paste"]);ps("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ps("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ps("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Go="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),OS=new Set("cancel close invalid load scroll toggle".split(" ").concat(Go));function pm(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,Uy(i,e,void 0,t),t.currentTarget=null}function bv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;pm(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;pm(r,a,c),s=l}}}if(cc)throw t=Gf,cc=!1,Gf=null,t}function Et(t,e){var n=e[Qf];n===void 0&&(n=e[Qf]=new Set);var i=t+"__bubble";n.has(i)||(Pv(e,t,2,!1),n.add(i))}function Tu(t,e,n){var i=0;e&&(i|=4),Pv(n,t,i,e)}var il="_reactListening"+Math.random().toString(36).slice(2);function ga(t){if(!t[il]){t[il]=!0,O0.forEach(function(n){n!=="selectionchange"&&(OS.has(n)||Tu(n,!1,t),Tu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[il]||(e[il]=!0,Tu("selectionchange",!1,e))}}function Pv(t,e,n,i){switch(hv(e)){case 1:var r=jy;break;case 4:r=Jy;break;default:r=Dh}n=r.bind(null,e,n,t),r=void 0,!Hf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Au(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Qr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}Q0(function(){var c=s,f=bh(n),h=[];e:{var u=Rv.get(t);if(u!==void 0){var p=Uh,g=t;switch(t){case"keypress":if(Xl(n)===0)break e;case"keydown":case"keyup":p=hS;break;case"focusin":g="focus",p=xu;break;case"focusout":g="blur",p=xu;break;case"beforeblur":case"afterblur":p=xu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=nm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=tS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=gS;break;case wv:case Tv:case Av:p=rS;break;case Cv:p=_S;break;case"scroll":p=Qy;break;case"wheel":p=yS;break;case"copy":case"cut":case"paste":p=oS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=rm}var M=(e&4)!==0,m=!M&&t==="scroll",d=M?u!==null?u+"Capture":null:u;M=[];for(var v=c,S;v!==null;){S=v;var y=S.stateNode;if(S.tag===5&&y!==null&&(S=y,d!==null&&(y=ua(v,d),y!=null&&M.push(va(v,y,S)))),m)break;v=v.return}0<M.length&&(u=new p(u,g,null,n,f),h.push({event:u,listeners:M}))}}if(!(e&7)){e:{if(u=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",u&&n!==zf&&(g=n.relatedTarget||n.fromElement)&&(Qr(g)||g[nr]))break e;if((p||u)&&(u=f.window===f?f:(u=f.ownerDocument)?u.defaultView||u.parentWindow:window,p?(g=n.relatedTarget||n.toElement,p=c,g=g?Qr(g):null,g!==null&&(m=ms(g),g!==m||g.tag!==5&&g.tag!==6)&&(g=null)):(p=null,g=c),p!==g)){if(M=nm,y="onMouseLeave",d="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(M=rm,y="onPointerLeave",d="onPointerEnter",v="pointer"),m=p==null?u:Hs(p),S=g==null?u:Hs(g),u=new M(y,v+"leave",p,n,f),u.target=m,u.relatedTarget=S,y=null,Qr(f)===c&&(M=new M(d,v+"enter",g,n,f),M.target=S,M.relatedTarget=m,y=M),m=y,p&&g)t:{for(M=p,d=g,v=0,S=M;S;S=ys(S))v++;for(S=0,y=d;y;y=ys(y))S++;for(;0<v-S;)M=ys(M),v--;for(;0<S-v;)d=ys(d),S--;for(;v--;){if(M===d||d!==null&&M===d.alternate)break t;M=ys(M),d=ys(d)}M=null}else M=null;p!==null&&mm(h,u,p,M,!1),g!==null&&m!==null&&mm(h,m,g,M,!0)}}e:{if(u=c?Hs(c):window,p=u.nodeName&&u.nodeName.toLowerCase(),p==="select"||p==="input"&&u.type==="file")var w=CS;else if(am(u))if(xv)w=LS;else{w=bS;var T=RS}else(p=u.nodeName)&&p.toLowerCase()==="input"&&(u.type==="checkbox"||u.type==="radio")&&(w=PS);if(w&&(w=w(t,c))){_v(h,w,n,f);break e}T&&T(t,u,c),t==="focusout"&&(T=u._wrapperState)&&T.controlled&&u.type==="number"&&Uf(u,"number",u.value)}switch(T=c?Hs(c):window,t){case"focusin":(am(T)||T.contentEditable==="true")&&(zs=T,Yf=c,Qo=null);break;case"focusout":Qo=Yf=zs=null;break;case"mousedown":qf=!0;break;case"contextmenu":case"mouseup":case"dragend":qf=!1,dm(h,n,f);break;case"selectionchange":if(IS)break;case"keydown":case"keyup":dm(h,n,f)}var C;if(Oh)e:{switch(t){case"compositionstart":var x="onCompositionStart";break e;case"compositionend":x="onCompositionEnd";break e;case"compositionupdate":x="onCompositionUpdate";break e}x=void 0}else Bs?gv(t,n)&&(x="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(x="onCompositionStart");x&&(mv&&n.locale!=="ko"&&(Bs||x!=="onCompositionStart"?x==="onCompositionEnd"&&Bs&&(C=pv()):(Er=f,Ih="value"in Er?Er.value:Er.textContent,Bs=!0)),T=pc(c,x),0<T.length&&(x=new im(x,t,null,n,f),h.push({event:x,listeners:T}),C?x.data=C:(C=vv(n),C!==null&&(x.data=C)))),(C=MS?ES(t,n):wS(t,n))&&(c=pc(c,"onBeforeInput"),0<c.length&&(f=new im("onBeforeInput","beforeinput",null,n,f),h.push({event:f,listeners:c}),f.data=C))}bv(h,e)})}function va(t,e,n){return{instance:t,listener:e,currentTarget:n}}function pc(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=ua(t,n),s!=null&&i.unshift(va(t,s,r)),s=ua(t,e),s!=null&&i.push(va(t,s,r))),t=t.return}return i}function ys(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function mm(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=ua(n,s),l!=null&&o.unshift(va(n,l,a))):r||(l=ua(n,s),l!=null&&o.push(va(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var kS=/\r\n?/g,BS=/\u0000|\uFFFD/g;function gm(t){return(typeof t=="string"?t:""+t).replace(kS,`
`).replace(BS,"")}function rl(t,e,n){if(e=gm(e),gm(t)!==e&&n)throw Error(Me(425))}function mc(){}var Kf=null,Zf=null;function jf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Jf=typeof setTimeout=="function"?setTimeout:void 0,zS=typeof clearTimeout=="function"?clearTimeout:void 0,vm=typeof Promise=="function"?Promise:void 0,VS=typeof queueMicrotask=="function"?queueMicrotask:typeof vm<"u"?function(t){return vm.resolve(null).then(t).catch(HS)}:Jf;function HS(t){setTimeout(function(){throw t})}function Cu(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),ha(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);ha(e)}function Lr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function _m(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var _o=Math.random().toString(36).slice(2),Ai="__reactFiber$"+_o,_a="__reactProps$"+_o,nr="__reactContainer$"+_o,Qf="__reactEvents$"+_o,GS="__reactListeners$"+_o,WS="__reactHandles$"+_o;function Qr(t){var e=t[Ai];if(e)return e;for(var n=t.parentNode;n;){if(e=n[nr]||n[Ai]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=_m(t);t!==null;){if(n=t[Ai])return n;t=_m(t)}return e}t=n,n=t.parentNode}return null}function ka(t){return t=t[Ai]||t[nr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Hs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(Me(33))}function $c(t){return t[_a]||null}var ed=[],Gs=-1;function Hr(t){return{current:t}}function wt(t){0>Gs||(t.current=ed[Gs],ed[Gs]=null,Gs--)}function Mt(t,e){Gs++,ed[Gs]=t.current,t.current=e}var kr={},vn=Hr(kr),Pn=Hr(!1),ss=kr;function oo(t,e){var n=t.type.contextTypes;if(!n)return kr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function Ln(t){return t=t.childContextTypes,t!=null}function gc(){wt(Pn),wt(vn)}function xm(t,e,n){if(vn.current!==kr)throw Error(Me(168));Mt(vn,e),Mt(Pn,n)}function Lv(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(Me(108,Ry(t)||"Unknown",r));return Nt({},n,i)}function vc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||kr,ss=vn.current,Mt(vn,t),Mt(Pn,Pn.current),!0}function ym(t,e,n){var i=t.stateNode;if(!i)throw Error(Me(169));n?(t=Lv(t,e,ss),i.__reactInternalMemoizedMergedChildContext=t,wt(Pn),wt(vn),Mt(vn,t)):wt(Pn),Mt(Pn,n)}var qi=null,Yc=!1,Ru=!1;function Nv(t){qi===null?qi=[t]:qi.push(t)}function XS(t){Yc=!0,Nv(t)}function Gr(){if(!Ru&&qi!==null){Ru=!0;var t=0,e=yt;try{var n=qi;for(yt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}qi=null,Yc=!1}catch(r){throw qi!==null&&(qi=qi.slice(t+1)),iv(Ph,Gr),r}finally{yt=e,Ru=!1}}return null}var Ws=[],Xs=0,_c=null,xc=0,Kn=[],Zn=0,os=null,Ki=1,Zi="";function jr(t,e){Ws[Xs++]=xc,Ws[Xs++]=_c,_c=t,xc=e}function Dv(t,e,n){Kn[Zn++]=Ki,Kn[Zn++]=Zi,Kn[Zn++]=os,os=t;var i=Ki;t=Zi;var r=32-mi(i)-1;i&=~(1<<r),n+=1;var s=32-mi(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Ki=1<<32-mi(e)+r|n<<r|i,Zi=s+t}else Ki=1<<s|n<<r|i,Zi=t}function Bh(t){t.return!==null&&(jr(t,1),Dv(t,1,0))}function zh(t){for(;t===_c;)_c=Ws[--Xs],Ws[Xs]=null,xc=Ws[--Xs],Ws[Xs]=null;for(;t===os;)os=Kn[--Zn],Kn[Zn]=null,Zi=Kn[--Zn],Kn[Zn]=null,Ki=Kn[--Zn],Kn[Zn]=null}var Hn=null,Vn=null,At=!1,fi=null;function Iv(t,e){var n=Jn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Sm(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Hn=t,Vn=Lr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Hn=t,Vn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=os!==null?{id:Ki,overflow:Zi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Jn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Hn=t,Vn=null,!0):!1;default:return!1}}function td(t){return(t.mode&1)!==0&&(t.flags&128)===0}function nd(t){if(At){var e=Vn;if(e){var n=e;if(!Sm(t,e)){if(td(t))throw Error(Me(418));e=Lr(n.nextSibling);var i=Hn;e&&Sm(t,e)?Iv(i,n):(t.flags=t.flags&-4097|2,At=!1,Hn=t)}}else{if(td(t))throw Error(Me(418));t.flags=t.flags&-4097|2,At=!1,Hn=t}}}function Mm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Hn=t}function sl(t){if(t!==Hn)return!1;if(!At)return Mm(t),At=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!jf(t.type,t.memoizedProps)),e&&(e=Vn)){if(td(t))throw Uv(),Error(Me(418));for(;e;)Iv(t,e),e=Lr(e.nextSibling)}if(Mm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(Me(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Vn=Lr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Vn=null}}else Vn=Hn?Lr(t.stateNode.nextSibling):null;return!0}function Uv(){for(var t=Vn;t;)t=Lr(t.nextSibling)}function ao(){Vn=Hn=null,At=!1}function Vh(t){fi===null?fi=[t]:fi.push(t)}var $S=or.ReactCurrentBatchConfig;function bo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(Me(309));var i=n.stateNode}if(!i)throw Error(Me(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(Me(284));if(!n._owner)throw Error(Me(290,t))}return t}function ol(t,e){throw t=Object.prototype.toString.call(e),Error(Me(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Em(t){var e=t._init;return e(t._payload)}function Fv(t){function e(d,v){if(t){var S=d.deletions;S===null?(d.deletions=[v],d.flags|=16):S.push(v)}}function n(d,v){if(!t)return null;for(;v!==null;)e(d,v),v=v.sibling;return null}function i(d,v){for(d=new Map;v!==null;)v.key!==null?d.set(v.key,v):d.set(v.index,v),v=v.sibling;return d}function r(d,v){return d=Ur(d,v),d.index=0,d.sibling=null,d}function s(d,v,S){return d.index=S,t?(S=d.alternate,S!==null?(S=S.index,S<v?(d.flags|=2,v):S):(d.flags|=2,v)):(d.flags|=1048576,v)}function o(d){return t&&d.alternate===null&&(d.flags|=2),d}function a(d,v,S,y){return v===null||v.tag!==6?(v=Uu(S,d.mode,y),v.return=d,v):(v=r(v,S),v.return=d,v)}function l(d,v,S,y){var w=S.type;return w===ks?f(d,v,S.props.children,y,S.key):v!==null&&(v.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===vr&&Em(w)===v.type)?(y=r(v,S.props),y.ref=bo(d,v,S),y.return=d,y):(y=Jl(S.type,S.key,S.props,null,d.mode,y),y.ref=bo(d,v,S),y.return=d,y)}function c(d,v,S,y){return v===null||v.tag!==4||v.stateNode.containerInfo!==S.containerInfo||v.stateNode.implementation!==S.implementation?(v=Fu(S,d.mode,y),v.return=d,v):(v=r(v,S.children||[]),v.return=d,v)}function f(d,v,S,y,w){return v===null||v.tag!==7?(v=rs(S,d.mode,y,w),v.return=d,v):(v=r(v,S),v.return=d,v)}function h(d,v,S){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Uu(""+v,d.mode,S),v.return=d,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Ka:return S=Jl(v.type,v.key,v.props,null,d.mode,S),S.ref=bo(d,null,v),S.return=d,S;case Os:return v=Fu(v,d.mode,S),v.return=d,v;case vr:var y=v._init;return h(d,y(v._payload),S)}if(Vo(v)||wo(v))return v=rs(v,d.mode,S,null),v.return=d,v;ol(d,v)}return null}function u(d,v,S,y){var w=v!==null?v.key:null;if(typeof S=="string"&&S!==""||typeof S=="number")return w!==null?null:a(d,v,""+S,y);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Ka:return S.key===w?l(d,v,S,y):null;case Os:return S.key===w?c(d,v,S,y):null;case vr:return w=S._init,u(d,v,w(S._payload),y)}if(Vo(S)||wo(S))return w!==null?null:f(d,v,S,y,null);ol(d,S)}return null}function p(d,v,S,y,w){if(typeof y=="string"&&y!==""||typeof y=="number")return d=d.get(S)||null,a(v,d,""+y,w);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Ka:return d=d.get(y.key===null?S:y.key)||null,l(v,d,y,w);case Os:return d=d.get(y.key===null?S:y.key)||null,c(v,d,y,w);case vr:var T=y._init;return p(d,v,S,T(y._payload),w)}if(Vo(y)||wo(y))return d=d.get(S)||null,f(v,d,y,w,null);ol(v,y)}return null}function g(d,v,S,y){for(var w=null,T=null,C=v,x=v=0,R=null;C!==null&&x<S.length;x++){C.index>x?(R=C,C=null):R=C.sibling;var b=u(d,C,S[x],y);if(b===null){C===null&&(C=R);break}t&&C&&b.alternate===null&&e(d,C),v=s(b,v,x),T===null?w=b:T.sibling=b,T=b,C=R}if(x===S.length)return n(d,C),At&&jr(d,x),w;if(C===null){for(;x<S.length;x++)C=h(d,S[x],y),C!==null&&(v=s(C,v,x),T===null?w=C:T.sibling=C,T=C);return At&&jr(d,x),w}for(C=i(d,C);x<S.length;x++)R=p(C,d,x,S[x],y),R!==null&&(t&&R.alternate!==null&&C.delete(R.key===null?x:R.key),v=s(R,v,x),T===null?w=R:T.sibling=R,T=R);return t&&C.forEach(function(N){return e(d,N)}),At&&jr(d,x),w}function M(d,v,S,y){var w=wo(S);if(typeof w!="function")throw Error(Me(150));if(S=w.call(S),S==null)throw Error(Me(151));for(var T=w=null,C=v,x=v=0,R=null,b=S.next();C!==null&&!b.done;x++,b=S.next()){C.index>x?(R=C,C=null):R=C.sibling;var N=u(d,C,b.value,y);if(N===null){C===null&&(C=R);break}t&&C&&N.alternate===null&&e(d,C),v=s(N,v,x),T===null?w=N:T.sibling=N,T=N,C=R}if(b.done)return n(d,C),At&&jr(d,x),w;if(C===null){for(;!b.done;x++,b=S.next())b=h(d,b.value,y),b!==null&&(v=s(b,v,x),T===null?w=b:T.sibling=b,T=b);return At&&jr(d,x),w}for(C=i(d,C);!b.done;x++,b=S.next())b=p(C,d,x,b.value,y),b!==null&&(t&&b.alternate!==null&&C.delete(b.key===null?x:b.key),v=s(b,v,x),T===null?w=b:T.sibling=b,T=b);return t&&C.forEach(function(X){return e(d,X)}),At&&jr(d,x),w}function m(d,v,S,y){if(typeof S=="object"&&S!==null&&S.type===ks&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case Ka:e:{for(var w=S.key,T=v;T!==null;){if(T.key===w){if(w=S.type,w===ks){if(T.tag===7){n(d,T.sibling),v=r(T,S.props.children),v.return=d,d=v;break e}}else if(T.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===vr&&Em(w)===T.type){n(d,T.sibling),v=r(T,S.props),v.ref=bo(d,T,S),v.return=d,d=v;break e}n(d,T);break}else e(d,T);T=T.sibling}S.type===ks?(v=rs(S.props.children,d.mode,y,S.key),v.return=d,d=v):(y=Jl(S.type,S.key,S.props,null,d.mode,y),y.ref=bo(d,v,S),y.return=d,d=y)}return o(d);case Os:e:{for(T=S.key;v!==null;){if(v.key===T)if(v.tag===4&&v.stateNode.containerInfo===S.containerInfo&&v.stateNode.implementation===S.implementation){n(d,v.sibling),v=r(v,S.children||[]),v.return=d,d=v;break e}else{n(d,v);break}else e(d,v);v=v.sibling}v=Fu(S,d.mode,y),v.return=d,d=v}return o(d);case vr:return T=S._init,m(d,v,T(S._payload),y)}if(Vo(S))return g(d,v,S,y);if(wo(S))return M(d,v,S,y);ol(d,S)}return typeof S=="string"&&S!==""||typeof S=="number"?(S=""+S,v!==null&&v.tag===6?(n(d,v.sibling),v=r(v,S),v.return=d,d=v):(n(d,v),v=Uu(S,d.mode,y),v.return=d,d=v),o(d)):n(d,v)}return m}var lo=Fv(!0),Ov=Fv(!1),yc=Hr(null),Sc=null,$s=null,Hh=null;function Gh(){Hh=$s=Sc=null}function Wh(t){var e=yc.current;wt(yc),t._currentValue=e}function id(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function to(t,e){Sc=t,Hh=$s=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(bn=!0),t.firstContext=null)}function ti(t){var e=t._currentValue;if(Hh!==t)if(t={context:t,memoizedValue:e,next:null},$s===null){if(Sc===null)throw Error(Me(308));$s=t,Sc.dependencies={lanes:0,firstContext:t}}else $s=$s.next=t;return e}var es=null;function Xh(t){es===null?es=[t]:es.push(t)}function kv(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Xh(e)):(n.next=r.next,r.next=n),e.interleaved=n,ir(t,i)}function ir(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var _r=!1;function $h(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Bv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ji(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Nr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,ht&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,ir(t,n)}return r=i.interleaved,r===null?(e.next=e,Xh(i)):(e.next=r.next,r.next=e),i.interleaved=e,ir(t,n)}function $l(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Lh(t,n)}}function wm(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Mc(t,e,n,i){var r=t.updateQueue;_r=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var f=t.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==o&&(a===null?f.firstBaseUpdate=c:a.next=c,f.lastBaseUpdate=l))}if(s!==null){var h=r.baseState;o=0,f=c=l=null,a=s;do{var u=a.lane,p=a.eventTime;if((i&u)===u){f!==null&&(f=f.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=t,M=a;switch(u=e,p=n,M.tag){case 1:if(g=M.payload,typeof g=="function"){h=g.call(p,h,u);break e}h=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=M.payload,u=typeof g=="function"?g.call(p,h,u):g,u==null)break e;h=Nt({},h,u);break e;case 2:_r=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,u=r.effects,u===null?r.effects=[a]:u.push(a))}else p={eventTime:p,lane:u,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(c=f=p,l=h):f=f.next=p,o|=u;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;u=a,a=u.next,u.next=null,r.lastBaseUpdate=u,r.shared.pending=null}}while(!0);if(f===null&&(l=h),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=f,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);ls|=o,t.lanes=o,t.memoizedState=h}}function Tm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(Me(191,r));r.call(i)}}}var Ba={},Li=Hr(Ba),xa=Hr(Ba),ya=Hr(Ba);function ts(t){if(t===Ba)throw Error(Me(174));return t}function Yh(t,e){switch(Mt(ya,e),Mt(xa,t),Mt(Li,Ba),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Of(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Of(e,t)}wt(Li),Mt(Li,e)}function co(){wt(Li),wt(xa),wt(ya)}function zv(t){ts(ya.current);var e=ts(Li.current),n=Of(e,t.type);e!==n&&(Mt(xa,t),Mt(Li,n))}function qh(t){xa.current===t&&(wt(Li),wt(xa))}var Rt=Hr(0);function Ec(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var bu=[];function Kh(){for(var t=0;t<bu.length;t++)bu[t]._workInProgressVersionPrimary=null;bu.length=0}var Yl=or.ReactCurrentDispatcher,Pu=or.ReactCurrentBatchConfig,as=0,Lt=null,Gt=null,Zt=null,wc=!1,ea=!1,Sa=0,YS=0;function un(){throw Error(Me(321))}function Zh(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!_i(t[n],e[n]))return!1;return!0}function jh(t,e,n,i,r,s){if(as=s,Lt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Yl.current=t===null||t.memoizedState===null?jS:JS,t=n(i,r),ea){s=0;do{if(ea=!1,Sa=0,25<=s)throw Error(Me(301));s+=1,Zt=Gt=null,e.updateQueue=null,Yl.current=QS,t=n(i,r)}while(ea)}if(Yl.current=Tc,e=Gt!==null&&Gt.next!==null,as=0,Zt=Gt=Lt=null,wc=!1,e)throw Error(Me(300));return t}function Jh(){var t=Sa!==0;return Sa=0,t}function wi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Zt===null?Lt.memoizedState=Zt=t:Zt=Zt.next=t,Zt}function ni(){if(Gt===null){var t=Lt.alternate;t=t!==null?t.memoizedState:null}else t=Gt.next;var e=Zt===null?Lt.memoizedState:Zt.next;if(e!==null)Zt=e,Gt=t;else{if(t===null)throw Error(Me(310));Gt=t,t={memoizedState:Gt.memoizedState,baseState:Gt.baseState,baseQueue:Gt.baseQueue,queue:Gt.queue,next:null},Zt===null?Lt.memoizedState=Zt=t:Zt=Zt.next=t}return Zt}function Ma(t,e){return typeof e=="function"?e(t):e}function Lu(t){var e=ni(),n=e.queue;if(n===null)throw Error(Me(311));n.lastRenderedReducer=t;var i=Gt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var f=c.lane;if((as&f)===f)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var h={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=h,o=i):l=l.next=h,Lt.lanes|=f,ls|=f}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,_i(i,e.memoizedState)||(bn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,Lt.lanes|=s,ls|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Nu(t){var e=ni(),n=e.queue;if(n===null)throw Error(Me(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);_i(s,e.memoizedState)||(bn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function Vv(){}function Hv(t,e){var n=Lt,i=ni(),r=e(),s=!_i(i.memoizedState,r);if(s&&(i.memoizedState=r,bn=!0),i=i.queue,Qh(Xv.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Zt!==null&&Zt.memoizedState.tag&1){if(n.flags|=2048,Ea(9,Wv.bind(null,n,i,r,e),void 0,null),jt===null)throw Error(Me(349));as&30||Gv(n,e,r)}return r}function Gv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Lt.updateQueue,e===null?(e={lastEffect:null,stores:null},Lt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Wv(t,e,n,i){e.value=n,e.getSnapshot=i,$v(e)&&Yv(t)}function Xv(t,e,n){return n(function(){$v(e)&&Yv(t)})}function $v(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!_i(t,n)}catch{return!0}}function Yv(t){var e=ir(t,1);e!==null&&gi(e,t,1,-1)}function Am(t){var e=wi();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ma,lastRenderedState:t},e.queue=t,t=t.dispatch=ZS.bind(null,Lt,t),[e.memoizedState,t]}function Ea(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=Lt.updateQueue,e===null?(e={lastEffect:null,stores:null},Lt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function qv(){return ni().memoizedState}function ql(t,e,n,i){var r=wi();Lt.flags|=t,r.memoizedState=Ea(1|e,n,void 0,i===void 0?null:i)}function qc(t,e,n,i){var r=ni();i=i===void 0?null:i;var s=void 0;if(Gt!==null){var o=Gt.memoizedState;if(s=o.destroy,i!==null&&Zh(i,o.deps)){r.memoizedState=Ea(e,n,s,i);return}}Lt.flags|=t,r.memoizedState=Ea(1|e,n,s,i)}function Cm(t,e){return ql(8390656,8,t,e)}function Qh(t,e){return qc(2048,8,t,e)}function Kv(t,e){return qc(4,2,t,e)}function Zv(t,e){return qc(4,4,t,e)}function jv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Jv(t,e,n){return n=n!=null?n.concat([t]):null,qc(4,4,jv.bind(null,e,t),n)}function ep(){}function Qv(t,e){var n=ni();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Zh(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function e_(t,e){var n=ni();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Zh(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function t_(t,e,n){return as&21?(_i(n,e)||(n=ov(),Lt.lanes|=n,ls|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,bn=!0),t.memoizedState=n)}function qS(t,e){var n=yt;yt=n!==0&&4>n?n:4,t(!0);var i=Pu.transition;Pu.transition={};try{t(!1),e()}finally{yt=n,Pu.transition=i}}function n_(){return ni().memoizedState}function KS(t,e,n){var i=Ir(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},i_(t))r_(e,n);else if(n=kv(t,e,n,i),n!==null){var r=En();gi(n,t,i,r),s_(n,e,i)}}function ZS(t,e,n){var i=Ir(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(i_(t))r_(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,_i(a,o)){var l=e.interleaved;l===null?(r.next=r,Xh(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=kv(t,e,r,i),n!==null&&(r=En(),gi(n,t,i,r),s_(n,e,i))}}function i_(t){var e=t.alternate;return t===Lt||e!==null&&e===Lt}function r_(t,e){ea=wc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function s_(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Lh(t,n)}}var Tc={readContext:ti,useCallback:un,useContext:un,useEffect:un,useImperativeHandle:un,useInsertionEffect:un,useLayoutEffect:un,useMemo:un,useReducer:un,useRef:un,useState:un,useDebugValue:un,useDeferredValue:un,useTransition:un,useMutableSource:un,useSyncExternalStore:un,useId:un,unstable_isNewReconciler:!1},jS={readContext:ti,useCallback:function(t,e){return wi().memoizedState=[t,e===void 0?null:e],t},useContext:ti,useEffect:Cm,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,ql(4194308,4,jv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return ql(4194308,4,t,e)},useInsertionEffect:function(t,e){return ql(4,2,t,e)},useMemo:function(t,e){var n=wi();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=wi();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=KS.bind(null,Lt,t),[i.memoizedState,t]},useRef:function(t){var e=wi();return t={current:t},e.memoizedState=t},useState:Am,useDebugValue:ep,useDeferredValue:function(t){return wi().memoizedState=t},useTransition:function(){var t=Am(!1),e=t[0];return t=qS.bind(null,t[1]),wi().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=Lt,r=wi();if(At){if(n===void 0)throw Error(Me(407));n=n()}else{if(n=e(),jt===null)throw Error(Me(349));as&30||Gv(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Cm(Xv.bind(null,i,s,t),[t]),i.flags|=2048,Ea(9,Wv.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=wi(),e=jt.identifierPrefix;if(At){var n=Zi,i=Ki;n=(i&~(1<<32-mi(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Sa++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=YS++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},JS={readContext:ti,useCallback:Qv,useContext:ti,useEffect:Qh,useImperativeHandle:Jv,useInsertionEffect:Kv,useLayoutEffect:Zv,useMemo:e_,useReducer:Lu,useRef:qv,useState:function(){return Lu(Ma)},useDebugValue:ep,useDeferredValue:function(t){var e=ni();return t_(e,Gt.memoizedState,t)},useTransition:function(){var t=Lu(Ma)[0],e=ni().memoizedState;return[t,e]},useMutableSource:Vv,useSyncExternalStore:Hv,useId:n_,unstable_isNewReconciler:!1},QS={readContext:ti,useCallback:Qv,useContext:ti,useEffect:Qh,useImperativeHandle:Jv,useInsertionEffect:Kv,useLayoutEffect:Zv,useMemo:e_,useReducer:Nu,useRef:qv,useState:function(){return Nu(Ma)},useDebugValue:ep,useDeferredValue:function(t){var e=ni();return Gt===null?e.memoizedState=t:t_(e,Gt.memoizedState,t)},useTransition:function(){var t=Nu(Ma)[0],e=ni().memoizedState;return[t,e]},useMutableSource:Vv,useSyncExternalStore:Hv,useId:n_,unstable_isNewReconciler:!1};function ci(t,e){if(t&&t.defaultProps){e=Nt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function rd(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:Nt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Kc={isMounted:function(t){return(t=t._reactInternals)?ms(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=En(),r=Ir(t),s=Ji(i,r);s.payload=e,n!=null&&(s.callback=n),e=Nr(t,s,r),e!==null&&(gi(e,t,r,i),$l(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=En(),r=Ir(t),s=Ji(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Nr(t,s,r),e!==null&&(gi(e,t,r,i),$l(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=En(),i=Ir(t),r=Ji(n,i);r.tag=2,e!=null&&(r.callback=e),e=Nr(t,r,i),e!==null&&(gi(e,t,i,n),$l(e,t,i))}};function Rm(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!ma(n,i)||!ma(r,s):!0}function o_(t,e,n){var i=!1,r=kr,s=e.contextType;return typeof s=="object"&&s!==null?s=ti(s):(r=Ln(e)?ss:vn.current,i=e.contextTypes,s=(i=i!=null)?oo(t,r):kr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Kc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function bm(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Kc.enqueueReplaceState(e,e.state,null)}function sd(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},$h(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=ti(s):(s=Ln(e)?ss:vn.current,r.context=oo(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(rd(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Kc.enqueueReplaceState(r,r.state,null),Mc(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function uo(t,e){try{var n="",i=e;do n+=Cy(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Du(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function od(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var eM=typeof WeakMap=="function"?WeakMap:Map;function a_(t,e,n){n=Ji(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Cc||(Cc=!0,gd=i),od(t,e)},n}function l_(t,e,n){n=Ji(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){od(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){od(t,e),typeof i!="function"&&(Dr===null?Dr=new Set([this]):Dr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Pm(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new eM;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=pM.bind(null,t,e,n),e.then(t,t))}function Lm(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Nm(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ji(-1,1),e.tag=2,Nr(n,e,1))),n.lanes|=1),t)}var tM=or.ReactCurrentOwner,bn=!1;function Sn(t,e,n,i){e.child=t===null?Ov(e,null,n,i):lo(e,t.child,n,i)}function Dm(t,e,n,i,r){n=n.render;var s=e.ref;return to(e,r),i=jh(t,e,n,i,s,r),n=Jh(),t!==null&&!bn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,rr(t,e,r)):(At&&n&&Bh(e),e.flags|=1,Sn(t,e,i,r),e.child)}function Im(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!lp(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,c_(t,e,s,i,r)):(t=Jl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:ma,n(o,i)&&t.ref===e.ref)return rr(t,e,r)}return e.flags|=1,t=Ur(s,i),t.ref=e.ref,t.return=e,e.child=t}function c_(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(ma(s,i)&&t.ref===e.ref)if(bn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(bn=!0);else return e.lanes=t.lanes,rr(t,e,r)}return ad(t,e,n,i,r)}function u_(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Mt(qs,kn),kn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Mt(qs,kn),kn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,Mt(qs,kn),kn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,Mt(qs,kn),kn|=i;return Sn(t,e,r,n),e.child}function f_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function ad(t,e,n,i,r){var s=Ln(n)?ss:vn.current;return s=oo(e,s),to(e,r),n=jh(t,e,n,i,s,r),i=Jh(),t!==null&&!bn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,rr(t,e,r)):(At&&i&&Bh(e),e.flags|=1,Sn(t,e,n,r),e.child)}function Um(t,e,n,i,r){if(Ln(n)){var s=!0;vc(e)}else s=!1;if(to(e,r),e.stateNode===null)Kl(t,e),o_(e,n,i),sd(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=ti(c):(c=Ln(n)?ss:vn.current,c=oo(e,c));var f=n.getDerivedStateFromProps,h=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&bm(e,o,i,c),_r=!1;var u=e.memoizedState;o.state=u,Mc(e,i,o,r),l=e.memoizedState,a!==i||u!==l||Pn.current||_r?(typeof f=="function"&&(rd(e,n,f,i),l=e.memoizedState),(a=_r||Rm(e,n,a,i,u,l,c))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,Bv(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:ci(e.type,a),o.props=c,h=e.pendingProps,u=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=ti(l):(l=Ln(n)?ss:vn.current,l=oo(e,l));var p=n.getDerivedStateFromProps;(f=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||u!==l)&&bm(e,o,i,l),_r=!1,u=e.memoizedState,o.state=u,Mc(e,i,o,r);var g=e.memoizedState;a!==h||u!==g||Pn.current||_r?(typeof p=="function"&&(rd(e,n,p,i),g=e.memoizedState),(c=_r||Rm(e,n,c,i,u,g,l)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,g,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,g,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&u===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&u===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=g),o.props=i,o.state=g,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&u===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&u===t.memoizedState||(e.flags|=1024),i=!1)}return ld(t,e,n,i,s,r)}function ld(t,e,n,i,r,s){f_(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&ym(e,n,!1),rr(t,e,s);i=e.stateNode,tM.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=lo(e,t.child,null,s),e.child=lo(e,null,a,s)):Sn(t,e,a,s),e.memoizedState=i.state,r&&ym(e,n,!0),e.child}function d_(t){var e=t.stateNode;e.pendingContext?xm(t,e.pendingContext,e.pendingContext!==e.context):e.context&&xm(t,e.context,!1),Yh(t,e.containerInfo)}function Fm(t,e,n,i,r){return ao(),Vh(r),e.flags|=256,Sn(t,e,n,i),e.child}var cd={dehydrated:null,treeContext:null,retryLane:0};function ud(t){return{baseLanes:t,cachePool:null,transitions:null}}function h_(t,e,n){var i=e.pendingProps,r=Rt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),Mt(Rt,r&1),t===null)return nd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Jc(o,i,0,null),t=rs(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=ud(n),e.memoizedState=cd,t):tp(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return nM(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Ur(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Ur(a,s):(s=rs(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?ud(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=cd,i}return s=t.child,t=s.sibling,i=Ur(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function tp(t,e){return e=Jc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function al(t,e,n,i){return i!==null&&Vh(i),lo(e,t.child,null,n),t=tp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function nM(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=Du(Error(Me(422))),al(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Jc({mode:"visible",children:i.children},r,0,null),s=rs(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&lo(e,t.child,null,o),e.child.memoizedState=ud(o),e.memoizedState=cd,s);if(!(e.mode&1))return al(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(Me(419)),i=Du(s,i,void 0),al(t,e,o,i)}if(a=(o&t.childLanes)!==0,bn||a){if(i=jt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,ir(t,r),gi(i,t,r,-1))}return ap(),i=Du(Error(Me(421))),al(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=mM.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Vn=Lr(r.nextSibling),Hn=e,At=!0,fi=null,t!==null&&(Kn[Zn++]=Ki,Kn[Zn++]=Zi,Kn[Zn++]=os,Ki=t.id,Zi=t.overflow,os=e),e=tp(e,i.children),e.flags|=4096,e)}function Om(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),id(t.return,e,n)}function Iu(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function p_(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Sn(t,e,i.children,n),i=Rt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Om(t,n,e);else if(t.tag===19)Om(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(Mt(Rt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Ec(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Iu(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Ec(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Iu(e,!0,n,null,s);break;case"together":Iu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Kl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function rr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ls|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(Me(153));if(e.child!==null){for(t=e.child,n=Ur(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Ur(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function iM(t,e,n){switch(e.tag){case 3:d_(e),ao();break;case 5:zv(e);break;case 1:Ln(e.type)&&vc(e);break;case 4:Yh(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;Mt(yc,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(Mt(Rt,Rt.current&1),e.flags|=128,null):n&e.child.childLanes?h_(t,e,n):(Mt(Rt,Rt.current&1),t=rr(t,e,n),t!==null?t.sibling:null);Mt(Rt,Rt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return p_(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Mt(Rt,Rt.current),i)break;return null;case 22:case 23:return e.lanes=0,u_(t,e,n)}return rr(t,e,n)}var m_,fd,g_,v_;m_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};fd=function(){};g_=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,ts(Li.current);var s=null;switch(n){case"input":r=Df(t,r),i=Df(t,i),s=[];break;case"select":r=Nt({},r,{value:void 0}),i=Nt({},i,{value:void 0}),s=[];break;case"textarea":r=Ff(t,r),i=Ff(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=mc)}kf(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(la.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(la.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&Et("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};v_=function(t,e,n,i){n!==i&&(e.flags|=4)};function Po(t,e){if(!At)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function fn(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function rM(t,e,n){var i=e.pendingProps;switch(zh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return fn(e),null;case 1:return Ln(e.type)&&gc(),fn(e),null;case 3:return i=e.stateNode,co(),wt(Pn),wt(vn),Kh(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(sl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,fi!==null&&(xd(fi),fi=null))),fd(t,e),fn(e),null;case 5:qh(e);var r=ts(ya.current);if(n=e.type,t!==null&&e.stateNode!=null)g_(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(Me(166));return fn(e),null}if(t=ts(Li.current),sl(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Ai]=e,i[_a]=s,t=(e.mode&1)!==0,n){case"dialog":Et("cancel",i),Et("close",i);break;case"iframe":case"object":case"embed":Et("load",i);break;case"video":case"audio":for(r=0;r<Go.length;r++)Et(Go[r],i);break;case"source":Et("error",i);break;case"img":case"image":case"link":Et("error",i),Et("load",i);break;case"details":Et("toggle",i);break;case"input":$p(i,s),Et("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},Et("invalid",i);break;case"textarea":qp(i,s),Et("invalid",i)}kf(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&rl(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&rl(i.textContent,a,t),r=["children",""+a]):la.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Et("scroll",i)}switch(n){case"input":Za(i),Yp(i,s,!0);break;case"textarea":Za(i),Kp(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=mc)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=X0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[Ai]=e,t[_a]=i,m_(t,e,!1,!1),e.stateNode=t;e:{switch(o=Bf(n,i),n){case"dialog":Et("cancel",t),Et("close",t),r=i;break;case"iframe":case"object":case"embed":Et("load",t),r=i;break;case"video":case"audio":for(r=0;r<Go.length;r++)Et(Go[r],t);r=i;break;case"source":Et("error",t),r=i;break;case"img":case"image":case"link":Et("error",t),Et("load",t),r=i;break;case"details":Et("toggle",t),r=i;break;case"input":$p(t,i),r=Df(t,i),Et("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=Nt({},i,{value:void 0}),Et("invalid",t);break;case"textarea":qp(t,i),r=Ff(t,i),Et("invalid",t);break;default:r=i}kf(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?q0(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&$0(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ca(t,l):typeof l=="number"&&ca(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(la.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Et("scroll",t):l!=null&&Th(t,s,l,o))}switch(n){case"input":Za(t),Yp(t,i,!1);break;case"textarea":Za(t),Kp(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Or(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?js(t,!!i.multiple,s,!1):i.defaultValue!=null&&js(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=mc)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return fn(e),null;case 6:if(t&&e.stateNode!=null)v_(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(Me(166));if(n=ts(ya.current),ts(Li.current),sl(e)){if(i=e.stateNode,n=e.memoizedProps,i[Ai]=e,(s=i.nodeValue!==n)&&(t=Hn,t!==null))switch(t.tag){case 3:rl(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&rl(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Ai]=e,e.stateNode=i}return fn(e),null;case 13:if(wt(Rt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(At&&Vn!==null&&e.mode&1&&!(e.flags&128))Uv(),ao(),e.flags|=98560,s=!1;else if(s=sl(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(Me(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(Me(317));s[Ai]=e}else ao(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;fn(e),s=!1}else fi!==null&&(xd(fi),fi=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||Rt.current&1?Wt===0&&(Wt=3):ap())),e.updateQueue!==null&&(e.flags|=4),fn(e),null);case 4:return co(),fd(t,e),t===null&&ga(e.stateNode.containerInfo),fn(e),null;case 10:return Wh(e.type._context),fn(e),null;case 17:return Ln(e.type)&&gc(),fn(e),null;case 19:if(wt(Rt),s=e.memoizedState,s===null)return fn(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Po(s,!1);else{if(Wt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Ec(t),o!==null){for(e.flags|=128,Po(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Mt(Rt,Rt.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ot()>fo&&(e.flags|=128,i=!0,Po(s,!1),e.lanes=4194304)}else{if(!i)if(t=Ec(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Po(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!At)return fn(e),null}else 2*Ot()-s.renderingStartTime>fo&&n!==1073741824&&(e.flags|=128,i=!0,Po(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ot(),e.sibling=null,n=Rt.current,Mt(Rt,i?n&1|2:n&1),e):(fn(e),null);case 22:case 23:return op(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?kn&1073741824&&(fn(e),e.subtreeFlags&6&&(e.flags|=8192)):fn(e),null;case 24:return null;case 25:return null}throw Error(Me(156,e.tag))}function sM(t,e){switch(zh(e),e.tag){case 1:return Ln(e.type)&&gc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return co(),wt(Pn),wt(vn),Kh(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return qh(e),null;case 13:if(wt(Rt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(Me(340));ao()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return wt(Rt),null;case 4:return co(),null;case 10:return Wh(e.type._context),null;case 22:case 23:return op(),null;case 24:return null;default:return null}}var ll=!1,pn=!1,oM=typeof WeakSet=="function"?WeakSet:Set,We=null;function Ys(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Dt(t,e,i)}else n.current=null}function dd(t,e,n){try{n()}catch(i){Dt(t,e,i)}}var km=!1;function aM(t,e){if(Kf=dc,t=Mv(),kh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,f=0,h=t,u=null;t:for(;;){for(var p;h!==n||r!==0&&h.nodeType!==3||(a=o+r),h!==s||i!==0&&h.nodeType!==3||(l=o+i),h.nodeType===3&&(o+=h.nodeValue.length),(p=h.firstChild)!==null;)u=h,h=p;for(;;){if(h===t)break t;if(u===n&&++c===r&&(a=o),u===s&&++f===i&&(l=o),(p=h.nextSibling)!==null)break;h=u,u=h.parentNode}h=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Zf={focusedElem:t,selectionRange:n},dc=!1,We=e;We!==null;)if(e=We,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,We=t;else for(;We!==null;){e=We;try{var g=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var M=g.memoizedProps,m=g.memoizedState,d=e.stateNode,v=d.getSnapshotBeforeUpdate(e.elementType===e.type?M:ci(e.type,M),m);d.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var S=e.stateNode.containerInfo;S.nodeType===1?S.textContent="":S.nodeType===9&&S.documentElement&&S.removeChild(S.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(Me(163))}}catch(y){Dt(e,e.return,y)}if(t=e.sibling,t!==null){t.return=e.return,We=t;break}We=e.return}return g=km,km=!1,g}function ta(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&dd(e,n,s)}r=r.next}while(r!==i)}}function Zc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function hd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function __(t){var e=t.alternate;e!==null&&(t.alternate=null,__(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Ai],delete e[_a],delete e[Qf],delete e[GS],delete e[WS])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function x_(t){return t.tag===5||t.tag===3||t.tag===4}function Bm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||x_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function pd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=mc));else if(i!==4&&(t=t.child,t!==null))for(pd(t,e,n),t=t.sibling;t!==null;)pd(t,e,n),t=t.sibling}function md(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(md(t,e,n),t=t.sibling;t!==null;)md(t,e,n),t=t.sibling}var Qt=null,ui=!1;function cr(t,e,n){for(n=n.child;n!==null;)y_(t,e,n),n=n.sibling}function y_(t,e,n){if(Pi&&typeof Pi.onCommitFiberUnmount=="function")try{Pi.onCommitFiberUnmount(Hc,n)}catch{}switch(n.tag){case 5:pn||Ys(n,e);case 6:var i=Qt,r=ui;Qt=null,cr(t,e,n),Qt=i,ui=r,Qt!==null&&(ui?(t=Qt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Qt.removeChild(n.stateNode));break;case 18:Qt!==null&&(ui?(t=Qt,n=n.stateNode,t.nodeType===8?Cu(t.parentNode,n):t.nodeType===1&&Cu(t,n),ha(t)):Cu(Qt,n.stateNode));break;case 4:i=Qt,r=ui,Qt=n.stateNode.containerInfo,ui=!0,cr(t,e,n),Qt=i,ui=r;break;case 0:case 11:case 14:case 15:if(!pn&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&dd(n,e,o),r=r.next}while(r!==i)}cr(t,e,n);break;case 1:if(!pn&&(Ys(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){Dt(n,e,a)}cr(t,e,n);break;case 21:cr(t,e,n);break;case 22:n.mode&1?(pn=(i=pn)||n.memoizedState!==null,cr(t,e,n),pn=i):cr(t,e,n);break;default:cr(t,e,n)}}function zm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new oM),e.forEach(function(i){var r=gM.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function si(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Qt=a.stateNode,ui=!1;break e;case 3:Qt=a.stateNode.containerInfo,ui=!0;break e;case 4:Qt=a.stateNode.containerInfo,ui=!0;break e}a=a.return}if(Qt===null)throw Error(Me(160));y_(s,o,r),Qt=null,ui=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Dt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)S_(e,t),e=e.sibling}function S_(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(si(e,t),Si(t),i&4){try{ta(3,t,t.return),Zc(3,t)}catch(M){Dt(t,t.return,M)}try{ta(5,t,t.return)}catch(M){Dt(t,t.return,M)}}break;case 1:si(e,t),Si(t),i&512&&n!==null&&Ys(n,n.return);break;case 5:if(si(e,t),Si(t),i&512&&n!==null&&Ys(n,n.return),t.flags&32){var r=t.stateNode;try{ca(r,"")}catch(M){Dt(t,t.return,M)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&G0(r,s),Bf(a,o);var c=Bf(a,s);for(o=0;o<l.length;o+=2){var f=l[o],h=l[o+1];f==="style"?q0(r,h):f==="dangerouslySetInnerHTML"?$0(r,h):f==="children"?ca(r,h):Th(r,f,h,c)}switch(a){case"input":If(r,s);break;case"textarea":W0(r,s);break;case"select":var u=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?js(r,!!s.multiple,p,!1):u!==!!s.multiple&&(s.defaultValue!=null?js(r,!!s.multiple,s.defaultValue,!0):js(r,!!s.multiple,s.multiple?[]:"",!1))}r[_a]=s}catch(M){Dt(t,t.return,M)}}break;case 6:if(si(e,t),Si(t),i&4){if(t.stateNode===null)throw Error(Me(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(M){Dt(t,t.return,M)}}break;case 3:if(si(e,t),Si(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{ha(e.containerInfo)}catch(M){Dt(t,t.return,M)}break;case 4:si(e,t),Si(t);break;case 13:si(e,t),Si(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(rp=Ot())),i&4&&zm(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(pn=(c=pn)||f,si(e,t),pn=c):si(e,t),Si(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!f&&t.mode&1)for(We=t,f=t.child;f!==null;){for(h=We=f;We!==null;){switch(u=We,p=u.child,u.tag){case 0:case 11:case 14:case 15:ta(4,u,u.return);break;case 1:Ys(u,u.return);var g=u.stateNode;if(typeof g.componentWillUnmount=="function"){i=u,n=u.return;try{e=i,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(M){Dt(i,n,M)}}break;case 5:Ys(u,u.return);break;case 22:if(u.memoizedState!==null){Hm(h);continue}}p!==null?(p.return=u,We=p):Hm(h)}f=f.sibling}e:for(f=null,h=t;;){if(h.tag===5){if(f===null){f=h;try{r=h.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Y0("display",o))}catch(M){Dt(t,t.return,M)}}}else if(h.tag===6){if(f===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(M){Dt(t,t.return,M)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;f===h&&(f=null),h=h.return}f===h&&(f=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:si(e,t),Si(t),i&4&&zm(t);break;case 21:break;default:si(e,t),Si(t)}}function Si(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(x_(n)){var i=n;break e}n=n.return}throw Error(Me(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(ca(r,""),i.flags&=-33);var s=Bm(t);md(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Bm(t);pd(t,a,o);break;default:throw Error(Me(161))}}catch(l){Dt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function lM(t,e,n){We=t,M_(t)}function M_(t,e,n){for(var i=(t.mode&1)!==0;We!==null;){var r=We,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||ll;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||pn;a=ll;var c=pn;if(ll=o,(pn=l)&&!c)for(We=r;We!==null;)o=We,l=o.child,o.tag===22&&o.memoizedState!==null?Gm(r):l!==null?(l.return=o,We=l):Gm(r);for(;s!==null;)We=s,M_(s),s=s.sibling;We=r,ll=a,pn=c}Vm(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,We=s):Vm(t)}}function Vm(t){for(;We!==null;){var e=We;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:pn||Zc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!pn)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:ci(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Tm(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Tm(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var h=f.dehydrated;h!==null&&ha(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(Me(163))}pn||e.flags&512&&hd(e)}catch(u){Dt(e,e.return,u)}}if(e===t){We=null;break}if(n=e.sibling,n!==null){n.return=e.return,We=n;break}We=e.return}}function Hm(t){for(;We!==null;){var e=We;if(e===t){We=null;break}var n=e.sibling;if(n!==null){n.return=e.return,We=n;break}We=e.return}}function Gm(t){for(;We!==null;){var e=We;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Zc(4,e)}catch(l){Dt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Dt(e,r,l)}}var s=e.return;try{hd(e)}catch(l){Dt(e,s,l)}break;case 5:var o=e.return;try{hd(e)}catch(l){Dt(e,o,l)}}}catch(l){Dt(e,e.return,l)}if(e===t){We=null;break}var a=e.sibling;if(a!==null){a.return=e.return,We=a;break}We=e.return}}var cM=Math.ceil,Ac=or.ReactCurrentDispatcher,np=or.ReactCurrentOwner,Qn=or.ReactCurrentBatchConfig,ht=0,jt=null,Vt=null,rn=0,kn=0,qs=Hr(0),Wt=0,wa=null,ls=0,jc=0,ip=0,na=null,Rn=null,rp=0,fo=1/0,Yi=null,Cc=!1,gd=null,Dr=null,cl=!1,wr=null,Rc=0,ia=0,vd=null,Zl=-1,jl=0;function En(){return ht&6?Ot():Zl!==-1?Zl:Zl=Ot()}function Ir(t){return t.mode&1?ht&2&&rn!==0?rn&-rn:$S.transition!==null?(jl===0&&(jl=ov()),jl):(t=yt,t!==0||(t=window.event,t=t===void 0?16:hv(t.type)),t):1}function gi(t,e,n,i){if(50<ia)throw ia=0,vd=null,Error(Me(185));Fa(t,n,i),(!(ht&2)||t!==jt)&&(t===jt&&(!(ht&2)&&(jc|=n),Wt===4&&Sr(t,rn)),Nn(t,i),n===1&&ht===0&&!(e.mode&1)&&(fo=Ot()+500,Yc&&Gr()))}function Nn(t,e){var n=t.callbackNode;$y(t,e);var i=fc(t,t===jt?rn:0);if(i===0)n!==null&&Jp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Jp(n),e===1)t.tag===0?XS(Wm.bind(null,t)):Nv(Wm.bind(null,t)),VS(function(){!(ht&6)&&Gr()}),n=null;else{switch(av(i)){case 1:n=Ph;break;case 4:n=rv;break;case 16:n=uc;break;case 536870912:n=sv;break;default:n=uc}n=P_(n,E_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function E_(t,e){if(Zl=-1,jl=0,ht&6)throw Error(Me(327));var n=t.callbackNode;if(no()&&t.callbackNode!==n)return null;var i=fc(t,t===jt?rn:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=bc(t,i);else{e=i;var r=ht;ht|=2;var s=T_();(jt!==t||rn!==e)&&(Yi=null,fo=Ot()+500,is(t,e));do try{dM();break}catch(a){w_(t,a)}while(!0);Gh(),Ac.current=s,ht=r,Vt!==null?e=0:(jt=null,rn=0,e=Wt)}if(e!==0){if(e===2&&(r=Wf(t),r!==0&&(i=r,e=_d(t,r))),e===1)throw n=wa,is(t,0),Sr(t,i),Nn(t,Ot()),n;if(e===6)Sr(t,i);else{if(r=t.current.alternate,!(i&30)&&!uM(r)&&(e=bc(t,i),e===2&&(s=Wf(t),s!==0&&(i=s,e=_d(t,s))),e===1))throw n=wa,is(t,0),Sr(t,i),Nn(t,Ot()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(Me(345));case 2:Jr(t,Rn,Yi);break;case 3:if(Sr(t,i),(i&130023424)===i&&(e=rp+500-Ot(),10<e)){if(fc(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){En(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Jf(Jr.bind(null,t,Rn,Yi),e);break}Jr(t,Rn,Yi);break;case 4:if(Sr(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-mi(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Ot()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*cM(i/1960))-i,10<i){t.timeoutHandle=Jf(Jr.bind(null,t,Rn,Yi),i);break}Jr(t,Rn,Yi);break;case 5:Jr(t,Rn,Yi);break;default:throw Error(Me(329))}}}return Nn(t,Ot()),t.callbackNode===n?E_.bind(null,t):null}function _d(t,e){var n=na;return t.current.memoizedState.isDehydrated&&(is(t,e).flags|=256),t=bc(t,e),t!==2&&(e=Rn,Rn=n,e!==null&&xd(e)),t}function xd(t){Rn===null?Rn=t:Rn.push.apply(Rn,t)}function uM(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!_i(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Sr(t,e){for(e&=~ip,e&=~jc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-mi(e),i=1<<n;t[n]=-1,e&=~i}}function Wm(t){if(ht&6)throw Error(Me(327));no();var e=fc(t,0);if(!(e&1))return Nn(t,Ot()),null;var n=bc(t,e);if(t.tag!==0&&n===2){var i=Wf(t);i!==0&&(e=i,n=_d(t,i))}if(n===1)throw n=wa,is(t,0),Sr(t,e),Nn(t,Ot()),n;if(n===6)throw Error(Me(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Jr(t,Rn,Yi),Nn(t,Ot()),null}function sp(t,e){var n=ht;ht|=1;try{return t(e)}finally{ht=n,ht===0&&(fo=Ot()+500,Yc&&Gr())}}function cs(t){wr!==null&&wr.tag===0&&!(ht&6)&&no();var e=ht;ht|=1;var n=Qn.transition,i=yt;try{if(Qn.transition=null,yt=1,t)return t()}finally{yt=i,Qn.transition=n,ht=e,!(ht&6)&&Gr()}}function op(){kn=qs.current,wt(qs)}function is(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,zS(n)),Vt!==null)for(n=Vt.return;n!==null;){var i=n;switch(zh(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&gc();break;case 3:co(),wt(Pn),wt(vn),Kh();break;case 5:qh(i);break;case 4:co();break;case 13:wt(Rt);break;case 19:wt(Rt);break;case 10:Wh(i.type._context);break;case 22:case 23:op()}n=n.return}if(jt=t,Vt=t=Ur(t.current,null),rn=kn=e,Wt=0,wa=null,ip=jc=ls=0,Rn=na=null,es!==null){for(e=0;e<es.length;e++)if(n=es[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}es=null}return t}function w_(t,e){do{var n=Vt;try{if(Gh(),Yl.current=Tc,wc){for(var i=Lt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}wc=!1}if(as=0,Zt=Gt=Lt=null,ea=!1,Sa=0,np.current=null,n===null||n.return===null){Wt=1,wa=e,Vt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=rn,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,f=a,h=f.tag;if(!(f.mode&1)&&(h===0||h===11||h===15)){var u=f.alternate;u?(f.updateQueue=u.updateQueue,f.memoizedState=u.memoizedState,f.lanes=u.lanes):(f.updateQueue=null,f.memoizedState=null)}var p=Lm(o);if(p!==null){p.flags&=-257,Nm(p,o,a,s,e),p.mode&1&&Pm(s,c,e),e=p,l=c;var g=e.updateQueue;if(g===null){var M=new Set;M.add(l),e.updateQueue=M}else g.add(l);break e}else{if(!(e&1)){Pm(s,c,e),ap();break e}l=Error(Me(426))}}else if(At&&a.mode&1){var m=Lm(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),Nm(m,o,a,s,e),Vh(uo(l,a));break e}}s=l=uo(l,a),Wt!==4&&(Wt=2),na===null?na=[s]:na.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var d=a_(s,l,e);wm(s,d);break e;case 1:a=l;var v=s.type,S=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||S!==null&&typeof S.componentDidCatch=="function"&&(Dr===null||!Dr.has(S)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=l_(s,a,e);wm(s,y);break e}}s=s.return}while(s!==null)}C_(n)}catch(w){e=w,Vt===n&&n!==null&&(Vt=n=n.return);continue}break}while(!0)}function T_(){var t=Ac.current;return Ac.current=Tc,t===null?Tc:t}function ap(){(Wt===0||Wt===3||Wt===2)&&(Wt=4),jt===null||!(ls&268435455)&&!(jc&268435455)||Sr(jt,rn)}function bc(t,e){var n=ht;ht|=2;var i=T_();(jt!==t||rn!==e)&&(Yi=null,is(t,e));do try{fM();break}catch(r){w_(t,r)}while(!0);if(Gh(),ht=n,Ac.current=i,Vt!==null)throw Error(Me(261));return jt=null,rn=0,Wt}function fM(){for(;Vt!==null;)A_(Vt)}function dM(){for(;Vt!==null&&!Oy();)A_(Vt)}function A_(t){var e=b_(t.alternate,t,kn);t.memoizedProps=t.pendingProps,e===null?C_(t):Vt=e,np.current=null}function C_(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=sM(n,e),n!==null){n.flags&=32767,Vt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Wt=6,Vt=null;return}}else if(n=rM(n,e,kn),n!==null){Vt=n;return}if(e=e.sibling,e!==null){Vt=e;return}Vt=e=t}while(e!==null);Wt===0&&(Wt=5)}function Jr(t,e,n){var i=yt,r=Qn.transition;try{Qn.transition=null,yt=1,hM(t,e,n,i)}finally{Qn.transition=r,yt=i}return null}function hM(t,e,n,i){do no();while(wr!==null);if(ht&6)throw Error(Me(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(Me(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Yy(t,s),t===jt&&(Vt=jt=null,rn=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||cl||(cl=!0,P_(uc,function(){return no(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Qn.transition,Qn.transition=null;var o=yt;yt=1;var a=ht;ht|=4,np.current=null,aM(t,n),S_(n,t),DS(Zf),dc=!!Kf,Zf=Kf=null,t.current=n,lM(n),ky(),ht=a,yt=o,Qn.transition=s}else t.current=n;if(cl&&(cl=!1,wr=t,Rc=r),s=t.pendingLanes,s===0&&(Dr=null),Vy(n.stateNode),Nn(t,Ot()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Cc)throw Cc=!1,t=gd,gd=null,t;return Rc&1&&t.tag!==0&&no(),s=t.pendingLanes,s&1?t===vd?ia++:(ia=0,vd=t):ia=0,Gr(),null}function no(){if(wr!==null){var t=av(Rc),e=Qn.transition,n=yt;try{if(Qn.transition=null,yt=16>t?16:t,wr===null)var i=!1;else{if(t=wr,wr=null,Rc=0,ht&6)throw Error(Me(331));var r=ht;for(ht|=4,We=t.current;We!==null;){var s=We,o=s.child;if(We.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(We=c;We!==null;){var f=We;switch(f.tag){case 0:case 11:case 15:ta(8,f,s)}var h=f.child;if(h!==null)h.return=f,We=h;else for(;We!==null;){f=We;var u=f.sibling,p=f.return;if(__(f),f===c){We=null;break}if(u!==null){u.return=p,We=u;break}We=p}}}var g=s.alternate;if(g!==null){var M=g.child;if(M!==null){g.child=null;do{var m=M.sibling;M.sibling=null,M=m}while(M!==null)}}We=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,We=o;else e:for(;We!==null;){if(s=We,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ta(9,s,s.return)}var d=s.sibling;if(d!==null){d.return=s.return,We=d;break e}We=s.return}}var v=t.current;for(We=v;We!==null;){o=We;var S=o.child;if(o.subtreeFlags&2064&&S!==null)S.return=o,We=S;else e:for(o=v;We!==null;){if(a=We,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Zc(9,a)}}catch(w){Dt(a,a.return,w)}if(a===o){We=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,We=y;break e}We=a.return}}if(ht=r,Gr(),Pi&&typeof Pi.onPostCommitFiberRoot=="function")try{Pi.onPostCommitFiberRoot(Hc,t)}catch{}i=!0}return i}finally{yt=n,Qn.transition=e}}return!1}function Xm(t,e,n){e=uo(n,e),e=a_(t,e,1),t=Nr(t,e,1),e=En(),t!==null&&(Fa(t,1,e),Nn(t,e))}function Dt(t,e,n){if(t.tag===3)Xm(t,t,n);else for(;e!==null;){if(e.tag===3){Xm(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Dr===null||!Dr.has(i))){t=uo(n,t),t=l_(e,t,1),e=Nr(e,t,1),t=En(),e!==null&&(Fa(e,1,t),Nn(e,t));break}}e=e.return}}function pM(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=En(),t.pingedLanes|=t.suspendedLanes&n,jt===t&&(rn&n)===n&&(Wt===4||Wt===3&&(rn&130023424)===rn&&500>Ot()-rp?is(t,0):ip|=n),Nn(t,e)}function R_(t,e){e===0&&(t.mode&1?(e=Qa,Qa<<=1,!(Qa&130023424)&&(Qa=4194304)):e=1);var n=En();t=ir(t,e),t!==null&&(Fa(t,e,n),Nn(t,n))}function mM(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),R_(t,n)}function gM(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(Me(314))}i!==null&&i.delete(e),R_(t,n)}var b_;b_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Pn.current)bn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return bn=!1,iM(t,e,n);bn=!!(t.flags&131072)}else bn=!1,At&&e.flags&1048576&&Dv(e,xc,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Kl(t,e),t=e.pendingProps;var r=oo(e,vn.current);to(e,n),r=jh(null,e,i,t,r,n);var s=Jh();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Ln(i)?(s=!0,vc(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,$h(e),r.updater=Kc,e.stateNode=r,r._reactInternals=e,sd(e,i,t,n),e=ld(null,e,i,!0,s,n)):(e.tag=0,At&&s&&Bh(e),Sn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Kl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=_M(i),t=ci(i,t),r){case 0:e=ad(null,e,i,t,n);break e;case 1:e=Um(null,e,i,t,n);break e;case 11:e=Dm(null,e,i,t,n);break e;case 14:e=Im(null,e,i,ci(i.type,t),n);break e}throw Error(Me(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ci(i,r),ad(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ci(i,r),Um(t,e,i,r,n);case 3:e:{if(d_(e),t===null)throw Error(Me(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Bv(t,e),Mc(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=uo(Error(Me(423)),e),e=Fm(t,e,i,n,r);break e}else if(i!==r){r=uo(Error(Me(424)),e),e=Fm(t,e,i,n,r);break e}else for(Vn=Lr(e.stateNode.containerInfo.firstChild),Hn=e,At=!0,fi=null,n=Ov(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ao(),i===r){e=rr(t,e,n);break e}Sn(t,e,i,n)}e=e.child}return e;case 5:return zv(e),t===null&&nd(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,jf(i,r)?o=null:s!==null&&jf(i,s)&&(e.flags|=32),f_(t,e),Sn(t,e,o,n),e.child;case 6:return t===null&&nd(e),null;case 13:return h_(t,e,n);case 4:return Yh(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=lo(e,null,i,n):Sn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ci(i,r),Dm(t,e,i,r,n);case 7:return Sn(t,e,e.pendingProps,n),e.child;case 8:return Sn(t,e,e.pendingProps.children,n),e.child;case 12:return Sn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,Mt(yc,i._currentValue),i._currentValue=o,s!==null)if(_i(s.value,o)){if(s.children===r.children&&!Pn.current){e=rr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Ji(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?l.next=l:(l.next=f.next,f.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),id(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(Me(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),id(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Sn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,to(e,n),r=ti(r),i=i(r),e.flags|=1,Sn(t,e,i,n),e.child;case 14:return i=e.type,r=ci(i,e.pendingProps),r=ci(i.type,r),Im(t,e,i,r,n);case 15:return c_(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ci(i,r),Kl(t,e),e.tag=1,Ln(i)?(t=!0,vc(e)):t=!1,to(e,n),o_(e,i,r),sd(e,i,r,n),ld(null,e,i,!0,t,n);case 19:return p_(t,e,n);case 22:return u_(t,e,n)}throw Error(Me(156,e.tag))};function P_(t,e){return iv(t,e)}function vM(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Jn(t,e,n,i){return new vM(t,e,n,i)}function lp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function _M(t){if(typeof t=="function")return lp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Ch)return 11;if(t===Rh)return 14}return 2}function Ur(t,e){var n=t.alternate;return n===null?(n=Jn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Jl(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")lp(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case ks:return rs(n.children,r,s,e);case Ah:o=8,r|=8;break;case bf:return t=Jn(12,n,e,r|2),t.elementType=bf,t.lanes=s,t;case Pf:return t=Jn(13,n,e,r),t.elementType=Pf,t.lanes=s,t;case Lf:return t=Jn(19,n,e,r),t.elementType=Lf,t.lanes=s,t;case z0:return Jc(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case k0:o=10;break e;case B0:o=9;break e;case Ch:o=11;break e;case Rh:o=14;break e;case vr:o=16,i=null;break e}throw Error(Me(130,t==null?t:typeof t,""))}return e=Jn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function rs(t,e,n,i){return t=Jn(7,t,i,e),t.lanes=n,t}function Jc(t,e,n,i){return t=Jn(22,t,i,e),t.elementType=z0,t.lanes=n,t.stateNode={isHidden:!1},t}function Uu(t,e,n){return t=Jn(6,t,null,e),t.lanes=n,t}function Fu(t,e,n){return e=Jn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function xM(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=gu(0),this.expirationTimes=gu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=gu(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function cp(t,e,n,i,r,s,o,a,l){return t=new xM(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Jn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},$h(s),t}function yM(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Os,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function L_(t){if(!t)return kr;t=t._reactInternals;e:{if(ms(t)!==t||t.tag!==1)throw Error(Me(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Ln(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(Me(171))}if(t.tag===1){var n=t.type;if(Ln(n))return Lv(t,n,e)}return e}function N_(t,e,n,i,r,s,o,a,l){return t=cp(n,i,!0,t,r,s,o,a,l),t.context=L_(null),n=t.current,i=En(),r=Ir(n),s=Ji(i,r),s.callback=e??null,Nr(n,s,r),t.current.lanes=r,Fa(t,r,i),Nn(t,i),t}function Qc(t,e,n,i){var r=e.current,s=En(),o=Ir(r);return n=L_(n),e.context===null?e.context=n:e.pendingContext=n,e=Ji(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Nr(r,e,o),t!==null&&(gi(t,r,o,s),$l(t,r,o)),o}function Pc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function $m(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function up(t,e){$m(t,e),(t=t.alternate)&&$m(t,e)}function SM(){return null}var D_=typeof reportError=="function"?reportError:function(t){console.error(t)};function fp(t){this._internalRoot=t}eu.prototype.render=fp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(Me(409));Qc(t,e,null,null)};eu.prototype.unmount=fp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;cs(function(){Qc(null,t,null,null)}),e[nr]=null}};function eu(t){this._internalRoot=t}eu.prototype.unstable_scheduleHydration=function(t){if(t){var e=uv();t={blockedOn:null,target:t,priority:e};for(var n=0;n<yr.length&&e!==0&&e<yr[n].priority;n++);yr.splice(n,0,t),n===0&&dv(t)}};function dp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function tu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Ym(){}function MM(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Pc(o);s.call(c)}}var o=N_(e,i,t,0,null,!1,!1,"",Ym);return t._reactRootContainer=o,t[nr]=o.current,ga(t.nodeType===8?t.parentNode:t),cs(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=Pc(l);a.call(c)}}var l=cp(t,0,!1,null,null,!1,!1,"",Ym);return t._reactRootContainer=l,t[nr]=l.current,ga(t.nodeType===8?t.parentNode:t),cs(function(){Qc(e,l,n,i)}),l}function nu(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Pc(o);a.call(l)}}Qc(e,o,t,r)}else o=MM(n,e,t,r,i);return Pc(o)}lv=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ho(e.pendingLanes);n!==0&&(Lh(e,n|1),Nn(e,Ot()),!(ht&6)&&(fo=Ot()+500,Gr()))}break;case 13:cs(function(){var i=ir(t,1);if(i!==null){var r=En();gi(i,t,1,r)}}),up(t,1)}};Nh=function(t){if(t.tag===13){var e=ir(t,134217728);if(e!==null){var n=En();gi(e,t,134217728,n)}up(t,134217728)}};cv=function(t){if(t.tag===13){var e=Ir(t),n=ir(t,e);if(n!==null){var i=En();gi(n,t,e,i)}up(t,e)}};uv=function(){return yt};fv=function(t,e){var n=yt;try{return yt=t,e()}finally{yt=n}};Vf=function(t,e,n){switch(e){case"input":if(If(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=$c(i);if(!r)throw Error(Me(90));H0(i),If(i,r)}}}break;case"textarea":W0(t,n);break;case"select":e=n.value,e!=null&&js(t,!!n.multiple,e,!1)}};j0=sp;J0=cs;var EM={usingClientEntryPoint:!1,Events:[ka,Hs,$c,K0,Z0,sp]},Lo={findFiberByHostInstance:Qr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},wM={bundleType:Lo.bundleType,version:Lo.version,rendererPackageName:Lo.rendererPackageName,rendererConfig:Lo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:or.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=tv(t),t===null?null:t.stateNode},findFiberByHostInstance:Lo.findFiberByHostInstance||SM,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ul=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ul.isDisabled&&ul.supportsFiber)try{Hc=ul.inject(wM),Pi=ul}catch{}}Wn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=EM;Wn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!dp(e))throw Error(Me(200));return yM(t,e,null,n)};Wn.createRoot=function(t,e){if(!dp(t))throw Error(Me(299));var n=!1,i="",r=D_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=cp(t,1,!1,null,null,n,!1,i,r),t[nr]=e.current,ga(t.nodeType===8?t.parentNode:t),new fp(e)};Wn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(Me(188)):(t=Object.keys(t).join(","),Error(Me(268,t)));return t=tv(e),t=t===null?null:t.stateNode,t};Wn.flushSync=function(t){return cs(t)};Wn.hydrate=function(t,e,n){if(!tu(e))throw Error(Me(200));return nu(null,t,e,!0,n)};Wn.hydrateRoot=function(t,e,n){if(!dp(t))throw Error(Me(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=D_;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=N_(e,null,t,1,n??null,r,!1,s,o),t[nr]=e.current,ga(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new eu(e)};Wn.render=function(t,e,n){if(!tu(e))throw Error(Me(200));return nu(null,t,e,!1,n)};Wn.unmountComponentAtNode=function(t){if(!tu(t))throw Error(Me(40));return t._reactRootContainer?(cs(function(){nu(null,null,t,!1,function(){t._reactRootContainer=null,t[nr]=null})}),!0):!1};Wn.unstable_batchedUpdates=sp;Wn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!tu(n))throw Error(Me(200));if(t==null||t._reactInternals===void 0)throw Error(Me(38));return nu(t,e,n,!1,i)};Wn.version="18.3.1-next-f1338f8080-20240426";function I_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(I_)}catch(t){console.error(t)}}I_(),I0.exports=Wn;var U_=I0.exports,qm=U_;Cf.createRoot=qm.createRoot,Cf.hydrateRoot=qm.hydrateRoot;/**
 * @remix-run/router v1.23.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ta(){return Ta=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)({}).hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Ta.apply(null,arguments)}var Tr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Tr||(Tr={}));const Km="popstate";function TM(t){t===void 0&&(t={});function e(i,r){let{pathname:s,search:o,hash:a}=i.location;return yd("",{pathname:s,search:o,hash:a},r.state&&r.state.usr||null,r.state&&r.state.key||"default")}function n(i,r){return typeof r=="string"?r:Lc(r)}return CM(e,n,null,t)}function Ht(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function F_(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function AM(){return Math.random().toString(36).substr(2,8)}function Zm(t,e){return{usr:t.state,key:t.key,idx:e}}function yd(t,e,n,i){return n===void 0&&(n=null),Ta({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?xo(e):e,{state:n,key:e&&e.key||i||AM()})}function Lc(t){let{pathname:e="/",search:n="",hash:i=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function xo(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let i=t.indexOf("?");i>=0&&(e.search=t.substr(i),t=t.substr(0,i)),t&&(e.pathname=t)}return e}function CM(t,e,n,i){i===void 0&&(i={});let{window:r=document.defaultView,v5Compat:s=!1}=i,o=r.history,a=Tr.Pop,l=null,c=f();c==null&&(c=0,o.replaceState(Ta({},o.state,{idx:c}),""));function f(){return(o.state||{idx:null}).idx}function h(){a=Tr.Pop;let m=f(),d=m==null?null:m-c;c=m,l&&l({action:a,location:M.location,delta:d})}function u(m,d){a=Tr.Push;let v=yd(M.location,m,d);c=f()+1;let S=Zm(v,c),y=M.createHref(v);try{o.pushState(S,"",y)}catch(w){if(w instanceof DOMException&&w.name==="DataCloneError")throw w;r.location.assign(y)}s&&l&&l({action:a,location:M.location,delta:1})}function p(m,d){a=Tr.Replace;let v=yd(M.location,m,d);c=f();let S=Zm(v,c),y=M.createHref(v);o.replaceState(S,"",y),s&&l&&l({action:a,location:M.location,delta:0})}function g(m){let d=r.location.origin!=="null"?r.location.origin:r.location.href,v=typeof m=="string"?m:Lc(m);return v=v.replace(/ $/,"%20"),Ht(d,"No window.location.(origin|href) available to create URL for href: "+v),new URL(v,d)}let M={get action(){return a},get location(){return t(r,o)},listen(m){if(l)throw new Error("A history only accepts one active listener");return r.addEventListener(Km,h),l=m,()=>{r.removeEventListener(Km,h),l=null}},createHref(m){return e(r,m)},createURL:g,encodeLocation(m){let d=g(m);return{pathname:d.pathname,search:d.search,hash:d.hash}},push:u,replace:p,go(m){return o.go(m)}};return M}var jm;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(jm||(jm={}));function RM(t,e,n){return n===void 0&&(n="/"),bM(t,e,n)}function bM(t,e,n,i){let r=typeof e=="string"?xo(e):e,s=hp(r.pathname||"/",n);if(s==null)return null;let o=O_(t);PM(o);let a=null,l=HM(s);for(let c=0;a==null&&c<o.length;++c)a=BM(o[c],l);return a}function O_(t,e,n,i){e===void 0&&(e=[]),n===void 0&&(n=[]),i===void 0&&(i="");let r=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(Ht(l.relativePath.startsWith(i),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(i.length));let c=Fr([i,l.relativePath]),f=n.concat(l);s.children&&s.children.length>0&&(Ht(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),O_(s.children,e,f,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:OM(c,s.index),routesMeta:f})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))r(s,o);else for(let l of k_(s.path))r(s,o,l)}),e}function k_(t){let e=t.split("/");if(e.length===0)return[];let[n,...i]=e,r=n.endsWith("?"),s=n.replace(/\?$/,"");if(i.length===0)return r?[s,""]:[s];let o=k_(i.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),r&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function PM(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:kM(e.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}const LM=/^:[\w-]+$/,NM=3,DM=2,IM=1,UM=10,FM=-2,Jm=t=>t==="*";function OM(t,e){let n=t.split("/"),i=n.length;return n.some(Jm)&&(i+=FM),e&&(i+=DM),n.filter(r=>!Jm(r)).reduce((r,s)=>r+(LM.test(s)?NM:s===""?IM:UM),i)}function kM(t,e){return t.length===e.length&&t.slice(0,-1).every((i,r)=>i===e[r])?t[t.length-1]-e[e.length-1]:0}function BM(t,e,n){let{routesMeta:i}=t,r={},s="/",o=[];for(let a=0;a<i.length;++a){let l=i[a],c=a===i.length-1,f=s==="/"?e:e.slice(s.length)||"/",h=zM({path:l.relativePath,caseSensitive:l.caseSensitive,end:c},f),u=l.route;if(!h)return null;Object.assign(r,h.params),o.push({params:r,pathname:Fr([s,h.pathname]),pathnameBase:XM(Fr([s,h.pathnameBase])),route:u}),h.pathnameBase!=="/"&&(s=Fr([s,h.pathnameBase]))}return o}function zM(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,i]=VM(t.path,t.caseSensitive,t.end),r=e.match(n);if(!r)return null;let s=r[0],o=s.replace(/(.)\/+$/,"$1"),a=r.slice(1);return{params:i.reduce((c,f,h)=>{let{paramName:u,isOptional:p}=f;if(u==="*"){let M=a[h]||"";o=s.slice(0,s.length-M.length).replace(/(.)\/+$/,"$1")}const g=a[h];return p&&!g?c[u]=void 0:c[u]=(g||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function VM(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),F_(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let i=[],r="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(i.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(i.push({paramName:"*"}),r+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?r+="\\/*$":t!==""&&t!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,e?void 0:"i"),i]}function HM(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return F_(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function hp(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,i=t.charAt(n);return i&&i!=="/"?null:t.slice(n)||"/"}function GM(t,e){e===void 0&&(e="/");let{pathname:n,search:i="",hash:r=""}=typeof t=="string"?xo(t):t,s;return n?(n=V_(n),n.startsWith("/")?s=Qm(n.substring(1),"/"):s=Qm(n,e)):s=e,{pathname:s,search:$M(i),hash:YM(r)}}function Qm(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(r=>{r===".."?n.length>1&&n.pop():r!=="."&&n.push(r)}),n.length>1?n.join("/"):"/"}function Ou(t,e,n,i){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function WM(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function B_(t,e){let n=WM(t);return e?n.map((i,r)=>r===n.length-1?i.pathname:i.pathnameBase):n.map(i=>i.pathnameBase)}function z_(t,e,n,i){i===void 0&&(i=!1);let r;typeof t=="string"?r=xo(t):(r=Ta({},t),Ht(!r.pathname||!r.pathname.includes("?"),Ou("?","pathname","search",r)),Ht(!r.pathname||!r.pathname.includes("#"),Ou("#","pathname","hash",r)),Ht(!r.search||!r.search.includes("#"),Ou("#","search","hash",r)));let s=t===""||r.pathname==="",o=s?"/":r.pathname,a;if(o==null)a=n;else{let h=e.length-1;if(!i&&o.startsWith("..")){let u=o.split("/");for(;u[0]==="..";)u.shift(),h-=1;r.pathname=u.join("/")}a=h>=0?e[h]:"/"}let l=GM(r,a),c=o&&o!=="/"&&o.endsWith("/"),f=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||f)&&(l.pathname+="/"),l}const V_=t=>t.replace(/\/\/+/g,"/"),Fr=t=>V_(t.join("/")),XM=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),$M=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,YM=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function qM(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const H_=["post","put","patch","delete"];new Set(H_);const KM=["get",...H_];new Set(KM);/**
 * React Router v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Aa(){return Aa=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)({}).hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Aa.apply(null,arguments)}const pp=le.createContext(null),ZM=le.createContext(null),gs=le.createContext(null),iu=le.createContext(null),vs=le.createContext({outlet:null,matches:[],isDataRoute:!1}),G_=le.createContext(null);function jM(t,e){let{relative:n}=e===void 0?{}:e;za()||Ht(!1);let{basename:i,navigator:r}=le.useContext(gs),{hash:s,pathname:o,search:a}=$_(t,{relative:n}),l=o;return i!=="/"&&(l=o==="/"?i:Fr([i,o])),r.createHref({pathname:l,search:a,hash:s})}function za(){return le.useContext(iu)!=null}function yo(){return za()||Ht(!1),le.useContext(iu).location}function W_(t){le.useContext(gs).static||le.useLayoutEffect(t)}function X_(){let{isDataRoute:t}=le.useContext(vs);return t?uE():JM()}function JM(){za()||Ht(!1);let t=le.useContext(pp),{basename:e,future:n,navigator:i}=le.useContext(gs),{matches:r}=le.useContext(vs),{pathname:s}=yo(),o=JSON.stringify(B_(r,n.v7_relativeSplatPath)),a=le.useRef(!1);return W_(()=>{a.current=!0}),le.useCallback(function(c,f){if(f===void 0&&(f={}),!a.current)return;if(typeof c=="number"){i.go(c);return}let h=z_(c,JSON.parse(o),s,f.relative==="path");t==null&&e!=="/"&&(h.pathname=h.pathname==="/"?e:Fr([e,h.pathname])),(f.replace?i.replace:i.push)(h,f.state,f)},[e,i,o,s,t])}function $_(t,e){let{relative:n}=e===void 0?{}:e,{future:i}=le.useContext(gs),{matches:r}=le.useContext(vs),{pathname:s}=yo(),o=JSON.stringify(B_(r,i.v7_relativeSplatPath));return le.useMemo(()=>z_(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function QM(t,e){return eE(t,e)}function eE(t,e,n,i){za()||Ht(!1);let{navigator:r}=le.useContext(gs),{matches:s}=le.useContext(vs),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let c=yo(),f;if(e){var h;let m=typeof e=="string"?xo(e):e;l==="/"||(h=m.pathname)!=null&&h.startsWith(l)||Ht(!1),f=m}else f=c;let u=f.pathname||"/",p=u;if(l!=="/"){let m=l.replace(/^\//,"").split("/");p="/"+u.replace(/^\//,"").split("/").slice(m.length).join("/")}let g=RM(t,{pathname:p}),M=sE(g&&g.map(m=>Object.assign({},m,{params:Object.assign({},a,m.params),pathname:Fr([l,r.encodeLocation?r.encodeLocation(m.pathname).pathname:m.pathname]),pathnameBase:m.pathnameBase==="/"?l:Fr([l,r.encodeLocation?r.encodeLocation(m.pathnameBase).pathname:m.pathnameBase])})),s,n,i);return e&&M?le.createElement(iu.Provider,{value:{location:Aa({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:Tr.Pop}},M):M}function tE(){let t=cE(),e=qM(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return le.createElement(le.Fragment,null,le.createElement("h2",null,"Unexpected Application Error!"),le.createElement("h3",{style:{fontStyle:"italic"}},e),n?le.createElement("pre",{style:r},n):null,null)}const nE=le.createElement(tE,null);class iE extends le.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?le.createElement(vs.Provider,{value:this.props.routeContext},le.createElement(G_.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function rE(t){let{routeContext:e,match:n,children:i}=t,r=le.useContext(pp);return r&&r.static&&r.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=n.route.id),le.createElement(vs.Provider,{value:e},i)}function sE(t,e,n,i){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),i===void 0&&(i=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=i)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,a=(r=n)==null?void 0:r.errors;if(a!=null){let f=o.findIndex(h=>h.route.id&&(a==null?void 0:a[h.route.id])!==void 0);f>=0||Ht(!1),o=o.slice(0,Math.min(o.length,f+1))}let l=!1,c=-1;if(n&&i&&i.v7_partialHydration)for(let f=0;f<o.length;f++){let h=o[f];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(c=f),h.route.id){let{loaderData:u,errors:p}=n,g=h.route.loader&&u[h.route.id]===void 0&&(!p||p[h.route.id]===void 0);if(h.route.lazy||g){l=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((f,h,u)=>{let p,g=!1,M=null,m=null;n&&(p=a&&h.route.id?a[h.route.id]:void 0,M=h.route.errorElement||nE,l&&(c<0&&u===0?(fE("route-fallback"),g=!0,m=null):c===u&&(g=!0,m=h.route.hydrateFallbackElement||null)));let d=e.concat(o.slice(0,u+1)),v=()=>{let S;return p?S=M:g?S=m:h.route.Component?S=le.createElement(h.route.Component,null):h.route.element?S=h.route.element:S=f,le.createElement(rE,{match:h,routeContext:{outlet:f,matches:d,isDataRoute:n!=null},children:S})};return n&&(h.route.ErrorBoundary||h.route.errorElement||u===0)?le.createElement(iE,{location:n.location,revalidation:n.revalidation,component:M,error:p,children:v(),routeContext:{outlet:null,matches:d,isDataRoute:!0}}):v()},null)}var Y_=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(Y_||{}),q_=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(q_||{});function oE(t){let e=le.useContext(pp);return e||Ht(!1),e}function aE(t){let e=le.useContext(ZM);return e||Ht(!1),e}function lE(t){let e=le.useContext(vs);return e||Ht(!1),e}function K_(t){let e=lE(),n=e.matches[e.matches.length-1];return n.route.id||Ht(!1),n.route.id}function cE(){var t;let e=le.useContext(G_),n=aE(),i=K_();return e!==void 0?e:(t=n.errors)==null?void 0:t[i]}function uE(){let{router:t}=oE(Y_.UseNavigateStable),e=K_(q_.UseNavigateStable),n=le.useRef(!1);return W_(()=>{n.current=!0}),le.useCallback(function(r,s){s===void 0&&(s={}),n.current&&(typeof r=="number"?t.navigate(r):t.navigate(r,Aa({fromRouteId:e},s)))},[t,e])}const eg={};function fE(t,e,n){eg[t]||(eg[t]=!0)}function dE(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function Is(t){Ht(!1)}function hE(t){let{basename:e="/",children:n=null,location:i,navigationType:r=Tr.Pop,navigator:s,static:o=!1,future:a}=t;za()&&Ht(!1);let l=e.replace(/^\/*/,"/"),c=le.useMemo(()=>({basename:l,navigator:s,static:o,future:Aa({v7_relativeSplatPath:!1},a)}),[l,a,s,o]);typeof i=="string"&&(i=xo(i));let{pathname:f="/",search:h="",hash:u="",state:p=null,key:g="default"}=i,M=le.useMemo(()=>{let m=hp(f,l);return m==null?null:{location:{pathname:m,search:h,hash:u,state:p,key:g},navigationType:r}},[l,f,h,u,p,g,r]);return M==null?null:le.createElement(gs.Provider,{value:c},le.createElement(iu.Provider,{children:n,value:M}))}function pE(t){let{children:e,location:n}=t;return QM(Sd(e),n)}new Promise(()=>{});function Sd(t,e){e===void 0&&(e=[]);let n=[];return le.Children.forEach(t,(i,r)=>{if(!le.isValidElement(i))return;let s=[...e,r];if(i.type===le.Fragment){n.push.apply(n,Sd(i.props.children,s));return}i.type!==Is&&Ht(!1),!i.props.index||!i.props.children||Ht(!1);let o={id:i.props.id||s.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(o.children=Sd(i.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Md(){return Md=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)({}).hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Md.apply(null,arguments)}function mE(t,e){if(t==null)return{};var n={};for(var i in t)if({}.hasOwnProperty.call(t,i)){if(e.indexOf(i)!==-1)continue;n[i]=t[i]}return n}function gE(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function vE(t,e){return t.button===0&&(!e||e==="_self")&&!gE(t)}const _E=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],xE="6";try{window.__reactRouterVersion=xE}catch{}const yE="startTransition",tg=py[yE];function SE(t){let{basename:e,children:n,future:i,window:r}=t,s=le.useRef();s.current==null&&(s.current=TM({window:r,v5Compat:!0}));let o=s.current,[a,l]=le.useState({action:o.action,location:o.location}),{v7_startTransition:c}=i||{},f=le.useCallback(h=>{c&&tg?tg(()=>l(h)):l(h)},[l,c]);return le.useLayoutEffect(()=>o.listen(f),[o,f]),le.useEffect(()=>dE(i),[i]),le.createElement(hE,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o,future:i})}const ME=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",EE=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Z_=le.forwardRef(function(e,n){let{onClick:i,relative:r,reloadDocument:s,replace:o,state:a,target:l,to:c,preventScrollReset:f,viewTransition:h}=e,u=mE(e,_E),{basename:p}=le.useContext(gs),g,M=!1;if(typeof c=="string"&&EE.test(c)&&(g=c,ME))try{let S=new URL(window.location.href),y=c.startsWith("//")?new URL(S.protocol+c):new URL(c),w=hp(y.pathname,p);y.origin===S.origin&&w!=null?c=w+y.search+y.hash:M=!0}catch{}let m=jM(c,{relative:r}),d=wE(c,{replace:o,state:a,target:l,preventScrollReset:f,relative:r,viewTransition:h});function v(S){i&&i(S),S.defaultPrevented||d(S)}return le.createElement("a",Md({},u,{href:g||m,onClick:M||s?i:v,ref:n,target:l}))});var ng;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(ng||(ng={}));var ig;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(ig||(ig={}));function wE(t,e){let{target:n,replace:i,state:r,preventScrollReset:s,relative:o,viewTransition:a}=e===void 0?{}:e,l=X_(),c=yo(),f=$_(t,{relative:o});return le.useCallback(h=>{if(vE(h,n)){h.preventDefault();let u=i!==void 0?i:Lc(c)===Lc(f);l(t,{replace:u,state:r,preventScrollReset:s,relative:o,viewTransition:a})}},[c,l,f,i,r,n,t,s,o,a])}const TE=`#version 300 es
in vec2 position;
void main() { gl_Position = vec4(position, 0.0, 1.0); }`,AE=`#version 300 es
precision highp float;
uniform vec2 resolution;
uniform float time;
uniform vec2 pointer;
out vec4 color;

float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  return mix(
    mix(hash(i), hash(i + vec2(1.0, 0.0)), f.x),
    mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0)), f.x),
    f.y
  );
}

void main() {
  vec2 uv = (gl_FragCoord.xy - 0.5 * resolution.xy) / resolution.y;
  vec2 mouse = (pointer - 0.5 * resolution.xy) / resolution.y;
  float distanceToMouse = length(uv - mouse);
  uv += (mouse - uv) * exp(-distanceToMouse * 4.0) * 0.08;

  float flow = time * 0.16;
  float field = noise(uv * 3.5 + vec2(flow, -flow));
  float lines = 0.0;
  for (int i = 0; i < 8; i++) {
    float band = float(i) * 0.16 - 0.55;
    float wave = sin(uv.x * 3.0 + flow + field * 4.0 + float(i) * 0.8) * 0.18;
    float distanceToLine = abs(uv.y - band - wave);
    lines += smoothstep(0.018, 0.0, distanceToLine) * (0.55 + field * 0.45);
  }

  float glow = exp(-length(uv) * 1.7);
  vec3 background = vec3(0.0, 0.0, 0.0);
  vec3 ink = vec3(0.3, 0.3, 0.3);
  vec3 result = background + ink * lines * 0.7 + vec3(0.08, 0.08, 0.08) * glow * 0.35;
  color = vec4(result, 1.0);
}`,rg=(t,e,n)=>{const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),t.getShaderParameter(i,t.COMPILE_STATUS)?i:(t.deleteShader(i),null)},CE=({className:t=""})=>{const e=le.useRef(null);return le.useEffect(()=>{const n=e.current,i=n==null?void 0:n.getContext("webgl2",{alpha:!1,antialias:!1});if(!i)return;const r=rg(i,i.VERTEX_SHADER,TE),s=rg(i,i.FRAGMENT_SHADER,AE);if(!r||!s)return;const o=i.createProgram();if(i.attachShader(o,r),i.attachShader(o,s),i.linkProgram(o),!i.getProgramParameter(o,i.LINK_STATUS))return;const a=i.createBuffer();i.bindBuffer(i.ARRAY_BUFFER,a),i.bufferData(i.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),i.STATIC_DRAW);const l=i.getAttribLocation(o,"position"),c=i.getUniformLocation(o,"resolution"),f=i.getUniformLocation(o,"time"),h=i.getUniformLocation(o,"pointer"),u={x:0,y:0};let p=0;const g=performance.now(),M=()=>{const v=Math.min(window.devicePixelRatio||1,2);n.width=n.clientWidth*v,n.height=n.clientHeight*v,i.viewport(0,0,n.width,n.height)},m=v=>{u.x=v.clientX*(n.width/window.innerWidth),u.y=n.height-v.clientY*(n.height/window.innerHeight)},d=v=>{i.useProgram(o),i.uniform2f(c,n.width,n.height),i.uniform1f(f,(v-g)/1e3),i.uniform2f(h,u.x,u.y),i.bindBuffer(i.ARRAY_BUFFER,a),i.enableVertexAttribArray(l),i.vertexAttribPointer(l,2,i.FLOAT,!1,0,0),i.drawArrays(i.TRIANGLES,0,3),p=requestAnimationFrame(d)};return M(),window.addEventListener("resize",M),window.addEventListener("pointermove",m,{passive:!0}),p=requestAnimationFrame(d),()=>{cancelAnimationFrame(p),window.removeEventListener("resize",M),window.removeEventListener("pointermove",m),i.deleteProgram(o),i.deleteBuffer(a),i.deleteShader(r),i.deleteShader(s)}},[]),K.jsx("div",{className:`flux-lines ${t}`,"aria-hidden":"true",children:K.jsx("canvas",{ref:e})})},RE=["bottom","top","left","right"],sg=12,bE=.4,ku=.38,PE=450,Bn=9,Ar=9,Wo=10,fl=8,ur=8,LE="cubic-bezier(0.2, 1.25, 0.4, 1)",og={dark:{"--dock-panel":"rgba(38, 35, 46, 0.66)","--dock-panel-edge":"rgba(255, 255, 255, 0.08)","--dock-panel-highlight":"rgba(255, 255, 255, 0.07)","--dock-panel-shadow":"0 22px 44px -20px rgba(0, 0, 0, 0.8), 0 6px 16px -8px rgba(0, 0, 0, 0.5)","--dock-tile":"linear-gradient(180deg, #3a3644 0%, #27242f 100%)","--dock-tile-edge":"rgba(255, 255, 255, 0.07)","--dock-tile-highlight":"rgba(255, 255, 255, 0.12)","--dock-tile-shadow":"0 4px 10px -4px rgba(0, 0, 0, 0.7)","--dock-ink":"#f4f4f5","--dock-label":"#2a2731","--dock-label-ink":"#f4f4f5","--dock-dot":"rgba(255, 255, 255, 0.72)","--dock-separator":"rgba(255, 255, 255, 0.12)","--dock-press":"brightness(0.75)","--dock-menu":"rgba(40, 37, 47, 0.8)","--dock-menu-edge":"rgba(255, 255, 255, 0.13)","--dock-menu-ink":"#f4f4f5","--dock-menu-muted":"rgba(244, 244, 245, 0.42)","--dock-menu-separator":"rgba(255, 255, 255, 0.1)","--dock-menu-shadow":"0 18px 40px -12px rgba(0, 0, 0, 0.65), 0 3px 10px rgba(0, 0, 0, 0.3)"},light:{"--dock-panel":"rgba(240, 240, 243, 0.8)","--dock-panel-edge":"rgba(24, 24, 27, 0.07)","--dock-panel-highlight":"rgba(255, 255, 255, 0.95)","--dock-panel-shadow":"0 22px 44px -22px rgba(24, 24, 27, 0.3), 0 6px 16px -10px rgba(24, 24, 27, 0.16)","--dock-tile":"linear-gradient(180deg, #ffffff 0%, #f6f6f8 100%)","--dock-tile-edge":"rgba(24, 24, 27, 0.08)","--dock-tile-highlight":"rgba(255, 255, 255, 1)","--dock-tile-shadow":"0 4px 10px -5px rgba(24, 24, 27, 0.25)","--dock-ink":"#27272a","--dock-label":"#ffffff","--dock-label-ink":"#18181b","--dock-dot":"rgba(24, 24, 27, 0.55)","--dock-separator":"rgba(24, 24, 27, 0.12)","--dock-press":"brightness(0.9)","--dock-menu":"rgba(248, 248, 250, 0.86)","--dock-menu-edge":"rgba(24, 24, 27, 0.1)","--dock-menu-ink":"#18181b","--dock-menu-muted":"rgba(24, 24, 27, 0.4)","--dock-menu-separator":"rgba(24, 24, 27, 0.1)","--dock-menu-shadow":"0 18px 40px -14px rgba(24, 24, 27, 0.3), 0 3px 10px rgba(24, 24, 27, 0.1)"}},Nc=typeof window>"u"?le.useEffect:le.useLayoutEffect,NE=t=>t!=null&&t!==!1,No=t=>!!t&&!t.separator&&!t.disabled,Us=(t,e,n)=>Math.min(Math.max(t,e),Math.max(e,n)),DE=(t,e,n,i)=>{const r=Wo,s=(a,l)=>`${(a+Bn).toFixed(2)} ${(l+Bn).toFixed(2)}`,o=(a,l,c,f,h,u)=>{const p=(g,M)=>s(a+c*g+h*M,l+f*g+u*M);return`L ${p(-Ar,0)} L ${p(-Ar*.18,Bn*.82)} Q ${p(0,Bn)} ${p(Ar*.18,Bn*.82)} L ${p(Ar,0)}`};return[`M ${s(r,0)}`,n==="top"?o(i,0,1,0,0,-1):"",`L ${s(t-r,0)} A ${r} ${r} 0 0 1 ${s(t,r)}`,n==="right"?o(t,i,0,1,1,0):"",`L ${s(t,e-r)} A ${r} ${r} 0 0 1 ${s(t-r,e)}`,n==="bottom"?o(i,e,-1,0,0,1):"",`L ${s(r,e)} A ${r} ${r} 0 0 1 ${s(0,e-r)}`,n==="left"?o(0,i,0,-1,-1,0):"",`L ${s(0,r)} A ${r} ${r} 0 0 1 ${s(r,0)} Z`].join(" ")},IE=()=>K.jsx("svg",{viewBox:"0 0 16 16",width:"12",height:"12",fill:"none",stroke:"currentColor",strokeWidth:"2",children:K.jsx("path",{d:"M3.5 8.5l3 3 6-7",strokeLinecap:"round",strokeLinejoin:"round"})}),UE=()=>K.jsx("svg",{viewBox:"0 0 16 16",width:"10",height:"10",fill:"none",stroke:"currentColor",strokeWidth:"2",children:K.jsx("path",{d:"M6 3.5L10.5 8 6 12.5",strokeLinecap:"round",strokeLinejoin:"round"})});function j_({rows:t,label:e,side:n=null,point:i,edge:r,tokens:s,nested:o=!1,focusFirst:a=!1,closing:l=!1,pressingRef:c,onSelect:f,onDismiss:h,onBack:u,onEnter:p,onExited:g}){const M=le.useRef(null),m=le.useRef(null),d=le.useRef(null),v=le.useRef(null),S=le.useRef(null),y=le.useRef(null),w=le.useRef([]),T=le.useRef(null),C=le.useRef(0),x=le.useRef(!0),R=le.useRef(!1),b=le.useRef({}),[N,X]=le.useState(-1),[L,D]=le.useState(null),[I,q]=le.useState(!1),[W,V]=le.useState(!1),O=t.some(U=>U&&!U.separator&&U.checked!==void 0);b.current={onSelect:f,onDismiss:h,onBack:u,onExited:g},Nc(()=>{var A,_;const U=M.current,$=m.current,se=d.current,Ce=S.current;if(!U||!$||!se||!Ce)return;x.current=!0;const Re=[U.firstElementChild,se,v.current,$].filter(Boolean),{x:Oe,y:Ke}=i??{x:0,y:0},ie=r??{left:0,right:0,top:0},he=((A=window.matchMedia)==null?void 0:A.call(window,"(prefers-reduced-motion: reduce)").matches)??!1;R.current=he;const ue=$.offsetWidth,ce=$.offsetHeight,_e=document.documentElement.clientWidth,Q=document.documentElement.clientHeight;let fe,Ee,ve=0,P;if(n==="bottom"||n==="top")fe=Us(Oe-ue/2,ur,_e-ur-ue),Ee=n==="bottom"?Ke-Bn-ce:Ke+Bn,ve=Us(Oe-fe,Wo+Ar,ue-Wo-Ar),P=`${ve}px ${n==="bottom"?ce+Bn:-Bn}px`;else if(n==="left"||n==="right")Ee=Us(Ke-ce/2,ur,Q-ur-ce),fe=n==="right"?Oe-Bn-ue:Oe+Bn,ve=Us(Ke-Ee,Wo+Ar,ce-Wo-Ar),P=`${n==="right"?ue+Bn:-Bn}px ${ve}px`;else{const z=ie.right-4+ue>_e-ur&&ie.left+4-ue>=ur;fe=z?ie.left+4-ue:ie.right-4,Ee=Us(ie.top-5,ur,Q-ur-ce),P=z?"right top":"left top"}const Be=DE(ue,ce,n,ve);T.current={left:fe,top:Ee,width:ue,height:ce},U.style.left=`${fe}px`,U.style.top=`${Ee}px`,U.style.transformOrigin=P,U.style.visibility="visible",se.style.clipPath=`path('${Be}')`,Ce.setAttribute("d",Be),he?Re.forEach(z=>z.animate([{opacity:0},{opacity:1}],{duration:120,easing:"ease-out"})):(U.animate([{transform:`scale(${o?.94:.82})`},{transform:"scale(1)"}],{duration:o?220:340,easing:LE}),Re.forEach(z=>z.animate([{opacity:0},{opacity:1}],{duration:o?120:160,easing:"ease-out"})));const He=t.findIndex(No);return a&&He>=0?(X(He),(_=w.current[He])==null||_.focus({preventScroll:!0})):$.focus({preventScroll:!0}),()=>{x.current=!1,window.clearTimeout(C.current)}},[]),le.useEffect(()=>{if(!l)return;const U=M.current,$=[U==null?void 0:U.firstElementChild,d.current,v.current,m.current].filter(Boolean),se=R.current?100:150;let Ce=!1;const Re=()=>{var Ke,ie;Ce||!x.current||(Ce=!0,(ie=(Ke=b.current).onExited)==null||ie.call(Ke))};U&&!R.current&&U.animate([{transform:"scale(1)"},{transform:"scale(0.96)"}],{duration:se,easing:"ease-in",fill:"forwards"}),$.forEach(Ke=>Ke.animate([{opacity:1},{opacity:0}],{duration:se,easing:"ease-in",fill:"forwards"}));const Oe=window.setTimeout(Re,se);return()=>window.clearTimeout(Oe)},[l]),Nc(()=>{const U=y.current;if(!U)return;const $=w.current[N];if(!$||I){I&&(U.style.transition="none"),U.style.opacity="0";return}const se=U.style.opacity!=="1"||R.current;se&&(U.style.transition="none"),U.style.transform=`translateY(${$.offsetTop}px)`,U.style.height=`${$.offsetHeight}px`,U.style.opacity="1",se&&(U.offsetHeight,U.style.transition="")},[N,I]);const G=U=>{var $;X(U),($=w.current[U])==null||$.focus({preventScroll:!0})},ee=(U,$)=>{window.clearTimeout(C.current);const se=T.current,Ce=w.current[U];!se||!Ce||D({index:U,keyboard:$,edge:{left:se.left,right:se.left+se.width,top:se.top+Ce.offsetTop}})},Se=()=>{window.clearTimeout(C.current),D(null)},Le=(U,$)=>{var Ce,Re;if(W)return;const se=t[U];if(V(!0),X(U),window.clearTimeout(C.current),R.current){(Re=(Ce=b.current).onSelect)==null||Re.call(Ce,se,$);return}q(!0),window.setTimeout(()=>x.current&&q(!1),70),window.setTimeout(()=>{var Oe,Ke;return x.current&&((Ke=(Oe=b.current).onSelect)==null?void 0:Ke.call(Oe,se,$))},150)},Ye=U=>{var $;W||N===U||!No(t[U])||(G(U),window.clearTimeout(C.current),($=t[U].items)!=null&&$.length?(L==null?void 0:L.index)!==U&&(C.current=window.setTimeout(()=>ee(U,!1),120)):L&&(C.current=window.setTimeout(Se,220)))},qe=U=>{var Re,Oe,Ke,ie,he,ue;if(W)return;const{key:$}=U,se=t.flatMap((ce,_e)=>No(ce)?[_e]:[]);let Ce=!0;if($==="ArrowDown"||$==="ArrowUp"||$==="Home"||$==="End"){if(se.length){const ce=se.indexOf(N);let _e=se[0];$==="End"?_e=se[se.length-1]:$==="ArrowDown"?_e=se[(ce+1)%se.length]:$==="ArrowUp"&&(_e=se[ce<=0?se.length-1:ce-1]),L&&Se(),G(_e)}}else $==="ArrowRight"&&((Oe=(Re=t[N])==null?void 0:Re.items)!=null&&Oe.length)?ee(N,!0):($==="ArrowLeft"||$==="Escape")&&o?(ie=(Ke=b.current).onBack)==null||ie.call(Ke):$==="Escape"||$==="Tab"?(ue=(he=b.current).onDismiss)==null||ue.call(he,!0):Ce=!1;Ce&&(U.preventDefault(),U.stopPropagation())},$e=L?t[L.index]:null;return K.jsxs(K.Fragment,{children:[U_.createPortal(K.jsxs("div",{ref:M,className:"dock-menu",style:s,"data-dock-menu":"",children:[K.jsx("span",{className:"dock-menu-shadow"}),K.jsx("span",{ref:d,className:"dock-menu-glass"}),K.jsx("svg",{ref:v,className:"dock-menu-shape","aria-hidden":"true",children:K.jsx("path",{ref:S})}),K.jsxs("div",{ref:m,className:"dock-menu-list",role:"menu","aria-label":e,tabIndex:-1,onKeyDown:qe,onPointerEnter:()=>p==null?void 0:p(),onPointerLeave:()=>{var U;L||W||(X(-1),(U=m.current)==null||U.focus({preventScroll:!0}))},children:[K.jsx("span",{ref:y,className:"dock-menu-highlight"}),t.map((U,$)=>{var Re;if(!U)return null;if(U.separator)return K.jsx("span",{className:"dock-menu-separator",role:"separator"},$);const se=$===N&&!I,Ce=!!((Re=U.items)!=null&&Re.length);return K.jsxs("button",{ref:Oe=>{w.current[$]=Oe},type:"button",className:"dock-menu-row",role:U.checked!==void 0?"menuitemcheckbox":"menuitem","aria-checked":U.checked!==void 0?!!U.checked:void 0,"aria-disabled":U.disabled?!0:void 0,"aria-haspopup":Ce?"menu":void 0,"aria-expanded":Ce?(L==null?void 0:L.index)===$:void 0,tabIndex:-1,"data-dock-row":$,"data-active":se?"":void 0,onPointerMove:()=>Ye($),onPointerUp:()=>{!(c!=null&&c.current)||!No(U)||Ce||(c.current=!1,Le($,!1))},onClick:Oe=>{W||!No(U)||(Ce?ee($,Oe.detail===0):Le($,Oe.detail===0))},children:[O?K.jsx("span",{className:"dock-menu-check",children:U.checked?K.jsx(IE,{}):null}):null,U.icon?K.jsx("span",{className:"dock-menu-icon",children:U.icon}):null,K.jsx("span",{className:"dock-menu-text",children:U.label}),U.shortcut?K.jsx("span",{className:"dock-menu-shortcut",children:U.shortcut}):null,Ce?K.jsx("span",{className:"dock-menu-chevron",children:K.jsx(UE,{})}):null]},$)})]})]}),document.body),L?K.jsx(j_,{rows:($e==null?void 0:$e.items)??[],label:typeof($e==null?void 0:$e.label)=="string"?$e.label:void 0,edge:L.edge,tokens:s,nested:!0,focusFirst:L.keyboard,closing:l,pressingRef:c,onSelect:(U,$)=>{var se,Ce;return(Ce=(se=b.current).onSelect)==null?void 0:Ce.call(se,U,$)},onDismiss:U=>{var $,se;return(se=($=b.current).onDismiss)==null?void 0:se.call($,U)},onBack:()=>{const U=L.index;Se(),G(U)},onEnter:()=>{window.clearTimeout(C.current),X(L.index)}},L.index):null]})}function FE({items:t=[],position:e="bottom",theme:n="dark",baseItemSize:i=50,magnification:r=70,distance:s=200,panelHeight:o=68,gap:a=10,roundness:l=.5,spring:c={mass:.1,stiffness:150,damping:12},bounce:f=!0,autoHide:h=!1,tiles:u=!0,showLabels:p=!0,showIndicators:g=!0,showBadges:M=!0,badgeColor:m="#ff453a",accentColor:d="#0a84ff",className:v="",style:S}){var ce,_e;const y=le.useRef(null),w=le.useRef([]),T=le.useRef(null),C=le.useRef(null),x=le.useRef(null),R=le.useRef(0),b=le.useRef(null),N=le.useRef(!1),X=le.useRef(-1),[L,D]=le.useState(1),[I,q]=le.useState(null),W=RE.includes(e)?e:"bottom",V=W==="left"||W==="right",O=Math.max(16,i),G=Math.max(O,r),ee=Math.max(O,o),Se=Math.max(0,a),Le=t.reduce((Q,fe)=>Q+(fe!=null&&fe.separator?1:O),0)+Se*Math.max(0,t.length-1)+ee-O,Ye=O*L,qe=G*L,$e=ee*L,U={...og[n]??og.dark,"--dock-accent":d,"--dock-badge":m},$={items:t,side:W,vertical:V,length:Le+G-O,base:Ye,peak:qe,thickness:$e,gap:Se*L,distance:Math.max(1,s)*L,mass:Math.max(.01,(c==null?void 0:c.mass)??.1),stiffness:Math.max(1,(c==null?void 0:c.stiffness)??150),damping:Math.max(0,(c==null?void 0:c.damping)??12),bounce:f,autoHide:h},se=le.useRef($);se.current=$,x.current=I,le.useEffect(()=>{var Q;(Q=T.current)==null||Q.call(T)}),Nc(()=>{var Q;h&&((Q=y.current)==null||Q.setAttribute("data-hidden",""))},[]),Nc(()=>{const Q=y.current;if(!Q)return;const fe=Q.offsetParent??document.documentElement,Ee=()=>{const P=se.current,Be=(P.vertical?fe.clientHeight:fe.clientWidth)-sg*2,He=P.length>0?Math.min(1,Math.max(.4,Be/P.length)):1;D(Math.round(He*1e3)/1e3)};Ee();const ve=new ResizeObserver(Ee);return ve.observe(fe),()=>ve.disconnect()},[Le,V,G,O]),le.useEffect(()=>{var oe;const Q=y.current;if(!Q)return;const fe=((oe=window.matchMedia)==null?void 0:oe.call(window,"(prefers-reduced-motion: reduce)").matches)??!1,Ee=new Map,ve={x:0,y:0,inside:!1};let P=-1,Be=null,He=null,A=[],_=se.current.base,z=Q.hasAttribute("data-hidden"),J=se.current.autoHide,H=0,xe=0,Te=0,ne=!0;const ae=de=>{let pe=Ee.get(de);return pe||(pe={size:se.current.base,velocity:0,lift:0,rise:0,launch:0,gravity:0,hopping:!1,drawn:"",node:null},Ee.set(de,pe)),pe},Ae=de=>{if(xe=0,!ne)return;const pe=se.current,re=Math.min(1/30,Math.max(.001,(de-Te)/1e3));if(Te=de,pe.base!==_){const kt=pe.base/_;Ee.forEach(an=>{an.size*=kt,an.velocity*=kt}),_=pe.base}const Ie=Q.getBoundingClientRect(),ze=pe.vertical?Ie.top+Ie.height/2:Ie.left+Ie.width/2,rt=pe.items.map(kt=>kt!=null&&kt.separator?1:pe.base);let it=-(rt.reduce((kt,an)=>kt+an,0)+pe.gap*Math.max(0,rt.length-1))/2;const It=rt.map(kt=>{const an=it+kt/2;return it+=kt+pe.gap,an});let Ut=null;Be!==null?Ut=Be:ve.inside?Ut=(pe.vertical?ve.y:ve.x)-ze:It[P]!==void 0&&(Ut=It[P]),He=Ut,A=It;const Wr=Math.max(1,Math.ceil(re*240)),_n=re/Wr,ki=pe.stiffness/pe.mass,Xr=pe.damping/pe.mass;let In=!1;pe.items.forEach((kt,an)=>{const Jt=w.current[an];if(!Jt||kt!=null&&kt.separator)return;const ot=ae(an),ln=Ut===null?1:Math.abs(Ut-It[an])/pe.distance,ii=pe.base+(pe.peak-pe.base)*(ln<1?Math.cos(ln*Math.PI/2)**2:0);if(fe)ot.size=ii,ot.velocity=0;else for(let xi=0;xi<Wr;xi++)ot.velocity=(ot.velocity+_n*ki*(ii-ot.size))/(1+_n*Xr+_n*_n*ki),ot.size+=ot.velocity*_n,ot.hopping&&(ot.rise-=ot.gravity*_n,ot.lift+=ot.rise*_n,!(ot.lift>0)&&(ot.lift=0,ot.rise*=-.36,ot.rise<ot.launch*.2&&(ot.rise=0,ot.hopping=!1,Jt.removeAttribute("data-hop"))));Math.abs(ot.velocity)<.01&&Math.abs(ii-ot.size)<.01?(ot.size=ii,ot.velocity=0):In=!0,ot.hopping&&(In=!0);const Un=Math.max(1,ot.size),ar=`${Un.toFixed(2)} ${ot.lift.toFixed(2)} ${pe.side}`;if(ar===ot.drawn&&Jt===ot.node)return;ot.drawn=ar,ot.node=Jt;const ri=pe.side==="bottom"||pe.side==="right"?-ot.lift:ot.lift,Bi=Jt.firstElementChild;Jt.style.width=`${Un}px`,Jt.style.height=`${Un}px`,Bi&&(Bi.style.transform=`translate(${pe.vertical?`${ri}px, 0`:`0, ${ri}px`}) scale(${Un/pe.base})`)}),In&&(xe=requestAnimationFrame(Ae))},Ne=()=>{xe||!ne||(Te=performance.now(),xe=requestAnimationFrame(Ae))},we=()=>{window.clearTimeout(H),H=0,z&&(z=!1,Q.removeAttribute("data-hidden"))},be=()=>{window.clearTimeout(H),H=0;const de=ve.inside||Be!==null||Q.contains(document.activeElement);z||!se.current.autoHide||de||(z=!0,Q.setAttribute("data-hidden",""))},Ge=()=>{z||H||!se.current.autoHide||(H=window.setTimeout(be,600))};T.current=()=>{const de=se.current.autoHide;de!==J&&(J=de,de?be():we()),Ne()},C.current={hop:de=>{const pe=w.current[de];if(fe||!se.current.bounce||!pe)return;const re=ae(de);if(re.hopping)return;const Ie=re.size*bE;re.gravity=8*Ie/(ku*ku),re.launch=re.gravity*ku/2,re.rise=re.launch,re.hopping=!0,pe.setAttribute("data-hop",""),Ne()},focus:de=>{P=de,Ne()},hold:de=>{if(de===null){Be=null,Ne(),Ge();return}Be=He??A[de]??0,we(),Ne()}};const Xe=de=>{ve.x=de.clientX,ve.y=de.clientY,ve.inside=!0,we(),Ne()},je=()=>{ve.inside=!1,Ne(),Ge()},B=de=>{Q.contains(de.relatedTarget)||Ge()},Pe=de=>{const pe=se.current;if(!pe.autoHide||ve.inside)return;const re=Q.offsetParent,Ie=re?re.getBoundingClientRect():{left:0,top:0,right:window.innerWidth,bottom:window.innerHeight},ze=sg+pe.thickness*.6,rt=de.clientX,it=de.clientY,It=rt>=Ie.left&&rt<=Ie.right&&it>=Ie.top&&it<=Ie.bottom,Ut={bottom:it>=Ie.bottom-ze,top:it<=Ie.top+ze,left:rt<=Ie.left+ze,right:rt>=Ie.right-ze}[pe.side];It&&Ut?we():Ge()};return Q.addEventListener("pointermove",Xe),Q.addEventListener("pointerdown",Xe),Q.addEventListener("pointerleave",je),Q.addEventListener("pointercancel",je),Q.addEventListener("focusin",we),Q.addEventListener("focusout",B),window.addEventListener("pointermove",Pe),window.addEventListener("pointerdown",Pe),Ne(),()=>{ne=!1,cancelAnimationFrame(xe),window.clearTimeout(H),Q.removeEventListener("pointermove",Xe),Q.removeEventListener("pointerdown",Xe),Q.removeEventListener("pointerleave",je),Q.removeEventListener("pointercancel",je),Q.removeEventListener("focusin",we),Q.removeEventListener("focusout",B),window.removeEventListener("pointermove",Pe),window.removeEventListener("pointerdown",Pe),T.current=null,C.current=null;const de=b.current;de&&(window.clearTimeout(de.timer),de.cleanup())}},[]);const Ce=le.useCallback(Q=>{var P;const fe=x.current;if(!fe||fe.closing)return;const Ee=((P=se.current.items[fe.index])==null?void 0:P.menu)??[],ve={...fe,closing:!0,restore:Q,rows:Ee};x.current=ve,q(ve)},[]),Re=le.useCallback(()=>{var fe,Ee;const Q=x.current;x.current=null,q(null),(fe=C.current)==null||fe.hold(null),Q!=null&&Q.restore&&((Ee=w.current[Q.index])==null||Ee.focus({preventScroll:!0}))},[]);le.useEffect(()=>{if(!I||I.closing)return;const Q=w.current[I.index],fe=P=>{const Be=P.target;Be instanceof Element&&(Be.closest("[data-dock-menu]")||Q!=null&&Q.contains(Be))||Ce(!1)},Ee=P=>{P.target instanceof Element&&P.target.closest("[data-dock-menu]")||Ce(!1)},ve=()=>Ce(!1);return document.addEventListener("pointerdown",fe,!0),window.addEventListener("scroll",Ee,!0),window.addEventListener("resize",ve),window.addEventListener("blur",ve),()=>{document.removeEventListener("pointerdown",fe,!0),window.removeEventListener("scroll",Ee,!0),window.removeEventListener("resize",ve),window.removeEventListener("blur",ve)}},[I,Ce]);const Oe=(Q,fe)=>{var A,_,z;const Ee=w.current[Q];if(!Ee||!((_=(A=t[Q])==null?void 0:A.menu)!=null&&_.length))return!1;const ve=x.current;if(ve&&ve.index===Q&&!ve.closing)return!0;(z=C.current)==null||z.hold(Q);const P=Ee.getBoundingClientRect(),Be={bottom:{x:P.left+P.width/2,y:P.top-fl},top:{x:P.left+P.width/2,y:P.bottom+fl},left:{x:P.right+fl,y:P.top+P.height/2},right:{x:P.left-fl,y:P.top+P.height/2}}[W];R.current+=1;const He={id:R.current,index:Q,point:Be,keyboard:fe==="keyboard",closing:!1,restore:!1};return x.current=He,q(He),!0},Ke=()=>{const Q=b.current;Q&&(window.clearTimeout(Q.timer),Q.cleanup(),b.current=null)},ie=(Q,fe)=>{var He;Ke();const Ee=Q.currentTarget,ve={id:Q.pointerId,x:Q.clientX,y:Q.clientY,timer:0,cleanup:()=>{}};(He=Ee.hasPointerCapture)!=null&&He.call(Ee,Q.pointerId)&&Ee.releasePointerCapture(Q.pointerId);const P=A=>{A.pointerId===ve.id&&Math.hypot(A.clientX-ve.x,A.clientY-ve.y)>8&&Ke()},Be=A=>{A.pointerId===ve.id&&Ke()};ve.cleanup=()=>{window.removeEventListener("pointermove",P),window.removeEventListener("pointerup",Be),window.removeEventListener("pointercancel",Be)},ve.timer=window.setTimeout(()=>{ve.cleanup(),b.current=null,Oe(fe,"press")&&(X.current=fe,N.current=!0,window.addEventListener("pointerup",()=>{N.current=!1},{once:!0}))},PE),window.addEventListener("pointermove",P),window.addEventListener("pointerup",Be),window.addEventListener("pointercancel",Be),b.current=ve},he=(Q,fe)=>{var A;const Ee={bottom:"ArrowUp",top:"ArrowDown",left:"ArrowRight",right:"ArrowLeft"}[W];if(Q.key==="ContextMenu"||Q.shiftKey&&Q.key==="F10"||Q.key===Ee){Oe(fe,"keyboard")&&Q.preventDefault();return}const ve=t.flatMap((_,z)=>_!=null&&_.separator?[]:[z]),P=ve.indexOf(fe),Be=V?["ArrowUp","ArrowDown"]:["ArrowLeft","ArrowRight"];let He;Q.key===Be[0]?He=ve[(P-1+ve.length)%ve.length]:Q.key===Be[1]?He=ve[(P+1)%ve.length]:Q.key==="Home"?He=ve[0]:Q.key==="End"&&(He=ve[ve.length-1]),He!==void 0&&(Q.preventDefault(),(A=w.current[He])==null||A.focus())},ue=I&&!I.closing?I.index:-1;return K.jsxs("div",{ref:y,className:`dock dock--${W}${u?"":" dock--bare"}${v?` ${v}`:""}`,role:"toolbar","aria-label":"Dock","aria-orientation":V?"vertical":"horizontal",style:{...U,"--dock-base":`${Ye}px`,"--dock-thickness":`${$e}px`,"--dock-gap":`${Se*L}px`,"--dock-pad":`${($e-Ye)/2}px`,"--dock-reach":`${qe-Ye}px`,"--dock-round":Us(l,0,1),...S},children:[t.map((Q,fe)=>{var Ee,ve;return Q!=null&&Q.separator?K.jsx("span",{className:"dock-separator","aria-hidden":"true"},fe):K.jsxs("button",{ref:P=>{w.current[fe]=P},type:"button",className:`dock-item${Q.className?` ${Q.className}`:""}`,"aria-label":Q.label,"aria-haspopup":(Ee=Q.menu)!=null&&Ee.length?"menu":void 0,"aria-expanded":(ve=Q.menu)!=null&&ve.length?ue===fe:void 0,"data-open":ue===fe?"":void 0,onPointerDown:P=>{var He;X.current=-1;const Be=x.current;if(Be&&!Be.closing){if(P.button===2||P.ctrlKey)return;X.current=fe,Ce(!1);return}(He=Q.menu)!=null&&He.length&&P.button===0&&!P.ctrlKey&&ie(P,fe)},onContextMenu:P=>{var Be;(Be=Q.menu)!=null&&Be.length&&(P.preventDefault(),Ke(),Oe(fe,"pointer"))},onClick:()=>{var P,Be;if(X.current===fe){X.current=-1;return}(P=C.current)==null||P.hop(fe),(Be=Q.onClick)==null||Be.call(Q)},onFocus:P=>{var Be;P.currentTarget.matches(":focus-visible")&&((Be=C.current)==null||Be.focus(fe))},onBlur:()=>{var P;return(P=C.current)==null?void 0:P.focus(-1)},onKeyDown:P=>he(P,fe),children:[K.jsxs("span",{className:"dock-tile",children:[K.jsx("span",{className:"dock-face",children:Q.icon}),M&&NE(Q.badge)?K.jsx("span",{className:"dock-badge",children:Q.badge===!0?null:Q.badge}):null]}),g&&Q.active?K.jsx("span",{className:"dock-dot","aria-hidden":"true"}):null,p&&Q.label&&!I?K.jsx("span",{className:"dock-label","aria-hidden":"true",children:Q.label}):null]},fe)}),I?K.jsx(j_,{rows:I.rows??((ce=t[I.index])==null?void 0:ce.menu)??[],label:(_e=t[I.index])==null?void 0:_e.label,side:W,point:I.point,tokens:U,focusFirst:I.keyboard,closing:I.closing,pressingRef:N,onSelect:(Q,fe)=>{var Ee,ve;Ce(fe||!!((Ee=x.current)!=null&&Ee.keyboard)),(ve=Q.onClick)==null||ve.call(Q)},onDismiss:Ce,onExited:Re},I.id):null]})}const OE=()=>K.jsx(Z_,{to:"/",className:"logo","aria-label":"BD — home",children:K.jsxs("svg",{viewBox:"0 0 64 64",width:"44",height:"44",role:"img","aria-hidden":"true",children:[K.jsx("rect",{x:"1.5",y:"1.5",width:"61",height:"61",rx:"17",fill:"rgba(10,11,22,.7)",stroke:"currentColor",strokeOpacity:".5",strokeWidth:"2"}),K.jsx("text",{x:"32",y:"43",textAnchor:"middle",fontFamily:"Syne, Helvetica, Arial, sans-serif",fontWeight:"800",fontSize:"27",letterSpacing:"-2",fill:"currentColor",children:"BD"})]})}),dl=({children:t})=>K.jsx("svg",{className:"dock-icon",viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:t}),hl={home:K.jsxs(dl,{children:[K.jsx("path",{d:"m3.5 10.7 8.5-7 8.5 7"}),K.jsx("path",{d:"M5.5 9.5v10h13v-10M9.5 19.5v-5h5v5"})]}),about:K.jsxs(dl,{children:[K.jsx("circle",{cx:"12",cy:"12",r:"8.5"}),K.jsx("path",{d:"M12 10.8v5M12 7.8h.01"})]}),projects:K.jsxs(dl,{children:[K.jsx("rect",{x:"4",y:"4",width:"6",height:"6",rx:"1"}),K.jsx("rect",{x:"14",y:"4",width:"6",height:"6",rx:"1"}),K.jsx("rect",{x:"4",y:"14",width:"6",height:"6",rx:"1"}),K.jsx("rect",{x:"14",y:"14",width:"6",height:"6",rx:"1"})]}),connections:K.jsxs(dl,{children:[K.jsx("circle",{cx:"6.5",cy:"17.5",r:"2.5"}),K.jsx("circle",{cx:"17.5",cy:"6.5",r:"2.5"}),K.jsx("path",{d:"m8.5 15.5 7-7M13 6.5h4.5V11"})]})},kE=()=>{const t=X_(),{pathname:e}=yo(),n=[{label:"Home",icon:hl.home,active:e==="/",onClick:()=>t("/")},{label:"About",icon:hl.about,active:e==="/about",onClick:()=>t("/about")},{label:"Projects",icon:hl.projects,active:e==="/projects",onClick:()=>t("/projects")},{label:"Connections",icon:hl.connections,active:e==="/connections",onClick:()=>t("/connections")}];return K.jsxs("header",{className:"nav",children:[K.jsx(OE,{}),K.jsx(FE,{items:n,baseItemSize:54,magnification:78,panelHeight:74,accentColor:"#c49bff",position:"bottom",distance:190,gap:9,roundness:.55,bounce:!0,tiles:!0,showLabels:!0,showIndicators:!0,showBadges:!1})]})},ag=[["95d33248b06184235bfe7f0dc0ace640.jpg","Memory portrait"],["Bharanidharan coat.png","Bharanidharan coat"],["about photo.jpg","About photo"],["s.jpg","Memory photo"],["smiling-anime-boy-with-clouds.jpg","Smiling anime boy"],["spider.jpg","Spider illustration"],["spiderman.jpg","Spider-Man illustration"],["sports.jpg","Sports memory"],["travel-1.jpg","Travel memory"]],J_=Array.from({length:40},(t,e)=>{const[n,i]=ag[e%ag.length];return{src:`/images/memories/${encodeURIComponent(n)}`,alt:`${i} ${e+1}`,title:`${i} ${e+1}`}}),Bu=(t,e,n)=>{const i=Math.hypot(e,n);if(!i)return t;const r=i*Math.PI/360,s=Math.sin(r)/i,o=e*s,a=n*s,l=Math.cos(r),[c,f,h,u]=t,p=[l*c+o*u+a*h,l*f+a*u-o*h,l*h+o*f-a*c,l*u-o*c-a*f],g=Math.hypot(...p);return p.map(M=>M/g)},BE=({images:t=J_,fit:e=.5,fitBasis:n="auto",minRadius:i=600,maxRadius:r=1/0,padFactor:s=.25,overlayBlurColor:o="#120F17",autoRotateSpeed:a=10,dragSensitivity:l=20,enlargeTransitionMs:c=300,segments:f=35,dragDampening:h=2,openedImageWidth:u="400px",openedImageHeight:p="400px",imageBorderRadius:g="30px",openedImageBorderRadius:M="30px",grayscale:m=!0})=>{const d=le.useRef(null),v=le.useRef(null),S=le.useRef(null),y=le.useRef(!1),w=le.useRef({orientation:[0,0,0,1],velocity:{x:0,y:a}}),[T,C]=le.useState(null),x=le.useMemo(()=>{if(!t.length)return[];const L=Math.max(8,Math.round(f)),D=Math.max(4,Math.round(L/2)),I=[];for(let q=0;q<D;q+=1){const W=-90+(q+.5)*180/D,V=2*Math.PI*Math.cos(W*Math.PI/180),O=Math.max(3,Math.round(L*V/(2*Math.PI)));for(let G=0;G<O;G+=1){const ee=I.length,Se=t[ee%t.length],Le=typeof Se=="string"?{src:Se}:Se;I.push({...Le,key:`${Le.src}-${ee}`,latitude:W,longitude:(G+q%2*.5)*360/O,width:V/O,height:Math.PI/D,alt:Le.alt||`Memory ${ee+1}`})}}return I},[t,f]);le.useEffect(()=>{const L=d.current;if(!L)return;const D=()=>{const q=n==="width"?L.clientWidth:n==="height"?L.clientHeight:n==="max"?Math.max(L.clientWidth,L.clientHeight):Math.min(L.clientWidth,L.clientHeight),W=Math.min(r,Math.max(i,q/Math.max(e,.1)));L.style.setProperty("--radius",`${W}px`),L.style.setProperty("--viewer-pad",`${Math.min(L.clientWidth,L.clientHeight)*s}px`)};D();const I=new ResizeObserver(D);return I.observe(L),()=>I.disconnect()},[e,n,i,r,s]),le.useEffect(()=>{let L,D;const I=window.matchMedia("(prefers-reduced-motion: reduce)"),q=W=>{const V=D===void 0?0:Math.min((W-D)/1e3,.05),O=w.current;if(!S.current&&!T&&!document.hidden)if(I.matches)O.velocity={x:0,y:0};else{const qe=Math.exp(-Math.max(.1,h)*V);O.velocity.x*=qe,O.velocity.y=a+(O.velocity.y-a)*qe,O.orientation=Bu(O.orientation,O.velocity.x*V,O.velocity.y*V)}const[G,ee,Se,Le]=O.orientation,Ye=2*Math.acos(Math.max(-1,Math.min(1,Le)));v.current&&(v.current.style.transform=`translateZ(calc(var(--radius) * -1)) rotate3d(${G}, ${ee}, ${Se}, ${Ye}rad)`),D=W,L=requestAnimationFrame(q)};return L=requestAnimationFrame(q),()=>cancelAnimationFrame(L)},[T,a,h]);const R=L=>{!L.isPrimary||L.button!==0||T||S.current||(y.current=!1,w.current.velocity={x:0,y:0},L.currentTarget.dataset.dragging="true",S.current={pointerId:L.pointerId,startX:L.clientX,startY:L.clientY,x:L.clientX,y:L.clientY,time:L.timeStamp,sensitivity:180/Math.max(1,Math.min(d.current.clientWidth,d.current.clientHeight))*20/Math.max(1,l),moved:!1})},b=L=>{const D=S.current;if(!D||D.pointerId!==L.pointerId)return;if(!D.moved){if(Math.hypot(L.clientX-D.startX,L.clientY-D.startY)<=4)return;D.moved=!0,y.current=!0,L.currentTarget.setPointerCapture(L.pointerId)}const I=-(L.clientY-D.y)*D.sensitivity,q=(L.clientX-D.x)*D.sensitivity,W=Math.max((L.timeStamp-D.time)/1e3,1/120),V=Math.hypot(I,q)/W,O=V>240?240/V:1,G=w.current;G.orientation=Bu(G.orientation,I,q),G.velocity={x:G.velocity.x*.35+I/W*O*.65,y:G.velocity.y*.35+q/W*O*.65},D.x=L.clientX,D.y=L.clientY,D.time=L.timeStamp},N=L=>{const D=S.current;!D||D.pointerId!==L.pointerId||((L.type!=="pointerup"||L.timeStamp-D.time>80)&&(w.current.velocity={x:0,y:0}),S.current=null,delete L.currentTarget.dataset.dragging,L.currentTarget.hasPointerCapture(L.pointerId)&&L.currentTarget.releasePointerCapture(L.pointerId))},X=L=>{if(L.target!==L.currentTarget)return;const D={ArrowUp:[15,0],ArrowDown:[-15,0],ArrowLeft:[0,-15],ArrowRight:[0,15]}[L.key];D&&(L.preventDefault(),w.current.orientation=Bu(w.current.orientation,...D),w.current.velocity={x:0,y:0})};return K.jsxs("div",{ref:d,className:"sphere-root","data-grayscale":m||void 0,style:{"--overlay-blur-color":o,"--enlarge-width":u,"--enlarge-height":p,"--tile-radius":g,"--enlarge-radius":M,"--enlarge-transition":`${c}ms`},children:[K.jsxs("div",{className:"sphere-main",onPointerDown:R,onPointerMove:b,onPointerUp:N,onPointerCancel:N,onLostPointerCapture:N,onKeyDown:X,tabIndex:0,role:"group","aria-label":"360-degree memories gallery. Drag in any direction or use the arrow keys to rotate.",children:[K.jsx("div",{className:"stage",children:K.jsx("div",{ref:v,className:"sphere",children:x.map(L=>K.jsx("div",{className:"item",style:{"--longitude":`${L.longitude}deg`,"--latitude":`${L.latitude}deg`,"--item-width":L.width,"--item-height":L.height},children:K.jsx("button",{className:"item__image",type:"button","aria-label":`View ${L.alt}`,onClick:D=>{(!y.current||D.detail===0)&&C(L)},children:K.jsx("img",{src:L.src,alt:L.alt,draggable:"false"})})},L.key))})}),K.jsx("div",{className:"overlay"}),K.jsx("div",{className:"overlay--blur"})]}),T&&K.jsxs("div",{className:"dome-viewer",role:"dialog","aria-modal":"true","aria-label":T.alt,onClick:()=>C(null),children:[K.jsx("button",{className:"dome-viewer__close",type:"button",onClick:()=>C(null),"aria-label":"Close image",children:"×"}),K.jsx("img",{src:T.src,alt:T.alt,onClick:L=>L.stopPropagation()})]})]})},ru=({loading:t,error:e,retry:n})=>t?K.jsx("p",{className:"status",children:"Loading…"}):e?K.jsxs("p",{className:"status",children:["Could not reach the server. Check that the backend is running, then"," ",K.jsx("button",{className:"linkish",onClick:n,children:"try again"}),"."]}):null,zE="".replace(/\/$/,""),su=t=>{const[e,n]=le.useState({data:null,error:!1,loading:!0}),[i,r]=le.useState(0);return le.useEffect(()=>{let s=!1;return n(o=>({...o,loading:!0,error:!1})),fetch(`${zE}${t}`).then(o=>o.ok?o.json():Promise.reject(new Error(o.status))).then(o=>!s&&n({data:o,error:!1,loading:!1})).catch(()=>!s&&n({data:null,error:!0,loading:!1})),()=>{s=!0}},[t,i]),{...e,retry:()=>r(s=>s+1)}},lg=()=>{const{data:t,loading:e,error:n,retry:i}=su("/api/profile");return K.jsxs("main",{className:"page",children:[K.jsx("section",{className:"hero",children:t?K.jsxs(K.Fragment,{children:[K.jsx("h1",{className:"hero__name",children:t.name}),K.jsx("p",{className:"hero__title",children:t.title}),K.jsx("p",{className:"hero__tagline",children:t.tagline})]}):K.jsx(ru,{loading:e,error:n,retry:i})}),t&&K.jsx("div",{className:"marquee","aria-label":"Skills",children:K.jsx("div",{className:"marquee__track",children:[0,1].map(r=>K.jsx("ul",{"aria-hidden":r===1,children:t.skills.map(s=>K.jsx("li",{children:s},s))},r))})}),K.jsxs("section",{className:"memories",children:[K.jsx("h2",{className:"section-title",children:"Memories"}),K.jsx("div",{className:"memories__stage",children:K.jsx(BE,{images:J_,fit:.75,minRadius:350,autoRotateSpeed:10,segments:32,dragSensitivity:20,dragDampening:5,grayscale:!0})})]})]})};/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const mp="186",VE=0,cg=1,HE=2,Ql=1,GE=2,Xo=3,us=0,Dn=1,di=2,Qi=0,ra=1,ug=2,fg=3,dg=4,WE=5,Fs=100,XE=101,$E=102,YE=103,qE=104,KE=200,ZE=201,jE=202,JE=203,Q_=204,ex=205,QE=206,e1=207,t1=208,n1=209,i1=210,r1=211,s1=212,o1=213,a1=214,Ed=0,wd=1,Td=2,Ca=3,Ad=4,Cd=5,Rd=6,bd=7,tx=0,l1=1,c1=2,Ni=0,nx=1,ix=2,rx=3,sx=4,ox=5,ax=6,gp=7,lx=300,fs=301,ho=302,zu=303,Vu=304,ou=306,Br=1e3,Ci=1001,Pd=1002,tn=1003,u1=1004,pl=1005,nn=1006,Hu=1007,Cr=1008,zn=1009,cx=1010,ux=1011,Ra=1012,vp=1013,Di=1014,Ri=1015,Ii=1016,_p=1017,xp=1018,ba=1020,fx=35902,dx=35899,hx=1021,px=1022,pi=1023,sr=1026,ns=1027,mx=1028,yp=1029,ds=1030,Sp=1031,Mp=1033,ec=33776,tc=33777,nc=33778,ic=33779,Ld=35840,Nd=35841,Dd=35842,Id=35843,Ud=36196,Fd=37492,Od=37496,kd=37488,Bd=37489,Dc=37490,zd=37491,Vd=37808,Hd=37809,Gd=37810,Wd=37811,Xd=37812,$d=37813,Yd=37814,qd=37815,Kd=37816,Zd=37817,jd=37818,Jd=37819,Qd=37820,eh=37821,th=36492,nh=36494,ih=36495,rh=36283,sh=36284,Ic=36285,oh=36286,f1=3200,ah=0,d1=1,Mr="",Mn="srgb",Uc="srgb-linear",Fc="linear",_t="srgb",Gu=7680,h1=519,p1=512,m1=513,g1=514,Ep=515,v1=516,_1=517,wp=518,x1=519,y1=35044,hg="300 es",bi=2e3,Pa=2001;function S1(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Oc(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function M1(){const t=Oc("canvas");return t.style.display="block",t}const pg={};function mg(...t){const e="THREE."+t.shift();console.log(e,...t)}function gx(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function et(...t){t=gx(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function dt(...t){t=gx(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function io(...t){const e=t.join(" ");e in pg||(pg[e]=!0,et(...t))}function E1(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const w1={[Ed]:wd,[Td]:Rd,[Ad]:bd,[Ca]:Cd,[wd]:Ed,[Rd]:Td,[bd]:Ad,[Cd]:Ca};class _s{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Wu=Math.PI/180,lh=180/Math.PI;function So(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(dn[t&255]+dn[t>>8&255]+dn[t>>16&255]+dn[t>>24&255]+"-"+dn[e&255]+dn[e>>8&255]+"-"+dn[e>>16&15|64]+dn[e>>24&255]+"-"+dn[n&63|128]+dn[n>>8&255]+"-"+dn[n>>16&255]+dn[n>>24&255]+dn[i&255]+dn[i>>8&255]+dn[i>>16&255]+dn[i>>24&255]).toLowerCase()}function lt(t,e,n){return Math.max(e,Math.min(n,t))}function T1(t,e){return(t%e+e)%e}function Xu(t,e,n){return(1-n)*t+n*e}function Do(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:case Uint8ClampedArray:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function An(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Up=class Up{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=lt(this.x,e.x,n.x),this.y=lt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=lt(this.x,e,n),this.y=lt(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(lt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(lt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Up.prototype.isVector2=!0;let De=Up;class Ui{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],f=i[r+2],h=i[r+3],u=s[o+0],p=s[o+1],g=s[o+2],M=s[o+3];if(h!==M||l!==u||c!==p||f!==g){let m=l*u+c*p+f*g+h*M;m<0&&(u=-u,p=-p,g=-g,M=-M,m=-m);let d=1-a;if(m<.9995){const v=Math.acos(m),S=Math.sin(v);d=Math.sin(d*v)/S,a=Math.sin(a*v)/S,l=l*d+u*a,c=c*d+p*a,f=f*d+g*a,h=h*d+M*a}else{l=l*d+u*a,c=c*d+p*a,f=f*d+g*a,h=h*d+M*a;const v=1/Math.sqrt(l*l+c*c+f*f+h*h);l*=v,c*=v,f*=v,h*=v}}e[n]=l,e[n+1]=c,e[n+2]=f,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],f=i[r+3],h=s[o],u=s[o+1],p=s[o+2],g=s[o+3];return e[n]=a*g+f*h+l*p-c*u,e[n+1]=l*g+f*u+c*h-a*p,e[n+2]=c*g+f*p+a*u-l*h,e[n+3]=f*g-a*h-l*u-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),f=a(r/2),h=a(s/2),u=l(i/2),p=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=u*f*h+c*p*g,this._y=c*p*h-u*f*g,this._z=c*f*g+u*p*h,this._w=c*f*h-u*p*g;break;case"YXZ":this._x=u*f*h+c*p*g,this._y=c*p*h-u*f*g,this._z=c*f*g-u*p*h,this._w=c*f*h+u*p*g;break;case"ZXY":this._x=u*f*h-c*p*g,this._y=c*p*h+u*f*g,this._z=c*f*g+u*p*h,this._w=c*f*h-u*p*g;break;case"ZYX":this._x=u*f*h-c*p*g,this._y=c*p*h+u*f*g,this._z=c*f*g-u*p*h,this._w=c*f*h+u*p*g;break;case"YZX":this._x=u*f*h+c*p*g,this._y=c*p*h+u*f*g,this._z=c*f*g-u*p*h,this._w=c*f*h-u*p*g;break;case"XZY":this._x=u*f*h-c*p*g,this._y=c*p*h-u*f*g,this._z=c*f*g+u*p*h,this._w=c*f*h+u*p*g;break;default:et("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],f=n[6],h=n[10],u=i+a+h;if(u>0){const p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(f-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>h){const p=2*Math.sqrt(1+i-a-h);this._w=(f-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>h){const p=2*Math.sqrt(1+a-i-h);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+f)/p}else{const p=2*Math.sqrt(1+h-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+f)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(lt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,f=n._w;return this._x=i*f+o*a+r*c-s*l,this._y=r*f+o*l+s*a-i*c,this._z=s*f+o*c+i*l-r*a,this._w=o*f-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){let i=e._x,r=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,r=-r,s=-s,o=-o,a=-a);let l=1-n;if(a<.9995){const c=Math.acos(a),f=Math.sin(c);l=Math.sin(l*c)/f,n=Math.sin(n*c)/f,this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+o*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+o*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Fp=class Fp{constructor(e=0,n=0,i=0){this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(gg.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(gg.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),f=2*(a*n-s*r),h=2*(s*i-o*n);return this.x=n+l*c+o*h-a*f,this.y=i+l*f+a*c-s*h,this.z=r+l*h+s*f-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=lt(this.x,e.x,n.x),this.y=lt(this.y,e.y,n.y),this.z=lt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=lt(this.x,e,n),this.y=lt(this.y,e,n),this.z=lt(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(lt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return $u.copy(this).projectOnVector(e),this.sub($u)}reflect(e){return this.sub($u.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(lt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Fp.prototype.isVector3=!0;let F=Fp;const $u=new F,gg=new Ui,Op=class Op{constructor(e,n,i,r,s,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const f=this.elements;return f[0]=e,f[1]=r,f[2]=a,f[3]=n,f[4]=s,f[5]=l,f[6]=i,f[7]=o,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],f=i[4],h=i[7],u=i[2],p=i[5],g=i[8],M=r[0],m=r[3],d=r[6],v=r[1],S=r[4],y=r[7],w=r[2],T=r[5],C=r[8];return s[0]=o*M+a*v+l*w,s[3]=o*m+a*S+l*T,s[6]=o*d+a*y+l*C,s[1]=c*M+f*v+h*w,s[4]=c*m+f*S+h*T,s[7]=c*d+f*y+h*C,s[2]=u*M+p*v+g*w,s[5]=u*m+p*S+g*T,s[8]=u*d+p*y+g*C,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8];return n*o*f-n*a*c-i*s*f+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8],h=f*o-a*c,u=a*l-f*s,p=c*s-o*l,g=n*h+i*u+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/g;return e[0]=h*M,e[1]=(r*c-f*i)*M,e[2]=(a*i-r*o)*M,e[3]=u*M,e[4]=(f*n-r*l)*M,e[5]=(r*s-a*n)*M,e[6]=p*M,e[7]=(i*l-c*n)*M,e[8]=(o*n-i*s)*M,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return io("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Yu.makeScale(e,n)),this}rotate(e){return io("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Yu.makeRotation(-e)),this}translate(e,n){return io("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Yu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Op.prototype.isMatrix3=!0;let nt=Op;const Yu=new nt,vg=new nt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),_g=new nt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function A1(){const t={enabled:!0,workingColorSpace:Uc,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===_t&&(r.r=er(r.r),r.g=er(r.g),r.b=er(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===_t&&(r.r=ro(r.r),r.g=ro(r.g),r.b=ro(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Mr?Fc:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return io("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return io("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[Uc]:{primaries:e,whitePoint:i,transfer:Fc,toXYZ:vg,fromXYZ:_g,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Mn},outputColorSpaceConfig:{drawingBufferColorSpace:Mn}},[Mn]:{primaries:e,whitePoint:i,transfer:_t,toXYZ:vg,fromXYZ:_g,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Mn}}}),t}const ut=A1();function er(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function ro(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Ss;class C1{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Ss===void 0&&(Ss=Oc("canvas")),Ss.width=e.width,Ss.height=e.height;const r=Ss.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Ss}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Oc("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=er(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(er(n[i]/255)*255):n[i]=er(n[i]);return{data:n,width:e.width,height:e.height}}else return et("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let R1=0;class Tp{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:R1++}),this.uuid=So(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(qu(r[o].image)):s.push(qu(r[o]))}else s=qu(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function qu(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?C1.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(et("Texture: Unable to serialize Texture."),{})}let b1=0;const Ku=new F;class mn extends _s{constructor(e=mn.DEFAULT_IMAGE,n=mn.DEFAULT_MAPPING,i=Ci,r=Ci,s=nn,o=Cr,a=pi,l=zn,c=mn.DEFAULT_ANISOTROPY,f=Mr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:b1++}),this.uuid=So(),this.name="",this.source=new Tp(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new De(0,0),this.repeat=new De(1,1),this.center=new De(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new nt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Ku).x}get height(){return this.source.getSize(Ku).y}get depth(){return this.source.getSize(Ku).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){et(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){et(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==lx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Br:e.x=e.x-Math.floor(e.x);break;case Ci:e.x=e.x<0?0:1;break;case Pd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Br:e.y=e.y-Math.floor(e.y);break;case Ci:e.y=e.y<0?0:1;break;case Pd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}mn.DEFAULT_IMAGE=null;mn.DEFAULT_MAPPING=lx;mn.DEFAULT_ANISOTROPY=1;const kp=class kp{constructor(e=0,n=0,i=0,r=1){this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],f=l[4],h=l[8],u=l[1],p=l[5],g=l[9],M=l[2],m=l[6],d=l[10];if(Math.abs(f-u)<.01&&Math.abs(h-M)<.01&&Math.abs(g-m)<.01){if(Math.abs(f+u)<.1&&Math.abs(h+M)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const S=(c+1)/2,y=(p+1)/2,w=(d+1)/2,T=(f+u)/4,C=(h+M)/4,x=(g+m)/4;return S>y&&S>w?S<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(S),r=T/i,s=C/i):y>w?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=T/r,s=x/r):w<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(w),i=C/s,r=x/s),this.set(i,r,s,n),this}let v=Math.sqrt((m-g)*(m-g)+(h-M)*(h-M)+(u-f)*(u-f));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(h-M)/v,this.z=(u-f)/v,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=lt(this.x,e.x,n.x),this.y=lt(this.y,e.y,n.y),this.z=lt(this.z,e.z,n.z),this.w=lt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=lt(this.x,e,n),this.y=lt(this.y,e,n),this.z=lt(this.z,e,n),this.w=lt(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(lt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};kp.prototype.isVector4=!0;let bt=kp;class P1 extends _s{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:nn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new bt(0,0,e,n),this.scissorTest=!1,this.viewport=new bt(0,0,e,n),this.textures=[];const r={width:e,height:n,depth:i.depth},s=new mn(r),o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const n={minFilter:nn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new Tp(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const n=e.depthTexture.clone();n.renderTarget=null,this.depthTexture=n}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class vi extends P1{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class vx extends mn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=tn,this.minFilter=tn,this.wrapR=Ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class L1 extends mn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=tn,this.minFilter=tn,this.wrapR=Ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const zc=class zc{constructor(e,n,i,r,s,o,a,l,c,f,h,u,p,g,M,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,f,h,u,p,g,M,m)}set(e,n,i,r,s,o,a,l,c,f,h,u,p,g,M,m){const d=this.elements;return d[0]=e,d[4]=n,d[8]=i,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=f,d[10]=h,d[14]=u,d[3]=p,d[7]=g,d[11]=M,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new zc().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinantAffine()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const n=this.elements,i=e.elements,r=1/Ms.setFromMatrixColumn(e,0).length(),s=1/Ms.setFromMatrixColumn(e,1).length(),o=1/Ms.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),f=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const u=o*f,p=o*h,g=a*f,M=a*h;n[0]=l*f,n[4]=-l*h,n[8]=c,n[1]=p+g*c,n[5]=u-M*c,n[9]=-a*l,n[2]=M-u*c,n[6]=g+p*c,n[10]=o*l}else if(e.order==="YXZ"){const u=l*f,p=l*h,g=c*f,M=c*h;n[0]=u+M*a,n[4]=g*a-p,n[8]=o*c,n[1]=o*h,n[5]=o*f,n[9]=-a,n[2]=p*a-g,n[6]=M+u*a,n[10]=o*l}else if(e.order==="ZXY"){const u=l*f,p=l*h,g=c*f,M=c*h;n[0]=u-M*a,n[4]=-o*h,n[8]=g+p*a,n[1]=p+g*a,n[5]=o*f,n[9]=M-u*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const u=o*f,p=o*h,g=a*f,M=a*h;n[0]=l*f,n[4]=g*c-p,n[8]=u*c+M,n[1]=l*h,n[5]=M*c+u,n[9]=p*c-g,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const u=o*l,p=o*c,g=a*l,M=a*c;n[0]=l*f,n[4]=M-u*h,n[8]=g*h+p,n[1]=h,n[5]=o*f,n[9]=-a*f,n[2]=-c*f,n[6]=p*h+g,n[10]=u-M*h}else if(e.order==="XZY"){const u=o*l,p=o*c,g=a*l,M=a*c;n[0]=l*f,n[4]=-h,n[8]=c*f,n[1]=u*h+M,n[5]=o*f,n[9]=p*h-g,n[2]=g*h-p,n[6]=a*f,n[10]=M*h+u}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(N1,e,D1)}lookAt(e,n,i){const r=this.elements;return Fn.subVectors(e,n),Fn.lengthSq()===0&&(Fn.z=1),Fn.normalize(),fr.crossVectors(i,Fn),fr.lengthSq()===0&&(Math.abs(i.z)===1?Fn.x+=1e-4:Fn.z+=1e-4,Fn.normalize(),fr.crossVectors(i,Fn)),fr.normalize(),ml.crossVectors(Fn,fr),r[0]=fr.x,r[4]=ml.x,r[8]=Fn.x,r[1]=fr.y,r[5]=ml.y,r[9]=Fn.y,r[2]=fr.z,r[6]=ml.z,r[10]=Fn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],f=i[1],h=i[5],u=i[9],p=i[13],g=i[2],M=i[6],m=i[10],d=i[14],v=i[3],S=i[7],y=i[11],w=i[15],T=r[0],C=r[4],x=r[8],R=r[12],b=r[1],N=r[5],X=r[9],L=r[13],D=r[2],I=r[6],q=r[10],W=r[14],V=r[3],O=r[7],G=r[11],ee=r[15];return s[0]=o*T+a*b+l*D+c*V,s[4]=o*C+a*N+l*I+c*O,s[8]=o*x+a*X+l*q+c*G,s[12]=o*R+a*L+l*W+c*ee,s[1]=f*T+h*b+u*D+p*V,s[5]=f*C+h*N+u*I+p*O,s[9]=f*x+h*X+u*q+p*G,s[13]=f*R+h*L+u*W+p*ee,s[2]=g*T+M*b+m*D+d*V,s[6]=g*C+M*N+m*I+d*O,s[10]=g*x+M*X+m*q+d*G,s[14]=g*R+M*L+m*W+d*ee,s[3]=v*T+S*b+y*D+w*V,s[7]=v*C+S*N+y*I+w*O,s[11]=v*x+S*X+y*q+w*G,s[15]=v*R+S*L+y*W+w*ee,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],f=e[2],h=e[6],u=e[10],p=e[14],g=e[3],M=e[7],m=e[11],d=e[15],v=l*p-c*u,S=a*p-c*h,y=a*u-l*h,w=o*p-c*f,T=o*u-l*f,C=o*h-a*f;return n*(M*v-m*S+d*y)-i*(g*v-m*w+d*T)+r*(g*S-M*w+d*C)-s*(g*y-M*T+m*C)}determinantAffine(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[1],o=e[5],a=e[9],l=e[2],c=e[6],f=e[10];return n*(o*f-a*c)-i*(s*f-a*l)+r*(s*c-o*l)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8],h=e[9],u=e[10],p=e[11],g=e[12],M=e[13],m=e[14],d=e[15],v=n*a-i*o,S=n*l-r*o,y=n*c-s*o,w=i*l-r*a,T=i*c-s*a,C=r*c-s*l,x=f*M-h*g,R=f*m-u*g,b=f*d-p*g,N=h*m-u*M,X=h*d-p*M,L=u*d-p*m,D=v*L-S*X+y*N+w*b-T*R+C*x;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/D;return e[0]=(a*L-l*X+c*N)*I,e[1]=(r*X-i*L-s*N)*I,e[2]=(M*C-m*T+d*w)*I,e[3]=(u*T-h*C-p*w)*I,e[4]=(l*b-o*L-c*R)*I,e[5]=(n*L-r*b+s*R)*I,e[6]=(m*y-g*C-d*S)*I,e[7]=(f*C-u*y+p*S)*I,e[8]=(o*X-a*b+c*x)*I,e[9]=(i*b-n*X-s*x)*I,e[10]=(g*T-M*y+d*v)*I,e[11]=(h*y-f*T-p*v)*I,e[12]=(a*R-o*N-l*x)*I,e[13]=(n*N-i*R+r*x)*I,e[14]=(M*S-g*w-m*v)*I,e[15]=(f*w-h*S+u*v)*I,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,f=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,f*a+i,f*l-r*o,0,c*l-r*a,f*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,f=o+o,h=a+a,u=s*c,p=s*f,g=s*h,M=o*f,m=o*h,d=a*h,v=l*c,S=l*f,y=l*h,w=i.x,T=i.y,C=i.z;return r[0]=(1-(M+d))*w,r[1]=(p+y)*w,r[2]=(g-S)*w,r[3]=0,r[4]=(p-y)*T,r[5]=(1-(u+d))*T,r[6]=(m+v)*T,r[7]=0,r[8]=(g+S)*C,r[9]=(m-v)*C,r[10]=(1-(u+M))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return i.set(1,1,1),n.identity(),this;let o=Ms.set(r[0],r[1],r[2]).length();const a=Ms.set(r[4],r[5],r[6]).length(),l=Ms.set(r[8],r[9],r[10]).length();s<0&&(o=-o),oi.copy(this);const c=1/o,f=1/a,h=1/l;return oi.elements[0]*=c,oi.elements[1]*=c,oi.elements[2]*=c,oi.elements[4]*=f,oi.elements[5]*=f,oi.elements[6]*=f,oi.elements[8]*=h,oi.elements[9]*=h,oi.elements[10]*=h,n.setFromRotationMatrix(oi),i.x=o,i.y=a,i.z=l,this}makePerspective(e,n,i,r,s,o,a=bi,l=!1){const c=this.elements,f=2*s/(n-e),h=2*s/(i-r),u=(n+e)/(n-e),p=(i+r)/(i-r);let g,M;if(l)g=s/(o-s),M=o*s/(o-s);else if(a===bi)g=-(o+s)/(o-s),M=-2*o*s/(o-s);else if(a===Pa)g=-o/(o-s),M=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=f,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=M,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=bi,l=!1){const c=this.elements,f=2/(n-e),h=2/(i-r),u=-(n+e)/(n-e),p=-(i+r)/(i-r);let g,M;if(l)g=1/(o-s),M=o/(o-s);else if(a===bi)g=-2/(o-s),M=-(o+s)/(o-s);else if(a===Pa)g=-1/(o-s),M=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=f,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=h,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=g,c[14]=M,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}};zc.prototype.isMatrix4=!0;let Tt=zc;const Ms=new F,oi=new Tt,N1=new F(0,0,0),D1=new F(1,1,1),fr=new F,ml=new F,Fn=new F,xg=new Tt,yg=new Ui;class zr{constructor(e=0,n=0,i=0,r=zr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],f=r[9],h=r[2],u=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(lt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-lt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(lt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-lt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(lt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-lt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-f,p),this._y=0);break;default:et("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return xg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(xg,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return yg.setFromEuler(this),this.setFromQuaternion(yg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}zr.DEFAULT_ORDER="XYZ";class Ap{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let I1=0;const Sg=new F,Es=new Ui,Vi=new Tt,gl=new F,Io=new F,U1=new F,F1=new Ui,Mg=new F(1,0,0),Eg=new F(0,1,0),wg=new F(0,0,1),Tg={type:"added"},O1={type:"removed"},ws={type:"childadded",child:null},Zu={type:"childremoved",child:null};class gn extends _s{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:I1++}),this.uuid=So(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=gn.DEFAULT_UP.clone();const e=new F,n=new zr,i=new Ui,r=new F(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Tt},normalMatrix:{value:new nt}}),this.matrix=new Tt,this.matrixWorld=new Tt,this.matrixAutoUpdate=gn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ap,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Es.setFromAxisAngle(e,n),this.quaternion.multiply(Es),this}rotateOnWorldAxis(e,n){return Es.setFromAxisAngle(e,n),this.quaternion.premultiply(Es),this}rotateX(e){return this.rotateOnAxis(Mg,e)}rotateY(e){return this.rotateOnAxis(Eg,e)}rotateZ(e){return this.rotateOnAxis(wg,e)}translateOnAxis(e,n){return Sg.copy(e).applyQuaternion(this.quaternion),this.position.add(Sg.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Mg,e)}translateY(e){return this.translateOnAxis(Eg,e)}translateZ(e){return this.translateOnAxis(wg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Vi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?gl.copy(e):gl.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Io.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Vi.lookAt(Io,gl,this.up):Vi.lookAt(gl,Io,this.up),this.quaternion.setFromRotationMatrix(Vi),r&&(Vi.extractRotation(r.matrixWorld),Es.setFromRotationMatrix(Vi),this.quaternion.premultiply(Es.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(dt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Tg),ws.child=e,this.dispatchEvent(ws),ws.child=null):dt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(O1),Zu.child=e,this.dispatchEvent(Zu),Zu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Vi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Vi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Vi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Tg),ws.child=e,this.dispatchEvent(ws),ws.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Io,e,U1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Io,F1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*i-s[8]*r,s[13]+=i-s[1]*n-s[5]*i-s[9]*r,s[14]+=r-s[2]*n-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n,i=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),n===!0){const s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0,i)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),f=o(e.images),h=o(e.shapes),u=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),f.length>0&&(i.images=f),h.length>0&&(i.shapes=h),u.length>0&&(i.skeletons=u),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const c in a){const f=a[c];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}gn.DEFAULT_UP=new F(0,1,0);gn.DEFAULT_MATRIX_AUTO_UPDATE=!0;gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Ks extends gn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const k1={type:"move"};class ju{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ks,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ks,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ks,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const M of e.hand.values()){const m=n.getJointPose(M,i),d=this._getHandJoint(c,M);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const f=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],u=f.position.distanceTo(h.position),p=.02,g=.005;c.inputState.pinching&&u>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(k1)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Ks;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const _x={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},dr={h:0,s:0,l:0},vl={h:0,s:0,l:0};function Ju(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class at{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Mn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ut.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=ut.workingColorSpace){return this.r=e,this.g=n,this.b=i,ut.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=ut.workingColorSpace){if(e=T1(e,1),n=lt(n,0,1),i=lt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Ju(o,s,e+1/3),this.g=Ju(o,s,e),this.b=Ju(o,s,e-1/3)}return ut.colorSpaceToWorking(this,r),this}setStyle(e,n=Mn){function i(s){s!==void 0&&parseFloat(s)<1&&et("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:et("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);et("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Mn){const i=_x[e.toLowerCase()];return i!==void 0?this.setHex(i,n):et("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=er(e.r),this.g=er(e.g),this.b=er(e.b),this}copyLinearToSRGB(e){return this.r=ro(e.r),this.g=ro(e.g),this.b=ro(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Mn){return ut.workingToColorSpace(hn.copy(this),e),Math.round(lt(hn.r*255,0,255))*65536+Math.round(lt(hn.g*255,0,255))*256+Math.round(lt(hn.b*255,0,255))}getHexString(e=Mn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=ut.workingColorSpace){ut.workingToColorSpace(hn.copy(this),n);const i=hn.r,r=hn.g,s=hn.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const f=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=f<=.5?h/(o+a):h/(2-o-a),o){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=f,e}getRGB(e,n=ut.workingColorSpace){return ut.workingToColorSpace(hn.copy(this),n),e.r=hn.r,e.g=hn.g,e.b=hn.b,e}getStyle(e=Mn){ut.workingToColorSpace(hn.copy(this),e);const n=hn.r,i=hn.g,r=hn.b;return e!==Mn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(dr),this.setHSL(dr.h+e,dr.s+n,dr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(dr),e.getHSL(vl);const i=Xu(dr.h,vl.h,n),r=Xu(dr.s,vl.s,n),s=Xu(dr.l,vl.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const hn=new at;at.NAMES=_x;class xx extends gn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new zr,this.environmentIntensity=1,this.environmentRotation=new zr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),n.object.backgroundBlurriness=this.backgroundBlurriness,n.object.backgroundIntensity=this.backgroundIntensity,n.object.backgroundRotation=this.backgroundRotation.toArray(),n.object.environmentIntensity=this.environmentIntensity,n.object.environmentRotation=this.environmentRotation.toArray(),n}}const ai=new F,Hi=new F,Qu=new F,Gi=new F,Ts=new F,As=new F,Ag=new F,ef=new F,tf=new F,nf=new F,rf=new bt,sf=new bt,of=new bt;class hi{constructor(e=new F,n=new F,i=new F){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),ai.subVectors(e,n),r.cross(ai);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){ai.subVectors(r,n),Hi.subVectors(i,n),Qu.subVectors(e,n);const o=ai.dot(ai),a=ai.dot(Hi),l=ai.dot(Qu),c=Hi.dot(Hi),f=Hi.dot(Qu),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const u=1/h,p=(c*l-a*f)*u,g=(o*f-a*l)*u;return s.set(1-p-g,g,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Gi)===null?!1:Gi.x>=0&&Gi.y>=0&&Gi.x+Gi.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,Gi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Gi.x),l.addScaledVector(o,Gi.y),l.addScaledVector(a,Gi.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return rf.setScalar(0),sf.setScalar(0),of.setScalar(0),rf.fromBufferAttribute(e,n),sf.fromBufferAttribute(e,i),of.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(rf,s.x),o.addScaledVector(sf,s.y),o.addScaledVector(of,s.z),o}static isFrontFacing(e,n,i,r){return ai.subVectors(i,n),Hi.subVectors(e,n),ai.cross(Hi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ai.subVectors(this.c,this.b),Hi.subVectors(this.a,this.b),ai.cross(Hi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return hi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return hi.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return hi.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return hi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return hi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;Ts.subVectors(r,i),As.subVectors(s,i),ef.subVectors(e,i);const l=Ts.dot(ef),c=As.dot(ef);if(l<=0&&c<=0)return n.copy(i);tf.subVectors(e,r);const f=Ts.dot(tf),h=As.dot(tf);if(f>=0&&h<=f)return n.copy(r);const u=l*h-f*c;if(u<=0&&l>=0&&f<=0)return o=l/(l-f),n.copy(i).addScaledVector(Ts,o);nf.subVectors(e,s);const p=Ts.dot(nf),g=As.dot(nf);if(g>=0&&p<=g)return n.copy(s);const M=p*c-l*g;if(M<=0&&c>=0&&g<=0)return a=c/(c-g),n.copy(i).addScaledVector(As,a);const m=f*g-p*h;if(m<=0&&h-f>=0&&p-g>=0)return Ag.subVectors(s,r),a=(h-f)/(h-f+(p-g)),n.copy(r).addScaledVector(Ag,a);const d=1/(m+M+u);return o=M*d,a=u*d,n.copy(i).addScaledVector(Ts,o).addScaledVector(As,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Va{constructor(e=new F(1/0,1/0,1/0),n=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(li.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(li.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=li.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,li):li.fromBufferAttribute(s,o),li.applyMatrix4(e.matrixWorld),this.expandByPoint(li);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),_l.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),_l.copy(i.boundingBox)),_l.applyMatrix4(e.matrixWorld),this.union(_l)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,li),li.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Uo),xl.subVectors(this.max,Uo),Cs.subVectors(e.a,Uo),Rs.subVectors(e.b,Uo),bs.subVectors(e.c,Uo),hr.subVectors(Rs,Cs),pr.subVectors(bs,Rs),$r.subVectors(Cs,bs);let n=[0,-hr.z,hr.y,0,-pr.z,pr.y,0,-$r.z,$r.y,hr.z,0,-hr.x,pr.z,0,-pr.x,$r.z,0,-$r.x,-hr.y,hr.x,0,-pr.y,pr.x,0,-$r.y,$r.x,0];return!af(n,Cs,Rs,bs,xl)||(n=[1,0,0,0,1,0,0,0,1],!af(n,Cs,Rs,bs,xl))?!1:(yl.crossVectors(hr,pr),n=[yl.x,yl.y,yl.z],af(n,Cs,Rs,bs,xl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,li).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(li).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Wi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Wi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Wi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Wi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Wi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Wi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Wi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Wi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Wi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Wi=[new F,new F,new F,new F,new F,new F,new F,new F],li=new F,_l=new Va,Cs=new F,Rs=new F,bs=new F,hr=new F,pr=new F,$r=new F,Uo=new F,xl=new F,yl=new F,Yr=new F;function af(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Yr.fromArray(t,s);const a=r.x*Math.abs(Yr.x)+r.y*Math.abs(Yr.y)+r.z*Math.abs(Yr.z),l=e.dot(Yr),c=n.dot(Yr),f=i.dot(Yr);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>a)return!1}return!0}const Bt=new F,Sl=new De;let B1=0;class ei extends _s{constructor(e,n,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:B1++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=y1,this.updateRanges=[],this.gpuType=Ri,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Sl.fromBufferAttribute(this,n),Sl.applyMatrix3(e),this.setXY(n,Sl.x,Sl.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Bt.fromBufferAttribute(this,n),Bt.applyMatrix3(e),this.setXYZ(n,Bt.x,Bt.y,Bt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Bt.fromBufferAttribute(this,n),Bt.applyMatrix4(e),this.setXYZ(n,Bt.x,Bt.y,Bt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Bt.fromBufferAttribute(this,n),Bt.applyNormalMatrix(e),this.setXYZ(n,Bt.x,Bt.y,Bt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Bt.fromBufferAttribute(this,n),Bt.transformDirection(e),this.setXYZ(n,Bt.x,Bt.y,Bt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Do(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=An(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Do(n,this.array)),n}setX(e,n){return this.normalized&&(n=An(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Do(n,this.array)),n}setY(e,n){return this.normalized&&(n=An(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Do(n,this.array)),n}setZ(e,n){return this.normalized&&(n=An(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Do(n,this.array)),n}setW(e,n){return this.normalized&&(n=An(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=An(n,this.array),i=An(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=An(n,this.array),i=An(i,this.array),r=An(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=An(n,this.array),i=An(i,this.array),r=An(r,this.array),s=An(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class yx extends ei{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Sx extends ei{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class sn extends ei{constructor(e,n,i){super(new Float32Array(e),n,i)}}const z1=new Va,Fo=new F,lf=new F;class Cp{constructor(e=new F,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):z1.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Fo.subVectors(e,this.center);const n=Fo.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Fo,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(lf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Fo.copy(e.center).add(lf)),this.expandByPoint(Fo.copy(e.center).sub(lf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let V1=0;const qn=new Tt,cf=new gn,Ps=new F,On=new Va,Oo=new Va,Kt=new F;class $n extends _s{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:V1++}),this.uuid=So(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(S1(e)?Sx:yx)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new nt().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return qn.makeRotationFromQuaternion(e),this.applyMatrix4(qn),this}rotateX(e){return qn.makeRotationX(e),this.applyMatrix4(qn),this}rotateY(e){return qn.makeRotationY(e),this.applyMatrix4(qn),this}rotateZ(e){return qn.makeRotationZ(e),this.applyMatrix4(qn),this}translate(e,n,i){return qn.makeTranslation(e,n,i),this.applyMatrix4(qn),this}scale(e,n,i){return qn.makeScale(e,n,i),this.applyMatrix4(qn),this}lookAt(e){return cf.lookAt(e),cf.updateMatrix(),this.applyMatrix4(cf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ps).negate(),this.translate(Ps.x,Ps.y,Ps.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new sn(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&et("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Va);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){dt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];On.setFromBufferAttribute(s),this.morphTargetsRelative?(Kt.addVectors(this.boundingBox.min,On.min),this.boundingBox.expandByPoint(Kt),Kt.addVectors(this.boundingBox.max,On.max),this.boundingBox.expandByPoint(Kt)):(this.boundingBox.expandByPoint(On.min),this.boundingBox.expandByPoint(On.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&dt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Cp);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){dt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){const i=this.boundingSphere.center;if(On.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Oo.setFromBufferAttribute(a),this.morphTargetsRelative?(Kt.addVectors(On.min,Oo.min),On.expandByPoint(Kt),Kt.addVectors(On.max,Oo.max),On.expandByPoint(Kt)):(On.expandByPoint(Oo.min),On.expandByPoint(Oo.max))}On.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Kt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Kt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,f=a.count;c<f;c++)Kt.fromBufferAttribute(a,c),l&&(Ps.fromBufferAttribute(e,c),Kt.add(Ps)),r=Math.max(r,i.distanceToSquared(Kt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&dt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){dt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;let o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new ei(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));const a=[],l=[];for(let x=0;x<i.count;x++)a[x]=new F,l[x]=new F;const c=new F,f=new F,h=new F,u=new De,p=new De,g=new De,M=new F,m=new F;function d(x,R,b){c.fromBufferAttribute(i,x),f.fromBufferAttribute(i,R),h.fromBufferAttribute(i,b),u.fromBufferAttribute(s,x),p.fromBufferAttribute(s,R),g.fromBufferAttribute(s,b),f.sub(c),h.sub(c),p.sub(u),g.sub(u);const N=1/(p.x*g.y-g.x*p.y);isFinite(N)&&(M.copy(f).multiplyScalar(g.y).addScaledVector(h,-p.y).multiplyScalar(N),m.copy(h).multiplyScalar(p.x).addScaledVector(f,-g.x).multiplyScalar(N),a[x].add(M),a[R].add(M),a[b].add(M),l[x].add(m),l[R].add(m),l[b].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let x=0,R=v.length;x<R;++x){const b=v[x],N=b.start,X=b.count;for(let L=N,D=N+X;L<D;L+=3)d(e.getX(L+0),e.getX(L+1),e.getX(L+2))}const S=new F,y=new F,w=new F,T=new F;function C(x){w.fromBufferAttribute(r,x),T.copy(w);const R=a[x];S.copy(R),S.sub(w.multiplyScalar(w.dot(R))).normalize(),y.crossVectors(T,R);const N=y.dot(l[x])<0?-1:1;o.setXYZW(x,S.x,S.y,S.z,N)}for(let x=0,R=v.length;x<R;++x){const b=v[x],N=b.start,X=b.count;for(let L=N,D=N+X;L<D;L+=3)C(e.getX(L+0)),C(e.getX(L+1)),C(e.getX(L+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==n.count)i=new ei(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let u=0,p=i.count;u<p;u++)i.setXYZ(u,0,0,0);const r=new F,s=new F,o=new F,a=new F,l=new F,c=new F,f=new F,h=new F;if(e)for(let u=0,p=e.count;u<p;u+=3){const g=e.getX(u+0),M=e.getX(u+1),m=e.getX(u+2);r.fromBufferAttribute(n,g),s.fromBufferAttribute(n,M),o.fromBufferAttribute(n,m),f.subVectors(o,s),h.subVectors(r,s),f.cross(h),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,M),c.fromBufferAttribute(i,m),a.add(f),l.add(f),c.add(f),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(M,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,p=n.count;u<p;u+=3)r.fromBufferAttribute(n,u+0),s.fromBufferAttribute(n,u+1),o.fromBufferAttribute(n,u+2),f.subVectors(o,s),h.subVectors(r,s),f.cross(h),i.setXYZ(u+0,f.x,f.y,f.z),i.setXYZ(u+1,f.x,f.y,f.z),i.setXYZ(u+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Kt.fromBufferAttribute(e,n),Kt.normalize(),e.setXYZ(n,Kt.x,Kt.y,Kt.z)}toNonIndexed(){function e(a,l){const c=a.array,f=a.itemSize,h=a.normalized,u=new c.constructor(l.length*f);let p=0,g=0;for(let M=0,m=l.length;M<m;M++){a.isInterleavedBufferAttribute?p=l[M]*a.data.stride+a.offset:p=l[M]*f;for(let d=0;d<f;d++)u[g++]=c[p++]}return new ei(u,f,h)}if(this.index===null)return et("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new $n,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let f=0,h=c.length;f<h;f++){const u=c[f],p=e(u,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],f=[];for(let h=0,u=c.length;h<u;h++){const p=c[h];f.push(p.toJSON(e.data))}f.length>0&&(r[l]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const f=r[c];this.setAttribute(c,f.clone(n))}const s=e.morphAttributes;for(const c in s){const f=[],h=s[c];for(let u=0,p=h.length;u<p;u++)f.push(h[u].clone(n));this.morphAttributes[c]=f}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,f=o.length;c<f;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const uf=new F,H1=new F,G1=new nt;class xr{constructor(e=new F(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=uf.subVectors(i,n).cross(H1.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,i=!0){const r=e.delta(uf),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(o<0||o>1)?null:n.copy(e.start).addScaledVector(r,o)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||G1.getNormalMatrix(e),r=this.coplanarPoint(uf).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let W1=0;class Ha extends _s{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:W1++}),this.uuid=So(),this.name="",this.type="Material",this.blending=ra,this.side=us,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Q_,this.blendDst=ex,this.blendEquation=Fs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new at(0,0,0),this.blendAlpha=0,this.depthFunc=Ca,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=h1,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Gu,this.stencilZFail=Gu,this.stencilZPass=Gu,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){et(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){et(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}fromJSON(e,n){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new at().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new xr().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=n[e.map]||null),e.matcap!==void 0&&(this.matcap=n[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=n[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=n[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=n[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new De().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=n[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=n[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=n[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=n[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=n[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=n[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=n[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=n[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=n[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=n[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=n[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new De().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=n[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=n[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=n[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=n[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=n[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Xi=new F,ff=new F,Ml=new F,El=new F;class Mx{constructor(e=new F,n=new F(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Xi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Xi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Xi.copy(this.origin).addScaledVector(this.direction,n),Xi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){ff.copy(e).add(n).multiplyScalar(.5),Ml.copy(n).sub(e).normalize(),El.copy(this.origin).sub(ff);const s=e.distanceTo(n)*.5,o=-this.direction.dot(Ml),a=El.dot(this.direction),l=-El.dot(Ml),c=El.lengthSq(),f=Math.abs(1-o*o);let h,u,p,g;if(f>0)if(h=o*l-a,u=o*a-l,g=s*f,h>=0)if(u>=-g)if(u<=g){const M=1/f;h*=M,u*=M,p=h*(h+o*u+2*a)+u*(o*h+u+2*l)+c}else u=s,h=Math.max(0,-(o*u+a)),p=-h*h+u*(u+2*l)+c;else u=-s,h=Math.max(0,-(o*u+a)),p=-h*h+u*(u+2*l)+c;else u<=-g?(h=Math.max(0,-(-o*s+a)),u=h>0?-s:Math.min(Math.max(-s,-l),s),p=-h*h+u*(u+2*l)+c):u<=g?(h=0,u=Math.min(Math.max(-s,-l),s),p=u*(u+2*l)+c):(h=Math.max(0,-(o*s+a)),u=h>0?s:Math.min(Math.max(-s,-l),s),p=-h*h+u*(u+2*l)+c);else u=o>0?-s:s,h=Math.max(0,-(o*u+a)),p=-h*h+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(ff).addScaledVector(Ml,u),p}intersectSphere(e,n){if(e.radius<0)return null;Xi.subVectors(e.center,this.origin);const i=Xi.dot(this.direction),r=Xi.dot(Xi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,f=1/this.direction.y,h=1/this.direction.z,u=this.origin;return c>=0?(i=(e.min.x-u.x)*c,r=(e.max.x-u.x)*c):(i=(e.max.x-u.x)*c,r=(e.min.x-u.x)*c),f>=0?(s=(e.min.y-u.y)*f,o=(e.max.y-u.y)*f):(s=(e.max.y-u.y)*f,o=(e.min.y-u.y)*f),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-u.z)*h,l=(e.max.z-u.z)*h):(a=(e.max.z-u.z)*h,l=(e.min.z-u.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Xi)!==null}intersectTriangle(e,n,i,r,s){const o=this.origin,a=this.direction,l=a.x,c=a.y,f=a.z,h=e.x-o.x,u=e.y-o.y,p=e.z-o.z,g=n.x-o.x,M=n.y-o.y,m=n.z-o.z,d=i.x-o.x,v=i.y-o.y,S=i.z-o.z,y=Math.abs(l),w=Math.abs(c),T=Math.abs(f);let C,x,R,b,N,X,L,D,I,q,W,V;if(y>=w&&y>=T?(R=l,X=h,I=g,V=d,l>=0?(C=c,x=f,b=u,N=p,L=M,D=m,q=v,W=S):(C=f,x=c,b=p,N=u,L=m,D=M,q=S,W=v)):w>=T?(R=c,X=u,I=M,V=v,c>=0?(C=f,x=l,b=p,N=h,L=m,D=g,q=S,W=d):(C=l,x=f,b=h,N=p,L=g,D=m,q=d,W=S)):(R=f,X=p,I=m,V=S,f>=0?(C=l,x=c,b=h,N=u,L=g,D=M,q=d,W=v):(C=c,x=l,b=u,N=h,L=M,D=g,q=v,W=d)),R===0)return null;const O=C/R,G=x/R,ee=1/R,Se=b-O*X,Le=N-G*X,Ye=L-O*I,qe=D-G*I,$e=q-O*V,U=W-G*V,$=$e*qe-U*Ye,se=Se*U-Le*$e,Ce=Ye*Le-qe*Se;if(r){if($<0||se<0||Ce<0)return null}else if(($<0||se<0||Ce<0)&&($>0||se>0||Ce>0))return null;const Re=$+se+Ce;if(Re===0)return null;const Oe=ee*($*X+se*I+Ce*V);return(Re>0?Oe<0:Oe>0)?null:this.at(Oe/Re,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Rp extends Ha{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new at(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zr,this.combine=tx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Cg=new Tt,qr=new Mx,wl=new Cp,Rg=new F,Tl=new F,Al=new F,Cl=new F,df=new F,Rl=new F,bg=new F,bl=new F;class en extends gn{constructor(e=new $n,n=new Rp){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Rl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const f=a[l],h=s[l];f!==0&&(df.fromBufferAttribute(h,e),o?Rl.addScaledVector(df,f):Rl.addScaledVector(df.sub(n),f))}n.add(Rl)}return n}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),wl.copy(i.boundingSphere),wl.applyMatrix4(s),qr.copy(e.ray).recast(e.near),!(wl.containsPoint(qr.origin)===!1&&(qr.intersectSphere(wl,Rg)===null||qr.origin.distanceToSquared(Rg)>(e.far-e.near)**2))&&(Cg.copy(s).invert(),qr.copy(e.ray).applyMatrix4(Cg),!(i.boundingBox!==null&&qr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,qr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,f=s.attributes.uv1,h=s.attributes.normal,u=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,M=u.length;g<M;g++){const m=u[g],d=o[m.materialIndex],v=Math.max(m.start,p.start),S=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let y=v,w=S;y<w;y+=3){const T=a.getX(y),C=a.getX(y+1),x=a.getX(y+2);r=Pl(this,d,e,i,c,f,h,T,C,x),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,p.start),M=Math.min(a.count,p.start+p.count);for(let m=g,d=M;m<d;m+=3){const v=a.getX(m),S=a.getX(m+1),y=a.getX(m+2);r=Pl(this,o,e,i,c,f,h,v,S,y),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,M=u.length;g<M;g++){const m=u[g],d=o[m.materialIndex],v=Math.max(m.start,p.start),S=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=v,w=S;y<w;y+=3){const T=y,C=y+1,x=y+2;r=Pl(this,d,e,i,c,f,h,T,C,x),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,p.start),M=Math.min(l.count,p.start+p.count);for(let m=g,d=M;m<d;m+=3){const v=m,S=m+1,y=m+2;r=Pl(this,o,e,i,c,f,h,v,S,y),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function X1(t,e,n,i,r,s,o,a){let l;if(e.side===Dn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===us,a),l===null)return null;bl.copy(a),bl.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(bl);return c<n.near||c>n.far?null:{distance:c,point:bl.clone(),object:t}}function Pl(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,Tl),t.getVertexPosition(l,Al),t.getVertexPosition(c,Cl);const f=X1(t,e,n,i,Tl,Al,Cl,bg);if(f){const h=new F;hi.getBarycoord(bg,Tl,Al,Cl,h),r&&(f.uv=hi.getInterpolatedAttribute(r,a,l,c,h,new De)),s&&(f.uv1=hi.getInterpolatedAttribute(s,a,l,c,h,new De)),o&&(f.normal=hi.getInterpolatedAttribute(o,a,l,c,h,new F),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const u={a,b:l,c,normal:new F,materialIndex:0};hi.getNormal(Tl,Al,Cl,u.normal),f.face=u,f.barycoord=h}return f}class Ex extends mn{constructor(e=null,n=1,i=1,r,s,o,a,l,c=tn,f=tn,h,u){super(null,o,a,l,c,f,r,s,h,u),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Kr=new Cp,$1=new De(.5,.5),Ll=new F;class bp{constructor(e=new xr,n=new xr,i=new xr,r=new xr,s=new xr,o=new xr){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=bi,i=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],f=s[4],h=s[5],u=s[6],p=s[7],g=s[8],M=s[9],m=s[10],d=s[11],v=s[12],S=s[13],y=s[14],w=s[15];if(r[0].setComponents(c-o,p-f,d-g,w-v).normalize(),r[1].setComponents(c+o,p+f,d+g,w+v).normalize(),r[2].setComponents(c+a,p+h,d+M,w+S).normalize(),r[3].setComponents(c-a,p-h,d-M,w-S).normalize(),i)r[4].setComponents(l,u,m,y).normalize(),r[5].setComponents(c-l,p-u,d-m,w-y).normalize();else if(r[4].setComponents(c-l,p-u,d-m,w-y).normalize(),n===bi)r[5].setComponents(c+l,p+u,d+m,w+y).normalize();else if(n===Pa)r[5].setComponents(l,u,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Kr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Kr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Kr)}intersectsSprite(e){Kr.center.set(0,0,0);const n=$1.distanceTo(e.center);return Kr.radius=.7071067811865476+n,Kr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Kr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Ll.x=r.normal.x>0?e.max.x:e.min.x,Ll.y=r.normal.y>0?e.max.y:e.min.y,Ll.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ll)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class wx extends mn{constructor(e=[],n=fs,i,r,s,o,a,l,c,f){super(e,n,i,r,s,o,a,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ch extends mn{constructor(e,n,i,r,s,o,a,l,c){super(e,n,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class La extends mn{constructor(e,n,i=Di,r,s,o,a=tn,l=tn,c,f=sr,h=1){if(f!==sr&&f!==ns)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:n,depth:h};super(u,r,s,o,a,l,f,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Tp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return n.compareFunction=this.compareFunction,n}}class Y1 extends La{constructor(e,n=Di,i=fs,r,s,o=tn,a=tn,l,c=sr){const f={width:e,height:e,depth:1},h=[f,f,f,f,f,f];super(e,e,n,i,r,s,o,a,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Tx extends mn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ga extends $n{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],f=[],h=[];let u=0,p=0;g("z","y","x",-1,-1,i,n,e,o,s,0),g("z","y","x",1,-1,i,n,-e,o,s,1),g("x","z","y",1,1,e,i,n,r,o,2),g("x","z","y",1,-1,e,i,-n,r,o,3),g("x","y","z",1,-1,e,n,i,r,s,4),g("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new sn(c,3)),this.setAttribute("normal",new sn(f,3)),this.setAttribute("uv",new sn(h,2));function g(M,m,d,v,S,y,w,T,C,x,R){const b=y/C,N=w/x,X=y/2,L=w/2,D=T/2,I=C+1,q=x+1;let W=0,V=0;const O=new F;for(let G=0;G<q;G++){const ee=G*N-L;for(let Se=0;Se<I;Se++){const Le=Se*b-X;O[M]=Le*v,O[m]=ee*S,O[d]=D,c.push(O.x,O.y,O.z),O[M]=0,O[m]=0,O[d]=T>0?1:-1,f.push(O.x,O.y,O.z),h.push(Se/C),h.push(1-G/x),W+=1}}for(let G=0;G<x;G++)for(let ee=0;ee<C;ee++){const Se=u+ee+I*G,Le=u+ee+I*(G+1),Ye=u+(ee+1)+I*(G+1),qe=u+(ee+1)+I*G;l.push(Se,Le,qe),l.push(Le,Ye,qe),V+=6}a.addGroup(p,V,R),p+=V,u+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ga(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Oi{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){et("Curve: .getPoint() not implemented.")}getPointAt(e,n){const i=this.getUtoTmapping(e);return this.getPoint(i,n)}getPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return n}getSpacedPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPointAt(i/e));return n}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let i,r=this.getPoint(0),s=0;n.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),n.push(s),r=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,n=null){const i=this.getLengths();let r=0;const s=i.length;let o;n?o=n:o=e*i[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=i[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);const f=i[r],u=i[r+1]-f,p=(o-f)/u;return(r+p)/(s-1)}getTangent(e,n){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=n||(o.isVector2?new De:new F);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,n){const i=this.getUtoTmapping(e);return this.getTangent(i,n)}computeFrenetFrames(e,n=!1){const i=new F,r=[],s=[],o=[],a=new F,l=new Tt;for(let p=0;p<=e;p++){const g=p/e;r[p]=this.getTangentAt(g,new F)}s[0]=new F,o[0]=new F;let c=Number.MAX_VALUE;const f=Math.abs(r[0].x),h=Math.abs(r[0].y),u=Math.abs(r[0].z);f<=c&&(c=f,i.set(1,0,0)),h<=c&&(c=h,i.set(0,1,0)),u<=c&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(r[p-1],r[p]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(lt(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(a,g))}o[p].crossVectors(r[p],s[p])}if(n===!0){let p=Math.acos(lt(s[0].dot(s[e]),-1,1));p/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(p=-p);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(r[g],p*g)),o[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Pp extends Oi{constructor(e=0,n=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=n,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,n=new De){const i=n,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const f=Math.cos(this.aRotation),h=Math.sin(this.aRotation),u=l-this.aX,p=c-this.aY;l=u*f-p*h+this.aX,c=u*h+p*f+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class q1 extends Pp{constructor(e,n,i,r,s,o){super(e,n,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Lp(){let t=0,e=0,n=0,i=0;function r(s,o,a,l){t=s,e=a,n=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,f,h){let u=(o-s)/c-(a-s)/(c+f)+(a-o)/f,p=(a-o)/f-(l-o)/(f+h)+(l-a)/h;u*=f,p*=f,r(o,a,u,p)},calc:function(s){const o=s*s,a=o*s;return t+e*s+n*o+i*a}}}const Pg=new F,Lg=new F,hf=new Lp,pf=new Lp,mf=new Lp;class Ax extends Oi{constructor(e=[],n=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=n,this.curveType=i,this.tension=r}getPoint(e,n=new F){const i=n,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,f;this.closed||a>0?c=r[(a-1)%s]:(Lg.subVectors(r[0],r[1]).add(r[0]),c=Lg);const h=r[a%s],u=r[(a+1)%s];if(this.closed||a+2<s?f=r[(a+2)%s]:(Pg.subVectors(r[s-1],r[s-2]).add(r[s-1]),f=Pg),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(h),p),M=Math.pow(h.distanceToSquared(u),p),m=Math.pow(u.distanceToSquared(f),p);M<1e-4&&(M=1),g<1e-4&&(g=M),m<1e-4&&(m=M),hf.initNonuniformCatmullRom(c.x,h.x,u.x,f.x,g,M,m),pf.initNonuniformCatmullRom(c.y,h.y,u.y,f.y,g,M,m),mf.initNonuniformCatmullRom(c.z,h.z,u.z,f.z,g,M,m)}else this.curveType==="catmullrom"&&(hf.initCatmullRom(c.x,h.x,u.x,f.x,this.tension),pf.initCatmullRom(c.y,h.y,u.y,f.y,this.tension),mf.initCatmullRom(c.z,h.z,u.z,f.z,this.tension));return i.set(hf.calc(l),pf.calc(l),mf.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new F().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Ng(t,e,n,i,r){const s=(i-e)*.5,o=(r-n)*.5,a=t*t,l=t*a;return(2*n-2*i+s+o)*l+(-3*n+3*i-2*s-o)*a+s*t+n}function K1(t,e){const n=1-t;return n*n*e}function Z1(t,e){return 2*(1-t)*t*e}function j1(t,e){return t*t*e}function sa(t,e,n,i){return K1(t,e)+Z1(t,n)+j1(t,i)}function J1(t,e){const n=1-t;return n*n*n*e}function Q1(t,e){const n=1-t;return 3*n*n*t*e}function ew(t,e){return 3*(1-t)*t*t*e}function tw(t,e){return t*t*t*e}function oa(t,e,n,i,r){return J1(t,e)+Q1(t,n)+ew(t,i)+tw(t,r)}class Cx extends Oi{constructor(e=new De,n=new De,i=new De,r=new De){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new De){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(oa(e,r.x,s.x,o.x,a.x),oa(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class nw extends Oi{constructor(e=new F,n=new F,i=new F,r=new F){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new F){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(oa(e,r.x,s.x,o.x,a.x),oa(e,r.y,s.y,o.y,a.y),oa(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Rx extends Oi{constructor(e=new De,n=new De){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=n}getPoint(e,n=new De){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new De){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class iw extends Oi{constructor(e=new F,n=new F){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=n}getPoint(e,n=new F){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new F){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class bx extends Oi{constructor(e=new De,n=new De,i=new De){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new De){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(sa(e,r.x,s.x,o.x),sa(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class rw extends Oi{constructor(e=new F,n=new F,i=new F){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new F){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(sa(e,r.x,s.x,o.x),sa(e,r.y,s.y,o.y),sa(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Px extends Oi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,n=new De){const i=n,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],f=r[o>r.length-2?r.length-1:o+1],h=r[o>r.length-3?r.length-1:o+2];return i.set(Ng(a,l.x,c.x,f.x,h.x),Ng(a,l.y,c.y,f.y,h.y)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new De().fromArray(r))}return this}}var uh=Object.freeze({__proto__:null,ArcCurve:q1,CatmullRomCurve3:Ax,CubicBezierCurve:Cx,CubicBezierCurve3:nw,EllipseCurve:Pp,LineCurve:Rx,LineCurve3:iw,QuadraticBezierCurve:bx,QuadraticBezierCurve3:rw,SplineCurve:Px});class sw extends Oi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),n=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(n)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new uh[i](n,e))}return this}getPoint(e,n){const i=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=i){const o=r[s]-i,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,n)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let n=0;for(let i=0,r=this.curves.length;i<r;i++)n+=this.curves[i].getLength(),e.push(n);return this.cacheLengths=e,e}getSpacedPoints(e=40){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return this.autoClose&&n.push(n[0]),n}getPoints(e=12){const n=[];let i;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const f=l[c];i&&i.equals(f)||(n.push(f),i=f)}}return this.autoClose&&n.length>1&&!n[n.length-1].equals(n[0])&&n.push(n[0]),n}copy(e){super.copy(e),this.curves=[];for(let n=0,i=e.curves.length;n<i;n++){const r=e.curves[n];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let n=0,i=this.curves.length;n<i;n++){const r=this.curves[n];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let n=0,i=e.curves.length;n<i;n++){const r=e.curves[n];this.curves.push(new uh[r.type]().fromJSON(r))}return this}}class fh extends sw{constructor(e){super(),this.type="Path",this.currentPoint=new De,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let n=1,i=e.length;n<i;n++)this.lineTo(e[n].x,e[n].y);return this}moveTo(e,n){return this.currentPoint.set(e,n),this}lineTo(e,n){const i=new Rx(this.currentPoint.clone(),new De(e,n));return this.curves.push(i),this.currentPoint.set(e,n),this}quadraticCurveTo(e,n,i,r){const s=new bx(this.currentPoint.clone(),new De(e,n),new De(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,n,i,r,s,o){const a=new Cx(this.currentPoint.clone(),new De(e,n),new De(i,r),new De(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const n=[this.currentPoint.clone()].concat(e),i=new Px(n);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,n,i,r,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,n+l,i,r,s,o),this}absarc(e,n,i,r,s,o){return this.absellipse(e,n,i,i,r,s,o),this}ellipse(e,n,i,r,s,o,a,l){const c=this.currentPoint.x,f=this.currentPoint.y;return this.absellipse(e+c,n+f,i,r,s,o,a,l),this}absellipse(e,n,i,r,s,o,a,l){const c=new Pp(e,n,i,r,s,o,a,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const f=c.getPoint(1);return this.currentPoint.copy(f),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class au extends fh{constructor(e){super(e),this.uuid=So(),this.type="Shape",this.holes=[]}getPointsHoles(e){const n=[];for(let i=0,r=this.holes.length;i<r;i++)n[i]=this.holes[i].getPoints(e);return n}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let n=0,i=e.holes.length;n<i;n++){const r=e.holes[n];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let n=0,i=this.holes.length;n<i;n++){const r=this.holes[n];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let n=0,i=e.holes.length;n<i;n++){const r=e.holes[n];this.holes.push(new fh().fromJSON(r))}return this}}function ow(t,e,n=2){const i=e&&e.length,r=i?e[0]*n:t.length;let s=Lx(t,0,r,n,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,c;if(i&&(s=fw(t,e,s,n)),t.length>80*n){a=t[0],l=t[1];let f=a,h=l;for(let u=n;u<r;u+=n){const p=t[u],g=t[u+1];p<a&&(a=p),g<l&&(l=g),p>f&&(f=p),g>h&&(h=g)}c=Math.max(f-a,h-l),c=c!==0?32767/c:0}return Na(s,o,n,a,l,c,0),o}function Lx(t,e,n,i,r){let s;if(r===Mw(t,e,n,i)>0)for(let o=e;o<n;o+=i)s=Dg(o/i|0,t[o],t[o+1],s);else for(let o=n-i;o>=e;o-=i)s=Dg(o/i|0,t[o],t[o+1],s);return s&&po(s,s.next)&&(Ia(s),s=s.next),s}function hs(t,e){if(!t)return t;e||(e=t);let n=t,i;do if(i=!1,!n.steiner&&(po(n,n.next)||Pt(n.prev,n,n.next)===0)){if(Ia(n),n=e=n.prev,n===n.next)break;i=!0}else n=n.next;while(i||n!==e);return e}function Na(t,e,n,i,r,s,o){if(!t)return;!o&&s&&gw(t,i,r,s);let a=t;for(;t.prev!==t.next;){const l=t.prev,c=t.next;if(s?lw(t,i,r,s):aw(t)){e.push(l.i,t.i,c.i),Ia(t),t=c.next,a=c.next;continue}if(t=c,t===a){o?o===1?(t=cw(hs(t),e),Na(t,e,n,i,r,s,2)):o===2&&uw(t,e,n,i,r,s):Na(hs(t),e,n,i,r,s,1);break}}}function aw(t){const e=t.prev,n=t,i=t.next;if(Pt(e,n,i)>=0)return!1;const r=e.x,s=n.x,o=i.x,a=e.y,l=n.y,c=i.y,f=Math.min(r,s,o),h=Math.min(a,l,c),u=Math.max(r,s,o),p=Math.max(a,l,c);let g=i.next;for(;g!==e;){if(g.x>=f&&g.x<=u&&g.y>=h&&g.y<=p&&$o(r,a,s,l,o,c,g.x,g.y)&&Pt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function lw(t,e,n,i){const r=t.prev,s=t,o=t.next;if(Pt(r,s,o)>=0)return!1;const a=r.x,l=s.x,c=o.x,f=r.y,h=s.y,u=o.y,p=Math.min(a,l,c),g=Math.min(f,h,u),M=Math.max(a,l,c),m=Math.max(f,h,u),d=dh(p,g,e,n,i),v=dh(M,m,e,n,i);let S=t.prevZ,y=t.nextZ;for(;S&&S.z>=d&&y&&y.z<=v;){if(S.x>=p&&S.x<=M&&S.y>=g&&S.y<=m&&S!==r&&S!==o&&$o(a,f,l,h,c,u,S.x,S.y)&&Pt(S.prev,S,S.next)>=0||(S=S.prevZ,y.x>=p&&y.x<=M&&y.y>=g&&y.y<=m&&y!==r&&y!==o&&$o(a,f,l,h,c,u,y.x,y.y)&&Pt(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;S&&S.z>=d;){if(S.x>=p&&S.x<=M&&S.y>=g&&S.y<=m&&S!==r&&S!==o&&$o(a,f,l,h,c,u,S.x,S.y)&&Pt(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;y&&y.z<=v;){if(y.x>=p&&y.x<=M&&y.y>=g&&y.y<=m&&y!==r&&y!==o&&$o(a,f,l,h,c,u,y.x,y.y)&&Pt(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function cw(t,e){let n=t;do{const i=n.prev,r=n.next.next;!po(i,r)&&Dx(i,n,n.next,r)&&Da(i,r)&&Da(r,i)&&(e.push(i.i,n.i,r.i),Ia(n),Ia(n.next),n=t=r),n=n.next}while(n!==t);return hs(n)}function uw(t,e,n,i,r,s){let o=t;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&xw(o,a)){let l=Ix(o,a);o=hs(o,o.next),l=hs(l,l.next),Na(o,e,n,i,r,s,0),Na(l,e,n,i,r,s,0);return}a=a.next}o=o.next}while(o!==t)}function fw(t,e,n,i){const r=[];for(let s=0,o=e.length;s<o;s++){const a=e[s]*i,l=s<o-1?e[s+1]*i:t.length,c=Lx(t,a,l,i,!1);c===c.next&&(c.steiner=!0),r.push(_w(c))}r.sort(dw);for(let s=0;s<r.length;s++)n=hw(r[s],n);return n}function dw(t,e){let n=t.x-e.x;if(n===0&&(n=t.y-e.y,n===0)){const i=(t.next.y-t.y)/(t.next.x-t.x),r=(e.next.y-e.y)/(e.next.x-e.x);n=i-r}return n}function hw(t,e){const n=pw(t,e);if(!n)return e;const i=Ix(n,t);return hs(i,i.next),hs(n,n.next)}function pw(t,e){let n=e;const i=t.x,r=t.y;let s=-1/0,o;if(po(t,n))return n;do{if(po(t,n.next))return n.next;if(r<=n.y&&r>=n.next.y&&n.next.y!==n.y){const h=n.x+(r-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(h<=i&&h>s&&(s=h,o=n.x<n.next.x?n:n.next,h===i))return o}n=n.next}while(n!==e);if(!o)return null;const a=o,l=o.x,c=o.y;let f=1/0;n=o;do{if(i>=n.x&&n.x>=l&&i!==n.x&&Nx(r<c?i:s,r,l,c,r<c?s:i,r,n.x,n.y)){const h=Math.abs(r-n.y)/(i-n.x);Da(n,t)&&(h<f||h===f&&(n.x>o.x||n.x===o.x&&mw(o,n)))&&(o=n,f=h)}n=n.next}while(n!==a);return o}function mw(t,e){return Pt(t.prev,t,e.prev)<0&&Pt(e.next,t,t.next)<0}function gw(t,e,n,i){let r=t;do r.z===0&&(r.z=dh(r.x,r.y,e,n,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==t);r.prevZ.nextZ=null,r.prevZ=null,vw(r)}function vw(t){let e,n=1;do{let i=t,r;t=null;let s=null;for(e=0;i;){e++;let o=i,a=0;for(let c=0;c<n&&(a++,o=o.nextZ,!!o);c++);let l=n;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||i.z<=o.z)?(r=i,i=i.nextZ,a--):(r=o,o=o.nextZ,l--),s?s.nextZ=r:t=r,r.prevZ=s,s=r;i=o}s.nextZ=null,n*=2}while(e>1);return t}function dh(t,e,n,i,r){return t=(t-n)*r|0,e=(e-i)*r|0,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t|e<<1}function _w(t){let e=t,n=t;do(e.x<n.x||e.x===n.x&&e.y<n.y)&&(n=e),e=e.next;while(e!==t);return n}function Nx(t,e,n,i,r,s,o,a){return(r-o)*(e-a)>=(t-o)*(s-a)&&(t-o)*(i-a)>=(n-o)*(e-a)&&(n-o)*(s-a)>=(r-o)*(i-a)}function $o(t,e,n,i,r,s,o,a){return!(t===o&&e===a)&&Nx(t,e,n,i,r,s,o,a)}function xw(t,e){return t.next.i!==e.i&&t.prev.i!==e.i&&!yw(t,e)&&(Da(t,e)&&Da(e,t)&&Sw(t,e)&&(Pt(t.prev,t,e.prev)||Pt(t,e.prev,e))||po(t,e)&&Pt(t.prev,t,t.next)>0&&Pt(e.prev,e,e.next)>0)}function Pt(t,e,n){return(e.y-t.y)*(n.x-e.x)-(e.x-t.x)*(n.y-e.y)}function po(t,e){return t.x===e.x&&t.y===e.y}function Dx(t,e,n,i){const r=Dl(Pt(t,e,n)),s=Dl(Pt(t,e,i)),o=Dl(Pt(n,i,t)),a=Dl(Pt(n,i,e));return!!(r!==s&&o!==a||r===0&&Nl(t,n,e)||s===0&&Nl(t,i,e)||o===0&&Nl(n,t,i)||a===0&&Nl(n,e,i))}function Nl(t,e,n){return e.x<=Math.max(t.x,n.x)&&e.x>=Math.min(t.x,n.x)&&e.y<=Math.max(t.y,n.y)&&e.y>=Math.min(t.y,n.y)}function Dl(t){return t>0?1:t<0?-1:0}function yw(t,e){let n=t;do{if(n.i!==t.i&&n.next.i!==t.i&&n.i!==e.i&&n.next.i!==e.i&&Dx(n,n.next,t,e))return!0;n=n.next}while(n!==t);return!1}function Da(t,e){return Pt(t.prev,t,t.next)<0?Pt(t,e,t.next)>=0&&Pt(t,t.prev,e)>=0:Pt(t,e,t.prev)<0||Pt(t,t.next,e)<0}function Sw(t,e){let n=t,i=!1;const r=(t.x+e.x)/2,s=(t.y+e.y)/2;do n.y>s!=n.next.y>s&&n.next.y!==n.y&&r<(n.next.x-n.x)*(s-n.y)/(n.next.y-n.y)+n.x&&(i=!i),n=n.next;while(n!==t);return i}function Ix(t,e){const n=hh(t.i,t.x,t.y),i=hh(e.i,e.x,e.y),r=t.next,s=e.prev;return t.next=e,e.prev=t,n.next=r,r.prev=n,i.next=n,n.prev=i,s.next=i,i.prev=s,i}function Dg(t,e,n,i){const r=hh(t,e,n);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function Ia(t){t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ)}function hh(t,e,n){return{i:t,x:e,y:n,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Mw(t,e,n,i){let r=0;for(let s=e,o=n-i;s<n;s+=i)r+=(t[o]-t[s])*(t[s+1]+t[o+1]),o=s;return r}class Ew{static triangulate(e,n,i=2){return ow(e,n,i)}}class ji{static area(e){const n=e.length;let i=0;for(let r=n-1,s=0;s<n;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return i*.5}static isClockWise(e){return ji.area(e)<0}static triangulateShape(e,n){const i=[],r=[],s=[];Ig(e),Ug(i,e);let o=e.length;n.forEach(Ig);for(let l=0;l<n.length;l++)r.push(o),o+=n[l].length,Ug(i,n[l]);const a=Ew.triangulate(i,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function Ig(t){const e=t.length;e>2&&t[e-1].equals(t[0])&&t.pop()}function Ug(t,e){for(let n=0;n<e.length;n++)t.push(e[n].x),t.push(e[n].y)}class lu extends $n{constructor(e=new au([new De(.5,.5),new De(-.5,.5),new De(-.5,-.5),new De(.5,-.5)]),n={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:n},e=Array.isArray(e)?e:[e];const i=this,r=[],s=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new sn(r,3)),this.setAttribute("uv",new sn(s,2)),this.computeVertexNormals();function o(a){const l=[],c=n.curveSegments!==void 0?n.curveSegments:12,f=n.steps!==void 0?n.steps:1,h=n.depth!==void 0?n.depth:1;let u=n.bevelEnabled!==void 0?n.bevelEnabled:!0,p=n.bevelThickness!==void 0?n.bevelThickness:.2,g=n.bevelSize!==void 0?n.bevelSize:p-.1,M=n.bevelOffset!==void 0?n.bevelOffset:0,m=n.bevelSegments!==void 0?n.bevelSegments:3;const d=n.extrudePath,v=n.UVGenerator!==void 0?n.UVGenerator:ww;let S,y=!1,w,T,C,x;if(d){S=d.getSpacedPoints(f),y=!0,u=!1;const ie=d.isCatmullRomCurve3?d.closed:!1;w=d.computeFrenetFrames(f,ie),T=new F,C=new F,x=new F}u||(m=0,p=0,g=0,M=0);const R=a.extractPoints(c);let b=R.shape;const N=R.holes;if(!ji.isClockWise(b)){b=b.reverse();for(let ie=0,he=N.length;ie<he;ie++){const ue=N[ie];ji.isClockWise(ue)&&(N[ie]=ue.reverse())}}function L(ie){const ue=10000000000000001e-36;let ce=ie[0];for(let _e=1;_e<=ie.length;_e++){const Q=_e%ie.length,fe=ie[Q],Ee=fe.x-ce.x,ve=fe.y-ce.y,P=Ee*Ee+ve*ve,Be=Math.max(Math.abs(fe.x),Math.abs(fe.y),Math.abs(ce.x),Math.abs(ce.y)),He=ue*Be*Be;if(P<=He){ie.splice(Q,1),_e--;continue}ce=fe}}L(b),N.forEach(L);const D=N.length,I=b;for(let ie=0;ie<D;ie++){const he=N[ie];b=b.concat(he)}function q(ie,he,ue){return he||dt("ExtrudeGeometry: vec does not exist"),ie.clone().addScaledVector(he,ue)}const W=b.length;function V(ie,he,ue){let ce,_e,Q;const fe=ie.x-he.x,Ee=ie.y-he.y,ve=ue.x-ie.x,P=ue.y-ie.y,Be=fe*fe+Ee*Ee,He=fe*P-Ee*ve;if(Math.abs(He)>Number.EPSILON){const A=Math.sqrt(Be),_=Math.sqrt(ve*ve+P*P),z=he.x-Ee/A,J=he.y+fe/A,H=ue.x-P/_,xe=ue.y+ve/_,Te=((H-z)*P-(xe-J)*ve)/(fe*P-Ee*ve);ce=z+fe*Te-ie.x,_e=J+Ee*Te-ie.y;const ne=ce*ce+_e*_e;if(ne<=2)return new De(ce,_e);Q=Math.sqrt(ne/2)}else{let A=!1;fe>Number.EPSILON?ve>Number.EPSILON&&(A=!0):fe<-Number.EPSILON?ve<-Number.EPSILON&&(A=!0):Math.sign(Ee)===Math.sign(P)&&(A=!0),A?(ce=-Ee,_e=fe,Q=Math.sqrt(Be)):(ce=fe,_e=Ee,Q=Math.sqrt(Be/2))}return new De(ce/Q,_e/Q)}const O=[];for(let ie=0,he=I.length,ue=he-1,ce=ie+1;ie<he;ie++,ue++,ce++)ue===he&&(ue=0),ce===he&&(ce=0),O[ie]=V(I[ie],I[ue],I[ce]);const G=[];let ee,Se=O.concat();for(let ie=0,he=D;ie<he;ie++){const ue=N[ie];ee=[];for(let ce=0,_e=ue.length,Q=_e-1,fe=ce+1;ce<_e;ce++,Q++,fe++)Q===_e&&(Q=0),fe===_e&&(fe=0),ee[ce]=V(ue[ce],ue[Q],ue[fe]);G.push(ee),Se=Se.concat(ee)}let Le;if(m===0)Le=ji.triangulateShape(I,N);else{const ie=[],he=[];for(let ue=0;ue<m;ue++){const ce=ue/m,_e=p*Math.cos(ce*Math.PI/2),Q=g*Math.sin(ce*Math.PI/2)+M;for(let fe=0,Ee=I.length;fe<Ee;fe++){const ve=q(I[fe],O[fe],Q);se(ve.x,ve.y,-_e),ce===0&&ie.push(ve)}for(let fe=0,Ee=D;fe<Ee;fe++){const ve=N[fe];ee=G[fe];const P=[];for(let Be=0,He=ve.length;Be<He;Be++){const A=q(ve[Be],ee[Be],Q);se(A.x,A.y,-_e),ce===0&&P.push(A)}ce===0&&he.push(P)}}Le=ji.triangulateShape(ie,he)}const Ye=Le.length,qe=g+M;for(let ie=0;ie<W;ie++){const he=u?q(b[ie],Se[ie],qe):b[ie];y?(C.copy(w.normals[0]).multiplyScalar(he.x),T.copy(w.binormals[0]).multiplyScalar(he.y),x.copy(S[0]).add(C).add(T),se(x.x,x.y,x.z)):se(he.x,he.y,0)}for(let ie=1;ie<=f;ie++)for(let he=0;he<W;he++){const ue=u?q(b[he],Se[he],qe):b[he];y?(C.copy(w.normals[ie]).multiplyScalar(ue.x),T.copy(w.binormals[ie]).multiplyScalar(ue.y),x.copy(S[ie]).add(C).add(T),se(x.x,x.y,x.z)):se(ue.x,ue.y,h/f*ie)}for(let ie=m-1;ie>=0;ie--){const he=ie/m,ue=p*Math.cos(he*Math.PI/2),ce=g*Math.sin(he*Math.PI/2)+M;for(let _e=0,Q=I.length;_e<Q;_e++){const fe=q(I[_e],O[_e],ce);se(fe.x,fe.y,h+ue)}for(let _e=0,Q=N.length;_e<Q;_e++){const fe=N[_e];ee=G[_e];for(let Ee=0,ve=fe.length;Ee<ve;Ee++){const P=q(fe[Ee],ee[Ee],ce);y?se(P.x,P.y+S[f-1].y,S[f-1].x+ue):se(P.x,P.y,h+ue)}}}$e(),U();function $e(){const ie=r.length/3;if(u){let he=0,ue=W*he;for(let ce=0;ce<Ye;ce++){const _e=Le[ce];Ce(_e[2]+ue,_e[1]+ue,_e[0]+ue)}he=f+m*2,ue=W*he;for(let ce=0;ce<Ye;ce++){const _e=Le[ce];Ce(_e[0]+ue,_e[1]+ue,_e[2]+ue)}}else{for(let he=0;he<Ye;he++){const ue=Le[he];Ce(ue[2],ue[1],ue[0])}for(let he=0;he<Ye;he++){const ue=Le[he];Ce(ue[0]+W*f,ue[1]+W*f,ue[2]+W*f)}}i.addGroup(ie,r.length/3-ie,0)}function U(){const ie=r.length/3;let he=0;$(I,he),he+=I.length;for(let ue=0,ce=N.length;ue<ce;ue++){const _e=N[ue];$(_e,he),he+=_e.length}i.addGroup(ie,r.length/3-ie,1)}function $(ie,he){let ue=ie.length;for(;--ue>=0;){const ce=ue;let _e=ue-1;_e<0&&(_e=ie.length-1);for(let Q=0,fe=f+m*2;Q<fe;Q++){const Ee=W*Q,ve=W*(Q+1),P=he+ce+Ee,Be=he+_e+Ee,He=he+_e+ve,A=he+ce+ve;Re(P,Be,He,A)}}}function se(ie,he,ue){l.push(ie),l.push(he),l.push(ue)}function Ce(ie,he,ue){Oe(ie),Oe(he),Oe(ue);const ce=r.length/3,_e=v.generateTopUV(i,r,ce-3,ce-2,ce-1);Ke(_e[0]),Ke(_e[1]),Ke(_e[2])}function Re(ie,he,ue,ce){Oe(ie),Oe(he),Oe(ce),Oe(he),Oe(ue),Oe(ce);const _e=r.length/3,Q=v.generateSideWallUV(i,r,_e-6,_e-3,_e-2,_e-1);Ke(Q[0]),Ke(Q[1]),Ke(Q[3]),Ke(Q[1]),Ke(Q[2]),Ke(Q[3])}function Oe(ie){r.push(l[ie*3+0]),r.push(l[ie*3+1]),r.push(l[ie*3+2])}function Ke(ie){s.push(ie.x),s.push(ie.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),n=this.parameters.shapes,i=this.parameters.options;return Tw(n,i,e)}static fromJSON(e,n){const i=[];for(let s=0,o=e.shapes.length;s<o;s++){const a=n[e.shapes[s]];i.push(a)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new uh[r.type]().fromJSON(r)),new lu(i,e.options)}}const ww={generateTopUV:function(t,e,n,i,r){const s=e[n*3],o=e[n*3+1],a=e[i*3],l=e[i*3+1],c=e[r*3],f=e[r*3+1];return[new De(s,o),new De(a,l),new De(c,f)]},generateSideWallUV:function(t,e,n,i,r,s){const o=e[n*3],a=e[n*3+1],l=e[n*3+2],c=e[i*3],f=e[i*3+1],h=e[i*3+2],u=e[r*3],p=e[r*3+1],g=e[r*3+2],M=e[s*3],m=e[s*3+1],d=e[s*3+2];return Math.abs(a-f)<Math.abs(o-c)?[new De(o,1-l),new De(c,1-h),new De(u,1-g),new De(M,1-d)]:[new De(a,1-l),new De(f,1-h),new De(p,1-g),new De(m,1-d)]}};function Tw(t,e,n){if(n.shapes=[],Array.isArray(t))for(let i=0,r=t.length;i<r;i++){const s=t[i];n.shapes.push(s.uuid)}else n.shapes.push(t.uuid);return n.options=Object.assign({},e),e.extrudePath!==void 0&&(n.options.extrudePath=e.extrudePath.toJSON()),n}class Wa extends $n{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,f=l+1,h=e/a,u=n/l,p=[],g=[],M=[],m=[];for(let d=0;d<f;d++){const v=d*u-o;for(let S=0;S<c;S++){const y=S*h-s;g.push(y,-v,0),M.push(0,0,1),m.push(S/a),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let v=0;v<a;v++){const S=v+c*d,y=v+c*(d+1),w=v+1+c*(d+1),T=v+1+c*d;p.push(S,y,T),p.push(y,w,T)}this.setIndex(p),this.setAttribute("position",new sn(g,3)),this.setAttribute("normal",new sn(M,3)),this.setAttribute("uv",new sn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wa(e.width,e.height,e.widthSegments,e.heightSegments)}}class Np extends $n{constructor(e=new au([new De(0,.5),new De(-.5,-.5),new De(.5,-.5)]),n=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:n};const i=[],r=[],s=[],o=[];let a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let f=0;f<e.length;f++)c(e[f]),this.addGroup(a,l,f),a+=l,l=0;this.setIndex(i),this.setAttribute("position",new sn(r,3)),this.setAttribute("normal",new sn(s,3)),this.setAttribute("uv",new sn(o,2));function c(f){const h=r.length/3,u=f.extractPoints(n);let p=u.shape;const g=u.holes;ji.isClockWise(p)===!1&&(p=p.reverse());for(let m=0,d=g.length;m<d;m++){const v=g[m];ji.isClockWise(v)===!0&&(g[m]=v.reverse())}const M=ji.triangulateShape(p,g);for(let m=0,d=g.length;m<d;m++){const v=g[m];p=p.concat(v)}for(let m=0,d=p.length;m<d;m++){const v=p[m];r.push(v.x,v.y,0),s.push(0,0,1),o.push(v.x,v.y)}for(let m=0,d=M.length;m<d;m++){const v=M[m],S=v[0]+h,y=v[1]+h,w=v[2]+h;i.push(S,y,w),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),n=this.parameters.shapes;return Aw(n,e)}static fromJSON(e,n){const i=[];for(let r=0,s=e.shapes.length;r<s;r++){const o=n[e.shapes[r]];i.push(o)}return new Np(i,e.curveSegments)}}function Aw(t,e){if(e.shapes=[],Array.isArray(t))for(let n=0,i=t.length;n<i;n++){const r=t[n];e.shapes.push(r.uuid)}else e.shapes.push(t.uuid);return e}class kc extends $n{constructor(e=1,n=.4,i=12,r=48,s=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:r,arc:s,thetaStart:o,thetaLength:a},i=Math.floor(i),r=Math.floor(r);const l=[],c=[],f=[],h=[],u=new F,p=new F,g=new F;for(let M=0;M<=i;M++){const m=o+M/i*a;for(let d=0;d<=r;d++){const v=d/r*s;p.x=(e+n*Math.cos(m))*Math.cos(v),p.y=(e+n*Math.cos(m))*Math.sin(v),p.z=n*Math.sin(m),c.push(p.x,p.y,p.z),u.x=e*Math.cos(v),u.y=e*Math.sin(v),g.subVectors(p,u).normalize(),f.push(g.x,g.y,g.z),h.push(d/r),h.push(M/i)}}for(let M=1;M<=i;M++)for(let m=1;m<=r;m++){const d=(r+1)*M+m-1,v=(r+1)*(M-1)+m-1,S=(r+1)*(M-1)+m,y=(r+1)*M+m;l.push(d,v,y),l.push(v,S,y)}this.setIndex(l),this.setAttribute("position",new sn(c,3)),this.setAttribute("normal",new sn(f,3)),this.setAttribute("uv",new sn(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new kc(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}function mo(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];if(Fg(r))r.isRenderTargetTexture?(et("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone();else if(Array.isArray(r))if(Fg(r[0])){const s=[];for(let o=0,a=r.length;o<a;o++)s[o]=r[o].clone();e[n][i]=s}else e[n][i]=r.slice();else e[n][i]=r}}return e}function yn(t){const e={};for(let n=0;n<t.length;n++){const i=mo(t[n]);for(const r in i)e[r]=i[r]}return e}function Fg(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function Cw(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Ux(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ut.workingColorSpace}const Rw={clone:mo,merge:yn};var bw=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Pw=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Fi extends Ha{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=bw,this.fragmentShader=Pw,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=mo(e.uniforms),this.uniformsGroups=Cw(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}fromJSON(e,n){if(super.fromJSON(e,n),e.uniforms!==void 0)for(const i in e.uniforms){const r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=n[r.value]||null;break;case"c":this.uniforms[i].value=new at().setHex(r.value);break;case"v2":this.uniforms[i].value=new De().fromArray(r.value);break;case"v3":this.uniforms[i].value=new F().fromArray(r.value);break;case"v4":this.uniforms[i].value=new bt().fromArray(r.value);break;case"m3":this.uniforms[i].value=new nt().fromArray(r.value);break;case"m4":this.uniforms[i].value=new Tt().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Lw extends Fi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Fx extends Ha{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new at(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new at(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ah,this.normalScale=new De(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Il extends Fx{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new De(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return lt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(n){this.ior=(1+.4*n)/(1-.4*n)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new at(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new at(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new at(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Nw extends Ha{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=f1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Dw extends Ha{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Iw extends gn{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new at(e),this.intensity=n}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}const gf=new Tt,Og=new F,kg=new F;class Uw{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new De(512,512),this.mapType=zn,this.map=null,this.mapPass=null,this.matrix=new Tt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new bp,this._frameExtents=new De(1,1),this._viewportCount=1,this._viewports=[new bt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera;Og.setFromMatrixPosition(e.matrixWorld),n.position.copy(Og),kg.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(kg),n.updateMatrixWorld(),this._updateMatrix(n,this.matrix,this._frustum)}_updateMatrix(e,n,i,r){gf.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(gf,e.coordinateSystem,e.reversedDepth);const s=this._frameExtents,o=r?r.z/s.x:1,a=r?r.w/s.y:1,l=r?r.x/s.x:0,c=r?r.y/s.y:0;e.coordinateSystem===Pa||e.reversedDepth?n.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):n.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),n.multiply(gf)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Ul=new F,Fl=new Ui,Mi=new F;class Ox extends gn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Tt,this.projectionMatrix=new Tt,this.projectionMatrixInverse=new Tt,this.coordinateSystem=bi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ul,Fl,Mi),Mi.x===1&&Mi.y===1&&Mi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ul,Fl,Mi.set(1,1,1)).invert()}updateWorldMatrix(e,n,i=!1){super.updateWorldMatrix(e,n,i),this.matrixWorld.decompose(Ul,Fl,Mi),Mi.x===1&&Mi.y===1&&Mi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ul,Fl,Mi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const mr=new F,Bg=new De,zg=new De;class jn extends Ox{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=lh*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Wu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return lh*2*Math.atan(Math.tan(Wu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){mr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(mr.x,mr.y).multiplyScalar(-e/mr.z),mr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(mr.x,mr.y).multiplyScalar(-e/mr.z)}getViewSize(e,n){return this.getViewBounds(e,Bg,zg),n.subVectors(zg,Bg)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Wu*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class Dp extends Ox{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=f*this.view.offsetY,l=a-f*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class Fw extends Uw{constructor(){super(new Dp(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Vg extends Iw{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(gn.DEFAULT_UP),this.updateMatrix(),this.target=new gn,this.shadow=new Fw}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}}const Ls=-90,Ns=1;class Ow extends gn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new jn(Ls,Ns,e,n);r.layers=this.layers,this.add(r);const s=new jn(Ls,Ns,e,n);s.layers=this.layers,this.add(s);const o=new jn(Ls,Ns,e,n);o.layers=this.layers,this.add(o);const a=new jn(Ls,Ns,e,n);a.layers=this.layers,this.add(a);const l=new jn(Ls,Ns,e,n);l.layers=this.layers,this.add(l);const c=new jn(Ls,Ns,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===bi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Pa)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,f]=this.children,h=e.getRenderTarget(),u=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const M=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,s),e.setRenderTarget(i,1,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,2,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,3,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,4,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),i.texture.generateMipmaps=M,e.setRenderTarget(i,5,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,f),e.setRenderTarget(h,u,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class kw extends jn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Hg=new Tt;class Bw{constructor(e,n,i=0,r=1/0){this.ray=new Mx(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new Ap,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,n.projectionMatrix.elements[14]).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):dt("Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return Hg.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Hg),this}intersectObject(e,n=!0,i=[]){return ph(e,this,i,n),i.sort(Gg),i}intersectObjects(e,n=!0,i=[]){for(let r=0,s=e.length;r<s;r++)ph(e[r],this,i,n);return i.sort(Gg),i}}function Gg(t,e){return t.distance-e.distance}function ph(t,e,n,i){let r=!0;if(t.layers.test(e.layers)&&t.raycast(e,n)===!1&&(r=!1),r===!0&&i===!0){const s=t.children;for(let o=0,a=s.length;o<a;o++)ph(s[o],e,n,!0)}}const Bp=class Bp{constructor(e,n,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let i=0;i<4;i++)this.elements[i]=e[i+n];return this}set(e,n,i,r){const s=this.elements;return s[0]=e,s[2]=n,s[1]=i,s[3]=r,this}};Bp.prototype.isMatrix2=!0;let Wg=Bp;function Xg(t,e,n,i){const r=zw(i);switch(n){case hx:return t*e;case mx:return t*e/r.components*r.byteLength;case yp:return t*e/r.components*r.byteLength;case ds:return t*e*2/r.components*r.byteLength;case Sp:return t*e*2/r.components*r.byteLength;case px:return t*e*3/r.components*r.byteLength;case pi:return t*e*4/r.components*r.byteLength;case Mp:return t*e*4/r.components*r.byteLength;case ec:case tc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case nc:case ic:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Nd:case Id:return Math.max(t,16)*Math.max(e,8)/4;case Ld:case Dd:return Math.max(t,8)*Math.max(e,8)/2;case Ud:case Fd:case kd:case Bd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Od:case Dc:case zd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Vd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Hd:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Gd:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Wd:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Xd:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case $d:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Yd:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case qd:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Kd:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Zd:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case jd:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Jd:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Qd:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case eh:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case th:case nh:case ih:return Math.ceil(t/4)*Math.ceil(e/4)*16;case rh:case sh:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Ic:case oh:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function zw(t){switch(t){case zn:case cx:return{byteLength:1,components:1};case Ra:case ux:case Ii:return{byteLength:2,components:1};case _p:case xp:return{byteLength:2,components:4};case Di:case vp:case Ri:return{byteLength:4,components:1};case fx:case dx:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:mp}}));typeof window<"u"&&(window.__THREE__?et("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=mp);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function kx(){let t=null,e=!1,n=null,i=null;function r(s,o){i=t.requestAnimationFrame(r),n(s,o)}return{start:function(){e!==!0&&n!==null&&t!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function Vw(t){const e=new WeakMap;function n(a,l){const c=a.array,f=a.usage,h=c.byteLength,u=t.createBuffer();t.bindBuffer(l,u),t.bufferData(l,c,f),a.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=t.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){const f=l.array,h=l.updateRanges;if(t.bindBuffer(c,a),h.length===0)t.bufferSubData(c,0,f);else{h.sort((p,g)=>p.start-g.start);let u=0;for(let p=1;p<h.length;p++){const g=h[u],M=h[p];M.start<=g.start+g.count+1?g.count=Math.max(g.count,M.start+M.count-g.start):(++u,h[u]=M)}h.length=u+1;for(let p=0,g=h.length;p<g;p++){const M=h[p];t.bufferSubData(c,M.start*f.BYTES_PER_ELEMENT,f,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const f=e.get(a);(!f||f.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var Hw=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Gw=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Ww=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Xw=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$w=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Yw=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,qw=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Kw=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Zw=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,jw=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Jw=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Qw=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,eT=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,tT=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,nT=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,iT=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,rT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,sT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,oT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,aT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,lT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,cT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,uT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,fT=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,dT=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,hT=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,pT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,mT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,gT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,vT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,_T="gl_FragColor = linearToOutputTexel( gl_FragColor );",xT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,yT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,ST=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,MT=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ET=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,wT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,TT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,AT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,CT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,RT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,bT=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,PT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,LT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,NT=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,DT=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,IT=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,UT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,FT=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,OT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,kT=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,BT=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,zT=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,VT=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,HT=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,GT=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,WT=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,XT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$T=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,YT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,KT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ZT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,jT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,JT=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,QT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,eA=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,tA=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,nA=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,iA=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rA=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,sA=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,oA=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,aA=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,lA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,uA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,fA=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,dA=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,hA=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,pA=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,mA=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,gA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,vA=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,_A=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,xA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,yA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,SA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,MA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,EA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,wA=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,TA=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,AA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,CA=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,RA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,bA=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,PA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,LA=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,NA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,DA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,IA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,UA=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,FA=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,OA=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,kA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,BA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,zA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,VA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const HA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,GA=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,WA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,XA=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$A=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,YA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,KA=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,ZA=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,jA=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,JA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,QA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eC=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,tC=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,nC=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,iC=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rC=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sC=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,oC=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,aC=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lC=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,cC=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,uC=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fC=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dC=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,hC=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pC=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mC=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gC=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,vC=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_C=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xC=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,yC=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,SC=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,st={alphahash_fragment:Hw,alphahash_pars_fragment:Gw,alphamap_fragment:Ww,alphamap_pars_fragment:Xw,alphatest_fragment:$w,alphatest_pars_fragment:Yw,aomap_fragment:qw,aomap_pars_fragment:Kw,batching_pars_vertex:Zw,batching_vertex:jw,begin_vertex:Jw,beginnormal_vertex:Qw,bsdfs:eT,iridescence_fragment:tT,bumpmap_pars_fragment:nT,clipping_planes_fragment:iT,clipping_planes_pars_fragment:rT,clipping_planes_pars_vertex:sT,clipping_planes_vertex:oT,color_fragment:aT,color_pars_fragment:lT,color_pars_vertex:cT,color_vertex:uT,common:fT,cube_uv_reflection_fragment:dT,defaultnormal_vertex:hT,displacementmap_pars_vertex:pT,displacementmap_vertex:mT,emissivemap_fragment:gT,emissivemap_pars_fragment:vT,colorspace_fragment:_T,colorspace_pars_fragment:xT,envmap_fragment:yT,envmap_common_pars_fragment:ST,envmap_pars_fragment:MT,envmap_pars_vertex:ET,envmap_physical_pars_fragment:IT,envmap_vertex:wT,fog_vertex:TT,fog_pars_vertex:AT,fog_fragment:CT,fog_pars_fragment:RT,gradientmap_pars_fragment:bT,lightmap_pars_fragment:PT,lights_lambert_fragment:LT,lights_lambert_pars_fragment:NT,lights_pars_begin:DT,lights_toon_fragment:UT,lights_toon_pars_fragment:FT,lights_phong_fragment:OT,lights_phong_pars_fragment:kT,lights_physical_fragment:BT,lights_physical_pars_fragment:zT,lights_fragment_begin:VT,lights_fragment_maps:HT,lights_fragment_end:GT,lightprobes_pars_fragment:WT,logdepthbuf_fragment:XT,logdepthbuf_pars_fragment:$T,logdepthbuf_pars_vertex:YT,logdepthbuf_vertex:qT,map_fragment:KT,map_pars_fragment:ZT,map_particle_fragment:jT,map_particle_pars_fragment:JT,metalnessmap_fragment:QT,metalnessmap_pars_fragment:eA,morphinstance_vertex:tA,morphcolor_vertex:nA,morphnormal_vertex:iA,morphtarget_pars_vertex:rA,morphtarget_vertex:sA,normal_fragment_begin:oA,normal_fragment_maps:aA,normal_pars_fragment:lA,normal_pars_vertex:cA,normal_vertex:uA,normalmap_pars_fragment:fA,clearcoat_normal_fragment_begin:dA,clearcoat_normal_fragment_maps:hA,clearcoat_pars_fragment:pA,iridescence_pars_fragment:mA,opaque_fragment:gA,packing:vA,premultiplied_alpha_fragment:_A,project_vertex:xA,dithering_fragment:yA,dithering_pars_fragment:SA,roughnessmap_fragment:MA,roughnessmap_pars_fragment:EA,shadowmap_pars_fragment:wA,shadowmap_pars_vertex:TA,shadowmap_vertex:AA,shadowmask_pars_fragment:CA,skinbase_vertex:RA,skinning_pars_vertex:bA,skinning_vertex:PA,skinnormal_vertex:LA,specularmap_fragment:NA,specularmap_pars_fragment:DA,tonemapping_fragment:IA,tonemapping_pars_fragment:UA,transmission_fragment:FA,transmission_pars_fragment:OA,uv_pars_fragment:kA,uv_pars_vertex:BA,uv_vertex:zA,worldpos_vertex:VA,background_vert:HA,background_frag:GA,backgroundCube_vert:WA,backgroundCube_frag:XA,cube_vert:$A,cube_frag:YA,depth_vert:qA,depth_frag:KA,distance_vert:ZA,distance_frag:jA,equirect_vert:JA,equirect_frag:QA,linedashed_vert:eC,linedashed_frag:tC,meshbasic_vert:nC,meshbasic_frag:iC,meshlambert_vert:rC,meshlambert_frag:sC,meshmatcap_vert:oC,meshmatcap_frag:aC,meshnormal_vert:lC,meshnormal_frag:cC,meshphong_vert:uC,meshphong_frag:fC,meshphysical_vert:dC,meshphysical_frag:hC,meshtoon_vert:pC,meshtoon_frag:mC,points_vert:gC,points_frag:vC,shadow_vert:_C,shadow_frag:xC,sprite_vert:yC,sprite_frag:SC},Fe={common:{diffuse:{value:new at(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new nt},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new nt}},envmap:{envMap:{value:null},envMapRotation:{value:new nt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new nt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new nt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new nt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new nt},normalScale:{value:new De(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new nt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new nt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new nt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new nt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new at(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new F},probesMax:{value:new F},probesResolution:{value:new F}},points:{diffuse:{value:new at(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0},uvTransform:{value:new nt}},sprite:{diffuse:{value:new at(16777215)},opacity:{value:1},center:{value:new De(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new nt},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0}}},Ti={basic:{uniforms:yn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.fog]),vertexShader:st.meshbasic_vert,fragmentShader:st.meshbasic_frag},lambert:{uniforms:yn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new at(0)},envMapIntensity:{value:1}}]),vertexShader:st.meshlambert_vert,fragmentShader:st.meshlambert_frag},phong:{uniforms:yn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new at(0)},specular:{value:new at(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:st.meshphong_vert,fragmentShader:st.meshphong_frag},standard:{uniforms:yn([Fe.common,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.roughnessmap,Fe.metalnessmap,Fe.fog,Fe.lights,{emissive:{value:new at(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag},toon:{uniforms:yn([Fe.common,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.gradientmap,Fe.fog,Fe.lights,{emissive:{value:new at(0)}}]),vertexShader:st.meshtoon_vert,fragmentShader:st.meshtoon_frag},matcap:{uniforms:yn([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,{matcap:{value:null}}]),vertexShader:st.meshmatcap_vert,fragmentShader:st.meshmatcap_frag},points:{uniforms:yn([Fe.points,Fe.fog]),vertexShader:st.points_vert,fragmentShader:st.points_frag},dashed:{uniforms:yn([Fe.common,Fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:st.linedashed_vert,fragmentShader:st.linedashed_frag},depth:{uniforms:yn([Fe.common,Fe.displacementmap]),vertexShader:st.depth_vert,fragmentShader:st.depth_frag},normal:{uniforms:yn([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,{opacity:{value:1}}]),vertexShader:st.meshnormal_vert,fragmentShader:st.meshnormal_frag},sprite:{uniforms:yn([Fe.sprite,Fe.fog]),vertexShader:st.sprite_vert,fragmentShader:st.sprite_frag},background:{uniforms:{uvTransform:{value:new nt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:st.background_vert,fragmentShader:st.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new nt}},vertexShader:st.backgroundCube_vert,fragmentShader:st.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:st.cube_vert,fragmentShader:st.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:st.equirect_vert,fragmentShader:st.equirect_frag},distance:{uniforms:yn([Fe.common,Fe.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:st.distance_vert,fragmentShader:st.distance_frag},shadow:{uniforms:yn([Fe.lights,Fe.fog,{color:{value:new at(0)},opacity:{value:1}}]),vertexShader:st.shadow_vert,fragmentShader:st.shadow_frag}};Ti.physical={uniforms:yn([Ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new nt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new nt},clearcoatNormalScale:{value:new De(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new nt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new nt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new nt},sheen:{value:0},sheenColor:{value:new at(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new nt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new nt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new nt},transmissionSamplerSize:{value:new De},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new nt},attenuationDistance:{value:0},attenuationColor:{value:new at(0)},specularColor:{value:new at(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new nt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new nt},anisotropyVector:{value:new De},anisotropyMap:{value:null},anisotropyMapTransform:{value:new nt}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag};const Ol={r:0,b:0,g:0},MC=new Tt,Bx=new nt;Bx.set(-1,0,0,0,1,0,0,0,1);function EC(t,e,n,i,r,s){const o=new at(0);let a=r===!0?0:1,l,c,f=null,h=0,u=null;function p(v){let S=v.isScene===!0?v.background:null;if(S&&S.isTexture){const y=v.backgroundBlurriness>0;S=e.get(S,y)}return S}function g(v){let S=!1;const y=p(v);y===null?m(o,a):y&&y.isColor&&(m(y,1),S=!0);const w=t.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,s):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(t.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function M(v,S){const y=p(S);y&&(y.isCubeTexture||y.mapping===ou)?(c===void 0&&(c=new en(new Ga(1,1,1),new Fi({name:"BackgroundCubeMaterial",uniforms:mo(Ti.backgroundCube.uniforms),vertexShader:Ti.backgroundCube.vertexShader,fragmentShader:Ti.backgroundCube.fragmentShader,side:Dn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,T,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(MC.makeRotationFromEuler(S.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Bx),c.material.toneMapped=ut.getTransfer(y.colorSpace)!==_t,(f!==y||h!==y.version||u!==t.toneMapping)&&(c.material.needsUpdate=!0,f=y,h=y.version,u=t.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new en(new Wa(2,2),new Fi({name:"BackgroundMaterial",uniforms:mo(Ti.background.uniforms),vertexShader:Ti.background.vertexShader,fragmentShader:Ti.background.fragmentShader,side:us,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=ut.getTransfer(y.colorSpace)!==_t,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(f!==y||h!==y.version||u!==t.toneMapping)&&(l.material.needsUpdate=!0,f=y,h=y.version,u=t.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function m(v,S){v.getRGB(Ol,Ux(t)),n.buffers.color.setClear(Ol.r,Ol.g,Ol.b,S,s)}function d(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(v,S=1){o.set(v),a=S,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(v){a=v,m(o,a)},render:g,addToRenderList:M,dispose:d}}function wC(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=u(null);let s=r,o=!1;function a(N,X,L,D,I){let q=!1;const W=h(N,D,L,X);s!==W&&(s=W,c(s.object)),q=p(N,D,L,I),q&&g(N,D,L,I),I!==null&&e.update(I,t.ELEMENT_ARRAY_BUFFER),(q||o)&&(o=!1,y(N,X,L,D),I!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(I).buffer))}function l(){return t.createVertexArray()}function c(N){return t.bindVertexArray(N)}function f(N){return t.deleteVertexArray(N)}function h(N,X,L,D){const I=D.wireframe===!0;let q=i[X.id];q===void 0&&(q={},i[X.id]=q);const W=N.isInstancedMesh===!0?N.id:0;let V=q[W];V===void 0&&(V={},q[W]=V);let O=V[L.id];O===void 0&&(O={},V[L.id]=O);let G=O[I];return G===void 0&&(G=u(l()),O[I]=G),G}function u(N){const X=[],L=[],D=[];for(let I=0;I<n;I++)X[I]=0,L[I]=0,D[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:X,enabledAttributes:L,attributeDivisors:D,object:N,attributes:{},index:null}}function p(N,X,L,D){const I=s.attributes,q=X.attributes;let W=0;const V=L.getAttributes();for(const O in V)if(V[O].location>=0){const ee=I[O];let Se=q[O];if(Se===void 0&&(O==="instanceMatrix"&&N.instanceMatrix&&(Se=N.instanceMatrix),O==="instanceColor"&&N.instanceColor&&(Se=N.instanceColor)),ee===void 0||ee.attribute!==Se||Se&&ee.data!==Se.data)return!0;W++}return s.attributesNum!==W||s.index!==D}function g(N,X,L,D){const I={},q=X.attributes;let W=0;const V=L.getAttributes();for(const O in V)if(V[O].location>=0){let ee=q[O];ee===void 0&&(O==="instanceMatrix"&&N.instanceMatrix&&(ee=N.instanceMatrix),O==="instanceColor"&&N.instanceColor&&(ee=N.instanceColor));const Se={};Se.attribute=ee,ee&&ee.data&&(Se.data=ee.data),I[O]=Se,W++}s.attributes=I,s.attributesNum=W,s.index=D}function M(){const N=s.newAttributes;for(let X=0,L=N.length;X<L;X++)N[X]=0}function m(N){d(N,0)}function d(N,X){const L=s.newAttributes,D=s.enabledAttributes,I=s.attributeDivisors;L[N]=1,D[N]===0&&(t.enableVertexAttribArray(N),D[N]=1),I[N]!==X&&(t.vertexAttribDivisor(N,X),I[N]=X)}function v(){const N=s.newAttributes,X=s.enabledAttributes;for(let L=0,D=X.length;L<D;L++)X[L]!==N[L]&&(t.disableVertexAttribArray(L),X[L]=0)}function S(N,X,L,D,I,q,W){W===!0?t.vertexAttribIPointer(N,X,L,I,q):t.vertexAttribPointer(N,X,L,D,I,q)}function y(N,X,L,D){M();const I=D.attributes,q=L.getAttributes(),W=X.defaultAttributeValues;for(const V in q){const O=q[V];if(O.location>=0){let G=I[V];if(G===void 0&&(V==="instanceMatrix"&&N.instanceMatrix&&(G=N.instanceMatrix),V==="instanceColor"&&N.instanceColor&&(G=N.instanceColor)),G!==void 0){const ee=G.normalized,Se=G.itemSize,Le=e.get(G);if(Le===void 0)continue;const Ye=Le.buffer,qe=Le.type,$e=Le.bytesPerElement,U=qe===t.INT||qe===t.UNSIGNED_INT||G.gpuType===vp;if(G.isInterleavedBufferAttribute){const $=G.data,se=$.stride,Ce=G.offset;if($.isInstancedInterleavedBuffer){for(let Re=0;Re<O.locationSize;Re++)d(O.location+Re,$.meshPerAttribute);N.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let Re=0;Re<O.locationSize;Re++)m(O.location+Re);t.bindBuffer(t.ARRAY_BUFFER,Ye);for(let Re=0;Re<O.locationSize;Re++)S(O.location+Re,Se/O.locationSize,qe,ee,se*$e,(Ce+Se/O.locationSize*Re)*$e,U)}else{if(G.isInstancedBufferAttribute){for(let $=0;$<O.locationSize;$++)d(O.location+$,G.meshPerAttribute);N.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let $=0;$<O.locationSize;$++)m(O.location+$);t.bindBuffer(t.ARRAY_BUFFER,Ye);for(let $=0;$<O.locationSize;$++)S(O.location+$,Se/O.locationSize,qe,ee,Se*$e,Se/O.locationSize*$*$e,U)}}else if(W!==void 0){const ee=W[V];if(ee!==void 0)switch(ee.length){case 2:t.vertexAttrib2fv(O.location,ee);break;case 3:t.vertexAttrib3fv(O.location,ee);break;case 4:t.vertexAttrib4fv(O.location,ee);break;default:t.vertexAttrib1fv(O.location,ee)}}}}v()}function w(){R();for(const N in i){const X=i[N];for(const L in X){const D=X[L];for(const I in D){const q=D[I];for(const W in q)f(q[W].object),delete q[W];delete D[I]}}delete i[N]}}function T(N){if(i[N.id]===void 0)return;const X=i[N.id];for(const L in X){const D=X[L];for(const I in D){const q=D[I];for(const W in q)f(q[W].object),delete q[W];delete D[I]}}delete i[N.id]}function C(N){for(const X in i){const L=i[X];for(const D in L){const I=L[D];if(I[N.id]===void 0)continue;const q=I[N.id];for(const W in q)f(q[W].object),delete q[W];delete I[N.id]}}}function x(N){for(const X in i){const L=i[X],D=N.isInstancedMesh===!0?N.id:0,I=L[D];if(I!==void 0){for(const q in I){const W=I[q];for(const V in W)f(W[V].object),delete W[V];delete I[q]}delete L[D],Object.keys(L).length===0&&delete i[X]}}}function R(){b(),o=!0,s!==r&&(s=r,c(s.object))}function b(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:R,resetDefaultState:b,dispose:w,releaseStatesOfGeometry:T,releaseStatesOfObject:x,releaseStatesOfProgram:C,initAttributes:M,enableAttribute:m,disableUnusedAttributes:v}}function TC(t,e,n){let i;function r(l){i=l}function s(l,c){t.drawArrays(i,l,c),n.update(c,i,1)}function o(l,c,f){f!==0&&(t.drawArraysInstanced(i,l,c,f),n.update(c,i,f))}function a(l,c,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,f);let u=0;for(let p=0;p<f;p++)u+=c[p];n.update(u,i,1)}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function AC(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(C){return!(C!==pi&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const x=C===Ii&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==zn&&C!==Ri&&!x&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE))}function l(C){if(C==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const f=l(c);f!==c&&(et("WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);const h=n.logarithmicDepthBuffer===!0,u=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&u===!1&&et("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),d=t.getParameter(t.MAX_VERTEX_ATTRIBS),v=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),S=t.getParameter(t.MAX_VARYING_VECTORS),y=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),w=t.getParameter(t.MAX_SAMPLES),T=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:u,maxTextures:p,maxVertexTextures:g,maxTextureSize:M,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:v,maxVaryings:S,maxFragmentUniforms:y,maxSamples:w,samples:T}}function CC(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new xr,a=new nt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){const p=h.length!==0||u||i!==0||r;return r=u,i=h.length,p},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,u){n=f(h,u,0)},this.setState=function(h,u,p){const g=h.clippingPlanes,M=h.clipIntersection,m=h.clipShadows,d=t.get(h);if(!r||g===null||g.length===0||s&&!m)s?f(null):c();else{const v=s?0:i,S=v*4;let y=d.clippingState||null;l.value=y,y=f(g,u,S,p);for(let w=0;w!==S;++w)y[w]=n[w];d.clippingState=y,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(h,u,p,g){const M=h!==null?h.length:0;let m=null;if(M!==0){if(m=l.value,g!==!0||m===null){const d=p+M*4,v=u.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<d)&&(m=new Float32Array(d));for(let S=0,y=p;S!==M;++S,y+=4)o.copy(h[S]).applyMatrix4(v,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,m}}const Zs=4,RC=6,bC=20,PC=256,ko=new Dp,$g=new at;let vf=null,_f=0,xf=0,yf=!1;const LC=new F,Zr=new F;class mh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,r=100,s={}){const{size:o=256,position:a=LC}=s;vf=this._renderer.getRenderTarget(),_f=this._renderer.getActiveCubeFace(),xf=this._renderer.getActiveMipmapLevel(),yf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Kg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=qg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(vf,_f,xf),this._renderer.xr.enabled=yf,e.scissorTest=!1,Ds(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===fs||e.mapping===ho?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),vf=this._renderer.getRenderTarget(),_f=this._renderer.getActiveCubeFace(),xf=this._renderer.getActiveMipmapLevel(),yf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:nn,minFilter:nn,generateMipmaps:!1,type:Ii,format:pi,colorSpace:Uc,depthBuffer:!1},r=Yg(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Yg(e,n,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=NC(s)),this._blurMaterial=IC(s,e,n),this._ggxMaterial=DC(s,e,n)}return r}_compileMaterial(e){const n=new en(new $n,e);this._renderer.compile(n,ko)}_sceneToCubeUV(e,n,i,r,s){const l=new jn(90,1,n,i),c=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,p=h.toneMapping;h.getClearColor($g),h.toneMapping=Ni,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new en(new Ga,new Rp({name:"PMREM.Background",side:Dn,depthWrite:!1,depthTest:!1})));const M=this._backgroundBox,m=M.material;let d=!1;const v=e.background;v?v.isColor&&(m.color.copy(v),e.background=null,d=!0):(m.color.copy($g),d=!0);for(let S=0;S<6;S++){const y=S%3;y===0?(l.up.set(0,c[S],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+f[S],s.y,s.z)):y===1?(l.up.set(0,0,c[S]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+f[S],s.z)):(l.up.set(0,c[S],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+f[S]));const w=this._cubeSize;Ds(r,y*w,S>2?w:0,w,w),h.setRenderTarget(r),d&&h.render(M,l),h.render(e,l)}h.toneMapping=p,h.autoClear=u,e.background=v}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===fs||e.mapping===ho;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Kg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=qg());const s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;const a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Ds(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,ko)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);n.autoClear=i}_applyGGXFilter(e,n,i){const r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const l=o.uniforms,c=i/(this._lodMeshes.length-1),f=n/(this._lodMeshes.length-1),h=Math.sqrt(c*c-f*f),u=c*1.25,p=h*u,{_lodMax:g}=this,M=this._sizeLods[i],m=3*M*(i>g-Zs?i-g+Zs:0),d=4*(this._cubeSize-M);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=g-n,Ds(s,m,d,3*M,2*M),r.setRenderTarget(s),r.render(a,ko),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=g-i,Ds(e,m,d,3*M,2*M),r.setRenderTarget(e),r.render(a,ko)}_blur(e,n,i,r){const s=this._pingPongRenderTarget,o=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,s,n,i,o),this._blurPass(s,e,i,i,o)}_blurPass(e,n,i,r,s){const o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[r];l.material=a;const c=a.uniforms;c.envMap.value=e.texture,c.sigma.value=s,c.mipInt.value=this._lodMax-i;const f=this._sizeLods[r],h=3*f*(r>this._lodMax-Zs?r-this._lodMax+Zs:0),u=4*(this._cubeSize-f);Ds(n,h,u,3*f,2*f),o.setRenderTarget(n),o.render(l,ko)}}function NC(t){const e=[],n=[];let i=t;const r=t-Zs+1+RC;for(let s=0;s<r;s++){const o=Math.pow(2,i);e.push(o);const a=1/(o-2),l=-a,c=1+a,f=[l,l,c,l,c,c,l,l,c,c,l,c],h=6,u=6,p=3,g=new Float32Array(p*u*h),M=new Float32Array(p*u*h);for(let d=0;d<h;d++){const v=d%3*2/3-1,S=d>2?0:-1,y=[v,S,0,v+2/3,S,0,v+2/3,S+1,0,v,S,0,v+2/3,S+1,0,v,S+1,0];g.set(y,p*u*d);for(let w=0;w<u;w++){const T=f[w*2]*2-1,C=f[w*2+1]*2-1;d===0?Zr.set(1,C,T):d===1?Zr.set(-T,1,-C):d===2?Zr.set(-T,C,1):d===3?Zr.set(-1,C,-T):d===4?Zr.set(-T,-1,C):Zr.set(T,C,-1),Zr.toArray(M,(d*u+w)*p)}}const m=new $n;m.setAttribute("position",new ei(g,p)),m.setAttribute("outputDirection",new ei(M,p)),n.push(new en(m,null)),i>Zs&&i--}return{lodMeshes:n,sizeLods:e}}function Yg(t,e,n){const i=new vi(t,e,n);return i.texture.mapping=ou,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ds(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function DC(t,e,n){return new Fi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:PC,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:cu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Qi,depthTest:!1,depthWrite:!1})}function IC(t,e,n){return new Fi({name:"SphericalGaussianBlur",defines:{SAMPLES:bC,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:cu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Qi,depthTest:!1,depthWrite:!1})}function qg(){return new Fi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:cu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Qi,depthTest:!1,depthWrite:!1})}function Kg(){return new Fi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:cu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Qi,depthTest:!1,depthWrite:!1})}function cu(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class zx extends vi{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new wx(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Ga(5,5,5),s=new Fi({name:"CubemapFromEquirect",uniforms:mo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Dn,blending:Qi});s.uniforms.tEquirect.value=n;const o=new en(r,s),a=n.minFilter;return n.minFilter===Cr&&(n.minFilter=nn),new Ow(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}function UC(t){let e=new WeakMap,n=new WeakMap,i=null;function r(u,p=!1){return u==null?null:p?o(u):s(u)}function s(u){if(u&&u.isTexture){const p=u.mapping;if(p===zu||p===Vu)if(e.has(u)){const g=e.get(u).texture;return a(g,u.mapping)}else{const g=u.image;if(g&&g.height>0){const M=new zx(g.height);return M.fromEquirectangularTexture(t,u),e.set(u,M),u.addEventListener("dispose",c),a(M.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture){const p=u.mapping,g=p===zu||p===Vu,M=p===fs||p===ho;if(g||M){let m=n.get(u);const d=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==d)return i===null&&(i=new mh(t)),m=g?i.fromEquirectangular(u,m):i.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,n.set(u,m),m.texture;if(m!==void 0)return m.texture;{const v=u.image;return g&&v&&v.height>0||M&&v&&l(v)?(i===null&&(i=new mh(t)),m=g?i.fromEquirectangular(u):i.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,n.set(u,m),u.addEventListener("dispose",f),m.texture):null}}}return u}function a(u,p){return p===zu?u.mapping=fs:p===Vu&&(u.mapping=ho),u}function l(u){let p=0;const g=6;for(let M=0;M<g;M++)u[M]!==void 0&&p++;return p===g}function c(u){const p=u.target;p.removeEventListener("dispose",c);const g=e.get(p);g!==void 0&&(e.delete(p),g.dispose())}function f(u){const p=u.target;p.removeEventListener("dispose",f);const g=n.get(p);g!==void 0&&(n.delete(p),g.dispose())}function h(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function FC(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&io("WebGLRenderer: "+i+" extension not supported."),r}}}function OC(t,e,n,i){const r={},s=new WeakMap;function o(h){const u=h.target;u.index!==null&&e.remove(u.index);for(const g in u.attributes)e.remove(u.attributes[g]);u.removeEventListener("dispose",o),delete r[u.id];const p=s.get(u);p&&(e.remove(p),s.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,n.memory.geometries--}function a(h,u){return r[u.id]===!0||(u.addEventListener("dispose",o),r[u.id]=!0,n.memory.geometries++),u}function l(h){const u=h.attributes;for(const p in u)e.update(u[p],t.ARRAY_BUFFER)}function c(h){const u=[],p=h.index,g=h.attributes.position;let M=0;if(g===void 0)return;if(p!==null){const v=p.array;M=p.version;for(let S=0,y=v.length;S<y;S+=3){const w=v[S+0],T=v[S+1],C=v[S+2];u.push(w,T,T,C,C,w)}}else{const v=g.array;M=g.version;for(let S=0,y=v.length/3-1;S<y;S+=3){const w=S+0,T=S+1,C=S+2;u.push(w,T,T,C,C,w)}}const m=new(g.count>=65535?Sx:yx)(u,1);m.version=M;const d=s.get(h);d&&e.remove(d),s.set(h,m)}function f(h){const u=s.get(h);if(u){const p=h.index;p!==null&&u.version<p.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:f}}function kC(t,e,n){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,u){t.drawElements(i,u,s,h*o),n.update(u,i,1)}function c(h,u,p){p!==0&&(t.drawElementsInstanced(i,u,s,h*o,p),n.update(u,i,p))}function f(h,u,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,s,h,0,p);let M=0;for(let m=0;m<p;m++)M+=u[m];n.update(M,i,1)}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=f}function BC(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:dt("WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function zC(t,e,n){const i=new WeakMap,r=new bt;function s(o,a,l){const c=o.morphTargetInfluences,f=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=f!==void 0?f.length:0;let u=i.get(a);if(u===void 0||u.count!==h){let b=function(){x.dispose(),i.delete(a),a.removeEventListener("dispose",b)};var p=b;u!==void 0&&u.texture.dispose();const g=a.morphAttributes.position!==void 0,M=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],S=a.morphAttributes.color||[];let y=0;g===!0&&(y=1),M===!0&&(y=2),m===!0&&(y=3);let w=a.attributes.position.count*y,T=1;w>e.maxTextureSize&&(T=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const C=new Float32Array(w*T*4*h),x=new vx(C,w,T,h);x.type=Ri,x.needsUpdate=!0;const R=y*4;for(let N=0;N<h;N++){const X=d[N],L=v[N],D=S[N],I=w*T*4*N;for(let q=0;q<X.count;q++){const W=q*R;g===!0&&(r.fromBufferAttribute(X,q),C[I+W+0]=r.x,C[I+W+1]=r.y,C[I+W+2]=r.z,C[I+W+3]=0),M===!0&&(r.fromBufferAttribute(L,q),C[I+W+4]=r.x,C[I+W+5]=r.y,C[I+W+6]=r.z,C[I+W+7]=0),m===!0&&(r.fromBufferAttribute(D,q),C[I+W+8]=r.x,C[I+W+9]=r.y,C[I+W+10]=r.z,C[I+W+11]=D.itemSize===4?r.w:1)}}u={count:h,texture:x,size:new De(w,T)},i.set(a,u),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const M=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(t,"morphTargetBaseInfluence",M),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",u.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",u.size)}return{update:s}}function VC(t,e,n,i,r){let s=new WeakMap;function o(c){const f=r.render.frame,h=c.geometry,u=e.get(c,h);if(s.get(u)!==f&&(e.update(u),s.set(u,f)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==f&&(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER),s.set(c,f))),c.isSkinnedMesh){const p=c.skeleton;s.get(p)!==f&&(p.update(),s.set(p,f))}return u}function a(){s=new WeakMap}function l(c){const f=c.target;f.removeEventListener("dispose",l),i.releaseStatesOfObject(f),n.remove(f.instanceMatrix),f.instanceColor!==null&&n.remove(f.instanceColor)}return{update:o,dispose:a}}const HC={[nx]:"LINEAR_TONE_MAPPING",[ix]:"REINHARD_TONE_MAPPING",[rx]:"CINEON_TONE_MAPPING",[sx]:"ACES_FILMIC_TONE_MAPPING",[ax]:"AGX_TONE_MAPPING",[gp]:"NEUTRAL_TONE_MAPPING",[ox]:"CUSTOM_TONE_MAPPING"};function GC(t,e,n,i,r,s){const o=new vi(e,n,{type:t,depthBuffer:r,stencilBuffer:s,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let a=null,l=null;const c=new $n;c.setAttribute("position",new sn([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new sn([0,2,0,0,2,0],2));const f=new Lw({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new en(c,f),u=new Dp(-1,1,1,-1,0,1);let p=null,g=null,M=!1,m,d=null,v=[],S=!1;this.setSize=function(y,w){o.setSize(y,w),a!==null&&a.setSize(y,w),l!==null&&l.setSize(y,w);for(let T=0;T<v.length;T++){const C=v[T];C.setSize&&C.setSize(y,w)}},this.setEffects=function(y){v=y,S=v.length>0&&v[0].isRenderPass===!0;const w=o.width,T=o.height;v.length>0&&a===null&&(a=new vi(w,T,{type:Ii,depthBuffer:!1,stencilBuffer:!1}),l=new vi(w,T,{type:Ii,depthBuffer:!1,stencilBuffer:!1}));for(let C=0;C<v.length;C++){const x=v[C];x.setSize&&x.setSize(w,T)}},this.begin=function(y,w){if(M||y.toneMapping===Ni&&v.length===0)return!1;if(d=w,w!==null){const T=w.width,C=w.height;(o.width!==T||o.height!==C)&&this.setSize(T,C)}return S===!1&&y.setRenderTarget(o),m=y.toneMapping,y.toneMapping=Ni,!0},this.hasRenderPass=function(){return S},this.end=function(y,w){y.toneMapping=m,M=!0;let T=o,C=a;for(let x=0;x<v.length;x++){const R=v[x];R.enabled!==!1&&(R.render(y,C,T,w),R.needsSwap!==!1&&(T=C,C=C===a?l:a))}if(p!==y.outputColorSpace||g!==y.toneMapping){p=y.outputColorSpace,g=y.toneMapping,f.defines={},ut.getTransfer(p)===_t&&(f.defines.SRGB_TRANSFER="");const x=HC[g];x&&(f.defines[x]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=T.texture,y.setRenderTarget(d),y.render(h,u),d=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),f.dispose()}}const Vx=new mn,gh=new La(1,1),Hx=new vx,Gx=new L1,Wx=new wx,Zg=[],jg=[],Jg=new Float32Array(16),Qg=new Float32Array(9),e0=new Float32Array(4);function Mo(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Zg[r];if(s===void 0&&(s=new Float32Array(r),Zg[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Xt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function $t(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function uu(t,e){let n=jg[e];n===void 0&&(n=new Int32Array(e),jg[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function WC(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function XC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Xt(n,e))return;t.uniform2fv(this.addr,e),$t(n,e)}}function $C(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Xt(n,e))return;t.uniform3fv(this.addr,e),$t(n,e)}}function YC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Xt(n,e))return;t.uniform4fv(this.addr,e),$t(n,e)}}function qC(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Xt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),$t(n,e)}else{if(Xt(n,i))return;e0.set(i),t.uniformMatrix2fv(this.addr,!1,e0),$t(n,i)}}function KC(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Xt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),$t(n,e)}else{if(Xt(n,i))return;Qg.set(i),t.uniformMatrix3fv(this.addr,!1,Qg),$t(n,i)}}function ZC(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Xt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),$t(n,e)}else{if(Xt(n,i))return;Jg.set(i),t.uniformMatrix4fv(this.addr,!1,Jg),$t(n,i)}}function jC(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function JC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Xt(n,e))return;t.uniform2iv(this.addr,e),$t(n,e)}}function QC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Xt(n,e))return;t.uniform3iv(this.addr,e),$t(n,e)}}function eR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Xt(n,e))return;t.uniform4iv(this.addr,e),$t(n,e)}}function tR(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function nR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Xt(n,e))return;t.uniform2uiv(this.addr,e),$t(n,e)}}function iR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Xt(n,e))return;t.uniform3uiv(this.addr,e),$t(n,e)}}function rR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Xt(n,e))return;t.uniform4uiv(this.addr,e),$t(n,e)}}function sR(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(gh.compareFunction=n.isReversedDepthBuffer()?wp:Ep,s=gh):s=Vx,n.setTexture2D(e||s,r)}function oR(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Gx,r)}function aR(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Wx,r)}function lR(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Hx,r)}function cR(t){switch(t){case 5126:return WC;case 35664:return XC;case 35665:return $C;case 35666:return YC;case 35674:return qC;case 35675:return KC;case 35676:return ZC;case 5124:case 35670:return jC;case 35667:case 35671:return JC;case 35668:case 35672:return QC;case 35669:case 35673:return eR;case 5125:return tR;case 36294:return nR;case 36295:return iR;case 36296:return rR;case 35678:case 36198:case 36298:case 36306:case 35682:return sR;case 35679:case 36299:case 36307:return oR;case 35680:case 36300:case 36308:case 36293:return aR;case 36289:case 36303:case 36311:case 36292:return lR}}function uR(t,e){t.uniform1fv(this.addr,e)}function fR(t,e){const n=Mo(e,this.size,2);t.uniform2fv(this.addr,n)}function dR(t,e){const n=Mo(e,this.size,3);t.uniform3fv(this.addr,n)}function hR(t,e){const n=Mo(e,this.size,4);t.uniform4fv(this.addr,n)}function pR(t,e){const n=Mo(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function mR(t,e){const n=Mo(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function gR(t,e){const n=Mo(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function vR(t,e){t.uniform1iv(this.addr,e)}function _R(t,e){t.uniform2iv(this.addr,e)}function xR(t,e){t.uniform3iv(this.addr,e)}function yR(t,e){t.uniform4iv(this.addr,e)}function SR(t,e){t.uniform1uiv(this.addr,e)}function MR(t,e){t.uniform2uiv(this.addr,e)}function ER(t,e){t.uniform3uiv(this.addr,e)}function wR(t,e){t.uniform4uiv(this.addr,e)}function TR(t,e,n){const i=this.cache,r=e.length,s=uu(n,r);Xt(i,s)||(t.uniform1iv(this.addr,s),$t(i,s));let o;this.type===t.SAMPLER_2D_SHADOW?o=gh:o=Vx;for(let a=0;a!==r;++a)n.setTexture2D(e[a]||o,s[a])}function AR(t,e,n){const i=this.cache,r=e.length,s=uu(n,r);Xt(i,s)||(t.uniform1iv(this.addr,s),$t(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||Gx,s[o])}function CR(t,e,n){const i=this.cache,r=e.length,s=uu(n,r);Xt(i,s)||(t.uniform1iv(this.addr,s),$t(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||Wx,s[o])}function RR(t,e,n){const i=this.cache,r=e.length,s=uu(n,r);Xt(i,s)||(t.uniform1iv(this.addr,s),$t(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||Hx,s[o])}function bR(t){switch(t){case 5126:return uR;case 35664:return fR;case 35665:return dR;case 35666:return hR;case 35674:return pR;case 35675:return mR;case 35676:return gR;case 5124:case 35670:return vR;case 35667:case 35671:return _R;case 35668:case 35672:return xR;case 35669:case 35673:return yR;case 5125:return SR;case 36294:return MR;case 36295:return ER;case 36296:return wR;case 35678:case 36198:case 36298:case 36306:case 35682:return TR;case 35679:case 36299:case 36307:return AR;case 35680:case 36300:case 36308:case 36293:return CR;case 36289:case 36303:case 36311:case 36292:return RR}}class PR{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=cR(n.type)}}class LR{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=bR(n.type)}}class NR{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Sf=/(\w+)(\])?(\[|\.)?/g;function t0(t,e){t.seq.push(e),t.map[e.id]=e}function DR(t,e,n){const i=t.name,r=i.length;for(Sf.lastIndex=0;;){const s=Sf.exec(i),o=Sf.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){t0(n,c===void 0?new PR(a,t,e):new LR(a,t,e));break}else{let h=n.map[a];h===void 0&&(h=new NR(a),t0(n,h)),n=h}}}class rc{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=e.getActiveUniform(n,o),l=e.getUniformLocation(n,a.name);DR(a,l,this)}const r=[],s=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function n0(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const IR=37297;let UR=0;function FR(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const i0=new nt;function OR(t){ut._getMatrix(i0,ut.workingColorSpace,t);const e=`mat3( ${i0.elements.map(n=>n.toFixed(4))} )`;switch(ut.getTransfer(t)){case Fc:return[e,"LinearTransferOETF"];case _t:return[e,"sRGBTransferOETF"];default:return et("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function r0(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return n.toUpperCase()+`

`+s+`

`+FR(t.getShaderSource(e),a)}else return s}function kR(t,e){const n=OR(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const BR={[nx]:"Linear",[ix]:"Reinhard",[rx]:"Cineon",[sx]:"ACESFilmic",[ax]:"AgX",[gp]:"Neutral",[ox]:"Custom"};function zR(t,e){const n=BR[e];return n===void 0?(et("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const kl=new F;function VR(){ut.getLuminanceCoefficients(kl);const t=kl.x.toFixed(4),e=kl.y.toFixed(4),n=kl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function HR(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Yo).join(`
`)}function GR(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function WR(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Yo(t){return t!==""}function s0(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function o0(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const XR=/^[ \t]*#include +<([\w\d./]+)>/gm;function vh(t){return t.replace(XR,YR)}const $R=new Map;function YR(t,e){let n=st[e];if(n===void 0){const i=$R.get(e);if(i!==void 0)n=st[i],et('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return vh(n)}const qR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function a0(t){return t.replace(qR,KR)}function KR(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function l0(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const ZR={[Ql]:"SHADOWMAP_TYPE_PCF",[Xo]:"SHADOWMAP_TYPE_VSM"};function jR(t){return ZR[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const JR={[fs]:"ENVMAP_TYPE_CUBE",[ho]:"ENVMAP_TYPE_CUBE",[ou]:"ENVMAP_TYPE_CUBE_UV"};function QR(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":JR[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const eb={[ho]:"ENVMAP_MODE_REFRACTION"};function tb(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":eb[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const nb={[tx]:"ENVMAP_BLENDING_MULTIPLY",[l1]:"ENVMAP_BLENDING_MIX",[c1]:"ENVMAP_BLENDING_ADD"};function ib(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":nb[t.combine]||"ENVMAP_BLENDING_NONE"}function rb(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function sb(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=jR(n),c=QR(n),f=tb(n),h=ib(n),u=rb(n),p=HR(n),g=GR(s),M=r.createProgram();let m,d,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(Yo).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(Yo).join(`
`),d.length>0&&(d+=`
`)):(m=[l0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Yo).join(`
`),d=[l0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+f:"",n.envMap?"#define "+h:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.retroreflection?"#define USE_RETROREFLECTION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Ni?"#define TONE_MAPPING":"",n.toneMapping!==Ni?st.tonemapping_pars_fragment:"",n.toneMapping!==Ni?zR("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",st.colorspace_pars_fragment,kR("linearToOutputTexel",n.outputColorSpace),VR(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Yo).join(`
`)),o=vh(o),o=s0(o,n),o=o0(o,n),a=vh(a),a=s0(a,n),a=o0(a,n),o=a0(o),a=a0(a),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",n.glslVersion===hg?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===hg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const S=v+m+o,y=v+d+a,w=n0(r,r.VERTEX_SHADER,S),T=n0(r,r.FRAGMENT_SHADER,y);r.attachShader(M,w),r.attachShader(M,T),n.index0AttributeName!==void 0?r.bindAttribLocation(M,0,n.index0AttributeName):n.hasPositionAttribute===!0&&r.bindAttribLocation(M,0,"position"),r.linkProgram(M);function C(N){if(t.debug.checkShaderErrors){const X=r.getProgramInfoLog(M)||"",L=r.getShaderInfoLog(w)||"",D=r.getShaderInfoLog(T)||"",I=X.trim(),q=L.trim(),W=D.trim();let V=!0,O=!0;if(r.getProgramParameter(M,r.LINK_STATUS)===!1)if(V=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,M,w,T);else{const G=r0(r,w,"vertex"),ee=r0(r,T,"fragment");dt("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(M,r.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+I+`
`+G+`
`+ee)}else I!==""?et("WebGLProgram: Program Info Log:",I):(q===""||W==="")&&(O=!1);O&&(N.diagnostics={runnable:V,programLog:I,vertexShader:{log:q,prefix:m},fragmentShader:{log:W,prefix:d}})}r.deleteShader(w),r.deleteShader(T),x=new rc(r,M),R=WR(r,M)}let x;this.getUniforms=function(){return x===void 0&&C(this),x};let R;this.getAttributes=function(){return R===void 0&&C(this),R};let b=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=r.getProgramParameter(M,IR)),b},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(M),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=UR++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=w,this.fragmentShader=T,this}let ob=0;class ab{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,n,i){const r=this._getShaderCacheForMaterial(e);return r.has(n)===!1&&(r.add(n),n.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new lb(e),n.set(e,i)),i}}class lb{constructor(e){this.id=ob++,this.code=e,this.usedTimes=0}}function cb(t){return t===ds||t===Dc||t===Ic}function ub(t,e,n,i,r,s){const o=new Ap,a=new ab,l=new Set,c=[],f=new Map,h=i.logarithmicDepthBuffer;let u=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return l.add(x),x===0?"uv":`uv${x}`}function M(x,R,b,N,X,L){const D=N.fog,I=X.geometry,q=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?N.environment:null,W=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,V=e.get(x.envMap||q,W),O=V&&V.mapping===ou?V.image.height:null,G=p[x.type];x.precision!==null&&(u=i.getMaxPrecision(x.precision),u!==x.precision&&et("WebGLProgram.getParameters:",x.precision,"not supported, using",u,"instead."));const ee=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,Se=ee!==void 0?ee.length:0;let Le=0;I.morphAttributes.position!==void 0&&(Le=1),I.morphAttributes.normal!==void 0&&(Le=2),I.morphAttributes.color!==void 0&&(Le=3);let Ye,qe,$e,U;if(G){const rt=Ti[G];Ye=rt.vertexShader,qe=rt.fragmentShader}else{Ye=x.vertexShader,qe=x.fragmentShader;const rt=a.getVertexShaderStage(x),it=a.getFragmentShaderStage(x);a.update(x,rt,it),$e=rt.id,U=it.id}const $=t.getRenderTarget(),se=t.state.buffers.depth.getReversed(),Ce=X.isInstancedMesh===!0,Re=X.isBatchedMesh===!0,Oe=!!x.map,Ke=!!x.matcap,ie=!!V,he=!!x.aoMap,ue=!!x.lightMap,ce=!!x.bumpMap&&x.wireframe===!1,_e=!!x.normalMap,Q=!!x.displacementMap,fe=!!x.emissiveMap,Ee=!!x.metalnessMap,ve=!!x.roughnessMap,P=x.anisotropy>0,Be=x.clearcoat>0,He=x.dispersion>0,A=x.retroreflectivity>0,_=x.iridescence>0,z=x.sheen>0,J=x.transmission>0,H=P&&!!x.anisotropyMap,xe=Be&&!!x.clearcoatMap,Te=Be&&!!x.clearcoatNormalMap,ne=Be&&!!x.clearcoatRoughnessMap,ae=_&&!!x.iridescenceMap,Ae=_&&!!x.iridescenceThicknessMap,Ne=z&&!!x.sheenColorMap,we=z&&!!x.sheenRoughnessMap,be=!!x.specularMap,Ge=!!x.specularColorMap,Xe=!!x.specularIntensityMap,je=J&&!!x.transmissionMap,B=J&&!!x.thicknessMap,Pe=!!x.gradientMap,oe=!!x.alphaMap,de=x.alphaTest>0,pe=!!x.alphaHash,re=!!x.extensions;let Ie=Ni;x.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(Ie=t.toneMapping);const ze={shaderID:G,shaderType:x.type,shaderName:x.name,vertexShader:Ye,fragmentShader:qe,defines:x.defines,customVertexShaderID:$e,customFragmentShaderID:U,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:u,batching:Re,batchingColor:Re&&X._colorsTexture!==null,instancing:Ce,instancingColor:Ce&&X.instanceColor!==null,instancingMorph:Ce&&X.morphTexture!==null,outputColorSpace:$===null?t.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:ut.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Oe,matcap:Ke,envMap:ie,envMapMode:ie&&V.mapping,envMapCubeUVHeight:O,aoMap:he,lightMap:ue,bumpMap:ce,normalMap:_e,displacementMap:Q,emissiveMap:fe,normalMapObjectSpace:_e&&x.normalMapType===d1,normalMapTangentSpace:_e&&x.normalMapType===ah,packedNormalMap:_e&&x.normalMapType===ah&&cb(x.normalMap.format),metalnessMap:Ee,roughnessMap:ve,anisotropy:P,anisotropyMap:H,clearcoat:Be,clearcoatMap:xe,clearcoatNormalMap:Te,clearcoatRoughnessMap:ne,dispersion:He,retroreflection:A,iridescence:_,iridescenceMap:ae,iridescenceThicknessMap:Ae,sheen:z,sheenColorMap:Ne,sheenRoughnessMap:we,specularMap:be,specularColorMap:Ge,specularIntensityMap:Xe,transmission:J,transmissionMap:je,thicknessMap:B,gradientMap:Pe,opaque:x.transparent===!1&&x.blending===ra&&x.alphaToCoverage===!1,alphaMap:oe,alphaTest:de,alphaHash:pe,combine:x.combine,mapUv:Oe&&g(x.map.channel),aoMapUv:he&&g(x.aoMap.channel),lightMapUv:ue&&g(x.lightMap.channel),bumpMapUv:ce&&g(x.bumpMap.channel),normalMapUv:_e&&g(x.normalMap.channel),displacementMapUv:Q&&g(x.displacementMap.channel),emissiveMapUv:fe&&g(x.emissiveMap.channel),metalnessMapUv:Ee&&g(x.metalnessMap.channel),roughnessMapUv:ve&&g(x.roughnessMap.channel),anisotropyMapUv:H&&g(x.anisotropyMap.channel),clearcoatMapUv:xe&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:Te&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ne&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:ae&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:Ae&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:Ne&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:we&&g(x.sheenRoughnessMap.channel),specularMapUv:be&&g(x.specularMap.channel),specularColorMapUv:Ge&&g(x.specularColorMap.channel),specularIntensityMapUv:Xe&&g(x.specularIntensityMap.channel),transmissionMapUv:je&&g(x.transmissionMap.channel),thicknessMapUv:B&&g(x.thicknessMap.channel),alphaMapUv:oe&&g(x.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(_e||P),vertexNormals:!!I.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:X.isPoints===!0&&!!I.attributes.uv&&(Oe||oe),fog:!!D,useFog:x.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||I.attributes.normal===void 0&&_e===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:se,skinning:X.isSkinnedMesh===!0,hasPositionAttribute:I.attributes.position!==void 0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:Se,morphTextureStride:Le,numSunLights:R.sun.length,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numSunLightShadows:R.sunShadowMap.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numLightProbeGrids:L.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:t.shadowMap.enabled&&b.length>0,shadowMapType:t.shadowMap.type,toneMapping:Ie,decodeVideoTexture:Oe&&x.map.isVideoTexture===!0&&ut.getTransfer(x.map.colorSpace)===_t,decodeVideoTextureEmissive:fe&&x.emissiveMap.isVideoTexture===!0&&ut.getTransfer(x.emissiveMap.colorSpace)===_t,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===di,flipSided:x.side===Dn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:re&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(re&&x.extensions.multiDraw===!0||Re)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return ze.vertexUv1s=l.has(1),ze.vertexUv2s=l.has(2),ze.vertexUv3s=l.has(3),l.clear(),ze}function m(x){const R=[];if(x.shaderID?R.push(x.shaderID):(R.push(x.customVertexShaderID),R.push(x.customFragmentShaderID)),x.defines!==void 0)for(const b in x.defines)R.push(b),R.push(x.defines[b]);return x.isRawShaderMaterial===!1&&(d(R,x),v(R,x),R.push(t.outputColorSpace)),R.push(x.customProgramCacheKey),R.join()}function d(x,R){x.push(R.precision),x.push(R.outputColorSpace),x.push(R.envMapMode),x.push(R.envMapCubeUVHeight),x.push(R.mapUv),x.push(R.alphaMapUv),x.push(R.lightMapUv),x.push(R.aoMapUv),x.push(R.bumpMapUv),x.push(R.normalMapUv),x.push(R.displacementMapUv),x.push(R.emissiveMapUv),x.push(R.metalnessMapUv),x.push(R.roughnessMapUv),x.push(R.anisotropyMapUv),x.push(R.clearcoatMapUv),x.push(R.clearcoatNormalMapUv),x.push(R.clearcoatRoughnessMapUv),x.push(R.iridescenceMapUv),x.push(R.iridescenceThicknessMapUv),x.push(R.sheenColorMapUv),x.push(R.sheenRoughnessMapUv),x.push(R.specularMapUv),x.push(R.specularColorMapUv),x.push(R.specularIntensityMapUv),x.push(R.transmissionMapUv),x.push(R.thicknessMapUv),x.push(R.combine),x.push(R.fogExp2),x.push(R.sizeAttenuation),x.push(R.morphTargetsCount),x.push(R.morphAttributeCount),x.push(R.numSunLights),x.push(R.numDirLights),x.push(R.numPointLights),x.push(R.numSpotLights),x.push(R.numSpotLightMaps),x.push(R.numHemiLights),x.push(R.numRectAreaLights),x.push(R.numSunLightShadows),x.push(R.numDirLightShadows),x.push(R.numPointLightShadows),x.push(R.numSpotLightShadows),x.push(R.numSpotLightShadowsWithMaps),x.push(R.numLightProbes),x.push(R.shadowMapType),x.push(R.toneMapping),x.push(R.numClippingPlanes),x.push(R.numClipIntersection),x.push(R.depthPacking)}function v(x,R){o.disableAll(),R.instancing&&o.enable(0),R.instancingColor&&o.enable(1),R.instancingMorph&&o.enable(2),R.matcap&&o.enable(3),R.envMap&&o.enable(4),R.normalMapObjectSpace&&o.enable(5),R.normalMapTangentSpace&&o.enable(6),R.clearcoat&&o.enable(7),R.iridescence&&o.enable(8),R.alphaTest&&o.enable(9),R.vertexColors&&o.enable(10),R.vertexAlphas&&o.enable(11),R.vertexUv1s&&o.enable(12),R.vertexUv2s&&o.enable(13),R.vertexUv3s&&o.enable(14),R.vertexTangents&&o.enable(15),R.anisotropy&&o.enable(16),R.alphaHash&&o.enable(17),R.batching&&o.enable(18),R.dispersion&&o.enable(19),R.retroreflection&&o.enable(24),R.batchingColor&&o.enable(20),R.gradientMap&&o.enable(21),R.packedNormalMap&&o.enable(22),R.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),R.fog&&o.enable(0),R.useFog&&o.enable(1),R.flatShading&&o.enable(2),R.logarithmicDepthBuffer&&o.enable(3),R.reversedDepthBuffer&&o.enable(4),R.skinning&&o.enable(5),R.morphTargets&&o.enable(6),R.morphNormals&&o.enable(7),R.morphColors&&o.enable(8),R.premultipliedAlpha&&o.enable(9),R.shadowMapEnabled&&o.enable(10),R.doubleSided&&o.enable(11),R.flipSided&&o.enable(12),R.useDepthPacking&&o.enable(13),R.dithering&&o.enable(14),R.transmission&&o.enable(15),R.sheen&&o.enable(16),R.opaque&&o.enable(17),R.pointsUvs&&o.enable(18),R.decodeVideoTexture&&o.enable(19),R.decodeVideoTextureEmissive&&o.enable(20),R.alphaToCoverage&&o.enable(21),R.numLightProbeGrids>0&&o.enable(22),R.hasPositionAttribute&&o.enable(23),x.push(o.mask)}function S(x){const R=p[x.type];let b;if(R){const N=Ti[R];b=Rw.clone(N.uniforms)}else b=x.uniforms;return b}function y(x,R){let b=f.get(R);return b!==void 0?++b.usedTimes:(b=new sb(t,R,x,r),c.push(b),f.set(R,b)),b}function w(x){if(--x.usedTimes===0){const R=c.indexOf(x);c[R]=c[c.length-1],c.pop(),f.delete(x.cacheKey),x.destroy()}}function T(x){a.remove(x)}function C(){a.dispose()}return{getParameters:M,getProgramCacheKey:m,getUniforms:S,acquireProgram:y,releaseProgram:w,releaseShaderCache:T,programs:c,dispose:C}}function fb(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function db(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function c0(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function u0(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(u){let p=0;return u.isInstancedMesh&&(p+=2),u.isSkinnedMesh&&(p+=1),p}function a(u,p,g,M,m,d){let v=t[e];return v===void 0?(v={id:u.id,object:u,geometry:p,material:g,materialVariant:o(u),groupOrder:M,renderOrder:u.renderOrder,z:m,group:d},t[e]=v):(v.id=u.id,v.object=u,v.geometry=p,v.material=g,v.materialVariant=o(u),v.groupOrder=M,v.renderOrder=u.renderOrder,v.z=m,v.group=d),e++,v}function l(u,p,g,M,m,d,v){v.reversedDepth===!0&&(m=-m);const S=a(u,p,g,M,m,d);g.transmission>0?i.push(S):g.transparent===!0?r.push(S):n.push(S)}function c(u,p,g,M,m,d){const v=a(u,p,g,M,m,d);g.transmission>0?i.unshift(v):g.transparent===!0?r.unshift(v):n.unshift(v)}function f(u,p){n.length>1&&n.sort(u||db),i.length>1&&i.sort(p||c0),r.length>1&&r.sort(p||c0)}function h(){for(let u=e,p=t.length;u<p;u++){const g=t[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:h,sort:f}}function hb(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new u0,t.set(i,[o])):r>=s.length?(o=new u0,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function pb(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={direction:new F,color:new at};break;case"SpotLight":n={position:new F,direction:new F,color:new at,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new F,color:new at,distance:0,decay:0};break;case"HemisphereLight":n={direction:new F,skyColor:new at,groundColor:new at};break;case"RectAreaLight":n={color:new at,position:new F,halfWidth:new F,halfHeight:new F};break}return t[e.id]=n,n}}}function mb(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let gb=0;function vb(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function _b(t){const e=new pb,n=mb(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new F);const r=new F,s=new Tt,o=new Tt;function a(c){let f=0,h=0,u=0;for(let X=0;X<9;X++)i.probe[X].set(0,0,0);let p=0,g=0,M=0,m=0,d=0,v=0,S=0,y=0,w=0,T=0,C=0,x=0,R=0,b=0;c.sort(vb);for(let X=0,L=c.length;X<L;X++){const D=c[X],I=D.color,q=D.intensity,W=D.distance;let V=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===ds?V=D.shadow.map.texture:V=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)f+=I.r*q,h+=I.g*q,u+=I.b*q;else if(D.isLightProbe){for(let O=0;O<9;O++)i.probe[O].addScaledVector(D.sh.coefficients[O],q);b++}else if(D.isSunLight){const O=e.get(D);if(O.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const G=D.shadow,ee=n.get(D);ee.shadowIntensity=G.intensity,ee.shadowBias=G.bias,ee.shadowNormalBias=G.normalBias,ee.shadowRadius=G.radius,ee.shadowMapSize.copy(G.mapSize).multiply(G.getFrameExtents()),i.sunShadow[g]=ee,i.sunShadowMap[g]=V;const Se=G.getViewportCount();for(let Le=0;Le<Se;Le++)i.sunShadowMatrix[M+Le]=G.getMatrix(Le),i.sunShadowCascade[M+Le]=G._cascadeData[Le];M+=Se,g++}i.sun[p]=O,p++}else if(D.isDirectionalLight){const O=e.get(D);if(O.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const G=D.shadow,ee=n.get(D);ee.shadowIntensity=G.intensity,ee.shadowBias=G.bias,ee.shadowNormalBias=G.normalBias,ee.shadowRadius=G.radius,ee.shadowMapSize=G.mapSize,i.directionalShadow[m]=ee,i.directionalShadowMap[m]=V,i.directionalShadowMatrix[m]=D.shadow.matrix,w++}i.directional[m]=O,m++}else if(D.isSpotLight){const O=e.get(D);O.position.setFromMatrixPosition(D.matrixWorld),O.color.copy(I).multiplyScalar(q),O.distance=W,O.coneCos=Math.cos(D.angle),O.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),O.decay=D.decay,i.spot[v]=O;const G=D.shadow;if(D.map&&(i.spotLightMap[x]=D.map,x++,G.updateMatrices(D),D.castShadow&&R++),i.spotLightMatrix[v]=G.matrix,D.castShadow){const ee=n.get(D);ee.shadowIntensity=G.intensity,ee.shadowBias=G.bias,ee.shadowNormalBias=G.normalBias,ee.shadowRadius=G.radius,ee.shadowMapSize=G.mapSize,i.spotShadow[v]=ee,i.spotShadowMap[v]=V,C++}v++}else if(D.isRectAreaLight){const O=e.get(D);O.color.copy(I).multiplyScalar(q),O.halfWidth.set(D.width*.5,0,0),O.halfHeight.set(0,D.height*.5,0),i.rectArea[S]=O,S++}else if(D.isPointLight){const O=e.get(D);if(O.color.copy(D.color).multiplyScalar(D.intensity),O.distance=D.distance,O.decay=D.decay,D.castShadow){const G=D.shadow,ee=n.get(D);ee.shadowIntensity=G.intensity,ee.shadowBias=G.bias,ee.shadowNormalBias=G.normalBias,ee.shadowRadius=G.radius,ee.shadowMapSize=G.mapSize,ee.shadowCameraNear=G.camera.near,ee.shadowCameraFar=G.camera.far,i.pointShadow[d]=ee,i.pointShadowMap[d]=V,i.pointShadowMatrix[d]=D.shadow.matrix,T++}i.point[d]=O,d++}else if(D.isHemisphereLight){const O=e.get(D);O.skyColor.copy(D.color).multiplyScalar(q),O.groundColor.copy(D.groundColor).multiplyScalar(q),i.hemi[y]=O,y++}}S>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Fe.LTC_FLOAT_1,i.rectAreaLTC2=Fe.LTC_FLOAT_2):(i.rectAreaLTC1=Fe.LTC_HALF_1,i.rectAreaLTC2=Fe.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=h,i.ambient[2]=u;const N=i.hash;(N.sunLength!==p||N.directionalLength!==m||N.pointLength!==d||N.spotLength!==v||N.rectAreaLength!==S||N.hemiLength!==y||N.numSunShadows!==g||N.numDirectionalShadows!==w||N.numPointShadows!==T||N.numSpotShadows!==C||N.numSpotMaps!==x||N.numLightProbes!==b)&&(i.sun.length=p,i.directional.length=m,i.spot.length=v,i.rectArea.length=S,i.point.length=d,i.hemi.length=y,i.sunShadow.length=g,i.sunShadowMap.length=g,i.sunShadowMatrix.length=M,i.sunShadowCascade.length=M,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.directionalShadowMatrix.length=w,i.pointShadow.length=T,i.pointShadowMap.length=T,i.pointShadowMatrix.length=T,i.spotShadow.length=C,i.spotShadowMap.length=C,i.spotLightMatrix.length=C+x-R,i.spotLightMap.length=x,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=b,N.sunLength=p,N.directionalLength=m,N.pointLength=d,N.spotLength=v,N.rectAreaLength=S,N.hemiLength=y,N.numSunShadows=g,N.numDirectionalShadows=w,N.numPointShadows=T,N.numSpotShadows=C,N.numSpotMaps=x,N.numLightProbes=b,i.version=gb++)}function l(c,f){let h=0,u=0,p=0,g=0,M=0,m=0;const d=f.matrixWorldInverse;for(let v=0,S=c.length;v<S;v++){const y=c[v];if(y.isSunLight){const w=i.sun[h];w.direction.setFromMatrixPosition(y.matrixWorld),w.direction.transformDirection(d),h++}else if(y.isDirectionalLight){const w=i.directional[u];w.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(d),u++}else if(y.isSpotLight){const w=i.spot[g];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(d),w.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(d),g++}else if(y.isRectAreaLight){const w=i.rectArea[M];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(d),o.identity(),s.copy(y.matrixWorld),s.premultiply(d),o.extractRotation(s),w.halfWidth.set(y.width*.5,0,0),w.halfHeight.set(0,y.height*.5,0),w.halfWidth.applyMatrix4(o),w.halfHeight.applyMatrix4(o),M++}else if(y.isPointLight){const w=i.point[p];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(d),p++}else if(y.isHemisphereLight){const w=i.hemi[m];w.direction.setFromMatrixPosition(y.matrixWorld),w.direction.transformDirection(d),m++}}}return{setup:a,setupView:l,state:i}}function f0(t){const e=new _b(t),n=[],i=[],r=[];function s(u){h.camera=u,n.length=0,i.length=0,r.length=0}function o(u){n.push(u)}function a(u){i.push(u)}function l(u){r.push(u)}function c(){e.setup(n)}function f(u){e.setupView(n,u)}const h={lightsArray:n,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:h,setupLights:c,setupLightsView:f,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function xb(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new f0(t),e.set(r,[a])):s>=o.length?(a=new f0(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}const yb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Sb=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Mb=[new F(1,0,0),new F(-1,0,0),new F(0,1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1)],Eb=[new F(0,-1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1),new F(0,-1,0),new F(0,-1,0)],d0=new Tt,Bo=new F,Mf=new F;function wb(t,e,n){let i=new bp;const r=new De,s=new De,o=new bt,a=new Nw,l=new Dw,c={},f=n.maxTextureSize,h={[us]:Dn,[Dn]:us,[di]:di},u=new Fi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new De},radius:{value:4}},vertexShader:yb,fragmentShader:Sb}),p=u.clone();p.defines.HORIZONTAL_PASS=1;const g=new $n;g.setAttribute("position",new ei(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new en(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ql;let d=this.type;this.render=function(T,C,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;this.type===GE&&(et("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ql);const R=t.getRenderTarget(),b=t.getActiveCubeFace(),N=t.getActiveMipmapLevel(),X=t.state;X.setBlending(Qi),X.buffers.depth.getReversed()===!0?X.buffers.color.setClear(0,0,0,0):X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);const L=d!==this.type;L&&C.traverse(function(D){D.material&&(Array.isArray(D.material)?D.material.forEach(I=>I.needsUpdate=!0):D.material.needsUpdate=!0)});for(let D=0,I=T.length;D<I;D++){const q=T[D],W=q.shadow;if(W===void 0){et("WebGLShadowMap:",q,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;r.copy(W.mapSize);const V=W.getFrameExtents();r.multiply(V),s.copy(W.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/V.x),r.x=s.x*V.x,W.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/V.y),r.y=s.y*V.y,W.mapSize.y=s.y));const O=t.state.buffers.depth.getReversed();if(W.camera._reversedDepth=O,W.map===null||L===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===Xo){if(q.isPointLight){et("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new vi(r.x,r.y,{format:ds,type:Ii,minFilter:nn,magFilter:nn,generateMipmaps:!1}),W.map.texture.name=q.name+".shadowMap",W.map.depthTexture=new La(r.x,r.y,Ri),W.map.depthTexture.name=q.name+".shadowMapDepth",W.map.depthTexture.format=sr,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=tn,W.map.depthTexture.magFilter=tn}else q.isPointLight?(W.map=new zx(r.x),W.map.depthTexture=new Y1(r.x,Di)):(W.map=new vi(r.x,r.y),W.map.depthTexture=new La(r.x,r.y,Di)),W.map.depthTexture.name=q.name+".shadowMap",W.map.depthTexture.format=sr,this.type===Ql?(W.map.depthTexture.compareFunction=O?wp:Ep,W.map.depthTexture.minFilter=nn,W.map.depthTexture.magFilter=nn):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=tn,W.map.depthTexture.magFilter=tn);W.camera.updateProjectionMatrix()}W.map.isWebGLCubeRenderTarget!==!0&&(W.map.width!==r.x||W.map.height!==r.y)&&W.map.setSize(r.x,r.y);const G=W.map.isWebGLCubeRenderTarget?6:W.getViewportCount();q.isPointLight!==!0&&W.updateMatrices(q,x);for(let ee=0;ee<G;ee++){const Se=W.getCamera(ee);if(q.isPointLight){const Le=W.camera,Ye=W.matrix,qe=q.distance||Le.far;qe!==Le.far&&(Le.far=qe,Le.updateProjectionMatrix()),Bo.setFromMatrixPosition(q.matrixWorld),Le.position.copy(Bo),Mf.copy(Le.position),Mf.add(Mb[ee]),Le.up.copy(Eb[ee]),Le.lookAt(Mf),Le.updateMatrixWorld(),Ye.makeTranslation(-Bo.x,-Bo.y,-Bo.z),d0.multiplyMatrices(Le.projectionMatrix,Le.matrixWorldInverse),W._frustum.setFromProjectionMatrix(d0,Le.coordinateSystem,Le.reversedDepth)}if(W.map.isWebGLCubeRenderTarget)t.setRenderTarget(W.map,ee),t.clear();else{ee===0&&(t.setRenderTarget(W.map),t.clear());const Le=W.getViewport(ee);o.set(s.x*Le.x,s.y*Le.y,s.x*Le.z,s.y*Le.w),X.viewport(o)}i=W.getFrustum(ee),y(C,x,Se,q,this.type)}W.isPointLightShadow!==!0&&this.type===Xo&&v(W,x),W.needsUpdate=!1}d=this.type,m.needsUpdate=!1,t.setRenderTarget(R,b,N)};function v(T,C){const x=e.update(M);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null?T.mapPass=new vi(r.x,r.y,{format:ds,type:Ii}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),u.uniforms.shadow_pass.value=T.map.depthTexture,u.uniforms.resolution.value.set(T.map.width,T.map.height),u.uniforms.radius.value=T.radius,t.setRenderTarget(T.mapPass),t.clear(),t.renderBufferDirect(C,null,x,u,M,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value.set(T.map.width,T.map.height),p.uniforms.radius.value=T.radius,t.setRenderTarget(T.map),t.clear(),t.renderBufferDirect(C,null,x,p,M,null)}function S(T,C,x,R){let b=null;const N=x.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(N!==void 0)b=N;else if(b=x.isPointLight===!0?l:a,t.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const X=b.uuid,L=C.uuid;let D=c[X];D===void 0&&(D={},c[X]=D);let I=D[L];I===void 0&&(I=b.clone(),D[L]=I,C.addEventListener("dispose",w)),b=I}if(b.visible=C.visible,b.wireframe=C.wireframe,R===Xo?b.side=C.shadowSide!==null?C.shadowSide:C.side:b.side=C.shadowSide!==null?C.shadowSide:h[C.side],b.alphaMap=C.alphaMap,b.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,b.map=C.map,b.clipShadows=C.clipShadows,b.clippingPlanes=C.clippingPlanes,b.clipIntersection=C.clipIntersection,b.displacementMap=C.displacementMap,b.displacementScale=C.displacementScale,b.displacementBias=C.displacementBias,b.wireframeLinewidth=C.wireframeLinewidth,b.linewidth=C.linewidth,x.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const X=t.properties.get(b);X.light=x}return b}function y(T,C,x,R,b){if(T.visible===!1)return;if(T.layers.test(C.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&b===Xo)&&(!T.frustumCulled||T.intersectsFrustum(i))){T.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,T.matrixWorld);const L=e.update(T),D=T.material;if(Array.isArray(D)){const I=L.groups;for(let q=0,W=I.length;q<W;q++){const V=I[q],O=D[V.materialIndex];if(O&&O.visible){const G=S(T,O,R,b);T.onBeforeShadow(t,T,C,x,L,G,V),t.renderBufferDirect(x,null,L,G,T,V),T.onAfterShadow(t,T,C,x,L,G,V)}}}else if(D.visible){const I=S(T,D,R,b);T.onBeforeShadow(t,T,C,x,L,I,null),t.renderBufferDirect(x,null,L,I,T,null),T.onAfterShadow(t,T,C,x,L,I,null)}}const X=T.children;for(let L=0,D=X.length;L<D;L++)y(X[L],C,x,R,b)}function w(T){T.target.removeEventListener("dispose",w);for(const x in c){const R=c[x],b=T.target.uuid;b in R&&(R[b].dispose(),delete R[b])}}}function Tb(t,e){function n(){let B=!1;const Pe=new bt;let oe=null;const de=new bt(0,0,0,0);return{setMask:function(pe){oe!==pe&&!B&&(t.colorMask(pe,pe,pe,pe),oe=pe)},setLocked:function(pe){B=pe},setClear:function(pe,re,Ie,ze,rt){rt===!0&&(pe*=ze,re*=ze,Ie*=ze),Pe.set(pe,re,Ie,ze),de.equals(Pe)===!1&&(t.clearColor(pe,re,Ie,ze),de.copy(Pe))},reset:function(){B=!1,oe=null,de.set(-1,0,0,0)}}}function i(){let B=!1,Pe=!1,oe=null,de=null,pe=null;return{setReversed:function(re){if(Pe!==re){const Ie=e.get("EXT_clip_control");re?Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.ZERO_TO_ONE_EXT):Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.NEGATIVE_ONE_TO_ONE_EXT),Pe=re;const ze=pe;pe=null,this.setClear(ze)}},getReversed:function(){return Pe},setTest:function(re){re?$(t.DEPTH_TEST):se(t.DEPTH_TEST)},setMask:function(re){oe!==re&&!B&&(t.depthMask(re),oe=re)},setFunc:function(re){if(Pe&&(re=w1[re]),de!==re){switch(re){case Ed:t.depthFunc(t.NEVER);break;case wd:t.depthFunc(t.ALWAYS);break;case Td:t.depthFunc(t.LESS);break;case Ca:t.depthFunc(t.LEQUAL);break;case Ad:t.depthFunc(t.EQUAL);break;case Cd:t.depthFunc(t.GEQUAL);break;case Rd:t.depthFunc(t.GREATER);break;case bd:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}de=re}},setLocked:function(re){B=re},setClear:function(re){pe!==re&&(pe=re,Pe&&(re=1-re),t.clearDepth(re))},reset:function(){B=!1,oe=null,de=null,pe=null,Pe=!1}}}function r(){let B=!1,Pe=null,oe=null,de=null,pe=null,re=null,Ie=null,ze=null,rt=null;return{setTest:function(it){B||(it?$(t.STENCIL_TEST):se(t.STENCIL_TEST))},setMask:function(it){Pe!==it&&!B&&(t.stencilMask(it),Pe=it)},setFunc:function(it,It,Ut){(oe!==it||de!==It||pe!==Ut)&&(t.stencilFunc(it,It,Ut),oe=it,de=It,pe=Ut)},setOp:function(it,It,Ut){(re!==it||Ie!==It||ze!==Ut)&&(t.stencilOp(it,It,Ut),re=it,Ie=It,ze=Ut)},setLocked:function(it){B=it},setClear:function(it){rt!==it&&(t.clearStencil(it),rt=it)},reset:function(){B=!1,Pe=null,oe=null,de=null,pe=null,re=null,Ie=null,ze=null,rt=null}}}const s=new n,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let f={},h={},u={},p=new WeakMap,g=[],M=null,m=!1,d=null,v=null,S=null,y=null,w=null,T=null,C=null,x=new at(0,0,0),R=0,b=!1,N=null,X=null,L=null,D=null,I=null;const q=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,V=0;const O=t.getParameter(t.VERSION);O.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(O)[1]),W=V>=1):O.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),W=V>=2);let G=null,ee={};const Se=t.getParameter(t.SCISSOR_BOX),Le=t.getParameter(t.VIEWPORT),Ye=new bt().fromArray(Se),qe=new bt().fromArray(Le);function $e(B,Pe,oe,de){const pe=new Uint8Array(4),re=t.createTexture();t.bindTexture(B,re),t.texParameteri(B,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(B,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ie=0;Ie<oe;Ie++)B===t.TEXTURE_3D||B===t.TEXTURE_2D_ARRAY?t.texImage3D(Pe,0,t.RGBA,1,1,de,0,t.RGBA,t.UNSIGNED_BYTE,pe):t.texImage2D(Pe+Ie,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,pe);return re}const U={};U[t.TEXTURE_2D]=$e(t.TEXTURE_2D,t.TEXTURE_2D,1),U[t.TEXTURE_CUBE_MAP]=$e(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),U[t.TEXTURE_2D_ARRAY]=$e(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),U[t.TEXTURE_3D]=$e(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),$(t.DEPTH_TEST),o.setFunc(Ca),ce(!1),_e(cg),$(t.CULL_FACE),he(Qi);function $(B){f[B]!==!0&&(t.enable(B),f[B]=!0)}function se(B){f[B]!==!1&&(t.disable(B),f[B]=!1)}function Ce(B,Pe){return u[B]!==Pe?(t.bindFramebuffer(B,Pe),u[B]=Pe,B===t.DRAW_FRAMEBUFFER&&(u[t.FRAMEBUFFER]=Pe),B===t.FRAMEBUFFER&&(u[t.DRAW_FRAMEBUFFER]=Pe),!0):!1}function Re(B,Pe){let oe=g,de=!1;if(B){oe=p.get(Pe),oe===void 0&&(oe=[],p.set(Pe,oe));const pe=B.textures;if(oe.length!==pe.length||oe[0]!==t.COLOR_ATTACHMENT0){for(let re=0,Ie=pe.length;re<Ie;re++)oe[re]=t.COLOR_ATTACHMENT0+re;oe.length=pe.length,de=!0}}else oe[0]!==t.BACK&&(oe[0]=t.BACK,de=!0);de&&t.drawBuffers(oe)}function Oe(B){return M!==B?(t.useProgram(B),M=B,!0):!1}const Ke={[Fs]:t.FUNC_ADD,[XE]:t.FUNC_SUBTRACT,[$E]:t.FUNC_REVERSE_SUBTRACT};Ke[YE]=t.MIN,Ke[qE]=t.MAX;const ie={[KE]:t.ZERO,[ZE]:t.ONE,[jE]:t.SRC_COLOR,[Q_]:t.SRC_ALPHA,[i1]:t.SRC_ALPHA_SATURATE,[t1]:t.DST_COLOR,[QE]:t.DST_ALPHA,[JE]:t.ONE_MINUS_SRC_COLOR,[ex]:t.ONE_MINUS_SRC_ALPHA,[n1]:t.ONE_MINUS_DST_COLOR,[e1]:t.ONE_MINUS_DST_ALPHA,[r1]:t.CONSTANT_COLOR,[s1]:t.ONE_MINUS_CONSTANT_COLOR,[o1]:t.CONSTANT_ALPHA,[a1]:t.ONE_MINUS_CONSTANT_ALPHA};function he(B,Pe,oe,de,pe,re,Ie,ze,rt,it){if(B===Qi){m===!0&&(se(t.BLEND),m=!1);return}if(m===!1&&($(t.BLEND),m=!0),B!==WE){if(B!==d||it!==b){if((v!==Fs||w!==Fs)&&(t.blendEquation(t.FUNC_ADD),v=Fs,w=Fs),it)switch(B){case ra:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case ug:t.blendFunc(t.ONE,t.ONE);break;case fg:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case dg:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:dt("WebGLState: Invalid blending: ",B);break}else switch(B){case ra:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case ug:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case fg:dt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case dg:dt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:dt("WebGLState: Invalid blending: ",B);break}S=null,y=null,T=null,C=null,x.set(0,0,0),R=0,d=B,b=it}return}pe=pe||Pe,re=re||oe,Ie=Ie||de,(Pe!==v||pe!==w)&&(t.blendEquationSeparate(Ke[Pe],Ke[pe]),v=Pe,w=pe),(oe!==S||de!==y||re!==T||Ie!==C)&&(t.blendFuncSeparate(ie[oe],ie[de],ie[re],ie[Ie]),S=oe,y=de,T=re,C=Ie),(ze.equals(x)===!1||rt!==R)&&(t.blendColor(ze.r,ze.g,ze.b,rt),x.copy(ze),R=rt),d=B,b=!1}function ue(B,Pe){B.side===di?se(t.CULL_FACE):$(t.CULL_FACE);let oe=B.side===Dn;Pe&&(oe=!oe),ce(oe),B.blending===ra&&B.transparent===!1?he(Qi):he(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),o.setFunc(B.depthFunc),o.setTest(B.depthTest),o.setMask(B.depthWrite),s.setMask(B.colorWrite);const de=B.stencilWrite;a.setTest(de),de&&(a.setMask(B.stencilWriteMask),a.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),a.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),fe(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?$(t.SAMPLE_ALPHA_TO_COVERAGE):se(t.SAMPLE_ALPHA_TO_COVERAGE)}function ce(B){N!==B&&(B?t.frontFace(t.CW):t.frontFace(t.CCW),N=B)}function _e(B){B!==VE?($(t.CULL_FACE),B!==X&&(B===cg?t.cullFace(t.BACK):B===HE?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):se(t.CULL_FACE),X=B}function Q(B){B!==L&&(W&&t.lineWidth(B),L=B)}function fe(B,Pe,oe){B?($(t.POLYGON_OFFSET_FILL),(D!==Pe||I!==oe)&&(D=Pe,I=oe,o.getReversed()&&(Pe=-Pe),t.polygonOffset(Pe,oe))):se(t.POLYGON_OFFSET_FILL)}function Ee(B){B?$(t.SCISSOR_TEST):se(t.SCISSOR_TEST)}function ve(B){B===void 0&&(B=t.TEXTURE0+q-1),G!==B&&(t.activeTexture(B),G=B)}function P(B,Pe,oe){oe===void 0&&(G===null?oe=t.TEXTURE0+q-1:oe=G);let de=ee[oe];de===void 0&&(de={type:void 0,texture:void 0},ee[oe]=de),(de.type!==B||de.texture!==Pe)&&(G!==oe&&(t.activeTexture(oe),G=oe),t.bindTexture(B,Pe||U[B]),de.type=B,de.texture=Pe)}function Be(){const B=ee[G];B!==void 0&&B.type!==void 0&&(t.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function He(){try{t.compressedTexImage2D(...arguments)}catch(B){dt("WebGLState:",B)}}function A(){try{t.compressedTexImage3D(...arguments)}catch(B){dt("WebGLState:",B)}}function _(){try{t.texSubImage2D(...arguments)}catch(B){dt("WebGLState:",B)}}function z(){try{t.texSubImage3D(...arguments)}catch(B){dt("WebGLState:",B)}}function J(){try{t.compressedTexSubImage2D(...arguments)}catch(B){dt("WebGLState:",B)}}function H(){try{t.compressedTexSubImage3D(...arguments)}catch(B){dt("WebGLState:",B)}}function xe(){try{t.texStorage2D(...arguments)}catch(B){dt("WebGLState:",B)}}function Te(){try{t.texStorage3D(...arguments)}catch(B){dt("WebGLState:",B)}}function ne(){try{t.texImage2D(...arguments)}catch(B){dt("WebGLState:",B)}}function ae(){try{t.texImage3D(...arguments)}catch(B){dt("WebGLState:",B)}}function Ae(B){return h[B]!==void 0?h[B]:t.getParameter(B)}function Ne(B,Pe){h[B]!==Pe&&(t.pixelStorei(B,Pe),h[B]=Pe)}function we(B){Ye.equals(B)===!1&&(t.scissor(B.x,B.y,B.z,B.w),Ye.copy(B))}function be(B){qe.equals(B)===!1&&(t.viewport(B.x,B.y,B.z,B.w),qe.copy(B))}function Ge(B,Pe){let oe=c.get(Pe);oe===void 0&&(oe=new WeakMap,c.set(Pe,oe));let de=oe.get(B);de===void 0&&(de=t.getUniformBlockIndex(Pe,B.name),oe.set(B,de))}function Xe(B,Pe){const de=c.get(Pe).get(B);l.get(Pe)!==de&&(t.uniformBlockBinding(Pe,de,B.__bindingPointIndex),l.set(Pe,de))}function je(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),f={},h={},G=null,ee={},u={},p=new WeakMap,g=[],M=null,m=!1,d=null,v=null,S=null,y=null,w=null,T=null,C=null,x=new at(0,0,0),R=0,b=!1,N=null,X=null,L=null,D=null,I=null,Ye.set(0,0,t.canvas.width,t.canvas.height),qe.set(0,0,t.canvas.width,t.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:$,disable:se,bindFramebuffer:Ce,drawBuffers:Re,useProgram:Oe,setBlending:he,setMaterial:ue,setFlipSided:ce,setCullFace:_e,setLineWidth:Q,setPolygonOffset:fe,setScissorTest:Ee,activeTexture:ve,bindTexture:P,unbindTexture:Be,compressedTexImage2D:He,compressedTexImage3D:A,texImage2D:ne,texImage3D:ae,pixelStorei:Ne,getParameter:Ae,updateUBOMapping:Ge,uniformBlockBinding:Xe,texStorage2D:xe,texStorage3D:Te,texSubImage2D:_,texSubImage3D:z,compressedTexSubImage2D:J,compressedTexSubImage3D:H,scissor:we,viewport:be,reset:je}}function Ab(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new De,f=new WeakMap,h=new Set;let u;const p=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(A,_){return g?new OffscreenCanvas(A,_):Oc("canvas")}function m(A,_,z){let J=1;const H=He(A);if((H.width>z||H.height>z)&&(J=z/Math.max(H.width,H.height)),J<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const xe=Math.floor(J*H.width),Te=Math.floor(J*H.height);u===void 0&&(u=M(xe,Te));const ne=_?M(xe,Te):u;return ne.width=xe,ne.height=Te,ne.getContext("2d").drawImage(A,0,0,xe,Te),et("WebGLRenderer: Texture has been resized from ("+H.width+"x"+H.height+") to ("+xe+"x"+Te+")."),ne}else return"data"in A&&et("WebGLRenderer: Image in DataTexture is too big ("+H.width+"x"+H.height+")."),A;return A}function d(A){return A.generateMipmaps}function v(A){t.generateMipmap(A)}function S(A){return A.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?t.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function y(A,_,z,J,H,xe=!1){if(A!==null){if(t[A]!==void 0)return t[A];et("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let Te;J&&(Te=e.get("EXT_texture_norm16"),Te||et("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ne=_;if(_===t.RED&&(z===t.FLOAT&&(ne=t.R32F),z===t.HALF_FLOAT&&(ne=t.R16F),z===t.UNSIGNED_BYTE&&(ne=t.R8),z===t.UNSIGNED_SHORT&&Te&&(ne=Te.R16_EXT),z===t.SHORT&&Te&&(ne=Te.R16_SNORM_EXT)),_===t.RED_INTEGER&&(z===t.UNSIGNED_BYTE&&(ne=t.R8UI),z===t.UNSIGNED_SHORT&&(ne=t.R16UI),z===t.UNSIGNED_INT&&(ne=t.R32UI),z===t.BYTE&&(ne=t.R8I),z===t.SHORT&&(ne=t.R16I),z===t.INT&&(ne=t.R32I)),_===t.RG&&(z===t.FLOAT&&(ne=t.RG32F),z===t.HALF_FLOAT&&(ne=t.RG16F),z===t.UNSIGNED_BYTE&&(ne=t.RG8),z===t.UNSIGNED_SHORT&&Te&&(ne=Te.RG16_EXT),z===t.SHORT&&Te&&(ne=Te.RG16_SNORM_EXT)),_===t.RG_INTEGER&&(z===t.UNSIGNED_BYTE&&(ne=t.RG8UI),z===t.UNSIGNED_SHORT&&(ne=t.RG16UI),z===t.UNSIGNED_INT&&(ne=t.RG32UI),z===t.BYTE&&(ne=t.RG8I),z===t.SHORT&&(ne=t.RG16I),z===t.INT&&(ne=t.RG32I)),_===t.RGB_INTEGER&&(z===t.UNSIGNED_BYTE&&(ne=t.RGB8UI),z===t.UNSIGNED_SHORT&&(ne=t.RGB16UI),z===t.UNSIGNED_INT&&(ne=t.RGB32UI),z===t.BYTE&&(ne=t.RGB8I),z===t.SHORT&&(ne=t.RGB16I),z===t.INT&&(ne=t.RGB32I)),_===t.RGBA_INTEGER&&(z===t.UNSIGNED_BYTE&&(ne=t.RGBA8UI),z===t.UNSIGNED_SHORT&&(ne=t.RGBA16UI),z===t.UNSIGNED_INT&&(ne=t.RGBA32UI),z===t.BYTE&&(ne=t.RGBA8I),z===t.SHORT&&(ne=t.RGBA16I),z===t.INT&&(ne=t.RGBA32I)),_===t.RGB&&(z===t.UNSIGNED_SHORT&&Te&&(ne=Te.RGB16_EXT),z===t.SHORT&&Te&&(ne=Te.RGB16_SNORM_EXT),z===t.UNSIGNED_INT_5_9_9_9_REV&&(ne=t.RGB9_E5),z===t.UNSIGNED_INT_10F_11F_11F_REV&&(ne=t.R11F_G11F_B10F)),_===t.RGBA){const ae=xe?Fc:ut.getTransfer(H);z===t.FLOAT&&(ne=t.RGBA32F),z===t.HALF_FLOAT&&(ne=t.RGBA16F),z===t.UNSIGNED_BYTE&&(ne=ae===_t?t.SRGB8_ALPHA8:t.RGBA8),z===t.UNSIGNED_SHORT&&Te&&(ne=Te.RGBA16_EXT),z===t.SHORT&&Te&&(ne=Te.RGBA16_SNORM_EXT),z===t.UNSIGNED_SHORT_4_4_4_4&&(ne=t.RGBA4),z===t.UNSIGNED_SHORT_5_5_5_1&&(ne=t.RGB5_A1)}return(ne===t.R16F||ne===t.R32F||ne===t.RG16F||ne===t.RG32F||ne===t.RGBA16F||ne===t.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function w(A,_){let z;return A?_===null||_===Di||_===ba?z=t.DEPTH24_STENCIL8:_===Ri?z=t.DEPTH32F_STENCIL8:_===Ra&&(z=t.DEPTH24_STENCIL8,et("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Di||_===ba?z=t.DEPTH_COMPONENT24:_===Ri?z=t.DEPTH_COMPONENT32F:_===Ra&&(z=t.DEPTH_COMPONENT16),z}function T(A,_){return d(A)===!0||A.isFramebufferTexture&&A.minFilter!==tn&&A.minFilter!==nn?Math.log2(Math.max(_.width,_.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?_.mipmaps.length:1}function C(A){const _=A.target;_.removeEventListener("dispose",C),R(_),_.isVideoTexture&&f.delete(_),_.isHTMLTexture&&h.delete(_)}function x(A){const _=A.target;_.removeEventListener("dispose",x),N(_)}function R(A){const _=i.get(A);if(_.__webglInit===void 0)return;const z=A.source,J=p.get(z);if(J){const H=J[_.__cacheKey];H.usedTimes--,H.usedTimes===0&&b(A),Object.keys(J).length===0&&p.delete(z)}i.remove(A)}function b(A){const _=i.get(A);t.deleteTexture(_.__webglTexture);const z=A.source,J=p.get(z);delete J[_.__cacheKey],o.memory.textures--}function N(A){const _=i.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),i.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(_.__webglFramebuffer[J]))for(let H=0;H<_.__webglFramebuffer[J].length;H++)t.deleteFramebuffer(_.__webglFramebuffer[J][H]);else t.deleteFramebuffer(_.__webglFramebuffer[J]);_.__webglDepthbuffer&&t.deleteRenderbuffer(_.__webglDepthbuffer[J])}else{if(Array.isArray(_.__webglFramebuffer))for(let J=0;J<_.__webglFramebuffer.length;J++)t.deleteFramebuffer(_.__webglFramebuffer[J]);else t.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&t.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&t.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let J=0;J<_.__webglColorRenderbuffer.length;J++)_.__webglColorRenderbuffer[J]&&t.deleteRenderbuffer(_.__webglColorRenderbuffer[J]);_.__webglDepthRenderbuffer&&t.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const z=A.textures;for(let J=0,H=z.length;J<H;J++){const xe=i.get(z[J]);xe.__webglTexture&&(t.deleteTexture(xe.__webglTexture),o.memory.textures--),i.remove(z[J])}i.remove(A)}let X=0;function L(){X=0}function D(){return X}function I(A){X=A}function q(){const A=X;return A>=r.maxTextures&&et("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+r.maxTextures),X+=1,A}function W(A){const _=[];return _.push(A.wrapS),_.push(A.wrapT),_.push(A.wrapR||0),_.push(A.magFilter),_.push(A.minFilter),_.push(A.anisotropy),_.push(A.internalFormat),_.push(A.format),_.push(A.type),_.push(A.generateMipmaps),_.push(A.premultiplyAlpha),_.push(A.flipY),_.push(A.unpackAlignment),_.push(A.colorSpace),_.join()}function V(A,_){const z=i.get(A);if(A.isVideoTexture&&P(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&z.__version!==A.version){const J=A.image;if(J===null)et("WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)et("WebGLRenderer: Texture marked for update but image is incomplete");else{se(z,A,_);return}}else A.isExternalTexture&&(z.__webglTexture=A.sourceTexture?A.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,z.__webglTexture,t.TEXTURE0+_)}function O(A,_){const z=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&z.__version!==A.version){se(z,A,_);return}else A.isExternalTexture&&(z.__webglTexture=A.sourceTexture?A.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,z.__webglTexture,t.TEXTURE0+_)}function G(A,_){const z=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&z.__version!==A.version){se(z,A,_);return}n.bindTexture(t.TEXTURE_3D,z.__webglTexture,t.TEXTURE0+_)}function ee(A,_){const z=i.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&z.__version!==A.version){Ce(z,A,_);return}n.bindTexture(t.TEXTURE_CUBE_MAP,z.__webglTexture,t.TEXTURE0+_)}const Se={[Br]:t.REPEAT,[Ci]:t.CLAMP_TO_EDGE,[Pd]:t.MIRRORED_REPEAT},Le={[tn]:t.NEAREST,[u1]:t.NEAREST_MIPMAP_NEAREST,[pl]:t.NEAREST_MIPMAP_LINEAR,[nn]:t.LINEAR,[Hu]:t.LINEAR_MIPMAP_NEAREST,[Cr]:t.LINEAR_MIPMAP_LINEAR},Ye={[p1]:t.NEVER,[x1]:t.ALWAYS,[m1]:t.LESS,[Ep]:t.LEQUAL,[g1]:t.EQUAL,[wp]:t.GEQUAL,[v1]:t.GREATER,[_1]:t.NOTEQUAL};function qe(A,_){if(_.type===Ri&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===nn||_.magFilter===Hu||_.magFilter===pl||_.magFilter===Cr||_.minFilter===nn||_.minFilter===Hu||_.minFilter===pl||_.minFilter===Cr)&&et("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(A,t.TEXTURE_WRAP_S,Se[_.wrapS]),t.texParameteri(A,t.TEXTURE_WRAP_T,Se[_.wrapT]),(A===t.TEXTURE_3D||A===t.TEXTURE_2D_ARRAY)&&t.texParameteri(A,t.TEXTURE_WRAP_R,Se[_.wrapR]),t.texParameteri(A,t.TEXTURE_MAG_FILTER,Le[_.magFilter]),t.texParameteri(A,t.TEXTURE_MIN_FILTER,Le[_.minFilter]),_.compareFunction&&(t.texParameteri(A,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(A,t.TEXTURE_COMPARE_FUNC,Ye[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===tn||_.minFilter!==pl&&_.minFilter!==Cr||_.type===Ri&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){const z=e.get("EXT_texture_filter_anisotropic");t.texParameterf(A,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function $e(A,_){let z=!1;A.__webglInit===void 0&&(A.__webglInit=!0,_.addEventListener("dispose",C));const J=_.source;let H=p.get(J);H===void 0&&(H={},p.set(J,H));const xe=W(_);if(xe!==A.__cacheKey){H[xe]===void 0&&(H[xe]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,z=!0),H[xe].usedTimes++;const Te=H[A.__cacheKey];Te!==void 0&&(H[A.__cacheKey].usedTimes--,Te.usedTimes===0&&b(_)),A.__cacheKey=xe,A.__webglTexture=H[xe].texture}return z}function U(A,_,z){return Math.floor(Math.floor(A/z)/_)}function $(A,_,z,J){const xe=A.updateRanges;if(xe.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,_.width,_.height,z,J,_.data);else{xe.sort((Ne,we)=>Ne.start-we.start);let Te=0;for(let Ne=1;Ne<xe.length;Ne++){const we=xe[Te],be=xe[Ne],Ge=we.start+we.count,Xe=U(be.start,_.width,4),je=U(we.start,_.width,4);be.start<=Ge+1&&Xe===je&&U(be.start+be.count-1,_.width,4)===Xe?we.count=Math.max(we.count,be.start+be.count-we.start):(++Te,xe[Te]=be)}xe.length=Te+1;const ne=n.getParameter(t.UNPACK_ROW_LENGTH),ae=n.getParameter(t.UNPACK_SKIP_PIXELS),Ae=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,_.width);for(let Ne=0,we=xe.length;Ne<we;Ne++){const be=xe[Ne],Ge=Math.floor(be.start/4),Xe=Math.ceil(be.count/4),je=Ge%_.width,B=Math.floor(Ge/_.width),Pe=Xe,oe=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,je),n.pixelStorei(t.UNPACK_SKIP_ROWS,B),n.texSubImage2D(t.TEXTURE_2D,0,je,B,Pe,oe,z,J,_.data)}A.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,ne),n.pixelStorei(t.UNPACK_SKIP_PIXELS,ae),n.pixelStorei(t.UNPACK_SKIP_ROWS,Ae)}}function se(A,_,z){let J=t.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(J=t.TEXTURE_2D_ARRAY),_.isData3DTexture&&(J=t.TEXTURE_3D);const H=$e(A,_),xe=_.source;n.bindTexture(J,A.__webglTexture,t.TEXTURE0+z);const Te=i.get(xe);if(xe.version!==Te.__version||H===!0){if(n.activeTexture(t.TEXTURE0+z),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){const oe=ut.getPrimaries(ut.workingColorSpace),de=_.colorSpace===Mr?null:ut.getPrimaries(_.colorSpace),pe=_.colorSpace===Mr||oe===de?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe)}n.pixelStorei(t.UNPACK_ALIGNMENT,_.unpackAlignment);let ae=m(_.image,!1,r.maxTextureSize);ae=Be(_,ae);const Ae=s.convert(_.format,_.colorSpace),Ne=s.convert(_.type);let we=y(_.internalFormat,Ae,Ne,_.normalized,_.colorSpace,_.isVideoTexture);qe(J,_);let be;const Ge=_.mipmaps,Xe=_.isVideoTexture!==!0,je=Te.__version===void 0||H===!0,B=xe.dataReady,Pe=T(_,ae);if(_.isDepthTexture)we=w(_.format===ns,_.type),je&&(Xe?n.texStorage2D(t.TEXTURE_2D,1,we,ae.width,ae.height):n.texImage2D(t.TEXTURE_2D,0,we,ae.width,ae.height,0,Ae,Ne,null));else if(_.isDataTexture)if(Ge.length>0){Xe&&je&&n.texStorage2D(t.TEXTURE_2D,Pe,we,Ge[0].width,Ge[0].height);for(let oe=0,de=Ge.length;oe<de;oe++)be=Ge[oe],Xe?B&&n.texSubImage2D(t.TEXTURE_2D,oe,0,0,be.width,be.height,Ae,Ne,be.data):n.texImage2D(t.TEXTURE_2D,oe,we,be.width,be.height,0,Ae,Ne,be.data);_.generateMipmaps=!1}else Xe?(je&&n.texStorage2D(t.TEXTURE_2D,Pe,we,ae.width,ae.height),B&&$(_,ae,Ae,Ne)):n.texImage2D(t.TEXTURE_2D,0,we,ae.width,ae.height,0,Ae,Ne,ae.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Xe&&je&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Pe,we,Ge[0].width,Ge[0].height,ae.depth);for(let oe=0,de=Ge.length;oe<de;oe++)if(be=Ge[oe],_.format!==pi)if(Ae!==null)if(Xe){if(B)if(_.layerUpdates.size>0){const pe=Xg(be.width,be.height,_.format,_.type);for(const re of _.layerUpdates){const Ie=be.data.subarray(re*pe/be.data.BYTES_PER_ELEMENT,(re+1)*pe/be.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,oe,0,0,re,be.width,be.height,1,Ae,Ie)}}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,oe,0,0,0,be.width,be.height,ae.depth,Ae,be.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,oe,we,be.width,be.height,ae.depth,0,be.data,0,0);else et("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Xe?B&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,oe,0,0,0,be.width,be.height,ae.depth,Ae,Ne,be.data):n.texImage3D(t.TEXTURE_2D_ARRAY,oe,we,be.width,be.height,ae.depth,0,Ae,Ne,be.data);_.layerUpdates.size>0&&_.clearLayerUpdates()}else{Xe&&je&&n.texStorage2D(t.TEXTURE_2D,Pe,we,Ge[0].width,Ge[0].height);for(let oe=0,de=Ge.length;oe<de;oe++)be=Ge[oe],_.format!==pi?Ae!==null?Xe?B&&n.compressedTexSubImage2D(t.TEXTURE_2D,oe,0,0,be.width,be.height,Ae,be.data):n.compressedTexImage2D(t.TEXTURE_2D,oe,we,be.width,be.height,0,be.data):et("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xe?B&&n.texSubImage2D(t.TEXTURE_2D,oe,0,0,be.width,be.height,Ae,Ne,be.data):n.texImage2D(t.TEXTURE_2D,oe,we,be.width,be.height,0,Ae,Ne,be.data)}else if(_.isDataArrayTexture)if(Xe){if(je&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Pe,we,ae.width,ae.height,ae.depth),B)if(_.layerUpdates.size>0){const oe=Xg(ae.width,ae.height,_.format,_.type);for(const de of _.layerUpdates){const pe=ae.data.subarray(de*oe/ae.data.BYTES_PER_ELEMENT,(de+1)*oe/ae.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,de,ae.width,ae.height,1,Ae,Ne,pe)}_.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,Ae,Ne,ae.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,we,ae.width,ae.height,ae.depth,0,Ae,Ne,ae.data);else if(_.isData3DTexture)Xe?(je&&n.texStorage3D(t.TEXTURE_3D,Pe,we,ae.width,ae.height,ae.depth),B&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,Ae,Ne,ae.data)):n.texImage3D(t.TEXTURE_3D,0,we,ae.width,ae.height,ae.depth,0,Ae,Ne,ae.data);else if(_.isFramebufferTexture){if(je)if(Xe)n.texStorage2D(t.TEXTURE_2D,Pe,we,ae.width,ae.height);else{let oe=ae.width,de=ae.height;for(let pe=0;pe<Pe;pe++)n.texImage2D(t.TEXTURE_2D,pe,we,oe,de,0,Ae,Ne,null),oe>>=1,de>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in t){const oe=t.canvas;if(oe.hasAttribute("layoutsubtree")||oe.setAttribute("layoutsubtree","true"),ae.parentNode!==oe){oe.appendChild(ae),h.add(_),oe.onpaint=de=>{const pe=de.changedElements;for(const re of h)pe.includes(re.image)&&(re.needsUpdate=!0)},oe.requestPaint();return}if(t.texElementImage2D.length===3)t.texElementImage2D(t.TEXTURE_2D,t.RGBA8,ae);else{const pe=t.RGBA,re=t.RGBA,Ie=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,0,pe,re,Ie,ae)}t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(Ge.length>0){if(Xe&&je){const oe=He(Ge[0]);n.texStorage2D(t.TEXTURE_2D,Pe,we,oe.width,oe.height)}for(let oe=0,de=Ge.length;oe<de;oe++)be=Ge[oe],Xe?B&&n.texSubImage2D(t.TEXTURE_2D,oe,0,0,Ae,Ne,be):n.texImage2D(t.TEXTURE_2D,oe,we,Ae,Ne,be);_.generateMipmaps=!1}else if(Xe){if(je){const oe=He(ae);n.texStorage2D(t.TEXTURE_2D,Pe,we,oe.width,oe.height)}B&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,Ae,Ne,ae)}else n.texImage2D(t.TEXTURE_2D,0,we,Ae,Ne,ae);d(_)&&v(J),Te.__version=xe.version,_.onUpdate&&_.onUpdate(_)}A.__version=_.version}function Ce(A,_,z){if(_.image.length!==6)return;const J=$e(A,_),H=_.source;n.bindTexture(t.TEXTURE_CUBE_MAP,A.__webglTexture,t.TEXTURE0+z);const xe=i.get(H);if(H.version!==xe.__version||J===!0){n.activeTexture(t.TEXTURE0+z);const Te=ut.getPrimaries(ut.workingColorSpace),ne=_.colorSpace===Mr?null:ut.getPrimaries(_.colorSpace),ae=_.colorSpace===Mr||Te===ne?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ae);const Ae=_.isCompressedTexture||_.image[0].isCompressedTexture,Ne=_.image[0]&&_.image[0].isDataTexture,we=[];for(let re=0;re<6;re++)!Ae&&!Ne?we[re]=m(_.image[re],!0,r.maxCubemapSize):we[re]=Ne?_.image[re].image:_.image[re],we[re]=Be(_,we[re]);const be=we[0],Ge=s.convert(_.format,_.colorSpace),Xe=s.convert(_.type),je=y(_.internalFormat,Ge,Xe,_.normalized,_.colorSpace),B=_.isVideoTexture!==!0,Pe=xe.__version===void 0||J===!0,oe=H.dataReady;let de=T(_,be);qe(t.TEXTURE_CUBE_MAP,_);let pe;if(Ae){B&&Pe&&n.texStorage2D(t.TEXTURE_CUBE_MAP,de,je,be.width,be.height);for(let re=0;re<6;re++){pe=we[re].mipmaps;for(let Ie=0;Ie<pe.length;Ie++){const ze=pe[Ie];_.format!==pi?Ge!==null?B?oe&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ie,0,0,ze.width,ze.height,Ge,ze.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ie,je,ze.width,ze.height,0,ze.data):et("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):B?oe&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ie,0,0,ze.width,ze.height,Ge,Xe,ze.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ie,je,ze.width,ze.height,0,Ge,Xe,ze.data)}}}else{if(pe=_.mipmaps,B&&Pe){pe.length>0&&de++;const re=He(we[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,de,je,re.width,re.height)}for(let re=0;re<6;re++)if(Ne){B?oe&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,we[re].width,we[re].height,Ge,Xe,we[re].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,je,we[re].width,we[re].height,0,Ge,Xe,we[re].data);for(let Ie=0;Ie<pe.length;Ie++){const rt=pe[Ie].image[re].image;B?oe&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ie+1,0,0,rt.width,rt.height,Ge,Xe,rt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ie+1,je,rt.width,rt.height,0,Ge,Xe,rt.data)}}else{B?oe&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,Ge,Xe,we[re]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,je,Ge,Xe,we[re]);for(let Ie=0;Ie<pe.length;Ie++){const ze=pe[Ie];B?oe&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ie+1,0,0,Ge,Xe,ze.image[re]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ie+1,je,Ge,Xe,ze.image[re])}}}d(_)&&v(t.TEXTURE_CUBE_MAP),xe.__version=H.version,_.onUpdate&&_.onUpdate(_)}A.__version=_.version}function Re(A,_,z,J,H,xe){const Te=s.convert(z.format,z.colorSpace),ne=s.convert(z.type),ae=y(z.internalFormat,Te,ne,z.normalized,z.colorSpace),Ae=i.get(_),Ne=i.get(z);if(Ne.__renderTarget=_,!Ae.__hasExternalTextures){const we=Math.max(1,_.width>>xe),be=Math.max(1,_.height>>xe);H===t.TEXTURE_3D||H===t.TEXTURE_2D_ARRAY?n.texImage3D(H,xe,ae,we,be,_.depth,0,Te,ne,null):n.texImage2D(H,xe,ae,we,be,0,Te,ne,null)}n.bindFramebuffer(t.FRAMEBUFFER,A),ve(_)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,J,H,Ne.__webglTexture,0,Ee(_)):(H===t.TEXTURE_2D||H>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&H<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,J,H,Ne.__webglTexture,xe),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Oe(A,_,z){if(t.bindRenderbuffer(t.RENDERBUFFER,A),_.depthBuffer){const J=_.depthTexture,H=J&&J.isDepthTexture?J.type:null,xe=w(_.stencilBuffer,H),Te=_.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;ve(_)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ee(_),xe,_.width,_.height):z?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ee(_),xe,_.width,_.height):t.renderbufferStorage(t.RENDERBUFFER,xe,_.width,_.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Te,t.RENDERBUFFER,A)}else{const J=_.textures;for(let H=0;H<J.length;H++){const xe=J[H],Te=s.convert(xe.format,xe.colorSpace),ne=s.convert(xe.type),ae=y(xe.internalFormat,Te,ne,xe.normalized,xe.colorSpace);ve(_)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ee(_),ae,_.width,_.height):z?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ee(_),ae,_.width,_.height):t.renderbufferStorage(t.RENDERBUFFER,ae,_.width,_.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Ke(A,_,z){const J=_.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,A),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const H=i.get(_.depthTexture);if(H.__renderTarget=_,(!H.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),J){if(H.__webglInit===void 0&&(H.__webglInit=!0,_.depthTexture.addEventListener("dispose",C)),H.__webglTexture===void 0){H.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,H.__webglTexture),qe(t.TEXTURE_CUBE_MAP,_.depthTexture);const Ae=s.convert(_.depthTexture.format),Ne=s.convert(_.depthTexture.type);let we;_.depthTexture.format===sr?we=t.DEPTH_COMPONENT24:_.depthTexture.format===ns&&(we=t.DEPTH24_STENCIL8);for(let be=0;be<6;be++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,we,_.width,_.height,0,Ae,Ne,null)}}else V(_.depthTexture,0);const xe=H.__webglTexture,Te=Ee(_),ne=J?t.TEXTURE_CUBE_MAP_POSITIVE_X+z:t.TEXTURE_2D,ae=_.depthTexture.format===ns?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(_.depthTexture.format===sr)ve(_)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ae,ne,xe,0,Te):t.framebufferTexture2D(t.FRAMEBUFFER,ae,ne,xe,0);else if(_.depthTexture.format===ns)ve(_)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ae,ne,xe,0,Te):t.framebufferTexture2D(t.FRAMEBUFFER,ae,ne,xe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ie(A){const _=i.get(A),z=A.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==A.depthTexture){const J=A.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),J){const H=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,J.removeEventListener("dispose",H)};J.addEventListener("dispose",H),_.__depthDisposeCallback=H}_.__boundDepthTexture=J}if(A.depthTexture&&!_.__autoAllocateDepthBuffer)if(z)for(let J=0;J<6;J++)Ke(_.__webglFramebuffer[J],A,J);else{const J=A.texture.mipmaps;J&&J.length>0?Ke(_.__webglFramebuffer[0],A,0):Ke(_.__webglFramebuffer,A,0)}else if(z){_.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(n.bindFramebuffer(t.FRAMEBUFFER,_.__webglFramebuffer[J]),_.__webglDepthbuffer[J]===void 0)_.__webglDepthbuffer[J]=t.createRenderbuffer(),Oe(_.__webglDepthbuffer[J],A,!1);else{const H=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,xe=_.__webglDepthbuffer[J];t.bindRenderbuffer(t.RENDERBUFFER,xe),t.framebufferRenderbuffer(t.FRAMEBUFFER,H,t.RENDERBUFFER,xe)}}else{const J=A.texture.mipmaps;if(J&&J.length>0?n.bindFramebuffer(t.FRAMEBUFFER,_.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=t.createRenderbuffer(),Oe(_.__webglDepthbuffer,A,!1);else{const H=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,xe=_.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,xe),t.framebufferRenderbuffer(t.FRAMEBUFFER,H,t.RENDERBUFFER,xe)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function he(A,_,z){const J=i.get(A);_!==void 0&&Re(J.__webglFramebuffer,A,A.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),z!==void 0&&ie(A)}function ue(A){const _=A.texture,z=i.get(A),J=i.get(_);A.addEventListener("dispose",x);const H=A.textures,xe=A.isWebGLCubeRenderTarget===!0,Te=H.length>1;if(Te||(J.__webglTexture===void 0&&(J.__webglTexture=t.createTexture()),J.__version=_.version,o.memory.textures++),xe){z.__webglFramebuffer=[];for(let ne=0;ne<6;ne++)if(_.mipmaps&&_.mipmaps.length>0){z.__webglFramebuffer[ne]=[];for(let ae=0;ae<_.mipmaps.length;ae++)z.__webglFramebuffer[ne][ae]=t.createFramebuffer()}else z.__webglFramebuffer[ne]=t.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){z.__webglFramebuffer=[];for(let ne=0;ne<_.mipmaps.length;ne++)z.__webglFramebuffer[ne]=t.createFramebuffer()}else z.__webglFramebuffer=t.createFramebuffer();if(Te)for(let ne=0,ae=H.length;ne<ae;ne++){const Ae=i.get(H[ne]);Ae.__webglTexture===void 0&&(Ae.__webglTexture=t.createTexture(),o.memory.textures++)}if(A.samples>0&&ve(A)===!1){z.__webglMultisampledFramebuffer=t.createFramebuffer(),z.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let ne=0;ne<H.length;ne++){const ae=H[ne];z.__webglColorRenderbuffer[ne]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,z.__webglColorRenderbuffer[ne]);const Ae=s.convert(ae.format,ae.colorSpace),Ne=s.convert(ae.type),we=y(ae.internalFormat,Ae,Ne,ae.normalized,ae.colorSpace,A.isXRRenderTarget===!0),be=Ee(A);t.renderbufferStorageMultisample(t.RENDERBUFFER,be,we,A.width,A.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ne,t.RENDERBUFFER,z.__webglColorRenderbuffer[ne])}t.bindRenderbuffer(t.RENDERBUFFER,null),A.depthBuffer&&(z.__webglDepthRenderbuffer=t.createRenderbuffer(),Oe(z.__webglDepthRenderbuffer,A,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(xe){n.bindTexture(t.TEXTURE_CUBE_MAP,J.__webglTexture),qe(t.TEXTURE_CUBE_MAP,_);for(let ne=0;ne<6;ne++)if(_.mipmaps&&_.mipmaps.length>0)for(let ae=0;ae<_.mipmaps.length;ae++)Re(z.__webglFramebuffer[ne][ae],A,_,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ae);else Re(z.__webglFramebuffer[ne],A,_,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0);d(_)&&v(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Te){for(let ne=0,ae=H.length;ne<ae;ne++){const Ae=H[ne],Ne=i.get(Ae);let we=t.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(we=A.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(we,Ne.__webglTexture),qe(we,Ae),Re(z.__webglFramebuffer,A,Ae,t.COLOR_ATTACHMENT0+ne,we,0),d(Ae)&&v(we)}n.unbindTexture()}else{let ne=t.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ne=A.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ne,J.__webglTexture),qe(ne,_),_.mipmaps&&_.mipmaps.length>0)for(let ae=0;ae<_.mipmaps.length;ae++)Re(z.__webglFramebuffer[ae],A,_,t.COLOR_ATTACHMENT0,ne,ae);else Re(z.__webglFramebuffer,A,_,t.COLOR_ATTACHMENT0,ne,0);d(_)&&v(ne),n.unbindTexture()}A.depthBuffer&&ie(A)}function ce(A){const _=A.textures;for(let z=0,J=_.length;z<J;z++){const H=_[z];if(d(H)){const xe=S(A),Te=i.get(H).__webglTexture;n.bindTexture(xe,Te),v(xe),n.unbindTexture()}}}const _e=[],Q=[];function fe(A){if(A.samples>0){if(ve(A)===!1){const _=A.textures,z=A.width,J=A.height;let H=t.COLOR_BUFFER_BIT;const xe=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Te=i.get(A),ne=_.length>1;if(ne)for(let Ae=0;Ae<_.length;Ae++)n.bindFramebuffer(t.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ae,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Te.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ae,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Te.__webglMultisampledFramebuffer);const ae=A.texture.mipmaps;ae&&ae.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Te.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Te.__webglFramebuffer);for(let Ae=0;Ae<_.length;Ae++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(H|=t.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(H|=t.STENCIL_BUFFER_BIT)),ne){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Te.__webglColorRenderbuffer[Ae]);const Ne=i.get(_[Ae]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Ne,0)}t.blitFramebuffer(0,0,z,J,0,0,z,J,H,t.NEAREST),l===!0&&(_e.length=0,Q.length=0,_e.push(t.COLOR_ATTACHMENT0+Ae),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&(_e.push(xe),Q.push(xe),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,Q)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,_e))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ne)for(let Ae=0;Ae<_.length;Ae++){n.bindFramebuffer(t.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ae,t.RENDERBUFFER,Te.__webglColorRenderbuffer[Ae]);const Ne=i.get(_[Ae]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Te.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ae,t.TEXTURE_2D,Ne,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Te.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&l){const _=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[_])}}}function Ee(A){return Math.min(r.maxSamples,A.samples)}function ve(A){const _=i.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function P(A){const _=o.render.frame;f.get(A)!==_&&(f.set(A,_),A.update())}function Be(A,_){const z=A.colorSpace,J=A.format,H=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||z!==Uc&&z!==Mr&&(ut.getTransfer(z)===_t?(J!==pi||H!==zn)&&et("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):dt("WebGLTextures: Unsupported texture color space:",z)),_}function He(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=q,this.resetTextureUnits=L,this.getTextureUnits=D,this.setTextureUnits=I,this.setTexture2D=V,this.setTexture2DArray=O,this.setTexture3D=G,this.setTextureCube=ee,this.rebindTextures=he,this.setupRenderTarget=ue,this.updateRenderTargetMipmap=ce,this.updateMultisampleRenderTarget=fe,this.setupDepthRenderbuffer=ie,this.setupFrameBufferTexture=Re,this.useMultisampledRTT=ve,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function Cb(t,e){function n(i,r=Mr){let s;const o=ut.getTransfer(r);if(i===zn)return t.UNSIGNED_BYTE;if(i===_p)return t.UNSIGNED_SHORT_4_4_4_4;if(i===xp)return t.UNSIGNED_SHORT_5_5_5_1;if(i===fx)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===dx)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===cx)return t.BYTE;if(i===ux)return t.SHORT;if(i===Ra)return t.UNSIGNED_SHORT;if(i===vp)return t.INT;if(i===Di)return t.UNSIGNED_INT;if(i===Ri)return t.FLOAT;if(i===Ii)return t.HALF_FLOAT;if(i===hx)return t.ALPHA;if(i===px)return t.RGB;if(i===pi)return t.RGBA;if(i===sr)return t.DEPTH_COMPONENT;if(i===ns)return t.DEPTH_STENCIL;if(i===mx)return t.RED;if(i===yp)return t.RED_INTEGER;if(i===ds)return t.RG;if(i===Sp)return t.RG_INTEGER;if(i===Mp)return t.RGBA_INTEGER;if(i===ec||i===tc||i===nc||i===ic)if(o===_t)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===ec)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===tc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===nc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ic)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===ec)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===tc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===nc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ic)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ld||i===Nd||i===Dd||i===Id)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Ld)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Nd)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Dd)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Id)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ud||i===Fd||i===Od||i===kd||i===Bd||i===Dc||i===zd)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Ud||i===Fd)return o===_t?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Od)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===kd)return s.COMPRESSED_R11_EAC;if(i===Bd)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Dc)return s.COMPRESSED_RG11_EAC;if(i===zd)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Vd||i===Hd||i===Gd||i===Wd||i===Xd||i===$d||i===Yd||i===qd||i===Kd||i===Zd||i===jd||i===Jd||i===Qd||i===eh)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Vd)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Hd)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Gd)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Wd)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Xd)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===$d)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Yd)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===qd)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Kd)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Zd)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===jd)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Jd)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Qd)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===eh)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===th||i===nh||i===ih)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===th)return o===_t?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===nh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ih)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===rh||i===sh||i===Ic||i===oh)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===rh)return s.COMPRESSED_RED_RGTC1_EXT;if(i===sh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ic)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===oh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ba?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const Rb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,bb=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Pb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new Tx(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Fi({vertexShader:Rb,fragmentShader:bb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new en(new Wa(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Lb extends _s{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,f=null,h=null,u=null,p=null,g=null;const M=typeof XRWebGLBinding<"u",m=new Pb,d={},v=n.getContextAttributes();let S=null,y=null;const w=[],T=[],C=new De;let x=null,R=null;const b=new jn;b.viewport=new bt;const N=new jn;N.viewport=new bt;const X=[b,N],L=new kw;let D=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(U){let $=w[U];return $===void 0&&($=new ju,w[U]=$),$.getTargetRaySpace()},this.getControllerGrip=function(U){let $=w[U];return $===void 0&&($=new ju,w[U]=$),$.getGripSpace()},this.getHand=function(U){let $=w[U];return $===void 0&&($=new ju,w[U]=$),$.getHandSpace()};function q(U){const $=T.indexOf(U.inputSource);if($===-1)return;const se=w[$];se!==void 0&&(se.update(U.inputSource,U.frame,c||o),se.dispatchEvent({type:U.type,data:U.inputSource}))}function W(){r.removeEventListener("select",q),r.removeEventListener("selectstart",q),r.removeEventListener("selectend",q),r.removeEventListener("squeeze",q),r.removeEventListener("squeezestart",q),r.removeEventListener("squeezeend",q),r.removeEventListener("end",W),r.removeEventListener("inputsourceschange",V);for(let U=0;U<w.length;U++){const $=T[U];$!==null&&(T[U]=null,w[U].disconnect($))}D=null,I=null,m.reset();for(const U in d)delete d[U];if(e.setRenderTarget(S),p=null,u=null,h=null,r=null,y=null,$e.stop(),i.isPresenting=!1,e.setPixelRatio(x),e.setSize(C.width,C.height,!1),R!==null){const U=R.camera;U.fov=R.fov,U.zoom=R.zoom,U.updateProjectionMatrix(),R=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(U){s=U,i.isPresenting===!0&&et("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(U){a=U,i.isPresenting===!0&&et("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(U){c=U},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return h===null&&M&&(h=new XRWebGLBinding(r,n)),h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(U){if(r=U,r!==null){if(S=e.getRenderTarget(),r.addEventListener("select",q),r.addEventListener("selectstart",q),r.addEventListener("selectend",q),r.addEventListener("squeeze",q),r.addEventListener("squeezestart",q),r.addEventListener("squeezeend",q),r.addEventListener("end",W),r.addEventListener("inputsourceschange",V),v.xrCompatible!==!0&&await n.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(C),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let se=null,Ce=null,Re=null;v.depth&&(Re=v.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,se=v.stencil?ns:sr,Ce=v.stencil?ba:Di);const Oe={colorFormat:n.RGBA8,depthFormat:Re,scaleFactor:s};h=this.getBinding(),u=h.createProjectionLayer(Oe),r.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),y=new vi(u.textureWidth,u.textureHeight,{format:pi,type:zn,depthTexture:new La(u.textureWidth,u.textureHeight,Ce,void 0,void 0,void 0,void 0,void 0,void 0,se),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{const se={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,se),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new vi(p.framebufferWidth,p.framebufferHeight,{format:pi,type:zn,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),$e.setContext(r),$e.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function V(U){for(let $=0;$<U.removed.length;$++){const se=U.removed[$],Ce=T.indexOf(se);Ce>=0&&(T[Ce]=null,w[Ce].disconnect(se))}for(let $=0;$<U.added.length;$++){const se=U.added[$];let Ce=T.indexOf(se);if(Ce===-1){for(let Oe=0;Oe<w.length;Oe++)if(Oe>=T.length){T.push(se),Ce=Oe;break}else if(T[Oe]===null){T[Oe]=se,Ce=Oe;break}if(Ce===-1)break}const Re=w[Ce];Re&&Re.connect(se)}}const O=new F,G=new F;function ee(U,$,se){O.setFromMatrixPosition($.matrixWorld),G.setFromMatrixPosition(se.matrixWorld);const Ce=O.distanceTo(G),Re=$.projectionMatrix.elements,Oe=se.projectionMatrix.elements,Ke=Re[14]/(Re[10]-1),ie=Re[14]/(Re[10]+1),he=(Re[9]+1)/Re[5],ue=(Re[9]-1)/Re[5],ce=(Re[8]-1)/Re[0],_e=(Oe[8]+1)/Oe[0],Q=Ke*ce,fe=Ke*_e,Ee=Ce/(-ce+_e),ve=Ee*-ce;if($.matrixWorld.decompose(U.position,U.quaternion,U.scale),U.translateX(ve),U.translateZ(Ee),U.matrixWorld.compose(U.position,U.quaternion,U.scale),U.matrixWorldInverse.copy(U.matrixWorld).invert(),Re[10]===-1)U.projectionMatrix.copy($.projectionMatrix),U.projectionMatrixInverse.copy($.projectionMatrixInverse);else{const P=Ke+Ee,Be=ie+Ee,He=Q-ve,A=fe+(Ce-ve),_=he*ie/Be*P,z=ue*ie/Be*P;U.projectionMatrix.makePerspective(He,A,_,z,P,Be),U.projectionMatrixInverse.copy(U.projectionMatrix).invert()}}function Se(U,$){$===null?U.matrixWorld.copy(U.matrix):U.matrixWorld.multiplyMatrices($.matrixWorld,U.matrix),U.matrixWorldInverse.copy(U.matrixWorld).invert()}this.updateCamera=function(U){if(r===null)return;let $=U.near,se=U.far;m.texture!==null&&(m.depthNear>0&&($=m.depthNear),m.depthFar>0&&(se=m.depthFar)),L.near=N.near=b.near=$,L.far=N.far=b.far=se,(D!==L.near||I!==L.far)&&(r.updateRenderState({depthNear:L.near,depthFar:L.far}),D=L.near,I=L.far),L.layers.mask=U.layers.mask|6,b.layers.mask=L.layers.mask&-5,N.layers.mask=L.layers.mask&-3;const Ce=U.parent,Re=L.cameras;Se(L,Ce);for(let Oe=0;Oe<Re.length;Oe++)Se(Re[Oe],Ce);Re.length===2?ee(L,b,N):L.projectionMatrix.copy(b.projectionMatrix),R===null&&U.isPerspectiveCamera&&(R={camera:U,fov:U.fov,zoom:U.zoom}),Le(U,L,Ce)};function Le(U,$,se){se===null?U.matrix.copy($.matrixWorld):(U.matrix.copy(se.matrixWorld),U.matrix.invert(),U.matrix.multiply($.matrixWorld)),U.matrix.decompose(U.position,U.quaternion,U.scale),U.updateMatrixWorld(!0),U.projectionMatrix.copy($.projectionMatrix),U.projectionMatrixInverse.copy($.projectionMatrixInverse),U.isPerspectiveCamera&&(U.fov=lh*2*Math.atan(1/U.projectionMatrix.elements[5]),U.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(u===null&&p===null))return l},this.setFoveation=function(U){l=U,u!==null&&(u.fixedFoveation=U),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=U)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(L)},this.getCameraTexture=function(U){return d[U]};let Ye=null;function qe(U,$){if(f=$.getViewerPose(c||o),g=$,f!==null){const se=f.views;p!==null&&(e.setRenderTargetFramebuffer(y,p.framebuffer),e.setRenderTarget(y));let Ce=!1;se.length!==L.cameras.length&&(L.cameras.length=0,Ce=!0);for(let ie=0;ie<se.length;ie++){const he=se[ie];let ue=null;if(p!==null)ue=p.getViewport(he);else{const _e=h.getViewSubImage(u,he);ue=_e.viewport,ie===0&&(e.setRenderTargetTextures(y,_e.colorTexture,_e.depthStencilTexture),e.setRenderTarget(y))}let ce=X[ie];ce===void 0&&(ce=new jn,ce.layers.enable(ie),ce.viewport=new bt,X[ie]=ce),ce.matrix.fromArray(he.transform.matrix),ce.matrix.decompose(ce.position,ce.quaternion,ce.scale),ce.projectionMatrix.fromArray(he.projectionMatrix),ce.projectionMatrixInverse.copy(ce.projectionMatrix).invert(),ce.viewport.set(ue.x,ue.y,ue.width,ue.height),ie===0&&(L.matrix.copy(ce.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),Ce===!0&&L.cameras.push(ce)}const Re=r.enabledFeatures;if(Re&&Re.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&M){h=i.getBinding();const ie=h.getDepthInformation(se[0]);ie&&ie.isValid&&ie.texture&&m.init(ie,r.renderState)}if(Re&&Re.includes("camera-access")&&M){e.state.unbindTexture(),h=i.getBinding();for(let ie=0;ie<se.length;ie++){const he=se[ie].camera;if(he){let ue=d[he];ue||(ue=new Tx,d[he]=ue);const ce=h.getCameraImage(he);ue.sourceTexture=ce}}}}for(let se=0;se<w.length;se++){const Ce=T[se],Re=w[se];Ce!==null&&Re!==void 0&&Re.update(Ce,$,c||o)}Ye&&Ye(U,$),$.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:$}),g=null}const $e=new kx;$e.setAnimationLoop(qe),this.setAnimationLoop=function(U){Ye=U},this.dispose=function(){}}}const Nb=new Tt,Xx=new nt;Xx.set(-1,0,0,0,1,0,0,0,1);function Db(t,e){function n(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,Ux(t)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,v,S,y){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?s(m,d):d.isMeshLambertMaterial?(s(m,d),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(s(m,d),h(m,d)):d.isMeshPhongMaterial?(s(m,d),f(m,d),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(s(m,d),u(m,d),d.isMeshPhysicalMaterial&&p(m,d,y)):d.isMeshMatcapMaterial?(s(m,d),g(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),M(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?l(m,d,v,S):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,n(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,n(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Dn&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,n(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Dn&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,n(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,n(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,n(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const v=e.get(d),S=v.envMap,y=v.envMapRotation;S&&(m.envMap.value=S,m.envMapRotation.value.setFromMatrix4(Nb.makeRotationFromEuler(y)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Xx),m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,n(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,n(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,n(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,v,S){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*v,m.scale.value=S*.5,d.map&&(m.map.value=d.map,n(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,n(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function f(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function h(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function u(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,n(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,n(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,v){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,n(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,n(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,n(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,n(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,n(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Dn&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.retroreflectivity>0&&(m.retroreflectivity.value=d.retroreflectivity),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,n(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,n(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,n(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,n(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,n(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,n(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,n(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function M(m,d){const v=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Ib(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,w){const T=w.program;i.uniformBlockBinding(y,T)}function c(y,w){let T=r[y.id];T===void 0&&(m(y),T=f(y),r[y.id]=T,y.addEventListener("dispose",v));const C=w.program;i.updateUBOMapping(y,C);const x=e.render.frame;s[y.id]!==x&&(u(y),s[y.id]=x)}function f(y){const w=h();y.__bindingPointIndex=w;const T=t.createBuffer(),C=y.__size,x=y.usage;return t.bindBuffer(t.UNIFORM_BUFFER,T),t.bufferData(t.UNIFORM_BUFFER,C,x),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,w,T),T}function h(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return dt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(y){const w=r[y.id],T=y.uniforms,C=y.__cache;t.bindBuffer(t.UNIFORM_BUFFER,w);for(let x=0,R=T.length;x<R;x++){const b=T[x];if(Array.isArray(b))for(let N=0,X=b.length;N<X;N++)p(b[N],x,N,C);else p(b,x,0,C)}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(y,w,T,C){if(M(y,w,T,C)===!0){const x=y.__offset,R=y.value;if(Array.isArray(R)){let b=0;for(let N=0;N<R.length;N++){const X=R[N],L=d(X);g(X,y.__data,b),typeof X!="number"&&typeof X!="boolean"&&!X.isMatrix3&&!ArrayBuffer.isView(X)&&(b+=L.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(R,y.__data,0);t.bufferSubData(t.UNIFORM_BUFFER,x,y.__data)}}function g(y,w,T){typeof y=="number"||typeof y=="boolean"?w[0]=y:y.isMatrix3?(w[0]=y.elements[0],w[1]=y.elements[1],w[2]=y.elements[2],w[3]=0,w[4]=y.elements[3],w[5]=y.elements[4],w[6]=y.elements[5],w[7]=0,w[8]=y.elements[6],w[9]=y.elements[7],w[10]=y.elements[8],w[11]=0):ArrayBuffer.isView(y)?w.set(new y.constructor(y.buffer,y.byteOffset,w.length)):y.toArray(w,T)}function M(y,w,T,C){const x=y.value,R=w+"_"+T;if(C[R]===void 0)return typeof x=="number"||typeof x=="boolean"?C[R]=x:ArrayBuffer.isView(x)?C[R]=x.slice():C[R]=x.clone(),!0;{const b=C[R];if(typeof x=="number"||typeof x=="boolean"){if(b!==x)return C[R]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(b.equals(x)===!1)return b.copy(x),!0}}return!1}function m(y){const w=y.uniforms;let T=0;const C=16;for(let R=0,b=w.length;R<b;R++){const N=Array.isArray(w[R])?w[R]:[w[R]];for(let X=0,L=N.length;X<L;X++){const D=N[X],I=Array.isArray(D.value)?D.value:[D.value];for(let q=0,W=I.length;q<W;q++){const V=I[q],O=d(V),G=T%C,ee=G%O.boundary,Se=G+ee;T+=ee,Se!==0&&C-Se<O.storage&&(T+=C-Se),D.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=T,T+=O.storage}}}const x=T%C;return x>0&&(T+=C-x),y.__size=T,y.__cache={},this}function d(y){const w={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(w.boundary=4,w.storage=4):y.isVector2?(w.boundary=8,w.storage=8):y.isVector3||y.isColor?(w.boundary=16,w.storage=12):y.isVector4?(w.boundary=16,w.storage=16):y.isMatrix3?(w.boundary=48,w.storage=48):y.isMatrix4?(w.boundary=64,w.storage=64):y.isTexture?et("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(w.boundary=16,w.storage=y.byteLength):et("WebGLRenderer: Unsupported uniform value type.",y),w}function v(y){const w=y.target;w.removeEventListener("dispose",v);const T=o.indexOf(w.__bindingPointIndex);o.splice(T,1),t.deleteBuffer(r[w.id]),delete r[w.id],delete s[w.id]}function S(){for(const y in r)t.deleteBuffer(r[y]);o=[],r={},s={}}return{bind:l,update:c,dispose:S}}const Ub=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ei=null;function Fb(){return Ei===null&&(Ei=new Ex(Ub,16,16,ds,Ii),Ei.name="DFG_LUT",Ei.minFilter=nn,Ei.magFilter=nn,Ei.wrapS=Ci,Ei.wrapT=Ci,Ei.generateMipmaps=!1,Ei.needsUpdate=!0),Ei}class Ob{constructor(e={}){const{canvas:n=M1(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:u=!1,outputBufferType:p=zn}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=o;const M=p,m=new Set([Mp,Sp,yp]),d=new Set([zn,Di,Ra,ba,_p,xp]),v=new Uint32Array(4),S=new Int32Array(4),y=new F;let w=null,T=null;const C=[],x=[];let R=null;this.domElement=n,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ni,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const b=this;let N=!1,X=null,L=null,D=null,I=null;this._outputColorSpace=Mn;let q=0,W=0,V=null,O=-1,G=null;const ee=new bt,Se=new bt;let Le=null;const Ye=new at(0);let qe=0,$e=n.width,U=n.height,$=1,se=null,Ce=null;const Re=new bt(0,0,$e,U),Oe=new bt(0,0,$e,U);let Ke=!1;const ie=new bp;let he=!1,ue=!1;const ce=new Tt,_e=new F,Q=new bt,fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ee=!1;function ve(){return V===null?$:1}let P=i;function Be(E,k){return n.getContext(E,k)}let He,A,_,z,J,H,xe,Te,ne,ae,Ae,Ne,we,be,Ge,Xe,je,B,Pe,oe,de,pe,re;try{const E={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${mp}`),n.addEventListener("webglcontextlost",rt,!1),n.addEventListener("webglcontextrestored",it,!1),n.addEventListener("webglcontextcreationerror",It,!1),P===null){const k="webgl2";if(P=Be(k,E),P===null)throw Be(k)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ie()}catch(E){throw n.removeEventListener("webglcontextlost",rt,!1),n.removeEventListener("webglcontextrestored",it,!1),n.removeEventListener("webglcontextcreationerror",It,!1),dt("WebGLRenderer: "+E.message),E}function Ie(){He=new FC(P),He.init(),de=new Cb(P,He),A=new AC(P,He,e,de),_=new Tb(P,He),A.reversedDepthBuffer&&u&&_.buffers.depth.setReversed(!0),L=P.createFramebuffer(),D=P.createFramebuffer(),I=P.createFramebuffer(),z=new BC(P),J=new fb,H=new Ab(P,He,_,J,A,de,z),xe=new UC(b),Te=new Vw(P),pe=new wC(P,Te),ne=new OC(P,Te,z,pe),ae=new VC(P,ne,Te,pe,z),B=new zC(P,A,H),Ge=new CC(J),Ae=new ub(b,xe,He,A,pe,Ge),Ne=new Db(b,J),we=new hb,be=new xb(He),je=new EC(b,xe,_,ae,g,l),Xe=new wb(b,ae,A),re=new Ib(P,z,A,_),Pe=new TC(P,He,z),oe=new kC(P,He,z),z.programs=Ae.programs,b.capabilities=A,b.extensions=He,b.properties=J,b.renderLists=we,b.shadowMap=Xe,b.state=_,b.info=z}M!==zn&&(R=new GC(M,n.width,n.height,a,r,s));const ze=new Lb(b,P);this.xr=ze,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const E=He.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=He.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(E){E!==void 0&&($=E,this.setSize($e,U,!1))},this.getSize=function(E){return E.set($e,U)},this.setSize=function(E,k,te=!0){if(ze.isPresenting){et("WebGLRenderer: Can't change size while VR device is presenting.");return}$e=E,U=k,n.width=Math.floor(E*$),n.height=Math.floor(k*$),te===!0&&(n.style.width=E+"px",n.style.height=k+"px"),R!==null&&R.setSize(n.width,n.height),this.setViewport(0,0,E,k)},this.getDrawingBufferSize=function(E){return E.set($e*$,U*$).floor()},this.setDrawingBufferSize=function(E,k,te){$e=E,U=k,$=te,n.width=Math.floor(E*te),n.height=Math.floor(k*te),this.setViewport(0,0,E,k)},this.setEffects=function(E){if(M===zn){dt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let k=0;k<E.length;k++)if(E[k].isOutputPass===!0){et("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}R.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(ee)},this.getViewport=function(E){return E.copy(Re)},this.setViewport=function(E,k,te,Z){E.isVector4?Re.set(E.x,E.y,E.z,E.w):Re.set(E,k,te,Z),_.viewport(ee.copy(Re).multiplyScalar($).round())},this.getScissor=function(E){return E.copy(Oe)},this.setScissor=function(E,k,te,Z){E.isVector4?Oe.set(E.x,E.y,E.z,E.w):Oe.set(E,k,te,Z),_.scissor(Se.copy(Oe).multiplyScalar($).round())},this.getScissorTest=function(){return Ke},this.setScissorTest=function(E){_.setScissorTest(Ke=E)},this.setOpaqueSort=function(E){se=E},this.setTransparentSort=function(E){Ce=E},this.getClearColor=function(E){return E.copy(je.getClearColor())},this.setClearColor=function(){je.setClearColor(...arguments)},this.getClearAlpha=function(){return je.getClearAlpha()},this.setClearAlpha=function(){je.setClearAlpha(...arguments)},this.clear=function(E=!0,k=!0,te=!0){let Z=0;if(E){let j=!1;if(V!==null){const Y=V.texture.format;j=m.has(Y)}if(j){const Y=V.texture.type,ge=d.has(Y),me=je.getClearColor(),ye=je.getClearAlpha(),ke=me.r,Ze=me.g,Qe=me.b;ge?(v[0]=ke,v[1]=Ze,v[2]=Qe,v[3]=ye,P.clearBufferuiv(P.COLOR,0,v)):(S[0]=ke,S[1]=Ze,S[2]=Qe,S[3]=ye,P.clearBufferiv(P.COLOR,0,S))}else Z|=P.COLOR_BUFFER_BIT}k&&(Z|=P.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),te&&(Z|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Z!==0&&P.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),X=E},this.dispose=function(){n.removeEventListener("webglcontextlost",rt,!1),n.removeEventListener("webglcontextrestored",it,!1),n.removeEventListener("webglcontextcreationerror",It,!1),je.dispose(),we.dispose(),be.dispose(),J.dispose(),xe.dispose(),ae.dispose(),pe.dispose(),re.dispose(),Ae.dispose(),ze.dispose(),ze.removeEventListener("sessionstart",kt),ze.removeEventListener("sessionend",an),Jt.stop()};function rt(E){E.preventDefault(),mg("WebGLRenderer: Context Lost."),N=!0}function it(){mg("WebGLRenderer: Context Restored."),N=!1;const E=z.autoReset,k=Xe.enabled,te=Xe.autoUpdate,Z=Xe.needsUpdate,j=Xe.type;Ie(),z.autoReset=E,Xe.enabled=k,Xe.autoUpdate=te,Xe.needsUpdate=Z,Xe.type=j}function It(E){dt("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Ut(E){const k=E.target;k.removeEventListener("dispose",Ut),Wr(k)}function Wr(E){_n(E),J.remove(E)}function _n(E){const k=J.get(E).programs;k!==void 0&&(k.forEach(function(te){Ae.releaseProgram(te)}),E.isShaderMaterial&&Ae.releaseShaderCache(E))}this.renderBufferDirect=function(E,k,te,Z,j,Y){k===null&&(k=fe);const ge=j.isMesh&&j.matrixWorld.determinantAffine()<0,me=$a(E,k,te,Z,j);_.setMaterial(Z,ge);let ye=te.index,ke=1;if(Z.wireframe===!0){if(ye=ne.getWireframeAttribute(te),ye===void 0)return;ke=2}const Ze=te.drawRange,Qe=te.attributes.position;let Ve=Ze.start*ke,Je=(Ze.start+Ze.count)*ke;Y!==null&&(Ve=Math.max(Ve,Y.start*ke),Je=Math.min(Je,(Y.start+Y.count)*ke)),ye!==null?(Ve=Math.max(Ve,0),Je=Math.min(Je,ye.count)):Qe!=null&&(Ve=Math.max(Ve,0),Je=Math.min(Je,Qe.count));const St=Je-Ve;if(St<0||St===1/0)return;pe.setup(j,Z,me,te,ye);let gt,mt=Pe;if(ye!==null&&(gt=Te.get(ye),mt=oe,mt.setIndex(gt)),j.isMesh)Z.wireframe===!0?(_.setLineWidth(Z.wireframeLinewidth*ve()),mt.setMode(P.LINES)):mt.setMode(P.TRIANGLES);else if(j.isLine){let Yt=Z.linewidth;Yt===void 0&&(Yt=1),_.setLineWidth(Yt*ve()),j.isLineSegments?mt.setMode(P.LINES):j.isLineLoop?mt.setMode(P.LINE_LOOP):mt.setMode(P.LINE_STRIP)}else j.isPoints?mt.setMode(P.POINTS):j.isSprite&&mt.setMode(P.TRIANGLES);if(j.isBatchedMesh)if(He.get("WEBGL_multi_draw"))mt.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const Yt=j._multiDrawStarts,Ue=j._multiDrawCounts,qt=j._multiDrawCount,tt=ye?Te.get(ye).bytesPerElement:1,Ft=J.get(Z).currentProgram.getUniforms();for(let ft=0;ft<qt;ft++)Ft.setValue(P,"_gl_DrawID",ft),mt.render(Yt[ft]/tt,Ue[ft])}else if(j.isInstancedMesh)mt.renderInstances(Ve,St,j.count);else if(te.isInstancedBufferGeometry){const Yt=te._maxInstanceCount!==void 0?te._maxInstanceCount:1/0,Ue=Math.min(te.instanceCount,Yt);mt.renderInstances(Ve,St,Ue)}else mt.render(Ve,St)};function ki(E,k,te,Z){X!==null&&E.isNodeMaterial&&X.setObject(Z,E),he===!0&&Ge.setState(E,te,!1),E.transparent===!0&&E.side===di&&E.forceSinglePass===!1?(E.side=Dn,E.needsUpdate=!0,ri(E,k,Z),E.side=us,E.needsUpdate=!0,ri(E,k,Z),E.side=di):ri(E,k,Z)}this.compile=function(E,k,te=null){te===null&&(te=E),X!==null&&X.renderStart(E,k,te),T=be.get(te),T.init(k),x.push(T),te.traverseVisible(function(j){j.isLight&&j.layers.test(k.layers)&&(T.pushLight(j),j.castShadow&&T.pushShadow(j))}),E!==te&&E.traverseVisible(function(j){j.isLight&&j.layers.test(k.layers)&&(T.pushLight(j),j.castShadow&&T.pushShadow(j))}),T.setupLights(),X!==null&&X.updateLights(T.state.lightsArray),ue=this.localClippingEnabled,he=Ge.init(this.clippingPlanes,ue),he===!0&&Ge.setGlobalState(this.clippingPlanes,k),X!==null&&Xe.render(T.state.shadowsArray,te,k);const Z=new Set;return E.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const Y=j.material;if(Y)if(Array.isArray(Y))for(let ge=0;ge<Y.length;ge++){const me=Y[ge];ki(me,te,k,j),Z.add(me)}else ki(Y,te,k,j),Z.add(Y)}),T=x.pop(),X!==null&&X.renderEnd(),Z},this.compileAsync=function(E,k,te=null){const Z=this.compile(E,k,te);return new Promise(j=>{function Y(){if(Z.forEach(function(ge){const ye=J.get(ge).currentProgram;(ye===void 0||ye.isReady())&&Z.delete(ge)}),Z.size===0){j(E);return}setTimeout(Y,10)}He.get("KHR_parallel_shader_compile")!==null?Y():setTimeout(Y,10)})};let Xr=null;function In(E){Xr&&Xr(E)}function kt(){Jt.stop()}function an(){Jt.start()}const Jt=new kx;Jt.setAnimationLoop(In),typeof self<"u"&&Jt.setContext(self),this.setAnimationLoop=function(E){Xr=E,ze.setAnimationLoop(E),E===null?Jt.stop():Jt.start()},ze.addEventListener("sessionstart",kt),ze.addEventListener("sessionend",an),this.render=function(E,k){if(k!==void 0&&k.isCamera!==!0){dt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;X!==null&&X.renderStart(E,k);const te=ze.enabled===!0&&ze.isPresenting===!0,Z=R!==null&&(V===null||te)&&R.begin(b,V);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),ze.enabled===!0&&ze.isPresenting===!0&&(R===null||R.isCompositing()===!1)&&(ze.cameraAutoUpdate===!0&&ze.updateCamera(k),k=ze.getCamera()),E.isScene===!0&&E.onBeforeRender(b,E,k,V),T=be.get(E,x.length),T.init(k),T.state.textureUnits=H.getTextureUnits(),x.push(T),ce.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),ie.setFromProjectionMatrix(ce,bi,k.reversedDepth),ue=this.localClippingEnabled,he=Ge.init(this.clippingPlanes,ue),w=we.get(E,C.length),w.init(),C.push(w),ze.enabled===!0&&ze.isPresenting===!0){const ge=b.xr.getDepthSensingMesh();ge!==null&&ot(ge,k,-1/0,b.sortObjects)}ot(E,k,0,b.sortObjects),w.finish(),X!==null&&X.updateLights(T.state.lightsArray),b.sortObjects===!0&&w.sort(se,Ce),Ee=ze.enabled===!1||ze.isPresenting===!1||ze.hasDepthSensing()===!1,Ee&&je.addToRenderList(w,E),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),he===!0&&Ge.beginShadows();const j=T.state.shadowsArray;if(Xe.render(j,E,k),he===!0&&Ge.endShadows(),(Z&&R.hasRenderPass())===!1){const ge=w.opaque,me=w.transmissive;if(T.setupLights(),k.isArrayCamera){const ye=k.cameras;if(me.length>0)for(let ke=0,Ze=ye.length;ke<Ze;ke++){const Qe=ye[ke];ii(ge,me,E,Qe)}Ee&&je.render(E);for(let ke=0,Ze=ye.length;ke<Ze;ke++){const Qe=ye[ke];ln(w,E,Qe,Qe.viewport)}}else me.length>0&&ii(ge,me,E,k),Ee&&je.render(E),ln(w,E,k)}V!==null&&W===0&&(H.updateMultisampleRenderTarget(V),H.updateRenderTargetMipmap(V)),Z&&R.end(b),E.isScene===!0&&E.onAfterRender(b,E,k),pe.resetDefaultState(),O=-1,G=null,x.pop(),x.length>0?(T=x[x.length-1],H.setTextureUnits(T.state.textureUnits),he===!0&&Ge.setGlobalState(b.clippingPlanes,T.state.camera)):T=null,C.pop(),C.length>0?w=C[C.length-1]:w=null,X!==null&&X.renderEnd()};function ot(E,k,te,Z){if(E.visible===!1)return;if(E.layers.test(k.layers)){if(E.isGroup)te=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(k);else if(E.isLightProbeGrid)T.pushLightProbeGrid(E);else if(E.isLight)T.pushLight(E),E.castShadow&&T.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||E.intersectsFrustum(ie)){Z&&Q.setFromMatrixPosition(E.matrixWorld).applyMatrix4(ce);const ge=ae.update(E),me=E.material;me.visible&&w.push(E,ge,me,te,Q.z,null,k)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||E.intersectsFrustum(ie))){const ge=ae.update(E),me=E.material;if(Z&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Q.copy(E.boundingSphere.center)):(ge.boundingSphere===null&&ge.computeBoundingSphere(),Q.copy(ge.boundingSphere.center)),Q.applyMatrix4(E.matrixWorld).applyMatrix4(ce)),Array.isArray(me)){const ye=ge.groups;for(let ke=0,Ze=ye.length;ke<Ze;ke++){const Qe=ye[ke],Ve=me[Qe.materialIndex];Ve&&Ve.visible&&w.push(E,ge,Ve,te,Q.z,Qe,k)}}else me.visible&&w.push(E,ge,me,te,Q.z,null,k)}}const Y=E.children;for(let ge=0,me=Y.length;ge<me;ge++)ot(Y[ge],k,te,Z)}function ln(E,k,te,Z){const{opaque:j,transmissive:Y,transparent:ge}=E;T.setupLightsView(te),he===!0&&Ge.setGlobalState(b.clippingPlanes,te),Z&&_.viewport(ee.copy(Z)),j.length>0&&Un(j,k,te),Y.length>0&&Un(Y,k,te),ge.length>0&&Un(ge,k,te),_.buffers.depth.setTest(!0),_.buffers.depth.setMask(!0),_.buffers.color.setMask(!0),_.setPolygonOffset(!1)}function ii(E,k,te,Z){if((te.isScene===!0?te.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[Z.id]===void 0){const Ve=He.has("EXT_color_buffer_half_float")||He.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[Z.id]=new vi(1,1,{generateMipmaps:!0,type:Ve?Ii:zn,minFilter:Cr,samples:Math.max(4,A.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ut.workingColorSpace})}const Y=T.state.transmissionRenderTarget[Z.id],ge=Z.viewport||ee;Y.setSize(ge.z*b.transmissionResolutionScale,ge.w*b.transmissionResolutionScale);const me=b.getRenderTarget(),ye=b.getActiveCubeFace(),ke=b.getActiveMipmapLevel();b.setRenderTarget(Y),b.getClearColor(Ye),qe=b.getClearAlpha(),qe<1&&b.setClearColor(16777215,.5),b.clear(),Ee&&je.render(te);const Ze=b.toneMapping;b.toneMapping=Ni;const Qe=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),T.setupLightsView(Z),he===!0&&Ge.setGlobalState(b.clippingPlanes,Z),Un(E,te,Z),H.updateMultisampleRenderTarget(Y),H.updateRenderTargetMipmap(Y),He.has("WEBGL_multisampled_render_to_texture")===!1){let Ve=!1;for(let Je=0,St=k.length;Je<St;Je++){const gt=k[Je],{object:mt,geometry:Yt,material:Ue,group:qt}=gt;if(Ue.side===di&&mt.layers.test(Z.layers)){const tt=Ue.side;Ue.side=Dn,Ue.needsUpdate=!0,ar(mt,te,Z,Yt,Ue,qt),Ue.side=tt,Ue.needsUpdate=!0,Ve=!0}}Ve===!0&&(H.updateMultisampleRenderTarget(Y),H.updateRenderTargetMipmap(Y))}b.setRenderTarget(me,ye,ke),b.setClearColor(Ye,qe),Qe!==void 0&&(Z.viewport=Qe),b.toneMapping=Ze}function Un(E,k,te){const Z=k.isScene===!0?k.overrideMaterial:null;for(let j=0,Y=E.length;j<Y;j++){const ge=E[j],{object:me,geometry:ye,group:ke}=ge;let Ze=ge.material;Ze.allowOverride===!0&&Z!==null&&(Ze=Z),me.layers.test(te.layers)&&ar(me,k,te,ye,Ze,ke)}}function ar(E,k,te,Z,j,Y){X!==null&&j.isNodeMaterial&&X.setObject(E,j),E.onBeforeRender(b,k,te,Z,j,Y),E.modelViewMatrix.multiplyMatrices(te.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),j.onBeforeRender(b,k,te,Z,E,Y),j.transparent===!0&&j.side===di&&j.forceSinglePass===!1?(j.side=Dn,j.needsUpdate=!0,b.renderBufferDirect(te,k,Z,j,E,Y),j.side=us,j.needsUpdate=!0,b.renderBufferDirect(te,k,Z,j,E,Y),j.side=di):b.renderBufferDirect(te,k,Z,j,E,Y),E.onAfterRender(b,k,te,Z,j,Y)}function ri(E,k,te){k.isScene!==!0&&(k=fe);const Z=J.get(E),j=T.state.lights,Y=T.state.shadowsArray,ge=j.state.version,me=Ae.getParameters(E,j.state,Y,k,te,T.state.lightProbeGridArray),ye=Ae.getProgramCacheKey(me);let ke=Z.programs;Z.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?k.environment:null,Z.fog=k.fog;const Ze=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;Z.envMap=xe.get(E.envMap||Z.environment,Ze),Z.envMapRotation=Z.environment!==null&&E.envMap===null?k.environmentRotation:E.envMapRotation,ke===void 0&&(E.addEventListener("dispose",Ut),ke=new Map,Z.programs=ke);let Qe=ke.get(ye);if(Qe!==void 0){if(Z.currentProgram===Qe&&Z.lightsStateVersion===ge)return xi(E,me),Qe}else me.uniforms=Ae.getUniforms(E),X!==null&&E.isNodeMaterial&&X.build(E,te,me),E.onBeforeCompile(me,b),Qe=Ae.acquireProgram(me,ye),ke.set(ye,Qe),Z.uniforms=me.uniforms;const Ve=Z.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ve.clippingPlanes=Ge.uniform),xi(E,me),Z.needsLights=lr(E),Z.lightsStateVersion=ge,Z.needsLights&&(Ve.ambientLightColor.value=j.state.ambient,Ve.lightProbe.value=j.state.probe,Ve.sunLights.value=j.state.sun,Ve.sunLightShadows.value=j.state.sunShadow,Ve.directionalLights.value=j.state.directional,Ve.directionalLightShadows.value=j.state.directionalShadow,Ve.spotLights.value=j.state.spot,Ve.spotLightShadows.value=j.state.spotShadow,Ve.rectAreaLights.value=j.state.rectArea,Ve.ltc_1.value=j.state.rectAreaLTC1,Ve.ltc_2.value=j.state.rectAreaLTC2,Ve.pointLights.value=j.state.point,Ve.pointLightShadows.value=j.state.pointShadow,Ve.hemisphereLights.value=j.state.hemi,Ve.sunShadowMatrix.value=j.state.sunShadowMatrix,Ve.sunShadowCascade.value=j.state.sunShadowCascade,Ve.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Ve.spotLightMatrix.value=j.state.spotLightMatrix,Ve.spotLightMap.value=j.state.spotLightMap,Ve.pointShadowMatrix.value=j.state.pointShadowMatrix),Z.lightProbeGrid=T.state.lightProbeGridArray.length>0,Z.currentProgram=Qe,Z.uniformsList=null,Qe}function Bi(E){if(E.uniformsList===null){const k=E.currentProgram.getUniforms();E.uniformsList=rc.seqWithValue(k.seq,E.uniforms)}return E.uniformsList}function xi(E,k){const te=J.get(E);te.outputColorSpace=k.outputColorSpace,te.batching=k.batching,te.batchingColor=k.batchingColor,te.instancing=k.instancing,te.instancingColor=k.instancingColor,te.instancingMorph=k.instancingMorph,te.skinning=k.skinning,te.morphTargets=k.morphTargets,te.morphNormals=k.morphNormals,te.morphColors=k.morphColors,te.morphTargetsCount=k.morphTargetsCount,te.numClippingPlanes=k.numClippingPlanes,te.numIntersection=k.numClipIntersection,te.vertexAlphas=k.vertexAlphas,te.vertexTangents=k.vertexTangents,te.toneMapping=k.toneMapping}function Xa(E,k){if(E.length===0)return null;if(E.length===1)return E[0].texture!==null?E[0]:null;y.setFromMatrixPosition(k.matrixWorld);for(let te=0,Z=E.length;te<Z;te++){const j=E[te];if(j.texture!==null&&j.boundingBox.containsPoint(y))return j}return null}function $a(E,k,te,Z,j){k.isScene!==!0&&(k=fe),H.resetTextureUnits();const Y=k.fog,ge=Z.isMeshStandardMaterial||Z.isMeshLambertMaterial||Z.isMeshPhongMaterial?k.environment:null,me=V===null?b.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:ut.workingColorSpace,ye=Z.isMeshStandardMaterial||Z.isMeshLambertMaterial&&!Z.envMap||Z.isMeshPhongMaterial&&!Z.envMap,ke=xe.get(Z.envMap||ge,ye),Ze=Z.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,Qe=!!te.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),Ve=!!te.morphAttributes.position,Je=!!te.morphAttributes.normal,St=!!te.morphAttributes.color;let gt=Ni;Z.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(gt=b.toneMapping);const mt=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,Yt=mt!==void 0?mt.length:0,Ue=J.get(Z),qt=T.state.lights;if(he===!0&&(ue===!0||E!==G)){const vt=E===G&&Z.id===O;Ge.setState(Z,E,vt)}let tt=!1;Z.version===Ue.__version?(Ue.needsLights&&Ue.lightsStateVersion!==qt.state.version||Ue.outputColorSpace!==me||j.isBatchedMesh&&Ue.batching===!1||!j.isBatchedMesh&&Ue.batching===!0||j.isBatchedMesh&&Ue.batchingColor===!0&&j._colorsTexture===null||j.isBatchedMesh&&Ue.batchingColor===!1&&j._colorsTexture!==null||j.isInstancedMesh&&Ue.instancing===!1||!j.isInstancedMesh&&Ue.instancing===!0||j.isSkinnedMesh&&Ue.skinning===!1||!j.isSkinnedMesh&&Ue.skinning===!0||j.isInstancedMesh&&Ue.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&Ue.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&Ue.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&Ue.instancingMorph===!1&&j.morphTexture!==null||Ue.envMap!==ke||Z.fog===!0&&Ue.fog!==Y||Ue.numClippingPlanes!==void 0&&(Ue.numClippingPlanes!==Ge.numPlanes||Ue.numIntersection!==Ge.numIntersection)||Ue.vertexAlphas!==Ze||Ue.vertexTangents!==Qe||Ue.morphTargets!==Ve||Ue.morphNormals!==Je||Ue.morphColors!==St||Ue.toneMapping!==gt||Ue.morphTargetsCount!==Yt||!!Ue.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(tt=!0):(tt=!0,Ue.__version=Z.version);let Ft=Ue.currentProgram;tt===!0&&(Ft=ri(Z,k,j),X&&Z.isNodeMaterial&&X.onUpdateProgram(Z,Ft,Ue));let ft=!1,cn=!1,zi=!1;const pt=Ft.getUniforms(),Ct=Ue.uniforms;if(_.useProgram(Ft.program)&&(ft=!0,cn=!0,zi=!0),Z.id!==O&&(O=Z.id,cn=!0),Ue.needsLights){const vt=Xa(T.state.lightProbeGridArray,j);Ue.lightProbeGrid!==vt&&(Ue.lightProbeGrid=vt,cn=!0)}if(ft||G!==E){_.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),pt.setValue(P,"projectionMatrix",E.projectionMatrix),pt.setValue(P,"viewMatrix",E.matrixWorldInverse);const Yn=pt.map.cameraPosition;Yn!==void 0&&Yn.setValue(P,_e.setFromMatrixPosition(E.matrixWorld)),A.logarithmicDepthBuffer&&pt.setValue(P,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&pt.setValue(P,"isOrthographic",E.isOrthographicCamera===!0),G!==E&&(G=E,cn=!0,zi=!0)}if(Ue.needsLights&&(qt.state.sunShadowMap.length>0&&pt.setValue(P,"sunShadowMap",qt.state.sunShadowMap,H),qt.state.directionalShadowMap.length>0&&pt.setValue(P,"directionalShadowMap",qt.state.directionalShadowMap,H),qt.state.spotShadowMap.length>0&&pt.setValue(P,"spotShadowMap",qt.state.spotShadowMap,H),qt.state.pointShadowMap.length>0&&pt.setValue(P,"pointShadowMap",qt.state.pointShadowMap,H)),j.isSkinnedMesh){pt.setOptional(P,j,"bindMatrix"),pt.setOptional(P,j,"bindMatrixInverse");const vt=j.skeleton;vt&&(vt.boneTexture===null&&vt.computeBoneTexture(),pt.setValue(P,"boneTexture",vt.boneTexture,H))}j.isBatchedMesh&&(pt.setOptional(P,j,"batchingTexture"),pt.setValue(P,"batchingTexture",j._matricesTexture,H),pt.setOptional(P,j,"batchingIdTexture"),pt.setValue(P,"batchingIdTexture",j._indirectTexture,H),pt.setOptional(P,j,"batchingColorTexture"),j._colorsTexture!==null&&pt.setValue(P,"batchingColorTexture",j._colorsTexture,H));const xn=te.morphAttributes;if((xn.position!==void 0||xn.normal!==void 0||xn.color!==void 0)&&B.update(j,te,Ft),(cn||Ue.receiveShadow!==j.receiveShadow)&&(Ue.receiveShadow=j.receiveShadow,pt.setValue(P,"receiveShadow",j.receiveShadow)),(Z.isMeshStandardMaterial||Z.isMeshLambertMaterial||Z.isMeshPhongMaterial)&&Z.envMap===null&&k.environment!==null&&(Ct.envMapIntensity.value=k.environmentIntensity),Ct.dfgLUT!==void 0&&(Ct.dfgLUT.value=Fb()),cn){if(pt.setValue(P,"toneMappingExposure",b.toneMappingExposure),Ue.needsLights&&Ya(Ct,zi),Y&&Z.fog===!0&&Ne.refreshFogUniforms(Ct,Y),Ne.refreshMaterialUniforms(Ct,Z,$,U,T.state.transmissionRenderTarget[E.id]),Ue.needsLights&&Ue.lightProbeGrid){const vt=Ue.lightProbeGrid;Ct.probesSH.value=vt.texture,Ct.probesMin.value.copy(vt.boundingBox.min),Ct.probesMax.value.copy(vt.boundingBox.max),Ct.probesResolution.value.copy(vt.resolution)}rc.upload(P,Bi(Ue),Ct,H)}if(Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(rc.upload(P,Bi(Ue),Ct,H),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&pt.setValue(P,"center",j.center),pt.setValue(P,"modelViewMatrix",j.modelViewMatrix),pt.setValue(P,"normalMatrix",j.normalMatrix),pt.setValue(P,"modelMatrix",j.matrixWorld),Z.uniformsGroups!==void 0){const vt=Z.uniformsGroups;for(let Yn=0,yi=vt.length;Yn<yi;Yn++){const xs=vt[Yn];re.update(xs,Ft),re.bind(xs,Ft)}}return Ft}function Ya(E,k){E.ambientLightColor.needsUpdate=k,E.lightProbe.needsUpdate=k,E.sunLights.needsUpdate=k,E.sunLightShadows.needsUpdate=k,E.directionalLights.needsUpdate=k,E.directionalLightShadows.needsUpdate=k,E.pointLights.needsUpdate=k,E.pointLightShadows.needsUpdate=k,E.spotLights.needsUpdate=k,E.spotLightShadows.needsUpdate=k,E.rectAreaLights.needsUpdate=k,E.hemisphereLights.needsUpdate=k}function lr(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return V},this.setRenderTargetTextures=function(E,k,te){const Z=J.get(E);Z.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,Z.__autoAllocateDepthBuffer===!1&&(Z.__useRenderToTexture=!1),J.get(E.texture).__webglTexture=k,J.get(E.depthTexture).__webglTexture=Z.__autoAllocateDepthBuffer?void 0:te,Z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,k){const te=J.get(E);te.__webglFramebuffer=k,te.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(E,k=0,te=0){V=E,q=k,W=te;let Z=null,j=!1,Y=!1;if(E){const me=J.get(E);if(me.__useDefaultFramebuffer!==void 0){_.bindFramebuffer(P.FRAMEBUFFER,me.__webglFramebuffer),ee.copy(E.viewport),Se.copy(E.scissor),Le=E.scissorTest,_.viewport(ee),_.scissor(Se),_.setScissorTest(Le),O=-1;return}else if(me.__webglFramebuffer===void 0)H.setupRenderTarget(E);else if(me.__hasExternalTextures)H.rebindTextures(E,J.get(E.texture).__webglTexture,J.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Ze=E.depthTexture;if(me.__boundDepthTexture!==Ze){if(Ze!==null&&J.has(Ze)&&(E.width!==Ze.image.width||E.height!==Ze.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");H.setupDepthRenderbuffer(E)}}const ye=E.texture;(ye.isData3DTexture||ye.isDataArrayTexture||ye.isCompressedArrayTexture)&&(Y=!0);const ke=J.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(ke[k])?Z=ke[k][te]:Z=ke[k],j=!0):E.samples>0&&H.useMultisampledRTT(E)===!1?Z=J.get(E).__webglMultisampledFramebuffer:Array.isArray(ke)?Z=ke[te]:Z=ke,ee.copy(E.viewport),Se.copy(E.scissor),Le=E.scissorTest}else ee.copy(Re).multiplyScalar($).floor(),Se.copy(Oe).multiplyScalar($).floor(),Le=Ke;if(te!==0&&(Z=L),_.bindFramebuffer(P.FRAMEBUFFER,Z)&&_.drawBuffers(E,Z),_.viewport(ee),_.scissor(Se),_.setScissorTest(Le),j){const me=J.get(E.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+k,me.__webglTexture,te)}else if(Y){const me=k;for(let ye=0;ye<E.textures.length;ye++){const ke=J.get(E.textures[ye]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+ye,ke.__webglTexture,te,me)}}else if(E!==null&&te!==0){const me=J.get(E.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,me.__webglTexture,te)}O=-1};function Eo(E){const k=J.get(E);return(k.__readFormat!==E.format||k.__readType!==E.type)&&(k.__readFormat=E.format,k.__readType=E.type,k.__formatReadable=A.textureFormatReadable(E.format),k.__typeReadable=A.textureTypeReadable(E.type)),k}this.readRenderTargetPixels=function(E,k,te,Z,j,Y,ge,me=0){if(!(E&&E.isWebGLRenderTarget)){dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ye=J.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ge!==void 0&&(ye=ye[ge]),ye){_.bindFramebuffer(P.FRAMEBUFFER,ye);try{const ke=E.textures[me],Ze=ke.format,Qe=ke.type;E.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+me);const Ve=Eo(ke);if(Ve.__formatReadable===!1){dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ve.__typeReadable===!1){dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=E.width-Z&&te>=0&&te<=E.height-j&&P.readPixels(k,te,Z,j,de.convert(Ze),de.convert(Qe),Y)}finally{const ke=V!==null?J.get(V).__webglFramebuffer:null;_.bindFramebuffer(P.FRAMEBUFFER,ke)}}},this.readRenderTargetPixelsAsync=async function(E,k,te,Z,j,Y,ge,me=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ye=J.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ge!==void 0&&(ye=ye[ge]),ye)if(k>=0&&k<=E.width-Z&&te>=0&&te<=E.height-j){_.bindFramebuffer(P.FRAMEBUFFER,ye);const ke=E.textures[me],Ze=ke.format,Qe=ke.type;E.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+me);const Ve=Eo(ke);if(Ve.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ve.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Je=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Je),P.bufferData(P.PIXEL_PACK_BUFFER,Y.byteLength,P.STREAM_READ),P.readPixels(k,te,Z,j,de.convert(Ze),de.convert(Qe),0),P.bindBuffer(P.PIXEL_PACK_BUFFER,null);const St=V!==null?J.get(V).__webglFramebuffer:null;_.bindFramebuffer(P.FRAMEBUFFER,St);const gt=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await E1(P,gt,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,Je),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,Y),P.bindBuffer(P.PIXEL_PACK_BUFFER,null),P.deleteBuffer(Je),P.deleteSync(gt),Y}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,k=null,te=0){const Z=Math.pow(2,-te),j=Math.floor(E.image.width*Z),Y=Math.floor(E.image.height*Z),ge=k!==null?k.x:0,me=k!==null?k.y:0;H.setTexture2D(E,0),P.copyTexSubImage2D(P.TEXTURE_2D,te,0,0,ge,me,j,Y),_.unbindTexture()},this.copyTextureToTexture=function(E,k,te=null,Z=null,j=0,Y=0){let ge,me,ye,ke,Ze,Qe,Ve,Je,St;const gt=E.isCompressedTexture?E.mipmaps[Y]:E.image;if(te!==null)ge=te.max.x-te.min.x,me=te.max.y-te.min.y,ye=te.isBox3?te.max.z-te.min.z:1,ke=te.min.x,Ze=te.min.y,Qe=te.isBox3?te.min.z:0;else{const Ct=Math.pow(2,-j);ge=Math.floor(gt.width*Ct),me=Math.floor(gt.height*Ct),E.isDataArrayTexture?ye=gt.depth:E.isData3DTexture?ye=Math.floor(gt.depth*Ct):ye=1,ke=0,Ze=0,Qe=0}Z!==null?(Ve=Z.x,Je=Z.y,St=Z.z):(Ve=0,Je=0,St=0);const mt=de.convert(k.format),Yt=de.convert(k.type);let Ue;k.isData3DTexture?(H.setTexture3D(k,0),Ue=P.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(H.setTexture2DArray(k,0),Ue=P.TEXTURE_2D_ARRAY):(H.setTexture2D(k,0),Ue=P.TEXTURE_2D),_.activeTexture(P.TEXTURE0),_.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,k.flipY),_.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),_.pixelStorei(P.UNPACK_ALIGNMENT,k.unpackAlignment);const qt=_.getParameter(P.UNPACK_ROW_LENGTH),tt=_.getParameter(P.UNPACK_IMAGE_HEIGHT),Ft=_.getParameter(P.UNPACK_SKIP_PIXELS),ft=_.getParameter(P.UNPACK_SKIP_ROWS),cn=_.getParameter(P.UNPACK_SKIP_IMAGES);_.pixelStorei(P.UNPACK_ROW_LENGTH,gt.width),_.pixelStorei(P.UNPACK_IMAGE_HEIGHT,gt.height),_.pixelStorei(P.UNPACK_SKIP_PIXELS,ke),_.pixelStorei(P.UNPACK_SKIP_ROWS,Ze),_.pixelStorei(P.UNPACK_SKIP_IMAGES,Qe);const zi=E.isDataArrayTexture||E.isData3DTexture,pt=k.isDataArrayTexture||k.isData3DTexture;if(E.isDepthTexture){const Ct=J.get(E),xn=J.get(k),vt=J.get(Ct.__renderTarget),Yn=J.get(xn.__renderTarget);_.bindFramebuffer(P.READ_FRAMEBUFFER,vt.__webglFramebuffer),_.bindFramebuffer(P.DRAW_FRAMEBUFFER,Yn.__webglFramebuffer);for(let yi=0;yi<ye;yi++)zi&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,J.get(E).__webglTexture,j,Qe+yi),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,J.get(k).__webglTexture,Y,St+yi)),P.blitFramebuffer(ke,Ze,ge,me,Ve,Je,ge,me,P.DEPTH_BUFFER_BIT,P.NEAREST);_.bindFramebuffer(P.READ_FRAMEBUFFER,null),_.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(j!==0||E.isRenderTargetTexture||J.has(E)){const Ct=J.get(E),xn=J.get(k);_.bindFramebuffer(P.READ_FRAMEBUFFER,D),_.bindFramebuffer(P.DRAW_FRAMEBUFFER,I);for(let vt=0;vt<ye;vt++)zi?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Ct.__webglTexture,j,Qe+vt):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Ct.__webglTexture,j),pt?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,xn.__webglTexture,Y,St+vt):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,xn.__webglTexture,Y),j!==0?P.blitFramebuffer(ke,Ze,ge,me,Ve,Je,ge,me,P.COLOR_BUFFER_BIT,P.NEAREST):pt?P.copyTexSubImage3D(Ue,Y,Ve,Je,St+vt,ke,Ze,ge,me):P.copyTexSubImage2D(Ue,Y,Ve,Je,ke,Ze,ge,me);_.bindFramebuffer(P.READ_FRAMEBUFFER,null),_.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else pt?E.isDataTexture||E.isData3DTexture?P.texSubImage3D(Ue,Y,Ve,Je,St,ge,me,ye,mt,Yt,gt.data):k.isCompressedArrayTexture?P.compressedTexSubImage3D(Ue,Y,Ve,Je,St,ge,me,ye,mt,gt.data):P.texSubImage3D(Ue,Y,Ve,Je,St,ge,me,ye,mt,Yt,gt):E.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,Y,Ve,Je,ge,me,mt,Yt,gt.data):E.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,Y,Ve,Je,gt.width,gt.height,mt,gt.data):P.texSubImage2D(P.TEXTURE_2D,Y,Ve,Je,ge,me,mt,Yt,gt);_.pixelStorei(P.UNPACK_ROW_LENGTH,qt),_.pixelStorei(P.UNPACK_IMAGE_HEIGHT,tt),_.pixelStorei(P.UNPACK_SKIP_PIXELS,Ft),_.pixelStorei(P.UNPACK_SKIP_ROWS,ft),_.pixelStorei(P.UNPACK_SKIP_IMAGES,cn),Y===0&&k.generateMipmaps&&P.generateMipmap(Ue),_.unbindTexture()},this.initRenderTarget=function(E){J.get(E).__webglFramebuffer===void 0&&H.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?H.setTextureCube(E,0):E.isData3DTexture?H.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?H.setTexture2DArray(E,0):H.setTexture2D(E,0),_.unbindTexture()},this.resetState=function(){q=0,W=0,V=null,_.reset(),pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return bi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=ut._getDrawingBufferColorSpace(e),n.unpackColorSpace=ut._getUnpackColorSpace()}}const h0={portrait:[1.6,2.25],landscape:[2.25,1.6]},kb={left:.27,center:.5,right:.73},Bc=.018,Cn=.007,zt=4,p0=1/.05,Bb=1/960,zb=2,$i=72,m0=24,Ef=.36,$x=.095,Vb=.0135,Bl=.036,aa=.15,g0=1024,v0={glossy:{roughness:.42,metalness:0,clearcoat:1,clearcoatRoughness:.06,foil:0,anisotropy:0},matte:{roughness:.85,metalness:0,clearcoat:0,clearcoatRoughness:.6,foil:0,anisotropy:0},holographic:{roughness:.3,metalness:0,clearcoat:1,clearcoatRoughness:.04,foil:1,anisotropy:0},metallic:{roughness:.36,metalness:.75,clearcoat:.5,clearcoatRoughness:.18,foil:0,anisotropy:.7}},_0={silver:{color:"#d9dce2",roughness:.16},gold:{color:"#e4b965",roughness:.2},graphite:{color:"#4d4f55",roughness:.28}},sc=[0,.07,.93,1],Hb=[-.95,-.28,.28,.95],Gb=9,Wb=`
varying vec2 vFoilUv;
varying vec3 vFoilX;
varying vec3 vFoilY;
`,Xb=`
vFoilUv = uv;
vFoilX = normalize((modelViewMatrix * vec4(1.0, 0.0, 0.0, 0.0)).xyz);
vFoilY = normalize((modelViewMatrix * vec4(0.0, 1.0, 0.0, 0.0)).xyz);
`,$b=`
uniform float foilStrength;
uniform float foilAspect;
uniform vec3 foilKey;
uniform vec3 foilTop;
varying vec2 vFoilUv;
varying vec3 vFoilX;
varying vec3 vFoilY;

float foilHash(vec2 p) {
  p = fract(p * vec2(234.34, 435.345));
  p += dot(p, p + 34.23);
  return fract(p.x * p.y);
}
float foilBump(float t, float center, float width) {
  float x = (t - center) / width;
  return max(0.0, 1.0 - x * x);
}
vec3 foilSpectrum(float t) {
  return vec3(
    foilBump(t, 0.82, 0.32) + 0.4 * foilBump(t, 0.02, 0.12),
    foilBump(t, 0.5, 0.26),
    foilBump(t, 0.18, 0.24)
  );
}
vec3 foilGrating(float u, float spacing) {
  vec3 color = vec3(0.0);
  for (int m = 1; m <= 2; m++) {
    float order = float(m);
    float t = (spacing * abs(u) / order - 0.38) / 0.32;
    color += foilSpectrum(t) / order;
  }
  return color;
}
vec3 foilShard(vec2 p) {
  vec2 base = floor(p);
  float best = 9.0;
  float edge = 9.0;
  vec2 id = base;
  for (int j = -1; j <= 1; j++) {
    for (int i = -1; i <= 1; i++) {
      vec2 cell = base + vec2(float(i), float(j));
      vec2 site = cell + vec2(foilHash(cell), foilHash(cell + 7.31)) * 0.9 + 0.05;
      float d = length(site - p);
      if (d < best) {
        edge = best;
        best = d;
        id = cell;
      } else if (d < edge) {
        edge = d;
      }
    }
  }
  return vec3(foilHash(id + 3.17), foilHash(id + 11.73), edge - best);
}
`,Yb=`
if (foilStrength > 0.0) {
  vec3 foilView = normalize(vViewPosition);
  vec3 foilNormal = normalize(normal);
  vec2 foilP = vec2(vFoilUv.x, vFoilUv.y * foilAspect);
  vec3 shard = foilShard(foilP * 26.0);
  vec2 ray = foilP - vec2(-1.6, 2.6 * foilAspect);
  float angle = atan(ray.y, ray.x) + (shard.x - 0.5) * 0.16;
  vec3 grating = normalize(vFoilX * cos(angle) + vFoilY * sin(angle));
  float spacing = 1.7 * (0.95 + shard.y * 0.1);
  vec3 rainbow = foilGrating(dot(foilKey + foilView, grating), spacing);
  rainbow += 0.6 * foilGrating(dot(foilTop + foilView, grating), spacing);
  rainbow *= 0.8 + 0.2 * smoothstep(0.0, 0.04, shard.z);
  rainbow = max(rainbow - 0.35 * min(rainbow.r, min(rainbow.g, rainbow.b)), 0.0);
  vec2 grid = foilP * 64.0;
  vec2 cell = floor(grid);
  vec2 jitter = vec2(foilHash(cell + 1.7), foilHash(cell + 9.2));
  float flake = smoothstep(0.32, 0.06, length(fract(grid) - jitter * 0.6 - 0.2)) * step(0.45, foilHash(cell + 4.4));
  vec3 facet = normalize(foilNormal + (vFoilX * (jitter.x - 0.5) + vFoilY * (jitter.y - 0.5)) * 0.8);
  float glint = pow(max(dot(reflect(-foilKey, facet), foilView), 0.0), 28.0);
  glint += 0.7 * pow(max(dot(reflect(-foilTop, facet), foilView), 0.0), 28.0);
  float fine = 1.0 - smoothstep(0.35, 0.9, max(fwidth(grid.x), fwidth(grid.y)));
  vec3 sparkle = flake * glint * fine * (vec3(0.7) + foilGrating(dot(foilKey + foilView, grating) + jitter.x * 0.4, spacing));
  float ink = dot(diffuseColor.rgb, vec3(0.2126, 0.7152, 0.0722));
  float foil = foilStrength * (0.08 + 0.92 * smoothstep(0.04, 0.7, ink));
  float facing = clamp(dot(foilNormal, foilView), 0.0, 1.0);
  float tint = clamp(dot(rainbow, vec3(0.4)), 0.0, 1.0);
  outgoingLight = outgoingLight * (1.0 - foil * (0.3 + 0.32 * tint)) + (rainbow * 0.62 * (0.4 + 0.6 * facing) + sparkle * 1.6) * foil;
}
`,gr=(t,e,n)=>Math.min(n,Math.max(e,t)),qo=(t,e,n)=>t+(e-t)*n,wf=(t,e)=>{try{const n=document.createElement("canvas").getContext("2d");if(!n)return e;n.fillStyle="#000000",n.fillStyle=t;const i=n.fillStyle;if(i.startsWith("#")){const s=parseInt(i.slice(1),16);return[(s>>16&255)/255,(s>>8&255)/255,(s&255)/255]}const r=i.match(/[\d.]+/g);return!r||r.length<3?e:[Number(r[0])/255,Number(r[1])/255,Number(r[2])/255]}catch{return e}},qb=t=>.2126*t[0]+.7152*t[1]+.0722*t[2],oc=(t,e=1)=>`rgba(${Math.round(t[0]*255)}, ${Math.round(t[1]*255)}, ${Math.round(t[2]*255)}, ${e})`,Yx=t=>{let e=t>>>0;return()=>{e=e+1831565813>>>0;let n=e;return n=Math.imul(n^n>>>15,n|1),n^=n+Math.imul(n^n>>>7,n|61),((n^n>>>14)>>>0)/4294967296}},_h=(t,e,n,i,r,s)=>{const o=Math.max(0,Math.min(s,i/2,r/2)),a=o*.4477;t.moveTo(e+o,n),t.lineTo(e+i-o,n),t.bezierCurveTo(e+i-a,n,e+i,n+a,e+i,n+o),t.lineTo(e+i,n+r-o),t.bezierCurveTo(e+i,n+r-a,e+i-a,n+r,e+i-o,n+r),t.lineTo(e+o,n+r),t.bezierCurveTo(e+a,n+r,e,n+r-a,e,n+r-o),t.lineTo(e,n+o),t.bezierCurveTo(e,n+a,e+a,n,e+o,n)},Tf=(t,e)=>{if(!e)return Promise.resolve(null);const n=t.get(e);if(n)return n;const i=new Promise(r=>{const s=new Image;s.crossOrigin="anonymous",s.decoding="async",s.onload=()=>r(s),s.onerror=()=>r(null),s.src=e});return t.set(e,i),i},x0=(t,e)=>{const[n,i]=h0[t]||h0.portrait,r=qo(.03,Math.min(n,i)*.2,gr(e,0,1)),s={width:.34,height:.07,y:i/2-.13},o=i/2-.055;return{width:n,height:i,radius:r,slot:s,ringY:o,hangY:o+$x}},Kb=t=>{const{width:e,height:n,radius:i,slot:r}=t,s=new au;_h(s,-e/2+Cn,-n/2+Cn,e-Cn*2,n-Cn*2,Math.max(i-Cn,.005));const o=new fh;_h(o,-r.width/2-Cn,r.y-r.height/2-Cn,r.width+Cn*2,r.height+Cn*2,r.height/2+Cn),s.holes.push(o);const a=new lu(s,{depth:Bc,bevelEnabled:!0,bevelThickness:Cn,bevelSize:Cn,bevelSegments:5,curveSegments:24});a.translate(0,0,-Bc/2);const l=new Np(s,24),c=l.getAttribute("position"),f=l.getAttribute("uv");for(let h=0;h<c.count;h++)f.setXY(h,(c.getX(h)+e/2)/e,(c.getY(h)+n/2)/n);return f.needsUpdate=!0,{body:a,face:l}},y0=t=>{const e=new au,n=t*1.16;_h(e,-n/2+.014,-aa/2+.014,n-.028,aa-.028,.024);const i=new lu(e,{depth:.02,bevelEnabled:!0,bevelThickness:.014,bevelSize:.014,bevelSegments:6,curveSegments:10});return i.translate(0,0,-.01),i},Zb=t=>{const e=sc.length,n=new $n;n.setAttribute("position",new ei(new Float32Array(t*e*3),3)),n.setAttribute("normal",new ei(new Float32Array(t*e*3),3)),n.setAttribute("uv",new ei(new Float32Array(t*e*2),2));const i=[];for(let r=0;r<t-1;r++)for(let s=0;s<e-1;s++){const o=r*e+s;i.push(o,o+e,o+1,o+1,o+e,o+e+1)}return n.setIndex(i),n},jb=t=>{const e=new xx;e.background=new at(.035,.035,.04);const n=new Wa(1,1),i=[],r=(a,l,c,f=0)=>{const h=new Rp({color:new at(a,a,a),side:di});i.push(h);const u=new en(n,h);u.position.set(...l),u.scale.set(c[0],c[1],1),u.lookAt(0,0,0),u.rotateZ(f),e.add(u)};r(2.6,[0,4.5,8],[9,4]),r(6,[-5.5,.5,7],[.9,14]),r(4,[5,-.5,8],[.6,14]),r(3.5,[0,-1,9],[24,.35],Math.PI/3),r(2.5,[1,2.5,9],[24,.2],Math.PI/3),r(1.4,[0,6,-6],[12,4]),r(.5,[0,-7,1],[16,6]),r(.9,[8,0,-2],[4,10]);const s=new mh(t),o=s.fromScene(e,.035);return s.dispose(),n.dispose(),i.forEach(a=>a.dispose()),o},Af=(t,e)=>{const n=new ch(t);return n.colorSpace=Mn,n.anisotropy=e,n},Jb=()=>{const e=document.createElement("canvas");e.width=128,e.height=128;const n=e.getContext("2d");if(!n)return new ch(e);const i=Yx(7),r=Float32Array.from({length:128*128},()=>i()),s=(l,c)=>{let f=0;for(let h=-1;h<=1;h++)for(let u=-1;u<=1;u++)f+=r[(c+h+128)%128*128+(l+u+128)%128];return f/9*1.6},o=n.createImageData(128,128);for(let l=0;l<128;l++)for(let c=0;c<128;c++){const f=s((c-1+128)%128,l)-s((c+1)%128,l),h=s(c,(l-1+128)%128)-s(c,(l+1)%128),u=Math.hypot(f,h,1),p=(l*128+c)*4;o.data[p]=(f/u*.5+.5)*255,o.data[p+1]=(h/u*.5+.5)*255,o.data[p+2]=(1/u*.5+.5)*255,o.data[p+3]=255}n.putImageData(o,0,0);const a=new ch(e);return a.wrapS=Br,a.wrapT=Br,a.repeat.set(5,7),a},Qb=()=>{const n=Yx(19),i=Float32Array.from({length:128*128},()=>n()),r=l=>Math.sqrt(Math.max(0,1-4*l*l)),s=(l,c)=>{const f=(l%128+128)%128,h=(c%128+128)%128,u=f/128*8,p=h/128*8,g=Math.floor(u),M=Math.floor(p),m=u-g-.5,d=p-M-.5,v=(g+M)%2===0,S=r(m)*(.55+.45*Math.cos(d*Math.PI*(v?1:.6))),y=r(d)*(.55+.45*Math.cos(m*Math.PI*(v?.6:1)));return(v?Math.max(S,y*.7):Math.max(y,S*.7))+i[h*128+f]*.08},o=new Uint8Array(128*128*4);for(let l=0;l<128;l++)for(let c=0;c<128;c++){const f=(s(c-1,l)-s(c+1,l))*1.6,h=(s(c,l-1)-s(c,l+1))*1.6,u=Math.hypot(f,h,1),p=(l*128+c)*4;o[p]=(f/u*.5+.5)*255,o[p+1]=(h/u*.5+.5)*255,o[p+2]=(1/u*.5+.5)*255,o[p+3]=255}const a=new Ex(o,128,128);return a.wrapS=Br,a.wrapT=Br,a.magFilter=nn,a.minFilter=Cr,a.generateMipmaps=!0,a.needsUpdate=!0,a},S0=(t,e,n,i)=>{const r=t.getContext("2d");if(!r)return;const{width:s,height:o}=t;if(r.fillStyle=oc(n),r.fillRect(0,0,s,o),e){const a=(i==="contain"?Math.min:Math.max)(s/e.width,o/e.height),l=e.width*a,c=e.height*a;r.drawImage(e,(s-l)/2,(o-c)/2,l,c)}},e2=(t,e,n)=>{const r=e?Math.max(64,Math.round(e.width/e.height*192)):384;t.width=192,t.height=r;const s=t.getContext("2d");if(!s)return r/192;if(s.fillStyle=oc(n),s.fillRect(0,0,192,r),e)return s.save(),s.translate(192,0),s.rotate(Math.PI/2),s.drawImage(e,0,0,r,192),s.restore(),r/192;const o=qb(n)>.5?[0,0,0]:[1,1,1];s.fillStyle=oc(o,.05);for(let a=0;a<r;a+=4)s.fillRect(0,a,192,1);s.fillStyle=oc(o,.2);for(let a=0;a<r;a+=14)s.fillRect(192*.075,a,2,8),s.fillRect(192*.925-2,a,2,8);return r/192},t2=()=>{const t=()=>Array.from({length:zt+1},()=>new F);return{nodes:t(),previous:t(),velocities:t(),lengths:new Float64Array(zt),impulses:new Float64Array(zt),rest:1,anchor:new F,body:{position:new F,previous:new F,velocity:new F,quaternion:new Ui,previousQuaternion:new Ui,angular:new F,mass:1,inverseInertia:new F(1,1,1),hang:new F},grab:null,turn:0,twist:0,twistRaw:0,calm:0}},xt={a:new F,b:new F,c:new F,d:new F,e:new F,f:new F,g:new F,pin:new F,q:new Ui,r:new Ui},Ip=(t,e,n)=>(xt.r.copy(t.quaternion).invert(),n.copy(e).applyQuaternion(xt.r),n.set(n.x*t.inverseInertia.x,n.y*t.inverseInertia.y,n.z*t.inverseInertia.z),n.applyQuaternion(t.quaternion)),qx=(t,e)=>{const{x:n,y:i,z:r,w:s}=t;t.x+=.5*(e.x*s+e.y*r-e.z*i),t.y+=.5*(e.y*s+e.z*n-e.x*r),t.z+=.5*(e.z*s+e.x*i-e.y*n),t.w+=.5*(-e.x*n-e.y*i-e.z*r),t.normalize()},Kx=(t,e,n)=>{const i=xt.c.crossVectors(e,n);return 1/t.mass+i.dot(Ip(t,i,xt.d))},Zx=(t,e,n)=>{t.position.addScaledVector(n,1/t.mass),qx(t.quaternion,Ip(t,xt.e.crossVectors(e,n),xt.f))},n2=(t,e,n,i)=>{const{nodes:r,body:s}=t,o=r[e],a=e===0?0:p0,l=e===zt-1,c=xt.g;let f=r[e+1];l&&(c.copy(s.hang).applyQuaternion(s.quaternion),f=xt.b.copy(s.position).add(c));const h=xt.a.subVectors(f,o),u=h.length(),p=u-t.rest;if(p<=0||u<1e-9)return;const g=h.divideScalar(u),M=l?Kx(s,c,g):p0,m=(u-t.lengths[e])/n,v=(i.hold*Math.tanh(i.stiffness*p/i.hold)+i.spring*p+i.bandDamping*Math.max(0,m))*n*n-t.impulses[e];if(v<=0)return;const S=Math.min(p/(a+M),v);t.impulses[e]+=S,a&&o.addScaledVector(g,S*a),l?Zx(s,c,g.multiplyScalar(-S)):f.addScaledVector(g,-S*M)},i2=(t,e,n)=>{const i=xt.g.copy(e.local).applyQuaternion(t.quaternion),r=xt.a.copy(n).sub(t.position).sub(i),s=r.length();if(s<1e-9)return;const o=r.divideScalar(s),a=s/Kx(t,i,o);Zx(t,i,o.multiplyScalar(a))},zl=(t,e,n)=>{const{nodes:i,previous:r,velocities:s,body:o,anchor:a}=t;i[0].copy(a);for(let c=1;c<=zt;c++)i[c].copy(i[c-1]),n?i[c].x+=t.rest:i[c].y-=t.rest;o.quaternion.identity(),n&&o.quaternion.setFromAxisAngle(new F(0,0,1),Math.PI/2),o.hang.set(0,e.hangY,0);const l=xt.a.copy(o.hang).applyQuaternion(o.quaternion);o.position.copy(i[zt]).sub(l),o.previous.copy(o.position),o.previousQuaternion.copy(o.quaternion),o.velocity.set(0,0,0),o.angular.set(0,0,0);for(let c=0;c<=zt;c++)r[c].copy(i[c]),s[c].set(0,0,0);t.lengths.fill(t.rest),t.turn=0,t.twist=0,t.twistRaw=0,t.calm=0},r2=(t,e,n)=>{t.rest=n/zt;const{width:i,height:r}=e,s=t.body,o=Bc+Cn*2;s.mass=1,s.inverseInertia.set(12/(r*r+o*o),12/(i*i+o*o),12/(i*i+r*r)),s.hang.set(0,e.hangY,0)},s2=(t,e,n,i)=>{const r=Math.max(1,Math.ceil(e/Bb-1e-6)),s=e/r,{nodes:o,previous:a,velocities:l,body:c}=t,f=n.breeze*(Math.sin(i*.53)*.7+Math.sin(i*1.31+1.7)*.3)*3,h=n.breeze*Math.sin(i*.37+.6)*2,u=t.grab,p=xt.pin,g=Math.exp(-2*s),M=Math.exp(-n.linearDrag*s),m=Math.exp(-n.angularDrag*s);for(let v=0;v<r;v++){for(let b=1;b<zt;b++){const N=l[b];N.y-=n.gravity*s,N.x+=f*s,N.z+=h*s,a[b].copy(o[b]),o[b].addScaledVector(N,s)}c.previous.copy(c.position),c.previousQuaternion.copy(c.quaternion);const S=c.quaternion;if(u){const b=xt.q.copy(u.rotation).multiply(xt.r.copy(S).invert());b.w<0&&b.set(-b.x,-b.y,-b.z,-b.w);const N=xt.a.set(b.x,b.y,b.z).multiplyScalar(2*n.grip);N.addScaledVector(c.angular,-6),c.angular.addScaledVector(Ip(c,N,xt.b),s)}const y=xt.a.set(0,1,0).applyQuaternion(S),w=xt.b.set(-y.x*y.z,-y.y*y.z,1-y.z*y.z);if(w.lengthSq()>.001){const b=xt.d.set(0,0,1).applyQuaternion(S),N=Math.atan2(xt.e.crossVectors(w,b).dot(y),w.dot(b));let X=N-t.twistRaw;X>Math.PI?X-=Math.PI*2:X<-Math.PI&&(X+=Math.PI*2),t.twist+=X,t.twistRaw=N}if(!u){const b=c.angular.dot(y);c.angular.addScaledVector(y,(n.twist*(t.turn-t.twist)-n.twistDamping*b)*s)}c.velocity.y-=n.gravity*s,c.velocity.x+=f*.35*s,c.velocity.z+=h*.35*s,c.position.addScaledVector(c.velocity,s),qx(c.quaternion,xt.f.copy(c.angular).multiplyScalar(s)),t.impulses.fill(0),u&&p.lerpVectors(u.from,u.target,(v+1)/r);for(let b=0;b<zb;b++){for(let N=0;N<zt;N++)n2(t,N,s,n);u&&i2(c,u,p)}for(let b=1;b<zt;b++){const N=l[b].subVectors(o[b],a[b]).divideScalar(s).multiplyScalar(g);N.multiplyScalar(1/(1+n.nodeAir*N.length()*s))}c.velocity.subVectors(c.position,c.previous).divideScalar(s);const T=xt.q.copy(c.previousQuaternion).invert().premultiply(c.quaternion);c.angular.set(T.x,T.y,T.z).multiplyScalar(2/s*(T.w<0?-1:1));const C=xt.a.set(0,0,1).applyQuaternion(c.quaternion),x=c.velocity.dot(C),R=xt.b.copy(c.velocity).addScaledVector(C,-x);R.multiplyScalar(1/(1+n.air*R.length()*s)),c.velocity.copy(R).addScaledVector(C,x/(1+n.broadside*Math.abs(x)*s)).multiplyScalar(M),c.angular.multiplyScalar(m/(1+n.spinAir*c.angular.length()*s)),c.velocity.lengthSq()>3600&&c.velocity.setLength(60),c.angular.lengthSq()>1600&&c.angular.setLength(40),o[zt].copy(c.hang).applyQuaternion(c.quaternion).add(c.position);for(let b=0;b<zt;b++)t.lengths[b]=o[b].distanceTo(o[b+1])}u&&u.from.copy(u.target);let d=c.velocity.lengthSq()+c.angular.lengthSq()*.3;for(let v=1;v<zt;v++)d+=l[v].lengthSq()*.05;t.calm=d<2e-4?t.calm+e:0},o2=({frontImage:t,backImage:e,alt:n="Portrait card",imageFit:i="cover",cardColor:r="#ffffff",orientation:s="portrait",finish:o="glossy",cornerRadius:a=.3,size:l=.6,anchor:c="center",strapLength:f=.5,strapImage:h,strapColor:u="#111111",strapWidth:p=.65,metal:g="silver",gravity:M=1,damping:m=.5,elasticity:d=.5,breeze:v=.5,interactive:S=!0,intro:y=!0,className:w="",style:T})=>{const C=le.useRef(null),x=le.useRef(null),R=le.useRef(null),b=le.useRef(null),[N,X]=le.useState(!1);x.current={frontImage:t,backImage:e,imageFit:i==="contain"?"contain":"cover",cardColor:r,orientation:s==="landscape"?"landscape":"portrait",finish:o,cornerRadius:a,size:l,anchor:c,strapLength:f,strapImage:h,strapColor:u,strapWidth:p,metal:g,gravity:M,damping:m,elasticity:d,breeze:v,interactive:S,intro:y},le.useEffect(()=>{var D;(D=R.current)==null||D.call(R)}),le.useEffect(()=>{const D=C.current;if(!D)return;let I;try{I=new Ob({antialias:!0,alpha:!0,powerPreference:"high-performance"})}catch{X(!1);return}I.setClearColor(0,0),I.outputColorSpace=Mn,I.toneMapping=gp,I.toneMappingExposure=1;const q=I.domElement;q.className="lanyard-canvas",q.setAttribute("aria-hidden","true"),D.appendChild(q);const W=Math.min(8,I.capabilities.getMaxAnisotropy()),V=new xx,O=jb(I);V.environment=O.texture;const G=new jn(m0,1,.1,200),ee=new Vg(16777215,1.6);ee.position.set(-2.5,4,6);const Se=new Vg(16777215,.35);Se.position.set(3,-1,4),V.add(ee,Se);const Le=new Map,Ye={front:null,back:null,strap:null},qe=document.createElement("canvas"),$e=document.createElement("canvas"),U=document.createElement("canvas"),$=Af(qe,W),se=Af($e,W),Ce=Af(U,W);Ce.wrapS=Ci,Ce.wrapT=Br;const Re=Jb(),Oe=Qb(),Ke={foilStrength:{value:0},foilAspect:{value:1.4},foilKey:{value:new F},foilTop:{value:new F}},ie=Y=>{Object.assign(Y.uniforms,Ke),Y.vertexShader=Y.vertexShader.replace("#include <common>",`#include <common>
${Wb}`).replace("#include <project_vertex>",`#include <project_vertex>
${Xb}`),Y.fragmentShader=Y.fragmentShader.replace("#include <common>",`#include <common>
${$b}`).replace("#include <opaque_fragment>",`${Yb}
#include <opaque_fragment>`)},he=new Il({map:$,normalMap:Re,normalScale:new De(.06,.06)}),ue=new Il({map:se,normalMap:Re,normalScale:new De(.06,.06)});he.onBeforeCompile=ie,ue.onBeforeCompile=ie;const ce=new Il,_e=new Fx({metalness:1}),Q=new Il({map:Ce,normalMap:Oe,normalScale:new De(.7,.7),roughness:.68,sheen:1,sheenRoughness:.42,sheenColor:new at(.32,.32,.34),side:di}),fe=new Ks,Ee=new en(void 0,ce),ve=new en(void 0,he),P=new en(void 0,ue),Be=new en(new kc($x,Vb,18,72),_e);Be.rotation.y=Math.PI/2-.7,fe.add(Ee,ve,P,Be),V.add(fe);const He=Zb($i),A=new en(He,Q);A.frustumCulled=!1,V.add(A);const _=new Ks,z=new en(y0(Ef),_e);z.position.y=Bl+aa/2-.004;const J=new en(new kc(Bl,.0105,14,40),_e);_.add(z,J),V.add(_);const H=t2(),xe=[],Te=new F,ne=new F,ae=new Ax(xe,!1,"centripetal"),Ae={width:1,height:1};let Ne=x0("portrait",.3),we={},be=Ef,Ge=2,Xe=0,je=performance.now(),B=0,Pe=!0,oe=!0,de=!1,pe=!1,re=null,Ie=0;const ze=window.matchMedia("(prefers-reduced-motion: reduce)");let rt=ze.matches;const it=()=>{const Y=x.current,ge=wf(Y.cardColor,[1,1,1]),me=g0,ye=Math.round(g0*Ne.height/Ne.width);(qe.width!==me||qe.height!==ye)&&(qe.width=me,qe.height=ye,$e.width=me,$e.height=ye,$.dispose(),se.dispose()),S0(qe,Ye.front,ge,Y.imageFit),S0($e,Ye.back||Ye.front,ge,Y.imageFit),$.needsUpdate=!0,se.needsUpdate=!0,ln()},It=()=>{const Y=x.current;Ge=e2(U,Ye.strap,wf(Y.strapColor,[.07,.07,.07])),Oe.repeat.set(2,2*Ge),Ce.dispose(),Ce.needsUpdate=!0,ln()},Ut=()=>{const Y=x.current,ge=Ae.width/Ae.height;let me=Ne.height/gr(Y.size,.15,.9);const ye=Ne.width/.72;me*ge<ye&&(me=ye/ge);const ke=me*ge;G.aspect=ge,G.position.set(0,0,me/2/Math.tan(m0*Math.PI/360)),G.lookAt(0,0,0),G.updateProjectionMatrix(),G.updateMatrixWorld(),Ke.foilKey.value.set(-2.5,4,6).normalize().transformDirection(G.matrixWorldInverse),Ke.foilTop.value.set(.5,4.5,8).normalize().transformDirection(G.matrixWorldInverse);const Ze=((kb[Y.anchor]??.5)-.5)*ke,Qe=me/2+.2,Je=me/2-me*qo(.12,.42,gr(Y.strapLength,0,1))+(Ne.hangY-Ne.height/2);H.anchor.set(Ze,Qe,0),r2(H,Ne,Qe-Je),H.nodes[0].copy(H.anchor),H.previous[0].copy(H.anchor)},Wr=()=>{const Y=x.current,ge=`${Y.orientation}|${Y.cornerRadius}`;if(ge!==we.layoutKey){Ne=x0(Y.orientation,Y.cornerRadius);const Je=Kb(Ne);Ee.geometry.dispose(),ve.geometry.dispose(),P.geometry.dispose(),Ee.geometry=Je.body,ve.geometry=Je.face,P.geometry=Je.face.clone(),ve.position.z=Bc/2+Cn+6e-4,P.rotation.y=Math.PI,P.position.z=-.0166,Be.position.set(0,Ne.ringY,0),we.framingKey=""}const me=`${ge}|${Y.size}|${Y.anchor}|${Y.strapLength}|${Ae.width}|${Ae.height}`;me!==we.framingKey&&(Ut(),de?ge!==we.layoutKey&&zl(H,Ne,!1):(zl(H,Ne,Y.intro&&!rt),de=!0));const ye=`${Y.frontImage}|${Y.backImage}|${Y.strapImage}`;if(ye!==we.imageKey){const Je=++Ie;Promise.all([Tf(Le,Y.frontImage),Tf(Le,Y.backImage),Tf(Le,Y.strapImage)]).then(([St,gt,mt])=>{!oe||Je!==Ie||(Ye.front=St,Ye.back=gt,Ye.strap=mt,it(),It())})}const ke=`${ge}|${Y.cardColor}|${Y.imageFit}`;ke!==we.faceKey&&it(),Y.strapColor!==we.strapColor&&It();const Ze=v0[Y.finish]||v0.glossy,Qe=wf(Y.cardColor,[1,1,1]);[he,ue].forEach(Je=>{const St=Je.anisotropy>0!=Ze.anisotropy>0||Je.clearcoat>0!=Ze.clearcoat>0;Je.roughness=Ze.roughness,Je.metalness=Ze.metalness,Je.clearcoat=Ze.clearcoat,Je.clearcoatRoughness=Ze.clearcoatRoughness,Je.anisotropy=Ze.anisotropy,St&&(Je.needsUpdate=!0)}),Ke.foilStrength.value=Ze.foil,Ke.foilAspect.value=Ne.height/Ne.width,ce.color.setRGB(Qe[0]*.92,Qe[1]*.92,Qe[2]*.92,Mn),ce.roughness=Math.min(Ze.roughness,.35),ce.metalness=Ze.metalness,ce.clearcoat=1,ce.clearcoatRoughness=.08;const Ve=_0[Y.metal]||_0.silver;_e.color.set(Ve.color),_e.roughness=Ve.roughness,be=Ef*gr(Y.strapWidth,.4,2),be!==we.strapScale&&(z.geometry.dispose(),z.geometry=y0(be)),q.style.touchAction=Y.interactive?"pan-y":"auto",Y.interactive||(H.grab=null,re=null,xi("")),we={layoutKey:ge,framingKey:me,imageKey:ye,faceKey:ke,strapColor:Y.strapColor,strapScale:be},ln()},_n=Array.from({length:$i},()=>new F),ki=Array.from({length:$i},()=>new F),Xr=Hb.map(Y=>[Math.cos(Y),Math.sin(Y)]),In={tangent:new F,toCamera:new F,basis:new Tt,up:new F,across:new F,facing:new F,end:new F},kt=()=>{const Y=H.nodes[zt],ge=Bl+aa+.05;let me=zt-1;for(;me>0&&H.nodes[me].distanceTo(Y)<ge*1.1;)me--;const ye=In.up.subVectors(H.nodes[me],Y);ye.lengthSq()<1e-8&&ye.set(0,1,0).applyQuaternion(H.body.quaternion),ye.normalize(),Te.copy(Y).addScaledVector(ye,ge),ne.copy(Y).addScaledVector(ye,Bl+aa*.35),xe.length=0;for(let ft=0;ft<=me;ft++)xe.push(H.nodes[ft]);xe.push(Te,ne),ae.updateArcLengths();for(let ft=0;ft<$i;ft++)ae.getPointAt(ft/($i-1),_n[ft]);const ke=ae.getLength(),Ze=Math.max(.001,1-Te.distanceTo(ne)/Math.max(ke,.001)),Qe=He.getAttribute("position"),Ve=He.getAttribute("normal"),Je=He.getAttribute("uv"),St=sc.length,gt=H.rest*zt,mt=gt/(be*Ge),Yt=be/Math.pow(Math.max(1,ke/Math.max(gt,.001)),.35),{tangent:Ue,toCamera:qt,across:tt,facing:Ft}=In;for(let ft=0;ft<$i;ft++){Ue.subVectors(_n[Math.min($i-1,ft+1)],_n[Math.max(0,ft-1)]),Ue.lengthSq()<1e-12&&Ue.set(0,-1,0),Ue.normalize(),qt.subVectors(G.position,_n[ft]).normalize();const cn=ki[ft].crossVectors(qt,Ue);cn.lengthSq()<1e-10&&cn.copy(ft>0?ki[ft-1]:xt.a.set(1,0,0)),cn.normalize(),ft>0&&cn.dot(ki[ft-1])<0&&cn.negate();const zi=-H.twist*Math.pow(Math.min(1,ft/($i-1)/Ze),1.3);Ft.crossVectors(Ue,cn),tt.copy(cn).multiplyScalar(Math.cos(zi)).addScaledVector(Ft,Math.sin(zi)),Ft.crossVectors(Ue,tt);const pt=_n[ft],Ct=(1-ft/($i-1))*mt;for(let xn=0;xn<St;xn++){const vt=ft*St+xn,Yn=(sc[xn]-.5)*Yt,[yi,xs]=Xr[xn];Qe.setXYZ(vt,pt.x+tt.x*Yn,pt.y+tt.y*Yn,pt.z+tt.z*Yn),Ve.setXYZ(vt,Ft.x*yi+tt.x*xs,Ft.y*yi+tt.y*xs,Ft.z*yi+tt.z*xs),Je.setXY(vt,sc[xn],Ct)}}In.end.copy(tt),Qe.needsUpdate=!0,Ve.needsUpdate=!0,Je.needsUpdate=!0,tt.copy(In.end).addScaledVector(ye,-In.end.dot(ye)).normalize(),Ft.crossVectors(tt,ye).normalize(),In.basis.makeBasis(tt,ye,Ft),_.quaternion.setFromRotationMatrix(In.basis),_.position.copy(Y)},an=()=>{fe.position.copy(H.body.position),fe.quaternion.copy(H.body.quaternion),kt(),I.render(V,G)},Jt=()=>{const Y=x.current,ge=40*gr(Y.gravity,0,3),me=Math.max(ge,20),ye=gr(Y.elasticity,0,1),ke=gr(Y.damping,0,1);return{gravity:ge,hold:me*qo(2.2,5.5,ye),stiffness:me*10*zt,spring:me*qo(.1,.4,ye)*zt,bandDamping:me*qo(.3,.08,ye)*zt,linearDrag:.25*Math.pow(16,ke),angularDrag:.5*Math.pow(12,ke),air:.15,broadside:.5,spinAir:.03,nodeDrag:2,nodeAir:.2,twist:30,twistDamping:3,grip:40,gripDamping:6,breeze:rt?0:gr(Y.breeze,0,1)}},ot=Y=>{if(Xe=0,!oe||!Pe||document.hidden)return;const ge=Math.min(1/30,Math.max(1/240,(Y-je)/1e3));je=Y,B+=ge;const me=Jt();s2(H,ge,me,B);const ye=H.body;Number.isFinite(ye.position.x+ye.position.y+ye.position.z+ye.quaternion.w)||(H.grab=null,zl(H,Ne,!1)),an(),H.calm>1.2&&!H.grab&&me.breeze===0||(Xe=requestAnimationFrame(ot))},ln=()=>{Xe||!Pe||!oe||document.hidden||(H.calm=0,je=performance.now(),Xe=requestAnimationFrame(ot))},ii=()=>{cancelAnimationFrame(Xe),Xe=0},Un=new Bw,ar=new De,ri=Y=>{const ge=q.getBoundingClientRect();ar.set((Y.clientX-ge.left)/ge.width*2-1,-((Y.clientY-ge.top)/ge.height)*2+1),Un.setFromCamera(ar,G)},Bi=()=>(fe.updateMatrixWorld(),Un.intersectObjects([Ee,ve,P],!1)[0]||null),xi=Y=>{q.style.cursor!==Y&&(q.style.cursor=Y)},Xa=Y=>{const ge=H.body,me=xt.a.set(0,1,0).applyQuaternion(ge.quaternion);let ye=H.turn>0?-1:1;if(H.turn===0){const ke=xt.c.subVectors(Y,G.position).normalize();ye=xt.b.subVectors(Y,ge.position).cross(ke).dot(me)<0?-1:1}H.turn=H.turn===0?Math.PI*ye:0,ge.angular.addScaledVector(me,Gb*ye)};b.current=()=>{!x.current.interactive||H.grab||(Xa(H.body.position),ln())};const $a=Y=>{var me;if(!x.current.interactive||Y.button>0||H.grab)return;ri(Y);const ge=Bi();ge&&(H.grab={pointerId:Y.pointerId,local:ge.point.clone().sub(H.body.position).applyQuaternion(H.body.quaternion.clone().invert()),rotation:H.body.quaternion.clone(),reach:ge.distance,from:ge.point.clone(),target:ge.point.clone()},re={x:Y.clientX,y:Y.clientY,time:performance.now(),point:ge.point.clone()},(me=q.setPointerCapture)==null||me.call(q,Y.pointerId),xi("grabbing"),Y.preventDefault(),ln())},Ya=Y=>{if(x.current.interactive){if(ri(Y),H.grab){if(H.grab.pointerId!==Y.pointerId)return;re&&Math.hypot(Y.clientX-re.x,Y.clientY-re.y)>6&&(re=null),Un.ray.at(H.grab.reach,H.grab.target),ln();return}Y.pointerType!=="touch"&&(pe=!!Bi(),xi(pe?"grab":""))}},lr=Y=>{var ge;!H.grab||H.grab.pointerId!==Y.pointerId||(H.grab=null,re&&Y.type==="pointerup"&&performance.now()-re.time<450&&Xa(re.point),re=null,(ge=q.hasPointerCapture)!=null&&ge.call(q,Y.pointerId)&&q.releasePointerCapture(Y.pointerId),xi(pe&&Y.pointerType!=="touch"?"grab":""),ln())},Eo=Y=>{!x.current.interactive||Y.touches.length!==1||(ri(Y.touches[0]),Bi()&&Y.preventDefault())};q.addEventListener("pointerdown",$a),q.addEventListener("pointermove",Ya),q.addEventListener("pointerup",lr),q.addEventListener("pointercancel",lr),q.addEventListener("lostpointercapture",lr),q.addEventListener("touchstart",Eo,{passive:!1});const E=()=>{Ae.width=Math.max(1,D.clientWidth),Ae.height=Math.max(1,D.clientHeight),I.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),I.setSize(Ae.width,Ae.height,!1),Wr(),an()},k=new ResizeObserver(E);k.observe(D);const te=new IntersectionObserver(([Y])=>{Pe=Y.isIntersecting,Pe?ln():ii()});te.observe(D);const Z=()=>{document.hidden?ii():ln()},j=Y=>{rt=Y.matches,rt&&!H.grab&&zl(H,Ne,!1),ln()};return document.addEventListener("visibilitychange",Z),ze.addEventListener("change",j),R.current=Wr,E(),X(!0),()=>{oe=!1,ii(),R.current=null,b.current=null,k.disconnect(),te.disconnect(),document.removeEventListener("visibilitychange",Z),ze.removeEventListener("change",j),q.removeEventListener("pointerdown",$a),q.removeEventListener("pointermove",Ya),q.removeEventListener("pointerup",lr),q.removeEventListener("pointercancel",lr),q.removeEventListener("lostpointercapture",lr),q.removeEventListener("touchstart",Eo),[Ee,ve,P,Be,z,J,A].forEach(Y=>Y.geometry.dispose()),[he,ue,ce,_e,Q].forEach(Y=>Y.dispose()),[$,se,Ce,Re,Oe].forEach(Y=>Y.dispose()),O.dispose(),I.dispose(),I.forceContextLoss(),q.remove()}},[]);const L=N&&S;return K.jsx("div",{ref:C,className:`lanyard ${w}`.trim(),style:T,"data-ready":N,role:L?"button":"img",tabIndex:L?0:void 0,"aria-label":L?`${n}. Drag to swing; click or press Enter or Space to flip.`:n,onKeyDown:D=>{var I;!L||D.repeat||D.key!=="Enter"&&D.key!==" "||(D.preventDefault(),(I=b.current)==null||I.call(b))},children:!N&&t&&K.jsx("img",{className:"lanyard__fallback",src:t,alt:"",draggable:"false"})})},a2=()=>{const{data:t,loading:e,error:n,retry:i}=su("/api/profile"),r=t==null?void 0:t.about;return K.jsx("main",{className:"page page--about",children:K.jsxs("div",{className:"about",children:[K.jsxs("figure",{className:"about__portrait",children:[K.jsx("div",{className:"about__lanyard",children:K.jsx(o2,{frontImage:"/images/about.jpg",backImage:"/images/about.jpg",alt:`Portrait of ${(t==null?void 0:t.name)||"Bharanidharan V"}`,strapColor:"#504365",strapWidth:.8,strapLength:.4,size:.58,damping:.65,breeze:.15})}),K.jsxs("figcaption",{className:"about__caption",children:[K.jsx("p",{className:"about__hint",children:"Drag to swing · Click to flip"}),K.jsxs("div",{className:"about__profile",children:[K.jsxs("div",{className:"about__identity",children:[K.jsx("span",{className:"about__handle",children:"@bharanidharan"}),K.jsx("span",{className:"about__availability",children:"Available"})]}),K.jsx(Z_,{className:"about__connect",to:"/connections",children:"Connect"})]})]})]}),K.jsxs("div",{className:"about__text",children:[K.jsx("h1",{className:"page-title",children:"About"}),r?K.jsxs(K.Fragment,{children:[K.jsx("p",{className:"about__intro",children:r.intro}),K.jsxs("dl",{className:"facts",children:[K.jsxs("div",{children:[K.jsx("dt",{children:"Education"}),K.jsx("dd",{children:r.education})]}),K.jsxs("div",{children:[K.jsx("dt",{children:"Interests"}),K.jsx("dd",{children:r.interests.join(", ")})]}),K.jsxs("div",{children:[K.jsx("dt",{children:"What I enjoy"}),K.jsx("dd",{children:r.enjoy})]})]})]}):K.jsx(ru,{loading:e,error:n,retry:i})]})]})})},l2=()=>{const{data:t,loading:e,error:n,retry:i}=su("/api/projects");return K.jsxs("main",{className:"page",children:[K.jsx("h1",{className:"page-title",children:"Projects"}),K.jsx(ru,{loading:e,error:n,retry:i}),K.jsx("div",{className:"projects",children:t==null?void 0:t.map(r=>K.jsxs("article",{className:"project",children:[K.jsx("img",{src:r.image,alt:`${r.title} preview`,loading:"lazy"}),K.jsxs("div",{className:"project__body",children:[K.jsx("h2",{children:r.title}),K.jsx("p",{children:r.description}),K.jsx("ul",{className:"chips",children:r.tech.map(s=>K.jsx("li",{children:s},s))}),K.jsx("a",{className:"btn",href:r.github,target:"_blank",rel:"noreferrer",children:"GitHub"})]})]},r.id))})]})},c2=({c:t})=>{const e=t.href&&/^https?:/.test(t.href),n=K.jsxs(K.Fragment,{children:[K.jsx("span",{className:"conn__label",children:t.label}),K.jsx("span",{className:"conn__value",children:t.value})]});return t.id==="resume"?K.jsxs("li",{className:"conn conn--static",children:[K.jsx("span",{className:"conn__label",children:t.label}),K.jsxs("span",{className:"conn__value conn__actions",children:[K.jsx("a",{href:t.href,target:"_blank",rel:"noreferrer",children:"View"}),K.jsx("a",{href:t.href,download:"Bharanidharan-Resume.pdf",children:"Download"})]})]}):t.href?K.jsx("li",{children:K.jsx("a",{className:"conn",href:t.href,...e?{target:"_blank",rel:"noreferrer"}:{},children:n})}):K.jsx("li",{className:"conn conn--static conn--muted",children:n})},u2=()=>{const{data:t,loading:e,error:n,retry:i}=su("/api/connections");return K.jsxs("main",{className:"page page--narrow",children:[K.jsx("h1",{className:"page-title",children:"Connections"}),K.jsx(ru,{loading:e,error:n,retry:i}),K.jsx("ul",{className:"conns",children:t==null?void 0:t.map(r=>K.jsx(c2,{c:r},r.id))})]})},f2={"/":"home","/about":"about","/projects":"projects","/connections":"connections"},d2=()=>{const{pathname:t}=yo(),e=f2[t]||"home";return le.useEffect(()=>{document.body.dataset.scene=e,window.scrollTo(0,0)},[e]),K.jsxs(K.Fragment,{children:[K.jsx(CE,{className:"flux-lines--global"}),K.jsx(kE,{}),K.jsxs(pE,{children:[K.jsx(Is,{path:"/",element:K.jsx(lg,{})}),K.jsx(Is,{path:"/about",element:K.jsx(a2,{})}),K.jsx(Is,{path:"/projects",element:K.jsx(l2,{})}),K.jsx(Is,{path:"/connections",element:K.jsx(u2,{})}),K.jsx(Is,{path:"*",element:K.jsx(lg,{})})]})]})};Cf.createRoot(document.getElementById("root")).render(K.jsx(N0.StrictMode,{children:K.jsx(SE,{children:K.jsx(d2,{})})}));
