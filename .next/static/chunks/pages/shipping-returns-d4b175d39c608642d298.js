_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[73],{"/GRZ":function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},"2qu3":function(e,t,r){"use strict";var n=r("oI91"),a=r("/GRZ"),o=r("i2R6");function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){var r;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"===typeof e)return u(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return u(e,t)}(e))||t&&e&&"number"===typeof e.length){r&&(e=r);var n=0,a=function(){};return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,l=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return i=e.done,e},e:function(e){l=!0,o=e},f:function(){try{i||null==r.return||r.return()}finally{if(l)throw o}}}}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}t.__esModule=!0,t.default=void 0;var c,d=(c=r("q1tI"))&&c.__esModule?c:{default:c},f=r("8L3h"),p=r("jwwS");var m=[],y=[],b=!1;function h(e){var t=e(),r={loading:!0,loaded:null,error:null};return r.promise=t.then((function(e){return r.loading=!1,r.loaded=e,e})).catch((function(e){throw r.loading=!1,r.error=e,e})),r}function g(e){var t={loading:!1,loaded:{},error:null},r=[];try{Object.keys(e).forEach((function(n){var a=h(e[n]);a.loading?t.loading=!0:(t.loaded[n]=a.loaded,t.error=a.error),r.push(a.promise),a.promise.then((function(e){t.loaded[n]=e})).catch((function(e){t.error=e}))}))}catch(n){t.error=n}return t.promise=Promise.all(r).then((function(e){return t.loading=!1,e})).catch((function(e){throw t.loading=!1,e})),t}function _(e,t){return d.default.createElement(function(e){return e&&e.__esModule?e.default:e}(e),t)}function v(e,t){var r=Object.assign({loader:null,loading:null,delay:200,timeout:null,render:_,webpack:null,modules:null},t),n=null;function a(){if(!n){var t=new w(e,r);n={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return n.promise()}if(!b&&"function"===typeof r.webpack){var o=r.webpack();y.push((function(e){var t,r=s(o);try{for(r.s();!(t=r.n()).done;){var n=t.value;if(-1!==e.indexOf(n))return a()}}catch(i){r.e(i)}finally{r.f()}}))}var i=function(e,t){a();var o=d.default.useContext(p.LoadableContext),i=(0,f.useSubscription)(n);return d.default.useImperativeHandle(t,(function(){return{retry:n.retry}}),[]),o&&Array.isArray(r.modules)&&r.modules.forEach((function(e){o(e)})),d.default.useMemo((function(){return i.loading||i.error?d.default.createElement(r.loading,{isLoading:i.loading,pastDelay:i.pastDelay,timedOut:i.timedOut,error:i.error,retry:n.retry}):i.loaded?r.render(i.loaded,e):null}),[e,i])};return i.preload=function(){return a()},i.displayName="LoadableComponent",d.default.forwardRef(i)}var w=function(){function e(t,r){a(this,e),this._loadFn=t,this._opts=r,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}return o(e,[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var t=this._res,r=this._opts;t.loading&&("number"===typeof r.delay&&(0===r.delay?this._state.pastDelay=!0:this._delay=setTimeout((function(){e._update({pastDelay:!0})}),r.delay)),"number"===typeof r.timeout&&(this._timeout=setTimeout((function(){e._update({timedOut:!0})}),r.timeout))),this._res.promise.then((function(){e._update({}),e._clearTimeouts()})).catch((function(t){e._update({}),e._clearTimeouts()})),this._update({})}},{key:"_update",value:function(e){this._state=l(l({},this._state),{},{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach((function(e){return e()}))}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(e){var t=this;return this._callbacks.add(e),function(){t._callbacks.delete(e)}}}]),e}();function x(e){return v(h,e)}function S(e,t){for(var r=[];e.length;){var n=e.pop();r.push(n(t))}return Promise.all(r).then((function(){if(e.length)return S(e,t)}))}x.Map=function(e){if("function"!==typeof e.render)throw new Error("LoadableMap requires a `render(loaded, props)` function");return v(g,e)},x.preloadAll=function(){return new Promise((function(e,t){S(m).then(e,t)}))},x.preloadReady=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise((function(t){var r=function(){return b=!0,t()};S(y,e).then(r,r)}))},window.__NEXT_PRELOADREADY=x.preloadReady;var O=x;t.default=O},a6RD:function(e,t,r){"use strict";var n=r("oI91");function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.__esModule=!0,t.noSSR=s,t.default=function(e,t){var r=i.default,n={loading:function(e){e.error,e.isLoading;return e.pastDelay,null}};e instanceof Promise?n.loader=function(){return e}:"function"===typeof e?n.loader=e:"object"===typeof e&&(n=o(o({},n),e));if(n=o(o({},n),t),"object"===typeof e&&!(e instanceof Promise)&&(e.render&&(n.render=function(t,r){return e.render(r,t)}),e.modules)){r=i.default.Map;var a={},l=e.modules();Object.keys(l).forEach((function(e){var t=l[e];"function"!==typeof t.then?a[e]=t:a[e]=function(){return t.then((function(e){return e.default||e}))}})),n.loader=a}n.loadableGenerated&&delete(n=o(o({},n),n.loadableGenerated)).loadableGenerated;if("boolean"===typeof n.ssr){if(!n.ssr)return delete n.ssr,s(r,n);delete n.ssr}return r(n)};l(r("q1tI"));var i=l(r("2qu3"));function l(e){return e&&e.__esModule?e:{default:e}}function s(e,t){return delete t.webpack,delete t.modules,e(t)}},i2R6:function(e,t){function r(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}e.exports=function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}},jwwS:function(e,t,r){"use strict";var n;t.__esModule=!0,t.LoadableContext=void 0;var a=((n=r("q1tI"))&&n.__esModule?n:{default:n}).default.createContext(null);t.LoadableContext=a},oI91:function(e,t){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}},uKt4:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/shipping-returns",function(){return r("yNpS")}])},xSWb:function(e,t,r){"use strict";r.d(t,"g",(function(){return n})),r.d(t,"a",(function(){return a})),r.d(t,"c",(function(){return o})),r.d(t,"f",(function(){return i})),r.d(t,"e",(function(){return l})),r.d(t,"b",(function(){return s}));var n="MissValentine",a="https://missval.herokuapp.com/api",o="https://server1.cbdbene.com",i="https://server1.cbdbene.com/",l="https://admin.cbdbene.com/var/www/cbdbene_3rde/cbdbene/",s={background:"#ffffff",headerBgColor:"#000000",headerFontColor:"#ffffff",headerFontSize:"20px",botBubbleColor:"#eee9e3",botFontColor:"#202020",userBubbleColor:"#fff",userFontColor:"#4a4a4a"};t.d={imageUrl:i,projectName:n,baseUrl:a,serverUrl:"https://admin.cbdbene.com/",googleApiKey:"AIzaSyBXxXfKy5wtHEO9XniOvGEKPME-_ldClVk",shippingFreeAfter:75,shippingExtraRate:5,shippingStaticRate:5.95,referralPresent:25,defaultOrderStatus:"Transaction completed - label generated",defaultStatusInOrder:"in process",invoiceUrl:"https://admin.cbdbene.com/images/",enableCountry:["US","USA","United States"],subsPercent:10,accountTypeOpt:[{label:"Checking",value:"checking"},{label:"Savings",value:"savings"},{label:"Business Checking",value:"businessChecking"}],filePath:l,labSheetPath:"https://admin.cbdbene.com/var/www/cbdbene_3rde/cbdbene/",countryTax:.15,docMzUrl:"http://localhost:3001",customRates:[{id:"rate_custom1",object:"Rate",created_at:"2020-02-10T10:54:03Z",updated_at:"2020-02-10T10:54:03Z",mode:"test",service:"Priority",carrier:"USPS",rate:"8.42",currency:"USD",retail_rate:"14.90",retail_currency:"USD",list_rate:"11.19",list_currency:"USD",delivery_days:2,delivery_date:null,delivery_date_guaranteed:!1,est_delivery_days:2,shipment_id:"shp_2255eb7f0e8b4775abcfe009be9ba569",carrier_account_id:"ca_5cd23a24d9c3427780dcfde68fbb1c76",customName:"Standard",customRate:15.89},{id:"rate_custom2",object:"Rate",created_at:"2020-02-10T10:54:03Z",updated_at:"2020-02-10T10:54:03Z",mode:"test",service:"ParcelSelect",carrier:"USPS",rate:"10.89",currency:"USD",retail_rate:"10.89",retail_currency:"USD",list_rate:"10.89",list_currency:"USD",delivery_days:7,delivery_date:null,delivery_date_guaranteed:!1,est_delivery_days:7,shipment_id:"shp_2255eb7f0e8b4775abcfe009be9ba569",carrier_account_id:"ca_5cd23a24d9c3427780dcfde68fbb1c76",customName:"Priority",customRate:20.54},{id:"rate_custom3",object:"Rate",created_at:"2020-02-10T10:54:03Z",updated_at:"2020-02-10T10:54:03Z",mode:"test",service:"Express",carrier:"USPS",rate:"43.60",currency:"USD",retail_rate:"50.85",retail_currency:"USD",list_rate:"43.60",list_currency:"USD",delivery_days:null,delivery_date:null,delivery_date_guaranteed:!1,est_delivery_days:null,shipment_id:"shp_2255eb7f0e8b4775abcfe009be9ba569",carrier_account_id:"ca_5cd23a24d9c3427780dcfde68fbb1c76",customName:"Express",customRate:48.6}],chatTheme:s,topBarText:"Free shipping on all orders above $75.",contentUrl:o}},yNpS:function(e,t,r){"use strict";r.r(t);var n=r("q1tI"),a=r.n(n),o=r("a6RD"),i=r.n(o),l=r("xSWb"),s=a.a.createElement,u=i()((function(){return Promise.all([r.e(1),r.e(5),r.e(4),r.e(7),r.e(33)]).then(r.bind(null,"Vw5z"))}),{ssr:!1,loadableGenerated:{webpack:function(){return["Vw5z"]},modules:["../components/Layouts/Layout"]}}),c=i()((function(){return Promise.all([r.e(0),r.e(2),r.e(26)]).then(r.bind(null,"h1bS"))}),{ssr:!1,loadableGenerated:{webpack:function(){return["h1bS"]},modules:["../components/Heading"]}});t.default=function(){return s(u,{headerVersions:["bg-dark"],headerTheme:"black"},s("div",{className:"c-privacy__page-title"},s(c,{style:{fontFamily:"futuraBT-medium",fontSize:"32px",marginTop:"40px",marginBottom:"20px"},versions:["large"],parentClass:"c-privacy"},"SHIPPING & RETURNS")),s("div",{className:"c-privacy__content"},s(c,{style:{fontFamily:"futuraBT-medium",fontSize:"20px",marginTop:"20px",marginBottom:"20px",marginLeft:"20px"}},"When will I receive my order?"),s("div",{style:{fontFamily:"futuraBT-light",fontSize:"16px",marginLeft:"20px"},className:"container"},s("p",null,"Our packages are assembled by hand and processed within 24 to 48 hours. Any order placed on a weekend will be shipped the next business day. Business days are Monday through Friday. Orders placed around the holidays may experience delays. The shipping transit times listed at checkout do not include assembly/processing time."),s("p",null,"Once your order is shipped you will receive an email link to track your shipment.")),s(c,{style:{fontFamily:"futuraBT-medium",fontSize:"20px",marginTop:"20px",marginBottom:"20px",marginLeft:"20px"}},"What are my shipping options?"),s("div",{style:{fontFamily:"futuraBT-light",fontSize:"16px",marginLeft:"20px"},className:"container"},s("p",null,"We offer three shipping options within the U.S."),s("ul",null,s("li",null,"Free standard shipping on all orders over $50 in the US."),s("li",null,"Expedited (3-5 business days after processing)"),s("li",null,"Express (2 business days after processing)")),s("p",null,"We offer International Shipping via UPS"),s("ul",null,s("li",null,"International shipments (approximately 7-10 days after processing)"))),s(c,{style:{fontFamily:"futuraBT-medium",fontSize:"20px",marginTop:"20px",marginBottom:"20px",marginLeft:"20px"}},"Where do you ship?"),s("div",{style:{fontFamily:"futuraBT-light",fontSize:"16px",marginLeft:"20px"},className:"container"},s("p",null,"We ship to all 50 states in the U.S. as well as internationally to most countries. All custom duties, import taxes or fees, if assessed, at your country are your responsibility. We strictly follow all regulations regarding the shipment of our products within the U.S. and abroad. If you any specific questions about shipment to your country, please contact us at"," ",s("a",{style:{color:"black",fontWeight:"bold",marginLeft:"8px",marginRight:"8px"},href:"mailto:help@cbdbene.com"},"help@cbdbene.com"),".")),s(c,{style:{fontFamily:"futuraBT-medium",fontSize:"20px",marginTop:"20px",marginBottom:"20px",marginLeft:"20px"}},"How do I track your order?"),s("div",{style:{fontFamily:"futuraBT-light",fontSize:"16px",marginLeft:"20px"},className:"container"},s("p",null,"Once an order is placed a notification email is sent to your email address. Please verify your email address is correct or check your SPAM folder if you did not receive a notification. It may take 1- 2 full business days to process the order (before it is actually shipped) and to generate a tracking code. The order can be tracked on the carrier\u2019s website with the tracking code."),s("p",null,"Orders placed on our website may be delivered by one of several different carriers and shipping methods, although the main carrier is UPS.")),s(c,{style:{fontFamily:"futuraBT-medium",fontSize:"20px",marginTop:"20px",marginBottom:"20px",marginLeft:"20px"}},"Finding Your Order Status"),s("div",{style:{fontFamily:"futuraBT-light",fontSize:"16px",marginLeft:"20px"},className:"container"},s("p",null,"Once your order leaves our warehouse, it is handled by a carrier (such as FedEx or UPS) that provides tracking information until your order is delivered. You will receive e-mail notifications about the status of your order. You can also sign-in to \u201cMy Orders\u201d at ",s("a",{style:{color:"black",fontWeight:"bold",marginLeft:"8px",marginRight:"8px"},href:"https://cbdbene.com/"},"www.cbdbene.com")," anytime. We store information about your recent order (including tracking information) as well as past orders."),s("p",null,"*Tracking information may not be available for up 1- 2 business days after an item has shipped from our warehouse."),s("p",null,"Email us at",s("a",{style:{color:"black",fontWeight:"bold",marginLeft:"8px",marginRight:"8px"},href:"mailto:sales@cbdbene.com"},"sales@cbdbene.com"),"if you have any questions about your order.")),s(c,{style:{fontFamily:"futuraBT-medium",fontSize:"20px",marginTop:"20px",marginBottom:"20px",marginLeft:"20px"},versions:["large"]},"Can I store my shipping address?"),s("p",{style:{fontFamily:"futuraBT-light",fontSize:"16px",marginLeft:"20px"}},"Yes, please visit the \u201cMy Profile\u201d section to update your shipping addresses. Make sure to hit save once add or edit your shipping address. If you signed up for a subscription, you can also update your default shipping address in the \u201cMy\xa0Subscription\u201d section."),s(c,{style:{fontFamily:"futuraBT-medium",fontSize:"20px",marginTop:"20px",marginBottom:"20px",marginLeft:"20px"}},"Return Policy"),s("div",{style:{fontFamily:"futuraBT-light",fontSize:"16px",marginLeft:"20px",marginBottom:"40px"},className:"container"},s("p",null,"Unopened and unused product can be returned within 60 days of receiving it, please see our Returns Process below."),s("ol",null,s("li",null,"Email us at\xa0",s("a",{style:{color:"black",fontWeight:"bold"},href:"mailto:sales@cbdbene.com"},"sales@cbdbene.com\xa0")," ","to alert us that you will be returning your UNOPENED product within the 60 days and request the Return Shipping Address."),s("li",null,"Once you have shipped your product back to us \u2013 please also email the tracking number to"," ",s("a",{style:{color:"black",fontWeight:"bold"},href:"mailto:sales@cbdbene.com"},"sales@cbdbene.com")," ","so we can keep an eye out for it."),s("li",null,"Once we receive your package and we can confirm it\u2019s condition, we will issue you a refund for the product(s) and email you a confirmation. Please allow 7-10 days for the refund to post to your statement.")),s("p",null,"*If you have any questions regarding our return policy please email us at",s("a",{style:{color:"black",fontWeight:"bold",marginLeft:"8px"},href:"mailto:help@cbdbene.com"},"help@cbdbene.com")),s("p",null,l.g," will only accept returns and refunds from purchases made on ",s("a",{style:{color:"black",fontWeight:"bold",marginLeft:"8px",marginRight:"8px"},href:"https://cbdbene.com/"},"www.cbdbene.com"),". ",l.g," will not accept returns from a purchase made in a retail store."))))}}},[["uKt4",3,1,0]]]);