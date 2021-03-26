exports.ids = [14];
exports.modules = {

/***/ "K97z":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("/T1H");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_helpers_product__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("OWVN");
/* harmony import */ var _services_helpers_cart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("3EDw");
/* harmony import */ var _services_helpers_misc__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("yH4c");
/* harmony import */ var _constants_reduxInitialStates__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("X4LH");
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("x91w");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("g8bt");
/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _services_apis_checkout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("oAQk");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const CartItem = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(() => __webpack_require__.e(/* import() */ 81).then(__webpack_require__.bind(null, "Ws9w")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("Ws9w")],
    modules: ["./CartItem"]
  }
});
const Button = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(() => __webpack_require__.e(/* import() */ 3).then(__webpack_require__.bind(null, "s5Da")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("s5Da")],
    modules: ["./form-components/Button"]
  }
});







const Heading = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(() => __webpack_require__.e(/* import() */ 0).then(__webpack_require__.bind(null, "h1bS")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("h1bS")],
    modules: ["./Heading"]
  }
});
const Input = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(() => __webpack_require__.e(/* import() */ 1).then(__webpack_require__.bind(null, "xcph")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("xcph")],
    modules: ["./form-components/Input"]
  }
});




const CartDrawer = ({
  complete,
  cart,
  modifyItem,
  removeFromCart,
  hideCartBar,
  setStateCoupon,
  removeCoupon
}) => {
  const {
    0: coupon,
    1: setCoupon
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");

  const handleInput = e => {
    setCoupon(e.target.value.toUpperCase());

    if (e.target.value === "" && cart.taxCouponCode != "") {
      removeCoupon(cart);
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (cart.taxCouponDiscount != 0) {
      setCoupon(cart.taxCouponCode);
    }
  }, []);

  const handleDiscount = async () => {
    // e.preventDefault();
    const {
      data
    } = await Object(_services_apis_checkout__WEBPACK_IMPORTED_MODULE_10__[/* getCoupon */ "j"])(coupon);

    if (data.status) {
      setStateCoupon(data.coupon.data.filter(data => data.id === coupon)[0], cart);
    }
  }; //console.log(cart);


  const qtyChange = (qty, oldItem) => {
    modifyItem({
      oldItem,
      newItem: _objectSpread(_objectSpread({}, oldItem), {}, {
        qty
      })
    });
  };

  const grandTotal = Object(_services_helpers_cart__WEBPACK_IMPORTED_MODULE_4__[/* getGrandTotal */ "d"])(cart.subTotal, cart.taxPercent, cart.shippingCharge, cart.taxCouponDiscount);
  console.log(cart);
  const hasItems = cart.items.length > 0 ? true : false;
  const taxPrice = cart.taxCouponDiscount ? (cart.taxCouponDiscount / 100 * cart.subTotal).toFixed(2) : 0;
  const shippingCharge = (cart.shippingCharge || 0).toFixed(2) || 0;
  console.log(taxPrice, cart.taxPercent);
  return __jsx("div", {
    className: "c-cart-drawer"
  }, hasItems && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, cart.items.map((el, i) => {
    // console.log(el);
    return __jsx(CartItem, {
      key: i,
      title: Object(_services_helpers_product__WEBPACK_IMPORTED_MODULE_3__[/* getProductTitle */ "i"])(el),
      image: Object(_services_helpers_product__WEBPACK_IMPORTED_MODULE_3__[/* getProductImage */ "f"])(el),
      subTitle: Object(_services_helpers_product__WEBPACK_IMPORTED_MODULE_3__[/* getProductShortDesc */ "h"])(el),
      price: `$${Object(_services_helpers_misc__WEBPACK_IMPORTED_MODULE_5__[/* numberFormat */ "d"])(parseFloat(el.saleprice) * el.qty)}`,
      quantity: el.qty,
      onRemove: () => removeFromCart(el),
      isDisabled: !cart.isEditable,
      onQtyChange: e => {
        if (cart.isEditable) qtyChange(e, el);
      }
    });
  }), __jsx("div", {
    className: "mt-auto"
  }), complete && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(CartItem, {
    small: true,
    title: "Subtotal",
    price: `$${Object(_services_helpers_misc__WEBPACK_IMPORTED_MODULE_5__[/* numberFormat */ "d"])(parseFloat(cart.subTotal))}`,
    total: true,
    versions: ["small", "no-border"]
  }), __jsx(CartItem, {
    small: true,
    title: "Shipping",
    price: `$${shippingCharge}`,
    total: true // versions={cart.taxPercent ? ["small", "no-border"] : ["small"]}
    ,
    versions: ["small", "no-border"]
  }), taxPrice > 0 && __jsx(CartItem, {
    small: true,
    title: "Discount" // price={`${(cart.taxPercent) ? cart.taxPercent : 0}`}
    ,
    price: `-$${taxPrice}`,
    total: true,
    versions: ["small", "no-border"]
  }), cart.taxPercent > 0 && __jsx(CartItem, {
    small: true,
    title: "Tax" // price={`${(cart.taxPercent) ? cart.taxPercent : 0}`}
    ,
    price: `$${Object(_services_helpers_misc__WEBPACK_IMPORTED_MODULE_5__[/* numberFormat */ "d"])(parseFloat(cart.taxPercent * cart.subTotal))}`,
    total: true,
    versions: ["small", "no-border"]
  }), __jsx(CartItem, {
    title: "Total",
    price: `$${grandTotal}`,
    total: true,
    versions: ["no-border"]
  }), __jsx("div", {
    className: "c-cart-drawer__discount-flex"
  }, __jsx(Input, {
    value: coupon,
    onChange: handleInput,
    placeholder: "Discount Code",
    versions: ["discount"]
  }), __jsx(Button, {
    onClick: handleDiscount,
    type: "submit",
    versions: ["discount"],
    value: "Apply"
  }))), !complete && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(CartItem, {
    title: "subtotal",
    price: `$${Object(_services_helpers_misc__WEBPACK_IMPORTED_MODULE_5__[/* numberFormat */ "d"])(parseFloat(cart.subTotal))}`,
    total: true,
    versions: ["no-border"]
  }), __jsx("div", {
    className: "c-cart-drawer__btn-wrapper row justify-content-center"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
    href: "/checkout"
  }, __jsx("a", {
    className: "c-btn c-btn--block c-btn--dark mt-5",
    style: {
      marginBottom: "4rem"
    }
  }, "Proceed to checkout"))))), !hasItems && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "c-cart-drawer__emptyCart"
  }, __jsx(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_9__["LazyLoadImage"], {
    className: "c-cart-drawer__emptyCart--icon",
    src: "/images/empty-cart.png",
    alt: "Empty Cart.."
  })), __jsx(Heading, {
    parentClass: "c-cart-item",
    versions: ["dark"],
    style: {
      textAlign: "center"
    }
  }, "Your bag is empty"), __jsx("div", {
    className: "c-cart-drawer__btn-wrapper mt-auto mb-4 row justify-content-center"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
    href: "/shop"
  }, __jsx("a", {
    onClick: hideCartBar,
    className: "c-btn c-btn--block c-btn--dark"
  }, "Continue shopping")))));
};

CartDrawer.defaultProps = {
  complete: false,
  cart: _constants_reduxInitialStates__WEBPACK_IMPORTED_MODULE_6__[/* initialCart */ "a"]
};

const mapStateToProps = state => ({
  cart: state.cart
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, {
  modifyItem: _redux_actions__WEBPACK_IMPORTED_MODULE_7__["modifyItem"],
  removeFromCart: _redux_actions__WEBPACK_IMPORTED_MODULE_7__["removeFromCart"],
  hideCartBar: _redux_actions__WEBPACK_IMPORTED_MODULE_7__["hideCartBar"],
  setStateCoupon: _redux_actions__WEBPACK_IMPORTED_MODULE_7__["setCoupon"],
  removeCoupon: _redux_actions__WEBPACK_IMPORTED_MODULE_7__["removeCoupon"]
})(CartDrawer));

/***/ })

};;