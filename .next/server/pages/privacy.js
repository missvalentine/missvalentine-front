module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		29: 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("../" + ({}[chunkId]||chunkId) + "." + {"0":"1484d4b3a1c58fd8e9d3","1":"a234be0a9e01c4af7061","3":"67b473aabb397619f378","5":"5df0a4d20c8524583cb2","7":"36d63fde43cb67412583","33":"9ba921f6916541430b7b","34":"f38b7c78f99e8d6d0641","35":"012f03cddb1a655a0804","36":"0e05c12bba6a69aee836","43":"3b1dbf6faaa6b8f532bd","47":"e7b666758aa115e9130e","49":"057c1be8fb3946f0c960","50":"473ed9b281ae39c7ccb1"}[chunkId] + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 18);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/T1H":
/***/ (function(module, exports) {

module.exports = require("next/dynamic");

/***/ }),

/***/ "/WcL":
/***/ (function(module, exports) {

module.exports = require("react-icons/ai");

/***/ }),

/***/ 18:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("mnIH");


/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "C9pf":
/***/ (function(module, exports) {

module.exports = require("react-icons/fi");

/***/ }),

/***/ "Exp3":
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),

/***/ "FHnF":
/***/ (function(module, exports) {

module.exports = require("react-svg");

/***/ }),

/***/ "K2gz":
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "YLtl":
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "g8bt":
/***/ (function(module, exports) {

module.exports = require("react-lazy-load-image-component");

/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "mnIH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("/T1H");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants_projectSettings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("xSWb");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const Layout = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(() => __webpack_require__.e(/* import() */ 1).then(__webpack_require__.bind(null, "Vw5z")), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("Vw5z")],
    modules: ["../components/Layouts/Layout"]
  }
});
const Heading = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(() => __webpack_require__.e(/* import() */ 0).then(__webpack_require__.bind(null, "h1bS")), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("h1bS")],
    modules: ["../components/Heading"]
  }
});


const privacy = () => {
  return __jsx(Layout, {
    headerVersions: ["bg-dark"],
    headerTheme: "black"
  }, __jsx("div", {
    className: "c-privacy__page-title",
    style: {
      marginTop: "30px"
    }
  }, __jsx(Heading, {
    style: {
      fontFamily: "futuraBT-medium",
      fontWeight: 500,
      fontSize: "32px",
      opacity: 0.9
    },
    versions: ["large"],
    parentClass: "c-privacy",
    className: "c-privacy__heading--large "
  }, "PRIVACY AND COOKIES POLICY")), __jsx("div", {
    className: "c-privacy__content"
  }, __jsx(Heading, {
    className: "c-privacy__heading"
  }, "Welcome to CBD ", _constants_projectSettings__WEBPACK_IMPORTED_MODULE_2__[/* projectName */ "d"]), __jsx("div", {
    className: "container"
  }, _constants_projectSettings__WEBPACK_IMPORTED_MODULE_2__[/* projectName */ "d"], " LLC, a Delaware limited liability company d/b/a CBD", _constants_projectSettings__WEBPACK_IMPORTED_MODULE_2__[/* projectName */ "d"], " collectively referred to in this privacy policy as \u201CCBDbene,\u201D the \u201CCompany\u201D or sometimes \u201Cwe\u201D or \u201Cus\u201D or \u201Cour\u201D), operates the site located at the URL www.cbdbene.com (together with any other site or applications branded as ", _constants_projectSettings__WEBPACK_IMPORTED_MODULE_2__[/* projectName */ "d"], " (collectively, the \u201CSite\u201D). ", _constants_projectSettings__WEBPACK_IMPORTED_MODULE_2__[/* projectName */ "d"], " respects your privacy rights and is committed to protecting the information we collect from you online."), __jsx(Heading, {
    className: "c-privacy__heading"
  }, "Introduction of Policy"), __jsx("div", {
    className: "container"
  }, "This online privacy policy (\u201CPrivacy Policy\u201D) explains CBDben\xE9\u2019s privacy practices for the CBDbene.com site (together with its pages and features, \u201CSite\u201D) and mobile software application (together with its pages and features, \u201CApp\u201D). This Privacy Policy explains how we collect, use, disclose and manage information that you provide to us on the Site or App, as well as how we care for your privacy and protect such information. This Privacy Policy applies to you and any person helping you visit, access, register with or use the Site or creates an Account, or otherwise provides any personal, company, financial or other information to us. When you access or use the site or App, or otherwise provide any information to us, you agree to this privacy policy. If you do not agree with our policies and practices, your choice is not to use our services. By accessing or using our services, you agree to this privacy policy, or to any changes we may subsequently make to this privacy policy. When you create, register or log into an account through the Site or the App, you are automatically accepting and agreeing to the most-recent version of this Privacy Policy, as well as the Site\u2019s and the App\u2019s Terms and Conditions. The Site may contain links to other sites. This Privacy Policy does not apply to information collected on such third party sites and we are not responsible for the privacy practices of such third parties or the content of their sites."), __jsx(Heading, {
    className: "c-privacy__heading"
  }, "Users Under the Age of 18"), __jsx("div", {
    className: "container"
  }, "The Site is intended for use by adults. Neither the Site nor the App is designed or intended to attract, and is not directed to, children under eighteen (18) years of age. No one under age 18 may provide any information to or on the Website, and no one under the age of 21 may register on the Website. We do not knowingly collect personal information from users under 18. If you are under 18, do not use or provide any information on the Website, or on or through any of its features, use any of the interactive or public comment features of the Website or provide any information about yourself to us, including your name, address, telephone number, email address, or any user name. If you are under the age of 21, you may not register with the Website, and thus may not make any purchases or access educational services through the Website. If we learn we have collected or received personal information from a child under 18 without verification of parental consent, we will will use reasonable efforts to refrain from further using such personal information or maintaining it in retrievable form. If you believe we might have any information from or about a child under the age of 18, please contact us at privacy@cbdbene.com."), __jsx(Heading, {
    className: "c-privacy__heading"
  }, "Categories of Information Collected"), __jsx("div", {
    className: "container"
  }, "We may collect personal and non-personal information about you through the Site and/or the App. Information Collected through the Site and/or the App might include:", __jsx("ul", null, __jsx("li", null, "Name (first, last and/or middle) and username, Home contact information (e.g., billing and shipping addresses, email address, telephone number, fax number), date of birth, items purchased, password, zip/postal code or country, gender, date of birth, electronic signature, hobbies, interests."), __jsx("li", null, "Photographic or video image to the extent provided by you."), __jsx("li", null, "Medical history, including the results of any questionnaires, surveys, information requests, interviews, or other documentary, text, video, or audio interactions related to the provision of health services."), __jsx("li", null, "Service provider name and the date, time and content of any messages sent from you to us;"), __jsx("li", null, "Internet connection, the equipment you use to access our Site and usage details;"), __jsx("li", null, "Credit/debit card and other billing information;"), __jsx("li", null, "Information regarding uses of the services; and"), __jsx("li", null, "Other information that is automatically collected or that you choose to provide in any way, shape or form.")), "Other Information Collected From Your Mobile Device might include:", __jsx("ul", null, __jsx("li", null, "Mobile device ID information;"), __jsx("li", null, "Geolocation;"), __jsx("li", null, "Name associated with your mobile device;"), __jsx("li", null, "Telephone number associated with your mobile device;"), __jsx("li", null, "With your express consent, your contacts and/or contact information (e.g., names, telephone numbers, addresses, email addresses, photos) stored on your mobile device; and/or"), __jsx("li", null, "With your express consent, information about third-party software applications on your mobile device."))), __jsx(Heading, {
    className: "c-privacy__heading"
  }, "Use of Information Collected"), __jsx("div", {
    className: "container"
  }, "We may use the information we collect from you in a variety of ways, such as, for example, to:", __jsx("ul", null, __jsx("li", null, "Facilitate your use of the Site, the App and/or their respective products and/or services;"), __jsx("li", null, "Send you communications like, for example, administrative emails, answers to your questions and updates about the Site and/or the App;"), __jsx("li", null, "Process your payments;"), __jsx("li", null, "Provide information and offers including information about third-party businesses, products and services by letter, email, text, telephone or other forms of communication;"), __jsx("li", null, "Improve the Site, the App content, features and/or services;"), __jsx("li", null, "Improve the products, services, marketing and promotional efforts of CBDben\xE9;"), __jsx("li", null, "Create new products, services, marketing and promotions for CBDben\xE9;"), __jsx("li", null, "Market the businesses, products and/or services of CBDben\xE9;"), __jsx("li", null, "Help personalize user experiences with the Site, the App and/or their respective products and/or services;"), __jsx("li", null, "Analyze traffic to and through the Site and/or the App;"), __jsx("li", null, "Analyze user behavior and activity on or through the Site and/or the App;"), __jsx("li", null, "Conduct research and measurement activities for purposes of product and service research and development, advertising claim substantiation, market research, and other activities related to the Site, the App and/or their respective products and/or services;"), __jsx("li", null, "Monitor the activities of you and others on or through the Site and/or the App;"), __jsx("li", null, "Place and track orders for products on your behalf;")), "While we do not currently use third party services that display customized content and advertising provided by us, we may do so in the future. We may also use the information for statistical and/or marketing purposes, to improve our technologies, to provide information about our company and to deliver advertising and promotional information from our partners and third party vendors. We may add your information to our databases to contact you through future e-mails, postal mailings and SMS text-messaging regarding site updates, upcoming events, new products and services and/or the status of orders placed online. We reserve the right to release information to law enforcement or other governmental officials as we, in our sole discretion, deem necessary to comply with applicable law."), __jsx(Heading, {
    className: "c-privacy__heading",
    versions: ["large"]
  }, "Use of Web Technologies"), __jsx("p", null, _constants_projectSettings__WEBPACK_IMPORTED_MODULE_2__[/* projectName */ "d"], " might use various tracking, data aggregation and/or data analysis technologies, including, for example, the following:"), __jsx(Heading, {
    className: "c-privacy__heading"
  }, "Cookies"), __jsx("div", {
    className: "container"
  }, "A cookie is a small data file stored stored on the browser or device you use to view a website or message. They may help store user preferences and activity, and may allow a website to recognize a particular browser or device. There are several types of cookies, including, for example, browser cookies, session cookies, and persistent cookies. Cookies may record information you access on one page of a website to simplify subsequent interaction with that website, or to help streamline your transactions on related pages of that website. Most major browsers are set up so that they will initially accept cookies, but you might be able to adjust your browser\u2019s or device\u2019s preferences to issue you an alert when a cookie is downloaded, or to block, reject, disable, delete or manage the use of some or all cookies on your browser or device. A session ID cookie expires when a browser is closed. A persistent cookie remains on your hard drive for an extended period of time. Persistent cookies also enable us to track and target the interests of our users to enhance the experience on the Site. If you reject cookies, you may still use the Site but your ability to use some areas of the Site may be limited."), __jsx(Heading, {
    className: "c-privacy__heading"
  }, "Flash cookies"), __jsx("div", {
    className: "container"
  }, "Flash cookies are cookies written using Adobe Flash, and which may be permanently stored on your device. Like regular cookies, Flash cookies may help store user preferences and activity, and may allow a website to recognize a particular browser or device. Flash cookies are not managed by the same browser settings that are used for regular cookies."), __jsx(Heading, {
    className: "c-privacy__heading"
  }, "Web beacons"), __jsx("div", {
    className: "container"
  }, "Web beacons are pieces of code embedded in a website or email to monitor your activity on the website or your opening of the email, and which can pass along information such as the IP address of the computer or device you use to view the website or open the email, the URL page on which the web beacon is located, the type of browser that was used to access the website, and previously set cookie values. Web beacons are sometimes used to collect advertising data, such as counting page views, promotion views or advertising responses. Disabling your computer\u2019s, device\u2019s or browser\u2019s cookies may prevent some web beacons from tracking or recording certain information about your activities."), __jsx(Heading, {
    className: "c-privacy__heading"
  }, "Scripts"), __jsx("div", {
    className: "container"
  }, "Web beacons are pieces of code embedded in a website or email to monitor your activity on the website or your opening of the email, and which can pass along information such as the IP address of the computer or device you use to view the website or open the email, the URL page on which the web beacon is located, the type of browser that was used to access the website, and previously set cookie values. Web beacons are sometimes used to collect advertising data, such as counting page views, promotion views or advertising responses. Disabling your computer\u2019s, device\u2019s or browser\u2019s cookies may prevent some web beacons from tracking or recording certain information about your activities."), __jsx(Heading, {
    className: "c-privacy__heading"
  }, "Analytic tools"), __jsx("div", {
    className: "container"
  }, "Analytic tools are sometimes offered by third parties, and which track, measure and/or generate information about a website\u2019s or program\u2019s traffic, sales, audience and similar information, and which may be used for various reasons, such as, for example, statistical research, marketing research, and content ratings research, and conversion tracking. Examples of the analytic tools and services which", _constants_projectSettings__WEBPACK_IMPORTED_MODULE_2__[/* projectName */ "d"], " might use include Google Analytics. ", _constants_projectSettings__WEBPACK_IMPORTED_MODULE_2__[/* projectName */ "d"], " may also use other third-party analytic tools and services. We use this information to analyze trends, to administer the Site, to track the movements of users around the Site and to gather demographic information about our user base as a whole. Please be advised that if you choose to block, reject, disable, delete or change the management settings for any or all of the aforementioned technologies and/or other tracking, data aggregation and data analysis technologies, then certain areas of the Site and/or the App might not function properly."), __jsx(Heading, {
    className: "c-privacy__heading"
  }, "Security"), __jsx("div", {
    className: "container"
  }, "We implement security measures to help protect the personal information we collect by using industry recognized security safeguards such as site monitoring, secured networks and servers, firewalls and encryption. When we ask for sensitive information, we protect it through the use of encryption during transmission, by using secure socket layer (SSL) technology. Regardless of the foregoing, please observe that \u201Cperfect\u201D or \u201C100%\u201D security does not exist on the Internet. Therefore, your access and use of the Site and/or the App, and your opening of any communications sent through or as a function of the Site and/or the App, are done at your own risk. You are responsible for protecting against unauthorized access to your password and to your computer/mobile device. We ask you not to share your password with anyone. To help maintain the security of your personal information, ", _constants_projectSettings__WEBPACK_IMPORTED_MODULE_2__[/* projectName */ "d"], " asks that you please notify it immediately of any unauthorized visit, access or use of the Site and/or the App, or the loss or unauthorized use of your user access information for the Site and/or the App (e.g., username or password)."), __jsx(Heading, {
    className: "c-privacy__heading"
  }, "Communications"), __jsx("div", {
    className: "container"
  }, "Based upon the personally identifiable information that you provide to us, we may send you a welcome e-mail. We will also communicate with you in response to your enquiries, to provide any services you request, to provide newsletters or other updates that you request and to manage your Account. In addition, when you register an Account with us, you may choose to consent to our contacting you by e-mail and to receiving our e-mail subscriptions, e-mails and advertorial e-mails from us. If, at any time, you no longer want us to contact you by e-mail and/or receive our e-mail subscriptions, e-mails and advertorial e-mails, you may opt out of these functions by changing the preferences in your Account. You can contact customer service by e-mail at the contact information listed below to assist you with any such changes to your Account."), __jsx(Heading, {
    className: "c-privacy__heading"
  }, "Third Party Ad Server Networks"), __jsx("div", {
    className: "container"
  }, "Our Site may use third parties such as network advertisers to serve advertisements on our Site and may use traffic measurement services to analyze traffic on our Site. Our Site\u2019s third party ad network providers, the advertisers, the sponsors and/or traffic measurement services may themselves set and access their own cookies and other technologies on your computer and track certain behavioral information regarding users of your computer via an IP address or other device identifier. Third party cookies, web beacons and other third party technologies are governed by each third party\u2019s specific privacy policy, not this one."), __jsx(Heading, {
    className: "c-privacy__heading"
  }, "To opt out of third-party tracking on our Site use the following tools"), __jsx("div", {
    className: "container"
  }, "You may opt out of the Ad Tech Network by clicking", __jsx("a", {
    style: {
      color: "black"
    },
    href: "http://www.youronlinechoices.com/opt-out-interface"
  }, " ", "http://www.youronlinechoices.com/opt-out-interface"), ". If you would like to opt out of having interest-based information collected during your visits to our Site or other sites, both the National Advertising Initiative (the \u201CNAI\u201D) and the Digital Advertising Alliance (the \u201CDAA\u201D) offer opt out tools to assist you in managing your choices. Click", " ", __jsx("a", {
    style: {
      color: "black"
    },
    href: "http://www.networkadvertising.org/choices/"
  }, " ", "http://www.networkadvertising.org/choices/"), " ", "to visit the NAI opt out page and click", " ", __jsx("a", {
    style: {
      color: "black"
    },
    href: "http://www.aboutads.info/choices/"
  }, " ", "http://www.aboutads.info/choices/"), " ", "for the DAA opt out page. You may wish to visit", __jsx("a", {
    style: {
      color: "black"
    },
    href: "http://www.networkadvertising.org/understanding-online-advertising/"
  }, " ", "http://www.networkadvertising.org/understanding-online-advertising//"), " ", "to learn more about interest-based advertising and your choices regarding having this information used by third parties and your \u201Copt out\u201D choices. Opting out through the DAA or the NAI only means that those DAA or NAI members will no longer be able to deliver targeted content and/or ads to you, which will affect our Site as well as other unaffiliated sites, but does not mean you will no longer receive any targeted content and/or ads. Also, if your browsers are configured to reject cookies when you visit these opt out pages, or you subsequently erase your cookies, use a different computer or change web browsers, your opt out choices may not, or may no longer, be effective."), __jsx(Heading, {
    className: "c-privacy__heading"
  }, "Opting Out"), __jsx("div", {
    className: "container"
  }, "If you want to be removed from our marketing list and do not want us to send you e-mail, postal mail or other messages about our products and services, you can opt out. To do so, please send an e-mail to", " ", __jsx("a", {
    style: {
      color: "black"
    },
    href: "mailto:unsubscribe@cbdbene.com"
  }, " ", "unsubscribe@cbdbene.com"), ", with the word \u201CREMOVE\u201D in the subject line."), __jsx(Heading, {
    className: "c-privacy__heading"
  }, "Your California Privacy Rights"), __jsx("div", {
    className: "container"
  }, "California Civil Code Section 1798.83 permits California residents to request certain information regarding our disclosure of such residents\u2019 personal information to third parties for such third parties\u2019 direct marketing purposes. To make such a request, please e-mail us at", " ", __jsx("a", {
    style: {
      color: "black"
    },
    href: "mailto:privacy@cbdbene.com"
  }, " ", "privacy@cbdbene.com"), "."), __jsx(Heading, {
    className: "c-privacy__heading"
  }, "Privacy Policy Updates"), __jsx("div", {
    className: "container"
  }, "We reserve the right to change this Privacy Policy at any time, so please review it on a regular basis. Any changes made to this Privacy Policy will be posted here. The date stamp at the top of the page represents the last day this Privacy Policy was updated. If you have questions about this Privacy Policy, you can contact us at privacy@cbdbene.com. By maintaining an Account with us, or by using or accessing any services provided by us or the Site, you will be deemed to have agreed to and accepted this Privacy Policy."), __jsx(Heading, {
    className: "c-privacy__heading"
  }, "Manage Accurate Information"), __jsx("div", {
    className: "container"
  }, "If your personally identifiable information changes, or if you no longer choose to use our services or the Site, you can contact customer service by e-mail to assist you with changes to your Account. To the extent your Account closes or becomes inactive, we will continue to protect your information as described in this Privacy Policy. You may request at any time that ", _constants_projectSettings__WEBPACK_IMPORTED_MODULE_2__[/* projectName */ "d"], " provide you with an opportunity to review and change your personal information collected through the Site or the App or to no longer use your personal information to provide you with any products or services. Please submit any such request (\u201CRequest Concerning Personal Information\u201D) By email: Privacy@cbdbene.com, with a subject line of \u201CYour Personal Information.\u201D For each Request Concerning Personal Information, please state \u201CYour Personal Information\u201D in the email or letter subject line, and clearly state the the nature of your request and your name, street address, city, state, zip code and email address. CBD", _constants_projectSettings__WEBPACK_IMPORTED_MODULE_2__[/* projectName */ "d"], " is not responsible for any Request Concerning Personal Information that is incomplete, incorrectly labeled, or incorrectly sent. You are solely responsible for the accuracy and content of your personal information, and for keeping your personal information current and correct. Further, ", _constants_projectSettings__WEBPACK_IMPORTED_MODULE_2__[/* projectName */ "d"], " ", "does not respond to \u201Cdo not track\u201D (DNT) signals. Finally, as explained further above, ", _constants_projectSettings__WEBPACK_IMPORTED_MODULE_2__[/* projectName */ "d"], " does not authorize third parties to collect your personal information when you use the Site or the App, except as expressly stated in this Privacy Policy. To the fullest extent permitted by law, ", _constants_projectSettings__WEBPACK_IMPORTED_MODULE_2__[/* projectName */ "d"], " is not responsible for, and you hereby release ", _constants_projectSettings__WEBPACK_IMPORTED_MODULE_2__[/* projectName */ "d"], " from any and all liability which may arise from, such third parties\u2019 unauthorized collection of your personal information"), __jsx(Heading, {
    className: "c-privacy__heading"
  }, "Severability"), __jsx("div", {
    className: "container"
  }, "If any term or condition of this Privacy Policy is deemed invalid or unenforceable by a court of law with binding authority, then the remaining Terms and Conditions shall not be affected, and the court shall reform the invalidated or unenforceable term or condition to the maximum extent permitted under the law and consistent with the intent of this Privacy Policy."), __jsx(Heading, {
    className: "c-privacy__heading"
  }, "International Users"), __jsx("div", {
    className: "container"
  }, _constants_projectSettings__WEBPACK_IMPORTED_MODULE_2__[/* projectName */ "d"], " is based in the United States, with our servers and offices headquartered in the United States. Please be aware that information you provide to us or that we obtain as a result of your use of the Site, an Account, or any services provided by us may be processed and transferred to, and be subject to the laws of, the United States. The privacy and data protection laws in the United States may not be equivalent to similar laws in your country of residence. By using the Site or an Account, or by providing us with your information, you consent to the collection, transfer, storage and processing of information to and within the United States. If our cookies or other software detects IP addresses located in a country outside the United States, we reserve the right to deny access to any and all of our services."), __jsx(Heading, {
    className: "c-privacy__heading"
  }, "Contact Us"), __jsx("div", {
    className: "container"
  }, "If you have any questions or suggestions about this Privacy Policy, the Site or the App please contact us by e-mail:", " ", __jsx("a", {
    style: {
      color: "black"
    },
    href: "mailto:privacy@cbdbene.com"
  }, " ", "privacy@cbdbene.com")), __jsx("div", {
    style: {
      marginTop: "50px"
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (privacy);

/***/ }),

/***/ "nZwT":
/***/ (function(module, exports) {

module.exports = require("@ant-design/icons");

/***/ }),

/***/ "utGq":
/***/ (function(module, exports) {

module.exports = require("box-dimension-calculator");

/***/ }),

/***/ "xSWb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return projectName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return baseUrl; });
/* unused harmony export docMzUrl */
/* unused harmony export contentUrl */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return imageUrl; });
/* unused harmony export serverUrl */
/* unused harmony export googleApiKey */
/* unused harmony export shippingFreeAfter */
/* unused harmony export shippingExtraRate */
/* unused harmony export shippingStaticRate */
/* unused harmony export referralPresent */
/* unused harmony export defaultOrderStatus */
/* unused harmony export defaultStatusInOrder */
/* unused harmony export invoiceUrl */
/* unused harmony export subsPercent */
/* unused harmony export filePath */
/* unused harmony export labSheetPath */
/* unused harmony export countryTax */
/* unused harmony export chatTheme */
/* unused harmony export enableCountry */
/* unused harmony export accountTypeOpt */
/* unused harmony export customRates */
/* unused harmony export topBarText */
const projectName = 'MissValentine';
const isLocal = false;
const baseUrl = isLocal ? 'http://localhost:5000/api' : 'https://missval.herokuapp.com/api'; //export const baseUrl = "http://localhost:4003";

const docMzUrl = 'http://localhost:3001';
const contentUrl = 'https://server1.cbdbene.com';
const imageUrl = 'https://server1.cbdbene.com/';
const serverUrl = 'https://admin.cbdbene.com/'; //export const baseUrl = "http://localhost:4003";
//export const serverUrl = "http://localhost:4003/";
//export const imageUrl = "http://localhost:5000/";
// export const contentUrl = "http://localhost:5000";

const googleApiKey = 'AIzaSyBXxXfKy5wtHEO9XniOvGEKPME-_ldClVk';
const shippingFreeAfter = 75;
const shippingExtraRate = 5;
const shippingStaticRate = 5.95;
const referralPresent = 25;
const defaultOrderStatus = 'Transaction completed - label generated';
const defaultStatusInOrder = 'in process';
const invoiceUrl = 'https://admin.cbdbene.com/images/';
const subsPercent = 10;
const filePath = 'https://admin.cbdbene.com/var/www/cbdbene_3rde/cbdbene/';
const labSheetPath = 'https://admin.cbdbene.com/var/www/cbdbene_3rde/cbdbene/';
const countryTax = 15 / 100;
const chatTheme = {
  background: '#ffffff',
  // fontFamily: fonts.mainfont,
  headerBgColor: '#000000',
  headerFontColor: '#ffffff',
  headerFontSize: '20px',
  botBubbleColor: '#eee9e3',
  botFontColor: '#202020',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a'
};
const enableCountry = ['US', 'USA', 'United States'];
const accountTypeOpt = [{
  label: 'Checking',
  value: 'checking'
}, {
  label: 'Savings',
  value: 'savings'
}, {
  label: 'Business Checking',
  value: 'businessChecking'
}];
const customRates = [{
  id: 'rate_custom1',
  object: 'Rate',
  created_at: '2020-02-10T10:54:03Z',
  updated_at: '2020-02-10T10:54:03Z',
  mode: 'test',
  service: 'Priority',
  carrier: 'USPS',
  rate: '8.42',
  currency: 'USD',
  retail_rate: '14.90',
  retail_currency: 'USD',
  list_rate: '11.19',
  list_currency: 'USD',
  delivery_days: 2,
  delivery_date: null,
  delivery_date_guaranteed: false,
  est_delivery_days: 2,
  shipment_id: 'shp_2255eb7f0e8b4775abcfe009be9ba569',
  carrier_account_id: 'ca_5cd23a24d9c3427780dcfde68fbb1c76',
  customName: 'Standard',
  customRate: 15.89
}, {
  id: 'rate_custom2',
  object: 'Rate',
  created_at: '2020-02-10T10:54:03Z',
  updated_at: '2020-02-10T10:54:03Z',
  mode: 'test',
  service: 'ParcelSelect',
  carrier: 'USPS',
  rate: '10.89',
  currency: 'USD',
  retail_rate: '10.89',
  retail_currency: 'USD',
  list_rate: '10.89',
  list_currency: 'USD',
  delivery_days: 7,
  delivery_date: null,
  delivery_date_guaranteed: false,
  est_delivery_days: 7,
  shipment_id: 'shp_2255eb7f0e8b4775abcfe009be9ba569',
  carrier_account_id: 'ca_5cd23a24d9c3427780dcfde68fbb1c76',
  customName: 'Priority',
  customRate: 20.54
}, {
  id: 'rate_custom3',
  object: 'Rate',
  created_at: '2020-02-10T10:54:03Z',
  updated_at: '2020-02-10T10:54:03Z',
  mode: 'test',
  service: 'Express',
  carrier: 'USPS',
  rate: '43.60',
  currency: 'USD',
  retail_rate: '50.85',
  retail_currency: 'USD',
  list_rate: '43.60',
  list_currency: 'USD',
  delivery_days: null,
  delivery_date: null,
  delivery_date_guaranteed: false,
  est_delivery_days: null,
  shipment_id: 'shp_2255eb7f0e8b4775abcfe009be9ba569',
  carrier_account_id: 'ca_5cd23a24d9c3427780dcfde68fbb1c76',
  customName: 'Express',
  customRate: 48.6
}];
const topBarText = 'Free shipping on all orders above $75.'; // make it empty string ("") to hide tha bar

/* harmony default export */ __webpack_exports__["b"] = ({
  imageUrl,
  projectName,
  baseUrl,
  serverUrl,
  googleApiKey,
  shippingFreeAfter,
  shippingExtraRate,
  shippingStaticRate,
  referralPresent,
  defaultOrderStatus,
  defaultStatusInOrder,
  invoiceUrl,
  enableCountry,
  subsPercent,
  accountTypeOpt,
  filePath,
  labSheetPath,
  countryTax,
  docMzUrl,
  customRates,
  chatTheme,
  topBarText,
  contentUrl
});

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });