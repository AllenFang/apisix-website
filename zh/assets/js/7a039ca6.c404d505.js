"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[82699],{3905:(t,e,n)=>{n.d(e,{Zo:()=>g,kt:()=>u});var a=n(67294);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,l=function(t,e){if(null==t)return{};var n,a,l={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var p=a.createContext({}),d=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},g=function(t){var e=d(t.components);return a.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},s=a.forwardRef((function(t,e){var n=t.components,l=t.mdxType,r=t.originalType,p=t.parentName,g=o(t,["components","mdxType","originalType","parentName"]),s=d(n),u=l,k=s["".concat(p,".").concat(u)]||s[u]||m[u]||r;return n?a.createElement(k,i(i({ref:e},g),{},{components:n})):a.createElement(k,i({ref:e},g))}));function u(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=n.length,i=new Array(r);i[0]=s;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:l,i[1]=o;for(var d=2;d<r;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},93862:(t,e,n)=>{n.r(e),n.d(e,{contentTitle:()=>i,default:()=>g,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var a=n(87462),l=(n(67294),n(3905));const r={title:"loggly",keywords:["APISIX","API \u7f51\u5173","Plugin","SolarWinds Loggly"],description:"API \u7f51\u5173 Apache APISIX loggly \u63d2\u4ef6\u53ef\u7528\u4e8e\u5c06\u65e5\u5fd7\u8f6c\u53d1\u5230 SolarWinds Loggly \u8fdb\u884c\u5206\u6790\u548c\u5b58\u50a8\u3002"},i=void 0,o={unversionedId:"plugins/loggly",id:"version-3.3/plugins/loggly",isDocsHomePage:!1,title:"loggly",description:"API \u7f51\u5173 Apache APISIX loggly \u63d2\u4ef6\u53ef\u7528\u4e8e\u5c06\u65e5\u5fd7\u8f6c\u53d1\u5230 SolarWinds Loggly \u8fdb\u884c\u5206\u6790\u548c\u5b58\u50a8\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs-docs-apisix/version-3.3/plugins/loggly.md",sourceDirName:"plugins",slug:"/plugins/loggly",permalink:"/zh/docs/apisix/3.3/plugins/loggly",editUrl:"/zh/edit#https://github.com/apache/apisix/edit/release/3.3/docs/zh/latest/plugins/loggly.md",tags:[],version:"3.3",frontMatter:{title:"loggly",keywords:["APISIX","API \u7f51\u5173","Plugin","SolarWinds Loggly"],description:"API \u7f51\u5173 Apache APISIX loggly \u63d2\u4ef6\u53ef\u7528\u4e8e\u5c06\u65e5\u5fd7\u8f6c\u53d1\u5230 SolarWinds Loggly \u8fdb\u884c\u5206\u6790\u548c\u5b58\u50a8\u3002"},sidebar:"version-3.3/docs",previous:{title:"file-logger",permalink:"/zh/docs/apisix/3.3/plugins/file-logger"},next:{title:"elasticsearch-logger",permalink:"/zh/docs/apisix/3.3/plugins/elasticsearch-logger"}},p=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",children:[]},{value:"\u5c5e\u6027",id:"\u5c5e\u6027",children:[]},{value:"\u63d2\u4ef6\u5143\u6570\u636e\u8bbe\u7f6e",id:"\u63d2\u4ef6\u5143\u6570\u636e\u8bbe\u7f6e",children:[]},{value:"\u542f\u7528\u63d2\u4ef6",id:"\u542f\u7528\u63d2\u4ef6",children:[]},{value:"\u6d4b\u8bd5\u63d2\u4ef6",id:"\u6d4b\u8bd5\u63d2\u4ef6",children:[]},{value:"\u7981\u7528\u63d2\u4ef6",id:"\u7981\u7528\u63d2\u4ef6",children:[]}],d={toc:p};function g(t){let{components:e,...n}=t;return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"loggly")," \u63d2\u4ef6\u53ef\u7528\u4e8e\u5c06\u65e5\u5fd7\u8f6c\u53d1\u5230 ",(0,l.kt)("a",{parentName:"p",href:"https://www.solarwinds.com/loggly"},"SolarWinds Loggly")," \u8fdb\u884c\u5206\u6790\u548c\u5b58\u50a8\u3002"),(0,l.kt)("p",null,"\u5f53\u542f\u7528\u63d2\u4ef6\u65f6\uff0cAPISIX \u4f1a\u5c06\u8bf7\u6c42\u4e0a\u4e0b\u6587\u4fe1\u606f\u5e8f\u5217\u5316\u4e3a\u7b26\u5408 ",(0,l.kt)("a",{parentName:"p",href:"https://documentation.solarwinds.com/en/success_center/loggly/content/admin/streaming-syslog-without-using-files.htm?cshid=loggly_streaming-syslog-without-using-files"},"Loggly Syslog")," \u7684\u6570\u636e\u683c\u5f0f\uff0c\u5373\u5177\u6709 ",(0,l.kt)("a",{parentName:"p",href:"https://datatracker.ietf.org/doc/html/rfc5424"},"RFC5424")," \u517c\u5bb9\u6807\u5934\u7684 Syslog\u3002"),(0,l.kt)("h2",{id:"\u5c5e\u6027"},"\u5c5e\u6027"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5fc5\u9009\u9879"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"customer_token"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u5c06\u65e5\u5fd7\u53d1\u9001\u5230 Loggly \u65f6\u4f7f\u7528\u7684\u552f\u4e00\u6807\u8bc6\u7b26\uff0c\u4ee5\u786e\u4fdd\u5c06\u65e5\u5fd7\u53d1\u9001\u5230\u6b63\u786e\u7684\u7ec4\u7ec7\u5e10\u6237\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"severity"),(0,l.kt)("td",{parentName:"tr",align:null},"string (enum)"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"INFO"),(0,l.kt)("td",{parentName:"tr",align:null},"Syslog \u65e5\u5fd7\u4e8b\u4ef6\u7684\u4e25\u91cd\u6027\u7ea7\u522b\u3002 \u5305\u62ec\uff1a",(0,l.kt)("inlineCode",{parentName:"td"},"DEBUG"),"\u3001",(0,l.kt)("inlineCode",{parentName:"td"},"INFO"),"\u3001",(0,l.kt)("inlineCode",{parentName:"td"},"NOTICE"),"\u3001",(0,l.kt)("inlineCode",{parentName:"td"},"WARNING"),"\u3001",(0,l.kt)("inlineCode",{parentName:"td"},"ERR"),"\u3001",(0,l.kt)("inlineCode",{parentName:"td"},"CRIT"),"\u3001",(0,l.kt)("inlineCode",{parentName:"td"},"ALERT")," \u548c ",(0,l.kt)("inlineCode",{parentName:"td"},"EMEGR"),"\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"severity_map"),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"nil"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e00\u79cd\u5c06\u4e0a\u6e38 HTTP \u54cd\u5e94\u4ee3\u7801\u6620\u5c04\u5230 Syslog \u4e2d\u7684\u65b9\u6cd5\u3002 ",(0,l.kt)("inlineCode",{parentName:"td"},"key-value"),"\uff0c\u5176\u4e2d ",(0,l.kt)("inlineCode",{parentName:"td"},"key")," \u662f HTTP \u54cd\u5e94\u4ee3\u7801\uff0c",(0,l.kt)("inlineCode",{parentName:"td"},"value"),"\u662f Syslog \u4e25\u91cd\u7ea7\u522b\u3002\u4f8b\u5982",(0,l.kt)("inlineCode",{parentName:"td"},'{"410": "CRIT"}'),"\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"tags"),(0,l.kt)("td",{parentName:"tr",align:null},"array"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u5143\u6570\u636e\u5c06\u5305\u542b\u5728\u4efb\u4f55\u4e8b\u4ef6\u65e5\u5fd7\u4e2d\uff0c\u4ee5\u5e2e\u52a9\u8fdb\u884c\u5206\u6bb5\u548c\u8fc7\u6ee4\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"log_format"),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"include_req_body"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5f53\u8bbe\u7f6e\u4e3a ",(0,l.kt)("inlineCode",{parentName:"td"},"true")," \u65f6\uff0c\u5305\u542b\u8bf7\u6c42\u4f53\u3002",(0,l.kt)("strong",{parentName:"td"},"\u6ce8\u610f"),"\uff1a\u5982\u679c\u8bf7\u6c42\u4f53\u65e0\u6cd5\u5b8c\u5168\u5b58\u653e\u5728\u5185\u5b58\u4e2d\uff0c\u7531\u4e8e NGINX \u7684\u9650\u5236\uff0cAPISIX \u65e0\u6cd5\u5c06\u5b83\u8bb0\u5f55\u4e0b\u6765\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"include_resp_body"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5f53\u8bbe\u7f6e\u4e3a ",(0,l.kt)("inlineCode",{parentName:"td"},"true")," \u65f6\uff0c\u5305\u542b\u54cd\u5e94\u4f53\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"include_resp_body_expr"),(0,l.kt)("td",{parentName:"tr",align:null},"array"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u5f53 ",(0,l.kt)("inlineCode",{parentName:"td"},"include_resp_body")," \u5c5e\u6027\u8bbe\u7f6e\u4e3a ",(0,l.kt)("inlineCode",{parentName:"td"},"true")," \u65f6\u8fdb\u884c\u8fc7\u6ee4\u54cd\u5e94\u4f53\uff0c\u5e76\u4e14\u53ea\u6709\u5f53\u6b64\u5904\u8bbe\u7f6e\u7684\u8868\u8fbe\u5f0f\u8ba1\u7b97\u7ed3\u679c\u4e3a ",(0,l.kt)("inlineCode",{parentName:"td"},"true")," \u65f6\uff0c\u624d\u4f1a\u8bb0\u5f55\u54cd\u5e94\u4f53\u3002\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u8003 ",(0,l.kt)("a",{parentName:"td",href:"https://github.com/api7/lua-resty-expr"},"lua-resty-expr"),"\u3002")))),(0,l.kt)("p",null,"\u8be5\u63d2\u4ef6\u652f\u6301\u4f7f\u7528\u6279\u5904\u7406\u5668\u6765\u805a\u5408\u5e76\u6279\u91cf\u5904\u7406\u6761\u76ee\uff08\u65e5\u5fd7\u6216\u6570\u636e\uff09\u3002\u8fd9\u6837\u53ef\u4ee5\u907f\u514d\u63d2\u4ef6\u9891\u7e41\u5730\u63d0\u4ea4\u6570\u636e\uff0c\u9ed8\u8ba4\u8bbe\u7f6e\u60c5\u51b5\u4e0b\u6279\u5904\u7406\u5668\u4f1a\u6bcf ",(0,l.kt)("inlineCode",{parentName:"p"},"5")," \u79d2\u949f\u6216\u961f\u5217\u4e2d\u7684\u6570\u636e\u8fbe\u5230 ",(0,l.kt)("inlineCode",{parentName:"p"},"1000")," \u6761\u65f6\u63d0\u4ea4\u6570\u636e\uff0c\u5982\u9700\u4e86\u89e3\u6279\u5904\u7406\u5668\u76f8\u5173\u53c2\u6570\u8bbe\u7f6e\uff0c\u8bf7\u53c2\u8003 ",(0,l.kt)("a",{parentName:"p",href:"/zh/docs/apisix/3.3/batch-processor#%E9%85%8D%E7%BD%AE"},"Batch-Processor"),"\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u8981\u751f\u6210\u7528\u6237\u4ee4\u724c\uff0c\u8bf7\u5728 Loggly \u7cfb\u7edf\u4e2d\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"<your assigned subdomain>/loggly.com/tokens")," \u8bbe\u7f6e\uff0c\u6216\u8005\u5728\u7cfb\u7edf\u4e2d\u5355\u51fb ",(0,l.kt)("inlineCode",{parentName:"p"},"Logs > Source setup > Customer tokens"),"\u3002"),(0,l.kt)("h2",{id:"\u63d2\u4ef6\u5143\u6570\u636e\u8bbe\u7f6e"},"\u63d2\u4ef6\u5143\u6570\u636e\u8bbe\u7f6e"),(0,l.kt)("p",null,"\u4f60\u8fd8\u53ef\u4ee5\u901a\u8fc7\u63d2\u4ef6\u5143\u6570\u636e\u914d\u7f6e\u63d2\u4ef6\u3002\u8be6\u7ec6\u914d\u7f6e\u5982\u4e0b\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5fc5\u9009\u9879"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u6709\u6548\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"host"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},'"logs-01.loggly.com"'),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u53d1\u9001\u65e5\u5fd7\u7684\u4e3b\u673a\u7684\u7aef\u70b9\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"port"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"514"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u8981\u8fde\u63a5\u7684 Loggly \u7aef\u53e3\u3002 \u4ec5\u7528\u4e8e ",(0,l.kt)("inlineCode",{parentName:"td"},"syslog")," \u534f\u8bae\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"timeout"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"5000"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u53d1\u9001\u6570\u636e\u8bf7\u6c42\u8d85\u65f6\u65f6\u95f4\uff08\u4ee5\u6beb\u79d2\u4e3a\u5355\u4f4d\uff09\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"protocol"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},'"syslog"'),(0,l.kt)("td",{parentName:"tr",align:null},'[ "syslog", "http", "https" ]'),(0,l.kt)("td",{parentName:"tr",align:null},"\u5c06\u65e5\u5fd7\u53d1\u9001\u5230 Loggly \u7684\u534f\u8bae\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"log_format"),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"nil"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u4ee5 JSON \u683c\u5f0f\u7684\u952e\u503c\u5bf9\u6765\u58f0\u660e\u65e5\u5fd7\u683c\u5f0f\u3002\u5bf9\u4e8e\u503c\u90e8\u5206\uff0c\u4ec5\u652f\u6301\u5b57\u7b26\u4e32\u3002\u5982\u679c\u662f\u4ee5 ",(0,l.kt)("inlineCode",{parentName:"td"},"$")," \u5f00\u5934\uff0c\u5219\u8868\u660e\u662f\u8981\u83b7\u53d6 ",(0,l.kt)("a",{parentName:"td",href:"https://apisix.apache.org/docs/apisix/apisix-variable"},"APISIX \u53d8\u91cf")," \u6216 ",(0,l.kt)("a",{parentName:"td",href:"http://nginx.org/en/docs/varindex.html"},"NGINX \u5185\u7f6e\u53d8\u91cf"),"\u3002")))),(0,l.kt)("p",null,"APISIX \u652f\u6301 ",(0,l.kt)("a",{parentName:"p",href:"https://documentation.solarwinds.com/en/success_center/loggly/content/admin/streaming-syslog-without-using-files.htm"},"Syslog"),"\u3001",(0,l.kt)("a",{parentName:"p",href:"https://documentation.solarwinds.com/en/success_center/loggly/content/admin/http-bulk-endpoint.htm"},"HTTP/S"),"\uff08\u6279\u91cf\u7aef\u70b9\uff09\u534f\u8bae\u5c06\u65e5\u5fd7\u4e8b\u4ef6\u53d1\u9001\u5230 Loggly\u3002",(0,l.kt)("strong",{parentName:"p"},"\u9ed8\u8ba4\u60c5\u51b5\u4e0b ",(0,l.kt)("inlineCode",{parentName:"strong"},"protocol")," \u7684\u503c\u4e3a ",(0,l.kt)("inlineCode",{parentName:"strong"},"syslog")),"\u3002\u8be5\u534f\u8bae\u5141\u8bb8\u4f60\u901a\u8fc7\u4e00\u4e9b\u7ec6\u7c92\u5ea6\u7684\u63a7\u5236\uff08\u57fa\u4e8e\u4e0a\u6e38 HTTP \u54cd\u5e94\u4ee3\u7801\u7684\u65e5\u5fd7\u4e25\u91cd\u6027\u6620\u5c04\uff09\u53d1\u9001\u7b26\u5408 RFC5424 \u7684\u7cfb\u7edf\u65e5\u5fd7\u4e8b\u4ef6\u3002\u4f46\u662f HTTP/S \u6279\u91cf\u7aef\u70b9\u975e\u5e38\u9002\u5408\u4ee5\u66f4\u5feb\u7684\u4f20\u8f93\u901f\u5ea6\u53d1\u9001\u66f4\u5927\u91cf\u7684\u65e5\u5fd7\u4e8b\u4ef6\u3002"),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u6ce8\u610f")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Syslog \u534f\u8bae\u5141\u8bb8\u4f60\u53d1\u9001\u7b26\u5408 RFC5424 \u7684 syslog \u4e8b\u4ef6\u5e76\u8fdb\u884c\u7ec6\u7c92\u5ea6\u63a7\u5236\u3002\u4f46\u662f\u5728\u4ee5\u5feb\u901f\u4f20\u8f93\u901f\u5ea6\u53d1\u9001\u5927\u91cf\u65e5\u5fd7\u65f6\uff0c\u4f7f\u7528 HTTP/S \u6279\u91cf\u7aef\u70b9\u4f1a\u66f4\u597d\u3002\u4f60\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u65b9\u5f0f\u66f4\u65b0\u5143\u6570\u636e\u4ee5\u66f4\u65b0\u4f7f\u7528\u7684\u534f\u8bae\uff1a"),(0,l.kt)("pre",{parentName:"div"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"curl http://127.0.0.1:9180/apisix/admin/plugin_metadata/loggly \\\n-H 'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1' -X PUT -d '\n{\n   \"protocol\": \"http\"\n}'\n")))),(0,l.kt)("h2",{id:"\u542f\u7528\u63d2\u4ef6"},"\u542f\u7528\u63d2\u4ef6"),(0,l.kt)("p",null,"\u4ee5\u4e0b\u793a\u4f8b\u5c55\u793a\u4e86\u5982\u4f55\u5728\u6307\u5b9a\u8def\u7531\u4e0a\u542f\u7528\u8be5\u63d2\u4ef6\uff1a"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u5b8c\u6574\u914d\u7f6e")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/1 \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "plugins":{\n        "loggly":{\n            "customer_token":"0e6fe4bf-376e-40f4-b25f-1d55cb29f5a2",\n            "tags":["apisix", "testroute"],\n            "severity":"info",\n            "severity_map":{\n                "503": "err",\n                "410": "alert"\n            },\n            "buffer_duration":60,\n            "max_retry_count":0,\n            "retry_delay":1,\n            "inactive_timeout":2,\n            "batch_max_size":10\n        }\n    },\n    "upstream":{\n        "type":"roundrobin",\n        "nodes":{\n            "127.0.0.1:80":1\n        }\n    },\n    "uri":"/index.html"\n}\'\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u6700\u5c0f\u5316\u914d\u7f6e")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/1 \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "plugins":{\n        "loggly":{\n            "customer_token":"0e6fe4bf-376e-40f4-b25f-1d55cb29f5a2",\n        }\n    },\n    "upstream":{\n        "type":"roundrobin",\n        "nodes":{\n            "127.0.0.1:80":1\n        }\n    },\n    "uri":"/index.html"\n}\'\n')),(0,l.kt)("h2",{id:"\u6d4b\u8bd5\u63d2\u4ef6"},"\u6d4b\u8bd5\u63d2\u4ef6"),(0,l.kt)("p",null,"\u4f60\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u5411 APISIX \u53d1\u51fa\u8bf7\u6c42\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"curl -i http://127.0.0.1:9080/index.html\n")),(0,l.kt)("p",null,"\u53d1\u51fa\u8bf7\u6c42\u540e\uff0c\u4f60\u5c31\u53ef\u4ee5\u5728 Loggly \u4eea\u8868\u76d8\u4e0a\u67e5\u770b\u76f8\u5173\u65e5\u5fd7\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix/release/3.3/docs/assets/images/plugin/loggly-dashboard.png",alt:"Loggly Dashboard"})),(0,l.kt)("h2",{id:"\u7981\u7528\u63d2\u4ef6"},"\u7981\u7528\u63d2\u4ef6"),(0,l.kt)("p",null,"\u5f53\u4f60\u9700\u8981\u7981\u7528\u8be5\u63d2\u4ef6\u65f6\uff0c\u53ef\u4ee5\u901a\u8fc7\u5982\u4e0b\u547d\u4ee4\u5220\u9664\u76f8\u5e94\u7684 JSON \u914d\u7f6e\uff0cAPISIX \u5c06\u4f1a\u81ea\u52a8\u91cd\u65b0\u52a0\u8f7d\u76f8\u5173\u914d\u7f6e\uff0c\u65e0\u9700\u91cd\u542f\u670d\u52a1\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/1 \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/index.html",\n    "plugins": {},\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:80": 1\n        }\n    }\n}\'\n')))}g.isMDXComponent=!0}}]);