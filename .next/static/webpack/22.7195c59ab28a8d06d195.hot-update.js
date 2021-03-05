webpackHotUpdate_N_E(22,{

/***/ "./components/LRSection.js":
/*!*********************************!*\
  !*** ./components/LRSection.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dist/next-server/lib/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-lazy-load-image-component */ \"./node_modules/react-lazy-load-image-component/build/index.js\");\n/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/akshataggarwal/Documents/Coding Files/webd projects/missnew front/components/LRSection.js\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nvar Heading = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(_c = function _c() {\n  return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ./Heading */ \"./components/Heading.js\"));\n}, {\n  loadableGenerated: {\n    webpack: function webpack() {\n      return [/*require.resolve*/(/*! ./Heading */ \"./components/Heading.js\")];\n    },\n    modules: [\"./Heading\"]\n  }\n});\n_c2 = Heading;\n\nvar Button = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(_c3 = function _c3() {\n  return __webpack_require__.e(/*! import() */ 34).then(__webpack_require__.bind(null, /*! ./form-components/Button */ \"./components/form-components/Button.js\"));\n}, {\n  loadableGenerated: {\n    webpack: function webpack() {\n      return [/*require.resolve*/(/*! ./form-components/Button */ \"./components/form-components/Button.js\")];\n    },\n    modules: [\"./form-components/Button\"]\n  }\n});\n_c4 = Button;\n\nvar LRSection = function LRSection(_ref) {\n  var heading = _ref.heading,\n      subHeading = _ref.subHeading,\n      content = _ref.content,\n      children = _ref.children,\n      link = _ref.link,\n      linkText = _ref.linkText,\n      image = _ref.image,\n      alt = _ref.alt,\n      onLinkClick = _ref.onLinkClick;\n  return __jsx(\"div\", {\n    className: \"c-lr-section\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 3\n    }\n  }, __jsx(\"div\", {\n    className: \"c-lr-section__image\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 5\n    }\n  }, __jsx(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_2__[\"LazyLoadImage\"], {\n    className: \"img-fluid c-lr-section__img\",\n    src: image,\n    alt: alt ? alt : heading,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 7\n    }\n  })), __jsx(\"div\", {\n    className: \"c-lr-section__content\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 5\n    }\n  }, __jsx(Heading, {\n    parentClass: \"c-lr-section\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 7\n    }\n  }, heading), __jsx(\"h4\", {\n    className: \"c-lr-section__sub-heading\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 7\n    }\n  }, subHeading), content, children, __jsx(\"div\", {\n    className: \"c-lr-section__btn-wrapper\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 7\n    }\n  }, linkText && __jsx(Button, {\n    theme: \"btm-br\",\n    type: \"link\",\n    onClick: function onClick() {\n      if (typeof onLinkClick === \"function\") {\n        onLinkClick();\n      }\n    },\n    link: link,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 11\n    }\n  }, linkText)))) // </div>\n  ;\n};\n\n_c5 = LRSection;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LRSection);\n\nvar _c, _c2, _c3, _c4, _c5;\n\n$RefreshReg$(_c, \"Heading$dynamic\");\n$RefreshReg$(_c2, \"Heading\");\n$RefreshReg$(_c3, \"Button$dynamic\");\n$RefreshReg$(_c4, \"Button\");\n$RefreshReg$(_c5, \"LRSection\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MUlNlY3Rpb24uanM/OTc3NiJdLCJuYW1lcyI6WyJIZWFkaW5nIiwiZHluYW1pYyIsIkJ1dHRvbiIsIkxSU2VjdGlvbiIsImhlYWRpbmciLCJzdWJIZWFkaW5nIiwiY29udGVudCIsImNoaWxkcmVuIiwibGluayIsImxpbmtUZXh0IiwiaW1hZ2UiLCJhbHQiLCJvbkxpbmtDbGljayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQSxJQUFNQSxPQUFPLEdBQUdDLG1EQUFPLE1BQUM7QUFBQSxTQUFNLHlIQUFOO0FBQUEsQ0FBRDtBQUFBO0FBQUE7QUFBQSxrQ0FBYywwQ0FBZDtBQUFBO0FBQUEsY0FBYyxXQUFkO0FBQUE7QUFBQSxFQUF2QjtNQUFNRCxPO0FBQ047QUFDQSxJQUFNRSxNQUFNLEdBQUdELG1EQUFPLE9BQUM7QUFBQSxTQUFNLHdKQUFOO0FBQUEsQ0FBRDtBQUFBO0FBQUE7QUFBQSxrQ0FBYyx3RUFBZDtBQUFBO0FBQUEsY0FBYywwQkFBZDtBQUFBO0FBQUEsRUFBdEI7TUFBTUMsTTs7QUFDTixJQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWTtBQUFBLE1BQ2hCQyxPQURnQixRQUNoQkEsT0FEZ0I7QUFBQSxNQUVoQkMsVUFGZ0IsUUFFaEJBLFVBRmdCO0FBQUEsTUFHaEJDLE9BSGdCLFFBR2hCQSxPQUhnQjtBQUFBLE1BSWhCQyxRQUpnQixRQUloQkEsUUFKZ0I7QUFBQSxNQUtoQkMsSUFMZ0IsUUFLaEJBLElBTGdCO0FBQUEsTUFNaEJDLFFBTmdCLFFBTWhCQSxRQU5nQjtBQUFBLE1BT2hCQyxLQVBnQixRQU9oQkEsS0FQZ0I7QUFBQSxNQVFoQkMsR0FSZ0IsUUFRaEJBLEdBUmdCO0FBQUEsTUFTaEJDLFdBVGdCLFFBU2hCQSxXQVRnQjtBQUFBLFNBV2hCO0FBQUssYUFBUyxFQUFDLGNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLHFCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDZFQUFEO0FBQ0UsYUFBUyxFQUFDLDZCQURaO0FBRUUsT0FBRyxFQUFFRixLQUZQO0FBR0UsT0FBRyxFQUFFQyxHQUFHLEdBQUdBLEdBQUgsR0FBU1AsT0FIbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREYsRUFRRTtBQUFLLGFBQVMsRUFBQyx1QkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxPQUFEO0FBQVMsZUFBVyxFQUFDLGNBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBcUNBLE9BQXJDLENBREYsRUFFRTtBQUFJLGFBQVMsRUFBQywyQkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQTJDQyxVQUEzQyxDQUZGLEVBR0dDLE9BSEgsRUFJR0MsUUFKSCxFQUtFO0FBQUssYUFBUyxFQUFDLDJCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0UsUUFBUSxJQUNQLE1BQUMsTUFBRDtBQUNFLFNBQUssRUFBQyxRQURSO0FBRUUsUUFBSSxFQUFDLE1BRlA7QUFHRSxXQUFPLEVBQUUsbUJBQU07QUFDYixVQUFJLE9BQU9HLFdBQVAsS0FBdUIsVUFBM0IsRUFBdUM7QUFDckNBLG1CQUFXO0FBQ1o7QUFDRixLQVBIO0FBUUUsUUFBSSxFQUFFSixJQVJSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FVR0MsUUFWSCxDQUZKLENBTEYsQ0FSRixDQVhnQixDQXFGaEI7QUFyRmdCO0FBQUEsQ0FBbEI7O01BQU1OLFM7QUF3RlNBLHdFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9MUlNlY3Rpb24uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZHluYW1pYyBmcm9tICduZXh0L2R5bmFtaWMnXG5jb25zdCBIZWFkaW5nID0gZHluYW1pYygoKSA9PiBpbXBvcnQoXCIuL0hlYWRpbmdcIikpO1xuaW1wb3J0IHsgTGF6eUxvYWRJbWFnZSB9IGZyb20gXCJyZWFjdC1sYXp5LWxvYWQtaW1hZ2UtY29tcG9uZW50XCI7XG5jb25zdCBCdXR0b24gPSBkeW5hbWljKCgpID0+IGltcG9ydChcIi4vZm9ybS1jb21wb25lbnRzL0J1dHRvblwiKSk7XG5jb25zdCBMUlNlY3Rpb24gPSAoe1xuICBoZWFkaW5nLFxuICBzdWJIZWFkaW5nLFxuICBjb250ZW50LFxuICBjaGlsZHJlbixcbiAgbGluayxcbiAgbGlua1RleHQsXG4gIGltYWdlLFxuICBhbHQsXG4gIG9uTGlua0NsaWNrLFxufSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cImMtbHItc2VjdGlvblwiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYy1sci1zZWN0aW9uX19pbWFnZVwiPlxuICAgICAgPExhenlMb2FkSW1hZ2VcbiAgICAgICAgY2xhc3NOYW1lPVwiaW1nLWZsdWlkIGMtbHItc2VjdGlvbl9faW1nXCJcbiAgICAgICAgc3JjPXtpbWFnZX1cbiAgICAgICAgYWx0PXthbHQgPyBhbHQgOiBoZWFkaW5nfVxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImMtbHItc2VjdGlvbl9fY29udGVudFwiPlxuICAgICAgPEhlYWRpbmcgcGFyZW50Q2xhc3M9XCJjLWxyLXNlY3Rpb25cIj57aGVhZGluZ308L0hlYWRpbmc+XG4gICAgICA8aDQgY2xhc3NOYW1lPVwiYy1sci1zZWN0aW9uX19zdWItaGVhZGluZ1wiPntzdWJIZWFkaW5nfTwvaDQ+XG4gICAgICB7Y29udGVudH1cbiAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYy1sci1zZWN0aW9uX19idG4td3JhcHBlclwiPlxuICAgICAgICB7bGlua1RleHQgJiYgKCBcbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICB0aGVtZT1cImJ0bS1iclwiXG4gICAgICAgICAgICB0eXBlPVwibGlua1wiXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIGlmICh0eXBlb2Ygb25MaW5rQ2xpY2sgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAgIG9uTGlua0NsaWNrKCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBsaW5rPXtsaW5rfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtsaW5rVGV4dH1cbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImMtbHItc2VjdGlvbl9fbWFpblwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgYy1sci1zZWN0aW9uX19yb3dcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjLWxyLXNlY3Rpb25fX2NvbCBjLWxyLXNlY3Rpb25fX2NvbC0taW1hZ2UgYy1sci1zZWN0aW9uX19jb2wtLXNtLTUgY29sLXNtLTVcIj5cbiAgICAgICAgICBcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImltZy1mbHVpZCBjLWxyLXNlY3Rpb25fX2ltZ1wiXG4gICAgICAgICAgICBzcmM9e2ltYWdlfVxuICAgICAgICAgICAgYWx0PXthbHQgPyBhbHQgOiBoZWFkaW5nfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImMtbHItc2VjdGlvbl9fY29sIGQtZmxleCBmbGV4LWNvbHVtbiBqdXN0aWZ5LWNvbnRlbnQtYXJvdW5kIGMtbHItc2VjdGlvbl9fY29sLS10ZXh0IGMtbHItc2VjdGlvbl9fY29sLS1zbS03IGNvbC1zbS03XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjLWxyLXNlY3Rpb25fX2hlYWQtd3JhcHBlclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgYy1sci1zZWN0aW9uX19yb3cgYWxpZ24taXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1ncm93LTAgYy1sci1zZWN0aW9uX19oZWFkaW5nLXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICA8SGVhZGluZyBwYXJlbnRDbGFzcz1cImMtbHItc2VjdGlvblwiPntoZWFkaW5nfTwvSGVhZGluZz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYy1sci1zZWN0aW9uX19zdWItaGVhZGluZy13cmFwcGVyXCI+XG4gICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImMtbHItc2VjdGlvbl9fc3ViLWhlYWRpbmdcIj57c3ViSGVhZGluZ308L2g0PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjLWxyLXNlY3Rpb25fX2NvbnRlbnQtd3JhcFwiPlxuICAgICAgICAgICAge2NvbnRlbnR9XG4gICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjLWxyLXNlY3Rpb25fX2J0bi13cmFwcGVyXCI+XG4gICAgICAgICAgICB7bGlua1RleHQgJiYgKFxuICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgdGhlbWU9XCJidG0tYnJcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJsaW5rXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG9uTGlua0NsaWNrID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgb25MaW5rQ2xpY2soKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIGxpbms9e2xpbmt9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7bGlua1RleHR9XG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj4gKi99XG4gIDwvZGl2PlxuICAvLyA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IExSU2VjdGlvbjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/LRSection.js\n");

/***/ })

})