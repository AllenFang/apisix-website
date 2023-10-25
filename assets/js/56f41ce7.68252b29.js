"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[71892],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>h});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),l=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=l(e.components);return a.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=l(t),h=r,m=u["".concat(p,".").concat(h)]||u[h]||d[h]||i;return t?a.createElement(m,s(s({ref:n},c),{},{components:t})):a.createElement(m,s({ref:n},c))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,s=new Array(i);s[0]=u;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var l=2;l<i;l++)s[l]=t[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},90357:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=t(87462),r=(t(67294),t(3905));const i={title:"Control API"},s=void 0,o={unversionedId:"control-api",id:"version-3.0/control-api",isDocsHomePage:!1,title:"Control API",description:"In Apache APISIX, the control API is used to:",source:"@site/docs-apisix_versioned_docs/version-3.0/control-api.md",sourceDirName:".",slug:"/control-api",permalink:"/docs/apisix/3.0/control-api",editUrl:"/edit#https://github.com/apache/apisix/edit/release/3.0/docs/en/latest/control-api.md",tags:[],version:"3.0",frontMatter:{title:"Control API"},sidebar:"version-3.0/docs",previous:{title:"Admin API",permalink:"/docs/apisix/3.0/admin-api"},next:{title:"Building APISIX from source",permalink:"/docs/apisix/3.0/building-apisix"}},p=[{value:"Control API Added via Plugins",id:"control-api-added-via-plugins",children:[]},{value:"Plugin Independent Control API",id:"plugin-independent-control-api",children:[{value:"GET /v1/schema",id:"get-v1schema",children:[]},{value:"GET /v1/healthcheck",id:"get-v1healthcheck",children:[]},{value:"POST /v1/gc",id:"post-v1gc",children:[]},{value:"GET /v1/routes",id:"get-v1routes",children:[]},{value:"GET /v1/route/{route_id}",id:"get-v1routeroute_id",children:[]},{value:"GET /v1/services",id:"get-v1services",children:[]},{value:"GET /v1/service/{service_id}",id:"get-v1serviceservice_id",children:[]},{value:"GET /v1/upstreams",id:"get-v1upstreams",children:[]},{value:"GET /v1/upstream/{upstream_id}",id:"get-v1upstreamupstream_id",children:[]},{value:"GET /v1/plugin_metadatas",id:"get-v1plugin_metadatas",children:[]},{value:"GET /v1/plugin_metadata/{plugin_name}",id:"get-v1plugin_metadataplugin_name",children:[]}]}],l={toc:p};function c(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In Apache APISIX, the control API is used to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Expose the internal state of APISIX."),(0,r.kt)("li",{parentName:"ul"},"Control the behavior of a single, isolated APISIX data plane.")),(0,r.kt)("p",null,"To change the default endpoint (",(0,r.kt)("inlineCode",{parentName:"p"},"127.0.0.1:9090"),") of the Control API server, change the ",(0,r.kt)("inlineCode",{parentName:"p"},"ip")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"port")," in the ",(0,r.kt)("inlineCode",{parentName:"p"},"control")," section in your configuration file (",(0,r.kt)("inlineCode",{parentName:"p"},"conf/config.yaml"),"):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apisix:\n  ...\n  enable_control: true\n  control:\n    ip: "127.0.0.1"\n    port: 9090\n')),(0,r.kt)("p",null,"To enable parameter matching in plugin's control API, add ",(0,r.kt)("inlineCode",{parentName:"p"},"router: 'radixtree_uri_with_parameter'")," to the control section."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note"),": Never configure the control API server to listen to public traffic."),(0,r.kt)("h2",{id:"control-api-added-via-plugins"},"Control API Added via Plugins"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/apisix/3.0/terminology/plugin"},"Plugins")," can be enabled to add its control API."),(0,r.kt)("p",null,"Some Plugins have their own control APIs. See the documentation of the specific Plugin to learn more."),(0,r.kt)("h2",{id:"plugin-independent-control-api"},"Plugin Independent Control API"),(0,r.kt)("p",null,"The supported APIs are listed below."),(0,r.kt)("h3",{id:"get-v1schema"},"GET /v1/schema"),(0,r.kt)("p",null,"Introduced in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/releases/tag/2.2"},"v2.2"),"."),(0,r.kt)("p",null,"Returns the JSON schema used by the APISIX instance:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "main": {\n        "route": {\n            "properties": {...}\n        },\n        "upstream": {\n            "properties": {...}\n        },\n        ...\n    },\n    "plugins": {\n        "example-plugin": {\n            "consumer_schema": {...},\n            "metadata_schema": {...},\n            "schema": {...},\n            "type": ...,\n            "priority": 0,\n            "version": 0.1\n        },\n        ...\n    },\n    "stream-plugins": {\n        "mqtt-proxy": {\n            ...\n        },\n        ...\n    }\n}\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note"),": Only the enabled ",(0,r.kt)("inlineCode",{parentName:"p"},"plugins")," are returned and they may lack fields like ",(0,r.kt)("inlineCode",{parentName:"p"},"consumer_schema")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"type")," depending on how they were defined."),(0,r.kt)("h3",{id:"get-v1healthcheck"},"GET /v1/healthcheck"),(0,r.kt)("p",null,"Introduced in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/releases/tag/2.3"},"v2.3"),"."),(0,r.kt)("p",null,"Returns a ",(0,r.kt)("a",{parentName:"p",href:"/docs/apisix/3.0/tutorials/health-check"},"health check")," of the APISIX instance."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[\n    {\n        "healthy_nodes": [\n            {\n                "host": "127.0.0.1",\n                "port": 1980,\n                "priority": 0,\n                "weight": 1\n            }\n        ],\n        "name": "upstream#/upstreams/1",\n        "nodes": [\n            {\n                "host": "127.0.0.1",\n                "port": 1980,\n                "priority": 0,\n                "weight": 1\n            },\n            {\n                "host": "127.0.0.2",\n                "port": 1988,\n                "priority": 0,\n                "weight": 1\n            }\n        ],\n        "src_id": "1",\n        "src_type": "upstreams"\n    },\n    {\n        "healthy_nodes": [\n            {\n                "host": "127.0.0.1",\n                "port": 1980,\n                "priority": 0,\n                "weight": 1\n            }\n        ],\n        "name": "upstream#/routes/1",\n        "nodes": [\n            {\n                "host": "127.0.0.1",\n                "port": 1980,\n                "priority": 0,\n                "weight": 1\n            },\n            {\n                "host": "127.0.0.1",\n                "port": 1988,\n                "priority": 0,\n                "weight": 1\n            }\n        ],\n        "src_id": "1",\n        "src_type": "routes"\n    }\n]\n')),(0,r.kt)("p",null,"Each of the returned objects contain the following fields:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"src_type: where the health checker is reporting from. Value is one of  ",(0,r.kt)("inlineCode",{parentName:"li"},'["routes", "services", "upstreams"]'),"."),(0,r.kt)("li",{parentName:"ul"},"src_id: id of the object creating the health checker. For example, if an Upstream\nobject with id ",(0,r.kt)("inlineCode",{parentName:"li"},"1")," creates a health checker, the ",(0,r.kt)("inlineCode",{parentName:"li"},"src_type")," is ",(0,r.kt)("inlineCode",{parentName:"li"},"upstreams")," and the ",(0,r.kt)("inlineCode",{parentName:"li"},"src_id")," is ",(0,r.kt)("inlineCode",{parentName:"li"},"1"),"."),(0,r.kt)("li",{parentName:"ul"},"name: name of the health checker."),(0,r.kt)("li",{parentName:"ul"},"nodes: target nodes of the health checker."),(0,r.kt)("li",{parentName:"ul"},"healthy_nodes: healthy nodes discovered by the health checker.")),(0,r.kt)("p",null,"You can also use ",(0,r.kt)("inlineCode",{parentName:"p"},"/v1/healthcheck/$src_type/$src_id")," to get the health status of specific nodes."),(0,r.kt)("p",null,"For example, ",(0,r.kt)("inlineCode",{parentName:"p"},"GET /v1/healthcheck/upstreams/1")," returns:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "healthy_nodes": [\n        {\n            "host": "127.0.0.1",\n            "port": 1980,\n            "priority": 0,\n            "weight": 1\n        }\n    ],\n    "name": "upstream#/upstreams/1",\n    "nodes": [\n        {\n            "host": "127.0.0.1",\n            "port": 1980,\n            "priority": 0,\n            "weight": 1\n        },\n        {\n            "host": "127.0.0.2",\n            "port": 1988,\n            "priority": 0,\n            "weight": 1\n        }\n    ],\n    "src_id": "1",\n    "src_type": "upstreams"\n}\n')),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"As APISIX uses multiple-process architecture, if the process never handles the request of a specific upstream, then the upstream's health check information will not appear on the process. This may result in the health check API can't get all data during testing."))),(0,r.kt)("h3",{id:"post-v1gc"},"POST /v1/gc"),(0,r.kt)("p",null,"Introduced in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/releases/tag/2.8"},"v2.8"),"."),(0,r.kt)("p",null,"Triggers a full garbage collection in the HTTP subsystem."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note"),": When stream proxy is enabled, APISIX runs another Lua VM for the stream subsystem. Full garbage collection is not triggered in this VM."),(0,r.kt)("h3",{id:"get-v1routes"},"GET /v1/routes"),(0,r.kt)("p",null,"Introduced in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/releases/tag/2.10.0"},"v2.10.0"),"."),(0,r.kt)("p",null,"Returns all configured ",(0,r.kt)("a",{parentName:"p",href:"/docs/apisix/3.0/terminology/route"},"Routes"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "update_count": 0,\n    "value": {\n      "priority": 0,\n      "uris": [\n        "/hello"\n      ],\n      "id": "1",\n      "upstream": {\n        "scheme": "http",\n        "pass_host": "pass",\n        "nodes": [\n          {\n            "port": 1980,\n            "host": "127.0.0.1",\n            "weight": 1\n          }\n        ],\n        "type": "roundrobin",\n        "hash_on": "vars"\n      },\n      "status": 1\n    },\n    "clean_handlers": {},\n    "has_domain": false,\n    "orig_modifiedIndex": 1631193445,\n    "modifiedIndex": 1631193445,\n    "key": "/routes/1"\n  }\n]\n')),(0,r.kt)("h3",{id:"get-v1routeroute_id"},"GET /v1/route/{route_id}"),(0,r.kt)("p",null,"Introduced in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/releases/tag/2.10.0"},"v2.10.0"),"."),(0,r.kt)("p",null,"Returns the Route with the specified ",(0,r.kt)("inlineCode",{parentName:"p"},"route_id"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "update_count": 0,\n  "value": {\n    "priority": 0,\n    "uris": [\n      "/hello"\n    ],\n    "id": "1",\n    "upstream": {\n      "scheme": "http",\n      "pass_host": "pass",\n      "nodes": [\n        {\n          "port": 1980,\n          "host": "127.0.0.1",\n          "weight": 1\n        }\n      ],\n      "type": "roundrobin",\n      "hash_on": "vars"\n    },\n    "status": 1\n  },\n  "clean_handlers": {},\n  "has_domain": false,\n  "orig_modifiedIndex": 1631193445,\n  "modifiedIndex": 1631193445,\n  "key": "/routes/1"\n}\n')),(0,r.kt)("h3",{id:"get-v1services"},"GET /v1/services"),(0,r.kt)("p",null,"Introduced in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/releases/tag/2.11.0"},"v2.11.0"),"."),(0,r.kt)("p",null,"Returns all the Services:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "has_domain": false,\n    "clean_handlers": {},\n    "modifiedIndex": 671,\n    "key": "/apisix/services/200",\n    "createdIndex": 671,\n    "value": {\n      "upstream": {\n          "scheme": "http",\n          "hash_on": "vars",\n          "pass_host": "pass",\n          "type": "roundrobin",\n          "nodes": [\n            {\n              "port": 1980,\n              "weight": 1,\n              "host": "127.0.0.1"\n            }\n          ]\n      },\n      "create_time": 1634552648,\n      "id": "200",\n      "plugins": {\n        "limit-count": {\n          "key": "remote_addr",\n          "time_window": 60,\n          "redis_timeout": 1000,\n          "allow_degradation": false,\n          "show_limit_quota_header": true,\n          "policy": "local",\n          "count": 2,\n          "rejected_code": 503\n        }\n      },\n      "update_time": 1634552648\n    }\n  }\n]\n')),(0,r.kt)("h3",{id:"get-v1serviceservice_id"},"GET /v1/service/{service_id}"),(0,r.kt)("p",null,"Introduced in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/releases/tag/2.11.0"},"v2.11.0"),"."),(0,r.kt)("p",null,"Returns the Service with the specified ",(0,r.kt)("inlineCode",{parentName:"p"},"service_id"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "has_domain": false,\n  "clean_handlers": {},\n  "modifiedIndex": 728,\n  "key": "/apisix/services/5",\n  "createdIndex": 728,\n  "value": {\n    "create_time": 1634554563,\n    "id": "5",\n    "upstream": {\n      "scheme": "http",\n      "hash_on": "vars",\n      "pass_host": "pass",\n      "type": "roundrobin",\n      "nodes": [\n        {\n          "port": 1980,\n          "weight": 1,\n          "host": "127.0.0.1"\n        }\n      ]\n    },\n    "update_time": 1634554563\n  }\n}\n')),(0,r.kt)("h3",{id:"get-v1upstreams"},"GET /v1/upstreams"),(0,r.kt)("p",null,"Introduced in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/releases/tag/2.11.0"},"v2.11.0"),"."),(0,r.kt)("p",null,"Dumps all Upstreams:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[\n   {\n      "value":{\n         "scheme":"http",\n         "pass_host":"pass",\n         "nodes":[\n            {\n               "host":"127.0.0.1",\n               "port":80,\n               "weight":1\n            },\n            {\n               "host":"foo.com",\n               "port":80,\n               "weight":2\n            }\n         ],\n         "hash_on":"vars",\n         "update_time":1634543819,\n         "key":"remote_addr",\n         "create_time":1634539759,\n         "id":"1",\n         "type":"chash"\n      },\n      "has_domain":true,\n      "key":"\\/apisix\\/upstreams\\/1",\n      "clean_handlers":{\n      },\n      "createdIndex":938,\n      "modifiedIndex":1225\n   }\n]\n')),(0,r.kt)("h3",{id:"get-v1upstreamupstream_id"},"GET /v1/upstream/{upstream_id}"),(0,r.kt)("p",null,"Introduced in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/releases/tag/2.11.0"},"v2.11.0"),"."),(0,r.kt)("p",null,"Dumps the Upstream with the specified ",(0,r.kt)("inlineCode",{parentName:"p"},"upstream_id"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "value":{\n      "scheme":"http",\n      "pass_host":"pass",\n      "nodes":[\n         {\n            "host":"127.0.0.1",\n            "port":80,\n            "weight":1\n         },\n         {\n            "host":"foo.com",\n            "port":80,\n            "weight":2\n         }\n      ],\n      "hash_on":"vars",\n      "update_time":1634543819,\n      "key":"remote_addr",\n      "create_time":1634539759,\n      "id":"1",\n      "type":"chash"\n   },\n   "has_domain":true,\n   "key":"\\/apisix\\/upstreams\\/1",\n   "clean_handlers":{\n   },\n   "createdIndex":938,\n   "modifiedIndex":1225\n}\n')),(0,r.kt)("h3",{id:"get-v1plugin_metadatas"},"GET /v1/plugin_metadatas"),(0,r.kt)("p",null,"Introduced in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/releases/tag/3.0.0"},"v3.0.0"),"."),(0,r.kt)("p",null,"Dumps all plugin_metadatas:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[\n    {\n        "log_format": {\n            "upstream_response_time": "$upstream_response_time"\n        },\n        "id": "file-logger"\n    },\n    {\n        "ikey": 1,\n        "skey": "val",\n        "id": "example-plugin"\n    }\n]\n')),(0,r.kt)("h3",{id:"get-v1plugin_metadataplugin_name"},"GET /v1/plugin_metadata/{plugin_name}"),(0,r.kt)("p",null,"Introduced in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/releases/tag/3.0.0"},"v3.0.0"),"."),(0,r.kt)("p",null,"Dumps the metadata with the specified ",(0,r.kt)("inlineCode",{parentName:"p"},"plugin_name"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "log_format": {\n        "upstream_response_time": "$upstream_response_time"\n    },\n    "id": "file-logger"\n}\n')))}c.isMDXComponent=!0}}]);