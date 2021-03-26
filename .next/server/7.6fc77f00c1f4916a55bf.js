exports.ids = [7];
exports.modules = {

/***/ "DCDu":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("K2gz");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


class Checkbox extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    const {
      checked,
      onChange,
      parentClass,
      versions,
      children,
      inputId,
      label
    } = this.props;
    const componentClass = "c-checkbox";
    const versionClass = versions.map(el => `${componentClass}--${el}`).join(" ");
    const parent = `${parentClass}__${componentClass.replace("c-", "")}`;
    const className = classnames__WEBPACK_IMPORTED_MODULE_1___default()(componentClass, {
      [versionClass]: versions,
      [parent]: parentClass
    });
    return __jsx("div", {
      className: className
    }, __jsx("label", {
      className: "c-checkbox__label"
    }, __jsx("input", {
      onChange: onChange,
      checked: checked,
      type: "checkbox",
      className: "c-checkbox__input"
    }), versions == "dark" && __jsx("span", {
      className: "ant-checkbox-inner"
    }), versions == "light" && __jsx("span", {
      style: {
        borderRadius: 0
      },
      className: "ant-checkbox-inner"
    }), __jsx("span", {
      className: "c-checkbox__label-text"
    }, label, children)));
  }

}

Checkbox.defaultProps = {
  // inputId: `${parseInt(Math.random() * new Date().getTime())}`,
  versions: []
};
/* harmony default export */ __webpack_exports__["default"] = (Checkbox);

/***/ })

};;