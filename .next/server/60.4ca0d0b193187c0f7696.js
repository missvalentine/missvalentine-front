exports.ids = [60,61,75];
exports.modules = {

/***/ "0Aw8":
/***/ (function(module, exports) {

// import { SET_CHECKOUT_PAGE, SET_REDIRECT_CHECKOUT } from "./type";
// export const setCheckoutPage = (payload = false) => ({
//   type: SET_CHECKOUT_PAGE,
//   payload
// });
// export const setRedirectCheckout = (payload = false) => ({
//   type: SET_REDIRECT_CHECKOUT,
//   payload
// });

/***/ }),

/***/ "0pHj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasicFunction; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("YLtl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants_constantMessage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("nt4Y");
/* harmony import */ var box_dimension_calculator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("utGq");
/* harmony import */ var box_dimension_calculator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(box_dimension_calculator__WEBPACK_IMPORTED_MODULE_2__);
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


 // import { referralPresent } from "../../components";

const referralPresent = 25;
 // import { variablePriceSet } from "./cartHealpers";

class BasicFunction {
  constructor() {
    _defineProperty(this, "removeEmpty", obj => {
      Object.keys(obj).forEach(key => obj[key] === null && delete obj[key]);
    });

    _defineProperty(this, "getSelectedAttributes", item => {
      if (item.producttype === "variable") return item.attributes.map(el => ({
        [el.names]: item[el.names].value
      })).filter(el => el).reduce((a, b) => _objectSpread(_objectSpread({}, a), b), {});
      return null;
    });

    _defineProperty(this, "calculatePrice", item => {
      const {
        saleprice,
        regularprice,
        subscribedDiscountPersent,
        qty: {
          value
        },
        subscribed
      } = item;

      if (subscribed) {
        if (saleprice) {
          const price = parseFloat(saleprice) * parseFloat(value) / parseFloat(subscribedDiscountPersent);
          return price;
        } else if (regularprice) {
          const price = parseFloat(regularprice) * parseFloat(value) / parseFloat(subscribedDiscountPersent);
          return price;
        }

        return 0;
      }
    });

    _defineProperty(this, "convertCardErrors", error => {
      switch (error) {
        case "Your card number is incorrect.":
          return _constants_constantMessage__WEBPACK_IMPORTED_MODULE_1__[/* cardNumberInvalid */ "b"];

        case "Missing required param: card[exp_year].":
          return _constants_constantMessage__WEBPACK_IMPORTED_MODULE_1__[/* expireYearInvalid */ "g"];

        case "Could not find payment information.":
          return _constants_constantMessage__WEBPACK_IMPORTED_MODULE_1__[/* cardDetailsNotMAtch */ "a"];

        case "Your card's expiration year is invalid.":
          return _constants_constantMessage__WEBPACK_IMPORTED_MODULE_1__[/* expireYearInvalid */ "g"];

        case "Your card's expiration month is invalid.":
          return _constants_constantMessage__WEBPACK_IMPORTED_MODULE_1__[/* expireMonthInvalid */ "f"];

        default:
          return _constants_constantMessage__WEBPACK_IMPORTED_MODULE_1__[/* expireMonthInvalid */ "f"];
      }
    });

    _defineProperty(this, "stripeCheckValidation", paymentDetail => {
      const {
        cvNumber,
        expDate,
        cardNumber
      } = paymentDetail;

      if (cvNumber && cvNumber.length <= 2) {
        return false;
      }

      if (expDate && expDate.length <= 4) {
        return false;
      }

      if (cardNumber && cardNumber.length <= 18) {
        return false;
      }

      return true;
    });

    _defineProperty(this, "getShippingRates", rateArr => {
      if (rateArr.length > 0) {
        const filteredRates = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.uniqBy(rateArr, function (e) {
          return e.service;
        });

        const smallSorted = filteredRates.sort((a, b) => parseFloat(a.rate || 0) - parseFloat(b.rate || 0));
        const Smallest = smallSorted[0];
        const Smallest1 = smallSorted[1];
        const Smallest2 = smallSorted[2];
        const PriorityRaw = filteredRates.find(el => el.service === "Priority");
        const ExpressRaw = filteredRates.find(el => el.service === "Express"); // const standard =
        //   Smallest.service === "Priority" || Smallest.service === "Express"
        //     ? null
        //     : {
        //         ...Smallest,
        //         customName: "Standard",
        //         customRate: parseFloat(Smallest.rate) + shippingExtraRate
        //       };
        // const Priority = PriorityRaw
        //   ? {
        //       ...PriorityRaw,
        //       customName: "Priority",
        //       customRate: parseFloat(PriorityRaw.rate) + shippingExtraRate
        //     }
        //   : null;
        // const Express = ExpressRaw
        //   ? {
        //       ...ExpressRaw,
        //       customName: "Express",
        //       customRate: parseFloat(ExpressRaw.rate) + shippingExtraRate
        //     }
        //   : null;

        const standard = Smallest && _objectSpread(_objectSpread({}, Smallest), {}, {
          customName: "Standard",
          customRate: parseFloat(Smallest.rate) + _constants_constantMessage__WEBPACK_IMPORTED_MODULE_1__[/* shippingExtraRate */ "i"]
        });

        const Priority = Smallest1 && _objectSpread(_objectSpread({}, Smallest1), {}, {
          customName: "Priority",
          customRate: parseFloat(Smallest1.rate) + _constants_constantMessage__WEBPACK_IMPORTED_MODULE_1__[/* shippingExtraRate */ "i"]
        });

        const Express = Smallest2 && _objectSpread(_objectSpread({}, Smallest2), {}, {
          customName: "Express",
          customRate: parseFloat(Smallest2.rate) + _constants_constantMessage__WEBPACK_IMPORTED_MODULE_1__[/* shippingExtraRate */ "i"]
        });

        return [standard, Priority, Express].filter(el => el);
      }

      return rateArr; // return [
      //   {
      //     carrier: "Carrier_Not_Found",
      //     created_at: new Date(),
      //     currency: "USD",
      //     mode: "test",
      //     object: "Rate",
      //     customName: "Standard",
      //     rate: shippingStaticRate,
      //     customRate: shippingStaticRate,
      //     retail_currency: "USD",
      //   }
      // ]
    });
  }

  dateFun(date) {
    var d = new Date(date),
        month = "" + (d.getMonth() + 1),
        day = "" + d.getDate(),
        year = d.getFullYear();
    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;
    return [month, day, year].join("/");
  }

  dateFun2(date) {
    var d = new Date(date),
        month = "" + (d.getMonth() + 1),
        day = "" + d.getDate(),
        year = d.getFullYear();
    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;
    return [month, day, year].join("/");
  }

  dateTimeAmPm(date) {
    var d = new Date(date),
        month = "" + (d.getMonth() + 1),
        day = "" + d.getDate(),
        year = d.getFullYear();
    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;
    const dateis = month + "/" + day + "/" + year + " ";
    var hours = d.getHours();
    var minutes = d.getMinutes();
    var ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'

    minutes = minutes < 10 ? "0" + minutes : minutes;
    var strTime = hours + ":" + minutes + " " + ampm;
    return dateis + strTime;
  }

  dateTimeAmPmOld(date) {
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var d = new Date(date),
        month = "" + (d.getMonth() + 1),
        day = "" + d.getDate(),
        year = d.getFullYear();
    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;
    const monthnameis = monthNames[month - 1];
    const dateis = monthnameis + " " + day + "," + year + " ";
    var hours = d.getHours();
    var minutes = d.getMinutes();
    var ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'

    minutes = minutes < 10 ? "0" + minutes : minutes;
    var strTime = hours + ":" + minutes + " " + ampm;
    return dateis + strTime;
  }

  dateTimeInMonthName(date) {
    if (!date) return "-";
    const monthNames = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
    var d = new Date(date),
        month = "" + (d.getMonth() + 1),
        day = "" + d.getDate(),
        year = d.getFullYear();
    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;
    const monthnameis = monthNames[month - 1];
    const dateis = monthnameis + " " + day + ", " + year + " "; //var hours = d.getHours();
    // var minutes = d.getMinutes();
    //  hours = hours % 12;
    //  hours = hours ? hours : 12; // the hour '0' should be '12'
    // minutes = minutes < 10 ? "0" + minutes : minutes;

    return dateis;
  }

  currancyAdd(number) {
    if (number >= 0) {
      return "$" + number;
    } else {
      return "-$" + Math.abs(number);
    }
  }

  nombarFormat(nbr) {
    if (nbr === 0 && nbr === "") {
      return "0.00";
    } else {
      if (nbr) {
        var nr = nbr.toFixed(2);
        nr = nr.toString();
        var pattern = /(-?\d+)(\d{3})/;

        while (pattern.test(nr)) nr = nr.replace(pattern, "$1,$2");

        return nr;
      } else {
        return 0.0;
      }
    }
  }

  currancyAddWithNumber(numberX) {
    const number = parseFloat(numberX);
    const withoutUsd = this.currencyWithoutUsd(number); // return `${withoutUsd} USD`;

    return `${withoutUsd}`;
  }

  currencyWithoutUsd(numberX) {
    if (numberX) {
      let number = parseFloat(numberX);
      number = number.toFixed(2);
      var pattern = /(-?\d+)(\d{3})/;

      if (number >= 0) {
        number = number.toString();

        while (pattern.test(number)) number = number.replace(pattern, "$1,$2");

        return "$" + number;
      } else {
        var num = Math.abs(number);
        num = num.toFixed(2);
        num = num.toString();

        while (pattern.test(num)) num = num.replace(pattern, "$1,$2");

        return "-$" + num;
      }
    } else {
      return "$0.00";
    }
  }

  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  sliceToNumber(string = 0, digit = 0) {
    return string.slice(0, digit);
  }

  timeConverter(UNIX_timestamp) {
    var a = new Date(UNIX_timestamp * 1000); // var months = [
    //   "Jan",
    //   "Feb",
    //   "Mar",
    //   "Apr",
    //   "May",
    //   "Jun",
    //   "Jul",
    //   "Aug",
    //   "Sep",
    //   "Oct",
    //   "Nov",
    //   "Dec"
    // ];
    // var year = a.getFullYear();
    // var month = months[a.getMonth()];
    // var date = a.getDate();

    var hour = a.getHours();
    var min = a.getMinutes(); // var sec = a.getSeconds();

    if (min < 10) {
      min = "0" + min;
    } // var ampm = "AM";


    var timeis = "";

    if (hour <= 12) {
      timeis = hour + ":" + min + "AM";
    } else {
      hour = parseFloat(hour) - 12;
      timeis = hour + ":" + min + "PM";
    } //   var res = hour + ":" + min;


    return timeis;
  }

  currentDate() {
    var d = new Date();
    var year = parseInt(d.getYear()) - 100;
    var month = d.getMonth() + 1;
    return "20" + year + "/" + month + "/" + d.getDate();
  }

  currentDateYesterday() {
    var d = new Date();
    var year = parseInt(d.getYear()) - 100;
    var month = d.getMonth() + 1;
    var yesterday = new Date(d.getTime());
    yesterday.setDate(d.getDate() - 1);
    var date = yesterday.getDate();
    return "20" + year + "/" + month + "/" + date;
  }

  currentDateBeforeDay(beforeDay) {
    var d = new Date();
    var yesterday = new Date(d.getTime());
    yesterday.setDate(d.getDate() - parseInt(beforeDay));
    var date = yesterday.getDate();
    var year = parseInt(yesterday.getYear()) - 100;
    var month = yesterday.getMonth() + 1;
    return "20" + year + "/" + month + "/" + date;
  }

  currentDateBeforeMonth(beforeMonth) {
    var d = new Date();
    d.setMonth(d.getMonth() - parseInt(beforeMonth));
    var month = d.getMonth() + parseInt(1);
    var year = parseInt(d.getYear()) - 100;
    return "20" + year + "/" + month + "/" + d.getDate();
  }

  currentDateBeforeYear(beforeYear) {
    var d = new Date();
    var month = d.getMonth() + parseInt(1);
    var year = parseInt(d.getYear()) - 100;
    year = year - parseInt(beforeYear);
    return "20" + year + "/" + month + "/" + d.getDate();
  }

  graphColorPostion(data) {
    if (data >= 0) {
      return "#1fa764";
    } else {
      return "#ed5454";
    }
  }

  graphColorFillPostion(data) {
    if (data >= 0) {
      return "#abe5c1";
    } else {
      return "#ffa1a9";
    }
  }

  stringToArray(str) {
    var res = str.split(",");
    var newArray = [];
    res.forEach(character => {
      if (character === character.toUpperCase()) {
        if (character.length <= 4) {
          newArray.push(character);
        }
      }
    });
    return newArray.slice(0, 10);
  }

  checkIsUpparCashOrNot(character) {
    if (character === character.toUpperCase()) {
      if (character.length <= 4) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  stringCheckResponseInColor(str, spn) {
    var innerHTML = str;
    spn = spn.toUpperCase();
    var index = innerHTML.indexOf(spn);

    if (index >= 0) {
      innerHTML = innerHTML.substring(0, index) + "<span className='highlight'>" + innerHTML.substring(index, index + spn.length) + "</span>" + innerHTML.substring(index + spn.length); // return 'ram';
    }

    return innerHTML;
  }

  subStrStartEnd(str, starting, ending) {
    if (str) {
      return str.substr(starting, ending);
    } else {
      return str;
    }
  }

  bodyColor() {
    var currentUrl = window.location.href;
    var ar = currentUrl.split("/");

    if (ar[3] === "stocks") {
      return "black";
    } else {
      return "";
    }
  }

  getParchantage(parValue, totalvalue) {
    return parseFloat(parValue) * parseFloat(totalvalue) / 100;
  }

  getUnknownParchantage(parValue, totalvalue) {
    return parseFloat(parValue) / totalvalue * 100;
  }

  getMinMaxValue(ar) {
    /*eslint no-extend-native: ["error", { "exceptions": ["Array"] }]*/
    if (ar.producttype === "variable") {
      const arr = [];
      ar.variation.map(key => {
        arr.push(key.sale_price);
        return null;
      });

      Array.prototype.max = function () {
        return Math.max.apply(null, this);
      };

      Array.prototype.min = function () {
        return Math.min.apply(null, this);
      };

      if (arr.length > 1) {
        if (arr.min() === arr.max()) {
          const returnString = "From $" + this.nombarFormat(arr.min());
          return returnString;
        }

        const returnString = "From $" + this.nombarFormat(arr.min()) + " - $" + this.nombarFormat(arr.max());
        return returnString;
      } else {
        const returnString = "From $" + this.nombarFormat(arr.min());
        return returnString;
      }
    }
  }

  getMinMaxValue2(ar) {
    /*eslint no-extend-native: ["error", { "exceptions": ["Array"] }]*/
    if (ar.producttype === "variable") {
      const arr = [];
      ar.variation.map(key => {
        arr.push(key.sale_price);
        return null;
      });

      Array.prototype.max = function () {
        return Math.max.apply(null, this);
      };

      Array.prototype.min = function () {
        return Math.min.apply(null, this);
      };

      if (arr.length > 1) {
        if (arr.min() === arr.max()) {
          const returnString = "$" + this.nombarFormat(arr.min());
          return returnString;
        }

        const returnString = "$" + this.nombarFormat(arr.min()) + " - $" + this.nombarFormat(arr.max());
        return returnString;
      } else {
        const returnString = "$" + this.nombarFormat(arr.min());
        return returnString;
      }
    }
  }

  getMinMaxValueWithVariation(ar) {
    if (ar.producttype === "variable") {
      const arr = [];
      ar.variation.map(key => {
        arr.push(key.sale_price);
        return null;
      });

      Array.prototype.max = function () {
        return Math.max.apply(null, this);
      };

      Array.prototype.min = function () {
        return Math.min.apply(null, this);
      };

      if (arr.length > 1) {
        const returnString = "From $" + this.nombarFormat(arr.min()) + " - $" + this.nombarFormat(arr.max());
        return returnString;
      } else {
        const returnString = "From $" + this.nombarFormat(arr.min());
        return returnString;
      }
    } else {
      if (ar.dsaleprice) {
        const returnString = "From $" + this.nombarFormat(ar.dsaleprice);
        return returnString;
      } else {
        const returnString = "From $" + this.nombarFormat(ar.dregularprice);
        return returnString;
      }
    }
  }

  isLoaded(obj) {
    return Object.values(obj).every(el => el);
  }

  removeParams(url, sParam) {
    url = url.split("?")[0] + "?";
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split("&"),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
      sParameterName = sURLVariables[i].split("=");

      if (sParameterName[0] !== sParam) {
        url = url + sParameterName[0] + "=" + sParameterName[1] + "&";
      }
    }

    return url.substring(0, url.length - 1);
  }

  returnReferringUrl(url) {
    if (!url) return "Direct traffic";
    if (url.trim() === "") return "Direct traffic";
    return url;
  }

  getDialCode(countryCodeList, countryCode) {
    var returnCuntryCode = "";
    countryCodeList.forEach(element => {
      if (element.code === countryCode) {
        returnCuntryCode = element.dial_code;
      }
    });
    return returnCuntryCode;
  }

  showExportMsg(shippingType, isSame, billingAddress, shippingAddress) {
    if (shippingType !== "express") return false;

    if (isSame) {
      if (billingAddress) if (billingAddress.toLowerCase().trim() === "usa") {
        return false;
      }
    } else {
      if (shippingAddress) if (shippingAddress.toLowerCase().trim() === "usa") {
        return false;
      }
    }

    return true;
  }

  parseOrderProduct(item) {
    const isCombo = item.combo ? true : false,
          comboId = item.combo ? item._id : null,
          productId = item.combo ? null : item.productid._id,
          productMeta = item.combo ? null : item._id,
          isSubscribed = item.subscribed ? true : false,
          subscriptionMeta = item.subscribed ? {
      duration: item.subscribedTime
    } : null,
          itemId = item._id,
          _id = item._id,
          qty = item.qty.value,
          title = item.combo ? item.title : item.productid.producttitle,
          unitPrice = item.saleprice ? item.saleprice : item.regularprice,
          subTotal = item.saleprice ? this.multiply(item.saleprice, item.qty.value) : this.multiply(item.regularprice, item.qty.value),
          attribute = this.getSelectedAttributes(item),
          height = item.shipping_height,
          width = item.shipping_width,
          length = item.shipping_length,
          volume = item.volume,
          weight = item.weight;
    const order = {
      isCombo,
      comboId,
      productId,
      productMeta,
      isSubscribed,
      subscriptionMeta,
      itemId,
      _id,
      qty,
      unitPrice,
      subTotal,
      attribute,
      width,
      length,
      height,
      title,
      volume,
      weight
    };
    this.removeEmpty(order);
    return order;
  }

  multiply(a, b) {
    return parseFloat(a) * parseFloat(b);
  }

  generateOrderNew(stateObj, paymentResponse = "", referralId, cart, user, confirmShipRes) {
    const {
      service
    } = confirmShipRes,
          confirmRest = _objectWithoutProperties(confirmShipRes, ["service"]);

    const {
      paymentMethod
    } = stateObj;
    const {
      items,
      shippingCharge,
      subTotal,
      totalWeight,
      totalVolume,
      taxValue,
      taxPercent,
      taxCouponDiscount,
      taxCouponCode
    } = cart;
    const orderProducts = items.map(el => this.parseOrderProduct(el));
    const {
      height: totalHeight,
      length: totalLength,
      width: totalWidth
    } = this.getHeightWeight(orderProducts);

    const order = _objectSpread({
      totalVolume,
      totalWeight,
      shippingMethod: service,
      products: orderProducts,
      countryTax: taxPercent * 100,
      taxAmount: taxValue || parseFloat(cart.subTotal || 0) * parseFloat(taxPercent || 0) || 0,
      shippingCharge,
      userDetails: this.getUserDetails(stateObj).user,
      orderStatus: _constants_constantMessage__WEBPACK_IMPORTED_MODULE_1__[/* defaultOrderStatus */ "c"],
      paymentMethod: paymentMethod === "stripe" ? "Authorize" : paymentMethod,
      status: _constants_constantMessage__WEBPACK_IMPORTED_MODULE_1__[/* defaultStatusInOrder */ "d"],
      wholeSubtotal: parseFloat(subTotal.toFixed(2)),
      wasReferred: referralId ? true : false,
      referral: referralId ? referralId : null,
      isCoupon: taxCouponCode ? true : false,
      couponId: taxCouponCode,
      couponDisc: taxCouponCode ? taxCouponDiscount : null,
      grandTotal: this.getGrandTotal(subTotal, taxPercent, shippingCharge, taxCouponDiscount),
      isGuest: user._id ? false : true,
      userId: user._id ? user._id : null,
      userMetaId: user.userMetaId ? user.userMetaId : null,
      totalHeight,
      totalWidth,
      totalLength,
      refPercentage: referralPresent
    }, confirmRest);

    this.removeEmpty(order);
    return order;
  }

  getDiscount(discount, subTotal) {
    return discount * subTotal / 100 || 0;
  }

  getGrandTotal(subTotal, taxPresent, shippingCharge, discount) {
    const amountWithTax = subTotal + taxPresent * subTotal + shippingCharge;
    const discountAmount = this.getDiscount(discount, subTotal);
    const total = parseFloat(amountWithTax || 0) - parseFloat(discountAmount || 0);
    return parseFloat(total.toFixed(2));
  }

  getHeightWeight(items) {
    const height = items.map(el => el.height * parseFloat(el.qty));
    const width = items.map(el => el.width * parseFloat(el.qty));
    const length = items.map(el => el.length * parseFloat(el.qty));
    const shape = {
      height: height.reduce((a, b) => a + b, 0),
      width: width.reduce((a, b) => a + b, 0),
      length: length.reduce((a, b) => a + b, 0)
    };
    return shape;
  }

  generateOrder(stateObj, paymentResponse = "", referrer_url_id, cart, user, confirmShipRes) {
    const {
      service
    } = confirmShipRes,
          confirmRest = _objectWithoutProperties(confirmShipRes, ["service"]);

    var transactionId = "000";
    const payType = stateObj.paymentMethod;

    if (stateObj.paymentMethod === "stripe" && paymentResponse) {
      transactionId = paymentResponse;
    }

    if (stateObj.paymentMethod === "paypal" && paymentResponse && paymentResponse.paymentID) {
      transactionId = paymentResponse.paymentID;
    } // return false;


    const {
      items,
      shippingCharge,
      subTotal,
      totalWeight,
      totalVolume,
      taxValue,
      taxPercent,
      taxCouponDiscount,
      taxCouponCode
    } = cart;
    const {
      billing_first_name,
      billing_last_name,
      billing_email_name,
      billing_phone_name,
      billing_address_name_01,
      billing_address_name_02,
      billing_address_town,
      shipping_first_name,
      shipping_last_name,
      shipping_address_name_01,
      shipping_address_name_02,
      shipping_address_town,
      selectedShippingCity,
      selectedCity,
      selectedShippingCountry,
      selectedCountry,
      shipping_zip_code,
      billing_zip_code,
      sameShipping
    } = stateObj;
    let order = {};
    let country = "";

    if (selectedShippingCountry) {
      country = selectedShippingCountry;
    } else if (selectedCountry) {
      country = selectedCountry || "";
    }

    let state = "";

    if (selectedShippingCity) {
      state = selectedShippingCity;
    } else if (selectedCity) {
      state = selectedCity || "";
    }

    let zipcode = "";

    if (shipping_zip_code) {
      zipcode = shipping_zip_code;
    } else if (billing_zip_code) {
      zipcode = billing_zip_code;
    }

    order.orderproduct = items.map(el => {
      // console.log({el})
      // this.parseOrderProduct(el);
      // console.log({
      //   checkOrder: this.parseOrderProduct(el)
      // })
      // return this.parseOrderProduct(el)
      let returnItem = {
        productmetaid: el._id,
        proucttitle: el.combo ? el.title : el.productid.producttitle,
        quantity: el.qty.value,
        singleprice: el.saleprice ? el.saleprice : el.regularprice,
        subtotal: 0,
        orderdate: Date(),
        country,
        isguest:  true || false,
        subscribed: el.subscribed,
        subscribedDiscountPersent: el.subscribedDiscountPersent
      };
      let subtotal = parseInt(returnItem.quantity || 1) * parseInt(returnItem.singleprice || 1);
      let attribute = {};

      if (el.producttype === "variable") {
        el.attributes.map((item, index) => {
          attribute = _objectSpread(_objectSpread({}, attribute), {}, {
            [item.names]: el[item.names].value
          });
          return null;
        });
      }

      returnItem = _objectSpread(_objectSpread({}, returnItem), {}, {
        subtotal,
        attribute
      });
      return _objectSpread({}, returnItem);
    });
    let shippingAddress = `${shipping_first_name} ${shipping_last_name}, ${shipping_address_name_01} ${shipping_address_name_02} ${shipping_address_town} `;
    let billingAddress = `${billing_first_name} ${billing_last_name}, ${billing_address_name_01} ${billing_address_name_02} ${billing_address_town} `;
    const TaxgrandTotalWithTax = subTotal + taxPercent * subTotal + shippingCharge;
    const discount = taxCouponDiscount * subTotal / 100;

    if (user._id) {
      const userid = user._id;
      order.userid = userid;
    }

    order.grandtotal = parseFloat(TaxgrandTotalWithTax || 0) - parseFloat(discount || 0);
    order.coupondisc = taxCouponDiscount;
    order.couponid = taxCouponCode;
    order.country = country;
    order.offerprice = 100;
    order.shippingmethod = service || "Express shipping" || "Normal shipping";
    order.wholesubtotal = subTotal;
    order.shippingcharge = shippingCharge || 0;
    order.paymentmethod = payType;
    order.ordernote = "Make it quick";
    order.status = "in process";
    order.paymentstatus = "Done";
    order.transactionid = transactionId;
    order.country_tax = taxPercent * 100;
    order.totalweight = totalWeight;
    order.totalvolume = totalVolume;
    order.taxamount = taxValue;
    order.userdetails = {
      country,
      firstname: billing_first_name,
      lastname: billing_last_name,
      email: billing_email_name,
      shippingaddress: sameShipping ? billingAddress : shippingAddress,
      billingaddress: billingAddress,
      extraaddress: "jdjdjd",
      city: shipping_address_town ? shipping_address_town : billing_address_town,
      state,
      zipcode,
      phonenumber: billing_phone_name
    };
    order.orderstatus = "Not delivered";

    if (referrer_url_id) {
      order.wasreferred = true;
      order.referral = referrer_url_id;
    }

    return _objectSpread(_objectSpread({}, order), confirmRest);
  }

  getUserDetails(stateObj) {
    const {
      billing_first_name,
      billing_last_name,
      billing_email_name,
      billing_phone_name,
      billing_address_name_01,
      billing_address_name_02,
      billing_address_town,
      shipping_first_name,
      shipping_last_name,
      shipping_address_name_01,
      shipping_address_name_02,
      shipping_address_town,
      selectedShippingCity,
      selectedCity,
      selectedShippingCountry,
      selectedCountry,
      shipping_zip_code,
      billing_zip_code,
      sameShipping
    } = stateObj;
    const shippingAddress = `${shipping_first_name} ${shipping_last_name}, ${shipping_address_name_01} ${shipping_address_name_02} ${shipping_address_town} `;
    const billingAddress = `${billing_first_name} ${billing_last_name}, ${billing_address_name_01} ${billing_address_name_02} ${billing_address_town} `;
    const user = {
      firstname: billing_first_name,
      lastname: billing_last_name,
      email: billing_email_name,
      shippingaddress: sameShipping ? billingAddress : shippingAddress,
      billingaddress: billingAddress,
      phonenumber: billing_phone_name,
      country: this.getOneValid(selectedShippingCountry, selectedCountry),
      zipcode: this.getOneValid(shipping_zip_code, billing_zip_code),
      state: this.getOneValid(selectedShippingCity, selectedCity)
    };
    return {
      user,
      shippingAddress,
      billingAddress
    };
  }

  getOneValid(a, b) {
    if (a && a.trim()) return a;
    if (b && b.trim()) return b;
    return "";
  }

  checkProductInWishList(list = [], product_id) {
    var flag = false; // console.log(list)
    // console.log(product_id)

    if (list.length > 0) {
      list.forEach((itm, i) => {
        if (itm.productid === product_id) {
          flag = i;
        }
      });
    }

    return flag;
  }

  getSingleElementByMultipleObject(arrayData, f) {
    const result = arrayData.reduce(function (r, a) {
      r[a.carrier] = r[a.carrier] || [];
      r[a.carrier].push(a);
      return r;
    }, {});
    return result;
  }

  shippingStringRate(key) {
    if (key && key.est_delivery_days) {
      return " in " + key.est_delivery_days + " Days .";
    } else {
      return " in - Days .";
    }
  }

  cartHeightWidhtCalculation(item) {
    var height = 0;
    var width = 0;
    var length = 0;
    var weight = 0;

    if (item.length > 0) {
      item.forEach(itm => {
        height = height + itm.shipping_height;
        width = width + itm.shipping_width;
        length = length + itm.shipping_length;
        weight = weight + itm.weight;
      });
    }

    return {
      height,
      width,
      length,
      weight
    };
  }

  cartHeightWidhtCalculation2(itemA) {
    var height = 0;
    var width = 0;
    var length = 0;
    var weight = 0;

    function flatten(arr) {
      return arr.reduce(function (flat, toFlatten) {
        return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
      }, []);
    }

    const item = flatten(itemA.map(el => {
      const qty = el.qty ? el.qty.value ? parseInt(el.qty.value) : 1 : 1;
      if (qty > 1) return new Array(qty).fill(el);
      return el;
    }));

    const getGreater = (a, b) => {
      if (a > b) return a;
      return b;
    };

    if (item.length > 0) {
      item.forEach(itm => {
        // height = getGreater(height, itm.shipping_height);
        // width = width + itm.shipping_width;
        // length = getGreater(length, itm.shipping_length);
        weight = weight + itm.weight;
      });
    }

    const itemsB = itemA.map(el => ({
      h: el.shipping_height,
      l: el.shipping_length,
      w: el.shipping_width,
      qty: el.qty.value
    }));
    const itemsC = [].concat.apply([], itemsB);
    const itemsD = Object(box_dimension_calculator__WEBPACK_IMPORTED_MODULE_2__["combineLoop"])(itemsC)[0];
    return {
      height: itemsD.h,
      width: itemsD.w,
      length: itemsD.l,
      weight
    };
  }

  exportToJson(objectData, fileName = "export") {
    let filename = `${fileName}.json`;
    let contentType = "application/json;charset=utf-8;";

    if (window.navigator && window.navigator.msSaveOrOpenBlob) {
      var blob = new Blob([decodeURIComponent(encodeURI(JSON.stringify(objectData)))], {
        type: contentType
      });
      navigator.msSaveOrOpenBlob(blob, filename);
    } else {
      var a = document.createElement("a");
      a.download = filename;
      a.href = "data:" + contentType + "," + encodeURIComponent(JSON.stringify(objectData));
      a.target = "_blank";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  }

  qtyList(qty = 10) {
    const quantity = parseFloat(qty) > 10 ? parseFloat(qty) : 10;
    const temp = new Array(quantity).fill("");
    const newarray = temp.map((el, index) => ({
      label: index + 1,
      value: index + 1
    }));
    return newarray;
  }

}

/***/ }),

/***/ "1HKE":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export setAPUser */
/* unused harmony export unsetAPUser */
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("TzE8");

const setAPUser = ambassadoruser => {
  return {
    type: _type__WEBPACK_IMPORTED_MODULE_0__[/* SET_APUSER */ "u"],
    payload: ambassadoruser
  };
};
const unsetAPUser = () => ({
  type: _type__WEBPACK_IMPORTED_MODULE_0__[/* UNSET_APUSER */ "jb"],
  payload: {}
});

/***/ }),

/***/ "1HP9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return setEntryMsg; });
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("TzE8");

const setEntryMsg = payload => ({
  type: _type__WEBPACK_IMPORTED_MODULE_0__[/* SET_ENTRY_MSG */ "F"],
  payload
});

/***/ }),

/***/ "2Cd/":
/***/ (function(module, exports) {

// import { SET_CONTINENT, SET_COUNTRY, SET_LOCATION } from "./type";
// // const redirectToCountry = (countryCode) => {
// //   let pathArr = window.location.pathname.split("/");
// //   let newPath = pathArr.map((el, index) => {
// //     if (el === "") return "/";
// //     if (index === 1) return countryCode;
// //     return "/" + el;
// //   });
// //   return newPath.join("");
// // }
// export const setLocation = location => dispatch => {
//   dispatch({
//     type: SET_LOCATION,
//     payload: location
//   });
//   // setTimeout(() => {
//   //   window.location.href = redirectToCountry(SET_LOCATION.countryCode);
//   // }, 200);
// };
// export const setCountry = country => ({
//   type: SET_COUNTRY,
//   payload: country
// });
// export const setContinent = continent => ({
//   type: SET_CONTINENT,
//   payload: continent
// });

/***/ }),

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

/***/ "2uFY":
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

// EXTERNAL MODULE: ./services/helpers/product.js
var helpers_product = __webpack_require__("OWVN");

// EXTERNAL MODULE: ./services/helpers/misc.js + 1 modules
var misc = __webpack_require__("yH4c");

// EXTERNAL MODULE: ./redux/actions/cart.js
var actions_cart = __webpack_require__("UrdJ");

// EXTERNAL MODULE: ./redux/actions/drawers.js
var drawers = __webpack_require__("JLUA");

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: ./constants/projectSettings.js
var projectSettings = __webpack_require__("xSWb");

// EXTERNAL MODULE: ./services/extra/basicFunction.js
var basicFunction = __webpack_require__("0pHj");

// EXTERNAL MODULE: ./services/api.js + 4 modules
var api = __webpack_require__("2MRG");

// EXTERNAL MODULE: ./redux/actions/index.js
var actions = __webpack_require__("x91w");

// EXTERNAL MODULE: external "reactstrap"
var external_reactstrap_ = __webpack_require__("oL/c");

// EXTERNAL MODULE: external "react-lazy-load-image-component"
var external_react_lazy_load_image_component_ = __webpack_require__("g8bt");

// CONCATENATED MODULE: ./assets/images/wishlist-heart.js
var __jsx = external_react_default.a.createElement;


const Heart = color => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "38",
    height: "37",
    viewBox: "0 0 38 37"
  }, __jsx("path", {
    fill: color,
    d: "M31.55 4a11.2 11.2 0 0 0-9 5 11.2 11.2 0 0 0-9-5 9.854 9.854 0 0 0-10 10 21.158 21.158 0 0 0 4 12c5.5 7.523 15 15 15 15a112.207 112.207 0 0 0 14-15c2.888-3.949 5-8.618 5-12a9.854 9.854 0 0 0-10-10z",
    transform: "translate(-3.55 -4)"
  }));
};

Heart.defaultProps = {
  color: "#aaa"
};
/* harmony default export */ var wishlist_heart = (Heart);
// CONCATENATED MODULE: ./components/ProductInfo.js

var ProductInfo_jsx = external_react_default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const Checkbox = dynamic_default()(() => __webpack_require__.e(/* import() */ 7).then(__webpack_require__.bind(null, "DCDu")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("DCDu")],
    modules: ['./form-components/Checkbox']
  }
});
const Heading = dynamic_default()(() => __webpack_require__.e(/* import() */ 0).then(__webpack_require__.bind(null, "h1bS")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("h1bS")],
    modules: ['./Heading']
  }
});


const Button = dynamic_default()(() => __webpack_require__.e(/* import() */ 12).then(__webpack_require__.bind(null, "s5Da")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("s5Da")],
    modules: ['./form-components/Button']
  }
});
const Quantity = dynamic_default()(() => __webpack_require__.e(/* import() */ 103).then(__webpack_require__.bind(null, "PNxv")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("PNxv")],
    modules: ['./form-components/Quantity']
  }
});










const ImageZoom = dynamic_default()(() => __webpack_require__.e(/* import() */ 90).then(__webpack_require__.bind(null, "S2Y+")), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("S2Y+")],
    modules: ['./ImageZoom']
  }
});

const Drawer = dynamic_default()(() => __webpack_require__.e(/* import() */ 6).then(__webpack_require__.bind(null, "lAVO")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("lAVO")],
    modules: ['./Drawer']
  }
});
const Login = dynamic_default()(() => __webpack_require__.e(/* import() */ 5).then(__webpack_require__.bind(null, "hmzm")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("hmzm")],
    modules: ['./popups/Login']
  }
});



const ProductInfo_basicFunction = new basicFunction["a" /* default */]();

class ProductInfo_ProductInfo extends external_react_default.a.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "hartState", async (_id, productmainId, productDetails, productSlug) => {
      if (!this.props.user._id) {
        this.props.toggleRegBar();
      } else {
        // console.log(this.props.wishList)
        const removeIndex = ProductInfo_basicFunction.checkProductInWishList(this.props.wishList, productmainId); //  console.log(removeIndex);

        var wishListArray = [...this.props.wishList];

        if (removeIndex || removeIndex === 0) {
          if (this.props.user._id) {
            var id = wishListArray[removeIndex].wishListId;
            Object(api["l" /* deleteWishList */])({
              id
            }).then(resJson => {
              if (resJson.success) {}
            }).catch();
          }

          wishListArray.splice(removeIndex, 1);
          this.props.setWishList(wishListArray);
          this.setState({
            SpinnerToggle: false
          });
          this.setState({
            isFavourite: false
          });
        } else {
          // console.log(this.props.user._id);
          this.setState({
            isFavourite: true
          });

          if (this.props.user._id) {
            const userid = this.props.user._id;
            Object(api["a" /* addToWishList */])(userid, productmainId, _id, productSlug).then(resJson => {
              const resJson2 = resJson.data;

              if (resJson2.status) {
                var wishlist = '';
                const wishListRes = resJson2.wishlist; //  console.log(wishListRes);

                if (wishListRes.combo) {
                  wishlist = {
                    combo: wishListRes.combo,
                    productid: wishListRes.comboid,
                    productmeta: wishListRes.comboid,
                    userid: userid,
                    wishListId: wishListRes._id,
                    productSlug
                  };
                } else {
                  wishlist = {
                    combo: wishListRes.combo,
                    productid: wishListRes.productid,
                    productmeta: wishListRes.productmeta,
                    userid: userid,
                    wishListId: wishListRes._id,
                    productSlug
                  };
                } // console.log(wishlist)


                this.props.setWishList([...wishListArray, wishlist]);
                this.setState({
                  SpinnerToggle: false
                });
              }
            }).catch(err => {});
          } else {
            const wishListDetails = {
              productmeta: _id,
              productid: productmainId,
              productDetails: productDetails,
              productSlug
            }; // console.log(wishListDetails);

            this.props.setWishList([...wishListArray, wishListDetails]);
          }
        }
      }
    });

    _defineProperty(this, "getAvg", reviews => {
      if (reviews) {
        const newArr = reviews.map(el => el.overall);
        const sum = newArr.reduce((a, b) => a + b, 0);
        return sum / reviews.length;
      }

      return 0;
    });

    this.state = {
      qty: 1,
      isSubscribed: false,
      subsDuration: '3',
      isAllIngredient: false,
      isFavourite: false
    };
  }

  componentDidMount() {
    this.getWishListAtStart();
  }

  async getWishListAtStart() {
    const response = await Object(api["s" /* getWishList */])(this.props.user._id);
    const wishlist = response.data.wishlist;
    let wishlist1 = [];
    wishlist.map(wishListRes => {
      if (wishListRes.combo) {
        let wishlist = {
          combo: wishListRes.combo,
          productid: wishListRes.comboid,
          productmeta: wishListRes.comboid,
          userid: this.props.user._id,
          wishListId: wishListRes._id
        };
        wishlist1.push(wishlist);
      } else {
        let wishlist = {
          combo: wishListRes.combo,
          productid: wishListRes.productid._id,
          productmeta: wishListRes.productmeta,
          userid: this.props.user._id,
          wishListId: wishListRes._id
        };
        wishlist1.push(wishlist);
      }
    });
    this.props.setWishList(wishlist1);
    const removeIndex = ProductInfo_basicFunction.checkProductInWishList(wishlist1, this.props.product.productid._id);

    if (removeIndex || removeIndex === 0) {
      this.setState({
        isFavourite: true
      });
    }
  }

  render() {
    // console.log(this.state.isFavourite)
    // console.log(this.props.wishList)
    //  console.log(this.state.displayDrawer);
    const className = this.state.isFavourite ? 'c-product-info__btn-wrap__wishlist__active' : 'c-product-info__btn-wrap__wishlist';
    const {
      qty,
      isSubscribed,
      subsDuration,
      isAllIngredient
    } = this.state;
    const {
      image,
      product,
      productAttr,
      addToCart,
      cart,
      showCartBar,
      allProducts
    } = this.props;
    const basePrice = Object(helpers_product["c" /* getBasicPrice */])(product);
    const price = parseFloat(basePrice.sale_price || 0) * qty;
    const {
      subsPercent
    } = projectSettings["d" /* default */];
    const cutPrice = ProductInfo_basicFunction.getParchantage(parseFloat(subsPercent), basePrice.sale_price);
    const disPrice = ((parseFloat(basePrice.sale_price) - parseFloat(cutPrice)) * qty).toFixed(2);
    const {
      _id: productId,
      combo,
      productid,
      title
    } = product;
    const productName = combo === true ? title : productid ? productid.producttitle : title || '';

    const addToCartFn = () => {
      if (isSubscribed) {
        addToCart(Object(helpers_product["b" /* directAddToCart */])(_objectSpread(_objectSpread({}, product), {}, {
          subscribed: isSubscribed,
          subscribedTime: subsDuration,
          subscribedDiscountPersent: subsPercent
        }), qty));
      } else {
        addToCart(Object(helpers_product["b" /* directAddToCart */])(_objectSpread({}, product), qty));
      }

      showCartBar();
    };

    const {
      Option
    } = external_antd_["Select"];
    const gallery = Object(helpers_product["g" /* getProductImageArray */])(product);
    console.log(this.props.reviews);
    const avgReviews = this.getAvg(this.props.reviews).toFixed(1); // console.log(this.props);

    const reviewsLength = this.props.reviews ? this.props.reviews.length : 0;

    const headingAndReviews = () => ProductInfo_jsx("div", null, ProductInfo_jsx("div", {
      className: "d-flex flex-wrap c-product-info__title-wrapper"
    }, ProductInfo_jsx("div", {
      className: "c-product-info__title-col"
    }, ProductInfo_jsx(Heading, {
      versions: ['default', 'product'],
      parentClass: "c-product-info"
    }, product && (product.title || product.productid && product.productid.producttitle)), ProductInfo_jsx(Heading, {
      style: {
        fontFamily: 'futuraBT-book',
        opacity: 0.5,
        fontWeight: '600',
        color: '#000000'
      },
      subHeading: "true",
      parentClass: "c-product-info",
      versions: ['product']
    }, product && (product.sdescription || product.productid && product.productid.sdescription))), ProductInfo_jsx("div", {
      className: "c-product-info__heart-and-rate "
    }, ProductInfo_jsx("div", {
      className: className
    }, ProductInfo_jsx(Button, {
      style: {
        color: 'black'
      },
      onClick: () => {
        this.hartState(productId, productid ? productid._id : productId, {
          productName,
          image
        } // productSlug
        );
      },
      versions: ['wishlist'],
      parentClass: "border-left-0 c-product-info" //theme="outline"

    }, ProductInfo_jsx(wishlist_heart, null))), ProductInfo_jsx("div", {
      className: "c-product-info__rating-wrapper ",
      style: {
        cursor: 'pointer'
      }
    }, reviewsLength > 0 && ProductInfo_jsx("div", {
      className: "c-product-info__rate",
      onClick: () => router_default.a.push(`/reviews/${product._id}`)
    }, ProductInfo_jsx(external_antd_["Rate"], {
      style: {
        color: '#000'
      },
      className: "c-product-info__stars c-product-info__stars--sm ",
      disabled: true,
      value: avgReviews,
      allowHalf: true
    }), ProductInfo_jsx("p", {
      className: "c-product-info__review"
    }, reviewsLength, " Reviews(", avgReviews, ")")))))); // console.log(this.props.wishList)


    return ProductInfo_jsx("div", {
      className: "c-product-info container"
    }, ProductInfo_jsx(Drawer, {
      onClose: this.props.toggleRegBar,
      title: 'Login',
      visible: this.props.isRegOpen
    }, ProductInfo_jsx(Login, null)), ProductInfo_jsx("div", {
      className: "c-product-info__row"
    }, ProductInfo_jsx("div", {
      className: "c-product-info__image-col"
    }, ProductInfo_jsx("div", {
      className: "c-product-info__img-wrapper"
    }, gallery && gallery.length > 0 && ProductInfo_jsx(ImageZoom, {
      images: gallery
    }), gallery && gallery.length <= 0 && ProductInfo_jsx(external_react_lazy_load_image_component_["LazyLoadImage"], {
      src: image,
      alt: "product",
      className: "img-fluid c-product-info__img"
    }))), ProductInfo_jsx("div", {
      className: ""
    }, ProductInfo_jsx("div", {
      className: "c-product-info__title-wrap"
    }, headingAndReviews()), ProductInfo_jsx("div", {
      className: "c-product-info__description"
    }, ProductInfo_jsx(Heading, {
      subHeading: "true",
      className: "c-product-info__description-heading",
      versions: ['default', 'product'],
      parentClass: "c-product-info"
    }, product && (product.description || product.productid && product.productid.description))), ProductInfo_jsx("div", {
      className: "c-product-info__list"
    }, ProductInfo_jsx("h2", {
      className: "c-sub-heading c-sub-heading--default"
    }, ProductInfo_jsx("b", null, "What is it?")), productAttr.map((el, i) => ProductInfo_jsx("h4", {
      key: i,
      className: "c-product-info__description-heading",
      style: {
        lineHeight: '1.8'
      }
    }, el.description)), ProductInfo_jsx("br", null), !product.combo && ProductInfo_jsx("div", null, ProductInfo_jsx("h2", {
      className: "c-sub-heading c-sub-heading--default",
      onClick: () => {
        this.setState(prevState => ({
          isAllIngredient: !prevState.isAllIngredient
        }));
      },
      style: {
        cursor: 'pointer'
      }
    }, ProductInfo_jsx("b", null, isAllIngredient ? 'All' : 'Key', " Ingredients", ' ', ProductInfo_jsx(external_antd_["Icon"], {
      type: isAllIngredient ? 'minus' : 'plus',
      style: {
        verticalAlign: '0.1em'
      }
    }), ' '), ' '), ProductInfo_jsx(external_reactstrap_["Collapse"], {
      isOpen: !isAllIngredient
    }, ProductInfo_jsx("h4", {
      parentClass: "c-product-info ",
      className: "c-product-info__description-heading",
      style: {
        lineHeight: '1.8',
        marginBottom: '20px'
      }
    }, ' ', product.keyingredients, ' ')), ProductInfo_jsx(external_reactstrap_["Collapse"], {
      isOpen: isAllIngredient
    }, ProductInfo_jsx("h4", {
      parentClass: "c-product-info ",
      className: "c-product-info__description-heading",
      style: {
        lineHeight: '1.8',
        marginBottom: '20px'
      }
    }, ' ', product.allingredients, ' ')))), ProductInfo_jsx("div", {
      className: "c-product-info__atc-wrapper"
    }, ProductInfo_jsx("div", {
      className: "c-product-info__price-and-qty"
    }, ProductInfo_jsx("div", {
      style: {
        paddingRight: '10px'
      },
      className: "c-product-info__price-wrapper"
    }, isSubscribed ? ProductInfo_jsx("p", {
      style: {
        paddingRight: '10px'
      },
      className: "c-product-info__price"
    }, ProductInfo_jsx("strike", {
      style: {
        opacity: 0.7,
        marginLeft: '3px'
      }
    }, "$", Object(misc["d" /* numberFormat */])(price)), ProductInfo_jsx("span", null, " $", Object(misc["d" /* numberFormat */])(disPrice))) : ProductInfo_jsx("p", {
      style: {
        paddingRight: '10px'
      },
      className: "c-product-info__price"
    }, "$", Object(misc["d" /* numberFormat */])(price))), ProductInfo_jsx("div", {
      className: "c-product-info__qty-wrapper",
      style: {
        borderLeft: '1px solid #aaaaaa'
      }
    }, ProductInfo_jsx(Quantity, {
      value: qty,
      onChange: e => this.setState({
        qty: e
      }),
      min: 1,
      parentClass: "c-product-info"
    }))), ProductInfo_jsx("div", {
      className: "c-product-info__subscribe-wrapper d-flex"
    }, ProductInfo_jsx(Checkbox, {
      checked: isSubscribed,
      onChange: () => {
        this.setState(prevState => ({
          isSubscribed: !prevState.isSubscribed
        }));
      },
      versions: ['light'],
      id: product && product._id,
      label: `Subscribe & save ${subsPercent}%`
    }), isSubscribed && ProductInfo_jsx("div", {
      style: {
        padding: '15px 20px',
        fontFamily: 'futuraBT-medium',
        fontWeight: '700'
      }
    }, ProductInfo_jsx(external_antd_["Select"], {
      style: {
        width: '100px'
      },
      onChange: e => this.setState({
        subsDuration: e
      }),
      value: subsDuration
    }, ProductInfo_jsx(Option, {
      value: "3"
    }, "3 Months"), ProductInfo_jsx(Option, {
      value: "6"
    }, "6 Months"), ProductInfo_jsx(Option, {
      value: "12"
    }, "1 Year")), ProductInfo_jsx("br", null)))), ProductInfo_jsx("div", {
      className: "c-product-info__btn-wrapper"
    }, ProductInfo_jsx("div", {
      className: "c-product-info__btn-wrap"
    }, ProductInfo_jsx(Button, {
      onClick: addToCartFn,
      parentClass: "c-product-info" // theme="dark"

    }, "Add to cart"))))), ProductInfo_jsx("center", {
      className: "d-flex justify-content-center floating-btn"
    }, ProductInfo_jsx(Button, {
      onClick: addToCartFn,
      parentClass: "c-product-info" // theme="dark"

    }, "Add to cart")));
  }

}

const mapStateToProps = state => ({
  cart: state.cart,
  wishList: state.wishList,
  user: state.user,
  isRegOpen: state.isRegOpen
});

/* harmony default export */ var components_ProductInfo = __webpack_exports__["default"] = (Object(external_react_redux_["connect"])(mapStateToProps, {
  addToCart: actions_cart["a" /* addToCart */],
  showCartBar: drawers["c" /* showCartBar */],
  setWishList: actions["setWishList"],
  toggleRegBar: drawers["f" /* toggleRegBar */]
})(ProductInfo_ProductInfo));

/***/ }),

/***/ "7b2K":
/***/ (function(module, exports) {

// import {
//   SET_EXPRESS_CHECKOUT,
//   SET_EXPRESS_PAYPAL_CHECKOUT,
//   SET_OD_FOR_PAYPAL,
//   SET_ORDER_FLAG,
//   SET_SP_PRODUCTS,
//   SET_BILL_PLAN,
//   SET_PAYPAL_FAIL,
//   SET_PAYPAL_SUCCESS,
//   CLEAR_PAYPAL_SUCCESS,
//   HEADER_POP_UP_MODAL,
//   SET_GUEST
// } from "./type";
// export const setExpressCheckout = payload => ({
//   type: SET_EXPRESS_CHECKOUT,
//   payload
// });
// export const setExpressPaypalCheckout = payload => ({
//   type: SET_EXPRESS_PAYPAL_CHECKOUT,
//   payload
// });
// export const setPaypalOrderDetails = payload => ({
//   type: SET_OD_FOR_PAYPAL,
//   payload
// });
// export const setOrderFlag = payload => ({
//   type: SET_ORDER_FLAG,
//   payload
// });
// export const setSubscribedProducts = payload => ({
//   type: SET_SP_PRODUCTS,
//   payload
// });
// export const setBillingPlan = payload => ({
//   type: SET_BILL_PLAN,
//   payload
// });
// export const setPaypalFail = () => ({
//   type: SET_PAYPAL_FAIL
// });
// export const setPaypalSuccess = payload => ({
//   type: SET_PAYPAL_SUCCESS,
//   payload
// });
// export const clearPaypalSuccess = payload => ({
//   type: CLEAR_PAYPAL_SUCCESS,
//   payload
// });
// export const headerPopUpModal = payload => ({
//   type: HEADER_POP_UP_MODAL,
//   payload
// });
// export const setGuest = payload => ({
//   type: SET_GUEST,
//   payload
// });

/***/ }),

/***/ "DmIR":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return setReferrer; });
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("TzE8");

const setReferrer = payload => ({
  type: _type__WEBPACK_IMPORTED_MODULE_0__[/* SET_REFERRER */ "U"],
  payload
});

/***/ }),

/***/ "FoYN":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return setWishList; });
/* unused harmony export unsetWishList */
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("TzE8");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const wishListParser = wishList => wishList.map(el => {
  if (el.productDetails) {
    const {
      productDetails
    } = el;

    if (productDetails.combo) {
      const {
        comboid
      } = productDetails; // const productSlug = encodeUrlFn(comboid.title);

      return _objectSpread(_objectSpread({}, el), {}, {
        productDetails: _objectSpread(_objectSpread({}, productDetails), {}, {
          comboid: _objectSpread({}, comboid)
        })
      });
    } else if (productDetails.productid) {
      const {
        productid
      } = productDetails; // const productSlug = encodeUrlFn(productid.producttitle);

      return _objectSpread(_objectSpread({}, el), {}, {
        productDetails: _objectSpread(_objectSpread({}, productDetails), {}, {
          productid: _objectSpread({}, productid)
        })
      });
    } else {
      return el;
    }
  }

  return el;
});

const setWishList = wishList => dispatch => {
  const newWishList = wishListParser(wishList);
  dispatch({
    type: _type__WEBPACK_IMPORTED_MODULE_0__[/* SET_WISHLIST */ "bb"],
    payload: newWishList
  });
};
const unsetWishList = () => ({
  type: _type__WEBPACK_IMPORTED_MODULE_0__[/* UNSET_WISHLIST */ "mb"],
  payload: {}
});

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

/***/ "M688":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export setWishListLogin */
/* unused harmony export unsetWishListLogin */
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("TzE8");

const setWishListLogin = wishListLogin => ({
  type: _type__WEBPACK_IMPORTED_MODULE_0__[/* SET_WISHLIST_LOGIN */ "cb"],
  payload: wishListLogin
});
const unsetWishListLogin = () => ({
  type: _type__WEBPACK_IMPORTED_MODULE_0__[/* UNSET_WISHLIST_LOGIN */ "nb"],
  payload: {}
});

/***/ }),

/***/ "Nh04":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export setErrors */
/* unused harmony export clearErrors */
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("TzE8");

const setErrors = payload => ({
  type: _type__WEBPACK_IMPORTED_MODULE_0__[/* SET_ERRORS */ "G"],
  payload
});
const clearErrors = payload => ({
  type: _type__WEBPACK_IMPORTED_MODULE_0__[/* CLEAR_ERRORS */ "c"],
  payload
});

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

/***/ "UrdJ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addToCart; });
/* unused harmony export fetchCart */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return removeFromCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return modifyItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return clearCart; });
/* unused harmony export clearCartA */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return setShippingCharge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return setShippingType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return setTax; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return setCoupon; });
/* unused harmony export setFav */
/* unused harmony export setCartNullItem */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return setEditable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return removeCoupon; });
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("TzE8");
/* harmony import */ var _services_helpers_cart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("3EDw");


const addToCart = (item, cart = null, userMetaId = null) => dispatch => {
  console.log({
    item
  });
  dispatch({
    type: _type__WEBPACK_IMPORTED_MODULE_0__[/* ADD_ITEM */ "a"],
    payload: item
  }); // console.log("1");

  if (cart) {
    console.log("2", {
      cart
    });
    const newCart = Object(_services_helpers_cart__WEBPACK_IMPORTED_MODULE_1__[/* addItem */ "a"])(cart, item);
    const isNulled = newCart.items.find(el => el.isNull); // console.log({
    //   isNulled
    // });

    if (isNulled && !newCart.hasNulled) {
      dispatch(setCartNullItem());
    } else if (newCart.hasNulled) {
      dispatch(setCartNullItem(false));
    } // if (userMetaId) {
    //   setCartApi({
    //     usermetaid: userMetaId,
    //     cart: newCart
    //   });
    // }

  } else {
    if (item.isNull) {
      dispatch(setCartNullItem());
    }
  }
};
const fetchCart = userId => dispatch => {
  // console.log({ userId });
  getSingleUserApi(userId).then(rep => {
    const res = rep.data;
    console.log({
      res
    });

    if (res.status && res.user && res.user.cart) {
      dispatch({
        type: _type__WEBPACK_IMPORTED_MODULE_0__[/* SET_CART */ "w"],
        payload: res.user.cart
      });
    }
  });
};
const removeFromCart = (id, cart = null, userMetaId = null) => dispatch => {
  dispatch({
    type: _type__WEBPACK_IMPORTED_MODULE_0__[/* REMOVE_ITEM */ "q"],
    payload: id
  });

  if (cart && userMetaId) {
    const newCart = Object(_services_helpers_cart__WEBPACK_IMPORTED_MODULE_1__[/* removeItem */ "g"])(cart, id); // setCartApi({
    //   usermetaid: userMetaId,
    //   cart: newCart
    // });
  }
};
const modifyItem = (oldItem, cart = null, userMetaId = null) => dispatch => {
  dispatch({
    type: _type__WEBPACK_IMPORTED_MODULE_0__[/* MODIFY_ITEM */ "o"],
    payload: oldItem
  });

  if (cart && userMetaId) {
    const newCart = Object(_services_helpers_cart__WEBPACK_IMPORTED_MODULE_1__[/* modifyProduct */ "f"])(oldItem.oldItem, oldItem.newItem, cart); // setCartApi({
    //   usermetaid: userMetaId,
    //   cart: newCart
    // });
  }
};
const clearCart = (userMetaId = null) => dispatch => {
  // console.log("cleared =========== ")
  dispatch({
    type: _type__WEBPACK_IMPORTED_MODULE_0__[/* CLEAR_CART */ "b"]
  });

  if (userMetaId) {// setCartApi({
    //   usermetaid: userMetaId,
    //   cart: initialCart
    // });
  }
};
const clearCartA = () => {
  //console.log("clear AAAAAAAAAA")
  return {
    type: _type__WEBPACK_IMPORTED_MODULE_0__[/* CLEAR_CART */ "b"]
  };
};
const setShippingCharge = (charge, cart = null, userMetaId = null) => dispatch => {
  dispatch({
    type: _type__WEBPACK_IMPORTED_MODULE_0__[/* SET_SHIPPING_CHARGE */ "V"],
    payload: charge
  });

  if (cart && userMetaId) {// setCartApi({
    //   usermetaid: userMetaId,
    //   cart: {
    //     ...cart,
    //     shippingCharge: charge
    //   }
    // });
  }
};
const setShippingType = (type, cart = null, userMetaId = null) => dispatch => {
  dispatch({
    type: _type__WEBPACK_IMPORTED_MODULE_0__[/* SET_SHIPPING_TYPE */ "W"],
    payload: type
  });

  if (cart && userMetaId) {// setCartApi({
    //   usermetaid: userMetaId,
    //   cart: {
    //     ...cart,
    //     shippingType: type
    //   }
    // });
  }
};
const setTax = (tax, cart = null, userMetaId = null) => dispatch => {
  dispatch({
    type: _type__WEBPACK_IMPORTED_MODULE_0__[/* SET_TAX_VALUE */ "Z"],
    payload: tax
  });

  if (cart && userMetaId) {// setCartApi({
    //   usermetaid: userMetaId,
    //   cart: {
    //     ...cart,
    //     taxPercent: tax.taxPercent,
    //     taxCountry: tax.taxCountry
    //   }
    // });
  }
};
const setCoupon = (coupon, cart = null, userMetaId = null) => dispatch => {
  console.log("In action");
  dispatch({
    type: _type__WEBPACK_IMPORTED_MODULE_0__[/* SET_COUPON_CODE_DISCOUNT_VALUE */ "D"],
    payload: coupon
  });

  if (cart && userMetaId) {// setCartApi({
    //   usermetaid: userMetaId,
    //   cart: {
    //     ...cart,
    //     taxCouponCode: coupon.taxCouponCode,
    //     taxCouponDiscount: coupon.taxCouponDiscount
    //   }
    // });
  }
};
const setFav = (fav, cart = null, userMetaId = null) => dispatch => {
  dispatch({
    type: _type__WEBPACK_IMPORTED_MODULE_0__[/* SET_FAV_COUNTITY */ "J"],
    payload: fav
  });

  if (cart && userMetaId) {// setCartApi({
    //   usermetaid: userMetaId,
    //   cart: {
    //     ...cart,
    //     setFav: fav.setFav
    //   }
    // });
  }
};
const setCartNullItem = (isNull = true) => ({
  type: _type__WEBPACK_IMPORTED_MODULE_0__[/* SET_CART_NULL_ITEM */ "y"],
  payload: isNull
});
const setEditable = (isEditable = true) => ({
  type: _type__WEBPACK_IMPORTED_MODULE_0__[/* SET_CART_EDITABLE */ "x"],
  payload: isEditable
});
const removeCoupon = (cart = null, userMetaId = null) => dispatch => {
  console.log("In action");
  dispatch({
    type: _type__WEBPACK_IMPORTED_MODULE_0__[/* REMOVE_COUPON_CODE_DISCOUNT_VALUE */ "p"],
    payload: {}
  });

  if (cart && userMetaId) {// setCartApi({
    //   usermetaid: userMetaId,
    //   cart: {
    //     ...cart,
    //     taxCouponCode: coupon.taxCouponCode,
    //     taxCouponDiscount: coupon.taxCouponDiscount
    //   }
    // });
  }
};

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

/***/ "X4LH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return initialCart; });
const initialCart = {
  items: [],
  subTotal: 0,
  unSubscribeProductAmount: 0,
  shippingCharge: 0,
  shippingType: "standard",
  taxPercent: 0,
  taxCountry: null,
  totalWeight: 0,
  totalVolume: 0,
  taxCouponCode: "",
  taxCouponDiscount: 0,
  setFav: 0,
  hasNulled: false,
  isEditable: true
};

/***/ }),

/***/ "Ynsj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export setCards */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getCards; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addCardAuthorize; });
/* unused harmony export addCard */
/* unused harmony export editCard */
/* unused harmony export deleteCard */
/* unused harmony export setDefaultCard */
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("TzE8");
/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("2MRG");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const setCards = payload => ({
  type: _type__WEBPACK_IMPORTED_MODULE_0__[/* SET_CARDS */ "v"],
  payload
});
const getCards = id => async dispatch => {
  Object(_services_api__WEBPACK_IMPORTED_MODULE_1__[/* getUserDetails */ "r"])(id).then(resRaw => {
    const res = resRaw.data;
    console.log(res);
    const cards = returnCards(res);
    dispatch(setCards(cards));
  }).catch(err => console.log({
    err
  }));
};
const addCardAuthorize = data => dispatch => {
  const {
    user,
    card,
    bank,
    oldCards
  } = data;
  const {
    userMetaId,
    _id,
    userMetaObj
  } = user;
  console.log({
    data,
    dispatch
  });

  const sendCardDetails = (customData, userId) => {
    console.log({
      customData,
      userId
    });
    Object(_services_api__WEBPACK_IMPORTED_MODULE_1__[/* authorizeAddCard */ "b"])(customData).then(response => {
      const res = response.data;
      const {
        status,
        card
      } = res;

      if (status && card && card.paymentProfile && card.messages && card.messages.resultCode === "Ok") {
        //   if (userId) {
        //     updateUserMeta(userId);
        //   }
        const {
          customerProfileId,
          customerPaymentProfileId,
          payment
        } = card.paymentProfile;

        const newCard = _objectSpread({
          customerProfileId,
          customerPaymentProfileId
        }, payment);

        const allCardsPre = oldCards ? [...oldCards, newCard] : [newCard];
        const defaultCard = allCardsPre.find(el => el.isDefault === true);
        const allCards = allCardsPre.map((el, index) => {
          if (index === 0 && !defaultCard) return _objectSpread(_objectSpread({}, el), {}, {
            isDefault: true
          });
          return el;
        });
        Object(_services_api__WEBPACK_IMPORTED_MODULE_1__[/* updateUserDetails */ "x"])({
          userid: _id,
          carddetails: {
            cards: allCards
          }
        }).then(response => {
          console.log({
            response
          });
          const res = response.data;
          const cards = returnCards(res);
          dispatch(setCards(cards)); // getUserMetaNoCart(userId);

          dispatch({
            type: _type__WEBPACK_IMPORTED_MODULE_0__[/* CLEAR_ERRORS */ "c"],
            payload: {}
          });
          Object(_services_api__WEBPACK_IMPORTED_MODULE_1__[/* getUserDetails */ "r"])(userId).then(response => {
            const res = response.data;

            if (res.user && res.user._id) {
              console.log("user meta found", res);
              dispatch({
                type: _type__WEBPACK_IMPORTED_MODULE_0__[/* SET_USER */ "ab"],
                payload: _objectSpread(_objectSpread({}, res.user.userid), {}, {
                  userMetaId: res.user._id,
                  userMetaObj: res.user
                })
              });
            }
          });
        }).catch(err => {
          dispatch({
            type: _type__WEBPACK_IMPORTED_MODULE_0__[/* SET_ERRORS */ "G"],
            payload: {
              cards: ["Some thing wrong"]
            }
          });
          Object(_services_api__WEBPACK_IMPORTED_MODULE_1__[/* getUserDetails */ "r"])(userId).then(response => {
            const res = response.data;

            if (res.user && res.user._id) {
              console.log("user meta found", res);
              dispatch({
                type: _type__WEBPACK_IMPORTED_MODULE_0__[/* SET_USER */ "ab"],
                payload: _objectSpread(_objectSpread({}, res.user.userid), {}, {
                  userMetaId: res.user._id,
                  userMetaObj: res.user
                })
              });
            }
          });
          console.log({
            err
          });
        });
        console.log({
          customerProfileId,
          customerPaymentProfileId,
          payment,
          customData
        });
      } else {
        dispatch({
          type: _type__WEBPACK_IMPORTED_MODULE_0__[/* SET_ERRORS */ "G"],
          payload: {
            cards: ["Some thing wrong"]
          }
        });
      }
    });
  };

  const chooseCardOrBank = (userMetaId, userMetaObj) => {
    const {
      customerProfile
    } = userMetaObj;

    if (customerProfile) {
      if (card) {
        const {
          cardnumber,
          cvc,
          expmonth,
          expyear
        } = card;
        const creditcard = {
          cardNumber: cardnumber.split("-").join(""),
          expirationDate: `20${expyear}-${expmonth}`,
          cardCode: cvc
        };
        sendCardDetails({
          creditcard,
          profileid: customerProfile
        });
      } else if (bank) {
        sendCardDetails({
          bank,
          profileid: customerProfile
        });
      }
    } else {
      if (card) {
        const {
          cardnumber,
          cvc,
          expmonth,
          expyear
        } = card;
        const creditcard = {
          cardNumber: cardnumber.split("-").join(""),
          expirationDate: `20${expyear}-${expmonth}`,
          cardCode: cvc
        };
        const userMetaIdId = userMetaId._id ? userMetaId._id : typeof userMetaId === "string" && userMetaId;
        sendCardDetails({
          creditcard,
          email: userMetaIdId + "@cbdbene.com",
          metaid: userMetaIdId
        }, _id);
      } else if (bank) {
        const userMetaIdId = userMetaId._id ? userMetaId._id : typeof userMetaId === "string" && userMetaId;
        sendCardDetails({
          bank,
          email: userMetaIdId + "@cbdbene.com",
          metaid: userMetaIdId
        }, _id);
      }
    }
  };

  if (userMetaObj && userMetaId) {
    chooseCardOrBank(userMetaId, userMetaObj);
  } else if (_id) {
    Object(_services_api__WEBPACK_IMPORTED_MODULE_1__[/* getUserDetails */ "r"])(_id).then(res => {
      console.log({
        res
      });
      const {
        user
      } = res.data;
      const userMetaId = user._id;
      const userMetaObj = data.user;
      chooseCardOrBank(userMetaId, userMetaObj);
    });
  }
};

const returnCards = res => {
  if (res.user) {
    if (res.user.carddetails) {
      return res.user.carddetails;
    }
  }

  return {};
};

const addCard = (userid, card, oldDetail = {}, oldCards = []) => dispatch => {
  console.log({
    userid,
    card
  });
  const found = oldCards.find(el => el.id === card.id);
  console.log({
    found
  });

  if (found) {
    dispatch(editCard(userid, card, oldDetail, oldCards));
  } else {
    const allCardsPre = oldCards ? [...oldCards, card] : [card];
    const defaultCard = allCardsPre.find(el => el.isDefault === true);
    const allCards = allCardsPre.map((el, index) => {
      if (index === 0 && !defaultCard) return _objectSpread(_objectSpread({}, el), {}, {
        isDefault: true
      });
      return el;
    });
    Object(_services_api__WEBPACK_IMPORTED_MODULE_1__[/* updateUserDetails */ "x"])({
      userid,
      carddetails: _objectSpread(_objectSpread({}, oldDetail), {}, {
        cards: allCards
      })
    }).then(rep => {
      const res = rep.data;
      console.log({
        res
      });
      const cards = returnCards(res);
      dispatch(setCards(cards));
    }).catch(err => {
      console.log({
        err
      });
    });
  }
};
const editCard = (userid, card, oldDetail = {}, oldCards = []) => dispatch => {
  const newCard = oldCards.map(el => {
    if (el.id === card.id) return card;
    return el;
  });
  addUpdateUserDetails({
    userid,
    carddetails: _objectSpread(_objectSpread({}, oldDetail), {}, {
      cards: newCard
    })
  }).then(rep => {
    const res = rep.data;
    console.log({
      res
    });
    const cards = returnCards(res);
    dispatch(setCards(cards));
  }).catch(err => {
    console.log({
      err
    });
  });
};
const deleteCard = (userid, card, oldDetail = {}, oldCards = []) => dispatch => {
  const newCard = oldCards.filter(el => el.customerPaymentProfileId !== card.customerPaymentProfileId);
  Object(_services_api__WEBPACK_IMPORTED_MODULE_1__[/* authorizeDeleteCard */ "f"])({
    paymentid: card.customerPaymentProfileId,
    profileid: card.customerProfileId
  }).then(rep => {
    const res = rep.data;
    console.log({
      res
    });

    if (res && res.data && res.data.messages && res.data.messages.resultCode === "Ok") {
      const defaultCard = newCard.find(el => el.isDefault === true);
      const allCards = newCard.map((el, index) => {
        if (index === 0 && !defaultCard) return _objectSpread(_objectSpread({}, el), {}, {
          isDefault: true
        });
        return el;
      });
      Object(_services_api__WEBPACK_IMPORTED_MODULE_1__[/* updateUserDetails */ "x"])({
        userid,
        carddetails: _objectSpread(_objectSpread({}, oldDetail), {}, {
          cards: allCards
        })
      }).then(rep => {
        const res = rep.data;
        console.log({
          res
        });
        const cards = returnCards(res);
        dispatch(setCards(cards));
      }).catch(err => {
        console.log({
          err
        });
      });
    }
  });
};
const setDefaultCard = (userid, id, oldDetail = {}, oldCards = []) => dispatch => {
  const newCard = oldCards.map(el => {
    return _objectSpread(_objectSpread({}, el), {}, {
      isDefault: el.customerPaymentProfileId === id
    });
  });
  Object(_services_api__WEBPACK_IMPORTED_MODULE_1__[/* updateUserDetails */ "x"])({
    userid,
    carddetails: _objectSpread(_objectSpread({}, oldDetail), {}, {
      cards: newCard
    })
  }).then(rep => {
    const res = rep.data;
    console.log({
      res
    });
    const cards = returnCards(res);
    dispatch(setCards(cards));
  }).catch(err => {
    console.log({
      err
    });
  });
};

/***/ }),

/***/ "ZSSH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ makeStore; });

// UNUSED EXPORTS: setClientState

// EXTERNAL MODULE: external "redux"
var external_redux_ = __webpack_require__("rKB8");

// EXTERNAL MODULE: external "redux-persist"
var external_redux_persist_ = __webpack_require__("VNb8");

// EXTERNAL MODULE: external "redux-persist/lib/storage"
var storage_ = __webpack_require__("T8f9");
var storage_default = /*#__PURE__*/__webpack_require__.n(storage_);

// EXTERNAL MODULE: external "redux-persist/lib/storage/session"
var session_ = __webpack_require__("/mcW");
var session_default = /*#__PURE__*/__webpack_require__.n(session_);

// EXTERNAL MODULE: external "redux-thunk"
var external_redux_thunk_ = __webpack_require__("ZSx1");
var external_redux_thunk_default = /*#__PURE__*/__webpack_require__.n(external_redux_thunk_);

// EXTERNAL MODULE: ./redux/actions/type.js
var actions_type = __webpack_require__("TzE8");

// EXTERNAL MODULE: ./services/helpers/cart.js
var cart = __webpack_require__("3EDw");

// EXTERNAL MODULE: ./constants/reduxInitialStates.js
var reduxInitialStates = __webpack_require__("X4LH");

// CONCATENATED MODULE: ./redux/reducers/cart.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




/* harmony default export */ var reducers_cart = ((state = reduxInitialStates["a" /* initialCart */], action) => {
  const {
    payload,
    type
  } = action;

  switch (type) {
    case actions_type["a" /* ADD_ITEM */]:
      if (payload) {
        return Object(cart["h" /* setSlugInCart */])(Object(cart["a" /* addItem */])(state, payload));
      }

      return state;

    case actions_type["q" /* REMOVE_ITEM */]:
      return Object(cart["h" /* setSlugInCart */])(Object(cart["g" /* removeItem */])(state, payload));

    case actions_type["o" /* MODIFY_ITEM */]:
      if (payload.newItem && payload.oldItem) {
        const {
          newItem,
          oldItem
        } = payload;
        return Object(cart["h" /* setSlugInCart */])(Object(cart["f" /* modifyProduct */])(oldItem, newItem, state));
      }

      return state;
    // break;

    case actions_type["b" /* CLEAR_CART */]:
      return reduxInitialStates["a" /* initialCart */];

    case actions_type["V" /* SET_SHIPPING_CHARGE */]:
      return _objectSpread(_objectSpread({}, state), {}, {
        shippingCharge: payload
      });

    case actions_type["W" /* SET_SHIPPING_TYPE */]:
      return _objectSpread(_objectSpread({}, state), {}, {
        shippingType: payload
      });

    case actions_type["Z" /* SET_TAX_VALUE */]:
      return _objectSpread(_objectSpread({}, state), {}, {
        taxPercent: payload.taxPercent,
        taxCountry: payload.taxCountry
      });

    case actions_type["D" /* SET_COUPON_CODE_DISCOUNT_VALUE */]:
      return _objectSpread(_objectSpread({}, state), {}, {
        taxCouponCode: payload.id,
        taxCouponDiscount: payload.percent_off
      });

    case actions_type["p" /* REMOVE_COUPON_CODE_DISCOUNT_VALUE */]:
      return _objectSpread(_objectSpread({}, state), {}, {
        taxCouponCode: "",
        taxCouponDiscount: 0
      });

    case actions_type["J" /* SET_FAV_COUNTITY */]:
      return _objectSpread(_objectSpread({}, state), {}, {
        setFav: payload.setFav
      });

    case actions_type["y" /* SET_CART_NULL_ITEM */]:
      return _objectSpread(_objectSpread({}, state), {}, {
        hasNulled: payload
      });

    case actions_type["w" /* SET_CART */]:
      return payload;

    case actions_type["x" /* SET_CART_EDITABLE */]:
      return _objectSpread(_objectSpread({}, state), {}, {
        isEditable: payload
      });

    default:
      return state;
  }
});
// CONCATENATED MODULE: ./redux/reducers/user.js

const user_initialState = {};
/* harmony default export */ var user = ((state = user_initialState, action) => {
  const {
    payload,
    type
  } = action;

  switch (type) {
    case actions_type["ab" /* SET_USER */]:
      return payload;

    case actions_type["lb" /* UNSET_USER */]:
      return payload;

    default:
      return state;
  }
});
// CONCATENATED MODULE: ./redux/reducers/location.js
function location_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function location_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { location_ownKeys(Object(source), true).forEach(function (key) { location_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { location_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function location_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const location_initialState = {
  country: null,
  countryCode: null,
  continent: null
};
/* harmony default export */ var reducers_location = ((state = location_initialState, action) => {
  const {
    payload,
    type
  } = action;

  switch (type) {
    case actions_type["B" /* SET_CONTINENT */]:
      return location_objectSpread(location_objectSpread({}, state), {}, {
        continent: payload
      });

    case actions_type["C" /* SET_COUNTRY */]:
      return location_objectSpread(location_objectSpread({}, state), {}, {
        country: payload
      });

    case actions_type["M" /* SET_LOCATION */]:
      return location_objectSpread(location_objectSpread({}, state), payload);

    default:
      return state;
  }
});
// CONCATENATED MODULE: ./redux/reducers/ambassadoruser.js

const ambassadoruser_initialState = {};
/* harmony default export */ var ambassadoruser = ((state = ambassadoruser_initialState, action) => {
  const {
    payload,
    type
  } = action;

  switch (type) {
    case actions_type["u" /* SET_APUSER */]:
      return payload;

    case actions_type["jb" /* UNSET_APUSER */]:
      return payload;

    default:
      return state;
  }
});
// CONCATENATED MODULE: ./redux/reducers/wishList.js

const wishList_initialState = [];
/* harmony default export */ var wishList = ((state = wishList_initialState, action) => {
  const {
    payload,
    type
  } = action;

  switch (type) {
    case actions_type["bb" /* SET_WISHLIST */]:
      return payload;

    case actions_type["mb" /* UNSET_WISHLIST */]:
      return payload;

    default:
      return state;
  }
});
// CONCATENATED MODULE: ./redux/reducers/wishListLogin.js

const wishListLogin_initialState = [];
/* harmony default export */ var wishListLogin = ((state = wishListLogin_initialState, action) => {
  const {
    payload,
    type
  } = action;

  switch (type) {
    case actions_type["cb" /* SET_WISHLIST_LOGIN */]:
      return payload;

    case actions_type["nb" /* UNSET_WISHLIST_LOGIN */]:
      return payload;

    default:
      return state;
  }
});
// EXTERNAL MODULE: ./services/helpers/product.js
var product = __webpack_require__("OWVN");

// CONCATENATED MODULE: ./redux/reducers/products.js
function products_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function products_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { products_ownKeys(Object(source), true).forEach(function (key) { products_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { products_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function products_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const products_initialState = {
  products: [],
  product: null,
  featured: [],
  categories: [],
  category: null,
  subcategories: [],
  recentlyViewed: []
};
/* harmony default export */ var products = ((state = products_initialState, action) => {
  const {
    payload,
    type
  } = action;

  switch (type) {
    case actions_type["S" /* SET_PRODUCTS */]:
      return products_objectSpread(products_objectSpread({}, state), {}, {
        products: payload
      });

    case actions_type["z" /* SET_CATEGORIES */]:
      return products_objectSpread(products_objectSpread({}, state), {}, {
        categories: payload
      });

    case 'SET_SUBCATEGORIES':
      return products_objectSpread(products_objectSpread({}, state), {}, {
        subcategories: payload
      });

    case actions_type["R" /* SET_PRODUCT */]:
      return products_objectSpread(products_objectSpread({}, state), {}, {
        product: payload
      });

    case actions_type["e" /* CLEAR_PRODUCT */]:
      return products_objectSpread(products_objectSpread({}, state), {}, {
        product: null
      });

    case 'SET_CATEGORY':
      console.log('payload', payload);
      return products_objectSpread(products_objectSpread({}, state), {}, {
        category: payload
      });

    case 'CLEAR_CATEGORY':
      return products_objectSpread(products_objectSpread({}, state), {}, {
        category: null
      });

    case 'SET_RECENTLY_VIEWD':
      return products_objectSpread(products_objectSpread({}, state), {}, {
        recentlyViewed: payload
      });

    case 'ADD_TO_RECENTLY_VIEWD':
      let tempRecentlyViewed = state.recentlyViewed;
      if (tempRecentlyViewed.findIndex(x => x._id === payload._id) === -1) tempRecentlyViewed.push(payload);
      return products_objectSpread(products_objectSpread({}, state), {}, {
        recentlyViewed: tempRecentlyViewed
      });

    case 'CLEAR_RECENTLY_VIEWD':
      return products_objectSpread(products_objectSpread({}, state), {}, {
        recentlyViewed: null
      });

    default:
      return state;
  }
});
// CONCATENATED MODULE: ./redux/reducers/checkout.js
function checkout_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function checkout_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { checkout_ownKeys(Object(source), true).forEach(function (key) { checkout_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { checkout_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function checkout_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const checkout_initialState = {
  isExpressCheckout: false,
  expressCheckout: {},
  isExpressPaypalCheckout: false,
  expressPaypalCheckout: {},
  paypalOrderDetails: {},
  isPaypalSuccess: null,
  billingPlan: {},
  orderFlag: null,
  subscribedProducts: [],
  headerPopUpModalData: false,
  isGuest: false
};
/* harmony default export */ var checkout = ((state = checkout_initialState, action) => {
  const {
    payload,
    type
  } = action;

  switch (type) {
    case actions_type["H" /* SET_EXPRESS_CHECKOUT */]:
      return checkout_objectSpread(checkout_objectSpread({}, state), {}, {
        isExpressCheckout: payload
      });

    case actions_type["I" /* SET_EXPRESS_PAYPAL_CHECKOUT */]:
      return checkout_objectSpread(checkout_objectSpread({}, state), {}, {
        isExpressPaypalCheckout: payload
      });

    case actions_type["N" /* SET_OD_FOR_PAYPAL */]:
      return checkout_objectSpread(checkout_objectSpread({}, state), {}, {
        paypalOrderDetails: payload
      });

    case actions_type["O" /* SET_ORDER_FLAG */]:
      return checkout_objectSpread(checkout_objectSpread({}, state), {}, {
        orderFlag: payload
      });

    case actions_type["X" /* SET_SP_PRODUCTS */]:
      return checkout_objectSpread(checkout_objectSpread({}, state), {}, {
        subscribedProducts: payload
      });

    case actions_type["P" /* SET_PAYPAL_SUCCESS */]:
      return checkout_objectSpread(checkout_objectSpread({}, state), {}, {
        isPaypalSuccess: true
      });

    case actions_type["d" /* CLEAR_PAYPAL_SUCCESS */]:
      return checkout_objectSpread(checkout_objectSpread({}, state), {}, {
        isPaypalSuccess: null
      });

    case actions_type["k" /* HEADER_POP_UP_MODAL */]:
      return checkout_objectSpread(checkout_objectSpread({}, state), {}, {
        headerPopUpModalData: payload
      });

    case actions_type["K" /* SET_GUEST */]:
      return checkout_objectSpread(checkout_objectSpread({}, state), {}, {
        isGuest: payload
      });

    default:
      return state;
  }
});
// CONCATENATED MODULE: ./redux/reducers/referrer.js
function referrer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function referrer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { referrer_ownKeys(Object(source), true).forEach(function (key) { referrer_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { referrer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function referrer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const referrer_initialState = {
  referralUrl: null,
  ambassadorId: null,
  ambassadorUrl: null,
  referralUrlId: null
};
/* harmony default export */ var referrer = ((state = referrer_initialState, action) => {
  const {
    type,
    payload
  } = action;

  switch (type) {
    case actions_type["U" /* SET_REFERRER */]:
      return referrer_objectSpread(referrer_objectSpread({}, state), payload);

    default:
      return state;
  }
});
// CONCATENATED MODULE: ./redux/reducers/address.js

const address_initialState = {};
/* harmony default export */ var address = ((state = address_initialState, action) => {
  switch (action.type) {
    case actions_type["t" /* SET_ADDRESS */]:
      return action.payload;

    default:
      return state;
  }
});
// CONCATENATED MODULE: ./redux/reducers/cards.js

const cards_initialState = {};
/* harmony default export */ var cards = ((state = cards_initialState, action) => {
  switch (action.type) {
    case actions_type["v" /* SET_CARDS */]:
      return action.payload;

    default:
      return state;
  }
});
// CONCATENATED MODULE: ./redux/reducers/reviews.js
function reviews_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function reviews_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { reviews_ownKeys(Object(source), true).forEach(function (key) { reviews_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { reviews_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function reviews_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const reviews_initialState = {
  reviews: [],
  isPosted: false
};
/* harmony default export */ var reviews = ((state = reviews_initialState, action) => {
  switch (action.type) {
    case actions_type["i" /* GET_REVIEWS */]:
      return reviews_objectSpread(reviews_objectSpread({}, state), {}, {
        reviews: action.payload
      });

    case actions_type["f" /* CLEAR_REVIEWS */]:
      return reviews_objectSpread(reviews_objectSpread({}, state), {}, {
        reviews: []
      });

    case actions_type["r" /* REVIEW_POSTED */]:
      return reviews_objectSpread(reviews_objectSpread({}, state), {}, {
        isPosted: action.payload
      });

    default:
      return state;
  }
});
// CONCATENATED MODULE: ./redux/reducers/firstSetting.js
function firstSetting_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function firstSetting_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { firstSetting_ownKeys(Object(source), true).forEach(function (key) { firstSetting_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { firstSetting_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function firstSetting_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const firstSetting_initialState = {
  entryMsg: true
};
/* harmony default export */ var firstSetting = ((state = firstSetting_initialState, action) => {
  const {
    type,
    payload
  } = action;

  switch (type) {
    case actions_type["F" /* SET_ENTRY_MSG */]:
      return firstSetting_objectSpread(firstSetting_objectSpread({}, state), {}, {
        entryMsg: payload
      });

    default:
      return state;
  }
});
// CONCATENATED MODULE: ./redux/reducers/drawers.js
function drawers_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function drawers_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { drawers_ownKeys(Object(source), true).forEach(function (key) { drawers_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { drawers_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function drawers_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const drawers_initialState = {
  isCartOpen: false,
  isRegOpen: false,
  hasLogin: false,
  toDisplay: "login"
};
/* harmony default export */ var drawers = ((state = drawers_initialState, action) => {
  const {
    type,
    payload
  } = action;

  switch (type) {
    case actions_type["gb" /* TOGGLE_CART_BAR */]:
      return drawers_objectSpread(drawers_objectSpread({}, state), {}, {
        isCartOpen: !state.isCartOpen
      });

    case actions_type["db" /* SHOW_CART_BAR */]:
      return drawers_objectSpread(drawers_objectSpread({}, state), {}, {
        isCartOpen: true
      });

    case actions_type["l" /* HIDE_CART_BAR */]:
      return drawers_objectSpread(drawers_objectSpread({}, state), {}, {
        isCartOpen: false
      });

    case actions_type["hb" /* TOGGLE_REGISTRATION_BAR */]:
      return drawers_objectSpread(drawers_objectSpread({}, state), {}, {
        isRegOpen: !state.isRegOpen
      });

    case actions_type["eb" /* SHOW_REGISTRATION_BAR */]:
      return drawers_objectSpread(drawers_objectSpread({}, state), {}, {
        isRegOpen: true
      });

    case actions_type["m" /* HIDE_REGISTRATION_BAR */]:
      return drawers_objectSpread(drawers_objectSpread({}, state), {}, {
        isRegOpen: false
      });

    case actions_type["j" /* HAS_LOGIN */]:
      return drawers_objectSpread(drawers_objectSpread({}, state), {}, {
        hasLogin: payload
      });

    case actions_type["ib" /* TO_DISPLAY */]:
      return drawers_objectSpread(drawers_objectSpread({}, state), {}, {
        toDisplay: payload
      });

    default:
      return state;
  }
});
// CONCATENATED MODULE: ./redux/reducers/subMenus.js
function subMenus_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function subMenus_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { subMenus_ownKeys(Object(source), true).forEach(function (key) { subMenus_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { subMenus_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function subMenus_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const subMenus_initialState = {
  isVisible: false,
  contentType: "products",
  products: [],
  links: [],
  activeMenu: "" // isPosUp: window.scrollY > 45 ? false : true

};
/* harmony default export */ var subMenus = ((state = subMenus_initialState, action) => {
  const {
    type,
    payload
  } = action;

  switch (type) {
    case actions_type["fb" /* SHOW_SUB_MENU */]:
      return subMenus_objectSpread(subMenus_objectSpread({}, state), {}, {
        isVisible: payload
      });

    case actions_type["Y" /* SET_SUB_MENU_PRODUCTS */]:
      return subMenus_objectSpread(subMenus_objectSpread({}, state), {}, {
        products: payload,
        contentType: "products"
      });

    case actions_type["s" /* SET_ACTIVE_SUB_MENU */]:
      return subMenus_objectSpread(subMenus_objectSpread({}, state), {}, {
        activeMenu: payload
      });

    case actions_type["L" /* SET_LEARN_SUB_MENU */]:
      return subMenus_objectSpread(subMenus_objectSpread({}, state), {}, {
        links: payload,
        contentType: "links"
      });

    case actions_type["Q" /* SET_POS_UP */]:
      return subMenus_objectSpread(subMenus_objectSpread({}, state), {}, {
        isPosUp: payload
      });

    default:
      return state;
  }
});
// CONCATENATED MODULE: ./redux/reducers/errors.js

const errors_initialState = {};
/* harmony default export */ var errors = ((state = errors_initialState, action) => {
  const {
    payload,
    type
  } = action;

  switch (type) {
    case actions_type["c" /* CLEAR_ERRORS */]:
      return errors_initialState;

    case actions_type["G" /* SET_ERRORS */]:
      return payload;

    default:
      return state;
  }
});
// CONCATENATED MODULE: ./redux/reducers/extras.js
function extras_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function extras_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { extras_ownKeys(Object(source), true).forEach(function (key) { extras_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { extras_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function extras_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const extras_initialState = {
  isCheckoutPage: false,
  isRedirectToCheckout: false
};
/* harmony default export */ var extras = ((state = extras_initialState, action) => {
  const {
    payload,
    type
  } = action;

  switch (type) {
    case actions_type["A" /* SET_CHECKOUT_PAGE */]:
      return extras_objectSpread(extras_objectSpread({}, state), {}, {
        isCheckoutPage: payload
      });

    case actions_type["T" /* SET_REDIRECT_CHECKOUT */]:
      return extras_objectSpread(extras_objectSpread({}, state), {}, {
        isRedirectToCheckout: payload
      });

    default:
      return state;
  }
});
// CONCATENATED MODULE: ./redux/reducers/loading.js
function loading_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function loading_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { loading_ownKeys(Object(source), true).forEach(function (key) { loading_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { loading_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function loading_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const loading_initialState = {
  isLoading: false
};
/* harmony default export */ var loading = ((state = loading_initialState, action) => {
  const {
    payload,
    type
  } = action;

  switch (type) {
    case actions_type["n" /* LOADING */]:
      return loading_objectSpread(loading_objectSpread({}, state), {}, {
        isLoading: payload
      });

    default:
      return state;
  }
});
// CONCATENATED MODULE: ./redux/reducers/appointment.js
function appointment_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function appointment_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { appointment_ownKeys(Object(source), true).forEach(function (key) { appointment_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { appointment_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function appointment_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const appointment_initialState = {
  currentAppointment: null
};
/* harmony default export */ var appointment = ((state = appointment_initialState, action) => {
  switch (action.type) {
    case actions_type["E" /* SET_CURRENT_APPOINTMENT */]:
      return appointment_objectSpread(appointment_objectSpread({}, state), {}, {
        currentAppointment: action.payload
      });

    case actions_type["kb" /* UNSET_CURRENT_APPOINTMENT */]:
      return appointment_objectSpread(appointment_objectSpread({}, state), {}, {
        currentAppointment: null
      });

    default:
      return state;
  }
});
// CONCATENATED MODULE: ./redux/reducers/blog.js
function blog_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function blog_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { blog_ownKeys(Object(source), true).forEach(function (key) { blog_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { blog_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function blog_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initiaState = {
  article: [],
  currentTag: "All",
  current: {},
  pageNo: 0
};

const add = (state, action) => {
  if (state.currentTag !== action.tag) {
    return blog_objectSpread(blog_objectSpread({}, state), {}, {
      article: action.payload,
      pageNo: action.pageNo,
      currentTag: action.tag,
      current: {}
    });
  } else {
    let curValue = state.article;
    let value = curValue.concat(action.payload);
    return blog_objectSpread(blog_objectSpread({}, state), {}, {
      article: value,
      pageNo: action.pageNo
    });
  }
};

const setCurrent = (state, action) => {
  console.log("blog state", state);
  return blog_objectSpread(blog_objectSpread({}, state), {}, {
    current: state.article[action.index]
  });
};

const clearCurrent = (state, action) => {
  console.log("clear reducr");
  return state;
};

const blog_reducer = (state = initiaState, action) => {
  switch (action.type) {
    case actions_type["g" /* GET_ALL */]:
      return add(state, action);

    case actions_type["h" /* GET_ARTICLE */]:
      return setCurrent(state, action);

    case "CLEAR":
      return clearCurrent(state, action);

    default:
      return state;
  }
};

/* harmony default export */ var blog = (blog_reducer);
// CONCATENATED MODULE: ./redux/reducers/auth.js
function auth_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function auth_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { auth_ownKeys(Object(source), true).forEach(function (key) { auth_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { auth_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function auth_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const auth_initialState = {
  user: null,
  token: null
};
/* harmony default export */ var auth = ((state = auth_initialState, action) => {
  const {
    payload,
    type
  } = action;

  switch (type) {
    case 'SET_AUTH':
      return auth_objectSpread(auth_objectSpread({}, state), payload);

    case 'Clear_AUTH':
      return auth_objectSpread(auth_objectSpread({}, state), {}, {
        user: null,
        token: null
      });

    case 'SET_USER':
      return auth_objectSpread(auth_objectSpread({}, state), {}, {
        user: payload
      });

    case 'CLEAR_USER':
      return auth_objectSpread(auth_objectSpread({}, state), {}, {
        user: null
      });

    case 'SET_TOKEN':
      return auth_objectSpread(auth_objectSpread({}, state), {}, {
        token: payload
      });

    case 'CLEAR_TOKEN':
      return auth_objectSpread(auth_objectSpread({}, state), {}, {
        token: null
      });

    default:
      return state;
  }
});
// CONCATENATED MODULE: ./redux/reducers/index.js





















/* harmony default export */ var reducers = ({
  auth: auth,
  blog: blog,
  cart: reducers_cart,
  user: user,
  location: reducers_location,
  ambassadoruser: ambassadoruser,
  wishList: wishList,
  products: products,
  checkout: checkout,
  wishListLogin: wishListLogin,
  referrer: referrer,
  address: address,
  cards: cards,
  reviews: reviews,
  firstSetting: firstSetting,
  drawers: drawers,
  subMenus: subMenus,
  errors: errors,
  extras: extras,
  appointment: appointment,
  loading: loading
});
// EXTERNAL MODULE: external "redux-state-sync"
var external_redux_state_sync_ = __webpack_require__("xJS/");

// CONCATENATED MODULE: ./redux/store.js
function store_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function store_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { store_ownKeys(Object(source), true).forEach(function (key) { store_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { store_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function store_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








const SET_CLIENT_STATE = 'SET_CLIENT_STATE';
const middlewares = [external_redux_thunk_default.a, Object(external_redux_state_sync_["createStateSyncMiddleware"])({
  // blacklist: ["extras", "products"]
  whitelist: ['cart', 'user', 'wishList', 'checkout', 'firstSetting', 'ambassadoruser']
})];
const persistConfig = {
  key: 'root',
  storage: storage_default.a,
  whitelist: ['cart', 'user', 'firstSetting', 'ambassadoruser']
};
const sessionRedConfig = {
  key: 'referrer',
  storage: session_default.a
};

const {
  referrer: store_referrer
} = reducers,
      otherReducer = _objectWithoutProperties(reducers, ["referrer"]);

const allReducers = Object(external_redux_["combineReducers"])(store_objectSpread(store_objectSpread({}, otherReducer), {}, {
  referrer: Object(external_redux_persist_["persistReducer"])(sessionRedConfig, store_referrer)
}));
const persistedReducer = Object(external_redux_persist_["persistReducer"])(persistConfig, allReducers);

const makeConfiguredStore = (reducer, initialState) => Object(external_redux_["createStore"])(reducer, initialState, Object(external_redux_["applyMiddleware"])(...middlewares));

const makeStore = (initialState, {
  isServer,
  req,
  debug,
  storeKey
}) => {
  if (isServer) {
    initialState = initialState || {
      fromServer: 'foo'
    };
    return makeConfiguredStore(allReducers, initialState);
  } else {
    // we need it only on client side
    const store = makeConfiguredStore(persistedReducer, initialState);
    store.__persistor = Object(external_redux_persist_["persistStore"])(store); // Nasty hack

    return store;
  }
};
const setClientState = clientState => ({
  type: SET_CLIENT_STATE,
  payload: clientState
}); // export default (preloadedState = undefined) => {
//   let store = createStore(
//     persistedReducer,
//     // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
//     preloadedState,
//     composeWithDevTools(applyMiddleware(...middlewares))
//   );
//   let persistor = persistStore(store);
//   // return { store, persistor };
//   return store
// };

/***/ }),

/***/ "Zbq5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return setLoading; });
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("TzE8");

const setLoading = payload => ({
  type: _type__WEBPACK_IMPORTED_MODULE_0__[/* LOADING */ "n"],
  payload
});

/***/ }),

/***/ "b7Qq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getProducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getCategories; });
/* unused harmony export getSubCategories */
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("TzE8");
/* harmony import */ var _services_helpers_product__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("OWVN");
/* harmony import */ var _services_apis_products__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("elJ3");
/* harmony import */ var _services_apis_admin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("tWEw");




const getProducts = () => dispatch => {
  Object(_services_apis_products__WEBPACK_IMPORTED_MODULE_2__[/* getAllProducts */ "e"])().then(res => {
    if (res.data && res.data.success) {
      dispatch({
        type: _type__WEBPACK_IMPORTED_MODULE_0__[/* SET_PRODUCTS */ "S"],
        payload: res.data.data
      });
    }
  }).catch(err => {
    console.log({
      err
    });
  });
};
const getProduct = _id => dispatch => {
  Object(_services_apis_products__WEBPACK_IMPORTED_MODULE_2__[/* getProductById */ "g"])(_id).then(res => {
    if (res.data && res.data.success) {
      console.log('hellllo', res.data.data);
      dispatch({
        type: 'SET_PRODUCT',
        payload: res.data.data
      });
    }
  }).catch(err => {
    console.log({
      err
    });
  });
};
const getCategory = _id => dispatch => {
  Object(_services_apis_products__WEBPACK_IMPORTED_MODULE_2__[/* getCategoryById */ "f"])(_id).then(res => {
    if (res.data && res.data.success) {
      console.log('SET_CATEGORY', res.data.data);
      dispatch({
        type: 'SET_CATEGORY',
        payload: res.data.data
      });
    }
  }).catch(err => {
    console.log({
      err
    });
  });
};
const getCategories = () => dispatch => {
  Object(_services_apis_products__WEBPACK_IMPORTED_MODULE_2__[/* getAllCategories */ "c"])().then(res => {
    if (res.data && res.data.success) {
      dispatch({
        type: _type__WEBPACK_IMPORTED_MODULE_0__[/* SET_CATEGORIES */ "z"],
        payload: res.data.data
      });
    }
  }).catch(err => {
    console.log({
      err
    });
  });
};
const getSubCategories = () => dispatch => {
  Object(_services_apis_admin__WEBPACK_IMPORTED_MODULE_3__[/* getAllSubcategories */ "i"])().then(res => {
    if (res.data && res.data.success) {
      dispatch({
        type: 'SET_SUBCATEGORIES',
        payload: res.data.data
      });
    }
  }).catch(err => {
    console.log({
      err
    });
  });
};

/***/ }),

/***/ "dohY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export setCurrentAppointment */
/* unused harmony export unsetCurrentAppointment */
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("TzE8");

const setCurrentAppointment = appointment => ({
  type: _type__WEBPACK_IMPORTED_MODULE_0__[/* SET_CURRENT_APPOINTMENT */ "E"],
  payload: appointment
});
const unsetCurrentAppointment = () => ({
  type: _type__WEBPACK_IMPORTED_MODULE_0__[/* UNSET_CURRENT_APPOINTMENT */ "kb"]
});

/***/ }),

/***/ "dqA4":
/***/ (function(module, exports) {

// import { GET_REVIEWS, CLEAR_REVIEWS, REVIEW_POSTED } from "./type";
// import {
//   postReviewApi,
//   getProductReviews
//   // getAllProductApi, getAllComboApi
// } from "../services/api";
// // import { setProducts } from "./products";
// export const postReview = (review, countryCode) => dispatch => {
//   postReviewApi(review)
//     .then(res => res.json())
//     .then(res => {
//       if (res.status) {
//         dispatch({
//           type: REVIEW_POSTED,
//           payload: true
//         });
//         // getAllProductApi().then(res => res.json())
//         //   .then(resJson => {
//         //     if (resJson.products) {
//         //       setProducts({
//         //         products: resJson.products,
//         //         countryCode
//         //       });
//         //       getAllComboApi().then(res => res.json())
//         //         .then(resJson1 => {
//         //           if (resJson1.combos) {
//         //             const products = [...resJson.products, ...resJson1.combos];
//         //             setProducts({
//         //               products,
//         //               countryCode
//         //             });
//         //           }
//         //         })
//         //     }else{
//         //       getAllComboApi().then(res => res.json())
//         //         .then(resJson => {
//         //           if (resJson.combos) {
//         //             const products = [...resJson.combos];
//         //             setProducts({
//         //               products,
//         //               countryCode
//         //             });
//         //           }
//         //         })
//         //     }
//         //   })
//         //   .catch(err => {
//         //     getAllComboApi().then(res => res.json())
//         //       .then(resJson => {
//         //         if (resJson.combos) {
//         //           const products = [...resJson.combos];
//         //           setProducts({
//         //             products,
//         //             countryCode
//         //           });
//         //         }
//         //       })
//         //     console.log({
//         //       err
//         //     })
//         //   })
//       }
//     });
// };
// export const clearReviewPosted = () => ({
//   type: REVIEW_POSTED,
//   payload: false
// });
// export const getReviews = productId => dispatch => {
//   // console.log("adf");
//   getProductReviews(productId)
//     .then(res => res.json())
//     .then(res => {
//       console.log({
//         res
//       });
//       if (res.status && res.reviews) {
//         dispatch({
//           type: GET_REVIEWS,
//           payload: res.reviews
//         });
//       }
//     })
//     .catch(err => console.log({ err }));
// };
// export const clearReviews = () => ({
//   type: CLEAR_REVIEWS,
//   payload: []
// });

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

/***/ "rCd7":
/***/ (function(module, exports) {

// import {
//   SHOW_SUB_MENU,
//   SET_SUB_MENU_PRODUCTS,
//   SET_ACTIVE_SUB_MENU,
//   SET_POS_UP,
//   SET_LEARN_SUB_MENU
// } from "./type";
// export const subMenuVisible = (payload = true) => ({
//   type: SHOW_SUB_MENU,
//   payload
// });
// export const setSubMenuProducts = (payload = []) => ({
//   type: SET_SUB_MENU_PRODUCTS,
//   payload
// });
// export const setActiveMenu = (activeMenuName = "") => ({
//   type: SET_ACTIVE_SUB_MENU,
//   payload: activeMenuName
// });
// export const setPosUp = (payload = true) => ({
//   type: SET_POS_UP,
//   payload
// });
// export const setLearnSubMenu = (payload = []) => ({
//   type: SET_LEARN_SUB_MENU,
//   payload
// });

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

/***/ "tWEw":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "g", function() { return /* binding */ getAllCategories; });
__webpack_require__.d(__webpack_exports__, "h", function() { return /* binding */ getAllProducts; });
__webpack_require__.d(__webpack_exports__, "i", function() { return /* binding */ getAllSubcategories; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ createCategory; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ createProduct; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* binding */ createSubcategory; });
__webpack_require__.d(__webpack_exports__, "d", function() { return /* binding */ deleteCategory; });
__webpack_require__.d(__webpack_exports__, "e", function() { return /* binding */ deleteProduct; });
__webpack_require__.d(__webpack_exports__, "f", function() { return /* binding */ deleteSubcategory; });

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__("zr5I");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: ./services/apis/apiList.js
var apiList = __webpack_require__("Wol/");

// EXTERNAL MODULE: ./redux/store.js + 22 modules
var store = __webpack_require__("ZSSH");

// EXTERNAL MODULE: ./constants/projectSettings.js
var projectSettings = __webpack_require__("xSWb");

// CONCATENATED MODULE: ./utilis/useHttp.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const useHttp = async ({
  method = 'get',
  url,
  data,
  options
}) => {
  try {
    const auth = JSON.parse(localStorage.getItem('auth'));
    const {
      user,
      token
    } = auth;
    let headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    };

    if (user) {
      headers = _objectSpread(_objectSpread({}, headers), {}, {
        Authorization: `Bearer ${token}`
      });
    }

    if (options && options.headers) {
      headers = _objectSpread(_objectSpread({}, headers), options.headers);
    }

    const res = await external_axios_default()({
      method,
      url,
      baseURL: projectSettings["a" /* baseUrl */],
      data,
      headers: headers
    }).then(response => {
      return response;
    }).catch(err => {
      console.log(err);
      return err;
    });
    return res;
  } catch (err) {
    console.log(err);
    return err;
  }
};
// CONCATENATED MODULE: ./services/apis/admin.js


 // const auth = JSON.parse(localStorage.getItem('auth'));
// const { user } = auth;
// const { _id } = user;

const _id = '601bef27d29ac85814619ba3';
const getAllCategories = () => useHttp({
  method: 'get',
  url: `/category/all`
});
const getAllProducts = () => useHttp({
  method: 'get',
  url: `/product/all`
});
const getAllSubcategories = () => useHttp({
  method: 'get',
  url: `/subcategory/all`
}); //create

const createCategory = data => useHttp({
  method: 'post',
  url: `/category/create/${_id}`,
  data
});
const createProduct = data => useHttp({
  method: 'post',
  url: `/product/create/${_id}`,
  data,
  options: {
    headers: {
      'Content-Type': 'multipart/form-data; boundary=something'
    }
  }
});
const createSubcategory = data => useHttp({
  method: 'post',
  url: `/subcategory/create/${_id}`,
  data
});
const deleteCategory = pid => useHttp({
  method: 'DELETE',
  url: `/category/${pid}/${_id}`
});
const deleteProduct = pid => useHttp({
  method: 'delete',
  url: `/product/${pid}/${_id}`
});
const deleteSubcategory = pid => useHttp({
  method: 'delete',
  url: `/subcategory/${pid}/${_id}`
});

/***/ }),

/***/ "utmA":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return homeData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return shopData; });
/* unused harmony export categoryData */
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants_projectSettings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("xSWb");


const homeData = () => {
  //console.log("called");
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${_constants_projectSettings__WEBPACK_IMPORTED_MODULE_1__[/* contentUrl */ "c"]}/Home/get`).then(response => {
    // console.log(response);
    //console.log("i got this", response);
    return response.data.data;
  }).catch(err => {
    console.log("this is err", err);
  });
};
const shopData = () => {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${_constants_projectSettings__WEBPACK_IMPORTED_MODULE_1__[/* contentUrl */ "c"]}/Shop/get`).then(response => {
    // console.log("i got this", response);
    return response.data.data;
  }).catch(err => {
    console.log("this is err", err);
  });
};
const categoryData = () => {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${_constants_projectSettings__WEBPACK_IMPORTED_MODULE_1__[/* contentUrl */ "c"]}/Category/get`).then(response => {
    // console.log("i got this", response);
    return response.data.data;
  }).catch(err => {
    console.log("this is err", err);
  });
};

/***/ }),

/***/ "we8J":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export setAddress */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getAddress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addAddress; });
/* unused harmony export deleteAddress */
/* unused harmony export setDefaultAddress */
/* unused harmony export editAddress */
/* harmony import */ var _services_apis_user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("s9Gp");
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("TzE8");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const setAddress = payload => ({
  type: _type__WEBPACK_IMPORTED_MODULE_1__[/* SET_ADDRESS */ "t"],
  payload
});
const getAddress = id => async dispatch => {
  Object(_services_apis_user__WEBPACK_IMPORTED_MODULE_0__[/* getUserDetails */ "d"])(id).then(res => {
    console.log(res);

    if (res.data.user) {
      if (res.data.user.shippingdetails) {
        dispatch(setAddress(res.data.user.shippingdetails));
      } else {
        dispatch(setAddress({}));
      }
    } else {
      dispatch(setAddress({}));
    }
  }).catch(console.log);
};

const returnAddress = res => {
  if (res.user) {
    if (res.user.shippingdetails) {
      return res.user.shippingdetails;
    }
  }

  return {};
};

const addAddress = (userid, address, oldDetail = {}, oldAddress = []) => dispatch => {
  if (address.constructor === Array) {
    const addressArr = address.filter(el => el);
    const addresses1 = [...oldAddress, ...addressArr].map(elx => elx);
    const hasDefault = addresses1.find(el => el.isDefault === true);
    const addresses2 = addresses1.map((el, index) => {
      if (index === 0 && !hasDefault) {
        return _objectSpread(_objectSpread({}, el), {}, {
          isDefault: true
        });
      }

      return el;
    });
    Object(_services_apis_user__WEBPACK_IMPORTED_MODULE_0__[/* updateUserDetails */ "g"])({
      userid,
      shippingdetails: _objectSpread(_objectSpread({}, oldDetail), {}, {
        address: addresses2
      })
    }).then(res => {
      console.log({
        res
      });
      const address = returnAddress(res.data);
      dispatch(setAddress(address));
    }).catch(err => {
      console.log({
        err
      });
    });
  } else {
    const addresses1 = [...oldAddress, address].map(elx => {
      return elx;
    });
    const hasDefault = addresses1.find(el => el.isDefault === true);
    const addresses2 = addresses1.map((el, index) => {
      if (index === 0 && !hasDefault) {
        return _objectSpread(_objectSpread({}, el), {}, {
          isDefault: true
        });
      }

      return el;
    });
    Object(_services_apis_user__WEBPACK_IMPORTED_MODULE_0__[/* updateUserDetails */ "g"])({
      userid,
      shippingdetails: _objectSpread(_objectSpread({}, oldDetail), {}, {
        address: addresses2
      })
    }).then(res => {
      console.log({
        res
      });
      const address = returnAddress(res.data);
      dispatch(setAddress(address));
    }).catch(err => {
      console.log({
        err
      });
    });
  }
};
const deleteAddress = (userid, id, oldDetail = {}, oldAddress = []) => dispatch => {
  const newAddress1 = oldAddress.filter(el => el.id !== id);
  const defaultAddress = newAddress1.find(el => el.isDefault === true);
  const newAddress = newAddress1.map((el, index) => {
    if (index === 0 && !defaultAddress) {
      return _objectSpread(_objectSpread({}, el), {}, {
        isDefault: true
      });
    }

    return el;
  });
  Object(_services_apis_user__WEBPACK_IMPORTED_MODULE_0__[/* updateUserDetails */ "g"])({
    userid,
    shippingdetails: _objectSpread(_objectSpread({}, oldDetail), {}, {
      address: newAddress
    })
  }).then(res => {
    console.log({
      res
    });
    const address = returnAddress(res.data);
    dispatch(setAddress(address));
  }).catch(err => {
    console.log({
      err
    });
  });
};
const setDefaultAddress = (userid, id, oldDetail = {}, oldAddress = []) => dispatch => {
  const newAddress = oldAddress.map(el => {
    return _objectSpread(_objectSpread({}, el), {}, {
      isDefault: el.id === id
    });
  });
  Object(_services_apis_user__WEBPACK_IMPORTED_MODULE_0__[/* updateUserDetails */ "g"])({
    userid,
    shippingdetails: _objectSpread(_objectSpread({}, oldDetail), {}, {
      address: newAddress
    })
  }).then(res => {
    console.log({
      res
    });
    const address = returnAddress(res.data);
    dispatch(setAddress(address));
  }).catch(err => {
    console.log({
      err
    });
  });
};
const editAddress = (userid, address, oldDetail = {}, oldAddress = []) => dispatch => {
  const newAddress = oldAddress.map(el => {
    if (el.id === address.id) return address;
    return el;
  });
  Object(_services_apis_user__WEBPACK_IMPORTED_MODULE_0__[/* updateUserDetails */ "g"])({
    userid,
    shippingdetails: _objectSpread(_objectSpread({}, oldDetail), {}, {
      address: newAddress
    })
  }).then(res => {
    console.log({
      res
    });
    const address = returnAddress(res.data);
    dispatch(setAddress(address));
  }).catch(err => {
    console.log({
      err
    });
  });
};

/***/ }),

/***/ "x91w":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _cart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("UrdJ");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addToCart", function() { return _cart__WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "modifyItem", function() { return _cart__WEBPACK_IMPORTED_MODULE_0__["c"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeCoupon", function() { return _cart__WEBPACK_IMPORTED_MODULE_0__["d"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeFromCart", function() { return _cart__WEBPACK_IMPORTED_MODULE_0__["e"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCoupon", function() { return _cart__WEBPACK_IMPORTED_MODULE_0__["f"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setEditable", function() { return _cart__WEBPACK_IMPORTED_MODULE_0__["g"]; });

/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("j6IE");
/* harmony import */ var _location__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("2Cd/");
/* harmony import */ var _location__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_location__WEBPACK_IMPORTED_MODULE_2__);
/* harmony reexport (checked) */ if(__webpack_require__.o(_location__WEBPACK_IMPORTED_MODULE_2__, "addAddress")) __webpack_require__.d(__webpack_exports__, "addAddress", function() { return _location__WEBPACK_IMPORTED_MODULE_2__["addAddress"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_location__WEBPACK_IMPORTED_MODULE_2__, "getCategories")) __webpack_require__.d(__webpack_exports__, "getCategories", function() { return _location__WEBPACK_IMPORTED_MODULE_2__["getCategories"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_location__WEBPACK_IMPORTED_MODULE_2__, "getCategory")) __webpack_require__.d(__webpack_exports__, "getCategory", function() { return _location__WEBPACK_IMPORTED_MODULE_2__["getCategory"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_location__WEBPACK_IMPORTED_MODULE_2__, "getProduct")) __webpack_require__.d(__webpack_exports__, "getProduct", function() { return _location__WEBPACK_IMPORTED_MODULE_2__["getProduct"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_location__WEBPACK_IMPORTED_MODULE_2__, "getProducts")) __webpack_require__.d(__webpack_exports__, "getProducts", function() { return _location__WEBPACK_IMPORTED_MODULE_2__["getProducts"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_location__WEBPACK_IMPORTED_MODULE_2__, "hideCartBar")) __webpack_require__.d(__webpack_exports__, "hideCartBar", function() { return _location__WEBPACK_IMPORTED_MODULE_2__["hideCartBar"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_location__WEBPACK_IMPORTED_MODULE_2__, "homeData")) __webpack_require__.d(__webpack_exports__, "homeData", function() { return _location__WEBPACK_IMPORTED_MODULE_2__["homeData"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_location__WEBPACK_IMPORTED_MODULE_2__, "setEntryMsg")) __webpack_require__.d(__webpack_exports__, "setEntryMsg", function() { return _location__WEBPACK_IMPORTED_MODULE_2__["setEntryMsg"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_location__WEBPACK_IMPORTED_MODULE_2__, "setLoading")) __webpack_require__.d(__webpack_exports__, "setLoading", function() { return _location__WEBPACK_IMPORTED_MODULE_2__["setLoading"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_location__WEBPACK_IMPORTED_MODULE_2__, "setReferrer")) __webpack_require__.d(__webpack_exports__, "setReferrer", function() { return _location__WEBPACK_IMPORTED_MODULE_2__["setReferrer"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_location__WEBPACK_IMPORTED_MODULE_2__, "setWishList")) __webpack_require__.d(__webpack_exports__, "setWishList", function() { return _location__WEBPACK_IMPORTED_MODULE_2__["setWishList"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_location__WEBPACK_IMPORTED_MODULE_2__, "shopData")) __webpack_require__.d(__webpack_exports__, "shopData", function() { return _location__WEBPACK_IMPORTED_MODULE_2__["shopData"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_location__WEBPACK_IMPORTED_MODULE_2__, "toggleCartBar")) __webpack_require__.d(__webpack_exports__, "toggleCartBar", function() { return _location__WEBPACK_IMPORTED_MODULE_2__["toggleCartBar"]; });

/* harmony import */ var _ambassadoruser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("1HKE");
/* harmony import */ var _wishList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("FoYN");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setWishList", function() { return _wishList__WEBPACK_IMPORTED_MODULE_4__["a"]; });

/* harmony import */ var _wishListLogin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("M688");
/* harmony import */ var _products__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("b7Qq");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getCategories", function() { return _products__WEBPACK_IMPORTED_MODULE_6__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getCategory", function() { return _products__WEBPACK_IMPORTED_MODULE_6__["b"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getProduct", function() { return _products__WEBPACK_IMPORTED_MODULE_6__["c"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getProducts", function() { return _products__WEBPACK_IMPORTED_MODULE_6__["d"]; });

/* harmony import */ var _checkout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("7b2K");
/* harmony import */ var _checkout__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_checkout__WEBPACK_IMPORTED_MODULE_7__);
/* harmony reexport (checked) */ if(__webpack_require__.o(_checkout__WEBPACK_IMPORTED_MODULE_7__, "addAddress")) __webpack_require__.d(__webpack_exports__, "addAddress", function() { return _checkout__WEBPACK_IMPORTED_MODULE_7__["addAddress"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_checkout__WEBPACK_IMPORTED_MODULE_7__, "hideCartBar")) __webpack_require__.d(__webpack_exports__, "hideCartBar", function() { return _checkout__WEBPACK_IMPORTED_MODULE_7__["hideCartBar"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_checkout__WEBPACK_IMPORTED_MODULE_7__, "homeData")) __webpack_require__.d(__webpack_exports__, "homeData", function() { return _checkout__WEBPACK_IMPORTED_MODULE_7__["homeData"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_checkout__WEBPACK_IMPORTED_MODULE_7__, "setEntryMsg")) __webpack_require__.d(__webpack_exports__, "setEntryMsg", function() { return _checkout__WEBPACK_IMPORTED_MODULE_7__["setEntryMsg"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_checkout__WEBPACK_IMPORTED_MODULE_7__, "setLoading")) __webpack_require__.d(__webpack_exports__, "setLoading", function() { return _checkout__WEBPACK_IMPORTED_MODULE_7__["setLoading"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_checkout__WEBPACK_IMPORTED_MODULE_7__, "setReferrer")) __webpack_require__.d(__webpack_exports__, "setReferrer", function() { return _checkout__WEBPACK_IMPORTED_MODULE_7__["setReferrer"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_checkout__WEBPACK_IMPORTED_MODULE_7__, "shopData")) __webpack_require__.d(__webpack_exports__, "shopData", function() { return _checkout__WEBPACK_IMPORTED_MODULE_7__["shopData"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_checkout__WEBPACK_IMPORTED_MODULE_7__, "toggleCartBar")) __webpack_require__.d(__webpack_exports__, "toggleCartBar", function() { return _checkout__WEBPACK_IMPORTED_MODULE_7__["toggleCartBar"]; });

/* harmony import */ var _referrer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("DmIR");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setReferrer", function() { return _referrer__WEBPACK_IMPORTED_MODULE_8__["a"]; });

/* harmony import */ var _address__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("we8J");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addAddress", function() { return _address__WEBPACK_IMPORTED_MODULE_9__["a"]; });

/* harmony import */ var _cards__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("Ynsj");
/* harmony import */ var _reviews__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("dqA4");
/* harmony import */ var _reviews__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_reviews__WEBPACK_IMPORTED_MODULE_11__);
/* harmony reexport (checked) */ if(__webpack_require__.o(_reviews__WEBPACK_IMPORTED_MODULE_11__, "hideCartBar")) __webpack_require__.d(__webpack_exports__, "hideCartBar", function() { return _reviews__WEBPACK_IMPORTED_MODULE_11__["hideCartBar"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_reviews__WEBPACK_IMPORTED_MODULE_11__, "homeData")) __webpack_require__.d(__webpack_exports__, "homeData", function() { return _reviews__WEBPACK_IMPORTED_MODULE_11__["homeData"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_reviews__WEBPACK_IMPORTED_MODULE_11__, "setEntryMsg")) __webpack_require__.d(__webpack_exports__, "setEntryMsg", function() { return _reviews__WEBPACK_IMPORTED_MODULE_11__["setEntryMsg"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_reviews__WEBPACK_IMPORTED_MODULE_11__, "setLoading")) __webpack_require__.d(__webpack_exports__, "setLoading", function() { return _reviews__WEBPACK_IMPORTED_MODULE_11__["setLoading"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_reviews__WEBPACK_IMPORTED_MODULE_11__, "shopData")) __webpack_require__.d(__webpack_exports__, "shopData", function() { return _reviews__WEBPACK_IMPORTED_MODULE_11__["shopData"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_reviews__WEBPACK_IMPORTED_MODULE_11__, "toggleCartBar")) __webpack_require__.d(__webpack_exports__, "toggleCartBar", function() { return _reviews__WEBPACK_IMPORTED_MODULE_11__["toggleCartBar"]; });

/* harmony import */ var _firstSetting__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("1HP9");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setEntryMsg", function() { return _firstSetting__WEBPACK_IMPORTED_MODULE_12__["a"]; });

/* harmony import */ var _drawers__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("JLUA");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hideCartBar", function() { return _drawers__WEBPACK_IMPORTED_MODULE_13__["b"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toggleCartBar", function() { return _drawers__WEBPACK_IMPORTED_MODULE_13__["e"]; });

/* harmony import */ var _subMenus__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("rCd7");
/* harmony import */ var _subMenus__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_subMenus__WEBPACK_IMPORTED_MODULE_14__);
/* harmony reexport (checked) */ if(__webpack_require__.o(_subMenus__WEBPACK_IMPORTED_MODULE_14__, "homeData")) __webpack_require__.d(__webpack_exports__, "homeData", function() { return _subMenus__WEBPACK_IMPORTED_MODULE_14__["homeData"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_subMenus__WEBPACK_IMPORTED_MODULE_14__, "setLoading")) __webpack_require__.d(__webpack_exports__, "setLoading", function() { return _subMenus__WEBPACK_IMPORTED_MODULE_14__["setLoading"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_subMenus__WEBPACK_IMPORTED_MODULE_14__, "shopData")) __webpack_require__.d(__webpack_exports__, "shopData", function() { return _subMenus__WEBPACK_IMPORTED_MODULE_14__["shopData"]; });

/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("Nh04");
/* harmony import */ var _extras__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("0Aw8");
/* harmony import */ var _extras__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_extras__WEBPACK_IMPORTED_MODULE_16__);
/* harmony reexport (checked) */ if(__webpack_require__.o(_extras__WEBPACK_IMPORTED_MODULE_16__, "homeData")) __webpack_require__.d(__webpack_exports__, "homeData", function() { return _extras__WEBPACK_IMPORTED_MODULE_16__["homeData"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_extras__WEBPACK_IMPORTED_MODULE_16__, "setLoading")) __webpack_require__.d(__webpack_exports__, "setLoading", function() { return _extras__WEBPACK_IMPORTED_MODULE_16__["setLoading"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_extras__WEBPACK_IMPORTED_MODULE_16__, "shopData")) __webpack_require__.d(__webpack_exports__, "shopData", function() { return _extras__WEBPACK_IMPORTED_MODULE_16__["shopData"]; });

/* harmony import */ var _loading__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("Zbq5");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setLoading", function() { return _loading__WEBPACK_IMPORTED_MODULE_17__["a"]; });

/* harmony import */ var _appointment__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("dohY");
/* harmony import */ var _content__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("utmA");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "homeData", function() { return _content__WEBPACK_IMPORTED_MODULE_19__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "shopData", function() { return _content__WEBPACK_IMPORTED_MODULE_19__["b"]; });






















/***/ })

};;