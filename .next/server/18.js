exports.ids = [18];
exports.modules = {

/***/ "./components/CartIcon.js":
/*!********************************!*\
  !*** ./components/CartIcon.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-svg */ \"react-svg\");\n/* harmony import */ var react_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_svg__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ \"lodash\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/Users/akshataggarwal/Documents/Coding Files/webd projects/missnew front/components/CartIcon.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\n\n\n\n\nconst CartIcon = (_ref) => {\n  let {\n    items\n  } = _ref,\n      props = _objectWithoutProperties(_ref, [\"items\"]);\n\n  const itemCount = lodash__WEBPACK_IMPORTED_MODULE_3___default.a.flatten([...items.map(el => Array(el.qty || 0).fill(0))]).length || 0;\n\n  if (itemCount > 0) {\n    return __jsx(\"span\", {\n      className: \"c-cart-icon\",\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 8,\n        columnNumber: 16\n      }\n    }, __jsx(\"span\", {\n      className: \"c-cart-icon__count\",\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 9,\n        columnNumber: 13\n      }\n    }, itemCount), __jsx(react_svg__WEBPACK_IMPORTED_MODULE_2___default.a, {\n      src: \"/images/cart-icon-active.svg\",\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 13\n      }\n    }));\n  } else {\n    return __jsx(react_svg__WEBPACK_IMPORTED_MODULE_2___default.a, {\n      src: \"/images/cart-icon-1.svg\",\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 16\n      }\n    });\n  }\n};\n\nCartIcon.defaultProps = {\n  items: []\n};\n\nconst MapStateToProps = state => ({\n  items: state.cart.items\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(MapStateToProps)(CartIcon));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NhcnRJY29uLmpzP2ZkODAiXSwibmFtZXMiOlsiQ2FydEljb24iLCJpdGVtcyIsInByb3BzIiwiaXRlbUNvdW50IiwiXyIsImZsYXR0ZW4iLCJtYXAiLCJlbCIsIkFycmF5IiwicXR5IiwiZmlsbCIsImxlbmd0aCIsImRlZmF1bHRQcm9wcyIsIk1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwiY2FydCIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLE1BQU1BLFFBQVEsR0FBRyxVQUF1QjtBQUFBLE1BQXRCO0FBQUNDO0FBQUQsR0FBc0I7QUFBQSxNQUFYQyxLQUFXOztBQUNwQyxRQUFNQyxTQUFTLEdBQUdDLDZDQUFDLENBQUNDLE9BQUYsQ0FBVSxDQUFDLEdBQUdKLEtBQUssQ0FBQ0ssR0FBTixDQUFVQyxFQUFFLElBQUlDLEtBQUssQ0FBQ0QsRUFBRSxDQUFDRSxHQUFILElBQVUsQ0FBWCxDQUFMLENBQW1CQyxJQUFuQixDQUF3QixDQUF4QixDQUFoQixDQUFKLENBQVYsRUFBNERDLE1BQTVELElBQXNFLENBQXhGOztBQUNBLE1BQUdSLFNBQVMsR0FBRyxDQUFmLEVBQWlCO0FBQ2IsV0FBTztBQUFNLGVBQVMsRUFBQyxhQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0g7QUFBTSxlQUFTLEVBQUMsb0JBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDS0EsU0FETCxDQURHLEVBSUgsTUFBQyxnREFBRDtBQUFVLFNBQUcsRUFBQyw4QkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BSkcsQ0FBUDtBQU1ILEdBUEQsTUFPSztBQUNELFdBQU8sTUFBQyxnREFBRDtBQUFVLFNBQUcsRUFBQyx5QkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQVA7QUFDSDtBQUNKLENBWkQ7O0FBY0FILFFBQVEsQ0FBQ1ksWUFBVCxHQUF3QjtBQUNwQlgsT0FBSyxFQUFFO0FBRGEsQ0FBeEI7O0FBR0EsTUFBTVksZUFBZSxHQUFHQyxLQUFLLEtBQUs7QUFDOUJiLE9BQUssRUFBRWEsS0FBSyxDQUFDQyxJQUFOLENBQVdkO0FBRFksQ0FBTCxDQUE3Qjs7QUFJZWUsMEhBQU8sQ0FBQ0gsZUFBRCxDQUFQLENBQXlCYixRQUF6QixDQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9DYXJ0SWNvbi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCBSZWFjdFNWRyBmcm9tICdyZWFjdC1zdmcnXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnXG5cbmNvbnN0IENhcnRJY29uID0gKHtpdGVtcywgLi4ucHJvcHN9KSA9PiB7XG4gICAgY29uc3QgaXRlbUNvdW50ID0gXy5mbGF0dGVuKFsuLi5pdGVtcy5tYXAoZWwgPT4gQXJyYXkoZWwucXR5IHx8IDApLmZpbGwoMCkpXSkubGVuZ3RoIHx8IDBcbiAgICBpZihpdGVtQ291bnQgPiAwKXtcbiAgICAgICAgcmV0dXJuIDxzcGFuIGNsYXNzTmFtZT1cImMtY2FydC1pY29uXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjLWNhcnQtaWNvbl9fY291bnRcIj5cbiAgICAgICAgICAgICAgICB7aXRlbUNvdW50fVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPFJlYWN0U1ZHIHNyYz1cIi9pbWFnZXMvY2FydC1pY29uLWFjdGl2ZS5zdmdcIiAvPlxuICAgICAgICA8L3NwYW4+XG4gICAgfWVsc2V7XG4gICAgICAgIHJldHVybiA8UmVhY3RTVkcgc3JjPVwiL2ltYWdlcy9jYXJ0LWljb24tMS5zdmdcIiAvPlxuICAgIH1cbn1cblxuQ2FydEljb24uZGVmYXVsdFByb3BzID0ge1xuICAgIGl0ZW1zOiBbXVxufVxuY29uc3QgTWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4gKHtcbiAgICBpdGVtczogc3RhdGUuY2FydC5pdGVtc1xufSlcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChNYXBTdGF0ZVRvUHJvcHMpKENhcnRJY29uKSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/CartIcon.js\n");

/***/ })

};;