"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[58314],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>c});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),d=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=d(e.components);return n.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=d(a),c=r,k=m["".concat(o,".").concat(c)]||m[c]||u[c]||l;return a?n.createElement(k,i(i({ref:t},s),{},{components:a})):n.createElement(k,i({ref:t},s))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=m;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},26128:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>p,toc:()=>o});var n=a(87462),r=(a(67294),a(3905));const l={title:"ApisixRoute/v2alpha1 Reference"},i=void 0,p={unversionedId:"references/apisix_route_v2alpha1",id:"version-1.3.0/references/apisix_route_v2alpha1",isDocsHomePage:!1,title:"ApisixRoute/v2alpha1 Reference",description:"Meaning of each field in the spec of ApisixRoute are followed, the top level fields (apiVersion, kind and metadata) are same as other Kubernetes Resources.",source:"@site/docs-apisix-ingress-controller_versioned_docs/version-1.3.0/references/apisix_route_v2alpha1.md",sourceDirName:"references",slug:"/references/apisix_route_v2alpha1",permalink:"/zh/docs/ingress-controller/1.3.0/references/apisix_route_v2alpha1",editUrl:"/zh/edit#https://github.com/apache/apisix-ingress-controller/edit/v1.3.0/docs/zh/latest/references/apisix_route_v2alpha1.md",tags:[],version:"1.3.0",frontMatter:{title:"ApisixRoute/v2alpha1 Reference"},sidebar:"version-1.3.0/docs",previous:{title:"ApisixRoute/v1 (Deprecated) Reference",permalink:"/zh/docs/ingress-controller/1.3.0/references/apisix_route_v1"},next:{title:"ApisixRoute/v2beta1 Reference",permalink:"/zh/docs/ingress-controller/1.3.0/references/apisix_route_v2beta1"}},o=[{value:"Spec",id:"spec",children:[]},{value:"Expression Operators",id:"expression-operators",children:[]},{value:"Service Resolve Granularity",id:"service-resolve-granularity",children:[]}],d={toc:o};function s(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"spec"},"Spec"),(0,r.kt)("p",null,"Meaning of each field in the spec of ApisixRoute are followed, the top level fields (",(0,r.kt)("inlineCode",{parentName:"p"},"apiVersion"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"kind")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"metadata"),") are same as other Kubernetes Resources."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"http"),(0,r.kt)("td",{parentName:"tr",align:null},"array"),(0,r.kt)("td",{parentName:"tr",align:null},"ApisixRoute's HTTP route rules.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"http[].name"),(0,r.kt)("td",{parentName:"tr",align:null},"string (required)"),(0,r.kt)("td",{parentName:"tr",align:null},"The route rule name.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"http[].priority"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"The route priority, it's used to determine which route will be hitted when multile routes contains the same URI. Large number means higher priority.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"http[].match"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"Route match conditions.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"http[].match.paths"),(0,r.kt)("td",{parentName:"tr",align:null},"array"),(0,r.kt)("td",{parentName:"tr",align:null},"A series of URI that should be matched (oneof) to use this route rule.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"http[].match.hosts"),(0,r.kt)("td",{parentName:"tr",align:null},"array"),(0,r.kt)("td",{parentName:"tr",align:null},"A series of hosts that should be matched (oneof) to use this route rule.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"http[].match.methods"),(0,r.kt)("td",{parentName:"tr",align:null},"array"),(0,r.kt)("td",{parentName:"tr",align:null},"A series of HTTP methods(",(0,r.kt)("inlineCode",{parentName:"td"},"GET"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"POST"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"PUT"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"DELETE"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"PATCH"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"HEAD"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"OPTIONS"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"CONNECT"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"TRACE"),") that should be matched (oneof) to use this route rule.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"http[].match.remoteAddrs"),(0,r.kt)("td",{parentName:"tr",align:null},"array"),(0,r.kt)("td",{parentName:"tr",align:null},"A series of IP address (CIDR format) that should be matched (oneof) to use this route rule.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"http[].match.exprs"),(0,r.kt)("td",{parentName:"tr",align:null},"array"),(0,r.kt)("td",{parentName:"tr",align:null},"A series expressions that the results should be matched (oneof) to use this route rule.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"http[].match.exprs[].subject"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"Expression subject.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"http[].match.exprs[].subject.scope"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Specify where to find the subject, values can be ",(0,r.kt)("inlineCode",{parentName:"td"},"Header"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"Query"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"Cookie")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"Path"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"http[].match.exprs[].subject.name"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Specify subject name, when scope is ",(0,r.kt)("inlineCode",{parentName:"td"},"Path"),", this field can be absent.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"http[].match.exprs[].op"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Expression operator, see ",(0,r.kt)("a",{parentName:"td",href:"#expression-operators"},"Expression Operators")," for the detail of enumerations.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"http[].match.exprs[].value"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Expected expression result, it's exclusive with ",(0,r.kt)("inlineCode",{parentName:"td"},"http[].match.exprs[].set"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"http[].match.exprs[].set"),(0,r.kt)("td",{parentName:"tr",align:null},"array"),(0,r.kt)("td",{parentName:"tr",align:null},"Expected expression result set, only used when the operator is ",(0,r.kt)("inlineCode",{parentName:"td"},"In")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"NotIn"),", it's exclusive with ",(0,r.kt)("inlineCode",{parentName:"td"},"http[].match.exprs[].value"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"http[].backend"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"The backend service. Deprecated: use http[].backends instead.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"http[].backend.serviceName"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The backend service name, note the service and ApisixRoute should be created in the same namespace. Cross namespace referencing is not allowed.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"http[].backend.servicePort"),(0,r.kt)("td",{parentName:"tr",align:null},"integer or string"),(0,r.kt)("td",{parentName:"tr",align:null},"The backend service port, can be the port number or the name defined in the service object.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"http[].backend.resolveGranularity"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"See ",(0,r.kt)("a",{parentName:"td",href:"#service-resolve-granularity"},"Service Resolve Granularity")," for the details.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"http[].backends"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"The backend services. When the number of backends more than one, weight based traffic split policy will be applied to shifting traffic between these backends.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"http[].backends[].serviceName"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The backend service name, note the service and ApisixRoute should be created in the same namespace. Cross namespace referencing is not allowed.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"http[].backends[].servicePort"),(0,r.kt)("td",{parentName:"tr",align:null},"integer or string"),(0,r.kt)("td",{parentName:"tr",align:null},"The backend service port, can be the port number or the name defined in the service object.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"http[].backends[].resolveGranularity"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"See ",(0,r.kt)("a",{parentName:"td",href:"#service-resolve-granularity"},"Service Resolve Granularity")," for the details.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"http[].backends[].weight"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"The backend weight, which is critical when shifting traffic between multiple backends, default is ",(0,r.kt)("inlineCode",{parentName:"td"},"100"),". Weight is ignored when there is only one backend.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"http[].plugins"),(0,r.kt)("td",{parentName:"tr",align:null},"array"),(0,r.kt)("td",{parentName:"tr",align:null},"A series of APISIX plugins that will be executed once this route rule is matched")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"http[].plugins[].name"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The plugin name, see ",(0,r.kt)("a",{parentName:"td",href:"http://apisix.apache.org/docs/apisix/getting-started"},"docs")," for learning the available plugins.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"http[].plugins[].enable"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether the plugin is in use")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"http[].plugins[].config"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"The plugin configuration, fields should be same as in APISIX.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"http[].websocket"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether enable websocket proxy.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tcp"),(0,r.kt)("td",{parentName:"tr",align:null},"array"),(0,r.kt)("td",{parentName:"tr",align:null},"ApisixRoutes' tcp route rules.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tcp[].name"),(0,r.kt)("td",{parentName:"tr",align:null},"string (required)"),(0,r.kt)("td",{parentName:"tr",align:null},"The Route rule name.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tcp[].match"),(0,r.kt)("td",{parentName:"tr",align:null},"object (required)"),(0,r.kt)("td",{parentName:"tr",align:null},"The Route match conditions.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tcp[].match.ingressPort"),(0,r.kt)("td",{parentName:"tr",align:null},"integer (required)"),(0,r.kt)("td",{parentName:"tr",align:null},"the Ingress proxy server listening port, note since APISIX doesn't support dynamic listening, this port should be defined in ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/apisix/blob/master/conf/config-default.yaml#L101"},"apisix configuration"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tcp[].backend"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"The backend service. Deprecated: use http[].backends instead.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tcp[].backend.serviceName"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The backend service name, note the service and ApisixRoute should be created in the same namespace. Cross namespace referencing is not allowed.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tcp[].backend.servicePort"),(0,r.kt)("td",{parentName:"tr",align:null},"integer or string"),(0,r.kt)("td",{parentName:"tr",align:null},"The backend service port, can be the port number or the name defined in the service object.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tcp[].backend.resolveGranularity"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"See ",(0,r.kt)("a",{parentName:"td",href:"#service-resolve-granularity"},"Service Resolve Granularity")," for the details.")))),(0,r.kt)("h2",{id:"expression-operators"},"Expression Operators"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Operator"),(0,r.kt)("th",{parentName:"tr",align:null},"Meaning"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Equal"),(0,r.kt)("td",{parentName:"tr",align:null},"The result of ",(0,r.kt)("inlineCode",{parentName:"td"},"subject")," should be equal to the ",(0,r.kt)("inlineCode",{parentName:"td"},"value"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NotEqual"),(0,r.kt)("td",{parentName:"tr",align:null},"The result of ",(0,r.kt)("inlineCode",{parentName:"td"},"subject")," should not be equal to ",(0,r.kt)("inlineCode",{parentName:"td"},"value"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GreaterThan"),(0,r.kt)("td",{parentName:"tr",align:null},"The result of ",(0,r.kt)("inlineCode",{parentName:"td"},"subject")," should be a number and it must larger then ",(0,r.kt)("inlineCode",{parentName:"td"},"value"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"LessThan"),(0,r.kt)("td",{parentName:"tr",align:null},"The result of ",(0,r.kt)("inlineCode",{parentName:"td"},"subject")," should be a number and it must less than ",(0,r.kt)("inlineCode",{parentName:"td"},"value"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"In"),(0,r.kt)("td",{parentName:"tr",align:null},"The result of ",(0,r.kt)("inlineCode",{parentName:"td"},"subject")," should be inside the ",(0,r.kt)("inlineCode",{parentName:"td"},"set"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NotIn"),(0,r.kt)("td",{parentName:"tr",align:null},"The result of ",(0,r.kt)("inlineCode",{parentName:"td"},"subject")," should not be inside the ",(0,r.kt)("inlineCode",{parentName:"td"},"set"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RegexMatch"),(0,r.kt)("td",{parentName:"tr",align:null},"The result of ",(0,r.kt)("inlineCode",{parentName:"td"},"subject")," should be matched by the ",(0,r.kt)("inlineCode",{parentName:"td"},"value")," (a PCRE regex pattern).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RegexNotMatch"),(0,r.kt)("td",{parentName:"tr",align:null},"The result of ",(0,r.kt)("inlineCode",{parentName:"td"},"subject")," should not be matched by the ",(0,r.kt)("inlineCode",{parentName:"td"},"value")," (a PCRE regex pattern).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RegexMatchCaseInsensitive"),(0,r.kt)("td",{parentName:"tr",align:null},"Similar with ",(0,r.kt)("inlineCode",{parentName:"td"},"RegexMatch")," but the match process is case insensitive")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RegexNotMatchCaseInsensitive"),(0,r.kt)("td",{parentName:"tr",align:null},"Similar with ",(0,r.kt)("inlineCode",{parentName:"td"},"RegexNotMatchCaseInsensitive")," but the match process is case insensitive.")))),(0,r.kt)("h2",{id:"service-resolve-granularity"},"Service Resolve Granularity"),(0,r.kt)("p",null,"The service resolve granularity determines whether the ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/services-networking/service/#publishing-services-service-types"},"Serivce ClusterIP")," or its endpoints should be filled in the target upstream of APISIX."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Granularity"),(0,r.kt)("th",{parentName:"tr",align:null},"Meaning"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"endpoint"),(0,r.kt)("td",{parentName:"tr",align:null},"Filled upstream nodes by Pods' IP.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"service"),(0,r.kt)("td",{parentName:"tr",align:null},"Filled upstream nodes by Service ClusterIP, in such a case, loadbalacing are implemented by ",(0,r.kt)("a",{parentName:"td",href:"https://kubernetes.io/docs/concepts/overview/components/#kube-proxy"},"kube-proxy"),".")))))}s.isMDXComponent=!0}}]);