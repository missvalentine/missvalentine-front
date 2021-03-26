exports.ids = [78,3,20];
exports.modules = {

/***/ "foi1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("/T1H");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Exp3");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _form_components_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("s5Da");
/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("2MRG");
/* harmony import */ var _redux_actions_drawers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("JLUA");
/* harmony import */ var _redux_actions_user__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("j6IE");
/* harmony import */ var _services_helpers_regex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("p53m");
/* harmony import */ var react_component_debounce__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("14x6");
/* harmony import */ var react_component_debounce__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_component_debounce__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _constants_projectSettings__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("xSWb");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const Heading = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(() => __webpack_require__.e(/* import() */ 0).then(__webpack_require__.bind(null, "h1bS")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("h1bS")],
    modules: ['../Heading']
  }
});
const Input = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(() => __webpack_require__.e(/* import() */ 1).then(__webpack_require__.bind(null, "xcph")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("xcph")],
    modules: ['../form-components/Input']
  }
});
const Checkbox = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(() => __webpack_require__.e(/* import() */ 7).then(__webpack_require__.bind(null, "DCDu")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("DCDu")],
    modules: ['../form-components/Checkbox']
  }
});








const DebounceInput = react_component_debounce__WEBPACK_IMPORTED_MODULE_9___default()({
  valuePropName: 'value',
  triggerMs: 1000
})(Input);

class RegistrationForm extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor() {
    super();

    _defineProperty(this, "handleSubmit", e => {
      e.preventDefault();
      this.props.form.validateFields((err, values) => {
        if (!err) {
          //     console.log("Received values of form: ", values);
          const {
            email,
            password
          } = values;
          this.setState({
            isLoading: true,
            error: null
          });
          Object(_services_api__WEBPACK_IMPORTED_MODULE_5__[/* registerUser */ "v"])({
            email,
            password,
            password2: password,
            firstname: 'null',
            lastname: 'null',
            phonenumber: 'null'
          }).then(res => {
            this.setState({
              isLoading: false
            });
            console.log({
              res
            });

            if (res.status === 200) {
              if (res.data.status) {
                this.props.setUser(res.data.user);
                this.props.toggleRegBar();
              } else {
                const {
                  error
                } = res.data;

                if (error.endsWith('is already taken')) {
                  this.setState({
                    isAlreadyUser: true
                  });
                } else {
                  this.setState({
                    error: res.data.error
                  });
                }
              }
            } else {
              this.setState({
                error: 'something wrong'
              });
            }
          }).catch(err => {
            console.log({
              err
            });
            this.setState({
              isLoading: false,
              error: 'something wrong'
            });
          });
        }
      });
    });

    this.state = {
      isLoading: false,
      error: null,
      isAlreadyUser: false
    };
  }

  render() {
    const {
      drawerToDisplay,
      form: {
        getFieldDecorator
      }
    } = this.props;
    const {
      isLoading,
      error,
      isAlreadyUser
    } = this.state;
    return __jsx("div", {
      className: "c-registration"
    }, __jsx(Heading, {
      parentClass: "c-registration"
    }, isAlreadyUser ? __jsx("span", null, "Looks like you already", __jsx("br", null), "have an account") : `Welcome to ${_constants_projectSettings__WEBPACK_IMPORTED_MODULE_10__[/* projectName */ "g"]}!`), !isAlreadyUser && __jsx("p", {
      className: "c-registration__info"
    }, "Fill in your details to create an account"), !isAlreadyUser && __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Form"], {
      onSubmit: this.handleSubmit,
      className: "c-ant-from c-registration__form"
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Form"].Item, null, getFieldDecorator('email', {
      rules: [{
        max: 40,
        message: "You can't use more than 40 characters."
      }, {
        required: true,
        message: 'Please input your e-mail!'
      }, {
        pattern: _services_helpers_regex__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"].email,
        message: 'Please enter a valid E-mail.'
      }]
    })(__jsx(DebounceInput, {
      style: {
        padding: '0px',
        fontSize: '16px',
        fontFamily: 'futuraBT-book',
        marginBottom: '20px'
      },
      versions: ['dark'],
      parentClass: "c-registration",
      label: "E-mail"
    }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Form"].Item, null, getFieldDecorator('password', {
      rules: [{
        required: true,
        message: 'Please input your password!'
      }, {
        max: 20,
        message: "You can't use more than 20 characters."
      }, {
        min: 6,
        message: 'Minimum 6 characters is require.'
      }]
    })(__jsx(DebounceInput, {
      style: {
        padding: '0px',
        fontSize: '16px',
        fontFamily: 'futuraBT-book',
        width: '80%'
      },
      type: "password",
      parentClass: "c-registration",
      versions: ['dark'],
      label: "Password"
    }))), __jsx("div", {
      className: "c-registration__terms",
      style: {
        paddingTop: '30px'
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Form"].Item, null, getFieldDecorator('agree', {
      valuePropName: 'checked',
      initialValue: true,
      rules: [{
        required: true,
        message: 'Please agree the terms and conditions.',
        transform: value => value || undefined,
        type: 'boolean'
      }]
    })(__jsx(Checkbox, {
      style: {
        marginBottom: 0
      },
      versions: ['dark']
    }, "I agree to", __jsx("strong", {
      style: {
        marginLeft: '4px',
        marginRight: '4px'
      }
    }, __jsx("i", null, "Terms and Conditions")), "and", __jsx("strong", {
      style: {
        marginLeft: '4px',
        marginRight: '4px'
      }
    }, __jsx("i", null, "Privacy Policy")))), __jsx("p", {
      style: {
        marginTop: 0
      },
      className: "c-registration__inst"
    }, "Already have an account?", ' ', __jsx("span", {
      onClick: () => {
        drawerToDisplay('login');
      },
      className: "c-registration__link"
    }, "SIGN IN")))), __jsx("div", {
      className: "c-registration__error-block"
    }, isLoading && __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
      type: "loading",
      className: "c-registration__spinner c-spinner",
      style: {
        fontSize: 24
      },
      spin: true
    }), error && __jsx("p", {
      className: "c-registration__error"
    }, error)), __jsx("div", {
      className: "row mb-4",
      style: {
        justifyContent: 'space-around'
      }
    }, __jsx(_form_components_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
      theme: "dark",
      disabled: isLoading //versions={["block"]}

    }, "Register"))), isAlreadyUser && __jsx("div", {
      className: "c-registration__no-form-wrapper"
    }, __jsx("br", null), __jsx("br", null), __jsx("br", null), __jsx("br", null), __jsx("p", {
      className: "c-registration__inst"
    }, "You can login from", ' ', __jsx("span", {
      onClick: () => {
        drawerToDisplay('login');
      },
      className: "c-registration__link"
    }, "HERE"))));
  }

}

const Registration = antd__WEBPACK_IMPORTED_MODULE_2__["Form"].create({
  name: 'registration'
})(RegistrationForm);
const mapActionToProps = {
  drawerToDisplay: _redux_actions_drawers__WEBPACK_IMPORTED_MODULE_6__[/* drawerToDisplay */ "a"],
  setUser: _redux_actions_user__WEBPACK_IMPORTED_MODULE_7__[/* setUser */ "a"],
  toggleRegBar: _redux_actions_drawers__WEBPACK_IMPORTED_MODULE_6__[/* toggleRegBar */ "f"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(state => state, mapActionToProps)(Registration));

/***/ }),

/***/ "p53m":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const regex = {
  password: new RegExp("^([a-z0-9]{5,})$"),
  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  phone: /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/,
  name: /^[a-z ,.'-]+$/i,
  fullName: /^[a-z ,.'-]+$/i
};
/* harmony default export */ __webpack_exports__["a"] = (regex);

/***/ }),

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