exports.ids = [97];
exports.modules = {

/***/ "5Qb8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ChatMsgList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("oUyK");
/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("2MRG");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const chatMsgList = new _ChatMsgList__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"]();
const {
  getWrongTextMsg,
  msgAfterShopSelect,
  msgAfterTrackSelect,
  msgAfterTrackSelectNoOrder,
  msgTrackNow
} = chatMsgList;

class ChatUserOneRet extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor() {
    super();
    this.state = {
      msg: "..."
    };
  }

  componentDidMount() {
    const {
      steps,
      triggerNextStep
    } = this.props;
    const msg = steps.userOne.message.toLocaleLowerCase();

    if (msg.includes("place")) {
      this.setState({
        msg: msgAfterShopSelect()
      }, () => {
        triggerNextStep({
          value: "",
          trigger: "categoryList"
        });
      });
    } else if (msg.includes("track")) {
      const {
        user
      } = this.props;

      if (user._id) {
        if (user.userMetaId) {
          Object(_services_api__WEBPACK_IMPORTED_MODULE_3__[/* getOrders */ "p"])(user.userMetaId).then(res => {
            const resJson = res.data;

            if (resJson.status) {
              const orderList = resJson.orders.sort(function (a, b) {
                return new Date(b.createdOn) - new Date(a.createdOn);
              });

              if (orderList.length > 0) {
                this.setState({
                  msg: msgAfterTrackSelect()
                }, () => {
                  triggerNextStep({
                    value: "",
                    trigger: "trackNowLogin"
                  });
                });
              } else {
                this.setState({
                  msg: msgAfterTrackSelectNoOrder()
                }, () => {
                  triggerNextStep({
                    value: "",
                    trigger: "firstOptions"
                  });
                });
              }
            }
          }).catch(err => {
            this.setState({
              msg: msgAfterTrackSelect()
            }, () => {
              triggerNextStep({
                value: "",
                trigger: "trackNowLogin"
              });
            });
            console.log({
              err
            });
          });
        }
      } else {
        this.setState({
          msg: msgTrackNow()
        }, () => {
          triggerNextStep({
            value: "",
            trigger: "trackNow"
          });
        });
      }
    } else {
      this.setState({
        msg: getWrongTextMsg()
      }, () => {
        triggerNextStep({
          value: "",
          trigger: "shopSelected"
        });
      });
    }
  }

  render() {
    return __jsx("div", null, this.state.msg);
  }

}

const mapStateToProps = state => ({
  user: state.user
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(ChatUserOneRet));

/***/ })

};;