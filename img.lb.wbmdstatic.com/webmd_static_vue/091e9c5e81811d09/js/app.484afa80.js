(function(e){function t(t){for(var n,o,d=t[0],s=t[1],c=t[2],l=0,u=[];l<d.length;l++)o=d[l],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&u.push(r[o][0]),r[o]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);b&&b(t);while(u.length)u.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],n=!0,o=1;o<a.length;o++){var d=a[o];0!==r[d]&&(n=!1)}n&&(i.splice(t--,1),e=s(s.s=a[0]))}return e}var n={},o={app:0},r={app:0},i=[];function d(e){return s.p+"js/"+({"load-dynamic":"load-dynamic","pagetype-oncology":"pagetype-oncology","pagetype-sitefronts":"pagetype-sitefronts"}[e]||e)+"."+{"chunk-2d0c86a3":"7e3d0081","load-dynamic":"01ab1ff7","pagetype-oncology":"4b8c0049","pagetype-sitefronts":"c937e87f"}[e]+".js"}function s(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.e=function(e){var t=[],a={"load-dynamic":1,"pagetype-oncology":1,"pagetype-sitefronts":1};o[e]?t.push(o[e]):0!==o[e]&&a[e]&&t.push(o[e]=new Promise((function(t,a){for(var n="css/"+({"load-dynamic":"load-dynamic","pagetype-oncology":"pagetype-oncology","pagetype-sitefronts":"pagetype-sitefronts"}[e]||e)+"-1663244035864."+{"chunk-2d0c86a3":"31d6cfe0","load-dynamic":"02300e10","pagetype-oncology":"dc386425","pagetype-sitefronts":"94af5d6f"}[e]+".css",r=s.p+n,i=document.getElementsByTagName("link"),d=0;d<i.length;d++){var c=i[d],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===n||l===r))return t()}var u=document.getElementsByTagName("style");for(d=0;d<u.length;d++){c=u[d],l=c.getAttribute("data-href");if(l===n||l===r)return t()}var b=document.createElement("link");b.rel="stylesheet",b.type="text/css",b.onload=t,b.onerror=function(t){var n=t&&t.target&&t.target.src||r,i=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=n,delete o[e],b.parentNode.removeChild(b),a(i)},b.href=r;var p=document.getElementsByTagName("head")[0];p.appendChild(b)})).then((function(){o[e]=0})));var n=r[e];if(0!==n)if(n)t.push(n[2]);else{var i=new Promise((function(t,a){n=r[e]=[t,a]}));t.push(n[2]=i);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=d(e);var u=new Error;c=function(t){l.onerror=l.onload=null,clearTimeout(b);var a=r[e];if(0!==a){if(a){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",u.name="ChunkLoadError",u.type=n,u.request=o,a[1](u)}r[e]=void 0}};var b=setTimeout((function(){c({type:"timeout",target:l})}),12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=n,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(a,n,function(t){return e[t]}.bind(null,n));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="//img.lb.wbmdstatic.com/webmd_static_vue/091e9c5e81811d09/",s.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var b=l;i.push([0,"webmd-elements","chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("b723")},"56d7":function(e,t,a){"use strict";a.d(t,"a",(function(){return q})),a.d(t,"d",(function(){return D["a"]})),a.d(t,"c",(function(){return V["a"]})),a.d(t,"b",(function(){return B}));var n=a("a026"),o=(a("31bd"),a("caf9")),r=a("de67"),i=a.n(r),d=a("678a"),s=a.n(d),c=a("daa3"),l=a("5bad"),u=a.n(l),b=a("17fd"),p=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"page-skwebmdton"},[a("RouteDef"),a("PageData"),a("NoSsr",[a("Omniture",{attrs:{"not-pageview":!0}})],1)],1),a("header",{staticClass:"global-header",attrs:{role:"banner",tabindex:"-1","data-js":"global-header"}},[a("WebmdRow",{staticClass:"pane",attrs:{span:24,id:"ContentPane1",tabindex:"-1"}},[a("WebmdGlobalHeader",{attrs:{"chronic-id":"091e9c5e813b6dde"}})],1)],1),a("WebmdRow",{staticClass:"container global-container-1",attrs:{tabindex:"-1","data-js":"global-container-1"}},[a("WebmdRow",{staticClass:"pane",attrs:{span:24,id:"ContentPane10",tabindex:"-1"}},[a("WebmdVueAd",{attrs:{"chronic-id":"091e9c5e8137aeea"}})],1),a("WebmdRow",{staticClass:"pane",attrs:{span:24,id:"ContentPane13",tabindex:"-1"}},[e._e()],1),a("WebmdRow",{staticClass:"pane",attrs:{span:24,id:"ContentPane14",tabindex:"-1"}},[a("PillIdentifierHeader",{attrs:{"chronic-id":"091e9c5e8181b4ff"}})],1)],1),a("main",{staticClass:"resp-2-col-rr",attrs:{id:"global-main",role:"main",tabindex:"-1","data-js":"global-main"}},[a("WebmdRow",{attrs:{span:24}},[a("WebmdCol",{staticClass:"main-container main-container-2",attrs:{xs:24,sm:24,md:17,lg:13,xl:13,id:"main-container",tabindex:"-1","data-js":"main-container-2"}},[a("WebmdRow",{staticClass:"pane",attrs:{id:"ContentPane28",tabindex:"-1"}},[a("PillIdentifierContent",{attrs:{"chronic-id":"091e9c5e8181b988"}})],1)],1),a("div",{staticClass:"main-container main-container-3",attrs:{tabindex:"-1","data-js":"main-container-3"}},[a("WebmdRow",{staticClass:"pane",attrs:{id:"ContentPane38",tabindex:"-1"}},[a("div",{attrs:{id:"ad-mob-pill-container"}},[e.isMobile?a("PillLazyLoadAd",{attrs:{pos:e.lazyLoadPos}}):e._e(),e.isNotMobile?a("WebmdVueAd",{attrs:{"chronic-id":"091e9c5e8137aeec"}}):e._e()],1)]),a("WebmdRow",{staticClass:"pane",attrs:{id:"ContentPane39",tabindex:"-1"}},[a("ChannelTodayOnWebmd",{attrs:{"chronic-id":"091e9c5e8183ed99"}})],1),a("WebmdRow",{staticClass:"pane",attrs:{id:"ContentPane40",tabindex:"-1"}},[a("WebmdVueAd",{attrs:{"chronic-id":"091e9c5e8183ed9a"}})],1),a("WebmdRow",{staticClass:"pane",attrs:{id:"ContentPane41",tabindex:"-1"}},[a("ChannelRecommendedForYou",{attrs:{"chronic-id":"091e9c5e8183e5d9"}})],1)],1)],1)],1),a("WebmdRow",{staticClass:"container global-container-2",attrs:{span:24,tabindex:"-1","data-js":"global-container-2"}},[a("WebmdRow",{staticClass:"pane",attrs:{id:"ContentPane47",tabindex:"-1"}},[a("WebmdVueAd",{attrs:{"chronic-id":"091e9c5e81641fd1"}})],1),a("WebmdRow",{staticClass:"pane",attrs:{id:"ContentPane50",tabindex:"-1"}},[a("HealthSolutions",{attrs:{"chronic-id":"091e9c5e813ae61b"}}),a("WebmdGlobalMoreFromWebmd",{attrs:{"chronic-id":"091e9c5e813ae61c"}})],1)],1),a("footer",{attrs:{role:"contentinfo",tabindex:"-1","data-js":"global-footer"}},[a("WebmdRow",{staticClass:"pane",attrs:{id:"ContentPane55",tabindex:"-1"}},[a("WebmdGlobalFooter",{attrs:{"chronic-id":"091e9c5e8137e40d"}})],1)],1),a("WebmdRow",{staticClass:"pane",attrs:{id:"ContentPane99",tabindex:"-1"}},[a("GlobalPlaceholderBottom",{attrs:{"chronic-id":"091e9c5e8137aeed"}}),a("WebmdVueAd",{attrs:{"chronic-id":"091e9c5e813aa1a8"}})],1)],1)},f=[],m=(a("64c4"),a("ef35"),a("a465")),h=a.n(m),g=(a("e70c"),a("be30")),y=a.n(g),C=(a("59bb"),a("780a")),v=a.n(C),w=a("783c"),P=(a("76fc"),a("d6be")),W=a("f92d"),x=a.n(W),R=a("fe14"),j=a("bc7d"),O=a("27a2"),S=a("2eef"),_=a("ffb7"),A=a("8d76"),M=a("8591"),k=a("f252"),E=a("1a36"),L=a("1f17"),G=a("a989"),N=a("93d6"),T=a("9923"),H={name:"app",components:{NoSsr:x.a,PageData:P["a"],RouteDef:R["a"],WebmdCol:v.a,WebmdRow:y.a,WebmdContainer:h.a,WebmdGlobalHeader:j["a"],WebmdVueAd:O["a"],WebmdGlobalBreadcrumb:S["a"],PillIdentifierHeader:_["a"],PillIdentifierContent:A["a"],ChannelTodayOnWebmd:M["a"],ChannelRecommendedForYou:k["a"],HealthSolutions:E["a"],WebmdGlobalMoreFromWebmd:L["a"],WebmdGlobalFooter:G["a"],GlobalPlaceholderBottom:N["a"],PillLazyLoadAd:T["a"]},data:function(){return{isMobile:!1,isNotMobile:!1,lazyLoadPos:"2026"}},mounted:function(){window&&window.matchMedia("(max-width: 480px)").matches&&(this.isMobile=!0),window&&window.matchMedia("(min-width: 481px)").matches&&(this.isNotMobile=!0),a.e("chunk-2d0c86a3").then(a.bind(null,"557d")).then((function(e){})),Promise.all(this.$vue.adsPromiseQueue).then((function(){w["a"].display()}));var e=this,t=this.$el.querySelectorAll("[data-metrics-module]");t.forEach((function(t){e.$bindMetrics(t,{})}))},errorCaptured:function(e,t,a){var n=[/WebmdGlobalHeader/],o=t.$vnode.tag,r=t.$attrs,i=t.$route.fullPath,d=n.some((function(e){return e.test(o)}));return console.log(JSON.stringify({category:"PAGE_SSR_ERROR",error:e.toString()||"Unable to render",tag:o,info:a,attributes:r,stackTrace:e.stack,route:i})),d}},I=H,$=(a("b318"),a("2877")),F=Object($["a"])(I,p,f,!1,null,null,null),B=F.exports,D=a("88c1"),V=a("e000"),z=a("cd89");a("a67c");n["default"].prototype.pluginsInstalled||(n["default"].mixin(c["a"]),n["default"].use(u.a),n["default"].use(z["a"]),n["default"].use(b["a"]),n["default"].use(o["a"],{preLoad:1.3,attempt:1}),i.a.use(s.a),n["default"].prototype.pluginsInstalled=!0);var q="091e9c5e81811d09";n["default"].prototype.$capId="091e9c5e81811d09"},b318:function(e,t,a){"use strict";a("fa7c")},fa7c:function(e,t,a){}});
//# sourceMappingURL=app.484afa80.js.map