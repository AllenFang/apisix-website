"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[87560],{35318:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(27378);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),h=s(r),m=i,d=h["".concat(p,".").concat(m)]||h[m]||c[m]||a;return r?n.createElement(d,l(l({ref:t},u),{},{components:r})):n.createElement(d,l({ref:t},u))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,l=new Array(a);l[0]=h;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var s=2;s<a;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},18411:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>o,toc:()=>s});var n=r(25773),i=(r(27378),r(35318));const a={title:"The Vulnerability of Leaking Information in Error Response from jwt-auth Plugin\uff08CVE-2022-29266\uff09",keywords:["Vulnerability","jwt-auth","Error Response"],description:"In APISIX 2.13.0 and previous versions, there is a problem of information leakage caused by the `jwt- auth` plugin.",tags:["Vulnerabilities"],image:"https://static.apiseven.com/2022/blog/0818/cve/CVE-2022-29266-1.png"},l=void 0,o={permalink:"/blog/2022/04/20/cve-2022-29266",source:"@site/blog/2022/04/20/cve-2022-29266.md",title:"The Vulnerability of Leaking Information in Error Response from jwt-auth Plugin\uff08CVE-2022-29266\uff09",description:"In APISIX 2.13.0 and previous versions, there is a problem of information leakage caused by the `jwt- auth` plugin.",date:"2022-04-20T00:00:00.000Z",formattedDate:"April 20, 2022",tags:[{label:"Vulnerabilities",permalink:"/blog/tags/vulnerabilities"}],readingTime:1.025,truncated:!0,authors:[],prevItem:{title:"High Availability Configuration with TiDB and APISIX",permalink:"/blog/2022/04/22/apisix-with-tidb-practice"},nextItem:{title:"Biweekly Report (Apr 1 - Apr 14)",permalink:"/blog/2022/04/20/weekly-report-0420"}},p={authorsImageUrls:[]},s=[{value:"Problem Description",id:"problem-description",children:[],level:2},{value:"Affected Versions",id:"affected-versions",children:[],level:2},{value:"Solution",id:"solution",children:[],level:2},{value:"Vulnerability details",id:"vulnerability-details",children:[],level:2},{value:"Contributor Profile",id:"contributor-profile",children:[],level:2}],u={toc:s};function c(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"In APISIX 2.13.0 and previous versions, there is a problem of information leakage caused by the ",(0,i.kt)("inlineCode",{parentName:"p"},"jwt- auth")," plugin.")),(0,i.kt)("h2",{id:"problem-description"},"Problem Description"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"jwt- auth")," plugin has a security problem of leaking the user's secret key because the error message returned from the dependent library ",(0,i.kt)("inlineCode",{parentName:"p"},"lua-resty-jwt")," contains sensitive information."),(0,i.kt)("h2",{id:"affected-versions"},"Affected Versions"),(0,i.kt)("p",null,"Apache APISIX 2.13.0 and all previous versions"),(0,i.kt)("h2",{id:"solution"},"Solution"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Please upgrade to Apache APISIX 2.13.1 or above immediately."),(0,i.kt)("li",{parentName:"ol"},"If it is not convenient to update the version, install the corresponding version of the patch on Apache APISIX to implement refactoring to bypass the vulnerability (after the patch is installed and takes effect, the error message received by the caller will be the fixed error message and will no longer contain sensitive information).")),(0,i.kt)("p",null,"The following patches apply to LTS 2.13.x or major versions:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/6846"},"https://github.com/apache/apisix/pull/6846")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/6847"},"https://github.com/apache/apisix/pull/6847")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/6858"},"https://github.com/apache/apisix/pull/6858"))),(0,i.kt)("p",null,"The following patches apply to the latest version of LTS 2.10.x:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/6847"},"https://github.com/apache/apisix/pull/6847")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/6855"},"https://github.com/apache/apisix/pull/6855"))),(0,i.kt)("h2",{id:"vulnerability-details"},"Vulnerability details"),(0,i.kt)("p",null,"Severity\uff1aUrgent"),(0,i.kt)("p",null,"Vulnerability public date: April 20, 2022"),(0,i.kt)("p",null,"CVE details: ",(0,i.kt)("a",{parentName:"p",href:"https://nvd.nist.gov/vuln/detail/CVE-2022-29266"},"https://nvd.nist.gov/vuln/detail/CVE-2022-29266")),(0,i.kt)("h2",{id:"contributor-profile"},"Contributor Profile"),(0,i.kt)("p",null,"The vulnerability was discovered and reported by Tang Zhongyuan, Xie Hongfeng and Chen Bing of Kingdee Software (China). Thank you for your contribution to the Apache APISIX community."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1650768035541-306d3c7d-cbd4-4b79-ad9c-9f916549b8e7.png",alt:"Kingdee logo"})))}c.isMDXComponent=!0}}]);