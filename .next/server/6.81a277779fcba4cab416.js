exports.ids = [6];
exports.modules = {

/***/ "y/CX":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("K2gz");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const TitleList = ({
  title,
  content,
  children,
  parentClass,
  versions,
  serial,
  onTitleClick,
  weight
}) => {
  // console.log(versions)
  const componentClass = "c-title-list";
  const newVersionClass = versions[1];
  let className1 = newVersionClass === "new" ? "c-title-list__title-wrap--new" : versions[0] === "faq" ? "c-title-list__title-wrap--faq" : "c-title-list__title-wrap";
  const className2 = newVersionClass === "new" ? "c-title-list__detail-wrap--new" : "c-title-list__detail-wrap";
  const versionClass = versions.map(el => `${componentClass}--${el}`).join(" ");
  const parent = `${parentClass}__${componentClass.replace("c-", "")}`;
  let className = classnames__WEBPACK_IMPORTED_MODULE_1___default()(componentClass, {
    [versionClass]: versions,
    [parent]: parentClass
  });

  if (versions[0] === "responsive") {
    className = "c-title-list c-title-list__responsive";
    className1 = "c-title-list__title-wrap--responsive";
  }

  return __jsx("div", {
    className: className
  }, serial && __jsx("div", {
    className: "c-title-list__key"
  }, serial), __jsx("div", {
    onClick: () => {
      if (typeof onTitleClick === "function") {
        onTitleClick();
      }
    },
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(className1, {
      "cursor-pointer": typeof onTitleClick === "function"
    })
  }, newVersionClass === "new" ? __jsx("p", {
    className: "c-title-list__new"
  }, title) : __jsx("p", {
    className: "c-title-list__title"
  }, title)), __jsx("div", {
    className: className2
  }, __jsx("div", {
    className: "c-title-list__content"
  }, content, children)));
};

TitleList.defaultProps = {
  versions: []
};
/* harmony default export */ __webpack_exports__["default"] = (TitleList);

/***/ })

};;