exports.ids = [19];
exports.modules = {

/***/ "./components/Product.js":
/*!*******************************!*\
  !*** ./components/Product.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Product; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utilis_customFunctions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utilis/customFunctions */ \"./utilis/customFunctions.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_styles_app_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/styles/app.scss */ \"./components/styles/app.scss\");\n/* harmony import */ var _components_styles_app_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_styles_app_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ \"antd\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ant-design/icons */ \"@ant-design/icons\");\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__);\nvar _jsxFileName = \"/Users/akshataggarwal/Documents/Coding Files/webd projects/missvalentine-front/components/Product.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\nfunction Product(props) {\n  const {\n    data,\n    isSelectable,\n    isSelected,\n    handleSelectClick\n  } = props;\n  const {\n    images,\n    name,\n    colors,\n    price,\n    shortDesc\n  } = data;\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"])();\n  const {\n    0: showImageNo,\n    1: setShowImageNo\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(0);\n  const imagesCount = images.length;\n\n  const handleOnMouseEnter = () => {\n    imagesCount >= 2 && setShowImageNo(s => s + 1);\n  };\n\n  const handleOnMouseLeave = () => {\n    imagesCount >= 2 && setShowImageNo(s => s - 1);\n  };\n\n  return __jsx(\"div\", {\n    className: `c-product-card   ${isSelected && 'c-product-card--selected '}`,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: \"c-product-card__image-wrapper\",\n    onClick: () => !isSelected && router.push({\n      pathname: `products/${data._id}`,\n      state: data\n    }),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 7\n    }\n  }, images && images[showImageNo] && __jsx(\"img\", {\n    src: images[showImageNo].data,\n    alt: 'product image',\n    className: \"c-product-card__image\",\n    onMouseEnter: handleOnMouseEnter,\n    onMouseLeave: handleOnMouseLeave,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 11\n    }\n  }), __jsx(\"div\", {\n    className: \"c-product-card__image-text\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 9\n    }\n  })), __jsx(\"div\", {\n    className: \"c-product-card__details\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: \"c-product-card__details-name\",\n    onClick: () => !isSelected && router.push({\n      pathname: `products/${data._id}`,\n      state: data\n    }),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 9\n    }\n  }, name), __jsx(\"div\", {\n    className: \"c-product-card__details-desc\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 9\n    }\n  }, shortDesc), price && price !== '' && __jsx(\"div\", {\n    className: \"c-product-card__details-price\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 11\n    }\n  }, \"Rs. \", price), __jsx(\"div\", {\n    className: \"c-product-card__details-colors\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 9\n    }\n  }, colors.map((c, i) => __jsx(\"div\", {\n    className: \"c-product-card__details-color\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    style: {\n      backgroundColor: Object(_utilis_customFunctions__WEBPACK_IMPORTED_MODULE_1__[\"getColorCode\"])(c)\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 15\n    }\n  })))), isSelectable && __jsx(antd__WEBPACK_IMPORTED_MODULE_4__[\"Button\"], {\n    type: isSelected ? 'primary' : 'default',\n    shape: \"rounded\",\n    onClick: () => handleSelectClick(data),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 86,\n      columnNumber: 11\n    }\n  }, isSelected ? 'Selected' : 'Select')));\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Byb2R1Y3QuanM/OWQwNiJdLCJuYW1lcyI6WyJQcm9kdWN0IiwicHJvcHMiLCJkYXRhIiwiaXNTZWxlY3RhYmxlIiwiaXNTZWxlY3RlZCIsImhhbmRsZVNlbGVjdENsaWNrIiwiaW1hZ2VzIiwibmFtZSIsImNvbG9ycyIsInByaWNlIiwic2hvcnREZXNjIiwicm91dGVyIiwidXNlUm91dGVyIiwic2hvd0ltYWdlTm8iLCJzZXRTaG93SW1hZ2VObyIsInVzZVN0YXRlIiwiaW1hZ2VzQ291bnQiLCJsZW5ndGgiLCJoYW5kbGVPbk1vdXNlRW50ZXIiLCJzIiwiaGFuZGxlT25Nb3VzZUxlYXZlIiwicHVzaCIsInBhdGhuYW1lIiwiX2lkIiwic3RhdGUiLCJtYXAiLCJjIiwiaSIsImJhY2tncm91bmRDb2xvciIsImdldENvbG9yQ29kZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsT0FBVCxDQUFpQkMsS0FBakIsRUFBd0I7QUFDckMsUUFBTTtBQUFFQyxRQUFGO0FBQVFDLGdCQUFSO0FBQXNCQyxjQUF0QjtBQUFrQ0M7QUFBbEMsTUFBd0RKLEtBQTlEO0FBQ0EsUUFBTTtBQUFFSyxVQUFGO0FBQVVDLFFBQVY7QUFBZ0JDLFVBQWhCO0FBQXdCQyxTQUF4QjtBQUErQkM7QUFBL0IsTUFBNkNSLElBQW5EO0FBQ0EsUUFBTVMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUNBLFFBQU07QUFBQSxPQUFDQyxXQUFEO0FBQUEsT0FBY0M7QUFBZCxNQUFnQ0Msc0RBQVEsQ0FBQyxDQUFELENBQTlDO0FBQ0EsUUFBTUMsV0FBVyxHQUFHVixNQUFNLENBQUNXLE1BQTNCOztBQUVBLFFBQU1DLGtCQUFrQixHQUFHLE1BQU07QUFDL0JGLGVBQVcsSUFBSSxDQUFmLElBQW9CRixjQUFjLENBQUVLLENBQUQsSUFBT0EsQ0FBQyxHQUFHLENBQVosQ0FBbEM7QUFDRCxHQUZEOztBQUdBLFFBQU1DLGtCQUFrQixHQUFHLE1BQU07QUFDL0JKLGVBQVcsSUFBSSxDQUFmLElBQW9CRixjQUFjLENBQUVLLENBQUQsSUFBT0EsQ0FBQyxHQUFHLENBQVosQ0FBbEM7QUFDRCxHQUZEOztBQUlBLFNBQ0U7QUFDRSxhQUFTLEVBQUcsb0JBQW1CZixVQUFVLElBQ3ZDLDJCQUE0QixFQUZoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBSUU7QUFDRSxhQUFTLEVBQUMsK0JBRFo7QUFFRSxXQUFPLEVBQUUsTUFDUCxDQUFDQSxVQUFELElBQ0FPLE1BQU0sQ0FBQ1UsSUFBUCxDQUFZO0FBQ1ZDLGNBQVEsRUFBRyxZQUFXcEIsSUFBSSxDQUFDcUIsR0FBSSxFQURyQjtBQUVWQyxXQUFLLEVBQUV0QjtBQUZHLEtBQVosQ0FKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBVUdJLE1BQU0sSUFBSUEsTUFBTSxDQUFDTyxXQUFELENBQWhCLElBQ0M7QUFDRSxPQUFHLEVBQUVQLE1BQU0sQ0FBQ08sV0FBRCxDQUFOLENBQW9CWCxJQUQzQjtBQUVFLE9BQUcsRUFBRSxlQUZQO0FBR0UsYUFBUyxFQUFDLHVCQUhaO0FBSUUsZ0JBQVksRUFBRWdCLGtCQUpoQjtBQUtFLGdCQUFZLEVBQUVFLGtCQUxoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBWEosRUFtQkU7QUFBSyxhQUFTLEVBQUMsNEJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQW5CRixDQUpGLEVBMkJFO0FBQUssYUFBUyxFQUFDLHlCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLGFBQVMsRUFBQyw4QkFEWjtBQUVFLFdBQU8sRUFBRSxNQUNQLENBQUNoQixVQUFELElBQ0FPLE1BQU0sQ0FBQ1UsSUFBUCxDQUFZO0FBQ1ZDLGNBQVEsRUFBRyxZQUFXcEIsSUFBSSxDQUFDcUIsR0FBSSxFQURyQjtBQUVWQyxXQUFLLEVBQUV0QjtBQUZHLEtBQVosQ0FKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBVUdLLElBVkgsQ0FERixFQWFFO0FBQUssYUFBUyxFQUFDLDhCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBK0NHLFNBQS9DLENBYkYsRUFjR0QsS0FBSyxJQUFJQSxLQUFLLEtBQUssRUFBbkIsSUFDQztBQUFLLGFBQVMsRUFBQywrQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQW9EQSxLQUFwRCxDQWZKLEVBaUJFO0FBQUssYUFBUyxFQUFDLGdDQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FZR0QsTUFBTSxDQUFDaUIsR0FBUCxDQUFXLENBQUNDLENBQUQsRUFBSUMsQ0FBSixLQUNWO0FBQUssYUFBUyxFQUFDLCtCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLFNBQUssRUFBRTtBQUFFQyxxQkFBZSxFQUFFQyw0RUFBWSxDQUFDSCxDQUFEO0FBQS9CLEtBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREQsQ0FaSCxDQWpCRixFQW1DR3ZCLFlBQVksSUFDWCxNQUFDLDJDQUFEO0FBQ0UsUUFBSSxFQUFFQyxVQUFVLEdBQUcsU0FBSCxHQUFlLFNBRGpDO0FBRUUsU0FBSyxFQUFDLFNBRlI7QUFHRSxXQUFPLEVBQUUsTUFBTUMsaUJBQWlCLENBQUNILElBQUQsQ0FIbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU1HRSxVQUFVLEdBQUcsVUFBSCxHQUFnQixRQU43QixDQXBDSixDQTNCRixDQURGO0FBNEVEIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9Qcm9kdWN0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgZ2V0Q29sb3JDb2RlIH0gZnJvbSAnLi4vdXRpbGlzL2N1c3RvbUZ1bmN0aW9ucyc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgJy4uL2NvbXBvbmVudHMvc3R5bGVzL2FwcC5zY3NzJztcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ2FudGQnO1xuaW1wb3J0IHsgSGVhcnRPdXRsaW5lZCwgSGVhcnRGaWxsZWQsIEhlYXJ0VHdvVG9uZSB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvZHVjdChwcm9wcykge1xuICBjb25zdCB7IGRhdGEsIGlzU2VsZWN0YWJsZSwgaXNTZWxlY3RlZCwgaGFuZGxlU2VsZWN0Q2xpY2sgfSA9IHByb3BzO1xuICBjb25zdCB7IGltYWdlcywgbmFtZSwgY29sb3JzLCBwcmljZSwgc2hvcnREZXNjIH0gPSBkYXRhO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgW3Nob3dJbWFnZU5vLCBzZXRTaG93SW1hZ2VOb10gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgaW1hZ2VzQ291bnQgPSBpbWFnZXMubGVuZ3RoO1xuXG4gIGNvbnN0IGhhbmRsZU9uTW91c2VFbnRlciA9ICgpID0+IHtcbiAgICBpbWFnZXNDb3VudCA+PSAyICYmIHNldFNob3dJbWFnZU5vKChzKSA9PiBzICsgMSk7XG4gIH07XG4gIGNvbnN0IGhhbmRsZU9uTW91c2VMZWF2ZSA9ICgpID0+IHtcbiAgICBpbWFnZXNDb3VudCA+PSAyICYmIHNldFNob3dJbWFnZU5vKChzKSA9PiBzIC0gMSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9e2BjLXByb2R1Y3QtY2FyZCAgICR7aXNTZWxlY3RlZCAmJlxuICAgICAgICAnYy1wcm9kdWN0LWNhcmQtLXNlbGVjdGVkICd9YH1cbiAgICA+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT1cImMtcHJvZHVjdC1jYXJkX19pbWFnZS13cmFwcGVyXCJcbiAgICAgICAgb25DbGljaz17KCkgPT5cbiAgICAgICAgICAhaXNTZWxlY3RlZCAmJlxuICAgICAgICAgIHJvdXRlci5wdXNoKHtcbiAgICAgICAgICAgIHBhdGhuYW1lOiBgcHJvZHVjdHMvJHtkYXRhLl9pZH1gLFxuICAgICAgICAgICAgc3RhdGU6IGRhdGEsXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgPlxuICAgICAgICB7aW1hZ2VzICYmIGltYWdlc1tzaG93SW1hZ2VOb10gJiYgKFxuICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgIHNyYz17aW1hZ2VzW3Nob3dJbWFnZU5vXS5kYXRhfVxuICAgICAgICAgICAgYWx0PXsncHJvZHVjdCBpbWFnZSd9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJjLXByb2R1Y3QtY2FyZF9faW1hZ2VcIlxuICAgICAgICAgICAgb25Nb3VzZUVudGVyPXtoYW5kbGVPbk1vdXNlRW50ZXJ9XG4gICAgICAgICAgICBvbk1vdXNlTGVhdmU9e2hhbmRsZU9uTW91c2VMZWF2ZX1cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImMtcHJvZHVjdC1jYXJkX19pbWFnZS10ZXh0XCI+XG4gICAgICAgICAgey8qIDxGYXZvcml0ZUJvcmRlciAvPiAqL31cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYy1wcm9kdWN0LWNhcmRfX2RldGFpbHNcIj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT1cImMtcHJvZHVjdC1jYXJkX19kZXRhaWxzLW5hbWVcIlxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+XG4gICAgICAgICAgICAhaXNTZWxlY3RlZCAmJlxuICAgICAgICAgICAgcm91dGVyLnB1c2goe1xuICAgICAgICAgICAgICBwYXRobmFtZTogYHByb2R1Y3RzLyR7ZGF0YS5faWR9YCxcbiAgICAgICAgICAgICAgc3RhdGU6IGRhdGEsXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgPlxuICAgICAgICAgIHtuYW1lfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjLXByb2R1Y3QtY2FyZF9fZGV0YWlscy1kZXNjXCI+e3Nob3J0RGVzY308L2Rpdj5cbiAgICAgICAge3ByaWNlICYmIHByaWNlICE9PSAnJyAmJiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjLXByb2R1Y3QtY2FyZF9fZGV0YWlscy1wcmljZVwiPlJzLiB7cHJpY2V9PC9kaXY+XG4gICAgICAgICl9XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYy1wcm9kdWN0LWNhcmRfX2RldGFpbHMtY29sb3JzXCI+XG4gICAgICAgICAgey8qIFxuICAgICAgICA8VG9vbHRpcFxuICAgICAgICAgICAgICBkaXNhYmxlRm9jdXNMaXN0ZW5lclxuICAgICAgICAgICAgICBrZXk9e2l9XG4gICAgICAgICAgICAgIHRpdGxlPXtjfVxuICAgICAgICAgICAgICBwbGFjZW1lbnQ9XCJyaWdodC1zdGFydFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYy1wcm9kdWN0LWNhcmRfX2RldGFpbHMtY29sb3JcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogZ2V0Q29sb3JDb2RlKGMpIH19PjwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvVG9vbHRpcD4gKi99XG4gICAgICAgICAge2NvbG9ycy5tYXAoKGMsIGkpID0+IChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYy1wcm9kdWN0LWNhcmRfX2RldGFpbHMtY29sb3JcIj5cbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IGdldENvbG9yQ29kZShjKSB9fT48L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAge2lzU2VsZWN0YWJsZSAmJiAoXG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgdHlwZT17aXNTZWxlY3RlZCA/ICdwcmltYXJ5JyA6ICdkZWZhdWx0J31cbiAgICAgICAgICAgIHNoYXBlPVwicm91bmRlZFwiXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVTZWxlY3RDbGljayhkYXRhKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7LyogPEhlYXJ0VHdvVG9uZSB0d29Ub25lQ29sb3I9XCIjZWIyZjk2XCIgLz4gKi99XG4gICAgICAgICAgICB7aXNTZWxlY3RlZCA/ICdTZWxlY3RlZCcgOiAnU2VsZWN0J31cbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Product.js\n");

/***/ })

};;