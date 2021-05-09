exports.ids = [20];
exports.modules = {

/***/ "./components/ProductRating.js":
/*!*************************************!*\
  !*** ./components/ProductRating.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ \"antd\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/akshataggarwal/Documents/Coding Files/webd projects/missvalentine-front/components/ProductRating.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nconst ProductRating = ({\n  reviews\n}) => {\n  const getAvg = reviews => {\n    const newArr = reviews.map(el => el.overall);\n    const sum = newArr.reduce((a, b) => a + b, 0);\n    return (sum / reviews.length).toFixed(1);\n  };\n\n  const countOf = (reviews, rate) => reviews.filter(el => el.overall === rate).length;\n\n  const avgReview = getAvg(reviews);\n  const total = reviews.length;\n  return __jsx(\"div\", {\n    className: \"pr-rating\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: \"row\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: \"col-lg-9 col-md-8\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: \"pr-rating__left-sec\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 11\n    }\n  }, __jsx(\"div\", {\n    className: \"pr-rating__wrapper pr-rating__wrapper--left\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    className: \"pr-rating__rate-wrapper\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 15\n    }\n  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__[\"Rate\"], {\n    style: {\n      color: \"#000\"\n    },\n    className: \"c-product-info__stars\",\n    disabled: true,\n    value: avgReview,\n    allowHalf: true,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 17\n    }\n  })), __jsx(\"p\", {\n    className: \"pr-rating__para\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 15\n    }\n  }, \"(\", total, \" reviews)\"), __jsx(\"h1\", {\n    className: \"pr-rating__heading\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 15\n    }\n  }, avgReview))))));\n};\n\nProductRating.defaultProps = {\n  reviews: []\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductRating);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Byb2R1Y3RSYXRpbmcuanM/YjAwYiJdLCJuYW1lcyI6WyJQcm9kdWN0UmF0aW5nIiwicmV2aWV3cyIsImdldEF2ZyIsIm5ld0FyciIsIm1hcCIsImVsIiwib3ZlcmFsbCIsInN1bSIsInJlZHVjZSIsImEiLCJiIiwibGVuZ3RoIiwidG9GaXhlZCIsImNvdW50T2YiLCJyYXRlIiwiZmlsdGVyIiwiYXZnUmV2aWV3IiwidG90YWwiLCJjb2xvciIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7QUFFQSxNQUFNQSxhQUFhLEdBQUcsQ0FBQztBQUFFQztBQUFGLENBQUQsS0FBaUI7QUFDckMsUUFBTUMsTUFBTSxHQUFJRCxPQUFELElBQWE7QUFDMUIsVUFBTUUsTUFBTSxHQUFHRixPQUFPLENBQUNHLEdBQVIsQ0FBYUMsRUFBRCxJQUFRQSxFQUFFLENBQUNDLE9BQXZCLENBQWY7QUFDQSxVQUFNQyxHQUFHLEdBQUdKLE1BQU0sQ0FBQ0ssTUFBUCxDQUFjLENBQUNDLENBQUQsRUFBSUMsQ0FBSixLQUFVRCxDQUFDLEdBQUdDLENBQTVCLEVBQStCLENBQS9CLENBQVo7QUFDQSxXQUFPLENBQUNILEdBQUcsR0FBR04sT0FBTyxDQUFDVSxNQUFmLEVBQXVCQyxPQUF2QixDQUErQixDQUEvQixDQUFQO0FBQ0QsR0FKRDs7QUFLQSxRQUFNQyxPQUFPLEdBQUcsQ0FBQ1osT0FBRCxFQUFVYSxJQUFWLEtBQ2RiLE9BQU8sQ0FBQ2MsTUFBUixDQUFnQlYsRUFBRCxJQUFRQSxFQUFFLENBQUNDLE9BQUgsS0FBZVEsSUFBdEMsRUFBNENILE1BRDlDOztBQUVBLFFBQU1LLFNBQVMsR0FBR2QsTUFBTSxDQUFDRCxPQUFELENBQXhCO0FBQ0EsUUFBTWdCLEtBQUssR0FBR2hCLE9BQU8sQ0FBQ1UsTUFBdEI7QUFDQSxTQUNFO0FBQUssYUFBUyxFQUFDLFdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLEtBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLG1CQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxxQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsNkNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLHlCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHlDQUFEO0FBQ0UsU0FBSyxFQUFFO0FBQUVPLFdBQUssRUFBRTtBQUFULEtBRFQ7QUFFRSxhQUFTLEVBQUMsdUJBRlo7QUFHRSxZQUFRLE1BSFY7QUFJRSxTQUFLLEVBQUVGLFNBSlQ7QUFLRSxhQUFTLEVBQUUsSUFMYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixFQVVFO0FBQUcsYUFBUyxFQUFDLGlCQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBaUNDLEtBQWpDLGNBVkYsRUFXRTtBQUFJLGFBQVMsRUFBQyxvQkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQW9DRCxTQUFwQyxDQVhGLENBREYsQ0FERixDQURGLENBREYsQ0FERjtBQXlGRCxDQW5HRDs7QUFvR0FoQixhQUFhLENBQUNtQixZQUFkLEdBQTZCO0FBQzNCbEIsU0FBTyxFQUFFO0FBRGtCLENBQTdCO0FBR2VELDRFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9Qcm9kdWN0UmF0aW5nLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmF0ZSB9IGZyb20gXCJhbnRkXCI7XG5cbmNvbnN0IFByb2R1Y3RSYXRpbmcgPSAoeyByZXZpZXdzIH0pID0+IHtcbiAgY29uc3QgZ2V0QXZnID0gKHJldmlld3MpID0+IHtcbiAgICBjb25zdCBuZXdBcnIgPSByZXZpZXdzLm1hcCgoZWwpID0+IGVsLm92ZXJhbGwpO1xuICAgIGNvbnN0IHN1bSA9IG5ld0Fyci5yZWR1Y2UoKGEsIGIpID0+IGEgKyBiLCAwKTtcbiAgICByZXR1cm4gKHN1bSAvIHJldmlld3MubGVuZ3RoKS50b0ZpeGVkKDEpO1xuICB9O1xuICBjb25zdCBjb3VudE9mID0gKHJldmlld3MsIHJhdGUpID0+XG4gICAgcmV2aWV3cy5maWx0ZXIoKGVsKSA9PiBlbC5vdmVyYWxsID09PSByYXRlKS5sZW5ndGg7XG4gIGNvbnN0IGF2Z1JldmlldyA9IGdldEF2ZyhyZXZpZXdzKTtcbiAgY29uc3QgdG90YWwgPSByZXZpZXdzLmxlbmd0aDtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInByLXJhdGluZ1wiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctOSBjb2wtbWQtOFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHItcmF0aW5nX19sZWZ0LXNlY1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwci1yYXRpbmdfX3dyYXBwZXIgcHItcmF0aW5nX193cmFwcGVyLS1sZWZ0XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHItcmF0aW5nX19yYXRlLXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICA8UmF0ZVxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgY29sb3I6IFwiIzAwMFwiIH19XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjLXByb2R1Y3QtaW5mb19fc3RhcnNcIlxuICAgICAgICAgICAgICAgICAgZGlzYWJsZWRcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXthdmdSZXZpZXd9XG4gICAgICAgICAgICAgICAgICBhbGxvd0hhbGY9e3RydWV9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInByLXJhdGluZ19fcGFyYVwiPih7dG90YWx9IHJldmlld3MpPC9wPlxuICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwicHItcmF0aW5nX19oZWFkaW5nXCI+e2F2Z1Jldmlld308L2gxPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMyBjb2wtbWQtNFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHItcmF0aW5nX19yaWdodC1zZWNcIj5cbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJwci1yYXRpbmdfX2xpc3Qtd2FycHBlclwiPlxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicHItcmF0aW5nX19saXN0XCI+XG4gICAgICAgICAgICAgICAge1wiIFwifVxuICAgICAgICAgICAgICAgIDxSYXRlXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyBjb2xvcjogXCIjMDAwXCIgfX1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImMtcHJvZHVjdC1pbmZvX19zdGFyc1wiXG4gICAgICAgICAgICAgICAgICBkaXNhYmxlZFxuICAgICAgICAgICAgICAgICAgdmFsdWU9ezV9XG4gICAgICAgICAgICAgICAgLz57XCIgXCJ9XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHItcmF0aW5nX19saXN0LS1yYXRlXCI+XG4gICAgICAgICAgICAgICAgICAoe2NvdW50T2YocmV2aWV3cywgNSl9KVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInByLXJhdGluZ19fbGlzdFwiPlxuICAgICAgICAgICAgICAgIHtcIiBcIn1cbiAgICAgICAgICAgICAgICA8UmF0ZVxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgY29sb3I6IFwiIzAwMFwiIH19XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjLXByb2R1Y3QtaW5mb19fc3RhcnNcIlxuICAgICAgICAgICAgICAgICAgZGlzYWJsZWRcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXs0fVxuICAgICAgICAgICAgICAgIC8+e1wiIFwifVxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInByLXJhdGluZ19fbGlzdC0tcmF0ZVwiPlxuICAgICAgICAgICAgICAgICAgKHtjb3VudE9mKHJldmlld3MsIDQpfSlcbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJwci1yYXRpbmdfX2xpc3RcIj5cbiAgICAgICAgICAgICAgICB7XCIgXCJ9XG4gICAgICAgICAgICAgICAgPFJhdGVcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiBcIiMwMDBcIiB9fVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYy1wcm9kdWN0LWluZm9fX3N0YXJzXCJcbiAgICAgICAgICAgICAgICAgIGRpc2FibGVkXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17M31cbiAgICAgICAgICAgICAgICAvPntcIiBcIn1cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwci1yYXRpbmdfX2xpc3QtLXJhdGVcIj5cbiAgICAgICAgICAgICAgICAgICh7Y291bnRPZihyZXZpZXdzLCAzKX0pXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicHItcmF0aW5nX19saXN0XCI+XG4gICAgICAgICAgICAgICAge1wiIFwifVxuICAgICAgICAgICAgICAgIDxSYXRlXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyBjb2xvcjogXCIjMDAwXCIgfX1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImMtcHJvZHVjdC1pbmZvX19zdGFyc1wiXG4gICAgICAgICAgICAgICAgICBkaXNhYmxlZFxuICAgICAgICAgICAgICAgICAgdmFsdWU9ezJ9XG4gICAgICAgICAgICAgICAgLz57XCIgXCJ9XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHItcmF0aW5nX19saXN0LS1yYXRlXCI+XG4gICAgICAgICAgICAgICAgICAoe2NvdW50T2YocmV2aWV3cywgMil9KVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInByLXJhdGluZ19fbGlzdFwiPlxuICAgICAgICAgICAgICAgIHtcIiBcIn1cbiAgICAgICAgICAgICAgICA8UmF0ZVxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgY29sb3I6IFwiIzAwMFwiIH19XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjLXByb2R1Y3QtaW5mb19fc3RhcnNcIlxuICAgICAgICAgICAgICAgICAgZGlzYWJsZWRcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXsxfVxuICAgICAgICAgICAgICAgIC8+e1wiIFwifVxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInByLXJhdGluZ19fbGlzdC0tcmF0ZVwiPlxuICAgICAgICAgICAgICAgICAgKHtjb3VudE9mKHJldmlld3MsIDEpfSlcbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj4gKi99XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5Qcm9kdWN0UmF0aW5nLmRlZmF1bHRQcm9wcyA9IHtcbiAgcmV2aWV3czogW10sXG59O1xuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdFJhdGluZztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ProductRating.js\n");

/***/ })

};;