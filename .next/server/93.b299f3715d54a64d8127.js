exports.ids = [93];
exports.modules = {

/***/ "uy15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("/T1H");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Exp3");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Button = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(() => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, "s5Da")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("s5Da")],
    modules: ["./form-components/Button"]
  }
});
const EmailReg = new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{0,15}/g);


const SubscribeForm = ({
  email,
  onEmailChange,
  subscribeUser
}) => {
  return __jsx("div", {
    className: "c-subscribe-from"
  }, __jsx("form", {
    onSubmit: e => {
      subscribeUser(e, email);
    },
    className: "c-subscribe-from__from"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    className: "c-subscribe-from__input ",
    type: "email",
    value: email,
    placeholder: "your e-mail",
    onChange: onEmailChange
  }), __jsx(Button, {
    type: "submit"
  }, "Subscribe")));
};

/* harmony default export */ __webpack_exports__["default"] = (SubscribeForm);

/***/ })

};;