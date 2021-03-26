module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ({

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("iooJ");


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

/***/ "YWgu":
/***/ (function(module, exports) {



/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "iooJ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ AdminLogin; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: ./services/apis/apiList.js
var apiList = __webpack_require__("Wol/");

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__("zr5I");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./services/apis/auth.js


const signInReq = obj => external_axios_default.a.post(apiList["a" /* default */].signInApi, obj);
// CONCATENATED MODULE: ./redux/actions/auth.js

const signIn = obj => dispatch => {
  return signInReq(obj).then(res => {
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
// EXTERNAL MODULE: ./components/styles/app.scss
var app = __webpack_require__("YWgu");

// EXTERNAL MODULE: external "react-toastify"
var external_react_toastify_ = __webpack_require__("oAEb");

// CONCATENATED MODULE: ./pages/admin/index.js
var __jsx = external_react_default.a.createElement;






function AdminLogin(props) {
  const {
    0: email,
    1: setEmail
  } = Object(external_react_["useState"])('admin@missvalentineinnerwear.com');
  const {
    0: password,
    1: setPassword
  } = Object(external_react_["useState"])('Vikasjain@2021');
  const dispatch = Object(external_react_redux_["useDispatch"])();
  const router = Object(router_["useRouter"])();

  const changeHandler = event => {
    event.target.name === 'email' ? setEmail(event.target.value) : setPassword(event.target.value);
  };

  const auth = Object(external_react_redux_["useSelector"])(s => s.auth);

  const submitHandler = () => {
    dispatch(signIn({
      email: email,
      password: password
    }));
  };

  Object(external_react_["useEffect"])(() => {
    console.log('auth', auth);
    if (auth.token) router.push('/admin/dashboard');
  }, [auth.token]);
  if (auth.token) router.push('/admin/dashboard');
  return __jsx("div", null, __jsx(external_react_toastify_["ToastContainer"], null), __jsx("div", {
    className: "auth-wrapper"
  }, __jsx("div", {
    className: "auth-content"
  }, __jsx("div", {
    className: "auth-bg"
  }, __jsx("span", {
    className: "r"
  }), __jsx("span", {
    className: "r s"
  }), __jsx("span", {
    className: "r s"
  }), __jsx("span", {
    className: "r"
  })), __jsx("div", {
    className: "card"
  }, __jsx("div", {
    className: "card-body text-center"
  }, __jsx("div", {
    className: "mb-4"
  }, __jsx("i", {
    className: "feather icon-user-plus auth-icon"
  })), __jsx("h3", {
    className: "mb-4"
  }, "Login"), __jsx("div", {
    className: "input-group mb-3"
  }, __jsx("input", {
    type: "email",
    className: "form-control",
    placeholder: "Email",
    name: "email",
    onChange: changeHandler,
    value: email
  })), __jsx("div", {
    className: "input-group mb-4"
  }, __jsx("input", {
    type: "password",
    className: "form-control",
    placeholder: "password",
    name: "password",
    value: password,
    onChange: changeHandler
  })), __jsx("button", {
    className: "btn btn-primary shadow-2 mb-4",
    onClick: submitHandler
  }, "Login"))))));
}

/***/ }),

/***/ "oAEb":
/***/ (function(module, exports) {

module.exports = require("react-toastify");

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

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });