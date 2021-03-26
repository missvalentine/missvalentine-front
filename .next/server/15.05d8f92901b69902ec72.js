exports.ids = [15];
exports.modules = {

/***/ "Q9jL":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("K2gz");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("g8bt");
/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_2__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const HImgSection = ({
  image,
  children,
  parentClass,
  version,
  alt
}) => {
  const parent = `${parentClass}__h-img-section`;
  const versionClass = version.map(el => `c-h-img-section--${el}`).join(" ");
  return __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("c-h-img-section", {
      [parent]: parentClass,
      [versionClass]: version
    })
  }, __jsx("div", {
    className: "c-h-img-section"
  }, __jsx("div", {
    className: "c-h-img-section__content-wrapper"
  }, __jsx("div", {
    className: "c-h-img-section__content"
  }, children)), __jsx("div", {
    className: "c-h-img-section__img-wrapper"
  }, __jsx(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_2__["LazyLoadImage"], {
    height: "100%",
    width: "100%",
    style: {
      objectFit: "contain"
    },
    src: image // src="/images/new_image.png"
    ,
    className: "c-h-img-section__img",
    alt: alt
  }))));
};

HImgSection.defaultProps = {
  version: ["default"]
};
/* harmony default export */ __webpack_exports__["default"] = (HImgSection);

/***/ })

};;