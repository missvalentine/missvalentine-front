exports.ids = [39,44];
exports.modules = {

/***/ "9HbV":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("/T1H");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("K2gz");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _constants_projectSettings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("xSWb");
/* harmony import */ var react_flickity_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("ZHLg");
/* harmony import */ var react_flickity_component__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_flickity_component__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("g8bt");
/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _redux_actions_drawers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("JLUA");
/* harmony import */ var _Product__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("nQYz");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }


const Heading = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(() => __webpack_require__.e(/* import() */ 0).then(__webpack_require__.bind(null, "h1bS")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("h1bS")],
    modules: ['./Heading']
  }
});
const Button = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(() => __webpack_require__.e(/* import() */ 3).then(__webpack_require__.bind(null, "s5Da")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("s5Da")],
    modules: ['./form-components/Button']
  }
});











const CategoryProducts = (props, {
  heading,
  subHeading,
  showCartBar,
  bg,
  btnText
}) => {
  const className = classnames__WEBPACK_IMPORTED_MODULE_2___default()('c-category-products', {
    [`c-category-products--${bg}`]: bg
  });
  const {
    0: activeCategoryIndex,
    1: setActiveCategoryIndex
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(-1);

  const flickityInit = () => {
    setTimeout(() => {
      if (flkty) {
        flkty.on('scroll', progress => {
          if (!isNaN(progress)) {
            let pos = `${progress * 80}%`; //  sliderLine.current.style.left = pos
          }
        });
      }
    }, 200);
  };

  const flResize = () => {
    if (flkty) flkty.resize();
  };

  const onCategoryChange = index => setActiveCategoryIndex(index);

  const products = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(s => s.products);
  console.log('pro', products);
  let flkty = undefined;
  return __jsx("div", {
    className: className
  }, __jsx("div", {
    className: "c-category-products__heading-wrapper"
  }, __jsx(Heading, {
    parentClass: "c-category-products",
    versions: ['default', 'upper']
  }, heading), subHeading && __jsx(Heading, {
    subHeading: true,
    parentClass: "c-category-products",
    versions: ['default', 'lft-br']
  }, subHeading)), __jsx("div", {
    className: "c-category-products__list"
  }, __jsx("span", {
    onClick: () => {
      onCategoryChange(-1);
    },
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('c-category-products__list-item', {
      'c-category-products__list-item--active': activeCategoryIndex === -1
    }),
    key: 0
  }, "All"), products.categories.map((el, i) => {
    if (el.products.length >= 1) return __jsx("span", {
      onClick: () => {
        onCategoryChange(i);
      },
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('c-category-products__list-item', {
        'c-category-products__list-item--active': activeCategoryIndex === i
      }),
      className: `c-category-products__list-item 
            ${activeCategoryIndex === i && 'c-category-products__list-item--active'}
                `,
      key: i
    }, el.name);
  })), __jsx("div", {
    className: "row c-category-products__product-list"
  }, __jsx(react_flickity_component__WEBPACK_IMPORTED_MODULE_5___default.a, {
    options: {
      initialIndex: 0,
      pageDots: false,
      cellAlign: 'left',
      contain: true,
      on: {
        ready: () => {
          flickityInit();
        }
      }
    },
    flickityRef: c => flkty = c,
    disableImagesLoaded: false,
    reloadOnUpdate: true,
    className: "c-category-products__slider "
  }, console.log('poooo', products.categories, activeCategoryIndex), activeCategoryIndex === -1 ? products.products.filter(product => product.hidden === false).map((item, index) => __jsx(_Product__WEBPACK_IMPORTED_MODULE_9__["default"], _extends({}, props, {
    key: index,
    data: item
  }))) : products.categories[activeCategoryIndex].products.filter(product => product.hidden === false).map((item, index) => __jsx(_Product__WEBPACK_IMPORTED_MODULE_9__["default"], _extends({}, props, {
    key: index,
    data: item
  }))))), __jsx("div", {
    className: "consult-doc-banner-wrapper",
    style: {
      padding: '0rem 0 0rem 0'
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
    href: "/products"
  }, __jsx("button", {
    className: "top-btn",
    style: {
      fontSize: 'x-large',
      fontWeight: '500'
    }
  }, 'SEE ALL PRODUCTS ', " \xA0", __jsx("img", {
    className: "top",
    style: {
      height: '20px',
      marginBottom: '5px'
    },
    src: "/images/right-arrow-32px.png",
    alt: "to-top"
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (CategoryProducts);

/***/ }),

/***/ "nQYz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Product; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utilis_customFunctions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("rEar");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_styles_app_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("YWgu");
/* harmony import */ var _components_styles_app_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_styles_app_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("Exp3");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("nZwT");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






function Product(props) {
  const {
    data,
    isSelectable,
    isSelected,
    handleSelectClick
  } = props;
  const {
    images,
    name,
    colors,
    price,
    shortDesc
  } = data;
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  const {
    0: showImageNo,
    1: setShowImageNo
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const imagesCount = images.length;

  const handleOnMouseEnter = () => {
    imagesCount >= 2 && setShowImageNo(s => s + 1);
  };

  const handleOnMouseLeave = () => {
    imagesCount >= 2 && setShowImageNo(s => s - 1);
  };

  return __jsx("div", {
    className: `c-product-card   ${isSelected && 'c-product-card--selected '}`
  }, __jsx("div", {
    className: "c-product-card__image-wrapper",
    onClick: () => !isSelected && router.push({
      pathname: `products/${data._id}`,
      state: data
    })
  }, images && images[showImageNo] && __jsx("img", {
    src: images[showImageNo].data,
    alt: 'product image',
    className: "c-product-card__image",
    onMouseEnter: handleOnMouseEnter,
    onMouseLeave: handleOnMouseLeave
  }), __jsx("div", {
    className: "c-product-card__image-text"
  })), __jsx("div", {
    className: "c-product-card__details"
  }, __jsx("div", {
    className: "c-product-card__details-name",
    onClick: () => !isSelected && router.push({
      pathname: `products/${data._id}`,
      state: data
    })
  }, name), __jsx("div", {
    className: "c-product-card__details-desc"
  }, shortDesc), price && price !== '' && __jsx("div", {
    className: "c-product-card__details-price"
  }, "Rs. ", price), __jsx("div", {
    className: "c-product-card__details-colors"
  }, colors.map((c, i) => __jsx("div", {
    className: "c-product-card__details-color"
  }, __jsx("div", {
    style: {
      backgroundColor: Object(_utilis_customFunctions__WEBPACK_IMPORTED_MODULE_1__[/* getColorCode */ "a"])(c)
    }
  })))), isSelectable && __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    type: isSelected ? 'primary' : 'default',
    shape: "rounded",
    onClick: () => handleSelectClick(data)
  }, isSelected ? 'Selected' : 'Select')));
}

/***/ }),

/***/ "rEar":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getColorCode; });
const colours = {
  aliceblue: '#f0f8ff',
  antiquewhite: '#faebd7',
  aqua: '#00ffff',
  aquamarine: '#7fffd4',
  azure: '#f0ffff',
  beige: '#f5f5dc',
  bisque: '#ffe4c4',
  black: '#000000',
  blanchedalmond: '#ffebcd',
  blue: '#0000ff',
  blueviolet: '#8a2be2',
  brown: '#a52a2a',
  burlywood: '#deb887',
  cadetblue: '#5f9ea0',
  chartreuse: '#7fff00',
  chocolate: '#d2691e',
  coral: '#ff7f50',
  cornflowerblue: '#6495ed',
  cornsilk: '#fff8dc',
  crimson: '#dc143c',
  cyan: '#00ffff',
  darkblue: '#00008b',
  darkcyan: '#008b8b',
  darkgoldenrod: '#b8860b',
  darkgray: '#a9a9a9',
  darkgreen: '#006400',
  darkkhaki: '#bdb76b',
  darkmagenta: '#8b008b',
  darkolivegreen: '#556b2f',
  darkorange: '#ff8c00',
  darkorchid: '#9932cc',
  darkred: '#8b0000',
  darksalmon: '#e9967a',
  darkseagreen: '#8fbc8f',
  darkslateblue: '#483d8b',
  darkslategray: '#2f4f4f',
  darkturquoise: '#00ced1',
  darkviolet: '#9400d3',
  deeppink: '#ff1493',
  deepskyblue: '#00bfff',
  dimgray: '#696969',
  dodgerblue: '#1e90ff',
  firebrick: '#b22222',
  floralwhite: '#fffaf0',
  forestgreen: '#228b22',
  fuchsia: '#ff00ff',
  gainsboro: '#dcdcdc',
  ghostwhite: '#f8f8ff',
  gold: '#ffd700',
  goldenrod: '#daa520',
  gray: '#808080',
  green: '#008000',
  greenyellow: '#adff2f',
  honeydew: '#f0fff0',
  hotpink: '#ff69b4',
  'indianred ': '#cd5c5c',
  indigo: '#4b0082',
  ivory: '#fffff0',
  khaki: '#f0e68c',
  lavender: '#e6e6fa',
  lavenderblush: '#fff0f5',
  lawngreen: '#7cfc00',
  lemonchiffon: '#fffacd',
  lightblue: '#add8e6',
  lightcoral: '#f08080',
  lightcyan: '#e0ffff',
  lightgoldenrodyellow: '#fafad2',
  lightgrey: '#d3d3d3',
  lightgreen: '#90ee90',
  lightpink: '#ffb6c1',
  lightsalmon: '#ffa07a',
  lightseagreen: '#20b2aa',
  lightskyblue: '#87cefa',
  lightslategray: '#778899',
  lightsteelblue: '#b0c4de',
  lightyellow: '#ffffe0',
  lime: '#00ff00',
  limegreen: '#32cd32',
  linen: '#faf0e6',
  magenta: '#ff00ff',
  maroon: '#800000',
  mediumaquamarine: '#66cdaa',
  mediumblue: '#0000cd',
  mediumorchid: '#ba55d3',
  mediumpurple: '#9370d8',
  mediumseagreen: '#3cb371',
  mediumslateblue: '#7b68ee',
  mediumspringgreen: '#00fa9a',
  mediumturquoise: '#48d1cc',
  mediumvioletred: '#c71585',
  midnightblue: '#191970',
  mintcream: '#f5fffa',
  mistyrose: '#ffe4e1',
  moccasin: '#ffe4b5',
  navajowhite: '#ffdead',
  navy: '#000080',
  oldlace: '#fdf5e6',
  olive: '#808000',
  olivedrab: '#6b8e23',
  orange: '#ffa500',
  orangered: '#ff4500',
  orchid: '#da70d6',
  palegoldenrod: '#eee8aa',
  palegreen: '#98fb98',
  paleturquoise: '#afeeee',
  palevioletred: '#d87093',
  papayawhip: '#ffefd5',
  peachpuff: '#ffdab9',
  peru: '#cd853f',
  pink: '#ffc0cb',
  plum: '#dda0dd',
  powderblue: '#b0e0e6',
  purple: '#800080',
  rebeccapurple: '#663399',
  red: '#ff0000',
  rosybrown: '#bc8f8f',
  royalblue: '#4169e1',
  saddlebrown: '#8b4513',
  salmon: '#fa8072',
  sandybrown: '#f4a460',
  seagreen: '#2e8b57',
  seashell: '#fff5ee',
  sienna: '#a0522d',
  silver: '#c0c0c0',
  skyblue: '#87ceeb',
  slateblue: '#6a5acd',
  slategray: '#708090',
  snow: '#fffafa',
  springgreen: '#00ff7f',
  steelblue: '#4682b4',
  tan: '#d2b48c',
  teal: '#008080',
  thistle: '#d8bfd8',
  tomato: '#ff6347',
  turquoise: '#40e0d0',
  violet: '#ee82ee',
  wheat: '#f5deb3',
  white: '#ffffff',
  whitesmoke: '#f5f5f5',
  yellow: '#ffff00',
  yellowgreen: '#9acd32',
  wine: '#902442',
  carrot: '#d78490',
  nude: '#d2bda2',
  skin: '#E4CDBE',
  rani: '#fe67ca'
};
function getColorCode(colorName) {
  if (typeof colours[colorName.toLowerCase()] != 'undefined') return colours[colorName.toLowerCase()];
  return false;
}

/***/ })

};;