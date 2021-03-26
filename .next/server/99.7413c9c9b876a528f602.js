exports.ids = [99];
exports.modules = {

/***/ "YguY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PersonalDetails; });
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("/T1H");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Exp3");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const Input = next_dynamic__WEBPACK_IMPORTED_MODULE_0___default()(() => __webpack_require__.e(/* import() */ 1).then(__webpack_require__.bind(null, "xcph")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("xcph")],
    modules: ["../form-components/Input"]
  }
});

class PersonalDetails extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "saveAndContinue", e => {
      e.preventDefault();
      const {
        values
      } = this.props;
      this.props.nextStep();
    });

    _defineProperty(this, "back", e => {
      e.preventDefault();
      this.props.prevStep();
    });
  }

  render() {
    const {
      values: {
        name,
        name_err,
        gender,
        weight,
        weight_err,
        age,
        age_err,
        notes,
        notes_err
      }
    } = this.props;
    return __jsx("form", {
      // onSubmit={onSubmit}
      className: "c-personalDetails"
    }, __jsx("div", {
      className: "container-fluid"
    }, __jsx("div", {
      className: "consult-form"
    }, __jsx(Input, {
      parentClass: "c-address-form",
      label: "Name",
      value: name,
      onChange: this.props.handleChange("name")
    }), name_err && __jsx("span", {
      className: "error",
      style: {
        marginTop: "-1em",
        display: "block",
        marginBottom: "1em"
      }
    }, name_err), __jsx("div", {
      className: "radio__wrapper"
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Radio"].Group, {
      onChange: e => {
        this.props.radioChange(e, "gender");
      },
      value: gender
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Radio"], {
      className: "c-contact-form__radio b-border-none",
      value: "male"
    }, __jsx("b", null, "Male")), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Radio"], {
      className: "c-contact-form__radio b-border-none",
      value: "female"
    }, __jsx("b", null, "Female")))), __jsx("div", {
      className: "c-address-form__radio-wrapper"
    }), __jsx(Input, {
      type: "number",
      max: "999",
      min: "20",
      parentClass: "c-address-form",
      label: "Weight",
      value: weight,
      onChange: this.props.handleChange("weight")
    }), weight_err && __jsx("span", {
      className: "error",
      style: {
        marginTop: "-1em",
        display: "block",
        marginBottom: "1em"
      }
    }, weight_err), __jsx(Input, {
      type: "number",
      max: "150",
      min: "18",
      parentClass: "c-address-form",
      label: "Age",
      value: age,
      onChange: this.props.handleChange("age")
    }), age_err && __jsx("span", {
      className: "error",
      style: {
        marginTop: "-1em",
        display: "block",
        marginBottom: "1em"
      }
    }, age_err), __jsx(Input, {
      parentClass: "c-address-form",
      label: "Notes for Doctor",
      value: notes,
      onChange: this.props.handleChange("notes")
    }), notes_err && __jsx("span", {
      className: "error",
      style: {
        marginTop: "-1em",
        display: "block",
        marginBottom: "1em"
      }
    }, notes_err), __jsx("div", {
      className: "c-personalDetails__btn-wrap"
    }, __jsx("span", null), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      className: "c-btn c-btn--dark",
      onClick: this.saveAndContinue
    }, "Next")))));
  }

}

/***/ })

};;