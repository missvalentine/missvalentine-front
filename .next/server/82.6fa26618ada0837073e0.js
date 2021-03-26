exports.ids = [82];
exports.modules = {

/***/ "K9yk":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("/T1H");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("K2gz");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("wy2R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("2MRG");
/* harmony import */ var _services_makeCancelable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("cYVw");
/* harmony import */ var _ChatMsgList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("oUyK");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









const chatMsgList = new _ChatMsgList__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"]();

class ChatOrderList extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor() {
    super();

    _defineProperty(this, "getOrderList", () => {
      this.cancelableOrders = Object(_services_makeCancelable__WEBPACK_IMPORTED_MODULE_6__[/* makeCancelable */ "a"])(Object(_services_api__WEBPACK_IMPORTED_MODULE_5__[/* getOrders */ "p"])(this.props.user.userMetaId), res => {
        const resJson = res.data;

        if (resJson.status) {
          const orderList = resJson.orders.sort(function (a, b) {
            return new Date(b.createdOn) - new Date(a.createdOn);
          });

          if (!orderList || orderList && orderList.length < 1) {
            this.props.triggerNextStep({
              trigger: "repeat"
            });
          }

          this.setState({
            orderList: orderList,
            isLoading: false
          });
        }
      }, err => {
        console.log({
          err
        });
      });
    });

    this.state = {
      orderList: [],
      isLoading: true,
      selected: null
    };
  }

  componentDidMount() {
    this.getOrderList();
  }

  componentWillUnmount() {
    if (this.cancelableOrders) this.cancelableOrders();
  }

  render() {
    const {
      orderList,
      isLoading,
      selected
    } = this.state;
    return __jsx("div", null, isLoading && __jsx("div", null, "..."), isLoading && (!orderList || orderList && orderList.length < 1) && __jsx("div", null, chatMsgList.noOrdersMsg()), !isLoading && orderList && orderList.length > 0 && orderList.map((el, index) => {
      const product = el.products && el.products[0].title;
      return __jsx("p", {
        className: classnames__WEBPACK_IMPORTED_MODULE_3___default()("chat-custom-option", {
          selected: selected === el._id
        }),
        onClick: () => {
          if (!selected) {
            this.setState({
              orderList: orderList.filter(elx => elx._id === el._id),
              selected: el._id
            }, () => {
              this.props.triggerNextStep({
                value: el
              });
            });
          }
        },
        key: index
      }, el.createdOn ? moment__WEBPACK_IMPORTED_MODULE_4___default()(el.createdOn).format("MMM DD, YYYY") + ` (${product})` : product);
    }));
  }

}

const mapStateToProps = state => ({
  user: state.user
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps)(ChatOrderList));

/***/ }),

/***/ "cYVw":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return makeCancelable; });
const makeCancelable = (promise, onfulfilled, onrejected) => {
  let hasCanceled = false;
  new Promise((resolve, reject) => promise.then(val => hasCanceled ? reject({
    isCanceled: true
  }) : resolve(val)).catch(err => hasCanceled ? reject({
    isCanceled: true
  }) : reject(err))).then(onfulfilled).catch(err => {
    if (err && !err.isCanceled) {
      throw err;
    }
  }).catch(onrejected);
  return function () {
    hasCanceled = true;
  };
};

/***/ })

};;