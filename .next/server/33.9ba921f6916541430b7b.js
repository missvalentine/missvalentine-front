exports.ids = [33,7];
exports.modules = {

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

/***/ "S3md":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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

/***/ "Ws9w":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/dynamic"
var dynamic_ = __webpack_require__("/T1H");
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic_);

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__("K2gz");
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// CONCATENATED MODULE: ./components/form-components/Quantity.js

var __jsx = external_react_default.a.createElement;


class Quantity_Quantity extends external_react_default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: props.value || 1
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.value !== this.props.value) {
      this.setState({
        inputValue: this.props.value
      });
    }
  }

  render() {
    const {
      min,
      max,
      value,
      onChange,
      parentClass,
      isDisabled
    } = this.props;
    const {
      inputValue
    } = this.state;
    const parent = `${parentClass}__quantity`; // const [inputValue, setInputValue] = useState(value || 1)

    const onInputChange = e => {
      if (!(e < min || e > max)) {
        this.setState({
          inputValue: e
        });
        if (typeof onChange === "function") onChange(e);
      }
    };

    return __jsx("div", {
      className: external_classnames_default()("c-quantity", {
        [parent]: parentClass,
        "c-quantity--disabled": isDisabled
      })
    }, __jsx("div", {
      onClick: () => {
        if (!isDisabled) onInputChange(inputValue - 1);
      },
      className: "c-quantity__btn c-quantity__btn--minus"
    }, "-"), __jsx("span", {
      className: "c-quantity__input"
    }, inputValue), __jsx("div", {
      onClick: () => {
        if (!isDisabled) onInputChange(inputValue + 1);
      },
      className: "c-quantity__btn c-quantity__btn--plus"
    }, "+"));
  }

} // const Quantity = () => {
//     const parent = `${parentClass}__quantity`
//     const [inputValue, setInputValue] = useState(value || 1)
//     const onInputChange = (e)=> {
//         if(!(e < min || e > max)){
//             setInputValue(e)
//             if(typeof onChange === "function") onChange(e)
//         }
//     }
//     return (
//         <div className={classNames("c-quantity", {
//             [parent]: parentClass
//         })}>
//             <div onClick={()=> {
//                 onInputChange(inputValue - 1)
//             }} className="c-quantity__btn c-quantity__btn--minus">-</div>
//             {/* <input className="c-quantity__input" type="number" onChange={onInputChange} min={min} max={max} value={inputValue} /> */}
//             <span className="c-quantity__input">
//                 {inputValue}
//             </span>
//             <div onClick={()=> {
//                 onInputChange(inputValue + 1)
//             }} className="c-quantity__btn c-quantity__btn--plus">+</div>
//         </div>
//     )
// }


Quantity_Quantity.defaultProps = {
  inputId: `${Math.random() * new Date().getTime()}`,
  isDisabled: false
};
/* harmony default export */ var form_components_Quantity = (Quantity_Quantity);
// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__("Exp3");

// EXTERNAL MODULE: ./constants/projectSettings.js
var projectSettings = __webpack_require__("xSWb");

// EXTERNAL MODULE: external "react-lazy-load-image-component"
var external_react_lazy_load_image_component_ = __webpack_require__("g8bt");

// CONCATENATED MODULE: ./components/CartItem.js

var CartItem_jsx = external_react_default.a.createElement;

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



const Heading = dynamic_default()(() => __webpack_require__.e(/* import() */ 0).then(__webpack_require__.bind(null, "h1bS")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("h1bS")],
    modules: ["./Heading"]
  }
});





const CartItem = (_ref) => {
  let {
    title,
    subTitle,
    price,
    image,
    quantity,
    onRemove,
    onQtyChange,
    total,
    parentClass,
    versions,
    isDisabled,
    isSearch,
    clearSearch
  } = _ref,
      props = _objectWithoutProperties(_ref, ["title", "subTitle", "price", "image", "quantity", "onRemove", "onQtyChange", "total", "parentClass", "versions", "isDisabled", "isSearch", "clearSearch"]);

  const componentClass = "c-cart-item";
  const versionClass = versions.map(el => `${componentClass}--${el}`).join(" ");
  const parent = `${parentClass}__${componentClass.replace("c-", "")}`;
  const className = external_classnames_default()(componentClass, {
    [versionClass]: versions,
    [parent]: parentClass
  });

  if (total) {
    return CartItem_jsx("div", {
      className: "c-cart-item__total"
    }, CartItem_jsx("h2", {
      className: "c-cart-item__total-title"
    }, title), CartItem_jsx("h2", {
      className: "c-cart-item__total-price"
    }, price));
  }

  if (isSearch) {
    return CartItem_jsx("div", {
      onClick: clearSearch // href={`/shop/${title.replace(/ /g, "-")}`}

    }, CartItem_jsx("div", {
      className: "c-cart-item__search"
    }, CartItem_jsx("div", {
      className: "c-cart-item__search--img-wrapper"
    }, CartItem_jsx(external_react_lazy_load_image_component_["LazyLoadImage"], {
      width: "100",
      height: "100",
      src: `${projectSettings["b" /* default */].serverUrl}${image}`
    })), CartItem_jsx("div", {
      className: "c-cart-item__search--content"
    }, CartItem_jsx("h2", {
      className: "c-cart-item__search--content-title"
    }, title.split(/(\d+)/)[0]), CartItem_jsx("div", {
      className: "c-cart-item__search--strength-and-price"
    }, CartItem_jsx("h2", {
      className: "c-cart-item__search--strength-and-price-strength"
    }, subTitle, " mg"), CartItem_jsx("h2", {
      className: "c-cart-item__search--strength-and-price-price"
    }, price)))));
  }

  return CartItem_jsx("div", {
    className: className
  }, CartItem_jsx("div", {
    className: "c-cart-item__img-wrapper"
  }, CartItem_jsx(external_react_lazy_load_image_component_["LazyLoadImage"], {
    src: `${projectSettings["b" /* default */].serverUrl}${image}`
  })), CartItem_jsx("div", {
    className: "c-cart-item__rightSpan"
  }, CartItem_jsx("div", {
    className: "c-cart-item__details"
  }, CartItem_jsx("h2", {
    className: "c-cart-item__details--product-name"
  }, title), CartItem_jsx("div", {
    className: "c-cart-item__details--remove-btn"
  }, CartItem_jsx(external_antd_["Icon"], {
    onClick: onRemove,
    className: "c-cart-item__close",
    type: "close"
  }))), CartItem_jsx("div", {
    className: "c-cart-item__price-wrapper"
  }, CartItem_jsx("div", {
    className: "c-cart-item__price-wrapper--quantity-wrapper"
  }, CartItem_jsx(form_components_Quantity, {
    min: 1,
    isDisabled: isDisabled,
    onChange: onQtyChange,
    value: quantity,
    parentClass: "c-cart-item"
  })), CartItem_jsx("h2", {
    className: "c-cart-item__price-wrapper--price"
  }, price))));
};

CartItem.defaultProps = {
  versions: [],
  isDisabled: false
};
/* harmony default export */ var components_CartItem = __webpack_exports__["a"] = (CartItem);

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

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


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

/***/ "m0N4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("K2gz");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_app_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("YWgu");
/* harmony import */ var _styles_app_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_app_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("Exp3");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _form_components_Input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("xcph");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("nZwT");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _services_apis_apiList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("Wol/");
/* harmony import */ var _services_helpers_product__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("OWVN");
/* harmony import */ var _constants_projectSettings__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("xSWb");
/* harmony import */ var _CartItem__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("Ws9w");
/* harmony import */ var _services_helpers_misc__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("yH4c");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }














const {
  SubMenu
} = antd__WEBPACK_IMPORTED_MODULE_5__["Menu"];

const MobileMenu = ({
  items,
  user,
  toggleRegBar
}) => {
  const {
    0: isOpen,
    1: setOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: search,
    1: setSearch
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: display,
    1: setDisplay
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: products,
    1: setProducts
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);

  const onSubmit = e => {
    //console.log(`${window.location.origin}/search/${search}`);
    // window.location.href(`${window.location.origin}/search/${search}`)
    if (e.key === 'Enter') {
      Router.push(`/search/${search}`);
    }
  };

  const menu = __jsx("div", {
    className: "search-container"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Menu"], null, __jsx("div", {
    style: {
      marginTop: '40px'
    }
  }), products.length > 0 ? products.map((product, i) => __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Menu"].Item, {
    style: {
      height: 'fit-content'
    },
    key: i
  }, __jsx("div", {
    className: "c-cart-drawer"
  }, __jsx(_CartItem__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"], {
    key: i,
    title: product.title,
    image: product.image,
    subTitle: product.totalcbdmg,
    price: `$${Object(_services_helpers_misc__WEBPACK_IMPORTED_MODULE_12__[/* numberFormat */ "c"])(parseFloat(product.price.sale_price))}`,
    isSearch: true,
    clearSearch: () => {
      setDisplay(false);
      setSearch('');
      setProducts([]);
      Router.push(`/shop/${product.title.replace(/ /g, '-')}`);
    }
  })))) : __jsx(SubMenu, null, __jsx("h2", null, "No records found"))));

  const filterProducts = async value => {
    setSearch(value);

    if (value === '') {
      setDisplay(false);
      setProducts([]);
      return;
    }

    setDisplay(true);
    const res = await fetch(_services_apis_apiList__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"].getAllProducts);
    const productList = await res.json();
    const visibleProducts = Object(_services_helpers_product__WEBPACK_IMPORTED_MODULE_9__[/* getVisibleProducts */ "f"])(productList.products);
    const newList = visibleProducts.map(el => Object(_services_helpers_product__WEBPACK_IMPORTED_MODULE_9__[/* addSlugToProduct */ "a"])(el));
    const productsRow = newList.map(el => {
      return _objectSpread(_objectSpread({}, el), {}, {
        image: el.productImage ? _constants_projectSettings__WEBPACK_IMPORTED_MODULE_10__[/* default */ "b"].serverUrl + el.productImage : '//via.placeholder.com/300x500',
        title: Object(_services_helpers_product__WEBPACK_IMPORTED_MODULE_9__[/* getProductTitle */ "e"])(el),
        subTitle: Object(_services_helpers_product__WEBPACK_IMPORTED_MODULE_9__[/* getProductShortDesc */ "d"])(el),
        price: Object(_services_helpers_product__WEBPACK_IMPORTED_MODULE_9__[/* getBasicPrice */ "b"])(el),
        qty: 1
      });
    });
    const applySearch = productsRow.filter(el => {
      if (value === '') return false;
      return el.title.toLowerCase().includes(value.toLowerCase());
    }); // console.log(applySearch);

    setProducts(applySearch);
  };

  return __jsx("ul", {
    className: "c-nav__list"
  }, items.filter(el => {
    console.log(el);

    if (user._id) {
      return el.onlyLogin !== false;
    } else {
      return el.onlyLogin !== true;
    }
  }).map((el, ind) => __jsx("li", {
    key: ind,
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('c-nav__list-item', {
      'c-nav__list-item--has-sub-menu': el.subMenus
    })
  }, el.action === 'input' ? __jsx("div", {
    style: {
      position: 'relative'
    }
  }, __jsx(_form_components_Input__WEBPACK_IMPORTED_MODULE_6__["default"], {
    prefix: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_7__["SearchOutlined"], {
      style: {
        color: '#aaaaaa'
      }
    }),
    value: search,
    onChange: e => filterProducts(e.target.value),
    onKeyDown: onSubmit,
    label: "Search"
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Dropdown"], {
    overlayStyle: {
      position: 'absolute',
      top: '0 !important',
      left: '0 !important',
      width: '400px',
      height: '500px',
      overflow: 'scroll'
    },
    visible: display // visible={true}
    ,
    onVisibleChange: () => setDisplay(!display),
    overlay: menu
  }, __jsx("a", {
    className: "ant-dropdown-link",
    onClick: e => e.preventDefault()
  }))) : '', el.link ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    as: el.as || el.link,
    href: el.link
  }, __jsx("a", {
    onClick: el.action,
    className: "c-nav__link"
  }, el.label, el.icon)) : __jsx("span", {
    onClick: el.action,
    className: "c-nav__link"
  }, el.label, el.icon), el.subMenus && __jsx("ul", {
    className: "c-nav__sub-menu"
  }, el.subMenus.map((elx, i) => __jsx("li", {
    key: i,
    className: "c-nav__sub-menu-item"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    as: elx.as || elx.link,
    href: elx.link
  }, __jsx("a", {
    className: "c-nav__link c-nav__link--sub"
  }, elx.label))))))));
};

MobileMenu.defaultProps = {
  items: []
};
/* harmony default export */ __webpack_exports__["default"] = (MobileMenu);

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

/***/ "wkBG":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "xcph":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("K2gz");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Exp3");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("nZwT");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





class Input extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    const _this$props = this.props,
          {
      value,
      onChange,
      parentClass,
      inputId,
      label,
      type,
      suffix,
      prefix,
      versions,
      name,
      wrapperClass
    } = _this$props,
          props = _objectWithoutProperties(_this$props, ["value", "onChange", "parentClass", "inputId", "label", "type", "suffix", "prefix", "versions", "name", "wrapperClass"]);

    const componentClass = "c-input";
    const versionClass = versions.map(el => `${componentClass}--${el}`).join(" ");
    const parent = `${parentClass}__${componentClass.replace("c-", "")}`;
    const className = classnames__WEBPACK_IMPORTED_MODULE_1___default()(componentClass, {
      [versionClass]: versions,
      [parent]: parentClass,
      [wrapperClass]: wrapperClass
    });

    if (type == "password") {
      return __jsx("div", {
        className: className
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Input"].Password, _extends({
        onChange: onChange // id={inputId}

      }, props, {
        name: name,
        type: type,
        value: value,
        placeholder: label,
        prefix: prefix,
        suffix: suffix,
        allowClear: versions.filter(version => version === "discount")[0] === "discount" ? true : false,
        className: versions[0] === "discount" ? "c-input" : "c-input__input"
      })));
    } else {
      return __jsx("div", {
        className: className,
        style: {
          width: '100%'
        }
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Input"], _extends({
        onChange: onChange // id={inputId}

      }, props, {
        name: name,
        type: type,
        value: value,
        placeholder: label,
        prefix: prefix,
        suffix: suffix,
        allowClear: versions.filter(version => version === "discount")[0] === "discount" ? true : false,
        className: versions[0] === "discount" ? "c-input" : "c-input__input"
      })));
    }
  }

}

Input.defaultProps = {
  inputId: `${parseInt(Math.random() * new Date().getTime())}`,
  type: "text",
  versions: ["default"]
};
/* harmony default export */ __webpack_exports__["default"] = (Input);

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

/***/ })

};;