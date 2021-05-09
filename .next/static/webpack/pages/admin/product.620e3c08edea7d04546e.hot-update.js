webpackHotUpdate_N_E("pages/admin/product",{

/***/ "./pages/admin/product/index.js":
/*!**************************************!*\
  !*** ./pages/admin/product/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ManageCategory; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/icons */ \"./node_modules/@ant-design/icons/es/index.js\");\n/* harmony import */ var _components_admin_AdminLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/admin/AdminLayout */ \"./components/admin/AdminLayout.js\");\n/* harmony import */ var _components_styles_app_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/styles/app.scss */ \"./components/styles/app.scss\");\n/* harmony import */ var _components_styles_app_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_components_styles_app_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _services_apis_admin_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/apis/admin.js */ \"./services/apis/admin.js\");\nvar _jsxFileName = \"/Users/akshataggarwal/Documents/Coding Files/webd projects/missvalentine-front/pages/admin/product/index.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\nvar Panel = antd__WEBPACK_IMPORTED_MODULE_1__[\"Collapse\"].Panel;\nfunction ManageCategory(props) {\n  _s();\n\n  var _this = this;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]),\n      products = _useState[0],\n      setProducts = _useState[1];\n\n  var handleGetAllProducts = function handleGetAllProducts() {\n    return Object(_services_apis_admin_js__WEBPACK_IMPORTED_MODULE_5__[\"getAllProducts\"])().then(function (_ref) {\n      var data = _ref.data;\n      return data.success && setProducts(data.data);\n    });\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    handleGetAllProducts();\n  }, []);\n\n  var handleDeleteCategory = function handleDeleteCategory(id) {\n    Object(_services_apis_admin_js__WEBPACK_IMPORTED_MODULE_5__[\"deleteProduct\"])(id).then(function (_ref2) {\n      var data = _ref2.data;\n\n      if (data.success) {\n        antd__WEBPACK_IMPORTED_MODULE_1__[\"notification\"].success({\n          message: data.message\n        });\n      } else antd__WEBPACK_IMPORTED_MODULE_1__[\"notification\"].success({\n        message: data.message\n      });\n    });\n    handleGetAllProducts();\n  };\n\n  return __jsx(_components_admin_AdminLayout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 5\n    }\n  }, __jsx(\"h3\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 7\n    }\n  }, \"Manage Products\"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__[\"Collapse\"], {\n    expandIconPosition: \"right\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 7\n    }\n  }, products && products.length > 0 && products.map(function (c, i) {\n    return __jsx(Panel, {\n      showArrow: false,\n      header: \"#\".concat(c._id, \" \").concat(c.name),\n      key: i,\n      extra: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__[\"DeleteOutlined\"], {\n        onClick: function onClick() {\n          return handleDeleteCategory(c._id);\n        },\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 40,\n          columnNumber: 17\n        }\n      }),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 13\n      }\n    }, __jsx(\"p\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 15\n      }\n    }, c.shortDesc));\n  })));\n}\n\n_s(ManageCategory, \"f86L6rLANGURv6GE6gupp7+oOp4=\");\n\n_c = ManageCategory;\n\nvar _c;\n\n$RefreshReg$(_c, \"ManageCategory\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWRtaW4vcHJvZHVjdC9pbmRleC5qcz8yZGY0Il0sIm5hbWVzIjpbIlBhbmVsIiwiQ29sbGFwc2UiLCJNYW5hZ2VDYXRlZ29yeSIsInByb3BzIiwidXNlU3RhdGUiLCJwcm9kdWN0cyIsInNldFByb2R1Y3RzIiwiaGFuZGxlR2V0QWxsUHJvZHVjdHMiLCJnZXRBbGxQcm9kdWN0cyIsInRoZW4iLCJkYXRhIiwic3VjY2VzcyIsInVzZUVmZmVjdCIsImhhbmRsZURlbGV0ZUNhdGVnb3J5IiwiaWQiLCJkZWxldGVQcm9kdWN0Iiwibm90aWZpY2F0aW9uIiwibWVzc2FnZSIsImxlbmd0aCIsIm1hcCIsImMiLCJpIiwiX2lkIiwibmFtZSIsInNob3J0RGVzYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7SUFFUUEsSyxHQUFVQyw2QyxDQUFWRCxLO0FBRU8sU0FBU0UsY0FBVCxDQUF3QkMsS0FBeEIsRUFBK0I7QUFBQTs7QUFBQTs7QUFBQSxrQkFDWkMsc0RBQVEsQ0FBQyxFQUFELENBREk7QUFBQSxNQUNyQ0MsUUFEcUM7QUFBQSxNQUMzQkMsV0FEMkI7O0FBRzVDLE1BQU1DLG9CQUFvQixHQUFHLFNBQXZCQSxvQkFBdUI7QUFBQSxXQUMzQkMsOEVBQWMsR0FBR0MsSUFBakIsQ0FBc0I7QUFBQSxVQUFHQyxJQUFILFFBQUdBLElBQUg7QUFBQSxhQUFjQSxJQUFJLENBQUNDLE9BQUwsSUFBZ0JMLFdBQVcsQ0FBQ0ksSUFBSSxDQUFDQSxJQUFOLENBQXpDO0FBQUEsS0FBdEIsQ0FEMkI7QUFBQSxHQUE3Qjs7QUFHQUUseURBQVMsQ0FBQyxZQUFNO0FBQ2RMLHdCQUFvQjtBQUNyQixHQUZRLEVBRU4sRUFGTSxDQUFUOztBQUdBLE1BQU1NLG9CQUFvQixHQUFHLFNBQXZCQSxvQkFBdUIsQ0FBQ0MsRUFBRCxFQUFRO0FBQ25DQyxpRkFBYSxDQUFDRCxFQUFELENBQWIsQ0FBa0JMLElBQWxCLENBQXVCLGlCQUFjO0FBQUEsVUFBWEMsSUFBVyxTQUFYQSxJQUFXOztBQUNuQyxVQUFJQSxJQUFJLENBQUNDLE9BQVQsRUFBa0I7QUFDaEJLLHlEQUFZLENBQUNMLE9BQWIsQ0FBcUI7QUFBRU0saUJBQU8sRUFBRVAsSUFBSSxDQUFDTztBQUFoQixTQUFyQjtBQUNELE9BRkQsTUFFT0QsaURBQVksQ0FBQ0wsT0FBYixDQUFxQjtBQUFFTSxlQUFPLEVBQUVQLElBQUksQ0FBQ087QUFBaEIsT0FBckI7QUFDUixLQUpEO0FBS0FWLHdCQUFvQjtBQUNyQixHQVBEOztBQVNBLFNBQ0UsTUFBQyxxRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERixFQUVFLE1BQUMsNkNBQUQ7QUFBVSxzQkFBa0IsRUFBQyxPQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dGLFFBQVEsSUFDUEEsUUFBUSxDQUFDYSxNQUFULEdBQWtCLENBRG5CLElBRUNiLFFBQVEsQ0FBQ2MsR0FBVCxDQUFhLFVBQUNDLENBQUQsRUFBSUMsQ0FBSjtBQUFBLFdBQ1gsTUFBQyxLQUFEO0FBQ0UsZUFBUyxFQUFFLEtBRGI7QUFFRSxZQUFNLGFBQU1ELENBQUMsQ0FBQ0UsR0FBUixjQUFlRixDQUFDLENBQUNHLElBQWpCLENBRlI7QUFHRSxTQUFHLEVBQUVGLENBSFA7QUFJRSxXQUFLLEVBQ0gsTUFBQyxnRUFBRDtBQUFnQixlQUFPLEVBQUU7QUFBQSxpQkFBTVIsb0JBQW9CLENBQUNPLENBQUMsQ0FBQ0UsR0FBSCxDQUExQjtBQUFBLFNBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFMSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BUUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFJRixDQUFDLENBQUNJLFNBQU4sQ0FSRixDQURXO0FBQUEsR0FBYixDQUhKLENBRkYsQ0FERjtBQXFCRDs7R0F2Q3VCdEIsYzs7S0FBQUEsYyIsImZpbGUiOiIuL3BhZ2VzL2FkbWluL3Byb2R1Y3QvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IENvbGxhcHNlLCBub3RpZmljYXRpb24sIG1lc3NhZ2UgfSBmcm9tICdhbnRkJztcbmltcG9ydCB7IERlbGV0ZU91dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xuaW1wb3J0IEFkbWluTGF5b3V0IGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvYWRtaW4vQWRtaW5MYXlvdXQnO1xuaW1wb3J0ICcuLi8uLi8uLi9jb21wb25lbnRzL3N0eWxlcy9hcHAuc2Nzcyc7XG5pbXBvcnQgeyBnZXRBbGxQcm9kdWN0cywgZGVsZXRlUHJvZHVjdCB9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL2FwaXMvYWRtaW4uanMnO1xuXG5jb25zdCB7IFBhbmVsIH0gPSBDb2xsYXBzZTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWFuYWdlQ2F0ZWdvcnkocHJvcHMpIHtcbiAgY29uc3QgW3Byb2R1Y3RzLCBzZXRQcm9kdWN0c10gPSB1c2VTdGF0ZShbXSk7XG5cbiAgY29uc3QgaGFuZGxlR2V0QWxsUHJvZHVjdHMgPSAoKSA9PlxuICAgIGdldEFsbFByb2R1Y3RzKCkudGhlbigoeyBkYXRhIH0pID0+IGRhdGEuc3VjY2VzcyAmJiBzZXRQcm9kdWN0cyhkYXRhLmRhdGEpKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGhhbmRsZUdldEFsbFByb2R1Y3RzKCk7XG4gIH0sIFtdKTtcbiAgY29uc3QgaGFuZGxlRGVsZXRlQ2F0ZWdvcnkgPSAoaWQpID0+IHtcbiAgICBkZWxldGVQcm9kdWN0KGlkKS50aGVuKCh7IGRhdGEgfSkgPT4ge1xuICAgICAgaWYgKGRhdGEuc3VjY2Vzcykge1xuICAgICAgICBub3RpZmljYXRpb24uc3VjY2Vzcyh7IG1lc3NhZ2U6IGRhdGEubWVzc2FnZSB9KTtcbiAgICAgIH0gZWxzZSBub3RpZmljYXRpb24uc3VjY2Vzcyh7IG1lc3NhZ2U6IGRhdGEubWVzc2FnZSB9KTtcbiAgICB9KTtcbiAgICBoYW5kbGVHZXRBbGxQcm9kdWN0cygpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPEFkbWluTGF5b3V0PlxuICAgICAgPGgzPk1hbmFnZSBQcm9kdWN0czwvaDM+XG4gICAgICA8Q29sbGFwc2UgZXhwYW5kSWNvblBvc2l0aW9uPVwicmlnaHRcIj5cbiAgICAgICAge3Byb2R1Y3RzICYmXG4gICAgICAgICAgcHJvZHVjdHMubGVuZ3RoID4gMCAmJlxuICAgICAgICAgIHByb2R1Y3RzLm1hcCgoYywgaSkgPT4gKFxuICAgICAgICAgICAgPFBhbmVsXG4gICAgICAgICAgICAgIHNob3dBcnJvdz17ZmFsc2V9XG4gICAgICAgICAgICAgIGhlYWRlcj17YCMke2MuX2lkfSAke2MubmFtZX1gfVxuICAgICAgICAgICAgICBrZXk9e2l9XG4gICAgICAgICAgICAgIGV4dHJhPXtcbiAgICAgICAgICAgICAgICA8RGVsZXRlT3V0bGluZWQgb25DbGljaz17KCkgPT4gaGFuZGxlRGVsZXRlQ2F0ZWdvcnkoYy5faWQpfSAvPlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxwPntjLnNob3J0RGVzY308L3A+XG4gICAgICAgICAgICA8L1BhbmVsPlxuICAgICAgICAgICkpfVxuICAgICAgPC9Db2xsYXBzZT5cbiAgICA8L0FkbWluTGF5b3V0PlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/admin/product/index.js\n");

/***/ })

})