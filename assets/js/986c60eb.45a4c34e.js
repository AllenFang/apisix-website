"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[740],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>c});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=p(n),c=r,h=m["".concat(o,".").concat(c)]||m[c]||u[c]||i;return n?a.createElement(h,l(l({ref:t},d),{},{components:n})):a.createElement(h,l({ref:t},d))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},50056:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>o});var a=n(87462),r=(n(67294),n(3905));const i={title:"hmac-auth",keywords:["Apache APISIX","API Gateway","Plugin","HMAC Authentication","hmac-auth"],description:"This document contains information about the Apache APISIX hmac-auth Plugin."},l=void 0,s={unversionedId:"plugins/hmac-auth",id:"version-3.6/plugins/hmac-auth",isDocsHomePage:!1,title:"hmac-auth",description:"This document contains information about the Apache APISIX hmac-auth Plugin.",source:"@site/docs-apisix_versioned_docs/version-3.6/plugins/hmac-auth.md",sourceDirName:"plugins",slug:"/plugins/hmac-auth",permalink:"/docs/apisix/plugins/hmac-auth",editUrl:"/edit#https://github.com/apache/apisix/edit/release/3.6/docs/en/latest/plugins/hmac-auth.md",tags:[],version:"3.6",frontMatter:{title:"hmac-auth",keywords:["Apache APISIX","API Gateway","Plugin","HMAC Authentication","hmac-auth"],description:"This document contains information about the Apache APISIX hmac-auth Plugin."},sidebar:"version-3.6/docs",previous:{title:"cas-auth",permalink:"/docs/apisix/plugins/cas-auth"},next:{title:"authz-casbin",permalink:"/docs/apisix/plugins/authz-casbin"}},o=[{value:"Description",id:"description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Enable Plugin",id:"enable-plugin",children:[]},{value:"Example usage",id:"example-usage",children:[{value:"Generating the signature",id:"generating-the-signature",children:[]},{value:"Explanation of signature generation formula process",id:"explanation-of-signature-generation-formula-process",children:[]},{value:"Validating request body",id:"validating-request-body",children:[]},{value:"Using the generated signature to make requests",id:"using-the-generated-signature-to-make-requests",children:[]},{value:"Using custom header keys",id:"using-custom-header-keys",children:[]}]},{value:"Delete Plugin",id:"delete-plugin",children:[]}],p={toc:o};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"hmac-auth")," Plugin adds ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/HMAC"},"HMAC authentication")," to a Route or a Service."),(0,r.kt)("p",null,"This Plugin works with a ",(0,r.kt)("a",{parentName:"p",href:"/docs/apisix/terminology/consumer"},"Consumer")," object and a consumer of your API has to add its key to the request header for verification."),(0,r.kt)("h2",{id:"attributes"},"Attributes"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Valid values"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"access_key"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Unique key of a Consumer. If different Consumers have the same key, a request matching exception will occur.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"secret_key"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Used in pair with ",(0,r.kt)("inlineCode",{parentName:"td"},"access_key"),". This field supports saving the value in Secret Manager using the ",(0,r.kt)("a",{parentName:"td",href:"/docs/apisix/terminology/secret"},"APISIX Secret")," resource.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"algorithm"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},'"hmac-sha256"'),(0,r.kt)("td",{parentName:"tr",align:null},'["hmac-sha1", "hmac-sha256", "hmac-sha512"]'),(0,r.kt)("td",{parentName:"tr",align:null},"Encryption algorithm used.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"clock_skew"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Clock skew allowed by the signature in seconds. Setting it to ",(0,r.kt)("inlineCode",{parentName:"td"},"0")," will skip checking the date.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"signed_headers"),(0,r.kt)("td",{parentName:"tr",align:null},"array","[string]"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"List of headers to be used in the encryption algorithm. If specified, the client request can only contain the specified headers. When unspecified, all the headers are used in the encryption algorithm.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"keep_headers"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"[ true, false ]"),(0,r.kt)("td",{parentName:"tr",align:null},"When set to ",(0,r.kt)("inlineCode",{parentName:"td"},"true"),", keeps the request headers ",(0,r.kt)("inlineCode",{parentName:"td"},"X-HMAC-SIGNATURE"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"X-HMAC-ALGORITHM")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"X-HMAC-SIGNED-HEADERS")," in the HTTP request after successful authentication. Otherwise, the headers are removed.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"encode_uri_params"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"[ true, false ]"),(0,r.kt)("td",{parentName:"tr",align:null},"When set to ",(0,r.kt)("inlineCode",{parentName:"td"},"true")," encodes the URI parameters. For example, ",(0,r.kt)("inlineCode",{parentName:"td"},"params1=hello%2Cworld")," is encoded whereas, ",(0,r.kt)("inlineCode",{parentName:"td"},"params2=hello,world")," is not.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"validate_request_body"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"[ true, false ]"),(0,r.kt)("td",{parentName:"tr",align:null},"When set to ",(0,r.kt)("inlineCode",{parentName:"td"},"true"),", validates the request body.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"max_req_body"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"512 * 1024"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Max size of the request body to allow.")))),(0,r.kt)("p",null,"NOTE: ",(0,r.kt)("inlineCode",{parentName:"p"},'encrypt_fields = {"secret_key"}')," is also defined in the schema, which means that the field will be stored encrypted in etcd. See ",(0,r.kt)("a",{parentName:"p",href:"/docs/apisix/plugin-develop#encrypted-storage-fields"},"encrypted storage fields"),"."),(0,r.kt)("h2",{id:"enable-plugin"},"Enable Plugin"),(0,r.kt)("p",null,"First we enable the Plugin on a Consumer object as shown below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/consumers -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "username": "jack",\n    "plugins": {\n        "hmac-auth": {\n            "access_key": "user-key",\n            "secret_key": "my-secret-key",\n            "clock_skew": 0,\n            "signed_headers": ["User-Agent", "Accept-Language", "x-custom-a"]\n        }\n    }\n}\'\n')),(0,r.kt)("p",null,"You can also use the ",(0,r.kt)("a",{parentName:"p",href:"/docs/dashboard/USER_GUIDE"},"APISIX Dashboard")," to complete the operation through a web UI."),(0,r.kt)("p",null,"Next, you can configure the Plugin to a Route or a Service:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/index.html",\n    "plugins": {\n        "hmac-auth": {}\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\'\n')),(0,r.kt)("h2",{id:"example-usage"},"Example usage"),(0,r.kt)("h3",{id:"generating-the-signature"},"Generating the signature"),(0,r.kt)("p",null,"The formula for calculating the signature is ",(0,r.kt)("inlineCode",{parentName:"p"},"signature = HMAC-SHAx-HEX(secret_key, signing_string)"),"."),(0,r.kt)("p",null,"In order to generate the signature, two parameters, ",(0,r.kt)("inlineCode",{parentName:"p"},"secret_key")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"signing_string")," are required. The ",(0,r.kt)("inlineCode",{parentName:"p"},"secret_key")," is configured by a Consumer and the ",(0,r.kt)("inlineCode",{parentName:"p"},"signing_string")," is calculated as ",(0,r.kt)("inlineCode",{parentName:"p"},"signing_string = HTTP Method + \\n + HTTP URI + \\n + canonical_query_string + \\n + access_key + \\n + Date + \\n + signed_headers_string"),". The different terms in this calculation are explained below:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"HTTP Method")," : HTTP request method in uppercase. For example, GET, PUT, POST etc."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"HTTP URI"),' : HTTP URI. Should start with "/" and "/" denotes an empty path.'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Date")," : Date in the HTTP header in GMT format."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"canonical_query_string"),' : The result of encoding the query string in the URL (the string "key1 = value1 & key2 = value2" after the "?" in the URL).'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"signed_headers_string")," : Concatenation of the specified request headers.")),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"If any of the terms are missing, they are replaced by an empty string."))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"The algorithm for generating ",(0,r.kt)("inlineCode",{parentName:"strong"},"canonical_query_string")," is described below:")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Extract the query terms from the URL."),(0,r.kt)("li",{parentName:"ol"},"Split the query terms into key-value pairs by using ",(0,r.kt)("inlineCode",{parentName:"li"},"&")," as the separator."),(0,r.kt)("li",{parentName:"ol"},"If ",(0,r.kt)("inlineCode",{parentName:"li"},"encode_uri_params")," is ",(0,r.kt)("inlineCode",{parentName:"li"},"true"),":",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"If there are only keys, the conversion formula is ",(0,r.kt)("inlineCode",{parentName:"li"},'uri_encode(key) + "="'),"."),(0,r.kt)("li",{parentName:"ol"},"If there are both keys and values, the conversion formula is ",(0,r.kt)("inlineCode",{parentName:"li"},'uri_encode(key) + "=" + uri_encode(value)'),". Here, the value can even be an empty string."),(0,r.kt)("li",{parentName:"ol"},"Sort by key in lexicographic order and connect them with & symbol to generate the corresponding ",(0,r.kt)("inlineCode",{parentName:"li"},"canonical_query_string"),"."))),(0,r.kt)("li",{parentName:"ol"},"If ",(0,r.kt)("inlineCode",{parentName:"li"},"encode_uri_params")," is ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),":",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"If there are only keys, the conversion formula is ",(0,r.kt)("inlineCode",{parentName:"li"},'key + "="'),"."),(0,r.kt)("li",{parentName:"ol"},"If there are both keys and values, the conversion formula is ",(0,r.kt)("inlineCode",{parentName:"li"},'key + "=" + value'),". Here, the value can even be an empty string."),(0,r.kt)("li",{parentName:"ol"},"Sort by key in lexicographic order and connect them with & symbol to generate the corresponding ",(0,r.kt)("inlineCode",{parentName:"li"},"canonical_query_string"),".")))),(0,r.kt)("p",null,"And the algorithm for generating the ",(0,r.kt)("inlineCode",{parentName:"p"},"signed_headers_string")," is as follows:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Obtain the specified headers to add to the calculation from the request header."),(0,r.kt)("li",{parentName:"ol"},"Splice the specified headers in ",(0,r.kt)("inlineCode",{parentName:"li"},"name:value")," format. This is the ",(0,r.kt)("inlineCode",{parentName:"li"},"signed_headers_string"),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plain"},'HeaderKey1 + ":" + HeaderValue1 + "\\n"\\+\nHeaderKey2 + ":" + HeaderValue2 + "\\n"\\+\n...\nHeaderKeyN + ":" + HeaderValueN + "\\n"\n')),(0,r.kt)("p",null,"The example below shows signature string splicing:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl -i http://127.0.0.1:9080/index.html?name=james&age=36 \\\n-H "X-HMAC-SIGNED-HEADERS: User-Agent;x-custom-a" \\\n-H "x-custom-a: test" \\\n-H "User-Agent: curl/7.29.0"\n')),(0,r.kt)("h3",{id:"explanation-of-signature-generation-formula-process"},"Explanation of signature generation formula process"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The default HTTP Method for the above request is GET, which gives ",(0,r.kt)("inlineCode",{parentName:"li"},"signing_string")," as")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plain"},'"GET"\n')),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"The requested URI is ",(0,r.kt)("inlineCode",{parentName:"li"},"/index.html"),", and the ",(0,r.kt)("inlineCode",{parentName:"li"},"signing_string")," is obtained from the HTTP Method + \\n + HTTP URI as")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plain"},'"GET\n/index.html"\n')),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"The query item in the URL is ",(0,r.kt)("inlineCode",{parentName:"li"},"name=james&age=36"),", assuming that ",(0,r.kt)("inlineCode",{parentName:"li"},"encode_uri_params")," is false.\nAccording to the algorithm of ",(0,r.kt)("inlineCode",{parentName:"li"},"canonical_query_string"),", the focus is on dictionary sorting of ",(0,r.kt)("inlineCode",{parentName:"li"},"key")," to get ",(0,r.kt)("inlineCode",{parentName:"li"},"age=36&name=james"),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plain"},'"GET\n/index.html\nage=36&name=james"\n')),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"access_key")," is ",(0,r.kt)("inlineCode",{parentName:"li"},"user-key"),", and the ",(0,r.kt)("inlineCode",{parentName:"li"},"signing_string")," is obtained from HTTP Method + \\n + HTTP URI + \\n + canonical_query_string + \\n + access_key as")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plain"},'"GET\n/index.html\nage=36&name=james\nuser-key"\n')),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"Date is in GMT format, as in ",(0,r.kt)("inlineCode",{parentName:"li"},"Tue, 19 Jan 2021 11:33:20 GMT"),", and the ",(0,r.kt)("inlineCode",{parentName:"li"},"signing_string")," is obtained from the  HTTP Method + \\n + HTTP URI + \\n + canonical_query_string + \\n + access_key + \\n + Date as")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plain"},'"GET\n/index.html\nage=36&name=james\nuser-key\nTue, 19 Jan 2021 11:33:20 GMT"\n')),(0,r.kt)("ol",{start:6},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"signed_headers_string")," is used to specify the headers involved in the signature, which in the above example includes ",(0,r.kt)("inlineCode",{parentName:"li"},"User-Agent: curl/7.29.0")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"x-custom-a: test"),".")),(0,r.kt)("p",null,"And the ",(0,r.kt)("inlineCode",{parentName:"p"},"signing_string")," is obtained from the HTTP Method + \\n + HTTP URI + \\n + canonical_query_string + \\n + access_key + \\n + Date + \\n as"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plain"},'"GET\n/index.html\nage=36&name=james\nuser-key\nTue, 19 Jan 2021 11:33:20 GMT\nUser-Agent:curl/7.29.0\nx-custom-a:test\n"\n')),(0,r.kt)("p",null,"The Python code below shows how to generate the signature:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"import base64\nimport hashlib\nimport hmac\n\nsecret = bytes('my-secret-key', 'utf-8')\nmessage = bytes(\"\"\"GET\n/index.html\nage=36&name=james\nuser-key\nTue, 19 Jan 2021 11:33:20 GMT\nUser-Agent:curl/7.29.0\nx-custom-a:test\n\"\"\", 'utf-8')\n\nhash = hmac.new(secret, message, hashlib.sha256)\n\n# to lowercase base64\nprint(base64.b64encode(hash.digest()))\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Hash"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SIGNATURE"),(0,r.kt)("td",{parentName:"tr",align:null},"8XV1GB7Tq23OJcoz6wjqTs4ZLxr9DiLoY4PxzScWGYg=")))),(0,r.kt)("p",null,"You can also refer to ",(0,r.kt)("a",{parentName:"p",href:"/docs/apisix/examples/plugins-hmac-auth-generate-signature"},"Generating HMAC signatures")," for how to generate signatures for different programming languages."),(0,r.kt)("h3",{id:"validating-request-body"},"Validating request body"),(0,r.kt)("p",null,"When the ",(0,r.kt)("inlineCode",{parentName:"p"},"validate_request_body")," attribute is set to ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),", the Plugin will calculate the HMAC-SHA value of the request body and checks it again the ",(0,r.kt)("inlineCode",{parentName:"p"},"X-HMAC-DIGEST")," header:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"X-HMAC-DIGEST: base64(hmac-sha(<body>))\n")),(0,r.kt)("p",null,"If there is no request body, you can set the ",(0,r.kt)("inlineCode",{parentName:"p"},"X-HMAC-DIGEST")," value to the HMAC-SHA of an empty string."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"To calculate the digest of the request body, the Plugin will load the body to memory which can cause high memory consumption if the body is large. To avoid this, you can limit the max allowed body size by configuring ",(0,r.kt)("inlineCode",{parentName:"p"},"max_req_body")," (default 512KB). Request bodies larger than the set size will be rejected."))),(0,r.kt)("h3",{id:"using-the-generated-signature-to-make-requests"},"Using the generated signature to make requests"),(0,r.kt)("p",null,"You can now use the generated signature to make requests as shown below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl -i "http://127.0.0.1:9080/index.html?name=james&age=36" \\\n-H "X-HMAC-SIGNATURE: 8XV1GB7Tq23OJcoz6wjqTs4ZLxr9DiLoY4PxzScWGYg=" \\\n-H "X-HMAC-ALGORITHM: hmac-sha256" \\\n-H "X-HMAC-ACCESS-KEY: user-key" \\\n-H "Date: Tue, 19 Jan 2021 11:33:20 GMT" \\\n-H "X-HMAC-SIGNED-HEADERS: User-Agent;x-custom-a" \\\n-H "x-custom-a: test" \\\n-H "User-Agent: curl/7.29.0"\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"HTTP/1.1 200 OK\nContent-Type: text/html; charset=utf-8\nTransfer-Encoding: chunked\nConnection: keep-alive\nDate: Tue, 19 Jan 2021 11:33:20 GMT\nServer: APISIX/2.2\n......\n")),(0,r.kt)("p",null,"The signature can be put in the ",(0,r.kt)("inlineCode",{parentName:"p"},"Authorization")," header of the request:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl http://127.0.0.1:9080/index.html -H 'Authorization: hmac-auth-v1# + ACCESS_KEY + # + base64_encode(SIGNATURE) + # + ALGORITHM + # + DATE + # + SIGNED_HEADERS' -i\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'HTTP/1.1 200 OK\nContent-Type: text/html\nContent-Length: 13175\n...\nAccept-Ranges: bytes\n\n<!DOCTYPE html>\n<html lang="cn">\n...\n')),(0,r.kt)("p",null,"Or, the signature can be placed separately in another request header:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl http://127.0.0.1:9080/index.html -H 'X-HMAC-SIGNATURE: base64_encode(SIGNATURE)' -H 'X-HMAC-ALGORITHM: ALGORITHM' -H 'Date: DATE' -H 'X-HMAC-ACCESS-KEY: ACCESS_KEY' -H 'X-HMAC-SIGNED-HEADERS: SIGNED_HEADERS' -i\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'HTTP/1.1 200 OK\nContent-Type: text/html\nContent-Length: 13175\n...\nAccept-Ranges: bytes\n\n<!DOCTYPE html>\n<html lang="cn">\n')),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol"},"If there are multiple signed headers, they must be separated by ",(0,r.kt)("inlineCode",{parentName:"li"},";"),". For example, ",(0,r.kt)("inlineCode",{parentName:"li"},"x-custom-header-a;x-custom-header-b"),"."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"SIGNATURE")," needs to be base64 encoded for encryption.")))),(0,r.kt)("h3",{id:"using-custom-header-keys"},"Using custom header keys"),(0,r.kt)("p",null,"You can use custom header keys for the auth parameters by changing the ",(0,r.kt)("inlineCode",{parentName:"p"},"plugin_attr")," in your configuration file (",(0,r.kt)("inlineCode",{parentName:"p"},"conf/config.yaml"),"):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"plugin_attr:\n  hmac-auth:\n    signature_key: X-APISIX-HMAC-SIGNATURE\n    algorithm_key: X-APISIX-HMAC-ALGORITHM\n    date_key: X-APISIX-DATE\n    access_key: X-APISIX-HMAC-ACCESS-KEY\n    signed_headers_key: X-APISIX-HMAC-SIGNED-HEADERS\n    body_digest_key: X-APISIX-HMAC-BODY-DIGEST\n")),(0,r.kt)("p",null,"Now you can use the new keys while making a request:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl http://127.0.0.1:9080/index.html \\\n-H 'X-APISIX-HMAC-SIGNATURE: base64_encode(SIGNATURE)' \\\n-H 'X-APISIX-HMAC-ALGORITHM: ALGORITHM' \\\n-H 'X-APISIX-DATE: DATE' \\\n-H 'X-APISIX-HMAC-ACCESS-KEY: ACCESS_KEY' \\\n-H 'X-APISIX-HMAC-SIGNED-HEADERS: SIGNED_HEADERS' \\\n-H 'X-APISIX-HMAC-BODY-DIGEST: BODY_DIGEST' -i\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'HTTP/1.1 200 OK\nContent-Type: text/html\nContent-Length: 13175\n...\nAccept-Ranges: bytes\n\n<!DOCTYPE html>\n<html lang="cn">\n')),(0,r.kt)("h2",{id:"delete-plugin"},"Delete Plugin"),(0,r.kt)("p",null,"To remove the ",(0,r.kt)("inlineCode",{parentName:"p"},"hmac-auth")," Plugin, you can delete the corresponding JSON configuration from the Plugin configuration. APISIX will automatically reload and you do not have to restart for this to take effect."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/index.html",\n    "plugins": {},\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\'\n')))}d.isMDXComponent=!0}}]);