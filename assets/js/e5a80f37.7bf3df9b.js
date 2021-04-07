(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{86:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return m})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),i=(n(0),n(93)),o={title:"Commands - Utility",sidebar_label:"Utility"},c={unversionedId:"commands/util",id:"commands/util",isDocsHomePage:!1,title:"Commands - Utility",description:"Usage Key",source:"@site/docs/commands/util.mdx",slug:"/commands/util",permalink:"/docs/commands/util",editUrl:"https://github.com/animafps/fpsmath-docs/edit/main/docs/commands/util.mdx",version:"current",sidebar_label:"Utility",sidebar:"docs",previous:{title:"Commands - Math",permalink:"/docs/commands/math"},next:{title:"Supported Games",permalink:"/docs/games"}},m=[{value:"Usage Key",id:"usage-key",children:[]},{value:"Commands",id:"commands",children:[]}],l={toc:m};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"usage-key"},"Usage Key"),Object(i.b)("p",null,"For commands that accept input, you'll see keys with the following:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"<required>")," - parameters between ",Object(i.b)("inlineCode",{parentName:"li"},"<>")," must be included with the command"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"[optional]")," - parameters between ",Object(i.b)("inlineCode",{parentName:"li"},"[]")," are optional parameters and may be excluded"),Object(i.b)("li",{parentName:"ul"},"a | or | b - | means that you can use the parameters on either side of the symbol"),Object(i.b)("li",{parentName:"ul"},"repeat... - means that you can provide multiple parameters as input")),Object(i.b)("p",null,"These may be nested. Example: ",Object(i.b)("inlineCode",{parentName:"p"},"[parameter1 <parameter2>]")," means that the input is optional, but if you provide parameter1 then parameter2 is required. ",Object(i.b)("inlineCode",{parentName:"p"},"[parameter...]")," means that input is optional, and that the input can be any number of parameters."),Object(i.b)("h2",{id:"commands"},"Commands"),Object(i.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Under Construction")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"Coming Soon!"))))}p.isMDXComponent=!0},93:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return b}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,l=m(e,["components","mdxType","originalType","parentName"]),s=p(n),d=a,b=s["".concat(o,".").concat(d)]||s[d]||u[d]||i;return n?r.a.createElement(b,c(c({ref:t},l),{},{components:n})):r.a.createElement(b,c({ref:t},l))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var m in t)hasOwnProperty.call(t,m)&&(c[m]=t[m]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);