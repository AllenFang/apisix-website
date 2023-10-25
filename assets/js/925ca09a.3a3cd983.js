"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[61797],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>m});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),g=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=g(t.components);return a.createElement(p.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),u=g(n),m=r,k=u["".concat(p,".").concat(m)]||u[m]||s[m]||l;return n?a.createElement(k,i(i({ref:e},d),{},{components:n})):a.createElement(k,i({ref:e},d))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=u;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var g=2;g<l;g++)i[g]=n[g];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},98459:(t,e,n)=>{n.r(e),n.d(e,{contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const l={title:"error-log-logger",keywords:["APISIX","API Gateway","Plugin","Error log logger"],description:"This document contains information about the Apache APISIX error-log-logger Plugin."},i=void 0,o={unversionedId:"plugins/error-log-logger",id:"version-2.15/plugins/error-log-logger",isDocsHomePage:!1,title:"error-log-logger",description:"This document contains information about the Apache APISIX error-log-logger Plugin.",source:"@site/docs-apisix_versioned_docs/version-2.15/plugins/error-log-logger.md",sourceDirName:"plugins",slug:"/plugins/error-log-logger",permalink:"/docs/apisix/2.15/plugins/error-log-logger",editUrl:"/edit#https://github.com/apache/apisix/edit/release/2.15/docs/en/latest/plugins/error-log-logger.md",tags:[],version:"2.15",frontMatter:{title:"error-log-logger",keywords:["APISIX","API Gateway","Plugin","Error log logger"],description:"This document contains information about the Apache APISIX error-log-logger Plugin."},sidebar:"version-2.15/docs",previous:{title:"log-rotate",permalink:"/docs/apisix/2.15/plugins/log-rotate"},next:{title:"sls-logger",permalink:"/docs/apisix/2.15/plugins/sls-logger"}},p=[{value:"Description",id:"description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Enabling the Plugin",id:"enabling-the-plugin",children:[{value:"Configuring TCP server address",id:"configuring-tcp-server-address",children:[]},{value:"Configuring SkyWalking OAP server address",id:"configuring-skywalking-oap-server-address",children:[]},{value:"Configuring ClickHouse server details",id:"configuring-clickhouse-server-details",children:[]}]},{value:"Disable Plugin",id:"disable-plugin",children:[]}],g={toc:p};function d(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},g,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"error-log-logger")," Plugin is used to push APISIX's error logs (",(0,r.kt)("inlineCode",{parentName:"p"},"error.log"),") to TCP, ",(0,r.kt)("a",{parentName:"p",href:"https://skywalking.apache.org/"},"Apache SkyWalking"),", or ClickHouse servers. You can also set the error log level to send the logs to server."),(0,r.kt)("p",null,"It might take some time to receive the log data. It will be automatically sent after the timer function in the ",(0,r.kt)("a",{parentName:"p",href:"/docs/apisix/2.15/batch-processor"},"batch processor")," expires."),(0,r.kt)("h2",{id:"attributes"},"Attributes"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Valid values"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tcp.host"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"IP address or the hostname of the TCP server.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tcp.port"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"[0,...]"),(0,r.kt)("td",{parentName:"tr",align:null},"Target upstream port.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tcp.tls"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"When set to ",(0,r.kt)("inlineCode",{parentName:"td"},"true")," performs SSL verification.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tcp.tls_server_name"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Server name for the new TLS extension SNI.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"skywalking.endpoint_addr"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://127.0.0.1:12900/v3/logs"},"http://127.0.0.1:12900/v3/logs")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Apache SkyWalking HTTP endpoint.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"skywalking.service_name"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"APISIX"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Service name for the SkyWalking reporter.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"skywalking.service_instance_name"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"APISIX Instance Name"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Service instance name for the SkyWalking reporter. Set it to ",(0,r.kt)("inlineCode",{parentName:"td"},"$hostname")," to directly get the local hostname.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"clickhouse.endpoint_addr"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://127.0.0.1:8213"},"http://127.0.0.1:8213")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"ClickHouse endpoint.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"clickhouse.user"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"default"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"ClickHouse username.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"clickhouse.password"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"ClickHouse password.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"clickhouse.database"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the database to store the logs.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"clickhouse.logtable"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Table name to store the logs.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"host"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Deprecated. Use ",(0,r.kt)("inlineCode",{parentName:"td"},"tcp.host")," attribute instead. IP address or the hostname of the TCP server.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"port"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"[0,...]"),(0,r.kt)("td",{parentName:"tr",align:null},"Deprecated. Use ",(0,r.kt)("inlineCode",{parentName:"td"},"tcp.port")," instead. Target Upstream port.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tls"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Deprecated. Use ",(0,r.kt)("inlineCode",{parentName:"td"},"tcp.tls")," instead. When set to ",(0,r.kt)("inlineCode",{parentName:"td"},"true")," performs SSL verification.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tls_server_name"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Deprecated. Use ",(0,r.kt)("inlineCode",{parentName:"td"},"tcp.tls_server_name")," instead. Server name for the new TLS extension SNI.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"timeout"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"3"),(0,r.kt)("td",{parentName:"tr",align:null},"[1,...]"),(0,r.kt)("td",{parentName:"tr",align:null},"Timeout (in seconds) for the upstream to connect and send data.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"keepalive"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"30"),(0,r.kt)("td",{parentName:"tr",align:null},"[1,...]"),(0,r.kt)("td",{parentName:"tr",align:null},"Time in seconds to keep the connection alive after sending data.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"level"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"WARN"),(0,r.kt)("td",{parentName:"tr",align:null},'["STDERR", "EMERG", "ALERT", "CRIT", "ERR", "ERROR", "WARN", "NOTICE", "INFO", "DEBUG"]'),(0,r.kt)("td",{parentName:"tr",align:null},"Log level to filter the error logs. ",(0,r.kt)("inlineCode",{parentName:"td"},"ERR")," is same as ",(0,r.kt)("inlineCode",{parentName:"td"},"ERROR"),".")))),(0,r.kt)("p",null,"This Plugin supports using batch processors to aggregate and process entries (logs/data) in a batch. This avoids the need for frequently submitting the data. The batch processor submits data every ",(0,r.kt)("inlineCode",{parentName:"p"},"5")," seconds or when the data in the queue reaches ",(0,r.kt)("inlineCode",{parentName:"p"},"1000"),". See ",(0,r.kt)("a",{parentName:"p",href:"/docs/apisix/2.15/batch-processor#configuration"},"Batch Processor")," for more information or setting your custom configuration."),(0,r.kt)("h2",{id:"enabling-the-plugin"},"Enabling the Plugin"),(0,r.kt)("p",null,"To enable the Plugin, you can add it in your configuration file (",(0,r.kt)("inlineCode",{parentName:"p"},"conf/config.yaml"),"):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="conf/config.yaml"',title:'"conf/config.yaml"'},"plugins:\n  - request-id\n  - hmac-auth\n  - api-breaker\n  - error-log-logger\n")),(0,r.kt)("p",null,"Once you have enabled the Plugin, you can configure it through the Plugin metadata."),(0,r.kt)("h3",{id:"configuring-tcp-server-address"},"Configuring TCP server address"),(0,r.kt)("p",null,"You can set the TCP server address by configuring the Plugin metadata as shown below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/plugin_metadata/error-log-logger -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n  "tcp": {\n    "host": "127.0.0.1",\n    "port": 1999\n  },\n  "inactive_timeout": 1\n}\'\n')),(0,r.kt)("h3",{id:"configuring-skywalking-oap-server-address"},"Configuring SkyWalking OAP server address"),(0,r.kt)("p",null,"You can configure the SkyWalking OAP server address as shown below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/plugin_metadata/error-log-logger -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n  "skywalking": {\n    "endpoint_addr":"http://127.0.0.1:12800/v3/logs"\n  },\n  "inactive_timeout": 1\n}\'\n')),(0,r.kt)("h3",{id:"configuring-clickhouse-server-details"},"Configuring ClickHouse server details"),(0,r.kt)("p",null,"The Plugin sends the error log as a string to the ",(0,r.kt)("inlineCode",{parentName:"p"},"data")," field of a table in your ClickHouse server."),(0,r.kt)("p",null,"You can configure it as shown below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/plugin_metadata/error-log-logger -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n  "clickhouse": {\n      "user": "default",\n      "password": "a",\n      "database": "error_log",\n      "logtable": "t",\n      "endpoint_addr": "http://127.0.0.1:8123"\n  }\n}\'\n')),(0,r.kt)("h2",{id:"disable-plugin"},"Disable Plugin"),(0,r.kt)("p",null,"To disable the Plugin, you can remove it from your configuration file (",(0,r.kt)("inlineCode",{parentName:"p"},"conf/config.yaml"),"):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="conf/config.yaml"',title:'"conf/config.yaml"'},"plugins:\n  - request-id\n  - hmac-auth\n  - api-breaker\n  # - error-log-logger\n")))}d.isMDXComponent=!0}}]);