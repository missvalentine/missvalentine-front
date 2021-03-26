exports.ids = [81,103];
exports.modules = {

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

/***/ })

};;