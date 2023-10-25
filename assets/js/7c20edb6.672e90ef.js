"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[35264],{3905:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>k});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var o=a.createContext({}),d=function(t){var e=a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},s=function(t){var e=d(t.components);return a.createElement(o.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,s=p(t,["components","mdxType","originalType","parentName"]),m=d(n),k=r,c=m["".concat(o,".").concat(k)]||m[k]||u[k]||l;return n?a.createElement(c,i(i({ref:e},s),{},{components:n})):a.createElement(c,i({ref:e},s))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=m;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3680:(t,e,n)=>{n.r(e),n.d(e,{contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>p,toc:()=>o});var a=n(87462),r=(n(67294),n(3905));const l={title:"ApisixRoute/v2 Reference"},i=void 0,p={unversionedId:"references/apisix_route_v2",id:"version-1.5.0/references/apisix_route_v2",isDocsHomePage:!1,title:"ApisixRoute/v2 Reference",description:"Meaning of each field in the spec of ApisixRoute are followed, the top level fields (apiVersion, kind and metadata) are same as other Kubernetes Resources.",source:"@site/docs-apisix-ingress-controller_versioned_docs/version-1.5.0/references/apisix_route_v2.md",sourceDirName:"references",slug:"/references/apisix_route_v2",permalink:"/docs/ingress-controller/1.5.0/references/apisix_route_v2",editUrl:"/edit#https://github.com/apache/apisix-ingress-controller/edit/v1.5.0/docs/en/latest/references/apisix_route_v2.md",tags:[],version:"1.5.0",frontMatter:{title:"ApisixRoute/v2 Reference"},sidebar:"version-1.5.0/docs",previous:{title:"ApisixRoute/v2beta3 Reference",permalink:"/docs/ingress-controller/1.5.0/references/apisix_route_v2beta3"},next:{title:"ApisixUpstream Reference",permalink:"/docs/ingress-controller/1.5.0/references/apisix_upstream"}},o=[{value:"Spec",id:"spec",children:[]},{value:"Expression Operators",id:"expression-operators",children:[]},{value:"Service Resolve Granularity",id:"service-resolve-granularity",children:[]}],d={toc:o};function s(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"spec"},"Spec"),(0,r.kt)("p",null,"Meaning of each field in the spec of ApisixRoute are followed, the top level fields (",(0,r.kt)("inlineCode",{parentName:"p"},"apiVersion"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"kind")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"metadata"),") are same as other Kubernetes Resources."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"http"),(0,r.kt)("td",{parentName:"tr",align:null},"array"),(0,r.kt)("td",{parentName:"tr",align:null},"ApisixRoute's HTTP route rules.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"http[].name"),(0,r.kt)("td",{parentName:"tr",align:null},"string (required)"),(0,r.kt)("td",{parentName:"tr",align:null},"The route rule name.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"http[].priority"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"The route priority, it's used to determine which route will be hitted when multile routes contains the same URI. Large number means higher priority.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"http[].timeout"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"Sets the timeout for connecting to, and sending and receiving messages between the Ingress and Service. This will overwrite the timeout value configured in your ApisixUpstream.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"http[].timeout.connect"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},'Time duration in the form "72h3m0.5s"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"http[].timeout.send"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},'Time duration in the form "72h3m0.5s"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"http[].timeout.read"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},'Time duration in the form "72h3m0.5s"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"http[].match"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"Route match conditions.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"http[].match.paths"),(0,r.kt)("td",{parentName:"tr",align:null},"array"),(0,r.kt)("td",{parentName:"tr",align:null},"A series of URI that should be matched (oneof) to use this route rule.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"http[].match.hosts"),(0,r.kt)("td",{parentName:"tr",align:null},"array"),(0,r.kt)("td",{parentName:"tr",align:null},"A series of hosts that should be matched (oneof) to use this route rule.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"http[].match.methods"),(0,r.kt)("td",{parentName:"tr",align:null},"array"),(0,r.kt)("td",{parentName:"tr",align:null},"A series of HTTP methods(",(0,r.kt)("inlineCode",{parentName:"td"},"GET"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"POST"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"PUT"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"DELETE"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"PATCH"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"HEAD"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"OPTIONS"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"CONNECT"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"TRACE"),") that should be matched (oneof) to use this route rule.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"http[].match.remoteAddrs"),(0,r.kt)("td",{parentName:"tr",align:null},"array"),(0,r.kt)("td",{parentName:"tr",align:null},"A series of IP address (CIDR format) that should be matched (oneof) to use this route rule.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"http[].match.exprs"),(0,r.kt)("td",{parentName:"tr",align:null},"array"),(0,r.kt)("td",{parentName:"tr",align:null},"A series expressions that the results should be matched (oneof) to use this route rule.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"http[].match.exprs[].subject"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"Expression subject.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"http[].match.exprs[].subject.scope"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Specify where to find the subject, values can be ",(0,r.kt)("inlineCode",{parentName:"td"},"Header"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"Query"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"Cookie")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"Path"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"http[].match.exprs[].subject.name"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Specify subject name, when scope is ",(0,r.kt)("inlineCode",{parentName:"td"},"Path"),", this field can be absent.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"http[].match.exprs[].op"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Expression operator, see ",(0,r.kt)("a",{parentName:"td",href:"#expression-operators"},"Expression Operators")," for the detail of enumerations.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"http[].match.exprs[].value"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Expected expression result, it's exclusive with ",(0,r.kt)("inlineCode",{parentName:"td"},"http[].match.exprs[].set"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"http[].match.exprs[].set"),(0,r.kt)("td",{parentName:"tr",align:null},"array"),(0,r.kt)("td",{parentName:"tr",align:null},"Expected expression result set, only used when the operator is ",(0,r.kt)("inlineCode",{parentName:"td"},"In")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"NotIn"),", it's exclusive with ",(0,r.kt)("inlineCode",{parentName:"td"},"http[].match.exprs[].value"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"http[].websocket"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether enable websocket proxy.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"http[].plugin_config_name"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Using exist ",(0,r.kt)("inlineCode",{parentName:"td"},"PluginConfig")," for ",(0,r.kt)("inlineCode",{parentName:"td"},"ApisixRoute"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"http[].backends"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"The backend services. When the number of backends more than one, weight based traffic split policy will be applied to shifting traffic between these backends.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"http[].backends[].serviceName"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The backend service name, note the service and ApisixRoute should be created in the same namespace. Cross namespace referencing is not allowed.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"http[].backends[].servicePort"),(0,r.kt)("td",{parentName:"tr",align:null},"integer or string"),(0,r.kt)("td",{parentName:"tr",align:null},"The backend service port, can be the port number or the name defined in the service object.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"http[].backends[].resolveGranularity"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"See ",(0,r.kt)("a",{parentName:"td",href:"#service-resolve-granularity"},"Service Resolve Granularity")," for the details.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"http[].backends[].weight"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"The backend weight, which is critical when shifting traffic between multiple backends, default is ",(0,r.kt)("inlineCode",{parentName:"td"},"100"),". Weight is ignored when there is only one backend.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"http[].backends[].subset"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Subset specifies a subset for the target Service. The subset should be pre-definedin ApisixUpstream about this service.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"http[].plugins"),(0,r.kt)("td",{parentName:"tr",align:null},"array"),(0,r.kt)("td",{parentName:"tr",align:null},"A series of APISIX plugins that will be executed once this route rule is matched")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"http[].plugins[].name"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The plugin name, see ",(0,r.kt)("a",{parentName:"td",href:"http://apisix.apache.org/docs/apisix/getting-started"},"docs")," for learning the available plugins.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"http[].plugins[].enable"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether the plugin would be used")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"http[].plugins[].config"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"The configuration of the plugin that must have the same fields as in APISIX.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"http[].authentication"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"A series of APISIX authentication plugins.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"http[].authentication.enable"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether the plugin would be used.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"http[].authentication.type"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},'Plugin type, one of "basicAuth" "keyAuth"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"http[].authentication.keyAuth"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"Unique key for a Consumer.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"http[].authentication.keyAuth.header"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The header to get the key from.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"stream"),(0,r.kt)("td",{parentName:"tr",align:null},"array"),(0,r.kt)("td",{parentName:"tr",align:null},"ApisixRoutes' stream route rules, which contains TCP or UDP rules.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"stream[].protocol"),(0,r.kt)("td",{parentName:"tr",align:null},"string (required)"),(0,r.kt)("td",{parentName:"tr",align:null},"The protocol of rule. Support ",(0,r.kt)("inlineCode",{parentName:"td"},"TCP")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"UDP"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"stream[].name"),(0,r.kt)("td",{parentName:"tr",align:null},"string (required)"),(0,r.kt)("td",{parentName:"tr",align:null},"The Route rule name.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"stream[].match"),(0,r.kt)("td",{parentName:"tr",align:null},"object (required)"),(0,r.kt)("td",{parentName:"tr",align:null},"The Route match conditions.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"stream[].match.ingressPort"),(0,r.kt)("td",{parentName:"tr",align:null},"integer (required)"),(0,r.kt)("td",{parentName:"tr",align:null},"the Ingress proxy server listening port, note since APISIX doesn't support dynamic listening, this port should be defined in ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/apisix/blob/master/conf/config-default.yaml#L101"},"apisix configuration"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"stream[].backend"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"The backend service. Deprecated: use http[].backends instead.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"stream[].backend.serviceName"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The backend service name, note the service and ApisixRoute should be created in the same namespace. Cross namespace referencing is not allowed.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"stream[].backend.servicePort"),(0,r.kt)("td",{parentName:"tr",align:null},"integer or string"),(0,r.kt)("td",{parentName:"tr",align:null},"The backend service port, can be the port number or the name defined in the service object.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"stream[].backend.resolveGranularity"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"See ",(0,r.kt)("a",{parentName:"td",href:"#service-resolve-granularity"},"Service Resolve Granularity")," for the details.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"stream[].backend.subset"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Subset specifies a subset for the target Service. The subset should be pre-definedin ApisixUpstream about this service.")))),(0,r.kt)("h2",{id:"expression-operators"},"Expression Operators"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Operator"),(0,r.kt)("th",{parentName:"tr",align:null},"Meaning"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Equal"),(0,r.kt)("td",{parentName:"tr",align:null},"The result of ",(0,r.kt)("inlineCode",{parentName:"td"},"subject")," should be equal to the ",(0,r.kt)("inlineCode",{parentName:"td"},"value"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NotEqual"),(0,r.kt)("td",{parentName:"tr",align:null},"The result of ",(0,r.kt)("inlineCode",{parentName:"td"},"subject")," should not be equal to ",(0,r.kt)("inlineCode",{parentName:"td"},"value"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GreaterThan"),(0,r.kt)("td",{parentName:"tr",align:null},"The result of ",(0,r.kt)("inlineCode",{parentName:"td"},"subject")," should be a number and it must larger then ",(0,r.kt)("inlineCode",{parentName:"td"},"value"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"LessThan"),(0,r.kt)("td",{parentName:"tr",align:null},"The result of ",(0,r.kt)("inlineCode",{parentName:"td"},"subject")," should be a number and it must less than ",(0,r.kt)("inlineCode",{parentName:"td"},"value"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"In"),(0,r.kt)("td",{parentName:"tr",align:null},"The result of ",(0,r.kt)("inlineCode",{parentName:"td"},"subject")," should be inside the ",(0,r.kt)("inlineCode",{parentName:"td"},"set"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NotIn"),(0,r.kt)("td",{parentName:"tr",align:null},"The result of ",(0,r.kt)("inlineCode",{parentName:"td"},"subject")," should not be inside the ",(0,r.kt)("inlineCode",{parentName:"td"},"set"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RegexMatch"),(0,r.kt)("td",{parentName:"tr",align:null},"The result of ",(0,r.kt)("inlineCode",{parentName:"td"},"subject")," should be matched by the ",(0,r.kt)("inlineCode",{parentName:"td"},"value")," (a PCRE regex pattern).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RegexNotMatch"),(0,r.kt)("td",{parentName:"tr",align:null},"The result of ",(0,r.kt)("inlineCode",{parentName:"td"},"subject")," should not be matched by the ",(0,r.kt)("inlineCode",{parentName:"td"},"value")," (a PCRE regex pattern).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RegexMatchCaseInsensitive"),(0,r.kt)("td",{parentName:"tr",align:null},"Similar with ",(0,r.kt)("inlineCode",{parentName:"td"},"RegexMatch")," but the match process is case insensitive")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RegexNotMatchCaseInsensitive"),(0,r.kt)("td",{parentName:"tr",align:null},"Similar with ",(0,r.kt)("inlineCode",{parentName:"td"},"RegexNotMatchCaseInsensitive")," but the match process is case insensitive.")))),(0,r.kt)("h2",{id:"service-resolve-granularity"},"Service Resolve Granularity"),(0,r.kt)("p",null,"The service resolve granularity determines whether the ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/services-networking/service/#publishing-services-service-types"},"Serivce ClusterIP")," or its endpoints should be filled in the target upstream of APISIX."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Granularity"),(0,r.kt)("th",{parentName:"tr",align:null},"Meaning"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"endpoint"),(0,r.kt)("td",{parentName:"tr",align:null},"Filled upstream nodes by Pods' IP.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"service"),(0,r.kt)("td",{parentName:"tr",align:null},"Filled upstream nodes by Service ClusterIP, in such a case, loadbalacing are implemented by ",(0,r.kt)("a",{parentName:"td",href:"https://kubernetes.io/docs/concepts/overview/components/#kube-proxy"},"kube-proxy"),".")))))}s.isMDXComponent=!0}}]);