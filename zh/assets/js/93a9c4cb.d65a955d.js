"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[86357],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>u});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=p(n),u=o,f=m["".concat(l,".").concat(u)]||m[u]||d[u]||a;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},63188:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>s,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));const a={title:"Example"},i=void 0,c={unversionedId:"example",id:"version-apisix-3.6.0/example",isDocsHomePage:!1,title:"Example",description:"This example is used for functional verification and is not recommended for performance testing. For performance testing, please refer to benchmark.",source:"@site/docs-apisix-docker_versioned_docs/version-apisix-3.6.0/example.md",sourceDirName:".",slug:"/example",permalink:"/zh/docs/docker/example",editUrl:"/zh/edit#https://github.com/apache/apisix-docker/edit/release/apisix-3.6.0/docs/zh/latest/example.md",tags:[],version:"apisix-3.6.0",frontMatter:{title:"Example"},sidebar:"version-apisix-3.6.0/docs",previous:{title:"Deploy Apache APISIX with Docker",permalink:"/zh/docs/docker/manual"}},l=[{value:"Run",id:"run",children:[]},{value:"Configure",id:"configure",children:[]},{value:"Test",id:"test",children:[]},{value:"Clean",id:"clean",children:[]}],p={toc:l};function s(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"This example is used for functional verification and is not recommended for performance testing. For performance testing, please refer to ",(0,o.kt)("a",{parentName:"strong",href:"https://github.com/apache/apisix#benchmark"},"benchmark"),".")),(0,o.kt)("h3",{id:"run"},"Run"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker-compose -d\n")),(0,o.kt)("h3",{id:"configure"},"Configure"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'curl http://127.0.0.1:9180/apisix/admin/services/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "web1:80": 1\n        }\n    }\n}\'\n\ncurl http://127.0.0.1:9180/apisix/admin/services/2 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "web2:80": 1\n        }\n    }\n}\'\n\ncurl http://127.0.0.1:9180/apisix/admin/routes/12 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/*",\n    "host": "web1.lvh.me",\n    "service_id": "1"\n}\'\n\ncurl http://127.0.0.1:9180/apisix/admin/routes/22 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/*",\n    "host": "web2.lvh.me",\n    "service_id": "2"\n}\'\n\ncurl http://127.0.0.1:9180/apisix/admin/ssl/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d "\n{\n    \\"cert\\": \\"$( cat \'./mkcert/lvh.me+1.pem\')\\",\n    \\"key\\": \\"$( cat \'./mkcert/lvh.me+1-key.pem\')\\",\n    \\"sni\\": \\"lvh.me\\"\n}"\n\ncurl http://127.0.0.1:9180/apisix/admin/ssl/2 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d "\n{\n    \\"cert\\": \\"$( cat \'./mkcert/lvh.me+1.pem\')\\",\n    \\"key\\": \\"$( cat \'./mkcert/lvh.me+1-key.pem\')\\",\n    \\"sni\\": \\"*.lvh.me\\"\n}"\n')),(0,o.kt)("h3",{id:"test"},"Test"),(0,o.kt)("p",null,"When testing subdomains, using localhost is not a good option. Due to this, lets use ",(0,o.kt)("a",{parentName:"p",href:"http://lvh.me/"},"http://lvh.me/"),"\nfree service to resolve itself along with all subdomains to localhost."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"curl http://web1.lvh.me:9080/hello -v # hello web1\n\ncurl http://web2.lvh.me:9080/hello -v # hello web2\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"curl https://web1.lvh.me:9443/ -v --cacert ./mkcert/rootCA.pem\n")),(0,o.kt)("h3",{id:"clean"},"Clean"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker-compose down\n\nsudo rm -rf etcd_data/member\n\nrm -rf apisix_log/*.log\n")))}s.isMDXComponent=!0}}]);