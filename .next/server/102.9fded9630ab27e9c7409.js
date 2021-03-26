exports.ids = [102];
exports.modules = {

/***/ "Nnx9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return IntakeDetails; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Exp3");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class IntakeDetails extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "next", e => {
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
      className: "c-address-form"
    }, __jsx("div", {
      className: "container-fluid"
    }, __jsx("div", {
      className: "consult-form"
    }, __jsx("h5", {
      className: "c-intakeDetails__center c-intakeDetails__margin "
    }, " ", "Allergies , Medications & Dietary Supplements"), __jsx("p", {
      className: "c-intakeDetails__center"
    }, "Please list the things you are allergic to here . For example: Pollen: Nasal congestion , Peanuts : Anaphylaxis, Strawberries: Hives, Etc. Please list your medications here. If possible , please provide the dose , and when you take them . Example: Valium , 2 mg at night , 5 mg twice daily Please list your dietary supplements here . If possible , Please provide the dose , and when you take them . Example : Vitamin D , 400 IU daily, Magnesium 300 mg twice daily"), __jsx("br", null), __jsx("textarea", {
      className: "c-input__input",
      value: values.allergies,
      placeholder: "Allergies",
      onChange: this.props.handleChange("allergies")
    }), values.allergies_err && __jsx("span", {
      className: "error"
    }, values.allergies_err), __jsx("br", null), __jsx("h5", {
      className: "c-intakeDetails__center c-intakeDetails__margin"
    }, " ", "Current Condition and Medical History", " "), __jsx("p", {
      className: "c-intakeDetails__center"
    }, "Please list all the medical conditions, including surgeries and diagnoses, that you have experienced in the past or are currently experiencing."), __jsx("br", null), __jsx("textarea", {
      className: "c-input__input",
      value: values.currentCondition,
      placeholder: "Current Condition",
      onChange: this.props.handleChange("currentCondition")
    }), values.currentCondition_err && __jsx("span", {
      className: "error"
    }, values.currentCondition_err), __jsx("br", null), __jsx("div", {
      className: "c-personalDetails__btn-wrap"
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      className: "c-btn c-btn--dark",
      onClick: this.back // versions={["outline", "block"]}

    }, "Back"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      className: "c-btn c-btn--dark",
      onClick: this.next
    }, "Next")))));
  }

}

/***/ })

};;