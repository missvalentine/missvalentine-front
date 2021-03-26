exports.ids = [13];
exports.modules = {

/***/ "ZHf+":
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
/* harmony import */ var _redux_actions_drawers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("JLUA");
/* harmony import */ var _redux_actions_user__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("j6IE");
/* harmony import */ var _services_helpers_regex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("p53m");
/* harmony import */ var _constants_constantMessage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("nt4Y");
/* harmony import */ var react_component_debounce__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("14x6");
/* harmony import */ var react_component_debounce__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_component_debounce__WEBPACK_IMPORTED_MODULE_9__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



;
const Heading = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(() => __webpack_require__.e(/* import() */ 0).then(__webpack_require__.bind(null, "h1bS")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("h1bS")],
    modules: ["../Heading"]
  }
});
;
const Input = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(() => __webpack_require__.e(/* import() */ 1).then(__webpack_require__.bind(null, "xcph")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("xcph")],
    modules: ["../form-components/Input"]
  }
});

;
const Button = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(() => __webpack_require__.e(/* import() */ 3).then(__webpack_require__.bind(null, "s5Da")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("s5Da")],
    modules: ["../form-components/Button"]
  }
});






const DebounceInput = react_component_debounce__WEBPACK_IMPORTED_MODULE_9___default()({
  valuePropName: "value",
  triggerMs: 1000
})(Input);

class ForgetForm extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor() {
    super();

    _defineProperty(this, "handleSubmit", e => {
      e.preventDefault();
      this.props.form.validateFields((err, values) => {
        if (!err) {
          console.log("Received values of form: ", values);
          const {
            email,
            password
          } = values;
          this.setState({
            isLoading: true,
            error: null
          });
          Object(_services_api__WEBPACK_IMPORTED_MODULE_4__[/* forgotPassword */ "m"])({
            email,
            firststep: 1
          }).then(res => {
            this.setState({
              isLoading: false
            });

            if (res.status === 200) {
              if (res.data.status || res.data.success) {
                this.setState({
                  mailSent: true
                });
              } else {
                this.setState({
                  error: res.data.message || "User not found"
                });
              }
            } else {
              this.setState({
                error: "User not found"
              });
            }
          }).catch(err => {
            console.log({
              err
            });
            this.setState({
              isLoading: false,
              error: "User not found"
            });
          });
        }
      });
    });

    this.state = {
      isLoading: false,
      error: null,
      isAlreadyUser: false,
      mailSent: false
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
      isAlreadyUser,
      mailSent
    } = this.state;
    return __jsx("div", {
      className: "c-registration"
    }, __jsx(Heading, {
      parentClass: "c-registration"
    }, mailSent ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, " ", _constants_constantMessage__WEBPACK_IMPORTED_MODULE_8__[/* sendEmailMsg */ "h"], "  ", __jsx("div", null, __jsx("p", {
      style: {
        fontSize: "16px",
        fontFamily: "futuraBT-light",
        marginTop: "20px"
      },
      className: "c-registration__inst"
    }, "Back to", __jsx("span", {
      style: {
        marginLeft: "5px"
      },
      onClick: () => {
        drawerToDisplay("login");
      },
      className: "c-registration__link"
    }, "LOGIN"))), " ") : "Forgot Your Password?"), !mailSent && __jsx(Heading, {
      className: "c-registration__sub-heading",
      subHeading: true,
      versions: ["dark"],
      parentClass: "c-registration"
    }, "Enter your email to reset your password"), !mailSent && __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Form"], {
      onSubmit: this.handleSubmit,
      className: "c-ant-from c-registration__form"
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Form"].Item, null, getFieldDecorator("email", {
      rules: [{
        max: 40,
        message: "You can't use more than 40 characters."
      }, {
        required: true,
        message: "Please input your e-mail!"
      }, {
        pattern: _services_helpers_regex__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].email,
        message: "Please enter a valid E-mail."
      }]
    })(__jsx(DebounceInput, {
      style: {
        padding: "0px",
        fontSize: "16px",
        fontFamily: "futuraBT-book",
        marginBottom: "15px"
      },
      versions: ["dark"],
      parentClass: "c-registration",
      label: "E-mail"
    }))), __jsx("div", null, __jsx("p", {
      style: {
        fontSize: "16px",
        fontFamily: "futuraBT-light"
      },
      className: "c-registration__inst"
    }, "Back to", __jsx("span", {
      style: {
        marginLeft: "5px"
      },
      onClick: () => {
        drawerToDisplay("login");
      },
      className: "c-registration__link"
    }, "LOGIN"))), __jsx("div", {
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
      className: "row",
      style: {
        justifyContent: "space-around"
      }
    }, __jsx(Button, {
      theme: "dark",
      disabled: isLoading
    }, "Reset Password"))));
  }

}

const ForgetPassword = antd__WEBPACK_IMPORTED_MODULE_2__["Form"].create({
  name: "registration"
})(ForgetForm);
const mapActionToProps = {
  drawerToDisplay: _redux_actions_drawers__WEBPACK_IMPORTED_MODULE_5__[/* drawerToDisplay */ "a"],
  setUser: _redux_actions_user__WEBPACK_IMPORTED_MODULE_6__[/* setUser */ "a"],
  toggleRegBar: _redux_actions_drawers__WEBPACK_IMPORTED_MODULE_5__[/* toggleRegBar */ "f"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(state => state, mapActionToProps)(ForgetPassword));

/***/ }),

/***/ "nt4Y":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firstNameMissingErrMsg */
/* unused harmony export lastNameMissingErrMsg */
/* unused harmony export emailMissingErrMsg */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return emailNotValidErrMsg; });
/* unused harmony export phoneMissingErrMsg */
/* unused harmony export phoneNotValidErrMsg */
/* unused harmony export passwordMissingErrMsg */
/* unused harmony export passwordShortErrMsg */
/* unused harmony export passwordValidErrMsg */
/* unused harmony export onlyDigits */
/* unused harmony export passwordMatchErrMsg */
/* unused harmony export confirmPasswordErrMsg */
/* unused harmony export zipMissingErrMsg */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return zipValidErrMsg; });
/* unused harmony export websiteMissingErrMsg */
/* unused harmony export websiteValidErrMsg */
/* unused harmony export instagramMissingErrMsg */
/* unused harmony export instagramValidErrMsg */
/* unused harmony export faceBookMissingErrMsg */
/* unused harmony export faceBookValidErrMsg */
/* unused harmony export newPasswordSuccessMsg */
/* unused harmony export faxMissingErrMsg */
/* unused harmony export faxValidErrMsg */
/* unused harmony export someThingWrongTryAgain */
/* unused harmony export wrongModalTitle */
/* unused harmony export someThingWrong */
/* unused harmony export invalidCardDetail */
/* unused harmony export invalidExpiryDate */
/* unused harmony export allFieldReq */
/* unused harmony export orderPlacedModalTitle */
/* unused harmony export orderPlacedSuccessfully */
/* unused harmony export addressAdded */
/* unused harmony export addressAddedModalTitle */
/* unused harmony export subscribeFailMsg */
/* unused harmony export oldPasswordRequired */
/* unused harmony export noRatingMsg */
/* unused harmony export contactNumber */
/* unused harmony export loginHeading */
/* unused harmony export loginMsg */
/* unused harmony export userNotActiveMsg */
/* unused harmony export regHeading */
/* unused harmony export regMsg */
/* unused harmony export sendEmailHeading */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return sendEmailMsg; });
/* unused harmony export loginFailMSg */
/* unused harmony export passIncorrect */
/* unused harmony export userNotFound */
/* unused harmony export problemTitle */
/* unused harmony export addToCartMessage */
/* unused harmony export addReviewMessage */
/* unused harmony export withoutLoginReviewMessage */
/* unused harmony export productDetailModalTitle */
/* unused harmony export cancelOrder */
/* unused harmony export cancelSuccess */
/* unused harmony export cancelCancel */
/* unused harmony export warningText */
/* unused harmony export favouritesAlreadyProductIntoCartMessage */
/* unused harmony export emptyCart */
/* unused harmony export profileUpdateMessage */
/* unused harmony export formErrorMessage */
/* unused harmony export msgSent */
/* unused harmony export msgSentTitle */
/* unused harmony export msgFailed */
/* unused harmony export msgFailedTitle */
/* unused harmony export myOrderPageFooterDetails */
/* unused harmony export cardDetailsSave */
/* unused harmony export cardDetailsfail */
/* unused harmony export enableCheckoutCheckboxDetails */
/* unused harmony export shippingAddressDetails */
/* unused harmony export stripePaymentDetails */
/* unused harmony export paymentMethodTollTippMessage */
/* unused harmony export shippingAddressTollTippMessage */
/* unused harmony export footerSubscriptionDetails */
/* unused harmony export footerSubscriptioSuccessHeadingMessage */
/* unused harmony export footerSubscriptioSuccessDetailsMessage */
/* unused harmony export footerSubModalTitle */
/* unused harmony export confirmLogout */
/* unused harmony export checkoutHeaderRightSideIconWarranty */
/* unused harmony export checkoutHeaderRightSideIcondelivery */
/* unused harmony export checkoutHeaderRightSideIconSecurepayment */
/* unused harmony export ambassadorAccountUpdateMessage */
/* unused harmony export ambassadorBankUpdateMessage */
/* unused harmony export ambassadorTaxUpdateMessage */
/* unused harmony export nameMissingErrMsg */
/* unused harmony export currencyMissingErrMsg */
/* unused harmony export currencyValidErrMsg */
/* unused harmony export accountNumberMissingMsg */
/* unused harmony export accountNumberValidMsg */
/* unused harmony export accountNumberConfirmMissingMsg */
/* unused harmony export accountNumberConfirmValidMsg */
/* unused harmony export accountHolderMissingMsg */
/* unused harmony export accountHolderNameValidMsg */
/* unused harmony export accountBankMissingMsg */
/* unused harmony export accountBankValidMsg */
/* unused harmony export businessTypeBankMissingMsg */
/* unused harmony export invalidOldPass */
/* unused harmony export routingTypeMissingMsg */
/* unused harmony export routingTypeValidMsg */
/* unused harmony export drivingLicenseMissingErr */
/* unused harmony export drivingLicenseValidMsg */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return expireMonthInvalid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return expireYearInvalid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return cardNumberInvalid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cardDetailsNotMAtch; });
/* unused harmony export cardExpireYearRequired */
/* unused harmony export cardExpireMonthRequired */
/* unused harmony export cardNumberRequired */
/* unused harmony export cvvNumberRequired */
/* unused harmony export invalidCVVNumber */
/* unused harmony export invaliddateNumber */
/* unused harmony export addressAddedMsg */
/* unused harmony export cardSubmitSuccessMsg */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return shippingExtraRate; });
/* unused harmony export shippingStaticRate */
/* unused harmony export shippingFreeAfter */
/* unused harmony export billingAddressMsg */
/* unused harmony export shippingAddressMsg */
/* unused harmony export sameShippingMsg */
/* unused harmony export selectCarrierMsg */
/* unused harmony export paymentMethodMsg */
/* unused harmony export reviewOrderMsg */
/* unused harmony export checkoutPageTitle */
/* unused harmony export checkoutPageSubTitle */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return defaultOrderStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return defaultStatusInOrder; });
/* unused harmony export wrongCardDetails */
/* unused harmony export chooseProducts */
/* unused harmony export writeReview */
/* unused harmony export reviewSuccessMsg */
/* unused harmony export headlineMissing */
/* unused harmony export reviewMissing */
/* unused harmony export comboCatTitle */
/* unused harmony export comboCatDesc */
/* unused harmony export trackPlaceHolder */
/* unused harmony export trackLabel */
/* unused harmony export enterMsg */
/* unused harmony export zipCodeInvalidShippingError */
/* harmony import */ var _projectSettings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("xSWb");
// validation error messages
// registration
//first name missing

const firstNameMissingErrMsg = "First Name is required"; //last name missing

const lastNameMissingErrMsg = "Last Name is required"; //email missing

const emailMissingErrMsg = "Email is required"; //email valid

const emailNotValidErrMsg = "Email Id is not valid"; //Phone missing

const phoneMissingErrMsg = "Phone is required"; //Phone Valid

const phoneNotValidErrMsg = "Phone number is not valid"; //Password missing

const passwordMissingErrMsg = "Password is required"; //Password short

const passwordShortErrMsg = "Password should be 6 characters"; //Password Valid

const passwordValidErrMsg = "A minimum 6 characters password contains a combination of uppercase and lowercase letter and number"; //Password match

const onlyDigits = "Only Digits"; //Password match

const passwordMatchErrMsg = "Passwords do not match."; //Confirm Password match

const confirmPasswordErrMsg = "Confirm Password is required"; //Zip code error match

const zipMissingErrMsg = "Zip Code is required";
const zipValidErrMsg = "Zip Code Not Valid"; // Website code error match

const websiteMissingErrMsg = "Website is required";
const websiteValidErrMsg = "Website Url is  Not Valid"; // Instagram code error match

const instagramMissingErrMsg = "Instagram is required";
const instagramValidErrMsg = "Instagram Url is  Not Valid"; // Facebook code error match

const faceBookMissingErrMsg = "Facebook is required";
const faceBookValidErrMsg = "Facebook Url is  Not Valid"; // new password message

const newPasswordSuccessMsg = "Your password has been updated successfully";
const faxMissingErrMsg = "Fax Number is required";
const faxValidErrMsg = "Fax Number is  Not Valid"; // something wrong

const someThingWrongTryAgain = "Something was wrong please try again"; // something wrong

const wrongModalTitle = "Failed";
const someThingWrong = "Something went wrong"; // invalid card details

const invalidCardDetail = "Invalid Card Details"; //  invalid expiration date

const invalidExpiryDate = "Invalid Expiration date"; // all field required

const allFieldReq = "All fields are require"; // order placed successfully

const orderPlacedModalTitle = "Order Placed";
const orderPlacedSuccessfully = "Your order was placed successfully";
const addressAdded = "Your Address has been successfully updated.";
const addressAddedModalTitle = "Details Updated"; // subscribe add fail

const subscribeFailMsg = "Failed to subscribe this product"; //Old Password is required

const oldPasswordRequired = "Old Password is required"; //Old Password is required

const noRatingMsg = "Please select a star rating"; //---------------------------------------------------------------------------------------
// export const projectName = projectName;

const contactNumber = "+1.646.367.3725 (USA)"; // login page message

const loginHeading = "Hello";
const loginMsg = ` Welcome to ${_projectSettings__WEBPACK_IMPORTED_MODULE_0__[/* projectName */ "g"]}`;
const userNotActiveMsg = "Your Account is not yet Approved"; // registration page

const regHeading = "Hello";
const regMsg = " You've been successfully registered"; // forgot password page

const sendEmailHeading = "";
const sendEmailMsg = "We've emailed you a link to reset your password.";
const loginFailMSg = "Something's not right with your username or Password";
const passIncorrect = "Your password is incorrect";
const userNotFound = "We cannot find an account with that email address";
const problemTitle = "There was a problem"; // product detail page

const addToCartMessage = "Added to your bag";
const addReviewMessage = "Review add successfully ";
const withoutLoginReviewMessage = "Please login before review ";
const productDetailModalTitle = "Product Details "; // my account page

const cancelOrder = "Are you sure you want to cancel this order?";
const cancelSuccess = "Order cancelled successfully.";
const cancelCancel = "Proceed Order Cancelled Successfully";
const warningText = "Warning"; // Favourites page

const favouritesAlreadyProductIntoCartMessage = "Product already added in your cart.";
const emptyCart = "YOUR BAG IS EMPTY"; // profile Update Page

const profileUpdateMessage = "Your account updated successfully . ";
const formErrorMessage = "Something's not right with this form details. "; // contact page

const msgSent = "Thank you for contacting us. We will contact you asap!";
const msgSentTitle = "Thank you";
const msgFailed = "There seems to be a problem. Try again later.";
const msgFailedTitle = "Error"; // my order page

const myOrderPageFooterDetails = [{
  details: "Find the estimated delivery date for your recent purchase"
}, {
  details: "Track any returns for your order"
}, {
  details: "See where the order is being shipped"
}]; // payment method page

const cardDetailsSave = "Card details updated  successfully";
const cardDetailsfail = "Card details updated  failed";
const enableCheckoutCheckboxDetails = "Express checkout allows you to skip the regular checkout process and accelerate right to order review using your saved shipping and payment information.";
const shippingAddressDetails = "Saved address allow you to check out faster since you won't have to enter in your shipping information each time. You'll be able to select the express checkout option.";
const stripePaymentDetails = "Saved payment information allows you to check out faster - you won't have to enter in your credit card, gift card, or other payment information each time you checkout. This also allows you to use the express checkout option.";
const paymentMethodTollTippMessage = "Entering a default payment method here means you won't have to enter a payment method each time you check out . Make sure you fill in all required fields on your";
const shippingAddressTollTippMessage = "Entering a default shipping address here means you won't have to enter an address each time you check out"; // footer

const footerSubscriptionDetails = `I would like to receive communications about ${_projectSettings__WEBPACK_IMPORTED_MODULE_0__[/* projectName */ "g"]} products and services.`;
const footerSubscriptioSuccessHeadingMessage = "Thanks for subscribing";
const footerSubscriptioSuccessDetailsMessage = "We are always pleased to share our passionate interests with like-minded individuals.";
const footerSubModalTitle = "Subscribed"; //checkout Header

const confirmLogout = "Confirm logout";
const checkoutHeaderRightSideIconWarranty = "60 days warranty";
const checkoutHeaderRightSideIcondelivery = "Global delivery";
const checkoutHeaderRightSideIconSecurepayment = "Secure payment"; // ambassador-portal  Page

const ambassadorAccountUpdateMessage = "Your Ambassador Portal Account  updated  successfully . ";
const ambassadorBankUpdateMessage = "Your Ambassador Portal Bank Details  updated  successfully . ";
const ambassadorTaxUpdateMessage = "Your Ambassador Portal Tax Details  updated  successfully . ";
const nameMissingErrMsg = "Name is required";
const currencyMissingErrMsg = "Currency is required";
const currencyValidErrMsg = "Currency is not valid";
const accountNumberMissingMsg = "Checking account number is required";
const accountNumberValidMsg = "Checking account number is not valid";
const accountNumberConfirmMissingMsg = "Checking account number is required";
const accountNumberConfirmValidMsg = "Checking account numbers do not match.";
const accountHolderMissingMsg = "Account Holder Name is required";
const accountHolderNameValidMsg = "Account Holder Name is not valid";
const accountBankMissingMsg = "Bank Name is required";
const accountBankValidMsg = "Bank Name is not valid";
const businessTypeBankMissingMsg = "Business Type is required";
const invalidOldPass = "Incorrect Old Password";
const routingTypeMissingMsg = "Bank routing number is required.";
const routingTypeValidMsg = "Bank routing number must be exactly nine digits.";
const drivingLicenseMissingErr = "Driver's license number is required.";
const drivingLicenseValidMsg = "Driver's license number is not valid.";
const expireMonthInvalid = "Your card's expiration month is invalid.";
const expireYearInvalid = "Your card's expiration year is invalid.";
const cardNumberInvalid = "Your card number is incorrect.";
const cardDetailsNotMAtch = "Could not find payment information";
const cardExpireYearRequired = "Expire Year is required";
const cardExpireMonthRequired = "Expire Month is required";
const cardNumberRequired = "Card Number is required";
const cvvNumberRequired = "CvV Number is required";
const invalidCVVNumber = "Your CVV number is incorrect.";
const invaliddateNumber = "Your Expiration Date is incorrect."; //

const addressAddedMsg = "Address Successfully Saved."; //

const cardSubmitSuccessMsg = "Card Successfully Saved"; // shipping

const shippingExtraRate = 5;
const shippingStaticRate = 5.95;
const shippingFreeAfter = 75;
const billingAddressMsg = "1. Billing Address";
const shippingAddressMsg = "Shipping Address";
const sameShippingMsg = "Bill to the same address";
const selectCarrierMsg = "2. Select your carrier";
const paymentMethodMsg = "3. Payment Method";
const reviewOrderMsg = "4. Review Your Order";
const checkoutPageTitle = "Checkout";
const checkoutPageSubTitle = "Please Enter Your Details Below to Complete Your Purchase."; //

const defaultOrderStatus = "Transaction completed - label generated";
const defaultStatusInOrder = "in process";
const wrongCardDetails = "Card details not valid";
const chooseProducts = "Choose a Product";
const writeReview = "We’d love to hear your feedback!";
const reviewSuccessMsg = "Thank you for being a customer.";
const headlineMissing = "Please add a Headline.";
const reviewMissing = "Please express your views."; //

const comboCatTitle = "Bundles";
const comboCatDesc = "Bundles"; //

const trackPlaceHolder = "Enter Your Tracking ID.";
const trackLabel = "Track Your Order"; //

const enterMsg = "You must be 18 years or older to order CBD products. If you are of legal age click Enter.";
const zipCodeInvalidShippingError = "Pelase enter a valid zip code .";

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