"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[66399],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=i.createContext({}),s=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return i.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),f=r,g=d["".concat(c,".").concat(f)]||d[f]||u[f]||a;return n?i.createElement(g,o(o({ref:t},p),{},{components:n})):i.createElement(g,o({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},58571:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var i=n(87462),r=(n(67294),n(3905));const a={title:"APISIX"},o=void 0,l={unversionedId:"architecture-design/apisix",id:"version-2.14/architecture-design/apisix",isDocsHomePage:!1,title:"APISIX",description:"flow-software-architecture",source:"@site/docs-apisix_versioned_docs/version-2.14/architecture-design/apisix.md",sourceDirName:"architecture-design",slug:"/architecture-design/apisix",permalink:"/docs/apisix/2.14/architecture-design/apisix",editUrl:"/edit#https://github.com/apache/apisix/edit/release/2.14/docs/en/latest/architecture-design/apisix.md",tags:[],version:"2.14",frontMatter:{title:"APISIX"},sidebar:"version-2.14/docs",next:{title:"Plugin Config",permalink:"/docs/apisix/2.14/architecture-design/plugin-config"}},c=[{value:"Apache APISIX : Software Architecture",id:"apache-apisix--software-architecture",children:[]},{value:"Plugin Loading Process",id:"plugin-loading-process",children:[]},{value:"Plugin Hierarchy Structure",id:"plugin-hierarchy-structure",children:[]},{value:"Configuring APISIX",id:"configuring-apisix",children:[]}],s={toc:c};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"apache-apisix--software-architecture"},"Apache APISIX : Software Architecture"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix/release/2.14/docs/assets/images/flow-software-architecture.png",alt:"flow-software-architecture"})),(0,r.kt)("h2",{id:"plugin-loading-process"},"Plugin Loading Process"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix/release/2.14/docs/assets/images/flow-load-plugin.png",alt:"flow-load-plugin"})),(0,r.kt)("h2",{id:"plugin-hierarchy-structure"},"Plugin Hierarchy Structure"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix/release/2.14/docs/assets/images/flow-plugin-internal.png",alt:"flow-plugin-internal"})),(0,r.kt)("h2",{id:"configuring-apisix"},"Configuring APISIX"),(0,r.kt)("p",null,"Apache APISIX can be configured in two ways:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"By directly changing ",(0,r.kt)("inlineCode",{parentName:"li"},"conf/config.yaml"),"."),(0,r.kt)("li",{parentName:"ol"},"Using the ",(0,r.kt)("inlineCode",{parentName:"li"},"--config")," or the ",(0,r.kt)("inlineCode",{parentName:"li"},"-c")," flag to pass in the file path of your config file while starting APISIX (",(0,r.kt)("inlineCode",{parentName:"li"},"apisix start -c <path to config file>"),").")),(0,r.kt)("p",null,"Configurations can be added to this YAML file and Apache APISIX will fall back to the default configurations for anything that is not configured in this file."),(0,r.kt)("p",null,"For example, to set the default listening port to 8000 while keeping other configurations as default, your configuration file (",(0,r.kt)("inlineCode",{parentName:"p"},"config.yaml"),") would look like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apisix:\n  node_listen: 8000 # APISIX listening port\n")),(0,r.kt)("p",null,"Similarly, to set the listening port to 8000 and set the etcd address to ",(0,r.kt)("inlineCode",{parentName:"p"},"http://foo:2379")," while keeping other configurations as default, your configuration file would look like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apisix:\n  node_listen: 8000 # APISIX listening port\n\netcd:\n  host: "http://foo:2379" # etcd address\n')),(0,r.kt)("p",null,"Default configurations of APISIX can be found in the ",(0,r.kt)("inlineCode",{parentName:"p"},"conf/config-default.yaml")," file."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note"),": This file is bound to the APISIX source code and should ",(0,r.kt)("strong",{parentName:"p"},"NOT")," be modified. The configuration should only be changed by the methods mentioned above."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note"),": The ",(0,r.kt)("inlineCode",{parentName:"p"},"conf/nginx.conf")," file is automatically generated by APISIX and should ",(0,r.kt)("strong",{parentName:"p"},"NOT")," be edited."))}p.isMDXComponent=!0}}]);