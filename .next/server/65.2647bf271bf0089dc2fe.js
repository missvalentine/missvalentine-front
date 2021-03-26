exports.ids = [65,5];
exports.modules = {

/***/ "2MRG":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "o", function() { return /* reexport */ products["e" /* getAllProducts */]; });
__webpack_require__.d(__webpack_exports__, "n", function() { return /* reexport */ products["d" /* getAllCombos */]; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ products["a" /* addToWishList */]; });
__webpack_require__.d(__webpack_exports__, "l", function() { return /* reexport */ products["b" /* deleteWishList */]; });
__webpack_require__.d(__webpack_exports__, "s", function() { return /* reexport */ products["h" /* getWishList */]; });
__webpack_require__.d(__webpack_exports__, "v", function() { return /* reexport */ user["f" /* registerUser */]; });
__webpack_require__.d(__webpack_exports__, "t", function() { return /* reexport */ user["e" /* loginUser */]; });
__webpack_require__.d(__webpack_exports__, "r", function() { return /* reexport */ user["d" /* getUserDetails */]; });
__webpack_require__.d(__webpack_exports__, "x", function() { return /* reexport */ user["g" /* updateUserDetails */]; });
__webpack_require__.d(__webpack_exports__, "p", function() { return /* reexport */ user["c" /* getOrders */]; });
__webpack_require__.d(__webpack_exports__, "m", function() { return /* reexport */ user["b" /* forgotPassword */]; });
__webpack_require__.d(__webpack_exports__, "k", function() { return /* reexport */ contactUs; });
__webpack_require__.d(__webpack_exports__, "w", function() { return /* reexport */ searchAddress; });
__webpack_require__.d(__webpack_exports__, "q", function() { return /* reexport */ checkout["k" /* getShippingRates */]; });
__webpack_require__.d(__webpack_exports__, "j", function() { return /* reexport */ checkout["i" /* confirmShipment */]; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* reexport */ checkout["b" /* authorizeCharge */]; });
__webpack_require__.d(__webpack_exports__, "e", function() { return /* reexport */ checkout["d" /* authorizeChargeProfile */]; });
__webpack_require__.d(__webpack_exports__, "d", function() { return /* reexport */ checkout["c" /* authorizeChargeBank */]; });
__webpack_require__.d(__webpack_exports__, "g", function() { return /* reexport */ checkout["f" /* authorizeSubscription */]; });
__webpack_require__.d(__webpack_exports__, "i", function() { return /* reexport */ checkout["h" /* authorizeSubscriptionProfile */]; });
__webpack_require__.d(__webpack_exports__, "h", function() { return /* reexport */ checkout["g" /* authorizeSubscriptionBank */]; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ checkout["a" /* authorizeAddCard */]; });
__webpack_require__.d(__webpack_exports__, "f", function() { return /* reexport */ checkout["e" /* authorizeDeleteCard */]; });
__webpack_require__.d(__webpack_exports__, "u", function() { return /* reexport */ checkout["l" /* placeOrderNew */]; });

// UNUSED EXPORTS: getProductById, getCategoryById, getProductByName, getAllCategories, getReviews, addReviews, updateUserPassword, setForgotPassword, addSubscriber, getSubscribers, authorizeSubscriptionCancel, placeOrder, getTaxValue, getCoupon, getAllCreatives, getAmbassadorDetails, updateAffBank, updateAffData, updateAffTax, ambassadorPortalLogin, ambassadorPortalRegistration, addAmbassador, forgotPasswordAff, getDoctors

// EXTERNAL MODULE: ./services/apis/products.js
var products = __webpack_require__("elJ3");

// EXTERNAL MODULE: ./services/apis/apiList.js
var apiList = __webpack_require__("Wol/");

// EXTERNAL MODULE: ./services/apis/user.js
var user = __webpack_require__("s9Gp");

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__("zr5I");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./services/apis/contact.js


const contactUs = body => external_axios_default.a.post(apiList["a" /* default */].contact, body);
// EXTERNAL MODULE: ./constants/projectSettings.js
var projectSettings = __webpack_require__("xSWb");

// CONCATENATED MODULE: ./services/apis/google.js


const searchAddress = address => external_axios_default.a.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${address.split(" ").join("+")}&key=${projectSettings["d" /* default */].googleApiKey}`, {
  headers: {
    "Accept-Encoding": "gzip",
    "User-Agent": "my program (gzip)"
  }
});
// EXTERNAL MODULE: ./services/apis/checkout.js
var checkout = __webpack_require__("oAQk");

// CONCATENATED MODULE: ./services/apis/ambassador.js


const getAllCreatives = () => external_axios_default.a.get(apiList["a" /* default */].getAllCreatives);
const getAmbassadorDetails = id => external_axios_default.a.get(apiList["a" /* default */].getAmbassadorDetails + id);
const updateAffBank = (id, bank) => external_axios_default.a.post(apiList["a" /* default */].updateAff, {
  id,
  bank
});
const updateAffData = (id, account) => external_axios_default.a.post(apiList["a" /* default */].updateAff, {
  id,
  account
});
const updateAffTax = (id, tax) => external_axios_default.a.post(apiList["a" /* default */].updateAff, {
  id,
  tax
});
const ambassadorPortalLogin = (email, password) => external_axios_default.a.post(apiList["a" /* default */].ambassadorPortalLogin, {
  email,
  password
});
const ambassadorPortalRegistration = body => external_axios_default.a.post(apiList["a" /* default */].ambassadorPortalRegistration, body);
const addAmbassador = body => external_axios_default.a.post(apiList["a" /* default */].addAmbassador, body);
const forgotPasswordAff = body => external_axios_default.a.post(apiList["a" /* default */].forgotPasswordAff, body);
// CONCATENATED MODULE: ./services/apis/doctors.js


const getDoctors = () => external_axios_default.a.get(apiList["a" /* default */].getDoctors);
// CONCATENATED MODULE: ./services/api.js









/***/ }),

/***/ "JLUA":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return toggleCartBar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return showCartBar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hideCartBar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return toggleRegBar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return showRegBar; });
/* unused harmony export hideRegBar */
/* unused harmony export hideHasLogin */
/* unused harmony export showHasLogin */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return drawerToDisplay; });
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("TzE8");

const toggleCartBar = a => dispatch => {
  console.log({
    a
  });
  dispatch({
    type: _type__WEBPACK_IMPORTED_MODULE_0__[/* TOGGLE_CART_BAR */ "gb"]
  });
  document.body.classList.toggle("drawer-open");
};
const showCartBar = () => dispatch => {
  dispatch({
    type: _type__WEBPACK_IMPORTED_MODULE_0__[/* SHOW_CART_BAR */ "db"]
  });
  document.body.classList.add("drawer-open");
};
const hideCartBar = () => dispatch => {
  dispatch({
    type: _type__WEBPACK_IMPORTED_MODULE_0__[/* HIDE_CART_BAR */ "l"]
  });
  document.body.classList.remove("drawer-open");
};
const toggleRegBar = () => dispatch => {
  dispatch({
    type: _type__WEBPACK_IMPORTED_MODULE_0__[/* TOGGLE_REGISTRATION_BAR */ "hb"]
  });
  document.body.classList.toggle("drawer-open");
};
const showRegBar = () => dispatch => {
  dispatch({
    type: _type__WEBPACK_IMPORTED_MODULE_0__[/* SHOW_REGISTRATION_BAR */ "eb"]
  });
  document.body.classList.add("drawer-open");
};
const hideRegBar = () => dispatch => {
  dispatch({
    type: _type__WEBPACK_IMPORTED_MODULE_0__[/* HIDE_REGISTRATION_BAR */ "m"]
  });
  document.body.classList.remove("drawer-open");
};
const hideHasLogin = () => ({
  type: _type__WEBPACK_IMPORTED_MODULE_0__[/* HAS_LOGIN */ "j"],
  payload: false
});
const showHasLogin = () => ({
  type: _type__WEBPACK_IMPORTED_MODULE_0__[/* HAS_LOGIN */ "j"],
  payload: true
});
const drawerToDisplay = payload => ({
  type: _type__WEBPACK_IMPORTED_MODULE_0__[/* TO_DISPLAY */ "ib"],
  payload
});

/***/ }),

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

/***/ "TzE8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADD_ITEM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return REMOVE_ITEM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return MODIFY_ITEM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CLEAR_CART; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "V", function() { return SET_SHIPPING_CHARGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "W", function() { return SET_SHIPPING_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Z", function() { return SET_TAX_VALUE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return SET_COUPON_CODE_DISCOUNT_VALUE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return REMOVE_COUPON_CODE_DISCOUNT_VALUE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return SET_CART; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return SET_CART_NULL_ITEM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return SET_CART_EDITABLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gb", function() { return TOGGLE_CART_BAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "db", function() { return SHOW_CART_BAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return HIDE_CART_BAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hb", function() { return TOGGLE_REGISTRATION_BAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eb", function() { return SHOW_REGISTRATION_BAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return HIDE_REGISTRATION_BAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return HAS_LOGIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ib", function() { return TO_DISPLAY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ab", function() { return SET_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lb", function() { return UNSET_USER; });
/* unused harmony export SET_USER_META */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "M", function() { return SET_LOCATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return SET_COUNTRY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return SET_CONTINENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "J", function() { return SET_FAV_COUNTITY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return SET_APUSER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jb", function() { return UNSET_APUSER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bb", function() { return SET_WISHLIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mb", function() { return UNSET_WISHLIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cb", function() { return SET_WISHLIST_LOGIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nb", function() { return UNSET_WISHLIST_LOGIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return SET_PRODUCTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return SET_CATEGORIES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "R", function() { return SET_PRODUCT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return CLEAR_PRODUCT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H", function() { return SET_EXPRESS_CHECKOUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I", function() { return SET_EXPRESS_PAYPAL_CHECKOUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "N", function() { return SET_OD_FOR_PAYPAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "O", function() { return SET_ORDER_FLAG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "X", function() { return SET_SP_PRODUCTS; });
/* unused harmony export SET_BILL_PLAN */
/* unused harmony export SET_PAYPAL_FAIL */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "P", function() { return SET_PAYPAL_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return CLEAR_PAYPAL_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return HEADER_POP_UP_MODAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "U", function() { return SET_REFERRER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "K", function() { return SET_GUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return SET_CHECKOUT_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "T", function() { return SET_REDIRECT_CHECKOUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return SET_ADDRESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return SET_CARDS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return GET_REVIEWS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return CLEAR_REVIEWS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return REVIEW_POSTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F", function() { return SET_ENTRY_MSG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fb", function() { return SHOW_SUB_MENU; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Y", function() { return SET_SUB_MENU_PRODUCTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return SET_ACTIVE_SUB_MENU; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "L", function() { return SET_LEARN_SUB_MENU; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Q", function() { return SET_POS_UP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return CLEAR_ERRORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "G", function() { return SET_ERRORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return LOADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return SET_CURRENT_APPOINTMENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "kb", function() { return UNSET_CURRENT_APPOINTMENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return GET_ALL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return GET_ARTICLE; });
const ADD_ITEM = 'ADD_ITEM';
const REMOVE_ITEM = 'REMOVE_ITEM';
const MODIFY_ITEM = 'MODIFY_ITEM';
const CLEAR_CART = 'CLEAR_CART';
const SET_SHIPPING_CHARGE = 'SET_SHIPPING_CHARGE';
const SET_SHIPPING_TYPE = 'SET_SHIPPING_TYPE';
const SET_TAX_VALUE = 'SET_TAX_VALUE';
const SET_COUPON_CODE_DISCOUNT_VALUE = 'SET_COUPON_CODE_DISCOUNT_VALUE';
const REMOVE_COUPON_CODE_DISCOUNT_VALUE = 'REMOVE_COUPON_CODE_DISCOUNT_VALUE';
const SET_CART = 'SET_CART';
const SET_CART_NULL_ITEM = 'SET_CART_NULL_ITEM';
const SET_CART_EDITABLE = 'SET_CART_EDITABLE'; //drawers

const TOGGLE_CART_BAR = 'TOGGLE_CART_BAR';
const SHOW_CART_BAR = 'SHOW_CART_BAR';
const HIDE_CART_BAR = 'HIDE_CART_BAR';
const TOGGLE_REGISTRATION_BAR = 'TOGGLE_REGISTRATION_BAR';
const SHOW_REGISTRATION_BAR = 'SHOW_REGISTRATION_BAR';
const HIDE_REGISTRATION_BAR = 'HIDE_REGISTRATION_BAR';
const HAS_LOGIN = 'HAS_LOGIN';
const TO_DISPLAY = 'TO_DISPLAY';
const SET_USER = 'SET_USER';
const UNSET_USER = 'UNSET_USER';
const SET_USER_META = 'SET_USER_META';
const SET_LOCATION = 'SET_LOCATION';
const SET_COUNTRY = 'SET_COUNTRY';
const SET_CONTINENT = 'SET_CONTINENT';
const SET_FAV_COUNTITY = 'SET_FAV_COUNTITY';
const SET_APUSER = 'SET_APUSER';
const UNSET_APUSER = 'UNSET_APUSER';
const SET_WISHLIST = 'SET_WISHLIST';
const UNSET_WISHLIST = 'UNSET_WISHLIST';
const SET_WISHLIST_LOGIN = 'SET_WISHLIST_LOGIN';
const UNSET_WISHLIST_LOGIN = 'UNSET_WISHLIST_LOGIN';
const SET_PRODUCTS = 'SET_PRODUCTS';
const SET_CATEGORIES = 'SET_CATEGORIES';
const SET_PRODUCT = 'SET_PRODUCT';
const CLEAR_PRODUCT = 'CLEAR_PRODUCT';
const SET_EXPRESS_CHECKOUT = 'SET_EXPRESS_CHECKOUT';
const SET_EXPRESS_PAYPAL_CHECKOUT = 'SET_EXPRESS_PAYPAL_CHECKOUT';
const SET_OD_FOR_PAYPAL = 'SET_OD_FOR_PAYPAL';
const SET_ORDER_FLAG = 'SET_ORDER_FLAG';
const SET_SP_PRODUCTS = 'SET_SP_PRODUCTS';
const SET_BILL_PLAN = 'SET_BILL_PLAN';
const SET_PAYPAL_FAIL = 'SET_PAYPAL_FAIL';
const SET_PAYPAL_SUCCESS = 'SET_PAYPAL_SUCCESS';
const CLEAR_PAYPAL_SUCCESS = 'CLEAR_PAYPAL_SUCCESS';
const HEADER_POP_UP_MODAL = 'HEADER_POP_UP_MODAL';
const SET_REFERRER = 'SET_REFERRER';
const SET_GUEST = 'SET_GUEST';
const SET_CHECKOUT_PAGE = 'SET_CHECKOUT_PAGE';
const SET_REDIRECT_CHECKOUT = 'SET_REDIRECT_CHECKOUT'; // address

const SET_ADDRESS = 'SET_ADDRESS'; //cards

const SET_CARDS = 'SET_CARDS'; // reviews

const GET_REVIEWS = 'GET_REVIEWS';
const CLEAR_REVIEWS = 'CLEAR_REVIEWS';
const REVIEW_POSTED = 'REVIEW_POSTED'; // first setting

const SET_ENTRY_MSG = 'SET_ENTRY_MSG'; // menus

const SHOW_SUB_MENU = 'SHOW_SUB_MENU';
const SET_SUB_MENU_PRODUCTS = 'SET_SUB_MENU_PRODUCTS';
const SET_ACTIVE_SUB_MENU = 'SET_ACTIVE_SUB_MENU';
const SET_LEARN_SUB_MENU = 'SET_LEARN_SUB_MENU';
const SET_POS_UP = 'SET_POS_UP'; // errors

const CLEAR_ERRORS = 'CLEAR_ERRORS';
const SET_ERRORS = 'SET_ERRORS'; // loading

const LOADING = 'LOADING'; // appointments

const SET_CURRENT_APPOINTMENT = 'SET_CURRENT_APPOINTMENT';
const UNSET_CURRENT_APPOINTMENT = 'UNSET_CURRENT_APPOINTMENT'; //Blog

const GET_ALL = 'GET_ALL';
const GET_ARTICLE = 'GET_ARTICLE';

/***/ }),

/***/ "Wol/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _constants_projectSettings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("xSWb");

const {
  baseUrl,
  docMzUrl,
  contentUrl
} = _constants_projectSettings__WEBPACK_IMPORTED_MODULE_0__[/* default */ "d"];
const apiList = {
  getAllProducts: `${baseUrl}/product/all`,
  getAllCategories: `${baseUrl}/category/all`,
  getProductById: `${baseUrl}/product/`,
  getCategoryById: `${baseUrl}/category/`,
  signInApi: `${baseUrl}/auth/signin`,
  contact: `${baseUrl}/contact/`,
  getAllCombos: `${baseUrl}/products/api/combos/all/`,
  getProductByName: `${baseUrl}/products/api/getbyname/`,
  //getAllCategories:`${baseUrl}/categories/getcategories`,
  getReviews: `${baseUrl}/review/getapproved/`,
  addReviews: `${baseUrl}/review/add/`,
  addToWishList: `${baseUrl}/wishlist/api/add/`,
  getWishList: `${baseUrl}/wishlist/api/byuser/`,
  deleteWishList: `${baseUrl}/wishlist/api/delete/`,
  userRegistration: `${baseUrl}/users/api/register/`,
  userLogin: `${baseUrl}/users/api/login/`,
  updateUserDetails: `${baseUrl}/users/api/profile/`,
  getUserDetails: `${baseUrl}/users/api/profile/`,
  updateUserPassword: `${baseUrl}/users/api/profile/password/`,
  forgotPassword: `${baseUrl}/users/api/forgetpassword/`,
  getShippingRates: `${baseUrl}/ship/shipment/`,
  confirmShipment: `${baseUrl}/ship/confirm/`,
  getTaxValue: `${baseUrl}/getinfo/gettax/`,
  authorizeCharge: `${baseUrl}/authorize/charge/`,
  authorizeChargeProfile: `${baseUrl}/authorize/chargeprofile/`,
  authorizeChargeBank: `${baseUrl}/authorize/charge/bank/`,
  authorizeSubscription: `${baseUrl}/authorize/create/subscription/`,
  authorizeSubscriptionProfile: `${baseUrl}/authorize/create/subscription/profile/`,
  authorizeSubscriptionBank: `${baseUrl}/authorize/create/subscription/bank/`,
  authorizeSubscriptionBank: `${baseUrl}/authorize/create/subscription/bank/`,
  authorizeSubscriptionCancel: `${baseUrl}/authorize/cancel/subscription/`,
  authorizeAddCard: `${baseUrl}/authorize/addcard/`,
  authorizeSaveCard: `${baseUrl}/authorize/savecard/`,
  authorizeDeleteCard: `${baseUrl}/authorize/deletecard/`,
  placeOrder: `${baseUrl}/order/add/`,
  placeOrderNew: `${baseUrl}/order/process/order/`,
  allOrderList: `${baseUrl}/order/getorders/`,
  orderList: `${baseUrl}/order/api/getbyuser/`,
  trackOrder: `${baseUrl}/ship/track`,
  getAllCreatives: `${baseUrl}/ambassador-portal/creatives/api/all/`,
  getAmbassadorDetails: `${baseUrl}/ambassador-portal/stats/`,
  updateAff: `${baseUrl}/ambassador-portal/update/`,
  ambassadorPortalLogin: `${baseUrl}/ambassador-portal/login/`,
  ambassadorPortalRegistration: `${baseUrl}/ambassador-portal/register/`,
  addAmbassador: `${baseUrl}/ambassador-portal/add/url/`,
  forgotPasswordAff: `${baseUrl}/ambassador-portal/forgetpassword/`,
  // doc mz
  getDoctors: `${docMzUrl}/doctors/get`,
  getDoctorById: `${docMzUrl}/doctors/getdoc/`,
  getBlogs: `${contentUrl}/Blog/get/tag`,
  getCoupon: `${baseUrl}/stripe/coupon/list`,
  getCategoryByName: `${contentUrl}/Category/getData/`,
  getBannerByName: `${contentUrl}/Banner/getData/`,
  addSubscriber: `${baseUrl}/subscribedData/add`,
  getSubscribers: `${baseUrl}/subscribedData/get`,
  getLearn: `${contentUrl}/Learn/getLearn`
};
/* harmony default export */ __webpack_exports__["a"] = (apiList);

/***/ }),

/***/ "elJ3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getProductById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return getCategoryById; });
/* unused harmony export getProductByName */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getAllProducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getAllCategories; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getAllCombos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addToWishList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return deleteWishList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return getWishList; });
/* unused harmony export getReviews */
/* unused harmony export addReviews */
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apiList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Wol/");


const getProductById = id => axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(_apiList__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].getProductById + id);
const getCategoryById = id => axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(_apiList__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].getCategoryById + id);
const getProductByName = name => axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(_apiList__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].getProductByName + name);
const getAllProducts = () => axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(_apiList__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].getAllProducts);
const getAllCategories = () => axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(_apiList__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].getAllCategories);
const getAllCombos = () => axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(_apiList__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].getAllCombos);
const addToWishList = (userid, productid, productmeta, productSlug) => axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(_apiList__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].addToWishList, {
  userid,
  productid,
  productmeta,
  productSlug
});
const deleteWishList = body => axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(_apiList__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].deleteWishList, body);
const getWishList = userid => axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(_apiList__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].getWishList, {
  userid
});
const getReviews = id => axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(_apiList__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].getReviews + id);
const addReviews = body => axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(_apiList__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].addReviews, body);

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

/***/ "j6IE":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return setUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return unsetUser; });
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("TzE8");
/* harmony import */ var _services_apis_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("s9Gp");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const setUser = (user, cart = null) => dispatch => {
  // console.log({ user });
  if (user._id) {
    console.log({
      user
    });
    Object(_services_apis_user__WEBPACK_IMPORTED_MODULE_1__[/* getUserDetails */ "d"])(user._id).then(res => {
      console.log({
        res
      });

      if (res.data.status && res.data.user) {
        //   dispatch(getUserMeta(res.data.user._id, cart));
        const payload = _objectSpread(_objectSpread({}, res.data.user.userid), {}, {
          userMetaId: res.data.user._id,
          userMetaObj: res.data.user,
          userObj: res.data.user.userid
        });

        dispatch({
          type: _type__WEBPACK_IMPORTED_MODULE_0__[/* SET_USER */ "ab"],
          payload
        });

        if (cart) {
          setCartApi({
            usermetaid: res.data.user._id,
            cart: cart
          });
        } else if (res.data.user.cart) {// dispatch({
          //   type: SET_CART,
          //   payload: res.data.user.cart
          // });
        }
      }
    });
  } else {
    dispatch({
      type: _type__WEBPACK_IMPORTED_MODULE_0__[/* SET_USER */ "ab"],
      payload: user
    });
  }
}; // export const updateUserMeta = userId => {
//   // console.log("get user id ", { userId });
//   return dispatch => {
//     console.log({
//       dispatch
//     });
//   };
// };
// export const getUserMetaNoCart = user => {
//   // console.log({
//   //   user
//   // });
//   return dispatch => {
//     console.log("user meta start fetching");
//     getSingleUserApi(user)
//       .then(res => res.json())
//       .then(res => {
//         if (res.user && res.user._id) {
//           console.log("user meta found", res);
//           dispatch({
//             type: SET_USER,
//             payload: {
//               ...res.user.userid,
//               userMetaId: res.user._id,
//               userMetaObj: res.user
//             }
//           });
//         }
//       });
//   };
// };
// export const getUserMeta = (user, cart = null) => dispatch => {
//   getSingleUserApi(user)
//     .then(res => res.json())
//     .then(res => {
//       if (res.user && res.user._id) {
//         dispatch({
//           type: SET_USER,
//           payload: {
//             ...res.user.userid,
//             userMetaId: res.user._id,
//             userMetaObj: res.user
//           }
//         });
//       }
//       if (cart && res.user && res.user._id) {
//         setCartApi({
//           usermetaid: res.user._id,
//           cart: cart
//         });
//       } else if (res.user && res.user.cart) {
//         dispatch({
//           type: SET_CART,
//           payload: res.user.cart
//         });
//       }
//     });
// };

const unsetUser = () => ({
  type: _type__WEBPACK_IMPORTED_MODULE_0__[/* UNSET_USER */ "lb"],
  payload: {}
});

/***/ }),

/***/ "oAQk":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return getShippingRates; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return confirmShipment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return authorizeCharge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return authorizeChargeProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return authorizeChargeBank; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return authorizeSubscription; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return authorizeSubscriptionProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return authorizeSubscriptionBank; });
/* unused harmony export authorizeSubscriptionCancel */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return authorizeAddCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return authorizeDeleteCard; });
/* unused harmony export placeOrder */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return placeOrderNew; });
/* unused harmony export getTaxValue */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return getCoupon; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apiList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Wol/");


const getShippingRates = body => axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(_apiList__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].getShippingRates, body);
const confirmShipment = body => axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(_apiList__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].confirmShipment, body);
const authorizeCharge = body => axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(_apiList__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].authorizeCharge, body);
const authorizeChargeProfile = body => axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(_apiList__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].authorizeChargeProfile, body);
const authorizeChargeBank = body => axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(_apiList__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].authorizeChargeBank, body);
const authorizeSubscription = body => axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(_apiList__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].authorizeSubscription, body);
const authorizeSubscriptionProfile = body => axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(_apiList__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].authorizeSubscriptionProfile, body);
const authorizeSubscriptionBank = body => axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(_apiList__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].authorizeSubscriptionBank, body);
const authorizeSubscriptionCancel = body => axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(_apiList__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].authorizeSubscriptionCancel, body);
const authorizeAddCard = body => body.profileid ? axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(_apiList__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].authorizeAddCard, body) : axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(_apiList__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].authorizeSaveCard, body);
const authorizeDeleteCard = body => axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(_apiList__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].authorizeDeleteCard, body);
const placeOrder = body => axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(_apiList__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].placeOrder, body);
const placeOrderNew = body => axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(_apiList__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].placeOrderNew, body);
const getTaxValue = countryCode => axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(_apiList__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].getTaxValue + countryCode);
const getCoupon = coupon => axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(_apiList__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].getCoupon + `?coupon=${coupon}`);

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

/***/ "s9Gp":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return registerUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return loginUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getUserDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return updateUserDetails; });
/* unused harmony export updateUserPassword */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getOrders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return forgotPassword; });
/* unused harmony export setForgotPassword */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addSubscriber; });
/* unused harmony export getSubscribers */
/* harmony import */ var _apiList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Wol/");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const registerUser = body => axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(_apiList__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].userRegistration, _objectSpread(_objectSpread({}, body), {}, {
  email: body.email.toLowerCase(),
  role: "customer"
}));
const loginUser = body => axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(_apiList__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].userLogin, _objectSpread(_objectSpread({}, body), {}, {
  email: body.email.toLowerCase()
}));
const getUserDetails = userId => axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(_apiList__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].getUserDetails + userId);
const updateUserDetails = body => axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(_apiList__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].updateUserDetails, _objectSpread({}, body));
const updateUserPassword = body => axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(_apiList__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].updateUserPassword, _objectSpread({}, body));
const getOrders = userId => axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(_apiList__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].orderList + userId);
const forgotPassword = body => axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(_apiList__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].forgotPassword, _objectSpread(_objectSpread({}, body), {}, {
  firststep: "aa"
}));
const setForgotPassword = body => axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(_apiList__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].forgotPassword, _objectSpread({}, body));
const addSubscriber = email => axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(_apiList__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].addSubscriber, {
  email
});
const getSubscribers = () => axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(_apiList__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].getSubscribers);

/***/ }),

/***/ "xSWb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return projectName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return baseUrl; });
/* unused harmony export docMzUrl */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return contentUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return imageUrl; });
/* unused harmony export serverUrl */
/* unused harmony export googleApiKey */
/* unused harmony export shippingFreeAfter */
/* unused harmony export shippingExtraRate */
/* unused harmony export shippingStaticRate */
/* unused harmony export referralPresent */
/* unused harmony export defaultOrderStatus */
/* unused harmony export defaultStatusInOrder */
/* unused harmony export invoiceUrl */
/* unused harmony export subsPercent */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return filePath; });
/* unused harmony export labSheetPath */
/* unused harmony export countryTax */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return chatTheme; });
/* unused harmony export enableCountry */
/* unused harmony export accountTypeOpt */
/* unused harmony export customRates */
/* unused harmony export topBarText */
const projectName = 'MissValentine';
const isLocal = false;
const baseUrl = isLocal ? 'http://localhost:5000/api' : 'https://missval.herokuapp.com/api'; //export const baseUrl = "http://localhost:4003";

const docMzUrl = 'http://localhost:3001';
const contentUrl = 'https://server1.cbdbene.com';
const imageUrl = 'https://server1.cbdbene.com/';
const serverUrl = 'https://admin.cbdbene.com/'; //export const baseUrl = "http://localhost:4003";
//export const serverUrl = "http://localhost:4003/";
//export const imageUrl = "http://localhost:5000/";
// export const contentUrl = "http://localhost:5000";

const googleApiKey = 'AIzaSyBXxXfKy5wtHEO9XniOvGEKPME-_ldClVk';
const shippingFreeAfter = 75;
const shippingExtraRate = 5;
const shippingStaticRate = 5.95;
const referralPresent = 25;
const defaultOrderStatus = 'Transaction completed - label generated';
const defaultStatusInOrder = 'in process';
const invoiceUrl = 'https://admin.cbdbene.com/images/';
const subsPercent = 10;
const filePath = 'https://admin.cbdbene.com/var/www/cbdbene_3rde/cbdbene/';
const labSheetPath = 'https://admin.cbdbene.com/var/www/cbdbene_3rde/cbdbene/';
const countryTax = 15 / 100;
const chatTheme = {
  background: '#ffffff',
  // fontFamily: fonts.mainfont,
  headerBgColor: '#000000',
  headerFontColor: '#ffffff',
  headerFontSize: '20px',
  botBubbleColor: '#eee9e3',
  botFontColor: '#202020',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a'
};
const enableCountry = ['US', 'USA', 'United States'];
const accountTypeOpt = [{
  label: 'Checking',
  value: 'checking'
}, {
  label: 'Savings',
  value: 'savings'
}, {
  label: 'Business Checking',
  value: 'businessChecking'
}];
const customRates = [{
  id: 'rate_custom1',
  object: 'Rate',
  created_at: '2020-02-10T10:54:03Z',
  updated_at: '2020-02-10T10:54:03Z',
  mode: 'test',
  service: 'Priority',
  carrier: 'USPS',
  rate: '8.42',
  currency: 'USD',
  retail_rate: '14.90',
  retail_currency: 'USD',
  list_rate: '11.19',
  list_currency: 'USD',
  delivery_days: 2,
  delivery_date: null,
  delivery_date_guaranteed: false,
  est_delivery_days: 2,
  shipment_id: 'shp_2255eb7f0e8b4775abcfe009be9ba569',
  carrier_account_id: 'ca_5cd23a24d9c3427780dcfde68fbb1c76',
  customName: 'Standard',
  customRate: 15.89
}, {
  id: 'rate_custom2',
  object: 'Rate',
  created_at: '2020-02-10T10:54:03Z',
  updated_at: '2020-02-10T10:54:03Z',
  mode: 'test',
  service: 'ParcelSelect',
  carrier: 'USPS',
  rate: '10.89',
  currency: 'USD',
  retail_rate: '10.89',
  retail_currency: 'USD',
  list_rate: '10.89',
  list_currency: 'USD',
  delivery_days: 7,
  delivery_date: null,
  delivery_date_guaranteed: false,
  est_delivery_days: 7,
  shipment_id: 'shp_2255eb7f0e8b4775abcfe009be9ba569',
  carrier_account_id: 'ca_5cd23a24d9c3427780dcfde68fbb1c76',
  customName: 'Priority',
  customRate: 20.54
}, {
  id: 'rate_custom3',
  object: 'Rate',
  created_at: '2020-02-10T10:54:03Z',
  updated_at: '2020-02-10T10:54:03Z',
  mode: 'test',
  service: 'Express',
  carrier: 'USPS',
  rate: '43.60',
  currency: 'USD',
  retail_rate: '50.85',
  retail_currency: 'USD',
  list_rate: '43.60',
  list_currency: 'USD',
  delivery_days: null,
  delivery_date: null,
  delivery_date_guaranteed: false,
  est_delivery_days: null,
  shipment_id: 'shp_2255eb7f0e8b4775abcfe009be9ba569',
  carrier_account_id: 'ca_5cd23a24d9c3427780dcfde68fbb1c76',
  customName: 'Express',
  customRate: 48.6
}];
const topBarText = 'Free shipping on all orders above $75.'; // make it empty string ("") to hide tha bar

/* harmony default export */ __webpack_exports__["d"] = ({
  imageUrl,
  projectName,
  baseUrl,
  serverUrl,
  googleApiKey,
  shippingFreeAfter,
  shippingExtraRate,
  shippingStaticRate,
  referralPresent,
  defaultOrderStatus,
  defaultStatusInOrder,
  invoiceUrl,
  enableCountry,
  subsPercent,
  accountTypeOpt,
  filePath,
  labSheetPath,
  countryTax,
  docMzUrl,
  customRates,
  chatTheme,
  topBarText,
  contentUrl
});

/***/ })

};;