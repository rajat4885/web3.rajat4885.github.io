(function(t){function e(e){for(var n,i,s=e[0],d=e[1],c=e[2],l=0,u=[];l<s.length;l++)i=s[l],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&u.push(r[i][0]),r[i]=0;for(n in d)Object.prototype.hasOwnProperty.call(d,n)&&(t[n]=d[n]);f&&f(e);while(u.length)u.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],n=!0,i=1;i<a.length;i++){var s=a[i];0!==r[s]&&(n=!1)}n&&(o.splice(e--,1),t=d(d.s=a[0]))}return t}var n={},i={app:0},r={app:0},o=[];function s(t){return d.p+"js/"+({"load-dynamic":"load-dynamic","pagetype-sitefronts":"pagetype-sitefronts"}[t]||t)+"."+{"chunk-2d0c86a3":"7e3d0081","chunk-2d20fc98":"1a1907c3","load-dynamic":"6b10ee3a","pagetype-sitefronts":"1910af20"}[t]+".js"}function d(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,d),a.l=!0,a.exports}d.e=function(t){var e=[],a={"load-dynamic":1,"pagetype-sitefronts":1};i[t]?e.push(i[t]):0!==i[t]&&a[t]&&e.push(i[t]=new Promise((function(e,a){for(var n="css/"+({"load-dynamic":"load-dynamic","pagetype-sitefronts":"pagetype-sitefronts"}[t]||t)+"-1663768201882."+{"chunk-2d0c86a3":"31d6cfe0","chunk-2d20fc98":"31d6cfe0","load-dynamic":"3e097287","pagetype-sitefronts":"cbe40b52"}[t]+".css",r=d.p+n,o=document.getElementsByTagName("link"),s=0;s<o.length;s++){var c=o[s],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===n||l===r))return e()}var u=document.getElementsByTagName("style");for(s=0;s<u.length;s++){c=u[s],l=c.getAttribute("data-href");if(l===n||l===r)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var n=e&&e.target&&e.target.src||r,o=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=n,delete i[t],f.parentNode.removeChild(f),a(o)},f.href=r;var m=document.getElementsByTagName("head")[0];m.appendChild(f)})).then((function(){i[t]=0})));var n=r[t];if(0!==n)if(n)e.push(n[2]);else{var o=new Promise((function(e,a){n=r[t]=[e,a]}));e.push(n[2]=o);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,d.nc&&l.setAttribute("nonce",d.nc),l.src=s(t);var u=new Error;c=function(e){l.onerror=l.onload=null,clearTimeout(f);var a=r[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+n+": "+i+")",u.name="ChunkLoadError",u.type=n,u.request=i,a[1](u)}r[t]=void 0}};var f=setTimeout((function(){c({type:"timeout",target:l})}),12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(e)},d.m=t,d.c=n,d.d=function(t,e,a){d.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},d.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},d.t=function(t,e){if(1&e&&(t=d(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(d.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)d.d(a,n,function(e){return t[e]}.bind(null,n));return a},d.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return d.d(e,"a",e),e},d.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},d.p="//img.wbmdstatic.com/webmd_static_vue/091e9c5e82215264/",d.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var f=l;o.push([0,"webmd-elements","chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("b723")},"56d7":function(t,e,a){"use strict";a.d(e,"a",(function(){return T})),a.d(e,"d",(function(){return H["a"]})),a.d(e,"c",(function(){return D["a"]})),a.d(e,"b",(function(){return R}));var n=a("a026"),i=(a("31bd"),a("caf9")),r=a("de67"),o=a.n(r),s=a("678a"),d=a.n(s),c=a("daa3"),l=a("5bad"),u=a.n(l),f=a("17fd"),m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:{"ia-art":t.isInfinite},attrs:{id:"app"}},[a("div",{staticClass:"page-skwebmdton"},[a("RouteDef"),a("PageData"),a("NoSsr",[a("Omniture",{attrs:{"not-pageview":!0}})],1)],1),a("header",{staticClass:"global-header",attrs:{role:"banner",tabindex:"-1","data-js":"global-header"}},[a("div",{staticClass:"pane",attrs:{id:"ContentPane0",tabindex:"-1"}}),a("div",{staticClass:"pane",attrs:{id:"ContentPane1",tabindex:"-1"}},[a("HtmlModule",{attrs:{"chronic-id":"091e9c5e821552a3"}}),a("WebmdCmsStore",{attrs:{"chronic-id":"091e9c5e820faabe"}}),a("WebmdFedStore",{attrs:{"chronic-id":"091e9c5e820faabf"}}),a("WebmdFedRouter",{attrs:{"chronic-id":"091e9c5e820faac0"}}),a("HtmlModule",{attrs:{"chronic-id":"091e9c5e82215265"}})],1)]),a("div",{staticClass:"container global-container-1",attrs:{tabindex:"-1","data-js":"global-container-1"}},[a("div",{staticClass:"pane",attrs:{id:"ContentPane2",tabindex:"-1"}},[a("HtmlModule",{attrs:{"chronic-id":"091e9c5e82283e58"}}),a("WebmdMastheadMeta",{attrs:{"chronic-id":"091e9c5e822d9961"}})],1)]),a("main",{staticClass:"resp-2-col-flex",attrs:{id:"global-main",role:"main",tabindex:"-1","data-js":"global-main"}},[t._m(0),a("div",{staticClass:"main-container main-container-2",attrs:{tabindex:"-1","data-js":"main-container-2"}},[a("div",{staticClass:"pane",attrs:{id:"ContentPane4",tabindex:"-1"}},[a("FedVideo",{attrs:{"chronic-id":"091e9c5e8221546b"}}),a("FedAssetsFooterDriver",{attrs:{"chronic-id":"091e9c5e822a590f"}})],1)]),a("div",{staticClass:"main-container main-container-3",attrs:{tabindex:"-1","data-js":"main-container-3"}},[a("div",{staticClass:"pane",attrs:{id:"ContentPane5",tabindex:"-1"}},[a("WebmdVueAd",{attrs:{"chronic-id":"091e9c5e82127912"}})],1)]),a("div",{staticClass:"main-container full-width main-container-4",attrs:{tabindex:"-1","data-js":"main-container-4"}},[a("div",{staticClass:"pane",attrs:{id:"ContentPane6",tabindex:"-1"}},[a("CpfPromoModule",{attrs:{"chronic-id":"091e9c5e82452d8d"}})],1)]),a("div",{staticClass:"main-container main-container-5",attrs:{tabindex:"-1","data-js":"main-container-5"}},[a("div",{staticClass:"pane",attrs:{id:"ContentPane7",tabindex:"-1"}},[a("HtmlModule",{attrs:{"chronic-id":"091e9c5e82312111"}})],1)]),t._m(1),a("div",{staticClass:"main-container full-width main-container-7",attrs:{tabindex:"-1","data-js":"main-container-7"}},[a("div",{staticClass:"pane",attrs:{id:"ContentPane9",tabindex:"-1"}},[a("WebmdVueAd",{attrs:{"chronic-id":"091e9c5e822296df"}})],1)]),t._m(2),t._m(3),a("div",{staticClass:"main-container full-width main-container-10",attrs:{tabindex:"-1","data-js":"main-container-10"}},[a("div",{staticClass:"pane",attrs:{id:"ContentPane12",tabindex:"-1"}},[a("WebmdVueAd",{attrs:{"chronic-id":"091e9c5e8215abef"}}),a("HtmlModule",{attrs:{"chronic-id":"091e9c5e82283e59"}}),a("HtmlModule",{attrs:{"chronic-id":"091e9c5e8221546d"}})],1)])]),a("footer",{attrs:{role:"contentinfo",tabindex:"-1","data-js":"global-footer"}},[a("div",{staticClass:"pane",attrs:{id:"ContentPane13",tabindex:"-1"}},[a("WebmdFedFooter",{attrs:{"chronic-id":"091e9c5e820faac4"}})],1)]),a("WebmdRow",{staticClass:"pane",attrs:{id:"ContentPane99",tabindex:"-1"}})],1)},p=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main-container full-width main-container-1",attrs:{tabindex:"-1","data-js":"main-container-1"}},[a("div",{staticClass:"pane",attrs:{id:"ContentPane3",tabindex:"-1"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main-container main-container-6",attrs:{tabindex:"-1","data-js":"main-container-6"}},[a("div",{staticClass:"pane",attrs:{id:"ContentPane8",tabindex:"-1"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main-container main-container-8",attrs:{tabindex:"-1","data-js":"main-container-8"}},[a("div",{staticClass:"pane",attrs:{id:"ContentPane10",tabindex:"-1"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main-container main-container-9",attrs:{tabindex:"-1","data-js":"main-container-9"}},[a("div",{staticClass:"pane",attrs:{id:"ContentPane11",tabindex:"-1"}})])}],b=(a("e70c"),a("ef35"),a("be30")),h=a.n(b),v=a("783c"),g=(a("76fc"),a("d6be")),C=a("f92d"),y=a.n(C),x=a("d39c"),P=a("65f9"),j=a("c4ab"),_=a("a0bd"),w=a("2d1a"),S=a("dc9a"),M=a("e856"),E=a("27a2"),W=a("f367"),k=a("9770"),O={name:"app",components:{NoSsr:y.a,PageData:g["a"],RouteDef:x["a"],WebmdRow:h.a,HtmlModule:P["a"],WebmdCmsStore:j["a"],WebmdFedStore:_["a"],WebmdFedRouter:x["a"],WebmdMastheadMeta:w["a"],FedVideo:S["a"],FedAssetsFooterDriver:M["a"],WebmdVueAd:E["a"],CpfPromoModule:W["a"],WebmdFedFooter:k["a"]},mounted:function(){a.e("chunk-2d0c86a3").then(a.bind(null,"557d")).then((function(t){})),Promise.all(this.$vue.adsPromiseQueue).then((function(){v["a"].display()}));var t=this,e=this.$el.querySelectorAll("[data-metrics-module]");e.forEach((function(e){t.$bindMetrics(e,{})}))},computed:{isInfinite:function(){return this.$store.getters["flow/isInfinite"]}},errorCaptured:function(t,e,a){var n=[/WebmdGlobalHeader/],i=e.$vnode.tag,r=e.$attrs,o=e.$route.fullPath,s=n.some((function(t){return t.test(i)}));return console.log(JSON.stringify({category:"PAGE_SSR_ERROR",error:t.toString()||"Unable to render",tag:i,info:a,attributes:r,stackTrace:t.stack,route:o})),s}},F=O,A=(a("7bc0"),a("2877")),$=Object(A["a"])(F,m,p,!1,null,null,null),R=$.exports,H=a("b7a3"),D=a("f383"),N=a("cd89");a("a67c");n["default"].prototype.pluginsInstalled||(n["default"].mixin(c["a"]),n["default"].use(u.a),n["default"].use(N["a"]),n["default"].use(f["a"]),n["default"].use(i["a"],{preLoad:1.3,attempt:1}),o.a.use(d.a),n["default"].prototype.pluginsInstalled=!0);var T="091e9c5e82215264";n["default"].prototype.$capId="091e9c5e82215264"},"7bc0":function(t,e,a){"use strict";a("da81")},da81:function(t,e,a){}});
//# sourceMappingURL=app.0508a0a0.js.map