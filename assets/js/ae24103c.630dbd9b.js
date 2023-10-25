"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[66794],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>u});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=p(t),u=a,f=m["".concat(l,".").concat(u)]||m[u]||d[u]||o;return t?r.createElement(f,i(i({ref:n},s),{},{components:t})):r.createElement(f,i({ref:n},s))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},86990:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var r=t(87462),a=(t(67294),t(3905));const o={title:"Example"},i=void 0,c={unversionedId:"example",id:"version-apisix-dashboard-2.10.1/example",isDocsHomePage:!1,title:"Example",description:"This example is used for functional verification and is not recommended for performance testing. For performance testing, please refer to benchmark.",source:"@site/docs-apisix-docker_versioned_docs/version-apisix-dashboard-2.10.1/example.md",sourceDirName:".",slug:"/example",permalink:"/docs/docker/apisix-dashboard-2.10.1/example",editUrl:"/edit#https://github.com/apache/apisix-docker/edit/release/apisix-dashboard-2.10.1/docs/en/latest/example.md",tags:[],version:"apisix-dashboard-2.10.1",frontMatter:{title:"Example"},sidebar:"version-apisix-dashboard-2.10.1/docs",previous:{title:"Deploy Apache APISIX with Docker",permalink:"/docs/docker/apisix-dashboard-2.10.1/manual"}},l=[{value:"Run",id:"run",children:[]},{value:"Configure",id:"configure",children:[]},{value:"Test",id:"test",children:[]},{value:"Clean",id:"clean",children:[]}],p={toc:l};function s(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"This example is used for functional verification and is not recommended for performance testing. For performance testing, please refer to ",(0,a.kt)("a",{parentName:"strong",href:"https://github.com/apache/apisix#benchmark"},"benchmark"),".")),(0,a.kt)("h3",{id:"run"},"Run"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"docker-compose -p docker-apisix up -d\n")),(0,a.kt)("h3",{id:"configure"},"Configure"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'curl http://127.0.0.1:9080/apisix/admin/services/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "172.18.5.12:80": 1\n        }\n    }\n}\'\n\ncurl http://127.0.0.1:9080/apisix/admin/services/2 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "172.18.5.13:80": 1\n        }\n    }\n}\'\n\ncurl http://127.0.0.1:9080/apisix/admin/routes/12 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/*",\n    "host": "web1.lvh.me",\n    "service_id": "1"\n}\'\n\ncurl http://127.0.0.1:9080/apisix/admin/routes/22 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/*",\n    "host": "web2.lvh.me",\n    "service_id": "2"\n}\'\n\ncurl http://127.0.0.1:9080/apisix/admin/ssl/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d "\n{\n    \\"cert\\": \\"$( cat \'./mkcert/lvh.me+1.pem\')\\",\n    \\"key\\": \\"$( cat \'./mkcert/lvh.me+1-key.pem\')\\",\n    \\"sni\\": \\"lvh.me\\"\n}"\n\ncurl http://127.0.0.1:9080/apisix/admin/ssl/2 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d "\n{\n    \\"cert\\": \\"$( cat \'./mkcert/lvh.me+1.pem\')\\",\n    \\"key\\": \\"$( cat \'./mkcert/lvh.me+1-key.pem\')\\",\n    \\"sni\\": \\"*.lvh.me\\"\n}"\n')),(0,a.kt)("h3",{id:"test"},"Test"),(0,a.kt)("p",null,"When testing subdomains, using localhost is not a good option. Due to this, lets use ",(0,a.kt)("a",{parentName:"p",href:"http://lvh.me/"},"http://lvh.me/"),"\nfree service to resolve itself along with all subdomains to localhost."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"curl http://web1.lvh.me:9080/hello -v # hello web1\n\ncurl http://web2.lvh.me:9080/hello -v # hello web2\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"curl https://web1.lvh.me:9443/ -v --cacert ./mkcert/rootCA.pem\n")),(0,a.kt)("h3",{id:"clean"},"Clean"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"docker-compose -p docker-apisix down\n\nsudo rm -rf etcd_data/member\n\nrm -rf apisix_log/*.log\n")))}s.isMDXComponent=!0}}]);