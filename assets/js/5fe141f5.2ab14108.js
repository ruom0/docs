(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[866],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return d},kt:function(){return f}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(t),f=a,x=u["".concat(p,".").concat(f)]||u[f]||c[f]||i;return t?r.createElement(x,o(o({ref:n},d),{},{components:t})):r.createElement(x,o({ref:n},d))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=u;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},8903:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return d},default:function(){return u}});var r=t(2122),a=t(9756),i=(t(7294),t(3905)),o=["components"],l={title:"input",sidebar_position:7},p=void 0,s={unversionedId:"Pwnable.kr/Toddlers_Bottle/input",id:"Pwnable.kr/Toddlers_Bottle/input",isDocsHomePage:!1,title:"input",description:"\u539f\u9898\u5185\u5bb9",source:"@site/docs/Pwnable.kr/Toddlers_Bottle/input.md",sourceDirName:"Pwnable.kr/Toddlers_Bottle",slug:"/Pwnable.kr/Toddlers_Bottle/input",permalink:"/docs/Pwnable.kr/Toddlers_Bottle/input",version:"current",sidebarPosition:7,frontMatter:{title:"input",sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"random",permalink:"/docs/Pwnable.kr/Toddlers_Bottle/random"},next:{title:"rip1",permalink:"/docs/BUUCTF/\u6808\u6ea2\u51fa/rip"}},d=[{value:"\u539f\u9898\u5185\u5bb9",id:"\u539f\u9898\u5185\u5bb9",children:[]},{value:"\u7a0b\u5e8f\u6e90\u7801",id:"\u7a0b\u5e8f\u6e90\u7801",children:[]},{value:"\u9898\u76ee\u5206\u6790",id:"\u9898\u76ee\u5206\u6790",children:[{value:"Stage 1",id:"stage-1",children:[]},{value:"Stage 2",id:"stage-2",children:[]},{value:"Stage 3",id:"stage-3",children:[]},{value:"Stage 4",id:"stage-4",children:[]},{value:"Stage 5",id:"stage-5",children:[]}]},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",children:[]}],c={toc:d};function u(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\u539f\u9898\u5185\u5bb9"},"\u539f\u9898\u5185\u5bb9"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Mom? how can I pass my input to a computer program?\n\nssh input2@pwnable.kr -p2222 (pw:guest)\n")),(0,i.kt)("h2",{id:"\u7a0b\u5e8f\u6e90\u7801"},"\u7a0b\u5e8f\u6e90\u7801"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},'#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n#include <sys/socket.h>\n#include <arpa/inet.h>\n\nint main(int argc, char* argv[], char* envp[]){\n    printf("Welcome to pwnable.kr\\n");\n    printf("Let\'s see if you know how to give input to program\\n");\n    printf("Just give me correct inputs then you will get the flag :)\\n");\n\n    // argv\n    if(argc != 100) return 0;\n    if(strcmp(argv[\'A\'],"\\x00")) return 0;\n    if(strcmp(argv[\'B\'],"\\x20\\x0a\\x0d")) return 0;\n    printf("Stage 1 clear!\\n"); \n\n    // stdio\n    char buf[4];\n    read(0, buf, 4);\n    if(memcmp(buf, "\\x00\\x0a\\x00\\xff", 4)) return 0;\n    read(2, buf, 4);\n        if(memcmp(buf, "\\x00\\x0a\\x02\\xff", 4)) return 0;\n    printf("Stage 2 clear!\\n");\n    \n    // env\n    if(strcmp("\\xca\\xfe\\xba\\xbe", getenv("\\xde\\xad\\xbe\\xef"))) return 0;\n    printf("Stage 3 clear!\\n");\n\n    // file\n    FILE* fp = fopen("\\x0a", "r");\n    if(!fp) return 0;\n    if( fread(buf, 4, 1, fp)!=1 ) return 0;\n    if( memcmp(buf, "\\x00\\x00\\x00\\x00", 4) ) return 0;\n    fclose(fp);\n    printf("Stage 4 clear!\\n"); \n\n    // network\n    int sd, cd;\n    struct sockaddr_in saddr, caddr;\n    sd = socket(AF_INET, SOCK_STREAM, 0);\n    if(sd == -1){\n        printf("socket error, tell admin\\n");\n        return 0;\n    }\n    saddr.sin_family = AF_INET;\n    saddr.sin_addr.s_addr = INADDR_ANY;\n    saddr.sin_port = htons( atoi(argv[\'C\']) );\n    if(bind(sd, (struct sockaddr*)&saddr, sizeof(saddr)) < 0){\n        printf("bind error, use another port\\n");\n            return 1;\n    }\n    listen(sd, 1);\n    int c = sizeof(struct sockaddr_in);\n    cd = accept(sd, (struct sockaddr *)&caddr, (socklen_t*)&c);\n    if(cd < 0){\n        printf("accept error, tell admin\\n");\n        return 0;\n    }\n    if( recv(cd, buf, 4, 0) != 4 ) return 0;\n    if(memcmp(buf, "\\xde\\xad\\xbe\\xef", 4)) return 0;\n    printf("Stage 5 clear!\\n");\n\n    // here\'s your flag\n    system("/bin/cat flag");    \n    return 0;\n}\n')),(0,i.kt)("h2",{id:"\u9898\u76ee\u5206\u6790"},"\u9898\u76ee\u5206\u6790"),(0,i.kt)("p",null,"\u83b7\u53d6flag\u9700\u8981\u8fc75\u5173\uff0c\u7c7b\u4f3c\u62c6\u70b8\u5f39\u6e38\u620f\uff0c\u9700\u89815\u6b65\u624d\u80fd\u62c6\u9664\u70b8\u5f39\u3002"),(0,i.kt)("h3",{id:"stage-1"},"Stage 1"),(0,i.kt)("p",null,"\u7b2c1\u6b65\u8981\u6c42\u5982\u4e0b\uff1a"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u4f20\u5165\u957f\u5ea6\u4e3a100\u4e2a\u5b57\u7b26\u3002"),(0,i.kt)("li",{parentName:"ol"},'\u5b57\u7b26"A"\u6240\u4ee3\u8868ascii\u503c\u4f4d\u7f6e\u7684\u5b57\u7b26\u4e3a',(0,i.kt)("inlineCode",{parentName:"li"},"\\x00"),'\uff0c\u5b57\u7b26"B"\u6240\u4ee3\u8868\u4f4d\u7f6e\u7684\u5b57\u7b26\u4e3a',(0,i.kt)("inlineCode",{parentName:"li"},"\\x20\\x0a\\x0d"))),(0,i.kt)("p",null,"\u8fd9\u6b65\u6bd4\u8f83\u7b80\u5355\uff0c\u76f4\u63a5\u6784\u9020\u5c31\u884c\uff0c\u4ee3\u7801\u5982\u4e0b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"argv = ['a' for i in range(100)]\n\ndef stage1():\n    argv[ord('A')] = '\\x00'\n    argv[ord('B')] = '\\x20\\x0a\\x0d'\n\n")),(0,i.kt)("h3",{id:"stage-2"},"Stage 2"),(0,i.kt)("p",null,"\u7b2c2\u6b65\u8981\u6c42\u5982\u4e0b\uff1a"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"stdin\u7684\u5185\u5bb9\u4e3a",(0,i.kt)("inlineCode",{parentName:"li"},"\\x00\\x0a\\x00\\xff")),(0,i.kt)("li",{parentName:"ol"},"stderr\u7684\u5185\u5bb9\u4e3a",(0,i.kt)("inlineCode",{parentName:"li"},"\\x00\\x0a\\x02\\xff"))),(0,i.kt)("p",null,"\u82e5\u76f4\u63a5\u5728process\u4e2d\u6dfb\u52a0",(0,i.kt)("inlineCode",{parentName:"p"},"stdin = '\\x00\\x0a\\x00\\xff'\u548cstderr = '\\x00\\x0a\\x02\\xff'"),"\u4f1a\u4ea7\u751f\u62a5\u9519\uff0c\u56e0\u4e3a\u8fd9\u91cc\u9700\u8981\u4f7f\u7528\u7ba1\u9053\uff08pipe\uff09\u3002"),(0,i.kt)("p",null,"\u521b\u5efa\u7ba1\u9053\u7684\u65b9\u6cd5\u4e3a\uff1a",(0,i.kt)("inlineCode",{parentName:"p"},"r, w = os.pipe()"),"\u3002"),(0,i.kt)("p",null,"\u7136\u540e\u5728\u7ba1\u9053\u4e2d\u5199\u5165\u6211\u4eec\u7684\u6570\u636e\u5373\u53ef\u3002\u4ee3\u7801\u5982\u4e0b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"import os\n\nr_in, w_in = os.pipe()\nr_err, w_err = os.pipe()\n\ndef stage2():\n    os.write(w_in, b'\\x00\\x0a\\x00\\xff')\n    os.write(w_err, b'\\x00\\x0a\\x02\\xff')\n")),(0,i.kt)("h3",{id:"stage-3"},"Stage 3"),(0,i.kt)("p",null,"\u7b2c3\u6b65\u662f\u83b7\u53d6\u73af\u5883\u53d8\u91cf",(0,i.kt)("inlineCode",{parentName:"p"},"\\xde\\xad\\xbe\\xef"),"\u7684\u503c\uff0c\u5982\u679c\u5b83\u7b49\u4e8e",(0,i.kt)("inlineCode",{parentName:"p"},"\\xca\\xfe\\xba\\xbe"),"\u5219\u901a\u8fc7\u3002"),(0,i.kt)("p",null,"\u73af\u5883\u53d8\u91cf\u662f\u4e00\u4e2a\u5b57\u5178\uff0c\u56e0\u6b64\u53ef\u4ee5\u6784\u9020\u4e00\u4e2a\u5b57\u5178\u4f20\u5165\u3002\u4ee3\u7801\u5982\u4e0b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"env = {}\n    \ndef stage3():\n    env[b'\\xde\\xad\\xbe\\xef'] = b'\\xca\\xfe\\xba\\xbe'\n")),(0,i.kt)("h3",{id:"stage-4"},"Stage 4"),(0,i.kt)("p",null,"\u7b2c4\u6b65\u662f\u4ece\u5f53\u524d\u76ee\u5f55\u8bfb\u5165\u4e00\u4e2a\u6587\u4ef6\u540d\u662f",(0,i.kt)("inlineCode",{parentName:"p"},"\\x0a"),"\u7684\u6587\u4ef6\uff0c\u8bfb4\u4e2a\u5b57\u7b26\u5224\u65ad\u662f\u5426\u4e3a",(0,i.kt)("inlineCode",{parentName:"p"},"\\x00\\x00\\x00\\x00"),"\uff0c\u90a3\u4e48\u76f4\u63a5\u521b\u5efa\u6587\u4ef6\u5199\u5165\u5373\u53ef\u3002\u4ee3\u7801\u5982\u4e0b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"def stage4():\n    with open('\\x0a', 'wb') as f:\n        f.write(b'\\x00\\x00\\x00\\x00')\n")),(0,i.kt)("h3",{id:"stage-5"},"Stage 5"),(0,i.kt)("p",null,"\u7b2c5\u6b65\u662f\u76d1\u542c\u672c\u673a\u7684\u7aef\u53e3\uff0c\u7aef\u53e3\u53f7\u662f",(0,i.kt)("inlineCode",{parentName:"p"},"argv"),'\u4e2d\u5b57\u7b26"C"\u7684ascii\u7801\u4f4d\u7f6e\u6240\u5728\u7684\u6587\u672c\u3002\u82e5\u6536\u5230\u5b57\u7b26\u4e32',(0,i.kt)("inlineCode",{parentName:"p"},"\\xde\\xad\\xbe\\xef"),"\u5219\u901a\u8fc7\u3002\u4ee3\u7801\u5982\u4e0b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"import socket, time\n        \ndef stage5():\n    s = socket.socket()\n    s.connect(('127.0.0.1', 13145))\n    s.send(b'\\xde\\xad\\xbe\\xef')\n")),(0,i.kt)("h2",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),(0,i.kt)("p",null,"\u6700\u7ec8\u811a\u672c\u6e90\u7801\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"from pwn import *\nimport os, socket, time\n\nargv = ['a' for i in range(100)]\nr_in, w_in = os.pipe()\nr_err, w_err = os.pipe()\nenv = {}\n\ndef stage1():\n    argv[ord('A')] = '\\x00'\n    argv[ord('B')] = '\\x20\\x0a\\x0d'\n    argv[ord('C')] = '13145'\n\ndef stage2():\n    os.write(w_in, b'\\x00\\x0a\\x00\\xff')\n    os.write(w_err, b'\\x00\\x0a\\x02\\xff')\n    \ndef stage3():\n    env[b'\\xde\\xad\\xbe\\xef'] = b'\\xca\\xfe\\xba\\xbe'\n\ndef stage4():\n    with open('\\x0a', 'wb') as f:\n        f.write(b'\\x00\\x00\\x00\\x00')\n        \ndef stage5():\n    s = socket.socket()\n    s.connect(('127.0.0.1', 13145))\n    s.send(b'\\xde\\xad\\xbe\\xef')\n    \nstage1()\nstage2()\nstage3()\nstage4()\n\np = process(executable = './input', argv = argv, stdin = r_in, stderr = r_err, env = env)\n\ntime.sleep(0.5)\nstage5()\n\np.interactive()\n")),(0,i.kt)("p",null,"\u7531\u4e8e\u8fd9\u4e2a\u811a\u672c\u9700\u8981\u4f20\u5165argv\u3001env\u3001stdin\u3001stderr\u5e76\u4e14\u8fd8\u9700\u8981\u7528socket\u53d1\u9001\u6d88\u606f\uff0c\u56e0\u6b64\u5c06\u811a\u672c\u4e0a\u4f20\u81f3\u670d\u52a1\u5668\u6bd4\u8f83\u65b9\u4fbf\u3002"),(0,i.kt)("p",null,"\u5728pwnable.kr\u670d\u52a1\u5668\u4e2d\uff0c/tmp\u76ee\u5f55\u6743\u9650\u4e3a",(0,i.kt)("inlineCode",{parentName:"p"},"rwxrwx-wt"),"\uff0c\u6240\u4ee5\u6211\u4eec\u53ef\u4ee5\u5728/tmp\u4e0b\u521b\u5efa\u81ea\u5df1\u7684\u76ee\u5f55\uff0c\u5c06\u811a\u672c\u4e0a\u4f20\u5230\u8be5\u76ee\u5f55\u4e2d\u3002"),(0,i.kt)("p",null,"\u7531\u4e8einput\u548cflag\u6587\u4ef6\u90fd\u5728/home/input2\u4e2d\uff0c\u6240\u4ee5\u53ef\u4ee5\u5728\u81ea\u5df1\u521b\u5efa\u7684\u76ee\u5f55\u4e0b\u505a\u8fd9\u4e24\u4e2a\u6587\u4ef6\u7684\u8f6f\u94fe\u63a5\u6765\u5b8c\u6210\u540e\u7eed\u64cd\u4f5c\u3002"))}u.isMDXComponent=!0}}]);