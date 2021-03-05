exports.ids = [2];
exports.modules = {

/***/ "./components/form-components/Input.js":
/*!*********************************************!*\
  !*** ./components/form-components/Input.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ \"classnames\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ \"antd\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ant-design/icons */ \"@ant-design/icons\");\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/Users/akshataggarwal/Documents/Coding Files/webd projects/missnew front/components/form-components/Input.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\n\n\n\n\nclass Input extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  render() {\n    const _this$props = this.props,\n          {\n      value,\n      onChange,\n      parentClass,\n      inputId,\n      label,\n      type,\n      suffix,\n      prefix,\n      versions,\n      name,\n      wrapperClass\n    } = _this$props,\n          props = _objectWithoutProperties(_this$props, [\"value\", \"onChange\", \"parentClass\", \"inputId\", \"label\", \"type\", \"suffix\", \"prefix\", \"versions\", \"name\", \"wrapperClass\"]);\n\n    const componentClass = \"c-input\";\n    const versionClass = versions.map(el => `${componentClass}--${el}`).join(\" \");\n    const parent = `${parentClass}__${componentClass.replace(\"c-\", \"\")}`;\n    const className = classnames__WEBPACK_IMPORTED_MODULE_1___default()(componentClass, {\n      [versionClass]: versions,\n      [parent]: parentClass,\n      [wrapperClass]: wrapperClass\n    });\n\n    if (type == \"password\") {\n      return __jsx(\"div\", {\n        className: className,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 32,\n          columnNumber: 9\n        }\n      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__[\"Input\"].Password, _extends({\n        onChange: onChange // id={inputId}\n\n      }, props, {\n        name: name,\n        type: type,\n        value: value,\n        placeholder: label,\n        prefix: prefix,\n        suffix: suffix,\n        allowClear: versions.filter(version => version === \"discount\")[0] === \"discount\" ? true : false,\n        className: versions[0] === \"discount\" ? \"c-input\" : \"c-input__input\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 33,\n          columnNumber: 11\n        }\n      })));\n    } else {\n      return __jsx(\"div\", {\n        className: className,\n        style: {\n          width: '100%'\n        },\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 56,\n          columnNumber: 7\n        }\n      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__[\"Input\"], _extends({\n        onChange: onChange // id={inputId}\n\n      }, props, {\n        name: name,\n        type: type,\n        value: value,\n        placeholder: label,\n        prefix: prefix,\n        suffix: suffix,\n        allowClear: versions.filter(version => version === \"discount\")[0] === \"discount\" ? true : false,\n        className: versions[0] === \"discount\" ? \"c-input\" : \"c-input__input\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 57,\n          columnNumber: 9\n        }\n      })));\n    }\n  }\n\n}\n\nInput.defaultProps = {\n  inputId: `${parseInt(Math.random() * new Date().getTime())}`,\n  type: \"text\",\n  versions: [\"default\"]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Input);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Zvcm0tY29tcG9uZW50cy9JbnB1dC5qcz9jNWNhIl0sIm5hbWVzIjpbIklucHV0IiwiUmVhY3QiLCJDb21wb25lbnQiLCJyZW5kZXIiLCJwcm9wcyIsInZhbHVlIiwib25DaGFuZ2UiLCJwYXJlbnRDbGFzcyIsImlucHV0SWQiLCJsYWJlbCIsInR5cGUiLCJzdWZmaXgiLCJwcmVmaXgiLCJ2ZXJzaW9ucyIsIm5hbWUiLCJ3cmFwcGVyQ2xhc3MiLCJjb21wb25lbnRDbGFzcyIsInZlcnNpb25DbGFzcyIsIm1hcCIsImVsIiwiam9pbiIsInBhcmVudCIsInJlcGxhY2UiLCJjbGFzc05hbWUiLCJjbGFzc05hbWVzIiwiZmlsdGVyIiwidmVyc2lvbiIsIndpZHRoIiwiZGVmYXVsdFByb3BzIiwicGFyc2VJbnQiLCJNYXRoIiwicmFuZG9tIiwiRGF0ZSIsImdldFRpbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBQ0EsTUFBTUEsS0FBTixTQUFvQkMsNENBQUssQ0FBQ0MsU0FBMUIsQ0FBb0M7QUFDbENDLFFBQU0sR0FBRztBQUNQLHdCQWFJLEtBQUtDLEtBYlQ7QUFBQSxVQUFNO0FBQ0pDLFdBREk7QUFFSkMsY0FGSTtBQUdKQyxpQkFISTtBQUlKQyxhQUpJO0FBS0pDLFdBTEk7QUFNSkMsVUFOSTtBQU9KQyxZQVBJO0FBUUpDLFlBUkk7QUFTSkMsY0FUSTtBQVVKQyxVQVZJO0FBV0pDO0FBWEksS0FBTjtBQUFBLFVBWUtYLEtBWkw7O0FBY0EsVUFBTVksY0FBYyxHQUFHLFNBQXZCO0FBQ0EsVUFBTUMsWUFBWSxHQUFHSixRQUFRLENBQzFCSyxHQURrQixDQUNiQyxFQUFELElBQVMsR0FBRUgsY0FBZSxLQUFJRyxFQUFHLEVBRG5CLEVBRWxCQyxJQUZrQixDQUViLEdBRmEsQ0FBckI7QUFHQSxVQUFNQyxNQUFNLEdBQUksR0FBRWQsV0FBWSxLQUFJUyxjQUFjLENBQUNNLE9BQWYsQ0FBdUIsSUFBdkIsRUFBNkIsRUFBN0IsQ0FBaUMsRUFBbkU7QUFDQSxVQUFNQyxTQUFTLEdBQUdDLGlEQUFVLENBQUNSLGNBQUQsRUFBaUI7QUFDM0MsT0FBQ0MsWUFBRCxHQUFnQkosUUFEMkI7QUFFM0MsT0FBQ1EsTUFBRCxHQUFVZCxXQUZpQztBQUczQyxPQUFDUSxZQUFELEdBQWdCQTtBQUgyQixLQUFqQixDQUE1Qjs7QUFLQSxRQUFHTCxJQUFJLElBQUUsVUFBVCxFQUFvQjtBQUNsQixhQUNFO0FBQUssaUJBQVMsRUFBRWEsU0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFLE1BQUMsMENBQUQsQ0FBVSxRQUFWO0FBQ0UsZ0JBQVEsRUFBRWpCLFFBRFosQ0FFRTs7QUFGRixTQUdNRixLQUhOO0FBSUUsWUFBSSxFQUFFVSxJQUpSO0FBS0UsWUFBSSxFQUFFSixJQUxSO0FBTUUsYUFBSyxFQUFFTCxLQU5UO0FBT0UsbUJBQVcsRUFBRUksS0FQZjtBQVNFLGNBQU0sRUFBRUcsTUFUVjtBQVVFLGNBQU0sRUFBRUQsTUFWVjtBQVdFLGtCQUFVLEVBQ1JFLFFBQVEsQ0FBQ1ksTUFBVCxDQUFpQkMsT0FBRCxJQUFhQSxPQUFPLEtBQUssVUFBekMsRUFBcUQsQ0FBckQsTUFDQSxVQURBLEdBRUksSUFGSixHQUdJLEtBZlI7QUFpQkUsaUJBQVMsRUFBRWIsUUFBUSxDQUFDLENBQUQsQ0FBUixLQUFnQixVQUFoQixHQUE2QixTQUE3QixHQUF5QyxnQkFqQnREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FERixDQURGO0FBdUJELEtBeEJELE1Bd0JLO0FBQ0wsYUFDRTtBQUFLLGlCQUFTLEVBQUVVLFNBQWhCO0FBQTJCLGFBQUssRUFBRTtBQUFDSSxlQUFLLEVBQUU7QUFBUixTQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0UsTUFBQywwQ0FBRDtBQUNFLGdCQUFRLEVBQUVyQixRQURaLENBRUU7O0FBRkYsU0FHTUYsS0FITjtBQUlFLFlBQUksRUFBRVUsSUFKUjtBQUtFLFlBQUksRUFBRUosSUFMUjtBQU1FLGFBQUssRUFBRUwsS0FOVDtBQU9FLG1CQUFXLEVBQUVJLEtBUGY7QUFRRSxjQUFNLEVBQUVHLE1BUlY7QUFTRSxjQUFNLEVBQUVELE1BVFY7QUFVRSxrQkFBVSxFQUNSRSxRQUFRLENBQUNZLE1BQVQsQ0FBaUJDLE9BQUQsSUFBYUEsT0FBTyxLQUFLLFVBQXpDLEVBQXFELENBQXJELE1BQ0EsVUFEQSxHQUVJLElBRkosR0FHSSxLQWRSO0FBZ0JFLGlCQUFTLEVBQUViLFFBQVEsQ0FBQyxDQUFELENBQVIsS0FBZ0IsVUFBaEIsR0FBNkIsU0FBN0IsR0FBeUMsZ0JBaEJ0RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBREYsQ0FERjtBQXNCRDtBQUNBOztBQTFFaUM7O0FBNEVwQ2IsS0FBSyxDQUFDNEIsWUFBTixHQUFxQjtBQUNuQnBCLFNBQU8sRUFBRyxHQUFFcUIsUUFBUSxDQUFDQyxJQUFJLENBQUNDLE1BQUwsS0FBZ0IsSUFBSUMsSUFBSixHQUFXQyxPQUFYLEVBQWpCLENBQXVDLEVBRHhDO0FBRW5CdkIsTUFBSSxFQUFFLE1BRmE7QUFHbkJHLFVBQVEsRUFBRSxDQUFDLFNBQUQ7QUFIUyxDQUFyQjtBQUtlYixvRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvZm9ybS1jb21wb25lbnRzL0lucHV0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcbmltcG9ydCB7IElucHV0IGFzIEFudElucHV0IH0gZnJvbSBcImFudGRcIjtcbmltcG9ydCB7IEV5ZUludmlzaWJsZU91dGxpbmVkLCBFeWVUd29Ub25lIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xuY2xhc3MgSW5wdXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgdmFsdWUsXG4gICAgICBvbkNoYW5nZSxcbiAgICAgIHBhcmVudENsYXNzLFxuICAgICAgaW5wdXRJZCxcbiAgICAgIGxhYmVsLFxuICAgICAgdHlwZSxcbiAgICAgIHN1ZmZpeCxcbiAgICAgIHByZWZpeCxcbiAgICAgIHZlcnNpb25zLFxuICAgICAgbmFtZSxcbiAgICAgIHdyYXBwZXJDbGFzcyxcbiAgICAgIC4uLnByb3BzXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgY29tcG9uZW50Q2xhc3MgPSBcImMtaW5wdXRcIjtcbiAgICBjb25zdCB2ZXJzaW9uQ2xhc3MgPSB2ZXJzaW9uc1xuICAgICAgLm1hcCgoZWwpID0+IGAke2NvbXBvbmVudENsYXNzfS0tJHtlbH1gKVxuICAgICAgLmpvaW4oXCIgXCIpO1xuICAgIGNvbnN0IHBhcmVudCA9IGAke3BhcmVudENsYXNzfV9fJHtjb21wb25lbnRDbGFzcy5yZXBsYWNlKFwiYy1cIiwgXCJcIil9YDtcbiAgICBjb25zdCBjbGFzc05hbWUgPSBjbGFzc05hbWVzKGNvbXBvbmVudENsYXNzLCB7XG4gICAgICBbdmVyc2lvbkNsYXNzXTogdmVyc2lvbnMsXG4gICAgICBbcGFyZW50XTogcGFyZW50Q2xhc3MsXG4gICAgICBbd3JhcHBlckNsYXNzXTogd3JhcHBlckNsYXNzLFxuICAgIH0pO1xuICAgIGlmKHR5cGU9PVwicGFzc3dvcmRcIil7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cbiAgICAgICAgICA8QW50SW5wdXQuUGFzc3dvcmRcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cbiAgICAgICAgICAgIC8vIGlkPXtpbnB1dElkfVxuICAgICAgICAgICAgey4uLnByb3BzfVxuICAgICAgICAgICAgbmFtZT17bmFtZX1cbiAgICAgICAgICAgIHR5cGU9e3R5cGV9XG4gICAgICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj17bGFiZWx9IFxuICAgICAgICAgIFxuICAgICAgICAgICAgcHJlZml4PXtwcmVmaXh9XG4gICAgICAgICAgICBzdWZmaXg9e3N1ZmZpeH1cbiAgICAgICAgICAgIGFsbG93Q2xlYXI9e1xuICAgICAgICAgICAgICB2ZXJzaW9ucy5maWx0ZXIoKHZlcnNpb24pID0+IHZlcnNpb24gPT09IFwiZGlzY291bnRcIilbMF0gPT09XG4gICAgICAgICAgICAgIFwiZGlzY291bnRcIlxuICAgICAgICAgICAgICAgID8gdHJ1ZVxuICAgICAgICAgICAgICAgIDogZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17dmVyc2lvbnNbMF0gPT09IFwiZGlzY291bnRcIiA/IFwiYy1pbnB1dFwiIDogXCJjLWlucHV0X19pbnB1dFwifVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9ZWxzZXtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZX0gc3R5bGU9e3t3aWR0aDogJzEwMCUnfX0+XG4gICAgICAgIDxBbnRJbnB1dFxuICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cbiAgICAgICAgICAvLyBpZD17aW5wdXRJZH1cbiAgICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgICAgbmFtZT17bmFtZX1cbiAgICAgICAgICB0eXBlPXt0eXBlfVxuICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgICBwbGFjZWhvbGRlcj17bGFiZWx9IFxuICAgICAgICAgIHByZWZpeD17cHJlZml4fVxuICAgICAgICAgIHN1ZmZpeD17c3VmZml4fVxuICAgICAgICAgIGFsbG93Q2xlYXI9e1xuICAgICAgICAgICAgdmVyc2lvbnMuZmlsdGVyKCh2ZXJzaW9uKSA9PiB2ZXJzaW9uID09PSBcImRpc2NvdW50XCIpWzBdID09PVxuICAgICAgICAgICAgXCJkaXNjb3VudFwiXG4gICAgICAgICAgICAgID8gdHJ1ZVxuICAgICAgICAgICAgICA6IGZhbHNlXG4gICAgICAgICAgfVxuICAgICAgICAgIGNsYXNzTmFtZT17dmVyc2lvbnNbMF0gPT09IFwiZGlzY291bnRcIiA/IFwiYy1pbnB1dFwiIDogXCJjLWlucHV0X19pbnB1dFwifVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuICB9XG59XG5JbnB1dC5kZWZhdWx0UHJvcHMgPSB7XG4gIGlucHV0SWQ6IGAke3BhcnNlSW50KE1hdGgucmFuZG9tKCkgKiBuZXcgRGF0ZSgpLmdldFRpbWUoKSl9YCxcbiAgdHlwZTogXCJ0ZXh0XCIsXG4gIHZlcnNpb25zOiBbXCJkZWZhdWx0XCJdLFxufTtcbmV4cG9ydCBkZWZhdWx0IElucHV0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/form-components/Input.js\n");

/***/ })

};;