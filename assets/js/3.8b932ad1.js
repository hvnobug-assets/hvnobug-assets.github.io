(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{415:function(t,e,n){"use strict";n.d(e,"d",(function(){return i})),n.d(e,"a",(function(){return a})),n.d(e,"i",(function(){return r})),n.d(e,"f",(function(){return c})),n.d(e,"g",(function(){return l})),n.d(e,"h",(function(){return u})),n.d(e,"b",(function(){return h})),n.d(e,"e",(function(){return f})),n.d(e,"k",(function(){return d})),n.d(e,"l",(function(){return p})),n.d(e,"c",(function(){return g})),n.d(e,"j",(function(){return m}));n(25),n(30),n(130),n(91),n(131),n(66),n(27),n(236),n(46),n(237),n(31);var i=/#.*$/,s=/\.(md|html)$/,a=/\/$/,r=/^[a-z]+:/i;function o(t){return decodeURI(t).replace(i,"").replace(s,"")}function c(t){return r.test(t)}function l(t){return/^mailto:/.test(t)}function u(t){return/^tel:/.test(t)}function h(t){if(c(t))return t;var e=t.match(i),n=e?e[0]:"",s=o(t);return a.test(s)?t:s+".html"+n}function f(t,e){var n=t.hash,s=function(t){var e=t.match(i);if(e)return e[0]}(e);return(!s||n===s)&&o(t.path)===o(e)}function d(t,e,n){if(c(e))return{type:"external",path:e};n&&(e=function(t,e,n){var i=t.charAt(0);if("/"===i)return t;if("?"===i||"#"===i)return e+t;var s=e.split("/");n&&s[s.length-1]||s.pop();for(var a=t.replace(/^\//,"").split("/"),r=0;r<a.length;r++){var o=a[r];".."===o?s.pop():"."!==o&&s.push(o)}""!==s[0]&&s.unshift("");return s.join("/")}(e,n));for(var i=o(e),s=0;s<t.length;s++)if(o(t[s].regularPath)===i)return Object.assign({},t[s],{type:"page",path:h(t[s].path)});return console.error('[vuepress] No matching page found for sidebar item "'.concat(e,'"')),{}}function p(t,e,n,i){var s=n.pages,a=n.themeConfig,r=i&&a.locales&&a.locales[i]||a;if("auto"===(t.frontmatter.sidebar||r.sidebar||a.sidebar))return function(t){var e=g(t.headers||[]);return[{type:"group",collapsable:!1,title:t.title,path:null,children:e.map((function(e){return{type:"auto",title:e.title,basePath:t.path,path:t.path+"#"+e.slug,children:e.children||[]}}))}]}(t);var o=r.sidebar||a.sidebar;if(o){var c=function(t,e){if(Array.isArray(e))return{base:"/",config:e};for(var n in e)if(0===(i=t,/(\.html|\/)$/.test(i)?i:i+"/").indexOf(encodeURI(n)))return{base:n,config:e[n]};var i;return{}}(e,o),l=c.base,u=c.config;return u?u.map((function(t){return function t(e,n,i){var s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;if("string"==typeof e)return d(n,e,i);if(Array.isArray(e))return Object.assign(d(n,e[0],i),{title:e[1]});s>3&&console.error("[vuepress] detected a too deep nested sidebar group.");var a=e.children||[];return 0===a.length&&e.path?Object.assign(d(n,e.path,i),{title:e.title}):{type:"group",path:e.path,title:e.title,sidebarDepth:e.sidebarDepth,children:a.map((function(e){return t(e,n,i,s+1)})),collapsable:!1!==e.collapsable}}(t,s,l)})):[]}return[]}function g(t){var e;return(t=t.map((function(t){return Object.assign({},t)}))).forEach((function(t){2===t.level?e=t:e&&(e.children||(e.children=[])).push(t)})),t.filter((function(t){return 2===t.level}))}function m(t){return Object.assign(t,{type:t.items&&t.items.length?"links":"link"})}},419:function(t,e,n){"use strict";var i={name:"DropdownTransition",methods:{setHeight:function(t){t.style.height=t.scrollHeight+"px"},unsetHeight:function(t){t.style.height=""}}},s=(n(454),n(2)),a=Object(s.a)(i,(function(){var t=this.$createElement;return(this._self._c||t)("transition",{attrs:{name:"dropdown"},on:{enter:this.setHeight,"after-enter":this.unsetHeight,"before-leave":this.setHeight}},[this._t("default")],2)}),[],!1,null,null,null);e.a=a.exports},420:function(t,e,n){"use strict";var i=n(0),s=n(445);i({target:"String",proto:!0,forced:n(446)("link")},{link:function(t){return s(this,"a","href",t)}})},421:function(t,e,n){},422:function(t,e,n){},423:function(t,e,n){"use strict";var i=n(0),s=n(137).trim;i({target:"String",proto:!0,forced:n(449)("trim")},{trim:function(){return s(this)}})},424:function(t,e,n){var i=n(8),s=n(4),a=n(132),r=n(243),o=n(11).f,c=n(69).f,l=n(134),u=n(136),h=n(239),f=n(26),d=n(1),p=n(68).set,g=n(450),m=n(3)("match"),v=s.RegExp,b=v.prototype,_=/a/g,k=/a/g,C=new v(_)!==_,$=h.UNSUPPORTED_Y;if(i&&a("RegExp",!C||$||d((function(){return k[m]=!1,v(_)!=_||v(k)==k||"/a/i"!=v(_,"i")})))){for(var x=function(t,e){var n,i=this instanceof x,s=l(t),a=void 0===e;if(!i&&s&&t.constructor===x&&a)return t;C?s&&!a&&(t=t.source):t instanceof x&&(a&&(e=u.call(t)),t=t.source),$&&(n=!!e&&e.indexOf("y")>-1)&&(e=e.replace(/y/g,""));var o=r(C?new v(t,e):v(t,e),i?this:b,x);return $&&n&&p(o,{sticky:n}),o},y=function(t){t in x||o(x,t,{configurable:!0,get:function(){return v[t]},set:function(e){v[t]=e}})},L=c(v),w=0;L.length>w;)y(L[w++]);b.constructor=x,x.prototype=b,f(s,"RegExp",x)}g("RegExp")},425:function(t,e,n){},426:function(t,e,n){},427:function(t,e,n){},428:function(t,e,n){},429:function(t,e,n){},430:function(t,e,n){},431:function(t,e){t.exports=function(t){return null==t}},432:function(t,e,n){},433:function(t,e,n){},434:function(t,e,n){},435:function(t,e,n){},436:function(t,e,n){},437:function(t,e,n){},438:function(t,e,n){},439:function(t,e,n){},444:function(t,e,n){"use strict";n.r(e);n(235);var i=n(415),s={name:"SidebarGroup",props:["item","open","collapsable","depth"],components:{DropdownTransition:n(419).a},beforeCreate:function(){this.$options.components.SidebarLinks=n(444).default},methods:{isActive:i.e}},a=(n(462),n(2)),r=Object(a.a)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"sidebar-group",class:[{collapsable:t.collapsable,"is-sub-group":0!==t.depth},"depth-"+t.depth]},[t.item.path?n("router-link",{staticClass:"sidebar-heading clickable",class:{open:t.open,active:t.isActive(t.$route,t.item.path)},attrs:{to:t.item.path},nativeOn:{click:function(e){return t.$emit("toggle")}}},[n("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?n("span",{staticClass:"arrow",class:t.open?"down":"right"}):t._e()]):n("p",{staticClass:"sidebar-heading",class:{open:t.open},on:{click:function(e){return t.$emit("toggle")}}},[n("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?n("span",{staticClass:"arrow",class:t.open?"down":"right"}):t._e()]),t._v(" "),n("DropdownTransition",[t.open||!t.collapsable?n("SidebarLinks",{staticClass:"sidebar-group-items",attrs:{items:t.item.children,sidebarDepth:"item.sidebarDepth",depth:t.depth+1}}):t._e()],1)],1)}),[],!1,null,null,null).exports;n(139),n(66);function o(t,e,n,i){return t("router-link",{props:{to:e,activeClass:"",exactActiveClass:""},class:{active:i,"sidebar-link":!0}},n)}function c(t,e,n,s,a){var r=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1;return!e||r>a?null:t("ul",{class:"sidebar-sub-headers"},e.map((function(e){var l=Object(i.e)(s,n+"#"+e.slug);return t("li",{class:"sidebar-sub-header"},[o(t,n+"#"+e.slug,e.title,l),c(t,e.children,n,s,a,r+1)])})))}var l={functional:!0,props:["item","sidebarDepth"],render:function(t,e){var n=e.parent,s=n.$page,a=(n.$site,n.$route),r=n.$themeConfig,l=n.$themeLocaleConfig,u=e.props,h=u.item,f=u.sidebarDepth,d=Object(i.e)(a,h.path),p="auto"===h.type?d||h.children.some((function(t){return Object(i.e)(a,h.basePath+"#"+t.slug)})):d,g="external"===h.type?function(t,e,n){return t("a",{attrs:{href:e,target:"_blank",rel:"noopener noreferrer"},class:{"sidebar-link":!0}},[n,t("OutboundLink")])}(t,h.path,h.title||h.path):o(t,h.path,h.title||h.path,p),m=[s.frontmatter.sidebarDepth,f,l.sidebarDepth,r.sidebarDepth,1].find((function(t){return void 0!==t})),v=l.displayAllHeaders||r.displayAllHeaders;return"auto"===h.type?[g,c(t,h.children,h.basePath,a,m)]:(p||v)&&h.headers&&!i.d.test(h.path)?[g,c(t,Object(i.c)(h.headers),h.path,a,m)]:g}};n(463);function u(t,e){return"group"===e.type&&e.children.some((function(e){return"group"===e.type?u(t,e):"page"===e.type&&Object(i.e)(t,e.path)}))}var h={name:"SidebarLinks",components:{SidebarGroup:r,SidebarLink:Object(a.a)(l,void 0,void 0,!1,null,null,null).exports},props:["items","depth","sidebarDepth"],data:function(){return{openGroupIndex:0}},created:function(){this.refreshIndex()},watch:{$route:function(){this.refreshIndex()}},methods:{refreshIndex:function(){var t=function(t,e){for(var n=0;n<e.length;n++){var i=e[n];if(u(t,i))return n}return-1}(this.$route,this.items);t>-1&&(this.openGroupIndex=t)},toggleGroup:function(t){this.openGroupIndex=t===this.openGroupIndex?-1:t},isActive:function(t){return Object(i.e)(this.$route,t.regularPath)}}},f=Object(a.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.items.length?n("ul",{staticClass:"sidebar-links"},t._l(t.items,(function(e,i){return n("li",{key:i},["group"===e.type?n("SidebarGroup",{attrs:{item:e,open:i===t.openGroupIndex,collapsable:e.collapsable||e.collapsible,depth:t.depth},on:{toggle:function(e){return t.toggleGroup(i)}}}):n("SidebarLink",{attrs:{sidebarDepth:t.sidebarDepth,item:e}})],1)})),0):t._e()}),[],!1,null,null,null);e.default=f.exports},445:function(t,e,n){var i=n(18),s=/"/g;t.exports=function(t,e,n,a){var r=String(i(t)),o="<"+e;return""!==n&&(o+=" "+n+'="'+String(a).replace(s,"&quot;")+'"'),o+">"+r+"</"+e+">"}},446:function(t,e,n){var i=n(1);t.exports=function(t){return i((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},447:function(t,e,n){"use strict";n(421)},448:function(t,e,n){"use strict";n(422)},449:function(t,e,n){var i=n(1),s=n(138);t.exports=function(t){return i((function(){return!!s[t]()||"​᠎"!="​᠎"[t]()||s[t].name!==t}))}},450:function(t,e,n){"use strict";var i=n(50),s=n(11),a=n(3),r=n(8),o=a("species");t.exports=function(t){var e=i(t),n=s.f;r&&e&&!e[o]&&n(e,o,{configurable:!0,get:function(){return this}})}},451:function(t,e,n){"use strict";var i,s=n(0),a=n(28).f,r=n(14),o=n(133),c=n(18),l=n(135),u=n(49),h="".endsWith,f=Math.min,d=l("endsWith");s({target:"String",proto:!0,forced:!!(u||d||(i=a(String.prototype,"endsWith"),!i||i.writable))&&!d},{endsWith:function(t){var e=String(c(this));o(t);var n=arguments.length>1?arguments[1]:void 0,i=r(e.length),s=void 0===n?i:f(r(n),i),a=String(t);return h?h.call(e,a,s):e.slice(s-a.length,s)===a}})},452:function(t,e,n){"use strict";n(425)},453:function(t,e,n){"use strict";n(426)},454:function(t,e,n){"use strict";n(427)},455:function(t,e,n){"use strict";n(428)},456:function(t,e,n){"use strict";n(429)},457:function(t,e,n){"use strict";n(430)},458:function(t,e,n){"use strict";n(432)},459:function(t,e,n){var i=n(52),s=n(19),a=n(37);t.exports=function(t){return"string"==typeof t||!s(t)&&a(t)&&"[object String]"==i(t)}},460:function(t,e,n){"use strict";n(433)},461:function(t,e,n){"use strict";n(434)},462:function(t,e,n){"use strict";n(435)},463:function(t,e,n){"use strict";n(436)},464:function(t,e,n){"use strict";n(437)},465:function(t,e,n){"use strict";n(438)},466:function(t,e,n){},467:function(t,e,n){"use strict";n(439)},485:function(t,e,n){"use strict";n.r(e);n(48),n(66),n(36),n(90),n(420);var i=n(45),s=n(13),a=n(415),r={computed:{footer:function(){var t=Object.assign({Powered:{text:"Vuepress",link:{url:"https://vuepress.vuejs.org/",target:"_blank"},icon:{name:"power"}},Theme:{text:"Dew",link:{url:"/pages/theme-document/"},icon:{name:"theme"}}},this.$site.themeConfig.footer||{});return Object.keys(t).map((function(e){var n=t[e],r={name:e,value:n.text||"Unknown"};if(n.link&&n.link.url){var o=Object(s.a)({},n.link);o.external=Object(a.f)(o.url),r.link=o}return n.icon&&("string"==typeof n.icon?r.icon={name:n.icon}:"object"===Object(i.a)(n.icon)&&n.icon.name&&(r.icon=n.icon)),r}))}}},o=(n(447),n(2)),c=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",t._l(t.footer,(function(e){return n("div",{staticClass:"github-badge"},[e.link&&e.link.url?n("a",{attrs:{href:e.link.url,rel:e.link.external?"external nofollow noopener noreferrer":"",target:""+(e.link.target?e.link.target:e.link.external?"_blank":"")}},[n("span",{staticClass:"badge-subject"},[t._v(t._s(e.name)+"\n                "),e.icon&&e.icon.name?n("vp-icon",{attrs:{name:e.icon.name,color:e.icon.color,size:e.icon.size}}):t._e()],1),t._v(" "),n("span",{staticClass:"badge-value"},[t._v(t._s(e.value))])]):[n("span",{staticClass:"badge-subject"},[t._v(t._s(e.name)+"\n               "),e.icon&&e.icon.name?n("vp-icon",{attrs:{name:e.icon.name,color:e.icon.color,size:e.icon.size}}):t._e()],1),t._v(" "),n("span",{staticClass:"badge-value"},[t._v(t._s(e.value))])]],2)})),0)}),[],!1,null,null,null).exports,l=(n(47),n(67),n(5),n(235),{props:{item:{required:!0}},computed:{link:function(){return Object(a.b)(this.item.link)},icon:function(){if(this.item.icon){if("string"==typeof this.item.icon)return{name:this.item.icon};if("object"===Object(i.a)(this.item.icon)&&this.item.icon.name)return this.item.icon}return null},exact:function(){var t=this;return this.$site.locales?Object.keys(this.$site.locales).some((function(e){return e===t.link})):"/"===this.link}},methods:{isExternal:a.f,isMailto:a.g,isTel:a.h,focusoutAction:function(){this.$emit("focusout")}}}),u=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isExternal(t.link)||!1===t.item.route?n("a",{staticClass:"nav-link external",attrs:{href:t.link,target:t.isMailto(t.link)||t.isTel(t.link)?null:"_blank",rel:t.isMailto(t.link)||t.isTel(t.link)?null:"noopener noreferrer"},on:{focusout:t.focusoutAction}},[t.icon&&t.icon.name?n("vp-icon",{attrs:{name:t.icon.name,color:t.icon.color,size:t.icon.size}}):t._e(),t._v("\n    "+t._s(t.item.text)+"\n    "),n("OutboundLink")],1):n("router-link",{staticClass:"nav-link",attrs:{to:t.link,exact:t.exact},nativeOn:{focusout:function(e){return t.focusoutAction(e)}}},[t.icon&&t.icon.name?n("vp-icon",{attrs:{name:t.icon.name,color:t.icon.color,size:t.icon.size}}):t._e(),t._v("\n    "+t._s(t.item.text)+"\n")],1)}),[],!1,null,null,null).exports,h={data:function(){return{typed:null}},components:{NavLink:u},computed:{author:function(){return this.data.author||this.$site.themeConfig.author||"Author"},title:function(){return this.$site.themeConfig.title||this.data.heroText||this.$title||"Hello"},description:function(){return this.$site.themeConfig.description||this.data.tagline||this.$description||"Welcome to my VuePress site"},data:function(){return this.$page.frontmatter},typedConfig:function(){return this.$site.themeConfig.typed?Object.assign({enable:!0,subTitle1:"",subTitle2:this.description,startDelay:300,typeSpeed:100,loop:!0,backSpeed:50,showCursor:!0},this.$site.themeConfig.typed):void 0},actionLink:function(){return{link:this.data.actionLink,text:this.data.actionText}}},mounted:function(){var t=this;this.typedConfig&&this.typedConfig.enable&&this.$nextTick((function(){if(t.typedConfig.hitokoto){var e=t;fetch("https://v1.hitokoto.cn").then((function(t){return t.json()})).then((function(t){e.typedConfig.subTitle2=t.hitokoto,e.initTyped()})).catch((function(t){console.error(t),e.initTyped()}))}else t.initTyped()}))},methods:{initTyped:function(){var t=document.createElement("script");t.src="//cdn.jsdelivr.net/npm/typed.js",document.body.append(t);var e=this;t.onload=function(){e.typed=new Typed(".description>span",Object(s.a)(Object(s.a)({},e.typedConfig),{},{strings:[e.typedConfig.subTitle1,e.typedConfig.subTitle2]}))}}}},f=(n(448),Object(o.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"home",attrs:{"aria-labelledby":"main-title"}},[n("header",{staticClass:"hero"},[t.data.heroImage?n("img",{attrs:{src:t.data.heroImage,alt:t.data.heroAlt||"hero"}}):t._e(),t._v(" "),null!==t.data.heroText?n("h1",{attrs:{id:"main-title"}},[t._v(t._s(t.title))]):t._e(),t._v(" "),n("p",{staticClass:"description"},[t.typedConfig&&t.typedConfig.enable?n("span"):n("span",[t._v(" "+t._s(t.description))])]),t._v(" "),t.data.actionText&&t.data.actionLink?n("p",{staticClass:"action"},[n("NavLink",{staticClass:"action-button",attrs:{item:t.actionLink}})],1):t._e()]),t._v(" "),n("hr"),t._v(" "),t.data.features&&t.data.features.length?n("div",{staticClass:"features"},t._l(t.data.features,(function(e,i){return n("div",{key:i,staticClass:"feature"},[n("h2",[t._v(t._s(e.title))]),t._v(" "),n("p",[t._v(t._s(e.details))])])})),0):t._e(),t._v(" "),n("Content",{staticClass:"theme-dew-content custom"}),t._v(" "),t.data.footer?n("div",{staticClass:"footer"},[t._v("\n        "+t._s(t.data.footer)+"\n    ")]):t._e()],1)}),[],!1,null,null,null).exports),d=(n(244),n(25),n(238),n(130),n(91),n(27),n(240),n(236),n(423),n(131),n(424),n(92),n(451),n(46),n(237),n(241)),p=n.n(d),g=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,i=p()(e,"title","");return p()(e,"frontmatter.tags")&&(i+=" ".concat(e.frontmatter.tags.join(" "))),n&&(i+=" ".concat(n)),m(t,i)},m=function(t,e){var n=function(t){return t.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&")},i=new RegExp("[^\0-]"),s=t.split(/\s+/g).map((function(t){return t.trim()})).filter((function(t){return!!t}));if(i.test(t))return s.some((function(t){return e.toLowerCase().indexOf(t)>-1}));var a=t.endsWith(" ");return new RegExp(s.map((function(t,e){return s.length!==e+1||a?"(?=.*\\b".concat(n(t),"\\b)"):"(?=.*\\b".concat(n(t),")")})).join("")+".+","gi").test(e)},v={name:"SearchBox",data:function(){return{query:"",focused:!1,focusIndex:0,placeholder:void 0}},computed:{showSuggestions:function(){return this.focused&&this.suggestions&&this.suggestions.length},suggestions:function(){var t=this.query.trim().toLowerCase();if(t){for(var e=this.$site.pages,n=this.$site.themeConfig.searchMaxSuggestions||5,i=this.$localePath,s=[],a=0;a<e.length&&!(s.length>=n);a++){var r=e[a];if(this.getPageLocalePath(r)===i&&this.isSearchable(r))if(g(t,r))s.push(r);else if(r.headers)for(var o=0;o<r.headers.length&&!(s.length>=n);o++){var c=r.headers[o];c.title&&g(t,r,c.title)&&s.push(Object.assign({},r,{path:r.path+"#"+c.slug,header:c}))}}return s}},alignRight:function(){return(this.$site.themeConfig.nav||[]).length+(this.$site.repo?1:0)<=2}},mounted:function(){this.placeholder=this.$site.themeConfig.searchPlaceholder||"",document.addEventListener("keydown",this.onHotkey)},beforeDestroy:function(){document.removeEventListener("keydown",this.onHotkey)},methods:{getPageLocalePath:function(t){for(var e in this.$site.locales||{})if("/"!==e&&0===t.path.indexOf(e))return e;return"/"},isSearchable:function(t){var e=null;return null===e||(e=Array.isArray(e)?e:new Array(e)).filter((function(e){return t.path.match(e)})).length>0},onHotkey:function(t){t.srcElement===document.body&&["s","/"].includes(t.key)&&(this.$refs.input.focus(),t.preventDefault())},onUp:function(){this.showSuggestions&&(this.focusIndex>0?this.focusIndex--:this.focusIndex=this.suggestions.length-1)},onDown:function(){this.showSuggestions&&(this.focusIndex<this.suggestions.length-1?this.focusIndex++:this.focusIndex=0)},go:function(t){this.showSuggestions&&(this.$router.push(this.suggestions[t].path),this.query="",this.focusIndex=0)},focus:function(t){this.focusIndex=t},unfocus:function(){this.focusIndex=-1}}},b=(n(452),Object(o.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"search-box"},[n("input",{ref:"input",class:{focused:t.focused},attrs:{"aria-label":"Search",placeholder:t.placeholder,autocomplete:"off",spellcheck:"false"},domProps:{value:t.query},on:{input:function(e){t.query=e.target.value},focus:function(e){t.focused=!0},blur:function(e){t.focused=!1},keyup:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.go(t.focusIndex)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"up",38,e.key,["Up","ArrowUp"])?null:t.onUp(e)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"down",40,e.key,["Down","ArrowDown"])?null:t.onDown(e)}]}}),t._v(" "),t.showSuggestions?n("ul",{staticClass:"suggestions",class:{"align-right":t.alignRight},on:{mouseleave:t.unfocus}},t._l(t.suggestions,(function(e,i){return n("li",{key:i,staticClass:"suggestion",class:{focused:i===t.focusIndex},on:{mousedown:function(e){return t.go(i)},mouseenter:function(e){return t.focus(i)}}},[n("a",{attrs:{href:e.path},on:{click:function(t){t.preventDefault()}}},[n("span",{staticClass:"page-title"},[t._v(t._s(e.title||e.path))]),t._v(" "),e.header?n("span",{staticClass:"header"},[t._v("> "+t._s(e.header.title))]):t._e()])])})),0):t._e()])}),[],!1,null,null,null).exports),_=(n(453),Object(o.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sidebar-button",on:{click:function(e){return t.$emit("toggle-sidebar")}}},[n("svg",{staticClass:"icon",attrs:{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",viewBox:"0 0 448 512"}},[n("path",{attrs:{fill:"currentColor",d:"M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"}})])])}),[],!1,null,null,null).exports),k=(n(70),n(64)),C=n(419),$=n(242),x=n.n($),y={components:{NavLink:u,DropdownTransition:C.a},data:function(){return{open:!1}},props:{item:{required:!0}},computed:{dropdownAriaLabel:function(){return this.item.ariaLabel||this.item.text},icon:function(){if(this.item.icon){if("string"==typeof this.item.icon)return{name:this.item.icon};if("object"===Object(i.a)(this.item.icon)&&this.item.icon.name)return this.item.icon}return null}},methods:{toggle:function(){this.open=!this.open},isLastItemOfArray:function(t,e){return x()(e)===t}},watch:{$route:function(){this.open=!1}}},L=(n(455),{components:{NavLink:u,DropdownLink:Object(o.a)(y,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dropdown-wrapper",class:{open:t.open}},[n("button",{attrs:{class:"dropdown-title",type:"button","aria-label":t.dropdownAriaLabel},on:{click:t.toggle}},[n("span",{staticClass:"title"},[t.icon&&t.icon.name?n("vp-icon",{attrs:{name:t.icon.name,color:t.icon.color,size:t.icon.size}}):t._e(),t._v("\n        "+t._s(t.item.text)+"\n    ")],1),t._v(" "),n("span",{staticClass:"arrow",class:t.open?"down":"right"})]),t._v(" "),n("DropdownTransition",[n("ul",{directives:[{name:"show",rawName:"v-show",value:t.open,expression:"open"}],staticClass:"nav-dropdown"},t._l(t.item.items,(function(e,i){return n("li",{key:e.link||i,staticClass:"dropdown-item"},["links"===e.type?n("h4",[t._v(t._s(e.text))]):t._e(),t._v(" "),"links"===e.type?n("ul",{staticClass:"dropdown-subitem-wrapper"},t._l(e.items,(function(i){return n("li",{key:i.link,staticClass:"dropdown-subitem"},[n("NavLink",{attrs:{item:i},on:{focusout:function(n){t.isLastItemOfArray(i,e.items)&&t.isLastItemOfArray(e,t.item.items)&&t.toggle()}}})],1)})),0):n("NavLink",{attrs:{item:e},on:{focusout:function(n){t.isLastItemOfArray(e,t.item.items)&&t.toggle()}}})],1)})),0)])],1)}),[],!1,null,null,null).exports},computed:{userNav:function(){return this.$themeLocaleConfig.nav||this.$site.themeConfig.nav||[]},nav:function(){var t=this,e=this.$site.locales;if(e&&Object.keys(e).length>1){var n=this.$page.path,i=this.$router.options.routes,s=this.$site.themeConfig.locales||{},a={text:this.$themeLocaleConfig.selectText||"Languages",ariaLabel:this.$themeLocaleConfig.ariaLabel||"Select language",items:Object.keys(e).map((function(a){var r,o=e[a],c=s[a]&&s[a].label||o.lang;return o.lang===t.$lang?r=n:(r=n.replace(t.$localeConfig.path,a),i.some((function(t){return t.path===r}))||(r=a)),{text:c,link:r}}))};return[].concat(Object(k.a)(this.userNav),[a])}return this.userNav},userLinks:function(){return(this.nav||[]).map((function(t){return Object.assign(Object(a.j)(t),{items:(t.items||[]).map(a.j)})}))},repoLink:function(){var t=this.$site.themeConfig.repo;return t?/^https?:/.test(t)?t:"https://github.com/".concat(t):null},repoLabel:function(){if(this.repoLink){if(this.$site.themeConfig.repoLabel)return this.$site.themeConfig.repoLabel;for(var t=this.repoLink.match(/^https?:\/\/[^/]+/)[0],e=["GitHub","GitLab","Bitbucket"],n=0;n<e.length;n++){var i=e[n];if(new RegExp(i,"i").test(t))return i}return"Source"}}}}),w=(n(456),Object(o.a)(L,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.userLinks.length||t.repoLink?n("nav",{staticClass:"nav-links"},[t._l(t.userLinks,(function(t){return n("div",{key:t.link,staticClass:"nav-item"},["links"===t.type?n("DropdownLink",{attrs:{item:t}}):n("NavLink",{attrs:{item:t}})],1)})),t._v(" "),t.repoLink?n("a",{staticClass:"repo-link",attrs:{href:t.repoLink,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n    "+t._s(t.repoLabel)+"\n    "),n("OutboundLink")],1):t._e()],2):t._e()}),[],!1,null,null,null).exports);function S(t,e){return t.ownerDocument.defaultView.getComputedStyle(t,null)[e]}var O={components:{SidebarButton:_,NavLinks:w,SearchBox:b,AlgoliaSearchBox:{}},data:function(){return{linksWrapMaxWidth:null}},mounted:function(){var t=this,e=parseInt(S(this.$el,"paddingLeft"))+parseInt(S(this.$el,"paddingRight")),n=function(){document.documentElement.clientWidth<719?t.linksWrapMaxWidth=null:t.linksWrapMaxWidth=t.$el.offsetWidth-e-(t.$refs.siteName&&t.$refs.siteName.offsetWidth||0)};n(),window.addEventListener("resize",n,!1)},computed:{algolia:function(){return this.$themeLocaleConfig.algolia||this.$site.themeConfig.algolia||{}},isAlgoliaSearch:function(){return this.algolia&&this.algolia.apiKey&&this.algolia.indexName}}},j=(n(457),Object(o.a)(O,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"navbar"},[n("SidebarButton",{on:{"toggle-sidebar":function(e){return t.$emit("toggle-sidebar")}}}),t._v(" "),n("router-link",{staticClass:"home-link",attrs:{to:t.$localePath}},[t.$site.themeConfig.avatar||t.$site.themeConfig.logo?n("img",{staticClass:"logo",attrs:{alt:t.$siteTitle,src:t.$site.themeConfig.avatar||t.$site.themeConfig.logo}}):t._e(),t._v(" "),t.$siteTitle?n("span",{ref:"siteName",staticClass:"site-name",class:{"can-hide":t.$site.themeConfig.avatar||t.$site.themeConfig.logo}},[t._v("\n            "+t._s(t.$siteTitle)+"\n        ")]):t._e()]),t._v(" "),n("div",{staticClass:"links",style:t.linksWrapMaxWidth?{"max-width":t.linksWrapMaxWidth+"px"}:{}},[t.isAlgoliaSearch?n("AlgoliaSearchBox",{attrs:{options:t.algolia}}):!1!==t.$site.themeConfig.search&&!1!==t.$page.frontmatter.search?n("SearchBox"):t._e(),t._v(" "),n("NavLinks",{staticClass:"can-hide"})],1)],1)}),[],!1,null,null,null).exports),T=n(431),E=n.n(T),I={name:"PageEdit",computed:{lastUpdated:function(){return this.$page.lastUpdated},lastUpdatedText:function(){return"string"==typeof this.$themeLocaleConfig.lastUpdated?this.$themeLocaleConfig.lastUpdated:"string"==typeof this.$site.themeConfig.lastUpdated?this.$site.themeConfig.lastUpdated:"Last Updated"},editLink:function(){var t=E()(this.$page.frontmatter.editLink)?this.$site.themeConfig.editLinks:this.$page.frontmatter.editLink,e=this.$site.themeConfig,n=e.repo,i=e.docsDir,s=void 0===i?"":i,a=e.docsBranch,r=void 0===a?"master":a,o=e.docsRepo,c=void 0===o?n:o;return t&&c&&this.$page.relativePath?this.createEditLink(n,c,s,r,this.$page.relativePath):null},editLinkText:function(){return this.$themeLocaleConfig.editLinkText||this.$site.themeConfig.editLinkText||"Edit this page"}},methods:{createEditLink:function(t,e,n,i,s){return/bitbucket.org/.test(t)?(a.i.test(e)?e:t).replace(a.a,"")+"/src"+"/".concat(i,"/")+(n?n.replace(a.a,"")+"/":"")+s+"?mode=edit&spa=0&at=".concat(i,"&fileviewer=file-view-default"):(a.i.test(e)?e:"https://github.com/".concat(e)).replace(a.a,"")+"/edit"+"/".concat(i,"/")+(n?n.replace(a.a,"")+"/":"")+s}}},P=(n(458),Object(o.a)(I,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.editLink?n("footer",{staticClass:"page-edit"},[n("div",{staticClass:"edit-link"},[n("a",{attrs:{href:t.editLink,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.editLinkText))]),t._v(" "),n("OutboundLink")],1),t._v(" "),t.lastUpdated?n("div",{staticClass:"last-updated"},[n("span",{staticClass:"prefix"},[t._v(t._s(t.lastUpdatedText)+":")]),t._v(" "),n("span",{staticClass:"time"},[t._v(t._s(t.lastUpdated))])]):t._e()]):t._e()}),[],!1,null,null,null).exports),D=n(459),N=n.n(D),A={name:"PageNav",props:["sidebarItems"],computed:{prev:function(){return W(U.PREV,this)},next:function(){return W(U.NEXT,this)}}};var U={NEXT:{resolveLink:function(t,e){return H(t,e,1)},getThemeLinkConfig:function(t){return t.nextLinks},getPageLinkConfig:function(t){return t.frontmatter.next}},PREV:{resolveLink:function(t,e){return H(t,e,-1)},getThemeLinkConfig:function(t){return t.prevLinks},getPageLinkConfig:function(t){return t.frontmatter.prev}}};function W(t,e){var n=e.$themeConfig,i=e.$page,s=e.$route,r=e.$site,o=e.sidebarItems,c=t.resolveLink,l=t.getThemeLinkConfig,u=t.getPageLinkConfig,h=l(n),f=u(i),d=E()(f)?h:f;return!1===d?void 0:N()(d)?Object(a.k)(r.pages,d,s.path):c(i,o)}function H(t,e,n){var i=[];!function t(e,n){for(var i=0,s=e.length;i<s;i++)"group"===e[i].type?t(e[i].children||[],n):n.push(e[i])}(e,i);for(var s=0;s<i.length;s++){var a=i[s];if("page"===a.type&&a.path===decodeURIComponent(t.path))return i[s+n]}}var R=A,z=(n(460),{components:{PageEdit:P,PageNav:Object(o.a)(R,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.prev||t.next?n("div",{staticClass:"page-nav"},[n("hr"),t._v(" "),n("p",{staticClass:"inner"},[t.prev?n("span",{staticClass:"prev"},[t._v("\n      ←\n      "),t.prev?n("router-link",{staticClass:"prev",attrs:{to:t.prev.path}},[t._v(t._s(t.prev.title||t.prev.path))]):t._e()],1):t._e(),t._v(" "),t.next?n("span",{staticClass:"next"},[t.next?n("router-link",{attrs:{to:t.next.path}},[t._v(t._s(t.next.title||t.next.path))]):t._e(),t._v("\n      →\n    ")],1):t._e()])]):t._e()}),[],!1,null,null,null).exports},props:["sidebarItems"]}),M=(n(461),Object(o.a)(z,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"page"},[t._t("top"),t._v(" "),n("Content",{staticClass:"theme-dew-content"}),t._v(" "),n("PageEdit"),t._v(" "),n("PageNav",t._b({},"PageNav",{sidebarItems:t.sidebarItems},!1)),t._v(" "),t._t("bottom")],2)}),[],!1,null,null,null).exports),G={name:"Sidebar",components:{SidebarLinks:n(444).default,NavLinks:w},props:["items"]},B=(n(464),Object(o.a)(G,(function(){var t=this.$createElement,e=this._self._c||t;return e("aside",{staticClass:"sidebar"},[e("NavLinks"),this._v(" "),this._t("top"),this._v(" "),e("SidebarLinks",{attrs:{depth:0,items:this.items}}),this._v(" "),this._t("bottom")],2)}),[],!1,null,null,null).exports),q={data:function(){return{firstLoad:!0}},methods:{handleLoading:function(){var t=this,e=this.$frontmatter.home&&null==sessionStorage.getItem("firstLoad")?1e3:0;setTimeout((function(){t.firstLoad=!1,null==sessionStorage.getItem("firstLoad")&&sessionStorage.setItem("firstLoad",!1)}),e)}},mounted:function(){this.handleLoading()}},V=Object(o.a)(q,(function(){var t=this.$createElement,e=this._self._c||t;return this.firstLoad?e("LoadingPage"):this._e()}),[],!1,null,null,null).exports,X={computed:{loadingPage:function(){return Object.assign({image:"https://cdn.jsdelivr.net/gh/hvnobug/assets/home/images/loading.gif",title:this.$site.title||this.$localeConfig.title||this.$site.themeConfig.title,description:this.$site.description||this.$localeConfig.description||this.$site.themeConfig.description},this.$site.themeConfig.loadingPage||{})}}},Y=(n(465),Object(o.a)(X,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"loading-container"},[t.$frontmatter.home?[n("span",{staticClass:"loading-title"},[t._v(t._s(t.loadingPage.title))]),t._v(" "),n("p",{staticClass:"loading-description"},[t._v(t._s(t.loadingPage.description))])]:t._e(),t._v(" "),n("img",{staticClass:"loading-img",attrs:{src:t.loadingPage.image}})],2)}),[],!1,null,null,null).exports),F=(n(466),{components:{DropdownTransition:C.a,Home:f,Page:M,Sidebar:B,Navbar:j,Footer:c,PageContent:V,LoadingPage:Y},data:function(){return{isSidebarOpen:!1,firstLoad:!0}},computed:{shouldShowNavbar:function(){var t=this.$site.themeConfig;return!1!==this.$page.frontmatter.navbar&&!1!==t.navbar&&(this.$title||t.logo||t.repo||t.nav||this.$themeLocaleConfig.nav)},shouldShowSidebar:function(){var t=this.$page.frontmatter;return!t.home&&!1!==t.sidebar&&this.sidebarItems.length},sidebarItems:function(){return Object(a.l)(this.$page,this.$page.regularPath,this.$site,this.$localePath)},pageClasses:function(){var t=this.$page.frontmatter.pageClass;return[{"no-navbar":!this.shouldShowNavbar,"sidebar-open":this.isSidebarOpen,"no-sidebar":!this.shouldShowSidebar},t]}},mounted:function(){var t=this;this.handleLoading(),this.$router.afterEach((function(){t.isSidebarOpen=!1}));var e=document.createElement("script");e.src="//at.alicdn.com/t/font_1559708_kd4aaykz29.js",document.body.append(e),e.onload=function(){console.info("加载 iconfont")}},methods:{toggleSidebar:function(t){this.isSidebarOpen="boolean"==typeof t?t:!this.isSidebarOpen,this.$emit("toggle-sidebar",this.isSidebarOpen)},onTouchStart:function(t){this.touchStart={x:t.changedTouches[0].clientX,y:t.changedTouches[0].clientY}},onTouchEnd:function(t){var e=t.changedTouches[0].clientX-this.touchStart.x,n=t.changedTouches[0].clientY-this.touchStart.y;Math.abs(e)>Math.abs(n)&&Math.abs(e)>40&&(e>0&&this.touchStart.x<=80?this.toggleSidebar(!0):this.toggleSidebar(!1))},handleLoading:function(){var t=this,e=this.$frontmatter.home&&null==sessionStorage.getItem("firstLoad")?1e3:0;setTimeout((function(){t.firstLoad=!1,null==sessionStorage.getItem("firstLoad")&&sessionStorage.setItem("firstLoad",!1)}),e)}}}),J=(n(467),Object(o.a)(F,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"theme-container",class:t.pageClasses,on:{touchstart:t.onTouchStart,touchend:t.onTouchEnd}},[t.firstLoad?n("transition",{attrs:{"enter-active-class":"animated fadeInDown"}},[n("LoadingPage")],1):t._e(),t._v(" "),n("div",{class:{hide:t.firstLoad}},[t.shouldShowNavbar?n("Navbar",{on:{"toggle-sidebar":t.toggleSidebar}}):t._e(),t._v(" "),n("div",{staticClass:"sidebar-mask",on:{click:function(e){return t.toggleSidebar(!1)}}}),t._v(" "),n("Sidebar",{attrs:{items:t.sidebarItems},on:{"toggle-sidebar":t.toggleSidebar}},[t._t("sidebar-top"),t._v(" "),t._t("sidebar-bottom")],2),t._v(" "),n("div",{staticClass:"page-content animated fadeInDown"},[n("transition",{attrs:{"enter-active-class":"animated fadeInDown"}},[t.$page.frontmatter.home?n("Home"):n("Page",{attrs:{"sidebar-items":t.sidebarItems}},[t._t("page-top"),t._v(" "),t._t("page-bottom")],2)],1)],1),t._v(" "),n("Footer",{class:"footer "+(t.$page.frontmatter.home?"home":"page")+"-footer"})],1)],1)}),[],!1,null,null,null));e.default=J.exports}}]);