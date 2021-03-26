exports.ids = [100];
exports.modules = {

/***/ "zVbI":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Scheduling; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Exp3");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class Scheduling extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "saveAndContinue", e => {
      e.preventDefault();
      this.props.nextStep();
    });

    _defineProperty(this, "back", e => {
      e.preventDefault();
      this.props.prevStep();
    });
  }

  render() {
    const {
      values
    } = this.props;
    return __jsx("form", {
      className: "c-scheduling"
    }, __jsx("div", {
      className: "container-fluid"
    }, __jsx("div", {
      className: "consult-form"
    }, __jsx("p", {
      className: "c-scheduling__para"
    }, "How Long do you expect this consultation to go on for?"), __jsx("div", {
      className: "radio__wrapper"
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Radio"].Group, {
      onChange: e => {
        this.props.radioChange(e, "scheduling");
      },
      value: values.scheduling
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Radio"], {
      className: "c-contact-form__radio b-border-none",
      value: 15
    }, __jsx("b", null, "15 min")), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Radio"], {
      className: "c-contact-form__radio b-border-none",
      value: 30
    }, __jsx("b", null, "30 min")))), __jsx("div", {
      className: "c-personalDetails__btn-wrap"
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      className: "c-btn c-btn--dark",
      onClick: this.back,
      versions: ["outline", "block"]
    }, "Back"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      className: "c-btn c-btn--dark",
      onClick: this.saveAndContinue
    }, "Next")))));
  }

}

/***/ })

};;