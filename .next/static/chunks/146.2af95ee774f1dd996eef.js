(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[146],{sPTW:function(t,e,r){"use strict";r.r(e);var a=r("1OyB"),c=r("vuIU"),i=r("JX7q"),o=r("Ji7U"),n=r("md7G"),s=r("foSv"),u=r("rePB"),l=r("q1tI"),d=r.n(l),p=r("/MKj"),f=r("YFqc"),b=r.n(f),m=r("xSWb"),g=r("xE+L"),v=r("0pHj"),h=r("x91w"),O=r("OWVN"),N=r("UUyv"),j=d.a.createElement;function w(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,a=Object(s.a)(t);if(e){var c=Object(s.a)(this).constructor;r=Reflect.construct(a,arguments,c)}else r=a.apply(this,arguments);return Object(n.a)(this,r)}}var y=new v.a,C=function(t){Object(o.a)(r,t);var e=w(r);function r(){var t;return Object(a.a)(this,r),t=e.call(this),Object(u.a)(Object(i.a)(t),"addToCart",(function(e){var r=t.props,a=r.addToCart,c=r.toggleCartBar,i=r.isOpen;a(e),i||c()})),Object(u.a)(Object(i.a)(t),"triggerNext",(function(e){(0,t.props.triggerNextStep)()})),t.state={selected:!1},t}return Object(c.a)(r,[{key:"render",value:function(){var t=this,e=this.props.steps.products,r=e.value;e.countryCode;if(!r)return j("div",null);var a="/shop/".concat(Object(O.i)(r).replace(/ /g,"-")),c=r.title?r.title:r.productid&&r.productid.producttitle,i=r.featureimage?r.featureimage:r.productid&&r.productid.featurefilepath,o=Object(g.c)(r),n=o.sale_price?o.sale_price:o.regular_price,s=y.currencyWithoutUsd(n);return j("div",{style:{width:"100%",margin:"auto"},className:"product-list-item"},j("div",{className:"product-list-image-wrap mb-2"},j(b.a,{href:a},j("a",{className:"cursor-pointer product-list-image-link"},j("div",{style:{width:"210px",height:"210px"},className:"product-list-image-inner-wrap"},j(N.LazyLoadImage,{className:"product-list-image",src:m.e+i,alt:c}))))),j("div",{className:"product-list-title-wrap"},j("div",{className:"product-list-title-inner"},j("p",{className:"product-list-title mb-2"},j("strong",null,c)))),j("div",{className:"chat-product-btn-wrap"},j(b.a,{href:a},j("a",{className:"btn cursor-pointer d-block mb-0 product-list-btn hover-text-line"},"View details")),j("span",{onClick:function(){t.addToCart(Object(g.b)(r)),t.triggerNext()},className:"c-btn c-btn--dark btn2 cursor-pointer d-block mb-0 product-list-btn"},"Add to cart - ",s)))}}]),r}(l.Component);e.default=Object(p.b)((function(t){return{countryCode:t.location.countryCode,isOpen:t.drawers.isCartOpen,products:t.products.products}}),{addToCart:h.addToCart,toggleCartBar:h.toggleCartBar})(C)}}]);