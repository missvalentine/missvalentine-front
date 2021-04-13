exports.ids = [5];
exports.modules = {

/***/ "lAVO":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("/T1H");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Exp3");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("K2gz");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Heading = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(() => __webpack_require__.e(/* import() */ 0).then(__webpack_require__.bind(null, "h1bS")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("h1bS")],
    modules: ["./Heading"]
  }
});


class Drawer extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor({
    props
  }) {
    super(props);
    this.state = {
      width: 550
    };
  }

  componentDidMount() {
    this.setState({
      width: window.innerWidth > 550 ? 550 : "100%"
    });
  }

  render() {
    const {
      width
    } = this.state;
    const {
      onClose,
      visible,
      title,
      children,
      versions,
      parentClass
    } = this.props;
    const componentClass = `c-drawer`;
    const versionClass = versions.map(el => `${componentClass}--${el}`).join(" ");
    const parent = `${parentClass}__${componentClass.replace("c-", "")}`;
    const className = classnames__WEBPACK_IMPORTED_MODULE_3___default()(componentClass, {
      [versionClass]: versions,
      [parent]: parentClass
    });
    return __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Drawer"], {
      className: className,
      placement: this.props.placement,
      closable: false,
      onClose: onClose,
      visible: visible,
      width: width,
      title: __jsx(DrawerTitle, {
        onClose: onClose,
        title: title
      })
    }, children);
  }

}

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
}, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
  className: "c-drawer-title__back",
  type: "close-circle",
  theme: "filled",
  onClick: onClose
}), __jsx("div", {
  className: "col"
}, __jsx(Heading, {
  parentClass: "c-cart-title",
  className: "c-cart-title__heading",
  versions: ["default", "dark", "upper"]
}, title)))));

Drawer.defaultProps = {
  versions: [],
  placement: "right"
};
/* harmony default export */ __webpack_exports__["default"] = (Drawer);

/***/ })

};;