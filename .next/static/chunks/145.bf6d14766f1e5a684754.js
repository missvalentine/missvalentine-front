(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[145],{Ib06:function(t,e,n){"use strict";n.r(e);var c=n("1OyB"),r=n("vuIU"),o=n("Ji7U"),u=n("md7G"),a=n("foSv"),i=n("q1tI"),s=n.n(i),l=n("TSYQ"),f=n.n(l),p=s.a.createElement;function v(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,c=Object(a.a)(t);if(e){var r=Object(a.a)(this).constructor;n=Reflect.construct(c,arguments,r)}else n=c.apply(this,arguments);return Object(u.a)(this,n)}}var d=function(t){Object(o.a)(n,t);var e=v(n);function n(){var t;return Object(c.a)(this,n),(t=e.call(this)).state={selected:null,categoryList:["Topicals","Pets","Edibles","Capsules","Oils"]},t}return Object(r.a)(n,[{key:"render",value:function(){var t=this,e=this.state,n=e.selected,c=e.categoryList;return p("div",null,c.map((function(e,r){return p("p",{className:f()("chat-custom-option",{selected:n===e}),onClick:function(){n||t.setState({categoryList:c.filter((function(t){return t===e})),selected:e},(function(){t.props.triggerNextStep({value:e})}))},key:r},e)})))}}]),n}(i.Component);e.default=d}}]);