"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[51917],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=p(r),m=i,y=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(y,a(a({ref:t},s),{},{components:r})):n.createElement(y,a({ref:t},s))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var p=2;p<o;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},13167:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>a,default:()=>s,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var n=r(87462),i=(r(67294),r(3905));const o={title:"Script"},a=void 0,c={unversionedId:"terminology/script",id:"version-3.6/terminology/script",isDocsHomePage:!1,title:"Script",description:"Scripts lets you write arbitrary Lua code or directly call existing plugins and execute them during the HTTP request/response lifecycle.",source:"@site/docs-apisix_versioned_docs/version-3.6/terminology/script.md",sourceDirName:"terminology",slug:"/terminology/script",permalink:"/docs/apisix/terminology/script",editUrl:"/edit#https://github.com/apache/apisix/edit/release/3.6/docs/en/latest/terminology/script.md",tags:[],version:"3.6",frontMatter:{title:"Script"},sidebar:"version-3.6/docs",previous:{title:"Router",permalink:"/docs/apisix/terminology/router"},next:{title:"Service",permalink:"/docs/apisix/terminology/service"}},l=[{value:"Description",id:"description",children:[]}],p={toc:l};function s(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("p",null,"Scripts lets you write arbitrary Lua code or directly call existing plugins and execute them during the HTTP request/response lifecycle."),(0,i.kt)("p",null,"A Script configuration can be directly bound to a ",(0,i.kt)("a",{parentName:"p",href:"/docs/apisix/terminology/route"},"Route"),"."),(0,i.kt)("p",null,"Scripts and ",(0,i.kt)("a",{parentName:"p",href:"/docs/apisix/terminology/plugin"},"Plugins")," are mutually exclusive, and a Script is executed before a Plugin. This means that after configuring a Script, the Plugin configured on the Route will ",(0,i.kt)("strong",{parentName:"p"},"not")," be executed."),(0,i.kt)("p",null,"Scripts also have a concept of execution phase which supports the ",(0,i.kt)("inlineCode",{parentName:"p"},"access"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"header_filter"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"body_filter"),", and the ",(0,i.kt)("inlineCode",{parentName:"p"},"log")," phase. The corresponding phase will be executed automatically by the system in the Script."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    ...\n    "script": "local _M = {} \\n function _M.access(api_ctx) \\n ngx.log(ngx.INFO,\\"hit access phase\\") \\n end \\nreturn _M"\n}\n')))}s.isMDXComponent=!0}}]);