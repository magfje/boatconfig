"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[528],{7315:function(e,t,n){let r,o,i;n.d(t,{A:function(){return ed},B:function(){return A},C:function(){return ep},E:function(){return R},F:function(){return em},a:function(){return k},b:function(){return eS},c:function(){return ee},d:function(){return eM},e:function(){return E},f:function(){return er},g:function(){return ej},i:function(){return x},u:function(){return O}});var a,l,s=n(6376),u=n(4090),c=n(7777);let f=!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent)?u.useEffect:u.useLayoutEffect;function d(e){let t="function"==typeof e?function(e){let t;let n=new Set,r=(e,r)=>{let o="function"==typeof e?e(t):e;if(o!==t){let e=t;t=r?o:Object.assign({},t,o),n.forEach(n=>n(t,e))}},o=()=>t,i=function(e){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:o,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:Object.is;console.warn("[DEPRECATED] Please use `subscribeWithSelector` middleware");let a=r(t);function l(){let n=r(t);if(!i(a,n)){let t=a;e(a=n,t)}}return n.add(l),()=>n.delete(l)},a={setState:r,getState:o,subscribe:(e,t,r)=>t||r?i(e,t,r):(n.add(e),()=>n.delete(e)),destroy:()=>n.clear()};return t=e(r,o,a),a}(e):e,n=function(){let e,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t.getState,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Object.is,[,o]=(0,u.useReducer)(e=>e+1,0),i=t.getState(),a=(0,u.useRef)(i),l=(0,u.useRef)(n),s=(0,u.useRef)(r),c=(0,u.useRef)(!1),d=(0,u.useRef)();void 0===d.current&&(d.current=n(i));let p=!1;(a.current!==i||l.current!==n||s.current!==r||c.current)&&(e=n(i),p=!r(d.current,e)),f(()=>{p&&(d.current=e),a.current=i,l.current=n,s.current=r,c.current=!1});let v=(0,u.useRef)(i);f(()=>{let e=()=>{try{let e=t.getState(),n=l.current(e);s.current(d.current,n)||(a.current=e,d.current=n,o())}catch(e){c.current=!0,o()}},n=t.subscribe(e);return t.getState()!==v.current&&e(),n},[]);let h=p?e:d.current;return(0,u.useDebugValue)(h),h};return Object.assign(n,t),n[Symbol.iterator]=function(){console.warn("[useStore, api] = create() is deprecated and will be removed in v4");let e=[n,t];return{next(){let t=e.length<=0;return{value:e.shift(),done:t}}}},n}var p=n(4812),v=n.n(p),h=n(9514);let m=e=>"object"==typeof e&&"function"==typeof e.then,g=[];function b(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:(e,t)=>e===t;if(e===t)return!0;if(!e||!t)return!1;let r=e.length;if(t.length!==r)return!1;for(let o=0;o<r;o++)if(!n(e[o],t[o]))return!1;return!0}function y(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};for(let o of(null===t&&(t=[e]),g))if(b(t,o.keys,o.equal)){if(n)return;if(Object.prototype.hasOwnProperty.call(o,"error"))throw o.error;if(Object.prototype.hasOwnProperty.call(o,"response"))return r.lifespan&&r.lifespan>0&&(o.timeout&&clearTimeout(o.timeout),o.timeout=setTimeout(o.remove,r.lifespan)),o.response;if(!n)throw o.promise}let o={keys:t,equal:r.equal,remove:()=>{let e=g.indexOf(o);-1!==e&&g.splice(e,1)},promise:(m(e)?e:e(...t)).then(e=>{o.response=e,r.lifespan&&r.lifespan>0&&(o.timeout=setTimeout(o.remove,r.lifespan))}).catch(e=>o.error=e)};if(g.push(o),!n)throw o.promise}let w=(e,t,n)=>y(e,t,!1,n),_=(e,t,n)=>void y(e,t,!0,n),C=e=>{if(void 0===e||0===e.length)g.splice(0,g.length);else{let t=g.find(t=>b(e,t.keys,t.equal));t&&t.remove()}};var P=n(9079);let S={},E=e=>void Object.assign(S,e),M=e=>"colorSpace"in e||"outputColorSpace"in e,j=()=>{var e;return null!=(e=S.ColorManagement)?e:null},T=e=>e&&e.isOrthographicCamera,x=e=>e&&e.hasOwnProperty("current"),k=null!=(a=window.document)&&a.createElement||(null==(l=window.navigator)?void 0:l.product)==="ReactNative"?u.useLayoutEffect:u.useEffect;function O(e){let t=u.useRef(e);return k(()=>void(t.current=e),[e]),t}function A(e){let{set:t}=e;return k(()=>(t(new Promise(()=>null)),()=>t(!1)),[t]),null}class R extends u.Component{componentDidCatch(e){this.props.set(e)}render(){return this.state.error?null:this.props.children}constructor(...e){super(...e),this.state={error:!1}}}R.getDerivedStateFromError=()=>({error:!0});let I="__default",L=new Map,D=e=>e&&!!e.memoized&&!!e.changes;function z(e){var t;let n=null!=(t=window.devicePixelRatio)?t:2;return Array.isArray(e)?Math.min(Math.max(e[0],n),e[1]):e}let F=e=>{var t;return null==(t=e.__r3f)?void 0:t.root.getState()};function q(e){let t=e.__r3f.root;for(;t.getState().previousRoot;)t=t.getState().previousRoot;return t}let H={obj:e=>e===Object(e)&&!H.arr(e)&&"function"!=typeof e,fun:e=>"function"==typeof e,str:e=>"string"==typeof e,num:e=>"number"==typeof e,boo:e=>"boolean"==typeof e,und:e=>void 0===e,arr:e=>Array.isArray(e),equ(e,t){let n,{arrays:r="shallow",objects:o="reference",strict:i=!0}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(typeof e!=typeof t||!!e!=!!t)return!1;if(H.str(e)||H.num(e))return e===t;let a=H.obj(e);if(a&&"reference"===o)return e===t;let l=H.arr(e);if(l&&"reference"===r)return e===t;if((l||a)&&e===t)return!0;for(n in e)if(!(n in t))return!1;if(a&&"shallow"===r&&"shallow"===o){for(n in i?t:e)if(!H.equ(e[n],t[n],{strict:i,objects:"reference"}))return!1}else for(n in i?t:e)if(e[n]!==t[n])return!1;if(H.und(n)){if(l&&0===e.length&&0===t.length||a&&0===Object.keys(e).length&&0===Object.keys(t).length)return!0;if(e!==t)return!1}return!0}};function B(e,t){return e.__r3f={type:"",root:null,previousAttach:null,memoizedProps:{},eventCount:0,handlers:{},objects:[],parent:null,...t},e}function V(e,t){let n=e;if(!t.includes("-"))return{target:n,key:t};{let r=t.split("-"),o=r.pop();return{target:n=r.reduce((e,t)=>e[t],e),key:o}}}let N=/-\d+$/;function U(e,t,n){if(H.str(n)){if(N.test(n)){let{target:t,key:r}=V(e,n.replace(N,""));Array.isArray(t[r])||(t[r]=[])}let{target:r,key:o}=V(e,n);t.__r3f.previousAttach=r[o],r[o]=t}else t.__r3f.previousAttach=n(e,t)}function W(e,t,n){var r,o;if(H.str(n)){let{target:r,key:o}=V(e,n),i=t.__r3f.previousAttach;void 0===i?delete r[o]:r[o]=i}else null==(r=t.__r3f)||null==r.previousAttach||r.previousAttach(e,t);null==(o=t.__r3f)||delete o.previousAttach}function G(e,t){var n;let{children:r,key:o,ref:i,...a}=t,{children:l,key:s,ref:u,...c}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},f=arguments.length>3&&void 0!==arguments[3]&&arguments[3],d=null!=(n=null==e?void 0:e.__r3f)?n:{},p=Object.entries(a),v=[];if(f){let e=Object.keys(c);for(let t=0;t<e.length;t++)a.hasOwnProperty(e[t])||p.unshift([e[t],I+"remove"])}p.forEach(t=>{var n;let[r,o]=t;if(null!=(n=e.__r3f)&&n.primitive&&"object"===r||H.equ(o,c[r]))return;if(/^on(Pointer|Click|DoubleClick|ContextMenu|Wheel)/.test(r))return v.push([r,o,!0,[]]);let i=[];for(let e in r.includes("-")&&(i=r.split("-")),v.push([r,o,!1,i]),a){let t=a[e];e.startsWith("".concat(r,"-"))&&v.push([e,t,!1,e.split("-")])}});let h={...a};return d.memoizedProps&&d.memoizedProps.args&&(h.args=d.memoizedProps.args),d.memoizedProps&&d.memoizedProps.attach&&(h.attach=d.memoizedProps.attach),{memoized:h,changes:v}}let Y=void 0!==P&&!1;function X(e,t){var n,r,o;let i=null!=(n=e.__r3f)?n:{},a=i.root,l=null!=(r=null==a?void 0:null==a.getState?void 0:a.getState())?r:{},{memoized:u,changes:c}=D(t)?t:G(e,t),f=i.eventCount;e.__r3f&&(e.__r3f.memoizedProps=u);for(let t=0;t<c.length;t++){let[n,r,o,a]=c[t];if(M(e)){let e="srgb",t="srgb-linear";"encoding"===n?(n="colorSpace",r=3001===r?e:t):"outputEncoding"===n&&(n="outputColorSpace",r=3001===r?e:t)}let u=e,f=u[n];if(a.length&&!((f=a.reduce((e,t)=>e[t],e))&&f.set)){let[t,...r]=a.reverse();u=r.reverse().reduce((e,t)=>e[t],e),n=t}if(r===I+"remove"){if(u.constructor){let e=L.get(u.constructor);e||(e=new u.constructor,L.set(u.constructor,e)),r=e[n]}else r=0}if(o)r?i.handlers[n]=r:delete i.handlers[n],i.eventCount=Object.keys(i.handlers).length;else if(f&&f.set&&(f.copy||f instanceof s.Layers)){if(Array.isArray(r))f.fromArray?f.fromArray(r):f.set(...r);else if(f.copy&&r&&r.constructor&&(Y?f.constructor.name===r.constructor.name:f.constructor===r.constructor))f.copy(r);else if(void 0!==r){let e=f instanceof s.Color;!e&&f.setScalar?f.setScalar(r):f instanceof s.Layers&&r instanceof s.Layers?f.mask=r.mask:f.set(r),j()||l.linear||!e||f.convertSRGBToLinear()}}else if(u[n]=r,u[n]instanceof s.Texture&&u[n].format===s.RGBAFormat&&u[n].type===s.UnsignedByteType){let e=u[n];M(e)&&M(l.gl)?e.colorSpace=l.gl.outputColorSpace:e.encoding=l.gl.outputEncoding}Z(e)}if(i.parent&&e.raycast&&f!==i.eventCount){let t=q(e).getState().internal,n=t.interaction.indexOf(e);n>-1&&t.interaction.splice(n,1),i.eventCount&&t.interaction.push(e)}return!(1===c.length&&"onUpdate"===c[0][0])&&c.length&&null!=(o=e.__r3f)&&o.parent&&$(e),e}function Z(e){var t,n;let r=null==(t=e.__r3f)?void 0:null==(n=t.root)?void 0:null==n.getState?void 0:n.getState();r&&0===r.internal.frames&&r.invalidate()}function $(e){null==e.onUpdate||e.onUpdate(e)}function J(e,t){e.manual||(T(e)?(e.left=-(t.width/2),e.right=t.width/2,e.top=t.height/2,e.bottom=-(t.height/2)):e.aspect=t.width/t.height,e.updateProjectionMatrix(),e.updateMatrixWorld())}function K(e){return(e.eventObject||e.object).uuid+"/"+e.index+e.instanceId}function Q(e,t,n,r){let o=n.get(t);o&&(n.delete(t),0===n.size&&(e.delete(r),o.target.releasePointerCapture(r)))}function ee(e){function t(e){return e.filter(e=>["Move","Over","Enter","Out","Leave"].some(t=>{var n;return null==(n=e.__r3f)?void 0:n.handlers["onPointer"+t]}))}function n(t){let{internal:n}=e.getState();for(let e of n.hovered.values())if(!t.length||!t.find(t=>t.object===e.object&&t.index===e.index&&t.instanceId===e.instanceId)){let r=e.eventObject.__r3f,o=null==r?void 0:r.handlers;if(n.hovered.delete(K(e)),null!=r&&r.eventCount){let n={...e,intersections:t};null==o.onPointerOut||o.onPointerOut(n),null==o.onPointerLeave||o.onPointerLeave(n)}}}function r(e,t){for(let n=0;n<t.length;n++){let r=t[n].__r3f;null==r||null==r.handlers.onPointerMissed||r.handlers.onPointerMissed(e)}}return{handlePointer:function(o){switch(o){case"onPointerLeave":case"onPointerCancel":return()=>n([]);case"onLostPointerCapture":return t=>{let{internal:r}=e.getState();"pointerId"in t&&r.capturedMap.has(t.pointerId)&&requestAnimationFrame(()=>{r.capturedMap.has(t.pointerId)&&(r.capturedMap.delete(t.pointerId),n([]))})}}return function(i){let{onPointerMissed:a,internal:l}=e.getState();l.lastEvent.current=i;let u="onPointerMove"===o,c="onClick"===o||"onContextMenu"===o||"onDoubleClick"===o,f=function(t,n){let r=e.getState(),o=new Set,i=[],a=n?n(r.internal.interaction):r.internal.interaction;for(let e=0;e<a.length;e++){let t=F(a[e]);t&&(t.raycaster.camera=void 0)}r.previousRoot||null==r.events.compute||r.events.compute(t,r);let l=a.flatMap(function(e){let n=F(e);if(!n||!n.events.enabled||null===n.raycaster.camera)return[];if(void 0===n.raycaster.camera){var r;null==n.events.compute||n.events.compute(t,n,null==(r=n.previousRoot)?void 0:r.getState()),void 0===n.raycaster.camera&&(n.raycaster.camera=null)}return n.raycaster.camera?n.raycaster.intersectObject(e,!0):[]}).sort((e,t)=>{let n=F(e.object),r=F(t.object);return n&&r&&r.events.priority-n.events.priority||e.distance-t.distance}).filter(e=>{let t=K(e);return!o.has(t)&&(o.add(t),!0)});for(let e of(r.events.filter&&(l=r.events.filter(l,r)),l)){let t=e.object;for(;t;){var s;null!=(s=t.__r3f)&&s.eventCount&&i.push({...e,eventObject:t}),t=t.parent}}if("pointerId"in t&&r.internal.capturedMap.has(t.pointerId))for(let e of r.internal.capturedMap.get(t.pointerId).values())o.has(K(e.intersection))||i.push(e.intersection);return i}(i,u?t:void 0),d=c?function(t){let{internal:n}=e.getState(),r=t.offsetX-n.initialClick[0],o=t.offsetY-n.initialClick[1];return Math.round(Math.sqrt(r*r+o*o))}(i):0;"onPointerDown"===o&&(l.initialClick=[i.offsetX,i.offsetY],l.initialHits=f.map(e=>e.eventObject)),c&&!f.length&&d<=2&&(r(i,l.interaction),a&&a(i)),u&&n(f),function(t,r,o,i){let a=e.getState();if(t.length){let e={stopped:!1};for(let l of t){let{raycaster:u,pointer:c,camera:f,internal:d}=F(l.object)||a,p=new s.Vector3(c.x,c.y,0).unproject(f),v=e=>{var t,n;return null!=(t=null==(n=d.capturedMap.get(e))?void 0:n.has(l.eventObject))&&t},h=e=>{let t={intersection:l,target:r.target};d.capturedMap.has(e)?d.capturedMap.get(e).set(l.eventObject,t):d.capturedMap.set(e,new Map([[l.eventObject,t]])),r.target.setPointerCapture(e)},m=e=>{let t=d.capturedMap.get(e);t&&Q(d.capturedMap,l.eventObject,t,e)},g={};for(let e in r){let t=r[e];"function"!=typeof t&&(g[e]=t)}let b={...l,...g,pointer:c,intersections:t,stopped:e.stopped,delta:o,unprojectedPoint:p,ray:u.ray,camera:f,stopPropagation(){let o="pointerId"in r&&d.capturedMap.get(r.pointerId);(!o||o.has(l.eventObject))&&(b.stopped=e.stopped=!0,d.hovered.size&&Array.from(d.hovered.values()).find(e=>e.eventObject===l.eventObject)&&n([...t.slice(0,t.indexOf(l)),l]))},target:{hasPointerCapture:v,setPointerCapture:h,releasePointerCapture:m},currentTarget:{hasPointerCapture:v,setPointerCapture:h,releasePointerCapture:m},nativeEvent:r};if(i(b),!0===e.stopped)break}}}(f,i,d,function(e){let t=e.eventObject,n=t.__r3f,a=null==n?void 0:n.handlers;if(null!=n&&n.eventCount){if(u){if(a.onPointerOver||a.onPointerEnter||a.onPointerOut||a.onPointerLeave){let t=K(e),n=l.hovered.get(t);n?n.stopped&&e.stopPropagation():(l.hovered.set(t,e),null==a.onPointerOver||a.onPointerOver(e),null==a.onPointerEnter||a.onPointerEnter(e))}null==a.onPointerMove||a.onPointerMove(e)}else{let n=a[o];n?(!c||l.initialHits.includes(t))&&(r(i,l.interaction.filter(e=>!l.initialHits.includes(e))),n(e)):c&&l.initialHits.includes(t)&&r(i,l.interaction.filter(e=>!l.initialHits.includes(e)))}}})}}}}let et=["set","get","setSize","setFrameloop","setDpr","events","invalidate","advance","size","viewport"],en=e=>!!(null!=e&&e.render),er=u.createContext(null),eo=(e,t)=>{let n=d((n,r)=>{let o;let i=new s.Vector3,a=new s.Vector3,l=new s.Vector3;function c(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r().camera,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:r().size,{width:o,height:u,top:c,left:f}=n,d=o/u;t instanceof s.Vector3?l.copy(t):l.set(...t);let p=e.getWorldPosition(i).distanceTo(l);if(T(e))return{width:o/e.zoom,height:u/e.zoom,top:c,left:f,factor:1,distance:p,aspect:d};{let t=2*Math.tan(e.fov*Math.PI/180/2)*p,n=o/u*t;return{width:n,height:t,top:c,left:f,factor:o/n,distance:p,aspect:d}}}let f=e=>n(t=>({performance:{...t.performance,current:e}})),d=new s.Vector2;return{set:n,get:r,gl:null,camera:null,raycaster:null,events:{priority:1,enabled:!0,connected:!1},xr:null,scene:null,invalidate:function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return e(r(),t)},advance:(e,n)=>t(e,n,r()),legacy:!1,linear:!1,flat:!1,controls:null,clock:new s.Clock,pointer:d,mouse:d,frameloop:"always",onPointerMissed:void 0,performance:{current:1,min:.5,max:1,debounce:200,regress:()=>{let e=r();o&&clearTimeout(o),e.performance.current!==e.performance.min&&f(e.performance.min),o=setTimeout(()=>f(r().performance.max),e.performance.debounce)}},size:{width:0,height:0,top:0,left:0,updateStyle:!1},viewport:{initialDpr:0,dpr:0,width:0,height:0,top:0,left:0,aspect:0,distance:0,factor:0,getCurrentViewport:c},setEvents:e=>n(t=>({...t,events:{...t.events,...e}})),setSize:(e,t,o,i,l)=>{let s=r().camera,u={width:e,height:t,top:i||0,left:l||0,updateStyle:o};n(e=>({size:u,viewport:{...e.viewport,...c(s,a,u)}}))},setDpr:e=>n(t=>{let n=z(e);return{viewport:{...t.viewport,dpr:n,initialDpr:t.viewport.initialDpr||n}}}),setFrameloop:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"always",t=r().clock;t.stop(),t.elapsedTime=0,"never"!==e&&(t.start(),t.elapsedTime=0),n(()=>({frameloop:e}))},previousRoot:void 0,internal:{active:!1,priority:0,frames:0,lastEvent:u.createRef(),interaction:[],hovered:new Map,subscribers:[],initialClick:[0,0],initialHits:[],capturedMap:new Map,subscribe:(e,t,n)=>{let o=r().internal;return o.priority=o.priority+(t>0?1:0),o.subscribers.push({ref:e,priority:t,store:n}),o.subscribers=o.subscribers.sort((e,t)=>e.priority-t.priority),()=>{let n=r().internal;null!=n&&n.subscribers&&(n.priority=n.priority-(t>0?1:0),n.subscribers=n.subscribers.filter(t=>t.ref!==e))}}}}}),r=n.getState(),o=r.size,i=r.viewport.dpr,a=r.camera;return n.subscribe(()=>{let{camera:e,size:t,viewport:r,gl:l,set:s}=n.getState();if(t.width!==o.width||t.height!==o.height||r.dpr!==i){var u;o=t,i=r.dpr,J(e,t),l.setPixelRatio(r.dpr);let n=null!=(u=t.updateStyle)?u:"undefined"!=typeof HTMLCanvasElement&&l.domElement instanceof HTMLCanvasElement;l.setSize(t.width,t.height,n)}e!==a&&(a=e,s(t=>({viewport:{...t.viewport,...t.viewport.getCurrentViewport(e)}})))}),n.subscribe(t=>e(t)),n},ei=new Set,ea=new Set,el=new Set;function es(e,t){if(e.size)for(let{callback:n}of e.values())n(t)}function eu(e,t){switch(e){case"before":return es(ei,t);case"after":return es(ea,t);case"tail":return es(el,t)}}function ec(e,t,n){let a=t.clock.getDelta();for("never"===t.frameloop&&"number"==typeof e&&(a=e-t.clock.elapsedTime,t.clock.oldTime=t.clock.elapsedTime,t.clock.elapsedTime=e),o=t.internal.subscribers,r=0;r<o.length;r++)(i=o[r]).ref.current(i.store.getState(),a,n);return!t.internal.priority&&t.gl.render&&t.gl.render(t.scene,t.camera),t.internal.frames=Math.max(0,t.internal.frames-1),"always"===t.frameloop?1:t.internal.frames}function ef(){let e=u.useContext(er);if(!e)throw Error("R3F: Hooks can only be used within the Canvas component!");return e}function ed(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e=>e,t=arguments.length>1?arguments[1]:void 0;return ef()(e,t)}function ep(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=ef(),r=n.getState().internal.subscribe,o=O(e);return k(()=>r(o,t,n),[t,r,n]),null}let ev=new WeakMap;function eh(e,t){return function(n){for(var r=arguments.length,o=Array(r>1?r-1:0),i=1;i<r;i++)o[i-1]=arguments[i];let a=ev.get(n);return a||(a=new n,ev.set(n,a)),e&&e(a),Promise.all(o.map(e=>new Promise((n,r)=>a.load(e,e=>{e.scene&&Object.assign(e,function(e){let t={nodes:{},materials:{}};return e&&e.traverse(e=>{e.name&&(t.nodes[e.name]=e),e.material&&!t.materials[e.material.name]&&(t.materials[e.material.name]=e.material)}),t}(e.scene)),n(e)},t,t=>r(Error("Could not load ".concat(e,": ").concat(null==t?void 0:t.message))))))).finally(()=>null==a.dispose?void 0:a.dispose())}}function em(e,t,n,r){let o=Array.isArray(t)?t:[t],i=w(eh(n,r),[e,...o],{equal:H.equ});return Array.isArray(t)?i:i[0]}em.preload=function(e,t,n){let r=Array.isArray(t)?t:[t];return _(eh(n),[e,...r])},em.clear=function(e,t){return C([e,...Array.isArray(t)?t:[t]])};let eg=new Map,{invalidate:eb,advance:ey}=function(e){let t,n,r,o=!1;function i(a){for(let s of(n=requestAnimationFrame(i),o=!0,t=0,eu("before",a),e.values())){var l;(r=s.store.getState()).internal.active&&("always"===r.frameloop||r.internal.frames>0)&&!(null!=(l=r.gl.xr)&&l.isPresenting)&&(t+=ec(a,r))}if(eu("after",a),0===t)return eu("tail",a),o=!1,cancelAnimationFrame(n)}return{loop:i,invalidate:function t(n){var r;let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;if(!n)return e.forEach(e=>t(e.store.getState()),a);null!=(r=n.gl.xr)&&r.isPresenting||!n.internal.active||"never"===n.frameloop||(n.internal.frames=Math.min(60,n.internal.frames+a),o||(o=!0,requestAnimationFrame(i)))},advance:function(t){let n=!(arguments.length>1)||void 0===arguments[1]||arguments[1],r=arguments.length>2?arguments[2]:void 0,o=arguments.length>3?arguments[3]:void 0;if(n&&eu("before",t),r)ec(t,r,o);else for(let n of e.values())ec(t,n.store.getState());n&&eu("after",t)}}}(eg),{reconciler:ew,applyProps:e_}=function(e,t){function n(e,t,n){let r,{args:o=[],attach:i,...a}=t,l="".concat(e[0].toUpperCase()).concat(e.slice(1));if("primitive"===e){if(void 0===a.object)throw Error("R3F: Primitives without 'object' are invalid!");r=B(a.object,{type:e,root:n,attach:i,primitive:!0})}else{let t=S[l];if(!t)throw Error("R3F: ".concat(l," is not part of the THREE namespace! Did you forget to extend? See: https://docs.pmnd.rs/react-three-fiber/api/objects#using-3rd-party-objects-declaratively"));if(!Array.isArray(o))throw Error("R3F: The args prop must be an array!");r=B(new t(...o),{type:e,root:n,attach:i,memoizedProps:{args:o}})}return void 0===r.__r3f.attach&&(r instanceof s.BufferGeometry?r.__r3f.attach="geometry":r instanceof s.Material&&(r.__r3f.attach="material")),"inject"!==l&&X(r,a),r}function r(e,t){let n=!1;if(t){var r,o;null!=(r=t.__r3f)&&r.attach?U(e,t,t.__r3f.attach):t.isObject3D&&e.isObject3D&&(e.add(t),n=!0),n||null==(o=e.__r3f)||o.objects.push(t),t.__r3f||B(t,{}),t.__r3f.parent=e,$(t),Z(t)}}function o(e,t,n){let r=!1;if(t){var o,i;if(null!=(o=t.__r3f)&&o.attach)U(e,t,t.__r3f.attach);else if(t.isObject3D&&e.isObject3D){t.parent=e,t.dispatchEvent({type:"added"});let o=e.children.filter(e=>e!==t),i=o.indexOf(n);e.children=[...o.slice(0,i),t,...o.slice(i)],r=!0}r||null==(i=e.__r3f)||i.objects.push(t),t.__r3f||B(t,{}),t.__r3f.parent=e,$(t),Z(t)}}function i(e,t){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];e&&[...e].forEach(e=>a(t,e,n))}function a(e,t,n){if(t){var r,o,a,l,s;t.__r3f&&(t.__r3f.parent=null),null!=(r=e.__r3f)&&r.objects&&(e.__r3f.objects=e.__r3f.objects.filter(e=>e!==t)),null!=(o=t.__r3f)&&o.attach?W(e,t,t.__r3f.attach):t.isObject3D&&e.isObject3D&&(e.remove(t),null!=(l=t.__r3f)&&l.root&&function(e,t){let{internal:n}=e.getState();n.interaction=n.interaction.filter(e=>e!==t),n.initialHits=n.initialHits.filter(e=>e!==t),n.hovered.forEach((e,r)=>{(e.eventObject===t||e.object===t)&&n.hovered.delete(r)}),n.capturedMap.forEach((e,r)=>{Q(n.capturedMap,t,e,r)})}(q(t),t));let u=null==(a=t.__r3f)?void 0:a.primitive,c=!u&&(void 0===n?null!==t.dispose:n);if(u||(i(null==(s=t.__r3f)?void 0:s.objects,t,c),i(t.children,t,c)),delete t.__r3f,c&&t.dispose&&"Scene"!==t.type){let e=()=>{try{t.dispose()}catch(e){}};"undefined"==typeof IS_REACT_ACT_ENVIRONMENT?(0,h.unstable_scheduleCallback)(h.unstable_IdlePriority,e):e()}Z(e)}}let l=()=>console.warn("Text is not allowed in the R3F tree! This could be stray whitespace or characters.");return{reconciler:v()({createInstance:n,removeChild:a,appendChild:r,appendInitialChild:r,insertBefore:o,supportsMutation:!0,isPrimaryRenderer:!1,supportsPersistence:!1,supportsHydration:!1,noTimeout:-1,appendChildToContainer:(e,t)=>{if(!t)return;let n=e.getState().scene;n.__r3f&&(n.__r3f.root=e,r(n,t))},removeChildFromContainer:(e,t)=>{t&&a(e.getState().scene,t)},insertInContainerBefore:(e,t,n)=>{if(!t||!n)return;let r=e.getState().scene;r.__r3f&&o(r,t,n)},getRootHostContext:()=>null,getChildHostContext:e=>e,finalizeInitialChildren(e){var t;return!!(null!=(t=null==e?void 0:e.__r3f)?t:{}).handlers},prepareUpdate(e,t,n,r){var o;if((null!=(o=null==e?void 0:e.__r3f)?o:{}).primitive&&r.object&&r.object!==e)return[!0];{let{args:t=[],children:o,...i}=r,{args:a=[],children:l,...s}=n;if(!Array.isArray(t))throw Error("R3F: the args prop must be an array!");if(t.some((e,t)=>e!==a[t]))return[!0];let u=G(e,i,s,!0);return u.changes.length?[!1,u]:null}},commitUpdate(e,t,o,i,l,s){let[u,c]=t;u?function(e,t,o,i){var l;let s=null==(l=e.__r3f)?void 0:l.parent;if(!s)return;let u=n(t,o,e.__r3f.root);if(e.children){for(let t of e.children)t.__r3f&&r(u,t);e.children=e.children.filter(e=>!e.__r3f)}e.__r3f.objects.forEach(e=>r(u,e)),e.__r3f.objects=[],e.__r3f.autoRemovedBeforeAppend||a(s,e),u.parent&&(u.__r3f.autoRemovedBeforeAppend=!0),r(s,u),u.raycast&&u.__r3f.eventCount&&q(u).getState().internal.interaction.push(u),[i,i.alternate].forEach(e=>{null!==e&&(e.stateNode=u,e.ref&&("function"==typeof e.ref?e.ref(u):e.ref.current=u))})}(e,o,l,s):X(e,c)},commitMount(e,t,n,r){var o;let i=null!=(o=e.__r3f)?o:{};e.raycast&&i.handlers&&i.eventCount&&q(e).getState().internal.interaction.push(e)},getPublicInstance:e=>e,prepareForCommit:()=>null,preparePortalMount:e=>B(e.getState().scene),resetAfterCommit:()=>{},shouldSetTextContent:()=>!1,clearContainer:()=>!1,hideInstance(e){var t;let{attach:n,parent:r}=null!=(t=e.__r3f)?t:{};n&&r&&W(r,e,n),e.isObject3D&&(e.visible=!1),Z(e)},unhideInstance(e,t){var n;let{attach:r,parent:o}=null!=(n=e.__r3f)?n:{};r&&o&&U(o,e,r),(e.isObject3D&&null==t.visible||t.visible)&&(e.visible=!0),Z(e)},createTextInstance:l,hideTextInstance:l,unhideTextInstance:l,getCurrentEventPriority:()=>t?t():c.DefaultEventPriority,beforeActiveInstanceBlur:()=>{},afterActiveInstanceBlur:()=>{},detachDeletedInstance:()=>{},now:"undefined"!=typeof performance&&H.fun(performance.now)?performance.now:H.fun(Date.now)?Date.now:()=>0,scheduleTimeout:H.fun(setTimeout)?setTimeout:void 0,cancelTimeout:H.fun(clearTimeout)?clearTimeout:void 0}),applyProps:X}}(0,function(){var e;let t="undefined"!=typeof self&&self||window;if(!t)return c.DefaultEventPriority;switch(null==(e=t.event)?void 0:e.type){case"click":case"contextmenu":case"dblclick":case"pointercancel":case"pointerdown":case"pointerup":return c.DiscreteEventPriority;case"pointermove":case"pointerout":case"pointerover":case"pointerenter":case"pointerleave":case"wheel":return c.ContinuousEventPriority;default:return c.DefaultEventPriority}}),eC={objects:"shallow",strict:!1},eP=(e,t)=>{let n="function"==typeof e?e(t):e;return en(n)?n:new s.WebGLRenderer({powerPreference:"high-performance",canvas:t,antialias:!0,alpha:!0,...e})};function eS(e){let t,n;let r=eg.get(e),o=null==r?void 0:r.fiber,i=null==r?void 0:r.store;r&&console.warn("R3F.createRoot should only be called once!");let a="function"==typeof reportError?reportError:console.error,l=i||eo(eb,ey),f=o||ew.createContainer(l,c.ConcurrentRoot,null,!1,null,"",a,null);r||eg.set(e,{fiber:f,store:l});let d=!1;return{configure(){var r,o;let i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{gl:a,size:u,scene:c,events:f,onCreated:p,shadows:v=!1,linear:h=!1,flat:m=!1,legacy:g=!1,orthographic:b=!1,frameloop:y="always",dpr:w=[1,2],performance:_,raycaster:C,camera:P,onPointerMissed:S}=i,E=l.getState(),M=E.gl;E.gl||E.set({gl:M=eP(a,e)});let T=E.raycaster;T||E.set({raycaster:T=new s.Raycaster});let{params:x,...k}=C||{};if(H.equ(k,T,eC)||e_(T,{...k}),H.equ(x,T.params,eC)||e_(T,{params:{...T.params,...x}}),!E.camera||E.camera===n&&!H.equ(n,P,eC)){n=P;let e=P instanceof s.Camera,t=e?P:b?new s.OrthographicCamera(0,0,0,0,.1,1e3):new s.PerspectiveCamera(75,0,.1,1e3);e||(t.position.z=5,P&&e_(t,P),E.camera||null!=P&&P.rotation||t.lookAt(0,0,0)),E.set({camera:t}),T.camera=t}if(!E.scene){let e;c instanceof s.Scene?e=c:(e=new s.Scene,c&&e_(e,c)),E.set({scene:B(e)})}if(!E.xr){let e=(e,t)=>{let n=l.getState();"never"!==n.frameloop&&ey(e,!0,n,t)},t=()=>{let t=l.getState();t.gl.xr.enabled=t.gl.xr.isPresenting,t.gl.xr.setAnimationLoop(t.gl.xr.isPresenting?e:null),t.gl.xr.isPresenting||eb(t)},n={connect(){let e=l.getState().gl;e.xr.addEventListener("sessionstart",t),e.xr.addEventListener("sessionend",t)},disconnect(){let e=l.getState().gl;e.xr.removeEventListener("sessionstart",t),e.xr.removeEventListener("sessionend",t)}};"function"==typeof(null==(r=M.xr)?void 0:r.addEventListener)&&n.connect(),E.set({xr:n})}if(M.shadowMap){let e=M.shadowMap.enabled,t=M.shadowMap.type;if(M.shadowMap.enabled=!!v,H.boo(v))M.shadowMap.type=s.PCFSoftShadowMap;else if(H.str(v)){let e={basic:s.BasicShadowMap,percentage:s.PCFShadowMap,soft:s.PCFSoftShadowMap,variance:s.VSMShadowMap};M.shadowMap.type=null!=(o=e[v])?o:s.PCFSoftShadowMap}else H.obj(v)&&Object.assign(M.shadowMap,v);(e!==M.shadowMap.enabled||t!==M.shadowMap.type)&&(M.shadowMap.needsUpdate=!0)}let O=j();O&&("enabled"in O?O.enabled=!g:"legacyMode"in O&&(O.legacyMode=g)),e_(M,{outputEncoding:h?3e3:3001,toneMapping:m?s.NoToneMapping:s.ACESFilmicToneMapping}),E.legacy!==g&&E.set(()=>({legacy:g})),E.linear!==h&&E.set(()=>({linear:h})),E.flat!==m&&E.set(()=>({flat:m})),!a||H.fun(a)||en(a)||H.equ(a,M,eC)||e_(M,a),f&&!E.events.handlers&&E.set({events:f(l)});let A=function(e,t){let n="undefined"!=typeof HTMLCanvasElement&&e instanceof HTMLCanvasElement;if(t){let{width:e,height:r,top:o,left:i,updateStyle:a=n}=t;return{width:e,height:r,top:o,left:i,updateStyle:a}}if("undefined"!=typeof HTMLCanvasElement&&e instanceof HTMLCanvasElement&&e.parentElement){let{width:t,height:r,top:o,left:i}=e.parentElement.getBoundingClientRect();return{width:t,height:r,top:o,left:i,updateStyle:n}}return"undefined"!=typeof OffscreenCanvas&&e instanceof OffscreenCanvas?{width:e.width,height:e.height,top:0,left:0,updateStyle:n}:{width:0,height:0,top:0,left:0}}(e,u);return H.equ(A,E.size,eC)||E.setSize(A.width,A.height,A.updateStyle,A.top,A.left),w&&E.viewport.dpr!==z(w)&&E.setDpr(w),E.frameloop!==y&&E.setFrameloop(y),E.onPointerMissed||E.set({onPointerMissed:S}),_&&!H.equ(_,E.performance,eC)&&E.set(e=>({performance:{...e.performance,..._}})),t=p,d=!0,this},render(n){return d||this.configure(),ew.updateContainer(u.createElement(eE,{store:l,children:n,onCreated:t,rootElement:e}),f,null,()=>void 0),l},unmount(){eM(e)}}}function eE(e){let{store:t,children:n,onCreated:r,rootElement:o}=e;return k(()=>{let e=t.getState();e.set(e=>({internal:{...e.internal,active:!0}})),r&&r(e),t.getState().events.connected||null==e.events.connect||e.events.connect(o)},[]),u.createElement(er.Provider,{value:t},n)}function eM(e,t){let n=eg.get(e),r=null==n?void 0:n.fiber;if(r){let o=null==n?void 0:n.store.getState();o&&(o.internal.active=!1),ew.updateContainer(null,r,null,()=>{o&&setTimeout(()=>{try{var n,r,i,a;null==o.events.disconnect||o.events.disconnect(),null==(n=o.gl)||null==(r=n.renderLists)||null==r.dispose||r.dispose(),null==(i=o.gl)||null==i.forceContextLoss||i.forceContextLoss(),null!=(a=o.gl)&&a.xr&&o.xr.disconnect(),function(e){for(let t in e.dispose&&"Scene"!==e.type&&e.dispose(),e)null==t.dispose||t.dispose(),delete e[t]}(o),eg.delete(e),t&&t(e)}catch(e){}},500)})}}function ej(e,t,n){return u.createElement(eT,{key:t.uuid,children:e,container:t,state:n})}function eT(e){let{state:t={},children:n,container:r}=e,{events:o,size:i,...a}=t,l=ef(),[c]=u.useState(()=>new s.Raycaster),[f]=u.useState(()=>new s.Vector2),p=u.useCallback((e,t)=>{let n;let u={...e};if(Object.keys(e).forEach(n=>{(et.includes(n)||e[n]!==t[n]&&t[n])&&delete u[n]}),t&&i){let r=t.camera;n=e.viewport.getCurrentViewport(r,new s.Vector3,i),r!==e.camera&&J(r,i)}return{...u,scene:r,raycaster:c,pointer:f,mouse:f,previousRoot:l,events:{...e.events,...null==t?void 0:t.events,...o},size:{...e.size,...i},viewport:{...e.viewport,...n},...a}},[t]),[v]=u.useState(()=>{let e=l.getState();return d((t,n)=>({...e,scene:r,raycaster:c,pointer:f,mouse:f,previousRoot:l,events:{...e.events,...o},size:{...e.size,...i},...a,set:t,get:n,setEvents:e=>t(t=>({...t,events:{...t.events,...e}}))}))});return u.useEffect(()=>{let e=l.subscribe(e=>v.setState(t=>p(e,t)));return()=>{e(),v.destroy()}},[]),u.useEffect(()=>{v.setState(e=>p(l.getState(),e))},[p]),u.createElement(u.Fragment,null,ew.createPortal(u.createElement(er.Provider,{value:v},n),v,null))}ew.injectIntoDevTools({bundleType:0,rendererPackageName:"@react-three/fiber",version:u.version}),u.unstable_act},9079:function(e,t,n){var r,o;e.exports=(null==(r=n.g.process)?void 0:r.env)&&"object"==typeof(null==(o=n.g.process)?void 0:o.env)?n.g.process:n(3127)},3127:function(e){!function(){var t={229:function(e){var t,n,r,o=e.exports={};function i(){throw Error("setTimeout has not been defined")}function a(){throw Error("clearTimeout has not been defined")}function l(e){if(t===setTimeout)return setTimeout(e,0);if((t===i||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:i}catch(e){t=i}try{n="function"==typeof clearTimeout?clearTimeout:a}catch(e){n=a}}();var s=[],u=!1,c=-1;function f(){u&&r&&(u=!1,r.length?s=r.concat(s):c=-1,s.length&&d())}function d(){if(!u){var e=l(f);u=!0;for(var t=s.length;t;){for(r=s,s=[];++c<t;)r&&r[c].run();c=-1,t=s.length}r=null,u=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===a||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function v(){}o.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];s.push(new p(e,t)),1!==s.length||u||l(d)},p.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=v,o.addListener=v,o.once=v,o.off=v,o.removeListener=v,o.removeAllListeners=v,o.emit=v,o.prependListener=v,o.prependOnceListener=v,o.listeners=function(e){return[]},o.binding=function(e){throw Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw Error("process.chdir is not supported")},o.umask=function(){return 0}}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var i=n[e]={exports:{}},a=!0;try{t[e](i,i.exports,r),a=!1}finally{a&&delete n[e]}return i.exports}r.ab="//";var o=r(229);e.exports=o}()},8025:function(e,t){/**
 * @license React
 * react-reconciler-constants.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */t.ConcurrentRoot=1,t.ContinuousEventPriority=4,t.DefaultEventPriority=16,t.DiscreteEventPriority=1},7777:function(e,t,n){e.exports=n(8025)},4812:function(e,t,n){e.exports=n(5224)},1803:function(e,t){/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function n(e,t){var n=e.length;for(e.push(t);0<n;){var r=n-1>>>1,o=e[r];if(0<i(o,t))e[r]=t,e[n]=o,n=r;else break}}function r(e){return 0===e.length?null:e[0]}function o(e){if(0===e.length)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;for(var r=0,o=e.length,a=o>>>1;r<a;){var l=2*(r+1)-1,s=e[l],u=l+1,c=e[u];if(0>i(s,n))u<o&&0>i(c,s)?(e[r]=c,e[u]=n,r=u):(e[r]=s,e[l]=n,r=l);else if(u<o&&0>i(c,n))e[r]=c,e[u]=n,r=u;else break}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}if("object"==typeof performance&&"function"==typeof performance.now){var a,l=performance;t.unstable_now=function(){return l.now()}}else{var s=Date,u=s.now();t.unstable_now=function(){return s.now()-u}}var c=[],f=[],d=1,p=null,v=3,h=!1,m=!1,g=!1,b="function"==typeof setTimeout?setTimeout:null,y="function"==typeof clearTimeout?clearTimeout:null,w="undefined"!=typeof setImmediate?setImmediate:null;function _(e){for(var t=r(f);null!==t;){if(null===t.callback)o(f);else if(t.startTime<=e)o(f),t.sortIndex=t.expirationTime,n(c,t);else break;t=r(f)}}function C(e){if(g=!1,_(e),!m){if(null!==r(c))m=!0,R(P);else{var t=r(f);null!==t&&I(C,t.startTime-e)}}}function P(e,n){m=!1,g&&(g=!1,y(M),M=-1),h=!0;var i=v;try{for(_(n),p=r(c);null!==p&&(!(p.expirationTime>n)||e&&!x());){var a=p.callback;if("function"==typeof a){p.callback=null,v=p.priorityLevel;var l=a(p.expirationTime<=n);n=t.unstable_now(),"function"==typeof l?p.callback=l:p===r(c)&&o(c),_(n)}else o(c);p=r(c)}if(null!==p)var s=!0;else{var u=r(f);null!==u&&I(C,u.startTime-n),s=!1}return s}finally{p=null,v=i,h=!1}}"undefined"!=typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);var S=!1,E=null,M=-1,j=5,T=-1;function x(){return!(t.unstable_now()-T<j)}function k(){if(null!==E){var e=t.unstable_now();T=e;var n=!0;try{n=E(!0,e)}finally{n?a():(S=!1,E=null)}}else S=!1}if("function"==typeof w)a=function(){w(k)};else if("undefined"!=typeof MessageChannel){var O=new MessageChannel,A=O.port2;O.port1.onmessage=k,a=function(){A.postMessage(null)}}else a=function(){b(k,0)};function R(e){E=e,S||(S=!0,a())}function I(e,n){M=b(function(){e(t.unstable_now())},n)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(e){e.callback=null},t.unstable_continueExecution=function(){m||h||(m=!0,R(P))},t.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):j=0<e?Math.floor(1e3/e):5},t.unstable_getCurrentPriorityLevel=function(){return v},t.unstable_getFirstCallbackNode=function(){return r(c)},t.unstable_next=function(e){switch(v){case 1:case 2:case 3:var t=3;break;default:t=v}var n=v;v=t;try{return e()}finally{v=n}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=v;v=e;try{return t()}finally{v=n}},t.unstable_scheduleCallback=function(e,o,i){var a=t.unstable_now();switch(i="object"==typeof i&&null!==i&&"number"==typeof(i=i.delay)&&0<i?a+i:a,e){case 1:var l=-1;break;case 2:l=250;break;case 5:l=1073741823;break;case 4:l=1e4;break;default:l=5e3}return l=i+l,e={id:d++,callback:o,priorityLevel:e,startTime:i,expirationTime:l,sortIndex:-1},i>a?(e.sortIndex=i,n(f,e),null===r(c)&&e===r(f)&&(g?(y(M),M=-1):g=!0,I(C,i-a))):(e.sortIndex=l,n(c,e),m||h||(m=!0,R(P))),e},t.unstable_shouldYield=x,t.unstable_wrapCallback=function(e){var t=v;return function(){var n=v;v=t;try{return e.apply(this,arguments)}finally{v=n}}}},9514:function(e,t,n){e.exports=n(1803)},2110:function(e,t,n){n.d(t,{Z:function(){return r}});function r(){return(r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}}}]);