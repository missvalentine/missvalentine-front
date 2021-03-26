module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		41: 0
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
/******/ 			var chunk = require("../" + ({}[chunkId]||chunkId) + "." + {"0":"1484d4b3a1c58fd8e9d3","1":"9f9e576d8beb99af920b","5":"0ee9383cfef15cb417cb","6":"5d195660e5978d6b756c","7":"6fc77f00c1f4916a55bf","8":"dd7c6e1b22f9cacd5ea5","12":"4dfdab35aff5f4eb6323","13":"4eeb7562709d11353e66","14":"6ad7600e29b51b43ad8b","16":"09bb3161e8cb550076cb","20":"cab62ceba200f84c6fda","58":"8d248501ad53fb25530a","65":"2647bf271bf0089dc2fe","66":"e7906676c2159017e236","67":"9c47eda2633b62dba027","68":"f6151c8ee3074693b135","69":"849753c976bc6e985650","81":"b0b05e65253b24eb4957","82":"6fa26618ada0837073e0","84":"48b46a8a7fd82f633eae","86":"f97bb9d82c63d9c61103","88":"1c8b79899ab31f96f7b8","89":"3df4c6031215e3fe82b0","93":"b299f3715d54a64d8127","95":"da6f609584c1ca5ef294","96":"b7940a28108d94d981e2","97":"34e45430bff996d84569","98":"d649c782849fa2716241","99":"7413c9c9b876a528f602","100":"d79995a46a12d884cc78","101":"a18eb2f054972d25bc80","102":"9fded9630ab27e9c7409","104":"4e0311d6f119f9637453"}[chunkId] + ".js");
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
/******/ 	return __webpack_require__(__webpack_require__.s = 16);
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

/***/ 16:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("89bT");


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

/***/ "89bT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("/T1H");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Exp3");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const UserDetails = next_dynamic__WEBPACK_IMPORTED_MODULE_0___default()(() => __webpack_require__.e(/* import() */ 101).then(__webpack_require__.bind(null, "KEcA")), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("KEcA")],
    modules: ['../components/consult-tabs/UserDetails']
  }
});
const PersonalDetails = next_dynamic__WEBPACK_IMPORTED_MODULE_0___default()(() => __webpack_require__.e(/* import() */ 99).then(__webpack_require__.bind(null, "YguY")), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("YguY")],
    modules: ['../components/consult-tabs/PersonalDetails']
  }
});
const Success = next_dynamic__WEBPACK_IMPORTED_MODULE_0___default()(() => __webpack_require__.e(/* import() */ 84).then(__webpack_require__.bind(null, "ST00")), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("ST00")],
    modules: ['../components/consult-tabs/Success']
  }
});
const Layout = next_dynamic__WEBPACK_IMPORTED_MODULE_0___default()(() => __webpack_require__.e(/* import() */ 8).then(__webpack_require__.bind(null, "Vw5z")), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("Vw5z")],
    modules: ['../components/Layouts/Layout']
  }
});
const Scheduling = next_dynamic__WEBPACK_IMPORTED_MODULE_0___default()(() => __webpack_require__.e(/* import() */ 100).then(__webpack_require__.bind(null, "zVbI")), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("zVbI")],
    modules: ["../components/consult-tabs/Scheduling"]
  }
});
const IntakeDetails = next_dynamic__WEBPACK_IMPORTED_MODULE_0___default()(() => __webpack_require__.e(/* import() */ 102).then(__webpack_require__.bind(null, "Nnx9")), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("Nnx9")],
    modules: ["../components/consult-tabs/intakeDetails"]
  }
});

const {
  TabPane
} = antd__WEBPACK_IMPORTED_MODULE_2__["Tabs"];

function callback(key) {
  console.log(key);
}

class MainForm extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      step: 1,
      firstName: '',
      lastName: '',
      email: '',
      dob: '',
      country: '',
      weight: '',
      state: '',
      phoneNumber: '',
      zipCode: ''
    });

    _defineProperty(this, "nextStep", () => {
      const {
        step
      } = this.state;
      this.setState({
        step: step + 1
      });
    });

    _defineProperty(this, "prevStep", () => {
      const {
        step
      } = this.state;
      this.setState({
        step: step - 1
      });
    });

    _defineProperty(this, "handleChange", input => event => {
      this.setState({
        [input]: event.target.value
      });
    });
  }

  render() {
    const {
      step
    } = this.state;
    console.log({
      step
    });
    const {
      firstName,
      lastName,
      phoneNumber,
      zipCode,
      state,
      weight,
      age,
      notes
    } = this.state;
    const values = {
      firstName,
      lastName,
      phoneNumber,
      zipCode,
      state,
      weight,
      age,
      notes
    };
    return __jsx(Layout, {
      headerVersions: ['bg-light'],
      headerTheme: "dark",
      fixed: true
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Tabs"], {
      className: "c-consultTabs",
      activeKey: step.toString(),
      defaultActiveKey: step,
      onChange: callback
    }, __jsx(TabPane, {
      tab: "Login",
      key: "1"
    }, __jsx("div", {
      className: "c-privacy__page-title"
    }, __jsx(UserDetails, {
      nextStep: this.nextStep,
      handleChange: this.handleChange,
      values: values
    }))), __jsx(TabPane, {
      tab: "Personal Details",
      key: "2"
    }, __jsx("div", {
      className: "c-privacy__page-title"
    }), __jsx(PersonalDetails, {
      nextStep: this.nextStep,
      prevStep: this.prevStep,
      handleChange: this.handleChange,
      values: values
    })), __jsx(TabPane, {
      tab: "Scheduling",
      key: "3"
    }, __jsx(Scheduling, {
      nextStep: this.nextStep,
      prevStep: this.prevStep,
      handleChange: this.handleChange,
      values: values
    })), __jsx(TabPane, {
      tab: "Intake Details",
      key: "4"
    }, __jsx(IntakeDetails, {
      nextStep: this.nextStep,
      prevStep: this.prevStep,
      handleChange: this.handleChange,
      values: values
    })), __jsx(TabPane, {
      tab: "Confirmation",
      key: "5"
    }, __jsx(Success, {
      values: values
    }))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (MainForm);

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

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });