exports.ids = [45];
exports.modules = {

/***/ "sAsT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Exp3");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const ProductRating = ({
  reviews
}) => {
  const getAvg = reviews => {
    const newArr = reviews.map(el => el.overall);
    const sum = newArr.reduce((a, b) => a + b, 0);
    return (sum / reviews.length).toFixed(1);
  };

  const countOf = (reviews, rate) => reviews.filter(el => el.overall === rate).length;

  const avgReview = getAvg(reviews);
  const total = reviews.length;
  return __jsx("div", {
    className: "pr-rating"
  }, __jsx("div", {
    className: "row"
  }, __jsx("div", {
    className: "col-lg-9 col-md-8"
  }, __jsx("div", {
    className: "pr-rating__left-sec"
  }, __jsx("div", {
    className: "pr-rating__wrapper pr-rating__wrapper--left"
  }, __jsx("div", {
    className: "pr-rating__rate-wrapper"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Rate"], {
    style: {
      color: "#000"
    },
    className: "c-product-info__stars",
    disabled: true,
    value: avgReview,
    allowHalf: true
  })), __jsx("p", {
    className: "pr-rating__para"
  }, "(", total, " reviews)"), __jsx("h1", {
    className: "pr-rating__heading"
  }, avgReview))))));
};

ProductRating.defaultProps = {
  reviews: []
};
/* harmony default export */ __webpack_exports__["default"] = (ProductRating);

/***/ })

};;