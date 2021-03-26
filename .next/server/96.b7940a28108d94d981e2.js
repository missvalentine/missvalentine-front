exports.ids = [96];
exports.modules = {

/***/ "Ib06":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("K2gz");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class ChatCategoryList extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor() {
    super();
    this.state = {
      selected: null,
      categoryList: ["Topicals", "Pets", "Edibles", "Capsules", "Oils" // "Bundles",
      ]
    };
  }

  render() {
    const {
      selected,
      categoryList
    } = this.state;
    return __jsx("div", null, categoryList.map((el, index) => __jsx("p", {
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("chat-custom-option", {
        selected: selected === el
      }),
      onClick: () => {
        if (!selected) {
          this.setState({
            categoryList: categoryList.filter(elx => elx === el),
            selected: el
          }, () => {
            this.props.triggerNextStep({
              value: el
            });
          });
        }
      },
      key: index
    }, el)));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (ChatCategoryList);

/***/ })

};;