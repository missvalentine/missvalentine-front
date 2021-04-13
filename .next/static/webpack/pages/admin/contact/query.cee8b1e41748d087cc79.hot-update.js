webpackHotUpdate_N_E("pages/admin/contact/query",{

/***/ "./pages/admin/contact/query.js":
/*!**************************************!*\
  !*** ./pages/admin/contact/query.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return CheckQuery; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/icons */ \"./node_modules/@ant-design/icons/es/index.js\");\n/* harmony import */ var _components_admin_AdminLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/admin/AdminLayout */ \"./components/admin/AdminLayout.js\");\n/* harmony import */ var _components_styles_app_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/styles/app.scss */ \"./components/styles/app.scss\");\n/* harmony import */ var _components_styles_app_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_components_styles_app_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _services_apis_contact__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/apis/contact */ \"./services/apis/contact.js\");\nvar _jsxFileName = \"/Users/akshataggarwal/Documents/Coding Files/webd projects/missvalentine-front/pages/admin/contact/query.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\nvar Panel = antd__WEBPACK_IMPORTED_MODULE_1__[\"Collapse\"].Panel;\nfunction CheckQuery() {\n  _s();\n\n  var _this = this;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])({}),\n      queries = _useState[0],\n      setQueries = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    Object(_services_apis_contact__WEBPACK_IMPORTED_MODULE_5__[\"getAllQuery\"])().then(function (res) {\n      return res && res.data && setQueries(res.data);\n    });\n  }, []);\n\n  var handleDeleteCategory = function handleDeleteCategory(id) {// deleteCategory(id).then();\n  };\n\n  return __jsx(_components_admin_AdminLayout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 5\n    }\n  }, __jsx(\"h3\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }\n  }, \"Check Queries (\", queries.count, \")\"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__[\"Collapse\"], {\n    expandIconPosition: \"right\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 7\n    }\n  }, queries && queries.data && queries.data.map(function (c, i) {\n    return __jsx(Panel, {\n      showArrow: false,\n      header: \"  \".concat(c.subject, \"  \").concat(c.subject),\n      key: i,\n      extra: __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__[\"EditOutlined\"], {\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 34,\n          columnNumber: 21\n        }\n      }), __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__[\"DeleteOutlined\"], {\n        onClick: function onClick() {\n          return handleDeleteCategory(c._id);\n        },\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 35,\n          columnNumber: 21\n        }\n      })),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 15\n      }\n    }, __jsx(\"div\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 17\n      }\n    }, \"#\", c._id), __jsx(\"div\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 17\n      }\n    }));\n  })));\n}\n\n_s(CheckQuery, \"E0z2kbWKGQsmhdPMtTou/J7t2gc=\");\n\n_c = CheckQuery;\n\nvar _c;\n\n$RefreshReg$(_c, \"CheckQuery\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWRtaW4vY29udGFjdC9xdWVyeS5qcz9mYzk2Il0sIm5hbWVzIjpbIlBhbmVsIiwiQ29sbGFwc2UiLCJDaGVja1F1ZXJ5IiwidXNlU3RhdGUiLCJxdWVyaWVzIiwic2V0UXVlcmllcyIsInVzZUVmZmVjdCIsImdldEFsbFF1ZXJ5IiwidGhlbiIsInJlcyIsImRhdGEiLCJoYW5kbGVEZWxldGVDYXRlZ29yeSIsImlkIiwiY291bnQiLCJtYXAiLCJjIiwiaSIsInN1YmplY3QiLCJfaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0lBRVFBLEssR0FBVUMsNkMsQ0FBVkQsSztBQUVPLFNBQVNFLFVBQVQsR0FBc0I7QUFBQTs7QUFBQTs7QUFBQSxrQkFDTEMsc0RBQVEsQ0FBQyxFQUFELENBREg7QUFBQSxNQUM1QkMsT0FENEI7QUFBQSxNQUNuQkMsVUFEbUI7O0FBR25DQyx5REFBUyxDQUFDLFlBQU07QUFDZEMsOEVBQVcsR0FBR0MsSUFBZCxDQUFtQixVQUFDQyxHQUFEO0FBQUEsYUFBU0EsR0FBRyxJQUFJQSxHQUFHLENBQUNDLElBQVgsSUFBbUJMLFVBQVUsQ0FBQ0ksR0FBRyxDQUFDQyxJQUFMLENBQXRDO0FBQUEsS0FBbkI7QUFDRCxHQUZRLEVBRU4sRUFGTSxDQUFUOztBQUdBLE1BQU1DLG9CQUFvQixHQUFHLFNBQXZCQSxvQkFBdUIsQ0FBQ0MsRUFBRCxFQUFRLENBQ25DO0FBQ0QsR0FGRDs7QUFJQSxTQUNFLE1BQUMscUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBQW9CUixPQUFPLENBQUNTLEtBQTVCLE1BREYsRUFFRSxNQUFDLDZDQUFEO0FBQVUsc0JBQWtCLEVBQUMsT0FBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHVCxPQUFPLElBQ05BLE9BQU8sQ0FBQ00sSUFEVCxJQUVDTixPQUFPLENBQUNNLElBQVIsQ0FBYUksR0FBYixDQUFpQixVQUFDQyxDQUFELEVBQUlDLENBQUosRUFBVTtBQUN6QixXQUNFLE1BQUMsS0FBRDtBQUNFLGVBQVMsRUFBRSxLQURiO0FBRUUsWUFBTSxjQUFPRCxDQUFDLENBQUNFLE9BQVQsZUFBcUJGLENBQUMsQ0FBQ0UsT0FBdkIsQ0FGUjtBQUdFLFNBQUcsRUFBRUQsQ0FIUDtBQUlFLFdBQUssRUFDSCxtRUFDRSxNQUFDLDhEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFERixFQUVFLE1BQUMsZ0VBQUQ7QUFDRSxlQUFPLEVBQUU7QUFBQSxpQkFBTUwsb0JBQW9CLENBQUNJLENBQUMsQ0FBQ0csR0FBSCxDQUExQjtBQUFBLFNBRFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUZGLENBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQWFFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBT0gsQ0FBQyxDQUFDRyxHQUFULENBYkYsRUFjRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BZEYsQ0FERjtBQXNCRCxHQXZCRCxDQUhKLENBRkYsQ0FERjtBQWlDRDs7R0EzQ3VCaEIsVTs7S0FBQUEsVSIsImZpbGUiOiIuL3BhZ2VzL2FkbWluL2NvbnRhY3QvcXVlcnkuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IENvbGxhcHNlIH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgeyBEZWxldGVPdXRsaW5lZCwgRWRpdE91dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xuaW1wb3J0IEFkbWluTGF5b3V0IGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvYWRtaW4vQWRtaW5MYXlvdXQnO1xuaW1wb3J0ICcuLi8uLi8uLi9jb21wb25lbnRzL3N0eWxlcy9hcHAuc2Nzcyc7XG5pbXBvcnQgeyBnZXRBbGxRdWVyeSB9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL2FwaXMvY29udGFjdCc7XG5cbmNvbnN0IHsgUGFuZWwgfSA9IENvbGxhcHNlO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDaGVja1F1ZXJ5KCkge1xuICBjb25zdCBbcXVlcmllcywgc2V0UXVlcmllc10gPSB1c2VTdGF0ZSh7fSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBnZXRBbGxRdWVyeSgpLnRoZW4oKHJlcykgPT4gcmVzICYmIHJlcy5kYXRhICYmIHNldFF1ZXJpZXMocmVzLmRhdGEpKTtcbiAgfSwgW10pO1xuICBjb25zdCBoYW5kbGVEZWxldGVDYXRlZ29yeSA9IChpZCkgPT4ge1xuICAgIC8vIGRlbGV0ZUNhdGVnb3J5KGlkKS50aGVuKCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8QWRtaW5MYXlvdXQ+XG4gICAgICA8aDM+Q2hlY2sgUXVlcmllcyAoe3F1ZXJpZXMuY291bnR9KTwvaDM+XG4gICAgICA8Q29sbGFwc2UgZXhwYW5kSWNvblBvc2l0aW9uPVwicmlnaHRcIj5cbiAgICAgICAge3F1ZXJpZXMgJiZcbiAgICAgICAgICBxdWVyaWVzLmRhdGEgJiZcbiAgICAgICAgICBxdWVyaWVzLmRhdGEubWFwKChjLCBpKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8UGFuZWxcbiAgICAgICAgICAgICAgICBzaG93QXJyb3c9e2ZhbHNlfVxuICAgICAgICAgICAgICAgIGhlYWRlcj17YCAgJHtjLnN1YmplY3R9ICAke2Muc3ViamVjdH1gfVxuICAgICAgICAgICAgICAgIGtleT17aX1cbiAgICAgICAgICAgICAgICBleHRyYT17XG4gICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICA8RWRpdE91dGxpbmVkIC8+XG4gICAgICAgICAgICAgICAgICAgIDxEZWxldGVPdXRsaW5lZFxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZURlbGV0ZUNhdGVnb3J5KGMuX2lkKX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxkaXY+I3tjLl9pZH08L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgey8qIHtjLnN1YmNhdGVnb3JpZXMubWFwKChzLCBzaSkgPT4gKFxuICAgICAgICAgICAgICAgIDxzcGFuPntzLm5hbWV9PC9zcGFuPlxuICAgICAgICAgICAgICApKX0gKi99XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvUGFuZWw+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pfVxuICAgICAgPC9Db2xsYXBzZT5cbiAgICA8L0FkbWluTGF5b3V0PlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/admin/contact/query.js\n");

/***/ })

})