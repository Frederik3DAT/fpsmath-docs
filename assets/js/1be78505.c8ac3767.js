(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{153:function(e,t,a){"use strict";var n=a(3),l=a(7),c=a(0),i=a.n(c),o=a(88),s=a(87),r=a(112),b=a(120),u=a(121),m=a(119),d=a(91),p=a(105),f=a(122),h=a(126),O=a(124),v=a(89),j=a(71),k=a.n(j);var E=function e(t,a){return"link"===t.type?Object(s.isSamePath)(t.href,a):"category"===t.type&&t.items.some((function(t){return e(t,a)}))};function _(e){var t,a,s,r=e.item,b=e.onItemClick,u=e.collapsible,m=e.activePath,d=Object(l.a)(e,["item","onItemClick","collapsible","activePath"]),p=r.items,f=r.label,h=E(r,m),O=(a=h,s=Object(c.useRef)(a),Object(c.useEffect)((function(){s.current=a}),[a]),s.current),v=Object(c.useState)((function(){return!!u&&(!h&&r.collapsed)})),j=v[0],_=v[1],C=Object(c.useRef)(null),y=Object(c.useState)(void 0),g=y[0],I=y[1],w=function(e){var t;void 0===e&&(e=!0),I(e?(null===(t=C.current)||void 0===t?void 0:t.scrollHeight)+"px":void 0)};Object(c.useEffect)((function(){h&&!O&&j&&_(!1)}),[h,O,j]);var T=Object(c.useCallback)((function(e){e.preventDefault(),g||w(),setTimeout((function(){return _((function(e){return!e}))}),100)}),[g]);return 0===p.length?null:i.a.createElement(i.a.Fragment,null,i.a.createElement("li",{className:Object(o.a)("menu__list-item",{"menu__list-item--collapsed":j}),key:f},i.a.createElement("a",Object(n.a)({className:Object(o.a)("menu__link",(t={"menu__link--sublist":u,"menu__link--active":u&&h},t[k.a.menuLinkText]=!u,t)),onClick:u?T:void 0,href:u?"#!":void 0},d),f),i.a.createElement("ul",{className:"menu__list",ref:C,style:{height:g},onTransitionEnd:function(){j||w(!1)}},p.map((function(e){return i.a.createElement(N,{tabIndex:j?"-1":"0",key:e.label,item:e,onItemClick:b,collapsible:u,activePath:m})})))),i.a.createElement("hr",{style:{color:"var(--ifm-toc-border-color)"}}))}function C(e){var t,a=e.item,c=e.onItemClick,s=e.activePath,r=(e.collapsible,Object(l.a)(e,["item","onItemClick","activePath","collapsible"])),b=a.href,u=a.label,m=E(a,s);return i.a.createElement("li",{className:"menu__list-item",key:u},i.a.createElement(d.a,Object(n.a)({className:Object(o.a)("menu__link",(t={"menu__link--active":m},t[k.a.menuLinkExternal]=!Object(p.a)(b),t)),to:b},Object(p.a)(b)&&{isNavLink:!0,exact:!0,onClick:c},r),u))}function N(e){switch(e.item.type){case"category":return i.a.createElement(_,e);case"link":default:return i.a.createElement(C,e)}}t.a=function(e){var t,a,n=e.path,l=e.sidebar,d=e.sidebarCollapsible,p=void 0===d||d,j=e.onCollapse,E=e.isHidden,_=Object(c.useState)(!1),C=_[0],y=_[1],g=Object(s.useThemeConfig)(),I=g.navbar.hideOnScroll,w=g.hideableSidebar,T=Object(r.a)().isAnnouncementBarClosed,B=Object(m.a)().scrollY;Object(b.a)(C);var S=Object(u.a)();return Object(c.useEffect)((function(){S===u.b.desktop&&y(!1)}),[S]),i.a.createElement("div",{className:Object(o.a)(k.a.sidebar,(t={},t[k.a.sidebarWithHideableNavbar]=I,t[k.a.sidebarHidden]=E,t))},I&&i.a.createElement(f.a,{tabIndex:-1,className:k.a.sidebarLogo}),i.a.createElement("div",{className:Object(o.a)("menu","menu--responsive","thin-scrollbar",k.a.menu,(a={"menu--show":C},a[k.a.menuWithAnnouncementBar]=!T&&0===B,a))},i.a.createElement("button",{"aria-label":C?Object(v.b)({id:"theme.docs.sidebar.responsiveCloseButtonLabel",message:"Close menu",description:"The ARIA label for close button of mobile doc sidebar"}):Object(v.b)({id:"theme.docs.sidebar.responsiveOpenButtonLabel",message:"Open menu",description:"The ARIA label for open button of mobile doc sidebar"}),"aria-haspopup":"true",className:"button button--secondary button--sm menu__button",type:"button",onClick:function(){y(!C)}},C?i.a.createElement("span",{className:Object(o.a)(k.a.sidebarMenuIcon,k.a.sidebarMenuCloseIcon)},"\xd7"):i.a.createElement(O.a,{className:k.a.sidebarMenuIcon,height:24,width:24})),i.a.createElement("ul",{className:"menu__list"},l.map((function(e){return i.a.createElement(N,{key:e.label,item:e,onItemClick:function(e){e.target.blur(),y(!1)},collapsible:p,activePath:n})})))),w&&i.a.createElement("button",{type:"button",title:Object(v.b)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":Object(v.b)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:Object(o.a)("button button--secondary button--outline",k.a.collapseSidebarButton),onClick:j},i.a.createElement(h.a,{className:k.a.collapseSidebarButtonIcon})))}}}]);