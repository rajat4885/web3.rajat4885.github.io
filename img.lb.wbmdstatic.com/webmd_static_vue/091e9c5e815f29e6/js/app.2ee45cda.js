(function(e){function t(t){for(var a,r,c=t[0],d=t[1],s=t[2],l=0,u=[];l<c.length;l++)r=c[l],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&u.push(o[r][0]),o[r]=0;for(a in d)Object.prototype.hasOwnProperty.call(d,a)&&(e[a]=d[a]);b&&b(t);while(u.length)u.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,r=1;r<n.length;r++){var c=n[r];0!==o[c]&&(a=!1)}a&&(i.splice(t--,1),e=d(d.s=n[0]))}return e}var a={},r={app:0},o={app:0},i=[];function c(e){return d.p+"js/"+({"load-dynamic":"load-dynamic","non-critical":"non-critical","pagetype-oncology":"pagetype-oncology","pagetype-sitefronts":"pagetype-sitefronts"}[e]||e)+"."+{"chunk-2d0c86a3":"7e3d0081","load-dynamic":"d8fc76e0","non-critical":"b036c7cd","pagetype-oncology":"4b8c0049","pagetype-sitefronts":"c29acba8"}[e]+".js"}function d(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,d),n.l=!0,n.exports}d.e=function(e){var t=[],n={"load-dynamic":1,"non-critical":1,"pagetype-oncology":1,"pagetype-sitefronts":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var a="css/"+({"load-dynamic":"load-dynamic","non-critical":"non-critical","pagetype-oncology":"pagetype-oncology","pagetype-sitefronts":"pagetype-sitefronts"}[e]||e)+"-1663251700784."+{"chunk-2d0c86a3":"31d6cfe0","load-dynamic":"ff6e6293","non-critical":"000d1863","pagetype-oncology":"dc386425","pagetype-sitefronts":"94af5d6f"}[e]+".css",o=d.p+a,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var s=i[c],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===a||l===o))return t()}var u=document.getElementsByTagName("style");for(c=0;c<u.length;c++){s=u[c],l=s.getAttribute("data-href");if(l===a||l===o)return t()}var b=document.createElement("link");b.rel="stylesheet",b.type="text/css",b.onload=t,b.onerror=function(t){var a=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=a,delete r[e],b.parentNode.removeChild(b),n(i)},b.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(b)})).then((function(){r[e]=0})));var a=o[e];if(0!==a)if(a)t.push(a[2]);else{var i=new Promise((function(t,n){a=o[e]=[t,n]}));t.push(a[2]=i);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,d.nc&&l.setAttribute("nonce",d.nc),l.src=c(e);var u=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(b);var n=o[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",u.name="ChunkLoadError",u.type=a,u.request=r,n[1](u)}o[e]=void 0}};var b=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},d.m=e,d.c=a,d.d=function(e,t,n){d.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},d.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},d.t=function(e,t){if(1&t&&(e=d(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(d.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)d.d(n,a,function(t){return e[t]}.bind(null,a));return n},d.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return d.d(t,"a",t),t},d.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},d.p="//img.lb.wbmdstatic.com/webmd_static_vue/091e9c5e815f29e6/",d.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var b=l;i.push([0,"webmd-elements","chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("b723")},"45d7":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.d(t,"a",(function(){return q})),n.d(t,"d",(function(){return H["a"]})),n.d(t,"c",(function(){return L["a"]})),n.d(t,"b",(function(){return M}));var a=n("a026"),r=(n("31bd"),n("caf9")),o=n("de67"),i=n.n(o),c=n("678a"),d=n.n(c),s=n("daa3"),l=n("5bad"),u=n.n(l),b=n("17fd"),f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:{"ia-art":e.isInfinite},attrs:{id:"app"}},[n("div",{staticClass:"page-skwebmdton"},[n("RouteDef"),n("PageData"),n("NoSsr",[n("Omniture",{attrs:{"not-pageview":!0}})],1)],1),n("header",{staticClass:"global-header",attrs:{role:"banner",tabindex:"-1","data-js":"global-header"}},[n("WebmdRow",{staticClass:"pane",attrs:{span:24,id:"ContentPane0",tabindex:"-1"}},[n("WebmdSiteFrontNavConfig",{attrs:{"chronic-id":"091e9c5e81d15a00"}}),n("WebmdSiteFrontStyleConfig",{attrs:{"chronic-id":"091e9c5e81d15a01"}})],1),n("WebmdRow",{staticClass:"pane",attrs:{span:24,id:"ContentPane1",tabindex:"-1"}},[n("WebmdGlobalHeader",{attrs:{"chronic-id":"091e9c5e813b6dde"}})],1)],1),n("WebmdRow",{staticClass:"container global-container-1",attrs:{tabindex:"-1","data-js":"global-container-1"}},[n("WebmdRow",{staticClass:"pane",attrs:{span:24,id:"ContentPane10",tabindex:"-1"}},[n("WebmdVueAd",{attrs:{"chronic-id":"091e9c5e8137aeea"}})],1)],1),n("main",{staticClass:"resp-2-col-rr",attrs:{id:"global-main",role:"main",tabindex:"-1","data-js":"global-main"}},[n("WebmdRow",{attrs:{span:24}},[n("WebmdCol",{staticClass:"main-container main-container-2",attrs:{xs:24,sm:24,md:17,lg:13,xl:13,id:"main-container",tabindex:"-1","data-js":"main-container-2"}},[n("WebmdRow",{staticClass:"pane",attrs:{id:"ContentPane28",tabindex:"-1"}},[n("WebmdGlobalBreadcrumb",{attrs:{"chronic-id":"091e9c5e81394036"}}),n("ChannelPromoDriver",{attrs:{"chronic-id":"091e9c5e817c35d9"}}),n("WebmdGlobalAttribution",{attrs:{"chronic-id":"091e9c5e81437ec1"}})],1),n("WebmdRow",{staticClass:"pane",attrs:{id:"ContentPane30",tabindex:"-1"}},[n("WebmdExerciseCalculator",{attrs:{"chronic-id":"091e9c5e815f5fc8"}})],1),n("WebmdRow",{staticClass:"pane",attrs:{id:"ContentPane31",tabindex:"-1"}},[n("WebmdToolFooter",{attrs:{"chronic-id":"091e9c5e815f29e7"}})],1),n("WebmdRow",{staticClass:"pane",attrs:{id:"ContentPane34",tabindex:"-1"}},[n("ChannelTopPicks",{attrs:{"chronic-id":"091e9c5e813ece14"}}),n("ChannelFurtherReading",{attrs:{"chronic-id":"091e9c5e813ece13"}})],1)],1),n("div",{staticClass:"main-container main-container-3",attrs:{tabindex:"-1","data-js":"main-container-3"}},[n("WebmdRow",{staticClass:"pane",attrs:{id:"ContentPane37",tabindex:"-1"}},[n("ChannelTodayOnWebmd",{attrs:{"chronic-id":"091e9c5e813ece15"}})],1),n("WebmdRow",{staticClass:"pane",attrs:{id:"ContentPane38",tabindex:"-1"}},[n("WebmdVueAd",{attrs:{"chronic-id":"091e9c5e8137aeec"}})],1),n("WebmdRow",{staticClass:"pane",attrs:{id:"ContentPane40",tabindex:"-1"}}),n("WebmdRow",{staticClass:"pane",attrs:{id:"ContentPane42",tabindex:"-1"}}),n("WebmdRow",{staticClass:"pane",attrs:{id:"ContentPane44",tabindex:"-1"}},[n("WebmdNewsletter",{attrs:{"chronic-id":"091e9c5e813ece19"}})],1)],1)],1)],1),n("WebmdRow",{staticClass:"container global-container-2",attrs:{span:24,tabindex:"-1","data-js":"global-container-2"}},[n("WebmdRow",{staticClass:"pane",attrs:{id:"ContentPane47",tabindex:"-1"}},[n("WebmdVueAd",{attrs:{"chronic-id":"091e9c5e81641fd1"}})],1),n("WebmdRow",{staticClass:"pane",attrs:{id:"ContentPane50",tabindex:"-1"}},[n("HealthSolutions",{attrs:{"chronic-id":"091e9c5e813ae61b"}}),n("WebmdGlobalMoreFromWebmd",{attrs:{"chronic-id":"091e9c5e813ae61c"}})],1)],1),n("footer",{attrs:{role:"contentinfo",tabindex:"-1","data-js":"global-footer"}},[n("WebmdRow",{staticClass:"pane",attrs:{id:"ContentPane55",tabindex:"-1"}},[n("WebmdGlobalFooter",{attrs:{"chronic-id":"091e9c5e8137e40d"}})],1)],1),n("WebmdRow",{staticClass:"pane",attrs:{id:"ContentPane99",tabindex:"-1"}},[n("GlobalPlaceholderBottom",{attrs:{"chronic-id":"091e9c5e8137aeed"}}),n("WebmdVueAd",{attrs:{"chronic-id":"091e9c5e813aa1a8"}})],1)],1)},p=[],m=(n("64c4"),n("ef35"),n("a465")),h=n.n(m),g=(n("e70c"),n("be30")),y=n.n(g),C=(n("59bb"),n("780a")),W=n.n(C),v=n("783c"),w=(n("76fc"),n("d6be")),P=n("f92d"),x=n.n(P),R=n("bae8"),S=n("ecb8"),j=n("5e6b"),O=n("bc7d"),k=n("27a2"),A=n("2eef"),E=n("2dc8"),G=n("a46d"),T=n("bc5d"),_=n("64ed"),F=n("e680"),N=n("93d6"),$={name:"app",components:{NoSsr:x.a,PageData:w["a"],RouteDef:R["a"],WebmdCol:W.a,WebmdRow:y.a,WebmdContainer:h.a,WebmdSiteFrontNavConfig:S["a"],WebmdSiteFrontStyleConfig:j["a"],WebmdGlobalHeader:O["a"],WebmdVueAd:k["a"],WebmdGlobalBreadcrumb:A["a"],ChannelPromoDriver:E["a"],WebmdGlobalAttribution:G["a"],WebmdExerciseCalculator:T["a"],WebmdToolFooter:_["a"],ChannelTopPicks:function(){return n.e("non-critical").then(n.bind(null,"8f94"))},ChannelFurtherReading:function(){return n.e("non-critical").then(n.bind(null,"cec8"))},ChannelTodayOnWebmd:function(){return n.e("non-critical").then(n.bind(null,"8591"))},WebmdNewsletter:F["a"],HealthSolutions:function(){return n.e("non-critical").then(n.bind(null,"1a36"))},WebmdGlobalMoreFromWebmd:function(){return n.e("non-critical").then(n.bind(null,"1f17"))},WebmdGlobalFooter:function(){return n.e("non-critical").then(n.bind(null,"a989"))},GlobalPlaceholderBottom:N["a"]},mounted:function(){n.e("chunk-2d0c86a3").then(n.bind(null,"557d")).then((function(e){})),Promise.all(this.$vue.adsPromiseQueue).then((function(){v["a"].display()}));var e=this,t=this.$el.querySelectorAll("[data-metrics-module]");t.forEach((function(t){e.$bindMetrics(t,{})}))},computed:{isInfinite:function(){return this.$store.getters["flow/isInfinite"]}},errorCaptured:function(e,t,n){var a=[/WebmdGlobalHeader/],r=t.$vnode.tag,o=t.$attrs,i=t.$route.fullPath,c=a.some((function(e){return e.test(r)}));return console.log(JSON.stringify({category:"PAGE_SSR_ERROR",error:e.toString()||"Unable to render",tag:r,info:n,attributes:o,stackTrace:e.stack,route:i})),c}},D=$,B=(n("de87"),n("2877")),I=Object(B["a"])(D,f,p,!1,null,null,null),M=I.exports,H=n("e71f"),L=n("d382"),V=n("cd89");n("a67c");a["default"].prototype.pluginsInstalled||(a["default"].mixin(s["a"]),a["default"].use(u.a),a["default"].use(V["a"]),a["default"].use(b["a"]),a["default"].use(r["a"],{preLoad:1.3,attempt:1}),i.a.use(d.a),a["default"].prototype.pluginsInstalled=!0);var q="091e9c5e815f29e6";a["default"].prototype.$capId="091e9c5e815f29e6"},de87:function(e,t,n){"use strict";n("45d7")}});
//# sourceMappingURL=app.2ee45cda.js.map