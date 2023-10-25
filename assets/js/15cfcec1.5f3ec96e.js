(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[1489,10926],{49200:e=>{e.exports={versions:["2.13","2.14","2.15","3.0","3.1","3.2","3.3","3.4","3.5","3.6"],LTSVersions:["3.2"],versionMap:{2.99:"3.0.0-beta"},archivedVersions:[{label:"2.12",href:"https://apache-apisix.netlify.app/docs/apisix/2.12/getting-started/"},{label:"2.11",href:"https://625a9090d04b9a6953165811--2-11-old-docs-apache-apisix.netlify.app/docs/apisix/getting-started/"},{label:"2.10",href:"https://625a9090d04b9a6953165811--2-11-old-docs-apache-apisix.netlify.app/docs/apisix/2.10/getting-started/"},{label:"2.9",href:"https://625a57e513f19e48ae3a4468--old-docs-apache-apisix.netlify.app/docs/apisix/getting-started/"},{label:"2.8",href:"https://625a57e513f19e48ae3a4468--old-docs-apache-apisix.netlify.app/docs/apisix/2.8/getting-started/"},{label:"2.7",href:"https://625a57e513f19e48ae3a4468--old-docs-apache-apisix.netlify.app/docs/apisix/2.7/getting-started/"},{label:"2.6",href:"https://625a57e513f19e48ae3a4468--old-docs-apache-apisix.netlify.app/docs/apisix/2.6/getting-started/"},{label:"2.5",href:"https://625a57e513f19e48ae3a4468--old-docs-apache-apisix.netlify.app/docs/apisix/2.5/getting-started/"},{label:"2.4",href:"https://625a57e513f19e48ae3a4468--old-docs-apache-apisix.netlify.app/docs/apisix/2.4/getting-started/"}]}},41877:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>i});var n=a(67294),l=a(34328),r=a(99105),o=a(36742),s=a(52263);const i=()=>{const[e,t]=(0,n.useState)(!0),[a,i]=(0,n.useState)(!1),{i18n:{currentLocale:c}}=(0,s.Z)(),p=c.startsWith("en")?"Before editing docs":"\u7f16\u8f91\u6587\u6863\u524d",u=()=>window.location.hash.slice(1);(0,n.useEffect)((()=>{const e=u();i(!0),fetch(e.replace("github.com","raw.githubusercontent.com").replace("/edit","")).then((e=>t(404!==e.status))).finally((()=>i(!1)))}),[]);const m=(0,n.useCallback)((()=>{let t=u();if(!e){const e=t.replace("edit","new").split("/");e[e.length-1]="?filename="+e.at(-1),t=e.join("/")}window.location.replace(t)}),[e]);return n.createElement(l.Z,null,n.createElement(r.Z,null,n.createElement("meta",{name:"twitter:title",content:p+" - Apache APISIX\xae - Cloud-Native API Gateway"}),n.createElement("meta",{name:"twitter:description",content:"Apache APISIX is a dynamic, real-time, high-performance Cloud-Native API gateway, based on the Nginx library and etcd."}),n.createElement("meta",{name:"twitter:site",content:"@apacheapisix"}),n.createElement("meta",{name:"og:description",content:"Apache APISIX is a dynamic, real-time, high-performance Cloud-Native API gateway, based on the Nginx library and etcd."})),!a&&n.createElement("div",{className:"page"},n.createElement("h1",{className:"page-title"},p),c.startsWith("en")&&n.createElement(n.Fragment,null,n.createElement("p",null,"First, thank you for your willingness to contribute to the documentation of Apache APISIX and affiliated projects."),n.createElement("p",null,"But before you begin, please have a look and understand the"," ",n.createElement(o.Z,{style:{color:"var(--color-primary)"},href:"https://apisix.apache.org/docs/general/documentation-style-guide/"},"Documentation Style Guide")," ","to help you complete your contribution more efficiently and seamlessly."),!e&&n.createElement(n.Fragment,null," ",n.createElement("p",null,"...But, We could not find what you were looking for. If you find the doc exist, and this link should not be broken, please"," ",n.createElement(o.Z,{href:"https://github.com/apache/apisix-website/issues/new/choose",target:"_blank",rel:"noreferrer"},"submit an Issue"),".")),n.createElement("p",null,e?"When you are ready, click the button below to start editing the document.":"You can also still try to edit the document by click the below button."),n.createElement("button",{className:"edit-btn",type:"button",onClick:m},"Let's start editing")),c.startsWith("zh")&&n.createElement(n.Fragment,null,n.createElement("p",null,"\u9996\u5148\uff0c\u611f\u8c22\u60a8\u613f\u610f\u5411 Apache APISIX \u53ca\u5176\u76f8\u5173\u9879\u76ee\u8d21\u732e\u6587\u6863\u3002"),n.createElement("p",null,"\u4f46\u5728\u5f00\u59cb\u4e4b\u524d\uff0c\u8bf7\u5148\u9605\u8bfb\u5e76\u5145\u5206\u7406\u89e3"," ",n.createElement(o.Z,{href:"https://apisix.apache.org/docs/general/documentation-style-guide/"},"Documentation Style Guide")," ","\u6765\u5e2e\u52a9\u60a8\u5feb\u901f\u4e86\u89e3\u5982\u4f55\u8d21\u732e\u6587\u6863\u3002"),!e&&n.createElement(n.Fragment,null," ",n.createElement("p",null,"\u7136\u800c\uff0c\u6211\u4eec\u73b0\u5728\u65e0\u6cd5\u627e\u5230\u8fd9\u7bc7\u6587\u6863\uff0c\u4e00\u822c\u60c5\u51b5\u4e0b\uff0c\u8fd9\u662f\u56e0\u4e3a\u82f1\u6587\u6587\u6863\u5c1a\u672a\u88ab\u7ffb\u8bd1\u4e3a\u5bf9\u5e94\u7684\u4e2d\u6587\u6587\u6863\u3002"),n.createElement("p",null,"\u5982\u679c\u60a8\u5728\u68c0\u67e5\u540e\u53d1\u73b0\u8be5\u94fe\u63a5\u5bf9\u5e94\u7684\u6587\u6863\u5df2\u7ecf\u5b58\u5728\uff0c\u8bf7\u5411 APISIX Website"," ",n.createElement(o.Z,{href:"https://github.com/apache/apisix-website/issues/new/choose",target:"_blank",rel:"noreferrer"},"\u63d0\u4ea4 Issue"),"\u3002")),n.createElement("p",null,e?"\u5f53\u60a8\u51c6\u5907\u5b8c\u6210\u540e\uff0c\u5355\u51fb\u4e0b\u65b9\u6309\u94ae\uff0c\u4ee5\u5f00\u59cb\u7f16\u8f91\u6587\u6863\u3002":"\u5982\u679c\u4e0d\u5b58\u5728\uff0c\u6b22\u8fce\u60a8\u70b9\u51fb\u4e0b\u65b9\u6309\u94ae\uff0c\u5411 Apache APISIX \u793e\u533a\u8d21\u732e\u82f1\u6587\u5bf9\u5e94\u7684\u4e2d\u6587\u6587\u6863\u3002\u6216\u8005\u60a8\u4e5f\u53ef\u4ee5\u5148\u5c1d\u8bd5\u7f16\u8f91\u82f1\u6587\u6587\u6863\u3002"),n.createElement("button",{className:"edit-btn",type:"button",onClick:m},e?"\u5f00\u59cb\u7f16\u8f91":"\u521b\u5efa\u7ffb\u8bd1"))))}},72261:(e,t,a)=>{"use strict";a.d(t,{Z:()=>Z});var n=a(87462),l=a(67294),r=a(36742),o=a(44996),s=a(98374),i=a(5423),c=a(45519),p=a(77645),u=a(39861);const m={container:"container_MP5Z",linksRow:"linksRow_iwpv",linksCol:"linksCol_a1ec",copyright:"copyright_ZfFh"};var h=a(52263);const d=JSON.parse('{"$schema":"./event-poster-card-schema.json","show":true,"expire":"2023-07-04","width":400,"config":{"en":{"image":"https://static.apiseven.com/uploads/2023/06/29/PcXJ4a8R_APISIX%20Singapore%20website%20poster.png","link":"https://apisix.apache.org/docs/general/events/#singapore-meetup","description":"Apache APISIX Community Meetup Singapore"},"zh":{"image":"https://static.apiseven.com/uploads/2023/06/29/PcXJ4a8R_APISIX%20Singapore%20website%20poster.png","link":"https://apisix.apache.org/docs/general/events/#singapore-meetup","description":"Apache APISIX Community Meetup Singapore"}}}'),g="picWrapper_K7bz",f="closeBtn_QOpn",b="SHOW_EVENT_ENTRY",w=e=>{const{config:t,width:a,setShowStore:n}=e,{i18n:{currentLocale:r}}=(0,h.Z)(),o=(0,l.useMemo)((()=>t[r]),[r]),s=()=>{window.sessionStorage.setItem(b,"false"),n(!1)};return!0===(null==o?void 0:o.disable)?null:l.createElement("div",{className:g},l.createElement("button",{className:f,onClick:s,type:"button"},l.createElement("svg",{role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 352 512"},l.createElement("path",{fill:"currentColor",d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"}))),l.createElement("a",{href:o.link,onClick:s,target:"_blank",rel:"noreferrer"},l.createElement(u.LazyLoadImage,{src:o.image,alt:o.description,width:a,style:{maxWidth:"100vw"}})))},E=()=>{const{show:e,expire:t,...a}=d,r=new Date(t).getTime(),[o,s]=(0,l.useState)(!0);return(0,l.useEffect)((()=>{const e=JSON.parse(window.sessionStorage.getItem(b));s(e)}),[]),e&&o&&r>Date.now()?l.createElement(w,(0,n.Z)({setShowStore:s},a)):null},v={links:[{title:"ASF",items:[{label:"Foundation",to:"https://www.apache.org/"},{label:"License",to:"https://www.apache.org/licenses/"},{label:"Events",to:"https://www.apache.org/events/"},{label:"Security",to:"https://www.apache.org/security/"},{label:"Sponsorship",to:"https://www.apache.org/foundation/sponsorship.html"},{label:"Thanks",to:"https://www.apache.org/foundation/thanks.html"}]},{title:"Community",items:[{icon:i.Z,label:"GitHub",to:"https://github.com/apache/apisix/issues"},{icon:c.Z,label:"Slack",to:"/docs/general/join"},{icon:"ri:twitter-x-fill",label:"Twitter",to:"https://twitter.com/ApacheAPISIX"},{icon:p.Z,label:"YouTube",to:"https://www.youtube.com/channel/UCgPD18cMhOg5rmPVnQhAC8g"}]},{title:"More",items:[{label:"Blog",to:"/blog/",target:"_parent"},{label:"Showcase",to:"/showcase",target:"_parent"},{label:"Plugin Hub",to:"/plugins",target:"_parent"},{label:"Roadmap",to:"https://github.com/apache/apisix/milestones",target:"_parent"}]}],logo:{alt:"Apache Software Foundation",src:"https://static.apiseven.com/202202/asf_logo_wide_small.png",href:"https://www.apache.org/"},copyright:"Copyright \xa9 2019-"+(new Date).getFullYear()+" The Apache Software Foundation. Apache APISIX, APISIX\xae, Apache, the Apache feather logo, and the Apache APISIX project logo are either registered trademarks or trademarks of the Apache Software Foundation."},y=e=>{let{to:t,icon:a,href:i,label:c,prependBaseUrlToHref:p,...u}=e;const m=(0,o.Z)(t),h=(0,o.Z)(i,{forcePrependBaseUrl:!0}),d=i?{href:p?h:i}:{to:m};return l.createElement(r.Z,(0,n.Z)({},d,u),l.createElement(s.JO,{icon:a}),l.createElement("span",null,c))},Z=()=>{const{copyright:e,links:t,logo:a}=v;return v?l.createElement("footer",{className:m.container},t&&t.length>0&&l.createElement("div",{className:m.linksRow},t.map((e=>{let{title:t,items:a}=e;return l.createElement("div",{key:t,className:m.linksCol},l.createElement("div",null,t),l.createElement("ul",null,a.map((e=>l.createElement("li",{key:e.to,className:"footer__item"},l.createElement(y,e))))))}))),l.createElement("div",{className:m.copyright},l.createElement(r.Z,{href:a.href},l.createElement(u.LazyLoadImage,{alt:a.alt,src:a.src,height:"40px",width:"231.25px"})),l.createElement("div",{className:m.text},e)),l.createElement(E,null)):null}},19103:(e,t,a)=>{"use strict";a.d(t,{Z:()=>p});var n=a(87462),l=a(67294),r=a(36742),o=a(98465),s=a(44996),i=a(52263),c=a(941);const p=e=>{const{siteConfig:{title:t}}=(0,i.Z)(),{navbar:{title:a,logo:p={src:""}}}=(0,c.LU)(),{imageClassName:u,titleClassName:m,...h}=e,d=(0,s.Z)(p.href||"/"),g={light:(0,s.Z)(p.src),dark:(0,s.Z)(p.srcDark||p.src)};return l.createElement(r.Z,(0,n.Z)({target:"_parent",to:d},h),p.src&&l.createElement(o.Z,{className:u,sources:g,alt:p.alt||a||t}),null!=a&&l.createElement("b",{className:m},a))}},74653:(e,t,a)=>{"use strict";a.d(t,{Z:()=>w});var n=a(87462),l=a(67294),r=a(5525),o=a(23154),s=a(96730),i=a(941),c=a(24973),p=a(86010),u=a(49200);const m="badge_6FVu",h="LTS_DFZo",d="Latest_oyqS",g=e=>e.docs.find((t=>t.id===e.mainDocId)),f={LTS:l.createElement("div",{className:(0,p.Z)(m,h)},"LTS"),Latest:l.createElement("div",{className:(0,p.Z)(m,d)},"Latest")},b=e=>{const{version:t,isApisx:a}=e;return l.createElement("div",null,t.label,t.isLast&&f.Latest,a&&u.LTSVersions.includes(t.label)&&f.LTS)},w=e=>{var t,a;let{mobile:p,docsPluginId:u,dropdownActiveClassDisabled:m,dropdownItemsBefore:h,dropdownItemsAfter:d,...f}=e;const w=(0,s.useActiveDocContext)(u),E=(0,s.useVersions)(u),v=(0,s.useLatestVersion)(u),y="docs-apisix"===u,{preferredVersion:Z,savePreferredVersionName:S}=(0,i.J)(u);const k=function(){const e=E.map((e=>{const t=(null==w?void 0:w.alternateDocVersions[e.name])||g(e);return{isNavLink:!0,label:l.createElement(b,{version:e,isApisx:y}),to:t.path,isActive:()=>e===(null==w?void 0:w.activeVersion),onClick:()=>{S(e.name)}}}));return[...h,...e,...d]}(),I=null!=(t=null!=(a=w.activeVersion)?a:Z)?t:v,A=p&&k?(0,c.I)({id:"theme.navbar.mobileVersionsDropdown.label",message:"Versions",description:"The label for the navbar versions dropdown on mobile view"}):I.label,x=p&&k?void 0:g(I).path;return k.length<=1?l.createElement(r.Z,(0,n.Z)({},f,{mobile:p,label:A,to:x,isActive:m?()=>!1:void 0})):l.createElement(o.Z,(0,n.Z)({},f,{mobile:p,label:A,to:x,items:k,isActive:m?()=>!1:void 0}))}},29542:(e,t,a)=>{"use strict";a.d(t,{Z:()=>h});var n=a(87462),l=a(67294),r=a(23154),o=a(23264),s=a(52263),i=a(941),c=a(5977),p=a(36742);const u="iconLanguage_zID8",m="localizedBlogLink_cE-3",h=e=>{const{mobile:t,dropdownItemsBefore:a,dropdownItemsAfter:h,...d}=e,{i18n:{currentLocale:g,locales:f,localeConfigs:b}}=(0,s.Z)(),w=(0,i.l5)(),{pathname:E}=(0,c.TH)();if(E.startsWith("/zh/blog"))return l.createElement(p.Z,{className:m,isNavLink:!0,autoAddBaseUrl:!1,to:"pathname:///blog",target:"_self"},"English Blog");if(E.startsWith("/blog"))return l.createElement(p.Z,{className:m,isNavLink:!0,autoAddBaseUrl:!1,to:"pathname:///zh/blog",target:"_self"},"\u4e2d\u6587\u535a\u5ba2");function v(e){return b[e].label}const y=[...a,...f.map((e=>{const t="pathname://"+w.createUrl({locale:e,fullyQualified:!1});return{isNavLink:!0,label:v(e),to:t,target:"_self",autoAddBaseUrl:!1,className:e===g?"dropdown__link--active":"",style:{textTransform:"capitalize"}}})),...h],Z=t?"Languages":v(g);return l.createElement(r.Z,(0,n.Z)({},d,{href:"#",mobile:t,label:l.createElement("span",null,l.createElement(o.Z,{className:u}),l.createElement("span",null,Z)),items:y}))}},88749:(e,t,a)=>{"use strict";a.d(t,{Z:()=>c});var n=a(67294),l=a(5525),r=a(23154),o=a(29542),s=a(51093);const i={default:()=>l.Z,localeDropdown:()=>o.Z,search:()=>s.Z,dropdown:()=>r.Z,docsVersion:()=>a(47250).Z,docsVersionDropdown:()=>a(74653).Z,doc:()=>a(76400).Z};const c=e=>{let{type:t,...a}=e;const l=function(e,t){return e&&"default"!==e?e:t?"dropdown":"default"}(t,void 0!==a.items),r=(e=>{const t=i[e];if(!t)throw new Error('No NavbarItem component found for type "'+e+'".');return t()})(l);return n.createElement(r,a)}},13507:(e,t,a)=>{"use strict";a.d(t,{Z:()=>v});var n=a(87462),l=a(67294),r=a(73935),o=a(52263),s=a(44996),i=a(36742),c=a(99105),p=a(6397),u=a(57052),m=a(16747),h=a(95613),d=a(24973);const g="searchBox_fBfG";let f=null;function b(e){let{hit:t,children:a}=e;return l.createElement("a",{href:t.url,target:"_parent"},a)}function w(e){let{state:t,onClose:a}=e;const{generateSearchPageLink:n}=(0,p.Z)();return l.createElement(i.Z,{to:n(t.query),onClick:a,target:"_blank"},"See all ",t.context.nbHits," results")}function E(e){var t,i;let{contextualSearch:p,...E}=e;const{siteMetadata:v}=(0,o.Z)(),y=(0,h.Z)(),Z=null!=(t=null==(i=E.searchParameters)?void 0:i.facetFilters)?t:[],S=p?[...y,...Z]:Z,k={...E.searchParameters,facetFilters:S},{withBaseUrl:I}=(0,s.C)(),A=(0,l.useRef)(null),x=(0,l.useRef)(null),[C,N]=(0,l.useState)(!1),[L,P]=(0,l.useState)(null),_=(0,l.useCallback)((()=>f?Promise.resolve():Promise.all([a.e(12431).then(a.bind(a,12431)),Promise.all([a.e(40532),a.e(46945)]).then(a.bind(a,46945)),Promise.all([a.e(40532),a.e(9846)]).then(a.bind(a,9846))]).then((e=>{let[{DocSearchModal:t}]=e;f=t}))),[]),B=(0,l.useCallback)((()=>{_().then((()=>{A.current=document.createElement("div"),document.body.insertBefore(A.current,document.body.firstChild),N(!0)}))}),[_,N]),T=(0,l.useCallback)((()=>{N(!1),A.current.remove()}),[N]),F=(0,l.useCallback)((e=>{_().then((()=>{N(!0),P(e.key)}))}),[_,N,P]),V=(0,l.useRef)({navigate(e){let{itemUrl:t}=e;location.assign(t)}}).current,D=(0,l.useRef)((e=>e.map((e=>{const t=document.createElement("a");return t.href=e.url,{...e,url:I(""+t.pathname+t.hash)}})))).current,X=(0,l.useMemo)((()=>e=>l.createElement(w,(0,n.Z)({},e,{onClose:T}))),[T]),R=(0,l.useCallback)((e=>(e.addAlgoliaAgent("docusaurus",v.docusaurusVersion),e)),[v.docusaurusVersion]);(0,u.D)({isOpen:C,onOpen:B,onClose:T,onInput:F,searchButtonRef:x});const M=(0,d.I)({id:"theme.SearchBar.label",message:"Search",description:"The ARIA label and placeholder for search button"});return l.createElement(l.Fragment,null,l.createElement(c.Z,null,l.createElement("link",{rel:"preconnect",href:"https://"+E.appId+"-dsn.algolia.net",crossOrigin:"anonymous"})),l.createElement("div",{className:g},l.createElement(m.a,{onTouchStart:_,onFocus:_,onMouseOver:_,onClick:B,ref:x,translations:{buttonText:M,buttonAriaLabel:M}})),C&&(0,r.createPortal)(l.createElement(f,(0,n.Z)({onClose:T,initialScrollY:window.scrollY,initialQuery:L,navigator:V,transformItems:D,hitComponent:b,resultsFooterComponent:X,transformSearchClient:R},E,{searchParameters:k})),A.current))}const v=function(){const{siteConfig:e}=(0,o.Z)();return l.createElement(E,e.themeConfig.algolia)}}}]);