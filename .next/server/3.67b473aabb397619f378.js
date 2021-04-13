exports.ids = [3];
exports.modules = {

/***/ "s5Da":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("K2gz");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Button = ({
  type,
  value,
  children,
  onClick,
  link,
  target,
  theme,
  parentClass,
  directClass,
  versions,
  disabled
}) => {
  const parent = `${parentClass}__btn`;
  const versionClass = versions.map(el => `c-btn--${el}`).join(" ");

  const onBtnClick = () => {
    if (typeof onClick === "function") onClick();
  };

  const className = classnames__WEBPACK_IMPORTED_MODULE_2___default()("c-btn", {
    [`c-btn--${theme}`]: theme,
    [parent]: parentClass,
    [versionClass]: versions,
    [directClass]: directClass
  });

  switch (type) {
    case "button":
    case "submit":
      return __jsx("button", {
        disabled: disabled,
        className: className,
        type: type,
        onClick: onBtnClick
      }, value, children);

    case "link":
      if (typeof link === "string") return __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: link
      }, __jsx("a", {
        className: className,
        target: target ? "_blank" : "",
        onClick: onBtnClick
      }, value, children));
      return __jsx("span", {
        className: className,
        onClick: onBtnClick
      }, value, children);

    default:
      return __jsx("button", {
        disabled: disabled,
        className: className,
        type: type,
        onClick: onBtnClick
      }, value, children);
  }
};

Button.defaultProps = {
  versions: [],
  disabled: false
};
/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ })

};;