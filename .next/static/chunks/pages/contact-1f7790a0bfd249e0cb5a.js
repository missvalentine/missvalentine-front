_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[52],{"1OyB":function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",(function(){return r}))},ALdH:function(t,e,n){"use strict";n.r(e);var r=n("1OyB"),o=n("vuIU"),c=n("JX7q"),u=n("Ji7U"),a=n("md7G"),i=n("foSv"),s=n("rePB"),f=n("q1tI"),l=n.n(f),p=n("a6RD"),d=n.n(p),y=n("UUyv"),b=n("/MKj"),v=n("x91w"),m=l.a.createElement;function O(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(i.a)(t);if(e){var o=Object(i.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(a.a)(this,n)}}var h=d()((function(){return Promise.all([n.e(0),n.e(6),n.e(5),n.e(4),n.e(64)]).then(n.bind(null,"Vw5z"))}),{ssr:!1,loadableGenerated:{webpack:function(){return["Vw5z"]},modules:["../components/Layouts/Layout"]}}),g=d()((function(){return n.e(74).then(n.bind(null,"h1bS"))}),{ssr:!1,loadableGenerated:{webpack:function(){return["h1bS"]},modules:["../components/Heading"]}}),w=d()((function(){return Promise.all([n.e(0),n.e(7),n.e(2),n.e(8),n.e(60)]).then(n.bind(null,"f94N"))}),{ssr:!1,loadableGenerated:{webpack:function(){return["f94N"]},modules:["../components/forms/ContactForm"]}}),j=function(t){Object(u.a)(n,t);var e=O(n);function n(t){var o;return Object(r.a)(this,n),o=e.call(this,t),Object(s.a)(Object(c.a)(o),"changeCategory",(function(t){var e=o.props.products;if(console.log({activeCategory:t,products:e}),"Featured"===t.title)o.setState({products:e.featured,activeCategory:t.title});else if("All"===t.title)o.setState({products:e.products,activeCategory:t.title});else{var n=e.categories.find((function(e){return e.category.categorytitle===t.title}))||{};o.setState({products:n.products,activeCategory:t.title})}})),o.state={activeCategory:"Featured",allProducts:t.products.products||[],products:t.products.featured||[]},o}return Object(o.a)(n,[{key:"componentDidUpdate",value:function(t,e){t.products.products!==this.props.products.products&&this.changeCategory({title:this.state.activeCategory})}},{key:"componentDidMount",value:function(){this.props.getProducts()}},{key:"render",value:function(){var t=this.state;t.activeCategory,t.products;return m(h,{className:"c-contact",headerVersions:["dark"],title:"Contact"},m(y.LazyLoadImage,{src:"/images/contact-banner.webp",className:"img-fluid contact-page-banner",style:{padding:"5rem 7rem"}}),m("div",{className:"c-contact__container"},m(g,null,"WHAT CAN WE HELP YOU WITH?"),m("p",null,"Please select a topic below related to your enquiry."),m(w,null)))}}],[{key:"getDerivedStateFromProps",value:function(t,e){return t.products.products!==e.allProducts?(console.log({allProducts:t.products.products}),{allProducts:t.products.products}):null}}]),n}(l.a.Component);j.defaultProps={products:{}},e.default=Object(b.b)((function(t){return{products:t.products}}),{getProducts:v.d})(j)},BsWD:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n("a3WO");function o(t,e){if(t){if("string"===typeof t)return Object(r.a)(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Object(r.a)(t,e):void 0}}},Ff2n:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n("zLVn");function o(t,e){if(null==t)return{};var n,o,c=Object(r.a)(t,e);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(t);for(o=0;o<u.length;o++)n=u[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(c[n]=t[n])}return c}},"HaE+":function(t,e,n){"use strict";function r(t,e,n,r,o,c,u){try{var a=t[c](u),i=a.value}catch(s){return void n(s)}a.done?e(i):Promise.resolve(i).then(r,o)}function o(t){return function(){var e=this,n=arguments;return new Promise((function(o,c){var u=t.apply(e,n);function a(t){r(u,o,c,a,i,"next",t)}function i(t){r(u,o,c,a,i,"throw",t)}a(void 0)}))}}n.d(e,"a",(function(){return o}))},JX7q:function(t,e,n){"use strict";function r(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}n.d(e,"a",(function(){return r}))},Ji7U:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n("s4An");function o(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&Object(r.a)(t,e)}},KQm4:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n("a3WO");var o=n("BsWD");function c(t){return function(t){if(Array.isArray(t))return Object(r.a)(t)}(t)||function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||Object(o.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},a3WO:function(t,e,n){"use strict";function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}n.d(e,"a",(function(){return r}))},cDf5:function(t,e){function n(e){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?(t.exports=n=function(t){return typeof t},t.exports.default=t.exports,t.exports.__esModule=!0):(t.exports=n=function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports.default=t.exports,t.exports.__esModule=!0),n(e)}t.exports=n,t.exports.default=t.exports,t.exports.__esModule=!0},foSv:function(t,e,n){"use strict";function r(t){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}n.d(e,"a",(function(){return r}))},lqnA:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/contact",function(){return n("ALdH")}])},md7G:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var r=n("cDf5"),o=n.n(r),c=n("JX7q");function u(t,e){return!e||"object"!==o()(e)&&"function"!==typeof e?Object(c.a)(t):e}},o0o1:function(t,e,n){t.exports=n("ls82")},s4An:function(t,e,n){"use strict";function r(t,e){return(r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}n.d(e,"a",(function(){return r}))},vuIU:function(t,e,n){"use strict";function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function o(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}n.d(e,"a",(function(){return o}))}},[["lqnA",1,0,15,3,9,13,14,21,22]]]);