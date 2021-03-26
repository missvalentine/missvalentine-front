exports.ids = [17];
exports.modules = {

/***/ "0GkY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("K2gz");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_flickity_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("ZHLg");
/* harmony import */ var react_flickity_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_flickity_component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("/T1H");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_helpers_product__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("OWVN");
/* harmony import */ var _constants_projectSettings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("xSWb");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Product = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(() => __webpack_require__.e(/* import() */ 72).then(__webpack_require__.bind(null, "nQYz")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("nQYz")],
    modules: ['./Product']
  }
});




const ProductSlider = ({
  parentClass,
  versions,
  products
}) => {
  const componentClass = `c-product-slider`;
  const versionClass = versions.map(el => `${componentClass}--${el}`).join(' ');
  const parent = `${parentClass}__${componentClass.replace('c-', '')}`;
  const className = classnames__WEBPACK_IMPORTED_MODULE_1___default()(componentClass, {
    [versionClass]: versions,
    [parent]: parentClass
  }); // const products = useSelector((state) => state.products);

  let flkty = undefined;
  return __jsx("div", {
    className: className
  }, __jsx("div", {
    className: `${componentClass}__row row`
  }, __jsx(react_flickity_component__WEBPACK_IMPORTED_MODULE_2___default.a, {
    options: {
      initialIndex: 0,
      pageDots: false,
      cellAlign: 'left',
      // groupCells:3,
      contain: true
    },
    flickityRef: c => flkty = c,
    disableImagesLoaded: false,
    reloadOnUpdate: true,
    className: "c-category-products__slider"
  }, products.filter(product => product.hidden !== true).map((el, i) => {
    const title = Object(_services_helpers_product__WEBPACK_IMPORTED_MODULE_4__[/* getProductTitle */ "i"])(el);
    const image = Object(_services_helpers_product__WEBPACK_IMPORTED_MODULE_4__[/* getProductImage */ "f"])(el);
    const subTitle = Object(_services_helpers_product__WEBPACK_IMPORTED_MODULE_4__[/* getProductShortDesc */ "h"])(el);
    return __jsx("div", {
      key: i,
      className: " col-lg-4 c-category-products__product"
    }, __jsx(Product, {
      data: el
    }));
  }))));
};

ProductSlider.defaultProps = {
  products: [],
  versions: []
};
/* harmony default export */ __webpack_exports__["default"] = (ProductSlider);

/***/ })

};;