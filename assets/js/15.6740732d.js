(window.webpackJsonp=window.webpackJsonp||[]).push([[15,16],{108:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(99),c=a(89);t.default=function(){return o.a.createElement(r.a,{title:"Page Not Found"},o.a.createElement("main",{className:"container margin-vert--xl"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col col--6 col--offset-3"},o.a.createElement("h1",{className:"hero__title"},o.a.createElement(c.a,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),o.a.createElement("p",null,o.a.createElement(c.a,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),o.a.createElement("p",null,o.a.createElement(c.a,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))))}},126:function(e,t,a){"use strict";var n=a(3),o=a(0),r=a.n(o);t.a=function(e){return r.a.createElement("svg",Object(n.a)({width:"20",height:"20",role:"img"},e),r.a.createElement("g",{fill:"#7a7a7a"},r.a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),r.a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))}},154:function(e,t){function a(e){let t,a=[];for(let n of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(n))a.push(parseInt(n,10));else if(t=n.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,n,o,r]=t;if(n&&r){n=parseInt(n),r=parseInt(r);const e=n<r?1:-1;"-"!==o&&".."!==o&&"\u2025"!==o||(r+=e);for(let t=n;t!==r;t+=e)a.push(t)}}return a}t.default=a,e.exports=a},84:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(98),c=a(16),l=a(28),i=a(99),s=a(153),d=a(91),u=a(3),p=a(88),h={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},m={Prism:a(26).a,theme:h};function y(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function g(){return(g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var f=/\r\n|\r|\n/,b=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},v=function(e,t){var a=e.length;return a>0&&e[a-1]===t?e:e.concat(t)},k=function(e,t){var a=e.plain,n=Object.create(null),o=e.styles.reduce((function(e,a){var n=a.languages,o=a.style;return n&&!n.includes(t)||a.types.forEach((function(t){var a=g({},e[t],o);e[t]=a})),e}),n);return o.root=a,o.plain=g({},a,{backgroundColor:null}),o};function j(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(a[n]=e[n]);return a}var E=function(e){function t(){for(var t=this,a=[],n=arguments.length;n--;)a[n]=arguments[n];e.apply(this,a),y(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var a=e.theme?k(e.theme,e.language):void 0;return t.themeDict=a})),y(this,"getLineProps",(function(e){var a=e.key,n=e.className,o=e.style,r=g({},j(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),c=t.getThemeDict(t.props);return void 0!==c&&(r.style=c.plain),void 0!==o&&(r.style=void 0!==r.style?g({},r.style,o):o),void 0!==a&&(r.key=a),n&&(r.className+=" "+n),r})),y(this,"getStyleForToken",(function(e){var a=e.types,n=e.empty,o=a.length,r=t.getThemeDict(t.props);if(void 0!==r){if(1===o&&"plain"===a[0])return n?{display:"inline-block"}:void 0;if(1===o&&!n)return r[a[0]];var c=n?{display:"inline-block"}:{},l=a.map((function(e){return r[e]}));return Object.assign.apply(Object,[c].concat(l))}})),y(this,"getTokenProps",(function(e){var a=e.key,n=e.className,o=e.style,r=e.token,c=g({},j(e,["key","className","style","token"]),{className:"token "+r.types.join(" "),children:r.content,style:t.getStyleForToken(r),key:void 0});return void 0!==o&&(c.style=void 0!==c.style?g({},c.style,o):o),void 0!==a&&(c.key=a),n&&(c.className+=" "+n),c})),y(this,"tokenize",(function(e,t,a,n){var o={code:t,grammar:a,language:n,tokens:[]};e.hooks.run("before-tokenize",o);var r=o.tokens=e.tokenize(o.code,o.grammar,o.language);return e.hooks.run("after-tokenize",o),r}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,a=e.language,n=e.code,o=e.children,r=this.getThemeDict(this.props),c=t.languages[a];return o({tokens:function(e){for(var t=[[]],a=[e],n=[0],o=[e.length],r=0,c=0,l=[],i=[l];c>-1;){for(;(r=n[c]++)<o[c];){var s=void 0,d=t[c],u=a[c][r];if("string"==typeof u?(d=c>0?d:["plain"],s=u):(d=v(d,u.type),u.alias&&(d=v(d,u.alias)),s=u.content),"string"==typeof s){var p=s.split(f),h=p.length;l.push({types:d,content:p[0]});for(var m=1;m<h;m++)b(l),i.push(l=[]),l.push({types:d,content:p[m]})}else c++,t.push(d),a.push(s),n.push(0),o.push(s.length)}c--,t.pop(),a.pop(),n.pop(),o.pop()}return b(l),i}(void 0!==c?this.tokenize(t,n,c,a):[n]),className:"prism-code language-"+a,style:void 0!==r?r.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(n.Component);var O=a(154),N=a.n(O),T={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},C=a(104),x=a(87),w=function(){var e=Object(x.useThemeConfig)().prism,t=Object(C.a)().isDarkTheme,a=e.theme||T,n=e.darkTheme||a;return t?n:a},S=a(89),B=a(72),L=a.n(B),P=/{([\d,-]+)}/,A=function(e){void 0===e&&(e=["js","jsBlock","jsx","python","html"]);var t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},a=["highlight-next-line","highlight-start","highlight-end"].join("|"),n=e.map((function(e){return"(?:"+t[e].start+"\\s*("+a+")\\s*"+t[e].end+")"})).join("|");return new RegExp("^\\s*(?:"+n+")\\s*$")},D=/(?:title=")(.*)(?:")/;function I(e){var t=e.children,a=e.className,r=e.metastring,c=Object(x.useThemeConfig)().prism,l=Object(n.useState)(!1),i=l[0],s=l[1],d=Object(n.useState)(!1),h=d[0],y=d[1];Object(n.useEffect)((function(){y(!0)}),[]);var g=Object(n.useRef)(null),f=[],b="",v=w(),k=Array.isArray(t)?t.join(""):t;if(r&&P.test(r)){var j=r.match(P)[1];f=N()(j).filter((function(e){return e>0}))}r&&D.test(r)&&(b=r.match(D)[1]);var O=a&&a.replace(/language-/,"");!O&&c.defaultLanguage&&(O=c.defaultLanguage);var T=k.replace(/\n$/,"");if(0===f.length&&void 0!==O){for(var C,B="",I=function(e){switch(e){case"js":case"javascript":case"ts":case"typescript":return A(["js","jsBlock"]);case"jsx":case"tsx":return A(["js","jsBlock","jsx"]);case"html":return A(["js","jsBlock","html"]);case"python":case"py":return A(["python"]);default:return A()}}(O),R=k.replace(/\n$/,"").split("\n"),z=0;z<R.length;){var F=z+1,M=R[z].match(I);if(null!==M){switch(M.slice(1).reduce((function(e,t){return e||t}),void 0)){case"highlight-next-line":B+=F+",";break;case"highlight-start":C=F;break;case"highlight-end":B+=C+"-"+(F-1)+","}R.splice(z,1)}else z+=1}f=N()(B),T=R.join("\n")}var _=function(){!function(e,{target:t=document.body}={}){const a=document.createElement("textarea"),n=document.activeElement;a.value=e,a.setAttribute("readonly",""),a.style.contain="strict",a.style.position="absolute",a.style.left="-9999px",a.style.fontSize="12pt";const o=document.getSelection();let r=!1;o.rangeCount>0&&(r=o.getRangeAt(0)),t.append(a),a.select(),a.selectionStart=0,a.selectionEnd=e.length;let c=!1;try{c=document.execCommand("copy")}catch{}a.remove(),r&&(o.removeAllRanges(),o.addRange(r)),n&&n.focus()}(T),s(!0),setTimeout((function(){return s(!1)}),2e3)};return o.a.createElement(E,Object(u.a)({},m,{key:String(h),theme:v,code:T,language:O}),(function(e){var t,a=e.className,n=e.style,r=e.tokens,c=e.getLineProps,l=e.getTokenProps;return o.a.createElement("div",{className:L.a.codeBlockContainer},b&&o.a.createElement("div",{style:n,className:L.a.codeBlockTitle},b),o.a.createElement("div",{className:Object(p.a)(L.a.codeBlockContent,O)},o.a.createElement("div",{tabIndex:0,className:Object(p.a)(a,L.a.codeBlock,"thin-scrollbar",(t={},t[L.a.codeBlockWithTitle]=b,t))},o.a.createElement("div",{className:L.a.codeBlockLines,style:n},r.map((function(e,t){1===e.length&&""===e[0].content&&(e[0].content="\n");var a=c({line:e,key:t});return f.includes(t+1)&&(a.className=a.className+" docusaurus-highlight-code-line"),o.a.createElement("div",Object(u.a)({key:t},a),e.map((function(e,t){return o.a.createElement("span",Object(u.a)({key:t},l({token:e,key:t})))})))})))),o.a.createElement("button",{ref:g,type:"button","aria-label":Object(S.b)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:Object(p.a)(L.a.copyButton),onClick:_},i?o.a.createElement(S.a,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):o.a.createElement(S.a,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))}))}var R=a(7),z=(a(73),a(74)),F=a.n(z),M=function(e){return function(t){var a,n=t.id,r=Object(R.a)(t,["id"]),c=Object(x.useThemeConfig)().navbar.hideOnScroll;return n?o.a.createElement(e,r,o.a.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:Object(p.a)("anchor",(a={},a[F.a.enhancedAnchor]=!c,a)),id:n}),r.children,o.a.createElement("a",{className:"hash-link",href:"#"+n,title:Object(S.b)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"#")):o.a.createElement(e,r)}},_={code:function(e){var t=e.children;return"string"==typeof t?t.includes("\n")?o.a.createElement(I,e):o.a.createElement("code",e):t},a:function(e){return o.a.createElement(d.a,e)},pre:function(e){var t=e.children;return o.a.createElement(I,Object(n.isValidElement)(t)?null==t?void 0:t.props:{children:t})},h1:M("h1"),h2:M("h2"),h3:M("h3"),h4:M("h4"),h5:M("h5"),h6:M("h6")},W=a(108),$=a(126),H=a(23),J=a(75),V=a.n(J);function K(e){var t,a,l,d,u,h=e.currentDocRoute,m=e.versionMetadata,y=e.children,g=Object(c.default)(),f=g.siteConfig,b=g.isClient,v=m.pluginId,k=m.permalinkToSidebar,j=m.docsSidebars,E=m.version,O=k[h.path],N=j[O],T=Object(n.useState)(!1),C=T[0],w=T[1],B=Object(n.useState)(!1),L=B[0],P=B[1],A=Object(n.useCallback)((function(){L&&P(!1),w(!C)}),[L]);return o.a.createElement(i.a,{key:b,wrapperClassName:"main-docs-wrapper",searchMetadatas:{version:E,tag:Object(x.docVersionSearchTag)(v,E)}},o.a.createElement("div",{className:V.a.docPage},N&&o.a.createElement("div",{className:Object(p.a)(V.a.docSidebarContainer,(t={},t[V.a.docSidebarContainerHidden]=C,t)),onTransitionEnd:function(e){e.currentTarget.classList.contains(V.a.docSidebarContainer)&&C&&P(!0)},role:"complementary"},o.a.createElement(s.a,{key:O,sidebar:N,path:h.path,sidebarCollapsible:null===(a=null===(l=f.themeConfig)||void 0===l?void 0:l.sidebarCollapsible)||void 0===a||a,onCollapse:A,isHidden:L}),L&&o.a.createElement("div",{className:V.a.collapsedDocSidebar,title:Object(S.b)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":Object(S.b)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:A,onClick:A},o.a.createElement($.a,{className:V.a.expandSidebarButtonIcon}))),o.a.createElement("main",{className:Object(p.a)(V.a.docMainContainer,(d={},d[V.a.docMainContainerEnhanced]=C,d))},o.a.createElement("div",{className:Object(p.a)("container padding-vert--lg",V.a.docItemWrapper,(u={},u[V.a.docItemWrapperEnhanced]=C,u))},o.a.createElement(r.a,{components:_},y)))))}t.default=function(e){var t=e.route.routes,a=e.versionMetadata,n=e.location,r=t.find((function(e){return Object(H.matchPath)(n.pathname,e)}));return r?o.a.createElement(K,{currentDocRoute:r,versionMetadata:a},Object(l.a)(t)):o.a.createElement(W.default,e)}}}]);