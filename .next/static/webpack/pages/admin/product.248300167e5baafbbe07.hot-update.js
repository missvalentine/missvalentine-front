webpackHotUpdate_N_E("pages/admin/product",{

/***/ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/inheritsLoose.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
false,

/***/ "./node_modules/@emotion/cache/dist/cache.browser.esm.js":
false,

/***/ "./node_modules/@emotion/core/dist/core.browser.esm.js":
false,

/***/ "./node_modules/@emotion/core/dist/emotion-element-57a3a7a3.browser.esm.js":
false,

/***/ "./node_modules/@emotion/css/dist/css.browser.esm.js":
false,

/***/ "./node_modules/@emotion/hash/dist/hash.browser.esm.js":
false,

/***/ "./node_modules/@emotion/memoize/dist/memoize.browser.esm.js":
false,

/***/ "./node_modules/@emotion/serialize/dist/serialize.browser.esm.js":
false,

/***/ "./node_modules/@emotion/sheet/dist/sheet.browser.esm.js":
false,

/***/ "./node_modules/@emotion/stylis/dist/stylis.browser.esm.js":
false,

/***/ "./node_modules/@emotion/unitless/dist/unitless.browser.esm.js":
false,

/***/ "./node_modules/@emotion/utils/dist/utils.browser.esm.js":
false,

/***/ "./node_modules/@emotion/weak-memoize/dist/weak-memoize.browser.esm.js":
false,

/***/ "./node_modules/react-toast-notifications/dist/ToastContainer.js":
false,

/***/ "./node_modules/react-toast-notifications/dist/ToastController.js":
false,

/***/ "./node_modules/react-toast-notifications/dist/ToastElement.js":
false,

/***/ "./node_modules/react-toast-notifications/dist/ToastProvider.js":
false,

/***/ "./node_modules/react-toast-notifications/dist/colors.js":
false,

/***/ "./node_modules/react-toast-notifications/dist/icons.js":
false,

/***/ "./node_modules/react-toast-notifications/dist/index.js":
false,

/***/ "./node_modules/react-toast-notifications/dist/utils.js":
false,

/***/ "./node_modules/react-transition-group/esm/CSSTransition.js":
false,

/***/ "./node_modules/react-transition-group/esm/ReplaceTransition.js":
false,

/***/ "./node_modules/react-transition-group/esm/SwitchTransition.js":
false,

/***/ "./node_modules/react-transition-group/esm/Transition.js":
false,

/***/ "./node_modules/react-transition-group/esm/TransitionGroup.js":
false,

/***/ "./node_modules/react-transition-group/esm/TransitionGroupContext.js":
false,

/***/ "./node_modules/react-transition-group/esm/config.js":
false,

/***/ "./node_modules/react-transition-group/esm/index.js":
false,

/***/ "./node_modules/react-transition-group/esm/utils/ChildMapping.js":
false,

/***/ "./node_modules/react-transition-group/esm/utils/PropTypes.js":
false,

/***/ "./node_modules/react-transition-group/node_modules/dom-helpers/esm/addClass.js":
false,

/***/ "./node_modules/react-transition-group/node_modules/dom-helpers/esm/hasClass.js":
false,

/***/ "./node_modules/react-transition-group/node_modules/dom-helpers/esm/removeClass.js":
false,

/***/ "./pages/admin/product/index.js":
/*!**************************************!*\
  !*** ./pages/admin/product/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ManageCategory; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/icons */ \"./node_modules/@ant-design/icons/es/index.js\");\n/* harmony import */ var _components_admin_AdminLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/admin/AdminLayout */ \"./components/admin/AdminLayout.js\");\n/* harmony import */ var _components_styles_app_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/styles/app.scss */ \"./components/styles/app.scss\");\n/* harmony import */ var _components_styles_app_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_components_styles_app_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _services_apis_admin_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/apis/admin.js */ \"./services/apis/admin.js\");\nvar _jsxFileName = \"/Users/akshataggarwal/Documents/Coding Files/webd projects/missvalentine-front/pages/admin/product/index.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\nvar Panel = antd__WEBPACK_IMPORTED_MODULE_1__[\"Collapse\"].Panel;\nfunction ManageCategory() {\n  _s();\n\n  var _this = this;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]),\n      products = _useState[0],\n      setProducts = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    Object(_services_apis_admin_js__WEBPACK_IMPORTED_MODULE_5__[\"getAllProducts\"])().then(function (res) {\n      return res && res.data && setProducts(res.data.data);\n    });\n  }, []);\n\n  var handleDeleteCategory = function handleDeleteCategory(id) {\n    Object(_services_apis_admin_js__WEBPACK_IMPORTED_MODULE_5__[\"deleteProduct\"])(id).then();\n  };\n\n  return __jsx(_components_admin_AdminLayout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 5\n    }\n  }, __jsx(\"h3\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 7\n    }\n  }, \"Manage Products\"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__[\"Collapse\"], {\n    expandIconPosition: \"right\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 7\n    }\n  }, products.map(function (c, i) {\n    return __jsx(Panel, {\n      showArrow: false,\n      header: c.name,\n      key: i,\n      extra: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__[\"DeleteOutlined\"], {\n        onClick: function onClick() {\n          return handleDeleteCategory(c._id);\n        },\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 32,\n          columnNumber: 15\n        }\n      }),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 11\n      }\n    }, __jsx(\"p\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 13\n      }\n    }, 'text'));\n  })));\n}\n\n_s(ManageCategory, \"f86L6rLANGURv6GE6gupp7+oOp4=\");\n\n_c = ManageCategory;\n\nvar _c;\n\n$RefreshReg$(_c, \"ManageCategory\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWRtaW4vcHJvZHVjdC9pbmRleC5qcz8yZGY0Il0sIm5hbWVzIjpbIlBhbmVsIiwiQ29sbGFwc2UiLCJNYW5hZ2VDYXRlZ29yeSIsInVzZVN0YXRlIiwicHJvZHVjdHMiLCJzZXRQcm9kdWN0cyIsInVzZUVmZmVjdCIsImdldEFsbFByb2R1Y3RzIiwidGhlbiIsInJlcyIsImRhdGEiLCJoYW5kbGVEZWxldGVDYXRlZ29yeSIsImlkIiwiZGVsZXRlUHJvZHVjdCIsIm1hcCIsImMiLCJpIiwibmFtZSIsIl9pZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7SUFFUUEsSyxHQUFVQyw2QyxDQUFWRCxLO0FBRU8sU0FBU0UsY0FBVCxHQUEwQjtBQUFBOztBQUFBOztBQUFBLGtCQUNQQyxzREFBUSxDQUFDLEVBQUQsQ0FERDtBQUFBLE1BQ2hDQyxRQURnQztBQUFBLE1BQ3RCQyxXQURzQjs7QUFHdkNDLHlEQUFTLENBQUMsWUFBTTtBQUNkQyxrRkFBYyxHQUFHQyxJQUFqQixDQUNFLFVBQUNDLEdBQUQ7QUFBQSxhQUFTQSxHQUFHLElBQUlBLEdBQUcsQ0FBQ0MsSUFBWCxJQUFtQkwsV0FBVyxDQUFDSSxHQUFHLENBQUNDLElBQUosQ0FBU0EsSUFBVixDQUF2QztBQUFBLEtBREY7QUFHRCxHQUpRLEVBSU4sRUFKTSxDQUFUOztBQUtBLE1BQU1DLG9CQUFvQixHQUFHLFNBQXZCQSxvQkFBdUIsQ0FBQ0MsRUFBRCxFQUFRO0FBQ25DQyxpRkFBYSxDQUFDRCxFQUFELENBQWIsQ0FBa0JKLElBQWxCO0FBQ0QsR0FGRDs7QUFJQSxTQUNFLE1BQUMscUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREYsRUFFRSxNQUFDLDZDQUFEO0FBQVUsc0JBQWtCLEVBQUMsT0FBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHSixRQUFRLENBQUNVLEdBQVQsQ0FBYSxVQUFDQyxDQUFELEVBQUlDLENBQUo7QUFBQSxXQUNaLE1BQUMsS0FBRDtBQUNFLGVBQVMsRUFBRSxLQURiO0FBRUUsWUFBTSxFQUFFRCxDQUFDLENBQUNFLElBRlo7QUFHRSxTQUFHLEVBQUVELENBSFA7QUFJRSxXQUFLLEVBQ0gsTUFBQyxnRUFBRDtBQUFnQixlQUFPLEVBQUU7QUFBQSxpQkFBTUwsb0JBQW9CLENBQUNJLENBQUMsQ0FBQ0csR0FBSCxDQUExQjtBQUFBLFNBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFMSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BUUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFJLE1BQUosQ0FSRixDQURZO0FBQUEsR0FBYixDQURILENBRkYsQ0FERjtBQW1CRDs7R0EvQnVCaEIsYzs7S0FBQUEsYyIsImZpbGUiOiIuL3BhZ2VzL2FkbWluL3Byb2R1Y3QvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IENvbGxhcHNlIH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgeyBEZWxldGVPdXRsaW5lZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcbmltcG9ydCBBZG1pbkxheW91dCBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2FkbWluL0FkbWluTGF5b3V0JztcbmltcG9ydCAnLi4vLi4vLi4vY29tcG9uZW50cy9zdHlsZXMvYXBwLnNjc3MnO1xuaW1wb3J0IHsgZ2V0QWxsUHJvZHVjdHMsIGRlbGV0ZVByb2R1Y3QgfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9hcGlzL2FkbWluLmpzJztcblxuY29uc3QgeyBQYW5lbCB9ID0gQ29sbGFwc2U7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1hbmFnZUNhdGVnb3J5KCkge1xuICBjb25zdCBbcHJvZHVjdHMsIHNldFByb2R1Y3RzXSA9IHVzZVN0YXRlKFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGdldEFsbFByb2R1Y3RzKCkudGhlbihcbiAgICAgIChyZXMpID0+IHJlcyAmJiByZXMuZGF0YSAmJiBzZXRQcm9kdWN0cyhyZXMuZGF0YS5kYXRhKVxuICAgICk7XG4gIH0sIFtdKTtcbiAgY29uc3QgaGFuZGxlRGVsZXRlQ2F0ZWdvcnkgPSAoaWQpID0+IHtcbiAgICBkZWxldGVQcm9kdWN0KGlkKS50aGVuKCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8QWRtaW5MYXlvdXQ+XG4gICAgICA8aDM+TWFuYWdlIFByb2R1Y3RzPC9oMz5cbiAgICAgIDxDb2xsYXBzZSBleHBhbmRJY29uUG9zaXRpb249XCJyaWdodFwiPlxuICAgICAgICB7cHJvZHVjdHMubWFwKChjLCBpKSA9PiAoXG4gICAgICAgICAgPFBhbmVsXG4gICAgICAgICAgICBzaG93QXJyb3c9e2ZhbHNlfVxuICAgICAgICAgICAgaGVhZGVyPXtjLm5hbWV9XG4gICAgICAgICAgICBrZXk9e2l9XG4gICAgICAgICAgICBleHRyYT17XG4gICAgICAgICAgICAgIDxEZWxldGVPdXRsaW5lZCBvbkNsaWNrPXsoKSA9PiBoYW5kbGVEZWxldGVDYXRlZ29yeShjLl9pZCl9IC8+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHA+eyd0ZXh0J308L3A+XG4gICAgICAgICAgPC9QYW5lbD5cbiAgICAgICAgKSl9XG4gICAgICA8L0NvbGxhcHNlPlxuICAgIDwvQWRtaW5MYXlvdXQ+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/admin/product/index.js\n");

/***/ })

})