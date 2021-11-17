/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/calculadora.js":
/*!****************************!*\
  !*** ./src/calculadora.js ***!
  \****************************/
/***/ ((module) => {

eval("var mensaje1 = function mensaje1() {\n  console.log(\"Mensaje1\");\n};\n\nvar mensaje2 = function mensaje2() {\n  console.log(\"Mensaje2\");\n};\n\nvar mensaje3 = function mensaje3() {\n  console.log(\"Mensaje3\");\n};\n\nvar obj = {\n  abc1: function abc1() {\n    setTimeout(mensaje1, 1000);\n  },\n  abc2: function abc2() {\n    setTimeout(mensaje2, 2000);\n  },\n  abc3: function abc3() {\n    setTimeout(mensaje3, 3000);\n  }\n};\nmodule.exports = obj;\n\n//# sourceURL=webpack://webpack1/./src/calculadora.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var cal = __webpack_require__(/*! ./calculadora */ \"./src/calculadora.js\");\n\nconsole.log(cal.abc1());\nconsole.log(cal.abc2());\nconsole.log(cal.abc3());\n\n//# sourceURL=webpack://webpack1/./src/index.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;