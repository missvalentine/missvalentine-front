(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[23],{

/***/ "./components/SubscribeForm.js":
/*!*************************************!*\
  !*** ./components/SubscribeForm.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dist/next-server/lib/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/akshataggarwal/Documents/Coding Files/webd projects/missvalentine-front/components/SubscribeForm.js\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nvar Button = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(_c = function _c() {\n  return __webpack_require__.e(/*! import() */ 2).then(__webpack_require__.bind(null, /*! ./form-components/Button */ \"./components/form-components/Button.js\"));\n}, {\n  loadableGenerated: {\n    webpack: function webpack() {\n      return [/*require.resolve*/(/*! ./form-components/Button */ \"./components/form-components/Button.js\")];\n    },\n    modules: [\"./form-components/Button\"]\n  }\n});\n_c2 = Button;\nvar EmailReg = new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{0,15}/g);\n\n\nvar SubscribeForm = function SubscribeForm(_ref) {\n  var email = _ref.email,\n      onEmailChange = _ref.onEmailChange,\n      subscribeUser = _ref.subscribeUser;\n  return __jsx(\"div\", {\n    className: \"c-subscribe-from\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 3\n    }\n  }, __jsx(\"form\", {\n    onSubmit: function onSubmit(e) {\n      subscribeUser(e, email);\n    },\n    className: \"c-subscribe-from__from\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 5\n    }\n  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__[\"Input\"], {\n    className: \"c-subscribe-from__input \",\n    type: \"email\",\n    value: email,\n    placeholder: \"your e-mail\",\n    onChange: onEmailChange,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 7\n    }\n  }), __jsx(Button, {\n    type: \"submit\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 7\n    }\n  }, \"Subscribe\")));\n};\n\n_c3 = SubscribeForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SubscribeForm);\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"Button$dynamic\");\n$RefreshReg$(_c2, \"Button\");\n$RefreshReg$(_c3, \"SubscribeForm\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TdWJzY3JpYmVGb3JtLmpzP2JiMmQiXSwibmFtZXMiOlsiQnV0dG9uIiwiZHluYW1pYyIsIkVtYWlsUmVnIiwiUmVnRXhwIiwiU3Vic2NyaWJlRm9ybSIsImVtYWlsIiwib25FbWFpbENoYW5nZSIsInN1YnNjcmliZVVzZXIiLCJlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQSxJQUFNQSxNQUFNLEdBQUdDLG1EQUFPLE1BQUM7QUFBQSxTQUFNLHVKQUFOO0FBQUEsQ0FBRDtBQUFBO0FBQUE7QUFBQSxrQ0FBYyx3RUFBZDtBQUFBO0FBQUEsY0FBYywwQkFBZDtBQUFBO0FBQUEsRUFBdEI7TUFBTUQsTTtBQUNOLElBQU1FLFFBQVEsR0FBRyxJQUFJQyxNQUFKLENBQVcsMENBQVgsQ0FBakI7QUFDQTs7QUFFQSxJQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLE9BQTRDO0FBQUEsTUFBekNDLEtBQXlDLFFBQXpDQSxLQUF5QztBQUFBLE1BQWxDQyxhQUFrQyxRQUFsQ0EsYUFBa0M7QUFBQSxNQUFuQkMsYUFBbUIsUUFBbkJBLGFBQW1CO0FBQ2hFLFNBQ0E7QUFBSyxhQUFTLEVBQUMsa0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQ0UsWUFBUSxFQUFFLGtCQUFDQyxDQUFELEVBQU07QUFDZkQsbUJBQWEsQ0FBQ0MsQ0FBRCxFQUFJSCxLQUFKLENBQWI7QUFBd0IsS0FGM0I7QUFHRSxhQUFTLEVBQUMsd0JBSFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUtFLE1BQUMsMENBQUQ7QUFDRSxhQUFTLEVBQUMsMEJBRFo7QUFFRSxRQUFJLEVBQUMsT0FGUDtBQUdFLFNBQUssRUFBRUEsS0FIVDtBQUlFLGVBQVcsRUFBQyxhQUpkO0FBS0UsWUFBUSxFQUFFQyxhQUxaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFMRixFQWFFLE1BQUMsTUFBRDtBQUFRLFFBQUksRUFBQyxRQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBYkYsQ0FERixDQURBO0FBbUJELENBcEJEOztNQUFNRixhO0FBcUJTQSw0RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvU3Vic2NyaWJlRm9ybS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBkeW5hbWljIGZyb20gJ25leHQvZHluYW1pYydcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5jb25zdCBCdXR0b24gPSBkeW5hbWljKCgpID0+IGltcG9ydChcIi4vZm9ybS1jb21wb25lbnRzL0J1dHRvblwiKSk7XG5jb25zdCBFbWFpbFJlZyA9IG5ldyBSZWdFeHAoL1thLXowLTkuXyUrLV0rQFthLXowLTkuLV0rXFwuW2Etel17MCwxNX0vZyk7XG5pbXBvcnQge0lucHV0fSBmcm9tIFwiYW50ZFwiXG5cbmNvbnN0IFN1YnNjcmliZUZvcm0gPSAoeyBlbWFpbCwgb25FbWFpbENoYW5nZSwgc3Vic2NyaWJlVXNlciB9KSA9PnsgXG4gIHJldHVybiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwiYy1zdWJzY3JpYmUtZnJvbVwiPlxuICAgIDxmb3JtXG4gICAgICBvblN1Ym1pdD17KGUpID0+eyBcbiAgICAgICBzdWJzY3JpYmVVc2VyKGUsIGVtYWlsKX19XG4gICAgICBjbGFzc05hbWU9XCJjLXN1YnNjcmliZS1mcm9tX19mcm9tXCJcbiAgICA+XG4gICAgICA8SW5wdXRcbiAgICAgICAgY2xhc3NOYW1lPVwiYy1zdWJzY3JpYmUtZnJvbV9faW5wdXQgXCJcbiAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgdmFsdWU9e2VtYWlsfVxuICAgICAgICBwbGFjZWhvbGRlcj1cInlvdXIgZS1tYWlsXCJcbiAgICAgICAgb25DaGFuZ2U9e29uRW1haWxDaGFuZ2V9XG4gICAgICAvPlxuICAgICAgXG4gICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5TdWJzY3JpYmU8L0J1dHRvbj5cbiAgICA8L2Zvcm0+XG4gIDwvZGl2PlxuKTtcbn1cbmV4cG9ydCBkZWZhdWx0IFN1YnNjcmliZUZvcm07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/SubscribeForm.js\n");

/***/ })

}]);