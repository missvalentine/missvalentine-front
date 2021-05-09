webpackHotUpdate_N_E(19,{

/***/ "./components/ProductSlider.js":
/*!*************************************!*\
  !*** ./components/ProductSlider.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_flickity_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-flickity-component */ \"./node_modules/react-flickity-component/lib/index.js\");\n/* harmony import */ var react_flickity_component__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_flickity_component__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dist/next-server/lib/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _services_helpers_product__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/helpers/product */ \"./services/helpers/product.js\");\n/* harmony import */ var _constants_projectSettings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../constants/projectSettings */ \"./constants/projectSettings.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/akshataggarwal/Documents/Coding Files/webd projects/missvalentine-front/components/ProductSlider.js\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\nvar Product = next_dynamic__WEBPACK_IMPORTED_MODULE_4___default()(_c = function _c() {\n  return __webpack_require__.e(/*! import() */ 22).then(__webpack_require__.bind(null, /*! ./Product */ \"./components/Product.js\"));\n}, {\n  loadableGenerated: {\n    webpack: function webpack() {\n      return [/*require.resolve*/(/*! ./Product */ \"./components/Product.js\")];\n    },\n    modules: ['./Product']\n  }\n});\n_c2 = Product;\n\n\n\n\nvar ProductSlider = function ProductSlider(_ref) {\n  var _classNames;\n\n  var parentClass = _ref.parentClass,\n      versions = _ref.versions,\n      products = _ref.products;\n  var componentClass = \"c-product-slider\";\n  var versionClass = versions.map(function (el) {\n    return \"\".concat(componentClass, \"--\").concat(el);\n  }).join(' ');\n  var parent = \"\".concat(parentClass, \"__\").concat(componentClass.replace('c-', ''));\n  var className = classnames__WEBPACK_IMPORTED_MODULE_2___default()(componentClass, (_classNames = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_classNames, versionClass, versions), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_classNames, parent, parentClass), _classNames)); // const products = useSelector((state) => state.products);\n\n  var flkty = undefined;\n  return __jsx(\"div\", {\n    className: className,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: \"\".concat(componentClass, \"__row row\"),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 7\n    }\n  }, __jsx(react_flickity_component__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    options: {\n      initialIndex: 0,\n      pageDots: false,\n      cellAlign: 'left',\n      // groupCells:3,\n      contain: true\n    },\n    flickityRef: function flickityRef(c) {\n      return flkty = c;\n    } // disableImagesLoaded={false}\n    ,\n    reloadOnUpdate: true,\n    className: \"c-category-products__slider\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 9\n    }\n  }, products.filter(function (product) {\n    return product.hidden !== true;\n  }).map(function (el, i) {\n    return __jsx(\"div\", {\n      key: i,\n      className: \" col-lg-4 c-category-products__product\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 17\n      }\n    }, __jsx(Product, {\n      data: el,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 47,\n        columnNumber: 19\n      }\n    }));\n  }))));\n};\n\n_c3 = ProductSlider;\nProductSlider.defaultProps = {\n  products: [],\n  versions: []\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductSlider);\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"Product$dynamic\");\n$RefreshReg$(_c2, \"Product\");\n$RefreshReg$(_c3, \"ProductSlider\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9kdWN0U2xpZGVyLmpzP2QwNjkiXSwibmFtZXMiOlsiUHJvZHVjdCIsImR5bmFtaWMiLCJQcm9kdWN0U2xpZGVyIiwicGFyZW50Q2xhc3MiLCJ2ZXJzaW9ucyIsInByb2R1Y3RzIiwiY29tcG9uZW50Q2xhc3MiLCJ2ZXJzaW9uQ2xhc3MiLCJtYXAiLCJlbCIsImpvaW4iLCJwYXJlbnQiLCJyZXBsYWNlIiwiY2xhc3NOYW1lIiwiY2xhc3NOYW1lcyIsImZsa3R5IiwidW5kZWZpbmVkIiwiaW5pdGlhbEluZGV4IiwicGFnZURvdHMiLCJjZWxsQWxpZ24iLCJjb250YWluIiwiYyIsImZpbHRlciIsInByb2R1Y3QiLCJoaWRkZW4iLCJpIiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBLElBQU1BLE9BQU8sR0FBR0MsbURBQU8sTUFBQztBQUFBLFNBQU0sMEhBQU47QUFBQSxDQUFEO0FBQUE7QUFBQTtBQUFBLGtDQUFjLDBDQUFkO0FBQUE7QUFBQSxjQUFjLFdBQWQ7QUFBQTtBQUFBLEVBQXZCO01BQU1ELE87QUFDTjtBQUtBO0FBQ0E7O0FBRUEsSUFBTUUsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixPQUF5QztBQUFBOztBQUFBLE1BQXRDQyxXQUFzQyxRQUF0Q0EsV0FBc0M7QUFBQSxNQUF6QkMsUUFBeUIsUUFBekJBLFFBQXlCO0FBQUEsTUFBZkMsUUFBZSxRQUFmQSxRQUFlO0FBQzdELE1BQU1DLGNBQWMscUJBQXBCO0FBQ0EsTUFBTUMsWUFBWSxHQUFHSCxRQUFRLENBQzFCSSxHQURrQixDQUNkLFVBQUNDLEVBQUQ7QUFBQSxxQkFBV0gsY0FBWCxlQUE4QkcsRUFBOUI7QUFBQSxHQURjLEVBRWxCQyxJQUZrQixDQUViLEdBRmEsQ0FBckI7QUFHQSxNQUFNQyxNQUFNLGFBQU1SLFdBQU4sZUFBc0JHLGNBQWMsQ0FBQ00sT0FBZixDQUF1QixJQUF2QixFQUE2QixFQUE3QixDQUF0QixDQUFaO0FBQ0EsTUFBTUMsU0FBUyxHQUFHQyxpREFBVSxDQUFDUixjQUFELDRIQUN6QkMsWUFEeUIsRUFDVkgsUUFEVSwwR0FFekJPLE1BRnlCLEVBRWhCUixXQUZnQixnQkFBNUIsQ0FONkQsQ0FVN0Q7O0FBRUEsTUFBSVksS0FBSyxHQUFHQyxTQUFaO0FBQ0EsU0FDRTtBQUFLLGFBQVMsRUFBRUgsU0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxZQUFLUCxjQUFMLGNBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsK0RBQUQ7QUFDRSxXQUFPLEVBQUU7QUFDUFcsa0JBQVksRUFBRSxDQURQO0FBRVBDLGNBQVEsRUFBRSxLQUZIO0FBR1BDLGVBQVMsRUFBRSxNQUhKO0FBSVA7QUFDQUMsYUFBTyxFQUFFO0FBTEYsS0FEWDtBQVFFLGVBQVcsRUFBRSxxQkFBQ0MsQ0FBRDtBQUFBLGFBQVFOLEtBQUssR0FBR00sQ0FBaEI7QUFBQSxLQVJmLENBU0U7QUFURjtBQVVFLGtCQUFjLEVBQUUsSUFWbEI7QUFXRSxhQUFTLEVBQUMsNkJBWFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQWFHaEIsUUFBUSxDQUNOaUIsTUFERixDQUNTLFVBQUNDLE9BQUQ7QUFBQSxXQUFhQSxPQUFPLENBQUNDLE1BQVIsS0FBbUIsSUFBaEM7QUFBQSxHQURULEVBRUVoQixHQUZGLENBRU0sVUFBQ0MsRUFBRCxFQUFLZ0IsQ0FBTCxFQUFXO0FBQ2QsV0FDRTtBQUFLLFNBQUcsRUFBRUEsQ0FBVjtBQUFhLGVBQVMsRUFBQyx3Q0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMsT0FBRDtBQUFTLFVBQUksRUFBRWhCLEVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGLENBREY7QUFLRCxHQVJGLENBYkgsQ0FERixDQURGLENBREY7QUE2QkQsQ0ExQ0Q7O01BQU1QLGE7QUE0Q05BLGFBQWEsQ0FBQ3dCLFlBQWQsR0FBNkI7QUFDM0JyQixVQUFRLEVBQUUsRUFEaUI7QUFFM0JELFVBQVEsRUFBRTtBQUZpQixDQUE3QjtBQUllRiw0RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvUHJvZHVjdFNsaWRlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IEZsaWNraXR5IGZyb20gJ3JlYWN0LWZsaWNraXR5LWNvbXBvbmVudCc7XG5pbXBvcnQgZHluYW1pYyBmcm9tICduZXh0L2R5bmFtaWMnO1xuY29uc3QgUHJvZHVjdCA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KCcuL1Byb2R1Y3QnKSk7XG5pbXBvcnQge1xuICBnZXRQcm9kdWN0VGl0bGUsXG4gIGdldFByb2R1Y3RJbWFnZSxcbiAgZ2V0UHJvZHVjdFNob3J0RGVzYyxcbn0gZnJvbSAnLi4vc2VydmljZXMvaGVscGVycy9wcm9kdWN0JztcbmltcG9ydCBwcm9qZWN0U2V0dGluZ3MgZnJvbSAnLi4vY29uc3RhbnRzL3Byb2plY3RTZXR0aW5ncyc7XG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmNvbnN0IFByb2R1Y3RTbGlkZXIgPSAoeyBwYXJlbnRDbGFzcywgdmVyc2lvbnMsIHByb2R1Y3RzIH0pID0+IHtcbiAgY29uc3QgY29tcG9uZW50Q2xhc3MgPSBgYy1wcm9kdWN0LXNsaWRlcmA7XG4gIGNvbnN0IHZlcnNpb25DbGFzcyA9IHZlcnNpb25zXG4gICAgLm1hcCgoZWwpID0+IGAke2NvbXBvbmVudENsYXNzfS0tJHtlbH1gKVxuICAgIC5qb2luKCcgJyk7XG4gIGNvbnN0IHBhcmVudCA9IGAke3BhcmVudENsYXNzfV9fJHtjb21wb25lbnRDbGFzcy5yZXBsYWNlKCdjLScsICcnKX1gO1xuICBjb25zdCBjbGFzc05hbWUgPSBjbGFzc05hbWVzKGNvbXBvbmVudENsYXNzLCB7XG4gICAgW3ZlcnNpb25DbGFzc106IHZlcnNpb25zLFxuICAgIFtwYXJlbnRdOiBwYXJlbnRDbGFzcyxcbiAgfSk7XG4gIC8vIGNvbnN0IHByb2R1Y3RzID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5wcm9kdWN0cyk7XG5cbiAgbGV0IGZsa3R5ID0gdW5kZWZpbmVkO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2NvbXBvbmVudENsYXNzfV9fcm93IHJvd2B9PlxuICAgICAgICA8RmxpY2tpdHlcbiAgICAgICAgICBvcHRpb25zPXt7XG4gICAgICAgICAgICBpbml0aWFsSW5kZXg6IDAsXG4gICAgICAgICAgICBwYWdlRG90czogZmFsc2UsXG4gICAgICAgICAgICBjZWxsQWxpZ246ICdsZWZ0JyxcbiAgICAgICAgICAgIC8vIGdyb3VwQ2VsbHM6MyxcbiAgICAgICAgICAgIGNvbnRhaW46IHRydWUsXG4gICAgICAgICAgfX1cbiAgICAgICAgICBmbGlja2l0eVJlZj17KGMpID0+IChmbGt0eSA9IGMpfVxuICAgICAgICAgIC8vIGRpc2FibGVJbWFnZXNMb2FkZWQ9e2ZhbHNlfVxuICAgICAgICAgIHJlbG9hZE9uVXBkYXRlPXt0cnVlfVxuICAgICAgICAgIGNsYXNzTmFtZT1cImMtY2F0ZWdvcnktcHJvZHVjdHNfX3NsaWRlclwiXG4gICAgICAgID5cbiAgICAgICAgICB7cHJvZHVjdHNcbiAgICAgICAgICAgIC5maWx0ZXIoKHByb2R1Y3QpID0+IHByb2R1Y3QuaGlkZGVuICE9PSB0cnVlKVxuICAgICAgICAgICAgLm1hcCgoZWwsIGkpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17aX0gY2xhc3NOYW1lPVwiIGNvbC1sZy00IGMtY2F0ZWdvcnktcHJvZHVjdHNfX3Byb2R1Y3RcIj5cbiAgICAgICAgICAgICAgICAgIDxQcm9kdWN0IGRhdGE9e2VsfSAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSl9XG4gICAgICAgIDwvRmxpY2tpdHk+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cblByb2R1Y3RTbGlkZXIuZGVmYXVsdFByb3BzID0ge1xuICBwcm9kdWN0czogW10sXG4gIHZlcnNpb25zOiBbXSxcbn07XG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0U2xpZGVyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/ProductSlider.js\n");

/***/ })

})