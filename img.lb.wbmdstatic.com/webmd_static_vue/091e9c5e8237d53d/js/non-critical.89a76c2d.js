(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["non-critical"],{"0c41":function(t,e,i){},"0c7d":function(t,e,i){"use strict";i("1bd7")},"0f0a":function(t,e,i){"use strict";i("c39b")},"1bd7":function(t,e,i){},2164:function(t,e,i){var n=i("cae7");function r(t,e,i){var r=-1,o=t.criteria,s=e.criteria,l=o.length,a=i.length;while(++r<l){var d=n(o[r],s[r]);if(d){if(r>=a)return d;var c=i[r];return d*("desc"==c?-1:1)}}return t.index-e.index}t.exports=r},4063:function(t,e,i){"use strict";i("44e9")},"44e9":function(t,e,i){},"6a5c":function(t,e,i){var n=i("7948"),r=i("badf"),o=i("97d3"),s=i("d4b2"),l=i("b047"),a=i("2164"),d=i("cd9d");function c(t,e,i){var c=-1;e=n(e.length?e:[d],l(r));var u=o(t,(function(t,i,r){var o=n(e,(function(e){return e(t)}));return{criteria:o,index:++c,value:t}}));return s(u,(function(t,e){return a(t,e,i)}))}t.exports=c},8591:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("aside",{staticClass:"module module-unified-right-rail module-ed-urr",attrs:{"data-e2e":"ed-urr",id:"ed-urr","data-metrics-module":"ed-urr",role:t.isSiteFronts?"complementary":""}},[i("header",[i("h3",[t._v(t._s(t.title))])]),i("WebmdRow",{staticClass:"unified_right_inner_v2_rdr"},[t.items.length>0?i("div",{staticClass:"tow_list"},[t._l(t.items,(function(e,n){return[i("div",{key:t.createKey(n),class:e.class,attrs:{id:t.entryFmtId(n),"data-pos":e.pos,"data-sizes":"[[1,10], 'fluid']","data-scp":"{'mod': 'ed-urr'}"}},[i("a",{directives:[{name:"metric",rawName:"v-metric:track",value:{module:"ed-urr",link:e.metricsLink},expression:"{\n\t\t\t\t\t\t\tmodule: 'ed-urr',\n\t\t\t\t\t\t\tlink: item.metricsLink\n\t\t\t\t\t\t}",arg:"track"}],attrs:{href:e.link,target:"_top"}},[i("div",{staticClass:"imgPlaceholder"}),i("h4",{staticClass:"tow-no-image-h4"},[t._v(" "+t._s(e.title)+" ")]),i("p",[t._v(" "+t._s(e.paragraph)+" ")])])])]})),i("SetRendered",{attrs:{"chronic-id":t.chronicId,data:{items:t.items,moduleData:t.getModuleByChronicId}}})],2):t._e(),i("div",{key:t.createKey(t.index),staticClass:"ad-no-css ad-921 entry_fmt entry_fmt_st",attrs:{id:"ads2-pos-921-ad-right"}},[[i("Webmdad",{attrs:{pos:"921","data-scp":"{'strnativekey':'xP8Dby8p66dX1vZpKKVKX4fu'}",keys:"{'strnativekey':'xP8Dby8p66dX1vZpKKVKX4fu'}"}})]],2)])],1)},r=[],o=i("448a"),s=i.n(o),l=i("27a2"),a=i("ebb8"),d=i("3852"),c=i.n(d),u=i("6747"),m=i.n(u),h=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div")},f=[],_=i("2593"),p=i.n(_),g={name:"SetRendered",props:{chronicId:{type:String,required:!0},data:{type:Object,required:!0}},created:function(){var t=this.data.moduleData;t=p()(t,["module_data.module_title"]),t.items=this.data.items.map((function(t){return p()(t,["img","imgalt"])})),this.$store.commit("cms/UPDATE_STATE",{key:this.chronicId,value:t})}},v=g,y=i("2877"),k=Object(y["a"])(v,h,f,!1,null,"5209209f",null),I=k.exports,w={components:{Webmdad:l["a"],SetRendered:I},props:{chronicId:{type:String,required:!0},isDev:{type:Boolean,default:!1}},data:function(){return{items:[],moduleByChronicId:[],title:"Today on WebMD",renderAd:!1,isMobile:!0,imagesData:[]}},computed:{getItems:function(){var t=this,e=this.getModuleByChronicId,i=9001,n=c()(e,"module_data.links.link")&&m()(e.module_data.links.link)?e.module_data.links.link.map((function(e){return{title:e.action_text?e.action_text:"",paragraph:e.link_text?e.link_text:"",link:c()(e,"link_url.link_friendlyUrl")?e.link_url.link_friendlyUrl:"",img:"".concat(t.getImagePath(e)),imgalt:c()(e,"link_source_icon.alt")?e.link_source_icon.alt:"",class:"entry_fmt",pos:i++,metricsLink:"".concat(i-9001).concat(t.getMetricsLink(e.link_text||""))}})):[];return n},isInfinite:function(){return this.$store.getters["flow/isInfinite"]},getTitle:function(){var t=this.getModuleByChronicId,e=null;return c()(t,"module_data.module_title.title")?e=t.module_data.module_title.title:c()(t,"module_data.module_title")&&(e=t.module_data.module_title),e||(e=this.title),e},getModuleByChronicId:function(){var t=this.$store.getters["cms/modules"](this.chronicId);return t},isSiteFronts:function(){var t=this.$store.getters["cms/siteFronts"];return!!c()(t,"mode")&&"sitefronts"===t.mode.toLowerCase()}},methods:{entryFmtId:function(t){return"x".concat(t+52)},getImagePath:function(t){var e,i,n,r,o="webmd/consumer_assets/site_images/article_thumbnails/other/symptom_checker_man_woman_other/493x335_symptom_checker_man_woman_other.jpg",s="?resize=110px:*&amp;output-quality=50",l=null===(e=this.$store)||void 0===e||null===(i=e.state)||void 0===i||null===(n=i.pagedata)||void 0===n||null===(r=n.omniture)||void 0===r?void 0:r.image_server_url,a="";return a=c()(t,"link_source_icon.path")?t.link_source_icon.path:o,l+a+s},getMetricsLink:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";switch(t.toLowerCase()){case"video":return"vid";case"feature":return"ftr";case"slideshow":case"slide show":return"ss";case"quiz":return"rmq";default:return"othr"}},entryMetricsLink:function(t){return t>0?t+9e3:t+9001},createKey:function(t){return"key-id-".concat(t)},loadTowImages:function(){var t=this.$store&&c()(this.$store.state.cms.modules,this.chronicId)?this.$store.state.cms.modules[this.chronicId]:{},e=t&&t.items?t.items:[],i=[];if(e&&e.length>0){e.forEach((function(t){var e=document.createElement("img");e.src=t.img,e.alt=t.imgalt,i.push(e)}));var n=document.querySelector(".tow_list");if(n){var r=s()(n.children);r&&r.forEach((function(t,e){var n=t.firstElementChild;n&&n.prepend(i[e])}))}}}},created:function(){this.items=this.getItems,this.title=this.getTitle,this.isSiteFronts&&this.isDev&&Promise.all([i.e("non-critical~pagetype-sitefronts"),i.e("pagetype-sitefronts")]).then(i.t.bind(null,"e65d",7))},mounted:function(){var t=this,e=!1,i=document.querySelectorAll(".unified_right_inner_v2_rdr .entry_fmt:not(.entry_fmt_st)");return this.isMobile=document.body.clientWidth<467,(!this.isMobile||!this.isInfinite)&&(document.body.clientWidth>467&&this.loadTowImages(),document.querySelectorAll(".imgPlaceholder").forEach((function(t){return t.remove()})),this.$nextTick((function(){if(window&&window.viewAllContent&&document.body.clientWidth>767){var n=t.isSiteFronts?4:3;t.items=t.items&&t.items.length>n?t.items.slice(0,n):t.items;var r=s()(document.querySelectorAll(".unified_right_inner_v2_rdr .entry_fmt:not(.entry_fmt_st)"));if(r&&r.length>n-1)for(var o=n-1;o<r.length;o++)r[o].remove();i=document.querySelectorAll(".unified_right_inner_v2_rdr .entry_fmt:not(.entry_fmt_st)")}if(window.location.href.indexOf("?performance=1")>-1)if(window.outerWidth<769)window.addEventListener("scroll",(function(){var t=void 0!==window.pageYOffset?window.pageYOffset:(document.documentElement||document.body.parentNode||document.body).scrollTop;t>200&&!e&&(e=!0,a["a"].init({container:s()(i),module:"today-on-webmd"}))}));else{var l=document.body;l.addEventListener("mousemove",(function(){e||(e=!0,a["a"].init({container:s()(i),module:"today-on-webmd"}),l.removeEventListener("mousemove"))})),setTimeout((function(){e||(e=!0,a["a"].init({container:s()(i),module:"today-on-webmd"}),l.removeEventListener("mousemove"))}),5e3)}else a["a"].init({container:s()(i),module:"today-on-webmd"})})),!0)}},b=w,x=(i("9438"),Object(y["a"])(b,n,r,!1,null,null,null));e["default"]=x.exports},"8f94":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.moduleTitle&&t.items.length>0?i("aside",{directives:[{name:"metric",rawName:"v-metric",value:{module:t.metrics.module},expression:"{ module: metrics.module }"}],staticClass:"module module-top-picks module-lln-toppks dfp-native",class:{"module-instream-toppks":t.isInfinite,"sf-ss-toppks":t.isSlideshowSiteFront},attrs:{id:"lln-toppks","data-chronicle":t.chronicId,"data-e2e":"lln-toppks","data-module-type":"link-list","data-metrics-module":t.metrics.module}},[i("header",[i("h3",[t._v(t._s(t.moduleTitle))])]),i("ul",{class:{twocolumns:t.twoColumns}},t._l(t.items,(function(e,n){return i("li",{key:e.title,attrs:{id:"dfp_slot_tp_"+(n+1),"data-sizes":"[[1,10],'fluid']","data-pos":e.pos,"data-scp":"{'mod': 'lln-toppks'}"}},[i("a",{directives:[{name:"metric",rawName:"v-metric",value:{link:n+1},expression:"{ link: index+1 }"}],attrs:{href:e.link,"data-metrics-link":n+1}},[t._v(" "+t._s(e.text)+" ")])])})),0)]):t._e()},r=[],o=i("448a"),s=i.n(o),l=i("3852"),a=i.n(l),d=i("ebb8"),c={name:"TopPicks",props:{chronicId:{type:String,required:!0}},data:function(){return{metrics:{module:"lln-toppks"},items:[],moduleData:{},moduleTitle:{},twoColumns:!1,isSlideshowSiteFront:!1}},computed:{getItems:function(){var t=9021,e=this.getModuleByChronicId,i=a()(e,"module_data.links.link")?e.module_data.links.link.map((function(e){return{text:e.link_text||"",link:a()(e,"link_friendlyUrl")?e.link_friendlyUrl:"",pos:t++}})):[],n=i.filter((function(t){return t&&t.link}));return n},getModuleData:function(){var t=this.getModuleByChronicId;return a()(t,"module_data")?t.module_data:{}},getModuleByChronicId:function(){var t=this.$store.getters["cms/modules"](this.chronicId);return t},getModuleTitle:function(){var t=this.moduleData;return a()(t,"module_title")?t.module_title:""},setColumnLayout:function(){var t=this.twoColumns,e=this.$capId,i=["091e9c5e814695f1","091e9c5e8222f146","091e9c5e814695f2"],n=i.includes(e);return n&&(this.isSiteFronts?(this.isSlideshowSiteFront=!0,t=!1):t=!0),t},isInfinite:function(){return this.$store.getters["flow/isInfinite"]},isSiteFronts:function(){var t=this.$store.getters["cms/siteFronts"];return!!a()(t,"mode")&&"sitefronts"===t.mode.toLowerCase()}},created:function(){this.items=this.getItems,this.moduleData=this.getModuleData,this.moduleTitle=this.getModuleTitle,this.twoColumns=this.setColumnLayout,this.isSiteFronts&&i.e("load-dynamic").then(i.t.bind(null,"eaf2",7))},mounted:function(){this.isInfinite&&document.body.clientWidth<476&&(this.moduleTitle="Recommended",this.items=this.items.splice(0,3)),this.$nextTick((function(){var t=document.querySelectorAll("aside.module-top-picks li[id^=dfp_slot_tp_] a");t.forEach((function(t){t.style.display="none"})),d["a"].init({container:s()(document.querySelectorAll("aside.module-top-picks li[id^=dfp_slot_tp_]")),module:"top-picks"})}))}},u=c,m=(i("4063"),i("2877")),h=Object(m["a"])(u,n,r,!1,null,null,null);e["default"]=h.exports},"93c6":function(t,e,i){var n=i("6a5c"),r=i("6747");function o(t,e,i,o){return null==t?[]:(r(e)||(e=null==e?[]:[e]),i=o?void 0:i,r(i)||(i=null==i?[]:[i]),n(t,e,i))}t.exports=o},9438:function(t,e,i){"use strict";i("ca89")},a164:function(t,e,i){"use strict";i("b0ad")},a989:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i(t.importComponent,{tag:"component",attrs:{"chronic-id":t.chronicId}})},r=[],o=i("3852"),s=i.n(o),l={name:"GlobalFooter",components:{},props:{chronicId:{type:String,required:!0}},data:function(){return{pgData:{},sfData:{},artType:["Feature","Medical Reference","News"]}},computed:{getSiteFrontsData:function(){return this.$store.getters["cms/siteFronts"]},getPageData:function(){return this.$store.state.pagedata},importComponent:function(){return this.isOncology||this.isHomePage?function(){return i.e("load-dynamic").then(i.bind(null,"7532"))}:function(){return i.e("load-dynamic").then(i.bind(null,"68bd"))}},isArticle:function(){var t=!1;return""!==this.busRef&&-1!==this.artType.indexOf(this.busRef)&&(t=!0),t},isOncology:function(){return this.$store.state.pagedata.isOncology},busRef:function(){var t="";return s()(this.pgData,"omniture.s_business_reference")&&(t=this.pgData.omniture.s_business_reference),t},isHomePage:function(){var t=!1;return s()(this.pgData,"omniture.s_asset_id")&&(t="091e9c5e823d0cb2"===this.pgData.omniture.s_asset_id),t}},created:function(){this.sfData=this.getSiteFrontsData,this.pgData=this.getPageData}},a=l,d=(i("0c7d"),i("2877")),c=Object(d["a"])(a,n,r,!1,null,null,null);e["default"]=c.exports},aea0:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.moduleData&&t.moduleData.moduleTitle&&t.moduleData.moduleTitle.text&&t.moduleData.items.length>0?i("aside",{directives:[{name:"metric",rawName:"v-metric",value:{module:t.metrics.module},expression:"{ module: metrics.module }"}],class:"module module-tools-and-resources module-"+t.metrics.module,attrs:{id:t.metrics.module,"data-chronicle":t.chronicId,"data-e2e":t.metrics.module,"data-module-type":"link-list"}},[i("header",[i("h3",[t._v(t._s(t.moduleData.moduleTitle.text))])]),i("ul",t._l(t.moduleData.items,(function(e,n){return i("li",{key:e.title},[i("a",{directives:[{name:"metric",rawName:"v-metric",value:{link:n+1},expression:"{ link: index+1 }"}],attrs:{href:e.link,"data-metrics-link":n+1}},[t._v(" "+t._s(e.text)+" ")])])})),0)]):t._e()},r=[],o=i("3852"),s=i.n(o),l=i("6747"),a=i.n(l),d={name:"ToolsAndResources",props:{chronicId:{type:String,required:!0}},data:function(){return{metrics:{module:"lln-toolsres"},moduleByChronicId:{},moduleData:{}}},computed:{getItems:function(){if(!this.moduleByChronicId)return[];var t=this.moduleByChronicId,e=t&&s()(t,"module_data.links.link")&&a()(t.module_data.links.link)?t.module_data.links.link.map((function(t){return{text:"string"===typeof t.link_text?t.link_text.replace(/(\[.+_icon\])/gi,""):"",link:s()(t,"link_friendlyUrl")?t.link_friendlyUrl:""}})):[],i=void 0!==t&&null!==t&&s()(t,"module_data.module_title.title")?t.module_data.module_title.title:s()(t,"module_data.module_title")?t.module_data.module_title:[],n=e.filter((function(t){return t&&t.link}));return{moduleTitle:{text:i},items:n}},getModuleByChronicId:function(){return this.$store.getters["cms/modules"](this.chronicId)}},created:function(){this.moduleByChronicId=this.getModuleByChronicId,this.moduleData=this.getItems,this.$store.commit("cms/SET_RENDERED",this.chronicId)}},c=d,u=(i("ee92"),i("2877")),m=Object(u["a"])(c,n,r,!1,null,null,null);e["default"]=m.exports},b0ad:function(t,e,i){},c39b:function(t,e,i){},ca89:function(t,e,i){},cae7:function(t,e,i){var n=i("ffd6");function r(t,e){if(t!==e){var i=void 0!==t,r=null===t,o=t===t,s=n(t),l=void 0!==e,a=null===e,d=e===e,c=n(e);if(!a&&!c&&!s&&t>e||s&&l&&d&&!a&&!c||r&&l&&d||!i&&d||!o)return 1;if(!r&&!s&&!c&&t<e||c&&i&&o&&!r&&!s||a&&i&&o||!l&&o||!d)return-1}return 0}t.exports=r},cec8:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.moduleItems&&t.moduleItems.items&&t.moduleItems.items.length>0?i("aside",{directives:[{name:"metric",rawName:"v-metric",value:{module:t.metrics.module},expression:"{ module: metrics.module }"}],staticClass:"module module-dynamic-related-articles module-lln-tdrelcon",class:{"sf-lln-tdrelcon":t.isSiteFronts},attrs:{id:"lln-tdrelcon","data-chronicle":t.chronicId,"data-e2e":"lln-tdrelcon","data-metrics-module":t.metrics.module}},[t._m(0),i("ul",[t._l(t.moduleItems.items,(function(e,n){return i("li",{key:e.title},[i("a",{directives:[{name:"metric",rawName:"v-metric",value:{link:n+1},expression:"{ link: index+1 }"}],attrs:{href:e.link,"data-metrics-link":n+1}},[t._v(" "+t._s(e.text)+" ")])])})),t.moduleItems.lastItem&&t.moduleItems.lastItem.link&&t.moduleItems.lastItem.text?i("li",{staticClass:"view-all"},[i("a",{directives:[{name:"metric",rawName:"v-metric",value:{link:"all"},expression:"{ link: 'all' }"}],attrs:{href:t.moduleItems.lastItem.link,"data-metrics-link":t.all}},[i("i",{staticClass:"webmd-icon-right-arrow"}),t._v(" "+t._s(t.moduleItems.lastItem.text)+" ")])]):t._e()],2)]):t._e()},r=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("header",[i("h3",[t._v("further reading")])])}],o=i("3852"),s=i.n(o),l=i("6747"),a=i.n(l),d=i("1a8c"),c=i.n(d),u=i("93c6"),m=i.n(u),h=i("4d8c"),f=i.n(h),_=i("dd61"),p=i.n(_),g={name:"FurtherReading",props:{chronicId:{type:String,required:!0}},data:function(){return{metrics:{module:"lln-tdrelcon"},moduleItems:{}}},computed:{getItems:function(){var t=this;if(!t.getModuleByChronicId)return[];var e=t.getModuleByChronicId,i={},n=7,r=[];if(s()(e,"module_data.topic_dirs.topic_dir")&&a()(e.module_data.topic_dirs.topic_dir)){i=m()(e.module_data.topic_dirs.topic_dir,["affinity"],["asc"]).shift(),t.getCategoryWiseData(i,"1008",r),t.getCategoryWiseData(i,"1004",r);var o=[];a()(i.categories.category)?o=i.categories.category.filter((function(t){return-1==["1008","1004","1005","1012"].indexOf(t.id)})):c()(i.categories.category)&&o.push(i.categories.category);var l=p()(o,"assets"),d=f()(l);d=d.filter((function(t){return t.link_title&&t.friendly_url}));for(var u=m()(d,["affinity"],["asc"],["last_modified_date"],["desc"]),h=n-r.length,_=u.slice(0,h),g=0;g<_.length;g+=1)r.push(_[g]);var v=[];r&&a()(r)&&(v=r.map((function(e){return{text:e.link_title||"",link:t.getUrl(e.friendly_url)||""}})));var y=i?i.friendly_url:"",k=i?i.name:"",I={text:"".concat(k," Topics"),link:t.getUrl(y)};return v=v.filter((function(t){return t&&t.link})),{lastItem:I,items:v}}return{lastItem:"",items:""}},getModuleByChronicId:function(){return this.$store.getters["cms/modules"](this.chronicId)},isSiteFronts:function(){var t=this.$store.getters["cms/siteFronts"];return!!s()(t,"mode")&&"sitefronts"===t.mode.toLowerCase()}},created:function(){this.moduleItems=this.getItems,this.$store.commit("cms/SET_RENDERED",this.chronicId),this.isSiteFronts&&i.e("load-dynamic").then(i.t.bind(null,"9ba9",7))},methods:{getUrl:function(t){return t&&!t.match(/(https?:\/\/)/g)?"//".concat(t):t},getCategoryWiseData:function(t,e,i){var n;if(a()(t.categories.category)?n=t&&0!==t.length?t.categories.category.find((function(t){return t.id===e})):[]:c()(t.categories.category)&&(n=t&&0!==t.length?t.categories.category.id===e:{}),n&&!1!==n){var r,o=[];if(s()(n,"assets")&&(r=n.assets),r&&(o=r.length>2?m()(r,["affinity"],["asc"],["last_modified_date"],["desc"]).slice(0,2):r),o)for(var l=0;l<o.length;l+=1)i.push(o[l])}}}},v=g,y=(i("0f0a"),i("2877")),k=Object(y["a"])(v,n,r,!1,null,null,null);e["default"]=k.exports},d4b2:function(t,e){function i(t,e){var i=t.length;t.sort(e);while(i--)t[i]=t[i].value;return t}t.exports=i},ee92:function(t,e,i){"use strict";i("0c41")},f252:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.moduleData&&t.moduleData.moduleTitle&&t.moduleData.items&&t.moduleData.items.length>0?i("aside",{directives:[{name:"metric",rawName:"v-metric",value:{module:t.metrics.module},expression:"{ module: metrics.module }"}],class:["module module-unified-right-rail module-"+t.metrics.module],attrs:{"data-chronicle":t.chronicId,id:t.metrics.module,"data-e2e":t.metrics.module,"data-module-type":"EditorialModule"}},[i("header",[i("h3",[t._v(t._s(t.moduleData.moduleTitle.text))])]),i("div",{staticClass:"unified_right_inner_rdr"},[t._l(t.moduleData.items,(function(e,n){return[i("div",{key:t.createKey(n),class:e.class},[i("a",{directives:[{name:"metric",rawName:"v-metric:track",value:{module:t.metrics.module,link:t.entryMetricsLink(n)},expression:"{\n\t\t\t\t\t\tmodule: metrics.module,\n\t\t\t\t\t\tlink: entryMetricsLink(index),\n\t\t\t\t\t}",arg:"track"}],attrs:{href:e.link}},[t.isOncology?t._e():i("div",{staticClass:"imgPlaceholder"}),t.isOncology?t._e():i("span",{staticClass:"asset-type"},[t._v(" "+t._s(e.title)+" ")]),i("h4",[t._v(" "+t._s(e.paragraph)+" ")])])])]})),i("SetRendered",{attrs:{"chronic-id":t.chronicId,data:t.moduleData}})],2)]):t._e()},r=[],o=i("448a"),s=i.n(o),l=i("3852"),a=i.n(l),d=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div")},c=[],u=i("2593"),m=i.n(u),h={name:"SetRendered",props:{chronicId:{type:String,required:!0},data:{type:Object,required:!0}},created:function(){this.data=this.data.items.map((function(t){return m()(t,["img","imgalt"])})),this.$store.commit("cms/UPDATE_STATE",{key:this.chronicId,value:this.data})}},f=h,_=i("2877"),p=Object(_["a"])(f,d,c,!1,null,"33224ab6",null),g=p.exports,v={components:{SetRendered:g},props:{chronicId:{type:String,required:!0}},data:function(){return{metrics:{module:"ed-rcmmnddforyou"},moduleByChronicId:{},moduleData:{},imagesData:[]}},computed:{getItems:function(){var t,e,i,n;if(!this.moduleByChronicId)return[];var r=this.moduleByChronicId,o=null===(t=this.$store)||void 0===t||null===(e=t.state)||void 0===e||null===(i=e.pagedata)||void 0===i||null===(n=i.omniture)||void 0===n?void 0:n.image_server_url,s=a()(r,"module_data.links.link")?r.module_data.links.link.map((function(t){return{paragraph:a()(t,"action_text")?t.action_text:"",title:a()(t,"link_text")?t.link_text:"",link:a()(t,"link_url.link_friendlyUrl")?t.link_url.link_friendlyUrl:"",img:a()(t,"link_source_icon.path")?"".concat(o).concat(t.link_source_icon.path,"?resize=110px:*&amp;output-quality=50"):"",imgalt:a()(t,"link_source_icon.alt")?t.link_source_icon.alt:"",class:"entry_fmt"}})):[],l=r&&a()(r,"module_data.module_title.title")?r.module_data.module_title.title:a()(r,"module_data.module_title")?r.module_data.module_title:[],d=r&&a()(r,"module_data.module_link")&&a()(r,"module_data.module_link.link_friendlyUrl")?r.module_data.module_link.link_friendlyUrl:"";return{moduleTitle:{text:l,link:d},items:s}},isSiteFronts:function(){var t=this.$store.getters["cms/siteFronts"];return!!a()(t,"mode")&&"sitefronts"===t.mode.toLowerCase()},isOncology:function(){return this.$store.state.pagedata.isOncology},getModuleByChronicId:function(){return this.$store.getters["cms/modules"](this.chronicId)}},methods:{entryMetricsLink:function(t){return t+1},createKey:function(t){return"recommended-for-you-key-id-".concat(t)},loadImages:function(){var t=this.$store&&a()(this.$store.state.cms.modules,this.chronicId)?this.$store.state.cms.modules[this.chronicId]:[],e=[];if(t&&t.length>0){t.forEach((function(t){var i=document.createElement("img");i.src=t.img,i.alt=t.imgalt,e.push(i)}));var i=document.querySelector(".module-".concat(this.metrics.module," > .unified_right_inner_rdr"));if(i){var n=s()(i.children);n&&n.forEach((function(t,i){var n=t.firstElementChild;n&&n.prepend(e[i])}))}}},splitRecForYouModule:function(){var t=document.querySelectorAll('aside[data-e2e="ed-rcmmnddforyou"]');t.forEach((function(t){var e=t.querySelector("script");t.querySelector("div").removeChild(e);var i=t.querySelectorAll(".entry_fmt");if(i&&i.length>3)for(var n=3;n<i.length;n+=1)i[n].remove()}))}},mounted:function(){window.innerWidth>467&&(this.isOncology||this.loadImages(),this.isSiteFronts&&(window&&window.webmdRecForYouReplaced?this.splitRecForYouModule():window.addEventListener("webmd.recforyou.replaced",this.splitRecForYouModule))),document.querySelectorAll(".imgPlaceholder").forEach((function(t){return t.remove()}))},created:function(){this.moduleByChronicId=this.getModuleByChronicId,this.moduleData=this.getItems,this.isSiteFronts&&i.e("load-dynamic").then(i.t.bind(null,"e582",7)),this.isOncology&&i.e("load-dynamic").then(i.t.bind(null,"4208",7))}},y=v,k=(i("a164"),Object(_["a"])(y,n,r,!1,null,null,null));e["default"]=k.exports}}]);
//# sourceMappingURL=non-critical.89a76c2d.js.map