_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[76],{"/GRZ":function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},"2qu3":function(e,t,r){"use strict";var n=r("oI91"),o=r("/GRZ"),a=r("i2R6");function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){var r;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"===typeof e)return l(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return l(e,t)}(e))||t&&e&&"number"===typeof e.length){r&&(e=r);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,u=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return i=e.done,e},e:function(e){u=!0,a=e},f:function(){try{i||null==r.return||r.return()}finally{if(u)throw a}}}}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}t.__esModule=!0,t.default=void 0;var s,d=(s=r("q1tI"))&&s.__esModule?s:{default:s},f=r("8L3h"),p=r("jwwS");var b=[],m=[],y=!1;function h(e){var t=e(),r={loading:!0,loaded:null,error:null};return r.promise=t.then((function(e){return r.loading=!1,r.loaded=e,e})).catch((function(e){throw r.loading=!1,r.error=e,e})),r}function _(e){var t={loading:!1,loaded:{},error:null},r=[];try{Object.keys(e).forEach((function(n){var o=h(e[n]);o.loading?t.loading=!0:(t.loaded[n]=o.loaded,t.error=o.error),r.push(o.promise),o.promise.then((function(e){t.loaded[n]=e})).catch((function(e){t.error=e}))}))}catch(n){t.error=n}return t.promise=Promise.all(r).then((function(e){return t.loading=!1,e})).catch((function(e){throw t.loading=!1,e})),t}function v(e,t){return d.default.createElement(function(e){return e&&e.__esModule?e.default:e}(e),t)}function g(e,t){var r=Object.assign({loader:null,loading:null,delay:200,timeout:null,render:v,webpack:null,modules:null},t),n=null;function o(){if(!n){var t=new w(e,r);n={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return n.promise()}if(!y&&"function"===typeof r.webpack){var a=r.webpack();m.push((function(e){var t,r=c(a);try{for(r.s();!(t=r.n()).done;){var n=t.value;if(-1!==e.indexOf(n))return o()}}catch(i){r.e(i)}finally{r.f()}}))}var i=function(e,t){o();var a=d.default.useContext(p.LoadableContext),i=(0,f.useSubscription)(n);return d.default.useImperativeHandle(t,(function(){return{retry:n.retry}}),[]),a&&Array.isArray(r.modules)&&r.modules.forEach((function(e){a(e)})),d.default.useMemo((function(){return i.loading||i.error?d.default.createElement(r.loading,{isLoading:i.loading,pastDelay:i.pastDelay,timedOut:i.timedOut,error:i.error,retry:n.retry}):i.loaded?r.render(i.loaded,e):null}),[e,i])};return i.preload=function(){return o()},i.displayName="LoadableComponent",d.default.forwardRef(i)}var w=function(){function e(t,r){o(this,e),this._loadFn=t,this._opts=r,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}return a(e,[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var t=this._res,r=this._opts;t.loading&&("number"===typeof r.delay&&(0===r.delay?this._state.pastDelay=!0:this._delay=setTimeout((function(){e._update({pastDelay:!0})}),r.delay)),"number"===typeof r.timeout&&(this._timeout=setTimeout((function(){e._update({timedOut:!0})}),r.timeout))),this._res.promise.then((function(){e._update({}),e._clearTimeouts()})).catch((function(t){e._update({}),e._clearTimeouts()})),this._update({})}},{key:"_update",value:function(e){this._state=u(u({},this._state),{},{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach((function(e){return e()}))}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(e){var t=this;return this._callbacks.add(e),function(){t._callbacks.delete(e)}}}]),e}();function S(e){return g(h,e)}function O(e,t){for(var r=[];e.length;){var n=e.pop();r.push(n(t))}return Promise.all(r).then((function(){if(e.length)return O(e,t)}))}S.Map=function(e){if("function"!==typeof e.render)throw new Error("LoadableMap requires a `render(loaded, props)` function");return g(_,e)},S.preloadAll=function(){return new Promise((function(e,t){O(b).then(e,t)}))},S.preloadReady=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise((function(t){var r=function(){return y=!0,t()};O(m,e).then(r,r)}))},window.__NEXT_PRELOADREADY=S.preloadReady;var P=S;t.default=P},"3r9c":function(e,t){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(n){"object"===typeof window&&(r=window)}e.exports=r},"HaE+":function(e,t,r){"use strict";function n(e,t,r,n,o,a,i){try{var u=e[a](i),c=u.value}catch(l){return void r(l)}u.done?t(c):Promise.resolve(c).then(n,o)}function o(e){return function(){var t=this,r=arguments;return new Promise((function(o,a){var i=e.apply(t,r);function u(e){n(i,o,a,u,c,"next",e)}function c(e){n(i,o,a,u,c,"throw",e)}u(void 0)}))}}r.d(t,"a",(function(){return o}))},NUXP:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/shop/combo/[pid]",function(){return r("ThhD")}])},TOwV:function(e,t,r){"use strict";e.exports=r("qT12")},ThhD:function(e,t,r){"use strict";r.r(t);var n=r("o0o1"),o=r.n(n),a=r("HaE+"),i=r("Ff2n"),u=r("q1tI"),c=r.n(u),l=r("a6RD"),s=r.n(l),d=r("OWVN"),f=r("nOHt"),p=r("/MKj"),b=r("vcXL"),m=r.n(b),y=r("xSWb"),h=c.a.createElement,_=s()((function(){return Promise.all([r.e(5),r.e(4),r.e(18),r.e(0),r.e(95)]).then(r.bind(null,"Vw5z"))}),{ssr:!1,loadableGenerated:{webpack:function(){return["Vw5z"]},modules:["../../../components/Layouts/Layout"]}}),v=s()((function(){return Promise.all([r.e(6),r.e(0),r.e(8),r.e(11),r.e(90)]).then(r.bind(null,"2uFY"))}),{ssr:!1,loadableGenerated:{webpack:function(){return["2uFY"]},modules:["../../../components/ProductInfo"]}}),g=s()((function(){return Promise.all([r.e(0),r.e(22),r.e(17)]).then(r.bind(null,"Q9jL"))}),{ssr:!1,loadableGenerated:{webpack:function(){return["Q9jL"]},modules:["../../../components/HImgSection"]}}),w=s()((function(){return Promise.all([r.e(0),r.e(2)]).then(r.bind(null,"h1bS"))}),{ssr:!1,loadableGenerated:{webpack:function(){return["h1bS"]},modules:["../../../components/Heading"]}}),S=s()((function(){return Promise.all([r.e(0),r.e(17)]).then(r.bind(null,"y/CX"))}),{ssr:!1,loadableGenerated:{webpack:function(){return["y/CX"]},modules:["../../../components/TItleList"]}}),O=s()((function(){return Promise.all([r.e(6),r.e(25),r.e(0),r.e(8),r.e(44)]).then(r.bind(null,"+TUq"))}),{ssr:!1,loadableGenerated:{webpack:function(){return["+TUq"]},modules:["../../../components/ProductDetailsTab"]}}),P=s()((function(){return Promise.all([r.e(0),r.e(17)]).then(r.bind(null,"0GkY"))}),{ssr:!1,loadableGenerated:{webpack:function(){return["0GkY"]},modules:["../../../components/ProductSlider"]}}),j=function(e){var t=e.product,r=Object(i.a)(e,["product"]),n=Object(f.useRouter)(),o=n.query.pid,a=[{title:"title",subTitle:"sub title",image:"/images/oil.png"},{title:"lorem",subTitle:"sub title",image:"/images/capsule-img.png"},{title:"ipsum",subTitle:"sub title",image:"/images/cbd-oil.png"}];console.log({props:r,pid:o,router:n});var u=Object(d.d)(t),c=Object(d.f)(t,"sectionB")||"/images/cbd-oil.png",l=Object(d.f)(t)?y.d.serverUrl+Object(d.f)(t):"/images/cbd-oil.png";return h(_,{headerTheme:"black"},h(v,{product:t,productAttr:u.filter((function(e,t){return t<2})),image:l}),h(g,{version:["full"],image:y.d.filePath+c},h("div",null,h(w,null,Object(d.e)(t))),h("div",{className:"c-product-single__list"},u.map((function(e,t){return t<2?null:h(S,{parentClass:"c-product-single",key:t,title:e.title},e.description)})))),h("div",{className:"c-product-single__details-wrapper"},h(O,{product:t,parentClass:"c-product-single"})),h("div",{className:"c-product-single__related-section"},h("div",{className:"row"},h("div",{className:"col-md-6"},h(w,{versions:["default","upper"]},"Acompany with")),h("div",{className:"col-md-6"},h(w,{subHeading:!0,versions:["default","lft-br"]},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.")),h("div",{className:"col-12"},h(P,{parentClass:"c-product-single",products:a})))))};j.getInitialProps=function(){var e=Object(a.a)(o.a.mark((function e(t){var r,n,a,i,u;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.query,n=y.d.baseUrl,e.next=4,m()(n+"/products/api/getbyid/"+r.pid);case 4:return a=e.sent,e.next=7,a.json();case 7:return i=e.sent,u=Object(d.j)([i.product_details]),e.abrupt("return",{product:u.length&&u[0],productObj:i});case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t.default=Object(p.b)((function(e){return e}))(j)},a6RD:function(e,t,r){"use strict";var n=r("oI91");function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.__esModule=!0,t.noSSR=c,t.default=function(e,t){var r=i.default,n={loading:function(e){e.error,e.isLoading;return e.pastDelay,null}};e instanceof Promise?n.loader=function(){return e}:"function"===typeof e?n.loader=e:"object"===typeof e&&(n=a(a({},n),e));if(n=a(a({},n),t),"object"===typeof e&&!(e instanceof Promise)&&(e.render&&(n.render=function(t,r){return e.render(r,t)}),e.modules)){r=i.default.Map;var o={},u=e.modules();Object.keys(u).forEach((function(e){var t=u[e];"function"!==typeof t.then?o[e]=t:o[e]=function(){return t.then((function(e){return e.default||e}))}})),n.loader=o}n.loadableGenerated&&delete(n=a(a({},n),n.loadableGenerated)).loadableGenerated;if("boolean"===typeof n.ssr){if(!n.ssr)return delete n.ssr,c(r,n);delete n.ssr}return r(n)};u(r("q1tI"));var i=u(r("2qu3"));function u(e){return e&&e.__esModule?e:{default:e}}function c(e,t){return delete t.webpack,delete t.modules,e(t)}},i2R6:function(e,t){function r(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}e.exports=function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}},jwwS:function(e,t,r){"use strict";var n;t.__esModule=!0,t.LoadableContext=void 0;var o=((n=r("q1tI"))&&n.__esModule?n:{default:n}).default.createContext(null);t.LoadableContext=o},o0o1:function(e,t,r){e.exports=r("ls82")},oI91:function(e,t){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}},qT12:function(e,t,r){"use strict";var n="function"===typeof Symbol&&Symbol.for,o=n?Symbol.for("react.element"):60103,a=n?Symbol.for("react.portal"):60106,i=n?Symbol.for("react.fragment"):60107,u=n?Symbol.for("react.strict_mode"):60108,c=n?Symbol.for("react.profiler"):60114,l=n?Symbol.for("react.provider"):60109,s=n?Symbol.for("react.context"):60110,d=n?Symbol.for("react.async_mode"):60111,f=n?Symbol.for("react.concurrent_mode"):60111,p=n?Symbol.for("react.forward_ref"):60112,b=n?Symbol.for("react.suspense"):60113,m=n?Symbol.for("react.suspense_list"):60120,y=n?Symbol.for("react.memo"):60115,h=n?Symbol.for("react.lazy"):60116,_=n?Symbol.for("react.block"):60121,v=n?Symbol.for("react.fundamental"):60117,g=n?Symbol.for("react.responder"):60118,w=n?Symbol.for("react.scope"):60119;function S(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case o:switch(e=e.type){case d:case f:case i:case c:case u:case b:return e;default:switch(e=e&&e.$$typeof){case s:case p:case h:case y:case l:return e;default:return t}}case a:return t}}}function O(e){return S(e)===f}t.AsyncMode=d,t.ConcurrentMode=f,t.ContextConsumer=s,t.ContextProvider=l,t.Element=o,t.ForwardRef=p,t.Fragment=i,t.Lazy=h,t.Memo=y,t.Portal=a,t.Profiler=c,t.StrictMode=u,t.Suspense=b,t.isAsyncMode=function(e){return O(e)||S(e)===d},t.isConcurrentMode=O,t.isContextConsumer=function(e){return S(e)===s},t.isContextProvider=function(e){return S(e)===l},t.isElement=function(e){return"object"===typeof e&&null!==e&&e.$$typeof===o},t.isForwardRef=function(e){return S(e)===p},t.isFragment=function(e){return S(e)===i},t.isLazy=function(e){return S(e)===h},t.isMemo=function(e){return S(e)===y},t.isPortal=function(e){return S(e)===a},t.isProfiler=function(e){return S(e)===c},t.isStrictMode=function(e){return S(e)===u},t.isSuspense=function(e){return S(e)===b},t.isValidElementType=function(e){return"string"===typeof e||"function"===typeof e||e===i||e===f||e===c||e===u||e===b||e===m||"object"===typeof e&&null!==e&&(e.$$typeof===h||e.$$typeof===y||e.$$typeof===l||e.$$typeof===s||e.$$typeof===p||e.$$typeof===v||e.$$typeof===g||e.$$typeof===w||e.$$typeof===_)},t.typeOf=S},rePB:function(e,t,r){"use strict";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r.d(t,"a",(function(){return n}))},vcXL:function(e,t,r){"use strict";var n=self.fetch.bind(self);e.exports=n,e.exports.default=e.exports},xSWb:function(e,t,r){"use strict";r.d(t,"g",(function(){return n})),r.d(t,"a",(function(){return o})),r.d(t,"c",(function(){return a})),r.d(t,"f",(function(){return i})),r.d(t,"e",(function(){return u})),r.d(t,"b",(function(){return c}));var n="MissValentine",o="https://missval.herokuapp.com/api",a="https://server1.cbdbene.com",i="https://server1.cbdbene.com/",u="https://admin.cbdbene.com/var/www/cbdbene_3rde/cbdbene/",c={background:"#ffffff",headerBgColor:"#000000",headerFontColor:"#ffffff",headerFontSize:"20px",botBubbleColor:"#eee9e3",botFontColor:"#202020",userBubbleColor:"#fff",userFontColor:"#4a4a4a"};t.d={imageUrl:i,projectName:n,baseUrl:o,serverUrl:"https://admin.cbdbene.com/",googleApiKey:"AIzaSyBXxXfKy5wtHEO9XniOvGEKPME-_ldClVk",shippingFreeAfter:75,shippingExtraRate:5,shippingStaticRate:5.95,referralPresent:25,defaultOrderStatus:"Transaction completed - label generated",defaultStatusInOrder:"in process",invoiceUrl:"https://admin.cbdbene.com/images/",enableCountry:["US","USA","United States"],subsPercent:10,accountTypeOpt:[{label:"Checking",value:"checking"},{label:"Savings",value:"savings"},{label:"Business Checking",value:"businessChecking"}],filePath:u,labSheetPath:"https://admin.cbdbene.com/var/www/cbdbene_3rde/cbdbene/",countryTax:.15,docMzUrl:"http://localhost:3001",customRates:[{id:"rate_custom1",object:"Rate",created_at:"2020-02-10T10:54:03Z",updated_at:"2020-02-10T10:54:03Z",mode:"test",service:"Priority",carrier:"USPS",rate:"8.42",currency:"USD",retail_rate:"14.90",retail_currency:"USD",list_rate:"11.19",list_currency:"USD",delivery_days:2,delivery_date:null,delivery_date_guaranteed:!1,est_delivery_days:2,shipment_id:"shp_2255eb7f0e8b4775abcfe009be9ba569",carrier_account_id:"ca_5cd23a24d9c3427780dcfde68fbb1c76",customName:"Standard",customRate:15.89},{id:"rate_custom2",object:"Rate",created_at:"2020-02-10T10:54:03Z",updated_at:"2020-02-10T10:54:03Z",mode:"test",service:"ParcelSelect",carrier:"USPS",rate:"10.89",currency:"USD",retail_rate:"10.89",retail_currency:"USD",list_rate:"10.89",list_currency:"USD",delivery_days:7,delivery_date:null,delivery_date_guaranteed:!1,est_delivery_days:7,shipment_id:"shp_2255eb7f0e8b4775abcfe009be9ba569",carrier_account_id:"ca_5cd23a24d9c3427780dcfde68fbb1c76",customName:"Priority",customRate:20.54},{id:"rate_custom3",object:"Rate",created_at:"2020-02-10T10:54:03Z",updated_at:"2020-02-10T10:54:03Z",mode:"test",service:"Express",carrier:"USPS",rate:"43.60",currency:"USD",retail_rate:"50.85",retail_currency:"USD",list_rate:"43.60",list_currency:"USD",delivery_days:null,delivery_date:null,delivery_date_guaranteed:!1,est_delivery_days:null,shipment_id:"shp_2255eb7f0e8b4775abcfe009be9ba569",carrier_account_id:"ca_5cd23a24d9c3427780dcfde68fbb1c76",customName:"Express",customRate:48.6}],chatTheme:c,topBarText:"Free shipping on all orders above $75.",contentUrl:a}}},[["NUXP",3,1,7,0,9,10,12,20]]]);