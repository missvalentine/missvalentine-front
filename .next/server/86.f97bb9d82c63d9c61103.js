exports.ids = [86];
exports.modules = {

/***/ "/YCn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("FHnF");
/* harmony import */ var react_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_svg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("YLtl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const CartIcon = (_ref) => {
  let {
    items
  } = _ref,
      props = _objectWithoutProperties(_ref, ["items"]);

  const itemCount = lodash__WEBPACK_IMPORTED_MODULE_3___default.a.flatten([...items.map(el => Array(el.qty || 0).fill(0))]).length || 0;

  if (itemCount > 0) {
    return __jsx("span", {
      className: "c-cart-icon"
    }, __jsx("span", {
      className: "c-cart-icon__count"
    }, itemCount), __jsx(react_svg__WEBPACK_IMPORTED_MODULE_2___default.a, {
      src: "/images/cart-icon-active.svg"
    }));
  } else {
    return __jsx(react_svg__WEBPACK_IMPORTED_MODULE_2___default.a, {
      src: "/images/cart-icon-1.svg"
    });
  }
};

CartIcon.defaultProps = {
  items: []
};

const MapStateToProps = state => ({
  items: state.cart.items
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(MapStateToProps)(CartIcon));

/***/ })

};;