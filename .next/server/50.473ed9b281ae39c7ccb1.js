exports.ids = [50];
exports.modules = {

/***/ "tV7m":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("/T1H");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("K2gz");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_app_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("YWgu");
/* harmony import */ var _styles_app_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_app_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _constants_projectSettings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("xSWb");
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





const Drawer = next_dynamic__WEBPACK_IMPORTED_MODULE_0___default()(() => __webpack_require__.e(/* import() */ 5).then(__webpack_require__.bind(null, "lAVO")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("lAVO")],
    modules: ['./Drawer']
  }
});
const MobileMenus = next_dynamic__WEBPACK_IMPORTED_MODULE_0___default()(() => __webpack_require__.e(/* import() */ 33).then(__webpack_require__.bind(null, "m0N4")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("m0N4")],
    modules: ['./MobileMenus']
  }
});


const NavMobile = ({
  parent,
  items,
  isRight,
  isCartOpen,
  hideCartBar,
  toggleRegBar,
  isRegOpen,
  hasLogin,
  user,
  unsetUser,
  onlyCart,
  loginDisplay
}) => {
  const {
    0: isOpen,
    1: setOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false); // const [isCartOpen, setIsCartOpen] = useState(false)

  if (onlyCart) {
    return __jsx("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('c-nav__icon-menu-wrapper c-nav__icon-menu-wrapper--mobile', {
        [`${parent}__nav`]: parent
      })
    }, items.map((el, key) => __jsx("span", {
      key: key,
      onClick: el.action,
      className: "c-nav__icon c-nav__icon--mobile"
    }, el.label, __jsx(CartIcon, null))));
  }

  return __jsx("nav", {
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('c-nav c-nav--mobile', {
      [`${parent}__nav`]: parent,
      [`c-nav--right`]: isRight
    })
  }, __jsx("span", {
    onClick: () => setOpen(!isOpen),
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('c-nav__menu-tgl', {
      'c-nav__menu-tgl--opened': isOpen
    })
  }), __jsx(Drawer, {
    onClose: () => {
      setOpen(false);
    },
    title: _constants_projectSettings__WEBPACK_IMPORTED_MODULE_5__[/* projectName */ "d"],
    visible: isOpen,
    placement: "left"
  }, __jsx(MobileMenus, {
    items: items,
    user: user
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (NavMobile);

/***/ })

};;