"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[5929],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),g=p(n),k=r,d=g["".concat(s,".").concat(k)]||g[k]||c[k]||l;return n?a.createElement(d,i(i({ref:t},u),{},{components:n})):a.createElement(d,i({ref:t},u))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=g;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},60599:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const l={title:"skywalking",keywords:["Apache APISIX","API Gateway","Plugin","SkyWalking"],description:"This document will introduce how the API gateway Apache APISIX reports metrics to Apache SkyWalking (an open-source APM) with the skywalking plugin."},i=void 0,o={unversionedId:"plugins/skywalking",id:"version-3.3/plugins/skywalking",isDocsHomePage:!1,title:"skywalking",description:"This document will introduce how the API gateway Apache APISIX reports metrics to Apache SkyWalking (an open-source APM) with the skywalking plugin.",source:"@site/docs-apisix_versioned_docs/version-3.3/plugins/skywalking.md",sourceDirName:"plugins",slug:"/plugins/skywalking",permalink:"/docs/apisix/3.3/plugins/skywalking",editUrl:"/edit#https://github.com/apache/apisix/edit/release/3.3/docs/en/latest/plugins/skywalking.md",tags:[],version:"3.3",frontMatter:{title:"skywalking",keywords:["Apache APISIX","API Gateway","Plugin","SkyWalking"],description:"This document will introduce how the API gateway Apache APISIX reports metrics to Apache SkyWalking (an open-source APM) with the skywalking plugin."},sidebar:"version-3.3/docs",previous:{title:"zipkin",permalink:"/docs/apisix/3.3/plugins/zipkin"},next:{title:"opentelemetry",permalink:"/docs/apisix/3.3/plugins/opentelemetry"}},s=[{value:"Description",id:"description",children:[]},{value:"Attributes",id:"attributes",children:[{value:"Configuring the endpoint",id:"configuring-the-endpoint",children:[]},{value:"Sample code for upstream configuration",id:"sample-code-for-upstream-configuration",children:[]}]},{value:"Enabling the Plugin",id:"enabling-the-plugin",children:[]},{value:"Example usage",id:"example-usage",children:[]},{value:"Disable Plugin",id:"disable-plugin",children:[]}],p={toc:s};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"skywalking")," Plugin is used to integrate with ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/skywalking"},"Apache SkyWalking"),"."),(0,r.kt)("p",null,"SkyWalking uses its native Nginx Lua tracer to provide tracing, topology analysis, and metrics from both service and URI perspectives."),(0,r.kt)("p",null,"APISIX supports HTTP protocol to interact with the SkyWalking server."),(0,r.kt)("h2",{id:"attributes"},"Attributes"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Valid values"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sample_ratio"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"[0.00001, 1]"),(0,r.kt)("td",{parentName:"tr",align:null},"How often to sample the requests. Setting to ",(0,r.kt)("inlineCode",{parentName:"td"},"1")," will sample all requests.")))),(0,r.kt)("h3",{id:"configuring-the-endpoint"},"Configuring the endpoint"),(0,r.kt)("p",null,"You can configure these attributes on your configuration file (",(0,r.kt)("inlineCode",{parentName:"p"},"conf/config.yaml"),"):"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"service_name"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},'"APISIX"'),(0,r.kt)("td",{parentName:"tr",align:null},"Service name for SkyWalking reporter.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"service_instance_name"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},'"APISIX Instance Name"'),(0,r.kt)("td",{parentName:"tr",align:null},"Service instance name for SkyWalking reporter. Set to ",(0,r.kt)("inlineCode",{parentName:"td"},"$hostname")," to get the local hostname.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"endpoint_addr"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},'"',(0,r.kt)("a",{parentName:"td",href:"http://127.0.0.1:12800%22"},'http://127.0.0.1:12800"')),(0,r.kt)("td",{parentName:"tr",align:null},"SkyWalking HTTP endpoint. For example, ",(0,r.kt)("inlineCode",{parentName:"td"},"http://127.0.0.1:12800"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"report_interval"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"Value in the SkyWalking client library"),(0,r.kt)("td",{parentName:"tr",align:null},"Reporting interval time in seconds.")))),(0,r.kt)("p",null,"You can configure these as shown below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="conf/config.yaml"',title:'"conf/config.yaml"'},'plugin_attr:\n  skywalking:\n    service_name: APISIX\n    service_instance_name: "APISIX Instance Name"\n    endpoint_addr: http://127.0.0.1:12800\n')),(0,r.kt)("h3",{id:"sample-code-for-upstream-configuration"},"Sample code for upstream configuration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Java with Spring Boot"',title:'"Java',with:!0,Spring:!0,'Boot"':!0},'import org.springframework.web.bind.annotation.PathVariable;\nimport org.springframework.web.bind.annotation.RequestMapping;\nimport org.springframework.web.bind.annotation.RestController;\nimport javax.servlet.http.HttpServletRequest;\n\n@RestController\npublic class TestController {\n    @RequestMapping("/uid/{count}")\n    public String getUidList(@PathVariable("count") String countStr, HttpServletRequest request) {\n       return "OK";\n    }\n}\n')),(0,r.kt)("p",null,"You can configure the SkyWalking agent while starting your service:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="agent/config/agent.config"',title:'"agent/config/agent.config"'},"agent.service_name=yourservername\ncollector.backend_service=10.110.149.175:11800\n")),(0,r.kt)("p",null,"Then, run the script:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"nohup java -javaagent:/root/skywalking/app/agent/skywalking-agent.jar \\\n-jar /root/skywalking/app/app.jar \\\n--server.port=8089 \\\n2>&1 > /root/skywalking/app/logs/nohup.log &\n")),(0,r.kt)("h2",{id:"enabling-the-plugin"},"Enabling the Plugin"),(0,r.kt)("p",null,"To enable the Plugin, you have to add it to your configuration file (",(0,r.kt)("inlineCode",{parentName:"p"},"conf/config.yaml"),"):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="conf/config.yaml"',title:'"conf/config.yaml"'},"plugins:\n  - ...\n  - skywalking\n")),(0,r.kt)("p",null,"Once you do this, a background timer will be created to report data to the SkyWalking OAP server."),(0,r.kt)("p",null,"Now, you can enable the Plugin on a specific Route:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/1  -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "methods": ["GET"],\n    "uris": [\n        "/uid/*"\n    ],\n    "plugins": {\n        "skywalking": {\n            "sample_ratio": 1\n        }\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "10.110.149.175:8089": 1\n        }\n    }\n}\'\n')),(0,r.kt)("h2",{id:"example-usage"},"Example usage"),(0,r.kt)("p",null,"First, you need to have your SkyWalking server running."),(0,r.kt)("p",null,"You can run it on Docker by:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"sudo docker run --name skywalking -d -p 1234:1234 -p 12800:12800 --restart always apache/skywalking-oap-server:8.7.0-es6\n")),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"By default, SkyWalking uses H2 storage. You can also use Elasticsearch storage instead."),(0,r.kt)("p",{parentName:"div"},"First, install Elasticsearch. You can do it on Docker by running:"),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'sudo docker run -d --name elasticsearch -p 9200:9200 -p 9300:9300 --restart always -e "discovery.type=single-node" elasticsearch:6.7.2\n')),(0,r.kt)("p",{parentName:"div"},"Optionally, you can install Elasticsearch management page, elasticsearch-hq:"),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"sudo docker run -d --name elastic-hq -p 5000:5000 --restart always elastichq/elasticsearch-hq\n")),(0,r.kt)("p",{parentName:"div"},"Once you have Elasticsearch installed, you can start a SkyWalking server by running:"),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"sudo docker run --name skywalking -d -p 1234:1234 -p 12800:12800 --restart always --link elasticsearch:elasticsearch -e SW_STORAGE=elasticsearch -e SW_STORAGE_ES_CLUSTER_NODES=elasticsearch:9200 apache/skywalking-oap-server:8.7.0-es6\n")))),(0,r.kt)("p",null,"You can also install SkyWalking UI to view the data. To run it on Docker:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"sudo docker run --name skywalking-ui -d -p 8080:8080 --link skywalking:skywalking -e SW_OAP_ADDRESS=skywalking:12800 --restart always apache/skywalking-ui\n")),(0,r.kt)("p",null,"You should be able to access the UI from your browser:"),(0,r.kt)("p",null,"Now if you make requests to APISIX:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl -v http://10.110.149.192:9080/uid/12\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"HTTP/1.1 200 OK\nOK\n...\n")),(0,r.kt)("p",null,"You should be able to see the topology of all services in your SkyWalking UI:"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix/release/3.3/docs/assets/images/plugin/skywalking-4.png",alt:" "})),(0,r.kt)("p",null,"You should also be able to see traces from all services:"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix/release/3.3/docs/assets/images/plugin/skywalking-5.png",alt:" "})),(0,r.kt)("h2",{id:"disable-plugin"},"Disable Plugin"),(0,r.kt)("p",null,"To disable the ",(0,r.kt)("inlineCode",{parentName:"p"},"skywalking")," Plugin, you can delete the corresponding JSON configuration from the Plugin configuration. APISIX will automatically reload and you do not have to restart for this to take effect."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/1  -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "methods": ["GET"],\n    "uris": [\n        "/uid/*"\n    ],\n    "plugins": {\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "10.110.149.175:8089": 1\n        }\n    }\n}\'\n')),(0,r.kt)("p",null,"To completely disable the ",(0,r.kt)("inlineCode",{parentName:"p"},"skywalking")," Plugin, i.e to stop the background report timer, you need to remove the Plugin from your configuration file (",(0,r.kt)("inlineCode",{parentName:"p"},"conf/config.yaml"),"):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"plugins:\n  - ...\n  # - skywalking\n")))}u.isMDXComponent=!0}}]);