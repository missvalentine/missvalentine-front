_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[67],{"/GRZ":function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},"2qu3":function(e,t,r){"use strict";var n=r("oI91"),o=r("/GRZ"),a=r("i2R6");function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){var r;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"===typeof e)return c(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return c(e,t)}(e))||t&&e&&"number"===typeof e.length){r&&(e=r);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,u=!0,i=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return u=e.done,e},e:function(e){i=!0,a=e},f:function(){try{u||null==r.return||r.return()}finally{if(i)throw a}}}}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}t.__esModule=!0,t.default=void 0;var s,f=(s=r("q1tI"))&&s.__esModule?s:{default:s},d=r("8L3h"),p=r("jwwS");var b=[],h=[],y=!1;function m(e){var t=e(),r={loading:!0,loaded:null,error:null};return r.promise=t.then((function(e){return r.loading=!1,r.loaded=e,e})).catch((function(e){throw r.loading=!1,r.error=e,e})),r}function v(e){var t={loading:!1,loaded:{},error:null},r=[];try{Object.keys(e).forEach((function(n){var o=m(e[n]);o.loading?t.loading=!0:(t.loaded[n]=o.loaded,t.error=o.error),r.push(o.promise),o.promise.then((function(e){t.loaded[n]=e})).catch((function(e){t.error=e}))}))}catch(n){t.error=n}return t.promise=Promise.all(r).then((function(e){return t.loading=!1,e})).catch((function(e){throw t.loading=!1,e})),t}function _(e,t){return f.default.createElement(function(e){return e&&e.__esModule?e.default:e}(e),t)}function w(e,t){var r=Object.assign({loader:null,loading:null,delay:200,timeout:null,render:_,webpack:null,modules:null},t),n=null;function o(){if(!n){var t=new g(e,r);n={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return n.promise()}if(!y&&"function"===typeof r.webpack){var a=r.webpack();h.push((function(e){var t,r=l(a);try{for(r.s();!(t=r.n()).done;){var n=t.value;if(-1!==e.indexOf(n))return o()}}catch(u){r.e(u)}finally{r.f()}}))}var u=function(e,t){o();var a=f.default.useContext(p.LoadableContext),u=(0,d.useSubscription)(n);return f.default.useImperativeHandle(t,(function(){return{retry:n.retry}}),[]),a&&Array.isArray(r.modules)&&r.modules.forEach((function(e){a(e)})),f.default.useMemo((function(){return u.loading||u.error?f.default.createElement(r.loading,{isLoading:u.loading,pastDelay:u.pastDelay,timedOut:u.timedOut,error:u.error,retry:n.retry}):u.loaded?r.render(u.loaded,e):null}),[e,u])};return u.preload=function(){return o()},u.displayName="LoadableComponent",f.default.forwardRef(u)}var g=function(){function e(t,r){o(this,e),this._loadFn=t,this._opts=r,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}return a(e,[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var t=this._res,r=this._opts;t.loading&&("number"===typeof r.delay&&(0===r.delay?this._state.pastDelay=!0:this._delay=setTimeout((function(){e._update({pastDelay:!0})}),r.delay)),"number"===typeof r.timeout&&(this._timeout=setTimeout((function(){e._update({timedOut:!0})}),r.timeout))),this._res.promise.then((function(){e._update({}),e._clearTimeouts()})).catch((function(t){e._update({}),e._clearTimeouts()})),this._update({})}},{key:"_update",value:function(e){this._state=i(i({},this._state),{},{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach((function(e){return e()}))}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(e){var t=this;return this._callbacks.add(e),function(){t._callbacks.delete(e)}}}]),e}();function O(e){return w(m,e)}function j(e,t){for(var r=[];e.length;){var n=e.pop();r.push(n(t))}return Promise.all(r).then((function(){if(e.length)return j(e,t)}))}O.Map=function(e){if("function"!==typeof e.render)throw new Error("LoadableMap requires a `render(loaded, props)` function");return w(v,e)},O.preloadAll=function(){return new Promise((function(e,t){j(b).then(e,t)}))},O.preloadReady=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise((function(t){var r=function(){return y=!0,t()};j(h,e).then(r,r)}))},window.__NEXT_PRELOADREADY=O.preloadReady;var P=O;t.default=P},"9xLC":function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/order-success",function(){return r("a63d")}])},"HaE+":function(e,t,r){"use strict";function n(e,t,r,n,o,a,u){try{var i=e[a](u),l=i.value}catch(c){return void r(c)}i.done?t(l):Promise.resolve(l).then(n,o)}function o(e){return function(){var t=this,r=arguments;return new Promise((function(o,a){var u=e.apply(t,r);function i(e){n(u,o,a,i,l,"next",e)}function l(e){n(u,o,a,i,l,"throw",e)}i(void 0)}))}}r.d(t,"a",(function(){return o}))},a63d:function(e,t,r){"use strict";r.r(t);var n=r("o0o1"),o=r.n(n),a=r("HaE+"),u=r("q1tI"),i=r.n(u),l=r("a6RD"),c=r.n(l),s=r("YFqc"),f=r.n(s),d=i.a.createElement,p=c()((function(){return Promise.all([r.e(1),r.e(5),r.e(4),r.e(7),r.e(91)]).then(r.bind(null,"Vw5z"))}),{ssr:!1,loadableGenerated:{webpack:function(){return["Vw5z"]},modules:["../components/Layouts/Layout"]}}),b=c()((function(){return Promise.all([r.e(0),r.e(2),r.e(26)]).then(r.bind(null,"h1bS"))}),{ssr:!1,loadableGenerated:{webpack:function(){return["h1bS"]},modules:["../components/Heading"]}}),h=function(e){return console.log({props:e}),d(p,{headerVersion:["bg--light"],headerTheme:"dark"},d("div",{className:"o-success"},d("div",{className:"o-success__main o-success__main--center"},d(b,{versions:["large","upper"],parentClass:"c-privacy"},"Thank you ",d("br",null)," for your order"),d(b,{versions:["small","upper","gold"],parentClass:"mt-3 c-privacy "},"Order Number: 101020300212"),d("p",{className:"o-success__descp mt-3"},"The order information will be sent via e-mail to manish@example.com ")),d("div",{className:"o-success__btn-wrap w-30 m-auto "},d(f.a,{href:"/shop"},d("a",{className:"c-btn c-btn--block c-btn--outline"},"Continue shopping")))))};h.getInitialProps=function(){var e=Object(a.a)(o.a.mark((function e(t){var r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(r=t.query).order){e.next=5;break}return e.abrupt("return",{order:r.order});case 5:return e.abrupt("return",null);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t.default=h},a6RD:function(e,t,r){"use strict";var n=r("oI91");function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.__esModule=!0,t.noSSR=l,t.default=function(e,t){var r=u.default,n={loading:function(e){e.error,e.isLoading;return e.pastDelay,null}};e instanceof Promise?n.loader=function(){return e}:"function"===typeof e?n.loader=e:"object"===typeof e&&(n=a(a({},n),e));if(n=a(a({},n),t),"object"===typeof e&&!(e instanceof Promise)&&(e.render&&(n.render=function(t,r){return e.render(r,t)}),e.modules)){r=u.default.Map;var o={},i=e.modules();Object.keys(i).forEach((function(e){var t=i[e];"function"!==typeof t.then?o[e]=t:o[e]=function(){return t.then((function(e){return e.default||e}))}})),n.loader=o}n.loadableGenerated&&delete(n=a(a({},n),n.loadableGenerated)).loadableGenerated;if("boolean"===typeof n.ssr){if(!n.ssr)return delete n.ssr,l(r,n);delete n.ssr}return r(n)};i(r("q1tI"));var u=i(r("2qu3"));function i(e){return e&&e.__esModule?e:{default:e}}function l(e,t){return delete t.webpack,delete t.modules,e(t)}},i2R6:function(e,t){function r(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}e.exports=function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}},jwwS:function(e,t,r){"use strict";var n;t.__esModule=!0,t.LoadableContext=void 0;var o=((n=r("q1tI"))&&n.__esModule?n:{default:n}).default.createContext(null);t.LoadableContext=o},o0o1:function(e,t,r){e.exports=r("ls82")},oI91:function(e,t){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}}},[["9xLC",3,1,0,9]]]);