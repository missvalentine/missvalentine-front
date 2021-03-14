exports.ids = [39];
exports.modules = {

/***/ "./components/form-components/Quantity.js":
/*!************************************************!*\
  !*** ./components/form-components/Quantity.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ \"classnames\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/akshataggarwal/Documents/Coding Files/webd projects/missvalentine-front/components/form-components/Quantity.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nclass Quantity extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      inputValue: props.value || 1\n    };\n  }\n\n  componentDidUpdate(prevProps) {\n    if (prevProps.value !== this.props.value) {\n      this.setState({\n        inputValue: this.props.value\n      });\n    }\n  }\n\n  render() {\n    const {\n      min,\n      max,\n      value,\n      onChange,\n      parentClass,\n      isDisabled\n    } = this.props;\n    const {\n      inputValue\n    } = this.state;\n    const parent = `${parentClass}__quantity`; // const [inputValue, setInputValue] = useState(value || 1)\n\n    const onInputChange = e => {\n      if (!(e < min || e > max)) {\n        this.setState({\n          inputValue: e\n        });\n        if (typeof onChange === \"function\") onChange(e);\n      }\n    };\n\n    return __jsx(\"div\", {\n      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(\"c-quantity\", {\n        [parent]: parentClass,\n        \"c-quantity--disabled\": isDisabled\n      }),\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 13\n      }\n    }, __jsx(\"div\", {\n      onClick: () => {\n        if (!isDisabled) onInputChange(inputValue - 1);\n      },\n      className: \"c-quantity__btn c-quantity__btn--minus\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 17\n      }\n    }, \"-\"), __jsx(\"span\", {\n      className: \"c-quantity__input\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 17\n      }\n    }, inputValue), __jsx(\"div\", {\n      onClick: () => {\n        if (!isDisabled) onInputChange(inputValue + 1);\n      },\n      className: \"c-quantity__btn c-quantity__btn--plus\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 17\n      }\n    }, \"+\"));\n  }\n\n} // const Quantity = () => {\n//     const parent = `${parentClass}__quantity`\n//     const [inputValue, setInputValue] = useState(value || 1)\n//     const onInputChange = (e)=> {\n//         if(!(e < min || e > max)){\n//             setInputValue(e)\n//             if(typeof onChange === \"function\") onChange(e)\n//         }\n//     }\n//     return (\n//         <div className={classNames(\"c-quantity\", {\n//             [parent]: parentClass\n//         })}>\n//             <div onClick={()=> {\n//                 onInputChange(inputValue - 1)\n//             }} className=\"c-quantity__btn c-quantity__btn--minus\">-</div>\n//             {/* <input className=\"c-quantity__input\" type=\"number\" onChange={onInputChange} min={min} max={max} value={inputValue} /> */}\n//             <span className=\"c-quantity__input\">\n//                 {inputValue}\n//             </span>\n//             <div onClick={()=> {\n//                 onInputChange(inputValue + 1)\n//             }} className=\"c-quantity__btn c-quantity__btn--plus\">+</div>\n//         </div>\n//     )\n// }\n\n\nQuantity.defaultProps = {\n  inputId: `${Math.random() * new Date().getTime()}`,\n  isDisabled: false\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Quantity);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Zvcm0tY29tcG9uZW50cy9RdWFudGl0eS5qcz8zY2RjIl0sIm5hbWVzIjpbIlF1YW50aXR5IiwiUmVhY3QiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwic3RhdGUiLCJpbnB1dFZhbHVlIiwidmFsdWUiLCJjb21wb25lbnREaWRVcGRhdGUiLCJwcmV2UHJvcHMiLCJzZXRTdGF0ZSIsInJlbmRlciIsIm1pbiIsIm1heCIsIm9uQ2hhbmdlIiwicGFyZW50Q2xhc3MiLCJpc0Rpc2FibGVkIiwicGFyZW50Iiwib25JbnB1dENoYW5nZSIsImUiLCJjbGFzc05hbWVzIiwiZGVmYXVsdFByb3BzIiwiaW5wdXRJZCIsIk1hdGgiLCJyYW5kb20iLCJEYXRlIiwiZ2V0VGltZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7QUFFQSxNQUFNQSxRQUFOLFNBQXVCQyw0Q0FBSyxDQUFDQyxTQUE3QixDQUF1QztBQUNuQ0MsYUFBVyxDQUFDQyxLQUFELEVBQU87QUFDZCxVQUFNQSxLQUFOO0FBQ0EsU0FBS0MsS0FBTCxHQUFhO0FBQ1RDLGdCQUFVLEVBQUdGLEtBQUssQ0FBQ0csS0FBTixJQUFlO0FBRG5CLEtBQWI7QUFHSDs7QUFDREMsb0JBQWtCLENBQUNDLFNBQUQsRUFBWTtBQUMxQixRQUFHQSxTQUFTLENBQUNGLEtBQVYsS0FBb0IsS0FBS0gsS0FBTCxDQUFXRyxLQUFsQyxFQUF3QztBQUNwQyxXQUFLRyxRQUFMLENBQWM7QUFDVkosa0JBQVUsRUFBRSxLQUFLRixLQUFMLENBQVdHO0FBRGIsT0FBZDtBQUdIO0FBQ0o7O0FBQ0RJLFFBQU0sR0FBRTtBQUNKLFVBQU07QUFBQ0MsU0FBRDtBQUFNQyxTQUFOO0FBQVdOLFdBQVg7QUFBa0JPLGNBQWxCO0FBQTRCQyxpQkFBNUI7QUFBeUNDO0FBQXpDLFFBQXVELEtBQUtaLEtBQWxFO0FBQ0EsVUFBTTtBQUFDRTtBQUFELFFBQWUsS0FBS0QsS0FBMUI7QUFDQSxVQUFNWSxNQUFNLEdBQUksR0FBRUYsV0FBWSxZQUE5QixDQUhJLENBSUo7O0FBQ0EsVUFBTUcsYUFBYSxHQUFJQyxDQUFELElBQU07QUFDeEIsVUFBRyxFQUFFQSxDQUFDLEdBQUdQLEdBQUosSUFBV08sQ0FBQyxHQUFHTixHQUFqQixDQUFILEVBQXlCO0FBQ3JCLGFBQUtILFFBQUwsQ0FBYztBQUNWSixvQkFBVSxFQUFHYTtBQURILFNBQWQ7QUFHQSxZQUFHLE9BQU9MLFFBQVAsS0FBb0IsVUFBdkIsRUFBbUNBLFFBQVEsQ0FBQ0ssQ0FBRCxDQUFSO0FBQ3RDO0FBQ0osS0FQRDs7QUFRQSxXQUNJO0FBQUssZUFBUyxFQUFFQyxpREFBVSxDQUFDLFlBQUQsRUFBZTtBQUNyQyxTQUFDSCxNQUFELEdBQVVGLFdBRDJCO0FBRXJDLGdDQUF3QkM7QUFGYSxPQUFmLENBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FJSTtBQUFLLGFBQU8sRUFBRSxNQUFLO0FBQ2YsWUFBRyxDQUFDQSxVQUFKLEVBQ0FFLGFBQWEsQ0FBQ1osVUFBVSxHQUFHLENBQWQsQ0FBYjtBQUNILE9BSEQ7QUFHRyxlQUFTLEVBQUMsd0NBSGI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUpKLEVBU0k7QUFBTSxlQUFTLEVBQUMsbUJBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDS0EsVUFETCxDQVRKLEVBWUk7QUFBSyxhQUFPLEVBQUUsTUFBSztBQUNmLFlBQUcsQ0FBQ1UsVUFBSixFQUNBRSxhQUFhLENBQUNaLFVBQVUsR0FBRyxDQUFkLENBQWI7QUFDSCxPQUhEO0FBR0csZUFBUyxFQUFDLHVDQUhiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FaSixDQURKO0FBbUJIOztBQTlDa0MsQyxDQWdEdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0FOLFFBQVEsQ0FBQ3FCLFlBQVQsR0FBd0I7QUFDcEJDLFNBQU8sRUFBRyxHQUFFQyxJQUFJLENBQUNDLE1BQUwsS0FBZ0IsSUFBSUMsSUFBSixHQUFXQyxPQUFYLEVBQXFCLEVBRDdCO0FBRXBCVixZQUFVLEVBQUU7QUFGUSxDQUF4QjtBQUllaEIsdUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL2Zvcm0tY29tcG9uZW50cy9RdWFudGl0eS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnXG5cbmNsYXNzIFF1YW50aXR5IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgaW5wdXRWYWx1ZSA6IHByb3BzLnZhbHVlIHx8IDFcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCl7XG4gICAgICAgIGlmKHByZXZQcm9wcy52YWx1ZSAhPT0gdGhpcy5wcm9wcy52YWx1ZSl7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBpbnB1dFZhbHVlOiB0aGlzLnByb3BzLnZhbHVlXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuICAgIHJlbmRlcigpe1xuICAgICAgICBjb25zdCB7bWluLCBtYXgsIHZhbHVlLCBvbkNoYW5nZSwgcGFyZW50Q2xhc3MsIGlzRGlzYWJsZWR9ID0gdGhpcy5wcm9wc1xuICAgICAgICBjb25zdCB7aW5wdXRWYWx1ZX0gPSB0aGlzLnN0YXRlXG4gICAgICAgIGNvbnN0IHBhcmVudCA9IGAke3BhcmVudENsYXNzfV9fcXVhbnRpdHlgXG4gICAgICAgIC8vIGNvbnN0IFtpbnB1dFZhbHVlLCBzZXRJbnB1dFZhbHVlXSA9IHVzZVN0YXRlKHZhbHVlIHx8IDEpXG4gICAgICAgIGNvbnN0IG9uSW5wdXRDaGFuZ2UgPSAoZSk9PiB7XG4gICAgICAgICAgICBpZighKGUgPCBtaW4gfHwgZSA+IG1heCkpe1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICBpbnB1dFZhbHVlIDogZVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgaWYodHlwZW9mIG9uQ2hhbmdlID09PSBcImZ1bmN0aW9uXCIpIG9uQ2hhbmdlKGUpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFwiYy1xdWFudGl0eVwiLCB7XG4gICAgICAgICAgICAgICAgW3BhcmVudF06IHBhcmVudENsYXNzLFxuICAgICAgICAgICAgICAgIFwiYy1xdWFudGl0eS0tZGlzYWJsZWRcIjogaXNEaXNhYmxlZFxuICAgICAgICAgICAgfSl9PlxuICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17KCk9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmKCFpc0Rpc2FibGVkKVxuICAgICAgICAgICAgICAgICAgICBvbklucHV0Q2hhbmdlKGlucHV0VmFsdWUgLSAxKVxuICAgICAgICAgICAgICAgIH19IGNsYXNzTmFtZT1cImMtcXVhbnRpdHlfX2J0biBjLXF1YW50aXR5X19idG4tLW1pbnVzXCI+LTwvZGl2PlxuICAgICAgICAgICAgICAgIHsvKiA8aW5wdXQgY2xhc3NOYW1lPVwiYy1xdWFudGl0eV9faW5wdXRcIiB0eXBlPVwibnVtYmVyXCIgb25DaGFuZ2U9e29uSW5wdXRDaGFuZ2V9IG1pbj17bWlufSBtYXg9e21heH0gdmFsdWU9e2lucHV0VmFsdWV9IC8+ICovfVxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImMtcXVhbnRpdHlfX2lucHV0XCI+XG4gICAgICAgICAgICAgICAgICAgIHtpbnB1dFZhbHVlfVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZighaXNEaXNhYmxlZClcbiAgICAgICAgICAgICAgICAgICAgb25JbnB1dENoYW5nZShpbnB1dFZhbHVlICsgMSlcbiAgICAgICAgICAgICAgICB9fSBjbGFzc05hbWU9XCJjLXF1YW50aXR5X19idG4gYy1xdWFudGl0eV9fYnRuLS1wbHVzXCI+KzwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59XG4vLyBjb25zdCBRdWFudGl0eSA9ICgpID0+IHtcbi8vICAgICBjb25zdCBwYXJlbnQgPSBgJHtwYXJlbnRDbGFzc31fX3F1YW50aXR5YFxuLy8gICAgIGNvbnN0IFtpbnB1dFZhbHVlLCBzZXRJbnB1dFZhbHVlXSA9IHVzZVN0YXRlKHZhbHVlIHx8IDEpXG4vLyAgICAgY29uc3Qgb25JbnB1dENoYW5nZSA9IChlKT0+IHtcbi8vICAgICAgICAgaWYoIShlIDwgbWluIHx8IGUgPiBtYXgpKXtcbi8vICAgICAgICAgICAgIHNldElucHV0VmFsdWUoZSlcbi8vICAgICAgICAgICAgIGlmKHR5cGVvZiBvbkNoYW5nZSA9PT0gXCJmdW5jdGlvblwiKSBvbkNoYW5nZShlKVxuLy8gICAgICAgICB9XG4vLyAgICAgfVxuLy8gICAgIHJldHVybiAoXG4vLyAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFwiYy1xdWFudGl0eVwiLCB7XG4vLyAgICAgICAgICAgICBbcGFyZW50XTogcGFyZW50Q2xhc3Ncbi8vICAgICAgICAgfSl9PlxuLy8gICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKT0+IHtcbi8vICAgICAgICAgICAgICAgICBvbklucHV0Q2hhbmdlKGlucHV0VmFsdWUgLSAxKVxuLy8gICAgICAgICAgICAgfX0gY2xhc3NOYW1lPVwiYy1xdWFudGl0eV9fYnRuIGMtcXVhbnRpdHlfX2J0bi0tbWludXNcIj4tPC9kaXY+XG4vLyAgICAgICAgICAgICB7LyogPGlucHV0IGNsYXNzTmFtZT1cImMtcXVhbnRpdHlfX2lucHV0XCIgdHlwZT1cIm51bWJlclwiIG9uQ2hhbmdlPXtvbklucHV0Q2hhbmdlfSBtaW49e21pbn0gbWF4PXttYXh9IHZhbHVlPXtpbnB1dFZhbHVlfSAvPiAqL31cbi8vICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImMtcXVhbnRpdHlfX2lucHV0XCI+XG4vLyAgICAgICAgICAgICAgICAge2lucHV0VmFsdWV9XG4vLyAgICAgICAgICAgICA8L3NwYW4+XG4vLyAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpPT4ge1xuLy8gICAgICAgICAgICAgICAgIG9uSW5wdXRDaGFuZ2UoaW5wdXRWYWx1ZSArIDEpXG4vLyAgICAgICAgICAgICB9fSBjbGFzc05hbWU9XCJjLXF1YW50aXR5X19idG4gYy1xdWFudGl0eV9fYnRuLS1wbHVzXCI+KzwvZGl2PlxuLy8gICAgICAgICA8L2Rpdj5cbi8vICAgICApXG4vLyB9XG5RdWFudGl0eS5kZWZhdWx0UHJvcHMgPSB7XG4gICAgaW5wdXRJZDogYCR7TWF0aC5yYW5kb20oKSAqIG5ldyBEYXRlKCkuZ2V0VGltZSgpfWAsXG4gICAgaXNEaXNhYmxlZDogZmFsc2Vcbn1cbmV4cG9ydCBkZWZhdWx0IFF1YW50aXR5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/form-components/Quantity.js\n");

/***/ })

};;