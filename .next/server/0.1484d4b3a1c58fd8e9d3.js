exports.ids = [0];
exports.modules = {

/***/ "h1bS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("K2gz");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



const Heading = (_ref) => {
  let {
    versions,
    children,
    h,
    parentClass,
    subHeading,
    className
  } = _ref,
      props = _objectWithoutProperties(_ref, ["versions", "children", "h", "parentClass", "subHeading", "className"]);

  const componentClass = subHeading ? `c-sub-heading` : `c-heading`;
  const versionClass = versions.map(el => `${componentClass}--${el}`).join(" ");
  const parent = `${parentClass}__${componentClass.replace("c-", "")}`;
  const elementClassName = classnames__WEBPACK_IMPORTED_MODULE_1___default()(componentClass, {
    [versionClass]: versions,
    [parent]: parentClass,
    [className]: className
  });

  switch (h) {
    case 1:
    case "1":
      return __jsx("h1", _extends({
        className: elementClassName
      }, props), children);

    case 2:
    case "2":
      return __jsx("h2", _extends({
        className: elementClassName
      }, props), children);

    case 3:
    case "3":
      return __jsx("h3", _extends({
        className: elementClassName
      }, props), children);

    case 4:
    case "4":
      return __jsx("h4", _extends({
        className: elementClassName
      }, props), children);

    case 5:
    case "5":
      return __jsx("h5", _extends({
        className: elementClassName
      }, props), children);

    case 6:
    case "6":
      return __jsx("h6", _extends({
        className: elementClassName
      }, props), children);

    default:
      return __jsx("h2", _extends({
        className: elementClassName
      }, props), children);
  }
};

Heading.defaultProps = {
  versions: ["default"],
  h: 2,
  subHeading: false
};
/* harmony default export */ __webpack_exports__["default"] = (Heading);

/***/ })

};;