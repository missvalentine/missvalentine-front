exports.ids = [43];
exports.modules = {

/***/ "TtQW":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("K2gz");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("g8bt");
/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _constants_projectSettings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("xSWb");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const Logo = ({
  versions,
  parentClass,
  full,
  text,
  logo,
  url
}) => {
  const componentClass = `c-logo`;
  const versionClass = versions.map(el => `${componentClass}--${el}`).join(' ');
  const parent = `${parentClass}__${componentClass.replace('c-', '')}`;
  const className = classnames__WEBPACK_IMPORTED_MODULE_2___default()(componentClass, {
    [versionClass]: versions,
    [parent]: parentClass
  });

  if (versions[0] === 'footer') {
    return __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/"
    }, __jsx("a", {
      className: className
    }, __jsx("div", {
      className: "c-logo__text-footer"
    }, _constants_projectSettings__WEBPACK_IMPORTED_MODULE_4__[/* projectName */ "d"])));
  } else if (versions == 'navbar') {
    return __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/"
    }, __jsx("a", {
      className: className
    }, __jsx("div", {
      className: "c-logo__text"
    }, _constants_projectSettings__WEBPACK_IMPORTED_MODULE_4__[/* projectName */ "d"])));
  }

  return __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/"
  }, __jsx("a", {
    className: className
  }, __jsx("div", {
    className: "c-logo__text"
  }, _constants_projectSettings__WEBPACK_IMPORTED_MODULE_4__[/* projectName */ "d"])));
};

Logo.defaultProps = {
  versions: [],
  full: false
};
/* harmony default export */ __webpack_exports__["default"] = (Logo);

/***/ })

};;