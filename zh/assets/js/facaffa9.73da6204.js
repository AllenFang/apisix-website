"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[41059],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>c});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=s(n),c=r,k=u["".concat(p,".").concat(c)]||u[c]||m[c]||l;return n?a.createElement(k,i(i({ref:t},d),{},{components:n})):a.createElement(k,i({ref:t},d))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},68537:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const l={title:"redis",keywords:["APISIX","xRPC","redis"],description:"This document contains information about the Apache APISIX xRPC implementation for Redis."},i=void 0,o={unversionedId:"xrpc/redis",id:"version-3.1/xrpc/redis",isDocsHomePage:!1,title:"redis",description:"This document contains information about the Apache APISIX xRPC implementation for Redis.",source:"@site/docs-apisix_versioned_docs/version-3.1/xrpc/redis.md",sourceDirName:"xrpc",slug:"/xrpc/redis",permalink:"/zh/docs/apisix/3.1/xrpc/redis",editUrl:"/zh/edit#https://github.com/apache/apisix/edit/release/3.1/docs/zh/latest/xrpc/redis.md",tags:[],version:"3.1",frontMatter:{title:"redis",keywords:["APISIX","xRPC","redis"],description:"This document contains information about the Apache APISIX xRPC implementation for Redis."},sidebar:"version-3.1/docs",previous:{title:"Apache Kafka",permalink:"/zh/docs/apisix/3.1/pubsub/kafka"},next:{title:"xRPC",permalink:"/zh/docs/apisix/3.1/xrpc"}},p=[{value:"Description",id:"description",children:[]},{value:"Granularity of the request",id:"granularity-of-the-request",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Metrics",id:"metrics",children:[]},{value:"Example usage",id:"example-usage",children:[]}],s={toc:p};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,"The Redis protocol support allows APISIX to proxy Redis commands, and provide various features according to the content of the commands, including:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://redis.io/docs/reference/protocol-spec/"},"Redis protocol")," codec"),(0,r.kt)("li",{parentName:"ul"},"Fault injection according to the commands and key")),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"This feature requires APISIX to be run on ",(0,r.kt)("a",{parentName:"p",href:"../FAQ.md#how-do-i-build-the-apisix-base-environment"},"APISIX-Base"),"."),(0,r.kt)("p",{parentName:"div"},"It also requires the data sent from clients are well-formed and sane. Therefore, it should only be used in deployments where both the downstream and upstream are trusted."))),(0,r.kt)("h2",{id:"granularity-of-the-request"},"Granularity of the request"),(0,r.kt)("p",null,"Like other protocols based on the xRPC framework, the Redis implementation here also has the concept of ",(0,r.kt)("inlineCode",{parentName:"p"},"request"),"."),(0,r.kt)("p",null,"Each Redis command is considered a request. However, the message subscribed from the server won't be considered a request."),(0,r.kt)("p",null,"For example, when a Redis client subscribes to channel ",(0,r.kt)("inlineCode",{parentName:"p"},"foo")," and receives the message ",(0,r.kt)("inlineCode",{parentName:"p"},"bar"),", then it unsubscribes the ",(0,r.kt)("inlineCode",{parentName:"p"},"foo")," channel, there are two requests: ",(0,r.kt)("inlineCode",{parentName:"p"},"subscribe foo")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"unsubscribe foo"),"."),(0,r.kt)("h2",{id:"attributes"},"Attributes"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type \xa0 \xa0 \xa0 \xa0 \xa0"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Default \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0"),(0,r.kt)("th",{parentName:"tr",align:null},"Valid values \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0"),(0,r.kt)("th",{parentName:"tr",align:null},"Description \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"faults"),(0,r.kt)("td",{parentName:"tr",align:null},"array","[object]"," \xa0 \xa0 \xa0 \xa0"),(0,r.kt)("td",{parentName:"tr",align:null},"False \xa0 \xa0"),(0,r.kt)("td",{parentName:"tr",align:null},"\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0"),(0,r.kt)("td",{parentName:"tr",align:null},"\xa0"),(0,r.kt)("td",{parentName:"tr",align:null},"Fault injections which can be applied based on the commands and keys")))),(0,r.kt)("p",null,"Fields under an entry of ",(0,r.kt)("inlineCode",{parentName:"p"},"faults"),":"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type \xa0 \xa0 \xa0 \xa0 \xa0"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Default \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0"),(0,r.kt)("th",{parentName:"tr",align:null},"Valid values \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0"),(0,r.kt)("th",{parentName:"tr",align:null},"Description \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"commands"),(0,r.kt)("td",{parentName:"tr",align:null},"array","[string]"," \xa0 \xa0 \xa0 \xa0"),(0,r.kt)("td",{parentName:"tr",align:null},"True \xa0 \xa0"),(0,r.kt)("td",{parentName:"tr",align:null},"\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0"),(0,r.kt)("td",{parentName:"tr",align:null},'["get", "mget"]'," \xa0"),(0,r.kt)("td",{parentName:"tr",align:null},"Commands fault is restricted to")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"key"),(0,r.kt)("td",{parentName:"tr",align:null},"string \xa0 \xa0 \xa0 \xa0"),(0,r.kt)("td",{parentName:"tr",align:null},"False \xa0 \xa0"),(0,r.kt)("td",{parentName:"tr",align:null},"\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0"),(0,r.kt)("td",{parentName:"tr",align:null},'"blahblah" \xa0'),(0,r.kt)("td",{parentName:"tr",align:null},"Key fault is restricted to")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"delay"),(0,r.kt)("td",{parentName:"tr",align:null},"number \xa0 \xa0 \xa0 \xa0"),(0,r.kt)("td",{parentName:"tr",align:null},"True \xa0 \xa0"),(0,r.kt)("td",{parentName:"tr",align:null},"\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0"),(0,r.kt)("td",{parentName:"tr",align:null},"0.1 \xa0"),(0,r.kt)("td",{parentName:"tr",align:null},"Duration of the delay in seconds")))),(0,r.kt)("h2",{id:"metrics"},"Metrics"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"apisix_redis_commands_total"),": Total number of requests for a specific Redis command."),(0,r.kt)("table",{parentName:"li"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Labels"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"route"),(0,r.kt)("td",{parentName:"tr",align:null},"matched stream route ID")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"command"),(0,r.kt)("td",{parentName:"tr",align:null},"the Redis command"))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"apisix_redis_commands_latency_seconds"),": Latency of requests for a specific Redis command."),(0,r.kt)("table",{parentName:"li"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Labels"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"route"),(0,r.kt)("td",{parentName:"tr",align:null},"matched stream route ID")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"command"),(0,r.kt)("td",{parentName:"tr",align:null},"the Redis command")))))),(0,r.kt)("h2",{id:"example-usage"},"Example usage"),(0,r.kt)("p",null,"Assumed the APISIX is proxying TCP on port ",(0,r.kt)("inlineCode",{parentName:"p"},"9101"),", and the Redis is listening on port ",(0,r.kt)("inlineCode",{parentName:"p"},"6379"),"."),(0,r.kt)("p",null,"Let's create a Stream Route:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/stream_routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n\xa0 \xa0 "upstream": {\n\xa0 \xa0 \xa0 \xa0 "type": "none",\n\xa0 \xa0 \xa0 \xa0 "nodes": {\n\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 "127.0.0.1:6379": 1\n\xa0 \xa0 \xa0 \xa0 }\n\xa0 \xa0 },\n\xa0 \xa0 "protocol": {\n\xa0 \xa0 \xa0 \xa0 "name": "redis",\n\xa0 \xa0 \xa0 \xa0 "conf": {\n\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 "faults": [{\n\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 "commands": ["get", "ping"],\n\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 "delay": 5\n\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 }]\n\xa0 \xa0 \xa0 \xa0 }\n\xa0 \xa0 }\n}\n\'\n')),(0,r.kt)("p",null,"Once you have configured the stream route, as shown above, you can make a request to it:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"redis-cli -p 9101\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"127.0.0.1:9101> ping\nPONG\n(5.00s)\n")),(0,r.kt)("p",null,"You can notice that there is a 5 seconds delay for the ping command."))}d.isMDXComponent=!0}}]);