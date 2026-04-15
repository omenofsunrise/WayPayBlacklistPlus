"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const m=require("react"),n=require("styled-components"),q=require("framer-motion");var te={exports:{}},K={};var ue;function Ye(){if(ue)return K;ue=1;var e=Symbol.for("react.transitional.element"),o=Symbol.for("react.fragment");function i(r,s,c){var u=null;if(c!==void 0&&(u=""+c),s.key!==void 0&&(u=""+s.key),"key"in s){c={};for(var f in s)f!=="key"&&(c[f]=s[f])}else c=s;return s=c.ref,{$$typeof:e,type:r,key:u,ref:s!==void 0?s:null,props:c}}return K.Fragment=o,K.jsx=i,K.jsxs=i,K}var Q={};var he;function He(){return he||(he=1,process.env.NODE_ENV!=="production"&&(function(){function e(a){if(a==null)return null;if(typeof a=="function")return a.$$typeof===F?null:a.displayName||a.name||null;if(typeof a=="string")return a;switch(a){case R:return"Fragment";case I:return"Profiler";case j:return"StrictMode";case E:return"Suspense";case V:return"SuspenseList";case W:return"Activity"}if(typeof a=="object")switch(typeof a.tag=="number"&&console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),a.$$typeof){case l:return"Portal";case O:return a.displayName||"Context";case B:return(a._context.displayName||"Context")+".Consumer";case A:var $=a.render;return a=a.displayName,a||(a=$.displayName||$.name||"",a=a!==""?"ForwardRef("+a+")":"ForwardRef"),a;case z:return $=a.displayName||null,$!==null?$:e(a.type)||"Memo";case N:$=a._payload,a=a._init;try{return e(a($))}catch{}}return null}function o(a){return""+a}function i(a){try{o(a);var $=!1}catch{$=!0}if($){$=console;var P=$.error,g=typeof Symbol=="function"&&Symbol.toStringTag&&a[Symbol.toStringTag]||a.constructor.name||"Object";return P.call($,"The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",g),o(a)}}function r(a){if(a===R)return"<>";if(typeof a=="object"&&a!==null&&a.$$typeof===N)return"<...>";try{var $=e(a);return $?"<"+$+">":"<...>"}catch{return"<...>"}}function s(){var a=v.A;return a===null?null:a.getOwner()}function c(){return Error("react-stack-top-frame")}function u(a){if(p.call(a,"key")){var $=Object.getOwnPropertyDescriptor(a,"key").get;if($&&$.isReactWarning)return!1}return a.key!==void 0}function f(a,$){function P(){Y||(Y=!0,console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",$))}P.isReactWarning=!0,Object.defineProperty(a,"key",{get:P,configurable:!0})}function k(){var a=e(this.type);return H[a]||(H[a]=!0,console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.")),a=this.props.ref,a!==void 0?a:null}function b(a,$,P,g,T,L){var _=P.ref;return a={$$typeof:d,type:a,key:$,props:P,_owner:g},(_!==void 0?_:null)!==null?Object.defineProperty(a,"ref",{enumerable:!1,get:k}):Object.defineProperty(a,"ref",{enumerable:!1,value:null}),a._store={},Object.defineProperty(a._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:0}),Object.defineProperty(a,"_debugInfo",{configurable:!1,enumerable:!1,writable:!0,value:null}),Object.defineProperty(a,"_debugStack",{configurable:!1,enumerable:!1,writable:!0,value:T}),Object.defineProperty(a,"_debugTask",{configurable:!1,enumerable:!1,writable:!0,value:L}),Object.freeze&&(Object.freeze(a.props),Object.freeze(a)),a}function w(a,$,P,g,T,L){var _=$.children;if(_!==void 0)if(g)if(S(_)){for(g=0;g<_.length;g++)x(_[g]);Object.freeze&&Object.freeze(_)}else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else x(_);if(p.call($,"key")){_=e(a);var U=Object.keys($).filter(function(J){return J!=="key"});g=0<U.length?"{key: someKey, "+U.join(": ..., ")+": ...}":"{key: someKey}",M[_+g]||(U=0<U.length?"{"+U.join(": ..., ")+": ...}":"{}",console.error(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,g,_,U,_),M[_+g]=!0)}if(_=null,P!==void 0&&(i(P),_=""+P),u($)&&(i($.key),_=""+$.key),"key"in $){P={};for(var G in $)G!=="key"&&(P[G]=$[G])}else P=$;return _&&f(P,typeof a=="function"?a.displayName||a.name||"Unknown":a),b(a,_,P,s(),T,L)}function x(a){y(a)?a._store&&(a._store.validated=1):typeof a=="object"&&a!==null&&a.$$typeof===N&&(a._payload.status==="fulfilled"?y(a._payload.value)&&a._payload.value._store&&(a._payload.value._store.validated=1):a._store&&(a._store.validated=1))}function y(a){return typeof a=="object"&&a!==null&&a.$$typeof===d}var h=m,d=Symbol.for("react.transitional.element"),l=Symbol.for("react.portal"),R=Symbol.for("react.fragment"),j=Symbol.for("react.strict_mode"),I=Symbol.for("react.profiler"),B=Symbol.for("react.consumer"),O=Symbol.for("react.context"),A=Symbol.for("react.forward_ref"),E=Symbol.for("react.suspense"),V=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),N=Symbol.for("react.lazy"),W=Symbol.for("react.activity"),F=Symbol.for("react.client.reference"),v=h.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,p=Object.prototype.hasOwnProperty,S=Array.isArray,D=console.createTask?console.createTask:function(){return null};h={react_stack_bottom_frame:function(a){return a()}};var Y,H={},Z=h.react_stack_bottom_frame.bind(h,c)(),C=D(r(c)),M={};Q.Fragment=R,Q.jsx=function(a,$,P){var g=1e4>v.recentlyCreatedOwnerStacks++;return w(a,$,P,!1,g?Error("react-stack-top-frame"):Z,g?D(r(a)):C)},Q.jsxs=function(a,$,P){var g=1e4>v.recentlyCreatedOwnerStacks++;return w(a,$,P,!0,g?Error("react-stack-top-frame"):Z,g?D(r(a)):C)}})()),Q}var xe;function Ve(){return xe||(xe=1,process.env.NODE_ENV==="production"?te.exports=Ye():te.exports=He()),te.exports}var t=Ve();const ae=({x:e,y:o,items:i,onClose:r,...s})=>{const c=m.useRef(null),[u,f]=m.useState(null);m.useEffect(()=>{const h=d=>{c.current&&!c.current.contains(d.target)&&r()};return document.addEventListener("mousedown",h),()=>{document.removeEventListener("mousedown",h)}},[r]);const b=(()=>{if(!c.current)return{x:e,y:o};const h=c.current.offsetWidth,d=c.current.offsetHeight,l=window.innerWidth,R=window.innerHeight;let j=e,I=o;return j+h>l&&(j=e-h),I+d>R&&(I=o-d),{x:j,y:I}})(),w=(h,d)=>{h.submenu?f(u===d?null:d):h.action&&(h.action(),r())},x=h=>{i[h].submenu&&f(h)},y=h=>{const d=h.relatedTarget;c.current?.contains(d)||f(null)};return t.jsx(Ze,{ref:c,initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.8},transition:{duration:.15},style:{position:"absolute",top:b.y,left:b.x},onClick:h=>h.stopPropagation(),onMouseLeave:y,...s,children:i.map((h,d)=>t.jsxs(Ue,{$hasSubmenu:!!h.submenu,$disabled:h.disabled,children:[t.jsx(qe,{onClick:l=>{l.stopPropagation(),h.disabled||w(h,d)},onMouseEnter:()=>!h.disabled&&x(d),whileHover:h.disabled?{}:{backgroundColor:"#f3f4f6"},initial:{backgroundColor:"#ffffff"},$color:h.color,$disabled:h.disabled,children:t.jsxs(Xe,{children:[h.label,h.submenu&&t.jsx(Ge,{children:t.jsx("svg",{width:"8",height:"12",viewBox:"0 0 8 12",fill:"none",children:t.jsx("path",{d:"M1.5 1.5L6 6L1.5 10.5",stroke:"currentColor",strokeWidth:"2"})})})]})}),h.submenu&&u===d&&t.jsx(Je,{initial:{opacity:0,x:10},animate:{opacity:1,x:0},exit:{opacity:0,x:10},transition:{duration:.15},children:t.jsx(ae,{x:0,y:-d*40,items:h.submenu,onClose:()=>f(null)})})]},d))})},Ze=n(q.motion.div)`
  position: absolute;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
  padding: 4px 0;
  z-index: 1000;
  min-width: 180px;
  width: auto;
  overflow: visible;
`,Ue=n.div`
  position: relative;
  opacity: ${({$disabled:e})=>e?.5:1};
`,qe=n(q.motion.div)`
  padding: 8px 16px;
  font-size: 14px;
  cursor: ${({$disabled:e})=>e?"not-allowed":"pointer"};
  color: ${({$color:e,$disabled:o})=>o?"#999":e||"#333"};
  white-space: nowrap;
  position: relative;
`,Xe=n.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`,Ge=n.span`
  color: #666;
  margin-left: 8px;
`,Je=n(q.motion.div)`
  position: absolute;
  top: 0;
  left: 100%;
  z-index: 1001;
  margin-left: 2px;
`,Ke=({columns:e,data:o,onRowDoubleClick:i,contextMenuActions:r=[],onSort:s,sortConfig:c,onRowClick:u,selectedRow:f,fixedHeight:k,hasTotalsRow:b,debtChecker:w,rowStyles:x={},isLoading:y})=>{const[h,d]=m.useState(null),[l,R]=m.useState(null),j=m.useRef(null),I=m.useRef(null),B=500,O=f!==void 0?f:h,A=C=>{!e[C].isSortable||!s||s(C)},V=w||(C=>{const M=C[8];return typeof M=="string"?parseFloat(M.replace(/[^\d.]/g,""))>0:!1}),z=C=>{f===void 0&&d(C===O?null:C),u&&u(o[C],C)},N=(C,M)=>{i&&i(C,M)},W=(C,M)=>{if(r.length===0)return;C.preventDefault();const a="touches"in C?C.touches[0].clientX:C.clientX,$="touches"in C?C.touches[0].clientY:C.clientY;R({x:a,y:$,rowIndex:M})},F=(C,M)=>{C.preventDefault(),W(C,M)},v=(C,M)=>{r.length!==0&&(I.current&&clearTimeout(I.current),I.current=window.setTimeout(()=>{W(C,M)},B))},p=()=>{I.current&&(clearTimeout(I.current),I.current=null)},S=()=>{I.current&&window.clearTimeout(I.current)},D=()=>{R(null)};m.useEffect(()=>{const C=()=>{l&&D()};return document.addEventListener("click",C),()=>{document.removeEventListener("click",C),I.current&&clearTimeout(I.current)}},[l]);const Y=(C,M,a)=>{if(M)return{backgroundColor:"#FFFFFF",color:"#000000",fontWeight:"bold"};const $=x[C]||{};return C===O?{backgroundColor:$.backgroundColor||"#007D88",color:$.color||"#FFFFFF",fontWeight:$.fontWeight||"normal"}:a?{backgroundColor:$.backgroundColor||"#E8D8D8",color:$.color||"inherit",fontWeight:$.fontWeight||"normal"}:o[C][o[C].length-1]===!1?{backgroundColor:$.backgroundColor||"#E8F5E8",color:"#1B5E20",fontWeight:$.fontWeight||"normal"}:{backgroundColor:$.backgroundColor||"#FFFFFF",color:$.color||"inherit",fontWeight:$.fontWeight||"normal"}},H=(C,M,a)=>{if(M)return"#FFFFFF";const $=Y(C,M,a);return $.hoverBackgroundColor?$.hoverBackgroundColor:C===O?"#007D88":a?"#E8D8D8CC":o[C][o[C].length-1]===!1?"#51D5B4CC":"#F3F4F6"},Z=()=>{if(!l||r.length===0)return null;const C=(typeof r=="function"?r(o[l.rowIndex]):r).filter(M=>typeof M=="object"&&(typeof M.shouldShow!="function"||M.shouldShow(o[l.rowIndex])));return C.length===0?null:t.jsx(ot,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.95},transition:{duration:.15},style:{position:"fixed",left:l.x,top:l.y,zIndex:1e3},onClick:M=>M.stopPropagation(),children:t.jsx(ae,{items:C.map(M=>{const a={label:M.label,color:M.color,disabled:M.disabled};return M.getSubmenu?a.submenu=M.getSubmenu(o[l.rowIndex]):M.action&&(a.action=()=>{M.action(o[l.rowIndex],l.rowIndex),D()}),a}),onClose:D,x:0,y:0})})};return t.jsx(tt,{ref:j,children:y?t.jsx(Qe,{children:t.jsx(et,{})}):t.jsxs(t.Fragment,{children:[t.jsxs(nt,{children:[t.jsx(rt,{children:t.jsx(fe,{children:e.map((C,M)=>!C.isHidden&&t.jsx(st,{$isSortable:C.isSortable,$isActive:c?.key===M,onClick:()=>A(M),$align:C.align||"center",$isFirst:M===0,$isLast:M===e.length-1,children:t.jsxs(at,{$align:C.align||"center",children:[C.name,C.isSortable&&t.jsx(lt,{$direction:c?.key===M?c.direction:"asc",animate:{rotate:c?.key===M&&c.direction==="desc"?180:0,color:c?.key===M?"#007D88":"#6B7280"},transition:{duration:.2},children:t.jsx("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M5.77734 2.92383L5.25 3.45117L3.26953 1.47656L3.26367 12H2.51367L2.51953 1.45898L0.527344 3.45117L0 2.92383L2.88867 0.0351562L5.77734 2.92383ZM10.5059 8.54883L11.0391 9.07617L8.15039 11.9648L5.25586 9.07617L5.78906 8.54883L7.76953 10.5293L7.76367 0H8.51367L8.51953 10.5352L10.5059 8.54883Z",fill:"currentColor"})})})]})},M))})}),t.jsx(it,{$fixedHeight:k,children:t.jsx(q.AnimatePresence,{children:o.map((C,M)=>{const a=!!(b&&M===o.length-1),$=!!(!a&&V(C)),P=Y(M,a,$),g=H(M,a,$);return t.jsx(fe,{initial:{opacity:0,y:-10},animate:{opacity:1,y:0,backgroundColor:P.backgroundColor||"#FFFFFF",color:P.color||"inherit",fontWeight:P.fontWeight||"normal"},exit:{opacity:0,y:10},transition:{duration:.2,ease:"easeOut"},$isLast:M===o.length-1,$isSelected:M===O,$isTotalsRow:a,onClick:()=>!a&&z(M),onDoubleClick:()=>!a&&N(C,M),onContextMenu:T=>!a&&F(T,M),onTouchStart:T=>!a&&v(T,M),onTouchEnd:p,onTouchMove:S,whileHover:a?{}:{backgroundColor:g,transition:{duration:.15}},style:{backgroundColor:P.backgroundColor||"#FFFFFF",color:P.color||"inherit",fontWeight:P.fontWeight||"normal"},children:C.map((T,L)=>!e[L]?.isHidden&&t.jsx(ct,{$align:e[L]?.align||"center",$isFirst:L===0,$isLast:L===C.length-1,$isTotalsCell:a,$isBeforeTotals:a&&L<C.findIndex(_=>_==="Итого:"),children:T},L))},`row-${M}`)})})})]}),t.jsx(q.AnimatePresence,{children:Z()})]})})},Qe=n.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.7);
  z-index: 10;
`,et=n.div`
  width: 40px;
  height: 40px;
  border: 4px solid #f3f3f3;
  border-top: 4px solid #007d88;
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`,tt=n.div`
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  overflow: auto;
  position: relative;
  background-color: #ffffff;
  color: #000000;
  height: 100%;
`,nt=n.table`
  width: 100%;
  border-collapse: collapse;
  background-color: #ffffff;
  box-sizing: border-box;

  th,
  td {
    box-sizing: border-box;
    position: relative;
    border-right: 0.5px solid #d1d5db;
  }

  th:last-child,
  td:last-child {
    border-right: none;
  }

  tbody tr:last-child {
    border-bottom: none;
  }
`,ot=n(q.motion.div)`
  z-index: 1000;
  pointer-events: auto;
`,rt=n.thead`
  text-align: center;
  position: relative;
`,it=n.tbody`
  ${({$fixedHeight:e})=>e&&`
    display: block;
    overflow-y: auto;
  `}
  position: relative;
`,fe=n(q.motion.tr)`
  position: relative;
  cursor: ${({$isTotalsRow:e})=>e?"default":"pointer"};
  font-weight: ${({$isTotalsRow:e})=>e?"bold":"normal"};

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 1%;
    width: 98%;
    height: 1px;
    background: #d1d5db;
    display: ${({$isLast:e,$isTotalsRow:o})=>e||o?"none":"block"};
  }
`,st=n.th`
  padding: 16px;
  padding-left: ${({$isFirst:e})=>e?"50px":"16px"};
  padding-right: ${({$isLast:e})=>e?"50px":"16px"};
  text-align: ${({$align:e})=>e};
  font-weight: 500;
  position: relative;
  cursor: ${({$isSortable:e})=>e?"pointer":"default"};
  transition: all 0.2s ease;
  background-color: #ffffff;
  color: ${({$isActive:e})=>e?"#007d88":"inherit"};

  &:hover {
    background-color: ${({$isSortable:e})=>e?"#f3f4f6":"inherit"};
  }
`,at=n.div`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  justify-content: ${({$align:e})=>e==="right"?"flex-end":e==="center"?"center":"flex-start"};
  width: 100%;
`,lt=n(q.motion.span)`
  display: inline-flex;
  align-items: center;
`,ct=n.td`
  padding: 16px;
  padding-left: ${({$isFirst:e})=>e?"50px":"16px"};
  padding-right: ${({$isLast:e})=>e?"50px":"16px"};
  text-align: ${({$align:e})=>e};
  vertical-align: middle;
  border-right: ${({$isBeforeTotals:e,$isTotalsCell:o})=>e||o?"none":"0.5px solid #d1d5db"};
`,dt=({onClick:e,tooltip:o,size:i=32,margin:r})=>t.jsx(pt,{onClick:e,size:i,margin:r,title:o,children:t.jsx(ut,{size:i})}),pt=n.button`
  width: ${e=>e.size}px;
  height: ${e=>e.size}px;
  border-radius: 50%;
  background-color: white;
  border: 1px solid rgba(209, 213, 219, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  padding: 0;
  ${e=>e.margin&&`margin: ${e.margin};`}

  &:hover {
    background-color: rgba(249, 250, 250, 1);
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
`,ut=n.div`
  position: relative;
  width: ${e=>e.size*.5}px;
  height: ${e=>e.size*.5}px;

  &::before,
  &::after {
    content: '';
    position: absolute;
    background-color: #50555c;
    border-radius: 2px;
  }

  &::before {
    width: 100%;
    height: 2px;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
  }

  &::after {
    width: 2px;
    height: 100%;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
  }
`,le="/api";async function X(e,o={}){const{method:i="GET",body:r,headers:s={},token:c,withCredentials:u=!0,isFormData:f=!1}=o,k=async w=>{const x={...s};f||(x["Content-Type"]="application/json"),w&&(x.Authorization=`Bearer ${w}`);const y=e.startsWith("http")?e:`${le}${e}`;let h;return r&&(f?h=r:h=JSON.stringify(r)),await fetch(y,{method:i,headers:x,body:h,credentials:u?"include":"same-origin"})},b=async(w,x=!0)=>{const y=await k(w);if(y.ok){if(y.status===204)return null;const d=await y.text();if(!d)return null;try{return JSON.parse(d)}catch{return d}}if(y.status===401&&x){const d=await De();if(d)return b(d,!1)}let h=`Request failed with status ${y.status}`;try{const d=await y.text();if(d)try{const l=JSON.parse(d);l&&typeof l.error=="string"?h=l.error:typeof l=="string"?h=l:typeof l?.message=="string"&&(h=l.message)}catch{h=d}}catch{}throw new Error(h)};return b(c)}async function De(){const e=await fetch(`${le}/auth/refresh`,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include"});if(!e.ok)return null;const o=await e.json();return o.access_token?o.access_token:null}const ht={async isAuthenticated(){try{return!!(await this.getSessionInfo())?.client?.id}catch{return!1}},async getSessionInfo(){try{return await X("/auth/session/info",{method:"GET"})}catch{return null}},async logout(e){try{await X("/auth/session/revoke",{method:"POST",headers:{"Content-Type":"application/json"},body:e?{token_id:e}:{}})}catch(o){throw console.error("Logout error:",o),o}},async getClientId(){return(await this.getSessionInfo())?.client?.id||null},async hasPin(){return(await this.getSessionInfo())?.has_pin||!1}},xt=n.button`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  background-color: rgba(0, 125, 136, 1);
  border: none;
  border-radius: 8px;
  min-height: 25px;
  cursor: ${({disabled:e})=>e?"not-allowed":"pointer"};
  color: white;
  font-family: inherit;
  font-size: 18px;
  font-weight: 400;
  white-space: nowrap;
  transition: background-color 0.2s ease, opacity 0.2s ease;
  opacity: ${({disabled:e})=>e?.7:1};

  &:hover {
    background-color: ${({disabled:e})=>e?"rgba(0, 125, 136, 1)":"rgba(0, 150, 163, 1)"};
  }
`,ft=({children:e,onClick:o,disabled:i,...r})=>t.jsxs(xt,{onClick:o,disabled:i,...r,children:[t.jsx("svg",{width:"21",height:"13",viewBox:"0 0 21 13",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M6.17798 0.978109L0.65625 6.4998L6.17798 12.0215L7.10604 11.0934L3.16862 7.156L20.3124 7.156V5.84351L3.16874 5.84351L7.10604 1.90621L6.17798 0.978109Z",fill:"currentColor"})}),e]}),ne=({children:e="Подтвердить",icon:o,disabled:i=!1,bg:r,hoverBg:s,disabledBg:c,textColor:u,fullWidth:f=!1,minWidth:k,width:b,isPrimary:w=!0,...x})=>{const h=r?{bg:r,hoverBg:s||r,disabledBg:c||r,textColor:u||(w?"white":"black")}:w?{bg:"rgba(0, 125, 136, 1)",hoverBg:"rgba(0, 150, 163, 1)",disabledBg:"rgba(102, 177, 184, 1)",textColor:"white"}:{bg:"rgba(209, 213, 219, 1)",hoverBg:"rgba(209, 233, 239, 1)",disabledBg:"rgba(209, 213, 219, 0.7)",textColor:"black"};return t.jsxs(gt,{disabled:i,$bg:h.bg,$hoverBg:h.hoverBg,$disabledBg:h.disabledBg,$textColor:h.textColor,$fullWidth:f,$minWidth:k,$width:b,...x,children:[o&&t.jsx(bt,{children:o}),t.jsx("span",{children:e})]})},gt=n.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 8px 12px;
  background-color: ${({disabled:e,$bg:o,$disabledBg:i})=>e?i:o};
  border: none;
  border-radius: 8px;
  min-height: 25px;
  cursor: ${({disabled:e})=>e?"not-allowed":"pointer"};
  color: ${({$textColor:e})=>e};
  font-size: 18px;
  font-weight: 400;
  height: auto;
  white-space: nowrap;
  transition: background-color 0.2s ease;
  margin: 0;
  opacity: ${({disabled:e})=>e?.7:1};
  width: ${({$fullWidth:e,$width:o})=>e?"100%":o?typeof o=="number"?`${o}px`:o:"auto"};
  min-width: ${({$minWidth:e})=>e||"auto"};

  &:hover {
    background-color: ${({disabled:e,$hoverBg:o,$disabledBg:i})=>e?i:o};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px 
      ${({$bg:e})=>e==="rgba(209, 213, 219, 1)"?"rgba(209, 233, 239, 1)":"rgba(156, 163, 175, 0.5)"};
  }
`,bt=n.span`
  display: inline-flex;
  align-items: center;
`,mt=({onClick:e,tooltip:o,size:i=32})=>t.jsx(wt,{onClick:e,size:i,title:o,children:t.jsx("svg",{width:i*.5,height:i*.5,viewBox:"0 0 17 17",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M3.1875 14.875C3.1875 15.5625 3.75 16.125 4.4375 16.125H12.5625C13.25 16.125 13.8125 15.5625 13.8125 14.875V4.25H3.1875V14.875ZM15.125 1.5H11.7188L10.7812 0.5625H6.21875L5.28125 1.5H1.875V3.375H15.125V1.5Z",fill:"#50555C"})})}),wt=n.button`
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  padding: 0;
  box-sizing: border-box;

  &:hover {
    transform: scale(1.05);
    outline: none;
    border-color: transparent;
  }

  &:active {
    transform: scale(0.95);
  }

  svg {
    transition: transform 0.2s ease;
  }

  &:hover svg {
    transform: scale(1.1);
  }
`,vt=({onClick:e,tooltip:o,size:i=32})=>t.jsx(yt,{onClick:e,size:i,title:o,children:t.jsx("svg",{width:i*.5,height:i*.5,viewBox:"0 0 17 17",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M0.625 13.0931V16.3744H3.90625L13.5837 6.69687L10.3025 3.41562L0.625 13.0931ZM16.7337 3.54687L13.4525 0.265625L11.2387 2.48812L14.52 5.76937L16.7337 3.54687Z",fill:"#50555C"})})}),yt=n.button`
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  padding: 0;
  box-sizing: border-box;

  &:hover {
    transform: scale(1.05);
    outline: none;
    border-color: transparent;
  }

  &:active {
    transform: scale(0.95);
  }

  svg {
    transition: transform 0.2s ease;
  }

  &:hover svg {
    transform: scale(1.1);
  }
`,kt=()=>t.jsxs("svg",{width:"17",height:"18",viewBox:"0 0 17 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("path",{d:"M8.50006 1.62496L8.10181 1.22671L8.50006 0.82959L8.89831 1.22671L8.50006 1.62496ZM9.06256 11.75C9.06256 11.8991 9.00329 12.0422 8.8978 12.1477C8.79232 12.2532 8.64924 12.3125 8.50006 12.3125C8.35087 12.3125 8.2078 12.2532 8.10231 12.1477C7.99682 12.0422 7.93756 11.8991 7.93756 11.75H9.06256ZM2.47681 6.85171L8.10181 1.22671L8.89831 2.02321L3.27331 7.64821L2.47681 6.85171ZM8.89831 1.22671L14.5233 6.85171L13.7268 7.64821L8.10181 2.02321L8.89831 1.22671ZM9.06256 1.62496V11.75H7.93756V1.62496H9.06256Z",fill:"black"}),t.jsx("path",{d:"M0.625 14V15.125C0.625 15.7217 0.862053 16.294 1.28401 16.716C1.70597 17.1379 2.27826 17.375 2.875 17.375H14.125C14.7217 17.375 15.294 17.1379 15.716 16.716C16.1379 16.294 16.375 15.7217 16.375 15.125V14",stroke:"black"})]}),jt=({children:e="Экспорт",icon:o=t.jsx(kt,{}),onExport:i,isExporting:r=!1,exportProgress:s=0,...c})=>{const u=async f=>{if(i)try{await i()}catch(k){console.error("Export error:",k)}c.onClick&&c.onClick(f)};return t.jsx(Ct,{...c,onClick:u,disabled:r||c.disabled,children:r?t.jsxs($t,{children:[t.jsxs("span",{children:["Экспорт... ",s,"%"]}),t.jsx(St,{progress:s})]}):t.jsxs(t.Fragment,{children:[o,t.jsx("span",{children:e})]})})},Ct=n.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 8px 12px;
  background-color: transparent;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  color: inherit;
  font-size: 18px;
  height: 40px;
  margin: auto 0 10px 0;
  transition: background-color 0.2s ease;
  position: relative;
  overflow: hidden;
  color: rgba(80, 85, 92, 1);

  &:hover {
    background-color: rgba(209, 213, 219, 1);
    color: black;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(156, 163, 175, 0.5);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.7;
  }
`,$t=n.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  width: 100%;
`,St=n.div`
  height: 2px;
  width: 100%;
  background-color: #e0e0e0;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: ${({progress:e})=>e}%;
    background-color: #000;
    transition: width 0.3s ease;
  }
`,Mt=({placeholder:e="",customPlaceholder:o,value:i,onChange:r,hasError:s=!1,errorMessage:c,options:u,name:f,disabled:k=!1,required:b=!1,...w})=>{const[x,y]=m.useState(!1),[h,d]=m.useState(!1),l=m.useRef(null),R=!!(o&&!i&&!x),j=E=>{r&&!k&&r({target:{value:E,name:f}}),d(!1),y(!1)},I=E=>{l.current&&!l.current.contains(E.target)&&(d(!1),y(!1))},B=()=>{k||(d(!h),y(!h))};m.useEffect(()=>(document.addEventListener("mousedown",I),()=>{document.removeEventListener("mousedown",I)}),[]);const O=u.find(E=>E.value===i),A=O?O.label:"";return t.jsxs(Lt,{ref:l,...w,children:[t.jsxs(Tt,{children:[t.jsxs(Dt,{hasError:s,isOpen:h,disabled:k,onClick:B,onFocus:()=>!k&&y(!0),onBlur:()=>y(!1),tabIndex:k?-1:0,children:[t.jsx(Et,{children:A||e&&t.jsx(It,{children:e})}),t.jsx(Pt,{isOpen:h,disabled:k,children:t.jsx("svg",{width:"17",height:"9",viewBox:"0 0 17 9",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M1.5 1L8.5 8L15.5 1",stroke:k?"#CCCCCC":"#50555C",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})})]}),h&&t.jsx(Rt,{children:u.map(E=>t.jsxs(Bt,{$isSelected:E.value===i,onClick:()=>j(E.value),children:[t.jsx(zt,{$isSelected:E.value===i,children:E.value===i&&t.jsx(At,{})}),t.jsx(Ft,{children:E.label})]},E.value))})]}),o&&t.jsx(_t,{isVisible:R,children:o}),s&&c&&t.jsx(Ot,{children:c}),t.jsx(Nt,{name:f,value:i||"",onChange:()=>{},tabIndex:-1,required:b,children:u.map(E=>t.jsx("option",{value:E.value,children:E.label},E.value))})]})},Lt=n.div`
  position: relative;
  display: inline-block;
  width: 100%;
  margin-right: auto;
`,Tt=n.div`
  position: relative;
  width: auto;
  max-width: 500px;
`,Dt=n.div`
  border: 1px solid
    ${({hasError:e,isOpen:o,disabled:i})=>i?"rgba(209, 213, 219, 0.5)":e?"rgba(239, 68, 68, 1)":o?"rgba(0, 125, 136, 1)":"rgba(209, 213, 219, 1)"};
  border-radius: 5px;
  font-size: 14px;
  width: 100%;
  outline: none;
  transition: border-color 0.2s ease;
  height: auto;
  box-sizing: border-box;
  background-color: ${({disabled:e})=>e?"rgba(249, 250, 251, 1)":"white"};
  color: ${({disabled:e})=>e?"rgba(156, 163, 175, 1)":"black"};
  padding: 10px 15px;
  cursor: ${({disabled:e})=>e?"not-allowed":"pointer"};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  text-align: left;
  max-height: 37.5px;

  &:hover {
    border-color: ${({hasError:e,disabled:o,isOpen:i})=>o?"rgba(209, 213, 219, 0.5)":e?"rgba(239, 68, 68, 1)":"rgba(0, 125, 136, 1)"};
  }
`,Et=n.span`
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,It=n.span`
  color: rgba(80, 85, 92, 1);
`,Pt=n.div`
  transform: ${({isOpen:e})=>e?"rotate(180deg)":"rotate(0)"};
  transition: transform 0.2s ease;
  margin-left: 10px;
  flex-shrink: 0;
`,Rt=n.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  margin-top: 4px;
  background: #ffffff;
  box-shadow: 2px 2px 25px 2px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  z-index: 1001;
  max-height: 300px;
  overflow-y: auto;
`,Bt=n.div`
  display: flex;
  align-items: center;
  padding: 10px 12px;
  width: auto;
  min-height: 38px;
  text-align: left;
  background: ${({$isSelected:e})=>e?"rgba(232, 216, 216, 1)":"transparent"};
  cursor: pointer;

  &:hover {
    background: rgba(232, 216, 216, 1);
  }

  &:first-child {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }

  &:last-child {
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }
`,zt=n.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 1px solid ${({$isSelected:e})=>e?"#007D88":"#ADB3BC"};
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`,At=n.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #007d88;
`,Ft=n.span`
  font-family: 'Manrope', sans-serif;
  font-style: normal;
  font-weight: 400;
  text-align: left;
  font-size: 14px;
  line-height: 19px;
  color: #000000;
`,_t=n.label`
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: rgba(80, 85, 92, 1);
  pointer-events: none;
  transition: all 0.2s ease;
  font-size: 14px;
  opacity: ${({isVisible:e})=>e?1:0};
  background-color: white;
  padding: 0 4px;
`,Ot=n.span`
  color: rgba(239, 68, 68, 1);
  font-size: 12px;
  margin-top: 4px;
  display: block;
`,Nt=n.select`
  position: absolute;
  opacity: 0;
  height: 0;
  width: 0;
  pointer-events: none;
`,Wt=({checked:e=!1,onChange:o,className:i,label:r,disabled:s=!1})=>{const[c,u]=m.useState(!1),f=()=>{s||!o||o(!e)},k=b=>{s||(b.key==="Enter"||b.key===" ")&&(b.preventDefault(),f())};return t.jsxs(Yt,{className:i,onClick:f,onKeyPress:k,tabIndex:s?-1:0,disabled:s,children:[t.jsx(Ht,{checked:e,isFocused:c,disabled:s,onMouseEnter:()=>!s&&u(!0),onMouseLeave:()=>!s&&u(!1),onFocus:()=>!s&&u(!0),onBlur:()=>!s&&u(!1),children:e&&t.jsx(Zt,{viewBox:"0 0 8 8",fill:"none",xmlns:"http://www.w3.org/2000/svg",disabled:s,children:t.jsx("path",{d:"M7.375 1.1875L2.65 6.8125L0.625 4.5625",stroke:s?"rgba(173, 179, 188, 1)":"white",strokeLinecap:"round",strokeLinejoin:"round"})})}),r&&t.jsx(Vt,{disabled:s,children:r})]})},Yt=n.div`
  display: flex;
  align-items: center;
  cursor: ${e=>e.disabled?"not-allowed":"pointer"};
  gap: 8px;

  &:focus {
    outline: none;
  }
`,Ht=n.div`
  width: 16px;
  height: 16px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;

  border: 1px solid
    ${e=>e.disabled?e.checked?"rgba(173, 179, 188, 1)":"rgba(230, 230, 230, 1)":e.checked||e.isFocused?"rgba(0, 125, 136, 1)":"rgba(173, 179, 188, 1)"};

  background-color: ${e=>e.disabled?e.checked?"rgba(230, 230, 230, 1)":"transparent":e.checked?"rgba(0, 125, 136, 1)":"transparent"};

  box-shadow: ${e=>e.disabled?"none":e.checked&&e.isFocused?"0 0 0 4px rgba(121, 159, 162, 0.33)":"none"};

  opacity: ${e=>e.disabled?.6:1};
`,Vt=n.span`
  font-size: 16px;
  color: ${e=>e.disabled?"rgba(173, 179, 188, 1)":"#333"};
  user-select: none;
  white-space: nowrap;
`,Zt=n.svg`
  width: 8px;
  height: 8px;
  opacity: ${e=>e.disabled?.6:1};
`,Ut="data:image/svg+xml,%3csvg%20width='18'%20height='18'%20viewBox='0%200%2018%2018'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M14.625%202.8125H3.375C2.44302%202.8125%201.6875%203.56802%201.6875%204.5V14.625C1.6875%2015.557%202.44302%2016.3125%203.375%2016.3125H14.625C15.557%2016.3125%2016.3125%2015.557%2016.3125%2014.625V4.5C16.3125%203.56802%2015.557%202.8125%2014.625%202.8125Z'%20stroke='%2350555C'%20stroke-linejoin='round'/%3e%3cpath%20d='M10.4062%209C10.8722%209%2011.25%208.62224%2011.25%208.15625C11.25%207.69026%2010.8722%207.3125%2010.4062%207.3125C9.94026%207.3125%209.5625%207.69026%209.5625%208.15625C9.5625%208.62224%209.94026%209%2010.4062%209Z'%20fill='%2350555C'/%3e%3cpath%20d='M13.2188%209C13.6847%209%2014.0625%208.62224%2014.0625%208.15625C14.0625%207.69026%2013.6847%207.3125%2013.2188%207.3125C12.7528%207.3125%2012.375%207.69026%2012.375%208.15625C12.375%208.62224%2012.7528%209%2013.2188%209Z'%20fill='%2350555C'/%3e%3cpath%20d='M10.4062%2011.8125C10.8722%2011.8125%2011.25%2011.4347%2011.25%2010.9688C11.25%2010.5028%2010.8722%2010.125%2010.4062%2010.125C9.94026%2010.125%209.5625%2010.5028%209.5625%2010.9688C9.5625%2011.4347%209.94026%2011.8125%2010.4062%2011.8125Z'%20fill='%2350555C'/%3e%3cpath%20d='M13.2188%2011.8125C13.6847%2011.8125%2014.0625%2011.4347%2014.0625%2010.9688C14.0625%2010.5028%2013.6847%2010.125%2013.2188%2010.125C12.7528%2010.125%2012.375%2010.5028%2012.375%2010.9688C12.375%2011.4347%2012.7528%2011.8125%2013.2188%2011.8125Z'%20fill='%2350555C'/%3e%3cpath%20d='M4.78125%2011.8125C5.24724%2011.8125%205.625%2011.4347%205.625%2010.9688C5.625%2010.5028%205.24724%2010.125%204.78125%2010.125C4.31526%2010.125%203.9375%2010.5028%203.9375%2010.9688C3.9375%2011.4347%204.31526%2011.8125%204.78125%2011.8125Z'%20fill='%2350555C'/%3e%3cpath%20d='M7.59375%2011.8125C8.05974%2011.8125%208.4375%2011.4347%208.4375%2010.9688C8.4375%2010.5028%208.05974%2010.125%207.59375%2010.125C7.12776%2010.125%206.75%2010.5028%206.75%2010.9688C6.75%2011.4347%207.12776%2011.8125%207.59375%2011.8125Z'%20fill='%2350555C'/%3e%3cpath%20d='M4.78125%2014.625C5.24724%2014.625%205.625%2014.2472%205.625%2013.7812C5.625%2013.3153%205.24724%2012.9375%204.78125%2012.9375C4.31526%2012.9375%203.9375%2013.3153%203.9375%2013.7812C3.9375%2014.2472%204.31526%2014.625%204.78125%2014.625Z'%20fill='%2350555C'/%3e%3cpath%20d='M7.59375%2014.625C8.05974%2014.625%208.4375%2014.2472%208.4375%2013.7812C8.4375%2013.3153%208.05974%2012.9375%207.59375%2012.9375C7.12776%2012.9375%206.75%2013.3153%206.75%2013.7812C6.75%2014.2472%207.12776%2014.625%207.59375%2014.625Z'%20fill='%2350555C'/%3e%3cpath%20d='M10.4062%2014.625C10.8722%2014.625%2011.25%2014.2472%2011.25%2013.7812C11.25%2013.3153%2010.8722%2012.9375%2010.4062%2012.9375C9.94026%2012.9375%209.5625%2013.3153%209.5625%2013.7812C9.5625%2014.2472%209.94026%2014.625%2010.4062%2014.625Z'%20fill='%2350555C'/%3e%3cpath%20d='M4.5%201.6875V2.8125M13.5%201.6875V2.8125'%20stroke='%2350555C'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M16.3125%205.625H1.6875'%20stroke='%2350555C'%20stroke-linejoin='round'/%3e%3c/svg%3e",ge=["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"],qt=["Пн","Вт","Ср","Чт","Пт","Сб","Вс"],ie=({prefix:e="Дата:",value:o="",placeholder:i="Выберите дату",onChange:r,onReset:s})=>{const[c,u]=m.useState(!1),[f,k]=m.useState(new Date),[b,w]=m.useState(o?new Date(o):null),[x,y]=m.useState(!1),[h,d]=m.useState(!1),l=m.useRef(null),R=m.useRef(null),j=m.useRef(null);m.useEffect(()=>{const p=S=>{l.current&&!l.current.contains(S.target)&&u(!1),R.current&&!R.current.contains(S.target)&&y(!1),j.current&&!j.current.contains(S.target)&&d(!1)};return document.addEventListener("mousedown",p),()=>{document.removeEventListener("mousedown",p)}},[]),m.useEffect(()=>{w(o?new Date(o):null)},[o]);const I=p=>{const S=new Date(Date.UTC(p.getFullYear(),p.getMonth(),p.getDate()));w(p);const D=S.toISOString().split("T")[0];r?.(D),u(!1)},B=()=>{const p=new Date;k(p);const D=new Date(Date.UTC(p.getFullYear(),p.getMonth(),p.getDate())).toISOString().split("T")[0];r?.(D),u(!1)},O=()=>{w(null),r?.(""),s?.(),u(!1)},A=p=>{const S=new Date(f);S.setMonth(p),k(S),y(!1)},E=p=>{const S=new Date(f);S.setFullYear(p),k(S),d(!1)},V=()=>{const p=f.getFullYear(),S=f.getMonth(),D=new Date(p,S,1),H=new Date(p,S+1,0).getDate(),Z=D.getDay()===0?6:D.getDay()-1,C=[],M=35,a=new Date(p,S,0).getDate();for(let P=0;P<Z;P++){const g=a-Z+P+1,T=new Date(p,S-1,g),L=!!(b&&T.getDate()===b.getDate()&&T.getMonth()===b.getMonth()&&T.getFullYear()===b.getFullYear());C.push(t.jsx(oe,{selected:L,onClick:()=>I(T),otherMonth:!0,children:g},`prev-${g}`))}for(let P=1;P<=H;P++){const g=new Date(p,S,P),T=!!(b&&g.getDate()===b.getDate()&&g.getMonth()===b.getMonth()&&g.getFullYear()===b.getFullYear());C.push(t.jsx(oe,{selected:T,onClick:()=>I(g),children:P},`current-${P}`))}const $=M-C.length;for(let P=1;P<=$;P++){const g=new Date(p,S+1,P),T=!!(b&&g.getDate()===b.getDate()&&g.getMonth()===b.getMonth()&&g.getFullYear()===b.getFullYear());C.push(t.jsx(oe,{selected:T,onClick:()=>I(g),otherMonth:!0,children:P},`next-${P}`))}return C},z=()=>b?b.toLocaleDateString("ru-RU",{day:"2-digit",month:"2-digit",year:"numeric"}):i,N=()=>{const p=new Date().getFullYear(),S=[];for(let D=p-10;D<=p+10;D++)S.push(D);return S},W=p=>{p.preventDefault(),p.stopPropagation(),y(!x),d(!1)},F=p=>{p.preventDefault(),p.stopPropagation(),d(!h),y(!1)},v=p=>{const S=p==="next"?1:-1,D=new Date(f);D.setMonth(D.getMonth()+S),k(D)};return t.jsxs(Xt,{ref:l,children:[t.jsxs(Gt,{onClick:()=>u(!c),children:[e&&t.jsx(Jt,{children:e}),t.jsx(Kt,{isEmpty:!b,children:z()}),t.jsx(Qt,{src:Ut,alt:"Календарь"})]}),c&&t.jsxs(en,{className:"calendar-container",children:[t.jsxs(tn,{children:[t.jsx(ve,{onClick:p=>{p.preventDefault(),p.stopPropagation(),v("prev")},onMouseDown:p=>p.preventDefault(),children:t.jsx(ye,{direction:"right"})}),t.jsxs(nn,{children:[t.jsxs(sn,{ref:R,children:[t.jsxs(on,{onClick:p=>W(p),onMouseDown:p=>p.preventDefault(),children:[ge[f.getMonth()],t.jsx(be,{$open:x})]}),x&&t.jsx(me,{$width:120,onClick:p=>p.stopPropagation(),children:ge.map((p,S)=>t.jsx(we,{$selected:S===f.getMonth(),onClick:D=>{D.stopPropagation(),A(S)},children:p},p))})]}),t.jsxs(an,{ref:j,children:[t.jsxs(rn,{onClick:p=>F(p),onMouseDown:p=>p.preventDefault(),children:[f.getFullYear(),t.jsx(be,{$open:h})]}),h&&t.jsx(me,{$width:80,onClick:p=>p.stopPropagation(),children:N().map(p=>t.jsx(we,{$selected:p===f.getFullYear(),onClick:S=>{S.stopPropagation(),E(p)},children:p},p))})]})]}),t.jsx(ve,{onClick:p=>{p.preventDefault(),p.stopPropagation(),v("next")},onMouseDown:p=>p.preventDefault(),children:t.jsx(ye,{direction:"left"})})]}),t.jsx(ln,{children:qt.map(p=>t.jsx(cn,{children:p},p))}),t.jsx(dn,{children:V()}),t.jsxs(pn,{children:[t.jsx(ke,{onClick:O,children:"Удалить"}),t.jsx(ke,{onClick:B,children:"Сегодня"})]})]})]})},Xt=n.div`
  position: relative;
  display: inline-block;
  width: 100%;
  text-align: left;
  color: black;
  background: white;
`,Gt=n.div`
  display: flex;
  align-items: center;
  padding: 10px 12px;
  font-size: 14px;
  border-radius: 5px;
  border: 1px solid rgba(209, 213, 219, 1);
  cursor: pointer;
  background-color: white;
  width: 100%;
  transition: border-color 0.2s ease;
  height: auto;
  max-height: 38px;
  box-sizing: border-box;
  color: black;

  &:hover {
    border-color: rgba(0, 125, 136, 1);
  }

  &:focus-within {
    border-color: rgba(0, 125, 136, 1);
  }
`,Jt=n.span`
  color: rgba(80, 85, 92, 1);
  margin-right: 8px;
  background: white;
`,Kt=n.span`
  flex-grow: 1;
  color: ${({isEmpty:e})=>e?"rgba(80, 85, 92, 1)":"#000"};
`,Qt=n.img`
  width: 20px;
  height: 20px;
  margin-left: 8px;
`,en=n.div`
  position: fixed;
  top: unset;
  bottom: unset;
  left: unset;
  transform: translate(0, 0);
  margin-top: 8px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  padding: 16px;
  z-index: 9999;
  width: 280px;
  color: black;
`,tn=n.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  color: black;
`,nn=n.div`
  display: flex;
  gap: 8px;
  color: black;
`,Ee=n.button`
  border: 1px solid rgba(209, 213, 219, 1);
  border-radius: 5px;
  padding: 6px 8px;
  font-size: 14px;
  cursor: pointer;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 80px;
  transition: all 0.2s ease;
  color: black;

  &:hover {
    background-color: rgba(232, 216, 216, 0.2);
  }
`,on=n(Ee)`
  min-width: 120px;

  &: hover {
    border-color: rgba(209, 213, 219, 1);
  }
`,rn=n(Ee)`
  min-width: 80px;

  &: hover {
    border-color: rgba(209, 213, 219, 1);
  }
`,sn=n.div`
  position: relative;
`,an=n.div`
  position: relative;
`,be=n.div`
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid rgba(80, 85, 92, 1);
  margin-left: 8px;
  transform: ${({$open:e})=>e?"rotate(180deg)":"none"};
  transition: transform 0.2s ease;
`,me=n.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: ${({$width:e})=>e}px;
  max-height: 200px;
  overflow-y: auto;
  background-color: white;
  border: 1px solid rgba(209, 213, 219, 1);
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 1001;
  margin-top: 4px;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(209, 213, 219, 1);
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(80, 85, 92, 1);
    border-radius: 3px;
  }
`,we=n.div`
  padding: 8px 12px;
  font-size: 14px;
  cursor: pointer;
  background-color: ${({$selected:e})=>e?"rgba(232, 216, 216, 1)":"white"};
  color: ${({$selected:e})=>e?"#000":"inherit"};

  &:hover {
    background-color: rgba(232, 216, 216, ${({$selected:e})=>e?"1":"0.5"});
  }
`,ve=n.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:focus {
    outline: none;
  }
`,ye=n.div`
  width: 0;
  height: 0;
  border-top: 5px solid transparent;
  border-bottom: 5px solid transparent;
  border-${({direction:e})=>e}: 5px solid rgba(80, 85, 92, 1);
`,ln=n.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  text-align: center;
  margin-bottom: 8px;
`,cn=n.div`
  font-size: 12px;
  color: rgba(80, 85, 92, 1);
`,dn=n.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 4px;
`,oe=n.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 32px;
  font-size: 14px;
  cursor: pointer;
  border-radius: 5px;

  color: ${({otherMonth:e})=>e?"rgba(173, 179, 188, 1)":"#000"};
  background-color: ${({selected:e})=>e?"rgba(237, 224, 224, 1)":"transparent"};

  &:hover {
    background-color: ${({selected:e})=>e?"rgba(237, 224, 224, 1)":"rgba(0, 125, 136, 0.1)"};
  }
`,pn=n.div`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
`,ke=n.button`
  background: none;
  border: none;
  color: rgba(0, 125, 136, 1);
  cursor: pointer;
  font-size: 14px;
  padding: 4px 8px;

  &:hover {
    text-decoration: underline;
  }
`,un=n.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
`,hn=n.span`
  text-align: left;
  font-size: 14px;
  color: black;
  max-width: 90px;
`,xn=n.div`
  margin-left: auto;
  flex: 1;
  max-width: 425px;
  margin-top: 10px;
`,ce=({placeholder:e="",customPlaceholder:o,value:i,inputType:r="text",onChange:s,hasError:c=!1,errorMessage:u,...f})=>{const[k,b]=m.useState(!1),w=!!(o&&!i&&!k),x=d=>{if(!s)return;let l=d.target.value;switch(r){case"number":/^\d*$/.test(l)&&s?.(d);break;case"rubles":{const j=d.target.selectionStart,I=d.target.value;let B=I.replace(/[^\d]/g,"");if(B===""){d.target.value="",s(d);break}const O=parseInt(B,10);if(!isNaN(O)){let A=O.toLocaleString("ru-RU");A+=" ₽";const E=y(I,j||0),V=h(A,E);d.target.value=A,s(d),setTimeout(()=>{d.target.setSelectionRange(V,V)},0)}break}case"percents":{l=l.replace(/[^\d.]/g,"");const j=l.split(".");j.length>2&&(l=j[0]+"."+j.slice(1).join("")),j.length===2&&j[1].length>2&&(l=j[0]+"."+j[1].slice(0,2));const I=parseFloat(l);if(isNaN(I)||(I>100?l="100":I<0&&(l="0")),l&&l!==""){l+=" %";const B=d.target.selectionStart||0,O=l.replace(" %","");d.target.value=l,s(d),setTimeout(()=>{B<O.length&&d.target.setSelectionRange(B,B)},0)}else d.target.value=l,s(d);break}case"fullname":l=l.replace(/[^a-zA-Zа-яА-ЯёЁ'\-\s]/g,""),l=l.replace(/\s{2,}/g," "),l=l.replace(/- /g,"-"),l=l.replace(/ -/g," ");let R=l.split(" ").filter(j=>j.length>0);R=R.slice(0,3),l=R.map(j=>{if(j.startsWith("-")&&(j=j.substring(1)),(j.match(/-/g)||[]).length>1){const B=j.split("-");j=B[0]+"-"+B.slice(1).join("")}return j.includes("-")?j.split("-").map((B,O)=>B.length===0?"":(O>0,B[0].toUpperCase()+B.slice(1).toLowerCase())).join("-"):j.length>0?j[0].toUpperCase()+j.slice(1).toLowerCase():""}).join(" "),l.length>0&&l[l.length-1]!==" "&&d.target.value.length>0&&d.target.value[d.target.value.length-1]===" "&&(l+=" "),l.length>100&&(l=l.slice(0,100)),d.target.value=l,s(d);break;case"doc":l=l.replace(/\D/g,""),l.length>4&&(l=`${l.slice(0,4)} ${l.slice(4,10)}`),l.length>11&&(l=l.slice(0,11)),d.target.value=l,s(d);break;case"date":{l=l.replace(/\D/g,""),l.length>4?l=`${l.slice(0,2)}.${l.slice(2,4)}.${l.slice(4,8)}`:l.length>2&&(l=`${l.slice(0,2)}.${l.slice(2,4)}`),l.length>10&&(l=l.slice(0,10)),i?.length>l.length&&[3,6].includes(l.length)&&(l=l.slice(0,l.length-1)),d.target.value=l,s(d);break}default:s(d);break}},y=(d,l)=>{let R=0;for(let j=0;j<Math.min(l,d.length);j++)/\d/.test(d[j])&&R++;return R},h=(d,l)=>{let R=0;for(let j=0;j<d.length;j++){if(R>=l)return j;/\d/.test(d[j])&&R++}return d.length};return t.jsxs(fn,{children:[t.jsx(gn,{...f,value:i,placeholder:w?"":e,onFocus:()=>b(!0),onBlur:d=>{b(!1),f.onBlur?.(d)},onChange:x,inputMode:r==="number"||r==="doc"||r==="date"||r==="rubles"||r==="percents"?"numeric":"text",maxLength:r==="doc"?11:r==="date"?10:void 0,hasError:c}),o&&t.jsx(bn,{isVisible:w,children:o}),c&&u&&t.jsx(mn,{children:u})]})},fn=n.div`
  position: relative;
  display: inline-block;
  width: 100%;
  margin-right: auto;
`,gn=n.input`
  padding: 10px 12px;
  border: 1px solid ${({hasError:e})=>e?"rgba(239, 68, 68, 1)":"rgba(209, 213, 219, 1)"};
  border-radius: 5px;
  font-size: 16px;
  width: 100%;
  outline: none;
  transition: border-color 0.2s ease;
  height: auto;
  min-height: 38px;
  box-sizing: border-box;
  background-color: white;
  color: black;
  padding: 5px;
  padding-left: 15px;

  &:hover {
    border-color: ${({hasError:e})=>e?"rgba(239, 68, 68, 1)":"rgba(0, 125, 136, 1)"};
  }

  &:focus {
    border-color: ${({hasError:e})=>e?"rgba(239, 68, 68, 1)":"rgba(0, 125, 136, 1)"};
  }

  &::placeholder {
    color: rgba(80, 85, 92, 1);
    opacity: 1;
  }
`,bn=n.label`
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: rgba(80, 85, 92, 1);
  pointer-events: none;
  transition: all 0.2s ease;
  font-size: 14px;
  opacity: ${({isVisible:e})=>e?1:0};
  background-color: white;
  padding: 0 4px;
`,mn=n.span`
  color: rgba(239, 68, 68, 1);
  font-size: 12px;
  margin-top: 4px;
  display: block;
`,wn=({total:e,current:o=1,onChange:i,itemsPerPage:r=10})=>{const s=Math.ceil(e/r),[c,u]=m.useState(o),f=b=>{b<1||b>s||b===c||(u(b),i?.(b))},k=()=>{const b=[];let x=1,y=s;if(s>5){const h=Math.floor(2.5);x=Math.max(c-h,1),y=Math.min(c+h,s),c<=h+1?y=5:c>=s-h&&(x=s-5+1)}for(let h=x;h<=y;h++)b.push(t.jsx(ee,{active:h===c,onClick:()=>f(h),children:h},h));return x>1&&(x>2&&b.unshift(t.jsx(ee,{children:"..."},"start-ellipsis")),b.unshift(t.jsx(ee,{active:c===1,onClick:()=>f(1),children:"1"},1))),y<s&&(y<s-1&&b.push(t.jsx(ee,{children:"..."},"end-ellipsis")),b.push(t.jsx(ee,{active:s===c,onClick:()=>f(s),children:s},s))),b};return t.jsxs(vn,{children:[t.jsx(je,{disabled:c===1,onClick:()=>f(c-1),children:t.jsx("svg",{width:"7",height:"11",viewBox:"0 0 7 11",fill:"none",children:t.jsx("path",{d:"M6 0.5L1 5.5L6 10.5",stroke:c===1?"#ccc":"black",strokeLinecap:"round",strokeLinejoin:"round"})})}),k(),t.jsx(je,{disabled:c===s,onClick:()=>f(c+1),style:{transform:"rotate(180deg)"},children:t.jsx("svg",{width:"7",height:"11",viewBox:"0 0 7 11",fill:"none",children:t.jsx("path",{d:"M6 0.5L1 5.5L6 10.5",stroke:c===s?"#ccc":"black",strokeLinecap:"round",strokeLinejoin:"round"})})})]})},vn=n.div`
  display: flex;
  justify-content: right;
  align-items: center;
  gap: 8px;
  margin-top: 20px;
  margin-left: auto;
`,ee=n.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45px;
  height: 45px;
  border-radius: 10px;
  cursor: pointer;
  font-size: 14px;
  color: ${({active:e})=>e?"white":"black"};
  background-color: ${({active:e})=>e?"rgba(0, 125, 136, 1)":"transparent"};

  &:hover {
    color: ${({active:e})=>e?"white":"rgba(0, 125, 136, 1)"};
  }
`,je=n.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  border: none;
  background: none;
  cursor: pointer;
  padding: 0;
  border-radius: 4px;

  &:hover:not(:disabled) {
    background-color: rgba(0, 125, 136, 0.1);
  }

  &:disabled {
    cursor: not-allowed;
  }
`,yn=({placeholder:e="",customPlaceholder:o,value:i,onChange:r,hasError:s=!1,errorMessage:c,rows:u=3,...f})=>{const[k,b]=m.useState(!1),w=!!(o&&!i&&!k);return t.jsxs(kn,{children:[t.jsx(jn,{...f,value:i,placeholder:w?"":e,onFocus:()=>b(!0),onBlur:x=>{b(!1),f.onBlur?.(x)},onChange:r,hasError:s,rows:u}),o&&t.jsx(Cn,{isVisible:w,children:o}),s&&c&&t.jsx($n,{children:c})]})},kn=n.div`
  position: relative;
  display: inline-block;
  width: 100%;
  margin-right: auto;
`,jn=n.textarea`
  padding: 10px 12px;
  border: 1px solid ${({hasError:e})=>e?"rgba(239, 68, 68, 1)":"rgba(209, 213, 219, 1)"};
  border-radius: 5px;
  font-size: 16px;
  width: 100%;
  outline: none;
  transition: border-color 0.2s ease;
  min-height: 38px;
  box-sizing: border-box;
  max-width: 500px;
  background-color: white;
  color: black;
  padding: 12px 15px;
  resize: vertical;
  font-family: inherit;

  &:hover {
    border-color: ${({hasError:e})=>e?"rgba(239, 68, 68, 1)":"rgba(0, 125, 136, 1)"};
  }

  &:focus {
    border-color: ${({hasError:e})=>e?"rgba(239, 68, 68, 1)":"rgba(0, 125, 136, 1)"};
  }

  &::placeholder {
    color: rgba(80, 85, 92, 1);
    opacity: 1;
  }
`,Cn=n.label`
  position: absolute;
  left: 12px;
  top: 12px;
  color: rgba(80, 85, 92, 1);
  pointer-events: none;
  transition: all 0.2s ease;
  font-size: 14px;
  opacity: ${({isVisible:e})=>e?1:0};
  background-color: white;
  padding: 0 4px;
`,$n=n.span`
  color: rgba(239, 68, 68, 1);
  font-size: 12px;
  margin-top: 4px;
  display: block;
`,Ie=({title:e,onClose:o,onCancel:i,onSave:r,children:s,isSaveDisabled:c=!1,isSubmitting:u=!1,mode:f="create",hideSaveButton:k=!1,hideCanselButton:b=!1,width:w="560px",saveButtonText:x="Сохранить",customLayout:y})=>{const h=f==="view",d=m.useRef(null);m.useEffect(()=>{const j=B=>{B.key==="Escape"&&o()};document.addEventListener("keydown",j);const I=document.body.style.overflow;return document.body.style.overflow="hidden",setTimeout(()=>d.current?.focus(),0),()=>{document.removeEventListener("keydown",j),document.body.style.overflow=I}},[o]);const l=j=>{j.target===j.currentTarget&&o()},R=j=>{j.preventDefault(),i()};return t.jsx(Sn,{onMouseDown:l,role:"presentation",children:t.jsxs(Mn,{ref:d,$width:w,role:"dialog","aria-modal":"true","aria-label":e||"Диалог",tabIndex:-1,children:[t.jsxs(Pe,{children:[t.jsx(Re,{children:e}),t.jsx(Ln,{type:"button",onClick:o,"aria-label":"Закрыть",children:t.jsx("span",{"aria-hidden":!0,children:"×"})})]}),y?t.jsx(Tn,{children:y}):null,t.jsxs(Dn,{onSubmit:r,children:[t.jsx(En,{children:s}),t.jsxs(In,{children:[t.jsx(Pn,{children:b?null:t.jsx(Bn,{isPrimary:!1,onClick:R,children:"Отменить"})}),t.jsx(Rn,{children:!h&&!k?t.jsx(zn,{type:"submit",disabled:c||u,children:u?"Сохранение...":x}):null})]})]})]})})},Sn=n.div`
  position: fixed;
  inset: 0;
  background: rgba(15, 23, 42, 0.55);
  display: grid;
  place-items: center;
  padding: 16px;
  z-index: 1000;
`,Mn=n.div`
  width: min(100%, ${({$width:e})=>e});
  max-height: min(85vh, 820px);
  height: fit-content;

  background: #ffffff;
  border: 1px solid rgba(15, 23, 42, 0.12);
  border-radius: 8px;

  box-shadow: 0 18px 50px rgba(0, 0, 0, 0.28);
  overflow: hidden;
  padding: 40px;

  display: flex;
  flex-direction: column;
  outline: none;

  @media (max-width: 768px) {
    padding: 6px;
  }
`,Pe=n.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;

  padding: 14px 18px 10px 18px;
`,Re=n.h2`
  margin: 0;
  padding: 0;

  flex: 1;
  min-width: 0;
  display: block;

  font-size: 24px;
  line-height: 1.25;
  font-weight: 700;
  color: #0f172a;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: left;
`,Ln=n.button`
  width: 40px;
  height: 40px;
  margin-top: 2px;

  display: grid;
  place-items: center;

  border: none;
  border-radius: 0;
  background: transparent;
  color: rgba(15, 23, 42, 0.75);
  cursor: pointer;
  outline: none;
  box-shadow: none;
  -webkit-tap-highlight-color: transparent;

  font-size: 26px;
  line-height: 1;

  &:hover {
    background: transparent;
    color: rgba(15, 23, 42, 0.9);
  }

  &:active {
    transform: none;
  }

  &:focus,
  &:focus-visible {
    outline: none;
    box-shadow: none;
  }
`,Tn=n.div`
  padding: 12px 18px 0 18px;
`,Dn=n.form`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 0; /* важно для корректного скролла тела */
`,En=n.div`
  padding: 12px 18px 16px 18px;
  flex: 1;
  min-height: 0;
  overflow: auto;
  display: flex;
  flex-direction: column;
  gap: 12px;

  color: #111827;

  & > * {
    width: 100%;
    box-sizing: border-box;
  }
`,In=n.div`
  padding: 12px 18px 18px 18px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  flex-wrap: wrap;
`,Pn=n.div`
  display: flex;
  align-items: center;
  gap: 10px;
`,Rn=n.div`
  display: flex;
  align-items: center;
  gap: 10px;
`,Bn=n(ne)`
  min-width: 140px;
  padding: 10px 16px;
  border-radius: 10px;
  font-size: 16px;
`,zn=n(ne)`
  min-width: 140px;
  padding: 10px 16px;
  border-radius: 10px;
  font-size: 16px;
`,An=[{id:"Last7Days",label:"За последние 7 дней",value:"Last7Days"},{id:"ThisMonth",label:"За этот месяц",value:"ThisMonth"},{id:"Last31Days",label:"За последние 31 день",value:"Last31Days"},{id:"PreviousMonth",label:"За прошлый месяц",value:"PreviousMonth"},{id:"ThisYear",label:"За этот год",value:"ThisYear"},{id:"PreviousYear",label:"За прошлый год",value:"PreviousYear"}],Fn=({value:e="",placeholder:o="Выберите период",options:i=An,showCustomPeriodButton:r=!0,onChange:s,onCustomPeriodClick:c})=>{const[u,f]=m.useState(!1),[k,b]=m.useState(!1),[w,x]=m.useState(""),[y,h]=m.useState(""),[d,l]=m.useState(""),R=m.useRef(null),j=m.useRef(null);m.useEffect(()=>{if(e==="Custom"&&y&&d){const z=E(y),N=E(d);x(`С ${z} по ${N}`)}else{const z=i.find(N=>N.value===e);x(z?z.label:"")}},[e,i,y,d]),m.useEffect(()=>{const z=N=>{R.current&&!R.current.contains(N.target)&&f(!1),k&&j.current&&!j.current.contains(N.target)&&([...document.querySelectorAll(".calendar-container, .arrow-button")].some(v=>v.contains(N.target))||b(!1))};return document.addEventListener("mousedown",z),()=>{document.removeEventListener("mousedown",z)}},[k]);const I=z=>{s?.(z.value),f(!1)},B=()=>{f(!1),c?c():b(!0)},O=()=>{s?.(""),x(""),h(""),l("")},A=()=>{if(y&&d){const z=E(y),N=E(d),W=`С ${z} по ${N}`;s?.("Custom",y,d),x(W),b(!1)}},E=z=>{const N=new Date(z),W=String(N.getDate()).padStart(2,"0"),F=String(N.getMonth()+1).padStart(2,"0"),v=N.getFullYear();return`${W}.${F}.${v}`},V=()=>t.jsxs(Gn,{children:[t.jsx(Pe,{style:{margin:0},children:t.jsx(Re,{style:{margin:0},children:"Выбор периода"})}),t.jsx(Jn,{onClick:O,children:"Очистить период"})]});return t.jsxs(t.Fragment,{children:[t.jsxs(_n,{ref:R,children:[t.jsxs(On,{onClick:()=>f(!u),children:[t.jsx(Nn,{children:w||o}),t.jsx(Wn,{$isOpen:u,children:"▼"})]}),u&&t.jsxs(Yn,{children:[i.map(z=>t.jsxs(Hn,{onClick:()=>I(z),$isSelected:e===z.value,children:[t.jsx(Vn,{$isSelected:e===z.value,children:e===z.value&&t.jsx(Zn,{})}),t.jsx(Un,{children:z.label})]},z.id)),r&&t.jsx(qn,{onClick:B,children:"Другой период"})]})]}),k&&t.jsx("div",{ref:j,children:t.jsx(Ie,{title:"",onClose:()=>b(!1),onCancel:()=>b(!1),onSave:z=>{z.preventDefault(),A()},saveButtonText:"Выбрать",customLayout:t.jsx(V,{}),children:t.jsxs(Xn,{children:[t.jsx(Ce,{children:t.jsx(ie,{value:y,onChange:z=>h(z)})}),t.jsx(Ce,{children:t.jsx(ie,{value:d,onChange:z=>l(z)})})]})})})]})},_n=n.div`
  position: relative;
  width: 245px;
`,On=n.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 12px;
  width: 100%;
  height: 20px;
  background: #ffffff;
  border: 1px solid #d1d5db;
  border-radius: 5px;
  cursor: pointer;
  user-select: none;

  &:hover {
    border-color: #adb3bc;
  }

  &:focus {
    outline: none;
    border-color: #007d88;
  }
`,Nn=n.span`
  font-family: 'Manrope', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  color: #000000;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,Wn=n.span`
  font-size: 10px;
  transition: transform 0.2s;
  transform: ${({$isOpen:e})=>e?"rotate(180deg)":"rotate(0)"};
  color: #adb3bc;
  margin-left: 8px;
`,Yn=n.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  margin-top: 4px;
  background: #ffffff;
  box-shadow: 2px 2px 25px 2px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  z-index: 100;
  max-height: 350px;
  overflow-y: auto;
`,Hn=n.div`
  display: flex;
  align-items: center;
  padding: 10px 12px;
  width: auto;
  min-height: 38px;
  background: ${({$isSelected:e})=>e?"rgba(232, 216, 216, 1)":"transparent"};
  cursor: pointer;

  &:hover {
    background: rgba(232, 216, 216, 1);
  }

  &:first-child {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }

  &:last-child {
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }
`,Vn=n.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 1px solid ${({$isSelected:e})=>e?"#007d88":"#adb3bc"};
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`,Zn=n.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #007d88;
`,Un=n.span`
  font-family: 'Manrope', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  color: #000000;
`,qn=n.div`
  display: flex;
  flex-direction: column;
  padding: 10px 12px 0 0;
  min-height: 38px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  color: #007d88;
  cursor: pointer;
  text-align: center;
  width: auto;

  &:hover {
    background: #f5f5f5;
  }
`,Xn=n.div`
  display: flex;
  gap: 20px;
  margin: 20px 25px;
`,Ce=n.div`
  flex: 1;
`,Gn=n.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 25px;
`,Jn=n.button`
  background: none;
  border: none;
  color: rgba(0, 125, 136, 1);
  cursor: pointer;
  font-size: 14px;
  padding: 4px 4px;
  margin-right: 40px;

  &:hover {
    text-decoration: underline;
  }
`,Kn=({name:e,value:o,onChange:i,onBlur:r,onKeyPress:s,placeholder:c="8 (999) 500-50-50",customPlaceholder:u,tabIndex:f,disabled:k=!1,hasError:b=!1,errorMessage:w})=>{const[x,y]=m.useState(!1),h=m.useRef(null),d=!!(u&&!o&&!x),l=B=>{const A=B.replace(/\D/g,"").slice(0,11);let E="";return A.length>0&&(E+="8"),A.length>1&&(E+=` (${A.slice(1,4)}`),A.length>4&&(E+=`) ${A.slice(4,7)}`),A.length>7&&(E+=`-${A.slice(7,9)}`),A.length>9&&(E+=`-${A.slice(9,11)}`),E},R=B=>{const O=l(B.target.value),A={...B,target:{...B.target,name:e,value:O}};i(A)},j=B=>{y(!1),r?.(B)},I=B=>{s?.(B)};return t.jsxs(Qn,{children:[t.jsx(eo,{ref:h,name:e,type:"tel",value:o,onChange:R,onKeyPress:I,placeholder:d?"":c,maxLength:18,tabIndex:f,disabled:k,hasError:b,onFocus:()=>y(!0),onBlur:j,inputMode:"tel"}),u&&t.jsx(to,{isVisible:d,children:u}),b&&w&&t.jsx(no,{children:w})]})},Qn=n.div`
  position: relative;
  display: inline-block;
  width: 100%;
  margin-right: auto;
`,eo=n.input`
  padding: 10px 12px;
  border: 1px solid ${({hasError:e})=>e?"rgba(239, 68, 68, 1)":"rgba(209, 213, 219, 1)"};
  border-radius: 5px;
  font-size: 14px;
  width: 100%;
  outline: none;
  transition: border-color 0.2s ease;
  height: auto;
  min-height: 38px;
  box-sizing: border-box;
  background-color: white;
  color: black;
  padding: 5px;
  padding-left: 15px;

  &:hover {
    border-color: ${({hasError:e})=>e?"rgba(239, 68, 68, 1)":"rgba(0, 125, 136, 1)"};
  }

  &:focus {
    border-color: ${({hasError:e})=>e?"rgba(239, 68, 68, 1)":"rgba(0, 125, 136, 1)"};
  }

  &::placeholder {
    color: rgba(80, 85, 92, 1);
    opacity: 1;
  }

  &:disabled {
    background-color: rgba(248, 249, 250, 0.9);
    cursor: not-allowed;
  }
`,to=n.label`
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: rgba(80, 85, 92, 1);
  pointer-events: none;
  transition: all 0.2s ease;
  font-size: 14px;
  opacity: ${({isVisible:e})=>e?1:0};
  background-color: white;
  padding: 0 4px;
`,no=n.span`
  color: rgba(239, 68, 68, 1);
  font-size: 12px;
  margin-top: 4px;
  display: block;
`,oo=({tabs:e,activeTab:o,onChange:i,addButton:r,fontSize:s=14})=>{const c=e.find(u=>u.id===o)?.content;return t.jsxs(t.Fragment,{children:[t.jsx(ro,{children:t.jsxs(io,{children:[e.map(u=>t.jsxs(so,{$isActive:o===u.id,onClick:()=>i(u.id),$fontSize:s,children:[u.label,o===u.id&&t.jsx(ao,{})]},u.id)),r&&t.jsx(lo,{children:r})]})}),c&&t.jsx(co,{children:c})]})},ro=n.div`
  width: auto;
  border-bottom: 1px solid rgba(209, 213, 219, 1);
  margin-bottom: 20px;
`,io=n.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  gap: 24px;
  align-items: center;
`,so=n.li`
  position: relative;
  padding: 12px 0;
  cursor: pointer;
  font-size: ${e=>typeof e.$fontSize=="number"?`${e.$fontSize}px`:e.$fontSize};
  font-weight: ${e=>e.$isActive?"600":"400"};
  color: ${e=>e.$isActive?"rgba(0, 125, 136, 1)":"rgba(107, 114, 128, 1)"};
  transition: all 0.2s ease;

  &:hover {
    color: rgba(0, 125, 136, 0.8);
  }
`,ao=n.div`
  position: absolute;
  bottom: -1px;
  left: 0;
  right: 0;
  height: 2px;
  background-color: rgba(0, 125, 136, 1);
  border-radius: 2px 2px 0 0;
`,lo=n.li`
  margin-left: auto;
  padding: 4px 0;
`,co=n.div`
  margin-top: 20px;
`,po=({mode:e,primaryValue:o,secondaryValue:i,placeholder:r="Выберите значение",onSelect:s,onClear:c,disabled:u=!1,hasError:f=!1,errorMessage:k="",customIcon:b})=>{const x=b||t.jsx("svg",{width:"27",height:"6",viewBox:"0 0 27 6",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M2.915 0C1.31175 0 0 1.31175 0 2.915C0 4.51825 1.31175 5.83 2.915 5.83C4.51825 5.83 5.83 4.51825 5.83 2.915C5.83 1.31175 4.51825 0 2.915 0ZM23.32 0C21.7167 0 20.405 1.31175 20.405 2.915C20.405 4.51825 21.7167 5.83 23.32 5.83C24.9233 5.83 26.235 4.51825 26.235 2.915C26.235 1.31175 24.9233 0 23.32 0ZM13.1175 0C11.5142 0 10.2025 1.31175 10.2025 2.915C10.2025 4.51825 11.5142 5.83 13.1175 5.83C14.7207 5.83 16.0325 4.51825 16.0325 2.915C16.0325 1.31175 14.7207 0 13.1175 0Z",fill:"#50555C"})});return e==="view"?t.jsxs(fo,{children:[t.jsx(go,{children:o||"Не указано"}),i&&t.jsx(bo,{children:i})]}):t.jsxs(uo,{children:[t.jsxs(ho,{children:[t.jsx(xo,{type:"text",value:o||"",placeholder:r,readOnly:!0,disabled:u}),o&&!u&&t.jsx(wo,{type:"button",onClick:c,"aria-label":"Очистить",children:"×"})]}),!u&&t.jsx(mo,{type:"button",onClick:s,"aria-label":"Выбрать",children:x}),f&&k&&t.jsx(vo,{children:k})]})},uo=n.div`
  display: flex;
  align-items: center;
  width: 100%;
  flex-direction: row;
`,ho=n.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
`,xo=n.input`
  width: 100%;
  padding: 10px 40px 10px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  background-color: ${e=>e.disabled?"#f5f5f5":"white"};
  color: #333;
  pointer-events: none;
`,fo=n.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: #f5f5f5;
`,go=n.span`
  font-size: 14px;
  color: #333;
  margin-bottom: 4px;
`,bo=n.span`
  font-size: 13px;
  color: #666;
`,mo=n.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;

  &:hover {
    opacity: 0.8;
  }
`,wo=n.button`
  position: absolute;
  right: 10px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 5px;
  color: #999;
  font-size: 30px;

  &:hover {
    color: #666;
  }
`,vo=n.div`
  color: red;
  font-size: 12px;
  margin-top: 4px;
`,de=n.div`
  display: flex;
  flex-direction: row;
  text-align: left;
  font-size: 30px;
  color: black;
  font-weight: 600;
  margin-top: 0px;
  align-items: center;
`,yo=({total:e})=>t.jsx("div",{children:t.jsxs(ko,{children:["Всего: ",e]})}),ko=n.p`
  display: flex;
  align-items: center;
  color: black;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  white-space: nowrap;
`,jo=n.h3`
  color: black;
  text-align: left;
  margin: 0;
  padding: 0;
  margin-top: 15px;
  font-size: 14px;
  font-weight: 400;
`,Co=n.h1`
  display: flex;
  text-align: left;
  font-size: 16px;
  color: black;
  font-weight: 400;
  color: rgba(0, 125, 136, 1);
  margin-right: 15px;
  margin-top: 0px;
`,$o=n.label`
  position: relative;
  display: inline-block;
  width: 50px;
  height: 24px;
  background-color: white;
  border: 4px solid rgba(0, 125, 136, 1);
  border-radius: 35px;
  color: black;
`,So=n.span`
  position: absolute;
  cursor: ${({disabled:e})=>e?"not-allowed":"pointer"};
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transition: 0.4s;
  border-radius: 24px;
  opacity: ${({disabled:e})=>e?.6:1};
  color: black;

  &:before {
    position: absolute;
    content: '';
    height: 16px;
    width: 16px;
    left: 4px;
    bottom: 4px;
    background-color: rgba(0, 125, 136, 1);
    transition: 0.4s;
    border-radius: 50%;
    transform: ${({checked:e})=>e?"translateX(26px)":"translateX(0)"};
  }
`,Mo=n.input.attrs({type:"checkbox"})`
  opacity: 0;
  width: 0;
  color: black;
  height: 0;
`,Lo=({checked:e,onChange:o,disabled:i})=>{const r=()=>{i||o(!e)};return t.jsxs($o,{children:[t.jsx(Mo,{checked:e,onChange:r,disabled:i}),t.jsx(So,{checked:e,disabled:i})]})},To=({id:e,name:o,checked:i,onChange:r,children:s})=>t.jsxs(Do,{htmlFor:e,children:[t.jsx(Eo,{type:"radio",id:e,name:o,checked:i,onChange:r}),s]}),Do=n.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 14px;
  gap: 8px;
  color: black;
`,Eo=n.input`
  appearance: none;
  width: 16px;
  height: 16px;
  border: 1px solid rgba(173, 179, 188, 1);
  border-radius: 50%;
  outline: none;
  cursor: pointer;
  position: relative;
  background-color: rgba(249, 250, 250, 1);
  transition: all 0.2s ease;

  &:checked {
    border-color: rgba(0, 125, 136, 1);
    &::before {
      content: '';
      position: absolute;
      width: 10px;
      height: 10px;
      background-color: rgba(0, 125, 136, 1);
      border-radius: 50%;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`,Io=({percentage:e,onChange:o,draggable:i=!1,colors:r={primary:"rgba(0, 125, 136, 1)",secondary:"rgba(37, 203, 161, 1)"}})=>{const s=m.useRef(null),[c,u]=m.useState(!1),f=x=>{!i||!o||(x.preventDefault(),u(!0),w(x))},k=x=>{!c||!o||w(x)},b=()=>{u(!1)},w=x=>{if(!s.current||!o)return;const y=s.current.getBoundingClientRect();let d=(x.clientX-y.left)/y.width*100;d=Math.max(0,Math.min(100,d)),o(Math.round(d))};return m.useEffect(()=>{if(c)return document.addEventListener("mousemove",k),document.addEventListener("mouseup",b),()=>{document.removeEventListener("mousemove",k),document.removeEventListener("mouseup",b)}},[c]),t.jsxs(Po,{ref:s,$draggable:i,onMouseDown:f,children:[t.jsx(Ro,{$secondaryColor:r.secondary}),t.jsx(Bo,{$percentage:e,$primaryColor:r.primary}),i&&t.jsx(zo,{$percentage:e,$primaryColor:r.primary})]})},Po=n.div`
  width: 100%;
  height: 10px;
  position: relative;
  border-radius: 5px;
  overflow: hidden;
  margin-top: 10px;
  cursor: ${e=>e.$draggable?"pointer":"default"};

  &:hover {
    cursor: ${e=>e.$draggable?"pointer":"default"};
  }
`,Ro=n.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: ${e=>e.$secondaryColor};
  border-radius: 5px;
`,Bo=n.div`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: ${e=>e.$percentage}%;
  background: ${e=>e.$primaryColor};
  border-radius: ${e=>e.$percentage===100?"5px":"5px 0 0 5px"};
  transition: width 0.1s ease;
  z-index: 1;
`,zo=n.div`
  position: absolute;
  left: ${e=>e.$percentage}%;
  top: 50%;
  width: 16px;
  height: 16px;
  background: ${e=>e.$primaryColor};
  border: 2px solid white;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  cursor: grab;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  z-index: 2;
  transition: left 0.1s ease;

  &:active {
    cursor: grabbing;
  }
`,Ao=["zoomControl","fullscreenControl"];let re=null;const Fo=e=>typeof window>"u"?Promise.reject(new Error("Window is not available")):window.ymaps?Promise.resolve(window.ymaps):(re||(re=new Promise((o,i)=>{const r=document.createElement("script"),s=e?`&apikey=${e}`:"";r.src=`https://api-maps.yandex.ru/2.1/?lang=ru_RU${s}`,r.async=!0,r.onload=()=>{window.ymaps?window.ymaps.ready(()=>o(window.ymaps)):i(new Error("Yandex Maps failed to load"))},r.onerror=()=>i(new Error("Failed to load Yandex Maps script")),document.head.appendChild(r)})),re),_o=({onLocationSelect:e,initialAddress:o="",initialLat:i=55.751244,initialLon:r=37.618423,apiKey:s,zoom:c=12,height:u=400,width:f="100%",inputPlaceholder:k="Введите адрес или название места",searchButtonLabel:b="Найти",draggablePlacemark:w=!0,controls:x=Ao,showSearch:y=!0,className:h,style:d,onError:l})=>{const[R,j]=m.useState(null),[I,B]=m.useState(o),[O,A]=m.useState(o),[E,V]=m.useState(!1),z=m.useRef(null);m.useEffect(()=>{let F=!1,v;return(async()=>{try{const S=await Fo(s);if(F||!z.current)return;v=new S.Map(z.current,{center:[i,r],zoom:c,controls:x});const D=new S.Placemark([i,r],{},{draggable:w});v.geoObjects.add(D),v.events.add("click",Y=>{const H=Y.get("coords");N(H,D,v)}),D.events.add("dragend",()=>{const Y=D.geometry.getCoordinates();N(Y,D,v)}),j(v),V(!0)}catch(S){l&&S instanceof Error&&l(S)}})(),()=>{F=!0,v&&v.destroy()}},[s,i,r,c,x,w,l]);const N=async(F,v,p)=>{if(window.ymaps)try{const Y=(await window.ymaps.geocode(F)).geoObjects.get(0).getAddressLine();v.geometry.setCoordinates(F),p.panTo(F,{flying:!0}),A(Y),B(Y),e(Y,F[0],F[1])}catch(S){l&&S instanceof Error&&l(S)}},W=async()=>{if(!(!I.trim()||!window.ymaps||!R))try{const v=(await window.ymaps.geocode(I)).geoObjects.get(0);if(v){const p=v.geometry.getCoordinates(),S=v.properties.get("boundedBy");R.setBounds(S,{checkZoomRange:!0});const D=new window.ymaps.Placemark(p,{},{draggable:w});R.geoObjects.removeAll(),R.geoObjects.add(D);const Y=v.getAddressLine();A(Y),e(Y,p[0],p[1]),D.events.add("dragend",()=>{const H=D.geometry.getCoordinates();N(H,D,R)})}}catch(F){l&&F instanceof Error&&l(F)}};return t.jsxs(Oo,{className:h,style:d,children:[y&&t.jsxs(No,{children:[t.jsx(ce,{type:"text",value:I,onChange:F=>B(F.target.value),placeholder:k,onKeyPress:F=>F.key==="Enter"&&W(),disabled:!E}),t.jsx(Wo,{onClick:W,disabled:!E,children:b})]}),t.jsxs(Ho,{children:["Выбранный адрес: ",t.jsx("strong",{children:O||"Не выбран"})]}),t.jsx(Yo,{ref:z,$height:u,$width:f}),t.jsx(Vo,{children:"📍 Кликните на карте или найдите адрес через поиск"})]})},Oo=n.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,No=n.div`
  display: flex;
  gap: 8px;
`,Wo=n.button`
  padding: 8px 16px;
  background-color: #007d88;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: ${({disabled:e})=>e?"not-allowed":"pointer"};
  opacity: ${({disabled:e})=>e?.6:1};
`,Yo=n.div`
  width: ${({$width:e})=>typeof e=="number"?`${e}px`:e};
  height: ${({$height:e})=>typeof e=="number"?`${e}px`:e};
  border-radius: 8px;
  overflow: hidden;
`,Ho=n.div`
  font-size: 14px;
  color: #374151;
`,Vo=n.div`
  font-size: 12px;
  color: #6b7280;
  text-align: center;
`,pe=n.h1`
  margin-right: auto;
  text-align: left;
  font-size: clamp(20px, 4vw, 30px);
  line-height: 1.2;
  color: var(--wp-title-color, #111);
  font-weight: 600;
  margin: 0;
  @media (max-width: 768px) {
    font-size: 20px;
    line-height: 1.3;
  }
`;function se(e,o="₽"){if(!e||e.trim()==="")return`0${o}`;const i=e.replace(/[^\d-]/g,"");if(!i||i==="-"||i==="")return`0${o}`;const r=parseInt(i,10);if(isNaN(r))return`0${o}`;const s=new Intl.NumberFormat("ru-RU",{style:"decimal",minimumFractionDigits:0,maximumFractionDigits:0}).format(r);return!0?`${s}${o}`:s}function Zo(e){if(!e)return 0;const o=e.replace(/\D/g,"");return parseInt(o,10)}const Uo=({title:e,data:o,maxValue:i,step:r,height:s=300,titleFontSize:c})=>{const[u,f]=m.useState(null),k=[];for(let w=0;w<=i;w+=r)k.push(w);const b=o.length>0?o[0].bars.map(w=>({name:w.name,color:w.color})):[];return t.jsxs(qo,{children:[t.jsxs(de,{style:{marginTop:"0"},children:[t.jsx(pe,{style:{fontSize:c},children:e}),t.jsx(Xo,{children:b.map((w,x)=>t.jsxs(Go,{children:[t.jsx(Jo,{color:w.color}),t.jsx(Ko,{children:w.name})]},x))})]}),t.jsxs(Qo,{height:s,children:[t.jsx(er,{children:k.map((w,x)=>t.jsx(tr,{children:w.toLocaleString()},x))}),t.jsxs(nr,{children:[t.jsxs(or,{children:[k.map((w,x)=>{const y=w/i*100;return t.jsx(rr,{position:100-y},`line-${x}`)}),o.map((w,x)=>t.jsxs(ir,{onMouseEnter:()=>f(x),onMouseLeave:()=>f(null),children:[w.bars.map((y,h)=>{const d=w.bars.slice(h+1).reduce((l,R)=>l+R.value,0);return t.jsx(sr,{height:y.value/i*100,offset:d/i*100,color:y.color,isHovered:u!==null&&u!==x},h)}),u===x&&t.jsxs(cr,{children:[t.jsxs(dr,{children:[t.jsxs(pr,{children:["Всего: ",se(w.total.toString())]}),w.bars.map((y,h)=>t.jsxs(ur,{children:[y.name,": ",se(y.value.toString())]},h))]}),t.jsx(hr,{})]})]},x))]}),t.jsx(ar,{children:o.map((w,x)=>t.jsx(lr,{style:{flex:1,textAlign:"center"},children:w.label},x))})]})]})]})},qo=n.div`
  background-color: white;
  border-radius: 10px;
  border: 1px solid rgba(209, 213, 219, 1);
  padding: 20px;
  position: relative;
  font-family: 'Inter', sans-serif;
  height: auto;
`,Xo=n.div`
  display: flex;
  gap: 16px;
  margin-bottom: 20px;
`,Go=n.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,Jo=n.div`
  width: 16px;
  height: 16px;
  background-color: ${e=>e.color};
  border-radius: 4px;
`,Ko=n.span`
  font-size: 14px;
  color: #4b5563;
`,Qo=n.div`
  display: flex;
  height: ${e=>typeof e.height=="number"?`${e.height}px`:e.height||"300px"};
  position: relative;
`,er=n.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  height: 100%;
  margin-right: 10px;
`,tr=n.span`
  font-size: 12px;
  color: #6b7280;
`,nr=n.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  position: relative;
`,or=n.div`
  display: flex;
  flex-grow: 1;
  align-items: flex-end;
  gap: 20px;
  padding: 20px 20px 0 20px;
  border-width: 0 0 1px 1px;
  border-style: solid;
  border-color: rgba(209, 213, 219, 1);
  position: relative;
`,rr=n.div`
  position: absolute;
  top: ${e=>e.position}%;
  left: 0;
  right: 0;
  height: 1px;
  background: repeating-linear-gradient(
    to right,
    rgba(209, 213, 219, 1),
    rgba(209, 213, 219, 1) 2px,
    transparent 2px,
    transparent 4px
  );
  z-index: 0;
`,ir=n.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 2px;
  flex: 1;
  min-width: 0;
  position: relative;
  height: 100%;
  margin-bottom: 2px;
  z-index: 1;
`,sr=n.div`
  position: relative;
  width: 100%;
  height: ${e=>Math.max(0,e.height)}%;
  margin-top: ${e=>Math.max(0,e.offset)}%;
  background-color: ${e=>e.isHovered?`color-mix(in srgb, ${e.color} 40%, #E5E7EB)`:e.color};
  border-radius: 4px;
  transition: background-color 0.2s ease;
  max-width: 50px;
`,ar=n.div`
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  margin-top: 10px;
`,lr=n.span`
  font-size: 12px;
  color: #6b7280;
  flex: 1;
  text-align: center;
`,cr=n.div`
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  margin-bottom: 10px;
`,dr=n.div`
  background-color: #000;
  color: white;
  padding: 12px;
  border-radius: 10px;
  font-size: 14px;
  white-space: nowrap;
`,pr=n.div`
  font-weight: 600;
  margin-bottom: 6px;
`,ur=n.div`
  margin-bottom: 2px;
`,hr=n.div`
  position: absolute;
  bottom: -6px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 6px solid #000;
`,xr=n.keyframes`
  from { opacity: 0; transform: translate(-50%, -110%); }
  to { opacity: 1; transform: translate(-50%, -100%); }
`,fr=({title:e,data:o,xAxisLabel:i,yAxisLabel:r,maxX:s,maxY:c,minY:u,xStep:f,yStep:k,height:b=300,showLegend:w=!0,xAxisCustomLabels:x,showTooltip:y=!0,titleFontSize:h="30px"})=>{const[d,l]=m.useState(null),[R,j]=m.useState({x:0,y:0}),I=m.useRef(null),B=m.useRef(null),O=Math.max(...o.map(v=>v.x),s),A=[];for(let v=0;v<=O;v+=f)A.push(v);const E=[];for(let v=u;v<=c;v+=k)E.push(v);const V=x||A.map(v=>v.toString()),z=w?Array.from(new Set(o.filter(v=>v.label).map(v=>v.label))).map(v=>{const p=o.find(S=>S.label===v);return{name:v,color:p.color}}):[],N={};o.forEach(v=>{const p=v.label||"default";N[p]||(N[p]=[]),N[p].push(v)});const W=v=>v/O*100,F=v=>{const p=c-u;return 100-(v-u)/p*100};return m.useEffect(()=>{if(d&&B.current){const v=B.current.getBoundingClientRect(),p=W(d.x)/100*v.width,S=F(d.y)/100*v.height;j({x:p+v.left,y:S+v.top})}},[d,s,c,u]),t.jsxs(gr,{children:[t.jsxs(de,{style:{marginTop:"0"},children:[t.jsx(pe,{style:{fontSize:h},children:e}),w&&z.length>0&&t.jsx(br,{children:z.map((v,p)=>t.jsxs(mr,{children:[t.jsx(wr,{color:v.color}),t.jsx(vr,{children:v.name})]},p))})]}),t.jsxs(yr,{height:b,children:[t.jsxs(kr,{children:[E.map((v,p)=>t.jsx(jr,{children:v.toLocaleString()},p)),t.jsx($e,{children:r})]}),t.jsxs(Cr,{ref:B,children:[E.map((v,p)=>t.jsx($r,{position:F(v)},`hline-${p}`)),Object.values(N).map((v,p)=>v.map((S,D)=>{if(D===0)return null;const Y=v[D-1],H=W(Y.x),Z=F(Y.y),C=W(S.x),M=F(S.y);return t.jsx("svg",{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",pointerEvents:"none",zIndex:1},children:t.jsx("line",{x1:`${H}%`,y1:`${Z}%`,x2:`${C}%`,y2:`${M}%`,stroke:S.color,strokeWidth:"1"})},`line-${p}-${D}`)})),o.map((v,p)=>t.jsx(Sr,{x:W(v.x),y:F(v.y),color:v.color,onMouseEnter:()=>l(v),onMouseLeave:()=>l(null),isHovered:d?.label===v.label},p))]})]}),y&&d&&t.jsxs(Tr,{ref:I,style:{left:R.x,top:R.y},children:[t.jsxs(Dr,{children:[d.name&&t.jsx(Er,{children:d.name}),t.jsx(Ir,{children:d.y.toLocaleString()})]}),t.jsx(Pr,{})]}),t.jsxs(Mr,{children:[V.map((v,p)=>{const D=A[p]/O*100;return t.jsx(Lr,{style:{left:`${D}%`,transform:"translateX(-50%)"},children:v},p)}),i&&t.jsx($e,{children:i})]})]})},gr=n.div`
  background-color: white;
  border-radius: 10px;
  border: 1px solid rgba(209, 213, 219, 1);
  padding: 20px;
  position: relative;
  font-family: 'Inter', sans-serif;
  height: auto;
`,br=n.div`
  display: flex;
  gap: 16px;
  margin-top: 16px;
  flex-wrap: wrap;
`,mr=n.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,wr=n.div`
  width: 16px;
  height: 2px;
  background-color: ${e=>e.color};
`,vr=n.span`
  font-size: 14px;
  color: #4b5563;
`,yr=n.div`
  display: flex;
  height: ${e=>typeof e.height=="number"?`${e.height}px`:e.height||"300px"};
  position: relative;
`,kr=n.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  height: 100%;
  margin-right: 10px;
  min-width: 40px;
`,jr=n.span`
  font-size: 12px;
  color: #6b7280;
`,$e=n.div`
  font-size: 12px;
  color: #6b7280;
  text-align: center;
  margin-top: 10px;
`,Cr=n.div`
  position: relative;
  flex-grow: 1;
  border-width: 0 0 1px 1px;
  border-style: solid;
  border-color: rgba(209, 213, 219, 1);
`,$r=n.div`
  position: absolute;
  top: ${e=>e.position}%;
  left: 0;
  right: 0;
  height: 1px;
  background: repeating-linear-gradient(
    to right,
    rgba(209, 213, 219, 1),
    rgba(209, 213, 219, 1) 2px,
    transparent 2px,
    transparent 4px
  );
  z-index: 0;
`,Sr=n.div`
  position: absolute;
  left: ${e=>e.x}%;
  top: ${e=>e.y}%;
  width: ${e=>e.isHovered?"8px":"6px"};
  height: ${e=>e.isHovered?"8px":"6px"};
  background-color: ${e=>e.color};
  border-radius: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    width: 12px;
    height: 12px;
    box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.8);
  }
`,Mr=n.div`
  position: relative;
  height: 20px;
  margin-top: 10px;
  margin-left: 40px;
`,Lr=n.span`
  font-size: 12px;
  color: #6b7280;
  position: absolute;
`,Tr=n.div`
  position: fixed;
  transform: translate(-50%, -100%);
  z-index: 100;
  pointer-events: none;
  animation: ${xr} 0.15s ease-out forwards;
`,Dr=n.div`
  background-color: rgba(0, 0, 0, 0.9);
  color: white;
  padding: 12px 16px;
  border-radius: 8px;
  font-size: 14px;
  white-space: nowrap;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
`,Er=n.div`
  font-weight: 600;
  margin-bottom: 6px;
  color: #fff;
`,Ir=n.div`
  margin-bottom: 2px;
  color: rgba(255, 255, 255, 0.9);
`,Pr=n.div`
  position: absolute;
  bottom: -6px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 6px solid rgba(0, 0, 0, 0.9);
`,Rr=({images:e,initialIndex:o,onClose:i})=>{const[r,s]=m.useState(o),[c,u]=m.useState(0),f=()=>{s(x=>x>0?x-1:e.length-1),u(0)},k=()=>{s(x=>x<e.length-1?x+1:0),u(0)},b=()=>{u(x=>(x+90)%360)},w=x=>{x.key==="Escape"?i():x.key==="ArrowLeft"?f():x.key==="ArrowRight"?k():(x.key==="r"||x.key==="к")&&b()};return t.jsx(Br,{onClick:i,onKeyDown:w,tabIndex:0,children:t.jsxs(zr,{onClick:x=>x.stopPropagation(),children:[t.jsx(Ar,{onClick:i,children:t.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("path",{d:"M18 6L6 18",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),t.jsx("path",{d:"M6 6L18 18",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})}),t.jsx(Fr,{children:t.jsx(_r,{onClick:b,title:"Повернуть (R)",children:t.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M4.077 3C6.88767 5.202 8.48267 7.15733 8.862 8.866C9.24133 10.5753 9.29867 12.202 9.034 13.746H4L12.214 21L20 13.747H15.216C15.192 10.889 14.12 8.46 12 6.46C9.88 4.46 7.239 3.30667 4.077 3Z",stroke:"#50555C",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})})}),t.jsxs(Or,{children:[t.jsx(Se,{$position:"left",onClick:f,children:t.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M15 18L9 12L15 6",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}),t.jsx(Nr,{src:e[r],alt:`Photo ${r+1}`,$rotation:c}),t.jsx(Se,{$position:"right",onClick:k,children:t.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M9 18L15 12L9 6",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})})]}),t.jsx(Wr,{children:e.map((x,y)=>t.jsx(Yr,{$active:y===r,onClick:()=>{s(y),u(0)}},y))})]})})},Br=n.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  outline: none;
`,zr=n.div`
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`,Ar=n.button`
  position: absolute;
  top: -40px;
  right: 0;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  z-index: 10;

  &:hover {
    opacity: 0.8;
  }
`,Fr=n.div`
  position: absolute;
  top: -50px;
  left: 0;
  display: flex;
  gap: 10px;
  z-index: 10;

  @media (max-width: 768px) {
    top: -45px;
  }
`,_r=n.button`
  display: flex;
  align-items: center;
  gap: 6px;
  background: rgba(249, 250, 250, 1);
  border: none;
  border-radius: 4px;
  color: white;
  padding: 6px 12px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.2s;

  &:hover {
    background: white;
  }

  @media (max-width: 768px) {
    padding: 4px 8px;
    font-size: 12px;

    svg {
      width: 16px;
      height: 16px;
    }
  }
`,Or=n.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`,Nr=n.img`
  max-width: 100%;
  max-height: 80vh;
  object-fit: contain;
  border-radius: 4px;
  transform: rotate(${({$rotation:e})=>e}deg);
  transition: transform 0.3s ease;
`,Se=n.button`
  position: absolute;
  ${({$position:e})=>e}: 20px;
  background: rgba(0, 0, 0, 0.7);
  border: none;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 1001;
  opacity: 0.8;
  transition: opacity 0.2s;

  &:hover {
    opacity: 1;
    background: rgba(0, 0, 0, 0.9);
  }

  svg {
    width: 32px;
    height: 32px;
    filter: drop-shadow(0 0 2px rgba(0, 0, 0, 0.5));
  }

  @media (max-width: 768px) {
    width: 36px;
    height: 36px;
    ${({$position:e})=>e}: 10px;

    svg {
      width: 24px;
      height: 24px;
    }
  }
`,Wr=n.div`
  display: flex;
  gap: 8px;
  margin-top: 20px;
`,Yr=n.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${({$active:e})=>e?"#ffffff":"rgba(255, 255, 255, 0.5)"};
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #ffffff;
  }
`,Be=({isOpen:e,callPhone:o,error:i,onClose:r})=>{const[s,c]=m.useState(!1);if(!e)return null;const u=/iPhone|iPad|iPod|Android/i.test(navigator.userAgent),f=()=>{u?window.location.href=`tel:${o}`:(navigator.clipboard.writeText(o),c(!0),setTimeout(()=>c(!1),2e3))};return t.jsx(Hr,{onClick:r,children:t.jsxs(Vr,{onClick:k=>k.stopPropagation(),children:[t.jsx(Zr,{children:"Подтверждение авторизации"}),t.jsx(Me,{children:"Для завершения авторизации позвоните на номер:"}),t.jsxs(Ur,{onClick:f,title:u?"Позвонить":"Копировать номер",$clickable:!0,children:[o,!u&&s&&t.jsx(qr,{children:"Скопировано!"})]}),t.jsx(Me,{children:"После звонка система автоматически подтвердит вашу авторизацию."}),i&&t.jsx(Xr,{children:i})]})})},Hr=n.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`,Vr=n.div`
  background: white;
  padding: 30px;
  border-radius: 12px;
  width: 90%;
  max-width: 500px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  text-align: center;
`,Zr=n.h2`
  font-size: 20px;
  margin-bottom: 20px;
  color: #333;
`,Me=n.p`
  margin-bottom: 15px;
  color: #555;
`,Ur=n.div`
  font-size: 24px;
  font-weight: bold;
  margin: 20px 0;
  color: rgba(0, 125, 136, 1);
  position: relative;
  cursor: ${e=>e.$clickable?"pointer":"default"};
  transition: all 0.2s;

  ${e=>e.$clickable&&`
        &:hover {
            color: rgba(0, 100, 120, 1);
            text-decoration: underline;
        }
        &:active {
            transform: scale(0.98);
        }
    `}
`,qr=n.span`
  position: absolute;
  bottom: -25px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 14px;
  color: #27ae60;
  font-weight: normal;
  white-space: nowrap;
`,Xr=n.div`
  color: #e74c3c;
  margin: 10px 0;
`,ze=m.createContext({collapsed:!1,toggleCollapsed:()=>{},selectedSideMenuItem:null,setSelectedSideMenuItem:()=>{},selectedTopMenuItem:null,setSelectedTopMenuItem:()=>{}}),Gr=({collapsed:e})=>t.jsx("svg",{width:"16",height:"14",viewBox:"0 0 16 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{transform:`rotate(${e?"180deg":"0deg"})`,transition:"transform 0.3s ease"},children:t.jsx("path",{d:"M0.915527 7.00049L0.922363 6.96826L0.939941 6.94092H0.940918L6.77393 1.10693C6.78967 1.09132 6.81132 1.08252 6.8335 1.08252C6.8557 1.08259 6.87736 1.09123 6.89307 1.10693C6.90877 1.12264 6.91742 1.1443 6.91748 1.1665L6.91064 1.19873L6.89307 1.22607L2.0542 6.06299L1.20068 6.9165L14.9995 6.9165C15.0106 6.9165 15.0217 6.91918 15.0317 6.92334L15.0591 6.94092C15.0747 6.95654 15.0835 6.97839 15.0835 7.00049C15.0834 7.01136 15.0807 7.02188 15.0767 7.03174L15.0591 7.05908C15.0435 7.07471 15.0216 7.0835 14.9995 7.0835L1.20068 7.0835L2.0542 7.93701L6.89307 12.7739C6.90872 12.7897 6.91748 12.8113 6.91748 12.8335L6.91064 12.8657L6.89307 12.8931C6.87736 12.9088 6.8557 12.9174 6.8335 12.9175L6.80127 12.9106L6.77393 12.8931L0.940918 7.05908H0.939941L0.922363 7.03174C0.918234 7.02176 0.915581 7.01129 0.915527 7.00049Z",fill:"#50555C",stroke:"#50555C"})}),Jr=({items:e,bottomItems:o=[],bottomContent:i,logo:r,arrowIcon:s,collapsed:c,onToggle:u,selectedKey:f,onSelect:k,autoCollapseOnSelect:b=!1,width:w="315px",collapsedWidth:x="85px",className:y,style:h,mobileBreakpoint:d=768,showBottomLabels:l=!0,children:R})=>{const j=m.useContext(ze),[I,B]=m.useState(window.innerWidth<=d);m.useEffect(()=>{const g=()=>{B(window.innerWidth<=d)};return window.addEventListener("resize",g),()=>window.removeEventListener("resize",g)},[d]);const[O,A]=m.useState(c??j.collapsed??!1),[E,V]=m.useState(null),[z,N]=m.useState(f??j.selectedSideMenuItem??null),[W,F]=m.useState({visible:!1,x:0,y:0,items:[]}),v=m.useRef(null),p=c??j.collapsed??O,S=g=>{A(g),j.toggleCollapsed(),u?.(g)},D=f??j.selectedSideMenuItem??z,Y=g=>{N(g),j.setSelectedSideMenuItem(g)};m.useEffect(()=>{c!==void 0&&(A(c),c&&V(null))},[c]),m.useEffect(()=>{f!==void 0&&Y(f)},[f]),m.useEffect(()=>{const g=()=>F(T=>({...T,visible:!1}));return document.addEventListener("click",g),()=>document.removeEventListener("click",g)},[]);const H=()=>{const g=!p;S(g),g&&V(null)},Z=g=>{g.disabled||g.hidden||(Y(g.key),k?.(g),g.onClick?.(g),b&&(S(!0),V(null)))},C=g=>{V(T=>T===g?null:g)},M=(g,T)=>{const L=(g.children?.length||0)>0;if(p&&L){T.stopPropagation();const _=T.currentTarget.getBoundingClientRect();F({visible:!0,x:_.right+6,y:_.top,items:g.children||[]});return}L?C(g.key):Z(g)},a=(g,T=!1)=>g.filter(L=>!L.hidden).map(L=>{const _=(L.children?.length||0)>0,U=E===L.key,G=D===L.key||!!L.children&&L.children.some(J=>J.key===D);return t.jsxs(m.Fragment,{children:[t.jsxs(ci,{$collapsed:p,$selected:G,onClick:J=>M(L,J),$disabled:L.disabled,title:L.label,children:[L.icon&&t.jsx(pi,{$collapsed:p,children:L.icon}),!p&&t.jsx(di,{children:L.label}),!p&&_&&t.jsx(hi,{$expanded:U,children:"▾"})]}),!p&&_&&U&&t.jsx(ui,{children:a(L.children||[],!0)})]},L.key)}),$=m.useMemo(()=>W.visible?t.jsx(xi,{style:{left:W.x,top:W.y},children:W.items.map(g=>t.jsx(fi,{onClick:()=>{Z(g),F({visible:!1,x:0,y:0,items:[]})},$selected:D===g.key,children:g.label},g.key))}):null,[W,D]),P=()=>{const g=[...e,...o].filter(T=>!T.hidden);return t.jsx(ei,{children:g.map(T=>{const L=D===T.key;return t.jsxs(ti,{$selected:L,onClick:()=>Z(T),$disabled:T.disabled,children:[T.icon&&t.jsx(ni,{$selected:L,children:T.icon}),l&&t.jsx(oi,{$selected:L,children:T.label})]},T.key)})})};return I?t.jsxs(Kr,{className:y,style:h,children:[t.jsx(Qr,{children:R}),P()]}):t.jsxs(ri,{ref:v,$collapsed:p,$width:w,$collapsedWidth:x,className:y,style:h,children:[t.jsxs(ii,{children:[t.jsx(si,{onClick:H,"aria-label":"Переключить меню",children:s??t.jsx(Gr,{collapsed:p})}),!p&&r&&t.jsx(ai,{children:r})]}),t.jsxs(li,{children:[t.jsx(Le,{children:a(e)}),o.length>0&&t.jsxs(t.Fragment,{children:[t.jsx(Te,{}),t.jsx(Le,{children:a(o)})]}),i&&t.jsxs(t.Fragment,{children:[(o.length>0||e.length>0)&&t.jsx(Te,{}),t.jsx(bi,{$collapsed:p,children:i})]})]}),$,t.jsx(gi,{$collapsed:p}),R]})},Kr=n.div`
  width: 100%;
  height: 100vh;
  min-height: 100vh;
  height: 100svh;
  min-height: 100svh;
  height: 100dvh;
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
  background-color: rgba(249, 250, 250, 1);
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
`,Qr=n.main`
  flex: 1;
  overflow-y: auto;
  min-height: 0; /* Важно для flex-контейнера */
`,ei=n.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  border-top: 1px solid rgba(209, 213, 219, 1);
  padding: 8px 4px;
  position: sticky;
  bottom: 0;
  width: 100%;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.05);
  z-index: 10;
`,ti=n.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  padding: 8px 12px;
  border-radius: 8px;
  cursor: ${({$disabled:e})=>e?"not-allowed":"pointer"};
  opacity: ${({$disabled:e})=>e?.5:1};
  color: ${({$selected:e})=>e?"#000":"#50555c"};
  background-color: ${({$selected:e})=>e?"rgba(209, 213, 219, 0.3)":"transparent"};
  transition: all 0.2s ease;
  flex: 1;
  max-width: 80px;

  &:active {
    background-color: rgba(209, 213, 219, 0.5);
  }
`,ni=n.div`
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({$selected:e})=>e?"#000":"#50555c"};
`,oi=n.span`
  font-size: 12px;
  font-weight: ${({$selected:e})=>e?"600":"400"};
  color: ${({$selected:e})=>e?"#000":"#50555c"};
  text-align: center;
  white-space: nowrap;
`,ri=n.div`
  width: ${({$collapsed:e,$width:o,$collapsedWidth:i})=>e?i:o};
  height: 100vh;
  background-color: rgba(249, 250, 250, 1);
  color: rgba(80, 85, 92, 1);
  position: relative;
  padding: 22px 17px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  transition: width 0.3s ease;
  box-shadow: 1px 0 7px rgba(0, 0, 0, 0.05);
  overflow: hidden;
`,ii=n.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 28px;
  width: 100%;
`,si=n.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 6px;
  margin-bottom: 0px;
`,ai=n.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 4px;
`,li=n.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  height: 100%;
  width: 100%;
`,Le=n.div`
  overflow-y: auto;
  overflow-x: hidden;
  padding-right: 4px;

  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.1);
    border-radius: 4px;
  }
`,ci=n.div`
  display: flex;
  align-items: center;
  justify-content: ${({$collapsed:e})=>e?"center":"flex-start"};
  gap: ${({$collapsed:e})=>e?"0":"12px"};
  padding: ${({$collapsed:e})=>e?"0":"10px 17px"};
  margin: 4px 0;
  border-radius: 8px;
  cursor: ${({$disabled:e})=>e?"not-allowed":"pointer"};
  color: ${({$selected:e})=>e?"#000":"#50555c"};
  background-color: ${({$selected:e})=>e?"rgba(209, 213, 219, 1)":"transparent"};
  transition: background-color 0.2s ease, color 0.2s ease;
  opacity: ${({$disabled:e})=>e?.5:1};
  
  /* В свернутом состоянии делаем иконку квадратной с отступами */
  ${({$collapsed:e})=>e&&`
    width: 48px;
    height: 48px;
    margin: 4px auto;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  `}

  &:hover {
    background-color: ${({$selected:e})=>e?"rgba(209, 213, 219, 1)":"rgba(209, 213, 219, 0.5)"};
    color: #000;
  }
`,di=n.span`
  font-size: 15px;
  font-weight: 500;
  white-space: nowrap;
`,pi=n.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
  ${({$collapsed:e})=>e?`
    width: 48px;
    height: 48px;
  `:`
    min-width: 21px;
    width: 21px;
    height: auto;
  `}
  
  & > svg {
    ${({$collapsed:e})=>e?`
      width: 24px;
      height: 24px;
    `:`
      width: 100%;
      height: auto;
    `}
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
`,ui=n.div`
  margin-left: 45px;
  padding-left: 0;
  border-left: 1px solid rgba(209, 213, 219, 0.8);
  display: flex;
  flex-direction: column;
  gap: 4px;
`,hi=n.span`
  margin-left: auto;
  transform: rotate(${({$expanded:e})=>e?"180deg":"0deg"});
  transition: transform 0.2s ease;
`,Te=n.div`
  height: 1px;
  width: 100%;
  background-color: rgba(209, 213, 219, 1);
  margin: 14px 0;
`,xi=n.div`
  position: fixed;
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  padding: 8px;
  z-index: 1000;
  min-width: 180px;
`,fi=n.div`
  padding: 8px 12px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  color: ${({$selected:e})=>e?"#000":"#50555c"};
  background-color: ${({$selected:e})=>e?"rgba(209, 213, 219, 1)":"transparent"};

  &:hover {
    background-color: ${({$selected:e})=>e?"rgba(209, 213, 219, 1)":"rgba(209, 213, 219, 0.5)"};
    color: #000;
  }
`,gi=n.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  width: 1px;
  background-color: rgba(209, 213, 219, 1);
  transition: all 0.3s ease;
  opacity: ${({$collapsed:e})=>e?0:1};
`,bi=n.div`
  width: 100%;
  margin-top: auto;
  padding: ${({$collapsed:e})=>e?"8px 0":"12px 0"};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  /* Адаптация для свернутого состояния */
  ${({$collapsed:e})=>e&&`
    & > * {
      transform: scale(0.9);
    }
  `}
`,mi=e=>{const o=e.replace(/\D/g,""),r=(o.startsWith("8")||o.length===0?o:`8${o}`).slice(0,11);let s="";return r.length>0&&(s+="8"),r.length>1&&(s+=` (${r.slice(1,4)}`),r.length>4&&(s+=`) ${r.slice(4,7)}`),r.length>7&&(s+=`-${r.slice(7,9)}`),r.length>9&&(s+=`-${r.slice(9,11)}`),s},Ae=({value:e,onChange:o,placeholder:i="8 (xxx) xxx-xx-xx",tabIndex:r})=>{const s=c=>{const u=mi(c.target.value);o(u)};return t.jsx(wi,{type:"text",value:e,onChange:s,placeholder:i,maxLength:18,tabIndex:r})},wi=n.input`
  width: 100%;
  height: 54px;
  font-size: 16px;
  border: 2px solid rgba(0, 125, 136, 0.5);
  border-radius: 8px;
  padding: 0 15px;
  color: rgba(0, 125, 136, 1);
  background-color: rgba(255, 255, 255, 0.9);
  transition: all 0.3s ease;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  outline: none;
  display: block;

  &:focus {
    border-color: rgba(37, 203, 161, 1);
    box-shadow: 0 0 0 0.2rem rgba(37, 203, 161, 0.25);
    background-color: rgba(255, 255, 255, 1);
  }
`,vi=e=>({call_phone:e.call_phone??e.callPhone,check_id:e.check_id??e.checkId,name_required:e.name_required??e.nameRequired}),Fe=async(e,o)=>{const r=await X("/auth/call/initiate",{method:"POST",body:{phone:e,user_type:o}});return vi(r)},_e=(e,o,i,r)=>X("/auth/call/confirm",{method:"POST",body:{phone:e,check_id:o,checkId:o,user_type:i,userType:i,name:r}}),yi=()=>X("/auth/session/info",{method:"GET"}),ki=({isOpen:e,onClose:o,onSubmit:i,error:r,isLoading:s=!1})=>{const[c,u]=m.useState("");if(!e)return null;const f=k=>{k.preventDefault(),i(c)};return t.jsx(ji,{onClick:o,children:t.jsx(Ci,{onClick:k=>k.stopPropagation(),children:t.jsxs($i,{onSubmit:f,children:[t.jsx(Si,{children:"Как вас зовут?"}),t.jsxs(Mi,{children:[t.jsx(ce,{type:"text",value:c,onChange:k=>u(k.target.value),placeholder:"Иванов Иван Иванович",disabled:s,autoFocus:!0,style:{flex:1}}),t.jsx(Li,{type:"submit",disabled:s||!c.trim(),children:s?"...":"→"})]}),r&&t.jsx(Ti,{children:r})]})})})},ji=n.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`,Ci=n.div`
  background: white;
  padding: 30px;
  border-radius: 12px;
  width: 90%;
  max-width: 450px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
`,$i=n.form`
  display: flex;
  flex-direction: column;
`,Si=n.h2`
  display: block;
  font-size: 27px;
  color: black;
  margin-bottom: 16px;
  margin-top: 0;
`,Mi=n.div`
  display: flex;
  gap: 10px;
  align-items: center;
`,Li=n(ne)`
  width: auto;
  min-width: 50px;
  height: 40px;
  padding: 0 10px;
  font-size: 20px;
  border-radius: 8px;
  white-space: nowrap;
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,Ti=n.div`
  color: #e74c3c;
  font-size: 12px;
  margin-top: 8px;
  text-align: left;
`,Di=({onLoginSuccess:e,userType:o="delivery_operator",title:i="Авторизация",submitLabel:r="Войти",placeholder:s="8 (xxx) xxx-xx-xx",supportPhone:c="8 989 924 24 24",supportLinkUrl:u="https://waypay.one",supportLinkText:f="waypay.one",className:k,style:b,pollingIntervalMs:w=3e3,enableRegistration:x=!1,enableSupport:y=!0})=>{const[h,d]=m.useState(!1),[l,R]=m.useState(""),[j,I]=m.useState(!1),[B,O]=m.useState(""),[A,E]=m.useState(""),[V,z]=m.useState(!1),[N,W]=m.useState(!1),[F,v]=m.useState(""),[p,S]=m.useState(""),[D,Y]=m.useState(null),H=m.useRef(void 0);m.useEffect(()=>()=>{H.current&&clearInterval(H.current)},[]);const Z=g=>{const T=g.replace(/\D/g,"");return T?T.startsWith("8")?`+7${T.slice(1)}`:T.startsWith("7")?`+${T}`:`+${T}`:""},C=()=>{I(!1),W(!1),v(""),S(""),Y(null),H.current&&window.clearInterval(H.current)},M=async g=>{if(g.preventDefault(),!l){E("Введите номер телефона");return}d(!0),E("");const T=Z(l);try{const L=await Fe(T,o);Y({phone:T,checkId:L.check_id,callPhone:L.call_phone}),x&&"name_required"in L&&L.name_required?(W(!0),O(L.call_phone)):!x&&"name_required"in L&&L.name_required?(E("Этот номер не зарегистрирован в системе. Обратитесь в поддержку для регистрации."),Y(null)):(O(L.call_phone),I(!0),$(T,L.check_id))}catch(L){console.error("Auth error:",L),L&&L.response&&L.response.data?E(L.response.data):L instanceof Error?E(L.message):E("Произошла ошибка при авторизации")}finally{d(!1)}},a=async g=>{if(!g.trim()){S("Введите ФИО");return}if(D){d(!0),S("");try{v(g),W(!1),I(!0),$(D.phone,D.checkId,g)}catch(T){console.error("Registration error:",T),S("Не удалось завершить регистрацию")}finally{d(!1)}}},$=(g,T,L)=>{H.current&&window.clearInterval(H.current),H.current=window.setInterval(()=>{P(g,T,L)},w)},P=async(g,T,L)=>{if(!V){z(!0);try{const _=await _e(g,T,o,L||F);(_.access_token&&_.refresh_token||_.accessToken&&_.refreshToken)&&(H.current&&window.clearInterval(H.current),I(!1),W(!1),v(""),Y(null),e(_.access_token??_.accessToken))}catch(_){console.error("Verification error:",_)}finally{z(!1)}}};return t.jsxs(Ei,{className:k,style:b,children:[t.jsxs(Ii,{children:[t.jsxs(Pi,{onSubmit:M,children:[t.jsx(Ri,{children:i}),t.jsx(Bi,{children:t.jsx(zi,{children:t.jsx(Ae,{value:l,onChange:g=>R(g),placeholder:s})})}),A&&t.jsx(Ni,{children:t.jsx("span",{children:A})}),t.jsx(Ai,{type:"submit",disabled:h,children:h?"Загрузка...":r})]}),y&&t.jsxs(Fi,{children:["Хотите получить доступ к нашим продуктам?",t.jsx("br",{}),"Обратитесь по номеру"," ",t.jsx(_i,{href:`tel:${c}`,children:c}),t.jsx("br",{}),"или оставьте заявку на"," ",t.jsx(Oi,{href:u,target:"_blank",rel:"noreferrer",children:f})]})]}),t.jsx(ki,{isOpen:N,onClose:C,onSubmit:a,error:p,isLoading:h}),t.jsx(Be,{isOpen:j,onClose:C,callPhone:B,error:A})]})},Ei=n.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  overflow: hidden; /* Отключаем прокрутку */
  padding: 20px;
  background: white; /* Меняем на белый фон */
  box-sizing: border-box; /* Учитываем padding в размерах */
`,Ii=n.div`
  background: white;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 125, 136, 0.1);
  width: 100%;
  max-width: 440px;
  max-height: calc(100vh - 40px); /* Ограничиваем высоту с учетом padding контейнера */
  overflow-y: auto; /* Добавляем прокрутку внутри карточки если контент не помещается */
  padding: 40px;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(
      90deg,
      rgba(0, 125, 136, 1) 0%,
      rgba(37, 203, 161, 1) 100%
    );
  }

  @media (max-width: 480px) {
    padding: 30px 20px;
    max-height: calc(100vh - 40px);
  }

  /* Скрываем скроллбар для Chrome, Safari и Opera */
  &::-webkit-scrollbar {
    display: none;
  }

  /* Скрываем скроллбар для IE, Edge и Firefox */
  -ms-overflow-style: none;
  scrollbar-width: none;
`,Pi=n.form`
  display: flex;
  flex-direction: column;
`,Ri=n.h1`
  font-size: 24px;
  margin-bottom: 30px;
  text-align: center;
  color: #333;
  font-weight: 600;
`,Bi=n.div`
  margin-bottom: 25px;
`,zi=n.div`
  position: relative;
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`,Ai=n.button`
  background: linear-gradient(
    90deg,
    rgba(0, 125, 136, 1) 0%,
    rgba(37, 203, 161, 1) 100%
  );
  color: white;
  border: none;
  padding: 16px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 125, 136, 0.3);
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    background: linear-gradient(
      90deg,
      rgba(0, 125, 136, 0.5) 0%,
      rgba(37, 203, 161, 0.5) 100%
    );
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`,Fi=n.div`
  margin-top: 30px;
  padding-top: 20px;
  border-top: 1px solid #f0f0f0;
  text-align: center;
  font-size: 14px;
  color: #666;
  line-height: 1.5;
`,_i=n.a`
  color: rgba(0, 125, 136, 1);
  text-decoration: none;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`,Oi=n.a`
  color: rgba(0, 125, 136, 1);
  text-decoration: none;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`,Ni=n.div`
  display: flex;
  align-items: center;
  gap: 8px;
  background: #fff6f5;
  color: #b42318;
  border: 1px solid #f8d7da;
  padding: 12px 14px;
  border-radius: 10px;
  margin-bottom: 16px;
  font-size: 14px;
  box-shadow: 0 6px 14px rgba(180, 35, 24, 0.08);
`,Oe=e=>{let o=0;for(let r=0;r<e.length;r++)o=e.charCodeAt(r)+((o<<5)-o);return`hsl(${Math.abs(o%360)}, 60%, 60%)`},Wi=e=>!e||!e.trim()?"?":e.split(" ").filter(r=>r.length>0).map(r=>r[0].toUpperCase()).join("").slice(0,2)||"?",Yi=(e,o=100)=>{const i=document.createElement("canvas");i.width=o,i.height=o;const r=i.getContext("2d");if(!r)return"";const s=Oe(e);r.fillStyle=s,r.beginPath(),r.arc(o/2,o/2,o/2,0,Math.PI*2),r.fill(),r.fillStyle="#ffffff";const c=o/2;r.font=`bold ${c}px "Manrope", Arial, sans-serif`,r.textAlign="center",r.textBaseline="middle";const u=c*.1;return r.fillText(e,o/2,o/2+u),i.toDataURL("image/png")},Hi=e=>{if(!e)return"";const o=typeof e=="string"?new Date(e):e;if(isNaN(o.getTime()))return"";const i=o.getDate().toString().padStart(2,"0"),r=(o.getMonth()+1).toString().padStart(2,"0"),s=o.getFullYear();return`${i}-${r}-${s}`};function Vi(e){return new Date(e)}const Ne=e=>{let o;try{if(e instanceof Date)o=e;else if(typeof e=="string"||typeof e=="number")o=new Date(e);else throw new Error("Неподдерживаемый тип данных");if(isNaN(o.getTime()))return"неверная дата";const i=new Date;if(o>i){const w=Math.floor((o.getTime()-i.getTime())/1e3),x=Math.floor(w/60),y=Math.floor(x/60),h=Math.floor(y/24);return w<10?"скоро":w<60?`через ${w} секунд`:x===1?"через минуту":x<60?`через ${x} минут`:y===1?"через час":y<24?`через ${y} часов`:h===1?"завтра":h<7?`через ${h} дней`:"в будущем"}const r=Math.floor((i.getTime()-o.getTime())/1e3),s=Math.floor(r/60),c=Math.floor(s/60),u=Math.floor(c/24),f=Math.floor(u/7),k=Math.floor(u/30),b=Math.floor(u/365);if(r<10)return"только что";if(r<60){const w=Math.max(1,r);return w===1?"секунду назад":w<5?`${w} секунды назад`:`${w} секунд назад`}return s<60?s===1?"минуту назад":s<5?`${s} минуты назад`:`${s} минут назад`:c<24?c===1?"час назад":c<5?`${c} часа назад`:`${c} часов назад`:u<7?u===1?"вчера":u===2?"позавчера":`${u} дня назад`:f<4?f===1?"неделю назад":f<5?`${f} недели назад`:`${f} недель назад`:k<12?k===1?"месяц назад":k<5?`${k} месяца назад`:`${k} месяцев назад`:b===1?"год назад":b<5?`${b} года назад`:`${b} лет назад`}catch(i){return console.error("Ошибка форматирования относительного времени:",i),"ошибка даты"}},We=e=>{try{return e.toLocaleDateString("ru-RU",{day:"2-digit",month:"2-digit",year:"2-digit",hour:"2-digit",minute:"2-digit"})}catch{return"неверная дата"}},Zi=(e,o={})=>{const{useExactAfterMonths:i=6,includeTime:r=!0}=o,s=new Date(e);return isNaN(s.getTime()),Math.floor((new Date().getTime()-s.getTime())/(1e3*60*60*24*30))>=i?r?We(s):s.toLocaleDateString("ru-RU",{day:"2-digit",month:"2-digit",year:"2-digit"}):Ne(s)};exports.API_BASE_URL=le;exports.AddButton=dt;exports.AuthCallModal=Be;exports.AuthPage=Di;exports.BackButton=ft;exports.BaseModal=Ie;exports.Checkbox=Wt;exports.ColumnChart=Uo;exports.ContextMenu=ae;exports.CountInfoTitle=yo;exports.CustomCalendar=ie;exports.CustomInput=ce;exports.CustomPhoneInput=Ae;exports.CustomSelect=Mt;exports.CustomTable=Ke;exports.CustomTextArea=yn;exports.CustomTitle=pe;exports.DefaultButton=ne;exports.DeleteButton=mt;exports.EditButton=vt;exports.EntitySelectContainer=po;exports.ExportButton=jt;exports.InputContainer=xn;exports.InputLabel=hn;exports.InputRow=un;exports.InputTitle=jo;exports.ModalInfoTitle=Co;exports.Pagination=wn;exports.PeriodField=Fn;exports.PhoneModalInput=Kn;exports.PhotoViewerModal=Rr;exports.ProgressBar=Io;exports.RadioButton=To;exports.ScatterPlot=fr;exports.SideMenu=Jr;exports.SideMenuContext=ze;exports.Tabs=oo;exports.TitleField=de;exports.ToggleSwitch=Lo;exports.YandexMapSelector=_o;exports.apiRequest=X;exports.authStorage=ht;exports.confirmCallAuth=_e;exports.formatDate=Hi;exports.formatExactDate=We;exports.formatMoney=se;exports.formatRelativeTime=Ne;exports.formatRelativeTimeExtended=Zi;exports.generateAvatar=Yi;exports.getInitials=Wi;exports.getSessionInfo=yi;exports.initiateCallAuth=Fe;exports.parseDateInput=Vi;exports.parseMoney=Zo;exports.refreshAccessToken=De;exports.stringToColor=Oe;
