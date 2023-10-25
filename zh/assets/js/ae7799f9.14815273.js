"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[26387],{35318:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>m});var p=a(27378);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);t&&(p=p.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,p)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,p,r=function(e,t){if(null==e)return{};var a,p,r={},n=Object.keys(e);for(p=0;p<n.length;p++)a=n[p],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(p=0;p<n.length;p++)a=n[p],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=p.createContext({}),o=function(e){var t=p.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},h=function(e){var t=o(e.components);return p.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return p.createElement(p.Fragment,{},t)}},u=p.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,s=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),u=o(a),m=r,g=u["".concat(s,".").concat(m)]||u[m]||c[m]||n;return a?p.createElement(g,i(i({ref:t},h),{},{components:a})):p.createElement(g,i({ref:t},h))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,i=new Array(n);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var o=2;o<n;o++)i[o]=a[o];return p.createElement.apply(null,i)}return p.createElement.apply(null,a)}u.displayName="MDXCreateElement"},68080:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>n,metadata:()=>l,toc:()=>o});var p=a(25773),r=(a(27378),a(35318));const n={title:"\u793e\u533a\u53cc\u5468\u62a5 (12.05 - 12.18)",keywords:["Apache APISIX","API \u7f51\u5173","\u793e\u533a\u5468\u62a5","\u8d21\u732e\u8005"],description:"\u4e91\u539f\u751f API \u7f51\u5173 Apache APISIX \u8fd1\u4e24\u5468\u65b0\u589e\u4e86\u56fd\u5bc6\u5bc6\u7801\u5957\u4ef6\uff0c\u57df\u540d\u89e3\u6790\u4f18\u5316\uff0cAdmin API \u901a\u8fc7 gRPC \u534f\u8bae\u94fe\u63a5 ectd \u7b49\u65b0\u529f\u80fd\u3002",tags:["Community"],image:"https://static.apiseven.com/2022/12/22/63a40d559fbf7.png"},i=void 0,l={permalink:"/zh/blog/2022/12/22/weekly-report-1218",source:"@site/blog/2022/12/22/weekly-report-1218.md",title:"\u793e\u533a\u53cc\u5468\u62a5 (12.05 - 12.18)",description:"\u4e91\u539f\u751f API \u7f51\u5173 Apache APISIX \u8fd1\u4e24\u5468\u65b0\u589e\u4e86\u56fd\u5bc6\u5bc6\u7801\u5957\u4ef6\uff0c\u57df\u540d\u89e3\u6790\u4f18\u5316\uff0cAdmin API \u901a\u8fc7 gRPC \u534f\u8bae\u94fe\u63a5 ectd \u7b49\u65b0\u529f\u80fd\u3002",date:"2022-12-22T00:00:00.000Z",formattedDate:"2022\u5e7412\u670822\u65e5",tags:[{label:"Community",permalink:"/zh/blog/tags/community"}],readingTime:5.405,truncated:!0,authors:[],prevItem:{title:"APISIX Ingress \u5bf9 Gateway API \u7684\u652f\u6301\u548c\u5e94\u7528",permalink:"/zh/blog/2022/12/27/apisix-ingress-with-gatewayapi"},nextItem:{title:"\u4e3a\u4ec0\u4e48 APISIX Ingress \u662f\u6bd4 Traefik \u66f4\u597d\u7684\u9009\u62e9\uff1f",permalink:"/zh/blog/2022/12/19/apisix-ingress-better-than-traefik"}},s={authorsImageUrls:[]},o=[{value:"\u5bfc\u8bed",id:"\u5bfc\u8bed",children:[],level:2},{value:"\u8d21\u732e\u8005\u7edf\u8ba1",id:"\u8d21\u732e\u8005\u7edf\u8ba1",children:[],level:2},{value:"Good first issue",id:"good-first-issue",children:[{value:"Issue #1522",id:"issue-1522",children:[],level:3},{value:"Issue #1547",id:"issue-1547",children:[],level:3}],level:2},{value:"\u8fd1\u671f\u529f\u80fd\u7279\u6027\u4eae\u70b9",id:"\u8fd1\u671f\u529f\u80fd\u7279\u6027\u4eae\u70b9",children:[{value:"Apache APISIX",id:"apache-apisix",children:[],level:3},{value:"Apache APISIX Ingress",id:"apache-apisix-ingress",children:[],level:3}],level:2},{value:"\u8fd1\u671f\u535a\u6587\u63a8\u8350",id:"\u8fd1\u671f\u535a\u6587\u63a8\u8350",children:[],level:2}],h={toc:o};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,p.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u4ece 12 \u6708 5 \u65e5\u5f00\u59cb\u5df2\u6709 27 \u4f4d\u5f00\u53d1\u8005\u4e3a Apache APISIX \u63d0\u4ea4\u4e86 68 \u4e2a commit\u3002\u611f\u8c22\u4ee5\u4e0b\u5c0f\u4f19\u4f34\u4e3a Apache APISIX \u6dfb\u7816\u52a0\u74e6\uff08\u6392\u540d\u4e0d\u5206\u5148\u540e\uff09\uff0c\u662f\u4f60\u4eec\u7684\u65e0\u79c1\u4ed8\u51fa\uff0c\u8ba9 Apache APISIX \u53d8\u5f97\u66f4\u597d\uff01")),(0,r.kt)("h2",{id:"\u5bfc\u8bed"},"\u5bfc\u8bed"),(0,r.kt)("p",null,"Apache APISIX \u4ece\u5f00\u6e90\u7b2c\u4e00\u5929\u5c31\u4ee5\u793e\u533a\u65b9\u5f0f\u6210\u957f\uff0c\u8fc5\u901f\u6210\u4e3a\u5168\u4e16\u754c\u6700\u6d3b\u8dc3\u7684\u5f00\u6e90 API \u7f51\u5173\u9879\u76ee\u3002\u8fd9\u4e9b\u6210\u5c31\uff0c\u79bb\u4e0d\u5f00\u793e\u533a\u5c0f\u4f19\u4f34\u4eec\u7684\u5171\u540c\u594b\u6597\u3002"),(0,r.kt)("p",null,"\u201c\u72ec\u884c\u8005\u901f\uff0c\u4f17\u884c\u8005\u8fdc\u201d\u3002Apache APISIX \u793e\u533a\u5468\u62a5\u5e0c\u671b\u53ef\u4ee5\u5e2e\u52a9\u793e\u533a\u5c0f\u4f19\u4f34\u4eec\u66f4\u597d\u5730\u638c\u63e1 Apache APISIX \u793e\u533a\u7684\u8fdb\u5c55\uff0c\u65b9\u4fbf\u5927\u5bb6\u53c2\u4e0e\u5230 Apache APISIX \u793e\u533a\u4e2d\u6765\u3002"),(0,r.kt)("p",null,"\u6211\u4eec\u8fd8\u6574\u7406\u4e86\u4e00\u4e9b\u9002\u5408\u65b0\u6765\u793e\u533a\u7684\u5c0f\u4f19\u4f34\u4eec\u53c2\u52a0\u7684 issue\uff01\u611f\u5174\u8da3\u7684\u540c\u5b66\u4eec\uff0c\u8d70\u8fc7\u8def\u8fc7\u4e0d\u8981\u9519\u8fc7\uff01"),(0,r.kt)("h2",{id:"\u8d21\u732e\u8005\u7edf\u8ba1"},"\u8d21\u732e\u8005\u7edf\u8ba1"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://static.apiseven.com/2022/12/22/63a411bfb3595.png",alt:"\u8d21\u732e\u8005\u6d77\u62a5-1205-1218.png"})),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://static.apiseven.com/2022/12/22/63a411c0d2e44.png",alt:"\u65b0\u664b\u8d21\u732e\u8005\u6d77\u62a51205-1218.png"})),(0,r.kt)("h2",{id:"good-first-issue"},"Good first issue"),(0,r.kt)("h3",{id:"issue-1522"},"Issue #1522"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u94fe\u63a5"),"\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-ingress-controller/issues/1522"},"https://github.com/apache/apisix-ingress-controller/issues/1522")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u95ee\u9898\u63cf\u8ff0"),"\uff1a\u5728 APISIX Ingress \u7684\u5b98\u7f51\u6587\u6863\u5185\uff0c\u6d89\u53ca\u5230\u4e00\u4e9b\u57fa\u7840\u7ec4\u6210\u8981\u7d20\u7684\u5185\u5bb9\u4e2d\uff0c\u591a\u4e2a\u6587\u6863\u4e4b\u95f4\u5b58\u5728\u4e0d\u540c\u6b65/\u4e0d\u4e00\u81f4\u7684\u95ee\u9898\u3002"),(0,r.kt)("h3",{id:"issue-1547"},"Issue #1547"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u94fe\u63a5"),"\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-ingress-controller/issues/1547"},"https://github.com/apache/apisix-ingress-controller/issues/1547")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u95ee\u9898\u63cf\u8ff0"),"\uff1a\u6b63\u5e38\u60c5\u51b5\u4e0b\uff0cCHANGELOG \u6587\u4ef6\u5e94\u8be5\u7531 release-tools \u81ea\u52a8\u751f\u6210\u3002\u800c\u5728\u6700\u8fd1\u7684\u60c5\u51b5\u4e2d\uff0cmake update-all \u6307\u4ee4\u53ef\u4ee5\u4fee\u6539 CHANGELOG \u6587\u4ef6\uff0c\u8fd9\u4e2a\u95ee\u9898\u9700\u8981\u4fee\u590d\u3002"),(0,r.kt)("h2",{id:"\u8fd1\u671f\u529f\u80fd\u7279\u6027\u4eae\u70b9"},"\u8fd1\u671f\u529f\u80fd\u7279\u6027\u4eae\u70b9"),(0,r.kt)("h3",{id:"apache-apisix"},"Apache APISIX"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/pull/8400"},"\u65b0\u589e ",(0,r.kt)("inlineCode",{parentName:"a"},"inspect")," \u63d2\u4ef6"),"\uff08\u8d21\u732e\u8005\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://github.com/kingluo"},"kingluo"),"\uff09")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/pull/8380"},"\u65b0\u589e\u652f\u6301 Consul \u4f5c\u4e3a\u670d\u52a1\u53d1\u73b0\u6a21\u5f0f"),"\uff08\u8d21\u732e\u8005\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Fabriceli"},"Fabriceli"),"\uff09")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/pull/8434"},"\u652f\u6301 ",(0,r.kt)("inlineCode",{parentName:"a"},"prometheus")," \u63d2\u4ef6\u5728\u7279\u6743\u8fdb\u7a0b\u4e2d\u8ba1\u7b97\u6307\u6807"),"\uff08\u8d21\u732e\u8005\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://github.com/tzssangglass"},"tzssangglass"),"\uff09")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/pull/8450"},"\u652f\u6301\u901a\u8fc7 gRPC \u540c\u6b65\u6570\u636e"),"\uff08\u8d21\u732e\u8005\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://github.com/spacewander"},"spacewander"),"\uff09")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/pull/8414"},"file-logger \u63d2\u4ef6\u652f\u6301\u8bb0\u5f55\u54cd\u5e94\u4f53\u5185\u5bb9"),"\uff08\u8d21\u732e\u8005\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pixeldin"},"pixeldin"),"\uff09")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/pull/8500"},"\u652f\u6301\u5728 Stream \u5b50\u7cfb\u7edf\u4e2d\u89e3\u6790\u57df\u540d"),"\uff08\u8d21\u732e\u8005\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://github.com/tzssangglass"},"tzssangglass"),"\uff09"))),(0,r.kt)("h3",{id:"apache-apisix-ingress"},"Apache APISIX Ingress"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-ingress-controller/pull/1487"},"\u4e3a Ingress \u8d44\u6e90\u6dfb\u52a0\u4e86\u65b0\u7684 Annotation \u6765\u652f\u6301 response-rewrite \u63d2\u4ef6"),"\uff08\u8d21\u732e\u8005\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://github.com/An-DJ"},"An-DJ"),"\uff09")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-ingress-controller/pull/1386"},"Ingress: \u4fee\u6b63\u4e86\u6570\u4e07 namespace \u573a\u666f\u4e0b\uff0c\u521d\u59cb\u5316\u8017\u65f6\u7684\u95ee\u9898"),"\uff08\u8d21\u732e\u8005\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://github.com/shareinto"},"shareinto"),"\uff09")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-ingress-controller/pull/1500"},"Ingress\uff1a\u5141\u8bb8\u4ee3\u7406\u7684\u5916\u90e8\u670d\u52a1\u53ef\u76f4\u63a5\u6307\u5b9a Port"),"\uff08\u8d21\u732e\u8005\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Gallardot"},"Gallardot"),"\uff09"))),(0,r.kt)("p",null,"Apache APISIX \u7684\u9879\u76ee\u5b98\u7f51\u548c Github \u4e0a\u7684 Issue \u4e0a\u5df2\u7ecf\u79ef\u7d2f\u4e86\u6bd4\u8f83\u4e30\u5bcc\u7684\u6587\u6863\u6559\u7a0b\u548c\u4f7f\u7528\u7ecf\u9a8c\uff0c\u5982\u679c\u60a8\u9047\u5230\u95ee\u9898\u53ef\u4ee5\u7ffb\u9605\u6587\u6863\uff0c\u7528\u5173\u952e\u8bcd\u5728 Issue \u4e2d\u641c\u7d22\uff0c\u4e5f\u53ef\u4ee5\u53c2\u4e0e Issue \u4e0a\u7684\u8ba8\u8bba\uff0c\u63d0\u51fa\u81ea\u5df1\u7684\u60f3\u6cd5\u548c\u5b9e\u8df5\u7ecf\u9a8c\u3002"),(0,r.kt)("h2",{id:"\u8fd1\u671f\u535a\u6587\u63a8\u8350"},"\u8fd1\u671f\u535a\u6587\u63a8\u8350"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://apisix.apache.org/zh/blog/2022/12/13/seewo-with-apache-apisix/"},"\u805a\u7126\u4eba\u673a\u4ea4\u4e92\u667a\u80fd\u5e94\u7528\u9886\u57df\uff0cAPISIX \u5728\u5e0c\u6c83\u7f51\u5173\u7684\u5e94\u7528\u4e0e\u5b9e\u8df5")),(0,r.kt)("p",{parentName:"li"},"  \u968f\u7740\u6280\u672f\u7684\u98de\u901f\u53d1\u5c55\uff0c\u5728\u4eba\u9645\u4ea4\u4e92\u667a\u80fd\u9886\u57df\uff0c\u4e1a\u52a1\u9700\u6c42\u4e5f\u5bf9\u67b6\u6784\u8fed\u4ee3\u6709\u4e86\u66f4\u9ad8\u7684\u8981\u6c42\u3002\u4e3a\u4e86\u5e94\u5bf9\u65e5\u8d8b\u6210\u719f\u53ca\u5feb\u901f\u589e\u957f\u7684\u4e1a\u52a1\u73b0\u72b6\uff0c\u5e0c\u6c83\u53c8\u662f\u5982\u4f55\u5728\u7f51\u5173\u5c42\u9762\u8fdb\u884c\u8ddf\u8fdb\u7684\u5462\uff1f")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://apisix.apache.org/zh/blog/2022/12/09/insigma-with-apache-apisix/"},"\u667a\u6167\u4ea4\u901a\u7cfb\u7edf\u7f51\u65b0\u7535\u6c14\uff0c\u5982\u4f55\u57fa\u4e8e APISIX \u8fed\u4ee3\u6570\u5b57\u667a\u8054\u5e73\u53f0")),(0,r.kt)("p",{parentName:"li"},"  \u5728\u57ce\u5e02\u667a\u80fd\u4ea4\u901a\u7684\u8986\u76d6\u8303\u56f4\u4e0b\uff0c\u5f88\u591a\u573a\u666f\u5bf9\u4e8e\u6d41\u91cf\u5904\u7406\u548c\u7cfb\u7edf\u7a33\u5b9a\u6027\u90fd\u8981\u6c42\u6781\u9ad8\u3002\u4e3a\u4e86\u5e94\u5bf9\u8fd9\u79cd\u57ce\u5e02\u7ea7\u522b\u7684\u6570\u5b57\u667a\u80fd\u8981\u6c42\uff0c\u7f51\u65b0\u7535\u6c14\u57fa\u4e8e APISIX \u8fdb\u884c\u4e86\u7f51\u5173\u5c42\u9762\u7684\u8fed\u4ee3\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://apisix.apache.org/zh/blog/2022/12/08/apisix-support-tongsuo/"},"Apache APISIX \u73a9\u8f6c Tongsuo \u56fd\u5bc6\u63d2\u4ef6")),(0,r.kt)("p",{parentName:"li"},"  \u672c\u6587\u901a\u8fc7\u89e3\u8bfb\u56fd\u5bc6\u7684\u76f8\u5173\u5185\u5bb9\u4e0e\u6807\u51c6\uff0c\u5448\u73b0\u4e86\u5f53\u4e0b\u56fd\u5185\u6280\u672f\u73af\u5883\u4e2d\u5bf9\u4e8e\u56fd\u5bc6\u529f\u80fd\u652f\u6301\u7684\u73b0\u72b6\u3002\u5e76\u4ece API \u7f51\u5173 Apache APISIX \u7684\u89d2\u5ea6\uff0c\u5e26\u6765\u6709\u5173\u56fd\u5bc6\u7684\u63a2\u7d22\u4e0e\u529f\u80fd\u5448\u73b0\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://apisix.apache.org/zh/blog/2022/12/07/junrunrenli-with-apisix/"},"APISIX \u5728\u541b\u6da6\u4eba\u529b\u4e91\u539f\u751f\u5e73\u53f0\u7684\u67b6\u6784\u5b9e\u8df5")),(0,r.kt)("p",{parentName:"li"},"  \u672c\u6587\u4ece\u541b\u6da6\u4eba\u529b\u4e1a\u52a1\u5feb\u901f\u6269\u5f20\u7684\u80cc\u666f\u5165\u624b\uff0c\u91cd\u70b9\u4ecb\u7ecd\u5f00\u6e90 API \u7f51\u5173 APISIX \u5bf9\u5176\u81ea\u7814\u5e73\u53f0\u7cfb\u7edf\u67b6\u6784\u7684\u591a\u6837\u5316\u5e94\u7528\u573a\u666f\u652f\u6301\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://apisix.apache.org/zh/blog/2022/12/a-poor-man%E2%80%98s-api/"},"\u8bd1\u6587 | A poor man's API")),(0,r.kt)("p",{parentName:"li"},"  \u672c\u6587\u5c06\u5c55\u793a\u5982\u4f55\u5728\u4e0d\u7f16\u5199\u4efb\u4f55\u4ee3\u7801\u7684\u60c5\u51b5\u4e0b\uff0c\u7b80\u5355\u5b9e\u73b0\u4e00\u4e2a API \u5b9e\u8df5\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://apisix.apache.org/zh/blog/2022/11/25/how-apisix-support-1000-pods/"},"APISIX Ingress \u662f\u5982\u4f55\u652f\u6301\u4e0a\u5343\u4e2a Pod \u526f\u672c\u7684\u5e94\u7528")),(0,r.kt)("p",{parentName:"li"},"  \u672c\u6587\u901a\u8fc7\u4ecb\u7ecd Kubernetes \u4e2d\u4e0a\u5343\u4e2a Pod \u526f\u672c\u5e94\u7528\u573a\u666f\u7684\u89e3\u6790\uff0c\u63d0\u51fa\u6280\u672f\u5b9e\u73b0\u7684\u56f0\u96be\u3002\u4ecb\u7ecd APISIX Ingress \u662f\u5982\u4f55\u89e3\u51b3\u8fd9\u4e00\u96be\u9898\u7684\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://apisix.apache.org/zh/blog/2022/11/10/what-is-service-in-microservice-discovery/"},"\u5fae\u670d\u52a1\u4e2d\u7684\u670d\u52a1\u53d1\u73b0\u662f\u4ec0\u4e48")),(0,r.kt)("p",{parentName:"li"},"  \u672c\u6587\u901a\u8fc7\u670d\u52a1\u53d1\u73b0\u7684\u76f8\u5173\u80cc\u666f\u548c APISIX \u5bf9\u4e8e\u670d\u52a1\u53d1\u73b0\u7684\u5e94\u7528\u4e0e\u5b9e\u8df5\uff0c\u6765\u4ecb\u7ecd\u5fae\u670d\u52a1\u4e2d\u7684\u670d\u52a1\u53d1\u73b0\u5185\u5bb9\u3002"))))}c.isMDXComponent=!0}}]);