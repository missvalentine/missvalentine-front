exports.ids = [40];
exports.modules = {

/***/ "4E/y":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createContactUs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return deleteContact; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getAllQuery; });
/* unused harmony export getAllEnquiry */
/* unused harmony export getAllPromotions */
/* harmony import */ var _utilis_useHttp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("CuiX");

const _id = '601bef27d29ac85814619ba3';
const createContactUs = data => Object(_utilis_useHttp__WEBPACK_IMPORTED_MODULE_0__[/* useHttp */ "a"])({
  method: 'post',
  url: `/contact`,
  data
});
const deleteContact = id => Object(_utilis_useHttp__WEBPACK_IMPORTED_MODULE_0__[/* useHttp */ "a"])({
  method: 'delete',
  url: `/contact/${id}/${_id}`,
  data
});
const getAllQuery = data => Object(_utilis_useHttp__WEBPACK_IMPORTED_MODULE_0__[/* useHttp */ "a"])({
  method: 'get',
  url: `/contact/query/${_id}`,
  data
});
const getAllEnquiry = data => Object(_utilis_useHttp__WEBPACK_IMPORTED_MODULE_0__[/* useHttp */ "a"])({
  method: 'get',
  url: `/contact/enquiry/${_id}`,
  data
});
const getAllPromotions = data => Object(_utilis_useHttp__WEBPACK_IMPORTED_MODULE_0__[/* useHttp */ "a"])({
  method: 'get',
  url: `/contact/promotions/${_id}`,
  data
});

/***/ }),

/***/ "f94N":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/dynamic"
var dynamic_ = __webpack_require__("/T1H");
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic_);

// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__("Exp3");

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// CONCATENATED MODULE: ./services/helpers/regex.js
const regex = {
  password: new RegExp("^([a-z0-9]{5,})$"),
  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  phone: /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/,
  name: /^[a-z ,.'-]+$/i,
  fullName: /^[a-z ,.'-]+$/i
};
/* harmony default export */ var helpers_regex = (regex);
// EXTERNAL MODULE: external "react-component-debounce"
var external_react_component_debounce_ = __webpack_require__("14x6");
var external_react_component_debounce_default = /*#__PURE__*/__webpack_require__.n(external_react_component_debounce_);

// EXTERNAL MODULE: ./constants/projectSettings.js
var projectSettings = __webpack_require__("xSWb");

// EXTERNAL MODULE: ./services/apis/contact.js
var contact = __webpack_require__("4E/y");

// CONCATENATED MODULE: ./components/forms/ContactForm.js

var __jsx = external_react_default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const Input = dynamic_default()(() => __webpack_require__.e(/* import() */ 7).then(__webpack_require__.bind(null, "xcph")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("xcph")],
    modules: ['../form-components/Input']
  }
});
const Button = dynamic_default()(() => __webpack_require__.e(/* import() */ 37).then(__webpack_require__.bind(null, "s5Da")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("s5Da")],
    modules: ['../form-components/Button']
  }
});



 // import './styles/_all.scss';

const DebounceInput = external_react_component_debounce_default()({
  valuePropName: 'value',
  triggerMs: 1000
})(Input);

class ContactForm_Contact extends external_react_default.a.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "onSubmit", e => {
      e.preventDefault();
      this.props.form.validateFields((err, values) => {
        if (!err) {
          console.log({
            values
          });
          this.setState({
            isLoading: true
          }, () => {
            Object(contact["a" /* createContactUs */])(_objectSpread(_objectSpread({}, values), {}, {
              callScreen: 'contactPage'
            })).then(res => {
              this.setState({
                isLoading: false
              });
              console.log('res.data', res.data, res.data.success);

              if (res.data.success) {
                external_antd_["Modal"].success({
                  title: 'Email Registered Successfully!',
                  okText: 'Explore Products',

                  onOk() {
                    router_default.a.push('/');
                  },

                  wrapClassName: 'c-footer-modal'
                });
              } else {
                external_antd_["Modal"].error({
                  title: 'Request Failed!',
                  okText: 'Explore Products',

                  onOk() {
                    router_default.a.push('/');
                  },

                  wrapClassName: 'c-footer-modal'
                });
              }
            }).catch(err => external_antd_["Modal"].error({
              title: 'Request Failed!',
              okText: 'Explore Products',

              onOk() {
                router_default.a.push('/');
              },

              wrapClassName: 'c-footer-modal'
            }));
          });
        }
      });
    });

    this.state = {
      isLoading: false
    };
  }

  render() {
    const {
      Item
    } = external_antd_["Form"];
    const {
      getFieldDecorator
    } = this.props.form;
    const {
      isLoading
    } = this.state;
    console.log(this.props.form);
    return __jsx("div", {
      className: "c-contact-form"
    }, __jsx(external_antd_["Form"], {
      onSubmit: this.onSubmit
    }, __jsx("div", {
      className: "c-contact-form__row"
    }, __jsx("div", {
      className: "c-contact-form__row-left"
    }, __jsx(Item, null, getFieldDecorator('subject', {
      initialValue: 'Order Enquiry'
    })(__jsx(external_antd_["Radio"].Group, null, __jsx(external_antd_["Radio"], {
      className: "c-contact-form__radio",
      value: "Order Enquiry"
    }, __jsx("b", null, "Order Enquiry"), __jsx("br", null), "Questions about an order you have placed online."), __jsx(external_antd_["Radio"], {
      className: "c-contact-form__radio",
      value: "Product Enquiry"
    }, __jsx("b", null, "Product Enquiry"), __jsx("br", null), "Questions you may have about specific products and ingredients."), __jsx(external_antd_["Radio"], {
      className: "c-contact-form__radio",
      value: "Wholesale Enquiry"
    }, __jsx("b", null, "Wholesale Enquiry"), __jsx("br", null), "Questions about distributing ", projectSettings["d" /* projectName */], " CBD."), __jsx(external_antd_["Radio"], {
      className: "c-contact-form__radio",
      value: "Press and Marketing Enquiry"
    }, __jsx("b", null, "Press and Marketing Enquiry"), __jsx("br", null), "Questions you may have about press and marketing opportunities"), __jsx(external_antd_["Radio"], {
      className: "c-contact-form__radio c-contact-form__radio--last",
      value: "General Feedback or Questions"
    }, __jsx("b", null, "General Feedback or Questions"), __jsx("br", null), "Please contact us with any general questions or thoughts."))))), __jsx("div", {
      className: "c-contact-form__row-right"
    }, __jsx("div", {
      className: "c-contact-form__main-form"
    }, __jsx(Item, null, getFieldDecorator('name', {
      rules: [{
        required: true,
        message: 'Please input your name!'
      }, {
        pattern: helpers_regex.name,
        message: 'Please enter a valid name!'
      }, {
        max: 20
      }]
    })(__jsx(DebounceInput, {
      versions: ['light'] // pattern={[
      //     '^.{8,}$', // min 8 chars
      //     '(?=.*\\d)', // number required
      //     '(?=.*[A-Z])', // uppercase letter
      //   ]}
      ,
      parentClass: "c-contact-form",
      label: "Name"
    }))), __jsx(Item, null, getFieldDecorator('email', {
      rules: [{
        required: true,
        message: 'Please input your e-mail!'
      }, {
        max: 40,
        message: "You can't use more than 40 characters."
      }, {
        pattern: helpers_regex.email,
        message: 'Please enter a valid E-mail!'
      }]
    })(__jsx(DebounceInput, {
      versions: ['light'],
      parentClass: "c-contact-form",
      label: "E-mail"
    }))), __jsx(Item, null, getFieldDecorator('text', {
      rules: [{
        required: true,
        message: 'Please input your message!'
      }, {
        max: 250,
        message: "You can't use more than 250 characters."
      }]
    })(__jsx(Input, {
      versions: ['light'],
      parentClass: "c-contact-form",
      label: "Message"
    }))), __jsx("div", {
      className: "contact-form-button"
    }, __jsx(Button, {
      theme: "dark",
      type: "submit",
      disabled: isLoading // versions={["block"]}

    }, "Send E-mail"))), __jsx("div", {
      className: "c-contact-form__info-block"
    }, __jsx("div", {
      className: "c-contact-form__info-block__row"
    }, __jsx("div", {
      className: "c-contact-form__info-block__row-left"
    }, __jsx("p", {
      className: "c-contact-form__text",
      style: {
        fontWeight: '600',
        fontFamily: "'Montserrat', sans-serif",
        fontSize: '14px'
      }
    }, "Our Phone Number")), __jsx("div", {
      className: "c-contact-form__info-block__row-right"
    }, __jsx("a", {
      href: "tel:+917683037227",
      className: "c-contact-form__link",
      style: {
        fontFamily: "'Montserrat', sans-serif",
        fontSize: '14px'
      }
    }, "+91 7683037227"))), __jsx("div", {
      className: "c-contact-form__info-block__row",
      style: {
        marginTop: '-8px',
        fontSize: '14px'
      }
    }, __jsx("div", {
      className: "c-contact-form__info-block__row-left"
    }, __jsx("p", {
      className: "c-contact-form__text",
      style: {
        fontWeight: '600',
        fontFamily: "'Montserrat', sans-serif",
        fontSize: '14px'
      }
    }, "Our E-mail")), __jsx("div", {
      className: "c-contact-form__info-block__row-right"
    }, __jsx("a", {
      href: "mailto:info@missvalentineinnerwear.com",
      className: "c-contact-form__link",
      style: {
        fontFamily: "'Montserrat', sans-serif",
        fontSize: '14px'
      }
    }, "info@missvalentineinnerwear.com"))))))));
  }

}

const ContactFrom = external_antd_["Form"].create({
  name: 'contact'
})(ContactForm_Contact);
/* harmony default export */ var ContactForm = __webpack_exports__["default"] = (ContactFrom);

/***/ })

};;