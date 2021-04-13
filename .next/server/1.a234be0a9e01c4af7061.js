exports.ids = [1,2];
exports.modules = {

/***/ "Vw5z":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "next/dynamic"
var dynamic_ = __webpack_require__("/T1H");
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// CONCATENATED MODULE: ./services/helpers/scroll.js

const isBrowser = false;

function getScrollPosition({
  element,
  useWindow
}) {
  if (!isBrowser) return {
    x: 0,
    y: 0
  };
  const target = element ? element.current : document.body;
  const position = target.getBoundingClientRect();
  return useWindow ? {
    x: window.scrollX,
    y: window.scrollY
  } : {
    x: position.left,
    y: position.top
  };
}

function useScrollPosition(effect, deps, element, useWindow, wait) {
  const position = Object(external_react_["useRef"])(getScrollPosition({
    useWindow
  }));
  let throttleTimeout = null;

  const callBack = () => {
    const currPos = getScrollPosition({
      element,
      useWindow
    });
    effect({
      prevPos: position.current,
      currPos
    });
    position.current = currPos;
    throttleTimeout = null;
  };

  Object(external_react_["useLayoutEffect"])(() => {
    const handleScroll = () => {
      if (wait) {
        if (throttleTimeout === null) {
          throttleTimeout = setTimeout(callBack, wait);
        }
      } else {
        callBack();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, deps);
}
// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__("Exp3");

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__("K2gz");
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// EXTERNAL MODULE: ./constants/projectSettings.js
var projectSettings = __webpack_require__("xSWb");

// EXTERNAL MODULE: external "react-icons/ai"
var ai_ = __webpack_require__("/WcL");

// EXTERNAL MODULE: external "react-icons/fi"
var fi_ = __webpack_require__("C9pf");

// EXTERNAL MODULE: external "react-svg"
var external_react_svg_ = __webpack_require__("FHnF");

// CONCATENATED MODULE: ./constants/mobileMenus.js

var __jsx = external_react_default.a.createElement;



const mobileMenus = [{
  label: 'Explore',
  link: '/products',
  action: 'link',
  subMenus: [{
    label: 'MissValentine Bra',
    link: `/category/604ef99876aae4dc089d8330`,
    action: 'link'
  }, {
    label: 'MissValentine Panty',
    link: `/category/604ef9a076aae4dc089d8331`,
    action: 'link'
  }, {
    label: 'MissValentine Bra Set',
    link: `/category/605c49b89d78638e33272668`,
    action: 'link'
  }]
}, {
  label: __jsx("div", null, "New\xA0Arrivals"),
  link: '/products',
  action: 'link'
}, {
  label: 'Catalogue',
  link: '/e-catalogue',
  action: 'link'
}];
/* harmony default export */ var constants_mobileMenus = (mobileMenus);
// CONCATENATED MODULE: ./constants/mobileMenusRight.js

const mobileMenusRight = [// {
  //     icon: <ReactSVG src="/images/cart-icon-1.svg" />,
  //     action: "cart"
  // },
];
/* harmony default export */ var constants_mobileMenusRight = (mobileMenusRight);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// CONCATENATED MODULE: ./components/Header.js
var Header_jsx = external_react_default.a.createElement;


const Logo = dynamic_default()(() => __webpack_require__.e(/* import() */ 36).then(__webpack_require__.bind(null, "TtQW")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("TtQW")],
    modules: ['./Logo']
  }
});
const Nav = dynamic_default()(() => __webpack_require__.e(/* import() */ 34).then(__webpack_require__.bind(null, "MbLX")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("MbLX")],
    modules: ['./nav']
  }
});




const NavMobile = dynamic_default()(() => __webpack_require__.e(/* import() */ 50).then(__webpack_require__.bind(null, "tV7m")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("tV7m")],
    modules: ['./navMobile']
  }
});




const Header = ({
  bg,
  theme,
  versions,
  fixed,
  homeLogo,
  logo
}) => {
  const versionClass = versions.map(el => `c-header--${el}`).join(' ');
  const {
    0: isFixed,
    1: setIsFixed
  } = Object(external_react_["useState"])(false);
  const {
    0: show,
    1: setIsShow
  } = Object(external_react_["useState"])(true);
  const {
    0: isAtTop,
    1: setIsAtTop
  } = Object(external_react_["useState"])(true);
  const {
    0: hideOnScroll,
    1: setHideOnScroll
  } = Object(external_react_["useState"])(true);
  useScrollPosition(({
    prevPos,
    currPos
  }) => {
    let showNav = currPos.y > prevPos.y; // console.log(document.body.getBoundingClientRect().top)

    setIsShow(showNav);

    if (currPos.y === -124) {
      setIsAtTop(false);
    } else {
      setIsAtTop(true);
    }

    const isShow = currPos.y > prevPos.y;
    if (isShow !== hideOnScroll) setHideOnScroll(isShow);
  }, [hideOnScroll], false, false, 300);
  const logoVersion = homeLogo ? [] : ['non-home'];
  const dispatch = Object(external_react_redux_["useDispatch"])();
  const mainMenus = [{
    label: 'Explore',
    link: '/products',
    action: 'link',
    subMenus: [{
      label: 'MissValentine Bra',
      link: `/category/604ef99876aae4dc089d8330`,
      action: 'link'
    }, {
      label: 'MissValentine Panty',
      link: `/category/604ef9a076aae4dc089d8331`,
      action: 'link'
    }, {
      label: 'MissValentine Bra Set',
      link: `/category/605c49b89d78638e33272668`,
      action: 'link'
    }]
  }, {
    label: Header_jsx("div", null, "New\xA0Arrivals"),
    link: '/products',
    action: 'link'
  }];
  const rightMenus = [{
    label: 'CATALOGUE',
    link: '/e-catalogue',
    action: 'link'
  }, {
    label: Header_jsx("div", null, "CONTACT\xA0US"),
    link: '/contact',
    action: 'link'
  }];

  if (fixed) {
    return Header_jsx("div", null, Header_jsx("div", {
      className: external_classnames_default()('c-header__wrapper', {
        'c-header__wrapper--hidden': !show && !fixed
      })
    }, Header_jsx("header", {
      onScroll: e => {},
      className: external_classnames_default()(' c-header', {
        'c-header--light': true,
        'c-header--fixed':  true && !fixed,
        'c-header--pinned': isFixed || bg,
        ['c-header--' + theme]: theme,
        [versionClass]: versions
      })
    }, Header_jsx(NavMobile, {
      parent: "c-header",
      items: constants_mobileMenus
    }), Header_jsx(Nav, {
      parent: "c-header",
      items: mainMenus
    }), Header_jsx(Logo, {
      logo: logo,
      parent: "c-header",
      text: !homeLogo,
      versions: logoVersion
    }), Header_jsx(Nav, {
      parent: "c-header",
      isRight: true,
      items: rightMenus
    }), Header_jsx(NavMobile, {
      parent: "c-header",
      onlyCart: true,
      items: constants_mobileMenusRight
    }))));
  } else {
    return Header_jsx("div", null, Header_jsx(external_antd_["Affix"], {
      className: "c-header__affix"
    }, Header_jsx("div", {
      className: external_classnames_default()('c-header__wrapper', {
        'c-header__wrapper--hidden': !show && !fixed
      })
    }, Header_jsx("header", {
      onScroll: e => {},
      className: external_classnames_default()(' c-header', {
        'c-header--light': true,
        'c-header--fixed':  true && !fixed,
        'c-header--pinned': isFixed || bg,
        ['c-header--' + theme]: theme,
        [versionClass]: versions
      })
    }, Header_jsx(NavMobile, {
      parent: "c-header",
      items: constants_mobileMenus
    }), Header_jsx(Nav, {
      parent: "c-header",
      items: mainMenus
    }), Header_jsx(Logo, {
      parent: "c-header",
      text: !homeLogo,
      versions: logoVersion
    }), Header_jsx(Nav, {
      parent: "c-header",
      isRight: true,
      items: rightMenus
    }), Header_jsx(NavMobile, {
      parent: "c-header",
      onlyCart: true,
      items: constants_mobileMenusRight
    })))));
  }
};

Header.defaultProps = {
  bg: false,
  versions: []
};
const headMeta = {};
/* harmony default export */ var components_Header = (Header);
// EXTERNAL MODULE: ./components/styles/app.scss
var app = __webpack_require__("YWgu");

// CONCATENATED MODULE: ./components/Layouts/Layout.js
var Layout_jsx = external_react_default.a.createElement;





const Footer = dynamic_default()(() => __webpack_require__.e(/* import() */ 35).then(__webpack_require__.bind(null, "8lYe")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("8lYe")],
    modules: ['../Footer']
  }
});

const TopAlert = dynamic_default()(() => __webpack_require__.e(/* import() */ 49).then(__webpack_require__.bind(null, "OCNY")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("OCNY")],
    modules: ['../TopAlert']
  }
});


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
  logo,
  footerLogo
}) => {
  return Layout_jsx(external_react_default.a.Fragment, null, Layout_jsx("div", {
    className: external_classnames_default()('c-layout', {
      [pageClass]: pageClass
    })
  }, Layout_jsx(head_default.a, null, Layout_jsx("title", null, title ? title : projectSettings["b" /* default */].projectName), Layout_jsx("meta", {
    property: "og:title",
    content: title ? title : projectSettings["b" /* default */].projectName,
    key: "title"
  }), Layout_jsx("meta", {
    property: "og:description",
    content: title ? title : projectSettings["b" /* default */].projectName,
    key: "description"
  }), Layout_jsx("meta", {
    name: "description",
    content: description ? description : projectSettings["b" /* default */].projectName
  }), Layout_jsx("meta", {
    name: "keywords",
    content: keywords ? keywords : projectSettings["b" /* default */].projectName
  }), Layout_jsx("meta", {
    httpEquiv: "Content-Type",
    content: "text/html; charset=utf-8"
  }), Layout_jsx("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1"
  }), Layout_jsx("link", {
    rel: "icon",
    href: "/favicon.ico"
  })), Layout_jsx(components_Header, {
    theme: headerTheme,
    homeLogo: homeLogo,
    versions: headerVersions,
    bg: isHeaderBg,
    fixed: fixed,
    logo: logo
  }), children, Layout_jsx(Footer, {
    imageUrl: footerLogo
  })));
};

Layout.defaultProps = {
  isHeaderBg: false,
  fixed: true
};
/* harmony default export */ var Layouts_Layout = __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "YWgu":
/***/ (function(module, exports) {



/***/ })

};;