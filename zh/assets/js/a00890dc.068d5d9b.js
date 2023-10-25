"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[46962],{35318:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var r=a(27378);function p(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){p(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,p=function(e,t){if(null==e)return{};var a,r,p={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(p[a]=e[a]);return p}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(p[a]=e[a])}return p}var o=r.createContext({}),s=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=s(e.components);return r.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,p=e.mdxType,n=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=s(a),m=p,k=h["".concat(o,".").concat(m)]||h[m]||u[m]||n;return a?r.createElement(k,i(i({ref:t},c),{},{components:a})):r.createElement(k,i({ref:t},c))}));function m(e,t){var a=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var n=a.length,i=new Array(n);i[0]=h;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:p,i[1]=l;for(var s=2;s<n;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},43411:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>n,metadata:()=>l,toc:()=>s});var r=a(25773),p=(a(27378),a(35318));const n={title:"\u793e\u533a\u53cc\u5468\u62a5 (7.16 - 7.31)",keywords:["Apache APISIX","API \u7f51\u5173","\u793e\u533a\u5468\u62a5","\u8d21\u732e\u8005"],description:"\u4e91\u539f\u751f API \u7f51\u5173 Apache APISIX \u8fd1\u4e24\u5468\u65b0\u589e\u4e86 openid-connect \u63d2\u4ef6\u4e2d\u652f\u6301 PKCE\u3001Ingress \u8d44\u6e90\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528 APISIX \u7684\u63d2\u4ef6\u7b49\u529f\u80fd\u3002",tags:["Community"],image:"https://static.apiseven.com/2022/weeklyreport/0809/biweekly-2022.7.16-2022.7.31-zh.png"},i=void 0,l={permalink:"/zh/blog/2022/08/09/weekly-report-0731",source:"@site/blog/2022/08/09/weekly-report-0731.md",title:"\u793e\u533a\u53cc\u5468\u62a5 (7.16 - 7.31)",description:"\u4e91\u539f\u751f API \u7f51\u5173 Apache APISIX \u8fd1\u4e24\u5468\u65b0\u589e\u4e86 openid-connect \u63d2\u4ef6\u4e2d\u652f\u6301 PKCE\u3001Ingress \u8d44\u6e90\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528 APISIX \u7684\u63d2\u4ef6\u7b49\u529f\u80fd\u3002",date:"2022-08-09T00:00:00.000Z",formattedDate:"2022\u5e748\u67089\u65e5",tags:[{label:"Community",permalink:"/zh/blog/tags/community"}],readingTime:3.625,truncated:!0,authors:[],prevItem:{title:"GCP\u3001AWS\u3001Azure \u548c Oracle ARM \u67b6\u6784\u670d\u52a1\u5668\u6027\u80fd\u6d4b\u8bd5\u5bf9\u6bd4",permalink:"/zh/blog/2022/08/12/arm-performance-google-aws-azure-with-apisix"},nextItem:{title:"Apache APISIX \u5728 Azure Ddsv5 \u548c Dpdsv5 \u4e0a\u7684\u6027\u80fd\u6d4b\u8bd5",permalink:"/zh/blog/2022/08/08/apache-apisix-performance-test-in-azure"}},o={authorsImageUrls:[]},s=[{value:"\u5bfc\u8bed",id:"\u5bfc\u8bed",children:[],level:2},{value:"\u8d21\u732e\u8005\u7edf\u8ba1",id:"\u8d21\u732e\u8005\u7edf\u8ba1",children:[],level:2},{value:"Good first issue",id:"good-first-issue",children:[{value:"Issue #7538",id:"issue-7538",children:[],level:3}],level:2},{value:"\u8fd1\u671f\u529f\u80fd\u7279\u6027\u4eae\u70b9",id:"\u8fd1\u671f\u529f\u80fd\u7279\u6027\u4eae\u70b9",children:[],level:2},{value:"\u8fd1\u671f\u535a\u6587\u63a8\u8350",id:"\u8fd1\u671f\u535a\u6587\u63a8\u8350",children:[],level:2}],c={toc:s};function u(e){let{components:t,...a}=e;return(0,p.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("blockquote",null,(0,p.kt)("p",{parentName:"blockquote"},"\u4ece 7.16 - 7.31\uff0c\u6709 28 \u4f4d\u5f00\u53d1\u8005\u4e3a Apache APISIX \u63d0\u4ea4\u4e86 93 \u4e2a commits\u3002\u611f\u8c22\u8fd9\u4e9b\u5c0f\u4f19\u4f34\u4e3a Apache APISIX \u6dfb\u7816\u52a0\u74e6\uff0c\u662f\u4f60\u4eec\u7684\u65e0\u79c1\u4ed8\u51fa\uff0c\u8ba9 Apache APISIX \u9879\u76ee\u53d8\u5f97\u66f4\u597d\uff01")),(0,p.kt)("h2",{id:"\u5bfc\u8bed"},"\u5bfc\u8bed"),(0,p.kt)("p",null,"Apache APISIX \u4ece\u5f00\u6e90\u7b2c\u4e00\u5929\u5c31\u4ee5\u793e\u533a\u65b9\u5f0f\u6210\u957f\uff0c\u8fc5\u901f\u6210\u4e3a\u5168\u4e16\u754c\u6700\u6d3b\u8dc3\u7684\u5f00\u6e90 API \u7f51\u5173\u9879\u76ee\u3002\u8fd9\u4e9b\u6210\u5c31\uff0c\u79bb\u4e0d\u5f00\u793e\u533a\u5c0f\u4f19\u4f34\u4eec\u7684\u5171\u540c\u594b\u6597\u3002"),(0,p.kt)("p",null,"\u201c\u72ec\u884c\u8005\u901f\uff0c\u4f17\u884c\u8005\u8fdc\u201d\u3002Apache APISIX \u793e\u533a\u5468\u62a5\u5e0c\u671b\u53ef\u4ee5\u5e2e\u52a9\u793e\u533a\u5c0f\u4f19\u4f34\u4eec\u66f4\u597d\u5730\u638c\u63e1 Apache APISIX \u793e\u533a\u7684\u8fdb\u5c55\uff0c\u65b9\u4fbf\u5927\u5bb6\u53c2\u4e0e\u5230 Apache APISIX \u793e\u533a\u4e2d\u6765\u3002"),(0,p.kt)("p",null,"\u6211\u4eec\u8fd8\u6574\u7406\u4e86\u4e00\u4e9b\u9002\u5408\u65b0\u6765\u793e\u533a\u7684\u5c0f\u4f19\u4f34\u4eec\u53c2\u52a0\u7684 issue\uff01\u611f\u5174\u8da3\u7684\u540c\u5b66\u4eec\uff0c\u8d70\u8fc7\u8def\u8fc7\u4e0d\u8981\u9519\u8fc7\uff01"),(0,p.kt)("h2",{id:"\u8d21\u732e\u8005\u7edf\u8ba1"},"\u8d21\u732e\u8005\u7edf\u8ba1"),(0,p.kt)("p",null,(0,p.kt)("img",{parentName:"p",src:"https://static.apiseven.com/2022/weeklyreport/0809/1.png",alt:"\u672c\u5468\u8d21\u732e\u8005\u540d\u5355"})),(0,p.kt)("p",null,(0,p.kt)("img",{parentName:"p",src:"https://static.apiseven.com/2022/weeklyreport/0809/2.png",alt:"\u672c\u5468\u65b0\u664b\u8d21\u732e\u8005"})),(0,p.kt)("h2",{id:"good-first-issue"},"Good first issue"),(0,p.kt)("h3",{id:"issue-7538"},"Issue #7538"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"\u94fe\u63a5"),"\uff1a",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/issues/7538"},"https://github.com/apache/apisix/issues/7538")),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"\u95ee\u9898\u63cf\u8ff0"),"\uff1a\u5728\u76ee\u524d\u7684\u5b98\u7f51\u535a\u5ba2\u53ca\u6587\u6863\u4e2d\u786c\u6027\u89c4\u5b9a\u4e86 APISIX \u7684\u7248\u672c\uff0c\u5bfc\u81f4\u4e00\u4e9b\u65b0\u6765\u7684\u5c0f\u4f19\u4f34\u5728\u9605\u8bfb\u65e7\u7248\u672c\u7684\u535a\u5ba2\u65f6\u4ea7\u751f\u4e86\u8bef\u89e3\u3002\u8fd9\u4e5f\u4f7f\u5f97\u66f4\u65b0\u6587\u6863\u4e2d\u6700\u65b0\u7684 APISIX \u7248\u672c\u53d8\u5f97\u66f4\u52a0\u56f0\u96be\uff0c\u56e0\u4e3a\u6211\u4eec\u9700\u8981\u540c\u65f6\u4fee\u6539\u597d\u51e0\u4e2a\u5730\u65b9\u3002"),(0,p.kt)("p",null,"\u6216\u8bb8\u53ef\u4ee5\u6dfb\u52a0\u4e00\u4e2a\u5305\u542b\u7248\u672c\u53f7\u7684\u9759\u6001\u6587\u4ef6\uff0c\u5e76\u63d0\u4f9b\u4e00\u4e2a\u7b80\u5355\u7684\u5355\u884c\u547d\u4ee4\u6765\u83b7\u53d6\u6587\u6863\u4e2d\u7684\u7248\u672c\u53f7\u3002"),(0,p.kt)("h2",{id:"\u8fd1\u671f\u529f\u80fd\u7279\u6027\u4eae\u70b9"},"\u8fd1\u671f\u529f\u80fd\u7279\u6027\u4eae\u70b9"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/pull/7401"},(0,p.kt)("inlineCode",{parentName:"a"},"proxy-rewrite")," \u63d2\u4ef6\u652f\u6301\u4f7f\u7528\u539f\u59cb\u8bf7\u6c42\u7684 URI\uff0c\u7ed5\u8fc7\u9ed8\u8ba4\u7684 URI \u7f16\u7801"),"\uff08\u8d21\u732e\u8005\uff1a",(0,p.kt)("a",{parentName:"p",href:"https://github.com/ilteriseroglu-ty"},"ilteriseroglu-ty"),"\uff09")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/pull/7412"},(0,p.kt)("inlineCode",{parentName:"a"},"prometheus")," \u63d2\u4ef6\u652f\u6301\u76d1\u63a7\u5171\u4eab\u5185\u5b58\u76f8\u5173\u6307\u6807"),"\uff08\u8d21\u732e\u8005\uff1a",(0,p.kt)("a",{parentName:"p",href:"https://github.com/ccxhwmy"},"ccxhwmy"),"\uff09")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/pull/7453"},"\u652f\u6301\u52a8\u6001\u63a7\u5236\u662f\u5426\u6267\u884c\u67d0\u4e2a\u63d2\u4ef6"),"\uff08\u8d21\u732e\u8005\uff1a",(0,p.kt)("a",{parentName:"p",href:"https://github.com/soulbird"},"soulbird"),"\uff09")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/pull/7500"},(0,p.kt)("inlineCode",{parentName:"a"},"jwt-auth")," \u652f\u6301\u8bbe\u7f6e\u65f6\u949f\u6f02\u79fb\u53c2\u6570"),"\uff08\u8d21\u732e\u8005\uff1a",(0,p.kt)("a",{parentName:"p",href:"https://github.com/tzssangglass"},"tzssangglass"),"\uff09")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/pull/7514"},"Control API \u652f\u6301\u6253\u5370\u6240\u6709\u63d2\u4ef6\u7684\u5143\u6570\u636e"),"\uff08\u8d21\u732e\u8005\uff1a",(0,p.kt)("a",{parentName:"p",href:"https://github.com/kingluo"},"kingluo"),"\uff09")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/pull/7517"},(0,p.kt)("inlineCode",{parentName:"a"},"clickhouse-logger")," \u63d2\u4ef6\u652f\u6301\u8bbe\u7f6e\u591a\u4e2a\u7aef\u70b9"),"\uff08\u8d21\u732e\u8005\uff1a",(0,p.kt)("a",{parentName:"p",href:"https://github.com/zhendongcmss"},"zhendongcmss"),"\uff09"))),(0,p.kt)("p",null,"Apache APISIX \u7684\u9879\u76ee\u5b98\u7f51\u548c Github \u4e0a\u7684 issue \u4e0a\u5df2\u7ecf\u79ef\u7d2f\u4e86\u6bd4\u8f83\u4e30\u5bcc\u7684\u6587\u6863\u6559\u7a0b\u548c\u4f7f\u7528\u7ecf\u9a8c\uff0c\u5982\u679c\u60a8\u9047\u5230\u95ee\u9898\u53ef\u4ee5\u7ffb\u9605\u6587\u6863\uff0c\u7528\u5173\u952e\u8bcd\u5728 issue \u4e2d\u641c\u7d22\uff0c\u4e5f\u53ef\u4ee5\u53c2\u4e0e issue \u4e0a\u7684\u8ba8\u8bba\uff0c\u63d0\u51fa\u81ea\u5df1\u7684\u60f3\u6cd5\u548c\u5b9e\u8df5\u7ecf\u9a8c\u3002"),(0,p.kt)("h2",{id:"\u8fd1\u671f\u535a\u6587\u63a8\u8350"},"\u8fd1\u671f\u535a\u6587\u63a8\u8350"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("a",{parentName:"p",href:"https://apisix.apache.org/zh/blog/2022/08/05/apisix-ingress-1.5rc1-release/"},"Apache APISIX Ingress v1.5-rc1 \u6b63\u5f0f\u53d1\u5e03")),(0,p.kt)("p",{parentName:"li"},"  \u5386\u65f6 7 \u4e2a\u6708\uff0cApache APISIX Ingress Controller v1.5-rc1 \u7248\u672c\u6b63\u5f0f\u53d1\u5e03\u3002\u5e26\u6765 API Version \u5347\u7ea7\u3001Gateway API \u652f\u6301\u4ee5\u53ca Ingress \u76f8\u5173\u8d44\u6e90\u7684\u66f4\u65b0\u4e0e\u8c03\u6574\u3002")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("a",{parentName:"p",href:"https://apisix.apache.org/zh/blog/2022/07/29/release-apache-apisix-2.15/"},"Apache APISIX 2.15 \u6b63\u5f0f\u53d1\u5e03")),(0,p.kt)("p",{parentName:"li"},"  Apache APISIX 2.15 \u7248\u672c\u6b63\u5f0f\u53d1\u5e03\uff01\u7528\u6237\u53ef\u4ee5\u81ea\u5b9a\u4e49\u63d2\u4ef6\u4f18\u5148\u7ea7\u548c\u6267\u884c\u7b56\u7565\u3001\u81ea\u5b9a\u4e49\u9519\u8bef\u54cd\u5e94\u4ee5\u53ca\u652f\u6301\u76d1\u63a7\u56db\u5c42\u6d41\u91cf\u7684\u6307\u6807\u7b49\u529f\u80fd\u3002")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("a",{parentName:"p",href:"https://apisix.apache.org/zh/blog/2022/07/30/why-we-need-apache-apisix/"},"\u6709\u4e86 NGINX \u548c Kong\uff0c\u4e3a\u4ec0\u4e48\u8fd8\u9700\u8981 Apache APISIX\uff1f")),(0,p.kt)("p",{parentName:"li"},"  \u672c\u6587\u4ecb\u7ecd\u4e86 Kong \u548c NGINX \u7684\u75db\u70b9\uff0c\u4ee5\u53ca Apache APISIX \u5982\u4f55\u89e3\u51b3\u5b83\u4eec\u7684\u75db\u70b9\uff0c\u5e76\u4e14\u4e3a\u4f60\u4ecb\u7ecd\u4e86 Apache APISIX \u7684\u5e94\u7528\u573a\u666f\u3002"))))}u.isMDXComponent=!0}}]);