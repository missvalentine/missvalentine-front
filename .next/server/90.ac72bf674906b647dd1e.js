exports.ids = [90];
exports.modules = {

/***/ "S2Y+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("/T1H");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _constants_projectSettings_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("xSWb");
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




const ProductViewSlider = next_dynamic__WEBPACK_IMPORTED_MODULE_0___default()(() => __webpack_require__.e(/* import() */ 73).then(__webpack_require__.bind(null, "YFtD")), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("YFtD")],
    modules: ['./ProductViewSlider']
  }
});
const {
  filePath
} = _constants_projectSettings_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "d"];

class ImageZoom extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  render() {
    const {
      images
    } = this.props;
    return __jsx("div", {
      className: "display-product-wrapper"
    });
  }

}

const mapStateToProps = state => ({
  products: state.products
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps)(ImageZoom));

/***/ })

};;