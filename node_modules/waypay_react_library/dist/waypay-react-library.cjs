"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const y=require("react"),o=require("styled-components"),U=require("framer-motion");var Q={exports:{}},G={};var ue;function He(){if(ue)return G;ue=1;var e=Symbol.for("react.transitional.element"),n=Symbol.for("react.fragment");function s(i,r,d){var p=null;if(d!==void 0&&(p=""+d),r.key!==void 0&&(p=""+r.key),"key"in r){d={};for(var b in r)b!=="key"&&(d[b]=r[b])}else d=r;return r=d.ref,{$$typeof:e,type:i,key:p,ref:r!==void 0?r:null,props:d}}return G.Fragment=n,G.jsx=s,G.jsxs=s,G}var J={};var he;function Ve(){return he||(he=1,process.env.NODE_ENV!=="production"&&(function(){function e(a){if(a==null)return null;if(typeof a=="function")return a.$$typeof===_?null:a.displayName||a.name||null;if(typeof a=="string")return a;switch(a){case L:return"Fragment";case E:return"Profiler";case k:return"StrictMode";case P:return"Suspense";case z:return"SuspenseList";case Y:return"Activity"}if(typeof a=="object")switch(typeof a.tag=="number"&&console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),a.$$typeof){case l:return"Portal";case A:return a.displayName||"Context";case T:return(a._context.displayName||"Context")+".Consumer";case B:var S=a.render;return a=a.displayName,a||(a=S.displayName||S.name||"",a=a!==""?"ForwardRef("+a+")":"ForwardRef"),a;case I:return S=a.displayName||null,S!==null?S:e(a.type)||"Memo";case F:S=a._payload,a=a._init;try{return e(a(S))}catch{}}return null}function n(a){return""+a}function s(a){try{n(a);var S=!1}catch{S=!0}if(S){S=console;var D=S.error,O=typeof Symbol=="function"&&Symbol.toStringTag&&a[Symbol.toStringTag]||a.constructor.name||"Object";return D.call(S,"The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",O),n(a)}}function i(a){if(a===L)return"<>";if(typeof a=="object"&&a!==null&&a.$$typeof===F)return"<...>";try{var S=e(a);return S?"<"+S+">":"<...>"}catch{return"<...>"}}function r(){var a=v.A;return a===null?null:a.getOwner()}function d(){return Error("react-stack-top-frame")}function p(a){if(c.call(a,"key")){var S=Object.getOwnPropertyDescriptor(a,"key").get;if(S&&S.isReactWarning)return!1}return a.key!==void 0}function b(a,S){function D(){W||(W=!0,console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",S))}D.isReactWarning=!0,Object.defineProperty(a,"key",{get:D,configurable:!0})}function j(){var a=e(this.type);return R[a]||(R[a]=!0,console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.")),a=this.props.ref,a!==void 0?a:null}function f(a,S,D,O,H,Z){var N=D.ref;return a={$$typeof:u,type:a,key:S,props:D,_owner:O},(N!==void 0?N:null)!==null?Object.defineProperty(a,"ref",{enumerable:!1,get:j}):Object.defineProperty(a,"ref",{enumerable:!1,value:null}),a._store={},Object.defineProperty(a._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:0}),Object.defineProperty(a,"_debugInfo",{configurable:!1,enumerable:!1,writable:!0,value:null}),Object.defineProperty(a,"_debugStack",{configurable:!1,enumerable:!1,writable:!0,value:H}),Object.defineProperty(a,"_debugTask",{configurable:!1,enumerable:!1,writable:!0,value:Z}),Object.freeze&&(Object.freeze(a.props),Object.freeze(a)),a}function g(a,S,D,O,H,Z){var N=S.children;if(N!==void 0)if(O)if(C(N)){for(O=0;O<N.length;O++)x(N[O]);Object.freeze&&Object.freeze(N)}else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else x(N);if(c.call(S,"key")){N=e(a);var X=Object.keys(S).filter(function(Ne){return Ne!=="key"});O=0<X.length?"{key: someKey, "+X.join(": ..., ")+": ...}":"{key: someKey}",$[N+O]||(X=0<X.length?"{"+X.join(": ..., ")+": ...}":"{}",console.error(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,O,N,X,N),$[N+O]=!0)}if(N=null,D!==void 0&&(s(D),N=""+D),p(S)&&(s(S.key),N=""+S.key),"key"in S){D={};for(var ee in S)ee!=="key"&&(D[ee]=S[ee])}else D=S;return N&&b(D,typeof a=="function"?a.displayName||a.name||"Unknown":a),f(a,N,D,r(),H,Z)}function x(a){m(a)?a._store&&(a._store.validated=1):typeof a=="object"&&a!==null&&a.$$typeof===F&&(a._payload.status==="fulfilled"?m(a._payload.value)&&a._payload.value._store&&(a._payload.value._store.validated=1):a._store&&(a._store.validated=1))}function m(a){return typeof a=="object"&&a!==null&&a.$$typeof===u}var h=y,u=Symbol.for("react.transitional.element"),l=Symbol.for("react.portal"),L=Symbol.for("react.fragment"),k=Symbol.for("react.strict_mode"),E=Symbol.for("react.profiler"),T=Symbol.for("react.consumer"),A=Symbol.for("react.context"),B=Symbol.for("react.forward_ref"),P=Symbol.for("react.suspense"),z=Symbol.for("react.suspense_list"),I=Symbol.for("react.memo"),F=Symbol.for("react.lazy"),Y=Symbol.for("react.activity"),_=Symbol.for("react.client.reference"),v=h.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,c=Object.prototype.hasOwnProperty,C=Array.isArray,M=console.createTask?console.createTask:function(){return null};h={react_stack_bottom_frame:function(a){return a()}};var W,R={},V=h.react_stack_bottom_frame.bind(h,d)(),w=M(i(d)),$={};J.Fragment=L,J.jsx=function(a,S,D){var O=1e4>v.recentlyCreatedOwnerStacks++;return g(a,S,D,!1,O?Error("react-stack-top-frame"):V,O?M(i(a)):w)},J.jsxs=function(a,S,D){var O=1e4>v.recentlyCreatedOwnerStacks++;return g(a,S,D,!0,O?Error("react-stack-top-frame"):V,O?M(i(a)):w)}})()),J}var xe;function Ze(){return xe||(xe=1,process.env.NODE_ENV==="production"?Q.exports=He():Q.exports=Ve()),Q.exports}var t=Ze();const ae=({x:e,y:n,items:s,onClose:i,...r})=>{const d=y.useRef(null),[p,b]=y.useState(null);y.useEffect(()=>{const h=u=>{d.current&&!d.current.contains(u.target)&&i()};return document.addEventListener("mousedown",h),()=>{document.removeEventListener("mousedown",h)}},[i]);const f=(()=>{if(!d.current)return{x:e,y:n};const h=d.current.offsetWidth,u=d.current.offsetHeight,l=window.innerWidth,L=window.innerHeight;let k=e,E=n;return k+h>l&&(k=e-h),E+u>L&&(E=n-u),{x:k,y:E}})(),g=(h,u)=>{h.submenu?b(p===u?null:u):h.action&&(h.action(),i())},x=h=>{s[h].submenu&&b(h)},m=h=>{const u=h.relatedTarget;d.current?.contains(u)||b(null)};return t.jsx(Ue,{ref:d,initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.8},transition:{duration:.15},style:{position:"absolute",top:f.y,left:f.x},onClick:h=>h.stopPropagation(),onMouseLeave:m,...r,children:s.map((h,u)=>t.jsxs(Xe,{$hasSubmenu:!!h.submenu,$disabled:h.disabled,children:[t.jsx(qe,{onClick:l=>{l.stopPropagation(),h.disabled||g(h,u)},onMouseEnter:()=>!h.disabled&&x(u),whileHover:h.disabled?{}:{backgroundColor:"#f3f4f6"},initial:{backgroundColor:"#ffffff"},$color:h.color,$disabled:h.disabled,children:t.jsxs(Ge,{children:[h.label,h.submenu&&t.jsx(Je,{children:t.jsx("svg",{width:"8",height:"12",viewBox:"0 0 8 12",fill:"none",children:t.jsx("path",{d:"M1.5 1.5L6 6L1.5 10.5",stroke:"currentColor",strokeWidth:"2"})})})]})}),h.submenu&&p===u&&t.jsx(Ke,{initial:{opacity:0,x:10},animate:{opacity:1,x:0},exit:{opacity:0,x:10},transition:{duration:.15},children:t.jsx(ae,{x:0,y:-u*40,items:h.submenu,onClose:()=>b(null)})})]},u))})},Ue=o(U.motion.div)`
  position: absolute;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
  padding: 4px 0;
  z-index: 1000;
  min-width: 180px;
  width: auto;
  overflow: visible;
`,Xe=o.div`
  position: relative;
  opacity: ${({$disabled:e})=>e?.5:1};
`,qe=o(U.motion.div)`
  padding: 8px 16px;
  font-size: 14px;
  cursor: ${({$disabled:e})=>e?"not-allowed":"pointer"};
  color: ${({$color:e,$disabled:n})=>n?"#999":e||"#333"};
  white-space: nowrap;
  position: relative;
`,Ge=o.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`,Je=o.span`
  color: #666;
  margin-left: 8px;
`,Ke=o(U.motion.div)`
  position: absolute;
  top: 0;
  left: 100%;
  z-index: 1001;
  margin-left: 2px;
`,Qe=({columns:e,data:n,onRowDoubleClick:s,contextMenuActions:i=[],onSort:r,sortConfig:d,onRowClick:p,selectedRow:b,fixedHeight:j,hasTotalsRow:f,debtChecker:g,rowStyles:x={},isLoading:m})=>{const[h,u]=y.useState(null),[l,L]=y.useState(null),k=y.useRef(null),E=y.useRef(null),T=500,A=b!==void 0?b:h,B=w=>{!e[w].isSortable||!r||r(w)},z=g||(w=>{const $=w[8];return typeof $=="string"?parseFloat($.replace(/[^\d.]/g,""))>0:!1}),I=w=>{b===void 0&&u(w===A?null:w),p&&p(n[w],w)},F=(w,$)=>{s&&s(w,$)},Y=(w,$)=>{if(i.length===0)return;w.preventDefault();const a="touches"in w?w.touches[0].clientX:w.clientX,S="touches"in w?w.touches[0].clientY:w.clientY;L({x:a,y:S,rowIndex:$})},_=(w,$)=>{w.preventDefault(),Y(w,$)},v=(w,$)=>{i.length!==0&&(E.current&&clearTimeout(E.current),E.current=window.setTimeout(()=>{Y(w,$)},T))},c=()=>{E.current&&(clearTimeout(E.current),E.current=null)},C=()=>{E.current&&window.clearTimeout(E.current)},M=()=>{L(null)};y.useEffect(()=>{const w=()=>{l&&M()};return document.addEventListener("click",w),()=>{document.removeEventListener("click",w),E.current&&clearTimeout(E.current)}},[l]);const W=(w,$,a)=>{if($)return{backgroundColor:"#FFFFFF",color:"#000000",fontWeight:"bold"};const S=x[w]||{};return w===A?{backgroundColor:S.backgroundColor||"#007D88",color:S.color||"#FFFFFF",fontWeight:S.fontWeight||"normal"}:a?{backgroundColor:S.backgroundColor||"#E8D8D8",color:S.color||"inherit",fontWeight:S.fontWeight||"normal"}:n[w][n[w].length-1]===!1?{backgroundColor:S.backgroundColor||"#E8F5E8",color:"#1B5E20",fontWeight:S.fontWeight||"normal"}:{backgroundColor:S.backgroundColor||"#FFFFFF",color:S.color||"inherit",fontWeight:S.fontWeight||"normal"}},R=(w,$,a)=>{if($)return"#FFFFFF";const S=W(w,$,a);return S.hoverBackgroundColor?S.hoverBackgroundColor:w===A?"#007D88":a?"#E8D8D8CC":n[w][n[w].length-1]===!1?"#51D5B4CC":"#F3F4F6"},V=()=>{if(!l||i.length===0)return null;const w=(typeof i=="function"?i(n[l.rowIndex]):i).filter($=>typeof $=="object"&&(typeof $.shouldShow!="function"||$.shouldShow(n[l.rowIndex])));return w.length===0?null:t.jsx(rt,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.95},transition:{duration:.15},style:{position:"fixed",left:l.x,top:l.y,zIndex:1e3},onClick:$=>$.stopPropagation(),children:t.jsx(ae,{items:w.map($=>{const a={label:$.label,color:$.color,disabled:$.disabled};return $.getSubmenu?a.submenu=$.getSubmenu(n[l.rowIndex]):$.action&&(a.action=()=>{$.action(n[l.rowIndex],l.rowIndex),M()}),a}),onClose:M,x:0,y:0})})};return t.jsx(ot,{ref:k,children:m?t.jsx(et,{children:t.jsx(tt,{})}):t.jsxs(t.Fragment,{children:[t.jsxs(nt,{children:[t.jsx(it,{children:t.jsx(fe,{children:e.map((w,$)=>!w.isHidden&&t.jsx(at,{$isSortable:w.isSortable,$isActive:d?.key===$,onClick:()=>B($),$align:w.align||"center",$isFirst:$===0,$isLast:$===e.length-1,children:t.jsxs(lt,{$align:w.align||"center",children:[w.name,w.isSortable&&t.jsx(ct,{$direction:d?.key===$?d.direction:"asc",animate:{rotate:d?.key===$&&d.direction==="desc"?180:0,color:d?.key===$?"#007D88":"#6B7280"},transition:{duration:.2},children:t.jsx("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M5.77734 2.92383L5.25 3.45117L3.26953 1.47656L3.26367 12H2.51367L2.51953 1.45898L0.527344 3.45117L0 2.92383L2.88867 0.0351562L5.77734 2.92383ZM10.5059 8.54883L11.0391 9.07617L8.15039 11.9648L5.25586 9.07617L5.78906 8.54883L7.76953 10.5293L7.76367 0H8.51367L8.51953 10.5352L10.5059 8.54883Z",fill:"currentColor"})})})]})},$))})}),t.jsx(st,{$fixedHeight:j,children:t.jsx(U.AnimatePresence,{children:n.map((w,$)=>{const a=!!(f&&$===n.length-1),S=!!(!a&&z(w)),D=W($,a,S),O=R($,a,S);return t.jsx(fe,{initial:{opacity:0,y:-10},animate:{opacity:1,y:0,backgroundColor:D.backgroundColor||"#FFFFFF",color:D.color||"inherit",fontWeight:D.fontWeight||"normal"},exit:{opacity:0,y:10},transition:{duration:.2,ease:"easeOut"},$isLast:$===n.length-1,$isSelected:$===A,$isTotalsRow:a,onClick:()=>!a&&I($),onDoubleClick:()=>!a&&F(w,$),onContextMenu:H=>!a&&_(H,$),onTouchStart:H=>!a&&v(H,$),onTouchEnd:c,onTouchMove:C,whileHover:a?{}:{backgroundColor:O,transition:{duration:.15}},style:{backgroundColor:D.backgroundColor||"#FFFFFF",color:D.color||"inherit",fontWeight:D.fontWeight||"normal"},children:w.map((H,Z)=>!e[Z]?.isHidden&&t.jsx(dt,{$align:e[Z]?.align||"center",$isFirst:Z===0,$isLast:Z===w.length-1,$isTotalsCell:a,$isBeforeTotals:a&&Z<w.findIndex(N=>N==="Итого:"),children:H},Z))},`row-${$}`)})})})]}),t.jsx(U.AnimatePresence,{children:V()})]})})},et=o.div`
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
`,tt=o.div`
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
`,ot=o.div`
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  overflow: auto;
  position: relative;
  background-color: #ffffff;
  color: #000000;
  height: 100%;
`,nt=o.table`
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
`,rt=o(U.motion.div)`
  z-index: 1000;
  pointer-events: auto;
`,it=o.thead`
  text-align: center;
  position: relative;
`,st=o.tbody`
  ${({$fixedHeight:e})=>e&&`
    display: block;
    overflow-y: auto;
  `}
  position: relative;
`,fe=o(U.motion.tr)`
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
    display: ${({$isLast:e,$isTotalsRow:n})=>e||n?"none":"block"};
  }
`,at=o.th`
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
`,lt=o.div`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  justify-content: ${({$align:e})=>e==="right"?"flex-end":e==="center"?"center":"flex-start"};
  width: 100%;
`,ct=o(U.motion.span)`
  display: inline-flex;
  align-items: center;
`,dt=o.td`
  padding: 16px;
  padding-left: ${({$isFirst:e})=>e?"50px":"16px"};
  padding-right: ${({$isLast:e})=>e?"50px":"16px"};
  text-align: ${({$align:e})=>e};
  vertical-align: middle;
  border-right: ${({$isBeforeTotals:e,$isTotalsCell:n})=>e||n?"none":"0.5px solid #d1d5db"};
`,pt=({onClick:e,tooltip:n,size:s=32,margin:i})=>t.jsx(ut,{onClick:e,size:s,margin:i,title:n,children:t.jsx(ht,{size:s})}),ut=o.button`
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
`,ht=o.div`
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
`,xt=o.button`
  color: black;
  display: flex;
  align-items: center;
  gap: 8px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  font-family: inherit;
  font-size: inherit;
  margin: 25px;

  &:hover {
    opacity: 0.8;
  }
`,ft=({children:e,onClick:n})=>t.jsxs(xt,{onClick:n,children:[t.jsx("svg",{width:"21",height:"13",viewBox:"0 0 21 13",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M6.17798 0.978109L0.65625 6.4998L6.17798 12.0215L7.10604 11.0934L3.16862 7.156L20.3124 7.156V5.84351L3.16874 5.84351L7.10604 1.90621L6.17798 0.978109Z",fill:"#50555C"})}),e]}),De=({children:e="Подтвердить",icon:n,disabled:s=!1,bg:i="rgba(0, 125, 136, 1)",hoverBg:r="rgba(0, 150, 163, 1)",disabledBg:d="rgba(102, 177, 184, 1)",textColor:p="white",fullWidth:b=!1,minWidth:j,...f})=>t.jsxs(gt,{disabled:s,$bg:i,$hoverBg:r,$disabledBg:d,$textColor:p,$fullWidth:b,$minWidth:j,...f,children:[n&&t.jsx(bt,{children:n}),t.jsx("span",{children:e})]}),gt=o.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 8px 12px;
  background-color: ${({disabled:e,$bg:n,$disabledBg:s})=>e?s:n};
  border: none;
  border-radius: 10px;
  cursor: ${({disabled:e})=>e?"not-allowed":"pointer"};
  color: ${({$textColor:e})=>e};
  font-size: 15px;
  font-weight: 400;
  height: auto;
  white-space: nowrap;
  transition: background-color 0.2s ease;
  margin: 0;
  opacity: ${({disabled:e})=>e?.7:1};
  width: ${({$fullWidth:e})=>e?"100%":"auto"};
  min-width: ${({$minWidth:e})=>e||"auto"};

  &:hover {
    background-color: ${({disabled:e,$hoverBg:n,$disabledBg:s})=>e?s:n};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(156, 163, 175, 0.5);
  }
`,bt=o.span`
  display: inline-flex;
  align-items: center;
`,mt=({onClick:e,tooltip:n,size:s=32})=>t.jsx(wt,{onClick:e,size:s,title:n,children:t.jsx("svg",{width:s*.5,height:s*.5,viewBox:"0 0 17 17",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M3.1875 14.875C3.1875 15.5625 3.75 16.125 4.4375 16.125H12.5625C13.25 16.125 13.8125 15.5625 13.8125 14.875V4.25H3.1875V14.875ZM15.125 1.5H11.7188L10.7812 0.5625H6.21875L5.28125 1.5H1.875V3.375H15.125V1.5Z",fill:"#50555C"})})}),wt=o.button`
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
`,vt=({onClick:e,tooltip:n,size:s=32})=>t.jsx(yt,{onClick:e,size:s,title:n,children:t.jsx("svg",{width:s*.5,height:s*.5,viewBox:"0 0 17 17",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M0.625 13.0931V16.3744H3.90625L13.5837 6.69687L10.3025 3.41562L0.625 13.0931ZM16.7337 3.54687L13.4525 0.265625L11.2387 2.48812L14.52 5.76937L16.7337 3.54687Z",fill:"#50555C"})})}),yt=o.button`
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
`,kt=()=>t.jsxs("svg",{width:"17",height:"18",viewBox:"0 0 17 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("path",{d:"M8.50006 1.62496L8.10181 1.22671L8.50006 0.82959L8.89831 1.22671L8.50006 1.62496ZM9.06256 11.75C9.06256 11.8991 9.00329 12.0422 8.8978 12.1477C8.79232 12.2532 8.64924 12.3125 8.50006 12.3125C8.35087 12.3125 8.2078 12.2532 8.10231 12.1477C7.99682 12.0422 7.93756 11.8991 7.93756 11.75H9.06256ZM2.47681 6.85171L8.10181 1.22671L8.89831 2.02321L3.27331 7.64821L2.47681 6.85171ZM8.89831 1.22671L14.5233 6.85171L13.7268 7.64821L8.10181 2.02321L8.89831 1.22671ZM9.06256 1.62496V11.75H7.93756V1.62496H9.06256Z",fill:"black"}),t.jsx("path",{d:"M0.625 14V15.125C0.625 15.7217 0.862053 16.294 1.28401 16.716C1.70597 17.1379 2.27826 17.375 2.875 17.375H14.125C14.7217 17.375 15.294 17.1379 15.716 16.716C16.1379 16.294 16.375 15.7217 16.375 15.125V14",stroke:"black"})]}),jt=({children:e="Экспорт",icon:n=t.jsx(kt,{}),onExport:s,isExporting:i=!1,exportProgress:r=0,...d})=>{const p=async b=>{if(s)try{await s()}catch(j){console.error("Export error:",j)}d.onClick&&d.onClick(b)};return t.jsx(Ct,{...d,onClick:p,disabled:i||d.disabled,children:i?t.jsxs($t,{children:[t.jsxs("span",{children:["Экспорт... ",r,"%"]}),t.jsx(St,{progress:r})]}):t.jsxs(t.Fragment,{children:[n,t.jsx("span",{children:e})]})})},Ct=o.button`
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
`,$t=o.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  width: 100%;
`,St=o.div`
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
`,Mt=({placeholder:e="",customPlaceholder:n,value:s,onChange:i,hasError:r=!1,errorMessage:d,options:p,name:b,disabled:j=!1,required:f=!1,...g})=>{const[x,m]=y.useState(!1),[h,u]=y.useState(!1),l=y.useRef(null),L=!!(n&&!s&&!x),k=P=>{i&&!j&&i({target:{value:P,name:b}}),u(!1),m(!1)},E=P=>{l.current&&!l.current.contains(P.target)&&(u(!1),m(!1))},T=()=>{j||(u(!h),m(!h))};y.useEffect(()=>(document.addEventListener("mousedown",E),()=>{document.removeEventListener("mousedown",E)}),[]);const A=p.find(P=>P.value===s),B=A?A.label:"";return t.jsxs(Tt,{ref:l,...g,children:[t.jsxs(Dt,{children:[t.jsxs(Lt,{hasError:r,isOpen:h,disabled:j,onClick:T,onFocus:()=>!j&&m(!0),onBlur:()=>m(!1),tabIndex:j?-1:0,children:[t.jsx(Et,{children:B||e&&t.jsx(Pt,{children:e})}),t.jsx(Rt,{isOpen:h,disabled:j,children:t.jsx("svg",{width:"17",height:"9",viewBox:"0 0 17 9",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M1.5 1L8.5 8L15.5 1",stroke:j?"#CCCCCC":"#50555C",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})})]}),h&&t.jsx(It,{children:p.map(P=>t.jsxs(At,{$isSelected:P.value===s,onClick:()=>k(P.value),children:[t.jsx(Bt,{$isSelected:P.value===s,children:P.value===s&&t.jsx(zt,{})}),t.jsx(Ft,{children:P.label})]},P.value))})]}),n&&t.jsx(_t,{isVisible:L,children:n}),r&&d&&t.jsx(Ot,{children:d}),t.jsx(Yt,{name:b,value:s||"",onChange:()=>{},tabIndex:-1,required:f,children:p.map(P=>t.jsx("option",{value:P.value,children:P.label},P.value))})]})},Tt=o.div`
  position: relative;
  display: inline-block;
  width: 100%;
  margin-right: auto;
`,Dt=o.div`
  position: relative;
  width: auto;
  max-width: 500px;
`,Lt=o.div`
  border: 1px solid
    ${({hasError:e,isOpen:n,disabled:s})=>s?"rgba(209, 213, 219, 0.5)":e?"rgba(239, 68, 68, 1)":n?"rgba(0, 125, 136, 1)":"rgba(209, 213, 219, 1)"};
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
    border-color: ${({hasError:e,disabled:n,isOpen:s})=>n?"rgba(209, 213, 219, 0.5)":e?"rgba(239, 68, 68, 1)":"rgba(0, 125, 136, 1)"};
  }
`,Et=o.span`
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,Pt=o.span`
  color: rgba(80, 85, 92, 1);
`,Rt=o.div`
  transform: ${({isOpen:e})=>e?"rotate(180deg)":"rotate(0)"};
  transition: transform 0.2s ease;
  margin-left: 10px;
  flex-shrink: 0;
`,It=o.div`
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
`,At=o.div`
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
`,Bt=o.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 1px solid ${({$isSelected:e})=>e?"#007D88":"#ADB3BC"};
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`,zt=o.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #007d88;
`,Ft=o.span`
  font-family: 'Manrope', sans-serif;
  font-style: normal;
  font-weight: 400;
  text-align: left;
  font-size: 14px;
  line-height: 19px;
  color: #000000;
`,_t=o.label`
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
`,Ot=o.span`
  color: rgba(239, 68, 68, 1);
  font-size: 12px;
  margin-top: 4px;
  display: block;
`,Yt=o.select`
  position: absolute;
  opacity: 0;
  height: 0;
  width: 0;
  pointer-events: none;
`,Wt=({checked:e=!1,onChange:n,className:s,label:i,disabled:r=!1})=>{const[d,p]=y.useState(!1),b=()=>{r||!n||n(!e)},j=f=>{r||(f.key==="Enter"||f.key===" ")&&(f.preventDefault(),b())};return t.jsxs(Nt,{className:s,onClick:b,onKeyPress:j,tabIndex:r?-1:0,disabled:r,children:[t.jsx(Ht,{checked:e,isFocused:d,disabled:r,onMouseEnter:()=>!r&&p(!0),onMouseLeave:()=>!r&&p(!1),onFocus:()=>!r&&p(!0),onBlur:()=>!r&&p(!1),children:e&&t.jsx(Zt,{viewBox:"0 0 8 8",fill:"none",xmlns:"http://www.w3.org/2000/svg",disabled:r,children:t.jsx("path",{d:"M7.375 1.1875L2.65 6.8125L0.625 4.5625",stroke:r?"rgba(173, 179, 188, 1)":"white",strokeLinecap:"round",strokeLinejoin:"round"})})}),i&&t.jsx(Vt,{disabled:r,children:i})]})},Nt=o.div`
  display: flex;
  align-items: center;
  cursor: ${e=>e.disabled?"not-allowed":"pointer"};
  gap: 8px;

  &:focus {
    outline: none;
  }
`,Ht=o.div`
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
`,Vt=o.span`
  font-size: 16px;
  color: ${e=>e.disabled?"rgba(173, 179, 188, 1)":"#333"};
  user-select: none;
  white-space: nowrap;
`,Zt=o.svg`
  width: 8px;
  height: 8px;
  opacity: ${e=>e.disabled?.6:1};
`,Ut="data:image/svg+xml,%3csvg%20width='18'%20height='18'%20viewBox='0%200%2018%2018'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M14.625%202.8125H3.375C2.44302%202.8125%201.6875%203.56802%201.6875%204.5V14.625C1.6875%2015.557%202.44302%2016.3125%203.375%2016.3125H14.625C15.557%2016.3125%2016.3125%2015.557%2016.3125%2014.625V4.5C16.3125%203.56802%2015.557%202.8125%2014.625%202.8125Z'%20stroke='%2350555C'%20stroke-linejoin='round'/%3e%3cpath%20d='M10.4062%209C10.8722%209%2011.25%208.62224%2011.25%208.15625C11.25%207.69026%2010.8722%207.3125%2010.4062%207.3125C9.94026%207.3125%209.5625%207.69026%209.5625%208.15625C9.5625%208.62224%209.94026%209%2010.4062%209Z'%20fill='%2350555C'/%3e%3cpath%20d='M13.2188%209C13.6847%209%2014.0625%208.62224%2014.0625%208.15625C14.0625%207.69026%2013.6847%207.3125%2013.2188%207.3125C12.7528%207.3125%2012.375%207.69026%2012.375%208.15625C12.375%208.62224%2012.7528%209%2013.2188%209Z'%20fill='%2350555C'/%3e%3cpath%20d='M10.4062%2011.8125C10.8722%2011.8125%2011.25%2011.4347%2011.25%2010.9688C11.25%2010.5028%2010.8722%2010.125%2010.4062%2010.125C9.94026%2010.125%209.5625%2010.5028%209.5625%2010.9688C9.5625%2011.4347%209.94026%2011.8125%2010.4062%2011.8125Z'%20fill='%2350555C'/%3e%3cpath%20d='M13.2188%2011.8125C13.6847%2011.8125%2014.0625%2011.4347%2014.0625%2010.9688C14.0625%2010.5028%2013.6847%2010.125%2013.2188%2010.125C12.7528%2010.125%2012.375%2010.5028%2012.375%2010.9688C12.375%2011.4347%2012.7528%2011.8125%2013.2188%2011.8125Z'%20fill='%2350555C'/%3e%3cpath%20d='M4.78125%2011.8125C5.24724%2011.8125%205.625%2011.4347%205.625%2010.9688C5.625%2010.5028%205.24724%2010.125%204.78125%2010.125C4.31526%2010.125%203.9375%2010.5028%203.9375%2010.9688C3.9375%2011.4347%204.31526%2011.8125%204.78125%2011.8125Z'%20fill='%2350555C'/%3e%3cpath%20d='M7.59375%2011.8125C8.05974%2011.8125%208.4375%2011.4347%208.4375%2010.9688C8.4375%2010.5028%208.05974%2010.125%207.59375%2010.125C7.12776%2010.125%206.75%2010.5028%206.75%2010.9688C6.75%2011.4347%207.12776%2011.8125%207.59375%2011.8125Z'%20fill='%2350555C'/%3e%3cpath%20d='M4.78125%2014.625C5.24724%2014.625%205.625%2014.2472%205.625%2013.7812C5.625%2013.3153%205.24724%2012.9375%204.78125%2012.9375C4.31526%2012.9375%203.9375%2013.3153%203.9375%2013.7812C3.9375%2014.2472%204.31526%2014.625%204.78125%2014.625Z'%20fill='%2350555C'/%3e%3cpath%20d='M7.59375%2014.625C8.05974%2014.625%208.4375%2014.2472%208.4375%2013.7812C8.4375%2013.3153%208.05974%2012.9375%207.59375%2012.9375C7.12776%2012.9375%206.75%2013.3153%206.75%2013.7812C6.75%2014.2472%207.12776%2014.625%207.59375%2014.625Z'%20fill='%2350555C'/%3e%3cpath%20d='M10.4062%2014.625C10.8722%2014.625%2011.25%2014.2472%2011.25%2013.7812C11.25%2013.3153%2010.8722%2012.9375%2010.4062%2012.9375C9.94026%2012.9375%209.5625%2013.3153%209.5625%2013.7812C9.5625%2014.2472%209.94026%2014.625%2010.4062%2014.625Z'%20fill='%2350555C'/%3e%3cpath%20d='M4.5%201.6875V2.8125M13.5%201.6875V2.8125'%20stroke='%2350555C'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M16.3125%205.625H1.6875'%20stroke='%2350555C'%20stroke-linejoin='round'/%3e%3c/svg%3e",ge=["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"],Xt=["Пн","Вт","Ср","Чт","Пт","Сб","Вс"],ie=({prefix:e="Дата:",value:n="",placeholder:s="Выберите дату",onChange:i,onReset:r})=>{const[d,p]=y.useState(!1),[b,j]=y.useState(new Date),[f,g]=y.useState(n?new Date(n):null),[x,m]=y.useState(!1),[h,u]=y.useState(!1),l=y.useRef(null),L=y.useRef(null),k=y.useRef(null);y.useEffect(()=>{const c=C=>{l.current&&!l.current.contains(C.target)&&p(!1),L.current&&!L.current.contains(C.target)&&m(!1),k.current&&!k.current.contains(C.target)&&u(!1)};return document.addEventListener("mousedown",c),()=>{document.removeEventListener("mousedown",c)}},[]),y.useEffect(()=>{g(n?new Date(n):null)},[n]);const E=c=>{const C=new Date(Date.UTC(c.getFullYear(),c.getMonth(),c.getDate()));g(c);const M=C.toISOString().split("T")[0];i?.(M),p(!1)},T=()=>{const c=new Date;j(c);const M=new Date(Date.UTC(c.getFullYear(),c.getMonth(),c.getDate())).toISOString().split("T")[0];i?.(M),p(!1)},A=()=>{g(null),i?.(""),r?.(),p(!1)},B=c=>{const C=new Date(b);C.setMonth(c),j(C),m(!1)},P=c=>{const C=new Date(b);C.setFullYear(c),j(C),u(!1)},z=()=>{const c=b.getFullYear(),C=b.getMonth(),M=new Date(c,C,1),R=new Date(c,C+1,0).getDate(),V=M.getDay()===0?6:M.getDay()-1,w=[],$=35,a=new Date(c,C,0).getDate();for(let D=0;D<V;D++){const O=a-V+D+1,H=new Date(c,C-1,O),Z=!!(f&&H.getDate()===f.getDate()&&H.getMonth()===f.getMonth()&&H.getFullYear()===f.getFullYear());w.push(t.jsx(te,{selected:Z,onClick:()=>E(H),otherMonth:!0,children:O},`prev-${O}`))}for(let D=1;D<=R;D++){const O=new Date(c,C,D),H=!!(f&&O.getDate()===f.getDate()&&O.getMonth()===f.getMonth()&&O.getFullYear()===f.getFullYear());w.push(t.jsx(te,{selected:H,onClick:()=>E(O),children:D},`current-${D}`))}const S=$-w.length;for(let D=1;D<=S;D++){const O=new Date(c,C+1,D),H=!!(f&&O.getDate()===f.getDate()&&O.getMonth()===f.getMonth()&&O.getFullYear()===f.getFullYear());w.push(t.jsx(te,{selected:H,onClick:()=>E(O),otherMonth:!0,children:D},`next-${D}`))}return w},I=()=>f?f.toLocaleDateString("ru-RU",{day:"2-digit",month:"2-digit",year:"numeric"}):s,F=()=>{const c=new Date().getFullYear(),C=[];for(let M=c-10;M<=c+10;M++)C.push(M);return C},Y=c=>{c.preventDefault(),c.stopPropagation(),m(!x),u(!1)},_=c=>{c.preventDefault(),c.stopPropagation(),u(!h),m(!1)},v=c=>{const C=c==="next"?1:-1,M=new Date(b);M.setMonth(M.getMonth()+C),j(M)};return t.jsxs(qt,{ref:l,children:[t.jsxs(Gt,{onClick:()=>p(!d),children:[e&&t.jsx(Jt,{children:e}),t.jsx(Kt,{isEmpty:!f,children:I()}),t.jsx(Qt,{src:Ut,alt:"Календарь"})]}),d&&t.jsxs(eo,{className:"calendar-container",children:[t.jsxs(to,{children:[t.jsx(ve,{onClick:c=>{c.preventDefault(),c.stopPropagation(),v("prev")},onMouseDown:c=>c.preventDefault(),children:t.jsx(ye,{direction:"right"})}),t.jsxs(oo,{children:[t.jsxs(io,{ref:L,children:[t.jsxs(no,{onClick:c=>Y(c),onMouseDown:c=>c.preventDefault(),children:[ge[b.getMonth()],t.jsx(be,{$open:x})]}),x&&t.jsx(me,{$width:120,onClick:c=>c.stopPropagation(),children:ge.map((c,C)=>t.jsx(we,{$selected:C===b.getMonth(),onClick:M=>{M.stopPropagation(),B(C)},children:c},c))})]}),t.jsxs(so,{ref:k,children:[t.jsxs(ro,{onClick:c=>_(c),onMouseDown:c=>c.preventDefault(),children:[b.getFullYear(),t.jsx(be,{$open:h})]}),h&&t.jsx(me,{$width:80,onClick:c=>c.stopPropagation(),children:F().map(c=>t.jsx(we,{$selected:c===b.getFullYear(),onClick:C=>{C.stopPropagation(),P(c)},children:c},c))})]})]}),t.jsx(ve,{onClick:c=>{c.preventDefault(),c.stopPropagation(),v("next")},onMouseDown:c=>c.preventDefault(),children:t.jsx(ye,{direction:"left"})})]}),t.jsx(ao,{children:Xt.map(c=>t.jsx(lo,{children:c},c))}),t.jsx(co,{children:z()}),t.jsxs(po,{children:[t.jsx(ke,{onClick:A,children:"Удалить"}),t.jsx(ke,{onClick:T,children:"Сегодня"})]})]})]})},qt=o.div`
  position: relative;
  display: inline-block;
  width: 100%;
  text-align: left;
  color: black;
`,Gt=o.div`
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
`,Jt=o.span`
  color: rgba(80, 85, 92, 1);
  margin-right: 8px;
`,Kt=o.span`
  flex-grow: 1;
  color: ${({isEmpty:e})=>e?"rgba(80, 85, 92, 1)":"#000"};
`,Qt=o.img`
  width: 20px;
  height: 20px;
  margin-left: 8px;
`,eo=o.div`
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
`,to=o.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  color: black;
`,oo=o.div`
  display: flex;
  gap: 8px;
  color: black;
`,Le=o.button`
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
`,no=o(Le)`
  min-width: 120px;

  &: hover {
    border-color: rgba(209, 213, 219, 1);
  }
`,ro=o(Le)`
  min-width: 80px;

  &: hover {
    border-color: rgba(209, 213, 219, 1);
  }
`,io=o.div`
  position: relative;
`,so=o.div`
  position: relative;
`,be=o.div`
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid rgba(80, 85, 92, 1);
  margin-left: 8px;
  transform: ${({$open:e})=>e?"rotate(180deg)":"none"};
  transition: transform 0.2s ease;
`,me=o.div`
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
`,we=o.div`
  padding: 8px 12px;
  font-size: 14px;
  cursor: pointer;
  background-color: ${({$selected:e})=>e?"rgba(232, 216, 216, 1)":"white"};
  color: ${({$selected:e})=>e?"#000":"inherit"};

  &:hover {
    background-color: rgba(232, 216, 216, ${({$selected:e})=>e?"1":"0.5"});
  }
`,ve=o.button`
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
`,ye=o.div`
  width: 0;
  height: 0;
  border-top: 5px solid transparent;
  border-bottom: 5px solid transparent;
  border-${({direction:e})=>e}: 5px solid rgba(80, 85, 92, 1);
`,ao=o.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  text-align: center;
  margin-bottom: 8px;
`,lo=o.div`
  font-size: 12px;
  color: rgba(80, 85, 92, 1);
`,co=o.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 4px;
`,te=o.div`
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
`,po=o.div`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
`,ke=o.button`
  background: none;
  border: none;
  color: rgba(0, 125, 136, 1);
  cursor: pointer;
  font-size: 14px;
  padding: 4px 8px;

  &:hover {
    text-decoration: underline;
  }
`,Ee=({placeholder:e="",customPlaceholder:n,value:s,inputType:i="text",onChange:r,hasError:d=!1,errorMessage:p,...b})=>{const[j,f]=y.useState(!1),g=!!(n&&!s&&!j),x=u=>{if(!r)return;let l=u.target.value;switch(i){case"number":/^\d*$/.test(l)&&r?.(u);break;case"rubles":{const k=u.target.selectionStart,E=u.target.value;let T=E.replace(/[^\d]/g,"");if(T===""){u.target.value="",r(u);break}const A=parseInt(T,10);if(!isNaN(A)){let B=A.toLocaleString("ru-RU");B+=" ₽";const P=m(E,k||0),z=h(B,P);u.target.value=B,r(u),setTimeout(()=>{u.target.setSelectionRange(z,z)},0)}break}case"percents":{l=l.replace(/[^\d.]/g,"");const k=l.split(".");k.length>2&&(l=k[0]+"."+k.slice(1).join("")),k.length===2&&k[1].length>2&&(l=k[0]+"."+k[1].slice(0,2));const E=parseFloat(l);if(isNaN(E)||(E>100?l="100":E<0&&(l="0")),l&&l!==""){l+=" %";const T=u.target.selectionStart||0,A=l.replace(" %","");u.target.value=l,r(u),setTimeout(()=>{T<A.length&&u.target.setSelectionRange(T,T)},0)}else u.target.value=l,r(u);break}case"fullname":l=l.replace(/[^a-zA-Zа-яА-ЯёЁ'\-\s]/g,""),l=l.replace(/\s{2,}/g," "),l=l.replace(/- /g,"-"),l=l.replace(/ -/g," ");let L=l.split(" ").filter(k=>k.length>0);L=L.slice(0,3),l=L.map(k=>{if(k.startsWith("-")&&(k=k.substring(1)),(k.match(/-/g)||[]).length>1){const T=k.split("-");k=T[0]+"-"+T.slice(1).join("")}return k.includes("-")?k.split("-").map((T,A)=>T.length===0?"":(A>0,T[0].toUpperCase()+T.slice(1).toLowerCase())).join("-"):k.length>0?k[0].toUpperCase()+k.slice(1).toLowerCase():""}).join(" "),l.length>0&&l[l.length-1]!==" "&&u.target.value.length>0&&u.target.value[u.target.value.length-1]===" "&&(l+=" "),l.length>100&&(l=l.slice(0,100)),u.target.value=l,r(u);break;case"doc":l=l.replace(/\D/g,""),l.length>4&&(l=`${l.slice(0,4)} ${l.slice(4,10)}`),l.length>11&&(l=l.slice(0,11)),u.target.value=l,r(u);break;case"date":{l=l.replace(/\D/g,""),l.length>4?l=`${l.slice(0,2)}.${l.slice(2,4)}.${l.slice(4,8)}`:l.length>2&&(l=`${l.slice(0,2)}.${l.slice(2,4)}`),l.length>10&&(l=l.slice(0,10)),s?.length>l.length&&[3,6].includes(l.length)&&(l=l.slice(0,l.length-1)),u.target.value=l,r(u);break}default:r(u);break}},m=(u,l)=>{let L=0;for(let k=0;k<Math.min(l,u.length);k++)/\d/.test(u[k])&&L++;return L},h=(u,l)=>{let L=0;for(let k=0;k<u.length;k++){if(L>=l)return k;/\d/.test(u[k])&&L++}return u.length};return t.jsxs(uo,{children:[t.jsx(ho,{...b,value:s,placeholder:g?"":e,onFocus:()=>f(!0),onBlur:u=>{f(!1),b.onBlur?.(u)},onChange:x,inputMode:i==="number"||i==="doc"||i==="date"||i==="rubles"||i==="percents"?"numeric":"text",maxLength:i==="doc"?11:i==="date"?10:void 0,hasError:d}),n&&t.jsx(xo,{isVisible:g,children:n}),d&&p&&t.jsx(fo,{children:p})]})},uo=o.div`
  position: relative;
  display: inline-block;
  width: 100%;
  margin-right: auto;
`,ho=o.input`
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
  max-width: 500px;
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
`,xo=o.label`
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
`,fo=o.span`
  color: rgba(239, 68, 68, 1);
  font-size: 12px;
  margin-top: 4px;
  display: block;
`,go=({total:e,current:n=1,onChange:s,itemsPerPage:i=10})=>{const r=Math.ceil(e/i),[d,p]=y.useState(n),b=f=>{f<1||f>r||f===d||(p(f),s?.(f))},j=()=>{const f=[];let x=1,m=r;if(r>5){const h=Math.floor(2.5);x=Math.max(d-h,1),m=Math.min(d+h,r),d<=h+1?m=5:d>=r-h&&(x=r-5+1)}for(let h=x;h<=m;h++)f.push(t.jsx(K,{active:h===d,onClick:()=>b(h),children:h},h));return x>1&&(x>2&&f.unshift(t.jsx(K,{children:"..."},"start-ellipsis")),f.unshift(t.jsx(K,{active:d===1,onClick:()=>b(1),children:"1"},1))),m<r&&(m<r-1&&f.push(t.jsx(K,{children:"..."},"end-ellipsis")),f.push(t.jsx(K,{active:r===d,onClick:()=>b(r),children:r},r))),f};return t.jsxs(bo,{children:[t.jsx(je,{disabled:d===1,onClick:()=>b(d-1),children:t.jsx("svg",{width:"7",height:"11",viewBox:"0 0 7 11",fill:"none",children:t.jsx("path",{d:"M6 0.5L1 5.5L6 10.5",stroke:d===1?"#ccc":"black",strokeLinecap:"round",strokeLinejoin:"round"})})}),j(),t.jsx(je,{disabled:d===r,onClick:()=>b(d+1),style:{transform:"rotate(180deg)"},children:t.jsx("svg",{width:"7",height:"11",viewBox:"0 0 7 11",fill:"none",children:t.jsx("path",{d:"M6 0.5L1 5.5L6 10.5",stroke:d===r?"#ccc":"black",strokeLinecap:"round",strokeLinejoin:"round"})})})]})},bo=o.div`
  display: flex;
  justify-content: right;
  align-items: center;
  gap: 8px;
  margin-top: 20px;
  margin-left: auto;
`,K=o.div`
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
`,je=o.button`
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
`,mo=({placeholder:e="",customPlaceholder:n,value:s,onChange:i,hasError:r=!1,errorMessage:d,rows:p=3,...b})=>{const[j,f]=y.useState(!1),g=!!(n&&!s&&!j);return t.jsxs(wo,{children:[t.jsx(vo,{...b,value:s,placeholder:g?"":e,onFocus:()=>f(!0),onBlur:x=>{f(!1),b.onBlur?.(x)},onChange:i,hasError:r,rows:p}),n&&t.jsx(yo,{isVisible:g,children:n}),r&&d&&t.jsx(ko,{children:d})]})},wo=o.div`
  position: relative;
  display: inline-block;
  width: 100%;
  margin-right: auto;
`,vo=o.textarea`
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
`,yo=o.label`
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
`,ko=o.span`
  color: rgba(239, 68, 68, 1);
  font-size: 12px;
  margin-top: 4px;
  display: block;
`,Pe=({title:e,onClose:n,onCancel:s,onSave:i,children:r,isSaveDisabled:d=!1,isSubmitting:p=!1,mode:b="create",hideSaveButton:j=!1,hideCanselButton:f=!1,width:g="560px",saveButtonText:x="Сохранить",customLayout:m})=>{const h=b==="view",u=y.useRef(null);y.useEffect(()=>{const k=T=>{T.key==="Escape"&&n()};document.addEventListener("keydown",k);const E=document.body.style.overflow;return document.body.style.overflow="hidden",setTimeout(()=>u.current?.focus(),0),()=>{document.removeEventListener("keydown",k),document.body.style.overflow=E}},[n]);const l=k=>{k.target===k.currentTarget&&n()},L=k=>{k.preventDefault(),s()};return t.jsx(jo,{onMouseDown:l,role:"presentation",children:t.jsxs(Co,{ref:u,$width:g,role:"dialog","aria-modal":"true","aria-label":e||"Диалог",tabIndex:-1,children:[t.jsxs(Re,{children:[t.jsx(Ie,{children:e}),t.jsx($o,{type:"button",onClick:n,"aria-label":"Закрыть",children:t.jsx("span",{"aria-hidden":!0,children:"×"})})]}),m?t.jsx(So,{children:m}):null,t.jsxs(Mo,{onSubmit:i,children:[t.jsx(To,{children:r}),t.jsxs(Do,{children:[f?null:t.jsx(Lo,{type:"button",onClick:L,children:"Отменить"}),!h&&!j?t.jsx(Eo,{type:"submit",disabled:d||p,children:p?"Сохранение...":x}):null]})]})]})})},jo=o.div`
  position: fixed;
  inset: 0;
  background: rgba(15, 23, 42, 0.55);
  display: grid;
  place-items: center;
  padding: 16px;
  z-index: 1000;
`,Co=o.div`
  width: min(100%, ${({$width:e})=>e});
  max-height: min(85vh, 720px);
  height: fit-content;

  background: #ffffff;
  border: 1px solid rgba(15, 23, 42, 0.12);
  border-radius: 16px;

  box-shadow: 0 18px 50px rgba(0, 0, 0, 0.28);
  overflow: hidden;

  display: flex;
  flex-direction: column;
  outline: none;
`,Re=o.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;

  padding: 14px 18px 10px 18px;
  border-bottom: 1px solid rgba(15, 23, 42, 0.08);
`,Ie=o.h2`
  margin: 0;
  padding: 0;

  flex: 1;
  min-width: 0;
  display: block;

  font-size: 24px;
  line-height: 1.25;
  font-weight: 700;
  color: #0f172a;

  /* чтобы длинные заголовки не ломали верстку */
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,$o=o.button`
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
`,So=o.div`
  padding: 12px 18px 0 18px;
`,Mo=o.form`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 0; /* важно для корректного скролла тела */
`,To=o.div`
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
`,Do=o.div`
  padding: 12px 18px 18px 18px;
  border-top: 1px solid rgba(15, 23, 42, 0.08);

  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;
  flex-wrap: wrap;
`,Lo=o.button`
  min-width: 140px;
  padding: 10px 16px;

  border: 1px solid rgba(15, 23, 42, 0.14);
  border-radius: 10px;

  background: #f3f4f6;
  color: #0f172a;

  cursor: pointer;
  font-size: 16px;

  &:hover {
    background: #e5e7eb;
  }

  &:active {
    transform: translateY(1px);
  }
`,Eo=o(De)`
  min-width: 140px;
  padding: 10px 16px;
  border-radius: 10px;
  font-size: 16px;
`,Po=[{id:"Last7Days",label:"За последние 7 дней",value:"Last7Days"},{id:"ThisMonth",label:"За этот месяц",value:"ThisMonth"},{id:"Last31Days",label:"За последние 31 день",value:"Last31Days"},{id:"PreviousMonth",label:"За прошлый месяц",value:"PreviousMonth"},{id:"ThisYear",label:"За этот год",value:"ThisYear"},{id:"PreviousYear",label:"За прошлый год",value:"PreviousYear"}],Ro=({value:e="",placeholder:n="Выберите период",options:s=Po,showCustomPeriodButton:i=!0,onChange:r,onCustomPeriodClick:d})=>{const[p,b]=y.useState(!1),[j,f]=y.useState(!1),[g,x]=y.useState(""),[m,h]=y.useState(""),[u,l]=y.useState(""),L=y.useRef(null),k=y.useRef(null);y.useEffect(()=>{if(e==="Custom"&&m&&u){const I=P(m),F=P(u);x(`С ${I} по ${F}`)}else{const I=s.find(F=>F.value===e);x(I?I.label:"")}},[e,s,m,u]),y.useEffect(()=>{const I=F=>{L.current&&!L.current.contains(F.target)&&b(!1),j&&k.current&&!k.current.contains(F.target)&&([...document.querySelectorAll(".calendar-container, .arrow-button")].some(v=>v.contains(F.target))||f(!1))};return document.addEventListener("mousedown",I),()=>{document.removeEventListener("mousedown",I)}},[j]);const E=I=>{r?.(I.value),b(!1)},T=()=>{b(!1),d?d():f(!0)},A=()=>{r?.(""),x(""),h(""),l("")},B=()=>{if(m&&u){const I=P(m),F=P(u),Y=`С ${I} по ${F}`;r?.("Custom",m,u),x(Y),f(!1)}},P=I=>{const F=new Date(I),Y=String(F.getDate()).padStart(2,"0"),_=String(F.getMonth()+1).padStart(2,"0"),v=F.getFullYear();return`${Y}.${_}.${v}`},z=()=>t.jsxs(Vo,{children:[t.jsx(Re,{style:{margin:0},children:t.jsx(Ie,{style:{margin:0},children:"Выбор периода"})}),t.jsx(Zo,{onClick:A,children:"Очистить период"})]});return t.jsxs(t.Fragment,{children:[t.jsxs(Io,{ref:L,children:[t.jsxs(Ao,{onClick:()=>b(!p),children:[t.jsx(Bo,{children:g||n}),t.jsx(zo,{$isOpen:p,children:"▼"})]}),p&&t.jsxs(Fo,{children:[s.map(I=>t.jsxs(_o,{onClick:()=>E(I),$isSelected:e===I.value,children:[t.jsx(Oo,{$isSelected:e===I.value,children:e===I.value&&t.jsx(Yo,{})}),t.jsx(Wo,{children:I.label})]},I.id)),i&&t.jsx(No,{onClick:T,children:"Другой период"})]})]}),j&&t.jsx("div",{ref:k,children:t.jsx(Pe,{title:"",onClose:()=>f(!1),onCancel:()=>f(!1),onSave:I=>{I.preventDefault(),B()},saveButtonText:"Выбрать",customLayout:t.jsx(z,{}),children:t.jsxs(Ho,{children:[t.jsx(Ce,{children:t.jsx(ie,{value:m,onChange:I=>h(I)})}),t.jsx(Ce,{children:t.jsx(ie,{value:u,onChange:I=>l(I)})})]})})})]})},Io=o.div`
  position: relative;
  width: 245px;
`,Ao=o.div`
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
`,Bo=o.span`
  font-family: 'Manrope', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  color: #000000;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,zo=o.span`
  font-size: 10px;
  transition: transform 0.2s;
  transform: ${({$isOpen:e})=>e?"rotate(180deg)":"rotate(0)"};
  color: #adb3bc;
  margin-left: 8px;
`,Fo=o.div`
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
`,_o=o.div`
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
`,Oo=o.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 1px solid ${({$isSelected:e})=>e?"#007d88":"#adb3bc"};
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`,Yo=o.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #007d88;
`,Wo=o.span`
  font-family: 'Manrope', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  color: #000000;
`,No=o.div`
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
`,Ho=o.div`
  display: flex;
  gap: 20px;
  margin: 20px 25px;
`,Ce=o.div`
  flex: 1;
`,Vo=o.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 25px;
`,Zo=o.button`
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
`,Uo=({name:e,value:n,onChange:s,onBlur:i,onKeyPress:r,placeholder:d="8 (999) 500-50-50",customPlaceholder:p,tabIndex:b,disabled:j=!1,hasError:f=!1,errorMessage:g})=>{const[x,m]=y.useState(!1),h=y.useRef(null),u=!!(p&&!n&&!x),l=T=>{const B=T.replace(/\D/g,"").slice(0,11);let P="";return B.length>0&&(P+="8"),B.length>1&&(P+=` (${B.slice(1,4)}`),B.length>4&&(P+=`) ${B.slice(4,7)}`),B.length>7&&(P+=`-${B.slice(7,9)}`),B.length>9&&(P+=`-${B.slice(9,11)}`),P},L=T=>{const A=l(T.target.value),B={...T,target:{...T.target,name:e,value:A}};s(B)},k=T=>{m(!1),i?.(T)},E=T=>{r?.(T)};return t.jsxs(Xo,{children:[t.jsx(qo,{ref:h,name:e,type:"tel",value:n,onChange:L,onKeyPress:E,placeholder:u?"":d,maxLength:18,tabIndex:b,disabled:j,hasError:f,onFocus:()=>m(!0),onBlur:k,inputMode:"tel"}),p&&t.jsx(Go,{isVisible:u,children:p}),f&&g&&t.jsx(Jo,{children:g})]})},Xo=o.div`
  position: relative;
  display: inline-block;
  width: 100%;
  margin-right: auto;
`,qo=o.input`
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
`,Go=o.label`
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
`,Jo=o.span`
  color: rgba(239, 68, 68, 1);
  font-size: 12px;
  margin-top: 4px;
  display: block;
`,Ko=({tabs:e,activeTab:n,onChange:s,addButton:i,fontSize:r=14})=>{const d=e.find(p=>p.id===n)?.content;return t.jsxs(t.Fragment,{children:[t.jsx(Qo,{children:t.jsxs(en,{children:[e.map(p=>t.jsxs(tn,{$isActive:n===p.id,onClick:()=>s(p.id),$fontSize:r,children:[p.label,n===p.id&&t.jsx(on,{})]},p.id)),i&&t.jsx(nn,{children:i})]})}),d&&t.jsx(rn,{children:d})]})},Qo=o.div`
  width: auto;
  border-bottom: 1px solid rgba(209, 213, 219, 1);
  margin-bottom: 20px;
`,en=o.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  gap: 24px;
  align-items: center;
`,tn=o.li`
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
`,on=o.div`
  position: absolute;
  bottom: -1px;
  left: 0;
  right: 0;
  height: 2px;
  background-color: rgba(0, 125, 136, 1);
  border-radius: 2px 2px 0 0;
`,nn=o.li`
  margin-left: auto;
  padding: 4px 0;
`,rn=o.div`
  margin-top: 20px;
`,sn=({mode:e,primaryValue:n,secondaryValue:s,placeholder:i="Выберите значение",onSelect:r,onClear:d,disabled:p=!1,hasError:b=!1,errorMessage:j="",customIcon:f})=>{const x=f||t.jsx("svg",{width:"27",height:"6",viewBox:"0 0 27 6",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M2.915 0C1.31175 0 0 1.31175 0 2.915C0 4.51825 1.31175 5.83 2.915 5.83C4.51825 5.83 5.83 4.51825 5.83 2.915C5.83 1.31175 4.51825 0 2.915 0ZM23.32 0C21.7167 0 20.405 1.31175 20.405 2.915C20.405 4.51825 21.7167 5.83 23.32 5.83C24.9233 5.83 26.235 4.51825 26.235 2.915C26.235 1.31175 24.9233 0 23.32 0ZM13.1175 0C11.5142 0 10.2025 1.31175 10.2025 2.915C10.2025 4.51825 11.5142 5.83 13.1175 5.83C14.7207 5.83 16.0325 4.51825 16.0325 2.915C16.0325 1.31175 14.7207 0 13.1175 0Z",fill:"#50555C"})});return e==="view"?t.jsxs(dn,{children:[t.jsx(pn,{children:n||"Не указано"}),s&&t.jsx(un,{children:s})]}):t.jsxs(an,{children:[t.jsxs(ln,{children:[t.jsx(cn,{type:"text",value:n||"",placeholder:i,readOnly:!0,disabled:p}),n&&!p&&t.jsx(xn,{type:"button",onClick:d,"aria-label":"Очистить",children:"×"})]}),!p&&t.jsx(hn,{type:"button",onClick:r,"aria-label":"Выбрать",children:x}),b&&j&&t.jsx(fn,{children:j})]})},an=o.div`
  display: flex;
  align-items: center;
  width: 100%;
  flex-direction: row;
`,ln=o.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
`,cn=o.input`
  width: 100%;
  padding: 10px 40px 10px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  background-color: ${e=>e.disabled?"#f5f5f5":"white"};
  color: #333;
  pointer-events: none;
`,dn=o.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: #f5f5f5;
`,pn=o.span`
  font-size: 14px;
  color: #333;
  margin-bottom: 4px;
`,un=o.span`
  font-size: 13px;
  color: #666;
`,hn=o.button`
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
`,xn=o.button`
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
`,fn=o.div`
  color: red;
  font-size: 12px;
  margin-top: 4px;
`,le=o.div`
  display: flex;
  flex-direction: row;
  text-align: left;
  font-size: 30px;
  color: black;
  font-weight: 600;
  margin-top: 0px;
  align-items: center;
`,gn=({total:e})=>t.jsx("div",{children:t.jsxs(bn,{children:["Всего: ",e]})}),bn=o.p`
  display: flex;
  align-items: center;
  color: black;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  white-space: nowrap;
`,mn=o.h3`
  color: black;
  text-align: left;
  margin: 0;
  padding: 0;
  margin-top: 15px;
  font-size: 14px;
  font-weight: 400;
`,wn=o.h1`
  display: flex;
  text-align: left;
  font-size: 16px;
  color: black;
  font-weight: 400;
  color: rgba(0, 125, 136, 1);
  margin-right: 15px;
  margin-top: 0px;
`,vn=o.label`
  position: relative;
  display: inline-block;
  width: 50px;
  height: 24px;
  background-color: white;
  border: 4px solid rgba(0, 125, 136, 1);
  border-radius: 35px;
  color: black;
`,yn=o.span`
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
`,kn=o.input.attrs({type:"checkbox"})`
  opacity: 0;
  width: 0;
  color: black;
  height: 0;
`,jn=({checked:e,onChange:n,disabled:s})=>{const i=()=>{s||n(!e)};return t.jsxs(vn,{children:[t.jsx(kn,{checked:e,onChange:i,disabled:s}),t.jsx(yn,{checked:e,disabled:s})]})},Cn=({id:e,name:n,checked:s,onChange:i,children:r})=>t.jsxs($n,{htmlFor:e,children:[t.jsx(Sn,{type:"radio",id:e,name:n,checked:s,onChange:i}),r]}),$n=o.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 14px;
  gap: 8px;
  color: black;
`,Sn=o.input`
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
`,Mn=({percentage:e,onChange:n,draggable:s=!1,colors:i={primary:"rgba(0, 125, 136, 1)",secondary:"rgba(37, 203, 161, 1)"}})=>{const r=y.useRef(null),[d,p]=y.useState(!1),b=x=>{!s||!n||(x.preventDefault(),p(!0),g(x))},j=x=>{!d||!n||g(x)},f=()=>{p(!1)},g=x=>{if(!r.current||!n)return;const m=r.current.getBoundingClientRect();let u=(x.clientX-m.left)/m.width*100;u=Math.max(0,Math.min(100,u)),n(Math.round(u))};return y.useEffect(()=>{if(d)return document.addEventListener("mousemove",j),document.addEventListener("mouseup",f),()=>{document.removeEventListener("mousemove",j),document.removeEventListener("mouseup",f)}},[d]),t.jsxs(Tn,{ref:r,$draggable:s,onMouseDown:b,children:[t.jsx(Dn,{$secondaryColor:i.secondary}),t.jsx(Ln,{$percentage:e,$primaryColor:i.primary}),s&&t.jsx(En,{$percentage:e,$primaryColor:i.primary})]})},Tn=o.div`
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
`,Dn=o.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: ${e=>e.$secondaryColor};
  border-radius: 5px;
`,Ln=o.div`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: ${e=>e.$percentage}%;
  background: ${e=>e.$primaryColor};
  border-radius: ${e=>e.$percentage===100?"5px":"5px 0 0 5px"};
  transition: width 0.1s ease;
  z-index: 1;
`,En=o.div`
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
`,Pn=["zoomControl","fullscreenControl"];let oe=null;const Rn=e=>typeof window>"u"?Promise.reject(new Error("Window is not available")):window.ymaps?Promise.resolve(window.ymaps):(oe||(oe=new Promise((n,s)=>{const i=document.createElement("script"),r=e?`&apikey=${e}`:"";i.src=`https://api-maps.yandex.ru/2.1/?lang=ru_RU${r}`,i.async=!0,i.onload=()=>{window.ymaps?window.ymaps.ready(()=>n(window.ymaps)):s(new Error("Yandex Maps failed to load"))},i.onerror=()=>s(new Error("Failed to load Yandex Maps script")),document.head.appendChild(i)})),oe),In=({onLocationSelect:e,initialAddress:n="",initialLat:s=55.751244,initialLon:i=37.618423,apiKey:r,zoom:d=12,height:p=400,width:b="100%",inputPlaceholder:j="Введите адрес или название места",searchButtonLabel:f="Найти",draggablePlacemark:g=!0,controls:x=Pn,showSearch:m=!0,className:h,style:u,onError:l})=>{const[L,k]=y.useState(null),[E,T]=y.useState(n),[A,B]=y.useState(n),[P,z]=y.useState(!1),I=y.useRef(null);y.useEffect(()=>{let _=!1,v;return(async()=>{try{const C=await Rn(r);if(_||!I.current)return;v=new C.Map(I.current,{center:[s,i],zoom:d,controls:x});const M=new C.Placemark([s,i],{},{draggable:g});v.geoObjects.add(M),v.events.add("click",W=>{const R=W.get("coords");F(R,M,v)}),M.events.add("dragend",()=>{const W=M.geometry.getCoordinates();F(W,M,v)}),k(v),z(!0)}catch(C){l&&C instanceof Error&&l(C)}})(),()=>{_=!0,v&&v.destroy()}},[r,s,i,d,x,g,l]);const F=async(_,v,c)=>{if(window.ymaps)try{const W=(await window.ymaps.geocode(_)).geoObjects.get(0).getAddressLine();v.geometry.setCoordinates(_),c.panTo(_,{flying:!0}),B(W),T(W),e(W,_[0],_[1])}catch(C){l&&C instanceof Error&&l(C)}},Y=async()=>{if(!(!E.trim()||!window.ymaps||!L))try{const v=(await window.ymaps.geocode(E)).geoObjects.get(0);if(v){const c=v.geometry.getCoordinates(),C=v.properties.get("boundedBy");L.setBounds(C,{checkZoomRange:!0});const M=new window.ymaps.Placemark(c,{},{draggable:g});L.geoObjects.removeAll(),L.geoObjects.add(M);const W=v.getAddressLine();B(W),e(W,c[0],c[1]),M.events.add("dragend",()=>{const R=M.geometry.getCoordinates();F(R,M,L)})}}catch(_){l&&_ instanceof Error&&l(_)}};return t.jsxs(An,{className:h,style:u,children:[m&&t.jsxs(Bn,{children:[t.jsx(Ee,{type:"text",value:E,onChange:_=>T(_.target.value),placeholder:j,onKeyPress:_=>_.key==="Enter"&&Y(),disabled:!P}),t.jsx(zn,{onClick:Y,disabled:!P,children:f})]}),t.jsxs(_n,{children:["Выбранный адрес: ",t.jsx("strong",{children:A||"Не выбран"})]}),t.jsx(Fn,{ref:I,$height:p,$width:b}),t.jsx(On,{children:"📍 Кликните на карте или найдите адрес через поиск"})]})},An=o.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,Bn=o.div`
  display: flex;
  gap: 8px;
`,zn=o.button`
  padding: 8px 16px;
  background-color: #007d88;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: ${({disabled:e})=>e?"not-allowed":"pointer"};
  opacity: ${({disabled:e})=>e?.6:1};
`,Fn=o.div`
  width: ${({$width:e})=>typeof e=="number"?`${e}px`:e};
  height: ${({$height:e})=>typeof e=="number"?`${e}px`:e};
  border-radius: 8px;
  overflow: hidden;
`,_n=o.div`
  font-size: 14px;
  color: #374151;
`,On=o.div`
  font-size: 12px;
  color: #6b7280;
  text-align: center;
`,ce=o.h1`
  margin-right: auto;
  text-align: left;
  font-size: 30px;
  color: black;
  font-weight: 600;
`;function se(e,n="₽"){if(!e||e.trim()==="")return`0${n}`;const s=e.replace(/[^\d-]/g,"");if(!s||s==="-"||s==="")return`0${n}`;const i=parseInt(s,10);if(isNaN(i))return`0${n}`;const r=new Intl.NumberFormat("ru-RU",{style:"decimal",minimumFractionDigits:0,maximumFractionDigits:0}).format(i);return!0?`${r}${n}`:r}function Yn(e){if(!e)return 0;const n=e.replace(/\D/g,"");return parseInt(n,10)}const Wn=({title:e,data:n,maxValue:s,step:i,height:r=300,titleFontSize:d})=>{const[p,b]=y.useState(null),j=[];for(let g=0;g<=s;g+=i)j.push(g);const f=n.length>0?n[0].bars.map(g=>({name:g.name,color:g.color})):[];return t.jsxs(Nn,{children:[t.jsxs(le,{style:{marginTop:"0"},children:[t.jsx(ce,{style:{fontSize:d},children:e}),t.jsx(Hn,{children:f.map((g,x)=>t.jsxs(Vn,{children:[t.jsx(Zn,{color:g.color}),t.jsx(Un,{children:g.name})]},x))})]}),t.jsxs(Xn,{height:r,children:[t.jsx(qn,{children:j.map((g,x)=>t.jsx(Gn,{children:g.toLocaleString()},x))}),t.jsxs(Jn,{children:[t.jsxs(Kn,{children:[j.map((g,x)=>{const m=g/s*100;return t.jsx(Qn,{position:100-m},`line-${x}`)}),n.map((g,x)=>t.jsxs(er,{onMouseEnter:()=>b(x),onMouseLeave:()=>b(null),children:[g.bars.map((m,h)=>{const u=g.bars.slice(h+1).reduce((l,L)=>l+L.value,0);return t.jsx(tr,{height:m.value/s*100,offset:u/s*100,color:m.color,isHovered:p!==null&&p!==x},h)}),p===x&&t.jsxs(rr,{children:[t.jsxs(ir,{children:[t.jsxs(sr,{children:["Всего: ",se(g.total.toString())]}),g.bars.map((m,h)=>t.jsxs(ar,{children:[m.name,": ",se(m.value.toString())]},h))]}),t.jsx(lr,{})]})]},x))]}),t.jsx(or,{children:n.map((g,x)=>t.jsx(nr,{style:{flex:1,textAlign:"center"},children:g.label},x))})]})]})]})},Nn=o.div`
  background-color: white;
  border-radius: 10px;
  border: 1px solid rgba(209, 213, 219, 1);
  padding: 20px;
  position: relative;
  font-family: 'Inter', sans-serif;
  height: auto;
`,Hn=o.div`
  display: flex;
  gap: 16px;
  margin-bottom: 20px;
`,Vn=o.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,Zn=o.div`
  width: 16px;
  height: 16px;
  background-color: ${e=>e.color};
  border-radius: 4px;
`,Un=o.span`
  font-size: 14px;
  color: #4b5563;
`,Xn=o.div`
  display: flex;
  height: ${e=>typeof e.height=="number"?`${e.height}px`:e.height||"300px"};
  position: relative;
`,qn=o.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  height: 100%;
  margin-right: 10px;
`,Gn=o.span`
  font-size: 12px;
  color: #6b7280;
`,Jn=o.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  position: relative;
`,Kn=o.div`
  display: flex;
  flex-grow: 1;
  align-items: flex-end;
  gap: 20px;
  padding: 20px 20px 0 20px;
  border-width: 0 0 1px 1px;
  border-style: solid;
  border-color: rgba(209, 213, 219, 1);
  position: relative;
`,Qn=o.div`
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
`,er=o.div`
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
`,tr=o.div`
  position: relative;
  width: 100%;
  height: ${e=>Math.max(0,e.height)}%;
  margin-top: ${e=>Math.max(0,e.offset)}%;
  background-color: ${e=>e.isHovered?`color-mix(in srgb, ${e.color} 40%, #E5E7EB)`:e.color};
  border-radius: 4px;
  transition: background-color 0.2s ease;
  max-width: 50px;
`,or=o.div`
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  margin-top: 10px;
`,nr=o.span`
  font-size: 12px;
  color: #6b7280;
  flex: 1;
  text-align: center;
`,rr=o.div`
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  margin-bottom: 10px;
`,ir=o.div`
  background-color: #000;
  color: white;
  padding: 12px;
  border-radius: 10px;
  font-size: 14px;
  white-space: nowrap;
`,sr=o.div`
  font-weight: 600;
  margin-bottom: 6px;
`,ar=o.div`
  margin-bottom: 2px;
`,lr=o.div`
  position: absolute;
  bottom: -6px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 6px solid #000;
`,cr=o.keyframes`
  from { opacity: 0; transform: translate(-50%, -110%); }
  to { opacity: 1; transform: translate(-50%, -100%); }
`,dr=({title:e,data:n,xAxisLabel:s,yAxisLabel:i,maxX:r,maxY:d,minY:p,xStep:b,yStep:j,height:f=300,showLegend:g=!0,xAxisCustomLabels:x,showTooltip:m=!0,titleFontSize:h="30px"})=>{const[u,l]=y.useState(null),[L,k]=y.useState({x:0,y:0}),E=y.useRef(null),T=y.useRef(null),A=Math.max(...n.map(v=>v.x),r),B=[];for(let v=0;v<=A;v+=b)B.push(v);const P=[];for(let v=p;v<=d;v+=j)P.push(v);const z=x||B.map(v=>v.toString()),I=g?Array.from(new Set(n.filter(v=>v.label).map(v=>v.label))).map(v=>{const c=n.find(C=>C.label===v);return{name:v,color:c.color}}):[],F={};n.forEach(v=>{const c=v.label||"default";F[c]||(F[c]=[]),F[c].push(v)});const Y=v=>v/A*100,_=v=>{const c=d-p;return 100-(v-p)/c*100};return y.useEffect(()=>{if(u&&T.current){const v=T.current.getBoundingClientRect(),c=Y(u.x)/100*v.width,C=_(u.y)/100*v.height;k({x:c+v.left,y:C+v.top})}},[u,r,d,p]),t.jsxs(pr,{children:[t.jsxs(le,{style:{marginTop:"0"},children:[t.jsx(ce,{style:{fontSize:h},children:e}),g&&I.length>0&&t.jsx(ur,{children:I.map((v,c)=>t.jsxs(hr,{children:[t.jsx(xr,{color:v.color}),t.jsx(fr,{children:v.name})]},c))})]}),t.jsxs(gr,{height:f,children:[t.jsxs(br,{children:[P.map((v,c)=>t.jsx(mr,{children:v.toLocaleString()},c)),t.jsx($e,{children:i})]}),t.jsxs(wr,{ref:T,children:[P.map((v,c)=>t.jsx(vr,{position:_(v)},`hline-${c}`)),Object.values(F).map((v,c)=>v.map((C,M)=>{if(M===0)return null;const W=v[M-1],R=Y(W.x),V=_(W.y),w=Y(C.x),$=_(C.y);return t.jsx("svg",{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",pointerEvents:"none",zIndex:1},children:t.jsx("line",{x1:`${R}%`,y1:`${V}%`,x2:`${w}%`,y2:`${$}%`,stroke:C.color,strokeWidth:"1"})},`line-${c}-${M}`)})),n.map((v,c)=>t.jsx(yr,{x:Y(v.x),y:_(v.y),color:v.color,onMouseEnter:()=>l(v),onMouseLeave:()=>l(null),isHovered:u?.label===v.label},c))]})]}),m&&u&&t.jsxs(Cr,{ref:E,style:{left:L.x,top:L.y},children:[t.jsxs($r,{children:[u.name&&t.jsx(Sr,{children:u.name}),t.jsx(Mr,{children:u.y.toLocaleString()})]}),t.jsx(Tr,{})]}),t.jsxs(kr,{children:[z.map((v,c)=>{const M=B[c]/A*100;return t.jsx(jr,{style:{left:`${M}%`,transform:"translateX(-50%)"},children:v},c)}),s&&t.jsx($e,{children:s})]})]})},pr=o.div`
  background-color: white;
  border-radius: 10px;
  border: 1px solid rgba(209, 213, 219, 1);
  padding: 20px;
  position: relative;
  font-family: 'Inter', sans-serif;
  height: auto;
`,ur=o.div`
  display: flex;
  gap: 16px;
  margin-top: 16px;
  flex-wrap: wrap;
`,hr=o.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,xr=o.div`
  width: 16px;
  height: 2px;
  background-color: ${e=>e.color};
`,fr=o.span`
  font-size: 14px;
  color: #4b5563;
`,gr=o.div`
  display: flex;
  height: ${e=>typeof e.height=="number"?`${e.height}px`:e.height||"300px"};
  position: relative;
`,br=o.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  height: 100%;
  margin-right: 10px;
  min-width: 40px;
`,mr=o.span`
  font-size: 12px;
  color: #6b7280;
`,$e=o.div`
  font-size: 12px;
  color: #6b7280;
  text-align: center;
  margin-top: 10px;
`,wr=o.div`
  position: relative;
  flex-grow: 1;
  border-width: 0 0 1px 1px;
  border-style: solid;
  border-color: rgba(209, 213, 219, 1);
`,vr=o.div`
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
`,yr=o.div`
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
`,kr=o.div`
  position: relative;
  height: 20px;
  margin-top: 10px;
  margin-left: 40px;
`,jr=o.span`
  font-size: 12px;
  color: #6b7280;
  position: absolute;
`,Cr=o.div`
  position: fixed;
  transform: translate(-50%, -100%);
  z-index: 100;
  pointer-events: none;
  animation: ${cr} 0.15s ease-out forwards;
`,$r=o.div`
  background-color: rgba(0, 0, 0, 0.9);
  color: white;
  padding: 12px 16px;
  border-radius: 8px;
  font-size: 14px;
  white-space: nowrap;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
`,Sr=o.div`
  font-weight: 600;
  margin-bottom: 6px;
  color: #fff;
`,Mr=o.div`
  margin-bottom: 2px;
  color: rgba(255, 255, 255, 0.9);
`,Tr=o.div`
  position: absolute;
  bottom: -6px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 6px solid rgba(0, 0, 0, 0.9);
`,Dr=({images:e,initialIndex:n,onClose:s})=>{const[i,r]=y.useState(n),[d,p]=y.useState(0),b=()=>{r(x=>x>0?x-1:e.length-1),p(0)},j=()=>{r(x=>x<e.length-1?x+1:0),p(0)},f=()=>{p(x=>(x+90)%360)},g=x=>{x.key==="Escape"?s():x.key==="ArrowLeft"?b():x.key==="ArrowRight"?j():(x.key==="r"||x.key==="к")&&f()};return t.jsx(Lr,{onClick:s,onKeyDown:g,tabIndex:0,children:t.jsxs(Er,{onClick:x=>x.stopPropagation(),children:[t.jsx(Pr,{onClick:s,children:t.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("path",{d:"M18 6L6 18",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),t.jsx("path",{d:"M6 6L18 18",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})}),t.jsx(Rr,{children:t.jsx(Ir,{onClick:f,title:"Повернуть (R)",children:t.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M4.077 3C6.88767 5.202 8.48267 7.15733 8.862 8.866C9.24133 10.5753 9.29867 12.202 9.034 13.746H4L12.214 21L20 13.747H15.216C15.192 10.889 14.12 8.46 12 6.46C9.88 4.46 7.239 3.30667 4.077 3Z",stroke:"#50555C",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})})}),t.jsxs(Ar,{children:[t.jsx(Se,{$position:"left",onClick:b,children:t.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M15 18L9 12L15 6",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}),t.jsx(Br,{src:e[i],alt:`Photo ${i+1}`,$rotation:d}),t.jsx(Se,{$position:"right",onClick:j,children:t.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M9 18L15 12L9 6",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})})]}),t.jsx(zr,{children:e.map((x,m)=>t.jsx(Fr,{$active:m===i,onClick:()=>{r(m),p(0)}},m))})]})})},Lr=o.div`
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
`,Er=o.div`
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`,Pr=o.button`
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
`,Rr=o.div`
  position: absolute;
  top: -50px;
  left: 0;
  display: flex;
  gap: 10px;
  z-index: 10;

  @media (max-width: 768px) {
    top: -45px;
  }
`,Ir=o.button`
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
`,Ar=o.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`,Br=o.img`
  max-width: 100%;
  max-height: 80vh;
  object-fit: contain;
  border-radius: 4px;
  transform: rotate(${({$rotation:e})=>e}deg);
  transition: transform 0.3s ease;
`,Se=o.button`
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
`,zr=o.div`
  display: flex;
  gap: 8px;
  margin-top: 20px;
`,Fr=o.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${({$active:e})=>e?"#ffffff":"rgba(255, 255, 255, 0.5)"};
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #ffffff;
  }
`,Ae=({isOpen:e,callPhone:n,error:s,onClose:i})=>{const[r,d]=y.useState(!1);if(!e)return null;const p=/iPhone|iPad|iPod|Android/i.test(navigator.userAgent),b=()=>{p?window.location.href=`tel:${n}`:(navigator.clipboard.writeText(n),d(!0),setTimeout(()=>d(!1),2e3))};return t.jsx(_r,{onClick:i,children:t.jsxs(Or,{onClick:j=>j.stopPropagation(),children:[t.jsx(Yr,{children:"Подтверждение авторизации"}),t.jsx(Me,{children:"Для завершения авторизации позвоните на номер:"}),t.jsxs(Wr,{onClick:b,title:p?"Позвонить":"Копировать номер",$clickable:!0,children:[n,!p&&r&&t.jsx(Nr,{children:"Скопировано!"})]}),t.jsx(Me,{children:"После звонка система автоматически подтвердит вашу авторизацию."}),s&&t.jsx(Hr,{children:s})]})})},_r=o.div`
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
`,Or=o.div`
  background: white;
  padding: 30px;
  border-radius: 12px;
  width: 90%;
  max-width: 500px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  text-align: center;
`,Yr=o.h2`
  font-size: 20px;
  margin-bottom: 20px;
  color: #333;
`,Me=o.p`
  margin-bottom: 15px;
  color: #555;
`,Wr=o.div`
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
`,Nr=o.span`
  position: absolute;
  bottom: -25px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 14px;
  color: #27ae60;
  font-weight: normal;
  white-space: nowrap;
`,Hr=o.div`
  color: #e74c3c;
  margin: 10px 0;
`,Be=y.createContext({collapsed:!1,toggleCollapsed:()=>{},selectedSideMenuItem:null,setSelectedSideMenuItem:()=>{},selectedTopMenuItem:null,setSelectedTopMenuItem:()=>{}}),Vr=({items:e,bottomItems:n=[],logo:s,arrowIcon:i,collapsed:r,onToggle:d,selectedKey:p,onSelect:b,autoCollapseOnSelect:j=!1,width:f="315px",collapsedWidth:g="70px",className:x,style:m})=>{const h=y.useContext(Be),[u,l]=y.useState(r??h.collapsed??!1),[L,k]=y.useState(null),[E,T]=y.useState(p??h.selectedSideMenuItem??null),[A,B]=y.useState({visible:!1,x:0,y:0,items:[]}),P=y.useRef(null),z=r??h.collapsed??u,I=R=>{l(R),h.toggleCollapsed(),d?.(R)},F=p??h.selectedSideMenuItem??E,Y=R=>{T(R),h.setSelectedSideMenuItem(R)};y.useEffect(()=>{r!==void 0&&(l(r),r&&k(null))},[r]),y.useEffect(()=>{p!==void 0&&Y(p)},[p]),y.useEffect(()=>{const R=()=>B(V=>({...V,visible:!1}));return document.addEventListener("click",R),()=>document.removeEventListener("click",R)},[]);const _=()=>{const R=!z;I(R),R&&k(null)},v=R=>{R.disabled||R.hidden||(Y(R.key),b?.(R),R.onClick?.(R),j&&(I(!0),k(null)))},c=R=>{k(V=>V===R?null:R)},C=(R,V)=>{const w=(R.children?.length||0)>0;if(z&&w){V.stopPropagation();const $=V.currentTarget.getBoundingClientRect();B({visible:!0,x:$.right+6,y:$.top,items:R.children||[]});return}w?c(R.key):v(R)},M=(R,V=!1)=>R.filter(w=>!w.hidden).map(w=>{const $=(w.children?.length||0)>0,a=L===w.key,S=F===w.key||!!w.children&&w.children.some(D=>D.key===F);return t.jsxs(y.Fragment,{children:[t.jsxs(Kr,{$collapsed:z,$selected:S,onClick:D=>C(w,D),$disabled:w.disabled,title:w.label,children:[w.icon&&t.jsx(ei,{$collapsed:z,children:w.icon}),!z&&t.jsx(Qr,{children:w.label}),!z&&$&&t.jsx(oi,{$expanded:a,children:"▾"})]}),!z&&$&&a&&t.jsx(ti,{children:M(w.children||[],!0)})]},w.key)}),W=y.useMemo(()=>A.visible?t.jsx(ri,{style:{left:A.x,top:A.y},children:A.items.map(R=>t.jsx(ii,{onClick:()=>{v(R),B({visible:!1,x:0,y:0,items:[]})},$selected:F===R.key,children:R.label},R.key))}):null,[A,F]);return t.jsxs(Zr,{ref:P,$collapsed:z,$width:f,$collapsedWidth:g,className:x,style:m,children:[t.jsxs(Ur,{children:[t.jsx(Xr,{onClick:_,"aria-label":"Переключить меню",children:i??t.jsx(qr,{$collapsed:z,children:"❮"})}),!z&&s&&t.jsx(Gr,{children:s})]}),t.jsxs(Jr,{children:[t.jsx(Te,{children:M(e)}),n.length>0&&t.jsxs(t.Fragment,{children:[t.jsx(ni,{}),t.jsx(Te,{children:M(n)})]})]}),W,t.jsx(si,{$collapsed:z})]})},Zr=o.div`
  width: ${({$collapsed:e,$width:n,$collapsedWidth:s})=>e?s:n};
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
`,Ur=o.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 28px;
`,Xr=o.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 6px;
`,qr=o.span`
  display: inline-block;
  transform: rotate(${({$collapsed:e})=>e?"180deg":"0deg"});
  transition: transform 0.3s ease;
  font-size: 18px;
`,Gr=o.div`
  flex: 1;
  display: flex;
  align-items: center;
`,Jr=o.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  height: 100%;
  width: 100%;
`,Te=o.div`
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
`,Kr=o.div`
  display: flex;
  align-items: center;
  gap: ${({$collapsed:e})=>e?"0":"12px"};
  padding: ${({$collapsed:e})=>e?"15px 0":"15px 17px"};
  border-radius: 8px;
  cursor: ${({$disabled:e})=>e?"not-allowed":"pointer"};
  color: ${({$selected:e})=>e?"#000":"#50555c"};
  background-color: ${({$selected:e})=>e?"rgba(209, 213, 219, 1)":"transparent"};
  transition: background-color 0.2s ease, color 0.2s ease;
  opacity: ${({$disabled:e})=>e?.5:1};

  &:hover {
    background-color: ${({$selected:e})=>e?"rgba(209, 213, 219, 1)":"rgba(209, 213, 219, 0.5)"};
    color: #000;
  }
`,Qr=o.span`
  font-size: 15px;
  font-weight: 500;
  white-space: nowrap;
`,ei=o.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 21px;
  width: ${({$collapsed:e})=>e?"24px":"21px"};
`,ti=o.div`
  margin-left: 45px;
  padding-left: 0;
  border-left: 1px solid rgba(209, 213, 219, 0.8);
  display: flex;
  flex-direction: column;
  gap: 4px;
`,oi=o.span`
  margin-left: auto;
  transform: rotate(${({$expanded:e})=>e?"180deg":"0deg"});
  transition: transform 0.2s ease;
`,ni=o.div`
  height: 1px;
  width: 100%;
  background-color: rgba(209, 213, 219, 1);
  margin: 14px 0;
`,ri=o.div`
  position: fixed;
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  padding: 8px;
  z-index: 1000;
  min-width: 180px;
`,ii=o.div`
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
`,si=o.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  width: 1px;
  background-color: rgba(209, 213, 219, 1);
  transition: all 0.3s ease;
  opacity: ${({$collapsed:e})=>e?0:1};
`,ai=e=>{const n=e.replace(/\D/g,""),i=(n.startsWith("8")||n.length===0?n:`8${n}`).slice(0,11);let r="";return i.length>0&&(r+="8"),i.length>1&&(r+=` (${i.slice(1,4)}`),i.length>4&&(r+=`) ${i.slice(4,7)}`),i.length>7&&(r+=`-${i.slice(7,9)}`),i.length>9&&(r+=`-${i.slice(9,11)}`),r},ze=({value:e,onChange:n,placeholder:s="8 (xxx) xxx-xx-xx",tabIndex:i})=>{const r=d=>{const p=ai(d.target.value);n(p)};return t.jsx(li,{type:"text",value:e,onChange:r,placeholder:s,maxLength:18,tabIndex:i})},li=o.input`
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

  &:focus {
    border-color: rgba(37, 203, 161, 1);
    box-shadow: 0 0 0 0.2rem rgba(37, 203, 161, 0.25);
    background-color: rgba(255, 255, 255, 1);
  }
`,de="http://95.163.226.24:8080/api",ne="access_token",re="refresh_token",q={setTokens(e,n){localStorage.setItem(ne,e),localStorage.setItem(re,n)},getAccessToken(){return localStorage.getItem(ne)},getRefreshToken(){return localStorage.getItem(re)},clear(){localStorage.removeItem(ne),localStorage.removeItem(re)}};async function pe(e,n={}){const{method:s="GET",body:i,headers:r={},token:d}=n,p=async j=>{const f={"Content-Type":"application/json",...r};j&&(f.Authorization=`Bearer ${j}`);const g=e.startsWith("http")?e:`${de}${e}`;return await fetch(g,{method:s,headers:f,body:i?JSON.stringify(i):void 0})},b=async(j,f=!0)=>{const g=await p(j);if(g.ok){if(g.status===204)return null;const m=await g.text();if(!m)return null;try{return JSON.parse(m)}catch{return m}}if(g.status===401&&f){const m=await ci();if(m)return b(m,!1)}let x=`Request failed with status ${g.status}`;try{const m=await g.json();m&&typeof m.error=="string"?x=m.error:typeof m=="string"&&(x=m)}catch{const m=await g.text();m&&(x=m)}throw new Error(x)};return b(d)}async function ci(){const e=q.getRefreshToken(),n=q.getAccessToken();if(!e||!n)return null;const s=await fetch(`${de}/auth/refresh`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({access_token:n,refresh_token:e})});if(!s.ok)return q.clear(),null;const i=await s.json();if(i.access_token){const r=i.refresh_token||e;return q.setTokens(i.access_token,r),i.access_token}return q.clear(),null}const Fe=(e,n)=>pe("/auth/call/initiate",{method:"POST",body:{phone:e,user_type:n}}),_e=(e,n,s)=>pe("/auth/call/confirm",{method:"POST",body:{phone:e,check_id:n,user_type:s}}),di=({onLoginSuccess:e,userType:n="delivery_operator",title:s="Авторизация",submitLabel:i="Войти",placeholder:r="8 (xxx) xxx-xx-xx",supportPhone:d="8 989 924 24 24",supportLinkUrl:p="https://info.waypay.one",supportLinkText:b="info.waypay.one",className:j,style:f,pollingIntervalMs:g=3e3})=>{const[x,m]=y.useState(!1),[h,u]=y.useState(""),[l,L]=y.useState(!1),[k,E]=y.useState(""),[T,A]=y.useState(""),[B,P]=y.useState(!1),z=y.useRef(void 0);y.useEffect(()=>()=>{z.current&&clearInterval(z.current)},[]);const I=c=>{const C=c.replace(/\D/g,"");return C?C.startsWith("8")?`+7${C.slice(1)}`:C.startsWith("7")?`+${C}`:`+${C}`:""},F=()=>{L(!1),z.current&&window.clearInterval(z.current)},Y=async c=>{if(c.preventDefault(),!h){A("Введите номер телефона");return}m(!0),A("");const C=I(h);try{const M=await Fe(C,n);E(M.call_phone),L(!0),_(C,M.check_id)}catch(M){console.error("Auth error:",M),A("Не удалось инициировать авторизацию. Проверьте номер.")}finally{m(!1)}},_=(c,C)=>{z.current&&window.clearInterval(z.current),z.current=window.setInterval(()=>{v(c,C)},g)},v=async(c,C)=>{if(!B){P(!0);try{const M=await _e(c,C,n);M.access_token&&M.refresh_token&&(q.setTokens(M.access_token,M.refresh_token),z.current&&window.clearInterval(z.current),L(!1),e(M.access_token))}catch(M){console.error("Verification error:",M),A("Ошибка проверки авторизации")}finally{P(!1)}}};return t.jsxs(pi,{className:j,style:f,children:[t.jsxs(ui,{children:[t.jsxs(hi,{onSubmit:Y,children:[t.jsx(xi,{children:s}),t.jsx(fi,{children:t.jsx(gi,{children:t.jsx(ze,{value:h,onChange:c=>u(c),placeholder:r})})}),T&&t.jsx(yi,{children:t.jsx("span",{children:T})}),t.jsx(bi,{type:"submit",disabled:x,children:i})]}),t.jsxs(mi,{children:["Хотите получить доступ к нашим продуктам?",t.jsx("br",{}),"Обратитесь по номеру"," ",t.jsx(wi,{href:`tel:${d}`,children:d}),t.jsx("br",{}),"или оставьте заявку на"," ",t.jsx(vi,{href:p,target:"_blank",rel:"noreferrer",children:b})]})]}),t.jsx(Ae,{isOpen:l,onClose:F,callPhone:k,error:T})]})},pi=o.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 20px;
  background: linear-gradient(135deg, #f7fafa 0%, #eef6f7 100%);
`,ui=o.div`
  background: white;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 125, 136, 0.1);
  width: 100%;
  max-width: 440px;
  padding: 40px;
  position: relative;
  overflow: hidden;

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
  }
`,hi=o.form`
  display: flex;
  flex-direction: column;
`,xi=o.h1`
  font-size: 24px;
  margin-bottom: 30px;
  text-align: center;
  color: #333;
  font-weight: 600;
`,fi=o.div`
  margin-bottom: 25px;
`,gi=o.div`
  position: relative;
  width: auto;
`,bi=o.button`
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
`,mi=o.div`
  margin-top: 30px;
  padding-top: 20px;
  border-top: 1px solid #f0f0f0;
  text-align: center;
  font-size: 14px;
  color: #666;
  line-height: 1.5;
`,wi=o.a`
  color: rgba(0, 125, 136, 1);
  text-decoration: none;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`,vi=o.a`
  color: rgba(0, 125, 136, 1);
  text-decoration: none;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`,yi=o.div`
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
`,Oe=e=>{let n=0;for(let i=0;i<e.length;i++)n=e.charCodeAt(i)+((n<<5)-n);return`hsl(${Math.abs(n%360)}, 60%, 60%)`},ki=e=>!e||!e.trim()?"?":e.split(" ").filter(i=>i.length>0).map(i=>i[0].toUpperCase()).join("").slice(0,2)||"?",ji=(e,n=100)=>{const s=document.createElement("canvas");s.width=n,s.height=n;const i=s.getContext("2d");if(!i)return"";const r=Oe(e);i.fillStyle=r,i.beginPath(),i.arc(n/2,n/2,n/2,0,Math.PI*2),i.fill(),i.fillStyle="#ffffff";const d=n/2;i.font=`bold ${d}px "Manrope", Arial, sans-serif`,i.textAlign="center",i.textBaseline="middle";const p=d*.1;return i.fillText(e,n/2,n/2+p),s.toDataURL("image/png")},Ci=e=>{if(!e)return"";const n=typeof e=="string"?new Date(e):e;if(isNaN(n.getTime()))return"";const s=n.getDate().toString().padStart(2,"0"),i=(n.getMonth()+1).toString().padStart(2,"0"),r=n.getFullYear();return`${s}-${i}-${r}`};function $i(e){return new Date(e)}const Ye=e=>{let n;try{if(e instanceof Date)n=e;else if(typeof e=="string"||typeof e=="number")n=new Date(e);else throw new Error("Неподдерживаемый тип данных");if(isNaN(n.getTime()))return"неверная дата";const s=new Date;if(n>s){const g=Math.floor((n.getTime()-s.getTime())/1e3),x=Math.floor(g/60),m=Math.floor(x/60),h=Math.floor(m/24);return g<10?"скоро":g<60?`через ${g} секунд`:x===1?"через минуту":x<60?`через ${x} минут`:m===1?"через час":m<24?`через ${m} часов`:h===1?"завтра":h<7?`через ${h} дней`:"в будущем"}const i=Math.floor((s.getTime()-n.getTime())/1e3),r=Math.floor(i/60),d=Math.floor(r/60),p=Math.floor(d/24),b=Math.floor(p/7),j=Math.floor(p/30),f=Math.floor(p/365);if(i<10)return"только что";if(i<60){const g=Math.max(1,i);return g===1?"секунду назад":g<5?`${g} секунды назад`:`${g} секунд назад`}return r<60?r===1?"минуту назад":r<5?`${r} минуты назад`:`${r} минут назад`:d<24?d===1?"час назад":d<5?`${d} часа назад`:`${d} часов назад`:p<7?p===1?"вчера":p===2?"позавчера":`${p} дня назад`:b<4?b===1?"неделю назад":b<5?`${b} недели назад`:`${b} недель назад`:j<12?j===1?"месяц назад":j<5?`${j} месяца назад`:`${j} месяцев назад`:f===1?"год назад":f<5?`${f} года назад`:`${f} лет назад`}catch(s){return console.error("Ошибка форматирования относительного времени:",s),"ошибка даты"}},We=e=>{try{return e.toLocaleDateString("ru-RU",{day:"2-digit",month:"2-digit",year:"2-digit",hour:"2-digit",minute:"2-digit"})}catch{return"неверная дата"}},Si=(e,n={})=>{const{useExactAfterMonths:s=6,includeTime:i=!0}=n,r=new Date(e);return isNaN(r.getTime()),Math.floor((new Date().getTime()-r.getTime())/(1e3*60*60*24*30))>=s?i?We(r):r.toLocaleDateString("ru-RU",{day:"2-digit",month:"2-digit",year:"2-digit"}):Ye(r)};exports.API_BASE_URL=de;exports.AddButton=pt;exports.AuthCallModal=Ae;exports.AuthPage=di;exports.BackButton=ft;exports.BaseModal=Pe;exports.Checkbox=Wt;exports.ColumnChart=Wn;exports.ContextMenu=ae;exports.CountInfoTitle=gn;exports.CustomCalendar=ie;exports.CustomInput=Ee;exports.CustomPhoneInput=ze;exports.CustomSelect=Mt;exports.CustomTable=Qe;exports.CustomTextArea=mo;exports.CustomTitle=ce;exports.DefaultButton=De;exports.DeleteButton=mt;exports.EditButton=vt;exports.EntitySelectContainer=sn;exports.ExportButton=jt;exports.InputTitle=mn;exports.ModalInfoTitle=wn;exports.Pagination=go;exports.PeriodField=Ro;exports.PhoneModalInput=Uo;exports.PhotoViewerModal=Dr;exports.ProgressBar=Mn;exports.RadioButton=Cn;exports.ScatterPlot=dr;exports.SideMenu=Vr;exports.SideMenuContext=Be;exports.Tabs=Ko;exports.TitleField=le;exports.ToggleSwitch=jn;exports.YandexMapSelector=In;exports.apiRequest=pe;exports.confirmCallAuth=_e;exports.formatDate=Ci;exports.formatExactDate=We;exports.formatMoney=se;exports.formatRelativeTime=Ye;exports.formatRelativeTimeExtended=Si;exports.generateAvatar=ji;exports.getInitials=ki;exports.initiateCallAuth=Fe;exports.parseDateInput=$i;exports.parseMoney=Yn;exports.stringToColor=Oe;
