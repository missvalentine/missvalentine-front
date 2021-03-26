exports.ids = [71];
exports.modules = {

/***/ "UJvz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ FullModal_FullModal; });

// UNUSED EXPORTS: Modal

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-icons-kit/md/"
var _ = __webpack_require__("3yuE");

// EXTERNAL MODULE: external "react-icons-kit"
var external_react_icons_kit_ = __webpack_require__("Oi65");
var external_react_icons_kit_default = /*#__PURE__*/__webpack_require__.n(external_react_icons_kit_);

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__("K2gz");
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// EXTERNAL MODULE: external "reactstrap"
var external_reactstrap_ = __webpack_require__("oL/c");

// CONCATENATED MODULE: ./components/modal/Modal.js
var __jsx = external_react_default.a.createElement;





class Modal_Modal extends external_react_["Component"] {
  constructor(props) {
    super(props);
    this.state = {};
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    const {
      toggle
    } = this.props;
    if (typeof toggle === "function") toggle();
  }

  render() {
    const {
      isOpen,
      children,
      noCross,
      large,
      heading
    } = this.props;
    return __jsx("div", null, __jsx(external_reactstrap_["Modal"], {
      isOpen: isOpen,
      toggle: this.toggle,
      className: external_classnames_default()("full-modal", {
        large: large
      })
    }, heading && __jsx(external_reactstrap_["ModalHeader"], {
      toggle: this.toggle
    }, heading), __jsx("div", {
      className: "Modal-body center-modal"
    }, !noCross && !heading && __jsx("div", {
      className: "modal-dismiss",
      onClick: this.toggle
    }, __jsx(external_react_icons_kit_default.a, {
      icon: _["ic_clear"],
      size: 64
    })), __jsx("div", {
      className: "modal-inner"
    }, __jsx("div", {
      className: "modal-content"
    }, children)))));
  }

}
// CONCATENATED MODULE: ./components/modal/FullModal.js
var FullModal_jsx = external_react_default.a.createElement;


class FullModal_FullModal extends external_react_["Component"] {
  constructor(props) {
    super(props);
    this.state = {};
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    const {
      toggle
    } = this.props;
    if (typeof toggle === "function") toggle();
  }

  render() {
    const {
      isOpen,
      children
    } = this.props;
    return FullModal_jsx("div", null, FullModal_jsx(external_reactstrap_["Modal"], {
      isOpen: isOpen,
      toggle: this.toggle,
      className: "full-screen-modal modal__full-width"
    }, FullModal_jsx("div", {
      className: "Modal-body full-screen-modal-body"
    }, FullModal_jsx("div", {
      className: "modal-inner"
    }, FullModal_jsx("div", {
      className: "modal-content",
      style: this.props.style
    }, children)))));
  }

}
// CONCATENATED MODULE: ./components/modal/index.js



/***/ }),

/***/ "Vw5z":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("/T1H");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("xnum");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _constants_projectSettings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("xSWb");
/* harmony import */ var _styles_app_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("YWgu");
/* harmony import */ var _styles_app_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_app_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("K2gz");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _form_components_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("s5Da");
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("UJvz");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("x91w");
/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("g8bt");
/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _services_apis_user__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("s9Gp");
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



const Header = next_dynamic__WEBPACK_IMPORTED_MODULE_0___default()(() => __webpack_require__.e(/* import() */ 89).then(__webpack_require__.bind(null, "b0oO")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("b0oO")],
    modules: ['../Header']
  }
});


const Footer = next_dynamic__WEBPACK_IMPORTED_MODULE_0___default()(() => __webpack_require__.e(/* import() */ 88).then(__webpack_require__.bind(null, "8lYe")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("8lYe")],
    modules: ['../Footer']
  }
});

const ChatBot = next_dynamic__WEBPACK_IMPORTED_MODULE_0___default()(() => __webpack_require__.e(/* import() */ 58).then(__webpack_require__.bind(null, "mYV3")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("mYV3")],
    modules: ['../chatBot/ChatBot']
  }
});

const TopAlert = next_dynamic__WEBPACK_IMPORTED_MODULE_0___default()(() => __webpack_require__.e(/* import() */ 95).then(__webpack_require__.bind(null, "OCNY")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("OCNY")],
    modules: ['../TopAlert']
  }
});



const Input = next_dynamic__WEBPACK_IMPORTED_MODULE_0___default()(() => __webpack_require__.e(/* import() */ 1).then(__webpack_require__.bind(null, "xcph")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("xcph")],
    modules: ['../form-components/Input']
  }
});


const EmailReg = new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g);

const Layout = ({
  title,
  description,
  keywords,
  children,
  isHeaderBg,
  headerTheme,
  headerVersions,
  pageClass,
  fixed,
  homeLogo,
  isEntryMsg,
  setEntryMsg,
  logo,
  footerLogo
}) => {
  // console.log(headerVersions);
  const {
    0: isEntryMsg1,
    1: setEntryMsg1
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: email,
    1: setEmail
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');
  const {
    0: isAdded,
    1: setIsAdded
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: message,
    1: setMessage
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');

  const setSubscriber = async () => {
    // setEntryMsg1(false);
    // console.log(email);
    const result = await Object(_services_apis_user__WEBPACK_IMPORTED_MODULE_11__[/* addSubscriber */ "a"])(email);
    setIsAdded(true);
    setMessage(result.data.message);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_5___default()('c-layout', {
      [pageClass]: pageClass
    })
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, null, __jsx("title", null, title ? title : _constants_projectSettings__WEBPACK_IMPORTED_MODULE_3__[/* default */ "d"].projectName), __jsx("meta", {
    property: "og:title",
    content: title ? title : _constants_projectSettings__WEBPACK_IMPORTED_MODULE_3__[/* default */ "d"].projectName,
    key: "title"
  }), __jsx("meta", {
    property: "og:description",
    content: title ? title : _constants_projectSettings__WEBPACK_IMPORTED_MODULE_3__[/* default */ "d"].projectName,
    key: "description"
  }), __jsx("meta", {
    name: "description",
    content: description ? description : _constants_projectSettings__WEBPACK_IMPORTED_MODULE_3__[/* default */ "d"].projectName
  }), __jsx("meta", {
    name: "keywords",
    content: keywords ? keywords : _constants_projectSettings__WEBPACK_IMPORTED_MODULE_3__[/* default */ "d"].projectName
  }), __jsx("meta", {
    httpEquiv: "Content-Type",
    content: "text/html; charset=utf-8"
  }), __jsx("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1"
  }), __jsx("link", {
    rel: "icon",
    href: "/favicon.ico"
  })), __jsx(Header, {
    theme: headerTheme,
    homeLogo: homeLogo,
    versions: headerVersions,
    bg: isHeaderBg,
    fixed: fixed,
    logo: logo
  }), children, __jsx(_modal__WEBPACK_IMPORTED_MODULE_7__[/* FullModal */ "a"], {
    isOpen: isEntryMsg,
    toggle: () => setEntryMsg(false),
    style: {
      width: '100%'
    }
  }, __jsx("div", {
    className: "ss ss-row"
  }, __jsx("div", {
    className: "left"
  }, __jsx("img", {
    src: "/images/ss2_banner.png",
    style: {
      width: '100%',
      height: '100%'
    }
  })), __jsx("div", {
    className: "right"
  }, !isAdded ? __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    className: "modal__logo-wrapper ss__heading",
    style: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }
  }, __jsx("div", {
    className: ""
  }, __jsx("span", {
    className: "c-banner__heading",
    style: {
      color: '#d8ab97',
      fontSize: '50px',
      lineHeight: '60px'
    }
  }, "you first!"))), __jsx("div", {
    className: "c-susbmit-r__wrapper justify-content-center"
  }, __jsx("h1", {
    className: "ss__subhead",
    style: {
      fontSize: '20px',
      margin: '30px'
    }
  }, "Sign up for our emails to get the latest updates", __jsx("br", null), "on our products before anyone else."), __jsx("div", null, __jsx(Input, {
    label: "Email",
    name: "email",
    value: email,
    onChange: e => setEmail(e.target.value)
  }), email.length > 0 && !EmailReg.test(email) && __jsx("span", {
    style: {
      color: 'red'
    }
  }, "email is not valid!"), __jsx("br", null), __jsx(_form_components_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
    theme: "dark",
    type: "submit",
    onClick: setSubscriber,
    disbaled: !EmailReg.test(email)
  }, "Submit"), __jsx(_form_components_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
    theme: "dark",
    type: "link",
    onClick: () => setEntryMsg(false)
  }, "Cancel")))) : __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("h1", null, message), __jsx(_form_components_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
    theme: "dark",
    type: "link",
    onClick: () => setEntryMsg(false)
  }, "Close"))))), __jsx(ChatBot, null), __jsx(Footer, {
    imageUrl: footerLogo
  })));
};

Layout.defaultProps = {
  isHeaderBg: false,
  fixed: true
};

const mapStateToProps = state => ({
  isEntryMsg: state.firstSetting.entryMsg
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["connect"])(mapStateToProps, {
  setEntryMsg: _redux_actions__WEBPACK_IMPORTED_MODULE_9__["setEntryMsg"]
})(Layout)); // onClick={() => {if () {setEntryMsg1(false)} else {setError("Invalid Email")}}}

/***/ }),

/***/ "YWgu":
/***/ (function(module, exports) {



/***/ })

};;