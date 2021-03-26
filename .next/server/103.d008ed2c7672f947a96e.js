exports.ids = [103];
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

/***/ })

};;