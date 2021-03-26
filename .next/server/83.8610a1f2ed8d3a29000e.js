exports.ids = [83];
exports.modules = {

/***/ "SQO+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("/T1H");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("wy2R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("Exp3");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _services_helpers_regex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("p53m");
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("x91w");
/* harmony import */ var _constants_projectSettings__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("xSWb");
/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("2MRG");
/* harmony import */ var _services_helpers_cart__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("3EDw");
/* harmony import */ var _redux_actions_cart__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("UrdJ");
/* harmony import */ var cleave_js_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("baVd");
/* harmony import */ var cleave_js_react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(cleave_js_react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _redux_actions_cards__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("Ynsj");
/* harmony import */ var react_component_debounce__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("14x6");
/* harmony import */ var react_component_debounce__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_component_debounce__WEBPACK_IMPORTED_MODULE_13__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const TitleList = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(() => __webpack_require__.e(/* import() */ 2).then(__webpack_require__.bind(null, "y/CX")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("y/CX")],
    modules: ["../TItleList"]
  }
});
const Button = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(() => __webpack_require__.e(/* import() */ 3).then(__webpack_require__.bind(null, "s5Da")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("s5Da")],
    modules: ["../form-components/Button"]
  }
});




const Input = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(() => __webpack_require__.e(/* import() */ 1).then(__webpack_require__.bind(null, "xcph")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("xcph")],
    modules: ["../form-components/Input"]
  }
});
const Checkbox = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(() => __webpack_require__.e(/* import() */ 7).then(__webpack_require__.bind(null, "DCDu")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("DCDu")],
    modules: ["../form-components/Checkbox"]
  }
});








const DebounceCreditCard = react_component_debounce__WEBPACK_IMPORTED_MODULE_13___default()({
  valuePropName: "value",
  triggerMs: 1000
})(cleave_js_react__WEBPACK_IMPORTED_MODULE_11___default.a);
const DebounceInput = react_component_debounce__WEBPACK_IMPORTED_MODULE_13___default()({
  valuePropName: "value",
  triggerMs: 1000
})(Input);
const {
  Panel
} = antd__WEBPACK_IMPORTED_MODULE_3__["Collapse"];

class CheckoutPayment extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "tglCard", () => {
      this.setState(prevState => {
        this.props.form.setFieldsValue({
          paymentProfile: null
        });

        if (prevState.collapseKey && prevState.collapseKey.includes("card")) {
          return {
            isCard: false,
            collapseKey: ["bank"]
          };
        }

        return {
          isCard: true,
          collapseKey: ["card"]
        };
      });
    });

    _defineProperty(this, "onFailed", res => {
      this.props.setLoading(false);
      this.setState({
        isFailed: true
      });
      const {
        onFailed
      } = this.props;

      if (typeof onFailed === "function") {
        onFailed(res);
      }
    });

    _defineProperty(this, "combinePromiseProduct", (promise, el) => new Promise(res => {
      promise.then(resX => {
        if (resX.data.status) {
          res(_objectSpread(_objectSpread({}, el), {}, {
            subscriptionFailed: false,
            subscriptionId: resX.data.subscriptionid
          }));
        } else {
          res(_objectSpread(_objectSpread({}, el), {}, {
            subscriptionFailed: true
          }));
        }
      }).catch(resX => {
        res(_objectSpread(_objectSpread({}, el), {}, {
          subscriptionFailed: true
        }));
      });
    }));

    _defineProperty(this, "generateSubsData", (el, details) => {
      const customAmount = parseFloat(el.subTotal); // + (Math.random() * 100)

      const {
        billto,
        profileid,
        paymentid,
        cardnumber,
        cardcode,
        expiry
      } = details;
      const subsData = {
        amount: parseFloat(customAmount.toFixed(2)),
        name: billto.firstName + billto.lastName,
        schedule: {
          interval: {
            length: "1",
            unit: "months"
          },
          startDate: moment__WEBPACK_IMPORTED_MODULE_2___default()().format("YYYY-MM-DD"),
          totalOccurrences: el.subscriptionMeta.duration || "1"
        },
        billto: {
          firstName: billto.firstName,
          lastName: billto.lastName
        }
      };

      if (profileid && paymentid) {
        return _objectSpread(_objectSpread({}, subsData), {}, {
          profileid,
          paymentid
        });
      }

      if (cardnumber && cardcode && expiry) return _objectSpread(_objectSpread({}, subsData), {}, {
        cardnumber,
        cardcode,
        expiry
      });
    });

    _defineProperty(this, "formatCreditCardNumber", value => {
      if (!value) {
        return value;
      }

      const issuer = Payment.fns.cardType(value);
      const clearValue = clearNumber(value);
      let nextValue;

      switch (issuer) {
        case "amex":
          nextValue = `${clearValue.slice(0, 4)} ${clearValue.slice(4, 10)} ${clearValue.slice(10, 15)}`;
          break;

        case "dinersclub":
          nextValue = `${clearValue.slice(0, 4)} ${clearValue.slice(4, 10)} ${clearValue.slice(10, 14)}`;
          break;

        default:
          nextValue = `${clearValue.slice(0, 4)} ${clearValue.slice(4, 8)} ${clearValue.slice(8, 12)} ${clearValue.slice(12, 19)}`;
          break;
      }

      return nextValue.trim();
    });

    _defineProperty(this, "makeSubsPromise", (order, details) => {
      return order.products.map(el => {
        if (el.isSubscribed) {
          const subsData = this.generateSubsData(el, details);

          if (subsData.routingNumber) {
            return this.combinePromiseProduct(Object(_services_api__WEBPACK_IMPORTED_MODULE_8__[/* authorizeSubscriptionBank */ "h"])(subsData), el);
          }

          if (subsData.profileid) {
            return this.combinePromiseProduct(Object(_services_api__WEBPACK_IMPORTED_MODULE_8__[/* authorizeSubscriptionProfile */ "i"])(subsData), el);
          }

          return this.combinePromiseProduct(Object(_services_api__WEBPACK_IMPORTED_MODULE_8__[/* authorizeSubscription */ "g"])(subsData), el);
        } else {
          return new Promise(res => {
            res(el);
          });
        }
      });
    });

    _defineProperty(this, "finalOrderSubmit", orderApi => {
      // this.setState({loading: false})
      orderApi.then(res => {
        const resJson = res.data;

        if (resJson.status) {
          const {
            onSubmit,
            setLoading,
            clearCart,
            hideCartBar
          } = this.props;
          setLoading(false);
          clearCart();
          hideCartBar();

          if (typeof onSubmit === "function") {
            onSubmit(resJson.data);
          }
        } else {
          this.onFailed(resJson); //   this.setState({
          //     modalData: someThingWrong,
          //     modalTitle: wrongModalTitle,
          //     modal: true,
          //     SpinnerToggle: false
          //   });
        }
      }).catch(err => {
        this.onFailed(err); // this.setState({
        //     modalData: someThingWrong,
        //     modalTitle: wrongModalTitle,
        //     modal: true,
        //     SpinnerToggle: false
        // });
      });
    });

    _defineProperty(this, "onSubmit", e => {
      e.preventDefault();
      const {
        shippingSendData,
        address
      } = this.props;
      const {
        isCard
      } = this.state;
      this.props.form.validateFields((err, values) => {
        if (!err) {
          // this.state = {loading: true}
          this.props.setLoading(true);

          if (shippingSendData.shipmentid === "custom_rates") {
            const order = this.generateOrder();
            order.then(order => {
              // this.setState({loading: false})
              // this.props.setLoading(false)
              if (values.paymentProfile) {
                this.onProfilePay(order, values);
              } else if (isCard) {
                this.onCardPay(order, values);
              } else {
                this.onBankPay(order, values);
              }
            }).catch(this.onFailed);
          } else {
            Object(_services_api__WEBPACK_IMPORTED_MODULE_8__[/* confirmShipment */ "j"])(_objectSpread({}, shippingSendData)).then(res => {
              if (res.data.status && res.data.data) {
                this.setState({
                  confirmShipRes: res.data.data
                }, () => {
                  const order = this.generateOrder();
                  order.then(order => {
                    // this.setState({loading: false})
                    // this.props.setLoading(false)
                    if (values.paymentProfile) {
                      this.onProfilePay(order, values);
                    } else if (isCard) {
                      this.onCardPay(order, values);
                    } else {
                      this.onBankPay(order, values);
                    }
                  }).catch(this.onFailed);
                });
              } else {
                this.onFailed(res);
              }
            }).catch(this.onFailed);
          }
        }
      });
    });

    _defineProperty(this, "onCardPay", (order, values) => {
      const {
        address
      } = this.props;
      const {
        cardnumber: cardNumber,
        cvv,
        cardname,
        expiry: expDate
      } = values;
      const cardnumber = cardNumber.replace(/ /g, "");
      const expiry = "20" + expDate.split("/").reverse().join("-");
      const {
        grandTotal: amount,
        countryTax,
        userDetails,
        shippingCharge,
        products
      } = order;
      const customAmount = amount;

      const {
        addressStr,
        state,
        city,
        zip,
        other,
        email
      } = address,
            addressRest = _objectWithoutProperties(address, ["addressStr", "state", "city", "zip", "other", "email"]);

      const data = {
        cardnumber,
        expiry,
        cardcode: cvv,
        amount: parseFloat(customAmount.toFixed(2)),
        tax: {
          amount: countryTax,
          name: `Country Tax - ${userDetails.country}`
        },
        shipping: {
          amount: shippingCharge,
          name: `Ship to - ${userDetails.state}`
        },
        lineItems: products.map(el => ({
          itemId: el.itemId,
          name: el.title,
          description: "-",
          quantity: el.qty,
          unitPrice: el.unitPrice
        })),
        billto: {
          address: addressStr
        },
        shipTo: {
          address: addressStr
        }
      };
      Object(_services_api__WEBPACK_IMPORTED_MODULE_8__[/* authorizeCharge */ "c"])(data).then(res => {
        if (res.data.status) {
          const transactionId = res.data.transactionid;
          const {
            savecard
          } = values;

          if (savecard) {
            const bodyData = {
              cardnumber,
              expmonth: expDate.split("/")[0],
              expyear: expDate.split("/")[1],
              cvc: cvv,
              userid: this.props.userId || this.props.user._id
            };
            this.props.addCardAuthorize({
              user: this.props.user,
              oldCards: this.props.cards,
              card: bodyData
            });
          }

          Promise.all(this.makeSubsPromise(order, _objectSpread(_objectSpread({}, data), {}, {
            billto: _objectSpread(_objectSpread({}, data.billto), {}, {
              firstName: address.firstname,
              lastName: address.lastname
            })
          }))).then(res => {
            const sendAbleOrder = _objectSpread(_objectSpread({}, order), {}, {
              products: res,
              transactionId
            });

            this.finalOrderSubmit(Object(_services_api__WEBPACK_IMPORTED_MODULE_8__[/* placeOrderNew */ "u"])(sendAbleOrder));
          });
        } else {
          this.onFailed(res);
        }
      }).catch(err => {
        this.onFailed(err);
      });
    });

    _defineProperty(this, "onBankPay", (order, values) => {
      const {
        address
      } = this.props;
      const {
        account_type,
        bank_routing_number,
        bank_checking_number
      } = values;
      const {
        grandTotal: amount,
        countryTax,
        userDetails,
        shippingCharge,
        products
      } = order;
      const customAmount = amount;

      const {
        addressStr,
        state,
        city,
        zip,
        other,
        email
      } = address,
            addressRest = _objectWithoutProperties(address, ["addressStr", "state", "city", "zip", "other", "email"]);

      const data = {
        accountType: account_type,
        routingNumber: bank_routing_number,
        accountNumber: bank_checking_number,
        amount: parseFloat(customAmount.toFixed(2)),
        tax: {
          amount: countryTax,
          name: `Country Tax - ${userDetails.country}`
        },
        shipping: {
          amount: shippingCharge,
          name: `Ship to - ${userDetails.state}`
        },
        lineItems: products.map(el => ({
          itemId: el.itemId,
          name: el.title,
          description: "-",
          quantity: el.qty,
          unitPrice: el.unitPrice
        })),
        billto: {
          address: addressStr
        },
        shipTo: _objectSpread({
          address: addressStr
        }, addressRest)
      };
      Object(_services_api__WEBPACK_IMPORTED_MODULE_8__[/* authorizeChargeBank */ "d"])(data).then(res => {
        if (res.data.status) {
          const transactionId = res.data.transactionid;
          Promise.all(this.makeSubsPromise(order, _objectSpread(_objectSpread({}, data), {}, {
            billto: _objectSpread(_objectSpread({}, data.billto), {}, {
              firstName: address.firstname,
              lastName: address.lastname
            })
          }))).then(res => {
            const sendAbleOrder = _objectSpread(_objectSpread({}, order), {}, {
              products: res,
              transactionId
            });

            this.finalOrderSubmit(Object(_services_api__WEBPACK_IMPORTED_MODULE_8__[/* placeOrderNew */ "u"])(sendAbleOrder));
          });
        } else {
          this.onFailed(res);
        }
      }).catch(err => {
        this.onFailed(err);
      });
    });

    _defineProperty(this, "onProfilePay", (order, values) => {
      const {
        address
      } = this.props;
      const {
        account_type,
        bank_routing_number,
        bank_checking_number,
        paymentProfile
      } = values;
      const {
        grandTotal: amount,
        countryTax,
        userDetails,
        shippingCharge,
        products
      } = order;
      const customAmount = amount;

      const {
        addressStr,
        state,
        city,
        zip,
        other,
        email
      } = address,
            addressRest = _objectWithoutProperties(address, ["addressStr", "state", "city", "zip", "other", "email"]);

      const data = {
        paymentid: paymentProfile.customerPaymentProfileId,
        profileid: paymentProfile.customerProfileId,
        amount: parseFloat(customAmount.toFixed(2))
      };
      Object(_services_api__WEBPACK_IMPORTED_MODULE_8__[/* authorizeChargeProfile */ "e"])(data).then(res => {
        if (res.data.status) {
          const transactionId = res.data.data && res.data.data.transactionResponse && res.data.data.transactionResponse.transId;
          Promise.all(this.makeSubsPromise(order, _objectSpread(_objectSpread({}, data), {}, {
            billto: {
              address: addressStr,
              firstName: address.firstname,
              lastName: address.lastname
            },
            shipto: {
              address: addressStr
            }
          }))).then(res => {
            const sendAbleOrder = _objectSpread(_objectSpread({}, order), {}, {
              products: res,
              transactionId
            });

            this.finalOrderSubmit(Object(_services_api__WEBPACK_IMPORTED_MODULE_8__[/* placeOrderNew */ "u"])(sendAbleOrder));
          }).catch(this.onFailed);
        } else {
          this.onFailed(res);
        }
      }).catch(err => {
        this.onFailed(err);
      });
    });

    this.state = {
      email: props.email,
      address: props.address,
      shippingDetail: props.shippingDetail,
      isCard: true,
      collapseKey: ["card"],
      isFailed: false
    };
    this.generateOrder = this.generateOrder.bind(this);
  }

  componentDidMount() {
    const {
      getCards,
      user
    } = this.props;

    if (user && user._id) {
      getCards(user._id);
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.cards !== this.props.cards && this.state.collapseKey) {
      this.setState({
        collapseKey: null
      });
    }
  }

  async generateOrder(paymentResponse, isFirst = true) {
    let confirmShipRes = this.state.confirmShipRes;
    const {
      shippingSendData,
      cart,
      user,
      referrer,
      address,
      billingAddress
    } = this.props; // if(isFirst){
    //     await confirmShipment({
    //         ...shippingSendData
    //     })
    //     .then(res => {
    //         if(res.data.status && res.data.data){
    //             this.setState({
    //                 confirmShipRes: res.data.data
    //             })
    //         }
    //     })
    //     .catch(console.log)
    // }

    const refId = referrer && referrer.referralUrlId || null;
    const {
      id: shipmentid,
      selected_rate,
      postage_label,
      tracking_code: trackingcode,
      tracker,
      fees
    } = confirmShipRes || {};

    const shippingDetails = _objectSpread(_objectSpread({}, confirmShipRes), {}, {
      shipmentid,
      rateid: selected_rate && selected_rate.id,
      rate: selected_rate && selected_rate.rate,
      label: postage_label && postage_label.label_url,
      trackingcode,
      trackerid: tracker && tracker.id,
      fees,
      service: selected_rate && selected_rate.service,
      carrier: selected_rate && selected_rate.carrier || "shipment_failed"
    });

    const order = Object(_services_helpers_cart__WEBPACK_IMPORTED_MODULE_9__[/* generateOrderObj */ "c"])({
      referralId: refId,
      cart,
      user,
      confirmShipRes: shippingDetails,
      stateObj: {
        paymentMethod: "Authorize",
        address,
        billingAddress
      }
    });
    return order;
  }

  render() {
    // console.log(this.props.cards);
    const componentClass = "c-checkout-payment";
    const {
      form,
      user,
      cards
    } = this.props;
    const isLogin = user._id ? true : false;
    const {
      email,
      address,
      shippingDetail,
      collapseKey,
      isCard
    } = this.state;
    const {
      getFieldDecorator,
      getFieldValue
    } = form;
    const profileValue = getFieldValue("paymentProfile"); //  console.log(getFieldValue("email"));

    return __jsx("div", {
      className: componentClass
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Form"], {
      onSubmit: this.onSubmit
    }, __jsx(TitleList, {
      versions: ["sm-border"],
      parentClass: componentClass,
      title: "Contact Info."
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Form"].Item, null, getFieldDecorator("email", {
      rules: [{
        required: true,
        message: "Please input your E-mail!"
      }, {
        pattern: _services_helpers_regex__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].email,
        message: "Please enter a valid E-mail!"
      }],
      initialValue: email
    })(__jsx(DebounceInput, {
      disabled: true,
      label: "E-mail"
    })))), __jsx(TitleList, {
      versions: ["sm-border"],
      parentClass: componentClass,
      title: "Address"
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Form"].Item, null, getFieldDecorator("address", {
      rules: [{
        required: true,
        message: "Please input your Address!"
      }],
      initialValue: address.addressStr
    })(__jsx(DebounceInput, {
      disabled: true,
      label: "address"
    })))), isLogin && cards && cards.length > 0 && __jsx(TitleList, {
      parentClass: componentClass,
      title: __jsx("span", {
        onClick: this.tglCard
      }, "Pay with Saved Cards or Account")
    }, getFieldDecorator("paymentProfile", {
      initialValue: cards.find(el => el.isDefault) || cards[0]
    })(__jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Radio"].Group, {
      // value = {cards.find((el) => el.isDefault) || cards[0]}
      className: "underline",
      onChange: e => {
        const {
          value
        } = e.target;

        if (value !== null) {
          // setFieldsValue({
          //     newAddress: false
          // })
          this.setState({
            collapseKey: null
          });
        }
      }
    }, cards.map((el, i) => {
      //   console.log(el);
      if (el.creditCard) {
        return __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Radio"], {
          key: i,
          value: el
        }, el.creditCard.cardNumber);
      } else if (el.bankAccount) {
        return __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Radio"], {
          key: i,
          value: el
        }, __jsx("span", null, "Account Number ", el.bankAccount.accountNumber));
      }

      return null;
    })))), __jsx(TitleList, {
      parentClass: componentClass,
      title: __jsx("span", null, "Pay with Card ")
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Form"].Item, null, getFieldDecorator("cardpayment", {})(__jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Radio"].Group, {
      className: "add",
      onChange: e => {
        const {
          value
        } = e.target;

        if (value !== null) {
          // setFieldsValue({
          //     newAddress: false
          // })
          this.props.form.setFieldsValue({
            paymentProfile: null,
            bankpayment: null
          }); // console.log(value);

          this.setState({
            collapseKey: ["card"]
          });
        }
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Radio"], {
      value: "Pay with New Card"
    }, "+ Add New"), __jsx("span", null)))), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Collapse"], {
      destroyInactivePanel: true,
      bordered: false,
      activeKey: collapseKey
    }, __jsx(Panel, {
      header: null,
      key: "card"
    }, __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Form"].Item, null, getFieldDecorator("cardnumber", {
      rules: isCard && !profileValue && [{
        required: true,
        message: "Please enter your card number!"
      }, {
        min: 19,
        message: "Please enter valid card number!"
      }]
    })( // <InputMask
    //     label="Card Number"
    //     mask="9999-9999-9999-9999"
    // />
    __jsx(DebounceCreditCard, {
      className: "c-input c-input__input",
      placeholder: "XXXX XXXX XXXX XXXX",
      options: {
        creditCard: true
      },
      onChange: (key, value) => {//  console.log({ key });
      }
    }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Form"].Item, null, getFieldDecorator("cardname", {
      rules: isCard && !profileValue && [{
        required: true,
        message: "Please enter cardholder name!"
      }]
    })(__jsx(DebounceInput, {
      label: "Cardholder Name"
    }))), __jsx("div", {
      className: "container-fluid p-0"
    }, __jsx("div", {
      className: "row"
    }, __jsx("div", {
      className: "col-6 col-sm-8 "
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Form"].Item, null, getFieldDecorator("expiry", {
      rules: isCard && !profileValue && [{
        required: true,
        message: "Please enter expiration date!"
      }]
    })(__jsx(cleave_js_react__WEBPACK_IMPORTED_MODULE_11___default.a, {
      className: "c-input c-input__input",
      options: {
        date: true,
        datePattern: ["m", "y"]
      },
      placeholder: "Expiry Date",
      onChange: event => {// console.log(
        //   event.target.rawValue,
        //   event.target.value
        // );
      }
    })))), __jsx("div", {
      className: "col-6 col-sm-4" // style={{ marginTop: "8px" }}

    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Form"].Item, null, getFieldDecorator("cvv", {
      rules: isCard && !profileValue && [{
        required: true,
        message: "Please enter cvv number!"
      }, {
        max: 4,
        message: "Please enter correct CVV"
      }]
    })(__jsx(DebounceInput, {
      label: "CVV Code",
      type: "number"
    })))))), isLogin && __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Form"].Item, null, getFieldDecorator("savecard", {
      valuePropName: "checked",
      initialValue: false
    })(__jsx(Checkbox, {
      versions: ["dark"]
    }, "Save this card for next time"))))))), __jsx(TitleList, {
      versions: ["sm-border"],
      parentClass: componentClass,
      title: __jsx("span", null, "Pay with Account")
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Form"].Item, null, getFieldDecorator("bankpayment", {})(__jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Radio"].Group, {
      className: "add",
      onChange: e => {
        const {
          value
        } = e.target;

        if (value !== null) {
          // setFieldsValue({
          //     newAddress: false
          // })
          this.props.form.setFieldsValue({
            paymentProfile: null,
            cardpayment: null
          }); //    console.log(value);

          this.setState({
            collapseKey: ["bank"]
          });
        }
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Radio"], {
      value: "Pay with New Card"
    }, "+ Add New"), __jsx("span", null)))), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Collapse"], {
      destroyInactivePanel: true,
      bordered: false,
      activeKey: collapseKey
    }, __jsx(Panel, {
      header: null,
      key: "bank"
    }, __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Form"].Item, null, getFieldDecorator("name_acc", {
      rules: !isCard && !profileValue && [{
        required: true,
        message: "Please enter your name!"
      }]
    })(__jsx(DebounceInput, {
      label: "Name on Account"
    }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Form"].Item, null, getFieldDecorator("bank_routing_number", {
      rules: !isCard && !profileValue && [{
        required: true,
        message: "Please enter routing number!"
      }]
    })(__jsx(DebounceInput, {
      label: "Bank Routing Number*"
    }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Form"].Item, null, getFieldDecorator("bank_checking_number", {
      rules: !isCard && !profileValue && [{
        required: true,
        message: "Please enter checking account number!"
      }, {
        min: 13,
        message: "checking number must have 13 digits"
      }, {
        max: 13,
        message: "checking number must have 13 digits"
      }, {
        pattern: /\d+/,
        message: "checking number must have only digits"
      }]
    })(__jsx(DebounceInput, {
      label: "Checking Account Number*"
    }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Form"].Item, null, getFieldDecorator("account_type", {
      initialValue: "checking" // rules: !isCard && [{
      //     required: true,
      //     message: "Please enter account type!"
      // }]

    })(__jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Select"], null, _constants_projectSettings__WEBPACK_IMPORTED_MODULE_7__[/* default */ "d"].accountTypeOpt.map((el, key) => __jsx(Option, {
      key: key,
      value: el.value
    }, el.label))))), isLogin && __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Form"].Item, null, getFieldDecorator("savecard", {
      valuePropName: "checked",
      initialValue: false
    })(__jsx(Checkbox, {
      versions: ["dark"]
    }, "Save this account for next time"))))))), !isLogin && __jsx("div", {
      className: "col-12"
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Form"].Item, null, getFieldDecorator("saveaddress_ship", {
      valuePropName: "checked",
      initialValue: true
    })(__jsx(Checkbox, {
      versions: ["dark"]
    }, "I am interested in product release and news.Sign me Up!*")))), __jsx(TitleList, {
      versions: ["sm-border"]
    }, __jsx("div", {
      className: "row",
      style: {
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center"
      }
    }, __jsx("div", {
      style: {
        marginBottom: "15px"
      }
    }, __jsx("input", {
      type: "checkbox"
    }), __jsx("span", {
      style: {
        fontSize: "20px",
        marginBottom: "30px",
        marginLeft: "15px",
        color: "#000"
      }
    }, "I\u2019m interested in product releases and news. Sign me up!*")), __jsx(Button, {
      parentClass: "c-checkout",
      theme: "dark"
    }, "Place order")), __jsx("div", {
      className: "row",
      style: {
        justifyContent: "center",
        textAlign: "center"
      }
    }, __jsx("p", {
      style: {
        marginTop: "15px",
        color: "#000"
      }
    }, "*By signing up or placing and order, you are consenting ", __jsx("br", null), " ", "to our ", __jsx("i", {
      style: {
        fontWeight: "700"
      }
    }, "privacy policy."))))));
  }

}

const mapStateToProps = state => ({
  user: state.user,
  cart: state.cart,
  cards: state.cards.cards,
  referrer: state.referrer
});

const mapActionToProps = {
  addCardAuthorize: _redux_actions_cards__WEBPACK_IMPORTED_MODULE_12__[/* addCardAuthorize */ "a"],
  getCards: _redux_actions_cards__WEBPACK_IMPORTED_MODULE_12__[/* getCards */ "b"],
  setLoading: _redux_actions__WEBPACK_IMPORTED_MODULE_6__["setLoading"],
  clearCart: _redux_actions_cart__WEBPACK_IMPORTED_MODULE_10__[/* clearCart */ "b"],
  hideCartBar: _redux_actions__WEBPACK_IMPORTED_MODULE_6__["hideCartBar"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(mapStateToProps, mapActionToProps)(antd__WEBPACK_IMPORTED_MODULE_3__["Form"].create({
  name: "CheckoutPayment"
})(CheckoutPayment)));

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