(function(t){function e(e){for(var o,r,i=e[0],s=e[1],u=e[2],l=0,f=[];l<i.length;l++)r=i[l],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&f.push(a[r][0]),a[r]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(t[o]=s[o]);d&&d(e);while(f.length)f.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],o=!0,r=1;r<n.length;r++){var i=n[r];0!==a[i]&&(o=!1)}o&&(c.splice(e--,1),t=s(s.s=n[0]))}return t}var o={},r={app:0},a={app:0},c=[];function i(t){return s.p+"js/"+({}[t]||t)+"."+{"chunk-10040318":"99a72622","chunk-2d0cfaf0":"d737d013","chunk-2d229078":"12f09531","chunk-477c2fdb":"1201e4d8","chunk-1ddfd466":"e1b7892d","chunk-698d20a6":"7c13f8b1"}[t]+".js"}function s(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n={"chunk-10040318":1,"chunk-477c2fdb":1,"chunk-1ddfd466":1,"chunk-698d20a6":1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=new Promise((function(e,n){for(var o="css/"+({}[t]||t)+"."+{"chunk-10040318":"ac16bc44","chunk-2d0cfaf0":"31d6cfe0","chunk-2d229078":"31d6cfe0","chunk-477c2fdb":"0bdb0db8","chunk-1ddfd466":"c95179d8","chunk-698d20a6":"5f92fce0"}[t]+".css",a=s.p+o,c=document.getElementsByTagName("link"),i=0;i<c.length;i++){var u=c[i],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===o||l===a))return e()}var f=document.getElementsByTagName("style");for(i=0;i<f.length;i++){u=f[i],l=u.getAttribute("data-href");if(l===o||l===a)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var o=e&&e.target&&e.target.src||a,c=new Error("Loading CSS chunk "+t+" failed.\n("+o+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=o,delete r[t],d.parentNode.removeChild(d),n(c)},d.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){r[t]=0})));var o=a[t];if(0!==o)if(o)e.push(o[2]);else{var c=new Promise((function(e,n){o=a[t]=[e,n]}));e.push(o[2]=c);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=i(t);var f=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(d);var n=a[t];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;f.message="Loading chunk "+t+" failed.\n("+o+": "+r+")",f.name="ChunkLoadError",f.type=o,f.request=r,n[1](f)}a[t]=void 0}};var d=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},s.m=t,s.c=o,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)s.d(n,o,function(e){return t[e]}.bind(null,o));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/",s.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var f=0;f<u.length;f++)e(u[f]);var d=l;c.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"3a4d":function(t,e,n){},"4ebc":function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isshow?n("div",{staticClass:"toast"},[t._v(" "+t._s(t.message)+" ")]):t._e()},r=[],a={data:function(){return{isshow:!1,message:""}},methods:{toast:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"哈哈哈",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3;this.isshow=!0,this.message=e,setTimeout((function(){t.isshow=!1}),n)}}},c=a,i=(n("822c"),n("2877")),s=Object(i["a"])(c,o,r,!1,null,"2af34ffd",null);e["a"]=s.exports},"4fb7":function(t,e,n){},5143:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("b0c0"),n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("keep-alive",{attrs:{exclude:"detail"}},[n("router-view")],1),n("bottombar")],1)},a=[],c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tabbar"},[n("item",{attrs:{activecolor:t.color,path:"/home"}},[n("span",{staticClass:"zi zi_home",attrs:{slot:"imgfont"},slot:"imgfont"}),n("p",{attrs:{slot:"fontname"},slot:"fontname"},[t._v("首页")])]),n("item",{attrs:{activecolor:t.color,path:"/category"}},[n("span",{staticClass:"zi zi_tmMicrosoft",attrs:{slot:"imgfont"},slot:"imgfont"}),n("p",{attrs:{slot:"fontname"},slot:"fontname"},[t._v("分类")])]),n("item",{attrs:{activecolor:t.color,path:"/shopping"}},[n("span",{staticClass:"zi zi_shoppingcart",attrs:{slot:"imgfont"},slot:"imgfont"}),n("p",{attrs:{slot:"fontname"},slot:"fontname"},[t._v("购物")])]),n("item",{attrs:{activecolor:t.color,path:"/self"}},[n("span",{staticClass:"zi zi_user",attrs:{slot:"imgfont"},slot:"imgfont"}),n("p",{attrs:{slot:"fontname"},slot:"fontname"},[t._v("我的")])])],1)},i=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"item",style:t.activestyle,on:{click:t.topath}},[t._t("imgfont"),t._t("fontname")],2)},u=[],l=(n("c975"),n("ac1f"),n("5319"),{components:{},props:{path:{type:String},activecolor:{type:String,default:"rgb(250, 151, 168)"}},methods:{topath:function(){this.path&&(this.isactive||this.$router.replace(this.path))}},computed:{isactive:function(){return-1!=this.$route.path.indexOf(this.path)},activestyle:function(){if(this.isactive)return{color:this.activecolor}}}}),f=l,d=(n("c95c"),n("2877")),p=Object(d["a"])(f,s,u,!1,null,"6aed0ec6",null),h=p.exports,m={name:"tabbar",components:{item:h},data:function(){return{color:"rgb(250, 151, 168)"}},methods:{}},v=m,b=(n("b1a6"),Object(d["a"])(v,c,i,!1,null,"4f935dca",null)),g=b.exports,y={components:{bottombar:g},data:function(){return{}},methods:{}},k=y,w=Object(d["a"])(k,r,a,!1,null,null,null),_=w.exports,O=(n("d3b7"),n("8c4f")),S=function(){return Promise.all([n.e("chunk-477c2fdb"),n.e("chunk-1ddfd466")]).then(n.bind(null,"4cc4"))},j=function(){return n.e("chunk-2d229078").then(n.bind(null,"dc69"))},C=function(){return n.e("chunk-10040318").then(n.bind(null,"c305"))},x=function(){return n.e("chunk-2d0cfaf0").then(n.bind(null,"6583"))},E=function(){return Promise.all([n.e("chunk-477c2fdb"),n.e("chunk-698d20a6")]).then(n.bind(null,"ff3f"))};o["default"].use(O["a"]);var P=[{path:"/",redirect:"/home"},{path:"/home",component:S},{path:"/category",component:j},{path:"/shopping",component:C},{path:"/self",component:x},{path:"/detail/:id",component:E}],$=new O["a"]({mode:"history",base:"/",routes:P}),T=$,z=(n("7db0"),n("2f62"));o["default"].use(z["a"]);var A=new z["a"].Store({state:{cartlist:[]},mutations:{addgoods:function(t,e){e.count=1,e.ischosen=!1,t.cartlist.push(e)},addcount:function(t,e){e.count++}},actions:{showtocart:function(t,e){return new Promise((function(n,o){var r=t.state.cartlist.find((function(t){return t.id==e.id}));r?(t.commit("addcount",r),n("宝贝数量+1")):(t.commit("addgoods",e),n("宝贝添加成功"))}))}},modules:{}}),L=n("4ebc"),M={install:function(t){var e=t.extend(L["a"]),n=new e;n.$mount(document.createElement("div")),document.body.appendChild(n.$el),t.prototype.$toast=n}},N=M,B=n("fe3c"),H=n.n(B),I=n("76a0");n("aa35"),n("5143"),n("b256");o["default"].use(N),H.a.attach(document.body),o["default"].component(I["Header"].name,I["Header"]),o["default"].component(I["Swipe"].name,I["Swipe"]),o["default"].component(I["SwipeItem"].name,I["SwipeItem"]),o["default"].config.productionTip=!1,new o["default"]({router:T,store:A,render:function(t){return t(_)}}).$mount("#app")},"822c":function(t,e,n){"use strict";n("4fb7")},8338:function(t,e,n){},b1a6:function(t,e,n){"use strict";n("3a4d")},b256:function(t,e,n){},c95c:function(t,e,n){"use strict";n("8338")}});
//# sourceMappingURL=app.6cd2e392.js.map