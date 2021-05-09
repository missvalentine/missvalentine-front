exports.ids = [2];
exports.modules = {

/***/ "./components/Drawer.js":
/*!******************************!*\
  !*** ./components/Drawer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dynamic */ \"next/dynamic\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ \"antd\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ \"classnames\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/Users/akshataggarwal/Documents/Coding Files/webd projects/missvalentine-front/components/Drawer.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nconst Heading = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(() => __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ./Heading */ \"./components/Heading.js\")), {\n  loadableGenerated: {\n    webpack: () => [/*require.resolve*/(/*! ./Heading */ \"./components/Heading.js\")],\n    modules: [\"./Heading\"]\n  }\n});\n\n\nclass Drawer extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  constructor({\n    props\n  }) {\n    super(props);\n    this.state = {\n      width: 550\n    };\n  }\n\n  componentDidMount() {\n    this.setState({\n      width: window.innerWidth > 550 ? 550 : \"100%\"\n    });\n  }\n\n  render() {\n    const {\n      width\n    } = this.state;\n    const {\n      onClose,\n      visible,\n      title,\n      children,\n      versions,\n      parentClass\n    } = this.props;\n    const componentClass = `c-drawer`;\n    const versionClass = versions.map(el => `${componentClass}--${el}`).join(\" \");\n    const parent = `${parentClass}__${componentClass.replace(\"c-\", \"\")}`;\n    const className = classnames__WEBPACK_IMPORTED_MODULE_3___default()(componentClass, {\n      [versionClass]: versions,\n      [parent]: parentClass\n    });\n    return __jsx(antd__WEBPACK_IMPORTED_MODULE_2__[\"Drawer\"], {\n      className: className,\n      placement: this.props.placement,\n      closable: false,\n      onClose: onClose,\n      visible: visible,\n      width: width,\n      title: __jsx(DrawerTitle, {\n        onClose: onClose,\n        title: title,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 46,\n          columnNumber: 16\n        }\n      }),\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 7\n      }\n    }, children);\n  }\n\n}\n\nconst DrawerTitle = ({\n  onClose,\n  title\n}) => __jsx(\"div\", {\n  className: \"c-drawer-title c-drawer__title\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 54,\n    columnNumber: 3\n  }\n}, __jsx(\"div\", {\n  className: \"c-drawer-title__go-back-wrapper\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 55,\n    columnNumber: 5\n  }\n}), __jsx(\"div\", {\n  className: \"c-drawer-title__header\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 56,\n    columnNumber: 5\n  }\n}, __jsx(\"div\", {\n  className: \"row\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 57,\n    columnNumber: 7\n  }\n}, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__[\"Icon\"], {\n  className: \"c-drawer-title__back\",\n  type: \"close-circle\",\n  theme: \"filled\",\n  onClick: onClose,\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 58,\n    columnNumber: 9\n  }\n}), __jsx(\"div\", {\n  className: \"col\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 59,\n    columnNumber: 9\n  }\n}, __jsx(Heading, {\n  parentClass: \"c-cart-title\",\n  className: \"c-cart-title__heading\",\n  versions: [\"default\", \"dark\", \"upper\"],\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 60,\n    columnNumber: 11\n  }\n}, title)))));\n\nDrawer.defaultProps = {\n  versions: [],\n  placement: \"right\"\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Drawer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0RyYXdlci5qcz85NDA1Il0sIm5hbWVzIjpbIkhlYWRpbmciLCJkeW5hbWljIiwiRHJhd2VyIiwiUmVhY3QiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwic3RhdGUiLCJ3aWR0aCIsImNvbXBvbmVudERpZE1vdW50Iiwic2V0U3RhdGUiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwicmVuZGVyIiwib25DbG9zZSIsInZpc2libGUiLCJ0aXRsZSIsImNoaWxkcmVuIiwidmVyc2lvbnMiLCJwYXJlbnRDbGFzcyIsImNvbXBvbmVudENsYXNzIiwidmVyc2lvbkNsYXNzIiwibWFwIiwiZWwiLCJqb2luIiwicGFyZW50IiwicmVwbGFjZSIsImNsYXNzTmFtZSIsImNsYXNzTmFtZXMiLCJwbGFjZW1lbnQiLCJEcmF3ZXJUaXRsZSIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBLE1BQU1BLE9BQU8sR0FBR0MsbURBQU8sQ0FBQyxNQUFNLHlIQUFQO0FBQUE7QUFBQSx3Q0FBYywwQ0FBZDtBQUFBLGNBQWMsV0FBZDtBQUFBO0FBQUEsRUFBdkI7QUFDQTs7QUFFQSxNQUFNQyxNQUFOLFNBQXFCQyw0Q0FBSyxDQUFDQyxTQUEzQixDQUFxQztBQUNuQ0MsYUFBVyxDQUFDO0FBQUVDO0FBQUYsR0FBRCxFQUFZO0FBQ3JCLFVBQU1BLEtBQU47QUFDQSxTQUFLQyxLQUFMLEdBQWE7QUFDWEMsV0FBSyxFQUFFO0FBREksS0FBYjtBQUdEOztBQUNEQyxtQkFBaUIsR0FBRztBQUNsQixTQUFLQyxRQUFMLENBQWM7QUFDWkYsV0FBSyxFQUFFRyxNQUFNLENBQUNDLFVBQVAsR0FBb0IsR0FBcEIsR0FBMEIsR0FBMUIsR0FBZ0M7QUFEM0IsS0FBZDtBQUdEOztBQUNEQyxRQUFNLEdBQUc7QUFDUCxVQUFNO0FBQUVMO0FBQUYsUUFBWSxLQUFLRCxLQUF2QjtBQUNBLFVBQU07QUFDSk8sYUFESTtBQUVKQyxhQUZJO0FBR0pDLFdBSEk7QUFJSkMsY0FKSTtBQUtKQyxjQUxJO0FBTUpDO0FBTkksUUFPRixLQUFLYixLQVBUO0FBU0EsVUFBTWMsY0FBYyxHQUFJLFVBQXhCO0FBQ0EsVUFBTUMsWUFBWSxHQUFHSCxRQUFRLENBQzFCSSxHQURrQixDQUNiQyxFQUFELElBQVMsR0FBRUgsY0FBZSxLQUFJRyxFQUFHLEVBRG5CLEVBRWxCQyxJQUZrQixDQUViLEdBRmEsQ0FBckI7QUFHQSxVQUFNQyxNQUFNLEdBQUksR0FBRU4sV0FBWSxLQUFJQyxjQUFjLENBQUNNLE9BQWYsQ0FBdUIsSUFBdkIsRUFBNkIsRUFBN0IsQ0FBaUMsRUFBbkU7QUFDQSxVQUFNQyxTQUFTLEdBQUdDLGlEQUFVLENBQUNSLGNBQUQsRUFBaUI7QUFDM0MsT0FBQ0MsWUFBRCxHQUFnQkgsUUFEMkI7QUFFM0MsT0FBQ08sTUFBRCxHQUFVTjtBQUZpQyxLQUFqQixDQUE1QjtBQUlBLFdBQ0UsTUFBQywyQ0FBRDtBQUNFLGVBQVMsRUFBRVEsU0FEYjtBQUVFLGVBQVMsRUFBRSxLQUFLckIsS0FBTCxDQUFXdUIsU0FGeEI7QUFHRSxjQUFRLEVBQUUsS0FIWjtBQUlFLGFBQU8sRUFBRWYsT0FKWDtBQUtFLGFBQU8sRUFBRUMsT0FMWDtBQU1FLFdBQUssRUFBRVAsS0FOVDtBQU9FLFdBQUssRUFBRSxNQUFDLFdBQUQ7QUFBYSxlQUFPLEVBQUVNLE9BQXRCO0FBQStCLGFBQUssRUFBRUUsS0FBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQVBUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FTR0MsUUFUSCxDQURGO0FBYUQ7O0FBN0NrQzs7QUErQ3JDLE1BQU1hLFdBQVcsR0FBRyxDQUFDO0FBQUVoQixTQUFGO0FBQVdFO0FBQVgsQ0FBRCxLQUNsQjtBQUFLLFdBQVMsRUFBQyxnQ0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ0U7QUFBSyxXQUFTLEVBQUMsaUNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQURGLEVBRUU7QUFBSyxXQUFTLEVBQUMsd0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNFO0FBQUssV0FBUyxFQUFDLEtBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNFLE1BQUMseUNBQUQ7QUFBTSxXQUFTLEVBQUMsc0JBQWhCO0FBQXVDLE1BQUksRUFBQyxjQUE1QztBQUE0RCxPQUFLLEVBQUMsUUFBbEU7QUFBMkUsU0FBTyxFQUFFRixPQUFwRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBREYsRUFFRTtBQUFLLFdBQVMsRUFBQyxLQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDRSxNQUFDLE9BQUQ7QUFDRSxhQUFXLEVBQUMsY0FEZDtBQUVFLFdBQVMsRUFBQyx1QkFGWjtBQUdFLFVBQVEsRUFBRSxDQUFDLFNBQUQsRUFBWSxNQUFaLEVBQW9CLE9BQXBCLENBSFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUtHRSxLQUxILENBREYsQ0FGRixDQURGLENBRkYsQ0FERjs7QUFtQkFkLE1BQU0sQ0FBQzZCLFlBQVAsR0FBc0I7QUFDcEJiLFVBQVEsRUFBRSxFQURVO0FBRXBCVyxXQUFTLEVBQUU7QUFGUyxDQUF0QjtBQUllM0IscUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0RyYXdlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBkeW5hbWljIGZyb20gJ25leHQvZHluYW1pYydcbmltcG9ydCB7IERyYXdlciBhcyBBbnREcmF3ZXIsIEljb24gfSBmcm9tIFwiYW50ZFwiO1xuY29uc3QgSGVhZGluZyA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KFwiLi9IZWFkaW5nXCIpKTtcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XG5cbmNsYXNzIERyYXdlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHsgcHJvcHMgfSkge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgd2lkdGg6IDU1MCxcbiAgICB9O1xuICB9XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgd2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoID4gNTUwID8gNTUwIDogXCIxMDAlXCIsXG4gICAgfSk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgd2lkdGggfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3Qge1xuICAgICAgb25DbG9zZSxcbiAgICAgIHZpc2libGUsXG4gICAgICB0aXRsZSxcbiAgICAgIGNoaWxkcmVuLFxuICAgICAgdmVyc2lvbnMsXG4gICAgICBwYXJlbnRDbGFzcyxcbiAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgIGNvbnN0IGNvbXBvbmVudENsYXNzID0gYGMtZHJhd2VyYDtcbiAgICBjb25zdCB2ZXJzaW9uQ2xhc3MgPSB2ZXJzaW9uc1xuICAgICAgLm1hcCgoZWwpID0+IGAke2NvbXBvbmVudENsYXNzfS0tJHtlbH1gKVxuICAgICAgLmpvaW4oXCIgXCIpO1xuICAgIGNvbnN0IHBhcmVudCA9IGAke3BhcmVudENsYXNzfV9fJHtjb21wb25lbnRDbGFzcy5yZXBsYWNlKFwiYy1cIiwgXCJcIil9YDtcbiAgICBjb25zdCBjbGFzc05hbWUgPSBjbGFzc05hbWVzKGNvbXBvbmVudENsYXNzLCB7XG4gICAgICBbdmVyc2lvbkNsYXNzXTogdmVyc2lvbnMsXG4gICAgICBbcGFyZW50XTogcGFyZW50Q2xhc3MsXG4gICAgfSk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxBbnREcmF3ZXJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICAgIHBsYWNlbWVudD17dGhpcy5wcm9wcy5wbGFjZW1lbnR9XG4gICAgICAgIGNsb3NhYmxlPXtmYWxzZX1cbiAgICAgICAgb25DbG9zZT17b25DbG9zZX1cbiAgICAgICAgdmlzaWJsZT17dmlzaWJsZX1cbiAgICAgICAgd2lkdGg9e3dpZHRofVxuICAgICAgICB0aXRsZT17PERyYXdlclRpdGxlIG9uQ2xvc2U9e29uQ2xvc2V9IHRpdGxlPXt0aXRsZX0gLz59XG4gICAgICA+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvQW50RHJhd2VyPlxuICAgICk7XG4gIH1cbn1cbmNvbnN0IERyYXdlclRpdGxlID0gKHsgb25DbG9zZSwgdGl0bGUgfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cImMtZHJhd2VyLXRpdGxlIGMtZHJhd2VyX190aXRsZVwiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYy1kcmF3ZXItdGl0bGVfX2dvLWJhY2std3JhcHBlclwiPjwvZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYy1kcmF3ZXItdGl0bGVfX2hlYWRlclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgPEljb24gY2xhc3NOYW1lPVwiYy1kcmF3ZXItdGl0bGVfX2JhY2tcIiB0eXBlPVwiY2xvc2UtY2lyY2xlXCIgIHRoZW1lPVwiZmlsbGVkXCIgb25DbGljaz17b25DbG9zZX0gLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cbiAgICAgICAgICA8SGVhZGluZ1xuICAgICAgICAgICAgcGFyZW50Q2xhc3M9XCJjLWNhcnQtdGl0bGVcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYy1jYXJ0LXRpdGxlX19oZWFkaW5nXCJcbiAgICAgICAgICAgIHZlcnNpb25zPXtbXCJkZWZhdWx0XCIsIFwiZGFya1wiLCBcInVwcGVyXCJdfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHt0aXRsZX1cbiAgICAgICAgICA8L0hlYWRpbmc+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuKTtcbkRyYXdlci5kZWZhdWx0UHJvcHMgPSB7XG4gIHZlcnNpb25zOiBbXSxcbiAgcGxhY2VtZW50OiBcInJpZ2h0XCIsXG59O1xuZXhwb3J0IGRlZmF1bHQgRHJhd2VyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Drawer.js\n");

/***/ })

};;