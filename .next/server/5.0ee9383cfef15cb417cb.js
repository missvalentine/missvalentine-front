exports.ids = [5];
exports.modules = {

/***/ "TDXe":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _projectSettings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("xSWb");

const msgStrings = {
  LOGIN_ERROR: "Invalid username or password.",
  INVALID_ZIP: "Please enter a valid zip code.",
  NO_SHIPMENT: "We couldn't find a carrier. Please try again later",
  cancelOrder: "Are you sure you want to cancel this order?",
  myOrderPageFooterDetails: [{
    details: "Find the estimated delivery date for your recent purchase"
  }, {
    details: "Track any returns for your order"
  }, {
    details: "See where the order is being shipped"
  }],
  warningText: "Warning",
  productDetailModalTitle: "Product Details",
  projectName: _projectSettings__WEBPACK_IMPORTED_MODULE_0__[/* projectName */ "g"],
  // validation error messages
  // registration
  //first name missing
  firstNameMissingErrMsg: "First Name is required",
  //last name missing
  lastNameMissingErrMsg: "Last Name is required",
  //email missing
  emailMissingErrMsg: "Email is required",
  //email valid
  emailNotValidErrMsg: "Email Id is not valid",
  //Phone missing
  phoneMissingErrMsg: "Phone is required",
  //Phone Valid
  phoneNotValidErrMsg: "Phone number is not valid",
  //Password missing
  passwordMissingErrMsg: "Password is required",
  //Password short
  passwordShortErrMsg: "Password should be 6 characters",
  //Password Valid
  passwordValidErrMsg: "A minimum 6 characters password contains a combination of uppercase and lowercase letter and number",
  //Password match
  onlyDigits: "Only Digits",
  //Password match
  passwordMatchErrMsg: "Passwords do not match.",
  //Confirm Password match
  confirmPasswordErrMsg: "Confirm Password is required",
  //Zip code error match
  zipMissingErrMsg: "Zip Code is required",
  zipValidErrMsg: "Zip Code Not Valid",
  // Website code error match
  websiteMissingErrMsg: "Website is required",
  websiteValidErrMsg: "Website Url is  Not Valid",
  // Instagram code error match
  instagramMissingErrMsg: "Instagram is required",
  instagramValidErrMsg: "Instagram Url is  Not Valid",
  // Facebook code error match
  faceBookMissingErrMsg: "Facebook is required",
  faceBookValidErrMsg: "Facebook Url is  Not Valid",
  // new password message
  newPasswordSuccessMsg: "Your password has been updated successfully",
  faxMissingErrMsg: "Fax Number is required",
  faxValidErrMsg: "Fax Number is  Not Valid",
  // something wrong
  someThingWrongTryAgain: "Something was wrong please try again",
  // something wrong
  wrongModalTitle: "Failed",
  someThingWrong: "Something went wrong",
  // invalid card details
  invalidCardDetail: "Invalid Card Details",
  //  invalid expiration date
  invalidExpiryDate: "Invalid Expiration date",
  // all field required
  allFieldReq: "All fields are require",
  // order placed successfully
  orderPlacedModalTitle: "Order Placed",
  orderPlacedSuccessfully: "Your order was placed successfully",
  addressAdded: "Your Address has been successfully updated.",
  addressAddedModalTitle: "Details Updated",
  // subscribe add fail
  subscribeFailMsg: "Failed to subscribe this product",
  //Old Password is required
  oldPasswordRequired: "Old Password is required",
  //Old Password is required
  noRatingMsg: "Please select a star rating",
  //---------------------------------------------------------------------------------------
  projectName: _projectSettings__WEBPACK_IMPORTED_MODULE_0__[/* projectName */ "g"],
  contactNumber: "+1.646.367.3725 (USA)",
  // login page message
  loginHeading: "Hello",
  loginMsg: ` Welcome to ${_projectSettings__WEBPACK_IMPORTED_MODULE_0__[/* projectName */ "g"]}`,
  userNotActiveMsg: "Your Account is not yet Approved",
  // registration page
  regHeading: "Hello",
  regMsg: " You've been successfully registered",
  // forgot password page
  sendEmailHeading: "",
  sendEmailMsg: "We've emailed you a link to reset your password.",
  loginFailMSg: "Something's not right with your username or Password",
  passIncorrect: "Your password is incorrect",
  userNotFound: "We cannot find an account with that email address",
  problemTitle: "There was a problem",
  // product detail page
  addToCartMessage: "Added to your bag",
  addReviewMessage: "Review add successfully ",
  withoutLoginReviewMessage: "Please login before review ",
  productDetailModalTitle: "Product Details ",
  // my account page
  cancelOrder: "Are you sure you want to cancel this order?",
  cancelSuccess: "Order cancelled successfully.",
  cancelCancel: "Proceed Order Cancelled Successfully",
  warningText: "Warning",
  // Favourites page
  favouritesAlreadyProductIntoCartMessage: "Product already added in your cart.",
  emptyCart: "YOUR BAG IS EMPTY",
  // profile Update Page
  profileUpdateMessage: "Your account updated successfully . ",
  formErrorMessage: "Something's not right with this form details. ",
  // contact page
  msgSent: "Thank you for your message. It has been sent.",
  msgSentTitle: "Thank you",
  // my order page
  myOrderPageFooterDetails: [{
    details: "Find the estimated delivery date for your recent purchase"
  }, {
    details: "Track any returns for your order"
  }, {
    details: "See where the order is being shipped"
  }],
  // payment method page
  cardDetailsSave: "Card details updated  successfully",
  cardDetailsfail: "Card details updated  failed",
  enableCheckoutCheckboxDetails: "Express checkout allows you to skip the regular checkout process and accelerate right to order review using your saved shipping and payment information.",
  shippingAddressDetails: "Saved address allow you to check out faster since you won't have to enter in your shipping information each time. You'll be able to select the express checkout option.",
  stripePaymentDetails: "Saved payment information allows you to check out faster - you won't have to enter in your credit card, gift card, or other payment information each time you checkout. This also allows you to use the express checkout option.",
  paymentMethodTollTippMessage: "Entering a default payment method here means you won't have to enter a payment method each time you check out . Make sure you fill in all required fields on your",
  shippingAddressTollTippMessage: "Entering a default shipping address here means you won't have to enter an address each time you check out",
  // footer
  footerSubscriptionDetails: `I would like to receive communications about ${_projectSettings__WEBPACK_IMPORTED_MODULE_0__[/* projectName */ "g"]} products and services.`,
  footerSubscriptioSuccessHeadingMessage: "Thanks for subscribing",
  footerSubscriptioSuccessDetailsMessage: "We are always pleased to share our passionate interests with like-minded individuals.",
  footerSubModalTitle: "Subscribed",
  //checkout Header
  confirmLogout: "Confirm logout",
  checkoutHeaderRightSideIconWarranty: "60 days warranty",
  checkoutHeaderRightSideIcondelivery: "Global delivery",
  checkoutHeaderRightSideIconSecurepayment: "Secure payment",
  // ambassador-portal  Page
  ambassadorAccountUpdateMessage: "Your Ambassador Portal Account  updated  successfully . ",
  ambassadorBankUpdateMessage: "Your Ambassador Portal Bank Details  updated  successfully . ",
  ambassadorTaxUpdateMessage: "Your Ambassador Portal Tax Details  updated  successfully . ",
  nameMissingErrMsg: "Name is required",
  currencyMissingErrMsg: "Currency is required",
  currencyValidErrMsg: "Currency is not valid",
  accountNumberMissingMsg: "Checking account number is required",
  accountNumberValidMsg: "Checking account number is not valid",
  accountNumberConfirmMissingMsg: "Checking account number is required",
  accountNumberConfirmValidMsg: "Checking account numbers do not match.",
  accountHolderMissingMsg: "Account Holder Name is required",
  accountHolderNameValidMsg: "Account Holder Name is not valid",
  accountBankMissingMsg: "Bank Name is required",
  accountBankValidMsg: "Bank Name is not valid",
  businessTypeBankMissingMsg: "Business Type is required",
  invalidOldPass: "Incorrect Old Password",
  routingTypeMissingMsg: "Bank routing number is required.",
  routingTypeValidMsg: "Bank routing number must be exactly nine digits.",
  drivingLicenseMissingErr: "Driver's license number is required.",
  drivingLicenseValidMsg: "Driver's license number is not valid.",
  expireMonthInvalid: "Your card's expiration month is invalid.",
  expireYearInvalid: "Your card's expiration year is invalid.",
  cardNumberInvalid: "Your card number is incorrect.",
  cardDetailsNotMAtch: "Could not find payment information",
  cardExpireYearRequired: "Expire Year is required",
  cardExpireMonthRequired: "Expire Month is required",
  cardNumberRequired: "Card Number is required",
  cvvNumberRequired: "CvV Number is required",
  invalidCVVNumber: "Your CVV number is incorrect.",
  invaliddateNumber: "Your Expiration Date is incorrect.",
  //
  addressAddedMsg: "Address Successfully Saved.",
  //
  cardSubmitSuccessMsg: "Card Successfully Saved",
  // shipping
  shippingExtraRate: 5,
  shippingStaticRate: 5.95,
  shippingFreeAfter: 75,
  billingAddressMsg: "1. Billing Address",
  shippingAddressMsg: "Shipping Address",
  sameShippingMsg: "Bill to the same address",
  selectCarrierMsg: "2. Select your carrier",
  paymentMethodMsg: "3. Payment Method",
  reviewOrderMsg: "4. Review Your Order",
  checkoutPageTitle: "Checkout",
  checkoutPageSubTitle: "Please Enter Your Details Below to Complete Your Purchase.",
  //
  defaultOrderStatus: "Transaction completed - label generated",
  defaultStatusInOrder: "in process",
  wrongCardDetails: "Card details not valid",
  chooseProducts: "Choose a Product",
  writeReview: "We’d love to hear your feedback!",
  reviewSuccessMsg: "Thank you for being a customer.",
  headlineMissing: "Please add a Headline.",
  reviewMissing: "Please express your views.",
  //
  comboCatTitle: "Bundles",
  comboCatDesc: "Bundles",
  //
  trackPlaceHolder: "Enter Your Tracking ID.",
  trackLabel: "Track Your Order",
  //
  enterMsg: "You must be 18 years or older to order CBD products. If you are of legal age click Enter.",
  zipCodeInvalidShippingError: "Pelase enter a valid zip code ."
};
/* harmony default export */ __webpack_exports__["a"] = (msgStrings);

/***/ }),

/***/ "hmzm":
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
/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("2MRG");
/* harmony import */ var _constants_msgStrings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("TDXe");
/* harmony import */ var _redux_actions_drawers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("JLUA");
/* harmony import */ var _redux_actions_user__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("j6IE");
/* harmony import */ var _services_helpers_regex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("p53m");
/* harmony import */ var react_component_debounce__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("14x6");
/* harmony import */ var react_component_debounce__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_component_debounce__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("sLJp");
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_google_login__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("rCsO");
/* harmony import */ var react_google_login__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_google_login__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_facebook_login__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("42Y9");
/* harmony import */ var react_facebook_login__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_facebook_login__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("JVe5");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("g8bt");
/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_14__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const Heading = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(() => __webpack_require__.e(/* import() */ 0).then(__webpack_require__.bind(null, "h1bS")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("h1bS")],
    modules: ["../Heading"]
  }
});
const Input = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(() => __webpack_require__.e(/* import() */ 1).then(__webpack_require__.bind(null, "xcph")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("xcph")],
    modules: ["../form-components/Input"]
  }
});

const Button = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(() => __webpack_require__.e(/* import() */ 12).then(__webpack_require__.bind(null, "s5Da")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("s5Da")],
    modules: ["../form-components/Button"]
  }
});











_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_10__["library"].add(_fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_13__["faFacebookF"]);
const DebounceInput = react_component_debounce__WEBPACK_IMPORTED_MODULE_9___default()({
  valuePropName: "value",
  triggerMs: 1000
})(Input);

class LoginForm extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor() {
    super();

    _defineProperty(this, "handleSubmit", e => {
      e.preventDefault();
      this.props.form.validateFields((err, values) => {
        if (!err) {
          // console.log("Received values of form: ", values);
          const {
            email,
            password
          } = values;
          this.setState({
            isLoading: true,
            error: null
          });
          Object(_services_api__WEBPACK_IMPORTED_MODULE_4__[/* loginUser */ "t"])({
            email,
            password
          }).then(res => {
            this.setState({
              isLoading: false
            }); //  console.log({ res });

            if (res.status === 200) {
              if (res.data.status) {
                this.props.setUser(res.data.user);
                this.props.toggleRegBar();
              } else {
                const {
                  error,
                  message
                } = res.data;

                if (message) {
                  this.setState({
                    error: message === "User not found" ? _constants_msgStrings__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].LOGIN_ERROR : message
                  });
                } else {
                  this.setState({
                    error: error
                  });
                }
              }
            } else {}
          }).catch(err => {
            console.log({
              err
            });
            this.setState({
              isLoading: false
            });
          });
        }
      });
    });

    _defineProperty(this, "responseGoogle", response => {
      let socialData;

      let data = _objectSpread({}, response);

      console.log(data);

      if (data.googleId) {
        const {
          email,
          familyName,
          givenName,
          googleId
        } = data.profileObj;
        socialData = {
          google: googleId,
          email,
          firstname: givenName,
          lastname: familyName,
          username: email.split("@")[0]
        };
      }

      if (response.graphDomain == "facebook") {
        let {
          email,
          id,
          name
        } = response;
        name = name.split(" ");
        socialData = {
          facebook: id,
          email,
          username: email.split("@")[0]
        };
      } // console.log(socialData);


      Object(_services_api__WEBPACK_IMPORTED_MODULE_4__[/* loginUser */ "t"])(_objectSpread({}, socialData)).then(res => {
        //   console.log(res);
        //    console.log({ res });
        if (res.status === 200) {
          if (res.data.status) {
            this.props.setUser(res.data.user);
            this.props.toggleRegBar(); // this.props.closeDrawer();

            this.setState({
              isLoading: false
            });
          } else {
            const {
              error,
              message
            } = res.data;

            if (message === "User not found") {
              Object(_services_api__WEBPACK_IMPORTED_MODULE_4__[/* registerUser */ "v"])(_objectSpread({}, socialData)).then(res => {
                //   console.log(res);
                this.setState({
                  isLoading: false
                }); //  console.log({ res });

                if (res.status === 200) {
                  if (res.data.status) {
                    this.props.setUser(res.data.user);
                    this.props.toggleRegBar();
                  } else {
                    const {
                      error
                    } = res.data;

                    if (error.endsWith("is already taken")) {
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
                    error: "something wrong"
                  });
                }
              }).catch(err => {
                console.log({
                  err
                });
                this.setState({
                  isLoading: false,
                  error: "something wrong"
                });
              });
            } else {
              this.setState({
                error: error
              });
            }
          }
        } else {}
      }).catch(err => {
        console.log({
          err
        });
        this.setState({
          isLoading: false
        });
      });
    });

    this.state = {
      isLoading: false,
      error: null,
      isAlreadyUser: false,
      isSignedIn: false
    };
  }

  render() {
    // console.log(this.props);
    const {
      drawerToDisplay,
      form: {
        getFieldDecorator
      }
    } = this.props;
    const {
      isLoading,
      error,
      isAlreadyUser,
      isSignedIn
    } = this.state;
    let finalClass = "c-login";

    if (this.props.consult) {
      finalClass += " c-userDetails";
    }

    return __jsx("div", {
      className: finalClass
    }, __jsx(Heading, {
      parentClass: "c-login",
      className: "heading",
      versions: ["dark"]
    }, isAlreadyUser ? __jsx("span", null, "Looks like you already", __jsx("br", null), "have an account") : "welcome back!"), !isAlreadyUser && __jsx("p", {
      className: "c-login__info"
    }, "Please login to your account"), !isAlreadyUser && __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Form"], {
      onSubmit: this.handleSubmit,
      className: "c-ant-from c-login__form"
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Form"].Item, null, getFieldDecorator("email", {
      rules: [{
        required: true,
        message: "Please input your e-mail!"
      }, {
        max: 40,
        message: "You can't use more than 40 characters."
      }, {
        pattern: _services_helpers_regex__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"].email,
        message: "Please enter a valid E-mail!"
      }]
    })(__jsx(DebounceInput, {
      style: {
        padding: "0px",
        fontSize: "16px",
        fontFamily: "futuraBT-book",
        marginBottom: "20px"
      },
      versions: ["light"],
      parentClass: "c-login",
      label: "E-mail",
      className: "input"
    }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Form"].Item, null, getFieldDecorator("password", {
      rules: [{
        required: true,
        message: "Please input your password!"
      }, {
        max: 20,
        message: "You can't use more than 20 characters."
      }]
    })(__jsx(DebounceInput, {
      style: {
        padding: "0px",
        fontSize: "16px",
        fontFamily: "futuraBT-book",
        width: "80%"
      },
      type: "password",
      parentClass: "c-login",
      versions: ["light"],
      label: "Password",
      className: "input"
    }))), __jsx("div", {
      className: "c-login__forget"
    }, __jsx("span", {
      onClick: () => {
        drawerToDisplay("forget");
      },
      className: "c-login__link"
    }, "forgot Password?")), __jsx("div", {
      className: "c-login__error-block"
    }, isLoading && __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
      type: "loading",
      className: "c-login__spinner c-spinner",
      style: {
        fontSize: 24
      },
      spin: true
    }), error && __jsx("p", {
      className: "c-login__error"
    }, "Invalid username or password")), __jsx("div", null, __jsx("p", {
      className: "c-login__inst"
    }, "Don't have an account yet,", " ", __jsx("span", {
      onClick: () => {
        drawerToDisplay("register");
      },
      className: "c-login__link",
      style: {
        fontFamily: "futuraBT-medium",
        letterSpacing: "0.5px"
      }
    }, "REGISTER"))), __jsx("div", {
      className: "row",
      style: {
        justifyContent: "space-around",
        marginTop: "25px"
      }
    }, __jsx(Button, {
      theme: "dark",
      disabled: isLoading
    }, "Login"))), __jsx("br", null), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
      justify: "center"
    }, __jsx("p", {
      className: "c-login__inst"
    }, "Login with", __jsx("span", {
      // onClick={()=> {
      //     drawerToDisplay("register")
      // }}
      style: {
        marginLeft: "8px",
        marginRight: "8px"
      },
      className: "c-login__link"
    }, __jsx(react_google_login__WEBPACK_IMPORTED_MODULE_11___default.a, {
      clientId: "523594328071-mcppgl821vmufbh7ts570533mq7bjc4o.apps.googleusercontent.com",
      buttonText: "",
      onSuccess: this.responseGoogle,
      onFailure: this.responseGoogle,
      cookiePolicy: "single_host_origin",
      isSignedIn: isSignedIn,
      render: renderProps => __jsx("button", {
        onClick: () => {
          this.setState({
            isSignedIn: true
          });
          renderProps.onClick();
        },
        className: "social-button"
      }, __jsx(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_14__["LazyLoadImage"], {
        src: "/images/google.svg",
        style: {
          width: "30px"
        }
      })),
      theme: "dark"
    })), "or", __jsx(react_facebook_login__WEBPACK_IMPORTED_MODULE_12___default.a, {
      appId: "379779383176561" //autoLoad={true}
      ,
      textButton: "",
      fields: "name,email,picture",
      callback: this.responseGoogle,
      cssClass: "social-button",
      icon: __jsx("span", {
        style: {
          marginLeft: "9px",
          marginRight: "8px"
        },
        className: "c-login__link"
      }, __jsx(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_14__["LazyLoadImage"], {
        src: "/images/facebook.svg",
        style: {
          width: "30px"
        }
      }))
    }))), isAlreadyUser && __jsx("div", {
      className: "c-login__no-form-wrapper"
    }, __jsx("br", null), __jsx("br", null), __jsx("br", null), __jsx("br", null), __jsx("p", {
      className: "c-login__inst"
    }, "You can login from", " ", __jsx("span", {
      onClick: () => {
        drawerToDisplay("login");
      },
      className: "c-login__link"
    }, "HERE"))));
  }

}

const Login = antd__WEBPACK_IMPORTED_MODULE_2__["Form"].create({
  name: "login"
})(LoginForm);
const mapActionToProps = {
  setUser: _redux_actions_user__WEBPACK_IMPORTED_MODULE_7__[/* setUser */ "a"],
  toggleRegBar: _redux_actions_drawers__WEBPACK_IMPORTED_MODULE_6__[/* toggleRegBar */ "f"],
  drawerToDisplay: _redux_actions_drawers__WEBPACK_IMPORTED_MODULE_6__[/* drawerToDisplay */ "a"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(state => state, mapActionToProps)(Login));

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

/***/ })

};;