"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[84601],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>u});var a=t(67294);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,a,s=function(e,n){if(null==e)return{};var t,a,s={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var l=a.createContext({}),p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},h={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,s=e.mdxType,i=e.originalType,l=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),d=p(t),u=s,m=d["".concat(l,".").concat(u)]||d[u]||h[u]||i;return t?a.createElement(m,o(o({ref:n},c),{},{components:t})):a.createElement(m,o({ref:n},c))}));function u(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var i=t.length,o=new Array(i);o[0]=d;var r={};for(var l in n)hasOwnProperty.call(n,l)&&(r[l]=n[l]);r.originalType=e,r.mdxType="string"==typeof e?e:s,o[1]=r;for(var p=2;p<i;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},37947:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>r,toc:()=>l});var a=t(87462),s=(t(67294),t(3905));const i={title:"Annotations",keywords:["APISIX ingress","Apache APISIX","Kubernetes ingress","Annotations"],description:"Guide to using additional features of APISIX Ingress with annotations."},o=void 0,r={unversionedId:"concepts/annotations",id:"concepts/annotations",isDocsHomePage:!1,title:"Annotations",description:"Guide to using additional features of APISIX Ingress with annotations.",source:"@site/docs/apisix-ingress-controller/concepts/annotations.md",sourceDirName:"concepts",slug:"/concepts/annotations",permalink:"/zh/docs/ingress-controller/next/concepts/annotations",editUrl:"/zh/edit#https://github.com/apache/apisix-ingress-controller/edit/master/docs/zh/latest/concepts/annotations.md",tags:[],version:"current",frontMatter:{title:"Annotations",keywords:["APISIX ingress","Apache APISIX","Kubernetes ingress","Annotations"],description:"Guide to using additional features of APISIX Ingress with annotations."},sidebar:"docs",previous:{title:"ApisixPluginConfig",permalink:"/zh/docs/ingress-controller/next/concepts/apisix_plugin_config"},next:{title:"ApisixGlobalRule",permalink:"/zh/docs/ingress-controller/next/concepts/apisix_global_rule"}},l=[{value:"CORS",id:"cors",children:[{value:"Allow origins",id:"allow-origins",children:[]},{value:"Allow headers",id:"allow-headers",children:[]},{value:"Allow methods",id:"allow-methods",children:[]}]},{value:"Allowlist source range",id:"allowlist-source-range",children:[]},{value:"Blocklist source range",id:"blocklist-source-range",children:[]},{value:"Customized http methods",id:"customized-http-methods",children:[{value:"Allow http methods",id:"allow-http-methods",children:[]},{value:"Block http methods",id:"block-http-methods",children:[]}]},{value:"Rewrite target",id:"rewrite-target",children:[]},{value:"HTTP to HTTPS",id:"http-to-https",children:[]},{value:"Regex paths",id:"regex-paths",children:[]},{value:"Enable websocket",id:"enable-websocket",children:[]},{value:"Response Rewrite",id:"response-rewrite",children:[{value:"New HTTP status code",id:"new-http-status-code",children:[]},{value:"New body",id:"new-body",children:[]},{value:"Add header",id:"add-header",children:[]},{value:"Set header",id:"set-header",children:[]},{value:"Remove header",id:"remove-header",children:[]},{value:"Body Base64",id:"body-base64",children:[]}]},{value:"Using ApisixPluginConfig resource",id:"using-apisixpluginconfig-resource",children:[]},{value:"Upstream scheme",id:"upstream-scheme",children:[]},{value:"Cross-namespace references",id:"cross-namespace-references",children:[]}],p={toc:l};function c(e){let{components:n,...t}=e;return(0,s.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Annotations can be used with the ",(0,s.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/services-networking/ingress/"},"native Kubernetes ingress resource")," to access advanced features in Apache APISIX. Alternatively, you can use ",(0,s.kt)("a",{parentName:"p",href:"https://apisix.apache.org/docs/ingress-controller/concepts/apisix_route"},"APISIX's CRDs")," for a better experience."),(0,s.kt)("p",null,"This document describes all the available annotations and their uses."),(0,s.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"Key-value pairs in annotations are strings. So boolean values should be reprsented as ",(0,s.kt)("inlineCode",{parentName:"p"},'"true"')," and ",(0,s.kt)("inlineCode",{parentName:"p"},'"false"'),"."))),(0,s.kt)("h2",{id:"cors"},"CORS"),(0,s.kt)("p",null,"You can enable ",(0,s.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Cross-origin_resource_sharing"},"CORS")," by adding the annotation as shown below:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},'metadata:\n  annotations:\n    k8s.apisix.apache.org/enable-cors: "true"\n')),(0,s.kt)("p",null,"You can also customize the behaviour with some additional annotations as shown below."),(0,s.kt)("h3",{id:"allow-origins"},"Allow origins"),(0,s.kt)("p",null,"This annotation configures which origins are allowed. Multiple origins can be added in a comma separated form."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},'k8s.apisix.apache.org/cors-allow-origin: "https://foo.com,http://bar.com:8080"\n')),(0,s.kt)("p",null,"The default value is ",(0,s.kt)("inlineCode",{parentName:"p"},'"*"')," which means all origins are allowed."),(0,s.kt)("h3",{id:"allow-headers"},"Allow headers"),(0,s.kt)("p",null,"This annotation configures which headers are allowed. Multiple headers can be added in a comma separated form."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},'k8s.apisix.apache.org/cors-allow-headers: "Host: https://bar.com:8080"\n')),(0,s.kt)("p",null,"The default value is ",(0,s.kt)("inlineCode",{parentName:"p"},'"*"')," which means all headers are allowed."),(0,s.kt)("h3",{id:"allow-methods"},"Allow methods"),(0,s.kt)("p",null,"This annotation configures which HTTP methods are allowed. Multiple methods can be added in a comma separated form."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},'k8s.apisix.apache.org/cors-allow-methods: "GET,POST"\n')),(0,s.kt)("p",null,"The default value is ",(0,s.kt)("inlineCode",{parentName:"p"},'"*"')," which means all methods are allowed."),(0,s.kt)("h2",{id:"allowlist-source-range"},"Allowlist source range"),(0,s.kt)("p",null,"This annotation can be used to specify which client IP addresses or nets are allowed. Multiple IP addresses can also be specified by separating them with commas."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},'k8s.apisix.apache.org/allowlist-source-range: "10.0.5.0/16,127.0.0.1,192.168.3.98"\n')),(0,s.kt)("p",null,"The default value is empty which means all IP addresses are allowed."),(0,s.kt)("h2",{id:"blocklist-source-range"},"Blocklist source range"),(0,s.kt)("p",null,"This annotation can be used to specify which client IP addresses or nets are blocked. Multiple IP addresses can also be specified by separating them with commas."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},'k8s.apisix.apache.org/blocklist-source-range: "127.0.0.1,172.17.0.0/16"\n')),(0,s.kt)("p",null,"The default value is empty which means no IP addresses are blocked."),(0,s.kt)("h2",{id:"customized-http-methods"},"Customized http methods"),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},(0,s.kt)("inlineCode",{parentName:"p"},"http-allow-methods")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"http-block-methods")," are mutually exclusive.\nIf they're both set, only ",(0,s.kt)("inlineCode",{parentName:"p"},"http-allow-methods")," works")),(0,s.kt)("h3",{id:"allow-http-methods"},"Allow http methods"),(0,s.kt)("p",null,"This annotation can be used to specify which http method are allowed. Multiple methods can also be specified by separating them with commas."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},'k8s.apisix.apache.org/http-allow-methods: "GET,POST"\n')),(0,s.kt)("p",null,"The default value is empty which means all methods are allowed."),(0,s.kt)("h3",{id:"block-http-methods"},"Block http methods"),(0,s.kt)("p",null,"This annotation can be used to specify which http method are blocked. Multiple methods can also be specified by separating them with commas."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},'k8s.apisix.apache.org/http-block-method: "PUT,DELETE"\n')),(0,s.kt)("p",null,"The default value is empty which means no methods are blocked."),(0,s.kt)("h2",{id:"rewrite-target"},"Rewrite target"),(0,s.kt)("p",null,"These annotations are used to rewrite requests."),(0,s.kt)("p",null,"The annotation ",(0,s.kt)("inlineCode",{parentName:"p"},"k8s.apisix.apache.org/rewrite-target")," specifies where to forward the request."),(0,s.kt)("p",null,"If you want to use regex and match groups, use the annotations ",(0,s.kt)("inlineCode",{parentName:"p"},"k8s.apisix.apache.org/rewrite-target-regex")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"k8s.apisix.apache.org/rewrite-target-regex-template"),". The former should contain the matching rule and the latter should contain the rewrite rule. Both these annotations must be used together."),(0,s.kt)("p",null,"The example below configures the Ingress to forward all requests with ",(0,s.kt)("inlineCode",{parentName:"p"},"/app")," prefix to the backend removing the ",(0,s.kt)("inlineCode",{parentName:"p"},"/app/")," part. So, a request to ",(0,s.kt)("inlineCode",{parentName:"p"},"/app/ip")," will be forwarded to ",(0,s.kt)("inlineCode",{parentName:"p"},"/ip"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: networking.k8s.io/v1\nkind: Ingress\nmetadata:\n  annotations:\n    k8s.apisix.apache.org/rewrite-target-regex: "/app/(.*)"\n    k8s.apisix.apache.org/rewrite-target-regex-template: "/$1"\n  name: ingress-v1\nspec:\n  ingressClassName: apisix\n  rules:\n    - host: httpbin.org\n      http:\n        paths:\n          - path: /app\n            pathType: Prefix\n            backend:\n              service:\n                name: httpbin\n                port:\n                  number: 80\n')),(0,s.kt)("h2",{id:"http-to-https"},"HTTP to HTTPS"),(0,s.kt)("p",null,"This annotation is used to redirect HTTP requests to HTTPS with a ",(0,s.kt)("inlineCode",{parentName:"p"},"301")," status code and with the same URI as the original request."),(0,s.kt)("p",null,"The example below will redirect HTTP requests with a ",(0,s.kt)("inlineCode",{parentName:"p"},"301")," status code with a response header ",(0,s.kt)("inlineCode",{parentName:"p"},"Location:https://httpbin.org/sample"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: networking.k8s.io/v1\nkind: Ingress\nmetadata:\n  annotations:\n    k8s.apisix.apache.org/http-to-https: "true"\n  name: ingress-v1\nspec:\n  ingressClassName: apisix\n  rules:\n    - host: httpbin.org\n      http:\n        paths:\n          - path: /sample\n            pathType: Exact\n            backend:\n              service:\n                name: httpbin\n                port:\n                  number: 80\n')),(0,s.kt)("h2",{id:"regex-paths"},"Regex paths"),(0,s.kt)("p",null,"This annotation is can be used to enable regular expressions in path matching."),(0,s.kt)("p",null,"With this annotation set to ",(0,s.kt)("inlineCode",{parentName:"p"},'"true"')," and ",(0,s.kt)("inlineCode",{parentName:"p"},"PathType")," set to ",(0,s.kt)("inlineCode",{parentName:"p"},"ImplementationSpecific"),", the path matching will use regex. The example below configures Ingress to route requests to path ",(0,s.kt)("inlineCode",{parentName:"p"},"/api/*/action1")," to ",(0,s.kt)("inlineCode",{parentName:"p"},"service1")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"/api/*/action2")," to ",(0,s.kt)("inlineCode",{parentName:"p"},"service2"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: networking.k8s.io/v1\nkind: Ingress\nmetadata:\n  annotations:\n    k8s.apisix.apache.org/use-regex: "true"\n  name: ingress-v1\nspec:\n  ingressClassName: apisix\n  rules:\n    - host: httpbin.org\n      http:\n        paths:\n          - path: /api/.*/action1\n            pathType: ImplementationSpecific\n            backend:\n              service:\n                name: service1\n                port:\n                  number: 80\n          - path: /api/.*/action2\n            pathType: ImplementationSpecific\n            backend:\n              service:\n                name: service2\n                port:\n                  number: 80\n')),(0,s.kt)("h2",{id:"enable-websocket"},"Enable websocket"),(0,s.kt)("p",null,"This annotation is use to enable websocket connections."),(0,s.kt)("p",null,"In the example below, the annotation will enable websocket connections on the route ",(0,s.kt)("inlineCode",{parentName:"p"},"/api/*"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: networking.k8s.io/v1\nkind: Ingress\nmetadata:\n  annotations:\n    k8s.apisix.apache.org/enable-websocket: "true"\n  name: ingress-v1\nspec:\n  ingressClassName: apisix\n  rules:\n    - host: httpbin.org\n      http:\n        paths:\n          - path: /api/*\n            pathType: ImplementationSpecific\n            backend:\n              service:\n                name: service1\n                port:\n                  number: 80\n')),(0,s.kt)("h2",{id:"response-rewrite"},"Response Rewrite"),(0,s.kt)("p",null,"You can enable ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/blob/master/docs/en/latest/plugins/response-rewrite.md"},"Response Rewrite")," by adding the annotation as shown below:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},'metadata:\n  annotations:\n    k8s.apisix.apache.org/enable-response-rewrite: "true"\n')),(0,s.kt)("p",null,"You can customize the behaviour with some additional annotations as shown below."),(0,s.kt)("h3",{id:"new-http-status-code"},"New HTTP status code"),(0,s.kt)("p",null,"This annotation configures the new HTTP status code in the response."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},'k8s.apisix.apache.org/response-rewrite-status-code: "404"\n')),(0,s.kt)("p",null,"If unset, falls back to the original status code."),(0,s.kt)("h3",{id:"new-body"},"New body"),(0,s.kt)("p",null,"This annotation configures the new body in the response."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},'k8s.apisix.apache.org/response-rewrite-body: "bar-body"\n')),(0,s.kt)("h3",{id:"add-header"},"Add header"),(0,s.kt)("p",null,"This annotation configures to append the new headers in the response."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},'k8s.apisix.apache.org/response-rewrite-add-header: "testkey1:testval1,testkey2:testval2"\n')),(0,s.kt)("h3",{id:"set-header"},"Set header"),(0,s.kt)("p",null,"This annotation configures to rewrite the new headers in the response."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},'k8s.apisix.apache.org/response-rewrite-set-header: "testkey1:testval1,testkey2:testval2"\n')),(0,s.kt)("h3",{id:"remove-header"},"Remove header"),(0,s.kt)("p",null,"This annotation configures to remove headers in the response."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},'k8s.apisix.apache.org/response-rewrite-remove-header: "testkey1,testkey2"\n')),(0,s.kt)("h3",{id:"body-base64"},"Body Base64"),(0,s.kt)("p",null,"When set, the body of the request will be decoded before writing to the client."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},'k8s.apisix.apache.org/response-rewrite-body-base64: "true"\n')),(0,s.kt)("p",null,"The default value is ",(0,s.kt)("inlineCode",{parentName:"p"},'"false"'),"."),(0,s.kt)("h2",{id:"using-apisixpluginconfig-resource"},"Using ApisixPluginConfig resource"),(0,s.kt)("p",null,"This annotation is used to enable a defined ",(0,s.kt)("a",{parentName:"p",href:"https://apisix.apache.org/docs/ingress-controller/references/apisix_pluginconfig_v2"},"ApisixPluginConfig")," resource on a particular route."),(0,s.kt)("p",null,"The value of the annotation should be the name of the created ",(0,s.kt)("inlineCode",{parentName:"p"},"ApisixPluginConfig")," resource."),(0,s.kt)("p",null,"The example below shows how this is configured. The created route ",(0,s.kt)("inlineCode",{parentName:"p"},"/api/*")," will have the ",(0,s.kt)("a",{parentName:"p",href:"https://apisix.apache.org/docs/apisix/plugins/echo/"},"echo")," and ",(0,s.kt)("a",{parentName:"p",href:"https://apisix.apache.org/docs/apisix/plugins/cors/"},"cors")," Plugins enabled as has the resource configured through annotations:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: apisix.apache.org/v2\nkind: ApisixPluginConfig\nmetadata:\n  name: echo-and-cors-apc\nspec:\n  plugins:\n    - name: echo\n      enable: true\n      config:\n        before_body: "This is the preface"\n        after_body: "This is the epilogue"\n        headers:\n          X-Foo: v1\n          X-Foo2: v2\n    - name: cors\n      enable: true\n---\napiVersion: networking.k8s.io/v1\nkind: Ingress\nmetadata:\n  annotations:\n    k8s.apisix.apache.org/plugin-config-name: "echo-and-cors-apc"\n  name: ingress-v1\nspec:\n  ingressClassName: apisix\n  rules:\n    - host: httpbin.org\n      http:\n        paths:\n          - path: /api/*\n            pathType: ImplementationSpecific\n            backend:\n              service:\n                name: service1\n                port:\n                  number: 80\n')),(0,s.kt)("h2",{id:"upstream-scheme"},"Upstream scheme"),(0,s.kt)("p",null,"The scheme used when communicating with the Upstream. this value can be one of 'http', 'https', 'grpc', 'grpcs'. Defaults to 'http'."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: networking.k8s.io/v1\nkind: Ingress\nmetadata:\n  annotations:\n    kubernetes.io/ingress.class: apisix\n    k8s.apisix.apache.org/upstream-scheme: grpcs\n  name: ingress-v1\nspec:\n  rules:\n  - host: e2e.apisix.local\n    http:\n      paths:\n      - path: /helloworld.Greeter/SayHello\n        pathType: ImplementationSpecific\n        backend:\n          service:\n            name: test-backend-service-e2e-test\n            port:\n              number: 50053\n")),(0,s.kt)("h2",{id:"cross-namespace-references"},"Cross-namespace references"),(0,s.kt)("p",null,"This annotation can be used to route to services in a different namespace."),(0,s.kt)("p",null,"In the example configuration below, the Ingress resource in the ",(0,s.kt)("inlineCode",{parentName:"p"},"default")," namespace references the httpbin service in the ",(0,s.kt)("inlineCode",{parentName:"p"},"test")," namespace:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: networking.k8s.io/v1\nkind: Ingress\nmetadata:\n  annotations:\n    k8s.apisix.apache.org/svc-namespace: test\n  name: ingress-v1-svc\n  namespace: default\nspec:\n  ingressClassName: apisix\n  rules:\n    - host: httpbin.org\n      http:\n        paths:\n          - path: /ip\n            pathType: Exact\n            backend:\n              service:\n                name: httpbin\n                port:\n                  number: 80\n")))}c.isMDXComponent=!0}}]);