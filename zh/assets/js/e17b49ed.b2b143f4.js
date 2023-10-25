"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[55719],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>u});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=l(n),u=i,f=m["".concat(p,".").concat(u)]||m[u]||d[u]||a;return n?r.createElement(f,o(o({ref:t},s),{},{components:n})):r.createElement(f,o({ref:t},s))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},29301:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>o,default:()=>s,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var r=n(87462),i=(n(67294),n(3905));const a={title:"Service",keywords:["API \u7f51\u5173","Apache APISIX","Router"],description:"\u672c\u6587\u4ecb\u7ecd\u4e86 Apache APISIX Service \u5bf9\u8c61\u7684\u6982\u5ff5\u53ca\u5176\u4f7f\u7528\u65b9\u6cd5\u3002"},o=void 0,c={unversionedId:"terminology/service",id:"version-3.6/terminology/service",isDocsHomePage:!1,title:"Service",description:"\u672c\u6587\u4ecb\u7ecd\u4e86 Apache APISIX Service \u5bf9\u8c61\u7684\u6982\u5ff5\u53ca\u5176\u4f7f\u7528\u65b9\u6cd5\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs-docs-apisix/version-3.6/terminology/service.md",sourceDirName:"terminology",slug:"/terminology/service",permalink:"/zh/docs/apisix/terminology/service",editUrl:"/zh/edit#https://github.com/apache/apisix/edit/release/3.6/docs/zh/latest/terminology/service.md",tags:[],version:"3.6",frontMatter:{title:"Service",keywords:["API \u7f51\u5173","Apache APISIX","Router"],description:"\u672c\u6587\u4ecb\u7ecd\u4e86 Apache APISIX Service \u5bf9\u8c61\u7684\u6982\u5ff5\u53ca\u5176\u4f7f\u7528\u65b9\u6cd5\u3002"},sidebar:"version-3.6/docs",previous:{title:"Script",permalink:"/zh/docs/apisix/terminology/script"},next:{title:"Upstream",permalink:"/zh/docs/apisix/terminology/upstream"}},p=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",children:[]},{value:"\u914d\u7f6e\u793a\u4f8b",id:"\u914d\u7f6e\u793a\u4f8b",children:[]}],l={toc:p};function s(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,i.kt)("p",null,"Service\uff08\u4e5f\u79f0\u4e4b\u4e3a\u670d\u52a1\uff09\u662f\u67d0\u7c7b API \u7684\u62bd\u8c61\uff08\u4e5f\u53ef\u4ee5\u7406\u89e3\u4e3a\u4e00\u7ec4 Route \u7684\u62bd\u8c61\uff09\u3002\u5b83\u901a\u5e38\u4e0e\u4e0a\u6e38\u670d\u52a1\u62bd\u8c61\u662f\u4e00\u4e00\u5bf9\u5e94\u7684\uff0c\u4f46\u4e0e\u8def\u7531\u4e4b\u95f4\uff0c\u901a\u5e38\u662f 1:N \u5373\u4e00\u5bf9\u591a\u7684\u5173\u7cfb\u3002\u53c2\u770b\u4e0b\u56fe\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix/release/3.6/docs/assets/images/service-example.png",alt:"\u670d\u52a1\u793a\u4f8b"})),(0,i.kt)("p",null,"\u4e0d\u540c\u8def\u7531\u89c4\u5219\u540c\u65f6\u7ed1\u5b9a\u5230\u4e00\u4e2a\u670d\u52a1\u4e0a\uff0c\u8fd9\u4e9b\u8def\u7531\u5c06\u5177\u6709\u76f8\u540c\u7684\u4e0a\u6e38\u548c\u63d2\u4ef6\u914d\u7f6e\uff0c\u51cf\u5c11\u5197\u4f59\u914d\u7f6e\u3002\u5f53\u8def\u7531\u548c\u670d\u52a1\u90fd\u5f00\u542f\u540c\u4e00\u4e2a\u63d2\u4ef6\u65f6\uff0c\u8def\u7531\u4e2d\u7684\u63d2\u4ef6\u4f18\u5148\u7ea7\u9ad8\u4e8e\u670d\u52a1\u4e2d\u7684\u63d2\u4ef6\u3002\u5173\u4e8e\u63d2\u4ef6\u4f18\u5148\u7ea7\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u8003 ",(0,i.kt)("a",{parentName:"p",href:"/zh/docs/apisix/terminology/plugin"},"Plugin"),"\u3002"),(0,i.kt)("p",null,"\u66f4\u591a\u5173\u4e8e Service \u7684\u4fe1\u606f\uff0c\u8bf7\u53c2\u8003 ",(0,i.kt)("a",{parentName:"p",href:"/zh/docs/apisix/admin-api#service"},"Admin API \u7684 Service \u5bf9\u8c61"),"\u3002"),(0,i.kt)("h2",{id:"\u914d\u7f6e\u793a\u4f8b"},"\u914d\u7f6e\u793a\u4f8b"),(0,i.kt)("p",null,"\u4ee5\u4e0b\u793a\u4f8b\u521b\u5efa\u4e86\u4e00\u4e2a\u542f\u7528\u9650\u6d41\u63d2\u4ef6\u7684\u670d\u52a1\uff0c\u5e76\u4e14\u5c06\u8be5\u670d\u52a1\u7ed1\u5b9a\u5230 ID \u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"100")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"101")," \u7684\u8def\u7531\u4e0a\u3002"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u521b\u5efa\u670d\u52a1\u3002"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/services/200 \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "plugins": {\n        "limit-count": {\n            "count": 2,\n            "time_window": 60,\n            "rejected_code": 503,\n            "key": "remote_addr"\n        }\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\'\n'))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u521b\u5efa ID \u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"100")," \u7684\u8def\u7531\uff0c\u5e76\u7ed1\u5b9a ID \u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"200")," \u7684\u670d\u52a1\u3002"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/100 \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "methods": ["GET"],\n    "uri": "/index.html",\n    "service_id": "200"\n}\'\n'))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u521b\u5efa ID \u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"101")," \u7684\u8def\u7531\uff0c\u5e76\u7ed1\u5b9a ID \u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"200")," \u7684\u670d\u52a1\u3002"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/101 \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "methods": ["GET"],\n    "uri": "/foo/index.html",\n    "service_id": "200"\n}\'\n')))),(0,i.kt)("p",null,"\u5f53\u7136\u4f60\u4e5f\u53ef\u4ee5\u4e3a\u8def\u7531\u6307\u5b9a\u4e0d\u540c\u7684\u63d2\u4ef6\u914d\u7f6e\u6216\u4e0a\u6e38\u3002\u6bd4\u5982\u5728\u4ee5\u4e0b\u793a\u4f8b\u4e2d\uff0c\u6211\u4eec\u8bbe\u7f6e\u4e86\u4e0d\u540c\u7684\u9650\u6d41\u53c2\u6570\uff0c\u5176\u4ed6\u90e8\u5206\uff08\u6bd4\u5982\u4e0a\u6e38\uff09\u5219\u7ee7\u7eed\u4f7f\u7528\u4e0a\u8ff0\u670d\u52a1\u4e2d\u7684\u914d\u7f6e\u53c2\u6570\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/102 \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/bar/index.html",\n    "id": "102",\n    "service_id": "200",\n    "plugins": {\n        "limit-count": {\n            "count": 2000,\n            "time_window": 60,\n            "rejected_code": 503,\n            "key": "remote_addr"\n        }\n    }\n}\'\n')),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u63d0\u793a")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u5f53\u8def\u7531\u548c\u670d\u52a1\u90fd\u542f\u7528\u540c\u4e00\u4e2a\u63d2\u4ef6\u65f6\uff0c\u8def\u7531\u4e2d\u7684\u63d2\u4ef6\u914d\u7f6e\u4f1a\u4f18\u5148\u4e8e\u670d\u52a1\u3002\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u8003",(0,i.kt)("a",{parentName:"p",href:"/zh/docs/apisix/terminology/plugin"},"Plugin"),"\u3002"))))}s.isMDXComponent=!0}}]);