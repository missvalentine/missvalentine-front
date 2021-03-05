(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[41],{

/***/ "./pages/consult/topBanner.js":
/*!************************************!*\
  !*** ./pages/consult/topBanner.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-lazy-load-image-component */ \"./node_modules/react-lazy-load-image-component/build/index.js\");\n/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/akshataggarwal/Documents/Coding Files/webd projects/missnew front/pages/consult/topBanner.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nfunction TopBanner(_ref) {\n  var data = _ref.data;\n  var title = data.title,\n      subTitle = data.subTitle,\n      content = data.content;\n  return __jsx(\"div\", {\n    className: \"consult-banner--upper\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: \"consult-banner--upper--txt\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 7\n    }\n  }, __jsx(\"p\", {\n    className: \"consult-banner--upper--txt--heading\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 9\n    }\n  }, title), __jsx(\"p\", {\n    className: \"consult-banner--upper--txt--subHeading\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 9\n    }\n  }, subTitle), __jsx(\"p\", {\n    className: \"consult-banner--upper--txt--para\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 9\n    }\n  }, content)), __jsx(\"div\", {\n    className: \"consult-banner--upper--img\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }\n  }, __jsx(\"img\", {\n    src: \"/images/stress.png\",\n    alt: \"\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 9\n    }\n  }), __jsx(\"img\", {\n    src: \"/images/pain.png\",\n    alt: \"\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 9\n    }\n  }), __jsx(\"img\", {\n    src: \"/images/anxiety.png\",\n    alt: \"\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 9\n    }\n  }), __jsx(\"img\", {\n    src: \"/images/insomnia.png\",\n    alt: \"\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 9\n    }\n  })));\n}\n\n_c = TopBanner;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TopBanner);\n\nvar _c;\n\n$RefreshReg$(_c, \"TopBanner\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29uc3VsdC90b3BCYW5uZXIuanM/NGE4OSJdLCJuYW1lcyI6WyJUb3BCYW5uZXIiLCJkYXRhIiwidGl0bGUiLCJzdWJUaXRsZSIsImNvbnRlbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLFNBQVNBLFNBQVQsT0FBNkI7QUFBQSxNQUFSQyxJQUFRLFFBQVJBLElBQVE7QUFBQSxNQUNuQkMsS0FEbUIsR0FDVUQsSUFEVixDQUNuQkMsS0FEbUI7QUFBQSxNQUNaQyxRQURZLEdBQ1VGLElBRFYsQ0FDWkUsUUFEWTtBQUFBLE1BQ0ZDLE9BREUsR0FDVUgsSUFEVixDQUNGRyxPQURFO0FBRTNCLFNBQ0U7QUFBSyxhQUFTLEVBQUMsdUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLDRCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLGFBQVMsRUFBQyxxQ0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQW9ERixLQUFwRCxDQURGLEVBRUU7QUFBRyxhQUFTLEVBQUMsd0NBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUF1REMsUUFBdkQsQ0FGRixFQUdFO0FBQUcsYUFBUyxFQUFDLGtDQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBaURDLE9BQWpELENBSEYsQ0FERixFQU1FO0FBQUssYUFBUyxFQUFDLDRCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLE9BQUcsRUFBQyxvQkFBVDtBQUE4QixPQUFHLEVBQUMsRUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUU7QUFBSyxPQUFHLEVBQUMsa0JBQVQ7QUFBNEIsT0FBRyxFQUFDLEVBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixFQUdFO0FBQUssT0FBRyxFQUFDLHFCQUFUO0FBQStCLE9BQUcsRUFBQyxFQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSEYsRUFJRTtBQUFLLE9BQUcsRUFBQyxzQkFBVDtBQUFnQyxPQUFHLEVBQUMsRUFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUpGLENBTkYsQ0FERjtBQWVEOztLQWpCUUosUztBQW1CTUEsd0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9jb25zdWx0L3RvcEJhbm5lci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IExhenlMb2FkSW1hZ2UgfSBmcm9tIFwicmVhY3QtbGF6eS1sb2FkLWltYWdlLWNvbXBvbmVudFwiO1xuXG5mdW5jdGlvbiBUb3BCYW5uZXIoeyBkYXRhIH0pIHtcbiAgY29uc3QgeyB0aXRsZSwgc3ViVGl0bGUsIGNvbnRlbnQgfSA9IGRhdGE7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb25zdWx0LWJhbm5lci0tdXBwZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29uc3VsdC1iYW5uZXItLXVwcGVyLS10eHRcIj5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwiY29uc3VsdC1iYW5uZXItLXVwcGVyLS10eHQtLWhlYWRpbmdcIj57dGl0bGV9PC9wPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJjb25zdWx0LWJhbm5lci0tdXBwZXItLXR4dC0tc3ViSGVhZGluZ1wiPntzdWJUaXRsZX08L3A+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImNvbnN1bHQtYmFubmVyLS11cHBlci0tdHh0LS1wYXJhXCI+e2NvbnRlbnR9PC9wPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnN1bHQtYmFubmVyLS11cHBlci0taW1nXCI+XG4gICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9zdHJlc3MucG5nXCIgYWx0PVwiXCIgLz5cbiAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL3BhaW4ucG5nXCIgYWx0PVwiXCIgLz5cbiAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2FueGlldHkucG5nXCIgYWx0PVwiXCIgLz5cbiAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2luc29tbmlhLnBuZ1wiIGFsdD1cIlwiIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgVG9wQmFubmVyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/consult/topBanner.js\n");

/***/ })

}]);