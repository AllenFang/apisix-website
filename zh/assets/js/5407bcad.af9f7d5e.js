"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[57158],{35318:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>g});var n=r(27378);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=u(r),g=a,h=m["".concat(l,".").concat(g)]||m[g]||s[g]||o;return r?n.createElement(h,i(i({ref:t},p),{},{components:r})):n.createElement(h,i({ref:t},p))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},63913:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var n=r(25773),a=(r(27378),r(35318));const o={title:"Apache APISIX 3.6.0 \u6b63\u5f0f\u53d1\u5e03",authors:[{name:"Xin Rong",title:"Author",url:"https://github.com/AlinsRan",image_url:"https://avatars.githubusercontent.com/u/79972061?v=4"},{name:"Traky Deng",title:"Technical Writer",url:"https://github.com/kayx23",image_url:"https://avatars.githubusercontent.com/u/39619599?v=4"}],keywords:["Apache APISIX","API Gateway","API Management Platform","New Release","Cloud Native"],description:"Apache APISIX 3.6.0 \u7248\u672c\u4e8e 2023 \u5e74 10 \u6708 5 \u65e5\u53d1\u5e03\u3002\u8be5\u7248\u672c\u5e26\u6765\u4e86\u4e00\u7cfb\u5217\u65b0\u529f\u80fd\uff0c\u4fee\u590d\uff0c\u548c\u7528\u6237\u4f53\u9a8c\u4f18\u5316\u3002",tags:["Community"]},i=void 0,c={permalink:"/zh/blog/2023/10/05/release-apache-apisix-3.6.0",source:"@site/blog/2023/10/05/release-apache-apisix-3.6.0.md",title:"Apache APISIX 3.6.0 \u6b63\u5f0f\u53d1\u5e03",description:"Apache APISIX 3.6.0 \u7248\u672c\u4e8e 2023 \u5e74 10 \u6708 5 \u65e5\u53d1\u5e03\u3002\u8be5\u7248\u672c\u5e26\u6765\u4e86\u4e00\u7cfb\u5217\u65b0\u529f\u80fd\uff0c\u4fee\u590d\uff0c\u548c\u7528\u6237\u4f53\u9a8c\u4f18\u5316\u3002",date:"2023-10-05T00:00:00.000Z",formattedDate:"2023\u5e7410\u67085\u65e5",tags:[{label:"Community",permalink:"/zh/blog/tags/community"}],readingTime:4.155,truncated:!0,authors:[{name:"Xin Rong",title:"Author",url:"https://github.com/AlinsRan",image_url:"https://avatars.githubusercontent.com/u/79972061?v=4",imageURL:"https://avatars.githubusercontent.com/u/79972061?v=4"},{name:"Traky Deng",title:"Technical Writer",url:"https://github.com/kayx23",image_url:"https://avatars.githubusercontent.com/u/39619599?v=4",imageURL:"https://avatars.githubusercontent.com/u/39619599?v=4"}],prevItem:{title:"APISIX \u65b0\u7279\u6027\u4e4b GitOps \u58f0\u660e\u5f0f\u914d\u7f6e",permalink:"/zh/blog/2023/10/07/apisix-gitops-adc"},nextItem:{title:"\u793e\u533a\u53cc\u5468\u62a5 (9.11 - 9.24)",permalink:"/zh/blog/2023/09/26/bi-weekly report"}},l={authorsImageUrls:[void 0,void 0]},u=[],p={toc:u};function s(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u6211\u4eec\u5f88\u9ad8\u5174\u5730\u5ba3\u5e03 Apache APISIX 3.6.0 \u7248\u672c\u5df2\u7ecf\u53d1\u5e03\uff0c\u5e26\u6765\u4e00\u7cfb\u5217\u65b0\u529f\u80fd\uff0c\u4fee\u590d\uff0c\u548c\u7528\u6237\u4f53\u9a8c\u4f18\u5316\u3002"))}s.isMDXComponent=!0}}]);