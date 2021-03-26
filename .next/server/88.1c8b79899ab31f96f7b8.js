exports.ids = [88];
exports.modules = {

/***/ "8lYe":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/dynamic"
var dynamic_ = __webpack_require__("/T1H");
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic_);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// CONCATENATED MODULE: ./constants/socialLinks.js
const socialLinks = {
  facebook: "//facebook.com",
  youtube: "//youtube.com",
  instagram: "//instagram.com",
  twitter: "//twitter.com"
};
/* harmony default export */ var constants_socialLinks = (socialLinks);
// CONCATENATED MODULE: ./constants/footerMenu.js

const footerMenu = [{
  heading: 'Company',
  menus: [// {
  //     slug: "/account",
  //     title: "My Account"
  // },
  // {
  //     slug: "/shipping-returns",
  //     title: "Shipping & Returns"
  // },
  // {
  //     slug: "/learn",
  //     title: "FAQ"
  // },
  {
    slug: '/contact',
    title: 'Contact Us'
  }, {
    slug: '/about-us',
    title: 'About Us'
  }]
}, // {
//     heading: "Company",
//     menus: [
//         {
//             slug: "/track-order",
//             title: "Track My Order"
//         },
//         {
//             slug: "/ambassador-portal",
//             title: "Affiliate Program"
//         },
//     ]
// },
{
  heading: 'Social',
  menus: [{
    slug: constants_socialLinks.facebook || '#',
    title: 'Facebook'
  }, {
    slug: constants_socialLinks.youtube || '#',
    title: 'Youtube'
  }, {
    slug: constants_socialLinks.instagram || '#',
    title: 'Instagram'
  }, {
    slug: constants_socialLinks.twitter || '#',
    title: 'Twitter'
  }]
}, {
  heading: 'Terms',
  menus: [{
    slug: '/privacy',
    title: 'Privacy and Cookies'
  }, {
    slug: '/accessibility',
    title: 'Accessibility'
  }]
}];
/* harmony default export */ var constants_footerMenu = (footerMenu);
// EXTERNAL MODULE: ./constants/projectSettings.js
var projectSettings = __webpack_require__("xSWb");

// EXTERNAL MODULE: ./services/apis/user.js
var user = __webpack_require__("s9Gp");

// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__("Exp3");

// CONCATENATED MODULE: ./components/Footer.js

var __jsx = external_react_default.a.createElement;

const Heading = dynamic_default()(() => __webpack_require__.e(/* import() */ 0).then(__webpack_require__.bind(null, "h1bS")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("h1bS")],
    modules: ['./Heading']
  }
});


const SubscribeForm = dynamic_default()(() => __webpack_require__.e(/* import() */ 93).then(__webpack_require__.bind(null, "uy15")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("uy15")],
    modules: ['./SubscribeForm']
  }
});

const Logo = dynamic_default()(() => __webpack_require__.e(/* import() */ 16).then(__webpack_require__.bind(null, "TtQW")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("TtQW")],
    modules: ['./Logo']
  }
});



const EmailReg = new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g);

const subscribeUser = async (e, email) => {
  e.preventDefault();

  if (EmailReg.test(email)) {
    let result = await Object(user["a" /* addSubscriber */])(email); //console.log(result.data);

    if (result.status === 200) {
      external_antd_["Modal"].success({
        content: `${result.data.message}`,
        wrapClassName: 'c-footer-modal'
      });
    }
  } else {
    external_antd_["Modal"].warning({
      content: `Invalid Email!!`,
      wrapClassName: 'c-footer-modal'
    });
  }
};

const Footer = props => {
  const onEmailChange = e => {
    setEmail(e.target.value);
  };

  const {
    0: email,
    1: setEmail
  } = Object(external_react_["useState"])('');
  return __jsx("div", {
    className: "c-footer"
  }, __jsx("div", {
    className: "c-footer__inner"
  }, __jsx("div", {
    className: "c-footer__logo-wrapper"
  }, __jsx(Logo, {
    url: props.imageUrl,
    versions: ['footer'],
    parentClass: "c-footer"
  })), __jsx("div", {
    className: "row",
    style: {
      padding: '15px'
    }
  }, constants_footerMenu.map((el, i) => {
    return __jsx("div", {
      key: i,
      className: `col-xs-12 col-lg-3 col-sm-6 col-md-6 col-12 pb-5`
    }, __jsx(Heading, {
      h: "5",
      versions: ['footer', 'upper'],
      parentClass: "c-footer"
    }, el.heading), __jsx("ul", {
      className: "c-footer__menu-list"
    }, el.menus && el.menus.map((elx, k) => {
      return __jsx("li", {
        key: k,
        className: "c-footer__list-item"
      }, __jsx(link_default.a, {
        href: elx.slug
      }, __jsx("a", {
        className: "c-footer__link c-footer__link--menu"
      }, elx.title)));
    })));
  }), __jsx("div", {
    className: `c-footer__col col-12 col-sm-6 col-md-6 col-lg-3  `
  }, __jsx(Heading, {
    h: "5",
    versions: ['footer', 'upper'],
    parentClass: "c-footer"
  }, "Sign up to our mailing list"), __jsx("p", {
    className: "c-footer__text"
  }, "I would like to receive communications about ", projectSettings["g" /* projectName */], ' ', "products and services."), __jsx(SubscribeForm, {
    email: email,
    onEmailChange: onEmailChange,
    subscribeUser: subscribeUser
  })))));
};

/* harmony default export */ var components_Footer = __webpack_exports__["default"] = (Footer);

/***/ })

};;