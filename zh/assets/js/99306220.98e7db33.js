"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[13123],{3905:(e,r,a)=>{a.d(r,{Zo:()=>d,kt:()=>m});var t=a(67294);function o(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}function i(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,t)}return a}function n(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?i(Object(a),!0).forEach((function(r){o(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}function l(e,r){if(null==e)return{};var a,t,o=function(e,r){if(null==e)return{};var a,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)a=i[t],r.indexOf(a)>=0||(o[a]=e[a]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)a=i[t],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var c=t.createContext({}),s=function(e){var r=t.useContext(c),a=r;return e&&(a="function"==typeof e?e(r):n(n({},r),e)),a},d=function(e){var r=s(e.components);return t.createElement(c.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},p=t.forwardRef((function(e,r){var a=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=s(a),m=o,h=p["".concat(c,".").concat(m)]||p[m]||u[m]||i;return a?t.createElement(h,n(n({ref:r},d),{},{components:a})):t.createElement(h,n({ref:r},d))}));function m(e,r){var a=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=a.length,n=new Array(i);n[0]=p;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,n[1]=l;for(var s=2;s<i;s++)n[s]=a[s];return t.createElement.apply(null,n)}return t.createElement.apply(null,a)}p.displayName="MDXCreateElement"},54107:(e,r,a)=>{a.r(r),a.d(r,{contentTitle:()=>n,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var t=a(87462),o=(a(67294),a(3905));const i={title:"Build an image from the source codes"},n=void 0,l={unversionedId:"build",id:"version-apisix-3.6.0/build",isDocsHomePage:!1,title:"Build an image from the source codes",description:"Docker images are not official ASF releases but provided for convenience. Recommended usage is always to build the source.",source:"@site/docs-apisix-docker_versioned_docs/version-apisix-3.6.0/build.md",sourceDirName:".",slug:"/build",permalink:"/zh/docs/docker/build",editUrl:"/zh/edit#https://github.com/apache/apisix-docker/edit/release/apisix-3.6.0/docs/zh/latest/build.md",tags:[],version:"apisix-3.6.0",frontMatter:{title:"Build an image from the source codes"},sidebar:"version-apisix-3.6.0/docs",next:{title:"Deploy Apache APISIX with Docker",permalink:"/zh/docs/docker/manual"}},c=[{value:"Clone the repository",id:"clone-the-repository",children:[]},{value:"Build a Docker image",id:"build-a-docker-image",children:[{value:"Build an image from a release",id:"build-an-image-from-a-release",children:[]},{value:"Build an image from master branch",id:"build-an-image-from-master-branch",children:[]},{value:"Build an image from locally customized/patched source code",id:"build-an-image-from-locally-customizedpatched-source-code",children:[]}]},{value:"Check Docker image",id:"check-docker-image",children:[]}],s={toc:c};function d(e){let{components:r,...a}=e;return(0,o.kt)("wrapper",(0,t.Z)({},s,a,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Docker images are not official ASF releases but provided for convenience. Recommended usage is always to build the source.")),(0,o.kt)("h2",{id:"clone-the-repository"},"Clone the repository"),(0,o.kt)("p",null,"Clone the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-docker"},"apisix-docker")," repository and navigate into the project directory:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"git clone git clone https://github.com/apache/apisix-docker.git\ncd apisix-docker\n")),(0,o.kt)("h2",{id:"build-a-docker-image"},"Build a Docker image"),(0,o.kt)("p",null,"Choose one of the following approaches to build a Docker image based on your requirements."),(0,o.kt)("h3",{id:"build-an-image-from-a-release"},"Build an image from a release"),(0,o.kt)("p",null,"Find an APISIX ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/releases"},"release version")," to build an image of."),(0,o.kt)("p",null,"Build a Docker image from the release:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"APISIX_VERSION=3.6.0    # specify release version\nDISTRO=debian           # debian, centos, redhat\nmake build-on-$DISTRO\n")),(0,o.kt)("h3",{id:"build-an-image-from-master-branch"},"Build an image from master branch"),(0,o.kt)("p",null,"This is provided for developer's convenience."),(0,o.kt)("p",null,"Build a Docker image from the master branch:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"APISIX_VERSION=master   # master branch\nDISTRO=debian           # debian, centos, redhat\nmake build-on-$DISTRO\n")),(0,o.kt)("h3",{id:"build-an-image-from-locally-customizedpatched-source-code"},"Build an image from locally customized/patched source code"),(0,o.kt)("p",null,"Build a Docker image from locally customized/patched source code with this ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-docker/blob/master/debian-dev/Dockerfile.local"},"Dockerfile"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"docker build -t apisix-dev-local -f /path/to/debian-dev/Dockerfile.local  .\n")),(0,o.kt)("h2",{id:"check-docker-image"},"Check Docker image"),(0,o.kt)("p",null,"Check the built Docker images:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"docker images\n")),(0,o.kt)("p",null,"If the image was built successfully, you should see the image listed, similar to the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"REPOSITORY        TAG            IMAGE ID       CREATED              SIZE\napache/apisix     3.5.0-debian   5c3b6ffdef06   About a minute ago   337MB\n")))}d.isMDXComponent=!0}}]);