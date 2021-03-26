exports.ids = [80];
exports.modules = {

/***/ "YWgu":
/***/ (function(module, exports) {



/***/ }),

/***/ "dd2H":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("/T1H");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("xnum");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("FHnF");
/* harmony import */ var react_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _constants_projectSettings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("xSWb");
/* harmony import */ var _styles_app_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("YWgu");
/* harmony import */ var _styles_app_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_app_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _redux_actions_drawers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("JLUA");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("oL/c");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_8__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




const Heading = next_dynamic__WEBPACK_IMPORTED_MODULE_0___default()(() => __webpack_require__.e(/* import() */ 0).then(__webpack_require__.bind(null, "h1bS")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("h1bS")],
    modules: ["../../components/Heading"]
  }
});


const Logo = next_dynamic__WEBPACK_IMPORTED_MODULE_0___default()(() => __webpack_require__.e(/* import() */ 16).then(__webpack_require__.bind(null, "TtQW")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("TtQW")],
    modules: ["../Logo"]
  }
});
const CartDrawer = next_dynamic__WEBPACK_IMPORTED_MODULE_0___default()(() => __webpack_require__.e(/* import() */ 14).then(__webpack_require__.bind(null, "K97z")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("K97z")],
    modules: ["../CartDrawer"]
  }
});

const Drawer = next_dynamic__WEBPACK_IMPORTED_MODULE_0___default()(() => __webpack_require__.e(/* import() */ 6).then(__webpack_require__.bind(null, "lAVO")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("lAVO")],
    modules: ["../Drawer"]
  }
});
const Registration = next_dynamic__WEBPACK_IMPORTED_MODULE_0___default()(() => __webpack_require__.e(/* import() */ 78).then(__webpack_require__.bind(null, "foi1")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("foi1")],
    modules: ["../popups/Registration"]
  }
});
const ForgetPassword = next_dynamic__WEBPACK_IMPORTED_MODULE_0___default()(() => __webpack_require__.e(/* import() */ 13).then(__webpack_require__.bind(null, "ZHf+")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("ZHf+")],
    modules: ["../popups/ForgetPassword"]
  }
});
const Login = next_dynamic__WEBPACK_IMPORTED_MODULE_0___default()(() => __webpack_require__.e(/* import() */ 5).then(__webpack_require__.bind(null, "hmzm")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("hmzm")],
    modules: ["../popups/Login"]
  }
});



const CheckoutLayout = ({
  title,
  children,
  isRegOpen,
  hasLogin,
  toggleRegBar,
  loginDisplay
}) => {
  const {
    0: isOpen,
    1: setIsOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true);
  const {
    0: windowWidth,
    1: setWindowWidth
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false ? undefined : 0);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth !== windowWidth) {
        setWindowWidth(window.innerWidth);
        resetOpen(windowWidth, isOpen);
      }
    });
    setWindowWidth(window.innerWidth);
    resetOpen(windowWidth, isOpen);
  }, [windowWidth]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    window.myCallbackFunc = function () {};
  });

  const toggle = () => setIsOpen(!isOpen);

  const resetOpen = (width = 0, isOpen) => {
    if (width < 768) {
      if (isOpen) setIsOpen(false);
    } else {
      if (!isOpen) setIsOpen(true);
    }
  };

  const DrawerTitle = ({
    onClose,
    title
  }) => __jsx("div", {
    className: "c-drawer-title c-drawer__title"
  }, __jsx("div", {
    className: "c-drawer-title__go-back-wrapper"
  }), __jsx("div", {
    className: "c-drawer-title__header"
  }, __jsx("div", {
    className: "row"
  }, __jsx("div", {
    className: "col"
  }, __jsx(Heading, {
    parentClass: "c-cart-title",
    className: "c-cart-title__heading",
    versions: ["default", "dark", "upper"]
  }, title)))));

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    className: "c-checkout-layout container-fluid"
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, null, __jsx("title", null, title ? title : _constants_projectSettings__WEBPACK_IMPORTED_MODULE_4__[/* default */ "d"].projectName), __jsx("link", {
    rel: "icon",
    href: "/favicon.ico"
  })), __jsx("div", {
    className: "c-checkout-layout__row row"
  }, __jsx("div", {
    className: "c-checkout-layout__main col-md-7 order-1 order-md-0 "
  }, __jsx("div", {
    className: "d-none d-md-block c-checkout-layout__logo-wrapper"
  }, __jsx(Logo, {
    full: true,
    parentClass: "c-checkout-layout"
  })), children), __jsx("div", {
    className: "c-checkout-layout__cart-col col-md-4 order-0 order-md-1"
  }, __jsx("div", {
    className: "d-block d-md-none"
  }, __jsx("div", {
    className: "c-checkout-layout__logo-wrapper "
  }, __jsx(Logo, {
    full: true,
    parentClass: "c-checkout-layout"
  })), __jsx(Heading, {
    parentClass: "c-heading d-block d-md-none c-checkout ",
    versions: ["upper"]
  }, "Checkout"), __jsx("div", {
    className: "order-summary"
  }, __jsx(Heading, {
    onClick: toggle,
    parentClass: "c-checkout-layout",
    versions: ["medium", "black"]
  }, __jsx("span", {
    className: "d-flex c-checkout-layout__btn "
  }, __jsx(react_svg__WEBPACK_IMPORTED_MODULE_3___default.a, {
    className: "c-checkout-layout__cart-icon",
    src: "/images/cart-icon-1.svg"
  }), " ", "Show order summary ", isOpen ? "-" : "+")))), __jsx(DrawerTitle, {
    title: "My Cart"
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Collapse"], {
    isOpen: isOpen
  }, __jsx(CartDrawer, {
    complete: true
  }))), __jsx("div", {
    className: "c-checkout-layout col-md-1 order-3 order-md-3"
  })), __jsx(Drawer, {
    onClose: toggleRegBar,
    title: loginDisplay === "register" ? "Registration" : "Login",
    visible: isRegOpen
  }, loginDisplay === "register" && __jsx(Registration, null), loginDisplay === "login" && __jsx(Login, null), loginDisplay === "forget" && __jsx(ForgetPassword, null))));
};

const mapStateToProps = state => ({
  isRegOpen: state.drawers.isRegOpen,
  hasLogin: state.drawers.hasLogin,
  loginDisplay: state.drawers.toDisplay,
  user: state.user
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(mapStateToProps, {
  toggleRegBar: _redux_actions_drawers__WEBPACK_IMPORTED_MODULE_7__[/* toggleRegBar */ "f"]
})(CheckoutLayout));

/***/ })

};;