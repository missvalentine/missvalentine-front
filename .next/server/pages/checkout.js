module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		39: 0
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
/******/ 			var chunk = require("../" + ({}[chunkId]||chunkId) + "." + {"0":"1484d4b3a1c58fd8e9d3","1":"9f9e576d8beb99af920b","2":"88c5f2b18456f25e406c","3":"67b473aabb397619f378","5":"0ee9383cfef15cb417cb","6":"5d195660e5978d6b756c","7":"6fc77f00c1f4916a55bf","12":"4dfdab35aff5f4eb6323","13":"4eeb7562709d11353e66","14":"6ad7600e29b51b43ad8b","16":"09bb3161e8cb550076cb","20":"cab62ceba200f84c6fda","58":"8d248501ad53fb25530a","66":"e7906676c2159017e236","67":"9c47eda2633b62dba027","68":"f6151c8ee3074693b135","69":"849753c976bc6e985650","70":"ecc7c30ad28a3e0e5705","76":"d89192c8b01b1b24d07a","77":"d2094b43d9025677931f","78":"4f2e427873306ef8cc18","80":"a1c76ac5be5455603429","81":"b0b05e65253b24eb4957","82":"6fa26618ada0837073e0","83":"8610a1f2ed8d3a29000e","86":"f97bb9d82c63d9c61103","87":"c0dca9b45f8b712e437a","88":"1c8b79899ab31f96f7b8","89":"3df4c6031215e3fe82b0","92":"825c87c01f83abe40768","93":"b299f3715d54a64d8127","95":"da6f609584c1ca5ef294","96":"b7940a28108d94d981e2","97":"34e45430bff996d84569","98":"d649c782849fa2716241","104":"4e0311d6f119f9637453"}[chunkId] + ".js");
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
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
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

/***/ "/jkW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "/mcW":
/***/ (function(module, exports) {

module.exports = require("redux-persist/lib/storage/session");

/***/ }),

/***/ "0Aw8":
/***/ (function(module, exports) {

// import { SET_CHECKOUT_PAGE, SET_REDIRECT_CHECKOUT } from "./type";
// export const setCheckoutPage = (payload = false) => ({
//   type: SET_CHECKOUT_PAGE,
//   payload
// });
// export const setRedirectCheckout = (payload = false) => ({
//   type: SET_REDIRECT_CHECKOUT,
//   payload
// });

/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("nOHt");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) {}

  return WithRouterWrapper;
}

/***/ }),

/***/ 14:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("fdRS");


/***/ }),

/***/ "14x6":
/***/ (function(module, exports) {

module.exports = require("react-component-debounce");

/***/ }),

/***/ "1HKE":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export setAPUser */
/* unused harmony export unsetAPUser */
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("TzE8");

const setAPUser = ambassadoruser => {
  return {
    type: _type__WEBPACK_IMPORTED_MODULE_0__[/* SET_APUSER */ "u"],
    payload: ambassadoruser
  };
};
const unsetAPUser = () => ({
  type: _type__WEBPACK_IMPORTED_MODULE_0__[/* UNSET_APUSER */ "jb"],
  payload: {}
});

/***/ }),

/***/ "1HP9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return setEntryMsg; });
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("TzE8");

const setEntryMsg = payload => ({
  type: _type__WEBPACK_IMPORTED_MODULE_0__[/* SET_ENTRY_MSG */ "F"],
  payload
});

/***/ }),

/***/ "2Cd/":
/***/ (function(module, exports) {

// import { SET_CONTINENT, SET_COUNTRY, SET_LOCATION } from "./type";
// // const redirectToCountry = (countryCode) => {
// //   let pathArr = window.location.pathname.split("/");
// //   let newPath = pathArr.map((el, index) => {
// //     if (el === "") return "/";
// //     if (index === 1) return countryCode;
// //     return "/" + el;
// //   });
// //   return newPath.join("");
// // }
// export const setLocation = location => dispatch => {
//   dispatch({
//     type: SET_LOCATION,
//     payload: location
//   });
//   // setTimeout(() => {
//   //   window.location.href = redirectToCountry(SET_LOCATION.countryCode);
//   // }, 200);
// };
// export const setCountry = country => ({
//   type: SET_COUNTRY,
//   payload: country
// });
// export const setContinent = continent => ({
//   type: SET_CONTINENT,
//   payload: continent
// });

/***/ }),

/***/ "2MRG":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "o", function() { return /* reexport */ products["e" /* getAllProducts */]; });
__webpack_require__.d(__webpack_exports__, "n", function() { return /* reexport */ products["d" /* getAllCombos */]; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ products["a" /* addToWishList */]; });
__webpack_require__.d(__webpack_exports__, "l", function() { return /* reexport */ products["b" /* deleteWishList */]; });
__webpack_require__.d(__webpack_exports__, "s", function() { return /* reexport */ products["h" /* getWishList */]; });
__webpack_require__.d(__webpack_exports__, "v", function() { return /* reexport */ user["f" /* registerUser */]; });
__webpack_require__.d(__webpack_exports__, "t", function() { return /* reexport */ user["e" /* loginUser */]; });
__webpack_require__.d(__webpack_exports__, "r", function() { return /* reexport */ user["d" /* getUserDetails */]; });
__webpack_require__.d(__webpack_exports__, "x", function() { return /* reexport */ user["g" /* updateUserDetails */]; });
__webpack_require__.d(__webpack_exports__, "p", function() { return /* reexport */ user["c" /* getOrders */]; });
__webpack_require__.d(__webpack_exports__, "m", function() { return /* reexport */ user["b" /* forgotPassword */]; });
__webpack_require__.d(__webpack_exports__, "k", function() { return /* reexport */ contactUs; });
__webpack_require__.d(__webpack_exports__, "w", function() { return /* reexport */ searchAddress; });
__webpack_require__.d(__webpack_exports__, "q", function() { return /* reexport */ checkout["k" /* getShippingRates */]; });
__webpack_require__.d(__webpack_exports__, "j", function() { return /* reexport */ checkout["i" /* confirmShipment */]; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* reexport */ checkout["b" /* authorizeCharge */]; });
__webpack_require__.d(__webpack_exports__, "e", function() { return /* reexport */ checkout["d" /* authorizeChargeProfile */]; });
__webpack_require__.d(__webpack_exports__, "d", function() { return /* reexport */ checkout["c" /* authorizeChargeBank */]; });
__webpack_require__.d(__webpack_exports__, "g", function() { return /* reexport */ checkout["f" /* authorizeSubscription */]; });
__webpack_require__.d(__webpack_exports__, "i", function() { return /* reexport */ checkout["h" /* authorizeSubscriptionProfile */]; });
__webpack_require__.d(__webpack_exports__, "h", function() { return /* reexport */ checkout["g" /* authorizeSubscriptionBank */]; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ checkout["a" /* authorizeAddCard */]; });
__webpack_require__.d(__webpack_exports__, "f", function() { return /* reexport */ checkout["e" /* authorizeDeleteCard */]; });
__webpack_require__.d(__webpack_exports__, "u", function() { return /* reexport */ checkout["l" /* placeOrderNew */]; });

// UNUSED EXPORTS: getProductById, getCategoryById, getProductByName, getAllCategories, getReviews, addReviews, updateUserPassword, setForgotPassword, addSubscriber, getSubscribers, authorizeSubscriptionCancel, placeOrder, getTaxValue, getCoupon, getAllCreatives, getAmbassadorDetails, updateAffBank, updateAffData, updateAffTax, ambassadorPortalLogin, ambassadorPortalRegistration, addAmbassador, forgotPasswordAff, getDoctors

// EXTERNAL MODULE: ./services/apis/products.js
var products = __webpack_require__("elJ3");

// EXTERNAL MODULE: ./services/apis/apiList.js
var apiList = __webpack_require__("Wol/");

// EXTERNAL MODULE: ./services/apis/user.js
var user = __webpack_require__("s9Gp");

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__("zr5I");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./services/apis/contact.js


const contactUs = body => external_axios_default.a.post(apiList["a" /* default */].contact, body);
// EXTERNAL MODULE: ./constants/projectSettings.js
var projectSettings = __webpack_require__("xSWb");

// CONCATENATED MODULE: ./services/apis/google.js


const searchAddress = address => external_axios_default.a.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${address.split(" ").join("+")}&key=${projectSettings["d" /* default */].googleApiKey}`, {
  headers: {
    "Accept-Encoding": "gzip",
    "User-Agent": "my program (gzip)"
  }
});
// EXTERNAL MODULE: ./services/apis/checkout.js
var checkout = __webpack_require__("oAQk");

// CONCATENATED MODULE: ./services/apis/ambassador.js


const getAllCreatives = () => external_axios_default.a.get(apiList["a" /* default */].getAllCreatives);
const getAmbassadorDetails = id => external_axios_default.a.get(apiList["a" /* default */].getAmbassadorDetails + id);
const updateAffBank = (id, bank) => external_axios_default.a.post(apiList["a" /* default */].updateAff, {
  id,
  bank
});
const updateAffData = (id, account) => external_axios_default.a.post(apiList["a" /* default */].updateAff, {
  id,
  account
});
const updateAffTax = (id, tax) => external_axios_default.a.post(apiList["a" /* default */].updateAff, {
  id,
  tax
});
const ambassadorPortalLogin = (email, password) => external_axios_default.a.post(apiList["a" /* default */].ambassadorPortalLogin, {
  email,
  password
});
const ambassadorPortalRegistration = body => external_axios_default.a.post(apiList["a" /* default */].ambassadorPortalRegistration, body);
const addAmbassador = body => external_axios_default.a.post(apiList["a" /* default */].addAmbassador, body);
const forgotPasswordAff = body => external_axios_default.a.post(apiList["a" /* default */].forgotPasswordAff, body);
// CONCATENATED MODULE: ./services/apis/doctors.js


const getDoctors = () => external_axios_default.a.get(apiList["a" /* default */].getDoctors);
// CONCATENATED MODULE: ./services/api.js









/***/ }),

/***/ "3EDw":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export getItemTotal */
/* unused harmony export returnSubTotal */
/* unused harmony export returnUnSubscribeTotal */
/* unused harmony export getTotalWeight */
/* unused harmony export getTotalVolume */
/* unused harmony export getTotalVariation */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return variablePriceSet; });
/* unused harmony export changeCartItemVariation */
/* unused harmony export verifyProduct */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return setSlugInCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return modifyProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return removeItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getItemsHeightWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return filterShippingRates; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getGrandTotal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return generateOrderObj; });
/* harmony import */ var box_dimension_calculator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("utGq");
/* harmony import */ var box_dimension_calculator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(box_dimension_calculator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _product__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("OWVN");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("YLtl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _constants_projectSettings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("xSWb");
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const getItemTotal = item => {
  if (item) {
    if (item.saleprice) return parseFloat(item.saleprice) * parseFloat(item.qty);else if (item.regularprice) return parseFloat(item.regularprice) * parseFloat(item.qty);
  }

  return 0;
};
const returnSubTotal = items => {
  // amount =
  return items.map(el => {
    if (el) {
      if (el.saleprice) {
        if (el.subscribed) {
          const totalPrice = parseFloat(el.saleprice) * parseFloat(el.qty);
          const disc = totalPrice * el.subscribedDiscountPersent / 100;
          return parseFloat(totalPrice) - parseFloat(disc);
        } else {
          return parseFloat(el.saleprice) * parseFloat(el.qty);
        }
      } else if (el.regularprice) if (el.subscribed) {
        const totalPrice = parseFloat(el.regularprice) * parseFloat(el.qty);
        const disc = totalPrice * el.subscribedDiscountPersent / 100;
        return parseFloat(totalPrice) - parseFloat(disc);
      } else {
        return parseFloat(el.regularprice) * parseFloat(el.qty);
      }
    }

    return 0;
  }).reduce((a, b) => a + b, 0);
};
const returnUnSubscribeTotal = items => {
  return items.filter(el => !el.subscribed).map(el => {
    if (el) {
      if (el.saleprice) return parseFloat(el.saleprice) * parseFloat(el.qty);else if (el.regularprice) return parseFloat(el.regularprice) * parseFloat(el.qty);
    }

    return 0;
  }).reduce((a, b) => a + b, 0);
};
const getTotalWeight = items => {
  return items.filter(el => el.weight).map(el => el.weight * parseFloat(el.qty)).reduce((a, b) => a + b, 0);
};
const getTotalVolume = items => {
  // return items
  //   .filter(el => el.shipping_height && el.shipping_length && el.shipping_width)
  //   .map(el => el.shipping_height * el.shipping_length * el.shipping_width)
  //   .reduce((a, b) => a + b, 0);
  return items.filter(el => el.volume).map(el => el.volume * parseFloat(el.qty)).reduce((a, b) => a + b, 0);
};
const getTotalVariation = item => {
  if (!item.attributes) return [];
  return item.attributes.map(el => el ? el.names : null).filter(el => el);
};
const variablePriceSet = productItem => {
  if (productItem) {
    let tempVariable = _objectSpread({}, productItem);

    if (productItem.producttype === "variable") {
      // if (productItem.size && productItem.extract_flavor) {
      const notNullVariation = productItem.variation.filter(el => el !== null);
      productItem.attributes.filter(el => el !== null).map(el => el.names);
      const varCheck = productItem.attributes.filter(el => el !== null).map(attr => {
        return {
          key: attr.names,
          value: productItem[attr.names] ? productItem[attr.names].value : productItem[attr.names]
        };
      });
      let matchedVariable = null;

      if (!varCheck.some(vEl => vEl.value === null || vEl.value === undefined)) {
        matchedVariable = notNullVariation.find(varEl => {
          let matchArr = [];
          varCheck.map(vEl => {
            matchArr.push(varEl[vEl.key] === vEl.value);
            return null;
          });
          return !matchArr.includes(false);
        });

        if (matchedVariable) {
          tempVariable = _objectSpread(_objectSpread({}, productItem), {}, {
            regularprice: matchedVariable.regular_price,
            saleprice: matchedVariable.sale_price
          });
        } else {
          tempVariable = _objectSpread(_objectSpread({}, productItem), {}, {
            regularprice: productItem.dregularprice,
            saleprice: productItem.dsaleprice
          });
        }
      }
    } else {
      if (productItem.producttype === "simple" || productItem.combo) {
        tempVariable = _objectSpread(_objectSpread({}, productItem), {}, {
          regularprice: productItem.dregularprice,
          saleprice: productItem.dsaleprice
        });
      }
    }

    return tempVariable;
  }
};
const changeCartItemVariation = (varValue, names, item, indexingNo, list) => {
  if (names === "qty") {
    return {
      approve: false,
      update: {
        oldItem: item,
        newItem: _objectSpread(_objectSpread({}, item), {}, {
          [names]: varValue
        }),
        remove: null
      }
    };
  } else {
    const totalVariation = getTotalVariation(item);
    const foundItem = list.find((el, index) => {
      const innerFlag = totalVariation.map(varEl => {
        if (el[varEl]) {
          if (varEl === names) {
            return el[varEl].value === varValue.value;
          }

          return el[varEl].value === item[varEl].value;
        } else {
          return null;
        }
      }).filter(el => el !== null);
      return el.productid._id === item.productid._id && innerFlag.every(el => el) && index !== indexingNo;
    });

    if (foundItem !== undefined && foundItem !== null) {
      const totalQty = parseInt(foundItem.qty) + parseInt(item.qty);
      const qty = totalQty;

      if (item.subscribed || foundItem.subscribed) {
        return {
          approve: true,
          update: {
            oldItem: foundItem,
            newItem: _objectSpread(_objectSpread({}, foundItem), {}, {
              [names]: varValue,
              qty,
              subscribed: true,
              subscribedDiscountPersent: item.subscribedDiscountPersent,
              subscribedTime: item.subscribedTime
            }),
            remove: item
          }
        };
      } else {
        return {
          approve: false,
          update: {
            oldItem: foundItem,
            newItem: _objectSpread(_objectSpread({}, foundItem), {}, {
              [names]: varValue,
              qty
            }),
            remove: item
          }
        };
      }
    } else {
      return {
        approve: false,
        update: {
          oldItem: item,
          newItem: _objectSpread(_objectSpread({}, item), {}, {
            [names]: varValue
          }),
          remove: null
        }
      };
    }
  }
};
const verifyProduct = (productItem, items = []) => {
  const totalVariation = getTotalVariation(productItem);
  const foundItem = items.find(el => {
    const innerFlag = totalVariation.map(varEl => {
      if (el[varEl]) {
        return el[varEl].value === productItem[varEl].value;
      } else {
        return null;
      }
    }).filter(el => el !== null).every(el => el);
    if (!innerFlag) return innerFlag;
    if (el.combo && productItem.combo) return el._id === productItem._id;
    if (el.combo) return el._id === productItem.productid._id;
    if (productItem.combo) return el.productid._id === productItem._id;
    return el.productid._id === productItem.productid._id;
  });

  if (foundItem !== undefined && foundItem !== null) {
    const totalQty = parseInt(foundItem.qty) + parseInt(productItem.qty);
    const qty = totalQty;

    const tempNewItem = _objectSpread(_objectSpread({}, foundItem), {}, {
      subscribed: productItem.subscribed
    });

    if (productItem.subscribed) {
      const {
        subscribed,
        subscribedDiscountPersent,
        subscribedTime
      } = productItem;
      return {
        found: foundItem,
        item: _objectSpread(_objectSpread({}, foundItem), {}, {
          qty: qty,
          subscribed,
          subscribedDiscountPersent,
          subscribedTime
        })
      };
    } else if (foundItem.subscribed) {
      const {
        subscribedDiscountPersent,
        subscribedTime
      } = tempNewItem,
            newItem = _objectWithoutProperties(tempNewItem, ["subscribedDiscountPersent", "subscribedTime"]);

      return {
        found: foundItem,
        item: _objectSpread({}, newItem)
      };
    }

    return {
      found: foundItem,
      item: _objectSpread(_objectSpread({}, foundItem), {}, {
        qty: qty,
        subscribed: productItem.subscribed
      })
    };
  }

  return {
    found: null,
    item: _objectSpread({}, productItem)
  };
};
const addItem = (state, newItem) => {
  const {
    found,
    item
  } = verifyProduct(newItem, state.items);

  if (found) {
    return modifyProduct(found, item, state);
  }

  const newItems = [...state.items, newItem];
  return _objectSpread(_objectSpread({}, state), {}, {
    items: newItems,
    subTotal: returnSubTotal(newItems) || 0,
    unSubscribeProductAmount: returnUnSubscribeTotal(newItems) || 0,
    totalWeight: getTotalWeight(newItems),
    totalVolume: getTotalVolume(newItems)
  });
};
const setSlugInCart = cart => {
  return _objectSpread(_objectSpread({}, cart), {}, {
    items: cart.items ? cart.items.map(el => Object(_product__WEBPACK_IMPORTED_MODULE_1__[/* addSlugToProduct */ "a"])(el)) : []
  });
};
const modifyProduct = (oldItem, newItem, state) => {
  const NewItems = state.items.map(el => {
    if (el._id === newItem._id) {
      if (el === oldItem) {
        return variablePriceSet(newItem);
      }
    }

    return el;
  });

  if (oldItem !== newItem) {
    return _objectSpread(_objectSpread({}, state), {}, {
      items: [...NewItems],
      subTotal: returnSubTotal(NewItems) || 0,
      unSubscribeProductAmount: returnUnSubscribeTotal(NewItems) || 0,
      totalWeight: getTotalWeight(NewItems),
      totalVolume: getTotalVolume(NewItems),
      taxCouponDiscount: NewItems.length === 0 ? 0 : state.taxCouponDiscount,
      taxCouponCode: NewItems.length === 0 ? 0 : state.taxCouponCode
    });
  }

  return state;
};
const removeItem = (state, item) => {
  console.log(state);
  const newItems = [...state.items.filter(el => el !== item)];
  return _objectSpread(_objectSpread({}, state), {}, {
    items: newItems,
    subTotal: returnSubTotal(newItems) || 0,
    unSubscribeProductAmount: returnUnSubscribeTotal(newItems) || 0,
    totalWeight: getTotalWeight(newItems),
    totalVolume: getTotalVolume(newItems),
    taxCouponDiscount: newItems.length === 0 ? 0 : state.taxCouponDiscount,
    taxCouponCode: newItems.length === 0 ? 0 : state.taxCouponCode
  });
};
const getItemsHeightWidth = items => {
  var height = 0;
  var width = 0;
  var length = 0;
  var weight = 0;

  function flatten(arr) {
    return arr.reduce(function (flat, toFlatten) {
      return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
    }, []);
  }

  const item = flatten(items.map(el => {
    const qty = el.qty ? parseInt(el.qty) : 1;
    if (qty > 1) return new Array(qty).fill(el);
    return el;
  }));

  const getGreater = (a, b) => {
    if (a > b) return a;
    return b;
  };

  if (item.length > 0) {
    item.forEach(itm => {
      weight = weight + itm.weight;
    });
  }

  const itemsB = items.map(el => ({
    h: el.shipping_height,
    l: el.shipping_length,
    w: el.shipping_width,
    qty: el.qty
  }));
  const itemsC = [].concat.apply([], itemsB);
  const itemsC1 = itemsC.map(el => new Array(el.qty).fill(el)).flat();
  const itemsD = Object(box_dimension_calculator__WEBPACK_IMPORTED_MODULE_0__["combineLoop"])(itemsC1)[0];
  return {
    height: itemsD.h,
    width: itemsD.w,
    length: itemsD.l,
    weight
  };
};
const filterShippingRates = rateArr => {
  if (rateArr.length > 0) {
    const filteredRates = lodash__WEBPACK_IMPORTED_MODULE_2___default.a.uniqBy(rateArr, function (e) {
      return e.service;
    });

    const smallSorted = filteredRates.sort((a, b) => parseFloat(a.rate || 0) - parseFloat(b.rate || 0));
    const Smallest = smallSorted[0];
    const Smallest1 = smallSorted[1];
    const Smallest2 = smallSorted[2];
    const PriorityRaw = filteredRates.find(el => el.service === "Priority");
    const ExpressRaw = filteredRates.find(el => el.service === "Express");
    const {
      shippingExtraRate
    } = _constants_projectSettings__WEBPACK_IMPORTED_MODULE_3__[/* default */ "d"];

    const standard = Smallest && _objectSpread(_objectSpread({}, Smallest), {}, {
      customName: "Standard",
      customRate: parseFloat(Smallest.rate) + shippingExtraRate
    });

    const Priority = Smallest1 && _objectSpread(_objectSpread({}, Smallest1), {}, {
      customName: "Priority",
      customRate: parseFloat(Smallest1.rate) + shippingExtraRate
    });

    const Express = Smallest2 && _objectSpread(_objectSpread({}, Smallest2), {}, {
      customName: "Express",
      customRate: parseFloat(Smallest2.rate) + shippingExtraRate
    });

    return [standard, Priority, Express].filter(el => el);
  }

  return rateArr;
}; // --------------------------

const multiply = (a, b) => {
  return parseFloat(a) * parseFloat(b);
};

const getSelectedAttributes = item => {
  if (item.producttype === "variable") return item.attributes.map(el => ({
    [el.names]: item[el.names].value
  })).filter(el => el).reduce((a, b) => _objectSpread(_objectSpread({}, a), b), {});
  return null;
};

const getDiscount = (discount, subTotal) => {
  return discount * subTotal / 100 || 0;
};

const removeEmpty = obj => {
  Object.keys(obj).forEach(key => obj[key] === null && delete obj[key]);
};

const parseOrderProduct = item => {
  const isCombo = item.combo ? true : false,
        comboId = item.combo ? item._id : null,
        productId = item.combo ? null : item.productid._id,
        productMeta = item.combo ? null : item._id,
        isSubscribed = item.subscribed ? true : false,
        subscriptionMeta = item.subscribed ? {
    duration: item.subscribedTime
  } : null,
        itemId = item._id,
        _id = item._id,
        qty = item.qty,
        title = item.combo ? item.title : item.productid.producttitle,
        unitPrice = item.saleprice ? item.saleprice : item.regularprice,
        subTotal = item.saleprice ? multiply(item.saleprice, item.qty) : multiply(item.regularprice, item.qty),
        attribute = getSelectedAttributes(item),
        height = item.shipping_height,
        width = item.shipping_width,
        length = item.shipping_length,
        volume = item.volume,
        weight = item.weight;
  const order = {
    isCombo,
    comboId,
    productId,
    productMeta,
    isSubscribed,
    subscriptionMeta,
    itemId,
    _id,
    qty,
    unitPrice,
    subTotal,
    attribute,
    width,
    length,
    height,
    title,
    volume,
    weight
  };
  removeEmpty(order);
  return order;
};

const getHeightWeight = items => {
  const height = items.map(el => el.height * parseFloat(el.qty));
  const width = items.map(el => el.width * parseFloat(el.qty));
  const length = items.map(el => el.length * parseFloat(el.qty));
  const shape = {
    height: height.reduce((a, b) => a + b, 0),
    width: width.reduce((a, b) => a + b, 0),
    length: length.reduce((a, b) => a + b, 0)
  };
  return shape;
};

const getGrandTotal = (subTotal, taxPercent, shippingCharge, discount) => {
  const amountWithTax = subTotal + (taxPercent || 0) * subTotal + shippingCharge;
  const discountAmount = getDiscount(discount, subTotal);
  const total = parseFloat(amountWithTax || 0) - parseFloat(discountAmount || 0);
  return parseFloat(total.toFixed(2));
};
const generateOrderObj = ({
  stateObj,
  referralId,
  cart,
  user,
  confirmShipRes
}) => {
  const {
    service
  } = confirmShipRes,
        confirmRest = _objectWithoutProperties(confirmShipRes, ["service"]);

  const {
    paymentMethod,
    address,
    billingAddress
  } = stateObj;

  const {
    addressStr
  } = address,
        addressRest = _objectWithoutProperties(address, ["addressStr"]);

  const {
    addressStr: billingAddressStr
  } = billingAddress,
        billingAddressRest = _objectWithoutProperties(billingAddress, ["addressStr"]);

  const {
    items,
    shippingCharge,
    subTotal,
    totalWeight,
    totalVolume,
    taxValue,
    taxPercent,
    taxCouponDiscount,
    taxCouponCode
  } = cart;
  const orderProducts = items.map(el => parseOrderProduct(el));
  const {
    height: totalHeight,
    length: totalLength,
    width: totalWidth
  } = getHeightWeight(orderProducts);

  const order = _objectSpread({
    totalVolume,
    totalWeight,
    shippingMethod: service,
    products: orderProducts,
    countryTax: (taxPercent || 0) * 100,
    taxAmount: taxValue || parseFloat(cart.subTotal || 0) * parseFloat(taxPercent || 0) || 0,
    shippingCharge,
    userDetails: _objectSpread({
      address: addressStr
    }, addressRest),
    billingAddress: _objectSpread({
      address: billingAddressStr
    }, billingAddressRest),
    orderStatus: _constants_projectSettings__WEBPACK_IMPORTED_MODULE_3__[/* default */ "d"].defaultOrderStatus,
    paymentMethod: paymentMethod === "stripe" ? "Authorize" : paymentMethod,
    status: _constants_projectSettings__WEBPACK_IMPORTED_MODULE_3__[/* default */ "d"].defaultStatusInOrder,
    wholeSubtotal: parseFloat(subTotal.toFixed(2)),
    wasReferred: referralId ? true : false,
    referral: referralId ? referralId : null,
    isCoupon: taxCouponCode ? true : false,
    couponId: taxCouponCode,
    couponDisc: taxCouponCode ? taxCouponDiscount : null,
    grandTotal: getGrandTotal(subTotal, taxPercent, shippingCharge, taxCouponDiscount),
    isGuest: user._id ? false : true,
    userId: user._id ? user._id : null,
    userMetaId: user.userMetaId ? user.userMetaId : null,
    totalHeight,
    totalWidth,
    totalLength,
    refPercentage: _constants_projectSettings__WEBPACK_IMPORTED_MODULE_3__[/* default */ "d"].referralPresent
  }, confirmRest);

  removeEmpty(order);
  return order;
};

/***/ }),

/***/ "3WeD":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

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

/***/ "6D7l":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__("3WeD"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "7KCV":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("C+bE");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "7b2K":
/***/ (function(module, exports) {

// import {
//   SET_EXPRESS_CHECKOUT,
//   SET_EXPRESS_PAYPAL_CHECKOUT,
//   SET_OD_FOR_PAYPAL,
//   SET_ORDER_FLAG,
//   SET_SP_PRODUCTS,
//   SET_BILL_PLAN,
//   SET_PAYPAL_FAIL,
//   SET_PAYPAL_SUCCESS,
//   CLEAR_PAYPAL_SUCCESS,
//   HEADER_POP_UP_MODAL,
//   SET_GUEST
// } from "./type";
// export const setExpressCheckout = payload => ({
//   type: SET_EXPRESS_CHECKOUT,
//   payload
// });
// export const setExpressPaypalCheckout = payload => ({
//   type: SET_EXPRESS_PAYPAL_CHECKOUT,
//   payload
// });
// export const setPaypalOrderDetails = payload => ({
//   type: SET_OD_FOR_PAYPAL,
//   payload
// });
// export const setOrderFlag = payload => ({
//   type: SET_ORDER_FLAG,
//   payload
// });
// export const setSubscribedProducts = payload => ({
//   type: SET_SP_PRODUCTS,
//   payload
// });
// export const setBillingPlan = payload => ({
//   type: SET_BILL_PLAN,
//   payload
// });
// export const setPaypalFail = () => ({
//   type: SET_PAYPAL_FAIL
// });
// export const setPaypalSuccess = payload => ({
//   type: SET_PAYPAL_SUCCESS,
//   payload
// });
// export const clearPaypalSuccess = payload => ({
//   type: CLEAR_PAYPAL_SUCCESS,
//   payload
// });
// export const headerPopUpModal = payload => ({
//   type: HEADER_POP_UP_MODAL,
//   payload
// });
// export const setGuest = payload => ({
//   type: SET_GUEST,
//   payload
// });

/***/ }),

/***/ "AroE":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "C+bE":
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "C9pf":
/***/ (function(module, exports) {

module.exports = require("react-icons/fi");

/***/ }),

/***/ "DmIR":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return setReferrer; });
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("TzE8");

const setReferrer = payload => ({
  type: _type__WEBPACK_IMPORTED_MODULE_0__[/* SET_REFERRER */ "U"],
  payload
});

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

/***/ "FoYN":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return setWishList; });
/* unused harmony export unsetWishList */
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("TzE8");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const wishListParser = wishList => wishList.map(el => {
  if (el.productDetails) {
    const {
      productDetails
    } = el;

    if (productDetails.combo) {
      const {
        comboid
      } = productDetails; // const productSlug = encodeUrlFn(comboid.title);

      return _objectSpread(_objectSpread({}, el), {}, {
        productDetails: _objectSpread(_objectSpread({}, productDetails), {}, {
          comboid: _objectSpread({}, comboid)
        })
      });
    } else if (productDetails.productid) {
      const {
        productid
      } = productDetails; // const productSlug = encodeUrlFn(productid.producttitle);

      return _objectSpread(_objectSpread({}, el), {}, {
        productDetails: _objectSpread(_objectSpread({}, productDetails), {}, {
          productid: _objectSpread({}, productid)
        })
      });
    } else {
      return el;
    }
  }

  return el;
});

const setWishList = wishList => dispatch => {
  const newWishList = wishListParser(wishList);
  dispatch({
    type: _type__WEBPACK_IMPORTED_MODULE_0__[/* SET_WISHLIST */ "bb"],
    payload: newWishList
  });
};
const unsetWishList = () => ({
  type: _type__WEBPACK_IMPORTED_MODULE_0__[/* UNSET_WISHLIST */ "mb"],
  payload: {}
});

/***/ }),

/***/ "JLUA":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return toggleCartBar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return showCartBar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hideCartBar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return toggleRegBar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return showRegBar; });
/* unused harmony export hideRegBar */
/* unused harmony export hideHasLogin */
/* unused harmony export showHasLogin */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return drawerToDisplay; });
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("TzE8");

const toggleCartBar = a => dispatch => {
  console.log({
    a
  });
  dispatch({
    type: _type__WEBPACK_IMPORTED_MODULE_0__[/* TOGGLE_CART_BAR */ "gb"]
  });
  document.body.classList.toggle("drawer-open");
};
const showCartBar = () => dispatch => {
  dispatch({
    type: _type__WEBPACK_IMPORTED_MODULE_0__[/* SHOW_CART_BAR */ "db"]
  });
  document.body.classList.add("drawer-open");
};
const hideCartBar = () => dispatch => {
  dispatch({
    type: _type__WEBPACK_IMPORTED_MODULE_0__[/* HIDE_CART_BAR */ "l"]
  });
  document.body.classList.remove("drawer-open");
};
const toggleRegBar = () => dispatch => {
  dispatch({
    type: _type__WEBPACK_IMPORTED_MODULE_0__[/* TOGGLE_REGISTRATION_BAR */ "hb"]
  });
  document.body.classList.toggle("drawer-open");
};
const showRegBar = () => dispatch => {
  dispatch({
    type: _type__WEBPACK_IMPORTED_MODULE_0__[/* SHOW_REGISTRATION_BAR */ "eb"]
  });
  document.body.classList.add("drawer-open");
};
const hideRegBar = () => dispatch => {
  dispatch({
    type: _type__WEBPACK_IMPORTED_MODULE_0__[/* HIDE_REGISTRATION_BAR */ "m"]
  });
  document.body.classList.remove("drawer-open");
};
const hideHasLogin = () => ({
  type: _type__WEBPACK_IMPORTED_MODULE_0__[/* HAS_LOGIN */ "j"],
  payload: false
});
const showHasLogin = () => ({
  type: _type__WEBPACK_IMPORTED_MODULE_0__[/* HAS_LOGIN */ "j"],
  payload: true
});
const drawerToDisplay = payload => ({
  type: _type__WEBPACK_IMPORTED_MODULE_0__[/* TO_DISPLAY */ "ib"],
  payload
});

/***/ }),

/***/ "JVe5":
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-brands-svg-icons");

/***/ }),

/***/ "K2gz":
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "KOAY":
/***/ (function(module, exports) {

module.exports = require("react-places-autocomplete");

/***/ }),

/***/ "M688":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export setWishListLogin */
/* unused harmony export unsetWishListLogin */
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("TzE8");

const setWishListLogin = wishListLogin => ({
  type: _type__WEBPACK_IMPORTED_MODULE_0__[/* SET_WISHLIST_LOGIN */ "cb"],
  payload: wishListLogin
});
const unsetWishListLogin = () => ({
  type: _type__WEBPACK_IMPORTED_MODULE_0__[/* UNSET_WISHLIST_LOGIN */ "nb"],
  payload: {}
});

/***/ }),

/***/ "Nh04":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export setErrors */
/* unused harmony export clearErrors */
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("TzE8");

const setErrors = payload => ({
  type: _type__WEBPACK_IMPORTED_MODULE_0__[/* SET_ERRORS */ "G"],
  payload
});
const clearErrors = payload => ({
  type: _type__WEBPACK_IMPORTED_MODULE_0__[/* CLEAR_ERRORS */ "c"],
  payload
});

/***/ }),

/***/ "OWVN":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return getProductImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getProductImageArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getProductAttributes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getProductDescription; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return getProductTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return getProductShortDesc; });
/* unused harmony export filteredAttr */
/* unused harmony export removeDuplicateObjAr */
/* unused harmony export getAttrListing */
/* unused harmony export getFeaturedProduct */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return getVisibleProducts; });
/* unused harmony export generateProductSlug */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addSlugToProduct; });
/* unused harmony export getCategoriesProducts */
/* unused harmony export getProductPrice */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getBasicPrice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return directAddToCart; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _misc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("yH4c");
/* harmony import */ var _cart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("3EDw");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



const getProductImage = (product = {}, image = "main") => {
  if (image === "main") {
    if (product.productid) {
      if (product.productid.featurefilepath) return product.productid.featurefilepath;
    }

    if (product.productId) {
      if (product.productId.featurefilepath) return product.productId.featurefilepath;
    }

    if (product.featureimage) return product.featureimage;
    if (product.galleryimgdetails) return product.galleryimgdetails[0];
  }

  if (image === "sectionB") {
    if (product.productid) {
      if (product.productid.sectionbimage) return product.productid.sectionbimage;
    }

    if (product.productId) {
      if (product.productId.sectionbimage) return product.productId.sectionbimage;
    }

    if (product.sectionbimage) return product.sectionbimage;
  }

  return null;
};
const getProductImageArray = (product = {}) => {
  let image = [];

  if (product.productid) {
    if (product.productid.featurefilepath) image = [...image, product.productid.featurefilepath];
  }

  if (product.featureimage) image = [...image, product.featureimage];
  if (product.galleryimgdetails) image = [...image, ...product.galleryimgdetails];
  return image;
};
const getProductAttributes = (product = {}, allProducts = []) => {
  if (product.combo) {
    return product.products.map(el => {
      const {
        combo_pid
      } = el;
      const thisProduct = allProducts.find(elx => elx._id === combo_pid);

      if (thisProduct) {
        return {
          title: thisProduct.title || thisProduct.productid && thisProduct.productid.producttitle,
          description: thisProduct.description || thisProduct.productid && thisProduct.productid.description
        };
      }

      return null;
    }).filter(el => el);
  }

  return product.attributecontent || [];
};
const getProductDescription = product => {
  if (product) {
    if (product.productid) {
      return product.productid.description;
    }

    if (product.description) {
      return product.description;
    }
  }

  return "";
};
const getProductTitle = product => {
  if (product) {
    if (product.title) {
      return product.title;
    }

    if (product.productid) {
      return product.productid.producttitle;
    }

    if (product.producttitle) {
      return product.producttitle;
    }
  }

  return "";
};
const getProductShortDesc = product => {
  if (product) {
    if (product.sdescription) {
      return product.sdescription;
    }

    if (product.productid) {
      return product.productid.sdescription;
    }
  }

  return "";
}; //

const filteredAttr = (variation, attr) => {
  const attrX = variation.map(el => {
    const {
      sale_price,
      sku,
      bar,
      regular_price
    } = el,
          rest = _objectWithoutProperties(el, ["sale_price", "sku", "bar", "regular_price"]);

    return _objectSpread({}, rest);
  });
  const attrY = attrX.filter(el => Object.keys(el).length === attr.length);
  const attrZ = removeDuplicateObjAr(attrY);
  return attrZ;
};
const removeDuplicateObjAr = arr => arr.reduce((r, i) => !r.some(j => Object.keys(i).length === Object.keys(j).length && !Object.keys(i).some(k => i[k] !== j[k])) ? [...r, i] : r, []);
const getAttrListing = (attr = []) => attr.length > 0 ? Object.keys(attr[0]).map(el => ({
  names: el,
  values: [...new Set(attr.map(elx => elx[el]))]
})) : [];
const getFeaturedProduct = (products = []) => {
  const filterProduct = getVisibleProducts(products).filter(el => {
    if (!el) return false;
    if (el.featured !== true) return false;
    return true;
  });
  return filterProduct;
};
const getVisibleProducts = (products = []) => {
  const productsList = products.filter(el => {
    if (!el) return false;
    if (el.visibilitytype !== true) return false;
    return true;
  });
  return productsList.map(el => {
    if (el.combo) return el;

    if (el.variation) {
      const verifiedAttr = filteredAttr(el.variation, el.attributes);
      return _objectSpread(_objectSpread({}, el), {}, {
        verifiedAttr,
        visibleAttrList: getAttrListing(verifiedAttr)
      });
    } else return el;
  });
};
const generateProductSlug = product => {
  const productSlug = product.title ? product.title.toLocaleLowerCase() : product.productid && product.productid.producttitle.toLocaleLowerCase();
  return Object(_misc__WEBPACK_IMPORTED_MODULE_1__[/* encodeUrlFn */ "a"])(productSlug);
};
const addSlugToProduct = product => _objectSpread(_objectSpread({}, product), {}, {
  productImage: getProductImage(product),
  productSlug: generateProductSlug(product)
});
const getCategoriesProducts = products => {
  const productsN = products.filter(el => el.categoryid);
  const combos = products.filter(el => el.combo);
  const filtered = productsN.map(el => {
    return productsN.filter(elx => {
      if (el.categoryid[0] && elx.categoryid[0]) return el.categoryid[0]._id === elx.categoryid[0]._id;
      return false;
    });
  }).sort((a, b) => {
    if (a[0] && b[0]) if (a[0].categoryid[0] && b[0].categoryid[0]) {
      if (a[0].categoryid[0]._id < b[0].categoryid[0]._id) return -1;
      if (a[0].categoryid[0]._id > b[0].categoryid[0]._id) return 1;
    }
    return 0;
  });
  const productsF = filtered.filter((el, x) => {
    if (x === 0) return true;

    if (filtered[x - 1] && el[0]) {
      if (filtered[x - 1][0]) {
        if (filtered[x - 1][0].categoryid[0] && el[0].categoryid[0]) {
          const prevEl = filtered[x - 1][0].categoryid[0]._id;
          const currentEl = el[0].categoryid[0]._id;
          return prevEl !== currentEl;
        }
      }
    }

    return false; // const prevEl = filtered[x - 1][0].categoryid[0]._id;
    // const currentEl = el[0].categoryid[0]._id;
    // return prevEl !== currentEl;
  });
  const cate = [...productsF, combos];
  return cate.map(el => {
    if (el.length) {
      if (el[0].combo) {
        return {
          category: {
            blockedcountries: [],
            catdescription: "Bundles",
            categoryid: "Bundles",
            categoryslug: "Bundles",
            categorytitle: "Bundles",
            _id: "Bundles",
            products: el
          },
          products: el
        };
      }

      return {
        category: _objectSpread(_objectSpread({}, el[0].categoryid[0]), {}, {
          products: el
        }),
        products: el
      };
    }

    return null;
  }).filter(el => el);
};
const getProductPrice = (product, qty, state) => {
  var {
    sale_price,
    regular_price,
    subscribeChecked,
    subscribeDiscount
  } = state;

  if (product.producttype === "simple" || product.combo === true) {
    sale_price = product.dsaleprice;
    regular_price = product.dregularprice;
  }

  let value = 0;
  const qtyVal = qty ? parseInt(qty) > 0 ? parseInt(qty) : 1 : 1;
  let currency = `$`;

  if (sale_price) {
    value = sale_price;
  } else if (regular_price) {
    value = regular_price;
  }

  if (value) {
    if (subscribeChecked) {
      const discount = subscribeDiscount;
      const cutPrice = value - Object(_misc__WEBPACK_IMPORTED_MODULE_1__[/* getParentage */ "b"])(parseFloat(discount), value);

      if (onlyNew) {
        return __jsx("span", null, " " + currency, (cutPrice * qtyVal).toFixed(2));
      }

      return __jsx("span", null, " " + currency, __jsx("strike", null, Object(_misc__WEBPACK_IMPORTED_MODULE_1__[/* numberFormat */ "d"])(value * qtyVal)), " ", (cutPrice * qtyVal).toFixed(2)); // `${currency}${basicFunction.nombarFormat(value * qtyVal)}`
    }

    return ` ${currency}${basicFunction.numberFormat(value * qtyVal)}`;
  }

  return ``;
};
const getBasicPrice = product => {
  const {
    verifiedAttr,
    variation,
    combo,
    producttype
  } = product;

  if (combo || producttype !== "variable") {
    return {
      regular_price: product.dregularprice,
      sale_price: product.dsaleprice
    };
  }

  if (verifiedAttr) {
    if (verifiedAttr.constructor === Array) {
      if (verifiedAttr.length > 0) {
        const findItem = variation.find(el => {
          const keyList = Object.keys(verifiedAttr[0]);
          const flag = keyList.every(elx => el[elx]);
          return flag;
        });

        if (findItem) {
          const {
            regular_price,
            sale_price
          } = findItem;
          return {
            regular_price,
            sale_price
          };
        }
      }
    }
  }

  return {
    regular_price: 0,
    sale_price: 0
  };
};
const directAddToCart = (product, qty = 1) => {
  const {
    verifiedAttr
  } = product;
  const arr = verifiedAttr && verifiedAttr.constructor === Array ? verifiedAttr.map(el => {
    const keys = Object.keys(el);
    return keys.map(elx => {
      return {
        [elx]: {
          label: el[elx],
          value: el[elx]
        }
      };
    });
  }) : [];
  const obj = arr.map(el => {
    return el.reduce((a, b) => {
      return _objectSpread(_objectSpread({}, a), b);
    }, {});
  });
  const newVariation = obj && obj.length ? _objectSpread({}, obj[0]) : {};
  return Object(_cart__WEBPACK_IMPORTED_MODULE_2__[/* variablePriceSet */ "i"])(_objectSpread(_objectSpread(_objectSpread({}, product), newVariation), {}, {
    qty
  }));
};

/***/ }),

/***/ "Oi65":
/***/ (function(module, exports) {

module.exports = require("react-icons-kit");

/***/ }),

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "S3md":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ "T8f9":
/***/ (function(module, exports) {

module.exports = require("redux-persist/lib/storage");

/***/ }),

/***/ "TzE8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADD_ITEM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return REMOVE_ITEM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return MODIFY_ITEM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CLEAR_CART; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "V", function() { return SET_SHIPPING_CHARGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "W", function() { return SET_SHIPPING_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Z", function() { return SET_TAX_VALUE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return SET_COUPON_CODE_DISCOUNT_VALUE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return REMOVE_COUPON_CODE_DISCOUNT_VALUE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return SET_CART; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return SET_CART_NULL_ITEM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return SET_CART_EDITABLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gb", function() { return TOGGLE_CART_BAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "db", function() { return SHOW_CART_BAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return HIDE_CART_BAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hb", function() { return TOGGLE_REGISTRATION_BAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eb", function() { return SHOW_REGISTRATION_BAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return HIDE_REGISTRATION_BAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return HAS_LOGIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ib", function() { return TO_DISPLAY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ab", function() { return SET_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lb", function() { return UNSET_USER; });
/* unused harmony export SET_USER_META */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "M", function() { return SET_LOCATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return SET_COUNTRY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return SET_CONTINENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "J", function() { return SET_FAV_COUNTITY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return SET_APUSER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jb", function() { return UNSET_APUSER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bb", function() { return SET_WISHLIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mb", function() { return UNSET_WISHLIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cb", function() { return SET_WISHLIST_LOGIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nb", function() { return UNSET_WISHLIST_LOGIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return SET_PRODUCTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return SET_CATEGORIES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "R", function() { return SET_PRODUCT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return CLEAR_PRODUCT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H", function() { return SET_EXPRESS_CHECKOUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I", function() { return SET_EXPRESS_PAYPAL_CHECKOUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "N", function() { return SET_OD_FOR_PAYPAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "O", function() { return SET_ORDER_FLAG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "X", function() { return SET_SP_PRODUCTS; });
/* unused harmony export SET_BILL_PLAN */
/* unused harmony export SET_PAYPAL_FAIL */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "P", function() { return SET_PAYPAL_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return CLEAR_PAYPAL_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return HEADER_POP_UP_MODAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "U", function() { return SET_REFERRER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "K", function() { return SET_GUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return SET_CHECKOUT_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "T", function() { return SET_REDIRECT_CHECKOUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return SET_ADDRESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return SET_CARDS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return GET_REVIEWS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return CLEAR_REVIEWS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return REVIEW_POSTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F", function() { return SET_ENTRY_MSG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fb", function() { return SHOW_SUB_MENU; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Y", function() { return SET_SUB_MENU_PRODUCTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return SET_ACTIVE_SUB_MENU; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "L", function() { return SET_LEARN_SUB_MENU; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Q", function() { return SET_POS_UP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return CLEAR_ERRORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "G", function() { return SET_ERRORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return LOADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return SET_CURRENT_APPOINTMENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "kb", function() { return UNSET_CURRENT_APPOINTMENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return GET_ALL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return GET_ARTICLE; });
const ADD_ITEM = 'ADD_ITEM';
const REMOVE_ITEM = 'REMOVE_ITEM';
const MODIFY_ITEM = 'MODIFY_ITEM';
const CLEAR_CART = 'CLEAR_CART';
const SET_SHIPPING_CHARGE = 'SET_SHIPPING_CHARGE';
const SET_SHIPPING_TYPE = 'SET_SHIPPING_TYPE';
const SET_TAX_VALUE = 'SET_TAX_VALUE';
const SET_COUPON_CODE_DISCOUNT_VALUE = 'SET_COUPON_CODE_DISCOUNT_VALUE';
const REMOVE_COUPON_CODE_DISCOUNT_VALUE = 'REMOVE_COUPON_CODE_DISCOUNT_VALUE';
const SET_CART = 'SET_CART';
const SET_CART_NULL_ITEM = 'SET_CART_NULL_ITEM';
const SET_CART_EDITABLE = 'SET_CART_EDITABLE'; //drawers

const TOGGLE_CART_BAR = 'TOGGLE_CART_BAR';
const SHOW_CART_BAR = 'SHOW_CART_BAR';
const HIDE_CART_BAR = 'HIDE_CART_BAR';
const TOGGLE_REGISTRATION_BAR = 'TOGGLE_REGISTRATION_BAR';
const SHOW_REGISTRATION_BAR = 'SHOW_REGISTRATION_BAR';
const HIDE_REGISTRATION_BAR = 'HIDE_REGISTRATION_BAR';
const HAS_LOGIN = 'HAS_LOGIN';
const TO_DISPLAY = 'TO_DISPLAY';
const SET_USER = 'SET_USER';
const UNSET_USER = 'UNSET_USER';
const SET_USER_META = 'SET_USER_META';
const SET_LOCATION = 'SET_LOCATION';
const SET_COUNTRY = 'SET_COUNTRY';
const SET_CONTINENT = 'SET_CONTINENT';
const SET_FAV_COUNTITY = 'SET_FAV_COUNTITY';
const SET_APUSER = 'SET_APUSER';
const UNSET_APUSER = 'UNSET_APUSER';
const SET_WISHLIST = 'SET_WISHLIST';
const UNSET_WISHLIST = 'UNSET_WISHLIST';
const SET_WISHLIST_LOGIN = 'SET_WISHLIST_LOGIN';
const UNSET_WISHLIST_LOGIN = 'UNSET_WISHLIST_LOGIN';
const SET_PRODUCTS = 'SET_PRODUCTS';
const SET_CATEGORIES = 'SET_CATEGORIES';
const SET_PRODUCT = 'SET_PRODUCT';
const CLEAR_PRODUCT = 'CLEAR_PRODUCT';
const SET_EXPRESS_CHECKOUT = 'SET_EXPRESS_CHECKOUT';
const SET_EXPRESS_PAYPAL_CHECKOUT = 'SET_EXPRESS_PAYPAL_CHECKOUT';
const SET_OD_FOR_PAYPAL = 'SET_OD_FOR_PAYPAL';
const SET_ORDER_FLAG = 'SET_ORDER_FLAG';
const SET_SP_PRODUCTS = 'SET_SP_PRODUCTS';
const SET_BILL_PLAN = 'SET_BILL_PLAN';
const SET_PAYPAL_FAIL = 'SET_PAYPAL_FAIL';
const SET_PAYPAL_SUCCESS = 'SET_PAYPAL_SUCCESS';
const CLEAR_PAYPAL_SUCCESS = 'CLEAR_PAYPAL_SUCCESS';
const HEADER_POP_UP_MODAL = 'HEADER_POP_UP_MODAL';
const SET_REFERRER = 'SET_REFERRER';
const SET_GUEST = 'SET_GUEST';
const SET_CHECKOUT_PAGE = 'SET_CHECKOUT_PAGE';
const SET_REDIRECT_CHECKOUT = 'SET_REDIRECT_CHECKOUT'; // address

const SET_ADDRESS = 'SET_ADDRESS'; //cards

const SET_CARDS = 'SET_CARDS'; // reviews

const GET_REVIEWS = 'GET_REVIEWS';
const CLEAR_REVIEWS = 'CLEAR_REVIEWS';
const REVIEW_POSTED = 'REVIEW_POSTED'; // first setting

const SET_ENTRY_MSG = 'SET_ENTRY_MSG'; // menus

const SHOW_SUB_MENU = 'SHOW_SUB_MENU';
const SET_SUB_MENU_PRODUCTS = 'SET_SUB_MENU_PRODUCTS';
const SET_ACTIVE_SUB_MENU = 'SET_ACTIVE_SUB_MENU';
const SET_LEARN_SUB_MENU = 'SET_LEARN_SUB_MENU';
const SET_POS_UP = 'SET_POS_UP'; // errors

const CLEAR_ERRORS = 'CLEAR_ERRORS';
const SET_ERRORS = 'SET_ERRORS'; // loading

const LOADING = 'LOADING'; // appointments

const SET_CURRENT_APPOINTMENT = 'SET_CURRENT_APPOINTMENT';
const UNSET_CURRENT_APPOINTMENT = 'UNSET_CURRENT_APPOINTMENT'; //Blog

const GET_ALL = 'GET_ALL';
const GET_ARTICLE = 'GET_ARTICLE';

/***/ }),

/***/ "UJvz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ FullModal_FullModal; });

// UNUSED EXPORTS: Modal

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-icons-kit/md/"
var _ = __webpack_require__("3yuE");

// EXTERNAL MODULE: external "react-icons-kit"
var external_react_icons_kit_ = __webpack_require__("Oi65");
var external_react_icons_kit_default = /*#__PURE__*/__webpack_require__.n(external_react_icons_kit_);

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__("K2gz");
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// EXTERNAL MODULE: external "reactstrap"
var external_reactstrap_ = __webpack_require__("oL/c");

// CONCATENATED MODULE: ./components/modal/Modal.js
var __jsx = external_react_default.a.createElement;





class Modal_Modal extends external_react_["Component"] {
  constructor(props) {
    super(props);
    this.state = {};
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    const {
      toggle
    } = this.props;
    if (typeof toggle === "function") toggle();
  }

  render() {
    const {
      isOpen,
      children,
      noCross,
      large,
      heading
    } = this.props;
    return __jsx("div", null, __jsx(external_reactstrap_["Modal"], {
      isOpen: isOpen,
      toggle: this.toggle,
      className: external_classnames_default()("full-modal", {
        large: large
      })
    }, heading && __jsx(external_reactstrap_["ModalHeader"], {
      toggle: this.toggle
    }, heading), __jsx("div", {
      className: "Modal-body center-modal"
    }, !noCross && !heading && __jsx("div", {
      className: "modal-dismiss",
      onClick: this.toggle
    }, __jsx(external_react_icons_kit_default.a, {
      icon: _["ic_clear"],
      size: 64
    })), __jsx("div", {
      className: "modal-inner"
    }, __jsx("div", {
      className: "modal-content"
    }, children)))));
  }

}
// CONCATENATED MODULE: ./components/modal/FullModal.js
var FullModal_jsx = external_react_default.a.createElement;


class FullModal_FullModal extends external_react_["Component"] {
  constructor(props) {
    super(props);
    this.state = {};
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    const {
      toggle
    } = this.props;
    if (typeof toggle === "function") toggle();
  }

  render() {
    const {
      isOpen,
      children
    } = this.props;
    return FullModal_jsx("div", null, FullModal_jsx(external_reactstrap_["Modal"], {
      isOpen: isOpen,
      toggle: this.toggle,
      className: "full-screen-modal modal__full-width"
    }, FullModal_jsx("div", {
      className: "Modal-body full-screen-modal-body"
    }, FullModal_jsx("div", {
      className: "modal-inner"
    }, FullModal_jsx("div", {
      className: "modal-content",
      style: this.props.style
    }, children)))));
  }

}
// CONCATENATED MODULE: ./components/modal/index.js



/***/ }),

/***/ "UrdJ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addToCart; });
/* unused harmony export fetchCart */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return removeFromCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return modifyItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return clearCart; });
/* unused harmony export clearCartA */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return setShippingCharge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return setShippingType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return setTax; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return setCoupon; });
/* unused harmony export setFav */
/* unused harmony export setCartNullItem */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return setEditable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return removeCoupon; });
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("TzE8");
/* harmony import */ var _services_helpers_cart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("3EDw");


const addToCart = (item, cart = null, userMetaId = null) => dispatch => {
  console.log({
    item
  });
  dispatch({
    type: _type__WEBPACK_IMPORTED_MODULE_0__[/* ADD_ITEM */ "a"],
    payload: item
  }); // console.log("1");

  if (cart) {
    console.log("2", {
      cart
    });
    const newCart = Object(_services_helpers_cart__WEBPACK_IMPORTED_MODULE_1__[/* addItem */ "a"])(cart, item);
    const isNulled = newCart.items.find(el => el.isNull); // console.log({
    //   isNulled
    // });

    if (isNulled && !newCart.hasNulled) {
      dispatch(setCartNullItem());
    } else if (newCart.hasNulled) {
      dispatch(setCartNullItem(false));
    } // if (userMetaId) {
    //   setCartApi({
    //     usermetaid: userMetaId,
    //     cart: newCart
    //   });
    // }

  } else {
    if (item.isNull) {
      dispatch(setCartNullItem());
    }
  }
};
const fetchCart = userId => dispatch => {
  // console.log({ userId });
  getSingleUserApi(userId).then(rep => {
    const res = rep.data;
    console.log({
      res
    });

    if (res.status && res.user && res.user.cart) {
      dispatch({
        type: _type__WEBPACK_IMPORTED_MODULE_0__[/* SET_CART */ "w"],
        payload: res.user.cart
      });
    }
  });
};
const removeFromCart = (id, cart = null, userMetaId = null) => dispatch => {
  dispatch({
    type: _type__WEBPACK_IMPORTED_MODULE_0__[/* REMOVE_ITEM */ "q"],
    payload: id
  });

  if (cart && userMetaId) {
    const newCart = Object(_services_helpers_cart__WEBPACK_IMPORTED_MODULE_1__[/* removeItem */ "g"])(cart, id); // setCartApi({
    //   usermetaid: userMetaId,
    //   cart: newCart
    // });
  }
};
const modifyItem = (oldItem, cart = null, userMetaId = null) => dispatch => {
  dispatch({
    type: _type__WEBPACK_IMPORTED_MODULE_0__[/* MODIFY_ITEM */ "o"],
    payload: oldItem
  });

  if (cart && userMetaId) {
    const newCart = Object(_services_helpers_cart__WEBPACK_IMPORTED_MODULE_1__[/* modifyProduct */ "f"])(oldItem.oldItem, oldItem.newItem, cart); // setCartApi({
    //   usermetaid: userMetaId,
    //   cart: newCart
    // });
  }
};
const clearCart = (userMetaId = null) => dispatch => {
  // console.log("cleared =========== ")
  dispatch({
    type: _type__WEBPACK_IMPORTED_MODULE_0__[/* CLEAR_CART */ "b"]
  });

  if (userMetaId) {// setCartApi({
    //   usermetaid: userMetaId,
    //   cart: initialCart
    // });
  }
};
const clearCartA = () => {
  //console.log("clear AAAAAAAAAA")
  return {
    type: _type__WEBPACK_IMPORTED_MODULE_0__[/* CLEAR_CART */ "b"]
  };
};
const setShippingCharge = (charge, cart = null, userMetaId = null) => dispatch => {
  dispatch({
    type: _type__WEBPACK_IMPORTED_MODULE_0__[/* SET_SHIPPING_CHARGE */ "V"],
    payload: charge
  });

  if (cart && userMetaId) {// setCartApi({
    //   usermetaid: userMetaId,
    //   cart: {
    //     ...cart,
    //     shippingCharge: charge
    //   }
    // });
  }
};
const setShippingType = (type, cart = null, userMetaId = null) => dispatch => {
  dispatch({
    type: _type__WEBPACK_IMPORTED_MODULE_0__[/* SET_SHIPPING_TYPE */ "W"],
    payload: type
  });

  if (cart && userMetaId) {// setCartApi({
    //   usermetaid: userMetaId,
    //   cart: {
    //     ...cart,
    //     shippingType: type
    //   }
    // });
  }
};
const setTax = (tax, cart = null, userMetaId = null) => dispatch => {
  dispatch({
    type: _type__WEBPACK_IMPORTED_MODULE_0__[/* SET_TAX_VALUE */ "Z"],
    payload: tax
  });

  if (cart && userMetaId) {// setCartApi({
    //   usermetaid: userMetaId,
    //   cart: {
    //     ...cart,
    //     taxPercent: tax.taxPercent,
    //     taxCountry: tax.taxCountry
    //   }
    // });
  }
};
const setCoupon = (coupon, cart = null, userMetaId = null) => dispatch => {
  console.log("In action");
  dispatch({
    type: _type__WEBPACK_IMPORTED_MODULE_0__[/* SET_COUPON_CODE_DISCOUNT_VALUE */ "D"],
    payload: coupon
  });

  if (cart && userMetaId) {// setCartApi({
    //   usermetaid: userMetaId,
    //   cart: {
    //     ...cart,
    //     taxCouponCode: coupon.taxCouponCode,
    //     taxCouponDiscount: coupon.taxCouponDiscount
    //   }
    // });
  }
};
const setFav = (fav, cart = null, userMetaId = null) => dispatch => {
  dispatch({
    type: _type__WEBPACK_IMPORTED_MODULE_0__[/* SET_FAV_COUNTITY */ "J"],
    payload: fav
  });

  if (cart && userMetaId) {// setCartApi({
    //   usermetaid: userMetaId,
    //   cart: {
    //     ...cart,
    //     setFav: fav.setFav
    //   }
    // });
  }
};
const setCartNullItem = (isNull = true) => ({
  type: _type__WEBPACK_IMPORTED_MODULE_0__[/* SET_CART_NULL_ITEM */ "y"],
  payload: isNull
});
const setEditable = (isEditable = true) => ({
  type: _type__WEBPACK_IMPORTED_MODULE_0__[/* SET_CART_EDITABLE */ "x"],
  payload: isEditable
});
const removeCoupon = (cart = null, userMetaId = null) => dispatch => {
  console.log("In action");
  dispatch({
    type: _type__WEBPACK_IMPORTED_MODULE_0__[/* REMOVE_COUPON_CODE_DISCOUNT_VALUE */ "p"],
    payload: {}
  });

  if (cart && userMetaId) {// setCartApi({
    //   usermetaid: userMetaId,
    //   cart: {
    //     ...cart,
    //     taxCouponCode: coupon.taxCouponCode,
    //     taxCouponDiscount: coupon.taxCouponDiscount
    //   }
    // });
  }
};

/***/ }),

/***/ "VNb8":
/***/ (function(module, exports) {

module.exports = require("redux-persist");

/***/ }),

/***/ "WZpn":
/***/ (function(module, exports) {

module.exports = require("validator");

/***/ }),

/***/ "Wol/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _constants_projectSettings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("xSWb");

const {
  baseUrl,
  docMzUrl,
  contentUrl
} = _constants_projectSettings__WEBPACK_IMPORTED_MODULE_0__[/* default */ "d"];
const apiList = {
  getAllProducts: `${baseUrl}/product/all`,
  getAllCategories: `${baseUrl}/category/all`,
  getProductById: `${baseUrl}/product/`,
  getCategoryById: `${baseUrl}/category/`,
  signInApi: `${baseUrl}/auth/signin`,
  contact: `${baseUrl}/contact/`,
  getAllCombos: `${baseUrl}/products/api/combos/all/`,
  getProductByName: `${baseUrl}/products/api/getbyname/`,
  //getAllCategories:`${baseUrl}/categories/getcategories`,
  getReviews: `${baseUrl}/review/getapproved/`,
  addReviews: `${baseUrl}/review/add/`,
  addToWishList: `${baseUrl}/wishlist/api/add/`,
  getWishList: `${baseUrl}/wishlist/api/byuser/`,
  deleteWishList: `${baseUrl}/wishlist/api/delete/`,
  userRegistration: `${baseUrl}/users/api/register/`,
  userLogin: `${baseUrl}/users/api/login/`,
  updateUserDetails: `${baseUrl}/users/api/profile/`,
  getUserDetails: `${baseUrl}/users/api/profile/`,
  updateUserPassword: `${baseUrl}/users/api/profile/password/`,
  forgotPassword: `${baseUrl}/users/api/forgetpassword/`,
  getShippingRates: `${baseUrl}/ship/shipment/`,
  confirmShipment: `${baseUrl}/ship/confirm/`,
  getTaxValue: `${baseUrl}/getinfo/gettax/`,
  authorizeCharge: `${baseUrl}/authorize/charge/`,
  authorizeChargeProfile: `${baseUrl}/authorize/chargeprofile/`,
  authorizeChargeBank: `${baseUrl}/authorize/charge/bank/`,
  authorizeSubscription: `${baseUrl}/authorize/create/subscription/`,
  authorizeSubscriptionProfile: `${baseUrl}/authorize/create/subscription/profile/`,
  authorizeSubscriptionBank: `${baseUrl}/authorize/create/subscription/bank/`,
  authorizeSubscriptionBank: `${baseUrl}/authorize/create/subscription/bank/`,
  authorizeSubscriptionCancel: `${baseUrl}/authorize/cancel/subscription/`,
  authorizeAddCard: `${baseUrl}/authorize/addcard/`,
  authorizeSaveCard: `${baseUrl}/authorize/savecard/`,
  authorizeDeleteCard: `${baseUrl}/authorize/deletecard/`,
  placeOrder: `${baseUrl}/order/add/`,
  placeOrderNew: `${baseUrl}/order/process/order/`,
  allOrderList: `${baseUrl}/order/getorders/`,
  orderList: `${baseUrl}/order/api/getbyuser/`,
  trackOrder: `${baseUrl}/ship/track`,
  getAllCreatives: `${baseUrl}/ambassador-portal/creatives/api/all/`,
  getAmbassadorDetails: `${baseUrl}/ambassador-portal/stats/`,
  updateAff: `${baseUrl}/ambassador-portal/update/`,
  ambassadorPortalLogin: `${baseUrl}/ambassador-portal/login/`,
  ambassadorPortalRegistration: `${baseUrl}/ambassador-portal/register/`,
  addAmbassador: `${baseUrl}/ambassador-portal/add/url/`,
  forgotPasswordAff: `${baseUrl}/ambassador-portal/forgetpassword/`,
  // doc mz
  getDoctors: `${docMzUrl}/doctors/get`,
  getDoctorById: `${docMzUrl}/doctors/getdoc/`,
  getBlogs: `${contentUrl}/Blog/get/tag`,
  getCoupon: `${baseUrl}/stripe/coupon/list`,
  getCategoryByName: `${contentUrl}/Category/getData/`,
  getBannerByName: `${contentUrl}/Banner/getData/`,
  addSubscriber: `${baseUrl}/subscribedData/add`,
  getSubscribers: `${baseUrl}/subscribedData/get`,
  getLearn: `${contentUrl}/Learn/getLearn`
};
/* harmony default export */ __webpack_exports__["a"] = (apiList);

/***/ }),

/***/ "X24+":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "X4LH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return initialCart; });
const initialCart = {
  items: [],
  subTotal: 0,
  unSubscribeProductAmount: 0,
  shippingCharge: 0,
  shippingType: "standard",
  taxPercent: 0,
  taxCountry: null,
  totalWeight: 0,
  totalVolume: 0,
  taxCouponCode: "",
  taxCouponDiscount: 0,
  setFav: 0,
  hasNulled: false,
  isEditable: true
};

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YLtl":
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "YTqd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "Ynsj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export setCards */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getCards; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addCardAuthorize; });
/* unused harmony export addCard */
/* unused harmony export editCard */
/* unused harmony export deleteCard */
/* unused harmony export setDefaultCard */
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("TzE8");
/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("2MRG");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const setCards = payload => ({
  type: _type__WEBPACK_IMPORTED_MODULE_0__[/* SET_CARDS */ "v"],
  payload
});
const getCards = id => async dispatch => {
  Object(_services_api__WEBPACK_IMPORTED_MODULE_1__[/* getUserDetails */ "r"])(id).then(resRaw => {
    const res = resRaw.data;
    console.log(res);
    const cards = returnCards(res);
    dispatch(setCards(cards));
  }).catch(err => console.log({
    err
  }));
};
const addCardAuthorize = data => dispatch => {
  const {
    user,
    card,
    bank,
    oldCards
  } = data;
  const {
    userMetaId,
    _id,
    userMetaObj
  } = user;
  console.log({
    data,
    dispatch
  });

  const sendCardDetails = (customData, userId) => {
    console.log({
      customData,
      userId
    });
    Object(_services_api__WEBPACK_IMPORTED_MODULE_1__[/* authorizeAddCard */ "b"])(customData).then(response => {
      const res = response.data;
      const {
        status,
        card
      } = res;

      if (status && card && card.paymentProfile && card.messages && card.messages.resultCode === "Ok") {
        //   if (userId) {
        //     updateUserMeta(userId);
        //   }
        const {
          customerProfileId,
          customerPaymentProfileId,
          payment
        } = card.paymentProfile;

        const newCard = _objectSpread({
          customerProfileId,
          customerPaymentProfileId
        }, payment);

        const allCardsPre = oldCards ? [...oldCards, newCard] : [newCard];
        const defaultCard = allCardsPre.find(el => el.isDefault === true);
        const allCards = allCardsPre.map((el, index) => {
          if (index === 0 && !defaultCard) return _objectSpread(_objectSpread({}, el), {}, {
            isDefault: true
          });
          return el;
        });
        Object(_services_api__WEBPACK_IMPORTED_MODULE_1__[/* updateUserDetails */ "x"])({
          userid: _id,
          carddetails: {
            cards: allCards
          }
        }).then(response => {
          console.log({
            response
          });
          const res = response.data;
          const cards = returnCards(res);
          dispatch(setCards(cards)); // getUserMetaNoCart(userId);

          dispatch({
            type: _type__WEBPACK_IMPORTED_MODULE_0__[/* CLEAR_ERRORS */ "c"],
            payload: {}
          });
          Object(_services_api__WEBPACK_IMPORTED_MODULE_1__[/* getUserDetails */ "r"])(userId).then(response => {
            const res = response.data;

            if (res.user && res.user._id) {
              console.log("user meta found", res);
              dispatch({
                type: _type__WEBPACK_IMPORTED_MODULE_0__[/* SET_USER */ "ab"],
                payload: _objectSpread(_objectSpread({}, res.user.userid), {}, {
                  userMetaId: res.user._id,
                  userMetaObj: res.user
                })
              });
            }
          });
        }).catch(err => {
          dispatch({
            type: _type__WEBPACK_IMPORTED_MODULE_0__[/* SET_ERRORS */ "G"],
            payload: {
              cards: ["Some thing wrong"]
            }
          });
          Object(_services_api__WEBPACK_IMPORTED_MODULE_1__[/* getUserDetails */ "r"])(userId).then(response => {
            const res = response.data;

            if (res.user && res.user._id) {
              console.log("user meta found", res);
              dispatch({
                type: _type__WEBPACK_IMPORTED_MODULE_0__[/* SET_USER */ "ab"],
                payload: _objectSpread(_objectSpread({}, res.user.userid), {}, {
                  userMetaId: res.user._id,
                  userMetaObj: res.user
                })
              });
            }
          });
          console.log({
            err
          });
        });
        console.log({
          customerProfileId,
          customerPaymentProfileId,
          payment,
          customData
        });
      } else {
        dispatch({
          type: _type__WEBPACK_IMPORTED_MODULE_0__[/* SET_ERRORS */ "G"],
          payload: {
            cards: ["Some thing wrong"]
          }
        });
      }
    });
  };

  const chooseCardOrBank = (userMetaId, userMetaObj) => {
    const {
      customerProfile
    } = userMetaObj;

    if (customerProfile) {
      if (card) {
        const {
          cardnumber,
          cvc,
          expmonth,
          expyear
        } = card;
        const creditcard = {
          cardNumber: cardnumber.split("-").join(""),
          expirationDate: `20${expyear}-${expmonth}`,
          cardCode: cvc
        };
        sendCardDetails({
          creditcard,
          profileid: customerProfile
        });
      } else if (bank) {
        sendCardDetails({
          bank,
          profileid: customerProfile
        });
      }
    } else {
      if (card) {
        const {
          cardnumber,
          cvc,
          expmonth,
          expyear
        } = card;
        const creditcard = {
          cardNumber: cardnumber.split("-").join(""),
          expirationDate: `20${expyear}-${expmonth}`,
          cardCode: cvc
        };
        const userMetaIdId = userMetaId._id ? userMetaId._id : typeof userMetaId === "string" && userMetaId;
        sendCardDetails({
          creditcard,
          email: userMetaIdId + "@cbdbene.com",
          metaid: userMetaIdId
        }, _id);
      } else if (bank) {
        const userMetaIdId = userMetaId._id ? userMetaId._id : typeof userMetaId === "string" && userMetaId;
        sendCardDetails({
          bank,
          email: userMetaIdId + "@cbdbene.com",
          metaid: userMetaIdId
        }, _id);
      }
    }
  };

  if (userMetaObj && userMetaId) {
    chooseCardOrBank(userMetaId, userMetaObj);
  } else if (_id) {
    Object(_services_api__WEBPACK_IMPORTED_MODULE_1__[/* getUserDetails */ "r"])(_id).then(res => {
      console.log({
        res
      });
      const {
        user
      } = res.data;
      const userMetaId = user._id;
      const userMetaObj = data.user;
      chooseCardOrBank(userMetaId, userMetaObj);
    });
  }
};

const returnCards = res => {
  if (res.user) {
    if (res.user.carddetails) {
      return res.user.carddetails;
    }
  }

  return {};
};

const addCard = (userid, card, oldDetail = {}, oldCards = []) => dispatch => {
  console.log({
    userid,
    card
  });
  const found = oldCards.find(el => el.id === card.id);
  console.log({
    found
  });

  if (found) {
    dispatch(editCard(userid, card, oldDetail, oldCards));
  } else {
    const allCardsPre = oldCards ? [...oldCards, card] : [card];
    const defaultCard = allCardsPre.find(el => el.isDefault === true);
    const allCards = allCardsPre.map((el, index) => {
      if (index === 0 && !defaultCard) return _objectSpread(_objectSpread({}, el), {}, {
        isDefault: true
      });
      return el;
    });
    Object(_services_api__WEBPACK_IMPORTED_MODULE_1__[/* updateUserDetails */ "x"])({
      userid,
      carddetails: _objectSpread(_objectSpread({}, oldDetail), {}, {
        cards: allCards
      })
    }).then(rep => {
      const res = rep.data;
      console.log({
        res
      });
      const cards = returnCards(res);
      dispatch(setCards(cards));
    }).catch(err => {
      console.log({
        err
      });
    });
  }
};
const editCard = (userid, card, oldDetail = {}, oldCards = []) => dispatch => {
  const newCard = oldCards.map(el => {
    if (el.id === card.id) return card;
    return el;
  });
  addUpdateUserDetails({
    userid,
    carddetails: _objectSpread(_objectSpread({}, oldDetail), {}, {
      cards: newCard
    })
  }).then(rep => {
    const res = rep.data;
    console.log({
      res
    });
    const cards = returnCards(res);
    dispatch(setCards(cards));
  }).catch(err => {
    console.log({
      err
    });
  });
};
const deleteCard = (userid, card, oldDetail = {}, oldCards = []) => dispatch => {
  const newCard = oldCards.filter(el => el.customerPaymentProfileId !== card.customerPaymentProfileId);
  Object(_services_api__WEBPACK_IMPORTED_MODULE_1__[/* authorizeDeleteCard */ "f"])({
    paymentid: card.customerPaymentProfileId,
    profileid: card.customerProfileId
  }).then(rep => {
    const res = rep.data;
    console.log({
      res
    });

    if (res && res.data && res.data.messages && res.data.messages.resultCode === "Ok") {
      const defaultCard = newCard.find(el => el.isDefault === true);
      const allCards = newCard.map((el, index) => {
        if (index === 0 && !defaultCard) return _objectSpread(_objectSpread({}, el), {}, {
          isDefault: true
        });
        return el;
      });
      Object(_services_api__WEBPACK_IMPORTED_MODULE_1__[/* updateUserDetails */ "x"])({
        userid,
        carddetails: _objectSpread(_objectSpread({}, oldDetail), {}, {
          cards: allCards
        })
      }).then(rep => {
        const res = rep.data;
        console.log({
          res
        });
        const cards = returnCards(res);
        dispatch(setCards(cards));
      }).catch(err => {
        console.log({
          err
        });
      });
    }
  });
};
const setDefaultCard = (userid, id, oldDetail = {}, oldCards = []) => dispatch => {
  const newCard = oldCards.map(el => {
    return _objectSpread(_objectSpread({}, el), {}, {
      isDefault: el.customerPaymentProfileId === id
    });
  });
  Object(_services_api__WEBPACK_IMPORTED_MODULE_1__[/* updateUserDetails */ "x"])({
    userid,
    carddetails: _objectSpread(_objectSpread({}, oldDetail), {}, {
      cards: newCard
    })
  }).then(rep => {
    const res = rep.data;
    console.log({
      res
    });
    const cards = returnCards(res);
    dispatch(setCards(cards));
  }).catch(err => {
    console.log({
      err
    });
  });
};

/***/ }),

/***/ "ZSSH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ makeStore; });

// UNUSED EXPORTS: setClientState

// EXTERNAL MODULE: external "redux"
var external_redux_ = __webpack_require__("rKB8");

// EXTERNAL MODULE: external "redux-persist"
var external_redux_persist_ = __webpack_require__("VNb8");

// EXTERNAL MODULE: external "redux-persist/lib/storage"
var storage_ = __webpack_require__("T8f9");
var storage_default = /*#__PURE__*/__webpack_require__.n(storage_);

// EXTERNAL MODULE: external "redux-persist/lib/storage/session"
var session_ = __webpack_require__("/mcW");
var session_default = /*#__PURE__*/__webpack_require__.n(session_);

// EXTERNAL MODULE: external "redux-thunk"
var external_redux_thunk_ = __webpack_require__("ZSx1");
var external_redux_thunk_default = /*#__PURE__*/__webpack_require__.n(external_redux_thunk_);

// EXTERNAL MODULE: ./redux/actions/type.js
var actions_type = __webpack_require__("TzE8");

// EXTERNAL MODULE: ./services/helpers/cart.js
var cart = __webpack_require__("3EDw");

// EXTERNAL MODULE: ./constants/reduxInitialStates.js
var reduxInitialStates = __webpack_require__("X4LH");

// CONCATENATED MODULE: ./redux/reducers/cart.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




/* harmony default export */ var reducers_cart = ((state = reduxInitialStates["a" /* initialCart */], action) => {
  const {
    payload,
    type
  } = action;

  switch (type) {
    case actions_type["a" /* ADD_ITEM */]:
      if (payload) {
        return Object(cart["h" /* setSlugInCart */])(Object(cart["a" /* addItem */])(state, payload));
      }

      return state;

    case actions_type["q" /* REMOVE_ITEM */]:
      return Object(cart["h" /* setSlugInCart */])(Object(cart["g" /* removeItem */])(state, payload));

    case actions_type["o" /* MODIFY_ITEM */]:
      if (payload.newItem && payload.oldItem) {
        const {
          newItem,
          oldItem
        } = payload;
        return Object(cart["h" /* setSlugInCart */])(Object(cart["f" /* modifyProduct */])(oldItem, newItem, state));
      }

      return state;
    // break;

    case actions_type["b" /* CLEAR_CART */]:
      return reduxInitialStates["a" /* initialCart */];

    case actions_type["V" /* SET_SHIPPING_CHARGE */]:
      return _objectSpread(_objectSpread({}, state), {}, {
        shippingCharge: payload
      });

    case actions_type["W" /* SET_SHIPPING_TYPE */]:
      return _objectSpread(_objectSpread({}, state), {}, {
        shippingType: payload
      });

    case actions_type["Z" /* SET_TAX_VALUE */]:
      return _objectSpread(_objectSpread({}, state), {}, {
        taxPercent: payload.taxPercent,
        taxCountry: payload.taxCountry
      });

    case actions_type["D" /* SET_COUPON_CODE_DISCOUNT_VALUE */]:
      return _objectSpread(_objectSpread({}, state), {}, {
        taxCouponCode: payload.id,
        taxCouponDiscount: payload.percent_off
      });

    case actions_type["p" /* REMOVE_COUPON_CODE_DISCOUNT_VALUE */]:
      return _objectSpread(_objectSpread({}, state), {}, {
        taxCouponCode: "",
        taxCouponDiscount: 0
      });

    case actions_type["J" /* SET_FAV_COUNTITY */]:
      return _objectSpread(_objectSpread({}, state), {}, {
        setFav: payload.setFav
      });

    case actions_type["y" /* SET_CART_NULL_ITEM */]:
      return _objectSpread(_objectSpread({}, state), {}, {
        hasNulled: payload
      });

    case actions_type["w" /* SET_CART */]:
      return payload;

    case actions_type["x" /* SET_CART_EDITABLE */]:
      return _objectSpread(_objectSpread({}, state), {}, {
        isEditable: payload
      });

    default:
      return state;
  }
});
// CONCATENATED MODULE: ./redux/reducers/user.js

const user_initialState = {};
/* harmony default export */ var user = ((state = user_initialState, action) => {
  const {
    payload,
    type
  } = action;

  switch (type) {
    case actions_type["ab" /* SET_USER */]:
      return payload;

    case actions_type["lb" /* UNSET_USER */]:
      return payload;

    default:
      return state;
  }
});
// CONCATENATED MODULE: ./redux/reducers/location.js
function location_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function location_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { location_ownKeys(Object(source), true).forEach(function (key) { location_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { location_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function location_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const location_initialState = {
  country: null,
  countryCode: null,
  continent: null
};
/* harmony default export */ var reducers_location = ((state = location_initialState, action) => {
  const {
    payload,
    type
  } = action;

  switch (type) {
    case actions_type["B" /* SET_CONTINENT */]:
      return location_objectSpread(location_objectSpread({}, state), {}, {
        continent: payload
      });

    case actions_type["C" /* SET_COUNTRY */]:
      return location_objectSpread(location_objectSpread({}, state), {}, {
        country: payload
      });

    case actions_type["M" /* SET_LOCATION */]:
      return location_objectSpread(location_objectSpread({}, state), payload);

    default:
      return state;
  }
});
// CONCATENATED MODULE: ./redux/reducers/ambassadoruser.js

const ambassadoruser_initialState = {};
/* harmony default export */ var ambassadoruser = ((state = ambassadoruser_initialState, action) => {
  const {
    payload,
    type
  } = action;

  switch (type) {
    case actions_type["u" /* SET_APUSER */]:
      return payload;

    case actions_type["jb" /* UNSET_APUSER */]:
      return payload;

    default:
      return state;
  }
});
// CONCATENATED MODULE: ./redux/reducers/wishList.js

const wishList_initialState = [];
/* harmony default export */ var wishList = ((state = wishList_initialState, action) => {
  const {
    payload,
    type
  } = action;

  switch (type) {
    case actions_type["bb" /* SET_WISHLIST */]:
      return payload;

    case actions_type["mb" /* UNSET_WISHLIST */]:
      return payload;

    default:
      return state;
  }
});
// CONCATENATED MODULE: ./redux/reducers/wishListLogin.js

const wishListLogin_initialState = [];
/* harmony default export */ var wishListLogin = ((state = wishListLogin_initialState, action) => {
  const {
    payload,
    type
  } = action;

  switch (type) {
    case actions_type["cb" /* SET_WISHLIST_LOGIN */]:
      return payload;

    case actions_type["nb" /* UNSET_WISHLIST_LOGIN */]:
      return payload;

    default:
      return state;
  }
});
// EXTERNAL MODULE: ./services/helpers/product.js
var product = __webpack_require__("OWVN");

// CONCATENATED MODULE: ./redux/reducers/products.js
function products_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function products_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { products_ownKeys(Object(source), true).forEach(function (key) { products_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { products_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function products_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const products_initialState = {
  products: [],
  product: null,
  featured: [],
  categories: [],
  category: null,
  subcategories: [],
  recentlyViewed: []
};
/* harmony default export */ var products = ((state = products_initialState, action) => {
  const {
    payload,
    type
  } = action;

  switch (type) {
    case actions_type["S" /* SET_PRODUCTS */]:
      return products_objectSpread(products_objectSpread({}, state), {}, {
        products: payload
      });

    case actions_type["z" /* SET_CATEGORIES */]:
      return products_objectSpread(products_objectSpread({}, state), {}, {
        categories: payload
      });

    case 'SET_SUBCATEGORIES':
      return products_objectSpread(products_objectSpread({}, state), {}, {
        subcategories: payload
      });

    case actions_type["R" /* SET_PRODUCT */]:
      return products_objectSpread(products_objectSpread({}, state), {}, {
        product: payload
      });

    case actions_type["e" /* CLEAR_PRODUCT */]:
      return products_objectSpread(products_objectSpread({}, state), {}, {
        product: null
      });

    case 'SET_CATEGORY':
      console.log('payload', payload);
      return products_objectSpread(products_objectSpread({}, state), {}, {
        category: payload
      });

    case 'CLEAR_CATEGORY':
      return products_objectSpread(products_objectSpread({}, state), {}, {
        category: null
      });

    case 'SET_RECENTLY_VIEWD':
      return products_objectSpread(products_objectSpread({}, state), {}, {
        recentlyViewed: payload
      });

    case 'ADD_TO_RECENTLY_VIEWD':
      let tempRecentlyViewed = state.recentlyViewed;
      if (tempRecentlyViewed.findIndex(x => x._id === payload._id) === -1) tempRecentlyViewed.push(payload);
      return products_objectSpread(products_objectSpread({}, state), {}, {
        recentlyViewed: tempRecentlyViewed
      });

    case 'CLEAR_RECENTLY_VIEWD':
      return products_objectSpread(products_objectSpread({}, state), {}, {
        recentlyViewed: null
      });

    default:
      return state;
  }
});
// CONCATENATED MODULE: ./redux/reducers/checkout.js
function checkout_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function checkout_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { checkout_ownKeys(Object(source), true).forEach(function (key) { checkout_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { checkout_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function checkout_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const checkout_initialState = {
  isExpressCheckout: false,
  expressCheckout: {},
  isExpressPaypalCheckout: false,
  expressPaypalCheckout: {},
  paypalOrderDetails: {},
  isPaypalSuccess: null,
  billingPlan: {},
  orderFlag: null,
  subscribedProducts: [],
  headerPopUpModalData: false,
  isGuest: false
};
/* harmony default export */ var checkout = ((state = checkout_initialState, action) => {
  const {
    payload,
    type
  } = action;

  switch (type) {
    case actions_type["H" /* SET_EXPRESS_CHECKOUT */]:
      return checkout_objectSpread(checkout_objectSpread({}, state), {}, {
        isExpressCheckout: payload
      });

    case actions_type["I" /* SET_EXPRESS_PAYPAL_CHECKOUT */]:
      return checkout_objectSpread(checkout_objectSpread({}, state), {}, {
        isExpressPaypalCheckout: payload
      });

    case actions_type["N" /* SET_OD_FOR_PAYPAL */]:
      return checkout_objectSpread(checkout_objectSpread({}, state), {}, {
        paypalOrderDetails: payload
      });

    case actions_type["O" /* SET_ORDER_FLAG */]:
      return checkout_objectSpread(checkout_objectSpread({}, state), {}, {
        orderFlag: payload
      });

    case actions_type["X" /* SET_SP_PRODUCTS */]:
      return checkout_objectSpread(checkout_objectSpread({}, state), {}, {
        subscribedProducts: payload
      });

    case actions_type["P" /* SET_PAYPAL_SUCCESS */]:
      return checkout_objectSpread(checkout_objectSpread({}, state), {}, {
        isPaypalSuccess: true
      });

    case actions_type["d" /* CLEAR_PAYPAL_SUCCESS */]:
      return checkout_objectSpread(checkout_objectSpread({}, state), {}, {
        isPaypalSuccess: null
      });

    case actions_type["k" /* HEADER_POP_UP_MODAL */]:
      return checkout_objectSpread(checkout_objectSpread({}, state), {}, {
        headerPopUpModalData: payload
      });

    case actions_type["K" /* SET_GUEST */]:
      return checkout_objectSpread(checkout_objectSpread({}, state), {}, {
        isGuest: payload
      });

    default:
      return state;
  }
});
// CONCATENATED MODULE: ./redux/reducers/referrer.js
function referrer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function referrer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { referrer_ownKeys(Object(source), true).forEach(function (key) { referrer_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { referrer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function referrer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const referrer_initialState = {
  referralUrl: null,
  ambassadorId: null,
  ambassadorUrl: null,
  referralUrlId: null
};
/* harmony default export */ var referrer = ((state = referrer_initialState, action) => {
  const {
    type,
    payload
  } = action;

  switch (type) {
    case actions_type["U" /* SET_REFERRER */]:
      return referrer_objectSpread(referrer_objectSpread({}, state), payload);

    default:
      return state;
  }
});
// CONCATENATED MODULE: ./redux/reducers/address.js

const address_initialState = {};
/* harmony default export */ var address = ((state = address_initialState, action) => {
  switch (action.type) {
    case actions_type["t" /* SET_ADDRESS */]:
      return action.payload;

    default:
      return state;
  }
});
// CONCATENATED MODULE: ./redux/reducers/cards.js

const cards_initialState = {};
/* harmony default export */ var cards = ((state = cards_initialState, action) => {
  switch (action.type) {
    case actions_type["v" /* SET_CARDS */]:
      return action.payload;

    default:
      return state;
  }
});
// CONCATENATED MODULE: ./redux/reducers/reviews.js
function reviews_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function reviews_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { reviews_ownKeys(Object(source), true).forEach(function (key) { reviews_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { reviews_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function reviews_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const reviews_initialState = {
  reviews: [],
  isPosted: false
};
/* harmony default export */ var reviews = ((state = reviews_initialState, action) => {
  switch (action.type) {
    case actions_type["i" /* GET_REVIEWS */]:
      return reviews_objectSpread(reviews_objectSpread({}, state), {}, {
        reviews: action.payload
      });

    case actions_type["f" /* CLEAR_REVIEWS */]:
      return reviews_objectSpread(reviews_objectSpread({}, state), {}, {
        reviews: []
      });

    case actions_type["r" /* REVIEW_POSTED */]:
      return reviews_objectSpread(reviews_objectSpread({}, state), {}, {
        isPosted: action.payload
      });

    default:
      return state;
  }
});
// CONCATENATED MODULE: ./redux/reducers/firstSetting.js
function firstSetting_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function firstSetting_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { firstSetting_ownKeys(Object(source), true).forEach(function (key) { firstSetting_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { firstSetting_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function firstSetting_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const firstSetting_initialState = {
  entryMsg: true
};
/* harmony default export */ var firstSetting = ((state = firstSetting_initialState, action) => {
  const {
    type,
    payload
  } = action;

  switch (type) {
    case actions_type["F" /* SET_ENTRY_MSG */]:
      return firstSetting_objectSpread(firstSetting_objectSpread({}, state), {}, {
        entryMsg: payload
      });

    default:
      return state;
  }
});
// CONCATENATED MODULE: ./redux/reducers/drawers.js
function drawers_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function drawers_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { drawers_ownKeys(Object(source), true).forEach(function (key) { drawers_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { drawers_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function drawers_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const drawers_initialState = {
  isCartOpen: false,
  isRegOpen: false,
  hasLogin: false,
  toDisplay: "login"
};
/* harmony default export */ var drawers = ((state = drawers_initialState, action) => {
  const {
    type,
    payload
  } = action;

  switch (type) {
    case actions_type["gb" /* TOGGLE_CART_BAR */]:
      return drawers_objectSpread(drawers_objectSpread({}, state), {}, {
        isCartOpen: !state.isCartOpen
      });

    case actions_type["db" /* SHOW_CART_BAR */]:
      return drawers_objectSpread(drawers_objectSpread({}, state), {}, {
        isCartOpen: true
      });

    case actions_type["l" /* HIDE_CART_BAR */]:
      return drawers_objectSpread(drawers_objectSpread({}, state), {}, {
        isCartOpen: false
      });

    case actions_type["hb" /* TOGGLE_REGISTRATION_BAR */]:
      return drawers_objectSpread(drawers_objectSpread({}, state), {}, {
        isRegOpen: !state.isRegOpen
      });

    case actions_type["eb" /* SHOW_REGISTRATION_BAR */]:
      return drawers_objectSpread(drawers_objectSpread({}, state), {}, {
        isRegOpen: true
      });

    case actions_type["m" /* HIDE_REGISTRATION_BAR */]:
      return drawers_objectSpread(drawers_objectSpread({}, state), {}, {
        isRegOpen: false
      });

    case actions_type["j" /* HAS_LOGIN */]:
      return drawers_objectSpread(drawers_objectSpread({}, state), {}, {
        hasLogin: payload
      });

    case actions_type["ib" /* TO_DISPLAY */]:
      return drawers_objectSpread(drawers_objectSpread({}, state), {}, {
        toDisplay: payload
      });

    default:
      return state;
  }
});
// CONCATENATED MODULE: ./redux/reducers/subMenus.js
function subMenus_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function subMenus_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { subMenus_ownKeys(Object(source), true).forEach(function (key) { subMenus_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { subMenus_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function subMenus_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const subMenus_initialState = {
  isVisible: false,
  contentType: "products",
  products: [],
  links: [],
  activeMenu: "" // isPosUp: window.scrollY > 45 ? false : true

};
/* harmony default export */ var subMenus = ((state = subMenus_initialState, action) => {
  const {
    type,
    payload
  } = action;

  switch (type) {
    case actions_type["fb" /* SHOW_SUB_MENU */]:
      return subMenus_objectSpread(subMenus_objectSpread({}, state), {}, {
        isVisible: payload
      });

    case actions_type["Y" /* SET_SUB_MENU_PRODUCTS */]:
      return subMenus_objectSpread(subMenus_objectSpread({}, state), {}, {
        products: payload,
        contentType: "products"
      });

    case actions_type["s" /* SET_ACTIVE_SUB_MENU */]:
      return subMenus_objectSpread(subMenus_objectSpread({}, state), {}, {
        activeMenu: payload
      });

    case actions_type["L" /* SET_LEARN_SUB_MENU */]:
      return subMenus_objectSpread(subMenus_objectSpread({}, state), {}, {
        links: payload,
        contentType: "links"
      });

    case actions_type["Q" /* SET_POS_UP */]:
      return subMenus_objectSpread(subMenus_objectSpread({}, state), {}, {
        isPosUp: payload
      });

    default:
      return state;
  }
});
// CONCATENATED MODULE: ./redux/reducers/errors.js

const errors_initialState = {};
/* harmony default export */ var errors = ((state = errors_initialState, action) => {
  const {
    payload,
    type
  } = action;

  switch (type) {
    case actions_type["c" /* CLEAR_ERRORS */]:
      return errors_initialState;

    case actions_type["G" /* SET_ERRORS */]:
      return payload;

    default:
      return state;
  }
});
// CONCATENATED MODULE: ./redux/reducers/extras.js
function extras_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function extras_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { extras_ownKeys(Object(source), true).forEach(function (key) { extras_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { extras_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function extras_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const extras_initialState = {
  isCheckoutPage: false,
  isRedirectToCheckout: false
};
/* harmony default export */ var extras = ((state = extras_initialState, action) => {
  const {
    payload,
    type
  } = action;

  switch (type) {
    case actions_type["A" /* SET_CHECKOUT_PAGE */]:
      return extras_objectSpread(extras_objectSpread({}, state), {}, {
        isCheckoutPage: payload
      });

    case actions_type["T" /* SET_REDIRECT_CHECKOUT */]:
      return extras_objectSpread(extras_objectSpread({}, state), {}, {
        isRedirectToCheckout: payload
      });

    default:
      return state;
  }
});
// CONCATENATED MODULE: ./redux/reducers/loading.js
function loading_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function loading_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { loading_ownKeys(Object(source), true).forEach(function (key) { loading_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { loading_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function loading_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const loading_initialState = {
  isLoading: false
};
/* harmony default export */ var loading = ((state = loading_initialState, action) => {
  const {
    payload,
    type
  } = action;

  switch (type) {
    case actions_type["n" /* LOADING */]:
      return loading_objectSpread(loading_objectSpread({}, state), {}, {
        isLoading: payload
      });

    default:
      return state;
  }
});
// CONCATENATED MODULE: ./redux/reducers/appointment.js
function appointment_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function appointment_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { appointment_ownKeys(Object(source), true).forEach(function (key) { appointment_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { appointment_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function appointment_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const appointment_initialState = {
  currentAppointment: null
};
/* harmony default export */ var appointment = ((state = appointment_initialState, action) => {
  switch (action.type) {
    case actions_type["E" /* SET_CURRENT_APPOINTMENT */]:
      return appointment_objectSpread(appointment_objectSpread({}, state), {}, {
        currentAppointment: action.payload
      });

    case actions_type["kb" /* UNSET_CURRENT_APPOINTMENT */]:
      return appointment_objectSpread(appointment_objectSpread({}, state), {}, {
        currentAppointment: null
      });

    default:
      return state;
  }
});
// CONCATENATED MODULE: ./redux/reducers/blog.js
function blog_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function blog_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { blog_ownKeys(Object(source), true).forEach(function (key) { blog_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { blog_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function blog_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initiaState = {
  article: [],
  currentTag: "All",
  current: {},
  pageNo: 0
};

const add = (state, action) => {
  if (state.currentTag !== action.tag) {
    return blog_objectSpread(blog_objectSpread({}, state), {}, {
      article: action.payload,
      pageNo: action.pageNo,
      currentTag: action.tag,
      current: {}
    });
  } else {
    let curValue = state.article;
    let value = curValue.concat(action.payload);
    return blog_objectSpread(blog_objectSpread({}, state), {}, {
      article: value,
      pageNo: action.pageNo
    });
  }
};

const setCurrent = (state, action) => {
  console.log("blog state", state);
  return blog_objectSpread(blog_objectSpread({}, state), {}, {
    current: state.article[action.index]
  });
};

const clearCurrent = (state, action) => {
  console.log("clear reducr");
  return state;
};

const blog_reducer = (state = initiaState, action) => {
  switch (action.type) {
    case actions_type["g" /* GET_ALL */]:
      return add(state, action);

    case actions_type["h" /* GET_ARTICLE */]:
      return setCurrent(state, action);

    case "CLEAR":
      return clearCurrent(state, action);

    default:
      return state;
  }
};

/* harmony default export */ var blog = (blog_reducer);
// CONCATENATED MODULE: ./redux/reducers/auth.js
function auth_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function auth_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { auth_ownKeys(Object(source), true).forEach(function (key) { auth_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { auth_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function auth_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const auth_initialState = {
  user: null,
  token: null
};
/* harmony default export */ var auth = ((state = auth_initialState, action) => {
  const {
    payload,
    type
  } = action;

  switch (type) {
    case 'SET_AUTH':
      return auth_objectSpread(auth_objectSpread({}, state), payload);

    case 'Clear_AUTH':
      return auth_objectSpread(auth_objectSpread({}, state), {}, {
        user: null,
        token: null
      });

    case 'SET_USER':
      return auth_objectSpread(auth_objectSpread({}, state), {}, {
        user: payload
      });

    case 'CLEAR_USER':
      return auth_objectSpread(auth_objectSpread({}, state), {}, {
        user: null
      });

    case 'SET_TOKEN':
      return auth_objectSpread(auth_objectSpread({}, state), {}, {
        token: payload
      });

    case 'CLEAR_TOKEN':
      return auth_objectSpread(auth_objectSpread({}, state), {}, {
        token: null
      });

    default:
      return state;
  }
});
// CONCATENATED MODULE: ./redux/reducers/index.js





















/* harmony default export */ var reducers = ({
  auth: auth,
  blog: blog,
  cart: reducers_cart,
  user: user,
  location: reducers_location,
  ambassadoruser: ambassadoruser,
  wishList: wishList,
  products: products,
  checkout: checkout,
  wishListLogin: wishListLogin,
  referrer: referrer,
  address: address,
  cards: cards,
  reviews: reviews,
  firstSetting: firstSetting,
  drawers: drawers,
  subMenus: subMenus,
  errors: errors,
  extras: extras,
  appointment: appointment,
  loading: loading
});
// EXTERNAL MODULE: external "redux-state-sync"
var external_redux_state_sync_ = __webpack_require__("xJS/");

// CONCATENATED MODULE: ./redux/store.js
function store_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function store_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { store_ownKeys(Object(source), true).forEach(function (key) { store_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { store_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function store_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








const SET_CLIENT_STATE = 'SET_CLIENT_STATE';
const middlewares = [external_redux_thunk_default.a, Object(external_redux_state_sync_["createStateSyncMiddleware"])({
  // blacklist: ["extras", "products"]
  whitelist: ['cart', 'user', 'wishList', 'checkout', 'firstSetting', 'ambassadoruser']
})];
const persistConfig = {
  key: 'root',
  storage: storage_default.a,
  whitelist: ['cart', 'user', 'firstSetting', 'ambassadoruser']
};
const sessionRedConfig = {
  key: 'referrer',
  storage: session_default.a
};

const {
  referrer: store_referrer
} = reducers,
      otherReducer = _objectWithoutProperties(reducers, ["referrer"]);

const allReducers = Object(external_redux_["combineReducers"])(store_objectSpread(store_objectSpread({}, otherReducer), {}, {
  referrer: Object(external_redux_persist_["persistReducer"])(sessionRedConfig, store_referrer)
}));
const persistedReducer = Object(external_redux_persist_["persistReducer"])(persistConfig, allReducers);

const makeConfiguredStore = (reducer, initialState) => Object(external_redux_["createStore"])(reducer, initialState, Object(external_redux_["applyMiddleware"])(...middlewares));

const makeStore = (initialState, {
  isServer,
  req,
  debug,
  storeKey
}) => {
  if (isServer) {
    initialState = initialState || {
      fromServer: 'foo'
    };
    return makeConfiguredStore(allReducers, initialState);
  } else {
    // we need it only on client side
    const store = makeConfiguredStore(persistedReducer, initialState);
    store.__persistor = Object(external_redux_persist_["persistStore"])(store); // Nasty hack

    return store;
  }
};
const setClientState = clientState => ({
  type: SET_CLIENT_STATE,
  payload: clientState
}); // export default (preloadedState = undefined) => {
//   let store = createStore(
//     persistedReducer,
//     // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
//     preloadedState,
//     composeWithDevTools(applyMiddleware(...middlewares))
//   );
//   let persistor = persistStore(store);
//   // return { store, persistor };
//   return store
// };

/***/ }),

/***/ "ZSx1":
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),

/***/ "Zbq5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return setLoading; });
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("TzE8");

const setLoading = payload => ({
  type: _type__WEBPACK_IMPORTED_MODULE_0__[/* LOADING */ "n"],
  payload
});

/***/ }),

/***/ "ZpXP":
/***/ (function(module, exports) {

module.exports = require("react-phone-input-2");

/***/ }),

/***/ "b7Qq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getProducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getCategories; });
/* unused harmony export getSubCategories */
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("TzE8");
/* harmony import */ var _services_helpers_product__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("OWVN");
/* harmony import */ var _services_apis_products__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("elJ3");
/* harmony import */ var _services_apis_admin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("tWEw");




const getProducts = () => dispatch => {
  Object(_services_apis_products__WEBPACK_IMPORTED_MODULE_2__[/* getAllProducts */ "e"])().then(res => {
    if (res.data && res.data.success) {
      dispatch({
        type: _type__WEBPACK_IMPORTED_MODULE_0__[/* SET_PRODUCTS */ "S"],
        payload: res.data.data
      });
    }
  }).catch(err => {
    console.log({
      err
    });
  });
};
const getProduct = _id => dispatch => {
  Object(_services_apis_products__WEBPACK_IMPORTED_MODULE_2__[/* getProductById */ "g"])(_id).then(res => {
    if (res.data && res.data.success) {
      console.log('hellllo', res.data.data);
      dispatch({
        type: 'SET_PRODUCT',
        payload: res.data.data
      });
    }
  }).catch(err => {
    console.log({
      err
    });
  });
};
const getCategory = _id => dispatch => {
  Object(_services_apis_products__WEBPACK_IMPORTED_MODULE_2__[/* getCategoryById */ "f"])(_id).then(res => {
    if (res.data && res.data.success) {
      console.log('SET_CATEGORY', res.data.data);
      dispatch({
        type: 'SET_CATEGORY',
        payload: res.data.data
      });
    }
  }).catch(err => {
    console.log({
      err
    });
  });
};
const getCategories = () => dispatch => {
  Object(_services_apis_products__WEBPACK_IMPORTED_MODULE_2__[/* getAllCategories */ "c"])().then(res => {
    if (res.data && res.data.success) {
      dispatch({
        type: _type__WEBPACK_IMPORTED_MODULE_0__[/* SET_CATEGORIES */ "z"],
        payload: res.data.data
      });
    }
  }).catch(err => {
    console.log({
      err
    });
  });
};
const getSubCategories = () => dispatch => {
  Object(_services_apis_admin__WEBPACK_IMPORTED_MODULE_3__[/* getAllSubcategories */ "i"])().then(res => {
    if (res.data && res.data.success) {
      dispatch({
        type: 'SET_SUBCATEGORIES',
        payload: res.data.data
      });
    }
  }).catch(err => {
    console.log({
      err
    });
  });
};

/***/ }),

/***/ "baVd":
/***/ (function(module, exports) {

module.exports = require("cleave.js/react");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("7KCV");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _router = __webpack_require__("elyg");

var _router2 = __webpack_require__("nOHt");

let cachedObserver;
const listeners = new Map();
const IntersectionObserver = false ? undefined : null;
const prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (cachedObserver) {
    return cachedObserver;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return cachedObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        cachedObserver.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (false) {}
  }); // Join on an invalid URI character

  prefetched[href + '%' + as] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow
  }).then(success => {
    if (!success) return;

    if (scroll) {
      window.scrollTo(0, 0);
      document.body.focus();
    }
  });
}

function Link(props) {
  if (false) {}

  const p = props.prefetch !== false;

  const [childElm, setChildElm] = _react.default.useState();

  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);

  _react.default.useEffect(() => {
    if (p && IntersectionObserver && childElm && childElm.tagName && (0, _router.isLocalURL)(href)) {
      // Join on an invalid URI character
      const isPrefetched = prefetched[href + '%' + as];

      if (!isPrefetched) {
        return listenToIntersections(childElm, () => {
          prefetch(router, href, as);
        });
      }
    }
  }, [p, childElm, href, as, router]);

  let {
    children,
    replace,
    shallow,
    scroll
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childProps = {
    ref: el => {
      if (el) setChildElm(el);

      if (child && typeof child === 'object' && child.ref) {
        if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
          child.ref.current = el;
        }
      }
    },
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll);
      }
    }
  };

  if (p) {
    childProps.onMouseEnter = e => {
      if (!(0, _router.isLocalURL)(href)) return;

      if (child.props && typeof child.props.onMouseEnter === 'function') {
        child.props.onMouseEnter(e);
      }

      prefetch(router, href, as, {
        priority: true
      });
    };
  } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    childProps.href = (0, _router.addBasePath)((0, _router.addLocale)(as, router && router.locale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "dZ6Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "dohY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export setCurrentAppointment */
/* unused harmony export unsetCurrentAppointment */
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("TzE8");

const setCurrentAppointment = appointment => ({
  type: _type__WEBPACK_IMPORTED_MODULE_0__[/* SET_CURRENT_APPOINTMENT */ "E"],
  payload: appointment
});
const unsetCurrentAppointment = () => ({
  type: _type__WEBPACK_IMPORTED_MODULE_0__[/* UNSET_CURRENT_APPOINTMENT */ "kb"]
});

/***/ }),

/***/ "dqA4":
/***/ (function(module, exports) {

// import { GET_REVIEWS, CLEAR_REVIEWS, REVIEW_POSTED } from "./type";
// import {
//   postReviewApi,
//   getProductReviews
//   // getAllProductApi, getAllComboApi
// } from "../services/api";
// // import { setProducts } from "./products";
// export const postReview = (review, countryCode) => dispatch => {
//   postReviewApi(review)
//     .then(res => res.json())
//     .then(res => {
//       if (res.status) {
//         dispatch({
//           type: REVIEW_POSTED,
//           payload: true
//         });
//         // getAllProductApi().then(res => res.json())
//         //   .then(resJson => {
//         //     if (resJson.products) {
//         //       setProducts({
//         //         products: resJson.products,
//         //         countryCode
//         //       });
//         //       getAllComboApi().then(res => res.json())
//         //         .then(resJson1 => {
//         //           if (resJson1.combos) {
//         //             const products = [...resJson.products, ...resJson1.combos];
//         //             setProducts({
//         //               products,
//         //               countryCode
//         //             });
//         //           }
//         //         })
//         //     }else{
//         //       getAllComboApi().then(res => res.json())
//         //         .then(resJson => {
//         //           if (resJson.combos) {
//         //             const products = [...resJson.combos];
//         //             setProducts({
//         //               products,
//         //               countryCode
//         //             });
//         //           }
//         //         })
//         //     }
//         //   })
//         //   .catch(err => {
//         //     getAllComboApi().then(res => res.json())
//         //       .then(resJson => {
//         //         if (resJson.combos) {
//         //           const products = [...resJson.combos];
//         //           setProducts({
//         //             products,
//         //             countryCode
//         //           });
//         //         }
//         //       })
//         //     console.log({
//         //       err
//         //     })
//         //   })
//       }
//     });
// };
// export const clearReviewPosted = () => ({
//   type: REVIEW_POSTED,
//   payload: false
// });
// export const getReviews = productId => dispatch => {
//   // console.log("adf");
//   getProductReviews(productId)
//     .then(res => res.json())
//     .then(res => {
//       console.log({
//         res
//       });
//       if (res.status && res.reviews) {
//         dispatch({
//           type: GET_REVIEWS,
//           payload: res.reviews
//         });
//       }
//     })
//     .catch(err => console.log({ err }));
// };
// export const clearReviews = () => ({
//   type: CLEAR_REVIEWS,
//   payload: []
// });

/***/ }),

/***/ "elJ3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getProductById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return getCategoryById; });
/* unused harmony export getProductByName */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getAllProducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getAllCategories; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getAllCombos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addToWishList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return deleteWishList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return getWishList; });
/* unused harmony export getReviews */
/* unused harmony export addReviews */
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apiList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Wol/");


const getProductById = id => axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(_apiList__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].getProductById + id);
const getCategoryById = id => axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(_apiList__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].getCategoryById + id);
const getProductByName = name => axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(_apiList__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].getProductByName + name);
const getAllProducts = () => axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(_apiList__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].getAllProducts);
const getAllCategories = () => axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(_apiList__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].getAllCategories);
const getAllCombos = () => axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(_apiList__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].getAllCombos);
const addToWishList = (userid, productid, productmeta, productSlug) => axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(_apiList__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].addToWishList, {
  userid,
  productid,
  productmeta,
  productSlug
});
const deleteWishList = body => axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(_apiList__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].deleteWishList, body);
const getWishList = userid => axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(_apiList__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].getWishList, {
  userid
});
const getReviews = id => axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(_apiList__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].getReviews + id);
const addReviews = body => axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(_apiList__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].addReviews, body);

/***/ }),

/***/ "elyg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.markLoadingError = markLoadingError;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__("X24+");

var _denormalizePagePath = __webpack_require__("wkBG");

var _mitt = _interopRequireDefault(__webpack_require__("dZ6Y"));

var _utils = __webpack_require__("g/15");

var _isDynamic = __webpack_require__("/jkW");

var _parseRelativeUrl = __webpack_require__("hS4m");

var _querystring = __webpack_require__("3WeD");

var _resolveRewrites = _interopRequireDefault(__webpack_require__("S3md"));

var _routeMatcher = __webpack_require__("gguc");

var _routeRegex = __webpack_require__("YTqd");

var _escapePathDelimiters = _interopRequireDefault(__webpack_require__("fcRV"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${path}` : path;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function hasBasePath(path) {
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  return path.slice(basePath.length) || '/';
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  if (url.startsWith('/')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map(_escapePathDelimiters.default).join('/') : (0, _escapePathDelimiters.default)(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href);

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

const PAGE_LOAD_ERROR = Symbol('PAGE_LOAD_ERROR');

function markLoadingError(err) {
  return Object.defineProperty(err, PAGE_LOAD_ERROR, {});
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  return {
    url: addBasePath(resolveHref(router.pathname, url)),
    as: as ? addBasePath(resolveHref(router.pathname, as)) : as
  };
}

const manualScrollRestoration =  false && false;

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      markLoadingError(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    initialStyleSheets,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      const {
        url,
        as,
        options
      } = state;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow
      }));
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        styleSheets: initialStyleSheets,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute);
    }

    as = addLocale(as, this.locale, this.defaultLocale);
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route]);
      Router.events.emit('hashChangeComplete', as);
      return true;
    } // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to


    const pages = await this.pageLoader.getPageList();
    const {
      __rewrites: rewrites
    } = await this.pageLoader.promisedBuildManifest;
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed;
    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1


    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url

    if (!this.urlIsNew(cleanedAs)) {
      method = 'replaceState';
    }

    let route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    const {
      shallow = false
    } = options; // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly

    let resolvedAs = as;

    if (false) {}

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (false) {}

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://err.sh/vercel/next.js/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as);

    try {
      const routeInfo = await this.getRouteInfo(route, pathname, query, as, shallow);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props && props.pageProps && props.pageProps.__N_REDIRECT) {
        const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
        // client-navigation if it is falling back to hard navigation if
        // it's not

        if (destination.startsWith('/')) {
          const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);

          this._resolveHref(parsedHref, pages);

          if (pages.includes(parsedHref.pathname)) {
            return this.change('replaceState', destination, destination, options);
          }
        }

        window.location.href = destination;
        return new Promise(() => {});
      }

      Router.events.emit('beforeHistoryChange', as);
      this.changeState(method, url, addLocale(as, this.locale, this.defaultLocale), options);

      if (false) {}

      await this.set(route, pathname, query, cleanedAs, routeInfo).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (false) {}

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if (PAGE_LOAD_ERROR in err || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      const {
        page: Component,
        styleSheets
      } = await this.fetchComponent('/_error');
      const routeInfo = {
        Component,
        styleSheets,
        err,
        error: err
      };

      try {
        routeInfo.props = await this.getInitialProps(Component, {
          err,
          pathname,
          query
        });
      } catch (gipErr) {
        console.error('Error in error page `getInitialProps`: ', gipErr);
        routeInfo.props = {};
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, shallow = false) {
    try {
      const cachedRouteInfo = this.components[route];

      if (shallow && cachedRouteInfo && this.route === route) {
        return cachedRouteInfo;
      }

      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (false) {}

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), delBasePath(as), __N_SSG, this.locale, this.defaultLocale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as);
    }
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }

  _resolveHref(parsedHref, pages, applyBasePath = true) {
    const {
      pathname
    } = parsedHref;
    const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(applyBasePath ? delBasePath(pathname) : pathname));

    if (cleanPathname === '/404' || cleanPathname === '/_error') {
      return parsedHref;
    } // handle resolving href for dynamic routes


    if (!pages.includes(cleanPathname)) {
      // eslint-disable-next-line array-callback-return
      pages.some(page => {
        if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
          parsedHref.pathname = applyBasePath ? addBasePath(page) : page;
          return true;
        }
      });
    }

    return parsedHref;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;
    const pages = await this.pageLoader.getPageList();
    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // Prefetch is not supported in development mode because it would trigger on-demand-entries


    if (false) {}

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    await Promise.all([this.pageLoader.prefetchData(url, asPath, this.locale, this.defaultLocale), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if ( true && this.sdc[cacheKey]) {
      return Promise.resolve(this.sdc[cacheKey]);
    }

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    return fetchNextData(dataHref, this.isSsr);
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    return this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "fcRV":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = escapePathDelimiters; // escape delimiters used by path-to-regexp

function escapePathDelimiters(segment) {
  return segment.replace(/[/#?]/g, char => encodeURIComponent(char));
}

/***/ }),

/***/ "fdRS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/dynamic"
var dynamic_ = __webpack_require__("/T1H");
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic_);

// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__("Exp3");

// EXTERNAL MODULE: ./redux/actions/index.js
var actions = __webpack_require__("x91w");

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: ./constants/projectSettings.js
var projectSettings = __webpack_require__("xSWb");

// CONCATENATED MODULE: ./services/helpers/address.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

const checkAddressDuplicate = (address, allAddresses) => {
  console.log("In address function");
  console.log(address);
  console.log(allAddresses);
  const checkAdd = allAddresses.some(el => {
    const {
      id,
      isDefault,
      addressType
    } = el,
          rest = _objectWithoutProperties(el, ["id", "isDefault", "addressType"]);

    console.log(_objectSpread({}, rest));
    return Object.keys(_objectSpread({}, rest)).every(elx => {
      return el[elx].toLowerCase().trim() === address[elx].toLowerCase().trim();
    });
  });
  console.log(checkAdd);
  return checkAdd;
};

/* harmony default export */ var helpers_address = (checkAddressDuplicate);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: ./components/modal/index.js + 2 modules
var modal = __webpack_require__("UJvz");

// EXTERNAL MODULE: external "react-icons-kit"
var external_react_icons_kit_ = __webpack_require__("Oi65");
var external_react_icons_kit_default = /*#__PURE__*/__webpack_require__.n(external_react_icons_kit_);

// EXTERNAL MODULE: external "react-icons-kit/md/"
var _ = __webpack_require__("3yuE");

// EXTERNAL MODULE: external "react-lazy-load-image-component"
var external_react_lazy_load_image_component_ = __webpack_require__("g8bt");

// CONCATENATED MODULE: ./pages/checkout.js

var __jsx = external_react_default.a.createElement;

function checkout_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function checkout_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { checkout_ownKeys(Object(source), true).forEach(function (key) { checkout_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { checkout_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function checkout_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function checkout_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = checkout_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function checkout_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



const CheckoutLayout = dynamic_default()(() => __webpack_require__.e(/* import() */ 80).then(__webpack_require__.bind(null, "dd2H")), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("dd2H")],
    modules: ["../components/Layouts/CheckoutLayout"]
  }
});
const Layout = dynamic_default()(() => __webpack_require__.e(/* import() */ 70).then(__webpack_require__.bind(null, "Vw5z")), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("Vw5z")],
    modules: ["../components/Layouts/Layout"]
  }
});
const Heading = dynamic_default()(() => __webpack_require__.e(/* import() */ 0).then(__webpack_require__.bind(null, "h1bS")), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("h1bS")],
    modules: ["../components/Heading"]
  }
});

const CheckoutInfo = dynamic_default()(() => __webpack_require__.e(/* import() */ 76).then(__webpack_require__.bind(null, "yJ8o")), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("yJ8o")],
    modules: ["../components/checkout-tabs/CheckoutInfo"]
  }
});




const CheckoutShipping = dynamic_default()(() => __webpack_require__.e(/* import() */ 77).then(__webpack_require__.bind(null, "VQ4x")), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("VQ4x")],
    modules: ["../components/checkout-tabs/CheckoutShipping"]
  }
});
const CheckoutPayment = dynamic_default()(() => __webpack_require__.e(/* import() */ 83).then(__webpack_require__.bind(null, "SQO+")), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("SQO+")],
    modules: ["../components/checkout-tabs/CheckoutPayment"]
  }
});
const Loader = dynamic_default()(() => __webpack_require__.e(/* import() */ 92).then(__webpack_require__.bind(null, "HQGO")), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("HQGO")],
    modules: ["../components/Loader"]
  }
});







const {
  baseUrl
} = projectSettings["d" /* default */];

const Checkout = (_ref) => {
  let {
    addAddress,
    user,
    isLoading
  } = _ref,
      props = checkout_objectWithoutProperties(_ref, ["addAddress", "user", "isLoading"]);

  const {
    0: activeAddress,
    1: setActiveAddress
  } = Object(external_react_["useState"])(1);
  const {
    0: currentStep,
    1: setCurrentStep
  } = Object(external_react_["useState"])(0);
  const {
    0: infoDetails,
    1: setInfoDetails
  } = Object(external_react_["useState"])({});
  const {
    0: mainAddress,
    1: setMainAddress
  } = Object(external_react_["useState"])(null);
  const {
    0: billingAddress,
    1: setBillingAddress
  } = Object(external_react_["useState"])(null);
  const {
    0: shippingDetail,
    1: setShippingDetail
  } = Object(external_react_["useState"])(null);
  const {
    0: shippingSendData,
    1: setShippingSendData
  } = Object(external_react_["useState"])(null);
  const {
    0: isModal,
    1: setIsModal
  } = Object(external_react_["useState"])(false);
  const {
    0: failedRes,
    1: setFailedRes
  } = Object(external_react_["useState"])(null);
  const {
    0: isSuccess,
    1: setIsSuccess
  } = Object(external_react_["useState"])(null);
  const {
    0: order,
    1: setOrder
  } = Object(external_react_["useState"])(null);
  Object(external_react_["useEffect"])(() => {
    if (currentStep === 2) {
      if (props.isEditable) {
        props.setEditable(false);
      }
    } else {
      if (!props.isEditable) {
        props.setEditable(true);
      }
    }
  });

  const onInfoSubmit = async (e, values, address, addressShip) => {
    console.log("reached here");
    console.log({
      e,
      values
    });
    console.log(address);
    const {
      newAddress,
      sameShipping,
      saveaddress,
      saveaddress_ship,
      newAddress_ship
    } = values;
    let addresses = {},
        addressA = {},
        addressB = {};

    if (!newAddress) {
      if (sameShipping) {
        addressA = addressB = checkout_objectSpread({}, values.addressSelect ? checkout_objectSpread({}, values.addressSelect) : checkout_objectSpread({}, address)); // addressB = { ...values.addressSelect };

        console.log("checkA 1 ", addressA);
      } else {
        if (!newAddress_ship) {
          addressA = checkout_objectSpread({}, values.addressSelect ? checkout_objectSpread({}, values.addressSelect) : checkout_objectSpread({}, address));
          addressB = checkout_objectSpread({}, values.addressSelect_ship ? checkout_objectSpread({}, values.addressSelect_ship) : checkout_objectSpread({}, addressShip));
          console.log("checkA 2", addressA);
        } else {
          const {
            addressSelect,
            addressSelect_ship
          } = values,
                rest = checkout_objectWithoutProperties(values, ["addressSelect", "addressSelect_ship"]);

          addressA = checkout_objectSpread({}, addressSelect);

          const shippingData = checkout_objectSpread({}, rest);

          addressB = {
            addressStr: `${shippingData["city-ship"]}, ${shippingData["state-ship"]}, ${shippingData["country-ship"]}, ${shippingData["zip-ship"]}`.trim(),
            city: `${shippingData["city-ship"]}`,
            country: `${shippingData["country-ship"]}`,
            email: shippingData.email,
            firstname: shippingData["firstname_ship"],
            lastname: shippingData["lastname_ship"],
            phone: shippingData["phone_ship"],
            state: shippingData["state-ship"],
            zip: shippingData["zip-ship"],
            other: `${shippingData["city-ship"]}, ${shippingData["state-ship"]}, ${shippingData["country-ship"]}`.split("," || false)[0]
          };
          console.log("checkA 3", addressA);
        }
      }
    } else {
      if (sameShipping) {
        const {
          email,
          phone
        } = values;
        addressA = addressB = checkout_objectSpread(checkout_objectSpread({}, address), {}, {
          //...values,
          email,
          phone
        });
        console.log("checkA 4", addressA);
      } else {
        if (!newAddress_ship) {
          addressA = checkout_objectSpread(checkout_objectSpread({}, address), {}, {
            phone: values.phone,
            email: values.email
          });
          addressB = checkout_objectSpread({}, values.addressSelect_ship);
        } else {
          addressA = checkout_objectSpread(checkout_objectSpread({}, address), {}, {
            phone: values.phone,
            email: values.email
          });

          const shippingData = checkout_objectSpread({}, values);

          addressB = {
            addressStr: `${shippingData["city-ship"]}, ${shippingData["state-ship"]}, ${shippingData["country-ship"]}, ${shippingData["zip-ship"]}`.trim(),
            city: `${shippingData["city-ship"]}`,
            country: `${shippingData["country-ship"]}`,
            email: shippingData.email,
            firstname: shippingData["firstname_ship"],
            lastname: shippingData["lastname_ship"],
            phone: shippingData["phone_ship"],
            state: shippingData["state-ship"],
            zip: shippingData["zip-ship"],
            other: `${shippingData["city-ship"]}, ${shippingData["state-ship"]}, ${shippingData["country-ship"]}`.split("," || false)[0]
          };
        }
      }
    } // const {
    //   email,
    //   email_ship,
    //   firstname,
    //   firstname_ship,
    //   lastname,
    //   lastname_ship,
    //   phone,
    //   phone_ship,
    //   sameShipping,
    //   saveaddress,
    //   saveaddress_ship,
    //   addressSelect,
    //   addressSelect_ship,
    // } = values;
    // const addressA = {
    //   ...address,
    //   email,
    //   firstname,
    //   lastname,
    //   phone,
    // };
    // const addressB = {
    //   ...addressShip,
    //   email: email_ship,
    //   firstname: firstname_ship,
    //   lastname: lastname_ship,
    //   phone: phone_ship,
    // };


    const allAddresses = props.address.address || [];
    const idTime = new Date().getTime();
    console.log({
      user
    });
    const userId = user._id;

    const newAddressA = checkout_objectSpread(checkout_objectSpread({}, addressA), {}, {
      id: idTime
    });

    const newAddressB = checkout_objectSpread(checkout_objectSpread({}, addressB), {}, {
      id: idTime + 10
    });

    console.log(newAddressA);
    console.log(allAddresses);
    const isDuplicateA = await helpers_address(newAddressA, allAddresses);
    const isDuplicateB = await helpers_address(newAddressB, allAddresses);

    if (saveaddress && saveaddress_ship) {
      if (allAddresses.length < 1 || !isDuplicateA && !isDuplicateB) {
        addAddress(userId, [newAddressA, newAddressB], props.address, allAddresses);
      } else if (!isDuplicateA) {
        addAddress(userId, newAddressA, props.address, allAddresses);
      } else if (!isDuplicateB) {
        addAddress(userId, newAddressA, props.address, allAddresses);
      }
    } else if (saveaddress) {
      if (!isDuplicateA || allAddresses.length < 1) {
        addAddress(userId, newAddressA, props.address, allAddresses);
      }
    } else if (saveaddress_ship) {
      if (!isDuplicateB || allAddresses.length < 1) {
        addAddress(userId, newAddressB, props.address, allAddresses);
      }
    } // const mainAddressRaw = addressSelect
    //   ? {
    //       ...addressSelect,
    //       // phone,
    //       email,
    //     }
    //   : {
    //       ...address,
    //       email,
    //       phone,
    //     };


    setInfoDetails(checkout_objectSpread({}, values));
    console.log("reached here");
    console.log("A", addressA);
    console.log("B", addressB);
    setMainAddress(addressA);
    setBillingAddress( //   addressSelect_ship || addressSelect || addressShip || address
    addressB);
    setCurrentStep(1);
  };

  const onShippingSubmit = (e, values, shippingSendData) => {
    setShippingDetail(values);
    setCurrentStep(2);
    console.log({
      shippingSendData
    });
    setShippingSendData(shippingSendData);
  };

  const onPaymentSubmit = order => {
    if (order) {
      setOrder(order);
      setIsSuccess(true);
    }
  };

  const onPaymentFail = res => {
    console.log({
      res
    });

    switch (res.config.url) {
      case baseUrl + "/ship/confirm/":
        setFailedRes("shipment failed");
        break;

      case baseUrl + "/authorize/create/subscription/":
      case baseUrl + "/authorize/create/subscription/profile/":
      case baseUrl + "/authorize/create/subscription/bank/":
        setFailedRes("subscription failed");
        break;

      case baseUrl + "/authorize/chargeprofile/":
      case baseUrl + "/authorize/charge/":
      case baseUrl + "/authorize/charge/bank/":
        setFailedRes("Transaction failed");
        break;

      default:
        setFailedRes("something went wrong");
    }

    setIsModal(true);
  };

  console.log({
    isLoading
  });
  let checkoutClass = "";
  let loaderClass = "c-hidden";

  if (isLoading) {
    checkoutClass = "c-hidden";
    loaderClass = "";
  }

  console.log({
    loaderClass
  });

  if (!props.isPersist) {
    return __jsx("div", null, __jsx(Loader, null));
  } else if (props.cartItems && props.cartItems.length == 0 && !isSuccess) {
    return __jsx(Layout, {
      headerTheme: "black"
    }, __jsx("div", {
      className: "o-success"
    }, __jsx("div", {
      className: "o-success__main o-success__main--center"
    }, __jsx(Heading, {
      versions: ["large", "upper"],
      parentClass: "c-privacy"
    }, "0 Items"), __jsx("div", {
      className: "mt-3"
    }), __jsx(Heading, {
      versions: ["small"],
      parentClass: "c-privacy "
    }, "Your bag is empty.")), __jsx("div", {
      className: "o-success__btn-wrap w-30 m-auto "
    }, __jsx("div", {
      className: "row",
      style: {
        justifyContent: "center"
      }
    }, __jsx(link_default.a, {
      href: "/shop"
    }, __jsx("a", {
      className: "c-btn c-btn--dark"
    }, "Continue shopping"))))), __jsx("br", null));
  }

  if (isSuccess) {
    return __jsx(Layout, {
      headerTheme: "black"
    }, __jsx("div", {
      className: "o-success"
    }, __jsx("div", {
      className: "o-success__banner"
    }, __jsx("h1", {
      className: "o-success__banner--text"
    }, "thank you for your order")), __jsx("div", {
      className: "o-success__main o-success__main--center"
    }, __jsx("br", null), __jsx("h1", {
      className: "o-success__main--orderno"
    }, "Order Number: ", order && order._id.slice(-8)), __jsx("br", null), __jsx("p", {
      className: "o-success__descp mt-3"
    }, "The order information will be sent via e-mail to", " ", order && order.userDetails && order.userDetails.email, " ")), __jsx("div", {
      className: "o-success__btn-wrap w-30 m-auto "
    }, __jsx("div", {
      className: "row",
      style: {
        justifyContent: "center"
      }
    }, __jsx(link_default.a, {
      href: "/shop"
    }, __jsx("a", {
      className: "c-btn c-btn--dark"
    }, "Continue Shopping"))))), __jsx("br", null));
  }

  return __jsx("div", {
    className: "loaderClass"
  }, isLoading && __jsx(Loader, null), __jsx("div", {
    className: checkoutClass
  }, __jsx(CheckoutLayout, null, __jsx("div", {
    className: "c-checkout"
  }, __jsx(Heading, {
    parentClass: "d-none d-md-block c-checkout ",
    versions: ["default", "upper"]
  }, "Checkout"), __jsx("div", {
    className: "c-checkout__nav-wrapper"
  }, __jsx(external_antd_["Steps"], {
    current: currentStep
  }, __jsx(external_antd_["Steps"].Step, {
    onClick: () => {
      currentStep > 0 && setCurrentStep(0);
    },
    title: "Information"
  }), __jsx(external_antd_["Steps"].Step, {
    onClick: () => {
      currentStep > 1 && setCurrentStep(1);
    },
    title: "Shipping"
  }), __jsx(external_antd_["Steps"].Step, {
    onClick: () => {
      currentStep > 2 && setCurrentStep(2);
    },
    title: "Payment"
  }))), __jsx("div", {
    className: "c-checkout__main-wrapper"
  }, currentStep === 0 && __jsx(CheckoutInfo, {
    oldValues: infoDetails,
    onSubmit: onInfoSubmit
  }), currentStep == 1 && __jsx(CheckoutShipping, {
    oldValues: shippingDetail,
    email: infoDetails.email,
    address: mainAddress,
    onSubmit: onShippingSubmit
  }), currentStep === 2 && __jsx(CheckoutPayment, {
    oldValues: null,
    email: infoDetails.email,
    onFailed: onPaymentFail,
    shippingDetail: shippingDetail,
    address: mainAddress,
    billingAddress: billingAddress,
    shippingSendData: shippingSendData,
    onSubmit: onPaymentSubmit
  }))), __jsx(modal["a" /* FullModal */], {
    isOpen: isModal,
    toggle: () => setIsModal(!isModal)
  }, __jsx("div", {
    className: "c-submit-r__product-selector"
  }, __jsx("div", {
    className: "modal__logo-wrapper"
  }, __jsx("a", {
    className: "c-logo  modal-footer__logo",
    href: "/"
  }, __jsx(external_react_lazy_load_image_component_["LazyLoadImage"], {
    src: "/images/logo-new.png",
    className: "modal__logo-img",
    alt: projectSettings["g" /* projectName */]
  })), __jsx("div", {
    className: "modal__heading"
  }, __jsx("h2", {
    className: "modal__heading-text"
  }, "Order Failed :-"))), __jsx("div", {
    className: "modal-dismiss",
    onClick: () => setIsModal(!isModal)
  }, __jsx(external_react_icons_kit_default.a, {
    icon: _["ic_clear"],
    size: "32"
  })), __jsx("div", {
    className: "c-susbmit-r__wrapper justify-content-center"
  }, __jsx(external_react_icons_kit_default.a, {
    icon: _["ic_error_outline"],
    className: "text-center mr-4 clr-red",
    size: "64"
  }), __jsx("h3", null, failedRes)))))));
};

const mapStateToProps = state => ({
  address: state.address,
  user: state.user,
  isLoading: state.loading.isLoading,
  isEditable: state.cart.isEditable,
  cartItems: state.cart.items
});

const mapActionToProps = {
  addAddress: actions["addAddress"],
  setEditable: actions["setEditable"]
};
/* harmony default export */ var checkout = __webpack_exports__["default"] = (Object(external_react_redux_["connect"])(mapStateToProps, mapActionToProps)(Checkout));

/***/ }),

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__("6D7l");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (false) { var _App$prototype; } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (false) {}

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (false) {}

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "g8bt":
/***/ (function(module, exports) {

module.exports = require("react-lazy-load-image-component");

/***/ }),

/***/ "gguc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "hS4m":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__("g/15");

var _querystring = __webpack_require__("3WeD");

const DUMMY_BASE = new URL(true ? 'http://n' : undefined);
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/

function parseRelativeUrl(url, base) {
  const resolvedBase = base ? new URL(base, DUMMY_BASE) : DUMMY_BASE;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin,
    protocol
  } = new URL(url, resolvedBase);

  if (origin !== DUMMY_BASE.origin || protocol !== 'http:' && protocol !== 'https:') {
    throw new Error('invariant: invalid relative URL');
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(DUMMY_BASE.origin.length)
  };
}

/***/ }),

/***/ "j6IE":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return setUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return unsetUser; });
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("TzE8");
/* harmony import */ var _services_apis_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("s9Gp");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const setUser = (user, cart = null) => dispatch => {
  // console.log({ user });
  if (user._id) {
    console.log({
      user
    });
    Object(_services_apis_user__WEBPACK_IMPORTED_MODULE_1__[/* getUserDetails */ "d"])(user._id).then(res => {
      console.log({
        res
      });

      if (res.data.status && res.data.user) {
        //   dispatch(getUserMeta(res.data.user._id, cart));
        const payload = _objectSpread(_objectSpread({}, res.data.user.userid), {}, {
          userMetaId: res.data.user._id,
          userMetaObj: res.data.user,
          userObj: res.data.user.userid
        });

        dispatch({
          type: _type__WEBPACK_IMPORTED_MODULE_0__[/* SET_USER */ "ab"],
          payload
        });

        if (cart) {
          setCartApi({
            usermetaid: res.data.user._id,
            cart: cart
          });
        } else if (res.data.user.cart) {// dispatch({
          //   type: SET_CART,
          //   payload: res.data.user.cart
          // });
        }
      }
    });
  } else {
    dispatch({
      type: _type__WEBPACK_IMPORTED_MODULE_0__[/* SET_USER */ "ab"],
      payload: user
    });
  }
}; // export const updateUserMeta = userId => {
//   // console.log("get user id ", { userId });
//   return dispatch => {
//     console.log({
//       dispatch
//     });
//   };
// };
// export const getUserMetaNoCart = user => {
//   // console.log({
//   //   user
//   // });
//   return dispatch => {
//     console.log("user meta start fetching");
//     getSingleUserApi(user)
//       .then(res => res.json())
//       .then(res => {
//         if (res.user && res.user._id) {
//           console.log("user meta found", res);
//           dispatch({
//             type: SET_USER,
//             payload: {
//               ...res.user.userid,
//               userMetaId: res.user._id,
//               userMetaObj: res.user
//             }
//           });
//         }
//       });
//   };
// };
// export const getUserMeta = (user, cart = null) => dispatch => {
//   getSingleUserApi(user)
//     .then(res => res.json())
//     .then(res => {
//       if (res.user && res.user._id) {
//         dispatch({
//           type: SET_USER,
//           payload: {
//             ...res.user.userid,
//             userMetaId: res.user._id,
//             userMetaObj: res.user
//           }
//         });
//       }
//       if (cart && res.user && res.user._id) {
//         setCartApi({
//           usermetaid: res.user._id,
//           cart: cart
//         });
//       } else if (res.user && res.user.cart) {
//         dispatch({
//           type: SET_CART,
//           payload: res.user.cart
//         });
//       }
//     });
// };

const unsetUser = () => ({
  type: _type__WEBPACK_IMPORTED_MODULE_0__[/* UNSET_USER */ "lb"],
  payload: {}
});

/***/ }),

/***/ "jYXs":
/***/ (function(module, exports) {

module.exports = require("fuse.js");

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("7KCV");

var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("Osoz");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "nZwT":
/***/ (function(module, exports) {

module.exports = require("@ant-design/icons");

/***/ }),

/***/ "o6io":
/***/ (function(module, exports) {

module.exports = require("react-phone-number-input");

/***/ }),

/***/ "oAQk":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return getShippingRates; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return confirmShipment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return authorizeCharge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return authorizeChargeProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return authorizeChargeBank; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return authorizeSubscription; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return authorizeSubscriptionProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return authorizeSubscriptionBank; });
/* unused harmony export authorizeSubscriptionCancel */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return authorizeAddCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return authorizeDeleteCard; });
/* unused harmony export placeOrder */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return placeOrderNew; });
/* unused harmony export getTaxValue */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return getCoupon; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apiList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Wol/");


const getShippingRates = body => axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(_apiList__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].getShippingRates, body);
const confirmShipment = body => axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(_apiList__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].confirmShipment, body);
const authorizeCharge = body => axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(_apiList__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].authorizeCharge, body);
const authorizeChargeProfile = body => axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(_apiList__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].authorizeChargeProfile, body);
const authorizeChargeBank = body => axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(_apiList__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].authorizeChargeBank, body);
const authorizeSubscription = body => axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(_apiList__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].authorizeSubscription, body);
const authorizeSubscriptionProfile = body => axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(_apiList__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].authorizeSubscriptionProfile, body);
const authorizeSubscriptionBank = body => axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(_apiList__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].authorizeSubscriptionBank, body);
const authorizeSubscriptionCancel = body => axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(_apiList__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].authorizeSubscriptionCancel, body);
const authorizeAddCard = body => body.profileid ? axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(_apiList__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].authorizeAddCard, body) : axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(_apiList__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].authorizeSaveCard, body);
const authorizeDeleteCard = body => axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(_apiList__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].authorizeDeleteCard, body);
const placeOrder = body => axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(_apiList__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].placeOrder, body);
const placeOrderNew = body => axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(_apiList__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].placeOrderNew, body);
const getTaxValue = countryCode => axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(_apiList__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].getTaxValue + countryCode);
const getCoupon = coupon => axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(_apiList__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].getCoupon + `?coupon=${coupon}`);

/***/ }),

/***/ "oL/c":
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ }),

/***/ "rCd7":
/***/ (function(module, exports) {

// import {
//   SHOW_SUB_MENU,
//   SET_SUB_MENU_PRODUCTS,
//   SET_ACTIVE_SUB_MENU,
//   SET_POS_UP,
//   SET_LEARN_SUB_MENU
// } from "./type";
// export const subMenuVisible = (payload = true) => ({
//   type: SHOW_SUB_MENU,
//   payload
// });
// export const setSubMenuProducts = (payload = []) => ({
//   type: SET_SUB_MENU_PRODUCTS,
//   payload
// });
// export const setActiveMenu = (activeMenuName = "") => ({
//   type: SET_ACTIVE_SUB_MENU,
//   payload: activeMenuName
// });
// export const setPosUp = (payload = true) => ({
//   type: SET_POS_UP,
//   payload
// });
// export const setLearnSubMenu = (payload = []) => ({
//   type: SET_LEARN_SUB_MENU,
//   payload
// });

/***/ }),

/***/ "rCsO":
/***/ (function(module, exports) {

module.exports = require("react-google-login");

/***/ }),

/***/ "rKB8":
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "s9Gp":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return registerUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return loginUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getUserDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return updateUserDetails; });
/* unused harmony export updateUserPassword */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getOrders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return forgotPassword; });
/* unused harmony export setForgotPassword */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addSubscriber; });
/* unused harmony export getSubscribers */
/* harmony import */ var _apiList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Wol/");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const registerUser = body => axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(_apiList__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].userRegistration, _objectSpread(_objectSpread({}, body), {}, {
  email: body.email.toLowerCase(),
  role: "customer"
}));
const loginUser = body => axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(_apiList__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].userLogin, _objectSpread(_objectSpread({}, body), {}, {
  email: body.email.toLowerCase()
}));
const getUserDetails = userId => axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(_apiList__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].getUserDetails + userId);
const updateUserDetails = body => axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(_apiList__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].updateUserDetails, _objectSpread({}, body));
const updateUserPassword = body => axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(_apiList__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].updateUserPassword, _objectSpread({}, body));
const getOrders = userId => axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(_apiList__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].orderList + userId);
const forgotPassword = body => axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(_apiList__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].forgotPassword, _objectSpread(_objectSpread({}, body), {}, {
  firststep: "aa"
}));
const setForgotPassword = body => axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(_apiList__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].forgotPassword, _objectSpread({}, body));
const addSubscriber = email => axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(_apiList__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].addSubscriber, {
  email
});
const getSubscribers = () => axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(_apiList__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].getSubscribers);

/***/ }),

/***/ "sLJp":
/***/ (function(module, exports) {

module.exports = require("@fortawesome/fontawesome-svg-core");

/***/ }),

/***/ "tWEw":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "g", function() { return /* binding */ getAllCategories; });
__webpack_require__.d(__webpack_exports__, "h", function() { return /* binding */ getAllProducts; });
__webpack_require__.d(__webpack_exports__, "i", function() { return /* binding */ getAllSubcategories; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ createCategory; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ createProduct; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* binding */ createSubcategory; });
__webpack_require__.d(__webpack_exports__, "d", function() { return /* binding */ deleteCategory; });
__webpack_require__.d(__webpack_exports__, "e", function() { return /* binding */ deleteProduct; });
__webpack_require__.d(__webpack_exports__, "f", function() { return /* binding */ deleteSubcategory; });

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__("zr5I");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: ./services/apis/apiList.js
var apiList = __webpack_require__("Wol/");

// EXTERNAL MODULE: ./redux/store.js + 22 modules
var store = __webpack_require__("ZSSH");

// EXTERNAL MODULE: ./constants/projectSettings.js
var projectSettings = __webpack_require__("xSWb");

// CONCATENATED MODULE: ./utilis/useHttp.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const useHttp = async ({
  method = 'get',
  url,
  data,
  options
}) => {
  try {
    const auth = JSON.parse(localStorage.getItem('auth'));
    const {
      user,
      token
    } = auth;
    let headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    };

    if (user) {
      headers = _objectSpread(_objectSpread({}, headers), {}, {
        Authorization: `Bearer ${token}`
      });
    }

    if (options && options.headers) {
      headers = _objectSpread(_objectSpread({}, headers), options.headers);
    }

    const res = await external_axios_default()({
      method,
      url,
      baseURL: projectSettings["a" /* baseUrl */],
      data,
      headers: headers
    }).then(response => {
      return response;
    }).catch(err => {
      console.log(err);
      return err;
    });
    return res;
  } catch (err) {
    console.log(err);
    return err;
  }
};
// CONCATENATED MODULE: ./services/apis/admin.js


 // const auth = JSON.parse(localStorage.getItem('auth'));
// const { user } = auth;
// const { _id } = user;

const _id = '601bef27d29ac85814619ba3';
const getAllCategories = () => useHttp({
  method: 'get',
  url: `/category/all`
});
const getAllProducts = () => useHttp({
  method: 'get',
  url: `/product/all`
});
const getAllSubcategories = () => useHttp({
  method: 'get',
  url: `/subcategory/all`
}); //create

const createCategory = data => useHttp({
  method: 'post',
  url: `/category/create/${_id}`,
  data
});
const createProduct = data => useHttp({
  method: 'post',
  url: `/product/create/${_id}`,
  data,
  options: {
    headers: {
      'Content-Type': 'multipart/form-data; boundary=something'
    }
  }
});
const createSubcategory = data => useHttp({
  method: 'post',
  url: `/subcategory/create/${_id}`,
  data
});
const deleteCategory = pid => useHttp({
  method: 'DELETE',
  url: `/category/${pid}/${_id}`
});
const deleteProduct = pid => useHttp({
  method: 'delete',
  url: `/product/${pid}/${_id}`
});
const deleteSubcategory = pid => useHttp({
  method: 'delete',
  url: `/subcategory/${pid}/${_id}`
});

/***/ }),

/***/ "utGq":
/***/ (function(module, exports) {

module.exports = require("box-dimension-calculator");

/***/ }),

/***/ "utmA":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return homeData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return shopData; });
/* unused harmony export categoryData */
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants_projectSettings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("xSWb");


const homeData = () => {
  //console.log("called");
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${_constants_projectSettings__WEBPACK_IMPORTED_MODULE_1__[/* contentUrl */ "c"]}/Home/get`).then(response => {
    // console.log(response);
    //console.log("i got this", response);
    return response.data.data;
  }).catch(err => {
    console.log("this is err", err);
  });
};
const shopData = () => {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${_constants_projectSettings__WEBPACK_IMPORTED_MODULE_1__[/* contentUrl */ "c"]}/Shop/get`).then(response => {
    // console.log("i got this", response);
    return response.data.data;
  }).catch(err => {
    console.log("this is err", err);
  });
};
const categoryData = () => {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${_constants_projectSettings__WEBPACK_IMPORTED_MODULE_1__[/* contentUrl */ "c"]}/Category/get`).then(response => {
    // console.log("i got this", response);
    return response.data.data;
  }).catch(err => {
    console.log("this is err", err);
  });
};

/***/ }),

/***/ "we8J":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export setAddress */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getAddress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addAddress; });
/* unused harmony export deleteAddress */
/* unused harmony export setDefaultAddress */
/* unused harmony export editAddress */
/* harmony import */ var _services_apis_user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("s9Gp");
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("TzE8");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const setAddress = payload => ({
  type: _type__WEBPACK_IMPORTED_MODULE_1__[/* SET_ADDRESS */ "t"],
  payload
});
const getAddress = id => async dispatch => {
  Object(_services_apis_user__WEBPACK_IMPORTED_MODULE_0__[/* getUserDetails */ "d"])(id).then(res => {
    console.log(res);

    if (res.data.user) {
      if (res.data.user.shippingdetails) {
        dispatch(setAddress(res.data.user.shippingdetails));
      } else {
        dispatch(setAddress({}));
      }
    } else {
      dispatch(setAddress({}));
    }
  }).catch(console.log);
};

const returnAddress = res => {
  if (res.user) {
    if (res.user.shippingdetails) {
      return res.user.shippingdetails;
    }
  }

  return {};
};

const addAddress = (userid, address, oldDetail = {}, oldAddress = []) => dispatch => {
  if (address.constructor === Array) {
    const addressArr = address.filter(el => el);
    const addresses1 = [...oldAddress, ...addressArr].map(elx => elx);
    const hasDefault = addresses1.find(el => el.isDefault === true);
    const addresses2 = addresses1.map((el, index) => {
      if (index === 0 && !hasDefault) {
        return _objectSpread(_objectSpread({}, el), {}, {
          isDefault: true
        });
      }

      return el;
    });
    Object(_services_apis_user__WEBPACK_IMPORTED_MODULE_0__[/* updateUserDetails */ "g"])({
      userid,
      shippingdetails: _objectSpread(_objectSpread({}, oldDetail), {}, {
        address: addresses2
      })
    }).then(res => {
      console.log({
        res
      });
      const address = returnAddress(res.data);
      dispatch(setAddress(address));
    }).catch(err => {
      console.log({
        err
      });
    });
  } else {
    const addresses1 = [...oldAddress, address].map(elx => {
      return elx;
    });
    const hasDefault = addresses1.find(el => el.isDefault === true);
    const addresses2 = addresses1.map((el, index) => {
      if (index === 0 && !hasDefault) {
        return _objectSpread(_objectSpread({}, el), {}, {
          isDefault: true
        });
      }

      return el;
    });
    Object(_services_apis_user__WEBPACK_IMPORTED_MODULE_0__[/* updateUserDetails */ "g"])({
      userid,
      shippingdetails: _objectSpread(_objectSpread({}, oldDetail), {}, {
        address: addresses2
      })
    }).then(res => {
      console.log({
        res
      });
      const address = returnAddress(res.data);
      dispatch(setAddress(address));
    }).catch(err => {
      console.log({
        err
      });
    });
  }
};
const deleteAddress = (userid, id, oldDetail = {}, oldAddress = []) => dispatch => {
  const newAddress1 = oldAddress.filter(el => el.id !== id);
  const defaultAddress = newAddress1.find(el => el.isDefault === true);
  const newAddress = newAddress1.map((el, index) => {
    if (index === 0 && !defaultAddress) {
      return _objectSpread(_objectSpread({}, el), {}, {
        isDefault: true
      });
    }

    return el;
  });
  Object(_services_apis_user__WEBPACK_IMPORTED_MODULE_0__[/* updateUserDetails */ "g"])({
    userid,
    shippingdetails: _objectSpread(_objectSpread({}, oldDetail), {}, {
      address: newAddress
    })
  }).then(res => {
    console.log({
      res
    });
    const address = returnAddress(res.data);
    dispatch(setAddress(address));
  }).catch(err => {
    console.log({
      err
    });
  });
};
const setDefaultAddress = (userid, id, oldDetail = {}, oldAddress = []) => dispatch => {
  const newAddress = oldAddress.map(el => {
    return _objectSpread(_objectSpread({}, el), {}, {
      isDefault: el.id === id
    });
  });
  Object(_services_apis_user__WEBPACK_IMPORTED_MODULE_0__[/* updateUserDetails */ "g"])({
    userid,
    shippingdetails: _objectSpread(_objectSpread({}, oldDetail), {}, {
      address: newAddress
    })
  }).then(res => {
    console.log({
      res
    });
    const address = returnAddress(res.data);
    dispatch(setAddress(address));
  }).catch(err => {
    console.log({
      err
    });
  });
};
const editAddress = (userid, address, oldDetail = {}, oldAddress = []) => dispatch => {
  const newAddress = oldAddress.map(el => {
    if (el.id === address.id) return address;
    return el;
  });
  Object(_services_apis_user__WEBPACK_IMPORTED_MODULE_0__[/* updateUserDetails */ "g"])({
    userid,
    shippingdetails: _objectSpread(_objectSpread({}, oldDetail), {}, {
      address: newAddress
    })
  }).then(res => {
    console.log({
      res
    });
    const address = returnAddress(res.data);
    dispatch(setAddress(address));
  }).catch(err => {
    console.log({
      err
    });
  });
};

/***/ }),

/***/ "wkBG":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "wy2R":
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "x91w":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _cart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("UrdJ");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addToCart", function() { return _cart__WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "modifyItem", function() { return _cart__WEBPACK_IMPORTED_MODULE_0__["c"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeCoupon", function() { return _cart__WEBPACK_IMPORTED_MODULE_0__["d"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeFromCart", function() { return _cart__WEBPACK_IMPORTED_MODULE_0__["e"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCoupon", function() { return _cart__WEBPACK_IMPORTED_MODULE_0__["f"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setEditable", function() { return _cart__WEBPACK_IMPORTED_MODULE_0__["g"]; });

/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("j6IE");
/* harmony import */ var _location__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("2Cd/");
/* harmony import */ var _location__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_location__WEBPACK_IMPORTED_MODULE_2__);
/* harmony reexport (checked) */ if(__webpack_require__.o(_location__WEBPACK_IMPORTED_MODULE_2__, "addAddress")) __webpack_require__.d(__webpack_exports__, "addAddress", function() { return _location__WEBPACK_IMPORTED_MODULE_2__["addAddress"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_location__WEBPACK_IMPORTED_MODULE_2__, "getCategories")) __webpack_require__.d(__webpack_exports__, "getCategories", function() { return _location__WEBPACK_IMPORTED_MODULE_2__["getCategories"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_location__WEBPACK_IMPORTED_MODULE_2__, "getCategory")) __webpack_require__.d(__webpack_exports__, "getCategory", function() { return _location__WEBPACK_IMPORTED_MODULE_2__["getCategory"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_location__WEBPACK_IMPORTED_MODULE_2__, "getProduct")) __webpack_require__.d(__webpack_exports__, "getProduct", function() { return _location__WEBPACK_IMPORTED_MODULE_2__["getProduct"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_location__WEBPACK_IMPORTED_MODULE_2__, "getProducts")) __webpack_require__.d(__webpack_exports__, "getProducts", function() { return _location__WEBPACK_IMPORTED_MODULE_2__["getProducts"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_location__WEBPACK_IMPORTED_MODULE_2__, "hideCartBar")) __webpack_require__.d(__webpack_exports__, "hideCartBar", function() { return _location__WEBPACK_IMPORTED_MODULE_2__["hideCartBar"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_location__WEBPACK_IMPORTED_MODULE_2__, "homeData")) __webpack_require__.d(__webpack_exports__, "homeData", function() { return _location__WEBPACK_IMPORTED_MODULE_2__["homeData"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_location__WEBPACK_IMPORTED_MODULE_2__, "setEntryMsg")) __webpack_require__.d(__webpack_exports__, "setEntryMsg", function() { return _location__WEBPACK_IMPORTED_MODULE_2__["setEntryMsg"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_location__WEBPACK_IMPORTED_MODULE_2__, "setLoading")) __webpack_require__.d(__webpack_exports__, "setLoading", function() { return _location__WEBPACK_IMPORTED_MODULE_2__["setLoading"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_location__WEBPACK_IMPORTED_MODULE_2__, "setReferrer")) __webpack_require__.d(__webpack_exports__, "setReferrer", function() { return _location__WEBPACK_IMPORTED_MODULE_2__["setReferrer"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_location__WEBPACK_IMPORTED_MODULE_2__, "setWishList")) __webpack_require__.d(__webpack_exports__, "setWishList", function() { return _location__WEBPACK_IMPORTED_MODULE_2__["setWishList"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_location__WEBPACK_IMPORTED_MODULE_2__, "shopData")) __webpack_require__.d(__webpack_exports__, "shopData", function() { return _location__WEBPACK_IMPORTED_MODULE_2__["shopData"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_location__WEBPACK_IMPORTED_MODULE_2__, "toggleCartBar")) __webpack_require__.d(__webpack_exports__, "toggleCartBar", function() { return _location__WEBPACK_IMPORTED_MODULE_2__["toggleCartBar"]; });

/* harmony import */ var _ambassadoruser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("1HKE");
/* harmony import */ var _wishList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("FoYN");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setWishList", function() { return _wishList__WEBPACK_IMPORTED_MODULE_4__["a"]; });

/* harmony import */ var _wishListLogin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("M688");
/* harmony import */ var _products__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("b7Qq");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getCategories", function() { return _products__WEBPACK_IMPORTED_MODULE_6__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getCategory", function() { return _products__WEBPACK_IMPORTED_MODULE_6__["b"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getProduct", function() { return _products__WEBPACK_IMPORTED_MODULE_6__["c"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getProducts", function() { return _products__WEBPACK_IMPORTED_MODULE_6__["d"]; });

/* harmony import */ var _checkout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("7b2K");
/* harmony import */ var _checkout__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_checkout__WEBPACK_IMPORTED_MODULE_7__);
/* harmony reexport (checked) */ if(__webpack_require__.o(_checkout__WEBPACK_IMPORTED_MODULE_7__, "addAddress")) __webpack_require__.d(__webpack_exports__, "addAddress", function() { return _checkout__WEBPACK_IMPORTED_MODULE_7__["addAddress"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_checkout__WEBPACK_IMPORTED_MODULE_7__, "hideCartBar")) __webpack_require__.d(__webpack_exports__, "hideCartBar", function() { return _checkout__WEBPACK_IMPORTED_MODULE_7__["hideCartBar"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_checkout__WEBPACK_IMPORTED_MODULE_7__, "homeData")) __webpack_require__.d(__webpack_exports__, "homeData", function() { return _checkout__WEBPACK_IMPORTED_MODULE_7__["homeData"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_checkout__WEBPACK_IMPORTED_MODULE_7__, "setEntryMsg")) __webpack_require__.d(__webpack_exports__, "setEntryMsg", function() { return _checkout__WEBPACK_IMPORTED_MODULE_7__["setEntryMsg"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_checkout__WEBPACK_IMPORTED_MODULE_7__, "setLoading")) __webpack_require__.d(__webpack_exports__, "setLoading", function() { return _checkout__WEBPACK_IMPORTED_MODULE_7__["setLoading"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_checkout__WEBPACK_IMPORTED_MODULE_7__, "setReferrer")) __webpack_require__.d(__webpack_exports__, "setReferrer", function() { return _checkout__WEBPACK_IMPORTED_MODULE_7__["setReferrer"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_checkout__WEBPACK_IMPORTED_MODULE_7__, "shopData")) __webpack_require__.d(__webpack_exports__, "shopData", function() { return _checkout__WEBPACK_IMPORTED_MODULE_7__["shopData"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_checkout__WEBPACK_IMPORTED_MODULE_7__, "toggleCartBar")) __webpack_require__.d(__webpack_exports__, "toggleCartBar", function() { return _checkout__WEBPACK_IMPORTED_MODULE_7__["toggleCartBar"]; });

/* harmony import */ var _referrer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("DmIR");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setReferrer", function() { return _referrer__WEBPACK_IMPORTED_MODULE_8__["a"]; });

/* harmony import */ var _address__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("we8J");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addAddress", function() { return _address__WEBPACK_IMPORTED_MODULE_9__["a"]; });

/* harmony import */ var _cards__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("Ynsj");
/* harmony import */ var _reviews__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("dqA4");
/* harmony import */ var _reviews__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_reviews__WEBPACK_IMPORTED_MODULE_11__);
/* harmony reexport (checked) */ if(__webpack_require__.o(_reviews__WEBPACK_IMPORTED_MODULE_11__, "hideCartBar")) __webpack_require__.d(__webpack_exports__, "hideCartBar", function() { return _reviews__WEBPACK_IMPORTED_MODULE_11__["hideCartBar"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_reviews__WEBPACK_IMPORTED_MODULE_11__, "homeData")) __webpack_require__.d(__webpack_exports__, "homeData", function() { return _reviews__WEBPACK_IMPORTED_MODULE_11__["homeData"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_reviews__WEBPACK_IMPORTED_MODULE_11__, "setEntryMsg")) __webpack_require__.d(__webpack_exports__, "setEntryMsg", function() { return _reviews__WEBPACK_IMPORTED_MODULE_11__["setEntryMsg"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_reviews__WEBPACK_IMPORTED_MODULE_11__, "setLoading")) __webpack_require__.d(__webpack_exports__, "setLoading", function() { return _reviews__WEBPACK_IMPORTED_MODULE_11__["setLoading"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_reviews__WEBPACK_IMPORTED_MODULE_11__, "shopData")) __webpack_require__.d(__webpack_exports__, "shopData", function() { return _reviews__WEBPACK_IMPORTED_MODULE_11__["shopData"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_reviews__WEBPACK_IMPORTED_MODULE_11__, "toggleCartBar")) __webpack_require__.d(__webpack_exports__, "toggleCartBar", function() { return _reviews__WEBPACK_IMPORTED_MODULE_11__["toggleCartBar"]; });

/* harmony import */ var _firstSetting__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("1HP9");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setEntryMsg", function() { return _firstSetting__WEBPACK_IMPORTED_MODULE_12__["a"]; });

/* harmony import */ var _drawers__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("JLUA");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hideCartBar", function() { return _drawers__WEBPACK_IMPORTED_MODULE_13__["b"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toggleCartBar", function() { return _drawers__WEBPACK_IMPORTED_MODULE_13__["e"]; });

/* harmony import */ var _subMenus__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("rCd7");
/* harmony import */ var _subMenus__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_subMenus__WEBPACK_IMPORTED_MODULE_14__);
/* harmony reexport (checked) */ if(__webpack_require__.o(_subMenus__WEBPACK_IMPORTED_MODULE_14__, "homeData")) __webpack_require__.d(__webpack_exports__, "homeData", function() { return _subMenus__WEBPACK_IMPORTED_MODULE_14__["homeData"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_subMenus__WEBPACK_IMPORTED_MODULE_14__, "setLoading")) __webpack_require__.d(__webpack_exports__, "setLoading", function() { return _subMenus__WEBPACK_IMPORTED_MODULE_14__["setLoading"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_subMenus__WEBPACK_IMPORTED_MODULE_14__, "shopData")) __webpack_require__.d(__webpack_exports__, "shopData", function() { return _subMenus__WEBPACK_IMPORTED_MODULE_14__["shopData"]; });

/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("Nh04");
/* harmony import */ var _extras__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("0Aw8");
/* harmony import */ var _extras__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_extras__WEBPACK_IMPORTED_MODULE_16__);
/* harmony reexport (checked) */ if(__webpack_require__.o(_extras__WEBPACK_IMPORTED_MODULE_16__, "homeData")) __webpack_require__.d(__webpack_exports__, "homeData", function() { return _extras__WEBPACK_IMPORTED_MODULE_16__["homeData"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_extras__WEBPACK_IMPORTED_MODULE_16__, "setLoading")) __webpack_require__.d(__webpack_exports__, "setLoading", function() { return _extras__WEBPACK_IMPORTED_MODULE_16__["setLoading"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_extras__WEBPACK_IMPORTED_MODULE_16__, "shopData")) __webpack_require__.d(__webpack_exports__, "shopData", function() { return _extras__WEBPACK_IMPORTED_MODULE_16__["shopData"]; });

/* harmony import */ var _loading__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("Zbq5");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setLoading", function() { return _loading__WEBPACK_IMPORTED_MODULE_17__["a"]; });

/* harmony import */ var _appointment__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("dohY");
/* harmony import */ var _content__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("utmA");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "homeData", function() { return _content__WEBPACK_IMPORTED_MODULE_19__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "shopData", function() { return _content__WEBPACK_IMPORTED_MODULE_19__["b"]; });






















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

/***/ "xvZQ":
/***/ (function(module, exports) {

module.exports = require("react-fade-in");

/***/ }),

/***/ "yH4c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ encodeUrlFn; });
__webpack_require__.d(__webpack_exports__, "d", function() { return /* binding */ numberFormat; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ getParentage; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* binding */ getSingleElementByMultipleObject; });

// UNUSED EXPORTS: getCountryName, getCountryCode

// CONCATENATED MODULE: ./constants/allCountry.js
const AllCountryObj = [{
  name: "Afghanistan",
  code: "AF",
  region: "Asia"
}, {
  name: "Ã…land Islands",
  code: "AX",
  region: "Europe"
}, {
  name: "Albania",
  code: "AL",
  region: "Europe"
}, {
  name: "Algeria",
  code: "DZ"
}, {
  name: "American Samoa",
  code: "AS"
}, {
  name: "Andorra",
  code: "AD"
}, {
  name: "Angola",
  code: "AO"
}, {
  name: "Anguilla",
  code: "AI"
}, {
  name: "Antarctica",
  code: "AQ"
}, {
  name: "Antigua and Barbuda",
  code: "AG"
}, {
  name: "Argentina",
  code: "AR"
}, {
  name: "Armenia",
  code: "AM",
  region: "Asia"
}, {
  name: "Aruba",
  code: "AW"
}, {
  name: "Australia",
  code: "AU"
}, {
  name: "Austria",
  code: "AT"
}, {
  name: "Azerbaijan",
  code: "AZ",
  region: "Asia"
}, {
  name: "Bahamas",
  code: "BS"
}, {
  name: "Bahrain",
  code: "BH",
  region: "Asia"
}, {
  name: "Bangladesh",
  code: "BD",
  region: "Asia"
}, {
  name: "Barbados",
  code: "BB"
}, {
  name: "Belarus",
  code: "BY"
}, {
  name: "Belgium",
  code: "BE"
}, {
  name: "Belize",
  code: "BZ"
}, {
  name: "Benin",
  code: "BJ"
}, {
  name: "Bermuda",
  code: "BM"
}, {
  name: "Bhutan",
  code: "BT",
  region: "Asia"
}, {
  name: "Bolivia, Plurinational State of",
  code: "BO"
}, {
  name: "Bonaire, Sint Eustatius and Saba",
  code: "BQ"
}, {
  name: "Bosnia and Herzegovina",
  code: "BA"
}, {
  name: "Botswana",
  code: "BW"
}, {
  name: "Bouvet Island",
  code: "BV"
}, {
  name: "Brazil",
  code: "BR"
}, {
  name: "British Indian Ocean Territory",
  code: "IO"
}, {
  name: "Brunei Darussalam",
  code: "BN",
  region: "Asia"
}, {
  name: "Bulgaria",
  code: "BG"
}, {
  name: "Burkina Faso",
  code: "BF"
}, {
  name: "Burundi",
  code: "BI"
}, {
  name: "Cambodia",
  code: "KH",
  region: "Asia"
}, {
  name: "Cameroon",
  code: "CM"
}, {
  name: "Canada",
  code: "CA"
}, {
  name: "Cape Verde",
  code: "CV"
}, {
  name: "Cayman Islands",
  code: "KY"
}, {
  name: "Central African Republic",
  code: "CF"
}, {
  name: "Chad",
  code: "TD"
}, {
  name: "Chile",
  code: "CL"
}, {
  name: "China",
  code: "CN",
  region: "Asia"
}, {
  name: "Christmas Island",
  code: "CX"
}, {
  name: "Cocos (Keeling) Islands",
  code: "CC"
}, {
  name: "Colombia",
  code: "CO"
}, {
  name: "Comoros",
  code: "KM"
}, {
  name: "Congo",
  code: "CG"
}, {
  name: "Congo, the Democratic Republic of the",
  code: "CD"
}, {
  name: "Cook Islands",
  code: "CK"
}, {
  name: "Costa Rica",
  code: "CR"
}, {
  name: "CÃ´te d'Ivoire",
  code: "CI"
}, {
  name: "Croatia",
  code: "HR"
}, {
  name: "Cuba",
  code: "CU"
}, {
  name: "CuraÃ§ao",
  code: "CW"
}, {
  name: "Cyprus",
  code: "CY",
  region: "Asia"
}, {
  name: "Czech Republic",
  code: "CZ"
}, {
  name: "Denmark",
  code: "DK"
}, {
  name: "Djibouti",
  code: "DJ"
}, {
  name: "Dominica",
  code: "DM"
}, {
  name: "Dominican Republic",
  code: "DO"
}, {
  name: "Ecuador",
  code: "EC"
}, {
  name: "Egypt",
  code: "EG"
}, {
  name: "El Salvador",
  code: "SV"
}, {
  name: "Equatorial Guinea",
  code: "GQ"
}, {
  name: "Eritrea",
  code: "ER"
}, {
  name: "Estonia",
  code: "EE"
}, {
  name: "Ethiopia",
  code: "ET"
}, {
  name: "Falkland Islands (Malvinas)",
  code: "FK"
}, {
  name: "Faroe Islands",
  code: "FO"
}, {
  name: "Fiji",
  code: "FJ"
}, {
  name: "Finland",
  code: "FI"
}, {
  name: "France",
  code: "FR"
}, {
  name: "French Guiana",
  code: "GF"
}, {
  name: "French Polynesia",
  code: "PF"
}, {
  name: "French Southern Territories",
  code: "TF"
}, {
  name: "Gabon",
  code: "GA"
}, {
  name: "Gambia",
  code: "GM"
}, {
  name: "Georgia",
  code: "GE",
  region: "Asia"
}, {
  name: "Germany",
  code: "DE"
}, {
  name: "Ghana",
  code: "GH"
}, {
  name: "Gibraltar",
  code: "GI"
}, {
  name: "Greece",
  code: "GR"
}, {
  name: "Greenland",
  code: "GL"
}, {
  name: "Grenada",
  code: "GD"
}, {
  name: "Guadeloupe",
  code: "GP"
}, {
  name: "Guam",
  code: "GU"
}, {
  name: "Guatemala",
  code: "GT"
}, {
  name: "Guernsey",
  code: "GG"
}, {
  name: "Guinea",
  code: "GN"
}, {
  name: "Guinea-Bissau",
  code: "GW"
}, {
  name: "Guyana",
  code: "GY"
}, {
  name: "Haiti",
  code: "HT"
}, {
  name: "Heard Island and McDonald Islands",
  code: "HM"
}, {
  name: "Holy See (Vatican City State)",
  code: "VA"
}, {
  name: "Honduras",
  code: "HN"
}, {
  name: "Hong Kong",
  code: "HK"
}, {
  name: "Hungary",
  code: "HU"
}, {
  name: "Iceland",
  code: "IS"
}, {
  name: "India",
  code: "IN",
  region: "Asia"
}, {
  name: "Indonesia",
  code: "ID",
  region: "Asia"
}, {
  name: "Iran, Islamic Republic of",
  code: "IR",
  region: "Asia"
}, {
  name: "Iraq",
  code: "IQ"
}, {
  name: "Ireland",
  code: "IE"
}, {
  name: "Isle of Man",
  code: "IM"
}, {
  name: "Israel",
  code: "IL"
}, {
  name: "Italy",
  code: "IT"
}, {
  name: "Jamaica",
  code: "JM"
}, {
  name: "Japan",
  code: "JP"
}, {
  name: "Jersey",
  code: "JE"
}, {
  name: "Jordan",
  code: "JO"
}, {
  name: "Kazakhstan",
  code: "KZ"
}, {
  name: "Kenya",
  code: "KE"
}, {
  name: "Kiribati",
  code: "KI"
}, {
  name: "Korea, Democratic People's Republic of",
  code: "KP"
}, {
  name: "Korea, Republic of",
  code: "KR"
}, {
  name: "Kuwait",
  code: "KW"
}, {
  name: "Kyrgyzstan",
  code: "KG"
}, {
  name: "Lao People's Democratic Republic",
  code: "LA"
}, {
  name: "Latvia",
  code: "LV"
}, {
  name: "Lebanon",
  code: "LB"
}, {
  name: "Lesotho",
  code: "LS"
}, {
  name: "Liberia",
  code: "LR"
}, {
  name: "Libya",
  code: "LY"
}, {
  name: "Liechtenstein",
  code: "LI"
}, {
  name: "Lithuania",
  code: "LT"
}, {
  name: "Luxembourg",
  code: "LU"
}, {
  name: "Macao",
  code: "MO"
}, {
  name: "Macedonia, the Former Yugoslav Republic of",
  code: "MK"
}, {
  name: "Madagascar",
  code: "MG"
}, {
  name: "Malawi",
  code: "MW"
}, {
  name: "Malaysia",
  code: "MY"
}, {
  name: "Maldives",
  code: "MV"
}, {
  name: "Mali",
  code: "ML"
}, {
  name: "Malta",
  code: "MT"
}, {
  name: "Marshall Islands",
  code: "MH"
}, {
  name: "Martinique",
  code: "MQ"
}, {
  name: "Mauritania",
  code: "MR"
}, {
  name: "Mauritius",
  code: "MU"
}, {
  name: "Mayotte",
  code: "YT"
}, {
  name: "Mexico",
  code: "MX"
}, {
  name: "Micronesia, Federated States of",
  code: "FM"
}, {
  name: "Moldova, Republic of",
  code: "MD"
}, {
  name: "Monaco",
  code: "MC"
}, {
  name: "Mongolia",
  code: "MN"
}, {
  name: "Montenegro",
  code: "ME"
}, {
  name: "Montserrat",
  code: "MS"
}, {
  name: "Morocco",
  code: "MA"
}, {
  name: "Mozambique",
  code: "MZ"
}, {
  name: "Myanmar",
  code: "MM"
}, {
  name: "Namibia",
  code: "NA"
}, {
  name: "Nauru",
  code: "NR"
}, {
  name: "Nepal",
  code: "NP"
}, {
  name: "Netherlands",
  code: "NL"
}, {
  name: "New Caledonia",
  code: "NC"
}, {
  name: "New Zealand",
  code: "NZ"
}, {
  name: "Nicaragua",
  code: "NI"
}, {
  name: "Niger",
  code: "NE"
}, {
  name: "Nigeria",
  code: "NG"
}, {
  name: "Niue",
  code: "NU"
}, {
  name: "Norfolk Island",
  code: "NF"
}, {
  name: "Northern Mariana Islands",
  code: "MP"
}, {
  name: "Norway",
  code: "NO"
}, {
  name: "Oman",
  code: "OM"
}, {
  name: "Pakistan",
  code: "PK"
}, {
  name: "Palau",
  code: "PW"
}, {
  name: "Palestine, State of",
  code: "PS"
}, {
  name: "Panama",
  code: "PA"
}, {
  name: "Papua New Guinea",
  code: "PG"
}, {
  name: "Paraguay",
  code: "PY"
}, {
  name: "Peru",
  code: "PE"
}, {
  name: "Philippines",
  code: "PH"
}, {
  name: "Pitcairn",
  code: "PN"
}, {
  name: "Poland",
  code: "PL"
}, {
  name: "Portugal",
  code: "PT"
}, {
  name: "Puerto Rico",
  code: "PR"
}, {
  name: "Qatar",
  code: "QA"
}, {
  name: "RÃ©union",
  code: "RE"
}, {
  name: "Romania",
  code: "RO"
}, {
  name: "Russian Federation",
  code: "RU"
}, {
  name: "Rwanda",
  code: "RW"
}, {
  name: "Saint BarthÃ©lemy",
  code: "BL"
}, {
  name: "Saint Helena, Ascension and Tristan da Cunha",
  code: "SH"
}, {
  name: "Saint Kitts and Nevis",
  code: "KN"
}, {
  name: "Saint Lucia",
  code: "LC"
}, {
  name: "Saint Martin (French part)",
  code: "MF"
}, {
  name: "Saint Pierre and Miquelon",
  code: "PM"
}, {
  name: "Saint Vincent and the Grenadines",
  code: "VC"
}, {
  name: "Samoa",
  code: "WS"
}, {
  name: "San Marino",
  code: "SM"
}, {
  name: "Sao Tome and Principe",
  code: "ST"
}, {
  name: "Saudi Arabia",
  code: "SA"
}, {
  name: "Senegal",
  code: "SN"
}, {
  name: "Serbia",
  code: "RS"
}, {
  name: "Seychelles",
  code: "SC"
}, {
  name: "Sierra Leone",
  code: "SL"
}, {
  name: "Singapore",
  code: "SG"
}, {
  name: "Sint Maarten (Dutch part)",
  code: "SX"
}, {
  name: "Slovakia",
  code: "SK"
}, {
  name: "Slovenia",
  code: "SI"
}, {
  name: "Solomon Islands",
  code: "SB"
}, {
  name: "Somalia",
  code: "SO"
}, {
  name: "South Africa",
  code: "ZA"
}, {
  name: "South Georgia and the South Sandwich Islands",
  code: "GS"
}, {
  name: "South Sudan",
  code: "SS"
}, {
  name: "Spain",
  code: "ES"
}, {
  name: "Sri Lanka",
  code: "LK"
}, {
  name: "Sudan",
  code: "SD"
}, {
  name: "Suriname",
  code: "SR"
}, {
  name: "Svalbard and Jan Mayen",
  code: "SJ"
}, {
  name: "Swaziland",
  code: "SZ"
}, {
  name: "Sweden",
  code: "SE"
}, {
  name: "Switzerland",
  code: "CH"
}, {
  name: "Syrian Arab Republic",
  code: "SY"
}, {
  name: "Taiwan, Province of China",
  code: "TW"
}, {
  name: "Tajikistan",
  code: "TJ"
}, {
  name: "Tanzania, United Republic of",
  code: "TZ"
}, {
  name: "Thailand",
  code: "TH"
}, {
  name: "Timor-Leste",
  code: "TL",
  region: "Asia"
}, {
  name: "Togo",
  code: "TG"
}, {
  name: "Tokelau",
  code: "TK"
}, {
  name: "Tonga",
  code: "TO"
}, {
  name: "Trinidad and Tobago",
  code: "TT"
}, {
  name: "Tunisia",
  code: "TN"
}, {
  name: "Turkey",
  code: "TR"
}, {
  name: "Turkmenistan",
  code: "TM"
}, {
  name: "Turks and Caicos Islands",
  code: "TC"
}, {
  name: "Tuvalu",
  code: "TV"
}, {
  name: "Uganda",
  code: "UG"
}, {
  name: "Ukraine",
  code: "UA"
}, {
  name: "United Arab Emirates",
  code: "AE"
}, {
  name: "United Kingdom",
  code: "GB"
}, {
  name: "United States",
  code: "US"
}, {
  name: "United States Minor Outlying Islands",
  code: "UM"
}, {
  name: "Uruguay",
  code: "UY"
}, {
  name: "Uzbekistan",
  code: "UZ"
}, {
  name: "Vanuatu",
  code: "VU"
}, {
  name: "Venezuela, Bolivarian Republic of",
  code: "VE"
}, {
  name: "Viet Nam",
  code: "VN"
}, {
  name: "Virgin Islands, British",
  code: "VG"
}, {
  name: "Virgin Islands, U.S.",
  code: "VI"
}, {
  name: "Wallis and Futuna",
  code: "WF"
}, {
  name: "Western Sahara",
  code: "EH"
}, {
  name: "Yemen",
  code: "YE"
}, {
  name: "Zambia",
  code: "ZM"
}, {
  name: "Zimbabwe",
  code: "ZW"
}];
const CountryCodes = ["AF", "AX", "AL", "DZ", "AS", "AD", "AO", "AI", "AQ", "AG", "AR", "AM", "AW", "AU", "AT", "AZ", "BS", "BH", "BD", "BB", "BY", "BE", "BZ", "BJ", "BM", "BT", "BO", "BQ", "BA", "BW", "BV", "BR", "IO", "BN", "BG", "BF", "BI", "KH", "CM", "CA", "CV", "KY", "CF", "TD", "CL", "CN", "CX", "CC", "CO", "KM", "CG", "CD", "CK", "CR", "CI", "HR", "CU", "CW", "CY", "CZ", "DK", "DJ", "DM", "DO", "EC", "EG", "SV", "GQ", "ER", "EE", "ET", "FK", "FO", "FJ", "FI", "FR", "GF", "PF", "TF", "GA", "GM", "GE", "DE", "GH", "GI", "GR", "GL", "GD", "GP", "GU", "GT", "GG", "GN", "GW", "GY", "HT", "HM", "VA", "HN", "HK", "HU", "IS", "IN", "ID", "IR", "IQ", "IE", "IM", "IL", "IT", "JM", "JP", "JE", "JO", "KZ", "KE", "KI", "KP", "KR", "KW", "KG", "LA", "LV", "LB", "LS", "LR", "LY", "LI", "LT", "LU", "MO", "MK", "MG", "MW", "MY", "MV", "ML", "MT", "MH", "MQ", "MR", "MU", "YT", "MX", "FM", "MD", "MC", "MN", "ME", "MS", "MA", "MZ", "MM", "NA", "NR", "NP", "NL", "NC", "NZ", "NI", "NE", "NG", "NU", "NF", "MP", "NO", "OM", "PK", "PW", "PS", "PA", "PG", "PY", "PE", "PH", "PN", "PL", "PT", "PR", "QA", "RE", "RO", "RU", "RW", "BL", "SH", "KN", "LC", "MF", "PM", "VC", "WS", "SM", "ST", "SA", "SN", "RS", "SC", "SL", "SG", "SX", "SK", "SI", "SB", "SO", "ZA", "GS", "SS", "ES", "LK", "SD", "SR", "SJ", "SZ", "SE", "CH", "SY", "TW", "TJ", "TZ", "TH", "TL", "TG", "TK", "TO", "TT", "TN", "TR", "TM", "TC", "TV", "UG", "UA", "AE", "GB", "US", "UM", "UY", "UZ", "VU", "VE", "VN", "VG", "VI", "WF", "EH", "YE", "ZM", "ZW"];
// CONCATENATED MODULE: ./services/helpers/misc.js

const encodeUrlFn = url => url.replace(/-/g, "_").replace(/ /g, "-");
const numberFormat = nbr => {
  if (nbr === 0 && nbr === "") {
    return "0.00";
  } else {
    if (nbr) {
      var nr = parseFloat(nbr).toFixed(2);
      nr = nr.toString();
      var pattern = /(-?\d+)(\d{3})/;

      while (pattern.test(nr)) nr = nr.replace(pattern, "$1,$2");

      return nr;
    } else {
      return 0.0;
    }
  }
};
const getParentage = (parValue, totalValue) => parseFloat(parValue) * parseFloat(totalValue) / 100;
const getSingleElementByMultipleObject = (arrayData, f) => {
  const result = arrayData.reduce(function (r, a) {
    r[a.carrier] = r[a.carrier] || [];
    r[a.carrier].push(a);
    return r;
  }, {});
  return result;
};
const getCountryName = code => {
  let country = AllCountryObj.map(el => {
    if (el.code === code) {
      return el.name;
    }

    return null;
  });
  return country.join("");
};
const getCountryCode = countryName => {
  let country = AllCountryObj.map(el => {
    if (countryName) {
      if (el.name.trim().toLowerCase() === countryName.trim().toLowerCase()) {
        return el.code;
      }
    }

    return null;
  });
  return country.join("");
};

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });