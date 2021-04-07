(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{111:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(103),c=a(91);t.default=function(){return o.a.createElement(r.a,{title:"Page Not Found"},o.a.createElement("main",{className:"container margin-vert--xl"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col col--6 col--offset-3"},o.a.createElement("h1",{className:"hero__title"},o.a.createElement(c.a,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),o.a.createElement("p",null,o.a.createElement(c.a,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),o.a.createElement("p",null,o.a.createElement(c.a,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))))}},155:function(e,t){function a(e){let t,a=[];for(let n of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(n))a.push(parseInt(n,10));else if(t=n.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,n,o,r]=t;if(n&&r){n=parseInt(n),r=parseInt(r);const e=n<r?1:-1;"-"!==o&&".."!==o&&"\u2025"!==o||(r+=e);for(let t=n;t!==r;t+=e)a.push(t)}}return a}t.default=a,e.exports=a},86:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(98),c=a(16),l=a(28),i=a(103),s=a(3),u=a(7),d=a(90),m=a(89),p=a(115),b=a(123),h=a(124),f=a(122),y=a(93),g=a(108),v=a(125),k=function(e){return o.a.createElement("svg",Object(s.a)({width:"20",height:"20",role:"img"},e),o.a.createElement("g",{fill:"#7a7a7a"},o.a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),o.a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))},j=a(127),E=a(91),O=a(71),N=a.n(O);var C=function e(t,a){return"link"===t.type?Object(m.isSamePath)(t.href,a):"category"===t.type&&t.items.some((function(t){return e(t,a)}))};function T(e){var t,a,r,c=e.item,l=e.onItemClick,i=e.collapsible,m=e.activePath,p=Object(u.a)(e,["item","onItemClick","collapsible","activePath"]),b=c.items,h=c.label,f=C(c,m),y=(a=f,r=Object(n.useRef)(a),Object(n.useEffect)((function(){r.current=a}),[a]),r.current),g=Object(n.useState)((function(){return!!i&&(!f&&c.collapsed)})),v=g[0],k=g[1],j=Object(n.useRef)(null),E=Object(n.useState)(void 0),O=E[0],T=E[1],x=function(e){var t;void 0===e&&(e=!0),T(e?(null===(t=j.current)||void 0===t?void 0:t.scrollHeight)+"px":void 0)};Object(n.useEffect)((function(){f&&!y&&v&&k(!1)}),[f,y,v]);var _=Object(n.useCallback)((function(e){e.preventDefault(),O||x(),setTimeout((function(){return k((function(e){return!e}))}),100)}),[O]);return 0===b.length?null:o.a.createElement("li",{className:Object(d.a)("menu__list-item",{"menu__list-item--collapsed":v}),key:h},o.a.createElement("a",Object(s.a)({className:Object(d.a)("menu__link",(t={"menu__link--sublist":i,"menu__link--active":i&&f},t[N.a.menuLinkText]=!i,t)),onClick:i?_:void 0,href:i?"#!":void 0},p),h),o.a.createElement("ul",{className:"menu__list",ref:j,style:{height:O},onTransitionEnd:function(){v||x(!1)}},b.map((function(e){return o.a.createElement(S,{tabIndex:v?"-1":"0",key:e.label,item:e,onItemClick:l,collapsible:i,activePath:m})}))))}function x(e){var t,a=e.item,n=e.onItemClick,r=e.activePath,c=(e.collapsible,Object(u.a)(e,["item","onItemClick","activePath","collapsible"])),l=a.href,i=a.label,m=C(a,r);return o.a.createElement("li",{className:"menu__list-item",key:i},o.a.createElement(y.a,Object(s.a)({className:Object(d.a)("menu__link",(t={"menu__link--active":m},t[N.a.menuLinkExternal]=!Object(g.a)(l),t)),to:l},Object(g.a)(l)&&{isNavLink:!0,exact:!0,onClick:n},c),i))}function S(e){switch(e.item.type){case"category":return o.a.createElement(T,e);case"link":default:return o.a.createElement(x,e)}}var _=function(e){var t,a,r=e.path,c=e.sidebar,l=e.sidebarCollapsible,i=void 0===l||l,s=e.onCollapse,u=e.isHidden,y=Object(n.useState)(!1),g=y[0],O=y[1],C=Object(m.useThemeConfig)(),T=C.navbar.hideOnScroll,x=C.hideableSidebar,_=Object(p.a)().isAnnouncementBarClosed,B=Object(f.a)().scrollY;Object(b.a)(g);var I=Object(h.a)();return Object(n.useEffect)((function(){I===h.b.desktop&&O(!1)}),[I]),o.a.createElement("div",{className:Object(d.a)(N.a.sidebar,(t={},t[N.a.sidebarWithHideableNavbar]=T,t[N.a.sidebarHidden]=u,t))},T&&o.a.createElement(v.a,{tabIndex:-1,className:N.a.sidebarLogo}),o.a.createElement("div",{className:Object(d.a)("menu","menu--responsive","thin-scrollbar",N.a.menu,(a={"menu--show":g},a[N.a.menuWithAnnouncementBar]=!_&&0===B,a))},o.a.createElement("button",{"aria-label":g?Object(E.b)({id:"theme.docs.sidebar.responsiveCloseButtonLabel",message:"Close menu",description:"The ARIA label for close button of mobile doc sidebar"}):Object(E.b)({id:"theme.docs.sidebar.responsiveOpenButtonLabel",message:"Open menu",description:"The ARIA label for open button of mobile doc sidebar"}),"aria-haspopup":"true",className:"button button--secondary button--sm menu__button",type:"button",onClick:function(){O(!g)}},g?o.a.createElement("span",{className:Object(d.a)(N.a.sidebarMenuIcon,N.a.sidebarMenuCloseIcon)},"\xd7"):o.a.createElement(j.a,{className:N.a.sidebarMenuIcon,height:24,width:24})),o.a.createElement("ul",{className:"menu__list"},c.map((function(e){return o.a.createElement(S,{key:e.label,item:e,onItemClick:function(e){e.target.blur(),O(!1)},collapsible:i,activePath:r})})))),x&&o.a.createElement("button",{type:"button",title:Object(E.b)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":Object(E.b)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:Object(d.a)("button button--secondary button--outline",N.a.collapseSidebarButton),onClick:s},o.a.createElement(k,{className:N.a.collapseSidebarButtonIcon})))},B={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},I={Prism:a(26).a,theme:B};function w(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function L(){return(L=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var P=/\r\n|\r|\n/,A=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},D=function(e,t){var a=e.length;return a>0&&e[a-1]===t?e:e.concat(t)},R=function(e,t){var a=e.plain,n=Object.create(null),o=e.styles.reduce((function(e,a){var n=a.languages,o=a.style;return n&&!n.includes(t)||a.types.forEach((function(t){var a=L({},e[t],o);e[t]=a})),e}),n);return o.root=a,o.plain=L({},a,{backgroundColor:null}),o};function M(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(a[n]=e[n]);return a}var z=function(e){function t(){for(var t=this,a=[],n=arguments.length;n--;)a[n]=arguments[n];e.apply(this,a),w(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var a=e.theme?R(e.theme,e.language):void 0;return t.themeDict=a})),w(this,"getLineProps",(function(e){var a=e.key,n=e.className,o=e.style,r=L({},M(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),c=t.getThemeDict(t.props);return void 0!==c&&(r.style=c.plain),void 0!==o&&(r.style=void 0!==r.style?L({},r.style,o):o),void 0!==a&&(r.key=a),n&&(r.className+=" "+n),r})),w(this,"getStyleForToken",(function(e){var a=e.types,n=e.empty,o=a.length,r=t.getThemeDict(t.props);if(void 0!==r){if(1===o&&"plain"===a[0])return n?{display:"inline-block"}:void 0;if(1===o&&!n)return r[a[0]];var c=n?{display:"inline-block"}:{},l=a.map((function(e){return r[e]}));return Object.assign.apply(Object,[c].concat(l))}})),w(this,"getTokenProps",(function(e){var a=e.key,n=e.className,o=e.style,r=e.token,c=L({},M(e,["key","className","style","token"]),{className:"token "+r.types.join(" "),children:r.content,style:t.getStyleForToken(r),key:void 0});return void 0!==o&&(c.style=void 0!==c.style?L({},c.style,o):o),void 0!==a&&(c.key=a),n&&(c.className+=" "+n),c})),w(this,"tokenize",(function(e,t,a,n){var o={code:t,grammar:a,language:n,tokens:[]};e.hooks.run("before-tokenize",o);var r=o.tokens=e.tokenize(o.code,o.grammar,o.language);return e.hooks.run("after-tokenize",o),r}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,a=e.language,n=e.code,o=e.children,r=this.getThemeDict(this.props),c=t.languages[a];return o({tokens:function(e){for(var t=[[]],a=[e],n=[0],o=[e.length],r=0,c=0,l=[],i=[l];c>-1;){for(;(r=n[c]++)<o[c];){var s=void 0,u=t[c],d=a[c][r];if("string"==typeof d?(u=c>0?u:["plain"],s=d):(u=D(u,d.type),d.alias&&(u=D(u,d.alias)),s=d.content),"string"==typeof s){var m=s.split(P),p=m.length;l.push({types:u,content:m[0]});for(var b=1;b<p;b++)A(l),i.push(l=[]),l.push({types:u,content:m[b]})}else c++,t.push(u),a.push(s),n.push(0),o.push(s.length)}c--,t.pop(),a.pop(),n.pop(),o.pop()}return A(l),i}(void 0!==c?this.tokenize(t,n,c,a):[n]),className:"prism-code language-"+a,style:void 0!==r?r.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(n.Component);var F=a(155),H=a.n(F),W={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},$=a(107),J=function(){var e=Object(m.useThemeConfig)().prism,t=Object($.a)().isDarkTheme,a=e.theme||W,n=e.darkTheme||a;return t?n:a},V=a(72),K=a.n(V),U=/{([\d,-]+)}/,Y=function(e){void 0===e&&(e=["js","jsBlock","jsx","python","html"]);var t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},a=["highlight-next-line","highlight-start","highlight-end"].join("|"),n=e.map((function(e){return"(?:"+t[e].start+"\\s*("+a+")\\s*"+t[e].end+")"})).join("|");return new RegExp("^\\s*(?:"+n+")\\s*$")},q=/(?:title=")(.*)(?:")/;function G(e){var t=e.children,a=e.className,r=e.metastring,c=Object(m.useThemeConfig)().prism,l=Object(n.useState)(!1),i=l[0],u=l[1],p=Object(n.useState)(!1),b=p[0],h=p[1];Object(n.useEffect)((function(){h(!0)}),[]);var f=Object(n.useRef)(null),y=[],g="",v=J(),k=Array.isArray(t)?t.join(""):t;if(r&&U.test(r)){var j=r.match(U)[1];y=H()(j).filter((function(e){return e>0}))}r&&q.test(r)&&(g=r.match(q)[1]);var O=a&&a.replace(/language-/,"");!O&&c.defaultLanguage&&(O=c.defaultLanguage);var N=k.replace(/\n$/,"");if(0===y.length&&void 0!==O){for(var C,T="",x=function(e){switch(e){case"js":case"javascript":case"ts":case"typescript":return Y(["js","jsBlock"]);case"jsx":case"tsx":return Y(["js","jsBlock","jsx"]);case"html":return Y(["js","jsBlock","html"]);case"python":case"py":return Y(["python"]);default:return Y()}}(O),S=k.replace(/\n$/,"").split("\n"),_=0;_<S.length;){var B=_+1,w=S[_].match(x);if(null!==w){switch(w.slice(1).reduce((function(e,t){return e||t}),void 0)){case"highlight-next-line":T+=B+",";break;case"highlight-start":C=B;break;case"highlight-end":T+=C+"-"+(B-1)+","}S.splice(_,1)}else _+=1}y=H()(T),N=S.join("\n")}var L=function(){!function(e,{target:t=document.body}={}){const a=document.createElement("textarea"),n=document.activeElement;a.value=e,a.setAttribute("readonly",""),a.style.contain="strict",a.style.position="absolute",a.style.left="-9999px",a.style.fontSize="12pt";const o=document.getSelection();let r=!1;o.rangeCount>0&&(r=o.getRangeAt(0)),t.append(a),a.select(),a.selectionStart=0,a.selectionEnd=e.length;let c=!1;try{c=document.execCommand("copy")}catch{}a.remove(),r&&(o.removeAllRanges(),o.addRange(r)),n&&n.focus()}(N),u(!0),setTimeout((function(){return u(!1)}),2e3)};return o.a.createElement(z,Object(s.a)({},I,{key:String(b),theme:v,code:N,language:O}),(function(e){var t,a=e.className,n=e.style,r=e.tokens,c=e.getLineProps,l=e.getTokenProps;return o.a.createElement("div",{className:K.a.codeBlockContainer},g&&o.a.createElement("div",{style:n,className:K.a.codeBlockTitle},g),o.a.createElement("div",{className:Object(d.a)(K.a.codeBlockContent,O)},o.a.createElement("div",{tabIndex:0,className:Object(d.a)(a,K.a.codeBlock,"thin-scrollbar",(t={},t[K.a.codeBlockWithTitle]=g,t))},o.a.createElement("div",{className:K.a.codeBlockLines,style:n},r.map((function(e,t){1===e.length&&""===e[0].content&&(e[0].content="\n");var a=c({line:e,key:t});return y.includes(t+1)&&(a.className=a.className+" docusaurus-highlight-code-line"),o.a.createElement("div",Object(s.a)({key:t},a),e.map((function(e,t){return o.a.createElement("span",Object(s.a)({key:t},l({token:e,key:t})))})))})))),o.a.createElement("button",{ref:f,type:"button","aria-label":Object(E.b)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:Object(d.a)(K.a.copyButton),onClick:L},i?o.a.createElement(E.a,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):o.a.createElement(E.a,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))}))}a(73);var Q=a(74),X=a.n(Q),Z=function(e){return function(t){var a,n=t.id,r=Object(u.a)(t,["id"]),c=Object(m.useThemeConfig)().navbar.hideOnScroll;return n?o.a.createElement(e,r,o.a.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:Object(d.a)("anchor",(a={},a[X.a.enhancedAnchor]=!c,a)),id:n}),r.children,o.a.createElement("a",{className:"hash-link",href:"#"+n,title:Object(E.b)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"#")):o.a.createElement(e,r)}},ee={code:function(e){var t=e.children;return"string"==typeof t?t.includes("\n")?o.a.createElement(G,e):o.a.createElement("code",e):t},a:function(e){return o.a.createElement(y.a,e)},pre:function(e){var t=e.children;return o.a.createElement(G,Object(n.isValidElement)(t)?null==t?void 0:t.props:{children:t})},h1:Z("h1"),h2:Z("h2"),h3:Z("h3"),h4:Z("h4"),h5:Z("h5"),h6:Z("h6")},te=a(111),ae=a(23),ne=a(75),oe=a.n(ne);function re(e){var t,a,l,s,u,p=e.currentDocRoute,b=e.versionMetadata,h=e.children,f=Object(c.default)(),y=f.siteConfig,g=f.isClient,v=b.pluginId,j=b.permalinkToSidebar,O=b.docsSidebars,N=b.version,C=j[p.path],T=O[C],x=Object(n.useState)(!1),S=x[0],B=x[1],I=Object(n.useState)(!1),w=I[0],L=I[1],P=Object(n.useCallback)((function(){w&&L(!1),B(!S)}),[w]);return o.a.createElement(i.a,{key:g,wrapperClassName:"main-docs-wrapper",searchMetadatas:{version:N,tag:Object(m.docVersionSearchTag)(v,N)}},o.a.createElement("div",{className:oe.a.docPage},T&&o.a.createElement("div",{className:Object(d.a)(oe.a.docSidebarContainer,(t={},t[oe.a.docSidebarContainerHidden]=S,t)),onTransitionEnd:function(e){e.currentTarget.classList.contains(oe.a.docSidebarContainer)&&S&&L(!0)},role:"complementary"},o.a.createElement(_,{key:C,sidebar:T,path:p.path,sidebarCollapsible:null===(a=null===(l=y.themeConfig)||void 0===l?void 0:l.sidebarCollapsible)||void 0===a||a,onCollapse:P,isHidden:w}),w&&o.a.createElement("div",{className:oe.a.collapsedDocSidebar,title:Object(E.b)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":Object(E.b)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:P,onClick:P},o.a.createElement(k,{className:oe.a.expandSidebarButtonIcon}))),o.a.createElement("main",{className:Object(d.a)(oe.a.docMainContainer,(s={},s[oe.a.docMainContainerEnhanced]=S,s))},o.a.createElement("div",{className:Object(d.a)("container padding-vert--lg",oe.a.docItemWrapper,(u={},u[oe.a.docItemWrapperEnhanced]=S,u))},o.a.createElement(r.a,{components:ee},h)))))}t.default=function(e){var t=e.route.routes,a=e.versionMetadata,n=e.location,r=t.find((function(e){return Object(ae.matchPath)(n.pathname,e)}));return r?o.a.createElement(re,{currentDocRoute:r,versionMetadata:a},Object(l.a)(t)):o.a.createElement(te.default,e)}}}]);