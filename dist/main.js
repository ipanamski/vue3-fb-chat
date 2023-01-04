/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["vue3-fb-chat"] = factory();
	else
		root["vue3-fb-chat"] = factory();
})(this, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/helpers.js":
/*!************************!*\
  !*** ./src/helpers.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fetchFbSdk\": () => (/* binding */ fetchFbSdk),\n/* harmony export */   \"getFbSdk\": () => (/* binding */ getFbSdk),\n/* harmony export */   \"initFbSdk\": () => (/* binding */ initFbSdk),\n/* harmony export */   \"mountFbCustomerChat\": () => (/* binding */ mountFbCustomerChat)\n/* harmony export */ });\nconst defaultLocale = 'en_us'\n\nfunction fetchFbSdk(options) {\n  const locale = options.locale ? options.locale : defaultLocale\n  return new Promise((resolve, reject) => {\n    ;(function(d, s, id) {\n      const fjs = d.getElementsByTagName(s)[0]\n      if (d.getElementById(id)) {\n        return\n      }\n      const js = d.createElement(s)\n      js.id = id\n      js.src = 'https://connect.facebook.net/' + locale + '/sdk/xfbml.customerchat.js'\n      fjs.parentNode.insertBefore(js, fjs)\n      js.onload = function() {\n        console.log('vue3-fb-chat: loaded')\n        resolve()\n      }\n      js.onerror = function() {\n        reject()\n        console.error('vue3-fb-chat: NOT loaded')\n      }\n    })(document, 'script', 'facebook-jssdk')\n  })\n}\n\nfunction initFbSdk(options) {\n  return new Promise(resolve => {\n    window.fbAsyncInit = function() {\n      const defaults = { cookie: true, xfbml: true, version: 'v5.0' }\n      options = { ...defaults, ...options }\n      window.FB.init(options)\n      resolve()\n    }\n  })\n}\n\nfunction getFbSdk(options) {\n  return new Promise(resolve => {\n    if (window.FB) {\n      resolve(window.FB)\n    } else {\n      fetchFbSdk(options).then(() => {\n        initFbSdk(options).then(() => {\n          resolve(window.FB)\n        })\n      })\n    }\n  })\n}\n\nfunction mountFbCustomerChat(options) {\n  const elem = document.createElement('div')\n  elem.setAttribute('class', 'fb-customerchat')\n  elem.setAttribute('attribution', 'setup_tool')\n\n  // set attributes\n  Object.entries(options).forEach(attr => {\n    elem.setAttribute(attr[0], attr[1])\n  })\n  document.body.appendChild(elem)\n}\n\n//# sourceURL=webpack://vue3-fb-chat/./src/helpers.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./src/helpers.js\");\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  install : function (app, options) {\n    app.config.globalProperties.$fbCustomerChat = {\n      setOptions(otherOptions) {\n        options = { ...options, ...otherOptions }\n      }\n    }\n\n    app.mixin({\n      mounted() {\n        if (!this.parent) {\n          (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.getFbSdk)(options).then(() => {\n            if (options.page_id) {\n              (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.mountFbCustomerChat)(options)\n            } else {\n              console.error(\n                'vue3-fb-chat: You have to specify `page_id`',\n              )\n            }\n          })\n        }\n      }\n    })\n  }\n});\n\n//# sourceURL=webpack://vue3-fb-chat/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});