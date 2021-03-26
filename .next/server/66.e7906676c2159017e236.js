exports.ids = [66];
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

/***/ "TcCU":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export encodeUrlFn */
/* unused harmony export filteredAttr */
/* unused harmony export removeDuplicateObjAr */
/* unused harmony export findByMatchingProperties */
/* unused harmony export findByMatchingProperties2 */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getBasicPrice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return directAddToCart; });
/* unused harmony export getAttrListing */
/* unused harmony export getSizes */
/* unused harmony export getImagePath */
/* unused harmony export getFeaturedProduct */
/* unused harmony export getVisibleProducts */
/* unused harmony export applyVariationFilter */
/* unused harmony export getCategoraiesProducts */
/* unused harmony export getVisibleCategory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getProductsByCategory; });
/* unused harmony export getMatchCategory */
/* unused harmony export generateProductSlug */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addSlugToProduct; });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("xE+L");
/* harmony import */ var _cartHealpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("uY9e");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }


 // import { encodeUrlFn } from "../../components";

const encodeUrlFn = url => url.replace(/-/g, "_").replace(/ /g, "-");
const filteredAttr = (variation, attr) => {
  const attrX = variation.map(el => {
    const {
      sale_price,
      sku,
      bar,
      regular_price
    } = el,
          rest = _objectWithoutProperties(el, ["sale_price", "sku", "bar", "regular_price"]);

    return _objectSpread({}, rest);
  });
  const attrY = attrX.filter(el => Object.keys(el).length === attr.length);
  const attrZ = removeDuplicateObjAr(attrY);
  return attrZ;
};
const removeDuplicateObjAr = arr => arr.reduce((r, i) => !r.some(j => Object.keys(i).length === Object.keys(j).length && !Object.keys(i).some(k => i[k] !== j[k])) ? [...r, i] : r, []);
const findByMatchingProperties = (set, properties) => set.filter(function (entry) {
  return Object.keys(properties).every(function (key) {
    return entry[properties[key].names] === properties[key].values;
  });
});
const findByMatchingProperties2 = (set, properties) => set.filter(function (entry) {
  return Object.keys(properties).every(function (key) {
    return entry[key] === properties[key];
  });
});
const getBasicPrice = product => {
  const {
    verifiedAttr,
    variation,
    combo,
    producttype
  } = product;

  if (combo || producttype !== "variable") {
    return {
      regular_price: product.dregularprice,
      sale_price: product.dsaleprice
    };
  }

  if (verifiedAttr) {
    if (verifiedAttr.constructor === Array) {
      if (verifiedAttr.length > 0) {
        const findItem = variation.find(el => {
          const keyList = Object.keys(verifiedAttr[0]);
          const flag = keyList.every(elx => el[elx]);
          return flag;
        });

        if (findItem) {
          const {
            regular_price,
            sale_price
          } = findItem;
          return {
            regular_price,
            sale_price
          };
        }
      }
    }
  }
};
const directAddToCart = product => {
  const {
    verifiedAttr
  } = product;
  const arr = verifiedAttr && verifiedAttr.constructor === Array ? verifiedAttr.map(el => {
    const keys = Object.keys(el);
    return keys.map(elx => {
      return {
        [elx]: {
          label: el[elx],
          value: el[elx]
        }
      };
    });
  }) : []; // const nulledArr =
  //   verifiedAttr && verifiedAttr.constructor === Array
  //     ? verifiedAttr.map(el => {
  //         const keys = Object.keys(el);
  //         return keys.map(elx => {
  //           return {
  //             [elx]: {
  //               label: null,
  //               value: null
  //             }
  //           };
  //         });
  //       })
  //     : [];

  const obj = arr.map(el => {
    return el.reduce((a, b) => {
      return _objectSpread(_objectSpread({}, a), b);
    }, {});
  }); // const nulledObj = nulledArr.map(el => {
  //   return el.reduce((a, b) => {
  //     return { ...a, ...b };
  //   }, {});
  // });

  const newVariation = obj && obj.length ? _objectSpread({}, obj[0]) : {}; // const nulledVariation =
  //   nulledObj && nulledObj.length
  //     ? {
  //         ...nulledObj[0]
  //       }
  //     : {};
  // console.log({
  //   newVariation,
  //   product: {
  //     ...product,
  //     ...newVariation,
  //   }
  // })
  // return {
  //   ...product,
  //   ...nulledVariation,
  //   isNull: true,
  //   qty: {
  //     label: "1",
  //     value: "1",
  //   }
  // }

  return Object(_cartHealpers__WEBPACK_IMPORTED_MODULE_1__[/* variablePriceSet */ "a"])(_objectSpread(_objectSpread(_objectSpread({}, product), newVariation), {}, {
    qty: 1
  }));
};
const getAttrListing = (attr = []) => attr.length > 0 ? Object.keys(attr[0]).map(el => ({
  names: el,
  values: [...new Set(attr.map(elx => elx[el]))]
})) : [];
const getSizes = product => {
  const {
    combo,
    attributes
  } = product;

  if (combo !== true) {
    const size = attributes.find(el => el.names === "size");
    if (size) if (typeof size.values === "function") return size.values;
  }

  return [];
};
const getImagePath = product => {
  if (product.productid) {
    if (product.productid.featurefilepath) return product.productid.featurefilepath;
  }

  if (product.featureimage) return product.featureimage;
  if (product.galleryimgdetails) return product.galleryimgdetails[0];
};
const getFeaturedProduct = ({
  products,
  countryCode = "US"
}) => {
  const filterProduct = getVisibleProducts({
    products,
    countryCode
  }).filter(el => {
    if (!el) return false;
    if (el.featured !== true) return false;
    return true;
  });
  return filterProduct;
};
const getVisibleProducts = ({
  products,
  countryCode = "US"
}) => {
  const countryName = Object(___WEBPACK_IMPORTED_MODULE_0__[/* getCountryName */ "d"])(countryCode);
  const productsList = products.filter(el => {
    if (!el) return false;
    if (el.visibilitytype !== true) return false;

    if (el.combo) {
      if (el.blockedcountries) {
        if (el.blockedcountries.includes(countryName)) return false;
      }
    }

    if (el.productid) {
      if (el.productid.blockedcountries) {
        if (el.productid.blockedcountries.includes(countryName)) return false;
      }
    }

    return true;
  });
  return productsList.map(el => {
    if (el.variation) {
      const verifiedAttr = filteredAttr(el.variation, el.attributes);
      return _objectSpread(_objectSpread({}, el), {}, {
        verifiedAttr,
        visibleAttrList: getAttrListing(verifiedAttr)
      });
    } else return el;
  });
};
const applyVariationFilter = (product, selectedVariation = {}) => {
  const visibleAttr = findByMatchingProperties(product.verifiedAttr, selectedVariation);
  return _objectSpread(_objectSpread({}, product), {}, {
    visibleAttr,
    visibleAttrList: getAttrListing(visibleAttr)
  });
};
const getCategoraiesProducts = products => {
  const productsN = products.filter(el => el.categoryid);
  const combos = products.filter(el => el.combo);
  const filtered = productsN.map(el => {
    return productsN.filter(elx => {
      if (el.categoryid[0] && elx.categoryid[0]) return el.categoryid[0]._id === elx.categoryid[0]._id;
      return false;
    });
  }).sort((a, b) => {
    if (a[0] && b[0]) if (a[0].categoryid[0] && b[0].categoryid[0]) {
      if (a[0].categoryid[0]._id < b[0].categoryid[0]._id) return -1;
      if (a[0].categoryid[0]._id > b[0].categoryid[0]._id) return 1;
    }
    return 0;
  });
  const productsF = filtered.filter((el, x) => {
    if (x === 0) return true;

    if (filtered[x - 1] && el[0]) {
      if (filtered[x - 1][0]) {
        if (filtered[x - 1][0].categoryid[0] && el[0].categoryid[0]) {
          const prevEl = filtered[x - 1][0].categoryid[0]._id;
          const currentEl = el[0].categoryid[0]._id;
          return prevEl !== currentEl;
        }
      }
    }

    return false; // const prevEl = filtered[x - 1][0].categoryid[0]._id;
    // const currentEl = el[0].categoryid[0]._id;
    // return prevEl !== currentEl;
  });
  const cate = [...productsF, combos];
  return cate.map(el => {
    if (el.length) {
      if (el[0].combo) {
        return {
          category: {
            blockedcountries: [],
            catdescription: "Bundles",
            categoryid: "Bundles",
            categoryslug: "Bundles",
            categorytitle: "Bundles",
            _id: "Bundles"
          },
          products: el
        };
      }

      return {
        category: _objectSpread({}, el[0].categoryid[0]),
        products: el
      };
    }

    return null;
  }).filter(el => el);
};
const getVisibleCategory = (arr = [], countryCode = "US") => {
  const countryName = Object(___WEBPACK_IMPORTED_MODULE_0__[/* getCountryName */ "d"])(countryCode);
  return arr.filter(el => {
    if (!el) return false;
    if (!el.category) return false;

    if (el.category.blockedcountries) {
      if (el.category.blockedcountries.includes(countryName)) return false;
    }

    return true;
  });
};
const getProductsByCategory = (products = [], category = "") => {
  if (category.toLowerCase() === "combos" || category.toLowerCase() === "kits" || category.toLowerCase() === "bundles") {
    return products.filter(el => el.combo);
  }

  return products.filter(el => {
    if (!el.categoryid) return false;
    const found = el.categoryid.find(elx => elx.categorytitle === category);
    return found;
  });
};
const getMatchCategory = (arr = [], category = "") => arr.find(el => el.categorytitle === category);
const generateProductSlug = product => {
  const productSlug = product.title ? product.title.toLocaleLowerCase() : product.productid && product.productid.producttitle.toLocaleLowerCase();
  return encodeUrlFn(productSlug);
};
const addSlugToProduct = product => _objectSpread(_objectSpread({}, product), {}, {
  productSlug: generateProductSlug(product)
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

/***/ "sPTW":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _constants_projectSettings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("xSWb");
/* harmony import */ var _services_extra__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("xE+L");
/* harmony import */ var _services_extra_basicFunction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("0pHj");
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("x91w");
/* harmony import */ var _services_helpers_product__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("OWVN");
/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("g8bt");
/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_8__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










const basicFunction = new _services_extra_basicFunction__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"]();

class ChatProductCard extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor() {
    super();

    _defineProperty(this, "addToCart", product => {
      const {
        addToCart,
        toggleCartBar,
        isOpen
      } = this.props;
      addToCart(product);
      if (!isOpen) toggleCartBar();
    });

    _defineProperty(this, "triggerNext", e => {
      const {
        triggerNextStep
      } = this.props;
      triggerNextStep();
    });

    this.state = {
      selected: false
    };
  }

  render() {
    const {
      value: product,
      countryCode
    } = this.props.steps.products;
    if (!product) return __jsx("div", null);
    const productLink = `/shop/${Object(_services_helpers_product__WEBPACK_IMPORTED_MODULE_7__[/* getProductTitle */ "i"])(product).replace(/ /g, "-")}`;
    const productTitle = product.title ? product.title : product.productid && product.productid.producttitle;
    const productImage = product.featureimage ? product.featureimage : product.productid && product.productid.featurefilepath;
    const amountObj = Object(_services_extra__WEBPACK_IMPORTED_MODULE_4__[/* getBasicPrice */ "c"])(product);
    const amount = amountObj.sale_price ? amountObj.sale_price : amountObj.regular_price;
    const price = basicFunction.currencyWithoutUsd(amount);
    return __jsx("div", {
      style: {
        width: "100%",
        margin: "auto"
      },
      className: "product-list-item"
    }, __jsx("div", {
      className: "product-list-image-wrap mb-2"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: productLink
    }, __jsx("a", {
      className: "cursor-pointer product-list-image-link"
    }, __jsx("div", {
      style: {
        width: "210px",
        height: "210px"
      },
      className: "product-list-image-inner-wrap"
    }, __jsx(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_8__["LazyLoadImage"], {
      className: "product-list-image",
      src: _constants_projectSettings__WEBPACK_IMPORTED_MODULE_3__[/* filePath */ "e"] + productImage,
      alt: productTitle
    }))))), __jsx("div", {
      className: "product-list-title-wrap"
    }, __jsx("div", {
      className: "product-list-title-inner"
    }, __jsx("p", {
      className: "product-list-title mb-2"
    }, __jsx("strong", null, productTitle)))), __jsx("div", {
      className: "chat-product-btn-wrap"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: productLink
    }, __jsx("a", {
      className: "btn cursor-pointer d-block mb-0 product-list-btn hover-text-line"
    }, "View details")), __jsx("span", {
      onClick: () => {
        this.addToCart(Object(_services_extra__WEBPACK_IMPORTED_MODULE_4__[/* directAddToCart */ "b"])(product));
        this.triggerNext();
      },
      className: "c-btn c-btn--dark btn2 cursor-pointer d-block mb-0 product-list-btn"
    }, "Add to cart - ", price)));
  }

}

const mapStateToProps = state => ({
  countryCode: state.location.countryCode,
  isOpen: state.drawers.isCartOpen,
  products: state.products.products
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, {
  addToCart: _redux_actions__WEBPACK_IMPORTED_MODULE_6__["addToCart"],
  toggleCartBar: _redux_actions__WEBPACK_IMPORTED_MODULE_6__["toggleCartBar"]
})(ChatProductCard));

/***/ }),

/***/ "uY9e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export getItemTotal */
/* unused harmony export returnSubTotal */
/* unused harmony export returnUnSubscribeTotal */
/* unused harmony export getTotalWeight */
/* unused harmony export getTotalVolume */
/* unused harmony export getTotalVariation */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return variablePriceSet; });
/* unused harmony export changeCartItemVariation */
/* unused harmony export verifyProduct */
/* unused harmony export addItem */
/* unused harmony export setSlugInCart */
/* unused harmony export modifyProduct */
/* unused harmony export removeItem */
/* harmony import */ var _productHelpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("TcCU");
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const getItemTotal = item => {
  if (item) {
    if (item.saleprice) return parseFloat(item.saleprice) * parseFloat(item.qty.value);else if (item.regularprice) return parseFloat(item.regularprice) * parseFloat(item.qty.value);
  }

  return 0;
};
const returnSubTotal = items => {
  // amount =
  return items.map(el => {
    if (el) {
      if (el.saleprice) {
        if (el.subscribed) {
          const totalPrice = parseFloat(el.saleprice) * parseFloat(el.qty.value);
          const disc = totalPrice * el.subscribedDiscountPersent / 100;
          return parseFloat(totalPrice) - parseFloat(disc);
        } else {
          return parseFloat(el.saleprice) * parseFloat(el.qty.value);
        }
      } else if (el.regularprice) if (el.subscribed) {
        const totalPrice = parseFloat(el.regularprice) * parseFloat(el.qty.value);
        const disc = totalPrice * el.subscribedDiscountPersent / 100;
        return parseFloat(totalPrice) - parseFloat(disc);
      } else {
        return parseFloat(el.regularprice) * parseFloat(el.qty.value);
      }
    }

    return 0;
  }).reduce((a, b) => a + b, 0);
};
const returnUnSubscribeTotal = items => {
  return items.filter(el => !el.subscribed).map(el => {
    if (el) {
      if (el.saleprice) return parseFloat(el.saleprice) * parseFloat(el.qty.value);else if (el.regularprice) return parseFloat(el.regularprice) * parseFloat(el.qty.value);
    }

    return 0;
  }).reduce((a, b) => a + b, 0);
};
const getTotalWeight = items => {
  return items.filter(el => el.weight).map(el => el.weight * parseFloat(el.qty.value)).reduce((a, b) => a + b, 0);
};
const getTotalVolume = items => {
  // return items
  //   .filter(el => el.shipping_height && el.shipping_length && el.shipping_width)
  //   .map(el => el.shipping_height * el.shipping_length * el.shipping_width)
  //   .reduce((a, b) => a + b, 0);
  return items.filter(el => el.volume).map(el => el.volume * parseFloat(el.qty.value)).reduce((a, b) => a + b, 0);
};
const getTotalVariation = item => {
  if (!item.attributes) return [];
  return item.attributes.map(el => el ? el.names : null).filter(el => el);
};
const variablePriceSet = productItem => {
  if (productItem) {
    let tempVariable = _objectSpread({}, productItem);

    if (productItem.producttype === "variable") {
      // if (productItem.size && productItem.extract_flavor) {
      const notNullVariation = productItem.variation.filter(el => el !== null);
      productItem.attributes.filter(el => el !== null).map(el => el.names);
      const varCheck = productItem.attributes.filter(el => el !== null).map(attr => {
        return {
          key: attr.names,
          value: productItem[attr.names] ? productItem[attr.names].value : productItem[attr.names]
        };
      });
      let matchedVariable = null;

      if (!varCheck.some(vEl => vEl.value === null || vEl.value === undefined)) {
        matchedVariable = notNullVariation.find(varEl => {
          let matchArr = [];
          varCheck.map(vEl => {
            matchArr.push(varEl[vEl.key] === vEl.value);
            return null;
          });
          return !matchArr.includes(false);
        });

        if (matchedVariable) {
          tempVariable = _objectSpread(_objectSpread({}, productItem), {}, {
            regularprice: matchedVariable.regular_price,
            saleprice: matchedVariable.sale_price
          });
        } else {
          tempVariable = _objectSpread(_objectSpread({}, productItem), {}, {
            regularprice: productItem.dregularprice,
            saleprice: productItem.dsaleprice
          });
        }
      }
    } else {
      if (productItem.producttype === "simple" || productItem.combo) {
        tempVariable = _objectSpread(_objectSpread({}, productItem), {}, {
          regularprice: productItem.dregularprice,
          saleprice: productItem.dsaleprice
        });
      }
    }

    return tempVariable;
  }
};
const changeCartItemVariation = (varValue, names, item, indexingNo, list) => {
  if (names === "qty") {
    return {
      approve: false,
      update: {
        oldItem: item,
        newItem: _objectSpread(_objectSpread({}, item), {}, {
          [names]: varValue
        }),
        remove: null
      }
    };
  } else {
    const totalVariation = getTotalVariation(item);
    const foundItem = list.find((el, index) => {
      const innerFlag = totalVariation.map(varEl => {
        if (el[varEl]) {
          if (varEl === names) {
            return el[varEl].value === varValue.value;
          }

          return el[varEl].value === item[varEl].value;
        } else {
          return null;
        }
      }).filter(el => el !== null);
      return el.productid._id === item.productid._id && innerFlag.every(el => el) && index !== indexingNo;
    });

    if (foundItem !== undefined && foundItem !== null) {
      const totalQty = parseInt(foundItem.qty.value) + parseInt(item.qty.value);
      const qty = {
        label: totalQty.toString(),
        value: totalQty.toString()
      };

      if (item.subscribed || foundItem.subscribed) {
        return {
          approve: true,
          update: {
            oldItem: foundItem,
            newItem: _objectSpread(_objectSpread({}, foundItem), {}, {
              [names]: varValue,
              qty,
              subscribed: true,
              subscribedDiscountPersent: item.subscribedDiscountPersent,
              subscribedTime: item.subscribedTime
            }),
            remove: item
          }
        };
      } else {
        return {
          approve: false,
          update: {
            oldItem: foundItem,
            newItem: _objectSpread(_objectSpread({}, foundItem), {}, {
              [names]: varValue,
              qty
            }),
            remove: item
          }
        };
      }
    } else {
      return {
        approve: false,
        update: {
          oldItem: item,
          newItem: _objectSpread(_objectSpread({}, item), {}, {
            [names]: varValue
          }),
          remove: null
        }
      };
    }
  }
};
const verifyProduct = (productItem, items = []) => {
  const totalVariation = getTotalVariation(productItem);
  const foundItem = items.find(el => {
    const innerFlag = totalVariation.map(varEl => {
      if (el[varEl]) {
        return el[varEl].value === productItem[varEl].value;
      } else {
        return null;
      }
    }).filter(el => el !== null).every(el => el);
    if (!innerFlag) return innerFlag;
    if (el.combo && productItem.combo) return el._id === productItem._id;
    if (el.combo) return el._id === productItem.productid._id;
    if (productItem.combo) return el.productid._id === productItem._id;
    return el.productid._id === productItem.productid._id;
  });

  if (foundItem !== undefined && foundItem !== null) {
    const totalQty = parseInt(foundItem.qty.value) + parseInt(productItem.qty.value);
    const qty = {
      label: totalQty,
      value: totalQty
    };

    const tempNewItem = _objectSpread(_objectSpread({}, foundItem), {}, {
      subscribed: productItem.subscribed
    });

    if (productItem.subscribed) {
      const {
        subscribed,
        subscribedDiscountPersent,
        subscribedTime
      } = productItem;
      return {
        found: foundItem,
        item: _objectSpread(_objectSpread({}, foundItem), {}, {
          qty: qty,
          subscribed,
          subscribedDiscountPersent,
          subscribedTime
        })
      };
    } else if (foundItem.subscribed) {
      const {
        subscribedDiscountPersent,
        subscribedTime
      } = tempNewItem,
            newItem = _objectWithoutProperties(tempNewItem, ["subscribedDiscountPersent", "subscribedTime"]);

      return {
        found: foundItem,
        item: _objectSpread({}, newItem)
      };
    }

    return {
      found: foundItem,
      item: _objectSpread(_objectSpread({}, foundItem), {}, {
        qty: qty,
        subscribed: productItem.subscribed
      })
    };
  }

  return {
    found: null,
    item: _objectSpread({}, productItem)
  };
};
const addItem = (state, newItem) => {
  const {
    found,
    item
  } = verifyProduct(newItem, state.items);

  if (found) {
    return modifyProduct(found, item, state);
  }

  const newItems = [...state.items, newItem];
  return _objectSpread(_objectSpread({}, state), {}, {
    items: newItems,
    subTotal: returnSubTotal(newItems) || 0,
    unSubscribeProductAmount: returnUnSubscribeTotal(newItems) || 0,
    totalWeight: getTotalWeight(newItems),
    totalVolume: getTotalVolume(newItems)
  });
};
const setSlugInCart = cart => {
  return _objectSpread(_objectSpread({}, cart), {}, {
    items: cart.items ? cart.items.map(el => Object(_productHelpers__WEBPACK_IMPORTED_MODULE_0__[/* addSlugToProduct */ "a"])(el)) : []
  });
};
const modifyProduct = (oldItem, newItem, state) => {
  const NewItems = state.items.map(el => {
    if (el._id === newItem._id) {
      if (el === oldItem) {
        return variablePriceSet(newItem);
      }
    }

    return el;
  });

  if (oldItem !== newItem) {
    return _objectSpread(_objectSpread({}, state), {}, {
      items: [...NewItems],
      subTotal: returnSubTotal(NewItems) || 0,
      unSubscribeProductAmount: returnUnSubscribeTotal(NewItems) || 0,
      totalWeight: getTotalWeight(NewItems),
      totalVolume: getTotalVolume(NewItems)
    });
  }

  return state;
};
const removeItem = (state, item) => {
  const newItems = [...state.items.filter(el => el !== item)];
  return _objectSpread(_objectSpread({}, state), {}, {
    items: newItems,
    subTotal: returnSubTotal(newItems) || 0,
    unSubscribeProductAmount: returnUnSubscribeTotal(newItems) || 0,
    totalWeight: getTotalWeight(newItems),
    totalVolume: getTotalVolume(newItems)
  });
};

/***/ }),

/***/ "xE+L":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ AllCountryObj; });
__webpack_require__.d(__webpack_exports__, "d", function() { return /* reexport */ getCountryName; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* reexport */ productHelpers["c" /* getBasicPrice */]; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ productHelpers["b" /* directAddToCart */]; });

// UNUSED EXPORTS: CountryCodes, getCountryCode, required, email, fieldValidation, getWishList, addToWhisList, isProductInWishList, removeFromWhisList, toggleWishListItem, getItemTotal, returnSubTotal, returnUnSubscribeTotal, getTotalWeight, getTotalVolume, getTotalVariation, variablePriceSet, changeCartItemVariation, verifyProduct, addItem, setSlugInCart, modifyProduct, removeItem, getPageContent, getContinentName, encodeUrlFn, filteredAttr, removeDuplicateObjAr, findByMatchingProperties, findByMatchingProperties2, getAttrListing, getSizes, getImagePath, getFeaturedProduct, getVisibleProducts, applyVariationFilter, getCategoraiesProducts, getVisibleCategory, getProductsByCategory, getMatchCategory, generateProductSlug, addSlugToProduct

// CONCATENATED MODULE: ./services/extra/allCountry.js
const AllCountryObj = [{
  name: "Afghanistan",
  code: "AF",
  region: "Asia"
}, {
  name: "Ã…land Islands",
  code: "AX",
  region: "Europe"
}, {
  name: "Albania",
  code: "AL",
  region: "Europe"
}, {
  name: "Algeria",
  code: "DZ"
}, {
  name: "American Samoa",
  code: "AS"
}, {
  name: "Andorra",
  code: "AD"
}, {
  name: "Angola",
  code: "AO"
}, {
  name: "Anguilla",
  code: "AI"
}, {
  name: "Antarctica",
  code: "AQ"
}, {
  name: "Antigua and Barbuda",
  code: "AG"
}, {
  name: "Argentina",
  code: "AR"
}, {
  name: "Armenia",
  code: "AM",
  region: "Asia"
}, {
  name: "Aruba",
  code: "AW"
}, {
  name: "Australia",
  code: "AU"
}, {
  name: "Austria",
  code: "AT"
}, {
  name: "Azerbaijan",
  code: "AZ",
  region: "Asia"
}, {
  name: "Bahamas",
  code: "BS"
}, {
  name: "Bahrain",
  code: "BH",
  region: "Asia"
}, {
  name: "Bangladesh",
  code: "BD",
  region: "Asia"
}, {
  name: "Barbados",
  code: "BB"
}, {
  name: "Belarus",
  code: "BY"
}, {
  name: "Belgium",
  code: "BE"
}, {
  name: "Belize",
  code: "BZ"
}, {
  name: "Benin",
  code: "BJ"
}, {
  name: "Bermuda",
  code: "BM"
}, {
  name: "Bhutan",
  code: "BT",
  region: "Asia"
}, {
  name: "Bolivia, Plurinational State of",
  code: "BO"
}, {
  name: "Bonaire, Sint Eustatius and Saba",
  code: "BQ"
}, {
  name: "Bosnia and Herzegovina",
  code: "BA"
}, {
  name: "Botswana",
  code: "BW"
}, {
  name: "Bouvet Island",
  code: "BV"
}, {
  name: "Brazil",
  code: "BR"
}, {
  name: "British Indian Ocean Territory",
  code: "IO"
}, {
  name: "Brunei Darussalam",
  code: "BN",
  region: "Asia"
}, {
  name: "Bulgaria",
  code: "BG"
}, {
  name: "Burkina Faso",
  code: "BF"
}, {
  name: "Burundi",
  code: "BI"
}, {
  name: "Cambodia",
  code: "KH",
  region: "Asia"
}, {
  name: "Cameroon",
  code: "CM"
}, {
  name: "Canada",
  code: "CA"
}, {
  name: "Cape Verde",
  code: "CV"
}, {
  name: "Cayman Islands",
  code: "KY"
}, {
  name: "Central African Republic",
  code: "CF"
}, {
  name: "Chad",
  code: "TD"
}, {
  name: "Chile",
  code: "CL"
}, {
  name: "China",
  code: "CN",
  region: "Asia"
}, {
  name: "Christmas Island",
  code: "CX"
}, {
  name: "Cocos (Keeling) Islands",
  code: "CC"
}, {
  name: "Colombia",
  code: "CO"
}, {
  name: "Comoros",
  code: "KM"
}, {
  name: "Congo",
  code: "CG"
}, {
  name: "Congo, the Democratic Republic of the",
  code: "CD"
}, {
  name: "Cook Islands",
  code: "CK"
}, {
  name: "Costa Rica",
  code: "CR"
}, {
  name: "CÃ´te d'Ivoire",
  code: "CI"
}, {
  name: "Croatia",
  code: "HR"
}, {
  name: "Cuba",
  code: "CU"
}, {
  name: "CuraÃ§ao",
  code: "CW"
}, {
  name: "Cyprus",
  code: "CY",
  region: "Asia"
}, {
  name: "Czech Republic",
  code: "CZ"
}, {
  name: "Denmark",
  code: "DK"
}, {
  name: "Djibouti",
  code: "DJ"
}, {
  name: "Dominica",
  code: "DM"
}, {
  name: "Dominican Republic",
  code: "DO"
}, {
  name: "Ecuador",
  code: "EC"
}, {
  name: "Egypt",
  code: "EG"
}, {
  name: "El Salvador",
  code: "SV"
}, {
  name: "Equatorial Guinea",
  code: "GQ"
}, {
  name: "Eritrea",
  code: "ER"
}, {
  name: "Estonia",
  code: "EE"
}, {
  name: "Ethiopia",
  code: "ET"
}, {
  name: "Falkland Islands (Malvinas)",
  code: "FK"
}, {
  name: "Faroe Islands",
  code: "FO"
}, {
  name: "Fiji",
  code: "FJ"
}, {
  name: "Finland",
  code: "FI"
}, {
  name: "France",
  code: "FR"
}, {
  name: "French Guiana",
  code: "GF"
}, {
  name: "French Polynesia",
  code: "PF"
}, {
  name: "French Southern Territories",
  code: "TF"
}, {
  name: "Gabon",
  code: "GA"
}, {
  name: "Gambia",
  code: "GM"
}, {
  name: "Georgia",
  code: "GE",
  region: "Asia"
}, {
  name: "Germany",
  code: "DE"
}, {
  name: "Ghana",
  code: "GH"
}, {
  name: "Gibraltar",
  code: "GI"
}, {
  name: "Greece",
  code: "GR"
}, {
  name: "Greenland",
  code: "GL"
}, {
  name: "Grenada",
  code: "GD"
}, {
  name: "Guadeloupe",
  code: "GP"
}, {
  name: "Guam",
  code: "GU"
}, {
  name: "Guatemala",
  code: "GT"
}, {
  name: "Guernsey",
  code: "GG"
}, {
  name: "Guinea",
  code: "GN"
}, {
  name: "Guinea-Bissau",
  code: "GW"
}, {
  name: "Guyana",
  code: "GY"
}, {
  name: "Haiti",
  code: "HT"
}, {
  name: "Heard Island and McDonald Islands",
  code: "HM"
}, {
  name: "Holy See (Vatican City State)",
  code: "VA"
}, {
  name: "Honduras",
  code: "HN"
}, {
  name: "Hong Kong",
  code: "HK"
}, {
  name: "Hungary",
  code: "HU"
}, {
  name: "Iceland",
  code: "IS"
}, {
  name: "India",
  code: "IN",
  region: "Asia"
}, {
  name: "Indonesia",
  code: "ID",
  region: "Asia"
}, {
  name: "Iran, Islamic Republic of",
  code: "IR",
  region: "Asia"
}, {
  name: "Iraq",
  code: "IQ"
}, {
  name: "Ireland",
  code: "IE"
}, {
  name: "Isle of Man",
  code: "IM"
}, {
  name: "Israel",
  code: "IL"
}, {
  name: "Italy",
  code: "IT"
}, {
  name: "Jamaica",
  code: "JM"
}, {
  name: "Japan",
  code: "JP"
}, {
  name: "Jersey",
  code: "JE"
}, {
  name: "Jordan",
  code: "JO"
}, {
  name: "Kazakhstan",
  code: "KZ"
}, {
  name: "Kenya",
  code: "KE"
}, {
  name: "Kiribati",
  code: "KI"
}, {
  name: "Korea, Democratic People's Republic of",
  code: "KP"
}, {
  name: "Korea, Republic of",
  code: "KR"
}, {
  name: "Kuwait",
  code: "KW"
}, {
  name: "Kyrgyzstan",
  code: "KG"
}, {
  name: "Lao People's Democratic Republic",
  code: "LA"
}, {
  name: "Latvia",
  code: "LV"
}, {
  name: "Lebanon",
  code: "LB"
}, {
  name: "Lesotho",
  code: "LS"
}, {
  name: "Liberia",
  code: "LR"
}, {
  name: "Libya",
  code: "LY"
}, {
  name: "Liechtenstein",
  code: "LI"
}, {
  name: "Lithuania",
  code: "LT"
}, {
  name: "Luxembourg",
  code: "LU"
}, {
  name: "Macao",
  code: "MO"
}, {
  name: "Macedonia, the Former Yugoslav Republic of",
  code: "MK"
}, {
  name: "Madagascar",
  code: "MG"
}, {
  name: "Malawi",
  code: "MW"
}, {
  name: "Malaysia",
  code: "MY"
}, {
  name: "Maldives",
  code: "MV"
}, {
  name: "Mali",
  code: "ML"
}, {
  name: "Malta",
  code: "MT"
}, {
  name: "Marshall Islands",
  code: "MH"
}, {
  name: "Martinique",
  code: "MQ"
}, {
  name: "Mauritania",
  code: "MR"
}, {
  name: "Mauritius",
  code: "MU"
}, {
  name: "Mayotte",
  code: "YT"
}, {
  name: "Mexico",
  code: "MX"
}, {
  name: "Micronesia, Federated States of",
  code: "FM"
}, {
  name: "Moldova, Republic of",
  code: "MD"
}, {
  name: "Monaco",
  code: "MC"
}, {
  name: "Mongolia",
  code: "MN"
}, {
  name: "Montenegro",
  code: "ME"
}, {
  name: "Montserrat",
  code: "MS"
}, {
  name: "Morocco",
  code: "MA"
}, {
  name: "Mozambique",
  code: "MZ"
}, {
  name: "Myanmar",
  code: "MM"
}, {
  name: "Namibia",
  code: "NA"
}, {
  name: "Nauru",
  code: "NR"
}, {
  name: "Nepal",
  code: "NP"
}, {
  name: "Netherlands",
  code: "NL"
}, {
  name: "New Caledonia",
  code: "NC"
}, {
  name: "New Zealand",
  code: "NZ"
}, {
  name: "Nicaragua",
  code: "NI"
}, {
  name: "Niger",
  code: "NE"
}, {
  name: "Nigeria",
  code: "NG"
}, {
  name: "Niue",
  code: "NU"
}, {
  name: "Norfolk Island",
  code: "NF"
}, {
  name: "Northern Mariana Islands",
  code: "MP"
}, {
  name: "Norway",
  code: "NO"
}, {
  name: "Oman",
  code: "OM"
}, {
  name: "Pakistan",
  code: "PK"
}, {
  name: "Palau",
  code: "PW"
}, {
  name: "Palestine, State of",
  code: "PS"
}, {
  name: "Panama",
  code: "PA"
}, {
  name: "Papua New Guinea",
  code: "PG"
}, {
  name: "Paraguay",
  code: "PY"
}, {
  name: "Peru",
  code: "PE"
}, {
  name: "Philippines",
  code: "PH"
}, {
  name: "Pitcairn",
  code: "PN"
}, {
  name: "Poland",
  code: "PL"
}, {
  name: "Portugal",
  code: "PT"
}, {
  name: "Puerto Rico",
  code: "PR"
}, {
  name: "Qatar",
  code: "QA"
}, {
  name: "RÃ©union",
  code: "RE"
}, {
  name: "Romania",
  code: "RO"
}, {
  name: "Russian Federation",
  code: "RU"
}, {
  name: "Rwanda",
  code: "RW"
}, {
  name: "Saint BarthÃ©lemy",
  code: "BL"
}, {
  name: "Saint Helena, Ascension and Tristan da Cunha",
  code: "SH"
}, {
  name: "Saint Kitts and Nevis",
  code: "KN"
}, {
  name: "Saint Lucia",
  code: "LC"
}, {
  name: "Saint Martin (French part)",
  code: "MF"
}, {
  name: "Saint Pierre and Miquelon",
  code: "PM"
}, {
  name: "Saint Vincent and the Grenadines",
  code: "VC"
}, {
  name: "Samoa",
  code: "WS"
}, {
  name: "San Marino",
  code: "SM"
}, {
  name: "Sao Tome and Principe",
  code: "ST"
}, {
  name: "Saudi Arabia",
  code: "SA"
}, {
  name: "Senegal",
  code: "SN"
}, {
  name: "Serbia",
  code: "RS"
}, {
  name: "Seychelles",
  code: "SC"
}, {
  name: "Sierra Leone",
  code: "SL"
}, {
  name: "Singapore",
  code: "SG"
}, {
  name: "Sint Maarten (Dutch part)",
  code: "SX"
}, {
  name: "Slovakia",
  code: "SK"
}, {
  name: "Slovenia",
  code: "SI"
}, {
  name: "Solomon Islands",
  code: "SB"
}, {
  name: "Somalia",
  code: "SO"
}, {
  name: "South Africa",
  code: "ZA"
}, {
  name: "South Georgia and the South Sandwich Islands",
  code: "GS"
}, {
  name: "South Sudan",
  code: "SS"
}, {
  name: "Spain",
  code: "ES"
}, {
  name: "Sri Lanka",
  code: "LK"
}, {
  name: "Sudan",
  code: "SD"
}, {
  name: "Suriname",
  code: "SR"
}, {
  name: "Svalbard and Jan Mayen",
  code: "SJ"
}, {
  name: "Swaziland",
  code: "SZ"
}, {
  name: "Sweden",
  code: "SE"
}, {
  name: "Switzerland",
  code: "CH"
}, {
  name: "Syrian Arab Republic",
  code: "SY"
}, {
  name: "Taiwan, Province of China",
  code: "TW"
}, {
  name: "Tajikistan",
  code: "TJ"
}, {
  name: "Tanzania, United Republic of",
  code: "TZ"
}, {
  name: "Thailand",
  code: "TH"
}, {
  name: "Timor-Leste",
  code: "TL",
  region: "Asia"
}, {
  name: "Togo",
  code: "TG"
}, {
  name: "Tokelau",
  code: "TK"
}, {
  name: "Tonga",
  code: "TO"
}, {
  name: "Trinidad and Tobago",
  code: "TT"
}, {
  name: "Tunisia",
  code: "TN"
}, {
  name: "Turkey",
  code: "TR"
}, {
  name: "Turkmenistan",
  code: "TM"
}, {
  name: "Turks and Caicos Islands",
  code: "TC"
}, {
  name: "Tuvalu",
  code: "TV"
}, {
  name: "Uganda",
  code: "UG"
}, {
  name: "Ukraine",
  code: "UA"
}, {
  name: "United Arab Emirates",
  code: "AE"
}, {
  name: "United Kingdom",
  code: "GB"
}, {
  name: "United States",
  code: "US"
}, {
  name: "United States Minor Outlying Islands",
  code: "UM"
}, {
  name: "Uruguay",
  code: "UY"
}, {
  name: "Uzbekistan",
  code: "UZ"
}, {
  name: "Vanuatu",
  code: "VU"
}, {
  name: "Venezuela, Bolivarian Republic of",
  code: "VE"
}, {
  name: "Viet Nam",
  code: "VN"
}, {
  name: "Virgin Islands, British",
  code: "VG"
}, {
  name: "Virgin Islands, U.S.",
  code: "VI"
}, {
  name: "Wallis and Futuna",
  code: "WF"
}, {
  name: "Western Sahara",
  code: "EH"
}, {
  name: "Yemen",
  code: "YE"
}, {
  name: "Zambia",
  code: "ZM"
}, {
  name: "Zimbabwe",
  code: "ZW"
}];
const CountryCodes = ["AF", "AX", "AL", "DZ", "AS", "AD", "AO", "AI", "AQ", "AG", "AR", "AM", "AW", "AU", "AT", "AZ", "BS", "BH", "BD", "BB", "BY", "BE", "BZ", "BJ", "BM", "BT", "BO", "BQ", "BA", "BW", "BV", "BR", "IO", "BN", "BG", "BF", "BI", "KH", "CM", "CA", "CV", "KY", "CF", "TD", "CL", "CN", "CX", "CC", "CO", "KM", "CG", "CD", "CK", "CR", "CI", "HR", "CU", "CW", "CY", "CZ", "DK", "DJ", "DM", "DO", "EC", "EG", "SV", "GQ", "ER", "EE", "ET", "FK", "FO", "FJ", "FI", "FR", "GF", "PF", "TF", "GA", "GM", "GE", "DE", "GH", "GI", "GR", "GL", "GD", "GP", "GU", "GT", "GG", "GN", "GW", "GY", "HT", "HM", "VA", "HN", "HK", "HU", "IS", "IN", "ID", "IR", "IQ", "IE", "IM", "IL", "IT", "JM", "JP", "JE", "JO", "KZ", "KE", "KI", "KP", "KR", "KW", "KG", "LA", "LV", "LB", "LS", "LR", "LY", "LI", "LT", "LU", "MO", "MK", "MG", "MW", "MY", "MV", "ML", "MT", "MH", "MQ", "MR", "MU", "YT", "MX", "FM", "MD", "MC", "MN", "ME", "MS", "MA", "MZ", "MM", "NA", "NR", "NP", "NL", "NC", "NZ", "NI", "NE", "NG", "NU", "NF", "MP", "NO", "OM", "PK", "PW", "PS", "PA", "PG", "PY", "PE", "PH", "PN", "PL", "PT", "PR", "QA", "RE", "RO", "RU", "RW", "BL", "SH", "KN", "LC", "MF", "PM", "VC", "WS", "SM", "ST", "SA", "SN", "RS", "SC", "SL", "SG", "SX", "SK", "SI", "SB", "SO", "ZA", "GS", "SS", "ES", "LK", "SD", "SR", "SJ", "SZ", "SE", "CH", "SY", "TW", "TJ", "TZ", "TH", "TL", "TG", "TK", "TO", "TT", "TN", "TR", "TM", "TC", "TV", "UG", "UA", "AE", "GB", "US", "UM", "UY", "UZ", "VU", "VE", "VN", "VG", "VI", "WF", "EH", "YE", "ZM", "ZW"];
// CONCATENATED MODULE: ./services/extra/getCountryName.js

const getCountryName = code => {
  let country = AllCountryObj.map(el => {
    if (el.code === code) {
      return el.name;
    }

    return null;
  });
  return country.join("");
};
const getCountryCode = countryName => {
  let country = AllCountryObj.map(el => {
    if (countryName) {
      if (el.name.trim().toLowerCase() === countryName.trim().toLowerCase()) {
        return el.code;
      }
    }

    return null;
  });
  return country.join("");
};
// EXTERNAL MODULE: external "validator"
var external_validator_ = __webpack_require__("WZpn");

// EXTERNAL MODULE: ./constants/constantMessage.js
var constantMessage = __webpack_require__("nt4Y");

// EXTERNAL MODULE: ./constants/projectSettings.js
var projectSettings = __webpack_require__("xSWb");

// CONCATENATED MODULE: ./services/extra/validations.js
 // import { isValidPhoneNumber } from "react-phone-number-input";



const {
  enableCountry
} = projectSettings["d" /* default */];
const required = value => {
  if (!value.toString().trim().length) {
    // We can return string or jsx as the 'error' prop for the validated Component
    return "require";
  }
};
const email = value => {
  if (!Object(external_validator_["isEmail"])(value)) {
    return `${value} is not a valid email.`;
  }
};
const fieldValidation = (field = " ", type = " ") => {
  const typeArr = type.split(",").map(el => el.trim());

  if (typeArr.includes("required")) {
    if (Object(external_validator_["isEmpty"])(field.trim())) {
      return {
        isError: true,
        errorMsg: "can't be empty"
      };
    }
  }

  if (typeArr.includes("name")) {
    if (!Object(external_validator_["isAlpha"])(field)) {
      return {
        isError: true,
        errorMsg: "Only Alphabets"
      };
    }
  }

  if (typeArr.includes("email")) {
    if (!Object(external_validator_["isEmail"])(field)) {
      return {
        isError: true,
        errorMsg: constantMessage["e" /* emailNotValidErrMsg */]
      };
    }
  } // if (typeArr.includes("phone")) {
  //   if (!isValidPhoneNumber(field)) {
  //     return {
  //       isError: true,
  //       errorMsg: phoneNotValidErrMsg
  //     };
  //   }
  // }


  if (typeArr.includes("zipcode")) {
    // if(isPostalCode(this.state[field])){
    if (!Object(external_validator_["isNumeric"])(field)) {
      return {
        isError: true,
        errorMsg: constantMessage["j" /* zipValidErrMsg */]
      };
    }
  }

  if (typeArr.includes("routingNumber")) {
    // if(isPostalCode(this.state[field])){
    if (!Object(external_validator_["isNumeric"])(field)) {
      if (field.length === 9) {
        return {
          isError: true,
          errorMsg: "Bank routing number should be 9 digits."
        };
      }

      return {
        isError: true,
        errorMsg: "Bank routing number is not Correct."
      };
    }
  }

  if (typeArr.includes("country")) {
    if (!enableCountry.includes(field)) {
      return {
        isError: true,
        errorMsg: `${projectSettings["g" /* projectName */]} offers shipping to USA only`
      };
    }
  }

  return {
    isError: false,
    errorMsg: ""
  };
};
// CONCATENATED MODULE: ./services/extra/wishListHelpers.js
// import { addToWishListApi, deleteWishList } from "../api";
const getWishList = (userid = "guest") => {
  return [];
};
const addToWhisList = (productmeta, productid, userid = "guest") => {
  if (!isProductInWishList(productmeta)) {}

  if (userid !== "guest") {
    const wishList = getWishList(); // addToWishListApi(userid, productid, productmeta)
    //   .then(res => res.json())
    //   .then(resJson2 => {
    //     if (resJson2.status) {
    //       var wishListId = resJson2.wishlist._id;
    //       //var setinde
    //       wishList.map((itm, index) => {
    //         if (itm.productmeta === resJson2.wishlist.productmeta) {
    //           wishList[index] = {
    //             productmeta,
    //             productid,
    //             userid,
    //             wishListId
    //           };
    //         } else {
    //         }
    //         return null;
    //       });
    //     }
    //   })
    //   .catch(err => {});
  }
};
const isProductInWishList = (productmeta, list = []) => {
  const wishList = list || []; // console.log({
  //   wishList
  // });

  return wishList.some(pr => pr.productmeta === productmeta);
};
const removeFromWhisList = (productmeta, productid, productDetails, userid = "guest") => {
  const wishList = getWishList();

  if (isProductInWishList(productmeta)) {
    if (wishList.length > 0) {
      wishList.map(itm => {
        if (itm.productmeta === productmeta && itm.userid !== "guest") {
          var id = itm.wishListId; // deleteWishList({ id })
          //   .then(res => res.json())
          //   .then(resJson => {
          //     if (resJson.success) {
          //     }
          //   })
          //   .catch();
        }

        return null;
      });
    }
  }
};
const toggleWishListItem = (productmeta, productid, productDetails, userid = "guest") => {
  if (isProductInWishList(productmeta)) {
    removeFromWhisList(productmeta, productid, productDetails, userid);
  } else {
    addToWhisList(productmeta, productid, productDetails, userid);
  }
};
// EXTERNAL MODULE: ./services/extra/cartHealpers.js
var cartHealpers = __webpack_require__("uY9e");

// CONCATENATED MODULE: ./services/extra/countrySelectorOption.js
let countries = Object();
countries["Africa"] = "Algeria|Angola|Benin|Botswana|Burkina Faso|Burundi|Cameroon|Cape Verde|Central African Republic|Chad|Comoros|Congo, Dem.|Congo, Rep.|Djibouti|Egypt|Equatorial Guinea|Eritrea|Ethiopia|Gabon|Gambia|Ghana|Guinea|Guinea-Bissau|Kenya|Lesotho|Liberia|Libya|Madagascar|Malawi|Mali|Mauritania|Mauritius|Morocco|Mozambique|Namibia|Niger|Nigeria|Rwanda|Sao Tome/Principe|Senegal|Seychelles|Sierra Leone|Somalia|South Africa|Sudan|Swaziland|Tanzania|Togo|Tunisia|Uganda|Zambia|Zimbabwe";
countries["Antarctica"] = "Amundsen-Scott";
countries["Asia"] = "Bangladesh|Bhutan|Brunei|Burma (Myanmar)|Cambodia|China|East Timor|India|Indonesia|Japan|Kazakhstan|Korea (north)|Korea (south)|Laos|Malaysia|Maldives|Mongolia|Nepal|Philippines|Russian Federation|Singapore|Sri Lanka|Taiwan|Thailand|Vietnam";
countries["Australia/Oceania"] = "Australia|Fiji|Kiribati|Micronesia|Nauru|New Zealand|Palau|Papua New Guinea|Samoa|Tonga|Tuvalu|Vanuatu";
countries["Caribbean"] = "Anguilla|Antigua/Barbuda|Aruba|Bahamas|Barbados|Cozumel|Cuba|Dominica|Dominican Republic|Grenada|Guadeloupe|Haiti|Jamaica|Martinique|Montserrat|Netherlands Antilles|Puerto Rico|St. Barts|St. Kitts/Nevis|St. Lucia|St. Martin/Sint Maarten|St Vincent/Grenadines|San Andres|Trinidad/Tobago|Turks and Caicos Islands|Virgin Islands";
countries["Central America"] = "Belize|Costa Rica|El Salvador|Guatemala|Honduras|Nicaragua|Panama";
countries["Europe"] = "Albania|Andorra|Austria|Belarus|Belgium|Bosnia-Herzegovina|Bulgaria|Croatia|Czech Republic|Denmark|Estonia|Finland|France|Georgia|Germany|Greece|Hungary|Iceland|Ireland|Italy|Latvia|Liechtenstein|Lithuania|Luxembourg|Macedonia|Malta|Moldova|Monaco|Netherlands|Norway|Poland|Portugal|Romania|San Marino|Serbia/Montenegro (Yugoslavia)|Slovakia|Slovenia|Spain|Sweden|Switzerland|Ukraine|United Kingdom|Vatican City";
countries["Islands"] = "Arctic Ocean|Atlantic Ocean (North)|Atlantic Ocean (South)|Assorted|Caribbean Sea|Greek Isles|Indian Ocean|Mediterranean Sea|Oceania|Pacific Ocean (North)|Pacific Ocean (South)";
countries["Middle East"] = "Afghanistan|Armenia|Azerbaijan|Bahrain|Cyprus|Iran|Iraq|Israel|Jordan|Kuwait|Kyrgyzstan|Lebanon|Oman|Pakistan|Qatar|Saudi Arabia|Syria|Tajikistan|Turkey|Turkmenistan|United Arab Emirates|Uzbekistan|Yemen";
countries["North America"] = "Bermuda|Canada|Greenland|Mexico|United States";
countries["South America"] = "Argentina|Bolivia|Brazil|Chile|Colombia|Ecuador|Guyana|Paraguay|Peru|Suriname|Uruguay|Venezuela"; ////////////////////////////////////////////////////////////////////////////

let city_states = Object(); //Africa

city_states["Algeria"] = "Algiers|Adrar|Ain Defla|Ain Temouchent|Alger|Annaba|Batna|Bechar|Bejaia|Biskra|Blida|Bordj Bou Arreridj|Bouira|Boumerdes|Chlef|Constantine|Djelfa|El Bayadh|El Oued|El Tarf|Ghardaia|Guelma|Illizi|Jijel|Khenchela|Laghouat|Mascara|Medea|Mila|Mostaganem|M'Sila | Naama | Oran | Ouargla | Oum el Bouaghi | Relizane | Saida | Setif | Sidi Bel Abbes | Skikda | Souk Ahras | Tamanghasset | Tebessa | Tiaret | Tindouf | Tipaza | Tissemsilt | Tizi Ouzou | Tlemcen ";
city_states["Angola"] = "Luanda|Bengo|Benguela|Bie|Cabinda|Cuando Cubango|Cuanza Norte|Cuanza Sul|Cunene|Huambo|Huila|Lunda Norte|Lunda Sul|Malanje|Moxico|Namibe|Uige|Zaire";
city_states["Benin"] = "Porto-Novo|Alibori|Atakora|Atlantique|Borgou|Collines|Couffo|Donga|Littoral|Mono|Oueme|Plateau|Zou";
city_states["Botswana"] = "Gaborone|Central|Chobe|Francistown|Ghanzi|Kgalagadi|Kgatleng|Kweneng|Lobatse|Ngamiland|North-East|Selebi-Pikwe|South-East|Southern";
city_states["Burkina Faso"] = "Ouagadougou|Bale|Bam|Banwa|Bazega|Bougouriba|Boulgou|Boulkiemde|Comoe|Ganzourgou|Gnagna|Gourma|Houet|Ioba|Kadiogo|Kenedougou|Komandjari|Kompienga|Kossi|Koupelogo|Kouritenga|Kourweogo|Leraba|Loroum|Mouhoun|Nahouri|Namentenga|Nayala|Naumbiel|Oubritenga|Oudalan|Passore|Poni|Samentenga|Sanguie|Seno|Sissili|Soum|Sourou|Tapoa|Tuy|Yagha|Yatenga|Ziro|Zondomo|Zoundweogo";
city_states["Burundi"] = "|Bujumbura|Bubanza|Bujumbura|Bururi|Cankuzo|Cibitoke|Gitega|Karuzi|Kayanza|Kirundo|Makamba|Muramvya|Muyinga|Mwaro|Ngozi|Rutana|Ruyigi";
city_states["Cameroon"] = "Yaounde|Adamaoua|Centre|Est|Extreme-Nord|Littoral|Nord|Nord-Ouest|Ouest|Sud|Sud-Ouest";
city_states["Cape Verde"] = "Praia|Boa Vista|Brava|Calheta|Maio|Mosteiros|Paul|Porto Novo|Ribeira Grande|Sal|Santa Catarina|Santa Cruz|Sao Domingos|Sao Nicolau|Sao Filipe|Sao Vicente|Tarrafal";
city_states["Central African Republic"] = "Bangui|Bamingui-Bangoran|Basse-Kotto|Gribingui|Haute-Kotto|Haute-Sangha|Haut-Mbomou|Kemo-Gribingui|Lobaye|Mbomou|Nana-Mambere|Ombella-Mpoko|Ouaka|Ouham|Ouham-Pende|Sangha|Vakaga";
city_states["Chad"] = "N'Djamena | Assongha | Baguirmi | Bahr El Gazal | Bahr Koh | Batha Oriental | Batha Occidental | Biltine | Borkou | Dababa | Ennedi | Guera | Hadjer Lamis | Kabia | Kanem | Lac | Lac Iro | Logone Occidental | Logone Oriental | Mandoul | Mayo - Boneye | Mayo - Dallah | Monts de Lam | Ouaddai | Salamat | Sila | Tandjile Oriental | Tandjile Occidental | Tibesti ";
city_states["Congo, Dem."] = "Kinshasa|Bandundu|Bas-Congo|Equateur|Kasai-Occidental|Kasai-Oriental|Katanga|Maniema|Nord-Kivu|Orientale|Sud-Kivu";
city_states["Congo, Rep."] = "Brazzaville|Bouenza|Cuvette|Kouilou|Lekoumou|Likouala|Niari|Plateaux|Pool|Sangha";
city_states["Djibouti"] = "Djibouti|'Ali Sabih | Dikhil | Obock | Tadjoura ";
city_states["Egypt"] = "Cairo|Ad Daqahliyah|Al Bahr al Ahmar|Al Buhayrah|Al Fayyum|Al Gharbiyah|Al Iskandariyah|Al Isma'iliyah | Al Jizah | Al Minufiyah | Al Minya | Al Qahirah | Al Qalyubiyah | Al Wadi al Jadid | Ash Sharqiyah | As Suways | Aswan | Asyut | Bani Suwayf | Bur Sa'id|Dumyat|Janub Sina' | Kafr ash Shaykh | Matruh | Qina | Shamal Sina'|Suhaj";
city_states["Equatorial Guinea"] = "Malabo|Annobon|Bioko Norte|Bioko Sur|Centro Sur|Kie-Ntem|Litoral|Wele-Nzas";
city_states["Eritrea"] = "Asmara|Central|Anelba|Southern Red Sea|Northern Red Sea|Southern|Gash-Barka";
city_states["Ethiopia"] = "Addis Ababa|Adis Abeba (Addis Ababa)|Afar|Amara|Binshangul Gumuz|Dire Dawa|Gambela Hizboch|Hareri Hizb|Oromiya|Sumale (Somali)|Tigray|YeDebub Biheroch Bihereseboch...";
city_states["Gabon"] = "Libreville";
city_states["Gambia"] = "Estuaire|Haut-Ogooue|Moyen-Ogooue|Ngounie|Nyanga|Ogooue-Ivindo|Ogooue-Lolo|Ogooue-Maritime|Woleu-Ntem";
city_states["Ghana"] = "Accra|Ashanti|Brong-Ahafo|Central|Eastern|Northern|Upper East|Upper West|Volta|Western";
city_states["Guinea"] = "Conakry|Beyla|Boffa|Boke|Coyah|Dabola|Dalaba|Dinguiraye|Dubreka|Faranah|Forecariah|Fria|Gaoual|Gueckedou|Kankan|Kerouane|Kindia|Kissidougou|Koubia|Koundara|Kouroussa|Labe|Lelouma|Lola|Macenta|Mali|Mamou|Mandiana|Nzerekore|Pita|Siguiri|Telimele|Tougue|Yomou";
city_states["Guinea-Bissau"] = "Bissau|Bafata|Biombo|Bolama/Bijagos|Cacheu|Gabu|Oio|Quinara|Tombali";
city_states["Kenya"] = "Nairobi|Central|Coast|Eastern|Nairobi Area|North Eastern|Nyanza|Rift Valley|Western";
city_states["Lesotho"] = "Maseru|Berea|Butha-Buthe|Leribe|Mafeteng|Mohales Hoek|Mokhotlong|Qacha's Nek | Quthing | Thaba - Tseka ";
city_states["Liberia"] = "Monrovia|Bomi|Bong|Gparbolu|Grand Bassa|Grand Cape Mount|Grand Gedeh|Grand Kru|Lofa|Margibi|Maryland|Montserrado|Nimba|River Cess|River Gee|Sinoe";
city_states["Libya"] = "Tripoli|Ajdabiya|Al 'Aziziyah | Al Fatih | Al Jabal al Akhdar | Al Jufrah | Al Khums | Al Kufrah | An Nuqat al Khams | Ash Shati'|Awbari|Az Zawiyah|Banghazi|Darnah|Ghadamis|Gharyan|Misratah|Murzuq|Sabha|Sawfajjin|Surt|Tarabulus|Tarhunah|Tubruq|Yafran|Zlitan";
city_states["Madagascar"] = "Antananarivo|Antsiranana|Fianarantsoa|Mahajanga|Toamasina|Toliara";
city_states["Malawi"] = "Lilongwe|Balaka|Blantyre|Chikwawa|Chiradzulu|Chitipa|Dedza|Dowa|Karonga|Kasungu|Likoma|Machinga (Kasupe)|Mangochi|Mchinji|Mulanje|Mwanza|Mzimba|Ntcheu|Nkhata Bay|Nkhotakota|Nsanje|Ntchisi|Phalombe|Rumphi|Salima|Thyolo|Zomba";
city_states["Mali"] = "Bamako|Gao|Kayes|Kidal|Koulikoro|Mopti|Segou|Sikasso|Tombouctou";
city_states["Mauritania"] = "Nouakchott|Adrar|Assaba|Brakna|Dakhlet Nouadhibou|Gorgol|Guidimaka|Hodh Ech Chargui|Hodh El Gharbi|Inchiri|Tagant|Tiris Zemmour|Trarza";
city_states["Mauritius"] = "Port Louis|Agalega Islands|Black River|Cargados Carajos Shoals|Flacq|Grand Port|Moka|Pamplemousses|Plaines Wilhems|Riviere du Rempart|Rodrigues|Savanne";
city_states["Morocco"] = "Rabat|Ad Dakhla (Oued Eddahab)|Agadir|Al Hoceima|Azilal|Beni Mellal|Ben Slimane|Boujdour|Boulemane|Casablanca|Chaouen|El Jadida|El Kelaa des Sraghna|Er Rachidia|Essaouira|Es Smara|Fes|Figuig|Guelmim|Ifrane|Kenitra|Khemisset|Khenifra|Khouribga|Laayoune|Larache|Marrakech|Meknes|Nador|Ouarzazate|Oujda|Safi|Settat|Sidi Kacem|Tanger|Tan-Tan|Taounate|Taroudannt|Tata|Taza|Tetouan|Tiznit";
city_states["Mozambique"] = "Maputo|Cabo Delgado|Gaza|Inhambane|Manica|Maputo|Nampula|Niassa|Sofala|Tete|Zambezia";
city_states["Namibia"] = "Windhoek|Caprivi|Erongo|Hardap|Karas|Khomas|Kunene|Ohangwena|Okavango|Omaheke|Omusati|Oshana|Oshikoto|Otjozondjupa";
city_states["Niger"] = "Niamey|Agadez|Diffa|Dosso|Maradi|Tahoua|Tillaberi|Zinder";
city_states["Nigeria"] = "Abuja|Abia|Adamawa|Akwa Ibom|Anambra|Bauchi|Bayelsa|Benue|Borno|Cross River|Delta|Ebonyi|Edo|Ekiti|Enugu|Gombe|Imo|Jigawa|Kaduna|Kano|Katsina|Kebbi|Kogi|Kwara|Lagos|Nassarawa|Niger|Ogun|Ondo|Osun|Oyo|Plateau|Rivers|Sokoto|Taraba|Yobe|Zamfara";
city_states["Rwanda"] = "Kigali|Butare|Byumba|Cyangugu|Gikongoro|Gisenyi|Gitarama|Kibungo|Kibuye|Ruhengeri|Umutara";
city_states["Sao Tome/Principe"] = "Sao Tome|Principe";
city_states["Senegal"] = "Dakar|Diourbel|Fatick|Kaolack|Kolda|Louga|Matam|Saint-Louis|Tambacounda|Thies|Ziguinchor";
city_states["Seychelles"] = "Victoria|Anse aux Pins|Anse Boileau|Anse Etoile|Anse Louis|Anse Royale|Baie Lazare|Baie Sainte Anne|Beau Vallon|Bel Air|Bel Ombre|Cascade|Glacis|Grand'Anse(on Mahe) | Grand' Anse (on Praslin)|La Digue|La Riviere Anglaise|Mont Buxton|Mont Fleuri|Plaisance|Pointe La Rue|Port Glaud|Saint Louis|Takamaka";
city_states["Sierra Leone"] = "Freetown|Eastern|Northern|Southern|Western";
city_states["Somalia"] = "Mogadishu|Awdal|Bakool|Banaadir|Bari|Bay|Galguduud|Gedo|Hiiraan|Jubbada Dhexe|Jubbada Hoose|Mudug|Nugaal|Sanaag|Shabeellaha Dhexe|Shabeellaha Hoose|Sool|Togdheer|Woqooyi Galbeed";
city_states["South Africa"] = "Pretoria|Eastern Cape|Free State|Gauteng|KwaZulu-Natal|Mpumalanga|North-West|Northern Cape|Northern Province/Limpopo|Western Cape";
city_states["Sudan"] = "Khartoum|A'ali an Nil | Al Bahr al Ahmar | Al Buhayrat | Al Jazirah | Al Khartum | Al Qadarif | Al Wahdah | An Nil al Abyad | An Nil al Azraq | Ash Shamaliyah | Bahr al Jabal | Gharb al Istiwa'iyah|Gharb Bahr al Ghazal|Gharb Darfur|Gharb Kurdufan|Janub Darfur|Janub Kurdufan|Junqali|Kassala|Nahr an Nil|Shamal Bahr al Ghazal|Shamal Darfur|Shamal Kurdufan|Sharq al Istiwa'iyah | Sinnar | Warab ";
city_states["Swaziland"] = "Lobamba/Mbabane|Hhohho|Lubombo|Manzini|Shiselweni";
city_states["Tanzania"] = "Dodoma|Arusha|Dar es Salaam|Iringa|Kagera|Kigoma|Kilimanjaro|Lindi|Mara|Mbeya|Morogoro|Mtwara|Mwanza|Pemba North|Pemba South|Pwani|Rukwa|Ruvuma|Shinyanga|Singida|Tabora|Tanga|Zanzibar Central/South|Zanzibar North|Zanzibar Urban/West";
city_states["Togo"] = "Lome|De La Kara|Des Plateaux|Des Savanes|Centrale|Maritime";
city_states["Tunisia"] = "Tunis|Ariana|Beja|Ben Arous|Bizerte|El Kef|Gabes|Gafsa|Jendouba|Kairouan|Kasserine|Kebili|Mahdia|Medenine|Monastir|Nabeul|Sfax|Sidi Bou Zid|Siliana|Sousse|Tataouine|Tozeur|Zaghouan";
city_states["Uganda"] = "Kampala|Adjumani|Apac|Arua|Bugiri|Bundibugyo|Bushenyi|Busia|Gulu|Hoima|Iganga|Jinja|Kabale|Kabarole|Kaberamaido|Kalangala|Kamuli|Kamwenge|Kanungu|Kapchorwa|Kasese|Katakwi|Kayunga|Kibale|Kiboga|Kisoro|Kitgum|Kotido|Kumi|Kyenjojo|Lira|Luwero|Masaka|Masindi|Mayngc|Mbale|Mbarara|Moroto|Moyo|Mpigi|Mubende|Mukono|Nakapiripiti|Nakasongola|Nebbi|Ntungamo|Pader|Pallisa|Rakai|Rukungiri|Sembabule|Sironko|Soroti|Tororo|Wakiso|Yumbe";
city_states["Zambia"] = "Lusaka|Central|Copperbelt|Eastern|Luapula|Lusaka|Northern|North-Western|Southern|Western";
city_states["Zimbabwe"] = "Harare|Bulawayo|Manicaland|Mashonaland Central|Mashonaland East|Mashonaland West|Masvingo|Matabeleland North|Matabeleland South|Midlands"; //Asia

city_states["Bangladesh"] = "Dhaka|Barisal|Chittagong|Khulna|Rajshahi|Sylhet";
city_states["Bhutan"] = "Thimphu|Bumthang|Chhukha|Chirang|Dagana|Gasa|Geylegphug|Ha|Lhuntshi|Mongar|Paro|Pemagatsel|Punakha|Samchi|Samdrup Jongkhar|Shemgang|Tashigang|Tongsa|Wangdi Phodrang|Yangtse";
city_states["Brunei"] = "Bandar Seri Begawan|Belait|Brunei/Muara|Temburong|Tutong";
city_states["Burma (Myanmar)"] = "Rangoon|Ayeyarwady|Bago|Chin|Kachin|Kayin|Kayah|Magway|Mandalay|Mon|Rakhine|Sagaing|Shan|Tanintharyi|Yangon";
city_states["Cambodia"] = "Phnom Penh|Banteay Mean Cheay|Batdambang|Kampong Cham|Kampong Chhnang|Kampong Spoe|Kampong Thum|Kampot|Kandal|Kaoh Kong|Keb|Kracheh|Mondol Kiri|Otdar Mean Cheay|Pailin|Pouthisat|Preah Seihanu (Sihanoukville)|Preah Vihear|Prey Veng|Rotanah Kiri|Siem Reab|Stoeng Treng|Svay Rieng|Takev";
city_states["China"] = "Beijing|Anhui|Chongqing|Fujian|Gansu|Guangdong|Guangxi|Guizhou|Hainan|Hebei|Heilongjiang|Henan|Hubei|Hunan|Jiangsu|Jiangxi|Jilin|Liaoning|Nei Mongol|Ningxia|Qinghai|Shaanxi|Shandong|Shanghai|Shanxi|Sichuan|Tianjin|Xinjiang|Xizang (Tibet)|Yunnan|Zhejiang";
city_states["East Timor"] = "Dili|Aileu|Ainaro|Baucau|Bobonaro (Maliana)|Cova-Lima (Suai)|Ermera|Lautem (Los Palos)|Liquica|Manatuto|Manufahi (Same)|Oecussi (Ambeno)|Viqueque";
city_states["India"] = "New Delhi|Andaman/Nicobar Islands|Andhra Pradesh|Arunachal Pradesh|Assam|Bihar|Chandigarh|Chhattisgarh|Dadra/Nagar Haveli|Daman/Diu|Goa|Gujarat|Haryana|Himachal Pradesh|Jammu/Kashmir|Jharkhand|Karnataka|Kerala|Lakshadweep|Madhya Pradesh|Maharashtra|Manipur|Meghalaya|Mizoram|Nagaland|Orissa|Pondicherry|Punjab|Rajasthan|Sikkim|Tamil Nadu|Tripura|Uttaranchal|Uttar Pradesh|West Bengal";
city_states["Indonesia"] = "Jakarta|Aceh|Bali|Banten|Bengkulu|Gorontalo|Jakarta Raya|Jambi|Jawa Barat|Jawa Tengah|Jawa Timur|Kalimantan Barat|Kalimantan Selatan|Kalimantan Tengah|Kalimantan Timur|Kepulauan Bangka Belitung|Lampung|Maluku|Maluku Utara|Nusa Tenggara Barat|Nusa Tenggara Timur|Papua|Riau|Sulawesi Selatan|Sulawesi Tengah|Sulawesi Tenggara|Sulawesi Utara|Sumatera Barat|Sumatera Selatan|Sumatera Utara|Yogyakarta";
city_states["Japan"] = "Tokyo|Aichi|Akita|Aomori|Chiba|Ehime|Fukui|Fukuoka|Fukushima|Gifu|Gumma|Hiroshima|Hokkaido|Hyogo|Ibaraki|Ishikawa|Iwate|Kagawa|Kagoshima|Kanagawa|Kochi|Kumamoto|Kyoto|Mie|Miyagi|Miyazaki|Nagano|Nagasaki|Nara|Niigata|Oita|Okayama|Okinawa|Osaka|Saga|Saitama|Shiga|Shimane|Shizuoka|Tochigi|Tokushima|Tokyo|Tottori|Toyama|Wakayama|Yamagata|Yamaguchi|Yamanashi";
city_states["Kazakhstan"] = "Astana|Almaty|Almaty|Aqmola|Aqtobe|Astana|Atyrau|Batys Qazaqstan|Bayqongyr|Mangghystau|Ongtustik Qazaqstan|PavLodar|Qaraghandy|Qostanay|Qyzylorda|Shyghys Qazaqstan|Soltustik Qazaqstan|Zhambyl";
city_states["Korea (north)"] = "P'yongyang | Chagang - do |Hamgyong - bukto | Hamgyong - namdo | Hwanghae - bukto | Hwanghae - namdo | Kaesong - si | Kangwon - do |Najin Sonbong - si | Namp'o-si|P'yongan -bukto | P'yongan-namdo|P'  yongyang - si | Yanggang - do ";
city_states["Korea (south)"] = "Seoul|Cheju-do|Cholla-bukto|Cholla-namdo|Ch'ungch'ong-bukto|Ch'ungch'ong-namdo|Inch'on - gwangyoksi | Kangwon - do |Kwangju - gwangyoksi | Kyonggi - do |Kyongsang - bukto | Kyongsang - namdo | Pusan - gwangyoksi | Soul - t'ukpyolsi|Taegu-gwangyoksi|Taejon-gwangyoksi|Ulsan-gwangyoksi";
city_states["Laos"] = "Vientiane|Attapu|Bokeo|Bolikhamxai|Champasak|Houaphan|Khammouan|Louangnamtha|Louangphabang|Oudomxai|Phongsali|Salavan|Savannakhet|Viangchan|Viangchan|Xaignabouli|Xaisomboun|Xekong|Xiangkhoang";
city_states["Malaysia"] = "Kuala Lumpur|Johor|Kedah|Kelantan|Labuan|Melaka|Negeri Sembilan|Pahang|Perak|Perlis|Pulau Pinang|Putrajaya|Sabah|Sarawak|Selangor|Terengganu|Wilayah Persekutuan";
city_states["Maldives"] = "Maale|Alifu|Baa|Dhaalu|Faafu|Gaafu Alifu|Gaafu Dhaalu|Gnaviyani|Haa Alifu|Haa Dhaalu|Kaafu|Laamu|Lhaviyani|Meemu|Noonu|Raa|Seenu|Shaviyani|Thaa|Vaavu";
city_states["Mongolia"] = "Ulaanbaatar|Arhangay|Bayanhongor|Bayan-Olgiy|Bulgan|Darhan Uul|Dornod|Dornogovi|Dundgovi|Dzavhan|Govi-Altay|Govi-Sumber|Hentiy|Hovd|Hovsgol|Omnogovi|Orhon|Ovorhangay|Selenge|Suhbaatar|Tov|Uvs";
city_states["Nepal"] = "Kathmandu|Bagmati|Bheri|Dhawalagiri|Gandaki|Janakpur|Karnali|Kosi|Lumbini|Mahakali|Mechi|Narayani|Rapti|Sagarmatha|Seti";
city_states["Philippines"] = "Manila|Oriental|North Cotabato|Northern Samar|Nueva Ecija|Nueva Vizcaya|Olongapo|Ormoc|Oroquieta|Ozamis|Pagadian|Palawan|Palayan|Pampanga|Pangasinan|Pasay|Puerto Princesa|Quezon|Quezon City|Quirino|Rizal|Romblon|Roxas|Samar|San Carlos (Negros Occidental)|San Carlos (Pangasinan)|San Jose|San Pablo|Silay|Siquijor|Sorsogon|South Cotabato|Southern Leyte|Sultan Kudarat|Sulu|Surigao|Surigao del Norte|Surigao del Sur|Tacloban|Tagaytay|Tagbilaran|Tangub|Tarlac|Tawi-Tawi|Toledo|Trece Martires|Zambales|Zamboanga|Zamboanga del Norte|Zamboanga del Sur";
city_states["Russian Federation"] = "Moskva (Moscow)|Adygeya (Maykop)|Aginskiy Buryatskiy (Aginskoye)|Altay (Gorno-Altaysk)|Altayskiy (Barnaul)|Amurskaya (Blagoveshchensk)|Arkhangel'skaya | Astrakhanskaya | Bashkortostan(Ufa) | Belgorodskaya | Bryanskaya | Buryatiya(Ulan - Ude) | Chechnya(Groznyy) | Chelyabinskaya | Chitinskaya | Chukotskiy(Anadyr')|Chuvashiya (Cheboksary)|Dagestan (Makhachkala)|Evenkiyskiy (Tura)|Ingushetiya (Nazran') | Irkutskaya | Ivanovskaya | Kabardino - Balkariya(Nal'chik)|Kaliningradskaya|Kalmykiya (Elista)|Kaluzhskaya|Kamchatskaya (Petropavlovsk-Kamchatskiy)|Karachayevo-Cherkesiya (Cherkessk)|Kareliya (Petrozavodsk)|Kemerovskaya|Khabarovskiy|Khakasiya (Abakan)|Khanty-Mansiyskiy (Khanty-Mansiysk)|Kirovskaya|Komi (Syktyvkar)|Koryakskiy (Palana)|Kostromskaya|Krasnodarskiy|Krasnoyarskiy|Kurganskaya|Kurskaya|Leningradskaya|Lipetskaya|Magadanskaya|Mariy-El (Yoshkar-Ola)|Mordoviya (Saransk)|Moskovskaya|Murmanskaya|Nenetskiy (Nar'yan - Mar) | Nizhegorodskaya | Novgorodskaya | Novosibirskaya | Omskaya | Orenburgskaya | Orlovskaya(Orel) | Penzenskaya | Permskaya | Komi - Permyatskiy(Kudymkar) | Primorskiy(Vladivostok) | Pskovskaya | Rostovskaya | Ryazanskaya | Sakha(Yakutiya) | Sakhalinskaya(Yuzhno - Sakhalinsk) | Samarskaya | Sankt - Peterburg(Saint Petersburg) | Saratovskaya | Severnaya Osetiya - Alaniya[North Ossetia](Vladikavkaz) | Smolenskaya | Stavropol'skiy|Sverdlovskaya (Yekaterinburg)|Tambovskaya|Tatarstan (Kazan') | Taymyrskiy(Dudinka) | Tomskaya | Tul'skaya|Tverskaya|Tyumenskaya|Tyva (Kyzyl)|Udmurtiya (Izhevsk)|Ul'yanovskaya | Ust'-Ordynskiy Buryatskiy (Ust' - Ordynskiy) | Vladimirskaya | Volgogradskaya | Vologodskaya | Voronezhskaya | Yamalo - Nenetskiy(Salekhard) | Yaroslavskaya | Yevreyskaya ";
city_states["Singapore"] = "";
city_states["Sri Lanka"] = "Colombo|Central|North Central|Northern|Eastern|North Western|Sabaragamuwa|Southern|Uva|Western";
city_states["Taiwan"] = "Taipei|Chang-hua|Chia-i|Chi-lung|Chung-hsing-hsin-ts'un | Hsin - chu | Hua - lien | I - lan | Kao - hsiung | Miao - li | Nan - t'ou|P'eng - hu | P'ing-tung|T'ai - chung | T'ai-nan|T'ai - pei | T'ai-tung|T'ao - yuan / Yun - lin ";
city_states["Thailand"] = "Bangkok|Amnat Charoen|Ang Thong|Buriram|Chachoengsao|Chai Nat|Chaiyaphum|Chanthaburi|Chiang Mai|Chiang Rai|Chon Buri|Chumphon|Kalasin|Kamphaeng Phet|Kanchanaburi|Khon Kaen|Krabi|Lampang|Lamphun|Loei|Lop Buri|Mae Hong Son|Maha Sarakham|Mukdahan|Nakhon Nayok|Nakhon Pathom|Nakhon Phanom|Nakhon Ratchasima|Nakhon Sawan|Nakhon Si Thammarat|Nan|Narathiwat|Nong Bua Lamphu|Nong Khai|Nonthaburi|Pathum Thani|Pattani|Phangnga|Phatthalung|Phayao|Phetchabun|Phetchaburi|Phichit|Phitsanulok|Phra Nakhon Si Ayutthaya|Phrae|Phuket|Prachin Buri|Prachuap Khiri Khan|Ranong|Ratchaburi|Rayong|Roi Et|Sa Kaeo|Sakon Nakhon|Samut Prakan|Samut Sakhon|Samut Songkhram|Sara Buri|Satun|Sing";
city_states["Vietnam"] = "Hanoi|An Giang|Bac Giang|Bac Kan|Bac Lieu|Bac Ninh|Ba Ria-Vung Tau|Ben Tre|Binh Dinh|Binh Duong|Binh Phuoc|Binh Thuan|Ca Mau|Can Tho|Cao Bang|Dac Lak|Da Nang|Dong Nai|Dong Thap|Gia Lai|Ha Giang|Hai Duong|Hai Phong|Ha Nam|Ha Noi|Ha Tay|Ha Tinh|Hoa Binh|Ho Chi Minh|Hung Yen|Khanh Hoa|Kien Giang|Kon Tum|Lai Chau|Lam Dong|Lang Son|Lao Cai|Long An|Nam Dinh|Nghe An|Ninh Binh|Ninh Thuan|Phu Tho|Phu Yen|Quang Binh|Quang Nam|Quang Ngai|Quang Ninh|Quang Tri|Soc Trang|Son La|Tay Ninh|Thai Binh|Thai Nguyen|Thanh Hoa|Thua Thien-Hue|Tien Giang|Tra Vinh|Tuyen Quang|Vinh Long|Vinh Phuc|Yen Bai"; //Australia-Oceania

city_states["Australia"] = "Canberra|Australian Capital Territory|New South Wales|Northern Territory|Queensland|South Australia|Tasmania|Victoria|Western Australia";
city_states["Fiji"] = "Suva|Central|Eastern|Northern|Rotuma|Western";
city_states["Kiribati"] = "Tarawa|Abaiang|Abemama|Aranuka|Arorae|Banaba|Beru|Butaritari|Gilberts (Central)|Gilberts (Northern)|Gilberts (Southern)|Kanton|Kiritimati|Kuria|Line Islands|Maiana|Makin|Marakei|Nikunau|Nonouti|Onotoa|Phoenix Islands|Tabiteuea|Tabuaeran|Tamana|Teraina";
city_states["Micronesia"] = "Palikir|Chuuk (Truk)|Kosrae|Pohnpei|Yap";
city_states["Nauru"] = "Yaren|Aiwo|Anabar|Anetan|Anibare|Baiti|Boe|Buada|Denigomodu|Ewa|Ijuw|Meneng|Nibok|Uaboe";
city_states["New Zealand"] = "Wellington|Akaroa|Amuri|Ashburton|Auckland|Banks Peninsula|Bay of Islands|Bay of Plenty|Bruce|Buller|Canterbury|Carterton|Chatham Islands|Cheviot|Christchurch|Clifton|Clutha|Cook|Dannevirke|Dunedin|Egmont|Eketahuna|Ellesmere|Eltham|Eyre|Far North|Featherston|Franklin|Gisborne|Golden Bay|Gore|Great Barrier Island|Grey|Hamilton|Hastings|Hauraki Plains|Hawera|Hawke's Bay | Heathcote | Hikurangi | Hobson | Hokianga | Horowhenua | Hurunui | Hutt | Inangahua | Inglewood | Invercargill | Kaikoura | Kaipara | Kairanga | Kapiti Coast | Kawerau | Kiwitea | Lake | Mackenzie | Malvern | Manaia | Manawatu | Mangonui | Maniototo | Manukau | Marlborough | Masterton | Matamata | Matamata Piako | Mount Herbert | Napier | Nelson | Nelson | New Plymouth | Northland | North Shore | Ohinemuri | Opotiki | Oroua | Otago | Otamatea | Otorohanga | Oxford | Palmerston North | Pahiatua | Papakura | Paparua | Patea | Piako | Pohangina | Porirua | Queenstown Lakes | Raglan | Rangiora | Rangitikei | Rodney | Rotorua | Ruapehu | Runanga | Saint Kilda | Selwyn | Silverpeaks | Southland | South Taranaki | South Waikato | South Wairarapa | Stewart Island | Stratford | Strathallan | Taranaki | Tararua | Tasman | Taumarunui | Taupo | Tauranga | Thames Coromandel | Timaru | Tuapeka | Upper Hutt | Vincent | Waiapu | Waiheke | Waihemo | Waikato | Waikohu | Waimairi | Waimarino | Waimate | Waimate West | Waimea | Waipa | Waipawa | Waipukurau | Wairarapa South | Wairewa | Wairoa | Waitakere | Waitaki | Waitomo | Waitotara | Wallace | Wanganui | Wanganui - Manawatu | Waverley | West Coast | Western Bay of Plenty | Westland | Whakatane | Whangarei | Whangaroa | Woodville ";
city_states["Palau"] = "Koror|Aimeliik|Airai|Angaur|Hatobohei|Kayangel|Melekeok|Ngaraard|Ngarchelong|Ngardmau|Ngatpang|Ngchesar|Ngeremlengui|Ngiwal|Peleliu|Sonsoral";
city_states["Papua New Guinea"] = "Port Moresby|Bougainville|Central|Chimbu|Eastern Highlands|East New Britain|East Sepik|Enga|Gulf|Madang|Manus|Milne Bay|Morobe|National Capital|New Ireland|Northern|Sandaun|Southern Highlands|Western|Western Highlands|West New Britain";
city_states["Samoa"] = "Apia|A'ana | Aiga - i - le - Tai | Atua | Fa'asaleleaga|Gaga'emauga | Gagaifomauga | Palauli | Satupa'itea|Tuamasaga|Va'a - o - Fonoti | Vaisigano ";
city_states["Tonga"] = "Nuku'alofa | Ha'apai|Tongatapu|Vava'u ";
city_states["Tuvalu"] = "Fongafale";
city_states["Vanuatu"] = "Port-Vila|Malampa|Penama|Sanma|Shefa|Tafea|Torba"; //Caribbean

city_states["Anguilla"] = "The Valley";
city_states["Antigua/Barbuda"] = "Saint John|Barbuda|Redonda|Saint George|Saint Mary|Saint Paul|Saint Peter|Saint Philip";
city_states["Aruba"] = "Oranjestad";
city_states["Bahamas"] = "Nassau|Acklins/Crooked Islands|Bimini|Cat Island|Exuma|Freeport|Fresh Creek|Governor's Harbour | Green Turtle Cay | Harbour Island | High Rock | Inagua | Kemps Bay | Long Island | Marsh Harbour | Mayaguana | New Providence | Nichollstown / Berry Islands | Ragged Island | Rock Sound | Sandy Point | San Salvador / Rum Cay ";
city_states["Barbados"] = "Bridgetown|Christ Church|Saint Andrew|Saint George|Saint James|Saint John|Saint Joseph|Saint Lucy|Saint Michael|Saint Peter|Saint Philip|Saint Thomas";
city_states["Cuba"] = "Havana|Camaguey|Ciego de Avila|Cienfuegos|Ciudad de La Habana|Granma|Guantanamo|Holguin|Isla de la Juventud|La Habana|Las Tunas|Matanzas|Pinar del Rio|Sancti Spiritus|Santiago de Cuba|Villa Clara";
city_states["Dominica"] = "Roseau|Saint Andrew|Saint David|Saint George|Saint John|Saint Joseph|Saint Luke|Saint Mark|Saint Patrick|Saint Paul|Saint Peter";
city_states["Dominican Republic"] = "|anto Domingo|Azua|Baoruco|Barahona|Dajabon|Distrito Nacional|Duarte|Elias Pina|El Seibo|Espaillat|Hato Mayor|Independencia|La Altagracia|La Romana|La Vega|Maria Trinidad Sanchez|Monsenor Nouel|Monte Cristi|Monte Plata|Pedernales|Peravia|Puerto Plata|Salcedo|Samana|Sanchez Ramirez|San Cristobal|San Juan|San Pedro de Macoris|Santiago|Santiago Rodriguez|Valverde";
city_states["Grenada"] = "Saint George's | Carriacou / Petit Martinique | Saint Andrew | Saint David | Saint John | Saint Mark | Saint Patrick ";
city_states["Guadeloupe"] = "Basse-Terre";
city_states["Haiti"] = "Port-au-Prince|Artibonite|Centre|Grand 'Anse | Nord | Nord - Est | Nord - Ouest | Ouest | Sud | Sud - Est ";
city_states["Jamaica"] = "Kingston|Clarendon|Hanover|Manchester|Portland|Saint Andrew|Saint Ann|Saint Catherine|Saint Elizabeth|Saint James|Saint Mary|Saint Thomas|Trelawny|Westmoreland";
city_states["Martinique"] = "Fort-de-France";
city_states["Montserrat"] = "Brades Estate|Plymouth|Saint Anthony|Saint Georges|Saint Peter";
city_states["Netherlands Antilles"] = "Willemstad";
city_states["Puerto Rico"] = "San Juan|Adjuntas|Aguada|Aguadilla|Aguas Buenas|Aibonito|Anasco|Arecibo|Arroyo|Barceloneta|Barranquitas|Bayamon|Cabo Rojo|Caguas|Camuy|Canovanas|Carolina|Catano|Cayey|Ceiba|Ciales|Cidra|Coamo|Comerio|Corozal|Culebra|Dorado|Fajardo|Florida|Guanica|Guayama|Guayanilla|Guaynabo|Gurabo|Hatillo|Hormigueros|Humacao|Isabela|Jayuya|Juana Diaz|Juncos|Lajas|Lares|Las Marias|Las Piedras|Loiza|Luquillo|Manati|Maricao|Maunabo|Mayaguez|Moca|Morovis|Naguabo|Naranjito|Orocovis|Patillas|Penuelas|Ponce|Quebradillas|Rincon|Rio Grande|Sabana Grande|Salinas|San German|San Lorenzo|San Sebastian|Santa Isabel|Toa Alta|Toa Baja|Trujillo Alto|Utuado|Vega Alta|Vega Baja|Vieques|Villalba|Yabucoa|Yauco";
city_states["St. Barts"] = "";
city_states["St. Kitts/Nevis"] = "Basseterre|Christ Church Nichola Town|St. Anne Sandy Point|St. George Basseterre|St. George Gingerland|St. James Windward|St. John Capesterre|St. John Figtree|St. Mary Cayon|St. Paul Capesterre|St. Paul Charlestown|St. Peter Basseterre|St. Thomas Lowland|St. Thomas Middle Island|Trinity Palmetto Point";
city_states["St. Lucia"] = "Castries|Anse-la-Raye|Castries|Choiseul|Dauphin|Dennery|Gros-Islet|Laborie|Micoud|Praslin|Soufriere|Vieux-Fort";
city_states["St. Martin/Sint Maarten"] = "";
city_states["St Vincent/Grenadines"] = "|Kingstown|Charlotte|Grenadines|Saint Andrew|Saint David|Saint George|Saint Patrick";
city_states["San Andres"] = "";
city_states["Trinidad/Tobago"] = "Port-of-Spain|Arima|Caroni|Mayaro|Nariva|Saint Andrew|Saint David|Saint George|Saint Patrick|San Fernando|Tobago|Victoria";
city_states["Turks and Caicos Islands"] = "Grand Turk (Cockburn Town)";
city_states["Virgin Islands"] = "Charlotte Amalie"; //Central America

city_states["Belize"] = "Belmopan|Belize|Cayo|Corozal|Orange Walk|Stann Creek|Toledo";
city_states["Costa Rica"] = "San Jose|Alajuela|Cartago|Guanacaste|Heredia|Limon|Puntarenas";
city_states["El Salvador"] = "San Salvador|Ahuachapan|Cabanas|Chalatenango|Cuscatlan|La Libertad|La Paz|La Union|Morazan|San Miguel|Santa Ana|San Vicente|Sonsonate|Usulutan";
city_states["Guatemala"] = "Guatemala|Alta Verapaz|Baja Verapaz|Chimaltenango|Chiquimula|El Progreso|Escuintla|Guatemala|Huehuetenango|Izabal|Jalapa|Jutiapa|Peten|Quetzaltenango|Quiche|Retalhuleu|Sacatepequez|San Marcos|Santa Rosa|Solola|Suchitepequez|Totonicapan|Zacapa";
city_states["Honduras"] = "Tegucigalpa|Atlantida|Choluteca|Colon|Comayagua|Copan|Cortes|El Paraiso|Francisco Morazan|Gracias a Dios|Intibuca|Islas de la Bahia|La Paz|Lempira|Ocotepeque|Olancho|Santa Barbara|Valle|Yoro";
city_states["Nicaragua"] = "Managua|Boaco|Carazo|Chinandega|Chontales|Esteli|Granada|Jinotega|Leon|Madriz|Managua|Masaya|Matagalpa|Nueva Segovia|Rio San Juan|Rivas|Atlantico Norte|Atlantico Sur";
city_states["Panama"] = "|Panama|Bocas del Toro|Chiriqui|Cocle|Colon|Darien|Herrera|Los Santos|San Blas|Veraguas"; //Europe

city_states["Albania"] = "Tirana|Berat|Bulqize|Delvine|Devoll|Diber|Durres|Elbasan|Fier|Gjirokaster|Gramsh|Has|Kavaje|Kolonje|Korce|Kruje|Kucove|Kukes|Kurbin|Lezhe|Librazhd|Lushnje|Malesi e Madhe|Mallakaster|Mat|Mirdite|Peqin|Permet|Pogradec|Puke|Sarande|Shkoder|Skrapar|Tepelene|Tirane|Tropoje|Vlore";
city_states["Andorra"] = "Andorra la Vella|Canillo|Encamp|La Massana|Escaldes-Engordany|Ordino|Sant Julia de Loria";
city_states["Austria"] = "Vienna|Burgenland|Kaernten|Niederoesterreich|Oberoesterreich|Salzburg|Steiermark|Tirol|Vorarlberg|Wien";
city_states["Belarus"] = "Minsk|Brest|Homyel' | Horad Minsk | Hrodna | Mahilyow | Vitsyebsk ";
city_states["Belgium"] = "Brussels|Antwerpen|Brabant Wallon|Brussels (Bruxelles)|Hainaut|Liege|Limburg|Luxembourg|Namur|Oost-Vlaanderen|Vlaams-Brabant|West-Vlaanderen";
city_states["Bosnia/Herzegovina"] = "Sarajevo";
city_states["Bulgaria"] = "Sofiya|Blagoevgrad|Burgas|Dobrich|Gabrovo|Khaskovo|Kurdzhali|Kyustendil|Lovech|Montana|Pazardzhik|Pernik|Pleven|Plovdiv|Razgrad|Ruse|Shumen|Silistra|Sliven|Smolyan|Sofiya-Grad|Stara Zagora|Turgovishte|Varna|Veliko Turnovo|Vidin|Vratsa|Yambol";
city_states["Croatia"] = "Zagreb|Bjelovarsko-Bilogorska|Brodsko-Posavska|Dubrovacko-Neretvanska|Istarska|Karlovacka|Koprivnicko-Krizevacka|Krapinsko-Zagorska|Licko-Senjska|Medimurska|Osjecko-Baranjska|Pozesko-Slavonska|Primorsko-Goranska|Sibensko-Kninska|Sisacko-Moslavacka|Splitsko-Dalmatinska|Varazdinska|Viroviticko-Podravska|Vukovarsko-Srijemska|Zadarska|Zagrebacka";
city_states["Czech Republic"] = "Prague (Praha)|Jihocesky|Jihomoravsky|Karlovarsky|Kralovehradecky|Liberecky|Moravskoslezsky|Olomoucky|Pardubicky|Plzensky|Stredocesky|Ustecky|Vysocina|Zlinsky";
city_states["Denmark"] = "Copenhagen (Kobenhavn)|Arhus|Bornholm|Fredericksberg|Frederiksborg|Fyn|Kobenhavns|Nordjylland|Ribe|Ringkobing|Roskilde|Sonderjylland|Storstrom|Vejle|Vestsjalland|Viborg";
city_states["Estonia"] = "Harjumaa (Tallinn)|Hiiumaa (Kardla)|Ida-Virumaa (Johvi)|Jarvamaa (Paide)|Jogevamaa (Jogeva)|Laanemaa (Haapsalu)|Laane-Virumaa (Rakvere)|Parnumaa (Parnu)|Polvamaa (Polva)|Raplamaa (Rapla)|Saaremaa (Kuressaare)|Tartumaa (Tartu)|Valgamaa (Valga)|Viljandimaa (Viljandi)|Vorumaa (Voru)";
city_states["Finland"] = "Helsinki|Aland|Etela-Suomen Laani|Ita-Suomen Laani|Lansi-Suomen Laani|Lappi|Oulun Laani";
city_states["France"] = "Paris|Alsace|Aquitaine|Auvergne|Basse-Normandie|Bourgogne|Bretagne|Centre|Champagne-Ardenne|Corse|Franche-Comte|Haute-Normandie|Ile-de-France|Languedoc-Roussillon|Limousin|Lorraine|Midi-Pyrenees|Nord-Pas-de-Calais|Pays de la Loire|Picardie|Poitou-Charentes|Provence-Alpes-Cote d'Azur | Rhone - Alpes ";
city_states["Georgia"] = "T'bilisi | Bat'umi|Chiat'ura | Gori | Guria | Imereti | Kakheti | K'ut'aisi | Kvemo Kartli | Mtskheta - Mtianeti | P'ot'i | Racha - Lechkhumi / Kvemo Svaneti | Rust'avi|Samegrelo/Zemo Svaneti|Samtskhe-Javakheti|Shida Kartli|Sokhumi|Tqibuli|Tsqaltubo|Zugdidi";
city_states["Germany"] = "Berlin|Baden-Wuerttemberg|Bayern|Berlin|Brandenburg|Bremen|Hamburg|Hessen|Mecklenburg-Vorpommern|Niedersachsen|Nordrhein-Westfalen|Rheinland-Pfalz|Saarland|Sachsen|Sachsen-Anhalt|Schleswig-Holstein|Thueringen";
city_states["Greece"] = "Athens|Agion Oros (Mt. Athos)|Achaia|Aitolia kai Akarmania|Argolis|Arkadia|Arta|Attiki|Chalkidiki|Chanion|Chios|Dodekanisos|Drama|Evros|Evrytania|Evvoia|Florina|Fokidos|Fthiotis|Grevena|Ileia|Imathia|Ioannina|Irakleion|Karditsa|Kastoria|Kavala|Kefallinia|Kerkyra|Kilkis|Korinthia|Kozani|Kyklades|Lakonia|Larisa|Lasithi|Lefkas|Lesvos|Magnisia|Messinia|Pella|Pieria|Preveza|Rethynnis|Rodopi|Samos|Serrai|Thesprotia|Thessaloniki|Trikala|Voiotia|Xanthi|Zakynthos";
city_states["Hungary"] = "Budapest|Bacs-Kiskun|Baranya|Bekes|Bekescsaba|Borsod-Abauj-Zemplen|Csongrad|Debrecen|Dunaujvaros|Eger|Fejer|Gyor|Gyor-Moson-Sopron|Hajdu-Bihar|Heves|Hodmezovasarhely|Jasz-Nagykun-Szolnok|Kaposvar|Kecskemet|Komarom-Esztergom|Miskolc|Nagykanizsa|Nograd|Nyiregyhaza|Pecs|Pest|Somogy|Sopron|Szabolcs-Szatmar-Bereg|Szeged|Szekesfehervar|Szolnok|Szombathely|Tatabanya|Tolna|Vas|Veszprem|Veszprem|Zala|Zalaegerszeg";
city_states["Iceland"] = "Reykjavik|Akranes|Akureyri|Arnessysla|Austur-Bardhastrandarsysla|Austur-Hunavatnssysla|Austur-Skaftafellssysla|Borgarfjardharsysla|Dalasysla|Eyjafjardharsysla|Gullbringusysla|Hafnarfjordhur|Husavik|Isafjordhur|Keflavik|Kjosarsysla|Kopavogur|Myrasysla|Neskaupstadhur|Nordhur-Isafjardharsysla|Nordhur-Mulasys-la|Nordhur-Thingeyjarsysla|Olafsfjordhur|Rangarvallasysla|Saudharkrokur|Seydhisfjordhur|Siglufjordhur|Skagafjardharsysla|Snaefellsnes-og Hnappadalssysla|Strandasysla|Sudhur-Mulasysla|Sudhur-Thingeyjarsysla|Vesttmannaeyjar|Vestur-Bardhastrandarsysla|Vestur-Hunavatnssysla|Vestur-Isafjardharsysla|Vestur-Skaftafellssysla";
city_states["Ireland"] = "Dublin|Carlow|Cavan|Clare|Cork|Donegal|Galway|Kerry|Kildare|Kilkenny|Laois|Leitrim|Limerick|Longford|Louth|Mayo|Meath|Monaghan|Offaly|Roscommon|Sligo|Tipperary|Waterford|Westmeath|Wexford|Wicklow";
city_states["Italy"] = "Rome|Abruzzi|Basilicata|Calabria|Campania|Emilia-Romagna|Friuli-Venezia Giulia|Lazio|Liguria|Lombardia|Marche|Molise|Piemonte|Puglia|Sardegna|Sicilia|Toscana|Trentino-Alto Adige|Umbria|Valle d'Aosta | Veneto ";
city_states["Latvia"] = "Riga|Aizkraukles|Aluksnes|Balvu|Bauskas|Cesu|Daugavpils|Daugavpils|Dobeles|Gulbenes|Jekabpils|Jelgava|Jelgavas|Jurmala|Kraslavas|Kuldigas|Liepaja|Liepajas|Limbazu|Ludzas|Madonas|Ogres|Preilu|Rezekne|Rezeknes|Riga|Rigas|Saldus|Talsu|Tukuma|Valkas|Valmieras|Ventspils|Ventspils";
city_states["Liechtenstein"] = "Vaduz|Balzers|Eschen|Gamprin|Mauren|Planken|Ruggell|Schaan|Schellenberg|Triesen|Triesenberg";
city_states["Lithuania"] = "Vilnius|Alytaus|Kauno|Klaipedos|Marijampoles|Panevezio|Siauliu|Taurages|Telsiu|Utenos";
city_states["Luxembourg"] = "Luxembourg|Diekirch|Grevenmacher";
city_states["Macedonia"] = "Skopje|Aracinovo|Bac|Belcista|Berovo|Bistrica|Bitola|Blatec|Bogdanci|Bogomila|Bogovinje|Bosilovo|Brvenica|Cair|Capari|Caska|Cegrane|Centar|Centar Zupa|Cesinovo|Cucer-Sandevo|Debar|Delcevo|Delogozdi|Demir Hisar|Demir Kapija|Dobrusevo|Dolna Banjica|Dolneni|Dorce Petrov|Drugovo|Dzepciste|Gazi Baba|Gevgelija|Gostivar|Gradsko|Ilinden|Izvor|Jegunovce|Kamenjane|Karbinci|Karpos|Kavadarci|Kicevo|Kisela Voda|Klecevce|Kocani|Konce|Kondovo|Konopiste|Kosel|Kratovo|Kriva Palanka|Krivogastani|Krusevo|Kuklis|Kukurecani|Kumanovo|Labunista|Lipkovo|Lozovo|Lukovo|Makedonska Kamenica|Makedonski Brod|Mavrovi Anovi|Meseista|Miravci|Mogila|Murtino|Negotino|Negotino-Polosko|Novaci|Novo Selo|Oblesevo|Ohrid|Orasac|Orizari|Oslomej|Pehcevo|Petrovec|Plasnica|Podares|Prilep|Probistip|Radovis|Rankovce|Resen|Rosoman|Rostusa|Samokov|Saraj|Sipkovica|Sopiste|Sopotnica|Srbinovo|Star Dojran|Staravina|Staro Nagoricane|Stip|Struga|Strumica|Studenicani|Suto Orizari|Sveti Nikole|Tearce|Tetovo|Topolcani|Valandovo|Vasilevo|Velesta|Veles|Vevcani|Vinica|Vitoliste|Vranestica|Vrapciste|Vratnica|Vrutok|Zajas|Zelenikovo|Zeleno|Zitose|Zletovo|Zrnovci";
city_states["Malta"] = "Valletta";
city_states["Moldova"] = "Chisinau|Balti|Cahul|Chisinau|Chisinau|Edinet|Gagauzia|Lapusna|Orhei|Soroca|Stinga Nistrului|Tighina|Ungheni";
city_states["Monaco"] = "Monaco|Fontvieille|La Condamine|Monaco-Ville|Monte-Carlo";
city_states["Netherlands"] = "Amsterdam|The Hague|Drenthe|Flevoland|Friesland|Gelderland|Groningen|Limburg|Noord-Brabant|Noord-Holland|Overijssel|Utrecht|Zeeland|Zuid-Holland";
city_states["Norway"] = "Oslo|Akershus|Aust-Agder|Buskerud|Finnmark|Hedmark|Hordaland|More og Romsdal|Nordland|Nord-Trondelag|Oppland|Ostfold|Rogaland|Sogn og Fjordane|Sor-Trondelag|Telemark|Troms|Vest-Agder|Vestfold";
city_states["Poland"] = "Warsaw|Dolnoslaskie|Kujawsko-Pomorskie|Lodzkie|Lubelskie|Lubuskie|Malopolskie|Mazowieckie|Opolskie|Podkarpackie|Podlaskie|Pomorskie|Slaskie|Swietokrzyskie|Warminsko-Mazurskie|Wielkopolskie|Zachodniopomorskie";
city_states["Portugal"] = "Lisbon|Aveiro|Acores (Azores)|Beja|Braga|Braganca|Castelo Branco|Coimbra|Evora|Faro|Guarda|Leiria|Lisboa|Madeira|Portalegre|Porto|Santarem|Setubal|Viana do Castelo|Vila Real|Viseu";
city_states["Romania"] = "Bucharest (Bucuresti)|Alba|Arad|Arges|Bacau|Bihor|Bistrita-Nasaud|Botosani|Braila|Brasov|Buzau|Calarasi|Caras-Severin|Cluj|Constanta|Covasna|Dimbovita|Dolj|Galati|Gorj|Giurgiu|Harghita|Hunedoara|Ialomita|Iasi|Ilfov|Maramures|Mehedinti|Mures|Neamt|Olt|Prahova|Salaj|Satu Mare|Sibiu|Suceava|Teleorman|Timis|Tulcea|Vaslui|Vilcea|Vrancea";
city_states["San Marino"] = "San Marino|Acquaviva|Borgo Maggiore|Chiesanuova|Domagnano|Faetano|Fiorentino|Monte Giardino|Serravalle";
city_states["Serbia/Montenegro (Yugoslavia)"] = "Belgrade|Kosovo|Montenegro|Serbia|Vojvodina";
city_states["Slovakia"] = "Bratislava|Banskobystricky|Kosicky|Nitriansky|Presovsky|Trenciansky|Trnavsky|Zilinsky";
city_states["Slovenia"] = "Ljubljana|Ajdovscina|Beltinci|Bled|Bohinj|Borovnica|Bovec|Brda|Brezice|Brezovica|Cankova-Tisina|Celje|Cerklje na Gorenjskem|Cerknica|Cerkno|Crensovci|Crna na Koroskem|Crnomelj|Destrnik-Trnovska Vas|Divaca|Dobrepolje|Dobrova-Horjul-Polhov Gradec|Dol pri Ljubljani|Domzale|Dornava|Dravograd|Duplek|Gorenja Vas-Poljane|Gorisnica|Gornja Radgona|Gornji Grad|Gornji Petrovci|Grosuplje|Hodos Salovci|Hrastnik|Hrpelje-Kozina|Idrija|Ig|Ilirska Bistrica|Ivancna Gorica|Izola|Jesenice|Jursinci|Kamnik|Kanal|Kidricevo|Kobarid|Kobilje|Kocevje|Komen|Koper|Kozje|Kranj|Kranjska Gora|Krsko|Kungota|Kuzma|Lasko|Lenart|Lendava|Litija|Ljubno|Ljutomer|Logatec|Loska Dolina|Loski Potok|Luce|Lukovica|Majsperk|Maribor|Medvode|Menges|Metlika|Mezica|Miren-Kostanjevica|Mislinja|Moravce|Moravske Toplice|Mozirje|Murska Sobota|Muta|Naklo|Nazarje|Nova Gorica|Novo Mesto|Odranci|Ormoz|Osilnica|Pesnica|Piran|Pivka|Podcetrtek|Podvelka-Ribnica|Postojna|Preddvor|Ptuj|Puconci|Race-Fram|Radece|Radenci|Radlje ob Dravi|Radovljica|Ravne-Prevalje|Ribnica|Rogasevci|Rogaska Slatina|Rogatec|Ruse|Semic|Sencur|Sentilj|Sentjernej|Sentjur pri Celju|Sevnica|Sezana|Skocjan|Skofja Loka|Skofljica|Slovenj Gradec|Slovenska Bistrica|Slovenske Konjice|Smarje pri Jelsah|Smartno ob Paki|Sostanj|Starse|Store|Sveti Jurij|Tolmin|Trbovlje|Trebnje|Trzic|Turnisce|Velenje|Velike Lasce|Videm|Vipava|Vitanje|Vodice|Vojnik|Vrhnika|Vuzenica|Zagorje ob Savi|Zalec|Zavrc|Zelezniki|Ziri|Zrece";
city_states["Spain"] = "Madrid|Andalucia|Aragon|Asturias|Baleares (Balearic Islands)|Ceuta|Canarias (Canary Islands)|Cantabria|Castilla-La Mancha|Castilla y Leon|Cataluna|Communidad Valencian|Extremadura|Galicia|La Rioja|Melilla|Murcia|Navarra|Pais Vasco (Basque Country)";
city_states["Sweden"] = "|Stockholm|Blekinge|Dalarnas|Gavleborgs|Gotlands|Hallands|Jamtlands|Jonkopings|Kalmar|Kronobergs|Norrbottens|Orebro|Ostergotlands|Skane|Sodermanlands|Uppsala|Varmlands|Vasterbottens|Vasternorrlands|Vastmanlands|Vastra Gotalands";
city_states["Switzerland"] = "Bern|Aargau|Appenzell Ausser-Rhoden|Appenzell Inner-Rhoden|Basel-Landschaft|Basel-Stadt|Fribourg|Geneve|Glarus|Graubunden|Jura|Luzern|Neuchatel|Nidwalden|Obwalden|Sankt Gallen|Schaffhausen|Schwyz|Solothurn|Thurgau|Ticino|Uri|Valais|Vaud|Zug|Zurich";
city_states["Ukraine"] = "Kiev (Kyyiv)|Cherkas'ka(Cherkasy) | Chernihivs'ka (Chernihiv)|Chernivets'ka(Chernivtsi) | Dnipropetrovs'ka (Dnipropetrovs'k) | Donets'ka (Donets'k) | Ivano - Frankivs'ka (Ivano-Frankivs'k) | Izmail(Izmayl) | Kharkivs'ka (Kharkiv)|Khersons'ka(Kherson) | Khmel'nyts'ka(Khmel'nyts'kyy) | Kirovohrads'ka (Kirovohrad)|Luhans'ka(Luhans'k)|L' vivs'ka (L'  viv) | Mykolayivs'ka (Mykolayiv)|Odes'ka(Odesa) | Poltavs'ka (Poltava)|Avtonomna Respublika Krym|Rivnens'ka(Rivne) | Sevastopol'|Sums'ka(Sumy) | Ternopil's'ka(Ternopil')|Vinnyts' ka(Vinnytsya) | Volyns'ka (Luts'k) | Zakarpats'ka (Uzhhorod)|Zaporiz'ka(Zaporizhzhya) | Zhytomyrs'ka (Zhytomyr)";
city_states["United Kingdom"] = "-----ENGLAND:-----|Barking/Dagenham|Barnet|Barnsley|Bath/North East Somerset|Bedfordshire|Bexley|Birmingham|Blackburn with Darwen|Blackpool|Bolton|Bournemouth|Bracknell Forest|Bradford|Brent|Brighton/Hove|City of Bristol|Bromley|Buckinghamshire|Bury|Calderdale|Cambridgeshire|Camden|Cheshire|Cornwall|Coventry|Croydon|Cumbria|Darlington|Derby|Derbyshire|Devon|Doncaster|Dorset|Dudley|Durham|Ealing|East Riding of Yorkshire|East Sussex|Enfield|Essex|Gateshead|Gloucestershire|Greenwich|Hackney|Halton|Hammersmith/Fulham|Hampshire|Haringey|Harrow|Hartlepool|Havering|Herefordshire|Hertfordshire|Hillingdon|Hounslow|Isle of Wight|Islington|Kensington/Chelsea|Kent|City of Kingston upon Hull|Kingston upon Thames|Kirklees|Knowsley|Lambeth|Lancashire|Leeds|Leicester|Leicestershire|Lewisham|Lincolnshire|Liverpool|City of London|Luton|Manchester|Medway|Merton|Middlesbrough|Milton Keynes|Newcastle upon Tyne|Newham|Norfolk|Northamptonshire|North East Lincolnshire|North Lincolnshire|North Somerset|North Tyneside|Northumberl/|North Yorkshire|Nottingham|Nottinghamshire|Oldham|Oxfordshire|Peterborough|Plymouth|Poole|Portsmouth|Reading|Redbridge|Redcar/Clevel/|Richmond upon Thames|Rochdale|Rotherham|Rutl/|Salford|Shropshire|S/well|Sefton|Sheffield|Slough|Solihull|Somerset|Southampton|Southend-on-Sea|South Gloucestershire|South Tyneside|Southwark|Staffordshire|St. Helens|Stockport|Stockton-on-Tees|Stoke-on-Trent|Suffolk|Sunderl/|Surrey|Sutton|Swindon|Tameside|Telford/Wrekin|Thurrock|Torbay|Tower Hamlets|Trafford|Wakefield|Walsall|Waltham Forest|W/sworth|Warrington|Warwickshire|West Berkshire|Westminster|West Sussex|Wigan|Wiltshire|Windsor/Maidenhead|Wirral|Wokingham|Wolverhampton|Worcestershire|York|-----NORTHERN IRELAND:-----|Antrim|County Antrim|Ards|Armagh|County Armagh|Ballymena|Ballymoney|Banbridge|Belfast|Carrickfergus|Castlereagh|Coleraine|Cookstown|Craigavon|Down|County Down|Dungannon|Fermanagh|County Fermanagh|Larne|Limavady|Lisburn|County Londonderry|Derry|Magherafelt|Moyle|Newry/Mourne|Newtownabbey|North Down|Omagh|Strabane|County Tyrone|-----SCOTLAND:-----|Aberdeen City|Aberdeenshire|Angus|Argyll/Bute|The Scottish Borders|Clackmannanshire|Dumfries/Galloway|Dundee City|East Ayrshire|East Dunbartonshire|East Lothian|East Renfrewshire|City of Edinburgh|Falkirk|Fife|Glasgow City|Highland|Inverclyde|Midlothian|Moray|North Ayrshire|North Lanarkshire|Orkney Islands|Perth/Kinross|Renfrewshire|Shetland Islands|South Ayrshire|South Lanarkshire|Stirling|West Dunbartonshire|Eilean Siar (Western Isles)|West Lothian|-----WALES-----:|Isle of Anglesey|Blaenau Gwent|Bridgend|Caerphilly|Cardiff|Ceredigion|Carmarthenshire|Conwy|Denbighshire|Flintshire|Gwynedd|Merthyr Tydfil|Monmouthshire|Neath Port Talbot|Newport|Pembrokeshire|Powys|Rhondda Cynon Taff|Swansea|Torfaen|The Vale of Glamorgan|Wrexham";
city_states["Vatican City"] = ""; //Islands

city_states["Arctic Ocean"] = "Franz Josef Land|Svalbard";
city_states["Atlantic Ocean (North)"] = "Alderney|Azores|Baixo|Belle-Ile|Bermuda|Bioko|Block|Boa Vista|Borduy|Bugio|Canary Islands|Cape Breton|Cape Verde Islands|Channel Islands|Corvo|Deer Isle|Eysturoy|Faeroe Islands|Fago|Faial|Flores|Fuerteventura|Fugloy|Gomera|Graciosa|Gran Canaria|Grand Manan|Grande|Greenland|Guernsey|Hebrides|Herm|Hestur|Hierro|Iceland|Iles De La Madeleine|Ile de Noirmoutier|Ile de'Re | Ile d' Ol‚ron|Ile d'Yeu | Ilhas Desertas | Ireland | Isle au Haut | Isle of Lewis | Isle of Mull | Isle of Skye | Jersey | Kalsoy | Koltur | Kunoy | Lanzarote | La Palma | Litla Dimun | Long Island | Jan Mayen | Madeira Islands | Maio | Martha's Vineyard|Matinicus|Monhegan|Mount Desert|Mykines|Nantucket Island|Newfoundland|Nolsoy|Orkney Islands|Pico|Porto Santo|Prince Edward Island|St. Peter/St. Paul Rocks|St.-Pierre/Miquelon|Praia|Sable Island|Sal|Sandoy|Santo Antao|Santa Maria|Sao Jorge|Sao Miguel|Sao Nicolau|Sao Tiago|Sao Tome/Principe|Sao Vicente|Sark|Scilly Isles|Shetland Islands|Skuvoy|Stora Dimun|Streymoy|Sumba|Svinoy|Swans|Tenerife|Terceira|Uist Islands|Vagar|Viday|Vinalhaven";
city_states["Atlantic Ocean (South)"] = "Amsterdam|Andaman Islands|Annobon|Ascension|Bouvet|Falkland Islands|Gough|Martin Vas Islands|Nightingale|St. Helena|Shag/Black Rocks|South Georgia|South Orkney Islands|South Sandwich Islands|Traversay|Trindade|Tristan da Cunha";
city_states["Assorted"] = "Akimiski|Aland|Alcatraz|Apostle Islands|Baffin|Banka|Banks|Beaver|Belcher Islands|Belitung|Borneo|Bornholm|Brac|Coats|Cres|Devon|East Frisian Islands|Ellesmere|Fyn|Galveston|Gotland|Groote Eylandt|Hiiumaa|Hong Kong Island|Hong Kong SAR|Ile d'Anticosti | Ile d' Orleans|Isla de Ometepe|Isla Del Ray|Isle of Man|Isle of Wight|Isle Royale|Jutland|Key Largo|Key West|King William|Krek|Langeland|Lantau|Lolland|Lundy|Mackinac|Madeleine Islands|Manhattan Island|Manitoulin|Marsh|Matagorda|Melville|North Hero|Oland|Paracel Islands|Pelee|Prince Charles|Prince of Wales|Queen Elizabeth Islands|Saaremaa|Sjaelland|Somerset|Southhampton|South Hero|Spratley Islands|Sulawesi|Victoria|Washington|Wellesley Islands";
city_states["Caribbean Sea"] = "Abaco (great)|Abaco (little)|Acklins|Andros|Anegada|Anguilla|Antigua|Aruba|Bahamas|Barbados|Barbuda|Bimini Islands|Bonaire|Caicos Islands|Cat|Cayman Brac|Cayman Islands|Cozumel|Crooked|Cuba|Curacao|Dominica|Exuma|Grand Bahama|Grand Cayman|Grand Turk|Greater Antilles|Great Inagua|Grenada|Guadeloupe|Hispaniola (Haiti/DOR)|Isla de Margarita|Isla Mujeres|Isla La Tortuga|Isle of Youth|Jamaica|Lesser Antilles|Little Cayman|Little Inagua|Long|Marie-Galante|Martinique|Mayaguana|Montserrat|Navassa|Nevis|New Providence|Providencia|Puerto Rico|Roatan|Rum Cay|St. Barts|St. Croix|St. Eustatius|St. John|St. Kitts|St. Lucia|St. Martin/Sint Maartan|St. Thomas|St Vincent and the Grenadines|Saba|San Blas Islands|San Salvador|San Andres|Santa Catilina (St. Catherine)|Tobago|Tortola|Trinidad|Virgin Gorda|West Indies";
city_states["Greek Isles"] = "Aegina|Alonissos|Amorgos|Andros|Angistri|Astipalea|Carpathos|Cephalonia|Chios (Hios)|Corfu|Cos (Kos)|Crete (Kriti)|Cyclades Islands|Dodecanese Islands|Dokos|Eubaea (Evia)|Evia|Hydra|Ikaria|Ionian Islands|Ios|Ithaca|Kea|Kefalonia|Kefalos|Kalimnos|Kassos|Kithnos|Kos|Kythnos|Kythria|Lefkada|Lemnos|Leros|Lesvos|Leucas|Limnos|Lipsi|Los|Melos|Mykonos|Naxos|Nisyros|Paros|Patmos|Poros|Pothia|Rhodes (Rodos)|Salamina|Samos|Samothrace|Santorini|Serifos|Seriphos|Sifnos|Sikinos|Skiros|Skiathos|Skopelos|Skyros|Spetses|Sporades Islands|Syros|Tenos (Tinos)|Thassos|Tzia|Zakinthos|Zante";
city_states["Indian Ocean"] = "Addu Atoll|Agalega Islands|Amsterdam|Andaman Islands|Anjouan (Nzwani)|Ari Atoll|Ashmore/Cartier Islands|Bali|Barrow|Bathurst|Bompoka|Cape Barren|Car Nicobar|Chagos Archipelago|Christmas|Comoros|Crozet Islands|Danger|Diego Garcia|Eagle Islands|Egmont Islands|Faadhippolhu Atoll|Felidhoo Atoll|Flinders|Goidhoo Atoll|Grand Comore (Njazidja)|Great Nicobar|Hadhdhunmathee|Heard|Huvadhoo Atoll|Ihavandhippolhu Atoll|Java|Kangaroo|Katchall|Keeling Islands (Cocos)|King|Kolhumadulu Atoll|Lakshadweep Islands|Little Andaman|Little Nicobar|Lower Andaman|Maalhosmadulu Atoll|Maamakunudhoo Atoll|Madagascar|Mahe|Maldives|Male'Atoll | Mauritius | Mayotte | McDonald Islands | Melville | Middle Andaman | Miladhunmafulu Atoll | Moheli(Mwali) | Molaku Atoll | Nancowry | Nelsons Island | Nias | Nicobar Islands | Nilandhoo Atoll | North Andaman | Peros Banhos | Phuket | Prince Edward Islands | Reunion | Rodrigues | St.Paul | Salomon Islands | Seychelles | Shag | Siberut | Simeulue | Sipura | Socotra | Sumatra | Sri Lanka | Tarasa Dwip | Tasmania | Thiladhunmathee Atoll | Three Brothers | Timor | Tromelin | Zanzibar ";
city_states["Mediterranean Sea"] = "Aeolian Islands|Alboran|Balearic Islands|Cabrera|Capraia|Capri|Corse (Corsica)|Cyprus|Elba|Formentera|Gozo|Ibiza (Ivisa)|Iles d'Hyeres | Jalitah | Lampedusa | Lipari Islands | Mallorca(Majorca) | Malta | Maltese Islands | Menorca(Minorca) | Pantelleria | Ponziane | Salina | Sant' Antioca|San Pietro|Sardinia (Sardegna)|Sicily (Sicilia)|Stromboli|Vulcano|Zembra";
city_states["Oceania"] = "Abaiang|Admiralty Islands|Aitutaki|Alofi|Ambrym|American Samoa|Antipodes|Atafu Atoll|Atiu|Auckland Islands|Aunu'u | Austral Islands | Banaba | Bega | Bora Bora | Bougainville | Bounty Islands | Campbell | Chatham Islands | Choiseul | Cook Islands | Coral Sea Islands | Efate | Elao | Erromango | Espiritu Santo | ' Eua|Faioa|Fakaofo Atoll|Fatu Hiva|Fiji|French Polynesia|Funafuti Atoll|Futuna|Gambier Islands|Gau|Gilbert Islands|Gizo|Grand Terre|Great Barrier Reef|Guadacanal|Ha'apai Island Group | Hatutu | Hiva Oa | Horne Islands | Huahine | Isle of Pines | Kadavu | Karkar | Kioa | Kiribati | Kiritamati | Koro | Lakeba | Lau Group | Lifou | Line Islands | Loyalty Islands | Malaita | Malekula | Malolo | Mangaia | Manihiki | Manu'a Group|Manuae|Mare|Marquises Islands|Mata Utu|Matuku|Mauke|Maupiti|Melanesia|Mitiaro|Moala|Mohotani|Moorea|Nairai|Nanumea Atoll|Nassau|Nauru|Naviti|Nepean|New Britain|New Caledonia|New Georgia Islands|New Guinea|New Ireland|Niuafo'ou | Niuas Islands | Niuatoputapu | Niue | Niulakita Atoll | Nomuka Island Group | Norfolk Islands | Nukuaeta | Nukufetau Atoll | Nuku Hiva | Nukulaelae Atoll | Nukunono Atoll | Ofu | Olasega | Ono | Ouvea | Ovalau | Palmerston | Pangai | Penrhyn | Philip | Phoenix Islands | Pitcairn | Pitt Island | Polynesia | Pukapuka | Rabi | Raiatea | Rakahanga | Rangiroa | Rarotonga | Rotuma | Samao | San Cristobal | Santa Cruz Islands | Santa Isabel | Savai'i|Society Islands|Solomon Islands|Stewart|Suwarrow|Tabuaeran|Tahaa|Tahiti|Tahuata|Taiohae|Tanna|Tarawa|Tasmania|Tau|Taveuni|Tetiaroa|Tokelau|Tonga|Tongatapu|Totoya|Tuamotu Islands|Tubuai|Tupai|Tutuila|Tuvalu|Ua Huka|Ua Pou|Hiva Oa|Upolu|'Uta Vava'u|Uvea|Vaiaku|Vanua Balavu|Vanua Levu|Vanuatu|Vatulele|Vava'u Island Group | Vita Levu | Wallis Islands | Wallis and Futuna | Waya | Yasawa | Yasawa Group ";
city_states["Pacific Ocean (North)"] = "Aleutian Islands|Alexander Islands|Andreanof Islands|Babelthuap|Baker|Bikini|Bohol|Bonin Islands|Cabras|Caroline Islands|Cebu|Channel Islands (US)|Cheju Do|Chuuk|Diomede Islands|Guam|Hainan|Hawaii (big island)|Hawaiian Islands|Hokkaido|Honshu|Howland|Jaluit Atoll|Japan|Johnston Atoll|Kahoolawe|Kauai|Kodiak|Kosrae|Kwajalein Atoll|Kyushu|Lanai|Lifou|Loyalty Islands|Luzon|Maloelap Atoll|Majuro Atoll|Mare|Marshall Islands|Maui|Micronesia|Midway Islands|Mili Atoll|Mindanao|Mindoro|Molakai|Niihau|Near Islands|Negros|Northern Marianas|Nunivak|Oahu|Okinawa|Ostrov Sakhalin|Pagan|Palau|Palawan|Palmyra Atoll|Panay|Philippines|Pohnpei|Queen Charlotte Islands|Rat|Rongelap Atoll|St. Lawrence|St. Matthew|St. Paul|Saipan|Samar|San Clemente|San Miguel|San Nicolas|Santa Catalina|Santa Cruz|Santa Rosa|Shikoku|Taiwan|Tinian|Vancouver|Volcano Islands|Wake Island|Yap";
city_states["Pacific Ocean (South)"] = "Easter|Galapogos Islands|Juan Fernandez Islands|Isla Espanola|Isla Fernandina|Isla Genovesa|Isla Isabella|Isla Marchena|Isla Pinta|Isla Puna|Isla San Cristobal|Isla San Salvador|Isla Santa Cruz|Isla Santa Maria|Robinson Crusoe|San Felix|Santa Clara"; //Middle East

city_states["Afghanistan"] = "Kabul|Badakhshan|Badghis|Baghlan|Balkh|Bamian|Farah|Faryab|Ghazni|Ghowr|Helmand|Herat|Jowzjan|Kabol|Kandahar|Kapisa|Khowst|Konar|Kondoz|Laghman|Lowgar|Nangarhar|Nimruz|Nurestan|Oruzgan|Paktia|Paktika|Parvan|Samangan|Sar-e Pol|Takhar|Vardak|Zabol";
city_states["Armenia"] = "Yerevan|Aragatsotn|Ararat|Armavir|Geghark'unik'|Kotayk' | Lorri | Shirak | Syunik'|Tavush|Vayots'Dzor ";
city_states["Azerbaijan"] = "Baku (Baki)|Abseron|Agcabadi|Agdam|Agdas|Agstafa|Agsu|Ali Bayramli|Astara|Balakan|Barda|Beylaqan|Bilasuvar|Cabrayil|Calilabad|Daskasan|Davaci|Fuzuli|Gadabay|Ganca|Goranboy|Goycay|Haciqabul|Imisli|Ismayilli|Kalbacar|Kurdamir|Lacin|Lankaran|Lankaran|Lerik|Masalli|Mingacevir|Naftalan|Naxcivan|Neftcala|Oguz|Qabala|Qax|Qazax|Qobustan|Quba|Qubadli|Qusar|Saatli|Sabirabad|Saki|Saki|Salyan|Samaxi|Samkir|Samux|Siyazan|Sumqayit|Susa|Susa|Tartar|Tovuz|Ucar|Xacmaz|Xankandi|Xanlar|Xizi|Xocali|Xocavand|Yardimli|Yevlax|Yevlax|Zangilan|Zaqatala|Zardab";
city_states["Bahrain"] = "Manama|Al Hadd|Al Manamah|Al Mintaqah al Gharbiyah|Al Mintaqah al Wusta|Al Mintaqah ash Shamaliyah|Al Muharraq|Ar Rifa'wa al Mintaqah al Janubiyah | Jidd Hafs | Madinat Hamad | Madinat'Isa|Juzur Hawar|Sitrah";
city_states["Cyprus"] = "Nicosia|Famagusta|Kyrenia|Larnaca|Limassol|Paphos";
city_states["Iran"] = "Tehran|Ardabil|Azarbayjan-e Gharbi|Azarbayjan-e Sharqi|Bushehr|Chahar Mahall va Bakhtiari|Esfahan|Fars|Gilan|Golestan|Hamadan|Hormozgan|Ilam|Kerman|Kermanshah|Khorasan|Khuzestan|Kohkiluyeh va Buyer Ahmad|Kordestan|Lorestan|Markazi|Mazandaran|Qazvin|Qom|Semnan|Sistan va Baluchestan|Yazd|Zanjan";
city_states["Iraq"] = "Baghdad|Al Anbar|Al Basrah|Al Muthanna|Al Qadisiyah|An Najaf|Arbil|As Sulaymaniyah|At Ta'mim | Babil | Dahuk | Dhi Qar | Diyala | Karbala'|Maysan|Ninawa|Salah ad Din|Wasit";
city_states["Israel"] = "Jerusalem|Central|Haifa|Northern|Southern|Tel Aviv";
city_states["Jordan"] = "Amman|Ajlun|Al 'Aqabah | Al Balqa'|Al Karak|Al Mafraq|At Tafilah|Az Zarqa | Irbid | Jarash | Ma'an|Madaba";
city_states["Kuwait"] = "Kuwait|Al Ahmadi|Al Farwaniyah|Al 'Asimah | Al Jahra'|Hawalli";
city_states["Kyrgyzstan"] = "Bishkek Shaary|Batken Oblasty|Chuy Oblasty (Bishkek)|Jalal-Abad Oblasty|Naryn Oblasty|Osh Oblasty|Talas Oblasty|Ysyk-Kol Oblasty (Karakol)";
city_states["Lebanon"] = "Beirut|Beyrouth|Beqaa|Liban-Nord|Liban-Sud|Mont-Liban|Nabatiye";
city_states["Oman"] = "Muscat|Ad Dakhiliyah|Al Batinah|Al Wusta|Ash Sharqiyah|Az Zahirah|Musandam|Zufar";
city_states["Pakistan"] = "Islamabad|Balochistan|Federally Administered Tribal Areas|North-West Frontier Province|Punjab|Sindh";
city_states["Qatar"] = "Doha|Ad Dawhah|Al Ghuwayriyah|Al Jumayliyah|Al Khawr|Al Wakrah|Ar Rayyan|Jarayan al Batinah|Madinat ash Shamal|Umm Salal";
city_states["Saudi Arabia"] = "Riyadh|Al Bahah|Al Hudud ash Shamaliyah|Al Jawf|Al Madinah|Al Qasim|Ar Riyad|Ash Sharqiyah (Eastern Province)|'Asir | Ha'il|Jizan|Makkah|Najran|Tabuk";
city_states["Syria"] = "Damascus|Al Hasakah|Al Ladhiqiyah|Al Qunaytirah|Ar Raqqah|As Suwayda' | Dar'a|Dayr az Zawr|Dimashq|Halab|Hamah|Hims|Idlib|Rif Dimashq|Tartus";
city_states["Tajikistan"] = "Dushanbe|Viloyati Mukhtori Kuhistoni Badakhshon|Viloyati Khatlon|Viloyati Sughd";
city_states["Turkey"] = "Ankara|Adana|Adiyaman|Afyon|Agri|Aksaray|Amasya|Antalya|Ardahan|Artvin|Aydin|Balikesir|Bartin|Batman|Bayburt|Bilecik|Bingol|Bitlis|Bolu|Burdur|Bursa|Canakkale|Cankiri|Corum|Denizli|Diyarbakir|Duzce|Edirne|Elazig|Erzincan|Erzurum|Eskisehir|Gaziantep|Giresun|Gumushane|Hakkari|Hatay|Icel|Igdir|Isparta|Istanbul|Izmir|Kahramanmaras|Karabuk|Karaman|Kars|Kastamonu|Kayseri|Kilis|Kirikkale|Kirklareli|Kirsehir|Kocaeli|Konya|Kutahya|Malatya|Manisa|Mardin|Mugla|Mus|Nevsehir|Nigde|Ordu|Osmaniye|Rize|Sakarya|Samsun|Sanliurfa|Siirt|Sinop|Sirnak|Sivas|Tekirdag|Tokat|Trabzon|Tunceli|Usak|Van|Yalova|Yozgat|Zonguldak  Buri|Sisaket|Songkhla|Sukhothai|Suphan Buri|Surat Thani|Surin|Tak|Trang|Trat|Ubon Ratchathani|Udon Thani|Uthai Thani|Uttaradit|Yala|Yasothon";
city_states["Turkmenistan"] = "Ashgabat|Ahal Welayaty|Balkan Welayaty|Dasoguz Welayaty|Labap Welayaty|Mary Welayaty";
city_states["United Arab Emirates"] = "Abu Dhabi|Abu Zaby (Abu Dhabi)|'Ajman | Al Fujayrah | Ash Shariqah(Sharjah) | Dubayy(Dubai) | Ra's al Khaymah|Umm al Qaywayn";
city_states["Uzbekistan"] = "Tashkent (Toshkent)|Andijon Viloyati|Buxoro Viloyati|Farg'ona Viloyati | Jizzax Viloyati | Namangan Viloyati | Navoiy Viloyati | Qashqadaryo Viloyati(Qarshi) | Qaraqalpog'iston Respublikasi|Samarqand Viloyati|Sirdaryo Viloyati (Guliston)|Surxondaryo Viloyati (Termiz)|Toshkent Shahri|Toshkent Viloyati|Xorazm Viloyati (Urganch)";
city_states["Yemen"] = "Sanaa|Abyan|'Adan | Al Bayda'|Al Hudaydah|Al Jawf|Al Mahrah|Al Mahwit|Dhamar|Hadramawt|Hajjah|Ibb|Lahij|Ma'rib | Sa'dah|San'a'|Shabwah|Ta'izz "; //North America

city_states["Bermuda"] = "Hamilton|Devonshire|Hamilton|Hamilton|Paget|Pembroke|Saint George|Saint George's | Sandys | Smith's|Southampton|Warwick";
city_states["Canada"] = "Ottawa|Alberta|British Columbia|Manitoba|New Brunswick|Newfoundland and Labrador|Northwest Territories|Nova Scotia|Nunavut|Ontario|Prince Edward Island|Quebec|Saskatchewan|Yukon Territory";
city_states["Caribbean"] = "";
city_states["Greenland"] = "Nuuk (Godthab)|Avannaa (Nordgronland)|Tunu (Ostgronland)|Kitaa (Vestgronland)";
city_states["Mexico"] = "Mexico (Distrito Federal)|Aguascalientes|Baja California|Baja California Sur|Campeche|Chiapas|Chihuahua|Coahuila de Zaragoza|Colima|Durango|Guanajuato|Guerrero|Hidalgo|Jalisco|Michoacan de Ocampo|Morelos|Nayarit|Nuevo Leon|Oaxaca|Puebla|Queretaro de Arteaga|Quintana Roo|San Luis Potosi|Sinaloa|Sonora|Tabasco|Tamaulipas|Tlaxcala|Veracruz-Llave|Yucatan|Zacatecas";
city_states["United States"] = "Washington DC|Alabama|Alaska|Arizona|Arkansas|California|Colorado|Connecticut|Delaware|Georgia|Kentucky|Hawaii|Idaho|Illinois|Indiana|Iowa|Kansas|Kentucky|Louisiana|Maine|Maryland|Massachusets|Michigan|Minnesota|Mississippi|Missouri|Montana|Nebraska|Nevada|New Hampshire|New Jersey|New Mexico|New York|North Carolina|North Dakota|Ohio|Oklahoma|Oregon|Pennsylvania|Rhode Island|South Carolina|South Dakota|Tennessee|Texas|Utah|Vermont|Virginia|Washington|West Virginia|Wisconsin|Wyoming"; //South America

city_states["Argentina"] = "Buenos Aires|Catamarca|Chaco|Chubut|Cordoba|Corrientes|Entre Rios|Formosa|Jujuy|La Pampa|La Rioja|Mendoza|Misiones|Neuquen|Rio Negro|Salta|San Juan|San Luis|Santa Cruz|Santa Fe|Santiago del Estero|Tucuman";
city_states["Bolivia"] = "La Paz|Sucre|Chuquisaca|Cochabamba|Beni|Oruro|Pando|Potosi|Santa Cruz|Tarija";
city_states["Brazil"] = "Brasilia|Acre|Alagoas|Amapa|Amazonas|Bahia|Ceara|Distrito Federal|Espirito Santo|Goias|Maranhao|Mato Grosso|Mato Grosso do Sul|Minas Gerais|Para|Paraiba|Parana|Pernambuco|Piaui|Rio de Janeiro|Rio Grande do Norte|Rio Grande do Sul|Rondonia|Roraima|Santa Catarina|Sao Paulo|Sergipe|Tocantins";
city_states["Chile"] = "Santiago|Antofagasta|Araucania|Atacama|Bio-Bio|Coquimbo|Los Lagos|Maule|Tarapaca|Valparaiso";
city_states["Colombia"] = "Bogota|Amazonas|Antioquia|Arauca|Atlantico|Bolivar|Boyaca|Caldas|Caqueta|Casanare|Cauca|Cesar|Choco|Cordoba|Cundinamarca|Guainia|Guaviare|Huila|La Guajira|Magdalena|Meta|Narino|Norte de Santander|Putumayo|Quindio|Risaralda|San Andres/Providencia|Santander|Sucre|Tolima|Valle del Cauca|Vaupes|Vichada";
city_states["Ecuador"] = "Quito|Azuay|Bolivar|Canar|Carchi|Chimborazo|Cotopaxi|El Oro|Esmeraldas|Galapagos|Guayas|Imbabura|Loja|Los Rios|Manabi|Morona-Santiago|Napo|Orellana|Pastaza|Pichincha|Sucumbios|Tungurahua|Zamora-Chinchipe";
city_states["Guyana"] = "Georgetown|Barima-Waini|Cuyuni-Mazaruni|Demerara-Mahaica|East Berbice-Corentyne|Essequibo Islands-West Demerara|Mahaica-Berbice|Pomeroon-Supenaam|Potaro-Siparuni|Upper Demerara-Berbice|Upper Takutu-Upper Essequibo";
city_states["Paraguay"] = "Asuncion|Alto Paraguay|Alto Parana|Amambay|Boqueron|Caaguazu|Caazapa|Canindeyu|Central|Concepcion|Cordillera|Guaira|Itapua|Misiones|Neembucu|Paraguari|Presidente Hayes|San Pedro";
city_states["Peru"] = "Lima|Amazonas|Ancash|Apurimac|Arequipa|Ayacucho|Cajamarca|Callao|Cusco|Huancavelica|Huanuco|Ica|Junin|La Libertad|Lambayeque|Loreto|Madre de Dios|Moquegua|Pasco|Piura|Puno|San Martin|Tacna|Tumbes|Ucayali";
city_states["Suriname"] = "Paramaribo|Brokopondo|Commewijne|Coronie|Marowijne|Nickerie|Para|Saramacca|Sipaliwini|Wanica";
city_states["Uruguay"] = "Montevideo|Artigas|Canelones|Cerro Largo|Colonia|Durazno|Flores|Florida|Lavalleja|Maldonado|Paysandu|Rio Negro|Rivera|Rocha|Salto|San Jose|Soriano|Tacuarembo|Treinta y Tres";
city_states["Venezuela"] = "Caracas|Amazonas|Anzoategui|Apure|Aragua|Barinas|Bolivar|Carabobo|Cojedes|Delta Amacuro|Dependencias Federales|Distrito Federal|Falcon|Guarico|Lara|Merida|Miranda|Monagas|Nueva Esparta|Portuguesa|Sucre|Tachira|Trujillo|Vargas|Yaracuy|Zulia";

// CONCATENATED MODULE: ./services/extra/pageHelpers.js

const getPageContent = (array = [], cnt = "North America", altCnt = "North America", altCnt1 = "South America") => {
  const res1 = array.find(el => {
    return el.continent.includes(cnt);
  });

  if (res1) {
    return res1;
  }

  const res2 = array.find(el => {
    return el.continent.includes(altCnt) || el.continent.includes(altCnt1);
  });

  if (res2) {
    return res2;
  }

  return array[0];
};
const getContinentName = countryName => {
  let continentName = null;
  Object.values(countries).map((el, index) => {
    const arr = el.split("|");

    if (arr.some(ctr => ctr === countryName)) {
      continentName = Object.keys(countries)[index];
    }

    return null;
  });
  return continentName;
};
// EXTERNAL MODULE: ./services/extra/productHelpers.js
var productHelpers = __webpack_require__("TcCU");

// CONCATENATED MODULE: ./services/extra/index.js








/***/ })

};;