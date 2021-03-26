exports.ids = [98];
exports.modules = {

/***/ "XPzS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ LearnResponse_LearnResponse; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "fuse.js"
var external_fuse_js_ = __webpack_require__("jYXs");
var external_fuse_js_default = /*#__PURE__*/__webpack_require__.n(external_fuse_js_);

// CONCATENATED MODULE: ./constants/chatBotLearnQuestionSet.js
const learnQuestions = [{
  'title': "Old Man's War",
  'author': 'John Scalzi' // 'tags': ['fiction']

}, {
  'title': 'The Lock Artist',
  'author': 'Steve' // 'tags': ['thriller']

}];
/* harmony default export */ var chatBotLearnQuestionSet = (learnQuestions);
// EXTERNAL MODULE: ./components/chatBot/ChatMsgList.js + 1 modules
var ChatMsgList = __webpack_require__("oUyK");

// CONCATENATED MODULE: ./components/chatBot/LearnResponse.js
var __jsx = external_react_default.a.createElement;




const chatMsgList = new ChatMsgList["a" /* default */]();
const {
  learnMoreNotMatch
} = chatMsgList;
const options = {
  keys: ['title'],
  id: 'author'
};
const fuse = new external_fuse_js_default.a(chatBotLearnQuestionSet, options);
class LearnResponse_LearnResponse extends external_react_["Component"] {
  componentDidMount() {
    const {
      previousStep,
      triggerNextStep
    } = this.props;
    this.result = fuse.search(previousStep.message);

    if (this.result && this.result.length > 0) {
      setTimeout(() => {
        triggerNextStep({
          trigger: "learnMoreNext"
        });
      }, 400);
    } else {
      setTimeout(() => {
        triggerNextStep({
          trigger: "learnMoreQuit"
        });
      }, 400);
    }
  }

  render() {
    // const {
    //     previousStep,
    // } = this.props
    // console.log({
    //     propsAAA: this.props,
    //     previousStep: previousStep.message,
    //     result: this.result
    // })
    if (this.result) {
      if (this.result && this.result.length > 0) {
        return __jsx("div", null, this.result[0]);
      }

      return __jsx("div", null, learnMoreNotMatch());
    } else {
      return __jsx("div", null, "...");
    }
  }

}

/***/ })

};;