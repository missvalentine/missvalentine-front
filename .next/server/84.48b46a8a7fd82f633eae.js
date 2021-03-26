exports.ids = [84];
exports.modules = {

/***/ "ST00":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Exp3");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("wy2R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _constants_projectSettings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("xSWb");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








class Success extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor() {
    super();

    _defineProperty(this, "saveAndContinue", e => {
      e.preventDefault();
      this.setState({
        isConfirmed: true
      }); // this.props.nextStep()
      //@shubham Do the api call here
    });

    _defineProperty(this, "back", e => {
      e.preventDefault();
      if (typeof this.props.prevStep === "function") this.props.prevStep();
    });

    _defineProperty(this, "goToShop", () => {
      next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push("/shop");
    });

    this.state = {
      isConfirmed: false
    };
  }

  render() {
    const {
      isConfirmed
    } = this.state;
    const {
      values: {
        firstName,
        lastName,
        phoneNumber,
        zipCode,
        state,
        weight,
        age,
        notes
      }
    } = this.props;
    const time = moment__WEBPACK_IMPORTED_MODULE_4___default()(this.props.currentAppointment.bookedFor).format("MMM DD, hh:mm:a");
    return __jsx("div", {
      className: "c-confirmation"
    }, __jsx("div", {
      className: "container-fluid"
    }, __jsx("div", {
      className: "consult-success-wrapper"
    }, __jsx("h1", {
      className: "c-confirmation__center c-confirmation__center--heading"
    }, !isConfirmed ? "Confirm your Appointment" : "Your Appointment has been confirmed!"), !isConfirmed && __jsx("p", {
      className: "c-confirmation__center"
    }, "Your Appointment with", " ", __jsx("b", null, this.props.currentAppointment.doctorName), ", scheduled for", " ", __jsx("b", null, time), " is waiting for a confirmation."), !isConfirmed && __jsx("p", {
      className: "c-confirmation__center"
    }, "Thank you for choosing ", _constants_projectSettings__WEBPACK_IMPORTED_MODULE_5__[/* projectName */ "g"]), !isConfirmed && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, firstName, lastName, phoneNumber, zipCode, __jsx("div", {
      className: "c-personalDetails__btn-wrap"
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      className: "c-btn c-btn--dark",
      onClick: this.back
    }, "Back"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      className: "c-btn c-btn--dark",
      onClick: this.saveAndContinue
    }, "Confirm Appointment"))), isConfirmed && __jsx("div", {
      className: "c-personalDetails__btn-wrap justify-content-around"
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      className: "c-btn c-btn--dark",
      onClick: this.goToShop
    }, "Continue Shopping")))));
  }

}

const mapStateToProps = state => ({
  currentAppointment: state.appointment.currentAppointment
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps)(Success));

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