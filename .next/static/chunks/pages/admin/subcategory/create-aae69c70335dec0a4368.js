_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[59,157],{"/GRZ":function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},"0bRm":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return d}));var r=n("q1tI"),o=n.n(r),a=n("5rEg"),c=n("2/Rp"),i=n("1htE"),s=n("tWEw"),u=(n("YWgu"),n("2fM7")),l=o.a.createElement,f=u.a.Option;function d(){var e=Object(r.useState)(""),t=e[0],n=e[1],o=Object(r.useState)([]),d=o[0],p=o[1],m=Object(r.useState)(null),b=m[0],h=m[1];return Object(r.useEffect)((function(){Object(s.g)().then((function(e){return e&&e.data&&p(e.data.data)}))}),[]),l(i.a,null,l("h3",null,"Create a New Category"),d.length>1?l("div",null,l(u.a,{placeholder:"Select Category Category",style:{width:"100%"},onChange:function(e){h(e)},bordered:!0},d.map((function(e,t){return l(f,{key:t,value:e._id,name:e.name},e.name)}))),l(a.a,{addonBefore:"Enter Sub-Category Name",value:t,onChange:function(e){return n(e.target.value)},placeholder:"ex Bra, lingrie",disabled:null===b}),l(c.a,{onClick:function(e){e.preventDefault(),Object(s.c)({name:t,category:b}).then((function(e){e.data&&e.data.success&&(n(""),h(null))}))},type:"submit",className:""},"Submit")):l("div",null,"Create a Category first"))}},"1htE":function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n("q1tI"),o=n.n(r),a=n("YFqc"),c=n.n(a),i=o.a.createElement;function s(){return i("div",{className:"c-adminpanel-left"},i(c.a,{href:"/",className:""},i("h3",{className:"c-adminpanel-left__weblink"},"Go To Website")),i("h3",{className:"c-adminpanel-left__heading"},"Admin Navigation"),i("ul",{className:"c-adminpanel-left__list"},i("li",{className:"c-adminpanel-left__list-item"},i(c.a,{href:"/admin/dashboard",className:""},"Profile")),i("li",{className:"c-adminpanel-left__list-item"},i(c.a,{href:"/admin/category/create",className:""},"Create Category")),i("li",{className:"c-adminpanel-left__list-item"},i(c.a,{href:"/admin/category",className:""},"Manage Categories")),i("li",{className:"c-adminpanel-left__list-item"},i(c.a,{href:"/admin/subcategory/create",className:""},"Create Sub-Category")),i("li",{className:"c-adminpanel-left__list-item"},i(c.a,{href:"/admin/subcategory",className:""},"Manage Sub-Categories")),i("li",{className:"c-adminpanel-left__list-item"},i(c.a,{href:"/admin/product/create",className:""},"Create Product")),i("li",{className:"c-adminpanel-left__list-item "},i(c.a,{href:"/admin/product",className:""},"Manage Products")),i("li",{className:"c-adminpanel-left__list-item "},i(c.a,{href:"/admin/contact",className:""},"Contact/Enquiry Request"))))}var u=o.a.createElement;function l(e){return u("div",{className:"c-adminpanel"},u(s,null),u("div",{className:"c-adminpanel-right"},e.children))}},"3r9c":function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"===typeof window&&(n=window)}e.exports=n},"6CfX":function(e,t,n){"use strict";var r={};function o(e,t){0}function a(e,t,n){t||r[n]||(e(!1,n),r[n]=!0)}var c=function(e,t){a(o,e,t)};t.a=function(e,t,n){c(e,"[antd: ".concat(t,"] ").concat(n))}},"8oxB":function(e,t){var n,r,o=e.exports={};function a(){throw new Error("setTimeout has not been defined")}function c(){throw new Error("clearTimeout has not been defined")}function i(e){if(n===setTimeout)return setTimeout(e,0);if((n===a||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"===typeof setTimeout?setTimeout:a}catch(e){n=a}try{r="function"===typeof clearTimeout?clearTimeout:c}catch(e){r=c}}();var s,u=[],l=!1,f=-1;function d(){l&&s&&(l=!1,s.length?u=s.concat(u):f=-1,u.length&&p())}function p(){if(!l){var e=i(d);l=!0;for(var t=u.length;t;){for(s=u,u=[];++f<t;)s&&s[f].run();f=-1,t=u.length}s=null,l=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===c||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function m(e,t){this.fun=e,this.array=t}function b(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];u.push(new m(e,t)),1!==u.length||l||i(p)},m.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=b,o.addListener=b,o.once=b,o.off=b,o.removeListener=b,o.removeAllListeners=b,o.emit=b,o.prependListener=b,o.prependOnceListener=b,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},"BGR+":function(e,t,n){"use strict";var r=n("QbLZ"),o=n.n(r);t.a=function(e,t){for(var n=o()({},e),r=0;r<t.length;r++){delete n[t[r]]}return n}},BVgP:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.warning=o,t.note=a,t.resetWarned=function(){r={}},t.call=c,t.warningOnce=i,t.noteOnce=function(e,t){c(a,e,t)},t.default=void 0;var r={};function o(e,t){0}function a(e,t){0}function c(e,t,n){t||r[n]||(e(!1,n),r[n]=!0)}function i(e,t){c(o,e,t)}var s=i;t.default=s},"HaE+":function(e,t,n){"use strict";function r(e,t,n,r,o,a,c){try{var i=e[a](c),s=i.value}catch(u){return void n(u)}i.done?t(s):Promise.resolve(s).then(r,o)}function o(e){return function(){var t=this,n=arguments;return new Promise((function(o,a){var c=e.apply(t,n);function i(e){r(c,o,a,i,s,"next",e)}function s(e){r(c,o,a,i,s,"throw",e)}i(void 0)}))}}n.d(t,"a",(function(){return o}))},ITDU:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if(e instanceof HTMLElement)return e;return o.default.findDOMNode(e)};var r,o=(r=n("i8i4"))&&r.__esModule?r:{default:r}},TOwV:function(e,t,n){"use strict";e.exports=n("qT12")},VCL8:function(e,t,n){"use strict";function r(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);null!==e&&void 0!==e&&this.setState(e)}function o(e){this.setState(function(t){var n=this.constructor.getDerivedStateFromProps(e,t);return null!==n&&void 0!==n?n:null}.bind(this))}function a(e,t){try{var n=this.props,r=this.state;this.props=e,this.state=t,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(n,r)}finally{this.props=n,this.state=r}}function c(e){var t=e.prototype;if(!t||!t.isReactComponent)throw new Error("Can only polyfill class components");if("function"!==typeof e.getDerivedStateFromProps&&"function"!==typeof t.getSnapshotBeforeUpdate)return e;var n=null,c=null,i=null;if("function"===typeof t.componentWillMount?n="componentWillMount":"function"===typeof t.UNSAFE_componentWillMount&&(n="UNSAFE_componentWillMount"),"function"===typeof t.componentWillReceiveProps?c="componentWillReceiveProps":"function"===typeof t.UNSAFE_componentWillReceiveProps&&(c="UNSAFE_componentWillReceiveProps"),"function"===typeof t.componentWillUpdate?i="componentWillUpdate":"function"===typeof t.UNSAFE_componentWillUpdate&&(i="UNSAFE_componentWillUpdate"),null!==n||null!==c||null!==i){var s=e.displayName||e.name,u="function"===typeof e.getDerivedStateFromProps?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error("Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n"+s+" uses "+u+" but also contains the following legacy lifecycles:"+(null!==n?"\n  "+n:"")+(null!==c?"\n  "+c:"")+(null!==i?"\n  "+i:"")+"\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://fb.me/react-async-component-lifecycle-hooks")}if("function"===typeof e.getDerivedStateFromProps&&(t.componentWillMount=r,t.componentWillReceiveProps=o),"function"===typeof t.getSnapshotBeforeUpdate){if("function"!==typeof t.componentDidUpdate)throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");t.componentWillUpdate=a;var l=t.componentDidUpdate;t.componentDidUpdate=function(e,t,n){var r=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:n;l.call(this,e,t,r)}}return e}n.r(t),n.d(t,"polyfill",(function(){return c})),r.__suppressDeprecationWarning=!0,o.__suppressDeprecationWarning=!0,a.__suppressDeprecationWarning=!0},"Wol/":function(e,t,n){"use strict";var r,o=n("rePB"),a=n("xSWb"),c=a.d.baseUrl,i=a.d.docMzUrl,s=a.d.contentUrl,u=(r={getAllProducts:"".concat(c,"/product/all"),getAllCategories:"".concat(c,"/category/all"),getProductById:"".concat(c,"/product/"),getCategoryById:"".concat(c,"/category/"),signInApi:"".concat(c,"/auth/signin"),contact:"".concat(c,"/contact/"),getAllCombos:"".concat(c,"/products/api/combos/all/"),getProductByName:"".concat(c,"/products/api/getbyname/"),getReviews:"".concat(c,"/review/getapproved/"),addReviews:"".concat(c,"/review/add/"),addToWishList:"".concat(c,"/wishlist/api/add/"),getWishList:"".concat(c,"/wishlist/api/byuser/"),deleteWishList:"".concat(c,"/wishlist/api/delete/"),userRegistration:"".concat(c,"/users/api/register/"),userLogin:"".concat(c,"/users/api/login/"),updateUserDetails:"".concat(c,"/users/api/profile/"),getUserDetails:"".concat(c,"/users/api/profile/"),updateUserPassword:"".concat(c,"/users/api/profile/password/"),forgotPassword:"".concat(c,"/users/api/forgetpassword/"),getShippingRates:"".concat(c,"/ship/shipment/"),confirmShipment:"".concat(c,"/ship/confirm/"),getTaxValue:"".concat(c,"/getinfo/gettax/"),authorizeCharge:"".concat(c,"/authorize/charge/"),authorizeChargeProfile:"".concat(c,"/authorize/chargeprofile/"),authorizeChargeBank:"".concat(c,"/authorize/charge/bank/"),authorizeSubscription:"".concat(c,"/authorize/create/subscription/"),authorizeSubscriptionProfile:"".concat(c,"/authorize/create/subscription/profile/"),authorizeSubscriptionBank:"".concat(c,"/authorize/create/subscription/bank/")},Object(o.a)(r,"authorizeSubscriptionBank","".concat(c,"/authorize/create/subscription/bank/")),Object(o.a)(r,"authorizeSubscriptionCancel","".concat(c,"/authorize/cancel/subscription/")),Object(o.a)(r,"authorizeAddCard","".concat(c,"/authorize/addcard/")),Object(o.a)(r,"authorizeSaveCard","".concat(c,"/authorize/savecard/")),Object(o.a)(r,"authorizeDeleteCard","".concat(c,"/authorize/deletecard/")),Object(o.a)(r,"placeOrder","".concat(c,"/order/add/")),Object(o.a)(r,"placeOrderNew","".concat(c,"/order/process/order/")),Object(o.a)(r,"allOrderList","".concat(c,"/order/getorders/")),Object(o.a)(r,"orderList","".concat(c,"/order/api/getbyuser/")),Object(o.a)(r,"trackOrder","".concat(c,"/ship/track")),Object(o.a)(r,"getAllCreatives","".concat(c,"/ambassador-portal/creatives/api/all/")),Object(o.a)(r,"getAmbassadorDetails","".concat(c,"/ambassador-portal/stats/")),Object(o.a)(r,"updateAff","".concat(c,"/ambassador-portal/update/")),Object(o.a)(r,"ambassadorPortalLogin","".concat(c,"/ambassador-portal/login/")),Object(o.a)(r,"ambassadorPortalRegistration","".concat(c,"/ambassador-portal/register/")),Object(o.a)(r,"addAmbassador","".concat(c,"/ambassador-portal/add/url/")),Object(o.a)(r,"forgotPasswordAff","".concat(c,"/ambassador-portal/forgetpassword/")),Object(o.a)(r,"getDoctors","".concat(i,"/doctors/get")),Object(o.a)(r,"getDoctorById","".concat(i,"/doctors/getdoc/")),Object(o.a)(r,"getBlogs","".concat(s,"/Blog/get/tag")),Object(o.a)(r,"getCoupon","".concat(c,"/stripe/coupon/list")),Object(o.a)(r,"getCategoryByName","".concat(s,"/Category/getData/")),Object(o.a)(r,"getBannerByName","".concat(s,"/Banner/getData/")),Object(o.a)(r,"addSubscriber","".concat(c,"/subscribedData/add")),Object(o.a)(r,"getSubscribers","".concat(c,"/subscribedData/get")),Object(o.a)(r,"getLearn","".concat(s,"/Learn/getLearn")),r);t.a=u},XZ74:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.supportRef=function(e){return!(e.type&&e.type.prototype&&!e.type.prototype.render)}},YWgu:function(e,t,n){},ZE5u:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function e(t){var n=[];return o.default.Children.forEach(t,(function(t){void 0!==t&&null!==t&&(Array.isArray(t)?n=n.concat(e(t)):(0,a.isFragment)(t)&&t.props?n=n.concat(e(t.props.children)):n.push(t))})),n};var r,o=(r=n("q1tI"))&&r.__esModule?r:{default:r},a=n("TOwV")},i2R6:function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}},o0o1:function(e,t,n){e.exports=n("ls82")},qT12:function(e,t,n){"use strict";var r="function"===typeof Symbol&&Symbol.for,o=r?Symbol.for("react.element"):60103,a=r?Symbol.for("react.portal"):60106,c=r?Symbol.for("react.fragment"):60107,i=r?Symbol.for("react.strict_mode"):60108,s=r?Symbol.for("react.profiler"):60114,u=r?Symbol.for("react.provider"):60109,l=r?Symbol.for("react.context"):60110,f=r?Symbol.for("react.async_mode"):60111,d=r?Symbol.for("react.concurrent_mode"):60111,p=r?Symbol.for("react.forward_ref"):60112,m=r?Symbol.for("react.suspense"):60113,b=r?Symbol.for("react.suspense_list"):60120,h=r?Symbol.for("react.memo"):60115,y=r?Symbol.for("react.lazy"):60116,g=r?Symbol.for("react.block"):60121,v=r?Symbol.for("react.fundamental"):60117,_=r?Symbol.for("react.responder"):60118,S=r?Symbol.for("react.scope"):60119;function w(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case o:switch(e=e.type){case f:case d:case c:case s:case i:case m:return e;default:switch(e=e&&e.$$typeof){case l:case p:case y:case h:case u:return e;default:return t}}case a:return t}}}function O(e){return w(e)===d}t.AsyncMode=f,t.ConcurrentMode=d,t.ContextConsumer=l,t.ContextProvider=u,t.Element=o,t.ForwardRef=p,t.Fragment=c,t.Lazy=y,t.Memo=h,t.Portal=a,t.Profiler=s,t.StrictMode=i,t.Suspense=m,t.isAsyncMode=function(e){return O(e)||w(e)===f},t.isConcurrentMode=O,t.isContextConsumer=function(e){return w(e)===l},t.isContextProvider=function(e){return w(e)===u},t.isElement=function(e){return"object"===typeof e&&null!==e&&e.$$typeof===o},t.isForwardRef=function(e){return w(e)===p},t.isFragment=function(e){return w(e)===c},t.isLazy=function(e){return w(e)===y},t.isMemo=function(e){return w(e)===h},t.isPortal=function(e){return w(e)===a},t.isProfiler=function(e){return w(e)===s},t.isStrictMode=function(e){return w(e)===i},t.isSuspense=function(e){return w(e)===m},t.isValidElementType=function(e){return"string"===typeof e||"function"===typeof e||e===c||e===d||e===s||e===i||e===m||e===b||"object"===typeof e&&null!==e&&(e.$$typeof===y||e.$$typeof===h||e.$$typeof===u||e.$$typeof===l||e.$$typeof===p||e.$$typeof===v||e.$$typeof===_||e.$$typeof===S||e.$$typeof===g)},t.typeOf=w},rePB:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))},sqVE:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/subcategory/create",function(){return n("0bRm")}])},t23M:function(e,t,n){"use strict";function r(e){return(r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function i(e){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var u=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t},l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var f=u(n("q1tI")),d=l(n("ITDU")),p=l(n("ZE5u")),m=l(n("BVgP")),b=n("z61a"),h=l(n("bdgK")),y=n("XZ74"),g=function(e){function t(){var e;return o(this,t),(e=c(this,i(t).apply(this,arguments))).resizeObserver=null,e.childNode=null,e.currentElement=null,e.state={width:0,height:0},e.onResize=function(t){var n=e.props.onResize,r=t[0].target.getBoundingClientRect(),o=r.width,a=r.height,c=Math.floor(o),i=Math.floor(a);if(e.state.width!==c||e.state.height!==i){var s={width:c,height:i};e.setState(s),n&&n(s)}},e.setChildNode=function(t){e.childNode=t},e}var n,r,u;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(t,e),n=t,(r=[{key:"componentDidMount",value:function(){this.onComponentUpdated()}},{key:"componentDidUpdate",value:function(){this.onComponentUpdated()}},{key:"componentWillUnmount",value:function(){this.destroyObserver()}},{key:"onComponentUpdated",value:function(){if(this.props.disabled)this.destroyObserver();else{var e=d.default(this.childNode||this);e!==this.currentElement&&(this.destroyObserver(),this.currentElement=e),!this.resizeObserver&&e&&(this.resizeObserver=new h.default(this.onResize),this.resizeObserver.observe(e))}}},{key:"destroyObserver",value:function(){this.resizeObserver&&(this.resizeObserver.disconnect(),this.resizeObserver=null)}},{key:"render",value:function(){var e=this.props.children,t=p.default(e);if(t.length>1)m.default(!1,"Find more than one child node with `children` in ResizeObserver. Will only observe first one.");else if(0===t.length)return m.default(!1,"`children` of ResizeObserver is empty. Nothing is in observe."),null;var n=t[0];if(f.isValidElement(n)&&y.supportRef(n)){var r=n.ref;t[0]=f.cloneElement(n,{ref:b.composeRef(r,this.setChildNode)})}return 1===t.length?t[0]:t.map((function(e,t){return!f.isValidElement(e)||"key"in e&&null!==e.key?e:f.cloneElement(e,{key:"".concat("rc-observer-key","-").concat(t)})}))}}])&&a(n.prototype,r),u&&a(n,u),t}(f.Component);g.displayName="ResizeObserver",t.default=g},xSWb:function(e,t,n){"use strict";n.d(t,"g",(function(){return r})),n.d(t,"a",(function(){return o})),n.d(t,"c",(function(){return a})),n.d(t,"f",(function(){return c})),n.d(t,"e",(function(){return i})),n.d(t,"b",(function(){return s}));var r="MissValentine",o="https://missval.herokuapp.com/api",a="https://server1.cbdbene.com",c="https://server1.cbdbene.com/",i="https://admin.cbdbene.com/var/www/cbdbene_3rde/cbdbene/",s={background:"#ffffff",headerBgColor:"#000000",headerFontColor:"#ffffff",headerFontSize:"20px",botBubbleColor:"#eee9e3",botFontColor:"#202020",userBubbleColor:"#fff",userFontColor:"#4a4a4a"};t.d={imageUrl:c,projectName:r,baseUrl:o,serverUrl:"https://admin.cbdbene.com/",googleApiKey:"AIzaSyBXxXfKy5wtHEO9XniOvGEKPME-_ldClVk",shippingFreeAfter:75,shippingExtraRate:5,shippingStaticRate:5.95,referralPresent:25,defaultOrderStatus:"Transaction completed - label generated",defaultStatusInOrder:"in process",invoiceUrl:"https://admin.cbdbene.com/images/",enableCountry:["US","USA","United States"],subsPercent:10,accountTypeOpt:[{label:"Checking",value:"checking"},{label:"Savings",value:"savings"},{label:"Business Checking",value:"businessChecking"}],filePath:i,labSheetPath:"https://admin.cbdbene.com/var/www/cbdbene_3rde/cbdbene/",countryTax:.15,docMzUrl:"http://localhost:3001",customRates:[{id:"rate_custom1",object:"Rate",created_at:"2020-02-10T10:54:03Z",updated_at:"2020-02-10T10:54:03Z",mode:"test",service:"Priority",carrier:"USPS",rate:"8.42",currency:"USD",retail_rate:"14.90",retail_currency:"USD",list_rate:"11.19",list_currency:"USD",delivery_days:2,delivery_date:null,delivery_date_guaranteed:!1,est_delivery_days:2,shipment_id:"shp_2255eb7f0e8b4775abcfe009be9ba569",carrier_account_id:"ca_5cd23a24d9c3427780dcfde68fbb1c76",customName:"Standard",customRate:15.89},{id:"rate_custom2",object:"Rate",created_at:"2020-02-10T10:54:03Z",updated_at:"2020-02-10T10:54:03Z",mode:"test",service:"ParcelSelect",carrier:"USPS",rate:"10.89",currency:"USD",retail_rate:"10.89",retail_currency:"USD",list_rate:"10.89",list_currency:"USD",delivery_days:7,delivery_date:null,delivery_date_guaranteed:!1,est_delivery_days:7,shipment_id:"shp_2255eb7f0e8b4775abcfe009be9ba569",carrier_account_id:"ca_5cd23a24d9c3427780dcfde68fbb1c76",customName:"Priority",customRate:20.54},{id:"rate_custom3",object:"Rate",created_at:"2020-02-10T10:54:03Z",updated_at:"2020-02-10T10:54:03Z",mode:"test",service:"Express",carrier:"USPS",rate:"43.60",currency:"USD",retail_rate:"50.85",retail_currency:"USD",list_rate:"43.60",list_currency:"USD",delivery_days:null,delivery_date:null,delivery_date_guaranteed:!1,est_delivery_days:null,shipment_id:"shp_2255eb7f0e8b4775abcfe009be9ba569",carrier_account_id:"ca_5cd23a24d9c3427780dcfde68fbb1c76",customName:"Express",customRate:48.6}],chatTheme:s,topBarText:"Free shipping on all orders above $75.",contentUrl:a}},z61a:function(e,t,n){"use strict";function r(e){return(r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){"function"===typeof e?e(t):"object"===r(e)&&e&&"current"in e&&(e.current=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.fillRef=o,t.composeRef=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){t.forEach((function(t){o(t,e)}))}},t.supportRef=function(e){if(e.type&&e.type.prototype&&!e.type.prototype.render)return!1;if("function"===typeof e&&e.prototype&&!e.prototype.render)return!1;return!0}}},[["sqVE",3,1,6,5,4,7,0,9,8,10,11,12,13,16,15,21,14,19,35]]]);