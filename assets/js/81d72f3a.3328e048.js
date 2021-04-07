(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{80:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return n})),t.d(a,"metadata",(function(){return d})),t.d(a,"toc",(function(){return p})),t.d(a,"default",(function(){return o}));var c=t(3),s=t(7),i=(t(0),t(93)),b=t(161),n={title:"Commands - Math",sidebar_label:"Math"},d={unversionedId:"commands/math",id:"commands/math",isDocsHomePage:!1,title:"Commands - Math",description:"Usage Key",source:"@site/docs/commands/math.mdx",slug:"/commands/math",permalink:"/docs/commands/math",editUrl:"https://github.com/animafps/fpsmath-docs/edit/main/docs/commands/math.mdx",version:"current",sidebar_label:"Math",sidebar:"docs",previous:{title:"Commands - Overview",permalink:"/docs/commands/overview"},next:{title:"Commands - Utility",permalink:"/docs/commands/util"}},p=[{value:"Usage Key",id:"usage-key",children:[]},{value:"Commands",id:"commands",children:[{value:"cm",id:"cm",children:[]},{value:"deg",id:"deg",children:[]},{value:"mpi",id:"mpi",children:[]},{value:"inch",id:"inch",children:[]},{value:"convert",id:"convert",children:[]},{value:"fov",id:"fov",children:[]},{value:"focal",id:"focal",children:[]},{value:"sens",id:"sens",children:[]}]}],r={toc:p};function o(e){var a=e.components,t=Object(s.a)(e,["components"]);return Object(i.b)("wrapper",Object(c.a)({},r,t,{components:a,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"usage-key"},"Usage Key"),Object(i.b)("p",null,"For commands that accept input, you'll see keys with the following:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"<required>")," - parameters between ",Object(i.b)("inlineCode",{parentName:"li"},"<>")," must be included with the command"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"[optional]")," - parameters between ",Object(i.b)("inlineCode",{parentName:"li"},"[]")," are optional parameters and may be excluded"),Object(i.b)("li",{parentName:"ul"},"a | or | b - | means that you can use the parameters on either side of the symbol"),Object(i.b)("li",{parentName:"ul"},"repeat... - means that you can provide multiple parameters as input")),Object(i.b)("p",null,"These may be nested. Example: ",Object(i.b)("inlineCode",{parentName:"p"},"[parameter1 <parameter2\\>]")," means that the input is optional, but if you provide parameter1 then parameter2 is required. ",Object(i.b)("inlineCode",{parentName:"p"},"[parameter...]")," means that input is optional, and that the input can be any number of parameters."),Object(i.b)("h2",{id:"commands"},"Commands"),Object(i.b)("h3",{id:"cm"},"cm"),Object(i.b)("p",null,"Converts Sensitivity to cm/rev"),Object(i.b)("h4",{id:"usage"},"Usage"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-text"},"/cm <sens> <game | yaw value> <cpi>\n")),Object(i.b)("h4",{id:"supported-flags"},"Supported Flags"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-text"},"-dp <output decimal places>\n")),Object(i.b)("h4",{id:"examples"},"Examples"),Object(i.b)(b.c,{mdxType:"DiscordMessages"},Object(i.b)(b.b,{author:"Anima",mdxType:"DiscordMessage"},"/cm 3 ow 1600"),Object(i.b)(b.b,{author:"FPSMath",bot:!0,avatar:"https://cdn.discordapp.com/avatars/792712521546465301/a8176886ccd814f17b4c5a98b62e185a.png?size=256",mdxType:"DiscordMessage"},Object(i.b)(b.a,{highlight:!0,mdxType:"DiscordMention"},"Anima"),", 28.86 cm/rev"),Object(i.b)(b.b,{author:"Anima",mdxType:"DiscordMessage"},"/cm 2 0.022 800 -dp 8"),Object(i.b)(b.b,{author:"FPSMath",bot:!0,avatar:"https://cdn.discordapp.com/avatars/792712521546465301/a8176886ccd814f17b4c5a98b62e185a.png?size=256",mdxType:"DiscordMessage"},Object(i.b)(b.a,{highlight:!0,mdxType:"DiscordMention"},"Anima"),", 25.97727273 cm/rev")),Object(i.b)("h4",{id:"aliases"},"Aliases"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-text"},"cm/rev, cm/360\n")),Object(i.b)("h3",{id:"deg"},"deg"),Object(i.b)("p",null,"Converts Sensitivity to deg/mm"),Object(i.b)("h4",{id:"usage-1"},"Usage"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-text"},"/deg <sens> <game | yaw value> <cpi>\n")),Object(i.b)("h4",{id:"supported-flags-1"},"Supported Flags"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-text"},"-dp <output decimal places>\n")),Object(i.b)("h4",{id:"examples-1"},"Examples"),Object(i.b)(b.c,{mdxType:"DiscordMessages"},Object(i.b)(b.b,{author:"Anima",mdxType:"DiscordMessage"},"/deg 3 ow 1600"),Object(i.b)(b.b,{author:"FPSMath",bot:!0,avatar:"https://cdn.discordapp.com/avatars/792712521546465301/a8176886ccd814f17b4c5a98b62e185a.png?size=256",mdxType:"DiscordMessage"},Object(i.b)(b.a,{highlight:!0,mdxType:"DiscordMention"},"Anima"),", 1.24724 deg/mm"),Object(i.b)(b.b,{author:"Anima",mdxType:"DiscordMessage"},"/deg 2 0.022 800 -dp 8"),Object(i.b)(b.b,{author:"FPSMath",bot:!0,avatar:"https://cdn.discordapp.com/avatars/792712521546465301/a8176886ccd814f17b4c5a98b62e185a.png?size=256",mdxType:"DiscordMessage"},Object(i.b)(b.a,{highlight:!0,mdxType:"DiscordMention"},"Anima"),", 1.38582677 deg/mm")),Object(i.b)("h4",{id:"aliases-1"},"Aliases"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-text"},"deg/mm\n")),Object(i.b)("h3",{id:"mpi"},"mpi"),Object(i.b)("p",null,"Converts Sensitivity to mpi(mrad/inch)"),Object(i.b)("h4",{id:"usage-2"},"Usage"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-text"},"/mpi <sens> <game | yaw value> <cpi>\n")),Object(i.b)("h4",{id:"supported-flags-2"},"Supported Flags"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-text"},"-dp <output decimal places>\n")),Object(i.b)("h4",{id:"examples-2"},"Examples"),Object(i.b)(b.c,{mdxType:"DiscordMessages"},Object(i.b)(b.b,{author:"Anima",mdxType:"DiscordMessage"},"/mpi 3 ow 1600"),Object(i.b)(b.b,{author:"FPSMath",bot:!0,avatar:"https://cdn.discordapp.com/avatars/792712521546465301/a8176886ccd814f17b4c5a98b62e185a.png?size=256",mdxType:"DiscordMessage"},Object(i.b)(b.a,{highlight:!0,mdxType:"DiscordMention"},"Anima"),", 1.24724 mpi"),Object(i.b)(b.b,{author:"Anima",mdxType:"DiscordMessage"},"/mpi 2 0.022 800 -dp 8"),Object(i.b)(b.b,{author:"FPSMath",bot:!0,avatar:"https://cdn.discordapp.com/avatars/792712521546465301/a8176886ccd814f17b4c5a98b62e185a.png?size=256",mdxType:"DiscordMessage"},Object(i.b)(b.a,{highlight:!0,mdxType:"DiscordMention"},"Anima"),", 1.38582677 mpi")),Object(i.b)("h4",{id:"aliases-2"},"Aliases"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-text"},"mrad, milliradian, mrad/inch, milliradian/inch\n")),Object(i.b)("h3",{id:"inch"},"inch"),Object(i.b)("p",null,"Converts sensitivty to inch/rev(inch/360)"),Object(i.b)("h4",{id:"usage-3"},"Usage"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-text"},"/inch <sens> <game | yaw value> <cpi>\n")),Object(i.b)("h4",{id:"supported-flags-3"},"Supported Flags"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-text"},"-dp <output decimal places>\n")),Object(i.b)("h4",{id:"examples-3"},"Examples"),Object(i.b)(b.c,{mdxType:"DiscordMessages"},Object(i.b)(b.b,{author:"Anima",mdxType:"DiscordMessage"},"/inch 3 ow 1600"),Object(i.b)(b.b,{author:"FPSMath",bot:!0,avatar:"https://cdn.discordapp.com/avatars/792712521546465301/a8176886ccd814f17b4c5a98b62e185a.png?size=256",mdxType:"DiscordMessage"},Object(i.b)(b.a,{highlight:!0,mdxType:"DiscordMention"},"Anima"),", 1.24724 inch/360"),Object(i.b)(b.b,{author:"Anima",mdxType:"DiscordMessage"},"/inch 2 0.022 800 -dp 8"),Object(i.b)(b.b,{author:"FPSMath",bot:!0,avatar:"https://cdn.discordapp.com/avatars/792712521546465301/a8176886ccd814f17b4c5a98b62e185a.png?size=256",mdxType:"DiscordMessage"},Object(i.b)(b.a,{highlight:!0,mdxType:"DiscordMention"},"Anima"),", 1.38582677 inch/360")),Object(i.b)("h4",{id:"aliases-3"},"Aliases"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-text"},"inch/360, inch/rev\n")),Object(i.b)("h3",{id:"convert"},"convert"),Object(i.b)("p",null,"Converts different sensitivities from one game or yaw value to another"),Object(i.b)("h4",{id:"usage-4"},"Usage"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-text"},"/convert <sens> <input game | yaw> <output game | yaw>\n")),Object(i.b)("h4",{id:"supported-flags-4"},"Supported Flags"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-text"},"-dp <output decimal places>\n")),Object(i.b)("h4",{id:"examples-4"},"Examples"),Object(i.b)(b.c,{mdxType:"DiscordMessages"},Object(i.b)(b.b,{author:"Anima",mdxType:"DiscordMessage"},"/convert 6 wz 0.022"),Object(i.b)(b.b,{author:"FPSMath",bot:!0,avatar:"https://cdn.discordapp.com/avatars/792712521546465301/a8176886ccd814f17b4c5a98b62e185a.png?size=256",mdxType:"DiscordMessage"},Object(i.b)(b.a,{highlight:!0,mdxType:"DiscordMention"},"Anima"),", 1.80000")),Object(i.b)("h3",{id:"fov"},"fov"),Object(i.b)("p",null,"Finds the true vertical and horizontal FOVs for certain aspect ratio that the game is being rendered at and game/FOV scaling method(FILM notation)"),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://www.kovaak.com/film-notation"},"To learn about FILM notation click here")),Object(i.b)("h4",{id:"usage-5"},"Usage"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-text"},"/fov <fov> <fov> <gamename | FILM notation> <aspect ratio>\n")),Object(i.b)("h4",{id:"supported-flags-5"},"Supported Flags"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-text"},"-dp <output decimal places>\n")),Object(i.b)("h4",{id:"examples-5"},"Examples"),Object(i.b)(b.c,{mdxType:"DiscordMessages"},Object(i.b)(b.b,{author:"Anima",mdxType:"DiscordMessage"},"/fov 90 4ML3 16:19"),Object(i.b)(b.b,{author:"FPSMath",bot:!0,avatar:"https://cdn.discordapp.com/avatars/792712521546465301/a8176886ccd814f17b4c5a98b62e185a.png?size=256",mdxType:"DiscordMessage"},Object(i.b)(b.a,{highlight:!0,mdxType:"DiscordMention"},"Anima"),", Horizontal FOV: 64.551",Object(i.b)("br",null),"Vertical FOV: 73.740"),Object(i.b)(b.b,{author:"Anima",mdxType:"DiscordMessage"},"/fov 103 ow 1920:1440"),Object(i.b)(b.b,{author:"FPSMath",bot:!0,avatar:"https://cdn.discordapp.com/avatars/792712521546465301/a8176886ccd814f17b4c5a98b62e185a.png?size=256",mdxType:"DiscordMessage"},Object(i.b)(b.a,{highlight:!0,mdxType:"DiscordMention"},"Anima"),", Horizontal FOV: 103.000",Object(i.b)("br",null),"Vertical FOV: 56.631")),Object(i.b)("h4",{id:"aliases-4"},"Aliases"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-text"},"fov-scaling, film, fovscailing\n")),Object(i.b)("h3",{id:"focal"},"focal"),Object(i.b)("p",null,"Focal Length Scales a desired sensitivity between 2 fov values of the same type/ game"),Object(i.b)("h4",{id:"usage-6"},"Usage"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-text"},"/focal <sens> <old fov> <new fov>\n")),Object(i.b)("h4",{id:"supported-flags-6"},"Supported Flags"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-text"},"-dp <output decimal places>\n")),Object(i.b)("h4",{id:"examples-6"},"Examples"),Object(i.b)(b.c,{mdxType:"DiscordMessages"},Object(i.b)(b.b,{author:"Anima",mdxType:"DiscordMessage"},"/focal 0.95 90 100"),Object(i.b)(b.b,{author:"FPSMath",bot:!0,avatar:"https://cdn.discordapp.com/avatars/792712521546465301/a8176886ccd814f17b4c5a98b62e185a.png?size=256",mdxType:"DiscordMessage"},Object(i.b)(b.a,{highlight:!0,mdxType:"DiscordMention"},"Anima"),", 1.13217")),Object(i.b)("h4",{id:"aliases-5"},"Aliases"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-text"},"focal-scailing, visomotor, focalscailing\n")),Object(i.b)("h3",{id:"sens"},"sens"),Object(i.b)("p",null,"Converts cm/rev(default), deg/mm, inch/rev, mpi to a game sensitivity"),Object(i.b)("h4",{id:"usage-7"},"Usage"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-text"},"sens <cm/rev | deg/mm | inch/rev | mpi > <game | yaw> <cpi>\n")),Object(i.b)("h4",{id:"supported-flags-7"},"Supported Flags"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-text"},"-cm // if the input value's unit is cm/rev it is the default and optional\n-deg // if the inpit value's unit is deg/mm\n-inch // if the inpit value's unit is inch/rev\n-mpi // if the inpit value's unit is mpi\n")),Object(i.b)("h4",{id:"examples-7"},"Examples"),Object(i.b)(b.c,{mdxType:"DiscordMessages"},Object(i.b)(b.b,{author:"Anima",mdxType:"DiscordMessage"},"/sens 28.5 quake 1600"),Object(i.b)(b.b,{author:"FPSMath",bot:!0,avatar:"https://cdn.discordapp.com/avatars/792712521546465301/a8176886ccd814f17b4c5a98b62e185a.png?size=256",mdxType:"DiscordMessage"},Object(i.b)(b.a,{highlight:!0,mdxType:"DiscordMention"},"Anima"),", 0.91148")),Object(i.b)("h4",{id:"aliases-6"},"Aliases"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-text"},"sens-cm, sens-deg, sens-inch, senscm, sensdeg, sensinch, sensmpi, sens-mpi\n")))}o.isMDXComponent=!0}}]);