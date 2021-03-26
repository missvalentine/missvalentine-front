exports.ids = [101];
exports.modules = {

/***/ "KEcA":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UserDetails; });
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("/T1H");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const Login = next_dynamic__WEBPACK_IMPORTED_MODULE_0___default()(() => __webpack_require__.e(/* import() */ 65).then(__webpack_require__.bind(null, "hmzm")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("hmzm")],
    modules: ["../../components/popups/Login"]
  }
});
class UserDetails extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "next", e => {
      e.preventDefault();
      this.props.nextStep();
    });
  }

  render() {
    const {
      values
    } = this.props;
    return __jsx("div", null, __jsx(Login, {
      consult: true
    }), __jsx("form", {
      className: "c-address-form"
    }, __jsx("div", {
      className: "container-fluid"
    }, __jsx("div", {
      className: "row c-userDetails"
    }))));
  }

}

/***/ })

};;