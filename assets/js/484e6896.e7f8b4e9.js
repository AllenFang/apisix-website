"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[65360],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=s(n),m=i,h=d["".concat(p,".").concat(m)]||d[m]||u[m]||r;return n?a.createElement(h,l(l({ref:t},c),{},{components:n})):a.createElement(h,l({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var s=2;s<r;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},15453:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var a=n(87462),i=(n(67294),n(3905));const r={title:"wolf-rbac",keywords:["Apache APISIX","API Gateway","Plugin","wolf RBAC","wolf-rbac"],description:"This document contains information about the Apache APISIX wolf-rbac Plugin."},l=void 0,o={unversionedId:"plugins/wolf-rbac",id:"version-3.6/plugins/wolf-rbac",isDocsHomePage:!1,title:"wolf-rbac",description:"This document contains information about the Apache APISIX wolf-rbac Plugin.",source:"@site/docs-apisix_versioned_docs/version-3.6/plugins/wolf-rbac.md",sourceDirName:"plugins",slug:"/plugins/wolf-rbac",permalink:"/docs/apisix/plugins/wolf-rbac",editUrl:"/edit#https://github.com/apache/apisix/edit/release/3.6/docs/en/latest/plugins/wolf-rbac.md",tags:[],version:"3.6",frontMatter:{title:"wolf-rbac",keywords:["Apache APISIX","API Gateway","Plugin","wolf RBAC","wolf-rbac"],description:"This document contains information about the Apache APISIX wolf-rbac Plugin."},sidebar:"version-3.6/docs",previous:{title:"authz-casdoor",permalink:"/docs/apisix/plugins/authz-casdoor"},next:{title:"openid-connect",permalink:"/docs/apisix/plugins/openid-connect"}},p=[{value:"Description",id:"description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"API",id:"api",children:[]},{value:"Pre-requisites",id:"pre-requisites",children:[]},{value:"Enable Plugin",id:"enable-plugin",children:[]},{value:"Example usage",id:"example-usage",children:[]},{value:"Delete Plugin",id:"delete-plugin",children:[]}],s={toc:p};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"wolf-rbac")," Plugin provides a ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Role-based_access_control"},"role-based access control")," system with ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/iGeeky/wolf"},"wolf")," to a Route or a Service. This Plugin can be used with a ",(0,i.kt)("a",{parentName:"p",href:"/docs/apisix/terminology/consumer"},"Consumer"),"."),(0,i.kt)("h2",{id:"attributes"},"Attributes"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"server"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"False"),(0,i.kt)("td",{parentName:"tr",align:null},'"',(0,i.kt)("a",{parentName:"td",href:"http://127.0.0.1:12180%22"},'http://127.0.0.1:12180"')),(0,i.kt)("td",{parentName:"tr",align:null},"Service address of wolf server.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"appid"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"False"),(0,i.kt)("td",{parentName:"tr",align:null},'"unset"'),(0,i.kt)("td",{parentName:"tr",align:null},"App id added in wolf console. This field supports saving the value in Secret Manager using the ",(0,i.kt)("a",{parentName:"td",href:"/docs/apisix/terminology/secret"},"APISIX Secret")," resource.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"header_prefix"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"False"),(0,i.kt)("td",{parentName:"tr",align:null},'"X-"'),(0,i.kt)("td",{parentName:"tr",align:null},"Prefix for a custom HTTP header. After authentication is successful, three headers will be added to the request header (for backend) and response header (for frontend) namely: ",(0,i.kt)("inlineCode",{parentName:"td"},"X-UserId"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"X-Username"),", and ",(0,i.kt)("inlineCode",{parentName:"td"},"X-Nickname"),".")))),(0,i.kt)("h2",{id:"api"},"API"),(0,i.kt)("p",null,"This Plugin will add the following endpoints when enabled:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"/apisix/plugin/wolf-rbac/login")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"/apisix/plugin/wolf-rbac/change_pwd")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"/apisix/plugin/wolf-rbac/user_info"))),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"You may need to use the ",(0,i.kt)("a",{parentName:"p",href:"/docs/apisix/plugins/public-api"},"public-api")," Plugin to expose this endpoint."))),(0,i.kt)("h2",{id:"pre-requisites"},"Pre-requisites"),(0,i.kt)("p",null,"To use this Plugin, you have to first ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/iGeeky/wolf/blob/master/quick-start-with-docker/README.md"},"install wolf")," and start it."),(0,i.kt)("p",null,"Once you have done that you need to add ",(0,i.kt)("inlineCode",{parentName:"p"},"application"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"admin"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"normal user"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"permission"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"resource")," and user authorize to the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/iGeeky/wolf/blob/master/docs/usage.md"},"wolf-console"),"."),(0,i.kt)("h2",{id:"enable-plugin"},"Enable Plugin"),(0,i.kt)("p",null,"You need to first configure the Plugin on a Consumer:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/consumers  -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n  "username":"wolf_rbac",\n  "plugins":{\n    "wolf-rbac":{\n      "server":"http://127.0.0.1:12180",\n      "appid":"restful"\n    }\n  },\n  "desc":"wolf-rbac"\n}\'\n')),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"appid")," added in the configuration should already exist in wolf."))),(0,i.kt)("p",null,"You can now add the Plugin to a Route or a Service:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/1  -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "methods": ["GET"],\n    "uri": "/*",\n    "plugins": {\n        "wolf-rbac": {}\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "www.baidu.com:80": 1\n        }\n    }\n}\'\n')),(0,i.kt)("p",null,"You can also use the ",(0,i.kt)("a",{parentName:"p",href:"/docs/dashboard/USER_GUIDE"},"APISIX Dashboard")," to complete the operation through a web UI."),(0,i.kt)("h2",{id:"example-usage"},"Example usage"),(0,i.kt)("p",null,"You can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"public-api")," Plugin to expose the API:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/wal -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/apisix/plugin/wolf-rbac/login",\n    "plugins": {\n        "public-api": {}\n    }\n}\'\n')),(0,i.kt)("p",null,"Similarly, you can setup the Routes for ",(0,i.kt)("inlineCode",{parentName:"p"},"change_pwd")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"user_info"),"."),(0,i.kt)("p",null,"You can now login and get a wolf ",(0,i.kt)("inlineCode",{parentName:"p"},"rbac_token"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/plugin/wolf-rbac/login -i \\\n-H "Content-Type: application/json" \\\n-d \'{"appid": "restful", "username":"test", "password":"user-password", "authType":1}\'\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'HTTP/1.1 200 OK\nDate: Wed, 24 Jul 2019 10:33:31 GMT\nContent-Type: text/plain\nTransfer-Encoding: chunked\nConnection: keep-alive\nServer: APISIX web server\n{"rbac_token":"V1#restful#eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NzQ5LCJ1c2VybmFtZSI6InRlc3QiLCJtYW5hZ2VyIjoiIiwiYXBwaWQiOiJyZXN0ZnVsIiwiaWF0IjoxNTc5NDQ5ODQxLCJleHAiOjE1ODAwNTQ2NDF9.n2-830zbhrEh6OAxn4K_yYtg5pqfmjpZAjoQXgtcuts","user_info":{"nickname":"test","username":"test","id":"749"}}\n')),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"appid"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"username"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"password")," must be configured in the wolf system."),(0,i.kt)("p",{parentName:"div"},(0,i.kt)("inlineCode",{parentName:"p"},"authType")," is the authentication type\u20141 for password authentication (default) and 2 for LDAP authentication (v0.5.0+)."))),(0,i.kt)("p",null,"You can also make a post request with ",(0,i.kt)("inlineCode",{parentName:"p"},"x-www-form-urlencoded")," instead of JSON:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"curl http://127.0.0.1:9080/apisix/plugin/wolf-rbac/login -i \\\n-H \"Content-Type: application/x-www-form-urlencoded\" \\\n-d 'appid=restful&username=test&password=user-password'\n")),(0,i.kt)("p",null,"Now you can test the Route:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"without token:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/ -H"Host: www.baidu.com" -i\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'HTTP/1.1 401 Unauthorized\n...\n{"message":"Missing rbac token in request"}\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"with token in ",(0,i.kt)("inlineCode",{parentName:"li"},"Authorization")," header:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"curl http://127.0.0.1:9080/ -H\"Host: www.baidu.com\" \\\n-H 'Authorization: V1#restful#eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NzQ5LCJ1c2VybmFtZSI6InRlc3QiLCJtYW5hZ2VyIjoiIiwiYXBwaWQiOiJyZXN0ZnVsIiwiaWF0IjoxNTc5NDQ5ODQxLCJleHAiOjE1ODAwNTQ2NDF9.n2-830zbhrEh6OAxn4K_yYtg5pqfmjpZAjoQXgtcuts' -i\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"HTTP/1.1 200 OK\n\n<!DOCTYPE html>\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"with token in ",(0,i.kt)("inlineCode",{parentName:"li"},"x-rbac-token")," header:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"curl http://127.0.0.1:9080/ -H\"Host: www.baidu.com\" \\\n-H 'x-rbac-token: V1#restful#eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NzQ5LCJ1c2VybmFtZSI6InRlc3QiLCJtYW5hZ2VyIjoiIiwiYXBwaWQiOiJyZXN0ZnVsIiwiaWF0IjoxNTc5NDQ5ODQxLCJleHAiOjE1ODAwNTQ2NDF9.n2-830zbhrEh6OAxn4K_yYtg5pqfmjpZAjoQXgtcuts' -i\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"HTTP/1.1 200 OK\n\n<!DOCTYPE html>\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"with token in request parameters:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"curl 'http://127.0.0.1:9080?rbac_token=V1%23restful%23eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NzQ5LCJ1c2VybmFtZSI6InRlc3QiLCJtYW5hZ2VyIjoiIiwiYXBwaWQiOiJyZXN0ZnVsIiwiaWF0IjoxNTc5NDQ5ODQxLCJleHAiOjE1ODAwNTQ2NDF9.n2-830zbhrEh6OAxn4K_yYtg5pqfmjpZAjoQXgtcuts' -H\"Host: www.baidu.com\" -i\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"HTTP/1.1 200 OK\n\n<!DOCTYPE html>\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"with token in cookie:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080 -H"Host: www.baidu.com" \\\n--cookie x-rbac-token=V1#restful#eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NzQ5LCJ1c2VybmFtZSI6InRlc3QiLCJtYW5hZ2VyIjoiIiwiYXBwaWQiOiJyZXN0ZnVsIiwiaWF0IjoxNTc5NDQ5ODQxLCJleHAiOjE1ODAwNTQ2NDF9.n2-830zbhrEh6OAxn4K_yYtg5pqfmjpZAjoQXgtcuts -i\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"HTTP/1.1 200 OK\n\n<!DOCTYPE html>\n")),(0,i.kt)("p",null,"And to get a user information:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"curl http://127.0.0.1:9080/apisix/plugin/wolf-rbac/user_info \\\n--cookie x-rbac-token=V1#restful#eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NzQ5LCJ1c2VybmFtZSI6InRlc3QiLCJtYW5hZ2VyIjoiIiwiYXBwaWQiOiJyZXN0ZnVsIiwiaWF0IjoxNTc5NDQ5ODQxLCJleHAiOjE1ODAwNTQ2NDF9.n2-830zbhrEh6OAxn4K_yYtg5pqfmjpZAjoQXgtcuts -i\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'HTTP/1.1 200 OK\n{\n    "user_info":{\n        "nickname":"test",\n        "lastLogin":1582816780,\n        "id":749,\n        "username":"test",\n        "appIDs":["restful"],\n        "manager":"none",\n        "permissions":{"USER_LIST":true},\n        "profile":null,\n        "roles":{},\n        "createTime":1578820506,\n        "email":""\n    }\n}\n')),(0,i.kt)("p",null,"And to change a user's password:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/plugin/wolf-rbac/change_pwd \\\n-H "Content-Type: application/json" \\\n--cookie x-rbac-token=V1#restful#eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NzQ5LCJ1c2VybmFtZSI6InRlc3QiLCJtYW5hZ2VyIjoiIiwiYXBwaWQiOiJyZXN0ZnVsIiwiaWF0IjoxNTc5NDQ5ODQxLCJleHAiOjE1ODAwNTQ2NDF9.n2-830zbhrEh6OAxn4K_yYtg5pqfmjpZAjoQXgtcuts -i \\\n-X PUT -d \'{"oldPassword": "old password", "newPassword": "new password"}\'\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'HTTP/1.1 200 OK\n{"message":"success to change password"}\n')),(0,i.kt)("h2",{id:"delete-plugin"},"Delete Plugin"),(0,i.kt)("p",null,"To remove the ",(0,i.kt)("inlineCode",{parentName:"p"},"wolf-rbac")," Plugin, you can delete the corresponding JSON configuration from the Plugin configuration. APISIX will automatically reload and you do not have to restart for this to take effect."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/1  -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "methods": ["GET"],\n    "uri": "/*",\n    "plugins": {\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "www.baidu.com:80": 1\n        }\n    }\n}\'\n')))}c.isMDXComponent=!0}}]);