"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[3573],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>d});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u=r.createContext({}),s=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(u.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},h=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),h=s(t),d=i,f=h["".concat(u,".").concat(d)]||h[d]||c[d]||a;return t?r.createElement(f,l(l({ref:n},p),{},{components:t})):r.createElement(f,l({ref:n},p))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,l=new Array(a);l[0]=h;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var s=2;s<a;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}h.displayName="MDXCreateElement"},66188:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>u});var r=t(87462),i=(t(67294),t(3905));const a={title:"The Implementation of Plugin Runner"},l=void 0,o={unversionedId:"internal/plugin-runner",id:"version-3.4/internal/plugin-runner",isDocsHomePage:!1,title:"The Implementation of Plugin Runner",description:"Each request which runs the extern plugin will trigger an RPC to Plugin Runner over a connection on Unix socket. The data of RPC are serialized with Flatbuffers.",source:"@site/docs-apisix_versioned_docs/version-3.4/internal/plugin-runner.md",sourceDirName:"internal",slug:"/internal/plugin-runner",permalink:"/zh/docs/apisix/3.4/internal/plugin-runner",editUrl:"/zh/edit#https://github.com/apache/apisix/edit/release/3.4/docs/zh/latest/internal/plugin-runner.md",tags:[],version:"3.4",frontMatter:{title:"The Implementation of Plugin Runner"},sidebar:"version-3.4/docs",previous:{title:"Wasm",permalink:"/zh/docs/apisix/3.4/wasm"},next:{title:"Introducing APISIX's testing framework",permalink:"/zh/docs/apisix/3.4/internal/testing-framework"}},u=[{value:"Prerequirement",id:"prerequirement",children:[]},{value:"Listening to the Path",id:"listening-to-the-path",children:[]},{value:"Register Plugins",id:"register-plugins",children:[]},{value:"Handle RPC",id:"handle-rpc",children:[{value:"Handle PrepareConf",id:"handle-prepareconf",children:[]},{value:"Handle HTTPReqCall",id:"handle-httpreqcall",children:[]}]}],s={toc:u};function p(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"prerequirement"},"Prerequirement"),(0,i.kt)("p",null,"Each request which runs the extern plugin will trigger an RPC to Plugin Runner over a connection on Unix socket. The data of RPC are serialized with ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/google/flatbuffers"},"Flatbuffers"),"."),(0,i.kt)("p",null,"Therefore, the Plugin Runner needs to:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"handle a connection on Unix socket"),(0,i.kt)("li",{parentName:"ol"},"support Flatbuffers"),(0,i.kt)("li",{parentName:"ol"},"use the proto & generated code in ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/api7/ext-plugin-proto/"},"https://github.com/api7/ext-plugin-proto/"))),(0,i.kt)("h2",{id:"listening-to-the-path"},"Listening to the Path"),(0,i.kt)("p",null,"APISIX will pass the path of Unix socket as an environment variable ",(0,i.kt)("inlineCode",{parentName:"p"},"APISIX_LISTEN_ADDRESS")," to the Plugin Runner. So the runner needs to read the value and listen to that address during starting."),(0,i.kt)("h2",{id:"register-plugins"},"Register Plugins"),(0,i.kt)("p",null,"The Plugin Runner should be able to load plugins written in the particular language."),(0,i.kt)("h2",{id:"handle-rpc"},"Handle RPC"),(0,i.kt)("p",null,"There are two kinds of RPC: PrepareConf & HTTPReqCall"),(0,i.kt)("h3",{id:"handle-prepareconf"},"Handle PrepareConf"),(0,i.kt)("p",null,"As people can configure the extern plugin on the side of APISIX, we need a way to sync the plugin configuration to the Plugin Runner."),(0,i.kt)("p",null,"When there is a configuration that needs to sync to the Plugin Runner, we will send it via the PrepareConf RPC call. The Plugin Runner should be able to handle the call and store the configuration in a cache, then returns a unique conf token that represents the configuration."),(0,i.kt)("p",null,"In the previous design, an idempotent key is sent with the configuration. This field is deprecated and the Plugin Runner can safely ignore it."),(0,i.kt)("p",null,"Requests run plugins with particular configuration will bear a particular conf token in the RPC call, and the Plugin Runner is expected to look up actual configuration via the token."),(0,i.kt)("p",null,"When the configuration is modified, APISIX will send a new PrepareConf to the Plugin Runner. Currently, there is no way to notify the Plugin Runner that a configuration is removed. Therefore, we introduce another environment variable ",(0,i.kt)("inlineCode",{parentName:"p"},"APISIX_CONF_EXPIRE_TIME")," as the conf cache expire time. The Plugin Runner should be able to cache the conf slightly longer than ",(0,i.kt)("inlineCode",{parentName:"p"},"APISIX_CONF_EXPIRE_TIME"),", and APISIX will send another PrepareConf to refresh the cache if the configuration is still existing after ",(0,i.kt)("inlineCode",{parentName:"p"},"APISIX_CONF_EXPIRE_TIME")," seconds."),(0,i.kt)("h3",{id:"handle-httpreqcall"},"Handle HTTPReqCall"),(0,i.kt)("p",null,"Each request which runs the extern plugin will trigger the HTTPReqCall. The HTTPReqCall is almost a serialized version of HTTP request, plus a conf token. The Plugin Runner is expected to tell APISIX what to update by the response of HTTPReqCall RPC call."),(0,i.kt)("p",null,"Sometimes the plugin in the Plugin Runner needs to know some information that is not part of the HTTPReqCall request, such as the request start time and the route ID in APISIX. Hence the Plugin Runner needs to reply to an ",(0,i.kt)("inlineCode",{parentName:"p"},"ExtraInfo")," message as the response on the connection which sends the HTTPReqCall request. APISIX will read the ",(0,i.kt)("inlineCode",{parentName:"p"},"ExtraInfo")," message and return the asked information."),(0,i.kt)("p",null,"Currently, the information below is passed by ",(0,i.kt)("inlineCode",{parentName:"p"},"ExtraInfo"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"variable value"),(0,i.kt)("li",{parentName:"ul"},"request body")),(0,i.kt)("p",null,"The flow of HTTPReqCall procession is:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"APISIX sends HTTPReqCall\nPlugin Runner looks up the plugin configuration by the token in HTTPReqCall\n(optional) loop:\n\xa0 \xa0 Plugin Runner asks for ExtraInfo\n\xa0 \xa0 APISIX replies the ExtraInfo\nPlugin Runner replies HTTPReqCall\n")))}p.isMDXComponent=!0}}]);