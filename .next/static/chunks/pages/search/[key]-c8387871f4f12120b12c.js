_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[72],{"2VCe":function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/search/[key]",function(){return r("n1n4")}])},n1n4:function(e,t,r){"use strict";r.r(t);var n=r("o0o1"),c=r.n(n),a=r("HaE+"),o=r("KQm4"),s=r("rePB"),u=r("Ff2n"),i=r("q1tI"),l=r.n(i),p=r("a6RD"),b=r.n(p),d=r("/MKj"),f=(r("TSYQ"),r("Wol/")),h=r("OWVN"),m=r("xSWb"),g=r("vcXL"),O=r.n(g),j=r("x91w"),w=r("76ZC"),v=r.n(w),_=l.a.createElement;function y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function P(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?y(Object(r),!0).forEach((function(t){Object(s.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var k=b()((function(){return Promise.all([r.e(5),r.e(4),r.e(18),r.e(0),r.e(100)]).then(r.bind(null,"Vw5z"))}),{ssr:!1,loadableGenerated:{webpack:function(){return["Vw5z"]},modules:["../../components/Layouts/Layout"]}}),N=b()((function(){return r.e(2).then(r.bind(null,"h1bS"))}),{ssr:!1,loadableGenerated:{webpack:function(){return["h1bS"]},modules:["../../components/Heading"]}}),S=b()((function(){return Promise.all([r.e(0),r.e(22),r.e(2)]).then(r.bind(null,"B7+D"))}),{ssr:!1,loadableGenerated:{webpack:function(){return["B7+D"]},modules:["../../components/ProductCard"]}}),x=b()((function(){return Promise.all([r.e(1),r.e(6),r.e(0),r.e(8),r.e(97)]).then(r.bind(null,"htNk"))}),{ssr:!1,loadableGenerated:{webpack:function(){return["htNk"]},modules:["../../components/form-components/SearchBox"]}}),C=function(e){var t=e.productList,r=(e.combos,e.shopdata,e.Search);Object(u.a)(e,["productList","combos","shopdata","Search"]);console.log(r);var n=Object(i.useState)(r),c=n[0],a=n[1],s=Object(i.useState)(!1),l=(s[0],s[1],Object(i.useState)("")),p=(l[0],l[1],t.map((function(e){return console.log({price:Object(h.c)(e),el:e}),P(P({},e),{},{image:e.productImage?m.d.serverUrl+e.productImage:"//via.placeholder.com/300x500",title:Object(h.i)(e),subTitle:Object(h.h)(e),price:Object(h.c)(e)})}))),b=function(e){return e.filter((function(e){return""===c||e.title.toLowerCase().includes(c.toLowerCase())}))},d=Object(i.useState)(Object(o.a)(p)),f=d[0];d[1];return _(k,{headerVersions:["bg-dark"],headerTheme:"black"},_("div",{className:"c-search-page"},_("div",{className:"container-fluid"},_("div",{className:"c-search-page__row c-search-page__row--light-bg row justify-content-center"},_("div",{className:"col-md-6"},_(N,{versions:["lft-br"],parentClass:"c-search-page"},_(x,{onChange:function(e){var t=e.target.value;a(t)},value:c,parentClass:"c-search-page"})),_(N,{subHeading:!0,parentClass:"c-search-page",versions:["default","lft-br"]},v()("".concat(b(f).length,' PRODUCT RESULT FOR <span class="search-text">"').concat(c,'"</span>')))))),_("div",{className:"c-shop-page__products-wrapper"},_("div",{className:"c-shop-page__row row"},b(f).map((function(e){return _("div",{key:e._id,className:"col-lg-4 col-md-6"},_(S,{product:e,versions:["show-price","full-height"],title:e.title,subTitle:e.subTitle,image:e.image,price:e.price&&e.price.sale_price,mg:e.totalcbdmg}))}))))))};C.getInitialProps=function(){var e=Object(a.a)(c.a.mark((function e(t){var r,n,a,o,s,u,i,l;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.query,console.log(r.key),e.next=4,O()(f.a.getAllProducts);case 4:return n=e.sent,e.next=7,n.json();case 7:return a=e.sent,o=Object(h.j)(a.products),e.next=11,Object(j.shopData)();case 11:return s=e.sent,e.next=14,O()(f.a.getAllCombos);case 14:return u=e.sent,e.next=17,u.json();case 17:return i=e.sent,l=Object(h.j)(i.combos),e.abrupt("return",{Search:r.key,productList:o.map((function(e){return Object(h.a)(e)})),combos:l.map((function(e){return Object(h.a)(e)})),shopdata:s.shop});case 20:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t.default=Object(d.b)(null)(C)},vcXL:function(e,t,r){"use strict";var n=self.fetch.bind(self);e.exports=n,e.exports.default=e.exports}},[["2VCe",3,1,7,0,9,10,11,12,16,20,23,30]]]);