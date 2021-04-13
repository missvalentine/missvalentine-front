exports.ids = [44];
exports.modules = {

/***/ "nQYz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Product; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utilis_customFunctions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("rEar");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_styles_app_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("YWgu");
/* harmony import */ var _components_styles_app_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_styles_app_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("Exp3");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("nZwT");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






function Product(props) {
  const {
    data,
    isSelectable,
    isSelected,
    handleSelectClick
  } = props;
  const {
    images,
    name,
    colors,
    price,
    shortDesc
  } = data;
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  const {
    0: showImageNo,
    1: setShowImageNo
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const imagesCount = images.length;

  const handleOnMouseEnter = () => {
    imagesCount >= 2 && setShowImageNo(s => s + 1);
  };

  const handleOnMouseLeave = () => {
    imagesCount >= 2 && setShowImageNo(s => s - 1);
  };

  return __jsx("div", {
    className: `c-product-card   ${isSelected && 'c-product-card--selected '}`
  }, __jsx("div", {
    className: "c-product-card__image-wrapper",
    onClick: () => !isSelected && router.push({
      pathname: `products/${data._id}`,
      state: data
    })
  }, images && images[showImageNo] && __jsx("img", {
    src: images[showImageNo].data,
    alt: 'product image',
    className: "c-product-card__image",
    onMouseEnter: handleOnMouseEnter,
    onMouseLeave: handleOnMouseLeave
  }), __jsx("div", {
    className: "c-product-card__image-text"
  })), __jsx("div", {
    className: "c-product-card__details"
  }, __jsx("div", {
    className: "c-product-card__details-name",
    onClick: () => !isSelected && router.push({
      pathname: `products/${data._id}`,
      state: data
    })
  }, name), __jsx("div", {
    className: "c-product-card__details-desc"
  }, shortDesc), price && price !== '' && __jsx("div", {
    className: "c-product-card__details-price"
  }, "Rs. ", price), __jsx("div", {
    className: "c-product-card__details-colors"
  }, colors.map((c, i) => __jsx("div", {
    className: "c-product-card__details-color"
  }, __jsx("div", {
    style: {
      backgroundColor: Object(_utilis_customFunctions__WEBPACK_IMPORTED_MODULE_1__[/* getColorCode */ "a"])(c)
    }
  })))), isSelectable && __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    type: isSelected ? 'primary' : 'default',
    shape: "rounded",
    onClick: () => handleSelectClick(data)
  }, isSelected ? 'Selected' : 'Select')));
}

/***/ })

};;