exports.ids = [75];
exports.modules = {

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

/***/ })

};;