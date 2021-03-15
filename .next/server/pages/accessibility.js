module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"pages/accessibility": 0
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
/******/ 			var chunk = require("../" + ({}[chunkId]||chunkId) + ".js");
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/accessibility.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/dist/next-server/lib/router-context.js\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCI/NDEyNSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiIuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///../next-server/lib/router-context\n");

/***/ }),

/***/ "./constants/projectSettings.js":
/*!**************************************!*\
  !*** ./constants/projectSettings.js ***!
  \**************************************/
/*! exports provided: projectName, baseUrl, docMzUrl, contentUrl, imageUrl, serverUrl, googleApiKey, shippingFreeAfter, shippingExtraRate, shippingStaticRate, referralPresent, defaultOrderStatus, defaultStatusInOrder, invoiceUrl, subsPercent, filePath, labSheetPath, countryTax, chatTheme, enableCountry, accountTypeOpt, customRates, topBarText, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"projectName\", function() { return projectName; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"baseUrl\", function() { return baseUrl; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"docMzUrl\", function() { return docMzUrl; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"contentUrl\", function() { return contentUrl; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"imageUrl\", function() { return imageUrl; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"serverUrl\", function() { return serverUrl; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"googleApiKey\", function() { return googleApiKey; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"shippingFreeAfter\", function() { return shippingFreeAfter; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"shippingExtraRate\", function() { return shippingExtraRate; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"shippingStaticRate\", function() { return shippingStaticRate; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"referralPresent\", function() { return referralPresent; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"defaultOrderStatus\", function() { return defaultOrderStatus; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"defaultStatusInOrder\", function() { return defaultStatusInOrder; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"invoiceUrl\", function() { return invoiceUrl; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"subsPercent\", function() { return subsPercent; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"filePath\", function() { return filePath; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"labSheetPath\", function() { return labSheetPath; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"countryTax\", function() { return countryTax; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"chatTheme\", function() { return chatTheme; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"enableCountry\", function() { return enableCountry; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"accountTypeOpt\", function() { return accountTypeOpt; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"customRates\", function() { return customRates; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"topBarText\", function() { return topBarText; });\nconst projectName = 'MissValentine';\nconst baseUrl = 'https://missval.herokuapp.com/api'; //export const baseUrl = \"http://localhost:4003\";\n\nconst docMzUrl = 'http://localhost:3001';\nconst contentUrl = 'https://server1.cbdbene.com';\nconst imageUrl = 'https://server1.cbdbene.com/';\nconst serverUrl = 'https://admin.cbdbene.com/'; //export const baseUrl = \"http://localhost:4003\";\n//export const serverUrl = \"http://localhost:4003/\";\n//export const imageUrl = \"http://localhost:5000/\";\n// export const contentUrl = \"http://localhost:5000\";\n\nconst googleApiKey = 'AIzaSyBXxXfKy5wtHEO9XniOvGEKPME-_ldClVk';\nconst shippingFreeAfter = 75;\nconst shippingExtraRate = 5;\nconst shippingStaticRate = 5.95;\nconst referralPresent = 25;\nconst defaultOrderStatus = 'Transaction completed - label generated';\nconst defaultStatusInOrder = 'in process';\nconst invoiceUrl = 'https://admin.cbdbene.com/images/';\nconst subsPercent = 10;\nconst filePath = 'https://admin.cbdbene.com/var/www/cbdbene_3rde/cbdbene/';\nconst labSheetPath = 'https://admin.cbdbene.com/var/www/cbdbene_3rde/cbdbene/';\nconst countryTax = 15 / 100;\nconst chatTheme = {\n  background: '#ffffff',\n  // fontFamily: fonts.mainfont,\n  headerBgColor: '#000000',\n  headerFontColor: '#ffffff',\n  headerFontSize: '20px',\n  botBubbleColor: '#eee9e3',\n  botFontColor: '#202020',\n  userBubbleColor: '#fff',\n  userFontColor: '#4a4a4a'\n};\nconst enableCountry = ['US', 'USA', 'United States'];\nconst accountTypeOpt = [{\n  label: 'Checking',\n  value: 'checking'\n}, {\n  label: 'Savings',\n  value: 'savings'\n}, {\n  label: 'Business Checking',\n  value: 'businessChecking'\n}];\nconst customRates = [{\n  id: 'rate_custom1',\n  object: 'Rate',\n  created_at: '2020-02-10T10:54:03Z',\n  updated_at: '2020-02-10T10:54:03Z',\n  mode: 'test',\n  service: 'Priority',\n  carrier: 'USPS',\n  rate: '8.42',\n  currency: 'USD',\n  retail_rate: '14.90',\n  retail_currency: 'USD',\n  list_rate: '11.19',\n  list_currency: 'USD',\n  delivery_days: 2,\n  delivery_date: null,\n  delivery_date_guaranteed: false,\n  est_delivery_days: 2,\n  shipment_id: 'shp_2255eb7f0e8b4775abcfe009be9ba569',\n  carrier_account_id: 'ca_5cd23a24d9c3427780dcfde68fbb1c76',\n  customName: 'Standard',\n  customRate: 15.89\n}, {\n  id: 'rate_custom2',\n  object: 'Rate',\n  created_at: '2020-02-10T10:54:03Z',\n  updated_at: '2020-02-10T10:54:03Z',\n  mode: 'test',\n  service: 'ParcelSelect',\n  carrier: 'USPS',\n  rate: '10.89',\n  currency: 'USD',\n  retail_rate: '10.89',\n  retail_currency: 'USD',\n  list_rate: '10.89',\n  list_currency: 'USD',\n  delivery_days: 7,\n  delivery_date: null,\n  delivery_date_guaranteed: false,\n  est_delivery_days: 7,\n  shipment_id: 'shp_2255eb7f0e8b4775abcfe009be9ba569',\n  carrier_account_id: 'ca_5cd23a24d9c3427780dcfde68fbb1c76',\n  customName: 'Priority',\n  customRate: 20.54\n}, {\n  id: 'rate_custom3',\n  object: 'Rate',\n  created_at: '2020-02-10T10:54:03Z',\n  updated_at: '2020-02-10T10:54:03Z',\n  mode: 'test',\n  service: 'Express',\n  carrier: 'USPS',\n  rate: '43.60',\n  currency: 'USD',\n  retail_rate: '50.85',\n  retail_currency: 'USD',\n  list_rate: '43.60',\n  list_currency: 'USD',\n  delivery_days: null,\n  delivery_date: null,\n  delivery_date_guaranteed: false,\n  est_delivery_days: null,\n  shipment_id: 'shp_2255eb7f0e8b4775abcfe009be9ba569',\n  carrier_account_id: 'ca_5cd23a24d9c3427780dcfde68fbb1c76',\n  customName: 'Express',\n  customRate: 48.6\n}];\nconst topBarText = 'Free shipping on all orders above $75.'; // make it empty string (\"\") to hide tha bar\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  imageUrl,\n  projectName,\n  baseUrl,\n  serverUrl,\n  googleApiKey,\n  shippingFreeAfter,\n  shippingExtraRate,\n  shippingStaticRate,\n  referralPresent,\n  defaultOrderStatus,\n  defaultStatusInOrder,\n  invoiceUrl,\n  enableCountry,\n  subsPercent,\n  accountTypeOpt,\n  filePath,\n  labSheetPath,\n  countryTax,\n  docMzUrl,\n  customRates,\n  chatTheme,\n  topBarText,\n  contentUrl\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb25zdGFudHMvcHJvamVjdFNldHRpbmdzLmpzP2M1MjUiXSwibmFtZXMiOlsicHJvamVjdE5hbWUiLCJiYXNlVXJsIiwiZG9jTXpVcmwiLCJjb250ZW50VXJsIiwiaW1hZ2VVcmwiLCJzZXJ2ZXJVcmwiLCJnb29nbGVBcGlLZXkiLCJzaGlwcGluZ0ZyZWVBZnRlciIsInNoaXBwaW5nRXh0cmFSYXRlIiwic2hpcHBpbmdTdGF0aWNSYXRlIiwicmVmZXJyYWxQcmVzZW50IiwiZGVmYXVsdE9yZGVyU3RhdHVzIiwiZGVmYXVsdFN0YXR1c0luT3JkZXIiLCJpbnZvaWNlVXJsIiwic3Vic1BlcmNlbnQiLCJmaWxlUGF0aCIsImxhYlNoZWV0UGF0aCIsImNvdW50cnlUYXgiLCJjaGF0VGhlbWUiLCJiYWNrZ3JvdW5kIiwiaGVhZGVyQmdDb2xvciIsImhlYWRlckZvbnRDb2xvciIsImhlYWRlckZvbnRTaXplIiwiYm90QnViYmxlQ29sb3IiLCJib3RGb250Q29sb3IiLCJ1c2VyQnViYmxlQ29sb3IiLCJ1c2VyRm9udENvbG9yIiwiZW5hYmxlQ291bnRyeSIsImFjY291bnRUeXBlT3B0IiwibGFiZWwiLCJ2YWx1ZSIsImN1c3RvbVJhdGVzIiwiaWQiLCJvYmplY3QiLCJjcmVhdGVkX2F0IiwidXBkYXRlZF9hdCIsIm1vZGUiLCJzZXJ2aWNlIiwiY2FycmllciIsInJhdGUiLCJjdXJyZW5jeSIsInJldGFpbF9yYXRlIiwicmV0YWlsX2N1cnJlbmN5IiwibGlzdF9yYXRlIiwibGlzdF9jdXJyZW5jeSIsImRlbGl2ZXJ5X2RheXMiLCJkZWxpdmVyeV9kYXRlIiwiZGVsaXZlcnlfZGF0ZV9ndWFyYW50ZWVkIiwiZXN0X2RlbGl2ZXJ5X2RheXMiLCJzaGlwbWVudF9pZCIsImNhcnJpZXJfYWNjb3VudF9pZCIsImN1c3RvbU5hbWUiLCJjdXN0b21SYXRlIiwidG9wQmFyVGV4dCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtB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O0FBUWJDLG9CQVJhO0FBU2JDLGlCQVRhO0FBVWJDLG9CQVZhO0FBV2JDLHNCQVhhO0FBWWJDLFlBWmE7QUFhYmMsZUFiYTtBQWNiYixhQWRhO0FBZWJjLGdCQWZhO0FBZ0JiYixVQWhCYTtBQWlCYkMsY0FqQmE7QUFrQmJDLFlBbEJhO0FBbUJiZixVQW5CYTtBQW9CYjZCLGFBcEJhO0FBcUJiYixXQXJCYTtBQXNCYm1DLFlBdEJhO0FBdUJibEQ7QUF2QmEsQ0FBZiIsImZpbGUiOiIuL2NvbnN0YW50cy9wcm9qZWN0U2V0dGluZ3MuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgcHJvamVjdE5hbWUgPSAnTWlzc1ZhbGVudGluZSc7XG5leHBvcnQgY29uc3QgYmFzZVVybCA9ICdodHRwczovL21pc3N2YWwuaGVyb2t1YXBwLmNvbS9hcGknO1xuLy9leHBvcnQgY29uc3QgYmFzZVVybCA9IFwiaHR0cDovL2xvY2FsaG9zdDo0MDAzXCI7XG5leHBvcnQgY29uc3QgZG9jTXpVcmwgPSAnaHR0cDovL2xvY2FsaG9zdDozMDAxJztcbmV4cG9ydCBjb25zdCBjb250ZW50VXJsID0gJ2h0dHBzOi8vc2VydmVyMS5jYmRiZW5lLmNvbSc7XG5leHBvcnQgY29uc3QgaW1hZ2VVcmwgPSAnaHR0cHM6Ly9zZXJ2ZXIxLmNiZGJlbmUuY29tLyc7XG5leHBvcnQgY29uc3Qgc2VydmVyVXJsID0gJ2h0dHBzOi8vYWRtaW4uY2JkYmVuZS5jb20vJztcbi8vZXhwb3J0IGNvbnN0IGJhc2VVcmwgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6NDAwM1wiO1xuLy9leHBvcnQgY29uc3Qgc2VydmVyVXJsID0gXCJodHRwOi8vbG9jYWxob3N0OjQwMDMvXCI7XG4vL2V4cG9ydCBjb25zdCBpbWFnZVVybCA9IFwiaHR0cDovL2xvY2FsaG9zdDo1MDAwL1wiO1xuLy8gZXhwb3J0IGNvbnN0IGNvbnRlbnRVcmwgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6NTAwMFwiO1xuZXhwb3J0IGNvbnN0IGdvb2dsZUFwaUtleSA9ICdBSXphU3lCWHhYZkt5NXd0SEVPOVhuaU92R0VLUE1FLV9sZENsVmsnO1xuZXhwb3J0IGNvbnN0IHNoaXBwaW5nRnJlZUFmdGVyID0gNzU7XG5leHBvcnQgY29uc3Qgc2hpcHBpbmdFeHRyYVJhdGUgPSA1O1xuZXhwb3J0IGNvbnN0IHNoaXBwaW5nU3RhdGljUmF0ZSA9IDUuOTU7XG5leHBvcnQgY29uc3QgcmVmZXJyYWxQcmVzZW50ID0gMjU7XG5leHBvcnQgY29uc3QgZGVmYXVsdE9yZGVyU3RhdHVzID0gJ1RyYW5zYWN0aW9uIGNvbXBsZXRlZCAtIGxhYmVsIGdlbmVyYXRlZCc7XG5leHBvcnQgY29uc3QgZGVmYXVsdFN0YXR1c0luT3JkZXIgPSAnaW4gcHJvY2Vzcyc7XG5leHBvcnQgY29uc3QgaW52b2ljZVVybCA9ICdodHRwczovL2FkbWluLmNiZGJlbmUuY29tL2ltYWdlcy8nO1xuZXhwb3J0IGNvbnN0IHN1YnNQZXJjZW50ID0gMTA7XG5leHBvcnQgY29uc3QgZmlsZVBhdGggPVxuICAnaHR0cHM6Ly9hZG1pbi5jYmRiZW5lLmNvbS92YXIvd3d3L2NiZGJlbmVfM3JkZS9jYmRiZW5lLyc7XG5leHBvcnQgY29uc3QgbGFiU2hlZXRQYXRoID1cbiAgJ2h0dHBzOi8vYWRtaW4uY2JkYmVuZS5jb20vdmFyL3d3dy9jYmRiZW5lXzNyZGUvY2JkYmVuZS8nO1xuZXhwb3J0IGNvbnN0IGNvdW50cnlUYXggPSAxNSAvIDEwMDtcblxuZXhwb3J0IGNvbnN0IGNoYXRUaGVtZSA9IHtcbiAgYmFja2dyb3VuZDogJyNmZmZmZmYnLFxuICAvLyBmb250RmFtaWx5OiBmb250cy5tYWluZm9udCxcbiAgaGVhZGVyQmdDb2xvcjogJyMwMDAwMDAnLFxuICBoZWFkZXJGb250Q29sb3I6ICcjZmZmZmZmJyxcbiAgaGVhZGVyRm9udFNpemU6ICcyMHB4JyxcbiAgYm90QnViYmxlQ29sb3I6ICcjZWVlOWUzJyxcbiAgYm90Rm9udENvbG9yOiAnIzIwMjAyMCcsXG4gIHVzZXJCdWJibGVDb2xvcjogJyNmZmYnLFxuICB1c2VyRm9udENvbG9yOiAnIzRhNGE0YScsXG59O1xuXG5leHBvcnQgY29uc3QgZW5hYmxlQ291bnRyeSA9IFsnVVMnLCAnVVNBJywgJ1VuaXRlZCBTdGF0ZXMnXTtcbmV4cG9ydCBjb25zdCBhY2NvdW50VHlwZU9wdCA9IFtcbiAge1xuICAgIGxhYmVsOiAnQ2hlY2tpbmcnLFxuICAgIHZhbHVlOiAnY2hlY2tpbmcnLFxuICB9LFxuICB7XG4gICAgbGFiZWw6ICdTYXZpbmdzJyxcbiAgICB2YWx1ZTogJ3NhdmluZ3MnLFxuICB9LFxuICB7XG4gICAgbGFiZWw6ICdCdXNpbmVzcyBDaGVja2luZycsXG4gICAgdmFsdWU6ICdidXNpbmVzc0NoZWNraW5nJyxcbiAgfSxcbl07XG5leHBvcnQgY29uc3QgY3VzdG9tUmF0ZXMgPSBbXG4gIHtcbiAgICBpZDogJ3JhdGVfY3VzdG9tMScsXG4gICAgb2JqZWN0OiAnUmF0ZScsXG4gICAgY3JlYXRlZF9hdDogJzIwMjAtMDItMTBUMTA6NTQ6MDNaJyxcbiAgICB1cGRhdGVkX2F0OiAnMjAyMC0wMi0xMFQxMDo1NDowM1onLFxuICAgIG1vZGU6ICd0ZXN0JyxcbiAgICBzZXJ2aWNlOiAnUHJpb3JpdHknLFxuICAgIGNhcnJpZXI6ICdVU1BTJyxcbiAgICByYXRlOiAnOC40MicsXG4gICAgY3VycmVuY3k6ICdVU0QnLFxuICAgIHJldGFpbF9yYXRlOiAnMTQuOTAnLFxuICAgIHJldGFpbF9jdXJyZW5jeTogJ1VTRCcsXG4gICAgbGlzdF9yYXRlOiAnMTEuMTknLFxuICAgIGxpc3RfY3VycmVuY3k6ICdVU0QnLFxuICAgIGRlbGl2ZXJ5X2RheXM6IDIsXG4gICAgZGVsaXZlcnlfZGF0ZTogbnVsbCxcbiAgICBkZWxpdmVyeV9kYXRlX2d1YXJhbnRlZWQ6IGZhbHNlLFxuICAgIGVzdF9kZWxpdmVyeV9kYXlzOiAyLFxuICAgIHNoaXBtZW50X2lkOiAnc2hwXzIyNTVlYjdmMGU4YjQ3NzVhYmNmZTAwOWJlOWJhNTY5JyxcbiAgICBjYXJyaWVyX2FjY291bnRfaWQ6ICdjYV81Y2QyM2EyNGQ5YzM0Mjc3ODBkY2ZkZTY4ZmJiMWM3NicsXG4gICAgY3VzdG9tTmFtZTogJ1N0YW5kYXJkJyxcbiAgICBjdXN0b21SYXRlOiAxNS44OSxcbiAgfSxcbiAge1xuICAgIGlkOiAncmF0ZV9jdXN0b20yJyxcbiAgICBvYmplY3Q6ICdSYXRlJyxcbiAgICBjcmVhdGVkX2F0OiAnMjAyMC0wMi0xMFQxMDo1NDowM1onLFxuICAgIHVwZGF0ZWRfYXQ6ICcyMDIwLTAyLTEwVDEwOjU0OjAzWicsXG4gICAgbW9kZTogJ3Rlc3QnLFxuICAgIHNlcnZpY2U6ICdQYXJjZWxTZWxlY3QnLFxuICAgIGNhcnJpZXI6ICdVU1BTJyxcbiAgICByYXRlOiAnMTAuODknLFxuICAgIGN1cnJlbmN5OiAnVVNEJyxcbiAgICByZXRhaWxfcmF0ZTogJzEwLjg5JyxcbiAgICByZXRhaWxfY3VycmVuY3k6ICdVU0QnLFxuICAgIGxpc3RfcmF0ZTogJzEwLjg5JyxcbiAgICBsaXN0X2N1cnJlbmN5OiAnVVNEJyxcbiAgICBkZWxpdmVyeV9kYXlzOiA3LFxuICAgIGRlbGl2ZXJ5X2RhdGU6IG51bGwsXG4gICAgZGVsaXZlcnlfZGF0ZV9ndWFyYW50ZWVkOiBmYWxzZSxcbiAgICBlc3RfZGVsaXZlcnlfZGF5czogNyxcbiAgICBzaGlwbWVudF9pZDogJ3NocF8yMjU1ZWI3ZjBlOGI0Nzc1YWJjZmUwMDliZTliYTU2OScsXG4gICAgY2Fycmllcl9hY2NvdW50X2lkOiAnY2FfNWNkMjNhMjRkOWMzNDI3NzgwZGNmZGU2OGZiYjFjNzYnLFxuICAgIGN1c3RvbU5hbWU6ICdQcmlvcml0eScsXG4gICAgY3VzdG9tUmF0ZTogMjAuNTQsXG4gIH0sXG4gIHtcbiAgICBpZDogJ3JhdGVfY3VzdG9tMycsXG4gICAgb2JqZWN0OiAnUmF0ZScsXG4gICAgY3JlYXRlZF9hdDogJzIwMjAtMDItMTBUMTA6NTQ6MDNaJyxcbiAgICB1cGRhdGVkX2F0OiAnMjAyMC0wMi0xMFQxMDo1NDowM1onLFxuICAgIG1vZGU6ICd0ZXN0JyxcbiAgICBzZXJ2aWNlOiAnRXhwcmVzcycsXG4gICAgY2FycmllcjogJ1VTUFMnLFxuICAgIHJhdGU6ICc0My42MCcsXG4gICAgY3VycmVuY3k6ICdVU0QnLFxuICAgIHJldGFpbF9yYXRlOiAnNTAuODUnLFxuICAgIHJldGFpbF9jdXJyZW5jeTogJ1VTRCcsXG4gICAgbGlzdF9yYXRlOiAnNDMuNjAnLFxuICAgIGxpc3RfY3VycmVuY3k6ICdVU0QnLFxuICAgIGRlbGl2ZXJ5X2RheXM6IG51bGwsXG4gICAgZGVsaXZlcnlfZGF0ZTogbnVsbCxcbiAgICBkZWxpdmVyeV9kYXRlX2d1YXJhbnRlZWQ6IGZhbHNlLFxuICAgIGVzdF9kZWxpdmVyeV9kYXlzOiBudWxsLFxuICAgIHNoaXBtZW50X2lkOiAnc2hwXzIyNTVlYjdmMGU4YjQ3NzVhYmNmZTAwOWJlOWJhNTY5JyxcbiAgICBjYXJyaWVyX2FjY291bnRfaWQ6ICdjYV81Y2QyM2EyNGQ5YzM0Mjc3ODBkY2ZkZTY4ZmJiMWM3NicsXG4gICAgY3VzdG9tTmFtZTogJ0V4cHJlc3MnLFxuICAgIGN1c3RvbVJhdGU6IDQ4LjYsXG4gIH0sXG5dO1xuZXhwb3J0IGNvbnN0IHRvcEJhclRleHQgPSAnRnJlZSBzaGlwcGluZyBvbiBhbGwgb3JkZXJzIGFib3ZlICQ3NS4nOyAvLyBtYWtlIGl0IGVtcHR5IHN0cmluZyAoXCJcIikgdG8gaGlkZSB0aGEgYmFyXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgaW1hZ2VVcmwsXG4gIHByb2plY3ROYW1lLFxuICBiYXNlVXJsLFxuICBzZXJ2ZXJVcmwsXG4gIGdvb2dsZUFwaUtleSxcbiAgc2hpcHBpbmdGcmVlQWZ0ZXIsXG4gIHNoaXBwaW5nRXh0cmFSYXRlLFxuICBzaGlwcGluZ1N0YXRpY1JhdGUsXG4gIHJlZmVycmFsUHJlc2VudCxcbiAgZGVmYXVsdE9yZGVyU3RhdHVzLFxuICBkZWZhdWx0U3RhdHVzSW5PcmRlcixcbiAgaW52b2ljZVVybCxcbiAgZW5hYmxlQ291bnRyeSxcbiAgc3Vic1BlcmNlbnQsXG4gIGFjY291bnRUeXBlT3B0LFxuICBmaWxlUGF0aCxcbiAgbGFiU2hlZXRQYXRoLFxuICBjb3VudHJ5VGF4LFxuICBkb2NNelVybCxcbiAgY3VzdG9tUmF0ZXMsXG4gIGNoYXRUaGVtZSxcbiAgdG9wQmFyVGV4dCxcbiAgY29udGVudFVybCxcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./constants/projectSettings.js\n");

/***/ }),

/***/ "./pages/accessibility.js":
/*!********************************!*\
  !*** ./pages/accessibility.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dynamic */ \"next/dynamic\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _constants_projectSettings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/projectSettings */ \"./constants/projectSettings.js\");\nvar _jsxFileName = \"/Users/akshataggarwal/Documents/Coding Files/webd projects/missvalentine-front/pages/accessibility.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nconst Layout = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(() => __webpack_require__.e(/*! import() */ 27).then(__webpack_require__.bind(null, /*! ../components/Layouts/Layout */ \"./components/Layouts/Layout.js\")), {\n  ssr: false,\n  loadableGenerated: {\n    webpack: () => [/*require.resolve*/(/*! ../components/Layouts/Layout */ \"./components/Layouts/Layout.js\")],\n    modules: [\"../components/Layouts/Layout\"]\n  }\n});\nconst Heading = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(() => __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ../components/Heading */ \"./components/Heading.js\")), {\n  ssr: false,\n  loadableGenerated: {\n    webpack: () => [/*require.resolve*/(/*! ../components/Heading */ \"./components/Heading.js\")],\n    modules: [\"../components/Heading\"]\n  }\n});\n\n\nconst Accessibility = () => {\n  return __jsx(Layout, {\n    headerVersions: [\"bg-dark\"],\n    fixed: true,\n    headerTheme: \"black\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: \"c-accessibility__page-title\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }\n  }, __jsx(Heading, {\n    versions: [\"large\"],\n    parentClass: \"c-accessibility\",\n    style: {\n      fontFamily: \"futuraBT-medium\",\n      fontSize: \"32px\",\n      fontWeight: 500,\n      opacity: 0.9,\n      color: \"#000000\",\n      textTransform: \"uppercase\"\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 9\n    }\n  }, \"Website accessibility\")), __jsx(\"div\", {\n    className: \"c-accessibility__content\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 7\n    }\n  }, __jsx(Heading, {\n    className: \"c-accessibility__content--heading\",\n    style: {\n      fontFamily: \"futuraBT-medium\",\n      fontSize: \"20px\",\n      fontWeight: 500,\n      color: \"#000000\",\n      textTransform: \"uppercase\",\n      marginBottom: 0\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 9\n    }\n  }, \"Welcome to CBD \", _constants_projectSettings__WEBPACK_IMPORTED_MODULE_2__[\"projectName\"]), __jsx(\"div\", {\n    className: \"c-accessibility__content--content-div\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 9\n    }\n  }, _constants_projectSettings__WEBPACK_IMPORTED_MODULE_2__[\"projectName\"], \" LLC, a Delaware limited liability company d/b/a CBD\", \" \", _constants_projectSettings__WEBPACK_IMPORTED_MODULE_2__[\"projectName\"], \" collectively referred to in this privacy policy as \\u201CCBD\", _constants_projectSettings__WEBPACK_IMPORTED_MODULE_2__[\"projectName\"], \",\\u201D the \\u201CCompany\\u201D or sometimes \\u201Cwe\\u201D or \\u201Cus\\u201D or \\u201Cour\\u201D), operates the website located at the URL www.CBDbene.com (together with any other website or applications branded as CBD \", _constants_projectSettings__WEBPACK_IMPORTED_MODULE_2__[\"projectName\"], \" \", \"(collectively, the \\u201CWebsite\\u201D). CBD bene is committed to making our website accessible to all our customers. We have been making changes to improve website accessibility and will continue to monitor and make improvements going forward. If you would like to send us feedback about our website, please contact us using the email: \", __jsx(\"a\", {\n    style: {\n      color: \"black\",\n      fontWeight: \"bold\"\n    },\n    href: \"mailto:customerservice@cbdbene.com\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 65\n    }\n  }, \"customerservice@cbdbene.com\"))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Accessibility);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hY2Nlc3NpYmlsaXR5LmpzP2RhZTYiXSwibmFtZXMiOlsiTGF5b3V0IiwiZHluYW1pYyIsInNzciIsIkhlYWRpbmciLCJBY2Nlc3NpYmlsaXR5IiwiZm9udEZhbWlseSIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsIm9wYWNpdHkiLCJjb2xvciIsInRleHRUcmFuc2Zvcm0iLCJtYXJnaW5Cb3R0b20iLCJwcm9qZWN0TmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQSxNQUFNQSxNQUFNLEdBQUdDLG1EQUFPLENBQUMsTUFBTSxvSkFBUCxFQUErQztBQUNuRUMsS0FBRyxFQUFFLEtBRDhEO0FBQUE7QUFBQSx3Q0FBakMsb0VBQWlDO0FBQUEsY0FBakMsOEJBQWlDO0FBQUE7QUFBQSxDQUEvQyxDQUF0QjtBQUdBLE1BQU1DLE9BQU8sR0FBR0YsbURBQU8sQ0FBQyxNQUFNLHFJQUFQLEVBQXdDO0FBQzdEQyxLQUFHLEVBQUUsS0FEd0Q7QUFBQTtBQUFBLHdDQUExQixzREFBMEI7QUFBQSxjQUExQix1QkFBMEI7QUFBQTtBQUFBLENBQXhDLENBQXZCO0FBR0E7O0FBRUEsTUFBTUUsYUFBYSxHQUFHLE1BQU07QUFDMUIsU0FDRSxNQUFDLE1BQUQ7QUFBUSxrQkFBYyxFQUFFLENBQUMsU0FBRCxDQUF4QjtBQUFxQyxTQUFLLEVBQUUsSUFBNUM7QUFBa0QsZUFBVyxFQUFDLE9BQTlEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyw2QkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxPQUFEO0FBQ0UsWUFBUSxFQUFFLENBQUMsT0FBRCxDQURaO0FBRUUsZUFBVyxFQUFDLGlCQUZkO0FBR0UsU0FBSyxFQUFFO0FBQ0xDLGdCQUFVLEVBQUUsaUJBRFA7QUFFTEMsY0FBUSxFQUFFLE1BRkw7QUFHTEMsZ0JBQVUsRUFBRSxHQUhQO0FBSUxDLGFBQU8sRUFBRSxHQUpKO0FBS0xDLFdBQUssRUFBRSxTQUxGO0FBTUxDLG1CQUFhLEVBQUU7QUFOVixLQUhUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBREYsQ0FERixFQWlCRTtBQUFLLGFBQVMsRUFBQywwQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxPQUFEO0FBQ0UsYUFBUyxFQUFDLG1DQURaO0FBRUUsU0FBSyxFQUFFO0FBQ0xMLGdCQUFVLEVBQUUsaUJBRFA7QUFFTEMsY0FBUSxFQUFFLE1BRkw7QUFHTEMsZ0JBQVUsRUFBRSxHQUhQO0FBSUxFLFdBQUssRUFBRSxTQUpGO0FBS0xDLG1CQUFhLEVBQUUsV0FMVjtBQU1MQyxrQkFBWSxFQUFFO0FBTlQsS0FGVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQVdrQkMsc0VBWGxCLENBREYsRUFjRTtBQUFLLGFBQVMsRUFBQyx1Q0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dBLHNFQURILDBEQUNvRSxHQURwRSxFQUVHQSxzRUFGSCxtRUFHR0Esc0VBSEgsaU9BS29EQSxzRUFMcEQsRUFLaUUsR0FMakUsdVZBVXdEO0FBQ2hELFNBQUssRUFBRTtBQUFFSCxXQUFLLEVBQUUsT0FBVDtBQUFrQkYsZ0JBQVUsRUFBRTtBQUE5QixLQUR5QztBQUVoRCxRQUFJLEVBQUMsb0NBRjJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUNBVnhELENBZEYsQ0FqQkYsQ0FERjtBQW9ERCxDQXJERDs7QUF1RGVILDRFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvYWNjZXNzaWJpbGl0eS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBkeW5hbWljIGZyb20gJ25leHQvZHluYW1pYydcbmNvbnN0IExheW91dCA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KFwiLi4vY29tcG9uZW50cy9MYXlvdXRzL0xheW91dFwiKSwge1xuICBzc3I6IGZhbHNlLFxufSk7XG5jb25zdCBIZWFkaW5nID0gZHluYW1pYygoKSA9PiBpbXBvcnQoXCIuLi9jb21wb25lbnRzL0hlYWRpbmdcIiksIHtcbiAgc3NyOiBmYWxzZSxcbn0pO1xuaW1wb3J0IHsgcHJvamVjdE5hbWUgfSBmcm9tIFwiLi4vY29uc3RhbnRzL3Byb2plY3RTZXR0aW5nc1wiO1xuXG5jb25zdCBBY2Nlc3NpYmlsaXR5ID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxMYXlvdXQgaGVhZGVyVmVyc2lvbnM9e1tcImJnLWRhcmtcIl19IGZpeGVkPXt0cnVlfSBoZWFkZXJUaGVtZT1cImJsYWNrXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImMtYWNjZXNzaWJpbGl0eV9fcGFnZS10aXRsZVwiPlxuICAgICAgICA8SGVhZGluZ1xuICAgICAgICAgIHZlcnNpb25zPXtbXCJsYXJnZVwiXX1cbiAgICAgICAgICBwYXJlbnRDbGFzcz1cImMtYWNjZXNzaWJpbGl0eVwiXG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIGZvbnRGYW1pbHk6IFwiZnV0dXJhQlQtbWVkaXVtXCIsXG4gICAgICAgICAgICBmb250U2l6ZTogXCIzMnB4XCIsXG4gICAgICAgICAgICBmb250V2VpZ2h0OiA1MDAsXG4gICAgICAgICAgICBvcGFjaXR5OiAwLjksXG4gICAgICAgICAgICBjb2xvcjogXCIjMDAwMDAwXCIsXG4gICAgICAgICAgICB0ZXh0VHJhbnNmb3JtOiBcInVwcGVyY2FzZVwiLFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICBXZWJzaXRlIGFjY2Vzc2liaWxpdHlcbiAgICAgICAgPC9IZWFkaW5nPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImMtYWNjZXNzaWJpbGl0eV9fY29udGVudFwiPlxuICAgICAgICA8SGVhZGluZ1xuICAgICAgICAgIGNsYXNzTmFtZT1cImMtYWNjZXNzaWJpbGl0eV9fY29udGVudC0taGVhZGluZ1wiXG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIGZvbnRGYW1pbHk6IFwiZnV0dXJhQlQtbWVkaXVtXCIsXG4gICAgICAgICAgICBmb250U2l6ZTogXCIyMHB4XCIsXG4gICAgICAgICAgICBmb250V2VpZ2h0OiA1MDAsXG4gICAgICAgICAgICBjb2xvcjogXCIjMDAwMDAwXCIsXG4gICAgICAgICAgICB0ZXh0VHJhbnNmb3JtOiBcInVwcGVyY2FzZVwiLFxuICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAwLFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICBXZWxjb21lIHRvIENCRCB7cHJvamVjdE5hbWV9XG4gICAgICAgIDwvSGVhZGluZz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjLWFjY2Vzc2liaWxpdHlfX2NvbnRlbnQtLWNvbnRlbnQtZGl2XCI+XG4gICAgICAgICAge3Byb2plY3ROYW1lfSBMTEMsIGEgRGVsYXdhcmUgbGltaXRlZCBsaWFiaWxpdHkgY29tcGFueSBkL2IvYSBDQkR7XCIgXCJ9XG4gICAgICAgICAge3Byb2plY3ROYW1lfSBjb2xsZWN0aXZlbHkgcmVmZXJyZWQgdG8gaW4gdGhpcyBwcml2YWN5IHBvbGljeSBhcyDigJxDQkRcbiAgICAgICAgICB7cHJvamVjdE5hbWV9LOKAnSB0aGUg4oCcQ29tcGFueeKAnSBvciBzb21ldGltZXMg4oCcd2XigJ0gb3Ig4oCcdXPigJ0gb3Ig4oCcb3Vy4oCdKSxcbiAgICAgICAgICBvcGVyYXRlcyB0aGUgd2Vic2l0ZSBsb2NhdGVkIGF0IHRoZSBVUkwgd3d3LkNCRGJlbmUuY29tICh0b2dldGhlciB3aXRoXG4gICAgICAgICAgYW55IG90aGVyIHdlYnNpdGUgb3IgYXBwbGljYXRpb25zIGJyYW5kZWQgYXMgQ0JEIHtwcm9qZWN0TmFtZX17XCIgXCJ9XG4gICAgICAgICAgKGNvbGxlY3RpdmVseSwgdGhlIOKAnFdlYnNpdGXigJ0pLiBDQkQgYmVuZSBpcyBjb21taXR0ZWQgdG8gbWFraW5nIG91clxuICAgICAgICAgIHdlYnNpdGUgYWNjZXNzaWJsZSB0byBhbGwgb3VyIGN1c3RvbWVycy4gV2UgaGF2ZSBiZWVuIG1ha2luZyBjaGFuZ2VzXG4gICAgICAgICAgdG8gaW1wcm92ZSB3ZWJzaXRlIGFjY2Vzc2liaWxpdHkgYW5kIHdpbGwgY29udGludWUgdG8gbW9uaXRvciBhbmQgbWFrZVxuICAgICAgICAgIGltcHJvdmVtZW50cyBnb2luZyBmb3J3YXJkLiBJZiB5b3Ugd291bGQgbGlrZSB0byBzZW5kIHVzIGZlZWRiYWNrXG4gICAgICAgICAgYWJvdXQgb3VyIHdlYnNpdGUsIHBsZWFzZSBjb250YWN0IHVzIHVzaW5nIHRoZSBlbWFpbDogPGFcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBjb2xvcjogXCJibGFja1wiLCBmb250V2VpZ2h0OiBcImJvbGRcIiB9fVxuICAgICAgICAgICAgICAgIGhyZWY9XCJtYWlsdG86Y3VzdG9tZXJzZXJ2aWNlQGNiZGJlbmUuY29tXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIGN1c3RvbWVyc2VydmljZUBjYmRiZW5lLmNvbVxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBY2Nlc3NpYmlsaXR5O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/accessibility.js\n");

/***/ }),

/***/ "@ant-design/icons":
/*!************************************!*\
  !*** external "@ant-design/icons" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@ant-design/icons\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW50LWRlc2lnbi9pY29uc1wiPzI0MTkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiQGFudC1kZXNpZ24vaWNvbnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW50LWRlc2lnbi9pY29uc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@ant-design/icons\n");

/***/ }),

/***/ "@fortawesome/fontawesome-svg-core":
/*!****************************************************!*\
  !*** external "@fortawesome/fontawesome-svg-core" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@fortawesome/fontawesome-svg-core\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtc3ZnLWNvcmVcIj9iOWY4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IkBmb3J0YXdlc29tZS9mb250YXdlc29tZS1zdmctY29yZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBmb3J0YXdlc29tZS9mb250YXdlc29tZS1zdmctY29yZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@fortawesome/fontawesome-svg-core\n");

/***/ }),

/***/ "@fortawesome/free-brands-svg-icons":
/*!*****************************************************!*\
  !*** external "@fortawesome/free-brands-svg-icons" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@fortawesome/free-brands-svg-icons\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAZm9ydGF3ZXNvbWUvZnJlZS1icmFuZHMtc3ZnLWljb25zXCI/MjAzNCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAZm9ydGF3ZXNvbWUvZnJlZS1icmFuZHMtc3ZnLWljb25zLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGZvcnRhd2Vzb21lL2ZyZWUtYnJhbmRzLXN2Zy1pY29uc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@fortawesome/free-brands-svg-icons\n");

/***/ }),

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"antd\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbnRkXCI/MDhhYSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJhbnRkLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW50ZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///antd\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiPzcwYzYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiYXhpb3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///axios\n");

/***/ }),

/***/ "box-dimension-calculator":
/*!*******************************************!*\
  !*** external "box-dimension-calculator" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"box-dimension-calculator\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJib3gtZGltZW5zaW9uLWNhbGN1bGF0b3JcIj9iOWFmIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6ImJveC1kaW1lbnNpb24tY2FsY3VsYXRvci5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJveC1kaW1lbnNpb24tY2FsY3VsYXRvclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///box-dimension-calculator\n");

/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"classnames\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjbGFzc25hbWVzXCI/YWFhYiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJjbGFzc25hbWVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY2xhc3NuYW1lc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///classnames\n");

/***/ }),

/***/ "fuse.js":
/*!**************************!*\
  !*** external "fuse.js" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fuse.js\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmdXNlLmpzXCI/YTg4MiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJmdXNlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZnVzZS5qc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///fuse.js\n");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"lodash\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJsb2Rhc2hcIj85N2RlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6ImxvZGFzaC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImxvZGFzaFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///lodash\n");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"moment\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb21lbnRcIj9iZDc2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im1vbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vbWVudFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///moment\n");

/***/ }),

/***/ "next/dynamic":
/*!*******************************!*\
  !*** external "next/dynamic" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/dynamic\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2R5bmFtaWNcIj82ZDNmIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvZHluYW1pYy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZHluYW1pY1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/dynamic\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/router\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiP2Q4M2UiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibmV4dC9yb3V0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/router\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-component-debounce":
/*!*******************************************!*\
  !*** external "react-component-debounce" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-component-debounce\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1jb21wb25lbnQtZGVib3VuY2VcIj9mMmFhIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0LWNvbXBvbmVudC1kZWJvdW5jZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWNvbXBvbmVudC1kZWJvdW5jZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-component-debounce\n");

/***/ }),

/***/ "react-facebook-login":
/*!***************************************!*\
  !*** external "react-facebook-login" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-facebook-login\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1mYWNlYm9vay1sb2dpblwiPzI4NWIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QtZmFjZWJvb2stbG9naW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1mYWNlYm9vay1sb2dpblwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-facebook-login\n");

/***/ }),

/***/ "react-google-login":
/*!*************************************!*\
  !*** external "react-google-login" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-google-login\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1nb29nbGUtbG9naW5cIj9kZDQ2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0LWdvb2dsZS1sb2dpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWdvb2dsZS1sb2dpblwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-google-login\n");

/***/ }),

/***/ "react-icons-kit":
/*!**********************************!*\
  !*** external "react-icons-kit" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-icons-kit\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pY29ucy1raXRcIj9kYzk2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0LWljb25zLWtpdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWljb25zLWtpdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-icons-kit\n");

/***/ }),

/***/ "react-icons-kit/md/":
/*!**************************************!*\
  !*** external "react-icons-kit/md/" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-icons-kit/md/\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pY29ucy1raXQvbWQvXCI/OWE2ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJyZWFjdC1pY29ucy1raXQvbWQvLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaWNvbnMta2l0L21kL1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-icons-kit/md/\n");

/***/ }),

/***/ "react-icons/ai":
/*!*********************************!*\
  !*** external "react-icons/ai" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-icons/ai\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pY29ucy9haVwiPzQ4OTEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QtaWNvbnMvYWkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pY29ucy9haVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-icons/ai\n");

/***/ }),

/***/ "react-icons/fi":
/*!*********************************!*\
  !*** external "react-icons/fi" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-icons/fi\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pY29ucy9maVwiP2M0NmYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QtaWNvbnMvZmkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pY29ucy9maVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-icons/fi\n");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-is\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pc1wiPzBkMzIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QtaXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-is\n");

/***/ }),

/***/ "react-lazy-load-image-component":
/*!**************************************************!*\
  !*** external "react-lazy-load-image-component" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-lazy-load-image-component\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1sYXp5LWxvYWQtaW1hZ2UtY29tcG9uZW50XCI/NjM0MiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJyZWFjdC1sYXp5LWxvYWQtaW1hZ2UtY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtbGF6eS1sb2FkLWltYWdlLWNvbXBvbmVudFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-lazy-load-image-component\n");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiPzc4Y2QiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QtcmVkdXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-redux\n");

/***/ }),

/***/ "react-simple-chatbot":
/*!***************************************!*\
  !*** external "react-simple-chatbot" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-simple-chatbot\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1zaW1wbGUtY2hhdGJvdFwiPzA4YTMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3Qtc2ltcGxlLWNoYXRib3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1zaW1wbGUtY2hhdGJvdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-simple-chatbot\n");

/***/ }),

/***/ "react-svg":
/*!****************************!*\
  !*** external "react-svg" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-svg\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1zdmdcIj83ZDQ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0LXN2Zy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXN2Z1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-svg\n");

/***/ }),

/***/ "reactstrap":
/*!*****************************!*\
  !*** external "reactstrap" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"reactstrap\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdHN0cmFwXCI/MjQ5MyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJyZWFjdHN0cmFwLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RzdHJhcFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///reactstrap\n");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiP2QzMjUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVkdXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///redux\n");

/***/ }),

/***/ "redux-persist":
/*!********************************!*\
  !*** external "redux-persist" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-persist\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1wZXJzaXN0XCI/Njc4YSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJyZWR1eC1wZXJzaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtcGVyc2lzdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///redux-persist\n");

/***/ }),

/***/ "redux-persist/lib/storage":
/*!********************************************!*\
  !*** external "redux-persist/lib/storage" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-persist/lib/storage\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1wZXJzaXN0L2xpYi9zdG9yYWdlXCI/ZWIyMCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJyZWR1eC1wZXJzaXN0L2xpYi9zdG9yYWdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtcGVyc2lzdC9saWIvc3RvcmFnZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///redux-persist/lib/storage\n");

/***/ }),

/***/ "redux-persist/lib/storage/session":
/*!****************************************************!*\
  !*** external "redux-persist/lib/storage/session" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-persist/lib/storage/session\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1wZXJzaXN0L2xpYi9zdG9yYWdlL3Nlc3Npb25cIj9iZTk1Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlZHV4LXBlcnNpc3QvbGliL3N0b3JhZ2Uvc2Vzc2lvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXBlcnNpc3QvbGliL3N0b3JhZ2Uvc2Vzc2lvblwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///redux-persist/lib/storage/session\n");

/***/ }),

/***/ "redux-state-sync":
/*!***********************************!*\
  !*** external "redux-state-sync" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-state-sync\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1zdGF0ZS1zeW5jXCI/NWE0MSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJyZWR1eC1zdGF0ZS1zeW5jLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtc3RhdGUtc3luY1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///redux-state-sync\n");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-thunk\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC10aHVua1wiPzg4MDgiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVkdXgtdGh1bmsuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC10aHVua1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///redux-thunk\n");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-components\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiP2Y1YWQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoic3R5bGVkLWNvbXBvbmVudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///styled-components\n");

/***/ }),

/***/ "validator":
/*!****************************!*\
  !*** external "validator" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"validator\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ2YWxpZGF0b3JcIj9iMGNmIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InZhbGlkYXRvci5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInZhbGlkYXRvclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///validator\n");

/***/ })

/******/ });