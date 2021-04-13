exports.ids = [42];
exports.modules = {

/***/ "l3Ze":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("/T1H");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("g8bt");
/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_2__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const Heading = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(() => __webpack_require__.e(/* import() */ 0).then(__webpack_require__.bind(null, "h1bS")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("h1bS")],
    modules: ['./Heading']
  }
});

const Button = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(() => __webpack_require__.e(/* import() */ 3).then(__webpack_require__.bind(null, "s5Da")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("s5Da")],
    modules: ['./form-components/Button']
  }
});

const LRSection = ({
  heading,
  subHeading,
  content,
  children,
  link,
  linkText,
  image,
  alt,
  onLinkClick
}) => __jsx("div", {
  className: "c-lr-section"
}, __jsx("div", {
  className: "c-lr-section__image"
}, __jsx(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_2__["LazyLoadImage"], {
  className: "img-fluid c-lr-section__img",
  src: image,
  alt: alt ? alt : heading
})), __jsx("div", {
  className: "c-lr-section__content"
}, __jsx(Heading, {
  parentClass: "c-lr-section"
}, heading), __jsx("h4", {
  className: "c-lr-section__sub-heading"
}, subHeading), content, children, __jsx("div", {
  className: "c-lr-section__btn-wrapper"
}, linkText && __jsx(Button, {
  theme: "btm-br",
  type: "link",
  onClick: () => {
    if (typeof onLinkClick === 'function') {
      onLinkClick();
    }
  },
  link: link
}, linkText)))) // </div>
;

/* harmony default export */ __webpack_exports__["default"] = (LRSection);

/***/ })

};;