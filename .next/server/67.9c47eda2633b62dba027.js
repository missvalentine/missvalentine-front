exports.ids = [67,1,81,86,103];
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

/***/ }),

/***/ "PNxv":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("K2gz");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


class Quantity extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: props.value || 1
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.value !== this.props.value) {
      this.setState({
        inputValue: this.props.value
      });
    }
  }

  render() {
    const {
      min,
      max,
      value,
      onChange,
      parentClass,
      isDisabled
    } = this.props;
    const {
      inputValue
    } = this.state;
    const parent = `${parentClass}__quantity`; // const [inputValue, setInputValue] = useState(value || 1)

    const onInputChange = e => {
      if (!(e < min || e > max)) {
        this.setState({
          inputValue: e
        });
        if (typeof onChange === "function") onChange(e);
      }
    };

    return __jsx("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("c-quantity", {
        [parent]: parentClass,
        "c-quantity--disabled": isDisabled
      })
    }, __jsx("div", {
      onClick: () => {
        if (!isDisabled) onInputChange(inputValue - 1);
      },
      className: "c-quantity__btn c-quantity__btn--minus"
    }, "-"), __jsx("span", {
      className: "c-quantity__input"
    }, inputValue), __jsx("div", {
      onClick: () => {
        if (!isDisabled) onInputChange(inputValue + 1);
      },
      className: "c-quantity__btn c-quantity__btn--plus"
    }, "+"));
  }

} // const Quantity = () => {
//     const parent = `${parentClass}__quantity`
//     const [inputValue, setInputValue] = useState(value || 1)
//     const onInputChange = (e)=> {
//         if(!(e < min || e > max)){
//             setInputValue(e)
//             if(typeof onChange === "function") onChange(e)
//         }
//     }
//     return (
//         <div className={classNames("c-quantity", {
//             [parent]: parentClass
//         })}>
//             <div onClick={()=> {
//                 onInputChange(inputValue - 1)
//             }} className="c-quantity__btn c-quantity__btn--minus">-</div>
//             {/* <input className="c-quantity__input" type="number" onChange={onInputChange} min={min} max={max} value={inputValue} /> */}
//             <span className="c-quantity__input">
//                 {inputValue}
//             </span>
//             <div onClick={()=> {
//                 onInputChange(inputValue + 1)
//             }} className="c-quantity__btn c-quantity__btn--plus">+</div>
//         </div>
//     )
// }


Quantity.defaultProps = {
  inputId: `${Math.random() * new Date().getTime()}`,
  isDisabled: false
};
/* harmony default export */ __webpack_exports__["default"] = (Quantity);

/***/ }),

/***/ "Ws9w":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("/T1H");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("K2gz");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _form_components_Quantity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("PNxv");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("Exp3");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _constants_projectSettings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("xSWb");
/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("g8bt");
/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_6__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



const Heading = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(() => __webpack_require__.e(/* import() */ 0).then(__webpack_require__.bind(null, "h1bS")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("h1bS")],
    modules: ["./Heading"]
  }
});





const CartItem = (_ref) => {
  let {
    title,
    subTitle,
    price,
    image,
    quantity,
    onRemove,
    onQtyChange,
    total,
    parentClass,
    versions,
    isDisabled,
    isSearch,
    clearSearch
  } = _ref,
      props = _objectWithoutProperties(_ref, ["title", "subTitle", "price", "image", "quantity", "onRemove", "onQtyChange", "total", "parentClass", "versions", "isDisabled", "isSearch", "clearSearch"]);

  const componentClass = "c-cart-item";
  const versionClass = versions.map(el => `${componentClass}--${el}`).join(" ");
  const parent = `${parentClass}__${componentClass.replace("c-", "")}`;
  const className = classnames__WEBPACK_IMPORTED_MODULE_2___default()(componentClass, {
    [versionClass]: versions,
    [parent]: parentClass
  });

  if (total) {
    return __jsx("div", {
      className: "c-cart-item__total"
    }, __jsx("h2", {
      className: "c-cart-item__total-title"
    }, title), __jsx("h2", {
      className: "c-cart-item__total-price"
    }, price));
  }

  if (isSearch) {
    return __jsx("div", {
      onClick: clearSearch // href={`/shop/${title.replace(/ /g, "-")}`}

    }, __jsx("div", {
      className: "c-cart-item__search"
    }, __jsx("div", {
      className: "c-cart-item__search--img-wrapper"
    }, __jsx(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_6__["LazyLoadImage"], {
      width: "100",
      height: "100",
      src: `${_constants_projectSettings__WEBPACK_IMPORTED_MODULE_5__[/* default */ "d"].serverUrl}${image}`
    })), __jsx("div", {
      className: "c-cart-item__search--content"
    }, __jsx("h2", {
      className: "c-cart-item__search--content-title"
    }, title.split(/(\d+)/)[0]), __jsx("div", {
      className: "c-cart-item__search--strength-and-price"
    }, __jsx("h2", {
      className: "c-cart-item__search--strength-and-price-strength"
    }, subTitle, " mg"), __jsx("h2", {
      className: "c-cart-item__search--strength-and-price-price"
    }, price)))));
  }

  return __jsx("div", {
    className: className
  }, __jsx("div", {
    className: "c-cart-item__img-wrapper"
  }, __jsx(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_6__["LazyLoadImage"], {
    src: `${_constants_projectSettings__WEBPACK_IMPORTED_MODULE_5__[/* default */ "d"].serverUrl}${image}`
  })), __jsx("div", {
    className: "c-cart-item__rightSpan"
  }, __jsx("div", {
    className: "c-cart-item__details"
  }, __jsx("h2", {
    className: "c-cart-item__details--product-name"
  }, title), __jsx("div", {
    className: "c-cart-item__details--remove-btn"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Icon"], {
    onClick: onRemove,
    className: "c-cart-item__close",
    type: "close"
  }))), __jsx("div", {
    className: "c-cart-item__price-wrapper"
  }, __jsx("div", {
    className: "c-cart-item__price-wrapper--quantity-wrapper"
  }, __jsx(_form_components_Quantity__WEBPACK_IMPORTED_MODULE_3__["default"], {
    min: 1,
    isDisabled: isDisabled,
    onChange: onQtyChange,
    value: quantity,
    parentClass: "c-cart-item"
  })), __jsx("h2", {
    className: "c-cart-item__price-wrapper--price"
  }, price))));
};

CartItem.defaultProps = {
  versions: [],
  isDisabled: false
};
/* harmony default export */ __webpack_exports__["default"] = (CartItem);

/***/ }),

/***/ "m0N4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("K2gz");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_app_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("YWgu");
/* harmony import */ var _styles_app_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_app_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _redux_actions_drawers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("JLUA");
/* harmony import */ var _redux_actions_user__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("j6IE");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("Exp3");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _form_components_Input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("xcph");
/* harmony import */ var _CartIcon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("/YCn");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("nZwT");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _services_apis_apiList__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("Wol/");
/* harmony import */ var _services_helpers_product__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("OWVN");
/* harmony import */ var _constants_projectSettings__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("xSWb");
/* harmony import */ var _CartItem__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("Ws9w");
/* harmony import */ var _services_helpers_misc__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("yH4c");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

















const {
  SubMenu
} = antd__WEBPACK_IMPORTED_MODULE_7__["Menu"];

const MobileMenu = ({
  items,
  user,
  toggleCartBar,
  toggleRegBar
}) => {
  const {
    0: isOpen,
    1: setOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: search,
    1: setSearch
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: display,
    1: setDisplay
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: products,
    1: setProducts
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);

  const onSubmit = e => {
    //console.log(`${window.location.origin}/search/${search}`);
    // window.location.href(`${window.location.origin}/search/${search}`)
    if (e.key === 'Enter') {
      Router.push(`/search/${search}`);
    }
  };

  const menu = __jsx("div", {
    className: "search-container"
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_7__["Menu"], null, __jsx("div", {
    style: {
      marginTop: '40px'
    }
  }), products.length > 0 ? products.map((product, i) => __jsx(antd__WEBPACK_IMPORTED_MODULE_7__["Menu"].Item, {
    style: {
      height: 'fit-content'
    },
    key: i
  }, __jsx("div", {
    className: "c-cart-drawer"
  }, __jsx(_CartItem__WEBPACK_IMPORTED_MODULE_14__["default"], {
    key: i,
    title: product.title,
    image: product.image,
    subTitle: product.totalcbdmg,
    price: `$${Object(_services_helpers_misc__WEBPACK_IMPORTED_MODULE_15__[/* numberFormat */ "d"])(parseFloat(product.price.sale_price))}`,
    isSearch: true,
    clearSearch: () => {
      setDisplay(false);
      setSearch('');
      setProducts([]);
      Router.push(`/shop/${product.title.replace(/ /g, '-')}`);
    }
  })))) : __jsx(SubMenu, null, __jsx("h2", null, "No records found"))));

  const filterProducts = async value => {
    setSearch(value);

    if (value === '') {
      setDisplay(false);
      setProducts([]);
      return;
    }

    setDisplay(true);
    const res = await fetch(_services_apis_apiList__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"].getAllProducts);
    const productList = await res.json();
    const visibleProducts = Object(_services_helpers_product__WEBPACK_IMPORTED_MODULE_12__[/* getVisibleProducts */ "j"])(productList.products);
    const newList = visibleProducts.map(el => Object(_services_helpers_product__WEBPACK_IMPORTED_MODULE_12__[/* addSlugToProduct */ "a"])(el));
    const productsRow = newList.map(el => {
      return _objectSpread(_objectSpread({}, el), {}, {
        image: el.productImage ? _constants_projectSettings__WEBPACK_IMPORTED_MODULE_13__[/* default */ "d"].serverUrl + el.productImage : '//via.placeholder.com/300x500',
        title: Object(_services_helpers_product__WEBPACK_IMPORTED_MODULE_12__[/* getProductTitle */ "i"])(el),
        subTitle: Object(_services_helpers_product__WEBPACK_IMPORTED_MODULE_12__[/* getProductShortDesc */ "h"])(el),
        price: Object(_services_helpers_product__WEBPACK_IMPORTED_MODULE_12__[/* getBasicPrice */ "c"])(el),
        qty: 1
      });
    });
    const applySearch = productsRow.filter(el => {
      if (value === '') return false;
      return el.title.toLowerCase().includes(value.toLowerCase());
    }); // console.log(applySearch);

    setProducts(applySearch);
  };

  const onClick = (e, action) => {
    if (action === "link") {}

    if (action === "cart") {
      toggleCartBar(); // setIsCartOpen(!isCartOpen)
    }

    if (action === "reg") {
      toggleRegBar();
    }

    if (action === "logout") {
      Object(_redux_actions_user__WEBPACK_IMPORTED_MODULE_6__[/* unsetUser */ "b"])();
    }
  };

  return __jsx("ul", {
    className: "c-nav__list"
  }, items.filter(el => {
    console.log(el);

    if (user._id) {
      return el.onlyLogin !== false;
    } else {
      return el.onlyLogin !== true;
    }
  }).map((el, ind) => __jsx("li", {
    key: ind,
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()("c-nav__list-item", {
      "c-nav__list-item--has-sub-menu": el.subMenus
    })
  }, el.action === 'input' ? __jsx("div", {
    style: {
      position: 'relative'
    }
  }, __jsx(_form_components_Input__WEBPACK_IMPORTED_MODULE_8__["default"], {
    prefix: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_10__["SearchOutlined"], {
      style: {
        color: '#aaaaaa'
      }
    }),
    value: search,
    onChange: e => filterProducts(e.target.value),
    onKeyDown: onSubmit,
    label: "Search"
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_7__["Dropdown"], {
    overlayStyle: {
      position: 'absolute',
      top: '0 !important',
      left: '0 !important',
      width: '400px',
      height: '500px',
      overflow: 'scroll'
    },
    visible: display // visible={true}
    ,
    onVisibleChange: () => setDisplay(!display),
    overlay: menu
  }, __jsx("a", {
    className: "ant-dropdown-link",
    onClick: e => e.preventDefault()
  }))) : "", el.link ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    as: el.as || el.link,
    href: el.link
  }, __jsx("a", {
    onClick: e => {
      onClick(e, el.action);
    },
    className: "c-nav__link"
  }, el.label, el.icon)) : __jsx("span", {
    onClick: e => {
      onClick(e, el.action);
    },
    className: "c-nav__link"
  }, el.label, el.icon), el.subMenus && __jsx("ul", {
    className: "c-nav__sub-menu"
  }, el.subMenus.map((elx, i) => __jsx("li", {
    key: i,
    className: "c-nav__sub-menu-item"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    as: elx.as || elx.link,
    href: elx.link
  }, __jsx("a", {
    className: "c-nav__link c-nav__link--sub"
  }, elx.label))))))));
};

MobileMenu.defaultProps = {
  items: []
};

const mapStateToProps = state => ({
  isCartOpen: state.drawers.isCartOpen,
  isRegOpen: state.drawers.isRegOpen,
  hasLogin: state.drawers.hasLogin,
  user: state.user
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, {
  toggleCartBar: _redux_actions_drawers__WEBPACK_IMPORTED_MODULE_5__[/* toggleCartBar */ "e"],
  hideCartBar: _redux_actions_drawers__WEBPACK_IMPORTED_MODULE_5__[/* hideCartBar */ "b"],
  toggleRegBar: _redux_actions_drawers__WEBPACK_IMPORTED_MODULE_5__[/* toggleRegBar */ "f"],
  unsetUser: _redux_actions_user__WEBPACK_IMPORTED_MODULE_6__[/* unsetUser */ "b"]
})(MobileMenu));

/***/ }),

/***/ "xcph":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("K2gz");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Exp3");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("nZwT");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





class Input extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    const _this$props = this.props,
          {
      value,
      onChange,
      parentClass,
      inputId,
      label,
      type,
      suffix,
      prefix,
      versions,
      name,
      wrapperClass
    } = _this$props,
          props = _objectWithoutProperties(_this$props, ["value", "onChange", "parentClass", "inputId", "label", "type", "suffix", "prefix", "versions", "name", "wrapperClass"]);

    const componentClass = "c-input";
    const versionClass = versions.map(el => `${componentClass}--${el}`).join(" ");
    const parent = `${parentClass}__${componentClass.replace("c-", "")}`;
    const className = classnames__WEBPACK_IMPORTED_MODULE_1___default()(componentClass, {
      [versionClass]: versions,
      [parent]: parentClass,
      [wrapperClass]: wrapperClass
    });

    if (type == "password") {
      return __jsx("div", {
        className: className
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Input"].Password, _extends({
        onChange: onChange // id={inputId}

      }, props, {
        name: name,
        type: type,
        value: value,
        placeholder: label,
        prefix: prefix,
        suffix: suffix,
        allowClear: versions.filter(version => version === "discount")[0] === "discount" ? true : false,
        className: versions[0] === "discount" ? "c-input" : "c-input__input"
      })));
    } else {
      return __jsx("div", {
        className: className,
        style: {
          width: '100%'
        }
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Input"], _extends({
        onChange: onChange // id={inputId}

      }, props, {
        name: name,
        type: type,
        value: value,
        placeholder: label,
        prefix: prefix,
        suffix: suffix,
        allowClear: versions.filter(version => version === "discount")[0] === "discount" ? true : false,
        className: versions[0] === "discount" ? "c-input" : "c-input__input"
      })));
    }
  }

}

Input.defaultProps = {
  inputId: `${parseInt(Math.random() * new Date().getTime())}`,
  type: "text",
  versions: ["default"]
};
/* harmony default export */ __webpack_exports__["default"] = (Input);

/***/ })

};;