module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		47: 0,
/******/ 		72: 0
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
/******/ 			var chunk = require("../" + ({}[chunkId]||chunkId) + "." + {"0":"1484d4b3a1c58fd8e9d3","1":"9f9e576d8beb99af920b","5":"0ee9383cfef15cb417cb","6":"5d195660e5978d6b756c","7":"6fc77f00c1f4916a55bf","10":"d430725f6a72d209af58","13":"4eeb7562709d11353e66","14":"6ad7600e29b51b43ad8b","16":"09bb3161e8cb550076cb","18":"497eaa6f9de8c2e952cb","20":"cab62ceba200f84c6fda","58":"8d248501ad53fb25530a","66":"e7906676c2159017e236","67":"9c47eda2633b62dba027","68":"f6151c8ee3074693b135","69":"849753c976bc6e985650","81":"b0b05e65253b24eb4957","82":"6fa26618ada0837073e0","86":"f97bb9d82c63d9c61103","88":"1c8b79899ab31f96f7b8","89":"3df4c6031215e3fe82b0","93":"b299f3715d54a64d8127","95":"da6f609584c1ca5ef294","96":"b7940a28108d94d981e2","97":"34e45430bff996d84569","98":"d649c782849fa2716241","104":"4e0311d6f119f9637453"}[chunkId] + ".js");
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
/******/ 	return __webpack_require__(__webpack_require__.s = 23);
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

/***/ 23:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("my7y");


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

/***/ "IrP5":
/***/ (function(module, exports) {

module.exports = require("react-reveal/Fade");

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

/***/ "OvnE":
/***/ (function(module, exports) {

module.exports = require("html-react-parser");

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

/***/ "YLtl":
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "YWgu":
/***/ (function(module, exports) {



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

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

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

/***/ "g8bt":
/***/ (function(module, exports) {

module.exports = require("react-lazy-load-image-component");

/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

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

/***/ "my7y":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("/T1H");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("OvnE");
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(html_react_parser__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("IrP5");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_images_homeSlides_slider1_webp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("yG3U");
/* harmony import */ var _assets_images_homeSlides_slider1_webp__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_images_homeSlides_slider1_webp__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("g8bt");
/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("x91w");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_Product__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("nQYz");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const Banner = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(() => __webpack_require__.e(/* import() */ 10).then(__webpack_require__.bind(null, "7fZ1")), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("7fZ1")],
    modules: ['../../components/Banner']
  }
});

const Heading = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(() => __webpack_require__.e(/* import() */ 0).then(__webpack_require__.bind(null, "h1bS")), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("h1bS")],
    modules: ['../../components/Heading']
  }
});
const Layout = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(() => __webpack_require__.e(/* import() */ 18).then(__webpack_require__.bind(null, "Vw5z")), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("Vw5z")],
    modules: ['../../components/Layouts/Layout']
  }
});




const Products = () => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["useDispatch"])();
  const products = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["useSelector"])(state => state.products);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    dispatch(Object(_redux_actions__WEBPACK_IMPORTED_MODULE_6__["getProducts"])());
  }, []);

  const toTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  };

  return __jsx(Layout, {
    headerVersions: ['bg-dark'],
    headerTheme: "black"
  }, __jsx(Banner, {
    image: _assets_images_homeSlides_slider1_webp__WEBPACK_IMPORTED_MODULE_4___default.a,
    mobileImage: _assets_images_homeSlides_slider1_webp__WEBPACK_IMPORTED_MODULE_4___default.a,
    versions: ['black-heading', 'shop']
  }), __jsx("div", {
    className: "c-shop-page"
  }, __jsx("div", {
    className: "container-fluid"
  }, __jsx("div", {
    className: "c-shop-page__row c-shop-page__row--light-bg row justify-content-center"
  }, __jsx("div", {
    className: "col-xs-12"
  }, __jsx(Heading, {
    versions: ['shop-all']
  }, html_react_parser__WEBPACK_IMPORTED_MODULE_2___default()('DISCOVER THE WHOLE RANGE'))))), __jsx("div", {
    className: "c-shop-page__products-wrapper"
  }, __jsx("div", {
    className: "c-shop-page__row row"
  }, products.products.map((el, i) => __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_3___default.a, null, __jsx("div", {
    key: el._id,
    className: "col-lg-4 col-md-6",
    style: {
      padding: '0 40px'
    }
  }, __jsx(_components_Product__WEBPACK_IMPORTED_MODULE_8__["default"], {
    data: el
  })))))), __jsx("div", {
    className: "consult-doc-banner-wrapper",
    style: {
      padding: '4rem 0'
    }
  }, __jsx("button", {
    className: "top-btn",
    style: {
      fontSize: 'x-large'
    },
    onClick: () => toTop()
  }, "BACK TO TOP", ' ', __jsx(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_5__["LazyLoadImage"], {
    className: "top",
    style: {
      height: '20px',
      marginBottom: '5px'
    },
    src: "/images/arrow-up.png",
    alt: "to-top"
  })))));
}; // Product.getInitialProps = async ({ query }) => {
//     const res = await fetch(apiList.getAllProducts);
//     return {
//       category: query.cid,
//       productList: visibleProducts.map((el) => addSlugToProduct(el)),
//       combos: visibleCombo.map((el) => addSlugToProduct(el)),
//       shopdata: Shopdata.shop,
//     };
//   };


/* harmony default export */ __webpack_exports__["default"] = (Products);

/***/ }),

/***/ "nQYz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Product; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utilis_customFunctions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("rEar");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_styles_app_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("YWgu");
/* harmony import */ var _components_styles_app_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_styles_app_scss__WEBPACK_IMPORTED_MODULE_3__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function Product(props) {
  const {
    data
  } = props;
  const {
    images,
    name,
    colors,
    price,
    shortDesc
  } = data;
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  const {
    0: showImageNo,
    1: setShowImageNo
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const imagesCount = images.length;

  const handleOnMouseEnter = () => {
    imagesCount >= 2 && setShowImageNo(s => s + 1);
  };

  const handleOnMouseLeave = () => {
    imagesCount >= 2 && setShowImageNo(s => s - 1);
  };

  return __jsx("div", {
    className: "c-product-card "
  }, __jsx("div", {
    className: "c-product-card__image-wrapper",
    onClick: () => router.push({
      pathname: `products/${data._id}`,
      state: data
    })
  }, images && images[showImageNo] && __jsx("img", {
    // src={`data:image/png;base64,${images[showImageNo].data}`}
    src: images[showImageNo].data,
    alt: 'product image',
    className: "c-product-card__image",
    onMouseEnter: handleOnMouseEnter,
    onMouseLeave: handleOnMouseLeave
  }), __jsx("div", {
    className: "c-product-card__image-text"
  })), __jsx("div", {
    className: "c-product-card__details"
  }, __jsx("div", {
    className: "c-product-card__details-name",
    onClick: () => router.push({
      pathname: `products/${data._id}`,
      state: data
    })
  }, name), __jsx("div", {
    className: "c-product-card__details-desc"
  }, shortDesc), price && price !== '' && __jsx("div", {
    className: "c-product-card__details-price"
  }, "Rs. ", price), __jsx("div", {
    className: "c-product-card__details-colors"
  }, colors.map((c, i) => __jsx("div", {
    className: "c-product-card__details-color"
  }, __jsx("div", {
    style: {
      backgroundColor: Object(_utilis_customFunctions__WEBPACK_IMPORTED_MODULE_1__[/* getColorCode */ "a"])(c)
    }
  }))))));
}

/***/ }),

/***/ "nZwT":
/***/ (function(module, exports) {

module.exports = require("@ant-design/icons");

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

/***/ "rEar":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getColorCode; });
const colours = {
  aliceblue: '#f0f8ff',
  antiquewhite: '#faebd7',
  aqua: '#00ffff',
  aquamarine: '#7fffd4',
  azure: '#f0ffff',
  beige: '#f5f5dc',
  bisque: '#ffe4c4',
  black: '#000000',
  blanchedalmond: '#ffebcd',
  blue: '#0000ff',
  blueviolet: '#8a2be2',
  brown: '#a52a2a',
  burlywood: '#deb887',
  cadetblue: '#5f9ea0',
  chartreuse: '#7fff00',
  chocolate: '#d2691e',
  coral: '#ff7f50',
  cornflowerblue: '#6495ed',
  cornsilk: '#fff8dc',
  crimson: '#dc143c',
  cyan: '#00ffff',
  darkblue: '#00008b',
  darkcyan: '#008b8b',
  darkgoldenrod: '#b8860b',
  darkgray: '#a9a9a9',
  darkgreen: '#006400',
  darkkhaki: '#bdb76b',
  darkmagenta: '#8b008b',
  darkolivegreen: '#556b2f',
  darkorange: '#ff8c00',
  darkorchid: '#9932cc',
  darkred: '#8b0000',
  darksalmon: '#e9967a',
  darkseagreen: '#8fbc8f',
  darkslateblue: '#483d8b',
  darkslategray: '#2f4f4f',
  darkturquoise: '#00ced1',
  darkviolet: '#9400d3',
  deeppink: '#ff1493',
  deepskyblue: '#00bfff',
  dimgray: '#696969',
  dodgerblue: '#1e90ff',
  firebrick: '#b22222',
  floralwhite: '#fffaf0',
  forestgreen: '#228b22',
  fuchsia: '#ff00ff',
  gainsboro: '#dcdcdc',
  ghostwhite: '#f8f8ff',
  gold: '#ffd700',
  goldenrod: '#daa520',
  gray: '#808080',
  green: '#008000',
  greenyellow: '#adff2f',
  honeydew: '#f0fff0',
  hotpink: '#ff69b4',
  'indianred ': '#cd5c5c',
  indigo: '#4b0082',
  ivory: '#fffff0',
  khaki: '#f0e68c',
  lavender: '#e6e6fa',
  lavenderblush: '#fff0f5',
  lawngreen: '#7cfc00',
  lemonchiffon: '#fffacd',
  lightblue: '#add8e6',
  lightcoral: '#f08080',
  lightcyan: '#e0ffff',
  lightgoldenrodyellow: '#fafad2',
  lightgrey: '#d3d3d3',
  lightgreen: '#90ee90',
  lightpink: '#ffb6c1',
  lightsalmon: '#ffa07a',
  lightseagreen: '#20b2aa',
  lightskyblue: '#87cefa',
  lightslategray: '#778899',
  lightsteelblue: '#b0c4de',
  lightyellow: '#ffffe0',
  lime: '#00ff00',
  limegreen: '#32cd32',
  linen: '#faf0e6',
  magenta: '#ff00ff',
  maroon: '#800000',
  mediumaquamarine: '#66cdaa',
  mediumblue: '#0000cd',
  mediumorchid: '#ba55d3',
  mediumpurple: '#9370d8',
  mediumseagreen: '#3cb371',
  mediumslateblue: '#7b68ee',
  mediumspringgreen: '#00fa9a',
  mediumturquoise: '#48d1cc',
  mediumvioletred: '#c71585',
  midnightblue: '#191970',
  mintcream: '#f5fffa',
  mistyrose: '#ffe4e1',
  moccasin: '#ffe4b5',
  navajowhite: '#ffdead',
  navy: '#000080',
  oldlace: '#fdf5e6',
  olive: '#808000',
  olivedrab: '#6b8e23',
  orange: '#ffa500',
  orangered: '#ff4500',
  orchid: '#da70d6',
  palegoldenrod: '#eee8aa',
  palegreen: '#98fb98',
  paleturquoise: '#afeeee',
  palevioletred: '#d87093',
  papayawhip: '#ffefd5',
  peachpuff: '#ffdab9',
  peru: '#cd853f',
  pink: '#ffc0cb',
  plum: '#dda0dd',
  powderblue: '#b0e0e6',
  purple: '#800080',
  rebeccapurple: '#663399',
  red: '#ff0000',
  rosybrown: '#bc8f8f',
  royalblue: '#4169e1',
  saddlebrown: '#8b4513',
  salmon: '#fa8072',
  sandybrown: '#f4a460',
  seagreen: '#2e8b57',
  seashell: '#fff5ee',
  sienna: '#a0522d',
  silver: '#c0c0c0',
  skyblue: '#87ceeb',
  slateblue: '#6a5acd',
  slategray: '#708090',
  snow: '#fffafa',
  springgreen: '#00ff7f',
  steelblue: '#4682b4',
  tan: '#d2b48c',
  teal: '#008080',
  thistle: '#d8bfd8',
  tomato: '#ff6347',
  turquoise: '#40e0d0',
  violet: '#ee82ee',
  wheat: '#f5deb3',
  white: '#ffffff',
  whitesmoke: '#f5f5f5',
  yellow: '#ffff00',
  yellowgreen: '#9acd32'
};
function getColorCode(colorName) {
  if (typeof colours[colorName.toLowerCase()] != 'undefined') return colours[colorName.toLowerCase()];
  return false;
}

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

/***/ "yG3U":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/slider1-89c70f6970e9f275d7045edbd231a4e2.webp";

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