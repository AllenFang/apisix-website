"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[97506],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>u});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=a.createContext({}),o=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=o(e.components);return a.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=o(t),u=i,h=m["".concat(c,".").concat(u)]||m[u]||d[u]||r;return t?a.createElement(h,s(s({ref:n},p),{},{components:t})):a.createElement(h,s({ref:n},p))}));function u(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,s=new Array(r);s[0]=m;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,s[1]=l;for(var o=2;o<r;o++)s[o]=t[o];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},81105:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var a=t(87462),i=(t(67294),t(3905));const r={title:"\u914d\u7f6e\u5ba2\u6237\u7aef\u4e0e APISIX \u4e4b\u95f4\u7684\u53cc\u5411\u8ba4\u8bc1\uff08mTLS\uff09",keywords:["mTLS","API \u7f51\u5173","APISIX"],description:"\u672c\u6587\u4ecb\u7ecd\u4e86\u5982\u4f55\u5728\u5ba2\u6237\u7aef\u548c Apache APISIX \u4e4b\u95f4\u914d\u7f6e\u53cc\u5411\u8ba4\u8bc1\uff08mTLS\uff09\u3002"},s=void 0,l={unversionedId:"tutorials/client-to-apisix-mtls",id:"tutorials/client-to-apisix-mtls",isDocsHomePage:!1,title:"\u914d\u7f6e\u5ba2\u6237\u7aef\u4e0e APISIX \u4e4b\u95f4\u7684\u53cc\u5411\u8ba4\u8bc1\uff08mTLS\uff09",description:"\u672c\u6587\u4ecb\u7ecd\u4e86\u5982\u4f55\u5728\u5ba2\u6237\u7aef\u548c Apache APISIX \u4e4b\u95f4\u914d\u7f6e\u53cc\u5411\u8ba4\u8bc1\uff08mTLS\uff09\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs-docs-apisix/current/tutorials/client-to-apisix-mtls.md",sourceDirName:"tutorials",slug:"/tutorials/client-to-apisix-mtls",permalink:"/zh/docs/apisix/next/tutorials/client-to-apisix-mtls",editUrl:"/zh/edit#https://github.com/apache/apisix/edit/master/docs/zh/latest/tutorials/client-to-apisix-mtls.md",tags:[],version:"current",frontMatter:{title:"\u914d\u7f6e\u5ba2\u6237\u7aef\u4e0e APISIX \u4e4b\u95f4\u7684\u53cc\u5411\u8ba4\u8bc1\uff08mTLS\uff09",keywords:["mTLS","API \u7f51\u5173","APISIX"],description:"\u672c\u6587\u4ecb\u7ecd\u4e86\u5982\u4f55\u5728\u5ba2\u6237\u7aef\u548c Apache APISIX \u4e4b\u95f4\u914d\u7f6e\u53cc\u5411\u8ba4\u8bc1\uff08mTLS\uff09\u3002"},sidebar:"docs",previous:{title:"Add multiple API versions",permalink:"/zh/docs/apisix/next/tutorials/add-multiple-api-versions"},next:{title:"WebSocket Authentication",permalink:"/zh/docs/apisix/next/tutorials/websocket-authentication"}},c=[{value:"\u914d\u7f6e",id:"\u914d\u7f6e",children:[{value:"\u751f\u6210\u8bc1\u4e66",id:"\u751f\u6210\u8bc1\u4e66",children:[]},{value:"\u5728 APISIX \u4e2d\u914d\u7f6e\u8bc1\u4e66",id:"\u5728-apisix-\u4e2d\u914d\u7f6e\u8bc1\u4e66",children:[]},{value:"\u914d\u7f6e\u6d4b\u8bd5\u8def\u7531",id:"\u914d\u7f6e\u6d4b\u8bd5\u8def\u7531",children:[]},{value:"\u6d4b\u8bd5\u9a8c\u8bc1",id:"\u6d4b\u8bd5\u9a8c\u8bc1",children:[]}]},{value:"\u57fa\u4e8e\u5bf9 URI \u6b63\u5219\u8868\u8fbe\u5f0f\u5339\u914d\uff0c\u7ed5\u8fc7 MTLS",id:"\u57fa\u4e8e\u5bf9-uri-\u6b63\u5219\u8868\u8fbe\u5f0f\u5339\u914d\u7ed5\u8fc7-mtls",children:[{value:"\u65f6\u5e8f\u56fe",id:"\u65f6\u5e8f\u56fe",children:[]},{value:"\u4f8b\u5b50",id:"\u4f8b\u5b50",children:[]}]},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",children:[]}],o={toc:c};function p(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,a.Z)({},o,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"mTLS \u662f\u4e00\u79cd\u53cc\u5411\u8eab\u4efd\u8ba4\u8bc1\u7684\u65b9\u5f0f\u3002\u5982\u679c\u5728\u4f60\u7684\u7f51\u7edc\u73af\u5883\u4e2d\uff0c\u8981\u6c42\u53ea\u6709\u53d7\u4fe1\u4efb\u7684\u5ba2\u6237\u7aef\u624d\u53ef\u4ee5\u8bbf\u95ee\u670d\u52a1\u7aef\uff0c\u90a3\u4e48\u53ef\u4ee5\u542f\u7528 mTLS \u6765\u9a8c\u8bc1\u5ba2\u6237\u7aef\u7684\u8eab\u4efd\uff0c\u4fdd\u8bc1\u670d\u52a1\u7aef API \u7684\u5b89\u5168\u3002\u672c\u6587\u4e3b\u8981\u4ecb\u7ecd\u4e86\u5982\u4f55\u914d\u7f6e\u5ba2\u6237\u7aef\u4e0e Apache APISIX \u4e4b\u95f4\u7684\u53cc\u5411\u8ba4\u8bc1\uff08mTLS\uff09\u3002"),(0,i.kt)("h2",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),(0,i.kt)("p",null,"\u672c\u793a\u4f8b\u5305\u542b\u4ee5\u4e0b\u8fc7\u7a0b\uff1a"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u751f\u6210\u8bc1\u4e66\uff1b"),(0,i.kt)("li",{parentName:"ol"},"\u5728 APISIX \u4e2d\u914d\u7f6e\u8bc1\u4e66\uff1b"),(0,i.kt)("li",{parentName:"ol"},"\u5728 APISIX \u4e2d\u521b\u5efa\u5e76\u914d\u7f6e\u8def\u7531\uff1b"),(0,i.kt)("li",{parentName:"ol"},"\u6d4b\u8bd5\u9a8c\u8bc1\u3002")),(0,i.kt)("p",null,"\u4e3a\u4e86\u4f7f\u6d4b\u8bd5\u7ed3\u679c\u66f4\u52a0\u6e05\u6670\uff0c\u672c\u6587\u63d0\u5230\u7684\u793a\u4f8b\u4f1a\u5411\u4e0a\u6e38\u4f20\u9012\u4e00\u4e9b\u6709\u5173\u5ba2\u6237\u7aef\u8bc1\u4e66\u7684\u4fe1\u606f\uff0c\u5176\u4e2d\u5305\u62ec\uff1a",(0,i.kt)("inlineCode",{parentName:"p"},"serial"),"\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"fingerprint")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"common name"),"\u3002"),(0,i.kt)("h3",{id:"\u751f\u6210\u8bc1\u4e66"},"\u751f\u6210\u8bc1\u4e66"),(0,i.kt)("p",null,"\u6211\u4eec\u9700\u8981\u751f\u6210\u4e09\u4e2a\u6d4b\u8bd5\u8bc1\u4e66\uff0c\u5206\u522b\u662f\u6839\u8bc1\u4e66\u3001\u670d\u52a1\u5668\u8bc1\u4e66\u3001\u5ba2\u6237\u7aef\u8bc1\u4e66\u3002\u53ea\u9700\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\uff0c\u5c31\u53ef\u4ee5\u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"p"},"OpenSSL")," \u751f\u6210\u6211\u4eec\u9700\u8981\u7684\u6d4b\u8bd5\u8bc1\u4e66\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'# \u6839\u8bc1\u4e66\nopenssl genrsa -out ca.key 2048\nopenssl req -new -sha256 -key ca.key -out ca.csr -subj "/CN=ROOTCA"\nopenssl x509 -req -days 36500 -sha256 -extensions v3_ca -signkey ca.key -in ca.csr -out ca.cer\n\n# \u670d\u52a1\u5668\u8bc1\u4e66\nopenssl genrsa -out server.key 2048\n# \u6ce8\u610f\uff1aCN \u503c\u4e2d\u7684 `test.com` \u4e3a\u6211\u4eec\u8981\u6d4b\u8bd5\u7684\u57df\u540d/\u4e3b\u673a\u540d\u3002\nopenssl req -new -sha256 -key server.key -out server.csr -subj "/CN=test.com"\nopenssl x509 -req -days 36500 -sha256 -extensions v3_req  -CA  ca.cer -CAkey ca.key  -CAserial ca.srl  -CAcreateserial -in server.csr -out server.cer\n\n# \u5ba2\u6237\u7aef\u8bc1\u4e66\nopenssl genrsa -out client.key 2048\nopenssl req -new -sha256 -key client.key  -out client.csr -subj "/CN=CLIENT"\nopenssl x509 -req -days 36500 -sha256 -extensions v3_req  -CA  ca.cer -CAkey ca.key  -CAserial ca.srl  -CAcreateserial -in client.csr -out client.cer\n\n# \u5c06\u5ba2\u6237\u7aef\u8bc1\u4e66\u8f6c\u6362\u4e3a pkcs12 \u4f9b Windows \u4f7f\u7528\uff08\u53ef\u9009\uff09\nopenssl pkcs12 -export -clcerts -in client.cer -inkey client.key -out client.p12\n')),(0,i.kt)("h3",{id:"\u5728-apisix-\u4e2d\u914d\u7f6e\u8bc1\u4e66"},"\u5728 APISIX \u4e2d\u914d\u7f6e\u8bc1\u4e66"),(0,i.kt)("p",null,"\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"curl")," \u547d\u4ee4\u8bf7\u6c42 APISIX Admin API \u521b\u5efa\u4e00\u4e2a SSL \u8d44\u6e90\u5e76\u6307\u5b9a SNI\u3002"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u6ce8\u610f")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u8bc1\u4e66\u4e2d\u7684\u6362\u884c\u9700\u8981\u66ff\u6362\u4e3a\u5176\u8f6c\u4e49\u5b57\u7b26 ",(0,i.kt)("inlineCode",{parentName:"p"},"\\n")))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'curl -X PUT \'http://127.0.0.1:9180/apisix/admin/ssls/1\' \\\n--header \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{\n    "sni": "test.com",\n    "cert": "<\u670d\u52a1\u5668\u8bc1\u4e66>",\n    "key": "<\u670d\u52a1\u5668\u8bc1\u4e66\u79c1\u94a5>",\n    "client": {\n        "ca": "<\u5ba2\u6237\u7aef\u8bc1\u4e66\u516c\u94a5>"\n    }\n}\'\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"sni"),"\uff1a\u6307\u5b9a\u8bc1\u4e66\u7684\u57df\u540d\uff08CN\uff09\uff0c\u5f53\u5ba2\u6237\u7aef\u5c1d\u8bd5\u901a\u8fc7 TLS \u4e0e APISIX \u63e1\u624b\u65f6\uff0cAPISIX \u4f1a\u5c06 ",(0,i.kt)("inlineCode",{parentName:"li"},"ClientHello")," \u4e2d\u7684 SNI \u6570\u636e\u4e0e\u8be5\u5b57\u6bb5\u8fdb\u884c\u5339\u914d\uff0c\u627e\u5230\u5bf9\u5e94\u7684\u670d\u52a1\u5668\u8bc1\u4e66\u8fdb\u884c\u63e1\u624b\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"cert"),"\uff1a\u670d\u52a1\u5668\u8bc1\u4e66\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"key"),"\uff1a\u670d\u52a1\u5668\u8bc1\u4e66\u7684\u79c1\u94a5\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"client.ca"),"\uff1a\u7528\u6765\u9a8c\u8bc1\u5ba2\u6237\u7aef\u8bc1\u4e66\u7684 CA \u6587\u4ef6\u3002\u4e3a\u4e86\u6f14\u793a\u65b9\u4fbf\uff0c\u8fd9\u91cc\u4f7f\u7528\u4e86\u540c\u4e00\u4e2a ",(0,i.kt)("inlineCode",{parentName:"li"},"CA"),"\u3002")),(0,i.kt)("h3",{id:"\u914d\u7f6e\u6d4b\u8bd5\u8def\u7531"},"\u914d\u7f6e\u6d4b\u8bd5\u8def\u7531"),(0,i.kt)("p",null,"\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"curl")," \u547d\u4ee4\u8bf7\u6c42 APISIX Admin API \u521b\u5efa\u4e00\u4e2a\u8def\u7531\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'curl -X PUT \'http://127.0.0.1:9180/apisix/admin/routes/1\' \\\n--header \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{\n    "uri": "/anything",\n    "plugins": {\n        "proxy-rewrite": {\n            "headers": {\n                "X-Ssl-Client-Fingerprint": "$ssl_client_fingerprint",\n                "X-Ssl-Client-Serial": "$ssl_client_serial",\n                "X-Ssl-Client-S-DN": "$ssl_client_s_dn"\n            }\n        }\n    },\n    "upstream": {\n        "nodes": {\n            "httpbin.org":1\n        },\n        "type":"roundrobin"\n    }\n}\'\n')),(0,i.kt)("p",null,"APISIX \u4f1a\u6839\u636e SNI \u548c\u4e0a\u4e00\u6b65\u521b\u5efa\u7684 SSL \u8d44\u6e90\u81ea\u52a8\u5904\u7406 TLS \u63e1\u624b\uff0c\u6240\u4ee5\u6211\u4eec\u4e0d\u9700\u8981\u5728\u8def\u7531\u4e2d\u6307\u5b9a\u4e3b\u673a\u540d\uff08\u4f46\u4e5f\u53ef\u4ee5\u663e\u5f0f\u5730\u6307\u5b9a\u4e3b\u673a\u540d\uff09\u3002"),(0,i.kt)("p",null,"\u53e6\u5916\uff0c\u4e0a\u9762 ",(0,i.kt)("inlineCode",{parentName:"p"},"curl")," \u547d\u4ee4\u4e2d\uff0c\u6211\u4eec\u542f\u7528\u4e86 ",(0,i.kt)("inlineCode",{parentName:"p"},"proxy-rewrite")," \u63d2\u4ef6\uff0c\u5b83\u5c06\u52a8\u6001\u5730\u66f4\u65b0\u8bf7\u6c42\u5934\u7684\u4fe1\u606f\uff0c\u793a\u4f8b\u4e2d\u53d8\u91cf\u503c\u7684\u6765\u6e90\u662f ",(0,i.kt)("inlineCode",{parentName:"p"},"NGINX")," \u53d8\u91cf\uff0c\u4f60\u53ef\u4ee5\u5728\u8fd9\u91cc\u627e\u5230\u5b83\u4eec\uff1a",(0,i.kt)("a",{parentName:"p",href:"http://nginx.org/en/docs/http/ngx_http_ssl_module.html#variables%E3%80%82"},"http://nginx.org/en/docs/http/ngx_http_ssl_module.html#variables\u3002")),(0,i.kt)("h3",{id:"\u6d4b\u8bd5\u9a8c\u8bc1"},"\u6d4b\u8bd5\u9a8c\u8bc1"),(0,i.kt)("p",null,"\u7531\u4e8e\u6211\u4eec\u4f7f\u7528\u57df\u540d ",(0,i.kt)("inlineCode",{parentName:"p"},"test.com")," \u4f5c\u4e3a\u6d4b\u8bd5\u57df\u540d\uff0c\u5728\u5f00\u59cb\u9a8c\u8bc1\u4e4b\u524d\uff0c\u6211\u4eec\u5fc5\u987b\u5148\u5c06\u6d4b\u8bd5\u57df\u540d\u6dfb\u52a0\u5230\u4f60\u7684 DNS \u6216\u8005\u672c\u5730\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"hosts")," \u6587\u4ef6\u4e2d\u3002"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u5982\u679c\u6211\u4eec\u4e0d\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"li"},"hosts"),"\uff0c\u53ea\u662f\u60f3\u6d4b\u8bd5\u4e00\u4e0b\u7ed3\u679c\uff0c\u90a3\u4e48\u4f60\u53ef\u4ee5\u4f7f\u7528\u4e0b\u9762\u7684\u547d\u4ee4\u76f4\u63a5\u8fdb\u884c\u6d4b\u8bd5\uff1a")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'curl --resolve "test.com:9443:127.0.0.1" https://test.com:9443/anything -k --cert ./client.cer --key ./client.key\n')),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"\u5982\u679c\u4f60\u9700\u8981\u4fee\u6539 ",(0,i.kt)("inlineCode",{parentName:"li"},"hosts"),"\uff0c\u8bf7\u9605\u8bfb\u4e0b\u9762\u793a\u4f8b\uff08\u4ee5 Ubuntu \u4e3a\u4f8b\uff09\uff1a")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u4fee\u6539 /etc/hosts \u6587\u4ef6"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"# 127.0.0.1 localhost\n127.0.0.1 test.com\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u9a8c\u8bc1\u6d4b\u8bd5\u57df\u540d\u662f\u5426\u751f\u6548"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"ping test.com\n\nPING test.com (127.0.0.1) 56(84) bytes of data.\n64 bytes from localhost.localdomain (127.0.0.1): icmp_seq=1 ttl=64 time=0.028 ms\n64 bytes from localhost.localdomain (127.0.0.1): icmp_seq=2 ttl=64 time=0.037 ms\n64 bytes from localhost.localdomain (127.0.0.1): icmp_seq=3 ttl=64 time=0.036 ms\n64 bytes from localhost.localdomain (127.0.0.1): icmp_seq=4 ttl=64 time=0.031 ms\n^C\n--- test.com ping statistics ---\n4 packets transmitted, 4 received, 0% packet loss, time 3080ms\nrtt min/avg/max/mdev = 0.028/0.033/0.037/0.003 ms\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u6d4b\u8bd5"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"curl https://test.com:9443/anything -k --cert ./client.cer --key ./client.key\n")),(0,i.kt)("p",{parentName:"li"},"\u7136\u540e\u4f60\u5c06\u6536\u5230\u4e0b\u9762\u7684\u54cd\u5e94\u4f53\uff1a"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'{\n  "args": {},\n  "data": "",\n  "files": {},\n  "form": {},\n  "headers": {\n    "Accept": "*/*",\n    "Host": "test.com",\n    "User-Agent": "curl/7.81.0",\n    "X-Amzn-Trace-Id": "Root=1-63256343-17e870ca1d8f72dc40b2c5a9",\n    "X-Forwarded-Host": "test.com",\n    "X-Ssl-Client-Fingerprint": "c1626ce3bca723f187d04e3757f1d000ca62d651",\n    "X-Ssl-Client-S-Dn": "CN=CLIENT",\n    "X-Ssl-Client-Serial": "5141CC6F5E2B4BA31746D7DBFE9BA81F069CF970"\n  },\n  "json": null,\n  "method": "GET",\n  "origin": "127.0.0.1",\n  "url": "http://test.com/anything"\n}\n')))),(0,i.kt)("p",null,"\u7531\u4e8e\u6211\u4eec\u5728\u793a\u4f8b\u4e2d\u914d\u7f6e\u4e86 ",(0,i.kt)("inlineCode",{parentName:"p"},"proxy-rewrite")," \u63d2\u4ef6\uff0c\u6211\u4eec\u53ef\u4ee5\u770b\u5230\u54cd\u5e94\u4f53\u4e2d\u5305\u542b\u4e0a\u6e38\u6536\u5230\u7684\u8bf7\u6c42\u4f53\uff0c\u5305\u542b\u4e86\u6b63\u786e\u6570\u636e\u3002"),(0,i.kt)("h2",{id:"\u57fa\u4e8e\u5bf9-uri-\u6b63\u5219\u8868\u8fbe\u5f0f\u5339\u914d\u7ed5\u8fc7-mtls"},"\u57fa\u4e8e\u5bf9 URI \u6b63\u5219\u8868\u8fbe\u5f0f\u5339\u914d\uff0c\u7ed5\u8fc7 MTLS"),(0,i.kt)("p",null,"APISIX \u5141\u8bb8\u914d\u7f6e URI \u767d\u540d\u5355\u4ee5\u4fbf\u7ed5\u8fc7 MTLS\u3002\u5982\u679c\u8bf7\u6c42\u7684 URI \u5728\u767d\u540d\u5355\u5185\uff0c\u5ba2\u6237\u7aef\u8bc1\u4e66\u5c06\u4e0d\u88ab\u68c0\u67e5\u3002\u6ce8\u610f\uff0c\u5982\u679c\u9488\u5bf9\u767d\u540d\u5355\u5916\u7684 URI \u53d1\u8bf7\u6c42\uff0c\u800c\u8be5\u8bf7\u6c42\u7f3a\u4e4f\u5ba2\u6237\u7aef\u8bc1\u4e66\u6216\u8005\u63d0\u4f9b\u4e86\u975e\u6cd5\u5ba2\u6237\u7aef\u8bc1\u4e66\uff0c\u4f1a\u5f97\u5230 HTTP 400 \u54cd\u5e94\uff0c\u800c\u4e0d\u662f\u5728 SSL \u63e1\u624b\u9636\u6bb5\u88ab\u62d2\u7edd\u3002"),(0,i.kt)("h3",{id:"\u65f6\u5e8f\u56fe"},"\u65f6\u5e8f\u56fe"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix/master/docs/assets/images/skip-mtls.png",alt:"skip mtls"})),(0,i.kt)("h3",{id:"\u4f8b\u5b50"},"\u4f8b\u5b50"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u914d\u7f6e\u8def\u7531\u548c\u8bc1\u4e66")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl http://127.0.0.1:9180/apisix/admin/routes/1 \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/*",\n    "upstream": {\n        "nodes": {\n            "httpbin.org": 1\n        }\n    }\n}\'\n\ncurl http://127.0.0.1:9180/apisix/admin/ssls/1 \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "cert": "\'"$(<t/certs/mtls_server.crt)"\'",\n    "key": "\'"$(<t/certs/mtls_server.key)"\'",\n    "snis": [\n        "*.apisix.dev"\n    ],\n    "client": {\n        "ca": "\'"$(<t/certs/mtls_ca.crt)"\'",\n        "depth": 10,\n        "skip_mtls_uri_regex": [\n            "/anything.*"\n        ]\n    }\n}\'\n\n\n2. \u5982\u679c\u6ca1\u63d0\u4f9b\u5ba2\u6237\u7aef\u8bc1\u4e66\uff0c\u800c URI \u53c8\u4e0d\u5728\u767d\u540d\u5355\u5185\uff0c\u4f1a\u5f97\u5230 HTTP 400 \u54cd\u5e94\u3002\n\n```bash\ncurl https://admin.apisix.dev:9443/uuid -v \\\n--resolve \'admin.apisix.dev:9443:127.0.0.1\' --cacert t/certs/mtls_ca.crt\n* Added admin.apisix.dev:9443:127.0.0.1 to DNS cache\n* Hostname admin.apisix.dev was found in DNS cache\n*   Trying 127.0.0.1:9443...\n* TCP_NODELAY set\n* Connected to admin.apisix.dev (127.0.0.1) port 9443 (#0)\n* ALPN, offering h2\n* ALPN, offering http/1.1\n* successfully set certificate verify locations:\n*   CAfile: t/certs/mtls_ca.crt\n  CApath: /etc/ssl/certs\n* TLSv1.3 (OUT), TLS handshake, Client hello (1):\n* TLSv1.3 (IN), TLS handshake, Server hello (2):\n* TLSv1.3 (IN), TLS handshake, Encrypted Extensions (8):\n* TLSv1.3 (IN), TLS handshake, Request CERT (13):\n* TLSv1.3 (IN), TLS handshake, Certificate (11):\n* TLSv1.3 (IN), TLS handshake, CERT verify (15):\n* TLSv1.3 (IN), TLS handshake, Finished (20):\n* TLSv1.3 (OUT), TLS change cipher, Change cipher spec (1):\n* TLSv1.3 (OUT), TLS handshake, Certificate (11):\n* TLSv1.3 (OUT), TLS handshake, Finished (20):\n* SSL connection using TLSv1.3 / TLS_AES_256_GCM_SHA384\n* ALPN, server accepted to use h2\n* Server certificate:\n*  subject: C=cn; ST=GuangDong; L=ZhuHai; CN=admin.apisix.dev; OU=ops\n*  start date: Dec  1 10:17:24 2022 GMT\n*  expire date: Aug 18 10:17:24 2042 GMT\n*  subjectAltName: host "admin.apisix.dev" matched cert\'s "admin.apisix.dev"\n*  issuer: C=cn; ST=GuangDong; L=ZhuHai; CN=ca.apisix.dev; OU=ops\n*  SSL certificate verify ok.\n* Using HTTP2, server supports multi-use\n* Connection state changed (HTTP/2 confirmed)\n* Copying HTTP/2 data in stream buffer to connection buffer after upgrade: len=0\n* Using Stream ID: 1 (easy handle 0x56246de24e30)\n> GET /uuid HTTP/2\n> Host: admin.apisix.dev:9443\n> user-agent: curl/7.68.0\n> accept: */*\n>\n* TLSv1.3 (IN), TLS handshake, Newsession Ticket (4):\n* TLSv1.3 (IN), TLS handshake, Newsession Ticket (4):\n* old SSL session ID is stale, removing\n* Connection state changed (MAX_CONCURRENT_STREAMS == 128)!\n< HTTP/2 400\n< date: Fri, 21 Apr 2023 07:53:23 GMT\n< content-type: text/html; charset=utf-8\n< content-length: 229\n< server: APISIX/3.2.0\n<\n<html>\n<head><title>400 Bad Request</title></head>\n<body>\n<center><h1>400 Bad Request</h1></center>\n<hr><center>openresty</center>\n<p><em>Powered by <a href="https://apisix.apache.org/">APISIX</a>.</em></p></body>\n</html>\n* Connection #0 to host admin.apisix.dev left intact\n\n\n3. \u867d\u7136\u6ca1\u63d0\u4f9b\u5ba2\u6237\u7aef\u8bc1\u4e66\uff0c\u4f46\u662f URI \u5728\u767d\u540d\u5355\u5185\uff0c\u8bf7\u6c42\u4f1a\u88ab\u6210\u529f\u5904\u7406\u548c\u54cd\u5e94\u3002\n\n```bash\ncurl https://admin.apisix.dev:9443/anything/foobar -i \\\n--resolve \'admin.apisix.dev:9443:127.0.0.1\' --cacert t/certs/mtls_ca.crt\nHTTP/2 200\ncontent-type: application/json\ncontent-length: 416\ndate: Fri, 21 Apr 2023 07:58:28 GMT\naccess-control-allow-origin: *\naccess-control-allow-credentials: true\nserver: APISIX/3.2.0\n...\n')),(0,i.kt)("h2",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),(0,i.kt)("p",null,"\u60f3\u4e86\u89e3\u66f4\u591a\u6709\u5173 Apache APISIX \u7684 mTLS \u529f\u80fd\u4ecb\u7ecd\uff0c\u53ef\u4ee5\u9605\u8bfb\uff1a",(0,i.kt)("a",{parentName:"p",href:"/zh/docs/apisix/next/mtls"},"TLS \u53cc\u5411\u8ba4\u8bc1"),"\u3002"))}p.isMDXComponent=!0}}]);