module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		31: 0
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
/******/ 			var chunk = require("../../" + ({}[chunkId]||chunkId) + "." + {"0":"1484d4b3a1c58fd8e9d3","2":"736573eff89b7ea1e104","3":"67b473aabb397619f378","5":"5df0a4d20c8524583cb2","6":"81a277779fcba4cab416","7":"36d63fde43cb67412583","33":"9ba921f6916541430b7b","34":"f38b7c78f99e8d6d0641","35":"012f03cddb1a655a0804","36":"0e05c12bba6a69aee836","38":"16616393cdf4c12d8c60","41":"a7a2a242bf3d88766356","43":"3b1dbf6faaa6b8f532bd","44":"bab710522b24296d2ee5","45":"e83662c4bdb47c9ba178","46":"96357a0ea6953bc4f705","47":"e7b666758aa115e9130e","48":"610f99f62968c8516eac","49":"057c1be8fb3946f0c960","50":"473ed9b281ae39c7ccb1"}[chunkId] + ".js");
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
/******/ 	return __webpack_require__(__webpack_require__.s = 19);
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

/***/ "/a9y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _head = _interopRequireDefault(__webpack_require__("UlpK"));

const statusCodes = {
  400: 'Bad Request',
  404: 'This page could not be found',
  405: 'Method Not Allowed',
  500: 'Internal Server Error'
};

function _getInitialProps({
  res,
  err
}) {
  const statusCode = res && res.statusCode ? res.statusCode : err ? err.statusCode : 404;
  return {
    statusCode
  };
}
/**
* `Error` component used for handling errors.
*/


class Error extends _react.default.Component {
  render() {
    const {
      statusCode
    } = this.props;
    const title = this.props.title || statusCodes[statusCode] || 'An unexpected error has occurred';
    return /*#__PURE__*/_react.default.createElement("div", {
      style: styles.error
    }, /*#__PURE__*/_react.default.createElement(_head.default, null, /*#__PURE__*/_react.default.createElement("title", null, statusCode, ": ", title)), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("style", {
      dangerouslySetInnerHTML: {
        __html: 'body { margin: 0 }'
      }
    }), statusCode ? /*#__PURE__*/_react.default.createElement("h1", {
      style: styles.h1
    }, statusCode) : null, /*#__PURE__*/_react.default.createElement("div", {
      style: styles.desc
    }, /*#__PURE__*/_react.default.createElement("h2", {
      style: styles.h2
    }, title, "."))));
  }

}

exports.default = Error;
Error.displayName = 'ErrorPage';
Error.getInitialProps = _getInitialProps;
Error.origGetInitialProps = _getInitialProps;
const styles = {
  error: {
    color: '#000',
    background: '#fff',
    fontFamily: '-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif',
    height: '100vh',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  desc: {
    display: 'inline-block',
    textAlign: 'left',
    lineHeight: '49px',
    height: '49px',
    verticalAlign: 'middle'
  },
  h1: {
    display: 'inline-block',
    borderRight: '1px solid rgba(0, 0, 0,.3)',
    margin: 0,
    marginRight: '20px',
    padding: '10px 23px 10px 0',
    fontSize: '24px',
    fontWeight: 500,
    verticalAlign: 'top'
  },
  h2: {
    fontSize: '14px',
    fontWeight: 'normal',
    lineHeight: 'inherit',
    margin: 0,
    padding: 0
  }
};

/***/ }),

/***/ "/iI3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return signInReq; });
/* harmony import */ var _apiList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Wol/");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


const signInReq = obj => axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(_apiList__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].signInApi, obj);

/***/ }),

/***/ "0bYB":
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ 19:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("tdIj");


/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

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

/***/ "C9pf":
/***/ (function(module, exports) {

module.exports = require("react-icons/fi");

/***/ }),

/***/ "CuiX":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useHttp; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants_projectSettings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("xSWb");
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
    console.log('http', data);
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

    const res = await axios__WEBPACK_IMPORTED_MODULE_0___default()({
      method,
      url,
      baseURL: _constants_projectSettings__WEBPACK_IMPORTED_MODULE_1__[/* baseUrl */ "a"],
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

/***/ }),

/***/ "Exp3":
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),

/***/ "FHnF":
/***/ (function(module, exports) {

module.exports = require("react-svg");

/***/ }),

/***/ "J42B":
/***/ (function(module, exports) {

module.exports = require("react-images-viewer");

/***/ }),

/***/ "JLUA":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export toggleCartBar */
/* unused harmony export showCartBar */
/* unused harmony export hideCartBar */
/* unused harmony export toggleRegBar */
/* unused harmony export showRegBar */
/* unused harmony export hideRegBar */
/* unused harmony export hideHasLogin */
/* unused harmony export showHasLogin */
/* unused harmony export drawerToDisplay */
const toggleCartBar = a => dispatch => {
  console.log({
    a
  });
  dispatch({
    type: 'TOGGLE_CART_BAR'
  });
  document.body.classList.toggle('drawer-open');
};
const showCartBar = () => dispatch => {
  dispatch({
    type: 'SHOW_CART_BAR'
  });
  document.body.classList.add('drawer-open');
};
const hideCartBar = () => dispatch => {
  dispatch({
    type: 'HIDE_CART_BAR'
  });
  document.body.classList.remove('drawer-open');
};
const toggleRegBar = () => dispatch => {
  dispatch({
    type: 'TOGGLE_REGISTRATION_BAR'
  });
  document.body.classList.toggle('drawer-open');
};
const showRegBar = () => dispatch => {
  dispatch({
    type: 'SHOW_REGISTRATION_BAR'
  });
  document.body.classList.add('drawer-open');
};
const hideRegBar = () => dispatch => {
  dispatch({
    type: 'HIDE_REGISTRATION_BAR'
  });
  document.body.classList.remove('drawer-open');
};
const hideHasLogin = () => ({
  type: 'HAS_LOGIN',
  payload: false
});
const showHasLogin = () => ({
  type: 'HAS_LOGIN',
  payload: true
});
const drawerToDisplay = payload => ({
  type: 'TO_DISPLAY',
  payload
});

/***/ }),

/***/ "K2gz":
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "OWVN":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "c", function() { return /* binding */ getProductImage; });
__webpack_require__.d(__webpack_exports__, "e", function() { return /* binding */ getProductTitle; });
__webpack_require__.d(__webpack_exports__, "d", function() { return /* binding */ getProductShortDesc; });
__webpack_require__.d(__webpack_exports__, "f", function() { return /* binding */ getVisibleProducts; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ addSlugToProduct; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ getBasicPrice; });

// UNUSED EXPORTS: getProductImageArray, getProductAttributes, getProductDescription, filteredAttr, removeDuplicateObjAr, getAttrListing, getFeaturedProduct, generateProductSlug, getCategoriesProducts, getProductPrice, directAddToCart

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./services/helpers/misc.js + 1 modules
var misc = __webpack_require__("yH4c");

// EXTERNAL MODULE: external "box-dimension-calculator"
var external_box_dimension_calculator_ = __webpack_require__("utGq");

// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__("YLtl");
var external_lodash_default = /*#__PURE__*/__webpack_require__.n(external_lodash_);

// EXTERNAL MODULE: ./constants/projectSettings.js
var projectSettings = __webpack_require__("xSWb");

// CONCATENATED MODULE: ./services/helpers/cart.js
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
    items: cart.items ? cart.items.map(el => addSlugToProduct(el)) : []
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
  const itemsD = Object(external_box_dimension_calculator_["combineLoop"])(itemsC1)[0];
  return {
    height: itemsD.h,
    width: itemsD.w,
    length: itemsD.l,
    weight
  };
};
const filterShippingRates = rateArr => {
  if (rateArr.length > 0) {
    const filteredRates = external_lodash_default.a.uniqBy(rateArr, function (e) {
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
    } = projectSettings["b" /* default */];

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
    orderStatus: projectSettings["b" /* default */].defaultOrderStatus,
    paymentMethod: paymentMethod === "stripe" ? "Authorize" : paymentMethod,
    status: projectSettings["b" /* default */].defaultStatusInOrder,
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
    refPercentage: projectSettings["b" /* default */].referralPresent
  }, confirmRest);

  removeEmpty(order);
  return order;
};
// CONCATENATED MODULE: ./services/helpers/product.js

var __jsx = external_react_default.a.createElement;

function product_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function product_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { product_ownKeys(Object(source), true).forEach(function (key) { product_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { product_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function product_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function product_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = product_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function product_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



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
          rest = product_objectWithoutProperties(el, ["sale_price", "sku", "bar", "regular_price"]);

    return product_objectSpread({}, rest);
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
      return product_objectSpread(product_objectSpread({}, el), {}, {
        verifiedAttr,
        visibleAttrList: getAttrListing(verifiedAttr)
      });
    } else return el;
  });
};
const generateProductSlug = product => {
  const productSlug = product.title ? product.title.toLocaleLowerCase() : product.productid && product.productid.producttitle.toLocaleLowerCase();
  return Object(misc["a" /* encodeUrlFn */])(productSlug);
};
const addSlugToProduct = product => product_objectSpread(product_objectSpread({}, product), {}, {
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
        category: product_objectSpread(product_objectSpread({}, el[0].categoryid[0]), {}, {
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
      const cutPrice = value - Object(misc["b" /* getParentage */])(parseFloat(discount), value);

      if (onlyNew) {
        return __jsx("span", null, " " + currency, (cutPrice * qtyVal).toFixed(2));
      }

      return __jsx("span", null, " " + currency, __jsx("strike", null, Object(misc["c" /* numberFormat */])(value * qtyVal)), " ", (cutPrice * qtyVal).toFixed(2)); // `${currency}${basicFunction.nombarFormat(value * qtyVal)}`
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
      return product_objectSpread(product_objectSpread({}, a), b);
    }, {});
  });
  const newVariation = obj && obj.length ? product_objectSpread({}, obj[0]) : {};
  return variablePriceSet(product_objectSpread(product_objectSpread(product_objectSpread({}, product), newVariation), {}, {
    qty
  }));
};

/***/ }),

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "UlpK":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/head.js");

/***/ }),

/***/ "Wol/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _constants_projectSettings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("xSWb");

const {
  baseUrl,
  docMzUrl,
  contentUrl
} = _constants_projectSettings__WEBPACK_IMPORTED_MODULE_0__[/* default */ "b"];
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

/***/ "YLtl":
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "YWgu":
/***/ (function(module, exports) {



/***/ }),

/***/ "ZHLg":
/***/ (function(module, exports) {

module.exports = require("react-flickity-component");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "dKEp":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return signIn; });
/* harmony import */ var _services_apis_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("/iI3");

const signIn = obj => dispatch => {
  return Object(_services_apis_auth__WEBPACK_IMPORTED_MODULE_0__[/* signInReq */ "a"])(obj).then(res => {
    if (res.data) {
      dispatch({
        type: 'SET_AUTH',
        payload: res.data
      });
      localStorage.setItem('auth', JSON.stringify(res.data));
    }
  }).catch(err => {
    console.log({
      err
    });
  });
};

/***/ }),

/***/ "eB/U":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,ZXhwb3J0IGRlZmF1bHQgImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBT0VBQUFEaENBTUFBQUFKYlNKSUFBQUFmbEJNVkVVQUFBRC8vLytycTZ2cTZ1clB6OC8zOS9maDRlSFYxZFZlWGw3WTJOakt5c3J0N2UzMDlQVG82T2lJaUlnaElTRnNiR3k3dTd1Ym01czNOemVCZ1lGT1RrNlNrcElXRmhZSkNRbDNkM2RYVjFlZ29LQ3FxcW9wS1NsdmIyOGtKQ1EvUHo5UFQwKzB0TFJHUmtZdUxpN0N3c0k3T3pzWUdCaGxaV1Y4Zkh3SjgrQTlBQUFIVmtsRVFWUjRuTjJkYVhmaVBBeUZjWUd3aGFXbFFLRFEwbEs2L1A4L09IQTZuUU1oaXlWZlI5STgzK2V0N3h0c3kxcGJMVEs3L3VOazhqelA2UC9TQk5tNjUzNUk3emZTaTRuQnV1MHVHUHgzR3ZjZGwrTkpla2xZSHZQNlRneW4wcXNDc2kwUTZGenlMcjB1R01OQ2dhY1Q1eitSdUJ1WENIUnVOSmRlSElMWFVhbEE1OFk3NmVXRk0wc3JCSjV1RGVuMUJUT3AxSGZpS0wzQ1FKN3FCRHAzSjczR0VMSmp2VURuSnRMTDVETWQrQWgwYmkrOVVDNkhxa1Awa2tSNnBVeSt1cDRDclc3RmIyOTlKNTZsVjh1Z3lOUXVaL1FpdlY0eXRkZGdEbk8zSXUwTG5sbExMNW5HbWl6UXBhWWVpd3U2UU9mdXBWZE40TVAzSHJ6R3pubTY4clJrOHJSWDBpdjM1WTBuME02OVQ3cnByMWxJcjkyTGc3K3Rkb09OMTNDdlhrZzVGdDVSeXhDQkx0VnZ2TzJEQkZxNEZJTitvMmUwUnpObW9RTFZQNGFUWUlYdVVWcERKV0hIekE5anpaYk50RjB2b0o2bHRJd0tFSi93OU54WC9JeXFkdDk3OHlDdG94U3E0NktNVkZwSUtaQmRlRWFyN1JaK0YvNHlscFpTd2swbUFoK2RyLzBEVHFEclNJc3A1QUdvMEgxSXF5bUM2WndwUnVPdC80b1VxUEpuQ3YyUnVxN0MxRDdvajlTNXZyU2VHM1pZZ1FvM1lvQUxzWkEzYVVFMzNJTVY5cVFGM1ZDZTE4V2pMUzBvendkWW9CdEpLOHFEM29iNnZtRngrbWdBNnI0aDhGM3hnN3B2Q0h2OC9xTE5iVG9QaURjVm84MjczMGNMVk9lTllxUmUxUEFxTFNrSDltSGhGSHBxMERhYlBzTWJmVm5veXg0Q1B3NzFmVUpFVU8wU2JaZmhDVjRPVkNuNjRzQVo5c0pYV05PMmdnclVaczZjZ1NyVUtCQ3FVS1ZBcEVLbHlYc1pUS0EyZy9zZm9QQzI0a3dUaktjdC9aTFdVUTdFcGtuMjBqSXFDTTVtYzlvTHU4c0ttUWtvUFVSL3VRc1dxUGVNK1NFMGsyYWt6OWJPOFJ3bWNLZy9NM2dUSkZEdE5YOUJpTDgwMVJmdUxZTHY4eDRkcE5mdUIvdENIS25NbkNtQWZWMFkrWUw4NjJJbXZYQnZtSUVMbmMvZFFxYXN3N1JycVhVTHl5ZXMzQmE5aG5YVTJMZ0ovOEt4MjhZS2s5ZktlV2NvSEVvdm1nYkRrV0ZxRzdLS2YvVkZtQ3BoQkxxMUZoMlU4RTYvRWJXLzYvUFE0OERHZnFXTWJBV0ZVYlJLNk85OGN3MWJ5RzVoRzlYM0Y1RHpFdzJVcGw5RGI5bGl5aTQ5UTNiV1dEdHE2S2VwdVkwNHB5cDBlK2tsVXlGZit0YnVmUG9qVVYydWN4MHI4bGxqN2pUMWFGWjZqYjdTbUJyb2xiSTIraVpkUUE0R203Tk42WjVoYlFuZHRaRE5iME51N3gvb0hTSFZCN2p6a0pOcHpSMm45S2Urc2JhZXJSZHlqbHZibE91N3hmbUlXK2tsRTFuUkV4V3RIVGIwajZpdytxQWFlbTJDaFl5YVN4Z05zWXlacDFONkhHcGc3RHhsWkdaWWMwb3hjb1lWWjBBWHdXaUsxVFhtSG1aa2dSbXpUemx0c1l4dFJVN0hhenNwWUdkZUdDV0p4cVpiMFovQzVyejhuT3BuZloyRnFtQjFoYmJsNW1kMWRERjE4YTg0OVY2bUVqSmJYNXlQYUN1ZGo5Vk13bFErWDhhcTB6ZDFvTEorcDdZT1ZONjRFcDB0YUl0NTRkWFBXcm96ZU8yVFUwdCtHMTQxamFrcHVyd3E2TGJxcXVCcm1EMmlCNFlrTXVjSllGb0piNWIzdmFROUhuVHUxaEh0UVdhbGQ3akUrZllxL1NWNWlGVXB0Mk8ySUFxMDMrWjN0Nm5ublVqM0VMY2xYNURFWlhFTWJCQW5JTXZ0V01lWE9DMTNNZlNpYkVodTB3V3V4Sy9LSU9aVGhGRTJPMjRwOVBDVDgrZnFBaWRKaEpnc3V6dG1qM0V2ZXRoUkVkelA3Q2s3WTZvQmwzbHRpUVIvYzdDN1I2YTB4RERmV2VENG9xU00zVnl4UzNIM3ovMTNQTnlad0p5L2VzYS95bTFQK1NNRDlBc21vQmV2Ny8vdURhMkNyb3MyY1FKbWVuVzhydWsrdVVRUTdSTTY4aVdPUERZallWejlQOUNiTWFTVmEyMXlHSzlmY3dkcjRIeUdkSFliVjFzaTNONGM0ejFVWXNnczNXcExoTC9KVTZ3TkZ6YTdMQ2s5L0lKbUYyRGo2NEY5d1lhRmpzYlB3RzdVMkxMeTBPWnV4OXRDbTFsd0kyT3NKUjdjL1hzdzJWMys5L1lCbDlBL3NMY0dvUDEzYi9uM2JmRCtDR3FYRHExdCtjVDAveDRsQ2JLUk9IUVNHc2srYmd5b3hGZHBOWVVNa1JGMjNFaFBKTkFJTzJyd0xCYW9SUGpVRHdqUVFqUDRqQ2dJMExJQlhwQS9OdEFrQXZqd0ZnVFlIRkJBaDJVODJKUWxSSnRzT05qb0ZIeGdHNEFSTkxVdTB5Z1IrMXBjS1pTSXJxVlR1QmZSQ1V2NnZpSzZXdEF2SE5ZaytLSFoyaVJHS0dwVlp0MmtFVkt4dzZjclFHRmxEOVNnNnpFVlEyRkk2QTFQRklXc1NxbElwRkVFdGxvejFGQ2xZS0sxbERsb2NUTEdhL0t3UXcvRDVCR3pxQ1ZEaENDQ2ladEhyK0Jpak4zRFF0eVJHci93NmhVK3hwd0UzdXErWlNmNVl1ekZ1ZXp6eUczR1FZVGsya0x3bzh6OTZEVlgzL21CR2FsSXBOSHF6a3pneWRoMC83ODFkbzV5UGMwWHI3NDNlNmFLZEI1cDhsa3NOSXRpQVo3YVhvNWNaVzR6Y2RTdVpFUGpKajVqSXR6SjRTSDIyNy9UaktWV0FTUnhyUndWTTR0bUVkOGJXc2JkUEVTNi84ZDZDdU4zVWN5NFkxTnZDUzhXOEFCTzkxdGFVNTRGTnRSNEZEOURDK2pqdm1PaXRjSElCck1mdTB2RnpZem1nSFN4N2E3Kzc0Z3lDVExsdW0rcVR0QVMrbS9jSU1kNGFhV1I2T2Zzbm02d2RvL1BpdmZmTGF2K0c4bGoxWnRZK1h5WEhKWkhyOTlyMmxsYW1RRitTN2FaREN1LzVXaXcvZEorZU5ienN2aCt1aXRnKzlpZnM3ZmVIM0JiZFNrZXBmUjhBQUFBQUVsRlRrU3VRbUNDIg=="

/***/ }),

/***/ "elJ3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getProductById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getCategoryById; });
/* unused harmony export getProductByName */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getAllProducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getAllCategories; });
/* unused harmony export getAllCombos */
/* unused harmony export addToWishList */
/* unused harmony export deleteWishList */
/* unused harmony export getWishList */
/* unused harmony export getReviews */
/* unused harmony export addReviews */
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apiList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Wol/");


const getProductById = id => axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(_apiList__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].getProductById + id);
const getCategoryById = id => axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(_apiList__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].getCategoryById + id);
const getProductByName = name => axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(_apiList__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].getProductByName + name);
const getAllProducts = data => axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(_apiList__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].getAllProducts, data);
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

/***/ "eomm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("/a9y")


/***/ }),

/***/ "g8bt":
/***/ (function(module, exports) {

module.exports = require("react-lazy-load-image-component");

/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "nZwT":
/***/ (function(module, exports) {

module.exports = require("@ant-design/icons");

/***/ }),

/***/ "oL/c":
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ }),

/***/ "oncg":
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

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
  yellowgreen: '#9acd32',
  wine: '#902442',
  carrot: '#d78490',
  nude: '#d2bda2',
  skin: '#E4CDBE',
  rani: '#fe67ca'
};
function getColorCode(colorName) {
  if (typeof colours[colorName.toLowerCase()] != 'undefined') return colours[colorName.toLowerCase()];
  return false;
}

/***/ }),

/***/ "tWEw":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getAllCategories; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return getAllProducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return getAllSubcategories; });
/* unused harmony export getCategory */
/* unused harmony export getProduct */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return getSubcategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return createProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createSubcategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return deleteCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return deleteProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return deleteSubcategory; });
/* harmony import */ var _utilis_useHttp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("CuiX");

const _id = '601bef27d29ac85814619ba3';
const getAllCategories = data => Object(_utilis_useHttp__WEBPACK_IMPORTED_MODULE_0__[/* useHttp */ "a"])({
  method: 'get',
  url: `/category/all`,
  data
});
const getAllProducts = data => Object(_utilis_useHttp__WEBPACK_IMPORTED_MODULE_0__[/* useHttp */ "a"])({
  method: 'get',
  url: `/product/all`,
  data
});
const getAllSubcategories = () => Object(_utilis_useHttp__WEBPACK_IMPORTED_MODULE_0__[/* useHttp */ "a"])({
  method: 'get',
  url: `/subcategory/all`
}); //get one ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const getCategory = id => Object(_utilis_useHttp__WEBPACK_IMPORTED_MODULE_0__[/* useHttp */ "a"])({
  method: 'get',
  url: `/category/${id}`
});
const getProduct = id => Object(_utilis_useHttp__WEBPACK_IMPORTED_MODULE_0__[/* useHttp */ "a"])({
  method: 'get',
  url: `/product/${id}`
});
const getSubcategory = id => Object(_utilis_useHttp__WEBPACK_IMPORTED_MODULE_0__[/* useHttp */ "a"])({
  method: 'get',
  url: `/subcategory/${id}`
}); //create ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const createCategory = data => Object(_utilis_useHttp__WEBPACK_IMPORTED_MODULE_0__[/* useHttp */ "a"])({
  method: 'post',
  url: `/category/create/${_id}`,
  data
});
const createProduct = data => Object(_utilis_useHttp__WEBPACK_IMPORTED_MODULE_0__[/* useHttp */ "a"])({
  method: 'post',
  url: `/product/create/${_id}`,
  data,
  options: {
    headers: {
      'Content-Type': 'multipart/form-data; boundary=something'
    }
  }
});
const createSubcategory = data => Object(_utilis_useHttp__WEBPACK_IMPORTED_MODULE_0__[/* useHttp */ "a"])({
  method: 'post',
  url: `/subcategory/create/${_id}`,
  data
}); //Delete  ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const deleteCategory = pid => Object(_utilis_useHttp__WEBPACK_IMPORTED_MODULE_0__[/* useHttp */ "a"])({
  method: 'DELETE',
  url: `/category/${pid}/${_id}`
});
const deleteProduct = pid => Object(_utilis_useHttp__WEBPACK_IMPORTED_MODULE_0__[/* useHttp */ "a"])({
  method: 'delete',
  url: `/product/${pid}/${_id}`
});
const deleteSubcategory = pid => Object(_utilis_useHttp__WEBPACK_IMPORTED_MODULE_0__[/* useHttp */ "a"])({
  method: 'delete',
  url: `/subcategory/${pid}/${_id}`
});

/***/ }),

/***/ "tdIj":
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

// EXTERNAL MODULE: ./components/styles/app.scss
var app = __webpack_require__("YWgu");

// EXTERNAL MODULE: ./services/helpers/product.js + 1 modules
var product = __webpack_require__("OWVN");

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: external "react-images-viewer"
var external_react_images_viewer_ = __webpack_require__("J42B");
var external_react_images_viewer_default = /*#__PURE__*/__webpack_require__.n(external_react_images_viewer_);

// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__("Exp3");

// EXTERNAL MODULE: external "@ant-design/icons"
var icons_ = __webpack_require__("nZwT");

// EXTERNAL MODULE: external "react-router-dom"
var external_react_router_dom_ = __webpack_require__("oncg");

// EXTERNAL MODULE: ./assets/icons/callIcon.png
var callIcon = __webpack_require__("eB/U");

// EXTERNAL MODULE: ./assets/icons/whatsappIcon.webp
var whatsappIcon = __webpack_require__("yLRE");

// EXTERNAL MODULE: ./utilis/customFunctions.js
var customFunctions = __webpack_require__("rEar");

// CONCATENATED MODULE: ./components/ProductDetail.js
var __jsx = external_react_default.a.createElement;











function ProductDetail(props) {
  const {
    data
  } = props;
  const {
    0: openViewer,
    1: setOpenViewer
  } = Object(external_react_["useState"])(false);
  const {
    0: currImg,
    1: setCurrImg
  } = Object(external_react_["useState"])(0);
  const {
    0: activeImg,
    1: setActiveImg
  } = Object(external_react_["useState"])(0);
  const imgSrc = data && data.images.map(i => {
    return {
      src: i.data
    };
  });

  const gotoPrevImg = () => setCurrImg(s => s - 1);

  const gotoNextImg = () => setCurrImg(s => s + 1);

  const closeImg = () => {
    setOpenViewer(false);
    setCurrImg(0);
  };

  if (data) return __jsx(external_antd_["Spin"], {
    spinning: !data
  }, data && __jsx("div", {
    className: "c-product-detail row"
  }, __jsx("div", {
    className: "c-product-detail-left  col-xs-12 col-md-6 "
  }, __jsx(external_react_images_viewer_default.a, {
    currImg: currImg,
    imgs: imgSrc,
    isOpen: openViewer,
    onClickPrev: gotoPrevImg,
    onClickNext: gotoNextImg,
    onClose: closeImg
  }), __jsx(icons_["LeftCircleFilled"], {
    className: `c-product-detail-left__icon ${activeImg === 0 && 'c-product-detail-left__icon--hide'} `,
    onClick: () => activeImg !== 0 && setActiveImg(s => s - 1)
  }), __jsx("img", {
    src: imgSrc[activeImg].src,
    alt: "main_image",
    onClick: () => setOpenViewer(true),
    className: "c-product-detail-left__image"
  }), __jsx(icons_["RightCircleFilled"], {
    className: `c-product-detail-left__icon ${activeImg === imgSrc.length - 1 && 'c-product-detail-left__icon--hide'} `,
    onClick: () => activeImg < imgSrc.length - 1 && setActiveImg(s => s + 1)
  }), __jsx("div", null, imgSrc.map((im, index) => __jsx("img", {
    key: index,
    src: im.src,
    alt: "mini",
    className: `c-product-detail-left__mini-image  ${index === activeImg && 'c-product-detail-left__mini-image--selected'}`,
    onClick: () => setActiveImg(index)
  })))), __jsx("div", {
    className: "c-product-detail-right col-xs-12 col-md-6"
  }, __jsx("div", {
    className: "c-product-detail-right__category"
  }, data.category.name), __jsx("div", {
    className: "c-product-detail-right__name"
  }, data.name), data.price && __jsx("div", {
    className: "c-product-detail-right__price"
  }, "\u20B9 ", data.price), data.sizes.length !== 0 && __jsx("div", {
    className: "c-product-detail-right__box"
  }, __jsx("div", {
    className: "c-product-detail-right__title"
  }, "Available Sizes"), __jsx("div", {
    className: "c-product-detail-right__sizes"
  }, data.sizes.map((s, i) => __jsx("div", {
    key: i,
    className: "c-product-detail-right__size"
  }, s)))), data.colors.length !== 0 && __jsx("div", {
    className: "c-product-detail-right__box"
  }, __jsx("div", {
    className: "c-product-detail-right__title"
  }, "Colors"), __jsx("div", {
    className: "c-product-detail-right__colors"
  }, data.colors.map((c, i) => __jsx("div", {
    className: "c-product-detail-right__color",
    key: i
  }, __jsx("div", {
    style: {
      backgroundColor: Object(customFunctions["a" /* getColorCode */])(c)
    }
  }))))), __jsx("div", {
    className: "c-product-detail-right__box"
  }, __jsx("button", {
    className: "c-product-detail-right__call-btn-wa"
  }, __jsx("a", {
    target: "_black" // href={`https://wa.me/9999217125/?text=Hello!%20I%20want%20to%20enquire%20about%20${data.name}`}
    ,
    href: `https://wa.me/+919999217125/?text=Hello!%20I%20want%20to%20enquire%20about%20${data.name && data.name !== '' ? data.name : data.category.name}`
  }, __jsx(icons_["WhatsAppOutlined"], {
    className: "c-product-detail-right__call-btn-wa__img"
  }), "Whatsapp Enquiry")), __jsx("button", {
    className: "c-product-detail-right__call-btn-phone"
  }, __jsx("a", {
    href: "tel:9999217125"
  }, __jsx(icons_["PhoneFilled"], {
    className: "c-product-detail-right__call-btn-phone__img"
  }), "Call Enquiry"))), data.subCategories.length !== 0 && __jsx("div", {
    className: "c-product-detail-right__box"
  }, __jsx("div", {
    className: "c-product-detail-right__title"
  }, "Category (s)"), __jsx("div", {
    className: "c-product-detail-right__sizes"
  }, data.subCategories.map((s, i) => __jsx("div", {
    key: i,
    className: "c-product-detail-right__size"
  }, s.name)))), __jsx("div", {
    className: "c-product-detail-right__box"
  }, __jsx("div", {
    className: "c-product-detail-right__title"
  }, "Product Features"), __jsx("div", null, data.shortDesc), __jsx("div", null, "100% Original Product")), __jsx("div", {
    className: "c-product-detail-right__box"
  }, __jsx("div", {
    className: "c-product-detail-right__title"
  }))), __jsx("div", {
    className: "c-product-detail-right col-12 mt-5"
  }, __jsx("div", {
    className: "c-product-detail-right__title"
  }, "Product Description"), __jsx("div", null, data.description)), __jsx("div", {
    className: "c-product-detail-right col-12 mt-3 "
  }, __jsx("div", {
    className: "c-product-detail-right__title"
  }, "Wash Care"), __jsx("div", null, __jsx("ol", null, __jsx("li", null, "Hand wash in warm water"), __jsx("li", null, "Do not wring"), __jsx("li", null, "Reshape cups whilst damp"), __jsx("li", null, "Line dry in shade"), __jsx("li", null, "Do not bleach/ dry clean/ iron.")))), __jsx("div", {
    className: "c-product-detail-right col-12 mt-3 "
  }, __jsx("div", {
    className: "c-product-detail-right__title"
  }, "Country of Origin"), __jsx("div", null, "India")), __jsx("div", {
    className: "c-product-detail-right col-12 mt-3 "
  }, __jsx("div", {
    className: "c-product-detail-right__title"
  }, "Country of Manufacturing"), __jsx("div", null, "India"))));
  return __jsx("div", null);
}
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: external "isomorphic-unfetch"
var external_isomorphic_unfetch_ = __webpack_require__("0bYB");

// EXTERNAL MODULE: ./constants/projectSettings.js
var projectSettings = __webpack_require__("xSWb");

// EXTERNAL MODULE: ./services/apis/apiList.js
var apiList = __webpack_require__("Wol/");

// EXTERNAL MODULE: ./node_modules/next/error.js
var error = __webpack_require__("eomm");

// EXTERNAL MODULE: ./redux/actions/index.js + 3 modules
var actions = __webpack_require__("x91w");

// CONCATENATED MODULE: ./pages/products/[pid].js

var _pid_jsx = external_react_default.a.createElement;


const Layout = dynamic_default()(() => __webpack_require__.e(/* import() */ 2).then(__webpack_require__.bind(null, "Vw5z")), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("Vw5z")],
    modules: ['../../components/Layouts/Layout']
  }
}); // const ProductInfo = dynamic(() => import('../../components/ProductInfo'), {
//   ssr: false,
// });

const HImgSection = dynamic_default()(() => __webpack_require__.e(/* import() */ 41).then(__webpack_require__.bind(null, "Q9jL")), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("Q9jL")],
    modules: ['../../components/HImgSection']
  }
});


const Heading = dynamic_default()(() => __webpack_require__.e(/* import() */ 0).then(__webpack_require__.bind(null, "h1bS")), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("h1bS")],
    modules: ['../../components/Heading']
  }
});
const TitleList = dynamic_default()(() => __webpack_require__.e(/* import() */ 6).then(__webpack_require__.bind(null, "y/CX")), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("y/CX")],
    modules: ['../../components/TItleList']
  }
});
const ProductDetailsTab = dynamic_default()(() => __webpack_require__.e(/* import() */ 38).then(__webpack_require__.bind(null, "+TUq")), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("+TUq")],
    modules: ['../../components/ProductDetailsTab']
  }
});
const ProductSlider = dynamic_default()(() => __webpack_require__.e(/* import() */ 46).then(__webpack_require__.bind(null, "0GkY")), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("0GkY")],
    modules: ['../../components/ProductSlider']
  }
});








const _pid_product = {
  title: 'CBD Isolate 500 mg'
};


const Product = () => {
  const {
    0: isScrolled,
    1: setIsScrolled
  } = Object(external_react_["useState"])(false);
  Object(external_react_["useEffect"])(() => {
    setIsScrolled(true);
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }, isScrolled);
  const router = Object(router_["useRouter"])();
  const {
    pid
  } = router.query;
  const dispatch = Object(external_react_redux_["useDispatch"])();
  const products = Object(external_react_redux_["useSelector"])(state => state.products);
  Object(external_react_["useEffect"])(() => {
    console.log('pid', pid);
    dispatch(Object(actions["c" /* getProduct */])(pid));
  }, []);
  Object(external_react_["useEffect"])(() => {
    if (products.product !== null) dispatch({
      type: 'ADD_TO_RECENTLY_VIEWD',
      payload: products.product
    });
  }, [products.product]);
  return _pid_jsx(Layout, {
    headerTheme: "black",
    fixed: true
  }, _pid_jsx(ProductDetail, {
    data: products.product
  }), products.products !== [] && _pid_jsx("div", {
    className: "c-product-single__related-section"
  }, _pid_jsx("div", {
    className: "row justify-content-center",
    style: {
      maxWidth: '100%'
    }
  }, _pid_jsx("div", {
    className: "col-md-6"
  }, _pid_jsx(Heading, {
    style: {
      textAlign: 'center'
    },
    versions: ['default', 'upper', 'weight-500']
  }, "YOU MAY ALSO LIKE")), _pid_jsx("div", {
    className: "col-12"
  }, _pid_jsx(ProductSlider, {
    parentClass: "c-product-single",
    products: products.products
  })))), products.recentlyViewed !== [] && _pid_jsx("div", {
    className: "c-product-single__related-section"
  }, _pid_jsx("div", {
    className: "row justify-content-center",
    style: {
      maxWidth: '100%'
    }
  }, _pid_jsx("div", {
    className: "col-md-6"
  }, _pid_jsx(Heading, {
    style: {
      textAlign: 'center'
    },
    versions: ['default', 'upper', 'weight-500']
  }, "RECENTLY VIEWED")), _pid_jsx("div", {
    className: "col-12"
  }, _pid_jsx(ProductSlider, {
    parentClass: "c-product-single",
    products: products.recentlyViewed
  })))));
};

/* harmony default export */ var _pid_ = __webpack_exports__["default"] = (Product);

/***/ }),

/***/ "utGq":
/***/ (function(module, exports) {

module.exports = require("box-dimension-calculator");

/***/ }),

/***/ "wy2R":
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "x91w":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "d", function() { return /* reexport */ getProducts; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* reexport */ getProduct; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ getCategory; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ getCategories; });

// UNUSED EXPORTS: signIn, getSubCategories, toggleCartBar, showCartBar, hideCartBar, toggleRegBar, showRegBar, hideRegBar, hideHasLogin, showHasLogin, drawerToDisplay, setLoading, setMessage, showMessage, closeMessage

// EXTERNAL MODULE: ./redux/actions/auth.js
var auth = __webpack_require__("dKEp");

// EXTERNAL MODULE: ./services/helpers/product.js + 1 modules
var product = __webpack_require__("OWVN");

// EXTERNAL MODULE: ./services/apis/products.js
var products = __webpack_require__("elJ3");

// EXTERNAL MODULE: ./services/apis/admin.js
var admin = __webpack_require__("tWEw");

// CONCATENATED MODULE: ./redux/actions/products.js



const getProducts = data => dispatch => {
  Object(products["b" /* getAllProducts */])(data).then(res => {
    if (res.data && res.data.success) {
      dispatch({
        type: 'SET_PRODUCTS',
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
  Object(products["d" /* getProductById */])(_id).then(res => {
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
  Object(products["c" /* getCategoryById */])(_id).then(res => {
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
  Object(products["a" /* getAllCategories */])().then(res => {
    if (res.data && res.data.success) {
      dispatch({
        type: 'SET_CATEGORIES',
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
  Object(admin["i" /* getAllSubcategories */])().then(res => {
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
// EXTERNAL MODULE: ./redux/actions/drawers.js
var drawers = __webpack_require__("JLUA");

// CONCATENATED MODULE: ./redux/actions/loading.js
const setLoading = payload => ({
  type: 'LOADING',
  payload
});
// CONCATENATED MODULE: ./redux/actions/message.js
const setMessage = payload => ({
  type: 'SET_MESSAGE',
  payload
});
const showMessage = payload => ({
  type: 'SHOW_MESSAGE',
  payload
});
const closeMessage = payload => ({
  type: 'CLOSE_MESSAGE',
  payload
});
// CONCATENATED MODULE: ./redux/actions/index.js






/***/ }),

/***/ "xSWb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return projectName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return baseUrl; });
/* unused harmony export docMzUrl */
/* unused harmony export contentUrl */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return imageUrl; });
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
/* unused harmony export filePath */
/* unused harmony export labSheetPath */
/* unused harmony export countryTax */
/* unused harmony export chatTheme */
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

/* harmony default export */ __webpack_exports__["b"] = ({
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

/***/ "yH4c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ encodeUrlFn; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* binding */ numberFormat; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ getParentage; });

// UNUSED EXPORTS: getSingleElementByMultipleObject, getCountryName, getCountryCode

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

/***/ "yLRE":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/whatsappIcon-5a33f552deed4053ede0f2176b30a932.webp";

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });