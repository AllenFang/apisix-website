"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[95588],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,f=m["".concat(s,".").concat(d)]||m[d]||c[d]||i;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},69575:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const i={title:"Development"},o=void 0,l={unversionedId:"development",id:"version-0.4.0/development",isDocsHomePage:!1,title:"Development",description:"This document explains how to write custom plugins.",source:"@site/docs-apisix-java-plugin-runner_versioned_docs/version-0.4.0/development.md",sourceDirName:".",slug:"/development",permalink:"/docs/java-plugin-runner/development",editUrl:"/edit#https://github.com/apache/apisix-java-plugin-runner/edit/release/0.4.0/docs/en/latest/development.md",tags:[],version:"0.4.0",frontMatter:{title:"Development"},sidebar:"version-0.4.0/docs",next:{title:"How it works",permalink:"/docs/java-plugin-runner/how-it-works"}},s=[{value:"Overview",id:"overview",children:[]},{value:"Test",id:"test",children:[{value:"Run Unit Test Suites",id:"run-unit-test-suites",children:[]},{value:"Mimic practical environment",id:"mimic-practical-environment",children:[]}]}],p={toc:s};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"This document explains how to write custom plugins."),(0,a.kt)("h4",{id:"the-name-of-filter-execution"},"The name of filter execution"),(0,a.kt)("p",null,"The requests go through filters that are dynamically configured on APISIX.\nFor example, if the following configuration is done on APISIX"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri":"/hello",\n    "plugins":{\n        "ext-plugin-pre-req":{\n            "conf":[\n                {\n                    "name":"FooFilter",\n                    "value":"bar"\n                }\n            ]\n        }\n    },\n    "upstream":{\n        "nodes":{\n            "127.0.0.1:1980":1\n        },\n        "type":"roundrobin"\n    }\n}\'\n')),(0,a.kt)("p",null,"apisix-java-plugin-runner will look for implementation classes named ",(0,a.kt)("inlineCode",{parentName:"p"},"FooFilter"),",\nand the name of each filter's implementation class is the return value of its overridden function ",(0,a.kt)("inlineCode",{parentName:"p"},"public String name()"),"."),(0,a.kt)("h4",{id:"the-functions-must-be-implemented-of-filter-execution"},"The functions must be implemented of filter execution"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"String name();")),(0,a.kt)("p",{parentName:"li"},"description: return the name of plugin filter"),(0,a.kt)("p",{parentName:"li"},"code example:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-java"},'  @Override\n  public String name() {\n      return "FooFilter";\n  }\n'))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"void filter(HttpRequest request, HttpResponse response, PluginFilterChain chain);")),(0,a.kt)("p",{parentName:"li"},"description: implementing custom business logic"),(0,a.kt)("p",{parentName:"li"},"code example:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-java"},'  @Override\n  public void filter(HttpRequest request, HttpResponse response, PluginFilterChain chain) {\n      // get conf of current filter\n      String configStr = request.getConfig(this);\n      Gson gson = new Gson();\n      Map<String, Object> conf = new HashMap<>();\n      // convert according to the actual configured conf type\n      conf = gson.fromJson(configStr, conf.getClass());\n\n      // get extra info\n      String remoteAddr = request.getVars("remote_addr");\n      String serverPort = request.getVars("server_port");\n      String body = request.getBody();\n\n      chain.filter(request, response);\n  }\n'))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"List<String> requiredVars();")),(0,a.kt)("p",{parentName:"li"},"description: declare in advance the nginx variables you want to use in the current filter"),(0,a.kt)("p",{parentName:"li"},"code example:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-java"},'  @Override\n  public List<String> requiredVars() {\n      List<String> vars = new ArrayList<>();\n      vars.add("remote_addr");\n      vars.add("server_port");\n      return vars;\n  }\n'))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"Boolean requiredBody();")),(0,a.kt)("p",{parentName:"li"},"description: whether the request body is required in the current filter, true means yes."),(0,a.kt)("p",{parentName:"li"},"code example:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-java"},"  @Override\n  public Boolean requiredBody() {\n      return true;\n  }\n")))),(0,a.kt)("h4",{id:"rewrite-request"},"Rewrite Request"),(0,a.kt)("p",null,"If you perform the following function call in the filter chain of the implementation class"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"request.getConfig()"),(0,a.kt)("li",{parentName:"ul"},"request.setPath()"),(0,a.kt)("li",{parentName:"ul"},"request.setHeader()"),(0,a.kt)("li",{parentName:"ul"},"request.setArg()")),(0,a.kt)("p",null,"this means to rewrit the current request, the upstream server will receive\nthe relevant parameters rewritten here."),(0,a.kt)("h4",{id:"stop-request"},"Stop Request"),(0,a.kt)("p",null,"If you perform the following function call in the filter chain of the implementation class"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"response.setStatusCode()"),(0,a.kt)("li",{parentName:"ul"},"response.setHeader()"),(0,a.kt)("li",{parentName:"ul"},"response.setBody()")),(0,a.kt)("p",null,"this means to stop the current request, the client will receive\nthe relevant parameters generated here."),(0,a.kt)("h4",{id:"get-the-upstream-response-and-process"},"Get the upstream response and process"),(0,a.kt)("p",null,"You can override the ",(0,a.kt)("inlineCode",{parentName:"p"},"postFilter")," function, in your override function,\nyou can get the origin upstream response by ",(0,a.kt)("inlineCode",{parentName:"p"},"PostRequest"),",\nand you can also set the ",(0,a.kt)("inlineCode",{parentName:"p"},"PostResponse")," to override the origin upstream response and return it to the client."),(0,a.kt)("h5",{id:"postrequest"},"PostRequest"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"request.getConfig()"),(0,a.kt)("li",{parentName:"ul"},"request.getUpstreamHeaders()"),(0,a.kt)("li",{parentName:"ul"},"request.getUpstreamStatusCode()"),(0,a.kt)("li",{parentName:"ul"},"request.getBody()")),(0,a.kt)("h5",{id:"postresponse"},"PostResponse"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"response.setStatusCode()"),(0,a.kt)("li",{parentName:"ul"},"response.setHeader()"),(0,a.kt)("li",{parentName:"ul"},"response.setBody()")),(0,a.kt)("h2",{id:"test"},"Test"),(0,a.kt)("h3",{id:"run-unit-test-suites"},"Run Unit Test Suites"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"cd /path/to/apisix-java-plugin-runner\n ./mvnw test\n")),(0,a.kt)("h3",{id:"mimic-practical-environment"},"Mimic practical environment"),(0,a.kt)("p",null,"If you want to mimic the practical environment, you need to configure the route on APISIX\nby having the request go through the filter you want to test, for example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'"plugins":{\n    "ext-plugin-pre-req":{\n        "conf":[\n            {\n                "name":"FooFilter",\n                "value":"bar"\n            }\n        ]\n    }\n}\n')),(0,a.kt)("p",null,"and then make a request to APISIX to trigger the route."))}u.isMDXComponent=!0}}]);