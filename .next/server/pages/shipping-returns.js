module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		51: 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("../" + ({}[chunkId]||chunkId) + "." + {"0":"1484d4b3a1c58fd8e9d3","1":"9f9e576d8beb99af920b","4":"15ae9923ee0281ee08ed","5":"0ee9383cfef15cb417cb","6":"5d195660e5978d6b756c","7":"6fc77f00c1f4916a55bf","13":"4eeb7562709d11353e66","14":"6ad7600e29b51b43ad8b","16":"09bb3161e8cb550076cb","20":"cab62ceba200f84c6fda","58":"8d248501ad53fb25530a","66":"e7906676c2159017e236","67":"9c47eda2633b62dba027","68":"f6151c8ee3074693b135","69":"849753c976bc6e985650","81":"b0b05e65253b24eb4957","82":"6fa26618ada0837073e0","86":"f97bb9d82c63d9c61103","88":"1c8b79899ab31f96f7b8","89":"3df4c6031215e3fe82b0","93":"b299f3715d54a64d8127","95":"da6f609584c1ca5ef294","96":"b7940a28108d94d981e2","97":"34e45430bff996d84569","98":"d649c782849fa2716241","104":"4e0311d6f119f9637453"}[chunkId] + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 26);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/T1H":
/***/ (function(module, exports) {

module.exports = require("next/dynamic");

/***/ }),

/***/ "/WcL":
/***/ (function(module, exports) {

module.exports = require("react-icons/ai");

/***/ }),

/***/ "/mcW":
/***/ (function(module, exports) {

module.exports = require("redux-persist/lib/storage/session");

/***/ }),

/***/ "14x6":
/***/ (function(module, exports) {

module.exports = require("react-component-debounce");

/***/ }),

/***/ 26:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("yNpS");


/***/ }),

/***/ "3jbq":
/***/ (function(module, exports) {

module.exports = require("react-simple-chatbot");

/***/ }),

/***/ "3yuE":
/***/ (function(module, exports) {

module.exports = require("react-icons-kit/md/");

/***/ }),

/***/ "42Y9":
/***/ (function(module, exports) {

module.exports = require("react-facebook-login");

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "C9pf":
/***/ (function(module, exports) {

module.exports = require("react-icons/fi");

/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "Exp3":
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),

/***/ "FHnF":
/***/ (function(module, exports) {

module.exports = require("react-svg");

/***/ }),

/***/ "JVe5":
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-brands-svg-icons");

/***/ }),

/***/ "K2gz":
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "Oi65":
/***/ (function(module, exports) {

module.exports = require("react-icons-kit");

/***/ }),

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "T8f9":
/***/ (function(module, exports) {

module.exports = require("redux-persist/lib/storage");

/***/ }),

/***/ "VNb8":
/***/ (function(module, exports) {

module.exports = require("redux-persist");

/***/ }),

/***/ "WZpn":
/***/ (function(module, exports) {

module.exports = require("validator");

/***/ }),

/***/ "YLtl":
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "ZSx1":
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "g8bt":
/***/ (function(module, exports) {

module.exports = require("react-lazy-load-image-component");

/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "jYXs":
/***/ (function(module, exports) {

module.exports = require("fuse.js");

/***/ }),

/***/ "nZwT":
/***/ (function(module, exports) {

module.exports = require("@ant-design/icons");

/***/ }),

/***/ "oL/c":
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ }),

/***/ "rCsO":
/***/ (function(module, exports) {

module.exports = require("react-google-login");

/***/ }),

/***/ "rKB8":
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "sLJp":
/***/ (function(module, exports) {

module.exports = require("@fortawesome/fontawesome-svg-core");

/***/ }),

/***/ "utGq":
/***/ (function(module, exports) {

module.exports = require("box-dimension-calculator");

/***/ }),

/***/ "wy2R":
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "xJS/":
/***/ (function(module, exports) {

module.exports = require("redux-state-sync");

/***/ }),

/***/ "xSWb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return projectName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return baseUrl; });
/* unused harmony export docMzUrl */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return contentUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return imageUrl; });
/* unused harmony export serverUrl */
/* unused harmony export googleApiKey */
/* unused harmony export shippingFreeAfter */
/* unused harmony export shippingExtraRate */
/* unused harmony export shippingStaticRate */
/* unused harmony export referralPresent */
/* unused harmony export defaultOrderStatus */
/* unused harmony export defaultStatusInOrder */
/* unused harmony export invoiceUrl */
/* unused harmony export subsPercent */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return filePath; });
/* unused harmony export labSheetPath */
/* unused harmony export countryTax */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return chatTheme; });
/* unused harmony export enableCountry */
/* unused harmony export accountTypeOpt */
/* unused harmony export customRates */
/* unused harmony export topBarText */
const projectName = 'MissValentine';
const isLocal = false;
const baseUrl = isLocal ? 'http://localhost:5000/api' : 'https://missval.herokuapp.com/api'; //export const baseUrl = "http://localhost:4003";

const docMzUrl = 'http://localhost:3001';
const contentUrl = 'https://server1.cbdbene.com';
const imageUrl = 'https://server1.cbdbene.com/';
const serverUrl = 'https://admin.cbdbene.com/'; //export const baseUrl = "http://localhost:4003";
//export const serverUrl = "http://localhost:4003/";
//export const imageUrl = "http://localhost:5000/";
// export const contentUrl = "http://localhost:5000";

const googleApiKey = 'AIzaSyBXxXfKy5wtHEO9XniOvGEKPME-_ldClVk';
const shippingFreeAfter = 75;
const shippingExtraRate = 5;
const shippingStaticRate = 5.95;
const referralPresent = 25;
const defaultOrderStatus = 'Transaction completed - label generated';
const defaultStatusInOrder = 'in process';
const invoiceUrl = 'https://admin.cbdbene.com/images/';
const subsPercent = 10;
const filePath = 'https://admin.cbdbene.com/var/www/cbdbene_3rde/cbdbene/';
const labSheetPath = 'https://admin.cbdbene.com/var/www/cbdbene_3rde/cbdbene/';
const countryTax = 15 / 100;
const chatTheme = {
  background: '#ffffff',
  // fontFamily: fonts.mainfont,
  headerBgColor: '#000000',
  headerFontColor: '#ffffff',
  headerFontSize: '20px',
  botBubbleColor: '#eee9e3',
  botFontColor: '#202020',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a'
};
const enableCountry = ['US', 'USA', 'United States'];
const accountTypeOpt = [{
  label: 'Checking',
  value: 'checking'
}, {
  label: 'Savings',
  value: 'savings'
}, {
  label: 'Business Checking',
  value: 'businessChecking'
}];
const customRates = [{
  id: 'rate_custom1',
  object: 'Rate',
  created_at: '2020-02-10T10:54:03Z',
  updated_at: '2020-02-10T10:54:03Z',
  mode: 'test',
  service: 'Priority',
  carrier: 'USPS',
  rate: '8.42',
  currency: 'USD',
  retail_rate: '14.90',
  retail_currency: 'USD',
  list_rate: '11.19',
  list_currency: 'USD',
  delivery_days: 2,
  delivery_date: null,
  delivery_date_guaranteed: false,
  est_delivery_days: 2,
  shipment_id: 'shp_2255eb7f0e8b4775abcfe009be9ba569',
  carrier_account_id: 'ca_5cd23a24d9c3427780dcfde68fbb1c76',
  customName: 'Standard',
  customRate: 15.89
}, {
  id: 'rate_custom2',
  object: 'Rate',
  created_at: '2020-02-10T10:54:03Z',
  updated_at: '2020-02-10T10:54:03Z',
  mode: 'test',
  service: 'ParcelSelect',
  carrier: 'USPS',
  rate: '10.89',
  currency: 'USD',
  retail_rate: '10.89',
  retail_currency: 'USD',
  list_rate: '10.89',
  list_currency: 'USD',
  delivery_days: 7,
  delivery_date: null,
  delivery_date_guaranteed: false,
  est_delivery_days: 7,
  shipment_id: 'shp_2255eb7f0e8b4775abcfe009be9ba569',
  carrier_account_id: 'ca_5cd23a24d9c3427780dcfde68fbb1c76',
  customName: 'Priority',
  customRate: 20.54
}, {
  id: 'rate_custom3',
  object: 'Rate',
  created_at: '2020-02-10T10:54:03Z',
  updated_at: '2020-02-10T10:54:03Z',
  mode: 'test',
  service: 'Express',
  carrier: 'USPS',
  rate: '43.60',
  currency: 'USD',
  retail_rate: '50.85',
  retail_currency: 'USD',
  list_rate: '43.60',
  list_currency: 'USD',
  delivery_days: null,
  delivery_date: null,
  delivery_date_guaranteed: false,
  est_delivery_days: null,
  shipment_id: 'shp_2255eb7f0e8b4775abcfe009be9ba569',
  carrier_account_id: 'ca_5cd23a24d9c3427780dcfde68fbb1c76',
  customName: 'Express',
  customRate: 48.6
}];
const topBarText = 'Free shipping on all orders above $75.'; // make it empty string ("") to hide tha bar

/* harmony default export */ __webpack_exports__["d"] = ({
  imageUrl,
  projectName,
  baseUrl,
  serverUrl,
  googleApiKey,
  shippingFreeAfter,
  shippingExtraRate,
  shippingStaticRate,
  referralPresent,
  defaultOrderStatus,
  defaultStatusInOrder,
  invoiceUrl,
  enableCountry,
  subsPercent,
  accountTypeOpt,
  filePath,
  labSheetPath,
  countryTax,
  docMzUrl,
  customRates,
  chatTheme,
  topBarText,
  contentUrl
});

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "yNpS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("/T1H");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants_projectSettings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("xSWb");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const Layout = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(() => __webpack_require__.e(/* import() */ 4).then(__webpack_require__.bind(null, "Vw5z")), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("Vw5z")],
    modules: ['../components/Layouts/Layout']
  }
});
const Heading = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(() => __webpack_require__.e(/* import() */ 0).then(__webpack_require__.bind(null, "h1bS")), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("h1bS")],
    modules: ["../components/Heading"]
  }
});


const privacy = () => {
  return __jsx(Layout, {
    headerVersions: ["bg-dark"],
    headerTheme: "black"
  }, __jsx("div", {
    className: "c-privacy__page-title"
  }, __jsx(Heading, {
    style: {
      fontFamily: "futuraBT-medium",
      fontSize: "32px",
      marginTop: "40px",
      marginBottom: "20px"
    },
    versions: ["large"],
    parentClass: "c-privacy"
  }, "SHIPPING & RETURNS")), __jsx("div", {
    className: "c-privacy__content"
  }, __jsx(Heading, {
    style: {
      fontFamily: "futuraBT-medium",
      fontSize: "20px",
      marginTop: "20px",
      marginBottom: "20px",
      marginLeft: "20px"
    }
  }, "When will I receive my order?"), __jsx("div", {
    style: {
      fontFamily: "futuraBT-light",
      fontSize: "16px",
      marginLeft: "20px"
    },
    className: "container"
  }, __jsx("p", null, "Our packages are assembled by hand and processed within 24 to 48 hours. Any order placed on a weekend will be shipped the next business day. Business days are Monday through Friday. Orders placed around the holidays may experience delays. The shipping transit times listed at checkout do not include assembly/processing time."), __jsx("p", null, "Once your order is shipped you will receive an email link to track your shipment.")), __jsx(Heading, {
    style: {
      fontFamily: "futuraBT-medium",
      fontSize: "20px",
      marginTop: "20px",
      marginBottom: "20px",
      marginLeft: "20px"
    }
  }, "What are my shipping options?"), __jsx("div", {
    style: {
      fontFamily: "futuraBT-light",
      fontSize: "16px",
      marginLeft: "20px"
    },
    className: "container"
  }, __jsx("p", null, "We offer three shipping options within the U.S."), __jsx("ul", null, __jsx("li", null, "Free standard shipping on all orders over $50 in the US."), __jsx("li", null, "Expedited (3-5 business days after processing)"), __jsx("li", null, "Express (2 business days after processing)")), __jsx("p", null, "We offer International Shipping via UPS"), __jsx("ul", null, __jsx("li", null, "International shipments (approximately 7-10 days after processing)"))), __jsx(Heading, {
    style: {
      fontFamily: "futuraBT-medium",
      fontSize: "20px",
      marginTop: "20px",
      marginBottom: "20px",
      marginLeft: "20px"
    }
  }, "Where do you ship?"), __jsx("div", {
    style: {
      fontFamily: "futuraBT-light",
      fontSize: "16px",
      marginLeft: "20px"
    },
    className: "container"
  }, __jsx("p", null, "We ship to all 50 states in the U.S. as well as internationally to most countries. All custom duties, import taxes or fees, if assessed, at your country are your responsibility. We strictly follow all regulations regarding the shipment of our products within the U.S. and abroad. If you any specific questions about shipment to your country, please contact us at", " ", __jsx("a", {
    style: {
      color: "black",
      fontWeight: "bold",
      marginLeft: "8px",
      marginRight: "8px"
    },
    href: "mailto:help@cbdbene.com"
  }, "help@cbdbene.com"), ".")), __jsx(Heading, {
    style: {
      fontFamily: "futuraBT-medium",
      fontSize: "20px",
      marginTop: "20px",
      marginBottom: "20px",
      marginLeft: "20px"
    }
  }, "How do I track your order?"), __jsx("div", {
    style: {
      fontFamily: "futuraBT-light",
      fontSize: "16px",
      marginLeft: "20px"
    },
    className: "container"
  }, __jsx("p", null, "Once an order is placed a notification email is sent to your email address. Please verify your email address is correct or check your SPAM folder if you did not receive a notification. It may take 1- 2 full business days to process the order (before it is actually shipped) and to generate a tracking code. The order can be tracked on the carrier\u2019s website with the tracking code."), __jsx("p", null, "Orders placed on our website may be delivered by one of several different carriers and shipping methods, although the main carrier is UPS.")), __jsx(Heading, {
    style: {
      fontFamily: "futuraBT-medium",
      fontSize: "20px",
      marginTop: "20px",
      marginBottom: "20px",
      marginLeft: "20px"
    }
  }, "Finding Your Order Status"), __jsx("div", {
    style: {
      fontFamily: "futuraBT-light",
      fontSize: "16px",
      marginLeft: "20px"
    },
    className: "container"
  }, __jsx("p", null, "Once your order leaves our warehouse, it is handled by a carrier (such as FedEx or UPS) that provides tracking information until your order is delivered. You will receive e-mail notifications about the status of your order. You can also sign-in to \u201CMy Orders\u201D at ", __jsx("a", {
    style: {
      color: "black",
      fontWeight: "bold",
      marginLeft: "8px",
      marginRight: "8px"
    },
    href: "https://cbdbene.com/"
  }, "www.cbdbene.com"), " anytime. We store information about your recent order (including tracking information) as well as past orders."), __jsx("p", null, "*Tracking information may not be available for up 1- 2 business days after an item has shipped from our warehouse."), __jsx("p", null, "Email us at", __jsx("a", {
    style: {
      color: "black",
      fontWeight: "bold",
      marginLeft: "8px",
      marginRight: "8px"
    },
    href: "mailto:sales@cbdbene.com"
  }, "sales@cbdbene.com"), "if you have any questions about your order.")), __jsx(Heading, {
    style: {
      fontFamily: "futuraBT-medium",
      fontSize: "20px",
      marginTop: "20px",
      marginBottom: "20px",
      marginLeft: "20px"
    },
    versions: ["large"]
  }, "Can I store my shipping address?"), __jsx("p", {
    style: {
      fontFamily: "futuraBT-light",
      fontSize: "16px",
      marginLeft: "20px"
    }
  }, "Yes, please visit the \u201CMy Profile\u201D section to update your shipping addresses. Make sure to hit save once add or edit your shipping address. If you signed up for a subscription, you can also update your default shipping address in the \u201CMy\xA0Subscription\u201D section."), __jsx(Heading, {
    style: {
      fontFamily: "futuraBT-medium",
      fontSize: "20px",
      marginTop: "20px",
      marginBottom: "20px",
      marginLeft: "20px"
    }
  }, "Return Policy"), __jsx("div", {
    style: {
      fontFamily: "futuraBT-light",
      fontSize: "16px",
      marginLeft: "20px",
      marginBottom: "40px"
    },
    className: "container"
  }, __jsx("p", null, "Unopened and unused product can be returned within 60 days of receiving it, please see our Returns Process below."), __jsx("ol", null, __jsx("li", null, "Email us at\xA0", __jsx("a", {
    style: {
      color: "black",
      fontWeight: "bold"
    },
    href: "mailto:sales@cbdbene.com"
  }, "sales@cbdbene.com\xA0"), " ", "to alert us that you will be returning your UNOPENED product within the 60 days and request the Return Shipping Address."), __jsx("li", null, "Once you have shipped your product back to us \u2013 please also email the tracking number to", " ", __jsx("a", {
    style: {
      color: "black",
      fontWeight: "bold"
    },
    href: "mailto:sales@cbdbene.com"
  }, "sales@cbdbene.com"), " ", "so we can keep an eye out for it."), __jsx("li", null, "Once we receive your package and we can confirm it\u2019s condition, we will issue you a refund for the product(s) and email you a confirmation. Please allow 7-10 days for the refund to post to your statement.")), __jsx("p", null, "*If you have any questions regarding our return policy please email us at", __jsx("a", {
    style: {
      color: "black",
      fontWeight: "bold",
      marginLeft: "8px"
    },
    href: "mailto:help@cbdbene.com"
  }, "help@cbdbene.com")), __jsx("p", null, _constants_projectSettings__WEBPACK_IMPORTED_MODULE_2__[/* projectName */ "g"], " will only accept returns and refunds from purchases made on ", __jsx("a", {
    style: {
      color: "black",
      fontWeight: "bold",
      marginLeft: "8px",
      marginRight: "8px"
    },
    href: "https://cbdbene.com/"
  }, "www.cbdbene.com"), ". ", _constants_projectSettings__WEBPACK_IMPORTED_MODULE_2__[/* projectName */ "g"], " will not accept returns from a purchase made in a retail store."))));
};

/* harmony default export */ __webpack_exports__["default"] = (privacy);

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });