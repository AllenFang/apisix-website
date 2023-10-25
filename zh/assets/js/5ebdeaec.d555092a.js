"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[6601],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>u});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},p=Object.keys(e);for(a=0;a<p.length;a++)t=p[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)t=p[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),s=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=s(e.components);return a.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,p=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=s(t),u=r,h=d["".concat(l,".").concat(u)]||d[u]||m[u]||p;return t?a.createElement(h,i(i({ref:n},c),{},{components:t})):a.createElement(h,i({ref:n},c))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var p=t.length,i=new Array(p);i[0]=d;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<p;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},81612:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>i,default:()=>c,frontMatter:()=>p,metadata:()=>o,toc:()=>l});var a=t(87462),r=(t(67294),t(3905));const p={title:"Upstream",keywords:["APISIX","API \u7f51\u5173","\u4e0a\u6e38","Upstream"],description:"\u672c\u6587\u4ecb\u7ecd\u4e86 Apache APISIX Upstream \u5bf9\u8c61\u7684\u4f5c\u7528\u4ee5\u53ca\u5982\u4f55\u4f7f\u7528 Upstream\u3002"},i=void 0,o={unversionedId:"terminology/upstream",id:"version-3.6/terminology/upstream",isDocsHomePage:!1,title:"Upstream",description:"\u672c\u6587\u4ecb\u7ecd\u4e86 Apache APISIX Upstream \u5bf9\u8c61\u7684\u4f5c\u7528\u4ee5\u53ca\u5982\u4f55\u4f7f\u7528 Upstream\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs-docs-apisix/version-3.6/terminology/upstream.md",sourceDirName:"terminology",slug:"/terminology/upstream",permalink:"/zh/docs/apisix/terminology/upstream",editUrl:"/zh/edit#https://github.com/apache/apisix/edit/release/3.6/docs/zh/latest/terminology/upstream.md",tags:[],version:"3.6",frontMatter:{title:"Upstream",keywords:["APISIX","API \u7f51\u5173","\u4e0a\u6e38","Upstream"],description:"\u672c\u6587\u4ecb\u7ecd\u4e86 Apache APISIX Upstream \u5bf9\u8c61\u7684\u4f5c\u7528\u4ee5\u53ca\u5982\u4f55\u4f7f\u7528 Upstream\u3002"},sidebar:"version-3.6/docs",previous:{title:"Service",permalink:"/zh/docs/apisix/terminology/service"},next:{title:"Secret",permalink:"/zh/docs/apisix/terminology/secret"}},l=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",children:[]},{value:"\u914d\u7f6e\u53c2\u6570",id:"\u914d\u7f6e\u53c2\u6570",children:[]},{value:"\u4f7f\u7528\u793a\u4f8b",id:"\u4f7f\u7528\u793a\u4f8b",children:[{value:"Consumer",id:"consumer",children:[]},{value:"Cookie",id:"cookie",children:[]},{value:"Header",id:"header",children:[]}]}],s={toc:l};function c(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,r.kt)("p",null,"Upstream\uff08\u4e5f\u79f0\u4e4b\u4e3a\u4e0a\u6e38\uff09\u662f\u5bf9\u865a\u62df\u4e3b\u673a\u62bd\u8c61\uff0c\u5373\u5e94\u7528\u5c42\u670d\u52a1\u6216\u8282\u70b9\u7684\u62bd\u8c61\u3002\u4f60\u53ef\u4ee5\u901a\u8fc7 Upstream \u5bf9\u8c61\u5bf9\u591a\u4e2a\u670d\u52a1\u8282\u70b9\u6309\u7167\u914d\u7f6e\u89c4\u5219\u8fdb\u884c\u8d1f\u8f7d\u5747\u8861\u3002"),(0,r.kt)("p",null,"\u4e0a\u6e38\u7684\u5730\u5740\u4fe1\u606f\u53ef\u4ee5\u76f4\u63a5\u914d\u7f6e\u5230",(0,r.kt)("a",{parentName:"p",href:"/zh/docs/apisix/terminology/route"},"\u8def\u7531"),"\uff08\u6216",(0,r.kt)("a",{parentName:"p",href:"/zh/docs/apisix/terminology/service"},"\u670d\u52a1"),"\uff09\u4e2d\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix/release/3.6/docs/assets/images/upstream-example.png",alt:"Upstream \u793a\u4f8b"})),(0,r.kt)("p",null,"\u5982\u4e0a\u56fe\u6240\u793a\uff0c\u5f53\u591a\u4e2a\u8def\u7531\uff08\u6216\u670d\u52a1\uff09\u4f7f\u7528\u8be5\u4e0a\u6e38\u65f6\uff0c\u4f60\u53ef\u4ee5\u5355\u72ec\u521b\u5efa\u4e0a\u6e38\u5bf9\u8c61\uff0c\u5728\u8def\u7531\u4e2d\u901a\u8fc7\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"upstream_id")," \u7684\u65b9\u5f0f\u5f15\u7528\u8d44\u6e90\uff0c\u51cf\u8f7b\u7ef4\u62a4\u538b\u529b\u3002"),(0,r.kt)("p",null,"\u4f60\u4e5f\u53ef\u4ee5\u5c06\u4e0a\u6e38\u7684\u4fe1\u606f\u76f4\u63a5\u914d\u7f6e\u5728\u6307\u5b9a\u8def\u7531\u6216\u670d\u52a1\u4e2d\uff0c\u4e0d\u8fc7\u8def\u7531\u4e2d\u7684\u914d\u7f6e\u4f18\u5148\u7ea7\u66f4\u9ad8\uff0c\u4f18\u5148\u7ea7\u884c\u4e3a\u4e0e",(0,r.kt)("a",{parentName:"p",href:"/zh/docs/apisix/terminology/plugin"},"\u63d2\u4ef6")," \u975e\u5e38\u76f8\u4f3c\u3002"),(0,r.kt)("h2",{id:"\u914d\u7f6e\u53c2\u6570"},"\u914d\u7f6e\u53c2\u6570"),(0,r.kt)("p",null,"APISIX \u7684 Upstream \u5bf9\u8c61\u9664\u4e86\u57fa\u672c\u7684\u8d1f\u8f7d\u5747\u8861\u7b97\u6cd5\u5916\uff0c\u8fd8\u652f\u6301\u5bf9\u4e0a\u6e38\u505a\u4e3b\u88ab\u52a8\u5065\u5eb7\u68c0\u67e5\u3001\u91cd\u8bd5\u7b49\u903b\u8f91\u3002\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u8003 ",(0,r.kt)("a",{parentName:"p",href:"/zh/docs/apisix/admin-api#upstream"},"Admin API \u4e2d\u7684 Upstream \u8d44\u6e90"),"\u3002"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u521b\u5efa\u4e0a\u6e38\u5bf9\u8c61\u7528\u4f8b\u3002"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/upstreams/1 \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "type": "chash",\n    "key": "remote_addr",\n    "nodes": {\n        "127.0.0.1:80": 1,\n        "httpbin.org:80": 2\n    }\n}\'\n')),(0,r.kt)("p",{parentName:"li"},"\u4e0a\u6e38\u5bf9\u8c61\u521b\u5efa\u540e\uff0c\u53ef\u4ee5\u88ab\u8def\u7531\u6216\u670d\u52a1\u5f15\u7528\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5728\u8def\u7531\u4e2d\u4f7f\u7528\u521b\u5efa\u7684\u4e0a\u6e38\u5bf9\u8c61\u3002"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/1 \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/index.html",\n    "upstream_id": 1\n}\'\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u4e3a\u65b9\u4fbf\u4f7f\u7528\uff0c\u4f60\u4e5f\u53ef\u4ee5\u76f4\u63a5\u628a\u4e0a\u6e38\u4fe1\u606f\u76f4\u63a5\u914d\u7f6e\u5728\u67d0\u4e2a\u8def\u7531\u6216\u670d\u52a1\u3002"))),(0,r.kt)("p",null,"\u4ee5\u4e0b\u793a\u4f8b\u662f\u5c06\u4e0a\u6e38\u4fe1\u606f\u76f4\u63a5\u914d\u7f6e\u5728\u8def\u7531\u4e2d\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'    curl http://127.0.0.1:9180/apisix/admin/routes/1 \\\n    -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n    {\n        "uri": "/index.html",\n        "plugins": {\n            "limit-count": {\n                "count": 2,\n                "time_window": 60,\n                "rejected_code": 503,\n                "key": "remote_addr"\n            }\n        },\n        "upstream": {\n            "type": "roundrobin",\n            "nodes": {\n                "127.0.0.1:1980": 1\n            }\n        }\n    }\'\n')),(0,r.kt)("h2",{id:"\u4f7f\u7528\u793a\u4f8b"},"\u4f7f\u7528\u793a\u4f8b"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u914d\u7f6e\u5065\u5eb7\u68c0\u67e5\u7684\u793a\u4f8b\u3002"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/1 \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/index.html",\n    "plugins": {\n        "limit-count": {\n            "count": 2,\n            "time_window": 60,\n            "rejected_code": 503,\n            "key": "remote_addr"\n        }\n    },\n    "upstream": {\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n        "type": "roundrobin",\n        "retries": 2,\n        "checks": {\n            "active": {\n                "http_path": "/status",\n                "host": "foo.com",\n                "healthy": {\n                    "interval": 2,\n                    "successes": 1\n                },\n                "unhealthy": {\n                    "interval": 1,\n                    "http_failures": 2\n                }\n            }\n        }\n    }\n}\'\n')),(0,r.kt)("p",{parentName:"li"},"  \u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u8003",(0,r.kt)("a",{parentName:"p",href:"/zh/docs/apisix/tutorials/health-check"},"\u5065\u5eb7\u68c0\u67e5\u7684\u6587\u6863"),"\u3002"))),(0,r.kt)("p",null,"\u4ee5\u4e0b\u662f\u4f7f\u7528\u4e0d\u540c ",(0,r.kt)("a",{parentName:"p",href:"/zh/docs/apisix/admin-api#upstream-body-request-methods"},(0,r.kt)("inlineCode",{parentName:"a"},"hash_on"))," \u7c7b\u578b\u7684\u914d\u7f6e\u793a\u4f8b\uff1a"),(0,r.kt)("h3",{id:"consumer"},"Consumer"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u521b\u5efa\u4e00\u4e2a Consumer \u5bf9\u8c61\u3002"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/consumers \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "username": "jack",\n    "plugins": {\n    "key-auth": {\n        "key": "auth-jack"\n        }\n    }\n}\'\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u521b\u5efa\u8def\u7531\uff0c\u542f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"key-auth")," \u63d2\u4ef6\uff0c\u914d\u7f6e ",(0,r.kt)("inlineCode",{parentName:"p"},"upstream.hash_on")," \u7684\u7c7b\u578b\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"consumer"),"\u3002"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/1 \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "plugins": {\n        "key-auth": {}\n    },\n    "upstream": {\n        "nodes": {\n            "127.0.0.1:1980": 1,\n            "127.0.0.1:1981": 1\n        },\n        "type": "chash",\n        "hash_on": "consumer"\n    },\n    "uri": "/server_port"\n}\'\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u6d4b\u8bd5\u8bf7\u6c42\uff0c\u8ba4\u8bc1\u901a\u8fc7\u540e\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"consumer_name")," \u5c06\u4f5c\u4e3a\u8d1f\u8f7d\u5747\u8861\u54c8\u5e0c\u7b97\u6cd5\u7684\u54c8\u5e0c\u503c\u3002"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/server_port -H "apikey: auth-jack"\n')))),(0,r.kt)("h3",{id:"cookie"},"Cookie"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u521b\u5efa\u8def\u7531\u5e76\u914d\u7f6e ",(0,r.kt)("inlineCode",{parentName:"p"},"upstream.hash_on")," \u7684\u7c7b\u578b\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"cookie"),"\u3002"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/1 \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/hash_on_cookie",\n    "upstream": {\n        "key": "sid",\n        "type": "chash",\n        "hash_on": "cookie",\n        "nodes": {\n            "127.0.0.1:1980": 1,\n            "127.0.0.1:1981": 1\n        }\n    }\n}\'\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5ba2\u6237\u7aef\u8bf7\u6c42\u643a\u5e26 ",(0,r.kt)("inlineCode",{parentName:"p"},"Cookie"),"\u3002"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl http://127.0.0.1:9080/hash_on_cookie \\\n-H 'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1' \\\n-H \"Cookie: sid=3c183a30cffcda1408daf1c61d47b274\"\n")))),(0,r.kt)("h3",{id:"header"},"Header"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u521b\u5efa\u8def\u7531\u5e76\u914d\u7f6e ",(0,r.kt)("inlineCode",{parentName:"p"},"upstream.hash_on")," \u7684\u7c7b\u578b\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"header"),"\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"key")," \u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"content-type"),"\u3002"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/1 \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/hash_on_header",\n    "upstream": {\n        "key": "content-type",\n        "type": "chash",\n        "hash_on": "header",\n        "nodes": {\n            "127.0.0.1:1980": 1,\n            "127.0.0.1:1981": 1\n        }\n    }\n}\'\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5ba2\u6237\u7aef\u8bf7\u6c42\u643a\u5e26 ",(0,r.kt)("inlineCode",{parentName:"p"},"content-type")," \u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"header"),"\u3002"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"}," curl http://127.0.0.1:9080/hash_on_header \\\n -H 'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1' \\\n -H \"Content-Type: application/json\"\n")))}c.isMDXComponent=!0}}]);