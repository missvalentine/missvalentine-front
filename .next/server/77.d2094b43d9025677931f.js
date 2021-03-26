exports.ids = [77];
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

/***/ "VQ4x":
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
/* harmony import */ var _services_helpers_regex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("p53m");
/* harmony import */ var _constants_projectSettings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("xSWb");
/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("2MRG");
/* harmony import */ var _services_helpers_cart__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("3EDw");
/* harmony import */ var _services_helpers_misc__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("yH4c");
/* harmony import */ var _constants_msgStrings__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("TDXe");
/* harmony import */ var react_component_debounce__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("14x6");
/* harmony import */ var react_component_debounce__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_component_debounce__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_fade_in__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("xvZQ");
/* harmony import */ var react_fade_in__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_fade_in__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _redux_actions_cart__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("UrdJ");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const TitleList = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(() => __webpack_require__.e(/* import() */ 2).then(__webpack_require__.bind(null, "y/CX")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("y/CX")],
    modules: ["../TItleList"]
  }
});
const Input = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(() => __webpack_require__.e(/* import() */ 1).then(__webpack_require__.bind(null, "xcph")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("xcph")],
    modules: ["../form-components/Input"]
  }
});
const Button = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(() => __webpack_require__.e(/* import() */ 3).then(__webpack_require__.bind(null, "s5Da")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("s5Da")],
    modules: ["../form-components/Button"]
  }
});









const FetchLoader = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(() => __webpack_require__.e(/* import() */ 87).then(__webpack_require__.bind(null, "gJiv")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("gJiv")],
    modules: ["../FetchLoader"]
  }
});


const DebounceInput = react_component_debounce__WEBPACK_IMPORTED_MODULE_10___default()({
  valuePropName: "value",
  triggerMs: 1000
})(Input);
const {
  countryTax,
  enableCountry,
  customRates
} = _constants_projectSettings__WEBPACK_IMPORTED_MODULE_5__[/* default */ "d"];

class CheckoutShipping extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "getTax", () => {
      const {
        address: {
          country
        }
      } = this.state;

      if (!enableCountry.includes(country)) {
        this.props.setTax({
          taxPercent: countryTax,
          taxCountry: country
        });
      } else {
        this.props.setTax({
          taxPercent: 0,
          taxCountry: country
        });
      } // const countryCode = getCountryCode(country)
      // console.log({
      //   country,
      //   countryCode
      // })

    });

    _defineProperty(this, "calculateTax", () => {
      const {
        tax
      } = this.state;
    });

    _defineProperty(this, "getRates", () => {
      const data = this.getShippingData();
      const {
        cart
      } = this.props;
      this.setState({
        dataFetched: false
      });
      const {
        address: {
          country
        }
      } = this.state;

      if (!enableCountry.includes(country)) {
        this.setState({
          dataFetched: true,
          shippingRates: customRates,
          isCustomRates: true
        }, () => this.changeShippingMethod(customRates[0]));
      } else {
        Object(_services_api__WEBPACK_IMPORTED_MODULE_6__[/* getShippingRates */ "q"])(data).then(res => {
          if (res.data.status) {
            this.setState({
              dataFetched: true,
              isCustomRates: false
            });
            const rates = res.data.data.rates;
            const errMessages = res.data.data.messages;
            const breakData = Object(_services_helpers_misc__WEBPACK_IMPORTED_MODULE_8__[/* getSingleElementByMultipleObject */ "c"])(rates, c => c.carrier);
            const isUspsRates = rates.some(el => el.carrier === "USPS");
            const uspsRates = isUspsRates ? rates.filter(el => el.carrier === "USPS") : rates;
            const shippingOptions = Object(_services_helpers_cart__WEBPACK_IMPORTED_MODULE_7__[/* filterShippingRates */ "b"])(uspsRates).sort((a, b) => a.rate - b.rate);
            const shippingOptionsNew = shippingOptions.map(el => {
              if (_constants_projectSettings__WEBPACK_IMPORTED_MODULE_5__[/* default */ "d"].shippingFreeAfter < cart.subTotal) {
                if (el.customName === "Standard") {
                  return _objectSpread(_objectSpread({}, el), {}, {
                    customRate: 0
                  });
                }
              }

              return el;
            });
            const objectOffKeys = Object.keys(breakData);
            const shippingWrongZip = errMessages && errMessages.find(el => el.message === "to postal code: zipcode format must be zzzzz[pppp]");

            if (errMessages && shippingWrongZip && shippingWrongZip.message === "to postal code: zipcode format must be zzzzz[pppp]") {
              let msg = "";

              switch (shippingWrongZip.message) {
                case "to postal code: zipcode format must be zzzzz[pppp]":
                  msg = _constants_msgStrings__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"].INVALID_ZIP;
                  break;

                default:
                  msg = errMessages[0].message;
              }

              this.setState({
                shippingErrMsg: msg
              });
            } else if (rates && rates.length) {
              this.setState({
                shippingErrMsg: null,
                shippingBreakData: breakData,
                shippingCarrier: objectOffKeys,
                shippingAllData: rates,
                shippingAllResponse: res.data.data,
                shippingRates: shippingOptionsNew // breakData[firstKey]

              }, () => {
                if (shippingOptionsNew.length > 0) {
                  this.changeShippingMethod(shippingOptionsNew[0]); // this.handleShippingTypeChange(shippingOptionsNew[0]);
                } else {
                  this.setState({
                    shippingErrMsg: _constants_msgStrings__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"].NO_SHIPMENT
                  });
                }
              });
            }

            setTimeout(() => {
              console.log({
                state: this.state
              });
            }, 1000);
          }
        }).catch(console.log);
      }
    });

    _defineProperty(this, "getShippingData", () => {
      const {
        cart
      } = this.props;
      const {
        address: {
          firstname,
          lastname,
          city,
          state,
          zip,
          addressStr,
          phone,
          country
        }
      } = this.state;
      const dimension = Object(_services_helpers_cart__WEBPACK_IMPORTED_MODULE_7__[/* getItemsHeightWidth */ "e"])(cart.items);
      const data = {
        city,
        state,
        zip,
        country,
        phone,
        name: firstname + " " + lastname,
        street: addressStr,
        length: dimension.length,
        width: dimension.width,
        height: dimension.height,
        weight: dimension.weight
      };
      return data;
    });

    _defineProperty(this, "onSubmit", e => {
      e.preventDefault();
      const {
        onSubmit
      } = this.props;
      const {
        shippingSendData
      } = this.state;
      this.props.form.validateFields((err, values) => {
        if (!err) {
          console.log({
            values
          });

          if (typeof onSubmit === "function") {
            onSubmit(e, values, shippingSendData);
          }
        }
      });
    });

    _defineProperty(this, "changeShippingMethod", method => {
      const {
        isCustomRates
      } = this.state;
      const {
        customRate,
        id,
        service
      } = method;
      const {
        setShippingCharge,
        setShippingType
      } = this.props;
      const shippingType = service;
      const shpId = isCustomRates ? "custom_rates" : this.state.shippingAllResponse.id;
      const shippingCharge = parseFloat(customRate);
      this.setState({
        shippingSendData: {
          shipmentid: shpId,
          rate: id
        }
      });
      setShippingCharge(shippingCharge, this.props.cart);
      setShippingType(shippingType, this.props.cart);
      setTimeout(() => {
        console.log({
          cart: this.props.cart
        });
      }, 1000);
    });

    this.state = {
      email: props.email,
      address: props.address,
      shippingErrMsg: null,
      shippingRates: [],
      shippingSendData: null,
      dataFetched: false,
      tax: 0
    };
  }

  componentDidMount() {
    // getShippingRates
    // console.log({
    //   cart: this.props.cart,
    // });
    this.getRates();
    this.getTax();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.cart.items !== this.props.cart.items) {
      this.getRates();
    }
  }

  render() {
    console.log(this.state.address);
    console.log(this.props.address);
    const componentClass = "c-checkout-shipping";
    const {
      email,
      address,
      shippingRates
    } = this.state;
    const {
      form
    } = this.props;
    const {
      getFieldDecorator
    } = form;
    return __jsx("div", {
      className: componentClass
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Form"], {
      onSubmit: this.onSubmit
    }, __jsx(TitleList, {
      versions: ["sm-border"],
      parentClass: componentClass,
      title: "Contact"
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Form"].Item, null, getFieldDecorator("email", {
      rules: [{
        required: true,
        message: "Please input your E-mail!"
      }, {
        pattern: _services_helpers_regex__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].email,
        message: "Please enter a valid E-mail!"
      }],
      initialValue: email
    })(__jsx(DebounceInput, {
      disabled: true,
      label: "E-mail"
    })))), __jsx(TitleList, {
      versions: ["sm-border"],
      parentClass: componentClass,
      title: "Ship to"
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Form"].Item, null, getFieldDecorator("address", {
      rules: [{
        required: true,
        message: "Please input your Address!"
      }],
      initialValue: address.addressStr
    })(__jsx(DebounceInput, {
      label: "address",
      disabled: true
    })))), __jsx(TitleList, {
      versions: ["sm-border"],
      parentClass: componentClass,
      title: "Shipping Method"
    }, this.state.dataFetched ? __jsx(react_fade_in__WEBPACK_IMPORTED_MODULE_11___default.a, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Form"].Item, null, shippingRates.length > 0 && getFieldDecorator("shippingMethod", {
      initialValue: shippingRates[0]
    })(__jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Radio"].Group, {
      className: "bordered",
      onChange: e => {
        const {
          value
        } = e.target;
        this.changeShippingMethod(value);
      }
    }, shippingRates.map((el, i) => __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Radio"], {
      key: i,
      value: el
    }, "$", el.customRate.toFixed(2), " (", el.customName, ")")))))) : __jsx(FetchLoader, null)), __jsx(TitleList, {
      versions: ["sm-border"],
      parentClass: componentClass
    }, __jsx("div", {
      className: "row",
      style: {
        justifyContent: "center"
      }
    }, __jsx(Button, {
      parentClass: "c-checkout",
      type: "submit",
      theme: "dark"
    }, "Continue")))));
  }

}

CheckoutShipping.defaultProps = {
  address: {}
};

const mapStateToProps = state => ({
  user: state.user,
  cart: state.cart
});

const mapActionToProps = {
  // showRegBar
  setShippingCharge: _redux_actions_cart__WEBPACK_IMPORTED_MODULE_12__[/* setShippingCharge */ "h"],
  setShippingType: _redux_actions_cart__WEBPACK_IMPORTED_MODULE_12__[/* setShippingType */ "i"],
  setTax: _redux_actions_cart__WEBPACK_IMPORTED_MODULE_12__[/* setTax */ "j"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, mapActionToProps)(antd__WEBPACK_IMPORTED_MODULE_2__["Form"].create({
  name: "checkoutShipping"
})(CheckoutShipping)));

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