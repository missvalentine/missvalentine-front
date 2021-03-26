exports.ids = [76];
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

/***/ "yJ8o":
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

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: ./redux/actions/drawers.js
var drawers = __webpack_require__("JLUA");

// EXTERNAL MODULE: ./redux/actions/address.js
var actions_address = __webpack_require__("we8J");

// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__("Exp3");

// EXTERNAL MODULE: external "react-places-autocomplete"
var external_react_places_autocomplete_ = __webpack_require__("KOAY");
var external_react_places_autocomplete_default = /*#__PURE__*/__webpack_require__.n(external_react_places_autocomplete_);

// EXTERNAL MODULE: ./services/api.js + 4 modules
var api = __webpack_require__("2MRG");

// EXTERNAL MODULE: ./services/helpers/regex.js
var regex = __webpack_require__("p53m");

// EXTERNAL MODULE: ./services/helpers/misc.js + 1 modules
var misc = __webpack_require__("yH4c");

// EXTERNAL MODULE: external "react-component-debounce"
var external_react_component_debounce_ = __webpack_require__("14x6");
var external_react_component_debounce_default = /*#__PURE__*/__webpack_require__.n(external_react_component_debounce_);

// EXTERNAL MODULE: external "@ant-design/icons"
var icons_ = __webpack_require__("nZwT");

// EXTERNAL MODULE: ./constants/projectSettings.js
var projectSettings = __webpack_require__("xSWb");

// EXTERNAL MODULE: external "react-phone-input-2"
var external_react_phone_input_2_ = __webpack_require__("ZpXP");
var external_react_phone_input_2_default = /*#__PURE__*/__webpack_require__.n(external_react_phone_input_2_);

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__("K2gz");
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// CONCATENATED MODULE: ./components/address/form/PhoneInput.js
var __jsx = external_react_default.a.createElement;




class PhoneInput_PhoneInput extends external_react_["Component"] {
  constructor(props) {
    super(props);
    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.onChange = this.onChange.bind(this);
    this.state = {
      isFocus: false
    };
  }

  onFocus() {
    this.setState({
      isFocus: true
    });
  }

  onBlur() {
    this.setState({
      isFocus: false
    });
  }

  onChange(e) {
    const {
      onChange
    } = this.props;
    if (typeof onChange === "function") onChange(e);
  }

  render() {
    const {
      errorMsg,
      isError,
      name,
      value,
      dataValidate,
      label
    } = this.props;
    const {
      isFocus
    } = this.state;
    return __jsx("div", {
      className: external_classnames_default()("col-12 pl-0 pr-0 has-input", {
        "has-error": isError && !isFocus
      })
    }, __jsx("label", null, label), __jsx(external_react_phone_input_2_default.a, {
      onFocus: this.onFocus,
      onBlur: this.onBlur,
      id: name,
      inputExtraProps: {
        autocomplete: "tel"
      },
      name: "phone",
      containerClass: "react-tel-input react-phone ",
      onChange: this.onChange,
      value: value,
      "data-validate": dataValidate,
      "pattern-type": "phone",
      inputClass: this.props.classToBe
    }), isError && !isFocus && __jsx("p", {
      className: "error"
    }, errorMsg));
  }

}

/* harmony default export */ var form_PhoneInput = (PhoneInput_PhoneInput);
// EXTERNAL MODULE: ./services/helpers/cart.js
var helpers_cart = __webpack_require__("3EDw");

// EXTERNAL MODULE: ./constants/msgStrings.js
var msgStrings = __webpack_require__("TDXe");

// EXTERNAL MODULE: external "react-phone-number-input"
var external_react_phone_number_input_ = __webpack_require__("o6io");

// CONCATENATED MODULE: ./components/checkout-tabs/CheckoutInfo.js
var CheckoutInfo_jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const Input = dynamic_default()(() => __webpack_require__.e(/* import() */ 1).then(__webpack_require__.bind(null, "xcph")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("xcph")],
    modules: ["../form-components/Input"]
  }
});
const Checkbox = dynamic_default()(() => __webpack_require__.e(/* import() */ 7).then(__webpack_require__.bind(null, "DCDu")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("DCDu")],
    modules: ["../form-components/Checkbox"]
  }
});
const Button = dynamic_default()(() => __webpack_require__.e(/* import() */ 3).then(__webpack_require__.bind(null, "s5Da")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("s5Da")],
    modules: ["../form-components/Button"]
  }
});


const TitleList = dynamic_default()(() => __webpack_require__.e(/* import() */ 2).then(__webpack_require__.bind(null, "y/CX")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("y/CX")],
    modules: ["../TItleList"]
  }
});













const suffix = CheckoutInfo_jsx(icons_["SearchOutlined"], {
  style: {
    color: "#000000"
  }
});





const antIcon = CheckoutInfo_jsx(icons_["LoadingOutlined"], {
  style: {
    fontSize: 24,
    color: "white"
  },
  spin: true
});

const DebounceInput = external_react_component_debounce_default()({
  valuePropName: "value",
  triggerMs: 1000
})(Input);

class CheckoutInfo_CheckoutInfo extends external_react_default.a.Component {
  constructor() {
    super();

    _defineProperty(this, "generateAddStr", address => {
      const {
        country,
        state,
        city,
        other,
        zip
      } = address;
      return `${city}, ${state}, ${country}, ${zip}`.trim();
    });

    _defineProperty(this, "handleChange", (addressStr, key = "address") => {
      this.changeAddress({
        addressStr
      }, key);
    });

    _defineProperty(this, "handleSelect", (addressStr, key = "address") => {
      const arr = addressStr.split(",");
      const size = arr.length;
      const country = arr[size - 1].trim();
      const state = arr[size - 2];
      const city = arr[size - 3];
      const other = arr[0];
      const address = {
        addressStr: addressStr && addressStr.trim(),
        country: country && country.trim(),
        state: state && state.trim(),
        city: city && city.trim(),
        other: other && other.trim(),
        zip: ""
      };
      Object(api["w" /* searchAddress */])(addressStr).then(res => {
        if (res.data && res.data.results) {
          const {
            results
          } = res.data;
          const addStr = results[0].address_components;
          const zipObj = addStr.find(el => el.types && el.types.includes("postal_code"));

          if (zipObj && zipObj.short_name) {
            const zip = zipObj.short_name;
            this.changeAddress(_objectSpread(_objectSpread({}, address), {}, {
              zip: zip.trim()
            }), key);
          } else {
            this.changeAddress(_objectSpread({}, address), key);
          }
        } else {
          this.changeAddress(_objectSpread({}, address), key);
        }
      }).catch(err => {
        this.changeAddress(_objectSpread({}, address), key);
      });
    });

    _defineProperty(this, "onSubmit", e => {
      e.preventDefault();
      this.setState({
        loader: true
      }); // console.log("here");

      const {
        onSubmit,
        cart
      } = this.props;
      const {
        address,
        addressShip,
        sameShipping,
        phone
      } = this.state;
      console.log(address, addressShip);
      this.props.form.validateFields((err, values) => {
        if (!err) {
          const {
            country,
            firstname,
            lastname,
            firstname_ship,
            lastname_ship
          } = values; //const aa = getCountryCode(country);

          if (typeof onSubmit === "function") {
            const dimension = Object(helpers_cart["e" /* getItemsHeightWidth */])(cart.items);
            let addr = sameShipping ? address : addressShip;
            console.log(addr);
            const {
              city,
              state,
              country,
              zip,
              addressStr
            } = addr;
            const {
              firstname: fname,
              lastname: lname
            } = addr;
            const data = {
              city,
              state,
              zip,
              country,
              street: addressStr,
              name: `${sameShipping ? fname ? fname : firstname : firstname_ship} ${sameShipping ? lname ? lname : lastname : lastname_ship} `,
              phone,
              length: dimension.length,
              width: dimension.width,
              height: dimension.height,
              weight: dimension.weight
            };
            console.log(data);
            Object(api["q" /* getShippingRates */])(data).then(res => {
              if (res.data.status) {
                this.setState({
                  dataFetched: true,
                  isCustomRates: false
                });
                console.log(res.data);
                const errMessages = res.data.data.messages;
                const shippingWrongZip = errMessages && errMessages.find(el => el.message === "to postal code: zipcode format must be zzzzz[pppp]");

                if (errMessages && shippingWrongZip && shippingWrongZip.message === "to postal code: zipcode format must be zzzzz[pppp]") {
                  let msg = "";

                  switch (shippingWrongZip.message) {
                    case "to postal code: zipcode format must be zzzzz[pppp]":
                      msg = msgStrings["a" /* default */].INVALID_ZIP;
                      break;

                    default:
                      msg = errMessages[0].message;
                  }

                  this.setState({
                    shippingErrMsg: msg
                  });
                } else {
                  onSubmit(e, values, _objectSpread(_objectSpread({}, address), {}, {
                    firstname,
                    lastname,
                    addressStr: address.addressStr.trim() === "" ? this.generateAddStr(address) : address.addressStr
                  }), _objectSpread(_objectSpread({}, addressShip), {}, {
                    firstname: firstname_ship,
                    lastname: lastname_ship,
                    addressStr: addressShip.addressStr.trim() === "" ? this.generateAddStr(addressShip) : addressShip.addressStr
                  }));
                  this.setState({
                    loader: false
                  });
                }
              }
            }).catch(console.log); //   getShippingRates()
          }
        }
      });
    });

    _defineProperty(this, "onSameShippingChange", e => {
      this.setState({
        sameShipping: e.target.checked
      });
    });

    _defineProperty(this, "changeAddress", (_ref, key = "address", search = true) => {
      let address = Object.assign({}, _ref);
      const {
        city,
        state,
        country,
        zip
      } = address;

      if (key === "address") {
        const {
          address
        } = this.state;
        this.props.form.setFieldsValue({
          city: city,
          state: state,
          country: country,
          zip: zip
        });
      } else if (key === "addressShip") {
        const {
          addressShip: address
        } = this.state;
        this.props.form.setFieldsValue({
          "city-ship": city,
          "state-ship": state,
          "country-ship": country,
          "zip-ship": zip
        });
      }

      if (search) {
        this.setState(prevState => ({
          [key]: _objectSpread(_objectSpread({}, prevState[key]), address)
        }));
      } else {
        this.setState({
          [key]: _objectSpread({}, address)
        });
      }
    });

    _defineProperty(this, "returnAddressStr", address => {
      const {
        country,
        state,
        city,
        other,
        zip,
        addressStr
      } = address;

      if (!addressStr) {
        const addressLine = `${city}, ${state}, ${country}, ${zip}`.trim();
        const trimmedLine = addressLine.trim().replace(/^,/g, "").trim().replace(/^,/g, "").trim().replace(/^,/g, "").trim();
        return trimmedLine;
      }

      return addressStr;
    });

    this.state = {
      sameShipping: true,
      address: {
        addressStr: "",
        country: "",
        state: "",
        city: "",
        other: "",
        zip: ""
      },
      addressShip: {
        addressStr: "",
        country: "",
        state: "",
        city: "",
        other: "",
        zip: ""
      },
      phone: "",
      phoneShip: "",
      newAddress: false,
      shippingErrMsg: "",
      loader: false,
      login_loader: false
    };
  }

  componentDidMount() {
    const {
      form,
      oldValues
    } = this.props; // console.log(oldValues);

    if (oldValues) {
      form.setFieldsValue(_objectSpread({}, oldValues));
      const {
        city,
        state,
        country,
        zip,
        "city-ship": cityShip,
        "state-ship": stateShip,
        "country-ship": countryShip,
        "zip-ship": zipShip
      } = oldValues;
      this.setState(prevState => ({
        address: _objectSpread(_objectSpread({}, prevState.address), {}, {
          city: city || prevState.address.city,
          state: state || prevState.address.state,
          country: country || prevState.address.country,
          zip: zip || prevState.address.zip,
          addressStr: prevState.address.addressStr
        }),
        addressShip: _objectSpread(_objectSpread({}, prevState.addressShip), {}, {
          city: cityShip || prevState.addressShip.city,
          state: stateShip || prevState.addressShip.state,
          country: countryShip || prevState.addressShip.country,
          zip: zipShip || prevState.addressShip.zip,
          addressStr: prevState.addressShip.addressStr
        })
      }));
    } // console.log({
    //     props: this.props
    // })


    setTimeout(() => {
      if (this.props.user._id) {
        this.props.getAddress(this.props.user._id);
      }
    }, 100);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.addresses !== this.props.addresses) {
      const {
        addresses,
        form
      } = this.props;

      if (addresses.length > 0) {
        const address = addresses.find(el => el.isDefault) || addresses[0];

        if (address) {
          form.setFieldsValue({
            email: address.email
          });
        }

        this.setState({
          login_loader: false
        });
      }
    }
  }

  render() {
    const componentClass = "c-checkout-info";
    const {
      showRegBar,
      drawerToDisplay,
      user,
      form,
      addresses
    } = this.props;
    console.log(this.state.shippingErrMsg);
    const {
      sameShipping,
      address,
      addressShip,
      loader,
      login_loader
    } = this.state;
    const {
      getFieldDecorator,
      getFieldValue,
      setFieldsValue,
      isFieldTouched,
      getFieldsValue
    } = form;
    const isLogin = user._id ? true : false;

    if (isLogin && login_loader) {
      window.location.reload();
    }

    return CheckoutInfo_jsx("div", {
      className: componentClass
    }, CheckoutInfo_jsx(external_antd_["Form"], {
      onSubmit: this.onSubmit
    }, CheckoutInfo_jsx(TitleList, {
      versions: ["sm-border"],
      parentClass: componentClass,
      title: "Contact Information"
    }, CheckoutInfo_jsx(external_antd_["Form"].Item, null, getFieldDecorator("email", {
      rules: [{
        required: true,
        message: "Please input your E-mail"
      }, {
        pattern: regex["a" /* default */].email,
        message: "Please enter a valid E-mail!"
      }],
      initialValue: user.email
    })(CheckoutInfo_jsx(DebounceInput, {
      label: "E-mail"
    }))), !isLogin && CheckoutInfo_jsx("div", {
      className: componentClass + "__login-wrapper--check"
    }, "Already have an account?", " ", CheckoutInfo_jsx("span", {
      onClick: () => {
        drawerToDisplay("login");
        showRegBar();
        this.setState({
          login_loader: true
        });
      },
      className: componentClass + "__login-btn cursor-pointer"
    }, "SIGN IN"))), CheckoutInfo_jsx(TitleList, {
      versions: ["sm-border"],
      parentClass: componentClass,
      title: "Billing Information"
    }, isLogin && addresses && addresses.length > 0 && CheckoutInfo_jsx("div", {
      className: componentClass + "__login-wrapper"
    }, CheckoutInfo_jsx(external_antd_["Form"].Item, null, getFieldDecorator("addressSelect", {
      initialValue: addresses.find(el => el.isDefault) || addresses[0]
    })(CheckoutInfo_jsx(external_antd_["Radio"].Group, {
      className: "underline",
      onChange: e => {
        const {
          value
        } = e.target;

        if (value !== null) {
          console.log(value);
          setFieldsValue({
            newAddress: false,
            email: value.email
          });
          this.setState({
            address: value,
            firstname: value.firstname,
            lastname: value.lastname,
            phone: value.phone,
            shippingErrMsg: ""
          });
        }
      }
    }, addresses.map((el, i) => CheckoutInfo_jsx(external_antd_["Radio"], {
      key: i,
      value: el
    }, this.returnAddressStr(el)))))), CheckoutInfo_jsx(external_antd_["Form"].Item, null, getFieldDecorator("newAddress", {
      valuePropName: "checked",
      initialValue: false,
      onChange: e => {
        const {
          checked
        } = e.target;
        setFieldsValue({
          addressSelect: checked ? null : addresses.find(el => el.isDefault) || addresses[0]
        });
      }
    })(CheckoutInfo_jsx(Checkbox, {
      versions: ["add"]
    }, "+ \xA0Add Address")))), (!isLogin || getFieldValue("newAddress") || !(addresses && addresses.length)) && CheckoutInfo_jsx("div", null, CheckoutInfo_jsx("div", {
      className: "container-fluid p-0"
    }, CheckoutInfo_jsx("div", {
      className: "row"
    }, CheckoutInfo_jsx("div", {
      className: "col-md-6"
    }, CheckoutInfo_jsx(external_antd_["Form"].Item, null, getFieldDecorator("firstname", {
      rules: [{
        required: true,
        message: "Please input first name!"
      }, {
        pattern: regex["a" /* default */].name,
        message: "Please enter a valid name!"
      }, {
        max: 12,
        message: "Please enter a valid name!"
      }]
    })(CheckoutInfo_jsx(DebounceInput, {
      parentClass: "c-address-form",
      name: "firstname",
      label: "First Name"
    })))), CheckoutInfo_jsx("div", {
      className: "col-md-6"
    }, CheckoutInfo_jsx(external_antd_["Form"].Item, null, getFieldDecorator("lastname", {
      rules: [{
        required: true,
        message: "Please input last name!"
      }, {
        pattern: regex["a" /* default */].name,
        message: "Please enter a valid name!"
      }, {
        max: 12,
        message: "Please enter a valid name!"
      }]
    })(CheckoutInfo_jsx(DebounceInput, {
      parentClass: "c-address-form",
      name: "lastname",
      label: "Last Name"
    })))), CheckoutInfo_jsx("div", {
      className: "col-12"
    }, CheckoutInfo_jsx(external_antd_["Form"].Item, null, getFieldDecorator("phone", {
      rules: [{
        required: true,
        message: "Please input phone number!"
      }, {
        validator: async (...value) => {
          if (Object(external_react_phone_number_input_["isValidPhoneNumber"])("+" + value[1])) {
            return Promise.resolve();
          } else {
            return Promise.reject('Invalid Phone Number!');
          }
        }
      }]
    })(CheckoutInfo_jsx(DebounceInput, {
      type: "number",
      parentClass: "c-address-form",
      name: "number",
      label: "Phone Number (Please use country code ex: +91 India)"
    })))), CheckoutInfo_jsx("div", {
      className: "col-12"
    }, CheckoutInfo_jsx(external_react_places_autocomplete_default.a, {
      value: address.addressStr,
      onChange: e => {
        this.handleChange(e, "address");
      },
      onSelect: e => {
        this.handleSelect(e, "address");
      }
    }, ({
      getInputProps,
      suggestions,
      getSuggestionItemProps,
      loading
    }) => CheckoutInfo_jsx("div", null, CheckoutInfo_jsx(Input, _extends({}, getInputProps({
      placeholder: "Search Your Address ...",
      className: "location-search-input"
    }), {
      parentClass: "c-address-form",
      label: "Search Your Address ...",
      suffix: suffix
    })), CheckoutInfo_jsx("div", {
      className: "autocomplete-dropdown-container"
    }, loading && CheckoutInfo_jsx("div", null, "Loading..."), suggestions.map(suggestion => {
      const className = suggestion.active ? "suggestion-item--active" : "suggestion-item"; // inline style for demonstration purpose

      const style = suggestion.active ? {
        backgroundColor: "#fafafa",
        cursor: "pointer"
      } : {
        backgroundColor: "#ffffff",
        cursor: "pointer"
      };
      return CheckoutInfo_jsx("div", getSuggestionItemProps(suggestion, {
        className,
        style
      }), CheckoutInfo_jsx("span", null, suggestion.description));
    }))))), CheckoutInfo_jsx("div", {
      className: "col-12"
    }, CheckoutInfo_jsx(external_antd_["Form"].Item, null, getFieldDecorator("city", {
      rules: [{
        required: true,
        message: "Please input your city!"
      }],
      initialValue: address.city
    })(CheckoutInfo_jsx(DebounceInput, {
      onChange: (key, value) => {
        const city = key;
        let container = document.getElementsByClassName("c-input c-input--default c-address-form__input"); //  let input = container.getElementsByTagName('input')
        // container[3].value=""

        container[3].firstChild.value = "";
        this.changeAddress(_objectSpread(_objectSpread({}, address), {}, {
          city
        }), "address");
      },
      name: "city",
      parentClass: "c-address-form",
      label: "City"
    })))), CheckoutInfo_jsx("div", {
      className: "col-12"
    }), CheckoutInfo_jsx("div", {
      className: "col-md-4"
    }, CheckoutInfo_jsx(external_antd_["Form"].Item, null, getFieldDecorator("country", {
      rules: [{
        required: true,
        message: "Please input your Country!"
      }],
      initialValue: address.country
    })(CheckoutInfo_jsx(DebounceInput, {
      onChange: (key, value) => {
        const country = key;
        this.changeAddress(_objectSpread(_objectSpread({}, address), {}, {
          country
        }), "address");
      },
      parentClass: "c-address-form",
      name: "country",
      label: "Country"
    })))), CheckoutInfo_jsx("div", {
      className: "col-md-4"
    }, CheckoutInfo_jsx(external_antd_["Form"].Item, null, getFieldDecorator("state", {
      rules: [{
        required: true,
        message: "Please input your state!"
      }],
      initialValue: address.state
    })(CheckoutInfo_jsx(DebounceInput, {
      onChange: (key, value) => {
        const state = key;
        this.changeAddress(_objectSpread(_objectSpread({}, address), {}, {
          state
        }), "address");
      },
      parentClass: "c-address-form",
      name: "state",
      label: "state"
    })))), CheckoutInfo_jsx("div", {
      className: "col-md-4"
    }, CheckoutInfo_jsx(external_antd_["Form"].Item, null, getFieldDecorator("zip", {
      rules: [{
        required: true,
        message: "Please input your ZIP code!"
      }, // {pattern: /^\d{5}$|^\d{5}-\d{4}$/, message:"Please enter a valid zipcode!"},
      {
        max: 10,
        message: "zip cannot be longer than 10 characters"
      }, // ({ getFieldValue }) => ({
      //   validator(rule, value) {
      //     console.log(rule,value);
      //     if (!value || getFieldValue('zip') === value) {
      //       console.log(value);
      //       return Promise.resolve();
      //     }
      //     // return Promise.reject('The two passwords that you entered do not match!');
      //   },
      // }),
      {
        validator: async (...value) => {
          const data = await Object(api["w" /* searchAddress */])(value[1]); //console.log(data)

          const city = this.props.form.getFieldValue('city');
          const state = this.props.form.getFieldValue('state');
          const zip_city = data.data.results[0].address_components[3] ? data.data.results[0].address_components[3].long_name : data.data.results[0].address_components[1].long_name;
          const zip_state_short = data.data.results[0].address_components[4] ? data.data.results[0].address_components[4].short_name : data.data.results[0].address_components[2].short_name;
          const zip_city_short = data.data.results[0].address_components[3] ? data.data.results[0].address_components[3].short_name : data.data.results[0].address_components[1].short_name;
          const zip_state = data.data.results[0].address_components[4] ? data.data.results[0].address_components[4].long_name : data.data.results[0].address_components[2].long_name;
          console.log(data, zip_city, zip_state);

          if (city == zip_city || state == zip_state || city == zip_state || state == zip_city || city == zip_city_short || state == zip_state_short || city == zip_state_short || state == zip_city_short) {
            return Promise.resolve();
          } else {
            return Promise.reject('Invalid Zip Code!');
          }
        }
      }],
      initialValue: address.zip
    })(CheckoutInfo_jsx(DebounceInput, {
      type: "number",
      onChange: (key, value) => {
        const zip = key;
        this.changeAddress(_objectSpread(_objectSpread({}, address), {}, {
          zip
        }), "address");
      },
      name: "zipcode",
      parentClass: "c-address-form",
      label: "ZIP code"
    })))), isLogin && CheckoutInfo_jsx("div", {
      className: "col-12"
    }, CheckoutInfo_jsx(external_antd_["Form"].Item, null, getFieldDecorator("saveaddress", {
      valuePropName: "checked",
      initialValue: true
    })(CheckoutInfo_jsx(Checkbox, {
      versions: ["dark"]
    }, "Save this information for next time"))))))), CheckoutInfo_jsx(external_antd_["Form"].Item, null, getFieldDecorator("sameShipping", {
      valuePropName: "checked",
      initialValue: true,
      setFieldsValue: sameShipping
    })(CheckoutInfo_jsx(Checkbox, {
      onChange: this.onSameShippingChange,
      versions: ["light"]
    }, "Ship to the same address")))), !sameShipping && CheckoutInfo_jsx(TitleList, {
      versions: ["sm-border"],
      parentClass: componentClass,
      title: "Shipping Information"
    }, CheckoutInfo_jsx("div", {
      className: "row"
    }, CheckoutInfo_jsx("div", {
      className: "col-12"
    }, isLogin && addresses && addresses.length > 0 && CheckoutInfo_jsx("div", {
      className: componentClass + "__login-wrapper"
    }, CheckoutInfo_jsx(external_antd_["Form"].Item, null, getFieldDecorator("addressSelect_ship", {
      initialValue: addresses.find(el => el.isDefault) || addresses[0]
    })(CheckoutInfo_jsx(external_antd_["Radio"].Group, {
      className: "bordered",
      onChange: e => {
        const {
          value
        } = e.target;

        if (value !== null) {
          setFieldsValue({
            newAddress_ship: false
          });
          this.setState({
            addressShip: value,
            firstname: value.firstname,
            lastname: value.lastname,
            phone: value.phone,
            shippingErrMsg: ""
          });
        }
      }
    }, addresses.map((el, i) => CheckoutInfo_jsx(external_antd_["Radio"], {
      className: "bordered",
      key: i,
      value: el
    }, this.returnAddressStr(el)))))), CheckoutInfo_jsx(external_antd_["Form"].Item, null, getFieldDecorator("newAddress_ship", {
      valuePropName: "checked",
      initialValue: false,
      onChange: e => {
        const {
          checked
        } = e.target;
        setFieldsValue({
          addressSelect_ship: checked ? null : addresses.find(el => el.isDefault) || addresses[0]
        });
      }
    })(CheckoutInfo_jsx(Checkbox, {
      versions: ["dark"]
    }, "add new address"))))), (!isLogin || getFieldValue("newAddress_ship")) && CheckoutInfo_jsx(external_react_default.a.Fragment, null, CheckoutInfo_jsx("div", {
      className: "col-md-6"
    }, CheckoutInfo_jsx(external_antd_["Form"].Item, null, getFieldDecorator("firstname_ship", {
      rules: [{
        required: true,
        message: "Please input first name!"
      }, {
        pattern: regex["a" /* default */].name,
        message: "Please enter a valid name!"
      }, {
        max: 12,
        message: "Please enter a valid name!"
      }]
    })(CheckoutInfo_jsx(DebounceInput, {
      parentClass: "c-address-form",
      name: "firstname_ship",
      label: "First Name"
    })))), CheckoutInfo_jsx("div", {
      className: "col-md-6"
    }, CheckoutInfo_jsx(external_antd_["Form"].Item, null, getFieldDecorator("lastname_ship", {
      rules: [{
        required: true,
        message: "Please input last name!"
      }, {
        pattern: regex["a" /* default */].name,
        message: "Please enter a valid name!"
      }, {
        max: 12,
        message: "Please enter a valid name!"
      }]
    })(CheckoutInfo_jsx(DebounceInput, {
      parentClass: "c-address-form",
      name: "lastname_ship",
      label: "Last Name"
    })))), CheckoutInfo_jsx("div", {
      className: "col-12"
    }, CheckoutInfo_jsx(external_antd_["Form"].Item, null, getFieldDecorator("phone_ship", {
      rules: [{
        required: true,
        message: "Please input phone number!"
      }, {
        validator: async (...value) => {
          if (Object(external_react_phone_number_input_["isValidPhoneNumber"])("+" + value[1])) {
            return Promise.resolve();
          } else {
            return Promise.reject('Invalid Phone Number!');
          }
        }
      }]
    })(CheckoutInfo_jsx(DebounceInput, {
      type: "number",
      parentClass: "c-address-form",
      name: "phonenumber_ship",
      label: "Phone Number (Please use country code ex: +91 India)"
    })))), CheckoutInfo_jsx("div", {
      className: "col-12"
    }, CheckoutInfo_jsx(external_react_places_autocomplete_default.a, {
      value: addressShip.addressStr,
      onChange: e => {
        this.handleChange(e, "addressShip");
      },
      onSelect: e => {
        this.handleSelect(e, "addressShip");
      }
    }, ({
      getInputProps,
      suggestions,
      getSuggestionItemProps,
      loading
    }) => CheckoutInfo_jsx("div", null, CheckoutInfo_jsx(Input, _extends({}, getInputProps({
      placeholder: "Search Places ...",
      className: "location-search-input"
    }), {
      parentClass: "c-address-form",
      label: "Search Places ...",
      suffix: suffix
    })), CheckoutInfo_jsx("div", {
      className: "autocomplete-dropdown-container"
    }, loading && CheckoutInfo_jsx("div", null, "Loading..."), suggestions.map(suggestion => {
      const className = suggestion.active ? "suggestion-item--active" : "suggestion-item"; // inline style for demonstration purpose

      const style = suggestion.active ? {
        backgroundColor: "#fafafa",
        cursor: "pointer"
      } : {
        backgroundColor: "#ffffff",
        cursor: "pointer"
      };
      return CheckoutInfo_jsx("div", getSuggestionItemProps(suggestion, {
        className,
        style
      }), CheckoutInfo_jsx("span", null, suggestion.description));
    }))))), CheckoutInfo_jsx("div", {
      className: "col-12"
    }, CheckoutInfo_jsx(external_antd_["Form"].Item, null, getFieldDecorator("city-ship", {
      rules: [{
        required: true,
        message: "Please input your city!"
      }]
    })(CheckoutInfo_jsx(DebounceInput, {
      onChange: (key, value) => {
        const city = key;
        this.changeAddress(_objectSpread(_objectSpread({}, addressShip), {}, {
          city
        }), "addressShip");
      },
      parentClass: "c-address-form",
      name: "ship-city",
      label: "City"
    })))), CheckoutInfo_jsx("div", {
      className: "col-12"
    }), CheckoutInfo_jsx("div", {
      className: "col-md-4"
    }, CheckoutInfo_jsx(external_antd_["Form"].Item, null, getFieldDecorator("country-ship", {
      rules: [{
        required: true,
        message: "Please input your Country!"
      }]
    })(CheckoutInfo_jsx(DebounceInput, {
      onChange: (key, value) => {
        const country = key;
        this.changeAddress(_objectSpread(_objectSpread({}, addressShip), {}, {
          country
        }), "addressShip");
      },
      parentClass: "c-address-form",
      name: "ship-country",
      label: "Country"
    })))), CheckoutInfo_jsx("div", {
      className: "col-md-4"
    }, CheckoutInfo_jsx(external_antd_["Form"].Item, null, getFieldDecorator("state-ship", {
      rules: [{
        required: true,
        message: "Please input your state!"
      }]
    })(CheckoutInfo_jsx(DebounceInput, {
      onChange: (key, value) => {
        const state = key;
        this.changeAddress(_objectSpread(_objectSpread({}, addressShip), {}, {
          state
        }), "addressShip");
      },
      parentClass: "c-address-form",
      name: "ship-state",
      label: "state"
    })))), CheckoutInfo_jsx("div", {
      className: "col-md-4"
    }, CheckoutInfo_jsx(external_antd_["Form"].Item, null, getFieldDecorator("zip-ship", {
      rules: [{
        required: true,
        message: "Please input your ZIP code!"
      }, {
        max: 8,
        message: "Please input your ZIP code!"
      }, {
        validator: async (...value) => {
          const data = await Object(api["w" /* searchAddress */])(value[1]);
          const city = this.props.form.getFieldValue('city-ship');
          const state = this.props.form.getFieldValue('state-ship');
          const zip_city = data.data.results[0].address_components[3].long_name;
          const zip_state = data.data.results[0].address_components[4].long_name;
          console.log(data, zip_city, zip_state);

          if (city == zip_city || state == zip_state) {
            return Promise.resolve();
          } else {
            return Promise.reject('Invalid Zip Code!');
          }
        }
      }]
    })(CheckoutInfo_jsx(DebounceInput, {
      onChange: (key, value) => {
        const zip = key;
        this.changeAddress(_objectSpread(_objectSpread({}, addressShip), {}, {
          zip
        }), "addressShip");
      },
      parentClass: "c-address-form",
      name: "ship-zip",
      label: "ZIP code"
    })))), isLogin && CheckoutInfo_jsx("div", {
      className: "col-12"
    }, CheckoutInfo_jsx(external_antd_["Form"].Item, null, getFieldDecorator("saveaddress_ship", {
      valuePropName: "checked",
      initialValue: true
    })(CheckoutInfo_jsx(Checkbox, {
      versions: ["dark"]
    }, "Save this information for next time"))))))), this.state.shippingErrMsg && CheckoutInfo_jsx("span", {
      style: {
        color: "red"
      }
    }, this.state.shippingErrMsg), CheckoutInfo_jsx("div", {
      className: "row",
      style: {
        justifyContent: "center"
      }
    }, CheckoutInfo_jsx(Button, {
      parentClass: "c-checkout",
      theme: "dark"
    }, "Continue ", loader && CheckoutInfo_jsx(external_antd_["Spin"], {
      indicator: antIcon
    })))));
  }

}

const mapStateToProps = state => ({
  user: state.user,
  addresses: state.address && state.address.address || [],
  state,
  cart: state.cart
});

const mapActionToProps = {
  showRegBar: drawers["d" /* showRegBar */],
  getAddress: actions_address["b" /* getAddress */],
  drawerToDisplay: drawers["a" /* drawerToDisplay */]
};
/* harmony default export */ var checkout_tabs_CheckoutInfo = __webpack_exports__["default"] = (Object(external_react_redux_["connect"])(mapStateToProps, mapActionToProps)(external_antd_["Form"].create({
  name: "checkoutInfo"
})(CheckoutInfo_CheckoutInfo)));

/***/ })

};;