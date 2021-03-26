exports.ids = [73];
exports.modules = {

/***/ "YFtD":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var pure_react_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("vPRl");
/* harmony import */ var pure_react_carousel__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(pure_react_carousel__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var pure_react_carousel_dist_react_carousel_es_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("hmtA");
/* harmony import */ var pure_react_carousel_dist_react_carousel_es_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(pure_react_carousel_dist_react_carousel_es_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_inner_image_zoom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("S9V7");
/* harmony import */ var react_inner_image_zoom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_inner_image_zoom__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_inner_image_zoom_lib_InnerImageZoom_styles_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("zYDt");
/* harmony import */ var react_inner_image_zoom_lib_InnerImageZoom_styles_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_inner_image_zoom_lib_InnerImageZoom_styles_css__WEBPACK_IMPORTED_MODULE_5__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







class ProductViewSlider extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.renderSlides = this.renderSlides.bind(this);
    this.state = {
      zoom: false
    };
  }

  renderSlides(arr) {
    return arr.map((product, index) => {
      if (product.img) return __jsx(pure_react_carousel__WEBPACK_IMPORTED_MODULE_2__["Slide"], {
        key: index,
        index: index
      }, //this.state.zoom ? (
      // <ImageWithZoom
      //   onClick={() => {
      //     this.setState({ zoom: false });
      //   }}
      //   src={product.img}
      // />
      __jsx(react_inner_image_zoom__WEBPACK_IMPORTED_MODULE_4___default.a, {
        src: product.img,
        zoomSrc: product.img
      }) // ) : (
      //   <Image
      //     onClick={() => {
      //       this.setState({ zoom: true });
      //     }}
      //     style={{ objectFit: "contain" }}
      //     src={product.img}
      //   />
      // )
      );
      return null;
    }).filter(el => el);
  }

  render() {
    const {
      productmeta,
      productid,
      productDetails,
      wishList
    } = this.props;
    return __jsx(pure_react_carousel__WEBPACK_IMPORTED_MODULE_2__["CarouselProvider"], {
      naturalSlideWidth: 100,
      naturalSlideHeight: 100,
      totalSlides: this.props.imgArr.length,
      className: "product-view"
    }, __jsx(pure_react_carousel__WEBPACK_IMPORTED_MODULE_2__["Slider"], null, this.renderSlides(this.props.imgArr)), this.props.imgArr.length > 1 && __jsx("div", {
      className: "slider-navs"
    }, __jsx(pure_react_carousel__WEBPACK_IMPORTED_MODULE_2__["DotGroup"], null)));
  }

}

const mapStateToProps = state => ({
  wishList: state.wishList,
  user: state.user
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(ProductViewSlider));

/***/ }),

/***/ "hmtA":
/***/ (function(module, exports) {



/***/ }),

/***/ "zYDt":
/***/ (function(module, exports) {



/***/ })

};;