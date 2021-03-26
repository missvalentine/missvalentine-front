exports.ids = [94];
exports.modules = {

/***/ "FjD5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("K2gz");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Exp3");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Tabs = ({
  onChange,
  tabs,
  defaultActiveKey,
  versions,
  parentClass,
  onNextClick,
  onPrevClick
}) => {
  const componentClass = `c-tabs`;
  const versionClass = versions.map(el => `${componentClass}--${el}`).join(" ");
  const parent = `${parentClass}__${componentClass.replace("c-", "")}`;
  const className = classnames__WEBPACK_IMPORTED_MODULE_1___default()(componentClass, {
    [versionClass]: versions,
    [parent]: parentClass
  });
  const {
    TabPane
  } = antd__WEBPACK_IMPORTED_MODULE_2__["Tabs"];
  return __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Tabs"], {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(className),
    defaultActiveKey: defaultActiveKey,
    onChange: onChange,
    onNextClick: onNextClick,
    onPrevClick: onPrevClick
  }, tabs.map((el, i) => __jsx(TabPane, {
    className: "c-tabs__pane",
    tab: el.title,
    key: `${i}`
  }, el.content)));
};

Tabs.defaultProps = {
  tabs: [],
  defaultActiveKey: "0",
  versions: []
};
/* harmony default export */ __webpack_exports__["default"] = (Tabs);

/***/ })

};;