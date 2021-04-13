exports.ids = [7];
exports.modules = {

/***/ "xcph":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("K2gz");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Exp3");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("nZwT");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





class Input extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    const _this$props = this.props,
          {
      value,
      onChange,
      parentClass,
      inputId,
      label,
      type,
      suffix,
      prefix,
      versions,
      name,
      wrapperClass
    } = _this$props,
          props = _objectWithoutProperties(_this$props, ["value", "onChange", "parentClass", "inputId", "label", "type", "suffix", "prefix", "versions", "name", "wrapperClass"]);

    const componentClass = "c-input";
    const versionClass = versions.map(el => `${componentClass}--${el}`).join(" ");
    const parent = `${parentClass}__${componentClass.replace("c-", "")}`;
    const className = classnames__WEBPACK_IMPORTED_MODULE_1___default()(componentClass, {
      [versionClass]: versions,
      [parent]: parentClass,
      [wrapperClass]: wrapperClass
    });

    if (type == "password") {
      return __jsx("div", {
        className: className
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Input"].Password, _extends({
        onChange: onChange // id={inputId}

      }, props, {
        name: name,
        type: type,
        value: value,
        placeholder: label,
        prefix: prefix,
        suffix: suffix,
        allowClear: versions.filter(version => version === "discount")[0] === "discount" ? true : false,
        className: versions[0] === "discount" ? "c-input" : "c-input__input"
      })));
    } else {
      return __jsx("div", {
        className: className,
        style: {
          width: '100%'
        }
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Input"], _extends({
        onChange: onChange // id={inputId}

      }, props, {
        name: name,
        type: type,
        value: value,
        placeholder: label,
        prefix: prefix,
        suffix: suffix,
        allowClear: versions.filter(version => version === "discount")[0] === "discount" ? true : false,
        className: versions[0] === "discount" ? "c-input" : "c-input__input"
      })));
    }
  }

}

Input.defaultProps = {
  inputId: `${parseInt(Math.random() * new Date().getTime())}`,
  type: "text",
  versions: ["default"]
};
/* harmony default export */ __webpack_exports__["default"] = (Input);

/***/ })

};;