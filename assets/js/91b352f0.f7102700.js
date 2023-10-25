"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[50984],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),d=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),s=d(n),m=r,k=s["".concat(u,".").concat(m)]||s[m]||p[m]||l;return n?a.createElement(k,i(i({ref:t},c),{},{components:n})):a.createElement(k,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=s;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},40618:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var a=n(87462),r=(n(67294),n(3905));const l={title:"limit-conn",keywords:["Apache APISIX","API Gateway","Limit Connection"],description:"This document contains information about the Apache APISIX limit-con Plugin, you can use it to limits the number of concurrent requests to your services."},i=void 0,o={unversionedId:"plugins/limit-conn",id:"version-3.6/plugins/limit-conn",isDocsHomePage:!1,title:"limit-conn",description:"This document contains information about the Apache APISIX limit-con Plugin, you can use it to limits the number of concurrent requests to your services.",source:"@site/docs-apisix_versioned_docs/version-3.6/plugins/limit-conn.md",sourceDirName:"plugins",slug:"/plugins/limit-conn",permalink:"/docs/apisix/plugins/limit-conn",editUrl:"/edit#https://github.com/apache/apisix/edit/release/3.6/docs/en/latest/plugins/limit-conn.md",tags:[],version:"3.6",frontMatter:{title:"limit-conn",keywords:["Apache APISIX","API Gateway","Limit Connection"],description:"This document contains information about the Apache APISIX limit-con Plugin, you can use it to limits the number of concurrent requests to your services."},sidebar:"version-3.6/docs",previous:{title:"limit-req",permalink:"/docs/apisix/plugins/limit-req"},next:{title:"limit-count",permalink:"/docs/apisix/plugins/limit-count"}},u=[{value:"Description",id:"description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Enable Plugin",id:"enable-plugin",children:[]},{value:"Example usage",id:"example-usage",children:[]},{value:"Delete Plugin",id:"delete-plugin",children:[]},{value:"Example of application scenarios",id:"example-of-application-scenarios",children:[{value:"Limit the number of concurrent WebSocket connections",id:"limit-the-number-of-concurrent-websocket-connections",children:[]}]}],d={toc:u};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"limit-conn")," Plugin limits the number of concurrent requests to your services."),(0,r.kt)("h2",{id:"attributes"},"Attributes"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Valid values"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"conn"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"conn > 0"),(0,r.kt)("td",{parentName:"tr",align:null},"Maximum number of concurrent requests allowed. Requests exceeding this ratio (and below ",(0,r.kt)("inlineCode",{parentName:"td"},"conn")," + ",(0,r.kt)("inlineCode",{parentName:"td"},"burst"),") will be delayed (configured by ",(0,r.kt)("inlineCode",{parentName:"td"},"default_conn_delay"),").")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"burst"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"burst >= 0"),(0,r.kt)("td",{parentName:"tr",align:null},"Number of additional concurrent requests allowed to be delayed per second. If the number exceeds this hard limit, they will get rejected immediately.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"default_conn_delay"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"default_conn_delay > 0"),(0,r.kt)("td",{parentName:"tr",align:null},"Delay in seconds to process the concurrent requests exceeding ",(0,r.kt)("inlineCode",{parentName:"td"},"conn")," (and ",(0,r.kt)("inlineCode",{parentName:"td"},"conn")," + ",(0,r.kt)("inlineCode",{parentName:"td"},"burst"),").")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"only_use_default_delay"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"[true,false]"),(0,r.kt)("td",{parentName:"tr",align:null},"When set to ",(0,r.kt)("inlineCode",{parentName:"td"},"true"),", the Plugin will always set a delay of ",(0,r.kt)("inlineCode",{parentName:"td"},"default_conn_delay")," and would not use any other calculations.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"key_type"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},'"var"'),(0,r.kt)("td",{parentName:"tr",align:null},'["var", "var_combination"]'),(0,r.kt)("td",{parentName:"tr",align:null},"Type of user specified key to use.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"key"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"User specified key to base the request limiting on. If the ",(0,r.kt)("inlineCode",{parentName:"td"},"key_type")," attribute is set to ",(0,r.kt)("inlineCode",{parentName:"td"},'"var"'),", the key will be treated as a name of variable, like ",(0,r.kt)("inlineCode",{parentName:"td"},"remote_addr")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"consumer_name"),". If the ",(0,r.kt)("inlineCode",{parentName:"td"},"key_type")," is set to ",(0,r.kt)("inlineCode",{parentName:"td"},'"var_combination"'),", the key will be a combination of variables, like ",(0,r.kt)("inlineCode",{parentName:"td"},"$remote_addr $consumer_name"),". If the value of the key is empty, ",(0,r.kt)("inlineCode",{parentName:"td"},"remote_addr")," will be set as the default key.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"rejected_code"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"503"),(0,r.kt)("td",{parentName:"tr",align:null},"[200,...,599]"),(0,r.kt)("td",{parentName:"tr",align:null},"HTTP status code returned when the requests exceeding the threshold are rejected.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"rejected_msg"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"non-empty"),(0,r.kt)("td",{parentName:"tr",align:null},"Body of the response returned when the requests exceeding the threshold are rejected.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"allow_degradation"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"When set to ",(0,r.kt)("inlineCode",{parentName:"td"},"true")," enables Plugin degradation when the Plugin is temporarily unavailable and allows requests to continue.")))),(0,r.kt)("h2",{id:"enable-plugin"},"Enable Plugin"),(0,r.kt)("p",null,"You can enable the Plugin on a Route as shown below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/1 \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "methods": ["GET"],\n    "uri": "/index.html",\n    "plugins": {\n        "limit-conn": {\n            "conn": 1,\n            "burst": 0,\n            "default_conn_delay": 0.1,\n            "rejected_code": 503,\n            "key_type": "var",\n            "key": "http_a"\n        }\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\'\n')),(0,r.kt)("p",null,"You can also configure the ",(0,r.kt)("inlineCode",{parentName:"p"},"key_type")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"var_combination")," as shown:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/1 \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "methods": ["GET"],\n    "uri": "/index.html",\n    "plugins": {\n        "limit-conn": {\n            "conn": 1,\n            "burst": 0,\n            "default_conn_delay": 0.1,\n            "rejected_code": 503,\n            "key_type": "var_combination",\n            "key": "$consumer_name $remote_addr"\n        }\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\'\n')),(0,r.kt)("h2",{id:"example-usage"},"Example usage"),(0,r.kt)("p",null,"The example above configures the Plugin to only allow one connection on this route. When more than one request is received, the Plugin will respond with a ",(0,r.kt)("inlineCode",{parentName:"p"},"503")," HTTP status code and reject the connection:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl -i http://127.0.0.1:9080/index.html?sleep=20 &\n\ncurl -i http://127.0.0.1:9080/index.html?sleep=20\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"<html>\n<head><title>503 Service Temporarily Unavailable</title></head>\n<body>\n<center><h1>503 Service Temporarily Unavailable</h1></center>\n<hr><center>openresty</center>\n</body>\n</html>\n")),(0,r.kt)("h2",{id:"delete-plugin"},"Delete Plugin"),(0,r.kt)("p",null,"To remove the ",(0,r.kt)("inlineCode",{parentName:"p"},"limit-conn")," Plugin, you can delete the corresponding JSON configuration from the Plugin configuration. APISIX will automatically reload and you do not have to restart for this to take effect."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/1 \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "methods": ["GET"],\n    "uri": "/index.html",\n    "id": 1,\n    "plugins": {\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\'\n')),(0,r.kt)("h2",{id:"example-of-application-scenarios"},"Example of application scenarios"),(0,r.kt)("h3",{id:"limit-the-number-of-concurrent-websocket-connections"},"Limit the number of concurrent WebSocket connections"),(0,r.kt)("p",null,"Apache APISIX supports WebSocket proxy, we can use ",(0,r.kt)("inlineCode",{parentName:"p"},"limit-conn")," plugin to limit the number of concurrent WebSocket connections."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a Route, enable the WebSocket proxy and the ",(0,r.kt)("inlineCode",{parentName:"p"},"limit-conn")," plugin."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/1 \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/ws",\n    "enable_websocket": true,\n    "plugins": {\n        "limit-conn": {\n            "conn": 1,\n            "burst": 0,\n            "default_conn_delay": 0.1,\n            "rejected_code": 503,\n            "key_type": "var",\n            "key": "remote_addr"\n        }\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\'\n')),(0,r.kt)("p",{parentName:"li"},"The above route enables the WebSocket proxy on ",(0,r.kt)("inlineCode",{parentName:"p"},"/ws"),", and limits the number of concurrent WebSocket connections to 1. More than 1 concurrent WebSocket connection will return ",(0,r.kt)("inlineCode",{parentName:"p"},"503")," to reject the request.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Initiate a WebSocket request, and the connection is established successfully."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl --include \\\n    --no-buffer \\\n    --header "Connection: Upgrade" \\\n    --header "Upgrade: websocket" \\\n    --header "Sec-WebSocket-Key: x3JJHMbDL1EzLkh9GBhXDw==" \\\n    --header "Sec-WebSocket-Version: 13" \\\n    --http1.1 \\\n    http://127.0.0.1:9080/ws\n')),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"HTTP/1.1 101 Switching Protocols\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Initiate the WebSocket request again in another terminal, the request will be rejected."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"HTTP/1.1 503 Service Temporarily Unavailable\n\xb7\xb7\xb7\n<html>\n<head><title>503 Service Temporarily Unavailable</title></head>\n<body>\n<center><h1>503 Service Temporarily Unavailable</h1></center>\n<hr><center>openresty</center>\n</body>\n</html>\n")))))}c.isMDXComponent=!0}}]);