"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[460],{885:function(e,t,r){r.d(t,{c:function(){return i}});var n=r(2110),u=r(4090),a=r(7315),l=r(6376);let o=e=>"function"==typeof e,i=u.forwardRef((e,t)=>{let{envMap:r,resolution:i=256,frames:c=1/0,makeDefault:s,children:f,...d}=e,m=(0,a.A)(e=>{let{set:t}=e;return t}),p=(0,a.A)(e=>{let{camera:t}=e;return t}),g=(0,a.A)(e=>{let{size:t}=e;return t}),v=u.useRef(null);u.useImperativeHandle(t,()=>v.current,[]);let E=u.useRef(null),h=function(e,t,r){let n=(0,a.A)(e=>e.size),o=(0,a.A)(e=>e.viewport),i="number"==typeof e?e:n.width*o.dpr,c="number"==typeof t?t:n.height*o.dpr,{samples:s=0,depth:f,...d}=("number"==typeof e?void 0:e)||{},m=u.useMemo(()=>{let e=new l.WebGLRenderTarget(i,c,{minFilter:l.LinearFilter,magFilter:l.LinearFilter,type:l.HalfFloatType,...d});return f&&(e.depthTexture=new l.DepthTexture(i,c,l.FloatType)),e.samples=s,e},[]);return u.useLayoutEffect(()=>{m.setSize(i,c),s&&(m.samples=s)},[s,m,i,c]),u.useEffect(()=>()=>m.dispose(),[]),m}(i);u.useLayoutEffect(()=>{d.manual||(v.current.aspect=g.width/g.height)},[g,d]),u.useLayoutEffect(()=>{v.current.updateProjectionMatrix()});let b=0,y=null,w=o(f);return(0,a.C)(e=>{w&&(c===1/0||b<c)&&(E.current.visible=!1,e.gl.setRenderTarget(h),y=e.scene.background,r&&(e.scene.background=r),e.gl.render(e.scene,v.current),e.scene.background=y,e.gl.setRenderTarget(null),E.current.visible=!0,b++)}),u.useLayoutEffect(()=>{if(s)return m(()=>({camera:v.current})),()=>m(()=>({camera:p}))},[v,s,m]),u.createElement(u.Fragment,null,u.createElement("perspectiveCamera",(0,n.Z)({ref:v},d),!w&&f),u.createElement("group",{ref:E},w&&f(h.texture)))})},1054:function(e,t,r){r.d(t,{G:function(){return h}});var n=r(2110),u=r(4090),a=r(6376),l=r(7315),o=r(4220);let i=e=>e&&e.isOrthographicCamera,c=new a.Color,s=(0,o.Z)();function f(e,t){let{right:r,top:n,left:u,bottom:a,width:l,height:o}=t,i=t.bottom<0||n>e.height||r<0||t.left>e.width;if("top"in e){let t=e.top+e.height;return{position:{width:l,height:o,left:u-e.left,top:n,bottom:t-a,right:r},isOffscreen:i}}return{position:{width:l,height:o,top:n,left:u,bottom:e.height-a,right:r},isOffscreen:i}}function d(e,t){let r,{left:n,bottom:u,width:a,height:l}=t,o=a/l;return i(e.camera)?(e.camera.left!==-(a/2)||e.camera.right!==a/2||e.camera.top!==l/2||e.camera.bottom!==-(l/2))&&(Object.assign(e.camera,{left:-(a/2),right:a/2,top:l/2,bottom:-(l/2)}),e.camera.updateProjectionMatrix()):e.camera.aspect!==o&&(e.camera.aspect=o,e.camera.updateProjectionMatrix()),r=e.gl.autoClear,e.gl.autoClear=!1,e.gl.setViewport(n,u,a,l),e.gl.setScissor(n,u,a,l),e.gl.setScissorTest(!0),r}function m(e,t){e.gl.setScissorTest(!1),e.gl.autoClear=t}function p(e){e.gl.getClearColor(c),e.gl.setClearColor(c,e.gl.getClearAlpha()),e.gl.clear(!0,!0)}function g(e){let{visible:t=!0,canvasSize:r,scene:n,index:a,children:o,frames:i,rect:c,track:s}=e,g=(0,l.A)(),[v,E]=u.useState(!1),h=0;return(0,l.C)(e=>{if(i===1/0||h<=i){var u;c.current=null==(u=s.current)?void 0:u.getBoundingClientRect(),h++}if(c.current){let{position:u,isOffscreen:a}=f(r,c.current);if(v!==a&&E(a),t&&!v&&c.current){let t=d(e,u);e.gl.render(o?e.scene:n,e.camera),m(e,t)}}},a),u.useLayoutEffect(()=>{let e=c.current;if(e&&(!t||!v)){let{position:t}=f(r,e),n=d(g,t);p(g),m(g,n)}},[t,v]),u.useEffect(()=>{let e=c.current,t=g.get().events.connected;return g.setEvents({connected:s.current}),()=>{if(e){let{position:t}=f(r,e),n=d(g,t);p(g),m(g,n)}g.setEvents({connected:t})}},[]),u.useEffect(()=>{"top"in r||console.warn("Detected @react-three/fiber canvas size does not include position information. <View /> may not work as expected. Upgrade to @react-three/fiber ^8.1.0 for support.\n See https://github.com/pmndrs/drei/issues/944")},[]),u.createElement(u.Fragment,null,o,u.createElement("group",{onPointerOver:()=>null}))}let v=u.forwardRef((e,t)=>{var r,o,i,c;let{track:s,visible:f=!0,index:d=1,id:m,style:p,className:v,frames:E=1/0,children:h,...b}=e,y=u.useRef(null),{size:w,scene:S}=(0,l.A)(),[C]=u.useState(()=>new a.Scene),[R,x]=u.useReducer(()=>!0,!1),T=u.useCallback((e,t)=>{if(y.current&&s.current&&e.target===s.current){let{width:r,height:n,left:u,top:a}=y.current,l=e.clientX-u,o=e.clientY-a;t.pointer.set(l/r*2-1,-(o/n*2)+1),t.raycaster.setFromCamera(t.pointer,t.camera)}},[y,s]);return u.useEffect(()=>{var e;y.current=null==(e=s.current)?void 0:e.getBoundingClientRect(),x()},[s]),u.createElement("group",(0,n.Z)({ref:t},b),R&&(0,l.g)(u.createElement(g,{visible:f,canvasSize:w,frames:E,scene:S,track:s,rect:y,index:d},h),C,{events:{compute:T,priority:d},size:{width:null==(r=y.current)?void 0:r.width,height:null==(o=y.current)?void 0:o.height,top:null==(i=y.current)?void 0:i.top,left:null==(c=y.current)?void 0:c.left}}))}),E=u.forwardRef((e,t)=>{let{as:r="div",id:a,visible:l,className:o,style:i,index:c=1,track:f,frames:d=1/0,children:m,...p}=e,g=u.useId(),E=u.useRef(null);return u.useImperativeHandle(t,()=>E.current),u.createElement(u.Fragment,null,u.createElement(r,(0,n.Z)({ref:E,id:a,className:o,style:i},p)),u.createElement(s.In,null,u.createElement(v,{visible:l,key:g,track:E,frames:d,index:c},m)))}),h=u.forwardRef((e,t)=>u.useContext(l.f)?u.createElement(v,(0,n.Z)({ref:t},e)):u.createElement(E,(0,n.Z)({ref:t},e)));h.Port=()=>u.createElement(s.Out,null)},4220:function(e,t,r){r.d(t,{Z:function(){return v}});var n,u,a=r(4090);let l=e=>{let t;let r=new Set,n=(e,n)=>{let u="function"==typeof e?e(t):e;if(!Object.is(u,t)){let e=t;t=(null!=n?n:"object"!=typeof u||null===u)?u:Object.assign({},t,u),r.forEach(r=>r(t,e))}},u=()=>t,a={setState:n,getState:u,getInitialState:()=>l,subscribe:e=>(r.add(e),()=>r.delete(e)),destroy:()=>{console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),r.clear()}},l=t=e(n,u,a);return a},o=e=>e?l(e):l;var i=r(9292);let{useDebugValue:c}=a,{useSyncExternalStoreWithSelector:s}=i,f=!1,d=e=>e,m=e=>{"function"!=typeof e&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");let t="function"==typeof e?o(e):e,r=(e,r)=>(function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:d,r=arguments.length>2?arguments[2]:void 0;r&&!f&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),f=!0);let n=s(e.subscribe,e.getState,e.getServerState||e.getInitialState,t,r);return c(n),n})(t,e,r);return Object.assign(r,t),r},p=e=>e?m(e):m,g=null!=(n=window.document)&&n.createElement||(null==(u=window.navigator)?void 0:u.product)==="ReactNative"?a.useLayoutEffect:a.useEffect;function v(){let e=p(e=>({current:[],version:0,set:e}));return{In:t=>{let{children:r}=t,n=e(e=>e.set),u=e(e=>e.version);return g(()=>{n(e=>({version:e.version+1}))},[]),g(()=>(n(e=>{let{current:t}=e;return{current:[...t,r]}}),()=>n(e=>{let{current:t}=e;return{current:t.filter(e=>e!==r)}})),[r,u]),null},Out:()=>{let t=e(e=>e.current);return a.createElement(a.Fragment,null,t)}}}},699:function(e,t,r){/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=r(4090),u="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},a=n.useState,l=n.useEffect,o=n.useLayoutEffect,i=n.useDebugValue;function c(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!u(e,r)}catch(e){return!0}}var s=void 0===window.document||void 0===window.document.createElement?function(e,t){return t()}:function(e,t){var r=t(),n=a({inst:{value:r,getSnapshot:t}}),u=n[0].inst,s=n[1];return o(function(){u.value=r,u.getSnapshot=t,c(u)&&s({inst:u})},[e,r,t]),l(function(){return c(u)&&s({inst:u}),e(function(){c(u)&&s({inst:u})})},[e]),i(r),r};t.useSyncExternalStore=void 0!==n.useSyncExternalStore?n.useSyncExternalStore:s},220:function(e,t,r){/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=r(4090),u=r(2362),a="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},l=u.useSyncExternalStore,o=n.useRef,i=n.useEffect,c=n.useMemo,s=n.useDebugValue;t.useSyncExternalStoreWithSelector=function(e,t,r,n,u){var f=o(null);if(null===f.current){var d={hasValue:!1,value:null};f.current=d}else d=f.current;var m=l(e,(f=c(function(){function e(e){if(!i){if(i=!0,l=e,e=n(e),void 0!==u&&d.hasValue){var t=d.value;if(u(t,e))return o=t}return o=e}if(t=o,a(l,e))return t;var r=n(e);return void 0!==u&&u(t,r)?t:(l=e,o=r)}var l,o,i=!1,c=void 0===r?null:r;return[function(){return e(t())},null===c?void 0:function(){return e(c())}]},[t,r,n,u]))[0],f[1]);return i(function(){d.hasValue=!0,d.value=m},[m]),s(m),m}},2362:function(e,t,r){e.exports=r(699)},9292:function(e,t,r){e.exports=r(220)}}]);